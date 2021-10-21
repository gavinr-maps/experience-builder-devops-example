System.register(["jimu-core","jimu-ui"],(function(e,t){var o={},n={};return{setters:[function(e){o.AppMode=e.AppMode,o.ExpressionResolverComponent=e.ExpressionResolverComponent,o.Immutable=e.Immutable,o.MutableStoreManager=e.MutableStoreManager,o.React=e.React,o.ReactRedux=e.ReactRedux,o.appActions=e.appActions,o.classNames=e.classNames,o.css=e.css,o.expressionUtils=e.expressionUtils,o.getAppStore=e.getAppStore,o.jsx=e.jsx,o.polished=e.polished},function(e){n.Icon=e.Icon,n.RichTextDisplayer=e.RichTextDisplayer,n.Scrollable=e.Scrollable,n.hooks=e.hooks,n.richTextUtils=e.richTextUtils}],execute:function(){e((()=>{var e={72957:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.854 2.153a.485.485 0 00-.708 0 .538.538 0 000 .738l5.5 5.956a.485.485 0 00.708 0l5.5-5.956a.538.538 0 000-.738.485.485 0 00-.708 0L8 7.74 2.854 2.153zm0 5a.485.485 0 00-.708 0 .538.538 0 000 .738l5.5 5.956a.485.485 0 00.708 0l5.5-5.956a.538.538 0 000-.738.485.485 0 00-.708 0L8 12.74 2.854 7.153z" fill="#000"></path></svg>'},1810:e=>{"use strict";e.exports=o},21835:e=>{"use strict";e.exports=n}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,r),s.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="";var s={};return r.p=window.jimuConfig.baseUrl,(()=>{"use strict";r.r(s),r.d(s,{default:()=>S});var e=r(1810),t=r(21835),o=r(72957),n=r.n(o);const a=o=>{const{className:r}=o,s=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(o,["className"]),a=(0,e.classNames)("jimu-icon-component",r);return e.React.createElement(t.Icon,Object.assign({className:a,icon:n()},s))};const{useState:l,useEffect:i,useRef:u}=e.React;function c(o){var n;const{value:r="",placeholder:s,repeatedDataSource:c,useDataSources:d,widgetId:p,wrap:f,tooltip:g}=o,x=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(o,["value","placeholder","repeatedDataSource","useDataSources","widgetId","wrap","tooltip"]),v=e.React.useMemo((()=>r.replace(/\ufeff/g,"")),[r]),m=e.ReactRedux.useSelector((e=>e.theme)),h=u(),b=e.expressionUtils.isSingleStringExpression(g),[S,w]=l(""),[y,j]=e.React.useState("24px"),[R,M]=e.React.useState(!1),[D,E]=e.React.useState(!1),[I,O]=e.React.useState(0),[U,P]=e.React.useState(!1),k=((t,o,n)=>{var r,s,a,l,i;const u=null===(r=null==n?void 0:n.colors)||void 0===r?void 0:r.white,c=null!==(i=null===(l=null===(a=null===(s=null==n?void 0:n.colors)||void 0===s?void 0:s.palette)||void 0===a?void 0:a.light)||void 0===l?void 0:l[500])&&void 0!==i?i:"#444";return e.React.useMemo((()=>{const n=e.css`
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
    `}),[u,c,o,t])})(f,y,m),A=e.React.useCallback((e=>{if(null==e)return;const{scrollable:t,bottoming:o}=e;M(o),E(t)}),[]);i((()=>{if(null!=g&&b){const t=e.expressionUtils.getSingleStringExpressionText(g);w(t)}}),[g,b]);const N=u();return(0,e.jsx)("div",Object.assign({css:k,title:S,onMouseEnter:()=>{var e,t;null!=N.current&&(clearTimeout(N.current),N.current=null);const o=(n=null!==(t=null===(e=h.current)||void 0===e?void 0:e.clientHeight)&&void 0!==t?t:0)<=80?"0px":n<=140?"24px":"15%";var n;P("0px"!==o),O((e=>e+1)),j(o)},onMouseLeave:()=>{N.current=setTimeout((()=>{P(!1),N.current=null}),500)},ref:h},x),(0,e.jsx)(t.Scrollable,{ref:A,version:I},(0,e.jsx)(t.RichTextDisplayer,{widgetId:p,repeatedDataSource:c,useDataSources:d,value:v,placeholder:s})),U&&D&&!R&&(0,e.jsx)("div",{className:"text-fade text-fade-bottom"},(0,e.jsx)("span",{className:"arrow arrow-bottom rounded-circle mr-1"},(0,e.jsx)(a,{className:"bounce",color:null===(n=null==m?void 0:m.colors)||void 0===n?void 0:n.black}))),!b&&g&&(0,e.jsx)(e.ExpressionResolverComponent,{useDataSources:d,expression:g,widgetId:p,onChange:e=>{(null==e?void 0:e.isSuccessful)&&w(e.value)}}))}const d={_widgetLabel:"Text",defaultPlaceholder:"Double click to edit text"},{useSelector:p,useDispatch:f}=e.ReactRedux,{useState:g,useMemo:x,useEffect:v,useRef:m}=e.React;var h;!function(e){e[e.None=0]="None",e[e.Main=1]="Main",e[e.Sub=2]="Sub"}(h||(h={}));const b=e.css`
  /* Ensure that the cursor can be displayed when automatic width of layout */
  min-width: 12px;
`,S=o=>{var n,r;const{builderSupportModules:s,id:a,intl:l,useDataSources:i,repeatedDataSource:u,useDataSourcesEnabled:S,isInlineEditing:w,config:y}=o,j=f(),{current:R}=m((0,e.getAppStore)().getState().appContext.isInBuilder),M=t.hooks.useWidgetSelected(a),D=t.hooks.useRefValue(M),E=p((e=>M?e.appRuntimeInfo.appMode:null)),I=null==s?void 0:s.jimuForBuilderLib.getAppConfigAction,O=null==s?void 0:s.widgetModules.Editor,U=null==s?void 0:s.widgetModules.builderUtils,P=null===(r=null===(n=null==y?void 0:y.style)||void 0===n?void 0:n.wrap)||void 0===r||r,k=null==y?void 0:y.text,A=null==y?void 0:y.tooltip,N=((e,t)=>(e===d.defaultPlaceholder&&(e=((e,t)=>null!==t?t.formatMessage({id:e,defaultMessage:d[e]}):"")("defaultPlaceholder",t)),e))(null==y?void 0:y.placeholder,l),C=S?i:void 0,[T,W]=g(h.Sub),[L,_]=g(null);v((()=>{let e;e=null==u?h.None:0===u.recordIndex?h.Main:h.Sub,W(e)}),[u]),v((()=>{D.current&&E===e.AppMode.Run&&j(e.appActions.setWidgetIsInlineEditingState(a,!1))}),[D,E,j,a]),v((()=>{D.current&&j(e.appActions.setWidgetIsInlineEditingState(a,!0))}),[D,j,a]),t.hooks.useUpdateEffect((()=>{R&&(w||j(e.appActions.widgetStatePropChange(a,"showExpression",!1)))}),[w,j,a]);const F=x((()=>E===e.AppMode.Design&&M&&T!==h.Sub),[E,T,M]),$=m(!1);v((()=>()=>{$.current=!0}),[]),t.hooks.useUpdateEffect((()=>{let o=t.richTextUtils.getAllExpressions(k);o=null!=o?o:(0,e.Immutable)({}),o=o.merge(null!=A?{tooltip:A}:{}),_(o)}),[k,A]);const B=t.hooks.useEventCallback((()=>{if($.current)return;if(!R)return;if(null==C)return;const t=e.expressionUtils.whetherHasFieldsInUseDataSources(C),o=U.getExpressionParts(L);if(!t&&(null==(null==o?void 0:o.length)||0===(null==o?void 0:o.length)))return;let n=e.expressionUtils.getUseDataSourceFromExpParts(o,C);const r=e.expressionUtils.getUseDataSourcesWithoutFields(C);n=e.expressionUtils.mergeUseDataSources(r,n),I().editWidget({id:a,useDataSources:n}).exec()}));return t.hooks.useUpdateEffect((()=>{B()}),[L,B]),(0,e.jsx)("div",{"data-testid":"text-widget",css:b,className:(0,e.classNames)("widget-text jimu-widget p-1")},F&&(0,e.jsx)(O,{widgetId:a,nowrap:!P,useDataSources:C,enabled:!!w,onCreate:t=>{e.MutableStoreManager.getInstance().updateStateValue(a,"editor",t)},onDestory:()=>{e.MutableStoreManager.getInstance().updateStateValue(a,"editor",null)},onChange:(e,t)=>{$.current||R&&I().editWidget({id:a,config:y.set("text",e).set("placeholder",t)}).exec()},placeholder:N,preserveWhitespace:!0,value:k}),!F&&(0,e.jsx)(c,{value:k,tooltip:A,wrap:P,placeholder:N,useDataSources:C,widgetId:a,repeatedDataSource:u}))}})(),s})())}}}));