import { React, appActions, getAppStore } from 'jimu-core'
import { getInitState, widgetRender, wrapWidget } from 'jimu-for-test'
import TextWidget from '../src/runtime/widget'

const initState = getInitState()
getAppStore().dispatch(appActions.updateStoreState(initState))

const config = {
  text: 'foo'
}

const manifest = { name: 'text' } as any

let render

describe('<TextWidget />', () => {
  beforeAll(() => {
    render = widgetRender()
  })

  it('Should render without any issues', () => {
    const Widget = wrapWidget(TextWidget, {
      config: config,
      manifest: manifest
    })
    const { queryByTestId } = render(<Widget widgetId='Widget_1' />)
    expect(queryByTestId('text-widget')).toHaveClass('widget-text')
  })
})
