/** @jsx jsx */
import {
  React, jsx, classNames, AllWidgetProps, IMState, RepeatedDataSource, css, appActions, AppMode, Immutable,
  ReactRedux, IntlShape, IMExpressionMap, expressionUtils, ExpressionMap, MutableStoreManager, getAppStore
} from 'jimu-core'
import { IMConfig } from '../config'
import { Editor } from 'jimu-ui/advanced/rich-text-editor'
import { Displayer } from './displayer'
import defaultMessages from './translations/default'
import { hooks, richTextUtils } from 'jimu-ui'
const { useSelector, useDispatch } = ReactRedux
const { useState, useMemo, useEffect, useRef } = React

enum RepeatType { None, Main, Sub }

const translate = (id: string, intl: IntlShape): string => {
  return intl !== null ? intl.formatMessage({ id: id, defaultMessage: defaultMessages[id] }) : ''
}

const translatePlaceholder = (placeholder: string, intl: IntlShape): string => {
  if (placeholder === defaultMessages.placeholder) {
    placeholder = translate('placeholder', intl)
  }
  return placeholder
}

const style = css`
  /* Ensure that the cursor can be displayed when automatic width of layout */
  min-width: 12px;
`

const Widget = (props: AllWidgetProps<IMConfig>): React.ReactElement => {
  const {
    builderSupportModules,
    id,
    intl,
    useDataSources: propUseDataSources,
    repeatedDataSource,
    useDataSourcesEnabled,
    isInlineEditing,
    config
  } = props

  const dispatch = useDispatch()
  const { current: isInBuilder } = useRef(getAppStore().getState().appContext.isInBuilder)

  // Check whether the widget is selected in builder
  const selected = hooks.useWidgetSelected(id)
  const selectedRef = hooks.useRefValue(selected)

  const appMode = useSelector((state: IMState) => selected ? state.appRuntimeInfo.appMode : null)

  const getAppConfigAction = builderSupportModules?.jimuForBuilderLib.getAppConfigAction
  const RichEditor = builderSupportModules?.widgetModules.Editor
  const builderUtils = builderSupportModules?.widgetModules.builderUtils

  const wrap = config?.style?.wrap ?? true
  const text = config?.text
  const tooltip = config?.tooltip
  const placeholder = translatePlaceholder(config?.placeholder, intl)
  const useDataSources = useDataSourcesEnabled ? propUseDataSources : undefined
  const [repeat, setRepeat] = useState(RepeatType.Sub)
  // The expressions in rich-text
  const [expressions, setExpressions] = useState<IMExpressionMap>(null)

  // Check whether the text is in the list widget according to the repeatedDataSource
  //  If there is no repeatedDataSource, it is not in the list widget => RepeatType.None
  //  If repeatedDataSource.recordIndex is 0, means that it is the edited one in the list widget => RepeatType.Main
  //  If repeatedDataSource.recordIndex is not 0, means that it is the widget in the list that only displays text => RepeatType.Sub
  useEffect(() => {
    let repeat
    if (repeatedDataSource == null) {
      repeat = RepeatType.None
    } else {
      if ((repeatedDataSource as RepeatedDataSource).recordIndex === 0) {
        repeat = RepeatType.Main
      } else {
        repeat = RepeatType.Sub
      }
    }
    setRepeat(repeat)
  }, [repeatedDataSource])

  // When appMode changed, set `isInlineEditing` to false
  useEffect(() => {
    if (!selectedRef.current) {
      return
    }
    if (appMode === AppMode.Run) {
      dispatch(appActions.setWidgetIsInlineEditingState(id, false))
    }
  }, [selectedRef, appMode, dispatch, id])

  // Automatically activate editing for newly added text widget
  useEffect(() => {
    if (selectedRef.current) {
      dispatch(appActions.setWidgetIsInlineEditingState(id, true))
    }
  }, [selectedRef, dispatch, id])

  // When `isInlineEditing` changed, set `showExpression` to false
  hooks.useUpdateEffect(() => {
    if (!isInBuilder) {
      return
    }
    if (!isInlineEditing) {
      dispatch(appActions.widgetStatePropChange(id, 'showExpression', false))
    }
  }, [isInlineEditing, dispatch, id])

  // Determine whether it can be edited:
  //   When the widget is selected and not only used to display the text in the list(RepeatType.Sub), it is editable
  const editable = useMemo(() => {
    return appMode === AppMode.Design && selected && repeat !== RepeatType.Sub
  }, [appMode, repeat, selected])

  // Send `editor` instance to setting through `widgetMutableStatePropChange`
  const onEditorCreate = (editor: Editor): void => {
    MutableStoreManager.getInstance().updateStateValue(id, 'editor', editor)
  }

  const onEditorDestory = (): void => {
    MutableStoreManager.getInstance().updateStateValue(id, 'editor', null)
  }

  const unMountingRef = useRef(false)

  useEffect(() => {
    return () => {
      unMountingRef.current = true
    }
  }, [])

  hooks.useUpdateEffect(() => {
    let expressions = richTextUtils.getAllExpressions(text)
    expressions = expressions != null ? expressions : Immutable({}) as IMExpressionMap
    expressions = expressions.merge((tooltip != null ? { tooltip } : {}) as ExpressionMap)
    setExpressions(expressions)
  }, [text, tooltip])

  // Save text and placeholder to config
  const onEditorChange = (value: string, placeholder: string): void => {
    if (unMountingRef.current) return
    if (!isInBuilder) return
    getAppConfigAction().editWidget({ id, config: config.set('text', value).set('placeholder', placeholder) }).exec()
  }

  const handleExpressionChange = hooks.useEventCallback(() => {
    if (unMountingRef.current) return
    if (!isInBuilder) return
    if (useDataSources == null) return
    const hasFields = expressionUtils.whetherHasFieldsInUseDataSources(useDataSources)
    const parts = builderUtils.getExpressionParts(expressions)
    if (!hasFields && (parts?.length == null || parts?.length === 0)) return

    let udsWithFields = expressionUtils.getUseDataSourceFromExpParts(parts, useDataSources) as any
    const udsWithoutFields = expressionUtils.getUseDataSourcesWithoutFields(useDataSources)
    udsWithFields = expressionUtils.mergeUseDataSources(udsWithoutFields, udsWithFields)

    getAppConfigAction().editWidget({
      id,
      useDataSources: udsWithFields
    }).exec()
  })

  // When `expressions` changed, put the fields in `useDataSources`
  hooks.useUpdateEffect(() => {
    handleExpressionChange()
  }, [expressions, handleExpressionChange])

  return (
    <div
      data-testid='text-widget'
      css={style}
      className={classNames('widget-text jimu-widget p-1')}
    >
      {editable && <RichEditor
        widgetId={id}
        nowrap={!wrap}
        useDataSources={useDataSources}
        enabled={!!isInlineEditing}
        onCreate={onEditorCreate}
        onDestory={onEditorDestory}
        onChange={onEditorChange}
        placeholder={placeholder}
        preserveWhitespace
        value={text}
      />}
      {!editable && <Displayer
        value={text}
        tooltip={tooltip}
        wrap={wrap}
        placeholder={placeholder}
        useDataSources={useDataSources}
        widgetId={id}
        repeatedDataSource={repeatedDataSource as RepeatedDataSource}
      />}
    </div>
  )
}

export default Widget
