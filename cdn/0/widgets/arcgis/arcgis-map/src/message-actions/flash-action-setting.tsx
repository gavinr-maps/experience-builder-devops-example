/** @jsx jsx */
import {
  React, css, jsx, ActionSettingProps, SerializedStyles, ImmutableObject, DataSource,
  themeUtils, ThemeVariables, polished, getAppStore, Immutable,
  UseDataSource, DataSourceComponent, IMUseDataSource, IMFieldSchema, IMSqlExpression,
  dataSourceUtils, DataSourceManager, MessageType, SqlExpressionMode, ImmutableArray
} from 'jimu-core'
import { Button, Icon, Switch, Collapse } from 'jimu-ui'
import { SettingSection, SettingRow } from 'jimu-ui/advanced/setting-components'
import { FieldSelector, AllDataSourceTypes, DataSourceSelector } from 'jimu-ui/advanced/data-source-selector'
import { ArcGISDataSourceTypes } from 'jimu-arcgis'

import { SqlExpressionBuilderPopup } from 'jimu-ui/advanced/sql-expression-builder'
import defaultMessages from '../setting/translations/default'
import * as actionUtils from './action-utils'

interface ExtraProps {
  theme?: ThemeVariables
}

interface States {
  isShowLayerList: boolean
  currentLayerType: 'trigger' | 'action'
  isSqlExprShow: boolean
}

interface Config {
  messageUseDataSource: UseDataSource
  actionUseDataSource: UseDataSource
  sqlExprObj?: IMSqlExpression

  enabledDataRelationShip?: boolean
}

export type IMConfig = ImmutableObject<Config>

const DSSelectorTypes = Immutable([AllDataSourceTypes.FeatureLayer, AllDataSourceTypes.SceneLayer])

class _FlashActionSetting extends React.PureComponent<ActionSettingProps<IMConfig> & ExtraProps, States> {
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
      isShowLayerList: false,
      currentLayerType: null,
      isSqlExprShow: false
    }
  }

  static defaultProps = {
    config: Immutable({
      messageUseDataSource: null,
      actionUseDataSource: null,
      sqlExprObj: null,
      enabledDataRelationShip: true
    })
  }

  initOutputDataSources = (outputDataSources): ImmutableArray<UseDataSource> => {
    const ds = outputDataSources?.map(dsId => {
      return {
        dataSourceId: dsId,
        mainDataSourceId: dsId,
        rootDataSourceId: null
      }
    }) ?? []
    return Immutable(ds)
  }

  getInitConfig = () => {
    const messageWidgetId = this.props.messageWidgetId
    const config = getAppStore().getState().appStateInBuilder.appConfig
    const messageWidgetJson = config.widgets[messageWidgetId]

    let messageUseDataSource: IMUseDataSource = null
    let actionUseDataSource: IMUseDataSource = null

    if (!this.props.config.messageUseDataSource) {
      //if (messageWidgetJson && messageWidgetJson.useDataSources && messageWidgetJson.useDataSources[0] && messageWidgetJson.useDataSources.length === 1) {
      const useDataSources = actionUtils.isUseOutputDataSources(messageWidgetId, this.props.messageType) ?
        this.initOutputDataSources(messageWidgetJson?.outputDataSources) :
        messageWidgetJson?.useDataSources
      if(useDataSources?.[0] && useDataSources?.length === 1) {
        const dsJson = config.dataSources[useDataSources?.[0].dataSourceId]
        if (dsJson && ((dsJson.type === ArcGISDataSourceTypes.WebMap) || (dsJson.type === ArcGISDataSourceTypes.WebScene))) {
          messageUseDataSource = null
        } else {
          messageUseDataSource = Immutable({
            dataSourceId: useDataSources?.[0].dataSourceId,
            mainDataSourceId: useDataSources?.[0].mainDataSourceId,
            dataViewId: useDataSources?.[0].dataViewId,
            rootDataSourceId: useDataSources?.[0].rootDataSourceId
          })
        }
      }
    } else {
      messageUseDataSource = this.checkAndGetInitUseDataSource(this.props.messageWidgetId, this.props.config.messageUseDataSource)
    }

    const actionWidgetId = this.props.widgetId
    const actionWidgetJson = config.widgets[actionWidgetId]

    if (!this.props.config.actionUseDataSource) {
      if (actionWidgetJson && actionWidgetJson.useDataSources && actionWidgetJson.useDataSources[0] && actionWidgetJson.useDataSources.length === 1) {
        const dsJson = config.dataSources[actionWidgetJson.useDataSources[0].dataSourceId]
        if (dsJson && ((dsJson.type === ArcGISDataSourceTypes.WebMap) || (dsJson.type === ArcGISDataSourceTypes.WebScene))) {
          actionUseDataSource = null
        } else {
          actionUseDataSource = Immutable({
            dataSourceId: actionWidgetJson.useDataSources[0].dataSourceId,
            dataViewId: actionWidgetJson.useDataSources[0].dataViewId,
            mainDataSourceId: actionWidgetJson.useDataSources[0].mainDataSourceId,
            rootDataSourceId: actionWidgetJson.useDataSources[0].rootDataSourceId
          })
        }
      }
    } else {
      actionUseDataSource = this.checkAndGetInitUseDataSource(this.props.widgetId, this.props.config.actionUseDataSource)
    }

    const oldActionUseDataSourceId = this.props.config.actionUseDataSource && this.props.config.actionUseDataSource.dataSourceId
    const newActionUseDataSourceId = actionUseDataSource && actionUseDataSource.dataSourceId
    if (newActionUseDataSourceId !== oldActionUseDataSourceId) {
      return {
        messageUseDataSource: messageUseDataSource,
        actionUseDataSource: actionUseDataSource,
        sqlExprObj: null
      }
    } else {
      return {
        messageUseDataSource: messageUseDataSource,
        actionUseDataSource: actionUseDataSource,
        sqlExprObj: this.props.config.sqlExprObj
      }
    }
  }

  checkAndGetInitUseDataSource = (widgetId: string, oldUseDataSource: Immutable.ImmutableObject<UseDataSource>) => {
    const config = getAppStore().getState().appStateInBuilder.appConfig
    const widgetJson = config.widgets[widgetId]
    let initUseDataSource = null
    let isMapDs = false

    const isUseOutputDataSources = actionUtils.isUseOutputDataSources(widgetId, this.props.messageType)
    const useDataSources = isUseOutputDataSources ?
      this.initOutputDataSources(widgetJson?.outputDataSources) :
      widgetJson?.useDataSources
    const dsId = useDataSources && useDataSources[0] && useDataSources[0].dataSourceId
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
      if (useDataSources) {
        for (let i = 0; i < useDataSources.length; i++) {
          if (useDataSources[i].dataSourceId === oldUseDataSource.rootDataSourceId) {
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
      if (useDataSources) {
        for (let i = 0; i < useDataSources.length; i++) {
          const oldUseDataSourceId = isUseOutputDataSources ? oldUseDataSource?.mainDataSourceId : oldUseDataSource?.dataSourceId
          const currentUseDataSourceId = isUseOutputDataSources ? useDataSources[i]?.mainDataSourceId : useDataSources[i]?.dataSourceId
          if (currentUseDataSourceId === oldUseDataSourceId) {
            isUseOldDs = true
            break
          }
        }
      }

      if (isUseOldDs) {
        initUseDataSource = oldUseDataSource
      } else {
        if (useDataSources?.length === 1) {
          initUseDataSource = Immutable({
            dataSourceId: useDataSources?.[0].dataSourceId,
            mainDataSourceId: useDataSources?.[0].mainDataSourceId,
            dataViewId: useDataSources?.[0].dataViewId,
            rootDataSourceId: useDataSources?.[0].rootDataSourceId
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
      config: this.props.config.set('messageUseDataSource', initConfig.messageUseDataSource)
        .set('actionUseDataSource', initConfig.actionUseDataSource).set('sqlExprObj', initConfig.sqlExprObj)
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

      .sql-expr-display {
        width: 100%;
        height: auto;
        min-height: 60px;
        line-height: 25px;
        padding: 3px 5px;
        color: ${theme.colors.palette.dark[300]};
        border: 1px solid ${theme.colors.palette.light[500]};
      }

      .relate-panel-left {
        flex: auto;
        .action-select-chooser {
          margin-top: ${polished.rem(12)};
        }
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

  handleActionLayerChange = (useDataSources: UseDataSource[]) => {
    if (useDataSources && useDataSources.length > 0) {
      this.handleActionLayerSelected(useDataSources[0])
    } else {
      this.handleRemoveLayerForActionLayer()
    }
  }

  handleTriggerLayerSelected = (currentSelectedDs: UseDataSource) => {
    this.props.onSettingChange({
      actionId: this.props.actionId,
      config: this.props.config.set('messageUseDataSource', currentSelectedDs)
    })
  }

  handleActionLayerSelected = (currentSelectedDs: UseDataSource) => {
    this.props.onSettingChange({
      actionId: this.props.actionId,
      config: this.props.config.set('actionUseDataSource', currentSelectedDs).set('sqlExprObj', null)
    })
  }

  handleRemoveLayerForTriggerLayer = () => {
    this.props.onSettingChange({
      actionId: this.props.actionId,
      config: this.props.config.set('messageUseDataSource', null)
    })
  }

  handleRemoveLayerForActionLayer = () => {
    this.props.onSettingChange({
      actionId: this.props.actionId,
      config: this.props.config.set('actionUseDataSource', null).set('sqlExprObj', null)
    })
  }

  showSqlExprPopup = () => {
    this.setState({ isSqlExprShow: true })
  }

  toggleSqlExprPopup = () => {
    this.setState({ isSqlExprShow: !this.state.isSqlExprShow })
  }

  onSqlExprBuilderChange = (sqlExprObj: IMSqlExpression) => {
    this.props.onSettingChange({
      actionId: this.props.actionId,
      config: this.props.config.set('sqlExprObj', sqlExprObj)
    })
  }

  onMessageFieldSelected = (allSelectedFields: IMFieldSchema[], ds: DataSource) => {
    this.props.onSettingChange({
      actionId: this.props.actionId,
      config: this.props.config.set('messageUseDataSource', {
        dataSourceId: this.props.config.messageUseDataSource.dataSourceId,
        mainDataSourceId: this.props.config.messageUseDataSource.mainDataSourceId,
        dataViewId: this.props.config.messageUseDataSource.dataViewId,
        rootDataSourceId: this.props.config.messageUseDataSource.rootDataSourceId,
        fields: allSelectedFields.map(f => f.jimuName)
      })
    })
  }

  onActionFieldSelected = (allSelectedFields: IMFieldSchema[], ds: DataSource) => {
    this.props.onSettingChange({
      actionId: this.props.actionId,
      config: this.props.config.set('actionUseDataSource', {
        dataSourceId: this.props.config.actionUseDataSource.dataSourceId,
        mainDataSourceId: this.props.config.actionUseDataSource.mainDataSourceId,
        dataViewId: this.props.config.actionUseDataSource.dataViewId,
        rootDataSourceId: this.props.config.actionUseDataSource.rootDataSourceId,
        fields: allSelectedFields.map(f => f.jimuName)
      })
    })
  }

  swicthEnabledDataRelationShip = (checked) => {
    this.props.onSettingChange({
      actionId: this.props.actionId,
      config: this.props.config.set('enabledDataRelationShip', checked)
    })
  }

  checkTrigerLayerIsSameToActionLayer = () => {
    if (this.props.config.messageUseDataSource && this.props.config.actionUseDataSource) {
      if (this.props.config.messageUseDataSource.mainDataSourceId === this.props.config.actionUseDataSource.mainDataSourceId &&
        this.props.config.messageUseDataSource.rootDataSourceId === this.props.config.actionUseDataSource.rootDataSourceId) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
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
    const useDataSources = actionUtils.isUseOutputDataSources(wId, this.props.messageType) ?
      this.initOutputDataSources(widgetJson?.outputDataSources) :
      widgetJson?.useDataSources
    return Immutable(useDataSources?.map((useDS: ImmutableObject<UseDataSource>) => useDS?.mainDataSourceId) ?? [])
  }

  getDsSelectorSourceData = (widgetId: string, useDataSource: Immutable.ImmutableObject<UseDataSource>) => {
    const appConfig = getAppStore().getState()?.appStateInBuilder?.appConfig
    const widgetJson = appConfig?.widgets?.[widgetId]
    let isReadOnly = false
    const dsRootIds = this.getDsRootIdsByWidgetId(widgetId)
    if (dsRootIds && dsRootIds.length === 0 && (widgetJson && widgetJson.useDataSources && widgetJson.useDataSources.length === 1)) {
      isReadOnly = true
    }

    const widgetUseDataSources = actionUtils.isUseOutputDataSources(widgetId, this.props.messageType) ?
      this.initOutputDataSources(widgetJson?.outputDataSources) :
      widgetJson?.useDataSources
    if (!dsRootIds && (widgetUseDataSources?.length === 1)) {
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
    const actionUseDataSourceInstance = this.props.config.actionUseDataSource &&
      DataSourceManager.getInstance().getDataSource(this.props.config.actionUseDataSource.dataSourceId)

    const { theme } = this.props
    const triggerDsSelectorSourceData = this.getDsSelectorSourceData(this.props.messageWidgetId, this.props.config.messageUseDataSource)
    const actionDsSelectorSourceData = this.getDsSelectorSourceData(this.props.widgetId, this.props.config.actionUseDataSource)

    return (
      <div css={this.getStyle(this.props.theme)}>
        <SettingSection title={this.props.intl.formatMessage({ id: 'mapAction_TriggerLayer', defaultMessage: defaultMessages.mapAction_TriggerLayer })}>
          <DataSourceSelector
            types={DSSelectorTypes}
            useDataSources={triggerDsSelectorSourceData.useDataSources}
            fromRootDsIds={triggerDsSelectorSourceData.fromRootDsIds}
            fromDsIds={triggerDsSelectorSourceData.fromDsIds}
            closeDataSourceListOnChange
            disableRemove={() => triggerDsSelectorSourceData.isReadOnly}
            disableDataSourceList={triggerDsSelectorSourceData.isReadOnly}
            disableAddData
            hideTypeDropdown
            mustUseDataSource
            onChange={this.handleTriggerLayerChange}
            widgetId={this.props.messageWidgetId}
            disableDataView
            hideDataView={this.checkIsDisableDataView(this.props.messageWidgetId)}
            enableToSelectOutputDsFromSelf={true}
          />
        </SettingSection>
        <SettingSection title={this.props.intl.formatMessage({ id: 'mapAction_ActionLayer', defaultMessage: defaultMessages.mapAction_ActionLayer })}>
          <DataSourceSelector
            types={DSSelectorTypes}
            useDataSources={actionDsSelectorSourceData.useDataSources}
            fromRootDsIds={actionDsSelectorSourceData.fromRootDsIds}
            fromDsIds={actionDsSelectorSourceData.fromDsIds}
            closeDataSourceListOnChange
            disableRemove={() => actionDsSelectorSourceData.isReadOnly}
            disableDataSourceList={actionDsSelectorSourceData.isReadOnly}
            disableAddData
            hideTypeDropdown
            mustUseDataSource
            onChange={this.handleActionLayerChange}
            widgetId={this.props.widgetId}
            hideDataView
            enableToSelectOutputDsFromSelf={true}
          // onSelect={this.handleActionLayerSelected}
          // onRemove={this.handleRemoveLayerForActionLayer}
          />
        </SettingSection>
        {this.props.config && this.props.config.messageUseDataSource && this.props.config.actionUseDataSource &&
          <SettingSection title={this.props.intl.formatMessage({ id: 'mapAction_Conditions', defaultMessage: defaultMessages.mapAction_Conditions })}>
            <SettingRow label={this.props.intl.formatMessage({ id: 'mapAction_RelateMessage', defaultMessage: defaultMessages.mapAction_RelateMessage })}>
              <Switch checked={this.props.config.enabledDataRelationShip} onChange={evt => { this.swicthEnabledDataRelationShip(evt.target.checked) }} />
            </SettingRow>
            <SettingRow>
              <Collapse isOpen={this.props.config.enabledDataRelationShip} className='w-100'>
                {this.checkTrigerLayerIsSameToActionLayer() &&
                  <div className='w-100 border p-1 mr-2'>{this.props.intl.formatMessage({ id: 'mapAction_AutoBind', defaultMessage: defaultMessages.mapAction_AutoBind })}</div>}
                {!this.checkTrigerLayerIsSameToActionLayer() && <div className='w-100 d-flex align-items-center'>
                  <div className='d-flex flex-column relate-panel-left'>
                    <FieldSelector
                      className='w-100'
                      useDataSources={Immutable([this.props.config.messageUseDataSource?.asMutable({ deep: true })])} isDataSourceDropDownHidden
                      placeholder={this.props.intl.formatMessage({ id: 'mapAction_TriggerLayerField', defaultMessage: defaultMessages.mapAction_TriggerLayerField })}
                      onChange={this.onMessageFieldSelected} useDropdown isSearchInputHidden
                      selectedFields={this.props.config.messageUseDataSource && this.props.config.messageUseDataSource.fields
                        ? this.props.config.messageUseDataSource.fields : Immutable([])}
                    />
                    <FieldSelector
                      className='w-100 action-select-chooser'
                      placeholder={this.props.intl.formatMessage({ id: 'mapAction_ActionLayerField', defaultMessage: defaultMessages.mapAction_ActionLayerField })}
                      useDataSources={Immutable([this.props.config.actionUseDataSource?.asMutable({ deep: true })])} isDataSourceDropDownHidden
                      onChange={this.onActionFieldSelected} useDropdown isSearchInputHidden
                      selectedFields={this.props.config.actionUseDataSource && this.props.config.actionUseDataSource.fields
                        ? this.props.config.actionUseDataSource.fields : Immutable([])}
                    />
                  </div>
                  <Icon className='flex-none' width={12} height={40} color={theme.colors.dark[400]} icon={require('jimu-ui/lib/icons/link-combined.svg')} />
                </div>}
              </Collapse>
            </SettingRow>
            <SettingRow>
              <Button type='link' disabled={!this.props.config.actionUseDataSource} className='w-100 d-flex justify-content-start' onClick={this.showSqlExprPopup}>
                <div className='w-100 text-truncate' style={{ textAlign: 'start' }}>
                  {this.props.intl.formatMessage({ id: 'mapAction_MoreConditions', defaultMessage: defaultMessages.mapAction_MoreConditions })}
                </div>
              </Button>
              {this.props.config.actionUseDataSource && <DataSourceComponent useDataSource={this.props.config.actionUseDataSource}>{(ds) => {
                return (
                  <SqlExpressionBuilderPopup
                    dataSource={ds} mode={SqlExpressionMode.Simple}
                    isOpen={this.state.isSqlExprShow} toggle={this.toggleSqlExprPopup}
                    expression={this.props.config.sqlExprObj} onChange={(sqlExprObj) => { this.onSqlExprBuilderChange(sqlExprObj) }}
                  />
                )
              }}
              </DataSourceComponent>}
            </SettingRow>
            <SettingRow>
              <div className='sql-expr-display'>
                {this.props.config.sqlExprObj && actionUseDataSourceInstance
                  ? dataSourceUtils.getArcGISSQL(this.props.config.sqlExprObj, actionUseDataSourceInstance).displaySQL
                  : this.props.intl.formatMessage({ id: 'mapAction_SetExpression', defaultMessage: defaultMessages.mapAction_SetExpression })}
              </div>
            </SettingRow>
          </SettingSection>}
      </div>
    )
  }
}

export default themeUtils.withTheme(_FlashActionSetting)
