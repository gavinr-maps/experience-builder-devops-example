import {
  AbstractMessageAction, MessageType, Message, getAppStore, DataRecordSetChangeMessage, RecordSetChangeType,
  DataRecordsSelectionChangeMessage, ExtentChangeMessage, FeatureDataRecord as FeatureQueryDataRecord, MutableStoreManager
} from 'jimu-core'
import { FeatureDataRecord as FeatureLayerDataRecord, loadArcGISJSAPIModules } from 'jimu-arcgis'
import { handleFeature } from '../runtime/utils'
import { IMConfig } from './pan-to-action-setting'

export default class PanToAction extends AbstractMessageAction {
  filterMessageType (messageType: MessageType, messageWidgetId?: string): boolean {
    return messageType === MessageType.DataRecordSetChange ||
      messageType === MessageType.DataRecordsSelectionChange || messageType === MessageType.ExtentChange
  }

  filterMessage (message: Message): boolean {
    return true
  }

  getSettingComponentUri (messageType: MessageType, messageWidgetId?: string): string {
    const config = getAppStore().getState().appStateInBuilder ? getAppStore().getState().appStateInBuilder.appConfig : getAppStore().getState().appConfig
    const messageWidgetJson = config.widgets[messageWidgetId]
    if (messageWidgetJson.manifest.label === 'Map') {
      if (messageType === MessageType.DataRecordsSelectionChange) {
        return 'message-actions/pan-to-action-setting'
      } else {
        return null
      }
    } else {
      return null
    }
  }

  onExecute (message: Message, actionConfig?: IMConfig): Promise<boolean> | boolean {
    return loadArcGISJSAPIModules(['esri/Graphic']).then(modules => {
      let Graphic: __esri.GraphicConstructor = null;
      [Graphic] = modules
      switch (message.type) {
        case MessageType.DataRecordSetChange:
          const dataRecordSetChangeMessage = message as DataRecordSetChangeMessage
          if (dataRecordSetChangeMessage.changeType === RecordSetChangeType.Create ||
            dataRecordSetChangeMessage.changeType === RecordSetChangeType.Update) {
            let newFeatureSet = {}
            if (dataRecordSetChangeMessage.dataRecordSet && dataRecordSetChangeMessage.dataRecordSet.records) {
              const features = []
              for (let i = 0; i < dataRecordSetChangeMessage.dataRecordSet.records.length; i++) {
                const dataRecordFeature = (dataRecordSetChangeMessage.dataRecordSet.records[i] as
                  (FeatureQueryDataRecord | FeatureLayerDataRecord)).feature
                if (dataRecordFeature) {
                  features.push(handleFeature(dataRecordFeature, Graphic).geometry)
                }
              }

              newFeatureSet = {
                features: features
              } as __esri.FeatureSet
            }

            MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'panToActionValue.value', newFeatureSet)
          }
          break
        case MessageType.DataRecordsSelectionChange:
          if (actionConfig) {
            const dataRecordsSelectionChangeMessage = message as DataRecordsSelectionChangeMessage

            let selectionFeatureSet = {}
            const selectFeatures = []
            if (dataRecordsSelectionChangeMessage.records) {
              if (dataRecordsSelectionChangeMessage.records[0]) {
                if (!actionConfig.useDataSource || (dataRecordsSelectionChangeMessage.records[0].dataSource.getMainDataSource().id !== actionConfig.useDataSource.mainDataSourceId)) {
                  break
                }
              }

              for (let i = 0; i < dataRecordsSelectionChangeMessage.records.length; i++) {
                const dataRecordFeature = (dataRecordsSelectionChangeMessage.records[i] as
                  (FeatureQueryDataRecord | FeatureLayerDataRecord)).feature
                if (dataRecordFeature) {
                  selectFeatures.push(handleFeature(dataRecordFeature, Graphic).geometry)
                }
              }
            }

            selectionFeatureSet = {
              features: selectFeatures
            }

            MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'panToActionValue.value', selectionFeatureSet)
            break
          } else {
            const dataRecordsSelectionChangeMessage = message as DataRecordsSelectionChangeMessage

            let selectionFeatureSet = {}
            const selectFeatures = []
            if (dataRecordsSelectionChangeMessage.records) {
              for (let i = 0; i < dataRecordsSelectionChangeMessage.records.length; i++) {
                const dataRecordFeature = (dataRecordsSelectionChangeMessage.records[i] as
                  (FeatureQueryDataRecord | FeatureLayerDataRecord)).feature
                if (dataRecordFeature) {
                  selectFeatures.push(handleFeature(dataRecordFeature, Graphic).geometry)
                }
              }
            }

            selectionFeatureSet = {
              features: selectFeatures
            }

            MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'panToActionValue.value', selectionFeatureSet)
            break
          }
        case MessageType.ExtentChange:
          const extentChangeMessage = message as ExtentChangeMessage

          if (extentChangeMessage.getRelatedWidgetIds().includes(this.widgetId)) {
            break
          }

          const extentValue = {
            features: [extentChangeMessage.extent]
          }

          const panToFeatureActionValue = {
            value: extentValue,
            relatedWidgets: extentChangeMessage.getRelatedWidgetIds()
          }
          MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'panToActionValue', panToFeatureActionValue)
          break
      }
      return true
    })
  }
}
