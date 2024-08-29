System.register(["jimu-core","jimu-arcgis","jimu-ui","jimu-theme"],(function(e,t){var i={},s={},a={},o={};return{setters:[function(e){i.BaseVersionManager=e.BaseVersionManager,i.DataSourceComponent=e.DataSourceComponent,i.React=e.React,i.css=e.css,i.jsx=e.jsx,i.portalUrlUtils=e.portalUrlUtils},function(e){s.DataSourceTypes=e.DataSourceTypes,s.JimuMapViewComponent=e.JimuMapViewComponent,s.MapViewManager=e.MapViewManager,s.loadArcGISJSAPIModules=e.loadArcGISJSAPIModules,s.zoomToUtils=e.zoomToUtils},function(e){a.DataActionList=e.DataActionList,a.DropdownItem=e.DropdownItem,a.Popper=e.Popper,a.WidgetPlaceholder=e.WidgetPlaceholder,a.defaultMessages=e.defaultMessages},function(e){o.styled=e.styled}],execute:function(){e((()=>{var e={88775:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path fill="#000" fill-rule="evenodd" d="M10.226.054a.5.5 0 0 0-.451 0L.25 4.942a.446.446 0 0 0 .025.813L9.8 9.958a.5.5 0 0 0 .4 0l9.524-4.203a.446.446 0 0 0 .025-.813zM10 9.044 1.542 5.313 10 .97l8.458 4.34z" clip-rule="evenodd"></path><path fill="#000" d="M.676 10.04a.493.493 0 0 0-.632.216c-.11.22-.006.482.232.585L10 15l9.724-4.16c.238-.102.342-.363.232-.584a.493.493 0 0 0-.632-.215L10 14.029z"></path><path fill="#000" fill-rule="evenodd" d="M.676 15.04a.493.493 0 0 0-.632.216c-.11.22-.006.482.232.585L10 20l9.724-4.16c.238-.102.342-.363.232-.584a.493.493 0 0 0-.632-.215L10 19.029zM10 19.03l.2.085h-.4z" clip-rule="evenodd"></path></svg>'},97213:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M16 2.443 5.851 14 0 8.115l1.45-1.538 4.31 4.334L14.463 1z" clip-rule="evenodd"></path></svg>'},62686:e=>{"use strict";e.exports=s},79244:e=>{"use strict";e.exports=i},1888:e=>{"use strict";e.exports=o},14321:e=>{"use strict";e.exports=a}},t={};function r(i){var s=t[i];if(void 0!==s)return s.exports;var a=t[i]={exports:{}};return e[i](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="";var n={};return r.p=window.jimuConfig.baseUrl,(()=>{"use strict";r.r(n),r.d(n,{LoadStatus:()=>x,Widget:()=>S,__set_webpack_public_path__:()=>I,default:()=>V});var e=r(79244),t=r(62686),i=r(14321);function s(t,i){var s,a,o,n,l,d;let c,p;i.setVisibility&&i.useMapWidget?(c="block",p=""):(c="none",p="unset");const u=t.sys.color.surface.paper,h=r(97213),m=(null==i?void 0:i.setVisibility)&&(null==i?void 0:i.useTickBoxes)?`\n    .esri-icon-non-visible:before {\n      display: block;\n      content: '';\n      height: 16px;\n      width: 16px;\n      margin-bottom: -1px;\n      background-color: ${u};\n      border: 1px solid ${t.ref.palette.neutral[1e3]};\n      border-radius: 3px;\n    }\n    .esri-icon-visible {\n      width: 16px;\n      height: 16px;\n      margin-bottom: -1px;\n      border-radius: 3px;\n      background-color: ${t.sys.color.primary.main};\n    }\n    .esri-icon-visible:before {\n      display: block;\n      content: '';\n      height: 10px;\n      width: 10px;\n      margin: 3px;\n      -webkit-mask-image: url('data:image/svg+xml;base64,${window.btoa(h)}');\n      background-color: ${u};\n      -webkit-mask-position: center center;\n    }\n    `:"";return e.css`
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
        outline: ${p};
      }

      .esri-layer-list__item-toggle {
        display: ${c};
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

      ${m}

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
    }
  `}class a{constructor(){this.id="id",this.title="title",this.className="esri-icon",this.group=0,this.widget=null,this.isValid=e=>!1,this.execute=e=>{}}hasActionWithMessage(e){return!1}useMapWidget(){return this.widget.props.config.useMapWidget}}class o extends a{constructor(e,i){super(),this.isValid=e=>"esri.layers.GroupLayer"!==e.layer.declaredClass&&((!e.parent||"esri.layers.GroupLayer"===e.parent.layer.declaredClass)&&!(!this.useMapWidget()||!this.widget.props.config.goto)),this.execute=e=>{this.widget.viewFromMapWidget&&t.zoomToUtils.zoomTo(this.widget.viewFromMapWidget,e.layer,{})},this.id="goto",this.title=i,this.className="esri-icon-zoom-out-fixed",this.group=0,this.widget=e}}class l extends a{constructor(e,t,i){super(),this.isValid=e=>{var t;return this.title=e.layer.labelsVisible?this.titleHide:this.titleShow,!!(this.useMapWidget()&&this.widget.props.config.label&&(null===(t=null==e?void 0:e.layer)||void 0===t?void 0:t.labelingInfo))},this.execute=e=>{e.layer.labelsVisible=!e.layer.labelsVisible},this.id="label",this.className="esri-icon-labels label-action-title",this.group=0,this.widget=e,this.titleShow=t,this.titleHide=i}}class d extends a{constructor(e,t,i){super(),this.isValid=e=>(!e.parent||"esri.layers.GroupLayer"===e.parent.layer.declaredClass)&&!(!this.useMapWidget()||!this.widget.props.config.opacity),this.execute=e=>{this.isIncreaseOpacity?e.layer.opacity<1&&(e.layer.opacity+=.25):e.layer.opacity>0&&(e.layer.opacity-=.25)},this.id=i?"increaseOpacity":"decreaseOpacity",this.title=t,this.className=i?"esri-icon-down":"esri-icon-up",this.group=1,this.widget=e,this.isIncreaseOpacity=i}}class c extends a{constructor(t,i){super(),this.isValid=e=>!(!e.layer.url||!this.widget.props.config.information),this.execute=t=>{var i;const s=t.layer,a=null==s?void 0:s.portalItem;if((null===(i=null==a?void 0:a.portal)||void 0===i?void 0:i.url)&&a.id){const t=e.portalUrlUtils.getStandardPortalUrl(a.portal.url)+`/home/item.html?id=${a.id}`;window.open(t)}else{const e="feature"===(null==s?void 0:s.type)?`${s.url}/${s.layerId}`:s.url;window.open(e)}},this.id="information",this.title=i,this.className="esri-icon-description",this.group=3,this.widget=t}}var p=r(88775),u=r.n(p);class h extends e.BaseVersionManager{constructor(){super(...arguments),this.versions=[{version:"1.12.0",description:"disable old app data-action, delete unused config prop selectedJimuLayerIds",upgrader:e=>{let t=e;return t=t.without("selectedJimuLayerIds"),t}}]}}const m=new h;class y extends a{constructor(e,t){super(),this.isValid=e=>!0,this.execute=e=>{},this.id="option-action",this.title=t,this.className="esri-icon-handle-horizontal",this.group=100,this.widget=e}}var g=r(1888),w=function(e,t,i,s){return new(i||(i=Promise))((function(a,o){function r(e){try{l(s.next(e))}catch(e){o(e)}}function n(e){try{l(s.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,n)}l((s=s.apply(e,t||[])).next())}))};const f=g.styled.div`
  min-width: 120px;
  min-height: 20px;
`;function v(t){const{icon:s,title:a,onClick:o}=t;return e.React.createElement(i.DropdownItem,{onClick:o},e.React.createElement("div",{className:"d-flex align-items-center"},"string"==typeof s?e.React.createElement("div",{className:`jimu-icon-auto-color ${s}`}):s,e.React.createElement("span",{className:"ml-2"},a)))}function b(t){const{widgetId:s,actionObjects:a,listItem:o,onActionListItemClick:r,jimuMapView:n,shouldHideEmptyList:l,enableDataAction:d=!0}=t,[c,p]=e.React.useState(null),u=e.React.useRef(null),h="first-maplayers-action",m=(t,i)=>{const s=t.className,a=t.title;return e.React.createElement(v,{key:i,icon:s,title:a,onClick:()=>{t.execute(o),r()}})};return e.React.useEffect((()=>{d&&function(){w(this,void 0,void 0,(function*(){let t=[];try{const e=n.getJimuLayerViewByAPILayer(o.layer),i=e?yield e.getOrCreateLayerDataSource():null;t=i?[{dataSource:i,records:[],name:null==i?void 0:i.getLabel()}]:[]}catch(e){console.error("DataSource create error:",e)}finally{const a=u.current.querySelector(`.${h}`),o=e.React.createElement("div",{className:"data-action-list-wrapper"},e.React.createElement(i.DataActionList,{key:Math.random(),widgetId:s,dataSets:t,hideGroupTitle:!0,shouldHideEmptyList:l,onActionListItemClick:r,actionPanelRefDOM:a}));p(o)}}))}()}),[d,o.layer,r,l,s,n]),e.React.createElement(f,{ref:u},e.React.createElement("div",{className:h,style:{height:0,width:0}}),a.map(((e,t)=>m(e,t))),d&&c)}var L=function(e,t,i,s){return new(i||(i=Promise))((function(a,o){function r(e){try{l(s.next(e))}catch(e){o(e)}}function n(e){try{l(s.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,n)}l((s=s.apply(e,t||[])).next())}))};const M=Object.assign({},{_widgetLabel:"Map Layers",goto:"Zoom to",information:"Details",increaseOpacity:"Increase opacity",decreaseOpacity:"Decrease opacity",increaseTransparency:"Increase transparency",decreaseTransparency:"Decrease transparency",showLabels:"Show labels",hideLabels:"Hide labels",emptyListTip:"There are currently no items to display"},i.defaultMessages);var x;!function(e){e.Pending="Pending",e.Fulfilled="Fulfilled",e.Rejected="Rejected"}(x||(x={}));class S extends e.React.PureComponent{constructor(t){super(t),this.defineLayerListActions=e=>L(this,void 0,void 0,(function*(){var t,i,s,a,o,r,n;const l=e.item;let d={};l.actionsSections=[],(null===(t=this.props.config)||void 0===t?void 0:t.useMapWidget)&&(null===(i=this.props.config)||void 0===i?void 0:i.enableLegend)&&l.layer.legendEnabled&&(l.panel={content:"legend",open:l.layer.visible&&(null===(s=this.props.config)||void 0===s?void 0:s.showAllLegend)}),this.layerListActions.forEach((e=>{if(e.isValid(l)){let t=d[e.group];t||(t=[],d[e.group]=t),t.push({id:e.id,title:e.title,className:e.className})}}));const c=null===(a=this.props.enableDataAction)||void 0===a||a,p=Object.keys(d).length-1;!c&&p<=1?delete d[100]:d={OPTION_ACTION_INDEX:d[100]};const u=null===(n=null===(r=null===(o=this.props)||void 0===o?void 0:o.config)||void 0===r?void 0:r.customizeLayerOptions)||void 0===n?void 0:n[this.state.jimuMapViewId];if(u&&u.isEnabled){const e=new Set(null==u?void 0:u.hiddenJimuLayerViewIds),t=this.jimuMapView.getJimuLayerViewIdByAPILayer(l.layer);e.has(t)&&(l.hidden=!0)}Object.entries(d).sort(((e,t)=>Number(e[0])-Number(t[0]))).forEach((([e,t])=>{l.actionsSections.push(t)}))})),this.onLayerListActionsTriggered=t=>{var i;const s=t.action,a=t.item,o=this.layerListActions.find((e=>e.id===s.id));if("option-action"===o.id){const t=this.layerListActions.filter((e=>e.isValid(a)&&"option-action"!==e.id)),s=t.length>0,o=null===(i=this.props.enableDataAction)||void 0===i||i,r=(0,e.jsx)(b,{widgetId:this.props.id,jimuMapView:this.jimuMapView,actionObjects:t,listItem:a,onActionListItemClick:()=>{this.onActionListItemClick()},enableDataAction:o,shouldHideEmptyList:s});this.setState({mapLayersDataActionListDOM:r})}else o.execute(a)},this.onActiveViewChange=e=>{const t=this.props.useMapWidgetIds&&this.props.useMapWidgetIds[0];e&&e.view||!t?(this.viewFromMapWidget=e&&e.view,this.setState({mapViewWidgetId:t,jimuMapViewId:e.id,loadStatus:x.Pending})):this.destroyLayerList()},this.onDataSourceCreated=e=>{this.dataSource=e,this.setState({mapDataSourceId:e.id,loadStatus:x.Pending})},this.onCreateDataSourceFailed=e=>{},this.state={mapViewWidgetId:null,mapDataSourceId:null,jimuMapViewId:null,loadStatus:x.Pending,isPopperOpen:!1,refDOM:null,mapLayersDataActionListDOM:null,popperKey:Math.random()},this.renderPromise=Promise.resolve(),this.registerLayerListActions()}translate(e){return this.props.intl.formatMessage({id:e,defaultMessage:M[e]})}componentDidMount(){return L(this,void 0,void 0,(function*(){this.bindClickHandler()}))}componentDidUpdate(e,t){this.needToPreventRefreshList(e,t)||(this.props.enableDataAction===e.enableDataAction&&this.props.config===e.config||this.setState({refDOM:null,isPopperOpen:!1}),this.bindClickHandler(),this.updateRenderer())}bindClickHandler(){this.refs.layerListContainer&&!this.refs.layerListContainer.onclick&&(this.refs.layerListContainer.onclick=e=>{const t=e.target;"CALCITE-ACTION"===t.nodeName&&t.title===this.translate("options")&&(this.state.refDOM!==t?this.setState({refDOM:t,isPopperOpen:!0,popperKey:Math.random()}):this.setState({isPopperOpen:!this.state.isPopperOpen}))})}updateRenderer(){this.props.config.useMapWidget?this.state.mapViewWidgetId===this.currentUseMapWidgetId&&this.syncRenderer(this.renderPromise):this.state.mapDataSourceId===this.currentUseDataSourceId&&this.syncRenderer(this.renderPromise)}needToPreventRefreshList(e,t){return t.isPopperOpen!==this.state.isPopperOpen||t.refDOM!==this.state.refDOM||t.mapLayersDataActionListDOM!==this.state.mapLayersDataActionListDOM}createView(){return L(this,void 0,void 0,(function*(){return this.props.config.useMapWidget?yield Promise.resolve(this.viewFromMapWidget):yield this.createViewByDataSource()}))}createViewByDataSource(){return L(this,void 0,void 0,(function*(){return yield this.loadViewModules(this.dataSource).then((()=>L(this,void 0,void 0,(function*(){return this.dataSource.type===t.DataSourceTypes.WebMap?yield new Promise(((e,t)=>{this.createWebMapView(this.MapView,e,t)})):this.dataSource.type===t.DataSourceTypes.WebScene?new Promise(((e,t)=>{this.createSceneView(this.SceneView,e,t)})):Promise.reject()}))))}))}createWebMapView(e,t,i){if(this.mapView)this.mapView.map=this.dataSource.map;else{const t={map:this.dataSource.map,container:this.refs.mapContainer};this.mapView=new e(t)}this.mapView.when((()=>{t(this.mapView)}),(e=>i(e)))}createSceneView(e,t,i){if(this.sceneView)this.sceneView.map=this.dataSource.map;else{const e={map:this.dataSource.map,container:this.refs.mapContainer};this.sceneView=new this.SceneView(e)}this.sceneView.when((()=>{t(this.sceneView)}),(e=>i(e)))}destroyView(){this.mapView&&!this.mapView.destroyed&&this.mapView.destroy(),this.sceneView&&!this.sceneView.destroyed&&this.sceneView.destroy()}loadViewModules(e){return L(this,void 0,void 0,(function*(){return e.type===t.DataSourceTypes.WebMap?this.MapView?yield Promise.resolve(this.MapView):yield(0,t.loadArcGISJSAPIModules)(["esri/views/MapView"]).then((e=>([this.MapView]=e,this.MapView))):e.type===t.DataSourceTypes.WebScene?this.SceneView?Promise.resolve(this.SceneView):(0,t.loadArcGISJSAPIModules)(["esri/views/SceneView"]).then((e=>([this.SceneView]=e,this.SceneView))):Promise.reject()}))}destroyLayerList(){this.layerList&&!this.layerList.destroyed&&this.layerList.destroy()}componentWillUnmount(){}createLayerList(e){let i;return i=this.LayerList?Promise.resolve():(0,t.loadArcGISJSAPIModules)(["esri/widgets/LayerList"]).then((e=>{[this.LayerList]=e})),i.then((()=>{var t,i,s,a,o;const r=document&&document.createElement("div");r.className="jimu-widget",this.refs.layerListContainer.appendChild(r),this.destroyLayerList();let n={view:e,listItemCreatedFunction:this.defineLayerListActions,container:r};this.props.config.useMapWidget&&(n=Object.assign(Object.assign({},n),{dragEnabled:null!==(i=null===(t=this.props.config)||void 0===t?void 0:t.reorderLayers)&&void 0!==i&&i,visibilityAppearance:(null===(s=this.props.config)||void 0===s?void 0:s.useTickBoxes)?"checkbox":"default",minFilterItems:1,visibleElements:{filter:null!==(o=null===(a=this.props.config)||void 0===a?void 0:a.searchLayers)&&void 0!==o&&o}})),this.layerList=new this.LayerList(n),this.layerList.on("trigger-action",(e=>{this.onLayerListActionsTriggered(e)}))}))}registerLayerListActions(){this.layerListActions=[new o(this,this.translate("goto")),new l(this,this.translate("showLabels"),this.translate("hideLabels")),new d(this,this.translate("increaseTransparency"),!1),new d(this,this.translate("decreaseTransparency"),!0),new c(this,this.translate("information")),new y(this,this.translate("options"))]}onActionListItemClick(){setTimeout((()=>{this.setState({isPopperOpen:!1})}),100)}renderLayerList(){return L(this,void 0,void 0,(function*(){yield this.createView().then((e=>this.createLayerList(e))).then((()=>{this.setState({loadStatus:x.Fulfilled})})).catch((e=>{console.error(e)}))}))}syncRenderer(e){this.jimuMapView=t.MapViewManager.getInstance().getJimuMapViewById(this.state.jimuMapViewId),this.renderPromise=new Promise(((t,i)=>{e.then((()=>{this.renderLayerList().then((()=>{t(null)})).catch((()=>{i()}))}))}))}render(){var a;const o=this.props.useMapWidgetIds&&this.props.useMapWidgetIds[0],r=this.props.useDataSources&&this.props.useDataSources[0];this.currentUseMapWidgetId=o,this.currentUseDataSourceId=r&&r.dataSourceId;let n=null;this.props.config.useMapWidget?n=(0,e.jsx)(t.JimuMapViewComponent,{useMapWidgetId:null===(a=this.props.useMapWidgetIds)||void 0===a?void 0:a[0],onActiveViewChange:this.onActiveViewChange}):r&&(n=(0,e.jsx)(e.DataSourceComponent,{useDataSource:r,onDataSourceCreated:this.onDataSourceCreated,onCreateDataSourceFailed:this.onCreateDataSourceFailed}));let l=null;if(this.props.config.useMapWidget?o:r){let t=null;this.state.loadStatus===x.Pending&&(t=(0,e.jsx)("div",{className:"jimu-secondary-loading"})),l=(0,e.jsx)("div",{className:`widget-layerlist widget-layerlist_${this.props.id}`},t,(0,e.jsx)("div",{ref:"layerListContainer"}),(0,e.jsx)("div",{style:{position:"absolute",opacity:0},ref:"mapContainer"},"mapContainer"),(0,e.jsx)("div",{style:{position:"absolute",display:"none"}},n))}else this.destroyLayerList(),l=(0,e.jsx)("div",{className:"widget-layerlist"},(0,e.jsx)(i.WidgetPlaceholder,{icon:u(),message:this.translate("_widgetLabel"),widgetId:this.props.id}));return(0,e.jsx)("div",{css:s(this.props.theme,this.props.config),className:"jimu-widget"},l,(0,e.jsx)(i.Popper,{keepMount:!0,key:this.state.popperKey,reference:this.state.refDOM,open:this.state.isPopperOpen,toggle:()=>{this.setState({isPopperOpen:!1})}},this.state.mapLayersDataActionListDOM))}}S.versionManager=m;const V=S;function I(e){r.p=e}})(),n})())}}}));