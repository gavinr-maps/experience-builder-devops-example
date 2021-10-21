System.register(["jimu-core","jimu-ui"],(function(e,t){var n={},o={};return{setters:[function(e){n.Animation=e.Animation,n.AnimationContext=e.AnimationContext,n.AnimationPlayMode=e.AnimationPlayMode,n.AnimationTriggerType=e.AnimationTriggerType,n.AnimationType=e.AnimationType,n.AppDialog=e.AppDialog,n.AppMode=e.AppMode,n.BrowserSizeMode=e.BrowserSizeMode,n.ContainerType=e.ContainerType,n.ErrorBoundary=e.ErrorBoundary,n.ExtensionManager=e.ExtensionManager,n.Immutable=e.Immutable,n.Keyboard=e.Keyboard,n.LayoutItemType=e.LayoutItemType,n.LayoutType=e.LayoutType,n.OneByOneAnimation=e.OneByOneAnimation,n.PageMode=e.PageMode,n.PagePart=e.PagePart,n.React=e.React,n.ReactRedux=e.ReactRedux,n.ReactResizeDetector=e.ReactResizeDetector,n.RootContainerType=e.RootContainerType,n.ScreenTransitionType=e.ScreenTransitionType,n.ScreenTriggerType=e.ScreenTriggerType,n.TransitionContainer=e.TransitionContainer,n.WidgetManager=e.WidgetManager,n.WidgetState=e.WidgetState,n.WidgetType=e.WidgetType,n.appActions=e.appActions,n.classNames=e.classNames,n.css=e.css,n.extensionSpec=e.extensionSpec,n.getAppStore=e.getAppStore,n.getIndexFromProgress=e.getIndexFromProgress,n.i18n=e.i18n,n.jimuHistory=e.jimuHistory,n.jsx=e.jsx,n.lodash=e.lodash,n.polished=e.polished,n.translatedLocales=e.translatedLocales},function(e){o.Button=e.Button,o.FOCUSABLE_CONTAINER_CLASS=e.FOCUSABLE_CONTAINER_CLASS,o.FillType=e.FillType,o.Icon=e.Icon,o.Tooltip=e.Tooltip,o.UnitTypes=e.UnitTypes,o.styleUtils=e.styleUtils}],execute:function(){e((()=>{var e={5467:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 12c-2.667 0-5.667-1.333-7-4 1.333-2.667 4.333-4 7-4s5.667 1.333 7 4c-1.333 2.667-4.333 4-7 4zm0-7c-2.618 0-4.578.967-6 3 1.422 2.033 3.382 3 6 3s4.578-.967 6-3c-1.422-2.033-3.382-3-6-3zm0 5.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5zm0-1a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill="#000"></path></svg>'},1407:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.347 2.146a.485.485 0 010 .708L5.76 8l5.587 5.146a.486.486 0 010 .708.538.538 0 01-.738 0l-5.956-5.5a.485.485 0 010-.708l5.956-5.5a.538.538 0 01.738 0z" fill="#000"></path></svg>'},3273:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.653 13.854a.485.485 0 010-.708L10.24 8 4.653 2.854a.485.485 0 010-.708.538.538 0 01.738 0l5.956 5.5a.485.485 0 010 .708l-5.956 5.5a.538.538 0 01-.738 0z" fill="#000"></path></svg>'},1810:e=>{"use strict";e.exports=n},1835:e=>{"use strict";e.exports=o}},t={};function i(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,i),a.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return(()=>{"use strict";i.r(a),i.d(a,{CLICK_TOLRERANCE:()=>I,COLS_IN_ONE_ROW:()=>h,CONTEXT_MENU_ICON_SIZE:()=>v,CONTEXT_MENU_ITEM_SIZE:()=>f,ColumnLayoutViewer:()=>Pt,DEFAULT_AUTOPLAY_INTERVAL:()=>w,FixedLayoutViewer:()=>jt,LayoutContext:()=>c,LayoutEntry:()=>st,LayoutItem:()=>St,LayoutItemSizeModes:()=>b,LayoutZIndex:()=>x,MIN_LAYOUT_ITEM_SIZE:()=>m,OrderAdjustType:()=>p,PageContext:()=>s,PageRenderer:()=>Tn,PageVisibilityContext:()=>u,ParentType:()=>g,RowLayoutViewer:()=>Bt,SectionRenderer:()=>wt,ViewVisibilityContext:()=>d,ViewportVisibilityContext:()=>l,WidgetRenderer:()=>Qe,defaultMessages:()=>o,findLayoutBuilder:()=>it,findLayoutViewer:()=>at,init:()=>Cn,registerLayoutBuilder:()=>nt,registerLayoutViewer:()=>ot,searchUtils:()=>t,utils:()=>e});var e={};i.r(e),i.d(e,{autoBindHandlers:()=>C,calHeightOfLayoutItem:()=>U,contains:()=>te,emptyFunc:()=>T,expandStyleArray:()=>G,fromRatio:()=>P,gcd:()=>ae,getActivePagePart:()=>Z,getAppConfig:()=>_,getBuilderThemeVariables:()=>W,getCurrentDialogId:()=>J,getCurrentDialogRootLayoutId:()=>q,getCurrentPageId:()=>Y,getCurrentPageRootLayoutId:()=>K,getCurrentSizeMode:()=>X,getFooterRootLayoutId:()=>ee,getHeaderRootLayoutId:()=>Q,getLayoutItemSizeMode:()=>ie,getMaximumId:()=>R,getValueOfBBox:()=>M,handleOnebyOneAnimation:()=>re,intersects:()=>ne,isFunctionalWidget:()=>z,isNumber:()=>$,isPercentage:()=>j,isRTL:()=>D,isWidgetHasEmbeddedLayout:()=>A,isWidgetPlaceholder:()=>N,mapStateToLayoutItemProps:()=>L,mapStateToLayoutProps:()=>k,mapStateToWidgetProps:()=>E,normalizeLinearUnit:()=>oe,parseAspectRatio:()=>H,relativeClientRect:()=>V,replaceBoundingBox:()=>B,toRatio:()=>O,updateBoundingBoxProp:()=>F});var t={};i.r(t),i.d(t,{buildLayoutStructure:()=>de,findLayoutId:()=>Pe,findLayoutItem:()=>pe,findParentLayoutItem:()=>ce,findParentScreenId:()=>he,findParentViewId:()=>ye,findSectionId:()=>ge,getBlockAnchorPointsInPage:()=>De,getBrowserSizeModeByLayoutId:()=>Ne,getBrowserSizeModeByLayoutIdAndWidgetId:()=>ze,getChildrenContents:()=>Ee,getContainerLayoutItem:()=>we,getContentContainerInfo:()=>Te,getContentIdInLayoutItem:()=>fe,getContentLayoutInfosInOneSizeMode:()=>Ae,getContentRootContainerInfo:()=>Ce,getContentsInLayout:()=>ve,getContentsInLayoutRecursive:()=>me,getContentsInLayoutWithLayoutWidgetOnly:()=>Ie,getContentsInPageBody:()=>Re,getContentsInPageFooter:()=>Oe,getContentsInPageHeader:()=>Me,getContentsInScreen:()=>je,getContentsInTheSameContainer:()=>We,getContentsInView:()=>$e,getLayoutInfosByType:()=>be,getLayoutInfosHoldcontent:()=>ke,getLayoutItemIds:()=>xe,getParentWidgetIdOfContent:()=>Le,getPendingLayoutItemsFromOtherSizeMode:()=>Ze,getPendingLayoutItemsFromOtherSizeModeInDialog:()=>Ye,getPendingLayoutItemsFromOtherSizeModeInPage:()=>_e,getPendingLayoutItemsInDialog:()=>Xe,getPendingLayoutItemsInLayoutWithDeep:()=>Je,getPendingLayoutItemsInPage:()=>Ue,getRelatedLayoutInfosInWidgetByLayoutInfo:()=>Be,getRelatedLayoutItemsInWidgetByLayoutInfo:()=>Fe,getScreenAnchorPointsInPage:()=>He,getSectionInfo:()=>Ge,getWidgetIdThatUseTheLayoutId:()=>Se});var n=i(1810);const o={previousView:"Previous view",nextView:"Next view",originTL:"Top left as origin",originTR:"Top right as origin",originBL:"Bottom left as origin",originBR:"Bottom right as origin",alignLeft:"Align left",alignRight:"Align right",alignTop:"Align top",alignCenter:"Align center",alignHCenter:"Horizontal center",alignVCenter:"Vertical center",alignBottom:"Align bottom",alignStretch:"Align stretch",sendBackward:"Send backward",bringForward:"Bring forward",sendToBack:"Send to back",bringToFront:"Bring to front",zoomoutFixed:"Zoom out fixed",order:"Order",moveToLeft:"Move to left",moveToRight:"Move to right",moveToTop:"Move to top",moveToBottom:"Move to bottom",addView:"Add view",duplicateScreen:"Duplicate screen",deleteScreen:"Delete screen",applyToFirstPanel:"Apply to the first panel",deleteView:"Delete view",duplicateView:"Duplicate view",insertABlock:"Insert block",insertAScreenGroup:"Insert screen group",moveup:"Move up",movedown:"Move down",chooseTemplate:"Choose a {type} template",chooseHeaderTemplate:"Choose a header template",chooseFooterTemplate:"Choose a footer template",dropWidgetToAdd:"Or drag a widget here",snapToLeft:"Snap to left",snapToTop:"Snap to top",snapToBottom:"Snap to bottom",snapToRight:"Snap to right",fullWidth:"Full width",fullHeight:"Full height",fullSize:"Full size",restoreSize:"Restore size",pendingTip:"Move to the pending list",setting:"Settings",dragToMove:"Drag to move",lockLayout:"Lock position and size",unlockLayout:"Unlock position and size",editHeader:"Edit header",editFooter:"Edit footer",transform:"Transform",rotation:"Rotation",angle:"Angle",floating:"Pin",sinking:"Unpin",floatingArea:"Floating area",changeToAuto:"Change to auto",changeToCustom:"Change to custom",positionType:"Position type",sticky:"Sticky",fixed:"Fixed",flow:"Flow",stack:"Stack",fixedAtTop:"Floating at the top when scrolling",actNormal:"Act as normal widget",hideInDesignView:"Hide in design view",showInDesignView:"Show in design view"};function r(){return e=this,t=void 0,a=function*(){let e=(0,n.getAppStore)().getState().appContext.locale;return e=n.i18n.getLocaleToLoad(e,n.translatedLocales),e?yield n.i18n.loadLocaleMessages("jimu-layouts/lib/translations",e).then((e=>((0,n.getAppStore)().dispatch(n.appActions.i18nMessagesLoaded("jimu-layouts",e)),e))):Promise.resolve(o)},new((i=void 0)||(i=Promise))((function(n,o){function r(e){try{l(a.next(e))}catch(e){o(e)}}function s(e){try{l(a.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,s)}l((a=a.apply(e,t||[])).next())}));var e,t,i,a}const s=n.React.createContext({viewOnly:!0}),l=n.React.createContext(!0),u=n.React.createContext(!0),d=n.React.createContext({isInView:!1,isInCurrentView:!1}),c=(n.React.createContext(""),n.React.createContext({}));var p,g,y=i(1835);!function(e){e[e.BringForward=0]="BringForward",e[e.SendBackward=1]="SendBackward",e[e.BringToFront=2]="BringToFront",e[e.SendToBack=3]="SendToBack"}(p||(p={})),function(e){e.Page="PAGE",e.Widget="WIDGET",e.View="VIEW",e.Screen="SCREEN"}(g||(g={}));const h=12,f=28,v=16,m=16,I=5,w=3;var x,b,S;!function(e){e.Auto="auto",e[e.Normal=0]="Normal",e[e.BoundaryDropArea=10]="BoundaryDropArea",e[e.DragMoveTip=20]="DragMoveTip",e[e.HandlerTools=30]="HandlerTools",e[e.DraggingItem=40]="DraggingItem"}(x||(x={})),(S=b||(b={})).Auto="AUTO",S.Stretch="STRETCH",S.Custom="CUSTOM";const T=()=>{};function C(e,t){t.forEach((t=>{e[t]&&(e[t]=e[t].bind(e))}))}function R(e){let t=-1;return e.content&&Object.keys(e.content).forEach((e=>{const n=parseInt(e,10);n>t&&(t=n)})),t}function j(e){return/^-?\d*(\.\d+)?%$/.test(e)}function $(e){const t=parseFloat(e);return!isNaN(t)&&isFinite(t)}function M(e,t){return null==(null==e?void 0:e[t])?null:"string"==typeof e[t]?e[t]:$(e[t])?`${Math.round(parseFloat(e[t]))}px`:null}function O(e,t){return`${(100*e/t).toFixed(1)}%`}function P(e,t){return parseFloat(`${e}`)*t/100}function k(e,t){var n,o;const i=(null===(n=t.layouts)||void 0===n?void 0:n[e.browserSizeMode])||(null===(o=t.layouts)||void 0===o?void 0:o[e.appConfig.mainSizeMode]),{layouts:a}=e.appConfig;return a[i]?{mainSizeMode:e.appConfig.mainSizeMode,browserSizeMode:e.browserSizeMode,layout:a[i]}:{mainSizeMode:e.appConfig.mainSizeMode,browserSizeMode:e.browserSizeMode,layout:null}}function L(e,t){var o,i,a,r,s,l,u;const d=t.layoutId,{layouts:c,widgets:p}=e.appConfig,g=t.layoutItemId;if(!(null===(i=null===(o=null==c?void 0:c[d])||void 0===o?void 0:o.content)||void 0===i?void 0:i[g]))return{layoutItem:null,selected:!1};let y,h=!1;const f=c[d].content[g];let v=!1;f&&(v=Boolean(f.isPending));const m=null===(a=e.appRuntimeInfo)||void 0===a?void 0:a.selection;m&&(h=m.layoutId===t.layoutId&&m.layoutItemId===f.id,y=m.autoScroll);let I=!1;if(f.type===n.LayoutItemType.Widget&&f.widgetId){const e=p[f.widgetId];I=null!==(l=null===(s=null===(r=null==e?void 0:e.manifest)||void 0===r?void 0:r.properties)||void 0===s?void 0:s.watchViewportVisibility)&&void 0!==l&&l}const w={selected:h,watchViewportVisibility:I,layoutItem:v?null:f};h&&(w.autoScroll=y);const x=null===(u=e.appRuntimeInfo)||void 0===u?void 0:u.animationPreview;if(h&&(null==x?void 0:x.layoutInfo)){const{layoutId:e,layoutItemId:n}=x.layoutInfo;w.animationPreview=e===t.layoutId&&n===t.layoutItemId,w.playMode=w.animationPreview?x.playMode:null,w.previewId=w.animationPreview?x.id:null}return w}function E(e,t){var n,o,i,a,r,s,l,u,d;const c=t.layoutId,{layouts:p}=e.appConfig;if(!p[c])return null;const g=p[c],y=t.layoutItemId,h=g.content[y];let f,v,m,I=!1,w=!1,x=!1,b=!1,S=!1,T=!1,C=!1,R=!1;if(h&&h.widgetId){const t=e.appConfig.widgets[h.widgetId];f=t.style,I=null===(o=null===(n=t.manifest)||void 0===n?void 0:n.properties)||void 0===o?void 0:o.supportInlineEditing,b=null===(a=null===(i=t.manifest)||void 0===i?void 0:i.properties)||void 0===a?void 0:a.supportRepeat,C=null===(s=null===(r=t.manifest)||void 0===r?void 0:r.properties)||void 0===s?void 0:s.canCrossLayoutBoundary;const c=e.widgetsRuntimeInfo[h.widgetId];w=null!==(l=null==c?void 0:c.isClassLoaded)&&void 0!==l&&l,x=I&&(null==c?void 0:c.isInlineEditing),R=(null===(d=null===(u=t.manifest)||void 0===u?void 0:u.extensions)||void 0===d?void 0:d.length)>0,R&&(v=t),m=e.widgetsState[h.widgetId],S=z(h.widgetId,e.appConfig),T=A(h.widgetId,e.appConfig)}return{hasEmbeddedLayout:T,supportInlineEditing:I,supportRepeat:b,isClassLoaded:w,isInlineEditing:x,widgetStyle:f,canCrossLayoutBoundary:C,hasExtension:R,widgetJson:v,widgetId:h.widgetId,isFunctionalWidget:S,widgetState:m}}function A(e,t){var n,o,i,a;const r=null===(n=null==t?void 0:t.widgets)||void 0===n?void 0:n[e];return!!(null===(i=null===(o=null==r?void 0:r.manifest)||void 0===o?void 0:o.properties)||void 0===i?void 0:i.hasEmbeddedLayout)&&Object.keys(null!==(a=null==r?void 0:r.layouts)&&void 0!==a?a:{}).length>0}function z(e,t){var o,i;const a=null===(o=null==t?void 0:t.widgets)||void 0===o?void 0:o[e];return(null===(i=null==a?void 0:a.manifest)||void 0===i?void 0:i.widgetType)!==n.WidgetType.Layout}function N(e,t){var o,i;if(!t||t.itemType!==n.LayoutItemType.Widget)return!1;if(t.layoutInfo){const{layoutId:n,layoutItemId:a}=t.layoutInfo,r=null===(i=null===(o=e.layouts)||void 0===o?void 0:o[n].content)||void 0===i?void 0:i[a];if(r&&!r.widgetId)return!0}return!t.layoutInfo&&!t.uri}function B(e,t,o){if(!e)return(0,n.Immutable)({left:j(t.left)?t.left:`${Math.round(t.left)}px`,right:j(t.right)?t.right:`${Math.round(t.right)}px`,top:j(t.top)?t.top:`${Math.round(t.top)}px`,bottom:j(t.bottom)?t.bottom:`${Math.round(t.bottom)}px`,width:j(t.width)?t.width:`${Math.round(t.width)}px`,height:j(t.height)?t.height:`${Math.round(t.height)}px`});let i=e;return["left","right","top","bottom","width","height"].forEach((e=>{null!=i[e]?i=F(e,i,t[e],o):null!=t[e]&&(i=i.set(e,`${Math.round(t[e])}px`))})),i}function F(e,t,n,o){if(null==t[e]||"auto"===t[e])return t;let i=t;return i=j(t[e])?"left"===e||"right"===e||"width"===e?j(n)?t.set(e,n):t.set(e,`${(100*+n/o.width).toFixed(4)}%`):j(n)?t.set(e,n):t.set(e,`${(100*+n/o.height).toFixed(4)}%`):j(n)?"left"===e||"right"===e||"width"===e?t.set(e,Math.round(parseFloat(`${n}`)*o.width/100)):t.set(e,Math.round(parseFloat(`${n}`)*o.height/100)):isNaN(+n)?t.without(e):t.set(e,`${Math.round(+n)}px`),i}function V(e,t){return{left:e.left-t.left,top:e.top-t.top,right:e.right,bottom:e.bottom,width:e.width,height:e.height,id:null}}function W(){const e=window.parent;if(e&&e.jimuConfig&&e.jimuConfig.isBuilder)return e._appState.theme}function D(){var e,t;return null!==(t=null===(e=(0,n.getAppStore)().getState().appContext)||void 0===e?void 0:e.isRTL)&&void 0!==t&&t}function H(e){let t=100,n=100;if("number"==typeof e)t=100,n=Math.round(100*e);else if("string"==typeof e){const o=e.split(":");t=parseInt(o[0],10),n=parseInt(o[1],10)}return n/t}function G(e){return e&&0!==e.length?1===e.length?[e[0],e[0],e[0],e[0]]:2===e.length?[e[0],e[1],e[0],e[1]]:3===e.length?[e[0],e[1],e[2],0]:[e[0],e[1],e[2],e[3]]:[0,0,0,0]}function U(e,t){var n,o,i,a;const r=null!==(n=t.setting)&&void 0!==n?n:{},s=ie("height",t.bbox,r.autoProps);if(s!==b.Custom)return{height:s===b.Stretch?e:null,setting:{autoProps:{height:s}}};let l;if("ratio"===r.heightMode)l={setting:{heightMode:"ratio",aspectRatio:null!==(o=r.aspectRatio)&&void 0!==o?o:1,autoProps:{height:b.Custom}}};else{let n=null!==(a=null===(i=t.bbox)||void 0===i?void 0:i.height)&&void 0!==a?a:e;n=j(n)?P(n,e):parseInt(n),l={height:n,setting:{heightMode:"fixed",autoProps:{height:b.Custom}}}}return l}function _(){var e;return window.jimuConfig.isBuilder?null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appConfig:(0,n.getAppStore)().getState().appConfig}function X(){var e;return window.jimuConfig.isBuilder?null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.browserSizeMode:(0,n.getAppStore)().getState().browserSizeMode}function Y(){var e,t,o;return window.jimuConfig.isBuilder?null===(t=null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appRuntimeInfo)||void 0===t?void 0:t.currentPageId:null===(o=(0,n.getAppStore)().getState().appRuntimeInfo)||void 0===o?void 0:o.currentPageId}function J(){var e,t,o;return window.jimuConfig.isBuilder?null===(t=null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appRuntimeInfo)||void 0===t?void 0:t.currentDialogId:null===(o=(0,n.getAppStore)().getState().appRuntimeInfo)||void 0===o?void 0:o.currentDialogId}function Z(){var e,t,o;return window.jimuConfig.isBuilder?null===(t=null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appRuntimeInfo)||void 0===t?void 0:t.activePagePart:null===(o=(0,n.getAppStore)().getState().appRuntimeInfo)||void 0===o?void 0:o.activePagePart}function q(){var e,t,o;const i=window.jimuConfig.isBuilder?null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appConfig:(0,n.getAppStore)().getState().appConfig,a=J(),r=X();return null===(o=null===(t=null==i?void 0:i.dialogs[a])||void 0===t?void 0:t.layout)||void 0===o?void 0:o[r]}function K(){var e,t,o;const i=window.jimuConfig.isBuilder?null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appConfig:(0,n.getAppStore)().getState().appConfig,a=Y(),r=X();return null===(o=null===(t=null==i?void 0:i.pages[a])||void 0===t?void 0:t.layout)||void 0===o?void 0:o[r]}function Q(){var e,t,o;const i=window.jimuConfig.isBuilder?null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appConfig:(0,n.getAppStore)().getState().appConfig,a=X();return null===(o=null===(t=null==i?void 0:i.header)||void 0===t?void 0:t.layout)||void 0===o?void 0:o[a]}function ee(){var e,t,o;const i=window.jimuConfig.isBuilder?null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appConfig:(0,n.getAppStore)().getState().appConfig,a=X();return null===(o=null===(t=null==i?void 0:i.footer)||void 0===t?void 0:t.layout)||void 0===o?void 0:o[a]}function te(e,t){return t.left>=e.left&&t.left+t.width<=e.left+e.width&&t.top>=e.top&&t.top+t.height<=e.top+e.height}function ne(e,t){return!(t.left>e.left+e.width||t.left+t.width<e.left||t.top>e.top+e.height||t.top+t.height<e.top)}function oe(e){var t,o,i,a;let r,s;if(null!=e&&"object"==typeof e)r=null!==(t=e.unit)&&void 0!==t?t:y.UnitTypes.PIXEL,s=null!==(o=e.distance)&&void 0!==o?o:0;else{const t=n.polished.getValueAndUnit(e);r=null!==(i=null==t?void 0:t[1])&&void 0!==i?i:y.UnitTypes.PIXEL,s=null!==(a=null==t?void 0:t[0])&&void 0!==a?a:0}return s=r===y.UnitTypes.PERCENTAGE?Math.round(10*s)/10:Math.round(s),`${s}${r}`}function ie(e,t,n){const o=null==n?void 0:n[e],i="width"===e?"left":"top",a="width"===e?"right":"bottom";if(!o)return null!=t[e]?b.Custom:null!=t[i]&&null!=t[a]?b.Stretch:b.Auto;if(!0===o)return null!=t[i]&&null!=t[a]?b.Stretch:b.Auto;switch(o){case b.Auto:return b.Auto;case b.Stretch:return b.Stretch;default:return b.Custom}}function ae(e,t){let n=Math.max(e,t),o=Math.min(e,t);for(;0!==o;){const e=o;o=n%o,n=e}return n}function re(e){if(!e.animationStyle)return{};const{isPlaying:t,revert:n,enableScroll:o,animationStyle:i,playId:a}=e;return{isParentPlaying:t,isParentRevert:n,isParentEnableScroll:o,parentAnimationStyle:i,parentPlayId:a}}const se=n.lodash.assign({},{gridSize:1}),le=n.lodash.assign({},{order:0},{lockParent:!1,lockLayout:!1,autoProps:{}});function ue(e,t){const n=e.layouts[t];if(null!=n)switch(n.parentType){case g.Widget:return e.widgets[n.parent].parent;case g.View:{const t=e.views[n.parent].parent;return e.sections[t].parent}case g.Screen:{const t=e.screens[n.parent].parent;return e.screenGroups[t].parent}}return null}function de(e,t,o,i,a,r){var s;let l=null!=r?r:(0,n.Immutable)({});const u=e.layouts[t];return null!=u&&(l=l.setIn(["layouts",t],{id:t,parent:o,parentType:i}),Object.keys(null!==(s=u.content)&&void 0!==s?s:{}).forEach((o=>{const i=u.content[o];switch(i.type){case n.LayoutItemType.Widget:l=function(e,t,n,o,i){let a=i;const r=e.widgets[n];return null!=r&&(a=a.setIn(["widgets",n],{id:n,parent:o}),null!=r.layouts&&Object.keys(r.layouts).forEach((o=>{const i=r.layouts[o][t];a=de(e,i,n,g.Widget,t,a)}))),a}(e,a,i.widgetId,t,l);break;case n.LayoutItemType.Section:l=function(e,t,n,o,i){let a=i;const r=e.sections[n];return null!=r&&(a=a.setIn(["sections",n],{id:n,parent:o}),r.views.forEach((o=>{a=a.setIn(["views",o],{id:o,parent:n});const i=e.views[o].layout[t];a=de(e,i,o,g.View,t,a)}))),a}(e,a,i.sectionId,t,l);break;case n.LayoutItemType.ScreenGroup:l=function(e,t,n,o,i){let a=i;const r=e.screenGroups[n];return null!=r&&(a=a.setIn(["screenGroups",n],{id:n,parent:o}),r.screens.forEach((o=>{var i;a=a.setIn(["screens",o],{id:o,parent:n});const r=e.screens[o],s=r.main.layout[t];if(a=de(e,s,o,g.Screen,t,a),null!=(null===(i=r.panel)||void 0===i?void 0:i.layout)){const n=r.panel.layout[t];a=de(e,n,o,g.Screen,t,a)}}))),a}(e,a,i.screenGroupId,t,l)}}))),l}function ce(e,t,o,i){var a;const{layoutId:r}=e,s=de(t,o,"",g.Page,i),l=s.layouts[r];let u;if(l.parentType===g.Widget)u=l.parent;else if(l.parentType===g.View){const e=l.parent;u=s.views[e].parent}else if(l.parentType===g.Screen){const e=l.parent;u=s.screens[e].parent}const d=ue(s,r);if(null!=d){const e=t.layouts[d];return{layoutId:d,layoutItemId:Object.keys(null!==(a=e.content)&&void 0!==a?a:{}).find((t=>{const o=e.content[t];return o.type===n.LayoutItemType.Widget&&o.widgetId===u||o.type===n.LayoutItemType.Section&&o.sectionId===u||o.type===n.LayoutItemType.ScreenGroup&&o.screenGroupId===u}))}}return null}function pe(e,t){var n,o,i;if(!t)return null;const{layoutId:a,layoutItemId:r}=t;return null===(i=null===(o=null===(n=e.layouts)||void 0===n?void 0:n[a])||void 0===o?void 0:o.content)||void 0===i?void 0:i[r]}function ge(e,t){if(e.sections)for(const n in e.sections)if(e.sections[n].views.includes(t))return n;return null}function ye(e,t){let n=t.layouts[e];for(;null!=(null==n?void 0:n.parent);){if(n.parentType===g.View){const e=n.parent;return{viewId:e,sectionId:t.views[e].parent}}const e=ue(t,n.id);n=t.layouts[e]}return{viewId:null,sectionId:null}}function he(e,t){let n=t.layouts[e];for(;null!=(null==n?void 0:n.parent);){if(n.parentType===g.Screen){const e=n.parent;return{screenId:e,screenGroupId:t.screens[e].parent}}const e=ue(t,n.id);n=t.layouts[e]}return{screenId:null,screenGroupId:null}}function fe(e){switch(e.type){case n.LayoutItemType.Widget:return"string"==typeof e.widgetId?e.widgetId:null;case n.LayoutItemType.Section:return"string"==typeof e.sectionId?e.sectionId:null;case n.LayoutItemType.ScreenGroup:return"string"==typeof e.screenGroupId?e.screenGroupId:null;default:return null}}function ve(e,t,n=!1){return(null==e?void 0:e.content)?Object.keys(e.content).filter((o=>e.content[o].type===t&&!!fe(e.content[o])&&(n||!e.content[o].isPending))).map((t=>fe(e.content[t]))):[]}function me(e,t,o,i,a=!1){let r=[];const s=ve(e.layouts[t],n.LayoutItemType.Widget,a),l=ve(e.layouts[t],n.LayoutItemType.Section,a),u=ve(e.layouts[t],n.LayoutItemType.ScreenGroup,a);return o===n.LayoutItemType.Widget?r=r.concat(s):o===n.LayoutItemType.Section?r=r.concat(l):o===n.LayoutItemType.ScreenGroup&&(r=r.concat(u)),s.filter((t=>{var o,i,a,r,s;return(null===(i=null===(o=e.widgets[t])||void 0===o?void 0:o.manifest)||void 0===i?void 0:i.widgetType)===n.WidgetType.Layout||(null===(s=null===(r=null===(a=e.widgets[t])||void 0===a?void 0:a.manifest)||void 0===r?void 0:r.properties)||void 0===s?void 0:s.hasEmbeddedLayout)})).forEach((t=>{var n;Object.keys(null!==(n=e.widgets[t].layouts)&&void 0!==n?n:{}).forEach((n=>{const s=e.widgets[t].layouts[n][i];r=r.concat(me(e,s,o,i,a))}))})),l.forEach((t=>{var n,s;null===(s=null===(n=e.sections)||void 0===n?void 0:n[t])||void 0===s||s.views.forEach((t=>{e.views[t]&&e.views[t].layout[i]&&(r=r.concat(me(e,e.views[t].layout[i],o,i,a)))}))})),u.forEach((t=>{var n,s;null===(s=null===(n=e.screenGroups)||void 0===n?void 0:n[t])||void 0===s||s.screens.forEach((t=>{var n,s,l,u,d,c,p;(null===(l=null===(s=null===(n=e.screens)||void 0===n?void 0:n[t])||void 0===s?void 0:s.main.layout)||void 0===l?void 0:l[i])&&(r=r.concat(me(e,e.screens[t].main.layout[i],o,i,a))),(null===(p=null===(c=null===(d=null===(u=e.screens)||void 0===u?void 0:u[t])||void 0===d?void 0:d.panel)||void 0===c?void 0:c.layout)||void 0===p?void 0:p[i])&&(r=r.concat(me(e,e.screens[t].panel.layout[i],o,i,a)))}))})),r}function Ie(e,t,o,i,a=!1){let r=[];const s=ve(e.layouts[t],n.LayoutItemType.Widget,a),l=ve(e.layouts[t],n.LayoutItemType.Section,a),u=ve(e.layouts[t],n.LayoutItemType.ScreenGroup,a);return r=o===n.LayoutItemType.Widget?r.concat(s):o===n.LayoutItemType.ScreenGroup?r.concat(u):r.concat(l),s.filter((t=>e.widgets&&e.widgets[t]&&e.widgets[t].manifest.widgetType===n.WidgetType.Layout)).forEach((t=>{Object.keys(e.widgets[t].layouts).forEach((n=>{const s=Pe(e.widgets[t].layouts[n],i,e.mainSizeMode);r=r.concat(Ie(e,s,o,i,a))}))})),r}function we(e,t,n){if(!(null==e?void 0:e.content))return null;const o=Object.keys(e.content).find((o=>e.content[o].type===n&&(e.content[o].widgetId===t||e.content[o].sectionId===t||e.content[o].screenGroupId===t)&&!e.content[o].isPending));return e.content[o]}function xe(e,t,n=!1){const o=e.layouts[t];return(null==o?void 0:o.content)?n?Object.keys(o.content):Object.keys(o.content).filter((e=>!o.content[e].isPending)):[]}function be(e,t,n=!1){return(null==e?void 0:e.content)?Object.keys(e.content).filter((o=>e.content[o].type===t&&!!fe(e.content[o])&&(n||!e.content[o].isPending))).map((t=>({layoutId:e.id,layoutItemId:t}))):[]}function Se(e,t){return Object.keys(e.widgets).find((n=>{const o=e.widgets[n];if(o.layouts)return Object.keys(o.layouts).some((e=>void 0!==Object.keys(o.layouts[e]).find((n=>o.layouts[e][n]===t))))}))}function Te(e,t,o,i){const a=e.pages&&Object.keys(e.pages).find((n=>{const a=Pe(e.pages[n].layout,i,e.mainSizeMode);return Ie(e,a,o,i).includes(t)}));if(a)return{type:n.ContainerType.Page,id:a};const r=e.dialogs&&Object.keys(e.dialogs).find((n=>{const a=Pe(e.dialogs[n].layout,i,e.mainSizeMode);return Ie(e,a,o,i).includes(t)}));if(r)return{type:n.ContainerType.Dialog,id:r};if(e.header){const a=Pe(e.header.layout,i,e.mainSizeMode);if(Ie(e,a,o,i).includes(t))return{type:n.ContainerType.Header,id:"header"}}if(e.footer){const a=Pe(e.footer.layout,i,e.mainSizeMode);if(Ie(e,a,o,i).includes(t))return{type:n.ContainerType.Footer,id:"footer"}}const s=e.views&&Object.keys(e.views).find((n=>{const a=Pe(e.views[n].layout,i,e.mainSizeMode);return Ie(e,a,o,i).includes(t)}));if(s)return{type:n.ContainerType.View,id:s};if(e.screens){const a=Object.keys(e.screens).find((n=>{const a=Pe(e.screens[n].main.layout,i,e.mainSizeMode);return Ie(e,a,o,i).includes(t)}));if(a)return{type:n.ContainerType.ScreenMain,id:a};const r=Object.keys(e.screens).find((n=>{var a;const r=Pe(null===(a=e.screens[n].panel)||void 0===a?void 0:a.layout,i,e.mainSizeMode);return Ie(e,r,o,i).includes(t)}));if(r)return{type:n.ContainerType.ScreenPanel,id:r}}}function Ce(e,t,o,i){const a=e.pages&&Object.keys(e.pages).find((n=>{const a=Pe(e.pages[n].layout,i,e.mainSizeMode);return me(e,a,o,i).includes(t)}));if(a)return{type:n.RootContainerType.Page,id:a};const r=e.dialogs&&Object.keys(e.dialogs).find((n=>{const a=Pe(e.dialogs[n].layout,i,e.mainSizeMode);return me(e,a,o,i).includes(t)}));if(r)return{type:n.RootContainerType.Dialog,id:r};if(e.header){const a=Pe(e.header.layout,i,e.mainSizeMode);if(me(e,a,o,i).includes(t))return{type:n.RootContainerType.Header,id:"header"}}if(e.footer){const a=Pe(e.footer.layout,i,e.mainSizeMode);if(me(e,a,o,i).includes(t))return{type:n.RootContainerType.Footer,id:"footer"}}}function Re(e,t,n,o){return Ie(e,Pe(e.pages[t].layout,o,e.mainSizeMode),n,o)}function je(e,t,n,o){var i;const a=Ie(e,Pe(e.screens[t].main.layout,o,e.mainSizeMode),n,o);if(e.screens[t].panel){const r=Ie(e,Pe(null===(i=e.screens[t].panel)||void 0===i?void 0:i.layout,o,e.mainSizeMode),n,o);return a.concat(r)}return a}function $e(e,t,n,o){var i;return Ie(e,Pe(null===(i=e.views[t])||void 0===i?void 0:i.layout,o,e.mainSizeMode),n,o)}function Me(e,t,n){return Ie(e,Pe(e.header.layout,n,e.mainSizeMode),t,n)}function Oe(e,t,n){return Ie(e,Pe(e.footer.layout,n,e.mainSizeMode),t,n)}function Pe(e,t,n){return e?e[t]||e[n]:null}function ke(e,t,o,i){if(i){const a=Le(e,o,t,i);if(a)return Ve(e,o,t,a,i);{const a=Te(e,o,t,i);if(!a)return[];const r=function(e,t,o){var i;return t.type===n.ContainerType.Footer?e.footer.layout[o]:t.type===n.ContainerType.Header?e.header.layout[o]:t.type===n.ContainerType.ScreenMain?e.screens[t.id].main.layout[o]:t.type===n.ContainerType.ScreenPanel?null===(i=e.screens[t.id].panel)||void 0===i?void 0:i.layout[o]:e[t.type][t.id].layout[o]}(e,a,i);return[{layoutId:r,layoutItemId:we(e.layouts[r],o,t).id}]}}{const n=[];return Object.keys(e.layouts).forEach((i=>{xe(e,i,!0).forEach((a=>{const r=e.layouts[i].content[a];t!==r.type||r.widgetId!==o&&r.sectionId!==o&&r.screenGroupId!==o||n.push({layoutId:i,layoutItemId:a})}))})),n}}function Le(e,t,n,o){return Object.keys(e.widgets).find((i=>{const a=e.widgets[i];if(a.layouts)return Object.keys(a.layouts).some((i=>{const r=a.layouts[i][o],s=e.layouts[r];return s&&s.content&&void 0!==Object.keys(s.content).find((e=>s.content[e].type===n&&(s.content[e].widgetId===t||s.content[e].sectionId===t)))}))}))}function Ee(e,t,n,o){const i=e.widgets[t];if(!i.layouts)return[];let a=[];return Object.keys(i.layouts).forEach((t=>{Object.keys(i.layouts[t]).forEach((r=>{const s=e.layouts[i.layouts[t][r]];a=a.concat(ve(s,n,o))}))})),Array.from(new Set(a))}function Ae(e,t,n,o){const i=[];let a=!1;const r=(e,t,n,r)=>{const s=Pe(n,o,void 0),l=we(e.layouts[s],t,r);let u;return l&&(u={layoutId:s,layoutItemId:l.id},i.push(u),a=!0),u};return e.pages&&Object.keys(e.pages).find((o=>{const i=e.pages[o];return!(!i.layout||!r(e,t,i.layout,n))})),a||(e.views&&Object.keys(e.views).find((o=>{const i=e.views[o];return!!r(e,t,i.layout,n)})),a||(e.dialogs&&Object.keys(e.dialogs).find((o=>{const i=e.dialogs[o];return!!r(e,t,i.layout,n)})),a||(e.header&&r(e,t,e.header.layout,n),a||(e.footer&&r(e,t,e.footer.layout,n),a||e.widgets&&Object.keys(e.widgets).find((o=>{const i=e.widgets[o];return i.layouts&&Object.keys(i.layouts).forEach((o=>{r(e,t,i.layouts[o],n)})),!!a})))))),i}function ze(e,t,n){const o=e.widgets[n];if(!o)return;let i;return Object.keys(o.layouts).find((e=>{if(Object.keys(o.layouts[e]).find((n=>{if(o.layouts[e][n]===t)return i=n,!0})))return!0})),i}function Ne(e,t){var n,o;let i=null;const a=e=>e?Object.keys(e).find((n=>e[n]===t)):null;return Object.keys(e.widgets||{}).some((t=>Object.keys(e.widgets[t].layouts||{}).some((n=>{if(i)return!0;i=a(e.widgets[t].layouts[n])})))),i||(Object.keys(e.views||{}).some((t=>{if(i)return!0;i=a(e.views[t].layout)})),i||(Object.keys(e.pages||{}).some((t=>{if(i)return!0;i=a(e.pages[t].layout)})),i||(Object.keys(e.dialogs||{}).some((t=>{if(i)return!0;i=a(e.dialogs[t].layout)})),i||(Object.keys(e.screens||{}).some((t=>{var n,o;return!!i||(i=a(null===(n=e.screens[t].main)||void 0===n?void 0:n.layout),!!i||void(i=a(null===(o=e.screens[t].panel)||void 0===o?void 0:o.layout)))})),i||(i=a(null===(n=e.header)||void 0===n?void 0:n.layout),i||(i=a(null===(o=e.footer)||void 0===o?void 0:o.layout),i||null))))))}function Be(e,t,o,i){if(!e.widgets[o])return[];const a=e.layouts[t.layoutId]&&e.layouts[t.layoutId].content&&e.layouts[t.layoutId].content[t.layoutItemId];if(!a)return[];const r=a.type;let s;return r===n.LayoutItemType.Section?s=a.sectionId:r===n.LayoutItemType.Widget&&(s=a.widgetId),s?Ve(e,s,r,o,i):function(e,t,n){const o=e.widgets[t];if(!o)return!1;let i=!1;return o.layouts&&Object.keys(o.layouts).forEach((t=>{i||Object.keys(o.layouts[t]).forEach((a=>{if(i)return;const r=o.layouts[t][a];xe(e,r,!0).forEach((e=>{i||n.layoutId===r&&n.layoutItemId===e&&(i=!0)}))}))})),i}(e,o,t)?[t]:[]}function Fe(e,t,n,o){return Be(e,t,n,o).map((t=>e.layouts[t.layoutId][t.layoutItemId]))}function Ve(e,t,o,i,a){const r=e.widgets[i];if(!r||!t)return[];const s=[];return r.layouts&&Object.keys(r.layouts).forEach((i=>{const l=r.layouts[i][a],u=e.layouts[l];u&&u.content&&Object.keys(u.content).forEach((i=>{const r=u.content[i];if(r.type!==o||r.widgetId!==t&&r.sectionId!==t&&r.screenGroupId!==t){if(r.type===n.LayoutItemType.Widget){const i=e.widgets[r.widgetId];i&&i.manifest.widgetType===n.WidgetType.Layout&&s.push(...Ve(e,t,o,i.id,a))}}else s.push({layoutId:u.id,layoutItemId:r.id})}))})),s}function We(e,t,o,i,a){const r=Te(e,t,o,a);if(!r)return[];switch(r.type){case n.ContainerType.Page:return Re(e,r.id,i,a);case n.ContainerType.Header:return Me(e,i,a);case n.ContainerType.Footer:return Oe(e,i,a);case n.ContainerType.View:return $e(e,r.id,i,a);case n.ContainerType.Dialog:return function(e,t,n,o){return Ie(e,Pe(e.dialogs[t].layout,o,e.mainSizeMode),n,o)}(e,r.id,i,a);case n.ContainerType.ScreenMain:case n.ContainerType.ScreenPanel:return je(e,r.id,i,a)}}function De(e,t,o){var i,a;const r=e.pages[t],s=null===(i=null==r?void 0:r.layout)||void 0===i?void 0:i[o],l=e.layouts[s],u=[];return(null==l?void 0:l.type)===n.LayoutType.FlowLayout&&Object.keys(null!==(a=l.content)&&void 0!==a?a:{}).sort().forEach((t=>{var o;const i=l.content[t];if(!i.isPending&&!(null===(o=i.setting)||void 0===o?void 0:o.isFloating)&&i.type===n.LayoutItemType.Widget){const n=function(e,t){const{layoutId:n,layoutItemId:o}=t,i=e.layouts[n].content[o],a=e.widgets[i.widgetId];return a?{label:a.label,id:`${n}_block_${o}`}:null}(e,{layoutId:s,layoutItemId:t});n&&u.push(n)}})),u}function He(e,t,o){var i,a;const r=e.pages[t],s=null===(i=null==r?void 0:r.layout)||void 0===i?void 0:i[o],l=e.layouts[s],u=[];return(null==l?void 0:l.type)===n.LayoutType.FlowLayout&&Object.keys(null!==(a=l.content)&&void 0!==a?a:{}).sort().forEach((t=>{var o;const i=l.content[t];if(!i.isPending&&!(null===(o=i.setting)||void 0===o?void 0:o.isFloating)&&i.type===n.LayoutItemType.ScreenGroup){const t=e.screenGroups[i.screenGroupId],n=[];null==t||t.screens.forEach((t=>{const o=function(e,t,n){const o=e.screens[n];return o?{label:o.label,id:`${t}_screen_${n}`}:null}(e,s,t);o&&n.push(o)})),u.push({id:t.id,label:t.label,screens:n})}})),u}function Ge(e,t){var n;const o=e.appConfig.sections[t];if(!o||!o.views)return null;const i=null===(n=e.appRuntimeInfo.sectionNavInfos)||void 0===n?void 0:n[o.id];let a;if(!i){const t=o.views[0];a=e.appConfig.views[t]}return{sectionId:t,navInfo:i,activeView:a,views:o.views,sectionStyle:o.style,transition:o.transition,autoPlay:o.autoPlay,interval:o.interval,loop:o.loop}}function Ue(e,t,o,i){const a=e.pages[t];return a?i===n.PagePart.Header?a.header&&e.header?Je(e,e.header.layout[o],o):[]:i===n.PagePart.Footer?a.footer&&e.footer?Je(e,e.footer.layout[o],o):[]:i===n.PagePart.Body?Je(e,a.layout[o],o):[]:[]}function _e(e,t,o,i){const a=e.pages[t];return a?i===n.PagePart.Header?a.header&&e.header?Ze(e,e.header.layout,o):[]:i===n.PagePart.Footer?a.footer&&e.footer?Ze(e,e.footer.layout,o):[]:i===n.PagePart.Body?Ze(e,a.layout,o):[]:[]}function Xe(e,t,n){const o=e.dialogs[t];return o?Je(e,o.layout[n],n):[]}function Ye(e,t,n){const o=e.dialogs[t];return o?Ze(e,o.layout,n):[]}function Je(e,t,o){let i=[];return be(e.layouts[t],n.LayoutItemType.Widget,!0).forEach((t=>{const n=e.layouts[t.layoutId].content[t.layoutItemId];n.isPending?i.push(t):e.widgets[n.widgetId].layouts&&Object.keys(e.widgets[n.widgetId].layouts).forEach((t=>{i=i.concat(Je(e,e.widgets[n.widgetId].layouts[t][o],o))}))})),be(e.layouts[t],n.LayoutItemType.Section,!0).forEach((t=>{const n=e.layouts[t.layoutId].content[t.layoutItemId];n.isPending?i.push(t):e.sections[n.sectionId].views&&e.sections[n.sectionId].views.forEach((t=>{i=i.concat(Je(e,e.views[t].layout[o],o))}))})),be(e.layouts[t],n.LayoutItemType.ScreenGroup,!0).forEach((t=>{var n,a;const r=e.layouts[t.layoutId].content[t.layoutItemId];if(r.isPending)i.push(t);else{const t=r.screenGroupId;null===(a=null===(n=e.screenGroups)||void 0===n?void 0:n[t].screens)||void 0===a||a.forEach((t=>{const n=null==e?void 0:e.screens[t];n.main&&(i=i.concat(Je(e,n.main.layout[o],o))),n.panel&&(i=i.concat(Je(e,n.panel.layout[o],o)))}))}})),i}function Ze(e,t,o,i=null,a=null,r=null){const s=[];return i||(i=me(e,t[o],n.LayoutItemType.Widget,o,!0)),a||(a=me(e,t[o],n.LayoutItemType.Section,o,!0)),r||(r=me(e,t[o],n.LayoutItemType.ScreenGroup,o,!0)),Object.keys(n.BrowserSizeMode).filter((e=>n.BrowserSizeMode[e]!==o)).map((e=>n.BrowserSizeMode[e])).forEach((l=>{be(e.layouts[t[l]],n.LayoutItemType.Widget,!0).forEach((t=>{const l=e.layouts[t.layoutId].content[t.layoutItemId];e.widgets[l.widgetId].manifest.widgetType!==n.WidgetType.Layout&&i.indexOf(l.widgetId)<0?!qe(e,s,t)&&s.push(t):e.widgets[l.widgetId].layouts&&Object.keys(e.widgets[l.widgetId].layouts).forEach((t=>{Ze(e,e.widgets[l.widgetId].layouts[t],o,i,a,r).forEach((t=>{!qe(e,s,t)&&s.push(t)}))}))})),be(e.layouts[t[l]],n.LayoutItemType.Section,!0).forEach((t=>{const n=e.layouts[t.layoutId].content[t.layoutItemId];a.indexOf(n.sectionId)<0?!qe(e,s,t)&&s.push(t):e.sections[n.sectionId].views&&e.sections[n.sectionId].views.forEach((t=>{Ze(e,e.views[t].layout,o,i,a,r).forEach((t=>{!qe(e,s,t)&&s.push(t)}))}))})),be(e.layouts[t[l]],n.LayoutItemType.ScreenGroup,!0).forEach((t=>{var n,l;const u=e.layouts[t.layoutId].content[t.layoutItemId];r.indexOf(u.screenGroupId)<0?!qe(e,s,t)&&s.push(t):(null===(l=null===(n=e.screenGroups)||void 0===n?void 0:n[u.screenGroupId])||void 0===l?void 0:l.screens)&&e.screenGroups[u.screenGroupId].screens.forEach((t=>{var n;const l=null===(n=e.screens)||void 0===n?void 0:n[t];(null==l?void 0:l.main)&&Ze(e,l.main.layout,o,i,a,r).forEach((t=>{!qe(e,s,t)&&s.push(t)})),(null==l?void 0:l.panel)&&Ze(e,l.panel.layout,o,i,a,r).forEach((t=>{!qe(e,s,t)&&s.push(t)}))}))}))})),s}function qe(e,t,o){const i=e.layouts[o.layoutId].content[o.layoutItemId];return!!t.find((t=>{const o=e.layouts[t.layoutId].content[t.layoutItemId];return o.type===i.type&&(o.type===n.LayoutItemType.Widget&&o.widgetId===i.widgetId||o.type===n.LayoutItemType.Section&&o.sectionId===i.sectionId)}))}class Ke extends n.React.PureComponent{constructor(e){super(e),this.onMouseDown=this.onMouseDown.bind(this),this.ref=n.React.createRef(),this.state={error:null}}loadWidgetClass(){const{widgetId:e,isClassLoaded:t}=this.props;e&&!t&&n.WidgetManager.getInstance().loadWidgetClass(e).catch((e=>{console.log(e),this.setState({error:n.i18n.getIntl().formatMessage({id:"widgetLoadError"})})}))}componentDidMount(){this.loadWidgetClass()}componentDidUpdate(){this.loadWidgetClass()}renderWidgetContent(){const{widgetId:e,layoutId:t,layoutItemId:o}=this.props;let i;return e&&(i=n.WidgetManager.getInstance().getWidgetClass(e)),this.state.error?(0,n.jsx)("div",{className:"widget-content"},this.state.error):(0,n.jsx)("div",{className:"widget-content"},i&&(0,n.jsx)(n.ErrorBoundary,null,(0,n.jsx)(i,{widgetId:e,layoutId:t,layoutItemId:o})))}getStyle(){const e=n.css`
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
    `}onMouseDown(e){var t;(null===(t=(0,n.getAppStore)().getState().widgetsRuntimeInfo[this.props.widgetId])||void 0===t?void 0:t.state)!==n.WidgetState.Active&&(0,n.getAppStore)().dispatch(n.appActions.activateWidget(this.props.widgetId))}render(){const{className:e,widgetStyle:t,widgetId:o,forceAspectRatio:i,aspectRatio:a,rotate:r}=this.props,s=y.styleUtils.toCSSStyle(t),{transform:l}=s,u=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(n[o[i]]=e[o[i]])}return n}(s,["transform"]),d=r>0||r<0?`rotateZ(${r}deg)`:"";let c=d;return l&&(c=`${l} ${d}`),(0,n.jsx)("div",{className:(0,n.classNames)("widget-renderer layout-item-content w-100",e,{"aspect-ratio-wrapper":i&&a>0}),css:this.getStyle(),style:Object.assign(Object.assign({},u),{transform:c}),onMouseDownCapture:this.onMouseDown,"data-widgetid":o,ref:this.ref},this.renderWidgetContent(),this.props.children)}}const Qe=n.ReactRedux.connect(E)(Ke),et={},tt={};function nt(e,t){et[e]=t}function ot(e,t){tt[e]=t}function it(e){return et[e]}function at(e){return tt[e]}class rt extends n.React.PureComponent{render(){const{layout:e}=this.props;if(!e)return null;const t=at(e.type||n.LayoutType.FlowLayout);return t?n.React.createElement(t,Object.assign({},this.props)):null}}const st=n.ReactRedux.connect(k)(rt);function lt(e,t){if(!e)return null;let n={};e.backgroundIMage&&(n="string"==typeof e.backgroundIMage?{}:e.backgroundIMage);const o=e.backgroundPosition?y.FillType[e.backgroundPosition.toUpperCase()]:y.FillType.FILL;let i;i=null==e.backgroundColor?t:""===e.backgroundColor?"transparent":e.backgroundColor?e.backgroundColor:"";const a={color:i,fillType:o,image:n};return y.styleUtils.toBackgroundStyle(a)}function ut(e){const{viewId:t,isActive:o,layoutEntryComponent:i,viewVisibilityContext:a}=e,r=n.ReactRedux.useSelector((e=>{var n,o;return null===(o=null===(n=e.appConfig)||void 0===n?void 0:n.views)||void 0===o?void 0:o[t]})),s=n.ReactRedux.useSelector((e=>{var t,n;return null===(n=null===(t=e.theme)||void 0===t?void 0:t.body)||void 0===n?void 0:n.bg})),l=i,u=a,[d,c]=n.React.useState(!1),p=n.React.useMemo((()=>({isInView:!0,isInCurrentView:o})),[o]);return n.React.useEffect((()=>{o&&r.lazyLoad&&!d&&c(!0)}),[o,r.lazyLoad,d]),(0,n.jsx)("div",{className:(0,n.classNames)("w-100 h-100 d-flex section-view",{[y.FOCUSABLE_CONTAINER_CLASS]:o}),style:lt(r,s),key:t},(d||!r.lazyLoad)&&(0,n.jsx)(n.ErrorBoundary,null,(0,n.jsx)(u.Provider,{value:p},(0,n.jsx)(l,{layouts:null==r?void 0:r.layout,isInSection:!0,className:"w-100"}))))}function dt(e){var t,o;const{views:i,navInfo:a,animationPreview:r,playMode:s,currentIndex:l,previousIndex:u,progress:d,loop:c,viewTransition:p}=e,g=r&&s===n.AnimationPlayMode.OneByOne,{setting:y,playId:h,onAnimationEnd:f,depth:v}=n.React.useContext(n.AnimationContext),m=n.ReactRedux.useSelector((e=>{var t;return!y||y.type===n.AnimationType.None||(null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.appMode)===n.AppMode.Design})),I=!m||g||(null==a?void 0:a.playId)&&(null==a?void 0:a.withOneByOne)?y:null,w=n.React.useMemo((()=>({trigger:n.AnimationTriggerType.Manual,setting:I,playId:!m||g?h:null,inheritedOneByOneSetting:null,depth:v+1,onAnimationEnd:f})),[m,I,g,h,v,f]);return(0,n.jsx)(n.AnimationContext.Provider,{value:w},(0,n.jsx)("div",{className:"section-content"},(0,n.jsx)(n.TransitionContainer,{useProgress:null!==(t=null==a?void 0:a.useProgress)&&void 0!==t&&t,useStep:null!==(o=null==a?void 0:a.useStep)&&void 0!==o&&o,previousIndex:u,currentIndex:l,progress:d,transitionType:null==p?void 0:p.type,direction:null==p?void 0:p.direction,playId:null==a?void 0:a.playId,withOneByOne:null==a?void 0:a.withOneByOne,loop:c},i.map((t=>{const o=t===i[l];return(0,n.jsx)(ut,{key:t,viewId:t,isActive:o,layoutEntryComponent:e.layoutEntryComponent,viewVisibilityContext:e.viewVisibilityContext})})))))}var ct=i(1407),pt=i.n(ct);const gt=e=>{const{className:t}=e,o=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(n[o[i]]=e[o[i]])}return n}(e,["className"]),i=(0,n.classNames)("jimu-icon-component",t);return n.React.createElement(y.Icon,Object.assign({className:i,icon:pt()},o))};var yt=i(3273),ht=i.n(yt);const ft=e=>{const{className:t}=e,o=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(n[o[i]]=e[o[i]])}return n}(e,["className"]),i=(0,n.classNames)("jimu-icon-component",t);return n.React.createElement(y.Icon,Object.assign({className:i,icon:ht()},o))};function vt(e){var t,o,i;const{sectionId:a,currentIndex:r,numOfViews:s,onCurrentViewChange:l}=e,u=n.ReactRedux.useSelector((e=>{var t;return null===(t=e.appConfig.sections[a])||void 0===t?void 0:t.arrowsNav})),d=n.ReactRedux.useSelector((e=>{var t;return null===(t=e.appConfig.sections[a])||void 0===t?void 0:t.dotsNav})),c=null!==(t=null==d?void 0:d.position)&&void 0!==t?t:"b",p=n.React.useMemo((()=>{const e=[];for(let t=0;t<s;t++)e.push(t);return e}),[s]),g=()=>{var e,t,o,i;return n.css`
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
    `},y=n.React.useCallback(((e,t)=>(0,n.jsx)("div",{key:e,className:(0,n.classNames)("dot rounded-circle",{active:t,disabled:s<=1}),onClick:t?void 0:()=>l(e)})),[l,s]),h=n.React.useCallback((()=>{l(r>0?r-1:s-1)}),[r,s,l]),f=n.React.useCallback((()=>{l(r<s-1?r+1:0)}),[r,s,l]),v=s>1&&0!==r,m=s>1&&r!==s-1;return(0,n.jsx)(n.React.Fragment,null,(null==u?void 0:u.visible)&&(0,n.jsx)(n.React.Fragment,null,(0,n.jsx)("div",{className:(0,n.classNames)("arrows-nav first",{vertical:"v"===u.direction,disabled:!v}),css:g(),onClick:v?h:null},(0,n.jsx)(gt,{autoFlip:"v"!==u.direction,size:null!==(o=u.size)&&void 0!==o?o:12})),(0,n.jsx)("div",{className:(0,n.classNames)("arrows-nav second",{vertical:"v"===u.direction,disabled:!m}),css:g(),onClick:m?f:null},(0,n.jsx)(ft,{autoFlip:"v"!==u.direction,size:null!==(i=u.size)&&void 0!==i?i:12}))),(null==d?void 0:d.visible)&&(0,n.jsx)("div",{className:(0,n.classNames)("dots-nav",{"snap-left":"l"===c,"snap-top":"t"===c,"snap-right":"r"===c,"snap-bottom":"b"===c}),css:(()=>{var e,t,o,i,a,r,s,l,u,p,g,y,h,f;return n.css`
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
    `})()},p.map((e=>y(e,e===r)))))}function mt(e){return n.css`
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
  `}function It(e){const{views:t,navInfo:o,activeView:i,animationPreview:a,playMode:r,transition:s,sectionId:l,autoPlay:u,interval:d=w,loop:c=!0,className:p,sectionStyle:g,forceAspectRatio:h,aspectRatio:f,rotate:v,layoutEntryComponent:m,viewVisibilityContext:I}=e,x=n.React.useRef(),b=n.React.useRef(),S=n.React.useRef(!1),T=n.React.useRef(!1),C=n.React.useRef(null),[R,j]=n.React.useState(!1),$=null==i?void 0:i.id,M=n.React.useMemo((()=>{var e;let i,a,r,s=t;return o?(s=null!==(e=o.visibleViews)&&void 0!==e?e:t,o.useProgress?(r=o.progress,i=(0,n.getIndexFromProgress)(r,s.length).currentIndex):(i=Math.max(0,s.indexOf(o.currentViewId)),a=o.previousViewId?Math.max(0,s.indexOf(o.previousViewId)):Math.max(0,i-1))):(i=Math.max(0,s.indexOf($)),a=i),x.current=i,{currentIndex:i,previousIndex:a,progress:r}}),[$,o,t]),O=n.React.useMemo((()=>y.styleUtils.toCSSStyle(g)),[g]),{transform:P}=O,k=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(n[o[i]]=e[o[i]])}return n}(O,["transform"]),L=v>0||v<0?`rotateZ(${v}deg)`:"";let E=L;P&&(E=`${P} ${L}`);const A=n.React.useCallback((()=>{j(!0)}),[]),z=n.React.useCallback((()=>{j(!1)}),[]),N=n.React.useCallback((e=>{S.current=!0,T.current=e.target===b.current,null!=C.current&&(clearTimeout(C.current),C.current=null),u&&j(!0)}),[u]),B=n.React.useCallback((e=>{S.current=!1,null!=C.current&&(clearTimeout(C.current),C.current=null),u&&(C.current=setTimeout((()=>{j(!1)}),500))}),[u]),F=()=>{const e=x.current<t.length-1?x.current+1:0;n.jimuHistory.changeView(l,t[e])},V=()=>{const e=x.current>0?x.current-1:t.length-1;n.jimuHistory.changeView(l,t[e])},W={left:()=>{S.current&&T.current&&(D()?F():V())},right:()=>{S.current&&T.current&&(D()?V():F())},up:()=>{S.current&&T.current&&V()},down:()=>{S.current&&T.current&&F()}},H=u&&!R;!function(e){const{sectionId:t,autoPlay:o,interval:i=w,loop:a=!1}=e,r=n.React.useRef(),s=n.ReactRedux.useSelector((e=>{var t;return o?(null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.appMode)===n.AppMode.Design:null})),l=n.React.useRef(s),u=n.React.useCallback((()=>{r.current&&(clearInterval(r.current),r.current=null)}),[]),d=n.React.useCallback((()=>{u(),r.current=setInterval((()=>{(function(e,t){var o,i;const a=(0,n.getAppStore)().getState(),r=a.appConfig.sections[e].views,s=null===(i=null===(o=a.appRuntimeInfo)||void 0===o?void 0:o.sectionNavInfos)||void 0===i?void 0:i[e],l=(null==s?void 0:s.currentViewId)?r.indexOf(s.currentViewId):0,u=l<r.length-1?l+1:0;return!(!t&&0===u||(n.jimuHistory.changeView(e,r[u]),0))})(t,a)||u()}),1e3*i)}),[t,a,i,u]);n.React.useEffect((()=>{if(!l.current){if(!o)return void u();d()}return()=>{u()}}),[o,i,a,u,d]),n.React.useEffect((()=>{if(l.current!==s&&null!==s){if(l.current=s,s)return void u();o&&d()}}),[s,d,u,o])}({sectionId:l,interval:d,loop:c,autoPlay:H});const G=n.React.useCallback((e=>{n.jimuHistory.changeView(l,t[e])}),[l,t]);return(0,n.jsx)("div",{className:(0,n.classNames)("section-layout layout-item-content w-100",p,{"aspect-ratio-wrapper":h&&f>0}),css:mt(f),"data-sectionid":l,style:Object.assign(Object.assign({},k),{transform:E}),onMouseEnter:u?A:null,onMouseLeave:u?z:null,onTouchStart:u?A:null,onTouchEnd:u?z:null,onFocus:N,onBlur:B,tabIndex:0,ref:b},(0,n.jsx)(dt,{views:t,navInfo:o,animationPreview:a,playMode:r,currentIndex:M.currentIndex,previousIndex:M.previousIndex,progress:M.progress,loop:H&&c,viewTransition:s,layoutEntryComponent:m,viewVisibilityContext:I}),(0,n.jsx)(vt,{sectionId:l,numOfViews:t.length,currentIndex:M.currentIndex,onCurrentViewChange:G}),(0,n.jsx)(n.Keyboard,{bindings:W}))}class wt extends n.React.PureComponent{render(){return n.React.createElement(It,Object.assign({},this.props,{layoutEntryComponent:st,viewVisibilityContext:d}))}}function xt(e,t){const[o,i]=n.React.useState(!0),a=n.React.useContext(u);return n.React.useEffect((()=>{null!=e&&i(a)}),[e,a]),o}function bt(){const e=[0];for(let t=1;t<=10;t++)e.push(t/10);return e}function St(e){var t,o,i,a,r,u,d;const c=n.ReactRedux.useSelector((t=>function(e,t){const o=L(e,t);if(!o.layoutItem)return o;if(o.layoutItem.type===n.LayoutItemType.Widget)return Object.assign({},o);const i=Ge(e,o.layoutItem.sectionId);return Object.assign(Object.assign({},o),i)}(t,e)),n.ReactRedux.shallowEqual),p=Object.assign(Object.assign({},e),c),g=n.React.useRef(),{layoutId:y,layoutItemId:h,layoutItem:f}=p,{className:v,children:I,isParentPlaying:w,isParentRevert:x,isParentEnableScroll:b,parentAnimationStyle:S,parentPlayId:T,id:C}=p,R=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(n[o[i]]=e[o[i]])}return n}(p,["className","children","isParentPlaying","isParentRevert","isParentEnableScroll","parentAnimationStyle","parentPlayId","id"]),j=(null==f?void 0:f.type)===n.LayoutItemType.Widget,$=(null==f?void 0:f.type)===n.LayoutItemType.Section,{effect:M,oneByOneEffect:O}=null!==(o=null===(t=p.layoutItem)||void 0===t?void 0:t.setting)&&void 0!==o?o:{},[P,k]=n.React.useState(!1),E=function(e,t){const o=n.React.useRef(),[i,a]=n.React.useState(!0);return n.React.useEffect((()=>{if(o.current&&(o.current.unobserve(e),o.current=null),t&&e&&"function"==typeof IntersectionObserver){const t=new IntersectionObserver((e=>{var t;(t=e[0]).target.classList.contains("playing-animation")||t.boundingClientRect.width>0&&t.boundingClientRect.height>0&&a(t.isIntersecting)}),{threshold:bt(),root:document.body,rootMargin:"20%"});return t.observe(e),o.current=t,()=>{o.current.unobserve(e),o.current=null}}}),[e,t]),i}(g.current,p.watchViewportVisibility);n.React.useEffect((()=>{k(!0)}),[]);const{type:A,trigger:z,playId:N,revert:B,onAnimationEnd:F}=function(e){var t;const{effect:o}=e,{pageId:i}=n.React.useContext(s);let a=null===(t=null==o?void 0:o[n.AnimationTriggerType.ScrollIntoView])||void 0===t?void 0:t.type;a=a&&a!==n.AnimationType.None?a:null;const r=xt(a),[l,u]=n.React.useState(Symbol("page load")),d=n.React.useRef(n.AnimationTriggerType.Manual),c=n.React.useRef(r);n.React.useEffect((()=>{a&&c.current!==r&&(c.current=r,u(Symbol("autoplay when visible change")),d.current=n.AnimationTriggerType.Manual)}),[a,r]);const p=n.React.useCallback((()=>{l&&(d.current=n.AnimationTriggerType.ScrollIntoView,u(null))}),[l]);return a?{onAnimationEnd:p,playId:l,type:a,trigger:l?n.AnimationTriggerType.Manual:d.current,revert:!r}:{}}({effect:M}),{setting:V,trigger:W,inheritedOneByOneSetting:D,playId:H,depth:G,revert:U,onAnimationEnd:_}=function(e){var t,o;const{effect:i,isInSection:a}=e,{pageId:r}=n.React.useContext(s);let l=null==i?void 0:i[n.AnimationTriggerType.ScrollIntoView];l=l&&l!==n.AnimationType.None?l:null;const u=xt(l),d=n.React.useContext(n.AnimationContext),c=n.React.useRef(u),p=n.React.useRef(n.AnimationTriggerType.Manual),[g,y]=n.React.useState(Symbol("page load"));n.React.useEffect((()=>{l&&c.current!==u&&(c.current=u,y(Symbol("autoplay when visible change")),p.current=n.AnimationTriggerType.Manual)}),[l,u]);const h=n.React.useCallback((()=>{g&&(p.current=n.AnimationTriggerType.ScrollIntoView,y(null))}),[g]);return l?{setting:null==i?void 0:i[n.AnimationTriggerType.ScrollIntoView],onAnimationEnd:h,trigger:g?n.AnimationTriggerType.Manual:p.current,inheritedOneByOneSetting:a?null:null==d?void 0:d.setting,playId:g,revert:!u,depth:(null!==(o=null==d?void 0:d.depth)&&void 0!==o?o:0)+1}:{inheritedOneByOneSetting:a?null:null==d?void 0:d.setting,depth:(null!==(t=null==d?void 0:d.depth)&&void 0!==t?t:0)+1}}({effect:O,isInSection:e.isInSection}),X=n.React.useMemo((()=>({trigger:W,setting:V,inheritedOneByOneSetting:D,playId:H,depth:G,revert:U,onAnimationEnd:_})),[W,V,D,H,G,U,_]);if(!p.layoutItem||j&&!f.widgetId||$&&!f.sectionId)return null;const Y=null===(i=null==M?void 0:M[n.AnimationTriggerType.ScrollIntoView])||void 0===i?void 0:i.option,J=null!==(d=null===(u=null===(r=null===(a=f.setting)||void 0===a?void 0:a.style)||void 0===r?void 0:r.transform)||void 0===u?void 0:u.rotate)&&void 0!==d?d:0;return(0,n.jsx)(n.AnimationContext.Provider,{value:X},(0,n.jsx)(l.Provider,{value:E},(0,n.jsx)(n.Animation,{id:C,type:A,trigger:z,configType:null==Y?void 0:Y.configType,direction:null==Y?void 0:Y.direction,playId:N,revert:B,onAnimationEnd:F,parentAnimationStyle:S,isParentPlaying:w,isParentRevert:x,isParentEnableScroll:b,parentPlayId:T,ref:g,css:n.css`
            position: relative;
            overflow: visible;
            min-width: ${m}px;
            min-height: ${m}px;
          `,className:(0,n.classNames)("d-flex layout-item",v,{"is-widget":j,"is-section":$}),"data-layoutitemid":h,"data-layoutid":y},j&&(0,n.jsx)(Qe,Object.assign({rotate:J},R)),$&&(0,n.jsx)(wt,Object.assign({rotate:J},R)),e.children)))}function Tt(e){return"ratio"===e.heightMode}class Ct extends n.React.PureComponent{getPositionStyle(e){const{layoutItem:t,transformedBBox:o}=this.props,i=function(e,t){var n,o,i,a,r;const s={};let l=null!==(n=null==t?void 0:t.autoProps)&&void 0!==n?n:{},u=e;const d=ie("height",e,l),c=ie("width",e,l);if(d===b.Stretch)s.top=u.top,s.bottom=u.bottom;else{const n=null!==(o=l.top)&&void 0!==o&&o,a=null!==(i=l.bottom)&&void 0!==i&&i;d===b.Custom&&(s.height=u.height),n!==a&&!a||null==e.top?s.bottom=u.bottom:s.top=u.top,t.vCenter&&"50%"===u.top&&(s.top="50%")}if(c===b.Stretch)s.left=u.left,s.right=u.right;else{const e=null!==(a=l.left)&&void 0!==a&&a,n=null!==(r=l.right)&&void 0!==r&&r;c===b.Custom&&(s.width=u.width),e===n?null!=u.left?s.left=u.left:s.right=u.right:e&&null!=u.right?s.right=u.right:s.left=u.left,t.hCenter&&"50%"===u.left&&(s.left="50%")}return s}(null!=o?o:t.bbox,e),a=Object.assign(Object.assign({},i),function(e,t,n=!1){const o={},i=t.hCenter&&"50%"===e.left,a=t.vCenter&&"50%"===e.top;return i&&a?(o.right="auto",o.bottom="auto",o.transform="translate(-50%, -50%)"):i?(o.right="auto",o.transform="translateX(-50%)"):a&&(o.bottom="auto",o.transform="translateY(-50%)"),!n&&Tt(t)&&(o.height="auto"),o}(t.bbox,e));return n.css`
      position: absolute;
      transform: ${a.transform};
      left: ${M(a,"left")};
      right: ${M(a,"right")};
      top: ${M(a,"top")};
      bottom: ${M(a,"bottom")};
      width: ${M(a,"width")};
      height: ${M(a,"height")};
    `}render(){const{layoutItem:e,layoutId:t}=this.props;if(null==e||e.isPending)return null;const o=n.lodash.assign({},le,e.setting),i=H(o.aspectRatio),a=Tt(o),r=re(this.props);return(0,n.jsx)(St,Object.assign({css:this.getPositionStyle(o),layoutId:t,layoutItemId:e.id,forceAspectRatio:a,aspectRatio:i,isInSection:this.props.isInSection},r))}}class Rt extends n.React.PureComponent{createItem(e,t,o,i){const a=e.content[t];return(0,n.jsx)(Ct,{key:`${e.id}_${t}`,index:o,layoutId:e.id,layoutItemId:t,layoutItem:a,transformedBBox:i?e.content[t].bbox:null,isInSection:this.props.isInSection})}render(){const{layout:e,layouts:t,className:o,style:i,browserSizeMode:a}=this.props;return e?(0,n.jsx)(s.Consumer,null,(r=>{this.pageContext=r;let s=e,l=!1;if(t[a]!==e.id&&this.layoutTransform){let n;Object.keys(t).some((o=>{if(t[o]===e.id)return n=o,!0})),s=this.layoutTransform(e,n,a),l=!0}const u=n.lodash.assign({},se,s.setting),d=s.order||[],c=(0,n.classNames)("layout fixed-layout d-flex",o);return(0,n.jsx)("div",{className:c,style:Object.assign(Object.assign(Object.assign({position:"relative",height:"auto"},i),y.styleUtils.toCSSStyle(u.style)),{width:"100%",overflow:"hidden"}),"data-layoutid":s.id},d.length>0&&(0,n.jsx)(n.OneByOneAnimation,{css:n.css`
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: 0;
                    bottom: 0;
                  `,"data-layoutid":e.id},d.map(((e,t)=>this.createItem(s,e,t,l)))))})):null}}const jt=n.ReactRedux.connect(k)(Rt);class $t extends n.React.PureComponent{isStretchInCrossAxis(){var e,t;const{layoutItem:n}=this.props;return(null===(t=null===(e=n.setting)||void 0===e?void 0:e.autoProps)||void 0===t?void 0:t.width)!==b.Custom}calHeight(e,t){var n,o;return(null===(n=e.autoProps)||void 0===n?void 0:n.height)===b.Auto||"ratio"===e.heightMode?"ratio"===e.heightMode?{height:"auto",flex:"0 0 auto"}:{height:"auto"}:(null===(o=e.autoProps)||void 0===o?void 0:o.height)===b.Stretch||"fit"===e.heightMode?{flex:"1 1 auto"}:{height:t.height,flexShrink:0}}getStyle(e,t){var o,i;const{index:a,layoutItem:r,space:s}=this.props,l=r.bbox||{},u=this.calHeight(e,l);return u.width=t?"auto":l.width,n.css`
      margin-top: ${a>0?`${s}px`:"unset"};
      align-self: ${t?"stretch":null!==(i=null===(o=e.style)||void 0===o?void 0:o.alignSelf)&&void 0!==i?i:"auto"};
      width: ${M(u,"width")};
      height: ${M(u,"height")};
      flex: ${u.flex};
      flex-shrink: ${u.flexShrink};
    `}render(){const{layoutId:e,layoutItem:t,onClick:o}=this.props;if(!t||t.isPending)return null;const i=(0,n.classNames)("flexbox-layout-item","d-flex"),a=t.setting||{},r=this.isStretchInCrossAxis(),s="ratio"===a.heightMode,l=H(a.aspectRatio),u=re(this.props);return(0,n.jsx)(St,Object.assign({css:this.getStyle(a,r),layoutId:e,layoutItemId:t.id,onClick:o,className:i,forceAspectRatio:s,aspectRatio:l},u))}}const Mt={min:16,space:10};class Ot extends n.React.PureComponent{createItem(e,t,o){const{layout:i}=this.props;return(0,n.jsx)($t,{key:e,index:t,space:o.space,layoutId:i.id,layoutItemId:e,layoutItem:i.content[e]})}render(){const{layout:e,className:t}=this.props,o=e.order||(0,n.Immutable)([]),i=Object.assign({},Mt,e.setting),a=(0,n.classNames)("layout column-layout d-flex w-100",t);return(0,n.jsx)("div",{className:a,style:{position:"relative",overflow:"hidden"},"data-layoutid":e.id},(0,n.jsx)(n.OneByOneAnimation,{enableScroll:!0,className:"trail-container d-flex flex-column w-100",css:n.css`
          height: 100%;
          overflow-x: hidden;
          padding: ${y.styleUtils.toCSSPadding(i.padding)};
          justify-content: ${i.justifyContent};
          overflow-y: ${!1===i.overflowY?"hidden !important":null}
        `},o.asMutable().map(((e,t)=>this.createItem(e,t,i)))))}}const Pt=n.ReactRedux.connect(k)(Ot),kt=n.css`
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
`,Lt={space:10,style:{padding:{number:[10],unit:y.UnitTypes.PIXEL}}},Et={heightMode:"fixed",aspectRatio:1,offsetX:0,offsetY:0,style:{alignSelf:"flex-start"}};class At extends n.React.PureComponent{getStyle(e){var t,o,i,a;const{gutter:r,layoutItem:s,isMultiRow:l}=this.props,u=function(e,t,n){var o,i,a,r,s,l,u,d,c,p,g,y,h,f;return n?{height:(null===(o=e.autoProps)||void 0===o?void 0:o.height)===b.Auto?"auto":t.height,alignSelf:null!==(a=null===(i=e.style)||void 0===i?void 0:i.alignSelf)&&void 0!==a?a:"flex-start"}:"ratio"===e.heightMode?{alignSelf:null!==(s=null===(r=e.style)||void 0===r?void 0:r.alignSelf)&&void 0!==s?s:"flex-start"}:(null===(l=e.autoProps)||void 0===l?void 0:l.height)===b.Auto?{height:"auto",alignSelf:null!==(d=null===(u=e.style)||void 0===u?void 0:u.alignSelf)&&void 0!==d?d:"flex-start"}:(null===(c=e.autoProps)||void 0===c?void 0:c.height)===b.Custom?{height:t.height,alignSelf:null!==(g=null===(p=e.style)||void 0===p?void 0:p.alignSelf)&&void 0!==g?g:"flex-start"}:(null===(y=e.autoProps)||void 0===y?void 0:y.height)===b.Stretch||"fit"===e.heightMode?{alignSelf:"stretch"}:parseFloat(t.height)>0?{height:t.height,alignSelf:null!==(f=null===(h=e.style)||void 0===h?void 0:h.alignSelf)&&void 0!==f?f:"flex-start"}:{alignSelf:"stretch"}}(e,s.bbox,l);return l?n.css`
        padding: ${r/2}px 0;
        transform: ${null!=e.offsetX||null!=e.offsetY?`translate(${null!==(t=e.offsetX)&&void 0!==t?t:0}px, ${null!==(o=e.offsetY)&&void 0!==o?o:0}px)`:null};
        height: ${M(u,"height")};
        align-self: ${u.alignSelf};
      `:n.css`
      padding-left: ${r/2}px;
      padding-right: ${r/2}px;
      transform: ${null!=e.offsetX||null!=e.offsetY?`translate(${null!==(i=e.offsetX)&&void 0!==i?i:0}px, ${null!==(a=e.offsetY)&&void 0!==a?a:0}px)`:null};
      height: ${M(u,"height")};
      align-self: ${u.alignSelf};
    `}render(){const{span:e,offset:t,layoutId:o,layoutItem:i}=this.props;if(null==i||i.isPending)return null;const a=n.lodash.assign({},Et,i.setting),r=(0,n.classNames)("row-layout-item",`col-${e}`,`offset-${t}`),s=H(a.aspectRatio),l=re(this.props);return(0,n.jsx)(St,Object.assign({css:this.getStyle(a),className:r,layoutId:o,layoutItemId:i.id,forceAspectRatio:"ratio"===a.heightMode,aspectRatio:s,onClick:this.props.onClick},l))}}class zt extends n.React.PureComponent{constructor(e){super(e),this.flipLeftRight=D()}collectBounds(){var e;const{transformedLayout:t}=this.props,n=null!==(e=t.order)&&void 0!==e?e:[];return this.childRects=[],n.forEach((e=>{var n,o;if(t.content[e].isPending)return;const i=null===(o=null===(n=t.content)||void 0===n?void 0:n[e])||void 0===o?void 0:o.bbox;null!=i&&this.childRects.push({layoutId:t.id,id:e,left:parseInt(i.left,10),width:parseInt(i.width,10),height:parseInt(i.height,10)})})),this.childRects.sort(((e,t)=>e.left-t.left))}getConfig(){var e;const{layout:t}=this.props;return null!==(e=t.setting)&&void 0!==e?e:Lt}createItem(e,t,o){var i;const{transformedLayout:a,isMultiRow:r}=this.props,s=this.getConfig(),l=e[t],u=null!==(i=s.space)&&void 0!==i?i:0;let d;if(0===t)d=l.left;else{const n=e[t-1];d=l.left-n.left-n.width}return(0,n.jsx)(At,{key:`${l.layoutId}_${l.id}`,offset:d,gutter:u,span:l.width,isMultiRow:r,layoutId:a.id,layoutItemId:l.id,layoutItem:a.content[l.id],alignItems:o.alignItems})}render(){var e,t;const{layout:o,className:i}=this.props;this.collectBounds();const a=this.childRects,r=this.getConfig(),l=null!==(e=r.style)&&void 0!==e?e:{},u=null!==(t=r.space)&&void 0!==t?t:0;return(0,n.jsx)(s.Consumer,null,(e=>(0,n.jsx)("div",{className:(0,n.classNames)("row-layout",i,{"row-rtl":this.flipLeftRight}),css:kt,"data-layoutid":o.id},(0,n.jsx)("div",{css:n.css`
                  width: 100%;
                  max-width: ${e.maxWidth>0?`${e.maxWidth}px`:"none"};
                `},(0,n.jsx)("div",{css:n.css`
                    position: relative;
                    height: 100%;
                    margin-left: ${-u/2}px;
                    margin-right: ${-u/2}px;
                    display: flex;
                    flex-direction: column;
                  `},a.length>0&&(0,n.jsx)(n.OneByOneAnimation,{className:(0,n.classNames)("row h-100 m-0",{"flex-nowrap":!this.props.isMultiRow}),css:n.css`
                        position: relative;
                        height: 100%;
                        overflow: ${this.props.isMultiRow?"auto":"unset"};
                      `},a.map(((e,t)=>this.createItem(a,t,l)))))))))}}class Nt extends n.React.PureComponent{constructor(e){super(e),this.onResize=(e,t)=>{var n;if(this.props.browserSizeMode!==this.props.mainSizeMode)return;if(0===e&&0===t)return;const{widgetId:o}=this.props;null!=(null===(n=window.runtimeInfo.widgets)||void 0===n?void 0:n[o])?window.runtimeInfo.widgets[o].height=t:window.runtimeInfo.widgets[o]={height:t}},this.handleDebounceResize=n.lodash.debounce(this.onResize,200)}findExtension(){var e;const t=n.ExtensionManager.getInstance().getExtensions(`${n.extensionSpec.ExtensionPoints.LayoutTransformer}`);if((null==t?void 0:t.length)>0){const o=t.find((e=>e.layoutType===n.LayoutType.RowLayout));this.layoutTransform=null===(e=o)||void 0===e?void 0:e.transformLayout}}transform(){const{layout:e,layouts:t,browserSizeMode:n,mainSizeMode:o}=this.props;null==this.layoutTransform&&this.findExtension();let i=e;t[n]!==e.id&&null!=this.layoutTransform&&(i=this.layoutTransform(e,o,n)),this.finalLayout=i}createRow(){const{layout:e,layouts:t}=this.props;return(0,n.jsx)(zt,{layouts:t,layout:e,transformedLayout:this.finalLayout,isMultiRow:this.finalLayout!==e})}render(){var e;const{layout:t,className:o}=this.props,i=null!==(e=t.setting)&&void 0!==e?e:Lt;return(0,n.jsx)(s.Consumer,null,(e=>(this.transform(),(0,n.jsx)("div",{className:(0,n.classNames)("layout d-flex",o),css:n.css`
                width: 100%;
                padding: ${y.styleUtils.toCSSPadding(i.style.padding)};
              `,"data-layoutid":t.id},this.createRow(),(0,n.jsx)(n.ReactResizeDetector,{handleHeight:!0,onResize:this.handleDebounceResize})))))}}const Bt=n.ReactRedux.connect(k)(Nt);class Ft{constructor(){this.id="flow-layout-transformer",this.layoutType=n.LayoutType.FlowLayout}transformLayout(e,t,o){if(t!==o&&o===n.BrowserSizeMode.Small){let t=(0,n.Immutable)(e);return(e.order||[]).forEach((e=>{t=t.setIn(["content",e,"setting","heightMode"],"auto")})),t}return e}transformLayoutItem(e,t,n,o,i,a){return{index:t,item:e}}}class Vt{constructor(){this.id="row-layout-transformer",this.layoutType=n.LayoutType.RowLayout}transformLayout(e,t,o){var i,a;if(t===o)return e;let r=(0,n.Immutable)(e);if(o===n.BrowserSizeMode.Small){const t=function(e,t,n){var o;const i=Se(e,n),a=function(e,t,n){var o,i,a,r,s,l,u;const d=e.widgets[n];if(null!=d){const c=X(),p=e.mainSizeMode,g=d.layouts.DEFAULT[c],y=d.layouts.DEFAULT[p],h=G(null!==(s=null===(r=null===(a=null===(i=(null!==(o=e.layouts[g])&&void 0!==o?o:e.layouts[y]).setting)||void 0===i?void 0:i.style)||void 0===a?void 0:a.padding)||void 0===r?void 0:r.number)&&void 0!==s?s:[0]),f=null!==(u=null===(l=null==t?void 0:t[n])||void 0===l?void 0:l.height)&&void 0!==u?u:0;let v=h[0],m=h[2];return j(v)&&(v=P(v,f)),j(m)&&(m=P(m,f)),f-v-m}return 0}(e,t,i);if(a>0){const t=null!==(o=e.layouts[n].order)&&void 0!==o?o:[],i={};return t.forEach((t=>{const o=e.layouts[n].content[t];i[t]=U(a,o)})),i}return null}(function(){const e=(0,n.getAppStore)().getState();return window.jimuConfig.isBuilder?null==e?void 0:e.appStateInBuilder:e}().appConfig,null===(i=window.runtimeInfo)||void 0===i?void 0:i.widgets,e.id);let o=0;Object.keys(null!==(a=e.content)&&void 0!==a?a:{}).sort(((t,n)=>parseInt(e.content[t].bbox.left,10)-parseInt(e.content[n].bbox.left,10))).forEach((i=>{var a,s,l;const u=e.content[i];if(!u.isPending){if(r=r.setIn(["content",i,"bbox"],{left:12*o,width:12,height:null!==(s=null===(a=u.bbox)||void 0===a?void 0:a.height)&&void 0!==s?s:"auto"}),null!=t){const e=null!==(l=u.setting)&&void 0!==l?l:(0,n.Immutable)({});r=r.setIn(["content",i,"bbox","height"],t[i].height).setIn(["content",i,"setting"],e.merge(t[i].setting))}o+=1}}))}return r}transformLayoutItem(e,t,n,o,i,a){return{item:e,index:t}}}const Wt={gutter:0,style:{padding:{number:[0],unit:"px"},justifyContent:"flex-start",alignItems:"stretch",borderRadius:{number:[0],unit:y.UnitTypes.PIXEL}}},Dt={lockParent:!0,heightMode:"auto",offsetX:0,offsetY:0};class Ht extends n.React.PureComponent{calHeight(e){const{layoutItem:t}=this.props,n=M(t.bbox||{},"height");if(!n||j(n))return"auto";switch(e.heightMode){case"auto":return"auto";case"fixed":return n}}getStyle(e){const{index:t,gutter:o}=this.props;return n.css`
      margin-top: ${t>0?`${o}px`:"unset"};
      width: ${function(e){const t=parseFloat(null==e?void 0:e.width);return t>0?`${e.width}`.includes("px")?`${Math.round(t)}px`:`${Math.round(t)}%`:"100%"}(e)};
      height: ${this.calHeight(e)};
      flex-shrink: 0;
      transform: ${e.offsetX||e.offsetY?`translate(${e.offsetX||0}px, ${e.offsetY||0}px)`:null};
    `}render(){const{layoutId:e,layoutItem:t,onClick:o,isEmpty:i}=this.props;if(!t||i)return null;const a=(0,n.classNames)("flow-layout-item","d-flex"),r=n.lodash.assign({},Dt,t.setting),s=re(this.props);return(0,n.jsx)(St,Object.assign({id:`${e}_block_${t.id}`,css:this.getStyle(r),layoutId:e,layoutItemId:t.id,onClick:o,className:a},s))}}const Gt=n.ReactRedux.connect((function(e,t){var o,i,a,r;let s=!0,l=!1;const{layoutItem:u}=t,d=null===(o=e.appRuntimeInfo)||void 0===o?void 0:o.selection;if(d&&(l=d.layoutId===t.layoutId&&d.layoutItemId===u.id),u.type===n.LayoutItemType.Widget){const t=u.widgetId,n=e.appConfig.widgets[t];let o=[0,0,0,0];if(n){o=y.styleUtils.expandStyleArray(null===(r=null===(a=null===(i=n.config)||void 0===i?void 0:i.style)||void 0===a?void 0:a.padding)||void 0===r?void 0:r.number);const t=Object.keys(n.layouts)[0],l=Pe(n.layouts[t],e.browserSizeMode,e.appConfig.mainSizeMode),u=e.appConfig.layouts[l];u&&Object.keys(u.content||[]).length>0&&Object.keys(u.content||[]).some((e=>{if(!u.content[e].isPending)return s=!1,!0}))}return{isEmpty:s,selected:l,padding:o[0]+o[2]}}return{selected:l,isEmpty:!1,padding:0}}))(Ht);class Ut extends n.React.PureComponent{calculatePosition(){const{layoutItem:e}=this.props;return function(e,t={}){var o,i,a;const r=e.setting,s=null!==(o=null==r?void 0:r.floatingArea)&&void 0!==o?o:1,l=`${null!==(i=null==r?void 0:r.offsetX)&&void 0!==i?i:0}px`,u=`${null!==(a=null==r?void 0:r.offsetY)&&void 0!==a?a:0}px`,{dh:d,dw:c,initWidth:p,initHeight:g,isResizing:y}=t,h=D()?`translateX(calc(50% + ${l}))`:`translateX(calc(-50% + ${l}))`,f={};switch(s){case 1:f.left=l,f.top=u,f.transform=null;break;case 2:f.left="50%",f.top=u,f.transform=h;break;case 3:f.right=l,f.top=u,f.transform=null;break;case 4:f.left=l,f.top="50%",f.transform=`translateY(calc(-50% + ${u}))`;break;case 5:f.left="50%",f.top="50%",f.transform=`${h} translateY(calc(-50% + ${u}))`;break;case 6:f.right=l,f.top="50%",f.transform=`translateY(calc(-50% + ${u}))`;break;case 7:f.left=l,f.bottom=u,f.transform=null;break;case 8:f.left="50%",f.bottom=u,f.transform=h;break;case 9:f.right=l,f.bottom=u,f.transform=null}return n.css`
    position: fixed;
    z-index: 1;
    width: ${y?`${p+c}px`:M(e.bbox,"width")};
    height: ${y?`${g+d}px`:M(e.bbox,"height")};
    left: ${f.left};
    right: ${f.right};
    top: ${f.top};
    bottom: ${f.bottom};
    transform: ${f.transform};
  `}(e)}render(){const{layoutId:e,layoutItem:t,onClick:o}=this.props;if(!t)return null;const i=(0,n.classNames)("flow-layout-item floating","d-flex");return(0,n.jsx)(St,{css:this.calculatePosition(),layoutId:e,layoutItemId:t.id,onClick:o,className:i})}}function _t(){const e=[0];for(let t=1;t<=100;t++)e.push(t/100);return e}function Xt(e){switch(e){case n.ScreenTriggerType.Top:return"0% 0% -98% 0%";case n.ScreenTriggerType.Bottom:return"-98% 0% -2px 0%";case n.ScreenTriggerType.Upper:return`-${100/3-1}% 0% -${200/3-1}% 0%`;case n.ScreenTriggerType.Lower:return`-${200/3-1}% 0% -${100/3-1}% 0%`;default:return}}const Yt=.33,Jt=.25;function Zt(e,t,o,i,a,r,s,l,u){const{side:d,size:c,offset:p,background:g,overlay:h=!0,padding:f}=e.panel||{},v=(0,n.getAppStore)().getState().appContext.isRTL?"left"===d?"-":"":"right"===d?"-":"",m=y.styleUtils.toBackgroundEmotionStyle(null!=g?g:{}),I=parseFloat(a);if(u){const e=!h;return n.css`
      width: 100%;
      background: transparent;
      pointer-events: none;
      position: relative;
      opacity: ${s===n.ScreenTransitionType.Fade?i?"1":"0.5":null};
      min-height: ${l===n.ScreenTransitionType.Cover?`${t}px`:null};
      padding-top: ${l!==n.ScreenTransitionType.Fade&&e?`${Math.round(t*Yt)}px`:null};

      &.top-spacing > .panel-content {
        /* margin-top: ${Math.round(t*Yt)}px; */
      }

      .panel-content {
        width: 100%;
        ${h?"":m};
        /* margin-top: ${s===n.ScreenTransitionType.Push?"${Math.round(viewHeight * SCREEN_RATIO_IN_SMALL_SIZE)}px":"unset"}; */

        > .layout, > .layout-wrapper > .layout {
          pointer-events: auto;
          ${h?m:""};
          min-height: ${Math.round(t*Jt)}px;
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
        min-height: ${Math.round(t*Jt)}px;
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
      min-height: ${r?t:Math.round(t*Jt)}px;
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
  `}function qt(e){var t;const{index:o,screenId:i,onInterctionChange:a,onHeightChange:r,viewHeight:s,headerHeight:l,layoutEntry:u,isActive:d,isSmallSize:c,transitionType:p,screenTransitionType:g,triggerType:y,stretched:h,verticalSpace:f="0"}=e,v=n.ReactRedux.useSelector((e=>e.appConfig.screens[i])),{panel:m}=v,I=n.React.useRef(),[w,x]=n.React.useState(!1),b=n.React.useRef(),S=n.React.useCallback((e=>{a(o,e)}),[o,a]);n.React.useEffect((()=>(b.current=n.lodash.debounce(r,200),()=>{var e;null===(e=b.current)||void 0===e||e.cancel()})),[r]);const T=n.React.useCallback(((e,t)=>{var n;null===(n=b.current)||void 0===n||n.call(b,o,t)}),[o]);return function(e,t,o,i){const a=n.React.useRef(),r=n.React.useRef();n.React.useEffect((()=>{if(a.current&&(a.current.unobserve(e),a.current=null),e&&"function"==typeof IntersectionObserver){const n=new IntersectionObserver((e=>{(e=>{const t=e.boundingClientRect,n=e.rootBounds,o=Math.abs(t.bottom-n.top)>=Math.abs(t.top-n.top);e.isIntersecting?(r.current=!0,o&&i(!0)):r.current&&(r.current=!1,o)&&i(!1)})(e[0])}),{threshold:_t(),root:t||document.body,rootMargin:Xt(o)});return n.observe(e),a.current=n,()=>{a.current.unobserve(e),a.current=null}}}),[e,t,i,o])}(I.current,e.refElement,c?n.ScreenTriggerType.Lower:null!=y?y:n.ScreenTriggerType.Bottom,S),n.React.useEffect((()=>{x(!0)}),[]),(0,n.jsx)("div",{className:(0,n.classNames)("screen-side-panel",{"top-spacing":0===o&&((null===(t=v.panel)||void 0===t?void 0:t.overlay)||c)}),"data-screenid":i,"data-index":o,ref:I,css:Zt(v,s,l,d,f,h||null==m,p,g,c)},m&&(0,n.jsx)("div",{className:"panel-content"},(0,n.jsx)(u,{layouts:m.layout}),(0,n.jsx)("div",{className:(0,n.classNames)("panel-spacing",{"last-item":e.isLast})})),!m&&(0,n.jsx)("div",{className:"panel-content-placeholder"}),(0,n.jsx)(n.ReactResizeDetector,{handleHeight:!0,onResize:T}))}var Kt=i(5467),Qt=i.n(Kt);const en=e=>{const{className:t}=e,o=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(n[o[i]]=e[o[i]])}return n}(e,["className"]),i=(0,n.classNames)("jimu-icon-component",t);return n.React.createElement(y.Icon,Object.assign({className:i,icon:Qt()},o))};function tn(e){const{rootLayoutId:t,viewHeight:o,headerHeight:i,screenId:a,isActive:r,isAbsolute:s,isLast:l,isSmallSize:d,layoutEntry:c,isDesignMode:p,formatMessage:g,builderTheme:h}=e,f=n.ReactRedux.useSelector((e=>e.appConfig.screens[a])),v=n.ReactRedux.useSelector((e=>{var t,n,o;return null===(o=null===(n=null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.screenPanelStates)||void 0===n?void 0:n[a])||void 0===o||o})),{main:m}=f,{side:I,size:w,overlay:x=!0}=f.panel||{},b=n.React.useRef(),S=n.React.useCallback((()=>{(0,n.getAppStore)().dispatch(n.appActions.screenPanelVisibleChanged(a,!0))}),[a]),T=(0,n.classNames)("screen-main-panel",{"is-active":r,"last-one":l});return(0,n.jsx)(u.Provider,{value:!s||r},(0,n.jsx)("div",{id:`${t}_screen_${a}`,className:T,css:function(){var e,t,a,r;if(d){const a=!x&&null!=f.panel,r=a?`${Math.round(o*Yt)}px`:`${o}px`,s=a?`${Math.round(33)}`:"100";return n.css`
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
    `}(),ref:b,"data-screenid":a,"data-index":e.index},(0,n.jsx)(c,{layouts:m.layout,isInWidget:!0}),(0,n.jsx)("div",{className:"spacing-area"}),p&&!v&&(0,n.jsx)("div",{className:"toggle-visible-btn",onClick:S,"data-testid":"toggleBtn"},(0,n.jsx)(y.Tooltip,{placement:"auto",title:g("showInDesignView")},(0,n.jsx)(y.Button,{type:"default",size:"sm",className:"rounded"},(0,n.jsx)(en,{size:"m"}))))))}function nn(e,t,o,i,a){return e===n.ScreenTransitionType.Fade?n.css`
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
    `:void 0}function on(e,t,o){return e===n.ScreenTransitionType.Fade?n.css`
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
    `:void 0}function an(e){const{rootLayoutId:t,activeIndex:o,viewHeight:i,headerHeight:a,screens:r,transitionType:s,isSmallSize:l,layoutEntry:u,isDesignMode:d,formatMessage:c,builderTheme:p}=e;return(0,n.jsx)(n.React.Fragment,null,(0,n.jsx)("div",{className:"screen-container",css:nn(s,i,a,l,r.length)},r.map(((e,g)=>(0,n.jsx)(tn,{key:e,rootLayoutId:t,index:g,isActive:o===g,screenId:e,viewHeight:i,headerHeight:a,isAbsolute:s===n.ScreenTransitionType.Fade,isLast:g===r.length-1,isSmallSize:l,layoutEntry:u,isDesignMode:d,formatMessage:c,builderTheme:p})))),(0,n.jsx)("div",{className:"screen-placeholder",css:on(s,i)}))}function rn(e,t){return n.css`
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
  `}function sn(e){var t;const{layoutId:o,layoutItemId:i,layoutItem:a}=e,{screenGroupId:r}=a,l=n.ReactRedux.useSelector((e=>e.appConfig.screenGroups[a.screenGroupId])),u=n.ReactRedux.useSelector((e=>e.appConfig.screenGroups[a.screenGroupId].screens.some((t=>null!=e.appConfig.screens[t].panel)))),d=n.ReactRedux.useSelector((e=>e.browserSizeMode)),{pageId:c}=n.React.useContext(s),p=n.ReactRedux.useSelector((e=>{const t=e.appConfig.pages[c];if(null==t?void 0:t.header){const t=e.appConfig.header;if(null==t?void 0:t.sticky){const n=e.browserSizeMode,o=e.appConfig.mainSizeMode,i=t.height[n]||t.height[o]||75;return parseInt(i,10)}}return 0})),{screens:g,stretchPanel:y=!0,triggerType:h=n.ScreenTriggerType.Bottom,verticalSpace:f="0",panelTransitionType:v=n.ScreenTransitionType.Push}=l;let m=null!==(t=l.transitionType)&&void 0!==t?t:n.ScreenTransitionType.Fade;d!==n.BrowserSizeMode.Small||u||(m=n.ScreenTransitionType.Cover);const I=n.ReactRedux.useSelector((e=>{var t;return null===(t=e.appRuntimeInfo.screenGroupNavInfos)||void 0===t?void 0:t[r]})),w=n.React.useRef(),x=n.React.useRef(),b=n.React.useRef(),[S,T]=n.React.useState(0),C=n.React.useMemo((()=>{var e,t,o;if(d!==n.BrowserSizeMode.Small)return!1;const i=(0,n.getAppStore)().getState().appConfig,a=null===(t=null===(e=i.screenGroups)||void 0===e?void 0:e[r])||void 0===t?void 0:t.screens;return!!(null==a?void 0:a[S])&&(null===(o=i.screens[a[S]].panel)||void 0===o?void 0:o.overlay)}),[r,S,d]);n.React.useEffect((()=>{null!=(null==I?void 0:I.activeIndex)&&I.activeIndex!==S&&T(I.activeIndex)}),[I,S]);const R=n.React.useCallback(((e,t)=>{t&&e!==S?(0,n.getAppStore)().dispatch(n.appActions.screenGroupNavInfoChanged(r,e,!1)):!t&&e>0&&(0,n.getAppStore)().dispatch(n.appActions.screenGroupNavInfoChanged(r,e-1,!1))}),[S,r]),j=n.React.useCallback((()=>{if(!x.current)return;const e=x.current.children[0],t=x.current.children[1];e.style.height=`${t.clientHeight}px`}),[]),$=n.React.useMemo((()=>n.lodash.debounce(j,200)),[j]),M=n.React.useCallback(((e,t)=>{if(!x.current)return;const o=x.current.children[0],i=x.current.children[1];if(m!==n.ScreenTransitionType.Fade)if(m!==n.ScreenTransitionType.Cover){if(m===n.ScreenTransitionType.Push){const t=o.querySelector(`div.screen-main-panel[data-index="${e}"]`),n=i.querySelector(`div.screen-side-panel[data-index="${e}"]`);t.style.height=`${n.clientHeight}px`,o.style.height=`${i.clientHeight}px`}}else!function(e,t,o){const i=e.querySelectorAll("div.screen-main-panel"),a=t.querySelectorAll("div.screen-side-panel"),r=i.length;for(let e=1;e<r;e++){const t=i.item(e),n=i.item(e-1),o=a.item(e-1);t.style.marginTop=o.clientHeight-n.clientHeight+"px"}o!==n.BrowserSizeMode.Small&&(e.style.height=`${t.clientHeight}px`)}(o,i,d);else o.style.height=`${i.clientHeight}px`}),[d,m]);return g.length>0?(0,n.jsx)("div",{className:(0,n.classNames)("flow-layout-item",{"small-size":d===n.BrowserSizeMode.Small}),css:rn(0,C),"data-layoutitemid":i,"data-layoutid":o,ref:w},(0,n.jsx)("div",{className:"screen-group",ref:x},(0,n.jsx)("div",{className:"main-panels",ref:b},(0,n.jsx)(an,{rootLayoutId:o,activeIndex:S,screens:g,transitionType:m,layoutEntry:st,headerHeight:p,isSmallSize:d===n.BrowserSizeMode.Small})),(0,n.jsx)("div",{className:"side-panels"},g.map(((e,t)=>(0,n.jsx)(qt,{key:e,index:t,isLast:t===g.length-1,screenId:e,refElement:null,layoutEntry:st,isActive:t===S,stretched:y,triggerType:h,verticalSpace:f,transitionType:v,screenTransitionType:m,onHeightChange:M,onInterctionChange:R,isSmallSize:d===n.BrowserSizeMode.Small,headerHeight:p}))),(0,n.jsx)(n.ReactResizeDetector,{handleHeight:!0,onResize:$})))):null}class ln extends n.React.PureComponent{constructor(e){var t;super(e);const o=n.ExtensionManager.getInstance().getExtensions(`${n.extensionSpec.ExtensionPoints.LayoutTransformer}`);if(o&&o.length>0){const e=o.find((e=>e.layoutType===this.props.layout.type));this.layoutTransform=null===(t=e)||void 0===t?void 0:t.transformLayout}}_createItem(e,t,o){var i;const{layout:a}=this.props;return e.type===n.LayoutItemType.ScreenGroup?(0,n.jsx)(sn,{key:`${e.id}_${t}`,itemIndex:t,layoutId:a.id,layoutItemId:e.id,layoutItem:e}):(null===(i=e.setting)||void 0===i?void 0:i.isFloating)?(0,n.jsx)(Ut,{key:e.id,index:t,gutter:o.gutter,layoutId:a.id,layoutItemId:e.id,layoutItem:e}):(0,n.jsx)(Gt,{key:e.id,index:t,gutter:o.gutter,layoutId:a.id,layoutItemId:e.id,layoutItem:e})}render(){const{layout:e,className:t,style:o,layouts:i,browserSizeMode:a}=this.props;return e?(0,n.jsx)(s.Consumer,null,(r=>{let s=e;if(i[a]!==e.id&&this.layoutTransform){let t;Object.keys(i).some((n=>{if(i[n]===e.id)return t=n,!0})),s=this.layoutTransform(e,t,a)}const l=s.order||[],u=n.lodash.assign({},Wt,s.setting),d=Object.assign(Object.assign(Object.assign({},o),y.styleUtils.toCSSStyle(u.style)),{position:"relative"}),c=(0,n.classNames)("layout flow-layout w-100",t);return(0,n.jsx)("div",{className:c,style:d,"data-layoutid":e.id},(0,n.jsx)(n.OneByOneAnimation,{"data-layoutid":s.id,enableScroll:!0,className:"trail-container d-flex flex-column align-items-center",css:n.css`
                  width: 100%;
                `},l.map(((e,t)=>this._createItem(s.content[e],t,u)))))})):null}}const un=n.ReactRedux.connect(k)(ln);var dn;!function(e){e.Horizontal="H",e.Vertical="V"}(dn||(dn={}));const cn={showSplitter:!0,splitterSize:5,splitterColor:"#000"};n.React.createContext(cn);class pn extends n.React.PureComponent{render(){const{layoutId:e,layoutItem:t}=this.props;if(!t)return null;const o=n.css`
      position: relative;
      width: ${M(t.bbox,"width")};
      height: ${M(t.bbox,"height")};
      flex-shrink: 1;
      flex-grow: 1;
    `;return(0,n.jsx)(St,{css:o,layoutId:e,layoutItemId:t.id,onClick:this.props.onClick})}}const gn=n.ReactRedux.connect(L)(pn);class yn extends n.React.PureComponent{getStyle(){const{direction:e,size:t,color:o}=this.props,i=`${t}px`;return n.css`
      width: ${e===dn.Vertical?"100%":i};
      height: ${e===dn.Vertical?i:"100%"};
      background: ${o};
      position: relative;
      z-index: ${x.HandlerTools};

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
    `}render(){const{direction:e}=this.props;return(0,n.jsx)("div",{ref:e=>{this.ref=e},css:this.getStyle()},(0,n.jsx)("div",{className:(0,n.classNames)({"horizontal-splitter":e===dn.Horizontal,"vertical-splitter":e===dn.Vertical})}))}}class hn extends n.React.PureComponent{createItems(e,t){const{layoutId:o,layoutItem:i,splitterColor:a,splitterSize:r}=this.props,s=[];return e.forEach(((l,u)=>{const d=t.includes(l)?fn:gn;s.push(n.React.createElement(d,{key:l,layoutId:o,layoutItemId:l})),u!==e.length-1&&s.push(n.React.createElement(yn,{key:`${l}_splitter`,layoutId:o,direction:i.direction,prevItemId:e[u],nextItemId:e[u+1],size:r,color:a}))})),s}render(){const{layoutItem:e,subContainerIds:t}=this.props;if(!e)return null;const o=e.items&&e.items.length>0?e.items:[e.id],i=t.split(","),a=(0,n.classNames)("grid-container d-flex justify-content-start",{"flex-column":e.direction===dn.Vertical}),r={width:e.bbox.width,height:e.bbox.height,flexShrink:1,flexGrow:1};return n.React.createElement("div",{className:a,"data-layoutitemid":e.id,"data-layoutid":this.props.layoutId,style:r,ref:e=>{this.ref=e}},this.createItems(o,i))}}const fn=n.ReactRedux.connect((function(e,t){const{layoutId:n,layoutItemId:o}=t,{layouts:i}=e.appConfig,a=i[n],r=a.content[o],s=[];return r&&r.items&&r.items.forEach((e=>{const t=a.content[e];t&&t.items&&s.push(e)})),{layoutItem:r,subContainerIds:s.join(",")}}))(hn);class vn extends n.React.PureComponent{render(){var e,t;const{layout:o,className:i}=this.props,a=n.lodash.assign({},cn,o.setting&&o.setting.splitter),r=null===(e=o.setting)||void 0===e?void 0:e.style,s=null===(t=o.setting)||void 0===t?void 0:t.rootItemId,l=Object.assign(Object.assign({position:"relative"},y.styleUtils.toCSSStyle(r)),{overflow:"hidden"}),u=(0,n.classNames)("layout grid-layout d-flex w-100",i);return(0,n.jsx)("div",{className:u,style:l,"data-layoutid":o.id},s&&(0,n.jsx)(fn,{layoutId:o.id,layoutItemId:s,splitterSize:a.size,splitterColor:a.color}))}}const mn=n.ReactRedux.connect(k)(vn);function In(e){const{pageJson:t,visible:o,pageContext:i,browserSizeMode:a}=e,[r,l]=n.React.useState(),d=t.layout,c=t.oneByOneEffect&&t.oneByOneEffect.type!==n.AnimationType.None?t.oneByOneEffect:null,p=c?!o:null;n.React.useEffect((()=>{c&&l(Symbol("autoplay when switching to visible"))}),[o]);const g=n.React.useMemo((()=>({trigger:n.AnimationTriggerType.Manual,setting:c,revert:p,inheritedOneByOneSetting:null,playId:c?r:null,depth:0})),[c,p,r]);let y;t.mode!==n.PageMode.FitWindow&&t.maxWidth>0&&(y=t.maxWidth);const h=n.React.useMemo((()=>Object.assign(Object.assign({},i),{maxWidth:y,viewOnly:!0,pageId:t.id})),[i,y,t.id]);if(d)return(0,n.jsx)(s.Provider,{key:t.id,value:h},(0,n.jsx)(u.Provider,{value:o},(0,n.jsx)("div",{id:t.id,"data-pageid":t.id,className:"page",style:{display:o?"flex":"none",backgroundColor:t.bodyBackgroundColor||"transparent",height:"auto",flex:"1 0 auto",zIndex:1}},(0,n.jsx)(n.AnimationContext.Provider,{value:g},(0,n.jsx)(st,{layouts:d,className:"w-100 flex-grow-1",css:n.css`
                margin: 0 auto;
                background-color: transparent;
              `})))))}function wn(e){var t,o;const{headerJson:i,visible:a,browserSizeMode:r,theme:l,mainSizeMode:d,pageContext:c}=e,p=i.height[r]||i.height[d]||50,g=i.layout;let y;i.backgroundIMage&&("string"==typeof i.backgroundIMage?y=i.backgroundIMage:"object"==typeof i.backgroundIMage&&(y=i.backgroundIMage.url));const h=n.React.useMemo((()=>{var e;return n.css`
      display: ${a?"flex":"none"};
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
    `}),[a,p,i.sticky,i.backgroundColor,y,i.backgroundPosition,null===(t=null==l?void 0:l.header)||void 0===t?void 0:t.bg,null===(o=null==l?void 0:l.header)||void 0===o?void 0:o.color]),f=n.React.useMemo((()=>Object.assign(Object.assign({},c),{viewOnly:!0})),[c]);return(0,n.jsx)(s.Provider,{value:f},(0,n.jsx)(u.Provider,{value:a},(0,n.jsx)("div",{className:"header",css:h},(0,n.jsx)(st,{layouts:g,className:"w-100 flex-grow-1"}))))}function xn(e){var t,o;const{footerJson:i,visible:a,browserSizeMode:r,theme:l,mainSizeMode:d,pageContext:c}=e,p=i.height[r]||i.height[d]||50,g=i.layout;let y;i.backgroundIMage&&("string"==typeof i.backgroundIMage?y=i.backgroundIMage:"object"==typeof i.backgroundIMage&&(y=i.backgroundIMage.url));const h=n.React.useMemo((()=>{var e;return n.css`
      display: ${a?"flex":"none"};
      width: 100%;
      min-height: ${Math.round(parseFloat(p))}px;
      height: auto;
      overflow: hidden;
      background-color: ${i.backgroundColor||l.footer.bg||"transparent"};
      background-image: ${y};
      background-position: ${i.backgroundPosition};
      color: ${null===(e=null==l?void 0:l.footer)||void 0===e?void 0:e.color};
      z-index: 0;
    `}),[a,p,i.backgroundColor,y,i.backgroundPosition,null===(t=null==l?void 0:l.footer)||void 0===t?void 0:t.bg,null===(o=null==l?void 0:l.footer)||void 0===o?void 0:o.color]),f=n.React.useMemo((()=>Object.assign(Object.assign({},c),{viewOnly:!0})),[c]);return(0,n.jsx)(s.Provider,{value:f},(0,n.jsx)(u.Provider,{value:a},(0,n.jsx)("div",{className:"footer",css:h},(0,n.jsx)(st,{layouts:g,className:"w-100 flex-grow-1"}))))}ot(n.LayoutType.FixedLayout,jt),ot(n.LayoutType.FlowLayout,un),ot(n.LayoutType.GridLayout,mn),ot(n.LayoutType.ColumnLayout,Pt);class bn extends n.React.PureComponent{constructor(e){super(e),n.ExtensionManager.getInstance().registerExtension({epName:n.extensionSpec.ExtensionPoints.LayoutTransformer,extension:new Ft}),n.ExtensionManager.getInstance().registerExtension({epName:n.extensionSpec.ExtensionPoints.LayoutTransformer,extension:new Vt}),this.pageContext={theme:this.props.theme}}componentDidUpdate(e){Sn(e.pageStatus)!==Sn(this.props.pageStatus)&&(this.pageRef.scrollTop=0)}render(){const{pageStatus:e,pages:t,theme:o}=this.props,i=Sn(e);if(!i||!(null==t?void 0:t[i]))return null;let a="100%";const r=t[i]||{};r&&!isNaN(+r.width)&&(a=+r.width);const s={width:a,margin:"0 auto",minHeight:"100%",overflow:"auto",height:"100%",backgroundColor:r&&r.backgroundColor};return(0,n.jsx)("div",{className:"page-renderer d-flex flex-column",css:s,ref:e=>{this.pageRef=e},"data-testid":"pageRenderer"},this.renderDialog(),this.renderHeader(),Object.keys(e).map((e=>this.renderPageBody(e,o))),this.renderFooter())}renderHeader(){if(!this.props.header)return null;const{header:e,headerVisible:t,browserSizeMode:o,theme:i,mainSizeMode:a}=this.props;return(0,n.jsx)(wn,{headerJson:e,pageContext:this.pageContext,visible:t,browserSizeMode:o,mainSizeMode:a,theme:i})}renderFooter(){if(!this.props.footer)return null;const{footer:e,footerVisible:t,browserSizeMode:o,mainSizeMode:i,theme:a}=this.props;return(0,n.jsx)(xn,{footerJson:e,pageContext:this.pageContext,visible:t,browserSizeMode:o,mainSizeMode:i,theme:a})}renderPageBody(e,t){const{pageStatus:o,pages:i}=this.props,a=i[e];if(!a)return;const r=!!o[e];return(0,n.jsx)(In,{key:a.id,pageJson:a,pageContext:this.pageContext,browserSizeMode:this.props.browserSizeMode,visible:r})}renderDialog(){const{dialogId:e,urlDialogJson:t,splashDialogJson:o,isSplashClosed:i,isPageDlgClosed:a,pageDialogJson:r,pageDialogId:l}=this.props;return(0,n.jsx)(n.React.Fragment,null,t&&(0,n.jsx)(s.Provider,{value:Object.assign(Object.assign({},this.pageContext),{dialogId:e,viewOnly:!0})},(0,n.jsx)(n.AppDialog,{dialogJson:t,runtime:!0})),!a&&r&&(null==t?void 0:t.id)!==r.id&&(0,n.jsx)(s.Provider,{value:Object.assign(Object.assign({},this.pageContext),{dialogId:l,viewOnly:!0})},(0,n.jsx)(n.AppDialog,{dialogJson:r,runtime:!0,isOpenByPage:!0})),!i&&o&&(null==t?void 0:t.id)!==o.id&&(0,n.jsx)(s.Provider,{value:Object.assign(Object.assign({},this.pageContext),{dialogId:o.id,viewOnly:!0})},(0,n.jsx)(n.AppDialog,{dialogJson:o,runtime:!0})))}}function Sn(e){return Object.keys(e).find((t=>e[t]))}bn.displayName="RuntimePageRenderer";const Tn=n.ReactRedux.connect(((e,t)=>{var n,o,i,a,r,s;const l=Sn(t.pageStatus);if(!l||!e.appConfig.pages[l])return{};const u=window.jimuConfig.isBuilder?e.appStateInBuilder:e,d=null===(n=null==u?void 0:u.appRuntimeInfo)||void 0===n?void 0:n.dialogInfos,c=null===(o=null==u?void 0:u.appRuntimeInfo)||void 0===o?void 0:o.currentPageId,p=null===(a=null===(i=null==u?void 0:u.appConfig)||void 0===i?void 0:i.pages[c])||void 0===a?void 0:a.autoOpenDialogId,g=e.appConfig.dialogs,y=g[Object.keys(g).find((e=>g[e].isSplash))];return{pages:e.appConfig.pages,header:e.appConfig.header,headerVisible:!!e.appConfig.pages[l].header,footer:e.appConfig.footer,footerVisible:!!e.appConfig.pages[l].footer,browserSizeMode:e.browserSizeMode,mainSizeMode:e.appConfig.mainSizeMode,theme:e.theme,splashDialogJson:y,isSplashClosed:null===(r=null==d?void 0:d[null==y?void 0:y.id])||void 0===r?void 0:r.isClosed,pageDialogId:p,pageDialogJson:g[p],isPageDlgClosed:null===(s=null==d?void 0:d[c+"-"+p])||void 0===s?void 0:s.isClosed,urlDialogJson:g[t.dialogId]}}))(bn);function Cn(){return e=this,t=void 0,o=function*(){return yield Promise.all([r()])},new((n=void 0)||(n=Promise))((function(i,a){function r(e){try{l(o.next(e))}catch(e){a(e)}}function s(e){try{l(o.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,s)}l((o=o.apply(e,t||[])).next())}));var e,t,n,o}})(),a})())}}}));