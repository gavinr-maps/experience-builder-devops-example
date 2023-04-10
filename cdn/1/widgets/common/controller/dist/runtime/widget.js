System.register(["jimu-core","jimu-ui","jimu-layouts/layout-runtime","jimu-theme"],(function(e,t){var a={},o={},n={},i={};return{setters:[function(e){a.AppMode=e.AppMode,a.BaseVersionManager=e.BaseVersionManager,a.ContainerType=e.ContainerType,a.ErrorBoundary=e.ErrorBoundary,a.Immutable=e.Immutable,a.LayoutItemType=e.LayoutItemType,a.React=e.React,a.ReactRedux=e.ReactRedux,a.WidgetManager=e.WidgetManager,a.WidgetState=e.WidgetState,a.appActions=e.appActions,a.classNames=e.classNames,a.css=e.css,a.getAppStore=e.getAppStore,a.jsx=e.jsx,a.lodash=e.lodash,a.polished=e.polished},function(e){o.Button=e.Button,o.FloatingPanel=e.FloatingPanel,o.Icon=e.Icon,o.Loading=e.Loading,o.MobilePanel=e.MobilePanel,o.NavButtonGroup=e.NavButtonGroup,o.Popper=e.Popper,o.Tooltip=e.Tooltip,o.hooks=e.hooks,o.styleUtils=e.styleUtils,o.utils=e.utils},function(e){n.searchUtils=e.searchUtils},function(e){i.styled=e.styled}],execute:function(){e((()=>{var e={25164:e=>{e.exports='<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h2v1H4V4ZM8 4h2v1H8V4ZM14 4h-2v1h2V4ZM15 4h1v2h-1V4ZM16 8h-1v2h1V8ZM4 14h1v2H4v-2ZM5 6H4v2h1V6ZM4 10h1v2H4v-2ZM16 12h-1v2h1v-2ZM16 15v1h-2v-1h2ZM12 15h-2v1h2v-1ZM6 15h2v1H6v-1Z" fill="#000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M18 0a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h16Zm0 1H2a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z" fill="#000"></path></svg>'},55339:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m8.745 8 6.1 6.1a.527.527 0 1 1-.745.746L8 8.746l-6.1 6.1a.527.527 0 1 1-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 0 1 .746-.746l6.1 6.1 6.1-6.1a.527.527 0 0 1 .746.746L8.746 8Z" fill="#000"></path></svg>'},48891:e=>{"use strict";e.exports=a},74758:e=>{"use strict";e.exports=n},34796:e=>{"use strict";e.exports=i},30726:e=>{"use strict";e.exports=o}},t={};function r(a){var o=t[a];if(void 0!==o)return o.exports;var n=t[a]={exports:{}};return e[a](n,n.exports,r),n.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="";var l={};return r.p=window.jimuConfig.baseUrl,(()=>{"use strict";r.r(l),r.d(l,{default:()=>T});var e=r(48891),t=r(30726);const a={sm:24,default:32,lg:48},o={width:150,height:120},n={width:300,height:300},i={x:70,y:70},s={x:30,y:30};var c=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(a[o[n]]=e[o[n]])}return a};const d=(e,t,o)=>{let n=a[e];return t&&(n+=21),n+=2*u(e,o),n},u=(e,t)=>"circle"===t?"sm"===e?4:"default"===e?2:"lg"===e?0:void 0:6,p=e.React.forwardRef(((a,o)=>{var n;const{label:i,className:r,title:l,showLabel:s,showTooltip:p=!0,labelGrowth:v=0,icon:g,marker:h,onMarkerClick:m,avatar:f,autoFlip:b,active:w,editDraggable:y,disabled:S}=a,R=c(a,["label","className","title","showLabel","showTooltip","labelGrowth","icon","marker","onMarkerClick","avatar","autoFlip","active","editDraggable","disabled"]),x=f||{},{shape:I,style:O}=x,j=c(x,["shape","style"]),C=null==j?void 0:j.size,[k,M]=e.React.useState(null),E=((t,a,o,n)=>e.React.useMemo((()=>{const i=d(t,a,o),r=i+n,l=u(t,o);return e.css`
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
        cursor: default;
      }
    `}),[t,a,o,n]))(C,s,I,v),L=(0,e.jsx)(t.Button,Object.assign({icon:!0,active:w,disabled:S,className:"avatar-button",ref:o},j,{style:Object.assign({borderRadius:"circle"===I?"50%":void 0},O)}),(0,e.jsx)(t.Icon,{color:"string"!=typeof g&&(null===(n=g.properties)||void 0===n?void 0:n.color),icon:"string"!=typeof g?g.svg:g,autoFlip:b}));return(0,e.jsx)("div",Object.assign({},R,{className:(0,e.classNames)("avatar-card",`${r} avatar-card`),css:E}),(0,e.jsx)("div",{className:(0,e.classNames)({"no-drag-action":!y},"avatar tool-drag-handler"),onMouseEnter:()=>{M(!0)},onMouseLeave:()=>{M(!1)}},h&&k&&(0,e.jsx)(t.Button,{className:"marker",size:"sm",icon:!0,onClick:m},(0,e.jsx)(t.Icon,{size:8,icon:h})),p?(0,e.jsx)(t.Tooltip,{title:l||i,style:{pointerEvents:"none"}},L):L),s&&(0,e.jsx)("div",{className:(0,e.classNames)("avatar-label text-truncate",{active:w})},i))}));var v=r(74758),g=r(55339),h=r.n(g);const m=a=>{var o,n;const{markerEnabled:i,onMarkerClick:r,widgetid:l,showLabel:s,showTooltip:c,labelGrowth:d,avatar:u,onClick:v,active:g,editDraggable:m,className:f}=a,b=e.ReactRedux.useSelector((e=>{var t;return null===(t=e.appConfig.widgets)||void 0===t?void 0:t[l]}));return b?e.React.createElement(p,{"data-widgetid":l,className:`widget-avatar-card ${f}`,showLabel:s,showTooltip:c,labelGrowth:d,avatar:u,label:b.label,icon:b.icon,autoFlip:null===(n=null===(o=null==b?void 0:b.manifest)||void 0===o?void 0:o.properties)||void 0===n?void 0:n.flipIcon,marker:i?h():"",active:g,editDraggable:m,onMarkerClick:r,onClick:v}):e.React.createElement(t.Loading,null)},f=(e,t,a)=>{let o=e,n=t;return n-o>a?n=e+a:n-o<a&&(o=0,n=o+a),[o,n]};const b=[],w=e.React.forwardRef(((a,o)=>{const{scrollRef:n,className:i,lists:r=b,createItem:l,vertical:s,itemLength:c,space:d,onChange:u,autoHideArrow:p,minLength:v=c,autoScrollEnd:g,autoSize:h,onScrollStatusChange:m}=a,w=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(a[o[n]]=e[o[n]])}return a}(a,["scrollRef","className","lists","createItem","vertical","itemLength","space","onChange","autoHideArrow","minLength","autoScrollEnd","autoSize","onScrollStatusChange"]),y=t.hooks.useTranslate(),[S,R]=t.hooks.useForwardRef(o),{start:x,end:I,disablePrevious:O,disableNext:j,hideArrow:C,scroll:k}=(a=>{var o;const{rootRef:n,lists:i,itemLength:r,autoSize:l,vertical:s,space:c,minLength:d,autoScrollEnd:u}=a,p=null!==(o=null==i?void 0:i.length)&&void 0!==o?o:0,v=t.hooks.useRefValue(l),g=((a,o,n=0,i=n,r)=>{let l=((a,o=500,n=!1,i)=>{var r,l;const s=n?"clientHeight":"clientWidth",[c,d]=e.React.useState(null!==(l=null===(r=a.current)||void 0===r?void 0:r[s])&&void 0!==l?l:0),u=!i&&!window.jimuConfig.isInBuilder,p=t.hooks.useLatest((()=>{const e=a.current[s]||0;d(e)})),v=e.React.useMemo((()=>e.lodash.debounce((()=>p.current()),o)),[]);return e.React.useEffect((()=>{if(u)return;const e=a.current;e&&v();const t=new ResizeObserver(v);return t.observe(e),()=>{t.disconnect(),v.cancel()}}),[a,v,u]),c})(a,500,o,r);return l+=n,l=Math.max(l,i),l})(n,s,c,d,!l),h=e.React.useMemo((()=>v.current?p:Math.floor(g/r)),[v,p,r,g]),[m,b]=e.React.useState(f(0,0,h)[0]),[w,y]=e.React.useState(f(0,0,h)[1]),S=t.hooks.useRefValue(m),R=t.hooks.useRefValue(w),x=w-m>=p,I=0===m,O=w===p;e.React.useEffect((()=>{if(0===g)return;const[e,t]=f(R.current,S.current,h);b(e),y(t)}),[h,g,R,S]);const j=t.hooks.useEventCallback(((e,t=!0)=>{const a=t?1:h;let o=0,n=0;e?(o=m-a,o<0?(o=0,n=o+h):n=w-a):(n=w+a,n>p?(n=p,o=n-h):o=m+a),b(o),y(n)})),C=e.React.useRef([]),k=t.hooks.useEventCallback((()=>{const e=p>0&&C.current.length>0&&i[i.length-1]!==C.current[C.current.length-1];if(u&&e&&C.current.length>p){let e=0,t=0;t=p,e=t-h,e=Math.max(0,e),b(e),y(t)}}));return e.React.useEffect((()=>{k(),C.current=i}),[i,k]),{start:m,end:w,disablePrevious:I,disableNext:O,hideArrow:x,scroll:j}})({rootRef:S,lists:r,itemLength:c,autoSize:h,vertical:s,space:d,minLength:v,autoScrollEnd:g}),M=h?r:r.slice(x,I),E=!!h||C,L=((t,a,o,n,i)=>e.css`
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
      min-width: ${e.polished.rem(o)};
      max-height: ${n?"100%":"calc(100% - 20px)"};
      max-width: ${n?"100%":"calc(100% - 20px)"};
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
`)(s,d,v,h,E);return e.React.useEffect((()=>{null==m||m(E,O,j)}),[j,O,E,m]),e.React.useEffect((()=>{t.utils.setRef(n,k)}),[k,n]),(0,e.jsx)(t.NavButtonGroup,Object.assign({},w,{css:L,type:"tertiary",vertical:s,onChange:e=>{null==u||u(e),k(e,!0)},disablePrevious:O,disableNext:j,previousAriaLabel:y("previous"),nextAriaLabel:y("next"),className:(0,e.classNames)("scroll-list",i)}),(0,e.jsx)("div",{className:"root scroll-list-root",ref:R},M.map((e=>l(e,"scroll-list-item")))))}));r(25164),(0,r(34796).styled)("div")`
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
`,(e=>{const t=[];for(;e>0;)t.push(e),e--})(3);function y(a){const{widgetId:o,canCrossLayoutBoundary:n,className:i}=a,r=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(a[o[n]]=e[o[n]])}return a}(a,["widgetId","canCrossLayoutBoundary","className"]),l=t.hooks.useCancelablePromiseMaker(),[s,c]=e.React.useState(null),[d,u]=e.React.useState("");e.React.useEffect((()=>{const t=l((t=>{var a,o;if(t)return(null===(o=null===(a=(0,e.getAppStore)().getState().widgetsRuntimeInfo)||void 0===a?void 0:a[t])||void 0===o?void 0:o.isClassLoaded)?Promise.resolve(e.WidgetManager.getInstance().getWidgetClass(t)):e.WidgetManager.getInstance().loadWidgetClass(t)})(o));t.then((e=>{c(e)}),(e=>{var t;u(null!==(t=null==e?void 0:e.message)&&void 0!==t?t:e)}))}),[l,o]);const p=e.React.useCallback((()=>{var t,a;d||window.jimuConfig.isBuilder||(null===(a=null===(t=(0,e.getAppStore)().getState().widgetsRuntimeInfo)||void 0===t?void 0:t[o])||void 0===a?void 0:a.state)===e.WidgetState.Active||(0,e.getAppStore)().dispatch(e.appActions.activateWidget(o))}),[d,o]),v=(0,e.classNames)("widget-renderer w-100 h-100",i),g=(t=>e.React.useMemo((()=>e.css`
      overflow: ${t?"visible":"hidden"};
      position: relative;
      .widget-content {
        position: relative;
        height: 100%;
        width: 100%;
        z-index: 0;
      }
  `),[t]))(n);return(0,e.jsx)("div",Object.assign({css:g,className:v,onMouseDownCapture:p,"data-widgetid":o},r),(0,e.jsx)("div",{className:"widget-content p-1"},d,!d&&s&&(0,e.jsx)(e.ErrorBoundary,null,(0,e.jsx)(s,{widgetId:o})),!d&&!s&&(0,e.jsx)(t.Loading,null)))}const S=(0,e.Immutable)({}),R=a=>{var o,n,i;const{containerMapId:r,onClose:l,widgets:s=S}=a,c=null!==(o=Object.keys(s).find((t=>s[t].state===e.WidgetState.Opened)))&&void 0!==o?o:"",d=null===(i=null===(n=(0,e.getAppStore)().getState().appConfig.widgets)||void 0===n?void 0:n[c])||void 0===i?void 0:i.label;return e.React.createElement(t.MobilePanel,{className:(0,e.classNames)({"d-none":!c}),mapWidgetId:r,title:d,open:!!c,keepMount:!0,toggle:e=>{null==e||e.stopPropagation(),null==e||e.nativeEvent.stopImmediatePropagation(),null==l||l(c)}},Object.entries(s).map((([t,a])=>{if(void 0===a.state)return null;const o=a.state===e.WidgetState.Opened;return e.React.createElement(y,{widgetId:t,key:t,className:(0,e.classNames)({"d-none":!o})})})))},x=e=>document.querySelector(`.widget-controller .avatar-card[data-widgetid='${e}']`),I=(0,e.Immutable)({}),O=a=>{var i;const{widgets:r=I,root:l,placement:s,sizes:c,onClose:d}=a,u=e.ReactRedux.useSelector((e=>e.appConfig.widgets)),p=null!==(i=Object.keys(r).find((t=>r[t].state===e.WidgetState.Opened)))&&void 0!==i?i:"",[v,g]=e.React.useState((()=>{var e;return null!==(e=x(p))&&void 0!==e?e:l}));e.React.useEffect((()=>{var e;g(null!==(e=x(p))&&void 0!==e?e:l)}),[p]);const[h,m]=e.React.useState(c),f=(e,t)=>{t.stopPropagation(),null==d||d(e);const a=null==v?void 0:v.querySelector("button");null==a||a.focus()};return e.React.createElement(e.React.Fragment,null,Object.entries(r).map((([a,i])=>{var r,l;if(void 0===i.state)return null;const c=i.state===e.WidgetState.Opened,d=null!==(r=h[a])&&void 0!==r?r:n,p=null===(l=null==u?void 0:u[a])||void 0===l?void 0:l.label;return e.React.createElement(t.Popper,{key:a,style:{maxWidth:"100vw"},className:(0,e.classNames)({"d-none":!c},"single-widget-launcher"),headerTitle:p,minSize:o,dragBounds:"body",defaultSize:d,onResize:e=>{return t=a,o=e,void m((e=>e.set(t,o)));var t,o},onHeaderClose:e=>f(a,e),floating:!0,open:!0,autoFocus:c,reference:v,toggle:e=>((e,t)=>{"Escape"===(null==t?void 0:t.key)&&f(e,t)})(a,e),placement:s},e.React.createElement(y,{widgetId:a}))})))};var j;!function(e){e.Stack="STACK",e.SideBySide="SIDEBYSIDE"}(j||(j={}));const C=()=>document.body.getBoundingClientRect(),k=(0,e.Immutable)({}),M=a=>{const{mode:o,start:i,spaceX:r,spaceY:l,sizes:s,widgets:c=k,onClose:d}=a,u=e.ReactRedux.useSelector((e=>e.appConfig.widgets)),[p,v]=e.React.useState(s),g=e.React.useMemo((()=>((t,a)=>{let o=(0,e.Immutable)({});return Object.keys(t).forEach((e=>{o=o.set(e,a[e]||n)})),o})(c,p)),[p,c]),h=e=>{const t=x(e),a=null==t?void 0:t.querySelector("button");null==a||a.focus()},m=((a,o,n,i,r)=>{const[l,s]=e.React.useState((()=>C())),[c,d]=e.React.useState([n]),u=e.React.useRef(0);e.React.useEffect((()=>{const e=()=>{const e=C();s(e)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]);const p=(e,t)=>e.right>=t.right||e.left<=t.left,v=(e,t)=>e.bottom>=t.bottom||e.top<=t.top,g=t.hooks.useEventCallback((e=>{if(u.current++,u.current>7)return console.warn(`Number of cycles: ${u.current}.You may have opened too many panels, and now there is not enough space for them to be placed without overstepping and blocking`),e;const t=((e,t)=>!(!e||!t)&&(p(e,t)||v(e,t)))(e,l);if(!t)return e;const{width:o,height:i}=e;let{left:s,top:c,right:d,bottom:h}=e;if(t){const e=p({left:s,top:c,right:d,bottom:h,width:o,height:i},l),t=v({left:s,top:c,right:d,bottom:h,width:o,height:i},l);e&&(s=a===j.SideBySide?n.x:l.right-o),t||a!==j.SideBySide||(c+=r),d=s+o,h=c+i}return g({left:s,top:c,right:d,bottom:h,width:o,height:i})}));return e.React.useEffect((()=>{const e=[];let t={width:0,height:0};Object.keys(o).forEach(((l,s)=>{const c=o[l],d=0!==s?e[s-1]:n;let{x:p,y:v}=d;if(a===j.SideBySide){const{width:e}=t;p+=e,p+=0!==s?i:0}else a===j.Stack&&(p+=0!==s?i:0,v+=0!==s?r:0);const h={left:p,top:v,right:p+c.width,bottom:v+c.height,width:c.width,height:c.height},{left:m,top:f}=g(h);u.current>7?(p=d.x,v=d.y):(p=m,v=f),u.current=0,e.push({x:p,y:v}),t=c})),d(e)}),[a,n,i,r,l.width,l.height,g,o]),c})(o,g,i,r,l);return e.React.createElement(e.React.Fragment,null,Object.entries(c).map((([a,o],n)=>{var i;if(void 0===o.state)return null;const r=o.state===e.WidgetState.Opened,l=m[n];if(!l)return null;const s=g[a],c=null===(i=null==u?void 0:u[a])||void 0===i?void 0:i.label;return e.React.createElement(t.FloatingPanel,{key:a,style:{maxWidth:"100vw"},headerTitle:c,defaultPosition:l,defaultSize:s,className:(0,e.classNames)({"d-none":!r},"multiple-widget-launcher"),showHeaderClose:!0,autoFocus:r,dragBounds:"body",onResize:e=>{return t=a,o=e,void v(p.set(t,o));var t,o},onLeave:()=>h(a),onHeaderClose:e=>((e,t)=>{null==t||t.stopPropagation(),null==d||d(e),h(e)})(a,e)},e.React.createElement(y,{widgetId:a}))})))},E=t=>{const a=(0,e.getAppStore)().getState().appConfig.sections,o=Object.values(null!=a?a:{}).find((e=>{var a;return null===(a=e.views)||void 0===a?void 0:a.includes(t)}));return null==o?void 0:o.id},L=a=>{var o,r,l,c,u,p,g,h,f,b,y,S,I,j,C;const{id:k,config:L,version:A,autoSize:$}=a,N=null===(o=L.behavior)||void 0===o?void 0:o.onlyOpenOne,z=null===(r=L.behavior)||void 0===r?void 0:r.openStarts,T=null===(l=L.behavior)||void 0===l?void 0:l.size,P=null===(c=L.behavior)||void 0===c?void 0:c.vertical,W=null===(u=L.behavior)||void 0===u?void 0:u.displayType,B=null===(p=null==L?void 0:L.appearance)||void 0===p?void 0:p.card,V=((e,t)=>{const a=null==e?void 0:e.showLabel,o=null==e?void 0:e.labelGrowth,n=null==e?void 0:e.avatar.size,i=null==e?void 0:e.avatar.shape;return d(n,a,i)+t+o})(null===(g=null==L?void 0:L.appearance)||void 0===g?void 0:g.card,null===(h=null==L?void 0:L.appearance)||void 0===h?void 0:h.space),U=null===(y=null===(b=null===(f=(0,e.getAppStore)())||void 0===f?void 0:f.getState())||void 0===b?void 0:b.appContext)||void 0===y?void 0:y.isRTL,H=null===(j=null===(I=null===(S=(0,e.getAppStore)())||void 0===S?void 0:S.getState())||void 0===I?void 0:I.appContext)||void 0===j?void 0:j.isInBuilder,Z=e.React.useMemo((()=>U?Object.assign(Object.assign({},i),{x:document.body.clientWidth-n.width-i.x}):i),[U]),F=e.React.useMemo((()=>U?Object.assign(Object.assign({},s),{x:-s.x}):s),[U]),G=P?"right-start":"bottom",D=(t=>{const a=e.ReactRedux.useSelector((e=>{var t;return null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.sectionNavInfos}));return((t,a)=>{const o=(t=>{const a=(0,e.getAppStore)().getState().appConfig.sections,o=t?Object.values(t).map((e=>e.currentViewId)):[],n=o.map(E),i=Object.values(null!=a?a:{}).map((e=>{var t;if(!n.includes(e.id))return null===(t=e.views)||void 0===t?void 0:t[0]})).filter((e=>!!e)),r=o;return i.forEach((e=>{o.includes(e)||r.push(e)})),r})(t),n=(0,e.getAppStore)().getState().browserSizeMode,i=(0,e.getAppStore)().getState().appConfig,r=v.searchUtils.getContentContainerInfo(i,a,e.LayoutItemType.Widget,n);let l=!0;if(!r)return l;if(r.type===e.ContainerType.View)if(o.includes(r.id)){const t=r.id,a=E(t),s=v.searchUtils.getContentContainerInfo(i,a,e.LayoutItemType.Section,n);s&&s.type===e.ContainerType.View&&(o.includes(s.id)||(l=!1))}else l=!1;return l})(a,t)})(k),Y=(t=>e.ReactRedux.useSelector((a=>{var o;const n=a.appConfig,i=a.browserSizeMode,r=v.searchUtils.getParentWidgetIdOfContent(n,t,e.LayoutItemType.Widget,i),l=n.widgets[r];return"arcgis-map"===(null===(o=null==l?void 0:l.manifest)||void 0===o?void 0:o.name)?l.id:""})))(k),_=t.hooks.useCheckSmallBrowserSzieMode(),q=e.ReactRedux.useSelector((e=>e.appRuntimeInfo.currentPageId)),K=e.React.useRef(null),X=((t,a)=>{const o=e.ReactRedux.useSelector((e=>e.widgetsRuntimeInfo)),n=((t,a)=>e.ReactRedux.useSelector((e=>{var o,n,i,r;const l=null===(i=null===(n=null===(o=e.appConfig.widgets)||void 0===o?void 0:o[t])||void 0===n?void 0:n.layouts)||void 0===i?void 0:i[a],s=e.browserSizeMode,c=e.appConfig.mainSizeMode,d=v.searchUtils.findLayoutId(l,s,c);return null===(r=e.appConfig.layouts)||void 0===r?void 0:r[d]})))(t,"controller"),i=(e=>{const t=(e=>{var t,a,o;let n=(null!==(o=null===(a=null===(t=null==e?void 0:e.order)||void 0===t?void 0:t.asMutable)||void 0===a?void 0:a.call(t))&&void 0!==o?o:[]).map((t=>{var a;return null===(a=e.content)||void 0===a?void 0:a[t]}));return n=n.filter((e=>e&&e.id&&e.widgetId&&!e.isPending)),n.map((e=>e.id))})(e);return t.map((t=>{var a,o;return null===(o=null===(a=e.content)||void 0===a?void 0:a[t])||void 0===o?void 0:o.widgetId}))})(n);return e.React.useMemo((()=>{const t={};return i.forEach((a=>{var n;const i=null!==(n=null==o?void 0:o[a])&&void 0!==n?n:{isClassLoaded:!1,state:e.WidgetState.Closed};t[a]=(0,e.Immutable)(i)})),(0,e.Immutable)(t)}),[i,o])})(k),J=Object.keys(X),Q=J.filter((t=>X[t].state===e.WidgetState.Opened)),ee=e.React.useCallback((t=>{var a;const o=null===(a=t.currentTarget.dataset)||void 0===a?void 0:a.widgetid;o&&(_||N?((0,e.getAppStore)().dispatch(e.appActions.closeWidgets(Q)),Q.includes(o)||(0,e.getAppStore)().dispatch(e.appActions.openWidget(o))):Q.includes(o)?(0,e.getAppStore)().dispatch(e.appActions.closeWidget(o)):(0,e.getAppStore)().dispatch(e.appActions.openWidget(o)))}),[_,N,Q]),te=t=>{if(!t)return;(0,e.getAppStore)().dispatch(e.appActions.closeWidget(t));const a=x(t);null==a||a.focus()};t.hooks.useUpdateEffect((()=>{(0,e.getAppStore)().dispatch(e.appActions.closeWidgets(Q))}),[A,q]),t.hooks.useUpdateEffect((()=>{D||(0,e.getAppStore)().dispatch(e.appActions.closeWidgets(Q))}),[D]),e.React.useEffect((()=>{!H&&(null==z?void 0:z.length)&&D&&setTimeout((()=>{(0,e.getAppStore)().dispatch(e.appActions.openWidgets(z))}),1e3)}),[]);const ae=e.React.useCallback(((t,a)=>{const o=Q.includes(t);return e.React.createElement(m,Object.assign({},B,{key:t,className:`${a} layout-item`,widgetid:t,markerEnabled:!1,active:o,onClick:ee}))}),[B,ee,Q]);return e.React.createElement("div",{className:"controller-runtime w-100 h-100"},_&&e.React.createElement(R,{containerMapId:Y,widgets:X,onClose:te}),!_&&N&&e.React.createElement(O,{sizes:T,root:K.current,placement:G,widgets:X,onClose:te}),!_&&!N&&e.React.createElement(M,{sizes:T,mode:W,start:Z,spaceX:F.x,spaceY:F.y,widgets:X,onClose:te}),e.React.createElement(w,{ref:K,className:"runtime--scroll-list",vertical:P,itemLength:V,space:null===(C=L.appearance)||void 0===C?void 0:C.space,autoHideArrow:!0,autoSize:$,lists:J,createItem:ae}))},A={behavior:{onlyOpenOne:!0,openStarts:[],displayType:"STACK",vertical:!1,size:{}},appearance:{space:0,advanced:!1,card:{showLabel:!1,labelGrowth:10,avatar:{type:"primary",size:"default",shape:"circle"}}}};class $ extends e.BaseVersionManager{constructor(){super(...arguments),this.versions=[{version:"1.0.0",description:"Version manager for release 1.0.0",upgrader:e=>{if(!e)return A;if(e.behavior&&e.appearance)return e;{let a=e;return e.behavior||(a=a.setIn(["behavior","openStarts"],[]),a=a.setIn(["behavior","onlyOpenOne"],e.onlyOpenOne),a=a.setIn(["behavior","displayType"],e.displayType),a=a.setIn(["behavior","vertical"],e.vertical),a=a.setIn(["behavior","size"],e.size),a=a.without(["onlyOpenOne","displayType","size"])),e.appearance||(a=a.setIn(["appearance","advanced"],!1),e.vertical?a=a.setIn(["appearance","space"],e.space):(a=a.setIn(["appearance","space"],0),a=a.setIn(["appearance","card","labelGrowth"],e.space)),a=a.setIn(["appearance","card","showLabel"],e.showLabel),a=a.setIn(["appearance","card","avatar","size"],"SMALL"===(t=e.iconSize)?"sm":"MEDIUM"===t?"default":"LARGE"===t?"lg":t),a=a.setIn(["appearance","card","avatar","shape"],e.iconStyle),a=a.setIn(["appearance","card","avatar","type"],"primary"),a=a.without(["space","showLabel","iconSize","iconStyle","vertical"])),a}var t}},{version:"1.1.0",description:"Version manager for release 1.1.0",upgrader:e=>{var t,a;if(!e)return A;let o=null===(t=null==e?void 0:e.appearance)||void 0===t?void 0:t.card;const n=null==o?void 0:o.variants,i=null===(a=null==o?void 0:o.avatar)||void 0===a?void 0:a.type;let r=e;if(n){const e=((e,t="primary")=>null==e?void 0:e[t])(n,i);o=null==o?void 0:o.set("variant",e).without("variants"),r=r.setIn(["appearance","card"],o)}return r}},{version:"1.6.0",description:"Version manager for release 1.6.0",upgrader:e=>{var t;if(!e)return A;let a=null===(t=null==e?void 0:e.appearance)||void 0===t?void 0:t.card,o=e;return a&&(a=a.set("showTooltip",!0),o=o.setIn(["appearance","card"],a)),o}}]}}const N=new $,z=o=>{var n,i,r,l;const{builderSupportModules:s,id:c,config:d,onInitResizeHandler:u,autoWidth:p,autoHeight:v}=o,g=null===(n=d.behavior)||void 0===n?void 0:n.onlyOpenOne,h=null===(i=d.behavior)||void 0===i?void 0:i.displayType,m=null===(r=null==d?void 0:d.behavior)||void 0===r?void 0:r.vertical,f=null==d?void 0:d.appearance.advanced,b=null===(l=null==d?void 0:d.appearance)||void 0===l?void 0:l.card.variant,w=m?v:p,y=e.ReactRedux.useSelector((e=>e.appContext.isInBuilder)),S=e.ReactRedux.useSelector((e=>e.appRuntimeInfo.appMode)),R=e.ReactRedux.useSelector((e=>e.browserSizeMode));e.React.useEffect((()=>{null==u||u(null,null,(()=>{j((e=>e+1))}))}),[u]);const x=y&&S!==e.AppMode.Run,I=x&&s.widgetModules.Builder,[O,j]=e.React.useState(0);t.hooks.useUpdateEffect((()=>{j((e=>e+1))}),[g,h,S,R]);const C=((t,o,n)=>{const i=t?0:a.sm,r=t?0:a.sm,l=o?"5px":0,s=n?"5px":0;return e.React.useMemo((()=>e.css`
      overflow: hidden;
      white-space: nowrap;
      .controller-container {
        width: 100%;
        height: 100%;
        padding: ${s} ${l};
        min-width:  ${i}px;
        min-height: ${r}px;
      }
    `),[l,s,i,r])})(w,p,v),k=((a,o)=>{const n=null==a?void 0:a.default,i=null==a?void 0:a.active,r=null==a?void 0:a.hover;return e.React.useMemo((()=>o?e.css`
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
    `:e.css``),[o,n,i,r])})(b,f);return(0,e.jsx)("div",{className:"widget-controller jimu-widget shadow rw-controller",css:[C,k]},(0,e.jsx)("div",{className:"controller-container"},!x&&(0,e.jsx)(L,{id:c,version:O,config:d,autoSize:w}),x&&I&&(0,e.jsx)(I,{id:c,version:O,config:d,autoSize:w})))};z.versionManager=N;const T=z})(),l})())}}}));