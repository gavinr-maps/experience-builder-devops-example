/** @jsx jsx */
import { React, jsx, AllWidgetProps, DataSourceComponent } from 'jimu-core'
import { MapDataSource, DataSourceTypes, loadArcGISJSAPIModules, JimuMapViewComponent, JimuMapView } from 'jimu-arcgis'
import { WidgetPlaceholder } from 'jimu-ui'
// import { IMDataSourceJson, IMUseDataSource } from './types/app-config';
import { IMConfig } from '../config'
import { getStyle } from './lib/style'
import Action from './actions/action'
import Goto from './actions/goto'
import Opacity from './actions/opacity'
import Information from './actions/information'
import defaultMessages from './translations/default'
const layerListIcon = require('./assets/icon.svg')

export enum LoadStatus {
  Pending = 'Pending',
  Fulfilled = 'Fulfilled',
  Rejected = 'Rejected'
}

export interface WidgetProps extends AllWidgetProps<IMConfig> {
  // useDataSource: IMUseDataSource;
  // dataSource: MapDataSource;
}

export interface WidgetState{
  mapViewWidgetId: string
  viewFromMapWidgetId: string
  mapDataSourceId: string
  loadStatus: LoadStatus
}

export default class Widget extends React.PureComponent<WidgetProps, WidgetState> {
  public viewFromMapWidget: __esri.MapView | __esri.SceneView
  private dataSource: MapDataSource
  private mapView: __esri.MapView
  private sceneView: __esri.SceneView
  private MapView: typeof __esri.MapView
  private SceneView: typeof __esri.SceneView
  private layerList: __esri.LayerList
  private LayerList: typeof __esri.LayerList
  private layerListActions: Action[]
  private renderPromise: Promise<void>
  private currentUseMapWidgetId: string
  private currentUseDataSourceId: string

  public refs: {
    mapContainer: HTMLInputElement
    layerListContainer: HTMLInputElement
  }

  constructor (props) {
    super(props)
    this.state = {
      mapViewWidgetId: null,
      mapDataSourceId: null,
      viewFromMapWidgetId: null,
      loadStatus: LoadStatus.Pending
    }
    this.renderPromise = Promise.resolve()
    this.registerLayerListActions()
  }

  componentDidMount () {
  }

  componentDidUpdate () {
    if (this.props.config.useMapWidget) {
      if (this.state.mapViewWidgetId === this.currentUseMapWidgetId) {
        this.syncRenderer(this.renderPromise)
      }
    } else {
      if (this.state.mapDataSourceId === this.currentUseDataSourceId) {
        this.syncRenderer(this.renderPromise)
      }
    }
  }

  async createView () {
    if (this.props.config.useMapWidget) {
      return await Promise.resolve(this.viewFromMapWidget)
    } else {
      return await this.createViewByDatatSource()
    }
  }

  async createViewByDatatSource () {
    return await this.loadViewModules(this.dataSource).then(async () => {
      if (this.dataSource.type === DataSourceTypes.WebMap) {
        return await new Promise((resolve, reject) => this.createWebMapView(this.MapView, resolve, reject))
      } else if (this.dataSource.type === DataSourceTypes.WebScene) {
        return new Promise((resolve, reject) => this.createSceneView(this.SceneView, resolve, reject))
      } else {
        return Promise.reject()
      }
    })
  }

  createWebMapView (MapView, resolve, reject) {
    if (this.mapView) {
      this.mapView.map = this.dataSource.map
    } else {
      const mapViewOption: __esri.MapViewProperties = {
        map: this.dataSource.map,
        container: this.refs.mapContainer
      }
      this.mapView = new MapView(mapViewOption)
    }
    this.mapView.when(() => {
      resolve(this.mapView)
    }, (error) => reject(error))
  }

  createSceneView (SceneView, resolve, reject) {
    if (this.sceneView) {
      this.sceneView.map = this.dataSource.map
    } else {
      const mapViewOption: __esri.SceneViewProperties = {
        map: this.dataSource.map,
        container: this.refs.mapContainer
      }
      this.sceneView = new this.SceneView(mapViewOption)
    }

    this.sceneView.when(() => {
      resolve(this.sceneView)
    }, (error) => reject(error))
  }

  destoryView () {
    this.mapView && !this.mapView.destroyed && this.mapView.destroy()
    this.sceneView && !this.sceneView.destroyed && this.sceneView.destroy()
  }

  async loadViewModules (dataSource: MapDataSource): Promise <typeof __esri.MapView | typeof __esri.SceneView> {
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

  destoryLayerList () {
    this.layerList && !this.layerList.destroyed && this.layerList.destroy()
  }

  createLayerList (view) {
    let layerListModulePromise
    if (this.LayerList) {
      layerListModulePromise = Promise.resolve()
    } else {
      layerListModulePromise = loadArcGISJSAPIModules([
        'esri/widgets/LayerList'
      ]).then(modules => {
        [
          this.LayerList
        ] = modules
      })
    }
    return layerListModulePromise.then(() => {
      const container = document && document.createElement('div')
      container.className = 'jimu-widget'
      this.refs.layerListContainer.appendChild(container)

      this.destoryLayerList()
      this.layerList = new this.LayerList({
        view: view,
        listItemCreatedFunction: this.defineLayerListActions,
        container: container
      })

      this.configLayerList()

      this.layerList.on('trigger-action', (event) => {
        this.onLayerListActionsTriggered(event)
      })
    })
  }

  registerLayerListActions () {
    this.layerListActions = [
      new Goto(this, this.props.intl.formatMessage({ id: 'goto', defaultMessage: defaultMessages.goto })),
      new Opacity(this, this.props.intl.formatMessage({ id: 'increaseOpacity', defaultMessage: defaultMessages.increaseOpacity }), true),
      new Opacity(this, this.props.intl.formatMessage({ id: 'decreaseOpacity', defaultMessage: defaultMessages.decreaseOpacity }), false),
      new Information(this, this.props.intl.formatMessage({ id: 'information', defaultMessage: defaultMessages.information }))
    ]
  }

  defineLayerListActions = (event) => {
    const item = event.item
    const actionGroups = {}
    item.actionsSections = []

    this.layerListActions.forEach((actionObj) => {
      // let actionIsExisted = item.actionsSections.some((section) => section.some((action) => action.id === actionObj.id));
      if (actionObj.isValid(item)) {
        let actionGroup = actionGroups[actionObj.group]
        if (!actionGroup) {
          actionGroup = []
          actionGroups[actionObj.group] = actionGroup
        }

        actionGroup.push({
          id: actionObj.id,
          title: actionObj.title,
          className: actionObj.className
        })
      }
    })

    Object.entries(actionGroups).sort((v1, v2) => Number(v1[0]) - Number(v2[0])).forEach(([key, value]) => {
      item.actionsSections.push(value)
    })
  }

  configLayerList () {
    if (!this.props.config.setVisibility || !this.props.config.useMapWidget) {
      // @ts-expect-error
      this.layerList._toggleVisibility = function () {}
    }
  }

  onLayerListActionsTriggered = (event) => {
    const action = event.action
    const item = event.item
    const actionObj = this.layerListActions.find((actionObj) => actionObj.id === action.id)
    actionObj.execute(item)
  }

  async renderLayerList () {
    return await this.createView().then((view) => {
      return this.createLayerList(view)
    }).then(() => {
      this.setState({
        loadStatus: LoadStatus.Fulfilled
      })
    }).catch((error) => console.error(error))
  }

  syncRenderer (preRenderPromise) {
    this.renderPromise = new Promise((resolve, reject) => {
      preRenderPromise.then(() => {
        this.renderLayerList().then(() => {
          resolve(null)
        }).catch(() => reject())
      })
    })
  }

  onActiveViewChange = (jimuMapView: JimuMapView) => {
    const useMapWidget = this.props.useMapWidgetIds &&
                        this.props.useMapWidgetIds[0]
    if ((jimuMapView && jimuMapView.view) || !useMapWidget) {
      // this.setState({ loadStatus: LoadStatus.Pending})
      this.viewFromMapWidget = jimuMapView && jimuMapView.view
      this.setState({
        mapViewWidgetId: useMapWidget,
        viewFromMapWidgetId: jimuMapView.id
      })
    } else {
      this.destoryLayerList()
      // this.setState({ loadStatus: LoadStatus.Rejected });
    }
  }

  onDataSourceCreated = (dataSource: MapDataSource): void => {
    this.dataSource = dataSource
    this.setState({
      mapDataSourceId: dataSource.id
    })
  }

  onCreateDataSourceFailed = (error): void => {
  }

  render () {
    const useMapWidget = this.props.useMapWidgetIds &&
                        this.props.useMapWidgetIds[0]
    const useDataSource = this.props.useDataSources &&
                        this.props.useDataSources[0]

    this.currentUseMapWidgetId = useMapWidget
    this.currentUseDataSourceId = useDataSource && useDataSource.dataSourceId

    let dataSourceContent = null
    if (this.props.config.useMapWidget) {
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

    let content = null
    if (this.props.config.useMapWidget ? !useMapWidget : !useDataSource) {
      this.destoryLayerList()
      content = (
        <div className='widget-layerlist'>
          <WidgetPlaceholder icon={layerListIcon} message={this.props.intl.formatMessage({ id: '_widgetLabel', defaultMessage: defaultMessages._widgetLabel })} widgetId={this.props.id} />
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

      content = (
        <div className='widget-layerlist'>
          {loadingContent}
          <div ref='layerListContainer' />
          <div style={{ position: 'absolute', opacity: 0 }} ref='mapContainer'>mapContainer</div>
          <div style={{ position: 'absolute', display: 'none' }}>
            {dataSourceContent}
          </div>
        </div>
      )
    }

    return (
      <div css={getStyle(this.props.theme, this.props.config)} className='jimu-widget'>
        {content}
      </div>
    )
  }
}
