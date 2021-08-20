import { extensionSpec, React, getAppStore, appActions, LayoutContextToolProps, i18n, MutableStoreManager } from 'jimu-core'
import { ImageFillMode } from 'jimu-ui'
import { Config } from '../config'
import defaultMessage from '../../src/runtime/translations/default'

export default class CropTool implements extensionSpec.ContextToolExtension {
  index = 1
  id = 'image-croptool'
  widgetId: string

  classes: { [widgetId: string]: React.ComponentClass<unknown> } = {}

  getGroupId () {
    return null
  }

  getTitle () {
    const widgetId = this.widgetId
    const intl = i18n.getIntl(widgetId)
    return intl ? intl.formatMessage({ id: 'imageCrop', defaultMessage: defaultMessage.imageCrop }) : 'Crop'
  }

  getIcon () {
    return require('jimu-ui/lib/icons/tool-cut.svg')
  }

  onClick (props: LayoutContextToolProps) {
    const widgetInfo = getAppStore().getState().appConfig.widgets[props.layoutItem.widgetId]
    const clientRect: ClientRect = {
      bottom: props.clientRect.bottom,
      height: props.clientRect.height,
      left: window.scrollX + props.clientRect.left,
      right: props.clientRect.right,
      top: window.scrollY + props.clientRect.top,
      width: props.clientRect.width
    }

    MutableStoreManager.getInstance().updateStateValue(props.layoutItem.widgetId, 'clientRect', clientRect)

    if (widgetInfo) {
      const widgetConfig = widgetInfo.config as Config
      if (widgetConfig.functionConfig.imageParam && widgetConfig.functionConfig.imageParam.url) {
        getAppStore().dispatch(appActions.setWidgetIsInlineEditingState(props.layoutItem.widgetId, true))
      }
    }
  }

  isEmptySource = (config: Config): boolean => {
    if ((!config.functionConfig.imageParam || !config.functionConfig.imageParam.url) && !config.functionConfig.srcExpression) {
      return true
    } else {
      return false
    }
  }

  visible (props: LayoutContextToolProps) {
    const widgetInfo = getAppStore().getState().appConfig.widgets[props.layoutItem.widgetId]
    if (widgetInfo) {
      const widgetConfig = widgetInfo.config as Config
      if (this.isEmptySource(widgetConfig)) {
        return false
      }

      if (widgetConfig.functionConfig.srcExpression) {
        // the dynamic src from expression can't support crop
        return false
      } else if (widgetConfig.functionConfig.imageParam && (widgetConfig.functionConfig.imageFillMode === ImageFillMode.Fit)) {
        return false
      } else {
        // the static src can support crop
        return true
      }
    } else {
      return false
    }
  }

  getSettingPanel (props: LayoutContextToolProps): React.ComponentClass<unknown> {
    return null
  }
}
