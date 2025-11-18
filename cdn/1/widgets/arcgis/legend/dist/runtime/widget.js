System.register(["jimu-core/emotion","jimu-core","jimu-arcgis","jimu-ui","esri/core/reactiveUtils"],function(e,t){var i={},s={},o={},r={},n={};return{setters:[function(e){i.jsx=e.jsx,i.jsxs=e.jsxs},function(e){s.BaseVersionManager=e.BaseVersionManager,s.ExBAddedJSAPIProperties=e.ExBAddedJSAPIProperties,s.React=e.React,s.ReactResizeDetector=e.ReactResizeDetector,s.SupportedJSAPILayerTypes=e.SupportedJSAPILayerTypes,s.css=e.css},function(e){o.JimuMapViewComponent=e.JimuMapViewComponent,o.loadArcGISJSAPIModules=e.loadArcGISJSAPIModules},function(e){r.FillType=e.FillType,r.Paper=e.Paper,r.WidgetPlaceholder=e.WidgetPlaceholder,r.styleUtils=e.styleUtils},function(e){n.on=e.on}],execute:function(){e((()=>{var e={14321:e=>{"use strict";e.exports=r},32117:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path fill="#000" fill-rule="evenodd" d="M3 5 1.5 2 0 5zm16.318-2c.377 0 .682.224.682.5s-.305.5-.682.5H5.682C5.305 4 5 3.776 5 3.5s.305-.5.682-.5zM20 9.5c0-.276-.305-.5-.682-.5H5.682C5.305 9 5 9.224 5 9.5s.305.5.682.5h13.636c.377 0 .682-.224.682-.5m0 6c0-.276-.305-.5-.682-.5H5.682c-.377 0-.682.224-.682.5s.305.5.682.5h13.636c.377 0 .682-.224.682-.5m-17 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0M3 8v3H0V8z" clip-rule="evenodd"></path></svg>'},62243:e=>{"use strict";e.exports=n},62686:e=>{"use strict";e.exports=o},67386:e=>{"use strict";e.exports=i},79244:e=>{"use strict";e.exports=s}},t={};function a(i){var s=t[i];if(void 0!==s)return s.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,a),o.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.p="";var l={};return a.p=window.jimuConfig.baseUrl,(()=>{"use strict";a.r(l),a.d(l,{LoadStatus:()=>h,__set_webpack_public_path__:()=>m,default:()=>v});var e,t=a(67386),i=a(79244),s=a(62686),o=a(14321);function r(e,t){var s,r;const n=o.styleUtils.toCSSStyle({background:t.background});delete n.backgroundColor;const a=t.fontColor||e.sys.color.surface.paperText,l=(null===(s=t.background)||void 0===s?void 0:s.color)||"transparent",c=e.sys.color.surface.paper;return i.css`
    ${(null===(r=t.background)||void 0===r?void 0:r.color)?"background: transparent;":""}
    overflow: auto;
    .widget-legend {
      width: 100%;
      height: 100%;
      min-height: 32px;
      background-color: ${l};
      position: relative;
      ${n}
      --calcite-color-text-2: ${a};

      .esri-legend {
        background-color: transparent;
        color: ${a};
        height: 100%;
        .esri-legend--card {
          .esri-legend--card__carousel {

            // For card style pagination
            --calcite-internal-carousel-pagination-icon-color: var(--sys-color-surface-paper-text);
            --calcite-internal-carousel-pagination-icon-color-selected: var(--sys-color-action-selected);
            // Arrow color
            --calcite-carousel-control-icon-color: var(--sys-color-surface-paper-text);
            // Arrow hover color
            --calcite-internal-carousel-control-icon-color-hover: var(--sys-color-surface-paper-text);
            // Arrow hover bg color
            --calcite-carousel-pagination-background-color-hover: rgba(0, 0, 0, 0.2);
            // Focus ring color
            --calcite-color-focus: var(--sys-color-action-focus);
            // Dot hover color
            --calcite-carousel-pagination-icon-color-hover: var(--sys-color-surface-paper-text);

            height: 100%;
            width: 100%;
            max-height: unset;
          }
        }

        .esri-legend--card__service {
          width: 100%;
        }

        h3.esri-widget__heading, .esri-legend__service, .esri-legend--card__layer-caption, .esri-legend--card__service {
          color: ${a};
          font-family: ${e.sys.typography.body.fontFamily};
          font-size: var(--calcite-font-size--1);
        }
      }

      .esri-legend.esri-widget.esri-widget--panel {
        .esri-legend__layer {
          overflow-x: hidden;
        }
      }

      .esri-legend--card {
        background-color: transparent;
        color: ${a};
        height: 100%;
      }

      .esri-legend--card.esri-legend--stacked{
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
        color: ${a};
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
      }

      .esri-legend--card__service-caption-container {
        color: ${a};
        background: transparent;
      }

      .esri-legend--card.esri-widget{
        background-color: ${c};
      }

      .esri-legend__layer-table--size-ramp .esri-legend__layer-cell {
        font-family: ${e.sys.typography.body.fontFamily};
        font-size: var(--calcite-font-size--2);
      }
    }
  `}!function(e){e.ShowVisible="show-visible",e.ShowWithinExtent="show-within-extent",e.ShowAll="show-all"}(e||(e={}));const n="Legend";var c=a(32117),d=a.n(c);class u extends i.BaseVersionManager{constructor(){super(...arguments),this.versions=[{version:"1.17.0",description:"Update respectLayerDefinitionExp option",upgrader:e=>e.set("respectLayerDefinitionExp",!1)}]}}const p=new u;var h,g=a(62243),y=function(e,t,i,s){return new(i||(i=Promise))(function(o,r){function n(e){try{l(s.next(e))}catch(e){r(e)}}function a(e){try{l(s.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i(function(e){e(t)})).then(n,a)}l((s=s.apply(e,t||[])).next())})};!function(e){e.Pending="Pending",e.Fulfilled="Fulfilled",e.Rejected="Rejected"}(h||(h={}));class f extends i.React.PureComponent{constructor(t){super(t),this.legendWrapperRef=i.React.createRef(),this.legendContainerRef=i.React.createRef(),this.mapContainerRef=i.React.createRef(),this.destroyLegend=()=>{this.legend&&!this.legend.destroyed&&this.legend.destroy()},this.createLegend=e=>y(this,void 0,void 0,function*(){this.Legend||([this.Legend]=yield(0,s.loadArcGISJSAPIModules)(["esri/widgets/Legend"]));const t=document&&document.createElement("div");this.legendContainerRef.current&&this.legendContainerRef.current.appendChild(t),yield e.when(),this.destroyLegend();const i={view:e,container:t};this.legend=new this.Legend(i),this.customizeLegends(),this.configLegend()}),this.customizeLegends=()=>{var e,t,s;(null===(s=null===(e=this.props.config.customizeLayerOptions)||void 0===e?void 0:e[null===(t=this.state.activeJmv)||void 0===t?void 0:t.id])||void 0===s?void 0:s.isEnabled)&&g.on(()=>this.legend.activeLayerInfos,"change",e=>{var t,s,o,r,n;if(!this.state.activeJmv)return;const a=null===(s=this.props.config.customizeLayerOptions[null===(t=this.state.activeJmv)||void 0===t?void 0:t.id])||void 0===s?void 0:s.showRuntimeAddedLayers,l=new Set(null===(n=null===(o=this.props.config.customizeLayerOptions)||void 0===o?void 0:o[null===(r=this.state.activeJmv)||void 0===r?void 0:r.id])||void 0===n?void 0:n.showJimuLayerViewIds);for(const e of this.legend.activeLayerInfos){const t=e.layer;if(t[i.ExBAddedJSAPIProperties.EXB_LAYER_FROM_RUNTIME])!a&&this.legend.activeLayerInfos.remove(e);else{const i=this.state.activeJmv.getJimuLayerViewIdByAPILayer(t),s=this.getAllChildActiveInfos(e);l.has(i)||this.legend.activeLayerInfos.remove(e);for(const e of s){const t=this.state.activeJmv.getJimuLayerViewIdByAPILayer(e.layer);l.has(t)||e.parent.children.remove(e)}}}})},this.getAllChildActiveInfos=(e,t=[])=>{if(e.children)for(const i of e.children)t.push(i),this.getAllChildActiveInfos(i,t);return t},this.isRuntimeLayer=e=>{var t;return(null===(t=this.props.config.customizeLayerOptions)||void 0===t?void 0:t[this.state.activeJmv.id].showRuntimeAddedLayers)&&e[i.ExBAddedJSAPIProperties.EXB_LAYER_FROM_RUNTIME]},this.isSpecialLayer=e=>{let t=e.parent;const i=["esri.layers.WMTSLayer"];for(;t;){if(i.includes(t.declaredClass))return!0;t=t.parent}return!1},this.configLegend=()=>{if(this.legend){const t=this.props.config.showBaseMap;this.legend.style=this.calculateStyle(),this.legend.basemapLegendVisible=t;const i=this.props.config.legendMode;i===e.ShowAll?this.legend.respectLayerVisibility=!1:i===e.ShowWithinExtent&&(this.legend.hideLayersNotInCurrentView=!0)}},this.calculateStyle=()=>{let e;const t=this.currentWidth||1e5;if(this.legend)if(this.props.config.cardStyle){let i;i=this.props.config.cardLayout&&"auto"!==this.props.config.cardLayout?this.props.config.cardLayout:t<=600?"stack":"side-by-side",e={type:"card",layout:i}}else e="classic";else e="classic";return e},this.onActiveViewChange=e=>y(this,void 0,void 0,function*(){e&&e.view?(yield this.createLegend(e.view),this.setState({loadStatus:h.Fulfilled,activeJmv:e})):this.destroyLegend()}),this.onResize=({width:e,height:t})=>{if(this.currentWidth=e,this.legend&&"auto"===this.props.config.cardLayout){const e=this.calculateStyle();this.legend.style=e}},this.state={loadStatus:h.Pending,activeJmv:null}}componentDidUpdate(e,t,i){this.state.activeJmv&&this.createLegend(this.state.activeJmv.view)}destroyView(){this.mapView&&!this.mapView.destroyed&&this.mapView.destroy(),this.sceneView&&!this.sceneView.destroyed&&this.sceneView.destroy()}isParentVisible(e,t){const i=function(e){const t=[];let i=e;for(;i.parent&&i.parent.parent;)t.push(i.parent),i=i.parent;return t}(e);if(0===i.length)return!0;for(const e of i){const i=this.state.activeJmv.getJimuLayerViewIdByAPILayer(e);if(!t.has(i))return!1}return!0}handleLayerWithSublayer(e,t,s){const o=[i.SupportedJSAPILayerTypes.MapImageLayer,i.SupportedJSAPILayerTypes.SubtypeGroupLayer,i.SupportedJSAPILayerTypes.WMSLayer],r=e.getParentJimuLayerView();if(!o.includes(r.type))return;if(!this.isParentVisible(e.layer,t))return;const n=e.type===i.SupportedJSAPILayerTypes.SubtypeSublayer?e.layer.subtypeCode:e.layer.id;s.has(r.layer)?s.get(r.layer).push(n):s.set(r.layer,[n])}getDefaultStyleConfig(){return{useCustom:!1,background:{color:"",fillType:o.FillType.FILL},fontColor:""}}getStyleConfig(){return this.props.config.style&&this.props.config.style.useCustom?this.props.config.style:this.getDefaultStyleConfig()}render(){var e;let a=null;if(this.props.useMapWidgetIds&&this.props.useMapWidgetIds[0]){let o=null;const r=(0,t.jsx)(s.JimuMapViewComponent,{useMapWidgetId:null===(e=this.props.useMapWidgetIds)||void 0===e?void 0:e[0],onActiveViewChange:this.onActiveViewChange});this.state.loadStatus===h.Pending&&(o=(0,t.jsx)("div",{className:"jimu-secondary-loading"})),window.jimuConfig.isInBuilder&&this.configLegend(),a=(0,t.jsxs)("div",{className:"widget-legend",ref:this.legendWrapperRef,children:[o,(0,t.jsx)("div",{ref:this.legendContainerRef,style:{height:"100%"}}),(0,t.jsx)("div",{style:{position:"absolute",display:"none"},ref:this.mapContainerRef,children:"mapContainer"}),(0,t.jsx)("div",{style:{position:"absolute",display:"none"},children:r}),(0,t.jsx)(i.ReactResizeDetector,{targetRef:this.legendWrapperRef,handleHeight:!0,handleWidth:!0,onResize:this.onResize})]})}else this.destroyLegend(),a=(0,t.jsx)("div",{className:"widget-legend",children:(0,t.jsx)(o.WidgetPlaceholder,{icon:d(),autoFlip:!0,name:this.props.intl.formatMessage({id:"_widgetLabel",defaultMessage:n}),widgetId:this.props.id})});return(0,t.jsx)(o.Paper,{variant:"flat",css:r(this.props.theme,this.getStyleConfig()),className:"jimu-widget",shape:"none",children:a})}}f.versionManager=p;const v=f;function m(e){a.p=e}})(),l})())}}});