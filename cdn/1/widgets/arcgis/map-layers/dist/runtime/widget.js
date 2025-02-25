System.register(["jimu-core","jimu-arcgis","jimu-ui","jimu-theme"],(function(e,t){var i={},s={},a={},o={};return{setters:[function(e){i.BaseVersionManager=e.BaseVersionManager,i.DataSourceComponent=e.DataSourceComponent,i.MutableStoreManager=e.MutableStoreManager,i.React=e.React,i.SupportedJSAPILayerTypes=e.SupportedJSAPILayerTypes,i.classNames=e.classNames,i.css=e.css,i.isKeyboardMode=e.isKeyboardMode,i.jsx=e.jsx,i.portalUrlUtils=e.portalUrlUtils},function(e){s.DataSourceTypes=e.DataSourceTypes,s.JimuMapViewComponent=e.JimuMapViewComponent,s.MapViewManager=e.MapViewManager,s.loadArcGISJSAPIModules=e.loadArcGISJSAPIModules,s.zoomToUtils=e.zoomToUtils},function(e){a.DataActionList=e.DataActionList,a.DropdownItem=e.DropdownItem,a.Loading=e.Loading,a.Popper=e.Popper,a.WidgetPlaceholder=e.WidgetPlaceholder,a.defaultMessages=e.defaultMessages,a.getFocusableElements=e.getFocusableElements},function(e){o.styled=e.styled}],execute:function(){e((()=>{var e={88775:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path fill="#000" fill-rule="evenodd" d="M10.226.054a.5.5 0 0 0-.451 0L.25 4.942a.446.446 0 0 0 .025.813L9.8 9.958a.5.5 0 0 0 .4 0l9.524-4.203a.446.446 0 0 0 .025-.813zM10 9.044 1.542 5.313 10 .97l8.458 4.34z" clip-rule="evenodd"></path><path fill="#000" d="M.676 10.04a.493.493 0 0 0-.632.216c-.11.22-.006.482.232.585L10 15l9.724-4.16c.238-.102.342-.363.232-.584a.493.493 0 0 0-.632-.215L10 14.029z"></path><path fill="#000" fill-rule="evenodd" d="M.676 15.04a.493.493 0 0 0-.632.216c-.11.22-.006.482.232.585L10 20l9.724-4.16c.238-.102.342-.363.232-.584a.493.493 0 0 0-.632-.215L10 19.029zM10 19.03l.2.085h-.4z" clip-rule="evenodd"></path></svg>'},97213:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M16 2.443 5.851 14 0 8.115l1.45-1.538 4.31 4.334L14.463 1z" clip-rule="evenodd"></path></svg>'},18249:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M1 2h14v12H1zm13 1H2v4h12zm0 5h-3v2h3zm0 3h-3v2h3zm-4 2v-2H6v2zm-5 0v-2H2v2zm-3-3h3V8H2zm8-2v2H6V8z" clip-rule="evenodd"></path></svg>'},62686:e=>{"use strict";e.exports=s},79244:e=>{"use strict";e.exports=i},1888:e=>{"use strict";e.exports=o},14321:e=>{"use strict";e.exports=a}},t={};function r(i){var s=t[i];if(void 0!==s)return s.exports;var a=t[i]={exports:{}};return e[i](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="";var n={};return r.p=window.jimuConfig.baseUrl,(()=>{"use strict";r.r(n),r.d(n,{LoadStatus:()=>A,Widget:()=>T,__set_webpack_public_path__:()=>C,default:()=>O});var e=r(79244),t=r(62686),i=r(14321);function s(t,i){var s,a,o,n,l,d;let p,c;i.setVisibility&&i.useMapWidget?(p="block",c=""):(p="none",c="unset");const u=t.sys.color.surface.paper,h=r(97213),y=(null==i?void 0:i.setVisibility)&&(null==i?void 0:i.useTickBoxes)?`\n    .esri-icon-non-visible:before {\n      display: block;\n      content: '';\n      height: 16px;\n      width: 16px;\n      margin-bottom: -1px;\n      background-color: ${u};\n      border: 1px solid ${t.ref.palette.neutral[1e3]};\n      border-radius: 3px;\n    }\n    .esri-icon-visible {\n      width: 16px;\n      height: 16px;\n      margin-bottom: -1px;\n      border-radius: 3px;\n      background-color: ${t.sys.color.primary.main};\n    }\n    .esri-icon-visible:before {\n      display: block;\n      content: '';\n      height: 10px;\n      width: 10px;\n      margin: 3px;\n      -webkit-mask-image: url('data:image/svg+xml;base64,${window.btoa(h)}');\n      background-color: ${u};\n      -webkit-mask-position: center center;\n    }\n    `:"";return e.css`
    overflow: auto;
    .widget-layerlist {
      width: 100%;
      height: 100%;
      min-height: 32px;
      /*background-color: ${t.arcgis.widgets.layerlist.root.bg};*/
      background-color: ${u};

      .data-action-list-loading {
        height: 32px;
        border: 1px solid rgba(0,0,0,0);
        border-top: 2px solid ${t.sys.color.secondary.light};
        padding-left: 16px;

        display: flex;
        align-items: center;
        @keyframes ball-fall {
          0%{
            opacity: 0;
            transform: translateY(-145%);
          }
          10%{
            opacity: .5;
          }
          20%{
            opacity: 1;
            transform: translateY(0);
          }
          80%{
            opacity: 1;
            transform: translateY(0);
          }
          90%{
            opacity: .5;
          }
          100%{
            opacity: 0;
            transform:translateY(145%);
          }
        }
        &:before,
        &:after,
        .dot-loading {
          width: 0.25rem;
          height: 0.25rem;
          border-radius: 0.25rem;
          box-sizing: border-box;
          opacity:0;
          animation: ball-fall 1s ease-in-out infinite;
        }
        &:before,
        &:after {
          content: '';
          display: inline-block;
        }
        &:before {
          left: -0.375rem;
          animation-delay: -200ms;
        }
        .dot-loading {
          display: inline-block;
          margin: 0 0.125rem;
          animation-delay: -100ms;
        }
        &:after {
          left: 0.375rem;
          animation-delay: 0ms;
        }
        .dot-loading, &:before, &:after {
          background: ${t.sys.color.secondary.main};
        }
      }

      .esri-layer-list__item-label:focus {
        outline: ${c};
      }

      .esri-layer-list__item-toggle {
        display: ${p};
      }

      .esri-layer-list {
        background-color: ${u};
      }

      .esri-layer-list__list {
        padding: 0px 2px;
      }

      .esri-layer-list__item {
        background-color: var(--calcite-color-foreground-1);
        .data-action-list-wrapper {
          padding: 0;

          .jimu-dropdown, .jimu-dropdown-item {
            font-size: 12px;
            color: ${null===(l=null===(n=null===(o=null===(a=null===(s=null==t?void 0:t.arcgis)||void 0===s?void 0:s.widgets)||void 0===a?void 0:a.layerlist)||void 0===o?void 0:o.icon)||void 0===n?void 0:n.default)||void 0===l?void 0:l.color};
          }

          .jimu-dropdown-item {
            padding: 6px 15px;
            border: 1px solid rgba(0,0,0,0);
            border-top: 2px solid ${null===(d=null==t?void 0:t.sys.color.divider)||void 0===d?void 0:d.primary};
          }

          .dropdown-item:hover {
            .jimu-icon-auto-color {
              color: ${t.sys.color.primary.main} !important;
            }
            background: transparent;
            color: ${t.sys.color.primary.main} !important;
          }
        }
        .ml-2 {
          margin-left: 5px !important;
        }
      }

      ${y}

      .esri-layer-list__item-action {
        outline-offset: -2px;
      }

      .invalid-ds-message {
        font-size: 12px;
        padding: 6px 15px;
        border: 1px solid rgba(0,0,0,0);
        border-top: 2px solid #d5d5d5;
        color: ${t.ref.palette.neutral[1e3]};
      }

      .table-list-divider {
        background-color: var(--calcite-color-foreground-1);
        color: var(--calcite-color-text-2);
        border-block-start: 1px solid var(--calcite-color-border-3);
        font-size: var(--calcite-font-size--1);
        padding-left: 12px;
        height: 28px;
      }
    }
  `}class a{constructor(){this.id="id",this.title="title",this.className="esri-icon",this.group=0,this.widget=null,this.isValid=(e,t=!1)=>!1,this.execute=e=>{}}hasActionWithMessage(e){return!1}useMapWidget(){return this.widget.props.config.useMapWidget}}class o extends a{constructor(e,i){super(),this.isValid=(e,t)=>!t&&("esri.layers.GroupLayer"!==e.layer.declaredClass&&((!e.parent||"esri.layers.GroupLayer"===e.parent.layer.declaredClass)&&!(!this.useMapWidget()||!this.widget.props.config.goto))),this.execute=e=>{this.widget.viewFromMapWidget&&t.zoomToUtils.zoomTo(this.widget.viewFromMapWidget,e.layer,{})},this.id="goto",this.title=i,this.className="esri-icon-zoom-out-fixed",this.group=0,this.widget=e}}class l extends a{constructor(e,t,i){super(),this.isValid=(e,t)=>{var i;return!t&&(("string"!=typeof e.layer.id||!e.layer.id.startsWith("jimu-draw"))&&(this.title=e.layer.labelsVisible?this.titleHide:this.titleShow,!!(this.useMapWidget()&&this.widget.props.config.label&&(null===(i=null==e?void 0:e.layer)||void 0===i?void 0:i.labelingInfo))))},this.execute=e=>{e.layer.labelsVisible=!e.layer.labelsVisible},this.id="label",this.className="esri-icon-labels label-action-title",this.group=0,this.widget=e,this.titleShow=t,this.titleHide=i}}class d extends a{constructor(e,t,i){super(),this.isValid=(e,t)=>!t&&((!e.parent||"esri.layers.GroupLayer"===e.parent.layer.declaredClass)&&!(!this.useMapWidget()||!this.widget.props.config.opacity)),this.execute=e=>{this.isIncreaseOpacity?e.layer.opacity<1&&(e.layer.opacity+=.25):e.layer.opacity>0&&(e.layer.opacity-=.25)},this.id=i?"increaseOpacity":"decreaseOpacity",this.title=t,this.className=i?"esri-icon-down":"esri-icon-up",this.group=1,this.widget=e,this.isIncreaseOpacity=i}}class p extends a{constructor(t,i){super(),this.isValid=e=>!(!e.layer.url||!this.widget.props.config.information),this.execute=t=>{var i;const s=t.layer,a=null==s?void 0:s.portalItem;if((null===(i=null==a?void 0:a.portal)||void 0===i?void 0:i.url)&&a.id){const t=e.portalUrlUtils.getStandardPortalUrl(a.portal.url)+`/home/item.html?id=${a.id}`;window.open(t)}else{const e="feature"===(null==s?void 0:s.type)?`${s.url}/${s.layerId}`:s.url;window.open(e)}},this.id="information",this.title=i,this.className="esri-icon-description",this.group=3,this.widget=t}}var c=r(88775),u=r.n(c);class h extends e.BaseVersionManager{constructor(){super(...arguments),this.versions=[{version:"1.12.0",description:"disable old app data-action, delete unused config prop selectedJimuLayerIds",upgrader:e=>{let t=e;return t=t.without("selectedJimuLayerIds"),t}}]}}const y=new h;class g extends a{constructor(e,t){super(),this.isValid=e=>!0,this.execute=e=>{},this.id="option-action",this.title=t,this.className="esri-icon-handle-horizontal",this.group=100,this.widget=e}}var m=r(1888),f=function(e,t,i,s){return new(i||(i=Promise))((function(a,o){function r(e){try{l(s.next(e))}catch(e){o(e)}}function n(e){try{l(s.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,n)}l((s=s.apply(e,t||[])).next())}))};const w=m.styled.div`
  min-width: 120px;
  min-height: 20px;
`,v=e.css`
  .jimu-dropdown-item.dropdown-header {
    display: flex;
    justify-content: center;
  }
  .jimu-dropdown {
    .jimu-dropdown-item {
      display: flex;
      justify-content: center;
    }
  }
`;function b(t){const{icon:s,title:a,onClick:o}=t;return(0,e.jsx)(i.DropdownItem,{onClick:o},(0,e.jsx)("div",{className:"d-flex align-items-center"},"string"==typeof s?(0,e.jsx)("div",{className:`jimu-icon-auto-color ${s}`}):s,(0,e.jsx)("span",{className:"ml-2"},a)))}function L(t){const{widgetId:s,actionObjects:a,listItem:o,onActionListItemClick:r,jimuMapView:n,shouldHideEmptyList:l,enableDataAction:d=!0,mapDataSource:p}=t,[c,u]=e.React.useState(null),h=e.React.useRef(null),y="first-maplayers-action",g=(t,i)=>{const s=t.className,a=t.title;return(0,e.jsx)(b,{key:i,icon:s,title:a,onClick:()=>{t.execute(o),r()}})};return e.React.useEffect((()=>{d&&function(){f(this,void 0,void 0,(function*(){let t=[];try{let e=null;if(p)e=p.getDataSourceByLayer(o.layer);else if(n){const t=null==n?void 0:n.getJimuLayerViewByAPILayer(o.layer);e=t?yield t.getOrCreateLayerDataSource():n.getMapDataSource().getDataSourceByLayer(o.layer)}t=e?[{dataSource:e,records:[],name:null==e?void 0:e.getLabel()}]:[]}catch(e){console.error("DataSource create error:",e)}finally{if(h.current){const a=h.current.querySelector(`.${y}`),o=(0,e.jsx)("div",{className:"data-action-list-wrapper",css:v},(0,e.jsx)(i.DataActionList,{key:Math.random(),widgetId:s,dataSets:t,hideGroupTitle:!0,shouldHideEmptyList:l,onActionListItemClick:r,actionPanelRefDOM:a}));u(o)}}}))}()}),[d,o.layer,r,l,s,n,p]),(0,e.jsx)(w,{ref:h},(0,e.jsx)("div",{className:y,style:{height:0,width:0}}),a.map(((e,t)=>g(e,t))),d&&c)}const S=[e.SupportedJSAPILayerTypes.FeatureLayer,e.SupportedJSAPILayerTypes.CSVLayer,e.SupportedJSAPILayerTypes.ImageryLayer,e.SupportedJSAPILayerTypes.ImageryTileLayer,e.SupportedJSAPILayerTypes.GeoJSONLayer,e.SupportedJSAPILayerTypes.SubtypeSublayer,"sublayer"];class M extends a{constructor(t,i,s){super(),this.isValid=t=>{var i;const s=t.layer;if("string"==typeof s.id&&s.id.startsWith("jimu-draw"))return!1;const a=this.widget.jmvFromMap,o=this.widget.props.widgetId,r=e.MutableStoreManager.getInstance().getStateValue([o,"popup",s.id]);if(s&&(null===(i=this.widget.props.config)||void 0===i?void 0:i.popup)&&S.includes(s.type)){const e=s.popupEnabled&&a.isClickOpenPopupEnabled()||(null==r?void 0:r.popupEnabled);return this.title=e?this.disableTitle:this.enableTitle,!0}return!1},this.execute=t=>{const i=t.layer,s=this.widget.jmvFromMap,a=this.widget.props.widgetId,o=e.MutableStoreManager.getInstance(),r=o.getStateValue([a,"popup",i.id]),n=r||{};void 0===(null==r?void 0:r.initialValue)&&(n.initialValue=i.popupEnabled,n.layer=i),this.title===this.disableTitle?(i.popupEnabled=!1,s.disableLayerPopup(i),n.popupEnabled=!1):(i.popupEnabled=!0,s.enableLayerPopup(i,!0),n.popupEnabled=!0),o.updateStateValue(a,`popup.${i.id}`,n)},this.id="popup",this.className="esri-icon-configure-popup",this.group=6,this.widget=t,this.enableTitle=i,this.disableTitle=s}}var x=r(18249),V=r.n(x),I=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(s=Object.getOwnPropertySymbols(e);a<s.length;a++)t.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(e,s[a])&&(i[s[a]]=e[s[a]])}return i};const j=t=>{const i=window.SVG,{className:s}=t,a=I(t,["className"]),o=(0,e.classNames)("jimu-icon jimu-icon-component",s);return i?e.React.createElement(i,Object.assign({className:o,src:V()},a)):e.React.createElement("svg",Object.assign({className:o},a))};var P=function(e,t,i,s){return new(i||(i=Promise))((function(a,o){function r(e){try{l(s.next(e))}catch(e){o(e)}}function n(e){try{l(s.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,n)}l((s=s.apply(e,t||[])).next())}))};const D=Object.assign({},{_widgetLabel:"Map Layers",goto:"Zoom to",information:"Details",increaseOpacity:"Increase opacity",decreaseOpacity:"Decrease opacity",increaseTransparency:"Increase transparency",decreaseTransparency:"Decrease transparency",showLabels:"Show labels",hideLabels:"Hide labels",emptyListTip:"There are currently no items to display",enablePopup:"Enable pop-up",disablePopup:"Disable pop-up",tables:"Tables"},i.defaultMessages);var A;!function(e){e.Pending="Pending",e.Fulfilled="Fulfilled",e.Rejected="Rejected"}(A||(A={}));class T extends e.React.PureComponent{constructor(t){super(t),this.defineLayerListActionsGenerator=(e=!1)=>t=>P(this,void 0,void 0,(function*(){var i,s,a,o,r,n,l,d;const p=t.item;let c={};p.actionsSections=[],!e&&(null===(i=this.props.config)||void 0===i?void 0:i.useMapWidget)&&(null===(s=this.props.config)||void 0===s?void 0:s.enableLegend)&&p.layer.legendEnabled&&("string"==typeof(null===(a=p.layer)||void 0===a?void 0:a.id)&&p.layer.id.startsWith("jimu-draw")||(p.panel={content:"legend",open:p.layer.visible&&(null===(o=this.props.config)||void 0===o?void 0:o.showAllLegend)})),this.layerListActions.forEach((t=>{if(t.isValid(p,e)){let e=c[t.group];e||(e=[],c[t.group]=e),e.push({id:t.id,title:t.title,className:t.className})}}));const u=null===(r=this.props.enableDataAction)||void 0===r||r,h=Object.keys(c).length-1;!u&&h<=1?delete c[100]:c={OPTION_ACTION_INDEX:c[100]};const y=null===(d=null===(l=null===(n=this.props)||void 0===n?void 0:n.config)||void 0===l?void 0:l.customizeLayerOptions)||void 0===d?void 0:d[this.state.jimuMapViewId];if(y&&y.isEnabled){const e=new Set(null==y?void 0:y.hiddenJimuLayerViewIds),t=new Set(null==y?void 0:y.showJimuLayerViewIds),i=this.jimuMapView.getJimuLayerViewIdByAPILayer(p.layer);e.has(i)&&(p.hidden=!0),(null==y?void 0:y.showJimuLayerViewIds)&&(p.hidden=!this.isLayerFromRuntime(p.layer)&&!t.has(i))}Object.entries(c).sort(((e,t)=>Number(e[0])-Number(t[0]))).forEach((([e,t])=>{p.actionsSections.push(t)}))})),this.onLayerListActionsTriggered=(t,i=!1)=>{var s;const a=t.action,o=t.item,r=this.layerListActions.find((e=>e.id===a.id));if("option-action"===r.id){const t=this.layerListActions.filter((e=>e.isValid(o,i)&&"option-action"!==e.id)),a=t.length>0,r=null===(s=this.props.enableDataAction)||void 0===s||s,n=(0,e.jsx)(L,{widgetId:this.props.id,jimuMapView:this.jimuMapView,mapDataSource:this.dataSource,actionObjects:t,listItem:o,onActionListItemClick:()=>{this.onActionListItemClick()},enableDataAction:r,shouldHideEmptyList:a});this.setState({mapLayersDataActionListDOM:n})}else r.execute(o)},this.onActiveViewChange=e=>{const t=this.props.useMapWidgetIds&&this.props.useMapWidgetIds[0];e&&e.view||!t?(this.jmvFromMap=e,this.viewFromMapWidget=e&&e.view,this.setState({mapViewWidgetId:t,jimuMapViewId:e.id,loadStatus:A.Pending})):this.destroyLayerList()},this.onDataSourceCreated=e=>{this.dataSource=e,this.setState({mapDataSourceId:e.id,loadStatus:A.Pending})},this.isLayerFromRuntime=e=>{const t=this.jimuMapView&&this.jimuMapView.getJimuLayerViewByAPILayer(e);return!t||t.fromRuntime},this.onToggleActionsPopper=()=>{var t;if(this.setState({isPopperOpen:!1}),(0,e.isKeyboardMode)()){const e=(0,i.getFocusableElements)(this.state.refDOM);e[0]&&(null===(t=e[0])||void 0===t||t.focus())}},this.state={mapViewWidgetId:null,mapDataSourceId:null,jimuMapViewId:null,loadStatus:A.Pending,isPopperOpen:!1,refDOM:null,mapLayersDataActionListDOM:null,popperKey:Math.random(),tableLoadStatus:A.Pending},this.renderPromise=Promise.resolve(),this.registerLayerListActions()}translate(e){return this.props.intl.formatMessage({id:e,defaultMessage:D[e]})}componentDidMount(){this.bindClickHandler()}componentDidUpdate(e,t){var i,s;this.needToPreventRefreshList(e,t)||(this.props.enableDataAction===e.enableDataAction&&this.props.config===e.config||this.setState({refDOM:null,isPopperOpen:!1}),this.bindClickHandler(),(null===(i=this.props.config)||void 0===i?void 0:i.showTables)===(null===(s=e.config)||void 0===s?void 0:s.showTables)?((this.props.config.useMapWidget&&this.state.mapViewWidgetId===this.currentUseMapWidgetId||!this.props.config.useMapWidget&&this.state.mapDataSourceId===this.currentUseDataSourceId)&&this.syncRenderer(this.renderPromise),!this.props.config.popup&&e.config.popup&&this.restoreLayerPopupField()):this.renderTableList())}restoreLayerPopupField(){const t=e.MutableStoreManager.getInstance().getStateValue([this.props.widgetId,"popup"])||{};for(const e of Object.values(t))e.layer.popupEnabled=e.initialValue;t&&e.MutableStoreManager.getInstance().updateStateValue(this.props.widgetId,"popup",null)}bindClickHandler(){const e=e=>{e&&!e.onclick&&(e.onclick=e=>{const t=e.target;"CALCITE-ACTION"===t.nodeName&&t.title===this.translate("options")&&(this.state.refDOM!==t?this.setState({refDOM:t,isPopperOpen:!0,popperKey:Math.random()}):this.setState({isPopperOpen:!this.state.isPopperOpen}))})};e(this.refs.layerListContainer),e(this.refs.tableListContainer)}needToPreventRefreshList(e,t){return t.isPopperOpen!==this.state.isPopperOpen||t.refDOM!==this.state.refDOM||(t.mapLayersDataActionListDOM!==this.state.mapLayersDataActionListDOM||t.tableLoadStatus!==this.state.tableLoadStatus)}createView(){return P(this,void 0,void 0,(function*(){return this.props.config.useMapWidget?this.viewFromMapWidget:yield this.createViewByDataSource()}))}createViewByDataSource(){return P(this,void 0,void 0,(function*(){return yield this.loadViewModules(this.dataSource),this.dataSource.type===t.DataSourceTypes.WebMap?yield new Promise(((e,t)=>{this.createWebMapView(this.MapView,e,t)})):this.dataSource.type===t.DataSourceTypes.WebScene?new Promise(((e,t)=>{this.createSceneView(this.SceneView,e,t)})):Promise.reject()}))}createWebMapView(e,t,i){if(this.mapView)this.mapView.map=this.dataSource.map;else{const t={map:this.dataSource.map,container:this.refs.mapContainer};this.mapView=new e(t)}this.mapView.when((()=>{t(this.mapView)}),(e=>i(e)))}createSceneView(e,t,i){if(this.sceneView)this.sceneView.map=this.dataSource.map;else{const e={map:this.dataSource.map,container:this.refs.mapContainer};this.sceneView=new this.SceneView(e)}this.sceneView.when((()=>{t(this.sceneView)}),(e=>i(e)))}destroyView(){this.mapView&&!this.mapView.destroyed&&this.mapView.destroy(),this.sceneView&&!this.sceneView.destroyed&&this.sceneView.destroy()}loadViewModules(e){return P(this,void 0,void 0,(function*(){if(e.type===t.DataSourceTypes.WebMap){if(this.MapView)return this.MapView;const e=yield(0,t.loadArcGISJSAPIModules)(["esri/views/MapView"]);return this.MapView=e[0],this.MapView}if(e.type===t.DataSourceTypes.WebScene){if(this.SceneView)return this.SceneView;const e=(0,t.loadArcGISJSAPIModules)(["esri/views/SceneView"]);return this.SceneView=e[0],this.SceneView}return null}))}destroyTableList(){this.tableList&&!this.tableList.destroyed&&this.tableList.destroy()}destroyLayerList(){this.layerList&&!this.layerList.destroyed&&this.layerList.destroy()}createTableList(e){return P(this,void 0,void 0,(function*(){var i;if(this.setState({tableLoadStatus:A.Pending}),!this.TableList){const e=yield(0,t.loadArcGISJSAPIModules)(["esri/widgets/TableList"]);this.TableList=e[0]}const s=document&&document.createElement("div");return s.className="table-list",this.refs.tableListContainer.appendChild(s),this.destroyTableList(),this.tableList=new this.TableList({container:s,map:e.map,dragEnabled:null===(i=this.props.config)||void 0===i?void 0:i.reorderLayers,listItemCreatedFunction:this.defineLayerListActionsGenerator(!0)}),this.tableList.on("trigger-action",(e=>{this.onLayerListActionsTriggered(e,!0)})),this.tableList}))}createLayerList(e){return P(this,void 0,void 0,(function*(){var i,s,a,o,r;if(!this.LayerList){const e=yield(0,t.loadArcGISJSAPIModules)(["esri/widgets/LayerList"]);this.LayerList=e[0]}const n=document&&document.createElement("div");n.className="jimu-widget",this.refs.layerListContainer.appendChild(n),this.destroyLayerList();let l={view:e,listItemCreatedFunction:this.defineLayerListActionsGenerator(!1),container:n};this.props.config.useMapWidget&&(l=Object.assign(Object.assign({},l),{dragEnabled:null!==(s=null===(i=this.props.config)||void 0===i?void 0:i.reorderLayers)&&void 0!==s&&s,visibilityAppearance:(null===(a=this.props.config)||void 0===a?void 0:a.useTickBoxes)?"checkbox":"default",minFilterItems:1,visibleElements:{filter:null!==(r=null===(o=this.props.config)||void 0===o?void 0:o.searchLayers)&&void 0!==r&&r}})),this.layerList=new this.LayerList(l),this.layerList.on("trigger-action",(e=>{this.onLayerListActionsTriggered(e)}))}))}registerLayerListActions(){this.layerListActions=[new o(this,this.translate("goto")),new l(this,this.translate("showLabels"),this.translate("hideLabels")),new d(this,this.translate("increaseTransparency"),!1),new d(this,this.translate("decreaseTransparency"),!0),new p(this,this.translate("information")),new g(this,this.translate("options")),new M(this,this.translate("enablePopup"),this.translate("disablePopup"))]}onActionListItemClick(){setTimeout((()=>{this.setState({isPopperOpen:!1})}),100)}renderLayerList(){return P(this,void 0,void 0,(function*(){var e;try{const t=yield this.createView();(null===(e=this.props.config)||void 0===e?void 0:e.showTables)&&(yield this.renderTableList()),yield this.createLayerList(t),this.setState({loadStatus:A.Fulfilled})}catch(e){console.error(e)}}))}renderTableList(){return P(this,void 0,void 0,(function*(){var e;try{const t=yield this.createView();(null===(e=this.props.config)||void 0===e?void 0:e.showTables)?(yield this.createTableList(t),this.setState({tableLoadStatus:A.Fulfilled})):this.destroyTableList()}catch(e){console.error(e)}}))}syncRenderer(e){return P(this,void 0,void 0,(function*(){this.jimuMapView=t.MapViewManager.getInstance().getJimuMapViewById(this.state.jimuMapViewId),this.jimuMapView&&(yield this.jimuMapView.whenJimuMapViewLoaded()),yield e,this.renderPromise=this.renderLayerList()}))}render(){var a;const o=this.props.useMapWidgetIds&&this.props.useMapWidgetIds[0],r=this.props.useDataSources&&this.props.useDataSources[0];this.currentUseMapWidgetId=o,this.currentUseDataSourceId=r&&r.dataSourceId;let n=null;this.props.config.useMapWidget?n=(0,e.jsx)(t.JimuMapViewComponent,{useMapWidgetId:null===(a=this.props.useMapWidgetIds)||void 0===a?void 0:a[0],onActiveViewChange:this.onActiveViewChange}):r&&(n=(0,e.jsx)(e.DataSourceComponent,{useDataSource:r,onDataSourceCreated:this.onDataSourceCreated,onCreateDataSourceFailed:e=>{console.error(e)}}));let l=null;if(this.props.config.useMapWidget?o:r){let t=null;this.state.loadStatus===A.Pending&&(t=(0,e.jsx)("div",{className:"jimu-secondary-loading"})),l=(0,e.jsx)("div",{className:`widget-layerlist widget-layerlist_${this.props.id}`},t,(0,e.jsx)("div",{ref:"layerListContainer"}),this.props.config.showTables&&(0,e.jsx)(e.React.Fragment,null,null===t&&this.state.tableLoadStatus===A.Fulfilled&&(0,e.jsx)("div",{className:"table-list-divider d-flex align-items-center"},(0,e.jsx)(j,null),(0,e.jsx)("span",{className:"ml-1"},this.translate("tables"))),null===t&&this.state.tableLoadStatus===A.Pending&&(0,e.jsx)(i.Loading,{type:"DOTS_PRIMARY"}),(0,e.jsx)("div",{ref:"tableListContainer",className:"table-list-wrapper"})),(0,e.jsx)("div",{style:{position:"absolute",opacity:0},ref:"mapContainer"},"mapContainer"),(0,e.jsx)("div",{style:{position:"absolute",display:"none"}},n))}else this.destroyLayerList(),l=(0,e.jsx)("div",{className:"widget-layerlist"},(0,e.jsx)(i.WidgetPlaceholder,{icon:u(),message:this.translate("_widgetLabel"),widgetId:this.props.id}));return(0,e.jsx)("div",{css:s(this.props.theme,this.props.config),className:"jimu-widget"},l,(0,e.jsx)(i.Popper,{style:{minWidth:"170px"},keepMount:!0,key:this.state.popperKey,reference:this.state.refDOM,open:this.state.isPopperOpen,toggle:this.onToggleActionsPopper},this.state.mapLayersDataActionListDOM))}}T.versionManager=y;const O=T;function C(e){r.p=e}})(),n})())}}}));