import { AbstractDataAction, DataSource, DataRecord, MutableStoreManager, FeatureDataRecord} from 'jimu-core'
import { loadArcGISJSAPIModules } from 'jimu-arcgis'
import { handleFeature } from '../runtime/utils'

export default class ZoomTo extends AbstractDataAction {
  async isSupported (dataSource: DataSource, records: DataRecord[]): Promise<boolean> {
    // @ts-expect-error
    return records.length > 0 && records.some(record => record.feature?.geometry)
  }

  async onExecute (dataSource: DataSource, records: DataRecord[]): Promise<boolean> {
    return loadArcGISJSAPIModules(['esri/Graphic']).then(modules => {
      let Graphic: __esri.GraphicConstructor = null;
      [Graphic] = modules
      const featureSet = {
        features: records.map(record => handleFeature((record as FeatureDataRecord).feature, Graphic)),
        // @ts-expect-error
        layerId: dataSource.layer?.id || null,
        zoomToOption: {},
        type: 'zoom-to-graphics'
      }
      MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'zoomToFeatureActionValue.value', featureSet)
      return true
    })
  }
}
