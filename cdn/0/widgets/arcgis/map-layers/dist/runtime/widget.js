System.register(["jimu-core","jimu-ui","jimu-arcgis"],(function(e){var t,i,s;return{setters:[function(e){t=e},function(e){i=e},function(e){s=e}],execute:function(){e(function(e){var t={};function i(s){if(t[s])return t[s].exports;var r=t[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=e,i.c=t,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(s,r,function(t){return e[t]}.bind(null,r));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=490)}({0:function(e,i){e.exports=t},1:function(e,t){e.exports=i},259:function(e,t){e.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M16 10.05v1.104L8 15l-8-3.846V10.05l8 3.833 8-3.833zm0-3.017v1.105l-8 3.846-8-3.846V7.033l8 3.833 8-3.833zM8 1l8 3.799-8 3.799-8-3.8L8 1zm0 1.118l-5.646 2.68L8 7.48l5.646-2.681L8 2.118z" fill="#000" fill-rule="nonzero"></path></svg>'},4:function(e,t){e.exports=s},490:function(e,t,i){"use strict";i.r(t),i.d(t,"LoadStatus",(function(){return w})),i.d(t,"default",(function(){return v}));var s=i(0),r=i(4),o=i(1);function a(e,t){let i,r;t.setVisibility&&t.useMapWidget?(i="block",r=""):(i="none",r="unset");const o=e.surfaces[1].bg,a=e.surfaces[1].bg;return s.css`
    overflow: auto;
    .widget-layerlist {
      width: 100%;
      height: 100%;
      /*background-color: ${e.arcgis.widgets.layerlist.root.bg};*/
      background-color: ${o};

      .esri-layer-list__item-label:focus {
        outline: ${r};
      }

      .esri-layer-list__item-toggle {
        display: ${i};
      }

      .esri-layer-list {
        background-color: ${o};
      }

      .esri-layer-list__item {
        background-color: ${a};
      }

      /* .esri-layer-list {
        background-color: ${e.colors.palette.light[100]};
        color: ${e.colors.black}
      }

      .esri-layer-list__item {
        background-color: ${e.colors.palette.light[100]};
      }

      .esri-layer-list__item--invisible-at-scale .esri-layer-list__item-title {
        color: ${e.colors.palette.light[800]}
      }

      .esri-layer-list__child-toggle{
        color: ${e.colors.black}
      }


      .esri-layer-list__item-actions-menu-item:hover {
        background-color: ${e.colors.palette.light[300]};
      }

      .esri-layer-list__item-actions-menu-item--active, .esri-layer-list__item-actions-menu-item--active:hover {
        background-color: ${e.colors.palette.light[300]};
      }

      .esri-layer-list__item-actions {
        background-color: ${e.colors.palette.light[200]};
        color: ${e.colors.black}
      }

      .esri-layer-list__item-action:hover {
        background-color: ${e.colors.palette.light[300]};
      }

      .esri-layer-list__item-actions-list {
        border-color: ${e.colors.palette.light[500]};
      } */
    }
  `}class n{constructor(){this.id="id",this.title="title",this.className="esri-icon",this.group=0,this.widget=null,this.isValid=e=>!1,this.execute=e=>{}}hasActionWithMessage(e){return!1}useMapWidget(){return this.widget.props.config.useMapWidget}}class c extends n{constructor(e,t){super(),this.isValid=e=>!e.parent&&!(!this.useMapWidget()||!this.widget.props.config.goto),this.execute=e=>{this.widget.viewFromMapWidget&&r.zoomToUtils.zoomTo(this.widget.viewFromMapWidget,e.layer,{})},this.id="goto",this.title=t,this.className="esri-icon-zoom-out-fixed",this.group=0,this.widget=e}}class l extends n{constructor(e,t,i){super(),this.isValid=e=>!e.parent&&!(!this.useMapWidget()||!this.widget.props.config.opacity),this.execute=e=>{this.isIncreaseOpacity?e.layer.opacity<1&&(e.layer.opacity+=.25):e.layer.opacity>0&&(e.layer.opacity-=.25)},this.id=i?"increaseOpacity":"decreaseOpacity",this.title=t,this.className=i?"esri-icon-up":"esri-icon-down",this.group=1,this.widget=e,this.isIncreaseOpacity=i}}class d extends n{constructor(e,t){super(),this.isValid=e=>!(!e.layer.url||!this.widget.props.config.information),this.execute=e=>{window.open(e.layer.url)},this.id="information",this.title=t,this.className="esri-icon-description",this.group=3,this.widget=e}}var u="Map Layers",h="Zoom to",p="Details",g="Increase opacity",y="Decrease opacity",m=function(e,t,i,s){return new(i||(i=Promise))((function(r,o){function a(e){try{c(s.next(e))}catch(e){o(e)}}function n(e){try{c(s.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(a,n)}c((s=s.apply(e,t||[])).next())}))};const f=i(259);var w;!function(e){e.Pending="Pending",e.Fulfilled="Fulfilled",e.Rejected="Rejected"}(w||(w={}));class v extends s.React.PureComponent{constructor(e){super(e),this.defineLayerListActions=e=>{const t=e.item,i={};t.actionsSections=[],this.layerListActions.forEach(e=>{if(e.isValid(t)){let t=i[e.group];t||(t=[],i[e.group]=t),t.push({id:e.id,title:e.title,className:e.className})}}),Object.entries(i).sort((e,t)=>Number(e[0])-Number(t[0])).forEach(([e,i])=>{t.actionsSections.push(i)})},this.onLayerListActionsTriggered=e=>{const t=e.action,i=e.item;this.layerListActions.find(e=>e.id===t.id).execute(i)},this.onActiveViewChange=e=>{const t=this.props.useMapWidgetIds&&this.props.useMapWidgetIds[0];e&&e.view||!t?(this.viewFromMapWidget=e&&e.view,this.setState({mapViewWidgetId:t,viewFromMapWidgetId:e.id})):this.destoryLayerList()},this.onDataSourceCreated=e=>{this.dataSource=e,this.setState({mapDataSourceId:e.id})},this.onCreateDataSourceFailed=e=>{},this.state={mapViewWidgetId:null,mapDataSourceId:null,viewFromMapWidgetId:null,loadStatus:w.Pending},this.renderPromise=Promise.resolve(),this.registerLayerListActions()}componentDidMount(){}componentDidUpdate(){this.props.config.useMapWidget?this.state.mapViewWidgetId===this.currentUseMapWidgetId&&this.syncRenderer(this.renderPromise):this.state.mapDataSourceId===this.currentUseDataSourceId&&this.syncRenderer(this.renderPromise)}createView(){return m(this,void 0,void 0,(function*(){return this.props.config.useMapWidget?yield Promise.resolve(this.viewFromMapWidget):yield this.createViewByDatatSource()}))}createViewByDatatSource(){return m(this,void 0,void 0,(function*(){return yield this.loadViewModules(this.dataSource).then(()=>m(this,void 0,void 0,(function*(){return this.dataSource.type===r.DataSourceTypes.WebMap?yield new Promise((e,t)=>this.createWebMapView(this.MapView,e,t)):this.dataSource.type===r.DataSourceTypes.WebScene?new Promise((e,t)=>this.createSceneView(this.SceneView,e,t)):Promise.reject()})))}))}createWebMapView(e,t,i){if(this.mapView)this.mapView.map=this.dataSource.map;else{const t={map:this.dataSource.map,container:this.refs.mapContainer};this.mapView=new e(t)}this.mapView.when(()=>{t(this.mapView)},e=>i(e))}createSceneView(e,t,i){if(this.sceneView)this.sceneView.map=this.dataSource.map;else{const e={map:this.dataSource.map,container:this.refs.mapContainer};this.sceneView=new this.SceneView(e)}this.sceneView.when(()=>{t(this.sceneView)},e=>i(e))}destoryView(){this.mapView&&!this.mapView.destroyed&&this.mapView.destroy(),this.sceneView&&!this.sceneView.destroyed&&this.sceneView.destroy()}loadViewModules(e){return m(this,void 0,void 0,(function*(){return e.type===r.DataSourceTypes.WebMap?this.MapView?yield Promise.resolve(this.MapView):yield Object(r.loadArcGISJSAPIModules)(["esri/views/MapView"]).then(e=>([this.MapView]=e,this.MapView)):e.type===r.DataSourceTypes.WebScene?this.SceneView?Promise.resolve(this.SceneView):Object(r.loadArcGISJSAPIModules)(["esri/views/SceneView"]).then(e=>([this.SceneView]=e,this.SceneView)):Promise.reject()}))}destoryLayerList(){this.layerList&&!this.layerList.destroyed&&this.layerList.destroy()}createLayerList(e){let t;return t=this.LayerList?Promise.resolve():Object(r.loadArcGISJSAPIModules)(["esri/widgets/LayerList"]).then(e=>{[this.LayerList]=e}),t.then(()=>{const t=document&&document.createElement("div");t.className="jimu-widget",this.refs.layerListContainer.appendChild(t),this.destoryLayerList(),this.layerList=new this.LayerList({view:e,listItemCreatedFunction:this.defineLayerListActions,container:t}),this.configLayerList(),this.layerList.on("trigger-action",e=>{this.onLayerListActionsTriggered(e)})})}registerLayerListActions(){this.layerListActions=[new c(this,this.props.intl.formatMessage({id:"goto",defaultMessage:h})),new l(this,this.props.intl.formatMessage({id:"increaseOpacity",defaultMessage:g}),!0),new l(this,this.props.intl.formatMessage({id:"decreaseOpacity",defaultMessage:y}),!1),new d(this,this.props.intl.formatMessage({id:"information",defaultMessage:p}))]}configLayerList(){this.props.config.setVisibility&&this.props.config.useMapWidget||(this.layerList._toggleVisibility=function(){})}renderLayerList(){return m(this,void 0,void 0,(function*(){return yield this.createView().then(e=>this.createLayerList(e)).then(()=>{this.setState({loadStatus:w.Fulfilled})}).catch(e=>console.error(e))}))}syncRenderer(e){this.renderPromise=new Promise((t,i)=>{e.then(()=>{this.renderLayerList().then(()=>{t(null)}).catch(()=>i())})})}render(){var e;const t=this.props.useMapWidgetIds&&this.props.useMapWidgetIds[0],i=this.props.useDataSources&&this.props.useDataSources[0];this.currentUseMapWidgetId=t,this.currentUseDataSourceId=i&&i.dataSourceId;let n=null;this.props.config.useMapWidget?n=Object(s.jsx)(r.JimuMapViewComponent,{useMapWidgetId:null===(e=this.props.useMapWidgetIds)||void 0===e?void 0:e[0],onActiveViewChange:this.onActiveViewChange}):i&&(n=Object(s.jsx)(s.DataSourceComponent,{useDataSource:i,onDataSourceCreated:this.onDataSourceCreated,onCreateDataSourceFailed:this.onCreateDataSourceFailed}));let c=null;if(this.props.config.useMapWidget?t:i){let e=null;this.state.loadStatus===w.Pending&&(e=Object(s.jsx)("div",{style:{position:"absolute",left:"50%",top:"50%"},className:"jimu-secondary-loading"})),c=Object(s.jsx)("div",{className:"widget-layerlist"},e,Object(s.jsx)("div",{ref:"layerListContainer"}),Object(s.jsx)("div",{style:{position:"absolute",opacity:0},ref:"mapContainer"},"mapContainer"),Object(s.jsx)("div",{style:{position:"absolute",display:"none"}},n))}else this.destoryLayerList(),c=Object(s.jsx)("div",{className:"widget-layerlist"},Object(s.jsx)(o.WidgetPlaceholder,{icon:f,message:this.props.intl.formatMessage({id:"_widgetLabel",defaultMessage:u}),widgetId:this.props.id}));return Object(s.jsx)("div",{css:a(this.props.theme,this.props.config),className:"jimu-widget"},c)}}}}))}}}));