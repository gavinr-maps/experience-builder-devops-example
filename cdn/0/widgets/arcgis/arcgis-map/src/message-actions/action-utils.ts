import { getAppStore, MessageType, MessageCarryData } from 'jimu-core'

export function isUseOutputDataSources (wId: string, messageType: MessageType): boolean {
  const messageCarryData = getMessageCarryDataByWidgetId(wId, messageType)
  return messageCarryData == MessageCarryData.OutputDataSource
}

export function getMessageCarryDataByWidgetId (wId: string, messageType: MessageType): MessageCarryData {
  const appConfig = getAppStore().getState()?.appStateInBuilder?.appConfig
  const widgetJson = appConfig?.widgets?.[wId]
  const publishMessages = widgetJson?.manifest?.publishMessages;
  let messageCarryData = null;
  publishMessages?.forEach(el => {
    const publishMessageProperty = el as any;
    if(publishMessageProperty?.messageCarryData && publishMessageProperty?.messageType == messageType){
      messageCarryData = publishMessageProperty?.messageCarryData
    }
  })
  return messageCarryData;
}
