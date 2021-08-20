/** @jsx jsx */
import {
  React, css, jsx, ActionSettingProps, SerializedStyles, ImmutableObject, DataSourceManager,
  themeUtils, ThemeVariables, polished, getAppStore, Immutable, UseDataSource, IMUseDataSource
} from 'jimu-core'
import { SettingSection } from 'jimu-ui/advanced/setting-components'
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
}

export type IMConfig = ImmutableObject<Config>

const DSSelectorTypes = Immutable([AllDataSourceTypes.FeatureLayer, AllDataSourceTypes.SceneLayer])

class _PanToActionSetting extends React.PureComponent<ActionSettingProps<IMConfig> & ExtraProps, States> {
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
    let useDataSource: IMUseDataSource = null
    if (!this.props.config.useDataSource) {
      useDataSource = null
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
      initUseDataSource = null
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

  render () {
    const triggerRootIds = this.getDsRootIdsByWidgetId(this.props.messageWidgetId)

    return (
      <div css={this.getStyle(this.props.theme)}>
        <SettingSection title={this.props.intl.formatMessage({ id: 'mapAction_TriggerLayer', defaultMessage: defaultMessages.mapAction_TriggerLayer })}>
          <DataSourceSelector
            types={DSSelectorTypes}
            useDataSources={(this.props.config.useDataSource && this.props.config.useDataSource.dataSourceId)
              ? Immutable([this.props.config.useDataSource]) : Immutable([])}
            fromRootDsIds={triggerRootIds}
            fromDsIds={triggerRootIds ? undefined : this.getDsIdsByWidgetId(this.props.messageWidgetId)}
            closeDataSourceListOnChange
            disableAddData
            hideTypeDropdown
            mustUseDataSource
            onChange={this.handleTriggerLayerChange}
            widgetId={this.props.messageWidgetId}
            disableDataView
            hideDataView
          // onSelect={this.handleTriggerLayerSelected}
          // onRemove={this.handleRemoveLayerForTriggerLayer}
          />
        </SettingSection>
      </div>
    )
  }
}

export default themeUtils.withTheme(_PanToActionSetting)
