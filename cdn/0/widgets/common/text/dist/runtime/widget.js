System.register(["jimu-core","jimu-ui"],(function(e){var t,o;return{setters:[function(e){t=e},function(e){o=e}],execute:function(){e(function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=525)}({0:function(e,o){e.exports=t},1:function(e,t){e.exports=o},427:function(e,t){e.exports='<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.161 1.98l4.31 4.541a.726.726 0 001.058 0l4.31-4.54a.592.592 0 000-.813.534.534 0 00-.779 0L6 5.448l-4.06-4.28a.534.534 0 00-.779 0 .592.592 0 000 .813zm0 4l4.31 4.541a.726.726 0 001.058 0l4.31-4.54a.592.592 0 000-.813.534.534 0 00-.779 0L6 9.448l-4.06-4.28a.534.534 0 00-.779 0 .592.592 0 000 .813z"></path></svg>'},525:function(e,t,o){"use strict";o.r(t);var n=o(0),r=o(1),i=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o};const{useState:a,useEffect:l,useRef:s}=n.React,u=o(427);function c(e){var t;const{value:o,placeholder:c,repeatedDataSource:d,useDataSources:p,widgetId:f,wrap:g,tooltip:v}=e,b=i(e,["value","placeholder","repeatedDataSource","useDataSources","widgetId","wrap","tooltip"]),x=n.ReactRedux.useSelector(e=>e.theme),h=s(),m=n.expressionUtils.isSingleStringExpression(v),[S,w]=a(""),[j,y]=n.React.useState("24px"),[O,M]=n.React.useState(!1),[D,E]=n.React.useState(!1),[I,R]=n.React.useState(0),[U,k]=n.React.useState(!1),P=((e,t,o)=>{var r,i,a,l,s;const u=null===(r=null==o?void 0:o.colors)||void 0===r?void 0:r.white,c=null!==(s=null===(l=null===(a=null===(i=null==o?void 0:o.colors)||void 0===i?void 0:i.palette)||void 0===a?void 0:a.light)||void 0===l?void 0:l[500])&&void 0!==s?s:"#444";return n.React.useMemo(()=>{const o=n.css`
      .rich-displayer {
        white-space: nowrap !important;
      }
   `;return n.css`
      width: 100%;
      height: 100%;
      position: relative;
      overflow-y: hidden;
      .rich-displayer {
        width: 100%;
        height: fit-content;
      }

      ${!e&&o};
      .text-fade {
        position: absolute;
        left: 0;
        height: ${t};
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
          background: linear-gradient(180deg, rgba(182, 182, 182, 0) 0%, ${n.polished.rgba(c,.5)} 100%);
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
    `},[u,c,t,e])})(g,j,x),A=n.React.useCallback(e=>{if(null==e)return;const{scrollable:t,bottoming:o}=e;M(o),E(t)},[]);l(()=>{if(null!=v&&m){const e=n.expressionUtils.getSingleStringExpressionText(v);w(e)}},[v,m]);const C=s();return Object(n.jsx)("div",Object.assign({css:P,title:S,onMouseEnter:()=>{var e,t;null!=C.current&&(clearTimeout(C.current),C.current=null);const o=(n=null!==(t=null===(e=h.current)||void 0===e?void 0:e.clientHeight)&&void 0!==t?t:0)<=80?"0px":n<=140?"24px":"15%";var n;k("0px"!==o),R(e=>e+1),y(o)},onMouseLeave:()=>{C.current=setTimeout(()=>{k(!1),C.current=null},500)},ref:h},b),Object(n.jsx)(r.Scrollable,{ref:A,version:I},Object(n.jsx)(r.RichTextDisplayer,{widgetId:f,repeatedDataSource:d,useDataSources:p,value:o,placeholder:c})),U&&D&&!O&&Object(n.jsx)("div",{className:"text-fade text-fade-bottom"},Object(n.jsx)("span",{className:"arrow arrow-bottom rounded-circle mr-1"},Object(n.jsx)(r.Icon,{className:"bounce",icon:u,size:13,color:null===(t=null==x?void 0:x.colors)||void 0===t?void 0:t.black}))),!m&&v&&Object(n.jsx)(n.ExpressionResolverComponent,{useDataSources:p,expression:v,widgetId:f,onChange:e=>{(null==e?void 0:e.isSuccessful)&&w(e.value)}}))}var d={_widgetLabel:"Text",placeholder:"Double click to edit text"};const{useSelector:p,useDispatch:f}=n.ReactRedux,{useState:g,useMemo:v,useEffect:b,useRef:x}=n.React;var h;!function(e){e[e.None=0]="None",e[e.Main=1]="Main",e[e.Sub=2]="Sub"}(h||(h={}));const m=(e,t)=>(e===d.placeholder&&(e=((e,t)=>null!==t?t.formatMessage({id:e,defaultMessage:d[e]}):"")("placeholder",t)),e),S=n.css`
  /* Ensure that the cursor can be displayed when automatic width of layout */
  min-width: 12px;
`;t.default=e=>{var t,o;const{builderSupportModules:i,id:a,intl:l,useDataSources:s,repeatedDataSource:u,useDataSourcesEnabled:d,isInlineEditing:w,config:j}=e,y=f(),{current:O}=x(Object(n.getAppStore)().getState().appContext.isInBuilder),M=r.hooks.useWidgetSelected(a),D=r.hooks.useRefValue(M),E=p(e=>M?e.appRuntimeInfo.appMode:null),I=null==i?void 0:i.jimuForBuilderLib.getAppConfigAction,R=null==i?void 0:i.widgetModules.Editor,U=null==i?void 0:i.widgetModules.builderUtils,k=null===(o=null===(t=null==j?void 0:j.style)||void 0===t?void 0:t.wrap)||void 0===o||o,P=null==j?void 0:j.text,A=null==j?void 0:j.tooltip,C=m(null==j?void 0:j.placeholder,l),N=d?s:void 0,[T,W]=g(h.Sub),[_,L]=g(null);b(()=>{let e;e=null==u?h.None:0===u.recordIndex?h.Main:h.Sub,W(e)},[u]),b(()=>{D.current&&E===n.AppMode.Run&&y(n.appActions.setWidgetIsInlineEditingState(a,!1))},[D,E,y,a]),b(()=>{D.current&&y(n.appActions.setWidgetIsInlineEditingState(a,!0))},[D,y,a]),r.hooks.useUpdateEffect(()=>{O&&(w||y(n.appActions.widgetStatePropChange(a,"showExpression",!1)))},[w,y,a]);const F=v(()=>E===n.AppMode.Design&&M&&T!==h.Sub,[E,T,M]),$=x(!1);b(()=>()=>{$.current=!0},[]),r.hooks.useUpdateEffect(()=>{let e=r.richTextUtils.getAllExpressions(P);e=null!=e?e:Object(n.Immutable)({}),e=e.merge(null!=A?{tooltip:A}:{}),L(e)},[P,A]);const z=r.hooks.useEventCallback(()=>{if($.current)return;if(!O)return;if(null==N)return;const e=n.expressionUtils.whetherHasFieldsInUseDataSources(N),t=U.getExpressionParts(_);if(!e&&(null==(null==t?void 0:t.length)||0===(null==t?void 0:t.length)))return;let o=n.expressionUtils.getUseDataSourceFromExpParts(t,N);const r=n.expressionUtils.getUseDataSourcesWithoutFields(N);o=n.expressionUtils.mergeUseDataSources(r,o),I().editWidget({id:a,useDataSources:o}).exec()});return r.hooks.useUpdateEffect(()=>{z()},[_,z]),Object(n.jsx)("div",{"data-testid":"text-widget",css:S,className:Object(n.classNames)("widget-text jimu-widget p-1")},F&&Object(n.jsx)(R,{widgetId:a,nowrap:!k,useDataSources:N,enabled:!!w,onCreate:e=>{n.MutableStoreManager.getInstance().updateStateValue(a,"editor",e)},onDestory:()=>{n.MutableStoreManager.getInstance().updateStateValue(a,"editor",null)},onChange:(e,t)=>{$.current||O&&I().editWidget({id:a,config:j.set("text",e).set("placeholder",t)}).exec()},placeholder:C,preserveWhitespace:!0,value:P}),!F&&Object(n.jsx)(c,{value:P,tooltip:A,wrap:k,placeholder:C,useDataSources:N,widgetId:a,repeatedDataSource:u}))}}}))}}}));