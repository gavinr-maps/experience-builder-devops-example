System.register(["jimu-core","jimu-ui","jimu-theme"],(function(e,t){var o={},s={},a={};return{setters:[function(e){o.AppMode=e.AppMode,o.ExpressionResolverComponent=e.ExpressionResolverComponent,o.Immutable=e.Immutable,o.MutableStoreManager=e.MutableStoreManager,o.React=e.React,o.ReactRedux=e.ReactRedux,o.appActions=e.appActions,o.classNames=e.classNames,o.css=e.css,o.expressionUtils=e.expressionUtils,o.getAppStore=e.getAppStore,o.jsx=e.jsx,o.polished=e.polished},function(e){s.RichTextDisplayer=e.RichTextDisplayer,s.SVG=e.SVG,s.Scrollable=e.Scrollable,s.hooks=e.hooks,s.richTextUtils=e.richTextUtils},function(e){a.useTheme=e.useTheme}],execute:function(){e((()=>{var e={72957:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.854 2.153a.485.485 0 0 0-.708 0 .538.538 0 0 0 0 .738l5.5 5.956a.485.485 0 0 0 .708 0l5.5-5.956a.538.538 0 0 0 0-.738.485.485 0 0 0-.708 0L8 7.74 2.854 2.153Zm0 5a.485.485 0 0 0-.708 0 .538.538 0 0 0 0 .738l5.5 5.956a.485.485 0 0 0 .708 0l5.5-5.956a.538.538 0 0 0 0-.738.485.485 0 0 0-.708 0L8 12.74 2.854 7.153Z" fill="#000"></path></svg>'},48891:e=>{"use strict";e.exports=o},34796:e=>{"use strict";e.exports=a},30726:e=>{"use strict";e.exports=s}},t={};function n(o){var s=t[o];if(void 0!==s)return s.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="";var r={};return n.p=window.jimuConfig.baseUrl,(()=>{"use strict";n.r(r),n.d(r,{default:()=>x});var e=n(48891),t=n(30726),o=n(72957),s=n.n(o);const a=o=>{const{className:a}=o,n=function(e,t){var o={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(o[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(s=Object.getOwnPropertySymbols(e);a<s.length;a++)t.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(e,s[a])&&(o[s[a]]=e[s[a]])}return o}(o,["className"]),r=(0,e.classNames)("jimu-icon jimu-icon-component",a);return e.React.createElement(t.SVG,Object.assign({className:r,src:s()},n))};var l=n(34796);const{useState:i,useEffect:u,useRef:c}=e.React;function d(o){var s;const{value:n="",placeholder:r,repeatedDataSource:d,useDataSources:p,widgetId:f,wrap:g,tooltip:x}=o,m=function(e,t){var o={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(o[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(s=Object.getOwnPropertySymbols(e);a<s.length;a++)t.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(e,s[a])&&(o[s[a]]=e[s[a]])}return o}(o,["value","placeholder","repeatedDataSource","useDataSources","widgetId","wrap","tooltip"]),v=e.React.useMemo((()=>n.replace(/\ufeff/g,"")),[n]),h=(0,l.useTheme)(),b=c(),S=e.expressionUtils.isSingleStringExpression(x),[w,y]=i(""),[R,j]=e.React.useState("24px"),[M,E]=e.React.useState(!1),[D,O]=e.React.useState(!1),[I,U]=e.React.useState(0),[N,P]=e.React.useState(!1),k=((t,o,s)=>{var a,n,r,l,i;const u=null===(a=null==s?void 0:s.colors)||void 0===a?void 0:a.white,c=null!==(i=null===(l=null===(r=null===(n=null==s?void 0:s.colors)||void 0===n?void 0:n.palette)||void 0===r?void 0:r.light)||void 0===l?void 0:l[500])&&void 0!==i?i:"#444";return e.React.useMemo((()=>{const s=e.css`
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

      ${!t&&s};
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
    `}),[u,c,o,t])})(g,R,h),T=e.React.useCallback((e=>{if(null==e)return;const{scrollable:t,bottoming:o}=e;E(o),O(t)}),[]);u((()=>{if(null!=x&&S){const t=e.expressionUtils.getSingleStringExpressionText(x);y(t)}}),[x,S]);const A=c();return(0,e.jsx)("div",Object.assign({css:k,title:w,onMouseEnter:()=>{var e,t;null!=A.current&&(clearTimeout(A.current),A.current=null);const o=(s=null!==(t=null===(e=b.current)||void 0===e?void 0:e.clientHeight)&&void 0!==t?t:0)<=80?"0px":s<=140?"24px":"15%";var s;P("0px"!==o),U((e=>e+1)),j(o)},onMouseLeave:()=>{A.current=setTimeout((()=>{P(!1),A.current=null}),500)},ref:b},m),(0,e.jsx)(t.Scrollable,{ref:T,version:I},(0,e.jsx)(t.RichTextDisplayer,{widgetId:f,repeatedDataSource:d,useDataSources:p,value:v,placeholder:r})),N&&D&&!M&&(0,e.jsx)("div",{className:"text-fade text-fade-bottom"},(0,e.jsx)("span",{className:"arrow arrow-bottom rounded-circle mr-1"},(0,e.jsx)(a,{className:"bounce",color:null===(s=null==h?void 0:h.colors)||void 0===s?void 0:s.black}))),!S&&x&&(0,e.jsx)(e.ExpressionResolverComponent,{useDataSources:p,expression:x,widgetId:f,onChange:e=>{(null==e?void 0:e.isSuccessful)&&y(e.value)}}))}const p={_widgetLabel:"Text",defaultPlaceholder:"Double click to edit text"};var f;!function(e){e[e.None=0]="None",e[e.Main=1]="Main",e[e.Sub=2]="Sub"}(f||(f={}));const g=e.css`
  /* Ensure that the cursor can be displayed when automatic width of layout */
  min-width: 12px;
`,x=o=>{var s,a;const{builderSupportModules:n,id:r,intl:l,useDataSources:i,repeatedDataSource:u,useDataSourcesEnabled:c,isInlineEditing:x,config:m,onInitResizeHandler:v}=o,h=e.ReactRedux.useDispatch(),{current:b}=e.React.useRef((0,e.getAppStore)().getState().appContext.isInBuilder),S=t.hooks.useWidgetSelected(r),w=t.hooks.useRefValue(S),y=e.ReactRedux.useSelector((e=>e.appRuntimeInfo.appMode)),R=null==n?void 0:n.jimuForBuilderLib.getAppConfigAction,j=null==n?void 0:n.widgetModules.Editor,M=null==n?void 0:n.widgetModules.builderUtils,E=null===(a=null===(s=null==m?void 0:m.style)||void 0===s?void 0:s.wrap)||void 0===a||a,D=null==m?void 0:m.text,O=null==m?void 0:m.tooltip,I=((e,t)=>(e===p.defaultPlaceholder&&(e=((e,t)=>null!==t?t.formatMessage({id:e,defaultMessage:p[e]}):"")("defaultPlaceholder",t)),e))(null==m?void 0:m.placeholder,l),U=c?i:void 0,[N,P]=e.React.useState(f.Sub),[k,T]=e.React.useState(null);e.React.useEffect((()=>{let e;e=null==u?f.None:0===u.recordIndex?f.Main:f.Sub,P(e)}),[u]),e.React.useEffect((()=>{w.current&&y===e.AppMode.Run&&h(e.appActions.setWidgetIsInlineEditingState(r,!1))}),[w,y,h,r]),t.hooks.useUpdateEffect((()=>{b&&(x||h(e.appActions.widgetStatePropChange(r,"showExpression",!1)))}),[x,h,r]);const A=y===e.AppMode.Design&&N!==f.Sub,C=A&&S,V=A&&x,W=e.React.useRef(!1);e.React.useEffect((()=>()=>{W.current=!0}),[]),t.hooks.useUpdateEffect((()=>{let o=t.richTextUtils.getAllExpressions(D);o=null!=o?o:(0,e.Immutable)({}),o=o.merge(null!=O?{tooltip:O}:{}),T(o)}),[D,O]);const L=t.hooks.useEventCallback((()=>{if(W.current)return;if(!b)return;if(null==U)return;const t=e.expressionUtils.whetherHasFieldsInUseDataSources(U),o=M.getExpressionParts(k);if(!t&&(null==(null==o?void 0:o.length)||0===(null==o?void 0:o.length)))return;let s=e.expressionUtils.getUseDataSourceFromExpParts(o,U);const a=e.expressionUtils.getUseDataSourcesWithoutFields(U);s=e.expressionUtils.mergeUseDataSources(a,s),R().editWidget({id:r,useDataSources:s}).exec()}));return t.hooks.useUpdateEffect((()=>{L()}),[k,L]),(0,e.jsx)("div",{"data-testid":"text-widget",css:g,className:(0,e.classNames)("widget-text jimu-widget p-1")},C&&(0,e.jsx)(j,{className:(0,e.classNames)({"d-none":!V}),widgetId:r,nowrap:!E,onInitResizeHandler:v,useDataSources:U,enabled:!!x,onCreate:t=>{e.MutableStoreManager.getInstance().updateStateValue(r,"editor",t)},onDestory:()=>{e.MutableStoreManager.getInstance().updateStateValue(r,"editor",null)},onChange:(e,t)=>{W.current||b&&R().editWidget({id:r,config:m.set("text",e).set("placeholder",t)}).exec()},placeholder:I,preserveWhitespace:!0,value:D}),(0,e.jsx)(d,{className:(0,e.classNames)({"d-none":V}),value:D,tooltip:O,wrap:E,placeholder:I,useDataSources:U,widgetId:r,repeatedDataSource:u}))}})(),r})())}}}));