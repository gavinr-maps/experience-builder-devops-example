System.register(["jimu-core","jimu-ui","jimu-layouts/layout-runtime"],(function(e,t){var a={},o={},n={};return{setters:[function(e){a.AppMode=e.AppMode,a.BaseVersionManager=e.BaseVersionManager,a.ContainerType=e.ContainerType,a.ErrorBoundary=e.ErrorBoundary,a.Immutable=e.Immutable,a.LayoutItemType=e.LayoutItemType,a.React=e.React,a.ReactRedux=e.ReactRedux,a.ResizeObserver=e.ResizeObserver,a.WidgetManager=e.WidgetManager,a.WidgetState=e.WidgetState,a.appActions=e.appActions,a.classNames=e.classNames,a.css=e.css,a.getAppStore=e.getAppStore,a.jsx=e.jsx,a.lodash=e.lodash,a.polished=e.polished},function(e){o.Button=e.Button,o.FloatingPanel=e.FloatingPanel,o.Icon=e.Icon,o.Loading=e.Loading,o.MobilePanel=e.MobilePanel,o.NavButtonGroup=e.NavButtonGroup,o.Popper=e.Popper,o.Tooltip=e.Tooltip,o.hooks=e.hooks,o.styleUtils=e.styleUtils},function(e){n.searchUtils=e.searchUtils}],execute:function(){e((()=>{var e={55339:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.745 8l6.1 6.1a.527.527 0 11-.745.746L8 8.746l-6.1 6.1a.527.527 0 11-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 01.746-.746l6.1 6.1 6.1-6.1a.527.527 0 01.746.746L8.746 8z" fill="#000"></path></svg>'},1810:e=>{"use strict";e.exports=a},29169:e=>{"use strict";e.exports=n},21835:e=>{"use strict";e.exports=o}},t={};function i(a){var o=t[a];if(void 0!==o)return o.exports;var n=t[a]={exports:{}};return e[a](n,n.exports,i),n.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var a in t)i.o(t,a)&&!i.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="";var r={};return i.p=window.jimuConfig.baseUrl,(()=>{"use strict";i.r(r),i.d(r,{default:()=>W});var e=i(1810),t=i(21835);const a={sm:24,default:32,lg:48},o={width:150,height:120},n={width:300,height:300},l={x:70,y:70},s={x:30,y:30};var c=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(a[o[n]]=e[o[n]])}return a};const d=(e,t,o)=>{let n=a[e];return t&&(n+=21),n+=2*u(e,o),n},u=(e,t)=>"circle"===t?"sm"===e?4:"default"===e?2:"lg"===e?0:void 0:6,p=e.React.forwardRef(((a,o)=>{var n;const{label:i,className:r,title:l,showLabel:s,showTooltip:p=!0,labelGrowth:v=0,icon:g,marker:h,onMarkerClick:m,avatar:f,autoFlip:b,active:w,editDraggable:y}=a,R=c(a,["label","className","title","showLabel","showTooltip","labelGrowth","icon","marker","onMarkerClick","avatar","autoFlip","active","editDraggable"]),S=f||{},{shape:x,style:I}=S,O=c(S,["shape","style"]),C=null==O?void 0:O.size,[j,k]=e.React.useState(null),E=((t,a,o,n)=>e.React.useMemo((()=>{const i=d(t,a,o),r=i+n,l=u(t,o);return e.css`
      display: flex;
      align-items:center;
      flex-direction: column;
      justify-content: ${a?"space-around":"center"};
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
    `}),[t,a,o,n]))(C,s,x,v),M=(0,e.jsx)(t.Button,Object.assign({icon:!0,active:w,className:"avatar-button",ref:o},O,{style:Object.assign({borderRadius:"circle"===x?"50%":void 0},I)}),(0,e.jsx)(t.Icon,{color:"string"!=typeof g&&(null===(n=g.properties)||void 0===n?void 0:n.color),icon:"string"!=typeof g?g.svg:g,autoFlip:b}));return(0,e.jsx)("div",Object.assign({},R,{className:(0,e.classNames)("avatar-card",`${r} rw-controller__avatar-card`),css:E}),(0,e.jsx)("div",{className:(0,e.classNames)({"no-drag-action":!y},"avatar tool-drag-handler"),onMouseEnter:()=>{k(!0)},onMouseLeave:()=>{k(!1)}},h&&j&&(0,e.jsx)(t.Button,{className:"marker",size:"sm",icon:!0,onClick:m},(0,e.jsx)(t.Icon,{size:8,icon:h})),p?(0,e.jsx)(t.Tooltip,{title:l||i,style:{pointerEvents:"none"}},M):M),s&&(0,e.jsx)("div",{className:(0,e.classNames)("avatar-label text-capitalize text-truncate",{active:w})},i))})),v=t=>{var a,o;if(t)return(null===(o=null===(a=(0,e.getAppStore)().getState().widgetsRuntimeInfo)||void 0===a?void 0:a[t])||void 0===o?void 0:o.isClassLoaded)?Promise.resolve(e.WidgetManager.getInstance().getWidgetClass(t)):e.WidgetManager.getInstance().loadWidgetClass(t)};var g=i(29169),h=i(55339),m=i.n(h);const f=a=>{var o,n;const{markerEnabled:i,onMarkerClick:r,widgetid:l,showLabel:s,showTooltip:c,labelGrowth:d,avatar:u,onClick:v,active:g,editDraggable:h,className:f}=a,b=e.ReactRedux.useSelector((e=>{var t;return null===(t=e.appConfig.widgets)||void 0===t?void 0:t[l]}));return b?e.React.createElement(p,{"data-widgetid":l,className:`rw-controller__widget-avatar-card ${f}`,showLabel:s,showTooltip:c,labelGrowth:d,avatar:u,label:b.label,icon:b.icon,autoFlip:null===(n=null===(o=null==b?void 0:b.manifest)||void 0===o?void 0:o.properties)||void 0===n?void 0:n.flipIcon,marker:i?m():"",active:g,editDraggable:h,onMarkerClick:r,onClick:v}):e.React.createElement(t.Loading,null)};const b=e.React.forwardRef(((a,o)=>{var n,i;const{scrollRef:r,className:l,lists:s=[],createItem:c,vertical:d,itemLength:u,space:p,onChange:v,autoHideArrow:g,placeholder:h,minLength:m=u,autoScrollEnd:f}=a,b=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(a[o[n]]=e[o[n]])}return a}(a,["scrollRef","className","lists","createItem","vertical","itemLength","space","onChange","autoHideArrow","placeholder","minLength","autoScrollEnd"]),w=t.hooks.useTranslate(),y=d?"clientHeight":"clientWidth",R=null!==(n=null==s?void 0:s.length)&&void 0!==n?n:0,S=null!==(i=null==h?void 0:h.length)&&void 0!==i?i:u,x=null==h?void 0:h.node,I=null==h?void 0:h.position,O=((t,a,o)=>e.css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .root {
      flex-direction: ${t?"column":"row"};
      width: 100%;
      height: 100%;
      min-width: ${e.polished.rem(o)};
      display: flex;
      justify-content: center;
      flex-wrap: nowrap;
      align-items: center;
      .scroll-list-item {
        &:not(:first-of-type) {
          margin-top: ${t?e.polished.rem(a):"unset"};
          margin-left: ${t?"unset":e.polished.rem(a)};
        }
      }
    }
`)(d,p,m),C=e.React.useRef(null),j=t.hooks.useForkRef(C,o),[k,E]=e.React.useState(0),[M,L]=e.React.useState(0),[N,A]=e.React.useState(0),[$,z]=e.React.useState(0),[P,T]=e.React.useState(!0),[W,B]=e.React.useState(!1),[U,_]=e.React.useState(!0),F=t.hooks.useRefValue($),G=t.hooks.useRefValue(N),V=t.hooks.useRefValue(M);e.React.useImperativeHandle(r,(()=>({hideArrow:U,disablePrevious:P,disableNext:W,scroll:X})));const D=e.React.useRef((()=>{}));e.React.useEffect((()=>(D.current=e.lodash.debounce(E,500),()=>{var e;null===(e=D.current)||void 0===e||e.cancel()})),[]);const H=t.hooks.useEventCallback((()=>{var e;let t=C.current[y]||0;t+=p,t-=x?S:0,t=Math.max(t,m),null===(e=D.current)||void 0===e||e.call(D,t)}));e.React.useEffect((()=>{const t=C.current,a=new e.ResizeObserver(H);return a.observe(t),()=>{a.disconnect()}}),[C,H]),e.React.useEffect((()=>{const e=Math.floor(k/u);L(e)}),[k,u]),e.React.useEffect((()=>{let e=G.current,t=F.current;t-e>M?t=G.current+M:t-e<M&&(e=0,t=e+M),A(e),z(t)}),[M,G,F]);const Y=e.React.useRef([]),K=t.hooks.useEventCallback((()=>{if(f&&s.length>0&&Y.current.length>0&&s[s.length-1]!==Y.current[Y.current.length-1]){let e=0,t=0;t=R,e=t-V.current,e=Math.max(0,e),A(e),z(t)}}));e.React.useEffect((()=>{K(),Y.current=s}),[s,K]);const X=t.hooks.useEventCallback(((e,t=!0)=>{const a=t?1:M;let o=0,n=0;e?(o=N-a,o<0?(o=0,n=o+M):n=$-a):(n=$+a,n>R?(n=R,o=n-M):o=N+a),A(o),z(n)}));return e.React.useEffect((()=>{const e=$-N>=R,t=$===R;T(0===N),B(t),_(e)}),[N,$,R]),(0,e.jsx)(t.NavButtonGroup,Object.assign({},b,{css:O,type:"tertiary",vertical:d,onChange:e=>{null==v||v(e),X(e,!0)},disablePrevious:P,disableNext:W,previousAriaLabel:w("previous"),nextAriaLabel:w("next"),previousStyle:{visibility:U?"hidden":"visible"},nextStyle:{visibility:U?"hidden":"visible"},className:(0,e.classNames)("scroll-list",l)}),(0,e.jsx)("div",{className:"root scroll-list-root",ref:j},"start"===I&&x,s.slice(N,$).map((e=>c(e,"scroll-list-item"))),"end"===I&&x))}));function w(a){const{widgetId:o,canCrossLayoutBoundary:n,className:i}=a,r=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(a[o[n]]=e[o[n]])}return a}(a,["widgetId","canCrossLayoutBoundary","className"]),l=e.ReactRedux.useSelector((e=>{var t,a;return null===(a=null===(t=e.widgetsRuntimeInfo)||void 0===t?void 0:t[o])||void 0===a?void 0:a.isClassLoaded}));e.React.useEffect((()=>{v(o)}),[o]);const s=e.React.useMemo((()=>{if(l)return e.WidgetManager.getInstance().getWidgetClass(o)}),[o,l]),c=e.React.useCallback((()=>{var t,a;window.jimuConfig.isBuilder||(null===(a=null===(t=(0,e.getAppStore)().getState().widgetsRuntimeInfo)||void 0===t?void 0:t[o])||void 0===a?void 0:a.state)===e.WidgetState.Active||(0,e.getAppStore)().dispatch(e.appActions.activateWidget(o))}),[o]),d=(0,e.classNames)("widget-renderer  w-100 h-100",i),u=(t=>e.React.useMemo((()=>e.css`
      overflow: ${t?"visible":"hidden"};
      position: relative;
      .widget-content {
        position: relative;
        height: 100%;
        width: 100%;
        z-index: 0;
      }
  `),[t]))(n);return(0,e.jsx)("div",Object.assign({css:u,className:d,onMouseDownCapture:c},r),(0,e.jsx)("div",{className:"widget-content p-1"},s&&(0,e.jsx)(e.ErrorBoundary,null,(0,e.jsx)(s,{widgetId:o})),!s&&(0,e.jsx)(t.Loading,null)))}const y=(0,e.Immutable)({}),R=a=>{var o,n,i;const{containerMapId:r,onClose:l,widgets:s=y}=a,c=null!==(o=Object.keys(s).find((t=>s[t].state===e.WidgetState.Opened)))&&void 0!==o?o:"",d=null===(i=null===(n=(0,e.getAppStore)().getState().appConfig.widgets)||void 0===n?void 0:n[c])||void 0===i?void 0:i.label;return e.React.createElement(t.MobilePanel,{className:(0,e.classNames)({"d-none":!c}),mapWidgetId:r,title:d,open:!0,toggle:e=>{null==e||e.stopPropagation(),null==e||e.nativeEvent.stopImmediatePropagation(),null==l||l(c)}},Object.entries(s).map((([t,a])=>{if(!a.isClassLoaded)return null;const o=a.state===e.WidgetState.Opened;return e.React.createElement(w,{widgetId:t,key:t,className:(0,e.classNames)({"d-none":!o})})})))},S=e=>document.querySelector(`.widget-controller .avatar-card[data-widgetid='${e}']`),x=(0,e.Immutable)({}),I=a=>{var i;const{widgets:r=x,root:l,placement:s,sizes:c,onClose:d}=a,u=e.ReactRedux.useSelector((e=>e.appConfig.widgets)),p=null!==(i=Object.keys(r).find((t=>r[t].state===e.WidgetState.Opened)))&&void 0!==i?i:"",[v,g]=e.React.useState((()=>{var e;return null!==(e=S(p))&&void 0!==e?e:l}));e.React.useEffect((()=>{var e;g(null!==(e=S(p))&&void 0!==e?e:l)}),[p]);const[h,m]=e.React.useState(c),f=(e,t)=>{t.stopPropagation(),null==d||d(e)};return e.React.createElement(e.React.Fragment,null,Object.entries(r).map((([a,i])=>{var r,l;if(!i.isClassLoaded)return null;const c=i.state===e.WidgetState.Opened,d=null!==(r=h[a])&&void 0!==r?r:n,p=null===(l=null==u?void 0:u[a])||void 0===l?void 0:l.label;return e.React.createElement(t.Popper,{key:a,className:(0,e.classNames)({"d-none":!c},"single-widget-launcher"),headerTitle:p,minSize:o,dragBounds:"body",defaultSize:d,onResize:e=>{return t=a,o=e,void m((e=>e.set(t,o)));var t,o},onHeaderClose:e=>f(a,e),floating:!0,open:!0,reference:v,toggle:e=>((e,t)=>{"Escape"===(null==t?void 0:t.key)&&f(e,t)})(a,e),placement:s},e.React.createElement(w,{widgetId:a}))})))};var O;!function(e){e.Stack="STACK",e.SideBySide="SIDEBYSIDE"}(O||(O={}));const C=()=>document.body.getBoundingClientRect(),j=(0,e.Immutable)({}),k=a=>{const{mode:o,start:i,spaceX:r,spaceY:l,sizes:s,widgets:c=j,onClose:d,forbidden:u}=a,p=e.ReactRedux.useSelector((e=>e.appConfig.widgets)),[v,g]=e.React.useState(s),h=e.React.useMemo((()=>((t,a)=>{let o=(0,e.Immutable)({});return Object.keys(t).forEach((e=>{o=o.set(e,a[e]||n)})),o})(c,v)),[v,c]),m=((a,o,n,i,r,l)=>{const[s,c]=e.React.useState((()=>C())),[d,u]=e.React.useState([n]),p=e.React.useRef(0);e.React.useEffect((()=>{const e=()=>{const e=C();c(e)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]);const v=(e,t)=>e.right>=t.right||e.left<=t.left,g=(e,t)=>e.bottom>=t.bottom||e.top<=t.top,h=t.hooks.useEventCallback((e=>{if(p.current++,p.current>7)return console.warn(`Number of cycles: ${p.current}.You may have opened too many panels, and now there is not enough space for them to be placed without overstepping and blocking`),e;const t=((e,t)=>!(!e||!t)&&(v(e,t)||g(e,t)))(e,s);if(!t)return e;const{width:o,height:i}=e;let{left:l,top:c,right:d,bottom:u}=e;if(t){const e=v({left:l,top:c,right:d,bottom:u,width:o,height:i},s),t=g({left:l,top:c,right:d,bottom:u,width:o,height:i},s);e&&(l=a===O.SideBySide?n.x:s.right-o),t||a!==O.SideBySide||(c+=r),d=l+o,u=c+i}return h({left:l,top:c,right:d,bottom:u,width:o,height:i})}));return e.React.useEffect((()=>{const e=[];let t={width:0,height:0};Object.keys(o).forEach(((l,s)=>{const c=o[l],d=0!==s?e[s-1]:n;let{x:u,y:v}=d;if(a===O.SideBySide){const{width:e}=t;u+=e,u+=0!==s?i:0}else a===O.Stack&&(u+=0!==s?i:0,v+=0!==s?r:0);const g={left:u,top:v,right:u+c.width,bottom:v+c.height,width:c.width,height:c.height},{left:m,top:f}=h(g);p.current>7?(u=d.x,v=d.y):(u=m,v=f),p.current=0,e.push({x:u,y:v}),t=c})),u(e)}),[a,n,i,r,s.width,s.height,h,o]),d})(o,h,i,r,l);return e.React.createElement(e.React.Fragment,null,Object.entries(c).map((([a,o],n)=>{var i;if(!o.isClassLoaded)return null;const r=o.state===e.WidgetState.Opened,l=m[n];if(!l)return null;const s=h[a],c=null===(i=null==p?void 0:p[a])||void 0===i?void 0:i.label;return e.React.createElement(t.FloatingPanel,{key:a,headerTitle:c,defaultPosition:l,defaultSize:s,className:(0,e.classNames)({"d-none":!r},"rrw-controller__multiple-widget-launcher"),showHeaderClose:!0,dragBounds:"body",onResize:e=>{return t=a,o=e,void g(v.set(t,o));var t,o},onHeaderClose:e=>((e,t)=>{t.stopPropagation(),t.nativeEvent.stopImmediatePropagation(),null==d||d(e)})(a,e)},e.React.createElement(w,{widgetId:a}))})))},E=a=>{var o,i,r,c,u,p,h,m,w,y,x,O,C,j,E;const{id:M,config:L,version:N,forbidden:A}=a,$=null===(o=L.behavior)||void 0===o?void 0:o.onlyOpenOne,z=null===(i=L.behavior)||void 0===i?void 0:i.openStarts,P=null===(r=L.behavior)||void 0===r?void 0:r.size,T=null===(c=L.behavior)||void 0===c?void 0:c.vertical,W=null===(u=L.behavior)||void 0===u?void 0:u.displayType,B=null===(p=null==L?void 0:L.appearance)||void 0===p?void 0:p.card,U=((e,t)=>{const a=null==e?void 0:e.showLabel,o=null==e?void 0:e.labelGrowth,n=null==e?void 0:e.avatar.size,i=null==e?void 0:e.avatar.shape;return d(n,a,i)+t+o})(null===(h=null==L?void 0:L.appearance)||void 0===h?void 0:h.card,null===(m=null==L?void 0:L.appearance)||void 0===m?void 0:m.space),_=null===(x=null===(y=null===(w=(0,e.getAppStore)())||void 0===w?void 0:w.getState())||void 0===y?void 0:y.appContext)||void 0===x?void 0:x.isRTL,F=null===(j=null===(C=null===(O=(0,e.getAppStore)())||void 0===O?void 0:O.getState())||void 0===C?void 0:C.appContext)||void 0===j?void 0:j.isInBuilder,G=_?Object.assign(Object.assign({},l),{x:document.body.clientWidth-n.width-l.x}):l,V=_?Object.assign(Object.assign({},s),{x:-s.x}):s,D=T?"right-start":"bottom",H=(t=>e.ReactRedux.useSelector((a=>((t,a)=>{const o=t.appConfig,n=g.searchUtils.getContentContainerInfo(o,a,e.LayoutItemType.Widget,t.browserSizeMode),i=Object.values(t.appRuntimeInfo.sectionNavInfos||o.sections||{}).map((e=>e.currentViewId||(e.views||[])[0]));return(n||{}).type!==e.ContainerType.View||i.includes(n.id)})(a,t))))(M),Y=(t=>e.ReactRedux.useSelector((a=>{var o;const n=a.appConfig,i=a.browserSizeMode,r=g.searchUtils.getParentWidgetIdOfContent(n,t,e.LayoutItemType.Widget,i),l=n.widgets[r];return"arcgis-map"===(null===(o=null==l?void 0:l.manifest)||void 0===o?void 0:o.name)?l.id:""})))(M),K=t.hooks.useCheckSmallBrowserSzieMode(),X=e.ReactRedux.useSelector((e=>e.appRuntimeInfo.currentPageId)),q=e.React.useRef(null),J=((t,a)=>{const o=e.ReactRedux.useSelector((e=>e.widgetsRuntimeInfo)),n=(e=>(e=>{var t,a,o;let n=(null!==(o=null===(a=null===(t=null==e?void 0:e.order)||void 0===t?void 0:t.asMutable)||void 0===a?void 0:a.call(t))&&void 0!==o?o:[]).map((t=>{var a;return null===(a=e.content)||void 0===a?void 0:a[t]}));return n=n.filter((e=>e&&e.id&&e.widgetId&&!e.isPending)),n.map((e=>e.id))})(e).map((t=>{var a,o;return null===(o=null===(a=e.content)||void 0===a?void 0:a[t])||void 0===o?void 0:o.widgetId})))(((t,a)=>e.ReactRedux.useSelector((e=>{var o,n,i,r;const l=null===(i=null===(n=null===(o=e.appConfig.widgets)||void 0===o?void 0:o[t])||void 0===n?void 0:n.layouts)||void 0===i?void 0:i[a],s=e.browserSizeMode,c=e.appConfig.mainSizeMode,d=g.searchUtils.findLayoutId(l,s,c);return null===(r=e.appConfig.layouts)||void 0===r?void 0:r[d]})))(t,"controller"));return e.React.useMemo((()=>{const t={};return n.forEach((a=>{var n;const i=null!==(n=null==o?void 0:o[a])&&void 0!==n?n:{isClassLoaded:!1,state:e.WidgetState.Closed};t[a]=(0,e.Immutable)(i)})),(0,e.Immutable)(t)}),[n,o])})(M),Q=Object.keys(J),Z=Q.filter((t=>J[t].state===e.WidgetState.Opened)),ee=e.React.useCallback((t=>{var a;const o=null===(a=t.currentTarget.dataset)||void 0===a?void 0:a.widgetid;o&&(K||$?((0,e.getAppStore)().dispatch(e.appActions.closeWidgets(Z)),Z.includes(o)||v(o).then((()=>{(0,e.getAppStore)().dispatch(e.appActions.openWidget(o))}))):Z.includes(o)?(0,e.getAppStore)().dispatch(e.appActions.closeWidget(o)):v(o).then((()=>{(0,e.getAppStore)().dispatch(e.appActions.openWidget(o))})))}),[K,$,Z]),te=t=>{if(!t)return;(0,e.getAppStore)().dispatch(e.appActions.closeWidget(t));const a=S(t);null==a||a.focus()};t.hooks.useUpdateEffect((()=>{(0,e.getAppStore)().dispatch(e.appActions.closeWidgets(Z))}),[N,X]),t.hooks.useUpdateEffect((()=>{H||(0,e.getAppStore)().dispatch(e.appActions.closeWidgets(Z))}),[H]),e.React.useEffect((()=>{!F&&(null==z?void 0:z.length)&&H&&setTimeout((()=>{const t=z.map((e=>v(e)));Promise.all(t).then((()=>{(0,e.getAppStore)().dispatch(e.appActions.openWidgets(z))}))}),1e3)}),[]);const ae=e.React.useCallback(((t,a)=>{const o=Z.includes(t);return e.React.createElement(f,Object.assign({},B,{key:t,className:`${a} rrw-controller__layout-item`,widgetid:t,markerEnabled:!1,active:o,onClick:ee}))}),[B,ee,Z]);return e.React.createElement(e.React.Fragment,null,K&&e.React.createElement(R,{containerMapId:Y,widgets:J,onClose:te}),!K&&$&&e.React.createElement(I,{sizes:P,root:q.current,placement:D,widgets:J,onClose:te}),!K&&!$&&e.React.createElement(k,{sizes:P,mode:W,start:G,spaceX:V.x,spaceY:V.y,forbidden:A,widgets:J,onClose:te}),e.React.createElement(b,{ref:q,className:"rrw-controller__runtime--scroll-list",vertical:T,itemLength:U,space:null===(E=L.appearance)||void 0===E?void 0:E.space,autoHideArrow:!0,lists:Q,createItem:ae}))},M={behavior:{onlyOpenOne:!0,openStarts:[],displayType:"STACK",vertical:!1,size:{}},appearance:{space:0,advanced:!1,card:{showLabel:!1,labelGrowth:10,avatar:{type:"primary",size:"default",shape:"circle"}}}};class L extends e.BaseVersionManager{constructor(){super(...arguments),this.versions=[{version:"1.0.0",description:"Version manager for release 1.0.0",upgrader:e=>{if(!e)return M;if(e.behavior&&e.appearance)return e;{let a=e;return e.behavior||(a=a.setIn(["behavior","openStarts"],[]),a=a.setIn(["behavior","onlyOpenOne"],e.onlyOpenOne),a=a.setIn(["behavior","displayType"],e.displayType),a=a.setIn(["behavior","vertical"],e.vertical),a=a.setIn(["behavior","size"],e.size),a=a.without(["onlyOpenOne","displayType","size"])),e.appearance||(a=a.setIn(["appearance","advanced"],!1),e.vertical?a=a.setIn(["appearance","space"],e.space):(a=a.setIn(["appearance","space"],0),a=a.setIn(["appearance","card","labelGrowth"],e.space)),a=a.setIn(["appearance","card","showLabel"],e.showLabel),a=a.setIn(["appearance","card","avatar","size"],"SMALL"===(t=e.iconSize)?"sm":"MEDIUM"===t?"default":"LARGE"===t?"lg":t),a=a.setIn(["appearance","card","avatar","shape"],e.iconStyle),a=a.setIn(["appearance","card","avatar","type"],"primary"),a=a.without(["space","showLabel","iconSize","iconStyle","vertical"])),a}var t}},{version:"1.1.0",description:"Version manager for release 1.1.0",upgrader:e=>{var t,a;if(!e)return M;let o=null===(t=null==e?void 0:e.appearance)||void 0===t?void 0:t.card;const n=null==o?void 0:o.variants,i=null===(a=null==o?void 0:o.avatar)||void 0===a?void 0:a.type;let r=e;if(n){const e=((e,t="primary")=>null==e?void 0:e[t])(n,i);o=null==o?void 0:o.set("variant",e).without("variants"),r=r.setIn(["appearance","card"],o)}return r}},{version:"1.6.0",description:"Version manager for release 1.6.0",upgrader:e=>{var t;if(!e)return M;let a=null===(t=null==e?void 0:e.appearance)||void 0===t?void 0:t.card,o=e;return a&&(a=a.set("showTooltip",!0),o=o.setIn(["appearance","card"],a)),o}}]}}const N=new L,{useSelector:A}=e.ReactRedux,{useState:$,useMemo:z,useRef:P}=e.React,T=a=>{var o,n,i,r;const{builderSupportModules:l,id:s,config:c,layoutId:d,layoutItemId:u}=a,p=null===(o=c.behavior)||void 0===o?void 0:o.onlyOpenOne,v=null===(n=c.behavior)||void 0===n?void 0:n.displayType,g=null===(i=null==c?void 0:c.behavior)||void 0===i?void 0:i.vertical,h=null==c?void 0:c.appearance.advanced,m=null===(r=null==c?void 0:c.appearance)||void 0===r?void 0:r.card.variant,f=A((e=>e.appContext.isInBuilder)),b=A((e=>e.appRuntimeInfo.appMode)),w=A((e=>e.browserSizeMode)),y=A((e=>{var t,a,o,n;let i=null;return f&&(i=null===(n=null===(o=null===(a=null===(t=e.appConfig.layouts)||void 0===t?void 0:t[d])||void 0===a?void 0:a.content)||void 0===o?void 0:o[u])||void 0===n?void 0:n.bbox),i})),R=f&&b!==e.AppMode.Run,S=R&&l.widgetModules.Builder,[x,I]=$(0),[O,C]=$(null),j=P(null);t.hooks.useUpdateEffect((()=>{const e=j.current;if(!e)return;const t=e.getBoundingClientRect();C(t)}),[y]),t.hooks.useUpdateEffect((()=>{I((e=>e+1))}),[p,v,b,w,y]);const k=(t=>z((()=>e.css`
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
    `),[t]))(g),M=((a,o)=>{const n=null==a?void 0:a.default,i=null==a?void 0:a.active,r=null==a?void 0:a.hover;return z((()=>o?e.css`
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
    `:e.css``),[o,n,i,r])})(m,h);return(0,e.jsx)("div",{className:"widget-controller jimu-widget shadow rw-controller",css:[k,M],ref:j},(0,e.jsx)("div",{className:"controller-container"},!R&&(0,e.jsx)(E,{id:s,version:x,config:c,forbidden:O}),R&&S&&(0,e.jsx)(S,{id:s,version:x,config:c})))};T.versionManager=N;const W=T})(),r})())}}}));