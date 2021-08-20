import { React } from 'jimu-core'
import { render } from '@testing-library/react'
import * as MutationObserver from 'mutation-observer'
import { EditorPlaceholder } from '../src/runtime/builder/placeholder'
import { mockGetSelection } from 'jimu-for-test'
import '@testing-library/jest-dom/extend-expect'

describe('<EditorPlaceholder />', () => {
  beforeAll(() => {
    (global as any).MutationObserver = MutationObserver
    mockGetSelection(global)
  })

  describe('prop: placeholder, value', () => {
    it('value is defined, display value', () => {
      const placeholder = 'placeholder'
      const value = 'value'
      const { queryByText } = render(<EditorPlaceholder enabled={false} placeholder={placeholder} value={value} />);
      (expect(queryByText(value)) as any).toBeInTheDOM();
      (expect(queryByText(placeholder)) as any).not.toBeInTheDOM()
    })

    it('value is not defined, displace placeholder', () => {
      const placeholder = 'placeholder'
      const { getByText } = render(<EditorPlaceholder enabled={false} placeholder={placeholder} />);
      (expect(getByText(placeholder)) as any).toBeInTheDOM()
    })
  })

  it('props: editorRef', () => {
    const editorRef = { current: null } as any
    render(<EditorPlaceholder enabled={false} editorRef={editorRef} value='<span>bar</span>' />);
    (expect(editorRef.current.root) as any).toBeInTheDOM()
  })

  describe('prop: enabled', () => {
    it('the default value of enabled is false', () => {
      const placeholder = '<strong>placeholder</strong>'
      const { getByTestId, rerender } = render(<EditorPlaceholder value='' placeholder={placeholder} enabled={false} />)
      expect(getByTestId('rich-editor-core').firstChild.firstChild.firstChild.firstChild.nodeName).toBe('STRONG')
      expect(getByTestId('rich-editor-core').firstChild.firstChild.firstChild.firstChild.textContent).toBe('placeholder')
      rerender(<EditorPlaceholder value='' placeholder={placeholder} enabled />)
      expect(getByTestId('rich-editor-core').firstChild.firstChild.firstChild.firstChild.nodeName).toBe('STRONG')
      expect(getByTestId('rich-editor-core').firstChild.firstChild.firstChild.firstChild.textContent).toBe('\uFEFF')
    })

    it('the default value of enabled is true', () => {
      const placeholder = '<strong>placeholder</strong>'
      const { getByTestId, rerender } = render(<EditorPlaceholder value='' placeholder={placeholder} enabled />)
      expect(getByTestId('rich-editor-core').firstChild.firstChild.firstChild.firstChild.nodeName).toBe('STRONG')
      expect(getByTestId('rich-editor-core').firstChild.firstChild.firstChild.firstChild.textContent).toBe('\uFEFF')
      rerender(<EditorPlaceholder value='' placeholder={placeholder} enabled={false} />)
      expect(getByTestId('rich-editor-core').firstChild.firstChild.firstChild.firstChild.nodeName).toBe('STRONG')
      expect(getByTestId('rich-editor-core').firstChild.firstChild.firstChild.firstChild.textContent).toBe('placeholder')
    })
  })

  it('props: onChange', () => {
    const onChange = jest.fn()
    const { rerender, unmount } = render(<EditorPlaceholder enabled onChange={onChange} value='foo' placeholder='bar' />)
    rerender(<EditorPlaceholder enabled={false} onChange={onChange} value='foo' placeholder='bar' />);
    (expect(onChange) as any).toHaveBeenNthCalledWith(1, 'foo', 'bar')
    onChange.mockRestore()
    unmount();
    (expect(onChange) as any).toHaveBeenNthCalledWith(1, 'foo', 'bar')
  })
})
