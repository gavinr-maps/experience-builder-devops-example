System.register(["jimu-core","jimu-arcgis","jimu-ui"],(function(e,t){var i={},o={},s={};return{setters:[function(e){i.DataSourceComponent=e.DataSourceComponent,i.React=e.React,i.ReactResizeDetector=e.ReactResizeDetector,i.css=e.css,i.jsx=e.jsx},function(e){o.DataSourceTypes=e.DataSourceTypes,o.JimuMapViewComponent=e.JimuMapViewComponent,o.loadArcGISJSAPIModules=e.loadArcGISJSAPIModules},function(e){s.FillType=e.FillType,s.WidgetPlaceholder=e.WidgetPlaceholder,s.styleUtils=e.styleUtils}],execute:function(){e((()=>{var e={32117:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path fill="#000" fill-rule="evenodd" d="M3 5 1.5 2 0 5zm16.318-2c.377 0 .682.224.682.5s-.305.5-.682.5H5.682C5.305 4 5 3.776 5 3.5s.305-.5.682-.5zM20 9.5c0-.276-.305-.5-.682-.5H5.682C5.305 9 5 9.224 5 9.5s.305.5.682.5h13.636c.377 0 .682-.224.682-.5m0 6c0-.276-.305-.5-.682-.5H5.682c-.377 0-.682.224-.682.5s.305.5.682.5h13.636c.377 0 .682-.224.682-.5m-17 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0M3 8v3H0V8z" clip-rule="evenodd"></path></svg>'},62686:e=>{"use strict";e.exports=o},79244:e=>{"use strict";e.exports=i},14321:e=>{"use strict";e.exports=s}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="";var r={};return n.p=window.jimuConfig.baseUrl,(()=>{"use strict";n.r(r),n.d(r,{LoadStatus:()=>l,__set_webpack_public_path__:()=>p,default:()=>h});var e,t=n(79244),i=n(62686),o=n(14321);function s(e,i){var s,n,r,a,l,c,d;const u=o.styleUtils.toCSSStyle({background:i.background});delete u.backgroundColor;const h=i.fontColor||(null===(r=null===(n=null===(s=e.arcgis.widgets.legend.variants)||void 0===s?void 0:s.default)||void 0===n?void 0:n.root)||void 0===r?void 0:r.color),p=(null===(a=i.background)||void 0===a?void 0:a.color)||e.sys.color.surface.paper,g=e.sys.color.surface.paper;return t.css`
    overflow: auto;
    .widget-legend {
      width: 100%;
      height: 100%;
      min-height: 32px;
      /*background-color: ${null===(d=null===(c=null===(l=e.arcgis.widgets.legend.variants)||void 0===l?void 0:l.card)||void 0===c?void 0:c.root)||void 0===d?void 0:d.bg};*/
      background-color: ${p};
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
  `}!function(e){e.ShowVisible="show-visible",e.ShowWithinExtent="show-within-extent",e.ShowAll="show-all"}(e||(e={}));const a="Legend";var l,c=n(32117),d=n.n(c),u=function(e,t,i,o){return new(i||(i=Promise))((function(s,n){function r(e){try{l(o.next(e))}catch(e){n(e)}}function a(e){try{l(o.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,a)}l((o=o.apply(e,t||[])).next())}))};!function(e){e.Pending="Pending",e.Fulfilled="Fulfilled",e.Rejected="Rejected"}(l||(l={}));class h extends t.React.PureComponent{constructor(t){super(t),this.createWebMapView=(e,t,i)=>{this.destroyView();const o={map:this.dataSource.map,container:this.refs.mapContainer};this.mapView=new e(o),this.mapView.when((()=>{t(this.mapView)}),(e=>i(e)))},this.createSceneView=(e,t,i)=>{this.destroyView();const o={map:this.dataSource.map,container:this.refs.mapContainer};this.sceneView=new this.SceneView(o),this.sceneView.when((()=>{t(this.sceneView)}),(e=>i(e)))},this.loadViewModules=e=>u(this,void 0,void 0,(function*(){return e.type===i.DataSourceTypes.WebMap?this.MapView?yield Promise.resolve(this.MapView):yield(0,i.loadArcGISJSAPIModules)(["esri/views/MapView"]).then((e=>([this.MapView]=e,this.MapView))):e.type===i.DataSourceTypes.WebScene?this.SceneView?Promise.resolve(this.SceneView):(0,i.loadArcGISJSAPIModules)(["esri/views/SceneView"]).then((e=>([this.SceneView]=e,this.SceneView))):Promise.reject()})),this.destroyLegend=()=>{this.legend&&!this.legend.destroyed&&this.legend.destroy()},this.createLegend=e=>{let t;return t=this.Legend?Promise.resolve():(0,i.loadArcGISJSAPIModules)(["esri/widgets/Legend"]).then((e=>{[this.Legend]=e})),t.then((()=>{const t=document&&document.createElement("div");this.refs.legendContainer.appendChild(t),this.destroyLegend(),e.when((()=>{this.legend=new this.Legend({view:e,container:t}),this.configLegend()}))}))},this.configLegend=()=>{if(this.legend){const t=this.props.config.showBaseMap;this.legend.style=this.calculateStyle(),this.legend.basemapLegendVisible=t;const i=this.props.config.legendMode;i===e.ShowAll?this.legend.respectLayerVisibility=!1:i===e.ShowWithinExtent&&(this.legend.hideLayersNotInCurrentView=!0)}},this.calculateStyle=()=>{let e;const t=this.currentWidth||1e5;if(this.legend)if(this.props.config.cardStyle){let i;i=this.props.config.cardLayout&&"auto"!==this.props.config.cardLayout?this.props.config.cardLayout:t<=600?"stack":"side-by-side",e={type:"card",layout:i}}else e="classic";else e="classic";return e},this.onActiveViewChange=e=>{e&&e.view?this.createLegend(e.view).then((()=>{this.setState({loadStatus:l.Fulfilled})})).catch((e=>{console.error(e)})):this.destroyLegend()},this.onDataSourceCreated=e=>{this.dataSource=e,this.createViewByDataSource(e).then((e=>this.createLegend(e))).then((()=>{this.setState({loadStatus:l.Fulfilled})})).catch((e=>{console.error(e)}))},this.onCreateDataSourceFailed=e=>{},this.onResize=e=>{if(this.currentWidth=e,this.legend&&"auto"===this.props.config.cardLayout){const e=this.calculateStyle();this.legend.style=e}},this.state={loadStatus:l.Pending,widgetKey:Math.random()}}componentDidUpdate(e,t,i){this.props.config!==e.config&&this.setState({widgetKey:Math.random()})}createViewByDataSource(e){return u(this,void 0,void 0,(function*(){return yield this.loadViewModules(e).then((()=>u(this,void 0,void 0,(function*(){return e.type===i.DataSourceTypes.WebMap?yield new Promise(((e,t)=>{this.createWebMapView(this.MapView,e,t)})):e.type===i.DataSourceTypes.WebScene?new Promise(((e,t)=>{this.createSceneView(this.SceneView,e,t)})):Promise.reject()}))))}))}destroyView(){this.mapView&&!this.mapView.destroyed&&this.mapView.destroy(),this.sceneView&&!this.sceneView.destroyed&&this.sceneView.destroy()}getDefaultStyleConfig(){return{useCustom:!1,background:{color:"",fillType:o.FillType.FILL},fontColor:""}}getStyleConfig(){return this.props.config.style&&this.props.config.style.useCustom?this.props.config.style:this.getDefaultStyleConfig()}render(){var e;const n=this.props.useMapWidgetIds&&this.props.useMapWidgetIds[0],r=this.props.useDataSources&&this.props.useDataSources[0];let c=null,u=null;if(n?u=(0,t.jsx)(i.JimuMapViewComponent,{useMapWidgetId:null===(e=this.props.useMapWidgetIds)||void 0===e?void 0:e[0],onActiveViewChange:this.onActiveViewChange}):r&&(u=(0,t.jsx)(t.DataSourceComponent,{useDataSource:r,onDataSourceCreated:this.onDataSourceCreated,onCreateDataSourceFailed:this.onCreateDataSourceFailed})),n||r){let e=null;this.state.loadStatus===l.Pending&&(e=(0,t.jsx)("div",{className:"jimu-secondary-loading"})),window.jimuConfig.isInBuilder&&this.configLegend(),c=(0,t.jsx)("div",{key:this.state.widgetKey,className:"widget-legend"},e,(0,t.jsx)("div",{ref:"legendContainer",style:{height:"100%"}}),(0,t.jsx)("div",{style:{position:"absolute",display:"none"},ref:"mapContainer"},"mapContainer"),(0,t.jsx)("div",{style:{position:"absolute",display:"none"}},u),(0,t.jsx)(t.ReactResizeDetector,{handleHeight:!0,handleWidth:!0,onResize:this.onResize}))}else this.destroyLegend(),c=(0,t.jsx)("div",{className:"widget-legend"},(0,t.jsx)(o.WidgetPlaceholder,{icon:d(),autoFlip:!0,message:this.props.intl.formatMessage({id:"_widgetLabel",defaultMessage:a}),widgetId:this.props.id}));return(0,t.jsx)("div",{css:s(this.props.theme,this.getStyleConfig()),className:"jimu-widget"},c)}}function p(e){n.p=e}})(),r})())}}}));