/** @jsx jsx */
import { React, jsx, css } from 'jimu-core'
import { Editor, RichSelection, Sources, richTextEditorUtils, RichTextFormatKeys, FormatType, useEditorSelectionFormats } from 'jimu-ui/advanced/rich-text-editor'
import { Button, Icon, hooks } from 'jimu-ui'
const clearFormatsIcon = require('jimu-ui/lib/icons/clear-formats.svg')

export interface RichFormatClearPluginProps {
  editor: Editor
  quillEnabled: boolean
  className?: string
  style?: any
  formats?: { [x: string]: any }
  onChange: (text: string) => void
}

const style = css`
  > * {
    user-select: none;
  }
`

const getAllSelection = (editor): RichSelection => {
  let length = editor.getLength()
  length = length > 0 ? length - 1 : length
  return { index: 0, length }
}

export const RichFormatClearPlugin = (props: RichFormatClearPluginProps): React.ReactElement => {
  const { quillEnabled, editor, onChange, ...others } = props
  const [, _selection] = useEditorSelectionFormats(editor, true)

  const translate = hooks.useTranslate()

  const selection = React.useMemo(() => {
    if (!quillEnabled) return getAllSelection(editor)
    return _selection
  }, [quillEnabled, _selection, editor])

  const handleClick = (): void => {
    const source = quillEnabled ? 'user' : 'api' as Sources

    const formatValue = {
      type: FormatType.INLINE,
      key: RichTextFormatKeys.Clear,
      value: null,
      selection,
      source
    }

    richTextEditorUtils.formatText(editor, formatValue)
    onChange?.(editor?.root.innerHTML)
  }

  return (
    <Button
      css={style}
      {...others}
      icon
      type='tertiary'
      size='sm'
      onClick={handleClick}
      title={translate('clearAllFormats')}
    >
      <Icon size={14} icon={clearFormatsIcon} />
    </Button>
  )
}
