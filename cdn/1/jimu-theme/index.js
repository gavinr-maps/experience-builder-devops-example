/*! For license information please see index.js.LICENSE.txt */
System.register(["jimu-core"],(function(e,t){var o={};return{setters:[function(e){o.CONSTANTS=e.CONSTANTS,o.CacheProvider=e.CacheProvider,o.Global=e.Global,o.INTERACTIVE_CLASS=e.INTERACTIVE_CLASS,o.Immutable=e.Immutable,o.React=e.React,o.ThemeCommonColorKeys=e.ThemeCommonColorKeys,o.ThemeContext=e.ThemeContext,o.ThemeManager=e.ThemeManager,o.ThemeProvider=e.ThemeProvider,o.ThemeThemeColorKeys=e.ThemeThemeColorKeys,o.css=e.css,o.getAppStore=e.getAppStore,o.lodash=e.lodash,o.polished=e.polished,o.styled=e.styled,o.urlUtils=e.urlUtils,o.useTheme=e.useTheme,o.withTheme=e.withTheme}],execute:function(){e((()=>{var e={832:(e,t)=>{var o;function r(e,t){var o=[],r=0;function i(e){return o.push(e),t}function n(){return o[r++]}return{tokenize:function(t){return t.replace(e,i)},detokenize:function(e){return e.replace(new RegExp("("+t+")","g"),n)}}}o=new function(){var e="(?:[0-9]*\\.[0-9]+|[0-9]+)",t="\\/\\*\\!?\\s*@noflip\\s*\\*\\/",o="(?:(?:(?:\\\\[0-9a-f]{1,6})(?:\\r\\n|\\s)?)|\\\\[^\\r\\n\\f0-9a-f])",i="(?:[_a-z0-9-]|[^\\u0020-\\u007e]|"+o+")",n=e+"(?:\\s*(?:em|ex|px|cm|mm|in|pt|pc|deg|rad|grad|ms|s|hz|khz|%)|-?(?:[_a-z]|[^\\u0020-\\u007e]|(?:(?:(?:\\\\[0-9a-f]{1,6})(?:\\r\\n|\\s)?)|\\\\[^\\r\\n\\f0-9a-f]))(?:[_a-z0-9-]|[^\\u0020-\\u007e]|(?:(?:(?:\\\\[0-9a-f]{1,6})(?:\\r\\n|\\s)?)|\\\\[^\\r\\n\\f0-9a-f]))*)?",l="((?:-?"+n+")|(?:inherit|auto))",s="(#?"+i+"+|(?:rgba?|hsla?)\\([ \\d.,%-]+\\))",a="(?:[!#$%&*-~]|[^\\u0020-\\u007e]|"+o+")*?",d="(?!("+i+"|\\r?\\n|\\s|#|\\:|\\.|\\,|\\+|>|~|\\(|\\)|\\[|\\]|=|\\*=|~=|\\^=|'[^']*'|\"[^\"]*\"|`COMMENT`)*?{)",c="(?!"+a+"['\"]?\\s*\\))",h="(?="+a+"['\"]?\\s*\\))",u="(\\s*(?:!important\\s*)?[;}])",p=/`TMP`/g,g=new RegExp("\\/\\*[^*]*\\*+([^\\/*][^*]*\\*+)*\\/","gi"),b=new RegExp("("+t+d+"[^;}]+;?)","gi"),f=new RegExp("("+t+"[^\\}]*?})","gi"),m=new RegExp("(direction\\s*:\\s*)ltr","gi"),v=new RegExp("(direction\\s*:\\s*)rtl","gi"),y=new RegExp("(^|[^a-zA-Z])(left)(?![a-zA-Z])"+c+d,"gi"),w=new RegExp("(^|[^a-zA-Z])(right)(?![a-zA-Z])"+c+d,"gi"),$=new RegExp("(^|[^a-zA-Z])(left)"+h,"gi"),x=new RegExp("(^|[^a-zA-Z])(right)"+h,"gi"),k=new RegExp("(^|[^a-zA-Z])(ltr)"+h,"gi"),z=new RegExp("(^|[^a-zA-Z])(rtl)"+h,"gi"),S=new RegExp("(^|[^a-zA-Z])([ns]?)e-resize","gi"),R=new RegExp("(^|[^a-zA-Z])([ns]?)w-resize","gi"),_=new RegExp("((?:margin|padding|border-width)\\s*:\\s*)"+l+"(\\s+)"+l+"(\\s+)"+l+"(\\s+)"+l+u,"gi"),O=new RegExp("((?:-color|border-style)\\s*:\\s*)"+s+"(\\s+)"+s+"(\\s+)"+s+"(\\s+)"+s+u,"gi"),j=new RegExp("(background(?:-position)?\\s*:\\s*(?:[^:;}\\s]+\\s+)*?)("+n+")","gi"),C=new RegExp("(background-position-x\\s*:\\s*)(-?"+e+"%)","gi"),q=new RegExp("(border-radius\\s*:\\s*)"+l+"(?:(?:\\s+"+l+")(?:\\s+"+l+")?(?:\\s+"+l+")?)?(?:(?:(?:\\s*\\/\\s*)"+l+")(?:\\s+"+l+")?(?:\\s+"+l+")?(?:\\s+"+l+")?)?"+u,"gi"),I=new RegExp("(box-shadow\\s*:\\s*(?:inset\\s*)?)"+l,"gi"),T=new RegExp("(text-shadow\\s*:\\s*)"+l+"(\\s*)"+s,"gi"),A=new RegExp("(text-shadow\\s*:\\s*)"+s+"(\\s*)"+l,"gi"),E=new RegExp("(text-shadow\\s*:\\s*)"+l,"gi"),P=new RegExp("(transform\\s*:[^;}]*)(translateX\\s*\\(\\s*)"+l+"(\\s*\\))","gi"),B=new RegExp("(transform\\s*:[^;}]*)(translate\\s*\\(\\s*)"+l+"((?:\\s*,\\s*"+l+"){0,2}\\s*\\))","gi");function M(e,t,o){var r,i;return"%"===o.slice(-1)&&(-1!==(r=o.indexOf("."))?(i=o.length-r-2,o=(o=100-parseFloat(o)).toFixed(i)+"%"):o=100-parseFloat(o)+"%"),t+o}function F(e){switch(e.length){case 4:e=[e[1],e[0],e[3],e[2]];break;case 3:e=[e[1],e[0],e[1],e[2]];break;case 2:e=[e[1],e[0]];break;case 1:e=[e[0]]}return e.join(" ")}function L(e,t){var o=[].slice.call(arguments),r=o.slice(2,6).filter((function(e){return e})),i=o.slice(6,10).filter((function(e){return e})),n=o[10]||"";return t+(i.length?F(r)+" / "+F(i):F(r))+n}function N(e){return 0===parseFloat(e)?e:"-"===e[0]?e.slice(1):"-"+e}function H(e,t,o){return t+N(o)}function X(e,t,o,r,i){return t+o+N(r)+i}function Y(e,t,o,r,i){return t+o+r+N(i)}return{transform:function(e,t){var o=new r(b,"`NOFLIP_SINGLE`"),i=new r(f,"`NOFLIP_CLASS`"),n=new r(g,"`COMMENT`");return e=n.tokenize(i.tokenize(o.tokenize(e.replace("`","%60")))),t.transformDirInUrl&&(e=e.replace(k,"$1`TMP`").replace(z,"$1ltr").replace(p,"rtl")),t.transformEdgeInUrl&&(e=e.replace($,"$1`TMP`").replace(x,"$1left").replace(p,"right")),e=e.replace(m,"$1`TMP`").replace(v,"$1ltr").replace(p,"rtl").replace(y,"$1`TMP`").replace(w,"$1left").replace(p,"right").replace(S,"$1$2`TMP`").replace(R,"$1$2e-resize").replace(p,"w-resize").replace(q,L).replace(I,H).replace(T,Y).replace(A,Y).replace(E,H).replace(P,X).replace(B,X).replace(_,"$1$2$3$8$5$6$7$4$9").replace(O,"$1$2$3$8$5$6$7$4$9").replace(j,M).replace(C,M),o.detokenize(i.detokenize(n.detokenize(e)))}}},e.exports?t.transform=function(e,t,r){var i;return"object"==typeof t?i=t:(i={},"boolean"==typeof t&&(i.transformDirInUrl=t),"boolean"==typeof r&&(i.transformEdgeInUrl=r)),o.transform(e,i)}:"undefined"!=typeof window&&(window.cssjanus=o)},679:(e,t,o)=>{"use strict";var r=o(864),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},l={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function a(e){return r.isMemo(e)?l:s[e.$$typeof]||i}s[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[r.Memo]=l;var d=Object.defineProperty,c=Object.getOwnPropertyNames,h=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,g=Object.prototype;e.exports=function e(t,o,r){if("string"!=typeof o){if(g){var i=p(o);i&&i!==g&&e(t,i,r)}var l=c(o);h&&(l=l.concat(h(o)));for(var s=a(t),b=a(o),f=0;f<l.length;++f){var m=l[f];if(!(n[m]||r&&r[m]||b&&b[m]||s&&s[m])){var v=u(o,m);try{d(t,m,v)}catch(e){}}}}return t}},921:(e,t)=>{"use strict";var o="function"==typeof Symbol&&Symbol.for,r=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,n=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,s=o?Symbol.for("react.profiler"):60114,a=o?Symbol.for("react.provider"):60109,d=o?Symbol.for("react.context"):60110,c=o?Symbol.for("react.async_mode"):60111,h=o?Symbol.for("react.concurrent_mode"):60111,u=o?Symbol.for("react.forward_ref"):60112,p=o?Symbol.for("react.suspense"):60113,g=o?Symbol.for("react.suspense_list"):60120,b=o?Symbol.for("react.memo"):60115,f=o?Symbol.for("react.lazy"):60116,m=o?Symbol.for("react.block"):60121,v=o?Symbol.for("react.fundamental"):60117,y=o?Symbol.for("react.responder"):60118,w=o?Symbol.for("react.scope"):60119;function $(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case c:case h:case n:case s:case l:case p:return e;default:switch(e=e&&e.$$typeof){case d:case u:case f:case b:case a:return e;default:return t}}case i:return t}}}function x(e){return $(e)===h}t.AsyncMode=c,t.ConcurrentMode=h,t.ContextConsumer=d,t.ContextProvider=a,t.Element=r,t.ForwardRef=u,t.Fragment=n,t.Lazy=f,t.Memo=b,t.Portal=i,t.Profiler=s,t.StrictMode=l,t.Suspense=p,t.isAsyncMode=function(e){return x(e)||$(e)===c},t.isConcurrentMode=x,t.isContextConsumer=function(e){return $(e)===d},t.isContextProvider=function(e){return $(e)===a},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return $(e)===u},t.isFragment=function(e){return $(e)===n},t.isLazy=function(e){return $(e)===f},t.isMemo=function(e){return $(e)===b},t.isPortal=function(e){return $(e)===i},t.isProfiler=function(e){return $(e)===s},t.isStrictMode=function(e){return $(e)===l},t.isSuspense=function(e){return $(e)===p},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===h||e===s||e===l||e===p||e===g||"object"==typeof e&&null!==e&&(e.$$typeof===f||e.$$typeof===b||e.$$typeof===a||e.$$typeof===d||e.$$typeof===u||e.$$typeof===v||e.$$typeof===y||e.$$typeof===w||e.$$typeof===m)},t.typeOf=$},864:(e,t,o)=>{"use strict";e.exports=o(921)},810:e=>{"use strict";e.exports=o}},t={};function r(o){var i=t[o];if(void 0!==i)return i.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,r),n.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{"use strict";r.r(i),r.d(i,{CacheProvider:()=>Y,Global:()=>W,PaletteGenerator:()=>M,ThemeContext:()=>G,ThemeProvider:()=>K,caret:()=>a,createEmotionCache:()=>tt,createEmotionRTLCache:()=>ot,createTheme:()=>Tt,formValidation:()=>c,getBoxStyles:()=>h,getBuilderThemeVariables:()=>rt,getComponentVariants:()=>nt,getGlobalStyles:()=>ht,getLoadingStyles:()=>L,getNavigationVariables:()=>st,getQuillCoreStyle:()=>t,getThemeColorValue:()=>ct,globalStyles:()=>X,hover:()=>n,hoverFocus:()=>l,isCSSVariable:()=>dt,loadingUtilityClasses:()=>N,navDivider:()=>d,popperPointer:()=>b,registerStyles:()=>ft,styled:()=>V,useTheme:()=>Z,withBuilderStyles:()=>vt,withBuilderTheme:()=>yt,withStyles:()=>mt,withTheme:()=>D});var e={};function t(){return"\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box;\n    line-height: 1.42;\n    height: 100%;\n    outline: none;\n    overflow-y: auto;\n    overflow-x: hidden;\n    tab-size: 4;\n    -moz-tab-size: 4;\n    word-wrap: break-word;\n    white-space: pre-wrap;\n    & >* {\n      cursor: text;\n    }\n    p,\n    ol,\n    ul,\n    pre,\n    blockquote,\n    h1,\n    h2,\n    h3,\n    h4,\n    h5,\n    h6 {\n      margin: 0;\n      padding: 0;\n      counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n    }\n    ol,\n    ul {\n      padding-left: 1.5em;\n    }\n    p {\n      margin-bottom: 0;\n    }\n    ul>li,\n    ol>li{\n      list-style-type: none;\n    }\n    ul>li::before {\n        content: '•';\n    }\n    ul[data-checked=true],\n    ul[data-checked=false] {\n      pointer-events: none;\n    }\n    ul[data-checked=true]>li *,\n    ul[data-checked=false]>li * {\n      pointer-events: all;\n    }\n    ul[data-checked=true]>li::before,\n    ul[data-checked=false]>li::before {\n      color: #777;\n      cursor: pointer;\n      pointer-events: all;\n    }\n    ul[data-checked=true]>li::before {\n      content: '\\2611';\n    }\n    ul[data-checked=false]>li::before {\n      content: '\\2610';\n    }\n    li::before {\n      display: inline-block;\n      white-space: nowrap;\n      width: 1.2em;\n    }\n    li:not(.ql-direction-rtl)::before {\n      margin-left: -1.5em;\n      margin-right: 0.3em;\n      text-align: right;\n    }\n    li.ql-direction-rtl::before {\n      margin-left: 0.3em;\n      margin-right: -1.5em;\n    }\n    ol li {\n      counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n      counter-increment: list-0;\n    }\n    ol li:before {\n      content: counter(list-0, decimal) '. ';\n    }\n    ol li.ql-indent-1 {\n      counter-increment: list-1;\n    }\n    ol li.ql-indent-1:before {\n      content: counter(list-1, lower-alpha) '. ';\n    }\n    ol li.ql-indent-1 {\n      counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n    }\n    ol li.ql-indent-2 {\n      counter-increment: list-2;\n    }\n    ol li.ql-indent-2:before {\n      content: counter(list-2, lower-roman) '. ';\n    }\n    ol li.ql-indent-2 {\n      counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n    }\n    ol li.ql-indent-3 {\n      counter-increment: list-3;\n    }\n    ol li.ql-indent-3:before {\n      content: counter(list-3, decimal) '. ';\n    }\n    ol li.ql-indent-3 {\n      counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;\n    }\n    ol li.ql-indent-4 {\n      counter-increment: list-4;\n    }\n    ol li.ql-indent-4:before {\n      content: counter(list-4, lower-alpha) '. ';\n    }\n    ol li.ql-indent-4 {\n      counter-reset: list-5 list-6 list-7 list-8 list-9;\n    }\n    ol li.ql-indent-5 {\n      counter-increment: list-5;\n    }\n    ol li.ql-indent-5:before {\n      content: counter(list-5, lower-roman) '. ';\n    }\n    ol li.ql-indent-5 {\n      counter-reset: list-6 list-7 list-8 list-9;\n    }\n    ol li.ql-indent-6 {\n      counter-increment: list-6;\n    }\n    ol li.ql-indent-6:before {\n      content: counter(list-6, decimal) '. ';\n    }\n    ol li.ql-indent-6 {\n      counter-reset: list-7 list-8 list-9;\n    }\n    ol li.ql-indent-7 {\n      counter-increment: list-7;\n    }\n    ol li.ql-indent-7:before {\n      content: counter(list-7, lower-alpha) '. ';\n    }\n    ol li.ql-indent-7 {\n      counter-reset: list-8 list-9;\n    }\n    ol li.ql-indent-8 {\n      counter-increment: list-8;\n    }\n    ol li.ql-indent-8:before {\n      content: counter(list-8, lower-roman) '. ';\n    }\n    ol li.ql-indent-8 {\n      counter-reset: list-9;\n    }\n    ol li.ql-indent-9 {\n      counter-increment: list-9;\n    }\n    ol li.ql-indent-9:before {\n      content: counter(list-9, decimal) '. ';\n    }\n    .ql-indent-1:not(.ql-direction-rtl) {\n      padding-left: 3em;\n    }\n    li.ql-indent-1:not(.ql-direction-rtl) {\n      padding-left: 4.5em;\n    }\n    .ql-indent-1.ql-direction-rtl.ql-align-right {\n      padding-right: 3em;\n    }\n    li.ql-indent-1.ql-direction-rtl.ql-align-right {\n      padding-right: 4.5em;\n    }\n    .ql-indent-2:not(.ql-direction-rtl) {\n      padding-left: 6em;  \n    }\n    li.ql-indent-2:not(.ql-direction-rtl) {\n      padding-left: 7.5em;\n    }\n    .ql-indent-2.ql-direction-rtl.ql-align-right {\n      padding-right: 6em;\n    }\n    li.ql-indent-2.ql-direction-rtl.ql-align-right {\n      padding-right: 7.5em;\n    }\n    .ql-indent-3:not(.ql-direction-rtl) {\n      padding-left: 9em;\n    }\n    li.ql-indent-3:not(.ql-direction-rtl) {\n      padding-left: 10.5em;\n    }\n    .ql-indent-3.ql-direction-rtl.ql-align-right {\n      padding-right: 9em;\n    }\n    li.ql-indent-3.ql-direction-rtl.ql-align-right {\n      padding-right: 10.5em;\n    }\n    .ql-indent-4:not(.ql-direction-rtl) {\n      padding-left: 12em;\n    }\n    li.ql-indent-4:not(.ql-direction-rtl) {\n      padding-left: 13.5em;\n    }\n    .ql-indent-4.ql-direction-rtl.ql-align-right {\n      padding-right: 12em;\n    }\n    li.ql-indent-4.ql-direction-rtl.ql-align-right {\n      padding-right: 13.5em;\n    }\n    .ql-indent-5:not(.ql-direction-rtl) {\n      padding-left: 15em;\n    }\n    li.ql-indent-5:not(.ql-direction-rtl) {\n      padding-left: 16.5em;\n    }\n    .ql-indent-5.ql-direction-rtl.ql-align-right {\n      padding-right: 15em;\n    }\n    li.ql-indent-5.ql-direction-rtl.ql-align-right {\n      padding-right: 16.5em;\n    }\n    .ql-indent-6:not(.ql-direction-rtl) {\n      padding-left: 18em;\n    }\n    li.ql-indent-6:not(.ql-direction-rtl) {\n      padding-left: 19.5em;\n    }\n    .ql-indent-6.ql-direction-rtl.ql-align-right {\n      padding-right: 18em;\n    }\n    li.ql-indent-6.ql-direction-rtl.ql-align-right {\n      padding-right: 19.5em;\n    }\n    .ql-indent-7:not(.ql-direction-rtl) {\n      padding-left: 21em;\n    }\n    li.ql-indent-7:not(.ql-direction-rtl) {\n      padding-left: 22.5em;\n    }\n    .ql-indent-7.ql-direction-rtl.ql-align-right {\n      padding-right: 21em;\n    }\n    li.ql-indent-7.ql-direction-rtl.ql-align-right {\n      padding-right: 22.5em;\n    }\n    .ql-indent-8:not(.ql-direction-rtl) {\n      padding-left: 24em;\n    }\n    li.ql-indent-8:not(.ql-direction-rtl) {\n      padding-left: 25.5em;\n    }\n    .ql-indent-8.ql-direction-rtl.ql-align-right {\n      padding-right: 24em;\n    }\n    li.ql-indent-8.ql-direction-rtl.ql-align-right {\n      padding-right: 25.5em;\n    }\n    .ql-indent-9:not(.ql-direction-rtl) {\n      padding-left: 27em;\n    }\n    li.ql-indent-9:not(.ql-direction-rtl) {\n      padding-left: 28.5em;\n    }\n    .ql-indent-9.ql-direction-rtl.ql-align-right {\n      padding-right: 27em;\n    }\n    li.ql-indent-9.ql-direction-rtl.ql-align-right {\n      padding-right: 28.5em;\n    }\n    img {\n      max-width: 100%;\n    }\n    .ql-direction-rtl {\n      direction: rtl;\n      text-align: inherit;\n    }\n    .ql-align-center {\n      text-align: center;\n    }\n    .ql-align-justify {\n      text-align: justify;\n    }\n    .ql-align-right {\n      text-align: right;\n    }\n    \n    .ql-blank,\n    &.ql-blank {\n      &::before {\n        opacity: 0.6;\n        content: attr(data-placeholder);\n        font-style: italic;\n        left: .5rem;\n        right: .5rem;\n        pointer-events: none;\n        position: absolute;\n      }\n    }\n    /** should be over write by theme style */\n    .ql-size-small {\n      font-size: 0.75em;\n    }\n    .ql-size-large {\n      font-size: 1.5em;\n    }\n    .ql-size-huge {\n      font-size: 2.5em;\n    }\n    blockquote {\n      border-left: 4px solid #ccc;\n      margin-bottom: 5px;\n      margin-top: 5px;\n      padding-left: 16px;\n    }\n    code {\n      background-color: #f0f0f0;\n      border-radius: 3px;\n    }\n    pre {\n      white-space: pre-wrap;\n    }\n    code {\n      font-size: 85%;\n      padding: 2px 4px;\n    }\n    exp {\n      cursor: pointer;\n      user-select: auto;\n      &:hover {\n        outline: 1px solid white;\n        background: #d8d8d8;\n      }\n    }\n    a {\n      &.invalid {\n        opacity: 0.5;\n        background: red;\n        outline: 1px solid white;\n      }\n    }\n  "}r.r(e),r.d(e,{fontFamilyBase:()=>wt,fontSizeBase:()=>xt,fontSizeBaseInPx:()=>kt,fontSizeRoot:()=>$t,fontWeights:()=>zt,lineHeights:()=>St});var o=r(810);function n(e){return`\n    &:hover {\n      ${e}\n    }\n  `}function l(e){return`\n    &:hover,\n    &:focus {\n      ${e}\n    }\n  `}const s={up:"180deg",down:null,left:"90deg",right:"-90deg"};function a(e){const t=s[e];return`\n    ${t&&`\n      transform: rotate(${t});\n    `}\n  `}function d(e,t){return`\n    height: 0;\n    margin: ${t};\n    overflow: hidden;\n    border-top: 1px solid ${e};\n  `}function c(e,t){const r=t&&t.colors?e?t.colors.success:t.colors.danger:e?"green":"red",i=e?"valid":"invalid";return o.css`
  &.is-${i} {
    border-color: ${r||(e?"green":"red")};
    ${!e&&`background: ${o.polished.rgba(r,.1)}`};
  }
  `}function h(e){var t,r,i;return e&&o.css`
    color: ${e.color};
    background-color: ${e.bg};
    ${e.border&&o.css`
      border-width: ${e.border.width};
      ${e.border.width&&`border-style: ${null!==(r=null===(t=e.border)||void 0===t?void 0:t.type)&&void 0!==r?r:"solid"};`}
      border-color: ${e.border.color};
    `}
    border-radius: ${e.borderRadius};
    box-shadow: ${e.shadow};
    font-weight: ${e.bold?"bold":e.fontWeight};
    text-decoration: ${e.decoration||(i=e,i?i.underline&&i.strike?"underline line-through":i.underline?"underline":i.strike?"line-through":"none":"none")};
    font-style: ${e.italic?"italic":"normal"};
  `}const u={left:"right",right:"left",top:"bottom",bottom:"top"};function p(e,t){return!t||"left"!==e&&"right"!==e?u[e]:e}function g(e,t){return t?"left"===e?"right":"right"===e?"left":e:e}function b(e){var t;const r=(0,o.getAppStore)().getState().appContext.isRTL,i=null==e?void 0:e.border,n=null==e?void 0:e.background,l=(null!==(t=null==e?void 0:e.size)&&void 0!==t?t:12)+"px";return o.css`
    .jimu-popper--arrow {
      position: absolute;
      &::before,
      &::after {
        content: " ";
        display: block;
        width: 0;
        height: 0;
        border: ${l} solid transparent;
        position: absolute;
      }
    }
    &[data-popper-placement^="top"],
    &[data-popper-placement^="bottom"] {
      .jimu-popper--arrow {
        ${r?"right: 50%":"left: 50%"};
        &::before,
        &::after {
          transform: translateX(-50%);
        }
      }
    }
    &[data-popper-placement^="left"],
    &[data-popper-placement^="right"] {
      .jimu-popper--arrow {
        top: 50%;
        &::before,
        &::after {
          transform: translateY(-50%);
        }
      }
    }
    ${["left","right","top","bottom"].map((e=>{var t,s;return o.css`
      &[data-popper-placement^="${e}"] {
        .jimu-popper--arrow {
          ${p(e,r)}: -${l};
          &::before,
          &::after {
            border-${p(e,r)}-width: 0;
            border-${g(e,r)}-color: ${null!==(t=null==i?void 0:i.color)&&void 0!==t?t:"inherit"};
            ${p(e,r)}: 0;
          }
          &::after {
            border-${g(e,r)}-color: ${null!=n?n:"inherit"};
            ${p(e,r)}: ${null!==(s=null==i?void 0:i.width)&&void 0!==s?s:"1px"};
          }
        }
      }
    `}))}
  `}const f={white:"#fff",black:"#000",transparent:"transparent"},m={primary:"#076fe5",secondary:"#c5c5c5",light:"#f0f0f0",dark:"#050505",info:"#089bdc",success:"#09cf74",warning:"#ffea1d",danger:"#e1001b"},v={primary:{100:"#e6f2ff",200:"#acd3ff",300:"#65adff",400:"#2c8fff",500:"#076fe5",600:"#005eca",700:"#004ca3",800:"#003c82",900:"#002958"},secondary:{100:"#f0f0f0",200:"#e3e3e3",300:"#d5d5d5",400:"#c5c5c5",500:"#b6b6b6",600:"#a8a8a8",700:"#989898",800:"#8b8b8b",900:"#828282"},light:{100:"#f0f0f0",200:"#e3e3e3",300:"#d5d5d5",400:"#c5c5c5",500:"#b6b6b6",600:"#a8a8a8",700:"#989898",800:"#8b8b8b",900:"#828282"},dark:{100:"#767676",200:"#6a6a6a",300:"#5e5e5e",400:"#525252",500:"#444444",600:"#363636",700:"#282828",800:"#181818",900:"#050505"},info:{100:"#e5f7ff",200:"#9fe2ff",300:"#60ceff",400:"#21bbff",500:"#089bdc",600:"#0077ac",700:"#005a82",800:"#003b56",900:"#002231"},success:{100:"#ebfff6",200:"#acffd9",300:"#56f8ad",400:"#16ed8a",500:"#09cf74",600:"#03b161",700:"#00904e",800:"#006838",900:"#004022"},warning:{100:"#fffdeb",200:"#fff9c3",300:"#fff592",400:"#fff05f",500:"#ffea1d",600:"#eed800",700:"#d4c000",800:"#b5a400",900:"#938500"},danger:{100:"#ffe9ec",200:"#ff94a1",300:"#ff5066",400:"#ff203c",500:"#e1001b",600:"#bf0017",700:"#9f0013",800:"#79000f",900:"#4a0009"}};function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function $(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function x(e,t,o){return(x=$()?Reflect.construct:function(e,t,o){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return o&&y(i,o.prototype),i}).apply(null,arguments)}function k(e){var t="function"==typeof Map?new Map:void 0;return(k=function(e){if(null===e||(o=e,-1===Function.toString.call(o).indexOf("[native code]")))return e;var o;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return x(e,arguments,w(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),y(r,e)})(e)}var z=function(e){var t,o;function r(t){return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+t+" for more information.")||this)}return o=e,(t=r).prototype=Object.create(o.prototype),t.prototype.constructor=t,y(t,o),r}(k(Error));function S(e){return Math.round(255*e)}function R(e,t,o){return S(e)+","+S(t)+","+S(o)}function _(e,t,o,r){if(void 0===r&&(r=R),0===t)return r(o,o,o);var i=(e%360+360)%360/60,n=(1-Math.abs(2*o-1))*t,l=n*(1-Math.abs(i%2-1)),s=0,a=0,d=0;i>=0&&i<1?(s=n,a=l):i>=1&&i<2?(s=l,a=n):i>=2&&i<3?(a=n,d=l):i>=3&&i<4?(a=l,d=n):i>=4&&i<5?(s=l,d=n):i>=5&&i<6&&(s=n,d=l);var c=o-n/2;return r(s+c,a+c,d+c)}var O={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},j=/^#[a-fA-F0-9]{6}$/,C=/^#[a-fA-F0-9]{8}$/,q=/^#[a-fA-F0-9]{3}$/,I=/^#[a-fA-F0-9]{4}$/,T=/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i,A=/^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i,E=/^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,P=/^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;function B(e){return function(e){var t,o=e.red/255,r=e.green/255,i=e.blue/255,n=Math.max(o,r,i),l=Math.min(o,r,i),s=(n+l)/2;if(n===l)return void 0!==e.alpha?{hue:0,saturation:0,lightness:s,alpha:e.alpha}:{hue:0,saturation:0,lightness:s};var a=n-l,d=s>.5?a/(2-n-l):a/(n+l);switch(n){case o:t=(r-i)/a+(r<i?6:0);break;case r:t=(i-o)/a+2;break;default:t=(o-r)/a+4}return t*=60,void 0!==e.alpha?{hue:t,saturation:d,lightness:s,alpha:e.alpha}:{hue:t,saturation:d,lightness:s}}(function(e){if("string"!=typeof e)throw new z(3);var t=function(e){if("string"!=typeof e)return e;var t=e.toLowerCase();return O[t]?"#"+O[t]:e}(e);if(t.match(j))return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16)};if(t.match(C)){var o=parseFloat((parseInt(""+t[7]+t[8],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16),alpha:o}}if(t.match(q))return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16)};if(t.match(I)){var r=parseFloat((parseInt(""+t[4]+t[4],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16),alpha:r}}var i=T.exec(t);if(i)return{red:parseInt(""+i[1],10),green:parseInt(""+i[2],10),blue:parseInt(""+i[3],10)};var n=A.exec(t.substring(0,50));if(n)return{red:parseInt(""+n[1],10),green:parseInt(""+n[2],10),blue:parseInt(""+n[3],10),alpha:parseFloat(""+n[4])};var l=E.exec(t);if(l){var s="rgb("+_(parseInt(""+l[1],10),parseInt(""+l[2],10)/100,parseInt(""+l[3],10)/100)+")",a=T.exec(s);if(!a)throw new z(4,t,s);return{red:parseInt(""+a[1],10),green:parseInt(""+a[2],10),blue:parseInt(""+a[3],10)}}var d=P.exec(t.substring(0,50));if(d){var c="rgb("+_(parseInt(""+d[1],10),parseInt(""+d[2],10)/100,parseInt(""+d[3],10)/100)+")",h=T.exec(c);if(!h)throw new z(4,t,c);return{red:parseInt(""+h[1],10),green:parseInt(""+h[2],10),blue:parseInt(""+h[3],10),alpha:parseFloat(""+d[4])}}throw new z(5)}(e))}class M{constructor(){this.shadeCount=9}getLightness(e){const t=B(e);return t&&t.lightness}getShadeLevel(e,t,o){return e>t[1]?1:e<t[0]?this.shadeCount:this.shadeCount-Math.ceil((e-t[0])/o)}getColorsByShade(e,t,r,i){const n={},l=parseInt(""+100*this.getLightness(e))/100;let s=(r[1]-l)/(t-1),a=(l-r[0])/(this.shadeCount-t);s=s>.1?.1:s,a=a>.1?.1:a;for(let r=1;r<=this.shadeCount;r++){n[100*(i?this.shadeCount-r+1:r)]=r===t?e:r<t?s<0?"#fff":o.polished.lighten((t-r)*s,e):a<0?"#000":o.polished.darken((r-t)*a,e)}return n}generate(e,t){try{const o={};let r;for(const i in e){const n=[.1,.9];"light"===i||"dark"===i?t&&"light"===i||!t&&"dark"===i?(n[1]=.49,r=this.shadeCount):(n[0]=.5,r=1):r=Math.ceil(this.shadeCount/2),o[i]=this.getColorsByShade(e[i].trim(),r,n,t)}return o}catch(e){console.error(e)}}revertPalette(e){const t={};return Object.keys(e).forEach((o=>{const r=Object.keys(e[o]).length;t[o]={};for(let i=Math.ceil(r/2);i>0;i--)t[o][100*i]=e[o][100*(r-i+1)],t[o][100*(r-i+1)]=e[o][100*i]})),t.dark=[t.light,t.light=t.dark][0],t}}function F(e,t){return`\n    .bg-${e} {\n      background-color: ${t} !important;\n    }\n    .border-${e} {\n      border-color: ${t} !important;\n    }\n    .text-${e} {\n      color: ${t} !important;\n    }\n  `}function L(e,t,r,i){return o.css`
    @keyframes loading-keys-${i} {
      0%,
      80%,
      100% {
        opacity: .75;
        box-shadow: 0 0 ${r};
        height: ${t};
      }
      40% {
        opacity: 1;
        box-shadow: 0 -0.5rem ${r};
        height: ${o.polished.math(`1.25 * ${t}`)};
      }
    }
    text-indent: -9999em;
    margin: auto;
    position: absolute;
    right: calc(50% - ${o.polished.math(`${e} * 0.5`)});
    top: calc(50% - ${o.polished.math(`${t} * 0.5`)});
    animation-delay: 0.16s !important;
    &:before,
    &:after,
    & {
      background: ${r};
      animation: loading-keys-${i} 0.8s infinite ease-in-out;
      width: ${e};
      height: ${t};
    }
    &:before,
    &:after {
      position: absolute;
      top: 0;
      content: '';
    }
    &:before {
      left: -${o.polished.math(`1.47 * ${e}`)};
    }
    &:after {
      left: ${o.polished.math(`1.47 * ${e}`)};
      animation-delay: 0.32s;
    }
  `}const N=e=>o.css`
    /* primary loading marker */
    .jimu-primary-loading {
      ${L("0.85rem","2rem",e.colors.palette.primary[500],"primary")};
    }

    /* secondary loading marker */
    .jimu-secondary-loading {
      ${L("0.51rem","1.2rem",o.polished.rgba(e.colors.palette.light[800],.5),"small")};
    }
  `;function H(e){return o.css`
    ${h(null==e?void 0:e.default)};
    &:hover {
      ${h(null==e?void 0:e.hover)};
    }
    &:disabled,
    &.esri-disabled {
      ${h(null==e?void 0:e.disabled)};
    }
    &.active {
      ${h(null==e?void 0:e.active)};
    }
    &:focus {
      ${h(null==e?void 0:e.focus)};
      outline: none;
    }
  `}const X=e=>{var t,r,i;const s=e.theme;if(!s||!s.colors)return null;const a=s.focusedStyles,d=`${a.width} solid ${a.color}`,c=`0 0px 0px 2px ${a.color}`;return o.css`
    ${o.css`
    @import url('${o.urlUtils.getFixedRootPath()}jimu-theme/base/assets/fonts/avenir/fonts.css');
  `}
    ${(e=>e&&e.colors?o.css`
  :root {
    ${Object.keys(o.ThemeCommonColorKeys).map((t=>e.colors[o.ThemeCommonColorKeys[t]]?`--${o.ThemeCommonColorKeys[t]}: ${e.colors[o.ThemeCommonColorKeys[t]]};`:""))}
    ${Object.keys(o.ThemeThemeColorKeys).map((t=>e.colors[o.ThemeThemeColorKeys[t]]?`--${o.ThemeThemeColorKeys[t]}: ${e.colors[o.ThemeThemeColorKeys[t]]};`:""))}
    ${e.colors.palette?Object.keys(e.colors.palette).map((t=>t?Object.keys(e.colors.palette[t]).map((o=>`--${t}-${o}: ${e.colors.palette[t][o]};`)):"")):""}
    ${e.colors.orgSharedColors?Object.keys(e.colors.orgSharedColors).map((t=>t?Object.keys(e.colors.orgSharedColors[t]).map((o=>`--org-${t}-${o}: ${e.colors.orgSharedColors[t][o]};`)):"")):""}
  }`:"")(s)}
    ${(e=>{var t,r,i,n,l,s,a,d,c,u,p,g,b,f,m,v,y,w,$,x,k,z,S,R,_,O,j,C,q,I,T,A,E,P,B,M,F,L,N,X,Y,G,V,W,K,Z,D,U,Q,J,ee,te,oe,re,ie,ne,le,se,ae,de,ce,he,ue,pe,ge,be,fe,me,ve,ye,we,$e,xe,ke,ze,Se,Re,_e,Oe,je;const Ce=null==e?void 0:e.arcgis,qe=null===(t=null==Ce?void 0:Ce.components)||void 0===t?void 0:t.button,{default:Ie,secondary:Te,tertiary:Ae}=null!==(r=null==qe?void 0:qe.variants)&&void 0!==r?r:{},Ee=null===(i=null==Ce?void 0:Ce.components)||void 0===i?void 0:i.input,Pe=null===(n=null==Ce?void 0:Ce.components)||void 0===n?void 0:n.menu,Be=null===(l=null==Ce?void 0:Ce.components)||void 0===l?void 0:l.panel,Me=null===(s=null==Ce?void 0:Ce.components)||void 0===s?void 0:s.table,Fe=null===(a=null==Ce?void 0:Ce.components)||void 0===a?void 0:a.updatingIndicator,Le=null===(d=null==Ce?void 0:Ce.widgets)||void 0===d?void 0:d.layerlist,Ne=null===(c=null==Ce?void 0:Ce.widgets)||void 0===c?void 0:c.legend,He=null===(u=null==Ce?void 0:Ce.widgets)||void 0===u?void 0:u.basemapGallery,Xe=null===(p=null==Ce?void 0:Ce.widgets)||void 0===p?void 0:p.measure;return o.css` body {
    .esri-widget {
      font-family: inherit;
      background-color: transparent;
      color: inherit;
    }
    .esri-widget--panel {
      ${h(Be)}
    }
    .esri-button,
    .esri-widget--button,
    .esri-popup__button,
    .esri-sketch__button {
      ${H(Ie)}
    }
    .esri-disabled .esri-widget--button {
      > * {
        color: ${null===(g=null==Ie?void 0:Ie.disabled)||void 0===g?void 0:g.color};
      }
    }
    .esri-button--secondary {
      ${H(Te)}
    }
    .esri-input,
    .esri-select {
      ${h(Ee)};
      &:focus {
        border-color: ${null===(b=null==Ee?void 0:Ee.focus)||void 0===b?void 0:b.borderColor};
        outline: none;
      }
      &::placeholder {
        color: ${null==Ee?void 0:Ee.placeHolderColor};
      }
    }
    .esri-select {
    }
    .esri-menu {
      ${h(Pe)}
      font-size: inherit;
      line-height: 1;
    }
    .esri-menu__list-item {
      &,
      &:focus {
        ${h(null===(f=null==Pe?void 0:Pe.item)||void 0===f?void 0:f.default)};
      }
      &:hover {
        ${h(null===(m=null==Pe?void 0:Pe.item)||void 0===m?void 0:m.hover)};
      }
      &:active {
        ${h(null===(v=null==Pe?void 0:Pe.item)||void 0===v?void 0:v.active)};
      }
    }
    .esri-menu__list-item--active,
    .esri-menu__list-item--active:hover,
    .esri-menu__list-item--active:focus {
      ${h(null===(y=null==Pe?void 0:Pe.item)||void 0===y?void 0:y.active)};
    }

    /*
    * ArcGIS API 4.x Widgets:
    */

    /* General */

    /* Heading */
    .esri-widget__heading {
      color: ${null===($=null===(w=null==e?void 0:e.typography)||void 0===w?void 0:w.colors)||void 0===$?void 0:$.title};
    }

    /* Table */
    .esri-widget__table {
      ${h(null==Me?void 0:Me.root)}
    }
    .esri-layer-list__item--updating {
      &:before {
        background-color: ${null==Fe?void 0:Fe.bg};
      }
      &:after {
        background-color: ${null==Fe?void 0:Fe.progress};
      }
    }

    /* Toggle */
    .esri-navigation-toggle {
      &.esri-disabled {
        .esri-navigation-toggle__button {
          ${h(Ie.disabled)};
          + .esri-navigation-toggle__button {
            margin-top: -${null!==(z=null===(k=null===(x=Ie.default)||void 0===x?void 0:x.border)||void 0===k?void 0:k.width)&&void 0!==z?z:"0"};
          }
        }
      }
    }
    .esri-navigation-toggle__button {
      &:before {
        border-right-color: ${null===(S=null==e?void 0:e.colors)||void 0===S?void 0:S.primary};
      }
      + .esri-navigation-toggle__button {
        margin-top: -${null!==(O=null===(_=null===(R=Ie.default)||void 0===R?void 0:R.border)||void 0===_?void 0:_.width)&&void 0!==O?O:"0"};
      }
    }

    /* zoom */
    .esri-zoom .esri-widget--button:last-child {
      border-top: 0;
    }
    /* Search */
    .esri-search {
      /* padding: ${null===(j=null==e?void 0:e.sizes)||void 0===j?void 0:j[3]}; */
      .esri-search__container {
        > .esri-widget--button {
          background-color: ${null==Ee?void 0:Ee.bg};
          ${(null==Ee?void 0:Ee.border)&&`border: ${null===(C=null==Ee?void 0:Ee.border)||void 0===C?void 0:C.color} solid ${null===(q=null==Ee?void 0:Ee.border)||void 0===q?void 0:q.width};`}
        }
      }
      .esri-search__input-container {
        margin-left: -1px;
        margin-right: -1px;
        .esri-search__input {
          text-overflow: ellipsis;
          padding-right: 32px; /* the width of the clear button */
          ${(null==Ee?void 0:Ee.focus)&&`&:focus {\n            border: ${null===(I=null==Ee?void 0:Ee.focus)||void 0===I?void 0:I.borderColor} solid ${null!==(A=null===(T=null==Ee?void 0:Ee.border)||void 0===T?void 0:T.width)&&void 0!==A?A:"1px"};\n          }`}
        }
        .esri-search__clear-button {
          position: absolute;
          right: 32px;
          top: ${null!==(P=null===(E=null==Ee?void 0:Ee.border)||void 0===E?void 0:E.width)&&void 0!==P?P:0};
          height: calc(32px - ${null!==(M=null===(B=null==Ee?void 0:Ee.border)||void 0===B?void 0:B.width)&&void 0!==M?M:0} * 2);
          z-index: 1;
          background-color: ${null==Ee?void 0:Ee.bg};
        }
      }
      .esri-search--multiple-sources {
        .esri-search__sources-button {
          z-index: 1;
          border-right: 0;
          margin-right: -${null===(F=null==Ee?void 0:Ee.border)||void 0===F?void 0:F.width};
        }
        .esri-search__input {
          border-left: ${null===(L=null==Ee?void 0:Ee.border)||void 0===L?void 0:L.width} solid transparent;
          border-right: ${null===(N=null==Ee?void 0:Ee.border)||void 0===N?void 0:N.width} solid transparent;
          &:focus {
            border-color: ${null===(X=null==Ee?void 0:Ee.focus)||void 0===X?void 0:X.borderColor};
          }
        }
      }
    }

    /* Popup */
    .esri-popup__main-container {
      ${h(Be)}
    }
    .esri-popup__pointer-direction {
      background-color: ${null==Be?void 0:Be.bg};
    }
    .esri-popup__navigation {
      background: transparent;
    }

    /* Layer List */
    .esri-layer-list {
      ${h(null==Le?void 0:Le.root)}
    }
    .esri-layer-list__item {
      ${h(null===(Y=null==Le?void 0:Le.item)||void 0===Y?void 0:Y.default)}
    }
    .esri-layer-list__item-container {
      padding-top: 0.375rem;
      padding-bottom: 0.375rem;
    }
    .esri-layer-list__item--invisible-at-scale .esri-layer-list__item-title {
      color: ${null===(V=null===(G=null==Le?void 0:Le.item)||void 0===G?void 0:G.disabled)||void 0===V?void 0:V.color}
    }
    .esri-layer-list__item-actions {
      ${h(null===(W=null==Le?void 0:Le.actionsList)||void 0===W?void 0:W.root)}
      margin: 0;
    }
    .esri-layer-list__item-action {
      ${h(null===(Z=null===(K=null==Le?void 0:Le.actionsList)||void 0===K?void 0:K.item)||void 0===Z?void 0:Z.default)}
      &:hover {
        ${h(null===(U=null===(D=null==Le?void 0:Le.actionsList)||void 0===D?void 0:D.item)||void 0===U?void 0:U.hover)}
      }
    }
    .esri-layer-list__item-actions-list {
      border-color: ${null===(J=null===(Q=null==Le?void 0:Le.actionsList)||void 0===Q?void 0:Q.separator)||void 0===J?void 0:J.color};
      border-width: ${null===(te=null===(ee=null==Le?void 0:Le.actionsList)||void 0===ee?void 0:ee.separator)||void 0===te?void 0:te.width};
      padding: 0;
    }
    .esri-layer-list__item-actions-menu {
      padding: 0.25rem;
      margin-top: -0.25rem;
    }
    .esri-layer-list__item-toggle,
    .esri-layer-list__child-toggle,
    .esri-layer-list__item-actions-menu-item {
      ${h(null===(oe=null==Le?void 0:Le.icon)||void 0===oe?void 0:oe.default)}
      &:hover {
        ${h(null===(re=null==Le?void 0:Le.icon)||void 0===re?void 0:re.hover)}
      }
    }
    .esri-layer-list__item-actions-menu-item--active {
      &, &:hover {
        ${h(null===(ne=null===(ie=null==Le?void 0:Le.actionsList)||void 0===ie?void 0:ie.item)||void 0===ne?void 0:ne.active)}
      }
    }

    /* Legend */
    .esri-legend {
      ${h(null===(se=null===(le=null==Ne?void 0:Ne.variants)||void 0===le?void 0:le.default)||void 0===se?void 0:se.root)}
    }
    .esri-widget__heading {
      color: inherit;
    }
    .esri-legend--card {
      ${h(null===(de=null===(ae=null==Ne?void 0:Ne.variants)||void 0===ae?void 0:ae.card)||void 0===de?void 0:de.root)}
    }
    .esri-legend--card__section {
      width: 100%;
    }
    .esri-legend--card__carousel-indicator-container {
      ${h(null===(he=null===(ce=null==Ne?void 0:Ne.variants)||void 0===ce?void 0:ce.card)||void 0===he?void 0:he.carousel)}
    }
    .esri-legend--card__service {
      width: 100%;
    }
    .esri-legend--card__service-caption-container {
      ${h(null===(pe=null===(ue=null==Ne?void 0:Ne.variants)||void 0===ue?void 0:ue.card)||void 0===pe?void 0:pe.caption)}
    }

    /* Basemap Gallery */
    .esri-basemap-gallery {
      ${h(null==He?void 0:He.root)}
    }
    .esri-basemap-gallery__item {
      ${h(null===(ge=null==He?void 0:He.item)||void 0===ge?void 0:ge.default)}
      &:hover {
        ${h(null===(be=null==He?void 0:He.item)||void 0===be?void 0:be.hover)}
        border-right-color: transparent;
      }
      &:focus {
        ${h(null===(fe=null==He?void 0:He.item)||void 0===fe?void 0:fe.hover)}
        border-right-color: transparent;
      }
    }
    .esri-basemap-gallery__item--selected,
    .esri-basemap-gallery__item.esri-basemap-gallery__item--selected:hover,
    .esri-basemap-gallery__item.esri-basemap-gallery__item--selected:focus {
      ${h(null===(me=null==He?void 0:He.item)||void 0===me?void 0:me.active)}
      border-right-color: transparent;
    }
    .esri-basemap-gallery__item-title {
      color: inherit !important;
    }
    .esri-basemap-gallery__loader {
      &:before {
        background-color: ${null==Fe?void 0:Fe.bg};
      }
      &:after {
        background-color: ${null==Fe?void 0:Fe.progress};
      }
    }
    .esri-basemap-gallery__item--loading {
      ${h(null==He?void 0:He.root)}
    }

    .esri-direct-line-measurement-2d,
    .esri-area-measurement-2d,
    .esri-direct-line-measurement-3d,
    .esri-area-measurement-3d {
      ${h(null==Xe?void 0:Xe.root)}
    }
    .esri-distance-measurement-2d__measurement,
    .esri-area-measurement-2d__measurement,
    .esri-direct-line-measurement-2d__measurement,
    .esri-direct-line-measurement-3d__measurement,
    .esri-area-measurement-3d__measurement {
      background-color: ${null==Xe?void 0:Xe.measurement.bg};
    }
    .esri-direct-line-measurement-2d__measurement-item-value,
    .esri-area-measurement-2d__measurement-item-value,
    .esri-direct-line-measurement-3d__measurement-item-value,
    .esri-area-measurement-3d__measurement-item-value {
      color: ${null==Xe?void 0:Xe.measurement.valueColor};
      font-size: 1rem;
      font-weight: 500;
    }
    .esri-area-measurement-2d__measurement-item--disabled,
    .esri-area-measurement-3d__measurement-item--disabled {
      color: ${null==Xe?void 0:Xe.measurement.disabledColor};
    }

    /* Attribution */
    .esri-attribution {
      color: #323232; /* Original color from API is used here */
      background-color: rgba(255,255,255,0.65); /* Original color from API is used here */
    }

    /* Sketch */
    .esri-sketch {
      /* usually */
      --calcite-ui-foreground-1: ${null===(ve=null==Ae?void 0:Ae.default)||void 0===ve?void 0:ve.bg};
      --calcite-ui-text-3: ${null===(ye=null==Ae?void 0:Ae.default)||void 0===ye?void 0:ye.color};
      /* hover */
      --calcite-ui-foreground-2: ${null==Ae?void 0:Ae.hover.bg};
      /* --calcite-ui-text-1: ${null==Ae?void 0:Ae.hover.color};*/  /* in Calcite, :hover.color === :focus.color */
      /* focus */
      --calcite-ui-foreground-3: ${null==Ae?void 0:Ae.active.bg};
      --calcite-ui-text-1: ${null==Ae?void 0:Ae.active.color};
      /* a11y */
      --calcite-ui-brand: ${null==Ae?void 0:Ae.active.bg};

      /* polyfill css for theme change ,#11593 */
      > .esri-sketch__panel {
        display: flex;

        .esri-sketch__tool-section {
          display: flex;
        }
      }
/*
      .esri-sketch__button {
        background-color: transparent;
        &.esri-sketch__button--selected {
          &, &:hover {
            ${h(null==Ie?void 0:Ie.active)};
          }
        }
        &:focus {
          color: ${null===(we=null==Ie?void 0:Ie.default)||void 0===we?void 0:we.color};
        }
      }
      .esri-sketch__tool-section {
        border-color: ${e.colors.palette.light[800]};
      }
*/

      /* a11y */
      button:focus {
        outline-offset: -2px;
      }
    }

    /*
     * ExB's own component
     */

    .exbmap-ui-tool-shell {
      box-shadow: ${null==Ce?void 0:Ce.boxShadow};
    }
    .exbmap-ui-tool,
    .exbmap-ui-tool-panel {
      pointer-events: auto;
      position: relative;
      .exbmap-ui-tool-icon-selected {
        &,
        :hover {
          color: ${null===($e=null==Ie?void 0:Ie.active)||void 0===$e?void 0:$e.color};
          background-color: ${null===(xe=null==Ie?void 0:Ie.active)||void 0===xe?void 0:xe.bg};
        }
      }
    }
    .exbmap-ui-popper {
      .exbmap-ui-expand-content {
        color: ${null==Be?void 0:Be.color};
        background:  ${null==Be?void 0:Be.bg};
        transition: opacity 250ms ease-in-out, margin 250ms ease-in-out;
        min-height: 10px;
        /* min-width: 260px; */
        .exbmap-ui-expand-content-header {
          padding: ${null==e?void 0:e.sizes[2]} ${null==e?void 0:e.sizes[3]} ${null==e?void 0:e.sizes[2]};
        }
        .panel-title {
          font-weight: ${null===(ze=null===(ke=null==e?void 0:e.typography)||void 0===ke?void 0:ke.weights)||void 0===ze?void 0:ze.medium};
        }
        .panel-icon { /* <-- Need To use the tertiary button */
          cursor: pointer;
          &:hover {
            color: ${null===(Se=null==e?void 0:e.colors)||void 0===Se?void 0:Se.primary};
          }
        }
        .esri-search {
          padding: 0 ${null==e?void 0:e.sizes[3]} ${null==e?void 0:e.sizes[3]};
        }
      }

      [data-popper-placement^='bottom'] {
        margin-top: ${null===(Re=null==e?void 0:e.gutters)||void 0===Re?void 0:Re[3]} !important;
      }

      [data-popper-placement^='left'] {
        margin-right: ${null===(_e=null==e?void 0:e.gutters)||void 0===_e?void 0:_e[3]} !important;
      }

      [data-popper-placement^='right'] {
        margin-left: ${null===(Oe=null==e?void 0:e.gutters)||void 0===Oe?void 0:Oe[3]} !important;
      }

      [data-popper-placement^='top'] {
        margin-bottom: ${null===(je=null==e?void 0:e.gutters)||void 0===je?void 0:je[3]} !important;
      }
    }
    .exbmap-basetool-loader {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      width: 100%;
      animation: esri-fade-in 500ms ease-in-out;
      &:before {
        background-color: ${null==Fe?void 0:Fe.bg};
      }
      &:after {
        background-color: ${null==Fe?void 0:Fe.progress};
      }
    }
  }`})(s)}

    html {
      font-size: ${s.typography.fontSizeRoot};
      -webkit-text-size-adjust: 100%;
      -moz-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }

    html.is-in-builder {
      overflow: hidden;
    }

    body {
      font-family: ${s.body.fontFamily}, "Helvetica Neue", sans-serif;
      font-size: ${s.body.fontSize};
      font-weight: ${s.body.fontWeight};
      line-height: ${s.body.lineHeight};
      color: ${s.body.color};
      background-color: ${s.body.bg};
      -webkit-font-smoothing: subpixel-antialiased;
      -webkit-font-feature-settings: "kern";
      -moz-font-feature-settings: "kern";
      font-feature-settings: "kern";
      font-kerning: normal;
      text-rendering: optimizeLegibility;
      -moz-font-feature-settings: 'liga= 1','calt=0';
      -moz-font-feature-settings: "liga" 1,"calt" 0;
      -webkit-font-feature-settings: "liga" 1,"calt" 0;
      -ms-font-feature-settings: 'liga= 1','calt=0';
      -o-font-feature-settings: "liga" 1,"calt" 0;
      font-feature-settings: "liga" 1,"calt" 0;

      /*
      Hide focus styles if they're not needed, for example,
      when an element receives focus via the mouse.
      Note: Not use outline for focused element by default.
      */
      *:focus{
        outline: 0;
      }
      *:focus-visible{
        outline: 0;
      }

      /* Show focus styles on keyboard focus. */
      &.jimu-keyboard-nav{
        &:focus,
        &:focus-visible,
        *:focus,  /* For browsers those do not support :focus-visible*/
        /**:-moz-focusring,  FF, before 85, but it affects chrome */
        *:focus-visible {
          outline: ${d};
          outline-offset: ${a.offset};
        }

        .jimu-outline-inside {
          &:focus,
          &:focus-visible {
            outline-offset: -${a.offset};
          }
        }

        .jimu-dropdown-item:focus{
          color: ${s.components.dropdown.link.hoverColor};
          outline: 0;
          text-decoration: none;
          background:${s.components.dropdown.link.hoverBg};

          svg.jimu-icon.jimu-icon-auto-color{
            color: ${s.components.dropdown.link.hoverColor} !important;
          }
        }

        /* Custom interactive elements, like radio, checkbox, switch*/
        .${o.INTERACTIVE_CLASS}{
          &:focus-within{
            box-shadow: ${c} !important;
          }
        }
      }
    }

    ${/Avenir/gim.test(s.body.fontFamily)&&o.css`
      [lang="vi"] body {
        font-family: "SST Vietnamese", 'Lucida Grande', Arial, Verdana, Geneva, sans-serif;
      }
    `}

    p {}

    a {
      color: ${s.link.color};
      text-decoration: ${s.link.decoration};
      ${n(`\n        color: ${s.link.hover.color};\n        text-decoration: ${s.link.hover.decoration};\n      `)}
    }

    label {}

    /* get typography styles */
    ${(e=>{var t,r,i,n,l,s,a,d,c,h,u,p;const g=e&&e.typography;return o.css`
    ${Object.keys(g.colors).map((e=>`\n          .text-${e}${"disabled"===e?", .text-muted":""} {\n            color: ${g.colors[e]} !important;\n          }\n        `))}
    ${Object.keys(g.variants).map((e=>{const t=g.variants[e];let o=`.font-${e}`;return 0===e.indexOf("display")&&(o=`h${e.split("display")[1]}, .font-h${e.split("display")[1]}`),`\n        ${o} {\n          font-family: ${t.fontFamily};\n          font-weight: ${t.fontWeight};\n          font-size: ${t.fontSize};\n          line-height: ${t.lineHeight};\n          color: ${t.color};\n        }\n      `}))}
    /** setting titles */
    .setting-text-level-0 {
      font-size: 14px !important;
      color: ${null===(r=null===(t=e.colors)||void 0===t?void 0:t.palette)||void 0===r?void 0:r.dark[800]} !important;
      font-weight: ${null===(i=e.typography)||void 0===i?void 0:i.weights.bold} !important;
    }
    .setting-text-level-1 {
      font-size: 14px !important;
      color: ${null===(l=null===(n=e.colors)||void 0===n?void 0:n.palette)||void 0===l?void 0:l.dark[600]} !important;
      font-weight: ${null===(s=e.typography)||void 0===s?void 0:s.weights.bold} !important;
    }
    .setting-text-level-2 {
      font-size: 13px !important;
      color: ${null===(d=null===(a=e.colors)||void 0===a?void 0:a.palette)||void 0===d?void 0:d.dark[600]} !important;
      font-weight: ${null===(c=e.typography)||void 0===c?void 0:c.weights.bold} !important;
    }
    .setting-text-level-3 {
      font-size: 13px !important;
      color: ${null===(u=null===(h=e.colors)||void 0===h?void 0:h.palette)||void 0===u?void 0:u.dark[400]} !important;
      font-weight: ${null===(p=e.typography)||void 0===p?void 0:p.weights.bold} !important;
    }
    
    `})(s)}

    /* get surface utility classes */
    ${(e=>{const t=e&&e.surfaces;return o.css`
    ${Object.keys(t).map((e=>{var o,r;return`\n      .surface-${e} {\n        ${t[e].bg?`background-color: ${t[e].bg} !important;`:""}\n        ${t[e].border?`border: ${t[e].border.color} ${null!==(o=t[e].border.style)&&void 0!==o?o:"solid"} ${null!==(r=t[e].border.width)&&void 0!==r?r:"1px"} !important;`:""}\n        ${t[e].shadow?`box-shadow: ${t[e].shadow} !important;`:""}\n      }\n    `}))}
  `})(s)}

    /* get color utility classes */
    ${(e=>{var t,r,i,n,l;const s=null!==(t=e.colors)&&void 0!==t?t:{};let a={},d={},c={};const h=s.palette.light,u=s.palette.dark,p=null!==(i=null===(r=null==e?void 0:e.border)||void 0===r?void 0:r.width)&&void 0!==i?i:"1px",g=null!==(l=null===(n=null==e?void 0:e.border)||void 0===n?void 0:n.color)&&void 0!==l?l:"#ccc";return s?(["white","black","transparent"].forEach((e=>{a[e]=s[e]})),["primary","secondary","success","info","warning","danger","light","dark"].forEach((e=>{d[e]=s[e]}))):(a=f,d=m),c=Object.assign(Object.assign({},d),a),o.css`

    .border         { border: ${p} solid ${g} !important; }
    .border-top     { border-top: ${p} solid ${g} !important; }
    .border-right   { border-right: ${p} solid ${g} !important; }
    .border-bottom  { border-bottom: ${p} solid ${g} !important; }
    .border-left    { border-left: ${p} solid ${g} !important; }

    .border-0        { border: 0 !important; }
    .border-1        { border-width: 1px !important; }
    .border-2        { border-width: 2px !important; }
    
    .border-top-0    { border-top: 0 !important; }
    .border-right-0  { border-right: 0 !important; }
    .border-bottom-0 { border-bottom: 0 !important; }
    .border-left-0   { border-left: 0 !important; }

    .border-white {
      border-color: ${a.white} !important;
    }

    ${Object.keys(h).map((e=>F(`light-${e}`,h[e])))}
    ${Object.keys(u).map((e=>F(`dark-${e}`,u[e])))}
    ${Object.keys(c).map((e=>F(e,c[e])))}
  `})(s)}

    /* get shadow utility classes */
    ${(e=>{const t=e&&e.boxShadows;return o.css`
    ${Object.keys(t).map((e=>`\n          .${"default"===e?"shadow":`shadow-${e}`} { box-shadow: ${t[e]} !important; }\n        `))}
  `})(s)}

    /* get loading utility classes */
    ${N(s)}

    /* get spacing utility classes */
    ${(e=>{const t=e&&e.sizes;let r,i;return function(e){e.TOP="t",e.BOTTOM="b",e.LEFT="l",e.RIGHT="r",e.HORIZONTAL="x",e.VERTICAL="y",e.ALL=""}(r||(r={})),function(e){e.MARGIN="m",e.PADDING="p"}(i||(i={})),o.css`
    ${Object.keys(t).map((e=>Object.keys(r).map((o=>Object.keys(i).map((n=>{const l=`${i[n]}${r[o]}-${e}`,s=n.toLowerCase(),a=t[e];return`\n              .${l} {\n                ${"HORIZONTAL"===o?`\n                    ${s}-left: ${a} !important;\n                    ${s}-right: ${a} !important;\n                  `:"VERTICAL"===o?`\n                    ${s}-top: ${a} !important;\n                    ${s}-bottom: ${a} !important;\n                  `:`${s}${"ALL"===o?"":`-${o.toLowerCase()}`}: ${a} !important; `}\n              }\n            `}))))))}

    .m-auto { margin: auto !important; }
    .mt-auto,
    .my-auto {
      margin-top: auto !important;
    }
    .mr-auto,
    .mx-auto {
      margin-right: auto !important;
    }
    .mb-auto,
    .my-auto {
      margin-bottom: auto !important;
    }
    .ml-auto,
    .mx-auto {
      margin-left: auto !important;
    }
  `})(s)}

    /* get rounded(radius) utility classes */
    ${(e=>{const t=e&&e.borderRadiuses;return o.css`
    ${Object.keys(t).map((e=>`\n          .${"default"===e?"rounded":`rounded-${e}`} { border-radius: ${t[e]} !important; }\n        `))}
  `})(s)}

    .jimu-widget {
      width: 100%;
      height: 100%;
    }

    .jimu-widget-setting {
      width: 100%;
      height: 100%;
      overflow: auto;
    }

    .page {
      width: 100%;
      position: relative;
    }

    /* Close */

    .close {
      float: right;
      font-size: ${s.components.close.fontSize};
      font-weight: ${s.components.close.fontWeight};
      line-height: 1;
      color: ${s.components.close.color};
      text-shadow: ${s.components.close.textShadow};
      opacity: .5;

      &:not(:disabled):not(.disabled) {
        ${l(`\n          color: ${s.components.close.color};\n          text-decoration: none;\n          opacity: .75;\n        `)}
        cursor: pointer;
      }
    }

    button.close {
      padding: 0;
      background-color: transparent;
      border: 0;
      -webkit-appearance: none;
    }

    /* Modal */

    .modal-open {
      overflow: hidden;

      .modal {
        overflow-x: hidden;
        overflow-y: hidden;
      }
    }

    .modal {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1050;
      display: none;
      overflow: hidden;
      outline: 0;
    }

    .modal-backdrop {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1040;
      background-color: ${s.components.modal.backdrop.bg};

      &.fade { opacity: 0; }
      &.show { opacity: ${s.components.modal.backdrop.opacity}; }
    }

    @media (min-width: ${o.CONSTANTS.BREAK_POINTS[0]}px) {
      .modal-sm {
        max-width: ${s.components.modal.sizes.sm};
      }
    }

    @media (min-width: ${o.CONSTANTS.BREAK_POINTS[1]}px) {
      .modal-lg {
        max-width: ${s.components.modal.sizes.lg};
      }
    }


    /* Inline forms */

    .form-inline {
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      .form-check {
        width: 100%;
      }

      @media (min-width: ${o.CONSTANTS.BREAK_POINTS[0]}px) {
        label {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0;
        }

        .form-group {
          display: flex;
          flex: 0 0 auto;
          flex-flow: row wrap;
          align-items: center;
          margin-bottom: 0;
        }

        .form-control {
          display: inline-block;
          width: auto;
          vertical-align: middle;
        }

        .input-group {
          width: auto;
        }

        .form-check {
          display: flex;
          align-items: center;
          justify-content: center;
          width: auto;
          padding-left: 0;
        }
        .form-check-input {
          position: relative;
          margin-top: 0;
          margin-right: 25rem;
          margin-left: 0;
        }
      }
    }

    /* frames */
    .frame-active {
      border: 1px solid ${null===(t=s.colors)||void 0===t?void 0:t.primary} !important;
      box-shadow: 0 0 0 1px ${null===(r=s.colors)||void 0===r?void 0:r.primary} !important;
      position: relative;
      ::after {
        content: '';
        display: block;
        border-top: 0.5rem solid ${null===(i=s.colors)||void 0===i?void 0:i.primary};
        border-left: 0.5rem solid transparent;
        position: absolute;
        right: 0;
        top: 0;
      }
    }

    /* Scrollbar */

    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }

    ::-webkit-scrollbar-track,
    ::-webkit-scrollbar-corner {
      background: ${s.colors.palette.light[200]};
    }

    ::-webkit-scrollbar-thumb {
      background: ${s.colors.palette.light[600]};
    }

    ::-webkit-scrollbar-thumb:hover {
      background: ${s.colors.palette.light[900]};
    }
  `},Y=o.CacheProvider,G=o.ThemeContext,V=o.styled,W=o.Global,K=e=>o.React.createElement(o.ThemeProvider,Object.assign({},e)),Z=()=>(0,o.useTheme)(),D=e=>(0,o.withTheme)(e);var U=r(832),Q=r.n(U),J="-ms-",ee="-moz-",te="-webkit-",oe="comm",re="rule",ie="decl",ne="@import",le="@keyframes",se=Math.abs,ae=String.fromCharCode;function de(e){return e.trim()}function ce(e,t,o){return e.replace(t,o)}function he(e,t){return e.indexOf(t)}function ue(e,t){return 0|e.charCodeAt(t)}function pe(e,t,o){return e.slice(t,o)}function ge(e){return e.length}function be(e){return e.length}function fe(e,t){return t.push(e),e}function me(e,t){for(var o="",r=be(e),i=0;i<r;i++)o+=t(e[i],i,e,t)||"";return o}function ve(e,t,o,r){switch(e.type){case ne:case ie:return e.return=e.return||e.value;case oe:return"";case re:e.value=e.props.join(",")}return ge(o=me(e.children,r))?e.return=e.value+"{"+o+"}":""}var ye=1,we=1,$e=0,xe=0,ke=0,ze="";function Se(e,t,o,r,i,n,l){return{value:e,root:t,parent:o,type:r,props:i,children:n,line:ye,column:we,length:l,return:""}}function Re(e,t,o){return Se(e,t.root,t.parent,o,t.props,t.children,0)}function _e(){return ke=xe>0?ue(ze,--xe):0,we--,10===ke&&(we=1,ye--),ke}function Oe(){return ke=xe<$e?ue(ze,xe++):0,we++,10===ke&&(we=1,ye++),ke}function je(){return ue(ze,xe)}function Ce(){return xe}function qe(e,t){return pe(ze,e,t)}function Ie(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Te(e){return ye=we=1,$e=ge(ze=e),xe=0,[]}function Ae(e){return ze="",e}function Ee(e){return de(qe(xe-1,Me(91===e?e+2:40===e?e+1:e)))}function Pe(e){for(;(ke=je())&&ke<33;)Oe();return Ie(e)>2||Ie(ke)>3?"":" "}function Be(e,t){for(;--t&&Oe()&&!(ke<48||ke>102||ke>57&&ke<65||ke>70&&ke<97););return qe(e,Ce()+(t<6&&32==je()&&32==Oe()))}function Me(e){for(;Oe();)switch(ke){case e:return xe;case 34:case 39:return Me(34===e||39===e?e:ke);case 40:41===e&&Me(e);break;case 92:Oe()}return xe}function Fe(e,t){for(;Oe()&&e+ke!==57&&(e+ke!==84||47!==je()););return"/*"+qe(t,xe-1)+"*"+ae(47===e?e:Oe())}function Le(e){for(;!Ie(je());)Oe();return qe(e,xe)}function Ne(e){return Ae(He("",null,null,null,[""],e=Te(e),0,[0],e))}function He(e,t,o,r,i,n,l,s,a){for(var d=0,c=0,h=l,u=0,p=0,g=0,b=1,f=1,m=1,v=0,y="",w=i,$=n,x=r,k=y;f;)switch(g=v,v=Oe()){case 34:case 39:case 91:case 40:k+=Ee(v);break;case 9:case 10:case 13:case 32:k+=Pe(g);break;case 92:k+=Be(Ce()-1,7);continue;case 47:switch(je()){case 42:case 47:fe(Ye(Fe(Oe(),Ce()),t,o),a);break;default:k+="/"}break;case 123*b:s[d++]=ge(k)*m;case 125*b:case 59:case 0:switch(v){case 0:case 125:f=0;case 59+c:p>0&&ge(k)-h&&fe(p>32?Ge(k+";",r,o,h-1):Ge(ce(k," ","")+";",r,o,h-2),a);break;case 59:k+=";";default:if(fe(x=Xe(k,t,o,d,c,i,s,y,w=[],$=[],h),n),123===v)if(0===c)He(k,t,x,x,w,n,h,s,$);else switch(u){case 100:case 109:case 115:He(e,x,x,r&&fe(Xe(e,x,x,0,0,i,s,y,i,w=[],h),$),i,$,h,s,r?w:$);break;default:He(k,x,x,x,[""],$,h,s,$)}}d=c=p=0,b=m=1,y=k="",h=l;break;case 58:h=1+ge(k),p=g;default:if(b<1)if(123==v)--b;else if(125==v&&0==b++&&125==_e())continue;switch(k+=ae(v),v*b){case 38:m=c>0?1:(k+="\f",-1);break;case 44:s[d++]=(ge(k)-1)*m,m=1;break;case 64:45===je()&&(k+=Ee(Oe())),u=je(),c=ge(y=k+=Le(Ce())),v++;break;case 45:45===g&&2==ge(k)&&(b=0)}}return n}function Xe(e,t,o,r,i,n,l,s,a,d,c){for(var h=i-1,u=0===i?n:[""],p=be(u),g=0,b=0,f=0;g<r;++g)for(var m=0,v=pe(e,h+1,h=se(b=l[g])),y=e;m<p;++m)(y=de(b>0?u[m]+" "+v:ce(v,/&\f/g,u[m])))&&(a[f++]=y);return Se(e,t,o,0===i?re:s,a,d,c)}function Ye(e,t,o){return Se(e,t,o,oe,ae(ke),pe(e,2,-2),0)}function Ge(e,t,o,r){return Se(e,t,o,ie,pe(e,0,r),pe(e,r+1,-1),r)}function Ve(e,t,o){switch(e.type){case ne:case ie:case oe:return e.return=e.return||e.value;case re:e.value=Array.isArray(e.props)?e.props.join(","):e.props,Array.isArray(e.children)&&e.children.forEach((function(e){e.type===oe&&(e.children=e.value)}))}var r=me(Array.prototype.concat(e.children),Ve);return ge(r)?e.return=e.value+"{"+r+"}":""}function We(e,t,o,r){if(e.type===le||"@supports"===e.type||e.type===re&&(!e.parent||"@media"===e.parent.type||e.parent.type===re)){var i=Q().transform(Ve(e));e.children=i?Ne(i)[0].children:[],e.return=""}}Object.defineProperty(We,"name",{value:"stylisRTLPlugin"});const Ke=We;var Ze=function(){function e(e){var t=this;this._insertTag=function(e){var o;o=0===t.tags.length?t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,o),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var o=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{o.insertRule(e,o.cssRules.length)}catch(e){}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}();function De(e,t){switch(function(e,t){return(((t<<2^ue(e,0))<<2^ue(e,1))<<2^ue(e,2))<<2^ue(e,3)}(e,t)){case 5103:return te+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return te+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return te+e+ee+e+J+e+e;case 6828:case 4268:return te+e+J+e+e;case 6165:return te+e+J+"flex-"+e+e;case 5187:return te+e+ce(e,/(\w+).+(:[^]+)/,"-webkit-box-$1$2-ms-flex-$1$2")+e;case 5443:return te+e+J+"flex-item-"+ce(e,/flex-|-self/,"")+e;case 4675:return te+e+J+"flex-line-pack"+ce(e,/align-content|flex-|-self/,"")+e;case 5548:return te+e+J+ce(e,"shrink","negative")+e;case 5292:return te+e+J+ce(e,"basis","preferred-size")+e;case 6060:return te+"box-"+ce(e,"-grow","")+te+e+J+ce(e,"grow","positive")+e;case 4554:return te+ce(e,/([^-])(transform)/g,"$1-webkit-$2")+e;case 6187:return ce(ce(ce(e,/(zoom-|grab)/,te+"$1"),/(image-set)/,te+"$1"),e,"")+e;case 5495:case 3959:return ce(e,/(image-set\([^]*)/,te+"$1$`$1");case 4968:return ce(ce(e,/(.+:)(flex-)?(.*)/,"-webkit-box-pack:$3-ms-flex-pack:$3"),/s.+-b[^;]+/,"justify")+te+e+e;case 4095:case 3583:case 4068:case 2532:return ce(e,/(.+)-inline(.+)/,te+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ge(e)-1-t>6)switch(ue(e,t+1)){case 109:if(45!==ue(e,t+4))break;case 102:return ce(e,/(.+:)(.+)-([^]+)/,"$1-webkit-$2-$3$1"+ee+(108==ue(e,t+3)?"$3":"$2-$3"))+e;case 115:return~he(e,"stretch")?De(ce(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==ue(e,t+1))break;case 6444:switch(ue(e,ge(e)-3-(~he(e,"!important")&&10))){case 107:return ce(e,":",":"+te)+e;case 101:return ce(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+te+(45===ue(e,14)?"inline-":"")+"box$3$1"+te+"$2$3$1"+J+"$2box$3")+e}break;case 5936:switch(ue(e,t+11)){case 114:return te+e+J+ce(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return te+e+J+ce(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return te+e+J+ce(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return te+e+J+e+e}return e}var Ue=new WeakMap,Qe=function(e){if("rule"===e.type&&e.parent&&e.length){for(var t=e.value,o=e.parent,r=e.column===o.column&&e.line===o.line;"rule"!==o.type;)if(!(o=o.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||Ue.get(o))&&!r){Ue.set(e,!0);for(var i=[],n=function(e,t){return Ae(function(e,t){var o=-1,r=44;do{switch(Ie(r)){case 0:38===r&&12===je()&&(t[o]=1),e[o]+=Le(xe-1);break;case 2:e[o]+=Ee(r);break;case 4:if(44===r){e[++o]=58===je()?"&\f":"",t[o]=e[o].length;break}default:e[o]+=ae(r)}}while(r=Oe());return e}(Te(e),t))}(t,i),l=o.props,s=0,a=0;s<n.length;s++)for(var d=0;d<l.length;d++,a++)e.props[a]=i[s]?n[s].replace(/&\f/g,l[d]):l[d]+" "+n[s]}}},Je=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}},et=[function(e,t,o,r){if(!e.return)switch(e.type){case ie:e.return=De(e.value,e.length);break;case le:return me([Re(ce(e.value,"@","@"+te),e,"")],r);case re:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=/(::plac\w+|:read-\w+)/.exec(e))?e[0]:e}(t)){case":read-only":case":read-write":return me([Re(ce(t,/:(read-\w+)/,":-moz-$1"),e,"")],r);case"::placeholder":return me([Re(ce(t,/:(plac\w+)/,":-webkit-input-$1"),e,""),Re(ce(t,/:(plac\w+)/,":-moz-$1"),e,""),Re(ce(t,/:(plac\w+)/,J+"input-$1"),e,"")],r)}return""}))}}];const tt=function(e){var t=e.key;if("css"===t){var o=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(o,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var r,i,n=e.stylisPlugins||et,l={},s=[];r=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),o=1;o<t.length;o++)l[t[o]]=!0;s.push(e)}));var a,d,c,h,u=[ve,(h=function(e){a.insert(e)},function(e){e.root||(e=e.return)&&h(e)})],p=(d=[Qe,Je].concat(n,u),c=be(d),function(e,t,o,r){for(var i="",n=0;n<c;n++)i+=d[n](e,t,o,r)||"";return i});i=function(e,t,o,r){a=o,me(Ne(e?e+"{"+t.styles+"}":t.styles),p),r&&(g.inserted[t.name]=!0)};var g={key:t,sheet:new Ze({key:t,container:r,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend}),nonce:e.nonce,inserted:l,registered:{},insert:i};return g.sheet.hydrate(s),g};function ot(e){var t;return void 0===e&&(e=null===(t=(0,o.getAppStore)().getState().appContext)||void 0===t?void 0:t.isRTL),tt(e?{stylisPlugins:[Ke],key:"app-root-emotion-cache-rtl"}:{key:"app-root-emotion-cache-ltr"})}function rt(){var e;return window.jimuConfig.isInBuilder?null===(e=window.parent._appState)||void 0===e?void 0:e.theme:null}function it(){var e;let t=null;return t=window.jimuConfig.isInBuilder||window.jimuConfig.isBuilder?null===(e=(0,o.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.theme:(0,o.getAppStore)().getState().theme,t}function nt(e){var t;const r=it(),i=r.getIn(["components",e]),n=null!==(t=null==i?void 0:i.variants)&&void 0!==t?t:(0,o.Immutable)({default:i});if("navButtonGroup"===e){let e=(0,o.Immutable)({});const t=["default","primary","tertiary"],i=r.getIn(["components","button","variants"]);return t.forEach((t=>{var o;const r=null==n?void 0:n[t],l=null===(o=null==n?void 0:n[t])||void 0===o?void 0:o.item,s=(null==i?void 0:i[t]).merge(null!=l?l:{},{deep:!0});e=e.set(t,Object.assign(Object.assign({},r),{item:s}))})),e}return n}const lt=["nav","pagination","slider","navButtonGroup"],st=()=>{let e=(0,o.Immutable)({});return lt.forEach((t=>{const o=nt(t);e=e.set(t,o)})),e},at=/^var\(--(.+?)\)$/,dt=e=>at.test(e),ct=(e,t)=>{var r;if("string"!=typeof e)return null;let i,n="colors";return i=dt(e)?e.match(at)[1].split("-"):e.split("."),i.length>1&&parseInt(i[1])%100==0?n="colors.palette":"org"===(null==i?void 0:i[0])&&(n="colors.orgSharedColors",i=i.slice(1)),null!==(r=function(e,t){return"string"!=typeof e?null:(t=t||it(),o.lodash.getValue(t,e))}(`${n}.${i.join(".")}`,t))&&void 0!==r?r:e},ht=e=>{const t=X,r=o.ThemeManager.getInstance().getComponentOverwriteStyle("Global");return t?ut(null==t?void 0:t({theme:e}),null==r?void 0:r({theme:e})):(console.warn("The style of Global has not yet been registered"),null)};function ut(...e){return(0,o.css)(e)}var pt=r(679);const gt={},bt={};function ft(e,t){gt[e]?console.warn(`The entry : ${e} has been registered.`):(gt[e]=!0,Object.entries(t).forEach((([e,t])=>{bt[e]?console.error("Component name conflicts.",e):bt[e]=t})))}function mt(e,t,r){var i,n;const l=t||(null!==(n=null!==(i=e.displayName)&&void 0!==i?i:e.name)&&void 0!==n?n:"");return l?V(e,r)((e=>{const t=bt[l];if(!t)return console.warn("The style of "+l+" has not yet been registered"),null;const r=o.ThemeManager.getInstance().getComponentOverwriteStyle(l);return ut(null==t?void 0:t(e),null==r?void 0:r(e))})):(console.error("A component name is required."),e)}function vt(e,t,r){var i,n;if(!window.jimuConfig.isInBuilder)return e;const l=t||(null!==(n=null!==(i=e.displayName)&&void 0!==i?i:e.name)&&void 0!==n?n:"");if(!l)return console.warn("A component name is required."),e;if(!window.jimuConfig.isInBuilder)return console.warn("withBuilderStyles can only be used in the app-in-builder environment."),e;const s=window.parent._RegisteredStyles,a=function(){if(window.jimuConfig.isInBuilder)return window.parent._themeManager}(),d=V(e,r)((e=>{var t;const o=s[l],r=null===(t=null==a?void 0:a.getComponentOverwriteStyle)||void 0===t?void 0:t.call(a,l);return o||r?ut(null==o?void 0:o(e),null==r?void 0:r(e)):(console.warn("The style of "+l+" has not yet been registered"),null)})),c=o.React.forwardRef((function(e,t){const r=o.React.useMemo((()=>ot()),[]),i=rt();return o.React.createElement(K,{theme:i},o.React.createElement(Y,{value:r},o.React.createElement(d,Object.assign({},e,{ref:t}))))}));return c.displayName=`WithBuilderStyles(${l})`,pt(c,e)}function yt(e){if(!window.jimuConfig.isInBuilder)return e;const t=e.displayName||e.name||"Component",r=D(e),i=o.React.forwardRef((function(e,t){const i=o.React.useMemo((()=>ot()),[]),n=rt();return o.React.createElement(K,{theme:n},o.React.createElement(Y,{value:i},o.React.createElement(r,Object.assign({},e,{ref:t}))))}));return i.displayName=`WithBuilderTheme(${t})`,pt(i,e)}window._RegisteredStyles=bt;const wt='"Avenir Next", "Helvetica Neue", sans-serif, "PingFang SC", "Microsoft YaHei"',$t="100%",xt="0.8125rem",kt=13,zt={extraLight:"200",light:"300",medium:"400",bold:"500",extraBold:"600"},St={medium:1.5,sm:1.3,lg:1.7},Rt="1rem";function _t(e="1rem"){return{0:0,1:o.polished.math(`${e} * 0.25`),2:o.polished.math(`${e} * 0.5`),3:e,4:o.polished.math(`${e} * 1.25`),5:o.polished.math(`${e} * 1.5`)}}_t(Rt),_t(Rt);const Ot={none:"none",sm:`0 0 6px 0 ${o.polished.rgba("black",.15)}`,default:`0 0 10px 1px ${o.polished.rgba("black",.2)}`,lg:`0 0 20px 2px ${o.polished.rgba("black",.2)}`},jt={none:"0rem",sm:"0rem",default:"0.125rem",lg:"0.25rem",circle:"50%",pill:"50rem"};const Ct=e=>{const t=null!=e?e:{},{black:o,white:r,transparent:i,palette:n}=t;return function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(o[r[i]]=e[r[i]])}return o}(t,["black","white","transparent","palette"])};class qt{constructor(){this.darkTheme=!1,this.colors=(0,o.Immutable)({}),this.colorationVariants=(0,o.Immutable)({}),this.typography=(0,o.Immutable)({}),this.sizes=(0,o.Immutable)({}),this.gutters=(0,o.Immutable)({}),this.border=(0,o.Immutable)({}),this.borderRadiuses=(0,o.Immutable)({}),this.boxShadows=(0,o.Immutable)({}),this.focusedStyles=(0,o.Immutable)({}),this.surfaces=(0,o.Immutable)({}),this.body=(0,o.Immutable)({}),this.header=(0,o.Immutable)({}),this.footer=(0,o.Immutable)({}),this.link=(0,o.Immutable)({})}generate(t,r,i){var n,l,s,a,d,c,h,u,p,g,b,y,w,$,x,k,z,S,R,_,O,j,C,q,I;const T=t.merge(null!=r?r:{},{deep:!0});this.darkTheme=!!T.darkTheme,this.coloration=null!==(n=T.coloration)&&void 0!==n?n:"default",this.colors=((e,t)=>{var r,i;const n=!!(null==e?void 0:e.darkTheme),l=null!==(i=null===(r=null==e?void 0:e.colors)||void 0===r?void 0:r.palette)&&void 0!==i?i:(0,o.Immutable)({}),s=Ct(null==e?void 0:e.colors),a=Ct(null==t?void 0:t.colors),d=Object.assign({},f),c=Object.assign({},m),h=Object.assign({},v),u=new M;n&&([d.black,d.white]=[d.white,d.black],[c.dark,c.light]=[c.light,c.dark]);for(const e in m)s&&Object.prototype.hasOwnProperty.call(s,e)&&o.lodash.setValue(c,e,s[e]);const p={};s&&Object.keys(s).forEach((e=>{l[e]||(p[e]=s[e])}));const g=u.generate(Object.assign(Object.assign({},p),a),n);return(0,o.Immutable)(Object.assign(Object.assign(Object.assign({},d),c),{palette:Object.assign(Object.assign({},n?u.revertPalette(h):h),l?l.merge(g,{deep:!0}).asMutable():g)}))})(T,r),this.colors=this.colors.merge({orgSharedColors:null==i?void 0:i.without("fonts","logo"),getPalette:()=>this.colors.palette,getOrgShareColors:()=>null==i?void 0:i.without("fonts","logo")},{deep:!0}),this.colorationVariants=(0,o.Immutable)({minimal:{header:{bg:this.colors.light,color:this.colors.dark},body:{bg:this.colors.white,color:this.colors.dark},footer:{bg:this.colors.white,color:this.colors.dark}},default:{header:{bg:this.colors.palette.primary[700],color:this.colors.light},body:{bg:this.colors.palette.light[100],color:this.colors.dark},footer:{bg:this.colors.palette.light[100],color:this.colors.dark}}}).merge(null!==(l=null==T?void 0:T.colorationVariants)&&void 0!==l?l:{}),this.typography=((t,r)=>{var i;const n=null!==(i=null==t?void 0:t.typography)&&void 0!==i?i:(0,o.Immutable)({}),{fontSizeBaseInPx:l}=e,s=n.fontFamilyBase||wt,a=n.fontSizeRoot||$t,d=n.fontSizeBase||xt,c={fontFamilyBase:s,fontSizeRoot:a,fontSizeBase:d,sizes:Object.assign({display1:o.polished.math(`${d} * 30 / ${l}`),display2:o.polished.math(`${d} * 24 / ${l}`),display3:o.polished.math(`${d} * 20 / ${l}`),display4:o.polished.math(`${d} * 18 / ${l}`),display5:o.polished.math(`${d} * 16 / ${l}`),display6:o.polished.math(`${d} * 14 / ${l}`),body1:o.polished.math(`${d} * 14 / ${l}`),body2:d,caption1:o.polished.math(`${d} * 12 / ${l}`),caption2:o.polished.math(`${d} * 10 / ${l}`)},n.sizes),weights:Object.assign(Object.assign({},zt),n.weights),lineHeights:Object.assign(Object.assign({},St),n.lineHeights),colors:Object.assign({title:r.palette.dark[900],normal:r.palette.dark[700],caption:r.palette.dark[500],disabled:r.palette.light[500]},n.colors)},h={default:{fontFamily:c.fontFamilyBase,fontWeight:c.weights.medium,lineHeight:c.lineHeights.medium,color:c.colors.normal},heading:{fontFamily:c.fontFamilyBase,fontWeight:c.weights.bold,lineHeight:c.lineHeights.medium,color:c.colors.title}};return(0,o.Immutable)(Object.assign(Object.assign({},c),{variants:{display1:Object.assign(Object.assign({},h.heading),{fontSize:c.sizes.display1}),display2:Object.assign(Object.assign({},h.heading),{fontSize:c.sizes.display2}),display3:Object.assign(Object.assign({},h.heading),{fontSize:c.sizes.display3}),display4:Object.assign(Object.assign({},h.heading),{fontSize:c.sizes.display4}),display5:Object.assign(Object.assign({},h.heading),{fontSize:c.sizes.display5}),display6:Object.assign(Object.assign({},h.heading),{fontSize:c.sizes.display6}),body1:Object.assign(Object.assign({},h.default),{fontSize:c.sizes.body1}),body2:Object.assign(Object.assign({},h.default),{fontSize:c.sizes.body2}),caption1:Object.assign(Object.assign({},h.default),{fontSize:c.sizes.caption1,color:c.colors.caption}),caption2:Object.assign(Object.assign({},h.default),{fontSize:c.sizes.caption2,color:c.colors.caption})}})).merge(n,{deep:!0})})(T,this.colors),this.spacer=null!==(s=null==T?void 0:T.spacer)&&void 0!==s?s:Rt,this.sizes=(0,o.Immutable)(_t(this.spacer)).merge(null!==(a=null==T?void 0:T.sizes)&&void 0!==a?a:{}),this.gutters=(0,o.Immutable)(function(e="1rem"){return{0:0,1:o.polished.math(`${e} * 0.0625`),2:o.polished.math(`${e} * 0.125`),3:o.polished.math(`${e} * 0.25`),4:o.polished.math(`${e} * 0.5`),5:o.polished.math(`${e} * 0.625`)}}(this.spacer)).merge(null!==(d=null==T?void 0:T.gutters)&&void 0!==d?d:{}),this.border=(0,o.Immutable)({color:this.colors.palette.light[300],width:"1px"}).merge(null!==(c=null==T?void 0:T.border)&&void 0!==c?c:{}),this.borderRadiuses=(0,o.Immutable)(jt).merge(null!==(h=null==T?void 0:T.borderRadiuses)&&void 0!==h?h:{}),this.boxShadows=(0,o.Immutable)(Ot).merge(null!==(u=null==T?void 0:T.boxShadows)&&void 0!==u?u:{}),this.focusedStyles=(0,o.Immutable)({color:this.colors.palette.primary[700],width:"2px",offset:"2px"}),this.surfaces=(0,o.Immutable)({1:{bg:this.colors.white,border:{width:"1px",color:this.colors.palette.light[400]},shadow:this.boxShadows.none},2:{bg:this.colors.white,border:{width:"1px",color:this.colors.palette.light[300]},shadow:this.boxShadows.default},3:{bg:this.colors.palette.light[100],border:{width:"1px",color:this.colors.palette.light[400]},shadow:this.boxShadows.sm}}).merge(null!==(p=null==T?void 0:T.surfaces)&&void 0!==p?p:{},{deep:!0}),this.body=(0,o.Immutable)({bg:(null===(b=null===(g=this.colorationVariants[this.coloration])||void 0===g?void 0:g.body)||void 0===b?void 0:b.bg)||this.colors.white,color:(null===(w=null===(y=this.colorationVariants[this.coloration])||void 0===y?void 0:y.body)||void 0===w?void 0:w.color)||this.colors.black,fontFamily:this.typography.fontFamilyBase,fontWeight:this.typography.weights.medium,fontSize:this.typography.fontSizeBase,fontStyle:"unset",lineHeight:this.typography.lineHeights.medium}).merge(null!==($=null==T?void 0:T.body)&&void 0!==$?$:{}),this.header=(0,o.Immutable)({bg:(null===(k=null===(x=this.colorationVariants[this.coloration])||void 0===x?void 0:x.header)||void 0===k?void 0:k.bg)||this.colors.primary,color:(null===(S=null===(z=this.colorationVariants[this.coloration])||void 0===z?void 0:z.header)||void 0===S?void 0:S.color)||this.colors.white}).merge(null!==(R=null==T?void 0:T.header)&&void 0!==R?R:{}),this.footer=(0,o.Immutable)({bg:(null===(O=null===(_=this.colorationVariants[this.coloration])||void 0===_?void 0:_.footer)||void 0===O?void 0:O.bg)||this.colors.primary,color:(null===(C=null===(j=this.colorationVariants[this.coloration])||void 0===j?void 0:j.footer)||void 0===C?void 0:C.color)||this.colors.white}).merge(null!==(q=null==T?void 0:T.footer)&&void 0!==q?q:{}),this.link=(0,o.Immutable)({color:this.colors.primary,decoration:"none",hover:{color:this.colors.palette.primary[600],decoration:"underline"}}).merge(null!==(I=null==T?void 0:T.link)&&void 0!==I?I:{});const A={bg:this.colors.white,color:this.colors.black,border:{color:this.colors.palette.light[400],width:this.border.width}},E={darkTheme:this.darkTheme,coloration:this.coloration,colors:this.colors,typography:this.typography,spacer:this.spacer,sizes:this.sizes,gutters:this.gutters,border:this.border,borderRadiuses:this.borderRadiuses,boxShadows:this.boxShadows,surfaces:this.surfaces,body:this.body,header:this.header,footer:this.footer,link:this.link,focusedStyles:this.focusedStyles},P={alert:{paddingY:this.sizes[2],paddingX:this.sizes[3],marginBottom:"0.625rem",borderRadius:"0.25rem",linkFontWeight:this.typography.weights.light,borderWidth:"1px",bgLevel:"-10",borderLevel:"-9",colorLevel:"6"},badge:{fontSize:"85%",fontWeight:this.typography.weights.medium,paddingX:"0.5rem",paddingY:"0.25rem",borderRadius:this.borderRadiuses.pill,minSize:"6px",border:{width:"1px",color:this.colors.white}},breadcrumb:{bg:this.colors.palette.light[200],activeColor:this.colors.palette.dark[200],paddingY:"0.75rem",paddingX:"1rem",marginBottom:"1rem",borderRadius:this.borderRadiuses.default,item:{color:this.colors.palette.dark[900],hoverColor:this.colors.primary,padding:"0.5rem"},divider:{content:'"/"',color:this.colors.palette.dark[200]}},button:{sizes:{default:{fontSize:this.typography.sizes.body1,lineHeight:"1.375rem",paddingX:this.sizes[3],paddingY:this.sizes[1],borderRadius:"2px"},sm:{fontSize:this.typography.sizes.body2,lineHeight:"1rem",paddingX:this.sizes[3],paddingY:this.sizes[1],borderRadius:"2px"},lg:{fontSize:this.typography.sizes.display5,lineHeight:"1.375rem",paddingX:this.sizes[3],paddingY:this.sizes[2],borderRadius:"2px"}},variants:{default:{default:{color:this.colors.palette.dark[800],bg:this.colors.white,border:{color:this.colors.palette.light[400],width:"1px"}},hover:{bg:this.colors.palette.light[100]},active:{color:this.colors.white,bg:this.colors.primary,border:{color:this.colors.primary}},disabled:{color:this.colors.palette.light[800],bg:this.colors.palette.light[200],border:{color:this.colors.palette.light[400]}}},primary:{default:{color:this.colors.white,bg:this.colors.primary,border:{color:this.colors.primary,width:"1px"}},hover:{bg:this.colors.palette.primary[600]},active:{bg:this.colors.palette.primary[600]},disabled:{color:this.colors.palette.light[800],bg:this.colors.palette.light[200],border:{color:this.colors.palette.light[200]}}},secondary:{default:{color:this.colors.primary,bg:this.colors.transparent,border:{width:"1px",color:this.colors.primary}},hover:{color:this.colors.white,bg:this.colors.primary,border:{color:this.colors.primary}},active:{color:this.colors.white,bg:this.colors.primary,border:{color:this.colors.primary}},disabled:{color:this.colors.palette.light[800],bg:this.colors.palette.light[200],border:{color:this.colors.palette.light[400]}}},tertiary:{default:{color:this.colors.palette.dark[800],bg:this.colors.transparent,border:{width:"1px",color:this.colors.transparent}},hover:{color:this.colors.primary},active:{color:this.colors.white,bg:this.colors.primary},disabled:{color:this.colors.palette.light[800]}},danger:{default:{color:this.colors.white,bg:this.colors.danger,border:{width:"1px",color:this.colors.danger}},hover:{bg:this.colors.palette.danger[600]},active:{bg:this.colors.palette.danger[600]},disabled:{color:this.colors.palette.light[800],bg:this.colors.palette.light[200],border:{color:this.colors.palette.light[200]}}},link:{default:{color:this.colors.primary,bg:this.colors.transparent,border:{width:"1px",color:this.colors.transparent},decoration:"underline"},hover:{color:this.colors.palette.primary[600],decoration:"underline"},active:{color:this.colors.palette.primary[600]},disabled:{color:this.colors.palette.light[800]}}},icon:{spacing:this.gutters[4],size:"auto"}},card:{root:{default:Object.assign(Object.assign({},this.surfaces[1]),{borderRadius:this.borderRadiuses.none}),hover:{border:{width:"1px",color:this.colors.primary},shadow:`0 0 0 1px ${this.colors.primary}`},active:{border:{width:"1px",color:this.colors.primary},shadow:`0 0 0 1px ${this.colors.primary}`}},spacer:{y:"0.625rem",x:this.sizes[4]},headerBg:this.colors.white,divider:{color:this.colors.palette.light[200],width:"1px"},checkMark:{color:this.colors.white,bg:this.colors.primary}},close:{fontSize:o.polished.math(`${this.typography.fontSizeBase} * 1.5`),fontWeight:this.typography.weights.bold,color:this.colors.black,textShadow:`0 1px 0 ${this.colors.white}`},dropdown:Object.assign(Object.assign({button:{sizes:{default:{paddingX:"0.375rem"}}},minWidth:"10rem",paddingY:this.sizes[1],spacer:"4px"},this.surfaces[2]),{borderRadius:this.borderRadiuses.default,divider:{bg:this.colors.palette.light[400],margin:`${this.sizes[1]} ${this.sizes[2]}`},link:{color:this.colors.palette.dark[900],hoverColor:this.colors.white,hoverBg:this.colors.primary,activeColor:this.colors.white,activeBg:this.colors.primary,checkIconColor:"inherit",checkIconGutter:this.gutters[4],disabledColor:this.colors.palette.dark[200]},item:{paddingY:"0.25rem",paddingX:"1rem"},header:{color:this.colors.palette.dark[200]}}),form:{group:{marginBottom:"1rem"},helpText:{marginTop:"0.25rem",fontSize:"0.8125rem"},check:{inline:{marginX:"0.75rem",inputMarginX:"0.3125rem"}}},input:Object.assign(Object.assign({},A),{boxShadow:null,disabled:{bg:this.colors.palette.light[100],borderColor:this.colors.palette.light[400],color:this.colors.palette.light[800]},focus:{borderColor:this.colors.primary,boxShadow:null},placeHolderColor:this.colors.palette.dark[200],sizes:{default:{fontSize:this.typography.sizes.body1,lineHeight:1.5,paddingX:this.sizes[2],paddingY:this.sizes[1],borderRadius:this.borderRadiuses.default,height:"32px"},sm:{fontSize:this.typography.sizes.body2,lineHeight:1,paddingX:this.sizes[2],paddingY:this.sizes[1],borderRadius:this.borderRadiuses.default,height:"26px"},lg:{fontSize:this.typography.sizes.display5,lineHeight:1.5,paddingX:this.sizes[2],paddingY:this.sizes[2],borderRadius:this.borderRadiuses.default,height:"40px"}},transition:"border-color .15s ease-in-out, box-shadow .15s ease-in-out",checkbox:{size:"16px",border:{color:this.colors.palette.light[600],width:"2px"},hover:{borderColor:this.colors.primary},bg:A.bg,checked:{color:this.colors.white,bg:this.colors.primary},iconSize:"12px",borderRadius:"2px"},radio:{size:"16px",border:{color:this.colors.palette.light[600],width:"2px"},hover:{borderColor:this.colors.primary},bg:A.bg,checked:{color:this.colors.primary,bg:this.colors.white},iconSize:"8px",borderRadius:this.borderRadiuses.pill},switch:{width:"28px",height:"16px",bg:A.bg,border:{width:A.border.width,color:this.colors.palette.light[600]},checkedBg:this.colors.primary,checkedBorder:{color:this.colors.primary},slider:{gap:"2px",height:"auto",width:"auto",color:this.colors.palette.dark[800],checkedColor:"white",disabledColor:this.colors.palette.light[800]},borderRadius:this.borderRadiuses.pill,focusColor:this.colors.black}}),select:{button:{sizes:{default:{paddingX:"0.375rem"},sm:{paddingX:"0.375rem"},lg:{paddingX:"0.375rem"}}}},listGroup:{fontSize:"1rem",bg:this.colors.white,border:{color:this.border.color,width:this.border.width},borderRadius:this.borderRadiuses.default,item:{paddingY:"0.75rem",paddingX:"1rem"},hover:{bg:this.colors.palette.light[100]},active:{color:"inherit",bg:o.polished.rgba(this.colors.primary,.1),borderColor:this.border.color},disabled:{color:this.colors.palette.light[700],bg:this.colors.palette.light[200]},action:{color:this.colors.palette.dark[600],hover:{color:this.colors.palette.dark[600]},active:{color:this.body.color,bg:this.colors.palette.light[200]}}},inputGroup:{addon:{color:A.color,bg:this.colors.palette.light[200],borderColor:A.border.color}},modal:{innerPadding:"1rem",transition:"transform .3s ease-out",dialog:{margin:".5rem",marginYSmUp:"1.75rem"},title:{lineHeight:this.typography.lineHeights.medium},content:Object.assign(Object.assign({},this.surfaces[2]),{borderRadius:"0.25rem"}),backdrop:{bg:this.colors.black,opacity:.6},header:{border:{color:this.colors.palette.light[300],width:this.border.width},paddingY:".75rem",paddingX:"1rem"},footer:{border:{color:this.colors.palette.light[300],width:"0"},button:{minWidth:"6.25rem"}},sizes:{lg:"800px",md:"500px",sm:"300px"}},nav:{variants:{default:{size:{fontSize:this.typography.sizes.body1,lineHeight:1.5,paddingX:this.sizes[3],paddingY:this.sizes[1]},gutter:this.gutters[3],icon:{spacing:this.gutters[4]},root:{borderRadius:this.borderRadiuses.default},item:{default:{color:this.colors.palette.dark[800],bg:this.colors.transparent,border:{width:0},borderRadius:this.borderRadiuses.default},hover:{color:this.colors.primary,borderRadius:this.borderRadiuses.default},active:{color:this.colors.primary,borderRadius:this.borderRadiuses.default},disabled:{color:this.colors.palette.light[700],shadow:"none",borderRadius:this.borderRadiuses.default}}},underline:{size:{fontSize:this.typography.sizes.body1,lineHeight:1.5,paddingX:this.sizes[3],paddingY:this.sizes[1]},gutter:this.gutters[3],icon:{spacing:this.gutters[4]},root:{border:{width:0},borderRadius:this.borderRadiuses.none},item:{default:{color:this.colors.palette.dark[800],bg:this.colors.transparent,border:{color:this.colors.transparent,width:"2px"},borderRadius:this.borderRadiuses.none},hover:{color:this.colors.primary,border:{color:this.colors.transparent,width:"2px"},borderRadius:this.borderRadiuses.none},active:{color:this.colors.primary,border:{color:this.colors.primary,width:"2px"},borderRadius:this.borderRadiuses.none},disabled:{color:this.colors.palette.light[700],shadow:"none",borderRadius:this.borderRadiuses.none}}},pills:{size:{fontSize:this.typography.sizes.body1,lineHeight:1.5,paddingX:this.sizes[3],paddingY:this.sizes[1]},gutter:this.gutters[3],icon:{spacing:this.gutters[4]},root:{borderRadius:this.borderRadiuses.pill},item:{default:{color:this.colors.palette.dark[800],border:{width:"0px"},borderRadius:this.borderRadiuses.pill},hover:{color:this.colors.primary,borderRadius:this.borderRadiuses.pill},active:{color:this.colors.white,bg:this.colors.primary,borderRadius:this.borderRadiuses.pill},disabled:{color:this.colors.palette.light[700],shadow:"none",borderRadius:this.borderRadiuses.pill}}},tabs:{size:{fontSize:this.typography.sizes.body1,lineHeight:1.5,paddingX:this.sizes[3],paddingY:this.sizes[1]},gutter:this.gutters[3],icon:{spacing:this.gutters[4]},root:{border:{width:"1px",color:this.colors.palette.light[500]},borderRadius:this.borderRadiuses.default},item:{default:{color:this.colors.palette.dark[800],bg:this.colors.palette.light[100],border:{width:"1px",color:this.colors.palette.light[500]},borderRadius:this.borderRadiuses.default},hover:{bg:this.colors.white},active:{color:this.colors.primary,bg:this.colors.white,border:{width:"1px",color:this.colors.palette.light[500]}},disabled:{color:this.colors.palette.light[700],bg:this.colors.palette.light[200],shadow:"none"}}}}},navbar:{fontSize:"1rem",paddingY:o.polished.math(`${this.spacer} * 0.5`),paddingX:this.spacer,nav:{link:{paddingX:"0.5rem",height:"auto"}},brand:{fontSize:"1rem",height:"auto",paddingY:"auto"},toggler:{paddingY:"0.25rem",paddingX:"0.75rem",fontSize:this.typography.sizes.display5,borderRadius:"2px"},themes:{dark:{color:o.polished.rgba(this.colors.white,.75),hoverColor:this.colors.white,activeColor:this.colors.white,disabledColor:this.colors.palette.light[700],toggler:{borderColor:o.polished.rgba(this.colors.white,.1)}},light:{color:"inherit",hoverColor:this.colors.primary,activeColor:this.colors.primary,disabledColor:this.colors.palette.light[700],toggler:{borderColor:o.polished.rgba(this.colors.black,.1)}}}},pagination:{gutter:this.gutters[3],sizes:{default:{button:{paddingY:"0.25rem",paddingX:"0.25rem",minWidth:"1.625rem",lineHeight:1}},sm:{button:{paddingY:"0.25rem",paddingX:"0.25rem",minWidth:"1.5rem",lineHeight:1}},lg:{button:{paddingY:"0.5rem",paddingX:"0.5rem",minWidth:"2rem",lineHeight:1}}},variants:{default:{root:{default:{borderRadius:this.borderRadiuses.lg}},button:{default:{color:this.colors.palette.dark[800],bg:this.colors.white,border:{color:this.colors.palette.light[400],width:this.border.width},borderRadius:this.borderRadiuses.lg},hover:{color:this.link.color,bg:this.colors.palette.light[200],border:{width:"1px",color:this.colors.palette.light[400]}},active:{color:this.colors.white,bg:this.colors.primary,border:{width:"1px",color:this.colors.primary}},disabled:{color:this.colors.palette.light[800],bg:this.colors.palette.light[200],border:{width:"1px",color:this.colors.palette.light[400]}}}}}},popper:Object.assign(Object.assign({},this.surfaces[2]),{fontSize:this.typography.fontSizeBase,borderRadius:this.borderRadiuses.lg,header:{bg:this.colors.white,color:"inherit",paddingY:"0.625rem",paddingX:"0.625rem"},body:{color:this.body.color,paddingY:"0.5rem",paddingX:"0.75rem"},arrow:{color:this.surfaces[2].bg,outerColor:this.surfaces[2].border.color}}),paper:{bg:this.body.bg,color:this.body.color,paddingX:0,paddingY:0,border:{width:0,color:"transparent"}},progress:{fontSize:o.polished.math(`${this.typography.fontSizeBase} * 0.75`),bg:this.colors.palette.light[200],borderRadius:this.borderRadiuses.none},slider:{sizes:{default:{root:"0.125rem",thumb:"0.875rem"},sm:{root:"0.125rem",thumb:"0.875rem"},lg:{root:"0.25rem",thumb:"1.5rem"}},variants:{default:{root:{bg:this.colors.transparent,border:{width:0}},track:{bg:this.colors.palette.light[600],borderRadius:this.borderRadiuses.pill},progress:{default:{bg:this.colors.primary,borderRadius:this.borderRadiuses.pill}},thumb:{default:{bg:this.colors.white,border:{color:this.colors.palette.primary[500],width:"2px"},borderRadius:this.borderRadiuses.circle},hover:{border:{color:this.colors.palette.primary[600],width:"2px"}},focus:{shadow:`0 0 0 2px ${this.colors.white}, 0 0 0 3px ${this.colors.black}`}}}}},table:{color:this.body.color,bg:this.body.bg,border:{color:this.colors.palette.light[400],width:this.border.width},head:{fontSize:"1rem",bg:this.colors.transparent},cell:{default:{paddingX:this.sizes[3],paddingY:this.sizes[2]},sm:{paddingX:this.sizes[3],paddingY:this.sizes[2]}},variants:{striped:{bg:this.colors.palette.light[100]},dark:{color:this.colors.light,bg:this.colors.dark,border:{color:this.colors.palette.light[900]},head:{bg:this.colors.transparent}}}},tooltip:{fontSize:this.typography.sizes.body2,maxWidth:"360px",color:this.colors.black,bg:this.colors.palette.light[300],borderRadius:this.borderRadiuses.default,border:{width:"1px",color:this.colors.palette.light[600]},boxShadow:this.boxShadows.default,opacity:1,paddingY:this.sizes[1],paddingX:this.sizes[2],arrow:{color:this.colors.palette.light[300],border:{width:"1px",color:this.colors.palette.light[600]}}},navButtonGroup:{variants:{default:{root:{},item:{default:{color:this.colors.palette.dark[800],bg:this.colors.white,border:{color:this.colors.light[500],width:"1px"},borderRadius:this.sizes[1]},hover:{bg:this.colors.palette.light[100],borderRadius:this.sizes[1]},disabled:{color:this.colors.palette.light[800],bg:this.colors.palette.light[200],border:{color:this.colors.palette.light[400]},borderRadius:this.sizes[1]}}},primary:{root:{bg:this.colors.primary,borderRadius:this.sizes[5]},item:{default:{color:this.colors.white,bg:this.colors.transparent,border:{width:"0px",color:this.colors.transparent}},hover:{color:this.colors.light[500],bg:this.colors.transparent,border:{width:"0px",color:this.colors.transparent}},disabled:{color:this.colors.palette.light[800],bg:this.colors.transparent,border:{width:"0px",color:this.colors.transparent}}}},tertiary:{root:{},item:{default:{color:this.colors.palette.dark[800],bg:this.colors.transparent,border:{width:"0px",color:this.colors.transparent}},hover:{color:this.colors.primary,bg:this.colors.transparent,border:{width:"0px",color:this.colors.transparent}},disabled:{color:this.colors.palette.light[800],bg:this.colors.transparent,border:{width:"0px",color:this.colors.transparent}}}}}}},B={boxShadow:"0 1px 2px 0 rgba(0,0,0,0.20)",components:{button:{variants:{default:{default:{color:this.colors.palette.dark[600],bg:this.colors.palette.light[100]},hover:{color:this.colors.primary,bg:this.colors.palette.light[100]},active:{color:this.colors.white,bg:this.colors.primary},disabled:{color:this.colors.palette.light[800],bg:this.colors.palette.light[100]}},secondary:P.button.variants.secondary,tertiary:Object.assign(Object.assign({},P.button.variants.tertiary),{hover:{bg:this.colors.palette.primary[400]},active:{bg:this.colors.primary}})}},input:Object.assign(Object.assign({},A),{placeHolderColor:this.colors.palette.light[800],focus:{borderColor:this.colors.primary,boxShadow:null}}),menu:{bg:this.colors.palette.light[100],border:{color:this.colors.palette.light[400],width:"1px"},borderRadius:this.borderRadiuses.default,item:{default:{color:this.colors.palette.dark[900],bg:this.colors.palette.light[100],border:{width:0}},hover:{bg:this.colors.palette.light[300]},active:{bg:this.colors.palette.light[300]}}},panel:{color:this.colors.palette.dark[600],bg:this.colors.palette.light[100]},table:{root:{color:this.body.color}},updatingIndicator:{bg:this.colors.transparent,progress:this.colors.primary}},widgets:{layerlist:{root:{bg:this.colors.palette.light[100],color:this.colors.palette.dark[800]},item:{default:{bg:this.colors.palette.light[100],border:{color:this.colors.palette.light[500]}},disabled:{color:this.colors.palette.light[800]}},actionsList:{root:{bg:this.colors.palette.light[200],color:this.body.color},item:{default:{color:this.colors.palette.dark[600]},hover:{color:this.colors.primary,bg:this.colors.transparent},active:{color:this.colors.palette.light[100],bg:this.colors.primary}},separator:{color:this.colors.palette.light[300],width:"2px"}},icon:{default:{color:this.colors.palette.dark[600]},hover:{color:this.colors.primary,bg:this.colors.transparent},active:{color:this.colors.palette.light[100],bg:this.colors.primary}}},legend:{variants:{default:{root:{color:this.colors.palette.dark[800]}},card:{root:{color:this.colors.palette.dark[800],bg:this.colors.palette.light[100]},carousel:{bg:this.colors.palette.light[300]},caption:{bg:this.colors.palette.light[300]}}}},basemapGallery:{root:{color:this.colors.palette.dark[800],bg:this.colors.palette.light[100]},item:{hover:{bg:this.colors.palette.light[300],border:{color:this.colors.palette.light[300]}},active:{bg:this.colors.palette.primary[100],border:{color:this.colors.primary}},focus:{bg:this.colors.palette.light[300],border:{color:this.colors.palette.light[300]}}}},measure:{measurement:{bg:this.colors.palette.light[200],valueColor:this.colors.black,disabledColor:this.colors.palette.light[700]}}}};return(0,o.Immutable)(Object.assign(Object.assign({},E),{components:(0,o.Immutable)(P),arcgis:B})).merge(T.without("colors"),{deep:!0})}}let It=null;const Tt=(e=(0,o.Immutable)({}),t,r)=>(It||(It=new qt),It.generate(e,t,r))})(),i})())}}}));