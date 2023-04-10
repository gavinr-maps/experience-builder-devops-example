/*! For license information please see index.js.LICENSE.txt */
System.register(["jimu-core"],(function(e,t){var o={};return{setters:[function(e){o.CONSTANTS=e.CONSTANTS,o.CacheProvider=e.CacheProvider,o.Global=e.Global,o.INTERACTIVE_CLASS=e.INTERACTIVE_CLASS,o.Immutable=e.Immutable,o.React=e.React,o.ReactRedux=e.ReactRedux,o.ThemeCommonColorKeys=e.ThemeCommonColorKeys,o.ThemeContext=e.ThemeContext,o.ThemeProvider=e.ThemeProvider,o.ThemeThemeColorKeys=e.ThemeThemeColorKeys,o.classNames=e.classNames,o.css=e.css,o.getAppStore=e.getAppStore,o.lodash=e.lodash,o.moduleLoader=e.moduleLoader,o.polished=e.polished,o.sharedThemeUtils=e.sharedThemeUtils,o.styled=e.styled,o.urlUtils=e.urlUtils}],execute:function(){e((()=>{var e={832:(e,t)=>{var o;function r(e,t){var o=[],r=0;function i(e){return o.push(e),t}function n(){return o[r++]}return{tokenize:function(t){return t.replace(e,i)},detokenize:function(e){return e.replace(new RegExp("("+t+")","g"),n)}}}o=new function(){var e="`TMP`",t="`COMMENT`",o="[^\\u0020-\\u007e]",i="(?:[0-9]*\\.[0-9]+|[0-9]+)",n="direction\\s*:\\s*",l="['\"]?\\s*",a="(^|[^a-zA-Z])",s="\\/\\*\\!?\\s*@noflip\\s*\\*\\/",d="(?:(?:(?:\\\\[0-9a-f]{1,6})(?:\\r\\n|\\s)?)|\\\\[^\\r\\n\\f0-9a-f])",c="(?:[_a-z0-9-]|"+o+"|"+d+")",u=i+"(?:\\s*(?:em|ex|px|cm|mm|in|pt|pc|deg|rad|grad|ms|s|hz|khz|%)|-?(?:[_a-z]|"+o+"|"+d+")"+c+"*)?",p="((?:-?"+u+")|(?:inherit|auto))",g="(#?"+c+"+|(?:rgba?|hsla?)\\([ \\d.,%-]+\\))",h="(?:[!#$%&*-~]|"+o+"|"+d+")*?",m="(?![a-zA-Z])",b="(?!("+c+"|\\r?\\n|\\s|#|\\:|\\.|\\,|\\+|>|~|\\(|\\)|\\[|\\]|=|\\*=|~=|\\^=|'[^']*'|\"[^\"]*\"|"+t+")*?{)",f="(?!"+h+l+"\\))",v="(?="+h+l+"\\))",y="(\\s*(?:!important\\s*)?[;}])",$=/`TMP`/g,w=new RegExp("\\/\\*[^*]*\\*+([^\\/*][^*]*\\*+)*\\/","gi"),x=new RegExp("("+s+b+"[^;}]+;?)","gi"),k=new RegExp("("+s+"[^\\}]*?})","gi"),S=new RegExp("("+n+")ltr","gi"),_=new RegExp("("+n+")rtl","gi"),j=new RegExp(a+"(left)"+m+f+b,"gi"),R=new RegExp(a+"(right)"+m+f+b,"gi"),O=new RegExp(a+"(left)"+v,"gi"),z=new RegExp(a+"(right)"+v,"gi"),C=new RegExp(a+"(ltr)"+v,"gi"),T=new RegExp(a+"(rtl)"+v,"gi"),q=new RegExp(a+"([ns]?)e-resize","gi"),E=new RegExp(a+"([ns]?)w-resize","gi"),P=new RegExp("((?:margin|padding|border-width)\\s*:\\s*)"+p+"(\\s+)"+p+"(\\s+)"+p+"(\\s+)"+p+y,"gi"),A=new RegExp("((?:-color|border-style)\\s*:\\s*)"+g+"(\\s+)"+g+"(\\s+)"+g+"(\\s+)"+g+y,"gi"),N=new RegExp("(background(?:-position)?\\s*:\\s*(?:[^:;}\\s]+\\s+)*?)("+u+")","gi"),I=new RegExp("(background-position-x\\s*:\\s*)(-?"+i+"%)","gi"),M=new RegExp("(border-radius\\s*:\\s*)"+p+"(?:(?:\\s+"+p+")(?:\\s+"+p+")?(?:\\s+"+p+")?)?(?:(?:(?:\\s*\\/\\s*)"+p+")(?:\\s+"+p+")?(?:\\s+"+p+")?(?:\\s+"+p+")?)?"+y,"gi"),L=new RegExp("(box-shadow\\s*:\\s*(?:inset\\s*)?)"+p,"gi"),B=new RegExp("(text-shadow\\s*:\\s*)"+p+"(\\s*)"+g,"gi"),F=new RegExp("(text-shadow\\s*:\\s*)"+g+"(\\s*)"+p,"gi"),H=new RegExp("(text-shadow\\s*:\\s*)"+p,"gi"),X=new RegExp("(transform\\s*:[^;}]*)(translateX\\s*\\(\\s*)"+p+"(\\s*\\))","gi"),Y=new RegExp("(transform\\s*:[^;}]*)(translate\\s*\\(\\s*)"+p+"((?:\\s*,\\s*"+p+"){0,2}\\s*\\))","gi");function U(e,t,o){var r,i;return"%"===o.slice(-1)&&(-1!==(r=o.indexOf("."))?(i=o.length-r-2,o=(o=100-parseFloat(o)).toFixed(i)+"%"):o=100-parseFloat(o)+"%"),t+o}function G(e){switch(e.length){case 4:e=[e[1],e[0],e[3],e[2]];break;case 3:e=[e[1],e[0],e[1],e[2]];break;case 2:e=[e[1],e[0]];break;case 1:e=[e[0]]}return e.join(" ")}function V(e,t){var o=[].slice.call(arguments),r=o.slice(2,6).filter((function(e){return e})),i=o.slice(6,10).filter((function(e){return e})),n=o[10]||"";return t+(i.length?G(r)+" / "+G(i):G(r))+n}function W(e){return 0===parseFloat(e)?e:"-"===e[0]?e.slice(1):"-"+e}function D(e,t,o){return t+W(o)}function K(e,t,o,r,i){return t+o+W(r)+i}function Z(e,t,o,r,i){return t+o+r+W(i)}return{transform:function(o,i){var n=new r(x,"`NOFLIP_SINGLE`"),l=new r(k,"`NOFLIP_CLASS`"),a=new r(w,t);return o=a.tokenize(l.tokenize(n.tokenize(o.replace("`","%60")))),i.transformDirInUrl&&(o=o.replace(C,"$1"+e).replace(T,"$1ltr").replace($,"rtl")),i.transformEdgeInUrl&&(o=o.replace(O,"$1"+e).replace(z,"$1left").replace($,"right")),o=o.replace(S,"$1"+e).replace(_,"$1ltr").replace($,"rtl").replace(j,"$1"+e).replace(R,"$1left").replace($,"right").replace(q,"$1$2"+e).replace(E,"$1$2e-resize").replace($,"w-resize").replace(M,V).replace(L,D).replace(B,Z).replace(F,Z).replace(H,D).replace(X,K).replace(Y,K).replace(P,"$1$2$3$8$5$6$7$4$9").replace(A,"$1$2$3$8$5$6$7$4$9").replace(N,U).replace(I,U),n.detokenize(l.detokenize(a.detokenize(o)))}}},e.exports?t.transform=function(e,t,r){var i;return"object"==typeof t?i=t:(i={},"boolean"==typeof t&&(i.transformDirInUrl=t),"boolean"==typeof r&&(i.transformEdgeInUrl=r)),o.transform(e,i)}:"undefined"!=typeof window&&(window.cssjanus=o)},679:(e,t,o)=>{"use strict";var r=o(296),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},l={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a={};function s(e){return r.isMemo(e)?l:a[e.$$typeof]||i}a[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a[r.Memo]=l;var d=Object.defineProperty,c=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,g=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,o,r){if("string"!=typeof o){if(h){var i=g(o);i&&i!==h&&e(t,i,r)}var l=c(o);u&&(l=l.concat(u(o)));for(var a=s(t),m=s(o),b=0;b<l.length;++b){var f=l[b];if(!(n[f]||r&&r[f]||m&&m[f]||a&&a[f])){var v=p(o,f);try{d(t,f,v)}catch(e){}}}}return t}},103:(e,t)=>{"use strict";var o="function"==typeof Symbol&&Symbol.for,r=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,n=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,a=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,d=o?Symbol.for("react.context"):60110,c=o?Symbol.for("react.async_mode"):60111,u=o?Symbol.for("react.concurrent_mode"):60111,p=o?Symbol.for("react.forward_ref"):60112,g=o?Symbol.for("react.suspense"):60113,h=o?Symbol.for("react.suspense_list"):60120,m=o?Symbol.for("react.memo"):60115,b=o?Symbol.for("react.lazy"):60116,f=o?Symbol.for("react.block"):60121,v=o?Symbol.for("react.fundamental"):60117,y=o?Symbol.for("react.responder"):60118,$=o?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case c:case u:case n:case a:case l:case g:return e;default:switch(e=e&&e.$$typeof){case d:case p:case b:case m:case s:return e;default:return t}}case i:return t}}}function x(e){return w(e)===u}t.AsyncMode=c,t.ConcurrentMode=u,t.ContextConsumer=d,t.ContextProvider=s,t.Element=r,t.ForwardRef=p,t.Fragment=n,t.Lazy=b,t.Memo=m,t.Portal=i,t.Profiler=a,t.StrictMode=l,t.Suspense=g,t.isAsyncMode=function(e){return x(e)||w(e)===c},t.isConcurrentMode=x,t.isContextConsumer=function(e){return w(e)===d},t.isContextProvider=function(e){return w(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return w(e)===p},t.isFragment=function(e){return w(e)===n},t.isLazy=function(e){return w(e)===b},t.isMemo=function(e){return w(e)===m},t.isPortal=function(e){return w(e)===i},t.isProfiler=function(e){return w(e)===a},t.isStrictMode=function(e){return w(e)===l},t.isSuspense=function(e){return w(e)===g},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===u||e===a||e===l||e===g||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===m||e.$$typeof===s||e.$$typeof===d||e.$$typeof===p||e.$$typeof===v||e.$$typeof===y||e.$$typeof===$||e.$$typeof===f)},t.typeOf=w},296:(e,t,o)=>{"use strict";e.exports=o(103)},891:e=>{"use strict";e.exports=o}},t={};function r(o){var i=t[o];if(void 0!==i)return i.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,r),n.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{"use strict";r.r(i),r.d(i,{CacheProvider:()=>ue,Global:()=>he,GlobalStyle:()=>zt,Theme2Area:()=>io,Theme2Context:()=>Qe,ThemeArea:()=>no,ThemeContext:()=>pe,ThemeManager:()=>At,ThemeProvider:()=>et,ThemeStore:()=>Ct,ThemeSwitcher:()=>Ze,UseTheme2Context:()=>Ke,augmentThemeColor:()=>Fe,caret:()=>qe,createBody:()=>_e,createColoration:()=>Se,createColors:()=>Ye,createEmotionCache:()=>de,createEmotionRTLCache:()=>ce,createFocusedStyles:()=>Ie,createFooter:()=>Re,createHeader:()=>je,createLink:()=>Oe,createPalette:()=>He,createTheme:()=>jt,createThemeVariables:()=>Ot,formValidation:()=>Ne,getBoxStyles:()=>Ce,getBuilderThemeVariables:()=>Nt,getChartComponentsStyles:()=>fe,getComponentBasicStyle:()=>dt,getComponentVariants:()=>Mt,getGlobalStyle:()=>ct,getLoadingStyles:()=>Ge,getNavigationVariables:()=>Bt,getQuillCoreStyle:()=>be,getTheme:()=>Dt,getTheme2:()=>Kt,getTheme2Style:()=>Wt,getThemeColorValue:()=>Xt,getThemeModule:()=>Ut,getThemeStyle:()=>Vt,globalStyles:()=>De,hover:()=>Ee,hoverFocus:()=>Pe,isCSSVariable:()=>Ht,isThemeLoaded:()=>Yt,loadTheme:()=>eo,loadingUtilityClasses:()=>Ve,navDivider:()=>Ae,popperPointer:()=>we,registerComponentBasicStyle:()=>lt,registerComponentBasicStyles:()=>at,registerStyles:()=>st,scrollbarStyles:()=>ze,setThemeModule:()=>Gt,styled:()=>ge,useTheme:()=>ot,useTheme2:()=>rt,useUseTheme2:()=>tt,withBuilderStyles:()=>mt,withBuilderTheme:()=>ro,withStyles:()=>gt,withTheme:()=>to,withTheme2:()=>oo,withTheme2Styles:()=>ht});var e=r(891),t=r(832),o=r.n(t),n="-ms-",l="-moz-",a="-webkit-",s="comm",d="rule",c="decl",u="@import",p="@keyframes",g=Math.abs,h=String.fromCharCode,m=Object.assign;function b(e){return e.trim()}function f(e,t,o){return e.replace(t,o)}function v(e,t){return e.indexOf(t)}function y(e,t){return 0|e.charCodeAt(t)}function $(e,t,o){return e.slice(t,o)}function w(e){return e.length}function x(e){return e.length}function k(e,t){return t.push(e),e}function S(e,t){for(var o="",r=x(e),i=0;i<r;i++)o+=t(e[i],i,e,t)||"";return o}function _(e,t,o,r){switch(e.type){case u:case c:return e.return=e.return||e.value;case s:return"";case p:return e.return=e.value+"{"+S(e.children,r)+"}";case d:e.value=e.props.join(",")}return w(o=S(e.children,r))?e.return=e.value+"{"+o+"}":""}var j=1,R=1,O=0,z=0,C=0,T="";function q(e,t,o,r,i,n,l){return{value:e,root:t,parent:o,type:r,props:i,children:n,line:j,column:R,length:l,return:""}}function E(e,t){return m(q("",null,null,"",null,null,0),e,{length:-e.length},t)}function P(){return C=z>0?y(T,--z):0,R--,10===C&&(R=1,j--),C}function A(){return C=z<O?y(T,z++):0,R++,10===C&&(R=1,j++),C}function N(){return y(T,z)}function I(){return z}function M(e,t){return $(T,e,t)}function L(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function B(e){return j=R=1,O=w(T=e),z=0,[]}function F(e){return T="",e}function H(e){return b(M(z-1,U(91===e?e+2:40===e?e+1:e)))}function X(e){for(;(C=N())&&C<33;)A();return L(e)>2||L(C)>3?"":" "}function Y(e,t){for(;--t&&A()&&!(C<48||C>102||C>57&&C<65||C>70&&C<97););return M(e,I()+(t<6&&32==N()&&32==A()))}function U(e){for(;A();)switch(C){case e:return z;case 34:case 39:34!==e&&39!==e&&U(C);break;case 40:41===e&&U(e);break;case 92:A()}return z}function G(e,t){for(;A()&&e+C!==57&&(e+C!==84||47!==N()););return"/*"+M(t,z-1)+"*"+h(47===e?e:A())}function V(e){for(;!L(N());)A();return M(e,z)}function W(e){return F(D("",null,null,null,[""],e=B(e),0,[0],e))}function D(e,t,o,r,i,n,l,a,s){for(var d=0,c=0,u=l,p=0,g=0,m=0,b=1,$=1,x=1,S=0,_="",j=i,R=n,O=r,z=_;$;)switch(m=S,S=A()){case 40:if(108!=m&&58==y(z,u-1)){-1!=v(z+=f(H(S),"&","&\f"),"&\f")&&(x=-1);break}case 34:case 39:case 91:z+=H(S);break;case 9:case 10:case 13:case 32:z+=X(m);break;case 92:z+=Y(I()-1,7);continue;case 47:switch(N()){case 42:case 47:k(Z(G(A(),I()),t,o),s);break;default:z+="/"}break;case 123*b:a[d++]=w(z)*x;case 125*b:case 59:case 0:switch(S){case 0:case 125:$=0;case 59+c:g>0&&w(z)-u&&k(g>32?Q(z+";",r,o,u-1):Q(f(z," ","")+";",r,o,u-2),s);break;case 59:z+=";";default:if(k(O=K(z,t,o,d,c,i,a,_,j=[],R=[],u),n),123===S)if(0===c)D(z,t,O,O,j,n,u,a,R);else switch(99===p&&110===y(z,3)?100:p){case 100:case 109:case 115:D(e,O,O,r&&k(K(e,O,O,0,0,i,a,_,i,j=[],u),R),i,R,u,a,r?j:R);break;default:D(z,O,O,O,[""],R,0,a,R)}}d=c=g=0,b=x=1,_=z="",u=l;break;case 58:u=1+w(z),g=m;default:if(b<1)if(123==S)--b;else if(125==S&&0==b++&&125==P())continue;switch(z+=h(S),S*b){case 38:x=c>0?1:(z+="\f",-1);break;case 44:a[d++]=(w(z)-1)*x,x=1;break;case 64:45===N()&&(z+=H(A())),p=N(),c=u=w(_=z+=V(I())),S++;break;case 45:45===m&&2==w(z)&&(b=0)}}return n}function K(e,t,o,r,i,n,l,a,s,c,u){for(var p=i-1,h=0===i?n:[""],m=x(h),v=0,y=0,w=0;v<r;++v)for(var k=0,S=$(e,p+1,p=g(y=l[v])),_=e;k<m;++k)(_=b(y>0?h[k]+" "+S:f(S,/&\f/g,h[k])))&&(s[w++]=_);return q(e,t,o,0===i?d:a,s,c,u)}function Z(e,t,o){return q(e,t,o,s,h(C),$(e,2,-2),0)}function Q(e,t,o,r){return q(e,t,o,c,$(e,0,r),$(e,r+1,-1),r)}function J(e,t,o){switch(e.type){case u:case c:case s:return e.return=e.return||e.value;case d:e.value=Array.isArray(e.props)?e.props.join(","):e.props,Array.isArray(e.children)&&e.children.forEach((function(e){e.type===s&&(e.children=e.value)}))}var r=S(Array.prototype.concat(e.children),J);return w(r)?e.return=e.value+"{"+r+"}":""}function ee(e,t,r,i){if(e.type===p||"@supports"===e.type||e.type===d&&(!e.parent||"@media"===e.parent.type||e.parent.type===d)){var n=o().transform(J(e));e.children=n?W(n)[0].children:[],e.return=""}}Object.defineProperty(ee,"name",{value:"stylisRTLPlugin"});const te=ee;var oe=function(){function e(e){var t=this;this._insertTag=function(e){var o;o=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,o),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var o=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{o.insertRule(e,o.cssRules.length)}catch(e){}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),re=function(e,t,o){for(var r=0,i=0;r=i,i=N(),38===r&&12===i&&(t[o]=1),!L(i);)A();return M(e,z)},ie=new WeakMap,ne=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,o=e.parent,r=e.column===o.column&&e.line===o.line;"rule"!==o.type;)if(!(o=o.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||ie.get(o))&&!r){ie.set(e,!0);for(var i=[],n=function(e,t){return F(function(e,t){var o=-1,r=44;do{switch(L(r)){case 0:38===r&&12===N()&&(t[o]=1),e[o]+=re(z-1,t,o);break;case 2:e[o]+=H(r);break;case 4:if(44===r){e[++o]=58===N()?"&\f":"",t[o]=e[o].length;break}default:e[o]+=h(r)}}while(r=A());return e}(B(e),t))}(t,i),l=o.props,a=0,s=0;a<n.length;a++)for(var d=0;d<l.length;d++,s++)e.props[s]=i[a]?n[a].replace(/&\f/g,l[d]):l[d]+" "+n[a]}}},le=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}};function ae(e,t){switch(function(e,t){return 45^y(e,0)?(((t<<2^y(e,0))<<2^y(e,1))<<2^y(e,2))<<2^y(e,3):0}(e,t)){case 5103:return a+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return a+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return a+e+l+e+n+e+e;case 6828:case 4268:return a+e+n+e+e;case 6165:return a+e+n+"flex-"+e+e;case 5187:return a+e+f(e,/(\w+).+(:[^]+)/,a+"box-$1$2"+n+"flex-$1$2")+e;case 5443:return a+e+n+"flex-item-"+f(e,/flex-|-self/,"")+e;case 4675:return a+e+n+"flex-line-pack"+f(e,/align-content|flex-|-self/,"")+e;case 5548:return a+e+n+f(e,"shrink","negative")+e;case 5292:return a+e+n+f(e,"basis","preferred-size")+e;case 6060:return a+"box-"+f(e,"-grow","")+a+e+n+f(e,"grow","positive")+e;case 4554:return a+f(e,/([^-])(transform)/g,"$1"+a+"$2")+e;case 6187:return f(f(f(e,/(zoom-|grab)/,a+"$1"),/(image-set)/,a+"$1"),e,"")+e;case 5495:case 3959:return f(e,/(image-set\([^]*)/,a+"$1$`$1");case 4968:return f(f(e,/(.+:)(flex-)?(.*)/,a+"box-pack:$3"+n+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+a+e+e;case 4095:case 3583:case 4068:case 2532:return f(e,/(.+)-inline(.+)/,a+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(w(e)-1-t>6)switch(y(e,t+1)){case 109:if(45!==y(e,t+4))break;case 102:return f(e,/(.+:)(.+)-([^]+)/,"$1"+a+"$2-$3$1"+l+(108==y(e,t+3)?"$3":"$2-$3"))+e;case 115:return~v(e,"stretch")?ae(f(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==y(e,t+1))break;case 6444:switch(y(e,w(e)-3-(~v(e,"!important")&&10))){case 107:return f(e,":",":"+a)+e;case 101:return f(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+a+(45===y(e,14)?"inline-":"")+"box$3$1"+a+"$2$3$1"+n+"$2box$3")+e}break;case 5936:switch(y(e,t+11)){case 114:return a+e+n+f(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return a+e+n+f(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return a+e+n+f(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return a+e+n+e+e}return e}var se=[function(e,t,o,r){if(e.length>-1&&!e.return)switch(e.type){case c:e.return=ae(e.value,e.length);break;case p:return S([E(e,{value:f(e.value,"@","@"+a)})],r);case d:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=/(::plac\w+|:read-\w+)/.exec(e))?e[0]:e}(t)){case":read-only":case":read-write":return S([E(e,{props:[f(t,/:(read-\w+)/,":-moz-$1")]})],r);case"::placeholder":return S([E(e,{props:[f(t,/:(plac\w+)/,":"+a+"input-$1")]}),E(e,{props:[f(t,/:(plac\w+)/,":-moz-$1")]}),E(e,{props:[f(t,/:(plac\w+)/,n+"input-$1")]})],r)}return""}))}}];const de=function(e){var t=e.key;if("css"===t){var o=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(o,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var r,i,n=e.stylisPlugins||se,l={},a=[];r=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),o=1;o<t.length;o++)l[t[o]]=!0;a.push(e)}));var s,d,c,u,p=[_,(u=function(e){s.insert(e)},function(e){e.root||(e=e.return)&&u(e)})],g=(d=[ne,le].concat(n,p),c=x(d),function(e,t,o,r){for(var i="",n=0;n<c;n++)i+=d[n](e,t,o,r)||"";return i});i=function(e,t,o,r){s=o,S(W(e?e+"{"+t.styles+"}":t.styles),g),r&&(h.inserted[t.name]=!0)};var h={key:t,sheet:new oe({key:t,container:r,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:l,registered:{},insert:i};return h.sheet.hydrate(a),h};function ce(e=!1){return de(e?{stylisPlugins:[te],key:"app-root-emotion-cache-rtl"}:{key:"app-root-emotion-cache-ltr"})}const ue=e.CacheProvider,pe=e.ThemeContext,ge=e.styled,he=e.Global,me=t=>e.React.createElement(e.ThemeProvider,Object.assign({},t));function be(e){var t,o;return`\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box;\n    line-height: 1.42;\n    height: 100%;\n    outline: none;\n    overflow-y: auto;\n    overflow-x: hidden;\n    tab-size: 4;\n    -moz-tab-size: 4;\n    word-wrap: break-word;\n    white-space: pre-wrap;\n    & >* {\n      cursor: text;\n    }\n    p,\n    ol,\n    ul,\n    pre,\n    blockquote,\n    h1,\n    h2,\n    h3,\n    h4,\n    h5,\n    h6 {\n      margin: 0;\n      padding: 0;\n      counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n    }\n    ol,\n    ul {\n      padding-left: 1.5em;\n    }\n    p {\n      margin-bottom: 0;\n    }\n    ul>li,\n    ol>li{\n      list-style-type: none;\n    }\n    ul>li::before {\n        content: '•';\n    }\n    ul[data-checked=true],\n    ul[data-checked=false] {\n      pointer-events: none;\n    }\n    ul[data-checked=true]>li *,\n    ul[data-checked=false]>li * {\n      pointer-events: all;\n    }\n    ul[data-checked=true]>li::before,\n    ul[data-checked=false]>li::before {\n      color: #777;\n      cursor: pointer;\n      pointer-events: all;\n    }\n    ul[data-checked=true]>li::before {\n      content: '\\2611';\n    }\n    ul[data-checked=false]>li::before {\n      content: '\\2610';\n    }\n    li::before {\n      display: inline-block;\n      white-space: nowrap;\n      width: 1.2em;\n    }\n    li:not(.ql-direction-rtl)::before {\n      margin-left: -1.5em;\n      margin-right: 0.3em;\n      text-align: right;\n    }\n    li.ql-direction-rtl::before {\n      margin-left: 0.3em;\n      margin-right: -1.5em;\n    }\n    ol li {\n      counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n      counter-increment: list-0;\n    }\n    ol li:before {\n      content: counter(list-0, decimal) '. ';\n    }\n    ol li.ql-indent-1 {\n      counter-increment: list-1;\n    }\n    ol li.ql-indent-1:before {\n      content: counter(list-1, lower-alpha) '. ';\n    }\n    ol li.ql-indent-1 {\n      counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n    }\n    ol li.ql-indent-2 {\n      counter-increment: list-2;\n    }\n    ol li.ql-indent-2:before {\n      content: counter(list-2, lower-roman) '. ';\n    }\n    ol li.ql-indent-2 {\n      counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n    }\n    ol li.ql-indent-3 {\n      counter-increment: list-3;\n    }\n    ol li.ql-indent-3:before {\n      content: counter(list-3, decimal) '. ';\n    }\n    ol li.ql-indent-3 {\n      counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;\n    }\n    ol li.ql-indent-4 {\n      counter-increment: list-4;\n    }\n    ol li.ql-indent-4:before {\n      content: counter(list-4, lower-alpha) '. ';\n    }\n    ol li.ql-indent-4 {\n      counter-reset: list-5 list-6 list-7 list-8 list-9;\n    }\n    ol li.ql-indent-5 {\n      counter-increment: list-5;\n    }\n    ol li.ql-indent-5:before {\n      content: counter(list-5, lower-roman) '. ';\n    }\n    ol li.ql-indent-5 {\n      counter-reset: list-6 list-7 list-8 list-9;\n    }\n    ol li.ql-indent-6 {\n      counter-increment: list-6;\n    }\n    ol li.ql-indent-6:before {\n      content: counter(list-6, decimal) '. ';\n    }\n    ol li.ql-indent-6 {\n      counter-reset: list-7 list-8 list-9;\n    }\n    ol li.ql-indent-7 {\n      counter-increment: list-7;\n    }\n    ol li.ql-indent-7:before {\n      content: counter(list-7, lower-alpha) '. ';\n    }\n    ol li.ql-indent-7 {\n      counter-reset: list-8 list-9;\n    }\n    ol li.ql-indent-8 {\n      counter-increment: list-8;\n    }\n    ol li.ql-indent-8:before {\n      content: counter(list-8, lower-roman) '. ';\n    }\n    ol li.ql-indent-8 {\n      counter-reset: list-9;\n    }\n    ol li.ql-indent-9 {\n      counter-increment: list-9;\n    }\n    ol li.ql-indent-9:before {\n      content: counter(list-9, decimal) '. ';\n    }\n    .ql-indent-1:not(.ql-direction-rtl) {\n      padding-left: 3em;\n    }\n    li.ql-indent-1:not(.ql-direction-rtl) {\n      padding-left: 4.5em;\n    }\n    .ql-indent-1.ql-direction-rtl.ql-align-right {\n      padding-right: 3em;\n    }\n    li.ql-indent-1.ql-direction-rtl.ql-align-right {\n      padding-right: 4.5em;\n    }\n    .ql-indent-2:not(.ql-direction-rtl) {\n      padding-left: 6em;  \n    }\n    li.ql-indent-2:not(.ql-direction-rtl) {\n      padding-left: 7.5em;\n    }\n    .ql-indent-2.ql-direction-rtl.ql-align-right {\n      padding-right: 6em;\n    }\n    li.ql-indent-2.ql-direction-rtl.ql-align-right {\n      padding-right: 7.5em;\n    }\n    .ql-indent-3:not(.ql-direction-rtl) {\n      padding-left: 9em;\n    }\n    li.ql-indent-3:not(.ql-direction-rtl) {\n      padding-left: 10.5em;\n    }\n    .ql-indent-3.ql-direction-rtl.ql-align-right {\n      padding-right: 9em;\n    }\n    li.ql-indent-3.ql-direction-rtl.ql-align-right {\n      padding-right: 10.5em;\n    }\n    .ql-indent-4:not(.ql-direction-rtl) {\n      padding-left: 12em;\n    }\n    li.ql-indent-4:not(.ql-direction-rtl) {\n      padding-left: 13.5em;\n    }\n    .ql-indent-4.ql-direction-rtl.ql-align-right {\n      padding-right: 12em;\n    }\n    li.ql-indent-4.ql-direction-rtl.ql-align-right {\n      padding-right: 13.5em;\n    }\n    .ql-indent-5:not(.ql-direction-rtl) {\n      padding-left: 15em;\n    }\n    li.ql-indent-5:not(.ql-direction-rtl) {\n      padding-left: 16.5em;\n    }\n    .ql-indent-5.ql-direction-rtl.ql-align-right {\n      padding-right: 15em;\n    }\n    li.ql-indent-5.ql-direction-rtl.ql-align-right {\n      padding-right: 16.5em;\n    }\n    .ql-indent-6:not(.ql-direction-rtl) {\n      padding-left: 18em;\n    }\n    li.ql-indent-6:not(.ql-direction-rtl) {\n      padding-left: 19.5em;\n    }\n    .ql-indent-6.ql-direction-rtl.ql-align-right {\n      padding-right: 18em;\n    }\n    li.ql-indent-6.ql-direction-rtl.ql-align-right {\n      padding-right: 19.5em;\n    }\n    .ql-indent-7:not(.ql-direction-rtl) {\n      padding-left: 21em;\n    }\n    li.ql-indent-7:not(.ql-direction-rtl) {\n      padding-left: 22.5em;\n    }\n    .ql-indent-7.ql-direction-rtl.ql-align-right {\n      padding-right: 21em;\n    }\n    li.ql-indent-7.ql-direction-rtl.ql-align-right {\n      padding-right: 22.5em;\n    }\n    .ql-indent-8:not(.ql-direction-rtl) {\n      padding-left: 24em;\n    }\n    li.ql-indent-8:not(.ql-direction-rtl) {\n      padding-left: 25.5em;\n    }\n    .ql-indent-8.ql-direction-rtl.ql-align-right {\n      padding-right: 24em;\n    }\n    li.ql-indent-8.ql-direction-rtl.ql-align-right {\n      padding-right: 25.5em;\n    }\n    .ql-indent-9:not(.ql-direction-rtl) {\n      padding-left: 27em;\n    }\n    li.ql-indent-9:not(.ql-direction-rtl) {\n      padding-left: 28.5em;\n    }\n    .ql-indent-9.ql-direction-rtl.ql-align-right {\n      padding-right: 27em;\n    }\n    li.ql-indent-9.ql-direction-rtl.ql-align-right {\n      padding-right: 28.5em;\n    }\n    img {\n      max-width: 100%;\n    }\n    .ql-direction-rtl {\n      direction: rtl;\n      text-align: inherit;\n    }\n    .ql-align-center {\n      text-align: center;\n    }\n    .ql-align-justify {\n      text-align: justify;\n    }\n    .ql-align-right {\n      text-align: right;\n    }\n    \n    .ql-blank,\n    &.ql-blank {\n      &::before {\n        opacity: 0.6;\n        content: attr(data-placeholder);\n        font-style: italic;\n        left: .5rem;\n        right: .5rem;\n        pointer-events: none;\n        position: absolute;\n      }\n    }\n    /** should be over write by theme style */\n    .ql-size-small {\n      font-size: 0.75em;\n    }\n    .ql-size-large {\n      font-size: 1.5em;\n    }\n    .ql-size-huge {\n      font-size: 2.5em;\n    }\n    blockquote {\n      border-left: 4px solid #ccc;\n      margin-bottom: 5px;\n      margin-top: 5px;\n      padding-left: 16px;\n    }\n    code {\n      background-color: #f0f0f0;\n      border-radius: 3px;\n    }\n    pre {\n      white-space: pre-wrap;\n    }\n    code {\n      font-size: 85%;\n      padding: 2px 4px;\n    }\n    exp {\n      cursor: pointer;\n      user-select: auto;\n      &:hover {\n        outline: 1px solid white;\n        background: #d8d8d8;\n      }\n    }\n    a:not([href]) {\n      color: ${null!==(o=null===(t=null==e?void 0:e.link)||void 0===t?void 0:t.color)&&void 0!==o?o:"#076fe5"} !important;\n      cursor: pointer;\n      text-decoration: none;\n      &:hover {\n        text-decoration: underline;\n      }\n    }\n    a {\n      &.invalid {\n        opacity: 0.5;\n        background: red;\n        outline: 1px solid white;\n      }\n    }\n  `}const fe=()=>e.css`
    :root, :host {
      --arcgis-charts-bar-chart-width: 100%;
      --arcgis-charts-bar-chart-height: 100%;
      --arcgis-charts-pie-chart-width: 100%;
      --arcgis-charts-pie-chart-height: 100%;
      --arcgis-charts-line-chart-width: 100%;
      --arcgis-charts-line-chart-height: 100%;
      --arcgis-charts-histogram-width: 100%;
      --arcgis-charts-histogram-height: 100%;
      --arcgis-charts-scatter-plot-width: 100%;
      --arcgis-charts-scatter-plot-height: 100%;
    }
  `,ve={left:"right",right:"left",top:"bottom",bottom:"top"};function ye(e,t){return!t||"left"!==e&&"right"!==e?ve[e]:e}function $e(e,t){return t?"left"===e?"right":"right"===e?"left":e:e}function we(t){var o;const r=(0,e.getAppStore)().getState().appContext.isRTL,i=null==t?void 0:t.border,n=null==t?void 0:t.background,l=(null!==(o=null==t?void 0:t.size)&&void 0!==o?o:12)+"px";return e.css`
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
    ${["left","right","top","bottom"].map((t=>{var o,a;return e.css`
      &[data-popper-placement^="${t}"] {
        .jimu-popper--arrow {
          ${ye(t,r)}: -${l};
          &::before,
          &::after {
            border-${ye(t,r)}-width: 0;
            border-${$e(t,r)}-color: ${null!==(o=null==i?void 0:i.color)&&void 0!==o?o:"inherit"};
            ${ye(t,r)}: 0;
          }
          &::after {
            border-${$e(t,r)}-color: ${null!=n?n:"inherit"};
            ${ye(t,r)}: ${null!==(a=null==i?void 0:i.width)&&void 0!==a?a:"1px"};
          }
        }
      }
    `}))}
  `}function xe(e){return null!==e&&"object"==typeof e&&e.constructor===Object}const ke=(e,t,o={clone:!0})=>{const r=o.clone?Object.assign({},e):e;return xe(e)&&xe(t)&&Object.keys(t).forEach((i=>{"__proto__"!==i&&(xe(t[i])&&i in e&&xe(e[i])?r[i]=ke(e[i],t[i],o):r[i]=t[i])})),r},Se=(e={},t)=>{let o={minimal:{header:{bg:t.light,color:t.dark},body:{bg:t.white,color:t.dark},footer:{bg:t.white,color:t.dark}},default:{header:{bg:t.palette.primary[700],color:t.light},body:{bg:t.palette.light[100],color:t.dark},footer:{bg:t.palette.light[100],color:t.dark}}};return o=ke(o,e),o},_e=(e={},t)=>{var o,r,i,n;const{coloration:l,colorationVariants:a,colors:s,typography:d}=t;let c={bg:(null===(r=null===(o=a[l])||void 0===o?void 0:o.body)||void 0===r?void 0:r.bg)||s.white,color:(null===(n=null===(i=a[l])||void 0===i?void 0:i.body)||void 0===n?void 0:n.color)||s.black,fontFamily:d.fontFamilyBase,fontWeight:d.weights.medium,fontSize:d.fontSizeBase,fontStyle:"unset",lineHeight:d.lineHeights.medium};return c=Object.assign(Object.assign({},c),e),c},je=(e={},t)=>{var o,r,i,n;const{coloration:l,colorationVariants:a,colors:s}=t;let d={bg:(null===(r=null===(o=a[l])||void 0===o?void 0:o.header)||void 0===r?void 0:r.bg)||s.primary,color:(null===(n=null===(i=a[l])||void 0===i?void 0:i.header)||void 0===n?void 0:n.color)||s.white};return d=Object.assign(Object.assign({},d),e),d},Re=(e={},t)=>{var o,r,i,n;const{coloration:l,colorationVariants:a,colors:s}=t;let d={bg:(null===(r=null===(o=a[l])||void 0===o?void 0:o.footer)||void 0===r?void 0:r.bg)||s.primary,color:(null===(n=null===(i=a[l])||void 0===i?void 0:i.footer)||void 0===n?void 0:n.color)||s.white};return d=Object.assign(Object.assign({},d),e),d},Oe=(e={},t)=>{let o={color:t.primary,decoration:"none",hover:{color:t.palette.primary[600],decoration:"underline"}};return o=ke(o,e),o},ze=(t,o)=>{const r=o?`\n    ${o} ::-webkit-scrollbar {\n      width: 6px;\n      height: 6px;\n    }\n    ${o} {\n      scrollbar-width: thin;\n    }\n  `:"\n  ::-webkit-scrollbar {\n    width: 6px;\n    height: 6px;\n  }\n  scrollbar-width: thin;\n  ",i=o?`\n  ${o} ::-webkit-scrollbar-track,\n  ${o} ::-webkit-scrollbar-corner {\n    background: ${t.colors.palette.light[200]};\n  }\n  ${o} ::-webkit-scrollbar-thumb {\n    background: ${t.colors.palette.light[600]};\n  }\n  ${o} ::-webkit-scrollbar-thumb:hover {\n    background: ${t.colors.palette.light[900]};\n  }\n  ${o} {\n    scrollbar-color: ${t.colors.palette.light[600]} ${t.colors.palette.light[200]};\n  }\n`:`\n  ::-webkit-scrollbar-track,\n  ::-webkit-scrollbar-corner {\n    background: ${t.colors.palette.light[200]};\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ${t.colors.palette.light[600]};\n  }\n\n  ::-webkit-scrollbar-thumb:hover {\n    background: ${t.colors.palette.light[900]};\n  }\n  scrollbar-color: ${t.colors.palette.light[600]} ${t.colors.palette.light[200]};\n`;return e.css`
    ${r}
    ${i}
  `};function Ce(t){var o,r,i;return t&&e.css`
    color: ${t.color};
    background-color: ${t.bg};
    ${t.border&&e.css`
      border-width: ${t.border.width};
      ${t.border.width&&`border-style: ${null!==(r=null===(o=t.border)||void 0===o?void 0:o.type)&&void 0!==r?r:"solid"};`}
      border-color: ${t.border.color};
    `}
    border-radius: ${t.borderRadius};
    box-shadow: ${t.shadow};
    font-weight: ${t.bold?"bold":t.fontWeight};
    text-decoration: ${t.decoration||(i=t,i?i.underline&&i.strike?"underline line-through":i.underline?"underline":i.strike?"line-through":"none":"none")};
    font-style: ${t.italic?"italic":"normal"};
  `}const Te={up:"180deg",down:null,left:"90deg",right:"-90deg"};function qe(e){const t=Te[e];return`\n    ${t&&`\n      transform: rotate(${t});\n    `}\n  `}function Ee(e){return`\n    &:hover {\n      ${e}\n    }\n  `}function Pe(e){return`\n    &:hover,\n    &:focus {\n      ${e}\n    }\n  `}function Ae(e,t){return`\n    height: 0;\n    margin: ${t};\n    overflow: hidden;\n    border-top: 1px solid ${e};\n  `}function Ne(t,o){const r=o&&o.colors?t?o.colors.success:o.colors.danger:t?"green":"red",i=t?"valid":"invalid";return e.css`
  &.is-${i} {
    border-color: ${r||(t?"green":"red")};
    ${!t&&`background: ${e.polished.rgba(r,.1)}`};
  }
  `}const Ie=t=>(0,e.Immutable)({color:t.palette.primary[700],width:"2px",offset:"2px"}),Me={white:"#fff",black:"#000",transparent:"transparent"},Le={primary:"#076fe5",secondary:"#c5c5c5",light:"#f0f0f0",dark:"#050505",info:"#089bdc",success:"#09cf74",warning:"#ffea1d",danger:"#e1001b"},Be={primary:{100:"#e6f2ff",200:"#acd3ff",300:"#65adff",400:"#2c8fff",500:"#076fe5",600:"#005eca",700:"#004ca3",800:"#003c82",900:"#002958"},secondary:{100:"#f0f0f0",200:"#e3e3e3",300:"#d5d5d5",400:"#c5c5c5",500:"#b6b6b6",600:"#a8a8a8",700:"#989898",800:"#8b8b8b",900:"#828282"},light:{100:"#f0f0f0",200:"#e3e3e3",300:"#d5d5d5",400:"#c5c5c5",500:"#b6b6b6",600:"#a8a8a8",700:"#989898",800:"#8b8b8b",900:"#828282"},dark:{100:"#767676",200:"#6a6a6a",300:"#5e5e5e",400:"#525252",500:"#444444",600:"#363636",700:"#282828",800:"#181818",900:"#050505"},info:{100:"#e5f7ff",200:"#9fe2ff",300:"#60ceff",400:"#21bbff",500:"#089bdc",600:"#0077ac",700:"#005a82",800:"#003b56",900:"#002231"},success:{100:"#ebfff6",200:"#acffd9",300:"#56f8ad",400:"#16ed8a",500:"#09cf74",600:"#03b161",700:"#00904e",800:"#006838",900:"#004022"},warning:{100:"#fffdeb",200:"#fff9c3",300:"#fff592",400:"#fff05f",500:"#ffea1d",600:"#eed800",700:"#d4c000",800:"#b5a400",900:"#938500"},danger:{100:"#ffe9ec",200:"#ff94a1",300:"#ff5066",400:"#ff203c",500:"#e1001b",600:"#bf0017",700:"#9f0013",800:"#79000f",900:"#4a0009"}},Fe=(t,o)=>{var r,i;const n=null!==(r=null==o?void 0:o.count)&&void 0!==r?r:9;let l=Math.ceil(n/2);const a=null!==(i=null==o?void 0:o.isDark)&&void 0!==i&&i,s=null==o?void 0:o.name,d=[.1,.9];return!s||"light"!==s&&"dark"!==s||(a&&"light"===s||!a&&"dark"===s?(d[1]=.49,l=n):(d[0]=.5,l=1)),((t,o)=>{var r,i,n,l,a;const s=null!==(r=null==o?void 0:o.count)&&void 0!==r?r:9,d=null!==(i=null==o?void 0:o.level)&&void 0!==i?i:Math.ceil(s/2),c=null!==(n=null==o?void 0:o.range)&&void 0!==n?n:[.1,.9],u=null!==(l=null==o?void 0:o.reverse)&&void 0!==l&&l,p=null!==(a=null==o?void 0:o.classic)&&void 0!==a&&a,g=p?e.polished.lighten:e.polished.tint,h=p?e.polished.darken:e.polished.shade,m={},b=parseInt(""+100*(t=>{const o=e.polished.parseToHsl(t);return null==o?void 0:o.lightness})(t))/100;let f=(c[1]-b)/(d-1),v=(b-c[0])/(s-d);f=f>.1?.1:f,v=v>.1?.1:v;for(let e=1;e<=s;e++)m[100*(u?s-e+1:e)]=e===d?t:e<d?f<0?"#fff":g((d-e)*f,t):v<0?"#000":h((e-d)*v,t);return m})(t,{range:d,level:l,count:n,reverse:a,classic:!0})},He=(e,t)=>{const o=null==e?void 0:e.palette,r=t?Xe(Be):Be,i={};for(const n in Le)(null==o?void 0:o[n])?i[n]=o[n]:(null==e?void 0:e[n])?i[n]=Fe(e[n],{name:n,isDark:t}):i[n]=r[n];return i},Xe=e=>{const t={};return Object.keys(e).forEach((o=>{const r=Object.keys(e[o]).length;t[o]={};for(let i=Math.ceil(r/2);i>0;i--)t[o][100*i]=e[o][100*(r-i+1)],t[o][100*(r-i+1)]=e[o][100*i]})),t.dark=[t.light,t.light=t.dark][0],t},Ye=(e,t)=>{const o=((e,t)=>{const o=Object.assign(Object.assign({},Me),{white:t?Me.black:Me.white,black:t?Me.white:Me.black});for(const t in Me)(null==e?void 0:e[t])&&(o[t]=e[t]);return o})(e,t),r=((e,t)=>{const o=Object.assign(Object.assign({},Le),{dark:t?Le.light:Le.dark,light:t?Le.dark:Le.light});for(const t in Le)(null==e?void 0:e[t])&&(o[t]=e[t]);return o})(e,t),i=He(e,t);return Object.assign(Object.assign(Object.assign({},o),r),{palette:i})};function Ue(e,t){return`\n    .bg-${e} {\n      background-color: ${t} !important;\n    }\n    .border-${e} {\n      border-color: ${t} !important;\n    }\n    .text-${e} {\n      color: ${t} !important;\n    }\n  `}function Ge(t,o,r,i){return e.css`
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
        height: ${e.polished.math(`1.25 * ${o}`)};
      }
    }
    text-indent: -9999em;
    margin: auto;
    position: absolute;
    right: calc(50% - ${e.polished.math(`${t} * 0.5`)});
    top: calc(50% - ${e.polished.math(`${o} * 0.5`)});
    animation-delay: 0.16s !important;
    &:before,
    &:after,
    & {
      background: ${r};
      animation: loading-keys-${i} 0.8s infinite ease-in-out;
      width: ${t};
      height: ${o};
    }
    &:before,
    &:after {
      position: absolute;
      top: 0;
      content: '';
    }
    &:before {
      left: -${e.polished.math(`1.47 * ${t}`)};
    }
    &:after {
      left: ${e.polished.math(`1.47 * ${t}`)};
      animation-delay: 0.32s;
    }
  `}const Ve=t=>e.css`
    /* primary loading marker */
    .jimu-primary-loading {
      ${Ge("0.85rem","2rem",t.colors.palette.primary[500],"primary")};
    }

    /* secondary loading marker */
    .jimu-secondary-loading {
      ${Ge("0.51rem","1.2rem",e.polished.rgba(t.colors.palette.light[800],.5),"small")};
    }
  `;function We(t){return e.css`
    ${Ce(null==t?void 0:t.default)};
    &:hover {
      ${Ce(null==t?void 0:t.hover)};
      color: ${null==t?void 0:t.hover.color} !important;
    }
    &:disabled,
    &.esri-disabled {
      ${Ce(null==t?void 0:t.disabled)};
    }
    &.active {
      ${Ce(null==t?void 0:t.active)};
    }
    &:focus {
      ${Ce(null==t?void 0:t.focus)};
      outline: none;
    }
  `}const De=t=>{var o,r,i;const n=t.theme;if(!(null==n?void 0:n.colors))return null;const l=n.focusedStyles,a=`${l.width} solid ${l.color}`,s=`0 0px 0px 2px ${l.color}`;return e.css`
    ${e.css`
    @import url('${e.urlUtils.getFixedRootPath()}jimu-theme/base/assets/fonts/avenir/fonts.css');
  `}
    ${(t=>e.css`
    ${(t=>(null==t?void 0:t.colors)?e.css`
        :root {
          ${Object.keys(e.ThemeCommonColorKeys).map((o=>t.colors[e.ThemeCommonColorKeys[o]]?`--${e.ThemeCommonColorKeys[o]}: ${t.colors[e.ThemeCommonColorKeys[o]]};`:""))}
          ${Object.keys(e.ThemeThemeColorKeys).map((o=>t.colors[e.ThemeThemeColorKeys[o]]?`--${e.ThemeThemeColorKeys[o]}: ${t.colors[e.ThemeThemeColorKeys[o]]};`:""))}
    ${t.colors.palette?Object.keys(t.colors.palette).map((e=>e?Object.keys(t.colors.palette[e]).map((o=>`--${e}-${o}: ${t.colors.palette[e][o]};`)):"")):""}
    ${t.colors.orgSharedColors?Object.keys(t.colors.orgSharedColors).map((e=>e?Object.keys(t.colors.orgSharedColors[e]).map((o=>`--org-${e}-${o}: ${t.colors.orgSharedColors[e][o]};`)):"")):""}
        }
      `:"")(t)}
    ${(t=>{var o,r,i,n,l,a,s,d,c,u,p,g;const h=t&&t.typography,m="font-";return e.css`
    ${Object.keys(h.colors).map((e=>`\n          .text-${e}${"disabled"===e?", .text-muted":""} {\n            color: ${h.colors[e]} !important;\n          }\n        `))}
    ${Object.keys(h.variants).map((e=>{const t=h.variants[e];let o=`.${m}${e}`;return 0===e.indexOf("display")&&(o=`h${e.split("display")[1]}, .${m}h${e.split("display")[1]}`),`\n        ${o} {\n          font-family: ${t.fontFamily};\n          font-weight: ${t.fontWeight};\n          font-size: ${t.fontSize};\n          line-height: ${t.lineHeight};\n          color: ${t.color};\n        }\n      `}))}
    /** setting titles */
    .setting-text-level-0 {
      font-size: 14px !important;
      color: ${null===(r=null===(o=t.colors)||void 0===o?void 0:o.palette)||void 0===r?void 0:r.dark[800]} !important;
      font-weight: ${null===(i=t.typography)||void 0===i?void 0:i.weights.bold} !important;
    }
    .setting-text-level-1 {
      font-size: 14px !important;
      color: ${null===(l=null===(n=t.colors)||void 0===n?void 0:n.palette)||void 0===l?void 0:l.dark[600]} !important;
      font-weight: ${null===(a=t.typography)||void 0===a?void 0:a.weights.bold} !important;
    }
    .setting-text-level-2 {
      font-size: 13px !important;
      color: ${null===(d=null===(s=t.colors)||void 0===s?void 0:s.palette)||void 0===d?void 0:d.dark[600]} !important;
      font-weight: ${null===(c=t.typography)||void 0===c?void 0:c.weights.bold} !important;
    }
    .setting-text-level-3 {
      font-size: 13px !important;
      color: ${null===(p=null===(u=t.colors)||void 0===u?void 0:u.palette)||void 0===p?void 0:p.dark[400]} !important;
      font-weight: ${null===(g=t.typography)||void 0===g?void 0:g.weights.bold} !important;
    }
  `})(t)}
    ${(t=>{const o=t&&t.surfaces;return e.css`
    ${Object.keys(o).map((e=>{var t,r;return`\n      .surface-${e} {\n        ${o[e].bg?`background-color: ${o[e].bg} !important;`:""}\n        ${o[e].border?`border: ${o[e].border.color} ${null!==(t=o[e].border.style)&&void 0!==t?t:"solid"} ${null!==(r=o[e].border.width)&&void 0!==r?r:"1px"} !important;`:""}\n        ${o[e].shadow?`box-shadow: ${o[e].shadow} !important;`:""}\n      }\n    `}))}
  `})(t)}
    ${(t=>{var o,r,i,n,l;const a=null!==(o=t.colors)&&void 0!==o?o:{};let s={},d={},c={};const u=a.palette.light,p=a.palette.dark,g=null!==(i=null===(r=null==t?void 0:t.border)||void 0===r?void 0:r.width)&&void 0!==i?i:"1px",h=null!==(l=null===(n=null==t?void 0:t.border)||void 0===n?void 0:n.color)&&void 0!==l?l:"#ccc";return a?(["white","black","transparent"].forEach((e=>{s[e]=a[e]})),["primary","secondary","success","info","warning","danger","light","dark"].forEach((e=>{d[e]=a[e]}))):(s=Me,d=Le),c=Object.assign(Object.assign({},d),s),e.css`
    .border         { border: ${g} solid ${h} !important; }
    .border-top     { border-top: ${g} solid ${h} !important; }
    .border-right   { border-right: ${g} solid ${h} !important; }
    .border-bottom  { border-bottom: ${g} solid ${h} !important; }
    .border-left    { border-left: ${g} solid ${h} !important; }

    .border-0        { border: 0 !important; }
    .border-1        { border-width: 1px !important; }
    .border-2        { border-width: 2px !important; }
    
    .border-top-0    { border-top: 0 !important; }
    .border-right-0  { border-right: 0 !important; }
    .border-bottom-0 { border-bottom: 0 !important; }
    .border-left-0   { border-left: 0 !important; }

    .border-white {
      border-color: ${s.white} !important;
    }

    ${Object.keys(u).map((e=>Ue(`light-${e}`,u[e])))}
    ${Object.keys(p).map((e=>Ue(`dark-${e}`,p[e])))}
    ${Object.keys(c).map((e=>Ue(e,c[e])))}
  `})(t)}
    ${(t=>{const o=t&&t.boxShadows;return e.css`
    ${Object.keys(o).map((e=>`\n          .${"default"===e?"shadow":`shadow-${e}`} { box-shadow: ${o[e]} !important; }\n        `))}
  `})(t)}
    ${Ve(t)}
    ${(t=>{const o=t&&t.sizes;let r,i;return function(e){e.TOP="t",e.BOTTOM="b",e.LEFT="l",e.RIGHT="r",e.HORIZONTAL="x",e.VERTICAL="y",e.ALL=""}(r||(r={})),function(e){e.MARGIN="m",e.PADDING="p"}(i||(i={})),e.css`
    ${Object.keys(o).map((e=>Object.keys(r).map((t=>Object.keys(i).map((n=>{const l=`${i[n]}${r[t]}-${e}`,a=n.toLowerCase(),s=o[e];return`\n              .${l} {\n                ${"HORIZONTAL"===t?`\n                    ${a}-left: ${s} !important;\n                    ${a}-right: ${s} !important;\n                  `:"VERTICAL"===t?`\n                    ${a}-top: ${s} !important;\n                    ${a}-bottom: ${s} !important;\n                  `:`${a}${"ALL"===t?"":`-${t.toLowerCase()}`}: ${s} !important; `}\n              }\n            `}))))))}

    .m-auto {
      margin: auto !important;
    }
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
  `})(t)}
    ${(t=>{const o=t&&t.borderRadiuses;return e.css`
    ${Object.keys(o).map((e=>`\n          .${"default"===e?"rounded":`rounded-${e}`} { border-radius: ${o[e]} !important; }\n        `))}
  `})(t)}
  `)(n)}
    ${fe()}
    ${(t=>{var o,r,i,n,l,a,s,d,c,u,p,g,h,m,b,f,v,y,$,w,x,k,S,_,j,R,O,z,C,T,q,E,P,A,N,I,M,L,B,F,H,X,Y,U,G,V,W,D,K,Z,Q,J,ee,te,oe,re,ie,ne,le,ae,se,de,ce,ue,pe,ge,he,me,be,fe,ve,ye,$e,we,xe,ke,Se,_e,je,Re,Oe;const ze=null==t?void 0:t.arcgis,Te=null===(o=null==ze?void 0:ze.components)||void 0===o?void 0:o.button,{default:qe,secondary:Ee,tertiary:Pe}=null!==(r=null==Te?void 0:Te.variants)&&void 0!==r?r:{},Ae=null===(i=null==ze?void 0:ze.components)||void 0===i?void 0:i.input,Ne=null===(n=null==ze?void 0:ze.components)||void 0===n?void 0:n.menu,Ie=null===(l=null==ze?void 0:ze.components)||void 0===l?void 0:l.panel,Me=null===(a=null==ze?void 0:ze.components)||void 0===a?void 0:a.table,Le=null===(s=null==ze?void 0:ze.components)||void 0===s?void 0:s.updatingIndicator,Be=null===(d=null==ze?void 0:ze.widgets)||void 0===d?void 0:d.layerlist,Fe=null===(c=null==ze?void 0:ze.widgets)||void 0===c?void 0:c.legend,He=null===(u=null==ze?void 0:ze.widgets)||void 0===u?void 0:u.basemapGallery,Xe=null===(p=null==ze?void 0:ze.widgets)||void 0===p?void 0:p.measure;return e.css` body {
    .esri-button,
    .esri-widget--button,
    .esri-popup__button,
    .esri-sketch__button {
      ${We(qe)}
    }
    .esri-disabled .esri-widget--button {
      > * {
        color: ${null===(g=null==qe?void 0:qe.disabled)||void 0===g?void 0:g.color};
      }
    }
    .esri-button--secondary {
      ${We(Ee)}
    }
    .esri-input,
    .esri-select {
      ${Ce(Ae)};
      &:focus {
        border-color: ${null===(h=null==Ae?void 0:Ae.focus)||void 0===h?void 0:h.borderColor};
        outline: none;
      }
      &::placeholder {
        color: ${null==Ae?void 0:Ae.placeHolderColor};
      }
    }
    .esri-select {
    }
    .esri-menu {
      ${Ce(Ne)}
      font-size: inherit;
      line-height: 1;
    }
    .esri-menu__list-item {
      &,
      &:focus {
        ${Ce(null===(m=null==Ne?void 0:Ne.item)||void 0===m?void 0:m.default)};
      }
      &:hover {
        ${Ce(null===(b=null==Ne?void 0:Ne.item)||void 0===b?void 0:b.hover)};
      }
      &:active {
        ${Ce(null===(f=null==Ne?void 0:Ne.item)||void 0===f?void 0:f.active)};
      }
    }
    .esri-menu__list-item--active,
    .esri-menu__list-item--active:hover,
    .esri-menu__list-item--active:focus {
      ${Ce(null===(v=null==Ne?void 0:Ne.item)||void 0===v?void 0:v.active)};
    }

    /*
    * ArcGIS API 4.x Widgets:
    */

    /* General */

    /* Heading */
    .esri-widget__heading {
      color: ${null===($=null===(y=null==t?void 0:t.typography)||void 0===y?void 0:y.colors)||void 0===$?void 0:$.title};
    }

    /* Table */
    .esri-widget__table {
      ${Ce(null==Me?void 0:Me.root)}
    }
    .esri-layer-list__item--updating {
      &:before {
        background-color: ${null==Le?void 0:Le.bg};
      }
      &:after {
        background-color: ${null==Le?void 0:Le.progress};
      }
    }

    /* Toggle */
    .esri-navigation-toggle {
      &.esri-disabled {
        .esri-navigation-toggle__button {
          ${Ce(qe.disabled)};
          + .esri-navigation-toggle__button {
            margin-top: -${null!==(k=null===(x=null===(w=qe.default)||void 0===w?void 0:w.border)||void 0===x?void 0:x.width)&&void 0!==k?k:"0"};
          }
        }
      }
    }
    .esri-navigation-toggle__button {
      &:before {
        border-right-color: ${null===(S=null==t?void 0:t.colors)||void 0===S?void 0:S.primary};
      }
      + .esri-navigation-toggle__button {
        margin-top: -${null!==(R=null===(j=null===(_=qe.default)||void 0===_?void 0:_.border)||void 0===j?void 0:j.width)&&void 0!==R?R:"0"};
      }
    }

    /* zoom */
    .esri-zoom .esri-widget--button:last-child {
      border-top: 0;
    }
    /* Search */
    .esri-search {
      /* padding: ${null===(O=null==t?void 0:t.sizes)||void 0===O?void 0:O[3]}; */
      .esri-search__container {
        > .esri-widget--button {
          background-color: ${null==Ae?void 0:Ae.bg};
          ${(null==Ae?void 0:Ae.border)&&`border: ${null===(z=null==Ae?void 0:Ae.border)||void 0===z?void 0:z.color} solid ${null===(C=null==Ae?void 0:Ae.border)||void 0===C?void 0:C.width};`}
        }
      }
      .esri-search__input-container {
        margin-left: -1px;
        margin-right: -1px;
        .esri-search__input {
          text-overflow: ellipsis;
          padding-right: 32px; /* the width of the clear button */
          ${(null==Ae?void 0:Ae.focus)&&`&:focus {\n            border: ${null===(T=null==Ae?void 0:Ae.focus)||void 0===T?void 0:T.borderColor} solid ${null!==(E=null===(q=null==Ae?void 0:Ae.border)||void 0===q?void 0:q.width)&&void 0!==E?E:"1px"};\n          }`}
        }
        .esri-search__clear-button {
          position: absolute;
          right: 32px;
          top: ${null!==(A=null===(P=null==Ae?void 0:Ae.border)||void 0===P?void 0:P.width)&&void 0!==A?A:0};
          height: calc(32px - ${null!==(I=null===(N=null==Ae?void 0:Ae.border)||void 0===N?void 0:N.width)&&void 0!==I?I:0} * 2);
          z-index: 1;
          background-color: ${null==Ae?void 0:Ae.bg};
        }
      }
      .esri-search--multiple-sources {
        .esri-search__sources-button {
          z-index: 1;
          border-right: 0;
          margin-right: -${null===(M=null==Ae?void 0:Ae.border)||void 0===M?void 0:M.width};
        }
        .esri-search__input {
          border-left: ${null===(L=null==Ae?void 0:Ae.border)||void 0===L?void 0:L.width} solid transparent;
          border-right: ${null===(B=null==Ae?void 0:Ae.border)||void 0===B?void 0:B.width} solid transparent;
          &:focus {
            border-color: ${null===(F=null==Ae?void 0:Ae.focus)||void 0===F?void 0:F.borderColor};
          }
        }
      }
    }

    /* Popup */
    .esri-popup__main-container {
      ${Ce(Ie)}
      .esri-feature__content-node {
        background-color: ${null==Ie?void 0:Ie.bg};
      }
      .esri-widget {
        font-family: inherit;
        background-color: transparent;
        color: inherit;
      }
      .esri-widget--panel {
        ${Ce(Ie)}
      }
    }
    .esri-popup__pointer-direction {
      background-color: ${null==Ie?void 0:Ie.bg};
    }
    .esri-popup__navigation {
      background: transparent;
    }

    /* Layer List */
    .esri-layer-list {
      ${Ce(null==Be?void 0:Be.root)}
    }
    .esri-layer-list__item {
      ${Ce(null===(H=null==Be?void 0:Be.item)||void 0===H?void 0:H.default)}
    }
    .esri-layer-list__item-container {
      padding-top: 0.375rem;
      padding-bottom: 0.375rem;
    }
    .esri-layer-list__item--invisible-at-scale .esri-layer-list__item-title {
      color: ${null===(Y=null===(X=null==Be?void 0:Be.item)||void 0===X?void 0:X.disabled)||void 0===Y?void 0:Y.color}
    }
    .esri-layer-list__item-actions {
      ${Ce(null===(U=null==Be?void 0:Be.actionsList)||void 0===U?void 0:U.root)}
      margin: 0;
    }
    .esri-layer-list__item-action {
      ${Ce(null===(V=null===(G=null==Be?void 0:Be.actionsList)||void 0===G?void 0:G.item)||void 0===V?void 0:V.default)}
      &:hover {
        ${Ce(null===(D=null===(W=null==Be?void 0:Be.actionsList)||void 0===W?void 0:W.item)||void 0===D?void 0:D.hover)}
      }
    }
    .esri-layer-list__item-actions-list {
      border-color: ${null===(Z=null===(K=null==Be?void 0:Be.actionsList)||void 0===K?void 0:K.separator)||void 0===Z?void 0:Z.color};
      border-width: ${null===(J=null===(Q=null==Be?void 0:Be.actionsList)||void 0===Q?void 0:Q.separator)||void 0===J?void 0:J.width};
      padding: 0;
    }
    .esri-layer-list__item-actions-menu {
      padding: 0.25rem;
      margin-top: -0.25rem;
    }
    .esri-layer-list__item-toggle,
    .esri-layer-list__child-toggle,
    .esri-layer-list__item-actions-menu-item {
      ${Ce(null===(ee=null==Be?void 0:Be.icon)||void 0===ee?void 0:ee.default)}
      &:hover {
        ${Ce(null===(te=null==Be?void 0:Be.icon)||void 0===te?void 0:te.hover)}
      }
    }
    .esri-layer-list__item-actions-menu-item--active {
      &, &:hover {
        ${Ce(null===(re=null===(oe=null==Be?void 0:Be.actionsList)||void 0===oe?void 0:oe.item)||void 0===re?void 0:re.active)}
      }
    }

    /* Legend */
    .esri-legend {
      ${Ce(null===(ne=null===(ie=null==Fe?void 0:Fe.variants)||void 0===ie?void 0:ie.default)||void 0===ne?void 0:ne.root)}
    }
    .esri-widget__heading {
      color: inherit;
    }
    .esri-legend--card {
      ${Ce(null===(ae=null===(le=null==Fe?void 0:Fe.variants)||void 0===le?void 0:le.card)||void 0===ae?void 0:ae.root)}
    }
    .esri-legend--card__section {
      width: 100%;
    }
    .esri-legend--card__carousel-indicator-container {
      ${Ce(null===(de=null===(se=null==Fe?void 0:Fe.variants)||void 0===se?void 0:se.card)||void 0===de?void 0:de.carousel)}
    }
    .esri-legend--card__service {
      width: 100%;
    }
    .esri-legend--card__service-caption-container {
      ${Ce(null===(ue=null===(ce=null==Fe?void 0:Fe.variants)||void 0===ce?void 0:ce.card)||void 0===ue?void 0:ue.caption)}
    }

    /* Basemap Gallery */
    .esri-basemap-gallery {
      ${Ce(null==He?void 0:He.root)}
    }
    .esri-basemap-gallery__item {
      ${Ce(null===(pe=null==He?void 0:He.item)||void 0===pe?void 0:pe.default)}
      &:hover {
        ${Ce(null===(ge=null==He?void 0:He.item)||void 0===ge?void 0:ge.hover)}
        border-right-color: transparent;
      }
      &:focus {
        ${Ce(null===(he=null==He?void 0:He.item)||void 0===he?void 0:he.hover)}
        border-right-color: transparent;
      }
    }
    .esri-basemap-gallery__item--selected,
    .esri-basemap-gallery__item.esri-basemap-gallery__item--selected:hover,
    .esri-basemap-gallery__item.esri-basemap-gallery__item--selected:focus {
      ${Ce(null===(me=null==He?void 0:He.item)||void 0===me?void 0:me.active)}
      border-right-color: transparent;
    }
    .esri-basemap-gallery__item-title {
      color: inherit !important;
    }
    .esri-basemap-gallery__loader {
      &:before {
        background-color: ${null==Le?void 0:Le.bg};
      }
      &:after {
        background-color: ${null==Le?void 0:Le.progress};
      }
    }
    .esri-basemap-gallery__item--loading {
      ${Ce(null==He?void 0:He.root)}
    }

    .esri-direct-line-measurement-2d,
    .esri-area-measurement-2d,
    .esri-direct-line-measurement-3d,
    .esri-area-measurement-3d {
      ${Ce(null==Xe?void 0:Xe.root)}
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
      --calcite-ui-foreground-1: ${null===(be=null==Pe?void 0:Pe.default)||void 0===be?void 0:be.bg};
      --calcite-ui-text-3: ${null===(fe=null==Pe?void 0:Pe.default)||void 0===fe?void 0:fe.color};
      /* hover */
      --calcite-ui-foreground-2: ${null==Pe?void 0:Pe.hover.bg};
      /* --calcite-ui-text-1: ${null==Pe?void 0:Pe.hover.color};*/  /* in Calcite, :hover.color === :focus.color */
      /* focus */
      --calcite-ui-foreground-3: ${null==Pe?void 0:Pe.active.bg};
      --calcite-ui-text-1: ${null==Pe?void 0:Pe.active.color};
      /* a11y */
      --calcite-ui-brand: ${null==Pe?void 0:Pe.active.bg};

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
            ${Ce(null==qe?void 0:qe.active)};
          }
        }
        &:focus {
          color: ${null===(ve=null==qe?void 0:qe.default)||void 0===ve?void 0:ve.color};
        }
      }
      .esri-sketch__tool-section {
        border-color: ${t.colors.palette.light[800]};
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
    .esri-widget.esri-line-of-sight,
    .esri-widget.esri-slice {
      background-color: ${t.surfaces[1].bg};
      /* usually */
      --calcite-ui-brand: ${t.colors.palette.primary[500]};
      --calcite-ui-text-inverse: ${null===(ye=null==Pe?void 0:Pe.default)||void 0===ye?void 0:ye.color};
      /* hover */
      --calcite-ui-brand-hover: ${t.colors.palette.primary[600]};

      /* slider */
      .esri-slider {
        background-color: ${t.surfaces[1].bg};

        .esri-slider__thumb {
          background-color: ${t.colors.palette.primary[500]};
          border-color: ${t.colors.palette.primary[500]};

          &:hover {
            border-color: ${t.colors.palette.primary[600]} !important;
            background-color: ${t.colors.palette.primary[500]} !important;
          }
        }

        .esri-slider__anchor:focus .esri-slider__thumb {
          outline: ${t.colors.palette.primary[600]};
        }

        .esri-slider__segment--interactive,
        .esri-slider__segment-1 {
          background: ${t.colors.palette.primary[500]};
        }
      }

      /* primary btn */
      /* https://www.figma.com/file/8EJ9ktTFkIZU3KmaMAz2lb/Design-System-ExB?node-id=287%3A5239&t=9kFu8ZNQiWmozlje-0 */
      .esri-button--primary.esri-button {
        color: ${t.colors.white} !important;

        background: ${t.colors.palette.primary[500]};
        border-color: ${t.colors.palette.primary[500]};

        &:hover {
          background: ${t.colors.palette.primary[600]};
        }
      }
    }
    /* Daylight */
    .esri-widget.esri-daylight {
      --calcite-ui-icon-color: ${t.surfaces[1].bg};

      .esri-daylight__container__tick {
        border-color: transparent !important
      }
    }
    /* Weather */
    /* Shadow cast */
    .esri-widget.esri-weather,
    .esri-widget.esri-shadow-cast {
      --calcite-ui-text-inverse: ${t.surfaces[1].bg};
    }
    /* Line of sight */
    .esri-widget.esri-line-of-sight {

    }
    /* Slice */
    .esri-widget.esri-esri-slice {

    }

    /*
     * ExB's own component
     */

    .exbmap-ui-tool-shell {
      box-shadow: ${null==ze?void 0:ze.boxShadow};
    }
    .exbmap-ui-tool,
    .exbmap-ui-tool-panel {
      pointer-events: auto;
      position: relative;
      .exbmap-ui-tool-icon-selected {
        &,
        :hover {
          color: ${null===($e=null==qe?void 0:qe.active)||void 0===$e?void 0:$e.color};
          background-color: ${null===(we=null==qe?void 0:qe.active)||void 0===we?void 0:we.bg};
        }
      }
    }
    .exbmap-ui-popper {
      .exbmap-ui-expand-content {
        color: ${null==Ie?void 0:Ie.color};
        background:  ${null==Ie?void 0:Ie.bg};
        transition: opacity 250ms ease-in-out, margin 250ms ease-in-out;
        min-height: 10px;
        /* min-width: 260px; */
        .exbmap-ui-expand-content-header {
          padding: ${null==t?void 0:t.sizes[2]} ${null==t?void 0:t.sizes[3]} ${null==t?void 0:t.sizes[2]};
        }
        .panel-title {
          font-weight: ${null===(ke=null===(xe=null==t?void 0:t.typography)||void 0===xe?void 0:xe.weights)||void 0===ke?void 0:ke.medium};
        }
        .panel-icon { /* <-- Need To use the tertiary button */
          cursor: pointer;
          &:hover {
            color: ${null===(Se=null==t?void 0:t.colors)||void 0===Se?void 0:Se.primary};
          }
        }
        .esri-search {
          padding: 0 ${null==t?void 0:t.sizes[3]} ${null==t?void 0:t.sizes[3]};
        }

        .esri-widget {
          font-family: inherit;
          background-color: transparent;
          color: inherit;
        }
        .esri-widget--panel {
          ${Ce(Ie)}
        }
      }

      [data-popper-placement^='bottom'] {
        margin-top: ${null===(_e=null==t?void 0:t.gutters)||void 0===_e?void 0:_e[3]} !important;
      }

      [data-popper-placement^='left'] {
        margin-right: ${null===(je=null==t?void 0:t.gutters)||void 0===je?void 0:je[3]} !important;
      }

      [data-popper-placement^='right'] {
        margin-left: ${null===(Re=null==t?void 0:t.gutters)||void 0===Re?void 0:Re[3]} !important;
      }

      [data-popper-placement^='top'] {
        margin-bottom: ${null===(Oe=null==t?void 0:t.gutters)||void 0===Oe?void 0:Oe[3]} !important;
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
        background-color: ${null==Le?void 0:Le.bg};
      }
      &:after {
        background-color: ${null==Le?void 0:Le.progress};
      }
    }
  }`})(n)}
    ${ze(n)}

    html {
      font-size: ${n.typography.fontSizeRoot};
      -webkit-text-size-adjust: 100%;
      -moz-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      &.is-in-builder {
        overflow: hidden;
      }
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
          outline: ${a};
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
        .${e.INTERACTIVE_CLASS}{
          &:focus-within{
            box-shadow: ${s} !important;
          }
        }
      }
    }

    ${/Avenir/gim.test(n.body.fontFamily)&&e.css`
      [lang="vi"] body {
        font-family: "SST Vietnamese", 'Lucida Grande', Arial, Verdana, Geneva, sans-serif;
      }
    `}

    a {
      color: ${n.link.color};
      text-decoration: ${n.link.decoration};
      ${Ee(`\n        color: ${n.link.hover.color};\n        text-decoration: ${n.link.hover.decoration};\n      `)}
    }
   
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

    .close {
      float: right;
      font-size: ${n.components.close.fontSize};
      font-weight: ${n.components.close.fontWeight};
      line-height: 1;
      color: ${n.components.close.color};
      text-shadow: ${n.components.close.textShadow};
      opacity: .5;

      &:not(:disabled):not(.disabled) {
        ${Pe(`\n          color: ${n.components.close.color};\n          text-decoration: none;\n          opacity: .75;\n        `)}
        cursor: pointer;
      }
    }

    button.close {
      padding: 0;
      background-color: transparent;
      border: 0;
      -webkit-appearance: none;
    }

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

    @media (min-width: ${e.CONSTANTS.BREAK_POINTS[0]}px) {
      .modal-sm {
        max-width: ${n.components.modal.sizes.sm};
      }
    }

    @media (min-width: ${e.CONSTANTS.BREAK_POINTS[1]}px) {
      .modal-lg {
        max-width: ${n.components.modal.sizes.lg};
      }
    }

    .form-inline {
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      .form-check {
        width: 100%;
      }

      @media (min-width: ${e.CONSTANTS.BREAK_POINTS[0]}px) {
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
  `},Ke=e.React.createContext(!1);Ke.displayName="UseTheme2Context";const Ze=({children:t,useTheme2:o=!1})=>e.React.createElement(Ke.Provider,{value:o},t),Qe=e.React.createContext(null);Qe.displayName="Theme2Context";const Je={},et=t=>{const{theme:o=Je,theme2:r,children:i}=t;return e.React.createElement(me,{theme:o},e.React.createElement(Qe.Provider,{value:r},e.React.createElement(Ke.Provider,{value:!1},i)))},tt=()=>{const t=e.React.useContext(Ke);return!t||window.jimuConfig.isBuilder||window.jimuConfig.isInBuilder||console.warn("`Theme2` is only allowed in builder or app-in-builder."),t},ot=()=>{const t=tt();return e.React.useContext(t?Qe:pe)},rt=()=>{const t=tt();return e.React.useContext(t?pe:Qe)},it={},nt={},lt=(e,t)=>{it[e]?console.warn(`The style of ${e} has been registered.`):it[e]=t},at=(e,t)=>{(e=>!!nt[e])(e)?console.warn(`The styles entry ${e} has been registered.`):(nt[e]=!0,Object.entries(t).forEach((([e,t])=>lt(e,t))))},st=at,dt=(e,t)=>(!(e=>!!it[e])(e)&&t&&console.warn(`The style of ${e} has't been registered.`),it[e]),ct=e=>{const t=De,o=Vt("Global");return ut(null==t?void 0:t({theme:e}),null==o?void 0:o({theme:e}))};function ut(...t){return(0,e.css)(t)}var pt=r(679);function gt(t,o,r){var i,n;const l=o||(null!==(n=null!==(i=t.displayName)&&void 0!==i?i:t.name)&&void 0!==n?n:"");if(!l)return console.error("A component name is required."),t;const a=ge(t,r)((t=>{var o;const r=tt(),i=dt(l,!r);if(!i&&!r)return null;let n=t;if(r){n={};for(const e in t)n[e]=t[e];n.theme=e.React.useContext(Qe)}const a=r&&null!==(o=Wt(l))&&void 0!==o?o:Vt(l);return ut(null==i?void 0:i(n),null==a?void 0:a(n))}));return a.displayName=l,a}function ht(t,o,r){var i,n;const l=o||(null!==(n=null!==(i=t.displayName)&&void 0!==i?i:t.name)&&void 0!==n?n:"Component"),a=gt(t,o,r),s=e.React.forwardRef((function(t,o){const r=(0,e.classNames)(t.className,"theme2-scrollbar");return e.React.createElement(Ke.Provider,{value:!0},e.React.createElement(a,Object.assign({},t,{className:r,ref:o})))}));return s.displayName=`Theme2Styled(${l})`,pt(s,t)}const mt=ht,bt="0.8125rem",ft=bt,vt={extraLight:"200",light:"300",medium:"400",bold:"500",extraBold:"600"},yt={medium:1.5,sm:1.3,lg:1.7},$t=t=>e.polished.math(`${bt} * ${t} / 13`),wt="1rem";function xt(t=wt){return{0:0,1:e.polished.math(`${t} * 0.25`),2:e.polished.math(`${t} * 0.5`),3:t,4:e.polished.math(`${t} * 1.25`),5:e.polished.math(`${t} * 1.5`)}}xt(wt),xt(wt);const kt={none:"0rem",sm:"0rem",default:"0.125rem",lg:"0.25rem",circle:"50%",pill:"50rem"},St=(e={})=>Object.assign(Object.assign({},kt),e),_t={none:"none",sm:`0 0 6px 0 ${e.polished.rgba("black",.15)}`,default:`0 0 10px 1px ${e.polished.rgba("black",.2)}`,lg:`0 0 20px 2px ${e.polished.rgba("black",.2)}`};const jt=(t={})=>{var o;const{darkTheme:r=!1,colors:i,typography:n,spacer:l=wt,sizes:a,gutters:s,border:d,boxShadows:c,surfaces:u,borderRadiuses:p,body:g,header:h,footer:m,link:b}=t,f=function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(o[r[i]]=e[r[i]])}return o}(t,["darkTheme","colors","typography","spacer","sizes","gutters","border","boxShadows","surfaces","borderRadiuses","body","header","footer","link"]),v=Ye(i,r),y=((e={},t)=>{var o,r,i;const n=null!==(o=e.fontFamilyBase)&&void 0!==o?o:'"Avenir Next", "Helvetica Neue", sans-serif, "PingFang SC", "Microsoft YaHei"',l=null!==(r=e.fontSizeRoot)&&void 0!==r?r:"100%",a=null!==(i=e.fontSizeBase)&&void 0!==i?i:ft,s={fontFamilyBase:n,fontSizeRoot:l,fontSizeBase:a,sizes:Object.assign({display1:$t(30),display2:$t(24),display3:$t(20),display4:$t(18),display5:$t(16),display6:$t(14),body1:$t(14),body2:a,caption1:$t(12),caption2:$t(10)},e.sizes),weights:Object.assign(Object.assign({},vt),e.weights),lineHeights:Object.assign(Object.assign({},yt),e.lineHeights),colors:Object.assign({title:t.palette.dark[900],normal:t.palette.dark[700],caption:t.palette.dark[500],disabled:t.palette.light[500]},e.colors)},d={default:{fontFamily:s.fontFamilyBase,fontWeight:s.weights.medium,lineHeight:s.lineHeights.medium,color:s.colors.normal},heading:{fontFamily:s.fontFamilyBase,fontWeight:s.weights.bold,lineHeight:s.lineHeights.medium,color:s.colors.title}};let c=Object.assign(Object.assign({},s),{variants:{display1:Object.assign(Object.assign({},d.heading),{fontSize:s.sizes.display1}),display2:Object.assign(Object.assign({},d.heading),{fontSize:s.sizes.display2}),display3:Object.assign(Object.assign({},d.heading),{fontSize:s.sizes.display3}),display4:Object.assign(Object.assign({},d.heading),{fontSize:s.sizes.display4}),display5:Object.assign(Object.assign({},d.heading),{fontSize:s.sizes.display5}),display6:Object.assign(Object.assign({},d.heading),{fontSize:s.sizes.display6}),body1:Object.assign(Object.assign({},d.default),{fontSize:s.sizes.body1}),body2:Object.assign(Object.assign({},d.default),{fontSize:s.sizes.body2}),caption1:Object.assign(Object.assign({},d.default),{fontSize:s.sizes.caption1,color:s.colors.caption}),caption2:Object.assign(Object.assign({},d.default),{fontSize:s.sizes.caption2,color:s.colors.caption})}});return c=ke(c,e),c})(n,v),$=l,w=((e,t={})=>{let o=xt(e);return o=Object.assign(Object.assign({},o),t),o})($,a),x=((t,o={})=>{let r=function(t=wt){return{0:0,1:e.polished.math(`${t} * 0.0625`),2:e.polished.math(`${t} * 0.125`),3:e.polished.math(`${t} * 0.25`),4:e.polished.math(`${t} * 0.5`),5:e.polished.math(`${t} * 0.625`)}}(t);return r=Object.assign(Object.assign({},r),o),r})($,s),k=((e={},t)=>{let o={type:"solid",color:t.palette.light[300],width:"1px"};return o=Object.assign(Object.assign({},o),e),o})(d,v),S=St(p),_=((e={})=>Object.assign(Object.assign({},_t),e))(c),j=((e={},t,o)=>{let r={1:{bg:o.white,border:{width:"1px",color:o.palette.light[400]},shadow:t.none},2:{bg:o.white,border:{width:"1px",color:o.palette.light[300]},shadow:t.default},3:{bg:o.palette.light[100],border:{width:"1px",color:o.palette.light[400]},shadow:t.sm}};return r=ke(r,e),r})(u,_,v),R=Ie(v);let O={darkTheme:r,coloration:null!==(o=t.coloration)&&void 0!==o?o:"default",colorationVariants:Se(null==t?void 0:t.colorationVariants,v),colors:v,typography:y,spacer:$,sizes:w,gutters:x,border:k,borderRadiuses:S,boxShadows:_,surfaces:j,focusedStyles:R};const z=_e(g,O),C=je(h,O),T=Re(m,O),q=Oe(b,v);O=Object.assign(Object.assign({},O),{body:z,header:C,footer:T,link:q});const E=(t=>{const o=t.sizes,r=t.typography,i=t.borderRadiuses,n=t.colors,l=t.gutters,a=t.surfaces,s=t.border,d=t.spacer,c=t.body,u=t.link,p=t.boxShadows,g={bg:n.white,color:n.black,border:{color:n.palette.light[400],width:s.width}};return{alert:{paddingY:o[2],paddingX:o[3],marginBottom:"0.625rem",borderRadius:"0.25rem",linkFontWeight:r.weights.light,borderWidth:"1px",bgLevel:"-10",borderLevel:"-9",colorLevel:"6"},badge:{fontSize:"85%",fontWeight:r.weights.medium,paddingX:"0.5rem",paddingY:"0.25rem",borderRadius:i.pill,minSize:"6px",border:{width:"1px",color:n.white}},breadcrumb:{bg:n.palette.light[200],activeColor:n.palette.dark[200],paddingY:"0.75rem",paddingX:"1rem",marginBottom:"1rem",borderRadius:i.default,item:{color:n.palette.dark[900],hoverColor:n.primary,padding:"0.5rem"},divider:{content:'"/"',color:n.palette.dark[200]}},button:{sizes:{default:{fontSize:r.sizes.body1,lineHeight:"1.375rem",paddingX:o[3],paddingY:o[1],borderRadius:"2px"},sm:{fontSize:r.sizes.body2,lineHeight:"1rem",paddingX:o[3],paddingY:o[1],borderRadius:"2px"},lg:{fontSize:r.sizes.display5,lineHeight:"1.375rem",paddingX:o[3],paddingY:o[2],borderRadius:"2px"}},variants:{default:{default:{color:n.palette.dark[800],bg:n.white,border:{color:n.palette.light[400],width:"1px"}},hover:{bg:n.palette.light[100]},active:{color:n.white,bg:n.primary,border:{color:n.primary}},disabled:{color:n.palette.light[800],bg:n.palette.light[200],border:{color:n.palette.light[400]}}},primary:{default:{color:n.white,bg:n.primary,border:{color:n.primary,width:"1px"}},hover:{bg:n.palette.primary[600]},active:{bg:n.palette.primary[600]},disabled:{color:n.palette.light[800],bg:n.palette.light[200],border:{color:n.palette.light[200]}}},secondary:{default:{color:n.primary,bg:n.transparent,border:{width:"1px",color:n.primary}},hover:{color:n.white,bg:n.primary,border:{color:n.primary}},active:{color:n.white,bg:n.primary,border:{color:n.primary}},disabled:{color:n.palette.light[800],bg:n.palette.light[200],border:{color:n.palette.light[400]}}},tertiary:{default:{color:n.palette.dark[800],bg:n.transparent,border:{width:"1px",color:n.transparent}},hover:{color:n.primary},active:{color:n.white,bg:n.primary},disabled:{color:n.palette.light[800]}},danger:{default:{color:n.white,bg:n.danger,border:{width:"1px",color:n.danger}},hover:{bg:n.palette.danger[600]},active:{bg:n.palette.danger[600]},disabled:{color:n.palette.light[800],bg:n.palette.light[200],border:{color:n.palette.light[200]}}},link:{default:{color:n.primary,bg:n.transparent,border:{width:"1px",color:n.transparent},decoration:"underline"},hover:{color:n.palette.primary[600],decoration:"underline"},active:{color:n.palette.primary[600]},disabled:{color:n.palette.light[800]}}},icon:{spacing:l[4],size:"auto"}},card:{root:{default:Object.assign(Object.assign({},a[1]),{borderRadius:i.none}),hover:{border:{width:"1px",color:n.primary},shadow:`0 0 0 1px ${n.primary}`},active:{border:{width:"1px",color:n.primary},shadow:`0 0 0 1px ${n.primary}`}},spacer:{y:"0.625rem",x:o[4]},headerBg:n.white,divider:{color:n.palette.light[200],width:"1px"},checkMark:{color:n.white,bg:n.primary}},close:{fontSize:e.polished.math(`${r.fontSizeBase} * 1.5`),fontWeight:r.weights.bold,color:n.black,textShadow:`0 1px 0 ${n.white}`},dropdown:Object.assign(Object.assign({button:{sizes:{default:{paddingX:"0.375rem"}}},minWidth:"10rem",paddingY:o[1],spacer:"4px"},a[2]),{borderRadius:i.default,divider:{bg:n.palette.light[400],margin:`${o[1]} ${o[2]}`},link:{color:n.palette.dark[900],hoverColor:n.white,hoverBg:n.primary,activeColor:n.white,activeBg:n.primary,checkIconColor:"inherit",checkIconGutter:l[4],disabledColor:n.palette.dark[200]},item:{paddingY:"0.25rem",paddingX:"1rem"},header:{color:n.palette.dark[200]}}),form:{group:{marginBottom:"1rem"},helpText:{marginTop:"0.25rem",fontSize:"0.8125rem"},check:{inline:{marginX:"0.75rem",inputMarginX:"0.3125rem"}}},input:Object.assign(Object.assign({},g),{boxShadow:null,disabled:{bg:n.palette.light[100],borderColor:n.palette.light[400],color:n.palette.light[800]},focus:{borderColor:n.primary,boxShadow:null},placeHolderColor:n.palette.dark[200],sizes:{default:{fontSize:r.sizes.body1,lineHeight:1.5,paddingX:o[2],paddingY:o[1],borderRadius:i.default,height:"32px"},sm:{fontSize:r.sizes.body2,lineHeight:1,paddingX:o[2],paddingY:o[1],borderRadius:i.default,height:"26px"},lg:{fontSize:r.sizes.display5,lineHeight:1.5,paddingX:o[2],paddingY:o[2],borderRadius:i.default,height:"40px"}},transition:"border-color .15s ease-in-out, box-shadow .15s ease-in-out",checkbox:{size:"16px",border:{color:n.palette.light[600],width:"2px"},hover:{borderColor:n.primary},bg:g.bg,checked:{color:n.white,bg:n.primary},iconSize:"12px",borderRadius:"2px"},radio:{size:"16px",border:{color:n.palette.light[600],width:"2px"},hover:{borderColor:n.primary},bg:g.bg,checked:{color:n.primary,bg:n.white},iconSize:"8px",borderRadius:i.pill},switch:{width:"28px",height:"16px",bg:g.bg,border:{width:g.border.width,color:n.palette.light[600]},checkedBg:n.primary,checkedBorder:{color:n.primary},slider:{gap:"2px",height:"auto",width:"auto",color:n.palette.dark[800],checkedColor:"white",disabledColor:n.palette.light[800]},borderRadius:i.pill,focusColor:n.black}}),select:{button:{sizes:{default:{paddingX:"0.375rem"},sm:{paddingX:"0.375rem"},lg:{paddingX:"0.375rem"}}}},listGroup:{fontSize:"1rem",bg:n.white,border:{color:s.color,width:s.width},borderRadius:i.default,item:{paddingY:"0.75rem",paddingX:"1rem"},hover:{bg:n.palette.light[100]},active:{color:"inherit",bg:e.polished.rgba(n.primary,.1),borderColor:s.color},disabled:{color:n.palette.light[700],bg:n.palette.light[200]},action:{color:n.palette.dark[600],hover:{color:n.palette.dark[600]},active:{color:c.color,bg:n.palette.light[200]}}},inputGroup:{addon:{color:g.color,bg:n.palette.light[200],borderColor:g.border.color}},modal:{innerPadding:"1rem",transition:"transform .3s ease-out",dialog:{margin:".5rem",marginYSmUp:"1.75rem"},title:{lineHeight:r.lineHeights.medium},content:Object.assign(Object.assign({},a[2]),{borderRadius:"0.25rem"}),backdrop:{bg:n.black,opacity:.6},header:{border:{color:n.palette.light[300],width:s.width},paddingY:".75rem",paddingX:"1rem"},footer:{border:{color:n.palette.light[300],width:"0"},button:{minWidth:"6.25rem"}},sizes:{lg:"800px",md:"500px",sm:"300px"}},nav:{variants:{default:{size:{fontSize:r.sizes.body1,lineHeight:1.5,paddingX:o[3],paddingY:o[1]},gutter:l[3],icon:{spacing:l[4]},root:{borderRadius:i.default},item:{default:{color:n.palette.dark[800],bg:n.transparent,border:{width:0},borderRadius:i.default},hover:{color:n.primary,borderRadius:i.default},active:{color:n.primary,borderRadius:i.default},disabled:{color:n.palette.light[700],shadow:"none",borderRadius:i.default}}},underline:{size:{fontSize:r.sizes.body1,lineHeight:1.5,paddingX:o[3],paddingY:o[1]},gutter:l[3],icon:{spacing:l[4]},root:{border:{width:0},borderRadius:i.none},item:{default:{color:n.palette.dark[800],bg:n.transparent,border:{color:n.transparent,width:"2px"},borderRadius:i.none},hover:{color:n.primary,border:{color:n.transparent,width:"2px"},borderRadius:i.none},active:{color:n.primary,border:{color:n.primary,width:"2px"},borderRadius:i.none},disabled:{color:n.palette.light[700],shadow:"none",borderRadius:i.none}}},pills:{size:{fontSize:r.sizes.body1,lineHeight:1.5,paddingX:o[3],paddingY:o[1]},gutter:l[3],icon:{spacing:l[4]},root:{borderRadius:i.pill},item:{default:{color:n.palette.dark[800],border:{width:"0px"},borderRadius:i.pill},hover:{color:n.primary,borderRadius:i.pill},active:{color:n.white,bg:n.primary,borderRadius:i.pill},disabled:{color:n.palette.light[700],shadow:"none",borderRadius:i.pill}}},tabs:{size:{fontSize:r.sizes.body1,lineHeight:1.5,paddingX:o[3],paddingY:o[1]},gutter:l[3],icon:{spacing:l[4]},root:{border:{width:"1px",color:n.palette.light[500]},borderRadius:i.default},item:{default:{color:n.palette.dark[800],bg:n.palette.light[100],border:{width:"1px",color:n.palette.light[500]},borderRadius:i.default},hover:{bg:n.white},active:{color:n.primary,bg:n.white,border:{width:"1px",color:n.palette.light[500]}},disabled:{color:n.palette.light[700],bg:n.palette.light[200],shadow:"none"}}}}},navbar:{fontSize:"1rem",paddingY:e.polished.math(`${d} * 0.5`),paddingX:d,nav:{link:{paddingX:"0.5rem",height:"auto"}},brand:{fontSize:"1rem",height:"auto",paddingY:"auto"},toggler:{paddingY:"0.25rem",paddingX:"0.75rem",fontSize:r.sizes.display5,borderRadius:"2px"},themes:{dark:{color:e.polished.rgba(n.white,.75),hoverColor:n.white,activeColor:n.white,disabledColor:n.palette.light[700],toggler:{borderColor:e.polished.rgba(n.white,.1)}},light:{color:"inherit",hoverColor:n.primary,activeColor:n.primary,disabledColor:n.palette.light[700],toggler:{borderColor:e.polished.rgba(n.black,.1)}}}},pagination:{gutter:l[3],sizes:{default:{button:{paddingY:"0.25rem",paddingX:"0.25rem",minWidth:"1.625rem",lineHeight:1}},sm:{button:{paddingY:"0.25rem",paddingX:"0.25rem",minWidth:"1.5rem",lineHeight:1}},lg:{button:{paddingY:"0.5rem",paddingX:"0.5rem",minWidth:"2rem",lineHeight:1}}},variants:{default:{root:{default:{borderRadius:i.lg}},button:{default:{color:n.palette.dark[800],bg:n.white,border:{color:n.palette.light[400],width:s.width},borderRadius:i.lg},hover:{color:u.color,bg:n.palette.light[200],border:{width:"1px",color:n.palette.light[400]}},active:{color:n.white,bg:n.primary,border:{width:"1px",color:n.primary}},disabled:{color:n.palette.light[800],bg:n.palette.light[200],border:{width:"1px",color:n.palette.light[400]}}}}}},popper:Object.assign(Object.assign({},a[2]),{fontSize:r.fontSizeBase,borderRadius:i.lg,header:{bg:n.white,color:"inherit",paddingY:"0.625rem",paddingX:"0.625rem"},body:{color:c.color,paddingY:"0.5rem",paddingX:"0.75rem"},arrow:{color:a[2].bg,outerColor:a[2].border.color}}),paper:{bg:c.bg,color:c.color,paddingX:0,paddingY:0,border:{width:0,color:"transparent"}},progress:{fontSize:e.polished.math(`${r.fontSizeBase} * 0.75`),bg:n.palette.light[200],borderRadius:i.none},slider:{sizes:{default:{root:"0.125rem",thumb:"0.875rem"},sm:{root:"0.125rem",thumb:"0.875rem"},lg:{root:"0.25rem",thumb:"1.5rem"}},variants:{default:{root:{bg:n.transparent,border:{width:0}},track:{bg:n.palette.light[600],borderRadius:i.pill},progress:{default:{bg:n.primary,borderRadius:i.pill}},thumb:{default:{bg:n.white,border:{color:n.palette.primary[500],width:"2px"},borderRadius:i.circle},hover:{border:{color:n.palette.primary[600],width:"2px"}},focus:{shadow:`0 0 0 2px ${n.white}, 0 0 0 3px ${n.black}`}}}}},table:{color:c.color,bg:c.bg,border:{color:n.palette.light[400],width:s.width},head:{fontSize:"1rem",bg:n.transparent},cell:{default:{paddingX:o[3],paddingY:o[2]},sm:{paddingX:o[3],paddingY:o[2]}},variants:{striped:{bg:n.palette.light[100]},dark:{color:n.light,bg:n.dark,border:{color:n.palette.light[900]},head:{bg:n.transparent}}}},tooltip:{fontSize:r.sizes.body2,maxWidth:"360px",color:n.black,bg:n.palette.light[300],borderRadius:i.default,border:{width:"1px",color:n.palette.light[600]},boxShadow:p.default,opacity:1,paddingY:o[1],paddingX:o[2],arrow:{color:n.palette.light[300],border:{width:"1px",color:n.palette.light[600]}}},navButtonGroup:{variants:{default:{root:{},item:{default:{color:n.palette.dark[800],bg:n.white,border:{color:n.light[500],width:"1px"},borderRadius:o[1]},hover:{bg:n.palette.light[100],borderRadius:o[1]},disabled:{color:n.palette.light[800],bg:n.palette.light[200],border:{color:n.palette.light[400]},borderRadius:o[1]}}},primary:{root:{bg:n.primary,borderRadius:o[5]},item:{default:{color:n.white,bg:n.transparent,border:{width:"0px",color:n.transparent}},hover:{color:n.light[500],bg:n.transparent,border:{width:"0px",color:n.transparent}},disabled:{color:n.palette.light[800],bg:n.transparent,border:{width:"0px",color:n.transparent}}}},tertiary:{root:{},item:{default:{color:n.palette.dark[800],bg:n.transparent,border:{width:"0px",color:n.transparent}},hover:{color:n.primary,bg:n.transparent,border:{width:"0px",color:n.transparent}},disabled:{color:n.palette.light[800],bg:n.transparent,border:{width:"0px",color:n.transparent}}}}}}}})(O),P=((e,t)=>{const o=e.borderRadiuses,r=e.colors,i=e.body,n=e.border,l={bg:r.white,color:r.black,border:{color:r.palette.light[400],width:n.width}};return{boxShadow:"0 1px 2px 0 rgba(0,0,0,0.20)",components:{button:{variants:{default:{default:{color:r.palette.dark[600],bg:r.palette.light[100]},hover:{color:r.primary,bg:r.palette.light[100]},active:{color:r.white,bg:r.primary},disabled:{color:r.palette.light[800],bg:r.palette.light[100]}},secondary:t.button.variants.secondary,tertiary:Object.assign(Object.assign({},t.button.variants.tertiary),{hover:{color:r.primary,bg:r.palette.primary[400]},active:{color:r.white,bg:r.primary}})}},input:Object.assign(Object.assign({},l),{placeHolderColor:r.palette.light[800],focus:{borderColor:r.primary,boxShadow:null}}),menu:{bg:r.palette.light[100],border:{color:r.palette.light[400],width:"1px"},borderRadius:o.default,item:{default:{color:r.palette.dark[900],bg:r.palette.light[100],border:{width:0}},hover:{bg:r.palette.light[300]},active:{bg:r.palette.light[300]}}},panel:{color:r.palette.dark[600],bg:r.palette.light[100]},table:{root:{color:i.color}},updatingIndicator:{bg:r.transparent,progress:r.primary}},widgets:{layerlist:{root:{bg:r.palette.light[100],color:r.palette.dark[800]},item:{default:{bg:r.palette.light[100],border:{color:r.palette.light[500]}},disabled:{color:r.palette.light[800]}},actionsList:{root:{bg:r.palette.light[200],color:i.color},item:{default:{color:r.palette.dark[600]},hover:{color:r.primary,bg:r.transparent},active:{color:r.palette.light[100],bg:r.primary}},separator:{color:r.palette.light[300],width:"2px"}},icon:{default:{color:r.palette.dark[600]},hover:{color:r.primary,bg:r.transparent},active:{color:r.palette.light[100],bg:r.primary}}},legend:{variants:{default:{root:{color:r.palette.dark[800]}},card:{root:{color:r.palette.dark[800],bg:r.palette.light[100]},carousel:{bg:r.palette.light[300]},caption:{bg:r.palette.light[300]}}}},basemapGallery:{root:{color:r.palette.dark[800],bg:r.palette.light[100]},item:{hover:{bg:r.palette.light[300],border:{color:r.palette.light[300]}},active:{bg:r.palette.primary[100],border:{color:r.primary}},focus:{bg:r.palette.light[300],border:{color:r.palette.light[300]}}}},measure:{measurement:{bg:r.palette.light[200],valueColor:r.black,disabledColor:r.palette.light[700]}}}}})(O,E);return O=Object.assign(Object.assign({},O),{components:E,arcgis:P}),O=ke(O,f),O},Rt=e=>e&&9===Object.keys(e).length,Ot=(t=(0,e.Immutable)({}),o)=>{const r=((t=(0,e.Immutable)({}),o)=>{var r,i,n,l,a,s;const d=(null==t?void 0:t.asMutable)?null==t?void 0:t.asMutable({deep:!0}):t,c=(null==o?void 0:o.asMutable)?null==o?void 0:o.asMutable({deep:!0}):o;if(!c)return d;const u=null!==(r=null==d?void 0:d.colors)&&void 0!==r?r:{},p=null!==(n=null===(i=null==d?void 0:d.colors)||void 0===i?void 0:i.palette)&&void 0!==n?n:{},g=null!==(l=c.colors)&&void 0!==l?l:{},h=null!==(s=null===(a=null==c?void 0:c.colors)||void 0===a?void 0:a.palette)&&void 0!==s?s:{};let m={};const b={};for(const e in Le)(null==g?void 0:g[e])?(m[e]=g[e],Rt(null==h?void 0:h[e])&&(b[e]=h[e])):(null==u?void 0:u[e])&&(m[e]=u[e],Rt(null==p?void 0:p[e])&&(b[e]=p[e]));for(const e in Me)(null==u?void 0:u[e])&&(m[e]=u[e]),(null==g?void 0:g[e])&&(m[e]=g[e]);Object.keys(b).length>0&&(m=Object.assign(Object.assign({},m),{palette:b}));let f=e.lodash.merge(d,c);return f=Object.assign(Object.assign({},f),{colors:m}),f})(t,o),i=jt(r);return(0,e.Immutable)(i)},zt=t=>{var o,r;const{module:i,module2:n,isRTL:l=!1}=t,a=null==i?void 0:i.uri,s=null===(r=null===(o=null==i?void 0:i.manifest)||void 0===o?void 0:o.styleFiles)||void 0===r?void 0:r.css,d=null==i?void 0:i.theme,c=null==n?void 0:n.theme,u=e.React.useMemo((()=>{const t=`${e.urlUtils.getFixedRootPath()}jimu-theme`;return l?`${t}/base/base-rtl.css`:`${t}/base/base.css`}),[l]),p=e.React.useMemo((()=>{if(s)return l?`${e.urlUtils.getFixedRootPath()}${a}/style-rtl.css`:`${e.urlUtils.getFixedRootPath()}${a}/style.css`}),[s,l,a]),g=e.React.useMemo((()=>{if(!d)return;const e=ct(d);return c?ut(e,ze(c,".theme2-scrollbar")):e}),[d,c]);return e.React.useEffect((()=>{let e=document.getElementById("jimu-base-style");e||(e=document.createElement("link"),e.setAttribute("id","jimu-base-style"),e.setAttribute("rel","stylesheet"),e.setAttribute("type","text/css"),document.head.prepend(e)),e.setAttribute("href",u)}),[u]),e.React.createElement(e.React.Fragment,null,p&&e.React.createElement("link",{type:"text/css",rel:"stylesheet",href:p}),g&&e.React.createElement(he,{styles:g}))},Ct=(()=>{const e={module:null,modules:{},module2:null};let t=[];return{setModule:o=>{e.module=o,t.forEach((e=>e(o)))},setModules:(t,o)=>{e.modules[t]=o},getModule:(t,o=!0)=>{if(t){const r=e.modules[t];return!r&&o&&console.warn("Theme "+t+" is not loaded yet."),r}return!e.module&&o&&console.warn("Theme is not loaded yet."),e.module},setModule2:t=>{e.module2=t},getModule2:()=>{const t=e.module2;return t||console.warn("Theme2 has not been synchronized to the current frame."),t},subscribe:e=>(t.push(e),()=>{t=t.filter((t=>t!==e))})}})(),Tt=(t,o=(0,e.Immutable)({}),r,i)=>{const n=e.sharedThemeUtils.isSharedTheme(t)?e.sharedThemeUtils.createCustomSharedThemeVariables(i):r;let l=Ot(o,n);const a=(e=>null==e?void 0:e.without("fonts","logo"))(i);return l=l.setIn(["colors","orgSharedColors"],a).setIn(["colors","getPalette"],(()=>{var e;return null===(e=l.colors)||void 0===e?void 0:e.palette})).setIn(["colors","getOrgShareColors"],(()=>a)),window._theme=l,l},qt="to_app.theme_changed",Et="to_builder.theme_changed",Pt="to_builder.app_theme_switcher_loaded",At=({children:t})=>{var o;const r=(()=>{const[t,o]=e.React.useState(),r=e.ReactRedux.useSelector((e=>{var t;return null===(t=e.appConfig)||void 0===t?void 0:t.theme})),i=e.ReactRedux.useSelector((e=>{var t;return null===(t=e.appConfig)||void 0===t?void 0:t.customTheme})),n=e.ReactRedux.useSelector((e=>{var t;return null===(t=e.appConfig)||void 0===t?void 0:t.sharedThemeVariables})),l=e.React.useRef(null);return e.React.useEffect((()=>{r&&eo(r).then((t=>{var i,n;const a=null==t?void 0:t.variables,s=null===(i=(0,e.getAppStore)().getState().appConfig)||void 0===i?void 0:i.customTheme,d=null===(n=(0,e.getAppStore)().getState().appConfig)||void 0===n?void 0:n.sharedThemeVariables,c=Tt(r,a,s,d),u=Object.assign(Object.assign({},t),{theme:c});l.current=u,Ct.setModules(t.uri,u),Ct.setModule(u),o(u)}))}),[r]),e.React.useEffect((()=>{const t=l.current;if(!t)return;const r=t.uri;if(r!==(0,e.getAppStore)().getState().appConfig.theme)return;const a=t.variables,s=Tt(r,a,i,n),d=Object.assign(Object.assign({},t),{theme:s});Ct.setModules(t.uri,d),Ct.setModule(d),o(d)}),[i,n]),t})(),i=(t=>{const[o,r]=e.React.useState(null),i=e.React.useRef(null);return e.React.useEffect((()=>{if(window.jimuConfig.isInBuilder){const e=window.parent&&window.parent._builderPubsub;e.subscribe(qt,((e,t)=>{r(t),Ct.setModule2(t)})),e.publishSync(Pt)}else if(window.jimuConfig.isBuilder){const e=window._builderPubsub;e.subscribe(Et,((e,t)=>{r(t),Ct.setModule2(t)})),e.subscribe(Pt,(()=>{i.current&&e.publishSync(qt,i.current)}))}}),[]),e.React.useEffect((()=>{t&&t.theme&&(window.jimuConfig.isInBuilder?(window.parent&&window.parent._builderPubsub).publishSync(Et,t):window.jimuConfig.isBuilder&&(i.current=t))}),[t]),o})(r),n=null===(o=(0,e.getAppStore)().getState().appContext)||void 0===o?void 0:o.isRTL,l=e.React.useMemo((()=>null==ce?void 0:ce(n)),[n]);return e.React.createElement(et,{theme:null==r?void 0:r.theme,theme2:null==i?void 0:i.theme},e.React.createElement(ue,{value:l},e.React.createElement(zt,{module:r,module2:i,isRTL:n}),t))};function Nt(){return window.jimuConfig.isInBuilder?Kt():null}function It(){let e=null;return e=window.jimuConfig.isBuilder?Kt():Dt(),e}function Mt(t){var o;const r=It(),i=r.getIn(["components",t]),n=null!==(o=null==i?void 0:i.variants)&&void 0!==o?o:(0,e.Immutable)({default:i});if("navButtonGroup"===t){let t=(0,e.Immutable)({});const o=["default","primary","tertiary"],i=r.getIn(["components","button","variants"]);return o.forEach((e=>{var o;const r=null==n?void 0:n[e],l=null===(o=null==n?void 0:n[e])||void 0===o?void 0:o.item,a=(null==i?void 0:i[e]).merge(null!=l?l:{},{deep:!0});t=t.set(e,Object.assign(Object.assign({},r),{item:a}))})),t}return n}const Lt=["nav","pagination","slider","navButtonGroup"],Bt=()=>{let t=(0,e.Immutable)({});return Lt.forEach((e=>{const o=Mt(e);t=t.set(e,o)})),t},Ft=/^var\(--(.+?)\)$/,Ht=e=>Ft.test(e),Xt=(t,o)=>{var r;if("string"!=typeof t)return null;let i,n="colors";return i=Ht(t)?t.match(Ft)[1].split("-"):t.split("."),i.length>1&&parseInt(i[1])%100==0?n="colors.palette":"org"===(null==i?void 0:i[0])&&(n="colors.orgSharedColors",i=i.slice(1)),null!==(r=function(t,o){return"string"!=typeof t?null:(o=o||It(),e.lodash.getValue(o,t))}(`${n}.${i.join(".")}`,o))&&void 0!==r?r:t},Yt=e=>!!Ct.getModule(e,!1),Ut=(e,t=!0)=>Ct.getModule(e,t),Gt=e=>Ct.setModule(e),Vt=(e,t)=>{const o=(e=>{const t=Ut(e);return null==t?void 0:t.styles})(t);return null==o?void 0:o[e]},Wt=e=>{const t=Ct.getModule2(),o=null==t?void 0:t.styles;return null==o?void 0:o[e]},Dt=()=>{const e=Ct.getModule();return null==e?void 0:e.theme},Kt=()=>{const e=Ct.getModule2();return null==e?void 0:e.theme};var Zt=function(e,t,o,r){return new(o||(o=Promise))((function(i,n){function l(e){try{s(r.next(e))}catch(e){n(e)}}function a(e){try{s(r.throw(e))}catch(e){n(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(l,a)}s((r=r.apply(e,t||[])).next())}))};const Qt={},Jt=e=>Zt(void 0,void 0,void 0,(function*(){return Qt[e]?"[object Promise]"===Qt[e].toString()?yield Qt[e]:Promise.resolve(Qt[e]):(Qt[e]=window.fetch(e).then((e=>Zt(void 0,void 0,void 0,(function*(){return yield e.json()})))),Qt[e].then((t=>Zt(void 0,void 0,void 0,(function*(){return Qt[e]=t,t})))))})),eo=t=>Zt(void 0,void 0,void 0,(function*(){if(Yt(t))return Promise.resolve(Ut(t));const o=yield(t=>Zt(void 0,void 0,void 0,(function*(){const o=`${e.urlUtils.getAbsoluteRootUrl()}${t}manifest.json`;return Jt(o).then((t=>(0,e.Immutable)(null!=t?t:{}))).catch((e=>{console.error(e)}))})))(t),r=yield(t=>Zt(void 0,void 0,void 0,(function*(){const o=`${e.urlUtils.getAbsoluteRootUrl()}${t}variables.json`;return Jt(o).then((t=>(0,e.Immutable)(null!=t?t:{}))).catch((e=>{console.error(e)}))})))(t),i=yield((t,o)=>Zt(void 0,void 0,void 0,(function*(){var r;if(null===(r=null==o?void 0:o.styleFiles)||void 0===r?void 0:r.js)return e.moduleLoader.loadModule(`${t}style.js`)})))(t,o),n={uri:t,manifest:o,styles:i,variables:r};return Promise.resolve(n)}));function to(t,o=!1){const r=t.displayName||t.name||"Component",i=e.React.forwardRef(((r,i)=>{const n=tt(),l=e.React.useContext(pe),a=e.React.useContext(Qe),s={};s.theme=n?a:l;let d=r.className;return n&&(d=(0,e.classNames)(d,"theme2-scrollbar")),s.className=d,o&&(s.theme2=n?l:a),e.React.createElement(t,Object.assign({ref:i},s,r))}));return i.displayName=`WithTheme(${r})`,pt(i,t)}function oo(t){const o=t.displayName||t.name||"Component",r=to(t),i=e.React.forwardRef((function(t,o){return e.React.createElement(Ke.Provider,{value:!0},e.React.createElement(r,Object.assign({},t,{ref:o})))}));return i.displayName=`WithTheme2(${o})`,pt(i,t)}const ro=oo,io=({children:t})=>e.React.createElement(Ke.Provider,{value:!0},t),no=({children:t})=>e.React.createElement(Ke.Provider,{value:!1},t);var lo;!function(e){e.SOLID="solid",e.DASHED="dashed",e.DOTTED="dotted",e.DOUBLE="double"}(lo||(lo={}))})(),i})())}}}));