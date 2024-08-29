System.register(["jimu-core","jimu-theme","jimu-ui"],(function(e,t){var o={},a={},n={};return{setters:[function(e){o.AppMode=e.AppMode,o.BaseVersionManager=e.BaseVersionManager,o.ExpressionResolverComponent=e.ExpressionResolverComponent,o.Immutable=e.Immutable,o.MutableStoreManager=e.MutableStoreManager,o.React=e.React,o.ReactRedux=e.ReactRedux,o.appActions=e.appActions,o.classNames=e.classNames,o.css=e.css,o.expressionUtils=e.expressionUtils,o.getAppStore=e.getAppStore,o.hooks=e.hooks,o.jsx=e.jsx,o.polished=e.polished},function(e){a.useTheme=e.useTheme},function(e){n.RichTextDisplayer=e.RichTextDisplayer,n.Scrollable=e.Scrollable,n.richTextUtils=e.richTextUtils}],execute:function(){e((()=>{var e={17663:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M2.854 2.153a.485.485 0 0 0-.708 0 .54.54 0 0 0 0 .738l5.5 5.956a.485.485 0 0 0 .708 0l5.5-5.956a.54.54 0 0 0 0-.738.485.485 0 0 0-.708 0L8 7.74zm0 5a.485.485 0 0 0-.708 0 .54.54 0 0 0 0 .738l5.5 5.956a.485.485 0 0 0 .708 0l5.5-5.956a.54.54 0 0 0 0-.738.485.485 0 0 0-.708 0L8 12.74z" clip-rule="evenodd"></path></svg>'},79244:e=>{"use strict";e.exports=o},1888:e=>{"use strict";e.exports=a},14321:e=>{"use strict";e.exports=n}},t={};function s(o){var a=t[o];if(void 0!==a)return a.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,s),n.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.p="";var r={};return s.p=window.jimuConfig.baseUrl,(()=>{"use strict";s.r(r),s.d(r,{__set_webpack_public_path__:()=>y,default:()=>w});var e=s(79244),t=s(17663),o=s.n(t),a=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(o[a[n]]=e[a[n]])}return o};const n=t=>{const n=window.SVG,{className:s}=t,r=a(t,["className"]),i=(0,e.classNames)("jimu-icon jimu-icon-component",s);return n?e.React.createElement(n,Object.assign({className:i,src:o()},r)):e.React.createElement("svg",Object.assign({className:i},r))};var i=s(1888),l=s(14321),u=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(o[a[n]]=e[a[n]])}return o};const{useState:c,useEffect:d,useRef:p}=e.React;function f(t){var o;const{value:a="",placeholder:s,repeatedDataSource:r,useDataSources:f,widgetId:g,wrap:m,tooltip:v}=t,x=u(t,["value","placeholder","repeatedDataSource","useDataSources","widgetId","wrap","tooltip"]),h=e.React.useMemo((()=>a.replace(/\ufeff/g,"")),[a]),b=(0,i.useTheme)(),S=p(),w=e.expressionUtils.isSingleStringExpression(v),[y,R]=c(""),[j,M]=e.React.useState("24px"),[E,O]=e.React.useState(!1),[D,I]=e.React.useState(!1),[N,k]=e.React.useState(0),[P,A]=e.React.useState(!1),T=((t,o,a)=>{var n,s,r,i;const l=null===(n=null==a?void 0:a.ref.palette)||void 0===n?void 0:n.white,u=null!==(i=null===(r=null===(s=null==a?void 0:a.ref.palette)||void 0===s?void 0:s.neutral)||void 0===r?void 0:r[500])&&void 0!==i?i:"#444";return e.React.useMemo((()=>{const a=e.css`
      .rich-displayer {
        white-space: nowrap !important;
      }
   `;return e.css`
      width: 100%;
      height: 100%;
      position: relative;
      overflow-y: hidden;
      .rich-displayer {
        width: 100%;
        height: fit-content;
      }

      ${!t&&a};
      .text-fade {
        position: absolute;
        left: 0;
        height: ${o};
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        pointer-events: none;
        > .arrow {
          position: absolute;
          width: 16px;
          height: 16px;
          background: ${l};
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          &.arrow-bottom {
            bottom: 4px;
          }
        }
        &.text-fade-bottom {
          bottom: 0;
          background: linear-gradient(180deg, rgba(182, 182, 182, 0) 0%, ${e.polished.rgba(u,.5)} 100%);
        }
      }

      .bounce {
        animation-name: bounce;
        animation-duration:0.6s;
        animation-iteration-count:infinite;
        animation-timing-function:linear;
      }

      @keyframes bounce {
        0% {
          transform: translateY(0px)
        }
        50% {
          transform: translateY(2px)
        }
        100%{
          transform: translateY(4px)
        }
      }
    `}),[l,u,o,t])})(m,j,b),U=e.React.useCallback((e=>{if(null==e)return;const{scrollable:t,bottoming:o}=e;O(o),I(t)}),[]);d((()=>{var t;if(null!=v&&w){const o=null!==(t=e.expressionUtils.getSingleStringExpressionText(v))&&void 0!==t?t:v.name;R(o)}}),[v,w]);const C=p();return(0,e.jsx)("div",Object.assign({css:T,title:y,onMouseEnter:()=>{var e,t;null!=C.current&&(clearTimeout(C.current),C.current=null);const o=(a=null!==(t=null===(e=S.current)||void 0===e?void 0:e.clientHeight)&&void 0!==t?t:0)<=80?"0px":a<=140?"24px":"15%";var a;A("0px"!==o),k((e=>e+1)),M(o)},onMouseLeave:()=>{C.current=setTimeout((()=>{A(!1),C.current=null}),500)},ref:S},x),(0,e.jsx)(l.Scrollable,{ref:U,version:N},(0,e.jsx)(l.RichTextDisplayer,{widgetId:g,repeatedDataSource:r,useDataSources:f,value:h,placeholder:s})),P&&D&&!E&&(0,e.jsx)("div",{className:"text-fade text-fade-bottom"},(0,e.jsx)("span",{className:"arrow arrow-bottom rounded-circle mr-1"},(0,e.jsx)(n,{className:"bounce",color:null===(o=null==b?void 0:b.ref.palette)||void 0===o?void 0:o.black}))),!w&&v&&(0,e.jsx)(e.ExpressionResolverComponent,{useDataSources:f,expression:v,widgetId:g,onChange:e=>{(null==e?void 0:e.isSuccessful)?R(e.value):R("")}}))}const g={_widgetLabel:"Text",defaultPlaceholder:"Double click to edit text"};class m extends e.BaseVersionManager{constructor(){super(...arguments),this.versions=[{version:"1.13.0",description:"Remove useless line-height: normal;",upgrader:e=>{let t=e.text;return t.includes("line-height: normal;")?(t=t.replace(/line-height: normal;/gm,"line-height: 1.2;"),e.set("text",t)):e}}]}}const v=new m;var x;!function(e){e[e.None=0]="None",e[e.Main=1]="Main",e[e.Sub=2]="Sub"}(x||(x={}));const h=(e,t)=>(e===g.defaultPlaceholder&&(e=((e,t)=>null!==t?t.formatMessage({id:e,defaultMessage:g[e]}):"")("defaultPlaceholder",t)),e),b=e.css`
  /* Ensure that the cursor can be displayed when automatic width of layout */
  min-width: 12px;
`,S=t=>{var o,a,n;const{builderSupportModules:s,id:r,intl:i,useDataSources:u,repeatedDataSource:c,useDataSourcesEnabled:d,isInlineEditing:p,config:g,onInitResizeHandler:m}=t,v=e.ReactRedux.useDispatch(),{current:S}=e.React.useRef((0,e.getAppStore)().getState().appContext.isInBuilder),w=e.hooks.useWidgetSelected(r),y=e.hooks.useLatest(w),R=e.ReactRedux.useSelector((e=>e.appRuntimeInfo.appMode)),j=null==s?void 0:s.jimuForBuilderLib.getAppConfigAction,M=null==s?void 0:s.widgetModules.Editor,E=null==s?void 0:s.widgetModules.builderUtils,O=null===(a=null===(o=null==g?void 0:g.style)||void 0===o?void 0:o.wrap)||void 0===a||a,D=null==g?void 0:g.text,I=null==g?void 0:g.tooltip,N=h(null==g?void 0:g.placeholder,i),k=d?u:void 0,P=null!==(n=null==k?void 0:k.length)&&void 0!==n?n:0,[A,T]=e.React.useState(x.Sub),[U,C]=e.React.useState(null);e.React.useEffect((()=>{let e;e=null==c?x.None:0===c.recordIndex?x.Main:x.Sub,T(e)}),[c]),e.React.useEffect((()=>{y.current&&R===e.AppMode.Run&&v(e.appActions.setWidgetIsInlineEditingState(r,!1))}),[y,R,v,r]),e.hooks.useUpdateEffect((()=>{S&&(p||v(e.appActions.widgetStatePropChange(r,"showExpression",!1)))}),[p,v,r]);const _=(R===e.AppMode.Design||R===e.AppMode.Express)&&A!==x.Sub,B=_&&w,L=_&&p,V=e.React.useRef(!1);e.React.useEffect((()=>()=>{V.current=!0}),[]),e.hooks.useUpdateEffect((()=>{let t=l.richTextUtils.getAllExpressions(D);t=null!=t?t:(0,e.Immutable)({}),t=t.merge(null!=I?{tooltip:I}:{}),C(t)}),[D,I,P]);const W=e.hooks.useEventCallback((()=>{if(V.current)return;if(!S)return;const t=E.getExpressionParts(U),o=e.expressionUtils.getUseDataSourceFromExpParts(t,k);j().editWidget({id:r,useDataSources:o}).exec()}));return e.hooks.useUpdateEffect((()=>{W()}),[U,W]),(0,e.jsx)("div",{"data-testid":"text-widget",css:b,className:(0,e.classNames)("widget-text jimu-widget p-1")},B&&(0,e.jsx)(M,{className:(0,e.classNames)({"d-none":!L}),widgetId:r,nowrap:!O,onInitResizeHandler:m,useDataSources:k,enabled:!!p,onCreate:t=>{e.MutableStoreManager.getInstance().updateStateValue(r,"editor",t)},onDestroy:()=>{e.MutableStoreManager.getInstance().updateStateValue(r,"editor",null)},onComplete:(e,t)=>{V.current||S&&j().editWidget({id:r,config:g.set("text",e).set("placeholder",t)}).exec()},placeholder:N,preserveWhitespace:!0,value:D}),(0,e.jsx)(f,{className:(0,e.classNames)({"d-none":L}),value:D,tooltip:I,wrap:O,placeholder:N,useDataSources:k,widgetId:r,repeatedDataSource:c}))};S.versionManager=v;const w=S;function y(e){s.p=e}})(),r})())}}}));