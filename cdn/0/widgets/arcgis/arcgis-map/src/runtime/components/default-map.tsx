import { React, classNames } from 'jimu-core'
import { MapWidgetProps } from '../widget'
import { checkIsLive } from '../utils'
import MultiSourceMap from './multisourcemap'
import { JimuMapViewGroup, portalUtils, DefaultMapInfo } from 'jimu-arcgis'

interface Props {
  baseWidgetProps: MapWidgetProps
  startLoadModules: boolean
  fullScreenMap: () => void

  isDefaultMap?: boolean
  onViewGroupCreate?: (viewGroup: JimuMapViewGroup) => void

  widthBreakpoint: string
  widgetHeight: number

  isFullScreen: boolean
  isMapInVisibleArea: boolean

  setMultiSourceMapInstance: (instance: MultiSourceMap) => void
}

interface State {
  defaultMapInfo: DefaultMapInfo
}

export default class DefaultMap extends React.PureComponent<Props, State> {
  constructor (props) {
    super(props)

    this.state = {
      defaultMapInfo: null
    }
  }

  componentDidMount () {
    portalUtils.getDefaultWebMap(this.props.baseWidgetProps.portalUrl).then(defaultMapInfo => {
      this.setState({
        defaultMapInfo: defaultMapInfo
      })
    })
  }

  render () {
    return (
      <div className='w-100 h-100'>
        {!this.state.defaultMapInfo && <div className='widget-map jimu-widget widget-map-background'>
          <div style={{ position: 'absolute', left: '50%', top: '50%' }} className='jimu-secondary-loading' />
        </div>}
        {this.state.defaultMapInfo && <div className={classNames('jimu-widget', { 'map-is-design-mode': !checkIsLive(this.props.baseWidgetProps.appMode) })}>
          {this.props.isMapInVisibleArea && <MultiSourceMap
            key={0} fullScreenMap={this.props.fullScreenMap}
            baseWidgetProps={this.props.baseWidgetProps} startLoadModules={this.props.startLoadModules} isDefaultMap
            ref={this.props.setMultiSourceMapInstance} onViewGroupCreate={this.props.onViewGroupCreate}
            widgetHeight={this.props.widgetHeight} widthBreakpoint={this.props.widthBreakpoint}
            isFullScreen={this.props.isFullScreen} isMapInVisibleArea={this.props.isMapInVisibleArea}
            defaultMapInfo={this.state.defaultMapInfo}
          >
                                            </MultiSourceMap>}
        </div>}
      </div>
    )
  }
}
