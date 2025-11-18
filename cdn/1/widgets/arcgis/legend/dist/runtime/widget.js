System.register(["jimu-core","jimu-arcgis","jimu-ui","esri/core/reactiveUtils"],(function(e,t){var i={},s={},r={},o={};return{setters:[function(e){i.BaseVersionManager=e.BaseVersionManager,i.ExBAddedJSAPIProperties=e.ExBAddedJSAPIProperties,i.React=e.React,i.ReactResizeDetector=e.ReactResizeDetector,i.SupportedJSAPILayerTypes=e.SupportedJSAPILayerTypes,i.css=e.css,i.jsx=e.jsx},function(e){s.JimuMapViewComponent=e.JimuMapViewComponent,s.loadArcGISJSAPIModules=e.loadArcGISJSAPIModules},function(e){r.FillType=e.FillType,r.WidgetPlaceholder=e.WidgetPlaceholder,r.styleUtils=e.styleUtils},function(e){o.on=e.on}],execute:function(){e((()=>{var e={14321:e=>{"use strict";e.exports=r},32117:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path fill="#000" fill-rule="evenodd" d="M3 5 1.5 2 0 5zm16.318-2c.377 0 .682.224.682.5s-.305.5-.682.5H5.682C5.305 4 5 3.776 5 3.5s.305-.5.682-.5zM20 9.5c0-.276-.305-.5-.682-.5H5.682C5.305 9 5 9.224 5 9.5s.305.5.682.5h13.636c.377 0 .682-.224.682-.5m0 6c0-.276-.305-.5-.682-.5H5.682c-.377 0-.682.224-.682.5s.305.5.682.5h13.636c.377 0 .682-.224.682-.5m-17 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0M3 8v3H0V8z" clip-rule="evenodd"></path></svg>'},62243:e=>{"use strict";e.exports=o},62686:e=>{"use strict";e.exports=s},79244:e=>{"use strict";e.exports=i}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var r=t[i]={exports:{}};return e[i](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="";var a={};return n.p=window.jimuConfig.baseUrl,(()=>{"use strict";n.r(a),n.d(a,{LoadStatus:()=>h,__set_webpack_public_path__:()=>y,default:()=>v});var e,t=n(79244),i=n(62686),s=n(14321);function r(e,i){var r,o,n,a,d,l,c;const u=s.styleUtils.toCSSStyle({background:i.background});delete u.backgroundColor;const h=i.fontColor||(null===(n=null===(o=null===(r=e.arcgis.widgets.legend.variants)||void 0===r?void 0:r.default)||void 0===o?void 0:o.root)||void 0===n?void 0:n.color),p=(null===(a=i.background)||void 0===a?void 0:a.color)||e.sys.color.surface.paper,g=e.sys.color.surface.paper;return t.css`
    overflow: auto;
    .widget-legend {
      width: 100%;
      height: 100%;
      min-height: 32px;
      /*background-color: ${null===(c=null===(l=null===(d=e.arcgis.widgets.legend.variants)||void 0===d?void 0:d.card)||void 0===l?void 0:l.root)||void 0===c?void 0:c.bg};*/
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
  `}!function(e){e.ShowVisible="show-visible",e.ShowWithinExtent="show-within-extent",e.ShowAll="show-all"}(e||(e={}));const o="Legend";var d=n(32117),l=n.n(d);class c extends t.BaseVersionManager{constructor(){super(...arguments),this.versions=[{version:"1.17.0",description:"Update respectLayerDefinitionExp option",upgrader:e=>e.set("respectLayerDefinitionExp",!1)}]}}const u=new c;var h,p=n(62243),g=function(e,t,i,s){return new(i||(i=Promise))((function(r,o){function n(e){try{d(s.next(e))}catch(e){o(e)}}function a(e){try{d(s.throw(e))}catch(e){o(e)}}function d(e){var t;e.done?r(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(n,a)}d((s=s.apply(e,t||[])).next())}))};!function(e){e.Pending="Pending",e.Fulfilled="Fulfilled",e.Rejected="Rejected"}(h||(h={}));class f extends t.React.PureComponent{constructor(s){super(s),this.legendWrapperRef=t.React.createRef(),this.legendContainerRef=t.React.createRef(),this.mapContainerRef=t.React.createRef(),this.destroyLegend=()=>{this.legend&&!this.legend.destroyed&&this.legend.destroy()},this.createLegend=e=>g(this,void 0,void 0,(function*(){this.Legend||([this.Legend]=yield(0,i.loadArcGISJSAPIModules)(["esri/widgets/Legend"]));const t=document&&document.createElement("div");this.legendContainerRef.current&&this.legendContainerRef.current.appendChild(t),yield e.when(),this.destroyLegend();const s={view:e,container:t};this.legend=new this.Legend(s),this.customizeLegends(),this.configLegend()})),this.customizeLegends=()=>{var e,i,s;(null===(s=null===(e=this.props.config.customizeLayerOptions)||void 0===e?void 0:e[null===(i=this.state.activeJmv)||void 0===i?void 0:i.id])||void 0===s?void 0:s.isEnabled)&&p.on((()=>this.legend.activeLayerInfos),"change",(e=>{var i,s,r,o,n;if(!this.state.activeJmv)return;const a=null===(s=this.props.config.customizeLayerOptions[null===(i=this.state.activeJmv)||void 0===i?void 0:i.id])||void 0===s?void 0:s.showRuntimeAddedLayers,d=new Set(null===(n=null===(r=this.props.config.customizeLayerOptions)||void 0===r?void 0:r[null===(o=this.state.activeJmv)||void 0===o?void 0:o.id])||void 0===n?void 0:n.showJimuLayerViewIds);for(const e of this.legend.activeLayerInfos){const i=e.layer;if(i[t.ExBAddedJSAPIProperties.EXB_LAYER_FROM_RUNTIME])!a&&this.legend.activeLayerInfos.remove(e);else{const t=this.state.activeJmv.getJimuLayerViewIdByAPILayer(i),s=this.getAllChildActiveInfos(e);d.has(t)||this.legend.activeLayerInfos.remove(e);for(const e of s){const t=this.state.activeJmv.getJimuLayerViewIdByAPILayer(e.layer);d.has(t)||e.parent.children.remove(e)}}}}))},this.getAllChildActiveInfos=(e,t=[])=>{if(e.children)for(const i of e.children)t.push(i),this.getAllChildActiveInfos(i,t);return t},this.isRuntimeLayer=e=>{var i;return(null===(i=this.props.config.customizeLayerOptions)||void 0===i?void 0:i[this.state.activeJmv.id].showRuntimeAddedLayers)&&e[t.ExBAddedJSAPIProperties.EXB_LAYER_FROM_RUNTIME]},this.isSpecialLayer=e=>{let t=e.parent;const i=["esri.layers.WMTSLayer"];for(;t;){if(i.includes(t.declaredClass))return!0;t=t.parent}return!1},this.configLegend=()=>{if(this.legend){const t=this.props.config.showBaseMap;this.legend.style=this.calculateStyle(),this.legend.basemapLegendVisible=t;const i=this.props.config.legendMode;i===e.ShowAll?this.legend.respectLayerVisibility=!1:i===e.ShowWithinExtent&&(this.legend.hideLayersNotInCurrentView=!0)}},this.calculateStyle=()=>{let e;const t=this.currentWidth||1e5;if(this.legend)if(this.props.config.cardStyle){let i;i=this.props.config.cardLayout&&"auto"!==this.props.config.cardLayout?this.props.config.cardLayout:t<=600?"stack":"side-by-side",e={type:"card",layout:i}}else e="classic";else e="classic";return e},this.onActiveViewChange=e=>g(this,void 0,void 0,(function*(){e&&e.view?(yield this.createLegend(e.view),this.setState({loadStatus:h.Fulfilled,activeJmv:e})):this.destroyLegend()})),this.onResize=({width:e,height:t})=>{if(this.currentWidth=e,this.legend&&"auto"===this.props.config.cardLayout){const e=this.calculateStyle();this.legend.style=e}},this.state={loadStatus:h.Pending,activeJmv:null}}componentDidUpdate(e,t,i){this.state.activeJmv&&this.createLegend(this.state.activeJmv.view)}destroyView(){this.mapView&&!this.mapView.destroyed&&this.mapView.destroy(),this.sceneView&&!this.sceneView.destroyed&&this.sceneView.destroy()}isParentVisible(e,t){const i=function(e){const t=[];let i=e;for(;i.parent&&i.parent.parent;)t.push(i.parent),i=i.parent;return t}(e);if(0===i.length)return!0;for(const e of i){const i=this.state.activeJmv.getJimuLayerViewIdByAPILayer(e);if(!t.has(i))return!1}return!0}handleLayerWithSublayer(e,i,s){const r=[t.SupportedJSAPILayerTypes.MapImageLayer,t.SupportedJSAPILayerTypes.SubtypeGroupLayer,t.SupportedJSAPILayerTypes.WMSLayer],o=e.getParentJimuLayerView();if(!r.includes(o.type))return;if(!this.isParentVisible(e.layer,i))return;const n=e.type===t.SupportedJSAPILayerTypes.SubtypeSublayer?e.layer.subtypeCode:e.layer.id;s.has(o.layer)?s.get(o.layer).push(n):s.set(o.layer,[n])}getDefaultStyleConfig(){return{useCustom:!1,background:{color:"",fillType:s.FillType.FILL},fontColor:""}}getStyleConfig(){return this.props.config.style&&this.props.config.style.useCustom?this.props.config.style:this.getDefaultStyleConfig()}render(){var e;let n=null;if(this.props.useMapWidgetIds&&this.props.useMapWidgetIds[0]){let s=null;const r=(0,t.jsx)(i.JimuMapViewComponent,{useMapWidgetId:null===(e=this.props.useMapWidgetIds)||void 0===e?void 0:e[0],onActiveViewChange:this.onActiveViewChange});this.state.loadStatus===h.Pending&&(s=(0,t.jsx)("div",{className:"jimu-secondary-loading"})),window.jimuConfig.isInBuilder&&this.configLegend(),n=(0,t.jsx)("div",{className:"widget-legend",ref:this.legendWrapperRef},s,(0,t.jsx)("div",{ref:this.legendContainerRef,style:{height:"100%"}}),(0,t.jsx)("div",{style:{position:"absolute",display:"none"},ref:this.mapContainerRef},"mapContainer"),(0,t.jsx)("div",{style:{position:"absolute",display:"none"}},r),(0,t.jsx)(t.ReactResizeDetector,{targetRef:this.legendWrapperRef,handleHeight:!0,handleWidth:!0,onResize:this.onResize}))}else this.destroyLegend(),n=(0,t.jsx)("div",{className:"widget-legend"},(0,t.jsx)(s.WidgetPlaceholder,{icon:l(),autoFlip:!0,name:this.props.intl.formatMessage({id:"_widgetLabel",defaultMessage:o}),widgetId:this.props.id}));return(0,t.jsx)("div",{css:r(this.props.theme,this.getStyleConfig()),className:"jimu-widget"},n)}}f.versionManager=u;const v=f;function y(e){n.p=e}})(),a})())}}}));