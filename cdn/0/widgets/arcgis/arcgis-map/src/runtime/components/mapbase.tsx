import {
  React, DataSourceManager, ExtentChangeMessage, DataSourceComponent, portalUrlUtils,
  getAppStore, MutableStoreManager, ImmutableObject, dataSourceUtils
} from 'jimu-core'
import { IMConfig, SceneQualityMode } from '../../config'
import { MapDataSource, DataSourceTypes, loadArcGISJSAPIModules, MapViewManager, JimuMapView, JimuMapViewConstructorOptions, zoomToUtils, DefaultMapInfo } from 'jimu-arcgis'
import { InitialMapState } from 'jimu-ui/advanced/map'
import { defaultMessages, Icon } from 'jimu-ui'
import {
  createNewFeaturelayer, updateFeaturelayer, getMapBaseRestoreData, restoreMapBase, selectFeature,
  mapPanto, flashFeaturesByQuery, projectGeometries, filterFeaturesByQuery, processZoomToFeatures
} from '../utils'
import { MapWidgetProps, ActionRelatedProps } from '../widget'

import { MultiSourceMapContext } from './multisourcemap-context'

const Exchange = require('../assets/icons/exchange.svg')

interface Props{
  isMapInVisibleArea: boolean
  widthBreakpoint: string
  isDefaultMap?: boolean
  baseWidgetProps: MapWidgetProps
  startLoadModules: boolean
  dataSourceId: string
  defaultMapInfo?: DefaultMapInfo
  onViewChanged?: (shareViewPoint: ShareViewPoint) => void
  onMutableStatePropsChanged?: (dataSourceId: string, propKey: string, value?: any) => void

  onExtentChanged?: (dataSourceId: string, message: ExtentChangeMessage) => void
  onMapLoaded?: (dataSourceId: string, mapLoadStatus: MapLoadStatus) => void
  onJimuMapViewCreated?: () => void
  // onShowOnMapDataChanged?: (showOnMapDatasKey: string[]) => void
}

export interface ShareViewPoint {
  dataSourceId: string
  viewpoint: __esri.Viewpoint
}

export enum MapLoadStatus {
  Loading = 'LOADING',
  Loadok = 'LOADOK',
  LoadError = 'LOADERROR'
}

export interface HighLightHandle {
  layerId: string
  handle: __esri.Handle
}

interface State{
  dataSourceId: string
  isModulesLoaded?: boolean
  mapLoadStatus?: MapLoadStatus

  mapBaseJimuMapView: JimuMapView
  isMapCrashed?: boolean
}

export default class MapBase extends React.PureComponent<Props, State> {
  mapContainer: HTMLDivElement
  widgetContainer: HTMLDivElement

  Geometry: typeof __esri.Geometry
  InitialViewProperties: typeof __esri.InitialViewProperties
  TileLayer: typeof __esri.TileLayer
  Basemap: typeof __esri.Basemap
  MapView: typeof __esri.MapView
  SceneView: typeof __esri.SceneView
  Extent: typeof __esri.geometry.Extent
  Viewpoint: typeof __esri.Viewpoint
  PortalItem: typeof __esri.PortalItem
  Portal: typeof __esri.Portal
  WebMap: typeof __esri.WebMap
  WebScene: typeof __esri.WebScene
  Color: typeof __esri.Color

  mapView: __esri.MapView
  sceneView: __esri.SceneView
  mapDs: MapDataSource
  extentWatch: __esri.WatchHandle
  fatalErrorWatch: __esri.WatchHandle
  highLightHandles: {[layerId: string]: __esri.Handle} = {}
  mapBaseViewEventHandles: {[eventName: string]: __esri.Handle} = {}
  dsManager = DataSourceManager.getInstance()

  onExtented = null
  isFirstReceiveMessage = true
  isRequestingMap = false

  __unmount = false

  constructor (props) {
    super(props)

    const restoreData = MutableStoreManager.getInstance().getStateValue([this.props.baseWidgetProps.id, 'restoreData',
      `${this.props.baseWidgetProps.id}-restoreData-${this.props.dataSourceId}`])

    if (restoreData) {
      restoreMapBase(this, restoreData)
      MutableStoreManager.getInstance().updateStateValue(this.props.baseWidgetProps.id,
        `restoreData.${this.props.baseWidgetProps.id}-restoreData-${this.props.dataSourceId}`, null)

      this.bindMapBaseViewEvent(this.mapView || this.sceneView)

      if (this.mapView) {
        (this.mapView as any).isInCaching = false
        this.mapView.tryFatalErrorRecovery()
      }

      if (this.sceneView) {
        (this.sceneView as any).isInCaching = false
        this.sceneView.tryFatalErrorRecovery()
      }
    } else {
      this.state = {
        mapLoadStatus: MapLoadStatus.Loading,
        widthBreakpoint: null,
        mapBaseJimuMapView: null,
        dataSourceId: null,
        widgetHeight: null,
        isMapCrashed: false
      } as State
    }
  }

  startRenderMap = () => {
    loadArcGISJSAPIModules([
      'esri/geometry/Extent',
      'esri/Viewpoint'
    ]).then(modules => {
      [
        this.Extent, this.Viewpoint
      ] = modules

      if (this.__unmount) {
        return
      }

      this.setState({
        isModulesLoaded: true
      })
    })
  }

  componentDidMount () {
    this.__unmount = false

    if (this.widgetContainer.getElementsByClassName('widget-map').length === 0) {
      if (!this.mapContainer) {
        this.mapContainer = document && document.createElement('div')
        this.mapContainer.className = 'jimu-widget widget-map'
      }
      this.widgetContainer.appendChild(this.mapContainer)
    }

    if (this.props.startLoadModules && !this.state.isModulesLoaded) {
      this.startRenderMap()
      return
    }

    if (!this.props.dataSourceId && !this.props.isDefaultMap) {
      return
    }

    if (!this.getDsJsonFromDsId(this.props.dataSourceId) && !this.props.isDefaultMap) {
      return
    }

    if (this.props.isDefaultMap) {
      // init and update map
      this.analysisMapView().then(() => {
        this.updateMapView(this.props.baseWidgetProps.config)
      })

      return
    }

    if (this.getDsJsonFromDsId(this.props.dataSourceId).type === DataSourceTypes.WebMap) {
      // init and update map
      this.analysisMapView().then(() => {
        this.updateMapView(this.props.baseWidgetProps.config)
      })
    }

    if (this.getDsJsonFromDsId(this.props.dataSourceId).type === DataSourceTypes.WebScene) {
      // init and update map
      this.analysisSceneView().then(() => {
        this.updateSceneView(this.props.baseWidgetProps.config)
      })
    }
  }

  componentDidUpdate (prevProps: Props) {
    if (!this.state.isModulesLoaded) {
      return
    }

    if (prevProps.isMapInVisibleArea !== this.props.isMapInVisibleArea && (this.props.baseWidgetProps.useDataSources && this.props.baseWidgetProps.useDataSources.length === 2)) {
      if (this.props.isMapInVisibleArea) {
        if (this.mapView) {
          (this.mapView as any).isInCaching = false
          this.mapView.tryFatalErrorRecovery()
        }

        if (this.sceneView) {
          (this.sceneView as any).isInCaching = false
          this.sceneView.tryFatalErrorRecovery()
        }
      }

      if (!this.props.isMapInVisibleArea) {
        if (this.mapView) {
          (this.mapView as any).isInCaching = true
        }

        if (this.sceneView) {
          (this.sceneView as any).isInCaching = true
        }
      }
    }

    const curDsId = this.props.dataSourceId
    const prevDsId = prevProps.dataSourceId

    const curDsItemId = this.getDsJsonFromDsId(curDsId).itemId
    const preDsItemId = this.getDsJsonFromDsId(prevDsId).itemId

    if (curDsId !== prevDsId || curDsItemId !== preDsItemId) {
      this.mapView = null
      this.sceneView = null
      this.isRequestingMap = false
      this.mapDs = null
      const prevJimuMapViewId = this.getDsJsonFromDsId(prevDsId) && `${this.props.baseWidgetProps.id}-${prevDsId}`
      if (prevJimuMapViewId) {
        MapViewManager.getInstance().destroyJimuMapView(prevJimuMapViewId)
      }

      if (this.state.mapLoadStatus === MapLoadStatus.LoadError && !this.getDsJsonFromDsId(curDsId)) {
        return
      }

      this.setState({
        mapLoadStatus: MapLoadStatus.Loading
      })
    }

    if (this.props.isDefaultMap) {
      this.sceneView = null
      this.isRequestingMap = false

      this.analysisMapView().then(() => {
        this.updateMapView(this.props.baseWidgetProps.config)

        if (!this.mapView || !this.props.baseWidgetProps.mutableStateProps) {
          return
        }

        if (this.props.baseWidgetProps.mutableStateProps) {
          const tempJimuMapViewId = `${this.props.baseWidgetProps.id}-${this.props.dataSourceId}`
          const tempJimuMapView = MapViewManager.getInstance().getJimuMapViewById(tempJimuMapViewId)
          if (tempJimuMapView) {
            tempJimuMapView.whenJimuMapViewLoaded().then(() => {
              setTimeout(() => {
                this.handleAction(this.props.baseWidgetProps.mutableStateProps, this.mapView)
                this.handleDataAction(this.props.baseWidgetProps.mutableStateProps, tempJimuMapView)
                this.isFirstReceiveMessage = false
              }, this.isFirstReceiveMessage ? 500 : 0
              )
            })
          }
        }
      })
    }

    if (!this.getDsJsonFromDsId(curDsId)) {
      return
    }

    if (this.getDsJsonFromDsId(curDsId).type === DataSourceTypes.WebMap) {
      this.sceneView = null
      this.isRequestingMap = false

      this.analysisMapView().then(() => {
        this.updateMapView(this.props.baseWidgetProps.config)

        if (!this.mapView || !this.props.baseWidgetProps.mutableStateProps) {
          return
        }

        if (this.props.baseWidgetProps.mutableStateProps) {
          const tempJimuMapViewId = `${this.props.baseWidgetProps.id}-${this.props.dataSourceId}`
          const tempJimuMapView = MapViewManager.getInstance().getJimuMapViewById(tempJimuMapViewId)
          if (tempJimuMapView) {
            tempJimuMapView.whenJimuMapViewLoaded().then(() => {
              setTimeout(() => {
                this.handleAction(this.props.baseWidgetProps.mutableStateProps, this.mapView)
                this.handleDataAction(this.props.baseWidgetProps.mutableStateProps, tempJimuMapView)
                this.isFirstReceiveMessage = false
              }, this.isFirstReceiveMessage ? 500 : 0
              )
            })
          }
        }
      })
    }

    if (this.getDsJsonFromDsId(curDsId).type === DataSourceTypes.WebScene) {
      this.mapView = null
      this.isRequestingMap = false

      this.analysisSceneView().then(() => {
        this.updateSceneView(this.props.baseWidgetProps.config)

        if (!this.sceneView || !this.props.baseWidgetProps.mutableStateProps) {
          return
        }

        if (this.props.baseWidgetProps.mutableStateProps) {
          const tempJimuMapViewId = `${this.props.baseWidgetProps.id}-${this.props.dataSourceId}`
          const tempJimuMapView = MapViewManager.getInstance().getJimuMapViewById(tempJimuMapViewId)
          if (tempJimuMapView) {
            tempJimuMapView.whenJimuMapViewLoaded().then(() => {
              setTimeout(() => {
                this.handleAction(this.props.baseWidgetProps.mutableStateProps, this.sceneView)
                this.handleDataAction(this.props.baseWidgetProps.mutableStateProps, tempJimuMapView)
                this.isFirstReceiveMessage = false
              }, this.isFirstReceiveMessage ? 500 : 0
              )
            })
          }
        }
      })
    }
  }

  analysisMapView = async (): Promise<void> => {
    if (!this.mapView) {
      if (this.MapView) {
        return await this.initMapView()
      } else {
        return await loadArcGISJSAPIModules([
          'esri/geometry/Geometry',
          'esri/webmap/InitialViewProperties',
          'esri/Basemap',
          'esri/layers/TileLayer',
          'esri/views/MapView',
          'esri/WebMap',
          'esri/portal/Portal',
          'esri/portal/PortalItem',
          'esri/Color'
        ]).then(async modules => {
          [
            this.Geometry, this.InitialViewProperties, this.Basemap, this.TileLayer, this.MapView, this.WebMap, this.Portal, this.PortalItem, this.Color
          ] = modules
          return await this.initMapView()
        })
      }
    } else {
      return await Promise.resolve()
    }
  }

  analysisSceneView = async (): Promise<void> => {
    if (!this.sceneView) {
      if (this.SceneView) {
        return await this.initSceneView()
      } else {
        return await loadArcGISJSAPIModules([
          'esri/views/SceneView',
          'esri/WebScene',
          'esri/portal/Portal',
          'esri/portal/PortalItem',
          'esri/Color'
        ]).then(async modules => {
          [
            this.SceneView, this.WebScene, this.Portal, this.PortalItem, this.Color
          ] = modules
          return await this.initSceneView()
        })
      }
    } else {
      return await Promise.resolve()
    }
  }

  static getDerivedStateFromProps (nextProps: Props, prevState: State) {
    if (nextProps.dataSourceId !== prevState.dataSourceId) {
      return {
        dataSourceId: nextProps.dataSourceId,
        mapLoadStatus: MapLoadStatus.Loading
      }
    } else {
      return null
    }
  }

  componentWillUnmount () {
    this.__unmount = true

    const widgets = getAppStore().getState().appConfig.widgets

    if (widgets[this.props.baseWidgetProps.id] && widgets[this.props.baseWidgetProps.id].useDataSources === this.props.baseWidgetProps.useDataSources &&
      this.state.mapLoadStatus !== MapLoadStatus.Loading) {
      const restoreData = getMapBaseRestoreData(this)

      if (this.mapView) {
        (this.mapView as any).isInCaching = true
      }

      if (this.sceneView) {
        (this.sceneView as any).isInCaching = true
      }

      MutableStoreManager.getInstance().updateStateValue(this.props.baseWidgetProps.id,
        `restoreData.${this.props.baseWidgetProps.id}-restoreData-${this.props.dataSourceId}`, restoreData)
    } else {
      this.props.onViewChanged && this.props.onViewChanged({ dataSourceId: this.props.dataSourceId, viewpoint: null })
      const jimuMapViewId = `${this.props.baseWidgetProps.id}-${this.props.dataSourceId}`
      MapViewManager.getInstance().destroyJimuMapView(jimuMapViewId)

      if (this.mapView && !this.mapView.destroyed) {
        this.mapView.container = null
        this.mapView = null
      }
      if (this.sceneView && !this.sceneView.destroyed) {
        this.sceneView.container = null
        this.sceneView = null
      }
      this.highLightHandles = {}
      this.extentWatch = null
      this.fatalErrorWatch = null
      this.mapDs = null
      this.isRequestingMap = false
    }
  }

  generateViewPointFromInitialMapState = (initialMapState: ImmutableObject<InitialMapState>): __esri.Viewpoint => {
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

  cloneMap = async (): Promise<__esri.WebMap | __esri.WebScene> => {
    let map: __esri.WebMap | __esri.WebScene = null
    const dataSourceJson = this.getDsJsonFromDsId(this.props.dataSourceId)
    let MapClass: typeof __esri.WebMap | typeof __esri.WebScene = null
    if (dataSourceJson.type === DataSourceTypes.WebMap) {
      MapClass = this.WebMap
    }

    if (dataSourceJson.type === DataSourceTypes.WebScene) {
      MapClass = this.WebScene
    }

    if (dataSourceJson.portalUrl) {
      const portal = new this.Portal({
        url: portalUrlUtils.getHostUrlByOrgUrl(dataSourceJson.portalUrl)
      })

      map = new MapClass({
        portalItem: new this.PortalItem({
          id: dataSourceJson.itemId,
          portal: portal
        })
      })
    } else {
      map = new MapClass({
        portalItem: new this.PortalItem({
          id: dataSourceJson.itemId
        })
      })
    }

    if (dataSourceUtils.getWhetherUseProxy()) {
      return await map.load().then(async () => {
        return await map.when(async () => {
          const tables = (map as any).tables ? (map as any).tables.toArray() : []
          tables.forEach(table => { // set proxy url for tables
            const sourceUrl = dataSourceUtils.getUrlByLayer(table)
            if (!sourceUrl) {
              return
            }
            const proxyUrl: string = dataSourceUtils.getDataSourceProxyUrl(sourceUrl)

            if (proxyUrl) {
              (table as __esri.Layer & {url: string}).url = proxyUrl
            }
          })

          map.allLayers.toArray()
            .forEach(layer => { // set proxy url for layers
              const sourceUrl = dataSourceUtils.getUrlByLayer(layer)
              if (!sourceUrl) {
                return
              }
              const proxyUrl: string = dataSourceUtils.getDataSourceProxyUrl(sourceUrl)

              if (proxyUrl) {
                (layer as __esri.Layer & {url: string}).url = proxyUrl
              }
            })
          return Promise.resolve(map)
        })
      })
    } else {
      return Promise.resolve(map)
    }
  }

  getInitViewPointForDefaultWebMap = (): __esri.Viewpoint => {
    const defaultExtent = this.props.defaultMapInfo && this.props.defaultMapInfo.defaultExtent
    let tempViewPoint = null
    if (this.props.baseWidgetProps.config.initialMapState && this.props.baseWidgetProps.config.initialMapState.viewPoint) {
      tempViewPoint = this.generateViewPointFromInitialMapState(this.props.baseWidgetProps.config.initialMapState)
    } else {
      tempViewPoint = new this.Viewpoint(
        {
          targetGeometry: new this.Extent({
            xmin: defaultExtent && defaultExtent.xmin,
            ymin: defaultExtent && defaultExtent.ymin,
            xmax: defaultExtent && defaultExtent.xmax,
            ymax: defaultExtent && defaultExtent.ymax,
            spatialReference: { wkid: defaultExtent.spatialReference.wkid }
          })
        }
      )
    }
    return tempViewPoint
  }

  getDefaultWebMap = () => {
    const defaultExtent = this.props.defaultMapInfo && this.props.defaultMapInfo.defaultExtent

    let tempViewPoint = null
    tempViewPoint = new this.Viewpoint(
      {
        targetGeometry: new this.Extent({
          xmin: defaultExtent && defaultExtent.xmin,
          ymin: defaultExtent && defaultExtent.ymin,
          xmax: defaultExtent && defaultExtent.xmax,
          ymax: defaultExtent && defaultExtent.ymax,
          spatialReference: { wkid: defaultExtent.spatialReference.wkid }
        })
      }
    )

    const defaultWebmap = new this.WebMap({
      portalItem: {
        id: this.props.defaultMapInfo.defaultMapId,
        portal: {
          url: this.props.baseWidgetProps.portalUrl
        }
      },
      initialViewProperties: new this.InitialViewProperties({
        spatialReference: defaultExtent && defaultExtent.spatialReference,
        viewpoint: tempViewPoint
      })
    })

    return defaultWebmap
  }

  initMapView = async (): Promise<void> => {
    this.extentWatch = null
    this.fatalErrorWatch = null

    if (this.mapView && !this.isRequestingMap) {
      return await Promise.resolve()
    }

    if (this.isRequestingMap) {
      return
    }

    this.isRequestingMap = true

    let mapViewOption: __esri.MapViewProperties
    if (this.props.isDefaultMap) {
      const defaultMap = this.getDefaultWebMap()
      mapViewOption = {
        map: defaultMap,
        container: this.mapContainer,
        viewpoint: this.getInitViewPointForDefaultWebMap(),
        rotation: this.props.baseWidgetProps.config.initialMapState && this.props.baseWidgetProps.config.initialMapState.rotation
      }
    } else {
      const tempWebmap = await this.cloneMap()

      if (this.props.baseWidgetProps.config.initialMapState) {
        mapViewOption = {
          map: tempWebmap,
          container: this.mapContainer,
          viewpoint: this.props.baseWidgetProps.config.initialMapState &&
            this.generateViewPointFromInitialMapState(this.props.baseWidgetProps.config.initialMapState)
        }
      } else {
        mapViewOption = {
          map: tempWebmap,
          container: this.mapContainer
        }
      }
    }

    if (!window.jimuConfig.isInBuilder) {
      if (this.props.baseWidgetProps.queryObject[this.props.baseWidgetProps.id]) {
        const extentStr = this.props.baseWidgetProps.queryObject[this.props.baseWidgetProps.id].substr('extent='.length)
        let extent
        try {
          extent = new this.Extent(JSON.parse(extentStr))
        } catch (err) {
          console.error('Bad extent URL parameter.')
        }

        if (extent) {
          mapViewOption.extent = extent
        }
      }
    }

    if (this.mapView) {
      return await Promise.resolve()
    }

    this.mapView = new this.MapView(mapViewOption)
    this.mapView.popup.spinnerEnabled = false

    const ui = this.mapView.ui as any
    ui.exbMapTools = {}

    if (this.props.isDefaultMap || (this.mapDs && this.mapDs.id === this.props.dataSourceId)) {
      this.createJimuMapView()
    }

    this.mapView.when(() => {
      // after view is loaded, send extent change message
      this.setState({ mapLoadStatus: MapLoadStatus.Loadok }, () => {
        this.props.onMapLoaded(this.props.dataSourceId, MapLoadStatus.Loadok)
      })

      if (!this.extentWatch) {
        // Should listen extentChange event when all layers are loaded, otherwise the callback will be called
        // several times while view loading.
        const startWatchExtentChangePromise = Promise.allSettled(this.mapView.map.allLayers.map(async layer => {
          return await this.mapView.whenLayerView(layer)
        })).then(() => {
          return true
        }).catch(() => {
          return true
        })

        startWatchExtentChangePromise.then(() => {
          this.extentWatch = this.mapView.watch('extent', (extent: __esri.Extent) => {
            if (!extent) {
              return
            }

            clearTimeout(this.onExtented)
            this.onExtented = setTimeout(() => {
              if (!extent) {
                return
              }

              if ((this.mapView as any).isReceiveExtentChange) {
                (this.mapView as any).isReceiveExtentChange = false
              } else {
                const extentMessage = new ExtentChangeMessage(this.props.baseWidgetProps.id, extent)
                extentMessage.addRelatedWidgetId(this.props.baseWidgetProps.id)
                this.props.onExtentChanged(this.props.dataSourceId, extentMessage)
              }
            }, 200)
          })
        })
      }

      if (!this.fatalErrorWatch) {
        this.fatalErrorWatch = this.mapView.watch('fatalError', (error) => {
          if (error) {
            if (!(this.mapView as any).isInCaching) {
              console.error('Fatal Error! View has lost its WebGL context. Attempting to recover...')
              this.mapView.tryFatalErrorRecovery()
            } else {
              this.setState({
                isMapCrashed: true
              })
            }
          }
        })
      }

      // If there is an extent is passed from extentMessage before, don't init extent here as this will publish
      // extentMessage and change other mapWidget's extent.
      if (!this.props.baseWidgetProps?.mutableStateProps?.zoomToFeatureActionValue?.value) {
        this.goHome(false).then(() => {
          const extentMessage = new ExtentChangeMessage(this.props.baseWidgetProps.id, this.mapView.extent)
          extentMessage.addRelatedWidgetId(this.props.baseWidgetProps.id)
          this.props.onExtentChanged(this.props.dataSourceId, extentMessage)
          this.props.onViewChanged && this.props.onViewChanged({ dataSourceId: this.props.dataSourceId, viewpoint: this.mapView.viewpoint.clone() })
        })
      }
    })

    this.isRequestingMap = false
    this.bindMapBaseViewEvent(this.mapView)
    return Promise.resolve()
  }

  initSceneView = async (): Promise<void> => {
    this.extentWatch = null
    this.fatalErrorWatch = null

    if (this.sceneView && !this.isRequestingMap) {
      return await Promise.resolve()
    }

    if (this.isRequestingMap) {
      return
    }

    this.isRequestingMap = true

    const tempWebScene = await this.cloneMap()

    const mapViewOption: __esri.SceneViewProperties = {
      map: tempWebScene,
      container: this.mapContainer
    }

    if (this.props.baseWidgetProps.config.initialMapState) {
      mapViewOption.viewpoint = this.props.baseWidgetProps.config.initialMapState &&
          this.generateViewPointFromInitialMapState(this.props.baseWidgetProps.config.initialMapState)
    }

    const sceneQualityMode = this.props.baseWidgetProps.config.sceneQualityMode
    if (sceneQualityMode && sceneQualityMode !== SceneQualityMode.auto) {
      mapViewOption.qualityProfile = sceneQualityMode
    } else {
      // use 'low' as default value
      mapViewOption.qualityProfile = SceneQualityMode.low
    }

    if (this.sceneView) {
      return await Promise.resolve()
    }
    this.sceneView = new this.SceneView(mapViewOption)
    this.sceneView.popup.spinnerEnabled = false

    const ui = this.sceneView.ui as any
    ui.exbMapTools = {}

    if (this.mapDs && this.mapDs.id === this.props.dataSourceId) {
      this.createJimuMapView()
    }

    this.sceneView.when(() => {
      // after view is loaded, send extent change message
      this.setState({ mapLoadStatus: MapLoadStatus.Loadok }, () => {
        this.props.onMapLoaded(this.props.dataSourceId, MapLoadStatus.Loadok)
      })

      if (!this.extentWatch) {
        // Should listen extentChange event when all layers are loaded, otherwise the callback will be called
        // several times while view loading.
        const startWatchExtentChangePromise = Promise.allSettled(this.sceneView.map.allLayers.map(async layer => {
          return await this.sceneView.whenLayerView(layer)
        })).then(() => {
          return true
        }).catch(() => {
          return true
        })

        startWatchExtentChangePromise.then(() => {
          this.extentWatch = this.sceneView.watch('extent', (extent: __esri.Extent) => {
            if (!extent) {
              return
            }

            clearTimeout(this.onExtented)
            this.onExtented = setTimeout(() => {
              if (!extent) {
                return
              }

              if ((this.sceneView as any).isReceiveExtentChange) {
                (this.sceneView as any).isReceiveExtentChange = false
              } else {
                const extentMessage = new ExtentChangeMessage(this.props.baseWidgetProps.id, extent)
                extentMessage.addRelatedWidgetId(this.props.baseWidgetProps.id)
                this.props.onExtentChanged(this.props.dataSourceId, extentMessage)
              }
            }, 100)
          })
        })
      }

      if (!this.fatalErrorWatch) {
        this.fatalErrorWatch = this.sceneView.watch('fatalError', (error) => {
          if (error) {
            if (!(this.sceneView as any).isInCaching) {
              this.sceneView.tryFatalErrorRecovery()
              console.error('Fatal Error! View has lost its WebGL context. Attempting to recover...')
            } else {
              this.setState({
                isMapCrashed: true
              })
            }
          }
        })
      }

      // If there is an extent is passed from extentMessage before, don't init extent here as this will publish
      // extentMessage and change other mapWidget's extent.
      if (!this.props.baseWidgetProps?.mutableStateProps?.zoomToFeatureActionValue?.value) {
        this.goHome(false).then(() => {
          const extentMessage = new ExtentChangeMessage(this.props.baseWidgetProps.id, this.sceneView.extent)
          extentMessage.addRelatedWidgetId(this.props.baseWidgetProps.id)
          this.props.onExtentChanged(this.props.dataSourceId, extentMessage)
          this.props.onViewChanged && this.props.onViewChanged({ dataSourceId: this.props.dataSourceId, viewpoint: this.sceneView.viewpoint.clone() })
        })
      }
    })

    this.isRequestingMap = false
    this.bindMapBaseViewEvent(this.sceneView)
    return Promise.resolve()
  }

  updateMapView = (config: IMConfig): void => {
    const jimuMapViewId = `${this.props.baseWidgetProps.id}-${this.props.dataSourceId}`
    let jimuMapView: JimuMapView = null
    if (jimuMapViewId) {
      jimuMapView = MapViewManager.getInstance().getJimuMapViewById(jimuMapViewId)
    }

    if (!(jimuMapView && jimuMapView.getIsEditing())) {
      if (config.disablePopUp) {
        this.mapView.popup.close()
        this.mapView.popup.autoOpenEnabled = false
      } else {
        this.mapView.popup.autoOpenEnabled = true
      }

      if (jimuMapView) {
        (jimuMapView as any).isEnablePopup = !config.disablePopUp
      }
    }

    if (config.selectionHighlightColor) {
      this.mapView.highlightOptions.color = new this.Color(config.selectionHighlightColor)
    }

    if (!this.mapView.ui) {
      return
    }

    this.mapView.ui.components = []
  }

  updateSceneView = (config: IMConfig): void => {
    const jimuMapViewId = `${this.props.baseWidgetProps.id}-${this.props.dataSourceId}`

    let jimuMapView: JimuMapView = null
    if (jimuMapViewId) {
      jimuMapView = MapViewManager.getInstance().getJimuMapViewById(jimuMapViewId)
    }

    if (!(jimuMapView && jimuMapView.getIsEditing())) {
      if (config.disablePopUp) {
        this.sceneView.popup.close()
        this.sceneView.popup.autoOpenEnabled = false
      } else {
        this.sceneView.popup.autoOpenEnabled = true
      }

      if (jimuMapView) {
        (jimuMapView as any).isEnablePopup = !config.disablePopUp
      }
    }

    if (config.selectionHighlightColor) {
      this.sceneView.highlightOptions.color = new this.Color(config.selectionHighlightColor)
    }

    const sceneQualityMode = config.sceneQualityMode
    if (sceneQualityMode && sceneQualityMode !== this.sceneView.qualityProfile) {
      this.sceneView.qualityProfile = sceneQualityMode as 'low' | 'medium' | 'high'
    }

    if (!this.sceneView.ui) {
      return
    }

    this.sceneView.ui.components = []
  }

  bindMapBaseViewEvent = (mapBaseView: __esri.MapView | __esri.SceneView) => {
    if (mapBaseView) {
      if (this.mapBaseViewEventHandles['mouse-wheel']) {
        this.mapBaseViewEventHandles['mouse-wheel'].remove()
        this.mapBaseViewEventHandles['mouse-wheel'] = null
      }

      this.mapBaseViewEventHandles['mouse-wheel'] = mapBaseView.on('mouse-wheel', (e) => {
        if (this.props.baseWidgetProps.config.disableScroll) {
          e.stopPropagation()
          this.handleDisableWheel()
          return
        }

        this.props.onViewChanged && this.props.onViewChanged({ dataSourceId: this.props.dataSourceId, viewpoint: mapBaseView.viewpoint.clone() })
      })

      if (this.mapBaseViewEventHandles.drag) {
        this.mapBaseViewEventHandles.drag.remove()
        this.mapBaseViewEventHandles.drag = null
      }

      this.mapBaseViewEventHandles.drag = mapBaseView.on('drag', () => {
        this.props.onViewChanged && this.props.onViewChanged({ dataSourceId: this.props.dataSourceId, viewpoint: mapBaseView.viewpoint.clone() })
      })

      if (this.mapBaseViewEventHandles.click) {
        this.mapBaseViewEventHandles.click.remove()
        this.mapBaseViewEventHandles.click = null
      }

      this.mapBaseViewEventHandles.click = mapBaseView.on('click', () => {
        for (const key in this.highLightHandles) {
          this.highLightHandles[key].remove()
        }
      })
    }
  }

  // onShowOnMapDataChanged = (showOnMapDatasKey) => {
  //  this.setState({
  //    showOnMapDatasKey: showOnMapDatasKey
  //  })
  // }

  createJimuMapView = () => {
    MapViewManager.getInstance().createJimuMapView({
      mapWidgetId: this.props.baseWidgetProps.id,
      dataSourceId: this.props.dataSourceId,
      view: this.mapView || this.sceneView,
      isEnablePopup: this.props.baseWidgetProps.config && !this.props.baseWidgetProps.config.disablePopUp
      // onShowOnMapDataChanged: this.props.onShowOnMapDataChanged
    } as JimuMapViewConstructorOptions)

    const mapBaseView = this.mapView || this.sceneView
    if (mapBaseView) {
      mapBaseView.when(() => {
        const tempJimuMapViewId = `${this.props.baseWidgetProps.id}-${this.props.dataSourceId}`
        const tempJimuMapView = MapViewManager.getInstance().getJimuMapViewById(tempJimuMapViewId)
        if (tempJimuMapView) {
          if (tempJimuMapView.view) {
            tempJimuMapView.whenJimuMapViewLoaded().then(() => {
              if (!tempJimuMapView.view) {
                MapViewManager.getInstance().destroyJimuMapView(tempJimuMapViewId)
                return
              }

              this.props.onJimuMapViewCreated()
              this.setState({
                mapBaseJimuMapView: tempJimuMapView
              })
            })
          } else {
            MapViewManager.getInstance().destroyJimuMapView(tempJimuMapViewId)
          }
        }
      })
    } else {
      const tempJimuMapViewId = `${this.props.baseWidgetProps.id}-${this.props.dataSourceId}`
      MapViewManager.getInstance().destroyJimuMapView(tempJimuMapViewId)
    }
  }

  onDataSourceCreated = (dataSource: MapDataSource): void => {
    this.mapDs = dataSource
    if (this.mapDs.id === this.props.dataSourceId && (this.mapView || this.sceneView)) {
      this.createJimuMapView()
    }

    this.setState({
      isMapCrashed: false
    })
  }

  onCreateDataSourceFailed = (err): void => {
    console.warn(err)
    this.mapDs = null

    this.setState({
      mapLoadStatus: MapLoadStatus.LoadError,
      isMapCrashed: false
    }, () => {
      this.props.onMapLoaded(this.props.dataSourceId, MapLoadStatus.LoadError)
      this.createJimuMapView()
    })
  }

  setViewPoint = (viewPoint): void => {
    if (!viewPoint || !this.getDsJsonFromDsId(this.props.dataSourceId)) {
      return
    }

    if (this.getDsJsonFromDsId(this.props.dataSourceId).type === DataSourceTypes.WebMap) {
      if (this.mapView) {
        this.mapView.viewpoint = viewPoint
      }
    }

    if (this.getDsJsonFromDsId(this.props.dataSourceId).type === DataSourceTypes.WebScene) {
      if (this.sceneView) {
        this.sceneView.viewpoint = viewPoint
      }
    }
  }

  getMapLoadStatus = (): MapLoadStatus => {
    return this.state.mapLoadStatus
  }

  getViewPoint = (): __esri.Viewpoint => {
    if (!this.getDsJsonFromDsId(this.props.dataSourceId)) {
      return null
    }

    if (this.getDsJsonFromDsId(this.props.dataSourceId).type === DataSourceTypes.WebMap) {
      return this.mapView && this.mapView.viewpoint ? this.mapView.viewpoint.clone() : null
    }

    if (this.getDsJsonFromDsId(this.props.dataSourceId).type === DataSourceTypes.WebScene) {
      if (this.sceneView && this.sceneView.viewpoint) {
        // For scene, the first extent (after scene loaded) is not correct. So we use go to camera to get correct extent
        this.sceneView.goTo(this.sceneView.viewpoint.camera, {
          animate: false
        }) as any

        return this.sceneView.viewpoint.clone()
      } else {
        return null
      }
    }
  }

  getViewType = (): string => {
    return this.getDsJsonFromDsId(this.props.dataSourceId).type
  }

  goToTilt = (tilt) => {
    this.sceneView && this.sceneView.goTo({
      tilt: tilt
    })
  }

  goHome = async (useAmination?: boolean): Promise<any> => {
    if (!this.getDsJsonFromDsId(this.props.dataSourceId)) {
      return await Promise.resolve()
    }

    const initViewPoint = this.getMapBaseInitViewPoint()

    if (this.getDsJsonFromDsId(this.props.dataSourceId).type === DataSourceTypes.WebMap) {
      if (this.mapView) {
        return this.mapView.goTo(initViewPoint, {
          animate: useAmination
        }) as any
      }
    }

    if (this.getDsJsonFromDsId(this.props.dataSourceId).type === DataSourceTypes.WebScene) {
      if (this.sceneView) {
        return this.sceneView.goTo(initViewPoint, {
          animate: useAmination
        }) as any
      }
    }

    return await Promise.resolve()
  }

  getMapBaseInitViewPoint = (): __esri.Viewpoint => {
    if (this.props.isDefaultMap) {
      return this.getInitViewPointForDefaultWebMap()
    } else {
      if (this.props.baseWidgetProps.config.initialMapState) {
        return this.generateViewPointFromInitialMapState(this.props.baseWidgetProps.config.initialMapState)
      } else {
        if (this.mapView) {
          return (this.mapView.map as __esri.WebMap)?.initialViewProperties?.viewpoint?.clone()
        }

        if (this.sceneView) {
          return (this.sceneView.map as __esri.WebScene)?.initialViewProperties?.viewpoint?.clone()
        }
      }
    }
  }

  getDsJsonFromDsId = (dataSourceId: string) => {
    const dsJson = getAppStore().getState().appConfig.dataSources[dataSourceId]
    return dsJson || {} as any
  }

  /**
   * handle data/action.
   */
  handleDataAction = (mutableStateProps: ActionRelatedProps, jimuMapView: JimuMapView) => {
    // handle show data on map action
    if (mutableStateProps.showOnMapDatas) {
      jimuMapView.drawDataOnMap(mutableStateProps.showOnMapDatas)
    }
  }

  /**
   * handle message/action.
   */
  handleAction = (mutableStateProps: ActionRelatedProps, mapBaseView: __esri.MapView | __esri.SceneView) => {
    if (mutableStateProps.zoomToFeatureActionValue) {
      if (mutableStateProps.zoomToFeatureActionValue.relatedWidgets &&
        mutableStateProps.zoomToFeatureActionValue.relatedWidgets.includes(this.props.baseWidgetProps.id)) {
        this.props.onMutableStatePropsChanged(this.props.dataSourceId, 'zoomToFeatureActionValue', null)
      } else {
        const tempMapBaseView = mapBaseView as any

        const relatedWidgets = mutableStateProps.zoomToFeatureActionValue.relatedWidgets
          ? mutableStateProps.zoomToFeatureActionValue.relatedWidgets : []

        const zoomToFeatureValue = mutableStateProps.zoomToFeatureActionValue.value
        let layer = null
        if (zoomToFeatureValue.layerId) {
          layer = tempMapBaseView.map.layers.find(layer => layer.id === zoomToFeatureValue.layerId)
        }

        if (zoomToFeatureValue.type === 'zoom-to-extent') {
          tempMapBaseView.isReceiveExtentChange = true
          zoomToUtils.zoomTo(tempMapBaseView, zoomToFeatureValue.features[0], zoomToFeatureValue.zoomToOption).then(() => {
            relatedWidgets.push(this.props.baseWidgetProps.id)
            const extentMessage = new ExtentChangeMessage(this.props.baseWidgetProps.id, tempMapBaseView.extent)
            extentMessage.setRelatedWidgetIds(relatedWidgets)
            this.props.onExtentChanged(this.props.dataSourceId, extentMessage)
          }, () => {
            tempMapBaseView.isReceiveExtentChange = false
          })
        } else {
          let target = null
          if (layer) {
            target = {
              layer: layer,
              graphics: zoomToFeatureValue.features
            }
          } else {
            target = zoomToFeatureValue.features
          }

          processZoomToFeatures(tempMapBaseView, target.layer, (target && target.graphics) ? target.graphics : target).then(
            graphics => {
              if (layer) {
                target.graphics = graphics
              } else {
                target = graphics
              }

              tempMapBaseView.isReceiveExtentChange = true
              zoomToUtils.zoomTo(tempMapBaseView, target, zoomToFeatureValue.zoomToOption).then(() => {
                relatedWidgets.push(this.props.baseWidgetProps.id)
                const extentMessage = new ExtentChangeMessage(this.props.baseWidgetProps.id, tempMapBaseView.extent)
                extentMessage.setRelatedWidgetIds(relatedWidgets)
                this.props.onExtentChanged(this.props.dataSourceId, extentMessage)
              }, () => {
                tempMapBaseView.isReceiveExtentChange = false
              })
            }
          )
        }

        this.props.onMutableStatePropsChanged(this.props.dataSourceId, 'zoomToFeatureActionValue', null)
      }
    }

    if (mutableStateProps.panToActionValue) {
      if (mutableStateProps.panToActionValue.relatedWidgets &&
        mutableStateProps.panToActionValue.relatedWidgets.includes(this.props.baseWidgetProps.id)) {
        this.props.onMutableStatePropsChanged(this.props.dataSourceId, 'panToActionValue', null)
      } else {
        const tempMapBaseView = mapBaseView as any
        const relatedWidgets = mutableStateProps.panToActionValue.relatedWidgets
          ? mutableStateProps.panToActionValue.relatedWidgets : []

        const panToValue = mutableStateProps.panToActionValue.value as any
        projectGeometries(panToValue.features, tempMapBaseView.spatialReference).then((geometries) => {
          mapPanto(mapBaseView, geometries).then(() => {
            (mapBaseView as any).isReceiveExtentChange = true
            relatedWidgets.push(this.props.baseWidgetProps.id)
            const extentMessage = new ExtentChangeMessage(this.props.baseWidgetProps.id, tempMapBaseView.extent)
            extentMessage.setRelatedWidgetIds(relatedWidgets)
            this.props.onExtentChanged(this.props.dataSourceId, extentMessage)
          }, () => {
            (mapBaseView as any).isReceiveExtentChange = true
          })
        })
      }

      (mapBaseView as any).isReceiveExtentChange = true
      this.props.onMutableStatePropsChanged(this.props.dataSourceId, 'panToActionValue', null)
    }

    if (mutableStateProps.newFeatureSetActionValue && !mutableStateProps.newFeatureSetActionValue.promise) {
      const createNewFeaturelayerPromise = createNewFeaturelayer(mapBaseView, mutableStateProps.newFeatureSetActionValue.value)
      if (createNewFeaturelayerPromise) {
        this.props.onMutableStatePropsChanged(this.props.dataSourceId, 'newFeatureSetActionValue.promise', createNewFeaturelayerPromise)

        createNewFeaturelayerPromise.then(() => {
          this.props.onMutableStatePropsChanged(this.props.dataSourceId, 'newFeatureSetActionValue', null)
        })
      } else {
        this.props.onMutableStatePropsChanged(this.props.dataSourceId, 'newFeatureSetActionValue', null)
      }
    }

    if (mutableStateProps.changedFeatureSetActionValue) {
      updateFeaturelayer(mapBaseView, mutableStateProps.changedFeatureSetActionValue)
      this.props.onMutableStatePropsChanged(this.props.dataSourceId, 'changedFeatureSetActionValue', null)
    }

    if (mutableStateProps.selectFeatureActionValue) {
      mapBaseView.popup.close()

      for (const key in this.highLightHandles) {
        this.highLightHandles[key].remove()
      }

      const selectFeatureHandle = selectFeature(mapBaseView, mutableStateProps.selectFeatureActionValue)
      if (selectFeatureHandle) {
        this.highLightHandles[selectFeatureHandle.layerId] = selectFeatureHandle.handle
      }

      setTimeout(() => {
        this.props.onMutableStatePropsChanged(this.props.dataSourceId, 'selectFeatureActionValue', null)
      }, 500)
    }

    const mutableStatePropsKeys = Object.keys(mutableStateProps)
    mutableStatePropsKeys.some(actionKey => {
      const tempJimuMapViewId = `${this.props.baseWidgetProps.id}-${this.props.dataSourceId}`
      const tempJimuMapView = MapViewManager.getInstance().getJimuMapViewById(tempJimuMapViewId)

      // handle flash action
      if(actionKey.indexOf('flashActionValue-') === 0 && mutableStateProps[actionKey]) {
        mutableStateProps[actionKey].querySQL && flashFeaturesByQuery(tempJimuMapView, mutableStateProps[actionKey].layerDataSourceId, mutableStateProps[actionKey].querySQL)
        this.props.onMutableStatePropsChanged(this.props.dataSourceId, actionKey, null)
      }

      // handle filter action
      if(actionKey.indexOf('filterActionValue-') === 0 && mutableStateProps[actionKey]) {
        mutableStateProps[actionKey].querySQL?.length >= 0 && filterFeaturesByQuery(tempJimuMapView, mutableStateProps[actionKey].layerDataSourceId, mutableStateProps[actionKey].querySQL)
        this.props.onMutableStatePropsChanged(this.props.dataSourceId, actionKey, null)
      }

    })
  }

  formatMessage = (id: string) => {
    return this.props.baseWidgetProps.intl.formatMessage({ id: id, defaultMessage: defaultMessages[id] })
  }

  handleDisableWheel = () => {
    this.widgetContainer.style.pointerEvents = 'none'
    setTimeout(() => {
      this.widgetContainer.style.pointerEvents = 'auto'
    }, 50)
  }

  getMapSwitchForErrorMap = () => {
    return (
      <MultiSourceMapContext.Consumer>
        {({ isShowMapSwitchBtn, dataSourceIds, activeDataSourceId, switchMap }) => (
          <div
            className='mapswitch-container' style={{
              display: isShowMapSwitchBtn ? 'block' : 'none',
              marginBottom: this.props.widthBreakpoint === 'xsmall' ? 10 : 0
            }}
          >
            <div onClick={(e) => { e.preventDefault(); switchMap() }} className='jimu-widget esri-widget--button'>
              <Icon icon={Exchange} width={16} height={16} className='mapswitch-icon' />
            </div>
          </div>
        )}
      </MultiSourceMapContext.Consumer>
    )
  }

  recoverMap = () => {
    if (this.mapView) {
      this.mapView.tryFatalErrorRecovery()
      this.setState({
        isMapCrashed: false
      })
    }

    if (this.sceneView) {
      this.sceneView.tryFatalErrorRecovery()
      this.setState({
        isMapCrashed: false
      })
    }
  }

  render () {
    let useDataSource = null

    if (this.props.baseWidgetProps.useDataSources) {
      for (let i = 0; i < this.props.baseWidgetProps.useDataSources.length; i++) {
        if (this.props.baseWidgetProps.useDataSources[i].dataSourceId == this.props.dataSourceId) {
          useDataSource = this.props.baseWidgetProps.useDataSources[i]
        }
      }
    }

    return (
      <div className='jimu-widget' style={{ position: 'relative' }} ref={ref => { this.widgetContainer = ref }}>
        {(this.state.mapLoadStatus === MapLoadStatus.Loading) &&
          <div className='jimu-widget widget-map-background'>
            <div style={{ position: 'absolute', left: '50%', top: '50%' }} className='jimu-secondary-loading' />
          </div>}
        {(this.state.mapLoadStatus === MapLoadStatus.LoadError) &&
          <div className='jimu-widget widget-map-background'>
            {this.getMapSwitchForErrorMap()}
            <div className='jimu-widget d-flex justify-content-center align-items-center'>{this.formatMessage('mapFailure')}</div>
          </div>}
        {/* {(this.state.isMapCrashed && !checkIsLive(this.props.baseWidgetProps.appMode)) && <div className="w-100 h-100 d-flex justify-content-center align-items-center widget-map-crashed">
        <div>
          <div className="widget-map-crashed-label widget-map-crashed-label-padding">{this.formatMessage('mapCrash')}</div>
          <div className="w-100 d-flex justify-content-center pt-3">
            <Button size="sm" className="widget-map-crashed-label" onClick={() => {this.recoverMap()}}>{this.formatMessage('mapRecover')}</Button>
          </div>
        </div>
      </div>} */}
        {!this.props.isDefaultMap && <div style={{ position: 'absolute', display: 'none' }}><DataSourceComponent
          useDataSource={useDataSource}
          onDataSourceCreated={this.onDataSourceCreated} onCreateDataSourceFailed={this.onCreateDataSourceFailed}
        />
                                     </div>}
      </div>
    )
  }
}
