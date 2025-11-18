System.register(["jimu-core","jimu-core/dnd","jimu-for-builder","jimu-layouts/layout-runtime","jimu-core/emotion","jimu-layouts/layout-builder","jimu-ui","jimu-theme"],function(e,t){var o={},i={},s={},l={},n={},r={},a={},c={};return{setters:[function(e){o.AppMode=e.AppMode,o.Immutable=e.Immutable,o.LayoutItemType=e.LayoutItemType,o.React=e.React,o.ReactRedux=e.ReactRedux,o.appActions=e.appActions,o.classNames=e.classNames,o.css=e.css,o.getAppStore=e.getAppStore,o.i18n=e.i18n,o.moduleLoader=e.moduleLoader,o.polished=e.polished},function(e){i.interact=e.interact},function(e){s.getAppConfigAction=e.getAppConfigAction},function(e){l.PageContext=e.PageContext,l.utils=e.utils},function(e){n.jsx=e.jsx,n.jsxs=e.jsxs},function(e){r.LayoutEntry=e.LayoutEntry},function(e){a.Button=e.Button,a.Icon=e.Icon,a.Loading=e.Loading,a.NormalLineType=e.NormalLineType,a.styleUtils=e.styleUtils},function(e){c.ThemeSwitchComponent=e.ThemeSwitchComponent}],execute:function(){e((()=>{var e={1888:e=>{"use strict";e.exports=c},4108:e=>{"use strict";e.exports=s},6055:e=>{"use strict";e.exports=r},8934:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M13.847 2.854a.485.485 0 0 0 0-.708.54.54 0 0 0-.738 0l-5.956 5.5a.485.485 0 0 0 0 .708l5.956 5.5a.54.54 0 0 0 .738 0 .486.486 0 0 0 0-.708L8.26 8zm-5 0a.485.485 0 0 0 0-.708.54.54 0 0 0-.738 0l-5.956 5.5a.485.485 0 0 0 0 .708l5.956 5.5a.54.54 0 0 0 .738 0 .485.485 0 0 0 0-.708L3.26 8z" clip-rule="evenodd"></path></svg>'},14321:e=>{"use strict";e.exports=a},17663:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M2.854 2.153a.485.485 0 0 0-.708 0 .54.54 0 0 0 0 .738l5.5 5.956a.485.485 0 0 0 .708 0l5.5-5.956a.54.54 0 0 0 0-.738.485.485 0 0 0-.708 0L8 7.74zm0 5a.485.485 0 0 0-.708 0 .54.54 0 0 0 0 .738l5.5 5.956a.485.485 0 0 0 .708 0l5.5-5.956a.54.54 0 0 0 0-.738.485.485 0 0 0-.708 0L8 12.74z" clip-rule="evenodd"></path></svg>'},23001:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m4 2 8 6-8 6z"></path></svg>'},26245:e=>{"use strict";e.exports=i},26490:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M3.154 3.154a.527.527 0 0 1 .746 0l1.317 1.317A8.6 8.6 0 0 1 8 4c2.667 0 5.667 1.333 7 4-.696 1.393-1.847 2.422-3.168 3.087l1.014 1.013a.527.527 0 1 1-.746.746l-1.317-1.317A8.6 8.6 0 0 1 8 12c-2.667 0-5.667-1.333-7-4 .696-1.393 1.847-2.422 3.168-3.087L3.154 3.9a.527.527 0 0 1 0-.746m1.698 2.443C3.726 6.087 2.782 6.882 2 8c1.422 2.033 3.382 3 6 3a8.7 8.7 0 0 0 2.03-.225l-.675-.674A2.5 2.5 0 0 1 5.9 6.644zm6.296 4.805C12.275 9.913 13.218 9.119 14 8c-1.422-2.033-3.382-3-6-3q-1.088 0-2.03.225l.675.674a2.5 2.5 0 0 1 3.457 3.456zM6.5 8c0-.221.048-.431.134-.62l1.987 1.986A1.5 1.5 0 0 1 6.5 8m.88-1.366 1.986 1.987a1.5 1.5 0 0 0-1.987-1.987" clip-rule="evenodd"></path></svg>'},30655:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M2.146 4.653a.485.485 0 0 1 .708 0L8 10.24l5.146-5.587a.485.485 0 0 1 .708 0 .54.54 0 0 1 0 .738l-5.5 5.956a.485.485 0 0 1-.708 0l-5.5-5.956a.54.54 0 0 1 0-.738" clip-rule="evenodd"></path></svg>'},30934:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m2 12 6-8 6 8z"></path></svg>'},35737:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m14 4-6 8-6-8z"></path></svg>'},37568:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M11.347 2.146a.485.485 0 0 1 0 .708L5.76 8l5.587 5.146a.486.486 0 0 1 0 .708.54.54 0 0 1-.738 0l-5.956-5.5a.485.485 0 0 1 0-.708l5.956-5.5a.54.54 0 0 1 .738 0" clip-rule="evenodd"></path></svg>'},41496:e=>{"use strict";e.exports=l},49238:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M13.146 13.847a.486.486 0 0 0 .708 0 .54.54 0 0 0 0-.738l-5.5-5.956a.485.485 0 0 0-.708 0l-5.5 5.956a.54.54 0 0 0 0 .738.485.485 0 0 0 .708 0L8 8.26zm0-5a.485.485 0 0 0 .708 0 .54.54 0 0 0 0-.738l-5.5-5.956a.485.485 0 0 0-.708 0l-5.5 5.956a.54.54 0 0 0 0 .738.485.485 0 0 0 .708 0L8 3.26z" clip-rule="evenodd"></path></svg>'},51042:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M12 14 4 8l8-6z"></path></svg>'},52943:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M4.653 13.854a.485.485 0 0 1 0-.708L10.24 8 4.653 2.854a.485.485 0 0 1 0-.708.54.54 0 0 1 .738 0l5.956 5.5a.485.485 0 0 1 0 .708l-5.956 5.5a.54.54 0 0 1-.738 0" clip-rule="evenodd"></path></svg>'},67386:e=>{"use strict";e.exports=n},73529:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M8 12c-2.667 0-5.667-1.333-7-4 1.333-2.667 4.333-4 7-4s5.667 1.333 7 4c-1.333 2.667-4.333 4-7 4m0-7c-2.618 0-4.578.967-6 3 1.422 2.033 3.382 3 6 3s4.578-.967 6-3c-1.422-2.033-3.382-3-6-3m0 5.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" clip-rule="evenodd"></path></svg>'},79244:e=>{"use strict";e.exports=o},83343:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M2.153 13.146a.485.485 0 0 0 0 .708.54.54 0 0 0 .738 0l5.956-5.5a.485.485 0 0 0 0-.708l-5.956-5.5a.54.54 0 0 0-.738 0 .485.485 0 0 0 0 .708L7.74 8zm5 0a.485.485 0 0 0 0 .708.54.54 0 0 0 .738 0l5.956-5.5a.485.485 0 0 0 0-.708l-5.956-5.5a.54.54 0 0 0-.738 0 .485.485 0 0 0 0 .708L12.74 8z" clip-rule="evenodd"></path></svg>'},94064:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M13.854 11.347a.486.486 0 0 1-.708 0L8 5.76l-5.146 5.587a.485.485 0 0 1-.708 0 .54.54 0 0 1 0-.738l5.5-5.956a.485.485 0 0 1 .708 0l5.5 5.956a.54.54 0 0 1 0 .738" clip-rule="evenodd"></path></svg>'}},t={};function p(o){var i=t[o];if(void 0!==i)return i.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,p),s.exports}p.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return p.d(t,{a:t}),t},p.d=(e,t)=>{for(var o in t)p.o(t,o)&&!p.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},p.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),p.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},p.p="";var d={};return p.p=window.jimuConfig.baseUrl,(()=>{"use strict";p.r(d),p.d(d,{default:()=>te});var e,t,o,i,s=p(79244),l=p(26245),n=p(4108),r=p(41496),a=p(67386),c=p(6055),u=p(14321);class h extends s.React.PureComponent{render(){const{style:e,className:t,innerLayouts:o,itemStyle:i,collapsed:l}=this.props;return(0,a.jsx)("div",{className:(0,s.classNames)("side",t,{"d-flex":!l,"d-none":l}),style:Object.assign(Object.assign(Object.assign({},e),u.styleUtils.toCSSStyle(i)),{overflow:"auto"}),css:s.css`
          .exb-drop-area {
            pointer-events: ${l?"none !important":"inherit"}
          }
        `,children:(0,a.jsx)(c.LayoutEntry,{className:"border-0",layouts:o,isInWidget:!0,ignoreMinHeight:!0})})}}!function(e){e.First="FIRST",e.Second="SECOND"}(e||(e={})),function(e){e.Start="START",e.Center="CENTER",e.End="END"}(t||(t={})),function(e){e.Horizontal="HORIZONTAL",e.Vertical="VERTICAL"}(o||(o={})),function(e){e.Left="LEFT",e.Right="RIGHT",e.Up="UP",e.Down="DOWN"}(i||(i={}));(0,s.Immutable)({direction:o.Horizontal,collapseSide:e.First,overlay:!1,size:"300px",divider:{visible:!0,lineStyle:{type:u.NormalLineType.SOLID,color:"var(--ref-palette-neutral-500)",width:"1px"}},resizable:!1,toggleBtn:{visible:!0,icon:i.Left,iconSource:0,offsetX:15,offsetY:0,position:t.Center,iconSize:14,width:15,height:60,border:{type:u.NormalLineType.SOLID,color:"var(--ref-palette-neutral-500)",width:"1px"},color:{normal:{icon:{useTheme:!1,color:"var(--ref-palette-black)"},bg:{useTheme:!0,color:"var(--ref-palette-neutral-200)"}},hover:{bg:{useTheme:!0,color:"var(--ref-palette-neutral-200)"}}},expandStyle:{style:{borderRadius:"0 92px 92px 0"}},collapseStyle:{style:{borderRadius:"0 92px 92px 0"}}},defaultState:1});var g=p(1888);function f(e,t){const o=e.widgets[t],i=[],l=Object.keys(o.layouts),n=Object.keys(o.layouts[l[0]])[0];return l.map(e=>o.layouts[e][n]).forEach(t=>{var o;const l=e.layouts[t];Object.keys(null!==(o=null==l?void 0:l.content)&&void 0!==o?o:{}).forEach(e=>{const t=l.content[e];t.type===s.LayoutItemType.Widget?i.push(t.widgetId):t.type===s.LayoutItemType.Section&&i.push(t.sectionId)})}),i}var m=p(37568),v=p.n(m),x=p(52943),y=p.n(x),S=p(94064),b=p.n(S),w=p(30655),j=p.n(w),z=p(8934),$=p.n(z),C=p(83343),L=p.n(C),B=p(49238),R=p.n(B),I=p(17663),M=p.n(I),O=p(51042),N=p.n(O),A=p(23001),F=p.n(A),T=p(30934),E=p.n(T),P=p(35737),k=p.n(P),H=p(73529),V=p.n(H),D=function(e,t){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(o[i[s]]=e[i[s]])}return o};const U=e=>{const t=window.SVG,{className:o}=e,i=D(e,["className"]),l=(0,s.classNames)("jimu-icon jimu-icon-component",o);return t?(0,a.jsx)(t,Object.assign({className:l,src:V()},i)):(0,a.jsx)("svg",Object.assign({className:l},i))};var W=p(26490),Y=p.n(W),X=function(e,t){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(o[i[s]]=e[i[s]])}return o};const _=e=>{const t=window.SVG,{className:o}=e,i=X(e,["className"]),l=(0,s.classNames)("jimu-icon jimu-icon-component",o);return t?(0,a.jsx)(t,Object.assign({className:l,src:Y()},i)):(0,a.jsx)("svg",Object.assign({className:l},i))},G={};G[i.Left]=v(),G[i.Right]=y(),G[i.Up]=b(),G[i.Down]=j();const q={};q[i.Left]=$(),q[i.Right]=L(),q[i.Up]=R(),q[i.Down]=M();const Z={};function J(e,t){return 1===t?q[e]:2===t?Z[e]:G[e]}Z[i.Left]=N(),Z[i.Right]=F(),Z[i.Up]=E(),Z[i.Down]=k();class K extends s.React.PureComponent{constructor(){super(...arguments),this.toggleVisible=e=>{e.stopPropagation();const{widgetId:t,showAsExpressTip:o}=this.props;s.moduleLoader.loadModule("jimu-for-builder").then(e=>{const{getAppConfigAction:i}=e,s=i(),l=s.appConfig.widgets[t].config.setIn(["toggleBtn","visible"],o);s.editWidgetConfig(t,l);const n=function(e,t){const o=e.mainSizeMode,i=[],s=f(e,t),l={};return Object.keys(e.widgets).forEach(i=>{const s=e.widgets[i];if("sidebar"===s.manifest.name&&i!==t){const e=Object.keys(s.layouts),t=Object.keys(s.layouts[e[0]])[0];t!==o&&(l[t]?l[t].push(i):l[t]=[i])}}),Object.keys(l).forEach(t=>{const o=l[t];1!==o.length?o.forEach(t=>{const o=f(e,t);s.some(e=>o.includes(e))&&i.push(t)}):i.push(o[0])}),i}(s.appConfig,t);n.forEach(e=>{const t=s.appConfig.widgets[e].config.setIn(["toggleBtn","visible"],o);s.editWidgetConfig(e,t)}),s.exec()}).catch(e=>{console.error(e)})}}getStyle(t){var i;const{width:l,height:n,color:r,border:a,showAsExpressTip:c,widgetId:p}=this.props,d=(0,s.getAppStore)().getState().appConfig.widgets[p],h=d.config.direction,g=d.config.collapseSide;let f,m;return h===o.Vertical?(f="none",m=g===e.First?`translate(-8px, ${n-8}px)`:`translate(-8px, -${n-8}px)`):(f="translateY(-24px)",m=g===e.First?`translate(${l-8}px, 8px)`:`translate(-${l-8}px, 8px)`),s.css`
      display: flex;
      justify-content: flex-start;
      flex-direction: ${h===o.Vertical?"row":"column-reverse"};
      align-items: ${g===e.Second?"end":"start"};
      width: ${l+24}px;
      height: ${n+24}px;
      transform: ${f};
      pointer-events: none;
      position: absolute;
      right: ${h===o.Horizontal&&g===e.Second?0:"auto"};
      bottom: ${h===o.Vertical&&g===e.Second?0:"auto"};

      .sidebar-controller {
        padding: 0;
        width: ${l}px;
        height: ${n}px;
        overflow: ${t?"visible":"hidden"};

        background-color: ${c?"var(--sys-color-primary)":r.normal.bg.color} !important;
        opacity: ${c?.5:1};
        &:hover {
          background-color: ${c?"var(--sys-color-primary)":r.hover.bg.color} !important;
          opacity: ${c?.8:1};
        }

        border: ${c?"2px dashed var(--ref-palette-primary-700)":null!==(i=u.styleUtils.toCSSBorder(a))&&void 0!==i?i:"none"} !important;

        .jimu-icon {
          margin: 0;
        }
      }

      .toggle-visible-btn {
        width: 24px;
        height: 24px;
        display: none;
        transform: ${m};
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
    `}flipStyle(e){if(!this.props.shouldFlip)return e;let t=(0,s.Immutable)(e);if(null!=e.borderRadius){const o=e.borderRadius.split(" ");t=t.set("borderRadius",`${o[1]} ${o[0]} ${o[3]} ${o[2]}`)}return t.asMutable()}isMainSizeMode(){let e,t;if(window.jimuConfig.isBuilder?(t=(0,s.getAppStore)().getState().appStateInBuilder,e=null==t?void 0:t.appConfig):(t=(0,s.getAppStore)().getState(),e=t.appConfig),e){return t.browserSizeMode===e.mainSizeMode}return!1}render(){const{icon:e,iconSize:t,iconSource:o,style:i,expanded:l,shouldFlip:n,color:r,showAsExpressTip:c,onClick:p}=this.props,d=n?180:0,h=s.i18n.getIntl().formatMessage({id:l?"collapse":"expand"}),f=window.jimuConfig.isInBuilder&&window.parent.isExpressBuilder;return(0,a.jsx)(g.ThemeSwitchComponent,{useTheme2:c,children:(0,a.jsxs)("div",{ref:e=>{this.ref=e},css:this.getStyle(f),onMouseLeave:()=>{this.ref.classList.remove("active")},children:[(0,a.jsx)(u.Button,{className:"sidebar-controller d-flex justify-content-center align-items-center",style:this.flipStyle(i),onClick:p,"aria-expanded":l,"aria-label":h,title:h,onMouseEnter:()=>{this.ref.classList.add("active")},children:(0,a.jsx)(u.Icon,{className:"icon",rotate:l?0+d:180+d,icon:J(e,o),size:t,color:c?"#000":r.normal.icon.color})}),f&&this.isMainSizeMode()&&(0,a.jsx)(g.ThemeSwitchComponent,{useTheme2:window.jimuConfig.isInBuilder,children:(0,a.jsx)("div",{className:"toggle-visible-btn rounded-circle",title:s.i18n.getIntl().formatMessage({id:c?"clickToShow":"clickToHide"}),onClick:this.toggleVisible,children:c?(0,a.jsx)(_,{color:"var(--sys-color-action-text)"}):(0,a.jsx)(U,{color:"var(--sys-color-action-text)"})})})]})})}}const Q=s.css`
  transition: all 200ms;
`;class ee extends s.React.PureComponent{constructor(e){super(e),this.removeSplitHandler=()=>{null!=this.interactable&&(this.interactable.unset(),this.interactable=null)},this.state={isResizing:!1,deltaSize:0}}componentDidMount(){const{firstLayouts:e,secondLayouts:t}=this.props;null!=e&&null!=t&&this.bindSplitHandler()}componentDidUpdate(e){const{firstLayouts:t,secondLayouts:i}=this.props;null!=t&&null!=i&&null==this.interactable&&this.bindSplitHandler(),null!=this.interactable&&this.interactable.draggable({startAxis:this.props.direction===o.Horizontal?"x":"y",lockAxis:this.props.direction===o.Horizontal?"x":"y"})}componentWillUnmount(){this.removeSplitHandler()}handleToggleSidebar(e){e.stopPropagation(),(0,s.getAppStore)().dispatch(s.appActions.widgetStatePropChange(this.props.widgetId,"collapse",!this.props.sidebarVisible))}calSidebarSize(){const{config:e}=this.props;let t;return t=0!==this.state.deltaSize?r.utils.isPercentage(e.size)?`${parseFloat(e.size)*this.domSize/100+this.state.deltaSize}px`:`${parseFloat(e.size)+this.state.deltaSize}px`:e.size,t}createCollapsibleSide(t,i){const{config:l,direction:n}=this.props,c=this.calSidebarSize(),p=this.shouldFlipLeftAndRight();let d,u=`${c}`;r.utils.isPercentage(c)&&(u="100%"),d=n===o.Horizontal?s.css`
        width: ${c};
        transform: ${l.overlay&&!this.props.sidebarVisible?l.collapseSide===e.First?`translateX(-${u})`:`translateX(${u})`:"none"};
        top: ${l.overlay?0:"auto"};
        bottom: ${l.overlay?0:"auto"};
        left: ${l.overlay&&i===e.First?0:"auto"};
        right: ${l.overlay&&i===e.Second?0:"auto"};
      `:s.css`
        height: ${c};
        transform: ${l.overlay&&!this.props.sidebarVisible?l.collapseSide===e.First?`translateY(-${u})`:`translateY(${u})`:"none"};
        left: ${l.overlay?0:"auto"};
        right: ${l.overlay?0:"auto"};
        top: ${l.overlay&&i===e.First?0:"auto"};
        bottom: ${l.overlay&&i===e.Second?0:"auto"};
      `;const h=this.layoutItemComponent;return(0,a.jsxs)("div",{css:s.css`
        ${this.state.isResizing?"":Q}
        ${d}
        position: ${l.overlay?"absolute":"relative"};
        overflow: visible;
        z-index: 2;
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: auto;
      `,className:(0,s.classNames)("d-flex side-collapsable",{"flex-column":n===o.Vertical}),children:[l.collapseSide===e.Second&&this.createController(p),(0,a.jsx)(h,{innerLayouts:t,itemStyle:i===e.First?l.firstPanelStyle:l.secondPanelStyle,collapsed:!this.props.sidebarVisible,className:(0,s.classNames)({"h-100":n===o.Vertical,"w-100":n===o.Horizontal})}),l.collapseSide===e.First&&this.createController(p)]})}splitStyle(){const{direction:t,config:i,appMode:l}=this.props,n=this.calSidebarSize(),r=!this.props.sidebarVisible,a=null!=i.divider&&i.divider.visible&&null!=i.divider.lineStyle?u.styleUtils.toCSSBorder(i.divider.lineStyle):"none";return t===o.Horizontal?s.css`
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
      touch-action: none;
      user-select: none;
      border-top: ${a};
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
    `}createController(i){var l,n;const{config:r,direction:c}=this.props;if(!(null==r.toggleBtn||r.toggleBtn.visible||window.jimuConfig.isInBuilder&&(null===(l=window.parent)||void 0===l?void 0:l.isExpressBuilder)))return null;const p=this.props.sidebarVisible?r.toggleBtn.collapseStyle:r.toggleBtn.expandStyle;let d,u,h,g=0,f=0;if(c===o.Horizontal){r.toggleBtn.position===t.Start?d=0:r.toggleBtn.position===t.Center&&(d="50%",f=-r.toggleBtn.height/2);const o=r.collapseSide===e.Second;h=s.css`
        top: ${r.toggleBtn.position!==t.End?d:"auto"};
        bottom: ${r.toggleBtn.position===t.End?0:"auto"};
        right: ${o?"auto":0};
        left: ${o?0:"auto"};
      `}else r.toggleBtn.position===t.Start?u=0:r.toggleBtn.position===t.Center&&(u="50%",g=-r.toggleBtn.width/2),h=s.css`
        left: ${r.toggleBtn.position!==t.End?u:"auto"};
        right: ${r.toggleBtn.position===t.End?0:"auto"};
        bottom: ${r.collapseSide===e.First?0:"auto"};
        top: ${r.collapseSide===e.Second?0:"auto"};
      `;const{style:m}=p,{iconSize:v,width:x,height:y,color:S,icon:b,border:w,iconSource:j}=r.toggleBtn;return(0,a.jsx)("div",{css:s.css`
          ${h}
          position: absolute;
          pointer-events: none;
          width: ${x}px;
          height: ${y}px;
          transform: translate(${r.toggleBtn.offsetX+g}px, ${r.toggleBtn.offsetY+f}px);
        `,children:(0,a.jsx)(K,{widgetId:this.props.widgetId,icon:b,iconSize:v,expanded:this.props.sidebarVisible,width:x,height:y,color:S,style:m,shouldFlip:i,border:w,iconSource:j,showAsExpressTip:window.jimuConfig.isInBuilder&&(null===(n=window.parent)||void 0===n?void 0:n.isExpressBuilder)&&null!=r.toggleBtn&&!r.toggleBtn.visible,onClick:this.handleToggleSidebar.bind(this)})})}createNormalSide(t,o){const i=this.layoutItemComponent,{config:s}=this.props;return(0,a.jsx)("div",{css:this.state.isResizing?"":Q,className:"flex-shrink-0 flex-grow-1 d-flex side-normal",style:{zIndex:0,flexBasis:this.props.sidebarVisible?"0":"100%",overflow:"auto"},children:(0,a.jsx)(i,{itemStyle:o===e.First?s.firstPanelStyle:s.secondPanelStyle,innerLayouts:t,className:"w-100"})})}shouldFlipLeftAndRight(){const{direction:e}=this.props;if(e===o.Horizontal){return(0,s.getAppStore)().getState().appContext.isRTL}return!1}createContent(){const{config:t,firstLayouts:o,secondLayouts:i}=this.props;return t.overlay?t.collapseSide===e.First?(0,a.jsxs)(s.React.Fragment,{children:[this.createNormalSide(i,e.Second),(0,a.jsx)("div",{css:this.splitStyle(),ref:e=>{this.splitRef=e}}),this.createCollapsibleSide(o,e.First)]}):(0,a.jsxs)(s.React.Fragment,{children:[this.createNormalSide(o,e.First),(0,a.jsx)("div",{css:this.splitStyle(),ref:e=>{this.splitRef=e}}),this.createCollapsibleSide(i,e.Second)]}):t.collapseSide===e.First?(0,a.jsxs)(s.React.Fragment,{children:[this.createCollapsibleSide(o,e.First),(0,a.jsx)("div",{css:this.splitStyle(),ref:e=>{this.splitRef=e}}),this.createNormalSide(i,e.Second)]}):(0,a.jsxs)(s.React.Fragment,{children:[this.createNormalSide(o,e.First),(0,a.jsx)("div",{css:this.splitStyle(),ref:e=>{this.splitRef=e}}),this.createCollapsibleSide(i,e.Second)]})}render(){const{config:t,firstLayouts:i,secondLayouts:l,direction:n}=this.props;return null==i||null==l?(0,a.jsx)(u.Loading,{}):(0,a.jsx)(r.PageContext.Consumer,{children:i=>{const l=i.builderTheme;return(0,a.jsx)("div",{className:(0,s.classNames)("d-flex w-100",{"flex-column":n===o.Vertical}),ref:e=>{this.ref=e},css:s.css`
                border: 1px dashed ${null!=l?s.polished.rgba(l.ref.palette.neutral[900],.3):""};
                position: relative;
                overflow: hidden;
                user-select: ${this.state.isResizing?"none":"auto"};
                justify-content: ${t.collapseSide===e.First?"flex-end":"flex-start"};
                body:not(.design-mode) & {
                  border: none;
                }
              `,children:this.createContent()})}})}}const te={SidebarLayoutBuilder:s.ReactRedux.connect(function(e,t){return{appMode:e.appRuntimeInfo.appMode}})(class extends ee{constructor(t){super(t),this.bindSplitHandler=()=>{let t,i;null!=this.splitRef&&null==this.interactable&&(this.interactable=(0,l.interact)(this.splitRef).origin("parent").draggable({inertia:!1,autoScroll:!1,modifiers:[l.interact.modifiers.restrict({restriction:"parent"})],startAxis:this.props.direction===o.Horizontal?"x":"y",lockAxis:this.props.direction===o.Horizontal?"x":"y",onstart:e=>{e.stopPropagation(),t=0,i=0;const s=this.ref.getBoundingClientRect();this.domSize=this.props.direction===o.Horizontal?s.width:s.height,this.setState({isResizing:!0})},onmove:s=>{if(s.stopPropagation(),t+=s.dx,i+=s.dy,this.props.direction===o.Horizontal){const o=r.utils.isRTL()?-1:1;this.props.config.collapseSide===e.First?this.setState({deltaSize:Math.round(t*o)}):this.setState({deltaSize:-Math.round(t*o)})}else this.props.config.collapseSide===e.First?this.setState({deltaSize:Math.round(i)}):this.setState({deltaSize:-Math.round(i)})},onend:e=>{e.stopPropagation();const{config:t}=this.props,o=this.state.deltaSize;let i;i=r.utils.isPercentage(t.size)?`${(100*(parseFloat(t.size)*this.domSize/100+o)/this.domSize).toFixed(4)}%`:`${(parseFloat(t.size)+o).toFixed(0)}px`;(0,n.getAppConfigAction)().editWidgetConfig(this.props.widgetId,(0,s.Immutable)(t).set("size",i)).exec(),this.setState({deltaSize:0,isResizing:!1})}}))},this.layoutItemComponent=h}componentDidUpdate(e){const{appMode:t,config:o}=this.props;if(t===s.AppMode.Run&&!o.resizable)return this.splitRef.classList.add("no-resize"),void this.removeSplitHandler();this.splitRef.classList.remove("no-resize"),super.componentDidUpdate(e)}})}})(),d})())}}});