System.register(["jimu-core/emotion","jimu-core","jimu-layouts/layout-runtime","jimu-ui","jimu-theme"],function(e,t){var o={},i={},s={},l={},n={};return{setters:[function(e){o.jsx=e.jsx,o.jsxs=e.jsxs},function(e){i.AppMode=e.AppMode,i.BaseVersionManager=e.BaseVersionManager,i.Immutable=e.Immutable,i.LayoutItemType=e.LayoutItemType,i.React=e.React,i.appActions=e.appActions,i.classNames=e.classNames,i.css=e.css,i.getAppStore=e.getAppStore,i.i18n=e.i18n,i.moduleLoader=e.moduleLoader,i.polished=e.polished},function(e){s.LayoutEntry=e.LayoutEntry,s.PageContext=e.PageContext,s.utils=e.utils},function(e){l.Button=e.Button,l.Icon=e.Icon,l.Loading=e.Loading,l.NormalLineType=e.NormalLineType,l.styleUtils=e.styleUtils},function(e){n.ThemeSwitchComponent=e.ThemeSwitchComponent}],execute:function(){e((()=>{var e={1888:e=>{"use strict";e.exports=n},8934:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M13.847 2.854a.485.485 0 0 0 0-.708.54.54 0 0 0-.738 0l-5.956 5.5a.485.485 0 0 0 0 .708l5.956 5.5a.54.54 0 0 0 .738 0 .486.486 0 0 0 0-.708L8.26 8zm-5 0a.485.485 0 0 0 0-.708.54.54 0 0 0-.738 0l-5.956 5.5a.485.485 0 0 0 0 .708l5.956 5.5a.54.54 0 0 0 .738 0 .485.485 0 0 0 0-.708L3.26 8z" clip-rule="evenodd"></path></svg>'},14321:e=>{"use strict";e.exports=l},17663:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M2.854 2.153a.485.485 0 0 0-.708 0 .54.54 0 0 0 0 .738l5.5 5.956a.485.485 0 0 0 .708 0l5.5-5.956a.54.54 0 0 0 0-.738.485.485 0 0 0-.708 0L8 7.74zm0 5a.485.485 0 0 0-.708 0 .54.54 0 0 0 0 .738l5.5 5.956a.485.485 0 0 0 .708 0l5.5-5.956a.54.54 0 0 0 0-.738.485.485 0 0 0-.708 0L8 12.74z" clip-rule="evenodd"></path></svg>'},23001:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m4 2 8 6-8 6z"></path></svg>'},26490:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M3.154 3.154a.527.527 0 0 1 .746 0l1.317 1.317A8.6 8.6 0 0 1 8 4c2.667 0 5.667 1.333 7 4-.696 1.393-1.847 2.422-3.168 3.087l1.014 1.013a.527.527 0 1 1-.746.746l-1.317-1.317A8.6 8.6 0 0 1 8 12c-2.667 0-5.667-1.333-7-4 .696-1.393 1.847-2.422 3.168-3.087L3.154 3.9a.527.527 0 0 1 0-.746m1.698 2.443C3.726 6.087 2.782 6.882 2 8c1.422 2.033 3.382 3 6 3a8.7 8.7 0 0 0 2.03-.225l-.675-.674A2.5 2.5 0 0 1 5.9 6.644zm6.296 4.805C12.275 9.913 13.218 9.119 14 8c-1.422-2.033-3.382-3-6-3q-1.088 0-2.03.225l.675.674a2.5 2.5 0 0 1 3.457 3.456zM6.5 8c0-.221.048-.431.134-.62l1.987 1.986A1.5 1.5 0 0 1 6.5 8m.88-1.366 1.986 1.987a1.5 1.5 0 0 0-1.987-1.987" clip-rule="evenodd"></path></svg>'},30655:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M2.146 4.653a.485.485 0 0 1 .708 0L8 10.24l5.146-5.587a.485.485 0 0 1 .708 0 .54.54 0 0 1 0 .738l-5.5 5.956a.485.485 0 0 1-.708 0l-5.5-5.956a.54.54 0 0 1 0-.738" clip-rule="evenodd"></path></svg>'},30934:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m2 12 6-8 6 8z"></path></svg>'},35737:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m14 4-6 8-6-8z"></path></svg>'},37568:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M11.347 2.146a.485.485 0 0 1 0 .708L5.76 8l5.587 5.146a.486.486 0 0 1 0 .708.54.54 0 0 1-.738 0l-5.956-5.5a.485.485 0 0 1 0-.708l5.956-5.5a.54.54 0 0 1 .738 0" clip-rule="evenodd"></path></svg>'},41496:e=>{"use strict";e.exports=s},49238:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M13.146 13.847a.486.486 0 0 0 .708 0 .54.54 0 0 0 0-.738l-5.5-5.956a.485.485 0 0 0-.708 0l-5.5 5.956a.54.54 0 0 0 0 .738.485.485 0 0 0 .708 0L8 8.26zm0-5a.485.485 0 0 0 .708 0 .54.54 0 0 0 0-.738l-5.5-5.956a.485.485 0 0 0-.708 0l-5.5 5.956a.54.54 0 0 0 0 .738.485.485 0 0 0 .708 0L8 3.26z" clip-rule="evenodd"></path></svg>'},51042:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M12 14 4 8l8-6z"></path></svg>'},52943:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M4.653 13.854a.485.485 0 0 1 0-.708L10.24 8 4.653 2.854a.485.485 0 0 1 0-.708.54.54 0 0 1 .738 0l5.956 5.5a.485.485 0 0 1 0 .708l-5.956 5.5a.54.54 0 0 1-.738 0" clip-rule="evenodd"></path></svg>'},67386:e=>{"use strict";e.exports=o},73529:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M8 12c-2.667 0-5.667-1.333-7-4 1.333-2.667 4.333-4 7-4s5.667 1.333 7 4c-1.333 2.667-4.333 4-7 4m0-7c-2.618 0-4.578.967-6 3 1.422 2.033 3.382 3 6 3s4.578-.967 6-3c-1.422-2.033-3.382-3-6-3m0 5.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" clip-rule="evenodd"></path></svg>'},79244:e=>{"use strict";e.exports=i},83343:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M2.153 13.146a.485.485 0 0 0 0 .708.54.54 0 0 0 .738 0l5.956-5.5a.485.485 0 0 0 0-.708l-5.956-5.5a.54.54 0 0 0-.738 0 .485.485 0 0 0 0 .708L7.74 8zm5 0a.485.485 0 0 0 0 .708.54.54 0 0 0 .738 0l5.956-5.5a.485.485 0 0 0 0-.708l-5.956-5.5a.54.54 0 0 0-.738 0 .485.485 0 0 0 0 .708L12.74 8z" clip-rule="evenodd"></path></svg>'},94064:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M13.854 11.347a.486.486 0 0 1-.708 0L8 5.76l-5.146 5.587a.485.485 0 0 1-.708 0 .54.54 0 0 1 0-.738l5.5-5.956a.485.485 0 0 1 .708 0l5.5 5.956a.54.54 0 0 1 0 .738" clip-rule="evenodd"></path></svg>'}},t={};function r(o){var i=t[o];if(void 0!==i)return i.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,r),s.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="";var a={};return r.p=window.jimuConfig.baseUrl,(()=>{"use strict";r.r(a),r.d(a,{__set_webpack_public_path__:()=>ie,default:()=>oe});var e,t,o,i,s=r(67386),l=r(79244),n=r(41496),c=r(14321);class d extends l.React.PureComponent{render(){const{style:e,className:t,innerLayouts:o,itemStyle:i,collapsed:r}=this.props;return(0,s.jsx)("div",{className:(0,l.classNames)("side",t,{"d-flex":!r,"d-none":r}),style:Object.assign(Object.assign(Object.assign({},e),c.styleUtils.toCSSStyle(i)),{overflow:"auto"}),children:(0,s.jsx)(n.LayoutEntry,{className:"border-0",layouts:o,isInWidget:!0,ignoreMinHeight:!0})})}}!function(e){e.First="FIRST",e.Second="SECOND"}(e||(e={})),function(e){e.Start="START",e.Center="CENTER",e.End="END"}(t||(t={})),function(e){e.Horizontal="HORIZONTAL",e.Vertical="VERTICAL"}(o||(o={})),function(e){e.Left="LEFT",e.Right="RIGHT",e.Up="UP",e.Down="DOWN"}(i||(i={}));(0,l.Immutable)({direction:o.Horizontal,collapseSide:e.First,overlay:!1,size:"300px",divider:{visible:!0,lineStyle:{type:c.NormalLineType.SOLID,color:"var(--ref-palette-neutral-500)",width:"1px"}},resizable:!1,toggleBtn:{visible:!0,icon:i.Left,iconSource:0,offsetX:15,offsetY:0,position:t.Center,iconSize:14,width:15,height:60,border:{type:c.NormalLineType.SOLID,color:"var(--ref-palette-neutral-500)",width:"1px"},color:{normal:{icon:{useTheme:!1,color:"var(--ref-palette-black)"},bg:{useTheme:!0,color:"var(--ref-palette-neutral-200)"}},hover:{bg:{useTheme:!0,color:"var(--ref-palette-neutral-200)"}}},expandStyle:{style:{borderRadius:"0 92px 92px 0"}},collapseStyle:{style:{borderRadius:"0 92px 92px 0"}}},defaultState:1});var p=r(1888);function u(e,t){const o=e.widgets[t],i=[],s=Object.keys(o.layouts),n=Object.keys(o.layouts[s[0]])[0];return s.map(e=>o.layouts[e][n]).forEach(t=>{var o;const s=e.layouts[t];Object.keys(null!==(o=null==s?void 0:s.content)&&void 0!==o?o:{}).forEach(e=>{const t=s.content[e];t.type===l.LayoutItemType.Widget?i.push(t.widgetId):t.type===l.LayoutItemType.Section&&i.push(t.sectionId)})}),i}var h=r(37568),g=r.n(h),f=r(52943),v=r.n(f),m=r(94064),x=r.n(m),y=r(30655),b=r.n(y),S=r(8934),w=r.n(S),j=r(83343),$=r.n(j),z=r(49238),L=r.n(z),C=r(17663),B=r.n(C),M=r(51042),I=r.n(M),O=r(23001),N=r.n(O),R=r(30934),T=r.n(R),F=r(35737),A=r.n(F),E=r(73529),P=r.n(E),H=function(e,t){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(o[i[s]]=e[i[s]])}return o};const k=e=>{const t=window.SVG,{className:o}=e,i=H(e,["className"]),n=(0,l.classNames)("jimu-icon jimu-icon-component",o);return t?(0,s.jsx)(t,Object.assign({className:n,src:P()},i)):(0,s.jsx)("svg",Object.assign({className:n},i))};var V=r(26490),D=r.n(V),U=function(e,t){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(o[i[s]]=e[i[s]])}return o};const _=e=>{const t=window.SVG,{className:o}=e,i=U(e,["className"]),n=(0,l.classNames)("jimu-icon jimu-icon-component",o);return t?(0,s.jsx)(t,Object.assign({className:n,src:D()},i)):(0,s.jsx)("svg",Object.assign({className:n},i))},W={};W[i.Left]=g(),W[i.Right]=v(),W[i.Up]=x(),W[i.Down]=b();const Y={};Y[i.Left]=w(),Y[i.Right]=$(),Y[i.Up]=L(),Y[i.Down]=B();const X={};function G(e,t){return 1===t?Y[e]:2===t?X[e]:W[e]}X[i.Left]=I(),X[i.Right]=N(),X[i.Up]=T(),X[i.Down]=A();class q extends l.React.PureComponent{constructor(){super(...arguments),this.toggleVisible=e=>{e.stopPropagation();const{widgetId:t,showAsExpressTip:o}=this.props;l.moduleLoader.loadModule("jimu-for-builder").then(e=>{const{getAppConfigAction:i}=e,s=i(),l=s.appConfig.widgets[t].config.setIn(["toggleBtn","visible"],o);s.editWidgetConfig(t,l);const n=function(e,t){const o=e.mainSizeMode,i=[],s=u(e,t),l={};return Object.keys(e.widgets).forEach(i=>{const s=e.widgets[i];if("sidebar"===s.manifest.name&&i!==t){const e=Object.keys(s.layouts),t=Object.keys(s.layouts[e[0]])[0];t!==o&&(l[t]?l[t].push(i):l[t]=[i])}}),Object.keys(l).forEach(t=>{const o=l[t];1!==o.length?o.forEach(t=>{const o=u(e,t);s.some(e=>o.includes(e))&&i.push(t)}):i.push(o[0])}),i}(s.appConfig,t);n.forEach(e=>{const t=s.appConfig.widgets[e].config.setIn(["toggleBtn","visible"],o);s.editWidgetConfig(e,t)}),s.exec()}).catch(e=>{console.error(e)})}}getStyle(t){var i;const{width:s,height:n,color:r,border:a,showAsExpressTip:d,widgetId:p}=this.props,u=(0,l.getAppStore)().getState().appConfig.widgets[p],h=u.config.direction,g=u.config.collapseSide;let f,v;return h===o.Vertical?(f="none",v=g===e.First?`translate(-8px, ${n-8}px)`:`translate(-8px, -${n-8}px)`):(f="translateY(-24px)",v=g===e.First?`translate(${s-8}px, 8px)`:`translate(-${s-8}px, 8px)`),l.css`
      display: flex;
      justify-content: flex-start;
      flex-direction: ${h===o.Vertical?"row":"column-reverse"};
      align-items: ${g===e.Second?"end":"start"};
      width: ${s+24}px;
      height: ${n+24}px;
      transform: ${f};
      pointer-events: none;
      position: absolute;
      right: ${h===o.Horizontal&&g===e.Second?0:"auto"};
      bottom: ${h===o.Vertical&&g===e.Second?0:"auto"};

      .sidebar-controller {
        padding: 0;
        width: ${s}px;
        height: ${n}px;
        overflow: ${t?"visible":"hidden"};

        background-color: ${d?"var(--sys-color-primary)":r.normal.bg.color} !important;
        opacity: ${d?.5:1};
        &:hover {
          background-color: ${d?"var(--sys-color-primary)":r.hover.bg.color} !important;
          opacity: ${d?.8:1};
        }

        border: ${d?"2px dashed var(--ref-palette-primary-700)":null!==(i=c.styleUtils.toCSSBorder(a))&&void 0!==i?i:"none"} !important;

        .jimu-icon {
          margin: 0;
        }
      }

      .toggle-visible-btn {
        width: 24px;
        height: 24px;
        display: none;
        transform: ${v};
        opacity: 0.75;
        border: 1px solid var(--sys-color-divider-secondary);
        background-color: var(--sys-color-surface-overlay);
        cursor: pointer;
      }

      &.active {
        pointer-events: auto;
        .toggle-visible-btn {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    `}flipStyle(e){if(!this.props.shouldFlip)return e;let t=(0,l.Immutable)(e);if(null!=e.borderRadius){const o=e.borderRadius.split(" ");t=t.set("borderRadius",`${o[1]} ${o[0]} ${o[3]} ${o[2]}`)}return t.asMutable()}isMainSizeMode(){let e,t;if(window.jimuConfig.isBuilder?(t=(0,l.getAppStore)().getState().appStateInBuilder,e=null==t?void 0:t.appConfig):(t=(0,l.getAppStore)().getState(),e=t.appConfig),e){return t.browserSizeMode===e.mainSizeMode}return!1}render(){const{icon:e,iconSize:t,iconSource:o,style:i,expanded:n,shouldFlip:r,color:a,showAsExpressTip:d,onClick:u}=this.props,h=r?180:0,g=l.i18n.getIntl().formatMessage({id:n?"collapse":"expand"}),f=window.jimuConfig.isInBuilder&&window.parent.isExpressBuilder;return(0,s.jsx)(p.ThemeSwitchComponent,{useTheme2:d,children:(0,s.jsxs)("div",{ref:e=>{this.ref=e},css:this.getStyle(f),onMouseLeave:()=>{this.ref.classList.remove("active")},children:[(0,s.jsx)(c.Button,{className:"sidebar-controller d-flex justify-content-center align-items-center",style:this.flipStyle(i),onClick:u,"aria-expanded":n,"aria-label":g,title:g,onMouseEnter:()=>{this.ref.classList.add("active")},children:(0,s.jsx)(c.Icon,{className:"icon",rotate:n?0+h:180+h,icon:G(e,o),size:t,color:d?"#000":a.normal.icon.color})}),f&&this.isMainSizeMode()&&(0,s.jsx)(p.ThemeSwitchComponent,{useTheme2:window.jimuConfig.isInBuilder,children:(0,s.jsx)("div",{className:"toggle-visible-btn rounded-circle",title:l.i18n.getIntl().formatMessage({id:d?"clickToShow":"clickToHide"}),onClick:this.toggleVisible,children:d?(0,s.jsx)(_,{color:"var(--sys-color-action-text)"}):(0,s.jsx)(k,{color:"var(--sys-color-action-text)"})})})]})})}}const Z=l.css`
  transition: all 200ms;
`;class J extends l.React.PureComponent{constructor(e){super(e),this.removeSplitHandler=()=>{null!=this.interactable&&(this.interactable.unset(),this.interactable=null)},this.state={isResizing:!1,deltaSize:0}}componentDidMount(){const{firstLayouts:e,secondLayouts:t}=this.props;null!=e&&null!=t&&this.bindSplitHandler()}componentDidUpdate(e){const{firstLayouts:t,secondLayouts:i}=this.props;null!=t&&null!=i&&null==this.interactable&&this.bindSplitHandler(),null!=this.interactable&&this.interactable.draggable({startAxis:this.props.direction===o.Horizontal?"x":"y",lockAxis:this.props.direction===o.Horizontal?"x":"y"})}componentWillUnmount(){this.removeSplitHandler()}handleToggleSidebar(e){e.stopPropagation(),(0,l.getAppStore)().dispatch(l.appActions.widgetStatePropChange(this.props.widgetId,"collapse",!this.props.sidebarVisible))}calSidebarSize(){const{config:e}=this.props;let t;return t=0!==this.state.deltaSize?n.utils.isPercentage(e.size)?`${parseFloat(e.size)*this.domSize/100+this.state.deltaSize}px`:`${parseFloat(e.size)+this.state.deltaSize}px`:e.size,t}createCollapsibleSide(t,i){const{config:r,direction:a}=this.props,c=this.calSidebarSize(),d=this.shouldFlipLeftAndRight();let p,u=`${c}`;n.utils.isPercentage(c)&&(u="100%"),p=a===o.Horizontal?l.css`
        width: ${c};
        transform: ${r.overlay&&!this.props.sidebarVisible?r.collapseSide===e.First?`translateX(-${u})`:`translateX(${u})`:"none"};
        top: ${r.overlay?0:"auto"};
        bottom: ${r.overlay?0:"auto"};
        left: ${r.overlay&&i===e.First?0:"auto"};
        right: ${r.overlay&&i===e.Second?0:"auto"};
      `:l.css`
        height: ${c};
        transform: ${r.overlay&&!this.props.sidebarVisible?r.collapseSide===e.First?`translateY(-${u})`:`translateY(${u})`:"none"};
        left: ${r.overlay?0:"auto"};
        right: ${r.overlay?0:"auto"};
        top: ${r.overlay&&i===e.First?0:"auto"};
        bottom: ${r.overlay&&i===e.Second?0:"auto"};
      `;const h=this.layoutItemComponent;return(0,s.jsxs)("div",{css:l.css`
        ${this.state.isResizing?"":Z}
        ${p}
        position: ${r.overlay?"absolute":"relative"};
        overflow: visible;
        z-index: 2;
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: auto;
      `,className:(0,l.classNames)("d-flex side-collapsable",{"flex-column":a===o.Vertical}),children:[r.collapseSide===e.Second&&this.createController(d),(0,s.jsx)(h,{innerLayouts:t,itemStyle:i===e.First?r.firstPanelStyle:r.secondPanelStyle,collapsed:!this.props.sidebarVisible,className:(0,l.classNames)({"h-100":a===o.Vertical,"w-100":a===o.Horizontal})}),r.collapseSide===e.First&&this.createController(d)]})}splitStyle(){const{direction:t,config:i,appMode:s}=this.props,n=this.calSidebarSize(),r=!this.props.sidebarVisible,a=null!=i.divider&&i.divider.visible&&null!=i.divider.lineStyle?c.styleUtils.toCSSBorder(i.divider.lineStyle):"none";return t===o.Horizontal?l.css`
        width: 1px;
        touch-action: none;
        user-select: none;
        border-left: ${a};
        position: ${i.overlay?"absolute":"relative"};
        left: ${i.overlay&&!r&&i.collapseSide===e.First?n:"auto"};
        right: ${i.overlay&&!r&&i.collapseSide===e.Second?n:"auto"};
        display: ${r?"none":"block"};
        height: ${i.overlay?"100%":"auto"};
        &:after {
          display: ${i.resizable||s===l.AppMode.Design?"block":"none"};
          position: absolute;
          content: '';
          width: 5px;
          top: 0;
          bottom: 0;
          left: -2px;
          cursor: col-resize;
        }
        z-index: 2;
      `:l.css`
      height: 1px;
      touch-action: none;
      user-select: none;
      border-top: ${a};
      position: ${i.overlay?"absolute":"relative"};
      top: ${i.overlay&&!r&&i.collapseSide===e.First?n:"auto"};
      bottom: ${i.overlay&&!r&&i.collapseSide===e.Second?n:"auto"};
      display: ${r?"none":"block"};
      width: ${i.overlay?"100%":"auto"};
      &:after {
        display: ${i.resizable||s===l.AppMode.Design?"block":"none"};
        position: absolute;
        content: '';
        height: 5px;
        top: -2px;
        right: 0;
        left: 0;
        cursor: row-resize;
      }
      z-index: 2;
    `}createController(i){var n,r;const{config:a,direction:c}=this.props;if(!(null==a.toggleBtn||a.toggleBtn.visible||window.jimuConfig.isInBuilder&&(null===(n=window.parent)||void 0===n?void 0:n.isExpressBuilder)))return null;const d=this.props.sidebarVisible?a.toggleBtn.collapseStyle:a.toggleBtn.expandStyle;let p,u,h,g=0,f=0;if(c===o.Horizontal){a.toggleBtn.position===t.Start?p=0:a.toggleBtn.position===t.Center&&(p="50%",f=-a.toggleBtn.height/2);const o=a.collapseSide===e.Second;h=l.css`
        top: ${a.toggleBtn.position!==t.End?p:"auto"};
        bottom: ${a.toggleBtn.position===t.End?0:"auto"};
        right: ${o?"auto":0};
        left: ${o?0:"auto"};
      `}else a.toggleBtn.position===t.Start?u=0:a.toggleBtn.position===t.Center&&(u="50%",g=-a.toggleBtn.width/2),h=l.css`
        left: ${a.toggleBtn.position!==t.End?u:"auto"};
        right: ${a.toggleBtn.position===t.End?0:"auto"};
        bottom: ${a.collapseSide===e.First?0:"auto"};
        top: ${a.collapseSide===e.Second?0:"auto"};
      `;const{style:v}=d,{iconSize:m,width:x,height:y,color:b,icon:S,border:w,iconSource:j}=a.toggleBtn;return(0,s.jsx)("div",{css:l.css`
          ${h}
          position: absolute;
          pointer-events: none;
          width: ${x}px;
          height: ${y}px;
          transform: translate(${a.toggleBtn.offsetX+g}px, ${a.toggleBtn.offsetY+f}px);
        `,children:(0,s.jsx)(q,{widgetId:this.props.widgetId,icon:S,iconSize:m,expanded:this.props.sidebarVisible,width:x,height:y,color:b,style:v,shouldFlip:i,border:w,iconSource:j,showAsExpressTip:window.jimuConfig.isInBuilder&&(null===(r=window.parent)||void 0===r?void 0:r.isExpressBuilder)&&null!=a.toggleBtn&&!a.toggleBtn.visible,onClick:this.handleToggleSidebar.bind(this)})})}createNormalSide(t,o){const i=this.layoutItemComponent,{config:l}=this.props;return(0,s.jsx)("div",{css:this.state.isResizing?"":Z,className:"flex-shrink-0 flex-grow-1 d-flex side-normal",style:{zIndex:0,flexBasis:this.props.sidebarVisible?"0":"100%",overflow:"auto"},children:(0,s.jsx)(i,{itemStyle:o===e.First?l.firstPanelStyle:l.secondPanelStyle,innerLayouts:t,className:"w-100"})})}shouldFlipLeftAndRight(){const{direction:e}=this.props;if(e===o.Horizontal){return(0,l.getAppStore)().getState().appContext.isRTL}return!1}createContent(){const{config:t,firstLayouts:o,secondLayouts:i}=this.props;return t.overlay?t.collapseSide===e.First?(0,s.jsxs)(l.React.Fragment,{children:[this.createNormalSide(i,e.Second),(0,s.jsx)("div",{css:this.splitStyle(),ref:e=>{this.splitRef=e}}),this.createCollapsibleSide(o,e.First)]}):(0,s.jsxs)(l.React.Fragment,{children:[this.createNormalSide(o,e.First),(0,s.jsx)("div",{css:this.splitStyle(),ref:e=>{this.splitRef=e}}),this.createCollapsibleSide(i,e.Second)]}):t.collapseSide===e.First?(0,s.jsxs)(l.React.Fragment,{children:[this.createCollapsibleSide(o,e.First),(0,s.jsx)("div",{css:this.splitStyle(),ref:e=>{this.splitRef=e}}),this.createNormalSide(i,e.Second)]}):(0,s.jsxs)(l.React.Fragment,{children:[this.createNormalSide(o,e.First),(0,s.jsx)("div",{css:this.splitStyle(),ref:e=>{this.splitRef=e}}),this.createCollapsibleSide(i,e.Second)]})}render(){const{config:t,firstLayouts:i,secondLayouts:r,direction:a}=this.props;return null==i||null==r?(0,s.jsx)(c.Loading,{}):(0,s.jsx)(n.PageContext.Consumer,{children:i=>{const n=i.builderTheme;return(0,s.jsx)("div",{className:(0,l.classNames)("d-flex w-100",{"flex-column":a===o.Vertical}),ref:e=>{this.ref=e},css:l.css`
                border: 1px dashed ${null!=n?l.polished.rgba(n.ref.palette.neutral[900],.3):""};
                position: relative;
                overflow: hidden;
                user-select: ${this.state.isResizing?"none":"auto"};
                justify-content: ${t.collapseSide===e.First?"flex-end":"flex-start"};
                body:not(.design-mode) & {
                  border: none;
                }
              `,children:this.createContent()})}})}}class K extends J{constructor(e){super(e),this.bindSplitHandler=()=>{null==this.interactModule?l.moduleLoader.loadModule("jimu-core/dnd").then(e=>{this.interactModule=e.interact,this.initHandler()}).catch(e=>{console.error(e)}):this.initHandler()},this.layoutItemComponent=d}initHandler(){const{config:t}=this.props;let i,s;null!=this.splitRef&&t.resizable&&null==this.interactable&&(this.interactable=this.interactModule(this.splitRef).origin("parent").draggable({inertia:!1,autoScroll:!1,modifiers:[this.interactModule.modifiers.restrict({restriction:"parent"})],startAxis:this.props.direction===o.Horizontal?"x":"y",lockAxis:this.props.direction===o.Horizontal?"x":"y",onstart:t=>{t.stopPropagation();const l=this.props.config.collapseSide===e.First?1:-1;if(this.props.direction===o.Horizontal){const e=n.utils.isRTL()?-1:1;i=this.state.deltaSize*l*e,s=0}else i=0,s=this.state.deltaSize*l;const r=this.ref.getBoundingClientRect();this.domSize=this.props.direction===o.Horizontal?r.width:r.height,this.setState({isResizing:!0})},onmove:t=>{if(t.stopPropagation(),i+=t.dx,s+=t.dy,this.props.direction===o.Horizontal){const t=n.utils.isRTL()?-1:1;this.props.config.collapseSide===e.First?this.setState({deltaSize:Math.round(i*t)}):this.setState({deltaSize:-Math.round(i*t)})}else this.props.config.collapseSide===e.First?this.setState({deltaSize:Math.round(s)}):this.setState({deltaSize:-Math.round(s)})},onend:e=>{e.stopPropagation(),this.setState({isResizing:!1})}}))}}class Q extends l.BaseVersionManager{constructor(){super(...arguments),this.versions=[{version:"1.8.0",description:"Online 10.1.",upgrader:e=>{let t=e;return t=t.setIn(["toggleBtn","color","normal","icon","color"],"var(--ref-palette-neutral-1100)"),t=t.setIn(["toggleBtn","color","normal","bg","color"],"var(--ref-palette-neutral-200)"),t=t.setIn(["toggleBtn","color","hover","bg","color"],"var(--ref-palette-neutral-300)"),t=t.setIn(["toggleBtn","border"],{type:"solid",color:"var(--ref-palette-neutral-500)",width:"1px"}),t}}]}}const ee=new Q;class te extends l.React.PureComponent{render(){const{layouts:e,theme:t,builderSupportModules:o}=this.props,i=window.jimuConfig.isInBuilder?o.widgetModules.SidebarLayoutBuilder:K;return null==i?(0,s.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:"No layout component!"}):(0,s.jsx)("div",{className:"widget-sidebar-layout d-flex w-100 h-100",children:(0,s.jsx)(i,{theme:t,widgetId:this.props.id,direction:this.props.config.direction,firstLayouts:e.FIRST,secondLayouts:e.SECOND,config:this.props.config,sidebarVisible:this.props.sidebarVisible})})}}te.mapExtraStateProps=(e,t)=>{var o,i,s;const l=0!==t.config.defaultState;return{sidebarVisible:null!==(s=null===(i=null===(o=null==e?void 0:e.widgetsState)||void 0===o?void 0:o[t.id])||void 0===i?void 0:i.collapse)&&void 0!==s?s:l}},te.versionManager=ee;const oe=te;function ie(e){r.p=e}})(),a})())}}});