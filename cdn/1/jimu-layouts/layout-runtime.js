System.register(["jimu-core","jimu-ui","jimu-theme","jimu-core/dnd"],(function(e,t){var n={},o={},i={},a={};return{setters:[function(e){n.AnimationComponent=e.AnimationComponent,n.AnimationContext=e.AnimationContext,n.AnimationPlayMode=e.AnimationPlayMode,n.AnimationTriggerType=e.AnimationTriggerType,n.AnimationType=e.AnimationType,n.AppDialog=e.AppDialog,n.AppMode=e.AppMode,n.BrowserSizeMode=e.BrowserSizeMode,n.ContainerType=e.ContainerType,n.ErrorBoundary=e.ErrorBoundary,n.ExtensionManager=e.ExtensionManager,n.Immutable=e.Immutable,n.Keyboard=e.Keyboard,n.LayoutItemType=e.LayoutItemType,n.LayoutType=e.LayoutType,n.OneByOneAnimation=e.OneByOneAnimation,n.PageMode=e.PageMode,n.PagePart=e.PagePart,n.React=e.React,n.ReactRedux=e.ReactRedux,n.ReactResizeDetector=e.ReactResizeDetector,n.RootContainerType=e.RootContainerType,n.ScreenTransitionType=e.ScreenTransitionType,n.ScreenTriggerType=e.ScreenTriggerType,n.TransitionContainer=e.TransitionContainer,n.WidgetManager=e.WidgetManager,n.WidgetState=e.WidgetState,n.WidgetType=e.WidgetType,n.appActions=e.appActions,n.classNames=e.classNames,n.css=e.css,n.extensionSpec=e.extensionSpec,n.getAppStore=e.getAppStore,n.getIndexFromProgress=e.getIndexFromProgress,n.i18n=e.i18n,n.jimuHistory=e.jimuHistory,n.jsx=e.jsx,n.lodash=e.lodash,n.polished=e.polished,n.translatedLocales=e.translatedLocales},function(e){o.Button=e.Button,o.DistanceUnits=e.DistanceUnits,o.FOCUSABLE_CONTAINER_CLASS=e.FOCUSABLE_CONTAINER_CLASS,o.FillType=e.FillType,o.SVG=e.SVG,o.Tab=e.Tab,o.Tabs=e.Tabs,o.Tooltip=e.Tooltip,o.hooks=e.hooks,o.styleUtils=e.styleUtils},function(e){i.useTheme=e.useTheme,i.withTheme=e.withTheme},function(e){a.interact=e.interact}],execute:function(){e((()=>{var e={5467:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 12c-2.667 0-5.667-1.333-7-4 1.333-2.667 4.333-4 7-4s5.667 1.333 7 4c-1.333 2.667-4.333 4-7 4Zm0-7c-2.618 0-4.578.967-6 3 1.422 2.033 3.382 3 6 3s4.578-.967 6-3c-1.422-2.033-3.382-3-6-3Zm0 5.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Zm0-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" fill="#000"></path></svg>'},1407:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.347 2.146a.485.485 0 0 1 0 .708L5.76 8l5.587 5.146a.486.486 0 0 1 0 .708.538.538 0 0 1-.738 0l-5.956-5.5a.485.485 0 0 1 0-.708l5.956-5.5a.538.538 0 0 1 .738 0Z" fill="#000"></path></svg>'},3273:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.653 13.854a.485.485 0 0 1 0-.708L10.24 8 4.653 2.854a.485.485 0 0 1 0-.708.538.538 0 0 1 .738 0l5.956 5.5a.485.485 0 0 1 0 .708l-5.956 5.5a.538.538 0 0 1-.738 0Z" fill="#000"></path></svg>'},5339:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m8.745 8 6.1 6.1a.527.527 0 1 1-.745.746L8 8.746l-6.1 6.1a.527.527 0 1 1-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 0 1 .746-.746l6.1 6.1 6.1-6.1a.527.527 0 0 1 .746.746L8.746 8Z" fill="#000"></path></svg>'},8891:e=>{"use strict";e.exports=n},4020:e=>{"use strict";e.exports=a},4796:e=>{"use strict";e.exports=i},726:e=>{"use strict";e.exports=o}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var s={};return(()=>{"use strict";r.r(s),r.d(s,{CLICK_TOLRERANCE:()=>I,COLS_IN_ONE_ROW:()=>h,CONTEXT_MENU_ICON_SIZE:()=>v,CONTEXT_MENU_ITEM_SIZE:()=>f,ColumnLayoutViewer:()=>kt,DEFAULT_AUTOPLAY_INTERVAL:()=>w,FixedLayoutViewer:()=>$t,GridItemType:()=>b,GridLayoutViewer:()=>qt,LayoutContext:()=>c,LayoutEntry:()=>st,LayoutItem:()=>Tt,LayoutItemSizeModes:()=>S,LayoutZIndex:()=>x,MIN_LAYOUT_ITEM_SIZE:()=>m,OrderAdjustType:()=>p,PageContext:()=>a,PageRenderer:()=>En,PageVisibilityContext:()=>u,ParentType:()=>g,RowLayoutViewer:()=>Ft,SectionRenderer:()=>xt,ViewVisibilityContext:()=>d,ViewportVisibilityContext:()=>l,WidgetRenderer:()=>Qe,defaultMessages:()=>o,findLayoutBuilder:()=>it,findLayoutViewer:()=>at,init:()=>An,registerLayoutBuilder:()=>nt,registerLayoutViewer:()=>ot,searchUtils:()=>t,utils:()=>e});var e={};r.r(e),r.d(e,{autoBindHandlers:()=>R,calHeightOfLayoutItem:()=>U,contains:()=>te,emptyFunc:()=>C,expandStyleArray:()=>G,fromRatio:()=>k,gcd:()=>ae,getActivePagePart:()=>Z,getAppConfig:()=>_,getCurrentDialogId:()=>J,getCurrentDialogRootLayoutId:()=>q,getCurrentPageId:()=>Y,getCurrentPageRootLayoutId:()=>K,getCurrentSizeMode:()=>X,getFooterRootLayoutId:()=>ee,getHeaderRootLayoutId:()=>Q,getLayoutItemSizeMode:()=>ie,getMaximumId:()=>j,getValueOfBBox:()=>M,handleOnebyOneAnimation:()=>re,intersects:()=>ne,isFunctionalWidget:()=>N,isNumber:()=>P,isPercentage:()=>$,isRTL:()=>W,isWidgetHasEmbeddedLayout:()=>z,isWidgetPlaceholder:()=>B,mapStateToLayoutItemProps:()=>E,mapStateToLayoutProps:()=>L,mapStateToWidgetProps:()=>A,normalizeLinearUnit:()=>oe,parseAspectRatio:()=>H,relativeClientRect:()=>D,replaceBoundingBox:()=>F,toRatio:()=>O,updateBoundingBoxProp:()=>V});var t={};r.r(t),r.d(t,{buildLayoutStructure:()=>de,findLayoutId:()=>Oe,findLayoutItem:()=>pe,findParentLayoutItem:()=>ce,findParentScreenId:()=>he,findParentViewId:()=>ye,findSectionId:()=>ge,getBlockAnchorPointsInPage:()=>We,getBrowserSizeModeByLayoutId:()=>Ne,getBrowserSizeModeByLayoutIdAndWidgetId:()=>ze,getChildrenContents:()=>Ee,getContainerLayoutItem:()=>we,getContentContainerInfo:()=>Te,getContentIdInLayoutItem:()=>fe,getContentLayoutInfosInOneSizeMode:()=>Ae,getContentRootContainerInfo:()=>Ce,getContentsInLayout:()=>ve,getContentsInLayoutRecursive:()=>me,getContentsInLayoutWithLayoutWidgetOnly:()=>Ie,getContentsInPageBody:()=>Re,getContentsInPageFooter:()=>Me,getContentsInPageHeader:()=>Pe,getContentsInScreen:()=>je,getContentsInTheSameContainer:()=>De,getContentsInView:()=>$e,getLayoutInfosByType:()=>be,getLayoutInfosHoldcontent:()=>ke,getLayoutItemIds:()=>xe,getParentWidgetIdOfContent:()=>Le,getPendingLayoutItemsFromOtherSizeMode:()=>Ze,getPendingLayoutItemsFromOtherSizeModeInDialog:()=>Ye,getPendingLayoutItemsFromOtherSizeModeInPage:()=>_e,getPendingLayoutItemsInDialog:()=>Xe,getPendingLayoutItemsInLayoutWithDeep:()=>Je,getPendingLayoutItemsInPage:()=>Ue,getRelatedLayoutInfosInWidgetByLayoutInfo:()=>Be,getRelatedLayoutItemsInWidgetByLayoutInfo:()=>Fe,getScreenAnchorPointsInPage:()=>He,getSectionInfo:()=>Ge,getWidgetIdThatUseTheLayoutId:()=>Se});var n=r(8891);const o={previousView:"Previous view",nextView:"Next view",originTL:"Top left as origin",originTR:"Top right as origin",originBL:"Bottom left as origin",originBR:"Bottom right as origin",alignLeft:"Align left",alignRight:"Align right",alignTop:"Align top",alignCenter:"Align center",alignHCenter:"Horizontal center",alignVCenter:"Vertical center",alignBottom:"Align bottom",alignStretch:"Align stretch",sendBackward:"Send backward",bringForward:"Bring forward",sendToBack:"Send to back",bringToFront:"Bring to front",zoomoutFixed:"Zoom out fixed",order:"Order",moveToLeft:"Move to left",moveToRight:"Move to right",moveToTop:"Move to top",moveToBottom:"Move to bottom",addView:"New view",duplicateScreen:"Duplicate screen",deleteScreen:"Delete screen",applyToFirstPanel:"Apply to the first panel",deleteView:"Delete view",duplicateView:"Duplicate view",insertABlock:"Insert block",insertAScreenGroup:"Insert screen group",moveup:"Move up",movedown:"Move down",chooseTemplate:"Choose a {type} template",chooseHeaderTemplate:"Choose a header template",chooseFooterTemplate:"Choose a footer template",dropWidgetToAdd:"Or drag a widget here",snapToLeft:"Snap to left",snapToTop:"Snap to top",snapToBottom:"Snap to bottom",snapToRight:"Snap to right",fullWidth:"Full width",fullHeight:"Full height",fullSize:"Full size",restoreSize:"Restore size",pendingTip:"Move to the pending list",setting:"Settings",dragToMove:"Drag to move",lockLayout:"Lock position and size",unlockLayout:"Unlock position and size",editHeader:"Edit header",editFooter:"Edit footer",transform:"Transform",rotation:"Rotation",angle:"Angle",floating:"Pin",sinking:"Unpin",floatingArea:"Floating area",changeToAuto:"Change to auto",changeToCustom:"Change to custom",positionType:"Position type",sticky:"Sticky",fixed:"Fixed",flow:"Flow",stack:"Stack",fixedAtTop:"Floating at the top when scrolling",actNormal:"Act as normal widget",hideInDesignView:"Hide in design view",showInDesignView:"Show in design view"};function i(){return e=this,t=void 0,a=function*(){let e=(0,n.getAppStore)().getState().appContext.locale;return e=n.i18n.getLocaleToLoad(e,n.translatedLocales),e?yield n.i18n.loadLocaleMessages("jimu-layouts/lib/translations",e).then((e=>((0,n.getAppStore)().dispatch(n.appActions.i18nMessagesLoaded("jimu-layouts",e)),e))):Promise.resolve(o)},new((i=void 0)||(i=Promise))((function(n,o){function r(e){try{l(a.next(e))}catch(e){o(e)}}function s(e){try{l(a.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,s)}l((a=a.apply(e,t||[])).next())}));var e,t,i,a}const a=n.React.createContext({viewOnly:!0}),l=n.React.createContext(!0),u=n.React.createContext(!0),d=n.React.createContext({isInView:!1,isInCurrentView:!1}),c=(n.React.createContext(""),n.React.createContext({}));var p,g,y=r(726);!function(e){e[e.BringForward=0]="BringForward",e[e.SendBackward=1]="SendBackward",e[e.BringToFront=2]="BringToFront",e[e.SendToBack=3]="SendToBack"}(p||(p={})),function(e){e.Page="PAGE",e.Widget="WIDGET",e.View="VIEW",e.Screen="SCREEN"}(g||(g={}));const h=12,f=28,v=16,m=16,I=5,w=3;var x,b,S,T;!function(e){e.Auto="auto",e[e.Normal=0]="Normal",e[e.BoundaryDropArea=10]="BoundaryDropArea",e[e.DragMoveTip=20]="DragMoveTip",e[e.HandlerTools=30]="HandlerTools",e[e.DraggingItem=40]="DraggingItem"}(x||(x={})),function(e){e[e.Row=0]="Row",e[e.Column=1]="Column",e[e.Tab=2]="Tab",e[e.Plain=3]="Plain"}(b||(b={})),(T=S||(S={})).Auto="AUTO",T.Stretch="STRETCH",T.Custom="CUSTOM";const C=()=>{};function R(e,t){t.forEach((t=>{e[t]&&(e[t]=e[t].bind(e))}))}function j(e){let t=-1;return e.content&&Object.keys(e.content).forEach((e=>{const n=parseInt(e,10);n>t&&(t=n)})),t}function $(e){return/^-?\d*(\.\d+)?%$/.test(e)}function P(e){const t=parseFloat(e);return!isNaN(t)&&isFinite(t)}function M(e,t){return null==(null==e?void 0:e[t])?null:"string"==typeof e[t]?e[t]:P(e[t])?`${Math.round(parseFloat(e[t]))}px`:null}function O(e,t){return`${(100*e/t).toFixed(1)}%`}function k(e,t){return parseFloat(`${e}`)*t/100}function L(e,t){var n,o;const i=(null===(n=t.layouts)||void 0===n?void 0:n[e.browserSizeMode])||(null===(o=t.layouts)||void 0===o?void 0:o[e.appConfig.mainSizeMode]),{layouts:a}=e.appConfig;return a[i]?{mainSizeMode:e.appConfig.mainSizeMode,browserSizeMode:e.browserSizeMode,layout:a[i]}:{mainSizeMode:e.appConfig.mainSizeMode,browserSizeMode:e.browserSizeMode,layout:null}}function E(e,t){var o,i,a,r,s,l,u;const d=t.layoutId,{layouts:c,widgets:p}=e.appConfig,g=t.layoutItemId;if(!(null===(i=null===(o=null==c?void 0:c[d])||void 0===o?void 0:o.content)||void 0===i?void 0:i[g]))return{layoutItem:null,selected:!1};let y,h=!1;const f=c[d].content[g];let v=!1;f&&(v=Boolean(f.isPending));const m=null===(a=e.appRuntimeInfo)||void 0===a?void 0:a.selection;m&&(h=m.layoutId===t.layoutId&&m.layoutItemId===f.id,y=m.autoScroll);let I=!1;if(f.type===n.LayoutItemType.Widget&&f.widgetId){const e=p[f.widgetId];I=null!==(l=null===(s=null===(r=null==e?void 0:e.manifest)||void 0===r?void 0:r.properties)||void 0===s?void 0:s.watchViewportVisibility)&&void 0!==l&&l}const w={selected:h,watchViewportVisibility:I,layoutItem:v?null:f};h&&(w.autoScroll=y);const x=null===(u=e.appRuntimeInfo)||void 0===u?void 0:u.animationPreview;if(h&&(null==x?void 0:x.layoutInfo)){const{layoutId:e,layoutItemId:n}=x.layoutInfo;w.animationPreview=e===t.layoutId&&n===t.layoutItemId,w.playMode=w.animationPreview?x.playMode:null,w.previewId=w.animationPreview?x.id:null}return w}function A(e,t){var n,o,i,a,r,s,l,u,d;const c=t.layoutId,{layouts:p}=e.appConfig;if(!p[c])return null;const g=p[c],y=t.layoutItemId,h=g.content[y];let f,v,m,I=!1,w=!1,x=!1,b=!1,S=!1,T=!1,C=!1,R=!1;if(h&&h.widgetId){const t=e.appConfig.widgets[h.widgetId];f=t.style,I=null===(o=null===(n=t.manifest)||void 0===n?void 0:n.properties)||void 0===o?void 0:o.supportInlineEditing,b=null===(a=null===(i=t.manifest)||void 0===i?void 0:i.properties)||void 0===a?void 0:a.supportRepeat,C=null===(s=null===(r=t.manifest)||void 0===r?void 0:r.properties)||void 0===s?void 0:s.canCrossLayoutBoundary;const c=e.widgetsRuntimeInfo[h.widgetId];w=null!==(l=null==c?void 0:c.isClassLoaded)&&void 0!==l&&l,x=I&&(null==c?void 0:c.isInlineEditing),R=(null===(d=null===(u=t.manifest)||void 0===u?void 0:u.extensions)||void 0===d?void 0:d.length)>0,R&&(v=t),m=e.widgetsState[h.widgetId],S=N(h.widgetId,e.appConfig),T=z(h.widgetId,e.appConfig)}return{hasEmbeddedLayout:T,supportInlineEditing:I,supportRepeat:b,isClassLoaded:w,isInlineEditing:x,widgetStyle:f,canCrossLayoutBoundary:C,hasExtension:R,widgetJson:v,widgetId:h.widgetId,isFunctionalWidget:S,widgetState:m}}function z(e,t){var n,o,i,a;const r=null===(n=null==t?void 0:t.widgets)||void 0===n?void 0:n[e];return!!(null===(i=null===(o=null==r?void 0:r.manifest)||void 0===o?void 0:o.properties)||void 0===i?void 0:i.hasEmbeddedLayout)&&Object.keys(null!==(a=null==r?void 0:r.layouts)&&void 0!==a?a:{}).length>0}function N(e,t){var o,i;const a=null===(o=null==t?void 0:t.widgets)||void 0===o?void 0:o[e];return(null===(i=null==a?void 0:a.manifest)||void 0===i?void 0:i.widgetType)!==n.WidgetType.Layout}function B(e,t){var o,i;if(!t||t.itemType!==n.LayoutItemType.Widget)return!1;if(t.layoutInfo){const{layoutId:n,layoutItemId:a}=t.layoutInfo,r=null===(i=null===(o=e.layouts)||void 0===o?void 0:o[n].content)||void 0===i?void 0:i[a];if(r&&!r.widgetId)return!0}return!t.layoutInfo&&!t.uri}function F(e,t,o){if(!e)return(0,n.Immutable)({left:$(t.left)?t.left:`${Math.round(t.left)}px`,right:$(t.right)?t.right:`${Math.round(t.right)}px`,top:$(t.top)?t.top:`${Math.round(t.top)}px`,bottom:$(t.bottom)?t.bottom:`${Math.round(t.bottom)}px`,width:$(t.width)?t.width:`${Math.round(t.width)}px`,height:$(t.height)?t.height:`${Math.round(t.height)}px`});let i=e;return["left","right","top","bottom","width","height"].forEach((e=>{null!=i[e]?i=V(e,i,t[e],o):null!=t[e]&&(i=i.set(e,`${Math.round(t[e])}px`))})),i}function V(e,t,n,o){if(null==t[e]||"auto"===t[e])return t;let i=t;return i=$(t[e])?"left"===e||"right"===e||"width"===e?$(n)?t.set(e,n):t.set(e,`${(100*+n/o.width).toFixed(4)}%`):$(n)?t.set(e,n):t.set(e,`${(100*+n/o.height).toFixed(4)}%`):$(n)?"left"===e||"right"===e||"width"===e?t.set(e,Math.round(parseFloat(`${n}`)*o.width/100)):t.set(e,Math.round(parseFloat(`${n}`)*o.height/100)):isNaN(+n)?t.without(e):t.set(e,`${Math.round(+n)}px`),i}function D(e,t){return{left:e.left-t.left,top:e.top-t.top,right:e.right,bottom:e.bottom,width:e.width,height:e.height,id:null}}function W(){var e,t;return null!==(t=null===(e=(0,n.getAppStore)().getState().appContext)||void 0===e?void 0:e.isRTL)&&void 0!==t&&t}function H(e){let t=100,n=100;if("number"==typeof e)t=100,n=Math.round(100*e);else if("string"==typeof e){const o=e.split(":");t=parseInt(o[0],10),n=parseInt(o[1],10)}return n/t}function G(e){return e&&0!==e.length?1===e.length?[e[0],e[0],e[0],e[0]]:2===e.length?[e[0],e[1],e[0],e[1]]:3===e.length?[e[0],e[1],e[2],0]:[e[0],e[1],e[2],e[3]]:[0,0,0,0]}function U(e,t){var n,o,i,a;const r=null!==(n=t.setting)&&void 0!==n?n:{},s=ie("height",t.bbox,r.autoProps);if(s!==S.Custom)return{height:s===S.Stretch?e:null,setting:{autoProps:{height:s}}};let l;if("ratio"===r.heightMode)l={setting:{heightMode:"ratio",aspectRatio:null!==(o=r.aspectRatio)&&void 0!==o?o:1,autoProps:{height:S.Custom}}};else{let n=null!==(a=null===(i=t.bbox)||void 0===i?void 0:i.height)&&void 0!==a?a:e;n=$(n)?k(n,e):parseInt(n),l={height:n,setting:{heightMode:"fixed",autoProps:{height:S.Custom}}}}return l}function _(){var e;return window.jimuConfig.isBuilder?null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appConfig:(0,n.getAppStore)().getState().appConfig}function X(){var e;return window.jimuConfig.isBuilder?null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.browserSizeMode:(0,n.getAppStore)().getState().browserSizeMode}function Y(){var e,t,o;return window.jimuConfig.isBuilder?null===(t=null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appRuntimeInfo)||void 0===t?void 0:t.currentPageId:null===(o=(0,n.getAppStore)().getState().appRuntimeInfo)||void 0===o?void 0:o.currentPageId}function J(){var e,t,o;return window.jimuConfig.isBuilder?null===(t=null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appRuntimeInfo)||void 0===t?void 0:t.currentDialogId:null===(o=(0,n.getAppStore)().getState().appRuntimeInfo)||void 0===o?void 0:o.currentDialogId}function Z(){var e,t,o;return window.jimuConfig.isBuilder?null===(t=null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appRuntimeInfo)||void 0===t?void 0:t.activePagePart:null===(o=(0,n.getAppStore)().getState().appRuntimeInfo)||void 0===o?void 0:o.activePagePart}function q(){var e,t,o;const i=window.jimuConfig.isBuilder?null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appConfig:(0,n.getAppStore)().getState().appConfig,a=J(),r=X();return null===(o=null===(t=null==i?void 0:i.dialogs[a])||void 0===t?void 0:t.layout)||void 0===o?void 0:o[r]}function K(){var e,t,o;const i=window.jimuConfig.isBuilder?null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appConfig:(0,n.getAppStore)().getState().appConfig,a=Y(),r=X();return null===(o=null===(t=null==i?void 0:i.pages[a])||void 0===t?void 0:t.layout)||void 0===o?void 0:o[r]}function Q(){var e,t,o;const i=window.jimuConfig.isBuilder?null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appConfig:(0,n.getAppStore)().getState().appConfig,a=X();return null===(o=null===(t=null==i?void 0:i.header)||void 0===t?void 0:t.layout)||void 0===o?void 0:o[a]}function ee(){var e,t,o;const i=window.jimuConfig.isBuilder?null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appConfig:(0,n.getAppStore)().getState().appConfig,a=X();return null===(o=null===(t=null==i?void 0:i.footer)||void 0===t?void 0:t.layout)||void 0===o?void 0:o[a]}function te(e,t){return t.left>=e.left&&t.left+t.width<=e.left+e.width&&t.top>=e.top&&t.top+t.height<=e.top+e.height}function ne(e,t){return!(t.left>e.left+e.width||t.left+t.width<e.left||t.top>e.top+e.height||t.top+t.height<e.top)}function oe(e){var t,o,i,a;let r,s;if(null!=e&&"object"==typeof e)r=null!==(t=e.unit)&&void 0!==t?t:y.DistanceUnits.PIXEL,s=null!==(o=e.distance)&&void 0!==o?o:0;else{const t=n.polished.getValueAndUnit(e);r=null!==(i=null==t?void 0:t[1])&&void 0!==i?i:y.DistanceUnits.PIXEL,s=null!==(a=null==t?void 0:t[0])&&void 0!==a?a:0}return s=r===y.DistanceUnits.PERCENTAGE?Math.round(10*s)/10:Math.round(s),`${s}${r}`}function ie(e,t,n){const o=null==n?void 0:n[e],i="width"===e?"left":"top",a="width"===e?"right":"bottom";if(!o)return null!=t[e]?S.Custom:null!=t[i]&&null!=t[a]?S.Stretch:S.Auto;if(!0===o)return null!=t[i]&&null!=t[a]?S.Stretch:S.Auto;switch(o){case S.Auto:return S.Auto;case S.Stretch:return S.Stretch;default:return S.Custom}}function ae(e,t){let n=Math.max(e,t),o=Math.min(e,t);for(;0!==o;){const e=o;o=n%o,n=e}return n}function re(e){if(!e.animationStyle)return{};const{isPlaying:t,revert:n,enableScroll:o,animationStyle:i,playId:a}=e;return{isParentPlaying:t,isParentRevert:n,isParentEnableScroll:o,parentAnimationStyle:i,parentPlayId:a}}const se=n.lodash.assign({},{gridSize:1}),le=n.lodash.assign({},{order:0},{lockParent:!1,lockLayout:!1,autoProps:{}});function ue(e,t){const n=e.layouts[t];if(null!=n)switch(n.parentType){case g.Widget:return e.widgets[n.parent].parent;case g.View:{const t=e.views[n.parent].parent;return e.sections[t].parent}case g.Screen:{const t=e.screens[n.parent].parent;return e.screenGroups[t].parent}}return null}function de(e,t,o,i,a,r){var s;let l=null!=r?r:(0,n.Immutable)({});const u=e.layouts[t];return null!=u&&(l=l.setIn(["layouts",t],{id:t,parent:o,parentType:i}),Object.keys(null!==(s=u.content)&&void 0!==s?s:{}).forEach((o=>{const i=u.content[o];switch(i.type){case n.LayoutItemType.Widget:l=function(e,t,n,o,i){let a=i;const r=e.widgets[n];return null!=r&&(a=a.setIn(["widgets",n],{id:n,parent:o}),null!=r.layouts&&Object.keys(r.layouts).forEach((o=>{const i=r.layouts[o][t];a=de(e,i,n,g.Widget,t,a)}))),a}(e,a,i.widgetId,t,l);break;case n.LayoutItemType.Section:l=function(e,t,n,o,i){let a=i;const r=e.sections[n];return null!=r&&(a=a.setIn(["sections",n],{id:n,parent:o}),r.views.forEach((o=>{a=a.setIn(["views",o],{id:o,parent:n});const i=e.views[o].layout[t];a=de(e,i,o,g.View,t,a)}))),a}(e,a,i.sectionId,t,l);break;case n.LayoutItemType.ScreenGroup:l=function(e,t,n,o,i){let a=i;const r=e.screenGroups[n];return null!=r&&(a=a.setIn(["screenGroups",n],{id:n,parent:o}),r.screens.forEach((o=>{var i;a=a.setIn(["screens",o],{id:o,parent:n});const r=e.screens[o],s=r.main.layout[t];if(a=de(e,s,o,g.Screen,t,a),null!=(null===(i=r.panel)||void 0===i?void 0:i.layout)){const n=r.panel.layout[t];a=de(e,n,o,g.Screen,t,a)}}))),a}(e,a,i.screenGroupId,t,l)}}))),l}function ce(e,t,o,i){var a;const{layoutId:r}=e,s=de(t,o,"",g.Page,i),l=s.layouts[r];let u;if(l.parentType===g.Widget)u=l.parent;else if(l.parentType===g.View){const e=l.parent;u=s.views[e].parent}else if(l.parentType===g.Screen){const e=l.parent;u=s.screens[e].parent}const d=ue(s,r);if(null!=d){const e=t.layouts[d];return{layoutId:d,layoutItemId:Object.keys(null!==(a=e.content)&&void 0!==a?a:{}).find((t=>{const o=e.content[t];return o.type===n.LayoutItemType.Widget&&o.widgetId===u||o.type===n.LayoutItemType.Section&&o.sectionId===u||o.type===n.LayoutItemType.ScreenGroup&&o.screenGroupId===u}))}}return null}function pe(e,t){var n,o,i;if(!t)return null;const{layoutId:a,layoutItemId:r}=t;return null===(i=null===(o=null===(n=e.layouts)||void 0===n?void 0:n[a])||void 0===o?void 0:o.content)||void 0===i?void 0:i[r]}function ge(e,t){if(e.sections)for(const n in e.sections)if(e.sections[n].views.includes(t))return n;return null}function ye(e,t){let n=t.layouts[e];for(;null!=(null==n?void 0:n.parent);){if(n.parentType===g.View){const e=n.parent;return{viewId:e,sectionId:t.views[e].parent}}const e=ue(t,n.id);n=t.layouts[e]}return{viewId:null,sectionId:null}}function he(e,t){let n=t.layouts[e];for(;null!=(null==n?void 0:n.parent);){if(n.parentType===g.Screen){const e=n.parent;return{screenId:e,screenGroupId:t.screens[e].parent}}const e=ue(t,n.id);n=t.layouts[e]}return{screenId:null,screenGroupId:null}}function fe(e){switch(e.type){case n.LayoutItemType.Widget:return"string"==typeof e.widgetId?e.widgetId:null;case n.LayoutItemType.Section:return"string"==typeof e.sectionId?e.sectionId:null;case n.LayoutItemType.ScreenGroup:return"string"==typeof e.screenGroupId?e.screenGroupId:null;default:return null}}function ve(e,t,n=!1){return(null==e?void 0:e.content)?Object.keys(e.content).filter((o=>e.content[o].type===t&&!!fe(e.content[o])&&(n||!e.content[o].isPending))).map((t=>fe(e.content[t]))):[]}function me(e,t,o,i,a=!1){let r=[];const s=ve(e.layouts[t],n.LayoutItemType.Widget,a),l=ve(e.layouts[t],n.LayoutItemType.Section,a),u=ve(e.layouts[t],n.LayoutItemType.ScreenGroup,a);return o===n.LayoutItemType.Widget?r=r.concat(s):o===n.LayoutItemType.Section?r=r.concat(l):o===n.LayoutItemType.ScreenGroup&&(r=r.concat(u)),s.filter((t=>{var o,i,a,r,s;return(null===(i=null===(o=e.widgets[t])||void 0===o?void 0:o.manifest)||void 0===i?void 0:i.widgetType)===n.WidgetType.Layout||(null===(s=null===(r=null===(a=e.widgets[t])||void 0===a?void 0:a.manifest)||void 0===r?void 0:r.properties)||void 0===s?void 0:s.hasEmbeddedLayout)})).forEach((t=>{var n;Object.keys(null!==(n=e.widgets[t].layouts)&&void 0!==n?n:{}).forEach((n=>{const s=e.widgets[t].layouts[n][i];r=r.concat(me(e,s,o,i,a))}))})),l.forEach((t=>{var n,s;null===(s=null===(n=e.sections)||void 0===n?void 0:n[t])||void 0===s||s.views.forEach((t=>{e.views[t]&&e.views[t].layout[i]&&(r=r.concat(me(e,e.views[t].layout[i],o,i,a)))}))})),u.forEach((t=>{var n,s;null===(s=null===(n=e.screenGroups)||void 0===n?void 0:n[t])||void 0===s||s.screens.forEach((t=>{var n,s,l,u,d,c,p;(null===(l=null===(s=null===(n=e.screens)||void 0===n?void 0:n[t])||void 0===s?void 0:s.main.layout)||void 0===l?void 0:l[i])&&(r=r.concat(me(e,e.screens[t].main.layout[i],o,i,a))),(null===(p=null===(c=null===(d=null===(u=e.screens)||void 0===u?void 0:u[t])||void 0===d?void 0:d.panel)||void 0===c?void 0:c.layout)||void 0===p?void 0:p[i])&&(r=r.concat(me(e,e.screens[t].panel.layout[i],o,i,a)))}))})),r}function Ie(e,t,o,i,a=!1){let r=[];const s=ve(e.layouts[t],n.LayoutItemType.Widget,a),l=ve(e.layouts[t],n.LayoutItemType.Section,a),u=ve(e.layouts[t],n.LayoutItemType.ScreenGroup,a);return r=o===n.LayoutItemType.Widget?r.concat(s):o===n.LayoutItemType.ScreenGroup?r.concat(u):r.concat(l),s.filter((t=>e.widgets&&e.widgets[t]&&e.widgets[t].manifest.widgetType===n.WidgetType.Layout)).forEach((t=>{Object.keys(e.widgets[t].layouts).forEach((n=>{const s=Oe(e.widgets[t].layouts[n],i,e.mainSizeMode);r=r.concat(Ie(e,s,o,i,a))}))})),r}function we(e,t,n){if(!(null==e?void 0:e.content))return null;const o=Object.keys(e.content).find((o=>e.content[o].type===n&&(e.content[o].widgetId===t||e.content[o].sectionId===t||e.content[o].screenGroupId===t)&&!e.content[o].isPending));return e.content[o]}function xe(e,t,n=!1){const o=e.layouts[t];return(null==o?void 0:o.content)?n?Object.keys(o.content):Object.keys(o.content).filter((e=>!o.content[e].isPending)):[]}function be(e,t,n=!1){return(null==e?void 0:e.content)?Object.keys(e.content).filter((o=>e.content[o].type===t&&!!fe(e.content[o])&&(n||!e.content[o].isPending))).map((t=>({layoutId:e.id,layoutItemId:t}))):[]}function Se(e,t){return Object.keys(e.widgets).find((n=>{const o=e.widgets[n];if(o.layouts)return Object.keys(o.layouts).some((e=>void 0!==Object.keys(o.layouts[e]).find((n=>o.layouts[e][n]===t))))}))}function Te(e,t,o,i){const a=e.pages&&Object.keys(e.pages).find((n=>{const a=Oe(e.pages[n].layout,i,e.mainSizeMode);return Ie(e,a,o,i).includes(t)}));if(a)return{type:n.ContainerType.Page,id:a};const r=e.dialogs&&Object.keys(e.dialogs).find((n=>{const a=Oe(e.dialogs[n].layout,i,e.mainSizeMode);return Ie(e,a,o,i).includes(t)}));if(r)return{type:n.ContainerType.Dialog,id:r};if(e.header){const a=Oe(e.header.layout,i,e.mainSizeMode);if(Ie(e,a,o,i).includes(t))return{type:n.ContainerType.Header,id:"header"}}if(e.footer){const a=Oe(e.footer.layout,i,e.mainSizeMode);if(Ie(e,a,o,i).includes(t))return{type:n.ContainerType.Footer,id:"footer"}}const s=e.views&&Object.keys(e.views).find((n=>{const a=Oe(e.views[n].layout,i,e.mainSizeMode);return Ie(e,a,o,i).includes(t)}));if(s)return{type:n.ContainerType.View,id:s};if(e.screens){const a=Object.keys(e.screens).find((n=>{const a=Oe(e.screens[n].main.layout,i,e.mainSizeMode);return Ie(e,a,o,i).includes(t)}));if(a)return{type:n.ContainerType.ScreenMain,id:a};const r=Object.keys(e.screens).find((n=>{var a;const r=Oe(null===(a=e.screens[n].panel)||void 0===a?void 0:a.layout,i,e.mainSizeMode);return Ie(e,r,o,i).includes(t)}));if(r)return{type:n.ContainerType.ScreenPanel,id:r}}if(e.widgets){const n=Object.keys(e.widgets).find((n=>{const a=e.widgets[n];return!!a.layouts&&Object.keys(a.layouts).find((n=>{const r=Oe(a.layouts[n],i,e.mainSizeMode);return Ie(e,r,o,i).includes(t)}))}));if(n)return Te(e,n,o,i)}}function Ce(e,t,o,i){const a=e.pages&&Object.keys(e.pages).find((n=>{const a=Oe(e.pages[n].layout,i,e.mainSizeMode);return me(e,a,o,i).includes(t)}));if(a)return{type:n.RootContainerType.Page,id:a};const r=e.dialogs&&Object.keys(e.dialogs).find((n=>{const a=Oe(e.dialogs[n].layout,i,e.mainSizeMode);return me(e,a,o,i).includes(t)}));if(r)return{type:n.RootContainerType.Dialog,id:r};if(e.header){const a=Oe(e.header.layout,i,e.mainSizeMode);if(me(e,a,o,i).includes(t))return{type:n.RootContainerType.Header,id:"header"}}if(e.footer){const a=Oe(e.footer.layout,i,e.mainSizeMode);if(me(e,a,o,i).includes(t))return{type:n.RootContainerType.Footer,id:"footer"}}}function Re(e,t,n,o){return Ie(e,Oe(e.pages[t].layout,o,e.mainSizeMode),n,o)}function je(e,t,n,o){var i;const a=Ie(e,Oe(e.screens[t].main.layout,o,e.mainSizeMode),n,o);if(e.screens[t].panel){const r=Ie(e,Oe(null===(i=e.screens[t].panel)||void 0===i?void 0:i.layout,o,e.mainSizeMode),n,o);return a.concat(r)}return a}function $e(e,t,n,o){var i;return Ie(e,Oe(null===(i=e.views[t])||void 0===i?void 0:i.layout,o,e.mainSizeMode),n,o)}function Pe(e,t,n){return Ie(e,Oe(e.header.layout,n,e.mainSizeMode),t,n)}function Me(e,t,n){return Ie(e,Oe(e.footer.layout,n,e.mainSizeMode),t,n)}function Oe(e,t,n){return e?e[t]||e[n]:null}function ke(e,t,o,i){if(i){const a=Le(e,o,t,i);if(a)return Ve(e,o,t,a,i);{const a=Te(e,o,t,i);if(!a)return[];const r=function(e,t,o){var i;return t.type===n.ContainerType.Footer?e.footer.layout[o]:t.type===n.ContainerType.Header?e.header.layout[o]:t.type===n.ContainerType.ScreenMain?e.screens[t.id].main.layout[o]:t.type===n.ContainerType.ScreenPanel?null===(i=e.screens[t.id].panel)||void 0===i?void 0:i.layout[o]:e[t.type][t.id].layout[o]}(e,a,i);return[{layoutId:r,layoutItemId:we(e.layouts[r],o,t).id}]}}{const n=[];return Object.keys(e.layouts).forEach((i=>{xe(e,i,!0).forEach((a=>{const r=e.layouts[i].content[a];t!==r.type||r.widgetId!==o&&r.sectionId!==o&&r.screenGroupId!==o||n.push({layoutId:i,layoutItemId:a})}))})),n}}function Le(e,t,n,o){return Object.keys(e.widgets).find((i=>{const a=e.widgets[i];if(a.layouts)return Object.keys(a.layouts).some((i=>{const r=a.layouts[i][o],s=e.layouts[r];return s&&s.content&&void 0!==Object.keys(s.content).find((e=>s.content[e].type===n&&(s.content[e].widgetId===t||s.content[e].sectionId===t)))}))}))}function Ee(e,t,n,o){const i=e.widgets[t];if(!i.layouts)return[];let a=[];return Object.keys(i.layouts).forEach((t=>{Object.keys(i.layouts[t]).forEach((r=>{const s=e.layouts[i.layouts[t][r]];a=a.concat(ve(s,n,o))}))})),Array.from(new Set(a))}function Ae(e,t,n,o){const i=[];let a=!1;const r=(e,t,n,r)=>{const s=Oe(n,o,void 0),l=we(e.layouts[s],t,r);let u;return l&&(u={layoutId:s,layoutItemId:l.id},i.push(u),a=!0),u};return e.pages&&Object.keys(e.pages).find((o=>{const i=e.pages[o];return!(!i.layout||!r(e,t,i.layout,n))})),a||(e.views&&Object.keys(e.views).find((o=>{const i=e.views[o];return!!r(e,t,i.layout,n)})),a||(e.dialogs&&Object.keys(e.dialogs).find((o=>{const i=e.dialogs[o];return!!r(e,t,i.layout,n)})),a||(e.header&&r(e,t,e.header.layout,n),a||(e.footer&&r(e,t,e.footer.layout,n),a||e.widgets&&Object.keys(e.widgets).find((o=>{const i=e.widgets[o];return i.layouts&&Object.keys(i.layouts).forEach((o=>{r(e,t,i.layouts[o],n)})),!!a})))))),i}function ze(e,t,n){const o=e.widgets[n];if(!o)return;let i;return Object.keys(o.layouts).find((e=>{if(Object.keys(o.layouts[e]).find((n=>{if(o.layouts[e][n]===t)return i=n,!0})))return!0})),i}function Ne(e,t){var n,o;let i=null;const a=e=>e?Object.keys(e).find((n=>e[n]===t)):null;return Object.keys(e.widgets||{}).some((t=>Object.keys(e.widgets[t].layouts||{}).some((n=>{if(i)return!0;i=a(e.widgets[t].layouts[n])})))),i||(Object.keys(e.views||{}).some((t=>{if(i)return!0;i=a(e.views[t].layout)})),i||(Object.keys(e.pages||{}).some((t=>{if(i)return!0;i=a(e.pages[t].layout)})),i||(Object.keys(e.dialogs||{}).some((t=>{if(i)return!0;i=a(e.dialogs[t].layout)})),i||(Object.keys(e.screens||{}).some((t=>{var n,o;return!!i||(i=a(null===(n=e.screens[t].main)||void 0===n?void 0:n.layout),!!i||void(i=a(null===(o=e.screens[t].panel)||void 0===o?void 0:o.layout)))})),i||(i=a(null===(n=e.header)||void 0===n?void 0:n.layout),i||(i=a(null===(o=e.footer)||void 0===o?void 0:o.layout),i||null))))))}function Be(e,t,o,i){if(!e.widgets[o])return[];const a=e.layouts[t.layoutId]&&e.layouts[t.layoutId].content&&e.layouts[t.layoutId].content[t.layoutItemId];if(!a)return[];const r=a.type;let s;return r===n.LayoutItemType.Section?s=a.sectionId:r===n.LayoutItemType.Widget&&(s=a.widgetId),s?Ve(e,s,r,o,i):function(e,t,n){const o=e.widgets[t];if(!o)return!1;let i=!1;return o.layouts&&Object.keys(o.layouts).forEach((t=>{i||Object.keys(o.layouts[t]).forEach((a=>{if(i)return;const r=o.layouts[t][a];xe(e,r,!0).forEach((e=>{i||n.layoutId===r&&n.layoutItemId===e&&(i=!0)}))}))})),i}(e,o,t)?[t]:[]}function Fe(e,t,n,o){return Be(e,t,n,o).map((t=>e.layouts[t.layoutId][t.layoutItemId]))}function Ve(e,t,o,i,a){const r=e.widgets[i];if(!r||!t)return[];const s=[];return r.layouts&&Object.keys(r.layouts).forEach((i=>{const l=r.layouts[i][a],u=e.layouts[l];u&&u.content&&Object.keys(u.content).forEach((i=>{const r=u.content[i];if(r.type!==o||r.widgetId!==t&&r.sectionId!==t&&r.screenGroupId!==t){if(r.type===n.LayoutItemType.Widget){const i=e.widgets[r.widgetId];i&&i.manifest.widgetType===n.WidgetType.Layout&&s.push(...Ve(e,t,o,i.id,a))}}else s.push({layoutId:u.id,layoutItemId:r.id})}))})),s}function De(e,t,o,i,a){const r=Te(e,t,o,a);if(!r)return[];switch(r.type){case n.ContainerType.Page:return Re(e,r.id,i,a);case n.ContainerType.Header:return Pe(e,i,a);case n.ContainerType.Footer:return Me(e,i,a);case n.ContainerType.View:return $e(e,r.id,i,a);case n.ContainerType.Dialog:return function(e,t,n,o){return Ie(e,Oe(e.dialogs[t].layout,o,e.mainSizeMode),n,o)}(e,r.id,i,a);case n.ContainerType.ScreenMain:case n.ContainerType.ScreenPanel:return je(e,r.id,i,a)}}function We(e,t,o){var i,a;const r=e.pages[t],s=null===(i=null==r?void 0:r.layout)||void 0===i?void 0:i[o],l=e.layouts[s],u=[];return(null==l?void 0:l.type)===n.LayoutType.FlowLayout&&Object.keys(null!==(a=l.content)&&void 0!==a?a:{}).sort().forEach((t=>{var o;const i=l.content[t];if(!i.isPending&&!(null===(o=i.setting)||void 0===o?void 0:o.isFloating)&&i.type===n.LayoutItemType.Widget){const n=function(e,t){const{layoutId:n,layoutItemId:o}=t,i=e.layouts[n].content[o],a=e.widgets[i.widgetId];return a?{label:a.label,id:`${n}_block_${o}`}:null}(e,{layoutId:s,layoutItemId:t});n&&u.push(n)}})),u}function He(e,t,o){var i,a;const r=e.pages[t],s=null===(i=null==r?void 0:r.layout)||void 0===i?void 0:i[o],l=e.layouts[s],u=[];return(null==l?void 0:l.type)===n.LayoutType.FlowLayout&&Object.keys(null!==(a=l.content)&&void 0!==a?a:{}).sort().forEach((t=>{var o;const i=l.content[t];if(!i.isPending&&!(null===(o=i.setting)||void 0===o?void 0:o.isFloating)&&i.type===n.LayoutItemType.ScreenGroup){const t=e.screenGroups[i.screenGroupId],n=[];null==t||t.screens.forEach((t=>{const o=function(e,t,n){const o=e.screens[n];return o?{label:o.label,id:`${t}_screen_${n}`}:null}(e,s,t);o&&n.push(o)})),u.push({id:t.id,label:t.label,screens:n})}})),u}function Ge(e,t){var n;const o=e.appConfig.sections[t];if(!o||!o.views)return null;const i=null===(n=e.appRuntimeInfo.sectionNavInfos)||void 0===n?void 0:n[o.id];let a;if(!i){const t=o.views[0];a=e.appConfig.views[t]}return{sectionId:t,navInfo:i,activeView:a,views:o.views,sectionStyle:o.style,transition:o.transition,autoPlay:o.autoPlay,interval:o.interval,loop:o.loop,focusable:o.focusable}}function Ue(e,t,o,i){const a=e.pages[t];return a?i===n.PagePart.Header?a.header&&e.header?Je(e,e.header.layout[o],o):[]:i===n.PagePart.Footer?a.footer&&e.footer?Je(e,e.footer.layout[o],o):[]:i===n.PagePart.Body?Je(e,a.layout[o],o):[]:[]}function _e(e,t,o,i){const a=e.pages[t];return a?i===n.PagePart.Header?a.header&&e.header?Ze(e,e.header.layout,o):[]:i===n.PagePart.Footer?a.footer&&e.footer?Ze(e,e.footer.layout,o):[]:i===n.PagePart.Body?Ze(e,a.layout,o):[]:[]}function Xe(e,t,n){const o=e.dialogs[t];return o?Je(e,o.layout[n],n):[]}function Ye(e,t,n){const o=e.dialogs[t];return o?Ze(e,o.layout,n):[]}function Je(e,t,o){let i=[];return be(e.layouts[t],n.LayoutItemType.Widget,!0).forEach((t=>{const n=e.layouts[t.layoutId].content[t.layoutItemId];n.isPending?i.push(t):e.widgets[n.widgetId].layouts&&Object.keys(e.widgets[n.widgetId].layouts).forEach((t=>{i=i.concat(Je(e,e.widgets[n.widgetId].layouts[t][o],o))}))})),be(e.layouts[t],n.LayoutItemType.Section,!0).forEach((t=>{const n=e.layouts[t.layoutId].content[t.layoutItemId];n.isPending?i.push(t):e.sections[n.sectionId].views&&e.sections[n.sectionId].views.forEach((t=>{i=i.concat(Je(e,e.views[t].layout[o],o))}))})),be(e.layouts[t],n.LayoutItemType.ScreenGroup,!0).forEach((t=>{var n,a;const r=e.layouts[t.layoutId].content[t.layoutItemId];if(r.isPending)i.push(t);else{const t=r.screenGroupId;null===(a=null===(n=e.screenGroups)||void 0===n?void 0:n[t].screens)||void 0===a||a.forEach((t=>{const n=null==e?void 0:e.screens[t];n.main&&(i=i.concat(Je(e,n.main.layout[o],o))),n.panel&&(i=i.concat(Je(e,n.panel.layout[o],o)))}))}})),i}function Ze(e,t,o,i=null,a=null,r=null){const s=[];return i||(i=me(e,t[o],n.LayoutItemType.Widget,o,!0)),a||(a=me(e,t[o],n.LayoutItemType.Section,o,!0)),r||(r=me(e,t[o],n.LayoutItemType.ScreenGroup,o,!0)),Object.keys(n.BrowserSizeMode).filter((e=>n.BrowserSizeMode[e]!==o)).map((e=>n.BrowserSizeMode[e])).forEach((l=>{be(e.layouts[t[l]],n.LayoutItemType.Widget,!0).forEach((t=>{const l=e.layouts[t.layoutId].content[t.layoutItemId];e.widgets[l.widgetId].manifest.widgetType!==n.WidgetType.Layout&&i.indexOf(l.widgetId)<0?!qe(e,s,t)&&s.push(t):e.widgets[l.widgetId].layouts&&Object.keys(e.widgets[l.widgetId].layouts).forEach((t=>{Ze(e,e.widgets[l.widgetId].layouts[t],o,i,a,r).forEach((t=>{!qe(e,s,t)&&s.push(t)}))}))})),be(e.layouts[t[l]],n.LayoutItemType.Section,!0).forEach((t=>{const n=e.layouts[t.layoutId].content[t.layoutItemId];a.indexOf(n.sectionId)<0?!qe(e,s,t)&&s.push(t):e.sections[n.sectionId].views&&e.sections[n.sectionId].views.forEach((t=>{Ze(e,e.views[t].layout,o,i,a,r).forEach((t=>{!qe(e,s,t)&&s.push(t)}))}))})),be(e.layouts[t[l]],n.LayoutItemType.ScreenGroup,!0).forEach((t=>{var n,l;const u=e.layouts[t.layoutId].content[t.layoutItemId];r.indexOf(u.screenGroupId)<0?!qe(e,s,t)&&s.push(t):(null===(l=null===(n=e.screenGroups)||void 0===n?void 0:n[u.screenGroupId])||void 0===l?void 0:l.screens)&&e.screenGroups[u.screenGroupId].screens.forEach((t=>{var n;const l=null===(n=e.screens)||void 0===n?void 0:n[t];(null==l?void 0:l.main)&&Ze(e,l.main.layout,o,i,a,r).forEach((t=>{!qe(e,s,t)&&s.push(t)})),(null==l?void 0:l.panel)&&Ze(e,l.panel.layout,o,i,a,r).forEach((t=>{!qe(e,s,t)&&s.push(t)}))}))}))})),s}function qe(e,t,o){const i=e.layouts[o.layoutId].content[o.layoutItemId];return!!t.find((t=>{const o=e.layouts[t.layoutId].content[t.layoutItemId];return o.type===i.type&&(o.type===n.LayoutItemType.Widget&&o.widgetId===i.widgetId||o.type===n.LayoutItemType.Section&&o.sectionId===i.sectionId)}))}class Ke extends n.React.PureComponent{constructor(e){super(e),this.onMouseDown=this.onMouseDown.bind(this),this.ref=n.React.createRef(),this.state={error:null}}loadWidgetClass(){const{widgetId:e,isClassLoaded:t}=this.props;e&&!t&&n.WidgetManager.getInstance().loadWidgetClass(e).catch((e=>{console.log(e),this.setState({error:n.i18n.getIntl().formatMessage({id:"widgetLoadError"})})}))}componentDidMount(){this.loadWidgetClass()}componentDidUpdate(){this.loadWidgetClass()}renderWidgetContent(){const{widgetId:e,layoutId:t,layoutItemId:o,onInitResizeHandler:i,onInitDragHandler:a}=this.props;let r;return e&&(r=n.WidgetManager.getInstance().getWidgetClass(e)),this.state.error?(0,n.jsx)("div",{className:"widget-content"},this.state.error):(0,n.jsx)("div",{className:"widget-content"},r&&(0,n.jsx)(n.ErrorBoundary,null,(0,n.jsx)(r,{widgetId:e,layoutId:t,layoutItemId:o,onInitResizeHandler:i,onInitDragHandler:a})))}getStyle(){const e=n.css`
      -webkit-overflow-scrolling: touch;
    `;return n.css`
      ${"app-loader"===this.props.widgetId?e:""};
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
    `}onMouseDown(e){var t;(null===(t=(0,n.getAppStore)().getState().widgetsRuntimeInfo[this.props.widgetId])||void 0===t?void 0:t.state)!==n.WidgetState.Active&&(0,n.getAppStore)().dispatch(n.appActions.activateWidget(this.props.widgetId))}render(){var e;const{className:t,widgetStyle:o,widgetId:i,forceAspectRatio:a,aspectRatio:r,rotate:s}=this.props,l=y.styleUtils.toCSSStyle(o),{transform:u}=l,d=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(n[o[i]]=e[o[i]])}return n}(l,["transform"]),c=s>0||s<0?`rotateZ(${s}deg)`:"";let p=c;return u&&(p=`${u} ${c}`),(0,n.jsx)("div",{className:(0,n.classNames)(`widget-renderer layout-item-content w-100 ${null===(e=null==o?void 0:o.boxShadow)||void 0===e?void 0:e.presetStyle}`,t,{"aspect-ratio-wrapper":a&&r>0}),css:this.getStyle(),style:Object.assign(Object.assign({},d),{transform:p}),onMouseDownCapture:this.onMouseDown,"data-widgetid":i,ref:this.ref},this.renderWidgetContent(),this.props.children)}}const Qe=n.ReactRedux.connect(A)(Ke),et={},tt={};function nt(e,t){et[e]=t}function ot(e,t){tt[e]=t}function it(e){return et[e]}function at(e){return tt[e]}class rt extends n.React.PureComponent{render(){const{layout:e}=this.props;if(!e)return null;const t=at(e.type||n.LayoutType.FlowLayout);return t?n.React.createElement(t,Object.assign({},this.props)):null}}const st=n.ReactRedux.connect(L)(rt);var lt=r(4796);function ut(e,t){if(!e)return null;let n={};e.backgroundIMage&&(n="string"==typeof e.backgroundIMage?{}:e.backgroundIMage);const o=e.backgroundPosition?y.FillType[e.backgroundPosition.toUpperCase()]:y.FillType.FILL;let i;i=null==e.backgroundColor?t:""===e.backgroundColor?"transparent":e.backgroundColor?e.backgroundColor:"";const a={color:i,fillType:o,image:n};return y.styleUtils.toBackgroundStyle(a)}function dt(e){var t,o;const{viewId:i,isActive:a,layoutEntryComponent:r,viewVisibilityContext:s}=e,l=n.ReactRedux.useSelector((e=>{var t,n;return null===(n=null===(t=e.appConfig)||void 0===t?void 0:t.views)||void 0===n?void 0:n[i]})),u=null===(o=null===(t=(0,lt.useTheme)())||void 0===t?void 0:t.body)||void 0===o?void 0:o.bg,d=r,c=s,[p,g]=n.React.useState(!1),h=n.React.useMemo((()=>({isInView:!0,isInCurrentView:a})),[a]);return n.React.useEffect((()=>{a&&l.lazyLoad&&!p&&g(!0)}),[a,l.lazyLoad,p]),(0,n.jsx)("div",{className:(0,n.classNames)("w-100 h-100 d-flex section-view",{[y.FOCUSABLE_CONTAINER_CLASS]:a}),style:ut(l,u),key:i},(p||!l.lazyLoad)&&(0,n.jsx)(n.ErrorBoundary,null,(0,n.jsx)(c.Provider,{value:h},(0,n.jsx)(d,{layouts:null==l?void 0:l.layout,isInSection:!0,className:"w-100"}))))}function ct(e){var t,o;const{views:i,navInfo:a,animationPreview:r,playMode:s,currentIndex:l,previousIndex:u,progress:d,loop:c,viewTransition:p}=e,g=r&&s===n.AnimationPlayMode.OneByOne,{setting:y,playId:h,onAnimationEnd:f,depth:v}=n.React.useContext(n.AnimationContext),m=n.ReactRedux.useSelector((e=>{var t;return!y||y.type===n.AnimationType.None||(null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.appMode)===n.AppMode.Design})),I=!m||g||(null==a?void 0:a.playId)&&(null==a?void 0:a.withOneByOne)?y:null,w=n.React.useMemo((()=>({trigger:n.AnimationTriggerType.Manual,setting:I,playId:!m||g?h:null,inheritedOneByOneSetting:null,depth:v+1,onAnimationEnd:f})),[m,I,g,h,v,f]);return(0,n.jsx)(n.AnimationContext.Provider,{value:w},(0,n.jsx)("div",{className:"section-content"},(0,n.jsx)(n.TransitionContainer,{useProgress:null!==(t=null==a?void 0:a.useProgress)&&void 0!==t&&t,useStep:null!==(o=null==a?void 0:a.useStep)&&void 0!==o&&o,previousIndex:u,currentIndex:l,progress:d,transitionType:null==p?void 0:p.type,direction:null==p?void 0:p.direction,playId:null==a?void 0:a.playId,withOneByOne:null==a?void 0:a.withOneByOne,loop:c},i.map((t=>{const o=t===i[l];return(0,n.jsx)(dt,{key:t,viewId:t,isActive:o,layoutEntryComponent:e.layoutEntryComponent,viewVisibilityContext:e.viewVisibilityContext})})))))}var pt=r(1407),gt=r.n(pt);const yt=e=>{const{className:t}=e,o=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(n[o[i]]=e[o[i]])}return n}(e,["className"]),i=(0,n.classNames)("jimu-icon jimu-icon-component",t);return n.React.createElement(y.SVG,Object.assign({className:i,src:gt()},o))};var ht=r(3273),ft=r.n(ht);const vt=e=>{const{className:t}=e,o=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(n[o[i]]=e[o[i]])}return n}(e,["className"]),i=(0,n.classNames)("jimu-icon jimu-icon-component",t);return n.React.createElement(y.SVG,Object.assign({className:i,src:ft()},o))};function mt(e){var t,o,i;const{sectionId:a,currentIndex:r,numOfViews:s,onCurrentViewChange:l}=e,u=n.ReactRedux.useSelector((e=>{var t;return null===(t=e.appConfig.sections[a])||void 0===t?void 0:t.arrowsNav})),d=n.ReactRedux.useSelector((e=>{var t;return null===(t=e.appConfig.sections[a])||void 0===t?void 0:t.dotsNav})),c=null!==(t=null==d?void 0:d.position)&&void 0!==t?t:"b",p=n.React.useMemo((()=>{const e=[];for(let t=0;t<s;t++)e.push(t);return e}),[s]),g=()=>{var e,t,o,i;return n.css`
      position: absolute;
      cursor: pointer;

      &.disabled {
        cursor: default;
        svg {
          color: var(--light-400);
        }
      }

      &.first {
        left: ${null!==(e=u.offset)&&void 0!==e?e:0}px;
        top: 50%;
        transform: translateY(-50%);

        &.vertical {
          top: ${null!==(t=u.offset)&&void 0!==t?t:0}px;
          left: 50%;
          transform: translateX(-50%) rotate(90deg);
        }
      }
      &.second {
        right: ${null!==(o=u.offset)&&void 0!==o?o:0}px;
        top: 50%;
        transform: translateY(-50%);

        &.vertical {
          bottom: ${null!==(i=u.offset)&&void 0!==i?i:0}px;
          left: 50%;
          top: auto;
          right: auto;
          transform: translateX(-50%) rotate(90deg);
        }
      }
    `},y=n.React.useCallback(((e,t)=>(0,n.jsx)("div",{key:e,className:(0,n.classNames)("dot rounded-circle",{active:t,disabled:s<=1}),onClick:t?void 0:()=>l(e)})),[l,s]),h=n.React.useCallback((()=>{l(r>0?r-1:s-1)}),[r,s,l]),f=n.React.useCallback((()=>{l(r<s-1?r+1:0)}),[r,s,l]),v=s>1&&0!==r,m=s>1&&r!==s-1;return(0,n.jsx)(n.React.Fragment,null,(null==u?void 0:u.visible)&&(0,n.jsx)(n.React.Fragment,null,(0,n.jsx)("div",{className:(0,n.classNames)("arrows-nav first",{vertical:"v"===u.direction,disabled:!v}),css:g(),onClick:v?h:null},(0,n.jsx)(yt,{autoFlip:"v"!==u.direction,size:null!==(o=u.size)&&void 0!==o?o:12})),(0,n.jsx)("div",{className:(0,n.classNames)("arrows-nav second",{vertical:"v"===u.direction,disabled:!m}),css:g(),onClick:m?f:null},(0,n.jsx)(vt,{autoFlip:"v"!==u.direction,size:null!==(i=u.size)&&void 0!==i?i:12}))),(null==d?void 0:d.visible)&&(0,n.jsx)("div",{className:(0,n.classNames)("dots-nav",{"snap-left":"l"===c,"snap-top":"t"===c,"snap-right":"r"===c,"snap-bottom":"b"===c}),css:(()=>{var e,t,o,i,a,r,s,l,u,p,g,y,h,f;return n.css`
      position: absolute;
      display: flex;
      flex-direction: ${"l"===c||"r"===c?"column":"row"};
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
        width: ${null!==(e=d.size)&&void 0!==e?e:8}px;
        height: ${null!==(t=d.size)&&void 0!==t?t:8}px;

        &.active {
          border-color: var(--white);
          background: var(--primary-500);
          width: ${d.size>0?1.5*d.size:12}px;
          height: ${d.size>0?1.5*d.size:12}px;
        }

        &.disabled {
          cursor: default;
        }
      }

      &.snap-left {
        height: 100%;
        top: 0;
        left: ${null!==(o=d.offset)&&void 0!==o?o:50}px;
        width: ${null!==(i=d.size)&&void 0!==i?i:8}px;

        > div:not(:first-child) /* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */ {
          margin-top: ${null!==(a=d.spacing)&&void 0!==a?a:10}px;
        }
      }
      &.snap-right {
        height: 100%;
        top: 0;
        right: ${null!==(r=d.offset)&&void 0!==r?r:50}px;
        width: ${null!==(s=d.size)&&void 0!==s?s:8}px;

        > div:not(:first-child) /* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */ {
          margin-top: ${null!==(l=d.spacing)&&void 0!==l?l:10}px;
        }
      }
      &.snap-top {
        width: 100%;
        top: ${null!==(u=d.offset)&&void 0!==u?u:50}px;
        height: ${null!==(p=d.size)&&void 0!==p?p:8}px;

        > div:not(:first-child) /* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */ {
          margin-left: ${null!==(g=d.spacing)&&void 0!==g?g:10}px;
        }
      }
      &.snap-bottom {
        width: 100%;
        bottom: ${null!==(y=d.offset)&&void 0!==y?y:50}px;
        height: ${null!==(h=d.size)&&void 0!==h?h:8}px;

        > div:not(:first-child) /* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */ {
          margin-left: ${null!==(f=d.spacing)&&void 0!==f?f:10}px;
        }
      }
    `})()},p.map((e=>y(e,e===r)))))}function It(e){return n.css`
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
      padding-top: ${100*(e||0)}%;
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
  `}function wt(e){var t;const{views:o,navInfo:i,activeView:a,animationPreview:r,playMode:s,transition:l,sectionId:u,autoPlay:d,focusable:c=!0,interval:p=w,loop:g=!0,className:h,sectionStyle:f,forceAspectRatio:v,aspectRatio:m,rotate:I,layoutEntryComponent:x,viewVisibilityContext:b}=e,S=n.React.useRef(),T=n.React.useRef(),C=n.React.useRef(!1),R=n.React.useRef(!1),j=n.React.useRef(null),[$,P]=n.React.useState(!1),M=null==a?void 0:a.id,O=n.React.useMemo((()=>{var e;let t,a,r,s=o;return i?(s=null!==(e=i.visibleViews)&&void 0!==e?e:o,i.useProgress?(r=i.progress,t=(0,n.getIndexFromProgress)(r,s.length).currentIndex):(t=Math.max(0,s.indexOf(i.currentViewId)),a=i.previousViewId?Math.max(0,s.indexOf(i.previousViewId)):Math.max(0,t-1))):(t=Math.max(0,s.indexOf(M)),a=t),S.current=t,{currentIndex:t,previousIndex:a,progress:r}}),[M,i,o]),k=n.React.useMemo((()=>y.styleUtils.toCSSStyle(f)),[f]),{transform:L}=k,E=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(n[o[i]]=e[o[i]])}return n}(k,["transform"]),A=I>0||I<0?`rotateZ(${I}deg)`:"";let z=A;L&&(z=`${L} ${A}`);const N=n.React.useCallback((()=>{P(!0)}),[]),B=n.React.useCallback((()=>{P(!1)}),[]),F=n.React.useCallback((e=>{C.current=!0,R.current=e.target===T.current,null!=j.current&&(clearTimeout(j.current),j.current=null),d&&P(!0)}),[d]),V=n.React.useCallback((e=>{C.current=!1,null!=j.current&&(clearTimeout(j.current),j.current=null),d&&(j.current=setTimeout((()=>{P(!1)}),500))}),[d]),D=d&&!$;!function(e){const{sectionId:t,autoPlay:o,interval:i=w,loop:a=!1}=e,r=n.React.useRef(),s=n.ReactRedux.useSelector((e=>{var t,i;return o?(null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.appMode)===n.AppMode.Design||(null===(i=e.appRuntimeInfo)||void 0===i?void 0:i.isPrintPreview):null})),l=n.React.useRef(s),u=n.React.useCallback((()=>{r.current&&(clearInterval(r.current),r.current=null)}),[]),d=n.React.useCallback((()=>{u(),r.current=setInterval((()=>{const e=function(e,t){var o,i;const a=(0,n.getAppStore)().getState(),r=a.appConfig.sections[e].views,s=null===(i=null===(o=a.appRuntimeInfo)||void 0===o?void 0:o.sectionNavInfos)||void 0===i?void 0:i[e],l=(null==s?void 0:s.currentViewId)?r.indexOf(s.currentViewId):0,u=l<r.length-1?l+1:0;return!(!t&&0===u||(n.jimuHistory.changeView(e,r[u]),0))}(t,a);e||u()}),1e3*i)}),[t,a,i,u]);n.React.useEffect((()=>{if(!l.current){if(!o)return void u();d()}return()=>{u()}}),[o,i,a,u,d]),n.React.useEffect((()=>{if(l.current!==s&&null!==s){if(l.current=s,s)return void u();o&&d()}}),[s,d,u,o])}({sectionId:u,interval:p,loop:g,autoPlay:D});const W=n.React.useCallback((e=>{n.jimuHistory.changeView(u,o[e])}),[u,o]);return(0,n.jsx)("div",{className:(0,n.classNames)(`section-layout layout-item-content w-100 ${null===(t=null==f?void 0:f.boxShadow)||void 0===t?void 0:t.presetStyle}`,h,{"aspect-ratio-wrapper":v&&m>0}),css:It(m),"data-sectionid":u,style:Object.assign(Object.assign({},E),{transform:z}),onMouseEnter:d?N:null,onMouseLeave:d?B:null,onTouchStart:d?N:null,onTouchEnd:d?B:null,onFocus:F,onBlur:V,tabIndex:c?0:void 0,ref:T},(0,n.jsx)(ct,{views:o,navInfo:i,animationPreview:r,playMode:s,currentIndex:O.currentIndex,previousIndex:O.previousIndex,progress:O.progress,loop:D&&g,viewTransition:l,layoutEntryComponent:x,viewVisibilityContext:b}),(0,n.jsx)(mt,{sectionId:u,numOfViews:o.length,currentIndex:O.currentIndex,onCurrentViewChange:W}))}class xt extends n.React.PureComponent{render(){return n.React.createElement(wt,Object.assign({},this.props,{layoutEntryComponent:st,viewVisibilityContext:d}))}}function bt(e,t){const[o,i]=n.React.useState(!0),a=n.React.useContext(u);return n.React.useEffect((()=>{null!=e&&i(a)}),[e,a]),o}function St(){const e=[0];for(let t=1;t<=10;t++)e.push(t/10);return e}function Tt(e){var t,o,i,r,s,u,d;const c=n.ReactRedux.useSelector((t=>function(e,t){const o=E(e,t);if(!o.layoutItem)return o;if(o.layoutItem.type===n.LayoutItemType.Widget)return Object.assign({},o);const i=Ge(e,o.layoutItem.sectionId);return Object.assign(Object.assign({},o),i)}(t,e)),n.ReactRedux.shallowEqual),p=n.ReactRedux.useSelector((e=>{var t,n;return null!==(n=null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.isPrintPreview)&&void 0!==n&&n})),g=Object.assign(Object.assign({},e),c),y=n.React.useRef(),{layoutId:h,layoutItemId:f,layoutItem:v}=g,{className:I,children:w,isParentPlaying:x,isParentRevert:b,isParentEnableScroll:S,parentAnimationStyle:T,parentPlayId:C,id:R}=g,j=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(n[o[i]]=e[o[i]])}return n}(g,["className","children","isParentPlaying","isParentRevert","isParentEnableScroll","parentAnimationStyle","parentPlayId","id"]),$=(null==v?void 0:v.type)===n.LayoutItemType.Widget,P=(null==v?void 0:v.type)===n.LayoutItemType.Section,{effect:M,oneByOneEffect:O}=p?{}:null!==(o=null===(t=g.layoutItem)||void 0===t?void 0:t.setting)&&void 0!==o?o:{},[k,L]=n.React.useState(!1),A=function(e,t){const o=n.React.useRef(),[i,a]=n.React.useState(!0);return n.React.useEffect((()=>{if(o.current&&(o.current.unobserve(e),o.current=null),t&&e&&"function"==typeof IntersectionObserver){const t=new IntersectionObserver((e=>{var t;(t=e[0]).target.classList.contains("playing-animation")||t.boundingClientRect.width>0&&t.boundingClientRect.height>0&&a(t.isIntersecting)}),{threshold:St(),root:document,rootMargin:"20%"});return t.observe(e),o.current=t,()=>{o.current.unobserve(e),o.current=null}}}),[e,t]),i}(y.current,g.watchViewportVisibility);n.React.useEffect((()=>{L(!0)}),[]);const{type:z,trigger:N,playId:B,revert:F,onAnimationEnd:V}=function(e){var t;const{effect:o}=e,{pageId:i}=n.React.useContext(a);let r=null===(t=null==o?void 0:o[n.AnimationTriggerType.ScrollIntoView])||void 0===t?void 0:t.type;r=r&&r!==n.AnimationType.None?r:null;const s=bt(r),[l,u]=n.React.useState(Symbol("page load")),d=n.React.useRef(n.AnimationTriggerType.Manual),c=n.React.useRef(s);n.React.useEffect((()=>{r&&c.current!==s&&(c.current=s,u(Symbol("autoplay when visible change")),d.current=n.AnimationTriggerType.Manual)}),[r,s]);const p=n.React.useCallback((()=>{l&&(d.current=n.AnimationTriggerType.ScrollIntoView,u(null))}),[l]);return r?{onAnimationEnd:p,playId:l,type:r,trigger:l?n.AnimationTriggerType.Manual:d.current,revert:!s}:{}}({effect:M}),{setting:D,trigger:W,inheritedOneByOneSetting:H,playId:G,depth:U,revert:_,onAnimationEnd:X}=function(e){var t,o;const{effect:i,isInSection:r}=e,{pageId:s}=n.React.useContext(a);let l=null==i?void 0:i[n.AnimationTriggerType.ScrollIntoView];l=l&&l!==n.AnimationType.None?l:null;const u=bt(l),d=n.React.useContext(n.AnimationContext),c=n.React.useRef(u),p=n.React.useRef(n.AnimationTriggerType.Manual),[g,y]=n.React.useState(Symbol("page load"));n.React.useEffect((()=>{l&&c.current!==u&&(c.current=u,y(Symbol("autoplay when visible change")),p.current=n.AnimationTriggerType.Manual)}),[l,u]);const h=n.React.useCallback((()=>{g&&(p.current=n.AnimationTriggerType.ScrollIntoView,y(null))}),[g]);return l?{setting:null==i?void 0:i[n.AnimationTriggerType.ScrollIntoView],onAnimationEnd:h,trigger:g?n.AnimationTriggerType.Manual:p.current,inheritedOneByOneSetting:r?null:null==d?void 0:d.setting,playId:g,revert:!u,depth:(null!==(o=null==d?void 0:d.depth)&&void 0!==o?o:0)+1}:{inheritedOneByOneSetting:r?null:null==d?void 0:d.setting,depth:(null!==(t=null==d?void 0:d.depth)&&void 0!==t?t:0)+1}}({effect:O,isInSection:e.isInSection}),Y=n.React.useMemo((()=>({trigger:W,setting:D,inheritedOneByOneSetting:H,playId:G,depth:U,revert:_,onAnimationEnd:X})),[W,D,H,G,U,_,X]);if(!g.layoutItem||$&&!v.widgetId||P&&!v.sectionId)return null;const J=null===(i=null==M?void 0:M[n.AnimationTriggerType.ScrollIntoView])||void 0===i?void 0:i.option,Z=null!==(d=null===(u=null===(s=null===(r=v.setting)||void 0===r?void 0:r.style)||void 0===s?void 0:s.transform)||void 0===u?void 0:u.rotate)&&void 0!==d?d:0;return(0,n.jsx)(n.AnimationContext.Provider,{value:Y},(0,n.jsx)(l.Provider,{value:A},(0,n.jsx)(n.AnimationComponent,{id:R,type:z,trigger:N,configType:null==J?void 0:J.configType,direction:null==J?void 0:J.direction,playId:B,revert:F,onAnimationEnd:V,parentAnimationStyle:T,isParentPlaying:x,isParentRevert:b,isParentEnableScroll:S,parentPlayId:C,ref:y,css:n.css`
            position: relative;
            overflow: visible;
            min-width: ${m}px;
            min-height: ${m}px;
          `,style:e.style,className:(0,n.classNames)("d-flex layout-item",I,{"is-widget":$,"is-section":P}),"data-layoutitemid":f,"data-layoutid":h},$&&(0,n.jsx)(Qe,Object.assign({rotate:Z},j)),P&&(0,n.jsx)(xt,Object.assign({rotate:Z},j)),e.children)))}function Ct(e){return"ratio"===e.heightMode}class Rt extends n.React.PureComponent{getPositionStyle(e){const{layoutItem:t,transformedBBox:o}=this.props,i=function(e,t){var n,o,i,a,r;const s={};let l=null!==(n=null==t?void 0:t.autoProps)&&void 0!==n?n:{},u=e;const d=ie("height",e,l),c=ie("width",e,l);if(d===S.Stretch)s.top=u.top,s.bottom=u.bottom;else{const n=null!==(o=l.top)&&void 0!==o&&o,a=null!==(i=l.bottom)&&void 0!==i&&i;d===S.Custom&&(s.height=u.height),n!==a&&!a||null==e.top?s.bottom=u.bottom:s.top=u.top,t.vCenter&&"50%"===u.top&&(s.top="50%")}if(c===S.Stretch)s.left=u.left,s.right=u.right;else{const e=null!==(a=l.left)&&void 0!==a&&a,n=null!==(r=l.right)&&void 0!==r&&r;c===S.Custom&&(s.width=u.width),e===n?null!=u.left?s.left=u.left:s.right=u.right:e&&null!=u.right?s.right=u.right:s.left=u.left,t.hCenter&&"50%"===u.left&&(s.left="50%")}return s}(null!=o?o:t.bbox,e),a=Object.assign(Object.assign({},i),function(e,t,n=!1){const o={},i=t.hCenter&&"50%"===e.left,a=t.vCenter&&"50%"===e.top,r=W()?-1:1;return i&&a?(o.right="auto",o.bottom="auto",o.transform=`translate(${-50*r}%, -50%)`):i?(o.right="auto",o.transform=`translateX(${-50*r}%)`):a&&(o.bottom="auto",o.transform="translateY(-50%)"),!n&&Ct(t)&&(o.height="auto"),o}(t.bbox,e));return[n.css`
        position: absolute;
        left: ${M(a,"left")};
        right: ${M(a,"right")};
        top: ${M(a,"top")};
        bottom: ${M(a,"bottom")};
        width: ${M(a,"width")};
        height: ${M(a,"height")};
      `,a.transform]}render(){const{layoutItem:e,layoutId:t}=this.props;if(null==e||e.isPending)return null;const o=n.lodash.assign({},le,e.setting),i=H(o.aspectRatio),a=Ct(o),r=re(this.props),[s,l]=this.getPositionStyle(o);return(0,n.jsx)(Tt,Object.assign({css:s,style:{transform:l},layoutId:t,layoutItemId:e.id,forceAspectRatio:a,aspectRatio:i,isInSection:this.props.isInSection},r))}}class jt extends n.React.PureComponent{createItem(e,t,o,i){const a=e.content[t];return(0,n.jsx)(Rt,{key:`${e.id}_${t}`,index:o,layoutId:e.id,layoutItemId:t,layoutItem:a,transformedBBox:i?e.content[t].bbox:null,isInSection:this.props.isInSection})}render(){const{layout:e,layouts:t,className:o,style:i,browserSizeMode:r}=this.props;return e?(0,n.jsx)(a.Consumer,null,(a=>{this.pageContext=a;let s=e,l=!1;if(t[r]!==e.id&&this.layoutTransform){let n;Object.keys(t).some((o=>{if(t[o]===e.id)return n=o,!0})),s=this.layoutTransform(e,n,r),l=!0}const u=n.lodash.assign({},se,s.setting),d=s.order||[],c=(0,n.classNames)("layout fixed-layout d-flex",o);return(0,n.jsx)("div",{className:c,style:Object.assign(Object.assign(Object.assign({position:"relative",height:"auto"},i),y.styleUtils.toCSSStyle(u.style)),{width:"100%",overflow:"hidden"}),"data-layoutid":s.id},d.length>0&&(0,n.jsx)(n.OneByOneAnimation,{css:n.css`
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: 0;
                    bottom: 0;
                  `,"data-layoutid":e.id},d.map(((e,t)=>this.createItem(s,e,t,l)))))})):null}}const $t=n.ReactRedux.connect(L)(jt);class Pt extends n.React.PureComponent{isStretchInCrossAxis(){var e,t;const{layoutItem:n}=this.props;return(null===(t=null===(e=n.setting)||void 0===e?void 0:e.autoProps)||void 0===t?void 0:t.width)!==S.Custom}calHeight(e,t){var n,o;return(null===(n=e.autoProps)||void 0===n?void 0:n.height)===S.Auto||"ratio"===e.heightMode?"ratio"===e.heightMode?{height:"auto",flex:"0 0 auto"}:{height:"auto"}:(null===(o=e.autoProps)||void 0===o?void 0:o.height)===S.Stretch||"fit"===e.heightMode?{flex:"1 1 auto"}:{height:t.height,flexShrink:0}}getStyle(e,t){var o,i;const{index:a,layoutItem:r,space:s}=this.props,l=r.bbox||{},u=this.calHeight(e,l);return u.width=t?"auto":l.width,n.css`
      margin-top: ${a>0?`${s}px`:"unset"};
      align-self: ${t?"stretch":null!==(i=null===(o=e.style)||void 0===o?void 0:o.alignSelf)&&void 0!==i?i:"auto"};
      width: ${M(u,"width")};
      height: ${M(u,"height")};
      flex: ${u.flex};
      flex-shrink: ${u.flexShrink};
    `}render(){const{layoutId:e,layoutItem:t,onClick:o}=this.props;if(!t||t.isPending)return null;const i=(0,n.classNames)("flexbox-layout-item","d-flex"),a=t.setting||{},r=this.isStretchInCrossAxis(),s="ratio"===a.heightMode,l=H(a.aspectRatio),u=re(this.props);return(0,n.jsx)(Tt,Object.assign({css:this.getStyle(a,r),layoutId:e,layoutItemId:t.id,onClick:o,className:i,forceAspectRatio:s,aspectRatio:l},u))}}const Mt={min:16,space:10};class Ot extends n.React.PureComponent{createItem(e,t,o){const{layout:i}=this.props;return(0,n.jsx)(Pt,{key:e,index:t,space:o.space,layoutId:i.id,layoutItemId:e,layoutItem:i.content[e]})}render(){const{layout:e,className:t}=this.props,o=e.order||(0,n.Immutable)([]),i=Object.assign({},Mt,e.setting),a=(0,n.classNames)("layout column-layout d-flex w-100",t);return(0,n.jsx)("div",{className:a,style:{position:"relative",overflow:"hidden"},"data-layoutid":e.id},(0,n.jsx)(n.OneByOneAnimation,{enableScroll:!0,className:"trail-container d-flex flex-column w-100",css:n.css`
          height: 100%;
          overflow-x: hidden;
          padding: ${y.styleUtils.toCSSPadding(i.padding)};
          justify-content: ${i.justifyContent};
          overflow-y: ${!1===i.overflowY?"hidden !important":null}
        `},o.asMutable().map(((e,t)=>this.createItem(e,t,i)))))}}const kt=n.ReactRedux.connect(L)(Ot),Lt=n.css`
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
`,Et={space:10,style:{padding:{number:[10,10,10,10],unit:y.DistanceUnits.PIXEL}}},At={heightMode:"fixed",aspectRatio:1,offsetX:0,offsetY:0,style:{alignSelf:"flex-start"}};class zt extends n.React.PureComponent{getStyle(e){var t,o,i,a;const{gutter:r,layoutItem:s,isMultiRow:l}=this.props,u=s.bbox,d=W()?-1:1,c=function(e,t,n){var o,i,a,r,s,l,u,d,c,p,g,y,h,f;return n?{height:(null===(o=e.autoProps)||void 0===o?void 0:o.height)===S.Auto?"auto":t.height,alignSelf:null!==(a=null===(i=e.style)||void 0===i?void 0:i.alignSelf)&&void 0!==a?a:"flex-start"}:"ratio"===e.heightMode?{alignSelf:null!==(s=null===(r=e.style)||void 0===r?void 0:r.alignSelf)&&void 0!==s?s:"flex-start"}:(null===(l=e.autoProps)||void 0===l?void 0:l.height)===S.Auto?{height:"auto",alignSelf:null!==(d=null===(u=e.style)||void 0===u?void 0:u.alignSelf)&&void 0!==d?d:"flex-start"}:(null===(c=e.autoProps)||void 0===c?void 0:c.height)===S.Custom?{height:t.height,alignSelf:null!==(g=null===(p=e.style)||void 0===p?void 0:p.alignSelf)&&void 0!==g?g:"flex-start"}:(null===(y=e.autoProps)||void 0===y?void 0:y.height)===S.Stretch||"fit"===e.heightMode?{alignSelf:"stretch"}:parseFloat(t.height)>0?{height:t.height,alignSelf:null!==(f=null===(h=e.style)||void 0===h?void 0:h.alignSelf)&&void 0!==f?f:"flex-start"}:{alignSelf:"stretch"}}(e,u,l);return l?[n.css`
          padding: ${r/2}px 0;
          height: ${M(c,"height")};
          align-self: ${c.alignSelf};
        `,null!=e.offsetX||null!=e.offsetY?`translate(${(null!==(t=e.offsetX)&&void 0!==t?t:0)*d}px, ${null!==(o=e.offsetY)&&void 0!==o?o:0}px)`:null]:[n.css`
        padding-left: ${r/2}px;
        padding-right: ${r/2}px;
        height: ${M(c,"height")};
        align-self: ${c.alignSelf};
      `,null!=e.offsetX||null!=e.offsetY?`translate(${(null!==(i=e.offsetX)&&void 0!==i?i:0)*d}px, ${null!==(a=e.offsetY)&&void 0!==a?a:0}px)`:null]}render(){const{span:e,offset:t,layoutId:o,layoutItem:i}=this.props;if(null==i||i.isPending)return null;const a=n.lodash.assign({},At,i.setting),r=(0,n.classNames)("row-layout-item",`col-${e}`,`offset-${t}`),s=H(a.aspectRatio),l=re(this.props),[u,d]=this.getStyle(a);return(0,n.jsx)(Tt,Object.assign({css:u,style:{transform:d},className:r,layoutId:o,layoutItemId:i.id,forceAspectRatio:"ratio"===a.heightMode,aspectRatio:s,onClick:this.props.onClick},l))}}class Nt extends n.React.PureComponent{constructor(e){super(e),this.flipLeftRight=W()}collectBounds(){var e;const{transformedLayout:t}=this.props,n=null!==(e=t.order)&&void 0!==e?e:[];return this.childRects=[],n.forEach((e=>{var n,o;if(t.content[e].isPending)return;const i=null===(o=null===(n=t.content)||void 0===n?void 0:n[e])||void 0===o?void 0:o.bbox;null!=i&&this.childRects.push({layoutId:t.id,id:e,left:parseInt(i.left,10),width:parseInt(i.width,10),height:parseInt(i.height,10)})})),this.childRects.sort(((e,t)=>e.left-t.left))}getConfig(){var e;const{layout:t}=this.props;return null!==(e=t.setting)&&void 0!==e?e:Et}createItem(e,t,o){var i;const{transformedLayout:a,isMultiRow:r}=this.props,s=this.getConfig(),l=e[t],u=null!==(i=s.space)&&void 0!==i?i:0;let d;if(0===t)d=l.left;else{const n=e[t-1];d=l.left-n.left-n.width}return(0,n.jsx)(zt,{key:`${l.layoutId}_${l.id}`,offset:d,gutter:u,span:l.width,isMultiRow:r,layoutId:a.id,layoutItemId:l.id,layoutItem:a.content[l.id],alignItems:o.alignItems})}render(){var e,t;const{layout:o,className:i}=this.props;this.collectBounds();const r=this.childRects,s=this.getConfig(),l=null!==(e=s.style)&&void 0!==e?e:{},u=null!==(t=s.space)&&void 0!==t?t:0;return(0,n.jsx)(a.Consumer,null,(e=>(0,n.jsx)("div",{className:(0,n.classNames)("row-layout",i,{"row-rtl":this.flipLeftRight}),css:Lt,"data-layoutid":o.id},(0,n.jsx)("div",{css:n.css`
                  width: 100%;
                  max-width: ${e.maxWidth>0?`${e.maxWidth}px`:"none"};
                `},(0,n.jsx)("div",{css:n.css`
                    position: relative;
                    height: 100%;
                    margin-left: ${-u/2}px;
                    margin-right: ${-u/2}px;
                    display: flex;
                    flex-direction: column;
                  `},r.length>0&&(0,n.jsx)(n.OneByOneAnimation,{className:(0,n.classNames)("row h-100 m-0",{"flex-nowrap":!this.props.isMultiRow}),css:n.css`
                        position: relative;
                        height: 100%;
                        overflow: ${this.props.isMultiRow?"auto":"unset"};
                      `},r.map(((e,t)=>this.createItem(r,t,l)))))))))}}class Bt extends n.React.PureComponent{constructor(e){super(e),this.onResize=(e,t)=>{var n;if(this.props.browserSizeMode!==this.props.mainSizeMode)return;if(0===e&&0===t)return;const{widgetId:o}=this.props;null!=(null===(n=window.runtimeInfo.widgets)||void 0===n?void 0:n[o])?window.runtimeInfo.widgets[o].height=t:window.runtimeInfo.widgets[o]={height:t}},this.handleDebounceResize=n.lodash.debounce(this.onResize,200)}findExtension(){const e=n.ExtensionManager.getInstance().getExtensions(`${n.extensionSpec.ExtensionPoints.LayoutTransformer}`);if((null==e?void 0:e.length)>0){const t=e.find((e=>e.layoutType===n.LayoutType.RowLayout));this.layoutTransform=null==t?void 0:t.transformLayout}}transform(){const{layout:e,layouts:t,browserSizeMode:n,mainSizeMode:o}=this.props;null==this.layoutTransform&&this.findExtension();let i=e;t[n]!==e.id&&null!=this.layoutTransform&&(i=this.layoutTransform(e,o,n)),this.finalLayout=i}createRow(){const{layout:e,layouts:t}=this.props;return(0,n.jsx)(Nt,{layouts:t,layout:e,transformedLayout:this.finalLayout,isMultiRow:this.finalLayout!==e})}render(){var e;const{layout:t,className:o}=this.props,i=null!==(e=t.setting)&&void 0!==e?e:Et;return(0,n.jsx)(a.Consumer,null,(e=>(this.transform(),(0,n.jsx)("div",{className:(0,n.classNames)("layout d-flex",o),css:n.css`
                width: 100%;
                padding: ${y.styleUtils.toCSSPadding(i.style.padding)};
              `,"data-layoutid":t.id},this.createRow(),(0,n.jsx)(n.ReactResizeDetector,{handleHeight:!0,onResize:this.handleDebounceResize})))))}}const Ft=n.ReactRedux.connect(L)(Bt);function Vt(e){const t=re(e);return(0,n.jsx)(Tt,Object.assign({},e,t))}var Dt=r(4020);const Wt=32;function Ht(e,t,n,o,i){let a=o,r=i;return"row"===n?(o<0&&(a=e.width>Wt?-Math.min(Math.abs(o),e.width-Wt):0),o>0&&(a=t.width>Wt?Math.min(o,t.width-Wt):0)):(i<0&&(r=e.height>Wt?-Math.min(Math.abs(i),e.height-Wt):0),i>0&&(r=t.height>Wt?Math.min(i,t.height-Wt):0)),{x:a,y:r}}function Gt(e){const t=e.getAttribute("data-layoutid"),o=e.getAttribute("data-layoutitemid");return(0,n.getAppStore)().getState().appConfig.layouts[t].content[o].setting.size}function Ut(e){const{referenceItemId:t,direction:o,resizable:i=!1,onResizeEnd:a}=e,r=n.React.useRef(),s=n.React.useMemo((()=>{const e="10px";return n.css`
      width: ${"col"===o?"100%":e};
      height: ${"col"===o?e:"100%"};
      background: var(--primary);
      position: relative;
      z-index: 10;

      &:hover {
        background: ${i?"var(--primary-700)":"var(--primary)"} ;
      }

      .horizontal-splitter {
        cursor: ${i?"col-resize":"default"};
      }

      .vertical-splitter {
        cursor: ${i?"row-resize":"default"};
      }
    `}),[o,i]);return y.hooks.useEffectOnce((()=>{if(!i)return;let e,n,s,l,u,d,c,p,g,y,h,f,v;const m=(0,Dt.interact)(r.current).origin("parent").draggable({inertia:!1,autoScroll:!1,modifiers:[Dt.interact.modifiers.restrict({restriction:"parent"})],lockAxis:"row"===o?"x":"y",onstart:t=>{t.stopPropagation(),e=0,n=0,s=r.current.parentElement.getBoundingClientRect(),l=r.current.previousElementSibling,u=l.getBoundingClientRect(),c=l.style.width,p=l.style.height,d=Gt(l),g=r.current.nextElementSibling,y=g.getBoundingClientRect(),f=g.style.width,v=g.style.height,h=Gt(g)},onmove:t=>{t.stopPropagation(),e+=t.dx,n+=t.dy;const{x:i,y:a}=Ht(u,y,o,e,n);"row"===o?(l.style.width=`calc(${d}% + ${i}px)`,g.style.width=`calc(${h}% - ${i}px)`):(l.style.height=`calc(${d}% + ${a}px)`,g.style.height=`calc(${h}% - ${a}px)`)},onend:i=>{i.stopPropagation(),e+=i.dx,n+=i.dy;const{x:r,y:d}=Ht(u,y,o,e,n);l.style.width=c,g.style.width=f,l.style.height=p,g.style.height=v,a(t,Math.round(1e4*r/s.width)/100,Math.round(1e4*d/s.height)/100)}});return()=>{m.unset()}})),(0,n.jsx)("div",{ref:r,css:s},(0,n.jsx)("div",{className:(0,n.classNames)("w-100 h-100",{"horizontal-splitter":"row"===o,"vertical-splitter":"col"===o})}))}function _t(e){const{layoutId:t,layoutItemId:o,isLast:i,className:a}=e,r=n.ReactRedux.useSelector((e=>{const n=e.appConfig.layouts[t].content[o];return null==n?void 0:n.setting})),s=n.ReactRedux.useSelector((e=>(null==r?void 0:r.parent)?e.appConfig.layouts[t].content[r.parent].setting.type:null)),l=n.React.useCallback((()=>s===b.Row?n.css`height: 100%; width: ${r.size}%`:s===b.Column?n.css`width: 100%; height: ${r.size}%`:n.css`width: 100%; height: 100%;`),[null==r?void 0:r.size,s]);return r?r.type===b.Row?(0,n.jsx)(Xt,{className:a,css:l(),layoutId:t,layoutItemId:o,items:r.children}):r.type===b.Column?(0,n.jsx)(Yt,{className:a,css:l(),layoutId:t,layoutItemId:o,items:r.children}):r.type===b.Tab?(0,n.jsx)(Jt,{className:a,css:l(),layoutId:t,layoutItemId:o,items:r.children}):(0,n.jsx)(Vt,{css:l(),className:(0,n.classNames)(`d-flex ${a}`,{"is-last":i}),layoutId:t,layoutItemId:o}):null}function Xt(e){const{layoutId:t,layoutItemId:o,items:i,className:a}=e,r=y.hooks.useEventCallback(((e,t)=>{}));return(0,n.jsx)("div",{className:`d-flex ${a}`,css:n.css`
      .is-last {
        width: auto;
        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: 0;
      }
    `,"data-layoutid":t,"data-layoutitemid":o},i.map(((e,o)=>{return a=e,s=o===i.length-1,(0,n.jsx)(n.React.Fragment,{key:a},(0,n.jsx)(_t,{key:a,layoutId:t,layoutItemId:a}),!s&&(0,n.jsx)(Ut,{referenceItemId:a,direction:"row",onResizeEnd:r}));var a,s})))}function Yt(e){const{layoutId:t,layoutItemId:o,items:i,className:a}=e,r=y.hooks.useEventCallback(((e,t,n)=>{}));return(0,n.jsx)("div",{className:`d-flex flex-column ${a}`,css:n.css`
      .is-last {
        height: auto;
        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: 0;
      }
    `,"data-layoutid":t,"data-layoutitemid":o},i.map(((e,o)=>{return a=e,s=o===i.length-1,(0,n.jsx)(n.React.Fragment,{key:a},(0,n.jsx)(_t,{key:a,layoutId:t,layoutItemId:a}),!s&&(0,n.jsx)(Ut,{referenceItemId:a,direction:"col",onResizeEnd:r}));var a,s})))}function Jt(e){const{layoutId:t,layoutItemId:o,items:i,className:a}=e;return(0,n.jsx)("div",{className:a,"data-layoutid":t,"data-layoutitemid":o},(0,n.jsx)(y.Tabs,{type:"tabs",fill:!0,className:"w-100 h-100"},i.map(((e,o)=>((e,o)=>(0,n.jsx)(y.Tab,{key:o,id:`${o}`,title:`${o}`},(0,n.jsx)(_t,{layoutId:t,layoutItemId:e})))(e,o)))))}class Zt extends n.React.PureComponent{render(){var e;const{layout:t,className:o}=this.props,{rootItem:i}=null!==(e=t.setting)&&void 0!==e?e:{},a=(0,n.classNames)("layout grid-layout d-flex w-100 h-100",o);return(0,n.jsx)("div",{className:a,css:n.css`overflow: hidden;`,"data-layoutid":t.id},i?(0,n.jsx)(_t,{className:"w-100 h-100",layoutId:t.id,layoutItemId:i}):this.props.children)}}const qt=n.ReactRedux.connect(L)(Zt);class Kt{constructor(){this.id="flow-layout-transformer",this.layoutType=n.LayoutType.FlowLayout}transformLayout(e,t,o){if(t!==o&&o===n.BrowserSizeMode.Small){let t=(0,n.Immutable)(e);return(e.order||[]).forEach((e=>{t=t.setIn(["content",e,"setting","heightMode"],"auto")})),t}return e}transformLayoutItem(e,t,n,o,i,a){return{index:t,item:e}}}class Qt{constructor(){this.id="row-layout-transformer",this.layoutType=n.LayoutType.RowLayout}transformLayout(e,t,o){var i,a;if(t===o)return e;let r=(0,n.Immutable)(e);if(o===n.BrowserSizeMode.Small){const t=function(e,t,n){var o;const i=Se(e,n),a=function(e,t,n){var o,i,a,r,s,l,u;const d=e.widgets[n];if(null!=d){const c=X(),p=e.mainSizeMode,g=d.layouts.DEFAULT[c],y=d.layouts.DEFAULT[p],h=G(null!==(s=null===(r=null===(a=null===(i=(null!==(o=e.layouts[g])&&void 0!==o?o:e.layouts[y]).setting)||void 0===i?void 0:i.style)||void 0===a?void 0:a.padding)||void 0===r?void 0:r.number)&&void 0!==s?s:[0]),f=null!==(u=null===(l=null==t?void 0:t[n])||void 0===l?void 0:l.height)&&void 0!==u?u:0;let v=h[0],m=h[2];return $(v)&&(v=k(v,f)),$(m)&&(m=k(m,f)),f-v-m}return 0}(e,t,i);if(a>0){const t=null!==(o=e.layouts[n].order)&&void 0!==o?o:[],i={};return t.forEach((t=>{const o=e.layouts[n].content[t];i[t]=U(a,o)})),i}return null}(function(){const e=(0,n.getAppStore)().getState();return window.jimuConfig.isBuilder?null==e?void 0:e.appStateInBuilder:e}().appConfig,null===(i=window.runtimeInfo)||void 0===i?void 0:i.widgets,e.id);let o=0;Object.keys(null!==(a=e.content)&&void 0!==a?a:{}).sort(((t,n)=>parseInt(e.content[t].bbox.left,10)-parseInt(e.content[n].bbox.left,10))).forEach((i=>{var a,s,l;const u=e.content[i];if(!u.isPending){if(r=r.setIn(["content",i,"bbox"],{left:12*o,width:12,height:null!==(s=null===(a=u.bbox)||void 0===a?void 0:a.height)&&void 0!==s?s:"auto"}),null!=t){const e=null!==(l=u.setting)&&void 0!==l?l:(0,n.Immutable)({});r=r.setIn(["content",i,"bbox","height"],t[i].height).setIn(["content",i,"setting"],e.merge(t[i].setting))}o+=1}}))}return r}transformLayoutItem(e,t,n,o,i,a){return{item:e,index:t}}}const en={gutter:0,style:{padding:{number:[0],unit:"px"},justifyContent:"flex-start",alignItems:"stretch",borderRadius:{number:[0],unit:y.DistanceUnits.PIXEL}}},tn={lockParent:!0,heightMode:"auto",offsetX:0,offsetY:0};function nn(e){const t=parseFloat(null==e?void 0:e.width);return t>0?`${e.width}`.includes("px")?`${Math.round(t)}px`:`${Math.round(t)}%`:"100%"}class on extends n.React.PureComponent{calHeight(e){const{layoutItem:t}=this.props,n=M(t.bbox||{},"height");if(!n||$(n))return"auto";switch(e.heightMode){case"auto":return"auto";case"fixed":return n}}getStyle(e){const{index:t,gutter:o}=this.props,i=W()?-1:1;return[n.css`
        margin-top: ${t>0?`${o}px`:"unset"};
        width: ${nn(e)};
        height: ${this.calHeight(e)};
        flex-shrink: 0;
      `,e.offsetX||e.offsetY?`translate(${(e.offsetX||0)*i}px, ${e.offsetY||0}px)`:null]}render(){const{layoutId:e,layoutItem:t,onClick:o,isEmpty:i}=this.props;if(!t||i)return null;const a=(0,n.classNames)("flow-layout-item","d-flex"),r=n.lodash.assign({},tn,t.setting),s=re(this.props),[l,u]=this.getStyle(r);return(0,n.jsx)(Tt,Object.assign({id:`${e}_block_${t.id}`,css:l,style:{transform:u},layoutId:e,layoutItemId:t.id,onClick:o,className:a},s))}}const an=n.ReactRedux.connect((function(e,t){var o,i,a,r;let s=!0,l=!1;const{layoutItem:u}=t,d=null===(o=e.appRuntimeInfo)||void 0===o?void 0:o.selection;if(d&&(l=d.layoutId===t.layoutId&&d.layoutItemId===u.id),u.type===n.LayoutItemType.Widget){const t=u.widgetId,n=e.appConfig.widgets[t];let o=[0,0,0,0];if(n){o=y.styleUtils.expandStyleArray(null===(r=null===(a=null===(i=n.config)||void 0===i?void 0:i.style)||void 0===a?void 0:a.padding)||void 0===r?void 0:r.number);const t=Object.keys(n.layouts)[0],l=Oe(n.layouts[t],e.browserSizeMode,e.appConfig.mainSizeMode),u=e.appConfig.layouts[l];u&&Object.keys(u.content||[]).length>0&&Object.keys(u.content||[]).some((e=>{if(!u.content[e].isPending)return s=!1,!0}))}return{isEmpty:s,selected:l,padding:o[0]+o[2]}}return{selected:l,isEmpty:!1,padding:0}}))(on);class rn extends n.React.PureComponent{calculatePosition(){const{layoutItem:e}=this.props;return function(e,t={}){var o,i,a;const r=e.setting,s=null!==(o=null==r?void 0:r.floatingArea)&&void 0!==o?o:1,l=`${null!==(i=null==r?void 0:r.offsetX)&&void 0!==i?i:0}px`,u=`${null!==(a=null==r?void 0:r.offsetY)&&void 0!==a?a:0}px`,{dh:d,dw:c,initWidth:p,initHeight:g,isResizing:y}=t,h=W()?`translateX(calc(50% + ${l}))`:`translateX(calc(-50% + ${l}))`,f={};switch(s){case 1:f.left=l,f.top=u,f.transform=null;break;case 2:f.left="50%",f.top=u,f.transform=h;break;case 3:f.right=l,f.top=u,f.transform=null;break;case 4:f.left=l,f.top="50%",f.transform=`translateY(calc(-50% + ${u}))`;break;case 5:f.left="50%",f.top="50%",f.transform=`${h} translateY(calc(-50% + ${u}))`;break;case 6:f.right=l,f.top="50%",f.transform=`translateY(calc(-50% + ${u}))`;break;case 7:f.left=l,f.bottom=u,f.transform=null;break;case 8:f.left="50%",f.bottom=u,f.transform=h;break;case 9:f.right=l,f.bottom=u,f.transform=null}return n.css`
    position: fixed;
    z-index: 1;
    width: ${y?`${p+c}px`:M(e.bbox,"width")};
    height: ${y?`${g+d}px`:M(e.bbox,"height")};
    left: ${f.left};
    right: ${f.right};
    top: ${f.top};
    bottom: ${f.bottom};
    transform: ${f.transform};
  `}(e)}render(){const{layoutId:e,layoutItem:t,onClick:o}=this.props;if(!t)return null;const i=(0,n.classNames)("flow-layout-item floating","d-flex");return(0,n.jsx)(Tt,{css:this.calculatePosition(),layoutId:e,layoutItemId:t.id,onClick:o,className:i})}}function sn(){const e=[0];for(let t=1;t<=100;t++)e.push(t/100);return e}function ln(e){switch(e){case n.ScreenTriggerType.Top:return"0% 0% -98% 0%";case n.ScreenTriggerType.Bottom:return"-98% 0% -2px 0%";case n.ScreenTriggerType.Upper:return`-${100/3-1}% 0% -${200/3-1}% 0%`;case n.ScreenTriggerType.Lower:return`-${200/3-1}% 0% -${100/3-1}% 0%`;default:return}}const un=.33,dn=.25;function cn(e,t,o,i,a,r,s,l,u){const{side:d,size:c,offset:p,background:g,overlay:h=!0,padding:f}=e.panel||{},v=(0,n.getAppStore)().getState().appContext.isRTL?"left"===d?"-":"":"right"===d?"-":"",m=y.styleUtils.toBackgroundEmotionStyle(null!=g?g:{}),I=parseFloat(a);if(u){const e=!h;return n.css`
      width: 100%;
      background: transparent;
      pointer-events: none;
      position: relative;
      opacity: ${s===n.ScreenTransitionType.Fade?i?"1":"0.5":null};
      min-height: ${l===n.ScreenTransitionType.Cover?`${t}px`:null};
      padding-top: ${l!==n.ScreenTransitionType.Fade&&e?`${Math.round(t*un)}px`:null};

      &.top-spacing > .panel-content {
        /* margin-top: ${Math.round(t*un)}px; */
      }

      .panel-content {
        width: 100%;
        ${h?"":m};
        /* margin-top: ${s===n.ScreenTransitionType.Push?"${Math.round(viewHeight * SCREEN_RATIO_IN_SMALL_SIZE)}px":"unset"}; */

        > .layout, > .layout-wrapper > .layout {
          pointer-events: auto;
          ${h?m:""};
          min-height: ${Math.round(t*dn)}px;
          padding: ${y.styleUtils.toCSSPadding(f)};
        }

        > .layout-wrapper > .column-layout > .trail-container,
        > .column-layout > .trail-container {
          overflow-y: hidden;
        }

        > .layout-wrapper > .placeholder-btn {
          pointer-events: auto;
          ${h?m:""};
        }

        .panel-spacing {
          height: ${Math.round(t*I/100)}px;
        }
      }

      .panel-content-placeholder {
        width: 1px;
        min-height: ${t}px;
      }

      body:not(.design-mode) & {
        min-height: ${l===n.ScreenTransitionType.Cover?"100vh":null};
        min-height: ${l===n.ScreenTransitionType.Cover?"calc(var(--vh) * 100)":null};
        padding-top: ${l!==n.ScreenTransitionType.Fade&&e?"33vh":null};
        padding-top: ${l!==n.ScreenTransitionType.Fade&&e?"calc(var(--vh) * 33)":null};

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
    `}return n.css`
    width: 100%;
    background: transparent;
    pointer-events: none;
    display: flex;
    flex-direction: ${"right"===d?"row-reverse":"row"};
    justify-content: ${"center"===d&&h?"center":"flex-start"};
    position: relative;
    opacity: ${s===n.ScreenTransitionType.Fade?i?"1":"0.5":null};

    &.top-spacing > .panel-content {
      /* margin-top: ${Math.round(2*t/3)}px; */
    }

    .panel-content {
      width: ${c};
      transform: ${h&&Math.abs(parseFloat(p))>0?`translateX(${v}${p})`:null};
      flex: 0 auto;
      min-height: ${r?`${t}px`:"unset"};
      ${h?"":m};

      > .layout,
      > .layout-wrapper > .layout {
        pointer-events: auto;
        ${h?m:""};
        min-height: ${Math.round(t*dn)}px;
        padding: ${y.styleUtils.toCSSPadding(f)};
      }

      > .layout-wrapper > .column-layout > .trail-container,
      > .column-layout > .trail-container {
        overflow-y: hidden;
      }

      > .layout-wrapper > .placeholder-btn {
        pointer-events: auto;
        ${h?m:""};
      }

      .panel-spacing {
        height: ${Math.round(t*I/100)}px;

        &.last-item {
          height: ${r?`${Math.round(t*I/100)}`:t}px;
        }
      }
    }

    .panel-content-placeholder {
      width: 1px;
      min-height: ${r?t:Math.round(t*dn)}px;
    }

    body:not(.design-mode) & {
      &.top-spacing > .panel-content {
        /* margin-top: ${66.7}vh; */
      }

      .panel-content {
        min-height: ${r?o>0?`calc(100vh - ${o}px)`:"100vh":"unset"};
        min-height: ${r?o>0?`calc(var(--vh) * 100 - ${o}px)`:"calc(var(--vh) * 100)":"unset"};
        > .layout, > .layout-wrapper > .layout {
          min-height: unset;
        }

        .panel-spacing {
          height: ${I}vh;
          height: calc(var(--vh) * ${I});

          &.last-item {
            height: ${r?I:100}vh;
            height: calc(var(--vh) * ${r?I:100});
          }
        }
      }
      .panel-content-placeholder {
        min-height: ${r?"100":Math.round(25)}vh;
        min-height: calc(var(--vh) * ${r?"100":Math.round(25)});
      }
    }
  `}function pn(e){var t;const{index:o,screenId:i,onInterctionChange:a,onHeightChange:r,viewHeight:s,headerHeight:l,layoutEntry:u,isActive:d,isSmallSize:c,transitionType:p,screenTransitionType:g,triggerType:y,stretched:h,verticalSpace:f="0"}=e,v=n.ReactRedux.useSelector((e=>e.appConfig.screens[i])),{panel:m}=v,I=n.React.useRef(),[w,x]=n.React.useState(!1),b=n.React.useRef(),S=n.React.useCallback((e=>{a(o,e)}),[o,a]);n.React.useEffect((()=>(b.current=n.lodash.debounce(r,200),()=>{var e;null===(e=b.current)||void 0===e||e.cancel()})),[r]);const T=n.React.useCallback(((e,t)=>{var n;null===(n=b.current)||void 0===n||n.call(b,o,t)}),[o]);return function(e,t,o,i){const a=n.React.useRef(),r=n.React.useRef();n.React.useEffect((()=>{if(a.current&&(a.current.unobserve(e),a.current=null),e&&"function"==typeof IntersectionObserver){const n=new IntersectionObserver((e=>{(e=>{const t=e.boundingClientRect,n=e.rootBounds,o=Math.abs(t.bottom-n.top)>=Math.abs(t.top-n.top);e.isIntersecting?(r.current=!0,o&&i(!0)):r.current&&(r.current=!1,o)&&i(!1)})(e[0])}),{threshold:sn(),root:t||document,rootMargin:ln(o)});return n.observe(e),a.current=n,()=>{a.current.unobserve(e),a.current=null}}}),[e,t,i,o])}(I.current,e.refElement,c?n.ScreenTriggerType.Lower:null!=y?y:n.ScreenTriggerType.Bottom,S),n.React.useEffect((()=>{x(!0)}),[]),(0,n.jsx)("div",{className:(0,n.classNames)("screen-side-panel",{"top-spacing":0===o&&((null===(t=v.panel)||void 0===t?void 0:t.overlay)||c)}),"data-screenid":i,"data-index":o,ref:I,css:cn(v,s,l,d,f,h||null==m,p,g,c)},m&&(0,n.jsx)("div",{className:"panel-content"},(0,n.jsx)(u,{layouts:m.layout}),(0,n.jsx)("div",{className:(0,n.classNames)("panel-spacing",{"last-item":e.isLast})})),!m&&(0,n.jsx)("div",{className:"panel-content-placeholder"}),(0,n.jsx)(n.ReactResizeDetector,{handleHeight:!0,onResize:T}))}var gn=r(5467),yn=r.n(gn);const hn=e=>{const{className:t}=e,o=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(n[o[i]]=e[o[i]])}return n}(e,["className"]),i=(0,n.classNames)("jimu-icon jimu-icon-component",t);return n.React.createElement(y.SVG,Object.assign({className:i,src:yn()},o))};function fn(e){const{rootLayoutId:t,viewHeight:o,headerHeight:i,screenId:a,isActive:r,isAbsolute:s,isLast:l,isSmallSize:d,layoutEntry:c,isDesignMode:p,formatMessage:g,builderTheme:h}=e,f=n.ReactRedux.useSelector((e=>e.appConfig.screens[a])),v=n.ReactRedux.useSelector((e=>{var t,n,o;return null===(o=null===(n=null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.screenPanelStates)||void 0===n?void 0:n[a])||void 0===o||o})),{main:m}=f,{side:I,size:w,overlay:x=!0}=f.panel||{},b=n.React.useRef(),S=n.React.useCallback((()=>{(0,n.getAppStore)().dispatch(n.appActions.screenPanelVisibleChanged(a,!0))}),[a]),T=(0,n.classNames)("screen-main-panel",{"is-active":r,"last-one":l});return(0,n.jsx)(u.Provider,{value:!s||r},(0,n.jsx)("div",{id:`${t}_screen_${a}`,className:T,css:function(){var e,t,a,r;if(d){const a=!x&&null!=f.panel,r=a?`${Math.round(o*un)}px`:`${o}px`,s=a?`${Math.round(33)}`:"100";return n.css`
        pointer-events: none !important;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: ${o}px;

        > .layout {
          ${y.styleUtils.toBackgroundEmotionStyle(null!==(t=null===(e=f.main)||void 0===e?void 0:e.background)&&void 0!==t?t:{})};
          height: ${r} !important;
          border: none !important;
          pointer-events: auto;
        }

        body:not(.design-mode) & {
          height: ${i>0?`calc(100vh - ${i}px)`:"100vh"};
          height: ${i>0?`calc(var(--vh) * 100 - ${i}px)`:"calc(var(--vh) * 100)"};
          > .layout {
            height: ${s}vh !important;
            height: calc(var(--vh) * ${s}) !important;
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
          pointer-events: auto;
        }
      `}let l="0px",u="0px";"none"!==I&&(x||"right"===I||(l=w),x||"right"!==I||(u=w));const c=h?n.css`
      color: ${h.colors.palette.dark[900]};
      background-color: ${h.colors.palette.light[400]};
      border-color: ${h.colors.palette.light[600]};
      &:hover {
        color: ${h.colors.black};
        background-color: ${h.colors.palette.light[600]};
      }
    `:null;return n.css`
      ${y.styleUtils.toBackgroundEmotionStyle(null!==(r=null===(a=f.main)||void 0===a?void 0:a.background)&&void 0!==r?r:{})};
      left: ${s?l:null};
      right: ${s?u:null};
      margin-left: ${s?null:l};
      margin-right: ${s?null:u};
      pointer-events: auto;
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
          ${c};
          svg {
            margin-right: 0;
            margin-left: 0;
          }
        }
      }
    `}(),ref:b,"data-screenid":a,"data-index":e.index},(0,n.jsx)(c,{layouts:m.layout,isInWidget:!0}),(0,n.jsx)("div",{className:"spacing-area"}),p&&!v&&(0,n.jsx)("div",{className:"toggle-visible-btn",onClick:S,"data-testid":"toggleBtn"},(0,n.jsx)(y.Tooltip,{placement:"auto",title:g("showInDesignView")},(0,n.jsx)(y.Button,{type:"default",size:"sm",className:"rounded"},(0,n.jsx)(hn,{size:"m"}))))))}function vn(e,t,o,i,a){return e===n.ScreenTransitionType.Fade?n.css`
      position: sticky;
      height: ${t}px;
      top: 0;

      body:not(.design-mode) & {
        height: ${o>0?`calc(100vh - ${o}px)`:"100vh"};
        height: ${o>0?`calc(var(--vh) * 100 - ${o}px)`:"calc(var(--vh) * 100)"};
        top: ${o>0?`${o}px`:0};
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
          pointer-events: auto;
          z-index: 1;

          .layout .exb-drop-area {
            pointer-events: auto;
          }
        }
      }
    `:e===n.ScreenTransitionType.Cover?n.css`
      position: sticky;
      height: ${t}px;
      overflow: hidden;
      top: 0;

      body:not(.design-mode) & {
        height: 100%;
        overflow: unset;
        position: relative;

        .screen-main-panel {
          top: ${o>0?`${o}px`:0};
        }
      }

      & > div:first-of-type {
        margin-top: 0 !important;
      }

      .screen-main-panel {
        position: sticky;
        top: 0;
        margin-top: ${1===a?"0 !important":null};

        .spacing-area {
          display: none;
        }
      }
    `:e===n.ScreenTransitionType.Push?n.css`
      position: sticky;
      height: ${t}px;
      overflow: hidden;
      top: 0;

      body:not(.design-mode) & {
        height: auto;
        overflow: unset;

        .screen-main-panel > .layout {
          top: ${o>0?`${o}px`:0};
        }
      }

      .screen-main-panel > .layout {
        position: sticky !important;
        top: 0;
      }
    `:void 0}function mn(e,t,o){return e===n.ScreenTransitionType.Fade?n.css`
      height: calc(100% - ${t}px);
      background: transparent;
      pointer-events: none;

      body:not(.design-mode) & {
        height: calc(100% - 100vh);
        height: calc(100% - var(--vh) * 100);
      }
    `:e===n.ScreenTransitionType.Cover||e===n.ScreenTransitionType.Push?n.css`
      height: calc(100% - ${t}px);
      background: transparent;
      pointer-events: none;
      display: block;

      body:not(.design-mode) & {
        height: calc(100% - 100vh);
        height: calc(100% - var(--vh) * 100);
        display: none;
      }
    `:void 0}function In(e){const{rootLayoutId:t,activeIndex:o,viewHeight:i,headerHeight:a,screens:r,transitionType:s,isSmallSize:l,layoutEntry:u,isDesignMode:d,formatMessage:c,builderTheme:p}=e;return(0,n.jsx)(n.React.Fragment,null,(0,n.jsx)("div",{className:"screen-container",css:vn(s,i,a,l,r.length)},r.map(((e,g)=>(0,n.jsx)(fn,{key:e,rootLayoutId:t,index:g,isActive:o===g,screenId:e,viewHeight:i,headerHeight:a,isAbsolute:s===n.ScreenTransitionType.Fade,isLast:g===r.length-1,isSmallSize:l,layoutEntry:u,isDesignMode:d,formatMessage:c,builderTheme:p})))),(0,n.jsx)("div",{className:"screen-placeholder",css:mn(s,i)}))}function wn(e,t){return n.css`
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
        padding-top: ${Math.round(33)}vh;
        padding-top: calc(var(--vh) * ${Math.round(33)});
      }

      /* > div:nth-last-of-type(2) {
        min-height: 100vh;
      } */
    }

    &.small-size .main-panels {
      z-index: ${t?0:1};
    }

    &.small-size .side-panels {
      z-index: ${t?1:0};
    }

    &.print-preview {
      .screen-container {
        height: auto;
        position: relative;

        .screen-main-panel {
          position: relative;
          opacity: 1 !important;
        }
      }
      .screen-side-panel {
        min-height: calc(var(--vh) * 100);
        opacity: 1 !important;
        .panel-spacing {
          display: none;
        }
      }
      .screen-placeholder {
        display: none;
      }
    }
  `}function xn(e){var t;const{layoutId:o,layoutItemId:i,layoutItem:r}=e,{screenGroupId:s}=r,l=n.ReactRedux.useSelector((e=>e.appConfig.screenGroups[r.screenGroupId])),u=n.ReactRedux.useSelector((e=>{var t,n;return null!==(n=null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.isPrintPreview)&&void 0!==n&&n})),d=n.ReactRedux.useSelector((e=>e.appConfig.screenGroups[r.screenGroupId].screens.some((t=>null!=e.appConfig.screens[t].panel)))),c=n.ReactRedux.useSelector((e=>e.browserSizeMode)),{pageId:p}=n.React.useContext(a),g=n.ReactRedux.useSelector((e=>{const t=e.appConfig.pages[p];if(null==t?void 0:t.header){const t=e.appConfig.header;if(null==t?void 0:t.sticky){const n=e.browserSizeMode,o=e.appConfig.mainSizeMode,i=t.height[n]||t.height[o]||75;return parseInt(i,10)}}return 0})),{screens:y,stretchPanel:h=!0,triggerType:f=n.ScreenTriggerType.Bottom,verticalSpace:v="0",panelTransitionType:m=n.ScreenTransitionType.Push}=l;let I=u?null:null!==(t=l.transitionType)&&void 0!==t?t:n.ScreenTransitionType.Fade;u||c!==n.BrowserSizeMode.Small||d||(I=n.ScreenTransitionType.Cover);const w=n.ReactRedux.useSelector((e=>{var t;return null===(t=e.appRuntimeInfo.screenGroupNavInfos)||void 0===t?void 0:t[s]})),x=n.React.useRef(),b=n.React.useRef(),S=n.React.useRef(),[T,C]=n.React.useState(0),R=n.React.useMemo((()=>{var e,t,o;if(c!==n.BrowserSizeMode.Small)return!1;const i=(0,n.getAppStore)().getState().appConfig,a=null===(t=null===(e=i.screenGroups)||void 0===e?void 0:e[s])||void 0===t?void 0:t.screens;return!!(null==a?void 0:a[T])&&(null===(o=i.screens[a[T]].panel)||void 0===o?void 0:o.overlay)}),[s,T,c]);n.React.useEffect((()=>{null!=(null==w?void 0:w.activeIndex)&&w.activeIndex!==T&&C(w.activeIndex)}),[w,T]);const j=n.React.useCallback(((e,t)=>{t&&e!==T?(0,n.getAppStore)().dispatch(n.appActions.screenGroupNavInfoChanged(s,e,!1)):!t&&e>0&&(0,n.getAppStore)().dispatch(n.appActions.screenGroupNavInfoChanged(s,e-1,!1))}),[T,s]),$=n.React.useCallback((()=>{if(!b.current)return;const e=b.current.children[0],t=b.current.children[1],n=t.childElementCount;for(let o=0;o<n;o++){const n=t.children[o],i=n.getAttribute("data-screenid"),a=e.querySelector(`[data-screenid="${i}"]`);a&&(a.style.height=u?`${n.clientHeight}px`:null)}e.style.height=`${t.clientHeight}px`}),[u]),P=n.React.useMemo((()=>n.lodash.debounce($,200)),[$]),M=n.React.useCallback(((e,t)=>{if(!b.current)return;const o=b.current.children[0],i=b.current.children[1];if(I!==n.ScreenTransitionType.Fade)if(I!==n.ScreenTransitionType.Cover){if(I===n.ScreenTransitionType.Push){const t=o.querySelector(`div.screen-main-panel[data-index="${e}"]`),n=i.querySelector(`div.screen-side-panel[data-index="${e}"]`);t.style.height=`${n.clientHeight}px`,o.style.height=`${i.clientHeight}px`}}else!function(e,t,o){const i=e.querySelectorAll("div.screen-main-panel"),a=t.querySelectorAll("div.screen-side-panel"),r=i.length;for(let e=1;e<r;e++){const t=i.item(e),n=i.item(e-1),o=a.item(e-1);t.style.marginTop=o.clientHeight-n.clientHeight+"px"}o!==n.BrowserSizeMode.Small&&(e.style.height=`${t.clientHeight}px`)}(o,i,c);else o.style.height=`${i.clientHeight}px`}),[c,I]);return y.length>0?(0,n.jsx)("div",{className:(0,n.classNames)("flow-layout-item",{"print-preview":u,"small-size":c===n.BrowserSizeMode.Small}),css:wn(0,R),"data-layoutitemid":i,"data-layoutid":o,ref:x},(0,n.jsx)("div",{className:"screen-group",ref:b},(0,n.jsx)("div",{className:"main-panels",ref:S},(0,n.jsx)(In,{rootLayoutId:o,activeIndex:T,screens:y,transitionType:I,layoutEntry:st,headerHeight:g,isSmallSize:c===n.BrowserSizeMode.Small})),(0,n.jsx)("div",{className:"side-panels"},y.map(((e,t)=>(0,n.jsx)(pn,{key:e,index:t,isLast:t===y.length-1,screenId:e,refElement:null,layoutEntry:st,isActive:t===T,stretched:h,triggerType:f,verticalSpace:v,transitionType:m,screenTransitionType:I,onHeightChange:M,onInterctionChange:j,isSmallSize:c===n.BrowserSizeMode.Small,headerHeight:g}))),(0,n.jsx)(n.ReactResizeDetector,{handleHeight:!0,onResize:P})))):null}class bn extends n.React.PureComponent{constructor(e){super(e);const t=n.ExtensionManager.getInstance().getExtensions(`${n.extensionSpec.ExtensionPoints.LayoutTransformer}`);if(t&&t.length>0){const e=t.find((e=>e.layoutType===this.props.layout.type));this.layoutTransform=null==e?void 0:e.transformLayout}}_createItem(e,t,o){var i;const{layout:a}=this.props;return(null==e?void 0:e.isPending)?null:e.type===n.LayoutItemType.ScreenGroup?(0,n.jsx)(xn,{key:`${e.id}_${t}`,itemIndex:t,layoutId:a.id,layoutItemId:e.id,layoutItem:e}):(null===(i=e.setting)||void 0===i?void 0:i.isFloating)?(0,n.jsx)(rn,{key:e.id,index:t,gutter:o.gutter,layoutId:a.id,layoutItemId:e.id,layoutItem:e}):(0,n.jsx)(an,{key:e.id,index:t,gutter:o.gutter,layoutId:a.id,layoutItemId:e.id,layoutItem:e})}render(){const{layout:e,className:t,style:o,layouts:i,browserSizeMode:r}=this.props;return e?(0,n.jsx)(a.Consumer,null,(a=>{let s=e;if(i[r]!==e.id&&this.layoutTransform){let t;Object.keys(i).some((n=>{if(i[n]===e.id)return t=n,!0})),s=this.layoutTransform(e,t,r)}const l=s.order||[],u=n.lodash.assign({},en,s.setting),d=Object.assign(Object.assign(Object.assign({},o),y.styleUtils.toCSSStyle(u.style)),{position:"relative"}),c=(0,n.classNames)("layout flow-layout w-100",t);return(0,n.jsx)("div",{className:c,style:d,"data-layoutid":e.id},(0,n.jsx)(n.OneByOneAnimation,{"data-layoutid":s.id,enableScroll:!0,className:"trail-container d-flex flex-column align-items-center",css:n.css`
                  width: 100%;
                `},l.map(((e,t)=>this._createItem(s.content[e],t,u)))))})):null}}const Sn=n.ReactRedux.connect(L)(bn);function Tn(e){const{pageJson:t,visible:o,pageContext:i,browserSizeMode:r,isPrintPreview:s}=e,[l,d]=n.React.useState(),c=t.layout,p=!s&&t.oneByOneEffect&&t.oneByOneEffect.type!==n.AnimationType.None?t.oneByOneEffect:null,g=p?!o:null;n.React.useEffect((()=>{p&&d(Symbol("autoplay when switching to visible"))}),[o]),n.React.useEffect((()=>{var e;if(o&&c){const t=(0,n.getAppStore)().getState().appConfig,o=c[t.mainSizeMode],i=null===(e=t.layouts[o])||void 0===e?void 0:e.type,a=document.getElementsByTagName("html")[0];i===n.LayoutType.FlowLayout?a.classList.add("scrollable"):a.classList.remove("scrollable")}}),[o]);const y=n.React.useMemo((()=>({trigger:n.AnimationTriggerType.Manual,setting:p,revert:g,inheritedOneByOneSetting:null,playId:p?l:null,depth:0})),[p,g,l]);let h;t.mode!==n.PageMode.FitWindow&&t.maxWidth>0&&(h=t.maxWidth);const f=n.React.useMemo((()=>Object.assign(Object.assign({},i),{maxWidth:h,viewOnly:!0,pageId:t.id})),[i,h,t.id]);if(c)return(0,n.jsx)(a.Provider,{key:t.id,value:f},(0,n.jsx)(u.Provider,{value:o},(0,n.jsx)("div",{id:t.id,"data-pageid":t.id,className:"page",style:{display:o?"flex":"none",backgroundColor:t.bodyBackgroundColor||"transparent",height:"auto",flex:"1 0 auto",zIndex:1}},(0,n.jsx)(n.AnimationContext.Provider,{value:y},(0,n.jsx)(st,{layouts:c,className:"w-100 flex-grow-1",css:n.css`
                margin: 0 auto;
                background-color: transparent;
              `})))))}function Cn(e){var t,o;const{headerJson:i,visible:r,browserSizeMode:s,theme:l,mainSizeMode:d,pageContext:c}=e,p=i.height[s]||i.height[d]||50,g=i.layout;let y;i.backgroundIMage&&("string"==typeof i.backgroundIMage?y=i.backgroundIMage:"object"==typeof i.backgroundIMage&&(y=i.backgroundIMage.url));const h=n.React.useMemo((()=>{var e;return n.css`
      display: ${r?"flex":"none"};
      position: ${i.sticky?"sticky":"relative"};
      z-index: ${i.sticky?2:"auto"};
      top: 0;
      width: 100%;
      min-height: ${Math.round(parseFloat(p))}px;
      height: auto;
      overflow: hidden;
      background-color: ${i.backgroundColor||l.header.bg||"transparent"};
      background-image: ${y};
      background-position: ${i.backgroundPosition};
      color: ${null===(e=null==l?void 0:l.header)||void 0===e?void 0:e.color};
      flex: 0 0 auto;
    `}),[r,p,i.sticky,i.backgroundColor,y,i.backgroundPosition,null===(t=null==l?void 0:l.header)||void 0===t?void 0:t.bg,null===(o=null==l?void 0:l.header)||void 0===o?void 0:o.color]),f=n.React.useMemo((()=>Object.assign(Object.assign({},c),{viewOnly:!0})),[c]);return(0,n.jsx)(a.Provider,{value:f},(0,n.jsx)(u.Provider,{value:r},(0,n.jsx)("div",{className:"header",css:h},(0,n.jsx)(st,{layouts:g,className:"w-100 flex-grow-1"}))))}function Rn(e){var t,o;const{footerJson:i,visible:r,browserSizeMode:s,theme:l,mainSizeMode:d,pageContext:c}=e,p=i.height[s]||i.height[d]||50,g=i.layout;let y;i.backgroundIMage&&("string"==typeof i.backgroundIMage?y=i.backgroundIMage:"object"==typeof i.backgroundIMage&&(y=i.backgroundIMage.url));const h=n.React.useMemo((()=>{var e;return n.css`
      display: ${r?"flex":"none"};
      width: 100%;
      min-height: ${Math.round(parseFloat(p))}px;
      height: auto;
      overflow: hidden;
      background-color: ${i.backgroundColor||l.footer.bg||"transparent"};
      background-image: ${y};
      background-position: ${i.backgroundPosition};
      color: ${null===(e=null==l?void 0:l.footer)||void 0===e?void 0:e.color};
      z-index: 0;
    `}),[r,p,i.backgroundColor,y,i.backgroundPosition,null===(t=null==l?void 0:l.footer)||void 0===t?void 0:t.bg,null===(o=null==l?void 0:l.footer)||void 0===o?void 0:o.color]),f=n.React.useMemo((()=>Object.assign(Object.assign({},c),{viewOnly:!0})),[c]);return(0,n.jsx)(a.Provider,{value:f},(0,n.jsx)(u.Provider,{value:r},(0,n.jsx)("div",{className:"footer",css:h},(0,n.jsx)(st,{layouts:g,className:"w-100 flex-grow-1"}))))}var jn=r(5339),$n=r.n(jn);const Pn=e=>{const{className:t}=e,o=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(n[o[i]]=e[o[i]])}return n}(e,["className"]),i=(0,n.classNames)("jimu-icon jimu-icon-component",t);return n.React.createElement(y.SVG,Object.assign({className:i,src:$n()},o))},Mn=n.css`
  display: flex;
  height: 64px;
  background: var(--dark-700);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1500;

  .jimu-btn {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .label {
    white-space: nowrap;
  }

  @media print {
    & {
      display: none;
    }
  }
`;function On(){const e=n.i18n.getIntl(),t=n.React.useCallback((t=>e.formatMessage({id:t})),[e]),o=y.hooks.useEventCallback((()=>{n.jimuHistory.changeQueryObject({print_preview:null}),(0,n.getAppStore)().dispatch(n.appActions.quitPrintPreview())})),i=y.hooks.useEventCallback((()=>{window.print()}));return(0,n.jsx)("div",{className:"print-preview-tool shadow-lg",css:Mn},(0,n.jsx)("div",{className:"d-flex justify-content-center align-items-center flex-grow-1"},(0,n.jsx)(y.Button,{"aria-label":t("printCurrentPage"),type:"primary",onClick:i},t("printCurrentPage"))),(0,n.jsx)(y.Button,{className:"ml-auto",icon:!0,type:"tertiary","aria-label":t("close"),onClick:o},(0,n.jsx)(Pn,{color:"var(--white)"})))}ot(n.LayoutType.FixedLayout,$t),ot(n.LayoutType.FlowLayout,Sn),ot(n.LayoutType.GridLayout,qt),ot(n.LayoutType.ColumnLayout,kt);class kn extends n.React.PureComponent{constructor(e){super(e),this.isMac=()=>{var e,t;return"macOS"===(null===(t=null===(e=window.jimuUA)||void 0===e?void 0:e.os)||void 0===t?void 0:t.name)},n.ExtensionManager.getInstance().registerExtension({epName:n.extensionSpec.ExtensionPoints.LayoutTransformer,extension:new Kt}),n.ExtensionManager.getInstance().registerExtension({epName:n.extensionSpec.ExtensionPoints.LayoutTransformer,extension:new Qt}),this.pageContext={theme:this.props.theme},window.jimuConfig.isBuilder||(this.isMac()?this.keyBindings={"command+keyp":this.handlePrintEvent}:this.keyBindings={"ctrl+keyp":this.handlePrintEvent})}componentDidUpdate(e){Ln(e.pageStatus)!==Ln(this.props.pageStatus)&&(document.getElementsByTagName("html")[0].scrollTop=0)}handlePrintEvent(e){(0,n.getAppStore)().dispatch(n.appActions.activePrintPreview()),n.jimuHistory.changeQueryObject({print_preview:!0}),e.cancelBubble=!0,e.preventDefault(),e.stopImmediatePropagation()}render(){const{pageStatus:e,pages:t,theme:o,isPrintPreview:i}=this.props,a=Ln(e);if(!a||!(null==t?void 0:t[a]))return null;let r="100%";const s=t[a]||{};s&&!isNaN(+s.width)&&(r=+s.width+"px");const l=n.css`
      width: ${r};
      margin: 0 auto;
      min-height: 100%;
      overflow: auto;
      height: 100%;
      background-color: ${s&&s.backgroundColor};

      html.scrollable & {
        height: auto;
        overflow: unset;
        min-height: 100vh;
      }
    `;return(0,n.jsx)("div",{className:"page-renderer d-flex flex-column",css:l,ref:e=>{this.pageRef=e},"data-testid":"pageRenderer"},this.renderDialog(),this.renderHeader(),Object.keys(e).map((e=>this.renderPageBody(e,o))),this.renderFooter(),i&&(0,n.jsx)(On,null),(0,n.jsx)(n.Keyboard,{bindings:this.keyBindings}))}renderHeader(){if(!this.props.header)return null;const{header:e,headerVisible:t,browserSizeMode:o,theme:i,mainSizeMode:a}=this.props;return(0,n.jsx)(Cn,{headerJson:e,pageContext:this.pageContext,visible:t,browserSizeMode:o,mainSizeMode:a,theme:i})}renderFooter(){if(!this.props.footer)return null;const{footer:e,footerVisible:t,browserSizeMode:o,mainSizeMode:i,theme:a}=this.props;return(0,n.jsx)(Rn,{footerJson:e,pageContext:this.pageContext,visible:t,browserSizeMode:o,mainSizeMode:i,theme:a})}renderPageBody(e,t){const{pageStatus:o,pages:i,isPrintPreview:a}=this.props,r=i[e];if(!r)return;const s=!!o[e];return(0,n.jsx)(Tn,{key:r.id,pageJson:r,pageContext:this.pageContext,browserSizeMode:this.props.browserSizeMode,visible:s,isPrintPreview:a})}renderDialog(){const{dialogId:e,urlDialogJson:t,splashDialogJson:o,isSplashClosed:i,isPageDlgClosed:r,pageDialogJson:s,pageDialogId:l}=this.props;return(0,n.jsx)(n.React.Fragment,null,t&&(0,n.jsx)(a.Provider,{value:Object.assign(Object.assign({},this.pageContext),{dialogId:e,viewOnly:!0})},(0,n.jsx)(n.AppDialog,{dialogJson:t,runtime:!0})),!r&&s&&(null==t?void 0:t.id)!==s.id&&(0,n.jsx)(a.Provider,{value:Object.assign(Object.assign({},this.pageContext),{dialogId:l,viewOnly:!0})},(0,n.jsx)(n.AppDialog,{dialogJson:s,runtime:!0,isOpenByPage:!0})),!i&&o&&(null==t?void 0:t.id)!==o.id&&(0,n.jsx)(a.Provider,{value:Object.assign(Object.assign({},this.pageContext),{dialogId:o.id,viewOnly:!0})},(0,n.jsx)(n.AppDialog,{dialogJson:o,runtime:!0})))}}function Ln(e){return Object.keys(e).find((t=>e[t]))}kn.displayName="RuntimePageRenderer";const En=n.ReactRedux.connect(((e,t)=>{var n,o,i,a,r,s,l,u;const d=Ln(t.pageStatus);if(!d||!e.appConfig.pages[d])return{};const c=window.jimuConfig.isBuilder?e.appStateInBuilder:e,p=null===(n=null==c?void 0:c.appRuntimeInfo)||void 0===n?void 0:n.dialogInfos,g=null===(o=null==c?void 0:c.appRuntimeInfo)||void 0===o?void 0:o.currentPageId,y=null===(a=null===(i=null==c?void 0:c.appConfig)||void 0===i?void 0:i.pages[g])||void 0===a?void 0:a.autoOpenDialogId,h=e.appConfig.dialogs,f=h[Object.keys(h).find((e=>h[e].isSplash))];return{pages:e.appConfig.pages,header:e.appConfig.header,headerVisible:!!e.appConfig.pages[d].header,footer:e.appConfig.footer,footerVisible:!!e.appConfig.pages[d].footer,browserSizeMode:e.browserSizeMode,mainSizeMode:e.appConfig.mainSizeMode,splashDialogJson:f,isSplashClosed:null===(r=null==p?void 0:p[null==f?void 0:f.id])||void 0===r?void 0:r.isClosed,pageDialogId:y,pageDialogJson:h[y],isPageDlgClosed:null===(s=null==p?void 0:p[g+"-"+y])||void 0===s?void 0:s.isClosed,urlDialogJson:h[t.dialogId],isPrintPreview:null!==(u=null===(l=e.appRuntimeInfo)||void 0===l?void 0:l.isPrintPreview)&&void 0!==u&&u}}))((0,lt.withTheme)(kn));function An(){return e=this,t=void 0,o=function*(){return yield Promise.all([i()])},new((n=void 0)||(n=Promise))((function(i,a){function r(e){try{l(o.next(e))}catch(e){a(e)}}function s(e){try{l(o.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,s)}l((o=o.apply(e,t||[])).next())}));var e,t,n,o}})(),s})())}}}));