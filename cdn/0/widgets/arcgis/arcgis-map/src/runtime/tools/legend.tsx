import { React } from 'jimu-core'
import { BaseTool, BaseToolProps, IconType } from '../layout/base/base-tool'
import { loadArcGISJSAPIModules, JimuMapView } from 'jimu-arcgis'
import { defaultMessages } from 'jimu-ui'

export default class Legend extends BaseTool<BaseToolProps, unknown> {
  toolName = 'Legend'

  constructor (props) {
    super(props)
  }

  getTitle () {
    return this.props.intl.formatMessage({ id: 'LegendLabel', defaultMessage: defaultMessages.LegendLabel })
  }

  getIcon (): IconType {
    return {
      icon: require('../assets/icons/legend.svg')
    }
  }

  getExpandPanel (): JSX.Element {
    return <LegendInner jimuMapView={this.props.jimuMapView} />
  }
}

interface LegendInnerProps {
  jimuMapView: JimuMapView
}

interface LegendInnerState {
  apiLoaded: boolean
}

class LegendInner extends React.PureComponent<LegendInnerProps, LegendInnerState> {
  Legend: typeof __esri.Legend = null
  LegendBtn: __esri.Legend
  container: HTMLElement

  constructor (props) {
    super(props)

    this.state = {
      apiLoaded: false
    }
  }

  componentDidMount () {
    if (!this.state.apiLoaded) {
      loadArcGISJSAPIModules(['esri/widgets/Legend']).then(modules => {
        [this.Legend] = modules
        this.setState({
          apiLoaded: true
        })
      })
    }
  }

  componentDidUpdate () {
    if (this.state.apiLoaded && this.container) {
      this.LegendBtn = new this.Legend({
        container: this.container,
        view: this.props.jimuMapView.view
      })
    }
  }

  componentWillUnmount () {
    if (this.LegendBtn) {
      this.LegendBtn.destroy()
      this.LegendBtn = null
    }
  }

  render () {
    return (
      <div ref={ref => { this.container = ref }} style={{ width: '250px', minHeight: '32px', position: 'relative' }}>
        {!this.state.apiLoaded && <div className='exbmap-basetool-loader' />}
      </div>
    )
  }
}
