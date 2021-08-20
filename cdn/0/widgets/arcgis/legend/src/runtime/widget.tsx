/** @jsx jsx */
import { React, jsx, AllWidgetProps, DataSourceComponent, ReactResizeDetector } from 'jimu-core'
import { MapDataSource, DataSourceTypes, loadArcGISJSAPIModules, JimuMapViewComponent, JimuMapView } from 'jimu-arcgis'
import { WidgetPlaceholder, FillType } from 'jimu-ui'
// import { IMDataSourceJson, IMUseDataSource } from './types/app-config';
import { IMConfig, Style } from '../config'
import { getStyle } from './lib/style'
import defaultMessages from './translations/default'
const legendIcon = require('./assets/icon.svg')

export enum LoadStatus {
  Pending = 'Pending',
  Fulfilled = 'Fulfilled',
  Rejected = 'Rejected'
}

export interface WidgetProps extends AllWidgetProps<IMConfig> {
}

export interface WidgetState{
  loadStatus: LoadStatus
}

export default class Widget extends React.PureComponent<WidgetProps, WidgetState> {
  private dataSource: MapDataSource
  private mapView: __esri.MapView
  private sceneView: __esri.SceneView
  private MapView: typeof __esri.MapView
  private SceneView: typeof __esri.SceneView
  private legend: __esri.Legend
  private Legend: typeof __esri.Legend
  private currentWidth: number

  public refs: {
    mapContainer: HTMLInputElement
    legendContainer: HTMLInputElement
  }

  constructor (props) {
    super(props)
    this.state = {
      loadStatus: LoadStatus.Pending
    }
  }

  componentDidMount = () => {
    // window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount = () => {
    // window.removeEventListener('resize', this.onResize);
  }

  async createViewByDataSource (dataSource) {
    return await this.loadViewModules(dataSource).then(async () => {
      if (dataSource.type === DataSourceTypes.WebMap) {
        return await new Promise((resolve, reject) => this.createWebMapView(this.MapView, resolve, reject))
      } else if (dataSource.type === DataSourceTypes.WebScene) {
        return new Promise((resolve, reject) => this.createSceneView(this.SceneView, resolve, reject))
      } else {
        return Promise.reject()
      }
    })
  }

  createWebMapView = (MapView, resolve, reject) => {
    this.destoryView()
    const mapViewOption: __esri.MapViewProperties = {
      map: this.dataSource.map,
      container: this.refs.mapContainer
    }
    this.mapView = new MapView(mapViewOption)
    this.mapView.when(() => {
      resolve(this.mapView)
    }, (error) => reject(error))
  }

  createSceneView = (SceneView, resolve, reject) => {
    this.destoryView()
    const mapViewOption: __esri.SceneViewProperties = {
      map: this.dataSource.map,
      container: this.refs.mapContainer
    }
    this.sceneView = new this.SceneView(mapViewOption)
    this.sceneView.when(() => {
      resolve(this.sceneView)
    }, (error) => reject(error))
  }

  destoryView () {
    this.mapView && !this.mapView.destroyed && this.mapView.destroy()
    this.sceneView && !this.sceneView.destroyed && this.sceneView.destroy()
  }

  loadViewModules = async (dataSource: MapDataSource): Promise <typeof __esri.MapView | typeof __esri.SceneView> => {
    if (dataSource.type === DataSourceTypes.WebMap) {
      if (this.MapView) { return await Promise.resolve(this.MapView) }
      return await loadArcGISJSAPIModules([
        'esri/views/MapView'
      ]).then(modules => {
        [
          this.MapView
        ] = modules
        return this.MapView
      })
    } else if (dataSource.type === DataSourceTypes.WebScene) {
      if (this.SceneView) { return Promise.resolve(this.SceneView) }
      return loadArcGISJSAPIModules([
        'esri/views/SceneView'
      ]).then(modules => {
        [
          this.SceneView
        ] = modules
        return this.SceneView
      })
    } else {
      return Promise.reject()
    }
  }

  destoryLegend = () => {
    this.legend && !this.legend.destroyed && this.legend.destroy()
  }

  createLegend = (view) => {
    let legendModulePromise
    if (this.Legend) {
      legendModulePromise = Promise.resolve()
    } else {
      legendModulePromise = loadArcGISJSAPIModules([
        'esri/widgets/Legend'
      ]).then(modules => {
        [
          this.Legend
        ] = modules
      })
    }
    return legendModulePromise.then(() => {
      const container = document && document.createElement('div')
      // container.className = 'jimu-widget';
      this.refs.legendContainer.appendChild(container)

      this.destoryLegend()
      this.legend = new this.Legend({
        view: view,
        container: container
      })

      this.configLegend()
    })
  }

  configLegend = () => {
    if (this.legend) {
      // const style = this.props.config.cardStyle ? {type: 'card' as 'card', layout: this.props.config.cardLayout || 'auto'} : 'classic';
      const basemapLegendVisible = this.props.config.showBaseMap
      this.legend.style = this.calculateStyle()
      this.legend.basemapLegendVisible = basemapLegendVisible
    }
  }

  calculateStyle = () => {
    let style
    const currentWidth = this.currentWidth || 100000// window.innerWidth;
    if (this.legend) {
      if (this.props.config.cardStyle) {
        let layout
        if (this.props.config.cardLayout === 'auto') {
          if (currentWidth <= 600) {
            layout = 'stack'
          } else {
            layout = 'side-by-side'
          }
        } else {
          layout = this.props.config.cardLayout
        }
        style = {
          type: 'card' as const,
          layout: layout
        }
      } else {
        style = 'classic'
      }
    } else {
      style = 'classic'
    }
    return style
  }

  getDefaultStyleConfig (): Style {
    return {
      useCustom: false,
      background: {
        color: '',
        fillType: FillType.FILL
      },
      fontColor: ''
    }
  }

  getStyleConfig () {
    if (this.props.config.style && this.props.config.style.useCustom) {
      return this.props.config.style
    } else {
      return this.getDefaultStyleConfig()
    }
  }

  onActiveViewChange = (jimuMapView: JimuMapView) => {
    if (jimuMapView && jimuMapView.view) {
      // this.setState({ loadStatus: LoadStatus.Pending})
      this.createLegend(jimuMapView.view).then(() => {
        this.setState({
          loadStatus: LoadStatus.Fulfilled
        })
      }).catch((error) => console.error(error))
    } else {
      this.destoryLegend()
      // this.setState({ loadStatus: LoadStatus.Rejected })
    }
  }

  onDataSourceCreated = (dataSource): void => {
    this.dataSource = dataSource

    this.createViewByDataSource(dataSource).then((view) => {
      return this.createLegend(view)
    }).then(() => {
      this.setState({
        loadStatus: LoadStatus.Fulfilled
      })
    }).catch((error) => console.error(error))
  }

  onCreateDataSourceFailed = (error): void => {
  }

  onResize = (width) => {
    // const width = window.innerWidth;
    this.currentWidth = width
    if (this.legend && this.props.config.cardLayout === 'auto') {
      const style = this.calculateStyle()
      this.legend.style = style
    }
  }

  render () {
    const useMapWidget = this.props.useMapWidgetIds &&
                        this.props.useMapWidgetIds[0]
    const useDataSource = this.props.useDataSources &&
                        this.props.useDataSources[0]

    let content = null
    let dataSourceContent = null

    if (useMapWidget) {
      dataSourceContent = (
        <JimuMapViewComponent useMapWidgetId={this.props.useMapWidgetIds?.[0]} onActiveViewChange={this.onActiveViewChange} />
      )
    } else if (useDataSource) {
      dataSourceContent = (
        <DataSourceComponent
          useDataSource={useDataSource}
          onDataSourceCreated={this.onDataSourceCreated}
          onCreateDataSourceFailed={this.onCreateDataSourceFailed}
        />
      )
    }

    if (!useMapWidget && !useDataSource) {
      this.destoryLegend()
      content = (
        <div className='widget-legend'>
          <WidgetPlaceholder icon={legendIcon} autoFlip message={this.props.intl.formatMessage({ id: '_widgetLabel', defaultMessage: defaultMessages._widgetLabel })} widgetId={this.props.id} />
        </div>
      )
    } else {
      let loadingContent = null
      if (this.state.loadStatus === LoadStatus.Pending) {
        loadingContent = (
          <div style={{ position: 'absolute', left: '50%', top: '50%' }} className='jimu-secondary-loading' />
        )
      }
      // else if(this.state.loadStatus === LoadStatus.Rejected){
      //  loadingContent = (
      //    <div style={{padding: '5px 10px'}}> Invalid map widget! </div>
      //  );
      // }

      if (window.jimuConfig.isInBuilder) {
        this.configLegend()
      }
      content = (
        <div className='widget-legend'>
          {loadingContent}
          <div ref='legendContainer' style={{ height: '100%' }} />
          <div style={{ position: 'absolute', display: 'none' }} ref='mapContainer'>mapContainer</div>
          <div style={{ position: 'absolute', display: 'none' }}>
            {dataSourceContent}
          </div>
          <ReactResizeDetector handleHeight handleWidth onResize={this.onResize} />
        </div>
      )
    }
    return (
      <div css={getStyle(this.props.theme, this.getStyleConfig())} className='jimu-widget'>
        {content}
      </div>
    )
  }
}
