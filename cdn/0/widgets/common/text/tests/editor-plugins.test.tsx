import { React } from 'jimu-core'
import { render } from '@testing-library/react'
import * as MutationObserver from 'mutation-observer'
import { Editor } from '../src/runtime/builder/editor'
import { mockGetSelection } from 'jimu-for-test'
import '@testing-library/jest-dom/extend-expect'

jest.mock('../src/runtime/builder/plugins', () => {
  return {
    TextPlugins: ({ widgetId }) => <div>{widgetId}</div>
  }
})

const WIDGETID = 'widget_1'
let useDataSources = null
describe('<EditorPlugins />', () => {
  beforeAll(() => {
    (global as any).MutationObserver = MutationObserver
    mockGetSelection(global)

    useDataSources = [{ dataSourceId: 'ds_1' }] as any
  })

  it('props: onCreate, onDestory', () => {
    const onCreate = jest.fn()
    const onDestory = jest.fn()

    let formats = ['bold']

    const { queryByText, rerender, unmount } = render(<Editor
      formats={formats}
      enabled={false}
      value='foo'
      widgetId={WIDGETID}
      useDataSources={useDataSources}
      onCreate={onCreate}
      onDestory={onDestory}
    />);

    (expect(queryByText(WIDGETID)) as any).toBeInTheDOM();
    (expect(onDestory) as any).toBeCalledTimes(0);
    (expect(onCreate) as any).toBeCalledTimes(1)

    rerender(<Editor
      formats={formats}
      enabled={false}
      value='foo'
      widgetId={WIDGETID}
      useDataSources={useDataSources}
      onCreate={onCreate}
      onDestory={onDestory}
    />);

    (expect(onDestory) as any).toBeCalledTimes(0);
    (expect(onCreate) as any).toBeCalledTimes(1)

    formats = ['strike']

    rerender(<Editor
      formats={formats}
      enabled={false}
      value='foo'
      widgetId={WIDGETID}
      useDataSources={useDataSources}
      onCreate={onCreate}
      onDestory={onDestory}
    />);

    (expect(onDestory) as any).toBeCalledTimes(1);
    (expect(onCreate) as any).toBeCalledTimes(2)

    unmount();

    (expect(onDestory) as any).toBeCalledTimes(2);
    (expect(onCreate) as any).toBeCalledTimes(2)
  })
})
