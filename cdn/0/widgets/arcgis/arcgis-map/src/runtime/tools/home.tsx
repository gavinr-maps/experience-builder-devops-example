import { React } from 'jimu-core'
import { BaseTool, BaseToolProps, IconType } from '../layout/base/base-tool'
import { loadArcGISJSAPIModules, JimuMapView } from 'jimu-arcgis'
import { defaultMessages } from 'jimu-ui'
import { InitialMapState } from 'jimu-ui/advanced/map'
import { MultiSourceMapContext } from '../components/multisourcemap-context'

export default class Home extends BaseTool<BaseToolProps, unknown> {
  toolName = 'Home'

  constructor (props) {
    super(props)
  }

  getTitle () {
    return this.props.intl.formatMessage({ id: 'HomeLabel', defaultMessage: defaultMessages.HomeLabel })
  }

  getIcon (): IconType {
    return null
  }

  getHomeContent = (initialMapState: InitialMapState) => {
    return <HomeInner jimuMapView={this.props.jimuMapView} initialMapState={initialMapState} />
  }

  getExpandPanel (): JSX.Element {
    // return <HomeInner jimuMapView={this.props.jimuMapView}></HomeInner>;
    return (
      <MultiSourceMapContext.Consumer>
        {({ initialMapState }) => (
          this.getHomeContent(initialMapState)
        )}
      </MultiSourceMapContext.Consumer>
    )
  }
}

interface HomeInnerProps {
  jimuMapView: JimuMapView
  initialMapState: InitialMapState
}

interface HomeInnerState {
  apiLoaded: boolean
}

class HomeInner extends React.PureComponent<HomeInnerProps, HomeInnerState> {
  Home: typeof __esri.Home = null
  Extent: typeof __esri.geometry.Extent
  Viewpoint: typeof __esri.Viewpoint

  homeBtn: __esri.Home
  container: HTMLElement

  constructor (props) {
    super(props)

    this.state = {
      apiLoaded: false
    }
  }

  componentDidMount () {
    if (!this.state.apiLoaded) {
      loadArcGISJSAPIModules(['esri/widgets/Home',
        'esri/geometry/Extent',
        'esri/Viewpoint']).then(modules => {
        [this.Home, this.Extent, this.Viewpoint] = modules
        this.setState({
          apiLoaded: true
        })
      })
    }
  }

  componentDidUpdate (prevProps: HomeInnerProps) {
    if (this.state.apiLoaded && this.container) {
      if (this.homeBtn) {
        this.container.innerHTML = ''
      }

      this.homeBtn = new this.Home({
        container: this.container,
        view: this.props.jimuMapView.view,
        viewpoint: this.props.initialMapState ? this.generateViewPointFromInitialMapState(this.props.initialMapState)
          : (this.props.jimuMapView.view.map as __esri.WebMap | __esri.WebScene).initialViewProperties.viewpoint
      })

      if (prevProps.initialMapState !== this.props.initialMapState) {
        if (this.props.jimuMapView.view) {
          this.props.jimuMapView.view.goTo(this.homeBtn.viewpoint, {
            animate: false
          })
        } else {
          this.homeBtn.destroy()
          this.homeBtn = null
        }
      }
    }
  }

  generateViewPointFromInitialMapState = (initialMapState: InitialMapState): __esri.Viewpoint => {
    if (initialMapState.viewType === '2d') {
      return new this.Viewpoint(
        {
          targetGeometry: this.Extent.fromJSON(initialMapState.extent),
          rotation: initialMapState.rotation
        }
      )
    } else {
      return this.Viewpoint.fromJSON(initialMapState.viewPoint)
    }
  }

  componentWillUnmount () {
    if (this.homeBtn) {
      this.homeBtn.destroy()
      this.homeBtn = null
    }
  }

  render () {
    return <div className='esri-widget--button' ref={ref => { if (!this.container) { this.container = ref } }} />
  }
}
