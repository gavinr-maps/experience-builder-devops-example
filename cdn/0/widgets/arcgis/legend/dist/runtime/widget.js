System.register(["jimu-core","jimu-ui","jimu-arcgis"],(function(e){var t,i,o;return{setters:[function(e){t=e},function(e){i=e},function(e){o=e}],execute:function(){e(function(e){var t={};function i(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=e,i.c=t,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=515)}({0:function(e,i){e.exports=t},1:function(e,t){e.exports=i},258:function(e,t){e.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 11a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm14 1a.5.5 0 110 1h-10a.5.5 0 110-1h10zM3 6v3H0V6h3zm12.5 1a.5.5 0 110 1h-10a.5.5 0 010-1h10zm-14-6L3 4H0l1.5-3zm14 1a.5.5 0 110 1h-10a.5.5 0 010-1h10z" fill="#000" fill-rule="evenodd"></path></svg>'},4:function(e,t){e.exports=o},515:function(e,t,i){"use strict";i.r(t),i.d(t,"LoadStatus",(function(){return d})),i.d(t,"default",(function(){return u}));var o=i(0),n=i(4),s=i(1);function r(e,t){var i,n,r,a,c,l,d;const u=s.styleUtils.toCSSStyle({background:t.background});delete u.backgroundColor;const h=t.fontColor||(null===(r=null===(n=null===(i=e.arcgis.widgets.legend.variants)||void 0===i?void 0:i.default)||void 0===n?void 0:n.root)||void 0===r?void 0:r.color),g=(null===(a=t.background)||void 0===a?void 0:a.color)||e.surfaces[1].bg,p=e.surfaces[1].bg;return o.css`
    overflow: auto;
    .widget-legend {
      width: 100%;
      height: 100%;
      /*background-color: ${null===(d=null===(l=null===(c=e.arcgis.widgets.legend.variants)||void 0===c?void 0:c.card)||void 0===l?void 0:l.root)||void 0===d?void 0:d.bg};*/
      background-color: ${g};
      position: relative;
      ${u}

      .esri-legend {
        background-color: transparent;
        color: ${h};
        height: 100%;
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
      }

      .esri-legend--card__service-caption-container {
        color: ${h};
      }

      .esri-legend--card.esri-widget{
        background-color: ${p};
      }

      /* .esri-legend {
        background-color: ${e.colors.palette.light[100]};
        color: ${e.colors.black}
      }

      .esri-widget__heading {
        color: ${e.colors.black};
      }

      .esri-legend--card.esri-widget{
        background-color: ${e.colors.palette.light[300]};
        color: ${e.colors.black}
      }

      .esri-legend--card__section {
        width: 100%;
        background-color: ${e.colors.palette.light[100]};
        color: ${e.colors.black}
      }

      .esri-legend--card__carousel-indicator-container {
        background-color: ${e.colors.palette.light[300]};
      }

      .esri-legend--card__service {
        width: 100%;
      }

      .esri-legend--card__service-caption-container {
        background-color: ${e.colors.palette.light[300]};
        color: ${e.colors.black};
      } */

      /*
      .esri-legend--card__carousel-indicator {
        background-color: ${e.colors.palette.dark[900]};
      }
      */
    }
  `}var a="Legend",c=function(e,t,i,o){return new(i||(i=Promise))((function(n,s){function r(e){try{c(o.next(e))}catch(e){s(e)}}function a(e){try{c(o.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,a)}c((o=o.apply(e,t||[])).next())}))};const l=i(258);var d;!function(e){e.Pending="Pending",e.Fulfilled="Fulfilled",e.Rejected="Rejected"}(d||(d={}));class u extends o.React.PureComponent{constructor(e){super(e),this.componentDidMount=()=>{},this.componentWillUnmount=()=>{},this.createWebMapView=(e,t,i)=>{this.destoryView();const o={map:this.dataSource.map,container:this.refs.mapContainer};this.mapView=new e(o),this.mapView.when(()=>{t(this.mapView)},e=>i(e))},this.createSceneView=(e,t,i)=>{this.destoryView();const o={map:this.dataSource.map,container:this.refs.mapContainer};this.sceneView=new this.SceneView(o),this.sceneView.when(()=>{t(this.sceneView)},e=>i(e))},this.loadViewModules=e=>c(this,void 0,void 0,(function*(){return e.type===n.DataSourceTypes.WebMap?this.MapView?yield Promise.resolve(this.MapView):yield Object(n.loadArcGISJSAPIModules)(["esri/views/MapView"]).then(e=>([this.MapView]=e,this.MapView)):e.type===n.DataSourceTypes.WebScene?this.SceneView?Promise.resolve(this.SceneView):Object(n.loadArcGISJSAPIModules)(["esri/views/SceneView"]).then(e=>([this.SceneView]=e,this.SceneView)):Promise.reject()})),this.destoryLegend=()=>{this.legend&&!this.legend.destroyed&&this.legend.destroy()},this.createLegend=e=>{let t;return t=this.Legend?Promise.resolve():Object(n.loadArcGISJSAPIModules)(["esri/widgets/Legend"]).then(e=>{[this.Legend]=e}),t.then(()=>{const t=document&&document.createElement("div");this.refs.legendContainer.appendChild(t),this.destoryLegend(),this.legend=new this.Legend({view:e,container:t}),this.configLegend()})},this.configLegend=()=>{if(this.legend){const e=this.props.config.showBaseMap;this.legend.style=this.calculateStyle(),this.legend.basemapLegendVisible=e}},this.calculateStyle=()=>{let e;const t=this.currentWidth||1e5;if(this.legend)if(this.props.config.cardStyle){let i;i="auto"===this.props.config.cardLayout?t<=600?"stack":"side-by-side":this.props.config.cardLayout,e={type:"card",layout:i}}else e="classic";else e="classic";return e},this.onActiveViewChange=e=>{e&&e.view?this.createLegend(e.view).then(()=>{this.setState({loadStatus:d.Fulfilled})}).catch(e=>console.error(e)):this.destoryLegend()},this.onDataSourceCreated=e=>{this.dataSource=e,this.createViewByDataSource(e).then(e=>this.createLegend(e)).then(()=>{this.setState({loadStatus:d.Fulfilled})}).catch(e=>console.error(e))},this.onCreateDataSourceFailed=e=>{},this.onResize=e=>{if(this.currentWidth=e,this.legend&&"auto"===this.props.config.cardLayout){const e=this.calculateStyle();this.legend.style=e}},this.state={loadStatus:d.Pending}}createViewByDataSource(e){return c(this,void 0,void 0,(function*(){return yield this.loadViewModules(e).then(()=>c(this,void 0,void 0,(function*(){return e.type===n.DataSourceTypes.WebMap?yield new Promise((e,t)=>this.createWebMapView(this.MapView,e,t)):e.type===n.DataSourceTypes.WebScene?new Promise((e,t)=>this.createSceneView(this.SceneView,e,t)):Promise.reject()})))}))}destoryView(){this.mapView&&!this.mapView.destroyed&&this.mapView.destroy(),this.sceneView&&!this.sceneView.destroyed&&this.sceneView.destroy()}getDefaultStyleConfig(){return{useCustom:!1,background:{color:"",fillType:s.FillType.FILL},fontColor:""}}getStyleConfig(){return this.props.config.style&&this.props.config.style.useCustom?this.props.config.style:this.getDefaultStyleConfig()}render(){var e;const t=this.props.useMapWidgetIds&&this.props.useMapWidgetIds[0],i=this.props.useDataSources&&this.props.useDataSources[0];let c=null,u=null;if(t?u=Object(o.jsx)(n.JimuMapViewComponent,{useMapWidgetId:null===(e=this.props.useMapWidgetIds)||void 0===e?void 0:e[0],onActiveViewChange:this.onActiveViewChange}):i&&(u=Object(o.jsx)(o.DataSourceComponent,{useDataSource:i,onDataSourceCreated:this.onDataSourceCreated,onCreateDataSourceFailed:this.onCreateDataSourceFailed})),t||i){let e=null;this.state.loadStatus===d.Pending&&(e=Object(o.jsx)("div",{style:{position:"absolute",left:"50%",top:"50%"},className:"jimu-secondary-loading"})),window.jimuConfig.isInBuilder&&this.configLegend(),c=Object(o.jsx)("div",{className:"widget-legend"},e,Object(o.jsx)("div",{ref:"legendContainer",style:{height:"100%"}}),Object(o.jsx)("div",{style:{position:"absolute",display:"none"},ref:"mapContainer"},"mapContainer"),Object(o.jsx)("div",{style:{position:"absolute",display:"none"}},u),Object(o.jsx)(o.ReactResizeDetector,{handleHeight:!0,handleWidth:!0,onResize:this.onResize}))}else this.destoryLegend(),c=Object(o.jsx)("div",{className:"widget-legend"},Object(o.jsx)(s.WidgetPlaceholder,{icon:l,autoFlip:!0,message:this.props.intl.formatMessage({id:"_widgetLabel",defaultMessage:a}),widgetId:this.props.id}));return Object(o.jsx)("div",{css:r(this.props.theme,this.getStyleConfig()),className:"jimu-widget"},c)}}}}))}}}));