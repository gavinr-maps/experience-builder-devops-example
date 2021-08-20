import { React, IMState, appActions, getAppStore, ReactRedux, ImmutableArray, UseDataSource } from 'jimu-core'
import { Bubble, Expression, RichPluginInjectedProps } from 'jimu-ui/advanced/rich-text-editor'
import { defaultMessages, hooks } from 'jimu-ui'

interface _TextPliuginsProps {
  useDataSources: ImmutableArray<UseDataSource>
  widgetId: string
}

export type TextPliuginsProps = _TextPliuginsProps & RichPluginInjectedProps

export const TextPlugins = (props: TextPliuginsProps): React.ReactElement => {
  const { editor, formats, selection, useDataSources, widgetId } = props
  const showExpression = ReactRedux.useSelector((state: IMState) => state.widgetsState[widgetId]?.showExpression)
  const translate = hooks.useTranslate(defaultMessages)

  const headerProps = React.useMemo(() => ({
    title: translate('dynamicContent'),
    onClose: () => getAppStore().dispatch(appActions.widgetStatePropChange(widgetId, 'showExpression', false))
  }), [widgetId, translate])

  return (
    <>
      <Bubble editor={editor} formats={formats} selection={selection} source='user' />
      <Expression
        source='user'
        editor={editor}
        formats={formats}
        selection={selection}
        open={showExpression}
        useDataSources={useDataSources}
        header={headerProps}
        widgetId={widgetId}
      />
    </>
  )
}
