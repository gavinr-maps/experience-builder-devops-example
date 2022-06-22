System.register(["jimu-core","jimu-ui","jimu-layouts/layout-runtime","jimu-theme"],(function(e,t){var a={},o={},n={},i={};return{setters:[function(e){a.AppMode=e.AppMode,a.BaseVersionManager=e.BaseVersionManager,a.ContainerType=e.ContainerType,a.ErrorBoundary=e.ErrorBoundary,a.Immutable=e.Immutable,a.LayoutItemType=e.LayoutItemType,a.React=e.React,a.ReactRedux=e.ReactRedux,a.WidgetManager=e.WidgetManager,a.WidgetState=e.WidgetState,a.appActions=e.appActions,a.classNames=e.classNames,a.css=e.css,a.getAppStore=e.getAppStore,a.jsx=e.jsx,a.lodash=e.lodash,a.polished=e.polished},function(e){o.Button=e.Button,o.FloatingPanel=e.FloatingPanel,o.Icon=e.Icon,o.Loading=e.Loading,o.MobilePanel=e.MobilePanel,o.NavButtonGroup=e.NavButtonGroup,o.Popper=e.Popper,o.Tooltip=e.Tooltip,o.hooks=e.hooks,o.styleUtils=e.styleUtils,o.utils=e.utils},function(e){n.searchUtils=e.searchUtils},function(e){i.styled=e.styled}],execute:function(){e((()=>{var e={25164:e=>{e.exports='<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h2v1H4V4ZM8 4h2v1H8V4ZM14 4h-2v1h2V4ZM15 4h1v2h-1V4ZM16 8h-1v2h1V8ZM4 14h1v2H4v-2ZM5 6H4v2h1V6ZM4 10h1v2H4v-2ZM16 12h-1v2h1v-2ZM16 15v1h-2v-1h2ZM12 15h-2v1h2v-1ZM6 15h2v1H6v-1Z" fill="#000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M18 0a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h16Zm0 1H2a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z" fill="#000"></path></svg>'},55339:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m8.745 8 6.1 6.1a.527.527 0 1 1-.745.746L8 8.746l-6.1 6.1a.527.527 0 1 1-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 0 1 .746-.746l6.1 6.1 6.1-6.1a.527.527 0 0 1 .746.746L8.746 8Z" fill="#000"></path></svg>'},48891:e=>{"use strict";e.exports=a},74758:e=>{"use strict";e.exports=n},34796:e=>{"use strict";e.exports=i},30726:e=>{"use strict";e.exports=o}},t={};function r(a){var o=t[a];if(void 0!==o)return o.exports;var n=t[a]={exports:{}};return e[a](n,n.exports,r),n.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="";var l={};return r.p=window.jimuConfig.baseUrl,(()=>{"use strict";r.r(l),r.d(l,{default:()=>z});var e=r(48891),t=r(30726);const a={sm:24,default:32,lg:48},o={width:150,height:120},n={width:300,height:300},i={x:70,y:70},s={x:30,y:30};var c=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(a[o[n]]=e[o[n]])}return a};const d=(e,t,o)=>{let n=a[e];return t&&(n+=21),n+=2*u(e,o),n},u=(e,t)=>"circle"===t?"sm"===e?4:"default"===e?2:"lg"===e?0:void 0:6,p=e.React.forwardRef(((a,o)=>{var n;const{label:i,className:r,title:l,showLabel:s,showTooltip:p=!0,labelGrowth:v=0,icon:g,marker:h,onMarkerClick:m,avatar:f,autoFlip:b,active:y,editDraggable:w,disabled:S}=a,R=c(a,["label","className","title","showLabel","showTooltip","labelGrowth","icon","marker","onMarkerClick","avatar","autoFlip","active","editDraggable","disabled"]),x=f||{},{shape:O,style:I}=x,j=c(x,["shape","style"]),C=null==j?void 0:j.size,[M,k]=e.React.useState(null),E=((t,a,o,n)=>e.React.useMemo((()=>{const i=d(t,a,o),r=i+n,l=u(t,o);return e.css`
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
    `}),[t,a,o,n]))(C,s,O,v),A=(0,e.jsx)(t.Button,Object.assign({icon:!0,active:y,disabled:S,className:"avatar-button",ref:o},j,{style:Object.assign({borderRadius:"circle"===O?"50%":void 0},I)}),(0,e.jsx)(t.Icon,{color:"string"!=typeof g&&(null===(n=g.properties)||void 0===n?void 0:n.color),icon:"string"!=typeof g?g.svg:g,autoFlip:b}));return(0,e.jsx)("div",Object.assign({},R,{className:(0,e.classNames)("avatar-card",`${r} avatar-card`),css:E}),(0,e.jsx)("div",{className:(0,e.classNames)({"no-drag-action":!w},"avatar tool-drag-handler"),onMouseEnter:()=>{k(!0)},onMouseLeave:()=>{k(!1)}},h&&M&&(0,e.jsx)(t.Button,{className:"marker",size:"sm",icon:!0,onClick:m},(0,e.jsx)(t.Icon,{size:8,icon:h})),p?(0,e.jsx)(t.Tooltip,{title:l||i,style:{pointerEvents:"none"}},A):A),s&&(0,e.jsx)("div",{className:(0,e.classNames)("avatar-label text-truncate",{active:y})},i))}));var v=r(74758),g=r(55339),h=r.n(g);const m=a=>{var o,n;const{markerEnabled:i,onMarkerClick:r,widgetid:l,showLabel:s,showTooltip:c,labelGrowth:d,avatar:u,onClick:v,active:g,editDraggable:m,className:f}=a,b=e.ReactRedux.useSelector((e=>{var t;return null===(t=e.appConfig.widgets)||void 0===t?void 0:t[l]}));return b?e.React.createElement(p,{"data-widgetid":l,className:`widget-avatar-card ${f}`,showLabel:s,showTooltip:c,labelGrowth:d,avatar:u,label:b.label,icon:b.icon,autoFlip:null===(n=null===(o=null==b?void 0:b.manifest)||void 0===o?void 0:o.properties)||void 0===n?void 0:n.flipIcon,marker:i?h():"",active:g,editDraggable:m,onMarkerClick:r,onClick:v}):e.React.createElement(t.Loading,null)};const f=(e,t,a)=>{let o=e,n=t;return n-o>a?n=e+a:n-o<a&&(o=0,n=o+a),[o,n]},b=[],y=e.React.forwardRef(((a,o)=>{var n;const{scrollRef:i,className:r,lists:l=b,createItem:s,vertical:c,itemLength:d,space:u,onChange:p,autoHideArrow:v,minLength:g=d,autoScrollEnd:h,onScrollStatusChange:m}=a,y=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(a[o[n]]=e[o[n]])}return a}(a,["scrollRef","className","lists","createItem","vertical","itemLength","space","onChange","autoHideArrow","minLength","autoScrollEnd","onScrollStatusChange"]),w=t.hooks.useTranslate(),S=null!==(n=null==l?void 0:l.length)&&void 0!==n?n:0,R=((t,a,o)=>e.css`
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
`)(c,u,g),[x,O]=t.hooks.useForwardRef(o),I=((a,o,n=0,i=n)=>{let r=((a,o=500,n)=>{var i,r;const l=n?"clientHeight":"clientWidth",[s,c]=e.React.useState(null!==(r=null===(i=a.current)||void 0===i?void 0:i[l])&&void 0!==r?r:0),d=t.hooks.useLatest((()=>{const e=a.current[l]||0;c(e)})),u=e.React.useMemo((()=>e.lodash.debounce((()=>d.current()),o)),[]);return e.React.useEffect((()=>{const e=a.current;e&&u();const t=new ResizeObserver(u);return t.observe(e),()=>{t.disconnect(),u.cancel()}}),[a,u]),s})(a,500,o);return r+=n,r=Math.max(r,i),r})(x,c,u,g),j=e.React.useMemo((()=>Math.floor(I/d)),[d,I]),[C,M]=e.React.useState(f(0,0,j)[0]),[k,E]=e.React.useState(f(0,0,j)[1]),A=t.hooks.useRefValue(k),L=t.hooks.useRefValue(C),[N,$]=e.React.useState(!0),[T,z]=e.React.useState(!1),[P,W]=e.React.useState(!0),B=e.React.useMemo((()=>({visibility:P?"hidden":"visible"})),[P]);e.React.useEffect((()=>{null==m||m(P,N,T)}),[T,N,P,m]),e.React.useEffect((()=>{if(0===I)return;const[e,t]=f(L.current,A.current,j);M(e),E(t)}),[j,L,A,I]);const U=e.React.useRef([]),V=t.hooks.useEventCallback((()=>{const e=l.length>0&&U.current.length>0&&l[l.length-1]!==U.current[U.current.length-1];if(h&&e&&U.current.length>S){let e=0,t=0;t=S,e=t-j,e=Math.max(0,e),M(e),E(t)}}));e.React.useEffect((()=>{V(),U.current=l}),[l,V]);const H=t.hooks.useEventCallback(((e,t=!0)=>{const a=t?1:j;let o=0,n=0;e?(o=C-a,o<0?(o=0,n=o+j):n=k-a):(n=k+a,n>S?(n=S,o=n-j):o=C+a),M(o),E(n)}));return e.React.useEffect((()=>{t.utils.setRef(i,H)}),[H,i]),e.React.useEffect((()=>{if(0===I)return;const e=k-C>=S,t=k===S;$(0===C),z(t),W(e)}),[C,k,S,I]),(0,e.jsx)(t.NavButtonGroup,Object.assign({},y,{css:R,type:"tertiary",vertical:c,onChange:e=>{null==p||p(e),H(e,!0)},disablePrevious:N,disableNext:T,previousAriaLabel:w("previous"),nextAriaLabel:w("next"),previousStyle:B,nextStyle:B,className:(0,e.classNames)("scroll-list",r)}),(0,e.jsx)("div",{className:"root scroll-list-root",ref:O},l.slice(C,k).map((e=>s(e,"scroll-list-item")))))}));r(25164),(0,r(34796).styled)("div")`
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
`,(e=>{const t=[];for(;e>0;)t.push(e),e--})(3);function w(a){const{widgetId:o,canCrossLayoutBoundary:n,className:i}=a,r=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(a[o[n]]=e[o[n]])}return a}(a,["widgetId","canCrossLayoutBoundary","className"]),l=t.hooks.useCancelablePromiseMaker(),[s,c]=e.React.useState(null),[d,u]=e.React.useState("");e.React.useEffect((()=>{const t=l((t=>{var a,o;if(t)return(null===(o=null===(a=(0,e.getAppStore)().getState().widgetsRuntimeInfo)||void 0===a?void 0:a[t])||void 0===o?void 0:o.isClassLoaded)?Promise.resolve(e.WidgetManager.getInstance().getWidgetClass(t)):e.WidgetManager.getInstance().loadWidgetClass(t)})(o));t.then((e=>{c(e)}),(e=>{var t;u(null!==(t=null==e?void 0:e.message)&&void 0!==t?t:e)}))}),[l,o]);const p=e.React.useCallback((()=>{var t,a;d||window.jimuConfig.isBuilder||(null===(a=null===(t=(0,e.getAppStore)().getState().widgetsRuntimeInfo)||void 0===t?void 0:t[o])||void 0===a?void 0:a.state)===e.WidgetState.Active||(0,e.getAppStore)().dispatch(e.appActions.activateWidget(o))}),[d,o]),v=(0,e.classNames)("widget-renderer w-100 h-100",i),g=(t=>e.React.useMemo((()=>e.css`
      overflow: ${t?"visible":"hidden"};
      position: relative;
      .widget-content {
        position: relative;
        height: 100%;
        width: 100%;
        z-index: 0;
      }
  `),[t]))(n);return(0,e.jsx)("div",Object.assign({css:g,className:v,onMouseDownCapture:p,"data-widgetid":o},r),(0,e.jsx)("div",{className:"widget-content p-1"},d,!d&&s&&(0,e.jsx)(e.ErrorBoundary,null,(0,e.jsx)(s,{widgetId:o})),!d&&!s&&(0,e.jsx)(t.Loading,null)))}const S=(0,e.Immutable)({}),R=a=>{var o,n,i;const{containerMapId:r,onClose:l,widgets:s=S}=a,c=null!==(o=Object.keys(s).find((t=>s[t].state===e.WidgetState.Opened)))&&void 0!==o?o:"",d=null===(i=null===(n=(0,e.getAppStore)().getState().appConfig.widgets)||void 0===n?void 0:n[c])||void 0===i?void 0:i.label;return e.React.createElement(t.MobilePanel,{className:(0,e.classNames)({"d-none":!c}),mapWidgetId:r,title:d,open:!0,toggle:e=>{null==e||e.stopPropagation(),null==e||e.nativeEvent.stopImmediatePropagation(),null==l||l(c)}},Object.entries(s).map((([t,a])=>{if(void 0===a.state)return null;const o=a.state===e.WidgetState.Opened;return e.React.createElement(w,{widgetId:t,key:t,className:(0,e.classNames)({"d-none":!o})})})))},x=e=>document.querySelector(`.widget-controller .avatar-card[data-widgetid='${e}']`),O=(0,e.Immutable)({}),I=a=>{var i;const{widgets:r=O,root:l,placement:s,sizes:c,onClose:d}=a,u=e.ReactRedux.useSelector((e=>e.appConfig.widgets)),p=null!==(i=Object.keys(r).find((t=>r[t].state===e.WidgetState.Opened)))&&void 0!==i?i:"",[v,g]=e.React.useState((()=>{var e;return null!==(e=x(p))&&void 0!==e?e:l}));e.React.useEffect((()=>{var e;g(null!==(e=x(p))&&void 0!==e?e:l)}),[p]);const[h,m]=e.React.useState(c),f=(e,t)=>{t.stopPropagation(),null==d||d(e);const a=null==v?void 0:v.querySelector("button");null==a||a.focus()};return e.React.createElement(e.React.Fragment,null,Object.entries(r).map((([a,i])=>{var r,l;if(void 0===i.state)return null;const c=i.state===e.WidgetState.Opened,d=null!==(r=h[a])&&void 0!==r?r:n,p=null===(l=null==u?void 0:u[a])||void 0===l?void 0:l.label;return e.React.createElement(t.Popper,{key:a,style:{maxWidth:"100vw"},className:(0,e.classNames)({"d-none":!c},"single-widget-launcher"),headerTitle:p,minSize:o,dragBounds:"body",defaultSize:d,onResize:e=>{return t=a,o=e,void m((e=>e.set(t,o)));var t,o},onHeaderClose:e=>f(a,e),floating:!0,open:!0,autoFocus:c,reference:v,toggle:e=>((e,t)=>{"Escape"===(null==t?void 0:t.key)&&f(e,t)})(a,e),placement:s},e.React.createElement(w,{widgetId:a}))})))};var j;!function(e){e.Stack="STACK",e.SideBySide="SIDEBYSIDE"}(j||(j={}));const C=()=>document.body.getBoundingClientRect(),M=(0,e.Immutable)({}),k=a=>{const{mode:o,start:i,spaceX:r,spaceY:l,sizes:s,widgets:c=M,onClose:d}=a,u=e.ReactRedux.useSelector((e=>e.appConfig.widgets)),[p,v]=e.React.useState(s),g=e.React.useMemo((()=>((t,a)=>{let o=(0,e.Immutable)({});return Object.keys(t).forEach((e=>{o=o.set(e,a[e]||n)})),o})(c,p)),[p,c]),h=e=>{const t=x(e),a=null==t?void 0:t.querySelector("button");null==a||a.focus()},m=((a,o,n,i,r)=>{const[l,s]=e.React.useState((()=>C())),[c,d]=e.React.useState([n]),u=e.React.useRef(0);e.React.useEffect((()=>{const e=()=>{const e=C();s(e)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]);const p=(e,t)=>e.right>=t.right||e.left<=t.left,v=(e,t)=>e.bottom>=t.bottom||e.top<=t.top,g=t.hooks.useEventCallback((e=>{if(u.current++,u.current>7)return console.warn(`Number of cycles: ${u.current}.You may have opened too many panels, and now there is not enough space for them to be placed without overstepping and blocking`),e;const t=((e,t)=>!(!e||!t)&&(p(e,t)||v(e,t)))(e,l);if(!t)return e;const{width:o,height:i}=e;let{left:s,top:c,right:d,bottom:h}=e;if(t){const e=p({left:s,top:c,right:d,bottom:h,width:o,height:i},l),t=v({left:s,top:c,right:d,bottom:h,width:o,height:i},l);e&&(s=a===j.SideBySide?n.x:l.right-o),t||a!==j.SideBySide||(c+=r),d=s+o,h=c+i}return g({left:s,top:c,right:d,bottom:h,width:o,height:i})}));return e.React.useEffect((()=>{const e=[];let t={width:0,height:0};Object.keys(o).forEach(((l,s)=>{const c=o[l],d=0!==s?e[s-1]:n;let{x:p,y:v}=d;if(a===j.SideBySide){const{width:e}=t;p+=e,p+=0!==s?i:0}else a===j.Stack&&(p+=0!==s?i:0,v+=0!==s?r:0);const h={left:p,top:v,right:p+c.width,bottom:v+c.height,width:c.width,height:c.height},{left:m,top:f}=g(h);u.current>7?(p=d.x,v=d.y):(p=m,v=f),u.current=0,e.push({x:p,y:v}),t=c})),d(e)}),[a,n,i,r,l.width,l.height,g,o]),c})(o,g,i,r,l);return e.React.createElement(e.React.Fragment,null,Object.entries(c).map((([a,o],n)=>{var i;if(void 0===o.state)return null;const r=o.state===e.WidgetState.Opened,l=m[n];if(!l)return null;const s=g[a],c=null===(i=null==u?void 0:u[a])||void 0===i?void 0:i.label;return e.React.createElement(t.FloatingPanel,{key:a,style:{maxWidth:"100vw"},headerTitle:c,defaultPosition:l,defaultSize:s,className:(0,e.classNames)({"d-none":!r},"multiple-widget-launcher"),showHeaderClose:!0,autoFocus:r,dragBounds:"body",onResize:e=>{return t=a,o=e,void v(p.set(t,o));var t,o},onLeave:()=>h(a),onHeaderClose:e=>((e,t)=>{null==t||t.stopPropagation(),null==d||d(e),h(e)})(a,e)},e.React.createElement(w,{widgetId:a}))})))},E=t=>{const a=(0,e.getAppStore)().getState().appConfig.sections,o=Object.values(null!=a?a:{}).find((e=>{var a;return null===(a=e.views)||void 0===a?void 0:a.includes(t)}));return null==o?void 0:o.id},A=a=>{var o,r,l,c,u,p,g,h,f,b,w,S,O,j,C;const{id:M,config:A,version:L}=a,N=null===(o=A.behavior)||void 0===o?void 0:o.onlyOpenOne,$=null===(r=A.behavior)||void 0===r?void 0:r.openStarts,T=null===(l=A.behavior)||void 0===l?void 0:l.size,z=null===(c=A.behavior)||void 0===c?void 0:c.vertical,P=null===(u=A.behavior)||void 0===u?void 0:u.displayType,W=null===(p=null==A?void 0:A.appearance)||void 0===p?void 0:p.card,B=((e,t)=>{const a=null==e?void 0:e.showLabel,o=null==e?void 0:e.labelGrowth,n=null==e?void 0:e.avatar.size,i=null==e?void 0:e.avatar.shape;return d(n,a,i)+t+o})(null===(g=null==A?void 0:A.appearance)||void 0===g?void 0:g.card,null===(h=null==A?void 0:A.appearance)||void 0===h?void 0:h.space),U=null===(w=null===(b=null===(f=(0,e.getAppStore)())||void 0===f?void 0:f.getState())||void 0===b?void 0:b.appContext)||void 0===w?void 0:w.isRTL,V=null===(j=null===(O=null===(S=(0,e.getAppStore)())||void 0===S?void 0:S.getState())||void 0===O?void 0:O.appContext)||void 0===j?void 0:j.isInBuilder,H=e.React.useMemo((()=>U?Object.assign(Object.assign({},i),{x:document.body.clientWidth-n.width-i.x}):i),[U]),Z=e.React.useMemo((()=>U?Object.assign(Object.assign({},s),{x:-s.x}):s),[U]),F=z?"right-start":"bottom",G=(t=>{const a=e.ReactRedux.useSelector((e=>{var t;return null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.sectionNavInfos}));return((t,a)=>{const o=(t=>{const a=(0,e.getAppStore)().getState().appConfig.sections,o=t?Object.values(t).map((e=>e.currentViewId)):[],n=o.map(E),i=Object.values(null!=a?a:{}).map((e=>{var t;if(!n.includes(e.id))return null===(t=e.views)||void 0===t?void 0:t[0]})).filter((e=>!!e)),r=o;return i.forEach((e=>{o.includes(e)||r.push(e)})),r})(t),n=(0,e.getAppStore)().getState().browserSizeMode,i=(0,e.getAppStore)().getState().appConfig,r=v.searchUtils.getContentContainerInfo(i,a,e.LayoutItemType.Widget,n);let l=!0;if(!r)return l;if(r.type===e.ContainerType.View)if(o.includes(r.id)){const t=r.id,a=E(t),s=v.searchUtils.getContentContainerInfo(i,a,e.LayoutItemType.Section,n);s&&s.type===e.ContainerType.View&&(o.includes(s.id)||(l=!1))}else l=!1;return l})(a,t)})(M),D=(t=>e.ReactRedux.useSelector((a=>{var o;const n=a.appConfig,i=a.browserSizeMode,r=v.searchUtils.getParentWidgetIdOfContent(n,t,e.LayoutItemType.Widget,i),l=n.widgets[r];return"arcgis-map"===(null===(o=null==l?void 0:l.manifest)||void 0===o?void 0:o.name)?l.id:""})))(M),Y=t.hooks.useCheckSmallBrowserSzieMode(),_=e.ReactRedux.useSelector((e=>e.appRuntimeInfo.currentPageId)),q=e.React.useRef(null),K=((t,a)=>{const o=e.ReactRedux.useSelector((e=>e.widgetsRuntimeInfo)),n=((t,a)=>e.ReactRedux.useSelector((e=>{var o,n,i,r;const l=null===(i=null===(n=null===(o=e.appConfig.widgets)||void 0===o?void 0:o[t])||void 0===n?void 0:n.layouts)||void 0===i?void 0:i[a],s=e.browserSizeMode,c=e.appConfig.mainSizeMode,d=v.searchUtils.findLayoutId(l,s,c);return null===(r=e.appConfig.layouts)||void 0===r?void 0:r[d]})))(t,"controller"),i=(e=>{const t=(e=>{var t,a,o;let n=(null!==(o=null===(a=null===(t=null==e?void 0:e.order)||void 0===t?void 0:t.asMutable)||void 0===a?void 0:a.call(t))&&void 0!==o?o:[]).map((t=>{var a;return null===(a=e.content)||void 0===a?void 0:a[t]}));return n=n.filter((e=>e&&e.id&&e.widgetId&&!e.isPending)),n.map((e=>e.id))})(e);return t.map((t=>{var a,o;return null===(o=null===(a=e.content)||void 0===a?void 0:a[t])||void 0===o?void 0:o.widgetId}))})(n);return e.React.useMemo((()=>{const t={};return i.forEach((a=>{var n;const i=null!==(n=null==o?void 0:o[a])&&void 0!==n?n:{isClassLoaded:!1,state:e.WidgetState.Closed};t[a]=(0,e.Immutable)(i)})),(0,e.Immutable)(t)}),[i,o])})(M),X=Object.keys(K),J=X.filter((t=>K[t].state===e.WidgetState.Opened)),Q=e.React.useCallback((t=>{var a;const o=null===(a=t.currentTarget.dataset)||void 0===a?void 0:a.widgetid;o&&(Y||N?((0,e.getAppStore)().dispatch(e.appActions.closeWidgets(J)),J.includes(o)||(0,e.getAppStore)().dispatch(e.appActions.openWidget(o))):J.includes(o)?(0,e.getAppStore)().dispatch(e.appActions.closeWidget(o)):(0,e.getAppStore)().dispatch(e.appActions.openWidget(o)))}),[Y,N,J]),ee=t=>{if(!t)return;(0,e.getAppStore)().dispatch(e.appActions.closeWidget(t));const a=x(t);null==a||a.focus()};t.hooks.useUpdateEffect((()=>{(0,e.getAppStore)().dispatch(e.appActions.closeWidgets(J))}),[L,_]),t.hooks.useUpdateEffect((()=>{G||(0,e.getAppStore)().dispatch(e.appActions.closeWidgets(J))}),[G]),e.React.useEffect((()=>{!V&&(null==$?void 0:$.length)&&G&&setTimeout((()=>{(0,e.getAppStore)().dispatch(e.appActions.openWidgets($))}),1e3)}),[]);const te=e.React.useCallback(((t,a)=>{const o=J.includes(t);return e.React.createElement(m,Object.assign({},W,{key:t,className:`${a} layout-item`,widgetid:t,markerEnabled:!1,active:o,onClick:Q}))}),[W,Q,J]);return e.React.createElement("div",{className:"controller-runtime w-100 h-100"},Y&&e.React.createElement(R,{containerMapId:D,widgets:K,onClose:ee}),!Y&&N&&e.React.createElement(I,{sizes:T,root:q.current,placement:F,widgets:K,onClose:ee}),!Y&&!N&&e.React.createElement(k,{sizes:T,mode:P,start:H,spaceX:Z.x,spaceY:Z.y,widgets:K,onClose:ee}),e.React.createElement(y,{ref:q,className:"runtime--scroll-list",vertical:z,itemLength:B,space:null===(C=A.appearance)||void 0===C?void 0:C.space,autoHideArrow:!0,lists:X,createItem:te}))},L={behavior:{onlyOpenOne:!0,openStarts:[],displayType:"STACK",vertical:!1,size:{}},appearance:{space:0,advanced:!1,card:{showLabel:!1,labelGrowth:10,avatar:{type:"primary",size:"default",shape:"circle"}}}};class N extends e.BaseVersionManager{constructor(){super(...arguments),this.versions=[{version:"1.0.0",description:"Version manager for release 1.0.0",upgrader:e=>{if(!e)return L;if(e.behavior&&e.appearance)return e;{let a=e;return e.behavior||(a=a.setIn(["behavior","openStarts"],[]),a=a.setIn(["behavior","onlyOpenOne"],e.onlyOpenOne),a=a.setIn(["behavior","displayType"],e.displayType),a=a.setIn(["behavior","vertical"],e.vertical),a=a.setIn(["behavior","size"],e.size),a=a.without(["onlyOpenOne","displayType","size"])),e.appearance||(a=a.setIn(["appearance","advanced"],!1),e.vertical?a=a.setIn(["appearance","space"],e.space):(a=a.setIn(["appearance","space"],0),a=a.setIn(["appearance","card","labelGrowth"],e.space)),a=a.setIn(["appearance","card","showLabel"],e.showLabel),a=a.setIn(["appearance","card","avatar","size"],"SMALL"===(t=e.iconSize)?"sm":"MEDIUM"===t?"default":"LARGE"===t?"lg":t),a=a.setIn(["appearance","card","avatar","shape"],e.iconStyle),a=a.setIn(["appearance","card","avatar","type"],"primary"),a=a.without(["space","showLabel","iconSize","iconStyle","vertical"])),a}var t}},{version:"1.1.0",description:"Version manager for release 1.1.0",upgrader:e=>{var t,a;if(!e)return L;let o=null===(t=null==e?void 0:e.appearance)||void 0===t?void 0:t.card;const n=null==o?void 0:o.variants,i=null===(a=null==o?void 0:o.avatar)||void 0===a?void 0:a.type;let r=e;if(n){const e=((e,t="primary")=>null==e?void 0:e[t])(n,i);o=null==o?void 0:o.set("variant",e).without("variants"),r=r.setIn(["appearance","card"],o)}return r}},{version:"1.6.0",description:"Version manager for release 1.6.0",upgrader:e=>{var t;if(!e)return L;let a=null===(t=null==e?void 0:e.appearance)||void 0===t?void 0:t.card,o=e;return a&&(a=a.set("showTooltip",!0),o=o.setIn(["appearance","card"],a)),o}}]}}const $=new N,T=a=>{var o,n,i,r;const{builderSupportModules:l,id:s,config:c,onInitResizeHandler:d}=a,u=null===(o=c.behavior)||void 0===o?void 0:o.onlyOpenOne,p=null===(n=c.behavior)||void 0===n?void 0:n.displayType,v=null===(i=null==c?void 0:c.behavior)||void 0===i?void 0:i.vertical,g=null==c?void 0:c.appearance.advanced,h=null===(r=null==c?void 0:c.appearance)||void 0===r?void 0:r.card.variant,m=e.ReactRedux.useSelector((e=>e.appContext.isInBuilder)),f=e.ReactRedux.useSelector((e=>e.appRuntimeInfo.appMode)),b=e.ReactRedux.useSelector((e=>e.browserSizeMode));e.React.useEffect((()=>{null==d||d(null,null,(()=>{R((e=>e+1))}))}),[d]);const y=m&&f!==e.AppMode.Run,w=y&&l.widgetModules.Builder,[S,R]=e.React.useState(0);t.hooks.useUpdateEffect((()=>{R((e=>e+1))}),[u,p,f,b]);const x=(t=>e.React.useMemo((()=>e.css`
      overflow: hidden;
      white-space: nowrap;
      .controller-container {
        width: 100%;
        height: 100%;
        min-width: ${t?e.polished.rem(50):e.polished.rem(150)};
        min-height: ${t?e.polished.rem(150):e.polished.rem(50)};
      }
    `),[t]))(v),O=((a,o)=>{const n=null==a?void 0:a.default,i=null==a?void 0:a.active,r=null==a?void 0:a.hover;return e.React.useMemo((()=>o?e.css`
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
    `:e.css``),[o,n,i,r])})(h,g);return(0,e.jsx)("div",{className:"widget-controller jimu-widget shadow rw-controller",css:[x,O]},(0,e.jsx)("div",{className:"controller-container"},!y&&(0,e.jsx)(A,{id:s,version:S,config:c}),y&&w&&(0,e.jsx)(w,{id:s,version:S,config:c})))};T.versionManager=$;const z=T})(),l})())}}}));