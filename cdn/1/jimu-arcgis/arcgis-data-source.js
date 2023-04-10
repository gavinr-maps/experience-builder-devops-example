System.register(["jimu-core/data-source","jimu-core"],(function(e,t){var r={},a={};return{setters:[function(e){r.AbstractSetDataSource=e.AbstractSetDataSource,r.DataSourceTypes=e.DataSourceTypes,r.ItemMixinImpl=e.ItemMixinImpl},function(e){a.Immutable=e.Immutable,a.SupportedJSAPILayerTypes=e.SupportedJSAPILayerTypes,a.dataSourceUtils=e.dataSourceUtils,a.loadArcGISJSAPIModules=e.loadArcGISJSAPIModules,a.portalUrlUtils=e.portalUrlUtils}],execute:function(){e((()=>{"use strict";var e={891:e=>{e.exports=a},840:e=>{e.exports=r}},t={};function o(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,o),i.exports}o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{var e,t;o.r(i),o.d(i,{ArcGISDataSourceFactory:()=>p,ArcGISDataSourceTypes:()=>e,DataSourceTypes:()=>e,LayerTypes:()=>t,MapDataSourceImpl:()=>l,WebMapDataSourceImpl:()=>c,WebSceneDataSourceImpl:()=>d,default:()=>h}),function(e){e.Map="MAP",e.WebMap="WEB_MAP",e.WebScene="WEB_SCENE"}(e||(e={})),function(e){e.BaseDynamicLayer="base-dynamic",e.BaseElevationLayer="base-elevation",e.BaseTileLayer="base-tile",e.BuildingSceneLayer="building-scene",e.CSVLayer="csv",e.ElevationLayer="elevation",e.FeatureLayer="feature",e.GeoJSONLayer="geojson",e.GeoRSSLayer="geo-rss",e.GraphicsLayer="graphics",e.GroupLayer="group",e.ImageryLayer="imagery",e.IntegratedMeshLayer="integrated-mesh",e.KMLLayer="kml",e.MapImageLayer="map-image",e.MapNotesLayer="map-notes",e.PointCloudLayer="point-cloud",e.SceneLayer="scene",e.TileLayer="tile",e.UnknownLayer="unknown",e.UnsupportedLayer="unsupported",e.VectorTileLayer="vector-tile",e.WMSLayer="wms",e.WMTSLayer="wmts",e.WebTileLayer="web-tile"}(t||(t={}));var r=o(840),a=o(891),s=function(e,t,r,a){return new(r||(r=Promise))((function(o,i){function s(e){try{n(a.next(e))}catch(e){i(e)}}function l(e){try{n(a.throw(e))}catch(e){i(e)}}function n(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,l)}n((a=a.apply(e,t||[])).next())}))};class l extends r.AbstractSetDataSource{constructor(t){super(t),this.type=e.Map,this.map=t.map}ready(){return(0,a.loadArcGISJSAPIModules)(["esri/Map","esri/layers/FeatureLayer"]).then((e=>([this.Map,this.FeatureLayer]=e,this.map||this.createMap(),this.createChildDataSources())))}fetchSchema(){var e,t;return s(this,void 0,void 0,(function*(){const r=this.getChildDataSources();let o=(0,a.Immutable)({childSchemas:{},label:null===(t=null===(e=this.map)||void 0===e?void 0:e.portalItem)||void 0===t?void 0:t.title});return r.forEach(((e,t)=>{const r=e.getFetchedSchema();o=o.setIn(["childSchemas",e.jimuChildId],r)})),Promise.resolve(o)}))}getDataSourceByLayer(e){const t=a.dataSourceUtils.getJimuLayerIdByJSAPILayer(e);return Object.values(this.dataSourceManager.getDataSources()).filter((e=>{var t;return(null===(t=e.getRootDataSource())||void 0===t?void 0:t.id)===this.id})).find((e=>e.jimuLayerId===t))}getDataSourcesByType(e){if(!e)return[];const t=[];return this.traverseToGetDataSourcesByType(e,this,t),t}createChildDataSources(){return s(this,void 0,void 0,(function*(){const e=this.map.layers.toArray().reverse(),t=(this.map.tables?this.map.tables.toArray():[]).reverse();a.dataSourceUtils.getWhetherUseProxy()&&this.map.allLayers.toArray().concat(t).forEach((e=>{this.setProxyForLayerOrTable(e)}));const r=yield this.getChildDataSourceConstructorsOptions(e.concat(t));return this.childDataSourcesPromise=Promise.allSettled(r.map((e=>this.dataSourceManager.createDataSource(e)))).then((e=>s(this,void 0,void 0,(function*(){const t=[],r=e.filter((e=>"fulfilled"===e.status)).map((e=>e.value));return r&&r.length>0&&r.forEach((e=>this.traverseToCreateLayerForDataSource(e,t))),Promise.allSettled(t.map((e=>s(this,void 0,void 0,(function*(){return yield e.load()}))))).then((e=>r))})))),this.childDataSourcesPromise}))}getChildDataSourceConstructorsOptions(e){return s(this,void 0,void 0,(function*(){const t=[];return e.forEach(((e,r)=>{const o=a.dataSourceUtils.getUrlByLayer(e),i=a.dataSourceUtils.getDataSourceSourceUrl(o),s=a.dataSourceUtils.getFixedLayerIdByLayer(e);t.push(this.getChildDataSourceConstructorOptionsFromSingleLayerOrTable(s,r,i,this.getDataSourceJson(),e))})),yield Promise.allSettled(t).then((e=>e.filter((e=>"fulfilled"===e.status)).map((e=>e.value)))).then((e=>e.reduce(((e,t)=>e.concat(t)),[])))}))}getChildDataSourceConstructorOptionsFromSingleLayerOrTable(e,t,o,i,l){return s(this,void 0,void 0,(function*(){if(!e)return yield Promise.resolve([]);const s=[],n=[],c=[],u=[];return this.getJimuChildId(e).forEach((e=>{var d;const p=this.getDataSourceJson().schema?this.getDataSourceJson().schema.childSchemas[e]:null,h=this.getChildDataSourceId(e),y=(null==i?void 0:i.childDataSourceJsons)&&i.childDataSourceJsons[e]?i.childDataSourceJsons[e]:null;let S,m=(0,a.Immutable)({id:h,sourceLabel:null==l?void 0:l.title,type:r.DataSourceTypes.FeatureLayer});if(y&&(m=m.merge(y.asMutable({deep:!0}))),o&&(m=m.set("url",o.replace(/^http:/,"https:"))),p&&(m=m.set("schema",p)),l){if((null===(d=l.portalItem)||void 0===d?void 0:d.id)&&(m=m.set("portalUrl",l.portalItem.portal.url).set("itemId",l.portalItem.id)),l.type===a.SupportedJSAPILayerTypes.SceneLayer)n.push(l.load().then((()=>l.associatedLayer?Promise.resolve({id:m.id,dataSourceJson:m.set("type",r.DataSourceTypes.SceneLayer),layer:l,parentDataSource:this,jimuChildId:e,order:t}):Promise.reject(null))));else switch(l.type){case a.SupportedJSAPILayerTypes.FeatureLayer:c.push(l.load().then((()=>{if("multipatch"===l.geometryType||"mesh"===l.geometryType){const e="Do not support feature layer which geometry type is multipatch or mesh.";return console.error(e,l),Promise.reject(e)}const r=l.geometryType?`esriGeometry${l.geometryType.charAt(0).toUpperCase()}${l.geometryType.slice(1)}`:null;return Promise.resolve({id:m.id,dataSourceJson:m.set("geometryType",r),layer:l,parentDataSource:this,jimuChildId:e,order:t})})));break;case a.SupportedJSAPILayerTypes.MapImageLayer:case a.SupportedJSAPILayerTypes.TileLayer:u.push(l.load().then((()=>Promise.resolve({id:m.id,dataSourceJson:m.set("type",r.DataSourceTypes.MapService),layer:l,parentDataSource:this,jimuChildId:e,order:t}))));break;case a.SupportedJSAPILayerTypes.GroupLayer:S={id:m.id,dataSourceJson:m.set("type",r.DataSourceTypes.GroupLayer),layer:l,parentDataSource:this,jimuChildId:e,order:t}}S&&s.push(Promise.resolve(S))}else S={id:m.id,dataSourceJson:m,parentDataSource:this,jimuChildId:e,order:t},s.push(Promise.resolve(S))})),yield Promise.allSettled(s.concat(n).concat(c).concat(u)).then((e=>e.filter((e=>"fulfilled"===e.status)).map((e=>e.value))))}))}setProxyForLayerOrTable(e){const t=a.dataSourceUtils.getUrlByLayer(e);if(!t)return;const r=a.dataSourceUtils.getDataSourceProxyUrl(t);r&&(e.url=r)}traverseToGetDataSourcesByType(e,t,r){if(!e||!t||!r)return;t.type===e&&r.push(t);const a=t.isDataSourceSet&&t.getChildDataSources();a&&a.forEach((t=>{this.traverseToGetDataSourcesByType(e,t,r)}))}traverseToCreateLayerForDataSource(e,t){if(!e)return;this.getWhetherNeedToCreateLayer(e)&&e.type===r.DataSourceTypes.FeatureLayer&&e.layer.url&&(e.layer=new this.FeatureLayer({id:e.layer.id,title:e.layer.title,url:a.dataSourceUtils.getUrlByLayer(e.layer),renderer:e.layer.renderer,popupTemplate:e.layer.popupTemplate,sourceJSON:e.layer.sourceJSON,parent:e.layer.parent}),e.getAllDerivedDataSources().forEach((t=>{t.clearRecords(),t.layer=e.layer})),t.push(e.layer));const o=e.isDataSourceSet&&e.getChildDataSources();o&&o.forEach((e=>{this.traverseToCreateLayerForDataSource(e,t)}))}getWhetherNeedToCreateLayer(e){return!(!e||e.layer&&"esri.layers.support.Sublayer"!==e.layer.declaredClass)}isDataSourceWithLayer(e,t,a){var o,i;if(`${null===(o=null==e?void 0:e.layer)||void 0===o?void 0:o.id}`==`${t}`){if(a){let t=null,o=null==e?void 0:e.parentDataSource;for(;o;){if(o.type===r.DataSourceTypes.MapService){t=o;break}o=o.parentDataSource}return a===(null===(i=null==t?void 0:t.layer)||void 0===i?void 0:i.id)}return!0}return!1}createMap(){this.map=new this.Map,this.getDataSourceJson().layers.forEach((e=>{this.map.layers.add(new this.FeatureLayer(e))}))}}var n=function(e,t,r,a){return new(r||(r=Promise))((function(o,i){function s(e){try{n(a.next(e))}catch(e){i(e)}}function l(e){try{n(a.throw(e))}catch(e){i(e)}}function n(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,l)}n((a=a.apply(e,t||[])).next())}))};class c extends((0,r.ItemMixinImpl)(l)){constructor(t){super(t),this.type=e.WebMap;const r=this.getDataSourceJson();this.portalUrl=r.portalUrl,this.itemId=r.itemId}ready(){return(0,a.loadArcGISJSAPIModules)(["esri/WebMap","esri/portal/Portal","esri/portal/PortalItem","esri/layers/FeatureLayer"]).then((e=>n(this,void 0,void 0,(function*(){return[this.WebMap,this.Portal,this.PortalItem,this.FeatureLayer]=e,this.map||(yield this.createMap()),this.createChildDataSources()}))))}createMap(){return n(this,void 0,void 0,(function*(){if(this.getDataSourceJson().portalUrl){const e=new this.Portal({url:a.portalUrlUtils.getPlatformUrlByOrgUrl(this.getDataSourceJson().portalUrl)});this.map=new this.WebMap({portalItem:new this.PortalItem({id:this.getDataSourceJson().itemId,portal:e})})}else this.map=new this.WebMap({portalItem:new this.PortalItem({id:this.getDataSourceJson().itemId})});this.map.isFulfilled()?this.initItem():yield this.map.load().then((()=>this.initItem()))}))}initItem(){var e;this.map&&(this.setItemData(this.map.resourceInfo),this.setItemInfo(null===(e=this.map.portalItem)||void 0===e?void 0:e.sourceJSON))}}var u=function(e,t,r,a){return new(r||(r=Promise))((function(o,i){function s(e){try{n(a.next(e))}catch(e){i(e)}}function l(e){try{n(a.throw(e))}catch(e){i(e)}}function n(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,l)}n((a=a.apply(e,t||[])).next())}))};class d extends((0,r.ItemMixinImpl)(l)){constructor(t){super(t),this.type=e.WebScene;const r=this.getDataSourceJson();this.portalUrl=r.portalUrl,this.itemId=r.itemId}ready(){return u(this,void 0,void 0,(function*(){return yield(0,a.loadArcGISJSAPIModules)(["esri/WebScene","esri/portal/Portal","esri/portal/PortalItem","esri/layers/FeatureLayer"]).then((e=>u(this,void 0,void 0,(function*(){return[this.WebScene,this.Portal,this.PortalItem,this.FeatureLayer]=e,this.map||this.createMap(),yield this.createChildDataSources()}))))}))}createMap(){if(this.getDataSourceJson().portalUrl){const e=new this.Portal({url:a.portalUrlUtils.getPlatformUrlByOrgUrl(this.getDataSourceJson().portalUrl)});this.map=new this.WebScene({portalItem:new this.PortalItem({id:this.getDataSourceJson().itemId,portal:e})})}else this.map=new this.WebScene({portalItem:new this.PortalItem({id:this.getDataSourceJson().itemId})});this.map.isFulfilled()?this.initItem():this.map.load().then((()=>this.initItem()))}initItem(){var e;this.map&&(this.setItemData(this.map.resourceInfo),this.setItemInfo(null===(e=this.map.portalItem)||void 0===e?void 0:e.sourceJSON))}createChildDataSources(){const e=Object.create(null,{createChildDataSources:{get:()=>super.createChildDataSources}});return u(this,void 0,void 0,(function*(){return this.childDataSourcesPromise=this.map.when((()=>u(this,void 0,void 0,(function*(){return yield e.createChildDataSources.call(this)})))),this.childDataSourcesPromise}))}}class p{createDataSource(t){var r;const a=null!==(r=t.dataSourceJson)&&void 0!==r?r:t.belongToDataSource.getMainDataSource().getDataSourceJson(),o=t.dataViewId&&a.dataViews&&a.dataViews[t.dataViewId]&&a.dataViews[t.dataViewId].type||a.type;return o===e.Map?new l(t):o===e.WebMap?new c(t):o===e.WebScene?new d(t):void console.error("Unimplemented data source type.",o)}}const h=p})(),i})())}}}));