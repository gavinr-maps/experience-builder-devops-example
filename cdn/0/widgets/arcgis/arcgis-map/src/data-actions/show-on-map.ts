import {
  AbstractDataAction, DataSource, DataRecord, getAppStore, ImmutableObject, IMJimuMapViewInfo,
  MutableStoreManager, utils, i18n
} from 'jimu-core'
import { MapViewManager, SHOW_ON_MAP_DATA_ID_PREFIX, ShowOnMapDataType } from 'jimu-arcgis'
import defaultMessages from '../runtime/translations/default'

export default class ShowOnMap extends AbstractDataAction {
  private readonly _viewManager = MapViewManager.getInstance()

  async isSupported (dataSource: DataSource, records: DataRecord[]): Promise<boolean> {
    // @ts-expect-error
    return records.length > 0 && records.some(record => record.feature?.geometry)
  }

  async onExecute (dataSource: DataSource, records: DataRecord[], name, actionConfig): Promise<boolean> {
    const activeViewId = this._getActiveViewId(this.widgetId, getAppStore().getState().jimuMapViewsInfo)
    const showOnMapDatas = MutableStoreManager.getInstance().getStateValue([this.widgetId])?.showOnMapDatas || {}
    const intl = i18n.getIntl()
    // save action data
    const id = `${SHOW_ON_MAP_DATA_ID_PREFIX}dataAction_${utils.getUUID()}`
    showOnMapDatas[id] = {
      mapWidgetId: this.widgetId,
      jimuMapViewId: activeViewId,
      dataSource,
      records,
      type: ShowOnMapDataType.DataAction,
      title: name || intl.formatMessage({ id: 'showOnMapData', defaultMessage: defaultMessages.showOnMapData })
    }
    MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'showOnMapDatas', showOnMapDatas)
    return await Promise.resolve(true)
  }

  private _getActiveViewId (mapWidgetId: string, infos: ImmutableObject<{[jimuMapViewId: string]: IMJimuMapViewInfo}>): string {
    let activeViewId = Object.keys(infos || {}).find(viewId => infos[viewId].mapWidgetId === mapWidgetId && infos[viewId].isActive)
    // using a default map view as active map view if the widget hasn't been loaded.
    if (!activeViewId) {
      activeViewId = Object.keys(infos || {}).find(viewId => infos[viewId].mapWidgetId === mapWidgetId)
    }
    return activeViewId
  }
}
