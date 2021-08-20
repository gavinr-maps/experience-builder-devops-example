/** @jsx jsx */
import {
  React, css, jsx, getAppStore, AllWidgetProps, SessionManager,
  utils, AppMode, IMState, classNames, polished, ReactResizeDetector, MutableStoreManager, IMUrlParameters
} from 'jimu-core'
import { IMConfig } from '../config'
import MultiSourceMap from './components/multisourcemap'
import DefaultMap from './components/default-map'
import { IFeature } from '@esri/arcgis-rest-types'
import { checkIsLive } from './utils'
import { JimuMapViewGroup, ShowOnMapDatas } from 'jimu-arcgis'
import { ViewportVisibilityContext, PageVisibilityContext, ViewVisibilityContext } from 'jimu-layouts/layout-runtime'

export interface ActionRelatedProps {
  zoomToFeatureActionValue?: {
    value: {
      features: __esri.FeatureSet | __esri.Graphic[] | IFeature[] | __esri.Extent | __esri.Geometry[]
      layerId?: string
      zoomToOption?: {
        scale?: number
      }
      type: 'zoom-to-graphics' | 'zoom-to-extent'
    }
    relatedWidgets?: string[]
  }
  newFeatureSetActionValue?: {
    value: {[layerID: string]: __esri.FeatureSet}
    promise?: Promise<any>
  }
  changedFeatureSetActionValue?: {[layerID: string]: __esri.FeatureSet}
  selectFeatureActionValue?: IFeature[] | __esri.Graphic[]
  panToActionValue?: {
    value: __esri.FeatureSet | __esri.Graphic[] | IFeature[] | __esri.Extent
    relatedWidgets?: string[]
  }
  flashActionValue?: {
    layerDataSourceId: string
    querySQL: string
  }
  filterActionValue?: {
    layerDataSourceId: string
    querySQL: string
  }
  showOnMapDatas?: ShowOnMapDatas
}

export interface MapWidgetProps extends AllWidgetProps<IMConfig>{
  mutableStateProps: ActionRelatedProps
  appMode: AppMode
  queryObject: IMUrlParameters
}

interface State{
  startLoadModules: boolean

  widthBreakpoint: string
  widgetHeight: number

  isFullScreen: boolean
}

export default class Widget extends React.PureComponent<MapWidgetProps, State> {
  parentContainer: HTMLElement
  container: HTMLElement
  containerClientRect: ClientRect | DOMRect
  multiSourceMapInstance: MultiSourceMap = null

  constructor (props) {
    super(props)
    this.state = {
      widthBreakpoint: null,
      widgetHeight: null,
      isFullScreen: false
    } as State
  }

  getStyle () {
    const theme = this.props.theme

    return css`
      position: relative;

      .map-is-live-mode {
        .exbmap-ui {
          pointer-events: auto !important;
        }

        .is-widget {
          pointer-events: auto !important;
        }
      }

      .widget-map-usemask {
        pointer-events: auto !important;
      }

      .map-is-design-mode {
        .exbmap-ui,
        .exbmap-ui-tool {
          pointer-events: none !important;
        }

        .is-widget {
          pointer-events: auto !important;
        }
      }

      .widget-map{
        padding: 0;
        margin: 0;
        height: 100%;
        width: 100%;
        z-index: -1;
        .overview-container{
          position: absolute;
          top: 12px;
          right: 12px;
          width: 300px;
          height: 200px;
          border: 1px solid black;
          z-index: 1;
        }

        .extent-container{
          background-color: rgba(0, 0, 0, 0.5);
          position: absolute;
          z-index: 2;
        }

        .extent-btn-container{
          button{
            outline: none;
          }
          .previous-extent-btn{
            color: #111;
          }
          .next-extent-btn{
            color: #222;
          }
        }
      }

      .exbmap-ui-layout{
        z-index: 0;
      }

      .mapswitch-container {
        position: absolute;
        z-index: 7;
        width: 32px;
        height: 32px;
        bottom: 10px;
        left: 10px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3)
      }

      .mapswitch-icon {
        fill: black;
        left: 8px;
        top: 8px;
        position: absolute;
        display: block;
      }

      .widget-map-background {
        background-color: ${theme.colors.white};
        position: absolute;
        z-index: 1;
      }

      .widget-map-crashed {
        background-color: ${polished.rgba(theme.colors.white, 0.85)};
        position: absolute;
        z-index: 1;
        top: 0;

        .widget-map-crashed-label-padding {
          padding-left: ${polished.rem(24)};
          padding-right: ${polished.rem(24)};
        }

        .widget-map-crashed-label {
          font-size: ${polished.rem(13)};
          color: ${theme.colors.black};
          font-weight: bold;
          text-align: center;
        }
      }

      @keyframes appear {
        0%{opacity:0}
        25%{opacity:.25}
        50%{opacity:.5;}
        75%{opacity:.75}
        100%{opacity:1;}
      }

      @keyframes disappear {
        0%{opacity:1}
        25%{opacity:.75}
        50%{opacity:.5;}
        75%{opacity:.25}
        100%{opacity:0;}
      }

      .multisourcemap-item-appear {
        animation: appear 300ms;
        -webkit-animation: appear 300ms;
        -moz-animation: appear 300ms;
        animation-fill-mode: forwards;
        -webkit-animation-fill-mode: forwards;
        -moz-animation-fill-mode: forwards;
        animation-timing-function: ease-in;
        -webkit-animation-timing-function: ease-in;
        -moz-animation-timing-function: ease-in;
      }

      .multisourcemap-item-disappear {
        animation: disappear 300ms;
        -webkit-animation: disappear 300ms;
        -moz-animation: disappear 300ms;
        animation-fill-mode: forwards;
        -webkit-animation-fill-mode: forwards;
        -moz-animation-fill-mode: forwards;
        animation-timing-function: ease-in;
        -webkit-animation-timing-function: ease-in;
        -moz-animation-timing-function: ease-in;
      }

      .multisourcemap-item-appear-noanimate {
        opacity: 1;
      }

      .multisourcemap-item-disappear-noanimate {
        opacity: 0;
      }
      `
  }

  static mapExtraStateProps = (state: IMState) => {
    return {
      appMode: state && state.appRuntimeInfo && state.appRuntimeInfo.appMode,
      queryObject: state.queryObject
    }
  }

  startRenderMap = () => {
    setTimeout(() => {
      this.setState({
        startLoadModules: true
      })
    }, 100)
  }

  componentDidMount () {
    if (!this.state.startLoadModules) {
      if (window.jimuConfig.isInBuilder || !this.props.config.canPlaceHolder) {
        this.startRenderMap()
      }
    }
  }

  componentWillUnmount () {
    const widgets = getAppStore().getState().appConfig.widgets
    if (!widgets[this.props.id]) {
      MutableStoreManager.getInstance().updateStateValue(this.props.id, 'restoreData', null)
    }
  }

  getPlaceHolderImage = () => {
    let placeHolderImage = this.props.config.placeholderImage
    const session = SessionManager.getInstance().getMainSession()
    if (placeHolderImage) {
      const isPortalThumbExp = new RegExp('^(.)+/sharing/rest/content/items/(.)+/info/(.)+')

      if (isPortalThumbExp.test(placeHolderImage)) {
        if (session) {
          placeHolderImage = placeHolderImage + `?token=${session.token}`
        } else {
          // eslint-disable-next-line no-self-assign
          placeHolderImage = placeHolderImage
        }
      }
    }

    return placeHolderImage
  }

  fullScreenMap = () => {
    if (utils.isTouchDevice()) {
    // is touch device
      if (this.container.style.position === 'fixed') {
        this.container.style.height = `${this.containerClientRect.height}px`
        this.container.style.width = `${this.containerClientRect.width}px`
        this.container.style.top = `${this.containerClientRect.top}px`
        this.container.style.left = `${this.containerClientRect.left}px`

        setTimeout(() => {
          this.container.style.transition = null
          this.container.style.position = 'relative'
          this.container.style.height = '100%'
          this.container.style.width = '100%'
          this.container.style.top = '0'
          this.container.style.left = '0'
          this.container.style.backgroundColor = 'none'
          this.parentContainer.appendChild(this.container)
          this.setState({
            isFullScreen: false
          })
        }, 100)
      } else {
        const clientRect = this.container.getBoundingClientRect()
        this.containerClientRect = clientRect
        this.container.style.height = `${clientRect.height}px`
        this.container.style.width = `${clientRect.width}px`
        this.container.style.position = 'fixed'
        this.container.style.top = `${clientRect.top}px`
        this.container.style.left = `${clientRect.left}px`

        document && document.body.appendChild(this.container)

        setTimeout(() => {
          this.container.style.transition = 'top 0.3s, bottom 0.3s, left 0.3s, right 0.3s, height 0.3s, width 0.3s'
          this.container.style.top = '0px'
          this.container.style.left = '0px'
          this.container.style.right = '0px'
          this.container.style.bottom = '0px'
          this.container.style.height = null
          this.container.style.width = null
          this.container.style.backgroundColor = '#fff'
          this.setState({
            isFullScreen: true
          })
        }, 100)
      }
    } else {
      const element = this.container as any

      if (!document) {
        return
      }

      document.addEventListener('webkitfullscreenchange', (event) => {
        if (!(document as any).fullscreenElement && !(document as any).webkitFullscreenElement) {
          this.setState({
            isFullScreen: false
          })
        }
      })

      document.addEventListener('fullscreenchange', (event) => {
        if (!(document as any).fullscreenElement && !(document as any).webkitFullscreenElement) {
          this.setState({
            isFullScreen: false
          })
        }
      })

      if ((document as any).fullscreenElement === element) {
        (document as any).exitFullscreen()
        this.setState({
          isFullScreen: false
        })
        return
      }

      if ((document as any).webkitFullscreenElement === element) {
        (document as any).webkitCancelFullScreen()
        this.setState({
          isFullScreen: false
        })
        return
      }

      const requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen
      if (requestMethod) {
        this.setState({
          isFullScreen: true
        })
        requestMethod.call(element)
      } else if (typeof (window as any).ActiveXObject !== 'undefined') {
        const wscript = new ActiveXObject('WScript.Shell')
        if (wscript !== null) {
          wscript.SendKeys('{F11}')
        }
      }
    }
  }

  handleViewGroupCreate = (viewGroup: JimuMapViewGroup) => {
    if (viewGroup) {
      viewGroup.setMapWidgetInstance(this)
    }
  }

  switchMap = async (): Promise<any> => {
    if (this.multiSourceMapInstance) {
      return await this.multiSourceMapInstance.switchMap()
    } else {
      return await Promise.resolve()
    }
  }

  setMultiSourceMapInstance = (instance: MultiSourceMap) => {
    this.multiSourceMapInstance = instance
  }

  onResize = (width, height) => {
    if (!width || !height) {
      return
    }

    if (width <= 545 && width > 0) {
      this.setState({
        widthBreakpoint: 'xsmall',
        widgetHeight: height
      })
    } else {
      this.setState({
        widthBreakpoint: 'other',
        widgetHeight: height
      })
    }
  }

  getInnerContent = (isMapInVisibleArea: boolean) => {
    if (!this.state.startLoadModules) {
      return (
        <div css={this.getStyle()} className='jimu-widget'>
          <div className='widget-map jimu-widget'>
            <div style={{ position: 'absolute', left: '50%', top: '50%' }} className='jimu-secondary-loading' />
          </div>
        </div>
      )
    } else {
      if (!(this.props.useDataSources && this.props.useDataSources[0] && this.props.useDataSources[0].dataSourceId)) {
        return (
          <div className='jimu-widget' ref={ref => { this.parentContainer = ref }}>
            <div
              css={this.getStyle()} className='jimu-widget'
              ref={ref => { this.container = ref }}
            >
              <div className={classNames('jimu-widget', { 'map-is-design-mode': !checkIsLive(this.props.appMode) })}>
                {isMapInVisibleArea && <DefaultMap
                  fullScreenMap={this.fullScreenMap} baseWidgetProps={this.props} startLoadModules={this.state.startLoadModules}
                  isDefaultMap setMultiSourceMapInstance={this.setMultiSourceMapInstance} onViewGroupCreate={this.handleViewGroupCreate}
                  widgetHeight={this.state.widgetHeight} widthBreakpoint={this.state.widthBreakpoint} isFullScreen={this.state.isFullScreen} isMapInVisibleArea={isMapInVisibleArea}
                >
                </DefaultMap>}
              </div>
              <ReactResizeDetector handleWidth handleHeight onResize={this.onResize} />
            </div>
          </div>
        )
      } else {
        return (
          <div className='jimu-widget' ref={ref => { this.parentContainer = ref }}>
            <div
              css={this.getStyle()} className='jimu-widget'
              ref={ref => { this.container = ref }}
            >
              <div className={classNames('jimu-widget', { 'map-is-design-mode': !checkIsLive(this.props.appMode) })}>
                {isMapInVisibleArea && this.props.useDataSources.length >= 1 &&
                  <MultiSourceMap
                    key={1} fullScreenMap={this.fullScreenMap} baseWidgetProps={this.props} startLoadModules={this.state.startLoadModules}
                    ref={this.setMultiSourceMapInstance} onViewGroupCreate={this.handleViewGroupCreate}
                    widgetHeight={this.state.widgetHeight} widthBreakpoint={this.state.widthBreakpoint}
                    isFullScreen={this.state.isFullScreen} isMapInVisibleArea={isMapInVisibleArea}
                  />}
              </div>
              <ReactResizeDetector handleWidth handleHeight onResize={this.onResize} />
            </div>
          </div>
        )
      }
    }
  }

  render () {
    return (
      <div className='w-100 h-100'>
        <PageVisibilityContext.Consumer>
          {(isVisibleInPage) => {
            return (
              <ViewportVisibilityContext.Consumer>
                {(isVisibleInViewPort) => {
                  return (
                    <ViewVisibilityContext.Consumer>
                      {(viewVisibilityContextProps) => {
                        const isVisibleInView = viewVisibilityContextProps.isInView ?  viewVisibilityContextProps.isInCurrentView : true;
                        return this.getInnerContent(checkIsLive(this.props.appMode) ? (isVisibleInViewPort && isVisibleInView) : isVisibleInPage)
                      }}
                    </ViewVisibilityContext.Consumer>

                  )
                }}
              </ViewportVisibilityContext.Consumer>
            )
          }}
        </PageVisibilityContext.Consumer>
      </div>
    )
  }
}
