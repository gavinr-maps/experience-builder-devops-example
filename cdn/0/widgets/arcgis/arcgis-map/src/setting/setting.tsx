/** @jsx jsx */
import {
  React, Immutable, ImmutableObject, DataSourceJson, IMState, FormattedMessage,
  css, jsx, DataSourceManager, getAppStore, polished, classNames, UseDataSource
} from 'jimu-core'
import { Switch, ImageWithParam, Radio, defaultMessages as mapDefaultMessages, Select } from 'jimu-ui'
import { IMJimuMapConfig, MapStatesEditor } from 'jimu-ui/advanced/map'
import { DataSourceSelector } from 'jimu-ui/advanced/data-source-selector'
import { ColorPicker } from 'jimu-ui/basic/color-picker'
import { DataSourceTypes } from 'jimu-arcgis'
import { AllWidgetSettingProps, builderAppSync } from 'jimu-for-builder'
import { SettingSection, SettingRow } from 'jimu-ui/advanced/setting-components'
import { IMConfig, SceneQualityMode } from '../config'
import defaultMessages from './translations/default'
import MapThumb from '../../src/runtime/components/map-thumb'
import ToolModules from '../../src/runtime/layout/tool-modules-config'

interface ExtraProps{
  dsJsons: ImmutableObject<{ [dsId: string]: DataSourceJson }>
}

export default class Setting extends React.PureComponent<AllWidgetSettingProps<IMConfig> & ExtraProps, unknown> {
  unmount = false
  dsManager = DataSourceManager.getInstance()
  integratedDataSourceSetting = {} as any
  supportedDsTypes = Immutable([DataSourceTypes.WebMap, DataSourceTypes.WebScene])

  presetColors = [
    { label: '#00FFFF', value: '#00FFFF', color: '#00FFFF' },
    { label: '#FF9F0A', value: '#FF9F0A', color: '#FF9F0A' },
    { label: '#089BDC', value: '#089BDC', color: '#089BDC' },
    { label: '#FFD159', value: '#FFD159', color: '#FFD159' },
    { label: '#74B566', value: '#74B566', color: '#74B566' },
    { label: '#FF453A', value: '#FF453A', color: '#FF453A' },
    { label: '#9868ED', value: '#9868ED', color: '#9868ED' },
    { label: '#43ABEB', value: '#43ABEB', color: '#43ABEB' }
  ]

  static mapExtraStateProps = (state: IMState): ExtraProps => {
    return {
      dsJsons: state.appStateInBuilder.appConfig.dataSources
    }
  }

  constructor (props) {
    super(props)
    this.initDataSourceSettingOption()
  }

  getStyle () {
    return css`
      .widget-setting-map{
        font-weight: lighter;
        font-size: 13px;

        .source-descript {
          color: ${this.props.theme.colors.palette.dark[600]};
        }

        .thumbnail-horizontal-revert {
          -moz-transform:scaleX(-1);
          -webkit-transform:scaleX(-1);
          -o-transform:scaleX(-1);
          transform:scaleX(-1);
        }

        .webmap-thumbnail{
          cursor: pointer;
          width: 100%;
          height: 120px;
          overflow: hidden;
          padding: 1px;
          border: ${polished.rem(2)} solid initial;
          img, div{
            width: 100%;
            height: 100%;
          }
        }

        .selected-item{
          border: ${polished.rem(2)} solid ${this.props.theme.colors.palette.primary[700]} !important;
        }

        .webmap-thumbnail-multi{
          cursor: pointer;
          width: 48%;
          height: 100px;
          overflow: hidden;
          padding: 1px;
          border: ${polished.rem(2)} solid initial;
          img, div{
            width: 100%;
            height: 100%;
          }
        }

        .placeholder-container {
          background-color: ${this.props.theme.colors.secondary};
          width: 100%;
          height: 120px;
          position: relative;
        }

        .placeholder-icon {
          top: 40%;
          left: 46%;
          position: absolute;
          fill: ${this.props.theme.colors.palette.dark[300]};
        }

        .choose-btn{
          width: 100%;
        }

        .webmap-tools{
          .webmap-tools-item{
            display: flex;
            justify-content: space-between;
            margin-bottom: 8px;
          }
        }

        .uploadInput {
          position: absolute;
          opacity: 0;
          left: 0;
          top: 0;
          cursor: pointer;
        }

        .uploadInput-container {
          position: relative;
        }

        .setting-map-button{
          cursor: 'pointer';
        }
      }
      .item-selector-popup {
        width: 850px;
        .modal-body {
          max-height: 70vh;
          overflow: auto;
        }
      }`
  }

  componentDidMount () {
    this.unmount = false
  }

  componentWillUnmount () {
    this.unmount = true
  }

  getPortUrl = (): string => {
    const portUrl = getAppStore().getState().portalUrl
    return portUrl
  }

  hasWebSceneDataSource = (): boolean => {
    return this.props.useDataSources?.some(useDataSource => this.props.dsJsons[useDataSource.dataSourceId]?.type === 'WEB_SCENE')
  }

  onDataSourceChange = (useDataSources: UseDataSource[]) => {
    if (!useDataSources) {
      return
    }

    if (!this.props.useDataSources || useDataSources.length === this.props.useDataSources.length) {
      this.props.onSettingChange({
        id: this.props.id,
        useDataSources: useDataSources
      })
    } else if (useDataSources.length > this.props.useDataSources.length) {
      const currentSelectedDs = useDataSources.find(ds => !this.props.useDataSources.some(uDs => uDs.dataSourceId === ds.dataSourceId))
      this.onDataSourceSelected(currentSelectedDs)
    } else {
      const currentRemovedDs = this.props.useDataSources.find(uDs => !useDataSources.some(ds => uDs.dataSourceId === ds.dataSourceId))
      this.onDataSourceRemoved(currentRemovedDs)
    }
  }

  onDataSourceSelected = (currentSelectedDs: UseDataSource): void => {
    if (!currentSelectedDs) {
      return
    }

    let tempUseDataSources = []
    tempUseDataSources = Object.assign(tempUseDataSources, this.props.useDataSources)
    tempUseDataSources.push(currentSelectedDs)

    this.integratedDataSourceSetting = {
      id: this.props.id,
      useDataSources: Immutable(tempUseDataSources)
    }

    const settingOption = Object.assign({}, this.integratedDataSourceSetting)
    settingOption.config = this.props.config.set('initialMapDataSourceID', currentSelectedDs.dataSourceId).set('isUseCustomMapState', false).set('initialMapState', null),
    this.props.onSettingChange(settingOption)
  }

  onDataSourceRemoved = (currentRemovedDs: UseDataSource): void => {
    if (!currentRemovedDs) {
      return
    }

    const removedDatasourceId = currentRemovedDs.dataSourceId

    // remove related useDataSource
    let tempUseDataSources = []
    tempUseDataSources = Object.assign(tempUseDataSources, this.props.useDataSources)
    for (let i = 0; i < tempUseDataSources.length; i++) {
      if (tempUseDataSources[i].dataSourceId === removedDatasourceId) {
        tempUseDataSources.splice(i, 1)
        break
      }
    }

    const settingChange = {
      id: this.props.id,
      useDataSources: Immutable(tempUseDataSources)
    } as any

    let settingOption = {} as any

    this.integratedDataSourceSetting = settingChange
    settingOption = Object.assign({}, this.integratedDataSourceSetting)
    if (tempUseDataSources.length > 0) {
      const initialMapDataSourceID = tempUseDataSources[0] && tempUseDataSources[0].dataSourceId
      settingOption.config = this.props.config.set('initialMapDataSourceID', initialMapDataSourceID).set('isUseCustomMapState', false).set('initialMapState', null)
    } else {
      settingOption.config = this.props.config.set('initialMapDataSourceID', null).set('isUseCustomMapState', false).set('initialMapState', null)
    }

    this.props.onSettingChange(Object.assign({}, settingOption))
  }

  onMapToolsChanged = (checked, name): void => {
    if (name === 'canSelect') {
      this.props.onSettingChange({
        id: this.props.id,
        config: this.props.config.setIn(['toolConifg', 'canSelect'], checked).setIn(['toolConifg', 'canSelectState'], checked)
      })
    } else {
      this.props.onSettingChange({
        id: this.props.id,
        config: this.props.config.setIn(['toolConifg', name], checked)
      })
    }
  }

  onMapOptionsChanged = (checked, name): void => {
    this.props.onSettingChange({
      id: this.props.id,
      config: this.props.config.set(name, checked)
    })
  }

  onSceneQualityModeChnaged = (value, name): void => {
    this.props.onSettingChange({
      id: this.props.id,
      config: this.props.config.set(name, value)
    })
  }

  onDisableSelection = (useDataSources: UseDataSource[]): boolean => {
    if (useDataSources.length > 1) {
      return true
    } else {
      return false
    }
  }

  // use for dataSourceSetting cache
  initDataSourceSettingOption = () => {
    let tempUseDataSources = []
    tempUseDataSources = Object.assign(tempUseDataSources, this.props.useDataSources)

    const dataSourceSettingOption = {
      widgetId: this.props.id,
      useDataSources: Immutable(tempUseDataSources)
    }
    this.integratedDataSourceSetting = dataSourceSettingOption
  }

  setInitialMap = (dataSourceId: string) => {
    this.props.onSettingChange({
      id: this.props.id,
      config: this.props.config.set('initialMapDataSourceID', dataSourceId)
    })

    builderAppSync.publishChangeWidgetStatePropToApp({ widgetId: this.props.id, propKey: 'initialMapDataSourceID', value: dataSourceId })
  }

  changeToolLaylout = (index: number) => {
    this.props.onSettingChange({
      id: this.props.id,
      config: this.props.config.set('layoutIndex', index)
    })
  }

  handleMapInitStateChanged = (config: IMJimuMapConfig) => {
    this.props.onSettingChange({
      id: this.props.id,
      config: this.props.config.set('initialMapDataSourceID', config.initialMapDataSourceID).set('initialMapState', config.initialMapState)
    })
  }

  handleIsUseCustomMapState = (isUseCustomMapState: boolean) => {
    this.props.onSettingChange({
      id: this.props.id,
      config: this.props.config.set('isUseCustomMapState', isUseCustomMapState).set('initialMapState', null)
    })
  }

  updateSelectionHighlightColor = (color: string) => {
    this.props.onSettingChange({
      id: this.props.id,
      config: this.props.config.set('selectionHighlightColor', color)
    })
  }

  render () {
    const portalUrl = this.getPortUrl()
    const isRTL = getAppStore().getState().appContext.isRTL

    let sceneQualityModeConten = null
    if (this.hasWebSceneDataSource()) {
      sceneQualityModeConten = (
        <div>
          <label><FormattedMessage id='sceneQualityMode' defaultMessage={defaultMessages.sceneQualityMode} /></label>
          <SettingRow>
            <Select
              size='sm' value={(this.props.config && this.props.config.sceneQualityMode) || SceneQualityMode.low}
              onChange={evt => { this.onSceneQualityModeChnaged(evt.target.value, 'sceneQualityMode') }} className=''
            >
              {/* <option key={1} value='auto'><FormattedMessage id='auto' defaultMessage='Auto' /></option> */}
              <option key={2} value='low'><FormattedMessage id='low' defaultMessage='Low' /></option>
              <option key={3} value='medium'><FormattedMessage id='medium' defaultMessage='Medium' /></option>
              <option key={4} value='high'><FormattedMessage id='high' defaultMessage='High' /></option>
            </Select>
          </SettingRow>
        </div>
      )
    }

    return (
      <div css={this.getStyle()}><div className='widget-setting-map'>
        <SettingSection title={this.props.intl.formatMessage({ id: 'sourceLabel', defaultMessage: defaultMessages.sourceLabel })}>
          <SettingRow flow='wrap'>
            <div className='source-descript text-break'>{this.props.intl.formatMessage({ id: 'sourceDescript', defaultMessage: defaultMessages.sourceDescript })}</div>
          </SettingRow>
          <SettingRow>
            <DataSourceSelector
              isMultiple types={this.supportedDsTypes}
              buttonLabel={this.props.intl.formatMessage({ id: 'selectMap', defaultMessage: defaultMessages.selectMap })}
              onChange={this.onDataSourceChange} useDataSources={this.props.useDataSources}
              disableSelection={this.onDisableSelection} mustUseDataSource widgetId={this.props.id}
            />
          </SettingRow>
          {portalUrl && this.props.dsJsons && this.props.useDataSources && this.props.useDataSources.length === 1 && <SettingRow>
            <div className='w-100'>
              <div
                className='webmap-thumbnail selected-item' title={this.props.dsJsons[this.props.useDataSources[0].dataSourceId]?.label}
                onClick={() => { this.setInitialMap(this.props.useDataSources[0].dataSourceId) }}
              >
                <MapThumb
                  mapItemId={this.props.dsJsons[this.props.useDataSources[0].dataSourceId]
                    ? this.props.dsJsons[this.props.useDataSources[0].dataSourceId].itemId : null}
                  portUrl={this.props.dsJsons[this.props.useDataSources[0].dataSourceId]
                    ? this.props.dsJsons[this.props.useDataSources[0].dataSourceId].portalUrl : null}
                />
              </div>
            </div>
                                                                                                                     </SettingRow>}
          {
            portalUrl && this.props.dsJsons && this.props.useDataSources && this.props.useDataSources.length === 2 &&
              <SettingRow>
                <div className='w-100 d-flex justify-content-between'>
                  <div
                    onClick={() => { this.setInitialMap(this.props.useDataSources[0].dataSourceId) }}
                    title={this.props.dsJsons[this.props.useDataSources[0].dataSourceId]?.label}
                    className={classNames('webmap-thumbnail-multi', { 'selected-item': this.props.config.initialMapDataSourceID === this.props.useDataSources[0].dataSourceId })}
                  >
                    <MapThumb
                      mapItemId={this.props.dsJsons[this.props.useDataSources[0].dataSourceId]
                        ? this.props.dsJsons[this.props.useDataSources[0].dataSourceId].itemId : null}
                      portUrl={this.props.dsJsons[this.props.useDataSources[0].dataSourceId]
                        ? this.props.dsJsons[this.props.useDataSources[0].dataSourceId].portalUrl : null}
                    />
                  </div>
                  <div
                    onClick={() => { this.setInitialMap(this.props.useDataSources[1].dataSourceId) }}
                    title={this.props.dsJsons[this.props.useDataSources[1].dataSourceId].label}
                    className={classNames('webmap-thumbnail-multi', { 'selected-item': this.props.config.initialMapDataSourceID === this.props.useDataSources[1].dataSourceId })}
                  >
                    <MapThumb
                      mapItemId={this.props.dsJsons[this.props.useDataSources[1].dataSourceId]
                        ? this.props.dsJsons[this.props.useDataSources[1].dataSourceId].itemId : null}
                      portUrl={this.props.dsJsons[this.props.useDataSources[1].dataSourceId]
                        ? this.props.dsJsons[this.props.useDataSources[1].dataSourceId].portalUrl : null}
                    />
                  </div>
                </div>
              </SettingRow>
          }
        </SettingSection>
        <SettingSection title={this.props.intl.formatMessage({ id: 'initialMapView', defaultMessage: defaultMessages.initialMapView })}>
          <SettingRow>
            <div className='d-flex justify-content-between w-100 align-items-center'>
              <div className='align-items-center d-flex'>
                <Radio
                  style={{ cursor: 'pointer' }} onChange={() => this.handleIsUseCustomMapState(false)}
                  checked={!this.props.config.isUseCustomMapState}
                  title={this.props.intl.formatMessage({ id: 'defaultViewTip', defaultMessage: defaultMessages.defaultViewTip })}
                />
                <label
                  className='m-0 ml-2' style={{ cursor: 'pointer' }} onClick={() => this.handleIsUseCustomMapState(false)}
                  title={this.props.intl.formatMessage({ id: 'defaultViewTip', defaultMessage: defaultMessages.defaultViewTip })}
                >
                  {this.props.intl.formatMessage({ id: 'defaultView', defaultMessage: defaultMessages.defaultView })}
                </label>
              </div>
            </div>
          </SettingRow>
          <SettingRow>
            <div className='d-flex justify-content-between w-100 align-items-center'>
              <div className='align-items-center d-flex'>
                <Radio
                  style={{ cursor: 'pointer' }} onChange={() => this.handleIsUseCustomMapState(true)}
                  checked={this.props.config.isUseCustomMapState}
                  title={this.props.intl.formatMessage({ id: 'customViewTip', defaultMessage: defaultMessages.customViewTip })}
                />
                <label
                  className='m-0 ml-2' style={{ cursor: 'pointer' }} onClick={() => this.handleIsUseCustomMapState(true)}
                  title={this.props.intl.formatMessage({ id: 'customViewTip', defaultMessage: defaultMessages.customViewTip })}
                >
                  {this.props.intl.formatMessage({ id: 'customView', defaultMessage: defaultMessages.customView })}
                </label>
              </div>
            </div>
          </SettingRow>
          {this.props.config.isUseCustomMapState && <SettingRow>
            <div className='ml-4'>
              <MapStatesEditor
                title={this.props.intl.formatMessage({ id: 'setMapView', defaultMessage: defaultMessages.setMapView })}
                buttonLabel={this.props.intl.formatMessage({ id: 'customViewSet', defaultMessage: defaultMessages.customViewSet })}
                useDataSources={this.props.useDataSources}
                jimuMapConfig={this.props.config as IMJimuMapConfig} id={this.props.id}
                onConfigChanged={this.handleMapInitStateChanged} isUseWidgetSize
              />
            </div>
          </SettingRow>}
        </SettingSection>
        <SettingSection title={this.props.intl.formatMessage({ id: 'toolLabel', defaultMessage: defaultMessages.toolLabel })}>
          <SettingRow>
            <div className='w-100 webmap-tools'>
              {Object.keys(ToolModules).map((key, index) => {
                if (ToolModules[key].isNeedSetting) {
                  return (
                    <div className='webmap-tools-item' key={index}>
                      <span className='text-break' style={{ width: '80%' }}>{this.props.intl.formatMessage({ id: key + 'Label', defaultMessage: mapDefaultMessages[key + 'Label'] })}</span>
                      <Switch
                        className='can-x-switch' checked={(this.props.config.toolConifg && this.props.config.toolConifg[`can${key}`]) || false}
                        onChange={evt => { this.onMapToolsChanged(evt.target.checked, `can${key}`) }}
                      />
                    </div>
                  )
                } else {
                  return null
                }
              })}
            </div>
          </SettingRow>
        </SettingSection>
        <SettingSection title={this.props.intl.formatMessage({ id: 'mapLayout', defaultMessage: defaultMessages.mapLayout })}>
          <SettingRow>
            <div className='source-descript'>
              {this.props.intl.formatMessage({ id: 'mapLayout_LargeAndMedium', defaultMessage: defaultMessages.mapLayout_LargeAndMedium })}
            </div>
          </SettingRow>
          <SettingRow>
            <div className='w-100 d-flex justify-content-between'>
              <div
                onClick={() => { this.changeToolLaylout(0) }} className={classNames('webmap-thumbnail-multi border d-flex justify-content-center align-items-center', {
                  'selected-item': !this.props.config.layoutIndex,
                  'thumbnail-horizontal-revert': isRTL
                })}
              >
                <ImageWithParam imageParam={{ url: require('./assets/pc-layout-0.svg') }} />
              </div>
              <div
                onClick={() => { this.changeToolLaylout(1) }} className={classNames('webmap-thumbnail-multi border d-flex justify-content-center align-items-center', {
                  'selected-item': this.props.config.layoutIndex === 1,
                  'thumbnail-horizontal-revert': isRTL
                })}
              >
                <ImageWithParam imageParam={{ url: require('./assets/pc-layout-1.svg') }} />
              </div>
            </div>
          </SettingRow>
          <SettingRow>
            <div className='source-descript'>
              {this.props.intl.formatMessage({ id: 'mapLayout_Small', defaultMessage: defaultMessages.mapLayout_Small })}
            </div>
          </SettingRow>
          <SettingRow>
            <div className='w-100 d-flex justify-content-between'>
              <div
                className={classNames('webmap-thumbnail-multi border d-flex justify-content-center align-items-center', {
                  'selected-item': false,
                  'thumbnail-horizontal-revert': isRTL
                })} style={{ cursor: 'initial' }}
              >
                <ImageWithParam imageParam={{ url: require('./assets/mobile-layout-0.svg') }} />
              </div>
              <div />
            </div>
          </SettingRow>
        </SettingSection>
        <SettingSection title={this.props.intl.formatMessage({ id: 'options', defaultMessage: defaultMessages.options })}>
          <SettingRow>
            <div className='w-100 webmap-tools'>
              <div className='webmap-tools-item'>
                <label><FormattedMessage id='selectionHighlightColor' defaultMessage={defaultMessages.selectionHighlightColor} /></label>
                <div>
                  <ColorPicker
                    style={{ padding: '0' }} width={26} height={14} disableAlpha
                    color={this.props.config.selectionHighlightColor ? this.props.config.selectionHighlightColor : '#00FFFF'}
                    onChange={this.updateSelectionHighlightColor} presetColors={this.presetColors}
                  />
                </div>
              </div>
              <div className='webmap-tools-item'>
                <label><FormattedMessage id='disableScrollZoom' defaultMessage={defaultMessages.disableScrollZoom} /></label>
                <Switch
                  className='can-x-switch' checked={(this.props.config && this.props.config.disableScroll) || false}
                  data-key='disableScroll' onChange={evt => { this.onMapOptionsChanged(evt.target.checked, 'disableScroll') }}
                />
              </div>
              <div className='webmap-tools-item'>
                <span className='text-break' style={{ width: '80%' }}><FormattedMessage id='disablePopUp' defaultMessage={defaultMessages.disablePopUp} /></span>
                <Switch
                  className='can-x-switch' checked={(this.props.config && this.props.config.disablePopUp) || false}
                  data-key='disablePopUp' onChange={evt => { this.onMapOptionsChanged(evt.target.checked, 'disablePopUp') }}
                />
              </div>
            </div>
          </SettingRow>
          {sceneQualityModeConten}
        </SettingSection>
      </div>
      </div>
    )
  }
}
