System.register(["jimu-core","jimu-ui","jimu-layouts/layout-runtime"],(function(e,t){var o={},a={},n={};return{setters:[function(e){o.AppMode=e.AppMode,o.BaseVersionManager=e.BaseVersionManager,o.ContainerType=e.ContainerType,o.ErrorBoundary=e.ErrorBoundary,o.Immutable=e.Immutable,o.LayoutItemType=e.LayoutItemType,o.React=e.React,o.ReactRedux=e.ReactRedux,o.ResizeObserver=e.ResizeObserver,o.WidgetManager=e.WidgetManager,o.WidgetState=e.WidgetState,o.appActions=e.appActions,o.classNames=e.classNames,o.css=e.css,o.getAppStore=e.getAppStore,o.jsx=e.jsx,o.lodash=e.lodash,o.polished=e.polished},function(e){a.Button=e.Button,a.FloatingPanel=e.FloatingPanel,a.Icon=e.Icon,a.Loading=e.Loading,a.MobilePanel=e.MobilePanel,a.NavButtonGroup=e.NavButtonGroup,a.Popper=e.Popper,a.Tooltip=e.Tooltip,a.hooks=e.hooks,a.styleUtils=e.styleUtils},function(e){n.searchUtils=e.searchUtils}],execute:function(){e((()=>{var e={55339:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.745 8l6.1 6.1a.527.527 0 11-.745.746L8 8.746l-6.1 6.1a.527.527 0 11-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 01.746-.746l6.1 6.1 6.1-6.1a.527.527 0 01.746.746L8.746 8z" fill="#000"></path></svg>'},48891:e=>{"use strict";e.exports=o},74758:e=>{"use strict";e.exports=n},30726:e=>{"use strict";e.exports=a}},t={};function i(o){var a=t[o];if(void 0!==a)return a.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,i),n.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="";var r={};return i.p=window.jimuConfig.baseUrl,(()=>{"use strict";i.r(r),i.d(r,{default:()=>B});var e=i(48891),t=i(30726);const o={sm:24,default:32,lg:48},a={width:150,height:120},n={width:300,height:300},l={x:70,y:70},s={x:30,y:30};var d=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(o[a[n]]=e[a[n]])}return o};const c=(e,t,a)=>{let n=o[e];return t&&(n+=21),n+=2*u(e,a),n},u=(e,t)=>"circle"===t?"sm"===e?4:"default"===e?2:"lg"===e?0:void 0:6,p=e.React.forwardRef(((o,a)=>{var n;const{label:i,className:r,title:l,showLabel:s,showTooltip:p=!0,labelGrowth:v=0,icon:g,marker:h,onMarkerClick:m,avatar:f,autoFlip:b,active:y,editDraggable:w}=o,S=d(o,["label","className","title","showLabel","showTooltip","labelGrowth","icon","marker","onMarkerClick","avatar","autoFlip","active","editDraggable"]),R=f||{},{shape:x,style:I}=R,O=d(R,["shape","style"]),C=null==O?void 0:O.size,[j,k]=e.React.useState(null),E=((t,o,a,n)=>e.React.useMemo((()=>{const i=c(t,o,a),r=i+n,l=u(t,a);return e.css`
      display: flex;
      align-items:center;
      flex-direction: column;
      justify-content: ${o?"space-around":"center"};
      width: ${e.polished.rem(r)} !important;
      height: ${e.polished.rem(i)};
      .tool-drag-handler {
        cursor: auto;
      }
      .avatar {
        padding: ${l}px;
        position: relative;
        text-align: center;
        .marker {
          position: absolute;
          right: 0;
          top: 0;
          padding: 0;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          .icon-btn-sizer {
            min-width: .625rem;
            min-height: .625rem;
          }
        }
      }
      .avatar-label {
        text-align: center;
        width: 100%;
        min-height: ${e.polished.rem(21)};
      }
    `}),[t,o,a,n]))(C,s,x,v),M=(0,e.jsx)(t.Button,Object.assign({icon:!0,active:y,className:"avatar-button",ref:a},O,{style:Object.assign({borderRadius:"circle"===x?"50%":void 0},I)}),(0,e.jsx)(t.Icon,{color:"string"!=typeof g&&(null===(n=g.properties)||void 0===n?void 0:n.color),icon:"string"!=typeof g?g.svg:g,autoFlip:b}));return(0,e.jsx)("div",Object.assign({},S,{className:(0,e.classNames)("avatar-card",`${r} rw-controller__avatar-card`),css:E}),(0,e.jsx)("div",{className:(0,e.classNames)({"no-drag-action":!w},"avatar tool-drag-handler"),onMouseEnter:()=>{k(!0)},onMouseLeave:()=>{k(!1)}},h&&j&&(0,e.jsx)(t.Button,{className:"marker",size:"sm",icon:!0,onClick:m},(0,e.jsx)(t.Icon,{size:8,icon:h})),p?(0,e.jsx)(t.Tooltip,{title:l||i,style:{pointerEvents:"none"}},M):M),s&&(0,e.jsx)("div",{className:(0,e.classNames)("avatar-label text-truncate",{active:y})},i))})),v=t=>{var o,a;if(t)return(null===(a=null===(o=(0,e.getAppStore)().getState().widgetsRuntimeInfo)||void 0===o?void 0:o[t])||void 0===a?void 0:a.isClassLoaded)?Promise.resolve(e.WidgetManager.getInstance().getWidgetClass(t)):e.WidgetManager.getInstance().loadWidgetClass(t)};var g=i(74758),h=i(55339),m=i.n(h);const f=o=>{var a,n;const{markerEnabled:i,onMarkerClick:r,widgetid:l,showLabel:s,showTooltip:d,labelGrowth:c,avatar:u,onClick:v,active:g,editDraggable:h,className:f}=o,b=e.ReactRedux.useSelector((e=>{var t;return null===(t=e.appConfig.widgets)||void 0===t?void 0:t[l]}));return b?e.React.createElement(p,{"data-widgetid":l,className:`rw-controller__widget-avatar-card ${f}`,showLabel:s,showTooltip:d,labelGrowth:c,avatar:u,label:b.label,icon:b.icon,autoFlip:null===(n=null===(a=null==b?void 0:b.manifest)||void 0===a?void 0:a.properties)||void 0===n?void 0:n.flipIcon,marker:i?m():"",active:g,editDraggable:h,onMarkerClick:r,onClick:v}):e.React.createElement(t.Loading,null)};const b=e.React.forwardRef(((o,a)=>{var n,i;const{scrollRef:r,className:l,lists:s=[],createItem:d,vertical:c,itemLength:u,space:p,onChange:v,autoHideArrow:g,placeholder:h,minLength:m=u,autoScrollEnd:f}=o,b=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(o[a[n]]=e[a[n]])}return o}(o,["scrollRef","className","lists","createItem","vertical","itemLength","space","onChange","autoHideArrow","placeholder","minLength","autoScrollEnd"]),y=t.hooks.useTranslate(),w=c?"clientHeight":"clientWidth",S=null!==(n=null==s?void 0:s.length)&&void 0!==n?n:0,R=null!==(i=null==h?void 0:h.length)&&void 0!==i?i:u,x=null==h?void 0:h.node,I=null==h?void 0:h.position,O=((t,o,a)=>e.css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .root {
      flex-direction: ${t?"column":"row"};
      width: 100%;
      height: 100%;
      min-width: ${e.polished.rem(a)};
      display: flex;
      justify-content: center;
      flex-wrap: nowrap;
      align-items: center;
      .scroll-list-item {
        &:not(:first-of-type) {
          margin-top: ${t?e.polished.rem(o):"unset"};
          margin-left: ${t?"unset":e.polished.rem(o)};
        }
      }
    }
`)(c,p,m),C=e.React.useRef(null),j=t.hooks.useForkRef(C,a),[k,E]=e.React.useState(0),[M,L]=e.React.useState(0),[A,N]=e.React.useState(0),[$,z]=e.React.useState(0),[T,W]=e.React.useState(!0),[P,B]=e.React.useState(!1),[U,F]=e.React.useState(!0),V=t.hooks.useRefValue($),G=t.hooks.useRefValue(A),D=t.hooks.useRefValue(M);e.React.useImperativeHandle(r,(()=>({hideArrow:U,disablePrevious:T,disableNext:P,scroll:K})));const H=e.React.useRef((()=>{}));e.React.useEffect((()=>(H.current=e.lodash.debounce(E,500),()=>{var e;null===(e=H.current)||void 0===e||e.cancel()})),[]);const _=t.hooks.useEventCallback((()=>{var e;let t=C.current[w]||0;t+=p,t-=x?R:0,t=Math.max(t,m),null===(e=H.current)||void 0===e||e.call(H,t)}));e.React.useEffect((()=>{const t=C.current,o=new e.ResizeObserver(_);return o.observe(t),()=>{o.disconnect()}}),[C,_]),e.React.useEffect((()=>{const e=Math.floor(k/u);L(e)}),[k,u]),e.React.useEffect((()=>{let e=G.current,t=V.current;t-e>M?t=G.current+M:t-e<M&&(e=0,t=e+M),N(e),z(t)}),[M,G,V]);const Y=e.React.useRef([]),q=t.hooks.useEventCallback((()=>{if(f&&s.length>0&&Y.current.length>0&&s[s.length-1]!==Y.current[Y.current.length-1]){let e=0,t=0;t=S,e=t-D.current,e=Math.max(0,e),N(e),z(t)}}));e.React.useEffect((()=>{q(),Y.current=s}),[s,q]);const K=t.hooks.useEventCallback(((e,t=!0)=>{const o=t?1:M;let a=0,n=0;e?(a=A-o,a<0?(a=0,n=a+M):n=$-o):(n=$+o,n>S?(n=S,a=n-M):a=A+o),N(a),z(n)}));return e.React.useEffect((()=>{const e=$-A>=S,t=$===S;W(0===A),B(t),F(e)}),[A,$,S]),(0,e.jsx)(t.NavButtonGroup,Object.assign({},b,{css:O,type:"tertiary",vertical:c,onChange:e=>{null==v||v(e),K(e,!0)},disablePrevious:T,disableNext:P,previousAriaLabel:y("previous"),nextAriaLabel:y("next"),previousStyle:{visibility:U?"hidden":"visible"},nextStyle:{visibility:U?"hidden":"visible"},className:(0,e.classNames)("scroll-list",l)}),(0,e.jsx)("div",{className:"root scroll-list-root",ref:j},"start"===I&&x,s.slice(A,$).map((e=>d(e,"scroll-list-item"))),"end"===I&&x))}));function y(o){const{widgetId:a,canCrossLayoutBoundary:n,className:i}=o,r=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(o[a[n]]=e[a[n]])}return o}(o,["widgetId","canCrossLayoutBoundary","className"]),l=e.ReactRedux.useSelector((e=>{var t,o;return null===(o=null===(t=e.widgetsRuntimeInfo)||void 0===t?void 0:t[a])||void 0===o?void 0:o.isClassLoaded}));e.React.useEffect((()=>{v(a)}),[a]);const s=e.React.useMemo((()=>{if(l)return e.WidgetManager.getInstance().getWidgetClass(a)}),[a,l]),d=e.React.useCallback((()=>{var t,o;window.jimuConfig.isBuilder||(null===(o=null===(t=(0,e.getAppStore)().getState().widgetsRuntimeInfo)||void 0===t?void 0:t[a])||void 0===o?void 0:o.state)===e.WidgetState.Active||(0,e.getAppStore)().dispatch(e.appActions.activateWidget(a))}),[a]),c=(0,e.classNames)("widget-renderer w-100 h-100",i),u=(t=>e.React.useMemo((()=>e.css`
      overflow: ${t?"visible":"hidden"};
      position: relative;
      .widget-content {
        position: relative;
        height: 100%;
        width: 100%;
        z-index: 0;
      }
  `),[t]))(n);return(0,e.jsx)("div",Object.assign({css:u,className:c,onMouseDownCapture:d,"data-widgetid":a},r),(0,e.jsx)("div",{className:"widget-content p-1"},s&&(0,e.jsx)(e.ErrorBoundary,null,(0,e.jsx)(s,{widgetId:a})),!s&&(0,e.jsx)(t.Loading,null)))}const w=(0,e.Immutable)({}),S=o=>{var a,n,i;const{containerMapId:r,onClose:l,widgets:s=w}=o,d=null!==(a=Object.keys(s).find((t=>s[t].state===e.WidgetState.Opened)))&&void 0!==a?a:"",c=null===(i=null===(n=(0,e.getAppStore)().getState().appConfig.widgets)||void 0===n?void 0:n[d])||void 0===i?void 0:i.label;return e.React.createElement(t.MobilePanel,{className:(0,e.classNames)({"d-none":!d}),mapWidgetId:r,title:c,open:!0,toggle:e=>{null==e||e.stopPropagation(),null==e||e.nativeEvent.stopImmediatePropagation(),null==l||l(d)}},Object.entries(s).map((([t,o])=>{const a=o.isClassLoaded;if(void 0===o.state||!a)return null;const n=o.state===e.WidgetState.Opened;return e.React.createElement(y,{widgetId:t,key:t,className:(0,e.classNames)({"d-none":!n})})})))},R=e=>document.querySelector(`.widget-controller .avatar-card[data-widgetid='${e}']`),x=(0,e.Immutable)({}),I=o=>{var i;const{widgets:r=x,root:l,placement:s,sizes:d,onClose:c}=o,u=e.ReactRedux.useSelector((e=>e.appConfig.widgets)),p=null!==(i=Object.keys(r).find((t=>r[t].state===e.WidgetState.Opened)))&&void 0!==i?i:"",[v,g]=e.React.useState((()=>{var e;return null!==(e=R(p))&&void 0!==e?e:l}));e.React.useEffect((()=>{var e;g(null!==(e=R(p))&&void 0!==e?e:l)}),[p]);const[h,m]=e.React.useState(d),f=(e,t)=>{t.stopPropagation(),null==c||c(e);const o=null==v?void 0:v.querySelector("button");null==o||o.focus()};return e.React.createElement(e.React.Fragment,null,Object.entries(r).map((([o,i])=>{var r,l;const d=i.isClassLoaded;if(void 0===i.state||!d)return null;const c=i.state===e.WidgetState.Opened,p=null!==(r=h[o])&&void 0!==r?r:n,g=null===(l=null==u?void 0:u[o])||void 0===l?void 0:l.label;return e.React.createElement(t.Popper,{key:o,style:{maxWidth:"100vw"},className:(0,e.classNames)({"d-none":!c},"single-widget-launcher"),headerTitle:g,minSize:a,dragBounds:"body",defaultSize:p,onResize:e=>{return t=o,a=e,void m((e=>e.set(t,a)));var t,a},onHeaderClose:e=>f(o,e),floating:!0,open:!0,autoFocus:c,reference:v,toggle:e=>((e,t)=>{"Escape"===(null==t?void 0:t.key)&&f(e,t)})(o,e),placement:s},e.React.createElement(y,{widgetId:o}))})))};var O;!function(e){e.Stack="STACK",e.SideBySide="SIDEBYSIDE"}(O||(O={}));const C=()=>document.body.getBoundingClientRect(),j=(0,e.Immutable)({}),k=o=>{const{mode:a,start:i,spaceX:r,spaceY:l,sizes:s,widgets:d=j,onClose:c,forbidden:u}=o,p=e.ReactRedux.useSelector((e=>e.appConfig.widgets)),[v,g]=e.React.useState(s),h=e.React.useMemo((()=>((t,o)=>{let a=(0,e.Immutable)({});return Object.keys(t).forEach((e=>{a=a.set(e,o[e]||n)})),a})(d,v)),[v,d]),m=e=>{const t=R(e),o=null==t?void 0:t.querySelector("button");null==o||o.focus()},f=((o,a,n,i,r,l)=>{const[s,d]=e.React.useState((()=>C())),[c,u]=e.React.useState([n]),p=e.React.useRef(0);e.React.useEffect((()=>{const e=()=>{const e=C();d(e)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]);const v=(e,t)=>e.right>=t.right||e.left<=t.left,g=(e,t)=>e.bottom>=t.bottom||e.top<=t.top,h=t.hooks.useEventCallback((e=>{if(p.current++,p.current>7)return console.warn(`Number of cycles: ${p.current}.You may have opened too many panels, and now there is not enough space for them to be placed without overstepping and blocking`),e;const t=((e,t)=>!(!e||!t)&&(v(e,t)||g(e,t)))(e,s);if(!t)return e;const{width:a,height:i}=e;let{left:l,top:d,right:c,bottom:u}=e;if(t){const e=v({left:l,top:d,right:c,bottom:u,width:a,height:i},s),t=g({left:l,top:d,right:c,bottom:u,width:a,height:i},s);e&&(l=o===O.SideBySide?n.x:s.right-a),t||o!==O.SideBySide||(d+=r),c=l+a,u=d+i}return h({left:l,top:d,right:c,bottom:u,width:a,height:i})}));return e.React.useEffect((()=>{const e=[];let t={width:0,height:0};Object.keys(a).forEach(((l,s)=>{const d=a[l],c=0!==s?e[s-1]:n;let{x:u,y:v}=c;if(o===O.SideBySide){const{width:e}=t;u+=e,u+=0!==s?i:0}else o===O.Stack&&(u+=0!==s?i:0,v+=0!==s?r:0);const g={left:u,top:v,right:u+d.width,bottom:v+d.height,width:d.width,height:d.height},{left:m,top:f}=h(g);p.current>7?(u=c.x,v=c.y):(u=m,v=f),p.current=0,e.push({x:u,y:v}),t=d})),u(e)}),[o,n,i,r,s.width,s.height,h,a]),c})(a,h,i,r,l);return e.React.createElement(e.React.Fragment,null,Object.entries(d).map((([o,a],n)=>{var i;const r=a.isClassLoaded;if(void 0===a.state||!r)return null;const l=a.state===e.WidgetState.Opened,s=f[n];if(!s)return null;const d=h[o],u=null===(i=null==p?void 0:p[o])||void 0===i?void 0:i.label;return e.React.createElement(t.FloatingPanel,{key:o,style:{maxWidth:"100vw"},headerTitle:u,defaultPosition:s,defaultSize:d,className:(0,e.classNames)({"d-none":!l},"multiple-widget-launcher"),showHeaderClose:!0,autoFocus:l,dragBounds:"body",onResize:e=>{return t=o,a=e,void g(v.set(t,a));var t,a},onLeave:()=>m(o),onHeaderClose:e=>((e,t)=>{null==t||t.stopPropagation(),null==c||c(e),m(e)})(o,e)},e.React.createElement(y,{widgetId:o}))})))},E=t=>{const o=(0,e.getAppStore)().getState().appConfig.sections,a=Object.values(null!=o?o:{}).find((e=>{var o;return null===(o=e.views)||void 0===o?void 0:o.includes(t)}));return null==a?void 0:a.id},M=o=>{var a,i,r,d,u,p,h,m,y,w,x,O,C,j,M;const{id:L,config:A,version:N,forbidden:$}=o,z=null===(a=A.behavior)||void 0===a?void 0:a.onlyOpenOne,T=null===(i=A.behavior)||void 0===i?void 0:i.openStarts,W=null===(r=A.behavior)||void 0===r?void 0:r.size,P=null===(d=A.behavior)||void 0===d?void 0:d.vertical,B=null===(u=A.behavior)||void 0===u?void 0:u.displayType,U=null===(p=null==A?void 0:A.appearance)||void 0===p?void 0:p.card,F=((e,t)=>{const o=null==e?void 0:e.showLabel,a=null==e?void 0:e.labelGrowth,n=null==e?void 0:e.avatar.size,i=null==e?void 0:e.avatar.shape;return c(n,o,i)+t+a})(null===(h=null==A?void 0:A.appearance)||void 0===h?void 0:h.card,null===(m=null==A?void 0:A.appearance)||void 0===m?void 0:m.space),V=null===(x=null===(w=null===(y=(0,e.getAppStore)())||void 0===y?void 0:y.getState())||void 0===w?void 0:w.appContext)||void 0===x?void 0:x.isRTL,G=null===(j=null===(C=null===(O=(0,e.getAppStore)())||void 0===O?void 0:O.getState())||void 0===C?void 0:C.appContext)||void 0===j?void 0:j.isInBuilder,D=V?Object.assign(Object.assign({},l),{x:document.body.clientWidth-n.width-l.x}):l,H=V?Object.assign(Object.assign({},s),{x:-s.x}):s,_=P?"right-start":"bottom",Y=(t=>{const o=e.ReactRedux.useSelector((e=>{var t;return null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.sectionNavInfos}));return((t,o)=>{const a=(t=>{const o=(0,e.getAppStore)().getState().appConfig.sections,a=t?Object.values(t).map((e=>e.currentViewId)):[],n=a.map(E),i=Object.values(null!=o?o:{}).map((e=>{var t;if(!n.includes(e.id))return null===(t=e.views)||void 0===t?void 0:t[0]})).filter((e=>!!e)),r=a;return i.forEach((e=>{a.includes(e)||r.push(e)})),r})(t),n=(0,e.getAppStore)().getState().browserSizeMode,i=(0,e.getAppStore)().getState().appConfig,r=g.searchUtils.getContentContainerInfo(i,o,e.LayoutItemType.Widget,n);let l=!0;if(!r)return l;if(r.type===e.ContainerType.View)if(a.includes(r.id)){const t=r.id,o=E(t),s=g.searchUtils.getContentContainerInfo(i,o,e.LayoutItemType.Section,n);s&&s.type===e.ContainerType.View&&(a.includes(s.id)||(l=!1))}else l=!1;return l})(o,t)})(L),q=(t=>e.ReactRedux.useSelector((o=>{var a;const n=o.appConfig,i=o.browserSizeMode,r=g.searchUtils.getParentWidgetIdOfContent(n,t,e.LayoutItemType.Widget,i),l=n.widgets[r];return"arcgis-map"===(null===(a=null==l?void 0:l.manifest)||void 0===a?void 0:a.name)?l.id:""})))(L),K=t.hooks.useCheckSmallBrowserSzieMode(),X=e.ReactRedux.useSelector((e=>e.appRuntimeInfo.currentPageId)),J=e.React.useRef(null),Q=((t,o)=>{const a=e.ReactRedux.useSelector((e=>e.widgetsRuntimeInfo)),n=((t,o)=>e.ReactRedux.useSelector((e=>{var a,n,i,r;const l=null===(i=null===(n=null===(a=e.appConfig.widgets)||void 0===a?void 0:a[t])||void 0===n?void 0:n.layouts)||void 0===i?void 0:i[o],s=e.browserSizeMode,d=e.appConfig.mainSizeMode,c=g.searchUtils.findLayoutId(l,s,d);return null===(r=e.appConfig.layouts)||void 0===r?void 0:r[c]})))(t,"controller"),i=(e=>{const t=(e=>{var t,o,a;let n=(null!==(a=null===(o=null===(t=null==e?void 0:e.order)||void 0===t?void 0:t.asMutable)||void 0===o?void 0:o.call(t))&&void 0!==a?a:[]).map((t=>{var o;return null===(o=e.content)||void 0===o?void 0:o[t]}));return n=n.filter((e=>e&&e.id&&e.widgetId&&!e.isPending)),n.map((e=>e.id))})(e);return t.map((t=>{var o,a;return null===(a=null===(o=e.content)||void 0===o?void 0:o[t])||void 0===a?void 0:a.widgetId}))})(n);return e.React.useMemo((()=>{const t={};return i.forEach((o=>{var n;const i=null!==(n=null==a?void 0:a[o])&&void 0!==n?n:{isClassLoaded:!1,state:e.WidgetState.Closed};t[o]=(0,e.Immutable)(i)})),(0,e.Immutable)(t)}),[i,a])})(L),Z=Object.keys(Q),ee=Z.filter((t=>Q[t].state===e.WidgetState.Opened)),te=e.React.useCallback((t=>{var o;const a=null===(o=t.currentTarget.dataset)||void 0===o?void 0:o.widgetid;a&&(K||z?((0,e.getAppStore)().dispatch(e.appActions.closeWidgets(ee)),ee.includes(a)||v(a).then((()=>{(0,e.getAppStore)().dispatch(e.appActions.openWidget(a))}))):ee.includes(a)?(0,e.getAppStore)().dispatch(e.appActions.closeWidget(a)):v(a).then((()=>{(0,e.getAppStore)().dispatch(e.appActions.openWidget(a))})))}),[K,z,ee]),oe=t=>{if(!t)return;(0,e.getAppStore)().dispatch(e.appActions.closeWidget(t));const o=R(t);null==o||o.focus()};t.hooks.useUpdateEffect((()=>{(0,e.getAppStore)().dispatch(e.appActions.closeWidgets(ee))}),[N,X]),t.hooks.useUpdateEffect((()=>{Y||(0,e.getAppStore)().dispatch(e.appActions.closeWidgets(ee))}),[Y]),e.React.useEffect((()=>{!G&&(null==T?void 0:T.length)&&Y&&setTimeout((()=>{const t=T.map((e=>v(e)));Promise.all(t).then((()=>{(0,e.getAppStore)().dispatch(e.appActions.openWidgets(T))}))}),1e3)}),[]);const ae=e.React.useCallback(((t,o)=>{const a=ee.includes(t);return e.React.createElement(f,Object.assign({},U,{key:t,className:`${o} layout-item`,widgetid:t,markerEnabled:!1,active:a,onClick:te}))}),[U,te,ee]);return e.React.createElement(e.React.Fragment,null,K&&e.React.createElement(S,{containerMapId:q,widgets:Q,onClose:oe}),!K&&z&&e.React.createElement(I,{sizes:W,root:J.current,placement:_,widgets:Q,onClose:oe}),!K&&!z&&e.React.createElement(k,{sizes:W,mode:B,start:D,spaceX:H.x,spaceY:H.y,forbidden:$,widgets:Q,onClose:oe}),e.React.createElement(b,{ref:J,className:"runtime--scroll-list",vertical:P,itemLength:F,space:null===(M=A.appearance)||void 0===M?void 0:M.space,autoHideArrow:!0,lists:Z,createItem:ae}))},L={behavior:{onlyOpenOne:!0,openStarts:[],displayType:"STACK",vertical:!1,size:{}},appearance:{space:0,advanced:!1,card:{showLabel:!1,labelGrowth:10,avatar:{type:"primary",size:"default",shape:"circle"}}}};class A extends e.BaseVersionManager{constructor(){super(...arguments),this.versions=[{version:"1.0.0",description:"Version manager for release 1.0.0",upgrader:e=>{if(!e)return L;if(e.behavior&&e.appearance)return e;{let o=e;return e.behavior||(o=o.setIn(["behavior","openStarts"],[]),o=o.setIn(["behavior","onlyOpenOne"],e.onlyOpenOne),o=o.setIn(["behavior","displayType"],e.displayType),o=o.setIn(["behavior","vertical"],e.vertical),o=o.setIn(["behavior","size"],e.size),o=o.without(["onlyOpenOne","displayType","size"])),e.appearance||(o=o.setIn(["appearance","advanced"],!1),e.vertical?o=o.setIn(["appearance","space"],e.space):(o=o.setIn(["appearance","space"],0),o=o.setIn(["appearance","card","labelGrowth"],e.space)),o=o.setIn(["appearance","card","showLabel"],e.showLabel),o=o.setIn(["appearance","card","avatar","size"],"SMALL"===(t=e.iconSize)?"sm":"MEDIUM"===t?"default":"LARGE"===t?"lg":t),o=o.setIn(["appearance","card","avatar","shape"],e.iconStyle),o=o.setIn(["appearance","card","avatar","type"],"primary"),o=o.without(["space","showLabel","iconSize","iconStyle","vertical"])),o}var t}},{version:"1.1.0",description:"Version manager for release 1.1.0",upgrader:e=>{var t,o;if(!e)return L;let a=null===(t=null==e?void 0:e.appearance)||void 0===t?void 0:t.card;const n=null==a?void 0:a.variants,i=null===(o=null==a?void 0:a.avatar)||void 0===o?void 0:o.type;let r=e;if(n){const e=((e,t="primary")=>null==e?void 0:e[t])(n,i);a=null==a?void 0:a.set("variant",e).without("variants"),r=r.setIn(["appearance","card"],a)}return r}},{version:"1.6.0",description:"Version manager for release 1.6.0",upgrader:e=>{var t;if(!e)return L;let o=null===(t=null==e?void 0:e.appearance)||void 0===t?void 0:t.card,a=e;return o&&(o=o.set("showTooltip",!0),a=a.setIn(["appearance","card"],o)),a}}]}}const N=new A,{useSelector:$}=e.ReactRedux,{useState:z,useMemo:T,useRef:W}=e.React,P=o=>{var a,n,i,r;const{builderSupportModules:l,id:s,config:d,layoutId:c,layoutItemId:u}=o,p=null===(a=d.behavior)||void 0===a?void 0:a.onlyOpenOne,v=null===(n=d.behavior)||void 0===n?void 0:n.displayType,g=null===(i=null==d?void 0:d.behavior)||void 0===i?void 0:i.vertical,h=null==d?void 0:d.appearance.advanced,m=null===(r=null==d?void 0:d.appearance)||void 0===r?void 0:r.card.variant,f=$((e=>e.appContext.isInBuilder)),b=$((e=>e.appRuntimeInfo.appMode)),y=$((e=>e.browserSizeMode)),w=$((e=>{var t,o,a,n;let i=null;return f&&(i=null===(n=null===(a=null===(o=null===(t=e.appConfig.layouts)||void 0===t?void 0:t[c])||void 0===o?void 0:o.content)||void 0===a?void 0:a[u])||void 0===n?void 0:n.bbox),i})),S=f&&b!==e.AppMode.Run,R=S&&l.widgetModules.Builder,[x,I]=z(0),[O,C]=z(null),j=W(null);t.hooks.useUpdateEffect((()=>{const e=j.current;if(!e)return;const t=e.getBoundingClientRect();C(t)}),[w]),t.hooks.useUpdateEffect((()=>{I((e=>e+1))}),[p,v,b,y,w]);const k=(t=>T((()=>e.css`
      overflow: hidden;
      white-space: nowrap;
      .controller-container {
        width: 100%;
        height: 100%;
        min-width: ${t?e.polished.rem(50):e.polished.rem(150)};
        min-height: ${t?e.polished.rem(150):e.polished.rem(50)};
      }
      ${t&&e.css`
      .roll-list {
        .content {
          width: 100%;
        }
      }
      .layout-item-list {
        &.icon-list {
          width: 100%;
        }
      }
        .layout-item {
          width: 100%;
        }
        .avatar-card {
            width: 100% !important;
          }
      `};
    `),[t]))(g),E=((o,a)=>{const n=null==o?void 0:o.default,i=null==o?void 0:o.active,r=null==o?void 0:o.hover;return T((()=>a?e.css`
      .avatar-card:not(.add-widget-btn) {
        ${n&&e.css`
          > .avatar {
            > .avatar-button {
              background-color: ${n.bg};
              border-color: ${n.bg};
            }
          }
          > .avatar-label {
            color: ${n.color};
            font-style: ${(null==n?void 0:n.italic)?"italic":"normal"};
            font-weight: ${(null==n?void 0:n.bold)?"bold":"normal"};
            text-decoration: ${t.styleUtils.toCSSTextUnderLine({underline:n.underline,strike:n.strike})};
          }
        `}
        ${r&&e.css`
          &:hover {
            > .avatar {
              > .avatar-button {
                background-color: ${r.bg};
                border-color: ${r.bg};
              }
            }
            > .avatar-label {
              color: ${r.color};
              font-style: ${(null==r?void 0:r.italic)?"italic":"normal"};
              font-weight: ${(null==r?void 0:r.bold)?"bold":"normal"};
              text-decoration: ${t.styleUtils.toCSSTextUnderLine({underline:r.underline,strike:r.strike})};
            }
          }
        `}
        ${i&&e.css`
            > .avatar {
              > .avatar-button {
                &:not(:disabled):not(.disabled):active,
                &:not(:disabled):not(.disabled).active,
                &[aria-expanded="true"] {
                  background-color: ${i.bg};
                  border-color: ${i.bg};
                }
              }
            }
            > .avatar-label {
              &:not(:disabled):not(.disabled):active,
              &:not(:disabled):not(.disabled).active {
                color: ${i.color};
                font-style: ${(null==i?void 0:i.italic)?"italic":"normal"};
                font-weight: ${(null==i?void 0:i.bold)?"bold":"normal"};
                text-decoration: ${t.styleUtils.toCSSTextUnderLine({underline:i.underline,strike:i.strike})};
              }
            }
        `}
      }
    `:e.css``),[a,n,i,r])})(m,h);return(0,e.jsx)("div",{className:"widget-controller jimu-widget shadow rw-controller",css:[k,E],ref:j},(0,e.jsx)("div",{className:"controller-container"},!S&&(0,e.jsx)(M,{id:s,version:x,config:d,forbidden:O}),S&&R&&(0,e.jsx)(R,{id:s,version:x,config:d})))};P.versionManager=N;const B=P})(),r})())}}}));