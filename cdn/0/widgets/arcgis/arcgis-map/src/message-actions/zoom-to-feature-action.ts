import {
  AbstractMessageAction, MessageType, Message, getAppStore, DataRecordSetChangeMessage, RecordSetChangeType,
  DataRecordsSelectionChangeMessage, FeatureDataRecord, ExtentChangeMessage, MutableStoreManager
} from 'jimu-core'
import { loadArcGISJSAPIModules } from 'jimu-arcgis'
import { handleFeature } from '../runtime/utils'
import { IMConfig } from './zoom-to-feature-action-setting'

export default class ZoomToFeatureAction extends AbstractMessageAction {
  NoLockTriggerLayerWidgets = ['Map']

  filterMessageType (messageType: MessageType, messageWidgetId?: string): boolean {
    return messageType === MessageType.DataRecordSetChange ||
      messageType === MessageType.DataRecordsSelectionChange || messageType === MessageType.ExtentChange
  }

  filterMessage (message: Message): boolean {
    return true
  }

  getSettingComponentUri (messageType: MessageType, messageWidgetId?: string): string {
    if (messageType === MessageType.DataRecordsSelectionChange) {
      return 'message-actions/zoom-to-feature-action-setting'
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
                if ((dataRecordSetChangeMessage.dataRecordSet.records[i] as FeatureDataRecord).feature) {
                  features.push(handleFeature((dataRecordSetChangeMessage.dataRecordSet.records[i] as
                    FeatureDataRecord).feature, Graphic))
                }
              }

              newFeatureSet = {
                features: features,
                type: 'zoom-to-graphics'
              }
            }

            MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'zoomToFeatureActionValue.value', newFeatureSet)
          }
          break
        case MessageType.DataRecordsSelectionChange:
          const config = getAppStore().getState().appConfig
          const messageWidgetJson = config.widgets[message.widgetId]
          const messageWidgetLabel = messageWidgetJson.manifest.label
          if (actionConfig) {
            const dataRecordsSelectionChangeMessage = message as DataRecordsSelectionChangeMessage

            let selectionFeatureSet = {}
            const selectFeatures = []

            let layerId = null
            if (dataRecordsSelectionChangeMessage.records) {
              if (dataRecordsSelectionChangeMessage.records[0]) {
                if ((dataRecordsSelectionChangeMessage.records[0].dataSource as any).layer) {
                  layerId = (dataRecordsSelectionChangeMessage.records[0].dataSource as any).layer.id
                }

                if (this.NoLockTriggerLayerWidgets.includes(messageWidgetLabel)) {
                  if (!actionConfig.useDataSource || (dataRecordsSelectionChangeMessage.records[0].dataSource.getMainDataSource().id !== actionConfig.useDataSource.mainDataSourceId)) {
                    break
                  }
                }
              }

              for (let i = 0; i < dataRecordsSelectionChangeMessage.records.length; i++) {
                if ((dataRecordsSelectionChangeMessage.records[i] as FeatureDataRecord).feature) {
                  selectFeatures.push(handleFeature((dataRecordsSelectionChangeMessage.records[i] as
                    FeatureDataRecord).feature, Graphic))
                }
              }
            }

            selectionFeatureSet = {
              features: selectFeatures,
              layerId: layerId,
              zoomToOption: actionConfig && actionConfig.isUseCustomZoomToOption && actionConfig.zoomToOption.scale ? actionConfig.zoomToOption : null,
              type: 'zoom-to-graphics'
            }

            MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'zoomToFeatureActionValue.value', selectionFeatureSet)
            break
          } else {
            const dataRecordsSelectionChangeMessage = message as DataRecordsSelectionChangeMessage

            let selectionFeatureSet = {}
            const selectFeatures = []
            let layerId = null
            if (dataRecordsSelectionChangeMessage.records) {
              if (dataRecordsSelectionChangeMessage.records[0]) {
                if ((dataRecordsSelectionChangeMessage.records[0].dataSource as any).layer) {
                  layerId = (dataRecordsSelectionChangeMessage.records[0].dataSource as any).layer.id
                }

                if (this.NoLockTriggerLayerWidgets.includes(messageWidgetLabel)) {
                  if (!actionConfig.useDataSource || (dataRecordsSelectionChangeMessage.records[0].dataSource.getMainDataSource().id !== actionConfig.useDataSource.mainDataSourceId)) {
                    break
                  }
                }
              }

              for (let i = 0; i < dataRecordsSelectionChangeMessage.records.length; i++) {
                if ((dataRecordsSelectionChangeMessage.records[i] as FeatureDataRecord).feature) {
                  selectFeatures.push(handleFeature((dataRecordsSelectionChangeMessage.records[i] as
                    FeatureDataRecord).feature, Graphic))
                }
              }
            }

            selectionFeatureSet = {
              features: selectFeatures,
              layerId: layerId,
              zoomToOption: null,
              type: 'zoom-to-graphics'
            }

            MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'zoomToFeatureActionValue.value', selectionFeatureSet)
            break
          }
        case MessageType.ExtentChange:
          const extentChangeMessage = message as ExtentChangeMessage
          if (extentChangeMessage.getRelatedWidgetIds().includes(this.widgetId)) {
            break
          }

          const extentValue = {
            features: [extentChangeMessage.extent],
            type: 'zoom-to-extent'
          }

          const zoomToFeatureActionValue = {
            value: extentValue,
            relatedWidgets: extentChangeMessage.getRelatedWidgetIds()
          }
          MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'zoomToFeatureActionValue', zoomToFeatureActionValue)
          break
      }

      return true
    })
  }
}
