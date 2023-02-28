System.register(["jimu-core","jimu-arcgis","jimu-ui"],(function(e,t){var i={},s={},r={};return{setters:[function(e){i.DataSourceComponent=e.DataSourceComponent,i.React=e.React,i.css=e.css,i.jsx=e.jsx,i.portalUrlUtils=e.portalUrlUtils},function(e){s.DataSourceTypes=e.DataSourceTypes,s.JimuMapViewComponent=e.JimuMapViewComponent,s.loadArcGISJSAPIModules=e.loadArcGISJSAPIModules,s.zoomToUtils=e.zoomToUtils},function(e){r.WidgetPlaceholder=e.WidgetPlaceholder}],execute:function(){e((()=>{var e={59169:e=>{e.exports='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M19.324 15.04a.493.493 0 0 1 .632.216c.11.22.006.482-.232.585L10 20 .276 15.84c-.238-.102-.342-.363-.232-.584a.493.493 0 0 1 .632-.215L10 19.029ZM10 19.03l-.2.085h.4l-.2-.086Zm9.324-8.99a.493.493 0 0 1 .632.216c.11.22.006.482-.232.585L10 15 .276 10.84c-.238-.102-.342-.363-.232-.584a.493.493 0 0 1 .632-.215L10 14.029ZM10.226.055l9.523 4.888a.446.446 0 0 1-.025.813L10.2 9.958a.497.497 0 0 1-.4 0L.276 5.755a.446.446 0 0 1-.025-.813L9.775.054a.496.496 0 0 1 .45 0ZM10 .971 1.542 5.31 10 9.046l8.459-3.733L10 .97Z" fill="#000" fill-rule="nonzero"></path></svg>'},26826:e=>{"use strict";e.exports=s},48891:e=>{"use strict";e.exports=i},30726:e=>{"use strict";e.exports=r}},t={};function a(i){var s=t[i];if(void 0!==s)return s.exports;var r=t[i]={exports:{}};return e[i](r,r.exports,a),r.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.p="";var o={};return a.p=window.jimuConfig.baseUrl,(()=>{"use strict";a.r(o),a.d(o,{LoadStatus:()=>h,default:()=>y});var e=a(48891),t=a(26826),i=a(30726);function s(t,i){let s,r;i.setVisibility&&i.useMapWidget?(s="block",r=""):(s="none",r="unset");const a=t.surfaces[1].bg,o=t.surfaces[1].bg;return e.css`
    overflow: auto;
    .widget-layerlist {
      width: 100%;
      height: 100%;
      min-height: 32px;
      /*background-color: ${t.arcgis.widgets.layerlist.root.bg};*/
      background-color: ${a};

      .esri-layer-list__item-label:focus {
        outline: ${r};
      }

      .esri-layer-list__item-toggle {
        display: ${s};
      }

      .esri-layer-list {
        background-color: ${a};
      }

      .esri-layer-list__item {
        background-color: ${o};
      }

      /* .esri-layer-list {
        background-color: ${t.colors.palette.light[100]};
        color: ${t.colors.black}
      }

      .esri-layer-list__item {
        background-color: ${t.colors.palette.light[100]};
      }

      .esri-layer-list__item--invisible-at-scale .esri-layer-list__item-title {
        color: ${t.colors.palette.light[800]}
      }

      .esri-layer-list__child-toggle{
        color: ${t.colors.black}
      }


      .esri-layer-list__item-actions-menu-item:hover {
        background-color: ${t.colors.palette.light[300]};
      }

      .esri-layer-list__item-actions-menu-item--active, .esri-layer-list__item-actions-menu-item--active:hover {
        background-color: ${t.colors.palette.light[300]};
      }

      .esri-layer-list__item-actions {
        background-color: ${t.colors.palette.light[200]};
        color: ${t.colors.black}
      }

      .esri-layer-list__item-action:hover {
        background-color: ${t.colors.palette.light[300]};
      }

      .esri-layer-list__item-actions-list {
        border-color: ${t.colors.palette.light[500]};
      } */
    }
  `}class r{constructor(){this.id="id",this.title="title",this.className="esri-icon",this.group=0,this.widget=null,this.isValid=e=>!1,this.execute=e=>{}}hasActionWithMessage(e){return!1}useMapWidget(){return this.widget.props.config.useMapWidget}}class l extends r{constructor(e,i){super(),this.isValid=e=>!("esri.layers.GroupLayer"===e.layer.declaredClass||e.parent&&"esri.layers.GroupLayer"!==e.parent.layer.declaredClass||!this.useMapWidget()||!this.widget.props.config.goto),this.execute=e=>{this.widget.viewFromMapWidget&&t.zoomToUtils.zoomTo(this.widget.viewFromMapWidget,e.layer,{})},this.id="goto",this.title=i,this.className="esri-icon-zoom-out-fixed",this.group=0,this.widget=e}}class n extends r{constructor(e,t,i){super(),this.isValid=e=>{var t;return this.title=e.layer.labelsVisible?this.titleHide:this.titleShow,!!(this.useMapWidget()&&this.widget.props.config.label&&(null===(t=null==e?void 0:e.layer)||void 0===t?void 0:t.labelingInfo))},this.execute=e=>{e.layer.labelsVisible=!e.layer.labelsVisible,this.updateTitle(e.layer.labelsVisible)},this.updateTitle=e=>{var t,i;const s=document.querySelector(`.widget-layerlist_${null===(i=null===(t=this.widget)||void 0===t?void 0:t.props)||void 0===i?void 0:i.id} .esri-layer-list__item-action .label-action-title`),r=null==s?void 0:s.parentElement;let a;null==r||r.childNodes.forEach((e=>{var t;(null===(t=e.className)||void 0===t?void 0:t.indexOf("esri-layer-list__item-action-title"))>-1&&(a=e)})),a&&(a.innerHTML=e?this.titleHide:this.titleShow)},this.id="label",this.className="esri-icon-labels label-action-title",this.group=0,this.widget=e,this.titleShow=t,this.titleHide=i}}class c extends r{constructor(e,t,i){super(),this.isValid=e=>!(e.parent&&"esri.layers.GroupLayer"!==e.parent.layer.declaredClass||!this.useMapWidget()||!this.widget.props.config.opacity),this.execute=e=>{this.isIncreaseOpacity?e.layer.opacity<1&&(e.layer.opacity+=.25):e.layer.opacity>0&&(e.layer.opacity-=.25)},this.id=i?"increaseOpacity":"decreaseOpacity",this.title=t,this.className=i?"esri-icon-up":"esri-icon-down",this.group=1,this.widget=e,this.isIncreaseOpacity=i}}class d extends r{constructor(t,i){super(),this.isValid=e=>!(!e.layer.url||!this.widget.props.config.information),this.execute=t=>{var i;const s=t.layer,r=null==s?void 0:s.portalItem;if((null===(i=null==r?void 0:r.portal)||void 0===i?void 0:i.url)&&r.id){const t=e.portalUrlUtils.getStandardPortalUrl(r.portal.url)+`/home/item.html?id=${r.id}`;window.open(t)}else{const e="feature"===(null==s?void 0:s.type)?`${s.url}/${s.layerId}`:s.url;window.open(e)}},this.id="information",this.title=i,this.className="esri-icon-description",this.group=3,this.widget=t}}var h,u=a(59169),p=a.n(u),g=function(e,t,i,s){return new(i||(i=Promise))((function(r,a){function o(e){try{n(s.next(e))}catch(e){a(e)}}function l(e){try{n(s.throw(e))}catch(e){a(e)}}function n(e){var t;e.done?r(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(o,l)}n((s=s.apply(e,t||[])).next())}))};!function(e){e.Pending="Pending",e.Fulfilled="Fulfilled",e.Rejected="Rejected"}(h||(h={}));class y extends e.React.PureComponent{constructor(e){super(e),this.defineLayerListActions=e=>{const t=e.item,i={};t.actionsSections=[],this.layerListActions.forEach((e=>{if(e.isValid(t)){let t=i[e.group];t||(t=[],i[e.group]=t),t.push({id:e.id,title:e.title,className:e.className})}})),Object.entries(i).sort(((e,t)=>Number(e[0])-Number(t[0]))).forEach((([e,i])=>{t.actionsSections.push(i)}))},this.onLayerListActionsTriggered=e=>{const t=e.action,i=e.item;this.layerListActions.find((e=>e.id===t.id)).execute(i)},this.onActiveViewChange=e=>{const t=this.props.useMapWidgetIds&&this.props.useMapWidgetIds[0];e&&e.view||!t?(this.viewFromMapWidget=e&&e.view,this.setState({mapViewWidgetId:t,viewFromMapWidgetId:e.id})):this.destoryLayerList()},this.onDataSourceCreated=e=>{this.dataSource=e,this.setState({mapDataSourceId:e.id})},this.onCreateDataSourceFailed=e=>{},this.state={mapViewWidgetId:null,mapDataSourceId:null,viewFromMapWidgetId:null,loadStatus:h.Pending},this.renderPromise=Promise.resolve(),this.registerLayerListActions()}componentDidMount(){}componentDidUpdate(){this.props.config.useMapWidget?this.state.mapViewWidgetId===this.currentUseMapWidgetId&&this.syncRenderer(this.renderPromise):this.state.mapDataSourceId===this.currentUseDataSourceId&&this.syncRenderer(this.renderPromise)}createView(){return g(this,void 0,void 0,(function*(){return this.props.config.useMapWidget?yield Promise.resolve(this.viewFromMapWidget):yield this.createViewByDatatSource()}))}createViewByDatatSource(){return g(this,void 0,void 0,(function*(){return yield this.loadViewModules(this.dataSource).then((()=>g(this,void 0,void 0,(function*(){return this.dataSource.type===t.DataSourceTypes.WebMap?yield new Promise(((e,t)=>this.createWebMapView(this.MapView,e,t))):this.dataSource.type===t.DataSourceTypes.WebScene?new Promise(((e,t)=>this.createSceneView(this.SceneView,e,t))):Promise.reject()}))))}))}createWebMapView(e,t,i){if(this.mapView)this.mapView.map=this.dataSource.map;else{const t={map:this.dataSource.map,container:this.refs.mapContainer};this.mapView=new e(t)}this.mapView.when((()=>{t(this.mapView)}),(e=>i(e)))}createSceneView(e,t,i){if(this.sceneView)this.sceneView.map=this.dataSource.map;else{const e={map:this.dataSource.map,container:this.refs.mapContainer};this.sceneView=new this.SceneView(e)}this.sceneView.when((()=>{t(this.sceneView)}),(e=>i(e)))}destoryView(){this.mapView&&!this.mapView.destroyed&&this.mapView.destroy(),this.sceneView&&!this.sceneView.destroyed&&this.sceneView.destroy()}loadViewModules(e){return g(this,void 0,void 0,(function*(){return e.type===t.DataSourceTypes.WebMap?this.MapView?yield Promise.resolve(this.MapView):yield(0,t.loadArcGISJSAPIModules)(["esri/views/MapView"]).then((e=>([this.MapView]=e,this.MapView))):e.type===t.DataSourceTypes.WebScene?this.SceneView?Promise.resolve(this.SceneView):(0,t.loadArcGISJSAPIModules)(["esri/views/SceneView"]).then((e=>([this.SceneView]=e,this.SceneView))):Promise.reject()}))}destoryLayerList(){this.layerList&&!this.layerList.destroyed&&this.layerList.destroy()}createLayerList(e){let i;return i=this.LayerList?Promise.resolve():(0,t.loadArcGISJSAPIModules)(["esri/widgets/LayerList"]).then((e=>{[this.LayerList]=e})),i.then((()=>{const t=document&&document.createElement("div");t.className="jimu-widget",this.refs.layerListContainer.appendChild(t),this.destoryLayerList(),this.layerList=new this.LayerList({view:e,listItemCreatedFunction:this.defineLayerListActions,container:t}),this.configLayerList(),this.layerList.on("trigger-action",(e=>{this.onLayerListActionsTriggered(e)}))}))}registerLayerListActions(){this.layerListActions=[new l(this,this.props.intl.formatMessage({id:"goto",defaultMessage:"Zoom to"})),new n(this,this.props.intl.formatMessage({id:"showLabels",defaultMessage:"Show labels"}),this.props.intl.formatMessage({id:"hideLabels",defaultMessage:"Hide labels"})),new c(this,this.props.intl.formatMessage({id:"increaseOpacity",defaultMessage:"Increase opacity"}),!0),new c(this,this.props.intl.formatMessage({id:"decreaseOpacity",defaultMessage:"Decrease opacity"}),!1),new d(this,this.props.intl.formatMessage({id:"information",defaultMessage:"Details"}))]}configLayerList(){this.props.config.setVisibility&&this.props.config.useMapWidget||(this.layerList._toggleVisibility=function(){})}renderLayerList(){return g(this,void 0,void 0,(function*(){return yield this.createView().then((e=>this.createLayerList(e))).then((()=>{this.setState({loadStatus:h.Fulfilled})})).catch((e=>console.error(e)))}))}syncRenderer(e){this.renderPromise=new Promise(((t,i)=>{e.then((()=>{this.renderLayerList().then((()=>{t(null)})).catch((()=>i()))}))}))}render(){var r;const a=this.props.useMapWidgetIds&&this.props.useMapWidgetIds[0],o=this.props.useDataSources&&this.props.useDataSources[0];this.currentUseMapWidgetId=a,this.currentUseDataSourceId=o&&o.dataSourceId;let l=null;this.props.config.useMapWidget?l=(0,e.jsx)(t.JimuMapViewComponent,{useMapWidgetId:null===(r=this.props.useMapWidgetIds)||void 0===r?void 0:r[0],onActiveViewChange:this.onActiveViewChange}):o&&(l=(0,e.jsx)(e.DataSourceComponent,{useDataSource:o,onDataSourceCreated:this.onDataSourceCreated,onCreateDataSourceFailed:this.onCreateDataSourceFailed}));let n=null;if(this.props.config.useMapWidget?a:o){let t=null;this.state.loadStatus===h.Pending&&(t=(0,e.jsx)("div",{className:"jimu-secondary-loading"})),n=(0,e.jsx)("div",{className:`widget-layerlist widget-layerlist_${this.props.id}`},t,(0,e.jsx)("div",{ref:"layerListContainer"}),(0,e.jsx)("div",{style:{position:"absolute",opacity:0},ref:"mapContainer"},"mapContainer"),(0,e.jsx)("div",{style:{position:"absolute",display:"none"}},l))}else this.destoryLayerList(),n=(0,e.jsx)("div",{className:"widget-layerlist"},(0,e.jsx)(i.WidgetPlaceholder,{icon:p(),message:this.props.intl.formatMessage({id:"_widgetLabel",defaultMessage:"Map Layers"}),widgetId:this.props.id}));return(0,e.jsx)("div",{css:s(this.props.theme,this.props.config),className:"jimu-widget"},n)}}})(),o})())}}}));