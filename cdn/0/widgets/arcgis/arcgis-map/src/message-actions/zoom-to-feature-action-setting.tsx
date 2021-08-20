/** @jsx jsx */
import {
  React, css, jsx, ActionSettingProps, SerializedStyles, ImmutableObject, DataSourceManager,
  themeUtils, ThemeVariables, polished, getAppStore, Immutable, UseDataSource, IMUseDataSource, MessageType
} from 'jimu-core'
import { Radio, NumericInput } from 'jimu-ui'
import { SettingSection, SettingRow } from 'jimu-ui/advanced/setting-components'
import { ArcGISDataSourceTypes } from 'jimu-arcgis'
import { DataSourceSelector, AllDataSourceTypes } from 'jimu-ui/advanced/data-source-selector'
import defaultMessages from '../setting/translations/default'

interface ExtraProps {
  theme?: ThemeVariables
}

interface States {
  isShowLayerList: boolean
}

interface Config {
  useDataSource: UseDataSource
  isUseCustomZoomToOption?: boolean
  zoomToOption?: {
    scale: number
  }
}

export type IMConfig = ImmutableObject<Config>

const DSSelectorTypes = Immutable([AllDataSourceTypes.FeatureLayer, AllDataSourceTypes.SceneLayer])

class _ZoomToFeatureActionSetting extends React.PureComponent<ActionSettingProps<IMConfig> & ExtraProps, States> {
  NoLockTriggerLayerWidgets = ['Map']

  modalStyle: any = {
    position: 'absolute',
    top: '0',
    bottom: '0',
    width: '259px',
    height: 'auto',
    borderRight: '',
    borderBottom: '',
    paddingBottom: '1px'
  }

  constructor (props) {
    super(props)

    this.modalStyle.borderRight = '1px solid black'
    this.modalStyle.borderBottom = '1px solid black'

    this.state = {
      isShowLayerList: false
    }
  }

  static defaultProps = {
    config: Immutable({
      useDataSource: null
    })
  }

  getInitConfig = () => {
    const messageWidgetId = this.props.messageWidgetId
    const config = getAppStore().getState().appStateInBuilder.appConfig
    const messageWidgetJson = config.widgets[messageWidgetId]

    let useDataSource: IMUseDataSource = null
    if (!this.props.config.useDataSource) {
      if (messageWidgetJson && messageWidgetJson.useDataSources && messageWidgetJson.useDataSources[0] && messageWidgetJson.useDataSources.length === 1) {
        const dsJson = config.dataSources[messageWidgetJson.useDataSources[0].dataSourceId]
        if (dsJson && ((dsJson.type === ArcGISDataSourceTypes.WebMap) || (dsJson.type === ArcGISDataSourceTypes.WebScene))) {
          useDataSource = null
        } else {
          useDataSource = Immutable({
            dataSourceId: messageWidgetJson.useDataSources[0].dataSourceId,
            mainDataSourceId: messageWidgetJson.useDataSources[0].mainDataSourceId,
            rootDataSourceId: messageWidgetJson.useDataSources[0].rootDataSourceId
          })
        }
      }
    } else {
      useDataSource = this.checkAndGetInitUseDataSource(this.props.messageWidgetId, this.props.config.useDataSource)
    }

    return {
      useDataSource: useDataSource
    }
  }

  checkAndGetInitUseDataSource = (widgetId: string, oldUseDataSource: Immutable.ImmutableObject<UseDataSource>) => {
    const config = getAppStore().getState().appStateInBuilder.appConfig
    const widgetJson = config.widgets[widgetId]
    let initUseDataSource = null
    let isMapDs = false

    const dsId = widgetJson.useDataSources && widgetJson.useDataSources[0] && widgetJson.useDataSources[0].dataSourceId
    if (!dsId) {
      return null
    }

    const dsJson = config.dataSources[dsId]
    if (dsJson && ((dsJson.type === ArcGISDataSourceTypes.WebMap) || (dsJson.type === ArcGISDataSourceTypes.WebScene))) {
      isMapDs = true
    }

    if (isMapDs) {
      // webmap or webscene ds
      let isUseOldDs = false
      if (widgetJson && widgetJson.useDataSources) {
        for (let i = 0; i < widgetJson.useDataSources.length; i++) {
          if (widgetJson.useDataSources[i].dataSourceId === oldUseDataSource.rootDataSourceId) {
            isUseOldDs = true
            break
          }
        }
      }

      if (isUseOldDs) {
        initUseDataSource = oldUseDataSource
      } else {
        initUseDataSource = null
      }
    } else {
      // featurelayer ds
      let isUseOldDs = false
      if (widgetJson && widgetJson.useDataSources) {
        for (let i = 0; i < widgetJson.useDataSources.length; i++) {
          if (widgetJson.useDataSources[i].dataSourceId === oldUseDataSource.dataSourceId) {
            isUseOldDs = true
            break
          }
        }
      }

      if (isUseOldDs) {
        initUseDataSource = oldUseDataSource
      } else {
        if (widgetJson && widgetJson.useDataSources && widgetJson.useDataSources.length === 1) {
          initUseDataSource = Immutable({
            dataSourceId: widgetJson.useDataSources[0].dataSourceId,
            rootDataSourceId: widgetJson.useDataSources[0].rootDataSourceId
          })
        } else {
          initUseDataSource = null
        }
      }
    }

    return initUseDataSource
  }

  componentDidMount () {
    const initConfig = this.getInitConfig()

    this.props.onSettingChange({
      actionId: this.props.actionId,
      config: this.props.config.set('useDataSource', initConfig.useDataSource)
    })
  }

  getStyle (theme: ThemeVariables): SerializedStyles {
    return css`
      .setting-header {
        padding: ${polished.rem(10)} ${polished.rem(16)} ${polished.rem(0)} ${polished.rem(16)}
      }

      .deleteIcon {
        cursor: pointer;
        opacity: .8;
      }

      .deleteIcon:hover {
        opacity: 1;
      }
    `
  }

  handleTriggerLayerChange = (useDataSources: UseDataSource[]) => {
    if (useDataSources && useDataSources.length > 0) {
      this.handleTriggerLayerSelected(useDataSources[0])
    } else {
      this.handleRemoveLayerForTriggerLayer()
    }
  }

  handleTriggerLayerSelected = (currentSelectedDs: UseDataSource) => {
    this.props.onSettingChange({
      actionId: this.props.actionId,
      config: this.props.config.set('useDataSource', currentSelectedDs)
    })
  }

  handleRemoveLayerForTriggerLayer = () => {
    this.props.onSettingChange({
      actionId: this.props.actionId,
      config: this.props.config.set('useDataSource', null)
    })
  }

  handleIsUseCustomZoomToOption = (isUseCustomZoomToOption: boolean) => {
    if (isUseCustomZoomToOption) {
      if (!this.props.config.zoomToOption || !this.props.config.zoomToOption.scale) {
        this.props.onSettingChange({
          actionId: this.props.actionId,
          config: this.props.config.set('isUseCustomZoomToOption', isUseCustomZoomToOption).setIn(['zoomToOption', 'scale'], 5000)
        })
        return
      }
    }

    this.props.onSettingChange({
      actionId: this.props.actionId,
      config: this.props.config.set('isUseCustomZoomToOption', isUseCustomZoomToOption)
    })
  }

  handleSetCustomZoomScale = (value) => {
    this.props.onSettingChange({
      actionId: this.props.actionId,
      config: this.props.config.setIn(['zoomToOption', 'scale'], value)
    })
  }

  getTriggerLayerContent = () => {
    const triggerDsSelectorSourceData = this.getDsSelectorSourceData(this.props.messageWidgetId, this.props.config.useDataSource)
    return (
      <DataSourceSelector
        types={DSSelectorTypes}
        useDataSources={triggerDsSelectorSourceData.useDataSources}
        fromRootDsIds={triggerDsSelectorSourceData.fromRootDsIds}
        fromDsIds={triggerDsSelectorSourceData.fromDsIds}
        closeDataSourceListOnChange
        disableAddData
        hideTypeDropdown
        mustUseDataSource
        disableRemove={() => triggerDsSelectorSourceData.isReadOnly}
        disableDataSourceList={triggerDsSelectorSourceData.isReadOnly}
        onChange={this.handleTriggerLayerChange}
        widgetId={this.props.messageWidgetId}
        disableDataView
        hideDataView={this.checkIsDisableDataView(this.props.messageWidgetId)}
      />
    )
  }

  getDsRootIdsByWidgetId = (wId: string) => {
    const appConfig = getAppStore().getState()?.appStateInBuilder?.appConfig
    const widgetJson = appConfig?.widgets?.[wId]
    const rootIds = []
    const dsM = DataSourceManager.getInstance()
    widgetJson?.useDataSources?.forEach((useDS: ImmutableObject<UseDataSource>) => {
      const ds = dsM.getDataSource(useDS.dataSourceId)
      if (ds?.type === ArcGISDataSourceTypes.WebMap || ds?.type === ArcGISDataSourceTypes.WebScene) { // is root ds
        rootIds.push(useDS.dataSourceId)
      }
    })
    return rootIds.length > 0 ? Immutable(rootIds) : undefined
  }

  getDsIdsByWidgetId = (wId: string) => {
    const appConfig = getAppStore().getState()?.appStateInBuilder?.appConfig
    const widgetJson = appConfig?.widgets?.[wId]
    return Immutable(widgetJson?.useDataSources?.map((useDS: ImmutableObject<UseDataSource>) => useDS.dataSourceId) ?? [])
  }

  getDsSelectorSourceData = (widgetId: string, useDataSource: Immutable.ImmutableObject<UseDataSource>) => {
    const appConfig = getAppStore().getState()?.appStateInBuilder?.appConfig
    const widgetJson = appConfig?.widgets?.[widgetId]
    let isReadOnly = false
    const dsRootIds = this.getDsRootIdsByWidgetId(widgetId)
    if (dsRootIds && dsRootIds.length === 0 && (widgetJson && widgetJson.useDataSources && widgetJson.useDataSources.length === 1)) {
      isReadOnly = true
    }

    if (!dsRootIds && (widgetJson && widgetJson.useDataSources && widgetJson.useDataSources.length === 1)) {
      isReadOnly = true
    }

    const useDataSources = (useDataSource && useDataSource.dataSourceId)
      ? Immutable([useDataSource]) : Immutable([])

    const fromDsIds = dsRootIds ? undefined : this.getDsIdsByWidgetId(widgetId)
    const dsSelectorSource = {
      isReadOnly: isReadOnly,
      useDataSources: useDataSources,
      fromRootDsIds: dsRootIds,
      fromDsIds: fromDsIds
    }

    return dsSelectorSource
  }

  checkIsDisableDataView = (widgetId: string): boolean => {
    if (this.props.messageType === MessageType.DataRecordsSelectionChange) {
      return true
    }

    const appConfig = getAppStore().getState()?.appStateInBuilder?.appConfig
    const widgetJson = appConfig?.widgets?.[widgetId]
    if (widgetJson) {
      const widgetLabel = widgetJson?.manifest?.label
      if (widgetLabel === 'Map') {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }

  render () {
    return (
      <div css={this.getStyle(this.props.theme)}>
        <SettingSection title={this.props.intl.formatMessage({ id: 'mapAction_TriggerLayer', defaultMessage: defaultMessages.mapAction_TriggerLayer })}>
          {this.getTriggerLayerContent()}
        </SettingSection>
        <SettingSection title={this.props.intl.formatMessage({ id: 'mapZoomToAction_ZoomScale', defaultMessage: defaultMessages.mapZoomToAction_ZoomScale })}>
          <SettingRow>
            <div className='d-flex justify-content-between w-100 align-items-center'>
              <div className='align-items-center d-flex'>
                <Radio
                  style={{ cursor: 'pointer' }} checked={!this.props.config.isUseCustomZoomToOption}
                  onChange={() => this.handleIsUseCustomZoomToOption(false)}
                />
                <label className='m-0 ml-2' style={{ cursor: 'pointer' }}>
                  {this.props.intl.formatMessage({ id: 'mapZoomToAction_Automatic', defaultMessage: defaultMessages.mapZoomToAction_Automatic })}
                </label>
              </div>
            </div>
          </SettingRow>
          <SettingRow>
            <div className='d-flex justify-content-between w-100 align-items-center'>
              <div className='align-items-center d-flex'>
                <Radio
                  style={{ cursor: 'pointer' }} checked={this.props.config.isUseCustomZoomToOption}
                  onChange={() => this.handleIsUseCustomZoomToOption(true)}
                />
                <label className='m-0 ml-2' style={{ cursor: 'pointer' }}>
                  {this.props.intl.formatMessage({ id: 'mapZoomToAction_Custom', defaultMessage: defaultMessages.mapZoomToAction_Custom })}
                </label>
              </div>
            </div>
          </SettingRow>
          {this.props.config.isUseCustomZoomToOption && <SettingRow>
            <NumericInput
              className='w-100' placeholder={this.props.intl.formatMessage({ id: 'mapZoomToAction_TypeScale', defaultMessage: defaultMessages.mapZoomToAction_TypeScale })}
              value={this.props.config.zoomToOption && this.props.config.zoomToOption.scale}
              onChange={this.handleSetCustomZoomScale}
            />
          </SettingRow>}
        </SettingSection>
      </div>
    )
  }
}

export default themeUtils.withTheme(_ZoomToFeatureActionSetting)
