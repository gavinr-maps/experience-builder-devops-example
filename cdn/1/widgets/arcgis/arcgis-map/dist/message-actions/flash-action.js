System.register(["jimu-core"],(function(e,a){var t={};return{setters:[function(e){t.AbstractMessageAction=e.AbstractMessageAction,t.DataSourceManager=e.DataSourceManager,t.MessageType=e.MessageType,t.MutableStoreManager=e.MutableStoreManager,t.dataSourceUtils=e.dataSourceUtils}],execute:function(){e((()=>{"use strict";var e={1810:e=>{e.exports=t}},a={};function r(t){var s=a[t];if(void 0!==s)return s.exports;var o=a[t]={exports:{}};return e[t](o,o.exports,r),o.exports}r.d=(e,a)=>{for(var t in a)r.o(a,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var s={};return(()=>{r.r(s),r.d(s,{default:()=>a});var e=r(1810);class a extends e.AbstractMessageAction{filterMessageType(a,t){return a===e.MessageType.DataRecordsSelectionChange}filterMessage(e){return!0}onExecute(a,t){switch(a.type){case e.MessageType.DataRecordsSelectionChange:if(0===a.records.length)break;let r=null;if(t)if(t.messageUseDataSource&&t.actionUseDataSource){if(a.records.length>0&&a.records[0].dataSource.getMainDataSource().id!==t.messageUseDataSource.mainDataSourceId){e.MutableStoreManager.getInstance().updateStateValue(this.widgetId,"flashActionValue",null);break}const s=e.DataSourceManager.getInstance().getDataSource(t.messageUseDataSource.mainDataSourceId),o=e.DataSourceManager.getInstance().getDataSource(t.actionUseDataSource.mainDataSourceId);if(s&&o)if(t.enabledDataRelationShip){let l=null,n=null;if(t.messageUseDataSource.mainDataSourceId===t.actionUseDataSource.mainDataSourceId&&t.messageUseDataSource.rootDataSourceId===t.actionUseDataSource.rootDataSourceId){const e=s.getSchema(),a=e&&e.fields&&Object.keys(e.fields).find((a=>"esriFieldTypeOID"===e.fields[a].esriType));l=e&&e.fields&&e.fields[a],n=l}else{const e=t.messageUseDataSource.fields[0],a=t.actionUseDataSource.fields[0];l=s.getSchema().fields[e],n=o.getSchema().fields[a]}let c="";if(l&&n){const e=l.name,t=l.type,r=a,s=[];for(let a=0;a<r.records.length;a++){const o=r.records[a].getData()[e];s.includes(`${this.formatValue(o,t)}`)||s.push(`${this.formatValue(r.records[a].getData()[e],t)}`)}c=`${n.name} IN `,s.length>0?c+=`(${s.join(", ")})`:c=""}if(a.records.length>0){const a=t.sqlExprObj?e.dataSourceUtils.getArcGISSQL(t.sqlExprObj,o).sql:null;a&&(c=c?c+" AND "+a:a)}else c="";const u={outFields:["*"],where:c,returnGeometry:!0},i=o.getRealQueryParams(u,"query");r={layerDataSourceId:o&&o.id,querySQL:i&&i.where}}else{let s="";if(a.records.length>0){const a=t.sqlExprObj?e.dataSourceUtils.getArcGISSQL(t.sqlExprObj,o).sql:null;a&&(s=a)}else s="";const l={outFields:["*"],where:s,returnGeometry:!0},n=o.getRealQueryParams(l,"query");r={layerDataSourceId:o&&o.id,querySQL:n&&n.where}}else r=null}else r=null;const s=`flashActionValue-${null==r?void 0:r.layerDataSourceId}`;e.MutableStoreManager.getInstance().updateStateValue(this.widgetId,s,r)}return!0}getLayerIdFromLayerDs(e){return e.layerId?e.layerId:e.layer?e.layer.id:null}formatValue(e,a){return"STRING"===a?`'${e}'`:"NUMBER"===a?`${e}`:"DATE"===a?`'${e}'`:void 0}}})(),s})())}}}));