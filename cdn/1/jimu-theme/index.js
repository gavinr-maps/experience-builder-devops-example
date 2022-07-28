/*! For license information please see index.js.LICENSE.txt */
System.register(["jimu-core"],(function(e,t){var o={};return{setters:[function(e){o.CONSTANTS=e.CONSTANTS,o.CacheProvider=e.CacheProvider,o.Global=e.Global,o.INTERACTIVE_CLASS=e.INTERACTIVE_CLASS,o.Immutable=e.Immutable,o.React=e.React,o.ReactRedux=e.ReactRedux,o.ThemeCommonColorKeys=e.ThemeCommonColorKeys,o.ThemeContext=e.ThemeContext,o.ThemeProvider=e.ThemeProvider,o.ThemeThemeColorKeys=e.ThemeThemeColorKeys,o.css=e.css,o.getAppStore=e.getAppStore,o.lodash=e.lodash,o.moduleLoader=e.moduleLoader,o.polished=e.polished,o.sharedThemeUtils=e.sharedThemeUtils,o.styled=e.styled,o.urlUtils=e.urlUtils}],execute:function(){e((()=>{var e={832:(e,t)=>{var o;function r(e,t){var o=[],r=0;function i(e){return o.push(e),t}function n(){return o[r++]}return{tokenize:function(t){return t.replace(e,i)},detokenize:function(e){return e.replace(new RegExp("("+t+")","g"),n)}}}o=new function(){var e="(?:[0-9]*\\.[0-9]+|[0-9]+)",t="\\/\\*\\!?\\s*@noflip\\s*\\*\\/",o="(?:(?:(?:\\\\[0-9a-f]{1,6})(?:\\r\\n|\\s)?)|\\\\[^\\r\\n\\f0-9a-f])",i="(?:[_a-z0-9-]|[^\\u0020-\\u007e]|"+o+")",n=e+"(?:\\s*(?:em|ex|px|cm|mm|in|pt|pc|deg|rad|grad|ms|s|hz|khz|%)|-?(?:[_a-z]|[^\\u0020-\\u007e]|(?:(?:(?:\\\\[0-9a-f]{1,6})(?:\\r\\n|\\s)?)|\\\\[^\\r\\n\\f0-9a-f]))(?:[_a-z0-9-]|[^\\u0020-\\u007e]|(?:(?:(?:\\\\[0-9a-f]{1,6})(?:\\r\\n|\\s)?)|\\\\[^\\r\\n\\f0-9a-f]))*)?",l="((?:-?"+n+")|(?:inherit|auto))",s="(#?"+i+"+|(?:rgba?|hsla?)\\([ \\d.,%-]+\\))",a="(?:[!#$%&*-~]|[^\\u0020-\\u007e]|"+o+")*?",d="(?!("+i+"|\\r?\\n|\\s|#|\\:|\\.|\\,|\\+|>|~|\\(|\\)|\\[|\\]|=|\\*=|~=|\\^=|'[^']*'|\"[^\"]*\"|`COMMENT`)*?{)",c="(?!"+a+"['\"]?\\s*\\))",u="(?="+a+"['\"]?\\s*\\))",h="(\\s*(?:!important\\s*)?[;}])",p=/`TMP`/g,g=new RegExp("\\/\\*[^*]*\\*+([^\\/*][^*]*\\*+)*\\/","gi"),m=new RegExp("("+t+d+"[^;}]+;?)","gi"),b=new RegExp("("+t+"[^\\}]*?})","gi"),f=new RegExp("(direction\\s*:\\s*)ltr","gi"),v=new RegExp("(direction\\s*:\\s*)rtl","gi"),y=new RegExp("(^|[^a-zA-Z])(left)(?![a-zA-Z])"+c+d,"gi"),w=new RegExp("(^|[^a-zA-Z])(right)(?![a-zA-Z])"+c+d,"gi"),$=new RegExp("(^|[^a-zA-Z])(left)"+u,"gi"),x=new RegExp("(^|[^a-zA-Z])(right)"+u,"gi"),k=new RegExp("(^|[^a-zA-Z])(ltr)"+u,"gi"),z=new RegExp("(^|[^a-zA-Z])(rtl)"+u,"gi"),R=new RegExp("(^|[^a-zA-Z])([ns]?)e-resize","gi"),S=new RegExp("(^|[^a-zA-Z])([ns]?)w-resize","gi"),_=new RegExp("((?:margin|padding|border-width)\\s*:\\s*)"+l+"(\\s+)"+l+"(\\s+)"+l+"(\\s+)"+l+h,"gi"),C=new RegExp("((?:-color|border-style)\\s*:\\s*)"+s+"(\\s+)"+s+"(\\s+)"+s+"(\\s+)"+s+h,"gi"),j=new RegExp("(background(?:-position)?\\s*:\\s*(?:[^:;}\\s]+\\s+)*?)("+n+")","gi"),O=new RegExp("(background-position-x\\s*:\\s*)(-?"+e+"%)","gi"),T=new RegExp("(border-radius\\s*:\\s*)"+l+"(?:(?:\\s+"+l+")(?:\\s+"+l+")?(?:\\s+"+l+")?)?(?:(?:(?:\\s*\\/\\s*)"+l+")(?:\\s+"+l+")?(?:\\s+"+l+")?(?:\\s+"+l+")?)?"+h,"gi"),q=new RegExp("(box-shadow\\s*:\\s*(?:inset\\s*)?)"+l,"gi"),I=new RegExp("(text-shadow\\s*:\\s*)"+l+"(\\s*)"+s,"gi"),E=new RegExp("(text-shadow\\s*:\\s*)"+s+"(\\s*)"+l,"gi"),P=new RegExp("(text-shadow\\s*:\\s*)"+l,"gi"),A=new RegExp("(transform\\s*:[^;}]*)(translateX\\s*\\(\\s*)"+l+"(\\s*\\))","gi"),M=new RegExp("(transform\\s*:[^;}]*)(translate\\s*\\(\\s*)"+l+"((?:\\s*,\\s*"+l+"){0,2}\\s*\\))","gi");function B(e,t,o){var r,i;return"%"===o.slice(-1)&&(-1!==(r=o.indexOf("."))?(i=o.length-r-2,o=(o=100-parseFloat(o)).toFixed(i)+"%"):o=100-parseFloat(o)+"%"),t+o}function F(e){switch(e.length){case 4:e=[e[1],e[0],e[3],e[2]];break;case 3:e=[e[1],e[0],e[1],e[2]];break;case 2:e=[e[1],e[0]];break;case 1:e=[e[0]]}return e.join(" ")}function L(e,t){var o=[].slice.call(arguments),r=o.slice(2,6).filter((function(e){return e})),i=o.slice(6,10).filter((function(e){return e})),n=o[10]||"";return t+(i.length?F(r)+" / "+F(i):F(r))+n}function N(e){return 0===parseFloat(e)?e:"-"===e[0]?e.slice(1):"-"+e}function H(e,t,o){return t+N(o)}function X(e,t,o,r,i){return t+o+N(r)+i}function Y(e,t,o,r,i){return t+o+r+N(i)}return{transform:function(e,t){var o=new r(m,"`NOFLIP_SINGLE`"),i=new r(b,"`NOFLIP_CLASS`"),n=new r(g,"`COMMENT`");return e=n.tokenize(i.tokenize(o.tokenize(e.replace("`","%60")))),t.transformDirInUrl&&(e=e.replace(k,"$1`TMP`").replace(z,"$1ltr").replace(p,"rtl")),t.transformEdgeInUrl&&(e=e.replace($,"$1`TMP`").replace(x,"$1left").replace(p,"right")),e=e.replace(f,"$1`TMP`").replace(v,"$1ltr").replace(p,"rtl").replace(y,"$1`TMP`").replace(w,"$1left").replace(p,"right").replace(R,"$1$2`TMP`").replace(S,"$1$2e-resize").replace(p,"w-resize").replace(T,L).replace(q,H).replace(I,Y).replace(E,Y).replace(P,H).replace(A,X).replace(M,X).replace(_,"$1$2$3$8$5$6$7$4$9").replace(C,"$1$2$3$8$5$6$7$4$9").replace(j,B).replace(O,B),o.detokenize(i.detokenize(n.detokenize(e)))}}},e.exports?t.transform=function(e,t,r){var i;return"object"==typeof t?i=t:(i={},"boolean"==typeof t&&(i.transformDirInUrl=t),"boolean"==typeof r&&(i.transformEdgeInUrl=r)),o.transform(e,i)}:"undefined"!=typeof window&&(window.cssjanus=o)},679:(e,t,o)=>{"use strict";var r=o(864),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},l={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function a(e){return r.isMemo(e)?l:s[e.$$typeof]||i}s[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[r.Memo]=l;var d=Object.defineProperty,c=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,h=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,g=Object.prototype;e.exports=function e(t,o,r){if("string"!=typeof o){if(g){var i=p(o);i&&i!==g&&e(t,i,r)}var l=c(o);u&&(l=l.concat(u(o)));for(var s=a(t),m=a(o),b=0;b<l.length;++b){var f=l[b];if(!(n[f]||r&&r[f]||m&&m[f]||s&&s[f])){var v=h(o,f);try{d(t,f,v)}catch(e){}}}}return t}},921:(e,t)=>{"use strict";var o="function"==typeof Symbol&&Symbol.for,r=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,n=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,s=o?Symbol.for("react.profiler"):60114,a=o?Symbol.for("react.provider"):60109,d=o?Symbol.for("react.context"):60110,c=o?Symbol.for("react.async_mode"):60111,u=o?Symbol.for("react.concurrent_mode"):60111,h=o?Symbol.for("react.forward_ref"):60112,p=o?Symbol.for("react.suspense"):60113,g=o?Symbol.for("react.suspense_list"):60120,m=o?Symbol.for("react.memo"):60115,b=o?Symbol.for("react.lazy"):60116,f=o?Symbol.for("react.block"):60121,v=o?Symbol.for("react.fundamental"):60117,y=o?Symbol.for("react.responder"):60118,w=o?Symbol.for("react.scope"):60119;function $(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case c:case u:case n:case s:case l:case p:return e;default:switch(e=e&&e.$$typeof){case d:case h:case b:case m:case a:return e;default:return t}}case i:return t}}}function x(e){return $(e)===u}t.AsyncMode=c,t.ConcurrentMode=u,t.ContextConsumer=d,t.ContextProvider=a,t.Element=r,t.ForwardRef=h,t.Fragment=n,t.Lazy=b,t.Memo=m,t.Portal=i,t.Profiler=s,t.StrictMode=l,t.Suspense=p,t.isAsyncMode=function(e){return x(e)||$(e)===c},t.isConcurrentMode=x,t.isContextConsumer=function(e){return $(e)===d},t.isContextProvider=function(e){return $(e)===a},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return $(e)===h},t.isFragment=function(e){return $(e)===n},t.isLazy=function(e){return $(e)===b},t.isMemo=function(e){return $(e)===m},t.isPortal=function(e){return $(e)===i},t.isProfiler=function(e){return $(e)===s},t.isStrictMode=function(e){return $(e)===l},t.isSuspense=function(e){return $(e)===p},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===u||e===s||e===l||e===p||e===g||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===m||e.$$typeof===a||e.$$typeof===d||e.$$typeof===h||e.$$typeof===v||e.$$typeof===y||e.$$typeof===w||e.$$typeof===f)},t.typeOf=$},864:(e,t,o)=>{"use strict";e.exports=o(921)},891:e=>{"use strict";e.exports=o}},t={};function r(o){var i=t[o];if(void 0!==i)return i.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,r),n.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{"use strict";r.r(i),r.d(i,{CacheProvider:()=>he,Global:()=>me,GlobalStyle:()=>xt,PaletteGenerator:()=>Ze,Theme2Area:()=>uo,Theme2Context:()=>it,ThemeArea:()=>ho,ThemeContext:()=>pe,ThemeManager:()=>Nt,ThemeProvider:()=>lt,ThemeStore:()=>Mt,UseTheme2Context:()=>rt,caret:()=>$e,createEmotionCache:()=>ce,createEmotionRTLCache:()=>ue,createTheme:()=>At,formValidation:()=>ke,getBoxStyles:()=>ze,getBuilderThemeVariables:()=>Ht,getComponentBasicStyle:()=>mt,getComponentVariants:()=>Yt,getGlobalStyle:()=>bt,getLoadingStyles:()=>Je,getNavigationVariables:()=>Gt,getQuillCoreStyle:()=>fe,getTheme:()=>to,getTheme2:()=>oo,getTheme2Style:()=>eo,getThemeColorValue:()=>Dt,getThemeModule:()=>Zt,getThemeStyle:()=>Jt,globalStyles:()=>ot,hover:()=>ve,hoverFocus:()=>ye,isCSSVariable:()=>Wt,isThemeLoaded:()=>Kt,loadTheme:()=>lo,loadingUtilityClasses:()=>et,navDivider:()=>xe,popperPointer:()=>Ce,registerComponentBasicStyle:()=>ht,registerComponentBasicStyles:()=>pt,registerStyles:()=>gt,setThemeModule:()=>Qt,styled:()=>ge,useTheme:()=>at,useTheme2:()=>dt,useUseTheme2:()=>st,withBuilderStyles:()=>$t,withBuilderTheme:()=>co,withStyles:()=>yt,withTheme:()=>so,withTheme2:()=>ao,withTheme2Styles:()=>wt});var e={};r.r(e),r.d(e,{fontFamilyBase:()=>kt,fontSizeBase:()=>Rt,fontSizeBaseInPx:()=>St,fontSizeRoot:()=>zt,fontWeights:()=>_t,lineHeights:()=>Ct});var t=r(891),o=r(832),n=r.n(o),l="-ms-",s="-moz-",a="-webkit-",d="comm",c="rule",u="decl",h="@import",p="@keyframes",g=Math.abs,m=String.fromCharCode,b=Object.assign;function f(e){return e.trim()}function v(e,t,o){return e.replace(t,o)}function y(e,t){return e.indexOf(t)}function w(e,t){return 0|e.charCodeAt(t)}function $(e,t,o){return e.slice(t,o)}function x(e){return e.length}function k(e){return e.length}function z(e,t){return t.push(e),e}function R(e,t){for(var o="",r=k(e),i=0;i<r;i++)o+=t(e[i],i,e,t)||"";return o}function S(e,t,o,r){switch(e.type){case h:case u:return e.return=e.return||e.value;case d:return"";case p:return e.return=e.value+"{"+R(e.children,r)+"}";case c:e.value=e.props.join(",")}return x(o=R(e.children,r))?e.return=e.value+"{"+o+"}":""}var _=1,C=1,j=0,O=0,T=0,q="";function I(e,t,o,r,i,n,l){return{value:e,root:t,parent:o,type:r,props:i,children:n,line:_,column:C,length:l,return:""}}function E(e,t){return b(I("",null,null,"",null,null,0),e,{length:-e.length},t)}function P(){return T=O>0?w(q,--O):0,C--,10===T&&(C=1,_--),T}function A(){return T=O<j?w(q,O++):0,C++,10===T&&(C=1,_++),T}function M(){return w(q,O)}function B(){return O}function F(e,t){return $(q,e,t)}function L(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function N(e){return _=C=1,j=x(q=e),O=0,[]}function H(e){return q="",e}function X(e){return f(F(O-1,G(91===e?e+2:40===e?e+1:e)))}function Y(e){for(;(T=M())&&T<33;)A();return L(e)>2||L(T)>3?"":" "}function V(e,t){for(;--t&&A()&&!(T<48||T>102||T>57&&T<65||T>70&&T<97););return F(e,B()+(t<6&&32==M()&&32==A()))}function G(e){for(;A();)switch(T){case e:return O;case 34:case 39:34!==e&&39!==e&&G(T);break;case 40:41===e&&G(e);break;case 92:A()}return O}function U(e,t){for(;A()&&e+T!==57&&(e+T!==84||47!==M()););return"/*"+F(t,O-1)+"*"+m(47===e?e:A())}function W(e){for(;!L(M());)A();return F(e,O)}function D(e){return H(K("",null,null,null,[""],e=N(e),0,[0],e))}function K(e,t,o,r,i,n,l,s,a){for(var d=0,c=0,u=l,h=0,p=0,g=0,b=1,f=1,w=1,$=0,k="",R=i,S=n,_=r,C=k;f;)switch(g=$,$=A()){case 40:if(108!=g&&58==C.charCodeAt(u-1)){-1!=y(C+=v(X($),"&","&\f"),"&\f")&&(w=-1);break}case 34:case 39:case 91:C+=X($);break;case 9:case 10:case 13:case 32:C+=Y(g);break;case 92:C+=V(B()-1,7);continue;case 47:switch(M()){case 42:case 47:z(Q(U(A(),B()),t,o),a);break;default:C+="/"}break;case 123*b:s[d++]=x(C)*w;case 125*b:case 59:case 0:switch($){case 0:case 125:f=0;case 59+c:p>0&&x(C)-u&&z(p>32?J(C+";",r,o,u-1):J(v(C," ","")+";",r,o,u-2),a);break;case 59:C+=";";default:if(z(_=Z(C,t,o,d,c,i,s,k,R=[],S=[],u),n),123===$)if(0===c)K(C,t,_,_,R,n,u,s,S);else switch(h){case 100:case 109:case 115:K(e,_,_,r&&z(Z(e,_,_,0,0,i,s,k,i,R=[],u),S),i,S,u,s,r?R:S);break;default:K(C,_,_,_,[""],S,0,s,S)}}d=c=p=0,b=w=1,k=C="",u=l;break;case 58:u=1+x(C),p=g;default:if(b<1)if(123==$)--b;else if(125==$&&0==b++&&125==P())continue;switch(C+=m($),$*b){case 38:w=c>0?1:(C+="\f",-1);break;case 44:s[d++]=(x(C)-1)*w,w=1;break;case 64:45===M()&&(C+=X(A())),h=M(),c=u=x(k=C+=W(B())),$++;break;case 45:45===g&&2==x(C)&&(b=0)}}return n}function Z(e,t,o,r,i,n,l,s,a,d,u){for(var h=i-1,p=0===i?n:[""],m=k(p),b=0,y=0,w=0;b<r;++b)for(var x=0,z=$(e,h+1,h=g(y=l[b])),R=e;x<m;++x)(R=f(y>0?p[x]+" "+z:v(z,/&\f/g,p[x])))&&(a[w++]=R);return I(e,t,o,0===i?c:s,a,d,u)}function Q(e,t,o){return I(e,t,o,d,m(T),$(e,2,-2),0)}function J(e,t,o,r){return I(e,t,o,u,$(e,0,r),$(e,r+1,-1),r)}function ee(e,t,o){switch(e.type){case h:case u:case d:return e.return=e.return||e.value;case c:e.value=Array.isArray(e.props)?e.props.join(","):e.props,Array.isArray(e.children)&&e.children.forEach((function(e){e.type===d&&(e.children=e.value)}))}var r=R(Array.prototype.concat(e.children),ee);return x(r)?e.return=e.value+"{"+r+"}":""}function te(e,t,o,r){if(e.type===p||"@supports"===e.type||e.type===c&&(!e.parent||"@media"===e.parent.type||e.parent.type===c)){var i=n().transform(ee(e));e.children=i?D(i)[0].children:[],e.return=""}}Object.defineProperty(te,"name",{value:"stylisRTLPlugin"});const oe=te;var re=function(){function e(e){var t=this;this._insertTag=function(e){var o;o=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,o),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var o=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{o.insertRule(e,o.cssRules.length)}catch(e){}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}();function ie(e,t){switch(function(e,t){return(((t<<2^w(e,0))<<2^w(e,1))<<2^w(e,2))<<2^w(e,3)}(e,t)){case 5103:return a+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return a+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return a+e+s+e+l+e+e;case 6828:case 4268:return a+e+l+e+e;case 6165:return a+e+l+"flex-"+e+e;case 5187:return a+e+v(e,/(\w+).+(:[^]+)/,"-webkit-box-$1$2-ms-flex-$1$2")+e;case 5443:return a+e+l+"flex-item-"+v(e,/flex-|-self/,"")+e;case 4675:return a+e+l+"flex-line-pack"+v(e,/align-content|flex-|-self/,"")+e;case 5548:return a+e+l+v(e,"shrink","negative")+e;case 5292:return a+e+l+v(e,"basis","preferred-size")+e;case 6060:return a+"box-"+v(e,"-grow","")+a+e+l+v(e,"grow","positive")+e;case 4554:return a+v(e,/([^-])(transform)/g,"$1-webkit-$2")+e;case 6187:return v(v(v(e,/(zoom-|grab)/,a+"$1"),/(image-set)/,a+"$1"),e,"")+e;case 5495:case 3959:return v(e,/(image-set\([^]*)/,a+"$1$`$1");case 4968:return v(v(e,/(.+:)(flex-)?(.*)/,"-webkit-box-pack:$3-ms-flex-pack:$3"),/s.+-b[^;]+/,"justify")+a+e+e;case 4095:case 3583:case 4068:case 2532:return v(e,/(.+)-inline(.+)/,a+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(x(e)-1-t>6)switch(w(e,t+1)){case 109:if(45!==w(e,t+4))break;case 102:return v(e,/(.+:)(.+)-([^]+)/,"$1-webkit-$2-$3$1"+s+(108==w(e,t+3)?"$3":"$2-$3"))+e;case 115:return~y(e,"stretch")?ie(v(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==w(e,t+1))break;case 6444:switch(w(e,x(e)-3-(~y(e,"!important")&&10))){case 107:return v(e,":",":"+a)+e;case 101:return v(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+a+(45===w(e,14)?"inline-":"")+"box$3$1"+a+"$2$3$1"+l+"$2box$3")+e}break;case 5936:switch(w(e,t+11)){case 114:return a+e+l+v(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return a+e+l+v(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return a+e+l+v(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return a+e+l+e+e}return e}var ne=function(e,t,o){for(var r=0,i=0;r=i,i=M(),38===r&&12===i&&(t[o]=1),!L(i);)A();return F(e,O)},le=new WeakMap,se=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,o=e.parent,r=e.column===o.column&&e.line===o.line;"rule"!==o.type;)if(!(o=o.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||le.get(o))&&!r){le.set(e,!0);for(var i=[],n=function(e,t){return H(function(e,t){var o=-1,r=44;do{switch(L(r)){case 0:38===r&&12===M()&&(t[o]=1),e[o]+=ne(O-1,t,o);break;case 2:e[o]+=X(r);break;case 4:if(44===r){e[++o]=58===M()?"&\f":"",t[o]=e[o].length;break}default:e[o]+=m(r)}}while(r=A());return e}(N(e),t))}(t,i),l=o.props,s=0,a=0;s<n.length;s++)for(var d=0;d<l.length;d++,a++)e.props[a]=i[s]?n[s].replace(/&\f/g,l[d]):l[d]+" "+n[s]}}},ae=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}},de=[function(e,t,o,r){if(e.length>-1&&!e.return)switch(e.type){case u:e.return=ie(e.value,e.length);break;case p:return R([E(e,{value:v(e.value,"@","@"+a)})],r);case c:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=/(::plac\w+|:read-\w+)/.exec(e))?e[0]:e}(t)){case":read-only":case":read-write":return R([E(e,{props:[v(t,/:(read-\w+)/,":-moz-$1")]})],r);case"::placeholder":return R([E(e,{props:[v(t,/:(plac\w+)/,":-webkit-input-$1")]}),E(e,{props:[v(t,/:(plac\w+)/,":-moz-$1")]}),E(e,{props:[v(t,/:(plac\w+)/,l+"input-$1")]})],r)}return""}))}}];const ce=function(e){var t=e.key;if("css"===t){var o=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(o,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var r,i,n=e.stylisPlugins||de,l={},s=[];r=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),o=1;o<t.length;o++)l[t[o]]=!0;s.push(e)}));var a,d,c,u,h=[S,(u=function(e){a.insert(e)},function(e){e.root||(e=e.return)&&u(e)})],p=(d=[se,ae].concat(n,h),c=k(d),function(e,t,o,r){for(var i="",n=0;n<c;n++)i+=d[n](e,t,o,r)||"";return i});i=function(e,t,o,r){a=o,R(D(e?e+"{"+t.styles+"}":t.styles),p),r&&(g.inserted[t.name]=!0)};var g={key:t,sheet:new re({key:t,container:r,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:l,registered:{},insert:i};return g.sheet.hydrate(s),g};function ue(e=!1){return ce(e?{stylisPlugins:[oe],key:"app-root-emotion-cache-rtl"}:{key:"app-root-emotion-cache-ltr"})}const he=t.CacheProvider,pe=t.ThemeContext,ge=t.styled,me=t.Global,be=e=>t.React.createElement(t.ThemeProvider,Object.assign({},e));function fe(){return"\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box;\n    line-height: 1.42;\n    height: 100%;\n    outline: none;\n    overflow-y: auto;\n    overflow-x: hidden;\n    tab-size: 4;\n    -moz-tab-size: 4;\n    word-wrap: break-word;\n    white-space: pre-wrap;\n    & >* {\n      cursor: text;\n    }\n    p,\n    ol,\n    ul,\n    pre,\n    blockquote,\n    h1,\n    h2,\n    h3,\n    h4,\n    h5,\n    h6 {\n      margin: 0;\n      padding: 0;\n      counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n    }\n    ol,\n    ul {\n      padding-left: 1.5em;\n    }\n    p {\n      margin-bottom: 0;\n    }\n    ul>li,\n    ol>li{\n      list-style-type: none;\n    }\n    ul>li::before {\n        content: '•';\n    }\n    ul[data-checked=true],\n    ul[data-checked=false] {\n      pointer-events: none;\n    }\n    ul[data-checked=true]>li *,\n    ul[data-checked=false]>li * {\n      pointer-events: all;\n    }\n    ul[data-checked=true]>li::before,\n    ul[data-checked=false]>li::before {\n      color: #777;\n      cursor: pointer;\n      pointer-events: all;\n    }\n    ul[data-checked=true]>li::before {\n      content: '\\2611';\n    }\n    ul[data-checked=false]>li::before {\n      content: '\\2610';\n    }\n    li::before {\n      display: inline-block;\n      white-space: nowrap;\n      width: 1.2em;\n    }\n    li:not(.ql-direction-rtl)::before {\n      margin-left: -1.5em;\n      margin-right: 0.3em;\n      text-align: right;\n    }\n    li.ql-direction-rtl::before {\n      margin-left: 0.3em;\n      margin-right: -1.5em;\n    }\n    ol li {\n      counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n      counter-increment: list-0;\n    }\n    ol li:before {\n      content: counter(list-0, decimal) '. ';\n    }\n    ol li.ql-indent-1 {\n      counter-increment: list-1;\n    }\n    ol li.ql-indent-1:before {\n      content: counter(list-1, lower-alpha) '. ';\n    }\n    ol li.ql-indent-1 {\n      counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n    }\n    ol li.ql-indent-2 {\n      counter-increment: list-2;\n    }\n    ol li.ql-indent-2:before {\n      content: counter(list-2, lower-roman) '. ';\n    }\n    ol li.ql-indent-2 {\n      counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n    }\n    ol li.ql-indent-3 {\n      counter-increment: list-3;\n    }\n    ol li.ql-indent-3:before {\n      content: counter(list-3, decimal) '. ';\n    }\n    ol li.ql-indent-3 {\n      counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;\n    }\n    ol li.ql-indent-4 {\n      counter-increment: list-4;\n    }\n    ol li.ql-indent-4:before {\n      content: counter(list-4, lower-alpha) '. ';\n    }\n    ol li.ql-indent-4 {\n      counter-reset: list-5 list-6 list-7 list-8 list-9;\n    }\n    ol li.ql-indent-5 {\n      counter-increment: list-5;\n    }\n    ol li.ql-indent-5:before {\n      content: counter(list-5, lower-roman) '. ';\n    }\n    ol li.ql-indent-5 {\n      counter-reset: list-6 list-7 list-8 list-9;\n    }\n    ol li.ql-indent-6 {\n      counter-increment: list-6;\n    }\n    ol li.ql-indent-6:before {\n      content: counter(list-6, decimal) '. ';\n    }\n    ol li.ql-indent-6 {\n      counter-reset: list-7 list-8 list-9;\n    }\n    ol li.ql-indent-7 {\n      counter-increment: list-7;\n    }\n    ol li.ql-indent-7:before {\n      content: counter(list-7, lower-alpha) '. ';\n    }\n    ol li.ql-indent-7 {\n      counter-reset: list-8 list-9;\n    }\n    ol li.ql-indent-8 {\n      counter-increment: list-8;\n    }\n    ol li.ql-indent-8:before {\n      content: counter(list-8, lower-roman) '. ';\n    }\n    ol li.ql-indent-8 {\n      counter-reset: list-9;\n    }\n    ol li.ql-indent-9 {\n      counter-increment: list-9;\n    }\n    ol li.ql-indent-9:before {\n      content: counter(list-9, decimal) '. ';\n    }\n    .ql-indent-1:not(.ql-direction-rtl) {\n      padding-left: 3em;\n    }\n    li.ql-indent-1:not(.ql-direction-rtl) {\n      padding-left: 4.5em;\n    }\n    .ql-indent-1.ql-direction-rtl.ql-align-right {\n      padding-right: 3em;\n    }\n    li.ql-indent-1.ql-direction-rtl.ql-align-right {\n      padding-right: 4.5em;\n    }\n    .ql-indent-2:not(.ql-direction-rtl) {\n      padding-left: 6em;  \n    }\n    li.ql-indent-2:not(.ql-direction-rtl) {\n      padding-left: 7.5em;\n    }\n    .ql-indent-2.ql-direction-rtl.ql-align-right {\n      padding-right: 6em;\n    }\n    li.ql-indent-2.ql-direction-rtl.ql-align-right {\n      padding-right: 7.5em;\n    }\n    .ql-indent-3:not(.ql-direction-rtl) {\n      padding-left: 9em;\n    }\n    li.ql-indent-3:not(.ql-direction-rtl) {\n      padding-left: 10.5em;\n    }\n    .ql-indent-3.ql-direction-rtl.ql-align-right {\n      padding-right: 9em;\n    }\n    li.ql-indent-3.ql-direction-rtl.ql-align-right {\n      padding-right: 10.5em;\n    }\n    .ql-indent-4:not(.ql-direction-rtl) {\n      padding-left: 12em;\n    }\n    li.ql-indent-4:not(.ql-direction-rtl) {\n      padding-left: 13.5em;\n    }\n    .ql-indent-4.ql-direction-rtl.ql-align-right {\n      padding-right: 12em;\n    }\n    li.ql-indent-4.ql-direction-rtl.ql-align-right {\n      padding-right: 13.5em;\n    }\n    .ql-indent-5:not(.ql-direction-rtl) {\n      padding-left: 15em;\n    }\n    li.ql-indent-5:not(.ql-direction-rtl) {\n      padding-left: 16.5em;\n    }\n    .ql-indent-5.ql-direction-rtl.ql-align-right {\n      padding-right: 15em;\n    }\n    li.ql-indent-5.ql-direction-rtl.ql-align-right {\n      padding-right: 16.5em;\n    }\n    .ql-indent-6:not(.ql-direction-rtl) {\n      padding-left: 18em;\n    }\n    li.ql-indent-6:not(.ql-direction-rtl) {\n      padding-left: 19.5em;\n    }\n    .ql-indent-6.ql-direction-rtl.ql-align-right {\n      padding-right: 18em;\n    }\n    li.ql-indent-6.ql-direction-rtl.ql-align-right {\n      padding-right: 19.5em;\n    }\n    .ql-indent-7:not(.ql-direction-rtl) {\n      padding-left: 21em;\n    }\n    li.ql-indent-7:not(.ql-direction-rtl) {\n      padding-left: 22.5em;\n    }\n    .ql-indent-7.ql-direction-rtl.ql-align-right {\n      padding-right: 21em;\n    }\n    li.ql-indent-7.ql-direction-rtl.ql-align-right {\n      padding-right: 22.5em;\n    }\n    .ql-indent-8:not(.ql-direction-rtl) {\n      padding-left: 24em;\n    }\n    li.ql-indent-8:not(.ql-direction-rtl) {\n      padding-left: 25.5em;\n    }\n    .ql-indent-8.ql-direction-rtl.ql-align-right {\n      padding-right: 24em;\n    }\n    li.ql-indent-8.ql-direction-rtl.ql-align-right {\n      padding-right: 25.5em;\n    }\n    .ql-indent-9:not(.ql-direction-rtl) {\n      padding-left: 27em;\n    }\n    li.ql-indent-9:not(.ql-direction-rtl) {\n      padding-left: 28.5em;\n    }\n    .ql-indent-9.ql-direction-rtl.ql-align-right {\n      padding-right: 27em;\n    }\n    li.ql-indent-9.ql-direction-rtl.ql-align-right {\n      padding-right: 28.5em;\n    }\n    img {\n      max-width: 100%;\n    }\n    .ql-direction-rtl {\n      direction: rtl;\n      text-align: inherit;\n    }\n    .ql-align-center {\n      text-align: center;\n    }\n    .ql-align-justify {\n      text-align: justify;\n    }\n    .ql-align-right {\n      text-align: right;\n    }\n    \n    .ql-blank,\n    &.ql-blank {\n      &::before {\n        opacity: 0.6;\n        content: attr(data-placeholder);\n        font-style: italic;\n        left: .5rem;\n        right: .5rem;\n        pointer-events: none;\n        position: absolute;\n      }\n    }\n    /** should be over write by theme style */\n    .ql-size-small {\n      font-size: 0.75em;\n    }\n    .ql-size-large {\n      font-size: 1.5em;\n    }\n    .ql-size-huge {\n      font-size: 2.5em;\n    }\n    blockquote {\n      border-left: 4px solid #ccc;\n      margin-bottom: 5px;\n      margin-top: 5px;\n      padding-left: 16px;\n    }\n    code {\n      background-color: #f0f0f0;\n      border-radius: 3px;\n    }\n    pre {\n      white-space: pre-wrap;\n    }\n    code {\n      font-size: 85%;\n      padding: 2px 4px;\n    }\n    exp {\n      cursor: pointer;\n      user-select: auto;\n      &:hover {\n        outline: 1px solid white;\n        background: #d8d8d8;\n      }\n    }\n    a {\n      &.invalid {\n        opacity: 0.5;\n        background: red;\n        outline: 1px solid white;\n      }\n    }\n  "}function ve(e){return`\n    &:hover {\n      ${e}\n    }\n  `}function ye(e){return`\n    &:hover,\n    &:focus {\n      ${e}\n    }\n  `}const we={up:"180deg",down:null,left:"90deg",right:"-90deg"};function $e(e){const t=we[e];return`\n    ${t&&`\n      transform: rotate(${t});\n    `}\n  `}function xe(e,t){return`\n    height: 0;\n    margin: ${t};\n    overflow: hidden;\n    border-top: 1px solid ${e};\n  `}function ke(e,o){const r=o&&o.colors?e?o.colors.success:o.colors.danger:e?"green":"red",i=e?"valid":"invalid";return t.css`
  &.is-${i} {
    border-color: ${r||(e?"green":"red")};
    ${!e&&`background: ${t.polished.rgba(r,.1)}`};
  }
  `}function ze(e){var o,r,i;return e&&t.css`
    color: ${e.color};
    background-color: ${e.bg};
    ${e.border&&t.css`
      border-width: ${e.border.width};
      ${e.border.width&&`border-style: ${null!==(r=null===(o=e.border)||void 0===o?void 0:o.type)&&void 0!==r?r:"solid"};`}
      border-color: ${e.border.color};
    `}
    border-radius: ${e.borderRadius};
    box-shadow: ${e.shadow};
    font-weight: ${e.bold?"bold":e.fontWeight};
    text-decoration: ${e.decoration||(i=e,i?i.underline&&i.strike?"underline line-through":i.underline?"underline":i.strike?"line-through":"none":"none")};
    font-style: ${e.italic?"italic":"normal"};
  `}const Re={left:"right",right:"left",top:"bottom",bottom:"top"};function Se(e,t){return!t||"left"!==e&&"right"!==e?Re[e]:e}function _e(e,t){return t?"left"===e?"right":"right"===e?"left":e:e}function Ce(e){var o;const r=(0,t.getAppStore)().getState().appContext.isRTL,i=null==e?void 0:e.border,n=null==e?void 0:e.background,l=(null!==(o=null==e?void 0:e.size)&&void 0!==o?o:12)+"px";return t.css`
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
    ${["left","right","top","bottom"].map((e=>{var o,s;return t.css`
      &[data-popper-placement^="${e}"] {
        .jimu-popper--arrow {
          ${Se(e,r)}: -${l};
          &::before,
          &::after {
            border-${Se(e,r)}-width: 0;
            border-${_e(e,r)}-color: ${null!==(o=null==i?void 0:i.color)&&void 0!==o?o:"inherit"};
            ${Se(e,r)}: 0;
          }
          &::after {
            border-${_e(e,r)}-color: ${null!=n?n:"inherit"};
            ${Se(e,r)}: ${null!==(s=null==i?void 0:i.width)&&void 0!==s?s:"1px"};
          }
        }
      }
    `}))}
  `}const je={white:"#fff",black:"#000",transparent:"transparent"},Oe={primary:"#076fe5",secondary:"#c5c5c5",light:"#f0f0f0",dark:"#050505",info:"#089bdc",success:"#09cf74",warning:"#ffea1d",danger:"#e1001b"},Te={primary:{100:"#e6f2ff",200:"#acd3ff",300:"#65adff",400:"#2c8fff",500:"#076fe5",600:"#005eca",700:"#004ca3",800:"#003c82",900:"#002958"},secondary:{100:"#f0f0f0",200:"#e3e3e3",300:"#d5d5d5",400:"#c5c5c5",500:"#b6b6b6",600:"#a8a8a8",700:"#989898",800:"#8b8b8b",900:"#828282"},light:{100:"#f0f0f0",200:"#e3e3e3",300:"#d5d5d5",400:"#c5c5c5",500:"#b6b6b6",600:"#a8a8a8",700:"#989898",800:"#8b8b8b",900:"#828282"},dark:{100:"#767676",200:"#6a6a6a",300:"#5e5e5e",400:"#525252",500:"#444444",600:"#363636",700:"#282828",800:"#181818",900:"#050505"},info:{100:"#e5f7ff",200:"#9fe2ff",300:"#60ceff",400:"#21bbff",500:"#089bdc",600:"#0077ac",700:"#005a82",800:"#003b56",900:"#002231"},success:{100:"#ebfff6",200:"#acffd9",300:"#56f8ad",400:"#16ed8a",500:"#09cf74",600:"#03b161",700:"#00904e",800:"#006838",900:"#004022"},warning:{100:"#fffdeb",200:"#fff9c3",300:"#fff592",400:"#fff05f",500:"#ffea1d",600:"#eed800",700:"#d4c000",800:"#b5a400",900:"#938500"},danger:{100:"#ffe9ec",200:"#ff94a1",300:"#ff5066",400:"#ff203c",500:"#e1001b",600:"#bf0017",700:"#9f0013",800:"#79000f",900:"#4a0009"}};function qe(e,t){return qe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},qe(e,t)}function Ie(e){return Ie=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Ie(e)}function Ee(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function Pe(e,t,o){return Pe=Ee()?Reflect.construct:function(e,t,o){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return o&&qe(i,o.prototype),i},Pe.apply(null,arguments)}function Ae(e){var t="function"==typeof Map?new Map:void 0;return Ae=function(e){if(null===e||(o=e,-1===Function.toString.call(o).indexOf("[native code]")))return e;var o;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return Pe(e,arguments,Ie(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),qe(r,e)},Ae(e)}var Me=function(e){var t,o;function r(t){return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+t+" for more information.")||this)}return o=e,(t=r).prototype=Object.create(o.prototype),t.prototype.constructor=t,qe(t,o),r}(Ae(Error));function Be(e){return Math.round(255*e)}function Fe(e,t,o){return Be(e)+","+Be(t)+","+Be(o)}function Le(e,t,o,r){if(void 0===r&&(r=Fe),0===t)return r(o,o,o);var i=(e%360+360)%360/60,n=(1-Math.abs(2*o-1))*t,l=n*(1-Math.abs(i%2-1)),s=0,a=0,d=0;i>=0&&i<1?(s=n,a=l):i>=1&&i<2?(s=l,a=n):i>=2&&i<3?(a=n,d=l):i>=3&&i<4?(a=l,d=n):i>=4&&i<5?(s=l,d=n):i>=5&&i<6&&(s=n,d=l);var c=o-n/2;return r(s+c,a+c,d+c)}var Ne={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},He=/^#[a-fA-F0-9]{6}$/,Xe=/^#[a-fA-F0-9]{8}$/,Ye=/^#[a-fA-F0-9]{3}$/,Ve=/^#[a-fA-F0-9]{4}$/,Ge=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,Ue=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,We=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,De=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function Ke(e){return function(e){var t,o=e.red/255,r=e.green/255,i=e.blue/255,n=Math.max(o,r,i),l=Math.min(o,r,i),s=(n+l)/2;if(n===l)return void 0!==e.alpha?{hue:0,saturation:0,lightness:s,alpha:e.alpha}:{hue:0,saturation:0,lightness:s};var a=n-l,d=s>.5?a/(2-n-l):a/(n+l);switch(n){case o:t=(r-i)/a+(r<i?6:0);break;case r:t=(i-o)/a+2;break;default:t=(o-r)/a+4}return t*=60,void 0!==e.alpha?{hue:t,saturation:d,lightness:s,alpha:e.alpha}:{hue:t,saturation:d,lightness:s}}(function(e){if("string"!=typeof e)throw new Me(3);var t=function(e){if("string"!=typeof e)return e;var t=e.toLowerCase();return Ne[t]?"#"+Ne[t]:e}(e);if(t.match(He))return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16)};if(t.match(Xe)){var o=parseFloat((parseInt(""+t[7]+t[8],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16),alpha:o}}if(t.match(Ye))return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16)};if(t.match(Ve)){var r=parseFloat((parseInt(""+t[4]+t[4],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16),alpha:r}}var i=Ge.exec(t);if(i)return{red:parseInt(""+i[1],10),green:parseInt(""+i[2],10),blue:parseInt(""+i[3],10)};var n=Ue.exec(t.substring(0,50));if(n)return{red:parseInt(""+n[1],10),green:parseInt(""+n[2],10),blue:parseInt(""+n[3],10),alpha:parseFloat(""+n[4])>1?parseFloat(""+n[4])/100:parseFloat(""+n[4])};var l=We.exec(t);if(l){var s="rgb("+Le(parseInt(""+l[1],10),parseInt(""+l[2],10)/100,parseInt(""+l[3],10)/100)+")",a=Ge.exec(s);if(!a)throw new Me(4,t,s);return{red:parseInt(""+a[1],10),green:parseInt(""+a[2],10),blue:parseInt(""+a[3],10)}}var d=De.exec(t.substring(0,50));if(d){var c="rgb("+Le(parseInt(""+d[1],10),parseInt(""+d[2],10)/100,parseInt(""+d[3],10)/100)+")",u=Ge.exec(c);if(!u)throw new Me(4,t,c);return{red:parseInt(""+u[1],10),green:parseInt(""+u[2],10),blue:parseInt(""+u[3],10),alpha:parseFloat(""+d[4])>1?parseFloat(""+d[4])/100:parseFloat(""+d[4])}}throw new Me(5)}(e))}class Ze{constructor(){this.shadeCount=9}getLightness(e){const t=Ke(e);return t&&t.lightness}getShadeLevel(e,t,o){return e>t[1]?1:e<t[0]?this.shadeCount:this.shadeCount-Math.ceil((e-t[0])/o)}getColorsByShade(e,o,r,i){const n={},l=parseInt(""+100*this.getLightness(e))/100;let s=(r[1]-l)/(o-1),a=(l-r[0])/(this.shadeCount-o);s=s>.1?.1:s,a=a>.1?.1:a;for(let r=1;r<=this.shadeCount;r++){n[100*(i?this.shadeCount-r+1:r)]=r===o?e:r<o?s<0?"#fff":t.polished.lighten((o-r)*s,e):a<0?"#000":t.polished.darken((r-o)*a,e)}return n}generate(e,t){try{const o={};let r;for(const i in e){const n=[.1,.9];"light"===i||"dark"===i?t&&"light"===i||!t&&"dark"===i?(n[1]=.49,r=this.shadeCount):(n[0]=.5,r=1):r=Math.ceil(this.shadeCount/2),o[i]=this.getColorsByShade(e[i].trim(),r,n,t)}return o}catch(e){console.error(e)}}revertPalette(e){const t={};return Object.keys(e).forEach((o=>{const r=Object.keys(e[o]).length;t[o]={};for(let i=Math.ceil(r/2);i>0;i--)t[o][100*i]=e[o][100*(r-i+1)],t[o][100*(r-i+1)]=e[o][100*i]})),t.dark=[t.light,t.light=t.dark][0],t}}function Qe(e,t){return`\n    .bg-${e} {\n      background-color: ${t} !important;\n    }\n    .border-${e} {\n      border-color: ${t} !important;\n    }\n    .text-${e} {\n      color: ${t} !important;\n    }\n  `}function Je(e,o,r,i){return t.css`
    @keyframes loading-keys-${i} {
      0%,
      80%,
      100% {
        opacity: .75;
        box-shadow: 0 0 ${r};
        height: ${o};
      }
      40% {
        opacity: 1;
        box-shadow: 0 -0.5rem ${r};
        height: ${t.polished.math(`1.25 * ${o}`)};
      }
    }
    text-indent: -9999em;
    margin: auto;
    position: absolute;
    right: calc(50% - ${t.polished.math(`${e} * 0.5`)});
    top: calc(50% - ${t.polished.math(`${o} * 0.5`)});
    animation-delay: 0.16s !important;
    &:before,
    &:after,
    & {
      background: ${r};
      animation: loading-keys-${i} 0.8s infinite ease-in-out;
      width: ${e};
      height: ${o};
    }
    &:before,
    &:after {
      position: absolute;
      top: 0;
      content: '';
    }
    &:before {
      left: -${t.polished.math(`1.47 * ${e}`)};
    }
    &:after {
      left: ${t.polished.math(`1.47 * ${e}`)};
      animation-delay: 0.32s;
    }
  `}const et=e=>t.css`
    /* primary loading marker */
    .jimu-primary-loading {
      ${Je("0.85rem","2rem",e.colors.palette.primary[500],"primary")};
    }

    /* secondary loading marker */
    .jimu-secondary-loading {
      ${Je("0.51rem","1.2rem",t.polished.rgba(e.colors.palette.light[800],.5),"small")};
    }
  `;function tt(e){return t.css`
    ${ze(null==e?void 0:e.default)};
    &:hover {
      ${ze(null==e?void 0:e.hover)};
      color: ${null==e?void 0:e.hover.color} !important;
    }
    &:disabled,
    &.esri-disabled {
      ${ze(null==e?void 0:e.disabled)};
    }
    &.active {
      ${ze(null==e?void 0:e.active)};
    }
    &:focus {
      ${ze(null==e?void 0:e.focus)};
      outline: none;
    }
  `}const ot=e=>{var o,r,i;const n=e.theme;if(!n||!n.colors)return null;const l=n.focusedStyles,s=`${l.width} solid ${l.color}`,a=`0 0px 0px 2px ${l.color}`;return t.css`
    ${t.css`
    @import url('${t.urlUtils.getFixedRootPath()}jimu-theme/base/assets/fonts/avenir/fonts.css');
  `}
    ${(e=>e&&e.colors?t.css`
  :root {
    ${Object.keys(t.ThemeCommonColorKeys).map((o=>e.colors[t.ThemeCommonColorKeys[o]]?`--${t.ThemeCommonColorKeys[o]}: ${e.colors[t.ThemeCommonColorKeys[o]]};`:""))}
    ${Object.keys(t.ThemeThemeColorKeys).map((o=>e.colors[t.ThemeThemeColorKeys[o]]?`--${t.ThemeThemeColorKeys[o]}: ${e.colors[t.ThemeThemeColorKeys[o]]};`:""))}
    ${e.colors.palette?Object.keys(e.colors.palette).map((t=>t?Object.keys(e.colors.palette[t]).map((o=>`--${t}-${o}: ${e.colors.palette[t][o]};`)):"")):""}
    ${e.colors.orgSharedColors?Object.keys(e.colors.orgSharedColors).map((t=>t?Object.keys(e.colors.orgSharedColors[t]).map((o=>`--org-${t}-${o}: ${e.colors.orgSharedColors[t][o]};`)):"")):""}
  }`:"")(n)}
    ${(e=>{var o,r,i,n,l,s,a,d,c,u,h,p,g,m,b,f,v,y,w,$,x,k,z,R,S,_,C,j,O,T,q,I,E,P,A,M,B,F,L,N,H,X,Y,V,G,U,W,D,K,Z,Q,J,ee,te,oe,re,ie,ne,le,se,ae,de,ce,ue,he,pe,ge,me,be,fe,ve,ye,we,$e,xe,ke,Re,Se,_e,Ce,je;const Oe=null==e?void 0:e.arcgis,Te=null===(o=null==Oe?void 0:Oe.components)||void 0===o?void 0:o.button,{default:qe,secondary:Ie,tertiary:Ee}=null!==(r=null==Te?void 0:Te.variants)&&void 0!==r?r:{},Pe=null===(i=null==Oe?void 0:Oe.components)||void 0===i?void 0:i.input,Ae=null===(n=null==Oe?void 0:Oe.components)||void 0===n?void 0:n.menu,Me=null===(l=null==Oe?void 0:Oe.components)||void 0===l?void 0:l.panel,Be=null===(s=null==Oe?void 0:Oe.components)||void 0===s?void 0:s.table,Fe=null===(a=null==Oe?void 0:Oe.components)||void 0===a?void 0:a.updatingIndicator,Le=null===(d=null==Oe?void 0:Oe.widgets)||void 0===d?void 0:d.layerlist,Ne=null===(c=null==Oe?void 0:Oe.widgets)||void 0===c?void 0:c.legend,He=null===(u=null==Oe?void 0:Oe.widgets)||void 0===u?void 0:u.basemapGallery,Xe=null===(h=null==Oe?void 0:Oe.widgets)||void 0===h?void 0:h.measure;return t.css` body {
    .esri-button,
    .esri-widget--button,
    .esri-popup__button,
    .esri-sketch__button {
      ${tt(qe)}
    }
    .esri-disabled .esri-widget--button {
      > * {
        color: ${null===(p=null==qe?void 0:qe.disabled)||void 0===p?void 0:p.color};
      }
    }
    .esri-button--secondary {
      ${tt(Ie)}
    }
    .esri-input,
    .esri-select {
      ${ze(Pe)};
      &:focus {
        border-color: ${null===(g=null==Pe?void 0:Pe.focus)||void 0===g?void 0:g.borderColor};
        outline: none;
      }
      &::placeholder {
        color: ${null==Pe?void 0:Pe.placeHolderColor};
      }
    }
    .esri-select {
    }
    .esri-menu {
      ${ze(Ae)}
      font-size: inherit;
      line-height: 1;
    }
    .esri-menu__list-item {
      &,
      &:focus {
        ${ze(null===(m=null==Ae?void 0:Ae.item)||void 0===m?void 0:m.default)};
      }
      &:hover {
        ${ze(null===(b=null==Ae?void 0:Ae.item)||void 0===b?void 0:b.hover)};
      }
      &:active {
        ${ze(null===(f=null==Ae?void 0:Ae.item)||void 0===f?void 0:f.active)};
      }
    }
    .esri-menu__list-item--active,
    .esri-menu__list-item--active:hover,
    .esri-menu__list-item--active:focus {
      ${ze(null===(v=null==Ae?void 0:Ae.item)||void 0===v?void 0:v.active)};
    }

    /*
    * ArcGIS API 4.x Widgets:
    */

    /* General */

    /* Heading */
    .esri-widget__heading {
      color: ${null===(w=null===(y=null==e?void 0:e.typography)||void 0===y?void 0:y.colors)||void 0===w?void 0:w.title};
    }

    /* Table */
    .esri-widget__table {
      ${ze(null==Be?void 0:Be.root)}
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
          ${ze(qe.disabled)};
          + .esri-navigation-toggle__button {
            margin-top: -${null!==(k=null===(x=null===($=qe.default)||void 0===$?void 0:$.border)||void 0===x?void 0:x.width)&&void 0!==k?k:"0"};
          }
        }
      }
    }
    .esri-navigation-toggle__button {
      &:before {
        border-right-color: ${null===(z=null==e?void 0:e.colors)||void 0===z?void 0:z.primary};
      }
      + .esri-navigation-toggle__button {
        margin-top: -${null!==(_=null===(S=null===(R=qe.default)||void 0===R?void 0:R.border)||void 0===S?void 0:S.width)&&void 0!==_?_:"0"};
      }
    }

    /* zoom */
    .esri-zoom .esri-widget--button:last-child {
      border-top: 0;
    }
    /* Search */
    .esri-search {
      /* padding: ${null===(C=null==e?void 0:e.sizes)||void 0===C?void 0:C[3]}; */
      .esri-search__container {
        > .esri-widget--button {
          background-color: ${null==Pe?void 0:Pe.bg};
          ${(null==Pe?void 0:Pe.border)&&`border: ${null===(j=null==Pe?void 0:Pe.border)||void 0===j?void 0:j.color} solid ${null===(O=null==Pe?void 0:Pe.border)||void 0===O?void 0:O.width};`}
        }
      }
      .esri-search__input-container {
        margin-left: -1px;
        margin-right: -1px;
        .esri-search__input {
          text-overflow: ellipsis;
          padding-right: 32px; /* the width of the clear button */
          ${(null==Pe?void 0:Pe.focus)&&`&:focus {\n            border: ${null===(T=null==Pe?void 0:Pe.focus)||void 0===T?void 0:T.borderColor} solid ${null!==(I=null===(q=null==Pe?void 0:Pe.border)||void 0===q?void 0:q.width)&&void 0!==I?I:"1px"};\n          }`}
        }
        .esri-search__clear-button {
          position: absolute;
          right: 32px;
          top: ${null!==(P=null===(E=null==Pe?void 0:Pe.border)||void 0===E?void 0:E.width)&&void 0!==P?P:0};
          height: calc(32px - ${null!==(M=null===(A=null==Pe?void 0:Pe.border)||void 0===A?void 0:A.width)&&void 0!==M?M:0} * 2);
          z-index: 1;
          background-color: ${null==Pe?void 0:Pe.bg};
        }
      }
      .esri-search--multiple-sources {
        .esri-search__sources-button {
          z-index: 1;
          border-right: 0;
          margin-right: -${null===(B=null==Pe?void 0:Pe.border)||void 0===B?void 0:B.width};
        }
        .esri-search__input {
          border-left: ${null===(F=null==Pe?void 0:Pe.border)||void 0===F?void 0:F.width} solid transparent;
          border-right: ${null===(L=null==Pe?void 0:Pe.border)||void 0===L?void 0:L.width} solid transparent;
          &:focus {
            border-color: ${null===(N=null==Pe?void 0:Pe.focus)||void 0===N?void 0:N.borderColor};
          }
        }
      }
    }

    /* Popup */
    .esri-popup__main-container {
      ${ze(Me)}
      .esri-widget {
        font-family: inherit;
        background-color: transparent;
        color: inherit;
      }
      .esri-widget--panel {
        ${ze(Me)}
      }
    }
    .esri-popup__pointer-direction {
      background-color: ${null==Me?void 0:Me.bg};
    }
    .esri-popup__navigation {
      background: transparent;
    }

    /* Layer List */
    .esri-layer-list {
      ${ze(null==Le?void 0:Le.root)}
    }
    .esri-layer-list__item {
      ${ze(null===(H=null==Le?void 0:Le.item)||void 0===H?void 0:H.default)}
    }
    .esri-layer-list__item-container {
      padding-top: 0.375rem;
      padding-bottom: 0.375rem;
    }
    .esri-layer-list__item--invisible-at-scale .esri-layer-list__item-title {
      color: ${null===(Y=null===(X=null==Le?void 0:Le.item)||void 0===X?void 0:X.disabled)||void 0===Y?void 0:Y.color}
    }
    .esri-layer-list__item-actions {
      ${ze(null===(V=null==Le?void 0:Le.actionsList)||void 0===V?void 0:V.root)}
      margin: 0;
    }
    .esri-layer-list__item-action {
      ${ze(null===(U=null===(G=null==Le?void 0:Le.actionsList)||void 0===G?void 0:G.item)||void 0===U?void 0:U.default)}
      &:hover {
        ${ze(null===(D=null===(W=null==Le?void 0:Le.actionsList)||void 0===W?void 0:W.item)||void 0===D?void 0:D.hover)}
      }
    }
    .esri-layer-list__item-actions-list {
      border-color: ${null===(Z=null===(K=null==Le?void 0:Le.actionsList)||void 0===K?void 0:K.separator)||void 0===Z?void 0:Z.color};
      border-width: ${null===(J=null===(Q=null==Le?void 0:Le.actionsList)||void 0===Q?void 0:Q.separator)||void 0===J?void 0:J.width};
      padding: 0;
    }
    .esri-layer-list__item-actions-menu {
      padding: 0.25rem;
      margin-top: -0.25rem;
    }
    .esri-layer-list__item-toggle,
    .esri-layer-list__child-toggle,
    .esri-layer-list__item-actions-menu-item {
      ${ze(null===(ee=null==Le?void 0:Le.icon)||void 0===ee?void 0:ee.default)}
      &:hover {
        ${ze(null===(te=null==Le?void 0:Le.icon)||void 0===te?void 0:te.hover)}
      }
    }
    .esri-layer-list__item-actions-menu-item--active {
      &, &:hover {
        ${ze(null===(re=null===(oe=null==Le?void 0:Le.actionsList)||void 0===oe?void 0:oe.item)||void 0===re?void 0:re.active)}
      }
    }

    /* Legend */
    .esri-legend {
      ${ze(null===(ne=null===(ie=null==Ne?void 0:Ne.variants)||void 0===ie?void 0:ie.default)||void 0===ne?void 0:ne.root)}
    }
    .esri-widget__heading {
      color: inherit;
    }
    .esri-legend--card {
      ${ze(null===(se=null===(le=null==Ne?void 0:Ne.variants)||void 0===le?void 0:le.card)||void 0===se?void 0:se.root)}
    }
    .esri-legend--card__section {
      width: 100%;
    }
    .esri-legend--card__carousel-indicator-container {
      ${ze(null===(de=null===(ae=null==Ne?void 0:Ne.variants)||void 0===ae?void 0:ae.card)||void 0===de?void 0:de.carousel)}
    }
    .esri-legend--card__service {
      width: 100%;
    }
    .esri-legend--card__service-caption-container {
      ${ze(null===(ue=null===(ce=null==Ne?void 0:Ne.variants)||void 0===ce?void 0:ce.card)||void 0===ue?void 0:ue.caption)}
    }

    /* Basemap Gallery */
    .esri-basemap-gallery {
      ${ze(null==He?void 0:He.root)}
    }
    .esri-basemap-gallery__item {
      ${ze(null===(he=null==He?void 0:He.item)||void 0===he?void 0:he.default)}
      &:hover {
        ${ze(null===(pe=null==He?void 0:He.item)||void 0===pe?void 0:pe.hover)}
        border-right-color: transparent;
      }
      &:focus {
        ${ze(null===(ge=null==He?void 0:He.item)||void 0===ge?void 0:ge.hover)}
        border-right-color: transparent;
      }
    }
    .esri-basemap-gallery__item--selected,
    .esri-basemap-gallery__item.esri-basemap-gallery__item--selected:hover,
    .esri-basemap-gallery__item.esri-basemap-gallery__item--selected:focus {
      ${ze(null===(me=null==He?void 0:He.item)||void 0===me?void 0:me.active)}
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
      ${ze(null==He?void 0:He.root)}
    }

    .esri-direct-line-measurement-2d,
    .esri-area-measurement-2d,
    .esri-direct-line-measurement-3d,
    .esri-area-measurement-3d {
      ${ze(null==Xe?void 0:Xe.root)}
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
      --calcite-ui-foreground-1: ${null===(be=null==Ee?void 0:Ee.default)||void 0===be?void 0:be.bg};
      --calcite-ui-text-3: ${null===(fe=null==Ee?void 0:Ee.default)||void 0===fe?void 0:fe.color};
      /* hover */
      --calcite-ui-foreground-2: ${null==Ee?void 0:Ee.hover.bg};
      /* --calcite-ui-text-1: ${null==Ee?void 0:Ee.hover.color};*/  /* in Calcite, :hover.color === :focus.color */
      /* focus */
      --calcite-ui-foreground-3: ${null==Ee?void 0:Ee.active.bg};
      --calcite-ui-text-1: ${null==Ee?void 0:Ee.active.color};
      /* a11y */
      --calcite-ui-brand: ${null==Ee?void 0:Ee.active.bg};

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
            ${ze(null==qe?void 0:qe.active)};
          }
        }
        &:focus {
          color: ${null===(ve=null==qe?void 0:qe.default)||void 0===ve?void 0:ve.color};
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

    /* 3D Toolbox */
    .esri-widget.esri-daylight,
    .esri-widget.esri-weather,
    .esri-widget.esri-shadow-cast,
    .esri-widget.esri-line-of-sight {
      background-color: ${e.colors.white};
      /* usually */
      --calcite-ui-brand: ${e.colors.palette.primary[500]};
      --calcite-ui-text-inverse: ${null===(ye=null==Ee?void 0:Ee.default)||void 0===ye?void 0:ye.color};
      /* hover */
      --calcite-ui-brand-hover: ${e.colors.palette.primary[600]};

      /* slider */
      .esri-slider {
        background-color: ${e.colors.white};

        .esri-slider__thumb {
          background-color: ${e.colors.palette.primary[500]};
          border-color: ${e.colors.palette.primary[500]};

          &:hover {
            border-color: ${e.colors.palette.primary[600]} !important;
            background-color: ${e.colors.palette.primary[500]} !important;
          }
        }

        .esri-slider__anchor:focus .esri-slider__thumb {
          outline: ${e.colors.palette.primary[600]};
        }

        .esri-slider__segment--interactive,
        .esri-slider__segment-1 {
          background: ${e.colors.palette.primary[500]};
        }
      }
    }
    /* Daylight */
    .esri-widget.esri-daylight {
      --calcite-ui-icon-color: ${e.colors.white};

      .esri-daylight__container__tick {
        border-color: transparent !important
      }
    }
    /* Weather */
    /* Shadow cast */
    .esri-widget.esri-weather,
    .esri-widget.esri-shadow-cast {
      --calcite-ui-text-inverse: ${e.colors.white};
    }
    /* Line of sight */
    .esri-widget.esri-line-of-sight {
      .esri-line-of-sight__actions {
        .esri-line-of-sight__new-analysis-button {
          border-color: ${e.colors.palette.primary[500]};
        }
      }
    }

    /*
     * ExB's own component
     */

    .exbmap-ui-tool-shell {
      box-shadow: ${null==Oe?void 0:Oe.boxShadow};
    }
    .exbmap-ui-tool,
    .exbmap-ui-tool-panel {
      pointer-events: auto;
      position: relative;
      .exbmap-ui-tool-icon-selected {
        &,
        :hover {
          color: ${null===(we=null==qe?void 0:qe.active)||void 0===we?void 0:we.color};
          background-color: ${null===($e=null==qe?void 0:qe.active)||void 0===$e?void 0:$e.bg};
        }
      }
    }
    .exbmap-ui-popper {
      .exbmap-ui-expand-content {
        color: ${null==Me?void 0:Me.color};
        background:  ${null==Me?void 0:Me.bg};
        transition: opacity 250ms ease-in-out, margin 250ms ease-in-out;
        min-height: 10px;
        /* min-width: 260px; */
        .exbmap-ui-expand-content-header {
          padding: ${null==e?void 0:e.sizes[2]} ${null==e?void 0:e.sizes[3]} ${null==e?void 0:e.sizes[2]};
        }
        .panel-title {
          font-weight: ${null===(ke=null===(xe=null==e?void 0:e.typography)||void 0===xe?void 0:xe.weights)||void 0===ke?void 0:ke.medium};
        }
        .panel-icon { /* <-- Need To use the tertiary button */
          cursor: pointer;
          &:hover {
            color: ${null===(Re=null==e?void 0:e.colors)||void 0===Re?void 0:Re.primary};
          }
        }
        .esri-search {
          padding: 0 ${null==e?void 0:e.sizes[3]} ${null==e?void 0:e.sizes[3]};
        }

        .esri-widget {
          font-family: inherit;
          background-color: transparent;
          color: inherit;
        }
        .esri-widget--panel {
          ${ze(Me)}
        }
      }

      [data-popper-placement^='bottom'] {
        margin-top: ${null===(Se=null==e?void 0:e.gutters)||void 0===Se?void 0:Se[3]} !important;
      }

      [data-popper-placement^='left'] {
        margin-right: ${null===(_e=null==e?void 0:e.gutters)||void 0===_e?void 0:_e[3]} !important;
      }

      [data-popper-placement^='right'] {
        margin-left: ${null===(Ce=null==e?void 0:e.gutters)||void 0===Ce?void 0:Ce[3]} !important;
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
  }`})(n)}

    html {
      font-size: ${n.typography.fontSizeRoot};
      -webkit-text-size-adjust: 100%;
      -moz-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }

    html.is-in-builder {
      overflow: hidden;
    }

    body {
      font-family: ${n.body.fontFamily}, "Helvetica Neue", sans-serif;
      font-size: ${n.body.fontSize};
      font-weight: ${n.body.fontWeight};
      line-height: ${n.body.lineHeight};
      color: ${n.body.color};
      background-color: ${n.body.bg};
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
          outline: ${s};
          outline-offset: ${l.offset};
        }

        .jimu-outline-inside {
          &:focus,
          &:focus-visible {
            outline-offset: -${l.offset};
          }
        }

        .jimu-dropdown-item:focus{
          color: ${n.components.dropdown.link.hoverColor};
          outline: 0;
          text-decoration: none;
          background:${n.components.dropdown.link.hoverBg};

          svg.jimu-icon.jimu-icon-auto-color{
            color: ${n.components.dropdown.link.hoverColor} !important;
          }
        }

        /* Custom interactive elements, like radio, checkbox, switch*/
        .${t.INTERACTIVE_CLASS}{
          &:focus-within{
            box-shadow: ${a} !important;
          }
        }
      }
    }

    ${/Avenir/gim.test(n.body.fontFamily)&&t.css`
      [lang="vi"] body {
        font-family: "SST Vietnamese", 'Lucida Grande', Arial, Verdana, Geneva, sans-serif;
      }
    `}

    p {}

    a {
      color: ${n.link.color};
      text-decoration: ${n.link.decoration};
      ${ve(`\n        color: ${n.link.hover.color};\n        text-decoration: ${n.link.hover.decoration};\n      `)}
    }

    label {}

    /* get typography styles */
    ${(e=>{var o,r,i,n,l,s,a,d,c,u,h,p;const g=e&&e.typography;return t.css`
    ${Object.keys(g.colors).map((e=>`\n          .text-${e}${"disabled"===e?", .text-muted":""} {\n            color: ${g.colors[e]} !important;\n          }\n        `))}
    ${Object.keys(g.variants).map((e=>{const t=g.variants[e];let o=`.font-${e}`;return 0===e.indexOf("display")&&(o=`h${e.split("display")[1]}, .font-h${e.split("display")[1]}`),`\n        ${o} {\n          font-family: ${t.fontFamily};\n          font-weight: ${t.fontWeight};\n          font-size: ${t.fontSize};\n          line-height: ${t.lineHeight};\n          color: ${t.color};\n        }\n      `}))}
    /** setting titles */
    .setting-text-level-0 {
      font-size: 14px !important;
      color: ${null===(r=null===(o=e.colors)||void 0===o?void 0:o.palette)||void 0===r?void 0:r.dark[800]} !important;
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
      color: ${null===(h=null===(u=e.colors)||void 0===u?void 0:u.palette)||void 0===h?void 0:h.dark[400]} !important;
      font-weight: ${null===(p=e.typography)||void 0===p?void 0:p.weights.bold} !important;
    }
    
    `})(n)}

    /* get surface utility classes */
    ${(e=>{const o=e&&e.surfaces;return t.css`
    ${Object.keys(o).map((e=>{var t,r;return`\n      .surface-${e} {\n        ${o[e].bg?`background-color: ${o[e].bg} !important;`:""}\n        ${o[e].border?`border: ${o[e].border.color} ${null!==(t=o[e].border.style)&&void 0!==t?t:"solid"} ${null!==(r=o[e].border.width)&&void 0!==r?r:"1px"} !important;`:""}\n        ${o[e].shadow?`box-shadow: ${o[e].shadow} !important;`:""}\n      }\n    `}))}
  `})(n)}

    /* get color utility classes */
    ${(e=>{var o,r,i,n,l;const s=null!==(o=e.colors)&&void 0!==o?o:{};let a={},d={},c={};const u=s.palette.light,h=s.palette.dark,p=null!==(i=null===(r=null==e?void 0:e.border)||void 0===r?void 0:r.width)&&void 0!==i?i:"1px",g=null!==(l=null===(n=null==e?void 0:e.border)||void 0===n?void 0:n.color)&&void 0!==l?l:"#ccc";return s?(["white","black","transparent"].forEach((e=>{a[e]=s[e]})),["primary","secondary","success","info","warning","danger","light","dark"].forEach((e=>{d[e]=s[e]}))):(a=je,d=Oe),c=Object.assign(Object.assign({},d),a),t.css`

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

    ${Object.keys(u).map((e=>Qe(`light-${e}`,u[e])))}
    ${Object.keys(h).map((e=>Qe(`dark-${e}`,h[e])))}
    ${Object.keys(c).map((e=>Qe(e,c[e])))}
  `})(n)}

    /* get shadow utility classes */
    ${(e=>{const o=e&&e.boxShadows;return t.css`
    ${Object.keys(o).map((e=>`\n          .${"default"===e?"shadow":`shadow-${e}`} { box-shadow: ${o[e]} !important; }\n        `))}
  `})(n)}

    /* get loading utility classes */
    ${et(n)}

    /* get spacing utility classes */
    ${(e=>{const o=e&&e.sizes;let r,i;return function(e){e.TOP="t",e.BOTTOM="b",e.LEFT="l",e.RIGHT="r",e.HORIZONTAL="x",e.VERTICAL="y",e.ALL=""}(r||(r={})),function(e){e.MARGIN="m",e.PADDING="p"}(i||(i={})),t.css`
    ${Object.keys(o).map((e=>Object.keys(r).map((t=>Object.keys(i).map((n=>{const l=`${i[n]}${r[t]}-${e}`,s=n.toLowerCase(),a=o[e];return`\n              .${l} {\n                ${"HORIZONTAL"===t?`\n                    ${s}-left: ${a} !important;\n                    ${s}-right: ${a} !important;\n                  `:"VERTICAL"===t?`\n                    ${s}-top: ${a} !important;\n                    ${s}-bottom: ${a} !important;\n                  `:`${s}${"ALL"===t?"":`-${t.toLowerCase()}`}: ${a} !important; `}\n              }\n            `}))))))}

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
  `})(n)}

    /* get rounded(radius) utility classes */
    ${(e=>{const o=e&&e.borderRadiuses;return t.css`
    ${Object.keys(o).map((e=>`\n          .${"default"===e?"rounded":`rounded-${e}`} { border-radius: ${o[e]} !important; }\n        `))}
  `})(n)}

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
      font-size: ${n.components.close.fontSize};
      font-weight: ${n.components.close.fontWeight};
      line-height: 1;
      color: ${n.components.close.color};
      text-shadow: ${n.components.close.textShadow};
      opacity: .5;

      &:not(:disabled):not(.disabled) {
        ${ye(`\n          color: ${n.components.close.color};\n          text-decoration: none;\n          opacity: .75;\n        `)}
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
      background-color: ${n.components.modal.backdrop.bg};

      &.fade { opacity: 0; }
      &.show { opacity: ${n.components.modal.backdrop.opacity}; }
    }

    @media (min-width: ${t.CONSTANTS.BREAK_POINTS[0]}px) {
      .modal-sm {
        max-width: ${n.components.modal.sizes.sm};
      }
    }

    @media (min-width: ${t.CONSTANTS.BREAK_POINTS[1]}px) {
      .modal-lg {
        max-width: ${n.components.modal.sizes.lg};
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

      @media (min-width: ${t.CONSTANTS.BREAK_POINTS[0]}px) {
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
      border: 1px solid ${null===(o=n.colors)||void 0===o?void 0:o.primary} !important;
      box-shadow: 0 0 0 1px ${null===(r=n.colors)||void 0===r?void 0:r.primary} !important;
      position: relative;
      ::after {
        content: '';
        display: block;
        border-top: 0.5rem solid ${null===(i=n.colors)||void 0===i?void 0:i.primary};
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
      background: ${n.colors.palette.light[200]};
    }

    ::-webkit-scrollbar-thumb {
      background: ${n.colors.palette.light[600]};
    }

    ::-webkit-scrollbar-thumb:hover {
      background: ${n.colors.palette.light[900]};
    }
  `},rt=t.React.createContext(!1);rt.displayName="UseTheme2Context";const it=t.React.createContext(null);it.displayName="Theme2Context";const nt={},lt=e=>{const{theme:o=nt,theme2:r,children:i}=e;return t.React.createElement(be,{theme:o},t.React.createElement(it.Provider,{value:r},t.React.createElement(rt.Provider,{value:!1},i)))},st=()=>{const e=t.React.useContext(rt);return!e||window.jimuConfig.isBuilder||window.jimuConfig.isInBuilder||console.warn("`Theme2` is only allowed in builder or app-in-builder."),e},at=()=>{const e=st();return t.React.useContext(e?it:pe)},dt=()=>{const e=st();return t.React.useContext(e?pe:it)},ct={},ut={},ht=(e,t)=>{ct[e]?console.warn(`The style of ${e} has been registered.`):ct[e]=t},pt=(e,t)=>{(e=>!!ut[e])(e)?console.warn(`The styles entry ${e} has been registered.`):(ut[e]=!0,Object.entries(t).forEach((([e,t])=>ht(e,t))))},gt=pt,mt=(e,t)=>(!(e=>!!ct[e])(e)&&t&&console.warn(`The style of ${e} has't been registered.`),ct[e]),bt=e=>{const t=ot,o=Jt("Global");return ft(null==t?void 0:t({theme:e}),null==o?void 0:o({theme:e}))};function ft(...e){return(0,t.css)(e)}var vt=r(679);function yt(e,o,r){var i,n;const l=o||(null!==(n=null!==(i=e.displayName)&&void 0!==i?i:e.name)&&void 0!==n?n:"");if(!l)return console.error("A component name is required."),e;const s=ge(e,r)((e=>{const o=st(),r=mt(l,!o);if(!r&&!o)return null;let i=e;if(o){i={};for(const t in e)i[t]=e[t];i.theme=t.React.useContext(it)}const n=o?eo(l):Jt(l);return ft(null==r?void 0:r(i),null==n?void 0:n(i))}));return s.displayName=l,s}function wt(e,o,r){var i,n;const l=o||(null!==(n=null!==(i=e.displayName)&&void 0!==i?i:e.name)&&void 0!==n?n:"Component"),s=yt(e,o,r),a=t.React.forwardRef((function(e,o){return t.React.createElement(rt.Provider,{value:!0},t.React.createElement(s,Object.assign({},e,{ref:o})))}));return a.displayName=`Theme2Styled(${l})`,vt(a,e)}const $t=wt,xt=e=>{var o,r;const{module:i,isRTL:n=!1}=e,l=null==i?void 0:i.uri,s=null===(r=null===(o=null==i?void 0:i.manifest)||void 0===o?void 0:o.styleFiles)||void 0===r?void 0:r.css,a=null==i?void 0:i.theme,d=t.React.useMemo((()=>{const e=`${t.urlUtils.getFixedRootPath()}jimu-theme`;return n?`${e}/base/base-rtl.css`:`${e}/base/base.css`}),[n]),c=t.React.useMemo((()=>{if(s)return n?`${t.urlUtils.getFixedRootPath()}${l}/style-rtl.css`:`${t.urlUtils.getFixedRootPath()}${l}/style.css`}),[s,n,l]),u=t.React.useMemo((()=>{if(a)return bt(a)}),[a]);return t.React.useEffect((()=>{let e=document.getElementById("jimu-base-style");e||(e=document.createElement("link"),e.setAttribute("id","jimu-base-style"),e.setAttribute("rel","stylesheet"),e.setAttribute("type","text/css"),document.head.prepend(e)),e.setAttribute("href",d)}),[d]),t.React.createElement(t.React.Fragment,null,c&&t.React.createElement("link",{type:"text/css",rel:"stylesheet",href:c}),u&&t.React.createElement(me,{styles:u}))},kt='"Avenir Next", "Helvetica Neue", sans-serif, "PingFang SC", "Microsoft YaHei"',zt="100%",Rt="0.8125rem",St=13,_t={extraLight:"200",light:"300",medium:"400",bold:"500",extraBold:"600"},Ct={medium:1.5,sm:1.3,lg:1.7},jt="1rem";function Ot(e="1rem"){return{0:0,1:t.polished.math(`${e} * 0.25`),2:t.polished.math(`${e} * 0.5`),3:e,4:t.polished.math(`${e} * 1.25`),5:t.polished.math(`${e} * 1.5`)}}Ot(jt),Ot(jt);const Tt={none:"none",sm:`0 0 6px 0 ${t.polished.rgba("black",.15)}`,default:`0 0 10px 1px ${t.polished.rgba("black",.2)}`,lg:`0 0 20px 2px ${t.polished.rgba("black",.2)}`},qt={none:"0rem",sm:"0rem",default:"0.125rem",lg:"0.25rem",circle:"50%",pill:"50rem"};const It=e=>{const t=null!=e?e:{},{black:o,white:r,transparent:i,palette:n}=t;return function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(o[r[i]]=e[r[i]])}return o}(t,["black","white","transparent","palette"])};class Et{constructor(){this.darkTheme=!1,this.colors=(0,t.Immutable)({}),this.colorationVariants=(0,t.Immutable)({}),this.typography=(0,t.Immutable)({}),this.sizes=(0,t.Immutable)({}),this.gutters=(0,t.Immutable)({}),this.border=(0,t.Immutable)({}),this.borderRadiuses=(0,t.Immutable)({}),this.boxShadows=(0,t.Immutable)({}),this.focusedStyles=(0,t.Immutable)({}),this.surfaces=(0,t.Immutable)({}),this.body=(0,t.Immutable)({}),this.header=(0,t.Immutable)({}),this.footer=(0,t.Immutable)({}),this.link=(0,t.Immutable)({})}generate(o,r,i){var n,l,s,a,d,c,u,h,p,g,m,b,f,v,y,w,$,x,k,z,R,S,_,C,j;const O=o.merge(null!=r?r:{},{deep:!0});this.darkTheme=!!O.darkTheme,this.coloration=null!==(n=O.coloration)&&void 0!==n?n:"default",this.colors=((e,o)=>{var r,i;const n=!!(null==e?void 0:e.darkTheme),l=null!==(i=null===(r=null==e?void 0:e.colors)||void 0===r?void 0:r.palette)&&void 0!==i?i:(0,t.Immutable)({}),s=It(null==e?void 0:e.colors),a=It(null==o?void 0:o.colors),d=Object.assign({},je),c=Object.assign({},Oe),u=Object.assign({},Te),h=new Ze;n&&([d.black,d.white]=[d.white,d.black],[c.dark,c.light]=[c.light,c.dark]);for(const e in Oe)s&&Object.prototype.hasOwnProperty.call(s,e)&&t.lodash.setValue(c,e,s[e]);const p={};s&&Object.keys(s).forEach((e=>{l[e]||(p[e]=s[e])}));const g=h.generate(Object.assign(Object.assign({},p),a),n);return(0,t.Immutable)(Object.assign(Object.assign(Object.assign({},d),c),{palette:Object.assign(Object.assign({},n?h.revertPalette(u):u),l?l.merge(g,{deep:!0}).asMutable():g)}))})(O,r),this.colors=this.colors.merge({orgSharedColors:null==i?void 0:i.without("fonts","logo"),getPalette:()=>this.colors.palette,getOrgShareColors:()=>null==i?void 0:i.without("fonts","logo")},{deep:!0}),this.colorationVariants=(0,t.Immutable)({minimal:{header:{bg:this.colors.light,color:this.colors.dark},body:{bg:this.colors.white,color:this.colors.dark},footer:{bg:this.colors.white,color:this.colors.dark}},default:{header:{bg:this.colors.palette.primary[700],color:this.colors.light},body:{bg:this.colors.palette.light[100],color:this.colors.dark},footer:{bg:this.colors.palette.light[100],color:this.colors.dark}}}).merge(null!==(l=null==O?void 0:O.colorationVariants)&&void 0!==l?l:{}),this.typography=((o,r)=>{var i;const n=null!==(i=null==o?void 0:o.typography)&&void 0!==i?i:(0,t.Immutable)({}),{fontSizeBaseInPx:l}=e,s=n.fontFamilyBase||kt,a=n.fontSizeRoot||zt,d=n.fontSizeBase||Rt,c={fontFamilyBase:s,fontSizeRoot:a,fontSizeBase:d,sizes:Object.assign({display1:t.polished.math(`${d} * 30 / ${l}`),display2:t.polished.math(`${d} * 24 / ${l}`),display3:t.polished.math(`${d} * 20 / ${l}`),display4:t.polished.math(`${d} * 18 / ${l}`),display5:t.polished.math(`${d} * 16 / ${l}`),display6:t.polished.math(`${d} * 14 / ${l}`),body1:t.polished.math(`${d} * 14 / ${l}`),body2:d,caption1:t.polished.math(`${d} * 12 / ${l}`),caption2:t.polished.math(`${d} * 10 / ${l}`)},n.sizes),weights:Object.assign(Object.assign({},_t),n.weights),lineHeights:Object.assign(Object.assign({},Ct),n.lineHeights),colors:Object.assign({title:r.palette.dark[900],normal:r.palette.dark[700],caption:r.palette.dark[500],disabled:r.palette.light[500]},n.colors)},u={default:{fontFamily:c.fontFamilyBase,fontWeight:c.weights.medium,lineHeight:c.lineHeights.medium,color:c.colors.normal},heading:{fontFamily:c.fontFamilyBase,fontWeight:c.weights.bold,lineHeight:c.lineHeights.medium,color:c.colors.title}};return(0,t.Immutable)(Object.assign(Object.assign({},c),{variants:{display1:Object.assign(Object.assign({},u.heading),{fontSize:c.sizes.display1}),display2:Object.assign(Object.assign({},u.heading),{fontSize:c.sizes.display2}),display3:Object.assign(Object.assign({},u.heading),{fontSize:c.sizes.display3}),display4:Object.assign(Object.assign({},u.heading),{fontSize:c.sizes.display4}),display5:Object.assign(Object.assign({},u.heading),{fontSize:c.sizes.display5}),display6:Object.assign(Object.assign({},u.heading),{fontSize:c.sizes.display6}),body1:Object.assign(Object.assign({},u.default),{fontSize:c.sizes.body1}),body2:Object.assign(Object.assign({},u.default),{fontSize:c.sizes.body2}),caption1:Object.assign(Object.assign({},u.default),{fontSize:c.sizes.caption1,color:c.colors.caption}),caption2:Object.assign(Object.assign({},u.default),{fontSize:c.sizes.caption2,color:c.colors.caption})}})).merge(n,{deep:!0})})(O,this.colors),this.spacer=null!==(s=null==O?void 0:O.spacer)&&void 0!==s?s:jt,this.sizes=(0,t.Immutable)(Ot(this.spacer)).merge(null!==(a=null==O?void 0:O.sizes)&&void 0!==a?a:{}),this.gutters=(0,t.Immutable)(function(e="1rem"){return{0:0,1:t.polished.math(`${e} * 0.0625`),2:t.polished.math(`${e} * 0.125`),3:t.polished.math(`${e} * 0.25`),4:t.polished.math(`${e} * 0.5`),5:t.polished.math(`${e} * 0.625`)}}(this.spacer)).merge(null!==(d=null==O?void 0:O.gutters)&&void 0!==d?d:{}),this.border=(0,t.Immutable)({color:this.colors.palette.light[300],width:"1px"}).merge(null!==(c=null==O?void 0:O.border)&&void 0!==c?c:{}),this.borderRadiuses=(0,t.Immutable)(qt).merge(null!==(u=null==O?void 0:O.borderRadiuses)&&void 0!==u?u:{}),this.boxShadows=(0,t.Immutable)(Tt).merge(null!==(h=null==O?void 0:O.boxShadows)&&void 0!==h?h:{}),this.focusedStyles=(0,t.Immutable)({color:this.colors.palette.primary[700],width:"2px",offset:"2px"}),this.surfaces=(0,t.Immutable)({1:{bg:this.colors.white,border:{width:"1px",color:this.colors.palette.light[400]},shadow:this.boxShadows.none},2:{bg:this.colors.white,border:{width:"1px",color:this.colors.palette.light[300]},shadow:this.boxShadows.default},3:{bg:this.colors.palette.light[100],border:{width:"1px",color:this.colors.palette.light[400]},shadow:this.boxShadows.sm}}).merge(null!==(p=null==O?void 0:O.surfaces)&&void 0!==p?p:{},{deep:!0}),this.body=(0,t.Immutable)({bg:(null===(m=null===(g=this.colorationVariants[this.coloration])||void 0===g?void 0:g.body)||void 0===m?void 0:m.bg)||this.colors.white,color:(null===(f=null===(b=this.colorationVariants[this.coloration])||void 0===b?void 0:b.body)||void 0===f?void 0:f.color)||this.colors.black,fontFamily:this.typography.fontFamilyBase,fontWeight:this.typography.weights.medium,fontSize:this.typography.fontSizeBase,fontStyle:"unset",lineHeight:this.typography.lineHeights.medium}).merge(null!==(v=null==O?void 0:O.body)&&void 0!==v?v:{}),this.header=(0,t.Immutable)({bg:(null===(w=null===(y=this.colorationVariants[this.coloration])||void 0===y?void 0:y.header)||void 0===w?void 0:w.bg)||this.colors.primary,color:(null===(x=null===($=this.colorationVariants[this.coloration])||void 0===$?void 0:$.header)||void 0===x?void 0:x.color)||this.colors.white}).merge(null!==(k=null==O?void 0:O.header)&&void 0!==k?k:{}),this.footer=(0,t.Immutable)({bg:(null===(R=null===(z=this.colorationVariants[this.coloration])||void 0===z?void 0:z.footer)||void 0===R?void 0:R.bg)||this.colors.primary,color:(null===(_=null===(S=this.colorationVariants[this.coloration])||void 0===S?void 0:S.footer)||void 0===_?void 0:_.color)||this.colors.white}).merge(null!==(C=null==O?void 0:O.footer)&&void 0!==C?C:{}),this.link=(0,t.Immutable)({color:this.colors.primary,decoration:"none",hover:{color:this.colors.palette.primary[600],decoration:"underline"}}).merge(null!==(j=null==O?void 0:O.link)&&void 0!==j?j:{});const T={bg:this.colors.white,color:this.colors.black,border:{color:this.colors.palette.light[400],width:this.border.width}},q={darkTheme:this.darkTheme,coloration:this.coloration,colors:this.colors,typography:this.typography,spacer:this.spacer,sizes:this.sizes,gutters:this.gutters,border:this.border,borderRadiuses:this.borderRadiuses,boxShadows:this.boxShadows,surfaces:this.surfaces,body:this.body,header:this.header,footer:this.footer,link:this.link,focusedStyles:this.focusedStyles},I={alert:{paddingY:this.sizes[2],paddingX:this.sizes[3],marginBottom:"0.625rem",borderRadius:"0.25rem",linkFontWeight:this.typography.weights.light,borderWidth:"1px",bgLevel:"-10",borderLevel:"-9",colorLevel:"6"},badge:{fontSize:"85%",fontWeight:this.typography.weights.medium,paddingX:"0.5rem",paddingY:"0.25rem",borderRadius:this.borderRadiuses.pill,minSize:"6px",border:{width:"1px",color:this.colors.white}},breadcrumb:{bg:this.colors.palette.light[200],activeColor:this.colors.palette.dark[200],paddingY:"0.75rem",paddingX:"1rem",marginBottom:"1rem",borderRadius:this.borderRadiuses.default,item:{color:this.colors.palette.dark[900],hoverColor:this.colors.primary,padding:"0.5rem"},divider:{content:'"/"',color:this.colors.palette.dark[200]}},button:{sizes:{default:{fontSize:this.typography.sizes.body1,lineHeight:"1.375rem",paddingX:this.sizes[3],paddingY:this.sizes[1],borderRadius:"2px"},sm:{fontSize:this.typography.sizes.body2,lineHeight:"1rem",paddingX:this.sizes[3],paddingY:this.sizes[1],borderRadius:"2px"},lg:{fontSize:this.typography.sizes.display5,lineHeight:"1.375rem",paddingX:this.sizes[3],paddingY:this.sizes[2],borderRadius:"2px"}},variants:{default:{default:{color:this.colors.palette.dark[800],bg:this.colors.white,border:{color:this.colors.palette.light[400],width:"1px"}},hover:{bg:this.colors.palette.light[100]},active:{color:this.colors.white,bg:this.colors.primary,border:{color:this.colors.primary}},disabled:{color:this.colors.palette.light[800],bg:this.colors.palette.light[200],border:{color:this.colors.palette.light[400]}}},primary:{default:{color:this.colors.white,bg:this.colors.primary,border:{color:this.colors.primary,width:"1px"}},hover:{bg:this.colors.palette.primary[600]},active:{bg:this.colors.palette.primary[600]},disabled:{color:this.colors.palette.light[800],bg:this.colors.palette.light[200],border:{color:this.colors.palette.light[200]}}},secondary:{default:{color:this.colors.primary,bg:this.colors.transparent,border:{width:"1px",color:this.colors.primary}},hover:{color:this.colors.white,bg:this.colors.primary,border:{color:this.colors.primary}},active:{color:this.colors.white,bg:this.colors.primary,border:{color:this.colors.primary}},disabled:{color:this.colors.palette.light[800],bg:this.colors.palette.light[200],border:{color:this.colors.palette.light[400]}}},tertiary:{default:{color:this.colors.palette.dark[800],bg:this.colors.transparent,border:{width:"1px",color:this.colors.transparent}},hover:{color:this.colors.primary},active:{color:this.colors.white,bg:this.colors.primary},disabled:{color:this.colors.palette.light[800]}},danger:{default:{color:this.colors.white,bg:this.colors.danger,border:{width:"1px",color:this.colors.danger}},hover:{bg:this.colors.palette.danger[600]},active:{bg:this.colors.palette.danger[600]},disabled:{color:this.colors.palette.light[800],bg:this.colors.palette.light[200],border:{color:this.colors.palette.light[200]}}},link:{default:{color:this.colors.primary,bg:this.colors.transparent,border:{width:"1px",color:this.colors.transparent},decoration:"underline"},hover:{color:this.colors.palette.primary[600],decoration:"underline"},active:{color:this.colors.palette.primary[600]},disabled:{color:this.colors.palette.light[800]}}},icon:{spacing:this.gutters[4],size:"auto"}},card:{root:{default:Object.assign(Object.assign({},this.surfaces[1]),{borderRadius:this.borderRadiuses.none}),hover:{border:{width:"1px",color:this.colors.primary},shadow:`0 0 0 1px ${this.colors.primary}`},active:{border:{width:"1px",color:this.colors.primary},shadow:`0 0 0 1px ${this.colors.primary}`}},spacer:{y:"0.625rem",x:this.sizes[4]},headerBg:this.colors.white,divider:{color:this.colors.palette.light[200],width:"1px"},checkMark:{color:this.colors.white,bg:this.colors.primary}},close:{fontSize:t.polished.math(`${this.typography.fontSizeBase} * 1.5`),fontWeight:this.typography.weights.bold,color:this.colors.black,textShadow:`0 1px 0 ${this.colors.white}`},dropdown:Object.assign(Object.assign({button:{sizes:{default:{paddingX:"0.375rem"}}},minWidth:"10rem",paddingY:this.sizes[1],spacer:"4px"},this.surfaces[2]),{borderRadius:this.borderRadiuses.default,divider:{bg:this.colors.palette.light[400],margin:`${this.sizes[1]} ${this.sizes[2]}`},link:{color:this.colors.palette.dark[900],hoverColor:this.colors.white,hoverBg:this.colors.primary,activeColor:this.colors.white,activeBg:this.colors.primary,checkIconColor:"inherit",checkIconGutter:this.gutters[4],disabledColor:this.colors.palette.dark[200]},item:{paddingY:"0.25rem",paddingX:"1rem"},header:{color:this.colors.palette.dark[200]}}),form:{group:{marginBottom:"1rem"},helpText:{marginTop:"0.25rem",fontSize:"0.8125rem"},check:{inline:{marginX:"0.75rem",inputMarginX:"0.3125rem"}}},input:Object.assign(Object.assign({},T),{boxShadow:null,disabled:{bg:this.colors.palette.light[100],borderColor:this.colors.palette.light[400],color:this.colors.palette.light[800]},focus:{borderColor:this.colors.primary,boxShadow:null},placeHolderColor:this.colors.palette.dark[200],sizes:{default:{fontSize:this.typography.sizes.body1,lineHeight:1.5,paddingX:this.sizes[2],paddingY:this.sizes[1],borderRadius:this.borderRadiuses.default,height:"32px"},sm:{fontSize:this.typography.sizes.body2,lineHeight:1,paddingX:this.sizes[2],paddingY:this.sizes[1],borderRadius:this.borderRadiuses.default,height:"26px"},lg:{fontSize:this.typography.sizes.display5,lineHeight:1.5,paddingX:this.sizes[2],paddingY:this.sizes[2],borderRadius:this.borderRadiuses.default,height:"40px"}},transition:"border-color .15s ease-in-out, box-shadow .15s ease-in-out",checkbox:{size:"16px",border:{color:this.colors.palette.light[600],width:"2px"},hover:{borderColor:this.colors.primary},bg:T.bg,checked:{color:this.colors.white,bg:this.colors.primary},iconSize:"12px",borderRadius:"2px"},radio:{size:"16px",border:{color:this.colors.palette.light[600],width:"2px"},hover:{borderColor:this.colors.primary},bg:T.bg,checked:{color:this.colors.primary,bg:this.colors.white},iconSize:"8px",borderRadius:this.borderRadiuses.pill},switch:{width:"28px",height:"16px",bg:T.bg,border:{width:T.border.width,color:this.colors.palette.light[600]},checkedBg:this.colors.primary,checkedBorder:{color:this.colors.primary},slider:{gap:"2px",height:"auto",width:"auto",color:this.colors.palette.dark[800],checkedColor:"white",disabledColor:this.colors.palette.light[800]},borderRadius:this.borderRadiuses.pill,focusColor:this.colors.black}}),select:{button:{sizes:{default:{paddingX:"0.375rem"},sm:{paddingX:"0.375rem"},lg:{paddingX:"0.375rem"}}}},listGroup:{fontSize:"1rem",bg:this.colors.white,border:{color:this.border.color,width:this.border.width},borderRadius:this.borderRadiuses.default,item:{paddingY:"0.75rem",paddingX:"1rem"},hover:{bg:this.colors.palette.light[100]},active:{color:"inherit",bg:t.polished.rgba(this.colors.primary,.1),borderColor:this.border.color},disabled:{color:this.colors.palette.light[700],bg:this.colors.palette.light[200]},action:{color:this.colors.palette.dark[600],hover:{color:this.colors.palette.dark[600]},active:{color:this.body.color,bg:this.colors.palette.light[200]}}},inputGroup:{addon:{color:T.color,bg:this.colors.palette.light[200],borderColor:T.border.color}},modal:{innerPadding:"1rem",transition:"transform .3s ease-out",dialog:{margin:".5rem",marginYSmUp:"1.75rem"},title:{lineHeight:this.typography.lineHeights.medium},content:Object.assign(Object.assign({},this.surfaces[2]),{borderRadius:"0.25rem"}),backdrop:{bg:this.colors.black,opacity:.6},header:{border:{color:this.colors.palette.light[300],width:this.border.width},paddingY:".75rem",paddingX:"1rem"},footer:{border:{color:this.colors.palette.light[300],width:"0"},button:{minWidth:"6.25rem"}},sizes:{lg:"800px",md:"500px",sm:"300px"}},nav:{variants:{default:{size:{fontSize:this.typography.sizes.body1,lineHeight:1.5,paddingX:this.sizes[3],paddingY:this.sizes[1]},gutter:this.gutters[3],icon:{spacing:this.gutters[4]},root:{borderRadius:this.borderRadiuses.default},item:{default:{color:this.colors.palette.dark[800],bg:this.colors.transparent,border:{width:0},borderRadius:this.borderRadiuses.default},hover:{color:this.colors.primary,borderRadius:this.borderRadiuses.default},active:{color:this.colors.primary,borderRadius:this.borderRadiuses.default},disabled:{color:this.colors.palette.light[700],shadow:"none",borderRadius:this.borderRadiuses.default}}},underline:{size:{fontSize:this.typography.sizes.body1,lineHeight:1.5,paddingX:this.sizes[3],paddingY:this.sizes[1]},gutter:this.gutters[3],icon:{spacing:this.gutters[4]},root:{border:{width:0},borderRadius:this.borderRadiuses.none},item:{default:{color:this.colors.palette.dark[800],bg:this.colors.transparent,border:{color:this.colors.transparent,width:"2px"},borderRadius:this.borderRadiuses.none},hover:{color:this.colors.primary,border:{color:this.colors.transparent,width:"2px"},borderRadius:this.borderRadiuses.none},active:{color:this.colors.primary,border:{color:this.colors.primary,width:"2px"},borderRadius:this.borderRadiuses.none},disabled:{color:this.colors.palette.light[700],shadow:"none",borderRadius:this.borderRadiuses.none}}},pills:{size:{fontSize:this.typography.sizes.body1,lineHeight:1.5,paddingX:this.sizes[3],paddingY:this.sizes[1]},gutter:this.gutters[3],icon:{spacing:this.gutters[4]},root:{borderRadius:this.borderRadiuses.pill},item:{default:{color:this.colors.palette.dark[800],border:{width:"0px"},borderRadius:this.borderRadiuses.pill},hover:{color:this.colors.primary,borderRadius:this.borderRadiuses.pill},active:{color:this.colors.white,bg:this.colors.primary,borderRadius:this.borderRadiuses.pill},disabled:{color:this.colors.palette.light[700],shadow:"none",borderRadius:this.borderRadiuses.pill}}},tabs:{size:{fontSize:this.typography.sizes.body1,lineHeight:1.5,paddingX:this.sizes[3],paddingY:this.sizes[1]},gutter:this.gutters[3],icon:{spacing:this.gutters[4]},root:{border:{width:"1px",color:this.colors.palette.light[500]},borderRadius:this.borderRadiuses.default},item:{default:{color:this.colors.palette.dark[800],bg:this.colors.palette.light[100],border:{width:"1px",color:this.colors.palette.light[500]},borderRadius:this.borderRadiuses.default},hover:{bg:this.colors.white},active:{color:this.colors.primary,bg:this.colors.white,border:{width:"1px",color:this.colors.palette.light[500]}},disabled:{color:this.colors.palette.light[700],bg:this.colors.palette.light[200],shadow:"none"}}}}},navbar:{fontSize:"1rem",paddingY:t.polished.math(`${this.spacer} * 0.5`),paddingX:this.spacer,nav:{link:{paddingX:"0.5rem",height:"auto"}},brand:{fontSize:"1rem",height:"auto",paddingY:"auto"},toggler:{paddingY:"0.25rem",paddingX:"0.75rem",fontSize:this.typography.sizes.display5,borderRadius:"2px"},themes:{dark:{color:t.polished.rgba(this.colors.white,.75),hoverColor:this.colors.white,activeColor:this.colors.white,disabledColor:this.colors.palette.light[700],toggler:{borderColor:t.polished.rgba(this.colors.white,.1)}},light:{color:"inherit",hoverColor:this.colors.primary,activeColor:this.colors.primary,disabledColor:this.colors.palette.light[700],toggler:{borderColor:t.polished.rgba(this.colors.black,.1)}}}},pagination:{gutter:this.gutters[3],sizes:{default:{button:{paddingY:"0.25rem",paddingX:"0.25rem",minWidth:"1.625rem",lineHeight:1}},sm:{button:{paddingY:"0.25rem",paddingX:"0.25rem",minWidth:"1.5rem",lineHeight:1}},lg:{button:{paddingY:"0.5rem",paddingX:"0.5rem",minWidth:"2rem",lineHeight:1}}},variants:{default:{root:{default:{borderRadius:this.borderRadiuses.lg}},button:{default:{color:this.colors.palette.dark[800],bg:this.colors.white,border:{color:this.colors.palette.light[400],width:this.border.width},borderRadius:this.borderRadiuses.lg},hover:{color:this.link.color,bg:this.colors.palette.light[200],border:{width:"1px",color:this.colors.palette.light[400]}},active:{color:this.colors.white,bg:this.colors.primary,border:{width:"1px",color:this.colors.primary}},disabled:{color:this.colors.palette.light[800],bg:this.colors.palette.light[200],border:{width:"1px",color:this.colors.palette.light[400]}}}}}},popper:Object.assign(Object.assign({},this.surfaces[2]),{fontSize:this.typography.fontSizeBase,borderRadius:this.borderRadiuses.lg,header:{bg:this.colors.white,color:"inherit",paddingY:"0.625rem",paddingX:"0.625rem"},body:{color:this.body.color,paddingY:"0.5rem",paddingX:"0.75rem"},arrow:{color:this.surfaces[2].bg,outerColor:this.surfaces[2].border.color}}),paper:{bg:this.body.bg,color:this.body.color,paddingX:0,paddingY:0,border:{width:0,color:"transparent"}},progress:{fontSize:t.polished.math(`${this.typography.fontSizeBase} * 0.75`),bg:this.colors.palette.light[200],borderRadius:this.borderRadiuses.none},slider:{sizes:{default:{root:"0.125rem",thumb:"0.875rem"},sm:{root:"0.125rem",thumb:"0.875rem"},lg:{root:"0.25rem",thumb:"1.5rem"}},variants:{default:{root:{bg:this.colors.transparent,border:{width:0}},track:{bg:this.colors.palette.light[600],borderRadius:this.borderRadiuses.pill},progress:{default:{bg:this.colors.primary,borderRadius:this.borderRadiuses.pill}},thumb:{default:{bg:this.colors.white,border:{color:this.colors.palette.primary[500],width:"2px"},borderRadius:this.borderRadiuses.circle},hover:{border:{color:this.colors.palette.primary[600],width:"2px"}},focus:{shadow:`0 0 0 2px ${this.colors.white}, 0 0 0 3px ${this.colors.black}`}}}}},table:{color:this.body.color,bg:this.body.bg,border:{color:this.colors.palette.light[400],width:this.border.width},head:{fontSize:"1rem",bg:this.colors.transparent},cell:{default:{paddingX:this.sizes[3],paddingY:this.sizes[2]},sm:{paddingX:this.sizes[3],paddingY:this.sizes[2]}},variants:{striped:{bg:this.colors.palette.light[100]},dark:{color:this.colors.light,bg:this.colors.dark,border:{color:this.colors.palette.light[900]},head:{bg:this.colors.transparent}}}},tooltip:{fontSize:this.typography.sizes.body2,maxWidth:"360px",color:this.colors.black,bg:this.colors.palette.light[300],borderRadius:this.borderRadiuses.default,border:{width:"1px",color:this.colors.palette.light[600]},boxShadow:this.boxShadows.default,opacity:1,paddingY:this.sizes[1],paddingX:this.sizes[2],arrow:{color:this.colors.palette.light[300],border:{width:"1px",color:this.colors.palette.light[600]}}},navButtonGroup:{variants:{default:{root:{},item:{default:{color:this.colors.palette.dark[800],bg:this.colors.white,border:{color:this.colors.light[500],width:"1px"},borderRadius:this.sizes[1]},hover:{bg:this.colors.palette.light[100],borderRadius:this.sizes[1]},disabled:{color:this.colors.palette.light[800],bg:this.colors.palette.light[200],border:{color:this.colors.palette.light[400]},borderRadius:this.sizes[1]}}},primary:{root:{bg:this.colors.primary,borderRadius:this.sizes[5]},item:{default:{color:this.colors.white,bg:this.colors.transparent,border:{width:"0px",color:this.colors.transparent}},hover:{color:this.colors.light[500],bg:this.colors.transparent,border:{width:"0px",color:this.colors.transparent}},disabled:{color:this.colors.palette.light[800],bg:this.colors.transparent,border:{width:"0px",color:this.colors.transparent}}}},tertiary:{root:{},item:{default:{color:this.colors.palette.dark[800],bg:this.colors.transparent,border:{width:"0px",color:this.colors.transparent}},hover:{color:this.colors.primary,bg:this.colors.transparent,border:{width:"0px",color:this.colors.transparent}},disabled:{color:this.colors.palette.light[800],bg:this.colors.transparent,border:{width:"0px",color:this.colors.transparent}}}}}}},E={boxShadow:"0 1px 2px 0 rgba(0,0,0,0.20)",components:{button:{variants:{default:{default:{color:this.colors.palette.dark[600],bg:this.colors.palette.light[100]},hover:{color:this.colors.primary,bg:this.colors.palette.light[100]},active:{color:this.colors.white,bg:this.colors.primary},disabled:{color:this.colors.palette.light[800],bg:this.colors.palette.light[100]}},secondary:I.button.variants.secondary,tertiary:Object.assign(Object.assign({},I.button.variants.tertiary),{hover:{color:this.colors.primary,bg:this.colors.palette.primary[400]},active:{color:this.colors.white,bg:this.colors.primary}})}},input:Object.assign(Object.assign({},T),{placeHolderColor:this.colors.palette.light[800],focus:{borderColor:this.colors.primary,boxShadow:null}}),menu:{bg:this.colors.palette.light[100],border:{color:this.colors.palette.light[400],width:"1px"},borderRadius:this.borderRadiuses.default,item:{default:{color:this.colors.palette.dark[900],bg:this.colors.palette.light[100],border:{width:0}},hover:{bg:this.colors.palette.light[300]},active:{bg:this.colors.palette.light[300]}}},panel:{color:this.colors.palette.dark[600],bg:this.colors.palette.light[100]},table:{root:{color:this.body.color}},updatingIndicator:{bg:this.colors.transparent,progress:this.colors.primary}},widgets:{layerlist:{root:{bg:this.colors.palette.light[100],color:this.colors.palette.dark[800]},item:{default:{bg:this.colors.palette.light[100],border:{color:this.colors.palette.light[500]}},disabled:{color:this.colors.palette.light[800]}},actionsList:{root:{bg:this.colors.palette.light[200],color:this.body.color},item:{default:{color:this.colors.palette.dark[600]},hover:{color:this.colors.primary,bg:this.colors.transparent},active:{color:this.colors.palette.light[100],bg:this.colors.primary}},separator:{color:this.colors.palette.light[300],width:"2px"}},icon:{default:{color:this.colors.palette.dark[600]},hover:{color:this.colors.primary,bg:this.colors.transparent},active:{color:this.colors.palette.light[100],bg:this.colors.primary}}},legend:{variants:{default:{root:{color:this.colors.palette.dark[800]}},card:{root:{color:this.colors.palette.dark[800],bg:this.colors.palette.light[100]},carousel:{bg:this.colors.palette.light[300]},caption:{bg:this.colors.palette.light[300]}}}},basemapGallery:{root:{color:this.colors.palette.dark[800],bg:this.colors.palette.light[100]},item:{hover:{bg:this.colors.palette.light[300],border:{color:this.colors.palette.light[300]}},active:{bg:this.colors.palette.primary[100],border:{color:this.colors.primary}},focus:{bg:this.colors.palette.light[300],border:{color:this.colors.palette.light[300]}}}},measure:{measurement:{bg:this.colors.palette.light[200],valueColor:this.colors.black,disabledColor:this.colors.palette.light[700]}}}};return(0,t.Immutable)(Object.assign(Object.assign({},q),{components:(0,t.Immutable)(I),arcgis:E})).merge(O.without("colors"),{deep:!0})}}let Pt=null;const At=(e,o=(0,t.Immutable)({}),r,i)=>{Pt||(Pt=new Et);const n=t.sharedThemeUtils.isSharedTheme(e)?t.sharedThemeUtils.createCustomSharedThemeVariables(i):r;return Pt.generate(o,n,i)},Mt=(()=>{const e={module:null,modules:{},module2:null};let t=[];return{setModule:o=>{e.module=o,t.forEach((e=>e(o)))},setModules:(t,o)=>{e.modules[t]=o},getModule:(t,o=!0)=>{if(t){const r=e.modules[t];return!r&&o&&console.warn("Theme "+t+" is not loaded yet."),r}return!e.module&&o&&console.warn("Theme is not loaded yet."),e.module},setModule2:t=>{e.module2=t},getModule2:()=>{const t=e.module2;return t||console.warn("Theme2 has not been synchronized to the current frame."),t},subscribe:e=>(t.push(e),()=>{t=t.filter((t=>t!==e))})}})(),Bt="to_app.theme_changed",Ft="to_builder.theme_changed",Lt="to_builder.app_theme_switcher_loaded",Nt=({children:e})=>{var o;const r=(()=>{const[e,o]=t.React.useState(),r=t.ReactRedux.useSelector((e=>{var t;return null===(t=e.appConfig)||void 0===t?void 0:t.theme})),i=t.ReactRedux.useSelector((e=>{var t;return null===(t=e.appConfig)||void 0===t?void 0:t.customTheme})),n=t.ReactRedux.useSelector((e=>{var t;return null===(t=e.appConfig)||void 0===t?void 0:t.sharedThemeVariables})),l=t.React.useRef(null);return t.React.useEffect((()=>{r&&lo(r).then((e=>{var i,n;const s=null==e?void 0:e.variables,a=null===(i=(0,t.getAppStore)().getState().appConfig)||void 0===i?void 0:i.customTheme,d=null===(n=(0,t.getAppStore)().getState().appConfig)||void 0===n?void 0:n.sharedThemeVariables,c=At(r,s,a,d),u=Object.assign(Object.assign({},e),{theme:c});l.current=u,Mt.setModules(e.uri,u),Mt.setModule(u),o(u)}))}),[r]),t.React.useEffect((()=>{const e=l.current;if(!e)return;const r=e.uri;if(r!==(0,t.getAppStore)().getState().appConfig.theme)return;const s=e.variables,a=At(r,s,i,n),d=Object.assign(Object.assign({},e),{theme:a});Mt.setModules(e.uri,d),Mt.setModule(d),o(d)}),[i,n]),e})(),i=(e=>{const[o,r]=t.React.useState(null),i=t.React.useRef(null);return t.React.useEffect((()=>{if(window.jimuConfig.isInBuilder){const e=window.parent&&window.parent._builderPubsub;e.subscribe(Bt,((e,t)=>{r(t),Mt.setModule2(t)})),e.publishSync(Lt)}else if(window.jimuConfig.isBuilder){const e=window._builderPubsub;e.subscribe(Ft,((e,t)=>{r(t),Mt.setModule2(t)})),e.subscribe(Lt,(()=>{i.current&&e.publishSync(Bt,i.current)}))}}),[]),t.React.useEffect((()=>{e&&e.theme&&(window.jimuConfig.isInBuilder?(window.parent&&window.parent._builderPubsub).publishSync(Ft,e):window.jimuConfig.isBuilder&&(i.current=e))}),[e]),o})(r),n=null===(o=(0,t.getAppStore)().getState().appContext)||void 0===o?void 0:o.isRTL,l=t.React.useMemo((()=>null==ue?void 0:ue(n)),[n]);return t.React.createElement(lt,{theme:null==r?void 0:r.theme,theme2:null==i?void 0:i.theme},t.React.createElement(he,{value:l},t.React.createElement(xt,{module:r,isRTL:n}),e))};function Ht(){return window.jimuConfig.isInBuilder?oo():null}function Xt(){let e=null;return e=window.jimuConfig.isBuilder?oo():to(),e}function Yt(e){var o;const r=Xt(),i=r.getIn(["components",e]),n=null!==(o=null==i?void 0:i.variants)&&void 0!==o?o:(0,t.Immutable)({default:i});if("navButtonGroup"===e){let e=(0,t.Immutable)({});const o=["default","primary","tertiary"],i=r.getIn(["components","button","variants"]);return o.forEach((t=>{var o;const r=null==n?void 0:n[t],l=null===(o=null==n?void 0:n[t])||void 0===o?void 0:o.item,s=(null==i?void 0:i[t]).merge(null!=l?l:{},{deep:!0});e=e.set(t,Object.assign(Object.assign({},r),{item:s}))})),e}return n}const Vt=["nav","pagination","slider","navButtonGroup"],Gt=()=>{let e=(0,t.Immutable)({});return Vt.forEach((t=>{const o=Yt(t);e=e.set(t,o)})),e},Ut=/^var\(--(.+?)\)$/,Wt=e=>Ut.test(e),Dt=(e,o)=>{var r;if("string"!=typeof e)return null;let i,n="colors";return i=Wt(e)?e.match(Ut)[1].split("-"):e.split("."),i.length>1&&parseInt(i[1])%100==0?n="colors.palette":"org"===(null==i?void 0:i[0])&&(n="colors.orgSharedColors",i=i.slice(1)),null!==(r=function(e,o){return"string"!=typeof e?null:(o=o||Xt(),t.lodash.getValue(o,e))}(`${n}.${i.join(".")}`,o))&&void 0!==r?r:e},Kt=e=>!!Mt.getModule(e,!1),Zt=(e,t=!0)=>Mt.getModule(e,t),Qt=e=>Mt.setModule(e),Jt=(e,t)=>{const o=(e=>{const t=Zt(e);return null==t?void 0:t.styles})(t);return null==o?void 0:o[e]},eo=e=>{const t=Mt.getModule2(),o=null==t?void 0:t.styles;return null==o?void 0:o[e]},to=()=>{const e=Mt.getModule();return null==e?void 0:e.theme},oo=()=>{const e=Mt.getModule2();return null==e?void 0:e.theme};var ro=function(e,t,o,r){return new(o||(o=Promise))((function(i,n){function l(e){try{a(r.next(e))}catch(e){n(e)}}function s(e){try{a(r.throw(e))}catch(e){n(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(l,s)}a((r=r.apply(e,t||[])).next())}))};const io={},no=e=>ro(void 0,void 0,void 0,(function*(){return io[e]?"[object Promise]"===io[e].toString()?yield io[e]:Promise.resolve(io[e]):(io[e]=window.fetch(e).then((e=>ro(void 0,void 0,void 0,(function*(){return yield e.json()})))),io[e].then((t=>ro(void 0,void 0,void 0,(function*(){return io[e]=t,t})))))})),lo=e=>ro(void 0,void 0,void 0,(function*(){if(Kt(e))return Promise.resolve(Zt(e));const o=yield(e=>ro(void 0,void 0,void 0,(function*(){const o=`${t.urlUtils.getAbsoluteRootUrl()}${e}manifest.json`;return no(o).then((e=>(0,t.Immutable)(null!=e?e:{}))).catch((e=>{console.error(e)}))})))(e),r=yield(e=>ro(void 0,void 0,void 0,(function*(){const o=`${t.urlUtils.getAbsoluteRootUrl()}${e}variables.json`;return no(o).then((e=>(0,t.Immutable)(null!=e?e:{}))).catch((e=>{console.error(e)}))})))(e),i=yield((e,o)=>ro(void 0,void 0,void 0,(function*(){var r;if(null===(r=null==o?void 0:o.styleFiles)||void 0===r?void 0:r.js)return t.moduleLoader.loadModule(`${e}style.js`)})))(e,o),n={uri:e,manifest:o,styles:i,variables:r};return Promise.resolve(n)}));function so(e,o=!1){const r=e.displayName||e.name||"Component",i=t.React.forwardRef(((r,i)=>{const n=st(),l=t.React.useContext(pe),s=t.React.useContext(it),a={};return a.theme=n?s:l,o&&(a.theme2=n?l:s),t.React.createElement(e,Object.assign({ref:i},a,r))}));return i.displayName=`WithTheme(${r})`,vt(i,e)}function ao(e){const o=e.displayName||e.name||"Component",r=so(e),i=t.React.forwardRef((function(e,o){return t.React.createElement(rt.Provider,{value:!0},t.React.createElement(r,Object.assign({},e,{ref:o})))}));return i.displayName=`WithTheme2(${o})`,vt(i,e)}const co=ao,uo=({children:e})=>t.React.createElement(rt.Provider,{value:!0},e),ho=({children:e})=>t.React.createElement(rt.Provider,{value:!1},e);var po;!function(e){e.SOLID="solid",e.DASHED="dashed",e.DOTTED="dotted",e.DOUBLE="double"}(po||(po={}))})(),i})())}}}));