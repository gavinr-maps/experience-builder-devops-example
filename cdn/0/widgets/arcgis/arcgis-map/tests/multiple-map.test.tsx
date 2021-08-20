import {React, getAppStore, appActions} from 'jimu-core'
import {withStoreRender, getInitState, getDefaultAppConfig} from 'jimu-for-test'
import MultipleMap from '../src/runtime/components/multisourcemap'

jest.mock('../src/runtime/components/mapbase', () => {
  return {
    default: () => <div>Map</div>
  }
})

const render = withStoreRender()

describe('test multiple map component', () => {
  describe('has two maps', () => {
    const widgetJson = {
      id: 'widget1',
      useDataSources: [{dataSourceId: 'map1'}, {dataSourceId: 'map2'}],
      config: {}
    }
    beforeAll(() => {
      getAppStore().dispatch(appActions.updateStoreState(getInitState().merge({appConfig: getDefaultAppConfig().merge({
        widgets: {
          widget1: widgetJson
        },
        dataSources: {
          map1: {},
          map2: {}
        }
      })})))
    })

    it('test call switch map should not set autoControlWidgetId', () => {
      const props = {
        baseWidgetProps: widgetJson
      } as any
      const ref = React.createRef<MultipleMap>()
      const {getAllByText} = render(<MultipleMap ref={ref} {...props}/>)

      expect(getAllByText('Map').length).toBe(2) // render two maps

      ref.current.switchMap()

      expect(getAppStore().getState().mapWidgetsInfo?.widget1?.autoControlWidgetId).toBeUndefined()
    })
  })
})