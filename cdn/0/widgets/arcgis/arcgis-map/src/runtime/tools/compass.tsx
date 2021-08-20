import { React } from 'jimu-core'
import { BaseTool, BaseToolProps, IconType } from '../layout/base/base-tool'
import { loadArcGISJSAPIModules, JimuMapView } from 'jimu-arcgis'
import { defaultMessages } from 'jimu-ui'

export default class Compass extends BaseTool<BaseToolProps, unknown> {
  toolName = 'Compass'

  constructor (props) {
    super(props)
  }

  getTitle () {
    return this.props.intl.formatMessage({ id: 'CompassLabel', defaultMessage: defaultMessages.CompassLabel })
  }

  getIcon (): IconType {
    return null
  }

  getExpandPanel (): JSX.Element {
    return <CompassInner jimuMapView={this.props.jimuMapView} />
  }
}

interface CompassInnerProps {
  jimuMapView: JimuMapView
}

interface CompassInnerState {
  apiLoaded: boolean
}

class CompassInner extends React.PureComponent<CompassInnerProps, CompassInnerState> {
  Compass: typeof __esri.Compass = null
  CompassBtn: __esri.Compass
  container: HTMLElement

  constructor (props) {
    super(props)

    this.state = {
      apiLoaded: false
    }
  }

  componentDidMount () {
    if (!this.state.apiLoaded) {
      loadArcGISJSAPIModules(['esri/widgets/Compass']).then(modules => {
        [this.Compass] = modules
        this.setState({
          apiLoaded: true
        })
      })
    }
  }

  componentDidUpdate () {
    if (this.state.apiLoaded && this.container) {
      if (this.CompassBtn) {
        this.container.innerHTML = ''
      }

      this.CompassBtn = new this.Compass({
        container: this.container,
        view: this.props.jimuMapView.view
      })
    }
  }

  componentWillUnmount () {
    if (this.CompassBtn) {
      this.CompassBtn.destroy()
      this.CompassBtn = null
    }
  }

  render () {
    return <div ref={ref => { this.container = ref }} />
  }
}
