import { React } from 'jimu-core'
import { hooks } from 'jimu-ui'
import { RichTextEditorProps, Editor, Sources, RichTextEditor, Delta, DeltaValue, richTextEditorUtils } from 'jimu-ui/advanced/rich-text-editor'
import { shouldShowPlaceholder, removeTextContent, getDefaultValue, sanitizeHTML } from './utils'
const { useEffect, useRef, useState, useMemo } = React

export type EditorPlaceholderProps = Omit<RichTextEditorProps, 'defaultValue' | 'onChange' | 'value' | 'enabled'> & {
  enabled: boolean
  value?: string
  onChange?: (value: string, placeholder: string) => void
}

const useRefValues = (enabled: boolean, value: string, placeholder: string, onChange): React.RefObject<any> => {
  const ref = useRef({ enabled, value, placeholder, onChange })
  useEffect(() => {
    ref.current = { enabled, value, placeholder, onChange }
  }, [enabled, value, placeholder, onChange])
  return ref
}

const modules = {
  toolbar: false,
  // Automatically convert address strings to anchor tags
  autoformat: {
    link: {
      trigger: /[\s]/,
      find: /https?:\/\/[\S]+|(www\.[\S]+)/gi,
      transform: function (value: string, noProtocol: boolean) {
        return noProtocol ? 'http://' + value : value
      },
      format: 'link'
    }
  },
  // Remove images from content when pasting
  clipboard: {
    matchers: [['img', () => new Delta()]]
  }
}

// Selectors that match all content
const pasteMatcherSelector = '*'
// Identifies the trailing newline character in a string
const BreakLineReg = /(?!^\n$)[\n]/mg

// Remove the trailing newline character on the pasted content
const pasteMatcherCallback = (_, delta: DeltaValue): DeltaValue => {
  delta.forEach((op) => {
    if (typeof op.insert === 'string') {
      op.insert = op.insert.replace(BreakLineReg, ' ')
    }
  })
  return delta
}

// Add a hook to the editor for pasted content
const addPasteMatcher = (editor: Editor): void => {
  editor.clipboard.addMatcher(pasteMatcherSelector, pasteMatcherCallback)
}

// Remove the hook for pasted content for the editor
const removePasteMatcher = (editor: Editor): boolean => {
  const matchers = editor.clipboard.matchers
  let index = -1
  matchers.some(([selector, callback], idx) => {
    if (selector === pasteMatcherSelector && callback === pasteMatcherCallback) {
      index = idx
      return true
    }
  })
  if (index > -1) {
    editor.clipboard.matchers.splice(index, 1)
    return true
  }
}

/**
 * Sanitize and paste html to editor
 * @param html
 * @param editor
 */
const pasteContent = (editor: Editor, html: string): DeltaValue => {
  if (editor == null) return
  // To fix issue #3092, add a hook that will remove all line break tag when pasting, this hook will affect this method
  // so remove the hook before pasting and restore it after pasting
  const hasPasteMatch = removePasteMatcher(editor)
  // Make sure the contents are sanitized before pasting
  html = sanitizeHTML(html)
  const delta = editor.clipboard.convert(html)
  editor.setContents(delta, 'silent')
  richTextEditorUtils.setEditorCursorEnd(editor, 'silent')
  if (hasPasteMatch) {
    addPasteMatcher(editor)
  }
}

export const EditorPlaceholder = (props: EditorPlaceholderProps): React.ReactElement => {
  const {
    editorRef: editorRefProp,
    value: valueProp,
    placeholder: placeholderProp,
    enabled,
    onChange,
    ...others
  } = props

  const [editorRef, handleEditor] = hooks.useForwardRef<Editor>(editorRefProp)
  const [value, setValue] = useState(valueProp)
  const [placeholder, setPlacehodler] = useState(placeholderProp)
  const refValues = useRefValues(enabled, value, placeholder, onChange)

  // Only update defaultValue when the component mounted
  // eslint-disable-next-line
  const defaultValue = useMemo(() => getDefaultValue(enabled, value, placeholder, editorRef.current), [])

  // When the content of the editor changes, the latest value is saved to the state
  const handleChange = hooks.useEventCallback((html: string, _, source: Sources) => {
    if (source === 'silent') return
    // placeholder is editing
    if (shouldShowPlaceholder(value, placeholder, enabled)) {
      setPlacehodler(html)
    } else {
      // Otherwise, value is editing
      setValue(html)
    }
  })

  hooks.useUpdateEffect(() => {
    const { value, placeholder, onChange } = refValues.current
    const editor = editorRef.current
    if (!enabled) {
      // when enabled from true to false, try to show placeholder in editor
      if (shouldShowPlaceholder(value, placeholder)) {
        pasteContent(editor, placeholder)
      }
      onChange?.(value, placeholder)
    } else {
      const editor = editorRef.current
      // when enabled from false to true, try to show the placeholder without textContent in editor
      if (shouldShowPlaceholder(value, placeholder)) {
        // Replace the textContent with a `zero width no-break space`(\uFEFF) for the placeholder to ensure the formats of placeholder can be inherited
        const value = removeTextContent(placeholder)
        pasteContent(editor, value)
        editor.focus()
      }
    }
  }, [enabled])

  // Listen to paste events and process pasted content
  useEffect(() => {
    const editor = editorRef.current
    if (editor != null) {
      addPasteMatcher(editor)
    }
  }, [editorRef])

  // When unMounted, `onChange` is triggered to return the modified `value` and `placeholder`
  hooks.useUnmount(() => {
    const { value, placeholder, onChange } = refValues.current
    onChange?.(value, placeholder)
  })

  return (
    <RichTextEditor
      autoFocus
      enabled={enabled}
      editorRef={handleEditor}
      onChange={handleChange}
      defaultValue={defaultValue}
      modules={modules}
      {...others}
    />
  )
}
