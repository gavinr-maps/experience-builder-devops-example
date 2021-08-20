import { React } from 'jimu-core'
import { BaseTool, BaseToolProps, IconType } from '../layout/base/base-tool'
import { loadArcGISJSAPIModules, JimuMapView } from 'jimu-arcgis'

export default class Locate extends BaseTool<BaseToolProps, unknown> {
  toolName = 'Locate'

  constructor (props) {
    super(props)
  }

  getTitle () {
    return 'Locate'
  }

  getIcon (): IconType {
    return null
  }

  getExpandPanel (): JSX.Element {
    return <LocateInner jimuMapView={this.props.jimuMapView} />
  }
}

interface LocateInnerProps {
  jimuMapView: JimuMapView
}

interface LocateInnerState {
  apiLoaded: boolean
}

class LocateInner extends React.PureComponent<LocateInnerProps, LocateInnerState> {
  Locate: typeof __esri.Locate = null
  LocateBtn: __esri.Locate
  container: HTMLElement

  constructor (props) {
    super(props)

    this.state = {
      apiLoaded: false
    }
  }

  componentDidMount () {
    if (!this.state.apiLoaded) {
      loadArcGISJSAPIModules(['esri/widgets/Locate']).then(modules => {
        [this.Locate] = modules
        this.setState({
          apiLoaded: true
        })
      })
    }
  }

  componentDidUpdate () {
    if (this.state.apiLoaded && this.container) {
      if (this.LocateBtn) {
        this.container.innerHTML = ''
      }

      this.LocateBtn = new this.Locate({
        container: this.container,
        view: this.props.jimuMapView.view
      })
    }
  }

  componentWillUnmount () {
    if (this.LocateBtn) {
      this.LocateBtn.destroy()
      this.LocateBtn = null
    }
  }

  render () {
    return <div className='esri-widget--button' ref={ref => { this.container = ref }} />
  }
}
