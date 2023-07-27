System.register(["jimu-core","jimu-arcgis","jimu-ui"],(function(e,t){var i={},o={},s={};return{setters:[function(e){i.DataSourceComponent=e.DataSourceComponent,i.React=e.React,i.ReactResizeDetector=e.ReactResizeDetector,i.css=e.css,i.jsx=e.jsx},function(e){o.DataSourceTypes=e.DataSourceTypes,o.JimuMapViewComponent=e.JimuMapViewComponent,o.loadArcGISJSAPIModules=e.loadArcGISJSAPIModules},function(e){s.FillType=e.FillType,s.WidgetPlaceholder=e.WidgetPlaceholder,s.styleUtils=e.styleUtils}],execute:function(){e((()=>{var e={28190:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path fill="#000" fill-rule="evenodd" d="M3 5 1.5 2 0 5h3Zm16.318-2c.377 0 .682.224.682.5s-.305.5-.682.5H5.682C5.305 4 5 3.776 5 3.5s.305-.5.682-.5h13.636ZM20 9.5c0-.276-.305-.5-.682-.5H5.682C5.305 9 5 9.224 5 9.5s.305.5.682.5h13.636c.377 0 .682-.224.682-.5Zm0 6c0-.276-.305-.5-.682-.5H5.682c-.377 0-.682.224-.682.5s.305.5.682.5h13.636c.377 0 .682-.224.682-.5Zm-17 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM3 8v3H0V8h3Z" clip-rule="evenodd"></path></svg>'},26826:e=>{"use strict";e.exports=o},48891:e=>{"use strict";e.exports=i},30726:e=>{"use strict";e.exports=s}},t={};function r(i){var o=t[i];if(void 0!==o)return o.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,r),s.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="";var n={};return r.p=window.jimuConfig.baseUrl,(()=>{"use strict";r.r(n),r.d(n,{LoadStatus:()=>s,__set_webpack_public_path__:()=>u,default:()=>d});var e=r(48891),t=r(26826),i=r(30726);function o(t,o){var s,r,n,a,c,l,d;const u=i.styleUtils.toCSSStyle({background:o.background});delete u.backgroundColor;const h=o.fontColor||(null===(n=null===(r=null===(s=t.arcgis.widgets.legend.variants)||void 0===s?void 0:s.default)||void 0===r?void 0:r.root)||void 0===n?void 0:n.color),g=(null===(a=o.background)||void 0===a?void 0:a.color)||t.surfaces[1].bg,p=t.surfaces[1].bg;return e.css`
    overflow: auto;
    .widget-legend {
      width: 100%;
      height: 100%;
      min-height: 32px;
      /*background-color: ${null===(d=null===(l=null===(c=t.arcgis.widgets.legend.variants)||void 0===c?void 0:c.card)||void 0===l?void 0:l.root)||void 0===d?void 0:d.bg};*/
      background-color: ${g};
      position: relative;
      ${u}

      .esri-legend {
        background-color: transparent;
        color: ${h};
        height: 100%;
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
        background-color: ${p};
      }

      /* .esri-legend {
        background-color: ${t.colors.palette.light[100]};
        color: ${t.colors.black}
      }

      .esri-widget__heading {
        color: ${t.colors.black};
      }

      .esri-legend--card.esri-widget{
        background-color: ${t.colors.palette.light[300]};
        color: ${t.colors.black}
      }

      .esri-legend--card__section {
        width: 100%;
        background-color: ${t.colors.palette.light[100]};
        color: ${t.colors.black}
      }

      .esri-legend--card__carousel-indicator-container {
        background-color: ${t.colors.palette.light[300]};
      }

      .esri-legend--card__service {
        width: 100%;
      }

      .esri-legend--card__service-caption-container {
        background-color: ${t.colors.palette.light[300]};
        color: ${t.colors.black};
      } */

      /*
      .esri-legend--card__carousel-indicator {
        background-color: ${t.colors.palette.dark[900]};
      }
      */
    }
  `}var s,a=r(28190),c=r.n(a),l=function(e,t,i,o){return new(i||(i=Promise))((function(s,r){function n(e){try{c(o.next(e))}catch(e){r(e)}}function a(e){try{c(o.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(n,a)}c((o=o.apply(e,t||[])).next())}))};!function(e){e.Pending="Pending",e.Fulfilled="Fulfilled",e.Rejected="Rejected"}(s||(s={}));class d extends e.React.PureComponent{constructor(e){super(e),this.componentDidMount=()=>{},this.componentWillUnmount=()=>{},this.createWebMapView=(e,t,i)=>{this.destoryView();const o={map:this.dataSource.map,container:this.refs.mapContainer};this.mapView=new e(o),this.mapView.when((()=>{t(this.mapView)}),(e=>i(e)))},this.createSceneView=(e,t,i)=>{this.destoryView();const o={map:this.dataSource.map,container:this.refs.mapContainer};this.sceneView=new this.SceneView(o),this.sceneView.when((()=>{t(this.sceneView)}),(e=>i(e)))},this.loadViewModules=e=>l(this,void 0,void 0,(function*(){return e.type===t.DataSourceTypes.WebMap?this.MapView?yield Promise.resolve(this.MapView):yield(0,t.loadArcGISJSAPIModules)(["esri/views/MapView"]).then((e=>([this.MapView]=e,this.MapView))):e.type===t.DataSourceTypes.WebScene?this.SceneView?Promise.resolve(this.SceneView):(0,t.loadArcGISJSAPIModules)(["esri/views/SceneView"]).then((e=>([this.SceneView]=e,this.SceneView))):Promise.reject()})),this.destoryLegend=()=>{this.legend&&!this.legend.destroyed&&this.legend.destroy()},this.createLegend=e=>{let i;return i=this.Legend?Promise.resolve():(0,t.loadArcGISJSAPIModules)(["esri/widgets/Legend"]).then((e=>{[this.Legend]=e})),i.then((()=>{const t=document&&document.createElement("div");this.refs.legendContainer.appendChild(t),this.destoryLegend(),e.when((()=>{this.legend=new this.Legend({view:e,container:t}),this.configLegend()}))}))},this.configLegend=()=>{if(this.legend){const e=this.props.config.showBaseMap;this.legend.style=this.calculateStyle(),this.legend.basemapLegendVisible=e}},this.calculateStyle=()=>{let e;const t=this.currentWidth||1e5;if(this.legend)if(this.props.config.cardStyle){let i;i=this.props.config.cardLayout&&"auto"!==this.props.config.cardLayout?this.props.config.cardLayout:t<=600?"stack":"side-by-side",e={type:"card",layout:i}}else e="classic";else e="classic";return e},this.onActiveViewChange=e=>{e&&e.view?this.createLegend(e.view).then((()=>{this.setState({loadStatus:s.Fulfilled})})).catch((e=>{console.error(e)})):this.destoryLegend()},this.onDataSourceCreated=e=>{this.dataSource=e,this.createViewByDataSource(e).then((e=>this.createLegend(e))).then((()=>{this.setState({loadStatus:s.Fulfilled})})).catch((e=>{console.error(e)}))},this.onCreateDataSourceFailed=e=>{},this.onResize=e=>{if(this.currentWidth=e,this.legend&&"auto"===this.props.config.cardLayout){const e=this.calculateStyle();this.legend.style=e}},this.state={loadStatus:s.Pending}}createViewByDataSource(e){return l(this,void 0,void 0,(function*(){return yield this.loadViewModules(e).then((()=>l(this,void 0,void 0,(function*(){return e.type===t.DataSourceTypes.WebMap?yield new Promise(((e,t)=>{this.createWebMapView(this.MapView,e,t)})):e.type===t.DataSourceTypes.WebScene?new Promise(((e,t)=>{this.createSceneView(this.SceneView,e,t)})):Promise.reject()}))))}))}destoryView(){this.mapView&&!this.mapView.destroyed&&this.mapView.destroy(),this.sceneView&&!this.sceneView.destroyed&&this.sceneView.destroy()}getDefaultStyleConfig(){return{useCustom:!1,background:{color:"",fillType:i.FillType.FILL},fontColor:""}}getStyleConfig(){return this.props.config.style&&this.props.config.style.useCustom?this.props.config.style:this.getDefaultStyleConfig()}render(){var r;const n=this.props.useMapWidgetIds&&this.props.useMapWidgetIds[0],a=this.props.useDataSources&&this.props.useDataSources[0];let l=null,d=null;if(n?d=(0,e.jsx)(t.JimuMapViewComponent,{useMapWidgetId:null===(r=this.props.useMapWidgetIds)||void 0===r?void 0:r[0],onActiveViewChange:this.onActiveViewChange}):a&&(d=(0,e.jsx)(e.DataSourceComponent,{useDataSource:a,onDataSourceCreated:this.onDataSourceCreated,onCreateDataSourceFailed:this.onCreateDataSourceFailed})),n||a){let t=null;this.state.loadStatus===s.Pending&&(t=(0,e.jsx)("div",{className:"jimu-secondary-loading"})),window.jimuConfig.isInBuilder&&this.configLegend(),l=(0,e.jsx)("div",{className:"widget-legend"},t,(0,e.jsx)("div",{ref:"legendContainer",style:{height:"100%"}}),(0,e.jsx)("div",{style:{position:"absolute",display:"none"},ref:"mapContainer"},"mapContainer"),(0,e.jsx)("div",{style:{position:"absolute",display:"none"}},d),(0,e.jsx)(e.ReactResizeDetector,{handleHeight:!0,handleWidth:!0,onResize:this.onResize}))}else this.destoryLegend(),l=(0,e.jsx)("div",{className:"widget-legend"},(0,e.jsx)(i.WidgetPlaceholder,{icon:c(),autoFlip:!0,message:this.props.intl.formatMessage({id:"_widgetLabel",defaultMessage:"Legend"}),widgetId:this.props.id}));return(0,e.jsx)("div",{css:o(this.props.theme,this.getStyleConfig()),className:"jimu-widget"},l)}}function u(e){r.p=e}})(),n})())}}}));