System.register(["jimu-core","jimu-ui","jimu-layouts/layout-runtime","jimu-theme"],(function(e,t){var o={},a={},n={},i={};return{setters:[function(e){o.AppMode=e.AppMode,o.BaseVersionManager=e.BaseVersionManager,o.ContainerType=e.ContainerType,o.ControllerPosition=e.ControllerPosition,o.ErrorBoundary=e.ErrorBoundary,o.Immutable=e.Immutable,o.LayoutItemType=e.LayoutItemType,o.React=e.React,o.ReactRedux=e.ReactRedux,o.WidgetManager=e.WidgetManager,o.WidgetState=e.WidgetState,o.appActions=e.appActions,o.classNames=e.classNames,o.css=e.css,o.getAppStore=e.getAppStore,o.hooks=e.hooks,o.jsx=e.jsx,o.lodash=e.lodash,o.polished=e.polished},function(e){a.Button=e.Button,a.FloatingPanel=e.FloatingPanel,a.Icon=e.Icon,a.Loading=e.Loading,a.MobilePanel=e.MobilePanel,a.NavButtonGroup=e.NavButtonGroup,a.Popper=e.Popper,a.Tooltip=e.Tooltip,a.defaultMessages=e.defaultMessages,a.styleUtils=e.styleUtils,a.utils=e.utils},function(e){n.searchUtils=e.searchUtils},function(e){i.styled=e.styled}],execute:function(){e((()=>{var e={25164:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path fill="#000" d="M4 4h2v1H4V4ZM8 4h2v1H8V4ZM14 4h-2v1h2V4ZM15 4h1v2h-1V4ZM16 8h-1v2h1V8ZM4 14h1v2H4v-2ZM5 6H4v2h1V6ZM4 10h1v2H4v-2ZM16 12h-1v2h1v-2ZM16 15v1h-2v-1h2ZM12 15h-2v1h2v-1ZM6 15h2v1H6v-1Z"></path><path fill="#000" fill-rule="evenodd" d="M18 0a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h16Zm0 1H2a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z" clip-rule="evenodd"></path></svg>'},55339:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m8.745 8 6.1 6.1a.527.527 0 1 1-.745.746L8 8.746l-6.1 6.1a.527.527 0 1 1-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 0 1 .746-.746l6.1 6.1 6.1-6.1a.527.527 0 0 1 .746.746L8.746 8Z"></path></svg>'},48891:e=>{"use strict";e.exports=o},74758:e=>{"use strict";e.exports=n},34796:e=>{"use strict";e.exports=i},30726:e=>{"use strict";e.exports=a}},t={};function l(o){var a=t[o];if(void 0!==a)return a.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,l),n.exports}l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var o in t)l.o(t,o)&&!l.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.p="";var r={};return l.p=window.jimuConfig.baseUrl,(()=>{"use strict";l.r(r),l.d(r,{__set_webpack_public_path__:()=>V,default:()=>H});var e=l(48891),t=l(30726);const o="controller",a={sm:24,default:32,lg:48},n={width:150,height:120},i={width:300,height:300},s={x:70,y:70},c={x:30,y:30},d=(e.ControllerPosition.TopRight,[{name:"preventOverflow",options:{boundary:document.body,rootBoundary:document}},{name:"offset",options:{offset:[0,16]}}]);var u=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(o[a[n]]=e[a[n]])}return o};const p=(e,t,o)=>{let n=a[e];return t&&(n+=21),n+=2*v(e,o),n},v=(e,t)=>"circle"===t?"sm"===e?4:"default"===e?2:"lg"===e?0:void 0:6,g=e.React.forwardRef(((o,a)=>{var n;const{label:i,className:l,title:r,showLabel:s,showTooltip:c=!0,labelGrowth:d=0,icon:g,marker:h,onMarkerClick:m,avatar:f,autoFlip:b,active:y,editDraggable:w,disabled:S}=o,R=u(o,["label","className","title","showLabel","showTooltip","labelGrowth","icon","marker","onMarkerClick","avatar","autoFlip","active","editDraggable","disabled"]),x=f||{},{shape:I,style:C}=x,k=u(x,["shape","style"]),j=((t,o,a,n)=>e.React.useMemo((()=>{const i=p(t,o,a),l=i+n,r=v(t,a);return e.css`
      display: flex;
      align-items:center;
      flex-direction: column;
      justify-content: ${o?"space-around":"center"};
      width: ${e.polished.rem(l)} !important;
      height: ${e.polished.rem(i)};
      .tool-drag-handler {
        cursor: auto;
      }
      .avatar {
        padding: ${r}px;
        position: relative;
        text-align: center;
        &:hover .marker {
          visibility: visible;
        }
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
          visibility: hidden;
        }
      }
      .avatar-label {
        text-align: center;
        width: 100%;
        min-height: ${e.polished.rem(21)};
        cursor: default;
      }
    `}),[t,o,a,n]))(null==k?void 0:k.size,s,I,d),M=(0,e.jsx)(t.Button,Object.assign({icon:!0,active:y,className:(0,e.classNames)("avatar-button",{disabled:S}),ref:a},k,{style:Object.assign({borderRadius:"circle"===I?"50%":void 0},C)}),(0,e.jsx)(t.Icon,{color:"string"!=typeof g&&(null===(n=g.properties)||void 0===n?void 0:n.color),icon:"string"!=typeof g?g.svg:g,autoFlip:b}));return(0,e.jsx)("div",Object.assign({},R,{className:(0,e.classNames)("avatar-card",`${l} avatar-card`),css:j}),(0,e.jsx)("div",{className:(0,e.classNames)({"no-drag-action":!w},"avatar tool-drag-handler")},h&&(0,e.jsx)(t.Button,{className:"marker",size:"sm",icon:!0,onClick:m},(0,e.jsx)(t.Icon,{size:8,icon:h})),c?(0,e.jsx)(t.Tooltip,{title:r||i,style:{pointerEvents:"none"}},M):M),s&&(0,e.jsx)("div",{className:(0,e.classNames)("avatar-label text-truncate",{active:y})},i))}));var h=l(74758),m=l(55339),f=l.n(m);const b=o=>{var a,n;const{markerEnabled:i,onMarkerClick:l,widgetid:r,showLabel:s,showTooltip:c,labelGrowth:d,avatar:u,onClick:p,active:v,editDraggable:h,className:m}=o,b=e.ReactRedux.useSelector((e=>{var t;return null===(t=e.appConfig.widgets)||void 0===t?void 0:t[r]}));return b?e.React.createElement(g,{"data-widgetid":r,className:`widget-avatar-card ${m}`,showLabel:s,showTooltip:c,labelGrowth:d,avatar:u,label:b.label,icon:b.icon,autoFlip:null===(n=null===(a=null==b?void 0:b.manifest)||void 0===a?void 0:a.properties)||void 0===n?void 0:n.flipIcon,marker:i?f():"",active:v,editDraggable:h,onMarkerClick:l,onClick:p}):e.React.createElement(t.Loading,null)},y=(e,t,o)=>{let a=e,n=t;return n-a>o?n=e+o:n-a<o&&(a=0,n=a+o),[a,n]};const w=[],S=e.React.forwardRef(((o,a)=>{const{scrollRef:n,className:i,lists:l=w,createItem:r,vertical:s,itemLength:c,space:d,onChange:u,autoHideArrow:p,minLength:v=c,autoScrollEnd:g,autoSize:h,onScrollStatusChange:m}=o,f=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(o[a[n]]=e[a[n]])}return o}(o,["scrollRef","className","lists","createItem","vertical","itemLength","space","onChange","autoHideArrow","minLength","autoScrollEnd","autoSize","onScrollStatusChange"]),b=e.hooks.useTranslation(t.defaultMessages),[S,R]=e.hooks.useForwardRef(a),{start:x,end:I,disablePrevious:C,disableNext:k,hideArrow:j,scroll:M}=(t=>{var o;const{rootRef:a,lists:n,itemLength:i,autoSize:l,vertical:r,space:s,minLength:c,autoScrollEnd:d}=t,u=null!==(o=null==n?void 0:n.length)&&void 0!==o?o:0,p=e.hooks.useLatest(l),v=((t,o,a=0,n=a,i)=>{let l=((t,o=500,a=!1,n)=>{var i,l;const r=a?"clientHeight":"clientWidth",[s,c]=e.React.useState(null!==(l=null===(i=t.current)||void 0===i?void 0:i[r])&&void 0!==l?l:0),d=!n&&!window.jimuConfig.isInBuilder,u=e.hooks.useLatest((()=>{const e=t.current[r]||0;c(e)})),p=e.React.useMemo((()=>e.lodash.debounce((()=>{u.current()}),o,{leading:!0})),[]);return e.React.useEffect((()=>{if(d)return;const e=t.current;e&&p();const o=new ResizeObserver(p);return o.observe(e),()=>{o.disconnect(),p.cancel()}}),[t,p,d]),s})(t,500,o,i);return l+=a,l=Math.max(l,n),l})(a,r,s,c,!l),g=e.React.useMemo((()=>p.current?u:Math.floor(v/i)),[p,u,i,v]),[h,m]=e.React.useState(y(0,0,g)[0]),[f,b]=e.React.useState(y(0,0,g)[1]),w=e.hooks.useLatest(h),S=e.hooks.useLatest(f),R=f-h>=u,x=0===h,I=f===u;e.React.useEffect((()=>{if(0===v)return;const[e,t]=y(S.current,w.current,g);m(e),b(t)}),[g,v,S,w]);const C=e.hooks.useEventCallback(((e,t=!0)=>{const o=t?1:g;let a=0,n=0;e?(a=h-o,a<0?(a=0,n=a+g):n=f-o):(n=f+o,n>u?(n=u,a=n-g):a=h+o),m(a),b(n)})),k=e.React.useRef([]),j=e.hooks.useEventCallback((()=>{const e=u>0&&k.current.length>0&&n[n.length-1]!==k.current[k.current.length-1];if(d&&e&&k.current.length>u){let e=0,t=0;t=u,e=t-g,e=Math.max(0,e),m(e),b(t)}}));return e.React.useEffect((()=>{j(),k.current=n}),[n,j]),{start:h,end:f,disablePrevious:x,disableNext:I,hideArrow:R,scroll:C}})({rootRef:S,lists:l,itemLength:c,autoSize:h,vertical:s,space:d,minLength:v,autoScrollEnd:g}),O=h?l:l.slice(x,I),A=!!h||j,E=((t,o,a,n,i)=>e.css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    button.previous, button.next {
      flex-shrink: 0;
      display: ${i?"none":"block"};
    }
    .root {
      flex-direction: ${t?"column":"row"};
      width: 100%;
      height: 100%;
      min-width: ${e.polished.rem(a)};
      max-height: ${n?"100%":"calc(100% - 20px)"};
      max-width: ${n?"100%":"calc(100% - 20px)"};
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
`)(s,d,v,h,A);return e.React.useEffect((()=>{null==m||m(A,C,k)}),[k,C,A,m]),e.React.useEffect((()=>{t.utils.setRef(n,M)}),[M,n]),(0,e.jsx)(t.NavButtonGroup,Object.assign({},f,{css:E,type:"tertiary",vertical:s,onChange:e=>{null==u||u(e),M(e,!0)},disablePrevious:C,disableNext:k,previousAriaLabel:b("previous"),nextAriaLabel:b("next"),className:(0,e.classNames)("scroll-list",i)}),(0,e.jsx)("div",{className:"root scroll-list-root",ref:R},l.map((t=>{const o=!O.includes(t);return r(t,(0,e.classNames)("scroll-list-item",{"d-none":o}))}))))}));l(25164),(0,l(34796).styled)("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${e=>e.vertical?"column":"row"};
  .avatar-placeholder {
    &:not(:first-of-type) {
      margin-top: ${t=>t.vertical?e.polished.rem(t.space):"unset"};
      margin-left: ${t=>t.vertical?"unset":e.polished.rem(t.space)};
    }
  }
`,(e=>{const t=[];for(;e>0;)t.push(e),e--})(3);function R(o){const{widgetId:a,canCrossLayoutBoundary:n,showMask:i,className:l,layoutId:r,layoutItemId:s}=o,c=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(o[a[n]]=e[a[n]])}return o}(o,["widgetId","canCrossLayoutBoundary","showMask","className","layoutId","layoutItemId"]),d=e.hooks.useCancelablePromiseMaker(),[u,p]=e.React.useState(null),[v,g]=e.React.useState(""),[h,m]=e.React.useState("");e.React.useEffect((()=>{p(null),g("");const t=d((t=>{var o,a;if(t)return(null===(a=null===(o=(0,e.getAppStore)().getState().widgetsRuntimeInfo)||void 0===o?void 0:o[t])||void 0===a?void 0:a.isClassLoaded)?Promise.resolve(e.WidgetManager.getInstance().getWidgetClass(t)):e.WidgetManager.getInstance().loadWidgetClass(t)})(a));t.then((e=>{p(e),g(a)}),(e=>{var t;m(null!==(t=null==e?void 0:e.message)&&void 0!==t?t:e)}))}),[d,a]);const f=e.React.useCallback((()=>{var t,o;h||window.jimuConfig.isBuilder||(null===(o=null===(t=(0,e.getAppStore)().getState().widgetsRuntimeInfo)||void 0===t?void 0:t[a])||void 0===o?void 0:o.state)===e.WidgetState.Active||(0,e.getAppStore)().dispatch(e.appActions.activateWidget(a))}),[h,a]),b=(0,e.classNames)("widget-renderer w-100 h-100",l),y=(t=>e.React.useMemo((()=>e.css`
      overflow: ${t?"visible":"hidden"};
      position: relative;
      .widget-content {
        position: relative;
        height: 100%;
        width: 100%;
        z-index: 0;
      }
      .widget-mask {
        position: absolute;
        background: transparent;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 1;
      }
  `),[t]))(n);return(0,e.jsx)("div",Object.assign({css:y,className:b,onMouseDownCapture:f,"data-widgetid":v},c),(0,e.jsx)("div",{className:"widget-content p-1"},h,!h&&u&&(0,e.jsx)(e.ErrorBoundary,null,(0,e.jsx)(u,{widgetId:v,layoutId:r,layoutItemId:s})),!h&&!u&&(0,e.jsx)(t.Loading,null)),i&&(0,e.jsx)("div",{className:"widget-mask"}))}const x=(t,o)=>e.ReactRedux.useSelector((e=>{var a,n,i,l;const r=null===(i=null===(n=null===(a=e.appConfig.widgets)||void 0===a?void 0:a[t])||void 0===n?void 0:n.layouts)||void 0===i?void 0:i[o],s=e.browserSizeMode,c=e.appConfig.mainSizeMode,d=h.searchUtils.findLayoutId(r,s,c);return null===(l=e.appConfig.layouts)||void 0===l?void 0:l[d]})),I=(e,t)=>{if(null!=(null==e?void 0:e.content)&&t)return Object.keys(e.content).find((o=>e.content[o].widgetId===t))},C=t=>[e.WidgetState.Opened,e.WidgetState.Active].includes(t.state),k=(0,e.Immutable)({}),j=a=>{var n,i,l;const{controllerId:r,containerMapId:s,onClose:c,widgets:d=k}=a,u=null!==(n=Object.keys(d).find((e=>C(d[e]))))&&void 0!==n?n:"",p=null===(l=null===(i=(0,e.getAppStore)().getState().appConfig.widgets)||void 0===i?void 0:i[u])||void 0===l?void 0:l.label,v=x(r,o),g=e.React.useCallback(((t,o)=>{var a;t.stopPropagation();const n=null==v?void 0:v.id,i=I(v,o),l=null===(a=(0,e.getAppStore)().getState().appRuntimeInfo)||void 0===a?void 0:a.selection;l&&l.layoutId===n&&l.layoutItemId===i||(0,e.getAppStore)().dispatch(e.appActions.selectionChanged({layoutId:n,layoutItemId:i}))}),[v]);return e.React.createElement(t.MobilePanel,{className:(0,e.classNames)({"d-none":!u}),mapWidgetId:s,title:p,open:!!u,keepMount:!0,onClose:e=>{null==e||e.stopPropagation(),null==e||e.nativeEvent.stopImmediatePropagation(),null==c||c(u)}},Object.entries(d).map((([t,o])=>{if(void 0===o.state)return null;const a=C(o);return e.React.createElement(R,{key:t,widgetId:t,onClick:e=>{g(e,t)},className:(0,e.classNames)({"d-none":!a})})})))},M=e=>document.querySelector(`.widget-controller .avatar-card[data-widgetid='${e}']`),O=(0,e.Immutable)({}),A=a=>{const{controllerId:l,widgets:r=O,root:s,placement:c,sizes:u,onClose:p}=a,v=e.ReactRedux.useSelector((e=>e.appConfig.widgets)),g=x(l,o),h=e.React.useCallback(((t,o)=>{var a;t.stopPropagation();const n=null==g?void 0:g.id,i=I(g,o),l=null===(a=(0,e.getAppStore)().getState().appRuntimeInfo)||void 0===a?void 0:a.selection;l&&l.layoutId===n&&l.layoutItemId===i||(0,e.getAppStore)().dispatch(e.appActions.selectionChanged({layoutId:n,layoutItemId:i}))}),[g]),[m,f]=e.React.useState(u),b=(e,t)=>{var o;t.stopPropagation(),null==p||p(e);const a=null===(o=M(e))||void 0===o?void 0:o.querySelector("button");null==a||a.focus()};return e.React.createElement(e.React.Fragment,null,Object.entries(r).map((([o,a])=>{var l,r,u;if(void 0===a.state)return null;const p=a.state!==e.WidgetState.Closed,g=null!==(l=m[o])&&void 0!==l?l:i,y=null===(r=null==v?void 0:v[o])||void 0===r?void 0:r.label;return e.React.createElement(t.Popper,{key:o,style:{maxWidth:"100vw"},modifiers:d,className:(0,e.classNames)({"d-none":!p},"single-widget-launcher"),headerTitle:y,activateOnlyForHeader:!0,minSize:n,dragBounds:"body",defaultSize:g,onResize:e=>{var t,a;t=o,a=e,f((e=>e.set(t,a)))},onHeaderClose:e=>{b(o,e)},floating:!0,open:!0,autoFocus:p,reference:null!==(u=M(o))&&void 0!==u?u:s,toggle:e=>{((e,t)=>{"Escape"===(null==t?void 0:t.key)&&b(e,t)})(o,e)},onClick:e=>{h(e,o)},placement:c},e.React.createElement(R,{widgetId:o}))})))};var E;!function(e){e.Stack="STACK",e.SideBySide="SIDEBYSIDE"}(E||(E={}));const L=()=>document.body.getBoundingClientRect(),N=(0,e.Immutable)({}),$=a=>{const{mode:n,start:l,spaceX:r,spaceY:s,sizes:c,controllerId:d,widgets:u=N,onClose:p}=a,v=e.ReactRedux.useSelector((e=>e.appConfig.widgets)),[g,h]=e.React.useState(c),m=e.React.useMemo((()=>((t,o)=>{let a=(0,e.Immutable)({});return Object.keys(t).forEach((e=>{a=a.set(e,o[e]||i)})),a})(u,g)),[g,u]),f=x(d,o),b=e.React.useCallback(((t,o)=>{var a;t.stopPropagation();const n=null==f?void 0:f.id,i=I(f,o),l=null===(a=(0,e.getAppStore)().getState().appRuntimeInfo)||void 0===a?void 0:a.selection;l&&l.layoutId===n&&l.layoutItemId===i||(0,e.getAppStore)().dispatch(e.appActions.selectionChanged({layoutId:n,layoutItemId:i}))}),[f]),y=e=>{const t=M(e),o=null==t?void 0:t.querySelector("button");null==o||o.focus()},w=((t,o,a,n,i)=>{const[l,r]=e.React.useState((()=>L())),[s,c]=e.React.useState([a]),d=e.React.useRef(0);e.React.useEffect((()=>{const e=()=>{const e=L();r(e)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]);const u=(e,t)=>e.right>=t.right||e.left<=t.left,p=(e,t)=>e.bottom>=t.bottom||e.top<=t.top,v=e.hooks.useEventCallback((e=>{if(d.current++,d.current>7)return console.warn(`Number of cycles: ${d.current}.You may have opened too many panels, and now there is not enough space for them to be placed without overstepping and blocking`),e;const o=((e,t)=>!(!e||!t)&&(u(e,t)||p(e,t)))(e,l);if(!o)return e;const{width:n,height:r}=e;let{left:s,top:c,right:g,bottom:h}=e;if(o){const e=u({left:s,top:c,right:g,bottom:h,width:n,height:r},l),o=p({left:s,top:c,right:g,bottom:h,width:n,height:r},l);e&&(s=t===E.SideBySide?a.x:l.right-n),o||t!==E.SideBySide||(c+=i),g=s+n,h=c+r}return v({left:s,top:c,right:g,bottom:h,width:n,height:r})}));return e.React.useEffect((()=>{const e=[];let l={width:0,height:0};Object.keys(o).forEach(((r,s)=>{const c=o[r],u=0!==s?e[s-1]:a;let{x:p,y:g}=u;if(t===E.SideBySide){const{width:e}=l;p+=n>0?e:-e,p+=0!==s?n:0}else t===E.Stack&&(p+=0!==s?n:0,g+=0!==s?i:0);const h={left:p,top:g,right:p+c.width,bottom:g+c.height,width:c.width,height:c.height},{left:m,top:f}=v(h);d.current>7?(p=u.x,g=u.y):(p=m,g=f),d.current=0,e.push({x:p,y:g}),l=c})),c(e)}),[t,a,n,i,l.width,l.height,v,o]),s})(n,m,l,r,s);return e.React.createElement(e.React.Fragment,null,Object.entries(u).map((([o,a],n)=>{var i;if(void 0===a.state)return null;const l=C(a),r=w[n];if(!r)return null;const s=m[o],c=null===(i=null==v?void 0:v[o])||void 0===i?void 0:i.label;return e.React.createElement(t.FloatingPanel,{key:o,style:{maxWidth:"100vw"},headerTitle:c,defaultPosition:r,defaultSize:s,className:(0,e.classNames)({"d-none":!l},"multiple-widget-launcher"),showHeaderClose:!0,activateOnlyForHeader:!0,autoFocus:l,dragBounds:"body",onClick:e=>{b(e,o)},onResize:e=>{var t,a;t=o,a=e,h(g.set(t,a))},onLeave:()=>{y(o)},onHeaderClose:e=>{((e,t)=>{null==t||t.stopPropagation(),null==p||p(e),y(e)})(o,e)}},e.React.createElement(R,{widgetId:o}))})))},z=t=>{const o=(0,e.getAppStore)().getState().appConfig.sections,a=Object.values(null!=o?o:{}).find((e=>{var o;return null===(o=e.views)||void 0===o?void 0:o.includes(t)}));return null==a?void 0:a.id},P=t=>{var a,n,l,r,d,u,v,g,m,f,y,w,R,I,k,O,E;const{id:L,config:N,version:P,autoSize:T}=t,B=null!==(n=null===(a=null==N?void 0:N.behavior)||void 0===a?void 0:a.arrangement)&&void 0!==n?n:"floating",W=null===(l=N.behavior)||void 0===l?void 0:l.onlyOpenOne,U=null===(r=N.behavior)||void 0===r?void 0:r.openStarts,H=null===(d=N.behavior)||void 0===d?void 0:d.size,V=null===(u=N.behavior)||void 0===u?void 0:u.vertical,F=null===(v=N.behavior)||void 0===v?void 0:v.displayType,Z=null===(g=null==N?void 0:N.appearance)||void 0===g?void 0:g.card,G=((e,t)=>{const o=null==e?void 0:e.showLabel,a=null==e?void 0:e.labelGrowth,n=null==e?void 0:e.avatar.size,i=null==e?void 0:e.avatar.shape;return p(n,o,i)+t+a})(null===(m=null==N?void 0:N.appearance)||void 0===m?void 0:m.card,null===(f=null==N?void 0:N.appearance)||void 0===f?void 0:f.space),_=null===(R=null===(w=null===(y=(0,e.getAppStore)())||void 0===y?void 0:y.getState())||void 0===w?void 0:w.appContext)||void 0===R?void 0:R.isRTL,D=null===(O=null===(k=null===(I=(0,e.getAppStore)())||void 0===I?void 0:I.getState())||void 0===k?void 0:k.appContext)||void 0===O?void 0:O.isInBuilder,Y=e.React.useMemo((()=>_?Object.assign(Object.assign({},s),{x:document.body.clientWidth-i.width-s.x}):s),[_]),q=e.React.useMemo((()=>_?Object.assign(Object.assign({},c),{x:-c.x}):c),[_]),K=V?"right-start":"bottom",X=(t=>{const o=e.ReactRedux.useSelector((e=>{var t;return null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.sectionNavInfos}));return((t,o)=>{const a=(t=>{const o=(0,e.getAppStore)().getState().appConfig.sections,a=t?Object.values(t).map((e=>e.currentViewId)):[],n=a.map(z),i=Object.values(null!=o?o:{}).map((e=>{var t;if(!n.includes(e.id))return null===(t=e.views)||void 0===t?void 0:t[0]})).filter((e=>!!e)),l=a;return i.forEach((e=>{a.includes(e)||l.push(e)})),l})(t),n=(0,e.getAppStore)().getState().browserSizeMode,i=(0,e.getAppStore)().getState().appConfig,l=h.searchUtils.getContentContainerInfo(i,o,e.LayoutItemType.Widget,n);let r=!0;if(!l)return r;if(l.type===e.ContainerType.View)if(a.includes(l.id)){const t=l.id,o=z(t),s=h.searchUtils.getContentContainerInfo(i,o,e.LayoutItemType.Section,n);s&&s.type===e.ContainerType.View&&(a.includes(s.id)||(r=!1))}else r=!1;return r})(o,t)})(L),J=(t=>e.ReactRedux.useSelector((e=>{var o,a,n,i;const l=e.appConfig,r=e.browserSizeMode,s=l.widgets[t].parent;let c=null!==(o=s[r])&&void 0!==o?o:[];0===c.length&&(c=null!==(a=s[l.mainSizeMode])&&void 0!==a?a:[]);const d=null===(n=c[0])||void 0===n?void 0:n.layoutId,u=h.searchUtils.getWidgetIdThatUseTheLayoutId(l,d),p=l.widgets[u];return"arcgis-map"===(null===(i=null==p?void 0:p.manifest)||void 0===i?void 0:i.name)?p.id:""})))(L),Q=e.hooks.useCheckSmallBrowserSizeMode(),ee=e.ReactRedux.useSelector((e=>e.appRuntimeInfo.currentPageId)),te=W&&"floating"===B,oe=!W&&"floating"===B,ae=e.React.useRef(null),ne=((t,o)=>{const a=e.ReactRedux.useSelector((e=>e.widgetsRuntimeInfo)),n=(e=>{const t=(e=>{var t,o,a;let n=(null!==(a=null===(o=null===(t=null==e?void 0:e.order)||void 0===t?void 0:t.asMutable)||void 0===o?void 0:o.call(t))&&void 0!==a?a:[]).map((t=>{var o;return null===(o=e.content)||void 0===o?void 0:o[t]}));return n=n.filter((e=>e&&e.id&&e.widgetId&&!e.isPending)),n.map((e=>e.id))})(e);return t.map((t=>{var o,a;return null===(a=null===(o=e.content)||void 0===o?void 0:o[t])||void 0===a?void 0:a.widgetId}))})(x(t,o));return e.React.useMemo((()=>{const t={};return n.forEach((o=>{var n;const i=null!==(n=null==a?void 0:a[o])&&void 0!==n?n:{isClassLoaded:!1};t[o]=(0,e.Immutable)(i)})),(0,e.Immutable)(t)}),[n,a])})(L,o),ie=Object.keys(ne),le=ie.filter((e=>C(ne[e]))),re=e.React.useCallback((t=>{var o;const a=null===(o=t.currentTarget.dataset)||void 0===o?void 0:o.widgetid;a&&(Q||W?((0,e.getAppStore)().dispatch(e.appActions.closeWidgets(le)),le.includes(a)||(0,e.getAppStore)().dispatch(e.appActions.openWidget(a,L))):le.includes(a)?(0,e.getAppStore)().dispatch(e.appActions.closeWidget(a)):(0,e.getAppStore)().dispatch(e.appActions.openWidget(a,L)))}),[Q,W,le,L]),se=t=>{if(!t)return;(0,e.getAppStore)().dispatch(e.appActions.closeWidget(t));const o=M(t);null==o||o.focus()};e.hooks.useUpdateEffect((()=>{(0,e.getAppStore)().dispatch(e.appActions.resetWidgetsState(le))}),[P,ee]),e.hooks.useUpdateEffect((()=>{X||(0,e.getAppStore)().dispatch(e.appActions.closeWidgets(le))}),[X]),e.React.useEffect((()=>{D&&(0,e.getAppStore)().dispatch(e.appActions.resetWidgetsState(ie)),!D&&(null==U?void 0:U.length)&&X&&setTimeout((()=>{(0,e.getAppStore)().dispatch(e.appActions.openWidgets(U,L))}),1e3)}),[]);const ce=e.React.useCallback(((t,o)=>{const a=le.includes(t);return e.React.createElement(b,Object.assign({},Z,{key:t,className:`${o} layout-item`,widgetid:t,markerEnabled:!1,active:a,onClick:re}))}),[Z,re,le]);return e.React.createElement("div",{className:"controller-runtime w-100 h-100"},Q&&e.React.createElement(j,{containerMapId:J,controllerId:L,widgets:ne,onClose:se}),!Q&&e.React.createElement(e.React.Fragment,null,te&&e.React.createElement(A,{sizes:H,root:ae.current,placement:K,controllerId:L,widgets:ne,onClose:se}),oe&&e.React.createElement($,{sizes:H,mode:F,start:Y,spaceX:q.x,spaceY:q.y,controllerId:L,widgets:ne,onClose:se})),e.React.createElement(S,{ref:ae,className:"runtime--scroll-list",vertical:V,itemLength:G,space:null===(E=N.appearance)||void 0===E?void 0:E.space,autoHideArrow:!0,autoSize:T,lists:ie,createItem:ce}))},T={behavior:{onlyOpenOne:!0,openStarts:[],displayType:"STACK",vertical:!1,size:{}},appearance:{space:0,advanced:!1,card:{showLabel:!1,labelGrowth:10,avatar:{type:"primary",size:"default",shape:"circle"}}}};class B extends e.BaseVersionManager{constructor(){super(...arguments),this.versions=[{version:"1.0.0",description:"Version manager for release 1.0.0",upgrader:e=>{if(!e)return T;if(e.behavior&&e.appearance)return e;{let o=e;return e.behavior||(o=o.setIn(["behavior","openStarts"],[]),o=o.setIn(["behavior","onlyOpenOne"],e.onlyOpenOne),o=o.setIn(["behavior","displayType"],e.displayType),o=o.setIn(["behavior","vertical"],e.vertical),o=o.setIn(["behavior","size"],e.size),o=o.without(["onlyOpenOne","displayType","size"])),e.appearance||(o=o.setIn(["appearance","advanced"],!1),e.vertical?o=o.setIn(["appearance","space"],e.space):(o=o.setIn(["appearance","space"],0),o=o.setIn(["appearance","card","labelGrowth"],e.space)),o=o.setIn(["appearance","card","showLabel"],e.showLabel),o=o.setIn(["appearance","card","avatar","size"],"SMALL"===(t=e.iconSize)?"sm":"MEDIUM"===t?"default":"LARGE"===t?"lg":t),o=o.setIn(["appearance","card","avatar","shape"],e.iconStyle),o=o.setIn(["appearance","card","avatar","type"],"primary"),o=o.without(["space","showLabel","iconSize","iconStyle","vertical"])),o}var t}},{version:"1.1.0",description:"Version manager for release 1.1.0",upgrader:e=>{var t,o;if(!e)return T;let a=null===(t=null==e?void 0:e.appearance)||void 0===t?void 0:t.card;const n=null==a?void 0:a.variants,i=null===(o=null==a?void 0:a.avatar)||void 0===o?void 0:o.type;let l=e;if(n){const e=((e,t="primary")=>null==e?void 0:e[t])(n,i);a=null==a?void 0:a.set("variant",e).without("variants"),l=l.setIn(["appearance","card"],a)}return l}},{version:"1.6.0",description:"Version manager for release 1.6.0",upgrader:e=>{var t;if(!e)return T;let o=null===(t=null==e?void 0:e.appearance)||void 0===t?void 0:t.card,a=e;return o&&(o=o.set("showTooltip",!0),a=a.setIn(["appearance","card"],o)),a}}]}}const W=new B,U=o=>{var n,i,l,r;const{builderSupportModules:s,id:c,config:d,onInitResizeHandler:u,autoWidth:p,autoHeight:v}=o,g=null===(n=d.behavior)||void 0===n?void 0:n.onlyOpenOne,h=null===(i=d.behavior)||void 0===i?void 0:i.displayType,m=null===(l=null==d?void 0:d.behavior)||void 0===l?void 0:l.vertical,f=null==d?void 0:d.appearance.advanced,b=null===(r=null==d?void 0:d.appearance)||void 0===r?void 0:r.card.variant,y=m?v:p,w=e.ReactRedux.useSelector((e=>e.appContext.isInBuilder)),S=e.ReactRedux.useSelector((e=>e.appRuntimeInfo.appMode)),R=e.ReactRedux.useSelector((e=>e.browserSizeMode));e.React.useEffect((()=>{null==u||u(null,null,(()=>{k((e=>e+1))}))}),[u]);const x=w&&S!==e.AppMode.Run,I=x&&s.widgetModules.Builder,[C,k]=e.React.useState(0);e.hooks.useUpdateEffect((()=>{k((e=>e+1))}),[g,h,S,R]);const j=((t,o,n)=>{const i=t?0:a.sm,l=t?0:a.sm,r=o?"5px":0,s=n?"5px":0;return e.React.useMemo((()=>e.css`
      overflow: hidden;
      white-space: nowrap;
      .controller-container {
        width: 100%;
        height: 100%;
        padding: ${s} ${r};
        min-width:  ${i}px;
        min-height: ${l}px;
      }
    `),[r,s,i,l])})(y,p,v),M=((o,a)=>{const n=null==o?void 0:o.default,i=null==o?void 0:o.active,l=null==o?void 0:o.hover;return e.React.useMemo((()=>a?e.css`
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
        ${l&&e.css`
          &:hover {
            > .avatar {
              > .avatar-button {
                background-color: ${l.bg};
                border-color: ${l.bg};
              }
            }
            > .avatar-label {
              color: ${l.color};
              font-style: ${(null==l?void 0:l.italic)?"italic":"normal"};
              font-weight: ${(null==l?void 0:l.bold)?"bold":"normal"};
              text-decoration: ${t.styleUtils.toCSSTextUnderLine({underline:l.underline,strike:l.strike})};
            }
          }
        `}
        ${i&&e.css`
          > .avatar {
            > .avatar-button {
              &:not(:disabled):not(.disabled):active,
              &:not(:disabled):not(.disabled).active,
              &[aria-expanded='true'] {
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
    `:e.css``),[a,n,i,l])})(b,f);return(0,e.jsx)("div",{className:"widget-controller jimu-widget shadow rw-controller",css:[j,M]},(0,e.jsx)("div",{className:"controller-container"},!x&&(0,e.jsx)(P,{id:c,version:C,config:d,autoSize:y}),x&&I&&(0,e.jsx)(I,{id:c,version:C,config:d,autoSize:y})))};U.versionManager=W;const H=U;function V(e){l.p=e}})(),r})())}}}));