import { AbstractDataAction, DataSource, DataRecord, MutableStoreManager, FeatureDataRecord } from 'jimu-core'
import { loadArcGISJSAPIModules } from 'jimu-arcgis'
import { handleFeature } from '../runtime/utils'

export default class PanTo extends AbstractDataAction {
  async isSupported (dataSource: DataSource, records: DataRecord[]): Promise<boolean> {
    // @ts-expect-error
    return records.length > 0 && records.some(record => record.feature?.geometry)
  }

  async onExecute (dataSource: DataSource, records: DataRecord[]): Promise<boolean> {
    return loadArcGISJSAPIModules(['esri/Graphic']).then(modules => {
      let Graphic: __esri.GraphicConstructor = null;
      [Graphic] = modules
      const featureSet = {
        features: records.map(record => handleFeature((record as FeatureDataRecord).feature, Graphic)?.geometry),
      }
      MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'panToActionValue.value', featureSet)
      return true
    })
  }
}
