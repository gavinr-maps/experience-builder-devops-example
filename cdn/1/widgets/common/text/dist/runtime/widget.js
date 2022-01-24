System.register(["jimu-core","jimu-ui","jimu-theme"],(function(e,t){var o={},n={},r={};return{setters:[function(e){o.AppMode=e.AppMode,o.ExpressionResolverComponent=e.ExpressionResolverComponent,o.Immutable=e.Immutable,o.MutableStoreManager=e.MutableStoreManager,o.React=e.React,o.ReactRedux=e.ReactRedux,o.appActions=e.appActions,o.classNames=e.classNames,o.css=e.css,o.expressionUtils=e.expressionUtils,o.getAppStore=e.getAppStore,o.jsx=e.jsx,o.polished=e.polished},function(e){n.Icon=e.Icon,n.RichTextDisplayer=e.RichTextDisplayer,n.Scrollable=e.Scrollable,n.hooks=e.hooks,n.richTextUtils=e.richTextUtils},function(e){r.useTheme=e.useTheme}],execute:function(){e((()=>{var e={72957:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.854 2.153a.485.485 0 00-.708 0 .538.538 0 000 .738l5.5 5.956a.485.485 0 00.708 0l5.5-5.956a.538.538 0 000-.738.485.485 0 00-.708 0L8 7.74 2.854 2.153zm0 5a.485.485 0 00-.708 0 .538.538 0 000 .738l5.5 5.956a.485.485 0 00.708 0l5.5-5.956a.538.538 0 000-.738.485.485 0 00-.708 0L8 12.74 2.854 7.153z" fill="#000"></path></svg>'},48891:e=>{"use strict";e.exports=o},34796:e=>{"use strict";e.exports=r},30726:e=>{"use strict";e.exports=n}},t={};function s(o){var n=t[o];if(void 0!==n)return n.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,s),r.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.p="";var a={};return s.p=window.jimuConfig.baseUrl,(()=>{"use strict";s.r(a),s.d(a,{default:()=>w});var e=s(48891),t=s(30726),o=s(72957),n=s.n(o);const r=o=>{const{className:r}=o,s=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(o,["className"]),a=(0,e.classNames)("jimu-icon-component",r);return e.React.createElement(t.Icon,Object.assign({className:a,icon:n()},s))};var l=s(34796);const{useState:i,useEffect:u,useRef:c}=e.React;function d(o){var n;const{value:s="",placeholder:a,repeatedDataSource:d,useDataSources:p,widgetId:f,wrap:g,tooltip:x}=o,v=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(o,["value","placeholder","repeatedDataSource","useDataSources","widgetId","wrap","tooltip"]),m=e.React.useMemo((()=>s.replace(/\ufeff/g,"")),[s]),h=(0,l.useTheme)(),b=c(),S=e.expressionUtils.isSingleStringExpression(x),[w,y]=i(""),[j,M]=e.React.useState("24px"),[R,D]=e.React.useState(!1),[E,I]=e.React.useState(!1),[O,U]=e.React.useState(0),[P,k]=e.React.useState(!1),A=((t,o,n)=>{var r,s,a,l,i;const u=null===(r=null==n?void 0:n.colors)||void 0===r?void 0:r.white,c=null!==(i=null===(l=null===(a=null===(s=null==n?void 0:n.colors)||void 0===s?void 0:s.palette)||void 0===a?void 0:a.light)||void 0===l?void 0:l[500])&&void 0!==i?i:"#444";return e.React.useMemo((()=>{const n=e.css`
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

      ${!t&&n};
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
    `}),[u,c,o,t])})(g,j,h),T=e.React.useCallback((e=>{if(null==e)return;const{scrollable:t,bottoming:o}=e;D(o),I(t)}),[]);u((()=>{if(null!=x&&S){const t=e.expressionUtils.getSingleStringExpressionText(x);y(t)}}),[x,S]);const N=c();return(0,e.jsx)("div",Object.assign({css:A,title:w,onMouseEnter:()=>{var e,t;null!=N.current&&(clearTimeout(N.current),N.current=null);const o=(n=null!==(t=null===(e=b.current)||void 0===e?void 0:e.clientHeight)&&void 0!==t?t:0)<=80?"0px":n<=140?"24px":"15%";var n;k("0px"!==o),U((e=>e+1)),M(o)},onMouseLeave:()=>{N.current=setTimeout((()=>{k(!1),N.current=null}),500)},ref:b},v),(0,e.jsx)(t.Scrollable,{ref:T,version:O},(0,e.jsx)(t.RichTextDisplayer,{widgetId:f,repeatedDataSource:d,useDataSources:p,value:m,placeholder:a})),P&&E&&!R&&(0,e.jsx)("div",{className:"text-fade text-fade-bottom"},(0,e.jsx)("span",{className:"arrow arrow-bottom rounded-circle mr-1"},(0,e.jsx)(r,{className:"bounce",color:null===(n=null==h?void 0:h.colors)||void 0===n?void 0:n.black}))),!S&&x&&(0,e.jsx)(e.ExpressionResolverComponent,{useDataSources:p,expression:x,widgetId:f,onChange:e=>{(null==e?void 0:e.isSuccessful)&&y(e.value)}}))}const p={_widgetLabel:"Text",defaultPlaceholder:"Double click to edit text"},{useSelector:f,useDispatch:g}=e.ReactRedux,{useState:x,useMemo:v,useEffect:m,useRef:h}=e.React;var b;!function(e){e[e.None=0]="None",e[e.Main=1]="Main",e[e.Sub=2]="Sub"}(b||(b={}));const S=e.css`
  /* Ensure that the cursor can be displayed when automatic width of layout */
  min-width: 12px;
`,w=o=>{var n,r;const{builderSupportModules:s,id:a,intl:l,useDataSources:i,repeatedDataSource:u,useDataSourcesEnabled:c,isInlineEditing:w,config:y}=o,j=g(),{current:M}=h((0,e.getAppStore)().getState().appContext.isInBuilder),R=t.hooks.useWidgetSelected(a),D=t.hooks.useRefValue(R),E=f((e=>R?e.appRuntimeInfo.appMode:null)),I=null==s?void 0:s.jimuForBuilderLib.getAppConfigAction,O=null==s?void 0:s.widgetModules.Editor,U=null==s?void 0:s.widgetModules.builderUtils,P=null===(r=null===(n=null==y?void 0:y.style)||void 0===n?void 0:n.wrap)||void 0===r||r,k=null==y?void 0:y.text,A=null==y?void 0:y.tooltip,T=((e,t)=>(e===p.defaultPlaceholder&&(e=((e,t)=>null!==t?t.formatMessage({id:e,defaultMessage:p[e]}):"")("defaultPlaceholder",t)),e))(null==y?void 0:y.placeholder,l),N=c?i:void 0,[C,W]=x(b.Sub),[L,_]=x(null);m((()=>{let e;e=null==u?b.None:0===u.recordIndex?b.Main:b.Sub,W(e)}),[u]),m((()=>{D.current&&E===e.AppMode.Run&&j(e.appActions.setWidgetIsInlineEditingState(a,!1))}),[D,E,j,a]),m((()=>{D.current&&j(e.appActions.setWidgetIsInlineEditingState(a,!0))}),[D,j,a]),t.hooks.useUpdateEffect((()=>{M&&(w||j(e.appActions.widgetStatePropChange(a,"showExpression",!1)))}),[w,j,a]);const F=v((()=>E===e.AppMode.Design&&R&&C!==b.Sub),[E,C,R]),$=h(!1);m((()=>()=>{$.current=!0}),[]),t.hooks.useUpdateEffect((()=>{let o=t.richTextUtils.getAllExpressions(k);o=null!=o?o:(0,e.Immutable)({}),o=o.merge(null!=A?{tooltip:A}:{}),_(o)}),[k,A]);const B=t.hooks.useEventCallback((()=>{if($.current)return;if(!M)return;if(null==N)return;const t=e.expressionUtils.whetherHasFieldsInUseDataSources(N),o=U.getExpressionParts(L);if(!t&&(null==(null==o?void 0:o.length)||0===(null==o?void 0:o.length)))return;let n=e.expressionUtils.getUseDataSourceFromExpParts(o,N);const r=e.expressionUtils.getUseDataSourcesWithoutFields(N);n=e.expressionUtils.mergeUseDataSources(r,n),I().editWidget({id:a,useDataSources:n}).exec()}));return t.hooks.useUpdateEffect((()=>{B()}),[L,B]),(0,e.jsx)("div",{"data-testid":"text-widget",css:S,className:(0,e.classNames)("widget-text jimu-widget p-1")},F&&(0,e.jsx)(O,{widgetId:a,nowrap:!P,useDataSources:N,enabled:!!w,onCreate:t=>{e.MutableStoreManager.getInstance().updateStateValue(a,"editor",t)},onDestory:()=>{e.MutableStoreManager.getInstance().updateStateValue(a,"editor",null)},onChange:(e,t)=>{$.current||M&&I().editWidget({id:a,config:y.set("text",e).set("placeholder",t)}).exec()},placeholder:T,preserveWhitespace:!0,value:k}),!F&&(0,e.jsx)(d,{value:k,tooltip:A,wrap:P,placeholder:T,useDataSources:N,widgetId:a,repeatedDataSource:u}))}})(),a})())}}}));