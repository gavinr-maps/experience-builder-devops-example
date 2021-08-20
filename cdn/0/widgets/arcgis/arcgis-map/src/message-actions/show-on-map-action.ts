import {
  AbstractMessageAction, MessageType, Message, DataRecordSetChangeMessage, RecordSetChangeType, MutableStoreManager,
  getAppStore, ImmutableObject, IMJimuMapViewInfo
} from 'jimu-core'
import { SHOW_ON_MAP_DATA_ID_PREFIX, ShowOnMapDataType, ShowOnMapDatas} from 'jimu-arcgis'
import { IMConfig } from './pan-to-action-setting'

export default class ShowOnMapAction extends AbstractMessageAction {

  filterMessageType (messageType: MessageType, messageWidgetId?: string): boolean {
    return messageType === MessageType.DataRecordSetChange
  }

  filterMessage (message: Message): boolean {
    return true
  }

  onRemoveListen (messageType: MessageType, messageWidgetId?: string) {
    const showOnMapDatas: ShowOnMapDatas = MutableStoreManager.getInstance().getStateValue([this.widgetId])?.showOnMapDatas || {}
    const newShowOnMapDatas = {}
    Object.entries(showOnMapDatas).forEach(entry => {
      if (entry[1]?.messageWidgetId !== messageWidgetId) {
        newShowOnMapDatas[entry[0]] = entry[1]
      }
    })
    // save action data
    MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'showOnMapDatas', newShowOnMapDatas)
  }

  onExecute (message: DataRecordSetChangeMessage, actionConfig?: IMConfig): Promise<boolean> | boolean {
    const activeViewId = this._getActiveViewId(this.widgetId, getAppStore().getState().jimuMapViewsInfo)
    const defaultViewId = this._getDefaultViewId(this.widgetId, getAppStore().getState().jimuMapViewsInfo)
    const jimuMapViewId = activeViewId || defaultViewId
    let showOnMapDatas = MutableStoreManager.getInstance().getStateValue([this.widgetId])?.showOnMapDatas || {}
    const idBase = `${SHOW_ON_MAP_DATA_ID_PREFIX}messageAction_${this.widgetId}_${message.dataRecordSetId}_`
    const idTemporary = `${idBase}???`
    const id = activeViewId ? `${idBase}${activeViewId}` : idTemporary

    if (defaultViewId && defaultViewId === activeViewId) {
      // allow to add data using a temporary id, temporary id data will be deleted if can get activeViewId
      delete showOnMapDatas[idTemporary]
    }

    if (message.changeType === RecordSetChangeType.Create || message.changeType === RecordSetChangeType.Update) {
      showOnMapDatas[id] = {
        mapWidgetId: this.widgetId,
        messageWidgetId: message.widgetId,
        // Set jimuMapViewId to null means the data will be shared between all jimuMapViews of one mapWidget
        jimuMapViewId: jimuMapViewId, // activeViewId,
        dataSource: message.dataRecordSet?.dataSource,
        records: message.dataRecordSet?.records,
        type: ShowOnMapDataType.MessageAction,
        title: id // 'Show on map message ...'
      }
    } else if (message.changeType === RecordSetChangeType.Remove) {
      // delete showOnMapDatas[id]
      const newShowOnMapDatas = {}
      Object.entries(showOnMapDatas).forEach(entry => {
        if (entry[0].indexOf(idBase) !== 0) {
          newShowOnMapDatas[entry[0]] = entry[1]
        }
      })
      showOnMapDatas = newShowOnMapDatas
    }
    // save action data
    MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'showOnMapDatas', showOnMapDatas)
    return Promise.resolve(true)
  }

  private _getActiveViewId (mapWidgetId: string, infos: ImmutableObject<{[jimuMapViewId: string]: IMJimuMapViewInfo}>): string {
    return Object.keys(infos || {}).find(viewId => infos[viewId].mapWidgetId === mapWidgetId && infos[viewId].isActive)
  }

  private _getDefaultViewId (mapWidgetId: string, infos: ImmutableObject<{[jimuMapViewId: string]: IMJimuMapViewInfo}>): string {
    return Object.keys(infos || {}).find(viewId => infos[viewId].mapWidgetId === mapWidgetId)
  }
}
