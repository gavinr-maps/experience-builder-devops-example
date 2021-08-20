System.register(["jimu-core","jimu-ui"],(function(t){var e,n;return{setters:[function(t){e=t},function(t){n=t}],execute:function(){t(function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=86)}([function(t,n){t.exports=e},,function(t,e){t.exports=n},,function(t,e,n){"use strict";n.r(e),n.d(e,"emptyFunc",(function(){return a})),n.d(e,"autoBindHandlers",(function(){return s})),n.d(e,"getMaximumId",(function(){return l})),n.d(e,"isPercentage",(function(){return u})),n.d(e,"isNumber",(function(){return c})),n.d(e,"getValueOfBBox",(function(){return d})),n.d(e,"toRatio",(function(){return p})),n.d(e,"fromRatio",(function(){return g})),n.d(e,"mapStateToLayoutProps",(function(){return f})),n.d(e,"mapStateToLayoutItemProps",(function(){return y})),n.d(e,"mapStateToWidgetProps",(function(){return h})),n.d(e,"isWidgetHasEmbeddedLayout",(function(){return v})),n.d(e,"isFunctionalWidget",(function(){return m})),n.d(e,"isWidgetPlaceholder",(function(){return b})),n.d(e,"replaceBoundingBox",(function(){return I})),n.d(e,"updateBoundingBoxProp",(function(){return w})),n.d(e,"relativeClientRect",(function(){return x})),n.d(e,"getBuilderThemeVariables",(function(){return j})),n.d(e,"isRTL",(function(){return S})),n.d(e,"parseAspectRatio",(function(){return O})),n.d(e,"expandStyleArray",(function(){return C})),n.d(e,"calHeightOfLayoutItem",(function(){return T})),n.d(e,"getAppConfig",(function(){return R})),n.d(e,"getCurrentSizeMode",(function(){return M})),n.d(e,"getCurrentPageId",(function(){return P})),n.d(e,"getCurrentDialogId",(function(){return $})),n.d(e,"getActivePagePart",(function(){return k})),n.d(e,"getCurrentDialogRootLayoutId",(function(){return L})),n.d(e,"getCurrentPageRootLayoutId",(function(){return E})),n.d(e,"getHeaderRootLayoutId",(function(){return z})),n.d(e,"getFooterRootLayoutId",(function(){return A})),n.d(e,"contains",(function(){return B})),n.d(e,"intersects",(function(){return N})),n.d(e,"normalizeLinearUnit",(function(){return V})),n.d(e,"getLayoutItemSizeMode",(function(){return F})),n.d(e,"gcd",(function(){return W})),n.d(e,"handleOnebyOneAnimation",(function(){return D}));var o=n(0),i=n(2),r=n(5);const a=()=>{};function s(t,e){e.forEach(e=>{t[e]&&(t[e]=t[e].bind(t))})}function l(t){let e=-1;return t.content&&Object.keys(t.content).forEach(t=>{const n=parseInt(t,10);n>e&&(e=n)}),e}function u(t){return/^-?\d*(\.\d+)?%$/.test(t)}function c(t){const e=parseFloat(t);return!isNaN(e)&&isFinite(e)}function d(t,e){return null==(null==t?void 0:t[e])?null:"string"==typeof t[e]?t[e]:c(t[e])?Math.round(parseFloat(t[e]))+"px":null}function p(t,e){return(100*t/e).toFixed(1)+"%"}function g(t,e){return parseFloat(""+t)*e/100}function f(t,e){var n,o;const i=(null===(n=e.layouts)||void 0===n?void 0:n[t.browserSizeMode])||(null===(o=e.layouts)||void 0===o?void 0:o[t.appConfig.mainSizeMode]),{layouts:r}=t.appConfig;return r[i]?{mainSizeMode:t.appConfig.mainSizeMode,browserSizeMode:t.browserSizeMode,layout:r[i]}:{mainSizeMode:t.appConfig.mainSizeMode,browserSizeMode:t.browserSizeMode,layout:null}}function y(t,e){var n,i,r,a,s,l,u;const c=e.layoutId,{layouts:d,widgets:p}=t.appConfig,g=e.layoutItemId;if(!(null===(i=null===(n=null==d?void 0:d[c])||void 0===n?void 0:n.content)||void 0===i?void 0:i[g]))return{layoutItem:null,selected:!1};let f,y=!1;const h=d[c].content[g];let v=!1;h&&(v=Boolean(h.isPending));const m=null===(r=t.appRuntimeInfo)||void 0===r?void 0:r.selection;m&&(y=m.layoutId===e.layoutId&&m.layoutItemId===h.id,f=m.autoScroll);let b=!1;if(h.type===o.LayoutItemType.Widget&&h.widgetId){const t=p[h.widgetId];b=null!==(l=null===(s=null===(a=null==t?void 0:t.manifest)||void 0===a?void 0:a.properties)||void 0===s?void 0:s.watchViewportVisibility)&&void 0!==l&&l}const I={selected:y,watchViewportVisibility:b,layoutItem:v?null:h};y&&(I.autoScroll=f);const w=null===(u=t.appRuntimeInfo)||void 0===u?void 0:u.animationPreview;if(y&&(null==w?void 0:w.layoutInfo)){const{layoutId:t,layoutItemId:n}=w.layoutInfo;I.animationPreview=t===e.layoutId&&n===e.layoutItemId,I.playMode=I.animationPreview?w.playMode:null,I.previewId=I.animationPreview?w.id:null}return I}function h(t,e){var n,o,i,r,a,s,l,u,c;const d=e.layoutId,{layouts:p}=t.appConfig;if(!p[d])return null;const g=p[d],f=e.layoutItemId,y=g.content[f];let h,b,I,w=!1,x=!1,j=!1,S=!1,O=!1,C=!1,T=!1,R=!1;if(y&&y.widgetId){const e=t.appConfig.widgets[y.widgetId];h=e.style,w=null===(o=null===(n=e.manifest)||void 0===n?void 0:n.properties)||void 0===o?void 0:o.supportInlineEditing,S=null===(r=null===(i=e.manifest)||void 0===i?void 0:i.properties)||void 0===r?void 0:r.supportRepeat,T=null===(s=null===(a=e.manifest)||void 0===a?void 0:a.properties)||void 0===s?void 0:s.canCrossLayoutBoundary;const d=t.widgetsRuntimeInfo[y.widgetId];x=null!==(l=null==d?void 0:d.isClassLoaded)&&void 0!==l&&l,j=w&&(null==d?void 0:d.isInlineEditing),R=(null===(c=null===(u=e.manifest)||void 0===u?void 0:u.extensions)||void 0===c?void 0:c.length)>0,R&&(b=e),I=t.widgetsState[y.widgetId],O=m(y.widgetId,t.appConfig),C=v(y.widgetId,t.appConfig)}return{hasEmbeddedLayout:C,supportInlineEditing:w,supportRepeat:S,isClassLoaded:x,isInlineEditing:j,widgetStyle:h,canCrossLayoutBoundary:T,hasExtension:R,widgetJson:b,widgetId:y.widgetId,isFunctionalWidget:O,widgetState:I}}function v(t,e){var n,o,i,r;const a=null===(n=null==e?void 0:e.widgets)||void 0===n?void 0:n[t];return!!(null===(i=null===(o=null==a?void 0:a.manifest)||void 0===o?void 0:o.properties)||void 0===i?void 0:i.hasEmbeddedLayout)&&Object.keys(null!==(r=null==a?void 0:a.layouts)&&void 0!==r?r:{}).length>0}function m(t,e){var n,i;const r=null===(n=null==e?void 0:e.widgets)||void 0===n?void 0:n[t];return(null===(i=null==r?void 0:r.manifest)||void 0===i?void 0:i.widgetType)!==o.WidgetType.Layout}function b(t,e){var n,i;if(!e||e.itemType!==o.LayoutItemType.Widget)return!1;if(e.layoutInfo){const{layoutId:o,layoutItemId:r}=e.layoutInfo,a=null===(i=null===(n=t.layouts)||void 0===n?void 0:n[o].content)||void 0===i?void 0:i[r];if(a&&!a.widgetId)return!0}return!e.layoutInfo&&!e.uri}function I(t,e,n){if(!t)return Object(o.Immutable)({left:u(e.left)?e.left:Math.round(e.left)+"px",right:u(e.right)?e.right:Math.round(e.right)+"px",top:u(e.top)?e.top:Math.round(e.top)+"px",bottom:u(e.bottom)?e.bottom:Math.round(e.bottom)+"px",width:u(e.width)?e.width:Math.round(e.width)+"px",height:u(e.height)?e.height:Math.round(e.height)+"px"});let i=t;return["left","right","top","bottom","width","height"].forEach(t=>{null!=i[t]?i=w(t,i,e[t],n):null!=e[t]&&(i=i.set(t,Math.round(e[t])+"px"))}),i}function w(t,e,n,o){if(null==e[t]||"auto"===e[t])return e;let i=e;return i=u(e[t])?"left"===t||"right"===t||"width"===t?u(n)?e.set(t,n):e.set(t,(100*+n/o.width).toFixed(4)+"%"):u(n)?e.set(t,n):e.set(t,(100*+n/o.height).toFixed(4)+"%"):u(n)?"left"===t||"right"===t||"width"===t?e.set(t,Math.round(parseFloat(""+n)*o.width/100)):e.set(t,Math.round(parseFloat(""+n)*o.height/100)):isNaN(+n)?e.without(t):e.set(t,Math.round(+n)+"px"),i}function x(t,e){return{left:t.left-e.left,top:t.top-e.top,right:t.right,bottom:t.bottom,width:t.width,height:t.height,id:null}}function j(){const t=window.parent;if(t&&t.jimuConfig&&t.jimuConfig.isBuilder)return t._appState.theme}function S(){var t,e;return null!==(e=null===(t=Object(o.getAppStore)().getState().appContext)||void 0===t?void 0:t.isRTL)&&void 0!==e&&e}function O(t){let e=100,n=100;if("number"==typeof t)e=100,n=Math.round(100*t);else if("string"==typeof t){const o=t.split(":");e=parseInt(o[0],10),n=parseInt(o[1],10)}return n/e}function C(t){return t&&0!==t.length?1===t.length?[t[0],t[0],t[0],t[0]]:2===t.length?[t[0],t[1],t[0],t[1]]:3===t.length?[t[0],t[1],t[2],0]:[t[0],t[1],t[2],t[3]]:[0,0,0,0]}function T(t,e){var n,o,i,a;const s=null!==(n=e.setting)&&void 0!==n?n:{},l=F("height",e.bbox,s.autoProps);if(l!==r.f.Custom)return{height:l===r.f.Stretch?t:null,setting:{autoProps:{height:l}}};let c;if("ratio"===s.heightMode)c={setting:{heightMode:"ratio",aspectRatio:null!==(o=s.aspectRatio)&&void 0!==o?o:1,autoProps:{height:r.f.Custom}}};else{let n=null!==(a=null===(i=e.bbox)||void 0===i?void 0:i.height)&&void 0!==a?a:t;n=u(n)?g(n,t):parseInt(n),c={height:n,setting:{heightMode:"fixed",autoProps:{height:r.f.Custom}}}}return c}function R(){var t;return window.jimuConfig.isBuilder?null===(t=Object(o.getAppStore)().getState().appStateInBuilder)||void 0===t?void 0:t.appConfig:Object(o.getAppStore)().getState().appConfig}function M(){var t;return window.jimuConfig.isBuilder?null===(t=Object(o.getAppStore)().getState().appStateInBuilder)||void 0===t?void 0:t.browserSizeMode:Object(o.getAppStore)().getState().browserSizeMode}function P(){var t,e,n;return window.jimuConfig.isBuilder?null===(e=null===(t=Object(o.getAppStore)().getState().appStateInBuilder)||void 0===t?void 0:t.appRuntimeInfo)||void 0===e?void 0:e.currentPageId:null===(n=Object(o.getAppStore)().getState().appRuntimeInfo)||void 0===n?void 0:n.currentPageId}function $(){var t,e,n;return window.jimuConfig.isBuilder?null===(e=null===(t=Object(o.getAppStore)().getState().appStateInBuilder)||void 0===t?void 0:t.appRuntimeInfo)||void 0===e?void 0:e.currentDialogId:null===(n=Object(o.getAppStore)().getState().appRuntimeInfo)||void 0===n?void 0:n.currentDialogId}function k(){var t,e,n;return window.jimuConfig.isBuilder?null===(e=null===(t=Object(o.getAppStore)().getState().appStateInBuilder)||void 0===t?void 0:t.appRuntimeInfo)||void 0===e?void 0:e.activePagePart:null===(n=Object(o.getAppStore)().getState().appRuntimeInfo)||void 0===n?void 0:n.activePagePart}function L(){var t,e,n;const i=window.jimuConfig.isBuilder?null===(t=Object(o.getAppStore)().getState().appStateInBuilder)||void 0===t?void 0:t.appConfig:Object(o.getAppStore)().getState().appConfig,r=$(),a=M();return null===(n=null===(e=null==i?void 0:i.dialogs[r])||void 0===e?void 0:e.layout)||void 0===n?void 0:n[a]}function E(){var t,e,n;const i=window.jimuConfig.isBuilder?null===(t=Object(o.getAppStore)().getState().appStateInBuilder)||void 0===t?void 0:t.appConfig:Object(o.getAppStore)().getState().appConfig,r=P(),a=M();return null===(n=null===(e=null==i?void 0:i.pages[r])||void 0===e?void 0:e.layout)||void 0===n?void 0:n[a]}function z(){var t,e,n;const i=window.jimuConfig.isBuilder?null===(t=Object(o.getAppStore)().getState().appStateInBuilder)||void 0===t?void 0:t.appConfig:Object(o.getAppStore)().getState().appConfig,r=M();return null===(n=null===(e=null==i?void 0:i.header)||void 0===e?void 0:e.layout)||void 0===n?void 0:n[r]}function A(){var t,e,n;const i=window.jimuConfig.isBuilder?null===(t=Object(o.getAppStore)().getState().appStateInBuilder)||void 0===t?void 0:t.appConfig:Object(o.getAppStore)().getState().appConfig,r=M();return null===(n=null===(e=null==i?void 0:i.footer)||void 0===e?void 0:e.layout)||void 0===n?void 0:n[r]}function B(t,e){return e.left>=t.left&&e.left+e.width<=t.left+t.width&&e.top>=t.top&&e.top+e.height<=t.top+t.height}function N(t,e){return!(e.left>t.left+t.width||e.left+e.width<t.left||e.top>t.top+t.height||e.top+e.height<t.top)}function V(t){var e,n,r,a;let s,l;if(null!=t&&"object"==typeof t)s=null!==(e=t.unit)&&void 0!==e?e:i.UnitTypes.PIXEL,l=null!==(n=t.distance)&&void 0!==n?n:0;else{const e=o.polished.getValueAndUnit(t);s=null!==(r=null==e?void 0:e[1])&&void 0!==r?r:i.UnitTypes.PIXEL,l=null!==(a=null==e?void 0:e[0])&&void 0!==a?a:0}return l=s===i.UnitTypes.PERCENTAGE?Math.round(10*l)/10:Math.round(l),`${l}${s}`}function F(t,e,n){const o=null==n?void 0:n[t],i="width"===t?"left":"top",a="width"===t?"right":"bottom";if(!o)return null!=e[t]?r.f.Custom:null!=e[i]&&null!=e[a]?r.f.Stretch:r.f.Auto;if(!0===o)return null!=e[i]&&null!=e[a]?r.f.Stretch:r.f.Auto;switch(o){case r.f.Auto:return r.f.Auto;case r.f.Stretch:return r.f.Stretch;default:return r.f.Custom}}function W(t,e){let n=Math.max(t,e),o=Math.min(t,e);for(;0!==o;){const t=o;o=n%o,n=t}return n}function D(t){if(!t.animationStyle)return{};const{isPlaying:e,revert:n,enableScroll:o,animationStyle:i,playId:r}=t;return{isParentPlaying:e,isParentRevert:n,isParentEnableScroll:o,parentAnimationStyle:i,parentPlayId:r}}},function(t,e,n){"use strict";var o,i;n.d(e,"i",(function(){return o})),n.d(e,"j",(function(){return i})),n.d(e,"b",(function(){return r})),n.d(e,"d",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"h",(function(){return l})),n.d(e,"a",(function(){return u})),n.d(e,"e",(function(){return c})),n.d(e,"g",(function(){return d})),n.d(e,"f",(function(){return p})),function(t){t[t.BringForward=0]="BringForward",t[t.SendBackward=1]="SendBackward",t[t.BringToFront=2]="BringToFront",t[t.SendToBack=3]="SendToBack"}(o||(o={})),function(t){t.Page="PAGE",t.Widget="WIDGET",t.View="VIEW",t.Screen="SCREEN"}(i||(i={}));const r=12,a=28,s=16,l=16,u=5,c=3;var d,p;!function(t){t.Auto="auto",t[t.Normal=0]="Normal",t[t.BoundaryDropArea=10]="BoundaryDropArea",t[t.DragMoveTip=20]="DragMoveTip",t[t.HandlerTools=30]="HandlerTools",t[t.DraggingItem=40]="DraggingItem"}(d||(d={})),function(t){t.Auto="AUTO",t.Stretch="STRETCH",t.Custom="CUSTOM"}(p||(p={}))},function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"e",(function(){return s})),n.d(e,"d",(function(){return l})),n.d(e,"c",(function(){return u})),n.d(e,"l",(function(){return c})),n.d(e,"o",(function(){return d})),n.d(e,"p",(function(){return p})),n.d(e,"q",(function(){return g})),n.d(e,"j",(function(){return f})),n.d(e,"z",(function(){return y})),n.d(e,"x",(function(){return h})),n.d(e,"E",(function(){return v})),n.d(e,"k",(function(){return m})),n.d(e,"n",(function(){return b})),n.d(e,"r",(function(){return I})),n.d(e,"u",(function(){return w})),n.d(e,"w",(function(){return x})),n.d(e,"t",(function(){return j})),n.d(e,"s",(function(){return S})),n.d(e,"a",(function(){return O})),n.d(e,"y",(function(){return C})),n.d(e,"A",(function(){return T})),n.d(e,"i",(function(){return R})),n.d(e,"m",(function(){return M})),n.d(e,"h",(function(){return P})),n.d(e,"g",(function(){return $})),n.d(e,"B",(function(){return k})),n.d(e,"C",(function(){return L})),n.d(e,"v",(function(){return z})),n.d(e,"f",(function(){return A})),n.d(e,"D",(function(){return B}));var o=n(0),i=n(18),r=n(5);function a(t,e){var n,o,i;if(!e)return null;const{layoutId:r,layoutItemId:a}=e;return null===(i=null===(o=null===(n=t.layouts)||void 0===n?void 0:n[r])||void 0===o?void 0:o.content)||void 0===i?void 0:i[a]}function s(t,e){if(t.sections)for(const n in t.sections){if(t.sections[n].views.includes(e))return n}return null}function l(t,e){let n=e.layouts[t];for(;null!=(null==n?void 0:n.parent);){if(n.parentType===r.j.View){const t=n.parent;return{viewId:t,sectionId:e.views[t].parent}}const t=Object(i.b)(e,n.id);n=e.layouts[t]}return{viewId:null,sectionId:null}}function u(t,e){let n=e.layouts[t];for(;null!=(null==n?void 0:n.parent);){if(n.parentType===r.j.Screen){const t=n.parent;return{screenId:t,screenGroupId:e.screens[t].parent}}const t=Object(i.b)(e,n.id);n=e.layouts[t]}return{screenId:null,screenGroupId:null}}function c(t){switch(t.type){case o.LayoutItemType.Widget:return"string"==typeof t.widgetId?t.widgetId:null;case o.LayoutItemType.Section:return"string"==typeof t.sectionId?t.sectionId:null;case o.LayoutItemType.ScreenGroup:return"string"==typeof t.screenGroupId?t.screenGroupId:null;default:return null}}function d(t,e,n=!1){return(null==t?void 0:t.content)?Object.keys(t.content).filter(o=>t.content[o].type===e&&!!c(t.content[o])&&(n||!t.content[o].isPending)).map(e=>c(t.content[e])):[]}function p(t,e,n,i,r=!1){let a=[];const s=d(t.layouts[e],o.LayoutItemType.Widget,r),l=d(t.layouts[e],o.LayoutItemType.Section,r),u=d(t.layouts[e],o.LayoutItemType.ScreenGroup,r);n===o.LayoutItemType.Widget?a=a.concat(s):n===o.LayoutItemType.Section?a=a.concat(l):n===o.LayoutItemType.ScreenGroup&&(a=a.concat(u));return s.filter(e=>{var n,i,r,a,s;return(null===(i=null===(n=t.widgets[e])||void 0===n?void 0:n.manifest)||void 0===i?void 0:i.widgetType)===o.WidgetType.Layout||(null===(s=null===(a=null===(r=t.widgets[e])||void 0===r?void 0:r.manifest)||void 0===a?void 0:a.properties)||void 0===s?void 0:s.hasEmbeddedLayout)}).forEach(e=>{var o;Object.keys(null!==(o=t.widgets[e].layouts)&&void 0!==o?o:{}).forEach(o=>{const s=t.widgets[e].layouts[o][i];a=a.concat(p(t,s,n,i,r))})}),l.forEach(e=>{var o,s;null===(s=null===(o=t.sections)||void 0===o?void 0:o[e])||void 0===s||s.views.forEach(e=>{t.views[e]&&t.views[e].layout[i]&&(a=a.concat(p(t,t.views[e].layout[i],n,i,r)))})}),u.forEach(e=>{var o,s;null===(s=null===(o=t.screenGroups)||void 0===o?void 0:o[e])||void 0===s||s.screens.forEach(e=>{var o,s,l,u,c,d,g;(null===(l=null===(s=null===(o=t.screens)||void 0===o?void 0:o[e])||void 0===s?void 0:s.main.layout)||void 0===l?void 0:l[i])&&(a=a.concat(p(t,t.screens[e].main.layout[i],n,i,r))),(null===(g=null===(d=null===(c=null===(u=t.screens)||void 0===u?void 0:u[e])||void 0===c?void 0:c.panel)||void 0===d?void 0:d.layout)||void 0===g?void 0:g[i])&&(a=a.concat(p(t,t.screens[e].panel.layout[i],n,i,r)))})}),a}function g(t,e,n,i,r=!1){let a=[];const s=d(t.layouts[e],o.LayoutItemType.Widget,r),l=d(t.layouts[e],o.LayoutItemType.Section,r),u=d(t.layouts[e],o.LayoutItemType.ScreenGroup,r);a=n===o.LayoutItemType.Widget?a.concat(s):n===o.LayoutItemType.ScreenGroup?a.concat(u):a.concat(l);return s.filter(e=>t.widgets&&t.widgets[e]&&t.widgets[e].manifest.widgetType===o.WidgetType.Layout).forEach(e=>{Object.keys(t.widgets[e].layouts).forEach(o=>{const s=O(t.widgets[e].layouts[o],i,t.mainSizeMode);a=a.concat(g(t,s,n,i,r))})}),a}function f(t,e,n){if(!(null==t?void 0:t.content))return null;const o=Object.keys(t.content).find(o=>t.content[o].type===n&&(t.content[o].widgetId===e||t.content[o].sectionId===e||t.content[o].screenGroupId===e)&&!t.content[o].isPending);return t.content[o]}function y(t,e,n=!1){const o=t.layouts[e];return(null==o?void 0:o.content)?n?Object.keys(o.content):Object.keys(o.content).filter(t=>!o.content[t].isPending):[]}function h(t,e,n=!1){return(null==t?void 0:t.content)?Object.keys(t.content).filter(o=>t.content[o].type===e&&!!c(t.content[o])&&(n||!t.content[o].isPending)).map(e=>({layoutId:t.id,layoutItemId:e})):[]}function v(t,e){return Object.keys(t.widgets).find(n=>{const o=t.widgets[n];if(o.layouts)return Object.keys(o.layouts).some(t=>void 0!==Object.keys(o.layouts[t]).find(n=>o.layouts[t][n]===e))})}function m(t,e,n,i){const r=t.pages&&Object.keys(t.pages).find(o=>{const r=O(t.pages[o].layout,i,t.mainSizeMode);return g(t,r,n,i).includes(e)});if(r)return{type:o.ContainerType.Page,id:r};const a=t.dialogs&&Object.keys(t.dialogs).find(o=>{const r=O(t.dialogs[o].layout,i,t.mainSizeMode);return g(t,r,n,i).includes(e)});if(a)return{type:o.ContainerType.Dialog,id:a};if(t.header){const r=O(t.header.layout,i,t.mainSizeMode);if(g(t,r,n,i).includes(e))return{type:o.ContainerType.Header,id:"header"}}if(t.footer){const r=O(t.footer.layout,i,t.mainSizeMode);if(g(t,r,n,i).includes(e))return{type:o.ContainerType.Footer,id:"footer"}}const s=t.views&&Object.keys(t.views).find(o=>{const r=O(t.views[o].layout,i,t.mainSizeMode);return g(t,r,n,i).includes(e)});if(s)return{type:o.ContainerType.View,id:s};if(t.screens){const r=Object.keys(t.screens).find(o=>{const r=O(t.screens[o].main.layout,i,t.mainSizeMode);return g(t,r,n,i).includes(e)});if(r)return{type:o.ContainerType.ScreenMain,id:r};const a=Object.keys(t.screens).find(o=>{var r;const a=O(null===(r=t.screens[o].panel)||void 0===r?void 0:r.layout,i,t.mainSizeMode);return g(t,a,n,i).includes(e)});if(a)return{type:o.ContainerType.ScreenPanel,id:a}}}function b(t,e,n,i){const r=t.pages&&Object.keys(t.pages).find(o=>{const r=O(t.pages[o].layout,i,t.mainSizeMode);return p(t,r,n,i).includes(e)});if(r)return{type:o.RootContainerType.Page,id:r};const a=t.dialogs&&Object.keys(t.dialogs).find(o=>{const r=O(t.dialogs[o].layout,i,t.mainSizeMode);return p(t,r,n,i).includes(e)});if(a)return{type:o.RootContainerType.Dialog,id:a};if(t.header){const r=O(t.header.layout,i,t.mainSizeMode);if(p(t,r,n,i).includes(e))return{type:o.RootContainerType.Header,id:"header"}}if(t.footer){const r=O(t.footer.layout,i,t.mainSizeMode);if(p(t,r,n,i).includes(e))return{type:o.RootContainerType.Footer,id:"footer"}}}function I(t,e,n,o){return g(t,O(t.pages[e].layout,o,t.mainSizeMode),n,o)}function w(t,e,n,o){var i;const r=g(t,O(t.screens[e].main.layout,o,t.mainSizeMode),n,o);if(t.screens[e].panel){const a=g(t,O(null===(i=t.screens[e].panel)||void 0===i?void 0:i.layout,o,t.mainSizeMode),n,o);return r.concat(a)}return r}function x(t,e,n,o){var i;return g(t,O(null===(i=t.views[e])||void 0===i?void 0:i.layout,o,t.mainSizeMode),n,o)}function j(t,e,n){return g(t,O(t.header.layout,n,t.mainSizeMode),e,n)}function S(t,e,n){return g(t,O(t.footer.layout,n,t.mainSizeMode),e,n)}function O(t,e,n){return t?t[e]||t[n]:null}function C(t,e,n,i){if(i){const r=T(t,n,e,i);if(r)return E(t,n,e,r,i);{const r=m(t,n,e,i);if(!r)return[];const a=function(t,e,n){var i;return e.type===o.ContainerType.Footer?t.footer.layout[n]:e.type===o.ContainerType.Header?t.header.layout[n]:e.type===o.ContainerType.ScreenMain?t.screens[e.id].main.layout[n]:e.type===o.ContainerType.ScreenPanel?null===(i=t.screens[e.id].panel)||void 0===i?void 0:i.layout[n]:t[e.type][e.id].layout[n]}(t,r,i);return[{layoutId:a,layoutItemId:f(t.layouts[a],n,e).id}]}}{const o=[];return Object.keys(t.layouts).forEach(i=>{y(t,i,!0).forEach(r=>{const a=t.layouts[i].content[r];e!==a.type||a.widgetId!==n&&a.sectionId!==n&&a.screenGroupId!==n||o.push({layoutId:i,layoutItemId:r})})}),o}}function T(t,e,n,o){return Object.keys(t.widgets).find(i=>{const r=t.widgets[i];if(r.layouts)return Object.keys(r.layouts).some(i=>{const a=r.layouts[i][o],s=t.layouts[a];return s&&s.content&&void 0!==Object.keys(s.content).find(t=>s.content[t].type===n&&(s.content[t].widgetId===e||s.content[t].sectionId===e))})})}function R(t,e,n,o){const i=t.widgets[e];if(!i.layouts)return[];let r=[];return Object.keys(i.layouts).forEach(e=>{Object.keys(i.layouts[e]).forEach(a=>{const s=t.layouts[i.layouts[e][a]];r=r.concat(d(s,n,o))})}),Array.from(new Set(r))}function M(t,e,n,o){const i=[];let r=!1;const a=(t,e,n,a)=>{const s=O(n,o,void 0),l=f(t.layouts[s],e,a);let u;return l&&(u={layoutId:s,layoutItemId:l.id},i.push(u),r=!0),u};return t.pages&&Object.keys(t.pages).find(o=>{const i=t.pages[o];return!(!i.layout||!a(t,e,i.layout,n))}),r?i:(t.views&&Object.keys(t.views).find(o=>{const i=t.views[o];return!!a(t,e,i.layout,n)}),r?i:(t.dialogs&&Object.keys(t.dialogs).find(o=>{const i=t.dialogs[o];return!!a(t,e,i.layout,n)}),r?i:(t.header&&a(t,e,t.header.layout,n),r?i:(t.footer&&a(t,e,t.footer.layout,n),r||t.widgets&&Object.keys(t.widgets).find(o=>{const i=t.widgets[o];return i.layouts&&Object.keys(i.layouts).forEach(o=>{a(t,e,i.layouts[o],n)}),!!r}),i))))}function P(t,e,n){const o=t.widgets[n];if(!o)return;let i;return Object.keys(o.layouts).find(t=>{if(Object.keys(o.layouts[t]).find(n=>{if(o.layouts[t][n]===e)return i=n,!0}))return!0}),i}function $(t,e){var n,o;let i=null;const r=t=>t?Object.keys(t).find(n=>t[n]===e):null;return Object.keys(t.widgets||{}).some(e=>Object.keys(t.widgets[e].layouts||{}).some(n=>{if(i)return!0;i=r(t.widgets[e].layouts[n])})),i||(Object.keys(t.views||{}).some(e=>{if(i)return!0;i=r(t.views[e].layout)}),i||(Object.keys(t.pages||{}).some(e=>{if(i)return!0;i=r(t.pages[e].layout)}),i||(Object.keys(t.dialogs||{}).some(e=>{if(i)return!0;i=r(t.dialogs[e].layout)}),i||(Object.keys(t.screens||{}).some(e=>{var n,o;return!!i||(i=r(null===(n=t.screens[e].main)||void 0===n?void 0:n.layout),!!i||void(i=r(null===(o=t.screens[e].panel)||void 0===o?void 0:o.layout)))}),i||(i=r(null===(n=t.header)||void 0===n?void 0:n.layout),i||(i=r(null===(o=t.footer)||void 0===o?void 0:o.layout),i||null))))))}function k(t,e,n,i){if(!t.widgets[n])return[];const r=t.layouts[e.layoutId]&&t.layouts[e.layoutId].content&&t.layouts[e.layoutId].content[e.layoutItemId];if(!r)return[];const a=r.type;let s;return a===o.LayoutItemType.Section?s=r.sectionId:a===o.LayoutItemType.Widget&&(s=r.widgetId),s?E(t,s,a,n,i):function(t,e,n){const o=t.widgets[e];if(!o)return!1;let i=!1;return o.layouts&&Object.keys(o.layouts).forEach(e=>{i||Object.keys(o.layouts[e]).forEach(r=>{if(i)return;const a=o.layouts[e][r];y(t,a,!0).forEach(t=>{i||n.layoutId===a&&n.layoutItemId===t&&(i=!0)})})}),i}(t,n,e)?[e]:[]}function L(t,e,n,o){return k(t,e,n,o).map(e=>t.layouts[e.layoutId][e.layoutItemId])}function E(t,e,n,i,r){const a=t.widgets[i];if(!a||!e)return[];const s=[];return a.layouts&&Object.keys(a.layouts).forEach(i=>{const l=a.layouts[i][r],u=t.layouts[l];u&&u.content&&Object.keys(u.content).forEach(i=>{const a=u.content[i];if(a.type!==n||a.widgetId!==e&&a.sectionId!==e&&a.screenGroupId!==e){if(a.type===o.LayoutItemType.Widget){const i=t.widgets[a.widgetId];i&&i.manifest.widgetType===o.WidgetType.Layout&&s.push(...E(t,e,n,i.id,r))}}else s.push({layoutId:u.id,layoutItemId:a.id})})}),s}function z(t,e,n,i,r){const a=m(t,e,n,r);if(!a)return[];switch(a.type){case o.ContainerType.Page:return I(t,a.id,i,r);case o.ContainerType.Header:return j(t,i,r);case o.ContainerType.Footer:return S(t,i,r);case o.ContainerType.View:return x(t,a.id,i,r);case o.ContainerType.Dialog:return function(t,e,n,o){return g(t,O(t.dialogs[e].layout,o,t.mainSizeMode),n,o)}(t,a.id,i,r);case o.ContainerType.ScreenMain:case o.ContainerType.ScreenPanel:return w(t,a.id,i,r)}}function A(t,e,n){var i,r;const a=t.pages[e],s=null===(i=null==a?void 0:a.layout)||void 0===i?void 0:i[n],l=t.layouts[s],u=[];return(null==l?void 0:l.type)===o.LayoutType.FlowLayout&&Object.keys(null!==(r=l.content)&&void 0!==r?r:{}).sort().forEach(e=>{var n;const i=l.content[e];if(!i.isPending&&!(null===(n=i.setting)||void 0===n?void 0:n.isFloating)&&i.type===o.LayoutItemType.Widget){const n=function(t,e){const{layoutId:n,layoutItemId:o}=e,i=t.layouts[n].content[o],r=t.widgets[i.widgetId];if(r)return{label:r.label,id:`${n}_block_${o}`};return null}(t,{layoutId:s,layoutItemId:e});n&&u.push(n)}}),u}function B(t,e,n){var i,r;const a=t.pages[e],s=null===(i=null==a?void 0:a.layout)||void 0===i?void 0:i[n],l=t.layouts[s],u=[];return(null==l?void 0:l.type)===o.LayoutType.FlowLayout&&Object.keys(null!==(r=l.content)&&void 0!==r?r:{}).sort().forEach(e=>{var n;const i=l.content[e];if(!i.isPending&&!(null===(n=i.setting)||void 0===n?void 0:n.isFloating)&&i.type===o.LayoutItemType.ScreenGroup){const e=t.screenGroups[i.screenGroupId],n=[];null==e||e.screens.forEach(e=>{const o=function(t,e,n){const o=t.screens[n];if(o)return{label:o.label,id:`${e}_screen_${n}`};return null}(t,s,e);o&&n.push(o)}),u.push({id:e.id,label:e.label,screens:n})}}),u}},,function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"e",(function(){return r})),n.d(e,"b",(function(){return a})),n.d(e,"d",(function(){return s})),n.d(e,"c",(function(){return l}));var o=n(0);const i=o.React.createContext({viewOnly:!0}),r=o.React.createContext(!0),a=o.React.createContext(!0),s=o.React.createContext({isInView:!1,isInCurrentView:!1}),l=o.React.createContext("")},function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return i}));const o=2,i=12},,function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return r}));var o,i=n(0);!function(t){t.Horizontal="H",t.Vertical="V"}(o||(o={}));const r={showSplitter:!0,splitterSize:5,splitterColor:"#000"};i.React.createContext(r)},function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return i}));const o=.33,i=75},,function(t,e,n){"use strict";n.d(e,"f",(function(){return a})),n.d(e,"e",(function(){return s})),n.d(e,"c",(function(){return l})),n.d(e,"a",(function(){return u})),n.d(e,"d",(function(){return c})),n.d(e,"b",(function(){return d}));var o=n(4),i=n(0),r=n(5);function a(t,e,n,i=!1){const r={};r.left=t.left+n.dx,r.width=t.width+n.dw;const a=e.right-t.right;0===n.dw?r.right=a-n.dx:0===n.dx?r.right=a-n.dw:r.right=a,r.top=t.top+n.dy,r.height=t.height+n.dh;const s=e.bottom-t.bottom;return 0===n.dh?r.bottom=s-n.dy:0===n.dy?r.bottom=s-n.dh:r.bottom=s,i&&Object(o.isRTL)()?l(r):r}function s(t,e){var n,i,a,s,l;const u={};let c=null!==(n=null==e?void 0:e.autoProps)&&void 0!==n?n:{},d=t;const p=Object(o.getLayoutItemSizeMode)("height",t,c),g=Object(o.getLayoutItemSizeMode)("width",t,c);if(p===r.f.Stretch)u.top=d.top,u.bottom=d.bottom;else{const n=null!==(i=c.top)&&void 0!==i&&i,o=null!==(a=c.bottom)&&void 0!==a&&a;p===r.f.Custom&&(u.height=d.height),n!==o&&!o||null==t.top?u.bottom=d.bottom:u.top=d.top,e.vCenter&&"50%"===d.top&&(u.top="50%")}if(g===r.f.Stretch)u.left=d.left,u.right=d.right;else{const t=null!==(s=c.left)&&void 0!==s&&s,n=null!==(l=c.right)&&void 0!==l&&l;g===r.f.Custom&&(u.width=d.width),t===n?null!=d.left?u.left=d.left:u.right=d.right:t&&null!=d.right?u.right=d.right:u.left=d.left,e.hCenter&&"50%"===d.left&&(u.left="50%")}return u}function l(t){const e=Object(i.Immutable)(t),n=t.left;return e.set("left",t.right).set("right",n)}function u(t,e,n=!1){const o={},i=e.hCenter&&"50%"===t.left,r=e.vCenter&&"50%"===t.top;return i&&r?(o.right="auto",o.bottom="auto",o.transform="translate(-50%, -50%)"):i?(o.right="auto",o.transform="translateX(-50%)"):r&&(o.bottom="auto",o.transform="translateY(-50%)"),!n&&c(e)&&(o.height="auto"),o}function c(t){return"ratio"===t.heightMode}function d(t,e,n,a){var s,l;let u=t,c=Object(i.Immutable)(null!=e?e:{});return(null===(s=null==e?void 0:e.autoProps)||void 0===s?void 0:s.width)!==r.f.Stretch&&(c=a.left<a.right?Object(o.isRTL)()?c.setIn(["autoProps","right"],!1).setIn(["autoProps","left"],!0):c.setIn(["autoProps","left"],!1).setIn(["autoProps","right"],!0):Object(o.isRTL)()?c.setIn(["autoProps","left"],!1).setIn(["autoProps","right"],!0):c.setIn(["autoProps","right"],!1).setIn(["autoProps","left"],!0)),(null===(l=null==e?void 0:e.autoProps)||void 0===l?void 0:l.height)!==r.f.Stretch&&(c=a.top<a.bottom?c.setIn(["autoProps","top"],!1).setIn(["autoProps","bottom"],!0):c.setIn(["autoProps","top"],!0).setIn(["autoProps","bottom"],!1)),["left","right","top","bottom","width","height"].forEach(e=>{const i="left"===e||"right"===e||"width"===e?n.width:n.height;let r=Object(o.isPercentage)(t[e]);Object(o.isRTL)()&&("left"===e?r=Object(o.isPercentage)(t.right):"right"===e&&(r=Object(o.isPercentage)(t.left))),u=null==t[e]||r?u.set(e,Object(o.toRatio)(a[e],i)):u.set(e,Math.round(a[e])+"px")}),{bbox:u,setting:c}}},function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return r}));var o=n(2);const i={space:10,style:{padding:{number:[10],unit:o.UnitTypes.PIXEL}}},r={heightMode:"fixed",aspectRatio:1,offsetX:0,offsetY:0,style:{alignSelf:"flex-start"}}},function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return r}));var o=n(2);const i={gutter:0,style:{padding:{number:[0],unit:"px"},justifyContent:"flex-start",alignItems:"stretch",borderRadius:{number:[0],unit:o.UnitTypes.PIXEL}}},r={lockParent:!0,heightMode:"auto",offsetX:0,offsetY:0}},function(t,e,n){"use strict";e.a={previousView:"Previous view",nextView:"Next view",originTL:"Top left as origin",originTR:"Top right as origin",originBL:"Bottom left as origin",originBR:"Bottom right as origin",alignLeft:"Align left",alignRight:"Align right",alignTop:"Align top",alignCenter:"Align center",alignHCenter:"Horizontal center",alignVCenter:"Vertical center",alignBottom:"Align bottom",alignStretch:"Align stretch",sendBackward:"Send backward",bringForward:"Bring forward",sendToBack:"Send to back",bringToFront:"Bring to front",zoomoutFixed:"Zoom out fixed",order:"Order",moveToLeft:"Move to left",moveToRight:"Move to right",moveToTop:"Move to top",moveToBottom:"Move to bottom",addView:"Add view",duplicateScreen:"Duplicate screen",deleteScreen:"Delete screen",applyToFirstPanel:"Apply to the first panel",deleteView:"Delete view",duplicateView:"Duplicate view",insertABlock:"Insert block",insertAScreenGroup:"Insert screen group",moveup:"Move up",movedown:"Move down",chooseTemplate:"Choose a {type} template",chooseHeaderTemplate:"Choose a header template",chooseFooterTemplate:"Choose a footer template",dropWidgetToAdd:"Or drag a widget here",snapToLeft:"Snap to left",snapToTop:"Snap to top",snapToBottom:"Snap to bottom",snapToRight:"Snap to right",fullWidth:"Full width",fullHeight:"Full height",fullSize:"Full size",restoreSize:"Restore size",pendingTip:"Move to the pending list",setting:"Settings",dragToMove:"Drag to move",lockLayout:"Lock position and size",unlockLayout:"Unlock position and size",editHeader:"Edit header",editFooter:"Edit footer",transform:"Transform",rotation:"Rotation",angle:"Angle",floating:"Pin",sinking:"Unpin",floatingArea:"Floating area",changeToAuto:"Change to auto",changeToCustom:"Change to custom",positionType:"Position type",sticky:"Sticky",fixed:"Fixed",flow:"Flow",stack:"Stack",fixedAtTop:"Floating at the top when scrolling",actNormal:"Act as normal widget",hideInDesignView:"Hide in design view",showInDesignView:"Show in design view"}},function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return a})),n.d(e,"c",(function(){return s}));var o=n(0),i=n(5);function r(t,e){const n=t.layouts[e];if(null!=n)switch(n.parentType){case i.j.Widget:return t.widgets[n.parent].parent;case i.j.View:{const e=t.views[n.parent].parent;return t.sections[e].parent}case i.j.Screen:{const e=t.screens[n.parent].parent;return t.screenGroups[e].parent}}return null}function a(t,e,n,r,s,l){var u;let c=null!=l?l:Object(o.Immutable)({});const d=t.layouts[e];return null!=d&&(c=c.setIn(["layouts",e],{id:e,parent:n,parentType:r}),Object.keys(null!==(u=d.content)&&void 0!==u?u:{}).forEach(n=>{const r=d.content[n];switch(r.type){case o.LayoutItemType.Widget:c=function(t,e,n,o,r){let s=r;const l=t.widgets[n];null!=l&&(s=s.setIn(["widgets",n],{id:n,parent:o}),null!=l.layouts&&Object.keys(l.layouts).forEach(o=>{const r=l.layouts[o][e];s=a(t,r,n,i.j.Widget,e,s)}));return s}(t,s,r.widgetId,e,c);break;case o.LayoutItemType.Section:c=function(t,e,n,o,r){let s=r;const l=t.sections[n];null!=l&&(s=s.setIn(["sections",n],{id:n,parent:o}),l.views.forEach(o=>{s=s.setIn(["views",o],{id:o,parent:n});const r=t.views[o].layout[e];s=a(t,r,o,i.j.View,e,s)}));return s}(t,s,r.sectionId,e,c);break;case o.LayoutItemType.ScreenGroup:c=function(t,e,n,o,r){let s=r;const l=t.screenGroups[n];null!=l&&(s=s.setIn(["screenGroups",n],{id:n,parent:o}),l.screens.forEach(o=>{var r;s=s.setIn(["screens",o],{id:o,parent:n});const l=t.screens[o],u=l.main.layout[e];if(s=a(t,u,o,i.j.Screen,e,s),null!=(null===(r=l.panel)||void 0===r?void 0:r.layout)){const n=l.panel.layout[e];s=a(t,n,o,i.j.Screen,e,s)}}));return s}(t,s,r.screenGroupId,e,c)}})),c}function s(t,e,n,s){var l;const{layoutId:u}=t,c=a(e,n,"",i.j.Page,s),d=c.layouts[u];let p;if(d.parentType===i.j.Widget)p=d.parent;else if(d.parentType===i.j.View){const t=d.parent;p=c.views[t].parent}else if(d.parentType===i.j.Screen){const t=d.parent;p=c.screens[t].parent}const g=r(c,u);if(null!=g){const t=e.layouts[g];return{layoutId:g,layoutItemId:Object.keys(null!==(l=t.content)&&void 0!==l?l:{}).find(e=>{const n=t.content[e];return n.type===o.LayoutItemType.Widget&&n.widgetId===p||n.type===o.LayoutItemType.Section&&n.sectionId===p||n.type===o.LayoutItemType.ScreenGroup&&n.screenGroupId===p})}}return null}},function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return r}));var o=n(0);const i=o.lodash.assign({},{gridSize:1}),r=o.lodash.assign({},{order:0},{lockParent:!1,lockLayout:!1,autoProps:{}})},function(t,e,n){"use strict";n.d(e,"c",(function(){return s})),n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return u}));var o=n(0),i=n(2),r=n(4),a=n(6);function s(t,e){var n,r,s,l;let u=!0,c=!1;const{layoutItem:d}=e,p=null===(n=t.appRuntimeInfo)||void 0===n?void 0:n.selection;if(p&&(c=p.layoutId===e.layoutId&&p.layoutItemId===d.id),d.type===o.LayoutItemType.Widget){const e=d.widgetId,n=t.appConfig.widgets[e];let o=[0,0,0,0];if(n){o=i.styleUtils.expandStyleArray(null===(l=null===(s=null===(r=n.config)||void 0===r?void 0:r.style)||void 0===s?void 0:s.padding)||void 0===l?void 0:l.number);const e=Object.keys(n.layouts)[0],c=Object(a.a)(n.layouts[e],t.browserSizeMode,t.appConfig.mainSizeMode),d=t.appConfig.layouts[c];d&&Object.keys(d.content||[]).length>0&&Object.keys(d.content||[]).some(t=>{if(!d.content[t].isPending)return u=!1,!0})}return{isEmpty:u,selected:c,padding:o[0]+o[2]}}return{selected:c,isEmpty:!1,padding:0}}function l(t){const e=parseFloat(null==t?void 0:t.width);return e>0?(""+t.width).includes("px")?Math.round(e)+"px":Math.round(e)+"%":"100%"}function u(t,e={}){var n,i,a;const s=t.setting,l=null!==(n=null==s?void 0:s.floatingArea)&&void 0!==n?n:1,u=(null!==(i=null==s?void 0:s.offsetX)&&void 0!==i?i:0)+"px",c=(null!==(a=null==s?void 0:s.offsetY)&&void 0!==a?a:0)+"px",{dh:d,dw:p,initWidth:g,initHeight:f,isResizing:y}=e,h=Object(r.isRTL)()?`translateX(calc(50% + ${u}))`:`translateX(calc(-50% + ${u}))`,v={};switch(l){case 1:v.left=u,v.top=c,v.transform=null;break;case 2:v.left="50%",v.top=c,v.transform=h;break;case 3:v.right=u,v.top=c,v.transform=null;break;case 4:v.left=u,v.top="50%",v.transform=`translateY(calc(-50% + ${c}))`;break;case 5:v.left="50%",v.top="50%",v.transform=`${h} translateY(calc(-50% + ${c}))`;break;case 6:v.right=u,v.top="50%",v.transform=`translateY(calc(-50% + ${c}))`;break;case 7:v.left=u,v.bottom=c,v.transform=null;break;case 8:v.left="50%",v.bottom=c,v.transform=h;break;case 9:v.right=u,v.bottom=c,v.transform=null}return o.css`
    position: fixed;
    z-index: 1;
    width: ${y?g+p+"px":Object(r.getValueOfBBox)(t.bbox,"width")};
    height: ${y?f+d+"px":Object(r.getValueOfBBox)(t.bbox,"height")};
    left: ${v.left};
    right: ${v.right};
    top: ${v.top};
    bottom: ${v.bottom};
    transform: ${v.transform};
  `}},function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"b",(function(){return l}));var o=n(0),i=n(9),r=n(5);const a=o.css`
  width: 100%;
  display: flex;
  justify-content: center;

  .offset-1 {
    margin-left: 8.33333%;
    margin-right: 0;
  }
  .offset-2 {
    margin-left: 16.66667%;
    margin-right: 0;
  }
  .offset-3 {
    margin-left: 25%;
    margin-right: 0;
  }
  .offset-4 {
    margin-left: 33.33333%;
    margin-right: 0;
  }
  .offset-5 {
    margin-left: 41.66667%;
    margin-right: 0;
  }
  .offset-6 {
    margin-left: 50%;
    margin-right: 0;
  }
  .offset-7 {
    margin-left: 58.33333%;
    margin-right: 0;
  }
  .offset-8 {
    margin-left: 66.66667%;
    margin-right: 0;
  }
  .offset-9 {
    margin-left: 75%;
    margin-right: 0;
  }
  .offset-10 {
    margin-left: 83.33333%;
    margin-right: 0;
  }
  .offset-11 {
    margin-left: 91.66667%;
    margin-right: 0;
  }
`;function s(t){return Object(o.Immutable)(t).set("left",i.b-parseInt(t.left,10)-parseInt(t.width,10))}function l(t,e,n){var o,i,a,s,l,u,c,d,p,g,f,y,h;return n?{height:e.height,alignSelf:null!==(i=null===(o=t.style)||void 0===o?void 0:o.alignSelf)&&void 0!==i?i:"flex-start"}:"ratio"===t.heightMode?{alignSelf:null!==(s=null===(a=t.style)||void 0===a?void 0:a.alignSelf)&&void 0!==s?s:"flex-start"}:(null===(l=t.autoProps)||void 0===l?void 0:l.height)===r.f.Auto?{height:"auto",alignSelf:null!==(c=null===(u=t.style)||void 0===u?void 0:u.alignSelf)&&void 0!==c?c:"flex-start"}:(null===(d=t.autoProps)||void 0===d?void 0:d.height)===r.f.Custom?{height:e.height,alignSelf:null!==(g=null===(p=t.style)||void 0===p?void 0:p.alignSelf)&&void 0!==g?g:"flex-start"}:(null===(f=t.autoProps)||void 0===f?void 0:f.height)===r.f.Stretch||"fit"===t.heightMode?{alignSelf:"stretch"}:parseFloat(e.height)>0?{height:e.height,alignSelf:null!==(h=null===(y=t.style)||void 0===y?void 0:y.alignSelf)&&void 0!==h?h:"flex-start"}:{alignSelf:"stretch"}}},function(t,e,n){"use strict";n.r(e),n.d(e,"findParentLayoutItem",(function(){return o.c})),n.d(e,"buildLayoutStructure",(function(){return o.a})),n.d(e,"findLayoutId",(function(){return i.a})),n.d(e,"findLayoutItem",(function(){return i.b})),n.d(e,"findSectionId",(function(){return i.e})),n.d(e,"findParentViewId",(function(){return i.d})),n.d(e,"findParentScreenId",(function(){return i.c})),n.d(e,"getContentIdInLayoutItem",(function(){return i.l})),n.d(e,"getContentsInLayout",(function(){return i.o})),n.d(e,"getContentsInLayoutRecursive",(function(){return i.p})),n.d(e,"getContainerLayoutItem",(function(){return i.j})),n.d(e,"getLayoutItemIds",(function(){return i.z})),n.d(e,"getLayoutInfosByType",(function(){return i.x})),n.d(e,"getWidgetIdThatUseTheLayoutId",(function(){return i.E})),n.d(e,"getContentContainerInfo",(function(){return i.k})),n.d(e,"getContentRootContainerInfo",(function(){return i.n})),n.d(e,"getRelatedLayoutItemsInWidgetByLayoutInfo",(function(){return i.C})),n.d(e,"getRelatedLayoutInfosInWidgetByLayoutInfo",(function(){return i.B})),n.d(e,"getLayoutInfosHoldcontent",(function(){return i.y})),n.d(e,"getBrowserSizeModeByLayoutIdAndWidgetId",(function(){return i.h})),n.d(e,"getBrowserSizeModeByLayoutId",(function(){return i.g})),n.d(e,"getChildrenContents",(function(){return i.i})),n.d(e,"getContentLayoutInfosInOneSizeMode",(function(){return i.m})),n.d(e,"getContentsInView",(function(){return i.w})),n.d(e,"getContentsInPageHeader",(function(){return i.t})),n.d(e,"getContentsInPageFooter",(function(){return i.s})),n.d(e,"getContentsInPageBody",(function(){return i.r})),n.d(e,"getContentsInScreen",(function(){return i.u})),n.d(e,"getContentsInLayoutWithLayoutWidgetOnly",(function(){return i.q})),n.d(e,"getContentsInTheSameContainer",(function(){return i.v})),n.d(e,"getParentWidgetIdOfContent",(function(){return i.A})),n.d(e,"getBlockAnchorPointsInPage",(function(){return i.f})),n.d(e,"getScreenAnchorPointsInPage",(function(){return i.D})),n.d(e,"getSectionInfo",(function(){return r})),n.d(e,"getPendingLayoutItemsInPage",(function(){return s})),n.d(e,"getPendingLayoutItemsInDialog",(function(){return u})),n.d(e,"getPendingLayoutItemsInLayoutWithDeep",(function(){return d})),n.d(e,"getPendingLayoutItemsFromOtherSizeMode",(function(){return p})),n.d(e,"getPendingLayoutItemsFromOtherSizeModeInPage",(function(){return l})),n.d(e,"getPendingLayoutItemsFromOtherSizeModeInDialog",(function(){return c}));var o=n(18),i=n(6);function r(t,e){var n;const o=t.appConfig.sections[e];if(!o||!o.views)return null;const i=null===(n=t.appRuntimeInfo.sectionNavInfos)||void 0===n?void 0:n[o.id];let r;if(!i){const e=o.views[0];r=t.appConfig.views[e]}return{sectionId:e,navInfo:i,activeView:r,views:o.views,sectionStyle:o.style,transition:o.transition,autoPlay:o.autoPlay,interval:o.interval,loop:o.loop}}var a=n(0);function s(t,e,n,o){const i=t.pages[e];return i?o===a.PagePart.Header?i.header&&t.header?d(t,t.header.layout[n],n):[]:o===a.PagePart.Footer?i.footer&&t.footer?d(t,t.footer.layout[n],n):[]:o===a.PagePart.Body?d(t,i.layout[n],n):[]:[]}function l(t,e,n,o){const i=t.pages[e];return i?o===a.PagePart.Header?i.header&&t.header?p(t,t.header.layout,n):[]:o===a.PagePart.Footer?i.footer&&t.footer?p(t,t.footer.layout,n):[]:o===a.PagePart.Body?p(t,i.layout,n):[]:[]}function u(t,e,n){const o=t.dialogs[e];return o?d(t,o.layout[n],n):[]}function c(t,e,n){const o=t.dialogs[e];return o?p(t,o.layout,n):[]}function d(t,e,n){let o=[];Object(i.x)(t.layouts[e],a.LayoutItemType.Widget,!0).forEach(e=>{const i=t.layouts[e.layoutId].content[e.layoutItemId];i.isPending?o.push(e):t.widgets[i.widgetId].layouts&&Object.keys(t.widgets[i.widgetId].layouts).forEach(e=>{o=o.concat(d(t,t.widgets[i.widgetId].layouts[e][n],n))})});Object(i.x)(t.layouts[e],a.LayoutItemType.Section,!0).forEach(e=>{const i=t.layouts[e.layoutId].content[e.layoutItemId];i.isPending?o.push(e):t.sections[i.sectionId].views&&t.sections[i.sectionId].views.forEach(e=>{o=o.concat(d(t,t.views[e].layout[n],n))})});return Object(i.x)(t.layouts[e],a.LayoutItemType.ScreenGroup,!0).forEach(e=>{var i,r;const a=t.layouts[e.layoutId].content[e.layoutItemId].screenGroupId;null===(r=null===(i=t.screenGroups)||void 0===i?void 0:i[a].screens)||void 0===r||r.forEach(e=>{const i=null==t?void 0:t.screens[e];i.main&&(o=o.concat(d(t,i.main.layout[n],n))),i.panel&&(o=o.concat(d(t,i.panel.layout[n],n)))})}),o}function p(t,e,n,o=null,r=null){const s=[];o||(o=Object(i.p)(t,e[n],a.LayoutItemType.Widget,n,!0)),r||(r=Object(i.p)(t,e[n],a.LayoutItemType.Section,n,!0));return Object.keys(a.BrowserSizeMode).filter(t=>a.BrowserSizeMode[t]!==n).map(t=>a.BrowserSizeMode[t]).forEach(l=>{Object(i.x)(t.layouts[e[l]],a.LayoutItemType.Widget,!0).forEach(e=>{const i=t.layouts[e.layoutId].content[e.layoutItemId];t.widgets[i.widgetId].manifest.widgetType!==a.WidgetType.Layout&&o.indexOf(i.widgetId)<0?!g(t,s,e)&&s.push(e):t.widgets[i.widgetId].layouts&&Object.keys(t.widgets[i.widgetId].layouts).forEach(e=>{p(t,t.widgets[i.widgetId].layouts[e],n,o,r).forEach(e=>{!g(t,s,e)&&s.push(e)})})});Object(i.x)(t.layouts[e[l]],a.LayoutItemType.Section,!0).forEach(e=>{const i=t.layouts[e.layoutId].content[e.layoutItemId];r.indexOf(i.sectionId)<0?!g(t,s,e)&&s.push(e):t.sections[i.sectionId].views&&t.sections[i.sectionId].views.forEach(e=>{p(t,t.views[e].layout,n,o,r).forEach(e=>{!g(t,s,e)&&s.push(e)})})});Object(i.x)(t.layouts[e[l]],a.LayoutItemType.ScreenGroup,!0).forEach(e=>{var i,a;const l=t.layouts[e.layoutId].content[e.layoutItemId];(null===(a=null===(i=t.screenGroups)||void 0===i?void 0:i[l.screenGroupId])||void 0===a?void 0:a.screens)&&t.screenGroups[l.screenGroupId].screens.forEach(e=>{var i;const a=null===(i=t.screens)||void 0===i?void 0:i[e];(null==a?void 0:a.main)&&p(t,a.main.layout,n,o,r).forEach(e=>{!g(t,s,e)&&s.push(e)}),(null==a?void 0:a.panel)&&p(t,a.panel.layout,n,o,r).forEach(e=>{!g(t,s,e)&&s.push(e)})})})}),s}function g(t,e,n){const o=t.layouts[n.layoutId].content[n.layoutItemId];return!!e.find(e=>{const n=t.layouts[e.layoutId].content[e.layoutItemId];return n.type===o.type&&(n.type===a.LayoutItemType.Widget&&n.widgetId===o.widgetId||n.type===a.LayoutItemType.Section&&n.sectionId===o.sectionId)})}},function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return l}));var o=n(0),i=n(2),r=n(24),a=n(12);function s(t,e,n,r,s,l,u,c,d){const{side:p,size:g,offset:f,background:y,overlay:h=!0,padding:v}=t.panel||{},m=Object(o.getAppStore)().getState().appContext.isRTL?"left"===p?"-":"":"right"===p?"-":"",b=i.styleUtils.toBackgroundEmotionStyle(null!=y?y:{}),I=parseFloat(s);if(d){const t=!h;return o.css`
      width: 100%;
      background: transparent;
      pointer-events: none;
      position: relative;
      opacity: ${u===o.ScreenTransitionType.Fade?r?"1":"0.5":null};
      min-height: ${c===o.ScreenTransitionType.Cover?e+"px":null};
      padding-top: ${c!==o.ScreenTransitionType.Fade&&t?Math.round(e*a.b)+"px":null};

      &.top-spacing > .panel-content {
        /* margin-top: ${Math.round(e*a.b)}px; */
      }

      .panel-content {
        width: 100%;
        ${h?"":b};
        /* margin-top: ${u===o.ScreenTransitionType.Push?"${Math.round(viewHeight * SCREEN_RATIO_IN_SMALL_SIZE)}px":"unset"}; */

        > .layout, > .layout-wrapper > .layout {
          pointer-events: all;
          ${h?b:""};
          min-height: ${Math.round(.25*e)}px;
          padding: ${i.styleUtils.toCSSPadding(v)};
        }

        > .layout-wrapper > .column-layout > .trail-container,
        > .column-layout > .trail-container {
          overflow-y: hidden;
        }

        > .layout-wrapper > .placeholder-btn {
          pointer-events: all;
          ${h?b:""};
        }

        .panel-spacing {
          height: ${Math.round(e*I/100)}px;
        }
      }

      .panel-content-placeholder {
        width: 1px;
        min-height: ${e}px;
      }

      body:not(.design-mode) & {
        min-height: ${c===o.ScreenTransitionType.Cover?"100vh":null};
        min-height: ${c===o.ScreenTransitionType.Cover?"calc(var(--vh) * 100)":null};
        padding-top: ${c!==o.ScreenTransitionType.Fade&&t?100*a.b+"vh":null};
        padding-top: ${c!==o.ScreenTransitionType.Fade&&t?`calc(var(--vh) * ${100*a.b})`:null};

        > .layout, > .layout-wrapper > .layout {
          min-height: ${Math.round(25)}vh;
          min-height: calc(var(--vh) * ${Math.round(25)});
        }

        .panel-content-placeholder {
          min-height: 100vh;
          min-height: calc(var(--vh) * 100);
        }

        .panel-spacing {
          height: ${I}vh;
          height: calc(var(--vh) * ${I});
        }
      }
    `}return o.css`
    width: 100%;
    background: transparent;
    pointer-events: none;
    display: flex;
    flex-direction: ${"right"===p?"row-reverse":"row"};
    justify-content: ${"center"===p&&h?"center":"flex-start"};
    position: relative;
    opacity: ${u===o.ScreenTransitionType.Fade?r?"1":"0.5":null};

    &.top-spacing > .panel-content {
      /* margin-top: ${Math.round(2*e/3)}px; */
    }

    .panel-content {
      width: ${g};
      transform: ${h&&Math.abs(parseFloat(f))>0?`translateX(${m}${f})`:null};
      flex: 0 auto;
      min-height: ${l?e+"px":"unset"};
      ${h?"":b};

      > .layout,
      > .layout-wrapper > .layout {
        pointer-events: all;
        ${h?b:""};
        min-height: ${Math.round(.25*e)}px;
        padding: ${i.styleUtils.toCSSPadding(v)};
      }

      > .layout-wrapper > .column-layout > .trail-container,
      > .column-layout > .trail-container {
        overflow-y: hidden;
      }

      > .layout-wrapper > .placeholder-btn {
        pointer-events: all;
        ${h?b:""};
      }

      .panel-spacing {
        height: ${Math.round(e*I/100)}px;

        &.last-item {
          height: ${l?""+Math.round(e*I/100):e}px;
        }
      }
    }

    .panel-content-placeholder {
      width: 1px;
      min-height: ${l?e:Math.round(.25*e)}px;
    }

    body:not(.design-mode) & {
      &.top-spacing > .panel-content {
        /* margin-top: ${66.7}vh; */
      }

      .panel-content {
        min-height: ${l?n>0?`calc(100vh - ${n}px)`:"100vh":"unset"};
        min-height: ${l?n>0?`calc(var(--vh) * 100 - ${n}px)`:"calc(var(--vh) * 100)":"unset"};
        > .layout, > .layout-wrapper > .layout {
          min-height: unset;
        }

        .panel-spacing {
          height: ${I}vh;
          height: calc(var(--vh) * ${I});

          &.last-item {
            height: ${l?I:100}vh;
            height: calc(var(--vh) * ${l?I:100});
          }
        }
      }
      .panel-content-placeholder {
        min-height: ${l?"100":Math.round(25)}vh;
        min-height: calc(var(--vh) * ${l?"100":Math.round(25)});
      }
    }
  `}function l(t){var e;const{index:n,screenId:i,onInterctionChange:a,onHeightChange:l,viewHeight:u,headerHeight:c,layoutEntry:d,isActive:p,isSmallSize:g,transitionType:f,screenTransitionType:y,triggerType:h,stretched:v,verticalSpace:m="0"}=t,b=o.ReactRedux.useSelector(t=>t.appConfig.screens[i]),{panel:I}=b,w=o.React.useRef(),[x,j]=o.React.useState(!1),S=o.React.useRef(),O=o.React.useCallback(t=>{a(n,t)},[n,a]);o.React.useEffect(()=>(S.current=o.lodash.debounce(l,200),()=>{var t;null===(t=S.current)||void 0===t||t.cancel()}),[l]);const C=o.React.useCallback((t,e)=>{var o;null===(o=S.current)||void 0===o||o.call(S,n,e)},[n]);return Object(r.a)(w.current,t.refElement,g?o.ScreenTriggerType.Lower:null!=h?h:o.ScreenTriggerType.Bottom,O),o.React.useEffect(()=>{j(!0)},[]),Object(o.jsx)("div",{className:Object(o.classNames)("screen-side-panel",{"top-spacing":0===n&&((null===(e=b.panel)||void 0===e?void 0:e.overlay)||g)}),"data-screenid":i,"data-index":n,ref:w,css:s(b,u,c,p,m,v,f,y,g)},I&&Object(o.jsx)("div",{className:"panel-content"},Object(o.jsx)(d,{layouts:I.layout}),Object(o.jsx)("div",{className:Object(o.classNames)("panel-spacing",{"last-item":t.isLast})})),!I&&Object(o.jsx)("div",{className:"panel-content-placeholder"}),Object(o.jsx)(o.ReactResizeDetector,{handleHeight:!0,onResize:C}))}},function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var o=n(0);function i(){const t=[0];for(let e=1;e<=100;e++)t.push(e/100);return t}function r(t){switch(t){case o.ScreenTriggerType.Top:return"0% 0% -98% 0%";case o.ScreenTriggerType.Bottom:return"-98% 0% -2px 0%";case o.ScreenTriggerType.Upper:return`-${100/3-1}% 0% -${200/3-1}% 0%`;case o.ScreenTriggerType.Lower:return`-${200/3-1}% 0% -${100/3-1}% 0%`;default:return}}function a(t,e,n,a){const s=o.React.useRef(),l=o.React.useRef();o.React.useEffect(()=>{s.current&&(s.current.unobserve(t),s.current=null);if(t&&"function"==typeof IntersectionObserver){const o=new IntersectionObserver(t=>{(t=>{const e=t.boundingClientRect,n=t.rootBounds,o=Math.abs(e.bottom-n.top)>=Math.abs(e.top-n.top);if(t.isIntersecting){if(l.current=!0,o)a(!0)}else if(l.current&&(l.current=!1,o))a(!1)})(t[0])},{threshold:i(),root:e||document.body,rootMargin:r(n)});return o.observe(t),s.current=o,()=>{s.current.unobserve(t),s.current=null}}},[t,e,a,n])}},function(t,e,n){"use strict";n.d(e,"b",(function(){return o.a})),n.d(e,"a",(function(){return p}));var o=n(23),i=n(0),r=n(2),a=n(8),s=n(12);const l=n(42);function u(t){const{rootLayoutId:e,viewHeight:n,headerHeight:o,screenId:u,isActive:c,isAbsolute:d,isLast:p,isSmallSize:g,layoutEntry:f,isDesignMode:y,formatMessage:h,builderTheme:v}=t,m=i.ReactRedux.useSelector(t=>t.appConfig.screens[u]),b=i.ReactRedux.useSelector(t=>{var e,n,o;return null===(o=null===(n=null===(e=t.appRuntimeInfo)||void 0===e?void 0:e.screenPanelStates)||void 0===n?void 0:n[u])||void 0===o||o}),{main:I}=m,{side:w,size:x,overlay:j=!0}=m.panel||{},S=i.React.useRef(),O=i.React.useCallback(()=>{Object(i.getAppStore)().dispatch(i.appActions.screenPanelVisibleChanged(u,!0))},[u]);const C=Object(i.classNames)("screen-main-panel",{"is-active":c,"last-one":p});return Object(i.jsx)(a.b.Provider,{value:!d||c},Object(i.jsx)("div",{id:`${e}_screen_${u}`,className:C,css:function(){var t,e,a,l;if(g){const a=!j&&null!=m.panel,l=a?Math.round(n*s.b)+"px":n+"px",u=a?""+Math.round(100*s.b):"100";return i.css`
        pointer-events: all;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: ${n}px;

        > .layout {
          ${r.styleUtils.toBackgroundEmotionStyle(null!==(e=null===(t=m.main)||void 0===t?void 0:t.background)&&void 0!==e?e:{})};
          height: ${l} !important;
          border: none !important;
        }

        body:not(.design-mode) & {
          height: ${o>0?`calc(100vh - ${o}px)`:"100vh"};
          height: ${o>0?`calc(var(--vh) * 100 - ${o}px)`:"calc(var(--vh) * 100)"};
          > .layout {
            height: ${u}vh !important;
            height: calc(var(--vh) * ${u}) !important;
          }
        }

        .spacing-area {
          flex: 1;
          background: transparent;
          pointer-events: none;
        }

        .toggle-visible-btn {
          position: absolute;
          bottom: 0;
          right: left;
        }
      `}let u="0px",c="0px";"none"!==w&&(j||"right"===w||(u=x),j||"right"!==w||(c=x));const p=v?i.css`
      color: ${v.colors.palette.dark[900]};
      background-color: ${v.colors.palette.light[400]};
      border-color: ${v.colors.palette.light[600]};
      &:hover {
        color: ${v.colors.black};
        background-color: ${v.colors.palette.light[600]};
      }
    `:null;return i.css`
      ${r.styleUtils.toBackgroundEmotionStyle(null!==(l=null===(a=m.main)||void 0===a?void 0:a.background)&&void 0!==l?l:{})};
      left: ${d?u:null};
      right: ${d?c:null};
      margin-left: ${d?null:u};
      margin-right: ${d?null:c};
      pointer-events: all;
      display: flex;
      flex-direction: column;
      position: relative;

      > .layout {
        height: ${n}px !important;
        background: transparent;
        border: none !important;
      }

      body:not(.design-mode) & {
        > .layout {
          height: ${o>0?`calc(100vh - ${o}px)`:"100vh"} !important;
          height: ${o>0?`calc(var(--vh) * 100 - ${o}px)`:"calc(var(--vh) * 100)"} !important;
        }
      }

      .spacing-area {
        flex: 1;
        background: transparent;
        pointer-events: none;
      }

      .toggle-visible-btn {
        position: absolute;
        bottom: 0;
        right: 0;

        > button {
          ${p};
          svg {
            margin-right: 0;
            margin-left: 0;
          }
        }
      }
    `}(),ref:S,"data-screenid":u,"data-index":t.index},Object(i.jsx)(f,{layouts:I.layout,isInWidget:!0}),Object(i.jsx)("div",{className:"spacing-area"}),y&&!b&&Object(i.jsx)("div",{className:"toggle-visible-btn",onClick:O,"data-testid":"toggleBtn"},Object(i.jsx)(r.Tooltip,{placement:"auto",title:h("showInDesignView")},Object(i.jsx)(r.Button,{type:"default",size:"sm",className:"rounded"},Object(i.jsx)(r.Icon,{icon:l,size:16}))))))}function c(t,e,n,o,r){return t===i.ScreenTransitionType.Fade?i.css`
      position: sticky;
      height: ${e}px;
      top: 0;

      body:not(.design-mode) & {
        height: ${n>0?`calc(100vh - ${n}px)`:"100vh"};
        height: ${n>0?`calc(var(--vh) * 100 - ${n}px)`:"calc(var(--vh) * 100)"};
        top: ${n>0?n+"px":0};
        .layout .exb-drop-area {
          pointer-events: none !important;
        }
      }

      .screen-main-panel {
        position: absolute;
        opacity: 0;
        visibility: hidden;
        z-index: 0;
        transition: ${o?null:"opacity 400ms"};
        top: 0;
        /* height: ${o?"unset":"100% !important"}; */

        .layout .exb-drop-area {
          pointer-events: none;
        }

        &.is-active {
          opacity: 1;
          visibility: visible;
          pointer-events: all;
          z-index: 1;

          .layout .exb-drop-area {
            pointer-events: all;
          }
        }
      }
    `:t===i.ScreenTransitionType.Cover?i.css`
      position: sticky;
      height: ${e}px;
      overflow: hidden;
      top: 0;

      body:not(.design-mode) & {
        height: 100%;
        overflow: unset;
        position: relative;

        .screen-main-panel {
          top: ${n>0?n+"px":0};
        }
      }

      & > div:first-of-type {
        margin-top: 0 !important;
      }

      .screen-main-panel {
        position: sticky;
        top: 0;
        margin-top: ${1===r?"0 !important":null};

        .spacing-area {
          display: none;
        }
      }
    `:t===i.ScreenTransitionType.Push?i.css`
      position: sticky;
      height: ${e}px;
      overflow: hidden;
      top: 0;

      body:not(.design-mode) & {
        height: auto;
        overflow: unset;

        .screen-main-panel > .layout {
          top: ${n>0?n+"px":0};
        }
      }

      .screen-main-panel > .layout {
        position: sticky !important;
        top: 0;
      }
    `:void 0}function d(t,e,n){return t===i.ScreenTransitionType.Fade?i.css`
      height: calc(100% - ${e}px);
      background: transparent;
      pointer-events: none;

      body:not(.design-mode) & {
        height: calc(100% - 100vh);
        height: calc(100% - var(--vh) * 100);
      }
    `:t===i.ScreenTransitionType.Cover||t===i.ScreenTransitionType.Push?i.css`
      height: calc(100% - ${e}px);
      background: transparent;
      pointer-events: none;
      display: block;

      body:not(.design-mode) & {
        height: calc(100% - 100vh);
        height: calc(100% - var(--vh) * 100);
        display: none;
      }
    `:void 0}function p(t){const{rootLayoutId:e,activeIndex:n,viewHeight:o,headerHeight:r,screens:a,transitionType:s,isSmallSize:l,layoutEntry:p,isDesignMode:g,formatMessage:f,builderTheme:y}=t;return Object(i.jsx)(i.React.Fragment,null,Object(i.jsx)("div",{className:"screen-container",css:c(s,o,r,l,a.length)},a.map((t,c)=>Object(i.jsx)(u,{key:t,rootLayoutId:e,index:c,isActive:n===c,screenId:t,viewHeight:o,headerHeight:r,isAbsolute:s===i.ScreenTransitionType.Fade,isLast:c===a.length-1,isSmallSize:l,layoutEntry:p,isDesignMode:g,formatMessage:f,builderTheme:y}))),Object(i.jsx)("div",{className:"screen-placeholder",css:d(s,o)}))}},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o=n(0);function i(){const t=[0];for(let e=1;e<=10;e++)t.push(e/10);return t}function r(t,e){const n=o.React.useRef(),[r,a]=o.React.useState(!0);return o.React.useEffect(()=>{if(n.current&&(n.current.unobserve(t),n.current=null),!e)return;if(t&&"function"==typeof IntersectionObserver){const e=new IntersectionObserver(t=>{var e;(e=t[0]).target.classList.contains("playing-animation")||e.boundingClientRect.width>0&&e.boundingClientRect.height>0&&a(e.isIntersecting)},{threshold:i(),root:document.body,rootMargin:"20%"});return e.observe(t),n.current=e,()=>{n.current.unobserve(t),n.current=null}}},[t,e]),r}},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));const o={min:16,space:10}},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var o=n(0);class i{constructor(){this.id="flow-layout-transformer",this.layoutType=o.LayoutType.FlowLayout}transformLayout(t,e,n){if(e!==n&&n===o.BrowserSizeMode.Small){let e=Object(o.Immutable)(t);return(t.order||[]).forEach(t=>{e=e.setIn(["content",t,"setting","heightMode"],"auto")}),e}return t}transformLayoutItem(t,e,n,o,i,r){return{index:e,item:t}}}},function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var o=n(0),i=n(22),r=n(4),a=n(9);function s(t,e,n){var o;const a=i.getWidgetIdThatUseTheLayoutId(t,n),s=function(t,e,n){var o,i,a,s,l,u,c;const d=t.widgets[n];if(null!=d){const p=r.getCurrentSizeMode(),g=t.mainSizeMode,f=d.layouts.DEFAULT[p],y=d.layouts.DEFAULT[g],h=null!==(l=null===(s=null===(a=null===(i=(null!==(o=t.layouts[f])&&void 0!==o?o:t.layouts[y]).setting)||void 0===i?void 0:i.style)||void 0===a?void 0:a.padding)||void 0===s?void 0:s.number)&&void 0!==l?l:[0],v=r.expandStyleArray(h),m=null!==(c=null===(u=null==e?void 0:e[n])||void 0===u?void 0:u.height)&&void 0!==c?c:0;let b=v[0],I=v[2];return r.isPercentage(b)&&(b=r.fromRatio(b,m)),r.isPercentage(I)&&(I=r.fromRatio(I,m)),m-b-I}return 0}(t,e,a);if(s>0){const e=null!==(o=t.layouts[n].order)&&void 0!==o?o:[],i={};return e.forEach(e=>{const o=t.layouts[n].content[e];i[e]=r.calHeightOfLayoutItem(s,o)}),i}return null}class l{constructor(){this.id="row-layout-transformer",this.layoutType=o.LayoutType.RowLayout}transformLayout(t,e,n){var i,r;if(e===n)return t;let l=Object(o.Immutable)(t);if(n===o.BrowserSizeMode.Small){const e=s(function(){const t=Object(o.getAppStore)().getState();return window.jimuConfig.isBuilder?null==t?void 0:t.appStateInBuilder:t}().appConfig,null===(i=window.runtimeInfo)||void 0===i?void 0:i.widgets,t.id);let n=0;Object.keys(null!==(r=t.content)&&void 0!==r?r:{}).sort((e,n)=>parseInt(t.content[e].bbox.left,10)-parseInt(t.content[n].bbox.left,10)).forEach(i=>{var r,s,u;const c=t.content[i];if(!c.isPending){if(l=l.setIn(["content",i,"bbox"],{left:n*a.b,width:a.b,height:null!==(s=null===(r=c.bbox)||void 0===r?void 0:r.height)&&void 0!==s?s:"auto"}),null!=e){const t=null!==(u=c.setting)&&void 0!==u?u:Object(o.Immutable)({});l=l.setIn(["content",i,"bbox","height"],e[i].height).setIn(["content",i,"setting"],t.merge(e[i].setting))}n+=1}})}return l}transformLayoutItem(t,e,n,o,i,r){return{item:t,index:e}}}},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var o=n(0);function i(t,e,n){const i=t.querySelectorAll("div.screen-main-panel"),r=e.querySelectorAll("div.screen-side-panel"),a=i.length;for(let t=1;t<a;t++){const e=i.item(t),n=i.item(t-1),o=r.item(t-1);e.style.marginTop=o.clientHeight-n.clientHeight+"px"}n!==o.BrowserSizeMode.Small&&(t.style.height=e.clientHeight+"px")}},function(t,e,n){"use strict";n.d(e,"a",(function(){return y}));var o=n(0),i=n(5),r=n(2);function a(t,e){if(!t)return null;let n={};t.backgroundIMage&&(n="string"==typeof t.backgroundIMage?{}:t.backgroundIMage);const o=t.backgroundPosition?r.FillType[t.backgroundPosition.toUpperCase()]:r.FillType.FILL;let i;i=null==t.backgroundColor?e:""===t.backgroundColor?"transparent":t.backgroundColor?t.backgroundColor:"";const a={color:i,fillType:o,image:n};return r.styleUtils.toBackgroundStyle(a)}function s(t){const{viewId:e,isActive:n,layoutEntryComponent:i,viewVisibilityContext:r}=t,s=o.ReactRedux.useSelector(t=>{var n,o;return null===(o=null===(n=t.appConfig)||void 0===n?void 0:n.views)||void 0===o?void 0:o[e]}),l=o.ReactRedux.useSelector(t=>{var e,n;return null===(n=null===(e=t.theme)||void 0===e?void 0:e.body)||void 0===n?void 0:n.bg}),u=i,c=r,d=o.React.useMemo(()=>({isInView:!0,isInCurrentView:n}),[n]);return Object(o.jsx)("div",{className:"w-100 h-100 d-flex section-view",style:a(s,l),key:e},Object(o.jsx)(o.ErrorBoundary,null,Object(o.jsx)(c.Provider,{value:d},Object(o.jsx)(u,{layouts:null==s?void 0:s.layout,isInSection:!0,className:"w-100"}))))}function l(t){var e,n;const{views:i,navInfo:r,animationPreview:a,playMode:l,currentIndex:u,previousIndex:c,progress:d,loop:p,viewTransition:g}=t,f=a&&l===o.AnimationPlayMode.OneByOne,{setting:y,playId:h,onAnimationEnd:v,depth:m}=o.React.useContext(o.AnimationContext),b=o.ReactRedux.useSelector(t=>{var e;return!y||y.type===o.AnimationType.None||(null===(e=t.appRuntimeInfo)||void 0===e?void 0:e.appMode)===o.AppMode.Design}),I=!b||f||(null==r?void 0:r.playId)&&(null==r?void 0:r.withOneByOne)?y:null,w=o.React.useMemo(()=>({trigger:o.AnimationTriggerType.Manual,setting:I,playId:!b||f?h:null,inheritedOneByOneSetting:null,depth:m+1,onAnimationEnd:v}),[b,I,f,h,m,v]);return Object(o.jsx)(o.AnimationContext.Provider,{value:w},Object(o.jsx)("div",{className:"section-content"},Object(o.jsx)(o.TransitionContainer,{useProgress:null!==(e=null==r?void 0:r.useProgress)&&void 0!==e&&e,useStep:null!==(n=null==r?void 0:r.useStep)&&void 0!==n&&n,previousIndex:c,currentIndex:u,progress:d,transitionType:null==g?void 0:g.type,direction:null==g?void 0:g.direction,playId:null==r?void 0:r.playId,withOneByOne:null==r?void 0:r.withOneByOne,loop:p},i.map(e=>{const n=e===i[u];return Object(o.jsx)(s,{key:e,viewId:e,isActive:n,layoutEntryComponent:t.layoutEntryComponent,viewVisibilityContext:t.viewVisibilityContext})}))))}const u=n(38),c=n(39);function d(t){var e,n,i;const{sectionId:a,currentIndex:s,numOfViews:l,onCurrentViewChange:d}=t,p=o.ReactRedux.useSelector(t=>{var e;return null===(e=t.appConfig.sections[a])||void 0===e?void 0:e.arrowsNav}),g=o.ReactRedux.useSelector(t=>{var e;return null===(e=t.appConfig.sections[a])||void 0===e?void 0:e.dotsNav}),f=null!==(e=null==g?void 0:g.position)&&void 0!==e?e:"b",y=o.React.useMemo(()=>{const t=[];for(let e=0;e<l;e++)t.push(e);return t},[l]),h=()=>{var t,e,n,i;return o.css`
      position: absolute;
      cursor: pointer;

      &.disabled {
        cursor: default;
        svg {
          color: var(--light-400);
        }
      }

      &.first {
        left: ${null!==(t=p.offset)&&void 0!==t?t:0}px;
        top: 50%;
        transform: translateY(-50%);

        &.vertical {
          top: ${null!==(e=p.offset)&&void 0!==e?e:0}px;
          left: 50%;
          transform: translateX(-50%) rotate(90deg);
        }
      }
      &.second {
        right: ${null!==(n=p.offset)&&void 0!==n?n:0}px;
        top: 50%;
        transform: translateY(-50%);

        &.vertical {
          bottom: ${null!==(i=p.offset)&&void 0!==i?i:0}px;
          left: 50%;
          top: auto;
          right: auto;
          transform: translateX(-50%) rotate(90deg);
        }
      }
    `},v=o.React.useCallback((t,e)=>Object(o.jsx)("div",{key:t,className:Object(o.classNames)("dot rounded-circle",{active:e,disabled:l<=1}),onClick:e?void 0:()=>d(t)}),[d,l]),m=o.React.useCallback(()=>{d(s>0?s-1:l-1)},[s,l,d]),b=o.React.useCallback(()=>{d(s<l-1?s+1:0)},[s,l,d]),I=l>1&&0!==s,w=l>1&&s!==l-1;return Object(o.jsx)(o.React.Fragment,null,(null==p?void 0:p.visible)&&Object(o.jsx)(o.React.Fragment,null,Object(o.jsx)("div",{className:Object(o.classNames)("arrows-nav first",{vertical:"v"===p.direction,disabled:!I}),css:h(),onClick:I?m:null},Object(o.jsx)(r.Icon,{icon:u,autoFlip:"v"!==p.direction,size:null!==(n=p.size)&&void 0!==n?n:12})),Object(o.jsx)("div",{className:Object(o.classNames)("arrows-nav second",{vertical:"v"===p.direction,disabled:!w}),css:h(),onClick:w?b:null},Object(o.jsx)(r.Icon,{icon:c,autoFlip:"v"!==p.direction,size:null!==(i=p.size)&&void 0!==i?i:12}))),(null==g?void 0:g.visible)&&Object(o.jsx)("div",{className:Object(o.classNames)("dots-nav",{"snap-left":"l"===f,"snap-top":"t"===f,"snap-right":"r"===f,"snap-bottom":"b"===f}),css:(()=>{var t,e,n,i,r,a,s,l,u,c,d,p,y,h;return o.css`
      position: absolute;
      display: flex;
      flex-direction: ${"l"===f||"r"===f?"column":"row"};
      justify-content: center;
      align-items: center;
      overflow: visible;
      pointer-events: none;
      background: transparent;

      .dot {
        pointer-events: all;
        cursor: pointer;
        border: 1px solid var(--light-500);
        background: var(--light-100);
        width: ${null!==(t=g.size)&&void 0!==t?t:8}px;
        height: ${null!==(e=g.size)&&void 0!==e?e:8}px;

        &.active {
          border-color: var(--white);
          background: var(--primary-500);
          width: ${g.size>0?1.5*g.size:12}px;
          height: ${g.size>0?1.5*g.size:12}px;
        }

        &.disabled {
          cursor: default;
        }
      }

      &.snap-left {
        height: 100%;
        top: 0;
        left: ${null!==(n=g.offset)&&void 0!==n?n:50}px;
        width: ${null!==(i=g.size)&&void 0!==i?i:8}px;

        > div:not(:first-child) /* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */ {
          margin-top: ${null!==(r=g.spacing)&&void 0!==r?r:10}px;
        }
      }
      &.snap-right {
        height: 100%;
        top: 0;
        right: ${null!==(a=g.offset)&&void 0!==a?a:50}px;
        width: ${null!==(s=g.size)&&void 0!==s?s:8}px;

        > div:not(:first-child) /* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */ {
          margin-top: ${null!==(l=g.spacing)&&void 0!==l?l:10}px;
        }
      }
      &.snap-top {
        width: 100%;
        top: ${null!==(u=g.offset)&&void 0!==u?u:50}px;
        height: ${null!==(c=g.size)&&void 0!==c?c:8}px;

        > div:not(:first-child) /* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */ {
          margin-left: ${null!==(d=g.spacing)&&void 0!==d?d:10}px;
        }
      }
      &.snap-bottom {
        width: 100%;
        bottom: ${null!==(p=g.offset)&&void 0!==p?p:50}px;
        height: ${null!==(y=g.size)&&void 0!==y?y:8}px;

        > div:not(:first-child) /* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */ {
          margin-left: ${null!==(h=g.spacing)&&void 0!==h?h:10}px;
        }
      }
    `})()},y.map(t=>v(t,t===s))))}function p(t){const{sectionId:e,autoPlay:n,interval:r=i.e,loop:a=!1}=t,s=o.React.useRef(),l=o.ReactRedux.useSelector(t=>{var e;return n?(null===(e=t.appRuntimeInfo)||void 0===e?void 0:e.appMode)===o.AppMode.Design:null}),u=o.React.useRef(l),c=o.React.useCallback(()=>{s.current&&(clearInterval(s.current),s.current=null)},[]),d=o.React.useCallback(()=>{c(),s.current=setInterval(()=>{(function(t,e){var n,i;const r=Object(o.getAppStore)().getState(),a=r.appConfig.sections[t].views,s=null===(i=null===(n=r.appRuntimeInfo)||void 0===n?void 0:n.sectionNavInfos)||void 0===i?void 0:i[t],l=(null==s?void 0:s.currentViewId)?a.indexOf(s.currentViewId):0,u=l<a.length-1?l+1:0;return!(!e&&0===u)&&(o.jimuHistory.changeView(t,a[u]),!0)})(e,a)||c()},1e3*r)},[e,a,r,c]);o.React.useEffect(()=>{if(!u.current){if(!n)return void c();d()}return()=>{c()}},[n,r,a,c,d]),o.React.useEffect(()=>{if(u.current!==l&&null!==l){if(u.current=l,l)return void c();n&&d()}},[l,d,c,n])}var g=function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(t);i<o.length;i++)e.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(t,o[i])&&(n[o[i]]=t[o[i]])}return n};function f(t){return o.css`
    overflow: visible;
    position: relative;

    .section-content {
      position: relative;
      overflow: hidden;
      width: 100%;
      height: 100%;
      z-index: 0;
    }

    .section-view {
      position: absolute;
    }

    &.aspect-ratio-wrapper {
      padding-top: ${100*(t||0)}%;
    }
    &.aspect-ratio-wrapper > .section-content {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }

    .hidden {
      display: none !important;
    }
  `}function y(t){const{views:e,navInfo:n,activeView:a,animationPreview:s,playMode:u,transition:c,sectionId:y,autoPlay:h,interval:v=i.e,loop:m=!0,className:b,sectionStyle:I,forceAspectRatio:w,aspectRatio:x,rotate:j,layoutEntryComponent:S,viewVisibilityContext:O}=t,C=o.React.useRef(),[T,R]=o.React.useState(!1),M=null==a?void 0:a.id,P=o.React.useMemo(()=>{var t;let i,r,a,s=e;if(n)if(s=null!==(t=n.visibleViews)&&void 0!==t?t:e,n.useProgress){a=n.progress;i=Object(o.getIndexFromProgress)(a,s.length).currentIndex}else i=Math.max(0,s.indexOf(n.currentViewId)),r=n.previousViewId?Math.max(0,s.indexOf(n.previousViewId)):Math.max(0,i-1);else i=Math.max(0,s.indexOf(M)),r=i;return C.current=i,{currentIndex:i,previousIndex:r,progress:a}},[M,n,e]),$=o.React.useMemo(()=>r.styleUtils.toCSSStyle(I),[I]),{transform:k}=$,L=g($,["transform"]),E=j>0||j<0?`rotateZ(${j}deg)`:"";let z=E;k&&(z=`${k} ${E}`);const A=o.React.useCallback(()=>{R(!0)},[]),B=o.React.useCallback(()=>{R(!1)},[]),N=h&&!T;p({sectionId:y,interval:v,loop:m,autoPlay:N});const V=o.React.useCallback(t=>{o.jimuHistory.changeView(y,e[t])},[y,e]);return Object(o.jsx)("div",{className:Object(o.classNames)("section-layout layout-item-content w-100",b,{"aspect-ratio-wrapper":w&&x>0}),css:f(x),"data-sectionid":y,style:Object.assign(Object.assign({},L),{transform:z}),onMouseEnter:h?A:null,onMouseLeave:h?B:null,onTouchStart:h?A:null,onTouchEnd:h?B:null},Object(o.jsx)(l,{views:e,navInfo:n,animationPreview:s,playMode:u,currentIndex:P.currentIndex,previousIndex:P.previousIndex,progress:P.progress,loop:N&&m,viewTransition:c,layoutEntryComponent:S,viewVisibilityContext:O}),Object(o.jsx)(d,{sectionId:y,numOfViews:e.length,currentIndex:P.currentIndex,onCurrentViewChange:V}))}},,,,,,,function(t,e){t.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M3.305 7.294L10.693.215a.79.79 0 011.083 0c.299.287.299.751 0 1.038L4.736 8l7.04 6.747c.299.287.299.751 0 1.038a.79.79 0 01-1.083 0l-7.388-7.08a.968.968 0 010-1.41z" fill="#000"></path><path d="M0 0h16v16H0z"></path></g></svg>'},function(t,e){t.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M12.695 7.294L5.307.215a.79.79 0 00-1.083 0c-.299.287-.299.751 0 1.038L11.264 8l-7.04 6.747c-.299.287-.299.751 0 1.038a.79.79 0 001.083 0l7.388-7.08a.968.968 0 000-1.41z" fill="#000"></path><path d="M0 0h16v16H0z"></path></g></svg>'},,,function(t,e){t.exports='<svg viewBox="0 0 12 8" xmlns="http://www.w3.org/2000/svg"><path d="M6 5.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm0 1a2.5 2.5 0 110-5 2.5 2.5 0 010 5zM6 1c-2.124 0-3.714.967-4.867 3C2.286 6.033 3.876 7 6 7s3.714-.967 4.867-3C9.714 1.967 8.124 1 6 1zm0 7C3.333 8 1.333 6.667 0 4c1.333-2.667 3.333-4 6-4s4.667 1.333 6 4c-1.333 2.667-3.333 4-6 4z"></path></svg>'},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n.r(e),n.d(e,"registerLayoutBuilder",(function(){return b})),n.d(e,"registerLayoutViewer",(function(){return I})),n.d(e,"findLayoutBuilder",(function(){return w})),n.d(e,"findLayoutViewer",(function(){return x})),n.d(e,"LayoutEntry",(function(){return S})),n.d(e,"PageRenderer",(function(){return mt})),n.d(e,"FixedLayoutViewer",(function(){return E})),n.d(e,"ColumnLayoutViewer",(function(){return N})),n.d(e,"RowLayoutViewer",(function(){return G})),n.d(e,"WidgetRenderer",(function(){return h})),n.d(e,"SectionRenderer",(function(){return C})),n.d(e,"LayoutItem",(function(){return P})),n.d(e,"PageContext",(function(){return s.a})),n.d(e,"PageVisibilityContext",(function(){return s.b})),n.d(e,"ViewVisibilityContext",(function(){return s.d})),n.d(e,"ViewportVisibilityContext",(function(){return s.e})),n.d(e,"LayoutContext",(function(){return l})),n.d(e,"defaultMessages",(function(){return i.a})),n.d(e,"utils",(function(){return c})),n.d(e,"searchUtils",(function(){return g})),n.d(e,"OrderAdjustType",(function(){return p.i})),n.d(e,"ParentType",(function(){return p.j})),n.d(e,"COLS_IN_ONE_ROW",(function(){return p.b})),n.d(e,"CONTEXT_MENU_ITEM_SIZE",(function(){return p.d})),n.d(e,"CONTEXT_MENU_ICON_SIZE",(function(){return p.c})),n.d(e,"MIN_LAYOUT_ITEM_SIZE",(function(){return p.h})),n.d(e,"CLICK_TOLRERANCE",(function(){return p.a})),n.d(e,"DEFAULT_AUTOPLAY_INTERVAL",(function(){return p.e})),n.d(e,"LayoutZIndex",(function(){return p.g})),n.d(e,"LayoutItemSizeModes",(function(){return p.f})),n.d(e,"init",(function(){return It}));var o=n(0),i=n(17),r=function(t,e,n,o){return new(n||(n=Promise))((function(i,r){function a(t){try{l(o.next(t))}catch(t){r(t)}}function s(t){try{l(o.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}l((o=o.apply(t,e||[])).next())}))};function a(){return r(this,void 0,void 0,(function*(){let t=Object(o.getAppStore)().getState().appContext.locale;return t=o.i18n.getLocaleToLoad(t,o.translatedLocales),t?yield o.i18n.loadLocaleMessages("jimu-layouts/lib/translations",t).then(t=>(Object(o.getAppStore)().dispatch(o.appActions.i18nMessagesLoaded("jimu-layouts",t)),t)):Promise.resolve(i.a)}))}var s=n(8);const l=o.React.createContext({});var u=n(2),c=n(4),d=n(19),p=n(5),g=n(22),f=function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(t);i<o.length;i++)e.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(t,o[i])&&(n[o[i]]=t[o[i]])}return n};class y extends o.React.PureComponent{constructor(t){super(t),this.onMouseDown=this.onMouseDown.bind(this),this.ref=o.React.createRef(),this.state={error:null}}loadWidgetClass(){const{widgetId:t,isClassLoaded:e}=this.props;t&&!e&&o.WidgetManager.getInstance().loadWidgetClass(t).catch(t=>{this.setState({error:o.i18n.getIntl().formatMessage({id:"widgetLoadError"})})})}componentDidMount(){this.loadWidgetClass()}componentDidUpdate(){this.loadWidgetClass()}renderWidgetContent(){const{widgetId:t,layoutId:e,layoutItemId:n}=this.props;let i;return t&&(i=o.WidgetManager.getInstance().getWidgetClass(t)),this.state.error?Object(o.jsx)("div",{className:"widget-content"},this.state.error):Object(o.jsx)("div",{className:"widget-content"},i&&Object(o.jsx)(o.ErrorBoundary,null,Object(o.jsx)(i,{widgetId:t,layoutId:e,layoutItemId:n})))}getStyle(){const t=o.css`
      -webkit-overflow-scrolling: touch;
    `;return o.css`
      ${"app-loader"===this.props.widgetId?t:""};
      overflow: ${this.props.canCrossLayoutBoundary?"visible":"hidden"};
      position: relative;

      &.aspect-ratio-wrapper {
        padding-top: ${100*(this.props.aspectRatio||0)}%;
      }

      .widget-content {
        position: relative;
        height: 100%;
        width: 100%;
        z-index: 0;
      }

      &.aspect-ratio-wrapper > .widget-content {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
      }
    `}onMouseDown(t){var e;(null===(e=Object(o.getAppStore)().getState().widgetsRuntimeInfo[this.props.widgetId])||void 0===e?void 0:e.state)!==o.WidgetState.Active&&Object(o.getAppStore)().dispatch(o.appActions.activateWidget(this.props.widgetId))}render(){const{className:t,widgetStyle:e,widgetId:n,forceAspectRatio:i,aspectRatio:r,rotate:a}=this.props,s=u.styleUtils.toCSSStyle(e),{transform:l}=s,c=f(s,["transform"]),d=a>0||a<0?`rotateZ(${a}deg)`:"";let p=d;return l&&(p=`${l} ${d}`),Object(o.jsx)("div",{className:Object(o.classNames)("widget-renderer layout-item-content w-100",t,{"aspect-ratio-wrapper":i&&r>0}),css:this.getStyle(),style:Object.assign(Object.assign({},c),{transform:p}),onMouseDownCapture:this.onMouseDown,"data-widgetid":n,ref:this.ref},this.renderWidgetContent(),this.props.children)}}const h=o.ReactRedux.connect(c.mapStateToWidgetProps)(y),v={},m={};function b(t,e){v[t]=e}function I(t,e){m[t]=e}function w(t){return v[t]}function x(t){return m[t]}class j extends o.React.PureComponent{render(){const{layout:t}=this.props;if(!t)return null;const e=x(t.type||o.LayoutType.FlowLayout);return e?o.React.createElement(e,Object.assign({},this.props)):null}}var S=o.ReactRedux.connect(c.mapStateToLayoutProps)(j),O=n(31);class C extends o.React.PureComponent{render(){return o.React.createElement(O.a,Object.assign({},this.props,{layoutEntryComponent:S,viewVisibilityContext:s.d}))}}function T(t,e){const[n,i]=o.React.useState(!0),r=o.React.useContext(s.b);return o.React.useEffect(()=>{null!=t&&i(r)},[t,r]),n}var R=n(26),M=function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(t);i<o.length;i++)e.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(t,o[i])&&(n[o[i]]=t[o[i]])}return n};function P(t){var e,n,i,r,a,l,u;const d=o.ReactRedux.useSelector(e=>function(t,e){const n=Object(c.mapStateToLayoutItemProps)(t,e);if(!n.layoutItem)return n;if(n.layoutItem.type===o.LayoutItemType.Widget)return Object.assign({},n);const i=Object(g.getSectionInfo)(t,n.layoutItem.sectionId);return Object.assign(Object.assign({},n),i)}(e,t),o.ReactRedux.shallowEqual),f=Object.assign(Object.assign({},t),d),y=o.React.useRef(),{layoutId:v,layoutItemId:m,layoutItem:b}=f,{className:I,children:w,isParentPlaying:x,isParentRevert:j,isParentEnableScroll:S,parentAnimationStyle:O,parentPlayId:P,id:$}=f,k=M(f,["className","children","isParentPlaying","isParentRevert","isParentEnableScroll","parentAnimationStyle","parentPlayId","id"]),L=(null==b?void 0:b.type)===o.LayoutItemType.Widget,E=(null==b?void 0:b.type)===o.LayoutItemType.Section,{effect:z,oneByOneEffect:A}=null!==(n=null===(e=f.layoutItem)||void 0===e?void 0:e.setting)&&void 0!==n?n:{},[B,N]=o.React.useState(!1),V=Object(R.a)(y.current,f.watchViewportVisibility);o.React.useEffect(()=>{N(!0)},[]);const{type:F,trigger:W,playId:D,revert:H,onAnimationEnd:G}=function(t){var e;const{effect:n}=t,{pageId:i}=o.React.useContext(s.a);let r=null===(e=null==n?void 0:n[o.AnimationTriggerType.ScrollIntoView])||void 0===e?void 0:e.type;r=r&&r!==o.AnimationType.None?r:null;const a=T(r),[l,u]=o.React.useState(Symbol("page load")),c=o.React.useRef(o.AnimationTriggerType.Manual),d=o.React.useRef(a);o.React.useEffect(()=>{r&&d.current!==a&&(d.current=a,u(Symbol("autoplay when visible change")),c.current=o.AnimationTriggerType.Manual)},[r,a]);const p=o.React.useCallback(()=>{l&&(c.current=o.AnimationTriggerType.ScrollIntoView,u(null))},[l]);return r?{onAnimationEnd:p,playId:l,type:r,trigger:l?o.AnimationTriggerType.Manual:c.current,revert:!a}:{}}({effect:z}),{setting:_,trigger:U,inheritedOneByOneSetting:X,playId:Y,depth:J,revert:Z,onAnimationEnd:q}=function(t){var e,n;const{effect:i,isInSection:r}=t,{pageId:a}=o.React.useContext(s.a);let l=null==i?void 0:i[o.AnimationTriggerType.ScrollIntoView];l=l&&l!==o.AnimationType.None?l:null;const u=T(l),c=o.React.useContext(o.AnimationContext),d=o.React.useRef(u),p=o.React.useRef(o.AnimationTriggerType.Manual),[g,f]=o.React.useState(Symbol("page load"));o.React.useEffect(()=>{l&&d.current!==u&&(d.current=u,f(Symbol("autoplay when visible change")),p.current=o.AnimationTriggerType.Manual)},[l,u]);const y=o.React.useCallback(()=>{g&&(p.current=o.AnimationTriggerType.ScrollIntoView,f(null))},[g]);return l?{setting:null==i?void 0:i[o.AnimationTriggerType.ScrollIntoView],onAnimationEnd:y,trigger:g?o.AnimationTriggerType.Manual:p.current,inheritedOneByOneSetting:r?null:null==c?void 0:c.setting,playId:g,revert:!u,depth:(null!==(n=null==c?void 0:c.depth)&&void 0!==n?n:0)+1}:{inheritedOneByOneSetting:r?null:null==c?void 0:c.setting,depth:(null!==(e=null==c?void 0:c.depth)&&void 0!==e?e:0)+1}}({effect:A,isInSection:t.isInSection}),K=o.React.useMemo(()=>({trigger:U,setting:_,inheritedOneByOneSetting:X,playId:Y,depth:J,revert:Z,onAnimationEnd:q}),[U,_,X,Y,J,Z,q]);if(!f.layoutItem||L&&!b.widgetId||E&&!b.sectionId)return null;const Q=null===(i=null==z?void 0:z[o.AnimationTriggerType.ScrollIntoView])||void 0===i?void 0:i.option,tt=null!==(u=null===(l=null===(a=null===(r=b.setting)||void 0===r?void 0:r.style)||void 0===a?void 0:a.transform)||void 0===l?void 0:l.rotate)&&void 0!==u?u:0;return Object(o.jsx)(o.AnimationContext.Provider,{value:K},Object(o.jsx)(s.e.Provider,{value:V},Object(o.jsx)(o.Animation,{id:$,type:F,trigger:W,configType:null==Q?void 0:Q.configType,direction:null==Q?void 0:Q.direction,playId:D,revert:H,onAnimationEnd:G,parentAnimationStyle:O,isParentPlaying:x,isParentRevert:j,isParentEnableScroll:S,parentPlayId:P,ref:y,css:o.css`
            position: relative;
            overflow: visible;
            min-width: ${p.h}px;
            min-height: ${p.h}px;
          `,className:Object(o.classNames)("d-flex layout-item",I,{"is-widget":L,"is-section":E}),"data-layoutitemid":m,"data-layoutid":v},L&&Object(o.jsx)(h,Object.assign({rotate:tt},k)),E&&Object(o.jsx)(C,Object.assign({rotate:tt},k)),t.children)))}var $=n(14);class k extends o.React.PureComponent{getPositionStyle(t){const{layoutItem:e,transformedBBox:n}=this.props,i=null!=n?n:e.bbox,r=Object($.e)(i,t),a=Object.assign(Object.assign({},r),Object($.a)(e.bbox,t));return o.css`
      position: absolute;
      transform: ${a.transform};
      left: ${Object(c.getValueOfBBox)(a,"left")};
      right: ${Object(c.getValueOfBBox)(a,"right")};
      top: ${Object(c.getValueOfBBox)(a,"top")};
      bottom: ${Object(c.getValueOfBBox)(a,"bottom")};
      width: ${Object(c.getValueOfBBox)(a,"width")};
      height: ${Object(c.getValueOfBBox)(a,"height")};
    `}render(){const{layoutItem:t,layoutId:e}=this.props;if(null==t||t.isPending)return null;const n=o.lodash.assign({},d.a,t.setting),i=Object(c.parseAspectRatio)(n.aspectRatio),r=Object($.d)(n),a=Object(c.handleOnebyOneAnimation)(this.props);return Object(o.jsx)(P,Object.assign({css:this.getPositionStyle(n),layoutId:e,layoutItemId:t.id,forceAspectRatio:r,aspectRatio:i,isInSection:this.props.isInSection},a))}}class L extends o.React.PureComponent{createItem(t,e,n,i){const r=t.content[e];return Object(o.jsx)(k,{key:`${t.id}_${e}`,index:n,layoutId:t.id,layoutItemId:e,layoutItem:r,transformedBBox:i?t.content[e].bbox:null,isInSection:this.props.isInSection})}render(){const{layout:t,layouts:e,className:n,style:i,browserSizeMode:r}=this.props;return t?Object(o.jsx)(s.a.Consumer,null,a=>{this.pageContext=a;let s=t,l=!1;if(e[r]!==t.id&&this.layoutTransform){let n;Object.keys(e).some(o=>{if(e[o]===t.id)return n=o,!0}),s=this.layoutTransform(t,n,r),l=!0}const c=o.lodash.assign({},d.b,s.setting),p=s.order||[],g=Object(o.classNames)("layout fixed-layout d-flex",n);return Object(o.jsx)("div",{className:g,style:Object.assign(Object.assign(Object.assign({position:"relative",height:"auto"},i),u.styleUtils.toCSSStyle(c.style)),{width:"100%",overflow:"hidden"}),"data-layoutid":s.id},p.length>0&&Object(o.jsx)(o.OneByOneAnimation,{css:o.css`
                  position: absolute;
                  left: 0;
                  right: 0;
                  top: 0;
                  bottom: 0;
                `,"data-layoutid":t.id},p.map((t,e)=>this.createItem(s,t,e,l))))}):null}}var E=o.ReactRedux.connect(c.mapStateToLayoutProps)(L);class z extends o.React.PureComponent{isStretchInCrossAxis(){var t,e;const{layoutItem:n}=this.props;return(null===(e=null===(t=n.setting)||void 0===t?void 0:t.autoProps)||void 0===e?void 0:e.width)!==p.f.Custom}calHeight(t,e){var n,o;return(null===(n=t.autoProps)||void 0===n?void 0:n.height)===p.f.Auto||"ratio"===t.heightMode?"ratio"===t.heightMode?{height:"auto",flex:"0 0 auto"}:{height:"auto"}:(null===(o=t.autoProps)||void 0===o?void 0:o.height)===p.f.Stretch||"fit"===t.heightMode?{flex:"1 1 auto"}:{height:e.height,flexShrink:0}}getStyle(t,e){var n,i;const{index:r,layoutItem:a,space:s}=this.props,l=a.bbox||{},u=this.calHeight(t,l);return u.width=e?"auto":l.width,o.css`
      margin-top: ${r>0?s+"px":"unset"};
      align-self: ${e?"stretch":null!==(i=null===(n=t.style)||void 0===n?void 0:n.alignSelf)&&void 0!==i?i:"auto"};
      width: ${Object(c.getValueOfBBox)(u,"width")};
      height: ${Object(c.getValueOfBBox)(u,"height")};
      flex: ${u.flex};
      flex-shrink: ${u.flexShrink};
    `}render(){const{layoutId:t,layoutItem:e,onClick:n}=this.props;if(!e||e.isPending)return null;const i=Object(o.classNames)("flexbox-layout-item","d-flex"),r=e.setting||{},a=this.isStretchInCrossAxis(),s="ratio"===r.heightMode,l=Object(c.parseAspectRatio)(r.aspectRatio),u=Object(c.handleOnebyOneAnimation)(this.props);return Object(o.jsx)(P,Object.assign({css:this.getStyle(r,a),layoutId:t,layoutItemId:e.id,onClick:n,className:i,forceAspectRatio:s,aspectRatio:l},u))}}var A=n(27);class B extends o.React.PureComponent{createItem(t,e,n){const{layout:i}=this.props;return Object(o.jsx)(z,{key:t,index:e,space:n.space,layoutId:i.id,layoutItemId:t,layoutItem:i.content[t]})}render(){const{layout:t,className:e}=this.props,n=t.order||Object(o.Immutable)([]),i=Object.assign({},A.a,t.setting),r=Object(o.classNames)("layout column-layout d-flex w-100",e);return Object(o.jsx)("div",{className:r,style:{position:"relative",overflow:"hidden"},"data-layoutid":t.id},Object(o.jsx)(o.OneByOneAnimation,{enableScroll:!0,className:"trail-container d-flex flex-column w-100",css:o.css`
          height: 100%;
          overflow-x: hidden;
          padding: ${u.styleUtils.toCSSPadding(i.padding)};
          justify-content: ${i.justifyContent};
          overflow-y: ${!1===i.overflowY?"hidden !important":null}
        `},n.asMutable().map((t,e)=>this.createItem(t,e,i))))}}var N=o.ReactRedux.connect(c.mapStateToLayoutProps)(B),V=n(21),F=n(15);class W extends o.React.PureComponent{getStyle(t){var e,n,i,r;const{gutter:a,layoutItem:s,isMultiRow:l}=this.props,u=s.bbox,d=Object(V.b)(t,u,l);return l?o.css`
        padding: ${a/2}px 0;
        transform: ${null!=t.offsetX||null!=t.offsetY?`translate(${null!==(e=t.offsetX)&&void 0!==e?e:0}px, ${null!==(n=t.offsetY)&&void 0!==n?n:0}px)`:null};
        height: ${c.getValueOfBBox(d,"height")};
        align-self: ${d.alignSelf};
      `:o.css`
      padding-left: ${a/2}px;
      padding-right: ${a/2}px;
      transform: ${null!=t.offsetX||null!=t.offsetY?`translate(${null!==(i=t.offsetX)&&void 0!==i?i:0}px, ${null!==(r=t.offsetY)&&void 0!==r?r:0}px)`:null};
      height: ${c.getValueOfBBox(d,"height")};
      align-self: ${d.alignSelf};
    `}render(){const{span:t,offset:e,layoutId:n,layoutItem:i}=this.props;if(null==i||i.isPending)return null;const r=o.lodash.assign({},F.a,i.setting),a=Object(o.classNames)("row-layout-item","col-"+t,"offset-"+e),s=c.parseAspectRatio(r.aspectRatio),l=c.handleOnebyOneAnimation(this.props);return Object(o.jsx)(P,Object.assign({css:this.getStyle(r),className:a,layoutId:n,layoutItemId:i.id,forceAspectRatio:"ratio"===r.heightMode,aspectRatio:s,onClick:this.props.onClick},l))}}class D extends o.React.PureComponent{constructor(t){super(t),this.flipLeftRight=c.isRTL()}collectBounds(){var t;const{transformedLayout:e}=this.props,n=null!==(t=e.order)&&void 0!==t?t:[];return this.childRects=[],n.forEach(t=>{var n,o;if(e.content[t].isPending)return;const i=null===(o=null===(n=e.content)||void 0===n?void 0:n[t])||void 0===o?void 0:o.bbox;null!=i&&this.childRects.push({layoutId:e.id,id:t,left:parseInt(i.left,10),width:parseInt(i.width,10),height:parseInt(i.height,10)})}),this.childRects.sort((t,e)=>t.left-e.left)}getConfig(){var t;const{layout:e}=this.props;return null!==(t=e.setting)&&void 0!==t?t:F.b}createItem(t,e,n){var i;const{transformedLayout:r,isMultiRow:a}=this.props,s=this.getConfig(),l=t[e],u=null!==(i=s.space)&&void 0!==i?i:0;let c;if(0===e)c=l.left;else{const n=t[e-1];c=l.left-n.left-n.width}return Object(o.jsx)(W,{key:`${l.layoutId}_${l.id}`,offset:c,gutter:u,span:l.width,isMultiRow:a,layoutId:r.id,layoutItemId:l.id,layoutItem:r.content[l.id],alignItems:n.alignItems})}render(){var t,e;const{layout:n,className:i}=this.props;this.collectBounds();const r=this.childRects,a=this.getConfig(),l=null!==(t=a.style)&&void 0!==t?t:{},u=null!==(e=a.space)&&void 0!==e?e:0;return Object(o.jsx)(s.a.Consumer,null,t=>Object(o.jsx)("div",{className:Object(o.classNames)("row-layout",i,{"row-rtl":this.flipLeftRight}),css:V.a,"data-layoutid":n.id},Object(o.jsx)("div",{css:o.css`
                  width: 100%;
                  max-width: ${t.maxWidth>0?t.maxWidth+"px":"none"};
                `},Object(o.jsx)("div",{css:o.css`
                    position: relative;
                    height: 100%;
                    margin-left: ${-u/2}px;
                    margin-right: ${-u/2}px;
                    display: flex;
                    flex-direction: column;
                  `},r.length>0&&Object(o.jsx)(o.OneByOneAnimation,{className:Object(o.classNames)("row h-100 m-0",{"flex-nowrap":!this.props.isMultiRow}),css:o.css`
                        position: relative;
                        height: 100%;
                        overflow: ${this.props.isMultiRow?"auto":"unset"};
                      `},r.map((t,e)=>this.createItem(r,e,l)))))))}}class H extends o.React.PureComponent{constructor(t){super(t),this.onResize=(t,e)=>{var n;if(this.props.browserSizeMode!==this.props.mainSizeMode)return;if(0===t&&0===e)return;const{widgetId:o}=this.props;null!=(null===(n=window.runtimeInfo.widgets)||void 0===n?void 0:n[o])?window.runtimeInfo.widgets[o].height=e:window.runtimeInfo.widgets[o]={height:e}},this.handleDebounceResize=o.lodash.debounce(this.onResize,200)}findExtension(){var t;const e=o.ExtensionManager.getInstance().getExtensions(""+o.extensionSpec.ExtensionPoints.LayoutTransformer);if((null==e?void 0:e.length)>0){const n=e.find(t=>t.layoutType===o.LayoutType.RowLayout);this.layoutTransform=null===(t=n)||void 0===t?void 0:t.transformLayout}}transform(){const{layout:t,layouts:e,browserSizeMode:n,mainSizeMode:o}=this.props;null==this.layoutTransform&&this.findExtension();let i=t;e[n]!==t.id&&null!=this.layoutTransform&&(i=this.layoutTransform(t,o,n)),this.finalLayout=i}createRow(){const{layout:t,layouts:e}=this.props;return Object(o.jsx)(D,{layouts:e,layout:t,transformedLayout:this.finalLayout,isMultiRow:this.finalLayout!==t})}render(){var t;const{layout:e,className:n}=this.props,i=null!==(t=e.setting)&&void 0!==t?t:F.b;return Object(o.jsx)(s.a.Consumer,null,t=>(this.transform(),Object(o.jsx)("div",{className:Object(o.classNames)("layout d-flex",n),css:o.css`
                width: 100%;
                padding: ${u.styleUtils.toCSSPadding(i.style.padding)};
              `,"data-layoutid":e.id},this.createRow(),Object(o.jsx)(o.ReactResizeDetector,{handleHeight:!0,onResize:this.handleDebounceResize}))))}}var G=o.ReactRedux.connect(c.mapStateToLayoutProps)(H),_=n(28),U=n(29),X=n(16),Y=n(20);class J extends o.React.PureComponent{calHeight(t){const{layoutItem:e}=this.props,n=e.bbox||{},o=Object(c.getValueOfBBox)(n,"height");if(!o||Object(c.isPercentage)(o))return"auto";switch(t.heightMode){case"auto":return"auto";case"fixed":return o}}getStyle(t){const{index:e,gutter:n}=this.props;return o.css`
      margin-top: ${e>0?n+"px":"unset"};
      width: ${Object(Y.b)(t)};
      height: ${this.calHeight(t)};
      flex-shrink: 0;
      transform: ${t.offsetX||t.offsetY?`translate(${t.offsetX||0}px, ${t.offsetY||0}px)`:null};
    `}render(){const{layoutId:t,layoutItem:e,onClick:n,isEmpty:i}=this.props;if(!e||i)return null;const r=Object(o.classNames)("flow-layout-item","d-flex"),a=o.lodash.assign({},X.a,e.setting),s=Object(c.handleOnebyOneAnimation)(this.props);return Object(o.jsx)(P,Object.assign({id:`${t}_block_${e.id}`,css:this.getStyle(a),layoutId:t,layoutItemId:e.id,onClick:n,className:r},s))}}var Z=o.ReactRedux.connect(Y.c)(J);class q extends o.React.PureComponent{calculatePosition(){const{layoutItem:t}=this.props;return Object(Y.a)(t)}render(){const{layoutId:t,layoutItem:e,onClick:n}=this.props;if(!e)return null;const i=Object(o.classNames)("flow-layout-item floating","d-flex");return Object(o.jsx)(P,{css:this.calculatePosition(),layoutId:t,layoutItemId:e.id,onClick:n,className:i})}}var K=n(25),Q=n(12),tt=n(30);function et(t,e){return o.css`
    position: relative;
    width: 100%;

    .main-panels {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      pointer-events: none;
      z-index: 0;
    }

    .side-panels {
      position: relative;
      z-index: 1;
      pointer-events: none;

      > div:first-of-type > div.panel-content {
        padding-top: ${Math.round(100*Q.b)}vh;
        padding-top: calc(var(--vh) * ${Math.round(100*Q.b)});
      }

      /* > div:nth-last-of-type(2) {
        min-height: 100vh;
      } */
    }

    &.small-size .main-panels {
      z-index: ${e?0:1};
    }

    &.small-size .side-panels {
      z-index: ${e?1:0};
    }
  `}function nt(t){var e;const{layoutId:n,layoutItemId:i,layoutItem:r}=t,{screenGroupId:a}=r,l=o.ReactRedux.useSelector(t=>t.appConfig.screenGroups[r.screenGroupId]),u=o.ReactRedux.useSelector(t=>{const e=t.appConfig.screenGroups[r.screenGroupId].screens[0];return null!=t.appConfig.screens[e].panel}),c=o.ReactRedux.useSelector(t=>t.browserSizeMode),{pageId:d}=o.React.useContext(s.a),p=o.ReactRedux.useSelector(t=>{const e=t.appConfig.pages[d];if(null==e?void 0:e.header){const e=t.appConfig.header;if(null==e?void 0:e.sticky){const n=t.browserSizeMode,o=t.appConfig.mainSizeMode,i=e.height[n]||e.height[o]||Q.a;return parseInt(i,10)}}return 0}),{screens:g,stretchPanel:f=!0,triggerType:y=o.ScreenTriggerType.Bottom,verticalSpace:h="0",panelTransitionType:v=o.ScreenTransitionType.Push}=l;let m=null!==(e=l.transitionType)&&void 0!==e?e:o.ScreenTransitionType.Fade;c!==o.BrowserSizeMode.Small||u||(m=o.ScreenTransitionType.Cover);const b=o.ReactRedux.useSelector(t=>{var e;return null===(e=t.appRuntimeInfo.screenGroupNavInfos)||void 0===e?void 0:e[a]}),I=o.React.useRef(),w=o.React.useRef(),x=o.React.useRef(),[j,O]=o.React.useState(0),C=o.React.useMemo(()=>{var t,e,n;if(c!==o.BrowserSizeMode.Small)return!1;const i=Object(o.getAppStore)().getState().appConfig,r=null===(e=null===(t=i.screenGroups)||void 0===t?void 0:t[a])||void 0===e?void 0:e.screens;if(null==r?void 0:r[j]){return null===(n=i.screens[r[j]].panel)||void 0===n?void 0:n.overlay}return!1},[a,j,c]);o.React.useEffect(()=>{null!=(null==b?void 0:b.activeIndex)&&b.activeIndex!==j&&O(b.activeIndex)},[b,j]);const T=o.React.useCallback((t,e)=>{e&&t!==j?Object(o.getAppStore)().dispatch(o.appActions.screenGroupNavInfoChanged(a,t,!1)):!e&&t>0&&Object(o.getAppStore)().dispatch(o.appActions.screenGroupNavInfoChanged(a,t-1,!1))},[j,a]),R=o.React.useCallback(()=>{if(!w.current)return;const t=w.current.children[0],e=w.current.children[1];t.style.height=e.clientHeight+"px"},[]),M=o.React.useMemo(()=>o.lodash.debounce(R,200),[R]),P=o.React.useCallback((t,e)=>{if(!w.current)return;const n=w.current.children[0],i=w.current.children[1];if(m!==o.ScreenTransitionType.Fade)if(m!==o.ScreenTransitionType.Cover){if(m===o.ScreenTransitionType.Push){const e=n.querySelector(`div.screen-main-panel[data-index="${t}"]`),o=i.querySelector(`div.screen-side-panel[data-index="${t}"]`);e.style.height=o.clientHeight+"px",n.style.height=i.clientHeight+"px"}}else Object(tt.a)(n,i,c);else n.style.height=i.clientHeight+"px"},[c,m]);return g.length>0?Object(o.jsx)("div",{className:Object(o.classNames)("flow-layout-item",{"small-size":c===o.BrowserSizeMode.Small}),css:et(0,C),"data-layoutitemid":i,"data-layoutid":n,ref:I},Object(o.jsx)("div",{className:"screen-group",ref:w},Object(o.jsx)("div",{className:"main-panels",ref:x},Object(o.jsx)(K.a,{rootLayoutId:n,activeIndex:j,screens:g,transitionType:m,layoutEntry:S,headerHeight:p,isSmallSize:c===o.BrowserSizeMode.Small})),Object(o.jsx)("div",{className:"side-panels"},g.map((t,e)=>Object(o.jsx)(K.b,{key:t,index:e,isLast:e===g.length-1,screenId:t,refElement:null,layoutEntry:S,isActive:e===j,stretched:f,triggerType:y,verticalSpace:h,transitionType:v,screenTransitionType:m,onHeightChange:P,onInterctionChange:T,isSmallSize:c===o.BrowserSizeMode.Small,headerHeight:p})),Object(o.jsx)(o.ReactResizeDetector,{handleHeight:!0,onResize:M})))):null}class ot extends o.React.PureComponent{constructor(t){var e;super(t);const n=o.ExtensionManager.getInstance().getExtensions(""+o.extensionSpec.ExtensionPoints.LayoutTransformer);if(n&&n.length>0){const t=n.find(t=>t.layoutType===this.props.layout.type);this.layoutTransform=null===(e=t)||void 0===e?void 0:e.transformLayout}}_createItem(t,e,n){var i;const{layout:r}=this.props;return t.type===o.LayoutItemType.ScreenGroup?Object(o.jsx)(nt,{key:`${t.id}_${e}`,itemIndex:e,layoutId:r.id,layoutItemId:t.id,layoutItem:t}):(null===(i=t.setting)||void 0===i?void 0:i.isFloating)?Object(o.jsx)(q,{key:t.id,index:e,gutter:n.gutter,layoutId:r.id,layoutItemId:t.id,layoutItem:t}):Object(o.jsx)(Z,{key:t.id,index:e,gutter:n.gutter,layoutId:r.id,layoutItemId:t.id,layoutItem:t})}render(){const{layout:t,className:e,style:n,layouts:i,browserSizeMode:r}=this.props;return t?Object(o.jsx)(s.a.Consumer,null,a=>{let s=t;if(i[r]!==t.id&&this.layoutTransform){let e;Object.keys(i).some(n=>{if(i[n]===t.id)return e=n,!0}),s=this.layoutTransform(t,e,r)}const l=s.order||[],c=o.lodash.assign({},X.b,s.setting),d=Object.assign(Object.assign(Object.assign({},n),u.styleUtils.toCSSStyle(c.style)),{position:"relative"}),p=Object(o.classNames)("layout flow-layout w-100",e);return Object(o.jsx)("div",{className:p,style:d,"data-layoutid":t.id},Object(o.jsx)(o.OneByOneAnimation,{"data-layoutid":s.id,enableScroll:!0,className:"trail-container d-flex flex-column align-items-center",css:o.css`
                  width: 100%;
                `},l.map((t,e)=>this._createItem(s.content[t],e,c))))}):null}}var it=o.ReactRedux.connect(c.mapStateToLayoutProps)(ot),rt=n(11);class at extends o.React.PureComponent{render(){const{layoutId:t,layoutItem:e}=this.props;if(!e)return null;const n=o.css`
      position: relative;
      width: ${Object(c.getValueOfBBox)(e.bbox,"width")};
      height: ${Object(c.getValueOfBBox)(e.bbox,"height")};
      flex-shrink: 1;
      flex-grow: 1;
    `;return Object(o.jsx)(P,{css:n,layoutId:t,layoutItemId:e.id,onClick:this.props.onClick})}}var st=o.ReactRedux.connect(c.mapStateToLayoutItemProps)(at);class lt extends o.React.PureComponent{getStyle(){const{direction:t,size:e,color:n}=this.props,i=e+"px";return o.css`
      width: ${t===rt.b.Vertical?"100%":i};
      height: ${t===rt.b.Vertical?i:"100%"};
      background: ${n};
      position: relative;
      z-index: ${p.g.HandlerTools};

      .horizontal-splitter {
        width: 15px;
        height: 100%;
        position: absolute;
        left: -5px;
      }

      .vertical-splitter {
        width: 100%;
        height: 15px;
        position: absolute;
        top: -5px;
      }
    `}render(){const{direction:t}=this.props;return Object(o.jsx)("div",{ref:t=>this.ref=t,css:this.getStyle()},Object(o.jsx)("div",{className:Object(o.classNames)({"horizontal-splitter":t===rt.b.Horizontal,"vertical-splitter":t===rt.b.Vertical})}))}}class ut extends o.React.PureComponent{createItems(t,e){const{layoutId:n,layoutItem:i,splitterColor:r,splitterSize:a}=this.props,s=[];return t.forEach((l,u)=>{const c=e.includes(l)?ct:st;s.push(o.React.createElement(c,{key:l,layoutId:n,layoutItemId:l})),u!==t.length-1&&s.push(o.React.createElement(lt,{key:l+"_splitter",layoutId:n,direction:i.direction,prevItemId:t[u],nextItemId:t[u+1],size:a,color:r}))}),s}render(){const{layoutItem:t,subContainerIds:e}=this.props;if(!t)return null;const n=t.items&&t.items.length>0?t.items:[t.id],i=e.split(","),r=Object(o.classNames)("grid-container d-flex justify-content-start",{"flex-column":t.direction===rt.b.Vertical}),a={width:t.bbox.width,height:t.bbox.height,flexShrink:1,flexGrow:1};return o.React.createElement("div",{className:r,"data-layoutitemid":t.id,"data-layoutid":this.props.layoutId,style:a,ref:t=>this.ref=t},this.createItems(n,i))}}const ct=o.ReactRedux.connect((function(t,e){const{layoutId:n,layoutItemId:o}=e,{layouts:i}=t.appConfig,r=i[n],a=r.content[o],s=[];return a&&a.items&&a.items.forEach(t=>{const e=r.content[t];e&&e.items&&s.push(t)}),{layoutItem:a,subContainerIds:s.join(",")}}))(ut);class dt extends o.React.PureComponent{render(){var t,e;const{layout:n,className:i}=this.props,r=o.lodash.assign({},rt.a,n.setting&&n.setting.splitter),a=null===(t=n.setting)||void 0===t?void 0:t.style,s=null===(e=n.setting)||void 0===e?void 0:e.rootItemId,l=Object.assign(Object.assign({position:"relative"},u.styleUtils.toCSSStyle(a)),{overflow:"hidden"}),c=Object(o.classNames)("layout grid-layout d-flex w-100",i);return Object(o.jsx)("div",{className:c,style:l,"data-layoutid":n.id},s&&Object(o.jsx)(ct,{layoutId:n.id,layoutItemId:s,splitterSize:r.size,splitterColor:r.color}))}}var pt=o.ReactRedux.connect(c.mapStateToLayoutProps)(dt);function gt(t){const{pageJson:e,visible:n,pageContext:i,browserSizeMode:r}=t,[a,l]=o.React.useState(),u=e.layout,c=e.oneByOneEffect&&e.oneByOneEffect.type!==o.AnimationType.None?e.oneByOneEffect:null,d=c?!n:null;o.React.useEffect(()=>{c&&l(Symbol("autoplay when switching to visible"))},[n]);const p=o.React.useMemo(()=>({trigger:o.AnimationTriggerType.Manual,setting:c,revert:d,inheritedOneByOneSetting:null,playId:c?a:null,depth:0}),[c,d,a]);let g;e.mode!==o.PageMode.FitWindow&&e.maxWidth>0&&(g=e.maxWidth);const f=o.React.useMemo(()=>Object.assign(Object.assign({},i),{maxWidth:g,viewOnly:!0,pageId:e.id}),[i,g,e.id]);if(u)return Object(o.jsx)(s.a.Provider,{key:e.id,value:f},Object(o.jsx)(s.b.Provider,{value:n},Object(o.jsx)("div",{id:e.id,"data-pageid":e.id,className:"page",style:{display:n?"flex":"none",backgroundColor:e.bodyBackgroundColor||"transparent",height:"auto",flex:"1 0 auto",zIndex:1}},Object(o.jsx)(o.AnimationContext.Provider,{value:p},Object(o.jsx)(S,{layouts:u,className:"w-100 flex-grow-1",css:o.css`
                margin: 0 auto;
                background-color: transparent;
              `})))))}function ft(t){var e,n;const{headerJson:i,visible:r,browserSizeMode:a,theme:l,mainSizeMode:u,pageContext:c}=t,d=i.height[a]||i.height[u]||50,p=i.layout;let g;i.backgroundIMage&&("string"==typeof i.backgroundIMage?g=i.backgroundIMage:"object"==typeof i.backgroundIMage&&(g=i.backgroundIMage.url));const f=o.React.useMemo(()=>{var t;return o.css`
      display: ${r?"flex":"none"};
      position: ${i.sticky?"sticky":"relative"};
      z-index: ${i.sticky?2:"auto"};
      top: 0;
      width: 100%;
      min-height: ${Math.round(parseFloat(d))}px;
      height: auto;
      overflow: hidden;
      background-color: ${i.backgroundColor||l.header.bg||"transparent"};
      background-image: ${g};
      background-position: ${i.backgroundPosition};
      color: ${null===(t=null==l?void 0:l.header)||void 0===t?void 0:t.color};
      flex: 0 0 auto;
    `},[r,d,i.sticky,i.backgroundColor,g,i.backgroundPosition,null===(e=null==l?void 0:l.header)||void 0===e?void 0:e.bg,null===(n=null==l?void 0:l.header)||void 0===n?void 0:n.color]),y=o.React.useMemo(()=>Object.assign(Object.assign({},c),{viewOnly:!0}),[c]);return Object(o.jsx)(s.a.Provider,{value:y},Object(o.jsx)(s.b.Provider,{value:r},Object(o.jsx)("div",{className:"header",css:f},Object(o.jsx)(S,{layouts:p,className:"w-100 flex-grow-1"}))))}function yt(t){var e,n;const{footerJson:i,visible:r,browserSizeMode:a,theme:l,mainSizeMode:u,pageContext:c}=t,d=i.height[a]||i.height[u]||50,p=i.layout;let g;i.backgroundIMage&&("string"==typeof i.backgroundIMage?g=i.backgroundIMage:"object"==typeof i.backgroundIMage&&(g=i.backgroundIMage.url));const f=o.React.useMemo(()=>{var t;return o.css`
      display: ${r?"flex":"none"};
      width: 100%;
      min-height: ${Math.round(parseFloat(d))}px;
      height: auto;
      overflow: hidden;
      background-color: ${i.backgroundColor||l.footer.bg||"transparent"};
      background-image: ${g};
      background-position: ${i.backgroundPosition};
      color: ${null===(t=null==l?void 0:l.footer)||void 0===t?void 0:t.color};
      z-index: 0;
    `},[r,d,i.backgroundColor,g,i.backgroundPosition,null===(e=null==l?void 0:l.footer)||void 0===e?void 0:e.bg,null===(n=null==l?void 0:l.footer)||void 0===n?void 0:n.color]),y=o.React.useMemo(()=>Object.assign(Object.assign({},c),{viewOnly:!0}),[c]);return Object(o.jsx)(s.a.Provider,{value:y},Object(o.jsx)(s.b.Provider,{value:r},Object(o.jsx)("div",{className:"footer",css:f},Object(o.jsx)(S,{layouts:p,className:"w-100 flex-grow-1"}))))}I(o.LayoutType.FixedLayout,E),I(o.LayoutType.FlowLayout,it),I(o.LayoutType.GridLayout,pt),I(o.LayoutType.ColumnLayout,N);class ht extends o.React.PureComponent{constructor(t){super(t),o.ExtensionManager.getInstance().registerExtension({epName:o.extensionSpec.ExtensionPoints.LayoutTransformer,extension:new _.a}),o.ExtensionManager.getInstance().registerExtension({epName:o.extensionSpec.ExtensionPoints.LayoutTransformer,extension:new U.a}),this.pageContext={theme:this.props.theme}}componentDidUpdate(t){vt(t.pageStatus)!==vt(this.props.pageStatus)&&(this.pageRef.scrollTop=0)}render(){const{pageStatus:t,pages:e,theme:n}=this.props,i=vt(t);if(!i)return null;let r="100%";const a=e[i]||{};a&&!isNaN(+a.width)&&(r=+a.width);const s={width:r,margin:"0 auto",minHeight:"100%",overflow:"auto",height:"100%",backgroundColor:a&&a.backgroundColor};return Object(o.jsx)("div",{className:"page-renderer d-flex flex-column",css:s,ref:t=>this.pageRef=t,"data-testid":"pageRenderer"},this.renderDialog(),this.renderHeader(),Object.keys(t).map(t=>this.renderPageBody(t,n)),this.renderFooter())}renderHeader(){if(!this.props.header)return null;const{header:t,headerVisible:e,browserSizeMode:n,theme:i,mainSizeMode:r}=this.props;return Object(o.jsx)(ft,{headerJson:t,pageContext:this.pageContext,visible:e,browserSizeMode:n,mainSizeMode:r,theme:i})}renderFooter(){if(!this.props.footer)return null;const{footer:t,footerVisible:e,browserSizeMode:n,mainSizeMode:i,theme:r}=this.props;return Object(o.jsx)(yt,{footerJson:t,pageContext:this.pageContext,visible:e,browserSizeMode:n,mainSizeMode:i,theme:r})}renderPageBody(t,e){const{pageStatus:n,pages:i}=this.props,r=i[t];if(!r)return;const a=!!n[t];return Object(o.jsx)(gt,{key:r.id,pageJson:r,pageContext:this.pageContext,browserSizeMode:this.props.browserSizeMode,visible:a})}renderDialog(){const{dialogId:t,urlDialogJson:e,splashDialogJson:n,isSplashClosed:i,isPageDlgClosed:r,pageDialogJson:a,pageDialogId:l}=this.props;return Object(o.jsx)(o.React.Fragment,null,e&&Object(o.jsx)(s.a.Provider,{value:Object.assign(Object.assign({},this.pageContext),{dialogId:t,viewOnly:!0})},Object(o.jsx)(o.AppDialog,{dialogJson:e,runtime:!0})),!r&&a&&(null==e?void 0:e.id)!==a.id&&Object(o.jsx)(s.a.Provider,{value:Object.assign(Object.assign({},this.pageContext),{dialogId:l,viewOnly:!0})},Object(o.jsx)(o.AppDialog,{dialogJson:a,runtime:!0,isOpenByPage:!0})),!i&&n&&(null==e?void 0:e.id)!==n.id&&Object(o.jsx)(s.a.Provider,{value:Object.assign(Object.assign({},this.pageContext),{dialogId:n.id,viewOnly:!0})},Object(o.jsx)(o.AppDialog,{dialogJson:n,runtime:!0})))}}ht.displayName="RuntimePageRenderer";function vt(t){return Object.keys(t).find(e=>t[e])}var mt=o.ReactRedux.connect((t,e)=>{var n,o,i,r,a,s;const l=vt(e.pageStatus);if(!l)return{};const u=window.jimuConfig.isBuilder?t.appStateInBuilder:t,c=null===(n=null==u?void 0:u.appRuntimeInfo)||void 0===n?void 0:n.dialogInfos,d=null===(o=null==u?void 0:u.appRuntimeInfo)||void 0===o?void 0:o.currentPageId,p=null===(r=null===(i=null==u?void 0:u.appConfig)||void 0===i?void 0:i.pages[d])||void 0===r?void 0:r.autoOpenDialogId,g=t.appConfig.dialogs,f=g[Object.keys(g).find(t=>g[t].isSplash)];return{pages:t.appConfig.pages,header:t.appConfig.header,headerVisible:!!t.appConfig.pages[l].header,footer:t.appConfig.footer,footerVisible:!!t.appConfig.pages[l].footer,browserSizeMode:t.browserSizeMode,mainSizeMode:t.appConfig.mainSizeMode,theme:t.theme,splashDialogJson:f,isSplashClosed:null===(a=null==c?void 0:c[null==f?void 0:f.id])||void 0===a?void 0:a.isClosed,pageDialogId:p,pageDialogJson:g[p],isPageDlgClosed:null===(s=null==c?void 0:c[d+"-"+p])||void 0===s?void 0:s.isClosed,urlDialogJson:g[e.dialogId]}})(ht),bt=function(t,e,n,o){return new(n||(n=Promise))((function(i,r){function a(t){try{l(o.next(t))}catch(t){r(t)}}function s(t){try{l(o.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}l((o=o.apply(t,e||[])).next())}))};function It(){return bt(this,void 0,void 0,(function*(){return yield Promise.all([a()])}))}}]))}}}));