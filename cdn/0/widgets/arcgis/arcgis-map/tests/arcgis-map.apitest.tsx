import { React, Immutable, UrlParameters, DataSourceManager, getAppStore, appActions, UseDataSource } from 'jimu-core'
import { mount } from 'enzyme'
import MapWidget from '../src/runtime/widget'
import { wrapWidget, getInitState, initExtensions } from 'jimu-for-test'
import { Provider } from 'react-redux'

describe('arcgis map widget', () => {
  let store
  beforeAll((done) => {
    let initState = getInitState()
    const theme = {
      colors: {
        white: 'white',
        grays: {
          gray100: 'gray',
          gray200: 'gray',
          gray300: 'gray',
          gray400: 'gray',
          gray500: 'gray',
          gray600: 'gray',
          gray700: 'gray',
          gray800: 'gray',
          gray900: 'gray'
        }
      }
    }
    const dataSources = {
      'test-3c2519a766fc4592aad8cfe3595cc46e': {
        id: 'test-3c2519a766fc4592aad8cfe3595cc46e',
        itemId: '3c2519a766fc4592aad8cfe3595cc46e',
        label: 'SampleWorldCities',
        portalUrl: 'https://beijing.mapsdevext.arcgis.com',
        type: 'WEB_MAP'
      }
    }
    const dataSourcesInfo = {
      'test-3c2519a766fc4592aad8cfe3595cc46e': {
        status: 'LOADED',
        isCreated: true
      }
    }
    initState = initState.set('theme', theme).setIn(['appConfig', 'dataSources'], dataSources).set('dataSourcesInfo', dataSourcesInfo)
    getAppStore().dispatch(appActions.updateStoreState(initState))
    store = getAppStore()
    initExtensions()
    DataSourceManager.getInstance().createDataSource('test-3c2519a766fc4592aad8cfe3595cc46e').then(() => {
      done()
    })
  })

  describe('when a config with datasource is passed', () => {
    let wrapper
    const config = {}
    const useDataSources = Immutable([{ dataSourceId: 'test-3c2519a766fc4592aad8cfe3595cc46e' } as UseDataSource])

    beforeAll(() => {
      const Widget = wrapWidget(MapWidget, { config, useDataSources, id: 'widget_1', dispatch: store.dispatch, queryObject: Immutable({} as UrlParameters) } as any)
      wrapper = mount(<Provider store={store}><Widget widgetId='widget_1' /></Provider>)
    })
    it('should have rendered a map', () => {
      expect(wrapper.find('.widget-map').length).not.toEqual(0)
    })
  })
})
