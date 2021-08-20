import { React, Immutable, getAppStore, appActions, lodash } from 'jimu-core'
import ImageWidget from '../src/runtime/widget'
import { wrapWidget, widgetRender, getInitState, getDefaultAppConfig } from 'jimu-for-test'
import { DynamicUrlType } from '../src/config'

const Widget = wrapWidget(ImageWidget)
const render = widgetRender()
jest.mock('jimu-ui', () => {
  return {
    ...jest.requireActual('jimu-ui') as any,
    ImageWithParam: jest.fn(() => <div data-testid='imageWithParamTest' />)
  }
})

jest.mock('../src/runtime/components/image-gallery', () => {
  return {
    ...jest.requireActual('../src/runtime/components/image-gallery') as any,
    ImageGallery: jest.fn(() => <div data-testid='imageGalleryTest' />)
  }
})

jest.mock('../src/runtime/components/attachment-component', () => {
  return {
    ...jest.requireActual('../src/runtime/components/attachment-component') as any,
    AttachmentComponent: jest.fn(() => <div data-testid='attachmentTest' />)
  }
})

jest.mock('../src/runtime/components/symbol-component', () => {
  return {
    ...jest.requireActual('../src/runtime/components/symbol-component') as any,
    SymbolComponent: jest.fn(() => <div data-testid='symbolTest' />)
  }
})

const initState = getInitState().merge({
  appConfig: getDefaultAppConfig().merge({
    dataSources: {
      'dataSource_2-SampleWorldCities_9384-Cities': {
        id: 'dataSource_2-SampleWorldCities_9384-Cities'
      }
    }
  })
})

getAppStore().dispatch(appActions.updateStoreState(initState))

describe('image widget test, use ds', function () {
  const useDataSource = {
    dataSourceId: 'dataSource_2-SampleWorldCities_9384-Cities',
    mainDataSourceId: 'dataSource_2-SampleWorldCities_9384-Cities',
    rootDataSourceId: 'dataSource_2'
  }

  const functionConfig = {
    altText: '',
    toolTip: '',
    altTextWithAttachmentName: false,
    toolTipWithAttachmentName: false,
    altTextExpression: undefined,
    toolTipExpression: undefined,
    linkParam: {},
    dynamicUrlType: DynamicUrlType.Attachment,
    isSelectedFromRepeatedDataSourceContext: false,
    useDataSourceForMainDataAndViewSelector: useDataSource
  }

  const props = {
    config: {
      functionConfig,
      styleConfig: {}
    },
    useDataSources: Immutable([useDataSource]),
    useDataSourcesEnabled: true,
    queryObject: undefined
  }

  it('should render different component', () => {
    const { getByTestId, rerender } = render(<Widget widgetId='imageTest1' {...props} />)
    expect(getByTestId('imageGalleryTest')).toBeInTheDocument()
    expect(getByTestId('attachmentTest')).toBeInTheDocument()

    const newFunctionConfig = lodash.assign({}, functionConfig, { dynamicUrlType: DynamicUrlType.Symbol })
    const newProps = lodash.assign({}, props, { config: { functionConfig: newFunctionConfig, styleConfig: {} } })
    rerender(<Widget widgetId='imageTest1' {...newProps} />)
    expect(getByTestId('imageWithParamTest')).toBeInTheDocument()
    expect(getByTestId('symbolTest')).toBeInTheDocument()
  })
})

describe('image widget test', function () {
  describe('default config', function () {
    const config = {
      functionConfig: {
        altText: '',
        toolTip: '',
        linkParam: {},
        scale: 'Fit'
      },
      styleConfig: {
      }
    }

    it('image widget should be render', () => {
      const {getBySelector} = render(<Widget config={config}/>)
      expect(getBySelector('.widget-image')).toBeInTheDocument()
    })
  })

  describe('test value config', function () {
    const config = {
      functionConfig: {
        altText: 'testAltText',
        toolTip: 'testToolTip',
        linkParam: {
          value: 'detail-page',
          linkType: 'PAGE'
        },
        imageParam: {
          url: 'http://www.rowanpalmsprings.com/images/1700-960/palm-springs-sign-ddc63cf9.jpg'
        },
        scale: 'Fit'
      },
      styleConfig: {
      }
    }

    it('image widget should be render', () => {
      const {getBySelector} = render(<Widget config={config}/>)
      expect(getBySelector('.widget-image')).toBeInTheDocument()
      expect(getBySelector('.jimu-link')).toBeInTheDocument() // link
      expect(getBySelector('.image-param')).toBeInTheDocument() // use ImageWithParam component
    })
  })
})
