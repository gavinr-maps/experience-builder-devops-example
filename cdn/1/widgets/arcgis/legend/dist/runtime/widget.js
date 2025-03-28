System.register(["jimu-core","jimu-arcgis","jimu-ui"],(function(e,t){var i={},o={},s={};return{setters:[function(e){i.BaseVersionManager=e.BaseVersionManager,i.DataSourceComponent=e.DataSourceComponent,i.DataSourceTypes=e.DataSourceTypes,i.React=e.React,i.ReactResizeDetector=e.ReactResizeDetector,i.css=e.css,i.jsx=e.jsx},function(e){o.JimuMapViewComponent=e.JimuMapViewComponent,o.loadArcGISJSAPIModules=e.loadArcGISJSAPIModules},function(e){s.FillType=e.FillType,s.WidgetPlaceholder=e.WidgetPlaceholder,s.styleUtils=e.styleUtils}],execute:function(){e((()=>{var e={32117:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path fill="#000" fill-rule="evenodd" d="M3 5 1.5 2 0 5zm16.318-2c.377 0 .682.224.682.5s-.305.5-.682.5H5.682C5.305 4 5 3.776 5 3.5s.305-.5.682-.5zM20 9.5c0-.276-.305-.5-.682-.5H5.682C5.305 9 5 9.224 5 9.5s.305.5.682.5h13.636c.377 0 .682-.224.682-.5m0 6c0-.276-.305-.5-.682-.5H5.682c-.377 0-.682.224-.682.5s.305.5.682.5h13.636c.377 0 .682-.224.682-.5m-17 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0M3 8v3H0V8z" clip-rule="evenodd"></path></svg>'},62686:e=>{"use strict";e.exports=o},79244:e=>{"use strict";e.exports=i},14321:e=>{"use strict";e.exports=s}},t={};function r(i){var o=t[i];if(void 0!==o)return o.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,r),s.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="";var n={};return r.p=window.jimuConfig.baseUrl,(()=>{"use strict";r.r(n),r.d(n,{LoadStatus:()=>h,__set_webpack_public_path__:()=>w,default:()=>f});var e,t=r(79244),i=r(62686),o=r(14321);function s(e,i){var s,r,n,a,c,d,l;const u=o.styleUtils.toCSSStyle({background:i.background});delete u.backgroundColor;const h=i.fontColor||(null===(n=null===(r=null===(s=e.arcgis.widgets.legend.variants)||void 0===s?void 0:s.default)||void 0===r?void 0:r.root)||void 0===n?void 0:n.color),p=(null===(a=i.background)||void 0===a?void 0:a.color)||e.sys.color.surface.paper,g=e.sys.color.surface.paper;return t.css`
    overflow: auto;
    .widget-legend {
      width: 100%;
      height: 100%;
      min-height: 32px;
      /*background-color: ${null===(l=null===(d=null===(c=e.arcgis.widgets.legend.variants)||void 0===c?void 0:c.card)||void 0===d?void 0:d.root)||void 0===l?void 0:l.bg};*/
      background-color: ${p};
      position: relative;
      ${u}
      --calcite-color-text-2: ${h};

      .esri-legend {
        background-color: transparent;
        color: ${h};
        height: 100%;
        .esri-legend--card {
          .esri-legend--card__carousel {
            height: 100%;
            width: 100%;
            max-height: unset;
          }
        }
      }

      .esri-legend.esri-widget.esri-widget--panel {
        .esri-legend__layer {
          overflow-x: hidden;
        }
      }

      .esri-legend--card {
        background-color: transparent;
        color: ${h};
        height: 100%;
      }

      .esri-legend--card.esri-legend--stacked{
      /*
        position: absolute;
        height: 100%;
        width: 100%;
      */
        flex-direction: column;
        justify-content: space-between;
      }

      .esri-legend--card__section {
        width: 100%;
        height: unset;
        margin-bottom: 32px;
      }

      .esri-legend--card__carousel-indicator-container {
        order: 1;
        color: ${h};
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
      }

      .esri-legend--card__service-caption-container {
        color: ${h};
      }

      .esri-legend--card.esri-widget{
        background-color: ${g};
      }

      /* .esri-legend {
        background-color: ${e.ref.palette.neutral[200]};
        color: ${e.ref.palette.black}
      }

      .esri-widget__heading {
        color: ${e.ref.palette.black};
      }

      .esri-legend--card.esri-widget{
        background-color: ${e.ref.palette.neutral[400]};
        color: ${e.ref.palette.black}
      }

      .esri-legend--card__section {
        width: 100%;
        background-color: ${e.ref.palette.neutral[200]};
        color: ${e.ref.palette.black}
      }

      .esri-legend--card__carousel-indicator-container {
        background-color: ${e.ref.palette.neutral[400]};
      }

      .esri-legend--card__service {
        width: 100%;
      }

      .esri-legend--card__service-caption-container {
        background-color: ${e.ref.palette.neutral[400]};
        color: ${e.ref.palette.black};
      } */

      /*
      .esri-legend--card__carousel-indicator {
        background-color: ${e.ref.palette.neutral[1200]};
      }
      */
    }
  `}!function(e){e.ShowVisible="show-visible",e.ShowWithinExtent="show-within-extent",e.ShowAll="show-all"}(e||(e={}));const a="Legend";var c=r(32117),d=r.n(c);class l extends t.BaseVersionManager{constructor(){super(...arguments),this.versions=[{version:"1.17.0",description:"Update respectLayerDefinitionExp option",upgrader:e=>e.set("respectLayerDefinitionExp",!1)}]}}const u=new l;var h,p=function(e,t,i,o){return new(i||(i=Promise))((function(s,r){function n(e){try{c(o.next(e))}catch(e){r(e)}}function a(e){try{c(o.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(n,a)}c((o=o.apply(e,t||[])).next())}))};!function(e){e.Pending="Pending",e.Fulfilled="Fulfilled",e.Rejected="Rejected"}(h||(h={}));class g extends t.React.PureComponent{constructor(o){super(o),this.legendWrapperRef=t.React.createRef(),this.legendContainerRef=t.React.createRef(),this.mapContainerRef=t.React.createRef(),this.createWebMapView=(e,t,i)=>{this.destroyView();const o={map:this.dataSource.map,container:this.mapContainerRef.current};this.mapView=new e(o),this.mapView.when((()=>{t(this.mapView)}),(e=>i(e)))},this.createSceneView=(e,t,i)=>{this.destroyView();const o={map:this.dataSource.map,container:this.mapContainerRef.current};this.sceneView=new this.SceneView(o),this.sceneView.when((()=>{t(this.sceneView)}),(e=>i(e)))},this.loadViewModules=e=>p(this,void 0,void 0,(function*(){return e.type===t.DataSourceTypes.WebMap?(this.MapView||([this.MapView]=yield(0,i.loadArcGISJSAPIModules)(["esri/views/MapView"])),this.MapView):e.type===t.DataSourceTypes.WebScene?(this.SceneView||([this.SceneView]=yield(0,i.loadArcGISJSAPIModules)(["esri/views/SceneView"])),this.SceneView):Promise.reject(new Error(null))})),this.destroyLegend=()=>{this.legend&&!this.legend.destroyed&&this.legend.destroy()},this.createLegend=e=>p(this,void 0,void 0,(function*(){this.Legend||([this.Legend]=yield(0,i.loadArcGISJSAPIModules)(["esri/widgets/Legend"]));const t=document&&document.createElement("div");this.legendContainerRef.current&&this.legendContainerRef.current.appendChild(t),e.when((()=>{this.destroyLegend(),this.legend=new this.Legend({view:e,container:t}),this.configLegend()}))})),this.configLegend=()=>{if(this.legend){const t=this.props.config.showBaseMap;this.legend.style=this.calculateStyle(),this.legend.basemapLegendVisible=t;const i=this.props.config.legendMode;i===e.ShowAll?this.legend.respectLayerVisibility=!1:i===e.ShowWithinExtent&&(this.legend.hideLayersNotInCurrentView=!0)}},this.calculateStyle=()=>{let e;const t=this.currentWidth||1e5;if(this.legend)if(this.props.config.cardStyle){let i;i=this.props.config.cardLayout&&"auto"!==this.props.config.cardLayout?this.props.config.cardLayout:t<=600?"stack":"side-by-side",e={type:"card",layout:i}}else e="classic";else e="classic";return e},this.onActiveViewChange=e=>{e&&e.view?this.createLegend(e.view).then((()=>{this.setState({loadStatus:h.Fulfilled})})).catch((e=>{console.error(e)})):this.destroyLegend()},this.onDataSourceCreated=e=>{this.dataSource=e,this.createViewByDataSource(e).then((e=>this.createLegend(e))).then((()=>{this.setState({loadStatus:h.Fulfilled})})).catch((e=>{console.error(e)}))},this.onCreateDataSourceFailed=e=>{},this.onResize=({width:e,height:t})=>{if(this.currentWidth=e,this.legend&&"auto"===this.props.config.cardLayout){const e=this.calculateStyle();this.legend.style=e}},this.state={loadStatus:h.Pending,widgetKey:Math.random()}}componentDidUpdate(e,t,i){this.props.config!==e.config&&this.setState({widgetKey:Math.random()})}createViewByDataSource(e){return p(this,void 0,void 0,(function*(){return yield this.loadViewModules(e).then((()=>p(this,void 0,void 0,(function*(){return e.type===t.DataSourceTypes.WebMap?yield new Promise(((e,t)=>{this.createWebMapView(this.MapView,e,t)})):e.type===t.DataSourceTypes.WebScene?new Promise(((e,t)=>{this.createSceneView(this.SceneView,e,t)})):Promise.reject(new Error(null))}))))}))}destroyView(){this.mapView&&!this.mapView.destroyed&&this.mapView.destroy(),this.sceneView&&!this.sceneView.destroyed&&this.sceneView.destroy()}getDefaultStyleConfig(){return{useCustom:!1,background:{color:"",fillType:o.FillType.FILL},fontColor:""}}getStyleConfig(){return this.props.config.style&&this.props.config.style.useCustom?this.props.config.style:this.getDefaultStyleConfig()}render(){var e;const r=this.props.useMapWidgetIds&&this.props.useMapWidgetIds[0],n=this.props.useDataSources&&this.props.useDataSources[0];let c=null,l=null;if(r?l=(0,t.jsx)(i.JimuMapViewComponent,{useMapWidgetId:null===(e=this.props.useMapWidgetIds)||void 0===e?void 0:e[0],onActiveViewChange:this.onActiveViewChange}):n&&(l=(0,t.jsx)(t.DataSourceComponent,{useDataSource:n,onDataSourceCreated:this.onDataSourceCreated,onCreateDataSourceFailed:this.onCreateDataSourceFailed})),r||n){let e=null;this.state.loadStatus===h.Pending&&(e=(0,t.jsx)("div",{className:"jimu-secondary-loading"})),window.jimuConfig.isInBuilder&&this.configLegend(),c=(0,t.jsx)("div",{key:this.state.widgetKey,className:"widget-legend",ref:this.legendWrapperRef},e,(0,t.jsx)("div",{ref:this.legendContainerRef,style:{height:"100%"}}),(0,t.jsx)("div",{style:{position:"absolute",display:"none"},ref:this.mapContainerRef},"mapContainer"),(0,t.jsx)("div",{style:{position:"absolute",display:"none"}},l),(0,t.jsx)(t.ReactResizeDetector,{targetRef:this.legendWrapperRef,handleHeight:!0,handleWidth:!0,onResize:this.onResize}))}else this.destroyLegend(),c=(0,t.jsx)("div",{className:"widget-legend"},(0,t.jsx)(o.WidgetPlaceholder,{icon:d(),autoFlip:!0,message:this.props.intl.formatMessage({id:"_widgetLabel",defaultMessage:a}),widgetId:this.props.id}));return(0,t.jsx)("div",{css:s(this.props.theme,this.getStyleConfig()),className:"jimu-widget"},c)}}g.versionManager=u;const f=g;function w(e){r.p=e}})(),n})())}}}));