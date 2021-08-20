import { React, ReactRedux, ImmutableObject, IMJimuMapViewInfo, IMState, IMDataSourceInfo, DataSourceManager } from 'jimu-core'
import { JimuMapView } from 'jimu-arcgis'

interface Props{
  jimuMapView: JimuMapView

  onSelectedGraphicsChanged?: (selectedGraphics: __esri.Graphic[]) => void
}

interface States{}

class _SelectedNumber extends React.PureComponent<Props & ExtraProps, States> {
  componentDidMount () {
    this.computerSelectedGraphics()
  }

  componentDidUpdate () {
    this.computerSelectedGraphics()
  }

  computerSelectedGraphics () {
    if (this.props.onSelectedGraphicsChanged) {
      const jimuLayerViews = this.props.jimuMapView.jimuLayerViews
      const jimuLayerViewIds = Object.keys(jimuLayerViews)
      const selectedGraphics = []
      for (let i = 0; i < jimuLayerViewIds.length; i++) {
        const jimuLayerView = jimuLayerViews[jimuLayerViewIds[i]]
        const dsId = jimuLayerView.layerDataSourceId
        const ds = DataSourceManager.getInstance().getDataSource(dsId)
        if (ds) {
          const selectedRecords = ds.getSelectedRecords()
          for (let j = 0; j < selectedRecords.length; j++) {
            const tempFeature = (selectedRecords[j] as any).feature.clone()
            selectedGraphics.push(tempFeature)
          }
        }
      }
      this.props.onSelectedGraphicsChanged(selectedGraphics)
    }
  }

  render () {
    return null
  }
}

const mapStateToProps = (state: IMState, ownProps: Props): ExtraProps => {
  if (state.appStateInBuilder) {
    const dataSourcesInfo = state.appStateInBuilder && state.appStateInBuilder.dataSourcesInfo
    const jimuMapViewsInfo = state.appStateInBuilder && state.appStateInBuilder.jimuMapViewsInfo
    return {
      dataSourcesInfo: dataSourcesInfo,
      viewInfos: jimuMapViewsInfo
    }
  } else {
    const dataSourcesInfo = state && state.dataSourcesInfo
    const jimuMapViewsInfo = state && state.jimuMapViewsInfo
    return {
      dataSourcesInfo: dataSourcesInfo,
      viewInfos: jimuMapViewsInfo
    }
  }
}

interface ExtraProps {
  dataSourcesInfo?: ImmutableObject<{ [dsId: string]: IMDataSourceInfo }>
  viewInfos?: ImmutableObject<{[jimuMapViewId: string]: IMJimuMapViewInfo}>
}

export const SelectedNumber = ReactRedux.connect<ExtraProps, unknown, Props>(mapStateToProps)(_SelectedNumber)
