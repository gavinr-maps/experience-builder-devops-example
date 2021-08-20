/** @jsx jsx */
import {
  React, Immutable, ImmutableObject, DataSourceJson, IMState, FormattedMessage, jsx, getAppStore,
  UseDataSource
} from 'jimu-core'
import { Switch, Radio, Label } from 'jimu-ui'
import { JimuMapViewSelector, SettingSection, SettingRow } from 'jimu-ui/advanced/setting-components'
import { DataSourceSelector } from 'jimu-ui/advanced/data-source-selector'
import { DataSourceTypes } from 'jimu-arcgis'
import { AllWidgetSettingProps } from 'jimu-for-builder'
import { IMConfig } from '../config'
import defaultMessages from './translations/default'
import MapThumb from './components/map-thumb'
import { getStyle } from './lib/style'

interface ExtraProps{
  dsJsons: ImmutableObject<{ [dsId: string]: DataSourceJson }>
}

export interface WidgetSettingState{
  useMapWidget: boolean
}

export default class Setting extends React.PureComponent<AllWidgetSettingProps<IMConfig> & ExtraProps, WidgetSettingState> {
  supportedDsTypes = Immutable([DataSourceTypes.WebMap, DataSourceTypes.WebScene])

  static mapExtraStateProps = (state: IMState): ExtraProps => {
    return {
      dsJsons: state.appStateInBuilder.appConfig.dataSources
    }
  }

  constructor (props) {
    super(props)
    this.state = {
      useMapWidget: this.props.config.useMapWidget || false
    }
  }

  getPortUrl = (): string => {
    const portUrl = getAppStore().getState().portalUrl
    return portUrl
  }

  onRadioChange = (useMapWidget) => {
    this.props.onSettingChange({
      id: this.props.id,
      config: this.props.config.set('useMapWidget', useMapWidget)
    })

    this.setState({
      useMapWidget: useMapWidget
    })
  }

  onToolsChanged = (checked, name): void => {
    this.props.onSettingChange({
      id: this.props.id,
      config: this.props.config.set(name, checked)
    })
  }

  onOptionsChanged = (checked, name): void => {
    this.props.onSettingChange({
      id: this.props.id,
      config: this.props.config.set(name, checked)
    })
  }

  onToggleUseDataEnabled = (useDataSourcesEnabled: boolean) => {
    this.props.onSettingChange({
      id: this.props.id,
      useDataSourcesEnabled
    })
  }

  onDataSourceChange = (useDataSources: UseDataSource[]) => {
    if (!useDataSources) {
      return
    }

    this.props.onSettingChange({
      id: this.props.id,
      useDataSources: useDataSources
    })
  }

  onMapWidgetSelected = (useMapWidgetIds: string[]) => {
    this.props.onSettingChange({
      id: this.props.id,
      useMapWidgetIds: useMapWidgetIds
    })
  }

  render () {
    const portalUrl = this.getPortUrl()

    let setDataContent = null
    let dataSourceSelectorContent = null
    let mapSelectorContent = null
    let actionsContent = null
    let optionsContent = null

    dataSourceSelectorContent = (
      <div className='data-selector-section'>
        <SettingRow>
          <DataSourceSelector
            types={this.supportedDsTypes} useDataSources={this.props.useDataSources}
            useDataSourcesEnabled mustUseDataSource
            onChange={this.onDataSourceChange} widgetId={this.props.id}
          />
        </SettingRow>
        {portalUrl && this.props.dsJsons && this.props.useDataSources && this.props.useDataSources.length === 1 && <SettingRow>
          <div className='w-100'>
            <div className='webmap-thumbnail' title={this.props.dsJsons[this.props.useDataSources[0].dataSourceId]?.label}>
              <MapThumb
                mapItemId={this.props.dsJsons[this.props.useDataSources[0].dataSourceId]
                  ? this.props.dsJsons[this.props.useDataSources[0].dataSourceId].itemId : null}
                portUrl={this.props.dsJsons[this.props.useDataSources[0].dataSourceId]
                  ? this.props.dsJsons[this.props.useDataSources[0].dataSourceId].portalUrl : null}
              />
            </div>
          </div>
        </SettingRow>}
      </div>
    )

    mapSelectorContent = (
      <div className='map-selector-section'>
        <SettingRow>
          <JimuMapViewSelector onSelect={this.onMapWidgetSelected} useMapWidgetIds={this.props.useMapWidgetIds} />
        </SettingRow>
      </div>
    )

    if (this.state.useMapWidget) {
      setDataContent = mapSelectorContent

      actionsContent = (
        <React.Fragment>
          <SettingRow label={<FormattedMessage id='goto' defaultMessage={defaultMessages.goto} />}>
            <Switch
              className='can-x-switch' checked={(this.props.config && this.props.config.goto) || false}
              data-key='goto' onChange={evt => { this.onToolsChanged(evt.target.checked, 'goto') }}
            />
          </SettingRow>
          <SettingRow label={<FormattedMessage id='transparency' defaultMessage={defaultMessages.transparency} />}>
            <Switch
              className='can-x-switch' checked={(this.props.config && this.props.config.opacity) || false}
              data-key='opacity' onChange={evt => { this.onToolsChanged(evt.target.checked, 'opacity') }}
            />
          </SettingRow>
        </React.Fragment>
      )

      optionsContent = (
        <SettingRow label={<FormattedMessage id='setVisibility' defaultMessage={defaultMessages.setVisibility} />}>
          <Switch
            className='can-x-switch' checked={(this.props.config && this.props.config.setVisibility) || false}
            data-key='setVisibility' onChange={evt => { this.onOptionsChanged(evt.target.checked, 'setVisibility') }}
          />
        </SettingRow>
      )
    } else {
      setDataContent = dataSourceSelectorContent
    }

    return (
      <div css={getStyle(this.props.theme)}>
        <div className='widget-setting-layerlist'>
          <SettingSection title={this.props.intl.formatMessage({ id: 'sourceLabel', defaultMessage: defaultMessages.sourceLabel })}>
            <SettingRow>
              <div className='layerlist-tools w-100'>
                <div className='w-100'>
                  <div className='layerlist-tools-item radio'>
                    <Radio
                      id='map-data' style={{ cursor: 'pointer' }}
                      name='map-data' onChange={e => this.onRadioChange(false)} checked={!this.state.useMapWidget}
                    />
                    <Label style={{ cursor: 'pointer' }} for='map-data' className='ml-1'>
                      {this.props.intl.formatMessage({ id: 'showLayerForMap', defaultMessage: defaultMessages.showLayerForMap })}
                    </Label>
                  </div>
                </div>
                <div className='w-100'>
                  <div className='layerlist-tools-item radio'>
                    <Radio
                      id='map-view' style={{ cursor: 'pointer' }}
                      name='map-view' onChange={e => this.onRadioChange(true)} checked={this.state.useMapWidget}
                    />
                    <Label style={{ cursor: 'pointer' }} for='map-view' className='ml-1'>
                      {this.props.intl.formatMessage({ id: 'interactWithMap', defaultMessage: defaultMessages.interactWithMap })}
                    </Label>
                  </div>
                </div>
              </div>
            </SettingRow>
            {setDataContent}
          </SettingSection>

          <SettingSection title={this.props.intl.formatMessage({ id: 'options', defaultMessage: defaultMessages.options })}>
            {actionsContent}
            <SettingRow label={<FormattedMessage id='information' defaultMessage={defaultMessages.information} />}>
              <Switch
                className='can-x-switch' checked={(this.props.config && this.props.config.information) || false}
                data-key='information' onChange={evt => { this.onToolsChanged(evt.target.checked, 'information') }}
              />
            </SettingRow>
            {optionsContent}
          </SettingSection>

        </div>
      </div>
    )
  }
}
