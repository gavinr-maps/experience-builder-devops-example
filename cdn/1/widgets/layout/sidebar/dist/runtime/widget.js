System.register(["jimu-core","jimu-layouts/layout-runtime","jimu-ui","jimu-theme"],(function(e,t){var o={},i={},s={},l={};return{setters:[function(e){o.AppMode=e.AppMode,o.BaseVersionManager=e.BaseVersionManager,o.Immutable=e.Immutable,o.LayoutItemType=e.LayoutItemType,o.React=e.React,o.appActions=e.appActions,o.classNames=e.classNames,o.css=e.css,o.getAppStore=e.getAppStore,o.i18n=e.i18n,o.jsx=e.jsx,o.moduleLoader=e.moduleLoader,o.polished=e.polished},function(e){i.LayoutEntry=e.LayoutEntry,i.PageContext=e.PageContext,i.utils=e.utils},function(e){s.Button=e.Button,s.Icon=e.Icon,s.Loading=e.Loading,s.NormalLineType=e.NormalLineType,s.styleUtils=e.styleUtils},function(e){l.ThemeSwitchComponent=e.ThemeSwitchComponent}],execute:function(){e((()=>{var e={35737:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m14 4-6 8-6-8z"></path></svg>'},51042:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M12 14 4 8l8-6z"></path></svg>'},23001:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m4 2 8 6-8 6z"></path></svg>'},30934:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m2 12 6-8 6 8z"></path></svg>'},26490:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M3.154 3.154a.527.527 0 0 1 .746 0l1.317 1.317A8.6 8.6 0 0 1 8 4c2.667 0 5.667 1.333 7 4-.696 1.393-1.847 2.422-3.168 3.087l1.014 1.013a.527.527 0 1 1-.746.746l-1.317-1.317A8.6 8.6 0 0 1 8 12c-2.667 0-5.667-1.333-7-4 .696-1.393 1.847-2.422 3.168-3.087L3.154 3.9a.527.527 0 0 1 0-.746m1.698 2.443C3.726 6.087 2.782 6.882 2 8c1.422 2.033 3.382 3 6 3a8.7 8.7 0 0 0 2.03-.225l-.675-.674A2.5 2.5 0 0 1 5.9 6.644zm6.296 4.805C12.275 9.913 13.218 9.119 14 8c-1.422-2.033-3.382-3-6-3q-1.088 0-2.03.225l.675.674a2.5 2.5 0 0 1 3.457 3.456zM6.5 8c0-.221.048-.431.134-.62l1.987 1.986A1.5 1.5 0 0 1 6.5 8m.88-1.366 1.986 1.987a1.5 1.5 0 0 0-1.987-1.987" clip-rule="evenodd"></path></svg>'},73529:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M8 12c-2.667 0-5.667-1.333-7-4 1.333-2.667 4.333-4 7-4s5.667 1.333 7 4c-1.333 2.667-4.333 4-7 4m0-7c-2.618 0-4.578.967-6 3 1.422 2.033 3.382 3 6 3s4.578-.967 6-3c-1.422-2.033-3.382-3-6-3m0 5.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" clip-rule="evenodd"></path></svg>'},17663:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M2.854 2.153a.485.485 0 0 0-.708 0 .54.54 0 0 0 0 .738l5.5 5.956a.485.485 0 0 0 .708 0l5.5-5.956a.54.54 0 0 0 0-.738.485.485 0 0 0-.708 0L8 7.74zm0 5a.485.485 0 0 0-.708 0 .54.54 0 0 0 0 .738l5.5 5.956a.485.485 0 0 0 .708 0l5.5-5.956a.54.54 0 0 0 0-.738.485.485 0 0 0-.708 0L8 12.74z" clip-rule="evenodd"></path></svg>'},30655:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M2.146 4.653a.485.485 0 0 1 .708 0L8 10.24l5.146-5.587a.485.485 0 0 1 .708 0 .54.54 0 0 1 0 .738l-5.5 5.956a.485.485 0 0 1-.708 0l-5.5-5.956a.54.54 0 0 1 0-.738" clip-rule="evenodd"></path></svg>'},8934:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M13.847 2.854a.485.485 0 0 0 0-.708.54.54 0 0 0-.738 0l-5.956 5.5a.485.485 0 0 0 0 .708l5.956 5.5a.54.54 0 0 0 .738 0 .486.486 0 0 0 0-.708L8.26 8zm-5 0a.485.485 0 0 0 0-.708.54.54 0 0 0-.738 0l-5.956 5.5a.485.485 0 0 0 0 .708l5.956 5.5a.54.54 0 0 0 .738 0 .485.485 0 0 0 0-.708L3.26 8z" clip-rule="evenodd"></path></svg>'},37568:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M11.347 2.146a.485.485 0 0 1 0 .708L5.76 8l5.587 5.146a.486.486 0 0 1 0 .708.54.54 0 0 1-.738 0l-5.956-5.5a.485.485 0 0 1 0-.708l5.956-5.5a.54.54 0 0 1 .738 0" clip-rule="evenodd"></path></svg>'},83343:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M2.153 13.146a.485.485 0 0 0 0 .708.54.54 0 0 0 .738 0l5.956-5.5a.485.485 0 0 0 0-.708l-5.956-5.5a.54.54 0 0 0-.738 0 .485.485 0 0 0 0 .708L7.74 8zm5 0a.485.485 0 0 0 0 .708.54.54 0 0 0 .738 0l5.956-5.5a.485.485 0 0 0 0-.708l-5.956-5.5a.54.54 0 0 0-.738 0 .485.485 0 0 0 0 .708L12.74 8z" clip-rule="evenodd"></path></svg>'},52943:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M4.653 13.854a.485.485 0 0 1 0-.708L10.24 8 4.653 2.854a.485.485 0 0 1 0-.708.54.54 0 0 1 .738 0l5.956 5.5a.485.485 0 0 1 0 .708l-5.956 5.5a.54.54 0 0 1-.738 0" clip-rule="evenodd"></path></svg>'},49238:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M13.146 13.847a.486.486 0 0 0 .708 0 .54.54 0 0 0 0-.738l-5.5-5.956a.485.485 0 0 0-.708 0l-5.5 5.956a.54.54 0 0 0 0 .738.485.485 0 0 0 .708 0L8 8.26zm0-5a.485.485 0 0 0 .708 0 .54.54 0 0 0 0-.738l-5.5-5.956a.485.485 0 0 0-.708 0l-5.5 5.956a.54.54 0 0 0 0 .738.485.485 0 0 0 .708 0L8 3.26z" clip-rule="evenodd"></path></svg>'},94064:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M13.854 11.347a.486.486 0 0 1-.708 0L8 5.76l-5.146 5.587a.485.485 0 0 1-.708 0 .54.54 0 0 1 0-.738l5.5-5.956a.485.485 0 0 1 .708 0l5.5 5.956a.54.54 0 0 1 0 .738" clip-rule="evenodd"></path></svg>'},79244:e=>{"use strict";e.exports=o},41496:e=>{"use strict";e.exports=i},1888:e=>{"use strict";e.exports=l},14321:e=>{"use strict";e.exports=s}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="";var r={};return n.p=window.jimuConfig.baseUrl,(()=>{"use strict";n.r(r),n.d(r,{__set_webpack_public_path__:()=>oe,default:()=>te});var e,t,o,i,s=n(79244),l=n(41496),a=n(14321);class c extends s.React.PureComponent{render(){const{style:e,className:t,innerLayouts:o,itemStyle:i}=this.props;return s.React.createElement("div",{className:(0,s.classNames)("side d-flex",t),style:Object.assign(Object.assign(Object.assign({},e),a.styleUtils.toCSSStyle(i)),{overflow:"auto"})},s.React.createElement(l.LayoutEntry,{className:"border-0",layouts:o,isInWidget:!0,ignoreMinHeight:!0}))}}!function(e){e.First="FIRST",e.Second="SECOND"}(e||(e={})),function(e){e.Start="START",e.Center="CENTER",e.End="END"}(t||(t={})),function(e){e.Horizontal="HORIZONTAL",e.Vertical="VERTICAL"}(o||(o={})),function(e){e.Left="LEFT",e.Right="RIGHT",e.Up="UP",e.Down="DOWN"}(i||(i={}));(0,s.Immutable)({direction:o.Horizontal,collapseSide:e.First,overlay:!1,size:"300px",divider:{visible:!0,lineStyle:{type:a.NormalLineType.SOLID,color:"var(--light-500)",width:"1px"}},resizable:!1,toggleBtn:{visible:!0,icon:i.Left,iconSource:0,offsetX:15,offsetY:0,position:t.Center,iconSize:14,width:15,height:60,border:{type:a.NormalLineType.SOLID,color:"var(--light-500)",width:"1px"},color:{normal:{icon:{useTheme:!1,color:"var(--black)"},bg:{useTheme:!0,color:"var(--light)"}},hover:{bg:{useTheme:!0,color:"var(--light)"}}},expandStyle:{style:{borderRadius:"0 92px 92px 0"}},collapseStyle:{style:{borderRadius:"0 92px 92px 0"}}},defaultState:1});var p=n(1888);function d(e,t){const o=e.widgets[t],i=[],l=Object.keys(o.layouts),n=Object.keys(o.layouts[l[0]])[0];return l.map((e=>o.layouts[e][n])).forEach((t=>{var o;const l=e.layouts[t];Object.keys(null!==(o=null==l?void 0:l.content)&&void 0!==o?o:{}).forEach((e=>{const t=l.content[e];t.type===s.LayoutItemType.Widget?i.push(t.widgetId):t.type===s.LayoutItemType.Section&&i.push(t.sectionId)}))})),i}var u=n(37568),g=n.n(u),h=n(52943),f=n.n(h),v=n(94064),m=n.n(v),x=n(30655),y=n.n(x),b=n(8934),w=n.n(b),S=n(83343),j=n.n(S),z=n(49238),$=n.n(z),L=n(17663),C=n.n(L),B=n(51042),R=n.n(B),I=n(23001),M=n.n(I),O=n(30934),N=n.n(O),E=n(35737),T=n.n(E),F=n(73529),A=n.n(F),P=function(e,t){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(o[i[s]]=e[i[s]])}return o};const k=e=>{const t=window.SVG,{className:o}=e,i=P(e,["className"]),l=(0,s.classNames)("jimu-icon jimu-icon-component",o);return t?s.React.createElement(t,Object.assign({className:l,src:A()},i)):s.React.createElement("svg",Object.assign({className:l},i))};var H=n(26490),V=n.n(H),D=function(e,t){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(o[i[s]]=e[i[s]])}return o};const U=e=>{const t=window.SVG,{className:o}=e,i=D(e,["className"]),l=(0,s.classNames)("jimu-icon jimu-icon-component",o);return t?s.React.createElement(t,Object.assign({className:l,src:V()},i)):s.React.createElement("svg",Object.assign({className:l},i))},_={};_[i.Left]=g(),_[i.Right]=f(),_[i.Up]=m(),_[i.Down]=y();const W={};W[i.Left]=w(),W[i.Right]=j(),W[i.Up]=$(),W[i.Down]=C();const Y={};function X(e,t){return 1===t?W[e]:2===t?Y[e]:_[e]}Y[i.Left]=R(),Y[i.Right]=M(),Y[i.Up]=N(),Y[i.Down]=T();class G extends s.React.PureComponent{constructor(){super(...arguments),this.toggleVisible=e=>{e.stopPropagation();const{widgetId:t,showAsExpressTip:o}=this.props;s.moduleLoader.loadModule("jimu-for-builder").then((e=>{const{getAppConfigAction:i}=e,s=i(),l=s.appConfig.widgets[t].config.setIn(["toggleBtn","visible"],o);s.editWidgetConfig(t,l);const n=function(e,t){const o=e.mainSizeMode,i=[],s=d(e,t),l={};return Object.keys(e.widgets).forEach((i=>{const s=e.widgets[i];if("sidebar"===s.manifest.name&&i!==t){const e=Object.keys(s.layouts),t=Object.keys(s.layouts[e[0]])[0];t!==o&&(l[t]?l[t].push(i):l[t]=[i])}})),Object.keys(l).forEach((t=>{const o=l[t];1!==o.length?o.forEach((t=>{const o=d(e,t);s.some((e=>o.includes(e)))&&i.push(t)})):i.push(o[0])})),i}(s.appConfig,t);n.forEach((e=>{const t=s.appConfig.widgets[e].config.setIn(["toggleBtn","visible"],o);s.editWidgetConfig(e,t)})),s.exec()})).catch((e=>{console.error(e)}))}}getStyle(t){var i;const{width:l,height:n,color:r,border:c,showAsExpressTip:p,widgetId:d}=this.props,u=(0,s.getAppStore)().getState().appConfig.widgets[d],g=u.config.direction,h=u.config.collapseSide;let f,v;return g===o.Vertical?(f="none",v=h===e.First?`translate(-8px, ${n-8}px)`:`translate(-8px, -${n-8}px)`):(f="translateY(-24px)",v=h===e.First?`translate(${l-8}px, 8px)`:`translate(-${l-8}px, 8px)`),s.css`
      display: flex;
      justify-content: flex-start;
      flex-direction: ${g===o.Vertical?"row":"column-reverse"};
      align-items: ${h===e.Second?"end":"start"};
      width: ${l+24}px;
      height: ${n+24}px;
      transform: ${f};
      pointer-events: none;
      position: absolute;
      right: ${g===o.Horizontal&&h===e.Second?0:"auto"};
      bottom: ${g===o.Vertical&&h===e.Second?0:"auto"};

      .sidebar-controller {
        padding: 0;
        width: ${l}px;
        height: ${n}px;
        overflow: ${t?"visible":"hidden"};

        background-color: ${p?"var(--sys-color-primary)":r.normal.bg.color} !important;
        opacity: ${p?.5:1};
        &:hover {
        background-color: ${p?"var(--sys-color-primary)":r.hover.bg.color} !important;
          opacity: ${p?.8:1};
        }

        border: ${p?"2px dashed var(--ref-palette-primary-700)":null!==(i=a.styleUtils.toCSSBorder(c))&&void 0!==i?i:"none"} !important;

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
        border: 1px solid var(--sys-color-divider-primary);
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
    `}flipStyle(e){if(!this.props.shouldFlip)return e;let t=(0,s.Immutable)(e);if(null!=e.borderRadius){const o=e.borderRadius.split(" ");t=t.set("borderRadius",`${o[1]} ${o[0]} ${o[3]} ${o[2]}`)}return t}isMainSizeMode(){let e,t;if(window.jimuConfig.isBuilder?(t=(0,s.getAppStore)().getState().appStateInBuilder,e=null==t?void 0:t.appConfig):(t=(0,s.getAppStore)().getState(),e=t.appConfig),e){return t.browserSizeMode===e.mainSizeMode}return!1}render(){const{icon:e,iconSize:t,iconSource:o,style:i,expanded:l,shouldFlip:n,color:r,showAsExpressTip:c,onClick:d}=this.props,u=n?180:0,g=s.i18n.getIntl().formatMessage({id:l?"collapse":"expand"}),h=window.jimuConfig.isInBuilder&&window.parent.isExpressBuilder;return(0,s.jsx)(p.ThemeSwitchComponent,{useTheme2:c},(0,s.jsx)("div",{ref:e=>{this.ref=e},css:this.getStyle(h),onMouseLeave:()=>{this.ref.classList.remove("active")}},(0,s.jsx)(a.Button,{className:"sidebar-controller d-flex justify-content-center align-items-center",style:this.flipStyle(i),onClick:d,"aria-expanded":l,"aria-label":g,title:g,onMouseEnter:()=>{this.ref.classList.add("active")}},(0,s.jsx)(a.Icon,{className:"icon",rotate:l?0+u:180+u,icon:X(e,o),size:t,color:c?"#000":r.normal.icon.color})),h&&this.isMainSizeMode()&&(0,s.jsx)(p.ThemeSwitchComponent,{useTheme2:window.jimuConfig.isInBuilder},(0,s.jsx)("div",{className:"toggle-visible-btn rounded-circle",title:s.i18n.getIntl().formatMessage({id:c?"show":"hide"}),onClick:this.toggleVisible},c?(0,s.jsx)(U,{color:"var(--ref-palette-black)"}):(0,s.jsx)(k,{color:"var(--ref-palette-black)"})))))}}const q=s.css`
  transition: all 200ms;
`;class Z extends s.React.PureComponent{constructor(e){super(e),this.removeSplitHandler=()=>{null!=this.interactable&&(this.interactable.unset(),this.interactable=null)},this.state={isResizing:!1,deltaSize:0}}componentDidMount(){const{firstLayouts:e,secondLayouts:t,config:o}=this.props;null!=e&&null!=t&&this.bindSplitHandler(),(0,s.getAppStore)().dispatch(s.appActions.widgetStatePropChange(this.props.widgetId,"collapse",0!==o.defaultState))}componentDidUpdate(){const{firstLayouts:e,secondLayouts:t}=this.props;null!=e&&null!=t&&null==this.interactable&&this.bindSplitHandler(),null!=this.interactable&&this.interactable.draggable({startAxis:this.props.direction===o.Horizontal?"x":"y",lockAxis:this.props.direction===o.Horizontal?"x":"y"})}componentWillUnmount(){this.removeSplitHandler()}handleToggleSidebar(e){e.stopPropagation(),(0,s.getAppStore)().dispatch(s.appActions.widgetStatePropChange(this.props.widgetId,"collapse",!this.props.sidebarVisible))}calSidebarSize(){const{config:e}=this.props;let t;return t=0!==this.state.deltaSize?l.utils.isPercentage(e.size)?`${parseFloat(e.size)*this.domSize/100+this.state.deltaSize}px`:`${parseFloat(e.size)+this.state.deltaSize}px`:e.size,t}createCollapsibleSide(t,i){const{config:l,direction:n}=this.props,r=this.calSidebarSize(),a=this.shouldFlipLeftAndRight();let c;c=n===o.Horizontal?s.css`
        width: ${r};
        transform: ${l.overlay&&!this.props.sidebarVisible?l.collapseSide===e.First?`translateX(-${r})`:`translateX(${r})`:"none"};
        top: ${l.overlay?0:"auto"};
        bottom: ${l.overlay?0:"auto"};
        left: ${l.overlay&&i===e.First?0:"auto"};
        right: ${l.overlay&&i===e.Second?0:"auto"};
      `:s.css`
        height: ${r};
        transform: ${l.overlay&&!this.props.sidebarVisible?l.collapseSide===e.First?`translateY(-${r})`:`translateY(${r})`:"none"};
        left: ${l.overlay?0:"auto"};
        right: ${l.overlay?0:"auto"};
        top: ${l.overlay&&i===e.First?0:"auto"};
        bottom: ${l.overlay&&i===e.Second?0:"auto"};
      `;const p=this.layoutItemComponent;return(0,s.jsx)("div",{css:s.css`
        ${this.state.isResizing?"":q}
        ${c}
        position: ${l.overlay?"absolute":"relative"};
        overflow: visible;
        z-index: 2;
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: auto;
      `,className:(0,s.classNames)("d-flex side-collapsable",{"flex-column":n===o.Vertical})},(0,s.jsx)(p,{innerLayouts:t,itemStyle:i===e.First?l.firstPanelStyle:l.secondPanelStyle,collapsed:!this.props.sidebarVisible,className:(0,s.classNames)({"h-100":n===o.Vertical,"w-100":n===o.Horizontal})}),this.createController(a))}splitStyle(){const{direction:t,config:i,appMode:l}=this.props,n=this.calSidebarSize(),r=!this.props.sidebarVisible,c=null!=i.divider&&i.divider.visible&&null!=i.divider.lineStyle?a.styleUtils.toCSSBorder(i.divider.lineStyle):"none";return t===o.Horizontal?s.css`
        width: 1px;
        border-left: ${c};
        position: ${i.overlay?"absolute":"relative"};
        left: ${i.overlay&&!r&&i.collapseSide===e.First?n:"auto"};
        right: ${i.overlay&&!r&&i.collapseSide===e.Second?n:"auto"};
        display: ${r?"none":"block"};
        height: ${i.overlay?"100%":"auto"};
        &:after {
          display: ${i.resizable||l===s.AppMode.Design?"block":"none"};
          position: absolute;
          content: '';
          width: 5px;
          top: 0;
          bottom: 0;
          left: -2px;
          cursor: col-resize;
        }
        z-index: 2;
      `:s.css`
      height: 1px;
      border-top: ${c};
      position: ${i.overlay?"absolute":"relative"};
      top: ${i.overlay&&!r&&i.collapseSide===e.First?n:"auto"};
      bottom: ${i.overlay&&!r&&i.collapseSide===e.Second?n:"auto"};
      display: ${r?"none":"block"};
      width: ${i.overlay?"100%":"auto"};
      &:after {
        display: ${i.resizable||l===s.AppMode.Design?"block":"none"};
        position: absolute;
        content: '';
        height: 5px;
        top: -2px;
        right: 0;
        left: 0;
        cursor: row-resize;
      }
      z-index: 2;
    `}createController(i){var l,n;const{config:r,direction:a}=this.props;if(!(null==r.toggleBtn||r.toggleBtn.visible||window.jimuConfig.isInBuilder&&(null===(l=window.parent)||void 0===l?void 0:l.isExpressBuilder)))return null;const c=this.props.sidebarVisible?r.toggleBtn.collapseStyle:r.toggleBtn.expandStyle;let p,d,u,g=0,h=0;if(a===o.Horizontal){r.toggleBtn.position===t.Start?p=0:r.toggleBtn.position===t.Center&&(p="50%",h=-r.toggleBtn.height/2);const o=r.collapseSide===e.Second;u=s.css`
        top: ${r.toggleBtn.position!==t.End?p:"auto"};
        bottom: ${r.toggleBtn.position===t.End?0:"auto"};
        right: ${o?"auto":0};
        left: ${o?0:"auto"};
      `}else r.toggleBtn.position===t.Start?d=0:r.toggleBtn.position===t.Center&&(d="50%",g=-r.toggleBtn.width/2),u=s.css`
        left: ${r.toggleBtn.position!==t.End?d:"auto"};
        right: ${r.toggleBtn.position===t.End?0:"auto"};
        bottom: ${r.collapseSide===e.First?0:"auto"};
        top: ${r.collapseSide===e.Second?0:"auto"};
      `;const{style:f}=c,{iconSize:v,width:m,height:x,color:y,icon:b,border:w,iconSource:S}=r.toggleBtn;return(0,s.jsx)("div",{css:s.css`
          ${u}
          position: absolute;
          pointer-events: none;
          width: ${m}px;
          height: ${x}px;
          transform: translate(${r.toggleBtn.offsetX+g}px, ${r.toggleBtn.offsetY+h}px);
        `},(0,s.jsx)(G,{widgetId:this.props.widgetId,icon:b,iconSize:v,expanded:this.props.sidebarVisible,width:m,height:x,color:y,style:f,shouldFlip:i,border:w,iconSource:S,showAsExpressTip:window.jimuConfig.isInBuilder&&(null===(n=window.parent)||void 0===n?void 0:n.isExpressBuilder)&&null!=r.toggleBtn&&!r.toggleBtn.visible,onClick:this.handleToggleSidebar.bind(this)}))}createNormalSide(t,o){const i=this.layoutItemComponent,{config:l}=this.props;return(0,s.jsx)("div",{css:this.state.isResizing?"":q,className:"flex-shrink-0 flex-grow-1 d-flex side-normal",style:{zIndex:0,flexBasis:this.props.sidebarVisible?"0":"100%",overflow:"auto"}},(0,s.jsx)(i,{itemStyle:o===e.First?l.firstPanelStyle:l.secondPanelStyle,innerLayouts:t,className:"w-100"}))}shouldFlipLeftAndRight(){const{direction:e}=this.props;if(e===o.Horizontal){return(0,s.getAppStore)().getState().appContext.isRTL}return!1}createContent(){const{config:t,firstLayouts:o,secondLayouts:i}=this.props;return t.overlay?t.collapseSide===e.First?(0,s.jsx)(s.React.Fragment,null,this.createNormalSide(i,e.Second),(0,s.jsx)("div",{css:this.splitStyle(),ref:e=>{this.splitRef=e}}),this.createCollapsibleSide(o,e.First)):(0,s.jsx)(s.React.Fragment,null,this.createNormalSide(o,e.First),(0,s.jsx)("div",{css:this.splitStyle(),ref:e=>{this.splitRef=e}}),this.createCollapsibleSide(i,e.Second)):t.collapseSide===e.First?(0,s.jsx)(s.React.Fragment,null,this.createCollapsibleSide(o,e.First),(0,s.jsx)("div",{css:this.splitStyle(),ref:e=>{this.splitRef=e}}),this.createNormalSide(i,e.Second)):(0,s.jsx)(s.React.Fragment,null,this.createNormalSide(o,e.First),(0,s.jsx)("div",{css:this.splitStyle(),ref:e=>{this.splitRef=e}}),this.createCollapsibleSide(i,e.Second))}render(){const{config:t,firstLayouts:i,secondLayouts:n,direction:r}=this.props;return null==i||null==n?(0,s.jsx)(a.Loading,null):(0,s.jsx)(l.PageContext.Consumer,null,(i=>{const l=i.builderTheme;return(0,s.jsx)("div",{className:(0,s.classNames)("d-flex w-100",{"flex-column":r===o.Vertical}),ref:e=>{this.ref=e},css:s.css`
                border: 1px dashed ${null!=l?s.polished.rgba(l.ref.palette.neutral[900],.3):""};
                position: relative;
                overflow: hidden;
                user-select: ${this.state.isResizing?"none":"auto"};
                justify-content: ${t.collapseSide===e.First?"flex-end":"flex-start"};
                body:not(.design-mode) & {
                  border: none;
                }
              `},this.createContent())}))}}class J extends Z{constructor(e){super(e),this.bindSplitHandler=()=>{null==this.interactModule?s.moduleLoader.loadModule("jimu-core/dnd").then((e=>{this.interactModule=e.interact,this.initHandler()})).catch((e=>{console.error(e)})):this.initHandler()},this.layoutItemComponent=c}initHandler(){const{config:t}=this.props;let i,s;null!=this.splitRef&&t.resizable&&null==this.interactable&&(this.interactable=this.interactModule(this.splitRef).origin("parent").draggable({inertia:!1,autoScroll:!1,modifiers:[this.interactModule.modifiers.restrict({restriction:"parent"})],startAxis:this.props.direction===o.Horizontal?"x":"y",lockAxis:this.props.direction===o.Horizontal?"x":"y",onstart:t=>{t.stopPropagation();const n=this.props.config.collapseSide===e.First?1:-1;if(this.props.direction===o.Horizontal){const e=l.utils.isRTL()?-1:1;i=this.state.deltaSize*n*e,s=0}else i=0,s=this.state.deltaSize*n;const r=this.ref.getBoundingClientRect();this.domSize=this.props.direction===o.Horizontal?r.width:r.height,this.setState({isResizing:!0})},onmove:t=>{if(t.stopPropagation(),i+=t.dx,s+=t.dy,this.props.direction===o.Horizontal){const t=l.utils.isRTL()?-1:1;this.props.config.collapseSide===e.First?this.setState({deltaSize:Math.round(i*t)}):this.setState({deltaSize:-Math.round(i*t)})}else this.props.config.collapseSide===e.First?this.setState({deltaSize:Math.round(s)}):this.setState({deltaSize:-Math.round(s)})},onend:e=>{e.stopPropagation(),this.setState({isResizing:!1})}}))}}class K extends s.BaseVersionManager{constructor(){super(...arguments),this.versions=[{version:"1.8.0",description:"Online 10.1.",upgrader:e=>{let t=e;return t=t.setIn(["toggleBtn","color","normal","icon","color"],"var(--dark-800)"),t=t.setIn(["toggleBtn","color","normal","bg","color"],"var(--light-100)"),t=t.setIn(["toggleBtn","color","hover","bg","color"],"var(--light-200)"),t=t.setIn(["toggleBtn","border"],{type:"solid",color:"var(--light-500)",width:"1px"}),t}}]}}const Q=new K;class ee extends s.React.PureComponent{render(){const{layouts:e,theme:t,builderSupportModules:o}=this.props,i=window.jimuConfig.isInBuilder?o.widgetModules.SidebarLayoutBuilder:J;return null==i?(0,s.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},"No layout component!"):(0,s.jsx)("div",{className:"widget-sidebar-layout d-flex w-100 h-100"},(0,s.jsx)(i,{theme:t,widgetId:this.props.id,direction:this.props.config.direction,firstLayouts:e.FIRST,secondLayouts:e.SECOND,config:this.props.config,sidebarVisible:this.props.sidebarVisible}))}}ee.mapExtraStateProps=(e,t)=>{var o,i,s;return{sidebarVisible:null===(s=null===(i=null===(o=null==e?void 0:e.widgetsState)||void 0===o?void 0:o[t.id])||void 0===i?void 0:i.collapse)||void 0===s||s}},ee.versionManager=Q;const te=ee;function oe(e){n.p=e}})(),r})())}}}));