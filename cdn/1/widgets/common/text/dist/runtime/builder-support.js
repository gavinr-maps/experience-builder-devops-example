System.register(["jimu-core","jimu-ui/advanced/rich-text-editor","jimu-ui","jimu-theme","jimu-for-builder"],(function(e,t){var o={},r={},n={},a={},s={};return{setters:[function(e){o.BrowserSizeMode=e.BrowserSizeMode,o.DataSourceManager=e.DataSourceManager,o.Immutable=e.Immutable,o.React=e.React,o.ReactRedux=e.ReactRedux,o.appActions=e.appActions,o.dataSourceUtils=e.dataSourceUtils,o.focusElementInKeyboardMode=e.focusElementInKeyboardMode,o.getAppStore=e.getAppStore,o.hooks=e.hooks,o.jsx=e.jsx},function(e){r.Bubble=e.Bubble,r.RichExpressionBuilderPopper=e.RichExpressionBuilderPopper,r.RichTextEditor=e.RichTextEditor,r.richTextEditorUtils=e.richTextEditorUtils},function(e){n.ModalOverlayIdContext=e.ModalOverlayIdContext,n.defaultMessages=e.defaultMessages,n.richTextUtils=e.richTextUtils,n.sanitizer=e.sanitizer},function(e){a.ThemeSwitchComponent=e.ThemeSwitchComponent},function(e){s.appBuilderSync=e.appBuilderSync}],execute:function(){e((()=>{var e={79244:e=>{"use strict";e.exports=o},4108:e=>{"use strict";e.exports=s},1888:e=>{"use strict";e.exports=a},14321:e=>{"use strict";e.exports=n},33949:e=>{"use strict";e.exports=r}},t={};function l(o){var r=t[o];if(void 0!==r)return r.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,l),n.exports}l.d=(e,t)=>{for(var o in t)l.o(t,o)&&!l.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.p="";var i={};return l.p=window.jimuConfig.baseUrl,(()=>{"use strict";l.r(i),l.d(i,{default:()=>k});var e={};l.r(e),l.d(e,{DATA_SOURCE_ID_REGEXP:()=>u,getDefaultValue:()=>h,getExpressionParts:()=>s,getInvalidDataSourceIds:()=>p,getMainDataSourceIds:()=>c,getUseDataSourceIds:()=>d,sanitizeHTML:()=>m,shouldShowPlaceholder:()=>f});var t=l(79244),o=l(33949),r=l(14321);const n=(e,t)=>{const o=r.richTextUtils.getHTMLTextContent(e);return e.replace(null==o?void 0:o.trim(),t)},a=(e,t)=>(t.forEach((e=>{var t;const o=null===(t=null==e?void 0:e.attributes)||void 0===t?void 0:t.linespace;o&&isNaN(Number(o))&&(e.attributes.linespace=1.5)})),t),s=e=>{let t=[];for(const o in e){const r=e[o];null!=(null==r?void 0:r.parts)&&(t=t.concat(null==r?void 0:r.parts))}return t},u=/data-dsid=\"(((?![\=|\>|\"]).)*)[\"\>|"\s)]/gm,c=(e=(0,t.Immutable)([]))=>e.map((e=>{return o=null==e?void 0:e.dataSourceId,null!=t.DataSourceManager.getInstance().getDataSource(o)?null==e?void 0:e.mainDataSourceId:null;var o})).filter((e=>null!=e)),d=e=>{const t=u;let o,r=[];for(;null!==(o=t.exec(e));){let e=o[1];e.indexOf(",")>0?(e=e.split(","),r=r.concat(e)):r.push(e)}return r},p=(e,o)=>{const r=d(e);if(null==r||!r.length)return;let n=r.map((e=>t.dataSourceUtils.getMainDataSourceId(e))).filter((e=>null!=e));n=Array.from(new Set(n));const a=c(o);return n.filter((e=>!a.includes(e)))},f=(e,t,o)=>{const n=r.richTextUtils.isBlankRichText(e)&&!!t;return void 0!==o?!o&&n:n},m=(e="")=>""!==e?r.sanitizer.sanitize(e):e,h=(e,t,o="")=>{let r=t;const a=f(t,o);return e?a&&(r=n(o,"\ufeff")):r=a?o:t,m(r)};var b=function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(o[r[n]]=e[r[n]])}return o};const{useEffect:g,useRef:v,useState:S,useMemo:x}=t.React,R={toolbar:!1,autoformat:{link:{trigger:/[\s]/,find:/https?:\/\/[\S]+|(www\.[\S]+)/gi,transform:function(e,t){return t?"http://"+e:e},format:"link"}},clipboard:{matchers:[["p",a],["li",a],["h1",a],["h2",a],["h3",a],["h4",a],["h5",a],["h6",a]]}},y=/(?!^\n$)[\n]/gm,E=(e,t)=>(t.forEach((e=>{"string"==typeof e.insert&&(e.insert=e.insert.replace(y," "))})),t),w=e=>{e.clipboard.addMatcher("*",E)},C=(e,t)=>{if(null==e)return;const r=(e=>{const t=e.clipboard.matchers;let o=-1;if(t.some((([e,t],r)=>"*"===e&&t===E&&(o=r,!0))),o>-1)return e.clipboard.matchers.splice(o,1),!0})(e);t=m(t);const n=e.clipboard.convert({html:t});e.setContents(n,"silent"),o.richTextEditorUtils.setEditorCursorEnd(e,"silent"),r&&w(e)},O=e=>{const{editorRef:a,value:s,placeholder:l,enabled:i,onChange:u,onComplete:c}=e,d=b(e,["editorRef","value","placeholder","enabled","onChange","onComplete"]),p=t.React.useContext(r.ModalOverlayIdContext),m=t.React.useMemo((()=>Object.assign(Object.assign({},R),{imageResize:{modalId:p}})),[p]),[y,E]=t.hooks.useForwardRef(a),[O,I]=S(s),[M,j]=S(l),T=((e,t,o,r,n)=>{const a=v({enabled:e,value:t,placeholder:o,onChange:r,onComplete:n});return g((()=>{a.current={enabled:e,value:t,placeholder:o,onChange:r,onComplete:n}}),[e,t,o,r,n]),a})(i,O,M,u,c),D=x((()=>h(i,O,M)),[]),P=t.hooks.useEventCallback(((e,t,o)=>{"silent"!==o&&(f(O,M,i)?j(e):(I(e),null==u||u(e)))}));return t.hooks.useUpdateEffect((()=>{if(j(l),f(O,l)){const e=y.current;C(e,l)}}),[l]),t.hooks.useUpdateEffect((()=>{const{value:e,placeholder:o,onComplete:r}=T.current,a=y.current;if(i){const r=y.current;if(f(e,o)){const e=n(o,"\ufeff");C(r,e),(0,t.focusElementInKeyboardMode)(r,!0)}}else f(e,o)&&C(a,o),null==r||r(e,o)}),[i]),g((()=>{const e=y.current;null!=e&&w(e)}),[y]),t.hooks.useUnmount((()=>{const{value:e,placeholder:t,enabled:o,onComplete:r}=T.current;o&&(null==r||r(e,t))})),t.React.createElement(o.RichTextEditor,Object.assign({autoFocus:!0,enabled:i,editorRef:E,onChange:P,defaultValue:D,modules:m},d))};var I=l(1888),M=l(4108);const j=e=>{const{editor:n,formats:a,selection:s,useDataSources:l,widgetId:i,enabled:u,onInitResizeHandler:c}=e,d=t.ReactRedux.useSelector((e=>{var t;return!!(null===(t=e.widgetsState[i])||void 0===t?void 0:t.showExpression)})),p=t.ReactRedux.useSelector((e=>e.browserSizeMode)),f=t.ReactRedux.useSelector((e=>{var t;return null===(t=e.appConfig.widgets[i])||void 0===t?void 0:t.uri})),m=t.hooks.useTranslation(r.defaultMessages),[h,b]=t.React.useState(0),[g,v]=t.React.useState(0),S=t.React.useRef(null);p===t.BrowserSizeMode.Small&&M.appBuilderSync.publishSidePanelToApp({type:"textExpression",widgetId:i,uri:f,editor:n,formats:a,selection:s,useDataSources:l,active:d}),t.React.useEffect((()=>{null==c||c((()=>{var e;b((e=>e+1)),null===(e=S.current)||void 0===e||e.classList.add("d-none")}),null,(()=>{var e;v((e=>e+1)),null===(e=S.current)||void 0===e||e.classList.remove("d-none")}))}),[c]);const x=t.React.useMemo((()=>({title:m("dynamicContent"),onClose:()=>{(0,t.getAppStore)().dispatch(t.appActions.widgetStatePropChange(i,"showExpression",!1)),(0,t.getAppStore)().dispatch(t.appActions.widgetToolbarStateChange(i,["text-expression"]))}})),[i,m]);return t.hooks.useUpdateEffect((()=>{b((e=>e+1))}),[u]),t.React.createElement(I.ThemeSwitchComponent,{useTheme2:!0},t.React.createElement(o.Bubble,{editor:n,formats:a,selection:s,source:"user",version:h}),p!==t.BrowserSizeMode.Small&&d&&t.React.createElement(o.RichExpressionBuilderPopper,{ref:S,version:g,source:"user",editor:n,formats:a,selection:s,open:d,useDataSources:l,header:x,widgetId:i}))};var T=function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(o[r[n]]=e[r[n]])}return o};const{useMemo:D,useCallback:P}=t.React,U={opacity:.5,background:"var(--sys-color-error-main)",outline:"1px solid white"},k={Editor:e=>{const{value:o,widgetId:r,useDataSources:n,onComplete:a,onCreate:s,onDestroy:l,onInitResizeHandler:i,enabled:u}=e,c=T(e,["value","widgetId","useDataSources","onComplete","onCreate","onDestroy","onInitResizeHandler","enabled"]),[d,f]=t.React.useState(o),m=((e,t)=>P((o=>null!=o?null==e?void 0:e(o):null==t?void 0:t()),[e,t]))(s,l),h=((e,o,r,n)=>t.React.useMemo((()=>({editor:a,selection:s,formats:l})=>(0,t.jsx)(j,{editor:a,selection:s,formats:l,widgetId:e,useDataSources:o,enabled:r,onInitResizeHandler:n})),[r,n,o,e]))(r,n,u,i),b=((e,t)=>D((()=>{const o=p(e,t),r={".ql-editor":{lineHeight:1.42}};return null==o||o.forEach((e=>{r[`exp[data-dsid*="${e}"]`]=U})),r}),[e,t]))(d,n);return(0,t.jsx)(O,Object.assign({editorRef:m,css:b,value:o,plugin:h,onChange:f,onComplete:a,enabled:u},c))},builderUtils:e}})(),i})())}}}));