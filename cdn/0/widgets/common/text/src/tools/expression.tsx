import { extensionSpec, React, appActions, getAppStore, LayoutContextToolProps, Immutable, i18n } from 'jimu-core'
import { IMWidgetState } from '../config'
import { defaultMessages } from 'jimu-ui'

export default class TextTool implements extensionSpec.ContextToolExtension {
  index = 2
  id = 'text-expression'
  widgetId: string

  visible (props: LayoutContextToolProps): boolean {
    const widgetId = props.layoutItem.widgetId
    const widgetJson = getAppStore().getState().appConfig?.widgets?.[widgetId]
    const showExpressionTool = (widgetJson?.useDataSources != null && widgetJson?.useDataSources?.length > 0) && widgetJson?.useDataSourcesEnabled
    return showExpressionTool
  }

  getGroupId (): string {
    return null
  }

  getTitle (): string {
    const intl = i18n.getIntl('_jimu')
    return intl != null ? intl.formatMessage({ id: 'dynamicContent', defaultMessage: defaultMessages.dynamicContent }) : 'Dynamic content'
  }

  checked (props: LayoutContextToolProps): boolean {
    const widgetId = props.layoutItem.widgetId
    const widgetState: IMWidgetState = getAppStore().getState().widgetsState[widgetId] ?? Immutable({})
    return !!widgetState.showExpression
  }

  getIcon (): any {
    return require('jimu-ui/lib/icons/data-16.svg')
  }

  onClick (props: LayoutContextToolProps): void {
    const widgetId = props.layoutItem.widgetId
    const widgetState: IMWidgetState = getAppStore().getState().widgetsState[widgetId] ?? Immutable({})

    const showExpression = !widgetState.showExpression

    if (showExpression) {
      if (!getAppStore().getState().widgetsRuntimeInfo[widgetId].isInlineEditing) {
        getAppStore().dispatch(appActions.setWidgetIsInlineEditingState(widgetId, true))
      }
    }
    getAppStore().dispatch(appActions.widgetStatePropChange(widgetId, 'showExpression', showExpression))
  }

  getSettingPanel (): React.ComponentClass<unknown> {
    return null
  }
}
