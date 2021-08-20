import { React } from 'jimu-core'
import { BaseTool, BaseToolProps, IconType } from '../layout/base/base-tool'
import { loadArcGISJSAPIModules, JimuMapView } from 'jimu-arcgis'

export default class Navigation extends BaseTool<BaseToolProps, unknown> {
  toolName = 'Navigation'

  constructor (props) {
    super(props)
  }

  getTitle () {
    return 'Navigation'
  }

  getIcon (): IconType {
    return null
  }

  getExpandPanel (): JSX.Element {
    return <NavigationInner jimuMapView={this.props.jimuMapView} />
  }
}

interface NavigationInnerProps {
  jimuMapView: JimuMapView
}

interface NavigationInnerState {
  apiLoaded: boolean
}

class NavigationInner extends React.PureComponent<NavigationInnerProps, NavigationInnerState> {
  Navigation: typeof __esri.NavigationToggle = null
  NavigationBtn: __esri.NavigationToggle
  container: HTMLElement

  constructor (props) {
    super(props)

    this.state = {
      apiLoaded: false
    }
  }

  componentDidMount () {
    if (!this.state.apiLoaded) {
      loadArcGISJSAPIModules(['esri/widgets/NavigationToggle']).then(modules => {
        [this.Navigation] = modules
        this.setState({
          apiLoaded: true
        })
      })
    }
  }

  componentDidUpdate () {
    if (this.state.apiLoaded && this.container) {
      if (this.NavigationBtn) {
        this.container.innerHTML = ''
      }

      this.NavigationBtn = new this.Navigation({
        container: this.container,
        view: this.props.jimuMapView.view
      })
    }
  }

  componentWillUnmount () {
    if (this.NavigationBtn) {
      this.NavigationBtn.destroy()
      this.NavigationBtn = null
    }
  }

  render () {
    return <div ref={ref => { this.container = ref }} />
  }
}
