System.register(["jimu-core","jimu-layouts/layout-runtime","jimu-ui","jimu-for-builder","jimu-ui/advanced/setting-components","jimu-ui/advanced/style-setting-components","jimu-core/dnd","jimu-for-builder/templates"],(function(t){var e,o,i,n,s,a,r,l;return{setters:[function(t){e=t},function(t){o=t},function(t){i=t},function(t){n=t},function(t){s=t},function(t){a=t},function(t){r=t},function(t){l=t}],execute:function(){t(function(t){var e={};function o(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=t,o.c=e,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=85)}([function(t,o){t.exports=e},function(t,e){t.exports=o},function(t,e){t.exports=i},function(t,e){t.exports=n},function(t,e,o){"use strict";o.r(e),o.d(e,"emptyFunc",(function(){return a})),o.d(e,"autoBindHandlers",(function(){return r})),o.d(e,"getMaximumId",(function(){return l})),o.d(e,"isPercentage",(function(){return d})),o.d(e,"isNumber",(function(){return c})),o.d(e,"getValueOfBBox",(function(){return u})),o.d(e,"toRatio",(function(){return p})),o.d(e,"fromRatio",(function(){return h})),o.d(e,"mapStateToLayoutProps",(function(){return g})),o.d(e,"mapStateToLayoutItemProps",(function(){return f})),o.d(e,"mapStateToWidgetProps",(function(){return m})),o.d(e,"isWidgetHasEmbeddedLayout",(function(){return y})),o.d(e,"isFunctionalWidget",(function(){return v})),o.d(e,"isWidgetPlaceholder",(function(){return b})),o.d(e,"replaceBoundingBox",(function(){return I})),o.d(e,"updateBoundingBoxProp",(function(){return x})),o.d(e,"relativeClientRect",(function(){return w})),o.d(e,"getBuilderThemeVariables",(function(){return j})),o.d(e,"isRTL",(function(){return S})),o.d(e,"parseAspectRatio",(function(){return C})),o.d(e,"expandStyleArray",(function(){return O})),o.d(e,"calHeightOfLayoutItem",(function(){return R})),o.d(e,"getAppConfig",(function(){return M})),o.d(e,"getCurrentSizeMode",(function(){return T})),o.d(e,"getCurrentPageId",(function(){return A})),o.d(e,"getCurrentDialogId",(function(){return P})),o.d(e,"getActivePagePart",(function(){return L})),o.d(e,"getCurrentDialogRootLayoutId",(function(){return z})),o.d(e,"getCurrentPageRootLayoutId",(function(){return k})),o.d(e,"getHeaderRootLayoutId",(function(){return N})),o.d(e,"getFooterRootLayoutId",(function(){return B})),o.d(e,"contains",(function(){return $})),o.d(e,"intersects",(function(){return E})),o.d(e,"normalizeLinearUnit",(function(){return D})),o.d(e,"getLayoutItemSizeMode",(function(){return F})),o.d(e,"gcd",(function(){return V})),o.d(e,"handleOnebyOneAnimation",(function(){return H}));var i=o(0),n=o(2),s=o(5);const a=()=>{};function r(t,e){e.forEach(e=>{t[e]&&(t[e]=t[e].bind(t))})}function l(t){let e=-1;return t.content&&Object.keys(t.content).forEach(t=>{const o=parseInt(t,10);o>e&&(e=o)}),e}function d(t){return/^-?\d*(\.\d+)?%$/.test(t)}function c(t){const e=parseFloat(t);return!isNaN(e)&&isFinite(e)}function u(t,e){return null==(null==t?void 0:t[e])?null:"string"==typeof t[e]?t[e]:c(t[e])?Math.round(parseFloat(t[e]))+"px":null}function p(t,e){return(100*t/e).toFixed(1)+"%"}function h(t,e){return parseFloat(""+t)*e/100}function g(t,e){var o,i;const n=(null===(o=e.layouts)||void 0===o?void 0:o[t.browserSizeMode])||(null===(i=e.layouts)||void 0===i?void 0:i[t.appConfig.mainSizeMode]),{layouts:s}=t.appConfig;return s[n]?{mainSizeMode:t.appConfig.mainSizeMode,browserSizeMode:t.browserSizeMode,layout:s[n]}:{mainSizeMode:t.appConfig.mainSizeMode,browserSizeMode:t.browserSizeMode,layout:null}}function f(t,e){var o,n,s,a,r,l,d;const c=e.layoutId,{layouts:u,widgets:p}=t.appConfig,h=e.layoutItemId;if(!(null===(n=null===(o=null==u?void 0:u[c])||void 0===o?void 0:o.content)||void 0===n?void 0:n[h]))return{layoutItem:null,selected:!1};let g,f=!1;const m=u[c].content[h];let y=!1;m&&(y=Boolean(m.isPending));const v=null===(s=t.appRuntimeInfo)||void 0===s?void 0:s.selection;v&&(f=v.layoutId===e.layoutId&&v.layoutItemId===m.id,g=v.autoScroll);let b=!1;if(m.type===i.LayoutItemType.Widget&&m.widgetId){const t=p[m.widgetId];b=null!==(l=null===(r=null===(a=null==t?void 0:t.manifest)||void 0===a?void 0:a.properties)||void 0===r?void 0:r.watchViewportVisibility)&&void 0!==l&&l}const I={selected:f,watchViewportVisibility:b,layoutItem:y?null:m};f&&(I.autoScroll=g);const x=null===(d=t.appRuntimeInfo)||void 0===d?void 0:d.animationPreview;if(f&&(null==x?void 0:x.layoutInfo)){const{layoutId:t,layoutItemId:o}=x.layoutInfo;I.animationPreview=t===e.layoutId&&o===e.layoutItemId,I.playMode=I.animationPreview?x.playMode:null,I.previewId=I.animationPreview?x.id:null}return I}function m(t,e){var o,i,n,s,a,r,l,d,c;const u=e.layoutId,{layouts:p}=t.appConfig;if(!p[u])return null;const h=p[u],g=e.layoutItemId,f=h.content[g];let m,b,I,x=!1,w=!1,j=!1,S=!1,C=!1,O=!1,R=!1,M=!1;if(f&&f.widgetId){const e=t.appConfig.widgets[f.widgetId];m=e.style,x=null===(i=null===(o=e.manifest)||void 0===o?void 0:o.properties)||void 0===i?void 0:i.supportInlineEditing,S=null===(s=null===(n=e.manifest)||void 0===n?void 0:n.properties)||void 0===s?void 0:s.supportRepeat,R=null===(r=null===(a=e.manifest)||void 0===a?void 0:a.properties)||void 0===r?void 0:r.canCrossLayoutBoundary;const u=t.widgetsRuntimeInfo[f.widgetId];w=null!==(l=null==u?void 0:u.isClassLoaded)&&void 0!==l&&l,j=x&&(null==u?void 0:u.isInlineEditing),M=(null===(c=null===(d=e.manifest)||void 0===d?void 0:d.extensions)||void 0===c?void 0:c.length)>0,M&&(b=e),I=t.widgetsState[f.widgetId],C=v(f.widgetId,t.appConfig),O=y(f.widgetId,t.appConfig)}return{hasEmbeddedLayout:O,supportInlineEditing:x,supportRepeat:S,isClassLoaded:w,isInlineEditing:j,widgetStyle:m,canCrossLayoutBoundary:R,hasExtension:M,widgetJson:b,widgetId:f.widgetId,isFunctionalWidget:C,widgetState:I}}function y(t,e){var o,i,n,s;const a=null===(o=null==e?void 0:e.widgets)||void 0===o?void 0:o[t];return!!(null===(n=null===(i=null==a?void 0:a.manifest)||void 0===i?void 0:i.properties)||void 0===n?void 0:n.hasEmbeddedLayout)&&Object.keys(null!==(s=null==a?void 0:a.layouts)&&void 0!==s?s:{}).length>0}function v(t,e){var o,n;const s=null===(o=null==e?void 0:e.widgets)||void 0===o?void 0:o[t];return(null===(n=null==s?void 0:s.manifest)||void 0===n?void 0:n.widgetType)!==i.WidgetType.Layout}function b(t,e){var o,n;if(!e||e.itemType!==i.LayoutItemType.Widget)return!1;if(e.layoutInfo){const{layoutId:i,layoutItemId:s}=e.layoutInfo,a=null===(n=null===(o=t.layouts)||void 0===o?void 0:o[i].content)||void 0===n?void 0:n[s];if(a&&!a.widgetId)return!0}return!e.layoutInfo&&!e.uri}function I(t,e,o){if(!t)return Object(i.Immutable)({left:d(e.left)?e.left:Math.round(e.left)+"px",right:d(e.right)?e.right:Math.round(e.right)+"px",top:d(e.top)?e.top:Math.round(e.top)+"px",bottom:d(e.bottom)?e.bottom:Math.round(e.bottom)+"px",width:d(e.width)?e.width:Math.round(e.width)+"px",height:d(e.height)?e.height:Math.round(e.height)+"px"});let n=t;return["left","right","top","bottom","width","height"].forEach(t=>{null!=n[t]?n=x(t,n,e[t],o):null!=e[t]&&(n=n.set(t,Math.round(e[t])+"px"))}),n}function x(t,e,o,i){if(null==e[t]||"auto"===e[t])return e;let n=e;return n=d(e[t])?"left"===t||"right"===t||"width"===t?d(o)?e.set(t,o):e.set(t,(100*+o/i.width).toFixed(4)+"%"):d(o)?e.set(t,o):e.set(t,(100*+o/i.height).toFixed(4)+"%"):d(o)?"left"===t||"right"===t||"width"===t?e.set(t,Math.round(parseFloat(""+o)*i.width/100)):e.set(t,Math.round(parseFloat(""+o)*i.height/100)):isNaN(+o)?e.without(t):e.set(t,Math.round(+o)+"px"),n}function w(t,e){return{left:t.left-e.left,top:t.top-e.top,right:t.right,bottom:t.bottom,width:t.width,height:t.height,id:null}}function j(){const t=window.parent;if(t&&t.jimuConfig&&t.jimuConfig.isBuilder)return t._appState.theme}function S(){var t,e;return null!==(e=null===(t=Object(i.getAppStore)().getState().appContext)||void 0===t?void 0:t.isRTL)&&void 0!==e&&e}function C(t){let e=100,o=100;if("number"==typeof t)e=100,o=Math.round(100*t);else if("string"==typeof t){const i=t.split(":");e=parseInt(i[0],10),o=parseInt(i[1],10)}return o/e}function O(t){return t&&0!==t.length?1===t.length?[t[0],t[0],t[0],t[0]]:2===t.length?[t[0],t[1],t[0],t[1]]:3===t.length?[t[0],t[1],t[2],0]:[t[0],t[1],t[2],t[3]]:[0,0,0,0]}function R(t,e){var o,i,n,a;const r=null!==(o=e.setting)&&void 0!==o?o:{},l=F("height",e.bbox,r.autoProps);if(l!==s.f.Custom)return{height:l===s.f.Stretch?t:null,setting:{autoProps:{height:l}}};let c;if("ratio"===r.heightMode)c={setting:{heightMode:"ratio",aspectRatio:null!==(i=r.aspectRatio)&&void 0!==i?i:1,autoProps:{height:s.f.Custom}}};else{let o=null!==(a=null===(n=e.bbox)||void 0===n?void 0:n.height)&&void 0!==a?a:t;o=d(o)?h(o,t):parseInt(o),c={height:o,setting:{heightMode:"fixed",autoProps:{height:s.f.Custom}}}}return c}function M(){var t;return window.jimuConfig.isBuilder?null===(t=Object(i.getAppStore)().getState().appStateInBuilder)||void 0===t?void 0:t.appConfig:Object(i.getAppStore)().getState().appConfig}function T(){var t;return window.jimuConfig.isBuilder?null===(t=Object(i.getAppStore)().getState().appStateInBuilder)||void 0===t?void 0:t.browserSizeMode:Object(i.getAppStore)().getState().browserSizeMode}function A(){var t,e,o;return window.jimuConfig.isBuilder?null===(e=null===(t=Object(i.getAppStore)().getState().appStateInBuilder)||void 0===t?void 0:t.appRuntimeInfo)||void 0===e?void 0:e.currentPageId:null===(o=Object(i.getAppStore)().getState().appRuntimeInfo)||void 0===o?void 0:o.currentPageId}function P(){var t,e,o;return window.jimuConfig.isBuilder?null===(e=null===(t=Object(i.getAppStore)().getState().appStateInBuilder)||void 0===t?void 0:t.appRuntimeInfo)||void 0===e?void 0:e.currentDialogId:null===(o=Object(i.getAppStore)().getState().appRuntimeInfo)||void 0===o?void 0:o.currentDialogId}function L(){var t,e,o;return window.jimuConfig.isBuilder?null===(e=null===(t=Object(i.getAppStore)().getState().appStateInBuilder)||void 0===t?void 0:t.appRuntimeInfo)||void 0===e?void 0:e.activePagePart:null===(o=Object(i.getAppStore)().getState().appRuntimeInfo)||void 0===o?void 0:o.activePagePart}function z(){var t,e,o;const n=window.jimuConfig.isBuilder?null===(t=Object(i.getAppStore)().getState().appStateInBuilder)||void 0===t?void 0:t.appConfig:Object(i.getAppStore)().getState().appConfig,s=P(),a=T();return null===(o=null===(e=null==n?void 0:n.dialogs[s])||void 0===e?void 0:e.layout)||void 0===o?void 0:o[a]}function k(){var t,e,o;const n=window.jimuConfig.isBuilder?null===(t=Object(i.getAppStore)().getState().appStateInBuilder)||void 0===t?void 0:t.appConfig:Object(i.getAppStore)().getState().appConfig,s=A(),a=T();return null===(o=null===(e=null==n?void 0:n.pages[s])||void 0===e?void 0:e.layout)||void 0===o?void 0:o[a]}function N(){var t,e,o;const n=window.jimuConfig.isBuilder?null===(t=Object(i.getAppStore)().getState().appStateInBuilder)||void 0===t?void 0:t.appConfig:Object(i.getAppStore)().getState().appConfig,s=T();return null===(o=null===(e=null==n?void 0:n.header)||void 0===e?void 0:e.layout)||void 0===o?void 0:o[s]}function B(){var t,e,o;const n=window.jimuConfig.isBuilder?null===(t=Object(i.getAppStore)().getState().appStateInBuilder)||void 0===t?void 0:t.appConfig:Object(i.getAppStore)().getState().appConfig,s=T();return null===(o=null===(e=null==n?void 0:n.footer)||void 0===e?void 0:e.layout)||void 0===o?void 0:o[s]}function $(t,e){return e.left>=t.left&&e.left+e.width<=t.left+t.width&&e.top>=t.top&&e.top+e.height<=t.top+t.height}function E(t,e){return!(e.left>t.left+t.width||e.left+e.width<t.left||e.top>t.top+t.height||e.top+e.height<t.top)}function D(t){var e,o,s,a;let r,l;if(null!=t&&"object"==typeof t)r=null!==(e=t.unit)&&void 0!==e?e:n.UnitTypes.PIXEL,l=null!==(o=t.distance)&&void 0!==o?o:0;else{const e=i.polished.getValueAndUnit(t);r=null!==(s=null==e?void 0:e[1])&&void 0!==s?s:n.UnitTypes.PIXEL,l=null!==(a=null==e?void 0:e[0])&&void 0!==a?a:0}return l=r===n.UnitTypes.PERCENTAGE?Math.round(10*l)/10:Math.round(l),`${l}${r}`}function F(t,e,o){const i=null==o?void 0:o[t],n="width"===t?"left":"top",a="width"===t?"right":"bottom";if(!i)return null!=e[t]?s.f.Custom:null!=e[n]&&null!=e[a]?s.f.Stretch:s.f.Auto;if(!0===i)return null!=e[n]&&null!=e[a]?s.f.Stretch:s.f.Auto;switch(i){case s.f.Auto:return s.f.Auto;case s.f.Stretch:return s.f.Stretch;default:return s.f.Custom}}function V(t,e){let o=Math.max(t,e),i=Math.min(t,e);for(;0!==i;){const t=i;i=o%i,o=t}return o}function H(t){if(!t.animationStyle)return{};const{isPlaying:e,revert:o,enableScroll:i,animationStyle:n,playId:s}=t;return{isParentPlaying:e,isParentRevert:o,isParentEnableScroll:i,parentAnimationStyle:n,parentPlayId:s}}},function(t,e,o){"use strict";var i,n;o.d(e,"i",(function(){return i})),o.d(e,"j",(function(){return n})),o.d(e,"b",(function(){return s})),o.d(e,"d",(function(){return a})),o.d(e,"c",(function(){return r})),o.d(e,"h",(function(){return l})),o.d(e,"a",(function(){return d})),o.d(e,"e",(function(){return c})),o.d(e,"g",(function(){return u})),o.d(e,"f",(function(){return p})),function(t){t[t.BringForward=0]="BringForward",t[t.SendBackward=1]="SendBackward",t[t.BringToFront=2]="BringToFront",t[t.SendToBack=3]="SendToBack"}(i||(i={})),function(t){t.Page="PAGE",t.Widget="WIDGET",t.View="VIEW",t.Screen="SCREEN"}(n||(n={}));const s=12,a=28,r=16,l=16,d=5,c=3;var u,p;!function(t){t.Auto="auto",t[t.Normal=0]="Normal",t[t.BoundaryDropArea=10]="BoundaryDropArea",t[t.DragMoveTip=20]="DragMoveTip",t[t.HandlerTools=30]="HandlerTools",t[t.DraggingItem=40]="DraggingItem"}(u||(u={})),function(t){t.Auto="AUTO",t.Stretch="STRETCH",t.Custom="CUSTOM"}(p||(p={}))},function(t,e,o){"use strict";o.d(e,"b",(function(){return a})),o.d(e,"e",(function(){return r})),o.d(e,"d",(function(){return l})),o.d(e,"c",(function(){return d})),o.d(e,"l",(function(){return c})),o.d(e,"o",(function(){return u})),o.d(e,"p",(function(){return p})),o.d(e,"q",(function(){return h})),o.d(e,"j",(function(){return g})),o.d(e,"z",(function(){return f})),o.d(e,"x",(function(){return m})),o.d(e,"E",(function(){return y})),o.d(e,"k",(function(){return v})),o.d(e,"n",(function(){return b})),o.d(e,"r",(function(){return I})),o.d(e,"u",(function(){return x})),o.d(e,"w",(function(){return w})),o.d(e,"t",(function(){return j})),o.d(e,"s",(function(){return S})),o.d(e,"a",(function(){return C})),o.d(e,"y",(function(){return O})),o.d(e,"A",(function(){return R})),o.d(e,"i",(function(){return M})),o.d(e,"m",(function(){return T})),o.d(e,"h",(function(){return A})),o.d(e,"g",(function(){return P})),o.d(e,"B",(function(){return L})),o.d(e,"C",(function(){return z})),o.d(e,"v",(function(){return N})),o.d(e,"f",(function(){return B})),o.d(e,"D",(function(){return $}));var i=o(0),n=o(18),s=o(5);function a(t,e){var o,i,n;if(!e)return null;const{layoutId:s,layoutItemId:a}=e;return null===(n=null===(i=null===(o=t.layouts)||void 0===o?void 0:o[s])||void 0===i?void 0:i.content)||void 0===n?void 0:n[a]}function r(t,e){if(t.sections)for(const o in t.sections){if(t.sections[o].views.includes(e))return o}return null}function l(t,e){let o=e.layouts[t];for(;null!=(null==o?void 0:o.parent);){if(o.parentType===s.j.View){const t=o.parent;return{viewId:t,sectionId:e.views[t].parent}}const t=Object(n.b)(e,o.id);o=e.layouts[t]}return{viewId:null,sectionId:null}}function d(t,e){let o=e.layouts[t];for(;null!=(null==o?void 0:o.parent);){if(o.parentType===s.j.Screen){const t=o.parent;return{screenId:t,screenGroupId:e.screens[t].parent}}const t=Object(n.b)(e,o.id);o=e.layouts[t]}return{screenId:null,screenGroupId:null}}function c(t){switch(t.type){case i.LayoutItemType.Widget:return"string"==typeof t.widgetId?t.widgetId:null;case i.LayoutItemType.Section:return"string"==typeof t.sectionId?t.sectionId:null;case i.LayoutItemType.ScreenGroup:return"string"==typeof t.screenGroupId?t.screenGroupId:null;default:return null}}function u(t,e,o=!1){return(null==t?void 0:t.content)?Object.keys(t.content).filter(i=>t.content[i].type===e&&!!c(t.content[i])&&(o||!t.content[i].isPending)).map(e=>c(t.content[e])):[]}function p(t,e,o,n,s=!1){let a=[];const r=u(t.layouts[e],i.LayoutItemType.Widget,s),l=u(t.layouts[e],i.LayoutItemType.Section,s),d=u(t.layouts[e],i.LayoutItemType.ScreenGroup,s);o===i.LayoutItemType.Widget?a=a.concat(r):o===i.LayoutItemType.Section?a=a.concat(l):o===i.LayoutItemType.ScreenGroup&&(a=a.concat(d));return r.filter(e=>{var o,n,s,a,r;return(null===(n=null===(o=t.widgets[e])||void 0===o?void 0:o.manifest)||void 0===n?void 0:n.widgetType)===i.WidgetType.Layout||(null===(r=null===(a=null===(s=t.widgets[e])||void 0===s?void 0:s.manifest)||void 0===a?void 0:a.properties)||void 0===r?void 0:r.hasEmbeddedLayout)}).forEach(e=>{var i;Object.keys(null!==(i=t.widgets[e].layouts)&&void 0!==i?i:{}).forEach(i=>{const r=t.widgets[e].layouts[i][n];a=a.concat(p(t,r,o,n,s))})}),l.forEach(e=>{var i,r;null===(r=null===(i=t.sections)||void 0===i?void 0:i[e])||void 0===r||r.views.forEach(e=>{t.views[e]&&t.views[e].layout[n]&&(a=a.concat(p(t,t.views[e].layout[n],o,n,s)))})}),d.forEach(e=>{var i,r;null===(r=null===(i=t.screenGroups)||void 0===i?void 0:i[e])||void 0===r||r.screens.forEach(e=>{var i,r,l,d,c,u,h;(null===(l=null===(r=null===(i=t.screens)||void 0===i?void 0:i[e])||void 0===r?void 0:r.main.layout)||void 0===l?void 0:l[n])&&(a=a.concat(p(t,t.screens[e].main.layout[n],o,n,s))),(null===(h=null===(u=null===(c=null===(d=t.screens)||void 0===d?void 0:d[e])||void 0===c?void 0:c.panel)||void 0===u?void 0:u.layout)||void 0===h?void 0:h[n])&&(a=a.concat(p(t,t.screens[e].panel.layout[n],o,n,s)))})}),a}function h(t,e,o,n,s=!1){let a=[];const r=u(t.layouts[e],i.LayoutItemType.Widget,s),l=u(t.layouts[e],i.LayoutItemType.Section,s),d=u(t.layouts[e],i.LayoutItemType.ScreenGroup,s);a=o===i.LayoutItemType.Widget?a.concat(r):o===i.LayoutItemType.ScreenGroup?a.concat(d):a.concat(l);return r.filter(e=>t.widgets&&t.widgets[e]&&t.widgets[e].manifest.widgetType===i.WidgetType.Layout).forEach(e=>{Object.keys(t.widgets[e].layouts).forEach(i=>{const r=C(t.widgets[e].layouts[i],n,t.mainSizeMode);a=a.concat(h(t,r,o,n,s))})}),a}function g(t,e,o){if(!(null==t?void 0:t.content))return null;const i=Object.keys(t.content).find(i=>t.content[i].type===o&&(t.content[i].widgetId===e||t.content[i].sectionId===e||t.content[i].screenGroupId===e)&&!t.content[i].isPending);return t.content[i]}function f(t,e,o=!1){const i=t.layouts[e];return(null==i?void 0:i.content)?o?Object.keys(i.content):Object.keys(i.content).filter(t=>!i.content[t].isPending):[]}function m(t,e,o=!1){return(null==t?void 0:t.content)?Object.keys(t.content).filter(i=>t.content[i].type===e&&!!c(t.content[i])&&(o||!t.content[i].isPending)).map(e=>({layoutId:t.id,layoutItemId:e})):[]}function y(t,e){return Object.keys(t.widgets).find(o=>{const i=t.widgets[o];if(i.layouts)return Object.keys(i.layouts).some(t=>void 0!==Object.keys(i.layouts[t]).find(o=>i.layouts[t][o]===e))})}function v(t,e,o,n){const s=t.pages&&Object.keys(t.pages).find(i=>{const s=C(t.pages[i].layout,n,t.mainSizeMode);return h(t,s,o,n).includes(e)});if(s)return{type:i.ContainerType.Page,id:s};const a=t.dialogs&&Object.keys(t.dialogs).find(i=>{const s=C(t.dialogs[i].layout,n,t.mainSizeMode);return h(t,s,o,n).includes(e)});if(a)return{type:i.ContainerType.Dialog,id:a};if(t.header){const s=C(t.header.layout,n,t.mainSizeMode);if(h(t,s,o,n).includes(e))return{type:i.ContainerType.Header,id:"header"}}if(t.footer){const s=C(t.footer.layout,n,t.mainSizeMode);if(h(t,s,o,n).includes(e))return{type:i.ContainerType.Footer,id:"footer"}}const r=t.views&&Object.keys(t.views).find(i=>{const s=C(t.views[i].layout,n,t.mainSizeMode);return h(t,s,o,n).includes(e)});if(r)return{type:i.ContainerType.View,id:r};if(t.screens){const s=Object.keys(t.screens).find(i=>{const s=C(t.screens[i].main.layout,n,t.mainSizeMode);return h(t,s,o,n).includes(e)});if(s)return{type:i.ContainerType.ScreenMain,id:s};const a=Object.keys(t.screens).find(i=>{var s;const a=C(null===(s=t.screens[i].panel)||void 0===s?void 0:s.layout,n,t.mainSizeMode);return h(t,a,o,n).includes(e)});if(a)return{type:i.ContainerType.ScreenPanel,id:a}}}function b(t,e,o,n){const s=t.pages&&Object.keys(t.pages).find(i=>{const s=C(t.pages[i].layout,n,t.mainSizeMode);return p(t,s,o,n).includes(e)});if(s)return{type:i.RootContainerType.Page,id:s};const a=t.dialogs&&Object.keys(t.dialogs).find(i=>{const s=C(t.dialogs[i].layout,n,t.mainSizeMode);return p(t,s,o,n).includes(e)});if(a)return{type:i.RootContainerType.Dialog,id:a};if(t.header){const s=C(t.header.layout,n,t.mainSizeMode);if(p(t,s,o,n).includes(e))return{type:i.RootContainerType.Header,id:"header"}}if(t.footer){const s=C(t.footer.layout,n,t.mainSizeMode);if(p(t,s,o,n).includes(e))return{type:i.RootContainerType.Footer,id:"footer"}}}function I(t,e,o,i){return h(t,C(t.pages[e].layout,i,t.mainSizeMode),o,i)}function x(t,e,o,i){var n;const s=h(t,C(t.screens[e].main.layout,i,t.mainSizeMode),o,i);if(t.screens[e].panel){const a=h(t,C(null===(n=t.screens[e].panel)||void 0===n?void 0:n.layout,i,t.mainSizeMode),o,i);return s.concat(a)}return s}function w(t,e,o,i){var n;return h(t,C(null===(n=t.views[e])||void 0===n?void 0:n.layout,i,t.mainSizeMode),o,i)}function j(t,e,o){return h(t,C(t.header.layout,o,t.mainSizeMode),e,o)}function S(t,e,o){return h(t,C(t.footer.layout,o,t.mainSizeMode),e,o)}function C(t,e,o){return t?t[e]||t[o]:null}function O(t,e,o,n){if(n){const s=R(t,o,e,n);if(s)return k(t,o,e,s,n);{const s=v(t,o,e,n);if(!s)return[];const a=function(t,e,o){var n;return e.type===i.ContainerType.Footer?t.footer.layout[o]:e.type===i.ContainerType.Header?t.header.layout[o]:e.type===i.ContainerType.ScreenMain?t.screens[e.id].main.layout[o]:e.type===i.ContainerType.ScreenPanel?null===(n=t.screens[e.id].panel)||void 0===n?void 0:n.layout[o]:t[e.type][e.id].layout[o]}(t,s,n);return[{layoutId:a,layoutItemId:g(t.layouts[a],o,e).id}]}}{const i=[];return Object.keys(t.layouts).forEach(n=>{f(t,n,!0).forEach(s=>{const a=t.layouts[n].content[s];e!==a.type||a.widgetId!==o&&a.sectionId!==o&&a.screenGroupId!==o||i.push({layoutId:n,layoutItemId:s})})}),i}}function R(t,e,o,i){return Object.keys(t.widgets).find(n=>{const s=t.widgets[n];if(s.layouts)return Object.keys(s.layouts).some(n=>{const a=s.layouts[n][i],r=t.layouts[a];return r&&r.content&&void 0!==Object.keys(r.content).find(t=>r.content[t].type===o&&(r.content[t].widgetId===e||r.content[t].sectionId===e))})})}function M(t,e,o,i){const n=t.widgets[e];if(!n.layouts)return[];let s=[];return Object.keys(n.layouts).forEach(e=>{Object.keys(n.layouts[e]).forEach(a=>{const r=t.layouts[n.layouts[e][a]];s=s.concat(u(r,o,i))})}),Array.from(new Set(s))}function T(t,e,o,i){const n=[];let s=!1;const a=(t,e,o,a)=>{const r=C(o,i,void 0),l=g(t.layouts[r],e,a);let d;return l&&(d={layoutId:r,layoutItemId:l.id},n.push(d),s=!0),d};return t.pages&&Object.keys(t.pages).find(i=>{const n=t.pages[i];return!(!n.layout||!a(t,e,n.layout,o))}),s?n:(t.views&&Object.keys(t.views).find(i=>{const n=t.views[i];return!!a(t,e,n.layout,o)}),s?n:(t.dialogs&&Object.keys(t.dialogs).find(i=>{const n=t.dialogs[i];return!!a(t,e,n.layout,o)}),s?n:(t.header&&a(t,e,t.header.layout,o),s?n:(t.footer&&a(t,e,t.footer.layout,o),s||t.widgets&&Object.keys(t.widgets).find(i=>{const n=t.widgets[i];return n.layouts&&Object.keys(n.layouts).forEach(i=>{a(t,e,n.layouts[i],o)}),!!s}),n))))}function A(t,e,o){const i=t.widgets[o];if(!i)return;let n;return Object.keys(i.layouts).find(t=>{if(Object.keys(i.layouts[t]).find(o=>{if(i.layouts[t][o]===e)return n=o,!0}))return!0}),n}function P(t,e){var o,i;let n=null;const s=t=>t?Object.keys(t).find(o=>t[o]===e):null;return Object.keys(t.widgets||{}).some(e=>Object.keys(t.widgets[e].layouts||{}).some(o=>{if(n)return!0;n=s(t.widgets[e].layouts[o])})),n||(Object.keys(t.views||{}).some(e=>{if(n)return!0;n=s(t.views[e].layout)}),n||(Object.keys(t.pages||{}).some(e=>{if(n)return!0;n=s(t.pages[e].layout)}),n||(Object.keys(t.dialogs||{}).some(e=>{if(n)return!0;n=s(t.dialogs[e].layout)}),n||(Object.keys(t.screens||{}).some(e=>{var o,i;return!!n||(n=s(null===(o=t.screens[e].main)||void 0===o?void 0:o.layout),!!n||void(n=s(null===(i=t.screens[e].panel)||void 0===i?void 0:i.layout)))}),n||(n=s(null===(o=t.header)||void 0===o?void 0:o.layout),n||(n=s(null===(i=t.footer)||void 0===i?void 0:i.layout),n||null))))))}function L(t,e,o,n){if(!t.widgets[o])return[];const s=t.layouts[e.layoutId]&&t.layouts[e.layoutId].content&&t.layouts[e.layoutId].content[e.layoutItemId];if(!s)return[];const a=s.type;let r;return a===i.LayoutItemType.Section?r=s.sectionId:a===i.LayoutItemType.Widget&&(r=s.widgetId),r?k(t,r,a,o,n):function(t,e,o){const i=t.widgets[e];if(!i)return!1;let n=!1;return i.layouts&&Object.keys(i.layouts).forEach(e=>{n||Object.keys(i.layouts[e]).forEach(s=>{if(n)return;const a=i.layouts[e][s];f(t,a,!0).forEach(t=>{n||o.layoutId===a&&o.layoutItemId===t&&(n=!0)})})}),n}(t,o,e)?[e]:[]}function z(t,e,o,i){return L(t,e,o,i).map(e=>t.layouts[e.layoutId][e.layoutItemId])}function k(t,e,o,n,s){const a=t.widgets[n];if(!a||!e)return[];const r=[];return a.layouts&&Object.keys(a.layouts).forEach(n=>{const l=a.layouts[n][s],d=t.layouts[l];d&&d.content&&Object.keys(d.content).forEach(n=>{const a=d.content[n];if(a.type!==o||a.widgetId!==e&&a.sectionId!==e&&a.screenGroupId!==e){if(a.type===i.LayoutItemType.Widget){const n=t.widgets[a.widgetId];n&&n.manifest.widgetType===i.WidgetType.Layout&&r.push(...k(t,e,o,n.id,s))}}else r.push({layoutId:d.id,layoutItemId:a.id})})}),r}function N(t,e,o,n,s){const a=v(t,e,o,s);if(!a)return[];switch(a.type){case i.ContainerType.Page:return I(t,a.id,n,s);case i.ContainerType.Header:return j(t,n,s);case i.ContainerType.Footer:return S(t,n,s);case i.ContainerType.View:return w(t,a.id,n,s);case i.ContainerType.Dialog:return function(t,e,o,i){return h(t,C(t.dialogs[e].layout,i,t.mainSizeMode),o,i)}(t,a.id,n,s);case i.ContainerType.ScreenMain:case i.ContainerType.ScreenPanel:return x(t,a.id,n,s)}}function B(t,e,o){var n,s;const a=t.pages[e],r=null===(n=null==a?void 0:a.layout)||void 0===n?void 0:n[o],l=t.layouts[r],d=[];return(null==l?void 0:l.type)===i.LayoutType.FlowLayout&&Object.keys(null!==(s=l.content)&&void 0!==s?s:{}).sort().forEach(e=>{var o;const n=l.content[e];if(!n.isPending&&!(null===(o=n.setting)||void 0===o?void 0:o.isFloating)&&n.type===i.LayoutItemType.Widget){const o=function(t,e){const{layoutId:o,layoutItemId:i}=e,n=t.layouts[o].content[i],s=t.widgets[n.widgetId];if(s)return{label:s.label,id:`${o}_block_${i}`};return null}(t,{layoutId:r,layoutItemId:e});o&&d.push(o)}}),d}function $(t,e,o){var n,s;const a=t.pages[e],r=null===(n=null==a?void 0:a.layout)||void 0===n?void 0:n[o],l=t.layouts[r],d=[];return(null==l?void 0:l.type)===i.LayoutType.FlowLayout&&Object.keys(null!==(s=l.content)&&void 0!==s?s:{}).sort().forEach(e=>{var o;const n=l.content[e];if(!n.isPending&&!(null===(o=n.setting)||void 0===o?void 0:o.isFloating)&&n.type===i.LayoutItemType.ScreenGroup){const e=t.screenGroups[n.screenGroupId],o=[];null==e||e.screens.forEach(e=>{const i=function(t,e,o){const i=t.screens[o];if(i)return{label:i.label,id:`${e}_screen_${o}`};return null}(t,r,e);i&&o.push(i)}),d.push({id:e.id,label:e.label,screens:o})}}),d}},function(t,e){t.exports=s},function(t,e,o){"use strict";o.d(e,"a",(function(){return n})),o.d(e,"e",(function(){return s})),o.d(e,"b",(function(){return a})),o.d(e,"d",(function(){return r})),o.d(e,"c",(function(){return l}));var i=o(0);const n=i.React.createContext({viewOnly:!0}),s=i.React.createContext(!0),a=i.React.createContext(!0),r=i.React.createContext({isInView:!1,isInCurrentView:!1}),l=i.React.createContext("")},function(t,e,o){"use strict";o.d(e,"a",(function(){return i})),o.d(e,"b",(function(){return n}));const i=2,n=12},function(t,e){t.exports=a},function(t,e,o){"use strict";o.d(e,"b",(function(){return i})),o.d(e,"a",(function(){return s}));var i,n=o(0);!function(t){t.Horizontal="H",t.Vertical="V"}(i||(i={}));const s={showSplitter:!0,splitterSize:5,splitterColor:"#000"};n.React.createContext(s)},function(t,e,o){"use strict";o.d(e,"b",(function(){return i})),o.d(e,"a",(function(){return n}));const i=.33,n=75},function(t,e){t.exports=r},function(t,e,o){"use strict";o.d(e,"f",(function(){return a})),o.d(e,"e",(function(){return r})),o.d(e,"c",(function(){return l})),o.d(e,"a",(function(){return d})),o.d(e,"d",(function(){return c})),o.d(e,"b",(function(){return u}));var i=o(4),n=o(0),s=o(5);function a(t,e,o,n=!1){const s={};s.left=t.left+o.dx,s.width=t.width+o.dw;const a=e.right-t.right;0===o.dw?s.right=a-o.dx:0===o.dx?s.right=a-o.dw:s.right=a,s.top=t.top+o.dy,s.height=t.height+o.dh;const r=e.bottom-t.bottom;return 0===o.dh?s.bottom=r-o.dy:0===o.dy?s.bottom=r-o.dh:s.bottom=r,n&&Object(i.isRTL)()?l(s):s}function r(t,e){var o,n,a,r,l;const d={};let c=null!==(o=null==e?void 0:e.autoProps)&&void 0!==o?o:{},u=t;const p=Object(i.getLayoutItemSizeMode)("height",t,c),h=Object(i.getLayoutItemSizeMode)("width",t,c);if(p===s.f.Stretch)d.top=u.top,d.bottom=u.bottom;else{const o=null!==(n=c.top)&&void 0!==n&&n,i=null!==(a=c.bottom)&&void 0!==a&&a;p===s.f.Custom&&(d.height=u.height),o!==i&&!i||null==t.top?d.bottom=u.bottom:d.top=u.top,e.vCenter&&"50%"===u.top&&(d.top="50%")}if(h===s.f.Stretch)d.left=u.left,d.right=u.right;else{const t=null!==(r=c.left)&&void 0!==r&&r,o=null!==(l=c.right)&&void 0!==l&&l;h===s.f.Custom&&(d.width=u.width),t===o?null!=u.left?d.left=u.left:d.right=u.right:t&&null!=u.right?d.right=u.right:d.left=u.left,e.hCenter&&"50%"===u.left&&(d.left="50%")}return d}function l(t){const e=Object(n.Immutable)(t),o=t.left;return e.set("left",t.right).set("right",o)}function d(t,e,o=!1){const i={},n=e.hCenter&&"50%"===t.left,s=e.vCenter&&"50%"===t.top;return n&&s?(i.right="auto",i.bottom="auto",i.transform="translate(-50%, -50%)"):n?(i.right="auto",i.transform="translateX(-50%)"):s&&(i.bottom="auto",i.transform="translateY(-50%)"),!o&&c(e)&&(i.height="auto"),i}function c(t){return"ratio"===t.heightMode}function u(t,e,o,a){var r,l;let d=t,c=Object(n.Immutable)(null!=e?e:{});return(null===(r=null==e?void 0:e.autoProps)||void 0===r?void 0:r.width)!==s.f.Stretch&&(c=a.left<a.right?Object(i.isRTL)()?c.setIn(["autoProps","right"],!1).setIn(["autoProps","left"],!0):c.setIn(["autoProps","left"],!1).setIn(["autoProps","right"],!0):Object(i.isRTL)()?c.setIn(["autoProps","left"],!1).setIn(["autoProps","right"],!0):c.setIn(["autoProps","right"],!1).setIn(["autoProps","left"],!0)),(null===(l=null==e?void 0:e.autoProps)||void 0===l?void 0:l.height)!==s.f.Stretch&&(c=a.top<a.bottom?c.setIn(["autoProps","top"],!1).setIn(["autoProps","bottom"],!0):c.setIn(["autoProps","top"],!0).setIn(["autoProps","bottom"],!1)),["left","right","top","bottom","width","height"].forEach(e=>{const n="left"===e||"right"===e||"width"===e?o.width:o.height;let s=Object(i.isPercentage)(t[e]);Object(i.isRTL)()&&("left"===e?s=Object(i.isPercentage)(t.right):"right"===e&&(s=Object(i.isPercentage)(t.left))),d=null==t[e]||s?d.set(e,Object(i.toRatio)(a[e],n)):d.set(e,Math.round(a[e])+"px")}),{bbox:d,setting:c}}},function(t,e,o){"use strict";o.d(e,"b",(function(){return n})),o.d(e,"a",(function(){return s}));var i=o(2);const n={space:10,style:{padding:{number:[10],unit:i.UnitTypes.PIXEL}}},s={heightMode:"fixed",aspectRatio:1,offsetX:0,offsetY:0,style:{alignSelf:"flex-start"}}},function(t,e,o){"use strict";o.d(e,"b",(function(){return n})),o.d(e,"a",(function(){return s}));var i=o(2);const n={gutter:0,style:{padding:{number:[0],unit:"px"},justifyContent:"flex-start",alignItems:"stretch",borderRadius:{number:[0],unit:i.UnitTypes.PIXEL}}},s={lockParent:!0,heightMode:"auto",offsetX:0,offsetY:0}},function(t,e,o){"use strict";e.a={previousView:"Previous view",nextView:"Next view",originTL:"Top left as origin",originTR:"Top right as origin",originBL:"Bottom left as origin",originBR:"Bottom right as origin",alignLeft:"Align left",alignRight:"Align right",alignTop:"Align top",alignCenter:"Align center",alignHCenter:"Horizontal center",alignVCenter:"Vertical center",alignBottom:"Align bottom",alignStretch:"Align stretch",sendBackward:"Send backward",bringForward:"Bring forward",sendToBack:"Send to back",bringToFront:"Bring to front",zoomoutFixed:"Zoom out fixed",order:"Order",moveToLeft:"Move to left",moveToRight:"Move to right",moveToTop:"Move to top",moveToBottom:"Move to bottom",addView:"Add view",duplicateScreen:"Duplicate screen",deleteScreen:"Delete screen",applyToFirstPanel:"Apply to the first panel",deleteView:"Delete view",duplicateView:"Duplicate view",insertABlock:"Insert block",insertAScreenGroup:"Insert screen group",moveup:"Move up",movedown:"Move down",chooseTemplate:"Choose a {type} template",chooseHeaderTemplate:"Choose a header template",chooseFooterTemplate:"Choose a footer template",dropWidgetToAdd:"Or drag a widget here",snapToLeft:"Snap to left",snapToTop:"Snap to top",snapToBottom:"Snap to bottom",snapToRight:"Snap to right",fullWidth:"Full width",fullHeight:"Full height",fullSize:"Full size",restoreSize:"Restore size",pendingTip:"Move to the pending list",setting:"Settings",dragToMove:"Drag to move",lockLayout:"Lock position and size",unlockLayout:"Unlock position and size",editHeader:"Edit header",editFooter:"Edit footer",transform:"Transform",rotation:"Rotation",angle:"Angle",floating:"Pin",sinking:"Unpin",floatingArea:"Floating area",changeToAuto:"Change to auto",changeToCustom:"Change to custom",positionType:"Position type",sticky:"Sticky",fixed:"Fixed",flow:"Flow",stack:"Stack",fixedAtTop:"Floating at the top when scrolling",actNormal:"Act as normal widget",hideInDesignView:"Hide in design view",showInDesignView:"Show in design view"}},function(t,e,o){"use strict";o.d(e,"b",(function(){return s})),o.d(e,"a",(function(){return a})),o.d(e,"c",(function(){return r}));var i=o(0),n=o(5);function s(t,e){const o=t.layouts[e];if(null!=o)switch(o.parentType){case n.j.Widget:return t.widgets[o.parent].parent;case n.j.View:{const e=t.views[o.parent].parent;return t.sections[e].parent}case n.j.Screen:{const e=t.screens[o.parent].parent;return t.screenGroups[e].parent}}return null}function a(t,e,o,s,r,l){var d;let c=null!=l?l:Object(i.Immutable)({});const u=t.layouts[e];return null!=u&&(c=c.setIn(["layouts",e],{id:e,parent:o,parentType:s}),Object.keys(null!==(d=u.content)&&void 0!==d?d:{}).forEach(o=>{const s=u.content[o];switch(s.type){case i.LayoutItemType.Widget:c=function(t,e,o,i,s){let r=s;const l=t.widgets[o];null!=l&&(r=r.setIn(["widgets",o],{id:o,parent:i}),null!=l.layouts&&Object.keys(l.layouts).forEach(i=>{const s=l.layouts[i][e];r=a(t,s,o,n.j.Widget,e,r)}));return r}(t,r,s.widgetId,e,c);break;case i.LayoutItemType.Section:c=function(t,e,o,i,s){let r=s;const l=t.sections[o];null!=l&&(r=r.setIn(["sections",o],{id:o,parent:i}),l.views.forEach(i=>{r=r.setIn(["views",i],{id:i,parent:o});const s=t.views[i].layout[e];r=a(t,s,i,n.j.View,e,r)}));return r}(t,r,s.sectionId,e,c);break;case i.LayoutItemType.ScreenGroup:c=function(t,e,o,i,s){let r=s;const l=t.screenGroups[o];null!=l&&(r=r.setIn(["screenGroups",o],{id:o,parent:i}),l.screens.forEach(i=>{var s;r=r.setIn(["screens",i],{id:i,parent:o});const l=t.screens[i],d=l.main.layout[e];if(r=a(t,d,i,n.j.Screen,e,r),null!=(null===(s=l.panel)||void 0===s?void 0:s.layout)){const o=l.panel.layout[e];r=a(t,o,i,n.j.Screen,e,r)}}));return r}(t,r,s.screenGroupId,e,c)}})),c}function r(t,e,o,r){var l;const{layoutId:d}=t,c=a(e,o,"",n.j.Page,r),u=c.layouts[d];let p;if(u.parentType===n.j.Widget)p=u.parent;else if(u.parentType===n.j.View){const t=u.parent;p=c.views[t].parent}else if(u.parentType===n.j.Screen){const t=u.parent;p=c.screens[t].parent}const h=s(c,d);if(null!=h){const t=e.layouts[h];return{layoutId:h,layoutItemId:Object.keys(null!==(l=t.content)&&void 0!==l?l:{}).find(e=>{const o=t.content[e];return o.type===i.LayoutItemType.Widget&&o.widgetId===p||o.type===i.LayoutItemType.Section&&o.sectionId===p||o.type===i.LayoutItemType.ScreenGroup&&o.screenGroupId===p})}}return null}},function(t,e,o){"use strict";o.d(e,"b",(function(){return n})),o.d(e,"a",(function(){return s}));var i=o(0);const n=i.lodash.assign({},{gridSize:1}),s=i.lodash.assign({},{order:0},{lockParent:!1,lockLayout:!1,autoProps:{}})},function(t,e,o){"use strict";o.d(e,"c",(function(){return r})),o.d(e,"b",(function(){return l})),o.d(e,"a",(function(){return d}));var i=o(0),n=o(2),s=o(4),a=o(6);function r(t,e){var o,s,r,l;let d=!0,c=!1;const{layoutItem:u}=e,p=null===(o=t.appRuntimeInfo)||void 0===o?void 0:o.selection;if(p&&(c=p.layoutId===e.layoutId&&p.layoutItemId===u.id),u.type===i.LayoutItemType.Widget){const e=u.widgetId,o=t.appConfig.widgets[e];let i=[0,0,0,0];if(o){i=n.styleUtils.expandStyleArray(null===(l=null===(r=null===(s=o.config)||void 0===s?void 0:s.style)||void 0===r?void 0:r.padding)||void 0===l?void 0:l.number);const e=Object.keys(o.layouts)[0],c=Object(a.a)(o.layouts[e],t.browserSizeMode,t.appConfig.mainSizeMode),u=t.appConfig.layouts[c];u&&Object.keys(u.content||[]).length>0&&Object.keys(u.content||[]).some(t=>{if(!u.content[t].isPending)return d=!1,!0})}return{isEmpty:d,selected:c,padding:i[0]+i[2]}}return{selected:c,isEmpty:!1,padding:0}}function l(t){const e=parseFloat(null==t?void 0:t.width);return e>0?(""+t.width).includes("px")?Math.round(e)+"px":Math.round(e)+"%":"100%"}function d(t,e={}){var o,n,a;const r=t.setting,l=null!==(o=null==r?void 0:r.floatingArea)&&void 0!==o?o:1,d=(null!==(n=null==r?void 0:r.offsetX)&&void 0!==n?n:0)+"px",c=(null!==(a=null==r?void 0:r.offsetY)&&void 0!==a?a:0)+"px",{dh:u,dw:p,initWidth:h,initHeight:g,isResizing:f}=e,m=Object(s.isRTL)()?`translateX(calc(50% + ${d}))`:`translateX(calc(-50% + ${d}))`,y={};switch(l){case 1:y.left=d,y.top=c,y.transform=null;break;case 2:y.left="50%",y.top=c,y.transform=m;break;case 3:y.right=d,y.top=c,y.transform=null;break;case 4:y.left=d,y.top="50%",y.transform=`translateY(calc(-50% + ${c}))`;break;case 5:y.left="50%",y.top="50%",y.transform=`${m} translateY(calc(-50% + ${c}))`;break;case 6:y.right=d,y.top="50%",y.transform=`translateY(calc(-50% + ${c}))`;break;case 7:y.left=d,y.bottom=c,y.transform=null;break;case 8:y.left="50%",y.bottom=c,y.transform=m;break;case 9:y.right=d,y.bottom=c,y.transform=null}return i.css`
    position: fixed;
    z-index: 1;
    width: ${f?h+p+"px":Object(s.getValueOfBBox)(t.bbox,"width")};
    height: ${f?g+u+"px":Object(s.getValueOfBBox)(t.bbox,"height")};
    left: ${y.left};
    right: ${y.right};
    top: ${y.top};
    bottom: ${y.bottom};
    transform: ${y.transform};
  `}},function(t,e,o){"use strict";o.d(e,"a",(function(){return a})),o.d(e,"c",(function(){return r})),o.d(e,"b",(function(){return l}));var i=o(0),n=o(9),s=o(5);const a=i.css`
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
`;function r(t){return Object(i.Immutable)(t).set("left",n.b-parseInt(t.left,10)-parseInt(t.width,10))}function l(t,e,o){var i,n,a,r,l,d,c,u,p,h,g,f,m;return o?{height:e.height,alignSelf:null!==(n=null===(i=t.style)||void 0===i?void 0:i.alignSelf)&&void 0!==n?n:"flex-start"}:"ratio"===t.heightMode?{alignSelf:null!==(r=null===(a=t.style)||void 0===a?void 0:a.alignSelf)&&void 0!==r?r:"flex-start"}:(null===(l=t.autoProps)||void 0===l?void 0:l.height)===s.f.Auto?{height:"auto",alignSelf:null!==(c=null===(d=t.style)||void 0===d?void 0:d.alignSelf)&&void 0!==c?c:"flex-start"}:(null===(u=t.autoProps)||void 0===u?void 0:u.height)===s.f.Custom?{height:e.height,alignSelf:null!==(h=null===(p=t.style)||void 0===p?void 0:p.alignSelf)&&void 0!==h?h:"flex-start"}:(null===(g=t.autoProps)||void 0===g?void 0:g.height)===s.f.Stretch||"fit"===t.heightMode?{alignSelf:"stretch"}:parseFloat(e.height)>0?{height:e.height,alignSelf:null!==(m=null===(f=t.style)||void 0===f?void 0:f.alignSelf)&&void 0!==m?m:"flex-start"}:{alignSelf:"stretch"}}},function(t,e,o){"use strict";o.r(e),o.d(e,"findParentLayoutItem",(function(){return i.c})),o.d(e,"buildLayoutStructure",(function(){return i.a})),o.d(e,"findLayoutId",(function(){return n.a})),o.d(e,"findLayoutItem",(function(){return n.b})),o.d(e,"findSectionId",(function(){return n.e})),o.d(e,"findParentViewId",(function(){return n.d})),o.d(e,"findParentScreenId",(function(){return n.c})),o.d(e,"getContentIdInLayoutItem",(function(){return n.l})),o.d(e,"getContentsInLayout",(function(){return n.o})),o.d(e,"getContentsInLayoutRecursive",(function(){return n.p})),o.d(e,"getContainerLayoutItem",(function(){return n.j})),o.d(e,"getLayoutItemIds",(function(){return n.z})),o.d(e,"getLayoutInfosByType",(function(){return n.x})),o.d(e,"getWidgetIdThatUseTheLayoutId",(function(){return n.E})),o.d(e,"getContentContainerInfo",(function(){return n.k})),o.d(e,"getContentRootContainerInfo",(function(){return n.n})),o.d(e,"getRelatedLayoutItemsInWidgetByLayoutInfo",(function(){return n.C})),o.d(e,"getRelatedLayoutInfosInWidgetByLayoutInfo",(function(){return n.B})),o.d(e,"getLayoutInfosHoldcontent",(function(){return n.y})),o.d(e,"getBrowserSizeModeByLayoutIdAndWidgetId",(function(){return n.h})),o.d(e,"getBrowserSizeModeByLayoutId",(function(){return n.g})),o.d(e,"getChildrenContents",(function(){return n.i})),o.d(e,"getContentLayoutInfosInOneSizeMode",(function(){return n.m})),o.d(e,"getContentsInView",(function(){return n.w})),o.d(e,"getContentsInPageHeader",(function(){return n.t})),o.d(e,"getContentsInPageFooter",(function(){return n.s})),o.d(e,"getContentsInPageBody",(function(){return n.r})),o.d(e,"getContentsInScreen",(function(){return n.u})),o.d(e,"getContentsInLayoutWithLayoutWidgetOnly",(function(){return n.q})),o.d(e,"getContentsInTheSameContainer",(function(){return n.v})),o.d(e,"getParentWidgetIdOfContent",(function(){return n.A})),o.d(e,"getBlockAnchorPointsInPage",(function(){return n.f})),o.d(e,"getScreenAnchorPointsInPage",(function(){return n.D})),o.d(e,"getSectionInfo",(function(){return s})),o.d(e,"getPendingLayoutItemsInPage",(function(){return r})),o.d(e,"getPendingLayoutItemsInDialog",(function(){return d})),o.d(e,"getPendingLayoutItemsInLayoutWithDeep",(function(){return u})),o.d(e,"getPendingLayoutItemsFromOtherSizeMode",(function(){return p})),o.d(e,"getPendingLayoutItemsFromOtherSizeModeInPage",(function(){return l})),o.d(e,"getPendingLayoutItemsFromOtherSizeModeInDialog",(function(){return c}));var i=o(18),n=o(6);function s(t,e){var o;const i=t.appConfig.sections[e];if(!i||!i.views)return null;const n=null===(o=t.appRuntimeInfo.sectionNavInfos)||void 0===o?void 0:o[i.id];let s;if(!n){const e=i.views[0];s=t.appConfig.views[e]}return{sectionId:e,navInfo:n,activeView:s,views:i.views,sectionStyle:i.style,transition:i.transition,autoPlay:i.autoPlay,interval:i.interval,loop:i.loop}}var a=o(0);function r(t,e,o,i){const n=t.pages[e];return n?i===a.PagePart.Header?n.header&&t.header?u(t,t.header.layout[o],o):[]:i===a.PagePart.Footer?n.footer&&t.footer?u(t,t.footer.layout[o],o):[]:i===a.PagePart.Body?u(t,n.layout[o],o):[]:[]}function l(t,e,o,i){const n=t.pages[e];return n?i===a.PagePart.Header?n.header&&t.header?p(t,t.header.layout,o):[]:i===a.PagePart.Footer?n.footer&&t.footer?p(t,t.footer.layout,o):[]:i===a.PagePart.Body?p(t,n.layout,o):[]:[]}function d(t,e,o){const i=t.dialogs[e];return i?u(t,i.layout[o],o):[]}function c(t,e,o){const i=t.dialogs[e];return i?p(t,i.layout,o):[]}function u(t,e,o){let i=[];Object(n.x)(t.layouts[e],a.LayoutItemType.Widget,!0).forEach(e=>{const n=t.layouts[e.layoutId].content[e.layoutItemId];n.isPending?i.push(e):t.widgets[n.widgetId].layouts&&Object.keys(t.widgets[n.widgetId].layouts).forEach(e=>{i=i.concat(u(t,t.widgets[n.widgetId].layouts[e][o],o))})});Object(n.x)(t.layouts[e],a.LayoutItemType.Section,!0).forEach(e=>{const n=t.layouts[e.layoutId].content[e.layoutItemId];n.isPending?i.push(e):t.sections[n.sectionId].views&&t.sections[n.sectionId].views.forEach(e=>{i=i.concat(u(t,t.views[e].layout[o],o))})});return Object(n.x)(t.layouts[e],a.LayoutItemType.ScreenGroup,!0).forEach(e=>{var n,s;const a=t.layouts[e.layoutId].content[e.layoutItemId].screenGroupId;null===(s=null===(n=t.screenGroups)||void 0===n?void 0:n[a].screens)||void 0===s||s.forEach(e=>{const n=null==t?void 0:t.screens[e];n.main&&(i=i.concat(u(t,n.main.layout[o],o))),n.panel&&(i=i.concat(u(t,n.panel.layout[o],o)))})}),i}function p(t,e,o,i=null,s=null){const r=[];i||(i=Object(n.p)(t,e[o],a.LayoutItemType.Widget,o,!0)),s||(s=Object(n.p)(t,e[o],a.LayoutItemType.Section,o,!0));return Object.keys(a.BrowserSizeMode).filter(t=>a.BrowserSizeMode[t]!==o).map(t=>a.BrowserSizeMode[t]).forEach(l=>{Object(n.x)(t.layouts[e[l]],a.LayoutItemType.Widget,!0).forEach(e=>{const n=t.layouts[e.layoutId].content[e.layoutItemId];t.widgets[n.widgetId].manifest.widgetType!==a.WidgetType.Layout&&i.indexOf(n.widgetId)<0?!h(t,r,e)&&r.push(e):t.widgets[n.widgetId].layouts&&Object.keys(t.widgets[n.widgetId].layouts).forEach(e=>{p(t,t.widgets[n.widgetId].layouts[e],o,i,s).forEach(e=>{!h(t,r,e)&&r.push(e)})})});Object(n.x)(t.layouts[e[l]],a.LayoutItemType.Section,!0).forEach(e=>{const n=t.layouts[e.layoutId].content[e.layoutItemId];s.indexOf(n.sectionId)<0?!h(t,r,e)&&r.push(e):t.sections[n.sectionId].views&&t.sections[n.sectionId].views.forEach(e=>{p(t,t.views[e].layout,o,i,s).forEach(e=>{!h(t,r,e)&&r.push(e)})})});Object(n.x)(t.layouts[e[l]],a.LayoutItemType.ScreenGroup,!0).forEach(e=>{var n,a;const l=t.layouts[e.layoutId].content[e.layoutItemId];(null===(a=null===(n=t.screenGroups)||void 0===n?void 0:n[l.screenGroupId])||void 0===a?void 0:a.screens)&&t.screenGroups[l.screenGroupId].screens.forEach(e=>{var n;const a=null===(n=t.screens)||void 0===n?void 0:n[e];(null==a?void 0:a.main)&&p(t,a.main.layout,o,i,s).forEach(e=>{!h(t,r,e)&&r.push(e)}),(null==a?void 0:a.panel)&&p(t,a.panel.layout,o,i,s).forEach(e=>{!h(t,r,e)&&r.push(e)})})})}),r}function h(t,e,o){const i=t.layouts[o.layoutId].content[o.layoutItemId];return!!e.find(e=>{const o=t.layouts[e.layoutId].content[e.layoutItemId];return o.type===i.type&&(o.type===a.LayoutItemType.Widget&&o.widgetId===i.widgetId||o.type===a.LayoutItemType.Section&&o.sectionId===i.sectionId)})}},function(t,e,o){"use strict";o.d(e,"b",(function(){return r})),o.d(e,"a",(function(){return l}));var i=o(0),n=o(2),s=o(24),a=o(12);function r(t,e,o,s,r,l,d,c,u){const{side:p,size:h,offset:g,background:f,overlay:m=!0,padding:y}=t.panel||{},v=Object(i.getAppStore)().getState().appContext.isRTL?"left"===p?"-":"":"right"===p?"-":"",b=n.styleUtils.toBackgroundEmotionStyle(null!=f?f:{}),I=parseFloat(r);if(u){const t=!m;return i.css`
      width: 100%;
      background: transparent;
      pointer-events: none;
      position: relative;
      opacity: ${d===i.ScreenTransitionType.Fade?s?"1":"0.5":null};
      min-height: ${c===i.ScreenTransitionType.Cover?e+"px":null};
      padding-top: ${c!==i.ScreenTransitionType.Fade&&t?Math.round(e*a.b)+"px":null};

      &.top-spacing > .panel-content {
        /* margin-top: ${Math.round(e*a.b)}px; */
      }

      .panel-content {
        width: 100%;
        ${m?"":b};
        /* margin-top: ${d===i.ScreenTransitionType.Push?"${Math.round(viewHeight * SCREEN_RATIO_IN_SMALL_SIZE)}px":"unset"}; */

        > .layout, > .layout-wrapper > .layout {
          pointer-events: all;
          ${m?b:""};
          min-height: ${Math.round(.25*e)}px;
          padding: ${n.styleUtils.toCSSPadding(y)};
        }

        > .layout-wrapper > .column-layout > .trail-container,
        > .column-layout > .trail-container {
          overflow-y: hidden;
        }

        > .layout-wrapper > .placeholder-btn {
          pointer-events: all;
          ${m?b:""};
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
        min-height: ${c===i.ScreenTransitionType.Cover?"100vh":null};
        min-height: ${c===i.ScreenTransitionType.Cover?"calc(var(--vh) * 100)":null};
        padding-top: ${c!==i.ScreenTransitionType.Fade&&t?100*a.b+"vh":null};
        padding-top: ${c!==i.ScreenTransitionType.Fade&&t?`calc(var(--vh) * ${100*a.b})`:null};

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
    `}return i.css`
    width: 100%;
    background: transparent;
    pointer-events: none;
    display: flex;
    flex-direction: ${"right"===p?"row-reverse":"row"};
    justify-content: ${"center"===p&&m?"center":"flex-start"};
    position: relative;
    opacity: ${d===i.ScreenTransitionType.Fade?s?"1":"0.5":null};

    &.top-spacing > .panel-content {
      /* margin-top: ${Math.round(2*e/3)}px; */
    }

    .panel-content {
      width: ${h};
      transform: ${m&&Math.abs(parseFloat(g))>0?`translateX(${v}${g})`:null};
      flex: 0 auto;
      min-height: ${l?e+"px":"unset"};
      ${m?"":b};

      > .layout,
      > .layout-wrapper > .layout {
        pointer-events: all;
        ${m?b:""};
        min-height: ${Math.round(.25*e)}px;
        padding: ${n.styleUtils.toCSSPadding(y)};
      }

      > .layout-wrapper > .column-layout > .trail-container,
      > .column-layout > .trail-container {
        overflow-y: hidden;
      }

      > .layout-wrapper > .placeholder-btn {
        pointer-events: all;
        ${m?b:""};
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
        min-height: ${l?o>0?`calc(100vh - ${o}px)`:"100vh":"unset"};
        min-height: ${l?o>0?`calc(var(--vh) * 100 - ${o}px)`:"calc(var(--vh) * 100)":"unset"};
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
  `}function l(t){var e;const{index:o,screenId:n,onInterctionChange:a,onHeightChange:l,viewHeight:d,headerHeight:c,layoutEntry:u,isActive:p,isSmallSize:h,transitionType:g,screenTransitionType:f,triggerType:m,stretched:y,verticalSpace:v="0"}=t,b=i.ReactRedux.useSelector(t=>t.appConfig.screens[n]),{panel:I}=b,x=i.React.useRef(),[w,j]=i.React.useState(!1),S=i.React.useRef(),C=i.React.useCallback(t=>{a(o,t)},[o,a]);i.React.useEffect(()=>(S.current=i.lodash.debounce(l,200),()=>{var t;null===(t=S.current)||void 0===t||t.cancel()}),[l]);const O=i.React.useCallback((t,e)=>{var i;null===(i=S.current)||void 0===i||i.call(S,o,e)},[o]);return Object(s.a)(x.current,t.refElement,h?i.ScreenTriggerType.Lower:null!=m?m:i.ScreenTriggerType.Bottom,C),i.React.useEffect(()=>{j(!0)},[]),Object(i.jsx)("div",{className:Object(i.classNames)("screen-side-panel",{"top-spacing":0===o&&((null===(e=b.panel)||void 0===e?void 0:e.overlay)||h)}),"data-screenid":n,"data-index":o,ref:x,css:r(b,d,c,p,v,y,g,f,h)},I&&Object(i.jsx)("div",{className:"panel-content"},Object(i.jsx)(u,{layouts:I.layout}),Object(i.jsx)("div",{className:Object(i.classNames)("panel-spacing",{"last-item":t.isLast})})),!I&&Object(i.jsx)("div",{className:"panel-content-placeholder"}),Object(i.jsx)(i.ReactResizeDetector,{handleHeight:!0,onResize:O}))}},function(t,e,o){"use strict";o.d(e,"a",(function(){return a}));var i=o(0);function n(){const t=[0];for(let e=1;e<=100;e++)t.push(e/100);return t}function s(t){switch(t){case i.ScreenTriggerType.Top:return"0% 0% -98% 0%";case i.ScreenTriggerType.Bottom:return"-98% 0% -2px 0%";case i.ScreenTriggerType.Upper:return`-${100/3-1}% 0% -${200/3-1}% 0%`;case i.ScreenTriggerType.Lower:return`-${200/3-1}% 0% -${100/3-1}% 0%`;default:return}}function a(t,e,o,a){const r=i.React.useRef(),l=i.React.useRef();i.React.useEffect(()=>{r.current&&(r.current.unobserve(t),r.current=null);if(t&&"function"==typeof IntersectionObserver){const i=new IntersectionObserver(t=>{(t=>{const e=t.boundingClientRect,o=t.rootBounds,i=Math.abs(e.bottom-o.top)>=Math.abs(e.top-o.top);if(t.isIntersecting){if(l.current=!0,i)a(!0)}else if(l.current&&(l.current=!1,i))a(!1)})(t[0])},{threshold:n(),root:e||document.body,rootMargin:s(o)});return i.observe(t),r.current=i,()=>{r.current.unobserve(t),r.current=null}}},[t,e,a,o])}},function(t,e,o){"use strict";o.d(e,"b",(function(){return i.a})),o.d(e,"a",(function(){return p}));var i=o(23),n=o(0),s=o(2),a=o(8),r=o(12);const l=o(42);function d(t){const{rootLayoutId:e,viewHeight:o,headerHeight:i,screenId:d,isActive:c,isAbsolute:u,isLast:p,isSmallSize:h,layoutEntry:g,isDesignMode:f,formatMessage:m,builderTheme:y}=t,v=n.ReactRedux.useSelector(t=>t.appConfig.screens[d]),b=n.ReactRedux.useSelector(t=>{var e,o,i;return null===(i=null===(o=null===(e=t.appRuntimeInfo)||void 0===e?void 0:e.screenPanelStates)||void 0===o?void 0:o[d])||void 0===i||i}),{main:I}=v,{side:x,size:w,overlay:j=!0}=v.panel||{},S=n.React.useRef(),C=n.React.useCallback(()=>{Object(n.getAppStore)().dispatch(n.appActions.screenPanelVisibleChanged(d,!0))},[d]);const O=Object(n.classNames)("screen-main-panel",{"is-active":c,"last-one":p});return Object(n.jsx)(a.b.Provider,{value:!u||c},Object(n.jsx)("div",{id:`${e}_screen_${d}`,className:O,css:function(){var t,e,a,l;if(h){const a=!j&&null!=v.panel,l=a?Math.round(o*r.b)+"px":o+"px",d=a?""+Math.round(100*r.b):"100";return n.css`
        pointer-events: all;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: ${o}px;

        > .layout {
          ${s.styleUtils.toBackgroundEmotionStyle(null!==(e=null===(t=v.main)||void 0===t?void 0:t.background)&&void 0!==e?e:{})};
          height: ${l} !important;
          border: none !important;
        }

        body:not(.design-mode) & {
          height: ${i>0?`calc(100vh - ${i}px)`:"100vh"};
          height: ${i>0?`calc(var(--vh) * 100 - ${i}px)`:"calc(var(--vh) * 100)"};
          > .layout {
            height: ${d}vh !important;
            height: calc(var(--vh) * ${d}) !important;
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
      `}let d="0px",c="0px";"none"!==x&&(j||"right"===x||(d=w),j||"right"!==x||(c=w));const p=y?n.css`
      color: ${y.colors.palette.dark[900]};
      background-color: ${y.colors.palette.light[400]};
      border-color: ${y.colors.palette.light[600]};
      &:hover {
        color: ${y.colors.black};
        background-color: ${y.colors.palette.light[600]};
      }
    `:null;return n.css`
      ${s.styleUtils.toBackgroundEmotionStyle(null!==(l=null===(a=v.main)||void 0===a?void 0:a.background)&&void 0!==l?l:{})};
      left: ${u?d:null};
      right: ${u?c:null};
      margin-left: ${u?null:d};
      margin-right: ${u?null:c};
      pointer-events: all;
      display: flex;
      flex-direction: column;
      position: relative;

      > .layout {
        height: ${o}px !important;
        background: transparent;
        border: none !important;
      }

      body:not(.design-mode) & {
        > .layout {
          height: ${i>0?`calc(100vh - ${i}px)`:"100vh"} !important;
          height: ${i>0?`calc(var(--vh) * 100 - ${i}px)`:"calc(var(--vh) * 100)"} !important;
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
    `}(),ref:S,"data-screenid":d,"data-index":t.index},Object(n.jsx)(g,{layouts:I.layout,isInWidget:!0}),Object(n.jsx)("div",{className:"spacing-area"}),f&&!b&&Object(n.jsx)("div",{className:"toggle-visible-btn",onClick:C,"data-testid":"toggleBtn"},Object(n.jsx)(s.Tooltip,{placement:"auto",title:m("showInDesignView")},Object(n.jsx)(s.Button,{type:"default",size:"sm",className:"rounded"},Object(n.jsx)(s.Icon,{icon:l,size:16}))))))}function c(t,e,o,i,s){return t===n.ScreenTransitionType.Fade?n.css`
      position: sticky;
      height: ${e}px;
      top: 0;

      body:not(.design-mode) & {
        height: ${o>0?`calc(100vh - ${o}px)`:"100vh"};
        height: ${o>0?`calc(var(--vh) * 100 - ${o}px)`:"calc(var(--vh) * 100)"};
        top: ${o>0?o+"px":0};
        .layout .exb-drop-area {
          pointer-events: none !important;
        }
      }

      .screen-main-panel {
        position: absolute;
        opacity: 0;
        visibility: hidden;
        z-index: 0;
        transition: ${i?null:"opacity 400ms"};
        top: 0;
        /* height: ${i?"unset":"100% !important"}; */

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
    `:t===n.ScreenTransitionType.Cover?n.css`
      position: sticky;
      height: ${e}px;
      overflow: hidden;
      top: 0;

      body:not(.design-mode) & {
        height: 100%;
        overflow: unset;
        position: relative;

        .screen-main-panel {
          top: ${o>0?o+"px":0};
        }
      }

      & > div:first-of-type {
        margin-top: 0 !important;
      }

      .screen-main-panel {
        position: sticky;
        top: 0;
        margin-top: ${1===s?"0 !important":null};

        .spacing-area {
          display: none;
        }
      }
    `:t===n.ScreenTransitionType.Push?n.css`
      position: sticky;
      height: ${e}px;
      overflow: hidden;
      top: 0;

      body:not(.design-mode) & {
        height: auto;
        overflow: unset;

        .screen-main-panel > .layout {
          top: ${o>0?o+"px":0};
        }
      }

      .screen-main-panel > .layout {
        position: sticky !important;
        top: 0;
      }
    `:void 0}function u(t,e,o){return t===n.ScreenTransitionType.Fade?n.css`
      height: calc(100% - ${e}px);
      background: transparent;
      pointer-events: none;

      body:not(.design-mode) & {
        height: calc(100% - 100vh);
        height: calc(100% - var(--vh) * 100);
      }
    `:t===n.ScreenTransitionType.Cover||t===n.ScreenTransitionType.Push?n.css`
      height: calc(100% - ${e}px);
      background: transparent;
      pointer-events: none;
      display: block;

      body:not(.design-mode) & {
        height: calc(100% - 100vh);
        height: calc(100% - var(--vh) * 100);
        display: none;
      }
    `:void 0}function p(t){const{rootLayoutId:e,activeIndex:o,viewHeight:i,headerHeight:s,screens:a,transitionType:r,isSmallSize:l,layoutEntry:p,isDesignMode:h,formatMessage:g,builderTheme:f}=t;return Object(n.jsx)(n.React.Fragment,null,Object(n.jsx)("div",{className:"screen-container",css:c(r,i,s,l,a.length)},a.map((t,c)=>Object(n.jsx)(d,{key:t,rootLayoutId:e,index:c,isActive:o===c,screenId:t,viewHeight:i,headerHeight:s,isAbsolute:r===n.ScreenTransitionType.Fade,isLast:c===a.length-1,isSmallSize:l,layoutEntry:p,isDesignMode:h,formatMessage:g,builderTheme:f}))),Object(n.jsx)("div",{className:"screen-placeholder",css:u(r,i)}))}},function(t,e,o){"use strict";o.d(e,"a",(function(){return s}));var i=o(0);function n(){const t=[0];for(let e=1;e<=10;e++)t.push(e/10);return t}function s(t,e){const o=i.React.useRef(),[s,a]=i.React.useState(!0);return i.React.useEffect(()=>{if(o.current&&(o.current.unobserve(t),o.current=null),!e)return;if(t&&"function"==typeof IntersectionObserver){const e=new IntersectionObserver(t=>{var e;(e=t[0]).target.classList.contains("playing-animation")||e.boundingClientRect.width>0&&e.boundingClientRect.height>0&&a(e.isIntersecting)},{threshold:n(),root:document.body,rootMargin:"20%"});return e.observe(t),o.current=e,()=>{o.current.unobserve(t),o.current=null}}},[t,e]),s}},function(t,e,o){"use strict";o.d(e,"a",(function(){return i}));const i={min:16,space:10}},function(t,e,o){"use strict";o.d(e,"a",(function(){return n}));var i=o(0);class n{constructor(){this.id="flow-layout-transformer",this.layoutType=i.LayoutType.FlowLayout}transformLayout(t,e,o){if(e!==o&&o===i.BrowserSizeMode.Small){let e=Object(i.Immutable)(t);return(t.order||[]).forEach(t=>{e=e.setIn(["content",t,"setting","heightMode"],"auto")}),e}return t}transformLayoutItem(t,e,o,i,n,s){return{index:e,item:t}}}},function(t,e,o){"use strict";o.d(e,"a",(function(){return l}));var i=o(0),n=o(22),s=o(4),a=o(9);function r(t,e,o){var i;const a=n.getWidgetIdThatUseTheLayoutId(t,o),r=function(t,e,o){var i,n,a,r,l,d,c;const u=t.widgets[o];if(null!=u){const p=s.getCurrentSizeMode(),h=t.mainSizeMode,g=u.layouts.DEFAULT[p],f=u.layouts.DEFAULT[h],m=null!==(l=null===(r=null===(a=null===(n=(null!==(i=t.layouts[g])&&void 0!==i?i:t.layouts[f]).setting)||void 0===n?void 0:n.style)||void 0===a?void 0:a.padding)||void 0===r?void 0:r.number)&&void 0!==l?l:[0],y=s.expandStyleArray(m),v=null!==(c=null===(d=null==e?void 0:e[o])||void 0===d?void 0:d.height)&&void 0!==c?c:0;let b=y[0],I=y[2];return s.isPercentage(b)&&(b=s.fromRatio(b,v)),s.isPercentage(I)&&(I=s.fromRatio(I,v)),v-b-I}return 0}(t,e,a);if(r>0){const e=null!==(i=t.layouts[o].order)&&void 0!==i?i:[],n={};return e.forEach(e=>{const i=t.layouts[o].content[e];n[e]=s.calHeightOfLayoutItem(r,i)}),n}return null}class l{constructor(){this.id="row-layout-transformer",this.layoutType=i.LayoutType.RowLayout}transformLayout(t,e,o){var n,s;if(e===o)return t;let l=Object(i.Immutable)(t);if(o===i.BrowserSizeMode.Small){const e=r(function(){const t=Object(i.getAppStore)().getState();return window.jimuConfig.isBuilder?null==t?void 0:t.appStateInBuilder:t}().appConfig,null===(n=window.runtimeInfo)||void 0===n?void 0:n.widgets,t.id);let o=0;Object.keys(null!==(s=t.content)&&void 0!==s?s:{}).sort((e,o)=>parseInt(t.content[e].bbox.left,10)-parseInt(t.content[o].bbox.left,10)).forEach(n=>{var s,r,d;const c=t.content[n];if(!c.isPending){if(l=l.setIn(["content",n,"bbox"],{left:o*a.b,width:a.b,height:null!==(r=null===(s=c.bbox)||void 0===s?void 0:s.height)&&void 0!==r?r:"auto"}),null!=e){const t=null!==(d=c.setting)&&void 0!==d?d:Object(i.Immutable)({});l=l.setIn(["content",n,"bbox","height"],e[n].height).setIn(["content",n,"setting"],t.merge(e[n].setting))}o+=1}})}return l}transformLayoutItem(t,e,o,i,n,s){return{item:t,index:e}}}},function(t,e,o){"use strict";o.d(e,"a",(function(){return n}));var i=o(0);function n(t,e,o){const n=t.querySelectorAll("div.screen-main-panel"),s=e.querySelectorAll("div.screen-side-panel"),a=n.length;for(let t=1;t<a;t++){const e=n.item(t),o=n.item(t-1),i=s.item(t-1);e.style.marginTop=i.clientHeight-o.clientHeight+"px"}o!==i.BrowserSizeMode.Small&&(t.style.height=e.clientHeight+"px")}},function(t,e,o){"use strict";o.d(e,"a",(function(){return f}));var i=o(0),n=o(5),s=o(2);function a(t,e){if(!t)return null;let o={};t.backgroundIMage&&(o="string"==typeof t.backgroundIMage?{}:t.backgroundIMage);const i=t.backgroundPosition?s.FillType[t.backgroundPosition.toUpperCase()]:s.FillType.FILL;let n;n=null==t.backgroundColor?e:""===t.backgroundColor?"transparent":t.backgroundColor?t.backgroundColor:"";const a={color:n,fillType:i,image:o};return s.styleUtils.toBackgroundStyle(a)}function r(t){const{viewId:e,isActive:o,layoutEntryComponent:n,viewVisibilityContext:s}=t,r=i.ReactRedux.useSelector(t=>{var o,i;return null===(i=null===(o=t.appConfig)||void 0===o?void 0:o.views)||void 0===i?void 0:i[e]}),l=i.ReactRedux.useSelector(t=>{var e,o;return null===(o=null===(e=t.theme)||void 0===e?void 0:e.body)||void 0===o?void 0:o.bg}),d=n,c=s,u=i.React.useMemo(()=>({isInView:!0,isInCurrentView:o}),[o]);return Object(i.jsx)("div",{className:"w-100 h-100 d-flex section-view",style:a(r,l),key:e},Object(i.jsx)(i.ErrorBoundary,null,Object(i.jsx)(c.Provider,{value:u},Object(i.jsx)(d,{layouts:null==r?void 0:r.layout,isInSection:!0,className:"w-100"}))))}function l(t){var e,o;const{views:n,navInfo:s,animationPreview:a,playMode:l,currentIndex:d,previousIndex:c,progress:u,loop:p,viewTransition:h}=t,g=a&&l===i.AnimationPlayMode.OneByOne,{setting:f,playId:m,onAnimationEnd:y,depth:v}=i.React.useContext(i.AnimationContext),b=i.ReactRedux.useSelector(t=>{var e;return!f||f.type===i.AnimationType.None||(null===(e=t.appRuntimeInfo)||void 0===e?void 0:e.appMode)===i.AppMode.Design}),I=!b||g||(null==s?void 0:s.playId)&&(null==s?void 0:s.withOneByOne)?f:null,x=i.React.useMemo(()=>({trigger:i.AnimationTriggerType.Manual,setting:I,playId:!b||g?m:null,inheritedOneByOneSetting:null,depth:v+1,onAnimationEnd:y}),[b,I,g,m,v,y]);return Object(i.jsx)(i.AnimationContext.Provider,{value:x},Object(i.jsx)("div",{className:"section-content"},Object(i.jsx)(i.TransitionContainer,{useProgress:null!==(e=null==s?void 0:s.useProgress)&&void 0!==e&&e,useStep:null!==(o=null==s?void 0:s.useStep)&&void 0!==o&&o,previousIndex:c,currentIndex:d,progress:u,transitionType:null==h?void 0:h.type,direction:null==h?void 0:h.direction,playId:null==s?void 0:s.playId,withOneByOne:null==s?void 0:s.withOneByOne,loop:p},n.map(e=>{const o=e===n[d];return Object(i.jsx)(r,{key:e,viewId:e,isActive:o,layoutEntryComponent:t.layoutEntryComponent,viewVisibilityContext:t.viewVisibilityContext})}))))}const d=o(38),c=o(39);function u(t){var e,o,n;const{sectionId:a,currentIndex:r,numOfViews:l,onCurrentViewChange:u}=t,p=i.ReactRedux.useSelector(t=>{var e;return null===(e=t.appConfig.sections[a])||void 0===e?void 0:e.arrowsNav}),h=i.ReactRedux.useSelector(t=>{var e;return null===(e=t.appConfig.sections[a])||void 0===e?void 0:e.dotsNav}),g=null!==(e=null==h?void 0:h.position)&&void 0!==e?e:"b",f=i.React.useMemo(()=>{const t=[];for(let e=0;e<l;e++)t.push(e);return t},[l]),m=()=>{var t,e,o,n;return i.css`
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
        right: ${null!==(o=p.offset)&&void 0!==o?o:0}px;
        top: 50%;
        transform: translateY(-50%);

        &.vertical {
          bottom: ${null!==(n=p.offset)&&void 0!==n?n:0}px;
          left: 50%;
          top: auto;
          right: auto;
          transform: translateX(-50%) rotate(90deg);
        }
      }
    `},y=i.React.useCallback((t,e)=>Object(i.jsx)("div",{key:t,className:Object(i.classNames)("dot rounded-circle",{active:e,disabled:l<=1}),onClick:e?void 0:()=>u(t)}),[u,l]),v=i.React.useCallback(()=>{u(r>0?r-1:l-1)},[r,l,u]),b=i.React.useCallback(()=>{u(r<l-1?r+1:0)},[r,l,u]),I=l>1&&0!==r,x=l>1&&r!==l-1;return Object(i.jsx)(i.React.Fragment,null,(null==p?void 0:p.visible)&&Object(i.jsx)(i.React.Fragment,null,Object(i.jsx)("div",{className:Object(i.classNames)("arrows-nav first",{vertical:"v"===p.direction,disabled:!I}),css:m(),onClick:I?v:null},Object(i.jsx)(s.Icon,{icon:d,autoFlip:"v"!==p.direction,size:null!==(o=p.size)&&void 0!==o?o:12})),Object(i.jsx)("div",{className:Object(i.classNames)("arrows-nav second",{vertical:"v"===p.direction,disabled:!x}),css:m(),onClick:x?b:null},Object(i.jsx)(s.Icon,{icon:c,autoFlip:"v"!==p.direction,size:null!==(n=p.size)&&void 0!==n?n:12}))),(null==h?void 0:h.visible)&&Object(i.jsx)("div",{className:Object(i.classNames)("dots-nav",{"snap-left":"l"===g,"snap-top":"t"===g,"snap-right":"r"===g,"snap-bottom":"b"===g}),css:(()=>{var t,e,o,n,s,a,r,l,d,c,u,p,f,m;return i.css`
      position: absolute;
      display: flex;
      flex-direction: ${"l"===g||"r"===g?"column":"row"};
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
        width: ${null!==(t=h.size)&&void 0!==t?t:8}px;
        height: ${null!==(e=h.size)&&void 0!==e?e:8}px;

        &.active {
          border-color: var(--white);
          background: var(--primary-500);
          width: ${h.size>0?1.5*h.size:12}px;
          height: ${h.size>0?1.5*h.size:12}px;
        }

        &.disabled {
          cursor: default;
        }
      }

      &.snap-left {
        height: 100%;
        top: 0;
        left: ${null!==(o=h.offset)&&void 0!==o?o:50}px;
        width: ${null!==(n=h.size)&&void 0!==n?n:8}px;

        > div:not(:first-child) /* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */ {
          margin-top: ${null!==(s=h.spacing)&&void 0!==s?s:10}px;
        }
      }
      &.snap-right {
        height: 100%;
        top: 0;
        right: ${null!==(a=h.offset)&&void 0!==a?a:50}px;
        width: ${null!==(r=h.size)&&void 0!==r?r:8}px;

        > div:not(:first-child) /* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */ {
          margin-top: ${null!==(l=h.spacing)&&void 0!==l?l:10}px;
        }
      }
      &.snap-top {
        width: 100%;
        top: ${null!==(d=h.offset)&&void 0!==d?d:50}px;
        height: ${null!==(c=h.size)&&void 0!==c?c:8}px;

        > div:not(:first-child) /* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */ {
          margin-left: ${null!==(u=h.spacing)&&void 0!==u?u:10}px;
        }
      }
      &.snap-bottom {
        width: 100%;
        bottom: ${null!==(p=h.offset)&&void 0!==p?p:50}px;
        height: ${null!==(f=h.size)&&void 0!==f?f:8}px;

        > div:not(:first-child) /* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */ {
          margin-left: ${null!==(m=h.spacing)&&void 0!==m?m:10}px;
        }
      }
    `})()},f.map(t=>y(t,t===r))))}function p(t){const{sectionId:e,autoPlay:o,interval:s=n.e,loop:a=!1}=t,r=i.React.useRef(),l=i.ReactRedux.useSelector(t=>{var e;return o?(null===(e=t.appRuntimeInfo)||void 0===e?void 0:e.appMode)===i.AppMode.Design:null}),d=i.React.useRef(l),c=i.React.useCallback(()=>{r.current&&(clearInterval(r.current),r.current=null)},[]),u=i.React.useCallback(()=>{c(),r.current=setInterval(()=>{(function(t,e){var o,n;const s=Object(i.getAppStore)().getState(),a=s.appConfig.sections[t].views,r=null===(n=null===(o=s.appRuntimeInfo)||void 0===o?void 0:o.sectionNavInfos)||void 0===n?void 0:n[t],l=(null==r?void 0:r.currentViewId)?a.indexOf(r.currentViewId):0,d=l<a.length-1?l+1:0;return!(!e&&0===d)&&(i.jimuHistory.changeView(t,a[d]),!0)})(e,a)||c()},1e3*s)},[e,a,s,c]);i.React.useEffect(()=>{if(!d.current){if(!o)return void c();u()}return()=>{c()}},[o,s,a,c,u]),i.React.useEffect(()=>{if(d.current!==l&&null!==l){if(d.current=l,l)return void c();o&&u()}},[l,u,c,o])}var h=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};function g(t){return i.css`
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
  `}function f(t){const{views:e,navInfo:o,activeView:a,animationPreview:r,playMode:d,transition:c,sectionId:f,autoPlay:m,interval:y=n.e,loop:v=!0,className:b,sectionStyle:I,forceAspectRatio:x,aspectRatio:w,rotate:j,layoutEntryComponent:S,viewVisibilityContext:C}=t,O=i.React.useRef(),[R,M]=i.React.useState(!1),T=null==a?void 0:a.id,A=i.React.useMemo(()=>{var t;let n,s,a,r=e;if(o)if(r=null!==(t=o.visibleViews)&&void 0!==t?t:e,o.useProgress){a=o.progress;n=Object(i.getIndexFromProgress)(a,r.length).currentIndex}else n=Math.max(0,r.indexOf(o.currentViewId)),s=o.previousViewId?Math.max(0,r.indexOf(o.previousViewId)):Math.max(0,n-1);else n=Math.max(0,r.indexOf(T)),s=n;return O.current=n,{currentIndex:n,previousIndex:s,progress:a}},[T,o,e]),P=i.React.useMemo(()=>s.styleUtils.toCSSStyle(I),[I]),{transform:L}=P,z=h(P,["transform"]),k=j>0||j<0?`rotateZ(${j}deg)`:"";let N=k;L&&(N=`${L} ${k}`);const B=i.React.useCallback(()=>{M(!0)},[]),$=i.React.useCallback(()=>{M(!1)},[]),E=m&&!R;p({sectionId:f,interval:y,loop:v,autoPlay:E});const D=i.React.useCallback(t=>{i.jimuHistory.changeView(f,e[t])},[f,e]);return Object(i.jsx)("div",{className:Object(i.classNames)("section-layout layout-item-content w-100",b,{"aspect-ratio-wrapper":x&&w>0}),css:g(w),"data-sectionid":f,style:Object.assign(Object.assign({},z),{transform:N}),onMouseEnter:m?B:null,onMouseLeave:m?$:null,onTouchStart:m?B:null,onTouchEnd:m?$:null},Object(i.jsx)(l,{views:e,navInfo:o,animationPreview:r,playMode:d,currentIndex:A.currentIndex,previousIndex:A.previousIndex,progress:A.progress,loop:E&&v,viewTransition:c,layoutEntryComponent:S,viewVisibilityContext:C}),Object(i.jsx)(u,{sectionId:f,numOfViews:e.length,currentIndex:A.currentIndex,onCurrentViewChange:D}))}},function(t,e,o){"use strict";t.exports=function(t,e,o,i,n,s,a,r){if(!t){var l;if(void 0===e)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var d=[o,i,n,s,a,r],c=0;(l=new Error(e.replace(/%s/g,(function(){return d[c++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}}},function(t,e){t.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M9 6V2.333C9 .939 10.408 0 12 0h8c1.592 0 3 .939 3 2.333V6h8a1 1 0 010 2h-3l-1.858 22.153A2 2 0 0124.148 32H7.852a2 2 0 01-1.994-1.847L4 8H1a1 1 0 010-2h8zm2 0h10V2c0-.078-10-.078-10 0v4zM6.006 8l1.846 22h16.296l1.846-22H6.006zM13 12a1 1 0 011 1v12a1 1 0 01-2 0V13a1 1 0 011-1zm6 0a1 1 0 011 1v12a1 1 0 01-2 0V13a1 1 0 011-1z"></path></svg>'},function(t,e){t.exports='<svg viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 0A2.5 2.5 0 017 2.5V4h1a1 1 0 011 1v6a1 1 0 01-1 1H1a1 1 0 01-1-1V5a1 1 0 011-1h1V2.5A2.5 2.5 0 014.5 0zM8 5H1v6h7V5zM4.5 7a1 1 0 110 2 1 1 0 010-2zm0-6a1.5 1.5 0 00-1.493 1.356L3 2.5V4h3V2.5a1.5 1.5 0 00-1.356-1.493L4.5 1z" fill="#000" fill-rule="nonzero"></path></svg>'},function(t,e){t.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 0a.75.75 0 01.75.75v6.5h6.5a.75.75 0 110 1.5h-6.5v6.5a.75.75 0 11-1.5 0v-6.5H.75a.75.75 0 110-1.5h6.5V.75A.75.75 0 018 0z" fill="#000" fill-rule="evenodd"></path></svg>'},function(t,e){t.exports='<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M7.185 0c.105 0 .195.118.232.24l.013.062.245 1.567c.294.145.588.29.85.465l.19.138 1.53-.603c.154-.05.264-.016.332.031l.036.03 1.224 2.11c.051.1.06.201-.01.302l-.05.06-1.286 1.025c.061.181.061.362.061.603 0 .181-.034.328-.052.467l-.01.136 1.409.965c.105.052.12.192.083.307l-.022.055-1.224 2.11c-.053.104-.195.163-.312.14l-.056-.019-1.53-.603a4.796 4.796 0 01-.82.494l-.22.109-.245 1.568c0 .103-.135.207-.25.234L7.246 12H4.798c-.157 0-.27-.089-.298-.19l-.253-1.619c-.293-.145-.587-.29-.85-.465l-.19-.138-1.53.603c-.153.05-.264.017-.332-.03l-.036-.03L.085 8.02c-.05-.101-.06-.202.01-.302l.051-.06 1.286-1.026c-.061-.18-.061-.362-.061-.603 0-.18.034-.328.051-.466l.01-.137-1.286-.965c-.104-.103-.164-.25-.14-.329L1.247 1.99c.102-.1.204-.16.342-.141l.087.02 1.469.603.419-.281c.135-.09.268-.17.407-.236l.214-.086.245-1.628c0-.103.135-.207.25-.234L4.738 0h2.448zm-.658 1h-1.2l-.243 1.627-.586.192a1.42 1.42 0 00-.3.154l-.503.335-.441.29-1.439-.593-.59 1.017 1.207.905v.5c0 .088-.003.147-.013.228l-.044.31a.577.577 0 00-.004.065l.005.26.005.027.223.66L1.258 8.05l.581 1.001 1.536-.604.45.356c.162.126.334.226.712.416l.618.304.23 1.476h1.274l.23-1.476.751-.371c.206-.106.342-.182.453-.258l.126-.091.451-.356 1.506.595.587-1.01-1.272-.872v-.607l.009-.117.048-.341.003-.035v-.18l-.003-.098-.004-.034-.225-.665 1.345-1.073-.581-1.002-1.535.605-.451-.355-.126-.092a5.312 5.312 0 00-.59-.326l-.614-.303L6.527 1zM6 3.75a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5zm0 1a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" fill="#000" fill-rule="nonzero"></path></svg>'},function(t,e){t.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M3.828 15H15V3.828l-2.05 2.05a.999.999 0 11-1.414-1.414L16 0l4.314 4.314A.999.999 0 1118.9 5.728l-1.899-1.899v11.172h11.172L25.972 12.8a.999.999 0 111.414-1.414l4.615 4.615-4.464 4.464a.999.999 0 11-1.414-1.414l2.05-2.05H17.001v11.172l2.05-2.05a.999.999 0 111.414 1.414l-4.464 4.464-4.615-4.615a.999.999 0 111.414-1.414l2.201 2.201V17.001H3.829L5.728 18.9a.999.999 0 11-1.414 1.414L0 16l4.464-4.464a.999.999 0 111.414 1.414L3.828 15z"></path></svg>'},function(t,e){t.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M3.305 7.294L10.693.215a.79.79 0 011.083 0c.299.287.299.751 0 1.038L4.736 8l7.04 6.747c.299.287.299.751 0 1.038a.79.79 0 01-1.083 0l-7.388-7.08a.968.968 0 010-1.41z" fill="#000"></path><path d="M0 0h16v16H0z"></path></g></svg>'},function(t,e){t.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M12.695 7.294L5.307.215a.79.79 0 00-1.083 0c-.299.287-.299.751 0 1.038L11.264 8l-7.04 6.747c-.299.287-.299.751 0 1.038a.79.79 0 001.083 0l7.388-7.08a.968.968 0 000-1.41z" fill="#000"></path><path d="M0 0h16v16H0z"></path></g></svg>'},function(t,e){t.exports='<svg viewBox="0 0 11 12" xmlns="http://www.w3.org/2000/svg"><path d="M6 2.5C6 1.12 7.122 0 8.507 0c1.263 0 2.308.932 2.481 2.144l.011.145a.487.487 0 01-.463.51l-.024.001a.525.525 0 01-.524-.483 1.28 1.28 0 00-.023-.185 1.504 1.504 0 00-1.313-1.125L8.507 1c-.782 0-1.425.595-1.497 1.356l-.007.144V4H8a1 1 0 011 1v6a1 1 0 01-1 1H1a1 1 0 01-1-1V5a1 1 0 011-1h5V2.5zM8 5H1v6h7V5zM4.5 7a1 1 0 110 2 1 1 0 010-2z" fill="#000" fill-rule="nonzero"></path></svg>'},function(t,e){t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 7V0h16v7H0zm1-6h14v5H1V1zM0 16V9h16v7H0zm1-6h14v5H1v-5z" fill="#000"></path></svg>'},function(t,e){t.exports='<svg viewBox="0 0 12 8" xmlns="http://www.w3.org/2000/svg"><path d="M6 5.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm0 1a2.5 2.5 0 110-5 2.5 2.5 0 010 5zM6 1c-2.124 0-3.714.967-4.867 3C2.286 6.033 3.876 7 6 7s3.714-.967 4.867-3C9.714 1.967 8.124 1 6 1zm0 7C3.333 8 1.333 6.667 0 4c1.333-2.667 3.333-4 6-4s4.667 1.333 6 4c-1.333 2.667-3.333 4-6 4z"></path></svg>'},function(t,e){t.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M4 3h11a1 1 0 011 1v11a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm0 1v11h11V4H4zm-4 7.5V1a1 1 0 011-1h9.5a.5.5 0 010 1H1v10.5a.5.5 0 01-1 0z" fill-rule="nonzero"></path></svg>'},function(t,e){t.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 1l4.846 4.743a.508.508 0 010 .73.535.535 0 01-.746 0L8.527 2.976v12.508A.522.522 0 018 16a.522.522 0 01-.527-.516V2.976L3.9 6.473a.535.535 0 01-.746 0 .508.508 0 010-.73L8 1zm7.5-1a.5.5 0 010 1H.5a.5.5 0 010-1h15z" fill="#000" fill-rule="nonzero"></path></svg>'},function(t,e){t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 1H1v3h14V1zM4 8H1v7h3V8zm11 0H8v7h7V8zm1-8v5H0V0h16zM5 7v9H0V7h5zm2 0v9h9V7H7z" fill="#000"></path></svg>'},function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjkycHgiIGhlaWdodD0iNzJweCIgdmlld0JveD0iMCAwIDkyIDcyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT5pY29uX2FuaW1hdGlvbl90cmFuc2l0aW9uX3B1c2g8L3RpdGxlPg0KICAgIDxnIGlkPSJTdHlsZVNldHRpbmdfMiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxnIGlkPSJBbmltYXRpb24vdHJhbnNpdGlvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTk0MS4wMDAwMDAsIC0yNzAuMDAwMDAwKSIgZmlsbC1ydWxlPSJub256ZXJvIj4NCiAgICAgICAgICAgIDxnIGlkPSJTZXR0aW5nUGFuZWwtTDIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkxNy4wMDAwMDAsIDUyLjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgIDxnIGlkPSJpY29uL2FuaW1hdGlvbi90cmFuc2l0aW9uL3B1c2giIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI0LjAwMDAwMCwgMjE4LjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLUNvcHktNiIgeD0iMCIgeT0iMCIgd2lkdGg9IjkyIiBoZWlnaHQ9IjcyIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik05MiwwIEw5Miw3MiBMMCw3MiBMMCwwIEw5MiwwIFogTTkxLDM3IEwxLDM3IEwxLDcxIEw5MSw3MSBMOTEsMzcgWiBNNDYsNDQgTDU2LDU0IEw1MC4xNjY2NjY3LDU0IEw1MC4xNjY2NjY3LDY0IEw0MS44MzMzMzMzLDY0IEw0MS44MzMzMzMzLDU0IEwzNiw1NCBMNDYsNDQgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIiBmaWxsPSIjNkE2QTZBIj48L3BhdGg+DQogICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgPC9nPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+"},function(t,e){t.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 14a.522.522 0 01-.527-.516V3.976L3.9 7.473a.535.535 0 01-.746 0 .508.508 0 010-.73L8 2l4.846 4.743a.508.508 0 010 .73.535.535 0 01-.746 0L8.527 3.976v9.508A.522.522 0 018 14z" fill="#000" fill-rule="nonzero"></path></svg>'},function(t,e){t.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M2.212 9.936L2 12.27l2.333-.212L13.27 3.12 11.149 1 2.212 9.936zm-.707-.707L10.441.293a1 1 0 011.415 0l2.12 2.121a1 1 0 010 1.414l-8.935 8.937a1 1 0 01-.617.289l-2.333.212a1 1 0 01-1.087-1.087l.212-2.333a1 1 0 01.289-.617zm7.434-6.497l2.829 2.829-.707.707-2.829-2.829.707-.707zM.5 15h15a.5.5 0 010 1H.5a.5.5 0 010-1z" fill="#000" fill-rule="nonzero"></path></svg>'},function(t,e){t.exports=l},function(t,e,o){"use strict";var i=o(83),n={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},s={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},r={};function l(t){return i.isMemo(t)?a:r[t.$$typeof]||n}r[i.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},r[i.Memo]=a;var d=Object.defineProperty,c=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,h=Object.getPrototypeOf,g=Object.prototype;t.exports=function t(e,o,i){if("string"!=typeof o){if(g){var n=h(o);n&&n!==g&&t(e,n,i)}var a=c(o);u&&(a=a.concat(u(o)));for(var r=l(e),f=l(o),m=0;m<a.length;++m){var y=a[m];if(!(s[y]||i&&i[y]||f&&f[y]||r&&r[y])){var v=p(o,y);try{d(e,y,v)}catch(t){}}}}return e}},function(t,e){t.exports='<svg viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg"><path d="M1.521 2.307L4 4.677l2.479-2.37a.517.517 0 01.708 0 .464.464 0 010 .677l-2.833 2.71a.517.517 0 01-.708 0L.813 2.983a.464.464 0 010-.677.517.517 0 01.708 0z"></path><path d="M0 0h8v8H0z" fill="none"></path></svg>'},function(t,e){t.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M3 3.5h6a.5.5 0 010 1H3a.5.5 0 010-1zm0 3h6a.5.5 0 010 1H3a.5.5 0 010-1zm0 3h2a.5.5 0 010 1H3a.5.5 0 010-1zm8.5-1A.5.5 0 0111 8V1H1v12h3.5a.5.5 0 010 1H1a1 1 0 01-1-1V1a1 1 0 011-1h10a1 1 0 011 1v7a.5.5 0 01-.5.5zm2.696 2.43A6.01 6.01 0 0116 12.925c-1.333 2.333-3.5 3-5 3a5.622 5.622 0 01-1.57-.23l.824-.824a5.2 5.2 0 00.746.054c1 0 2.731-.297 3.83-2a4.233 4.233 0 00-1.318-1.313l.684-.684zm-1.966-.863l-.871.871a5.177 5.177 0 00-.359-.012c-1 0-2.731.297-3.83 2 .313.485.677.856 1.062 1.139l-.676.676A6.082 6.082 0 016 12.926c1.333-2.334 3.5-3 5-3 .376 0 .794.042 1.23.141zm1.988-.58a.5.5 0 010 .707L8.56 15.85a.5.5 0 01-.707-.707l5.656-5.657a.5.5 0 01.708 0z" fill="#000" fill-rule="nonzero"></path></svg>'},function(t,e){t.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M12 0a4 4 0 014 4v8a4 4 0 01-4 4H4a4 4 0 01-4-4V4a4 4 0 014-4h8zm0 1H4a3 3 0 00-2.995 2.824L1 4v8a3 3 0 002.824 2.995L4 15h8a3 3 0 002.995-2.824L15 12V4a3 3 0 00-2.824-2.995L12 1zM8 4a4 4 0 110 8 4 4 0 010-8zm0 1a3 3 0 100 6 3 3 0 000-6z" fill="#000" fill-rule="nonzero"></path></svg>'},function(t,e){t.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M12 0a4 4 0 014 4v8a4 4 0 01-4 4H4a4 4 0 01-4-4V4a4 4 0 014-4h8zm0 1H4a3 3 0 00-2.995 2.824L1 4v8a3 3 0 002.824 2.995L4 15h8a3 3 0 002.995-2.824L15 12V4a3 3 0 00-2.824-2.995L12 1zM8 4a4 4 0 110 8 4 4 0 010-8z" fill="#000" fill-rule="nonzero"></path></svg>'},function(t,e){t.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 11"><path d="M4 8.5c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm12 0c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm12 0c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"></path></svg>'},function(t,e){t.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 32"><path d="M18.568 27.566c.873.913.873 2.392 0 3.305s-2.288.913-3.16 0L2.766 17.652a2.413 2.413 0 010-3.305L15.408 1.128c.873-.913 2.288-.913 3.16 0s.873 2.392 0 3.305L7.507 15.999l11.061 11.566z"></path></svg>'},function(t,e){t.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 32"><path d="M1.473 27.897c-.898.939-.898 2.46 0 3.399s2.353.939 3.251 0L17.727 17.7a2.481 2.481 0 000-3.399L4.724.705c-.898-.939-2.353-.939-3.251 0s-.898 2.46 0 3.399L12.85 16.001 1.473 27.898z"></path></svg>'},function(t,e){t.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M18 14h10.667a2 2 0 110 4H18v10.667a2 2 0 11-4 0V18H3.333a2 2 0 110-4H14V3.333a2 2 0 114 0V14z"></path></svg>'},function(t,e){t.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M9.625 5C10.385 5 11 5.616 11 6.375v8.25c0 .76-.616 1.375-1.375 1.375h-8.25C.615 16 0 15.384 0 14.625v-8.25C0 5.615.616 5 1.375 5zM9.55 6h-8.1a.45.45 0 00-.45.45v8.1c0 .249.201.45.45.45h8.1a.45.45 0 00.45-.45v-8.1A.45.45 0 009.55 6zM8 12v1H3v-1h5zm6.625-12c.715 0 1.302.545 1.369 1.243l.006.132v8.25c0 .715-.545 1.302-1.243 1.369l-.132.006h-2.738v-.917h2.738a.458.458 0 00.45-.376l.008-.082v-8.25a.458.458 0 00-.376-.45l-.082-.008h-8.25a.458.458 0 00-.45.376l-.008.082v2.75H5v-2.75C5 .66 5.545.073 6.243.006L6.375 0h8.25zM8 10v1H3v-1h5zm0-2v1H3V8h5z" fill="#C5C5C5" fill-rule="nonzero"></path></svg>'},function(t,e){t.exports='<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13.462 12l10.235 10.235a1.034 1.034 0 11-1.462 1.462L12 13.462 1.765 23.697a1.034 1.034 0 11-1.462-1.462L10.538 12 .303 1.765A1.034 1.034 0 111.765.303L12 10.538 22.235.303a1.034 1.034 0 111.462 1.462L13.462 12z" fill="#000" fill-rule="nonzero"></path></svg>'},function(t,e){t.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 32"><path d="M1 0a1 1 0 011 1v30a1 1 0 01-2 0V1a1 1 0 011-1zm5 20v4h20v-4H6zm0-2h20a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4a2 2 0 012-2zM6 8v4h12V8H6zm0-2h12a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2z"></path></svg>'},function(t,e){t.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M.5 0a.5.5 0 01.5.5v15a.5.5 0 01-1 0V.5A.5.5 0 01.5 0zm5.973 3.154a.535.535 0 010 .746L2.976 7.473h12.508c.285 0 .516.236.516.527a.522.522 0 01-.516.527H2.976L6.473 12.1a.535.535 0 010 .746.508.508 0 01-.73 0L1 8l4.743-4.846a.508.508 0 01.73 0z" fill="#000" fill-rule="nonzero"></path></svg>'},function(t,e){t.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M8 0a.5.5 0 01.5.5v15a.5.5 0 11-1 0V.5A.5.5 0 018 0zm4.973 5.154a.535.535 0 010 .746l-1.497 1.573h3.508c.285 0 .516.236.516.527a.522.522 0 01-.516.527h-3.508l1.497 1.573a.535.535 0 010 .746.508.508 0 01-.73 0L9.5 8l2.743-2.846a.508.508 0 01.73 0zm-9.946 0a.508.508 0 01.73 0L6.5 8l-2.743 2.846a.508.508 0 01-.73 0 .535.535 0 010-.746l1.497-1.573H1.016A.522.522 0 01.5 8c0-.291.231-.527.516-.527h3.508L3.027 5.9a.535.535 0 010-.746z" fill="#000" fill-rule="nonzero"></path><path d="M0 0h16v16H0z"></path></g></svg>'},function(t,e){t.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 0a.5.5 0 01.5.5v15a.5.5 0 01-1 0V.5a.5.5 0 01.5-.5zm-5.243 3.154L15 8l-4.743 4.846a.508.508 0 01-.73 0 .535.535 0 010-.746l3.497-3.573H.516A.522.522 0 010 8c0-.291.231-.527.516-.527h12.508L9.527 3.9a.535.535 0 010-.746.508.508 0 01.73 0z" fill="#000" fill-rule="nonzero"></path></svg>'},function(t,e){t.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M8 9.5l2.846 2.743a.508.508 0 010 .73.535.535 0 01-.746 0l-1.573-1.497v3.508A.522.522 0 018 15.5a.522.522 0 01-.527-.516v-3.508L5.9 12.973a.535.535 0 01-.746 0 .508.508 0 010-.73L8 9.5zm0-9c.291 0 .527.231.527.516v3.508L10.1 3.027a.535.535 0 01.746 0 .508.508 0 010 .73L8 6.5 5.154 3.757a.508.508 0 010-.73.535.535 0 01.746 0l1.573 1.497V1.016C7.473.731 7.709.5 8 .5zm-7.5 7h15a.5.5 0 110 1H.5a.5.5 0 010-1z" fill="#000" fill-rule="nonzero"></path><path d="M0 0h16v16H0z"></path></g></svg>'},function(t,e){t.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 15a.5.5 0 010 1H.5a.5.5 0 010-1h15zM8 0c.291 0 .527.231.527.516v12.508L12.1 9.527a.535.535 0 01.746 0 .508.508 0 010 .73L8 15l-4.846-4.743a.508.508 0 010-.73.535.535 0 01.746 0l3.573 3.497V.516C7.473.231 7.709 0 8 0z" fill="#000" fill-rule="nonzero"></path></svg>'},function(t,e){t.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M13.086 8.5H10v-1h3.086L12.06 6.475a.5.5 0 11.707-.707L15 8l-2.157 2.157a.5.5 0 11-.707-.707l.95-.95zm-10.172 0l.95.95a.5.5 0 11-.707.707L1 8l2.232-2.232a.5.5 0 11.707.707L2.914 7.5H6v1H2.914zM15 1H1v14h14V1zm1 0v14a1 1 0 01-1 1H1a1 1 0 01-1-1V1a1 1 0 011-1h14a1 1 0 011 1z" fill="#000" fill-rule="nonzero"></path></svg>'},function(t,e){t.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 2.914V6h-1V2.914L6.475 3.94a.5.5 0 01-.707-.707L8 1l2.157 2.157a.5.5 0 01-.707.707l-.95-.95zm0 10.172l.95-.95a.5.5 0 01.707.707L8 15l-2.232-2.232a.5.5 0 01.707-.707L7.5 13.086V10h1v3.086zM1 1v14h14V1H1zm0-1h14a1 1 0 011 1v14a1 1 0 01-1 1H1a1 1 0 01-1-1V1a1 1 0 011-1z" fill="#000" fill-rule="nonzero"></path></svg>'},function(t,e){t.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.293 1H12.95a.5.5 0 010-1H16v3.157a.5.5 0 11-1 0v-1.45L8.707 8l6.29 6.29v-1.55a.5.5 0 011 0v3.263H12.84a.5.5 0 010-1h1.456L8 8.707l-6.296 6.296h1.453a.5.5 0 110 1H0V12.74a.5.5 0 011 0v1.553L7.293 8 1 1.707v1.45a.5.5 0 11-1 0V0h3.05a.5.5 0 010 1H1.707L8 7.293 14.293 1z" fill="#000" fill-rule="nonzero"></path></svg>'},function(t,e){t.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M7.433.2a.903.903 0 011.134 0l7 5.024c.1.079.188.178.257.292.313.517.198 1.223-.257 1.578l-7 4.706a.903.903 0 01-1.134 0l-7-4.706a1.078 1.078 0 01-.257-.292c-.313-.516-.198-1.223.257-1.578l7-5.024zM15 6.16L8 1.134 1 6.159l7 4.706 7-4.706zM.777 10.083L8 14.899l7.223-4.815a.5.5 0 11.554.832l-7.5 5a.5.5 0 01-.554 0l-7.5-5a.5.5 0 11.554-.832z" fill="#000" fill-rule="nonzero"></path></svg>'},function(t,e){t.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 14.084l.948-.948a.5.5 0 01.708.707L7.999 16l-2.233-2.232a.5.5 0 01.708-.707L7.5 14.087V1h-7a.5.5 0 010-1h15a.5.5 0 010 1h-7v13.084zM1.5 7a.5.5 0 010-1H6v1H1.5zm13 0H10V6h4.5a.5.5 0 010 1z" fill="#000" fill-rule="nonzero"></path></svg>'},function(t,e){t.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 1.916V15h7a.5.5 0 010 1H.5a.5.5 0 010-1h7V1.913L6.474 2.939a.5.5 0 01-.708-.707L8 0l2.157 2.157a.5.5 0 01-.708.707L8.5 1.916zM1.5 9H6v1H1.5a.5.5 0 010-1zm13 0a.5.5 0 010 1H10V9h4.5z" fill="#000" fill-rule="nonzero"></path></svg>'},function(t,e){t.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 13.084l.948-.948a.5.5 0 01.708.707L7.999 15l-2.233-2.232a.5.5 0 01.708-.707L7.5 13.087V1h-7a.5.5 0 010-1h15a.5.5 0 010 1h-7v12.084zM.5 16a.5.5 0 010-1h15a.5.5 0 010 1H.5zm1-9a.5.5 0 010-1H6v1H1.5zm13 0H10V6h4.5a.5.5 0 010 1z" fill="#000" fill-rule="nonzero"></path></svg>'},function(t,e){t.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 2.916V15h7a.5.5 0 010 1H.5a.5.5 0 010-1h7V2.913L6.474 3.939a.5.5 0 01-.708-.707L8 1l2.157 2.157a.5.5 0 01-.708.707L8.5 2.916zM.5 0h15a.5.5 0 010 1H.5a.5.5 0 010-1zm1 9H6v1H1.5a.5.5 0 010-1zm13 0a.5.5 0 010 1H10V9h4.5z" fill="#000" fill-rule="nonzero"></path></svg>'},function(t,e){t.exports='<svg viewBox="0 0 20 6" xmlns="http://www.w3.org/2000/svg"><path d="M4 .5v2h1v1H4v2L0 3 4 .5zm12 0L20 3l-4 2.5v-2h-1v-1h1v-2zm-8 2v1H6v-1h2zm3 0v1H9v-1h2zm3 0v1h-2v-1h2z" fill="#8B8B8B" fill-rule="evenodd"></path></svg>'},function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjkycHgiIGhlaWdodD0iNzJweCIgdmlld0JveD0iMCAwIDkyIDcyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT5pY29uX2FuaW1hdGlvbl90cmFuc2l0aW9uX2ZhZGU8L3RpdGxlPg0KICAgIDxnIGlkPSJTdHlsZVNldHRpbmdfMiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxnIGlkPSJBbmltYXRpb24vdHJhbnNpdGlvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEwNjEuMDAwMDAwLCAtMTUwLjAwMDAwMCkiPg0KICAgICAgICAgICAgPGcgaWQ9IlNldHRpbmdQYW5lbC1MMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTE3LjAwMDAwMCwgNTIuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPGcgaWQ9Imljb24vYW5pbWF0aW9uL3RyYW5zaXRpb24vZmFkZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTQ0LjAwMDAwMCwgOTguMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtQ29weS0xMyIgb3BhY2l0eT0iMC4xMDAwMDAwMDEiIGZpbGwtcnVsZT0ibm9uemVybyIgeD0iMCIgeT0iMCIgd2lkdGg9IjkyIiBoZWlnaHQ9IjcyIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtQ29weS0yIiBmaWxsPSIjNTI1MjUyIiB4PSIyOCIgeT0iMjQiIHdpZHRoPSI2NCIgaGVpZ2h0PSI0OCI+PC9yZWN0Pg0KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbD0iIzM2MzYzNiIgeD0iMCIgeT0iMCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjQ4Ij48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik02NCwwIEw2NCw0OCBMMCw0OCBMMCwwIEw2NCwwIFogTTYzLDEgTDEsMSBMMSw0NyBMNjMsNDcgTDYzLDEgWiIgaWQ9IlJlY3RhbmdsZSIgZmlsbD0iIzZBNkE2QSIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+DQogICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgPC9nPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+"},function(t,e){t.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M19.637 15.866L30.951 27.18a2.667 2.667 0 01-3.771 3.771L15.866 19.637 4.552 30.951A2.667 2.667 0 01.781 27.18l11.314-11.314L.781 4.552A2.667 2.667 0 014.552.781l11.314 11.314L27.18.781a2.667 2.667 0 013.771 3.771L19.637 15.866z"></path></svg>'},function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjkycHgiIGhlaWdodD0iNzJweCIgdmlld0JveD0iMCAwIDkyIDcyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT5pY29uX2FuaW1hdGlvbl9pbl9ub25lPC90aXRsZT4NCiAgICA8ZyBpZD0iU3R5bGVTZXR0aW5nXzIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyBpZD0iQW5pbWF0aW9uL0luIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTQxLjAwMDAwMCwgLTE5Mi4wMDAwMDApIj4NCiAgICAgICAgICAgIDxnIGlkPSJTZXR0aW5nUGFuZWwtTDIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkxNy4wMDAwMDAsIDUyLjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgIDxnIGlkPSJpY29uL2FuaW1hdGlvbi9pbi9ub25lIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNC4wMDAwMDAsIDE0MC4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS1Db3B5LTUiIGZpbGwtcnVsZT0ibm9uemVybyIgeD0iMCIgeT0iMCIgd2lkdGg9IjkyIiBoZWlnaHQ9IjcyIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJTdGFyLUNvcHktNiIgZmlsbD0iIzZBNkE2QSIgcG9pbnRzPSI0NiA0OCAzMS44OTMxNTM5IDU1LjQxNjQwNzkgMzQuNTg3MzIxOCAzOS43MDgyMDM5IDIzLjE3NDY0MzYgMjguNTgzNTkyMSAzOC45NDY1NzcgMjYuMjkxNzk2MSA0NiAxMiA1My4wNTM0MjMgMjYuMjkxNzk2MSA2OC44MjUzNTY0IDI4LjU4MzU5MjEgNTcuNDEyNjc4MiAzOS43MDgyMDM5IDYwLjEwNjg0NjEgNTUuNDE2NDA3OSI+PC9wb2x5Z29uPg0KICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg=="},function(t,e){t.exports='<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 5.5v-5a.5.5 0 011 0v5h5a.5.5 0 010 1h-5v5a.5.5 0 01-1 0v-5h-5a.5.5 0 010-1h5z" fill="#000" fill-rule="nonzero"></path></svg>'},function(t,e){t.exports='<svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M.146 9.56a.5.5 0 00.708 0L6 4.208l5.146 5.354a.5.5 0 00.708-.708l-5.5-5.707a.5.5 0 00-.708 0l-5.5 5.707a.5.5 0 000 .708z" fill="#000"></path></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h12v12H0z"></path></clipPath></defs></svg>'},function(t,e){t.exports='<svg viewBox="0 0 12 10" xmlns="http://www.w3.org/2000/svg"><path d="M6.62 6.366L4.635 4.379a1.5 1.5 0 001.987 1.987zm.746-.745a1.5 1.5 0 00-1.987-1.987l1.987 1.987zM3.899 3.644l-.825-.825C2.322 3.314 1.678 4.038 1.133 5 2.286 7.033 3.876 8 6 8c.702 0 1.345-.106 1.934-.32L7.356 7.1A2.5 2.5 0 013.9 3.645zm.745-.745A2.5 2.5 0 018.1 6.355l.826.826c.752-.495 1.396-1.219 1.941-2.181C9.714 2.967 8.124 2 6 2c-.702 0-1.345.106-1.934.32l.578.579zM2.354 2.1L1.155.9A.527.527 0 011.9.154l1.4 1.4C4.107 1.184 5.008 1 6 1c2.667 0 4.667 1.333 6 4-.634 1.268-1.419 2.235-2.355 2.9l1.2 1.2a.527.527 0 01-.745.746l-1.4-1.4C7.893 8.816 6.992 9 6 9 3.333 9 1.333 7.667 0 5c.634-1.268 1.419-2.235 2.355-2.9z"></path></svg>'},function(t,e){t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 5H1v6h5V5zM0 4v8h7V4H0zM15 5h-5v6h5V5zM9 4v8h7V4H9z" fill="#000"></path></svg>'},function(t,e,o){"use strict";t.exports=o(84)},function(t,e,o){"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i="function"==typeof Symbol&&Symbol.for,n=i?Symbol.for("react.element"):60103,s=i?Symbol.for("react.portal"):60106,a=i?Symbol.for("react.fragment"):60107,r=i?Symbol.for("react.strict_mode"):60108,l=i?Symbol.for("react.profiler"):60114,d=i?Symbol.for("react.provider"):60109,c=i?Symbol.for("react.context"):60110,u=i?Symbol.for("react.async_mode"):60111,p=i?Symbol.for("react.concurrent_mode"):60111,h=i?Symbol.for("react.forward_ref"):60112,g=i?Symbol.for("react.suspense"):60113,f=i?Symbol.for("react.suspense_list"):60120,m=i?Symbol.for("react.memo"):60115,y=i?Symbol.for("react.lazy"):60116,v=i?Symbol.for("react.block"):60121,b=i?Symbol.for("react.fundamental"):60117,I=i?Symbol.for("react.responder"):60118,x=i?Symbol.for("react.scope"):60119;function w(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case n:switch(t=t.type){case u:case p:case a:case l:case r:case g:return t;default:switch(t=t&&t.$$typeof){case c:case h:case y:case m:case d:return t;default:return e}}case s:return e}}}function j(t){return w(t)===p}e.AsyncMode=u,e.ConcurrentMode=p,e.ContextConsumer=c,e.ContextProvider=d,e.Element=n,e.ForwardRef=h,e.Fragment=a,e.Lazy=y,e.Memo=m,e.Portal=s,e.Profiler=l,e.StrictMode=r,e.Suspense=g,e.isAsyncMode=function(t){return j(t)||w(t)===u},e.isConcurrentMode=j,e.isContextConsumer=function(t){return w(t)===c},e.isContextProvider=function(t){return w(t)===d},e.isElement=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===n},e.isForwardRef=function(t){return w(t)===h},e.isFragment=function(t){return w(t)===a},e.isLazy=function(t){return w(t)===y},e.isMemo=function(t){return w(t)===m},e.isPortal=function(t){return w(t)===s},e.isProfiler=function(t){return w(t)===l},e.isStrictMode=function(t){return w(t)===r},e.isSuspense=function(t){return w(t)===g},e.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===a||t===p||t===l||t===r||t===g||t===f||"object"==typeof t&&null!==t&&(t.$$typeof===y||t.$$typeof===m||t.$$typeof===d||t.$$typeof===c||t.$$typeof===h||t.$$typeof===b||t.$$typeof===I||t.$$typeof===x||t.$$typeof===v)},e.typeOf=w},function(t,e,o){"use strict";o.r(e),o.d(e,"withRnd",(function(){return Zn})),o.d(e,"CanvasPane",(function(){return $e})),o.d(e,"bindDragHandler",(function(){return Y})),o.d(e,"GLOBAL_DRAGGING_CLASS_NAME",(function(){return G})),o.d(e,"GLOBAL_H5_DRAGGING_CLASS_NAME",(function(){return U})),o.d(e,"bindResizeHandler",(function(){return Q})),o.d(e,"GLOBAL_RESIZING_CLASS_NAME",(function(){return J})),o.d(e,"sectionMenuItems",(function(){return It})),o.d(e,"Toolbar",(function(){return ot})),o.d(e,"LayoutEntry",(function(){return Ht})),o.d(e,"PageRenderer",(function(){return Wn})),o.d(e,"LayoutBuilder",(function(){return He})),o.d(e,"ColumnLayoutBuilder",(function(){return Xe})),o.d(e,"RowLayoutBuilder",(function(){return ho})),o.d(e,"CommonLayoutItemSetting",(function(){return yo})),o.d(e,"CommonTransformSetting",(function(){return vo})),o.d(e,"FixedLayoutItemSetting",(function(){return Ro})),o.d(e,"FlowLayoutItemSetting",(function(){return Vo})),o.d(e,"ColumnLayoutItemSetting",(function(){return Jo})),o.d(e,"RowLayoutItemSetting",(function(){return ti})),o.d(e,"DEFAULT_ROW_LAYOUT_SETTING",(function(){return Je.b})),o.d(e,"FlowLayoutSetting",(function(){return ni})),o.d(e,"LayoutItemInBuilder",(function(){return Qt})),o.d(e,"addItemToLayout",(function(){return S})),o.d(e,"getRootLayoutId",(function(){return v})),o.d(e,"DropArea",(function(){return kt})),o.d(e,"mergeWidgetsIntoColumn",(function(){return O})),o.d(e,"duplicateLayoutItem",(function(){return I})),o.d(e,"pendLayoutItem",(function(){return b})),o.d(e,"supportFloating",(function(){return R})),o.d(e,"supportSinking",(function(){return M})),o.d(e,"floatingLayoutItem",(function(){return T})),o.d(e,"sinkingLayoutItem",(function(){return A})),o.d(e,"createPageFromTemplate",(function(){return Xn})),o.d(e,"createDialogFromTemplate",(function(){return Jn})),o.d(e,"createSectionFromTemplate",(function(){return qn})),o.d(e,"createWidgetFromTemplate",(function(){return Qn})),o.d(e,"fixedLayoutActions",(function(){return i}));var i={};o.r(i),o.d(i,"bringForward",(function(){return te})),o.d(i,"bringToFront",(function(){return ee})),o.d(i,"sendBackward",(function(){return oe})),o.d(i,"sendToBack",(function(){return ie})),o.d(i,"toggleLockLayout",(function(){return ne})),o.d(i,"alignTo",(function(){return se})),o.d(i,"alignFullWidth",(function(){return ae})),o.d(i,"alignVerticalCenter",(function(){return le})),o.d(i,"alignHorizontalCenter",(function(){return de})),o.d(i,"alignFullHeight",(function(){return ce})),o.d(i,"alignFullSize",(function(){return ue}));var n=o(0),s=o(3),a=o(2),r=o(19),l=o(1),d=o(13);const c=n.React.createContext({}),u=n.css`
  width: 50px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,p=[{name:"flip",options:{fallbackPlacements:["top","right"]}}];class h extends n.React.PureComponent{constructor(t){super(t),l.utils.autoBindHandlers(this,["select"])}componentDidUpdate(){const t=this.getValue(this.props.visible,this.contextProps),e=this.getValue(this.props.disabled,this.contextProps);t&&!e||this.contextProps.onItemUnSelected(this.props.uid)}componentWillUnmount(){this.contextProps.onItemUnSelected(this.props.uid)}select(t){if(t.stopPropagation(),this.props.onClick){const{parentRef:e}=this.contextProps;this.props.onClick({layoutId:this.contextProps.layoutId,layoutItem:this.contextProps.layoutItem,clientRect:e&&e.getBoundingClientRect()},t),this.contextProps.onItemClick(this.props.uid)}}getValue(t,e){return"function"==typeof t?t(e):t}getStyle(){const{theme:t}=this.contextProps;return n.css`
      cursor: pointer;
      width: 32px;
      min-height: 32px;
      display: flex;
      justify-content: flex-start;
      user-select: none;
      background: ${t.colors.palette.light[300]};

      &:hover {
        background: ${t.colors.palette.light[500]};
      }
      &.selected {
        background: ${t.colors.primary};
      }

      &.disabled,
      &.no-action {
        cursor: default;
        pointer-events: none;
        &:hover {
          background: ${t.colors.palette.light[300]};
        }
        &.msg {
          color: ${t.colors.palette.dark[400]};
        }
      }

      &.msg {
        width: auto;
        font-size: 12px;
        color: ${t.colors.black};
        letter-spacing: 0.33px;
        text-align: center;
        padding: 0 8px;
        &:hover {
          background: ${t.colors.palette.light[500]};
        }
      }

      .toolbar-group & {
        justify-content: flex-start;
      }

      .popper {
        border: 1px solid ${t.colors.palette.dark[400]};
      }
    `}separatorStyle(){const{theme:t}=this.contextProps;return this.props.isInGroup?n.css`
        width: 100%;
        height: 1px;
        background-color: ${t.colors.palette.light[600]};
        align-self: center;
      `:n.css`
      div.toolbar-item + &,
      div.toolbar-group + & {
        display: block;
      }
      display: none;
      width: 1px;
      height: 30px;
      border-left: 1px solid ${t.colors.palette.light[600]};
      align-self: center;
    `}tooltipStyle(){const{theme:t}=this.contextProps;return n.css`
      border: none;

      .tooltip {
        color: ${t.colors.black};
        background-color: ${t.colors.palette.light[600]};
        border-color: ${t.colors.palette.light[300]};
      }
    `}render(){const{icon:t,autoFlipIcon:e,label:o,size:i,checked:s,disabled:r,visible:l,rotate:d,settingPanel:h,title:g,uid:f,widgetId:m,className:y,seperator:v}=this.props;if(v)return Object(n.jsx)(c.Consumer,null,t=>(this.contextProps=t,Object(n.jsx)("div",{"data-testid":"toolbarSeparator",css:this.separatorStyle()})));const b=null==this.props.onClick,I=i||16,x=h;return Object(n.jsx)(c.Consumer,null,i=>{if(this.contextProps=i,m&&i.layoutItem.widgetId!==m)return null;let c="";"function"==typeof g?c=g(i):"string"==typeof g&&(c=g);const v=h&&i.activeItem===f&&i.toggleOn,w=v||this.getValue(s,i),j=this.getValue(r,i),S=this.getValue(l,i),C=this.getValue(o,i),O=this.getValue(t,i);return null==l||S?Object(n.jsx)("div",{className:Object(n.classNames)("toolbar-item",y,{selected:w,disabled:j,msg:C,"no-action":b}),css:this.getStyle()},!x&&Object(n.jsx)(a.Tooltip,{placement:"bottom",title:C?"":c,modifiers:p,css:this.tooltipStyle()},Object(n.jsx)("div",{className:"d-flex justify-content-start align-items-center w-100",onClick:this.select},O&&Object(n.jsx)("div",{className:"icon-container",css:u},Object(n.jsx)(a.Icon,{className:Object(n.classNames)("tool-item-icon",{checked:w}),icon:O,rotate:d,size:I,color:i.theme.colors.black,autoFlip:e})),C&&Object(n.jsx)("span",{className:"pl-2 text-nowrap"},C))),x&&Object(n.jsx)(n.React.Fragment,null,Object(n.jsx)(a.Tooltip,{placement:"bottom",title:C?"":c,modifiers:p,css:this.tooltipStyle()},Object(n.jsx)("div",{ref:t=>this.reference=t,css:u,onClick:this.select},O&&Object(n.jsx)(a.Icon,{className:Object(n.classNames)("tool-item-icon",{checked:w}),icon:O,rotate:d,size:I,color:i.theme.colors.black,autoFlip:e}),C&&Object(n.jsx)("span",null,C))),Object(n.jsx)(a.Popper,{placement:"bottom-start",reference:this.reference,open:v,disablePortal:!0},Object(n.jsx)("div",{css:n.css`
                          display: flex;
                          pointer-events: all;
                          background-color: ${i.theme.colors.white};
                          border-radius: 2px;
                          box-shadow: 0 2px 8px 1px rgba(0, 0, 0, 0.2);
                        `,className:"d-flex"},v&&Object(n.jsx)(x,Object.assign({},i)))))):null})}}const g=()=>{},f=[{name:"preventOverflow",options:{boundariesElement:"viewport",padding:{bottom:20}}}];class m extends n.React.PureComponent{constructor(t){super(t),this.handleOutsideClick=t=>{const{activeItem:e,toggleOn:o}=this.contextProps;e===this.props.uid&&o&&!this.ref.contains(t.target)&&this.contextProps.onItemClick(this.props.uid)},l.utils.autoBindHandlers(this,["togglePopToolItems","onItemClick"])}componentDidMount(){document.addEventListener("click",this.handleOutsideClick)}componentWillUnmount(){document.removeEventListener("click",this.handleOutsideClick)}getBaseStyle(){const{theme:t}=this.contextProps;return n.css`
      cursor: pointer;
      min-width: 50px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      background-color: ${t.colors.palette.light[300]};

      &:hover {
        background-color: ${t.colors.palette.light[500]} !important;
      }
    `}getPopStyle(){return n.css`
      display: flex;
      pointer-events: all;
      background-color: ${this.contextProps.theme.colors.palette.light[300]};
      border-radius: 2px;
      box-shadow: 0 2px 8px 1px rgba(0, 0, 0, 0.2);
      padding: 4px 0;

      .toolbar-item {
        .icon-container {
          width: auto;
        }
      }
    `}getValue(t,e){return"function"==typeof t?t(e):t}togglePopToolItems(t){t&&t.stopPropagation(),this.contextProps.onItemClick(this.props.uid)}onItemClick(t,e){const{parentRef:o}=this.contextProps;t.onClick(Object.assign(Object.assign({},e),{clientRect:o.getBoundingClientRect()}))}createToolItem(t,e,o){return t.onClick||t.seperator?Object(n.jsx)(h,Object.assign({key:o,uid:`${this.props.uid}_${o+1}`,isInGroup:!0},t,{onClick:()=>this.onItemClick(t,e)})):null}getGroupMenu(t,e){const{theme:o}=this.contextProps;return t?Object(n.jsx)(a.Icon,{rotate:t.rotate,icon:t.icon,size:t.size||16,color:o.colors.black}):e[0].icon?Object(n.jsx)(a.Icon,{icon:e[0].icon,size:e[0].size||16,color:o.colors.black}):Object(n.jsx)(h,Object.assign({uid:this.props.uid+"_0",onClick:g},e[0]))}render(){const{tools:t,uid:e}=this.props;return t&&0!==t.length?Object(n.jsx)(c.Consumer,null,i=>{this.contextProps=i;const{visible:s}=t[0],r=this.getValue(s,i);if(void 0!==s&&!r)return null;const l=t.filter(t=>{const{visible:e}=t,o=this.getValue(e,i);return void 0===e||o});if(0===l.length)return null;if(1===l.length)return Object(n.jsx)(h,Object.assign({uid:e+"_0"},l[0]));let d;return l.some(t=>{const{checked:e}=t;if(this.getValue(e,i))return d=t,!0}),Object(n.jsx)("div",{className:"toolbar-group",css:this.getBaseStyle(),ref:t=>this.ref=t,onClick:this.togglePopToolItems},Object(n.jsx)("div",{ref:t=>this.reference=t,className:"d-flex w-100 justify-content-around align-items-center"},this.getGroupMenu(d,l),Object(n.jsx)(a.Icon,{icon:o(51),size:8,color:i.theme.colors.black})),i.activeItem===e&&i.toggleOn&&Object(n.jsx)(a.Popper,{toggle:this.togglePopToolItems,placement:"bottom",modifiers:f,reference:this.reference,open:!0},Object(n.jsx)("div",{css:this.getPopStyle(),className:"d-flex flex-column"},l.map((t,e)=>this.createToolItem(t,i,e)))))}):null}}var y=function(t,e,o,i){return new(o||(o=Promise))((function(n,s){function a(t){try{l(i.next(t))}catch(t){s(t)}}function r(t){try{l(i.throw(t))}catch(t){s(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,r)}l((i=i.apply(t,e||[])).next())}))};function v(){if(l.utils.getCurrentDialogId())return l.utils.getCurrentDialogRootLayoutId();switch(l.utils.getActivePagePart()){case n.PagePart.Header:return l.utils.getHeaderRootLayoutId();case n.PagePart.Footer:return l.utils.getFooterRootLayoutId();default:return l.utils.getCurrentPageRootLayoutId()}}function b(t){const e=Object(s.getAppConfigAction)();e.setLayoutItemToPending(t,!0),window.jimuConfig.isBuilder?(e.exec(),s.builderAppSync.publishChangeSelectionToApp(null)):Object(n.getAppStore)().dispatch(n.appActions.layoutChanged(e.appConfig,null))}function I(t){const{layoutId:e,layoutItemId:o}=t,i=Object(s.getAppConfigAction)(),a=i.duplicateLayoutItem(e,e,o,!0);let r=i.appConfig;const d=r.layouts[e];if(d.type===n.LayoutType.FixedLayout)r=w(r,a);else if(d.type===n.LayoutType.FlowLayout)r=j(r,t,a);else{const o=l.searchUtils.getWidgetIdThatUseTheLayoutId(i.appConfig,e);if(o){switch(i.appConfig.widgets[o].manifest.name){case"column":r=j(r,t,a);break;case"row":r=function(t,e,o){let i=t;const{layoutId:n}=e,s=t.layouts[n],a=(t,e)=>parseInt(i.layouts[n].content[t].bbox[e],10),r=(t,e,o)=>{i=i.setIn(["layouts",n,"content",t,"bbox",e],o)},l=Object.keys(s.content).sort((t,e)=>a(t,"left")-a(e,"left")),d=l.indexOf(o.layoutItemId);l.splice(d,1);const c=l.indexOf(e.layoutItemId);l.splice(c+1,0,o.layoutItemId),i=i.setIn(["layouts",n,"order"],l);let u=0;for(let t=0;t<l.length;t++)u+=a(l[t],"width");if(r(l[0],"left",0),u<=12)for(let t=1;t<l.length;t++)r(l[t],"left",a(l[t-1],"left")+a(l[t-1],"width"));else{const t=u/12;r(l[0],"width",Math.max(1,Math.floor(a(l[0],"width")/t)));for(let e=1;e<l.length;e++)r(l[e],"left",a(l[e-1],"left")+a(l[e-1],"width")),r(l[e],"width",Math.max(1,Math.floor(a(l[e],"width")/t)))}return i}(r,t,a);break;case"fixed":r=w(r,a)}}}window.jimuConfig.isBuilder?(Object(s.getAppConfigAction)(r).exec(),s.builderAppSync.publishChangeSelectionToApp(a)):Object(n.getAppStore)().dispatch(n.appActions.layoutChanged(r,a))}function x(t,e){var o,i;const a=Object(s.getAppConfigAction)(),{layoutId:r,layoutItemId:d}=t;if(!(null===(i=null===(o=a.appConfig.layouts[r])||void 0===o?void 0:o.content)||void 0===i?void 0:i[d]))return;const c=a.appConfig.layouts[e].type;c===n.LayoutType.FlowLayout?function(t,e){var o,i,a;y(this,void 0,void 0,(function*(){const r=Object(s.getAppConfigAction)(),{layoutId:l,layoutItemId:d,width:c,height:u}=t,p=r.duplicateLayoutItem(l,l,d,!0),h=null!==(i=null===(o=Object(n.getAppStore)().getState().appRuntimeInfo)||void 0===o?void 0:o.zoomScale)&&void 0!==i?i:1,g=function(t,e,o){const i=window.parent.document.querySelector('iframe[name="_appWindow"]'),n=document.querySelectorAll(`div.flow-layout[data-layoutid="${t}"] > div.trail-container > div.builder-layout-item`);let s=-1,a=2;if(i&&n){const t=i.getBoundingClientRect();n.forEach((e,o)=>{if(-1===s){const i=e.getBoundingClientRect();(i.top+t.top>=0||i.top+i.height+t.top>=0)&&(s=o+1)}}),a=Math.round(12*e*o/t.width)}return{colSpan:a,insertIndex:s}}(e,c,h);-1===g.insertIndex&&(g.insertIndex=(null===(a=r.appConfig.layouts[e].order)||void 0===a?void 0:a.length)||0);if(r.appConfig.layouts[l].type===n.LayoutType.FlowLayout){const{updatedAppConfig:t}=yield S(r.appConfig,{layoutInfo:p},{layoutId:e},{left:0,top:0,width:c,height:u},{left:0,top:0,width:c,height:u},g.insertIndex);window.jimuConfig.isBuilder?(Object(s.getAppConfigAction)(t).exec(),s.builderAppSync.publishChangeSelectionToApp(p)):Object(n.getAppStore)().dispatch(n.appActions.layoutChanged(t,p))}else P({layoutInfo:p},{layoutId:e},{left:0,top:0,width:c,height:u},{left:0,top:0,width:c,height:u},g.colSpan,g.insertIndex,r.appConfig).catch(t=>console.error(t))}))}(t,e):c===n.LayoutType.FixedLayout?function(t,e,o=null){var i,a,r,d;let c=Object(s.getAppConfigAction)();const{layoutId:u,layoutItemId:p,width:h,height:g}=t,f=(null===(a=null===(i=c.appConfig.layouts[u])||void 0===i?void 0:i.content)||void 0===a?void 0:a[p]).bbox,m=c.duplicateLayoutItem(u,u,p,!0),y=null!==(d=null===(r=Object(n.getAppStore)().getState().appRuntimeInfo)||void 0===r?void 0:r.zoomScale)&&void 0!==d?d:1;S(c.appConfig,{layoutInfo:m},{layoutId:e},{left:0,right:0,width:h,height:g},{left:0,right:0,width:h,height:g}).then(t=>{const{layoutInfo:i,updatedAppConfig:a}=t;if(c=Object(s.getAppConfigAction)(a),o||(o=function(t){const e=window.parent.document.querySelector('div[data-layoutid="right-sidebar-left-layout"]'),o=window.parent.document.querySelector('iframe[name="_appWindow"]');let i,n,s,a,r;if(e&&o){const l=e.getBoundingClientRect(),d=o.getBoundingClientRect();if(n=d.left,s=d.top,a=d.width,r=d.height,t){const e=o.contentDocument||o.contentWindow.document;if(i=e.querySelector(`div.layout[data-layoutid="${t}"]`),i){const t=i.getBoundingClientRect();n+=t.left,s+=t.top,a=t.width,r=t.height}}const c=n>=l.left?0:l.left-n,u=s>=l.top?0:l.top-s;return{left:c,top:u,width:a,height:r}}return null}(e)),o){const t=o.width/y,e=o.height/y;c.editLayoutItemBBox(i,l.utils.replaceBoundingBox(f,{left:0,top:0,right:0,bottom:0,width:Math.round(h),height:Math.round(g)},{width:t,height:e}))}c.editLayoutItemSetting(i,{vCenter:!0,hCenter:!0});const r=c.appConfig.layouts[i.layoutId].content[i.layoutItemId].bbox;c.editLayoutItemBBox(i,r.set("left","50%").set("top","50%")),Object(n.getAppStore)().dispatch(n.appActions.layoutChanged(c.appConfig,i))})}(t,e):console.error("unknown layout type: "+c)}function w(t,e){var o,i;const{layoutId:n,layoutItemId:s}=e,a=t.layouts[n].content[s];let{bbox:r,setting:d}=a;const c=t=>{if(l.utils.isPercentage(t))return parseFloat(t)+5+"%";const e=parseInt(t,10);return isNaN(e)?t:e+20};return r=(null===(o=null==d?void 0:d.autoProps)||void 0===o?void 0:o.left)?r.set("right",c(r.right)):r.set("left",c(r.left)),r=(null===(i=null==d?void 0:d.autoProps)||void 0===i?void 0:i.top)?r.set("bottom",c(r.bottom)):r.set("top",c(r.top)),(null==d?void 0:d.hCenter)&&(null==d?void 0:d.vCenter)&&(d=d.set("vCenter",!1)),t.setIn(["layouts",n,"content",s,"bbox"],r).setIn(["layouts",n,"content",s,"setting"],d)}function j(t,e,o){var i;const{layoutId:n}=e,s=t.layouts[n],a=[].concat(s.order),r=a.indexOf(o.layoutItemId);a.splice(r,1);const l=a.indexOf(e.layoutItemId);a.splice(l+1,0,o.layoutItemId);const d=s.content[o.layoutItemId];let c=t.setIn(["layouts",n,"order"],a);return(null===(i=d.setting)||void 0===i?void 0:i.isFloating)&&(c=w(c,o)),c}function S(t,e,o,i,a,r){return y(this,void 0,void 0,(function*(){const d=e.layoutInfo;return e.id?yield function(t,e,o,i,a,r){var d;return y(this,void 0,void 0,(function*(){let c;const u=Object(s.getAppConfigAction)(t),p=""+(l.utils.getMaximumId(t.layouts[o.layoutId])+1);c=e.itemType===n.LayoutItemType.Section?Object(n.Immutable)({id:p,type:n.LayoutItemType.Section,bbox:l.utils.replaceBoundingBox(null,a,i),sectionId:e.id}):Object(n.Immutable)({id:p,type:n.LayoutItemType.Widget,bbox:l.utils.replaceBoundingBox(null,a,i),widgetId:e.id});const{layoutId:h,layoutItemId:g}=e.layoutInfo,f=t.layouts[h].content[g];let m;(null===(d=f.setting)||void 0===d?void 0:d.lockParent)&&(c=c.setIn(["setting","lockParent"],!0)),e.isFromCurrentSizeMode||(m=l.searchUtils.getBrowserSizeModeByLayoutId(u.appConfig,e.layoutInfo.layoutId));const y=u.addItemIntoLayout(o.layoutId,c,r,m);return e.isFromCurrentSizeMode&&u.removeLayoutItem(e.layoutInfo,!1),yield Promise.resolve({layoutInfo:y,updatedAppConfig:u.appConfig})}))}(t,e,o,i,a,r):d&&d.layoutId&&d.layoutItemId?yield function(t,e,o,i,n,a){var r,d,c,u;return y(this,void 0,void 0,(function*(){const p=e.layoutInfo,h=Object(s.getAppConfigAction)(t),{layoutId:g,layoutItemId:f}=p;if(g===o.layoutId){const t=null===(u=null===(c=null===(d=null===(r=h.appConfig.layouts)||void 0===r?void 0:r[g])||void 0===d?void 0:d.content)||void 0===c?void 0:c[f])||void 0===u?void 0:u.bbox;if(t){let e=l.utils.replaceBoundingBox(t,n,i);e=e.set("width",t.width).set("height",t.height),h.editLayoutItemBBox(p,e)}return a>=0&&h.editLayoutItemIndex(p,o,a),h.setLayoutItemToPending(p,!1),yield Promise.resolve({layoutInfo:p,updatedAppConfig:h.appConfig})}const m=h.moveLayoutItemToAnotherLayout(p,o,l.utils.replaceBoundingBox(null,n,i),a);h.clearRedundantLayout(p);const y=l.searchUtils.getWidgetIdThatUseTheLayoutId(t,o.layoutId);return y&&C(t.widgets[y])&&h.editLayoutItemSetting(m,{lockParent:!0}),yield Promise.resolve({layoutInfo:m,updatedAppConfig:h.appConfig})}))}(t,e,o,i,a,r):e.itemType===n.LayoutItemType.Section?yield function(t,e,o,i,a){return y(this,void 0,void 0,(function*(){const r=Object(s.getAppConfigAction)(t),d=r.createSection().id,c=""+(l.utils.getMaximumId(t.layouts[e.layoutId])+1),u=Object(n.Immutable)({sectionId:d,id:c,type:n.LayoutItemType.Section,bbox:l.utils.replaceBoundingBox(null,i,o)}),p=r.addItemIntoLayout(e.layoutId,u,a);return yield Promise.resolve({layoutInfo:p,updatedAppConfig:r.appConfig})}))}(t,o,i,a,r):e.uri?yield function(t,e,o,i,a,r){return y(this,void 0,void 0,(function*(){const d={uri:e.uri};return s.appBuilderSync.publishIsBusyToBuilder(!0),yield n.WidgetManager.getInstance().handleNewWidgetJson(d).then(e=>{var d;const c=Object(s.getAppConfigAction)(t),u=""+(l.utils.getMaximumId(t.layouts[o.layoutId])+1),p=n.appConfigUtils.getUniqueId(c.appConfig,"widget");if(e.id=p,c.createWidget(Object(n.Immutable)(e)),(!a.width||!a.height)&&(null===(d=e.manifest)||void 0===d?void 0:d.defaultSize)){const{width:t,height:o}=e.manifest.defaultSize;a=Object.assign(Object.assign({},a),{width:t,height:o})}let h=Object(n.Immutable)({id:u,type:n.LayoutItemType.Widget,bbox:l.utils.replaceBoundingBox(null,a,i),widgetId:e.id});const g=l.searchUtils.getWidgetIdThatUseTheLayoutId(t,o.layoutId);g&&C(t.widgets[g])&&(h=h.setIn(["setting","lockParent"],!0));const f=c.addItemIntoLayout(o.layoutId,h,r);return s.appBuilderSync.publishIsBusyToBuilder(!1),{layoutInfo:f,updatedAppConfig:c.appConfig}}).catch(t=>y(this,void 0,void 0,(function*(){return s.appBuilderSync.publishIsBusyToBuilder(!1),yield Promise.reject(t)})))}))}(t,e,o,i,a,r):yield function(t,e,o,i,a,r){return y(this,void 0,void 0,(function*(){const e=Object(s.getAppConfigAction)(t),d=""+(l.utils.getMaximumId(t.layouts[o.layoutId])+1);let c=Object(n.Immutable)({id:d,type:n.LayoutItemType.Widget,bbox:l.utils.replaceBoundingBox(null,a,i)});const u=l.searchUtils.getWidgetIdThatUseTheLayoutId(t,o.layoutId);u&&C(t.widgets[u])&&(c=c.setIn(["setting","lockParent"],!0));const p=e.addItemIntoLayout(o.layoutId,c,r);return yield Promise.resolve({layoutInfo:p,updatedAppConfig:e.appConfig})}))}(t,0,o,i,a,r)}))}function C(t){var e,o,i,s,a,r,l;const d=null===(e=null==t?void 0:t.manifest)||void 0===e?void 0:e.widgetType,c=null!==(s=null===(i=null===(o=null==t?void 0:t.manifest)||void 0===o?void 0:o.properties)||void 0===i?void 0:i.hasEmbeddedLayout)&&void 0!==s&&s,u=null!==(l=null===(r=null===(a=null==t?void 0:t.manifest)||void 0===a?void 0:a.properties)||void 0===r?void 0:r.lockChildren)&&void 0!==l&&l;return d!==n.WidgetType.Layout&&c&&u}function O(t,e,o,i,a,r){return y(this,void 0,void 0,(function*(){const d=Object(s.getAppConfigAction)(t),c=t.layouts[a.layoutId].content[a.layoutItemId],u={id:n.appConfigUtils.getUniqueId(d.appConfig,"widget"),uri:"widgets/layout/column/"};return s.appBuilderSync.publishIsBusyToBuilder(!0),yield n.WidgetManager.getInstance().handleNewWidgetJson(u).then(t=>{d.createWidget(Object(n.Immutable)(t)),d.updateLayoutItem(a,"widgetId",t.id),d.editLayoutItemSetting(a,{maintainedByLayout:!0});let e=Object(n.Immutable)(c.bbox);const o=Math.round(parseFloat(e.height)+i.height+20);e=e.set("height",o+"px"),d.editLayoutItemBBox(a,e)}).then(()=>y(this,void 0,void 0,(function*(){const t=d.appConfig.widgets[u.id],s=Object(n.getAppStore)().getState().browserSizeMode,p=Object.keys(t.layouts)[0],h=t.layouts[p],g=l.searchUtils.findLayoutId(h,s,d.appConfig.mainSizeMode);return yield S(d.appConfig,e,{layoutId:g},o,i).then(({updatedAppConfig:t})=>y(this,void 0,void 0,(function*(){var e;const o=l.utils.getMaximumId(t.layouts[g]),i={id:""+(o+1),widgetId:c.widgetId,type:n.LayoutItemType.Widget,bbox:c.bbox,setting:{autoProps:null===(e=c.setting)||void 0===e?void 0:e.autoProps}};let s;return s="top"===r?[""+o,i.id]:[i.id,""+o],t=t.setIn(["layouts",g,"content",i.id],i).setIn(["layouts",g,"order"],s),yield Promise.resolve({updatedAppConfig:t,layoutInfo:a})})))}))).then(({updatedAppConfig:t})=>(s.appBuilderSync.publishIsBusyToBuilder(!1),{updatedAppConfig:t,layoutInfo:a})).catch(t=>y(this,void 0,void 0,(function*(){return s.appBuilderSync.publishIsBusyToBuilder(!1),yield Promise.reject(t)})))}))}function R(t){var e,o,i,a,r;const{layoutId:d,layoutItemId:c}=t,u=Object(s.getAppConfigAction)().appConfig,p=null===(i=null===(o=null===(e=null==u?void 0:u.layouts)||void 0===e?void 0:e[d])||void 0===o?void 0:o.content)||void 0===i?void 0:i[c];if(!p||(null===(a=p.setting)||void 0===a?void 0:a.isFloating))return!1;const h=l.utils.getActivePagePart();if(h!==n.PagePart.Header&&h!==n.PagePart.Footer){const t=l.utils.getCurrentPageRootLayoutId();return(null===(r=u.layouts[t])||void 0===r?void 0:r.type)===n.LayoutType.FlowLayout&&d!==t}return!1}function M(t){var e,o,i,n,a;const{layoutId:r,layoutItemId:l}=t,d=Object(s.getAppConfigAction)().appConfig,c=null===(i=null===(o=null===(e=null==d?void 0:d.layouts)||void 0===e?void 0:e[r])||void 0===o?void 0:o.content)||void 0===i?void 0:i[l];return null!==(a=null===(n=null==c?void 0:c.setting)||void 0===n?void 0:n.isFloating)&&void 0!==a&&a}function T(t,e,o){const i=l.utils.getCurrentPageRootLayoutId();let a=Object(s.getAppConfigAction)();S(a.appConfig,{layoutInfo:t},{layoutId:i},{left:0,top:0,width:1e3,height:1e3},e).then(t=>{a=Object(s.getAppConfigAction)(t.updatedAppConfig),a.editLayoutItemBBox(t.layoutInfo,{top:0,left:0,right:0,width:e.width+"px",height:e.height+"px"}).editLayoutItemSetting(t.layoutInfo,{isFloating:!0,lockParent:!0,floatingArea:o}),window.jimuConfig.isBuilder?(Object(s.getAppConfigAction)(a.appConfig).exec(),s.builderAppSync.publishChangeSelectionToApp(t.layoutInfo)):Object(n.getAppStore)().dispatch(n.appActions.layoutChanged(a.appConfig,t.layoutInfo))})}function A(t,e){var o;const{layoutId:i,layoutItemId:a}=t,r=Object(s.getAppConfigAction)();let d,c=-1,u=2;const p=document.querySelectorAll(`div.flow-layout[data-layoutid="${i}"] > div.trail-container > div.builder-layout-item:not(.floating)`);if((null==p?void 0:p.length)>1)for(let t=0;t<p.length;t++){const o=p[t];if(-1===c&&o.getAttribute("data-layoutitemid")!==a){const i=o.getBoundingClientRect();if(u=Math.round(12*e.width/i.width),l.utils.contains(i,e)){c=t,d=i;break}if(l.utils.intersects(i,e)){c=t+1,d=i;break}}}else{const t=n.utils.findViewportSize(l.utils.getAppConfig(),l.utils.getCurrentSizeMode());d={left:0,top:0,width:t.width,height:t.height},u=Math.round(12*e.width/t.width)}-1===c&&(c=(null===(o=r.appConfig.layouts[i].order)||void 0===o?void 0:o.length)||0),P({layoutInfo:t},{layoutId:i},d||e,e,u,c)}function P(t,e,o,i,a,r,d){return y(this,void 0,void 0,(function*(){let c=Object(s.getAppConfigAction)(d);const u={name:"row",label:"row",uri:"widgets/layout/row/",icon:null,itemType:n.LayoutItemType.Widget,manifest:{widgetType:n.WidgetType.Layout,properties:{}}};return yield S(c.appConfig,u,e,o,i,r).then(s=>y(this,void 0,void 0,(function*(){let{updatedAppConfig:r}=s;const d=l.searchUtils.findLayoutItem(r,s.layoutInfo),c=r.widgets[d.widgetId],u=Object.keys(c.layouts)[0],p=c.layouts[u],h=l.searchUtils.findLayoutId(p,Object(n.getAppStore)().getState().browserSizeMode,r.mainSizeMode),g=n.i18n.getIntl().formatMessage({id:"block"}),f=n.appConfigUtils.getUniqueLabel(r,"widget",g);r=r.setIn(["widgets",c.id,"label"],f),r=r.setIn(["layouts",e.layoutId,"content",d.id,"setting","heightMode"],"fixed").setIn(["layouts",e.layoutId,"content",d.id,"bbox","height"],i.height+20);const m=Math.round(Math.min(i.height,o.height));return yield S(r,t,{layoutId:h},o,{width:a,height:m,left:0},0)}))).then(t=>{const{layoutInfo:e,updatedAppConfig:o}=t;c=Object(s.getAppConfigAction)(o),c.editLayoutItemSetting(e,{heightMode:"fit"}),window.jimuConfig.isBuilder?(Object(s.getAppConfigAction)(c.appConfig).exec(),s.builderAppSync.publishChangeSelectionToApp(e)):Object(n.getAppStore)().dispatch(n.appActions.layoutChanged(c.appConfig,e))})}))}class L extends n.React.PureComponent{constructor(t){super(t),this.topLeft=this.updateFloatingArea.bind(this,1),this.topCenter=this.updateFloatingArea.bind(this,2),this.topRight=this.updateFloatingArea.bind(this,3),this.middleLeft=this.updateFloatingArea.bind(this,4),this.middleCenter=this.updateFloatingArea.bind(this,5),this.middleRight=this.updateFloatingArea.bind(this,6),this.bottomLeft=this.updateFloatingArea.bind(this,7),this.bottomCenter=this.updateFloatingArea.bind(this,8),this.bottomRight=this.updateFloatingArea.bind(this,9)}updateFloatingArea(t){const{layoutId:e,layoutItem:o}=this.props;T({layoutId:e,layoutItemId:o.id},this.getSizeOfItem(),t)}getSizeOfItem(){const{layoutId:t,layoutItem:e}=this.props,o=document.querySelector(`div.exb-rnd[data-layoutid="${t}"][data-layoutitemid="${e.id}"]`);return o?o.getBoundingClientRect():null}getStyle(t){const e=t.colors.palette.light[500];return n.css`
      background-color: ${t.colors.palette.light[300]};
      position: relative;
      padding: 4px;

      .content {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-row-gap: 0;
        grid-column-gap: 0;
        border: 1px solid ${e};

        & > div {
          cursor: pointer;
          height: 50px;
          width: 50px;
          position: relative;

          &:after {
            content: '';
            position: absolute;
            left: 1px;
            top: 1px;
            right: 1px;
            bottom: 1px;
          }

          &:hover {
            &:after {
              outline: 1px solid ${t.colors.palette.primary[700]};
              background: ${t.colors.palette.primary[100]};
            }
          }
        }

        & > div:nth-of-type(3n+1) {
          border-right: 1px solid ${e};
        }
        & > div:nth-of-type(3n) {
          border-left: 1px solid ${e};
        }
        & > div:nth-of-type(1), & > div:nth-of-type(2), & > div:nth-of-type(3) {
          border-bottom: 1px solid ${e};
        }
        & > div:nth-of-type(7), & > div:nth-of-type(8), & > div:nth-of-type(9) {
          border-top: 1px solid ${e};
        }

        .selected:after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: ${t.colors.palette.primary[100]};
          border: 1px solid ${t.colors.palette.primary[600]};
        }
      }
    `}render(){const{area:t,theme:e}=this.props;return Object(n.jsx)("div",{className:"floating-area-chooser d-flex",css:this.getStyle(e)},Object(n.jsx)("div",{className:"content w-100"},Object(n.jsx)("div",{className:Object(n.classNames)("top-left",{selected:1===t}),onClick:this.topLeft}),Object(n.jsx)("div",{className:Object(n.classNames)("top-center",{selected:2===t}),onClick:this.topCenter}),Object(n.jsx)("div",{className:Object(n.classNames)("top-right",{selected:3===t}),onClick:this.topRight}),Object(n.jsx)("div",{className:Object(n.classNames)("middle-left",{selected:4===t}),onClick:this.middleLeft}),Object(n.jsx)("div",{className:Object(n.classNames)("middle-center",{selected:5===t}),onClick:this.middleCenter}),Object(n.jsx)("div",{className:Object(n.classNames)("middle-right",{selected:6===t}),onClick:this.middleRight}),Object(n.jsx)("div",{className:Object(n.classNames)("bottom-left",{selected:7===t}),onClick:this.bottomLeft}),Object(n.jsx)("div",{className:Object(n.classNames)("bottom-center",{selected:8===t}),onClick:this.bottomCenter}),Object(n.jsx)("div",{className:Object(n.classNames)("bottom-right",{selected:9===t}),onClick:this.bottomRight})))}}L.defaultProps={area:0};const z=n.themeUtils.withBuilderTheme(L);function k(){var t;return null===(t=Object(n.getAppStore)().getState().appRuntimeInfo)||void 0===t?void 0:t.appMode}function N(){var t,e,o;return null!==(o=null===(e=null===(t=Object(n.getAppStore)().getState().appConfig)||void 0===t?void 0:t.forBuilderAttributes)||void 0===e?void 0:e.lockLayout)&&void 0!==o&&o}function B(){var t;return(null===(t=Object(n.getAppStore)().getState().appRuntimeInfo)||void 0===t?void 0:t.appMode)===n.AppMode.Design}const $={icon:o(33),title:t=>t.formatMessage("delete"),visible:t=>k()===n.AppMode.Design&&(!N()||function(t){var e;if(t.type===n.LayoutItemType.Widget&&t.widgetId){const o=Object(n.getAppStore)().getState().appConfig.widgets[t.widgetId];if(o)return(null===(e=o.manifest)||void 0===e?void 0:e.widgetType)!==n.WidgetType.Layout}return!1}(t.layoutItem)),onClick:t=>{const{layoutItem:e,layoutId:o}=t,i={layoutId:o,layoutItemId:e.id};s.appBuilderSync.publishConfirmDeleteToApp(i)}},E={icon:o(52),title:t=>t.formatMessage("pendingTip"),visible:()=>k()===n.AppMode.Design&&!N(),onClick:t=>{const{layoutId:e,layoutItem:o}=t;b({layoutId:e,layoutItemId:o.id})}},D={icon:o(36),title:t=>t.formatMessage("setting"),onClick:t=>{const{layoutId:e,layoutItem:o}=t;Object(n.getAppStore)().dispatch(n.appActions.selectionChanged({layoutId:e,layoutItemId:o.id}))}},F={icon:o(37),title:t=>t.formatMessage("dragToMove"),visible:()=>k()===n.AppMode.Design&&!N()},V={icon:o(43),title:t=>t.formatMessage("duplicate"),visible:t=>{var e,o,i;if(N())return!1;const{layoutId:s}=t,a=null===(e=Object(n.getAppStore)().getState().appConfig)||void 0===e?void 0:e.layouts[s];return"ROW"!==(null==a?void 0:a.type)||(null!==(i=null===(o=a.order)||void 0===o?void 0:o.length)&&void 0!==i?i:0)<12},onClick:t=>{const{layoutId:e,layoutItem:o}=t;I({layoutId:e,layoutItemId:o.id})}},H={icon:o(53),title:t=>t.formatMessage("floating"),visible:t=>{const{layoutItem:e,layoutId:o}=t;return!N()&&R({layoutId:o,layoutItemId:e.id})},settingPanel:z,onClick:()=>{}},W={icon:o(54),title:t=>t.formatMessage("sinking"),visible:t=>{var e,o;const{layoutItem:i}=t;return!N()&&null!==(o=null===(e=i.setting)||void 0===e?void 0:e.isFloating)&&void 0!==o&&o},onClick:t=>{const{layoutId:e,layoutItem:o,clientRect:i}=t;A({layoutId:e,layoutItemId:o.id},i)}},G="interactjs-dragging",U="exb-h5-dragging";let _=!1;function Y(t,e){if(!t)return null;let o,i,n,s,a,r;const{layoutItemId:d,useDragHandler:c,onDragStart:u,onDragging:p,onDragEnd:h}=e;return t.styleCursor(!1).draggable({inertia:!1,autoScroll:!1,allowFrom:c?".tool-drag-handler":void 0,ignoreFrom:".no-drag-action",onstart:t=>{if(N()||!B())return void t.interaction.stop();const e=t.target;if(e.classList.contains("no-drag-action"))return void(t.target._canDrag=!1);t.target._canDrag=!0,t.stopPropagation(),e.classList.add("is-dragging"),a=e.style.transform,n=t.rect;const r=t.target.parentNode;s=r.getBoundingClientRect(),document.body.classList.add(G);const c=getComputedStyle(e,null).getPropertyValue("transform"),[p,h]=function(t=""){let e="0",o="0";if(t.includes("matrix(")){const i=t.substring(t.indexOf("(")+1,t.indexOf(")")).split(",");return e=parseInt(i[4],10)+"px",o=parseInt(i[5],10)+"px",[e,o]}if(t.includes("translate(")){const i=t.match(/translate\((.*)\s*,\s*(.*)\)/);return 3===i.length&&(e=i[1],o=i[2]),[e,o]}if(t.includes("translateX(")){const o=t.match(/translateX\((.*)\)/);2===o.length&&(e=o[1])}if(t.includes("translateY(")){const e=t.match(/translateY\((.*)\)/);2===e.length&&(o=e[1])}return[e,o]}(c);o=l.utils.isPercentage(p)?l.utils.fromRatio(p,n.width):parseFloat(p),i=l.utils.isPercentage(h)?l.utils.fromRatio(h,n.height):parseFloat(h),e.setAttribute("data-translatex",o),e.setAttribute("data-translatey",i),u&&u(d)},onmove:t=>{t.stopPropagation(),o+=t.dx,i+=t.dy;const e=t.target,l=t.client.x,c=t.client.y;if(!(l>=0&&l<=s.width&&c>=0&&c<=s.height)&&!r)return r=function(t){const e=document.createElement("div");return e.setAttribute("id","interact_dragging_placeholder"),e.style.position="fixed",e.style.left=t.left+"px",e.style.top=t.top+"px",e.style.width=t.width+"px",e.style.height=t.height+"px",e.style.backgroundColor="var(--primary-700)",e.style.opacity="0.2",e.style.zIndex="1100",e}(n),r=document.body.appendChild(r),e.style.transform=a,void(e.style.visibility="hidden");const u=r||e;u.style.webkitTransform=u.style.transform=`translate(${Math.round(o)}px, ${Math.round(i)}px) translateZ(0)`,u.setAttribute("data-translatex",Math.round(o)),u.setAttribute("data-translatey",Math.round(i)),p&&p(d,o,i)},onend:t=>{t.stopPropagation();const e=t.target;e.classList.remove("is-dragging"),document.body.classList.remove(G),r&&(document.body.removeChild(r),r=null),e.style.visibility=null,e.style.transform=a,h&&h(d,o,i)}})}function Z(t){_=t}function X(){return _}const J="interactjs-resizing";let q=!1;function Q(t,e){if(!t)return null;let o,i,n,s,a=null;const{layoutItemId:r,onResizeStart:c,onResizing:u,onResizeEnd:p,restrictEdges:h=!0}=e;return t.resizable({inertia:!1,edges:{top:".rnd-resize-top",left:l.utils.isRTL()?".rnd-resize-right":".rnd-resize-left",bottom:".rnd-resize-bottom",right:l.utils.isRTL()?".rnd-resize-left":".rnd-resize-right"},modifiers:[d.interact.modifiers.restrictEdges({outer:h?"parent":null}),d.interact.modifiers.restrictSize({min:{width:16,height:16}})],onstart:t=>{t.stopPropagation(),o=0,i=0,n=0,s=0;const e=t.target.getBoundingClientRect();c&&c(r,e.width,e.height),document.body.classList.add(J)},onmove:t=>{t.stopPropagation();const e=t.deltaRect;o+=e.left,i+=e.top,n+=e.width,s+=e.height,a&&(cancelAnimationFrame(a),a=null),a=requestAnimationFrame(()=>{u&&u(r,o,i,n,s,t.shiftKey,t.speed),a=null})},onend:t=>{t.stopPropagation(),a&&(cancelAnimationFrame(a),a=null),p&&p(r,o,i,n,s,t.shiftKey),document.body.classList.remove(J)}})}function K(t){q=t}function tt(){return q}class et extends n.React.PureComponent{constructor(t){super(t),this.state={activeItem:null},l.utils.autoBindHandlers(this,["onItemClick","onItemUnSelected"])}onItemClick(t){let e=this.state.toggleOn;e=t!==this.state.activeItem||!e,this.setState({activeItem:t,toggleOn:e})}onItemUnSelected(t){t===this.state.activeItem&&this.setState({activeItem:null,toggleOn:!1})}getStyle(){const{theme:t}=this.props;return n.css`
      display: flex;
      pointer-events: all;
      border-radius: 2px;
      box-shadow: 0 2px 8px 1px rgba(0,0,0,0.20);
      height: 100%;
      margin: 5px 0;
      background: ${t.colors.palette.light[300]};

      .${G} &,
      .${J} &,
      .${U} & {
        display: none;
      }
    `}render(){const{tools:t,isLockLayout:e}=this.props;if(!t||0===t.length)return null;const{activeItem:o,toggleOn:i}=this.state;return Object(n.jsx)(c.Provider,{value:Object.assign(Object.assign({},this.props),{activeItem:o,toggleOn:i,onItemClick:this.onItemClick,onItemUnSelected:this.onItemUnSelected,isLockLayout:e})},Object(n.jsx)("div",{css:this.getStyle(),className:"layout-item-toolbar"},t.map((t,e)=>Array.isArray(t)?Object(n.jsx)(m,{uid:""+e,key:e,tools:t}):Object(n.jsx)(h,Object.assign({uid:""+e,key:e},t)))))}}const ot=n.ReactRedux.connect(t=>{var e,o,i;return{isLockLayout:null!==(i=null===(o=null===(e=t.appConfig)||void 0===e?void 0:e.forBuilderAttributes)||void 0===o?void 0:o.lockLayout)&&void 0!==i&&i}})(et);var it=o(17);const nt=o(55);class st extends n.React.PureComponent{constructor(){super(...arguments),this.state={showMenus:!0},this.formatMessage=t=>this.props.intl?this.props.intl.formatMessage({id:t,defaultMessage:it.a[t]}):it.a[t],this.showContextMenu=()=>{},this.hideContextMenu=()=>{}}getPositionStyle(){const{positionType:t}=this.props;return"left"===t?n.css`
        position: absolute;
        top: 0;
        left: 0;
      `:"center"===t?n.css`
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
      `:n.css`
      position: absolute;
      top: 0;
      left: right;
    `}getStyle(){const{size:t,builderTheme:e,rotate:o}=this.props;return n.css`
      body:not(.design-mode) & {
        display: none !important;
      }

      position: absolute;
      width: 100%;
      height: 100%;
      background: transparent;
      pointer-events: none;
      transform: ${o>0||o<0?`rotateZ(${o}deg)`:""} ;

      .content {
        ${this.getPositionStyle()};
        pointer-events: all;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 100ms;
        z-index: ${l.LayoutZIndex.HandlerTools};

        .menu-hint {
          background-color: ${e.colors.palette.light[300]};
          width: ${t}px;
          height: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          line-height: 10px;
        }

        .menu-content {
          display: none;
          height: ${t}px;
          transform: ${o>0||o<0?`rotateZ(${-o}deg)`:""} ;

          .tool-drag-handler {
            cursor: move;
          }

          .layout-item-toolbar {
            margin: 0;
          }
        }

        &:hover {
          /* height: ${t}px; */
          /* width: auto; */

          .menu-hint {
            display: none;
          }

          .menu-content {
            display: flex;
          }
        }
      }

    `}render(){const{builderTheme:t,menuItems:e,layoutId:o,layoutItem:i}=this.props;return Object(n.jsx)("div",{className:"widget-context-menu",css:this.getStyle()},Object(n.jsx)("div",{ref:t=>this.ref=t,className:"content"},Object(n.jsx)("div",{className:"menu-hint",onMouseEnter:this.showContextMenu},Object(n.jsx)(a.Icon,{icon:nt,color:t.colors.black,size:16})),this.state.showMenus&&Object(n.jsx)("div",{className:"menu-content",onMouseLeave:this.hideContextMenu},Object(n.jsx)(ot,{layoutId:o,layoutItem:i,theme:t,parentRef:this.ref,tools:e,formatMessage:this.formatMessage})),this.props.children))}}var at=Object(n.injectIntl)(st),rt=o(8);function lt(t,e){const o=function(t){if(isNaN(t))return 0;const e=t%360;return e<0?e+360:e}(t+e);return o>=337.5||o<22.5||o>=157.5&&o<202.5?"ns-resize":o>=22.5&&o<67.5||o>=202.5&&o<247.5?"nesw-resize":o>=67.5&&o<112.5||o>=247.5&&o<292.5?"ew-resize":o>=112.5&&o<157.5||o>=292.5&&o<337.5?"nwse-resize":void 0}const dt=t=>n.css`
  top: ${-5}px;
  left: ${-5}px;
  /* cursor: nwse-resize; */
  cursor: ${lt(t,135)};
  .jimu-rtl & {
    /* cursor: nesw-resize; */
    cursor: ${lt(t,225)};
  }
`,ct=t=>n.css`
  top: ${-5}px;
  right: ${-5}px;
  /* cursor: nesw-resize; */
  cursor: ${lt(t,225)};
  .jimu-rtl & {
    /* cursor: nwse-resize; */
    cursor: ${lt(t,315)};
  }
`,ut=t=>n.css`
  bottom: ${-5}px;
  left: ${-5}px;
  /* cursor: nesw-resize; */
  cursor: ${lt(t,45)};
  .jimu-rtl & {
    /* cursor: nwse-resize; */
    cursor: ${lt(t,135)};
  }
`,pt=t=>n.css`
  bottom: ${-5}px;
  right: ${-5}px;
  /* cursor: nwse-resize; */
  cursor: ${lt(t,315)};
  .jimu-rtl & {
    /* cursor: nesw-resize; */
    cursor: ${lt(t,405)};
  }
`,ht=t=>n.css`
  height: ${16}px;
  left: ${10}px;
  right: ${10}px;
  top: ${-8}px;
  /* cursor: ns-resize; */
  cursor: ${lt(t,180)};

  &:after {
    left: 50%;
    top: 50%;
    margin-left: ${-5}px;
    margin-top: ${-5}px;
  }
`,gt=t=>n.css`
  width: ${16}px;
  top: ${10}px;
  bottom: ${10}px;
  right: ${-8}px;
  /* cursor: ew-resize; */
  cursor: ${lt(t,270)};

  &:after {
    top: 50%;
    right: 50%;
    margin-top: ${-5}px;
    margin-right: ${-5}px;
  }
`,ft=t=>n.css`
  height: ${16}px;
  left: ${10}px;
  right: ${10}px;
  bottom: ${-8}px;
  /* cursor: ns-resize; */
  cursor: ${lt(t,0)};

  &:after {
    left: 50%;
    bottom: 50%;
    margin-left: ${-5}px;
    margin-bottom: ${-5}px;
  }
`,mt=t=>n.css`
  width: ${16}px;
  top: ${10}px;
  bottom: ${10}px;
  left: ${-8}px;
  /* cursor: ew-resize; */
  cursor: ${lt(t,90)};

  &:after {
    top: 50%;
    left: 50%;
    margin-top: ${-5}px;
    margin-left: ${-5}px;
  }
`;function yt(t){const{rotation:e=0,builderTheme:o}=t,{top:i,right:s,bottom:a,left:r,topLeft:d,topRight:c,bottomRight:u,bottomLeft:p}=function(t){const{left:e=!0,top:o=!0,right:i=!0,bottom:n=!0}=t;return{top:o,right:i,bottom:n,left:e,topRight:o&&i,bottomRight:n&&i,bottomLeft:n&&e,topLeft:o&&e}}(t),h=n.css`
    width: ${10}px;
    height: ${10}px;
    background: ${o.colors.black};
    border: 1px solid ${o.colors.palette.light[600]};
    box-shadow: 0 2px 4px 0 ${n.polished.rgba(o.colors.white,.5)};
    z-index: ${l.LayoutZIndex.HandlerTools};
  `,g=h,f=n.css`
    box-shadow: none;

    &:after {
      position: absolute;
      content: '';
      ${h};
    }
  `;return Object(n.jsx)("div",{className:"w-100 h-100 action-area"},i&&Object(n.jsx)("span",{key:"2","data-testid":"top",className:"rnd-resize-top handle no-drag-action",css:[f,ht(e)]}),s&&Object(n.jsx)("span",{key:"4","data-testid":"right",className:"rnd-resize-right handle no-drag-action",css:[f,gt(e)]}),a&&Object(n.jsx)("span",{key:"6","data-testid":"bottom",className:"rnd-resize-bottom handle no-drag-action",css:[f,ft(e)]}),r&&Object(n.jsx)("span",{key:"8","data-testid":"left",className:"rnd-resize-left handle no-drag-action",css:[f,mt(e)]}),d&&Object(n.jsx)("span",{key:"1","data-testid":"topLeft",className:"rnd-resize-top rnd-resize-left handle no-drag-action",css:[g,dt(e)]}),c&&Object(n.jsx)("span",{key:"3","data-testid":"topRight",className:"rnd-resize-top rnd-resize-right handle no-drag-action",css:[g,ct(e)]}),u&&Object(n.jsx)("span",{key:"5","data-testid":"bottomRight",className:"rnd-resize-bottom rnd-resize-right handle no-drag-action",css:[g,pt(e)]}),p&&Object(n.jsx)("span",{key:"7","data-testid":"bottomLeft",className:"rnd-resize-bottom rnd-resize-left handle no-drag-action",css:[g,ut(e)]}))}function vt(t){const e=Object(n.getAppStore)().getState();return l.searchUtils.getSectionInfo(e,t.sectionId)}function bt(t){var e;const{navInfo:o,views:i,activeView:s}=t;if(!o)return null==s?void 0:s.id;if(!o.useProgress)return o.currentViewId;const a=(null===(e=o.visibleViews)||void 0===e?void 0:e.length)>0?o.visibleViews:i,{currentIndex:r}=Object(n.getIndexFromProgress)(o.progress,a.length);return a[r]}const It=[{label:t=>{const{layoutItem:e}=t,o=vt(e);if(!o)return"";const{views:i}=o,n=bt(o),s=Math.max(0,i.indexOf(n));return`${t.formatMessage("view")}: ${s+1} / ${i.length}`}},{icon:o(56),autoFlipIcon:!0,size:10,title:t=>t.formatMessage("previousView"),onClick:t=>{const{layoutItem:e}=t,o=vt(e),{views:i}=o,s=bt(o),a=i.indexOf(s);a>0&&n.jimuHistory.changeView(e.sectionId,i[a-1])},disabled:t=>{const{layoutItem:e}=t,o=vt(e);if(!o)return!0;const{views:i}=o,n=bt(o);return i.indexOf(n)<=0}},{icon:o(57),autoFlipIcon:!0,size:10,title:t=>t.formatMessage("nextView"),onClick:t=>{const{layoutItem:e}=t,o=vt(e),{views:i}=o,s=bt(o),a=i.indexOf(s);a>=0&&a<i.length-1&&n.jimuHistory.changeView(e.sectionId,i[a+1])},disabled:t=>{const{layoutItem:e}=t,o=vt(e);if(!o)return!0;const{views:i}=o,n=bt(o),s=i.indexOf(n);return s<0||s>=i.length-1}},{icon:o(58),title:t=>t.formatMessage("addView"),visible:()=>k()===n.AppMode.Design&&!N(),onClick:t=>{const e=Object(n.getAppStore)().getState().appConfig,{layoutItem:o}=t,i=Object(n.Immutable)({}).merge({id:n.appConfigUtils.getUniqueId(e,"view"),label:n.appConfigUtils.getUniqueLabel(e,"view",n.i18n.getIntl().formatMessage({id:"view"}))});Object(s.getAppConfigAction)().addView(i,o.sectionId).exec(),n.jimuHistory.changeView(o.sectionId,i.id)}},{icon:o(59),title:t=>t.formatMessage("duplicateView"),visible:()=>k()===n.AppMode.Design&&!N(),onClick:t=>{const{layoutItem:e}=t;let o=bt(vt(e));if(!o){o=vt(e).views[0]}const i=Object(s.getAppConfigAction)(),a=i.duplicateView(o,e.sectionId,!0);i.exec(),n.jimuHistory.changeView(e.sectionId,a.id)}},{icon:o(60),title:t=>t.formatMessage("deleteView"),visible:t=>{if(k()!==n.AppMode.Design||N())return!1;const{layoutItem:e}=t,o=vt(e);if(!o)return!1;const{views:i}=o;return i&&i.length>1},onClick:t=>{const{layoutItem:e}=t,o=vt(e),{views:i}=o,a=bt(o);if(i.length>1){const o=i.indexOf(a);let r;r=o>0?i[o-1]:i[1],Object(s.getAppConfigAction)().removeView(a,e.sectionId).exec(),n.jimuHistory.changeView(t.layoutItem.sectionId,r)}}},{seperator:!0}],xt=[V,H,W,E,$],wt=[].concat(It,xt);let jt=0;function St({layoutId:t,layoutItem:e,refElement:o}){const{widgetId:i}=e;if(!i)return[];const s=n.ExtensionManager.getInstance().getExtensions(n.extensionSpec.ExtensionPoints.ContextTool),a=o.getBoundingClientRect();return s.filter(t=>t.widgetId===i).map(o=>({widgetId:i,icon:o.getIcon(),title:o.getTitle(),onClick:o.onClick.bind(o),checked:o.checked&&o.checked.bind(o),disabled:o.disabled?"function"==typeof o.disabled?o.disabled.bind(o):o.disabled:null,visible:o.visible?"function"==typeof o.visible?o.visible.bind(o):o.visible:null,settingPanel:o.getSettingPanel({layoutId:t,layoutItem:e,clientRect:a}),index:o.index})).sort((t,e)=>t.index-e.index)}function Ct(t){const{layoutId:e,layoutItem:o,refElement:i,modifiers:s,formatMessage:r,builderTheme:l,toolItems:d=[],showDefaultTools:c=!0}=t;if(!i)return null;const u=o.type===n.LayoutItemType.Section;let p;if(c){p=[].concat(d,u?wt:xt,St(t))}else p=St(t);return 0===p.length?null:Object(n.jsx)(a._Popper,{placement:"top-start",reference:i,open:!0,modifiers:s,version:jt++,css:n.css`
        background: transparent;
        box-shadow: none;
      `},Object(n.jsx)("div",null,Object(n.jsx)(ot,{layoutId:e,layoutItem:o,theme:l,parentRef:i,tools:p,formatMessage:r})))}const Ot=o(34);class Rt extends n.React.PureComponent{constructor(t){super(t),this.formatMessage=t=>null!=this.props.intl?this.props.intl.formatMessage({id:t,defaultMessage:it.a[t]}):it.a[t],this.isMac=()=>/macintosh|mac os x/i.test(navigator.userAgent),this.copyItem=()=>{const{layoutId:t,layoutItem:e,lockLayout:o}=this.props;if(!o){const o=this.ref.getBoundingClientRect(),i=o.width,s=o.height;Object(n.getAppStore)().dispatch(n.appActions.clipboardChanged({layoutId:t,width:i,height:s,layoutItemId:e.id}))}},this.deleteSelectedItem=()=>{const{selected:t,layoutId:e,layoutItem:o,lockLayout:i,isFunctionalWidget:n,isDesignMode:a}=this.props;if(t&&a&&(!i||n)){const t={layoutId:e,layoutItemId:o.id};return s.appBuilderSync.publishConfirmDeleteToApp(t)}},this.state={selected:!1,updateIndex:0},this.screenGroupInfo="",this.isMac()?this.keyBindings={delete:this.deleteSelectedItem,backspace:this.deleteSelectedItem,"command+keyc":this.copyItem}:this.keyBindings={delete:this.deleteSelectedItem,backspace:this.deleteSelectedItem,"ctrl+keyc":this.copyItem}}componentDidMount(){let t;const e=this.screenGroupInfo.split(":");if(e.length>1){const o=e[0],i=e[1];t=document.querySelector(`div.builder-layout-item[data-layoutid="${o}"][data-layoutitemid="${i}"]`)}this.modifiers=[{name:"preventOverflow",enabled:!0,options:{boundary:null!=t?t:"viewport",altAxis:!0}},{name:"flip",enabled:!0,options:{boundary:null!=t?t:"viewport",fallbackPlacements:Object(a.getFallbackPlacementsModifier)(["top-start","bottom-start"],!0).options.fallbackPlacements}}],this.props.selected&&this.setState({selected:!0})}componentDidUpdate(t){this.scrollIntoView(),this.props.selected&&!t.isDesignMode&&this.props.isDesignMode&&this.setState({updateIndex:this.state.updateIndex+1})}doScroll(){const{layoutId:t,layoutItem:e}=this.props,o=document.querySelector(`div.exb-rnd[data-layoutid="${t}"][data-layoutitemid="${e.id}"]`);null!=o&&o.scrollIntoView({behavior:"auto",block:"center"})}scrollIntoView(){const{selected:t,autoScroll:e}=this.props;if(!t||!e)return;const{layoutId:o}=this.props;let i=!1,a=!1;const r=Object(s.getAppConfigAction)().appConfig,d=l.searchUtils.buildLayoutStructure(r,this.pageContext.rootLayoutId,this.pageContext.pageId,l.ParentType.Page,l.utils.getCurrentSizeMode()),{viewId:c,sectionId:u}=l.searchUtils.findParentViewId(o,d),{screenId:p,screenGroupId:h}=l.searchUtils.findParentScreenId(o,d);if(null!==c&&null!=u&&(n.jimuHistory.changeView(u,c),i=!0),null!=h&&null!=h){const t=r.screenGroups[h].screens.indexOf(p);Object(n.getAppStore)().dispatch(n.appActions.screenGroupNavInfoChanged(h,t,!0)),a=!0}i||a?n.lodash.defer(()=>{this.doScroll()}):this.doScroll()}getStyle(){const{isFunctionalWidget:t,isSection:e,selected:o,isBlock:i,rotate:s=0}=this.props,a=n.polished.rgba(this.pageContext.builderTheme.colors.palette.dark[300],.6),r=this.pageContext.builderTheme.colors.palette.primary[600],d=!t||e?"dashed":"solid";return n.css`
      .${U} &,
      .${G} & {
        > .action-area {
          display: none !important;
        }
        > div.selected-tip {
          .tip-content {
            outline-color: ${a};
          }
        }
      }

      transform: ${s>0||s<0?`rotateZ(${s}deg)`:""};
      padding: inherit;
      position: absolute;
      left: 0;
      bottom: 0;
      top: 0;
      right: 0;
      z-index: ${o?l.LayoutZIndex.HandlerTools:"auto"};
      pointer-events: none;

      & > div.selected-tip {
        display: block;
        padding: inherit;
        position: absolute;
        left: 0;
        bottom: 0;
        top: 0;
        right: 0;
        pointer-events: none;
        .tip-content {
          height: 100%;
          padding: 1px;
          &:after {
            content: '';
            width: 100%;
            height: 100%;
            outline: ${i&&!o?"none":`1px ${d} ${a}`};
            display: block;
            outline-color: ${!t||e?a:"transparent"};
          }
        }
      }

      .exb-rnd.selected > & > div.selected-tip {
        display: block;
        .tip-content {
          &:after {
            outline-color: ${r};
          }
        }
      }

      & > .action-area {
        position: relative;
        .handle {
          position: absolute;
          pointer-events: all;
        }
      }

      .lock-layout-tip {
        background: ${this.pageContext.builderTheme.colors.palette.dark[100]};
        border: 1px solid ${this.pageContext.builderTheme.colors.palette.light[700]};
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
        width: 20px;
        height: 20px;
        position: absolute;
        left: -10px;
        top: -10px;

        svg {
          margin-bottom: 6px;
          margin-left: 4px;
        }
      }
    `}getKeyboardComponent(){return Object(n.jsx)(n.Keyboard,{bindings:this.keyBindings})}isResizable(){const{resizable:t=!0,selected:e,isInlineEditing:o}=this.props;return e&&!this.pageContext.viewOnly&&!this.props.lockLayout&&t&&!o}showToolbar(){const{forbidToolbar:t,selected:e}=this.props;return!t&&!this.pageContext.viewOnly&&e}render(){return Object(n.jsx)(rt.c.Consumer,null,t=>(this.screenGroupInfo=t,Object(n.jsx)(l.PageContext.Consumer,null,t=>{if(this.pageContext=t,!this.props.isDesignMode)return null;const{layoutId:e,layoutItem:o,resizable:i=!0,draggable:s=!0,selected:r,toolItems:l,showDefaultTools:d,left:c,top:u,right:p,bottom:h,rotate:g}=this.props,f=!s&&!i;return Object(n.jsx)("div",{"data-testid":"select-wrapper",ref:t=>this.ref=t,css:this.getStyle(),className:Object(n.classNames)("select-wrapper",{selected:r,"no-embed-layout":!this.props.hasEmbeddedLayout})},!t.viewOnly&&Object(n.jsx)("div",{className:"selected-tip"},Object(n.jsx)("div",{className:"tip-content"})),this.showToolbar()&&Object(n.jsx)(Ct,{layoutId:e,layoutItem:o,refElement:this.ref,modifiers:this.modifiers,builderTheme:this.pageContext.builderTheme,formatMessage:this.formatMessage,toolItems:l,showDefaultTools:d}),this.isResizable()&&Object(n.jsx)(yt,{left:c,right:p,top:u,bottom:h,rotation:g,builderTheme:t.builderTheme}),f&&r&&Object(n.jsx)("div",{className:"lock-layout-tip rounded-circle"},Object(n.jsx)(a.Icon,{icon:Ot,size:12,color:t.builderTheme.colors.black})),r&&this.getKeyboardComponent())})))}}var Mt=n.ReactRedux.connect((function(t,e){var o,i,s,a,r;return{lockLayout:null!==(s=null===(i=null===(o=t.appConfig)||void 0===o?void 0:o.forBuilderAttributes)||void 0===i?void 0:i.lockLayout)&&void 0!==s&&s,isDesignMode:t.appRuntimeInfo.appMode===n.AppMode.Design,sectionNavInfo:e.isSection?null===(r=null===(a=t.appRuntimeInfo)||void 0===a?void 0:a.sectionNavInfos)||void 0===r?void 0:r[e.layoutItem.sectionId]:null}}))(Object(n.injectIntl)(Rt)),Tt=o(7);function At(t){if(t&&"function"==typeof t.getAttribute){const e=t.getAttribute("data-layoutid"),o=t.getAttribute("data-layoutitemid");if(e&&o)return function(t,e){var o,i,s,a,r,l;const d=Object(n.getAppStore)().getState(),{layouts:c,widgets:u}=d.appConfig,p=c[t],h=null===(o=null==p?void 0:p.content)||void 0===o?void 0:o[e];if(h){const o={layoutId:t,layoutItemId:e},c=function(t,e){var o,i,s;if(e.type===n.LayoutItemType.Widget){const n=e.widgetId;if(n)return null===(s=null===(i=null===(o=t.appConfig)||void 0===o?void 0:o.widgets)||void 0===i?void 0:i[n])||void 0===s?void 0:s.manifest}return null}(d,h);let p=null;return h.type===n.LayoutItemType.Widget&&h.widgetId&&(p=null===(i=u[h.widgetId])||void 0===i?void 0:i.uri),{itemType:h.type,layoutInfo:o,uri:p,manifest:c,rotation:null!==(l=null===(r=null===(a=null===(s=h.setting)||void 0===s?void 0:s.style)||void 0===a?void 0:a.transform)||void 0===r?void 0:r.rotate)&&void 0!==l?l:0}}}(e,o)}return null}function Pt(t,e){const o={};return o.width=Math.min(t.width,e.width),o.height=Math.min(t.height,e.height),o.left=Math.max(0,t.left),o.top=Math.max(0,t.top),o.left+o.width>e.width&&(o.left=e.width-o.width),o.top+o.height>e.height&&(o.top=e.height-o.height),o}function Lt(t,e,o,i){var s;let a=function(t,e){var o,i,s,a;if(!e)return!1;if(null!==(o=e.isFromCurrentSizeMode)&&void 0!==o&&!o)return!0;const r=e.layoutInfo;if(r){const e=Object(n.getAppStore)().getState(),{layouts:o}=e.appConfig,l=o[r.layoutId],d=null===(i=null==l?void 0:l.content)||void 0===i?void 0:i[r.layoutItemId];if(d){const e=null!==(a=null===(s=d.setting)||void 0===s?void 0:s.lockParent)&&void 0!==a&&a;if(l.type===n.LayoutType.FlowLayout||e)return r.layoutId===t}}return!0}(i,t);return a&&"function"==typeof e.isItemAccepted&&(a=e.isItemAccepted(t,null!==(s=o.isPlaceholder)&&void 0!==s&&s)),a}function zt(t,e){let o,i;const s=n.lodash.throttle((function(t,o,n){if(!t||isNaN(o)||isNaN(n))return;let s=200,a=100;const{props:r}=e.current;t.manifest.defaultSize&&(s=isNaN(t.manifest.defaultSize.width)?s:t.manifest.defaultSize.width,a=isNaN(t.manifest.defaultSize.height)?a:t.manifest.defaultSize.height);r.onDragOver&&r.onDragOver(t,null,i,{left:o-s/2-i.left,top:n-a/2-i.top,width:s,height:a,right:o-s/2-i.left+s,bottom:n-a/2-i.top+a},o-i.left,n-i.top)}),100);function a(){const{props:i,layoutId:n,layoutContext:s}=e.current,a=window.parent&&window.parent._dragging_widget_item?window.parent._dragging_widget_item:null;o&&o===a||(o=a,Lt(o,s,i,n)&&(t.classList.add("drop-target"),i.onToggleDragoverEffect&&i.onToggleDragoverEffect(!0,o)))}function r(){if(!o)return!1;const{props:t,layoutId:i,pageContext:n,layoutContext:s}=e.current;return!n.viewOnly&&Lt(o,s,t,i)}t.addEventListener("dragenter",(function(n){const{props:s}=e.current;if(n.stopPropagation(),n.preventDefault(),a(),!r())return;i=t.getBoundingClientRect(),o&&s.onDragEnter&&s.onDragEnter(o)})),t.addEventListener("dragleave",(function(i){const{props:n}=e.current;if(i.stopPropagation(),i.preventDefault(),t.classList.remove("drop-target"),t.classList.remove("drop-active"),!r())return;n.onDragLeave&&n.onDragLeave(o);n.onToggleDragoverEffect&&n.onToggleDragoverEffect(!1,o);o=null})),t.addEventListener("dragover",(function(i){const{layoutId:n,pageContext:l}=e.current;if(i.stopPropagation(),i.preventDefault(),a(),!r())return void(i.dataTransfer&&(i.dataTransfer.dropEffect="none"));i.dataTransfer&&(i.dataTransfer.dropEffect="copy");if(t.classList.contains("drop-target")){const{clientX:e,clientY:a}=i;t.classList.contains("drop-active")||n===l.rootLayoutId||t.classList.add("drop-active"),s(o,e,a)}})),t.addEventListener("drop",(function(i){if(i.stopPropagation(),t.classList.remove("drop-target"),t.classList.remove("drop-active"),document.documentElement.classList.remove(U),!r())return void(o=null);const{props:n}=e.current,{clientX:s,clientY:a}=i,l=t.getBoundingClientRect();let d=200,c=100;o.manifest.defaultSize&&(d=isNaN(o.manifest.defaultSize.width)?d:o.manifest.defaultSize.width,c=isNaN(o.manifest.defaultSize.height)?c:o.manifest.defaultSize.height);let u={width:d,height:c,left:s-d/2-l.left,top:a-c/2-l.top};u=Pt(u,{left:0,top:0,width:l.width,height:l.height}),u.right=u.left+u.width,u.bottom=u.top+u.height,n.onToggleDragoverEffect&&n.onToggleDragoverEffect(!1,o);n.onDrop&&n.onDrop(o,l,u,s-l.left,a-l.top);o=null}))}function kt(t){const e=n.React.useRef(),o=n.ReactRedux.useSelector(e=>t.layouts[e.browserSizeMode]),i=n.ReactRedux.useSelector(t=>t.appRuntimeInfo.appMode===n.AppMode.Design),s=n.React.useContext(l.PageContext),a=n.React.useContext(l.LayoutContext),r=n.React.useRef();r.current={props:t,layoutId:o,pageContext:s,layoutContext:a},n.React.useEffect(()=>{let t;return e.current&&(t=function(t,e){let o,i,n,s;return Object(d.interact)(t).dropzone({accept:".exb-rnd",checker:(t,i,n,s,a,r,l)=>{const{props:d,layoutId:c,pageContext:u,layoutContext:p}=e.current;return"none"!==getComputedStyle(a).pointerEvents&&(o=At(l),!u.viewOnly&&n&&!l.contains(a)&&Lt(o,p,d,c))},ondragenter:t=>{const{props:s,layoutId:a,pageContext:r}=e.current;t.stopPropagation(),t.target.classList.add("drop-target"),a!==r.rootLayoutId&&t.target.classList.add("drop-active"),i=document.getElementById("interact_dragging_placeholder")||t.relatedTarget,n=t.dropzone.getRect(),s.onDragEnter&&s.onDragEnter(o),s.onToggleDragoverEffect&&s.onToggleDragoverEffect(!0,o)},ondragleave:t=>{const{props:a}=e.current;t.stopPropagation(),t.target.classList.remove("drop-target"),t.target.classList.remove("drop-active"),i=null,n=null,s&&cancelAnimationFrame(s),a.onDragLeave&&a.onDragLeave(o),a.onToggleDragoverEffect&&a.onToggleDragoverEffect(!1,o)},ondropmove:t=>{const{props:a}=e.current;t.stopPropagation(),s&&cancelAnimationFrame(s),s=requestAnimationFrame(()=>{const e=t.dragEvent.rect,r=t.dragEvent._interaction.coords.cur.client,l=r.x-n.left,d=r.y-n.top;a.onDragOver&&a.onDragOver(o,i,n,{left:e.left-n.left,top:e.top-n.top,width:e.width,height:e.height,right:e.left-n.left+e.width,bottom:e.top-n.top+e.height},l,d,t.dragEvent.speed),s=null})},ondrop:t=>{const{props:i}=e.current;if(t.stopPropagation(),t.target.classList.remove("drop-target"),t.target.classList.remove("drop-active"),i.onToggleDragoverEffect&&i.onToggleDragoverEffect(!1,o),s&&cancelAnimationFrame(s),i.onDrop){const e=t.dragEvent.rect;let s={left:e.left-n.left,top:e.top-n.top,width:e.width,height:e.height};s=Pt(s,{left:0,top:0,width:n.width,height:n.height}),s.right=s.left+s.width,s.bottom=s.top+s.height;const a=t.dragEvent._interaction.coords.cur.client,r=a.x-n.left,l=a.y-n.top;i.onDrop(o,n,s,r,l)}}})}(e.current,r)),()=>{t&&t.unset()}},[]),n.React.useEffect(()=>{e.current&&zt(e.current,r)},[]);const{className:c,style:u,highlightDragover:p}=t,h=Object(n.classNames)("exb-drop-area d-flex",c);return Object(n.jsx)("div",{className:h,css:n.css`
      background: transparent;
      padding: inherit;
      pointer-events: ${i?"auto":"none"};

      & > .highlight-content {
        display: none;
        pointer-events: none;
        position: relative;
      }

      &.drop-target > .highlight-content {
        display: flex;
      }

      &.drop-active {
        background: ${n.polished.rgba(s.builderTheme.colors.palette.primary[700],.2)};
      }
    `,style:u,ref:t=>e.current=t},p&&Object(n.jsx)("div",{className:"w-100 highlight-content"},t.children))}var Nt=function(t,e,o,i){return new(o||(o=Promise))((function(n,s){function a(t){try{l(i.next(t))}catch(t){s(t)}}function r(t){try{l(i.throw(t))}catch(t){s(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,r)}l((i=i.apply(t,e||[])).next())}))};const Bt=n.css`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  right: 0;
  display: flex;
  z-index: 0;
`;class $t extends n.React.PureComponent{constructor(t){super(t),this.toggleModal=t=>{t.stopPropagation(),this.setState(t=>({showModal:!t.showModal}))},this.closeModal=()=>{this.state.showModal&&this.setState({showModal:!1})},this.toggleDragoverEffect=(t,e)=>{this.ref&&t&&this.canDrop(e)?this.ref.classList.add("dragover"):this.ref.classList.remove("dragover")},this.onDrop=(t,e,o)=>{if(!this.canDrop(t))return;const i=Object(s.getAppConfigAction)();if(t.layoutInfo){const{layoutId:e,layoutItemId:o}=t.layoutInfo,s=i.appConfig.layouts[e].content[o];s.type===n.LayoutItemType.Widget&&(i.removeLayoutItem(t.layoutInfo,!1),i.updateLayoutItem({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItemId},"widgetId",s.widgetId),i.exec())}else this.newWidget(t.uri)},this.setWidget=t=>{this.newWidget(t.uri).then(()=>{this.setState({isBusy:!1})}),this.setState({showModal:!1,isBusy:!0})},this.isItemAccepted=t=>this.layoutContext.isItemAccepted(t,!0),this.fakeLayouts=Object(n.Immutable)({[n.BrowserSizeMode.Large]:`${this.props.layoutId}_${this.props.layoutItemId}_tlarge`,[n.BrowserSizeMode.Medium]:`${this.props.layoutId}_${this.props.layoutItemId}_tmedium`,[n.BrowserSizeMode.Small]:`${this.props.layoutId}_${this.props.layoutItemId}_tsmall`}),this.state={showModal:!1,isBusy:!1}}getStyle(t){return n.css`
      position: relative;
      overflow: hidden;

      &.dragover .drop-tip {
        background: ${n.polished.rgba(t.colors.palette.primary[700],.5)} !important;
      }

      .add-btn {
        z-index: 1;
      }

      .mask {
        position: absolute;
        left:0;
        top:0;
        right:0;
        bottom:0;
        z-index:2;
        background: transparent;
      }

      &.aspect-ratio-wrapper {
        padding-top: ${100*(this.props.aspectRatio||0)}%;
      }

      &.aspect-ratio-wrapper > .exb-drop-area {
        position: absolute;
        padding: 0;
      }

      &.aspect-ratio-wrapper > .add-btn {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    `}canDrop(t){var e,o;const i=Object(s.getAppConfigAction)();if(t.layoutInfo){const{layoutId:o,layoutItemId:s}=t.layoutInfo,a=i.appConfig.layouts[o].content[s];if(a.type===n.LayoutItemType.Widget&&a.widgetId){const t=i.appConfig.widgets[a.widgetId];if((null===(e=null==t?void 0:t.manifest)||void 0===e?void 0:e.widgetType)!==n.WidgetType.Layout)return!0}}else if(t.itemType===n.LayoutItemType.Widget&&t.manifest){if((null===(o=t.manifest)||void 0===o?void 0:o.widgetType)!==n.WidgetType.Layout&&t.uri)return!0}return!1}newWidget(t){return Nt(this,void 0,void 0,(function*(){const e=Object(s.getAppConfigAction)(),o={uri:t};return yield n.WidgetManager.getInstance().handleNewWidgetJson(o).then(t=>{const o=n.appConfigUtils.getUniqueId(e.appConfig,"widget");t.id=o,e.createWidget(Object(n.Immutable)(t)),e.updateLayoutItem({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItemId},"widgetId",o),e.exec()})}))}getPopupStyle(){const{builderTheme:t}=this.pageContext;return n.css`
      background-color: ${t.colors.palette.light[300]};
      max-height: 400px;
      overflow: auto;
    `}getModalStyle(){const{builderTheme:t}=this.pageContext;return n.css`
      .modal-content {
        background-color: ${t.colors.palette.light[300]};
      }

      .modal-header {
        color: ${t.colors.black};
        .close {
          color: ${t.colors.palette.dark[700]};
          &:hover {
            color: ${t.colors.black};
          }
        }
      }
    `}render(){const{forceAspectRatio:t,aspectRatio:e}=this.props;return Object(n.jsx)(l.PageContext.Consumer,null,i=>(this.pageContext=i,Object(n.jsx)(l.LayoutContext.Consumer,null,s=>(this.layoutContext=s,Object(n.jsx)("div",{className:Object(n.classNames)("layout-widget layout-item-content no-widget w-100 d-flex justify-content-center align-items-center",{"aspect-ratio-wrapper":t&&e>0}),ref:t=>this.ref=t,css:this.getStyle(i.builderTheme)},Object(n.jsx)(kt,{css:Bt,className:"drop-tip",layouts:this.fakeLayouts,isPlaceholder:!0,highlightDragover:!1,onToggleDragoverEffect:this.toggleDragoverEffect,onDrop:this.onDrop}),this.state.isBusy&&Object(n.jsx)(a.Loading,{type:a.LoadingType.Primary}),!this.state.isBusy&&Object(n.jsx)("div",{ref:t=>this.btnRef=t,className:"add-btn"},Object(n.jsx)(a.Button,{icon:!0,css:n.css`width: 36px; height: 36px; padding: 0.5rem;`,onClick:this.toggleModal},Object(n.jsx)(a.Icon,{icon:o(35)}))),!this.state.isBusy&&this.state.showModal&&Object(n.jsx)(Tt.WidgetListPopper,{builderTheme:i.builderTheme,referenceElement:this.btnRef,isItemAccepted:this.isItemAccepted,onItemSelect:this.setWidget,onClose:this.closeModal}),this.pageContext.viewOnly&&Object(n.jsx)("div",{className:"mask"}))))))}}class Et extends n.React.PureComponent{mask(){return Object(n.jsx)("div",{className:"widget-mask"})}getStyle(){return n.css`
      .${G} & {
        overflow: visible !important;
      }
      z-index: ${this.props.isInlineEditing?l.LayoutZIndex.HandlerTools:0};

      .widget-mask {
        position: absolute;
        background: transparent;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 1;
      }

      body:not(.design-mode) & .widget-mask {
        display: none !important;
      }
    `}getPlaceholderStyle(){return n.css`
      body:not(.design-mode) & {
        display: none !important;
      }
    `}render(){const{widgetId:t,isInlineEditing:e,isFunctionalWidget:o,hasEmbeddedLayout:i}=this.props;if(!t)return Object(n.jsx)($t,Object.assign({css:this.getPlaceholderStyle()},this.props));const s=!e&&o&&!i;return Object(n.jsx)(l.WidgetRenderer,Object.assign({className:"w-100",css:this.getStyle()},this.props),s&&this.mask())}}var Dt,Ft=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};!function(t){t[t.ChooseLayoutType=0]="ChooseLayoutType",t[t.RenderLayout=1]="RenderLayout"}(Dt||(Dt={}));class Vt extends n.React.Component{constructor(){super(...arguments),this.state={mode:Dt.RenderLayout},this.onLayoutTypeSelected=()=>{this.setState({mode:Dt.RenderLayout})},this.switchToChoosingMobe=()=>{this.setState({mode:Dt.ChooseLayoutType})}}shouldComponentUpdate(t){return!(t.isPageItem&&!t.visible)&&Object.keys(t).some(e=>t[e]!==this.props[e])}render(){const{layout:t}=this.props;if(!t)return null;const e=Object(l.findLayoutBuilder)(t.type||n.LayoutType.FlowLayout);if(!e)return null;const o=this.props,{isItemAccepted:i}=o,s=Ft(o,["isItemAccepted"]);return Object(n.jsx)(l.LayoutContext.Provider,{value:{isItemAccepted:i||Wt}},Object(n.jsx)(e,Object.assign({},s)))}}var Ht=n.ReactRedux.connect(l.utils.mapStateToLayoutProps)(Vt);function Wt(t,e){var o;return!!t&&(!e||t.itemType===n.LayoutItemType.Widget&&null!=t.uri&&(null===(o=t.manifest)||void 0===o?void 0:o.widgetType)!==n.WidgetType.Layout)}var Gt=o(31);class Ut extends n.React.PureComponent{render(){return n.React.createElement(Gt.a,Object.assign({},this.props,{layoutEntryComponent:Ht,viewVisibilityContext:l.ViewVisibilityContext}))}}function _t(t,e){const[o,i]=n.React.useState(!0),s=n.React.useContext(rt.b);return n.React.useEffect(()=>{null!=t&&i(s)},[t,s]),o}var Yt=o(26),Zt=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const Xt=d.interact.modifiers.restrictRect({restriction:"parent"}),Jt=d.interact.modifiers.restrictRect({restriction:"div.limited-drag-boundary"}),qt=[D,F,E,$];function Qt(t){var e,o,i,s,a,r,c,u;const p=n.ReactRedux.useSelector(e=>function(t,e){var o;const i=l.utils.mapStateToLayoutItemProps(t,e),s=e.layoutId,a=null===(o=t.appConfig.layouts[s])||void 0===o?void 0:o.type;if(!i.layoutItem)return Object.assign({layoutType:a},i);if(i.layoutItem.type===n.LayoutItemType.Widget)return Object.assign(Object.assign({layoutType:a},i),l.utils.mapStateToWidgetProps(t,e));const r=l.searchUtils.getSectionInfo(t,i.layoutItem.sectionId),d=bt(r);return Object.assign(Object.assign(Object.assign({layoutType:a},i),r),{activeView:t.appConfig.views[d]})}(e,t),n.ReactRedux.shallowEqual),h=Object.assign(Object.assign({},p),t),g=n.React.useContext(l.PageContext),f=n.React.useRef(),m=n.React.useRef();let y,v;const{effect:b,oneByOneEffect:I}=null!==(o=null===(e=h.layoutItem)||void 0===e?void 0:e.setting)&&void 0!==o?o:{},{animationPreview:x,previewId:w,playMode:j,layoutType:S}=h,C=n.React.useCallback(()=>g.rootLayoutId,[g.rootLayoutId]),O=Object(Yt.a)(f.current,h.watchViewportVisibility),{type:R,trigger:M,playId:T,revert:A,onAnimationEnd:P}=function(t){var e;const{effect:o,isPreview:i,previewId:s,playMode:a,isParentPlaying:r}=t,{pageId:d}=n.React.useContext(l.PageContext),c=n.React.useRef(),[u,p]=n.React.useState(),h=n.React.useRef(n.AnimationTriggerType.Manual);let g=null===(e=null==o?void 0:o[n.AnimationTriggerType.ScrollIntoView])||void 0===e?void 0:e.type;g=g&&g!==n.AnimationType.None?g:null;const f=n.ReactRedux.useSelector(t=>{var e;return null===g||(null===(e=t.appRuntimeInfo)||void 0===e?void 0:e.appMode)===n.AppMode.Design}),m=n.ReactRedux.useSelector(t=>null===g?null:t.browserSizeMode),y=_t(g),v=n.React.useRef(y),b=n.React.useRef(m),I=n.React.useMemo(()=>{if(!g)return null;return i&&c.current!==s&&a!==n.AnimationPlayMode.OneByOne?(c.current=s,s):u},[g,i,a,s,u]);n.React.useEffect(()=>{f||p(Symbol("autoplay when switching to live view")),h.current=n.AnimationTriggerType.Manual},[f]),n.React.useEffect(()=>{f||b.current===m||(p(Symbol("autoplay when size mode changed")),h.current=n.AnimationTriggerType.Manual),b.current=m},[m,f]),n.React.useEffect(()=>{f||v.current===y||(v.current=y,p(Symbol("autoplay when visible change")),h.current=n.AnimationTriggerType.Manual)},[y,f]);const x=n.React.useCallback(()=>{u&&(h.current=n.AnimationTriggerType.ScrollIntoView,p(null))},[u]);if(!g)return{};const w={type:!f||I&&I===s||r?g:null,trigger:I?n.AnimationTriggerType.Manual:h.current,revert:!y};return w.playId=null===w.type?null:I,w.onAnimationEnd=null===w.type?null:x,w}({effect:b,isPreview:x,previewId:w,playMode:j,isParentPlaying:h.isParentPlaying}),{setting:L,trigger:z,inheritedOneByOneSetting:k,playId:$,depth:E,revert:D,onAnimationEnd:F}=function(t){var e,o,i;const{effect:s,isSection:a,isPreview:r,previewId:d,playMode:c,isParentPlaying:u}=t,{pageId:p}=n.React.useContext(l.PageContext),h=n.React.useContext(n.AnimationContext),g=n.React.useRef(),f=n.React.useRef(n.AnimationTriggerType.Manual);let m=null===(e=null==s?void 0:s[n.AnimationTriggerType.ScrollIntoView])||void 0===e?void 0:e.type;m=m&&m!==n.AnimationType.None?m:null;const y=n.ReactRedux.useSelector(t=>{var e;return null===m||(null===(e=t.appRuntimeInfo)||void 0===e?void 0:e.appMode)===n.AppMode.Design}),v=_t(m),b=n.React.useRef(v),[I,x]=n.React.useState(),w=n.React.useMemo(()=>{if(!m)return null;return r&&g.current!==d&&c!==n.AnimationPlayMode.AsOne?(g.current=d,d):I},[m,r,c,d,I]);n.React.useEffect(()=>{y||x(Symbol("autoplay when switching to live view")),f.current=n.AnimationTriggerType.Manual},[y]),n.React.useEffect(()=>{y||b.current===v||(b.current=v,x(Symbol("autoplay when visible change")),f.current=n.AnimationTriggerType.Manual)},[v,y]);const j=n.React.useCallback(()=>{I&&(f.current=n.AnimationTriggerType.ScrollIntoView,x(null))},[I]);if(!m)return{inheritedOneByOneSetting:null==h?void 0:h.setting,depth:(null!==(o=null==h?void 0:h.depth)&&void 0!==o?o:0)+1};const S={setting:!y||w&&w===d||a||u?null==s?void 0:s[n.AnimationTriggerType.ScrollIntoView]:null,onAnimationEnd:j,trigger:w?n.AnimationTriggerType.Manual:f.current,inheritedOneByOneSetting:null==h?void 0:h.setting,depth:(null!==(i=null==h?void 0:h.depth)&&void 0!==i?i:0)+1};return S.playId=null===S.setting?null:w,S.revert=!(!S.setting&&!S.inheritedOneByOneSetting)&&!v,S}({effect:I,isSection:(null===(i=h.layoutItem)||void 0===i?void 0:i.type)===n.LayoutItemType.Section,isPreview:x,previewId:w,playMode:j,isParentPlaying:h.isParentPlaying});n.React.useEffect(()=>{if(f.current&&!m.current){const{layoutId:e,layoutItemId:o,useDragHandler:i,onDragging:s,onResizing:a}=t,{layoutItem:r}=p;m.current=Object(d.interact)(f.current).origin("parent"),m.current=Y(m.current,{layoutId:e,layoutItemId:o,useDragHandler:i,onDragging:s,onDragStart:H,onDragEnd:W,itemType:r.type,rootLayoutId:C,restrict:()=>t.restrict}),m.current=Q(m.current,{layoutItemId:o,onResizing:a,restrictEdges:S===n.LayoutType.FixedLayout,onResizeStart:_,onResizeEnd:J})}return m.current&&(t.restrict?m.current.draggable({modifiers:[Xt]}):m.current.draggable({modifiers:[Jt]})),t.resizeObserver&&t.resizeObserver.observe(f.current),()=>{m.current&&(m.current.unset(),m.current=null),t.resizeObserver&&t.resizeObserver.unobserve(f.current)}},[t.restrict]);const V=n.React.useMemo(()=>({trigger:z,setting:L,inheritedOneByOneSetting:k,playId:$,depth:E,revert:D,onAnimationEnd:F}),[z,L,k,$,E,D,F]);function H(e){Z(!0),K(!1),t.onDragStart&&t.onDragStart(e)}function W(e,o,i){n.lodash.defer(()=>{Z(!1)}),t.onDragEnd&&t.onDragEnd(e,o,i)}function _(e,o,i){Z(!1),K(!0),t.onResizeStart&&t.onResizeStart(e,o,i)}function J(e,o,i,s,a,r){n.lodash.defer(()=>{K(!1)}),t.onResizeEnd&&t.onResizeEnd(e,o,i,s,a,r)}function q(){var t;const{selected:e,draggable:o=!0}=h,i=null!==(t=p.isInlineEditing)&&void 0!==t&&t,s=n.utils.isTouchDevice();return o&&!g.viewOnly&&!i&&(!s||e)}const{layoutId:et,layoutItemId:ot,top:it,left:nt,right:st,bottom:rt,resizable:lt,draggable:dt,isBlock:ct,autoScroll:ut,layoutItem:pt,isFunctionalWidget:ht,selected:gt,isInlineEditing:ft,hasEmbeddedLayout:mt,hasExtension:yt,isParentPlaying:vt,isParentRevert:It,isParentEnableScroll:xt,parentAnimationStyle:wt,parentPlayId:jt}=h;if(!pt)return null;const{className:St,forbidContextMenu:Ct,onClick:Ot,onDoubleClick:Rt,children:Tt,id:At}=h,Pt=Zt(h,["className","forbidContextMenu","onClick","onDoubleClick","children","id"]),Lt=pt.type===n.LayoutItemType.Widget,zt=pt.type===n.LayoutItemType.Section,kt=!Ct&&!g.viewOnly&&(pt.widgetId||pt.sectionId)&&(!ht||zt),Nt=null===(s=null==b?void 0:b[n.AnimationTriggerType.ScrollIntoView])||void 0===s?void 0:s.option,Bt=null!==(u=null===(c=null===(r=null===(a=pt.setting)||void 0===a?void 0:a.style)||void 0===r?void 0:r.transform)||void 0===c?void 0:c.rotate)&&void 0!==u?u:0;return Object(n.jsx)(n.AnimationContext.Provider,{value:V},Object(n.jsx)(l.ViewportVisibilityContext.Provider,{value:!!B()||O},Object(n.jsx)(n.Animation,{id:At,type:R,trigger:M,configType:null==Nt?void 0:Nt.configType,direction:null==Nt?void 0:Nt.direction,playId:T,onAnimationEnd:P,parentAnimationStyle:wt,isParentPlaying:vt,isParentRevert:It,isParentEnableScroll:xt,parentPlayId:jt,revert:A,css:function(t){var e;const o=q(),i=null!==(e=p.isInlineEditing)&&void 0!==e&&e,s=n.polished.rgba(g.builderTheme.colors.palette.dark[300],.6),a=g.builderTheme.colors.palette.primary[600],r=ht&&!zt||gt?"solid":"dashed";return n.css`
      position: relative;
      overflow: visible;
      cursor: ${o?"move":"default"};
      touch-action: ${i||!gt?"auto":"none"};
      user-select: ${i?"auto":"none"};
      min-width: ${l.MIN_LAYOUT_ITEM_SIZE}px;
      min-height: ${l.MIN_LAYOUT_ITEM_SIZE}px;

      & > div.widget-context-menu {
        display: none;
      }

      &:hover > div.widget-context-menu {
        display: flex;
      }

      .${U} &.functional-widget {
        pointer-events: none;
      }
      .${U} &.functional-widget .exb-drop-area {
        pointer-events: all;
      }

      .${U} &,
      .${G} & {
        > div.highlight-tip {
          .tip-content {
            outline-color: ${s};
          }
        }
      }

      body:not(.design-mode) &,
      body.lock-layout & {
        cursor: default;
      }

      body:not(.design-mode) & > div.highlight-tip {
        display: none !important;
      }

      & > div.highlight-tip {
        display: block;
        padding: inherit;
        position: absolute;
        left: 0;
        bottom: 0;
        top: 0;
        right: 0;
        pointer-events: none;
        transform: ${t>0||t<0?`rotateZ(${t}deg)`:""};
        .tip-content {
          height: 100%;
          padding: 1px;
          &:after {
            content: '';
            width: 100%;
            height: 100%;
            outline: ${ct&&!gt?"none":`1px ${r} ${s}`};
            display: block;
            outline-color: ${!ht||zt?s:"transparent"};
          }
        }
      }

      &:hover > div.highlight-tip,
      &.hovered > div.highlight-tip {
        display: block;
        .tip-content {
          &:after {
            outline-color: ${a};
          }
        }
      }

      &.functional-widget:not(.selected):hover > div.highlight-tip,
      &.functional-widget:not(.selected).hovered > div.highlight-tip {
        .tip-content {
          &:after {
            outline-width: 2px;
          }
        }
      }
    `}(Bt),ref:f,className:Object(n.classNames)("builder-layout-item exb-rnd",St,{selected:gt,"is-widget":Lt,"is-section":zt,"functional-widget":Lt&&ht,"no-drag-action":!q()}),onDoubleClick:function(e){const{layoutId:o,layoutItemId:i}=t,{supportInlineEditing:s,widgetId:a}=p;t.onDoubleClick&&t.onDoubleClick(e,{layoutId:o,layoutItemId:i}),g.viewOnly||(e.stopPropagation(),s&&Object(n.getAppStore)().dispatch(n.appActions.setWidgetIsInlineEditingState(a,!0)))},onClick:function(e){if(Math.abs(e.screenX-y)>l.CLICK_TOLRERANCE||Math.abs(e.screenY-v)>l.CLICK_TOLRERANCE)return void e.stopPropagation();const{viewOnly:o}=g,{isFunctionalWidget:i,layoutItem:s}=p;if(!o&&(!N()&&B()||i||s.type===n.LayoutItemType.Section)&&(e.stopPropagation(),!tt()&&!X())){if(t.onClick){const{layoutId:o,layoutItemId:i}=h;t.onClick(e,{layoutId:o,layoutItemId:i})}!function(){const{layoutId:e,layoutItemId:o}=t;p.selected||Object(n.getAppStore)().dispatch(n.appActions.selectionChanged({layoutId:e,layoutItemId:o}))}()}},onMouseDown:function(t){y=t.screenX,v=t.screenY},"data-layoutitemid":ot,"data-layoutid":et},Lt&&Object(n.jsx)(Et,Object.assign({rotate:Bt},Pt)),zt&&Object(n.jsx)(Ut,Object.assign({rotate:Bt},Pt)),kt&&function(e){const{builderTheme:o}=g;return Object(n.jsx)(at,{builderTheme:o,layoutId:t.layoutId,layoutItem:p.layoutItem,positionType:"center",size:l.CONTEXT_MENU_ITEM_SIZE,rotate:e,iconSize:l.CONTEXT_MENU_ICON_SIZE,className:"widget-context-menu",menuItems:t.contextMenuItems||qt})}(Bt),!g.viewOnly&&gt&&Object(n.jsx)(Mt,{layoutId:et,layoutItem:pt,top:it,left:nt,right:st,bottom:rt,resizable:lt,draggable:dt,selected:gt,autoScroll:ut,forbidToolbar:t.forbidToolbar,toolItems:t.toolItems,showDefaultTools:t.showDefaultTools,isInlineEditing:ft,isFunctionalWidget:ht,hasEmbeddedLayout:mt,isSection:zt,isBlock:ct,hasExtension:Lt&&yt,widgetJson:p.widgetJson,widgetState:p.widgetState,rotate:Bt}),!g.viewOnly&&Object(n.jsx)("div",{className:"highlight-tip"},Object(n.jsx)("div",{className:"tip-content"})),t.children)))}var Kt=o(32);function te(t){const e=Object(s.getAppConfigAction)(),o=e.appConfig,{layoutId:i,layoutItemId:n}=t,a=o.layouts[i];Kt(a.order,"parent order must not be empty to alter order");const r=[].concat(a.order),l=r.indexOf(n);l===r.length-1||l<0||(r[l]=r[l+1],r[l+1]=t.layoutItemId,e.editLayoutOrder({layoutId:i},r).exec())}function ee(t){const e=Object(s.getAppConfigAction)(),o=e.appConfig,{layoutId:i,layoutItemId:n}=t,a=o.layouts[i];Kt(a.order,"parent order must not be empty to alter order");const r=[].concat(a.order),l=r.indexOf(n);l===r.length-1||l<0||(r.splice(l,1),r.push(t.layoutItemId),e.editLayoutOrder({layoutId:i},r).exec())}function oe(t){const e=Object(s.getAppConfigAction)(),o=e.appConfig,{layoutId:i,layoutItemId:n}=t,a=o.layouts[i];Kt(a.order,"parent order must not be empty to alter order");const r=[].concat(a.order),l=r.indexOf(n);l<=0||(r[l]=r[l-1],r[l-1]=t.layoutItemId,e.editLayoutOrder({layoutId:i},r).exec())}function ie(t){const e=Object(s.getAppConfigAction)(),o=e.appConfig,{layoutId:i,layoutItemId:n}=t,a=o.layouts[i];Kt(a.order,"parent order must not be empty to alter order");const r=[].concat(a.order),l=r.indexOf(n);l<=0||(r.splice(l,1),r.splice(0,0,t.layoutItemId),e.editLayoutOrder({layoutId:i},r).exec())}function ne(t){const e=Object(s.getAppConfigAction)(),o=e.appConfig;let i=l.searchUtils.findLayoutItem(o,t).setting||Object(n.Immutable)({});i=i.set("lockLayout",!i.lockLayout),e.editLayoutItemSetting(t,i).exec()}function se(t,e){const o=Object(s.getAppConfigAction)(),i=o.appConfig,a=l.searchUtils.findLayoutItem(i,t),r=a.bbox;let d=a.setting||Object(n.Immutable)({});let c;switch(0!==parseInt(r[e],10)&&o.editLayoutItemBBox(t,r.set(e,l.utils.isPercentage(r[e])?"0%":"0px")),d=d.setIn(["autoProps",e],!1),e){case"top":c="bottom";break;case"bottom":c="top";break;case"left":c="right";break;case"right":c="left"}d=d.setIn(["autoProps",c],!0),"left"===e||"right"===e?d=d.set("hCenter",!1):"top"!==e&&"bottom"!==e||(d=d.set("vCenter",!1)),o.editLayoutItemSetting(t,d).exec()}function ae(t){const e=Object(s.getAppConfigAction)(),o=e.appConfig,i=l.searchUtils.findLayoutItem(o,t),a=i.bbox;let r=i.setting||Object(n.Immutable)({});r=r.set("hCenter",!1).setIn(["autoProps","left"],!1).setIn(["autoProps","right"],!1).setIn(["autoProps","width"],l.LayoutItemSizeModes.Stretch),e.editLayoutItemBBox(t,a.set("left",l.utils.isPercentage(a.left)?"0%":"0px").set("right",l.utils.isPercentage(a.right)?"0%":"0px").set("width","100%")).editLayoutItemSetting(t,r).exec()}function re(t,e){var o,i;const a=Object(s.getAppConfigAction)(),r=a.appConfig,d=l.searchUtils.findLayoutItem(r,t);let c=d.setting||Object(n.Immutable)({}),u=d.bbox;if("h"===e)if((null===(o=c.autoProps)||void 0===o?void 0:o.width)===l.LayoutItemSizeModes.Stretch){if(l.utils.isPercentage(u.left)!==l.utils.isPercentage(u.right))return;{const t=l.utils.isPercentage(u.left)?"%":"px",e=parseFloat(u.left)+parseFloat(u.right);u=u.set("left",`${e/2}${t}`).set("right",`${e/2}${t}`)}}else u=u.set("left","50%"),c=c.set("hCenter",!0).setIn(["autoProps","left"],!1).setIn(["autoProps","right"],!0);else if((null===(i=c.autoProps)||void 0===i?void 0:i.height)===l.LayoutItemSizeModes.Stretch){if(l.utils.isPercentage(u.top)!==l.utils.isPercentage(u.bottom))return;{const t=l.utils.isPercentage(u.top)?"%":"px",e=parseFloat(u.top)+parseFloat(u.bottom);u=u.set("top",`${e/2}${t}`).set("bottom",`${e/2}${t}`)}}else u=u.set("top","50%"),c=c.set("vCenter",!0).setIn(["autoProps","top"],!1).setIn(["autoProps","bottom"],!0);a.editLayoutItemBBox(t,u).editLayoutItemSetting(t,c).exec()}function le(t){re(t,"v")}function de(t){re(t,"h")}function ce(t){const e=Object(s.getAppConfigAction)(),o=e.appConfig,i=l.searchUtils.findLayoutItem(o,t),a=i.bbox;let r=i.setting||Object(n.Immutable)({});r=r.set("vCenter",!1).setIn(["autoProps","top"],!1).setIn(["autoProps","bottom"],!1).setIn(["autoProps","height"],l.LayoutItemSizeModes.Stretch),e.editLayoutItemBBox(t,a.set("top",l.utils.isPercentage(a.top)?"0%":"0px").set("bottom",l.utils.isPercentage(a.bottom)?"0%":"0px").set("height","100%")).editLayoutItemSetting(t,r).exec()}function ue(t){const e=Object(s.getAppConfigAction)(),o=e.appConfig,i=l.searchUtils.findLayoutItem(o,t),a=i.bbox;let r=i.setting||Object(n.Immutable)({});r=r.set("vCenter",!1).set("hCenter",!1).setIn(["autoProps","top"],!1).setIn(["autoProps","bottom"],!1).setIn(["autoProps","left"],!1).setIn(["autoProps","right"],!1).setIn(["autoProps","height"],l.LayoutItemSizeModes.Stretch).setIn(["autoProps","width"],l.LayoutItemSizeModes.Stretch),e.editLayoutItemBBox(t,a.set("top",l.utils.isPercentage(a.top)?"0%":"0px").set("bottom",l.utils.isPercentage(a.bottom)?"0%":"0px").set("left",l.utils.isPercentage(a.left)?"0%":"0px").set("right",l.utils.isPercentage(a.right)?"0%":"0px").set("width","100%").set("height","100%")).editLayoutItemSetting(t,r).exec()}const pe=[[{icon:o(61),visible:()=>k()===n.AppMode.Design&&!N()},{icon:o(62),label:t=>t.formatMessage(l.utils.isRTL()?"snapToRight":"snapToLeft"),title:t=>t.formatMessage(l.utils.isRTL()?"snapToRight":"snapToLeft"),autoFlipIcon:!0,onClick:t=>{const{layoutItem:e,layoutId:o}=t;se({layoutId:o,layoutItemId:e.id},"left")}},{icon:o(63),label:t=>t.formatMessage("alignHCenter"),title:t=>t.formatMessage("alignHCenter"),onClick:t=>{const{layoutItem:e,layoutId:o}=t;de({layoutId:o,layoutItemId:e.id})}},{icon:o(64),label:t=>t.formatMessage(l.utils.isRTL()?"snapToLeft":"snapToRight"),title:t=>t.formatMessage(l.utils.isRTL()?"snapToLeft":"snapToRight"),autoFlipIcon:!0,onClick:t=>{const{layoutItem:e,layoutId:o}=t;se({layoutId:o,layoutItemId:e.id},"right")}},{icon:o(44),label:t=>t.formatMessage("snapToTop"),title:t=>t.formatMessage("snapToTop"),onClick:t=>{const{layoutItem:e,layoutId:o}=t;se({layoutId:o,layoutItemId:e.id},"top")}},{icon:o(65),label:t=>t.formatMessage("alignVCenter"),title:t=>t.formatMessage("alignVCenter"),onClick:t=>{const{layoutItem:e,layoutId:o}=t;le({layoutId:o,layoutItemId:e.id})}},{icon:o(66),label:t=>t.formatMessage("snapToBottom"),title:t=>t.formatMessage("snapToBottom"),onClick:t=>{const{layoutItem:e,layoutId:o}=t;se({layoutId:o,layoutItemId:e.id},"bottom")}},{icon:o(67),label:t=>t.formatMessage("fullWidth"),title:t=>t.formatMessage("fullWidth"),onClick:t=>{const{layoutItem:e,layoutId:o}=t;ae({layoutId:o,layoutItemId:e.id})}},{icon:o(68),label:t=>t.formatMessage("fullHeight"),title:t=>t.formatMessage("fullHeight"),onClick:t=>{const{layoutItem:e,layoutId:o}=t;ce({layoutId:o,layoutItemId:e.id})}},{icon:o(69),label:t=>t.formatMessage("fullSize"),title:t=>t.formatMessage("fullSize"),onClick:t=>{const{layoutItem:e,layoutId:o}=t;ue({layoutId:o,layoutItemId:e.id})}}],[{icon:o(70),visible:()=>k()===n.AppMode.Design&&!N()},{icon:o(71),label:t=>t.formatMessage("sendBackward"),title:t=>t.formatMessage("sendBackward"),onClick:t=>{const{layoutItem:e,layoutId:o}=t;oe({layoutId:o,layoutItemId:e.id})}},{icon:o(72),label:t=>t.formatMessage("bringForward"),title:t=>t.formatMessage("bringForward"),onClick:t=>{const{layoutItem:e,layoutId:o}=t;te({layoutId:o,layoutItemId:e.id})}},{icon:o(73),label:t=>t.formatMessage("sendToBack"),title:t=>t.formatMessage("sendToBack"),onClick:t=>{const{layoutItem:e,layoutId:o}=t;ie({layoutId:o,layoutItemId:e.id})}},{icon:o(74),label:t=>t.formatMessage("bringToFront"),title:t=>t.formatMessage("bringToFront"),onClick:t=>{const{layoutItem:e,layoutId:o}=t;ee({layoutId:o,layoutItemId:e.id})}}],{icon:t=>{var e,i;const{layoutItem:n}=t,s=null!==(i=null===(e=n.setting)||void 0===e?void 0:e.lockLayout)&&void 0!==i&&i;return o(s?34:40)},visible:()=>k()===n.AppMode.Design&&!N(),title:t=>{var e,o;const{layoutItem:i}=t,n=null!==(o=null===(e=i.setting)||void 0===e?void 0:e.lockLayout)&&void 0!==o&&o;return t.formatMessage(n?"unlockLayout":"lockLayout")},onClick:t=>{const{layoutItem:e,layoutId:o}=t;ne({layoutId:o,layoutItemId:e.id})}},{seperator:!0}];var he=o(14);class ge extends n.React.PureComponent{constructor(){super(...arguments),this.state={},this.handleResizeEnd=(t,e,o,i,n,s)=>{const{layoutItem:a}=this.props,r="ratio"===this.itemSetting.heightMode?l.utils.parseAspectRatio(this.itemSetting.aspectRatio)*i:n;this.props.onResizeEnd(t,e,o,i,r,s,a,this.itemSetting)},this.handleResizing=(t,e,o,i,n,s,a)=>{const r="ratio"===this.itemSetting.heightMode?l.utils.parseAspectRatio(this.itemSetting.aspectRatio)*i:n;this.props.onResizing(t,e,o,i,r,s,a)},this.moveUp=()=>{this.props.onMoveByKey(this.props.layoutItemId,0,-1)},this.moveDown=()=>{this.props.onMoveByKey(this.props.layoutItemId,0,1)},this.moveLeft=()=>{this.props.onMoveByKey(this.props.layoutItemId,-1,0)},this.moveRight=()=>{this.props.onMoveByKey(this.props.layoutItemId,1,0)}}getKeyboardComponent(){return Object(n.jsx)(n.Keyboard,{bindings:{up:this.moveUp,down:this.moveDown,left:this.moveLeft,right:this.moveRight}})}getPositionStyle(){var t,e;const{layoutItem:o,offsetX:i,offsetY:s,dw:a,dh:r,initRect:d,containerRect:c}=this.props;let u=Object(he.e)(o.bbox,this.itemSetting);const p=o.setting;null!=d&&(u=Object(he.f)(d,c,{dw:a,dh:"ratio"===this.itemSetting.heightMode?l.utils.parseAspectRatio(this.itemSetting.aspectRatio)*a:r,dx:i,dy:s},!0),(null==p?void 0:p.hCenter)&&"50%"===(null===(t=o.bbox)||void 0===t?void 0:t.left)&&(u.left="50%"),(null==p?void 0:p.vCenter)&&"50%"===(null===(e=o.bbox)||void 0===e?void 0:e.top)&&(u.top="50%"));const h=Object.assign(Object.assign({},u),Object(he.a)(o.bbox,this.itemSetting,Boolean(d)));return 0===a&&0===r||(h.right="auto"),n.css`
      position: absolute;
      transform: ${h.transform};
      left: ${l.utils.getValueOfBBox(h,"left")};
      right: ${l.utils.getValueOfBBox(h,"right")};
      top: ${l.utils.getValueOfBBox(h,"top")};
      bottom: ${l.utils.getValueOfBBox(h,"bottom")};
      width: ${l.utils.getValueOfBBox(h,"width")};
      height: ${l.utils.getValueOfBBox(h,"height")};
    `}render(){const{layoutId:t,layoutItem:e,isLayoutLockChildren:o,draggable:i=!0,resizable:s=!0}=this.props;if(null==e||e.isPending)return null;this.itemSetting=n.lodash.assign({},r.a,e.setting);const a=this.itemSetting.lockLayout,d=l.utils.parseAspectRatio(this.itemSetting.aspectRatio),c=Object(he.d)(this.itemSetting),u=l.utils.getLayoutItemSizeMode("width",e.bbox,this.itemSetting.autoProps),p=l.utils.getLayoutItemSizeMode("height",e.bbox,this.itemSetting.autoProps),h=l.utils.handleOnebyOneAnimation(this.props);return Object(n.jsx)(Qt,Object.assign({className:"d-flex",css:this.getPositionStyle(),layoutId:t,layoutItemId:e.id,restrict:this.itemSetting.lockParent||o,draggable:i&&!a,resizable:s&&!a,showDefaultTools:this.props.showDefaultTools,toolItems:pe,onResizeStart:this.props.onResizeStart,onResizing:this.handleResizing,onResizeEnd:this.handleResizeEnd,onClick:this.props.onClick,top:p!==l.LayoutItemSizeModes.Auto&&!c,bottom:p!==l.LayoutItemSizeModes.Auto&&!c,left:u!==l.LayoutItemSizeModes.Auto,right:u!==l.LayoutItemSizeModes.Auto,forceAspectRatio:c,aspectRatio:d,isInSection:this.props.isInSection},h),this.props.selected&&this.getKeyboardComponent())}}var fe=n.ReactRedux.connect((function(t,e){var o;let i=!1;const n=null===(o=t.appRuntimeInfo)||void 0===o?void 0:o.selection;return null!=n&&(i=n.layoutId===e.layoutId&&n.layoutItemId===e.layoutItemId),{selected:i}}))(ge);function me(t,e){var o,i,n,s;if(e.rect.top>t.rect.bottom||e.rect.bottom<t.rect.top)return!1;if(e.rect.right+5<t.rect.left&&null!=(null===(o=e.right)||void 0===o?void 0:o.value)&&null!=(null===(i=t.left)||void 0===i?void 0:i.value)){const o=e.right.usePercentage;if(o===t.left.usePercentage)return o||e.right.origin===t.left.origin}if(t.rect.right+5<e.rect.left&&null!=(null===(n=t.right)||void 0===n?void 0:n.value)&&null!=(null===(s=e.left)||void 0===s?void 0:s.value)){const o=e.left.usePercentage;if(o===t.right.usePercentage)return o||e.left.origin===t.right.origin}return!1}function ye(t,e){var o,i,n,s;if(e.rect.left>t.rect.right||e.rect.right<t.rect.left)return!1;if(e.rect.bottom+5<t.rect.top&&null!=(null===(o=e.bottom)||void 0===o?void 0:o.value)&&null!=(null===(i=t.top)||void 0===i?void 0:i.value)){const o=e.bottom.usePercentage;if(o===t.top.usePercentage)return o||e.bottom.origin===t.top.origin}if(t.rect.bottom+5<e.rect.top&&null!=(null===(n=t.bottom)||void 0===n?void 0:n.value)&&null!=(null===(s=e.top)||void 0===s?void 0:s.value)){const o=e.top.usePercentage;if(o===t.bottom.usePercentage)return o||e.top.origin===t.bottom.origin}return!1}function ve(t,e,o,i,s,a,r,d){if(null!=a&&null!=d){const c=Math.max(t.rect.top,e.rect.top),u=Math.min(t.rect.bottom,e.rect.bottom);a.setColor(n.polished.rgba(d.colors.palette.danger[800],.6));const p={left:s?e.rect.left-o:t.rect.right,top:c,width:o,height:u-c};if(a.drawRect(p),i){const i=(c+u)/2,p=t.right.usePercentage?n.utils.formatPercentageNumber(l.utils.toRatio(o,r)):n.utils.formatPixelNumber(o+"px");a.setColor(d.colors.palette.primary[600]),a.drawLine(s?e.rect.left-o:t.rect.right,i,s?e.rect.left:t.rect.right+o,i,!1,p)}}}function be(t,e,o,i,s,a,r,d){if(null!=a&&null!=d){const c=Math.max(t.rect.left,e.rect.left),u=Math.min(t.rect.right,e.rect.right);a.setColor(n.polished.rgba(d.colors.palette.danger[800],.6));const p={left:c,top:s?e.rect.top-o:t.rect.bottom,width:u-c,height:o};if(a.drawRect(p),i){const i=(c+u)/2,p=t.bottom.usePercentage?n.utils.formatPercentageNumber(l.utils.toRatio(o,r)):n.utils.formatPixelNumber(o+"px");a.setColor(d.colors.palette.primary[600]),a.drawLine(i,s?e.rect.top-o:t.rect.bottom,i,s?e.rect.top:t.rect.bottom+o,!1,p)}}}function Ie(t,e,o,i,s,a,r){var d,c,u,p,h;let g=0,f=0;const m=0!==o.w||0!==o.h;if(!m||0!==o.w){let s=function t(e,o){let i;return o.filter(t=>{var o,i;return(null===(o=t.right)||void 0===o?void 0:o.pixelValue)<(null===(i=e.left)||void 0===i?void 0:i.pixelValue)}).sort((t,e)=>e.right.pixelValue-t.right.pixelValue).some(t=>{if(me(e,t))return i={value:t},!0}),null!=i&&(i.next=t(i.value,o)),i}(t,e);s=function(t,e){const o={id:"",right:{value:e?"0%":"0px",pixelValue:0,usePercentage:e,origin:0,from:Number.NEGATIVE_INFINITY,to:Number.POSITIVE_INFINITY},rect:{left:-100,width:100,right:0,top:Number.NEGATIVE_INFINITY,bottom:Number.POSITIVE_INFINITY}};if(null==t)return{value:o};let i=t;for(;null!=i.next;)i=i.next;return i.next={value:o},t}(s,null==(null===(d=t.left)||void 0===d?void 0:d.value)||(null===(c=t.left)||void 0===c?void 0:c.usePercentage));let p=function t(e,o){let i;return o.filter(t=>{var o,i;return(null===(o=t.left)||void 0===o?void 0:o.pixelValue)>(null===(i=e.right)||void 0===i?void 0:i.pixelValue)}).sort((t,e)=>t.left.pixelValue-e.left.pixelValue).some(t=>{if(me(e,t))return i={value:t},!0}),null!=i&&(i.next=t(i.value,o)),i}(t,e);p=function(t,e,o){const i={id:"",left:{value:e?"0%":"0px",pixelValue:o,usePercentage:e,origin:1,from:Number.NEGATIVE_INFINITY,to:Number.POSITIVE_INFINITY},rect:{left:o,width:100,right:o+100,top:Number.NEGATIVE_INFINITY,bottom:Number.POSITIVE_INFINITY}};if(null==t)return{value:i};let n=t;for(;null!=n.next;)n=n.next;return n.next={value:i},t}(p,null==(null===(u=t.right)||void 0===u?void 0:u.value)||t.right.usePercentage,i),g=function(t,e,o,i,n,s){if(e.gridline.rect.top===Number.NEGATIVE_INFINITY&&o.gridline.rect.top===Number.NEGATIVE_INFINITY||null==t.left||null==t.right)return 0;const a=t.left.pixelValue-e.gridline.right.pixelValue,r=o.gridline.left.pixelValue-t.right.pixelValue,l=e.fixed||o.fixed?5:10;if(Math.abs(r-a)<l){let l,d;return l=e.fixed||o.fixed?r-a:(r-a)/2,d=e.fixed?a:o.fixed?r:a+l,ve(e.gridline,t,d,!1,!1,i,n,s),ve(t,o.gridline,d,!1,!0,i,n,s),l}return 0}(t,{gridline:s.value,fixed:0!==o.w&&0===o.x},{gridline:p.value,fixed:0!==o.w&&0!==o.x},a,i,r),0!==g||0!==o.w&&0===o.x||(g=function(t,e,o,i,n){if(null==(null==e?void 0:e.next))return 0;const s=t.rect.left-e.value.rect.right;let a=e,r=-1;for(;null!=a.next;){const t=a.next,e=a.value.rect.left-t.value.rect.right;-1===r?Math.abs(e-s)<=5&&(r=e,ve(t.value,a.value,r,!0,!1,o,i,n)):e===r&&ve(t.value,a.value,r,!0,!1,o,i,n),a=t}if(r>0){const a=r-s;return ve(e.value,t,r,!1,!1,o,i,n),a}return 0}(t,s,a,i,r)),0!==g||0!==o.w&&0!==o.x||(g=function(t,e,o,i,n){if(null==(null==e?void 0:e.next))return 0;const s=e.value.rect.left-t.rect.right;let a=e,r=-1;for(;null!=a.next;){const t=a.next,e=t.value.rect.left-a.value.rect.right;-1===r?Math.abs(e-s)<=5&&(r=e,ve(a.value,t.value,r,!0,!0,o,i,n)):e===r&&ve(a.value,t.value,r,!0,!0,o,i,n),a=t}if(r>0){const a=s-r;return ve(t,e.value,r,!1,!0,o,i,n),a}return 0}(t,p,a,i,r)),function(t,e,o,i,s,a,r,d){var c;if(null!=a&&null!=d){a.setColor(d.colors.palette.primary[600]);let u=(null===(c=e.gridline)||void 0===c?void 0:c.rect.top)===Number.NEGATIVE_INFINITY;const p=e.gridline.rect;if(null!=p&&null!=t.left&&(!u||i&&!e.fixed)){const o=(Math.max(t.rect.top,p.top)+Math.min(t.rect.bottom,p.bottom))/2,i=t.left.usePercentage;let d=t.rect.left-p.right;e.fixed||(d+=s);const c=i?n.utils.formatPercentageNumber(l.utils.toRatio(d,r)):n.utils.formatPixelNumber(d+"px");a.drawLine(p.right,o,p.right+d,o,!1,c)}u=o.gridline.rect.top===Number.NEGATIVE_INFINITY;const h=o.gridline.rect;if(null!=h&&null!=t.right&&(!u||i&&!o.fixed)){const e=(Math.max(t.rect.top,h.top)+Math.min(t.rect.bottom,h.bottom))/2,i=t.right.usePercentage;let d=h.left-t.rect.right;o.fixed||(d-=s);const c=i?n.utils.formatPercentageNumber(l.utils.toRatio(d,r)):n.utils.formatPixelNumber(d+"px");a.drawLine(h.left,e,h.left-d,e,!1,c)}}}(t,{gridline:s.value,fixed:0!==o.w&&0===o.x},{gridline:p.value,fixed:0!==o.w&&0!==o.x},0!==o.w,g,a,i,r)}if(!m||0!==o.h){let i=function t(e,o){let i;return o.filter(t=>{var o,i;return(null===(o=t.bottom)||void 0===o?void 0:o.pixelValue)<(null===(i=e.top)||void 0===i?void 0:i.pixelValue)}).sort((t,e)=>e.bottom.pixelValue-t.bottom.pixelValue).some(t=>{if(ye(e,t))return i={value:t},!0}),null!=i&&(i.next=t(i.value,o)),i}(t,e);i=function(t,e){const o={id:"",bottom:{value:e?"0%":"0px",pixelValue:0,usePercentage:e,origin:0,from:Number.NEGATIVE_INFINITY,to:Number.POSITIVE_INFINITY},rect:{top:-100,height:100,bottom:0,left:Number.NEGATIVE_INFINITY,right:Number.POSITIVE_INFINITY}};if(null==t)return{value:o};let i=t;for(;null!=i.next;)i=i.next;return i.next={value:o},t}(i,null==(null===(p=t.top)||void 0===p?void 0:p.value)||t.top.usePercentage);let d=function t(e,o){let i;return o.filter(t=>{var o,i;return(null===(o=t.top)||void 0===o?void 0:o.pixelValue)>(null===(i=e.bottom)||void 0===i?void 0:i.pixelValue)}).sort((t,e)=>t.top.pixelValue-e.top.pixelValue).some(t=>{if(ye(e,t))return i={value:t},!0}),null!=i&&(i.next=t(i.value,o)),i}(t,e);d=function(t,e,o){const i={id:"",top:{value:e?"0%":"0px",pixelValue:o,usePercentage:e,origin:1,from:Number.NEGATIVE_INFINITY,to:Number.POSITIVE_INFINITY},rect:{top:o,height:100,bottom:o+100,left:Number.NEGATIVE_INFINITY,right:Number.POSITIVE_INFINITY}};if(null==t)return{value:i};let n=t;for(;null!=n.next;)n=n.next;return n.next={value:i},t}(d,null==(null===(h=t.bottom)||void 0===h?void 0:h.value)||t.bottom.usePercentage,s),f=function(t,e,o,i,n,s){if(e.gridline.rect.left===Number.NEGATIVE_INFINITY&&o.gridline.rect.left===Number.NEGATIVE_INFINITY||null==t.top||null==t.bottom)return 0;const a=t.top.pixelValue-e.gridline.bottom.pixelValue,r=o.gridline.top.pixelValue-t.bottom.pixelValue,l=e.fixed||o.fixed?5:10;if(Math.abs(r-a)<l){let l,d;return l=e.fixed||o.fixed?r-a:(r-a)/2,d=e.fixed?a:o.fixed?r:a+l,be(e.gridline,t,d,!1,!1,i,n,s),be(t,o.gridline,d,!1,!0,i,n,s),l}return 0}(t,{gridline:i.value,fixed:0!==o.h&&0===o.y},{gridline:d.value,fixed:0!==o.h&&0!==o.y},a,s,r),0!==f||0!==o.h&&0===o.y||(f=function(t,e,o,i,n){if(null==(null==e?void 0:e.next))return 0;const s=t.rect.top-e.value.rect.bottom;let a=e,r=-1;for(;null!=a.next;){const t=a.next,e=a.value.rect.top-t.value.rect.bottom;-1===r?Math.abs(e-s)<=5&&(r=e,be(t.value,a.value,r,!0,!1,o,i,n)):e===r&&be(t.value,a.value,r,!0,!1,o,i,n),a=t}if(r>0){const a=r-s;return be(e.value,t,r,!1,!1,o,i,n),a}return 0}(t,i,a,s,r)),0!==f||0!==o.h&&0!==o.y||(f=function(t,e,o,i,n){if(null==(null==e?void 0:e.next))return 0;const s=e.value.rect.top-t.rect.bottom;let a=e,r=-1;for(;null!=a.next;){const t=a.next,e=t.value.rect.top-a.value.rect.bottom;-1===r?Math.abs(e-s)<=5&&(r=e,be(a.value,t.value,r,!0,!0,o,i,n)):e===r&&be(a.value,t.value,r,!0,!0,o,i,n),a=t}if(r>0){const a=s-r;return be(t,e.value,r,!1,!0,o,i,n),a}return 0}(t,d,a,s,r)),function(t,e,o,i,s,a,r,d){if(null!=a&&null!=d){a.setColor(d.colors.palette.primary[600]);let c=e.gridline.rect.left===Number.NEGATIVE_INFINITY;const u=e.gridline.rect;if(null!=u&&null!=t.top&&(!c||i&&!e.fixed)){const o=(Math.max(t.rect.left,u.left)+Math.min(t.rect.right,u.right))/2,i=t.top.usePercentage;let d=t.rect.top-u.bottom;e.fixed||(d+=s);const c=i?n.utils.formatPercentageNumber(l.utils.toRatio(d,r)):n.utils.formatPixelNumber(d+"px");a.drawLine(o,u.bottom,o,u.bottom+d,!1,c)}c=o.gridline.rect.left===Number.NEGATIVE_INFINITY;const p=o.gridline.rect;if(null!=p&&null!=t.bottom&&(!c||i&&!o.fixed)){const e=(Math.max(t.rect.left,p.left)+Math.min(t.rect.right,p.right))/2,i=t.bottom.usePercentage;let d=p.top-t.rect.bottom;o.fixed||(d-=s);const c=i?n.utils.formatPercentageNumber(l.utils.toRatio(d,r)):n.utils.formatPixelNumber(d+"px");a.drawLine(e,p.top,e,p.top-d,!1,c)}}}(t,{gridline:null==i?void 0:i.value,fixed:0!==o.h&&0===o.y},{gridline:null==d?void 0:d.value,fixed:0!==o.y&&0!==o.y},0!==o.h,f,a,s,r)}return{dx:g,dy:f}}function xe(t,e){return Math.abs(e.pixelValue-t.pixelValue)}function we(t,e,o){if(t.pixelValue+e===o.pixelValue){const e=o.usePercentage;if(e===t.usePercentage)return e||o.origin===t.origin}return!1}function je(t,e){return e.filter(e=>function(t,e){if(xe(e,t)<20){const o=e.usePercentage;if(o===t.usePercentage)return o||e.origin===t.origin}return!1}(t,e)).sort((e,o)=>xe(e,t)-xe(o,t))}function Se(t,e,o,i,n,s,a){let r=0,l=0;if(!i&&!n)return{dx:r,dy:l};let d=[],c=[];if(e.forEach(e=>{if(i){const i=[e.left,e.xm,e.right].filter(i=>{var n,s,a;if(null!=i)return i.from=null!==(n=e.rect.top)&&void 0!==n?n:e.rect.bottom,i.to=e.rect.top>=0&&e.rect.bottom>=0?e.rect.bottom:t.rect.top,0!==o.w?0===o.x?i.pixelValue>=(null===(s=t.right)||void 0===s?void 0:s.pixelValue):i.pixelValue<=(null===(a=t.left)||void 0===a?void 0:a.pixelValue):0===o.h});d=d.concat(i)}if(n){const i=[e.top,e.ym,e.bottom].filter(i=>{var n,s,a;if(null!=i)return i.from=null!==(n=e.rect.left)&&void 0!==n?n:e.rect.right,i.to=e.rect.left>=0&&e.rect.right>=0?e.rect.right:t.rect.left,0!==o.h?0===o.y?i.pixelValue>=(null===(s=t.bottom)||void 0===s?void 0:s.pixelValue):i.pixelValue<=(null===(a=t.top)||void 0===a?void 0:a.pixelValue):0===o.w});c=c.concat(i)}}),i){const e=[t.left,t.xm,t.right];e.some(t=>{if(null!=t){const o=je(t,d);if((null==o?void 0:o.length)>0){null!=s&&null!=a&&o.forEach(t=>function(t,e,o){null!=e&&null!=o&&(e.setColor(o.colors.palette.danger[500]),e.drawLine(t.pixelValue,t.from,t.pixelValue,t.to,!0))}(t,s,a));const i=o[0];if(xe(i,t)<=5)return r=i.pixelValue-t.pixelValue,function(t,e,o,i,n){null!=i&&null!=n&&(i.setColor(n.colors.palette.danger[500]),t.forEach(t=>{if(null!=t){let n=t.from,s=t.to,a=!1;if(e.forEach(e=>{we(t,o,e)&&(n=Math.min(n,e.from),s=Math.max(s,e.to),a=!0)}),a){const e=t.pixelValue+o;i.drawLine(e,n,e,s)}}}))}(e,d,r,s,a),!0}}})}if(n){const e=[t.top,t.ym,t.bottom];e.some(t=>{if(null!=t){const o=je(t,c);if((null==o?void 0:o.length)>0){null!=s&&null!=a&&o.forEach(t=>function(t,e,o){null!=e&&null!=o&&(e.setColor(o.colors.palette.danger[500]),e.drawLine(t.from,t.pixelValue,t.to,t.pixelValue,!0))}(t,s,a));const i=o[0];if(xe(i,t)<=5)return l=i.pixelValue-t.pixelValue,function(t,e,o,i,n){null!=i&&null!=n&&(i.setColor(n.colors.palette.danger[500]),t.forEach(t=>{if(null!=t){let n=t.from,s=t.to,a=!1;if(e.forEach(e=>{we(t,o,e)&&(n=Math.min(n,e.from),s=Math.max(s,e.to),a=!0)}),a){const e=t.pixelValue+o;i.drawLine(n,e,s,e)}}}))}(e,c,l,s,a),!0}}})}return{dx:r,dy:l}}var Ce=o(4);var Oe;function Re(t,e=!1){const o={};if(["left","right","width","top","bottom","height"].forEach(e=>{null!=(null==t?void 0:t[e])?o[e]=l.utils.isPercentage(t[e])?"%":"px":o[e]="%"}),e){const t=o.left;o.left=o.right,o.right=t}return o}function Me(t,e){const o=t.top,i=e.height-(t.top+t.height),n=t.left;return[e.width-(t.left+t.width)<n?1:0,i<o?1:0]}function Te(t,e){return l.utils.isPercentage(t)?Math.round(l.utils.fromRatio(t,e)):Math.round(parseFloat(t))}function Ae(t,e,o){var i,n,s,a,r,d,c,u,p;const h=t.bbox,g=Re(h,Object(Ce.isRTL)()),f=null!==(i=t.setting)&&void 0!==i?i:{},m=function(t,e,o){var i,n,s;const a={},r=null!==(i=t.bbox)&&void 0!==i?i:{},d=null!==(s=null===(n=t.setting)||void 0===n?void 0:n.autoProps)&&void 0!==s?s:{};return d.width===l.LayoutItemSizeModes.Stretch?(a.left=Te(r.left,e),a.right=e-Te(r.right,e),a.width=a.right-a.left):d.width===l.LayoutItemSizeModes.Auto?d.left?a.right=e-Te(r.right,e):a.left=Te(r.left,e):(a.width=Te(r.width,e),d.left?(a.right=e-Te(r.right,e),a.left=a.right-a.width):(a.left=Te(r.left,e),a.right=a.left+a.width)),d.height===l.LayoutItemSizeModes.Stretch?(a.top=Te(r.top,o),a.bottom=o-Te(r.bottom,o),a.height=a.bottom-a.top):d.height===l.LayoutItemSizeModes.Auto?d.top?a.bottom=o-Te(r.bottom,o):a.top=Te(r.top,o):(a.height=Te(r.height,o),d.top?(a.bottom=o-Te(r.bottom,o),a.top=a.bottom-a.height):(a.top=Te(r.top,o),a.bottom=a.top+a.height)),a}(t,e,o),y={id:t.id,rect:m},v=t=>l.utils.isPercentage(t)?100-parseFloat(t)+"%":t,b=t=>l.utils.isPercentage(t)?100-parseFloat(t)+"%":e-parseFloat(t)+"px",I={value:h.left,pixelValue:m.left,usePercentage:"%"===g.left,origin:0},x={value:h.top,pixelValue:m.top,usePercentage:"%"===g.top,origin:0},w={value:v(h.right),pixelValue:m.right,usePercentage:"%"===g.right,origin:1},j={value:v(h.bottom),pixelValue:m.bottom,usePercentage:"%"===g.bottom,origin:1};if((null===(n=f.autoProps)||void 0===n?void 0:n.width)===l.LayoutItemSizeModes.Stretch)y.left=I,y.right=w,g.left===g.right&&"%"===g.left&&(y.xm={value:(parseFloat(y.left.value)+parseFloat(y.right.value))/2+"%",pixelValue:(m.left+m.right)/2,usePercentage:"%"===g.left});else if((null===(s=f.autoProps)||void 0===s?void 0:s.width)===l.LayoutItemSizeModes.Auto)(null===(a=f.autoProps)||void 0===a?void 0:a.left)?y.right=w:y.left=I;else if(null===(r=f.autoProps)||void 0===r?void 0:r.left){if(y.right=w,g.right===g.width){const t=parseFloat(h.right),e=parseFloat(h.width),o="px"===g.right?t+e:100-(t+e),i="px"===g.right?t+e/2:100-(t+e/2);y.left={value:`${o}${g.right}`,pixelValue:m.left,usePercentage:"%"===g.right,origin:1},y.xm={value:`${i}${g.right}`,pixelValue:m.left+m.width/2,usePercentage:"%"===g.right,origin:1}}}else if(y.left=I,g.left===g.width){const t=parseFloat(h.left),e=parseFloat(h.width),o=t+e;y.right={value:`${o}${g.left}`,pixelValue:m.right,usePercentage:"%"===g.left,origin:0},y.xm={value:`${t+e/2}${g.left}`,pixelValue:m.left+m.width/2,usePercentage:"%"===g.left,origin:0}}if(Object(Ce.isRTL)()){let t,o,i;y.rect.left=e-y.rect.right,y.rect.right=y.rect.left+y.rect.width,null!=y.left&&(o={value:b(y.left.value),pixelValue:y.rect.right,usePercentage:"%"===g.left,origin:0===y.left.origin?1:0}),null!=y.right&&(t={value:b(y.right.value),pixelValue:y.rect.left,usePercentage:"%"===g.right,origin:0===y.right.origin?1:0}),null!=y.xm&&(i={value:b(y.xm.value),pixelValue:y.rect.left+y.rect.width/2,usePercentage:y.xm.usePercentage,origin:0===y.xm.origin?1:0}),y.right=o,y.left=t,y.xm=i}if((null===(d=f.autoProps)||void 0===d?void 0:d.height)===l.LayoutItemSizeModes.Stretch)y.top=x,y.bottom=j,g.top===g.bottom&&"%"===g.top&&(y.ym={value:(parseFloat(y.top.value)+parseFloat(y.bottom.value))/2+"%",pixelValue:(m.top+m.bottom)/2,usePercentage:"%"===g.top});else if((null===(c=f.autoProps)||void 0===c?void 0:c.height)===l.LayoutItemSizeModes.Auto)(null===(u=f.autoProps)||void 0===u?void 0:u.top)?y.bottom=j:y.top=x;else if(null===(p=f.autoProps)||void 0===p?void 0:p.top){if(y.bottom=j,g.bottom===g.height){const t=parseFloat(h.bottom),e=parseFloat(h.height),o="px"===g.bottom?t+e:100-(t+e),i="px"===g.bottom?t+e/2:100-(t+e/2);y.top={value:`${o}${g.bottom}`,pixelValue:m.top,usePercentage:"%"===g.bottom,origin:1},y.ym={value:`${i}${g.bottom}`,pixelValue:m.top+m.height/2,usePercentage:"%"===g.bottom,origin:1}}}else if(y.top=x,g.top===g.height){const t=parseFloat(h.top),e=parseFloat(h.height),o=t+e;y.bottom={value:`${o}${g.top}`,pixelValue:m.bottom,usePercentage:"%"===g.top,origin:0},y.ym={value:`${t+e/2}${g.top}`,pixelValue:m.top+m.height/2,usePercentage:"%"===g.top,origin:0}}return y}function Pe(t,e,o,i){var n;const s=[];Object.keys(null!==(n=t.content)&&void 0!==n?n:{}).forEach(n=>{if(n!==i){const i=t.content[n];if(!i.isPending){const t=Ae(i,e,o);s.push(t)}}});const a={left:0,right:e,width:e,top:0,bottom:o,height:o};return s.push({id:"",left:{value:"0px",pixelValue:0,usePercentage:!1,origin:0,from:0,to:o},right:{value:"0px",pixelValue:e,usePercentage:!1,origin:1,from:0,to:o},top:{value:"0px",pixelValue:0,origin:0,usePercentage:!1,from:0,to:e},bottom:{value:"0px",pixelValue:o,usePercentage:!1,origin:1,from:0,to:e},rect:a}),s.push({id:"",left:{value:"0%",pixelValue:0,usePercentage:!0,origin:0,from:0,to:o},xm:{value:"50%",pixelValue:Math.round(e/2),usePercentage:!0,origin:0,from:0,to:o},right:{value:"0%",pixelValue:e,usePercentage:!0,origin:1,from:0,to:o},top:{value:"0%",pixelValue:0,usePercentage:!0,origin:0,from:0,to:e},ym:{value:"50%",pixelValue:Math.round(o/2),usePercentage:!0,origin:0,from:0,to:e},bottom:{value:"0%",pixelValue:o,usePercentage:!0,origin:1,from:0,to:e},rect:a}),s}function Le(t,e,o,i,n,s,a,r){var d,c;const u=null!==(d=null==t?void 0:t.setting)&&void 0!==d?d:{},p=null!==(c=null==t?void 0:t.bbox)&&void 0!==c?c:{},h=0!==i.w||0!==i.h;if(h&&(u.hCenter&&"50%"===p.left||u.vCenter&&"50%"===p.top))return i;let g=function(t,e){if(0!==e.w||0!==e.h){const o={x:e.x,y:e.y,w:e.w,h:e.h};return t.width+e.w<16&&(o.w=16-t.width,0!==e.x&&(o.x=-o.w)),t.height+e.h<16&&(o.h=16-t.height,0!==e.y&&(o.y=-o.h)),o}return e}(o,i);n&&(g=function(t,e){if(0===e.w&&0===e.h)return e;const o=t.height/t.width;let i=e.w,n=e.h,s=e.x,a=e.y;Math.abs(i)*o>Math.abs(n)?n=Math.round(i*o):i=Math.round(n/o);0!==s&&(s=-i);0!==a&&(a=-n);return{x:s,y:a,w:i,h:n}}(o,g));const f=function(t,e,o,i,n){var s,a,r,d,c,u,p;const{x:h,y:g,w:f,h:m}=null!=n?n:{x:0,y:0,w:0,h:0},y=null!==(s=null==t?void 0:t.setting)&&void 0!==s?s:{},v={left:Math.round(e.left+h),width:Math.round(e.width+f),right:0,top:Math.round(e.top+g),height:Math.round(e.height+m),bottom:0};v.right=v.left+v.width,v.bottom=v.top+v.height;const b={id:null==t?void 0:t.id,rect:v},I=Me(v,{width:o,height:i}),x=Re(null==t?void 0:t.bbox,Object(Ce.isRTL)());if(Object(Ce.isRTL)()){const t=x.left;x.left=x.right,x.right=t}return(null===(a=y.autoProps)||void 0===a?void 0:a.width)===l.LayoutItemSizeModes.Stretch?(b.left={value:"1"+x.left,pixelValue:v.left,usePercentage:"%"===x.left,origin:I[0],from:v.top,to:v.bottom},b.right={value:"1"+x.right,pixelValue:v.left+v.width,usePercentage:"%"===x.right,origin:I[1],from:v.top,to:v.bottom}):0===I[0]?(b.left={value:"1"+x.left,pixelValue:v.left,usePercentage:"%"===x.left,origin:I[0],from:v.top,to:v.bottom},x.width===x.left&&(null===(r=y.autoProps)||void 0===r?void 0:r.width)!==l.LayoutItemSizeModes.Auto&&(b.xm={value:"1"+x.left,pixelValue:v.left+v.width/2,usePercentage:"%"===x.left,origin:I[0],from:v.top,to:v.bottom},b.right={value:"1"+x.left,pixelValue:v.left+v.width,usePercentage:"%"===x.left,origin:I[0],from:v.top,to:v.bottom})):(b.right={value:"1"+x.right,pixelValue:v.left+v.width,usePercentage:"%"===x.right,origin:I[0],from:v.top,to:v.bottom},x.width===x.right&&(null===(d=y.autoProps)||void 0===d?void 0:d.width)!==l.LayoutItemSizeModes.Auto&&(b.xm={value:"1"+x.right,pixelValue:v.left+v.width/2,usePercentage:"%"===x.right,origin:I[0],from:v.top,to:v.bottom},b.left={value:"1"+x.right,pixelValue:v.left,usePercentage:"%"===x.right,origin:I[0],from:v.top,to:v.bottom})),(null===(c=y.autoProps)||void 0===c?void 0:c.height)===l.LayoutItemSizeModes.Stretch?(b.top={value:"1"+x.top,pixelValue:v.top,usePercentage:"%"===x.top,origin:I[1],from:v.left,to:v.right},b.bottom={value:"1"+x.bottom,pixelValue:v.top+v.height,usePercentage:"%"===x.bottom,origin:I[1],from:v.left,to:v.right}):0===I[1]?(b.top={value:"1"+x.top,pixelValue:v.top,usePercentage:"%"===x.top,origin:I[1],from:v.left,to:v.right},x.height===x.top&&(null===(u=y.autoProps)||void 0===u?void 0:u.height)!==l.LayoutItemSizeModes.Auto&&(b.ym={value:"1"+x.top,pixelValue:v.top+v.height/2,usePercentage:"%"===x.top,origin:I[1],from:v.left,to:v.right},b.bottom={value:"1"+x.top,pixelValue:v.top+v.height,usePercentage:"%"===x.top,origin:I[1],from:v.left,to:v.right})):(b.bottom={value:"1"+x.bottom,pixelValue:v.top+v.height,usePercentage:"%"===x.bottom,origin:I[1],from:v.left,to:v.right},x.height===x.bottom&&(null===(p=y.autoProps)||void 0===p?void 0:p.height)!==l.LayoutItemSizeModes.Auto&&(b.ym={value:"1"+x.bottom,pixelValue:v.top+v.height/2,usePercentage:"%"===x.bottom,origin:I[1],from:v.left,to:v.right},b.top={value:"1"+x.bottom,pixelValue:v.top,usePercentage:"%"===x.bottom,origin:I[1],from:v.left,to:v.right})),b}(t,o,e.width,e.height,g);let{dx:m,dy:y}=Ie(f,s,g,e.width,e.height,a,r);const v=Se(f,s,g,0===m&&(!h||0!==i.w),0===y&&(!h||0!==i.h),a,r);m=0!==m?m:v.dx,y=0!==y?y:v.dy;let b=g;return 0===m&&0===y||(b=function(t,e,o){let i,n,{x:s,y:a,w:r,h:l}=t;i=0===r?Oe.None:0===s?Oe.Start:Oe.End;n=0===l?Oe.None:0===a?Oe.Start:Oe.End;0!==e&&(i===Oe.None?s+=e:i===Oe.End?(s+=e,r+=-e):r+=e);0!==o&&(n===Oe.None?a+=o:n===Oe.End?(a+=o,l+=-o):l+=o);return{x:s,y:a,w:r,h:l}}(g,m,y)),b}!function(t){t[t.Start=0]="Start",t[t.End=1]="End",t[t.None=2]="None"}(Oe||(Oe={}));const ze=o(45),ke=n.css`
  pointer-events: all;
`;function Ne(t){return n.css`
    position: relative;
    height: 200px;
    padding: 1rem;
    pointer-events: none;
    z-index: 1;
    .btn-text {
      line-height: 32px;
    }
    .btn {
      background: ${t.colors.palette.light[600]};
      &:hover {
        background: ${t.colors.palette.light[800]};
      }
    }
    .action-item {
      width: 32px;
    }
    .action-seprator {
      width: 300px;
      height: 1px;
      background-color: ${t.colors.palette.dark[800]};
    }
  `}function Be(t){const{pageContext:e,onPageTemplateSelected:o}=t,{builderTheme:i,formatMessage:s,isHeader:r,isFooter:l}=e,[d,c]=n.React.useState(!1),u=n.React.useRef(null),p=n.ReactRedux.useSelector(t=>{var e,o,i;const s=null!==(i=null===(o=null===(e=t.appConfig)||void 0===e?void 0:e.forBuilderAttributes)||void 0===o?void 0:o.lockLayout)&&void 0!==i&&i;return t.appRuntimeInfo.appMode===n.AppMode.Design&&!s}),h=()=>{c(!1)};let g;return g=e.isHeader?s("chooseHeaderTemplate"):e.isFooter?s("chooseFooterTemplate"):s("chooseTemplate",{type:e.isDialog?s("dialog").toLocaleLowerCase():s("page").toLocaleLowerCase()}),p?Object(n.jsx)("div",{className:"d-flex w-100 flex-column justify-content-center align-items-center",css:Ne(i)},Object(n.jsx)("div",{className:"d-flex flex-column justify-content-center align-items-center"},Object(n.jsx)(a.Tooltip,{placement:"bottom",title:g},Object(n.jsx)("div",{className:"action-item",ref:u},Object(n.jsx)(a.Button,{icon:!0,onClick:t=>{t.stopPropagation(),c(!d)},css:ke,className:"rounded-circle"},Object(n.jsx)(a.Icon,{icon:ze,size:16,color:i.colors.palette.dark[800]})))),Object(n.jsx)("div",{className:"action-seprator mt-3"}),Object(n.jsx)("h5",{className:"btn-text mt-2"},s("dropWidgetToAdd"))),d&&!e.isDialog&&Object(n.jsx)(Tt.PageTemplatePopper,{isHeader:r,isFooter:l,theme:i,pageMode:n.PageMode.FitWindow,referenceElement:u.current,formatMessage:s,onItemSelect:o,onClose:h}),d&&e.isDialog&&Object(n.jsx)(Tt.DialogTemplatePopper,{theme:i,referenceElement:u.current,formatMessage:s,onItemSelect:o,onClose:h})):null}class $e{constructor(t,e){this.canvas=t,this.ctx=t.getContext("2d"),this.ctx.font="1rem",this.theme=e}setSize(t,e,o=1){const i=Math.round(e*o),n=Math.round(t*o);o<1?(this.canvas.style.width=t+"px",this.canvas.style.height=e+"px",this.canvas.width=t,this.canvas.height=e,this.ctx.scale(1,1)):this.canvas.width===n&&this.canvas.height===i||(this.canvas.style.width=t+"px",this.canvas.style.height=e+"px",this.canvas.width=n,this.canvas.height=i,this.ctx.scale(o,o))}setColor(t){this.ctx.fillStyle=t,this.ctx.strokeStyle=t}drawRect(t){this.ctx.fillRect(t.left,t.top,t.width,t.height)}drawLine(t,e,o,i,n=!1,s){if(n?this.ctx.setLineDash([5,3]):this.ctx.setLineDash([]),this.ctx.beginPath(),t===o){let n=t<this.canvas.width/2?.5:-.5;n=Number.isInteger(t)?n:0,this.ctx.moveTo(t+n,e),this.ctx.lineTo(o+n,i)}if(e===i){let n=e<this.canvas.height/2?.5:-.5;n=Number.isInteger(e)?n:0,this.ctx.moveTo(t,e+n),this.ctx.lineTo(o,i+n)}if(this.ctx.stroke(),null!=s){const n=(t+o)/2,a=(e+i)/2;this.drawLabel(n,a,s,e===i)}}drawTailedLine(t,e,o,i,n=!1,s){if(n?this.ctx.setLineDash([5,3]):this.ctx.setLineDash([]),this.ctx.beginPath(),t===o){let n=t<this.canvas.width/2?.5:-.5;n=Number.isInteger(t)?n:0;const s=Math.min(e,i);let a=s<this.canvas.height/2?.5:-.5;a=Number.isInteger(s)?a:0;const r=Math.max(e,i);let l=r<this.canvas.height/2?.5:-.5;l=Number.isInteger(r)?l:0,this.ctx.moveTo(t+n,e),this.ctx.lineTo(o+n,i),this.ctx.moveTo(t-5,s+a),this.ctx.lineTo(t+5,s+a),this.ctx.moveTo(o-5,r+l),this.ctx.lineTo(o+5,r+l)}if(e===i){let n=e<this.canvas.height/2?.5:-.5;n=Number.isInteger(e)?n:0;const s=Math.min(t,o);let a=s<this.canvas.width/2?.5:-.5;a=Number.isInteger(s)?a:0;const r=Math.max(t,o);let l=r<this.canvas.width/2?.5:-.5;l=Number.isInteger(r)?l:0,this.ctx.moveTo(t,e+n),this.ctx.lineTo(o,i+n),this.ctx.moveTo(s+a,e-5),this.ctx.lineTo(s+a,e+5),this.ctx.moveTo(r+l,i-5),this.ctx.lineTo(r+l,i+5)}if(this.ctx.stroke(),null!=s){const n=(t+o)/2,a=(e+i)/2;this.drawLabel(n,a,s,e===i)}}drawLabel(t,e,o,i=!0){const n=this.ctx.measureText(o),s=n.width,a=n.actualBoundingBoxAscent+n.actualBoundingBoxDescent,r=s+8,d=a+8,c=l.utils.isRTL()?-1:1;this.ctx.save(),this.theme?this.ctx.fillStyle=this.theme.colors.palette.primary[500]:this.ctx.fillStyle="var(--primary-500)",i?(this.drawRoundRect(t-r/2,e-d-8,r,d),this.ctx.fillStyle="#FFFFFF",this.ctx.fillText(o,t-s*c/2,e-12)):(this.drawRoundRect(t+8,e-d/2,r,d),this.ctx.fillStyle="#FFFFFF",-1===c?this.ctx.fillText(o,t+s+12,e+a/2):this.ctx.fillText(o,t+12,e+a/2)),this.ctx.restore()}drawRoundRect(t,e,o,i,n=2){const s=n,a=n,r=n,l=n;this.ctx.beginPath(),this.ctx.moveTo(t+s,e),this.ctx.lineTo(t+o-a,e),this.ctx.quadraticCurveTo(t+o,e,t+o,e+a),this.ctx.lineTo(t+o,e+i-l),this.ctx.quadraticCurveTo(t+o,e+i,t+o-l,e+i),this.ctx.lineTo(t+r,e+i),this.ctx.quadraticCurveTo(t,e+i,t,e+i-r),this.ctx.lineTo(t,e+s),this.ctx.quadraticCurveTo(t,e,t+s,e),this.ctx.closePath(),this.ctx.fill()}clear(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)}}var Ee=function(t,e,o,i){return new(o||(o=Promise))((function(n,s){function a(t){try{l(i.next(t))}catch(t){s(t)}}function r(t){try{l(i.throw(t))}catch(t){s(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,r)}l((i=i.apply(t,e||[])).next())}))};const De=n.css`
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  background: transparent;
`,Fe=n.css`
  ${De};
  pointer-events: none;
`;class Ve extends n.React.PureComponent{constructor(t){var e;if(super(t),this.handleMouseDown=t=>{this.mousedownX=t.screenX,this.mousedownY=t.screenY},this.updateDeviceRatio=()=>{this.canvasPane.setSize(this.ref.clientWidth,this.ref.clientHeight,window.devicePixelRatio)},this.handleMoveItemByKey=(t,e,o)=>{var i,a,r;const{layout:d}=this.props;let c,u,p=d.content[t].bbox,h=null!==(i=d.content[t].setting)&&void 0!==i?i:Object(n.Immutable)({});const g=null!==(a=null==h?void 0:h.hCenter)&&void 0!==a&&a||null!==(r=null==h?void 0:h.vCenter)&&void 0!==r&&r;if(g){const e=this.ref.querySelector(`div[data-layoutitemid="${t}"]`);c=e.clientWidth,u=e.clientHeight}if(0!==e){if(l.utils.isPercentage(p.left)){const t=parseFloat(p.left);p=(null==h?void 0:h.hCenter)?p.set("left",(50-100*c/2/this.ref.clientWidth+.1*e).toFixed(1)+"%"):p.set("left",(t+.1*e).toFixed(1)+"%")}else{const t=parseFloat(p.left);p=(null==h?void 0:h.hCenter)?p.set("left",(this.ref.clientWidth-c)/2+e+"px"):p.set("left",t+e+"px")}if(l.utils.isPercentage(p.right)){const t=parseFloat(p.right);p=(null==h?void 0:h.hCenter)?p.set("right",(50+100*c/2/this.ref.clientWidth-.1*e).toFixed(1)+"%"):p.set("right",(t-.1*e).toFixed(1)+"%")}else{const t=parseFloat(p.right);p=(null==h?void 0:h.hCenter)?p.set("right",(this.ref.clientWidth+c)/2-e+"px"):p.set("right",t-e+"px")}(null==h?void 0:h.hCenter)&&(h=h.set("hCenter",!1))}if(0!==o){if(l.utils.isPercentage(p.top)){const t=parseFloat(p.top);p=(null==h?void 0:h.vCenter)?p.set("top",(50-100*u/2/this.ref.clientHeight+.1*o).toFixed(1)+"%"):p.set("top",(t+.1*o).toFixed(1)+"%")}else{const t=parseFloat(p.top);p=(null==h?void 0:h.vCenter)?p.set("top",(this.ref.clientHeight-u)/2+o+"px"):p.set("top",t+o+"px")}if(l.utils.isPercentage(p.bottom)){const t=parseFloat(p.bottom);p=(null==h?void 0:h.vCenter)?p.set("bottom",(50+100*u/2/this.ref.clientHeight-.1*o).toFixed(1)+"%"):p.set("bottom",(t-.1*o).toFixed(1)+"%")}else{const t=parseFloat(p.bottom);p=(null==h?void 0:h.hCenter)?p.set("bottom",(this.ref.clientHeight+u)/2-o+"px"):p.set("bottom",t-o+"px")}(null==h?void 0:h.vCenter)&&(h=h.set("vCenter",!1))}const f=Object(s.getAppConfigAction)();g&&f.editLayoutItemSetting({layoutId:d.id,layoutItemId:t},h),f.editLayoutItemBBox({layoutId:d.id,layoutItemId:t},p).exec()},this.toggleShowWidgetList=t=>{t.stopPropagation(),this.setState({showWidgetList:!this.state.showWidgetList})},this.closeWidgetList=()=>{this.state.showWidgetList&&this.setState({showWidgetList:!1})},this.handlePageTemplateSelected=t=>{const e=Object(s.getAppConfigAction)().appConfig;this.setState({isLoadingTemplate:!0}),this.pageContext.isHeader?s.templateUtils.applyPageTemplateToHeader(e,t).then(({appConfig:t})=>{Object(s.getAppConfigAction)(t).exec(),n.lodash.defer(()=>{this.setState({isLoadingTemplate:!1})})}).catch(t=>console.error(t)):this.pageContext.isFooter?s.templateUtils.applyPageTemplateToFooter(e,t).then(({appConfig:t})=>{Object(s.getAppConfigAction)(t).exec(),n.lodash.defer(()=>{this.setState({isLoadingTemplate:!1})})}).catch(t=>console.error(t)):this.pageContext.isDialog?s.templateUtils.applyTemplateToDialog(e,this.pageContext.dialogId,t).then(({appConfig:t})=>{Object(s.getAppConfigAction)(t).exec(),n.lodash.defer(()=>{this.setState({isLoadingTemplate:!1})})}).catch(t=>console.error(t)):s.templateUtils.applyPageTemplateToBody(e,this.pageContext.pageId,t).then(({appConfig:t})=>{Object(s.getAppConfigAction)(t).exec(),n.lodash.defer(()=>{this.setState({isLoadingTemplate:!1})})}).catch(t=>console.error(t))},null==this.props.layout)return;l.utils.autoBindHandlers(this,["handleResizeStart","handleResizing","handleResizeEnd","handleDragStart","handleDragEnd","handleDragOver","handleDragEnter","handleDragLeave","handleDrop","handleActivate","handleToggleDragoverEffect"]);const o=n.ExtensionManager.getInstance().getExtensions(""+n.extensionSpec.ExtensionPoints.LayoutTransformer);if((null==o?void 0:o.length)>0){const t=o.find(t=>t.layoutType===this.props.layout.type);this.layoutTransform=null===(e=t)||void 0===e?void 0:e.transformLayout}this.flipLeftRight=l.utils.isRTL(),this.state={offsetX:0,offsetY:0,dw:0,dh:0,isDragover:!1,showWidgetList:!1,isLoadingTemplate:!1}}handleActivate(t){if(!B())return;if(Math.abs(t.screenX-this.mousedownX)>l.CLICK_TOLRERANCE||Math.abs(t.screenY-this.mousedownY)>l.CLICK_TOLRERANCE)return void t.stopPropagation();const{isInSection:e,isInWidget:o}=this.props;this.pageContext.viewOnly||e||o||tt()||X()||(t.stopPropagation(),Object(n.getAppStore)().dispatch(n.appActions.selectionChanged(null)))}componentDidMount(){var t,e,o;this.canvasPane=new $e(this.canvasRef,this.pageContext.builderTheme),this.updateDeviceRatio();const i=`(resolution: ${window.devicePixelRatio}dppx)`;this.mediaQueryList=null===(t=window.matchMedia)||void 0===t?void 0:t.call(window,i);const{name:n,version:s}=window.jimuUA.browser;"safari"===n.toLowerCase()&&parseInt(s)<14?null===(e=this.mediaQueryList)||void 0===e||e.addListener(this.updateDeviceRatio):null===(o=this.mediaQueryList)||void 0===o||o.addEventListener("change",this.updateDeviceRatio)}componentWillUnmount(){var t,e;const{name:o,version:i}=window.jimuUA.browser;"safari"===o.toLowerCase()&&parseInt(i)<14?null===(t=this.mediaQueryList)||void 0===t||t.removeListener(this.updateDeviceRatio):null===(e=this.mediaQueryList)||void 0===e||e.removeEventListener("change",this.updateDeviceRatio)}componentDidUpdate(){this.updateDeviceRatio()}isResizingItem(){return 0!==this.state.dh||0!==this.state.dw}handleResizeStart(t){const{layout:e}=this.props;this.rndingLayoutId=t;const o=this.ref.querySelector(`div.exb-rnd[data-layoutid="${e.id}"][data-layoutitemid="${t}"]`);this.domRect=this.ref.getBoundingClientRect(),this.bboxGridlines=Pe(this.props.layout,this.domRect.width,this.domRect.height,t);const i=o.getBoundingClientRect(),n=this.getPositionUnit(t);this.resizingRect=Object.assign({units:n},l.utils.relativeClientRect(i,this.domRect))}getResizingDelta(t,e,o,i,n,s){return Le(this.props.layout.content[t],this.domRect,this.resizingRect,{x:e,w:i,y:o,h:n},s,this.bboxGridlines,this.canvasPane,this.pageContext.builderTheme)}handleResizing(t,e,o,i,n,s,a){if(this.canvasPane.clear(),a>500)return void this.setState({offsetX:e,offsetY:o,dw:i,dh:n});const r=this.getResizingDelta(t,e,o,i,n,s);this.setState({offsetX:r.x,offsetY:r.y,dw:r.w,dh:r.h})}handleResizeEnd(t,e,o,i,a,r,l,d){var c,u;this.rndingLayoutId=null;const{layout:p}=this.props,h=this.getResizingDelta(t,e,o,i,a,r);this.canvasPane.clear();const g=Object(he.f)(this.resizingRect,this.domRect,{dx:h.x,dy:h.y,dw:h.w,dh:h.h}),f=Object(s.getAppConfigAction)(),m={layoutId:p.id,layoutItemId:t},{bbox:y,setting:v}=Object(he.b)(Object(n.Immutable)(l.bbox),l.setting,this.domRect,g);let b=y;(null==d?void 0:d.hCenter)&&"50%"===(null===(c=l.bbox)||void 0===c?void 0:c.left)&&(b=b.set("left","50%")),(null==d?void 0:d.vCenter)&&"50%"===(null===(u=l.bbox)||void 0===u?void 0:u.top)&&(b=b.set("top","50%")),f.editLayoutItemBBox(m,this.flipLeftRight?Object(he.c)(b):b).editLayoutItemSetting(m,v).exec(),this.bboxGridlines=null,this.setState({offsetX:0,offsetY:0,dw:0,dh:0})}handleDragOver(t,e,o,i,s,a,r){var d,c,u;if(this.canvasPane.clear(),!this.state.isDragover||r>500)return;let p,h,g,f=0,m=0;(null===(d=t.layoutInfo)||void 0===d?void 0:d.layoutId)===this.props.layout.id?(p=t.layoutInfo.layoutItemId,g=this.getPositionUnit(p),h=this.props.layout.content[p]):g=Re({},this.flipLeftRight);const y=t.rotation>0||t.rotation<0,v=Le(h,this.domRect,i,{x:0,y:0,w:0,h:0},!1,this.bboxGridlines,y?null:this.canvasPane,y?null:this.pageContext.builderTheme);if(null!=e&&(0!==v.x||0!==v.y)){const t=null!==(c=parseFloat(e.getAttribute("data-translatex")))&&void 0!==c?c:0,o=null!==(u=parseFloat(e.getAttribute("data-translatey")))&&void 0!==u?u:0;e.style.transform=`translate(${t+v.x}px, ${o+v.y}px)`}f=v.x,m=v.y,this.canvasPane.setColor(this.pageContext.builderTheme.colors.palette.primary[600]);if(function(t,e,o){const i=e.width-(t.left+t.width),s=e.height-(t.top+t.height),a="px"===t.units.left?n.utils.formatPixelNumber(Math.round(t.left)+"px"):n.utils.formatPercentageNumber(l.utils.toRatio(t.left,e.width)),r="px"===t.units.right?n.utils.formatPixelNumber(Math.round(i)+"px"):n.utils.formatPercentageNumber(l.utils.toRatio(i,e.width)),d="px"===t.units.top?n.utils.formatPixelNumber(Math.round(t.top)+"px"):n.utils.formatPercentageNumber(l.utils.toRatio(t.top,e.height)),c="px"===t.units.bottom?n.utils.formatPixelNumber(Math.round(s)+"px"):n.utils.formatPercentageNumber(l.utils.toRatio(s,e.height));t.left<=i?t.top<=s?(o.drawLine(0,t.top,t.left,t.top,!1,a),o.drawLine(t.left,0,t.left,t.top,!1,d)):(o.drawLine(0,t.top+t.height,t.left,t.top+t.height,!1,a),o.drawLine(t.left,t.top+t.height,t.left,e.height,!1,c)):t.top<=s?(o.drawLine(t.left+t.width,t.top,e.width,t.top,!1,r),o.drawLine(t.left+t.width,0,t.left+t.width,t.top,!1,d)):(o.drawLine(t.left+t.width,t.top+t.height,e.width,t.top+t.height,!1,r),o.drawLine(t.left+t.width,t.top+t.height,t.left+t.width,e.height,!1,c))}({width:i.width,height:i.height,left:i.left+f,top:i.top+m,units:g},this.domRect,this.canvasPane),null==t.layoutInfo){this.canvasPane.setColor(n.polished.rgba(this.pageContext.builderTheme.colors.palette.primary[700],.2));const t={left:i.left+f,top:i.top+m,width:i.width,height:i.height};this.canvasPane.drawRect(t)}}handleToggleDragoverEffect(t,e){var o;if(this.canvasPane.clear(),t){let t;this.domRect=this.ref.getBoundingClientRect(),(null===(o=e.layoutInfo)||void 0===o?void 0:o.layoutId)===this.props.layout.id&&(t=e.layoutInfo.layoutItemId),this.bboxGridlines=Pe(this.props.layout,this.domRect.width,this.domRect.height,t)}this.setState({isDragover:t})}handleDragEnter(t){}handleDragLeave(){}handleDrop(t,e,o){let i;i=null==t.layoutInfo||t.layoutInfo.layoutId!==this.props.layout.id?Re({},this.flipLeftRight):this.getPositionUnit(t.layoutInfo.layoutItemId);const{snappedRect:n,delta:s}=this.calSnappedRect(t,e,Object.assign({units:i},o),t.layoutInfo);this.canvasPane.clear();const a={left:o.left+s.x,top:o.top+s.y,width:o.width,height:o.height,right:e.width-(o.left+s.x+o.width),bottom:e.height-(o.top+s.y+o.height)};this.addWidgetToLayout(t,e,a,n).catch(t=>console.error(t)),this.bboxGridlines=null}calSnappedRect(t,e,o,i){let n;(null==i?void 0:i.layoutId)===this.props.layout.id&&(n=this.props.layout.content[i.layoutItemId]);const s=Le(n,this.domRect,o,{x:0,y:0,w:0,h:0},!1,this.bboxGridlines),a={left:o.left+s.x,top:o.top+s.y,width:o.width,height:o.height};return a.right=e.width-(+a.left+ +a.width),a.bottom=e.height-(+a.top+ +a.height),o.width>e.width&&(a.width=e.width,a.left=0),o.height>e.height&&(a.height=e.height,a.top=0),a.left=l.utils.toRatio(a.left,e.width),a.top=l.utils.toRatio(a.top,e.height),a.width=l.utils.toRatio(a.width,e.width),a.height=l.utils.toRatio(a.height,e.height),a.right=l.utils.toRatio(a.right,e.width),a.bottom=l.utils.toRatio(a.bottom,e.height),{snappedRect:a,delta:s}}addWidgetToLayout(t,e,o,i,a){var r;return Ee(this,void 0,void 0,(function*(){const{layout:d,browserSizeMode:c}=this.props;let u=Object(s.getAppConfigAction)(a);const p=yield S(u.appConfig,t,{layoutId:d.id},e,i),{layoutInfo:h,updatedAppConfig:g}=p;u=Object(s.getAppConfigAction)(g),null!=t.layoutInfo&&t.layoutInfo.layoutId===d.id&&u.editLayoutItemSetting(h,{vCenter:!1,hCenter:!1});const f=u.appConfig.layouts[h.layoutId].content[h.layoutItemId],m=Object(n.Immutable)(null!==(r=f.setting)&&void 0!==r?r:{}),y=Object(he.b)(f.bbox,m,this.domRect,o);let v=y.bbox;const b=y.setting;if(null==t.layoutInfo&&(this.pageContext.isHeader||this.pageContext.isFooter)){const t=u.appConfig,e=this.pageContext.isHeader?parseInt(""+t.header.height[c]):parseInt(""+t.footer.height[c]);v=v.set("height",l.utils.toRatio(Math.min(o.height,e),e))}u.editLayoutItemBBox(h,this.flipLeftRight?Object(he.c)(v):v).editLayoutItemSetting(h,b),Object(n.getAppStore)().dispatch(n.appActions.layoutChanged(u.appConfig,h))}))}getPositionUnit(t){return Re(this.props.layout.content[t].bbox,this.flipLeftRight)}createItem(t,e,o){const{itemResizable:i,itemDraggable:s,itemSelectable:a,showDefaultTools:r}=this.props,{offsetX:l,offsetY:d,dw:c,dh:u}=this.state,p=e===this.rndingLayoutId?l:0,h=e===this.rndingLayoutId?d:0,g=e===this.rndingLayoutId?c:0,f=e===this.rndingLayoutId?u:0,m=e===this.rndingLayoutId?this.resizingRect:void 0,y=e===this.rndingLayoutId?this.domRect:void 0,v=t.content[e];return Object(n.jsx)(fe,{key:`${t.id}_${e}`,index:o,layoutItem:v,offsetX:p,offsetY:h,dw:g,dh:f,initRect:m,containerRect:y,layoutId:t.id,layoutItemId:e,draggable:s,resizable:i,selectable:a,showDefaultTools:r,isLayoutLockChildren:this.layoutSetting.lockChildren,onResizeStart:this.handleResizeStart,onResizing:this.handleResizing,onResizeEnd:this.handleResizeEnd,onMoveByKey:this.handleMoveItemByKey,isInSection:this.props.isInSection})}render(){const{layout:t,className:e,style:o,layouts:i,isPageItem:s,mainSizeMode:d,browserSizeMode:c}=this.props;return null==t?null:Object(n.jsx)(l.PageContext.Consumer,null,l=>{var u,p;this.pageContext=l;let h=t;const g=i[c]!==t.id;g&&null!=this.layoutTransform&&(h=this.layoutTransform(t,d,c)),this.layoutSetting=n.lodash.assign({},r.b,g?{}:t.setting);const f=null!==(u=h.order)&&void 0!==u?u:[],m=Object(n.classNames)("layout fixed-layout",e,{"limited-drag-boundary":null===(p=t.setting)||void 0===p?void 0:p.lockDescendants}),y=0!==this.state.dh||0!==this.state.dw,v=Object.assign(Object.assign(Object.assign({height:"auto",position:"relative"},o),a.styleUtils.toCSSStyle(this.layoutSetting.style)),{width:"100%",overflow:"hidden"}),b={display:this.state.isDragover||y?"block":"none",zIndex:f.length+1},I=!this.state.isLoadingTemplate&&0===f.length&&!l.viewOnly&&t.id===l.rootLayoutId;return Object(n.jsx)("div",{className:m,ref:t=>this.ref=t,onClick:this.handleActivate,onMouseDown:this.handleMouseDown,style:v,"data-layoutid":h.id},Object(n.jsx)(n.OneByOneAnimation,{"data-layoutid":h.id,className:"trail-container",css:n.css`
                  position: absolute;
                  left: 0;
                  right: 0;
                  top: 0;
                  bottom: 0;
                `},Object(n.jsx)(kt,{css:De,layouts:this.props.layouts,highlightDragover:!s,onDragEnter:this.handleDragEnter,onDragLeave:this.handleDragLeave,onDragOver:this.handleDragOver,onDrop:this.handleDrop,onToggleDragoverEffect:this.handleToggleDragoverEffect,isRepeat:this.props.isRepeat}),f.map((t,e)=>this.createItem(h,t,e))),I&&Object(n.jsx)(Be,{pageContext:this.pageContext,onPageTemplateSelected:this.handlePageTemplateSelected}),this.state.isLoadingTemplate&&Object(n.jsx)(a.Loading,{type:a.LoadingType.Primary}),Object(n.jsx)("canvas",{css:Fe,style:b,ref:t=>this.canvasRef=t}))})}}Ve.displayName="FixedLayout";var He=n.ReactRedux.connect(l.utils.mapStateToLayoutProps)(Ve);var We=o(27),Ge=o(5);class Ue extends n.React.PureComponent{constructor(){super(...arguments),this.state={isResizing:!1,dw:0,dh:0},this.onResizeStart=(t,e,o)=>{this.initWidth=e,this.initHeight=o,this.props.onResizeStart(t),this.setState({isResizing:!0})},this.onResizing=(t,e,o,i,n)=>{this.props.onResizing(t,e,o,i,n),this.setState({dw:i,dh:n,isResizing:!0})},this.onResizeEnd=(t,e,o,i,n,s)=>{const{layoutItem:a}=this.props;this.props.onResizeEnd(t,e,o,i,n,a),this.setState({isResizing:!1,dw:0,dh:0})}}isStretchInCrossAxis(){var t,e;const{layoutItem:o}=this.props;return(null===(e=null===(t=o.setting)||void 0===t?void 0:t.autoProps)||void 0===e?void 0:e.width)!==Ge.f.Custom}calHeight(t,e){var o,i;return(null===(o=t.autoProps)||void 0===o?void 0:o.height)===Ge.f.Auto||"ratio"===t.heightMode?"ratio"===t.heightMode?{height:"auto",flex:"0 0 auto"}:{height:"auto"}:(null===(i=t.autoProps)||void 0===i?void 0:i.height)===Ge.f.Stretch||"fit"===t.heightMode?{flex:"1 1 auto"}:{height:e.height,flexShrink:0}}getStyle(t,e){var o,i;const{index:s,layoutItem:a,space:r}=this.props,{dw:l,dh:d,isResizing:c}=this.state,u=a.bbox||{},p=this.calHeight(t,u);return p.width=e?"auto":u.width,c&&(l||d)&&(p.height=this.initHeight+d,p.width=this.initWidth+l),n.css`
      margin-top: ${s>0?r+"px":"unset"};
      align-self: ${e?"stretch":null!==(i=null===(o=t.style)||void 0===o?void 0:o.alignSelf)&&void 0!==i?i:"auto"};
      width: ${Object(Ce.getValueOfBBox)(p,"width")};
      height: ${Object(Ce.getValueOfBBox)(p,"height")};
      flex: ${p.flex};
      flex-shrink: ${p.flexShrink};
    `}render(){var t,e;const{layoutId:o,layoutItem:i,draggable:s,resizable:a,selectable:r,showDefaultTools:l}=this.props;if(!i||i.isPending)return null;const d=i.setting||{},c=Object(n.classNames)("flexbox-layout-item d-flex"),u=this.isStretchInCrossAxis(),p=null!==(e=null===(t=d.autoProps)||void 0===t?void 0:t.height)&&void 0!==e?e:Ge.f.Custom,h="ratio"===d.heightMode,g=Object(Ce.parseAspectRatio)(d.aspectRatio),f=Object(Ce.handleOnebyOneAnimation)(this.props);return Object(n.jsx)(Qt,Object.assign({css:this.getStyle(d,u),layoutId:o,layoutItemId:i.id,onResizeStart:this.onResizeStart,onResizing:this.onResizing,onResizeEnd:this.onResizeEnd,left:!u,right:!u,top:!1,bottom:p===Ge.f.Custom&&!h,draggable:s,resizable:a,selectable:r,showDefaultTools:l,onClick:this.props.onClick,className:c,forceAspectRatio:h,aspectRatio:g},f))}}const _e=n.css`
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  background: transparent;
`,Ye=n.css`
  ${_e};
  z-index: 20;
  pointer-events: none;
`;class Ze extends n.React.PureComponent{constructor(t){super(t),this.state={isDragover:!1},this.handleItemResizing=()=>{},l.utils.autoBindHandlers(this,["handleItemResizeStart","handleItemResizing","handleItemResizeEnd","handleDrop","handleDragOver","handleDragEnter","handleDragLeave","handleToggleDragoverEffect"])}componentDidMount(){this.canvasPane=new $e(this.canvasRef),this.canvasPane.setSize(this.ref.clientWidth,this.ref.clientHeight)}componentDidUpdate(){this.canvasPane.setSize(this.ref.clientWidth,this.ref.clientHeight)}handleItemResizeStart(t){const{layout:e}=this.props;this.domRect=this.ref.getBoundingClientRect();const o=this.ref.querySelector(`div.exb-rnd[data-layoutid="${e.id}"][data-layoutitemid="${t}"]`).getBoundingClientRect();this.resizingRect=l.utils.relativeClientRect(o,this.domRect)}handleItemResizeEnd(t,e,o,i,n,a){const{layout:r}=this.props,d=r.content[t].bbox;let c;c=l.utils.isPercentage(d.width)?(100*(this.resizingRect.width+i)/this.domRect.width).toFixed(4)+"%":Math.round(this.resizingRect.width+i)+"px";const u={width:c,height:Math.round(this.resizingRect.height+n)};this.childRects=[],this.domRect=null;Object(s.getAppConfigAction)().editLayoutItemBBox({layoutId:this.props.layout.id,layoutItemId:t},u).exec()}handleDragOver(t,e,o,i){var s;let a=i;if(this.canvasPane.clear(),(null===(s=this.childRects)||void 0===s?void 0:s.length)>0){const{insertY:t,refId:e}=function(t,e,o){const i=e.top+e.height/2;let n,s,a=!1;if(o.some((t,e)=>{if(t.top+t.height/2>i){if(0===e)n=t.top/2;else{const i=o[e-1];n=(t.top+i.top+i.height)/2}a=!0,s=t.id}return a}),!a){const e=o[o.length-1];n=(e.top+e.height+t.height)/2}return{refId:s,insertY:n}}(o,a,this.childRects);this.referenceId=e,a={top:t-5+this.ref.scrollTop,width:o.width-10,left:5,height:10}}else a={top:o.height/2-5,width:o.width-10,left:5,height:10};this.canvasPane.setColor(n.polished.rgba(this.builderTheme.colors.palette.primary[700],1)),this.canvasPane.drawRect(a)}handleToggleDragoverEffect(t){t&&(this.referenceId=null,this.collectBounds(null)),this.setState({isDragover:t})}handleDragEnter(){}handleDragLeave(){}handleDrop(t,e,o){this.canvasPane.clear();const{layout:i}=this.props,a={layoutId:i.id};let r=0;null!=this.referenceId?r=i.order.indexOf(this.referenceId):null!=i.order&&(r=i.order.length);S(Object(s.getAppConfigAction)().appConfig,t,a,e,o,r).then(t=>{const{layoutInfo:e,updatedAppConfig:o}=t,{layoutId:i,layoutItemId:s}=e;let a=o.layouts[i].content[s].bbox;a=a.without("left").without("top").without("right").without("bottom");const r=o.setIn(["layouts",i,"content",s,"bbox"],a);Object(n.getAppStore)().dispatch(n.appActions.layoutChanged(r,e))}).finally(null),this.referenceId=null,this.childRects=[]}collectBounds(t){const{layout:e}=this.props;this.childRects=[],this.domRect=this.ref.getBoundingClientRect();const o=this.ref.parentNode.querySelectorAll(`div[data-layoutid="${e.id}"] > .trail-container > div.exb-rnd`);return(null==o?void 0:o.length)>0&&o.forEach(o=>{const i=o.getAttribute("data-layoutitemid");if(t!==i&&e.order.includes(i)){const t=l.utils.relativeClientRect(o.getBoundingClientRect(),this.domRect);t.id=i,this.childRects.push(t)}}),this.childRects.sort((t,e)=>t.top-e.top)}createItem(t,e,o){const{layout:i,itemDraggable:s,itemResizable:a,itemSelectable:r,showDefaultTools:l}=this.props;return Object(n.jsx)(Ue,{key:t,index:e,space:o.space,layoutId:i.id,layoutItemId:t,layoutItem:i.content[t],draggable:s,resizable:a,selectable:r,showDefaultTools:l,onResizeStart:this.handleItemResizeStart,onResizing:this.handleItemResizing,onResizeEnd:this.handleItemResizeEnd})}isEmpty(){var t;const{layout:e}=this.props,o=null!==(t=e.order)&&void 0!==t?t:[];return!(o.length>0&&o.some(t=>!e.content[t].isPending))}render(){var t;const{layout:e,className:o}=this.props,i=null!==(t=e.order)&&void 0!==t?t:[],s=Object.assign({},We.a,e.setting),r=this.isEmpty();return Object(n.jsx)(l.PageContext.Consumer,null,t=>{this.builderTheme=t.builderTheme,this.theme=t.theme;const l={position:"relative",minWidth:s.min},d=Object(n.classNames)("layout column-layout",o),c={display:this.state.isDragover?"block":"none"};return Object(n.jsx)("div",{className:d,ref:t=>this.ref=t,style:l,"data-layoutid":e.id},Object(n.jsx)(n.OneByOneAnimation,{enableScroll:!0,className:"trail-container d-flex flex-column w-100",css:n.css`
                  position: ${r?"absolute":null};
                  height: 100%;
                  overflow-x: hidden;
                  padding: ${a.styleUtils.toCSSPadding(s.padding)};
                  justify-content: ${s.justifyContent};
                  overflow-y: ${!1===s.overflowY?"hidden !important":null}
                `},Object(n.jsx)(kt,{css:_e,layouts:this.props.layouts,highlightDragover:!0,onDragEnter:this.handleDragEnter,onDragLeave:this.handleDragLeave,onDragOver:this.handleDragOver,onDrop:this.handleDrop,onToggleDragoverEffect:this.handleToggleDragoverEffect}),i.map((t,e)=>this.createItem(t,e,s))),r&&this.props.children,Object(n.jsx)("canvas",{css:Ye,style:c,ref:t=>this.canvasRef=t}))})}}var Xe=n.ReactRedux.connect(l.utils.mapStateToLayoutProps)(Ze),Je=o(15),qe=o(9),Qe=o(21);const Ke=n.css`
  position: absolute;
  left: 0;
  max-height: 40px;
  height: 20%;
  right: 0;
  z-index: ${l.LayoutZIndex.BoundaryDropArea};
  display: flex;
  pointer-events: all;
  display: flex;

  &.drop-active {
    background: transparent !important;
  }

  body:not(.design-mode) & {
    display: none !important;
  }
`,to=n.css`
  ${Ke};
  top: 0;
`,eo=n.css`
  ${Ke};
  bottom: 0;
`;class oo extends n.React.PureComponent{constructor(t){super(t),this.state={isResizing:!1,dh:0},this.handleResizeStart=(t,e,o)=>{this.initWidth=e,this.initHeight=o,this.props.onResizeStart(t),this.setState({isResizing:!0})},this.handleResizing=(t,e,o,i,n)=>{this.props.onResizing(t,e,o,i,n),this.setState({dh:n,isResizing:!0})},this.handleResizeEnd=(t,e,o,i,n,s)=>{const{layoutItem:a}=this.props;this.props.onResizeEnd(t,e,o,i,n,a),this.setState({isResizing:!1,dh:0})},this.handleDropAtTop=(t,e,o)=>{this.dropAtBoundary(t,e,o,"top")},this.handleDropAtBottom=(t,e,o)=>{this.dropAtBoundary(t,e,o,"bottom")},this.dropAtBoundary=(t,e,o,i)=>{let n=Object(s.getAppConfigAction)();O(n.appConfig,t,e,o,{layoutId:this.props.layoutId,layoutItemId:this.props.layoutItemId},i).then(({updatedAppConfig:t})=>{n=Object(s.getAppConfigAction)(t),n.exec()}).finally(null)},this.pasteAtBoundary=(t,e,o,i)=>{let n=Object(s.getAppConfigAction)();const{layoutId:a,layoutItemId:r}=t.layoutInfo,l={layoutInfo:n.duplicateLayoutItem(a,a,r,!0)};O(n.appConfig,l,e,o,{layoutId:this.props.layoutId,layoutItemId:this.props.layoutItemId},i).then(({updatedAppConfig:t})=>{n=Object(s.getAppConfigAction)(t),n.exec()}).finally(null)},this.fakeTopLayouts=Object(n.Immutable)({[n.BrowserSizeMode.Large]:`${this.props.layoutId}_${this.props.layoutItemId}_tlarge`,[n.BrowserSizeMode.Medium]:`${this.props.layoutId}_${this.props.layoutItemId}_tmedium`,[n.BrowserSizeMode.Small]:`${this.props.layoutId}_${this.props.layoutItemId}_tsmall`}),this.fakeBottomLayouts=Object(n.Immutable)({[n.BrowserSizeMode.Large]:`${this.props.layoutId}_${this.props.layoutItemId}_blarge`,[n.BrowserSizeMode.Medium]:`${this.props.layoutId}_${this.props.layoutItemId}_bmedium`,[n.BrowserSizeMode.Small]:`${this.props.layoutId}_${this.props.layoutItemId}_bsmall`})}isFunctionalWidget(){var t,e,o;const{layoutItem:i}=this.props;if(i.type===n.LayoutItemType.Widget){let s=!1;const a=null===(e=null===(t=Object(n.getAppStore)().getState().appConfig)||void 0===t?void 0:t.widgets)||void 0===e?void 0:e[i.widgetId];return null!=(null===(o=null==a?void 0:a.manifest)||void 0===o?void 0:o.properties)&&(s=a.manifest.widgetType===n.WidgetType.Layout||a.manifest.properties.hasEmbeddedLayout),!s}return!1}getStyle(t){var e,o,i,s;const{gutter:a,layoutItem:r,isMultiRow:d}=this.props,{dh:c,isResizing:u}=this.state,p=r.bbox,h=Object(Qe.b)(t,p,d);return u&&0!==c&&(h.height=this.initHeight+c),d?n.css`
        padding: ${a/2}px 0;
        transform: ${0!==t.offsetX||0!==t.offsetY?`translate(${null!==(e=t.offsetX)&&void 0!==e?e:0}px, ${null!==(o=t.offsetY)&&void 0!==o?o:0}px)`:null};
        height: ${l.utils.getValueOfBBox(h,"height")};
        align-self: ${h.alignSelf};
      `:n.css`
      padding: 0 ${a/2}px;
      transform: ${0!==t.offsetX||0!==t.offsetY?`translate(${null!==(i=t.offsetX)&&void 0!==i?i:0}px, ${null!==(s=t.offsetY)&&void 0!==s?s:0}px)`:null};
      height: ${l.utils.getValueOfBBox(h,"height")};
      align-self: ${h.alignSelf};
    `}render(){var t;const{order:e,span:o,offset:i,layoutId:s,layoutItem:a,draggable:r,resizable:d,selectable:c}=this.props;if(null==a||a.isPending)return null;const u=n.lodash.assign({},Je.a,a.setting),p="ratio"===u.heightMode,h=null===(t=u.autoProps)||void 0===t?void 0:t.height,g=Object(n.classNames)("row-layout-item d-flex","col-"+o,"offset-"+i,"order-"+e,{"fix-height":h===l.LayoutItemSizeModes.Custom}),f=this.isFunctionalWidget(),m=n.css`
      width: 100%;
      height: 10px;
      background: ${this.props.builderTheme.colors.palette.primary[700]};
    `,y=l.utils.parseAspectRatio(u.aspectRatio),v=l.utils.handleOnebyOneAnimation(this.props);return Object(n.jsx)(Qt,Object.assign({css:this.getStyle(u),layoutId:s,layoutItemId:a.id,onResizeStart:this.handleResizeStart,onResizing:this.handleResizing,onResizeEnd:this.handleResizeEnd,left:!0,right:!0,top:!1,bottom:h===l.LayoutItemSizeModes.Custom&&!p,draggable:r,resizable:d,selectable:c,onClick:this.props.onClick,className:g,forceAspectRatio:p,aspectRatio:y},v),Object(n.jsx)(n.React.Fragment,null,f&&Object(n.jsx)(kt,{css:n.css`
                ${to};
              `,layouts:this.fakeTopLayouts,highlightDragover:!0,onDrop:this.handleDropAtTop},Object(n.jsx)("div",{css:m})),f&&Object(n.jsx)(kt,{css:n.css`
                ${eo};
              `,layouts:this.fakeBottomLayouts,highlightDragover:!0,onDrop:this.handleDropAtBottom},Object(n.jsx)("div",{css:n.css`${m};position: absolute; bottom:0;`}))))}}function io(t,e){let o=-1;return e.some((e,i)=>{if(e.id===t)return o=i,!0}),o}function no(t,e,o,i){const s=i.map(t=>Object(n.Immutable)(t)),a=io(t,s);if(l.utils.isRTL()&&(e=0!==e?0:-o),e>0){const t=s[a],o=Math.min(e,t.width-1);return s[a]=t.set("left",t.left+o).set("width",t.width-o),s}if(e<0){let t=0;for(let e=0;e<a;e+=1)t+=Math.min(s[e].width,qe.a);const o=s[a].left-t,i=Math.abs(e);if(o>0){let t=0;for(let e=a;e>=0;e-=1){const o=s[e];let n=0;if(e>0){const t=s[e-1];n=o.left-(t.left+t.width)}else n=o.left;if(0===n)continue;const r=t+n>=i?i-t:n;s[a]=s[a].set("width",s[a].width+r);for(let t=e;t<=a;t+=1)s[t]=s[t].set("left",s[t].left-r);if(t+n>=i)return s;t+=n}if(a>0)for(let e=a-1;e>=0;e-=1){const o=s[e],n=o.width-qe.a;if(n<=0)continue;const r=t+n>=i?i-t:n;s[a]=s[a].set("width",s[a].width+r),s[e]=o.set("width",o.width-r);for(let t=e+1;t<=a;t+=1)s[t]=s[t].set("left",s[t].left-r);if(t+n>=i)return s;t+=n}}return s}if(o<0){const t=Math.min(Math.abs(o),s[a].width-1);return s[a]=s[a].set("width",s[a].width-t),s}if(o>0){let t=0;for(let e=a+1;e<s.length;e+=1)t+=Math.min(s[e].width,qe.a);const e=o;if(qe.b-(s[a].left+s[a].width)-t>0){let t=0;for(let o=a;o<s.length;o+=1){const i=s[o];let n=0;if(o!==s.length-1){n=s[o+1].left-(i.left+i.width)}else n=qe.b-(i.left+i.width);if(0===n)continue;const r=t+n>=e?e-t:n;s[a]=s[a].set("width",s[a].width+r);for(let t=a+1;t<=o;t+=1)s[t]=s[t].set("left",s[t].left+r);if(t+n>=e)return s;t+=n}if(a!==s.length-1)for(let o=a+1;o<s.length;o+=1){const i=s[o],n=i.width-qe.a;if(n<=0)continue;const r=t+n>=e?e-t:n;s[a]=s[a].set("width",s[a].width+r),s[o]=i.set("width",i.width-r);for(let t=a+1;t<=o;t+=1)s[t]=s[t].set("left",s[t].left+r);if(t+n>=e)return s;t+=n}}return s}return s}function so(t,e,o){const i=o.map(t=>Object(n.Immutable)(t)),s=io(t,i),a=i[s];return i.splice(s,1),ao(a,e,i)}function ao(t,e,o){const i=o.map(t=>Object(n.Immutable)(t));let s=Object(n.Immutable)(t);const a=Math.max(e,0);if(s=s.set("left",a),null==i||0===i.length)return s=s.set("width",Math.min(s.width,qe.b-s.left)),[s];let r,l=i.length;const d=()=>{if(0===l)c=i[l].left,r=c;else{const t=i[l-1];c=l<i.length?i[l].left-(t.left+t.width):qe.b-(t.left+t.width),r=t.left+t.width+c}};i.some((t,e)=>{if(a<=t.left)return l=e,!0});let c=l<i.length?i[l].left-a:qe.b-a;if(c>=s.width)return i.splice(l,0,s),i;const u=c;if(d(),c>=s.width)return s=s.set("left",r-s.width),i.splice(l,0,s),i;c=u;for(let t=l;t<i.length;t+=1){const e=i[t];let o=0;if(t!==i.length-1){o=i[t+1].left-(e.left+e.width)}else o=qe.b-(e.left+e.width);if(0===o)continue;const n=c+o>=s.width?s.width-c:o;for(let e=l;e<=t;e+=1)i[e]=i[e].set("left",i[e].left+n);if(c+o>=s.width)return i.splice(l,0,s),i;c+=o}if(d(),c>=s.width)return s=s.set("left",r-s.width),i.splice(l,0,s),i;for(let t=l-1;t>=0;t-=1){const e=i[t];let o=0;if(t>0){const n=i[t-1];o=e.left-(n.left+n.width)}else o=e.left;if(0===o)continue;const n=c+o>=s.width?s.width-c:o;for(let e=t;e<=l-1;e+=1)i[e]=i[e].set("left",i[e].left-n);if(c+o>=s.width)return s=s.set("left",r-s.width),i.splice(l,0,s),i;c+=o}if(d(),c>=qe.a)return s=s.set("left",r-c).set("width",c),i.splice(l,0,s),i;if(l!==i.length)for(let t=l;t<i.length;t+=1){const e=i[t],o=e.width-qe.a;if(o<=0)continue;const n=c+o>=qe.a?qe.a-c:o;i[t]=e.set("width",e.width-n);for(let e=l;e<=t;e+=1)i[e]=i[e].set("left",i[e].left+n);if(c+o>=qe.a)return s=s.set("left",i[l].left-qe.a).set("width",qe.a),i.splice(l,0,s),i;c+=o}if(d(),c>=qe.a)return s=s.set("left",r-c).set("width",c),i.splice(l,0,s),i;for(let t=l-1;t>=0;t-=1){const e=i[t],o=e.width-qe.a;if(o<=0)continue;const n=c+o>=qe.a?qe.a-c:o;i[t]=e.set("width",e.width-n);for(let e=t+1;e<=l-1;e+=1)i[e]=i[e].set("left",i[e].left-n);if(c+o>=qe.a)return s=s.set("left",r-qe.a).set("width",qe.a),i.splice(l,0,s),i;c+=o}return i}function ro(t){const{builderTheme:e,visible:o,gutter:i=0}=t;return Object(n.jsx)("div",{css:n.css`
        pointer-events: none;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0px;
        position: absolute;
        z-index: 1;
        display: ${o?"flex":"none"};
      `},[0,1,2,3,4,5,6,7,8,9,10,11].map(t=>Object(n.jsx)("div",{key:t,css:n.css`
              width: 8.333333%;
            `},Object(n.jsx)("div",{css:n.css`
                padding-left: ${i/2}px;
                padding-right: ${i/2}px;
                height: 100%;
                width: 100%;
                overflow: hidden;
              `},Object(n.jsx)("div",{css:n.css`
                  transform: translateY(-5%);
                  border: 1px dashed ${n.polished.rgba(e.colors.palette.dark[300],.6)};
                  height: 110%;
                  width: 100%;
                `})))))}const lo=n.css`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`,co=n.css`
  ${lo};
  bottom: 0;
  top: 0;
  z-index: ${l.LayoutZIndex.DragMoveTip};
  pointer-events: none;
`;class uo extends n.React.PureComponent{constructor(t){super(t),this.state={isResizing:!1,updatingRects:null,isDragoverCenter:!1},l.utils.autoBindHandlers(this,["handleItemResizeStart","handleItemResizing","handleItemResizeEnd","handleDrop","handleDragOver","handleDragEnter","handleDragLeave","handleToggleDragoverCenterEffect"]),this.flipLeftRight=l.utils.isRTL()}componentDidMount(){this.canvasPane=new $e(this.guideDragOverRef)}handleItemResizeStart(t){this.domRect=this.ref.getBoundingClientRect(),this.setState({isResizing:!0})}handleItemResizing(t,e,o,i,n){const s=this.domRect.width/qe.b,a=no(t,Math.round(e/s),Math.round(i/s),this.childRects);this.setState({updatingRects:a})}handleItemResizeEnd(t,e,o,i,n,a){const{layout:r}=this.props,d=this.domRect.width/qe.b,c=Math.round(e/d),u=Math.round(i/d),p=Object(s.getAppConfigAction)();no(t,c,u,this.childRects).forEach(e=>{const o=r.content[e.id].bbox;let i=o.height;e.id===t&&(i=l.utils.isPercentage(o.height)?(parseFloat(e.height)+100*n/this.domRect.height).toFixed(4)+"%":Math.round(parseFloat(e.height)+n)+"px");const s={left:e.left,width:e.width,height:i};p.editLayoutItemBBox({layoutId:r.id,layoutItemId:e.id},s)}),p.exec(),this.setState({isResizing:!1,updatingRects:null})}handleToggleDragoverCenterEffect(t){this.referenceId=null,t&&this.collectBounds(),this.setState({isDragoverCenter:t})}handleDragOver(t,e,o,i,n,s){var a;const r=null!==(a=t.layoutInfo)&&void 0!==a?a:{layoutId:null},l=this.reCalculateRects(t,o,i,n);let d;l.some(t=>{if(null==t.id||t.layoutId===r.layoutId&&t.id===r.layoutItemId)return d=t,!0});let c=!0,u=d.left;if(this.flippedChildRects.some(t=>{if((t.layoutId!==d.layoutId||t.id!==d.id)&&(t.left<=d.left&&t.left+t.width>d.left&&(c=!1),!c)){const e=l.find(e=>e.layoutId===t.layoutId&&e.id===t.id);return u=e.left+e.width<=d.left?t.left+t.width:t.left,!0}}),this.dragInsertPos=u,this.canvasPane.clear(),c)this.canvasPane.drawRect({left:u*this.colWidth+this.space/2,top:0,width:d.width*this.colWidth-this.space,height:i.height});else{const t=Math.min(o.width-this.space/2,Math.max(0,u*this.colWidth-this.space/2));this.canvasPane.drawRect({left:t,top:0,width:10,height:o.height})}}handleDragEnter(){this.canvasPane.setSize(this.ref.clientWidth,this.ref.clientHeight),this.canvasPane.setColor(n.polished.rgba(this.builderTheme.colors.palette.primary[700],.5))}handleDragLeave(){this.canvasPane.clear()}getConfig(){var t;const{layout:e}=this.props;return null!==(t=e.setting)&&void 0!==t?t:Je.b}reCalculateRects(t,e,o,i){var n,s;const a=null!==(n=t.layoutInfo)&&void 0!==n?n:{layoutId:null},{layout:r}=this.props,l=this.getConfig();this.space=null!==(s=l.space)&&void 0!==s?s:0;const d=this.maxPageWidth>0?Math.min(this.maxPageWidth,e.width):e.width,c=i-(e.width-d)/2,u=o.left-(e.width-d)/2;this.colWidth=d/qe.b;const p=Math.round(c/this.colWidth),h=Math.round(u/this.colWidth),g=Math.round(o.width/this.colWidth),f=function(t,e,o,i,n,s){var a;let r;const l=null!==(a=e.layoutInfo)&&void 0!==a?a:{layoutId:null},d=l.layoutId===t;return s.some(t=>(!d||t.id!==l.layoutItemId)&&(t.left>=o&&t.left<o+i||o>=t.left&&o<t.left+t.width))?(s.some((t,e)=>{if(d&&t.id===l.layoutItemId)return!1;if(n>=t.left&&n<=t.left+t.width)return n>=t.left&&n<t.left+t.width/2?(r=t.left,!0):(r=t.left+t.width,!0);if(o<t.left&&o+i>t.left){let o=0;if(0===e)o=t.left;else{let i;for(let t=e-1;t>=0&&(i=s[t],d&&i.id===l.layoutItemId);t-=1);o=null!=i?t.left-(i.left+i.width):t.left}return r=o>=i?t.left-i:t.left-o,!0}return o>t.left&&o<t.left+t.width?(r=t.left+t.width,!0):void 0}),r):o}(r.id,t,h,g,p,this.flippedChildRects);return null==t.id&&this.isInRow(a)?so(a.layoutItemId,f,this.flippedChildRects):ao({width:g,height:o.height,layoutId:a.layoutId,id:a.layoutItemId},f,this.flippedChildRects)}handleDrop(t,e,o){const{layout:i}=this.props;let a=Object(s.getAppConfigAction)();const{addedItemRect:r,insertIndex:l,appConfig:d}=this.calDropPosition(a.appConfig,t,e,o,!1);null!=r?S(d,t,{layoutId:i.id},e,r,l).then(e=>{var o;const{layoutInfo:r,updatedAppConfig:l}=e;a=Object(s.getAppConfigAction)(l),(null===(o=t.layoutInfo)||void 0===o?void 0:o.layoutId)!==i.id&&a.editLayoutItemSetting(r,{heightMode:"fit"});const{layoutId:d,layoutItemId:c}=r;let u=l.layouts[d].content[c].bbox;u=u.without("top").without("right").without("bottom"),a.editLayoutItemBBox(r,u),Object(n.getAppStore)().dispatch(n.appActions.layoutChanged(a.appConfig,r))}).finally(null):Object(n.getAppStore)().dispatch(n.appActions.layoutChanged(d,t.layoutInfo)),this.canvasPane.clear()}calDropPosition(t,e,o,i,n){var a;const r=this.maxPageWidth>0?Math.min(this.maxPageWidth,o.width):o.width,l=null!==(a=e.layoutInfo)&&void 0!==a?a:{layoutId:null},{layout:d}=this.props,c=r/qe.b,u=this.dragInsertPos,p=Math.round(i.width/c),h=Object(s.getAppConfigAction)(t);let g,f,m;return g=!n&&null==e.id&&this.isInRow(l)?so(l.layoutItemId,u,this.flippedChildRects):ao({width:p,height:i.height,layoutId:l.layoutId,id:l.layoutItemId},u,this.flippedChildRects),g.forEach((t,o)=>{var i;let n={left:t.left,width:t.width,height:t.height};if(this.flipLeftRight&&(n=Object(Qe.c)(n)),t.layoutId===d.id)h.editLayoutItemBBox({layoutId:t.layoutId,layoutItemId:t.id},n),t.id===(null===(i=e.layoutInfo)||void 0===i?void 0:i.layoutItemId)&&null!=e.id&&h.setLayoutItemToPending({layoutId:t.layoutId,layoutItemId:t.id},!1);else{f=n,m=0+o}}),{addedItemRect:f,insertIndex:m,appConfig:h.appConfig}}isInRow(t){const{layout:e}=this.props;return(null==t?void 0:t.layoutId)===e.id}collectBounds(){var t;const{transformedLayout:e}=this.props,o=null!==(t=e.order)&&void 0!==t?t:[];return this.childRects=[],o.forEach(t=>{var o,i;if(e.content[t].isPending)return;const n=null===(i=null===(o=e.content)||void 0===o?void 0:o[t])||void 0===i?void 0:i.bbox;null!=n&&this.childRects.push({layoutId:e.id,id:t,left:parseInt(n.left,10),width:parseInt(n.width,10),height:n.height})}),this.childRects.sort((t,e)=>t.left-e.left),this.flipLeftRight?(this.flippedChildRects=[],this.childRects.forEach(t=>{let e={left:t.left,width:t.width,height:t.height};e=Object(Qe.c)(e),this.flippedChildRects.push({layoutId:t.layoutId,id:t.id,left:e.left,width:e.width,height:e.height})}),this.flippedChildRects.sort((t,e)=>t.left-e.left)):this.flippedChildRects=this.childRects,this.childRects}createItem(t,e){var o;const{transformedLayout:i,itemDraggable:s,itemResizable:a,itemSelectable:r,isMultiRow:l}=this.props,d=this.getConfig(),c=t[e],u=null!==(o=d.space)&&void 0!==o?o:0;let p;if(0===e)p=c.left;else{const o=t[e-1];p=c.left-o.left-o.width}return Object(n.jsx)(oo,{key:`${c.layoutId}_${c.id}`,order:e+1,offset:p,span:c.width,gutter:u,isMultiRow:l,builderTheme:this.builderTheme,layoutId:i.id,layoutItemId:c.id,layoutItem:i.content[c.id],draggable:s,resizable:a,selectable:r,onResizeStart:this.handleItemResizeStart,onResizing:this.handleItemResizing,onResizeEnd:this.handleItemResizeEnd})}render(){var t;const{transformedLayout:e,className:o}=this.props,{isResizing:i,isDragoverCenter:s}=this.state,a=this.getConfig(),r=s;let d;i&&null!=this.state.updatingRects?d=this.state.updatingRects:(this.collectBounds(),d=this.childRects);const c=null!==(t=a.space)&&void 0!==t?t:0;return Object(n.jsx)(l.PageContext.Consumer,null,t=>(this.maxPageWidth=t.maxWidth,this.builderTheme=t.builderTheme,Object(n.jsx)("div",{className:Object(n.classNames)("row-layout",o,{"row-rtl":this.flipLeftRight}),css:Qe.a,"data-layoutid":e.id},Object(n.jsx)("div",{css:n.css`
                width: 100%;
                max-width: ${t.maxWidth>0?t.maxWidth+"px":"none"};
              `},Object(n.jsx)("div",{ref:t=>this.ref=t,css:n.css`
                    position: relative;
                    height: 100%;
                    margin-left: ${-c/2}px;
                    margin-right: ${-c/2}px;
                    display: flex;
                    flex-direction: column;
                    .row {
                      overflow: ${this.props.isMultiRow?"auto":"unset"};
                    }
                    & > .jimu-widget-placeholder {
                      width: calc(100% - ${c}px);
                      align-self: center;
                    }
                  `},Object(n.jsx)(n.OneByOneAnimation,{className:Object(n.classNames)("row m-0",{"flex-nowrap":!this.props.isMultiRow,"h-100":d.length>0}),"data-layoutid":e.id},Object(n.jsx)(kt,{css:lo,layouts:this.props.layouts,highlightDragover:!1,onDragEnter:this.handleDragEnter,onDragLeave:this.handleDragLeave,onDragOver:this.handleDragOver,onDrop:this.handleDrop,onToggleDragoverEffect:this.handleToggleDragoverCenterEffect}),d.map((t,e)=>this.createItem(d,e))),0===d.length&&this.props.children,Object(n.jsx)(ro,{visible:r||i,builderTheme:t.builderTheme,gutter:c}),Object(n.jsx)("canvas",{css:n.css`
                      ${co};
                      display: ${r?"block":"none"};
                    `,ref:t=>this.guideDragOverRef=t}))))))}}class po extends n.React.PureComponent{constructor(t){super(t),this.onResize=(t,e)=>{var o;if(this.props.browserSizeMode!==this.props.mainSizeMode)return;if(0===e)return;const{widgetId:i}=this.props;null!=(null===(o=window.runtimeInfo.widgets)||void 0===o?void 0:o[i])?window.runtimeInfo.widgets[i].height=e:window.runtimeInfo.widgets[i]={height:e}},this.handleDebounceResize=n.lodash.debounce(this.onResize,200)}findExtension(){var t;const e=n.ExtensionManager.getInstance().getExtensions(""+n.extensionSpec.ExtensionPoints.LayoutTransformer);if((null==e?void 0:e.length)>0){const o=e.find(t=>"ROW"===t.layoutType);this.layoutTransform=null===(t=o)||void 0===t?void 0:t.transformLayout}}collectRowItems(){var t;const{layout:e,layouts:o,browserSizeMode:i,mainSizeMode:n}=this.props;null==this.layoutTransform&&this.findExtension();let s=e;o[i]!==e.id&&null!=this.layoutTransform&&(s=this.layoutTransform(e,n,i)),this.finalLayout=s;const a=null!==(t=s.order)&&void 0!==t?t:[],r=[];let l=[],d=0;return r.push(l),a.forEach(t=>{if(s.content[t].isPending)return;const e=s.content[t].bbox,o=parseInt(e.left,10),i=Math.floor(o/qe.b);i>d&&(l=[],d=i,r.push(l)),l.push(t)}),r}createRow(){const{layout:t,layouts:e}=this.props;return Object(n.jsx)(uo,{layouts:e,layout:t,transformedLayout:this.finalLayout,isMultiRow:this.numOfRows>1},this.props.children)}render(){var t;const{layout:e}=this.props,o=null!==(t=e.setting)&&void 0!==t?t:Je.b;return Object(n.jsx)(l.PageContext.Consumer,null,t=>(this.numOfRows=this.collectRowItems().length,Object(n.jsx)("div",{className:Object(n.classNames)("layout d-flex",n.classNames),css:n.css`
                width: 100%;
                padding: ${a.styleUtils.toCSSPadding(o.style.padding)};
              `,"data-layoutid":e.id},this.createRow(),Object(n.jsx)(n.ReactResizeDetector,{handleHeight:!0,onResize:this.handleDebounceResize}))))}}var ho=n.ReactRedux.connect(l.utils.mapStateToLayoutProps)(po),go=o(10);class fo extends n.React.PureComponent{constructor(t){super(t),this.modalStyle={position:"absolute",top:"0",bottom:"0",width:"100%",height:"auto",paddingBottom:"1px"},this.onTransitionSettingChange=t=>{const{layoutId:e,layoutItemId:o}=this.props,i=Object(s.getAppConfigAction)(),a=i.appConfig.layouts[e].content[o];i.editSectionProperty(a.sectionId,"transition",t).exec(),(null==t?void 0:t.type)!==n.TransitionType.None&&this.previewTransition()},this.onEffectSettingChange=(t,e)=>{const o=n.AnimationTriggerType.ScrollIntoView,{layoutId:i,layoutItemId:a,setting:r}=this.props,l=r||Object(n.Immutable)({}),d=t===n.AnimationPlayMode.OneByOne?"oneByOneEffect":"effect";this.props.onSettingChange({layoutId:i,layoutItemId:a},l.setIn([d,o],e)),(null==e?void 0:e.type)!==n.AnimationType.None&&s.builderAppSync.publishAnimationPreviewToApp({layoutInfo:{layoutId:i,layoutItemId:a},playMode:t,id:Symbol("preview animation")})},this.onSectionOneByOneEffectSettingChange=t=>{this.onEffectSettingChange(n.AnimationPlayMode.OneByOne,t)},this.previewAnimation=t=>{this.hasAnimationEffect()&&s.builderAppSync.publishAnimationPreviewToApp({layoutInfo:{layoutId:this.props.layoutId,layoutItemId:this.props.layoutItemId},playMode:t,id:Symbol("preview animation")})},this.previewTransition=(t=!1)=>{var e,o,i;const{sectionId:a}=this.props,r=l.searchUtils.getSectionInfo(Object(n.getAppStore)().getState().appStateInBuilder,a),{views:d}=r;if((null==d?void 0:d.length)>1){let l=null===(i=null===(o=null===(e=Object(n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appRuntimeInfo)||void 0===o?void 0:o.sectionNavInfos)||void 0===i?void 0:i[a];if(!l){const t=bt(r),e=d.indexOf(t),o=e>0?e-1:e+1;l=Object(n.Immutable)({currentViewId:t,previousViewId:d[o]})}s.builderAppSync.publishSectionNavInfoToApp(a,l.set("playId",Symbol("play transition")).set("withOneByOne",t).asMutable())}},this.previewTransitionAndOnebyOne=()=>{this.previewTransition(!0)},this.previewOneByOneInSection=()=>{this.previewAnimation(n.AnimationPlayMode.OneByOne)},this.onPlayModeChange=t=>{const{layoutId:e,layoutItemId:o,setting:i}=this.props,a=i||Object(n.Immutable)({});let r=Object(s.getAppConfigAction)().appConfig;r=r.setIn(["layouts",e,"content",o,"setting"],a.set("effectPlayMode",t)),Object(s.getAppConfigAction)(r).exec()},this.switchToIn=()=>{this.setState({animationType:"in"})},this.switchToTransition=()=>{this.setState({animationType:"transition"})},this.state={animationType:"in"}}hasAnimationEffect(){var t,e;const{setting:o}=this.props,i=null===(t=null==o?void 0:o.effect)||void 0===t?void 0:t[n.AnimationTriggerType.ScrollIntoView],s=null===(e=null==o?void 0:o.oneByOneEffect)||void 0===e?void 0:e[n.AnimationTriggerType.ScrollIntoView];return i&&i.type!==n.AnimationType.None||s&&s.type!==n.AnimationType.None}render(){var t,e;const{formatMessage:o,isLayoutWidget:i,isSection:s,transitionType:r,transitionDirection:l,setting:d}=this.props,{animationType:c}=this.state,u=null===(t=null==d?void 0:d.effect)||void 0===t?void 0:t[n.AnimationTriggerType.ScrollIntoView],p=null===(e=null==d?void 0:d.oneByOneEffect)||void 0===e?void 0:e[n.AnimationTriggerType.ScrollIntoView];return Object(n.jsx)(Tt.SettingSection,{title:o("animation")},s&&Object(n.jsx)(Tt.SettingRow,null,Object(n.jsx)(a.ButtonGroup,{className:"w-100",css:n.css`
            border-bottom: 1px solid var(--primary-500);
            .jimu-btn {
              width: 50%;
              border-radius: 2px 2px 0 0;
            }
          `},Object(n.jsx)(a.Button,{type:"in"===c?"primary":"default",onClick:this.switchToIn},o("in")),Object(n.jsx)(a.Button,{className:"ml-1",type:"transition"===c?"primary":"default",onClick:this.switchToTransition},o("transition")))),"in"===c&&Object(n.jsx)(Tt.SettingRow,{flow:"wrap",label:o("scrollIntoView")},Object(n.jsx)(go.AnimationSettingComponent,{effectSetting:u,oneByOneSetting:p,onSettingChange:this.onEffectSettingChange,previewEnabled:!0,supportAsOne:!0,supportOneByOne:i,onPreviewClicked:this.previewAnimation,formatMessage:o})),"transition"===c&&Object(n.jsx)(Tt.SettingRow,{flow:"wrap"},Object(n.jsx)(go.TransitionSetting,{transition:{type:r,direction:l},transitionLabel:o("view"),oneByOneEffect:p,onOneByOneChange:this.onSectionOneByOneEffectSettingChange,onTransitionChange:this.onTransitionSettingChange,onPreviewTransitionClicked:this.previewTransition,onPreviewOneByOneClicked:this.previewOneByOneInSection,onPreviewAsAWhoneClicked:this.previewTransitionAndOnebyOne,formatMessage:o})))}}var mo=n.ReactRedux.connect((t,e)=>{var o,i,s,a,r,l,d;const c=null===(i=null===(o=t.appStateInBuilder)||void 0===o?void 0:o.appConfig)||void 0===i?void 0:i.layouts[e.layoutId].content[e.layoutItemId];let u,p,h,g=!1;const f=(null==c?void 0:c.type)===n.LayoutItemType.Section,m=(null==c?void 0:c.type)===n.LayoutItemType.Widget;if(m){const e=null===(s=t.appStateInBuilder)||void 0===s?void 0:s.appConfig.widgets[c.widgetId];g=(null===(a=null==e?void 0:e.manifest)||void 0===a?void 0:a.widgetType)===n.WidgetType.Layout}if(f){const e=null===(r=t.appStateInBuilder)||void 0===r?void 0:r.appConfig.sections[c.sectionId];h=e.id,u=null===(l=e.transition)||void 0===l?void 0:l.type,p=null===(d=e.transition)||void 0===d?void 0:d.direction}return{setting:c.setting,isLayoutWidget:g,isSection:f,isWidget:m,transitionType:u,transitionDirection:p,sectionId:h}})(fo);class yo extends n.React.PureComponent{constructor(){super(...arguments),this.onBackgroundStyleChange=t=>{var e,o;let i=Object(n.Immutable)(null!==(o=null===(e=this.props.style)||void 0===e?void 0:e.background)&&void 0!==o?o:{});for(const e in t)switch(e){case"fillType":i.fillType!==t[e]&&(i=i.set("fillType",t[e]));break;case"color":i=i.set("color",t[e]);break;case"image":i=i.set("image",t[e])}this.updateStyle("background",i)},this.updateBorder=t=>{this.updateStyle("border",t)},this.updateRadius=t=>{this.updateStyle("borderRadius",t)},this.updateShadow=t=>{this.updateStyle("boxShadow",t)},this.formatMessage=t=>this.props.formatMessage(t)}updateStyle(t,e){var o;const i=Object(n.Immutable)(null!==(o=this.props.style)&&void 0!==o?o:{});this.props.onStyleChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItemId},i.set(t,e))}allowCoverBackground(){var t,e,o;const{layoutId:i,layoutItemId:a}=this.props,r=Object(s.getAppConfigAction)().appConfig,l=r.layouts[i].content[a];if(l.type===n.LayoutItemType.Widget){const i=l.widgetId;return null===(o=null===(e=null===(t=r.widgets[i])||void 0===t?void 0:t.manifest)||void 0===e?void 0:e.properties)||void 0===o?void 0:o.coverLayoutBackground}return!1}render(){const{layoutId:t,layoutItemId:e}=this.props,o=this.props.style||{};return Object(n.jsx)("div",{className:"common-layout-item-setting"},Object(n.jsx)(mo,{layoutId:t,layoutItemId:e,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage}),!this.props.isSection&&!this.allowCoverBackground()&&Object(n.jsx)(Tt.SettingSection,{title:this.formatMessage("background")},Object(n.jsx)(Tt.SettingRow,null,Object(n.jsx)(go.BackgroundSetting,{background:o.background,onChange:this.onBackgroundStyleChange}))),Object(n.jsx)(Tt.SettingSection,{title:this.formatMessage("border")},Object(n.jsx)(Tt.SettingRow,{flow:"wrap"},Object(n.jsx)(go.BorderSetting,{value:o.border,onChange:this.updateBorder})),Object(n.jsx)(Tt.SettingRow,{label:this.formatMessage("borderRadius"),flow:"wrap"},Object(n.jsx)(go.BorderRadiusSetting,{value:o.borderRadius,onChange:this.updateRadius}))),Object(n.jsx)(Tt.SettingSection,{title:this.formatMessage("boxShadow")},Object(n.jsx)(Tt.SettingRow,{flow:"wrap"},Object(n.jsx)(go.BoxShadowSetting,{value:o.boxShadow,onChange:this.updateShadow}))))}}class vo extends n.React.PureComponent{constructor(){super(...arguments),this.updateRotation=t=>{var e;const o=Object(n.Immutable)(null!==(e=this.props.setting)&&void 0!==e?e:{});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItemId},o.setIn(["style","transform","rotate"],t))},this.formatMessage=t=>this.props.formatMessage(t)}render(){var t,e,o;const i=this.props.setting||{};return Object(n.jsx)(Tt.SettingRow,{label:this.formatMessage("rotation"),className:"rotation-setting"},Object(n.jsx)(a.NumericInput,{value:null!==(o=null===(e=null===(t=i.style)||void 0===t?void 0:t.transform)||void 0===e?void 0:e.rotate)&&void 0!==o?o:0,min:-360,max:360,onChange:this.updateRotation,formatter:t=>t+"°",parser:t=>t.replace("°",""),style:{width:"7.5rem"},size:"sm"}))}}const bo=[a.UnitTypes.PIXEL,a.UnitTypes.PERCENTAGE],Io=o(75);class xo extends n.React.PureComponent{constructor(t){super(t),this.updateBBox=(t,e)=>{const o=this.props.layoutItem.bbox,{distance:i,unit:n}=e,s=o[t];let r=i.toFixed(2);if(l.utils.isPercentage(s)&&n===a.UnitTypes.PIXEL){const e=this.getSizeOfContainer();null!=e&&(r="left"===t||"right"===t||"width"===t?Math.round(parseFloat(s)*e.width/100):Math.round(parseFloat(s)*e.height/100))}else if(!l.utils.isPercentage(s)&&n===a.UnitTypes.PERCENTAGE){const e=this.getSizeOfContainer();null!=e&&(r="left"===t||"right"===t||"width"===t?(100*parseFloat(s)/e.width).toFixed(2):(100*parseFloat(s)/e.height).toFixed(2))}this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o.set(t,e.unit===a.UnitTypes.PERCENTAGE?r+"%":r+"px"))},this.flipLeftRight=l.utils.isRTL()}getStyle(){return n.css`
      .position-setting {
        background-color: var(--light-500);
        position: relative;
        width: 100%;
        padding-top: 60%;
        overflow: visible;
      }

      .content {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        padding: 7px;
      }

      .w-half {
        width: calc(50% - 16px);
        position: relative;
        z-index: 0;
      }
      .h-half {
        height: calc(50% - 16px);
        position: relative;
        z-index: 0;
      }
      .pos-label {
        z-index: 1;
      }

      .box-column {
        width: 32px;
        overflow: visible;
      }

      .box-item {
        width: 24px;
        height: 24px;
        background-color: var(--dark-200);
        margin: 4px 0;
        position: relative;
        overflow: visible;

        &.stretch {
          background-color: transparent;
          border: 1px solid var(--dark-200);
        }
        .h-arrow, .v-arrow {
          display: none;
          .arrow-icon {
            color: var(--dark-200);
            width: 100%;
            height: 100%;
          }
          position: absolute;
          width: 100%;
        }
        .h-arrow {
          top: 50%;
          transform: translateY(-50%);
        }
        .v-arrow {
          left: 50%;
          transform: translateX(-50%);
        }
        &.stretch-w .h-arrow,
        &.stretch-h .v-arrow {
          display: block;
        }
      }

      .anchor {
        position: absolute;
        width: 16px;
        height: 16px;
        background: transparent;
        overflow: visible;

        &.selected {
          width: 10px;
          height: 10px;
          opacity: 1;
          background: var(--primary-100);
          border: 2px solid var(--primary-600) !important;
          border-radius: 3px !important;
        }
        &.top.left {
          border-radius: 3px 0 0 0;
        }
        &.top.right {
          border-radius: 0 3px 0 0;
        }
        &.bottom.right {
          border-radius: 0 0 3px 0;
        }
        &.bottom.left {
          border-radius: 0 0 0 3px;
        }
        &.left {
          left: 6px;
          border-left: 2px solid var(--dark-200);
          &.selected:before {
            position: absolute;
            right: -10px;
            top: 50%;
            transform: translateY(-50%);
            content: '';
            height: 2px;
            width: 10px;
            background-color: var(--primary-600);
          }
        }
        &.top {
          top: 6px;
          border-top: 2px solid var(--dark-200);
          &.selected:after {
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            content: '';
            width: 2px;
            height: 10px;
            background-color: var(--primary-600);
          }
        }
        &.bottom {
          bottom: 6px;
          border-bottom: 2px solid var(--dark-200);
          &.selected:after {
            position: absolute;
            top: -10px;
            left: 50%;
            transform: translateX(-50%);
            content: '';
            width: 2px;
            height: 10px;
            background-color: var(--primary-600);
          }
        }
        &.right {
          right: 6px;
          border-right: 2px solid var(--dark-200);
          &.selected:before {
            position: absolute;
            left: -10px;
            top: 50%;
            transform: translateY(-50%);
            content: '';
            height: 2px;
            width: 10px;
            background-color: var(--primary-600);
          }
        }
      }

      .from-left {
        border-left: 2px solid var(--primary-600);
        &.is-auto {
          border-left-color: var(--dark-200);
        }
        &.allow-change:hover {
          border-left-color: var(--primary-600);
        }
      }
      .from-top {
        border-top: 2px solid var(--primary-600);
        &.is-auto {
          border-top-color: var(--dark-200);
        }
        &.allow-change:hover {
          border-top-color: var(--primary-600);
        }
      }
      .from-right {
        border-right: 2px solid var(--primary-600);
        &.is-auto {
          border-right-color: var(--dark-200);
        }
        &.allow-change:hover {
          border-right-color: var(--primary-600);
        }
      }
      .from-bottom {
        border-bottom: 2px solid var(--primary-600);
        &.is-auto {
          border-bottom-color: var(--dark-200);
        }
        &.allow-change:hover {
          border-bottom-color: var(--primary-600);
        }
      }
      /* .line-h.is-auto,
      .line-v.is-auto {
        border-color: var(--dark-200);
      } */
      .line-h {
        position: absolute;
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
        height: 12px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        z-index: 0;

        &.allow-change {
          cursor: pointer;
          &:hover:after {
            border-top-color: var(--primary-600);
          }
        }
        &:after {
          content: '';
          height: 0;
          width: 100%;
          border-top: 2px solid var(--primary-600);
        }
        &.is-auto:after {
          border-top-style: dashed;
          border-top-color: var(--dark-200);
        }
      }
      .line-v {
        position: absolute;
        height: 100%;
        width: 12px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        justify-content: center;
        z-index: 0;

        &.allow-change {
          cursor: pointer;
          &:hover:after {
            border-left-color: var(--primary-600);
          }
        }
        &:after {
          content: '';
          width: 0;
          height: 100%;
          border-left: 2px solid var(--primary-600);
        }
        &.is-auto:after {
          border-left-style: dashed;
          border-left-color: var(--dark-200);
        }
      }

      .auto-label {
        width: 16px;
        height: 16px;
        background: var(--primary);
        border: 1px solid var(--light-500);
        font-size: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--light-300);
      }

      .style-setting--input-unit {
        &:hover {
          input.jimu-numeric-input-input {
            background-color: var(--light-200);
          }
          .style-setting--unit-selector {
            background-color: var(--light-200);
          }
        }
        border-radius: 2px;
        width: 52px;
        height: 24px;

        input.jimu-numeric-input-input {
          height: 24px;
          font-size: 12px;
          padding: 0;
          text-align: center;
          border: none;
          background-color: var(--light-500);
          &:focus {
            background-color: var(--light-200);
          }
        }
        .style-setting--unit-selector {
          background-color: var(--light-500);
          color: var(--dark-400);
          height: 24px;
          width: 20px;
          min-width: 0;
          padding: 0;
          margin-left: 0;
          font-size: 12px;
          border: none;
        }
      }

      .origin-tip {
        margin-top: 8px;
        font-size: 12px;
        color: var(--dark-400);
      }
    `}inputUnit(t){const{layoutItem:e}=this.props,o=a.utils.stringOfLinearUnit(e.bbox[t]);return Object(n.jsx)("div",{className:"pos-label"},Object(n.jsx)(go.InputUnit,{units:bo,min:-1/0,max:1/0,value:o,onChange:e=>this.updateBBox(t,e)}))}getSizeOfContainer(){const t=this.querySelector(`div.fixed-layout[data-layoutid="${this.props.layoutId}"]`);return null==t?void 0:t.getBoundingClientRect()}getSizeOfItem(){const{layoutId:t,layoutItem:e}=this.props,o=this.querySelector(`div.exb-rnd[data-layoutid="${t}"][data-layoutitemid="${e.id}"]`);return null==o?void 0:o.getBoundingClientRect()}querySelector(t){var e;const o=document.querySelector(`iframe[name="${n.APP_FRAME_NAME_IN_BUILDER}"]`);if(null!=o){return(null!==(e=o.contentDocument)&&void 0!==e?e:o.contentWindow.document).querySelector(t)}return null}switchAuto(t,e,o){var i,s;const{layoutId:a,layoutItem:r}=this.props,d=null!==(i=r.setting)&&void 0!==i?i:Object(n.Immutable)({});let c=null!==(s=r.bbox)&&void 0!==s?s:Object(n.Immutable)({});if(o&&null==c[t]){const e=this.getSizeOfContainer(),o=this.getSizeOfItem();switch(t){case"left":c=c.set(t,l.utils.toRatio(o.left,e.width));break;case"right":c=c.set(t,l.utils.toRatio(e.width-o.right,e.width));break;case"top":c=c.set(t,l.utils.toRatio(o.top,e.height));break;case"bottom":c=c.set(t,l.utils.toRatio(e.height-o.bottom,e.height))}this.props.onPosChange({layoutId:a,layoutItemId:r.id},c)}this.props.onSettingChange({layoutId:a,layoutItemId:r.id},d.setIn(["autoProps",t],!o).setIn(["autoProps",e],o))}checkAutoProps(t){const e=Object(he.e)(this.props.layoutItem.bbox,t);return{leftAuto:null==e.left||t.hCenter&&"50%"===e.left,rightAuto:null==e.right||t.hCenter&&"50%"===e.left,topAuto:null==e.top||t.vCenter&&"50%"===e.top,bottomAuto:null==e.bottom||t.vCenter&&"50%"===e.top}}checkOrigin(t,e,o,i){let n=t,s=e,a=o,r=i;return t===e&&(n=l.utils.isRTL(),s=!n),o===i&&(a=!1,r=!0),{top:a,bottom:r,left:n,right:s}}allowChangeAutoProps(t){var e;const o=this.props.layoutItem.setting,i=null!==(e=null==o?void 0:o.autoProps)&&void 0!==e?e:{};return!(l.utils.getLayoutItemSizeMode(t,this.props.layoutItem.bbox,i)===l.LayoutItemSizeModes.Stretch||"width"===t&&(null==o?void 0:o.hCenter)||"height"===t&&(null==o?void 0:o.vCenter))}getOrigin(t,e,o,i){const{formatMessage:n}=this.props;return t||e?o||e?o||i?t||i?"":n("BL"):n("BR"):n("TR"):n("TL")}render(){const{layoutItem:t,widthMode:e,heightMode:o,formatMessage:i}=this.props;if(null==t)return null;const s=n.lodash.assign({},r.a,t.setting),{leftAuto:d,rightAuto:c,topAuto:u,bottomAuto:p}=this.checkAutoProps(s),{top:h,bottom:g,left:f,right:m}=this.checkOrigin(d,c,u,p),y=this.allowChangeAutoProps("width"),v=this.allowChangeAutoProps("height");return Object(n.jsx)("div",{css:this.getStyle(),className:"w-100"},Object(n.jsx)("div",{className:"position-setting rounded-lg"},Object(n.jsx)("div",{className:"content d-flex justify-content-center align-items-center"},Object(n.jsx)("div",{className:"d-flex w-half flex-column justify-content-center align-items-center"},Object(n.jsx)("div",{className:"d-flex w-100 justify-content-center align-items-center"},Object(n.jsx)(a.Tooltip,{placement:"bottom",title:y?i(d?"changeToCustom":"changeToAuto"):""},Object(n.jsx)("div",{className:Object(n.classNames)("from-left line-h flex-grow-1 flex-shrink-1",{"is-auto":d,"allow-change":y}),onClick:y?this.switchAuto.bind(this,"left","right",d):null})),d?null:this.inputUnit("left"))),Object(n.jsx)("div",{className:"d-flex h-100 flex-column justify-content-center align-items-center box-column"},Object(n.jsx)("div",{className:"d-flex h-half w-100 flex-column justify-content-center align-items-center"},Object(n.jsx)(a.Tooltip,{placement:"bottom",title:v?i(u?"changeToCustom":"changeToAuto"):""},Object(n.jsx)("div",{className:Object(n.classNames)("from-top line-v flex-grow-1 flex-shrink-1",{"is-auto":u,"allow-change":v}),onClick:v?this.switchAuto.bind(this,"top","bottom",u):null})),u?null:this.inputUnit("top")),Object(n.jsx)("div",{className:Object(n.classNames)("box-item rounded-lg",{stretch:e===l.LayoutItemSizeModes.Stretch||o===l.LayoutItemSizeModes.Stretch,"stretch-w":e===l.LayoutItemSizeModes.Stretch,"stretch-h":o===l.LayoutItemSizeModes.Stretch})},Object(n.jsx)("div",{className:"h-arrow"},Object(n.jsx)(a.Icon,{icon:Io,className:"arrow-icon"})),Object(n.jsx)("div",{className:"v-arrow"},Object(n.jsx)(a.Icon,{icon:Io,rotate:90,className:"arrow-icon"}))),Object(n.jsx)("div",{className:"d-flex h-half w-100 flex-column justify-content-center align-items-center"},Object(n.jsx)(a.Tooltip,{placement:"bottom",title:v?i(p?"changeToCustom":"changeToAuto"):""},Object(n.jsx)("div",{className:Object(n.classNames)("from-bottom line-v flex-grow-1 flex-shrink-1",{"is-auto":p,"allow-change":v}),onClick:v?this.switchAuto.bind(this,"bottom","top",p):null})),p?null:this.inputUnit("bottom"))),Object(n.jsx)("div",{className:"d-flex w-half flex-column justify-content-center align-items-center"},Object(n.jsx)("div",{className:"d-flex w-100 justify-content-center align-items-center"},Object(n.jsx)(a.Tooltip,{placement:"bottom",title:y?i(c?"changeToCustom":"changeToAuto"):""},Object(n.jsx)("div",{className:Object(n.classNames)("from-right line-h flex-grow-1 flex-shrink-1",{"is-auto":c,"allow-change":y}),onClick:y?this.switchAuto.bind(this,"right","left",c):null})),c?null:this.inputUnit("right"))),Object(n.jsx)("div",{className:Object(n.classNames)("anchor top left",{selected:!f&&!h})}),Object(n.jsx)("div",{className:Object(n.classNames)("anchor top right",{selected:!m&&!h})}),Object(n.jsx)("div",{className:Object(n.classNames)("anchor bottom left",{selected:!f&&!g})}),Object(n.jsx)("div",{className:Object(n.classNames)("anchor bottom right",{selected:!g&&!m})}))),Object(n.jsx)("div",{className:"origin-tip d-flex justify-content-center align-item-center"},this.getOrigin(f,h,m,g)))}}const wo=o(34),jo=o(40),So=[l.LayoutItemSizeModes.Auto,l.LayoutItemSizeModes.Custom,l.LayoutItemSizeModes.Stretch],Co=[l.LayoutItemSizeModes.Custom,l.LayoutItemSizeModes.Stretch],Oo=[...[pe[1][1],pe[1][2],pe[1][3],pe[1][4],{seperator:!0},pe[0][1],pe[0][2],pe[0][3]].map(t=>Object.assign(Object.assign({},t),{title:t.title,label:null})),[{icon:o(44)},pe[0][4],pe[0][5],pe[0][6],{seperator:!0},pe[0][7],pe[0][8],pe[0][9]]];class Ro extends n.React.PureComponent{constructor(t){super(t),this.updateBBox=(t,e)=>{var o;let i=this.props.layoutItem.bbox;const{distance:n,unit:s}=e,r=i[t],d=this.getSizeOfContainer();let c,u=n.toFixed(2);if(l.utils.isPercentage(r)&&s===a.UnitTypes.PIXEL?d&&(u="left"===t||"right"===t||"width"===t?Math.round(parseFloat(r)*d.width/100):Math.round(parseFloat(r)*d.height/100),c=u):l.utils.isPercentage(r)||s!==a.UnitTypes.PERCENTAGE||(d&&(u="left"===t||"right"===t||"width"===t?(100*parseFloat(r)/d.width).toFixed(4):(100*parseFloat(r)/d.height).toFixed(4)),c=parseFloat(r)),c||s!==a.UnitTypes.PERCENTAGE)c||s!==a.UnitTypes.PIXEL||(c=n);else{const e="width"===t?d.width:d.height;c=Math.round(n*e/100)}if(i=i.set(t,s===a.UnitTypes.PERCENTAGE?u+"%":u+"px"),"ratio"===(null===(o=this.props.layoutItem.setting)||void 0===o?void 0:o.heightMode)){const e=l.utils.parseAspectRatio(this.props.layoutItem.setting.aspectRatio);if("width"===t){const t=c*e;if(l.utils.isPercentage(i.height)){const e=(100*t/d.height).toFixed(4);i=i.set("height",e+"%")}else i=i.set("height",Math.round(t)+"px")}else{const t=c/e;if(l.utils.isPercentage(i.width)){const e=(100*t/d.width).toFixed(4);i=i.set("width",e+"%")}else i=i.set("width",Math.round(t)+"px")}}this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i)},this.updateMode=(t,e)=>{var o;const i=null!==(o=this.props.layoutItem.setting)&&void 0!==o?o:Object(n.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i.setIn(["autoProps",t],e))},this.updateLockParent=t=>{let e=this.props.layoutItem.setting||Object(n.Immutable)({});e=e.set("lockParent",t.target.checked),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},e)},this.toggleHeightMode=()=>{let t=this.props.layoutItem.setting||Object(n.Immutable)({});const e="ratio"===t.heightMode?"fixed":"ratio";if(t=t.set("heightMode",e),"ratio"===e){const e=this.getSizeOfItem();e&&(t=t.set("aspectRatio",Number((e.height/e.width).toFixed(2))))}this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},t)},this.updateAspectRatio=t=>{let e=this.props.layoutItem.setting||Object(n.Immutable)({});e=e.set("aspectRatio",t),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},e)},this.flipLeftRight=l.utils.isRTL(),this.state={enableToolbar:!1}}componentDidMount(){this.ref&&this.setState({enableToolbar:!0})}getSizeOfContainer(){const t=this.querySelector(`div.fixed-layout[data-layoutid="${this.props.layoutId}"]`);return t?t.getBoundingClientRect():null}getSizeOfItem(){const{layoutId:t,layoutItem:e}=this.props,o=this.querySelector(`div.exb-rnd[data-layoutid="${t}"][data-layoutitemid="${e.id}"]`);return o?o.getBoundingClientRect():null}querySelector(t){const e=document.querySelector(`iframe[name="${n.APP_FRAME_NAME_IN_BUILDER}"]`);if(e){return(e.contentDocument||e.contentWindow.document).querySelector(t)}return null}getStyle(){return n.css`
      .layout-item-toolbar {
        box-shadow: none;
        background: transparent;

        .toolbar-item, icon-container {
          width: 26px;
          min-height: 26px;
        }
        .toolbar-group {
          background: transparent;
          margin: 0 1px;
          min-width: 40px;
        }
        .toolbar-item {
          margin: 0 1px;
          background: transparent;
          &:hover {
            background: var(--light-500);
          }

          svg {
            width: 14px;
            height: 14px;
          }
        }
      }

      .ratio-value {
        font-size: 12px;
      }
    `}render(){const{layoutItem:t,layoutId:e,formatMessage:o,isLockLayout:i,supportAutoSize:s}=this.props;if(!t)return null;this.itemSetting=n.lodash.assign({},r.a,t.setting);const d="ratio"===this.itemSetting.heightMode,c=l.utils.getLayoutItemSizeMode("width",t.bbox,this.itemSetting.autoProps),u=l.utils.getLayoutItemSizeMode("height",t.bbox,this.itemSetting.autoProps),p=t.bbox,h=Object(n.getAppStore)().getState().theme,g=n.css`width: 60%`;return Object(n.jsx)("div",{className:"fixed-item-setting",css:this.getStyle(),ref:t=>this.ref=t},!i&&this.state.enableToolbar&&Object(n.jsx)(n.React.Fragment,null,Object(n.jsx)(Tt.SettingSection,{className:"p-0 d-flex justify-content-center"},Object(n.jsx)(ot,{layoutId:e,layoutItem:t,parentRef:this.ref,theme:h,tools:Oo,formatMessage:this.props.formatMessage})),Object(n.jsx)(Tt.SettingSection,{title:`${o("size")} & ${o("position")}`},Object(n.jsx)(Tt.SettingRow,{label:o("width")},Object(n.jsx)("div",{css:g},Object(n.jsx)(go.SizeEditor,{label:"W",mode:c,sizeModes:s&&!d?So:Co,value:a.utils.stringOfLinearUnit(p.width),onChange:t=>this.updateBBox("width",t),onModeChange:t=>this.updateMode("width",t)}))),c!==l.LayoutItemSizeModes.Auto&&Object(n.jsx)("div",{className:"ml-3 d-flex",css:n.css`
                    .icon {
                      cursor: pointer;
                      width: 12px;
                    }
                  `},Object(n.jsx)(a.Tooltip,{title:o("keepAspectRatio"),placement:"bottom"},Object(n.jsx)("div",{className:"icon",onClick:this.toggleHeightMode},Object(n.jsx)(a.Icon,{icon:d?wo:jo,size:12})))),Object(n.jsx)(Tt.SettingRow,{label:o("height")},Object(n.jsx)("div",{css:g},Object(n.jsx)(go.SizeEditor,{label:"H",mode:u,sizeModes:s?So:Co,disabled:d,value:a.utils.stringOfLinearUnit(p.height),onChange:t=>this.updateBBox("height",t),onModeChange:t=>this.updateMode("height",t)}))),d&&Object(n.jsx)(Tt.SettingRow,{label:o("aspectRatio")},Object(n.jsx)(go.InputRatio,{value:this.itemSetting.aspectRatio,style:{width:"7.5rem"},onChange:this.updateAspectRatio})),Object(n.jsx)(Tt.SettingRow,null,Object(n.jsx)(xo,Object.assign({},this.props,{widthMode:c,heightMode:u}))),Object(n.jsx)(vo,{layoutId:e,layoutItemId:t.id,setting:t.setting,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage})),Object(n.jsx)(Tt.SettingSection,null,Object(n.jsx)(Tt.SettingRow,{label:o("lockParent")},Object(n.jsx)(a.Switch,{checked:this.itemSetting.lockParent,onChange:this.updateLockParent})))),(t.widgetId||t.sectionId)&&Object(n.jsx)(yo,{layoutId:e,layoutItemId:t.id,style:this.props.style,isSection:t.type===n.LayoutItemType.Section,onStyleChange:this.props.onStyleChange,formatMessage:this.props.formatMessage,setting:t.setting||Object(n.Immutable)({}),onSettingChange:this.props.onSettingChange}))}}var Mo=o(16),To=o(20);const Ao={[n.ScreenTransitionType.Push]:o(46),[n.ScreenTransitionType.Fade]:o(76),[n.ScreenTransitionType.Cover]:o(46)};class Po extends n.React.PureComponent{constructor(){super(...arguments),this.onTypeChanged=(t,e,o)=>{o?this.props.onPanelTransitionTypeChange(e):this.props.onTransitionTypeChange(e)},this.updateFirstPanel=t=>{}}getStyle(){return n.css`
      .animation-cards {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-row-gap: 12px;
        grid-column-gap: 12px;
      }

      .card-item {
        font-size: 13px;
        flex: 0 0 45%;

        user-select: none;
        cursor: pointer;
        position: relative;

        .card-content {
          width: 100%;
          height: 5rem;
          background-color: var(--light-200);
        }

        &.selected .card-content {
          outline: 2px solid var(--primary-700);
        }

        .card-image {
          width: 100%;
          height: 100%;
          padding: 8px;
          &:after {
            display: none;
          }
        }

        .card-name {
          max-width: 90px;
          margin: 0 auto;
          color: var(--dark-800);
          .card-name-content {
            line-height: 1rem;
            max-height: 2rem;
            white-space: normal;
          }
        }
      }
    `}createAnimationCard(t,e,o=!1){const{transitionType:i,panelTransitionType:s}=this.props;let r;return r=o?null!=s?s:n.ScreenTransitionType.Push:null!=i?i:n.ScreenTransitionType.Fade,Object(n.jsx)("div",{className:Object(n.classNames)("d-flex flex-column align-items-center card-item",{selected:t===r}),key:e,onClick:e=>this.onTypeChanged(e,t,o)},Object(n.jsx)("div",{className:"d-flex justify-content-center card-content"},Object(n.jsx)("div",{className:"card-image"},Object(n.jsx)(a.Icon,{className:"w-100",options:{currentColor:!1},icon:Ao[t],size:72}))),Object(n.jsx)("div",{className:"card-name flex-grow-1 d-flex align-items-start mt-1"},Object(n.jsx)("span",{className:"text-center text-truncate card-name-content",title:this.props.formatMessage(t.toLowerCase())},this.props.formatMessage(t.toLowerCase()))))}render(){const{formatMessage:t}=this.props;return Object(n.jsx)("div",{className:"bg-light-300 border-color-gray-400",css:this.getStyle()},Object(n.jsx)(Tt.SettingSection,{title:t("mainStage")},Object(n.jsx)("div",{className:"animation-cards"},[n.ScreenTransitionType.Fade,n.ScreenTransitionType.Cover,n.ScreenTransitionType.Push].map((t,e)=>this.createAnimationCard(t,e)))),Object(n.jsx)(Tt.SettingSection,{title:t("scrollingPanel")},Object(n.jsx)("div",{className:"animation-cards"},[n.ScreenTransitionType.Push,n.ScreenTransitionType.Fade].map((t,e)=>this.createAnimationCard(t,e,!0)))),Object(n.jsx)(Tt.SettingSection,null,Object(n.jsx)(Tt.SettingRow,null,Object(n.jsx)(a.Checkbox,{onChange:this.updateFirstPanel,className:"mr-2"}),t("applyToFirstPanel"))))}}const Lo=o(77),zo=o(78);class ko extends n.React.PureComponent{constructor(t){super(t),this.sidePopperTrigger=n.React.createRef(),this.onTransitionTypeChange=t=>{const{screenGroupId:e}=this.props.layoutItem;let o=Object(s.getAppConfigAction)().appConfig;o=o.setIn(["screenGroups",e,"transitionType"],t),Object(s.getAppConfigAction)(o).exec()},this.onPanelTransitionTypeChange=t=>{const{screenGroupId:e}=this.props.layoutItem;let o=Object(s.getAppConfigAction)().appConfig;o=o.setIn(["screenGroups",e,"panelTransitionType"],t),Object(s.getAppConfigAction)(o).exec()},this.toggleSidePanel=()=>{this.setState({showSidePanel:!this.state.showSidePanel})},this.state={showSidePanel:!1}}getAnimBoxStyle(){return n.css`
      background-color: transparent;
      width: 100%;
      height: 72px;

      .img-tip {
        position: relative;
        min-width: 90px;
        height: 72px;
        cursor: pointer;
        background: var(--light-200);

        .has-sibling {
          position: absolute;
          &.first {
            left: 5px;
            top: 5px;
          }
          &.second {
            bottom: 5px;
            right: 5px;
          }
        }

        .diag-sep {
          position: absolute;
          height: 1px;
          width: 80px;
          top: 36px;
          transform: rotateZ(-45deg);
          background: var(--light-500);
        }
      }

      .anim-label {
        align-self: flex-start;
      }
    `}getSidePopperStyle(){return n.css`
      .header {
        height: 60px;
        padding: 0 0.5rem;
      }
      .side-popper-title {
        color: var(--dark-600);
        font-size: 13px;
      }
      .side-content {
        position: relative;
        width: 100%;
        height: calc(100% - 60px);
        overflow: auto;
      }
    `}render(){var t,e,o,i,s;const{formatMessage:r}=this.props,l=null!==(t=this.props.transitionType)&&void 0!==t?t:n.ScreenTransitionType.Fade,d=null!==(e=this.props.panelTransitionType)&&void 0!==e?e:n.ScreenTransitionType.Push;return Object(n.jsx)(Tt.SettingSection,{title:r("transition")},Object(n.jsx)("div",{className:"anima-box d-flex justify-content-between align-items-center",css:this.getAnimBoxStyle()},Object(n.jsx)("div",{className:"img-tip d-flex justify-content-center align-items-center",onClick:this.toggleSidePanel},Object(n.jsx)("div",{className:"anim-icon first has-sibling"},Object(n.jsx)(a.Icon,{icon:null!==(o=Ao[l])&&void 0!==o?o:zo,size:32})),Object(n.jsx)("div",{className:"diag-sep"}),Object(n.jsx)("div",{className:"anim-icon second has-sibling"},Object(n.jsx)(a.Icon,{icon:null!==(i=Ao[d])&&void 0!==i?i:zo,size:32}))),Object(n.jsx)("div",{className:"d-flex flex-column justify-content-between align-items-end h-100"},Object(n.jsx)("div",{className:"anim-label"},Object(n.jsx)("span",null,r(l.toLowerCase())),Object(n.jsx)("span",{className:"mx-1"},"/"),Object(n.jsx)("span",null,r(d.toLowerCase()))),Object(n.jsx)("div",{className:"amin-icons w-100",ref:this.sidePopperTrigger},Object(n.jsx)(a.Button,{size:"sm",onClick:this.toggleSidePanel,className:"text-truncate",title:r("change")},r("change"))))),this.state.showSidePanel&&Object(n.jsx)(Tt.SidePopper,{isOpen:!0,css:this.getSidePopperStyle(),position:"right",toggle:this.toggleSidePanel,trigger:null===(s=this.sidePopperTrigger)||void 0===s?void 0:s.current},Object(n.jsx)(Tt.SettingSection,{className:"header d-flex justify-content-between align-items-center"},Object(n.jsx)("div",{className:"side-popper-title m-2"},r("transition")),Object(n.jsx)("div",{className:"clost-btn",title:r("close")},Object(n.jsx)(a.Button,{type:"tertiary",className:"p-0 d-flex justify-content-center align-items-center",onClick:this.toggleSidePanel},Object(n.jsx)(a.Icon,{icon:Lo,size:12})))),Object(n.jsx)("div",{className:"side-content"},Object(n.jsx)(Po,{transitionType:l,panelTransitionType:d,onTransitionTypeChange:this.onTransitionTypeChange,onPanelTransitionTypeChange:this.onPanelTransitionTypeChange,formatMessage:r}))))}}var No=n.ReactRedux.connect((t,e)=>{const{screenGroupId:o}=e.layoutItem,{appConfig:i}=t.appStateInBuilder;return{transitionType:i.screenGroups[o].transitionType,panelTransitionType:i.screenGroups[o].panelTransitionType}})(ko);const Bo={width:110};class $o extends n.React.PureComponent{constructor(){super(...arguments),this.updateWidth=t=>{let e=this.props.layoutItem.setting||Object(n.Immutable)({});e=e.set("width",a.utils.stringOfLinearUnit(t)),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},e)},this.updateBBoxWidth=t=>{let e=Object(n.Immutable)(this.props.layoutItem.bbox||{});e=e.set("width",a.utils.stringOfLinearUnit(t)),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},e)},this.updateHeight=t=>{let e=Object(n.Immutable)(this.props.layoutItem.bbox||{});e=e.set("height",a.utils.stringOfLinearUnit(t)),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},e)},this.updateOffsetX=t=>{const e=this.props.layoutItem.setting||Object(n.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},e.set("offsetX",t))},this.updateOffsetY=t=>{const e=this.props.layoutItem.setting||Object(n.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},e.set("offsetY",t))},this.updateHeightMode=t=>{let e=this.props.layoutItem.setting||Object(n.Immutable)({});e=e.set("heightMode",t===l.LayoutItemSizeModes.Custom?"fixed":"auto"),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},e)}}updateFloatingArea(t){const e=this.props.layoutItem.setting||Object(n.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},e.set("floatingArea",t))}getStyle(){return n.css`
      .floating-position {
        margin-bottom: 1rem;
      }

      .floating-area-chooser {
        position: relative;

        .content {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-row-gap: 0;
          grid-column-gap: 0;
          border: 1px solid var(--light-500);

          & > div {
            cursor: pointer;
            width: 30px;
            height: 30px;
            position: relative;
          }

          & > div:nth-of-type(3n+1) {
            border-right: 1px solid var(--light-500);
          }
          & > div:nth-of-type(3n) {
            border-left: 1px solid var(--light-500);
          }
          & > div:nth-of-type(1), & > div:nth-of-type(2), & > div:nth-of-type(3) {
            border-bottom: 1px solid var(--light-500);
          }
          & > div:nth-of-type(7), & > div:nth-of-type(8), & > div:nth-of-type(9) {
            border-top: 1px solid var(--light-500);
          }

          .selected:after {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: var(--primary-100);
            border: 1px solid var(--primary-600);
          }
        }
      }
    `}render(){const{layoutId:t,layoutItem:e,formatMessage:o,isLockLayout:i}=this.props;if(!e)return null;if(e.type===n.LayoutItemType.ScreenGroup)return Object(n.jsx)(No,Object.assign({},this.props));this.itemSetting=n.lodash.assign({},Mo.a,e.setting);const s=e.bbox;return Object(n.jsx)("div",{className:"flow-item-setting",css:this.getStyle()},!i&&Object(n.jsx)(n.React.Fragment,null,Object(n.jsx)(Tt.SettingSection,{title:`${o("position")} & ${o("size")}`},Object(n.jsx)("div",{className:"floating-position d-flex"},Object(n.jsx)("div",{className:"floating-area-chooser"},Object(n.jsx)("div",{className:"content"},Object(n.jsx)("div",{className:Object(n.classNames)("top-left",{selected:1===this.itemSetting.floatingArea}),onClick:this.updateFloatingArea.bind(this,1)}),Object(n.jsx)("div",{className:Object(n.classNames)("top-center",{selected:2===this.itemSetting.floatingArea}),onClick:this.updateFloatingArea.bind(this,2)}),Object(n.jsx)("div",{className:Object(n.classNames)("top-right",{selected:3===this.itemSetting.floatingArea}),onClick:this.updateFloatingArea.bind(this,3)}),Object(n.jsx)("div",{className:Object(n.classNames)("middle-left",{selected:4===this.itemSetting.floatingArea}),onClick:this.updateFloatingArea.bind(this,4)}),Object(n.jsx)("div",{className:Object(n.classNames)("middle-center",{selected:5===this.itemSetting.floatingArea}),onClick:this.updateFloatingArea.bind(this,5)}),Object(n.jsx)("div",{className:Object(n.classNames)("middle-right",{selected:6===this.itemSetting.floatingArea}),onClick:this.updateFloatingArea.bind(this,6)}),Object(n.jsx)("div",{className:Object(n.classNames)("bottom-left",{selected:7===this.itemSetting.floatingArea}),onClick:this.updateFloatingArea.bind(this,7)}),Object(n.jsx)("div",{className:Object(n.classNames)("bottom-center",{selected:8===this.itemSetting.floatingArea}),onClick:this.updateFloatingArea.bind(this,8)}),Object(n.jsx)("div",{className:Object(n.classNames)("bottom-right",{selected:9===this.itemSetting.floatingArea}),onClick:this.updateFloatingArea.bind(this,9)}))),Object(n.jsx)("div",{className:"d-flex flex-grow-1 flex-column justify-content-between align-items-end"},Object(n.jsx)("div",{className:"d-flex align-items-center",css:n.css`width: 110px`},Object(n.jsx)("span",{className:"mr-2"},"W"),Object(n.jsx)(go.SizeEditor,{label:"W",mode:l.LayoutItemSizeModes.Custom,disableModeSelect:!0,value:null==s?void 0:s.width,onChange:this.updateBBoxWidth})),Object(n.jsx)("div",{className:"d-flex align-items-center",css:n.css`width: 110px`},Object(n.jsx)("span",{className:"mr-2"},"H"),Object(n.jsx)(go.SizeEditor,{label:"H",mode:l.LayoutItemSizeModes.Custom,disableModeSelect:!0,value:null==s?void 0:s.height,onChange:this.updateHeight})))),Object(n.jsx)(Tt.SettingRow,{label:o("offsetX")},Object(n.jsx)(a.NumericInput,{style:Bo,value:this.itemSetting.offsetX,onChange:this.updateOffsetX,size:"sm"})),Object(n.jsx)(Tt.SettingRow,{label:o("offsetY")},Object(n.jsx)(a.NumericInput,{style:Bo,value:this.itemSetting.offsetY,onChange:this.updateOffsetY,size:"sm"})))),(e.widgetId||e.sectionId)&&Object(n.jsx)(yo,{layoutId:t,layoutItemId:e.id,isSection:!1,style:this.props.style,onStyleChange:this.props.onStyleChange,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage}))}}const Eo={width:110},Do=[l.LayoutItemSizeModes.Auto,l.LayoutItemSizeModes.Custom],Fo=[a.UnitTypes.PIXEL];class Vo extends n.React.PureComponent{constructor(){super(...arguments),this.updateWidth=t=>{let e=this.props.layoutItem.setting||Object(n.Immutable)({});e=e.set("width",a.utils.stringOfLinearUnit(t)),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},e)},this.updateBBoxWidth=t=>{let e=Object(n.Immutable)(this.props.layoutItem.bbox||{});e=e.set("width",a.utils.stringOfLinearUnit(t)),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},e)},this.updateHeight=t=>{let e=Object(n.Immutable)(this.props.layoutItem.bbox||{});e=e.set("height",a.utils.stringOfLinearUnit(t)),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},e)},this.updateOffsetX=t=>{const e=this.props.layoutItem.setting||Object(n.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},e.set("offsetX",t))},this.updateOffsetY=t=>{const e=this.props.layoutItem.setting||Object(n.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},e.set("offsetY",t))},this.updateHeightMode=t=>{let e=this.props.layoutItem.setting||Object(n.Immutable)({});e=e.set("heightMode",t===l.LayoutItemSizeModes.Custom?"fixed":"auto"),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},e)}}updateFloatingArea(t){const e=this.props.layoutItem.setting||Object(n.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},e.set("floatingArea",t))}render(){var t,e;const{layoutId:o,layoutItem:i,formatMessage:s,isLockLayout:r}=this.props;if(!i)return null;if(i.type===n.LayoutItemType.ScreenGroup)return Object(n.jsx)(No,Object.assign({},this.props));if(this.itemSetting=n.lodash.assign({},Mo.a,i.setting),this.itemSetting.isFloating)return Object(n.jsx)($o,Object.assign({},this.props));const d=i.bbox,c=a.utils.stringOfLinearUnit(Object(To.b)(this.itemSetting)),u=a.utils.stringOfLinearUnit(parseFloat(null===(t=i.bbox)||void 0===t?void 0:t.height)>0?null===(e=i.bbox)||void 0===e?void 0:e.height:100),p="auto"===this.itemSetting.heightMode||l.utils.isPercentage(null==d?void 0:d.height);return Object(n.jsx)("div",{className:"flow-item-setting"},!r&&Object(n.jsx)(n.React.Fragment,null,Object(n.jsx)(Tt.SettingSection,{title:s("size")},Object(n.jsx)(Tt.SettingRow,{label:s("width")},Object(n.jsx)("div",{style:Eo},Object(n.jsx)(go.SizeEditor,{label:"W",mode:l.LayoutItemSizeModes.Custom,disableModeSelect:!0,value:c,onChange:this.updateWidth}))),Object(n.jsx)(Tt.SettingRow,{label:s("height")},Object(n.jsx)("div",{style:Eo},Object(n.jsx)(go.SizeEditor,{label:"H",mode:p?l.LayoutItemSizeModes.Auto:l.LayoutItemSizeModes.Custom,sizeModes:Do,availableUnits:Fo,disableModeSelect:!1,value:u,onChange:this.updateHeight,onModeChange:this.updateHeightMode})))),Object(n.jsx)(Tt.SettingSection,{title:s("position")},Object(n.jsx)(Tt.SettingRow,{label:s("offsetX")},Object(n.jsx)(a.NumericInput,{style:Eo,value:this.itemSetting.offsetX,onChange:this.updateOffsetX,size:"sm"})),Object(n.jsx)(Tt.SettingRow,{label:s("offsetY")},Object(n.jsx)(a.NumericInput,{style:Eo,value:this.itemSetting.offsetY,onChange:this.updateOffsetY,size:"sm"})))),(i.widgetId||i.sectionId)&&Object(n.jsx)(yo,{layoutId:o,layoutItemId:i.id,isSection:!1,style:this.props.style,onStyleChange:this.props.onStyleChange,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage}))}}const Ho={width:"7.5rem"},Wo=[l.LayoutItemSizeModes.Stretch,l.LayoutItemSizeModes.Custom],Go=[l.LayoutItemSizeModes.Auto,l.LayoutItemSizeModes.Stretch,l.LayoutItemSizeModes.Custom],Uo=[l.LayoutItemSizeModes.Stretch,l.LayoutItemSizeModes.Custom],_o=[a.UnitTypes.PIXEL,a.UnitTypes.PERCENTAGE],Yo=[a.UnitTypes.PIXEL],Zo=o(34),Xo=o(40);class Jo extends n.React.PureComponent{constructor(){super(...arguments),this.updateBBox=(t,e)=>{var o;let i=this.props.layoutItem.bbox;const{distance:n,unit:s}=e,r=i[t],d=this.getSizeOfContainer();let c,u=n.toFixed(2);if(l.utils.isPercentage(r)&&s===a.UnitTypes.PIXEL?d&&(u="left"===t||"right"===t||"width"===t?Math.round(parseFloat(r)*d.width/100):Math.round(parseFloat(r)*d.height/100),c=u):l.utils.isPercentage(r)||s!==a.UnitTypes.PERCENTAGE||(d&&(u="left"===t||"right"===t||"width"===t?(100*parseFloat(r)/d.width).toFixed(4):(100*parseFloat(r)/d.height).toFixed(4)),c=parseFloat(r)),c||s!==a.UnitTypes.PERCENTAGE)c||s!==a.UnitTypes.PIXEL||(c=n);else{const e="width"===t?d.width:d.height;c=Math.round(n*e/100)}if(i=i.set(t,s===a.UnitTypes.PERCENTAGE?u+"%":u+"px"),"ratio"===(null===(o=this.props.layoutItem.setting)||void 0===o?void 0:o.heightMode)){const e=this.props.layoutItem.setting.aspectRatio;if("width"===t){const t=c*e;if(l.utils.isPercentage(i.height)){const e=(100*t/d.height).toFixed(4);i=i.set("height",e+"%")}else i=i.set("height",Math.round(t)+"px")}else{const t=c/e;if(l.utils.isPercentage(i.width)){const e=(100*t/d.width).toFixed(4);i=i.set("width",e+"%")}else i=i.set("width",Math.round(t)+"px")}}this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i)},this.toggleHeightMode=()=>{let t=this.props.layoutItem.setting||Object(n.Immutable)({});const e="ratio"===t.heightMode?"fixed":"ratio";if(t=t.set("heightMode",e),"ratio"===e){const e=this.getSizeOfItem();e&&(t=t.set("aspectRatio",Number((e.height/e.width).toFixed(2))))}else{let t=this.props.layoutItem.bbox;const e=this.getSizeOfItem();if(l.utils.isPercentage(t.width)){const o=this.getSizeOfContainer();t=t.set("width",(100*e.width/o.width).toFixed(4)+"%")}else t=t.set("width",Math.round(e.width)+"px");t=t.set("height",Math.round(e.height)+"px"),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},t)}this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},t)},this.updateAlignSelf=t=>{let e=this.props.layoutItem.setting||Object(n.Immutable)({});e=e.setIn(["style","alignSelf"],t.target.value),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},e)},this.updateHeightMode=t=>{const e=this.props.layoutItem.setting||Object(n.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},e.setIn(["autoProps","height"],t))},this.updateWidthMode=t=>{const e=this.props.layoutItem.setting||Object(n.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},e.setIn(["autoProps","width"],t))},this.updateAspectRatio=t=>{let e=this.props.layoutItem.setting||Object(n.Immutable)({});e=e.set("aspectRatio",t),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},e)},this.formatMessage=t=>this.props.formatMessage(t)}getSizeOfContainer(){const t=this.querySelector(`div.column-layout[data-layoutid="${this.props.layoutId}"]`);return t?t.getBoundingClientRect():null}getSizeOfItem(){const{layoutId:t,layoutItem:e}=this.props,o=this.querySelector(`div.exb-rnd[data-layoutid="${t}"][data-layoutitemid="${e.id}"]`);return o?o.getBoundingClientRect():null}querySelector(t){const e=document.querySelector(`iframe[name="${n.APP_FRAME_NAME_IN_BUILDER}"]`);if(e){return(e.contentDocument||e.contentWindow.document).querySelector(t)}return null}getStyle(){return n.css`
      .rotation-setting, .rotation-setting input {
        height: 26px;
      }

      .ratio-value {
        font-size: 12px;
      }

      .align-select {
        .dropdown-button, .dropdown-button:hover {
          height: 26px;
        }
      }
    `}render(){var t,e,o,i;const{layoutId:s,layoutItem:r,isLockLayout:d,supportAutoSize:c}=this.props;if(!r)return null;const u=r.setting||{},p=u.style||{},h=r.bbox||{},g=(null===(t=u.autoProps)||void 0===t?void 0:t.width)!==l.LayoutItemSizeModes.Custom,f=null!==(o=null===(e=u.autoProps)||void 0===e?void 0:e.height)&&void 0!==o?o:l.LayoutItemSizeModes.Custom,m="ratio"===u.heightMode;return Object(n.jsx)("div",{className:"column-item-setting",css:this.getStyle()},!d&&Object(n.jsx)(n.React.Fragment,null,Object(n.jsx)(Tt.SettingSection,{title:this.formatMessage("size")},Object(n.jsx)(Tt.SettingRow,{label:this.formatMessage("width")},Object(n.jsx)("div",{style:Ho},Object(n.jsx)(go.SizeEditor,{label:"W",mode:g?l.LayoutItemSizeModes.Stretch:l.LayoutItemSizeModes.Custom,sizeModes:Wo,value:null==h?void 0:h.width,availableUnits:_o,onChange:t=>this.updateBBox("width",t),onModeChange:this.updateWidthMode}))),Object(n.jsx)("div",{className:"ml-3 d-flex",css:n.css`
                .icon {
                  cursor: pointer;
                  width: 12px;
                }
              `},Object(n.jsx)(a.Tooltip,{title:this.formatMessage("keepAspectRatio"),placement:"bottom"},Object(n.jsx)("div",{className:"icon",onClick:this.toggleHeightMode},Object(n.jsx)(a.Icon,{icon:m?Zo:Xo,size:12})))),Object(n.jsx)(Tt.SettingRow,{label:this.formatMessage("height")},Object(n.jsx)("div",{style:Ho},Object(n.jsx)(go.SizeEditor,{label:"H",mode:f||l.LayoutItemSizeModes.Custom,sizeModes:c?Go:Uo,value:h.height,availableUnits:Yo,onChange:t=>this.updateBBox("height",t),onModeChange:this.updateHeightMode,disabled:m}))),m&&Object(n.jsx)(Tt.SettingRow,{label:this.formatMessage("aspectRatio")},Object(n.jsx)(go.InputRatio,{value:u.aspectRatio,style:Ho,onChange:this.updateAspectRatio})),!g&&Object(n.jsx)(Tt.SettingRow,{label:this.formatMessage("align")},Object(n.jsx)(a.Select,{className:"align-select",value:null!==(i=p.alignSelf)&&void 0!==i?i:"flex-start",onChange:this.updateAlignSelf,style:Ho},Object(n.jsx)("option",{value:"flex-start"},this.formatMessage("start")),Object(n.jsx)("option",{value:"flex-end"},this.formatMessage("end")),Object(n.jsx)("option",{value:"center"},this.formatMessage("center")))),Object(n.jsx)(vo,{layoutId:s,layoutItemId:r.id,setting:u,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage}))),(r.widgetId||r.sectionId)&&Object(n.jsx)(yo,{layoutId:s,layoutItemId:r.id,isSection:r.type===n.LayoutItemType.Section,style:this.props.style,onStyleChange:this.props.onStyleChange,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage}))}}const qo={width:"7.5rem"},Qo=[l.LayoutItemSizeModes.Auto,l.LayoutItemSizeModes.Stretch,l.LayoutItemSizeModes.Custom],Ko=[l.LayoutItemSizeModes.Stretch,l.LayoutItemSizeModes.Custom];class ti extends n.React.PureComponent{constructor(){super(...arguments),this.handleAlignChange=t=>{this.updateStyle("alignSelf",t.target.value)},this.handleHeightChange=t=>{let e=this.props.layoutItem.bbox;const{distance:o,unit:i}=t,n=e.height,s=this.getSizeOfContainer();let r=o.toFixed(2);l.utils.isPercentage(n)&&i===a.UnitTypes.PIXEL?null!=s&&(r=Math.round(parseFloat(n)*s.height/100)):l.utils.isPercentage(n)||i!==a.UnitTypes.PERCENTAGE||null!=s&&(r=(100*parseFloat(n)/s.height).toFixed(4)),e=e.set("height",i===a.UnitTypes.PERCENTAGE?r+"%":r+"px"),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},e)},this.handleHeightModeChange=t=>{var e;const o=null!==(e=this.props.layoutItem.setting)&&void 0!==e?e:Object(n.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o.setIn(["autoProps","height"],t))},this.updateAspectSetting=t=>{var e;let o=null!==(e=this.props.layoutItem.setting)&&void 0!==e?e:Object(n.Immutable)({});if(o=o.set("heightMode",t),"ratio"===t){const t=this.getSizeOfItem();null!=t&&(o=o.set("aspectRatio",Number((t.height/t.width).toFixed(2))))}else{const t=this.props.layoutItem.bbox,e=this.getSizeOfItem();if(l.utils.isPercentage(t.height)){const o=this.getSizeOfContainer();this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},t.set("height",(100*e.height/o.height).toFixed(4)+"%"))}else this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},t.set("height",Math.round(e.height)+"px"))}this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)},this.handleAspectRatioChange=t=>{var e;let o=null!==(e=this.props.layoutItem.setting)&&void 0!==e?e:Object(n.Immutable)({});o=o.set("aspectRatio",t),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)},this.handleOffsetXChange=t=>{var e;const o=null!==(e=this.props.layoutItem.setting)&&void 0!==e?e:Object(n.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o.set("offsetX",t))},this.handleOffsetYChange=t=>{var e;const o=null!==(e=this.props.layoutItem.setting)&&void 0!==e?e:Object(n.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o.set("offsetY",t))},this.formatMessage=t=>this.props.formatMessage(t)}updateStyle(t,e){var o,i;const{layoutItem:s}=this.props,a=Object(n.Immutable)(null!==(i=null===(o=null==s?void 0:s.setting)||void 0===o?void 0:o.style)&&void 0!==i?i:{});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},{style:a.set(t,e)})}getSizeOfContainer(){const t=this.querySelector(`div.row-layout[data-layoutid="${this.props.layoutId}"]`);return null!=t?t.getBoundingClientRect():null}getSizeOfItem(){const{layoutId:t,layoutItem:e}=this.props,o=this.querySelector(`div.exb-rnd[data-layoutid="${t}"][data-layoutitemid="${e.id}"] > div.layout-item-content`);return null!=o?o.getBoundingClientRect():null}querySelector(t){var e;const o=document.querySelector(`iframe[name="${n.APP_FRAME_NAME_IN_BUILDER}"]`);if(null!=o){return(null!==(e=o.contentDocument)&&void 0!==e?e:o.contentWindow.document).querySelector(t)}return null}getStyle(){return n.css`
      .align-select {
        .dropdown-button,
        .dropdown-button:hover {
          height: 26px;
        }
      }
    `}render(){var t,e,o,i;const{layoutId:s,layoutItem:r,isLockLayout:d,supportAutoSize:c}=this.props;if(null==r)return null;const u=n.lodash.assign({},Je.a,r.setting),p=r.bbox,h=null!==(t=u.style)&&void 0!==t?t:{},g=null!==(o=null===(e=u.autoProps)||void 0===e?void 0:e.height)&&void 0!==o?o:l.LayoutItemSizeModes.Stretch,f="ratio"===u.heightMode;return Object(n.jsx)("div",{className:"row-item-setting",css:this.getStyle()},!d&&Object(n.jsx)(n.React.Fragment,null,Object(n.jsx)(Tt.SettingSection,{title:this.formatMessage("size")},Object(n.jsx)(Tt.SettingRow,{label:this.formatMessage("height")},Object(n.jsx)("div",{style:qo},Object(n.jsx)(go.SizeEditor,{label:"H",mode:g,sizeModes:c?Qo:Ko,value:a.utils.stringOfLinearUnit(p.height),onChange:this.handleHeightChange,onModeChange:this.handleHeightModeChange,disabled:f}))),Object(n.jsx)(Tt.SettingRow,null,Object(n.jsx)(a.Checkbox,{checked:f,onChange:t=>this.updateAspectSetting(t.target.checked?"ratio":"fixed"),className:"mr-2"}),this.formatMessage("keepAspectRatio")),f&&Object(n.jsx)(Tt.SettingRow,{label:this.formatMessage("aspectRatio")},Object(n.jsx)(go.InputRatio,{value:u.aspectRatio,style:qo,onChange:this.handleAspectRatioChange})),g!==l.LayoutItemSizeModes.Stretch&&Object(n.jsx)(Tt.SettingRow,{label:this.formatMessage("align")},Object(n.jsx)(a.Select,{className:"align-select",style:qo,value:null!==(i=h.alignSelf)&&void 0!==i?i:"flex-start",onChange:this.handleAlignChange},Object(n.jsx)("option",{value:"flex-start"},this.formatMessage("T")),Object(n.jsx)("option",{value:"flex-end"},this.formatMessage("B")),Object(n.jsx)("option",{value:"center"},this.formatMessage("center"))))),Object(n.jsx)(Tt.SettingSection,{title:this.formatMessage("position")},Object(n.jsx)(vo,{layoutId:s,layoutItemId:r.id,setting:r.setting,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage}),Object(n.jsx)(Tt.SettingRow,{label:this.formatMessage("offsetX")},Object(n.jsx)(a.NumericInput,{style:qo,value:u.offsetX,onChange:this.handleOffsetXChange,size:"sm"})),Object(n.jsx)(Tt.SettingRow,{label:this.formatMessage("offsetY")},Object(n.jsx)(a.NumericInput,{style:qo,value:u.offsetY,onChange:this.handleOffsetYChange,size:"sm"})))),(null!=r.widgetId||null!=r.sectionId)&&Object(n.jsx)(yo,{layoutId:s,layoutItemId:r.id,isSection:r.type===n.LayoutItemType.Section,style:this.props.style,onStyleChange:this.props.onStyleChange,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage}))}}const ei=[a.Sides.T,a.Sides.R,a.Sides.B,a.Sides.L],oi={width:110};class ii extends n.React.PureComponent{constructor(){super(...arguments),this.updateSpace=t=>{const{layoutId:e,setting:o}=this.props,i=Object(n.Immutable)(o||{});if(!isNaN(t.distance)){Object(s.getAppConfigAction)().editLayoutSetting({layoutId:e},i.set("gutter",t.distance)).exec()}},this.updatePadding=t=>{const{layoutId:e,setting:o}=this.props,i=Object(n.Immutable)(o||{});Object(s.getAppConfigAction)().editLayoutSetting({layoutId:e},i.setIn(["style","padding"],t)).exec()}}render(){const{formatMessage:t}=this.props,e=this.props.setting||{},o=e.style||{},i=e.gutter>=0?e.gutter:Mo.b.gutter;return Object(n.jsx)(Tt.SettingSection,{title:t("layout"),className:"flow-layout-setting"},Object(n.jsx)(Tt.SettingRow,{label:t("gap")},Object(n.jsx)(go.InputUnit,{value:{distance:i,unit:void 0},min:0,onChange:this.updateSpace,style:oi})),Object(n.jsx)(Tt.SettingRow,{label:t("padding"),flow:"wrap"},Object(n.jsx)(go.FourSides,{showTip:!0,sides:ei,value:o.padding,onChange:this.updatePadding})))}}var ni=n.ReactRedux.connect((function(t,e){var o,i,n,s;return{setting:null===(s=null===(n=null===(i=null===(o=t.appStateInBuilder)||void 0===o?void 0:o.appConfig)||void 0===i?void 0:i.layouts)||void 0===n?void 0:n[e.layoutId])||void 0===s?void 0:s.setting}}))(ii),si=o(28),ai=o(29);var ri=function(t,e,o,i){return new(o||(o=Promise))((function(n,s){function a(t){try{l(i.next(t))}catch(t){s(t)}}function r(t){try{l(i.throw(t))}catch(t){s(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,r)}l((i=i.apply(t,e||[])).next())}))};function li(t,e,o){return ri(this,void 0,void 0,(function*(){const i=o.widgetId,{appConfig:a,newWidgetId:r}=yield s.templateUtils.createWidgetFromTemplate(Object(s.getAppConfigAction)().appConfig,o,i,{},!0),d=Object(s.getAppConfigAction)(a),c=(d.appConfig.layouts[t].order||[]).indexOf(e),u=Object(n.Immutable)({id:""+(l.utils.getMaximumId(d.appConfig.layouts[t])+1),type:n.LayoutItemType.Widget,widgetId:r}),p=d.addItemIntoLayout(t,u,c>=0?c+1:NaN);return Object(n.getAppStore)().dispatch(n.appActions.layoutChanged(d.appConfig,Object.assign(Object.assign({},p),{autoScroll:!0}))),p}))}function di(t,e,o){return ri(this,void 0,void 0,(function*(){const i=o.screenGroupId,{appConfig:a,newScreenGroupId:r}=yield s.templateUtils.createScreenGroupFromTemplate(Object(s.getAppConfigAction)().appConfig,o,i,{}),d=Object(s.getAppConfigAction)(a),c=(d.appConfig.layouts[t].order||[]).indexOf(e),u=Object(n.Immutable)({id:""+(l.utils.getMaximumId(d.appConfig.layouts[t])+1),type:n.LayoutItemType.ScreenGroup,screenGroupId:r}),p=d.addItemIntoLayout(t,u,c>=0?c+1:NaN);return Object(n.getAppStore)().dispatch(n.appActions.layoutChanged(d.appConfig,Object.assign(Object.assign({},p),{autoScroll:!0}))),p}))}function ci(t,e){var o;const{layoutId:i,layoutItemId:n}=e,a=Object(s.getAppConfigAction)(t),r=a.appConfig.layouts[i],l=r.order,d=[].concat(l),c=l.indexOf(n);let u=l.length-1;for(let t=c+1;t<l.length;t++){const e=l[t];if(!(null===(o=r.content[e].setting)||void 0===o?void 0:o.isFloating)){u=t;break}}return d.splice(u+1,0,n),d.splice(c,1),a.editLayoutOrder({layoutId:i},d),a.appConfig}function ui(t,e){var o;const{layoutId:i,layoutItemId:n}=e,a=Object(s.getAppConfigAction)(t),r=a.appConfig.layouts[i],l=r.order,d=[].concat(l),c=l.indexOf(n);let u=0;for(let t=c-1;t>=0;t--){const e=l[t];if(!(null===(o=r.content[e].setting)||void 0===o?void 0:o.isFloating)){u=t;break}}return d.splice(c,1),d.splice(u,0,n),a.editLayoutOrder({layoutId:i},d),a.appConfig}const pi=o(33),hi=o(36),gi=o(37),fi=o(79),mi=o(41),yi=o(47);class vi extends n.React.PureComponent{constructor(t){super(t),this.state={isResizing:!1,dh:0,showBlockTemplatePopup:!1,showScreenTemplatePopup:!1,referenceElem:null},this.onResizeStart=(t,e,o)=>{const{padding:i}=this.props;this.minHeight=Ge.h+i,this.initHeight=o,this.setState({dh:0,isResizing:!0})},this.onResizing=(t,e,o,i,n)=>{let s=n;n<0&&this.initHeight+n<this.minHeight&&(s=this.minHeight-this.initHeight),this.setState({dh:s,isResizing:!0})},this.onResizeEnd=(t,e,o,i,a,r)=>{const{layoutId:l,layoutItem:d}=this.props;let c=a;a<0&&this.initHeight+a<this.minHeight&&(c=this.minHeight-this.initHeight);const u=Object(n.Immutable)(d.bbox||{}).set("height",Math.round(this.initHeight+c));Object(s.getAppConfigAction)().editLayoutItemBBox({layoutId:l,layoutItemId:d.id},u).exec(),this.setState({isResizing:!1,dh:0})},this.toggleBlockTemplatePopup=()=>{this.setState({showBlockTemplatePopup:!this.state.showBlockTemplatePopup})},this.toggleScreenTemplatePopup=()=>{this.setState({showScreenTemplatePopup:!this.state.showScreenTemplatePopup})},this.removeLayoutItem=()=>{const{layoutId:t,layoutItemId:e}=this.props;Object(s.getAppConfigAction)().removeLayoutItem({layoutId:t,layoutItemId:e},!0).exec()},this.moveLayoutItemUp=()=>{const{layoutId:t,layoutItemId:e}=this.props,o=ui(Object(s.getAppConfigAction)().appConfig,{layoutId:t,layoutItemId:e});Object(s.getAppConfigAction)(o).exec()},this.moveLayoutItemDown=()=>{const{layoutId:t,layoutItemId:e}=this.props,o=ci(Object(s.getAppConfigAction)().appConfig,{layoutId:t,layoutItemId:e});Object(s.getAppConfigAction)(o).exec()},this.switchSetting=()=>{const{layoutId:t,layoutItemId:e,selected:o}=this.props;o||Object(n.getAppStore)().dispatch(n.appActions.selectionChanged({layoutId:t,layoutItemId:e}))},this.onTemplateBlockSelected=t=>{li(this.props.layoutId,this.props.layoutItemId,t),this.setState({showBlockTemplatePopup:!1})},this.onTemplateScreenGroupSelected=t=>{di(this.props.layoutId,this.props.layoutItemId,t),this.setState({showScreenTemplatePopup:!1})},this.fakeTopLayouts=Object(n.Immutable)({[n.BrowserSizeMode.Large]:`${this.props.layoutId}_${this.props.layoutItemId}_tlarge`,[n.BrowserSizeMode.Medium]:`${this.props.layoutId}_${this.props.layoutItemId}_tmedium`,[n.BrowserSizeMode.Small]:`${this.props.layoutId}_${this.props.layoutItemId}_tsmall`}),this.fakeBottomLayouts=Object(n.Immutable)({[n.BrowserSizeMode.Large]:`${this.props.layoutId}_${this.props.layoutItemId}_blarge`,[n.BrowserSizeMode.Medium]:`${this.props.layoutId}_${this.props.layoutItemId}_bmedium`,[n.BrowserSizeMode.Small]:`${this.props.layoutId}_${this.props.layoutItemId}_bsmall`}),this.minHeight=0,this.contextMenus=[{icon:fi,title:this.props.formatMessage("insertABlock"),onClick:this.toggleBlockTemplatePopup,visible:()=>!N()},{icon:mi,title:this.props.formatMessage("insertAScreenGroup"),onClick:this.toggleScreenTemplatePopup,visible:()=>!N()},V,{icon:hi,title:this.props.formatMessage("setting"),onClick:this.switchSetting},{icon:gi,title:this.props.formatMessage("dragToMove"),className:"tool-drag-handler",onClick:()=>{},visible:()=>!N()},{icon:yi,onClick:this.moveLayoutItemUp,title:this.props.formatMessage("moveup"),visible:()=>!this.props.isFirst&&!N()},{icon:yi,rotate:180,onClick:this.moveLayoutItemDown,title:this.props.formatMessage("movedown"),visible:()=>!this.props.isLast&&!N()},{icon:pi,title:this.props.formatMessage("delete"),onClick:this.removeLayoutItem,visible:()=>!N()}]}calHeight(t){if(this.state.isResizing)return this.initHeight+this.state.dh+"px";const{layoutItem:e}=this.props,o=e.bbox||{},i=l.utils.getValueOfBBox(o,"height");if(!i||l.utils.isPercentage(i))return"auto";switch(t.heightMode){case"auto":return"auto";case"fixed":return i}}createContextMenu(){const{builderTheme:t}=this.pageContext;return Object(n.jsx)(at,{layoutId:this.props.layoutId,layoutItem:this.props.layoutItem,builderTheme:t,positionType:"center",size:Ge.d,iconSize:Ge.c,className:"widget-context-menu",menuItems:this.contextMenus},Object(n.jsx)("div",{ref:t=>this.reference=t,css:n.css`position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;`}),this.state.showBlockTemplatePopup&&Object(n.jsx)(Tt.BlockTemplatePopper,{referenceElement:this.reference,theme:t,onItemSelect:this.onTemplateBlockSelected,onClose:this.toggleBlockTemplatePopup}),this.state.showScreenTemplatePopup&&Object(n.jsx)(Tt.ScreenGroupTemplatePopper,{referenceElement:this.reference,theme:t,onItemSelect:this.onTemplateScreenGroupSelected,onClose:this.toggleScreenTemplatePopup}))}getStyle(t){const{builderTheme:e}=this.pageContext,{index:o,gutter:i}=this.props;return n.css`
      margin-top: ${o>0?i+"px":"unset"};
      width: ${Object(To.b)(t)};
      height: ${this.calHeight(t)};
      flex-shrink: 0;
      position: relative;
      cursor: default;
      transform: ${t.offsetX||t.offsetY?`translate(${t.offsetX||0}px, ${t.offsetY||0}px)`:null};
      & > div.widget-context-menu {
        display: none;
      }

      &:hover > div.widget-context-menu {
        display: flex;
      }

      .template-popup {
        background-color: ${e.colors.black};
      }

      .tool-drag-handler {
        cursor: move;
      }
    `}render(){const{layoutId:t,layoutItem:e,draggable:o,selectable:i,isEmpty:s,selected:a}=this.props;if(!e||s)return null;const r=n.lodash.assign({},Mo.a,e.setting),d=Object(n.classNames)("flow-layout-item d-flex",{selected:a}),c=l.utils.handleOnebyOneAnimation(this.props);return Object(n.jsx)(l.PageContext.Consumer,null,s=>(this.pageContext=s,Object(n.jsx)(Qt,Object.assign({id:`${t}_block_${e.id}`,css:this.getStyle(r),layoutId:t,layoutItemId:e.id,onResizeStart:this.onResizeStart,onResizing:this.onResizing,onResizeEnd:this.onResizeEnd,left:!1,right:!1,top:!1,bottom:"fixed"===r.heightMode,restrict:!0,useDragHandler:!0,draggable:o,selectable:i,forbidContextMenu:!0,forbidToolbar:!0,isBlock:!0,className:d},c),!s.viewOnly&&this.createContextMenu())))}}var bi=n.ReactRedux.connect(To.c)(vi);class Ii extends n.React.PureComponent{constructor(){super(...arguments),this.state={isResizing:!1,dx:0,dy:0,dw:0,dh:0},this.onResizeStart=(t,e,o)=>{this.setState({isResizing:!0}),this.initHeight=o,this.initWidth=e},this.onResizing=(t,e,o,i,n)=>{this.setState({dx:e,dy:o,dw:i,dh:n})},this.onResizeEnd=(t,e,o,i,n,a)=>{const{layoutId:r,layoutItem:l}=this.props;let d=l.bbox;d=d.set("height",Math.round(parseInt(d.height,10)+n)).set("width",Math.round(parseInt(d.width,10)+i)).set("left",Math.round(parseInt(d.left,10)+e)).set("top",Math.round(parseInt(d.top,10)+o)).set("bottom",Math.round(parseInt(d.top,10)-n+o));Object(s.getAppConfigAction)().editLayoutItemBBox({layoutId:r,layoutItemId:l.id},d).exec(),this.setState({isResizing:!1,dx:0,dy:0,dw:0,dh:0})}}calculatePosition(){const{layoutItem:t}=this.props,{dh:e,dw:o,isResizing:i}=this.state;return Object(To.a)(t,{dh:e,dw:o,isResizing:i,initWidth:this.initWidth,initHeight:this.initHeight})}render(){const{layoutId:t,layoutItem:e,selectable:o,selected:i}=this.props;if(!e)return null;const s=Object(n.classNames)("flexbox-layout-item floating d-flex",{selected:i});return Object(n.jsx)(l.PageContext.Consumer,null,i=>(this.pageContext=i,Object(n.jsx)(Qt,{css:this.calculatePosition(),layoutId:t,layoutItemId:e.id,onResizeStart:this.onResizeStart,onResizing:this.onResizing,onResizeEnd:this.onResizeEnd,restrict:!0,draggable:!1,selectable:o,className:s})))}}var xi=n.ReactRedux.connect(l.utils.mapStateToLayoutItemProps)(Ii),wi=o(49);const ji=o(35),Si=o(33),Ci=o(43),Oi=o(80);const Ri=n.themeUtils.withBuilderTheme((function(t){const{formatMessage:e,activeScreenIndex:o,total:i,theme:r,layoutId:l,layoutItemId:d,screenGroupId:c,browserSizeMode:u,hasPanel:p}=t,h=!n.ReactRedux.useSelector(t=>{var e,o,i;const s=null!==(o=null===(e=t.appConfig.forBuilderAttributes)||void 0===e?void 0:e.lockLayout)&&void 0!==o&&o;return(null===(i=t.appRuntimeInfo)||void 0===i?void 0:i.appMode)===n.AppMode.Design&&!s})||u!==n.BrowserSizeMode.Large,[g,f]=n.React.useState(!1),m=n.React.useRef(),y=n.React.useCallback(()=>{f(!1)},[]),v=n.React.useCallback(()=>n.css`
      border: none;

      .tooltip {
        color: ${r.colors.black};
        background-color: ${r.colors.palette.light[600]};
        border-color: ${r.colors.palette.light[300]};
      }
    `,[r]),b=n.React.useCallback(t=>{const e=Object(s.getAppConfigAction)(),o=e.appConfig.layouts[l].content[d].screenGroupId;s.templateUtils.createScreenFromTemplate(e.appConfig,t,t.screenId,{}).then(({appConfig:t,newScreenId:e})=>{t=t.setIn(["screenGroups",o,"screens"],[].concat(t.screenGroups[o].screens,e)),Object(n.getAppStore)().dispatch(n.appActions.appConfigChanged(t)),Object(n.getAppStore)().dispatch(n.appActions.screenGroupNavInfoChanged(o,t.screenGroups[o].screens.length-1))}),y()},[y,l,d]),I=n.React.useCallback(()=>{p?f(!g):b(Object(wi.getBlankScreenTemplate)())},[g,p,b]),x=n.React.useCallback(()=>{Object(n.getAppStore)().dispatch(n.appActions.screenGroupNavInfoChanged(c,o-1))},[c,o]),w=n.React.useCallback(()=>{Object(n.getAppStore)().dispatch(n.appActions.screenGroupNavInfoChanged(c,o+1))},[c,o]),j=n.React.useCallback(()=>{Object(s.getAppConfigAction)().removeScreenByIndex(o,c).exec(),o===i-1&&Object(n.getAppStore)().dispatch(n.appActions.screenGroupNavInfoChanged(c,o-1))},[o,i,c]),S=n.React.useCallback(()=>{const t=Object(s.getAppConfigAction)();t.duplicateScreenByIndex(o,c),t.exec(),Object(n.getAppStore)().dispatch(n.appActions.screenGroupNavInfoChanged(c,o+1))},[o,c]);return Object(n.jsx)("div",{className:"menu-bar d-flex justify-content-between align-items-center"},Object(n.jsx)("div",{className:"d-flex justify-content-start align-items-center"},Object(n.jsx)("div",{className:"info ml-2"},e("screen"),": ",o+1," / ",i),Object(n.jsx)(a.Tooltip,{title:0===o?"":e("previous"),placement:"bottom",css:v()},Object(n.jsx)(a.Button,{icon:!0,className:"rounded-circle",disabled:0===o,type:"tertiary",onClick:x},Object(n.jsx)(a.Icon,{icon:Oi,size:16}))),Object(n.jsx)(a.Tooltip,{title:o===i-1?"":e("next"),placement:"bottom",css:v()},Object(n.jsx)(a.Button,{icon:!0,className:"rounded-circle",disabled:o===i-1,type:"tertiary",onClick:w},Object(n.jsx)(a.Icon,{icon:Oi,rotate:180,size:16}))),!h&&Object(n.jsx)("div",{ref:m},Object(n.jsx)(a.Tooltip,{title:e("addScreen"),placement:"bottom",css:v()},Object(n.jsx)(a.Button,{icon:!0,onClick:I,className:"rounded-circle",type:"tertiary","data-testid":"addBtn"},Object(n.jsx)(a.Icon,{icon:ji,size:16})))),!h&&g&&Object(n.jsx)(Tt.ScreenTemplatePopper,{referenceElement:m.current,theme:r,onItemSelect:b,onClose:y}),!h&&Object(n.jsx)(a.Tooltip,{title:e("duplicateScreen"),placement:"bottom",css:v()},Object(n.jsx)(a.Button,{icon:!0,className:"rounded-circle",type:"tertiary",onClick:S,"data-testid":"duplicateBtn"},Object(n.jsx)(a.Icon,{icon:Ci,size:16}))),!h&&i>1&&Object(n.jsx)(a.Tooltip,{title:e("deleteScreen"),placement:"bottom",css:v()},Object(n.jsx)(a.Button,{icon:!0,className:"rounded-circle",type:"tertiary",onClick:j,"data-testid":"removeBtn"},Object(n.jsx)(a.Icon,{icon:Si,size:16})))))}));var Mi=o(25),Ti=o(23),Ai=o(24);const Pi=o(35),Li=n.css`
  width: 36px;
  height: 36px;
  padding: 0.5rem;
`,zi=n.css`
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  background: transparent;
`;function ki(t){return n.css`
    display: flex;
    height: 200px;
    position: relative;
    z-index: 1;
    border: 1px dashed ${n.polished.rgba(t.colors.palette.dark[600],.6)};

    body.lock-layout &,
    body:not(.design-mode) & {
      display: none !important;
    }

    .action-item {
      z-index: 1;
    }
  `}function Ni(t){const{layouts:e,builderTheme:o}=t,i=n.ReactRedux.useSelector(t=>e[t.browserSizeMode]||e[t.appConfig.mainSizeMode]),[r,d]=n.React.useState(!1),c=n.React.useRef(null),u=n.React.useCallback(t=>{S(Object(s.getAppConfigAction)().appConfig,t,{layoutId:i},{width:100,height:100},{left:0,top:0}).then(({layoutInfo:t,updatedAppConfig:e})=>{Object(n.getAppStore)().dispatch(n.appActions.layoutChanged(e,t))}),d(!1)},[i]),p=n.React.useCallback((t,e,o)=>{S(Object(s.getAppConfigAction)().appConfig,t,{layoutId:i},e,o).then(({layoutInfo:t,updatedAppConfig:e})=>{Object(n.getAppStore)().dispatch(n.appActions.layoutChanged(e,t))})},[i]),h=n.React.useCallback(t=>!t.layoutInfo||t.layoutInfo.layoutId!==i,[i]);return Object(n.jsx)(l.LayoutContext.Provider,{value:{isItemAccepted:h}},Object(n.jsx)("div",{className:"placeholder-btn w-100 justify-content-center align-items-center",css:ki(o)},Object(n.jsx)(kt,{css:zi,layouts:e,onDrop:p}),Object(n.jsx)("div",{className:"action-item",ref:c},Object(n.jsx)(a.Button,{icon:!0,css:Li,onClick:t=>{t.stopPropagation(),d(!r)}},Object(n.jsx)(a.Icon,{icon:Pi,size:16}))),r&&Object(n.jsx)(Tt.WidgetListPopper,{builderTheme:o,referenceElement:c.current,isItemAccepted:h,onItemSelect:u,onClose:()=>{d(!1)}})))}const Bi=o(81),$i=n.spring.animated;function Ei(t,e,o,i,s,a,r,l,d,c,u,p,h){const{side:g,size:f}=t.panel||{},m=n.css`
    color: ${u.colors.palette.dark[900]};
    background-color: ${u.colors.palette.light[400]};
    border-color: ${u.colors.palette.light[600]};
    &:hover {
      color: ${u.colors.black};
      background-color: ${u.colors.palette.light[600]};
    }
  `;return d?n.css`
      ${Object(Ti.b)(t,e,o,i,s,a,r,l,d)};

      .panel-content {
        transform: none !important;

        &:not(.visible) {
          pointer-events: none;
          > .layout-wrapper > .layout,
          > .layout-wrapper > .placeholder-btn {
            pointer-events: none;
          }
        }
      }

      .resize-handle {
        display: none;
      }

      .layout-wrapper {
        transform-origin: right bottom;
      }

      .toggle-visible-btn {
        display: flex;
        justify-content: flex-end;
        pointer-events: all;

        > button {
          ${m};
        }
      }
      body:not(.design-mode) & .toggle-visible-btn {
        display: none !important;
      }
    `:n.css`
    ${Object(Ti.b)(t,e,o,i,s,a,r,l,d)};

    .panel-content {
      position: relative;
      touch-action: none;
      width: ${p?h+"px":f};

      &:not(.visible) {
        pointer-events: none;
        > .layout-wrapper > .layout,
        > .layout-wrapper > .placeholder-btn {
          pointer-events: none;
        }
      }

      &.simple-mode {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        width: 100% !important;
      }

      .layout-wrapper {
        position: relative;
        transform-origin: right bottom;
      }
    }

    .toggle-visible-btn {
      display: flex;
      justify-content: flex-end;
      pointer-events: all;
      > button {
        ${m};
        svg {
          margin-right: 0;
          margin-left: 0;
        }
      }
    }

    .panel-content:hover {
      .resize-handle {
        display: block;
      }
    }
    body:not(.design-mode) & .resize-handle,
    body:not(.design-mode) & .toggle-visible-btn,
    body.lock-layout & .resize-handle {
      display: none !important;
    }
    .resize-handle {
      position: absolute;
      cursor: ew-resize;
      top: 0;
      bottom: 0;
      display: ${p?"block":"none"};
      touch-action: none;
      outline: 1px solid var(--light-400);
      width: 5px;
      pointer-events: all;
      &:after {
        content: '';
        position: absolute;
        z-index: -1;
        top: 0;
        bottom: 0;
        left: 50%;
        border-left: 1px dotted var(--light-400);
        transform: translate(-50%);
      }

      &.left {
        left: -5px;
        display: ${"left"!==g?"none":"none !important"};
      }
      &.right {
        right: -5px;
        display: ${"right"!==g?"none":"none !important"};
      }
    }
  `}function Di(t){const{index:e,screenId:o,onInterctionChange:i,onHeightChange:r,builderTheme:c,viewHeight:u,headerHeight:p,layoutEntry:h,isActive:g,isSmallSize:f,isDesignMode:m,transitionType:y,screenTransitionType:v,triggerType:b,stretched:I,viewOnly:x,verticalSpace:w="0",useAnimation:j=!0,formatMessage:S}=t,C=n.ReactRedux.useSelector(t=>t.appConfig.screens[o]),O=n.ReactRedux.useSelector(t=>{var e,i,n;return null===(n=null===(i=null===(e=t.appRuntimeInfo)||void 0===e?void 0:e.screenPanelStates)||void 0===i?void 0:i[o])||void 0===n||n}),{panel:R}=C,M=n.React.useRef(),T=n.React.useRef(),A=n.React.useRef(),[P,L]=n.React.useState(!1),[z,k]=n.React.useState(0),N=n.React.useRef(O),B=n.React.useRef(m),$=n.React.useRef(),E=n.React.useMemo(()=>{if(R&&R.overlay&&Math.abs(parseFloat(R.offset))>0){const t=Object(n.getAppStore)().getState().appContext.isRTL?"left"===R.side?-1:1:"right"===R.side?-1:1;return parseFloat(R.offset)*t}return 0},[R]),[D,F]=n.spring.useSpring(()=>({opacity:1,x:0,y:0})),V=n.React.useCallback((t,e)=>{$.current=e,L(!0),k(0)},[]),H=n.React.useCallback((t,e,o,i,n)=>{k(i)},[]),W=n.React.useCallback((t,e,i,n,a)=>{!function(t,e){var o;const i=Object(s.getAppConfigAction)();let n,a=i.appConfig.screens[t];n=l.utils.isPercentage(null===(o=a.panel)||void 0===o?void 0:o.size)?l.utils.toRatio(e,document.body.clientWidth):Math.round(e)+"px",a=a.setIn(["panel","size"],n),i.editScreen(a).exec()}(o,$.current+n),L(!1)},[o]);n.React.useEffect(()=>{B.current!==m&&(B.current=m,m?N.current?F({opacity:1,x:0,y:0,immediate:!0,onRest:null}):F({opacity:0,immediate:!0,onRest:null}):F({opacity:1,x:0,y:0,immediate:!0,onRest:null}))},[m,F]),n.React.useEffect(()=>{if(!A.current&&T.current)return A.current=Object(d.interact)(T.current),Q(A.current,{layoutItemId:o,onResizeStart:V,onResizing:H,onResizeEnd:W}),()=>{A.current&&(A.current.unset(),A.current=null)}},[o,V,H,W]);const G=n.React.useCallback(t=>{i(e,t)},[e,i]),U=n.React.useCallback((t,o)=>{r(e,o)},[e,r]),_=n.React.useCallback(t=>{const e=t.target.getBoundingClientRect(),i=M.current.getBoundingClientRect(),s=Object(n.getAppStore)().getState().appContext.isRTL;F({opacity:0,size:0,x:s?i.left-e.left:i.right-e.right,y:i.bottom-e.bottom,immediate:!j,onRest:()=>{N.current=!1,Object(n.getAppStore)().dispatch(n.appActions.screenPanelVisibleChanged(o,!1))}})},[F,o,j]),Y=n.React.useCallback(()=>{F({opacity:1,size:1,x:0,y:0,immediate:!j,onRest:null})},[F,j]);n.React.useEffect(()=>{N.current!==O&&O&&(Y(),N.current=O)},[O,Y]),Object(Ai.a)(M.current,t.refElement,f?n.ScreenTriggerType.Lower:null!=b?b:n.ScreenTriggerType.Bottom,G);const Z={opacity:D.opacity,transform:n.spring.interpolate([D.x,D.y],(t,e)=>`translate(${t+E}px, ${e}px)`)},X=n.React.useCallback(()=>!x&&g&&(null==R?void 0:R.overlay),[R,g,x]);return Object(n.jsx)("div",{className:Object(n.classNames)("screen-side-panel",{"top-spacing":0===e&&((null==R?void 0:R.overlay)||f)}),"data-screenid":o,"data-index":e,ref:M,css:Ei(C,u,p,g,w,I,y,v,f,0,c,P,$.current+z)},R&&Object(n.jsx)($i.div,{className:Object(n.classNames)("panel-content",{visible:O}),ref:T,style:Z},Object(n.jsx)("div",{className:"layout-wrapper"},Object(n.jsx)(h,{layouts:R.layout}),!x&&Object(n.jsx)(Ni,{layouts:R.layout,builderTheme:c}),Object(n.jsx)("span",{className:"resize-handle left rnd-resize-left"}),Object(n.jsx)("span",{className:"resize-handle right rnd-resize-right"})),X()&&Object(n.jsx)("div",{className:"toggle-visible-btn",onClick:_,"data-testid":"toggleBtn-"+O},Object(n.jsx)(a.Tooltip,{placement:"auto",title:S("hideInDesignView")},Object(n.jsx)(a.Button,{type:"default",size:"sm",className:"rounded"},Object(n.jsx)(a.Icon,{icon:Bi,size:16})))),Object(n.jsx)("div",{className:Object(n.classNames)("panel-spacing",{"last-item":t.isLast})})),!R&&O&&Object(n.jsx)("div",{className:"panel-content-placeholder"}),Object(n.jsx)(n.ReactResizeDetector,{handleHeight:!0,onResize:U}))}const Fi=o(35),Vi=o(41),Hi=o(36),Wi=o(33),Gi=o(47),Ui=o(37);function _i(t){const{layoutId:e,layoutItemId:o,builderTheme:i,layoutItem:a,formatMessage:r,isFirst:d,isLast:c}=t,[u,p]=n.React.useState(!1),[h,g]=n.React.useState(!1),f=n.React.useRef(),m=n.React.useCallback(()=>{p(!u)},[u]),y=n.React.useCallback(()=>{g(!h)},[h]),v=n.React.useCallback(t=>{li(e,o,t),p(!1)},[e,o]),b=n.React.useCallback(t=>{di(e,o,t),g(!1)},[e,o]),I=n.React.useCallback(()=>{const t=ui(Object(s.getAppConfigAction)().appConfig,{layoutId:e,layoutItemId:o});Object(s.getAppConfigAction)(t).exec()},[e,o]),x=n.React.useCallback(()=>{const t=ci(Object(s.getAppConfigAction)().appConfig,{layoutId:e,layoutItemId:o});Object(s.getAppConfigAction)(t).exec()},[e,o]),w=n.React.useCallback(()=>{Object(s.getAppConfigAction)().removeLayoutItem({layoutId:e,layoutItemId:o},!0).exec()},[e,o]),j=n.React.useCallback(()=>Object(n.getAppStore)().getState().browserSizeMode===n.BrowserSizeMode.Large,[]),S=[{icon:Fi,title:r("insertABlock"),onClick:m,visible:()=>!N()},{icon:Vi,title:r("insertAScreenGroup"),onClick:y,visible:()=>j()&&!N()},Object.assign(Object.assign({},V),{visible:()=>j()&&!N()}),{icon:Hi,title:r("setting"),onClick:()=>{Object(n.getAppStore)().dispatch(n.appActions.selectionChanged({layoutId:e,layoutItemId:o}))}},{icon:Ui,title:r("dragToMove"),className:"tool-drag-handler",onClick:()=>{},visible:()=>!N()},{icon:Gi,onClick:I,title:r("moveup"),visible:()=>!d&&!N()},{icon:Gi,rotate:180,onClick:x,title:r("movedown"),visible:()=>!c&&!N()},{icon:Wi,title:r("delete"),onClick:w,visible:()=>!N()}];return Object(n.jsx)(at,{layoutId:e,layoutItem:a,builderTheme:i,positionType:"center",size:l.CONTEXT_MENU_ITEM_SIZE,iconSize:l.CONTEXT_MENU_ICON_SIZE,className:"widget-context-menu",menuItems:S},Object(n.jsx)("div",{ref:f,css:n.css`position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;`}),u&&Object(n.jsx)(Tt.BlockTemplatePopper,{referenceElement:f.current,theme:i,onItemSelect:v,onClose:m}),h&&Object(n.jsx)(Tt.ScreenGroupTemplatePopper,{referenceElement:f.current,theme:i,onItemSelect:b,onClose:y}))}var Yi=o(12),Zi=o(30);function Xi(t,e,o,i,s,a){return n.css`
    position: relative;
    width: 100%;

    & > div.widget-context-menu {
      display: none;
    }

    &:hover > div.widget-context-menu {
      display: flex;
    }

    body.lock-layout & {
      .screen-menu {
        bottom: ${o?i?"-10px":"-32px":"auto"};
        z-index: ${o&&i?10:null};
      }
    }

    .screen-menu {
      display: ${s?"block":"none"};
      position: absolute;
      opacity: ${s?.8:.5};
      left: 0;
      top: ${o?"auto":"-32px"};
      bottom: ${o?"-32px":"auto"};
      height: 32px;
      width: 100%;
      background-color: ${e.colors.palette.light[200]};
      overflow: visible;

      .info {
        color: ${e.colors.black};
      }

      .jimu-btn svg {
        color: ${e.colors.palette.dark[600]};
      }
    }

    .screen-group {
      position: relative;
      height: ${t}px;
      overflow-y: auto;
      overflow-x: hidden;
    }

    .main-panels {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      pointer-events: none;
      z-index: 0;
    }

    &.small-size .main-panels {
      z-index: ${a?0:1};
    }

    &.small-size .side-panels {
      z-index: ${a?1:0};
    }

    .side-panels {
      position: relative;
      z-index: 1;
      pointer-events: none;

      > div:first-of-type > div.panel-content {
        padding-top: ${Math.round(t*Yi.b)}px;
      }

      /* > div:nth-last-of-type(2) {
        min-height: ${t}px;
      } */
    }

    body:not(.design-mode) & {
      .screen-group {
        position: static;
        height: auto;
        overflow-y: unset;
        overflow-x: unset;
      }
      .side-panels {
        > div:first-of-type > div.panel-content {
          padding-top: ${100*Yi.b}vh;
          padding-top: calc(var(--vh) * ${100*Yi.b});
        }
        /* > div:nth-last-of-type(2) {
          min-height: 100vh;
        } */
      }
      .screen-menu {
        display: none !important;
      }
    }

    .group-tip {
      display: none;
      padding: inherit;
      position: absolute;
      left: 0;
      bottom: 0;
      top: 0;
      right: 0;
      pointer-events: none;
      .tip-content {
        height: 100%;
        padding: 2px;
        &:after {
          content: '';
          width: 100%;
          height: 100%;
          outline: 2px solid ${e.colors.palette.primary[700]};
          display: block;
        }
      }
    }

    &:hover .group-tip {
      display: block;
    }
  `}function Ji(t){var e;const{layoutId:o,layoutItemId:i,layoutItem:a,formatMessage:r,itemIndex:c,isFirst:u,isLast:p}=t,{screenGroupId:h}=a,g=n.ReactRedux.useSelector(t=>{var e;const n=null===(e=t.appRuntimeInfo)||void 0===e?void 0:e.selection;return!!n&&(n.layoutId===o&&n.layoutItemId===i)}),f=n.ReactRedux.useSelector(t=>t.appConfig.screenGroups[a.screenGroupId]),m=n.ReactRedux.useSelector(t=>{const e=t.appConfig.screenGroups[a.screenGroupId].screens[0];return null!=t.appConfig.screens[e].panel}),y=n.ReactRedux.useSelector(t=>t.browserSizeMode),{screens:v,stretchPanel:b=!0,triggerType:I=n.ScreenTriggerType.Bottom,verticalSpace:x="0",panelTransitionType:w=n.ScreenTransitionType.Push}=f;let j=null!==(e=f.transitionType)&&void 0!==e?e:n.ScreenTransitionType.Fade;y!==n.BrowserSizeMode.Small||m||(j=n.ScreenTransitionType.Cover);const S=n.ReactRedux.useSelector(t=>{var e;return null===(e=t.appRuntimeInfo.screenGroupNavInfos)||void 0===e?void 0:e[h]}),C=n.ReactRedux.useSelector(t=>n.utils.findViewportSize(t.appConfig,t.browserSizeMode||n.BrowserSizeMode.Large)),O=n.ReactRedux.useSelector(t=>{var e;return(null===(e=t.appRuntimeInfo)||void 0===e?void 0:e.appMode)===n.AppMode.Design}),{viewOnly:R,builderTheme:M,pageId:T}=n.React.useContext(l.PageContext),A=n.ReactRedux.useSelector(t=>{const e=t.appConfig.pages[T];if(null==e?void 0:e.header){const e=t.appConfig.header;if(null==e?void 0:e.sticky){const o=t.browserSizeMode,i=t.appConfig.mainSizeMode,n=e.height[o]||e.height[i]||Yi.a;return parseInt(n,10)}}return 0}),P=n.React.useRef(),L=n.React.useRef(),z=n.React.useRef(),k=n.React.useRef(!0),B=n.React.useRef(),$=n.React.useRef(),[E,D]=n.React.useState(0);n.React.useEffect(()=>{if(g){const t=document.querySelector(`div.exb-rnd[data-layoutid="${o}"][data-layoutitemid="${i}"]`);null!=t&&t.scrollIntoView({behavior:"auto",block:"center"})}},[g,o,i]);const F=n.React.useMemo(()=>{var t,e,o;if(y!==n.BrowserSizeMode.Small)return!1;const i=Object(n.getAppStore)().getState().appConfig,s=null===(e=null===(t=i.screenGroups)||void 0===t?void 0:t[h])||void 0===e?void 0:e.screens;if(null==s?void 0:s[E]){return null===(o=i.screens[s[E]].panel)||void 0===o?void 0:o.overlay}return!1},[h,E,y]),V=n.React.useCallback(t=>{var e;const o=L.current.querySelectorAll("div.screen-side-panel");let i=0;if(o.forEach(e=>{+e.getAttribute("data-index")<t&&(i+=e.clientHeight)}),L.current.scrollTop=i,j!==n.ScreenTransitionType.Fade){const t=null===(e=z.current)||void 0===e?void 0:e.children[0];t&&(t.scrollTop=L.current.scrollTop)}},[j]),H=n.React.useCallback(()=>{Z(!0)},[]),W=n.React.useCallback(()=>{Z(!1)},[]);n.React.useEffect(()=>{if(P.current&&!$.current){const{layoutId:e,layoutItemId:o,layoutItem:i}=t;$.current=Object(d.interact)(P.current).origin("parent"),$.current=Y($.current,{layoutId:e,layoutItemId:o,onDragStart:H,onDragEnd:W,useDragHandler:!0,itemType:i.type,rootLayoutId:()=>e,restrict:()=>!0}),$.current.draggable({modifiers:[d.interact.modifiers.restrictRect({restriction:"parent"})]})}return()=>{$.current&&($.current.unset(),$.current=null)}},[]),n.React.useEffect(()=>{null!=(null==S?void 0:S.activeIndex)&&S.activeIndex!==E&&(!function(t,e){var o;const i=Object(n.getAppStore)().getState().appConfig,s=Object(n.getAppStore)().getState().browserSizeMode,a=null===(o=Object(n.getAppStore)().getState().appRuntimeInfo)||void 0===o?void 0:o.selection;if(null!=a){const o=i.screenGroups[t].screens[e],r=i.screens[o];if(r){const t=r.main.layout[s];a.layoutId===t&&Object(n.getAppStore)().dispatch(n.appActions.selectionChanged(null));null!=document.querySelector(`div[data-layoutid="${t}"] div[data-layoutid="${a.layoutId}"][data-layoutitemid="${a.layoutItemId}"]`)&&Object(n.getAppStore)().dispatch(n.appActions.selectionChanged(null))}}}(h,E),D(S.activeIndex),S.scrollIntoView&&(k.current=!1,V(S.activeIndex),setTimeout(()=>{k.current=!0},200)))},[S,E,V,h]),n.React.useEffect(()=>{B.current&&(L.current.removeEventListener("scroll",B.current),B.current=null),B.current=()=>{var t;const e=null===(t=z.current)||void 0===t?void 0:t.children[0];e&&j!==n.ScreenTransitionType.Fade&&(e.scrollTop=L.current.scrollTop)},L.current.addEventListener("scroll",B.current)},[j]),n.React.useEffect(()=>{Object(n.getAppStore)().dispatch(n.appActions.screenGroupNavInfoChanged(h,0))},[O,h]);const G=n.React.useCallback((t,e)=>{k.current&&(e&&t!==E?Object(n.getAppStore)().dispatch(n.appActions.screenGroupNavInfoChanged(h,t,!1)):!e&&t>0&&Object(n.getAppStore)().dispatch(n.appActions.screenGroupNavInfoChanged(h,t-1,!1)))},[E,h]),U=n.React.useCallback(t=>{t.stopPropagation(),N()||R||y===n.BrowserSizeMode.Small||Object(n.getAppStore)().dispatch(n.appActions.selectionChanged({layoutId:o,layoutItemId:i}))},[R,y,o,i]),_=n.React.useCallback(()=>{if(!L.current)return;const t=L.current.children[0],e=L.current.children[1];t.style.height=e.clientHeight+"px"},[]),X=n.React.useMemo(()=>n.lodash.debounce(_,200),[_]),J=n.React.useCallback((t,e)=>{if(!L.current)return;const o=L.current.children[0],i=L.current.children[1];if(j!==n.ScreenTransitionType.Fade)if(j!==n.ScreenTransitionType.Cover){if(j===n.ScreenTransitionType.Push){const e=o.querySelector(`div.screen-main-panel[data-index="${t}"]`),n=i.querySelector(`div.screen-side-panel[data-index="${t}"]`);e.style.height=n.clientHeight+"px",o.style.height=i.clientHeight+"px"}}else Object(Zi.a)(o,i,y);else o.style.height=i.clientHeight+"px"},[y,j]),q=n.React.useCallback(()=>{Object(n.getAppStore)().dispatch(s.builderActions.confirmDeleteContentChanged({layoutId:o,layoutItemId:i}))},[o,i]),Q=n.React.useMemo(()=>({delete:q,backspace:q}),[q]);return v.length>0?Object(n.jsx)(rt.c.Provider,{value:`${o}:${i}`},Object(n.jsx)("div",{className:Object(n.classNames)("builder-layout-item exb-rnd",{selected:g,"small-size":y===n.BrowserSizeMode.Small}),css:Xi(C.height,M,u,p,g,F),"data-layoutitemid":i,"data-layoutid":o,onClick:U,ref:P},Object(n.jsx)("div",{className:"screen-menu"},Object(n.jsx)(Ri,{activeScreenIndex:E,itemIndex:c,total:v.length,screenGroupId:h,layoutId:o,layoutItemId:i,theme:M,browserSizeMode:y,hasPanel:m,formatMessage:r})),Object(n.jsx)("div",{className:"screen-group",ref:L},Object(n.jsx)("div",{className:"main-panels",ref:z},Object(n.jsx)(Mi.a,{rootLayoutId:o,activeIndex:E,viewHeight:C.height,headerHeight:A,screens:v,transitionType:j,layoutEntry:Ht,isSmallSize:y===n.BrowserSizeMode.Small,isDesignMode:O,builderTheme:M,formatMessage:r})),Object(n.jsx)("div",{className:"side-panels"},v.map((t,e)=>Object(n.jsx)(Di,{key:t,index:e,isLast:e===v.length-1,screenId:t,viewHeight:C.height,headerHeight:A,refElement:O?P.current:null,layoutEntry:Ht,viewOnly:R,builderTheme:M,isActive:e===E,isSmallSize:y===n.BrowserSizeMode.Small,isDesignMode:O,stretched:b,triggerType:I,verticalSpace:x,transitionType:w,screenTransitionType:j,onHeightChange:J,onInterctionChange:G,formatMessage:r})),Object(n.jsx)(n.ReactResizeDetector,{handleHeight:!0,onResize:X}))),!R&&Object(n.jsx)(_i,{layoutId:o,layoutItemId:i,layoutItem:a,isFirst:u,isLast:p,builderTheme:M,formatMessage:r}),O&&Object(n.jsx)("div",{className:"group-tip"},Object(n.jsx)("div",{className:"tip-content"})),O&&g&&Object(n.jsx)(n.Keyboard,{bindings:Q}))):null}const qi=o(82),Qi=o(41),Ki=o(45),tn=n.css`
  pointer-events: all;
`;function en(t){return n.css`
    body.lock-layout &,
    body:not(.design-mode) & {
      display: none !important;
    }

    display: flex;
    height: 200px;
    padding: 1rem;
    pointer-events: none;
    position: relative;
    z-index: 1;
    .btn-text {
      line-height: 32px;
    }
    .btn {
      margin-right: 2rem;
      background: ${t.colors.palette.light[600]};
      &:hover {
        background: ${t.colors.palette.light[800]};
      }
    }
    .action-item {
      width: 32px;
    }

    .action-seprator {
      width: 300px;
      height: 1px;
      background-color: ${t.colors.palette.dark[800]};
    }
  `}function on(t){return t===n.BrowserSizeMode.Large}function nn(t){const{pageContext:e,browserSizeMode:o,onPageTemplateSelected:i,onBlockTemplateSelected:s,onScreenTemplateSelected:r,blockOnly:l}=t,{builderTheme:d,formatMessage:c,isHeader:u,isFooter:p}=e,[h,g]=n.React.useState(!1),[f,m]=n.React.useState(!1),[y,v]=n.React.useState(!1),b=n.React.useRef(null),I=n.React.useRef(null),x=n.React.useRef(null),w=n.ReactRedux.useSelector(t=>{var e,o,i;const s=null!==(i=null===(o=null===(e=t.appConfig)||void 0===e?void 0:e.forBuilderAttributes)||void 0===o?void 0:o.lockLayout)&&void 0!==i&&i;return t.appRuntimeInfo.appMode===n.AppMode.Design&&!s}),j=!u&&!p;let S;S=u?c("chooseHeaderTemplate"):p?c("chooseFooterTemplate"):c("chooseTemplate",{type:e.isDialog?c("dialog").toLocaleLowerCase():c("page").toLocaleLowerCase()});return w?Object(n.jsx)("div",{className:"w-100 flex-column justify-content-center align-items-center",css:en(d)},Object(n.jsx)("div",{className:"d-flex"},j&&Object(n.jsx)(n.React.Fragment,null,Object(n.jsx)(a.Tooltip,{placement:"bottom",title:c("insertABlock")},Object(n.jsx)("div",{className:"action-item",ref:b},Object(n.jsx)(a.Button,{icon:!0,onClick:t=>{t.stopPropagation(),m(!f)},css:tn,className:"rounded-circle"},Object(n.jsx)(a.Icon,{icon:qi,size:16,color:d.colors.palette.dark[800]})))),on(o)&&Object(n.jsx)(a.Tooltip,{placement:"bottom",title:c("insertAScreenGroup")},Object(n.jsx)("div",{className:"action-item ml-4",ref:I},Object(n.jsx)(a.Button,{icon:!0,onClick:t=>{t.stopPropagation(),v(!f)},css:tn,className:"rounded-circle"},Object(n.jsx)(a.Icon,{icon:Qi,size:16,color:d.colors.palette.dark[800]}))))),!l&&Object(n.jsx)(a.Tooltip,{placement:"bottom",title:S},Object(n.jsx)("div",{className:Object(n.classNames)("action-item",{"ml-4":j}),ref:x},Object(n.jsx)(a.Button,{icon:!0,onClick:t=>{t.stopPropagation(),g(!h)},css:tn,className:"rounded-circle"},Object(n.jsx)(a.Icon,{icon:Ki,size:16,color:d.colors.palette.dark[800]}))))),Object(n.jsx)("div",{className:"action-seprator mt-3"}),Object(n.jsx)("div",null,Object(n.jsx)("h5",{className:"btn-text mt-2"},c("dropWidgetToAdd"))),j&&f&&Object(n.jsx)(Tt.BlockTemplatePopper,{referenceElement:b.current,theme:d,onItemSelect:t=>{m(!1),s(t)},onClose:()=>{m(!1)}}),j&&y&&on(o)&&Object(n.jsx)(Tt.ScreenGroupTemplatePopper,{referenceElement:I.current,theme:d,onItemSelect:t=>{v(!1),r(t)},onClose:()=>{v(!1)}}),!l&&h&&Object(n.jsx)(Tt.PageTemplatePopper,{isHeader:u,isFooter:p,theme:d,pageMode:n.PageMode.AutoScroll,referenceElement:x.current,formatMessage:c,onItemSelect:t=>{g(!1),i(t)},onClose:()=>{g(!1)}})):null}const sn=n.css`
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  background: transparent;
`,an=n.css`
  ${sn};
  z-index: ${l.LayoutZIndex.DragMoveTip};
  pointer-events: none;
`;class rn extends n.React.PureComponent{constructor(t){var e;super(t),this.state={isDragover:!1,isLoadingTemplate:!1},this.handleActivate=t=>{if(!B())return;if(Math.abs(t.screenX-this.mousedownX)>l.CLICK_TOLRERANCE||Math.abs(t.screenY-this.mousedownY)>l.CLICK_TOLRERANCE)return void t.stopPropagation();const{isInSection:e,isInWidget:o}=this.props;this.pageContext.viewOnly||e||o||tt()||X()||(t.stopPropagation(),Object(n.getAppStore)().dispatch(n.appActions.selectionChanged(null)))},this.handleMouseDown=t=>{this.mousedownX=t.screenX,this.mousedownY=t.screenY},this.handleDropAtBoundary=(t,e,o)=>{o<this.props.layout.order.length?this.referenceId=this.props.layout.order[o]:this.referenceId=null,null==this.domRect&&(this.domRect=this.ref.getBoundingClientRect()),this.handleDrop(t,this.domRect,e)},this.onWidgetItemSelected=t=>{var e,o,i;const n=this.ref.getBoundingClientRect(),s={height:null!==(i=null===(o=null===(e=t.manifest)||void 0===e?void 0:e.defaultSize)||void 0===o?void 0:o.height)&&void 0!==i?i:300};this.addWidgetToLayout(t,n,s,4,0)},this.handleBlockTemplateSelected=t=>{this.setState({isLoadingTemplate:!0}),li(this.props.layout.id,"",t).finally(()=>{this.setState({isLoadingTemplate:!1})})},this.handleScreenTemplateSelected=t=>{this.setState({isLoadingTemplate:!0}),di(this.props.layout.id,"",t).finally(()=>{this.setState({isLoadingTemplate:!1})})},this.handlePageTemplateSelected=t=>{const e=Object(s.getAppConfigAction)().appConfig;this.setState({isLoadingTemplate:!0}),this.pageContext.isHeader?s.templateUtils.applyPageTemplateToHeader(e,t).then(({appConfig:t})=>{Object(s.getAppConfigAction)(t).exec(),n.lodash.defer(()=>{this.setState({isLoadingTemplate:!1})})}).finally(null):this.pageContext.isFooter?s.templateUtils.applyPageTemplateToFooter(e,t).then(({appConfig:t})=>{Object(s.getAppConfigAction)(t).exec(),n.lodash.defer(()=>{this.setState({isLoadingTemplate:!1})})}).finally(null):s.templateUtils.applyPageTemplateToBody(e,this.pageContext.pageId,t).then(({appConfig:t})=>{Object(s.getAppConfigAction)(t).exec(),n.lodash.defer(()=>{this.setState({isLoadingTemplate:!1})})}).finally(null)},l.utils.autoBindHandlers(this,["handleDrop","handleDragOver","handleDragEnter","handleDragLeave","handleToggleDragoverEffect"]);const o=n.ExtensionManager.getInstance().getExtensions(""+n.extensionSpec.ExtensionPoints.LayoutTransformer);if((null==o?void 0:o.length)>0){const t=o.find(t=>t.layoutType===this.props.layout.type);this.layoutTransform=null===(e=t)||void 0===e?void 0:e.transformLayout}}componentDidMount(){this.canvasPane=new $e(this.canvasRef),this.canvasPane.setSize(this.ref.clientWidth,this.ref.clientHeight)}componentDidUpdate(){this.canvasPane.setSize(this.ref.clientWidth,this.ref.clientHeight)}handleDragOver(t,e,o,i,s,a){var r,l,d;const{layout:c}=this.props,u=null!==(r=t.layoutInfo)&&void 0!==r?r:{layoutId:null};let p=i;if(this.canvasPane.clear(),(null===(l=this.childRects)||void 0===l?void 0:l.length)>0){const{insertY:t,refId:e}=function(t,e,o,i){let n,s,a=!1;if(o.some((t,i)=>{if(t.top+t.height/2>e){if(0===i)n=Math.max(t.top/2,t.top-5);else{const e=o[i-1];n=(t.top+e.top+e.height)/2}a=!0,s=t.id}return a}),!a){const e=o[o.length-1];n=Math.min(e.top+e.height+5,(e.top+e.height+t.height)/2)}return{refId:s,insertY:n}}(o,a,this.childRects);if(this.referenceId=e,u.layoutId===this.props.layout.id){const t=c.order,o=t.indexOf(u.layoutItemId),i=t.indexOf(e);if((null===(d=c.content[u.layoutItemId].setting)||void 0===d?void 0:d.isFloating)||o===i-1||null==e&&o===t.length-1)return}p={top:t-5+this.ref.scrollTop,width:o.width-10,left:5,height:10}}else this.referenceId=null,p={top:o.height/2-5,width:o.width-10,left:5,height:10};this.canvasPane.setColor(n.polished.rgba(this.builderTheme.colors.palette.primary[700],.4)),this.canvasPane.drawRect(p)}handleToggleDragoverEffect(t,e){var o;t&&(this.referenceId=null,this.collectBounds(null!==(o=e.layoutInfo)&&void 0!==o?o:{layoutId:null})),this.canvasPane.clear(),this.setState({isDragover:t})}handleDragEnter(t){}handleDragLeave(){}handleDrop(t,e,o){var i,a;this.canvasPane.clear();const{layout:r}=this.props,l=null!==(i=t.layoutInfo)&&void 0!==i?i:{layoutId:null},d=Object(s.getAppConfigAction)();let c=0;if(null!=this.referenceId?c=r.order.indexOf(this.referenceId):null!=r.order&&(c=r.order.length),this.referenceId=null,this.childRects=[],l.layoutId===r.id){if(null===(a=r.content[l.layoutItemId].setting)||void 0===a?void 0:a.isFloating){const t=Object(s.getAppConfigAction)();return t.setLayoutItemToPending(l,!1),void Object(n.getAppStore)().dispatch(n.appActions.layoutChanged(t.appConfig,Object.assign(Object.assign({},l),{autoScroll:!1})))}return void S(d.appConfig,t,{layoutId:r.id},e,o,c).then(t=>{const{layoutInfo:e,updatedAppConfig:o}=t;Object(n.getAppStore)().dispatch(n.appActions.layoutChanged(o,Object.assign(Object.assign({},e),{autoScroll:!0})))}).finally(null)}const u=(this.maxPageWidth>0?Math.min(this.maxPageWidth,e.width):e.width)/12,p=Math.min(Math.round(o.width/u),12);this.addWidgetToLayout(t,e,o,p,c)}addWidgetToLayout(t,e,o,i,n,s){P(t,{layoutId:this.props.layout.id},e,o,i,n,s).finally(null)}collectBounds(t){const{layout:e}=this.props;this.childRects=[],this.domRect=this.ref.getBoundingClientRect();const o=this.ref.parentNode.querySelectorAll(`div[data-layoutid="${e.id}"] > div.exb-rnd`);return(null==o?void 0:o.length)>0&&o.forEach(o=>{var i;const n=o.getAttribute("data-layoutitemid");if((t.layoutId!==e.id||t.layoutItemId!==n)&&(null===(i=e.order)||void 0===i?void 0:i.includes(n))){const t=l.utils.relativeClientRect(o.getBoundingClientRect(),this.domRect);t.id=n,this.childRects.push(t)}}),this.childRects.sort((t,e)=>t.top-e.top)}createItem(t,e,o,i){const{layouts:a,layout:r,itemDraggable:l,itemSelectable:d}=this.props,c=function(t){const{layoutId:e,layoutItemId:o}=t,i=Object(s.getAppConfigAction)().appConfig.layouts[e];let n=!1;return i.order.some(t=>{var e;if(!(null===(e=i.content[t].setting)||void 0===e?void 0:e.isFloating))return n=t===o,!0}),n}({layoutId:r.id,layoutItemId:t.id}),u=function(t){var e;const{layoutId:o,layoutItemId:i}=t,n=Object(s.getAppConfigAction)().appConfig.layouts[o];let a=!1;for(let t=n.order.length-1;t>=0;t--){const o=n.order[t];if(!(null===(e=n.content[o].setting)||void 0===e?void 0:e.isFloating)){a=o===i;break}}return a}({layoutId:r.id,layoutItemId:t.id}),p=t.setting;return t.type===n.LayoutItemType.ScreenGroup?Object(n.jsx)(Ji,{key:`${r.id}_${t.id}`,itemIndex:o,isFirst:c,isLast:u,layoutId:r.id,layoutItemId:t.id,layoutItem:t,theme:this.pageContext.builderTheme,formatMessage:this.pageContext.formatMessage}):(null==p?void 0:p.isFloating)?Object(n.jsx)(xi,{key:`${r.id}_${t.id}`,index:o,total:e,builderTheme:this.builderTheme,layouts:a,layoutId:r.id,layoutItemId:t.id,layoutItem:t,gutter:i.gutter,draggable:l,selectable:d,onDropAtBoundary:this.handleDropAtBoundary,formatMessage:this.pageContext.formatMessage}):Object(n.jsx)(bi,{key:`${r.id}_${t.id}`,index:o,isFirst:c,isLast:u,builderTheme:this.builderTheme,layouts:a,layoutId:r.id,layoutItemId:t.id,layoutItem:t,gutter:i.gutter,draggable:l,selectable:d,onDropAtBoundary:this.handleDropAtBoundary,formatMessage:this.pageContext.formatMessage})}getActionStyle(){return n.css`
      height: 200px;
      padding: 1rem;
      pointer-events: none;
      z-index: 1;
      .btn-text {
        line-height: 32px;
      }
      .btn {
        margin-right: 2rem;
        background: ${this.builderTheme.colors.palette.light[600]};
        &:hover {
          background: ${this.builderTheme.colors.palette.light[800]};
        }
      }
      .action-item {
        width: 32px;
      }

      .action-seprator {
        .sep {
          width: 65px;
          height: 1px;
          background-color: ${this.builderTheme.colors.palette.dark[800]};
        }
        .btn-text {
          margin: 0 13px;
        }
      }
    `}getStyle(){const{builderTheme:t}=this.pageContext;return n.css`
      & > .trail-container > .builder-layout-item {
        margin-bottom: 10px;
        border-top: 1px dashed ${n.polished.rgba(t.colors.palette.dark[600],.6)};
        border-bottom: 1px dashed ${n.polished.rgba(t.colors.palette.dark[600],.6)};
        z-index: 0;

        .widget-context-menu {
          width: 100%;
          height: auto;
          top: 0;
        }

        &.selected, &.floating {
          z-index: 1;
        }
      }

      body:not(.design-mode) & {
        & > .trail-container > .builder-layout-item {
          margin-bottom: 0;
          border-top: none;
          border-bottom: none;
        }
      }
    `}createActions(t){const{viewOnly:e,rootLayoutId:o}=this.pageContext,{layout:i}=this.props,s=!this.pageContext.isHeader&&!this.pageContext.isFooter;return this.state.isLoadingTemplate||!s||e||i.id!==o?null:Object(n.jsx)(nn,{pageContext:this.pageContext,browserSizeMode:this.props.browserSizeMode,blockOnly:t,onPageTemplateSelected:this.handlePageTemplateSelected,onBlockTemplateSelected:this.handleBlockTemplateSelected,onScreenTemplateSelected:this.handleScreenTemplateSelected})}render(){const{layout:t,className:e,isPageItem:o,layouts:i,mainSizeMode:s,browserSizeMode:r}=this.props;if(null==t)return null;const d=Object(n.classNames)("layout flow-layout w-100",e),c={display:this.state.isDragover?"block":"none"};return Object(n.jsx)(l.PageContext.Consumer,null,e=>{var l;this.builderTheme=e.builderTheme,this.maxPageWidth=e.maxWidth,this.pageContext=e;let u=t;i[r]!==t.id&&null!=this.layoutTransform&&(u=this.layoutTransform(t,s,r));const p=null!==(l=u.order)&&void 0!==l?l:[],h=n.lodash.assign({},Mo.b,u.setting),g=Object.assign({position:"relative"},a.styleUtils.toCSSStyle(h.style));return Object(n.jsx)("div",{className:d,ref:t=>this.ref=t,css:this.getStyle(),style:g,"data-layoutid":t.id,onClick:this.handleActivate,onMouseDown:this.handleMouseDown},Object(n.jsx)(n.OneByOneAnimation,{"data-layoutid":u.id,enableScroll:!0,className:"trail-container d-flex flex-column align-items-center",css:n.css`
                  width: 100%;
                `},!e.viewOnly&&Object(n.jsx)(kt,{css:sn,layouts:this.props.layouts,isRepeat:this.props.isRepeat,highlightDragover:!o,onDragEnter:this.handleDragEnter,onDragLeave:this.handleDragLeave,onDragOver:this.handleDragOver,onDrop:this.handleDrop,onToggleDragoverEffect:this.handleToggleDragoverEffect}),p.length>0&&p.map((t,e)=>this.createItem(u.content[t],p.length,e,h))),!this.state.isLoadingTemplate&&!e.viewOnly&&0===p.length&&t.id===e.rootLayoutId&&this.createActions(!1),p.length>0&&this.createActions(!0),this.state.isLoadingTemplate&&Object(n.jsx)(a.Loading,{type:a.LoadingType.Primary}),Object(n.jsx)("canvas",{css:an,style:c,ref:t=>this.canvasRef=t}))})}}var ln=n.ReactRedux.connect(l.utils.mapStateToLayoutProps)(rn),dn=o(11),cn=function(t,e,o,i){return new(o||(o=Promise))((function(n,s){function a(t){try{l(i.next(t))}catch(t){s(t)}}function r(t){try{l(i.throw(t))}catch(t){s(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,r)}l((i=i.apply(t,e||[])).next())}))};function un(t){const e=parseFloat(t);return l.utils.isPercentage(t)?e/2+"%":e/2+"px"}function pn(t,e,o,i,a){return cn(this,void 0,void 0,(function*(){const r=e.layoutInfo;return yield function(t,e,o){return cn(this,void 0,void 0,(function*(){const i=e.layoutInfo,a=Object(s.getAppConfigAction)(t);let r;if(i&&i.layoutId&&i.layoutItemId){const e=t.layouts[i.layoutId].content[i.layoutItemId];return r=e.set("id",""+(l.utils.getMaximumId(t.layouts[o.layoutId])+1)).without("bbox"),yield Promise.resolve({newLayoutItem:r,updatedAppConfig:t})}if(e.itemType===n.LayoutItemType.Section){const i=e.id?e.id:a.createSection().id;return r=Object(n.Immutable)({sectionId:i,id:""+(l.utils.getMaximumId(t.layouts[o.layoutId])+1),type:n.LayoutItemType.Section}),yield Promise.resolve({newLayoutItem:r,updatedAppConfig:a.appConfig})}if(e.id)return r=Object(n.Immutable)({id:""+(l.utils.getMaximumId(t.layouts[o.layoutId])+1),type:n.LayoutItemType.Widget,widgetId:e.id}),yield Promise.resolve({newLayoutItem:r,updatedAppConfig:t});const d={uri:e.uri};return yield n.WidgetManager.getInstance().handleNewWidgetJson(d).then(e=>cn(this,void 0,void 0,(function*(){const i=n.appConfigUtils.getUniqueId(a.appConfig,"widget");return e.id=i,a.createWidget(Object(n.Immutable)(e)),r=Object(n.Immutable)({id:""+(l.utils.getMaximumId(t.layouts[o.layoutId])+1),type:n.LayoutItemType.Widget,widgetId:e.id}),yield Promise.resolve({newLayoutItem:r,updatedAppConfig:a.appConfig})})))}))}(t,e,o).then(({newLayoutItem:t,updatedAppConfig:e})=>cn(this,void 0,void 0,(function*(){const{layoutId:n}=o;let l,d=Object(s.getAppConfigAction)(e),c=t;if(i){l=d.addItemIntoLayout(n,c,0);const t=e.layouts[n].content[i];if(t.parentId){const o=e.layouts[n].content[t.parentId];o.direction===dn.b.Horizontal?d="left"===a||"right"===a?hn(d,n,l.layoutItemId,i,a):gn(d,n,l.layoutItemId,i,a):o.direction===dn.b.Vertical&&(d="top"===a||"bottom"===a?hn(d,n,l.layoutItemId,i,a):gn(d,n,l.layoutItemId,i,a))}else d=gn(d,n,l.layoutItemId,i,a),d.editLayoutSetting({layoutId:n},{rootItemId:d.appConfig.layouts[n].content[i].parentId})}else c=c.set("bbox",{width:"100%",height:"100%"}),l=d.addItemIntoLayout(n,c,0),d.editLayoutSetting(o,{rootItemId:c.id});return r&&r.layoutId&&r.layoutItemId&&(d.setLayoutItemToPending(l,!1),d.clearRedundantLayout(r)),yield Promise.resolve({layoutInfo:l,updatedAppConfig:d.appConfig})})))}))}function hn(t,e,o,i,n){const s=t.appConfig,a=s.layouts[e].content[i],r=s.layouts[e].content[a.parentId],l=[].concat(r.items);t.updateLayoutItem({layoutId:e,layoutItemId:o},"parentId",a.parentId);const d=r.items.indexOf(i);return"left"===n||"top"===n?(0===d?l.unshift(o):l.splice(d,0,o),t.updateLayoutItem({layoutId:e,layoutItemId:a.parentId},"items",l)):(l.splice(d+1,0,o),t.updateLayoutItem({layoutId:e,layoutItemId:a.parentId},"items",l)),"left"===n||"right"===n?t.editLayoutItemBBox({layoutId:e,layoutItemId:i},{height:a.bbox.height,width:un(a.bbox.width)}).editLayoutItemBBox({layoutId:e,layoutItemId:o},{height:a.bbox.height,width:un(a.bbox.width)}):t.editLayoutItemBBox({layoutId:e,layoutItemId:i},{height:un(a.bbox.height),width:a.bbox.width}).editLayoutItemBBox({layoutId:e,layoutItemId:o},{height:un(a.bbox.height),width:a.bbox.width}),t}function gn(t,e,o,i,s){const a=t.appConfig,r=a.layouts[e].content[i];let d=Object(n.Immutable)({id:""+(l.utils.getMaximumId(a.layouts[e])+1),items:"left"===s||"top"===s?[o,i]:[i,o],direction:"left"===s||"right"===s?dn.b.Horizontal:dn.b.Vertical,bbox:r.bbox});if(r.parentId){d=d.set("parentId",r.parentId);const o=a.layouts[e].content[r.parentId],n=[].concat(o.items),s=o.items.indexOf(i);n.splice(s,1,d.id),t.updateLayoutItem({layoutId:e,layoutItemId:r.parentId},"items",n)}const c=t.addItemIntoLayout(e,d,0);return t.updateLayoutItem({layoutId:e,layoutItemId:i},"parentId",c.layoutItemId).updateLayoutItem({layoutId:e,layoutItemId:o},"parentId",c.layoutItemId),"left"===s||"right"===s?t.editLayoutItemBBox({layoutId:e,layoutItemId:i},{height:"100%",width:"50%"}).editLayoutItemBBox({layoutId:e,layoutItemId:o},{height:"100%",width:"50%"}):t.editLayoutItemBBox({layoutId:e,layoutItemId:i},{height:"50%",width:"100%"}).editLayoutItemBBox({layoutId:e,layoutItemId:o},{height:"50%",width:"100%"}),t}function fn(t,e,o){return l.utils.isPercentage(t)?(parseFloat(t)+100*e/o).toFixed(1)+"%":parseFloat(t)+e+"px"}const mn=n.css`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: ${l.LayoutZIndex.BoundaryDropArea};
  display: flex;
`;class yn extends n.React.PureComponent{constructor(t){super(t),this.onItemDragStart=()=>{const{layoutId:t,layoutItemId:e,onItemDragStart:o}=this.props,i=document.querySelector(`div.grid-layout[data-layoutid="${t}"] div[data-layoutitemid="${e}"]`),n=i.getBoundingClientRect();i.style.position="fixed",i.style.left=n.left+"px",i.style.top=n.top+"px",i.style.width=n.width+"px",i.style.height=n.height+"px",o&&o(e)},this.onItemDragEnd=()=>{const{layoutId:t,layoutItemId:e,onItemDragEnd:o}=this.props,i=document.querySelector(`div.grid-layout[data-layoutid="${t}"] div[data-layoutitemid="${e}"]`);i&&(i.style.position="static",i.style.left="auto",i.style.top="auto"),o&&o(e)},this.onDragOver=(t,e,o,i,n,s)=>{n<.3*o.width?this.setState({dragoverSide:"left"}):n>.7*o.width?this.setState({dragoverSide:"right"}):s<.5*o.height?this.setState({dragoverSide:"top"}):this.setState({dragoverSide:"bottom"})},this.onDrop=(t,e,o,i,a)=>{const{layoutId:r,layoutItemId:l}=this.props,d={layoutId:r};pn(Object(s.getAppConfigAction)().appConfig,t,d,l,this.state.dragoverSide).then(t=>{const{layoutInfo:e,updatedAppConfig:o}=t;Object(n.getAppStore)().dispatch(n.appActions.layoutChanged(o,e))}),this.setState({dragoverSide:null})},this.fakeLayouts=Object(n.Immutable)({[n.BrowserSizeMode.Large]:`${this.props.layoutId}_${this.props.layoutItemId}_tlarge`,[n.BrowserSizeMode.Medium]:`${this.props.layoutId}_${this.props.layoutItemId}_tmedium`,[n.BrowserSizeMode.Small]:`${this.props.layoutId}_${this.props.layoutItemId}_tsmall`}),this.state={dragoverSide:null},l.utils.autoBindHandlers(this,["onDragStart","onDragOver","onDrop"])}hasEmbedLayout(){const{layoutItem:t}=this.props;return t.type!==n.LayoutItemType.Widget||!t.widgetId||(l.utils.isWidgetHasEmbeddedLayout(t.widgetId,l.utils.getAppConfig())||!l.utils.isFunctionalWidget(t.widgetId,l.utils.getAppConfig()))}render(){const{layoutId:t,layoutItem:e}=this.props;if(!e)return null;const o=n.css`
      position: relative;
      width: ${l.utils.getValueOfBBox(e.bbox,"width")};
      height: ${l.utils.getValueOfBBox(e.bbox,"height")};
      flex-shrink: 1;
      flex-grow: 1;
    `;return Object(n.jsx)(l.PageContext.Consumer,null,i=>{const{dragoverSide:s}=this.state,a=n.css`
          position: absolute;
          transition: 200ms;
          left: ${"right"===s?"50%":0};
          right: ${"left"===s?"50%":0};
          top: ${"bottom"===s?"50%":0};
          bottom: ${"top"===s?"50%":0};
          width: ${"top"===s||"bottom"===s?"100%":s?"50%":0};
          height: ${"left"===s||"right"===s?"100%":s?"50%":0};
          background: ${n.polished.rgba(i.builderTheme.colors.palette.primary[700],.6)};
        `;return Object(n.jsx)(Qt,{css:o,layoutId:t,layoutItemId:e.id,resizable:!1,onDragStart:this.onItemDragStart,onDragEnd:this.onItemDragEnd,onClick:this.props.onClick},!this.hasEmbedLayout()&&Object(n.jsx)(kt,{css:mn,layouts:this.fakeLayouts,highlightDragover:!0,onDragOver:this.onDragOver,onDrop:this.onDrop},Object(n.jsx)("div",{css:a})))})}}var vn=n.ReactRedux.connect(l.utils.mapStateToLayoutItemProps)(yn);class bn extends n.React.PureComponent{constructor(){super(...arguments),this.bindSplitHandler=()=>{let t,e,o,i,n,s,a,r,l,c;this.ref&&!this.interactable&&(this.interactable=Object(d.interact)(this.ref).origin("parent").draggable({inertia:!1,autoScroll:!1,modifiers:[d.interact.modifiers.restrict({restriction:"parent"})],lockAxis:this.props.direction===dn.b.Horizontal?"x":"y",onstart:d=>{d.stopPropagation(),t=0,e=0;const{layoutId:u,prevItemId:p,nextItemId:h}=this.props;o=document.querySelector(`div.grid-layout[data-layoutid="${u}"] div[data-layoutitemid="${p}"]`),n=o.style.width,s=o.style.height,i=o.getBoundingClientRect(),a=document.querySelector(`div.grid-layout[data-layoutid="${u}"] div[data-layoutitemid="${h}"]`),l=a.style.width,c=a.style.height,r=a.getBoundingClientRect()},onmove:n=>{n.stopPropagation(),t+=n.dx,e+=n.dy;const{x:s,y:l}=this.restrictResizing(i,r,t,e);this.props.direction===dn.b.Horizontal?(o.style.width=i.width+s+"px",a.style.width=r.width-s+"px"):(o.style.height=i.height+l+"px",a.style.height=r.height-l+"px")},onend:d=>{d.stopPropagation(),t+=d.dx,e+=d.dy;const{x:u,y:p}=this.restrictResizing(i,r,t,e);o.style.width=n,a.style.width=l,o.style.height=s,a.style.height=c,this.props.onResizeEnd(u,p,this.props.prevItemId,this.props.nextItemId)}}))}}componentDidMount(){this.bindSplitHandler()}restrictResizing(t,e,o,i){let n=o,s=i;return this.props.direction===dn.b.Horizontal?(o<0&&(n=t.width>32?-Math.min(Math.abs(o),t.width-32):0),o>0&&(n=e.width>32?Math.min(o,e.width-32):0)):(i<0&&(s=t.height>32?-Math.min(Math.abs(i),t.height-32):0),i>0&&(s=e.height>32?Math.min(i,e.height-32):0)),{x:n,y:s}}getStyle(t){const{direction:e,size:o,color:i}=this.props,s=o+"px";return n.css`
      width: ${e===dn.b.Vertical?"100%":s};
      height: ${e===dn.b.Vertical?s:"100%"};
      background: ${i};
      position: relative;
      z-index: ${l.LayoutZIndex.HandlerTools};

      &:hover {
        background: ${t.colors.palette.dark[300]};
      }

      .horizontal-splitter {
        width: 15px;
        height: 100%;
        position: absolute;
        left: -5px;
        cursor: ew-resize;
      }

      .vertical-splitter {
        width: 100%;
        height: 15px;
        position: absolute;
        top: -5px;
        cursor: row-resize;
      }
    `}render(){const{direction:t}=this.props;return Object(n.jsx)(l.PageContext.Consumer,null,e=>Object(n.jsx)("div",{ref:t=>this.ref=t,css:this.getStyle(e.builderTheme)},Object(n.jsx)("div",{className:Object(n.classNames)({"horizontal-splitter":t===dn.b.Horizontal,"vertical-splitter":t===dn.b.Vertical})})))}}class In extends n.React.PureComponent{constructor(){super(...arguments),this.state={draggingItemId:null},this.onResizeEnd=(t,e,o,i)=>{!function(t,e,o,i,n,a,r){const l=Object(s.getAppConfigAction)(),d=l.appConfig.layouts[i],c=d.content[n],u=d.content[a];if(r===dn.b.Horizontal){const e=fn(c.bbox.width,t,o.width),s=fn(u.bbox.width,-t,o.width);l.editLayoutItemBBox({layoutId:i,layoutItemId:n},{width:e,height:c.bbox.height}).editLayoutItemBBox({layoutId:i,layoutItemId:a},{width:s,height:u.bbox.height})}else{const t=fn(c.bbox.height,e,o.height),s=fn(u.bbox.height,-e,o.height);l.editLayoutItemBBox({layoutId:i,layoutItemId:n},{width:c.bbox.width,height:t}).editLayoutItemBBox({layoutId:i,layoutItemId:a},{width:u.bbox.width,height:s})}l.exec()}(t,e,this.ref.getBoundingClientRect(),this.props.layoutId,o,i,this.props.layoutItem.direction)},this.onItemDragStart=t=>{this.setState({draggingItemId:t})},this.onItemDragEnd=()=>{this.setState({draggingItemId:null})}}createItems(t,e){const{layoutId:o,layoutItem:i,splitterColor:s,splitterSize:a}=this.props,r=[];return t.forEach((l,d)=>{const c=e.includes(l)?xn:vn;r.push(n.React.createElement(c,{key:l,layoutId:o,layoutItemId:l,onItemDragStart:this.onItemDragStart,onItemDragEnd:this.onItemDragEnd})),d!==t.length-1&&l!==this.state.draggingItemId&&t[d+1]!==this.state.draggingItemId&&r.push(n.React.createElement(bn,{key:l+"_splitter",layoutId:o,direction:i.direction,prevItemId:t[d],nextItemId:t[d+1],onResizeEnd:this.onResizeEnd,size:a,color:s}))}),r}render(){const{layoutItem:t,subContainerIds:e}=this.props;if(!t)return null;const o=t.items&&t.items.length>0?t.items:[t.id],i=e.split(","),s=Object(n.classNames)("grid-container d-flex justify-content-start",{"flex-column":t.direction===dn.b.Vertical}),a={width:t.bbox.width,height:t.bbox.height,flexShrink:1,flexGrow:1};return n.React.createElement("div",{className:s,"data-layoutitemid":t.id,"data-layoutid":this.props.layoutId,style:a,ref:t=>this.ref=t},this.createItems(o,i))}}const xn=n.ReactRedux.connect((function(t,e){const{layoutId:o,layoutItemId:i}=e,{layouts:n}=t.appConfig,s=n[o],a=s.content[i],r=[];return a&&a.items&&a.items.forEach(t=>{const e=s.content[t];e&&e.items&&r.push(t)}),{layoutItem:a,subContainerIds:r.join(",")}}))(In),wn=n.css`
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  background: transparent;
  display: flex;
`;class jn extends n.React.PureComponent{constructor(t){super(t),l.utils.autoBindHandlers(this,["handleDrop","handleDragOver","handleDragEnter","handleDragLeave"])}handleDragOver(){}handleDragEnter(){}handleDragLeave(){}handleDrop(t,e,o){const{layout:i}=this.props,a={layoutId:i.id};let r=Object(s.getAppConfigAction)();pn(r.appConfig,t,a,null,"top").then(t=>{const{layoutInfo:e,updatedAppConfig:o}=t;r=Object(s.getAppConfigAction)(o),r.editLayoutItemBBox(e,{width:"100%",height:"100%"}),Object(n.getAppStore)().dispatch(n.appActions.layoutChanged(r.appConfig,e))}).finally(null)}render(){var t,e,o,i;const{layout:s,className:r}=this.props,d=null===(t=s.setting)||void 0===t?void 0:t.style,c=null===(e=s.setting)||void 0===e?void 0:e.rootItemId,u=Object.keys(null!==(o=s.content)&&void 0!==o?o:{}).length,p=n.lodash.assign({},dn.a,null===(i=s.setting)||void 0===i?void 0:i.splitter);return Object(n.jsx)(l.PageContext.Consumer,null,t=>{const e=Object.assign(Object.assign({position:"relative"},a.styleUtils.toCSSStyle(d)),{overflow:"hidden"}),o=Object(n.classNames)("layout grid-layout d-flex w-100",r);return Object(n.jsx)("div",{className:o,style:e,"data-layoutid":s.id},0===u&&Object(n.jsx)(kt,{css:wn,layouts:this.props.layouts,highlightDragover:!0,onDragEnter:this.handleDragEnter,onDragLeave:this.handleDragLeave,onDragOver:this.handleDragOver,onDrop:this.handleDrop},Object(n.jsx)("div",{css:n.css`
                    width: 100%;
                    background: ${t.builderTheme.colors.palette.primary[700]}
                  `})),null!=c&&Object(n.jsx)(xn,{layoutId:s.id,layoutItemId:c,splitterSize:p.size,splitterColor:p.color}),null==c&&this.props.children)})}}var Sn=n.ReactRedux.connect(l.utils.mapStateToLayoutProps)(jn);const Cn=n.css`
  .resize-handler {
    height: ${16}px;
    width: 100%;
    cursor: ns-resize;
    position: absolute;
  }
`,On=n.css`
  position: absolute;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
`;function Rn(t){return n.css`
    .edit-btn {
      background: ${t.colors.primary};
      color: ${t.colors.palette.dark[800]};
      border-radius: 2px;
      &:hover {
        background: ${t.colors.palette.primary[600]};
        color: ${t.colors.black};
      }
    }
  `}function Mn(){Object(n.getAppStore)().dispatch(n.appActions.activePagePartChanged(n.PagePart.Header))}function Tn(){Object(n.getAppStore)().dispatch(n.appActions.activePagePartChanged(n.PagePart.Footer))}function An(){Object(n.getAppStore)().dispatch(n.appActions.activePagePartChanged(n.PagePart.Body))}function Pn(){const t=Object(n.getAppStore)().getState(),e=t.appConfig.header.layout;return l.searchUtils.findLayoutId(e,t.browserSizeMode,t.appConfig.mainSizeMode)}function Ln(){const t=Object(n.getAppStore)().getState(),e=t.appConfig.footer.layout;return l.searchUtils.findLayoutId(e,t.browserSizeMode,t.appConfig.mainSizeMode)}function zn(t){var e;const o=Object(n.getAppStore)().getState(),i=null===(e=o.appConfig.dialogs[t])||void 0===e?void 0:e.layout;return l.searchUtils.findLayoutId(i,o.browserSizeMode,o.appConfig.mainSizeMode)}function kn(t){return Object.keys(t).find(e=>t[e])}const Nn=o(48);function Bn(t,e,o,i,s){return n.css`
    ${Cn};
    ${Rn(i)};
    position: relative;
    z-index: auto;
    top: 0;
    display: ${o?"flex":"none"};
    width: 100%;
    height: auto;
    min-height: ${parseFloat(e)}px;
    overflow: hidden;
    background-color: ${t.backgroundColor||s.header.bg||"transparent"};
    background-image: ${t.backgroundIMage};
    background-position: ${t.backgroundPosition};
    color: ${s.header.color};
    border-bottom: 1px dashed ${n.polished.rgba(i.colors.white,.12)};
    flex: 0 0 auto;

    &:hover {
      .edit-mask {
        display: flex;
      }
    }

    body.lock-layout &,
    body:not(.design-mode) & {
      > .resize-handler {
        display: none !important;
      }
    }
    body:not(.design-mode) & {
      position: ${t.sticky?"sticky":"relative"};
      z-index: ${t.sticky?2:"auto"};

      .edit-mask, .edit-mask-all {
        display: none !important;
      }
    }
  `}function $n(t){const{header:e,headerVisible:o,browserSizeMode:i,mainSizeMode:r,activePagePart:c,pageContext:u}=t,p=n.React.useRef(null),h=e.height[i]||e.height[r]||75,g=e.layout,f=!g[i],m=u.builderTheme;n.React.useEffect(()=>{let t;return p.current&&(t=function(t){let e,o;return Object(d.interact)(t).origin("parent").resizable({inertia:!1,edges:{bottom:".resize-handler"},onstart:i=>{i.stopPropagation(),e=0,o=t.getBoundingClientRect().height,t.style.minHeight="0px"},onmove:i=>{i.stopPropagation();const n=i.deltaRect;e+=n.height,t.style.height=o+e+"px"},onend:i=>{i.stopPropagation();const n=Object(s.getAppConfigAction)().appConfig.header;t.style.height=null,t.style.minHeight=null,Object(s.getAppConfigAction)().editHeader(n.setIn(["height",l.utils.getCurrentSizeMode()],Math.round(o+e))).exec()}})}(p.current)),()=>{t&&t.unset()}},[]);const y=Pn(),v=n.React.useMemo(()=>Object.assign(Object.assign({},u),{isHeader:!0,rootLayoutId:y,viewOnly:f||c!==n.PagePart.Header}),[u,y,f,c]);return Object(n.jsx)(l.PageContext.Provider,{value:v},Object(n.jsx)("div",{className:"header",css:Bn(e,h,o,u.builderTheme,u.theme),ref:t=>p.current=t},Object(n.jsx)("div",{className:"w-100 h-100",css:n.css`
            overflow: auto;
            display: flex;
            position: relative;
            z-index: 0;
            min-height: ${parseFloat(h)}px;
          `},Object(n.jsx)(Ht,{layouts:g,isPageItem:!0,visible:o})),!f&&Object(n.jsx)("span",{className:"resize-handler",css:n.css`
              bottom: ${-8}px;
              z-index: 1;
            `}),c!==n.PagePart.Header&&!f&&Object(n.jsx)("div",{className:"edit-mask-all",css:n.css`
              ${On};
              background: ${c===n.PagePart.Body?"transparent":n.polished.rgba(m.colors.palette.light[400],.6)};
              z-index: 1;
            `,onClick:An}),c===n.PagePart.Body&&(!f||i===r)&&Object(n.jsx)("div",{className:"edit-mask justify-content-center align-items-center",css:n.css`
              ${On};
              background: ${n.polished.rgba(m.colors.palette.light[400],.6)};
              z-index: 1;
              display: none;
            `},Object(n.jsx)(a.Button,{className:"edit-btn btn-large border-0",onClick:Mn},Object(n.jsx)(a.Icon,{icon:Nn,width:16,height:16}),u.formatMessage("editHeader")))))}const En=o(48);function Dn(t,e,o,i,s){return n.css`
    ${Cn};
    ${Rn(i)};
    display: ${o?"flex":"none"};
    position: relative;
    width: 100%;
    height: auto;
    min-height: ${parseFloat(e)}px;
    overflow: hidden;
    background-color: ${t.backgroundColor||s.footer.bg||"transparent"};
    background-image: ${t.backgroundIMage};
    background-position: ${t.backgroundPosition};
    color: ${s.footer.color};
    border-top: 1px dashed ${n.polished.rgba(i.colors.white,.12)};
    z-index: 0;

    &:hover {
      .edit-mask {
        display: flex;
      }
    }

    body.lock-layout &,
    body:not(.design-mode) & {
      > .resize-handler {
        display: none !important;
      }
    }
    body:not(.design-mode) & {
      .edit-mask, .edit-mask-all {
        display: none !important;
      }
    }
  `}function Fn(t){const{footer:e,footerVisible:o,browserSizeMode:i,mainSizeMode:r,activePagePart:c,pageContext:u}=t,p=n.React.useRef(null),h=e.height[i]||e.height[r]||75,g=e.layout,f=!g[i],m=u.builderTheme;n.React.useEffect(()=>{let t;return p.current&&(t=function(t){let e,o;return Object(d.interact)(t).origin("parent").resizable({inertia:!1,edges:{top:".resize-handler"},onstart:i=>{i.stopPropagation(),e=0,o=t.getBoundingClientRect().height},onmove:i=>{i.stopPropagation();const n=i.deltaRect;e+=n.height,t.style.height=o+e+"px"},onend:i=>{i.stopPropagation();const n=Object(s.getAppConfigAction)().appConfig.footer;t.style.height=null,Object(s.getAppConfigAction)().editFooter(n.setIn(["height",l.utils.getCurrentSizeMode()],Math.round(o+e))).exec()}})}(p.current)),()=>{t&&t.unset()}},[]);const y=Ln(),v=n.React.useMemo(()=>Object.assign(Object.assign({},u),{isFooter:!0,rootLayoutId:y,viewOnly:f||c!==n.PagePart.Footer}),[u,y,f,c]);return Object(n.jsx)(l.PageContext.Provider,{value:v},Object(n.jsx)("div",{className:"footer",css:Dn(e,h,o,u.builderTheme,u.theme),ref:t=>p.current=t},!f&&Object(n.jsx)("span",{className:"resize-handler",css:n.css`
              top: ${-8}px;
              z-index: 1;
            `}),Object(n.jsx)("div",{className:"w-100 h-100",css:n.css`
            overflow: auto;
            display: flex;
            position: relative;
            z-index: 0;
            min-height: ${parseFloat(h)}px;
          `},Object(n.jsx)(Ht,{layouts:g,isPageItem:!0,visible:o})),c!==n.PagePart.Footer&&!f&&Object(n.jsx)("div",{className:"edit-mask-all",css:n.css`
              ${On};
              background: ${c===n.PagePart.Body?"transparent":n.polished.rgba(m.colors.palette.light[400],.6)};
              z-index: 1;
            `,onClick:An}),c===n.PagePart.Body&&(!f||i===r)&&Object(n.jsx)("div",{className:"edit-mask justify-content-center align-items-center",css:n.css`
              ${On};
              background: ${n.polished.rgba(m.colors.palette.light[400],.6)};
              z-index: 1;
              display: none;
            `},Object(n.jsx)(a.Button,{className:"edit-btn btn-large border-0",onClick:Tn},Object(n.jsx)(a.Icon,{icon:En,width:16,height:16}),u.formatMessage("editFooter")))))}function Vn(t){const{pageJson:e,visible:o,renderedPageId:i,browserSizeMode:s,activePagePart:a,pageContext:r}=t,d=n.React.useRef(!1),[c,u]=n.React.useState(Symbol("init")),p=n.ReactRedux.useSelector(t=>function(t,e){const o=t.appRuntimeInfo.animationPreview;return(null==o?void 0:o.pageId)===e?o.id:null}(t,e.id)),h=n.React.useRef(),g=p&&p!==h.current,f=e.layout,m=function(){if(!d.current)return d.current=!0,c;return p}(),y=e.oneByOneEffect&&e.oneByOneEffect.type!==n.AnimationType.None?e.oneByOneEffect:null,v=n.ReactRedux.useSelector(t=>{var e;return null===y||(null===(e=t.appRuntimeInfo)||void 0===e?void 0:e.appMode)===n.AppMode.Design}),b=n.ReactRedux.useSelector(t=>null===y?null:t.browserSizeMode),I=n.React.useRef(y),x=n.React.useRef(b),w=y?!o:null;n.React.useEffect(()=>{h.current=p,I.current=y}),n.React.useEffect(()=>{v||(u(Symbol("play page")),d.current=!1)},[v]),n.React.useEffect(()=>{v||x.current===b||(u(Symbol("autoplay when size mode changed")),d.current=!1),x.current=b},[b,v]),n.React.useEffect(()=>{I.current&&(u(Symbol("autoplay when switching to visible")),d.current=!1)},[o]);const j=!f[s];let S;e.mode!==n.PageMode.FitWindow&&e.maxWidth>0&&(S=e.maxWidth);const C=n.React.useMemo(()=>{const t=Object(n.getAppStore)().getState();let o;return e.layout&&(o=l.searchUtils.findLayoutId(e.layout,t.browserSizeMode,t.appConfig.mainSizeMode)),Object.assign(Object.assign({},r),{maxWidth:S,viewOnly:j,rootLayoutId:o,pageId:i})},[r,j,S,i,e.layout]),O=n.React.useMemo(()=>{const t=!v||g?y:null;return{trigger:n.AnimationTriggerType.Manual,setting:t,inheritedOneByOneSetting:null,playId:null===t?null:m,depth:0,revert:w}},[v,w,m,g,y]),R=n.React.useCallback(()=>n.css`
      display: ${o?"flex":"none"};
      position: relative;
      background-color: ${e.bodyBackgroundColor||"transparent"};
      z-index: 1;
      flex: 1 0 auto;

      body:not(.design-mode) & {
        .edit-mask {
          display: none !important;
        }
      }
    `,[o,e.bodyBackgroundColor]);if(f)return Object(n.jsx)(l.PageContext.Provider,{key:e.id,value:C},Object(n.jsx)(l.PageVisibilityContext.Provider,{value:o},Object(n.jsx)("div",{id:e.id,"data-pageid":e.id,className:"page",css:R()},Object(n.jsx)(n.AnimationContext.Provider,{value:O},Object(n.jsx)(Ht,{layouts:f,isPageItem:!0,visible:o,className:"w-100",css:n.css`
                margin: 0 auto;
                background-color: transparent;
                z-index: 0;
              `})),a!==n.PagePart.Body&&Object(n.jsx)("div",{className:"edit-mask",css:n.css`
                ${On};
                background: ${n.polished.rgba(r.theme.colors.palette.dark[800],.6)};
                z-index: 1;
              `,onClick:An}))))}Object(l.registerLayoutBuilder)(n.LayoutType.FixedLayout,He),Object(l.registerLayoutBuilder)(n.LayoutType.FlowLayout,ln),Object(l.registerLayoutBuilder)(n.LayoutType.GridLayout,Sn),Object(l.registerLayoutBuilder)(n.LayoutType.ColumnLayout,Xe);class Hn extends n.React.PureComponent{constructor(t){super(t),this.startPaste=()=>{var t;const e=null===(t=Object(n.getAppStore)().getState().appRuntimeInfo)||void 0===t?void 0:t.clipboard,{activePagePart:o,pageStatus:i,currentDialogId:s,dialogs:a}=this.props;if(e){let t;if(s&&a[s])t=zn(s);else if(o===n.PagePart.Header)t=Pn();else if(o===n.PagePart.Footer)t=Ln();else{t=function(t){var e;const o=Object(n.getAppStore)().getState(),i=null===(e=o.appConfig.pages[t])||void 0===e?void 0:e.layout;return i?l.searchUtils.findLayoutId(i,o.browserSizeMode,o.appConfig.mainSizeMode):null}(kn(i))}x(e,t)}},this.isMac=()=>/macintosh|mac os x/i.test(navigator.userAgent),this.clearSelection=t=>{!B()||tt()||X()||(t.stopPropagation(),Object(n.getAppStore)().dispatch(n.appActions.selectionChanged(null)))},this.formatMessage=(t,e)=>this.props.intl?this.props.intl.formatMessage({id:t,defaultMessage:it.a[t]},e):it.a[t],n.ExtensionManager.getInstance().registerExtension({epName:n.extensionSpec.ExtensionPoints.LayoutTransformer,extension:new si.a}),n.ExtensionManager.getInstance().registerExtension({epName:n.extensionSpec.ExtensionPoints.LayoutTransformer,extension:new ai.a}),this.isMac()?this.keyBindings={"command+keyv":this.startPaste}:this.keyBindings={"ctrl+keyv":this.startPaste},this.updatePageContext()}componentDidMount(){B()&&!document.body.classList.contains("design-mode")&&document.body.classList.add("design-mode"),N()&&!document.body.classList.contains("lock-layout")&&document.body.classList.add("lock-layout")}componentDidUpdate(t){var e;const o=null===(e=window.document)||void 0===e?void 0:e.documentElement;o&&(window.jimuConfig.isInBuilder&&B()?o.classList.add("is-in-builder"):o.classList.remove("is-in-builder"));kn(t.pageStatus)!==kn(this.props.pageStatus)&&(this.pageRef.scrollTop=0)}getPageStyle(){const{pageStatus:t,pages:e,minHeight:o}=this.props,i=e[Object.keys(t).find(e=>t[e])];return n.css`
      position: relative;
      margin: 0 auto;
      overflow: hidden;
      height: ${i.mode===n.PageMode.FitWindow?"100%":"auto"};
      min-height: ${o}px;
      .page {
        height: auto;
      }
      .is-dragging {
        z-index: ${l.LayoutZIndex.DraggingItem};
        opacity: 0.8;
      }

      body:not(.design-mode) & {
        overflow: auto;
        height: 100%;
      }
    `}updatePageContext(){const{theme:t}=this.props,e={theme:t,builderTheme:l.utils.getBuilderThemeVariables(),formatMessage:this.formatMessage};if(this.pageContext)for(const t in e)this.pageContext[t]!==e[t]&&(this.pageContext=this.pageContext.set(t,e[t]));else this.pageContext=Object(n.Immutable)(e)}render(){const{pageStatus:t}=this.props;return kn(t)?(this.updatePageContext(),Object(n.jsx)("div",{className:"page-renderer d-flex flex-column align-items-center w-100",ref:t=>this.pageRef=t,css:this.getPageStyle(),"data-testid":"pageRenderer",onClick:this.clearSelection},this.renderDialog(),this.renderHeader(),Object.keys(t).map(t=>this.renderPageBody(t)),this.renderFooter(),Object(n.jsx)(n.Keyboard,{bindings:this.keyBindings}))):null}renderHeader(){if(!this.props.header)return null;const{header:t,headerVisible:e,browserSizeMode:o,mainSizeMode:i,activePagePart:s}=this.props;return Object(n.jsx)($n,{header:t,activePagePart:s,headerVisible:e,browserSizeMode:o,mainSizeMode:i,pageContext:this.pageContext})}renderFooter(){if(!this.props.footer)return null;const{footer:t,footerVisible:e,browserSizeMode:o,mainSizeMode:i,activePagePart:s}=this.props;return Object(n.jsx)(Fn,{footer:t,activePagePart:s,footerVisible:e,browserSizeMode:o,mainSizeMode:i,pageContext:this.pageContext})}renderPageBody(t){const{pages:e,pageStatus:o,browserSizeMode:i,activePagePart:s}=this.props,a=e[t];if(a&&a.type===n.PageType.Normal)return Object(n.jsx)(Vn,{key:a.id,pageJson:a,renderedPageId:t,activePagePart:s,browserSizeMode:i,pageContext:this.pageContext,visible:!!o[a.id]})}isDialogViewOnly(t){const{browserSizeMode:e}=this.props;return!!(e!==n.BrowserSizeMode.Large&&!t.layout[e])}renderDialog(){const{currentDialogId:t,urlDialogJson:e,splashDialogJson:o,isSplashClosed:i,isPageDlgClosed:s,pageDialogJson:a,pageDialogId:r}=this.props,d=!i&&o,c=!s&&a,u=e?(null==o?void 0:o.id)===e.id||(null==a?void 0:a.id)===e.id?null:e:null;return Object(n.jsx)(n.React.Fragment,null,u&&Object(n.jsx)(l.PageContext.Provider,{value:Object.assign(Object.assign({},this.pageContext),{dialogId:t,isDialog:!0,viewOnly:this.isDialogViewOnly(e),rootLayoutId:zn(t)})},Object(n.jsx)(n.AppDialog,{dialogJson:e})),c&&Object(n.jsx)(l.PageContext.Provider,{value:Object.assign(Object.assign({},this.pageContext),{dialogId:r,isDialog:!0,viewOnly:this.isDialogViewOnly(a),rootLayoutId:zn(a.id)})},Object(n.jsx)(n.AppDialog,{dialogJson:a,isOpenByPage:!0})),d&&Object(n.jsx)(l.PageContext.Provider,{value:Object.assign(Object.assign({},this.pageContext),{dialogId:o.id,isDialog:!0,viewOnly:this.isDialogViewOnly(o),rootLayoutId:zn(o.id)})},Object(n.jsx)(n.AppDialog,{dialogJson:o})))}}Hn.displayName="BuilderPageRenderer";var Wn=Object(n.injectIntl)(n.ReactRedux.connect((t,e)=>{var o,i,s,a,r,l,d;const c=n.utils.findViewportSize(t.appConfig,t.browserSizeMode),u=kn(e.pageStatus);if(!u)return{};const p=t.appConfig.pages[t.appRuntimeInfo.currentPageId].autoOpenDialogId,h=t.appConfig.dialogs,g=h[Object.keys(h).find(t=>h[t].isSplash)];return{pages:t.appConfig.pages,header:t.appConfig.header,headerVisible:!!t.appConfig.pages[u].header,footer:t.appConfig.footer,footerVisible:!!t.appConfig.pages[u].footer,mainSizeMode:t.appConfig.mainSizeMode,browserSizeMode:t.browserSizeMode,theme:t.theme,minHeight:c.height,activePagePart:null!==(o=t.appRuntimeInfo.activePagePart)&&void 0!==o?o:n.PagePart.Body,clipboardItem:t.appRuntimeInfo.clipboard,dialogs:t.appConfig.dialogs,currentDialogId:t.appRuntimeInfo.currentDialogId,splashDialogJson:g,isSplashClosed:null===(a=null===(s=null===(i=t.appRuntimeInfo)||void 0===i?void 0:i.dialogInfos)||void 0===s?void 0:s[null==g?void 0:g.id])||void 0===a?void 0:a.isClosed,pageDialogId:p,pageDialogJson:h[p],isPageDlgClosed:null===(d=null===(l=null===(r=t.appRuntimeInfo)||void 0===r?void 0:r.dialogInfos)||void 0===l?void 0:l[t.appRuntimeInfo.currentPageId+"-"+p])||void 0===d?void 0:d.isClosed,urlDialogJson:h[e.dialogId]}})(Hn)),Gn=o(50),Un=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};function _n(t,e){var o,i,s,a;const r=e.layoutId,d=t.appRuntimeInfo.selection,c=e.layoutItem;let u=!1,p=!1,h=!1,g=!1;if(c&&(u=Boolean(d&&r===d.layoutId&&c.id===d.layoutItemId),c.type===n.LayoutItemType.Widget)){const e=t.appConfig.widgets[c.widgetId],n=null===(i=null===(o=null==e?void 0:e.manifest)||void 0===o?void 0:o.properties)||void 0===i?void 0:i.supportInlineEditing;if(h=null===(a=null===(s=null==e?void 0:e.manifest)||void 0===s?void 0:s.properties)||void 0===a?void 0:a.supportRepeat,n){const e=t.widgetsRuntimeInfo[c.widgetId];p=e&&e.isInlineEditing}g=l.utils.isWidgetHasEmbeddedLayout(c.widgetId,t.appConfig)}return{selected:u,supportRepeat:h,isInlineEditing:p,isLayoutWidget:g}}const Yn=()=>{};function Zn(t){return t=>{class e extends n.React.PureComponent{constructor(t){super(t),this.ref=n.React.createRef()}componentDidMount(){const{layoutId:t,layoutItemId:e,layoutItem:o,onResizeStart:i,onResizing:n,onResizeEnd:s,onDragStart:a,onDragging:r,onDragEnd:l,useDragHandler:c}=this.props;this.ref.current&&(this.interactable=Object(d.interact)(this.ref.current).origin("parent"),this.interactable=Y(this.interactable,{layoutId:t,layoutItemId:e,useDragHandler:c,onDragging:r,onDragStart:a,onDragEnd:l,itemType:o.type,rootLayoutId:()=>this.rootLayoutId,restrict:()=>this.props.restrict}),this.interactable=Q(this.interactable,{layoutItemId:e,onResizing:n,onResizeStart:i,onResizeEnd:s}))}componentWillUnMount(){this.interactable&&(this.interactable.unset(),this.interactable=null)}getStyle(t){return n.css`
          ${this.aspectRatioStyle()};

          &.dragging {
            opacity: 0.9;
          }

          display: flex;
          position: relative;
          touch-action: ${t?"auto":"none"};
          user-select: ${t?"auto":"none"};
        `}aspectRatioStyle(){const{aspectRatio:t,forceAspectRatio:e}=this.props;return e?n.css`
            & > div.rnd-aspect-ratio-wrapper {
              width: 100%;
              position: relative;
              padding-top: ${100*t}%;

              & > div {
                position: absolute !important;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
              }
            }
          `:n.css`
          & > .rnd-aspect-ratio-wrapper {
            width: 100%;
            height: 100%;
            display: flex;
          }
        `}render(){return Object(n.jsx)(l.PageContext.Consumer,null,e=>{this.rootLayoutId=e.rootLayoutId;const o=this.props,{gridSize:i,draggable:s,onResizeStart:a,onResizing:r,onResizeEnd:l,style:d,className:c,useDragHandler:u,children:p}=o,h=Un(o,["gridSize","draggable","onResizeStart","onResizing","onResizeEnd","style","className","useDragHandler","children"]),{isInlineEditing:g}=this.props,f=Object(n.classNames)("exb-rnd",c,{"functional-widget":!this.props.isLayoutWidget}),m="string"==typeof d?JSON.parse(d):Object.assign({},d);return this.props.forceAspectRatio&&(m.height="auto"),Object(n.jsx)("div",{className:f,ref:this.ref,css:this.getStyle(g),"data-layoutid":this.props.layoutId,"data-layoutitemid":this.props.layoutItemId,"data-repeatable":this.props.supportRepeat,style:m},Object(n.jsx)("div",{className:"rnd-aspect-ratio-wrapper"},Object(n.jsx)(t,Object.assign({layoutId:this.props.layoutId,className:"w-100",layoutItemId:this.props.layoutItemId},h))),p)})}}e.defaultProps={left:!0,top:!0,right:!0,bottom:!0,restrict:!1,onResizeStart:Yn,onResizing:Yn,onResizeEnd:Yn,onDragStart:Yn,onDragging:Yn,onDragEnd:Yn};const o=Gn(e,t);return n.ReactRedux.connect(_n)(o)}}const{createPageFromTemplate:Xn,createDialogFromTemplate:Jn,createSectionFromTemplate:qn,createWidgetFromTemplate:Qn}=s.templateUtils}]))}}}));