System.register(["jimu-core","jimu-theme","jimu-ui"],(function(e,t){var o={},a={},s={};return{setters:[function(e){o.AppMode=e.AppMode,o.ExpressionResolverComponent=e.ExpressionResolverComponent,o.Immutable=e.Immutable,o.MutableStoreManager=e.MutableStoreManager,o.React=e.React,o.ReactRedux=e.ReactRedux,o.appActions=e.appActions,o.classNames=e.classNames,o.css=e.css,o.expressionUtils=e.expressionUtils,o.getAppStore=e.getAppStore,o.hooks=e.hooks,o.jsx=e.jsx,o.polished=e.polished},function(e){a.useTheme=e.useTheme},function(e){s.RichTextDisplayer=e.RichTextDisplayer,s.Scrollable=e.Scrollable,s.richTextUtils=e.richTextUtils}],execute:function(){e((()=>{var e={72957:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M2.854 2.153a.485.485 0 0 0-.708 0 .538.538 0 0 0 0 .738l5.5 5.956a.485.485 0 0 0 .708 0l5.5-5.956a.538.538 0 0 0 0-.738.485.485 0 0 0-.708 0L8 7.74 2.854 2.153Zm0 5a.485.485 0 0 0-.708 0 .538.538 0 0 0 0 .738l5.5 5.956a.485.485 0 0 0 .708 0l5.5-5.956a.538.538 0 0 0 0-.738.485.485 0 0 0-.708 0L8 12.74 2.854 7.153Z" clip-rule="evenodd"></path></svg>'},48891:e=>{"use strict";e.exports=o},34796:e=>{"use strict";e.exports=a},30726:e=>{"use strict";e.exports=s}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="";var r={};return n.p=window.jimuConfig.baseUrl,(()=>{"use strict";n.r(r),n.d(r,{__set_webpack_public_path__:()=>v,default:()=>m});var e=n(48891),t=n(72957),o=n.n(t);const a=t=>{const a=window.SVG,{className:s}=t,n=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(o[a[s]]=e[a[s]])}return o}(t,["className"]),r=(0,e.classNames)("jimu-icon jimu-icon-component",s);return a?e.React.createElement(a,Object.assign({className:r,src:o()},n)):e.React.createElement("svg",Object.assign({className:r},n))};var s=n(34796),l=n(30726);const{useState:i,useEffect:u,useRef:c}=e.React;function d(t){var o;const{value:n="",placeholder:r,repeatedDataSource:d,useDataSources:p,widgetId:f,wrap:g,tooltip:m}=t,v=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(o[a[s]]=e[a[s]])}return o}(t,["value","placeholder","repeatedDataSource","useDataSources","widgetId","wrap","tooltip"]),x=e.React.useMemo((()=>n.replace(/\ufeff/g,"")),[n]),b=(0,s.useTheme)(),h=c(),S=e.expressionUtils.isSingleStringExpression(m),[w,y]=i(""),[R,j]=e.React.useState("24px"),[M,E]=e.React.useState(!1),[O,D]=e.React.useState(!1),[I,N]=e.React.useState(0),[k,P]=e.React.useState(!1),T=((t,o,a)=>{var s,n,r,l,i;const u=null===(s=null==a?void 0:a.colors)||void 0===s?void 0:s.white,c=null!==(i=null===(l=null===(r=null===(n=null==a?void 0:a.colors)||void 0===n?void 0:n.palette)||void 0===r?void 0:r.light)||void 0===l?void 0:l[500])&&void 0!==i?i:"#444";return e.React.useMemo((()=>{const a=e.css`
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
          background: ${u};
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
          background: linear-gradient(180deg, rgba(182, 182, 182, 0) 0%, ${e.polished.rgba(c,.5)} 100%);
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
    `}),[u,c,o,t])})(g,R,b),A=e.React.useCallback((e=>{if(null==e)return;const{scrollable:t,bottoming:o}=e;E(o),D(t)}),[]);u((()=>{if(null!=m&&S){const t=e.expressionUtils.getSingleStringExpressionText(m);y(t)}}),[m,S]);const U=c();return(0,e.jsx)("div",Object.assign({css:T,title:w,onMouseEnter:()=>{var e,t;null!=U.current&&(clearTimeout(U.current),U.current=null);const o=(a=null!==(t=null===(e=h.current)||void 0===e?void 0:e.clientHeight)&&void 0!==t?t:0)<=80?"0px":a<=140?"24px":"15%";var a;P("0px"!==o),N((e=>e+1)),j(o)},onMouseLeave:()=>{U.current=setTimeout((()=>{P(!1),U.current=null}),500)},ref:h},v),(0,e.jsx)(l.Scrollable,{ref:A,version:I},(0,e.jsx)(l.RichTextDisplayer,{widgetId:f,repeatedDataSource:d,useDataSources:p,value:x,placeholder:r})),k&&O&&!M&&(0,e.jsx)("div",{className:"text-fade text-fade-bottom"},(0,e.jsx)("span",{className:"arrow arrow-bottom rounded-circle mr-1"},(0,e.jsx)(a,{className:"bounce",color:null===(o=null==b?void 0:b.colors)||void 0===o?void 0:o.black}))),!S&&m&&(0,e.jsx)(e.ExpressionResolverComponent,{useDataSources:p,expression:m,widgetId:f,onChange:e=>{(null==e?void 0:e.isSuccessful)&&y(e.value)}}))}const p={_widgetLabel:"Text",defaultPlaceholder:"Double click to edit text"};var f;!function(e){e[e.None=0]="None",e[e.Main=1]="Main",e[e.Sub=2]="Sub"}(f||(f={}));const g=e.css`
  /* Ensure that the cursor can be displayed when automatic width of layout */
  min-width: 12px;
`,m=t=>{var o,a,s;const{builderSupportModules:n,id:r,intl:i,useDataSources:u,repeatedDataSource:c,useDataSourcesEnabled:m,isInlineEditing:v,config:x,onInitResizeHandler:b}=t,h=e.ReactRedux.useDispatch(),{current:S}=e.React.useRef((0,e.getAppStore)().getState().appContext.isInBuilder),w=e.hooks.useWidgetSelected(r),y=e.hooks.useLatest(w),R=e.ReactRedux.useSelector((e=>e.appRuntimeInfo.appMode)),j=null==n?void 0:n.jimuForBuilderLib.getAppConfigAction,M=null==n?void 0:n.widgetModules.Editor,E=null==n?void 0:n.widgetModules.builderUtils,O=null===(a=null===(o=null==x?void 0:x.style)||void 0===o?void 0:o.wrap)||void 0===a||a,D=null==x?void 0:x.text,I=null==x?void 0:x.tooltip,N=((e,t)=>(e===p.defaultPlaceholder&&(e=((e,t)=>null!==t?t.formatMessage({id:e,defaultMessage:p[e]}):"")("defaultPlaceholder",t)),e))(null==x?void 0:x.placeholder,i),k=m?u:void 0,P=null!==(s=null==k?void 0:k.length)&&void 0!==s?s:0,[T,A]=e.React.useState(f.Sub),[U,C]=e.React.useState(null);e.React.useEffect((()=>{let e;e=null==c?f.None:0===c.recordIndex?f.Main:f.Sub,A(e)}),[c]),e.React.useEffect((()=>{y.current&&R===e.AppMode.Run&&h(e.appActions.setWidgetIsInlineEditingState(r,!1))}),[y,R,h,r]),e.hooks.useUpdateEffect((()=>{S&&(v||h(e.appActions.widgetStatePropChange(r,"showExpression",!1)))}),[v,h,r]);const _=R===e.AppMode.Design&&T!==f.Sub,L=_&&w,W=_&&v,$=e.React.useRef(!1);e.React.useEffect((()=>()=>{$.current=!0}),[]),e.hooks.useUpdateEffect((()=>{let t=l.richTextUtils.getAllExpressions(D);t=null!=t?t:(0,e.Immutable)({}),t=t.merge(null!=I?{tooltip:I}:{}),C(t)}),[D,I,P]);const B=e.hooks.useEventCallback((()=>{if($.current)return;if(!S)return;const t=E.getExpressionParts(U),o=e.expressionUtils.getUseDataSourceFromExpParts(t,k);j().editWidget({id:r,useDataSources:o}).exec()}));return e.hooks.useUpdateEffect((()=>{B()}),[U,B]),(0,e.jsx)("div",{"data-testid":"text-widget",css:g,className:(0,e.classNames)("widget-text jimu-widget p-1")},L&&(0,e.jsx)(M,{className:(0,e.classNames)({"d-none":!W}),widgetId:r,nowrap:!O,onInitResizeHandler:b,useDataSources:k,enabled:!!v,onCreate:t=>{e.MutableStoreManager.getInstance().updateStateValue(r,"editor",t)},onDestory:()=>{e.MutableStoreManager.getInstance().updateStateValue(r,"editor",null)},onComplete:(e,t)=>{$.current||S&&j().editWidget({id:r,config:x.set("text",e).set("placeholder",t)}).exec()},placeholder:N,preserveWhitespace:!0,value:D}),(0,e.jsx)(d,{className:(0,e.classNames)({"d-none":W}),value:D,tooltip:I,wrap:O,placeholder:N,useDataSources:k,widgetId:r,repeatedDataSource:c}))};function v(e){n.p=e}})(),r})())}}}));