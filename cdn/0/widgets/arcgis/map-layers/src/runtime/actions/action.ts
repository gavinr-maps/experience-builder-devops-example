import { /* getAppStore, */ MessageType } from 'jimu-core'
import LayerList from '../widget'

export default class Action {
  id: string = 'id'
  title: string = 'title'
  className: string = 'esri-icon'
  group: number = 0
  widget: LayerList = null

  hasActionWithMessage (messageType: MessageType): boolean {
    /*
    let messagesConfig = getAppStore().getState().appConfig.messages;
    return messagesConfig.some((messageConfig) => {
      return messageConfig.widgetId === this.widget.props.id && messageConfig.messageType === messageType && !!messageConfig.actions[0];
    });
    */
    return false
  }

  useMapWidget (): boolean {
    return this.widget.props.config.useMapWidget
  }

  isValid = (layerItem): boolean => false
  execute = (layerItem): void => {}
}
