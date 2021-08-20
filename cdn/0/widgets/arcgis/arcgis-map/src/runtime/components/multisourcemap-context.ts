import { React } from 'jimu-core'

interface MultiSourceMapContextType {
  mapWidgetId: string
  mapWidgetHeight: number
  isShowMapSwitchBtn: boolean
  isShowClearShowOnMapDataBtn: boolean
  isFullScreen: boolean
  dataSourceIds: string[]
  activeDataSourceId: string
  switchMap: () => void
  fullScreenMap: () => void
  initialMapState: any
  mobilePanelContainer: HTMLDivElement
  onMobilePanelContentChange: (MobilePanelContent: JSX.Element) => void
}

export const MultiSourceMapContext = React.createContext<MultiSourceMapContextType>({
  mapWidgetId: null,
  mapWidgetHeight: null,
  isShowMapSwitchBtn: false,
  isShowClearShowOnMapDataBtn: false,
  isFullScreen: false,
  dataSourceIds: [],
  activeDataSourceId: null,
  switchMap: () => {},
  fullScreenMap: () => {},
  initialMapState: null,
  mobilePanelContainer: null,
  onMobilePanelContentChange: (MobilePanelContent: JSX.Element) => {}
})
