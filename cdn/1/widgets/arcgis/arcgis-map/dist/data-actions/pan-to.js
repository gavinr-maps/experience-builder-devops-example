System.register(["jimu-core","jimu-arcgis"],(function(e,t){var r={},o={};return{setters:[function(e){r.AbstractDataAction=e.AbstractDataAction,r.DataLevel=e.DataLevel,r.DataSourceStatus=e.DataSourceStatus,r.MutableStoreManager=e.MutableStoreManager},function(e){o.loadArcGISJSAPIModules=e.loadArcGISJSAPIModules}],execute:function(){e((()=>{var e={62686:e=>{"use strict";e.exports=o},79244:e=>{"use strict";e.exports=r}},t={};function a(r){var o=t[r];if(void 0!==o)return o.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,a),n.exports}a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.p="";var n={};return a.p=window.jimuConfig.baseUrl,(()=>{"use strict";a.r(n),a.d(n,{default:()=>o});var e=a(79244),t=a(62686);var r=function(e,t,r,o){return new(r||(r=Promise))((function(a,n){function u(e){try{s(o.next(e))}catch(e){n(e)}}function i(e){try{s(o.throw(e))}catch(e){n(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(u,i)}s((o=o.apply(e,t||[])).next())}))};class o extends e.AbstractDataAction{isSupported(t,o){return r(this,void 0,void 0,(function*(){const r=this.getSupportedDataSets(t,o);return 1===r.length||r.length>=2&&o===e.DataLevel.Records}))}getSupportedDataSets(t,r){return t.filter((t=>{const o=t.dataSource;if(!o||o.getStatus()===e.DataSourceStatus.NotReady)return!1;if(!((null==o?void 0:o.supportSpatialInfo)&&(null==o?void 0:o.supportSpatialInfo())))return!1;if(r===e.DataLevel.Records){return this.getRecords(t,r).length>0}return r===e.DataLevel.DataSource&&!!(null==o?void 0:o.createJSAPILayerByDataSource)}))}getRecords(t,r){var o;let a=[];return r===e.DataLevel.DataSource?a=[]:r===e.DataLevel.Records&&(null===(o=t.records)||void 0===o?void 0:o.length)>0&&(a=t.records.filter((e=>{var t;return!!(null===(t=e.feature)||void 0===t?void 0:t.geometry)}))),a}getClonedGeometries(e,t,r){const o=[];return this.getRecords(e,t).forEach((e=>{const t=function(e,t){let r=null;return e.clone?r=e.clone():(r=t.fromJSON(Object.assign({},e)),r.attributes=Object.assign({},e.attributes)),r}(e.feature,r);t&&t.geometry&&o.push(t.geometry)})),o}onExecute(o,a){return r(this,void 0,void 0,(function*(){var r;const n=yield(0,t.loadArcGISJSAPIModules)(["esri/Graphic"]),[u]=n,i=this.getSupportedDataSets(o,a);if(1===i.length){const t=o[0];let n=null;const i=this.getClonedGeometries(t,a,u);n=i.length>0?{type:"pan-to-geometries",geometries:i}:{type:"pan-to-layer",dataSourceId:(null===(r=t.dataSource)||void 0===r?void 0:r.id)||null},e.MutableStoreManager.getInstance().updateStateValue(this.widgetId,"panToActionValue.value",n)}else if(i.length>=2){const t=[];if(i.forEach((e=>{const r=this.getClonedGeometries(e,a,u);t.push(...r)})),t.length>0){const r={type:"pan-to-geometries",geometries:t};e.MutableStoreManager.getInstance().updateStateValue(this.widgetId,"panToActionValue.value",r)}}return!0}))}}})(),n})())}}}));