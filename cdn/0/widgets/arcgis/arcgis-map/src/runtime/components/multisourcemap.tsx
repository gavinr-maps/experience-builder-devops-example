/* eslint-disable react/no-direct-mutation-state */
import {
  React, classNames, MessageManager, ImmutableArray, Immutable,
  getAppStore, appActions, MutableStoreManager, ExtentChangeMessage, UseDataSource, ImmutableObject, IMJimuMapViewInfo
} from 'jimu-core'
import MapBase, { MapLoadStatus, ShareViewPoint } from './mapbase'
import { MultiSourceMapContext } from './multisourcemap-context'
import { MapWidgetProps } from '../widget'
import { MapViewManager, JimuMapView, JimuMapViewGroup, JimuMapViewComponent, DefaultMapInfo, ShowOnMapDataType } from 'jimu-arcgis'
import MapFixedLayout from '../layout/map-fixed-layout'
import Layout, { ActiveToolInfo } from '../layout/layout'
import pcLayoutJsons from '../layout/pc-layout-json'
import mobileLayoutJsons from '../layout/mobile-layout-json'

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
  defaultMapInfo?: DefaultMapInfo
}

interface MapContainerStyle {
  opacity: number
  zIndex: number
}

interface State {
  currentMapIndex?: 0 | 1
  multiMapStyle?: MapContainerStyle[]
  firstMapDsId?: string
  secondMapDsId?: string
  useAnimation: boolean

  useDataSources?: ImmutableArray<UseDataSource>
  currentJimuMapViewId?: string
  mobilePanelContent: JSX.Element
  mobilePanelContainer: HTMLDivElement
  activeToolInfo: ActiveToolInfo
  // showOnMapDatasKey: string[]
}

const VisibleStyles = {
  firstMapVisible: [{
    zIndex: 6,
    opacity: 1
  }, {
    zIndex: 5,
    opacity: 0
  }],
  secondMapVisible: [{
    zIndex: 5,
    opacity: 0
  }, {
    zIndex: 6,
    opacity: 1
  }]
}

export default class MultiSourceMap extends React.PureComponent<Props, State> {
  isReIniting: boolean
  mutableStatePropsMap: {[propKey: string]: string[]} = {}
  useMapWidgetIds: ImmutableArray<string>
  __unmount = false

  constructor (props) {
    super(props)

    const restoreData = MutableStoreManager.getInstance().getStateValue([this.props.baseWidgetProps.id, 'restoreData',
      `${this.props.baseWidgetProps.id}-restoreData-multimap`])
    if (restoreData) {
      const mobilePanelContainer = document.createElement('div')
      mobilePanelContainer.id = `${this.props.baseWidgetProps.id}-bottom-panel`
      mobilePanelContainer.className = 'w-100 h-100'
      restoreData.mobilePanelContainer = mobilePanelContainer

      this.reInitWidgetInstance(restoreData)

      MutableStoreManager.getInstance().updateStateValue(this.props.baseWidgetProps.id,
        `restoreData.${this.props.baseWidgetProps.id}-restoreData-multimap`, null)
    } else {
      const mobilePanelContainer = document.createElement('div')
      mobilePanelContainer.id = `${this.props.baseWidgetProps.id}-bottom-panel`
      mobilePanelContainer.className = 'w-100 h-100'

      this.state = {
        currentMapIndex: 0,
        multiMapStyle: VisibleStyles.firstMapVisible,
        firstMapDsId: null,
        secondMapDsId: null,
        useAnimation: false,
        useDataSources: null,
        currentJimuMapViewId: null,
        mobilePanelContent: null,
        mobilePanelContainer: mobilePanelContainer,
        activeToolInfo: null
        // showOnMapDatasKey: null
      }
    }

    this.mutableStatePropsMap = {}
    this.useMapWidgetIds = this.props.baseWidgetProps.id ? Immutable([this.props.baseWidgetProps.id]) : Immutable([])
  }

  reInitWidgetInstance = (restoreData) => {
    this.state = restoreData as State
    this.isReIniting = true
  }

  componentDidMount () {
    if (getAppStore().getState().mapWidgetsInfo) {
      if (!getAppStore().getState().mapWidgetsInfo[this.props.baseWidgetProps.id]) {
        getAppStore().dispatch(appActions.MapWidgetInfoAdded(this.props.baseWidgetProps.id, Immutable({ mapWidgetId: this.props.baseWidgetProps.id })))
      }
    }

    this.__unmount = false

    if (this.isReIniting) {
      return
    }

    if (this.props.baseWidgetProps.useDataSources) {
      const initialMapDataSourceID = this.props.baseWidgetProps.config.initialMapDataSourceID
      if (!initialMapDataSourceID) {
        this.setState({
          firstMapDsId: this.props.baseWidgetProps.useDataSources[0] && this.props.baseWidgetProps.useDataSources[0].dataSourceId,
          secondMapDsId: this.props.baseWidgetProps.useDataSources[1] && this.props.baseWidgetProps.useDataSources[1].dataSourceId
        })
      } else {
        if (initialMapDataSourceID === (this.props.baseWidgetProps.useDataSources[0] && this.props.baseWidgetProps.useDataSources[0].dataSourceId)) {
          this.setState({
            firstMapDsId: this.props.baseWidgetProps.useDataSources[0] && this.props.baseWidgetProps.useDataSources[0].dataSourceId,
            secondMapDsId: this.props.baseWidgetProps.useDataSources[1] && this.props.baseWidgetProps.useDataSources[1].dataSourceId
          })
        } else if (initialMapDataSourceID === (this.props.baseWidgetProps.useDataSources[1] && this.props.baseWidgetProps.useDataSources[1].dataSourceId)) {
          this.setState({
            firstMapDsId: this.props.baseWidgetProps.useDataSources[1] && this.props.baseWidgetProps.useDataSources[1].dataSourceId,
            secondMapDsId: this.props.baseWidgetProps.useDataSources[0] && this.props.baseWidgetProps.useDataSources[0].dataSourceId
          })
        } else {
          this.setState({
            firstMapDsId: this.props.baseWidgetProps.useDataSources[0] && this.props.baseWidgetProps.useDataSources[0].dataSourceId,
            secondMapDsId: this.props.baseWidgetProps.useDataSources[1] && this.props.baseWidgetProps.useDataSources[1].dataSourceId
          })
        }
      }
    }
  }

  componentWillUnmount () {
    this.__unmount = true
    const widgets = getAppStore().getState().appConfig.widgets

    if (widgets[this.props.baseWidgetProps.id] && widgets[this.props.baseWidgetProps.id].useDataSources === this.props.baseWidgetProps.useDataSources) {
      const restoreData = {
        currentMapIndex: this.state.currentMapIndex,
        multiMapStyle: this.state.multiMapStyle,
        firstMapDsId: this.state.firstMapDsId,
        secondMapDsId: this.state.secondMapDsId,
        useAnimation: this.state.useAnimation,
        currentJimuMapViewId: this.state.currentJimuMapViewId
      }
      MutableStoreManager.getInstance().updateStateValue(this.props.baseWidgetProps.id,
        `restoreData.${this.props.baseWidgetProps.id}-restoreData-multimap`, restoreData)
    }

    if (!widgets[this.props.baseWidgetProps.id]) {
      getAppStore().dispatch(appActions.MapWidgetInfoRemoved(this.props.baseWidgetProps.id))
    }
  }

  static getChangedState = (firstMapDsId, secondMapDsId, useDataSources): State => {
    const changedState = {} as State

    if (useDataSources && useDataSources[0]) {
      const newDataSourceArr = []
      const repeatDataSourceArr = []
      for (let i = 0; i < useDataSources.length; i++) {
        if (firstMapDsId !== useDataSources[i].dataSourceId) {
          newDataSourceArr.push(useDataSources[i].dataSourceId)
        } else {
          repeatDataSourceArr.push(useDataSources[i].dataSourceId)
        }
      }
      if (repeatDataSourceArr.length > 0) {
        changedState.firstMapDsId = firstMapDsId
        changedState.secondMapDsId = newDataSourceArr[0]
      } else if (repeatDataSourceArr.length === 0) {
        if (newDataSourceArr.includes(secondMapDsId)) {
          newDataSourceArr.splice(newDataSourceArr.indexOf(secondMapDsId), 1)
          changedState.firstMapDsId = newDataSourceArr[0]
          changedState.secondMapDsId = secondMapDsId
        } else {
          changedState.firstMapDsId = newDataSourceArr[0]
          changedState.secondMapDsId = newDataSourceArr[1]
        }
      }
    } else {
      changedState.firstMapDsId = null
      changedState.secondMapDsId = null
    }

    if (changedState.firstMapDsId !== firstMapDsId) {
      if (changedState.firstMapDsId) {
        changedState.multiMapStyle = VisibleStyles.firstMapVisible
        changedState.currentMapIndex = 0
      } else if (changedState.secondMapDsId) {
        changedState.multiMapStyle = VisibleStyles.secondMapVisible
        changedState.currentMapIndex = 1
      } else {
        changedState.multiMapStyle = VisibleStyles.firstMapVisible
        changedState.currentMapIndex = 0
      }
    } else {
      if (!changedState.secondMapDsId) {
        changedState.multiMapStyle = VisibleStyles.firstMapVisible
        changedState.currentMapIndex = 0
      } else if (changedState.secondMapDsId !== secondMapDsId) {
        changedState.multiMapStyle = VisibleStyles.secondMapVisible
        changedState.currentMapIndex = 1
      }
    }
    return changedState
  }

  static getDerivedStateFromProps (newProps: Props, prevState: State) {
    if (newProps.baseWidgetProps.useDataSources !== prevState.useDataSources) {
      const newState = MultiSourceMap.getChangedState(prevState.firstMapDsId, prevState.secondMapDsId, newProps.baseWidgetProps.useDataSources)
      return newState
    } else {
      return null
    }
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    if (this.props.baseWidgetProps.stateProps && this.props.baseWidgetProps.stateProps.initialMapDataSourceID) {
      const initialMapDataSourceID = this.props.baseWidgetProps.stateProps.initialMapDataSourceID
      if (this.state.firstMapDsId === initialMapDataSourceID) {
        const firstMapInstance = this.refs.firstMapInstance as MapBase
        if (firstMapInstance) {
          firstMapInstance.goHome(false)
        }
      }
      if (this.state.secondMapDsId === initialMapDataSourceID) {
        const secondMapInstance = this.refs.secondMapInstance as MapBase
        if (secondMapInstance) {
          secondMapInstance.goHome(false)
        }
      }
      this.props.baseWidgetProps.dispatch(appActions.widgetStatePropChange(this.props.baseWidgetProps.id,
        'initialMapDataSourceID', null))
    }

    if (this.isReIniting) {
      this.isReIniting = false
      return
    }

    if (this.props.baseWidgetProps.config.initialMapDataSourceID !== prevProps.baseWidgetProps.config.initialMapDataSourceID) {
      this.changeInitialMapDataSourceID(this.props.baseWidgetProps.config.initialMapDataSourceID, this.confirmJimuMapViewIsActive)
    }

    if (this.props.baseWidgetProps.useDataSources !== prevProps.baseWidgetProps.useDataSources) {
      this.confirmJimuMapViewIsActive()
    }
  }

  changeInitialMapDataSourceID = (dataSourceId: string, callBack?: any) => {
    if (this.props.baseWidgetProps.useDataSources && this.props.baseWidgetProps.useDataSources.length > 1) {
      const firstMapInstance = this.refs.firstMapInstance as MapBase
      const secondMapInstance = this.refs.secondMapInstance as MapBase

      if (!this.state.currentMapIndex) {
        if (this.state.secondMapDsId && this.state.secondMapDsId === dataSourceId) {
          this.startChangeInitialMapAnimation(callBack)
          secondMapInstance.goHome(false)
        } else {
          firstMapInstance.goHome(false)
        }
      } else {
        if (this.state.firstMapDsId && this.state.firstMapDsId === dataSourceId) {
          this.startChangeInitialMapAnimation(callBack)
          firstMapInstance.goHome(false)
        } else {
          secondMapInstance.goHome(false)
        }
      }
    }
  }

  startChangeInitialMapAnimation = (callBack?: any) => {
    const tempState = Object.assign({}, this.state) as any

    const firstMapInstance = this.refs.firstMapInstance as MapBase
    const secondMapInstance = this.refs.secondMapInstance as MapBase
    if (!this.state.currentMapIndex) {
      tempState.currentMapIndex = 1
      tempState.multiMapStyle = VisibleStyles.secondMapVisible

      const viewPoint = firstMapInstance && firstMapInstance.getViewPoint && firstMapInstance.getViewPoint()
      if (viewPoint) {
        secondMapInstance && secondMapInstance.setViewPoint && secondMapInstance.setViewPoint(viewPoint)
      }
      this.setState(tempState, () => { callBack() })
    } else {
      tempState.currentMapIndex = 0
      tempState.multiMapStyle = VisibleStyles.firstMapVisible

      const viewPoint = secondMapInstance && secondMapInstance.getViewPoint && secondMapInstance.getViewPoint()
      if (viewPoint) {
        firstMapInstance && firstMapInstance.setViewPoint && firstMapInstance.setViewPoint(viewPoint)
      }
      this.setState(tempState, () => { callBack() })
    }
  }

  switchMap = async (): Promise<any> => {
    if (!this.props.baseWidgetProps.useDataSources || this.props.baseWidgetProps.useDataSources.length < 2) {
      return await Promise.resolve()
    }

    const tempState = Object.assign({}, this.state) as any
    tempState.useAnimation = true

    const firstMapInstance = this.refs.firstMapInstance as MapBase
    const secondMapInstance = this.refs.secondMapInstance as MapBase

    if (!this.state.currentMapIndex) {
      tempState.currentMapIndex = 1
      tempState.multiMapStyle = VisibleStyles.secondMapVisible

      const viewPoint = firstMapInstance && firstMapInstance.getViewPoint && firstMapInstance.getViewPoint()
      if (viewPoint) {
        secondMapInstance && secondMapInstance.setViewPoint && secondMapInstance.setViewPoint(viewPoint)
      }
    } else {
      tempState.currentMapIndex = 0
      tempState.multiMapStyle = VisibleStyles.firstMapVisible

      const viewPoint = secondMapInstance && secondMapInstance.getViewPoint && secondMapInstance.getViewPoint()
      if (viewPoint) {
        firstMapInstance && firstMapInstance.setViewPoint && firstMapInstance.setViewPoint(viewPoint)
      }
    }

    if (firstMapInstance && secondMapInstance) {
      const firstViewType = firstMapInstance.getViewType()
      const secondViewType = secondMapInstance.getViewType()
      if (firstViewType && secondViewType && (firstViewType !== secondViewType)) {
        firstMapInstance.goToTilt(0)
        secondMapInstance.goToTilt(0)

        if (this.state.currentMapIndex) {
          setTimeout(() => {
            firstMapInstance.goToTilt(45)
          }, 300)
        } else {
          setTimeout(() => {
            secondMapInstance.goToTilt(45)
          }, 300)
        }
      }
    }

    return new Promise((resolve, reject) => {
      this.setState(tempState, () => {
        this.confirmJimuMapViewIsActive()

        setTimeout(() => {
          this.setState({
            useAnimation: false
          }, () => {
            return resolve(null)
          })
        }, 500)
      })
    })
  }

  handleMutableStatePropsChanged = (dataSourceId: string, propKey: string, value?: any) => {
    if (!this.mutableStatePropsMap[propKey]) {
      this.mutableStatePropsMap[propKey] = [dataSourceId]
    } else {
      if (!this.mutableStatePropsMap[propKey].includes(dataSourceId)) {
        this.mutableStatePropsMap[propKey].push(dataSourceId)
      }
    }

    const multiMapDsIds = []
    const firstMapInstance = this.refs.firstMapInstance as MapBase
    const secondMapInstance = this.refs.secondMapInstance as MapBase

    if (firstMapInstance && firstMapInstance.getViewType()) {
      multiMapDsIds.push(this.state.firstMapDsId)
    }

    if (secondMapInstance && secondMapInstance.getViewType()) {
      multiMapDsIds.push(this.state.secondMapDsId)
    }

    let isAllMatched = true
    for (let i = 0; i < multiMapDsIds.length; i++) {
      if (!this.mutableStatePropsMap[propKey].includes(multiMapDsIds[i])) {
        isAllMatched = false
        break
      }
    }

    if (isAllMatched) {
      delete this.mutableStatePropsMap[propKey]
      MutableStoreManager.getInstance().updateStateValue(this.props.baseWidgetProps.id,
        propKey, value)
    }
  }

  handleViewChanged = (shareViewPoint: ShareViewPoint) => {
    if (shareViewPoint.viewpoint === null) {
      const firstMapInstance = this.refs.firstMapInstance as MapBase
      const secondMapInstance = this.refs.secondMapInstance as MapBase
      firstMapInstance && firstMapInstance.goHome(false)
      secondMapInstance && secondMapInstance.goHome(false)
      return
    }

    const currentVisibleDsId = this.getCurrentVisibleDsId()
    if (currentVisibleDsId === shareViewPoint.dataSourceId) {
      if (this.state.firstMapDsId && this.state.firstMapDsId !== currentVisibleDsId) {
        const firstMapInstance = this.refs.firstMapInstance as MapBase
        firstMapInstance && firstMapInstance.setViewPoint(shareViewPoint.viewpoint)
      }

      if (this.state.secondMapDsId && this.state.secondMapDsId !== currentVisibleDsId) {
        const secondMapInstance = this.refs.secondMapInstance as MapBase
        secondMapInstance && secondMapInstance.setViewPoint(shareViewPoint.viewpoint)
      }
    }
  }

  handleExtentChanged = (dataSourceId: string, extentMessage: ExtentChangeMessage) => {
    const currentVisibleDsId = this.getCurrentVisibleDsId()
    if (currentVisibleDsId === dataSourceId) {
      MessageManager.getInstance().publishMessage(extentMessage)
    }
  }

  handleMapLoaded = (dataSourceId: string, mapLoadStatus: MapLoadStatus) => {
    this.forceUpdate()
  }

  handleJimuMapViewCreated = () => {
    if (this.__unmount) {
      return
    }

    this.confirmJimuMapViewIsActive()
  }

  confirmJimuMapViewIsActive = () => {
    if (this.props.isDefaultMap) {
      const jimuMapViewId = `${this.props.baseWidgetProps.id}-${null}`
      const jimuMapView = MapViewManager.getInstance().getJimuMapViewById(jimuMapViewId)
      if (jimuMapView) {
        this.setActiveJimuMapView(jimuMapView, true)
      }
      return
    }

    const allDatasourceIds = []
    this.state.firstMapDsId && allDatasourceIds.push(this.state.firstMapDsId)
    this.state.secondMapDsId && allDatasourceIds.push(this.state.secondMapDsId)
    const currentDataSourceId = this.getCurrentVisibleDsId()

    for (let i = 0; i < allDatasourceIds.length; i++) {
      const jimuMapViewId = `${this.props.baseWidgetProps.id}-${allDatasourceIds[i]}`
      const jimuMapView = MapViewManager.getInstance().getJimuMapViewById(jimuMapViewId)
      if (jimuMapView) {
        if (allDatasourceIds[i] === currentDataSourceId) {
          this.setActiveJimuMapView(jimuMapView, true)
        } else {
          this.setActiveJimuMapView(jimuMapView, false)
        }
      }
    }
  }

  setActiveJimuMapView (jimuMapView: JimuMapView, isActive: boolean) {
    if (isActive) {
      jimuMapView.setIsActive(isActive)
      this.setState({
        currentJimuMapViewId: jimuMapView.id
      })
    } else {
      jimuMapView.setIsActive(isActive)
    }
  }

  isShowMapSwitchBtn = (): boolean => {
    const firstMapInstance = this.refs.firstMapInstance as MapBase
    const secondMapInstance = this.refs.secondMapInstance as MapBase
    if (firstMapInstance && secondMapInstance) {
      if (firstMapInstance.getMapLoadStatus() !== MapLoadStatus.Loading && secondMapInstance.getMapLoadStatus() !== MapLoadStatus.Loading) {
        return true
      }
    } else {
      return false
    }
  }

  getCurrentVisibleDsId = () => {
    if (this.state.multiMapStyle[0].opacity === 1) {
      return this.state.firstMapDsId
    } else {
      return this.state.secondMapDsId
    }
  }

  handleViewGroupCreate = (viewGroup: JimuMapViewGroup) => {
    if (this.props.onViewGroupCreate) {
      this.props.onViewGroupCreate(viewGroup)
    }
  }

  handleMobilePanelContentChange = (mobilePanelContent: JSX.Element) => {
    this.setState({
      mobilePanelContent: mobilePanelContent
    })
  }

  handleActiveToolInfoChange = (activeToolInfo: ActiveToolInfo) => {
    this.setState({
      activeToolInfo: activeToolInfo
    })
  }

  // handleShowOnMapDataChange = (showOnMapDatasKey: string[]) => {
  //  this.setState({
  //    showOnMapDatasKey: showOnMapDatasKey
  //  })
  // }

  getLayoutConfig = () => {
    if (this.props.widthBreakpoint === 'xsmall') {
      return mobileLayoutJsons[0]
    } else {
      return this.props.baseWidgetProps.config.layoutIndex ? pcLayoutJsons[this.props.baseWidgetProps.config.layoutIndex] : pcLayoutJsons[0]
    }
  }

  isShowClearShowOnMapDataBtn = () => {
    const showOnMapDatas = this.props.baseWidgetProps.mutableStateProps?.showOnMapDatas
    return Object.entries(showOnMapDatas || {}).some(entry => {
      // There is no jimuMapViewId while generating the action data if the map widget hasn't been loaded in the another page/view,
      // use a default jimuMapViewId to show data.
      let jimuMapViewId = entry[1].jimuMapViewId
      if (!jimuMapViewId && entry[1].mapWidgetId === this.props.baseWidgetProps.id) {
        const jimuMapViewsInfo: ImmutableObject<{[jimuMapViewId: string]: IMJimuMapViewInfo}> = getAppStore().getState().jimuMapViewsInfo
        jimuMapViewId = Object.keys(jimuMapViewsInfo || {}).find(viewId => jimuMapViewsInfo[viewId].mapWidgetId === this.props.baseWidgetProps.id)
      }
      return (jimuMapViewId === this.state.currentJimuMapViewId && entry[1].type === ShowOnMapDataType.DataAction)
    })
  }

  render () {
    return (
      <MultiSourceMapContext.Provider value={{
        mapWidgetId: this.props.baseWidgetProps.id,
        mapWidgetHeight: this.props.widgetHeight,
        isShowMapSwitchBtn: this.props.baseWidgetProps.useDataSources && this.props.baseWidgetProps.useDataSources.length > 1 && this.isShowMapSwitchBtn(),
        isShowClearShowOnMapDataBtn: this.isShowClearShowOnMapDataBtn(),
        dataSourceIds: [this.state.firstMapDsId, this.state.secondMapDsId],
        activeDataSourceId: this.getCurrentVisibleDsId(),
        switchMap: this.switchMap,
        fullScreenMap: this.props.fullScreenMap,
        isFullScreen: this.props.isFullScreen,
        mobilePanelContainer: this.state.mobilePanelContainer,
        onMobilePanelContentChange: this.handleMobilePanelContentChange,
        initialMapState: this.props.baseWidgetProps.config && this.props.baseWidgetProps.config.initialMapState
      }}
      >
        {!this.props.isDefaultMap && <div className='jimu-widget' style={{ position: 'relative' }}>
          <div
            className={classNames('jimu-widget', {
              'multisourcemap-item-appear': this.state.useAnimation && this.state.multiMapStyle[0].opacity,
              'multisourcemap-item-disappear': this.state.useAnimation && !(this.state.multiMapStyle[0].opacity),
              'multisourcemap-item-appear-noanimate': this.state.multiMapStyle[0].opacity,
              'multisourcemap-item-disappear-noanimate': !(this.state.multiMapStyle[0].opacity)
            })}
            style={{ position: 'absolute', zIndex: this.state.multiMapStyle[0].zIndex }}
          >
            {this.state.firstMapDsId && <MapBase
              ref='firstMapInstance'
              onViewChanged={this.handleViewChanged} baseWidgetProps={this.props.baseWidgetProps} onMapLoaded={this.handleMapLoaded}
              onMutableStatePropsChanged={this.handleMutableStatePropsChanged}
              onExtentChanged={(dataSourceId: string, message: ExtentChangeMessage) => { this.handleExtentChanged(dataSourceId, message) }}
              onJimuMapViewCreated={this.handleJimuMapViewCreated}
              // onShowOnMapDataChanged={this.handleShowOnMapDataChange}
              startLoadModules={this.props.startLoadModules}
              dataSourceId={this.state.firstMapDsId}
              widthBreakpoint={this.props.widthBreakpoint}
              isMapInVisibleArea={this.props.isMapInVisibleArea}
                                        >
                                        </MapBase>}
          </div>
          <div
            className={classNames('jimu-widget', {
              'multisourcemap-item-appear': this.state.useAnimation && this.state.multiMapStyle[1].opacity,
              'multisourcemap-item-disappear': this.state.useAnimation && !(this.state.multiMapStyle[1].opacity),
              'multisourcemap-item-appear-noanimate': this.state.multiMapStyle[1].opacity,
              'multisourcemap-item-disappear-noanimate': !(this.state.multiMapStyle[1].opacity)
            })}
            style={{ position: 'absolute', zIndex: this.state.multiMapStyle[1].zIndex }}
          >
            {this.state.secondMapDsId && <MapBase
              ref='secondMapInstance'
              onViewChanged={this.handleViewChanged} baseWidgetProps={this.props.baseWidgetProps} onMapLoaded={this.handleMapLoaded}
              onMutableStatePropsChanged={this.handleMutableStatePropsChanged}
              onExtentChanged={(dataSourceId: string, message: ExtentChangeMessage) => { this.handleExtentChanged(dataSourceId, message) }}
              onJimuMapViewCreated={this.handleJimuMapViewCreated}
              // onShowOnMapDataChanged={this.handleShowOnMapDataChange}
              startLoadModules={this.props.startLoadModules}
              dataSourceId={this.state.secondMapDsId}
              widthBreakpoint={this.props.widthBreakpoint}
              isMapInVisibleArea={this.props.isMapInVisibleArea}
                                         >
                                         </MapBase>}
          </div>
                                     </div>}
        {this.props.isDefaultMap && <div className='jimu-widget' style={{ position: 'relative' }}>
          <div
            className={classNames('jimu-widget multisourcemap-item-appear-noanimate')}
            style={{ position: 'absolute', zIndex: 6 }}
          >
            <MapBase
              ref='firstMapInstance' isDefaultMap={this.props.isDefaultMap}
              onViewChanged={this.handleViewChanged} baseWidgetProps={this.props.baseWidgetProps} onMapLoaded={this.handleMapLoaded}
              onMutableStatePropsChanged={this.handleMutableStatePropsChanged} dataSourceId={null}
              onExtentChanged={(dataSourceId: string, message: ExtentChangeMessage) => { this.handleExtentChanged(dataSourceId, message) }}
              onJimuMapViewCreated={this.handleJimuMapViewCreated}
              // onShowOnMapDataChanged={this.handleShowOnMapDataChange}
              startLoadModules={this.props.startLoadModules}
              widthBreakpoint={this.props.widthBreakpoint}
              isMapInVisibleArea={this.props.isMapInVisibleArea}
              defaultMapInfo={this.props.defaultMapInfo}
            />
          </div>
                                    </div>}
        {this.state.currentJimuMapViewId && <MapFixedLayout
          jimuMapView={MapViewManager.getInstance().getJimuMapViewById(this.state.currentJimuMapViewId)}
          appMode={this.props.baseWidgetProps.appMode} layouts={this.props.baseWidgetProps.layouts}
          LayoutEntry={this.props.baseWidgetProps.builderSupportModules && this.props.baseWidgetProps.builderSupportModules.LayoutEntry}
          widgetManifestName={this.props.baseWidgetProps.manifest.name}
        >
                                            </MapFixedLayout>}
        {this.state.currentJimuMapViewId && MapViewManager.getInstance().getJimuMapViewById(this.state.currentJimuMapViewId) &&
          <Layout
            mapWidgetId={this.props.baseWidgetProps.id} isMobile={this.props.widthBreakpoint === 'xsmall'}
            jimuMapView={MapViewManager.getInstance().getJimuMapViewById(this.state.currentJimuMapViewId)}
            appMode={this.props.baseWidgetProps.appMode} layouts={this.props.baseWidgetProps.layouts} intl={this.props.baseWidgetProps.intl}
            LayoutEntry={this.props.baseWidgetProps.builderSupportModules && this.props.baseWidgetProps.builderSupportModules.LayoutEntry}
            layoutConfig={this.getLayoutConfig()} toolConfig={this.props.baseWidgetProps.config.toolConifg ? this.props.baseWidgetProps.config.toolConifg : {}}
            activeToolInfo={this.state.activeToolInfo} onActiveToolInfoChange={this.handleActiveToolInfoChange} theme={this.props.baseWidgetProps.theme}
            widgetManifestName={this.props.baseWidgetProps.manifest.name} widgetHeight={this.props.widthBreakpoint === 'xsmall' ? null : this.props.widgetHeight}
          />}
        <JimuMapViewComponent useMapWidgetId={this.useMapWidgetIds?.[0]} onViewGroupCreate={this.handleViewGroupCreate} />
      </MultiSourceMapContext.Provider>
    )
  }
}
