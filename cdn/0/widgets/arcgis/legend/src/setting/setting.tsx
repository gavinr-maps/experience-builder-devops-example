/** @jsx jsx */
import { React, Immutable, ImmutableObject, DataSourceJson, IMState, FormattedMessage, jsx, getAppStore, UseDataSource, IMThemeVariables } from 'jimu-core'
import { Switch, Radio, Label, BackgroundStyle, FillType, defaultMessages as jimuiDefaultMessage } from 'jimu-ui'
import { JimuMapViewSelector, SettingSection, SettingRow } from 'jimu-ui/advanced/setting-components'
import { DataSourceTypes } from 'jimu-arcgis'
import { AllWidgetSettingProps } from 'jimu-for-builder'
import {/* DataSourceSelector */} from 'jimu-ui/advanced/data-source-selector'
import { defaultMessages as jimuLayoutMessages } from 'jimu-layouts/layout-runtime'
import { ThemeColorPicker } from 'jimu-ui/basic/color-picker'
import { IMConfig, Style } from '../config'
import defaultMessages from './translations/default'
// import MapThumb from './components/map-thumb';
import { getStyle } from './lib/style'
const textIcon = require('jimu-ui/lib/icons/uppercase.svg')

const pickerBlockProps = { icon: textIcon }

export enum CardLayout {
  Auto = 'auto',
  SideBySide = 'side-by-side',
  Stack = 'stack'
}

interface ExtraProps{
  dsJsons: ImmutableObject<{ [dsId: string]: DataSourceJson}>
  appTheme: IMThemeVariables
}

export interface WidgetSettingState{
  cardStyle: boolean
  cardLayoutValue: string
}

export default class Setting extends React.PureComponent<AllWidgetSettingProps<IMConfig> & ExtraProps, WidgetSettingState> {
  supportedDsTypes = Immutable([DataSourceTypes.WebMap, DataSourceTypes.WebScene])

  static mapExtraStateProps = (state: IMState): ExtraProps => {
    return {
      dsJsons: state.appStateInBuilder.appConfig.dataSources,
      appTheme: state && state.appStateInBuilder && state.appStateInBuilder.theme
    }
  }

  constructor (props) {
    super(props)
    this.state = {
      cardStyle: this.props.config.cardStyle || false,
      cardLayoutValue: this.props.config.cardLayout || CardLayout.Auto
    }
  }

  getPortUrl = (): string => {
    const portUrl = getAppStore().getState().portalUrl
    return portUrl
  }

  getDefaultStyleConfig (): Style {
    return {
      useCustom: false,
      background: {
        color: '',
        fillType: FillType.FILL
      },
      fontColor: ''
    }
  }

  getStyleConfig (): Style {
    if (this.props.config.style && this.props.config.style.useCustom) {
      return this.props.config.style
    } else {
      return this.getDefaultStyleConfig()
    }
  }

  onOptionsChanged = (checked, name): void => {
    this.props.onSettingChange({
      id: this.props.id,
      config: this.props.config.set(name, checked)
    })
    if (name === 'cardStyle') {
      this.setState({
        cardStyle: checked
      })
    }
  }

  onRadioChange = (cardLayout: CardLayout) => {
    this.props.onSettingChange({
      id: this.props.id,
      config: this.props.config.set('cardLayout', cardLayout)
    })

    this.setState({
      cardLayoutValue: cardLayout
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

  onUseCustomStyleChanged = (checked) => {
    // const style = this.props.config.style ? Immutable(this.props.config.style) : Immutable({} as Style);
    this.props.onSettingChange({
      id: this.props.id,
      config: this.props.config.setIn(['style', 'useCustom'], checked)
    })
  }

  onFontStyleChanged = (color) => {
    // const style = this.props.config.style ? Immutable(this.props.config.style) : Immutable({} as Style);
    this.props.onSettingChange({
      id: this.props.id,
      config: this.props.config.setIn(['style', 'fontColor'], color)
    })
  }

  onBackgroundStyleChange = (backgroundColor) => {
    const bg = {
      color: backgroundColor,
      fillType: FillType.FILL
    }
    let background = Immutable(this.props.config?.style?.background ?? {} as BackgroundStyle)
    for (const key in bg) {
      switch (key) {
      case 'fillType':
        if (background.fillType !== bg[key]) {
          background = background.set('fillType', bg[key])
        }
        break
      case 'color':
        background = background.set('color', bg[key])
        break
      case 'image':
        background = background.set('image', bg[key])
        break
      }
    }

    // const style = this.props.config.style ? Immutable(this.props.config.style) : Immutable({} as Style);
    this.props.onSettingChange({
      id: this.props.id,
      config: this.props.config.setIn(['style', 'background'], background)
    })
  }

  render () {
    // const portalUrl = this.getPortUrl();

    let cardLayoutContent = null
    if (this.state.cardStyle) {
      cardLayoutContent = (
        <div className='card-layout-content pl-2'>
          <div className='w-100 legend-tools'>
            <div className='legend-tools-item card-style-radio'>
              <Radio
                id='auto' style={{ cursor: 'pointer' }}
                name='auto' onChange={e => this.onRadioChange(CardLayout.Auto)} checked={this.state.cardLayoutValue === CardLayout.Auto}
              />
              <Label style={{ cursor: 'pointer' }} for='auto' className='ml-1'>{this.props.intl.formatMessage({ id: 'auto', defaultMessage: 'Auto' })}</Label>
            </div>
          </div>
          <div className='w-100 legend-tools'>
            <div className='legend-tools-item card-style-radio'>
              <Radio
                id='side-by-side' style={{ cursor: 'pointer' }}
                name='side-by-side' onChange={e => this.onRadioChange(CardLayout.SideBySide)} checked={this.state.cardLayoutValue === CardLayout.SideBySide}
              />
              <Label style={{ cursor: 'pointer' }} for='side-by-side' className='ml-1'>{this.props.intl.formatMessage({ id: 'sideBySide', defaultMessage: jimuiDefaultMessage.sideBySide })}</Label>
            </div>
          </div>
          <div className='w-100 legend-tools'>
            <div className='legend-tools-item card-style-radio'>
              <Radio
                id='stack' style={{ cursor: 'pointer' }}
                name='stack' onChange={e => this.onRadioChange(CardLayout.Stack)} checked={this.state.cardLayoutValue === CardLayout.Stack}
              />
              <Label style={{ cursor: 'pointer' }} for='stack' className='ml-1'>{this.props.intl.formatMessage({ id: 'stack', defaultMessage: jimuLayoutMessages.stack })}</Label>
            </div>
          </div>
        </div>
      )
    }

    let displayStyleContent
    if (this.props.config.style?.useCustom) {
      displayStyleContent = 'block'
    } else {
      displayStyleContent = 'none'
    }

    return (
      <div css={getStyle(this.props.theme)}>
        <div className='widget-setting-legend'>

          {/*
          <SettingSection title={this.props.intl.formatMessage({id: 'sourceLabel', defaultMessage: defaultMessages.sourceLabel})}>
            <SettingRow>
              <div className="source-descript">{this.props.intl.formatMessage({id: 'sourceDescript', defaultMessage: defaultMessages.sourceDescript})}</div>
            </SettingRow>
            <SettingRow>
              <DataSourceSelector isMultiple={false} types={this.supportedDsTypes} useDataSources={this.props.useDataSources}
                useDataSourcesEnabled={true} /onToggleUseDataEnabled={this.onToggleUseDataEnabled}/ mustUseDataSource={true}
                onChange={this.onDataSourceChange} widgetId={this.props.id}
              />
            </SettingRow>
            {portalUrl && this.props.dsJsons && this.props.useDataSources && this.props.useDataSources.length === 1 && <SettingRow>
                <div className="w-100">
                  <div className="webmap-thumbnail" title={this.props.dsJsons[this.props.useDataSources[0].dataSourceId]?.label}>
                    <MapThumb mapItemId={this.props.dsJsons[this.props.useDataSources[0].dataSourceId] ?
                      this.props.dsJsons[this.props.useDataSources[0].dataSourceId].itemId : null}
                      portUrl={this.props.dsJsons[this.props.useDataSources[0].dataSourceId] ?
                        this.props.dsJsons[this.props.useDataSources[0].dataSourceId].portalUrl : null} ></MapThumb>
                  </div>
                </div>
            </SettingRow>}
          </SettingSection>
        */}

          <SettingSection className='map-selector-section' title={this.props.intl.formatMessage({ id: 'sourceLabel', defaultMessage: defaultMessages.sourceLabel })}>
            {/*
            <SettingRow>
              <div className="map-selector-descript">{this.props.intl.formatMessage({id: 'sourceDescript', defaultMessage: 'set an interactive map **'})}</div>
            </SettingRow>
            */}
            <SettingRow label={<FormattedMessage id='selectMapWidget' defaultMessage={defaultMessages.selectMapWidget} />} />
            <SettingRow>
              <JimuMapViewSelector onSelect={this.onMapWidgetSelected} useMapWidgetIds={this.props.useMapWidgetIds} />
            </SettingRow>
          </SettingSection>

          <SettingSection title={this.props.intl.formatMessage({ id: 'options', defaultMessage: defaultMessages.options })}>
            <SettingRow label={<FormattedMessage id='showBaseMap' defaultMessage={defaultMessages.showBaseMap} />}>
              <Switch
                className='can-x-switch' checked={(this.props.config && this.props.config.showBaseMap) || false}
                data-key='showBaseMap' onChange={evt => { this.onOptionsChanged(evt.target.checked, 'showBaseMap') }}
              />
            </SettingRow>
            <SettingRow label={<FormattedMessage id='cardStyle' defaultMessage={defaultMessages.cardStyle} />}>
              <Switch
                className='can-x-switch' checked={(this.props.config && this.props.config.cardStyle) || false}
                data-key='cardStyle' onChange={evt => { this.onOptionsChanged(evt.target.checked, 'cardStyle') }}
              />
            </SettingRow>
            <SettingRow flow='wrap'>
              {cardLayoutContent}
            </SettingRow>
          </SettingSection>

          <SettingSection>
            <SettingRow className='advanced-setting-row' label={<FormattedMessage id='advance' defaultMessage='Advanced' />}>
              <Switch
                className='can-x-switch' checked={this.getStyleConfig().useCustom || false}
                data-key='showBaseMap' onChange={evt => { this.onUseCustomStyleChanged(evt.target.checked) }}
              />
            </SettingRow>
            <div className='mt-3' style={{ display: displayStyleContent }}>
              <SettingRow label={<FormattedMessage id='font' defaultMessage='Font' />}>
                <ThemeColorPicker
                  pickerBlockProps={pickerBlockProps} specificTheme={this.props.appTheme}
                  value={this.getStyleConfig().fontColor || this.props.appTheme.arcgis.widgets.legend.variants?.default?.root?.color || ''} onChange={this.onFontStyleChanged}
                />
              </SettingRow>
              <SettingRow label={<FormattedMessage id='background' defaultMessage='Background' />}>
                {/* <BackgroundSetting background={this.getStyleConfig().background} onChange={this.onBackgroundStyleChange} /> */}
                <ThemeColorPicker
                  specificTheme={this.props.appTheme} value={this.getStyleConfig().background?.color || this.props.appTheme.surfaces[1].bg || ''}
                  onChange={this.onBackgroundStyleChange}
                />
              </SettingRow>
            </div>
          </SettingSection>
        </div>
      </div>
    )
  }
}
