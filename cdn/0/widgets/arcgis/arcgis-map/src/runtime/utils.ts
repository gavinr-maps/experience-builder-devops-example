/* eslint-disable prefer-const */
import { AppMode, dataSourceUtils } from 'jimu-core'
import MapBase, { HighLightHandle } from './components/mapbase'
import { IFeature } from '@esri/arcgis-rest-types'
import { geometryUtils, loadArcGISJSAPIModules, JimuMapView, LayerTypes, JimuFeatureLayerView, JimuSceneLayerView } from 'jimu-arcgis'

export function controlUIWidget (mapBaseView: __esri.MapView | __esri.SceneView, isOpen: boolean, uiWidget: __esri.Widget, position?: string, widgetName?: string) {
  const ui = mapBaseView.ui as any
  if (!uiWidget) {
    return
  }
  if (isOpen) {
    ui.add(uiWidget, position)
    if (widgetName && ui.exbMapTools.indexOf(widgetName) === -1) {
      ui.exbMapTools.push(widgetName)
    }
  } else {
    ui.remove(uiWidget)
  }
}

export async function createNewFeaturelayer (mapBaseView: __esri.MapView | __esri.SceneView, newFeatureSetValue?: {[layerID: string]: __esri.FeatureSet}): Promise<any> {
  const newLayerPromises = []
  newFeatureSetValue && Object.keys(newFeatureSetValue).forEach(layerId => {
    const layer = mapBaseView.map.layers.find(layer => layer.id === layerId)
    if (layer) {
      console.warn('the feature layer is already created')
      return
    }
    newLayerPromises.push(addFeatureSetToMap(mapBaseView, newFeatureSetValue[layerId], layerId))
  })

  if (newLayerPromises.length === 0) {
    return null
  } else {
    return Promise.all(newLayerPromises)
  }
}

export async function updateFeaturelayer (mapBaseView: __esri.MapView | __esri.SceneView, changedFeatureSetValue?: {[layerID: string]: __esri.FeatureSet}): Promise<any> {
  const updatePromises = []
  changedFeatureSetValue && Object.keys(changedFeatureSetValue).forEach(layerId => {
    const layer = mapBaseView.map.layers.find(layer => layer.id === layerId)
    if (layer) {
      mapBaseView.map.remove(layer)
      updatePromises.push(addFeatureSetToMap(mapBaseView, changedFeatureSetValue[layerId], layerId))
    }
  })

  if (updatePromises.length === 0) {
    return null
  } else {
    return Promise.all(updatePromises)
  }
}

async function addFeatureSetToMap (mapBaseView: __esri.MapView | __esri.SceneView, featureSet: __esri.FeatureSet, layerId: string): Promise<any> {
  return await new Promise( (resolve, reject) => {
    return loadArcGISJSAPIModules([
      'esri/layers/FeatureLayer'
    ]).then(modules => {
      if (featureSet.features.length < 1) {
        return resolve(null)
      } else {
        // let FeatureSet: typeof  __esri.FeatureSet;
        let FeatureLayer: typeof __esri.FeatureLayer;
        // eslint-disable-next-line
        [FeatureLayer] = modules;

        const layerFromFeatureSet = featureSet.features[0].layer as any
        const fieldsInFeaturelayer = []
        const fieldMap = {}

        for (let i = 0; i < layerFromFeatureSet.fields.length; i++) {
          const fieldsItem = getReasonableField(layerFromFeatureSet.fields[i])
          fieldMap[layerFromFeatureSet.fields[i].name] = fieldsItem.name
          fieldsInFeaturelayer.push(fieldsItem)
        }

        const fieldsInPopupTemplate = []
        for (const key in featureSet.features[0].attributes) {
          if (fieldMap[key]) {
            const fieldsItem = {
              fieldName: fieldMap[key],
              label: key
            }
            fieldsInPopupTemplate.push(fieldsItem)
          }
        }

        const sourceFeatures = []
        featureSet.features.forEach((feature, index) => {
          const tempFeature = feature
          if (tempFeature.attributes) {
            for (const key in tempFeature.attributes) {
              tempFeature.attributes[fieldMap[key]] = tempFeature.attributes[key]
            }

            tempFeature.attributes.exbfid = index
          } else {
            tempFeature.attributes = {
              exbfid: index
            }
          }
          sourceFeatures.push(tempFeature)
        })

        const layer = new FeatureLayer({
          id: layerId,
          title: layerFromFeatureSet.title,
          source: sourceFeatures,
          fields: fieldsInFeaturelayer,
          outFields: ['*'],
          objectIdField: 'exbfid',
          renderer: layerFromFeatureSet.renderer,
          popupEnabled: true,
          popupTemplate: {
            title: 'information',
            content: [{
              type: 'fields',
              fieldInfos: fieldsInPopupTemplate
            }]
          }
        })

        mapBaseView.map.add(layer)

        layer.on('layerview-create', event => {
          return resolve(null)
        })
      }
    })
  })
}

function getReasonableField (field: __esri.Field): __esri.Field {
  // the function is supported to normalize the field.name
  const fieldName = field.name
  return {
    name: fieldName.replace(/\./g, '_').replace(/\(/g, '_').replace(/\)/g, '_'),
    alias: field.alias,
    type: field.type
  } as any
}

export function selectFeature (mapBaseView: __esri.MapView | __esri.SceneView, target: __esri.Graphic | __esri.Graphic[] | IFeature | IFeature[], layerId?: string): HighLightHandle {
  // In this function, we assume that features come from the same layer
  let featureLayerId = layerId
  let featureLayerView = null
  let tempFeature = null

  // if layerId doesn't exist, we get layerId by feature
  if (!featureLayerId) {
    if (target instanceof Array) {
      tempFeature = target[0] as __esri.Graphic
    } else {
      tempFeature = target as __esri.Graphic
    }

    if (tempFeature) {
      featureLayerId = tempFeature.layer && tempFeature.layer.id
    }
  }

  if (featureLayerId) {
    const layerViews = mapBaseView.allLayerViews
    for (let i = 0; i < layerViews.length; i++) {
      if (layerViews.getItemAt(i).layer.id === featureLayerId) {
        featureLayerView = layerViews.getItemAt(i)
      }
    }

    if (featureLayerView) {
      return {
        layerId: featureLayerId,
        handle: featureLayerView.highlight(target)
      }
    } else {
      return null
    }
  }
}

export async function mapPanto (mapBaseView: __esri.MapView | __esri.SceneView, target: __esri.Geometry | __esri.Geometry[] |
__esri.Graphic | __esri.Graphic[] | __esri.Extent): Promise<any> {
  const panToTarget = target as any
  const tempBaseMapView = mapBaseView as any
  if (panToTarget instanceof Array) {
    if (panToTarget.length === 0) return await Promise.resolve()

    if (panToTarget[0].geometry) {
      const geometryArr: __esri.Geometry[] = []
      for (let i = 0; i < panToTarget.length; i++) {
        geometryArr.push(panToTarget[i].geometry)
      }

      return await getGeometriesExtent(geometryArr).then((extent) => {
        return tempBaseMapView.goTo(extent.center)
      })
    } else {
      return getGeometriesExtent(panToTarget).then((extent) => {
        return tempBaseMapView.goTo(extent.center)
      })
    }
  } else {
    if (panToTarget.geometry) {
      const getmetry = panToTarget.geometry as __esri.Geometry
      return tempBaseMapView.goTo(getCenterPoint(getmetry))
    } else {
      return tempBaseMapView.goTo(getCenterPoint(panToTarget))
    }
  }
}

async function getGeometriesExtent (geometries: __esri.Geometry[]): Promise<__esri.Extent> {
  return await loadArcGISJSAPIModules([
    'esri/geometry/Extent'
  ]).then(async modules => {
    // eslint-disable-next-line
    let Extent: typeof __esri.Extent;
    [Extent] = modules

    if (!geometries || !geometries.length) {
      return await Promise.resolve(null)
    }

    let fullExtent: __esri.Extent = null
    let index
    const numGeometries = geometries.length

    for (index = 0; index < numGeometries; index++) {
      const geometry = geometries[index]
      if (!geometry) {
        continue
      }

      let extent = geometry.extent

      if (!extent && geometry.type === 'point') {
        const pointGeometry = geometry as any

        if (pointGeometry.x && pointGeometry.y) {
          extent = new Extent({
            xmax: pointGeometry.x,
            xmin: pointGeometry.x,
            ymax: pointGeometry.y,
            ymin: pointGeometry.y,
            zmax: pointGeometry.z,
            zmin: pointGeometry.z,
            spatialReference: pointGeometry.spatialReference
          })
        }
      }

      if (!extent) {
        continue
      }

      if (fullExtent) {
        fullExtent = fullExtent.union(extent)
      } else {
        fullExtent = extent
      }
    }

    if (fullExtent.width < 0 && fullExtent.height < 0) {
      return await Promise.resolve(null)
    }

    return await Promise.resolve(fullExtent)
  })
}

export function filterFeaturesByQuery (jimuMapView: JimuMapView, layerDataSourceId: string, querySQL: string): void {
  if (layerDataSourceId) {
    const jimuLayerViews = jimuMapView.jimuLayerViews
    const jimuLayerViewIds = Object.keys(jimuLayerViews)
    for (let i = 0; i < jimuLayerViewIds.length; i++) {
      let tempJimuLayerView = jimuLayerViews[jimuLayerViewIds[i]]
      if (tempJimuLayerView && tempJimuLayerView.layer && tempJimuLayerView.layerDataSourceId === layerDataSourceId &&
        (tempJimuLayerView.type === LayerTypes.FeatureLayer || tempJimuLayerView.type === LayerTypes.SceneLayer)) {
        (tempJimuLayerView as JimuFeatureLayerView | JimuSceneLayerView).setLocalDefinitionExpression(querySQL)
      }
    }
  }
}

function queryFeatures(layerObject, querySQL) {
  return loadArcGISJSAPIModules([
    'esri/tasks/support/Query',
  ]).then(modules => {
    let Query: typeof __esri.Query;
    [Query] = modules
    const query = new Query()
    query.where = querySQL
    query.outFields = ['*']
    query.returnGeometry = true
    return layerObject.queryFeatures(query).then(featureSet => {
      return featureSet
    })
  })
}

function flashOnFeatureLayer(jimuMapView: JimuMapView, querySQL: string, tempJimuLayerView: JimuFeatureLayerView) {
  if ((tempJimuLayerView as JimuFeatureLayerView).view) {
    let featureLayerView: __esri.FeatureLayerView = (tempJimuLayerView as JimuFeatureLayerView).view
    if (featureLayerView) {
      queryFeatures(featureLayerView.layer, querySQL).then(featureSet => {
        if (featureSet && featureSet.features && featureSet.features.length > 0) {
          const symbol = getFlashSymbol(featureLayerView.layer.geometryType)
          startFlash(jimuMapView.view, featureSet.features, symbol)
        }
      })
    } else {
      return null
    }
  } else {
    loadArcGISJSAPIModules([
      'esri/layers/FeatureLayer'
    ]).then(modules => {
      let FeatureLayer: typeof __esri.FeatureLayer;
      [FeatureLayer] = modules

      let tempFeatureLayer = new FeatureLayer({
        url: dataSourceUtils.getUrlByLayer((tempJimuLayerView as JimuFeatureLayerView | JimuSceneLayerView).layer)
      })
      tempFeatureLayer.load().then(() => {
        queryFeatures(tempFeatureLayer, querySQL).then(featureSet => {
          if (featureSet && featureSet.features && featureSet.features.length > 0) {
            const symbol = getFlashSymbol(featureSet.features[0].geometry.type)
            startFlash(jimuMapView.view, featureSet.features, symbol)
          }
        })
      })
    })
  }
}

let sceneHightlightHandle = null
function flashOnSceneLayer(jimuMapView: JimuMapView, querySQL: string, tempJimuLayerView: JimuSceneLayerView) {
  if ((tempJimuLayerView as JimuSceneLayerView).view) {
    let sceneLayerView: __esri.SceneLayerView = (tempJimuLayerView as JimuSceneLayerView).view
    // @ts-expect-error
    queryFeatures(sceneLayerView?.layer?.associatedLayer, querySQL).then(featureSet => {
      if (featureSet && featureSet.features && featureSet.features.length > 0) {
        const objectIdField = sceneLayerView.layer.objectIdField
        const objectIds = featureSet.features.map(feature => feature.attributes[objectIdField])

        let i = 0;
        const maxFlashCount = 6;
        let highlightColor = [255, 255, 0, 0.8]
        const originalHighlightOptions = jimuMapView.view.highlightOptions

        const flash = function() {
          if(i < maxFlashCount) {
            i++
            if(highlightColor) {
              highlightColor = null
              // @ts-expect-error
              jimuMapView.view.highlightOptions = { color: [0, 0, 0, 0] }
              sceneHightlightHandle && sceneHightlightHandle.remove()
              sceneHightlightHandle = sceneLayerView.highlight(objectIds)
            } else {
              highlightColor = [255, 255, 0, 0.8]
              // @ts-expect-error
              jimuMapView.view.highlightOptions = { color: highlightColor }
              sceneHightlightHandle && sceneHightlightHandle.remove()
              sceneHightlightHandle = sceneLayerView.highlight(objectIds)
            }
            setTimeout(flash, 500)
          } else {
            jimuMapView.view.highlightOptions = originalHighlightOptions
            sceneHightlightHandle && sceneHightlightHandle.remove()
          }
        }
        setTimeout(flash, 500);
      }
    })
  }
}

export function flashFeaturesByQuery (jimuMapView: JimuMapView, layerDataSourceId: string, querySQL: string): void {
  if (layerDataSourceId) {
    const jimuLayerViews = jimuMapView.jimuLayerViews
    const jimuLayerViewIds = Object.keys(jimuLayerViews)
    for (let i = 0; i < jimuLayerViewIds.length; i++) {
      let tempJimuLayerView = jimuLayerViews[jimuLayerViewIds[i]]
      if (tempJimuLayerView && tempJimuLayerView.layer && tempJimuLayerView.layerDataSourceId === layerDataSourceId) {
        if (tempJimuLayerView.type === LayerTypes.FeatureLayer) {
          flashOnFeatureLayer(jimuMapView, querySQL, tempJimuLayerView as JimuFeatureLayerView)
        } else if (tempJimuLayerView.type === LayerTypes.SceneLayer) {
          flashOnSceneLayer(jimuMapView, querySQL, tempJimuLayerView as JimuSceneLayerView)
        }
      }
    }
  }
}

function startFlash (mapBaseView: __esri.MapView | __esri.SceneView, features: __esri.Graphic[], symbol) {
  loadArcGISJSAPIModules([
    'esri/Graphic'
  ]).then(modules => {
    // eslint-disable-next-line
    let Graphic: typeof __esri.Graphic;
    [Graphic] = modules

    const flashFeatures = function (features: __esri.Graphic[], maxFlashCount: number) {
      const graphics = []
      let flashCount = 0
      for (let i = 0; i < features.length; i++) {
        const tempGraphic = new Graphic({
          geometry: features[i].geometry,
          symbol: symbol,
          attributes: features[i].attributes
        })
        graphics.push(tempGraphic)
      }

      const singleFlash = function () {
        mapBaseView.graphics.addMany(graphics)
        setTimeout(() => {
          mapBaseView.graphics.removeMany(graphics)
          flashCount = flashCount + 1
          if (flashCount < maxFlashCount) {
            setTimeout(() => {
              singleFlash()
            }, 500)
          }
        }, 500)
      }

      singleFlash()
    }

    flashFeatures(features, 3)

  })
}

function getFlashSymbol (geometryType: string) {
  if (['point', 'multipoint'].includes(geometryType)) {
    return {
      type: 'simple-marker',
      style: 'circle',
      color: [255, 255, 0, 0.8],
      size: '16px',
      outline: {
        color: [255, 255, 0, 0.8],
        width: 3
      }
    }
  } else if (['polyline'].includes(geometryType)) {
    return {
      type: 'simple-line',
      color: [255, 255, 0, 0.8],
      width: 3,
      style: 'solid'
    }
  } else if (['polygon', 'extent'].includes(geometryType)) {
    return {
      type: 'simple-fill', // autocasts as new SimpleFillSymbol()
      color: [255, 255, 0, 0.5],
      style: 'solid',
      outline: { // autocasts as new SimpleLineSymbol()
        color: [255, 255, 0, 0.8],
        width: 3
      }
    }
  } else if (['mesh'].includes(geometryType)) {
    return {
      type: 'mesh-3d', // autocasts as new MeshSymbol3D()
      symbolLayers: [{
        type: 'fill', // autocasts as new FillSymbol3DLayer()
        material: { color: [255, 255, 0, 0.8] }
      }]
    }
  } else {
    return null
  }
}

function getCenterPoint (geometry: __esri.Geometry): __esri.Point {
  // point | multipoint | polyline | polygon | extent | mesh
  switch (geometry.type) {
  case 'point':
    return geometry as __esri.Point
  case 'extent':
    return (geometry as __esri.Extent).center
  case 'polygon':
    return (geometry as __esri.Polygon).centroid
  case 'polyline':
    return (geometry as __esri.Polyline).extent.center
  default:
    return geometry && geometry.extent ? geometry.extent.center : undefined
    // todo
  }
}

export function handleFeature (feature: IFeature | __esri.Graphic, Graphic: __esri.GraphicConstructor): __esri.Graphic {
  let tempFeature = null
  if ((feature as any).clone) {
    tempFeature = (feature as any).clone()
  } else {
    tempFeature = Graphic.fromJSON(Object.assign({}, feature))
    tempFeature.attributes = Object.assign({}, feature.attributes)
  }
  return tempFeature
}

export async function projectGeometries (geometries: __esri.Geometry[], spatialReference: __esri.SpatialReference): Promise<__esri.Geometry[]> {
  if (!geometries || geometries.length === 0 || !geometries[0] ||
    spatialReference.wkid === geometries[0].spatialReference.wkid || (spatialReference.equals(geometries[0].spatialReference))) {
    return await Promise.resolve(geometries)
  } else if (spatialReference.isWebMercator && geometries[0].spatialReference.isWGS84) {
    // In js api 4.x, the view can handle WebMercator and WGS84 spatialReference auto
    return await Promise.resolve(geometries)
  } else if (spatialReference.isWGS84 && geometries[0].spatialReference.isWebMercator) {
    // In js api 4.x, the view can handle WebMercator and WGS84 spatialReference auto
    return await Promise.resolve(geometries)
  } else {
    return await geometryUtils.projectToSpatialReference(geometries, spatialReference)
  }
}

export async function processZoomToFeatures (mapBaseView: __esri.MapView | __esri.SceneView, layer: any, features: __esri.Graphic[]): Promise<__esri.Graphic[]> {
  if (mapBaseView && mapBaseView.type === '3d' && layer && layer.queryFeatures && features) {
    return await loadArcGISJSAPIModules([
      'esri/tasks/support/Query'
    ]).then((modules) => {
      const [Query] = modules
      const query = new Query()
      query.returnGeometry = true
      query.outFields = ['*']
      query.objectIds = features.map(feature => feature.attributes[layer.objectIdField])
      return layer.queryFeatures(query).then(async (result) => {
        if (result && result.features && result.features.length === features.length) {
          return await Promise.resolve(result.features)
        } else {
          return await Promise.resolve(features)
        }
      }, async () => {
        return await Promise.resolve(features)
      })
    })
  } else {
    return await Promise.resolve(features)
  }
}

export function checkIsLive (appMode: AppMode): boolean {
  if (window.jimuConfig.isInBuilder) {
    if (appMode === AppMode.Design) {
      return false
    } else {
      return true
    }
  } else {
    return true
  }
}

export function getMapBaseRestoreData (mapInstance: MapBase): any {
  return {
    mapContainer: mapInstance.mapContainer,
    state: mapInstance.state,
    MapView: mapInstance.MapView,
    SceneView: mapInstance.SceneView,
    Extent: mapInstance.Extent,
    Viewpoint: mapInstance.Viewpoint,
    mapView: mapInstance.mapView,
    sceneView: mapInstance.sceneView,
    extentWatch: mapInstance.extentWatch,
    fatalErrorWatch: mapInstance.fatalErrorWatch,
    dsManager: mapInstance.dsManager,
    highLightHandles: mapInstance.highLightHandles,
    mapBaseViewEventHandles: mapInstance.mapBaseViewEventHandles,
    Color: mapInstance.Color,
    isRequestingMap: mapInstance.isRequestingMap
  }
}

export function restoreMapBase (mapInstance: MapBase, restoreData: any): void {
  mapInstance.mapContainer = restoreData.mapContainer
  mapInstance.state = restoreData.state
  mapInstance.MapView = restoreData.MapView
  mapInstance.SceneView = restoreData.SceneView
  mapInstance.Extent = restoreData.Extent
  mapInstance.Viewpoint = restoreData.Viewpoint
  mapInstance.mapView = restoreData.mapView
  mapInstance.sceneView = restoreData.sceneView
  mapInstance.extentWatch = restoreData.extentWatch
  mapInstance.fatalErrorWatch = restoreData.fatalErrorWatch
  mapInstance.dsManager = restoreData.dsManager
  mapInstance.highLightHandles = restoreData.highLightHandles
  mapInstance.mapBaseViewEventHandles = restoreData.mapBaseViewEventHandles
  mapInstance.Color = restoreData.Color
  mapInstance.isRequestingMap = restoreData.isRequestingMap
}
