System.register(["jimu-core","jimu-ui","jimu-layouts/layout-runtime"],(function(e){var t,n,o;return{setters:[function(e){t=e},function(e){n=e},function(e){o=e}],execute:function(){e(function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=492)}({0:function(e,n){e.exports=t},1:function(e,t){e.exports=n},32:function(e,t,n){"use strict";n.d(t,"h",(function(){return h})),n.d(t,"f",(function(){return m})),n.d(t,"i",(function(){return w})),n.d(t,"l",(function(){return y})),n.d(t,"k",(function(){return j})),n.d(t,"j",(function(){return O})),n.d(t,"b",(function(){return x})),n.d(t,"g",(function(){return S})),n.d(t,"d",(function(){return R})),n.d(t,"c",(function(){return I})),n.d(t,"a",(function(){return C})),n.d(t,"e",(function(){return k}));var o=n(0),r=n(1),a=n(53),i=n(7),l=n(57),s=n(52);const{useState:c,useEffect:d,useMemo:u,useRef:p}=o.React,{useSelector:v}=o.ReactRedux,g=()=>document.body.getBoundingClientRect(),b=(e,t)=>e.right>=t.right||e.left<=t.left,f=(e,t)=>e.bottom>=t.bottom||e.top<=t.top,h=(e,t,n,o,i,l)=>{const[s,u]=c(()=>g()),[v,h]=c([n]),m=p(0);d(()=>{const e=()=>{const e=g();u(e)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]);const w=r.hooks.useEventCallback(t=>{if(m.current++,m.current>7)return console.warn(`Number of cycles: ${m.current}.You may have opened too many panels, and now there is not enough space for them to be placed without overstepping and blocking`),t;const o=((e,t)=>!(!e||!t)&&(b(e,t)||f(e,t)))(t,s);if(!o)return t;const{width:r,height:l}=t;let{left:c,top:d,right:u,bottom:p}=t;if(o){const t=b({left:c,top:d,right:u,bottom:p,width:r,height:l},s),o=f({left:c,top:d,right:u,bottom:p,width:r,height:l},s);t&&(c=e===a.a.SideBySide?n.x:s.right-r),o||e!==a.a.SideBySide||(d+=i),u=c+r,p=d+l}return w({left:c,top:d,right:u,bottom:p,width:r,height:l})});return d(()=>{const r=[];let l={width:0,height:0};t.forEach((t,s)=>{const c=0!==s?r[s-1]:n;let{x:d,y:u}=c;if(e===a.a.SideBySide){const{width:e}=l;d+=e,d+=0!==s?o:0}else e===a.a.Stack&&(d+=0!==s?o:0,u+=0!==s?i:0);const p={left:d,top:u,right:d+t.width,bottom:u+t.height,width:t.width,height:t.height},{left:v,top:g}=w(p);m.current>7?(d=c.x,u=c.y):(d=v,u=g),m.current=0,r.push({x:d,y:u}),l=t}),h(r)},[e,n,o,i,s.width,s.height,w,t]),v},m=e=>o.ReactRedux.useSelector(t=>{const n=t.appRuntimeInfo.selection,r=t.appConfig;let a=!1;if(n&&r.layouts[n.layoutId]){const t=r.layouts[n.layoutId].content[n.layoutItemId],l=t&&t.widgetId;let s=[];l&&(s=i.searchUtils.getChildrenContents(r,l,o.LayoutItemType.Widget,!1));let c=[l,e];s&&(c=c.concat(s)),a=c.includes(l)}return a}),w=()=>{const e=o.ReactRedux.useSelector(e=>e.appConfig.widgets);return t=>{var n;return null===(n=null==e?void 0:e[t])||void 0===n?void 0:n.label}},y=e=>o.ReactRedux.useSelector(t=>{var n,o;return null===(o=null===(n=t.appConfig.widgets)||void 0===n?void 0:n[e])||void 0===o?void 0:o.label}),j=(e,t)=>v(n=>{var o,r,a;return null===(a=null===(r=null===(o=n.appConfig.widgets)||void 0===o?void 0:o[e])||void 0===r?void 0:r.layouts)||void 0===a?void 0:a[t]}),O=(e,t)=>{const n=o.ReactRedux.useSelector(e=>e.widgetsRuntimeInfo),r=Object(s.b)(e,t),a=u(()=>Object.keys(n).filter(e=>{var t;const r=null===(t=n[e])||void 0===t?void 0:t.state;return!(r!==o.WidgetState.Opened&&r!==o.WidgetState.Active)}),[n]);return u(()=>r.filter(e=>a.includes(e)),[r,a])},x=e=>{const t=o.appActions.closeWidget(e);Object(o.getAppStore)().dispatch(t)},S=(e,t)=>{const n=O(e,t);return r.hooks.useEventCallback(()=>(e=>{const t=o.appActions.closeWidgets(e);Object(o.getAppStore)().dispatch(t)})(n))},R=e=>{const t=o.appActions.openWidgets(e);Object(o.getAppStore)().dispatch(t)},I=e=>{const t=o.appActions.openWidget(e);Object(o.getAppStore)().dispatch(t)},C=e=>{const t=o.appActions.activateWidget(e);Object(o.getAppStore)().dispatch(t)},k=(e,t)=>{const n=null==e?void 0:e.showLabel,o=null==e?void 0:e.labelGrowth,r=null==e?void 0:e.avatar.size,a=null==e?void 0:e.avatar.shape;return Object(l.b)(r,n,a)+t+o}},36:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"f",(function(){return i})),n.d(t,"e",(function(){return l})),n.d(t,"d",(function(){return s})),n.d(t,"g",(function(){return c}));const o=5,r="controller",a="_openwidget",i=150,l=50,s=21,c={sm:24,default:32,lg:48}},492:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(1),a=n(32),i=n(7),l=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};const{useEffect:s}=o.React;function c(e){const{widgetId:t,canCrossLayoutBoundary:n,className:i}=e,c=l(e,["widgetId","canCrossLayoutBoundary","className"]),d=o.ReactRedux.useSelector(e=>{var n,o;return null===(o=null===(n=e.widgetsRuntimeInfo)||void 0===n?void 0:n[t])||void 0===o?void 0:o.isClassLoaded});s(()=>{var e,n;const r=null===(n=null===(e=Object(o.getAppStore)().getState().widgetsRuntimeInfo)||void 0===e?void 0:e[t])||void 0===n?void 0:n.isClassLoaded;t&&!r&&o.WidgetManager.getInstance().loadWidgetClass(t)},[t]);const u=o.React.useMemo(()=>{if(d)return o.WidgetManager.getInstance().getWidgetClass(t)},[t,d]),p=o.React.useCallback(()=>{var e,n;if(window.jimuConfig.isBuilder)return;(null===(n=null===(e=Object(o.getAppStore)().getState().widgetsRuntimeInfo)||void 0===e?void 0:e[t])||void 0===n?void 0:n.state)===o.WidgetState.Active||Object(a.a)(t)},[t]),v=Object(o.classNames)("widget-renderer  w-100 h-100",i),g=(e=>o.React.useMemo(()=>o.css`
      overflow: ${e?"visible":"hidden"};
      position: relative;
      .widget-content {
        position: relative;
        height: 100%;
        width: 100%;
        z-index: 0;
      }
  `,[e]))(n);return Object(o.jsx)("div",Object.assign({css:g,className:v,onMouseDownCapture:p},c),Object(o.jsx)("div",{className:"widget-content p-1"},u&&Object(o.jsx)(o.ErrorBoundary,null,Object(o.jsx)(u,{widgetId:t})),!u&&Object(o.jsx)(r.Loading,null)))}const d=e=>{const{widgetId:t,containerMapId:n,onClose:i,openedWidgets:l}=e,s=Object(a.l)(t);return o.React.createElement(r.MobilePanel,{className:Object(o.classNames)({"d-none":!t}),mapWidgetId:n,title:s,open:!0,toggle:e=>{null==e||e.stopPropagation(),null==e||e.nativeEvent.stopImmediatePropagation(),null==i||i(t)}},l.map(e=>{const{id:t,opening:n}=e;return o.React.createElement(c,{widgetId:t,key:t,className:Object(o.classNames)({"d-none":!n})})}))},u={width:150,height:120},p={width:300,height:300},v=e=>{const{reference:t,placement:n,sizes:i,widgetIds:l,openedWidgets:s,onClose:d}=e,[v,g]=o.React.useState(()=>((e,t)=>{let n=Object(o.Immutable)({});return e.forEach(e=>{n=n.set(e,t[e]||p)}),n})(l,i)),b=o.React.useMemo(()=>{var e;return(null!==(e=null==s?void 0:s.map(e=>e.id))&&void 0!==e?e:[]).map(e=>v[e])},[v,s]),f=Object(a.i)();return o.React.createElement(o.React.Fragment,null,s.map((e,a)=>{const{id:i,opening:l}=e,s=b[a],p=f(i);return o.React.createElement(r.Popper,{key:i,className:Object(o.classNames)({"d-none":!l},"rrw-controller__single-widget-launcher"),headerTitle:p,minSize:u,dragBounds:"body",defaultSize:s,onResize:e=>{return t=i,n=e,void g(v.set(t,n));var t,n},onHeaderClose:e=>((e,t)=>{t.stopPropagation(),t.nativeEvent.stopImmediatePropagation(),null==d||d(e)})(i,e),floating:!0,open:!0,reference:t,placement:n},o.React.createElement(c,{widgetId:i}))}))},{useState:g,useMemo:b}=o.React,f={width:300,height:300},h=e=>{const{mode:t,start:n,spaceX:i,spaceY:l,sizes:s,widgetIds:d,openedWidgets:u,onClose:p,forbidden:v}=e,[h,m]=g(()=>((e,t)=>{let n=Object(o.Immutable)({});return e.forEach(e=>{n=n.set(e,t[e]||f)}),n})(d,s)),w=Object(a.i)(),y=b(()=>{var e;return(null!==(e=null==u?void 0:u.map(e=>e.id))&&void 0!==e?e:[]).map(e=>h[e])},[h,u]),j=Object(a.h)(t,y,n,i,l,v);return o.React.createElement(o.React.Fragment,null,u.map((e,t)=>{const{id:n,opening:a}=e,i=j[t];if(!i)return;const l=y[t],s=w(n);return o.React.createElement(r.FloatingPanel,{key:n,headerTitle:s,defaultPosition:i,defaultSize:l,className:Object(o.classNames)({"d-none":!a},"rrw-controller__multiple-widget-launcher"),showHeaderClose:!0,dragBounds:"body",onResize:e=>{return t=n,o=e,void m(h.set(t,o));var t,o},onHeaderClose:e=>((e,t)=>{t.stopPropagation(),t.nativeEvent.stopImmediatePropagation(),null==p||p(e)})(n,e)},o.React.createElement(c,{widgetId:n}))}))};var m=n(73),w=n(85),y=n(36),j=n(52);const{useSelector:O}=o.ReactRedux,{useEffect:x,useState:S,useCallback:R,useMemo:I,useRef:C}=o.React,k={x:70,y:70},E={x:30,y:30},M=e=>O(t=>((e,t)=>{const n=e.appConfig,r=i.searchUtils.getContentContainerInfo(n,t,o.LayoutItemType.Widget,e.browserSizeMode),a=Object.values(e.appRuntimeInfo.sectionNavInfos||n.sections||{}).map(e=>e.currentViewId||(e.views||[])[0]);return(r||{}).type!==o.ContainerType.View||a.includes(r.id)})(t,e)),N=e=>{var t,n,l,s,c,u,p,g,b,N,L,z;const{id:$,config:P,version:A,forbidden:T}=e,W=null===(t=P.behavior)||void 0===t?void 0:t.onlyOpenOne,B=null===(n=P.behavior)||void 0===n?void 0:n.openStarts,_=null===(l=P.behavior)||void 0===l?void 0:l.size,U=null===(s=P.behavior)||void 0===s?void 0:s.vertical,G=null===(c=P.behavior)||void 0===c?void 0:c.displayType,H=null===(u=null==P?void 0:P.appearance)||void 0===u?void 0:u.card,D=M($),F=(e=>O(t=>{var n;const r=t.appConfig,a=t.browserSizeMode,l=i.searchUtils.getParentWidgetIdOfContent(r,e,o.LayoutItemType.Widget,a),s=r.widgets[l];return"arcgis-map"===(null===(n=null==s?void 0:s.manifest)||void 0===n?void 0:n.name)?s.id:""}))($),V=O(e=>e.appContext.isInBuilder),Y=r.hooks.useCheckSmallBrowserSzieMode(),K=O(e=>e.appRuntimeInfo.currentPageId),X=null===(b=null===(g=null===(p=Object(o.getAppStore)())||void 0===p?void 0:p.getState())||void 0===g?void 0:g.appContext)||void 0===b?void 0:b.isRTL,q=C(),J=Object(j.b)($,y.a),Q=Object(a.j)($,y.a),Z=Object(a.g)($,y.a),[ee,te]=S(null),[ne,oe]=S(B||[]),re=I(()=>ne.map(e=>({id:e,opening:Q.includes(e)})),[ne,Q]),ae=null==Q?void 0:Q[0],ie=U?"right-start":"bottom",le=R(e=>{var t;const n=e.currentTarget,o=null===(t=e.currentTarget.dataset)||void 0===t?void 0:t.widgetid;if(!o||!n)return;te(n);let r=ne;ne.includes(o)||(r=[...r,o],oe(r));!!Y||W?(Z(),Q.includes(o)||Object(a.c)(o)):Q.includes(o)?Object(a.b)(o):Object(a.c)(o)},[ne,Q,Y,W,Z]),se=e=>{e&&Object(a.b)(e)},ce=r.hooks.useEventCallback(()=>{!V&&(null==B?void 0:B.length)&&(W?setTimeout(()=>{var e;const t=(e=>document&&document.querySelector(`.widget-controller .avatar-card[data-widgetid='${e}']`))(B[0]);te(t||(null===(e=q.current)||void 0===e?void 0:e.ref.current)),Object(a.d)(B)},1e3):Object(a.d)(B))});x(()=>{ce()},[ce]),r.hooks.useUpdateEffect(()=>{Z(),oe([])},[A,Z]),r.hooks.useUpdateEffect(()=>{Z(),oe([])},[K,Z]),r.hooks.useUpdateEffect(()=>{D||(Z(),oe([]))},[D,Z]);const de=R((e,t)=>{const n=Q.includes(e);return o.React.createElement(w.b,Object.assign({},H,{key:e,className:t+" rrw-controller__layout-item",widgetid:e,markerEnabled:!1,active:n,onClick:le}))},[H,Q,le]),ue=Object(a.e)(null===(N=null==P?void 0:P.appearance)||void 0===N?void 0:N.card,null===(L=null==P?void 0:P.appearance)||void 0===L?void 0:L.space),pe=Y&&o.React.createElement(d,{widgetId:ae,containerMapId:F,openedWidgets:re,onClose:se})||null,ve=!Y&&W&&o.React.createElement(v,{widgetIds:J,sizes:_,reference:ee,placement:ie,openedWidgets:re,onClose:se})||null,ge=X?Object.assign(Object.assign({},k),{x:document.body.clientWidth-f.width-k.x}):k,be=X?Object.assign(Object.assign({},E),{x:-E.x}):E,fe=!Y&&!W&&o.React.createElement(h,{widgetIds:J,sizes:_,mode:G,start:ge,spaceX:be.x,spaceY:be.y,forbidden:T,openedWidgets:re,onClose:se})||null;return o.React.createElement(o.React.Fragment,null,pe,ve,fe,o.React.createElement(m.a,{ref:q,className:"rrw-controller__runtime--scroll-list",vertical:U,itemLength:ue,space:null===(z=P.appearance)||void 0===z?void 0:z.space,autoHideArrow:!0,lists:J,createItem:de}))},L={behavior:{onlyOpenOne:!0,openStarts:[],displayType:"STACK",vertical:!1,size:{}},appearance:{space:0,advanced:!1,card:{showLabel:!1,labelGrowth:10,avatar:{type:"primary",size:"default",shape:"circle"}}}};class z extends o.BaseVersionManager{constructor(){super(...arguments),this.versions=[{version:"1.0.0",description:"Version manager for release 1.0.0",upgrader:e=>{if(!e)return L;if(e.behavior&&e.appearance)return e;{let n=e;return e.behavior||(n=n.setIn(["behavior","openStarts"],[]),n=n.setIn(["behavior","onlyOpenOne"],e.onlyOpenOne),n=n.setIn(["behavior","displayType"],e.displayType),n=n.setIn(["behavior","vertical"],e.vertical),n=n.setIn(["behavior","size"],e.size),n=n.without(["onlyOpenOne","displayType","size"])),e.appearance||(n=n.setIn(["appearance","advanced"],!1),e.vertical?n=n.setIn(["appearance","space"],e.space):(n=n.setIn(["appearance","space"],0),n=n.setIn(["appearance","card","labelGrowth"],e.space)),n=n.setIn(["appearance","card","showLabel"],e.showLabel),n=n.setIn(["appearance","card","avatar","size"],"SMALL"===(t=e.iconSize)?"sm":"MEDIUM"===t?"default":"LARGE"===t?"lg":t),n=n.setIn(["appearance","card","avatar","shape"],e.iconStyle),n=n.setIn(["appearance","card","avatar","type"],"primary"),n=n.without(["space","showLabel","iconSize","iconStyle","vertical"])),n}var t}},{version:"1.1.0",description:"Version manager for release 1.1.0",upgrader:e=>{var t,n;if(!e)return L;let o=null===(t=null==e?void 0:e.appearance)||void 0===t?void 0:t.card;const r=null==o?void 0:o.variants,a=null===(n=null==o?void 0:o.avatar)||void 0===n?void 0:n.type;let i=e;if(r){const e=((e,t="primary")=>null==e?void 0:e[t])(r,a);o=null==o?void 0:o.set("variant",e).without("variants"),i=i.setIn(["appearance","card"],o)}return i}}]}}const $=new z,{useSelector:P}=o.ReactRedux,{useState:A,useMemo:T,useRef:W}=o.React,B=e=>{var t,n,a,i;const{builderSupportModules:l,id:s,config:c,layoutId:d,layoutItemId:u}=e,p=null===(t=c.behavior)||void 0===t?void 0:t.onlyOpenOne,v=null===(n=c.behavior)||void 0===n?void 0:n.displayType,g=null===(a=null==c?void 0:c.behavior)||void 0===a?void 0:a.vertical,b=null==c?void 0:c.appearance.advanced,f=null===(i=null==c?void 0:c.appearance)||void 0===i?void 0:i.card.variant,h=P(e=>e.appContext.isInBuilder),m=P(e=>e.appRuntimeInfo.appMode),w=P(e=>e.browserSizeMode),j=P(e=>{var t,n,o,r;let a=null;return h&&(a=null===(r=null===(o=null===(n=null===(t=e.appConfig.layouts)||void 0===t?void 0:t[d])||void 0===n?void 0:n.content)||void 0===o?void 0:o[u])||void 0===r?void 0:r.bbox),a}),O=h&&m!==o.AppMode.Run,x=O&&l.widgetModules.Builder,[S,R]=A(0),[I,C]=A(null),k=W(null);r.hooks.useUpdateEffect(()=>{const e=k.current;if(!e)return;const t=e.getBoundingClientRect();C(t)},[j]),r.hooks.useUpdateEffect(()=>{R(e=>e+1)},[p,v,m,w,j]);const E=(e=>T(()=>o.css`
      overflow: hidden;
      white-space: nowrap;
      .controller-container {
        width: 100%;
        height: 100%;
        min-width: ${e?o.polished.rem(y.e):o.polished.rem(y.f)};
        min-height: ${e?o.polished.rem(y.f):o.polished.rem(y.e)};
      }
      ${e&&o.css`
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
    `,[e]))(g),M=((e,t)=>{const n=null==e?void 0:e.default,a=null==e?void 0:e.active,i=null==e?void 0:e.hover;return T(()=>t?o.css`
      .avatar-card:not(.add-widget-btn) {
        ${n&&o.css`
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
            text-decoration: ${r.styleUtils.toCSSTextUnderLine({underline:n.underline,strike:n.strike})};
          }
        `}
        ${i&&o.css`
          &:hover {
            > .avatar {
              > .avatar-button {
                background-color: ${i.bg};
                border-color: ${i.bg};
              }
            }
            > .avatar-label {
              color: ${i.color};
              font-style: ${(null==i?void 0:i.italic)?"italic":"normal"};
              font-weight: ${(null==i?void 0:i.bold)?"bold":"normal"};
              text-decoration: ${r.styleUtils.toCSSTextUnderLine({underline:i.underline,strike:i.strike})};
            }
          }
        `}
        ${a&&o.css`
            > .avatar {
              > .avatar-button {
                &:not(:disabled):not(.disabled):active,
                &:not(:disabled):not(.disabled).active,
                &[aria-expanded="true"] {
                  background-color: ${a.bg};
                  border-color: ${a.bg};
                }
              }
            }
            > .avatar-label {
              &:not(:disabled):not(.disabled):active,
              &:not(:disabled):not(.disabled).active {
                color: ${a.color};
                font-style: ${(null==a?void 0:a.italic)?"italic":"normal"};
                font-weight: ${(null==a?void 0:a.bold)?"bold":"normal"};
                text-decoration: ${r.styleUtils.toCSSTextUnderLine({underline:a.underline,strike:a.strike})};
              }
            }
        `}
      }
    `:o.css``,[t,n,a,i])})(f,b);return Object(o.jsx)("div",{className:"widget-controller jimu-widget shadow rw-controller",css:[E,M],ref:k},Object(o.jsx)("div",{className:"controller-container"},!O&&Object(o.jsx)(N,{id:s,version:S,config:c,forbidden:I}),O&&x&&Object(o.jsx)(x,{id:s,version:S,config:c})))};B.versionManager=$;t.default=B},51:function(e,t){e.exports='<svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero" fill="none"><path d="M7.745 7l4.1 4.1a.527.527 0 01-.745.746L7 7.746l-4.1 4.1a.527.527 0 01-.746-.746l4.1-4.1-4.1-4.1a.527.527 0 01.746-.746l4.1 4.1 4.1-4.1a.527.527 0 01.746.746L7.746 7z" fill="#000"></path><path d="M1 1h12v12H1z"></path></g></svg>'},52:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return c}));var o=n(0),r=n(7);const{useMemo:a}=o.React,{useSelector:i}=o.ReactRedux,l=e=>{let t=(e.order&&e.order.asMutable()||[]).map(t=>{var n;return null===(n=e.content)||void 0===n?void 0:n[t]});return t=t.filter(e=>e&&!e.isPending),t.map(e=>null==e?void 0:e.id)},s=(e,t)=>{const n=c(e,t);return a(()=>(e=>l(e).map(t=>{var n,o;return null===(o=null===(n=e.content)||void 0===n?void 0:n[t])||void 0===o?void 0:o.widgetId}))(n),[n])},c=(e,t)=>i(n=>{var o,a,i;const l=null===(a=null===(o=(n=n.appContext.isBuilder?n.appStateInBuilder:n).appConfig.widgets)||void 0===o?void 0:o[e])||void 0===a?void 0:a.layouts,s=r.searchUtils.findLayoutId(l[t],n.browserSizeMode,n.appConfig.mainSizeMode);return null===(i=n.appConfig.layouts)||void 0===i?void 0:i[s]})},53:function(e,t,n){"use strict";var o;n.d(t,"a",(function(){return o})),function(e){e.Stack="STACK",e.SideBySide="SIDEBYSIDE"}(o||(o={}))},57:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return d}));var o=n(0),r=n(1),a=n(36),i=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};const{useState:l}=o.React,s=(e,t,n)=>{let o=a.g[e];t&&(o+=a.d);return o+=2*c(e,n),o},c=(e,t)=>"circle"===t?"sm"===e?4:"default"===e?2:"lg"===e?0:void 0:6,d=o.React.forwardRef((e,t)=>{var n;const{label:a,className:d,title:u,showLabel:p,labelGrowth:v=0,icon:g,marker:b,onMarkerClick:f,avatar:h,autoFlip:m,onClick:w,active:y,editDraggable:j}=e,O=i(e,["label","className","title","showLabel","labelGrowth","icon","marker","onMarkerClick","avatar","autoFlip","onClick","active","editDraggable"]),x=h||{},{shape:S,style:R}=x,I=i(x,["shape","style"]),C=null==I?void 0:I.size,k=o.React.useMemo(()=>{const e=s(C,p,S),t=e+v,n=c(C,S);return o.css`
      display: flex;
      align-items:center;
      flex-direction: column;
      justify-content: ${p?"space-around":"center"};
      width: ${o.polished.rem(t)} !important;
      height: ${o.polished.rem(e)};
      .tool-drag-handler {
        cursor: auto;
      }
      .avatar {
        padding: ${n}px;
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
        min-height: ${o.polished.rem(21)};
      }
    `},[C,p,S,v]),[E,M]=l(null);return Object(o.jsx)("div",Object.assign({},O,{ref:t,className:Object(o.classNames)("avatar-card",d+" rw-controller__avatar-card"),css:k,onClick:w}),Object(o.jsx)("div",{className:Object(o.classNames)({"no-drag-action":!j},"avatar tool-drag-handler"),onMouseEnter:()=>{M(!0)},onMouseLeave:()=>{M(!1)}},b&&E&&Object(o.jsx)(r.Button,{className:"marker",size:"sm",icon:!0,onClick:f},Object(o.jsx)(r.Icon,{size:10,icon:b})),Object(o.jsx)(r.Tooltip,{title:u||a,style:{pointerEvents:"none"}},Object(o.jsx)(r.Button,Object.assign({icon:!0,active:y,className:"avatar-button"},I,{style:Object.assign({borderRadius:"circle"===S?"50%":void 0},R)}),Object(o.jsx)(r.Icon,{color:"string"!=typeof g&&(null===(n=g.properties)||void 0===n?void 0:n.color),icon:"string"!=typeof g?g.svg:g,autoFlip:m})))),p&&Object(o.jsx)("div",{className:Object(o.classNames)("avatar-label text-capitalize text-truncate",{active:y})},a))})},7:function(e,t){e.exports=o},73:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var o=n(0),r=n(1),a=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};const{useRef:i,useEffect:l,useState:s,useImperativeHandle:c,forwardRef:d}=o.React,u=d((e,t)=>{var n,d;const{className:u,lists:p=[],createItem:v,vertical:g,itemLength:b,space:f,onChange:h,autoHideArrow:m,placeholder:w,minLength:y=b,autoScrollEnd:j}=e,O=a(e,["className","lists","createItem","vertical","itemLength","space","onChange","autoHideArrow","placeholder","minLength","autoScrollEnd"]),x=r.hooks.useTranslate(),S=g?"clientHeight":"clientWidth",R=null!==(n=null==p?void 0:p.length)&&void 0!==n?n:0,I=null!==(d=null==w?void 0:w.length)&&void 0!==d?d:b,C=null==w?void 0:w.node,k=null==w?void 0:w.position,E=((e,t,n)=>o.css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .root {
      flex-direction: ${e?"column":"row"};
      width: 100%;
      height: 100%;
      min-width: ${o.polished.rem(n)};
      display: flex;
      justify-content: center;
      flex-wrap: nowrap;
      align-items: center;
      .scroll-list-item {
        &:not(:first-of-type) {
          margin-top: ${e?o.polished.rem(t):"unset"};
          margin-left: ${e?"unset":o.polished.rem(t)};
        }
      }
    }
`)(g,f,y),M=i(null),[N,L]=s(0),[z,$]=s(0),[P,A]=s(0),[T,W]=s(0),[B,_]=s(!0),[U,G]=s(!1),[H,D]=s(!0),F=r.hooks.useRefValue(T),V=r.hooks.useRefValue(P),Y=r.hooks.useRefValue(z);c(t,()=>({hideArrow:H,disablePrevious:B,disableNext:U,scroll:Q,ref:M}));const K=i(()=>{});l(()=>(K.current=o.lodash.debounce(L,500),()=>{var e;null===(e=K.current)||void 0===e||e.cancel()}),[]);const X=r.hooks.useEventCallback(()=>{var e;let t=M.current[S]||0;t+=f,t-=C?I:0,t=Math.max(t,y),null===(e=K.current)||void 0===e||e.call(K,t)});l(()=>{const e=M.current,t=new o.ResizeObserver(X);return t.observe(e),()=>{t.disconnect()}},[M,X]),l(()=>{const e=Math.floor(N/b);$(e)},[N,b]),l(()=>{let e=V.current,t=F.current;t-e>z?t=V.current+z:t-e<z&&(e=0,t=e+z),A(e),W(t)},[z,V,F]);const q=i([]),J=r.hooks.useEventCallback(()=>{if(j&&p.length>0&&q.current.length>0&&p[p.length-1]!==q.current[q.current.length-1]){let e=0,t=0;t=R,e=t-Y.current,e=Math.max(0,e),A(e),W(t)}});l(()=>{J(),q.current=p},[p,J]);const Q=r.hooks.useEventCallback((e,t=!0)=>{const n=t?1:z;let o=0,r=0;e?(o=P-n,o<0?(o=0,r=o+z):r=T-n):(r=T+n,r>R?(r=R,o=r-z):o=P+n),A(o),W(r)});return l(()=>{const e=T-P>=R,t=T===R;_(0===P),G(t),D(e)},[P,T,R]),Object(o.jsx)(r.NavButtonGroup,Object.assign({},O,{css:E,type:"tertiary",vertical:g,onChange:e=>{null==h||h(e),Q(e,!0)},disablePrevious:B,disableNext:U,previousAriaLabel:x("previous"),nextAriaLabel:x("next"),previousStyle:{visibility:H?"hidden":"visible"},nextStyle:{visibility:H?"hidden":"visible"},className:Object(o.classNames)("scroll-list",u)}),Object(o.jsx)("div",{className:"root scroll-list-root",ref:M},"start"===k&&C,p.slice(P,T).map(e=>v(e,"scroll-list-item")),"end"===k&&C))})},85:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return r.a}));var o=n(0),r=n(57),a=n(1);const i=n(51),l=e=>{var t,n;const{markerEnabled:l,onMarkerClick:s,widgetid:c,showLabel:d,labelGrowth:u,avatar:p,onClick:v,active:g,editDraggable:b,className:f}=e,h=o.ReactRedux.useSelector(e=>{var t;return null===(t=e.appConfig.widgets)||void 0===t?void 0:t[c]});return h?o.React.createElement(r.a,{className:"rw-controller__widget-avatar-card "+f,"data-widgetid":c,showLabel:d,labelGrowth:u,avatar:p,label:h.label,icon:h.icon,autoFlip:null===(n=null===(t=null==h?void 0:h.manifest)||void 0===t?void 0:t.properties)||void 0===n?void 0:n.flipIcon,marker:l?i:"",active:g,editDraggable:b,onMarkerClick:s,onClick:v}):o.React.createElement(a.Loading,null)};n(73),n(32)}}))}}}));