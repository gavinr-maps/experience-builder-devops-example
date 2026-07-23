/*! For license information please see layout-runtime.js.LICENSE.txt */
System.register(["jimu-core","jimu-core/emotion","jimu-ui","jimu-theme","jimu-arcgis","jimu-layouts/layout-runtime","jimu-core/react"],function(e,t){var o={},n={},i={},a={},r={},l={},s={};return Object.defineProperty(s,"__esModule",{value:!0}),{setters:[function(e){o.AnimationContext=e.AnimationContext,o.AnimationLight=e.AnimationLight,o.AnimationTriggerType=e.AnimationTriggerType,o.AnimationType=e.AnimationType,o.AppDialog=e.AppDialog,o.AppMode=e.AppMode,o.BrowserSizeMode=e.BrowserSizeMode,o.ContainerType=e.ContainerType,o.DEFAULT_VARIANTS=e.DEFAULT_VARIANTS,o.DialogMode=e.DialogMode,o.ErrorBoundary=e.ErrorBoundary,o.ExtensionManager=e.ExtensionManager,o.FixedPosition=e.FixedPosition,o.GridItemType=e.GridItemType,o.INTERACTIVE_CLASS=e.INTERACTIVE_CLASS,o.Immutable=e.Immutable,o.Keyboard=e.Keyboard,o.LayoutItemType=e.LayoutItemType,o.LayoutParentType=e.LayoutParentType,o.LayoutType=e.LayoutType,o.PageMode=e.PageMode,o.PagePart=e.PagePart,o.PageVisibilityContext=e.PageVisibilityContext,o.React=e.React,o.ReactDOM=e.ReactDOM,o.ReactRedux=e.ReactRedux,o.ReactResizeDetector=e.ReactResizeDetector,o.ScreenTransitionType=e.ScreenTransitionType,o.ScreenTriggerType=e.ScreenTriggerType,o.TransitionContainer=e.TransitionContainer,o.ViewVisibilityContext=e.ViewVisibilityContext,o.WIDGET_PREFIX_FOR_A11Y_SKIP=e.WIDGET_PREFIX_FOR_A11Y_SKIP,o.WidgetManager=e.WidgetManager,o.WidgetState=e.WidgetState,o.WidgetType=e.WidgetType,o.appActions=e.appActions,o.appConfigUtils=e.appConfigUtils,o.classNames=e.classNames,o.createSelector=e.createSelector,o.css=e.css,o.defaultMessages=e.defaultMessages,o.extensionSpec=e.extensionSpec,o.focusElementInKeyboardMode=e.focusElementInKeyboardMode,o.getA11yProps=e.getA11yProps,o.getAppStore=e.getAppStore,o.getHoverStyle=e.getHoverStyle,o.getIndexFromProgress=e.getIndexFromProgress,o.getPageSkipToIds=e.getPageSkipToIds,o.hooks=e.hooks,o.i18n=e.i18n,o.jimuHistory=e.jimuHistory,o.loadArcGISJSAPIModule=e.loadArcGISJSAPIModule,o.lodash=e.lodash,o.moduleLoader=e.moduleLoader,o.motion=e.motion,o.polished=e.polished,o.portalUtils=e.portalUtils,o.prepareLocalVariants=e.prepareLocalVariants,o.prepareOneByOneTransition=e.prepareOneByOneTransition,o.prepareOneByOneVariants=e.prepareOneByOneVariants,o.translatedLocales=e.translatedLocales,o.utils=e.utils},function(e){n.jsx=e.jsx,n.jsxs=e.jsxs},function(e){i.Button=e.Button,i.DistanceUnits=e.DistanceUnits,i.FOCUSABLE_CONTAINER_CLASS=e.FOCUSABLE_CONTAINER_CLASS,i.FillType=e.FillType,i.Icon=e.Icon,i.Loading=e.Loading,i.LoadingType=e.LoadingType,i.Modal=e.Modal,i.ModalBody=e.ModalBody,i.PanelHeader=e.PanelHeader,i.Surface=e.Surface,i.Tab=e.Tab,i.Tabs=e.Tabs,i.Tooltip=e.Tooltip,i.Typography=e.Typography,i.defaultMessages=e.defaultMessages,i.getFocusableElements=e.getFocusableElements,i.hooks=e.hooks,i.styleUtils=e.styleUtils,i.useFullscreenElement=e.useFullscreenElement,i.useTrapFocusBySelector=e.useTrapFocusBySelector},function(e){a.getThemeModule=e.getThemeModule,a.mapping=e.mapping,a.styled=e.styled,a.withBuilderTheme=e.withBuilderTheme,a.withTheme=e.withTheme},function(e){r.MapViewManager=e.MapViewManager},function(e){l.utils=e.utils},function(e){s.default=e.default||e,Object.keys(e).forEach(function(t){s[t]=e[t]})}],execute:function(){e((()=>{var e={598(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12"><path fill="#fff" fill-rule="evenodd" d="M12 0H7v1h4v4h1V0M0 12h5v-1H1V7H0v5" clip-rule="evenodd"></path></svg>'},194(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M8 12c-2.667 0-5.667-1.333-7-4 1.333-2.667 4.333-4 7-4s5.667 1.333 7 4c-1.333 2.667-4.333 4-7 4m0-7c-2.618 0-4.578.967-6 3 1.422 2.033 3.382 3 6 3s4.578-.967 6-3c-1.422-2.033-3.382-3-6-3m0 5.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" clip-rule="evenodd"></path></svg>'},9465(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path fill="#000" fill-rule="evenodd" d="M14 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2zM2 1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1" clip-rule="evenodd"></path><path fill="#000" fill-rule="evenodd" d="M20 8a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2zM8 7h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1" clip-rule="evenodd"></path></svg>'},4113(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M1 3h14v1H1zM9 7h6v1H9zM5.036 6.146a.5.5 0 0 0-.708 0L1.146 9.328a.5.5 0 1 0 .708.708l2.328-2.329V14.5h1V7.707l2.328 2.329a.5.5 0 1 0 .708-.708z"></path></svg>'},3424(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M1 3h14v1H1zM9 7h6v1H9zM4.328 14.354a.5.5 0 0 0 .708 0l3.182-3.182a.5.5 0 1 0-.708-.708l-2.328 2.329V6h-1v6.793l-2.328-2.328a.5.5 0 1 0-.708.707z"></path></svg>'},85(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M11.347 2.146a.485.485 0 0 1 0 .708L5.76 8l5.587 5.146a.486.486 0 0 1 0 .708.54.54 0 0 1-.738 0l-5.956-5.5a.485.485 0 0 1 0-.708l5.956-5.5a.54.54 0 0 1 .738 0" clip-rule="evenodd"></path></svg>'},6024(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M4.653 13.854a.485.485 0 0 1 0-.708L10.24 8 4.653 2.854a.485.485 0 0 1 0-.708.54.54 0 0 1 .738 0l5.956 5.5a.485.485 0 0 1 0 .708l-5.956 5.5a.54.54 0 0 1-.738 0" clip-rule="evenodd"></path></svg>'},8689(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M13.146 13.847a.486.486 0 0 0 .708 0 .54.54 0 0 0 0-.738l-5.5-5.956a.485.485 0 0 0-.708 0l-5.5 5.956a.54.54 0 0 0 0 .738.485.485 0 0 0 .708 0L8 8.26zm0-5a.485.485 0 0 0 .708 0 .54.54 0 0 0 0-.738l-5.5-5.956a.485.485 0 0 0-.708 0l-5.5 5.956a.54.54 0 0 0 0 .738.485.485 0 0 0 .708 0L8 3.26z" clip-rule="evenodd"></path></svg>'},1595(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m8.745 8 6.1 6.1a.527.527 0 1 1-.745.746L8 8.746l-6.1 6.1a.527.527 0 1 1-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 0 1 .746-.746l6.1 6.1 6.1-6.1a.527.527 0 0 1 .746.746z"></path></svg>'},3935(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M8 2.125 14.334 14H1.667zm-.882-.47a1 1 0 0 1 1.765 0l6.333 11.874A1 1 0 0 1 14.334 15H1.667a1 1 0 0 1-.882-1.47zM8 4.874a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0L8.9 5.87a.905.905 0 0 0-.9-.995m1 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0" clip-rule="evenodd"></path></svg>'},5399(e,t,o){"use strict";var n=o(8972);var i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=n.useSyncExternalStore,r=n.useRef,l=n.useEffect,s=n.useMemo,d=n.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,o,n,u){var c=r(null);if(null===c.current){var p={hasValue:!1,value:null};c.current=p}else p=c.current;c=s(function(){function e(e){if(!l){if(l=!0,a=e,e=n(e),void 0!==u&&p.hasValue){var t=p.value;if(u(t,e))return r=t}return r=e}if(t=r,i(a,e))return t;var o=n(e);return void 0!==u&&u(t,o)?(a=e,t):(a=e,r=o)}var a,r,l=!1,s=void 0===o?null:o;return[function(){return e(t())},null===s?void 0:function(){return e(s())}]},[t,o,n,u]);var g=a(e,c[0],c[1]);return l(function(){p.hasValue=!0,p.value=g},[g]),d(g),g}},9895(e,t,o){"use strict";e.exports=o(5399)},2686(e){"use strict";e.exports=r},9244(e){"use strict";e.exports=o},7386(e){"use strict";e.exports=n},8972(e){"use strict";e.exports=s},1496(e){"use strict";e.exports=l},1888(e){"use strict";e.exports=a},4321(e){"use strict";e.exports=i}},t={};function d(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,d),i.exports}d.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return d.d(t,{a:t}),t},d.d=(e,t)=>{for(var o in t)d.o(t,o)&&!d.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},d.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var u={};return(()=>{"use strict";d.r(u),d.d(u,{A11ySkip:()=>qo,AccordionLayoutViewer:()=>Do,CLICK_TOLERANCE:()=>I,COLS_IN_ONE_ROW:()=>y,CONTEXT_MENU_ICON_SIZE:()=>f,CONTEXT_MENU_ITEM_SIZE:()=>h,ColumnLayoutViewer:()=>Ut,DEFAULT_AUTOPLAY_INTERVAL:()=>x,FixedLayoutViewer:()=>Ht,FlexRowLayoutViewer:()=>Jo,GridLayoutViewer:()=>So,ItemTitle:()=>st,LayoutContext:()=>c,LayoutEntry:()=>ht,LayoutItem:()=>Nt,LayoutItemSizeModes:()=>b,LayoutZIndex:()=>w,MIN_LAYOUT_ITEM_SIZE:()=>m,OrderAdjustType:()=>p,PageContext:()=>l,PageRenderer:()=>ci,RowLayoutViewer:()=>Qt,SectionRenderer:()=>kt,ViewportVisibilityContext:()=>s,WidgetRenderer:()=>at,controlPanelUtils:()=>o,defaultMessages:()=>i,findLayoutBuilder:()=>gt,findLayoutViewer:()=>vt,init:()=>gi,registerLayoutBuilder:()=>ct,registerLayoutViewer:()=>pt,searchUtils:()=>t,utils:()=>e});var e={};d.r(e),d.d(e,{autoBindHandlers:()=>ie,calHeightOfLayoutItem:()=>Se,changeLayout:()=>Fe,contains:()=>ke,emptyFunc:()=>ne,expandStyleArray:()=>be,fromRatio:()=>ue,gcd:()=>Be,getActivePagePart:()=>Me,getAppConfig:()=>Ce,getCurrentDialogId:()=>je,getCurrentDialogRootLayoutId:()=>Pe,getCurrentPageId:()=>Te,getCurrentPageRootLayoutId:()=>$e,getCurrentSizeMode:()=>Re,getFooterRootLayoutId:()=>Oe,getHeaderRootLayoutId:()=>Le,getLayoutItemSizeMode:()=>ze,getMaximumId:()=>ae,getValueOfBBox:()=>se,intersects:()=>Ee,isFunctionalWidget:()=>ye,isNumber:()=>le,isPercentage:()=>re,isRTL:()=>xe,isWidgetHasEmbeddedLayout:()=>ve,isWidgetPlaceholder:()=>he,mapStateToLayoutItemProps:()=>pe,mapStateToLayoutProps:()=>ce,mapStateToWidgetProps:()=>ge,normalizeLinearUnit:()=>Ae,parseAspectRatio:()=>we,relativeClientRect:()=>Ie,replaceBoundingBox:()=>fe,shouldUseAspectRatio:()=>Ne,toRatio:()=>de,updateBoundingBoxProp:()=>me});var t={};d.r(t),d.d(t,{findLayoutId:()=>W,findLayoutItem:()=>S,findParentLayoutInfo:()=>C,getBlockAnchorPointsInPage:()=>ee,getBrowserSizeModeByLayoutId:()=>J,getBrowserSizeModeByLayoutIdAndWidgetId:()=>X,getChildrenContents:()=>U,getContentContainerInfo:()=>A,getContentIdInLayoutItem:()=>R,getContentLayoutInfosInOneSizeMode:()=>_,getContentLayoutItem:()=>L,getContentRootContainerInfo:()=>z,getContentsInContainer:()=>B,getContentsInContainerRecursive:()=>F,getContentsInContainerRecursiveAdv:()=>H,getContentsInLayout:()=>T,getContentsInLayoutRecursive:()=>j,getContentsInLayoutWithRecursiveLayouts:()=>$,getContentsInTheSameContainer:()=>Z,getContentsInTheSameRootContainer:()=>Q,getLayoutIdsInLayoutItem:()=>P,getLayoutInfosByType:()=>k,getLayoutInfosHoldContent:()=>D,getLayoutItemIds:()=>O,getMapWidgets:()=>oe,getParentWidgetIdOfContent:()=>G,getPendingLayoutItemsFromOtherSizeMode:()=>Je,getPendingLayoutItemsFromOtherSizeModeInDialog:()=>_e,getPendingLayoutItemsFromOtherSizeModeInPage:()=>Ge,getPendingLayoutItemsInDialog:()=>Ue,getPendingLayoutItemsInLayoutWithDeep:()=>Xe,getPendingLayoutItemsInPage:()=>De,getRelatedLayoutInfosInWidgetByLayoutInfo:()=>Y,getRelatedLayoutItemsInWidgetByLayoutInfo:()=>K,getRootContainerInfoOfLayout:()=>N,getScreenAnchorPointsInPage:()=>te,getSectionInfo:()=>Ve,getVisibleWidgetsInLayoutRecursive:()=>M,getWidgetIdThatUseTheLayoutId:()=>E});var o={};d.r(o),d.d(o,{convertToStyle:()=>Gn,findPageRelatedControllerIds:()=>Vn,panelTransformStyle:()=>Dn,useHandleLastVirtualNodeFocus:()=>Un});var n=d(9244);const i={previousView:"Previous view",nextView:"Next view",originTL:"Top left as origin",originTR:"Top right as origin",originBL:"Bottom left as origin",originBR:"Bottom right as origin",alignLeft:"Align left",alignRight:"Align right",alignTop:"Align top",alignCenter:"Align center",alignHCenter:"Horizontal center",alignVCenter:"Vertical center",alignBottom:"Align bottom",alignStretch:"Align stretch",sendBackward:"Send backward",bringForward:"Bring forward",sendToBack:"Send to back",bringToFront:"Bring to front",zoomoutFixed:"Zoom out fixed",order:"Order",moveToLeft:"Move to left",moveToRight:"Move to right",moveToTop:"Move to top",moveToBottom:"Move to bottom",addView:"New view",duplicateScreen:"Duplicate screen",deleteScreen:"Delete screen",applyToFirstPanel:"Apply to the first panel",deleteView:"Delete view",duplicateView:"Duplicate view",insertABlock:"Insert block",insertAScreenGroup:"Insert screen group",moveup:"Move up",movedown:"Move down",chooseTemplate:"Choose a {type} template",chooseHeaderTemplate:"Choose a header template",chooseFooterTemplate:"Choose a footer template",dropWidgetToAdd:"Or drag a widget here",snapToLeft:"Snap to left",snapToTop:"Snap to top",snapToBottom:"Snap to bottom",snapToRight:"Snap to right",fullWidth:"Full width",fullHeight:"Full height",fullSize:"Full size",restoreSize:"Restore size",pendingTip:"Move to the pending list",setting:"Settings",dragToMove:"Drag to move {label}",lockLayout:"Lock position and size",unlockLayout:"Unlock position and size",editHeader:"Edit header",editFooter:"Edit footer",transform:"Transform",rotation:"Rotation",angle:"Angle",floating:"Pin",sinking:"Unpin",floatingArea:"Floating area",changeToAuto:"Change to auto",changeToCustom:"Change to custom",positionType:"Position type",sticky:"Sticky",fixed:"Fixed",flow:"Flow",stack:"Stack",fixedAtTop:"Floating at the top when scrolling",actNormal:"Act as normal widget",hideInDesignView:"Click to hide in design view",showInDesignView:"Click to show in design view",unlockGridItem:"Unlock this widget to reorganize its internal widgets.",lockGridItem:"Lock this widget.",activeViewTip:"Section. Active view {viewLabel}.",widgetLabel:"Widget label"};var a=function(e,t,o,n){return new(o||(o=Promise))(function(i,a){function r(e){try{s(n.next(e))}catch(e){a(e)}}function l(e){try{s(n.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o(function(e){e(t)})).then(r,l)}s((n=n.apply(e,t||[])).next())})};function r(){return a(this,void 0,void 0,function*(){let e=(0,n.getAppStore)().getState().appContext.locale;return e=n.i18n.getLocaleToLoad(e,n.translatedLocales),e?yield n.i18n.loadLocaleMessages("jimu-layouts/lib/translations",e).then(e=>((0,n.getAppStore)().dispatch(n.appActions.i18nMessagesLoaded("jimu-layouts",e)),n.i18n.resetIntls(),e)):Promise.resolve(i)})}const l=n.React.createContext({viewOnly:!0}),s=n.React.createContext(!0),c=(n.React.createContext(""),n.React.createContext({}));var p,g=d(7386),v=d(4321);!function(e){e[e.BringForward=0]="BringForward",e[e.SendBackward=1]="SendBackward",e[e.BringToFront=2]="BringToFront",e[e.SendToBack=3]="SendToBack"}(p||(p={}));const y=12,h=28,f=16,m=16,I=5,x=3;var w,b;function S(e,t){var o,n,i;if(!t)return null;const{layoutId:a,layoutItemId:r}=t;return null===(i=null===(n=null===(o=e.layouts)||void 0===o?void 0:o[a])||void 0===n?void 0:n.content)||void 0===i?void 0:i[r]}function C(e,t,o){var i,a,r,l,s,d,u,c,p,g;const{layoutId:v}=e,y=t.layouts[v];switch(null===(i=null==y?void 0:y.parent)||void 0===i?void 0:i.type){case n.LayoutParentType.View:{const e=t.views[y.parent.id],n=t.sections[e.parent];return 1===(null===(r=null===(a=null==n?void 0:n.parent)||void 0===a?void 0:a[o])||void 0===r?void 0:r.length)?n.parent[o][0]:(null===(s=null===(l=null==n?void 0:n.parent)||void 0===l?void 0:l[o])||void 0===s?void 0:s.length)>1?C(n.parent[o][0],t,o):null}case n.LayoutParentType.Widget:{const e=t.widgets[y.parent.id];return 1===(null===(u=null===(d=null==e?void 0:e.parent)||void 0===d?void 0:d[o])||void 0===u?void 0:u.length)?e.parent[o][0]:(null===(p=null===(c=null==e?void 0:e.parent)||void 0===c?void 0:c[o])||void 0===p?void 0:p.length)>1?C(e.parent[o][0],t,o):null}case n.LayoutParentType.Screen:{const e=t.screens[y.parent.id];return null===(g=t.screenGroups[e.parent].parent)||void 0===g?void 0:g[o]}default:return null}}function R(e){switch(e.type){case n.LayoutItemType.Widget:return"string"==typeof e.widgetId?e.widgetId:null;case n.LayoutItemType.Section:return"string"==typeof e.sectionId?e.sectionId:null;case n.LayoutItemType.ScreenGroup:return"string"==typeof e.screenGroupId?e.screenGroupId:null;default:return null}}function T(e,t,o=!1){return(null==e?void 0:e.content)?Object.keys(e.content).filter(n=>e.content[n].type===t&&!!R(e.content[n])&&(o||!e.content[n].isPending)).map(t=>R(e.content[t])):[]}function j(e,t,o,i,a=!1){let r=[];const l=T(e.layouts[t],n.LayoutItemType.Widget,a),s=T(e.layouts[t],n.LayoutItemType.Section,a),d=T(e.layouts[t],n.LayoutItemType.ScreenGroup,a);o===n.LayoutItemType.Widget?r=r.concat(l):o===n.LayoutItemType.Section?r=r.concat(s):o===n.LayoutItemType.ScreenGroup&&(r=r.concat(d));return l.filter(t=>{var o,i,a,r,l;return(null===(i=null===(o=e.widgets[t])||void 0===o?void 0:o.manifest)||void 0===i?void 0:i.widgetType)===n.WidgetType.Layout||(null===(l=null===(r=null===(a=e.widgets[t])||void 0===a?void 0:a.manifest)||void 0===r?void 0:r.properties)||void 0===l?void 0:l.hasEmbeddedLayout)}).forEach(t=>{var n;Object.keys(null!==(n=e.widgets[t].layouts)&&void 0!==n?n:{}).forEach(n=>{const l=W(e.widgets[t].layouts[n],i,e.mainSizeMode);r=r.concat(j(e,l,o,i,a))})}),s.forEach(t=>{var n,l;null===(l=null===(n=e.sections)||void 0===n?void 0:n[t])||void 0===l||l.views.forEach(t=>{const n=W(e.views[t].layout,i,e.mainSizeMode);e.views[t]&&n&&(r=r.concat(j(e,n,o,i,a)))})}),d.forEach(t=>{var n,l;null===(l=null===(n=e.screenGroups)||void 0===n?void 0:n[t])||void 0===l||l.screens.forEach(t=>{var n,l,s,d,u;const c=W(null===(l=null===(n=e.screens)||void 0===n?void 0:n[t])||void 0===l?void 0:l.main.layout,i,e.mainSizeMode);c&&(r=r.concat(j(e,c,o,i,a)));const p=W(null===(u=null===(d=null===(s=e.screens)||void 0===s?void 0:s[t])||void 0===d?void 0:d.panel)||void 0===u?void 0:u.layout,i,e.mainSizeMode);p&&(r=r.concat(j(e,p,o,i,a)))})}),r}function M(e,t,o,i){const a=e.appConfig,r=(t,o,n)=>{var i,r;if(null===(r=null===(i=e.widgetsState[t])||void 0===i?void 0:i.hiddenLayoutIds)||void 0===r?void 0:r.includes(o))return[];const l=a.layouts[o];if(!l||!l.content)return[];const s=[];return Object.keys(l.content).forEach(i=>{var a,r,d;const u=l.content[i];if(u.type===n&&!u.isPending&&R(u)){if(null===(d=null===(r=null===(a=e.widgetsState[t])||void 0===a?void 0:a.hiddenLayoutItems)||void 0===r?void 0:r[o])||void 0===d?void 0:d.includes(i))return;s.push(R(u))}}),s};let l,s,d,u=[];i?(l=r(i,t,n.LayoutItemType.Widget),s=r(i,t,n.LayoutItemType.Section),d=r(i,t,n.LayoutItemType.ScreenGroup)):(l=T(a.layouts[t],n.LayoutItemType.Widget),s=T(a.layouts[t],n.LayoutItemType.Section),d=T(a.layouts[t],n.LayoutItemType.ScreenGroup)),u=u.concat(l);const c=l.filter(e=>{var t,o,i,r,l;return(null===(o=null===(t=a.widgets[e])||void 0===t?void 0:t.manifest)||void 0===o?void 0:o.widgetType)===n.WidgetType.Layout||(null===(l=null===(r=null===(i=a.widgets[e])||void 0===i?void 0:i.manifest)||void 0===r?void 0:r.properties)||void 0===l?void 0:l.hasEmbeddedLayout)});return c.forEach(n=>{var i,r,l;(null===(r=null===(i=e.widgetsState[n])||void 0===i?void 0:i.hiddenLayoutIds)||void 0===r?void 0:r.includes(t))||Object.keys(null!==(l=a.widgets[n].layouts)&&void 0!==l?l:{}).forEach(t=>{const i=W(a.widgets[n].layouts[t],o,a.mainSizeMode);u=u.concat(M(e,i,o,n))})}),s.forEach(t=>{var n,i;const r=a.sections[t],l=(null===(i=null===(n=e.appRuntimeInfo.sectionNavInfos)||void 0===n?void 0:n[t])||void 0===i?void 0:i.currentViewId)||r.defaultView||r.views[0],s=W(a.views[l].layout,o,a.mainSizeMode);a.views[l]&&s&&(u=u.concat(M(e,s,o)))}),d.forEach(t=>{var n,i;null===(i=null===(n=a.screenGroups)||void 0===n?void 0:n[t])||void 0===i||i.screens.forEach(t=>{var n,i,r,l,s;const d=W(null===(i=null===(n=a.screens)||void 0===n?void 0:n[t])||void 0===i?void 0:i.main.layout,o,a.mainSizeMode);d&&(u=u.concat(M(e,d,o)));const c=W(null===(s=null===(l=null===(r=a.screens)||void 0===r?void 0:r[t])||void 0===l?void 0:l.panel)||void 0===s?void 0:s.layout,o,a.mainSizeMode);c&&(u=u.concat(M(e,c,o)))})}),u}function P(e,t,o){var i;const a=e.appConfig,r=null===(i=a.layouts[t.layoutId])||void 0===i?void 0:i.content[t.layoutItemId];if(!r)return[];const l=[];if(r.type===n.LayoutItemType.Widget&&r.widgetId){const t=a.widgets[r.widgetId];t.layouts&&Object.keys(t.layouts).forEach(n=>{var i,s;const d=W(t.layouts[n],e.browserSizeMode,a.mainSizeMode);o&&(null===(s=null===(i=e.widgetsState[r.widgetId])||void 0===i?void 0:i.hiddenLayoutIds)||void 0===s?void 0:s.includes(d))||l.push(d)})}else if(r.type===n.LayoutItemType.Section&&r.sectionId){const t=a.sections[r.sectionId];t.views.forEach(n=>{var i,s;const d=W(a.views[n].layout,e.browserSizeMode,a.mainSizeMode),u=(null===(s=null===(i=e.appRuntimeInfo.sectionNavInfos)||void 0===i?void 0:i[r.sectionId])||void 0===s?void 0:s.currentViewId)||t.defaultView||t.views[0];o&&n!==u||l.push(d)})}else if(r.type===n.LayoutItemType.ScreenGroup&&r.screenGroupId){const t=a.screenGroups[r.screenGroupId];null==t||t.screens.forEach(t=>{var o,n,i,r,s;const d=W(null===(n=null===(o=a.screens)||void 0===o?void 0:o[t])||void 0===n?void 0:n.main.layout,e.browserSizeMode,a.mainSizeMode);d&&l.push(d);const u=W(null===(s=null===(r=null===(i=a.screens)||void 0===i?void 0:i[t])||void 0===r?void 0:r.panel)||void 0===s?void 0:s.layout,e.browserSizeMode,a.mainSizeMode);u&&l.push(u)})}return l}function $(e,t,o,i,a=!1){let r=[];const l=T(e.layouts[t],n.LayoutItemType.Widget,a),s=T(e.layouts[t],n.LayoutItemType.Section,a),d=T(e.layouts[t],n.LayoutItemType.ScreenGroup,a);r=o===n.LayoutItemType.Widget?r.concat(l):o===n.LayoutItemType.ScreenGroup?r.concat(d):r.concat(s);return l.filter(t=>e.widgets&&e.widgets[t]&&(e.widgets[t].manifest.widgetType===n.WidgetType.Layout||e.widgets[t].manifest.properties.hasEmbeddedLayout)).forEach(t=>{var n;Object.keys(null!==(n=e.widgets[t].layouts)&&void 0!==n?n:{}).forEach(n=>{const l=W(e.widgets[t].layouts[n],i,e.mainSizeMode);r=r.concat($(e,l,o,i,a))})}),r}function L(e,t,o){if(!(null==e?void 0:e.content))return null;const n=Object.keys(e.content).find(n=>e.content[n].type===o&&(e.content[n].widgetId===t||e.content[n].sectionId===t||e.content[n].screenGroupId===t)&&!e.content[n].isPending);return e.content[n]}function O(e,t,o=!1){const n=e.layouts[t];return(null==n?void 0:n.content)?o?Object.keys(n.content):Object.keys(n.content).filter(e=>!n.content[e].isPending):[]}function k(e,t,o=!1){return(null==e?void 0:e.content)?Object.keys(e.content).filter(n=>e.content[n].type===t&&!!R(e.content[n])&&(o||!e.content[n].isPending)).map(t=>({layoutId:e.id,layoutItemId:t})):[]}function E(e,t){var o;const i=e.layouts[t];return(null===(o=null==i?void 0:i.parent)||void 0===o?void 0:o.type)===n.LayoutParentType.Widget?i.parent.id:null}function A(e,t,o,i,a=!1){var r;const l=V(e,t,o,i,a);if(l){const t=e.layouts[l.layoutId];switch(null===(r=t.parent)||void 0===r?void 0:r.type){case n.LayoutParentType.Page:return{type:n.ContainerType.Page,id:t.parent.id};case n.LayoutParentType.Dialog:return{type:n.ContainerType.Dialog,id:t.parent.id};case n.LayoutParentType.Header:return{type:n.ContainerType.Header,id:"header"};case n.LayoutParentType.Footer:return{type:n.ContainerType.Footer,id:"footer"};case n.LayoutParentType.View:return{type:n.ContainerType.View,id:t.parent.id};case n.LayoutParentType.Screen:return{type:e.screens[t.parent.id].main.layout[i]===l.layoutId?n.ContainerType.ScreenMain:n.ContainerType.ScreenPanel,id:t.parent.id};case n.LayoutParentType.Widget:return A(e,t.parent.id,o,i,a)}}return null}function z(e,t,o,n,i=!1){let a=V(e,t,o,n,i),r=n;if(a||(a=V(e,t,o,e.mainSizeMode,i),r=e.mainSizeMode),a)return N(e,a.layoutId,r)}function N(e,t,o){var i;let a=e.layouts[t];for(;(null==a?void 0:a.parent)&&[n.LayoutParentType.Screen,n.LayoutParentType.View,n.LayoutParentType.Widget].includes(a.parent.type);){const n=C({layoutId:t},e,o);t=null==n?void 0:n.layoutId,a=e.layouts[t]}switch(null===(i=null==a?void 0:a.parent)||void 0===i?void 0:i.type){case n.LayoutParentType.Dialog:return{type:n.ContainerType.Dialog,id:a.parent.id};case n.LayoutParentType.Page:return{type:n.ContainerType.Page,id:a.parent.id};case n.LayoutParentType.Header:return{type:n.ContainerType.Header,id:"header"};case n.LayoutParentType.Footer:return{type:n.ContainerType.Footer,id:"footer"};default:return null}}function B(e,t,o,i,a=!1){var r,l,s,d,u,c;let p;switch(t.type){case n.ContainerType.Page:return p=W(null===(l=null===(r=e.pages)||void 0===r?void 0:r[t.id])||void 0===l?void 0:l.layout,i,e.mainSizeMode),p?$(e,p,o,i,a):[];case n.ContainerType.Header:return p=W(null===(s=e.header)||void 0===s?void 0:s.layout,i,e.mainSizeMode),p?$(e,p,o,i,a):[];case n.ContainerType.Footer:return p=W(null===(d=e.footer)||void 0===d?void 0:d.layout,i,e.mainSizeMode),p?$(e,p,o,i,a):[];case n.ContainerType.View:return p=W(null===(c=null===(u=e.views)||void 0===u?void 0:u[t.id])||void 0===c?void 0:c.layout,i,e.mainSizeMode),p?$(e,p,o,i,a):[];case n.ContainerType.Dialog:return p=W(e.dialogs[t.id].layout,i,e.mainSizeMode),p?$(e,p,o,i,a):[];case n.ContainerType.ScreenMain:case n.ContainerType.ScreenPanel:if(!e.screens||!e.screens[t.id])return[];const g=W(e.screens[t.id].main.layout,i,e.mainSizeMode);if(!g)return[];const v=$(e,g,o,i,a);if(e.screens[t.id].panel){const n=$(e,W(e.screens[t.id].panel.layout,i,e.mainSizeMode),o,i,a);return v.concat(n)}return v}}function F(e,t,o,i,a=!1){var r,l,s,d,u,c;let p;switch(t.type){case n.ContainerType.Page:return p=W(null===(l=null===(r=e.pages)||void 0===r?void 0:r[t.id])||void 0===l?void 0:l.layout,i,e.mainSizeMode),p?j(e,p,o,i,a):[];case n.ContainerType.Header:return p=W(null===(s=e.header)||void 0===s?void 0:s.layout,i,e.mainSizeMode),p?j(e,p,o,i,a):[];case n.ContainerType.Footer:return p=W(null===(d=e.footer)||void 0===d?void 0:d.layout,i,e.mainSizeMode),p?j(e,p,o,i,a):[];case n.ContainerType.View:return p=W(null===(c=null===(u=e.views)||void 0===u?void 0:u[t.id])||void 0===c?void 0:c.layout,i,e.mainSizeMode),p?j(e,p,o,i,a):[];case n.ContainerType.Dialog:return p=W(e.dialogs[t.id].layout,i,e.mainSizeMode),p?j(e,p,o,i,a):[];case n.ContainerType.ScreenMain:case n.ContainerType.ScreenPanel:if(!e.screens||!e.screens[t.id])return[];const g=W(e.screens[t.id].main.layout,i,e.mainSizeMode);if(!g)return[];const v=j(e,g,o,i);if(e.screens[t.id].panel){const n=j(e,W(e.screens[t.id].panel.layout,i,e.mainSizeMode),o,i);return v.concat(n)}return v}}function H(e,t,o,i,a){const r=t=>{let r=[];return r=a.includeOtherSizeMode?r.concat(F(e,t,o,n.BrowserSizeMode.Large,a.includePending),F(e,t,o,n.BrowserSizeMode.Medium,a.includePending),F(e,t,o,n.BrowserSizeMode.Small,a.includePending)):F(e,t,o,i,a.includePending),r=Array.from(new Set(r)),r};if(t.type===n.ContainerType.Dialog)return r(t);if(t.type===n.ContainerType.Page){const o=e.pages[t.id];let i=r(t);return o.header&&(i=i.concat(r({type:n.ContainerType.Header,id:"header"}))),o.footer&&(i=i.concat(r({type:n.ContainerType.Footer,id:"footer"}))),i=Array.from(new Set(i)),i}if(t.type===n.ContainerType.Header){const o=e.pages[a.currentPageId];let i=r(t).concat(r({type:n.ContainerType.Page,id:a.currentPageId}));return(null==o?void 0:o.footer)&&(i=i.concat(r({type:n.ContainerType.Footer,id:"footer"}))),i=Array.from(new Set(i)),i}if(t.type===n.ContainerType.Footer){const o=e.pages[a.currentPageId];let i=r(t).concat(r({type:n.ContainerType.Page,id:a.currentPageId}));return(null==o?void 0:o.header)&&(i=i.concat(r({type:n.ContainerType.Header,id:"header"}))),i=Array.from(new Set(i)),i}}function W(e,t,o){return e?e[t]||e[o]:null}function V(e,t,o,i,a=!0){var r,l,s,d,u;switch(o){case n.LayoutItemType.ScreenGroup:{const o=null===(r=e.screenGroups[t].parent)||void 0===r?void 0:r[i],n=S(e,o);return a||!(null==n?void 0:n.isPending)?o:null}case n.LayoutItemType.Section:case n.LayoutItemType.Widget:{let r;if(o===n.LayoutItemType.Widget&&(r=e.widgets[t]),o===n.LayoutItemType.Section&&(r=e.sections[t]),1===(null===(s=null===(l=null==r?void 0:r.parent)||void 0===l?void 0:l[i])||void 0===s?void 0:s.length)){const t=r.parent[i][0],o=S(e,t);return a||!(null==o?void 0:o.isPending)?t:null}if((null===(u=null===(d=null==r?void 0:r.parent)||void 0===d?void 0:d[i])||void 0===u?void 0:u.length)>1){const t=r.parent[i][0],o=e.layouts[t.layoutId];if(null==o?void 0:o.parent)return V(e,o.parent.id,n.LayoutItemType.Widget,i,a)}}default:return null}}function D(e,t,o,i){switch(t){case n.LayoutItemType.ScreenGroup:{const t=e.screenGroups[o];if(t.parent)return i?[t.parent[i]]:Object.values(t.parent)}case n.LayoutItemType.Section:case n.LayoutItemType.Widget:{let a;if(t===n.LayoutItemType.Widget&&(a=e.widgets[o]),t===n.LayoutItemType.Section&&(a=e.sections[o]),null==a?void 0:a.parent){if(i)return a.parent[i];const e=[];return Object.values(a.parent).forEach(t=>{e.push(...t)}),e}}default:return[]}}function G(e,t,o,i){var a,r,l,s,d,u,c;let p;if(o===n.LayoutItemType.Widget){const o=e.widgets[t];p=null===(l=null===(r=null===(a=null==o?void 0:o.parent)||void 0===a?void 0:a[i])||void 0===r?void 0:r[0])||void 0===l?void 0:l.layoutId}if(o===n.LayoutItemType.Section){const o=e.sections[t];p=null===(u=null===(d=null===(s=null==o?void 0:o.parent)||void 0===s?void 0:s[i])||void 0===d?void 0:d[0])||void 0===u?void 0:u.layoutId}if(p){const t=e.layouts[p];if((null===(c=null==t?void 0:t.parent)||void 0===c?void 0:c.type)===n.LayoutParentType.Widget)return t.parent.id}return null}function U(e,t,o,n){const i=e.widgets[t];if(!i.layouts)return[];let a=[];return Object.keys(i.layouts).forEach(t=>{Object.keys(i.layouts[t]).forEach(r=>{const l=e.layouts[i.layouts[t][r]];a=a.concat(T(l,o,n))})}),Array.from(new Set(a))}function _(e,t,o,i){var a,r,l;switch(o){case n.LayoutItemType.ScreenGroup:{const o=e.screenGroups[t];if(null===(a=o.parent)||void 0===a?void 0:a[i])return[o.parent[i]]}case n.LayoutItemType.Section:case n.LayoutItemType.Widget:{let a;if(o===n.LayoutItemType.Widget&&(a=e.widgets[t]),o===n.LayoutItemType.Section&&(a=e.sections[t]),(null===(l=null===(r=null==a?void 0:a.parent)||void 0===r?void 0:r[i])||void 0===l?void 0:l.length)>0)return a.parent[i]}default:return[]}}function X(e,t,o){const n=e.widgets[o];if(!n)return;let i;return Object.keys(n.layouts).find(e=>!!Object.keys(n.layouts[e]).find(o=>n.layouts[e][o]===t&&(i=o,!0))),i}function J(e,t){return n.appConfigUtils.getSizeModeOfALayout(e,t)}function Y(e,t,o,i){if(!e.widgets[o])return[];const a=e.layouts[t.layoutId]&&e.layouts[t.layoutId].content&&e.layouts[t.layoutId].content[t.layoutItemId];if(!a)return[];const r=a.type;let l;return r===n.LayoutItemType.Section?l=a.sectionId:r===n.LayoutItemType.Widget&&(l=a.widgetId),l?q(e,l,r,o,i):function(e,t,o){const n=e.widgets[t];if(!n)return!1;let i=!1;return n.layouts&&Object.keys(n.layouts).some(t=>Object.keys(n.layouts[t]).some(a=>{const r=n.layouts[t][a];return O(e,r,!0).some(e=>o.layoutId===r&&o.layoutItemId===e&&(i=!0,!0))})),i}(e,o,t)?[t]:[]}function K(e,t,o,n){return Y(e,t,o,n).map(t=>e.layouts[t.layoutId][t.layoutItemId])}function q(e,t,o,i,a){const r=e.widgets[i];if(!r||!t)return[];const l=[];return r.layouts&&Object.keys(r.layouts).forEach(i=>{const s=r.layouts[i][a],d=e.layouts[s];d&&d.content&&Object.keys(d.content).forEach(i=>{const r=d.content[i];if(r.type!==o||r.widgetId!==t&&r.sectionId!==t&&r.screenGroupId!==t){if(r.type===n.LayoutItemType.Widget){const i=e.widgets[r.widgetId];i&&i.manifest.widgetType===n.WidgetType.Layout&&l.push(...q(e,t,o,i.id,a))}}else l.push({layoutId:d.id,layoutItemId:r.id})})}),l}function Z(e,t,o,n,i,a=!1){const r=A(e,t,o,i,a);return r?B(e,r,n,i,a):[]}function Q(e,t,o,n,i,a=!1){const r=z(e,t,o,i,a);return r?F(e,r,n,i,a):[]}function ee(e,t,o){var i,a;const r=e.pages[t],l=null===(i=null==r?void 0:r.layout)||void 0===i?void 0:i[o],s=e.layouts[l],d=[];return(null==s?void 0:s.type)===n.LayoutType.FlowLayout&&Object.keys(null!==(a=s.content)&&void 0!==a?a:{}).sort().forEach(t=>{var o;const i=s.content[t];if(!i.isPending&&!(null===(o=i.setting)||void 0===o?void 0:o.isFloating)&&i.type===n.LayoutItemType.Widget){const o=function(e,t){const{layoutId:o,layoutItemId:n}=t,i=e.layouts[o].content[n],a=e.widgets[i.widgetId];if(a)return{label:a.label,id:`${o}_block_${n}`};return null}(e,{layoutId:l,layoutItemId:t});o&&d.push(o)}}),d}function te(e,t,o){var i,a;const r=e.pages[t],l=null===(i=null==r?void 0:r.layout)||void 0===i?void 0:i[o],s=e.layouts[l],d=[];return(null==s?void 0:s.type)===n.LayoutType.FlowLayout&&Object.keys(null!==(a=s.content)&&void 0!==a?a:{}).sort().forEach(t=>{var o;const i=s.content[t];if(!i.isPending&&!(null===(o=i.setting)||void 0===o?void 0:o.isFloating)&&i.type===n.LayoutItemType.ScreenGroup){const t=e.screenGroups[i.screenGroupId],o=[];null==t||t.screens.forEach(t=>{const n=function(e,t,o){const n=e.screens[o];if(n)return{label:n.label,id:`${t}_screen_${o}`};return null}(e,l,t);n&&o.push(n)}),d.push({id:t.id,label:t.label,screens:o})}}),d}function oe(e,t,o,i){const a=[],r={id:i,type:o,maps:H(e,{type:o,id:i},n.LayoutItemType.Widget,t,{includePending:!1,includeOtherSizeMode:!1}).filter(t=>e.widgets[t].manifest.properties.canCreateMapView)};return a.push(r),Object.keys(e.pages).forEach(o=>{if(o===i)return;const r={id:o,type:n.ContainerType.Page,maps:F(e,{id:o,type:n.ContainerType.Page},n.LayoutItemType.Widget,t).filter(t=>e.widgets[t].manifest.properties.canCreateMapView)};a.push(r)}),Object.keys(e.dialogs||{}).forEach(o=>{if(o===i)return;const r={id:o,type:n.ContainerType.Dialog,maps:F(e,{id:o,type:n.ContainerType.Dialog},n.LayoutItemType.Widget,t).filter(t=>e.widgets[t].manifest.properties.canCreateMapView)};a.push(r)}),a}!function(e){e.Auto="auto",e[e.Normal=0]="Normal",e[e.BoundaryDropArea=10]="BoundaryDropArea",e[e.DragMoveTip=20]="DragMoveTip",e[e.HandlerTools=30]="HandlerTools",e[e.DraggingItem=40]="DraggingItem"}(w||(w={})),function(e){e.Auto="AUTO",e.Stretch="STRETCH",e.Custom="CUSTOM"}(b||(b={}));const ne=()=>null;function ie(e,t){t.forEach(t=>{e[t]&&(e[t]=e[t].bind(e))})}function ae(e){let t=-1;return e.content&&Object.keys(e.content).forEach(e=>{const o=parseInt(e,10);o>t&&(t=o)}),t}function re(e){return/^-?\d*(\.\d+)?%$/.test(e)}function le(e){const t=parseFloat(e);return!isNaN(t)&&isFinite(t)}function se(e,t){return null==(null==e?void 0:e[t])?null:"string"==typeof e[t]?e[t]:le(e[t])?`${Math.round(parseFloat(e[t]))}px`:null}function de(e,t){return`${(100*e/t).toFixed(1)}%`}function ue(e,t){return parseFloat(`${e}`)*t/100}const ce=(0,n.createSelector)([e=>e.appConfig.mainSizeMode,e=>e.browserSizeMode,(e,t)=>{var o,i,a,r,l;let s;if(e.browserSizeMode===e.appConfig.mainSizeMode)s=!0;else{let r;(null===(o=t.layouts)||void 0===o?void 0:o[e.browserSizeMode])?r=e.browserSizeMode:(null===(i=t.layouts)||void 0===i?void 0:i[e.appConfig.mainSizeMode])&&(r=e.appConfig.mainSizeMode);const l=null===(a=t.layouts)||void 0===a?void 0:a[r],d=N(e.appConfig,l,r);if((null==d?void 0:d.type)===n.ContainerType.Header)s=null!=e.appConfig.header.layout[e.browserSizeMode];else if((null==d?void 0:d.type)===n.ContainerType.Footer)s=null!=e.appConfig.footer.layout[e.browserSizeMode];else if((null==d?void 0:d.type)===n.ContainerType.Dialog){s=null!=e.appConfig.dialogs[d.id].layout[e.browserSizeMode]}else if((null==d?void 0:d.type)===n.ContainerType.Page){s=null!=e.appConfig.pages[d.id].layout[e.browserSizeMode]}}if(s&&(null===(r=t.layouts)||void 0===r?void 0:r[e.browserSizeMode])){const o=t.layouts[e.browserSizeMode];return e.appConfig.layouts[o]}const d=null===(l=t.layouts)||void 0===l?void 0:l[e.appConfig.mainSizeMode];return e.appConfig.layouts[d]}],(e,t,o)=>({mainSizeMode:e,browserSizeMode:t,layout:o})),pe=(0,n.createSelector)([(e,t)=>{var o,n,i;const{layoutId:a,layoutItemId:r}=t;return null===(i=null===(n=null===(o=e.appConfig.layouts)||void 0===o?void 0:o[a])||void 0===n?void 0:n.content)||void 0===i?void 0:i[r]},(e,t)=>{var o,i,a,r,l,s;const{layoutId:d,layoutItemId:u}=t,c=null===(a=null===(i=null===(o=e.appConfig.layouts)||void 0===o?void 0:o[d])||void 0===i?void 0:i.content)||void 0===a?void 0:a[u];if((null==c?void 0:c.type)===n.LayoutItemType.Widget&&c.widgetId){const t=e.appConfig.widgets[c.widgetId];return null!==(s=null===(l=null===(r=null==t?void 0:t.manifest)||void 0===r?void 0:r.properties)||void 0===l?void 0:l.watchViewportVisibility)&&void 0!==s&&s}return!1},e=>{var t;return null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.selection},e=>{var t;return null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.animationPreview},e=>{var t;return null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.hoverPreview},(e,t)=>t.layoutId],(e,t,o,n,i,a)=>{var r;if(!e)return{layoutItem:null,selected:!1};let l=!1;const s=null!==(r=e.isPending)&&void 0!==r&&r;o&&(l=o.layoutId===a&&o.layoutItemId===e.id);const d={selected:l,watchViewportVisibility:t,layoutItem:s?null:e,autoScroll:l?o.autoScroll:void 0};if(l&&(null==n?void 0:n.layoutInfo)){const{layoutId:t,layoutItemId:o}=n.layoutInfo;d.animationPreview=t===a&&o===e.id,d.playMode=d.animationPreview?n.playMode:null,d.previewId=d.animationPreview?n.id:null}else if(l&&(null==i?void 0:i.layoutInfo)){const{layoutId:t,layoutItemId:o}=i.layoutInfo;d.hoverPreview=t===a&&o===e.id,d.previewId=d.hoverPreview?i.id:null}return d}),ge=(0,n.createSelector)([(e,t)=>{var o,i,a;const{layoutId:r,layoutItemId:l}=t,s=null===(a=null===(i=null===(o=e.appConfig.layouts)||void 0===o?void 0:o[r])||void 0===i?void 0:i.content)||void 0===a?void 0:a[l];if((null==s?void 0:s.type)===n.LayoutItemType.Widget&&s.widgetId)return e.appConfig.widgets[s.widgetId]},(e,t)=>{var o,i,a,r;const{layoutId:l,layoutItemId:s}=t,d=null===(a=null===(i=null===(o=e.appConfig.layouts)||void 0===o?void 0:o[l])||void 0===i?void 0:i.content)||void 0===a?void 0:a[s];if((null==d?void 0:d.type)===n.LayoutItemType.Widget&&!d.widgetId)return null===(r=d.setting)||void 0===r?void 0:r.placeholderStyle},(e,t)=>{var o,i,a;const{layoutId:r,layoutItemId:l}=t,s=null===(a=null===(i=null===(o=e.appConfig.layouts)||void 0===o?void 0:o[r])||void 0===i?void 0:i.content)||void 0===a?void 0:a[l];if((null==s?void 0:s.type)===n.LayoutItemType.Widget&&s.widgetId)return e.widgetsRuntimeInfo[s.widgetId]},(e,t)=>{var o,i,a;const{layoutId:r,layoutItemId:l}=t,s=null===(a=null===(i=null===(o=e.appConfig.layouts)||void 0===o?void 0:o[r])||void 0===i?void 0:i.content)||void 0===a?void 0:a[l];if((null==s?void 0:s.type)===n.LayoutItemType.Widget&&!s.widgetId)return e.widgetsState[s.widgetId]},(e,t)=>{var o,i;const{layoutId:a}=t,r=null===(o=e.appConfig.layouts)||void 0===o?void 0:o[a];if((null===(i=r.parent)||void 0===i?void 0:i.type)===n.LayoutParentType.Widget){const t=r.parent.id,o=e.appConfig.widgets[t];return/widgets\/common\/controller\/?/.test(o.uri)}return!1}],(e,t,o,i,a)=>{var r,l,s,d,u,c,p,g,v,y,h,f,m,I,x,w,b,S,C;const R=null===(l=null===(r=null==e?void 0:e.manifest)||void 0===r?void 0:r.properties)||void 0===l?void 0:l.supportInlineEditing;return{hasEmbeddedLayout:(null===(d=null===(s=null==e?void 0:e.manifest)||void 0===s?void 0:s.properties)||void 0===d?void 0:d.hasEmbeddedLayout)&&Object.keys(null!==(u=e.layouts)&&void 0!==u?u:{}).length>0,supportInlineEditing:R,supportRepeat:null===(p=null===(c=null==e?void 0:e.manifest)||void 0===c?void 0:c.properties)||void 0===p?void 0:p.supportRepeat,isClassLoaded:null!==(g=null==o?void 0:o.isClassLoaded)&&void 0!==g&&g,isInlineEditing:R&&(null==o?void 0:o.isInlineEditing),isInController:a,useDragHandler:null!==(h=null===(y=null===(v=null==e?void 0:e.manifest)||void 0===v?void 0:v.properties)||void 0===y?void 0:y.useDragHandler)&&void 0!==h&&h,widgetStyle:null!=e?e.style:t,canCrossLayoutBoundary:null===(m=null===(f=null==e?void 0:e.manifest)||void 0===f?void 0:f.properties)||void 0===m?void 0:m.canCrossLayoutBoundary,hasExtension:(null===(x=null===(I=null==e?void 0:e.manifest)||void 0===I?void 0:I.extensions)||void 0===x?void 0:x.length)>0,needHiddenState:null!==(S=null===(b=null===(w=null==e?void 0:e.manifest)||void 0===w?void 0:w.properties)||void 0===b?void 0:b.needHiddenState)&&void 0!==S&&S,widgetJson:e,widgetId:null==e?void 0:e.id,isFunctionalWidget:(null===(C=null==e?void 0:e.manifest)||void 0===C?void 0:C.widgetType)!==n.WidgetType.Layout,widgetState:i}});function ve(e,t){var o,n,i,a;const r=null===(o=null==t?void 0:t.widgets)||void 0===o?void 0:o[e];return!!(null===(i=null===(n=null==r?void 0:r.manifest)||void 0===n?void 0:n.properties)||void 0===i?void 0:i.hasEmbeddedLayout)&&Object.keys(null!==(a=null==r?void 0:r.layouts)&&void 0!==a?a:{}).length>0}function ye(e,t){var o,i;const a=null===(o=null==t?void 0:t.widgets)||void 0===o?void 0:o[e];return(null===(i=null==a?void 0:a.manifest)||void 0===i?void 0:i.widgetType)!==n.WidgetType.Layout}function he(e,t){var o,i;if(!t||t.itemType!==n.LayoutItemType.Widget)return!1;if(t.layoutInfo){const{layoutId:n,layoutItemId:a}=t.layoutInfo,r=null===(i=null===(o=e.layouts)||void 0===o?void 0:o[n].content)||void 0===i?void 0:i[a];if(r&&!r.widgetId)return!0}return!t.layoutInfo&&!t.uri}function fe(e,t,o){if(!e)return(0,n.Immutable)({left:re(t.left)?t.left:`${Math.round(t.left)}px`,right:re(t.right)?t.right:`${Math.round(t.right)}px`,top:re(t.top)?t.top:`${Math.round(t.top)}px`,bottom:re(t.bottom)?t.bottom:`${Math.round(t.bottom)}px`,width:re(t.width)?t.width:`${Math.round(t.width)}px`,height:re(t.height)?t.height:`${Math.round(t.height)}px`});let i=e;return["left","right","top","bottom","width","height"].forEach(e=>{null!=i[e]?i=me(e,i,t[e],o):null!=t[e]&&(i=i.set(e,`${Math.round(t[e])}px`))}),i}function me(e,t,o,n){if(null==t[e]||"auto"===t[e])return t;let i;return i=re(t[e])?"left"===e||"right"===e||"width"===e?re(o)?t.set(e,o):t.set(e,`${(100*+o/n.width).toFixed(4)}%`):re(o)?t.set(e,o):t.set(e,`${(100*+o/n.height).toFixed(4)}%`):re(o)?"left"===e||"right"===e||"width"===e?t.set(e,Math.round(parseFloat(`${o}`)*n.width/100)):t.set(e,Math.round(parseFloat(`${o}`)*n.height/100)):isNaN(+o)?t.without(e):t.set(e,`${Math.round(+o)}px`),i}function Ie(e,t){return{left:e.left-t.left,top:e.top-t.top,right:e.right,bottom:e.bottom,width:e.width,height:e.height,id:null}}function xe(){var e,t;return null!==(t=null===(e=(0,n.getAppStore)().getState().appContext)||void 0===e?void 0:e.isRTL)&&void 0!==t&&t}function we(e){let t=100,o=100;if("number"==typeof e)t=100,o=Math.round(100*e);else if("string"==typeof e){const n=e.split(":");t=parseInt(n[0],10),o=parseInt(n[1],10)}return t/o}function be(e){return e&&0!==e.length?1===e.length?[e[0],e[0],e[0],e[0]]:2===e.length?[e[0],e[1],e[0],e[1]]:3===e.length?[e[0],e[1],e[2],0]:[e[0],e[1],e[2],e[3]]:[0,0,0,0]}function Se(e,t){var o,n,i,a;const r=null!==(o=t.setting)&&void 0!==o?o:{},l=ze("height",t.bbox,r.autoProps);let s;if("ratio"===r.heightMode)s={setting:{heightMode:"ratio",aspectRatio:null!==(n=r.aspectRatio)&&void 0!==n?n:1,autoProps:{height:b.Custom}}};else{if(l!==b.Custom)return{height:l===b.Stretch?e:null,setting:{autoProps:{height:l}}};{let o=null!==(a=null===(i=t.bbox)||void 0===i?void 0:i.height)&&void 0!==a?a:e;o=re(o)?ue(o,e):parseInt(o),s={height:o,setting:{heightMode:"fixed",autoProps:{height:b.Custom}}}}}return s}function Ce(){var e;return window.jimuConfig.isBuilder?null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appConfig:(0,n.getAppStore)().getState().appConfig}function Re(){var e,t;return(null===(e=null===window||void 0===window?void 0:window.jimuConfig)||void 0===e?void 0:e.isBuilder)?null===(t=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===t?void 0:t.browserSizeMode:(0,n.getAppStore)().getState().browserSizeMode}function Te(){var e,t,o;return window.jimuConfig.isBuilder?null===(t=null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appRuntimeInfo)||void 0===t?void 0:t.currentPageId:null===(o=(0,n.getAppStore)().getState().appRuntimeInfo)||void 0===o?void 0:o.currentPageId}function je(){var e,t,o;return window.jimuConfig.isBuilder?null===(t=null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appRuntimeInfo)||void 0===t?void 0:t.currentDialogId:null===(o=(0,n.getAppStore)().getState().appRuntimeInfo)||void 0===o?void 0:o.currentDialogId}function Me(){var e,t,o;return window.jimuConfig.isBuilder?null===(t=null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appRuntimeInfo)||void 0===t?void 0:t.activePagePart:null===(o=(0,n.getAppStore)().getState().appRuntimeInfo)||void 0===o?void 0:o.activePagePart}function Pe(){var e,t,o;const i=window.jimuConfig.isBuilder?null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appConfig:(0,n.getAppStore)().getState().appConfig,a=je(),r=Re();return null===(o=null===(t=null==i?void 0:i.dialogs[a])||void 0===t?void 0:t.layout)||void 0===o?void 0:o[r]}function $e(){var e,t,o;const i=window.jimuConfig.isBuilder?null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appConfig:(0,n.getAppStore)().getState().appConfig,a=Te(),r=Re();return null===(o=null===(t=null==i?void 0:i.pages[a])||void 0===t?void 0:t.layout)||void 0===o?void 0:o[r]}function Le(){var e,t,o;const i=window.jimuConfig.isBuilder?null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appConfig:(0,n.getAppStore)().getState().appConfig,a=Re();return null===(o=null===(t=null==i?void 0:i.header)||void 0===t?void 0:t.layout)||void 0===o?void 0:o[a]}function Oe(){var e,t,o;const i=window.jimuConfig.isBuilder?null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appConfig:(0,n.getAppStore)().getState().appConfig,a=Re();return null===(o=null===(t=null==i?void 0:i.footer)||void 0===t?void 0:t.layout)||void 0===o?void 0:o[a]}function ke(e,t){return t.left>=e.left&&t.left+t.width<=e.left+e.width&&t.top>=e.top&&t.top+t.height<=e.top+e.height}function Ee(e,t){return!(t.left>e.left+e.width||t.left+t.width<e.left||t.top>e.top+e.height||t.top+t.height<e.top)}function Ae(e,t){var o,i,a;let r,l;if(null!=e&&"object"==typeof e)r=null!==(o=e.unit)&&void 0!==o?o:v.DistanceUnits.PIXEL,l=null!==(i=e.distance)&&void 0!==i?i:0;else{const t=n.polished.getValueAndUnit(e);r=null!==(a=null==t?void 0:t[1])&&void 0!==a?a:v.DistanceUnits.PIXEL,l=+(null==t?void 0:t[0])>=0?+t[0]:0}return t>=0||(t=r===v.DistanceUnits.PERCENTAGE?1:0),`${l.toFixed(t)}${r}`}function ze(e,t,o){const n=null==o?void 0:o[e],i="width"===e?"left":"top",a="width"===e?"right":"bottom";if(!n)return null!=t[e]?b.Custom:null!=t[i]&&null!=t[a]?b.Stretch:b.Auto;if(!0===n)return null!=t[i]&&null!=t[a]?b.Stretch:b.Auto;switch(n){case b.Auto:return b.Auto;case b.Stretch:return b.Stretch;default:return b.Custom}}function Ne(e){return"ratio"===e.heightMode&&null!=e.aspectRatio}function Be(e,t){let o=Math.max(e,t),n=Math.min(e,t);for(;0!==n;){const e=n;n=o%n,o=e}return o}function Fe(e,t){n.utils.changeAppConfig(e),(0,n.getAppStore)().dispatch(n.appActions.selectionChanged(t))}const He=n.lodash.assign({},{gridSize:1}),We=n.lodash.assign({},{order:0},{lockParent:!1,lockLayout:!1,autoProps:{}});function Ve(e,t){var o;const n=e.appConfig.sections[t];if(!n||!n.views)return null;const i=null===(o=e.appRuntimeInfo.sectionNavInfos)||void 0===o?void 0:o[n.id];let a;if(!i){const t=n.defaultView||n.views[0];a=e.appConfig.views[t]}return{sectionId:t,navInfo:i,activeView:a,views:n.views,sectionStyle:n.style,transition:n.transition,autoPlay:n.autoPlay,interval:n.interval,loop:n.loop,focusable:n.focusable}}function De(e,t,o,i){const a=e.pages[t];return a?i===n.PagePart.Header?a.header&&e.header?Xe(e,e.header.layout[o],o):[]:i===n.PagePart.Footer?a.footer&&e.footer?Xe(e,e.footer.layout[o],o):[]:i===n.PagePart.Body?Xe(e,a.layout[o],o):[]:[]}function Ge(e,t,o,i){const a=e.pages[t];return a?i===n.PagePart.Header?a.header&&e.header?Je(e,e.header.layout,o):[]:i===n.PagePart.Footer?a.footer&&e.footer?Je(e,e.footer.layout,o):[]:i===n.PagePart.Body?Je(e,a.layout,o):[]:[]}function Ue(e,t,o){const n=e.dialogs[t];return n?Xe(e,n.layout[o],o):[]}function _e(e,t,o){const n=e.dialogs[t];return n?Je(e,n.layout,o):[]}function Xe(e,t,o){let i=[];k(e.layouts[t],n.LayoutItemType.Widget,!0).forEach(t=>{const n=e.layouts[t.layoutId].content[t.layoutItemId];n.isPending?i.push(t):e.widgets[n.widgetId].layouts&&Object.keys(e.widgets[n.widgetId].layouts).forEach(t=>{i=i.concat(Xe(e,e.widgets[n.widgetId].layouts[t][o],o))})});k(e.layouts[t],n.LayoutItemType.Section,!0).forEach(t=>{const n=e.layouts[t.layoutId].content[t.layoutItemId];n.isPending?i.push(t):e.sections[n.sectionId].views&&e.sections[n.sectionId].views.forEach(t=>{i=i.concat(Xe(e,e.views[t].layout[o],o))})});return k(e.layouts[t],n.LayoutItemType.ScreenGroup,!0).forEach(t=>{var n,a;const r=e.layouts[t.layoutId].content[t.layoutItemId];if(r.isPending)i.push(t);else{const t=r.screenGroupId;null===(a=null===(n=e.screenGroups)||void 0===n?void 0:n[t].screens)||void 0===a||a.forEach(t=>{const n=null==e?void 0:e.screens[t];n.main&&(i=i.concat(Xe(e,n.main.layout[o],o))),n.panel&&(i=i.concat(Xe(e,n.panel.layout[o],o)))})}}),i}function Je(e,t,o,i=null,a=null,r=null){const l=[];i||(i=j(e,t[o],n.LayoutItemType.Widget,o,!0)),a||(a=j(e,t[o],n.LayoutItemType.Section,o,!0)),r||(r=j(e,t[o],n.LayoutItemType.ScreenGroup,o,!0));return Object.keys(n.BrowserSizeMode).filter(e=>n.BrowserSizeMode[e]!==o).map(e=>n.BrowserSizeMode[e]).forEach(s=>{k(e.layouts[t[s]],n.LayoutItemType.Widget,!0).forEach(t=>{var s;const d=e.layouts[t.layoutId].content[t.layoutItemId];(null===(s=e.widgets[d.widgetId].manifest)||void 0===s?void 0:s.widgetType)!==n.WidgetType.Layout&&i.indexOf(d.widgetId)<0?!Ye(e,l,t)&&l.push(t):e.widgets[d.widgetId].layouts&&Object.keys(e.widgets[d.widgetId].layouts).forEach(t=>{Je(e,e.widgets[d.widgetId].layouts[t],o,i,a,r).forEach(t=>{!Ye(e,l,t)&&l.push(t)})})});k(e.layouts[t[s]],n.LayoutItemType.Section,!0).forEach(t=>{const n=e.layouts[t.layoutId].content[t.layoutItemId];a.indexOf(n.sectionId)<0?!Ye(e,l,t)&&l.push(t):e.sections[n.sectionId].views&&e.sections[n.sectionId].views.forEach(t=>{Je(e,e.views[t].layout,o,i,a,r).forEach(t=>{!Ye(e,l,t)&&l.push(t)})})});k(e.layouts[t[s]],n.LayoutItemType.ScreenGroup,!0).forEach(t=>{var n,s;const d=e.layouts[t.layoutId].content[t.layoutItemId];r.indexOf(d.screenGroupId)<0?!Ye(e,l,t)&&l.push(t):(null===(s=null===(n=e.screenGroups)||void 0===n?void 0:n[d.screenGroupId])||void 0===s?void 0:s.screens)&&e.screenGroups[d.screenGroupId].screens.forEach(t=>{var n;const s=null===(n=e.screens)||void 0===n?void 0:n[t];(null==s?void 0:s.main)&&Je(e,s.main.layout,o,i,a,r).forEach(t=>{!Ye(e,l,t)&&l.push(t)}),(null==s?void 0:s.panel)&&Je(e,s.panel.layout,o,i,a,r).forEach(t=>{!Ye(e,l,t)&&l.push(t)})})})}),l}function Ye(e,t,o){const i=e.layouts[o.layoutId].content[o.layoutItemId];return!!t.find(t=>{const o=e.layouts[t.layoutId].content[t.layoutItemId];return o.type===i.type&&(o.type===n.LayoutItemType.Widget&&o.widgetId===i.widgetId||o.type===n.LayoutItemType.Section&&o.sectionId===i.sectionId)})}var Ke=d(1888);function qe(e){const{widgetId:t,needHiddenState:o}=e,i=n.ReactRedux.useSelector(t=>function(e,t){var o,n,i;const a=e.appConfig.widgets[t.widgetId],r=null!==(i=null===(n=null===(o=null==a?void 0:a.manifest)||void 0===o?void 0:o.properties)||void 0===n?void 0:n.handleA11yLabelInWidget)&&void 0!==i&&i;return{label:null==a?void 0:a.label,a11yLabel:null==a?void 0:a.a11yLabel,a11yLandmark:null==a?void 0:a.a11yLandmark,addToSkip:null==a?void 0:a.addToA11ySkip,handleA11yLabelInWidget:r}}(t,e),n.ReactRedux.shallowEqual),{label:a,a11yLabel:r,a11yLandmark:l,addToSkip:s,handleA11yLabelInWidget:d}=i,u=n.React.useRef(null),[c,p]=n.React.useState(!1),y=v.hooks.useHiddenState(o?u.current:void 0);n.React.useEffect(()=>{u.current&&!c&&p(!0)},[c]),n.React.useEffect(()=>{o&&void 0!==y&&(0,n.getAppStore)().dispatch(n.appActions.widgetRuntimeInfoChange(t,"state",y?n.WidgetState.Hidden:void 0))},[o,y,t]);const h=n.React.useMemo(()=>d?{}:(0,n.getA11yProps)(t,a,r,l,s),[a,r,l,s,t,d]);return(0,g.jsx)("div",Object.assign({className:(0,n.classNames)(e.className,"jimu-outline-inside")},h,{ref:u,children:e.children}))}var Ze=d(3935),Qe=d.n(Ze),et=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o};const tt=e=>{const t=window.SVG,{className:o}=e,i=et(e,["className"]),a=(0,n.classNames)("jimu-icon jimu-icon-component",o);return t?(0,g.jsx)(t,Object.assign({className:a,src:Qe()},i)):(0,g.jsx)("svg",Object.assign({className:a},i))},ot=function(e){const{msg:t}=e;return(0,g.jsxs)("div",{className:"w-100 h-100 d-flex p-3 flex-column justify-content-center align-items-center hint-paper",children:[(0,g.jsx)(tt,{color:"var(--sys-color-warning-dark)"}),(0,g.jsx)("span",{children:t})]})};var nt=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o};class it extends n.React.PureComponent{constructor(e){super(e),this.onMouseDown=()=>{var e;if(this.props.widgetId){(null===(e=(0,n.getAppStore)().getState().widgetsRuntimeInfo[this.props.widgetId])||void 0===e?void 0:e.state)!==n.WidgetState.Active&&(0,n.getAppStore)().dispatch(n.appActions.activateWidget(this.props.widgetId))}},this.onMouseDown=this.onMouseDown.bind(this),this.ref=n.React.createRef(),this.state={error:null}}loadWidgetClass(){const{widgetId:e,isClassLoaded:t}=this.props;e&&!t&&n.WidgetManager.getInstance().loadWidgetClass(e).catch(e=>{console.log(e),this.setState({error:n.i18n.getIntl().formatMessage({id:"widgetLoadError"})})})}componentDidMount(){this.loadWidgetClass()}componentDidUpdate(){this.loadWidgetClass()}renderWidgetContent(){var e;const{widgetId:t,widgetJson:o,needHiddenState:i,layoutId:a,layoutItemId:r,autoWidth:l,autoHeight:s,onInitResizeHandler:d,onInitDragHandler:u}=this.props;let c;if(t&&(c=n.WidgetManager.getInstance().getWidgetClass(t)),this.state.error)return(0,g.jsx)("div",{className:"widget-content",children:(0,g.jsx)(ot,{msg:this.state.error})});const p=null===(e=null==o?void 0:o.manifest)||void 0===e?void 0:e.exbVersion;return(0,g.jsx)(qe,{widgetId:t,needHiddenState:i,className:(0,n.classNames)("widget-content",{"d-none":!t}),children:c&&(0,g.jsx)(n.ErrorBoundary,{fallback:window.jimuConfig.exbVersion!==p?(0,g.jsx)(ot,{msg:n.i18n.getIntl().formatMessage({id:"versionMismatchRemind"})}):void 0,children:(0,g.jsx)(c,{widgetId:t,layoutId:a,layoutItemId:r,autoWidth:l,autoHeight:s,onInitResizeHandler:d,onInitDragHandler:u})})})}getStyle(){const{forceAspectRatio:e,aspectRatio:t}=this.props,o=n.css`
      -webkit-overflow-scrolling: touch;
    `;return n.css`
      ${"app-loader"===this.props.widgetId?o:""};
      overflow: ${this.props.canCrossLayoutBoundary?"visible":"hidden"};
      position: relative;
      aspect-ratio: ${e&&t>0?t:null};

      .panel-content > & {
        border: 1px solid transparent;
      }

      & > .widget-content {
        position: relative;
        height: 100%;
        width: 100%;
        z-index: 0;
      }
    `}render(){var e,t,o,i,a,r;const{className:l,widgetStyle:s,widgetId:d,rotate:u,theme:c,widgetJson:p}=this.props,y=v.styleUtils.toCSSStyle(s),{transform:h,borderRadius:f}=y,m=nt(y,["transform","borderRadius"]),I=u>0||u<0?`rotateZ(${u}deg)`:"";let x=I;h&&(x=`${h} ${I}`);const w=(null===(e=null==p?void 0:p.manifest)||void 0===e?void 0:e.widgetType)===n.WidgetType.Layout,b=null!==(i=null===(o=null===(t=null==p?void 0:p.manifest)||void 0===t?void 0:t.properties)||void 0===o?void 0:o.useOwnBorder)&&void 0!==i&&i,S=(0,Ke.getThemeModule)(c.uri),C=null==f?void 0:f.split(" ").every(e=>parseFloat(e)>=0);return(0,g.jsxs)("div",{className:(0,n.classNames)(`widget-renderer layout-item-content w-100 ${null!==(r=null===(a=null==s?void 0:s.boxShadow)||void 0===a?void 0:a.presetStyle)&&void 0!==r?r:""}`,l),css:this.getStyle(),style:Object.assign(Object.assign({},m),{borderRadius:C&&f||(!w&&d&&!b&&Ke.mapping.whetherIsNewTheme(S)?c.sys.shape.shape2:null),transform:x}),onMouseDownCapture:this.onMouseDown,"data-widgetid":d,ref:this.ref,children:[this.renderWidgetContent(),this.props.children]})}}const at=n.ReactRedux.connect(ge)((0,Ke.withTheme)(it)),rt="var(--sys-color-primary-main)",lt="var(--sys-color-primary-text)";function st(e){const{layoutId:t,layoutItemId:o}=e,i=n.ReactRedux.useSelector(e=>{const n=e.appConfig.layouts[t].setting,i=e.appConfig.layouts[t].content[o];return(null==i?void 0:i.headerBackground)||(null==n?void 0:n.itemHeaderBackground)}),a=n.ReactRedux.useSelector(e=>{const n=e.appConfig.layouts[t].setting,i=e.appConfig.layouts[t].content[o];return(null==i?void 0:i.headerForeground)||(null==n?void 0:n.itemHeaderForeground)}),r=n.ReactRedux.useSelector(e=>{var i,a;const r=e.appConfig.layouts[t].content[o];if(!r)return"";if(r.type===n.LayoutItemType.Widget){const t=r.widgetId,o=e.appConfig.widgets[t];return null!==(i=null==o?void 0:o.label)&&void 0!==i?i:""}const l=r.sectionId,s=e.appConfig.sections[l];return null!==(a=null==s?void 0:s.label)&&void 0!==a?a:""});return(0,g.jsx)("div",{className:"label flex-grow-0 flex-shrink-0",css:n.css`
        background: ${i||rt};
        height: 2rem;
        font-size: var(--sys-typography-label1-font-size);
        font-weight: var(--sys-typography-label1-font-weight);
        line-height: var(--sys-typography-label1-line-height);
        padding: 7px var(--size-spacing-2, 8px);
        border-top-left-radius: var(--sys-shape-2);
        border-top-right-radius: var(--sys-shape-2);
        border-bottom-left-radius: 0 !important;
        border-bottom-right-radius: 0 !important;
        color: ${a||lt};
      `,children:(0,g.jsx)("span",{className:"text-truncate",children:r})})}const dt={},ut={};function ct(e,t){dt[e]=t}function pt(e,t){ut[e]=t}function gt(e){return dt[e]}function vt(e){return ut[e]}class yt extends n.React.PureComponent{render(){const{layout:e}=this.props;if(!e)return null;const t=vt(e.type||n.LayoutType.FlowLayout);return t?(0,g.jsx)(t,Object.assign({},this.props)):null}}const ht=n.ReactRedux.connect(ce)(yt);function ft(e,t){if(!e)return null;let o={};e.backgroundIMage&&(o="string"==typeof e.backgroundIMage?{}:e.backgroundIMage);const n=e.backgroundPosition?v.FillType[e.backgroundPosition.toUpperCase()]:v.FillType.FILL;let i;i=null==e.backgroundColor?t:""===e.backgroundColor?"transparent":e.backgroundColor?e.backgroundColor:"";const a={color:i,fillType:n,image:o};return Object.assign(Object.assign({},v.styleUtils.toBackgroundStyle(a)),{color:e.textColor?e.textColor:null})}function mt(e){const{viewId:t,isActive:o,layoutEntryComponent:i}=e,a=n.ReactRedux.useSelector(e=>{var o,n;return null===(n=null===(o=e.appConfig)||void 0===o?void 0:o.views)||void 0===n?void 0:n[t]}),r=i,[l,s]=n.React.useState(!1),d=n.React.useMemo(()=>({isInView:!0,isInCurrentView:o}),[o]);return n.React.useEffect(()=>{o&&a.lazyLoad&&!l&&s(!0)},[o,a.lazyLoad,l]),(0,g.jsx)("div",{className:(0,n.classNames)("w-100 h-100 d-flex section-view",{[v.FOCUSABLE_CONTAINER_CLASS]:o}),style:ft(a,"var(--sys-color-surface-background)"),css:n.css`&, .exb-drop-area { pointer-events: ${o?"auto":"none"}; }`,id:`${a.parent}_${a.id}`,children:(l||!a.lazyLoad)&&(0,g.jsx)(n.ErrorBoundary,{children:(0,g.jsx)(n.ViewVisibilityContext.Provider,{value:d,children:(0,g.jsx)(r,{layouts:null==a?void 0:a.layout,isInSection:!0,className:"w-100"})})})},t)}function It(e){var t,o;const{layoutId:i,layoutItemId:a,views:r,navInfo:l,animationPreview:s,playMode:d,previewId:u,currentIndex:c,previousIndex:p,progress:v,loop:y,viewTransition:h}=e,f=n.ReactRedux.useSelector(e=>{var t;return null===(t=e.appConfig.layouts[i].content[a].setting)||void 0===t?void 0:t.oneByOneEffect});return(0,g.jsx)("div",{className:"section-content",children:(0,g.jsx)(n.TransitionContainer,{useProgress:null!==(t=null==l?void 0:l.useProgress)&&void 0!==t&&t,useStep:null!==(o=null==l?void 0:l.useStep)&&void 0!==o&&o,previousIndex:p,currentIndex:c,progress:v,transitionType:null==h?void 0:h.type,direction:null==h?void 0:h.direction,playId:null==l?void 0:l.playId,withOneByOne:null==l?void 0:l.withOneByOne,previewId:s?u:null,previewMode:s?d:null,loop:y,oneByOneSetting:f,children:r.map(t=>{const o=t===r[c];return(0,g.jsx)(mt,{viewId:t,isActive:o,layoutEntryComponent:e.layoutEntryComponent},t)})})})}var xt=d(85),wt=d.n(xt),bt=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o};const St=e=>{const t=window.SVG,{className:o}=e,i=bt(e,["className"]),a=(0,n.classNames)("jimu-icon jimu-icon-component",o);return t?(0,g.jsx)(t,Object.assign({className:a,src:wt()},i)):(0,g.jsx)("svg",Object.assign({className:a},i))};var Ct=d(6024),Rt=d.n(Ct),Tt=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o};const jt=e=>{const t=window.SVG,{className:o}=e,i=Tt(e,["className"]),a=(0,n.classNames)("jimu-icon jimu-icon-component",o);return t?(0,g.jsx)(t,Object.assign({className:a,src:Rt()},i)):(0,g.jsx)("svg",Object.assign({className:a},i))};function Mt(e){var t,o,i;const{sectionId:a,currentIndex:r,numOfViews:l,onCurrentViewChange:s}=e,d=n.hooks.useTranslation(v.defaultMessages),u=n.ReactRedux.useSelector(e=>{var t;return null===(t=e.appConfig.sections[a])||void 0===t?void 0:t.arrowsNav}),c=n.ReactRedux.useSelector(e=>{var t;return null===(t=e.appConfig.sections[a])||void 0===t?void 0:t.dotsNav}),p=n.ReactRedux.useSelector(e=>{if(null==c?void 0:c.visible){const t=e.appConfig.sections[a],o=null==t?void 0:t.views;if((null==o?void 0:o.length)>0){return o.map(t=>e.appConfig.views[t].label).join(";")}}return""}),y=n.React.useMemo(()=>p.length>0?p.split(";"):[],[p]),h=null!==(t=null==c?void 0:c.position)&&void 0!==t?t:"b",f=n.React.useMemo(()=>{const e=[];for(let t=0;t<l;t++)e.push(t);return e},[l]),m=()=>{var e,t,o,i;return n.css`
      position: absolute !important;
      cursor: pointer !important;
      pointer-events: auto !important;

      &.disabled {
        cursor: default;
        svg {
          color: var(--ref-palette-neutral-500);
        }
      }

      &.first {
        left: ${null!==(e=u.offset)&&void 0!==e?e:8}px;
        top: 50%;
        transform: translateY(-50%);

        &.vertical {
          top: ${null!==(t=u.offset)&&void 0!==t?t:8}px;
          left: 50%;
          transform: translateX(-50%) rotate(90deg);
        }
      }
      &.second {
        right: ${null!==(o=u.offset)&&void 0!==o?o:8}px;
        top: 50%;
        transform: translateY(-50%);

        &.vertical {
          bottom: ${null!==(i=u.offset)&&void 0!==i?i:8}px;
          left: 50%;
          top: auto;
          right: auto;
          transform: translateX(-50%) rotate(90deg);
        }
      }
    `},I=n.React.useCallback((e,t)=>{var o;return(0,g.jsx)(v.Button,{type:"tertiary","aria-label":null!==(o=y[e])&&void 0!==o?o:"","aria-pressed":t,className:(0,n.classNames)("dot p-0 rounded-circle",{active:t,disabled:l<=1}),onClick:t?void 0:()=>{s(e)}},e)},[s,l,y]),x=n.React.useCallback(()=>{s(r>0?r-1:l-1)},[r,l,s]),w=n.React.useCallback(()=>{s(r<l-1?r+1:0)},[r,l,s]),b=l>1&&0!==r,S=l>1&&r!==l-1;return(0,g.jsxs)(n.React.Fragment,{children:[(null==u?void 0:u.visible)&&(0,g.jsxs)(n.React.Fragment,{children:[(0,g.jsx)(v.Button,{type:"tertiary",disabled:!b,className:(0,n.classNames)("arrows-nav first p-0",{vertical:"v"===u.direction}),css:m(),onClick:b?x:null,"aria-label":d("previous"),children:(0,g.jsx)(St,{className:"m-0",autoFlip:"v"!==u.direction,size:null!==(o=u.size)&&void 0!==o?o:20})}),(0,g.jsx)(v.Button,{type:"tertiary",disabled:!S,className:(0,n.classNames)("arrows-nav second p-0",{vertical:"v"===u.direction}),css:m(),onClick:S?w:null,"aria-label":d("next"),children:(0,g.jsx)(jt,{className:"m-0",autoFlip:"v"!==u.direction,size:null!==(i=u.size)&&void 0!==i?i:20})})]}),(null==c?void 0:c.visible)&&(0,g.jsx)("div",{className:(0,n.classNames)("dots-nav",{"snap-left":"l"===h,"snap-top":"t"===h,"snap-right":"r"===h,"snap-bottom":"b"===h}),css:(()=>{var e,t,o,i,a,r,l,s,d,u,p,g,v,y;return n.css`
      position: absolute;
      display: flex;
      flex-direction: ${"l"===h||"r"===h?"column":"row"};
      justify-content: center;
      align-items: center;
      overflow: visible;
      pointer-events: none;
      background: transparent;

      .dot {
        pointer-events: all;
        cursor: pointer;
        border: 1px solid var(--ref-palette-neutral-500);
        background: var(--ref-palette-neutral-200);
        width: ${null!==(e=c.size)&&void 0!==e?e:8}px;
        height: ${null!==(t=c.size)&&void 0!==t?t:8}px;

        &.active {
          border-color: var(--ref-palette-white);
          background: var(--sys-color-primary-main);
          width: ${c.size>0?1.5*c.size:12}px;
          height: ${c.size>0?1.5*c.size:12}px;
        }

        &.disabled {
          cursor: default;
        }
      }

      &.snap-left {
        height: 100%;
        top: 0;
        left: ${null!==(o=c.offset)&&void 0!==o?o:50}px;
        width: ${null!==(i=c.size)&&void 0!==i?i:8}px;

        > button:not(:first-of-type) {
          margin-top: ${null!==(a=c.spacing)&&void 0!==a?a:10}px;
        }
      }
      &.snap-right {
        height: 100%;
        top: 0;
        right: ${null!==(r=c.offset)&&void 0!==r?r:50}px;
        width: ${null!==(l=c.size)&&void 0!==l?l:8}px;

        > button:not(:first-of-type) {
          margin-top: ${null!==(s=c.spacing)&&void 0!==s?s:10}px;
        }
      }
      &.snap-top {
        width: 100%;
        top: ${null!==(d=c.offset)&&void 0!==d?d:50}px;
        height: ${null!==(u=c.size)&&void 0!==u?u:8}px;

        > button:not(:first-of-type) {
          margin-left: ${null!==(p=c.spacing)&&void 0!==p?p:10}px;
        }
      }
      &.snap-bottom {
        width: 100%;
        bottom: ${null!==(g=c.offset)&&void 0!==g?g:50}px;
        height: ${null!==(v=c.size)&&void 0!==v?v:8}px;

        > button:not(:first-of-type) {
          margin-left: ${null!==(y=c.spacing)&&void 0!==y?y:10}px;
        }
      }
    `})(),children:f.map(e=>I(e,e===r))})]})}function Pt(e){const{sectionId:t,autoPlay:o,interval:i=x,loop:a=!1}=e,r=n.React.useRef(void 0),l=n.ReactRedux.useSelector(e=>{var t,i;return o?(null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.appMode)===n.AppMode.Design||(null===(i=e.appRuntimeInfo)||void 0===i?void 0:i.isPrintPreview):null}),s=n.React.useRef(l),d=n.React.useCallback(()=>{r.current&&(clearInterval(r.current),r.current=null)},[]),u=n.React.useCallback(()=>{d(),r.current=setInterval(()=>{const e=function(e,t){var o,i;const a=(0,n.getAppStore)().getState(),r=a.appConfig.sections[e].views;let l=null===(i=null===(o=a.appRuntimeInfo)||void 0===o?void 0:o.sectionNavInfos)||void 0===i?void 0:i[e];const s=(null==l?void 0:l.currentViewId)?r.indexOf(l.currentViewId):0,d=s<r.length-1?s+1:0;return t||0!==d?(l=l?l.set("previousViewId",r[s]).set("currentViewId",r[d]):{previousViewId:r[s],currentViewId:r[d]},(0,n.getAppStore)().dispatch(n.appActions.sectionNavInfoChanged(e,l)),!0):(n.jimuHistory.changeView(e,r[r.length-1]),!1)}(t,a);e||d()},1e3*i)},[t,a,i,d]);n.React.useEffect(()=>{if(!s.current){if(!o)return void d();u()}return()=>{d()}},[o,i,a,d,u]),n.React.useEffect(()=>{if(s.current!==l&&null!==l){if(s.current=l,l)return void d();o&&u()}},[l,u,d,o])}var $t=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o};function Lt(e,t){return n.css`
    overflow: visible;
    position: relative;
    aspect-ratio: ${e&&t>0?t:null};
    // add a transparent border under panel-content to make sure the hidden state take effect
    .panel-content > & {
      border: 1px solid transparent;
    }

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

    .hidden {
      display: none !important;
    }
  `}function Ot(e){var t;const{layoutId:o,layoutItemId:a,views:r,navInfo:l,activeView:s,animationPreview:d,playMode:u,previewId:c,transition:p,sectionId:y,autoPlay:h,focusable:f=!0,interval:m=x,loop:I=!0,className:w,sectionStyle:b,rotate:S,forceAspectRatio:C,aspectRatio:R,layoutEntryComponent:T}=e,j=n.React.useRef(void 0),M=n.React.useRef(void 0),P=n.React.useRef(!1),$=n.React.useRef(!1),L=n.React.useRef(null),[O,k]=n.React.useState(!1),E=n.ReactRedux.useSelector(e=>e.appConfig.sections[y].label),A=n.ReactRedux.useSelector(e=>e.appConfig.sections[y].a11yLabel),z=n.ReactRedux.useSelector(e=>e.appConfig.sections[y].a11yLandmark),N=n.ReactRedux.useSelector(e=>e.appConfig.sections[y].addToA11ySkip),B=n.hooks.useTranslation(i),F=null==s?void 0:s.id,H=n.React.useMemo(()=>{var e;let t,o,i,a=r;if(l)if(a=null!==(e=l.visibleViews)&&void 0!==e?e:r,l.useProgress){i=l.progress;t=(0,n.getIndexFromProgress)(i,a.length).currentIndex}else t=Math.max(0,a.indexOf(l.currentViewId)),o=l.previousViewId?Math.max(0,a.indexOf(l.previousViewId)):Math.max(0,t-1);else t=Math.max(0,a.indexOf(F)),o=t;return j.current=t,{currentIndex:t,previousIndex:o,progress:i}},[F,l,r]),W=n.React.useMemo(()=>v.styleUtils.toCSSStyle(b),[b]),{transform:V}=W,D=$t(W,["transform"]),G=S>0||S<0?`rotateZ(${S}deg)`:"";let U=G;V&&(U=`${V} ${G}`);const _=n.React.useCallback(()=>{k(!0)},[]),X=n.React.useCallback(()=>{k(!1)},[]),J=n.React.useCallback(e=>{P.current=!0,$.current=e.target===M.current,null!=L.current&&(clearTimeout(L.current),L.current=null),h&&k(!0)},[h]),Y=n.React.useCallback(e=>{P.current=!1,null!=L.current&&(clearTimeout(L.current),L.current=null),h&&(L.current=setTimeout(()=>{k(!1)},500))},[h]),K=h&&!O;Pt({sectionId:y,interval:m,loop:I,autoPlay:K});const q=n.React.useCallback(e=>{n.jimuHistory.changeView(y,r[e])},[y,r]),Z=n.React.useMemo(()=>{const e=(0,n.getA11yProps)(y,E,A,z,N);return f&&(e.tabIndex=0),e},[f,y,A,z,N,E]),Q=B("activeViewTip",{viewLabel:(()=>{var e,t,o;const i=r[j.current],a=(0,n.getAppStore)().getState().appConfig;return null!==(o=null===(t=null===(e=null==a?void 0:a.views)||void 0===e?void 0:e[i])||void 0===t?void 0:t.label)&&void 0!==o?o:""})()});let ee;return ee=Z["aria-label"]?Z["aria-label"]+". "+Q:Q,(0,g.jsxs)("div",Object.assign({className:(0,n.classNames)(`section-layout layout-item-content w-100 ${null===(t=null==b?void 0:b.boxShadow)||void 0===t?void 0:t.presetStyle}`,w),css:Lt(C,R),"data-sectionid":y,style:Object.assign(Object.assign({},D),{transform:U}),onMouseEnter:h?_:null,onMouseLeave:h?X:null,onTouchStart:h?_:null,onTouchEnd:h?X:null,onFocus:J,onBlur:Y,tabIndex:f?0:void 0,role:"group"},Z,{"aria-label":ee,ref:M,children:[(0,g.jsx)(It,{layoutId:o,layoutItemId:a,views:r,navInfo:l,animationPreview:d,playMode:u,previewId:c,currentIndex:H.currentIndex,previousIndex:H.previousIndex,progress:H.progress,loop:K&&I,viewTransition:p,layoutEntryComponent:T}),(0,g.jsx)(Mt,{sectionId:y,numOfViews:r.length,currentIndex:H.currentIndex,onCurrentViewChange:q})]}))}class kt extends n.React.PureComponent{render(){return(0,g.jsx)(Ot,Object.assign({},this.props,{layoutEntryComponent:ht}))}}function Et(){const e=[0];for(let t=1;t<=10;t++)e.push(t/10);return e}function At(e,t){const o=n.React.useRef(void 0),[i,a]=n.React.useState(!0);return n.React.useEffect(()=>{if(o.current&&(o.current.unobserve(e),o.current=null),!t)return;if(e&&"function"==typeof IntersectionObserver){const t=new IntersectionObserver(e=>{var t;(t=e[0]).target.classList.contains("playing-animation")||t.boundingClientRect.width>0&&t.boundingClientRect.height>0&&a(t.isIntersecting)},{threshold:Et(),root:document,rootMargin:"20%"});return t.observe(e),o.current=t,()=>{o.current.unobserve(e),o.current=null}}},[e,t]),i}var zt=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o};function Nt(e){var t,o,i,a,r,l;const d=n.ReactRedux.useSelector(t=>function(e,t){var o,i;const a=pe(e,t);if(!a.layoutItem)return a;if(a.layoutItem.type===n.LayoutItemType.Widget){const{layoutId:r,layoutItemId:l}=t,s=e.appConfig.widgets[a.layoutItem.widgetId],d=null===(i=null===(o=null==s?void 0:s.manifest)||void 0===o?void 0:o.properties)||void 0===i?void 0:i.supportInlineEditing,u=function(e,t,o){var i,a;const r=e.appConfig.layouts[t].content[o];if(r.type===n.LayoutItemType.Widget){const t=e.appConfig.widgets[r.widgetId],o=null===(i=null==t?void 0:t.layouts)||void 0===i?void 0:i.DEFAULT;if(o)return null!==(a=o[e.browserSizeMode])&&void 0!==a?a:o[e.appConfig.mainSizeMode]}return null}(e,r,l),c=Object.assign({widgetId:a.layoutItem.widgetId,supportInlineEditing:d},a);return u&&(c.innerLayoutId=u),c}const r=Ve(e,a.layoutItem.sectionId);return Object.assign(Object.assign({},a),r)}(t,e),n.ReactRedux.shallowEqual),u=Object.assign(Object.assign({},e),d),c=n.React.useRef(void 0),{layoutId:p,layoutItemId:v,layoutItem:y}=u,{className:h,children:f,id:I,isLastChild:x,parentRef:w,displayHeader:b=!1}=u,S=zt(u,["className","children","id","isLastChild","parentRef","displayHeader"]),C=(null==y?void 0:y.type)===n.LayoutItemType.Widget,R=(null==y?void 0:y.type)===n.LayoutItemType.Section,{effect:T,oneByOneEffect:j,hoverEffect:M}=null!==(o=null===(t=u.layoutItem)||void 0===t?void 0:t.setting)&&void 0!==o?o:{},P=At(c.current,u.watchViewportVisibility);if(!u.layoutItem||R&&!y.sectionId)return null;const $=null!==(l=null===(r=null===(a=null===(i=y.setting)||void 0===i?void 0:i.style)||void 0===a?void 0:a.transform)||void 0===r?void 0:r.rotate)&&void 0!==l?l:0;return(0,g.jsx)(s.Provider,{value:P,children:(0,g.jsxs)(n.AnimationLight,{id:u.id,parentId:p,parentRef:w,innerLayoutId:d.innerLayoutId,animationSetting:null==T?void 0:T[n.AnimationTriggerType.ScrollIntoView],oneByOneSetting:null==j?void 0:j[n.AnimationTriggerType.ScrollIntoView],ref:c,css:n.css`
          ${(0,n.getHoverStyle)(null==M?void 0:M.type,null==M?void 0:M.setting)};
          position: relative;
          overflow: visible;
          min-width: ${m}px;
          min-height: ${m}px;
          & > div {
            flex-direction: ${b?"column":"row"};
          }

          & > div > div.widget-renderer,
          & > div > div.section-layout {
            flex-grow: ${b?1:"inherit"};
          }
        `,style:e.style,className:(0,n.classNames)("d-flex layout-item",h,{"is-widget":C,"is-section":R}),"data-layoutitemid":v,"data-layoutid":p,children:[b&&(0,g.jsx)(st,{layoutId:p,layoutItemId:v}),C&&(0,g.jsx)(at,Object.assign({rotate:$},S)),R&&(0,g.jsx)(kt,Object.assign({rotate:$},S)),e.children]})})}class Bt extends n.React.PureComponent{getPositionStyle(e){const{layoutItem:t,transformedBBox:o}=this.props,i=function(e,t){var o,n,i,a,r;const l={};let s=null!==(o=null==t?void 0:t.autoProps)&&void 0!==o?o:{},d=e;const u=ze("height",e,s),c=ze("width",e,s);if(u===b.Stretch)l.top=d.top,l.bottom=d.bottom;else{const o=null!==(n=s.top)&&void 0!==n&&n,a=null!==(i=s.bottom)&&void 0!==i&&i;u===b.Custom&&(l.height=d.height),o!==a&&!a||null==e.top?l.bottom=d.bottom:l.top=d.top,t.vCenter&&"50%"===d.top&&(l.top="50%")}if(c===b.Stretch)l.left=d.left,l.right=d.right;else{const e=null!==(a=s.left)&&void 0!==a&&a,o=null!==(r=s.right)&&void 0!==r&&r;c===b.Custom&&(l.width=d.width),e===o?null!=d.left?l.left=d.left:l.right=d.right:e&&null!=d.right?l.right=d.right:l.left=d.left,t.hCenter&&"50%"===d.left&&(l.left="50%")}return l}(null!=o?o:t.bbox,e),a=Object.assign(Object.assign({},i),function(e,t,o=!1){const n={},i=t.hCenter&&"50%"===e.left,a=t.vCenter&&"50%"===e.top,r=xe()?-1:1;return i&&a?(n.right="auto",n.bottom="auto",n.transform=`translate(${-50*r}%, -50%)`):i?(n.right="auto",n.transform=`translateX(${-50*r}%)`):a&&(n.bottom="auto",n.transform="translateY(-50%)"),!o&&Ne(t)&&(n.height="auto"),n}(t.bbox,e));return function(e){return[n.css`
      position: absolute;
      left: ${se(e,"left")};
      right: ${se(e,"right")};
      top: ${se(e,"top")};
      bottom: ${se(e,"bottom")};
      width: ${se(e,"width")};
      height: ${se(e,"height")};
    `,e.transform]}(a)}render(){const{layoutItem:e,layoutId:t}=this.props;if(null==e||e.isPending)return null;const o=n.lodash.assign({},We,e.setting),i=we(o.aspectRatio),a=Ne(o),[r,l]=this.getPositionStyle(o),s=ze("width",e.bbox,o.autoProps),d=ze("height",e.bbox,o.autoProps);return(0,g.jsx)(Nt,{css:r,style:{transform:l},layoutId:t,layoutItemId:e.id,forceAspectRatio:a,aspectRatio:i,isInSection:this.props.isInSection,autoWidth:s===b.Auto,autoHeight:d===b.Auto})}}class Ft extends n.React.PureComponent{createItem(e,t,o,n){const i=e.content[t];return(0,g.jsx)(Bt,{index:o,layoutId:e.id,layoutItemId:t,layoutItem:i,transformedBBox:n?e.content[t].bbox:null,isInSection:this.props.isInSection},`${e.id}_${t}`)}render(){const{layout:e,layouts:t,className:o,style:i,browserSizeMode:a}=this.props;if(!e)return null;let r=e,l=!1;if(t[a]!==e.id&&this.layoutTransform){let o;Object.keys(t).some(n=>t[n]===e.id&&(o=n,!0)),r=this.layoutTransform(e,o,a),l=!0}const s=n.lodash.assign({},He,r.setting),d=r.order||[],u=(0,n.classNames)("layout fixed-layout d-flex",o);return(0,g.jsx)("div",{className:u,style:Object.assign(Object.assign(Object.assign({position:"relative",height:"auto"},i),v.styleUtils.toCSSStyle(s.style)),{width:"100%",overflow:"hidden"}),"data-layoutid":r.id,children:d.length>0&&(0,g.jsx)("div",{css:n.css`
              position: absolute;
              left: 0;
              right: 0;
              top: 0;
              bottom: 0;
            `,"data-layoutid":e.id,children:d.map((e,t)=>this.createItem(r,e,t,l))})})}}const Ht=n.ReactRedux.connect(ce)(Ft);class Wt extends n.React.PureComponent{isStretchInCrossAxis(){const{layoutItem:e}=this.props;return function(e){var t,o;return(null===(o=null===(t=e.setting)||void 0===t?void 0:t.autoProps)||void 0===o?void 0:o.width)!==b.Custom}(e)}calHeight(e,t){return function(e,t){var o,n;return(null===(o=e.autoProps)||void 0===o?void 0:o.height)===b.Auto||"ratio"===e.heightMode?"ratio"===e.heightMode?{height:"auto",flex:"0 0 auto"}:{height:"auto"}:(null===(n=e.autoProps)||void 0===n?void 0:n.height)===b.Stretch||"fit"===e.heightMode?{flex:"1 1 auto"}:{height:t.height,flexShrink:0}}(e,t)}getStyle(e,t){const{layoutItem:o}=this.props,i=o.bbox||{},a=this.calHeight(e,i);return a.width=t?"auto":i.width,this.autoHeight="auto"===a.height,function(e,t,o){var i,a,r;const l=(null===(i=t.autoProps)||void 0===i?void 0:i.height)===b.Auto;return n.css`
    align-self: ${o?"stretch":null!==(r=null===(a=t.style)||void 0===a?void 0:a.alignSelf)&&void 0!==r?r:"auto"};
    width: ${se(e,"width")};
    height: ${se(e,"height")};
    flex: ${e.flex};
    flex-shrink: ${e.flexShrink};
    min-height: ${l?"unset":null};
  `}(a,e,t)}render(){var e,t;const{layoutId:o,layoutItem:i,parentRef:a,onClick:r}=this.props;if(!i||i.isPending)return null;const l=i.setting||{},s=null!==(t=null===(e=l.autoProps)||void 0===e?void 0:e.height)&&void 0!==t?t:b.Custom,d=(0,n.classNames)("flexbox-layout-item",{"d-flex":s!==b.Auto}),u=this.isStretchInCrossAxis(),c=Ne(l),p=we(l.aspectRatio);return(0,g.jsx)(Nt,{css:this.getStyle(l,u),layoutId:o,layoutItemId:i.id,parentRef:a,onClick:r,className:d,forceAspectRatio:c,aspectRatio:p,autoHeight:this.autoHeight})}}const Vt={min:16,space:10},Dt=e=>n.css`
  height: 100%;
  overflow-x: hidden;
  justify-content: ${e.justifyContent};
  overflow-y: auto !important;
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */
  &::-webkit-scrollbar {
    display: none;  /* Safari and Chrome */
  }
  &:hover {
    -ms-overflow-style: auto;  /* Internet Explorer 10+ */
    scrollbar-width: thin;  /* Firefox */
    &::-webkit-scrollbar {
      display: block;  /* Safari and Chrome */
    }
  }
  & > div.flexbox-layout-item ~ div.flexbox-layout-item {
    margin-top: ${e.space}px;
  }
`;class Gt extends n.React.PureComponent{constructor(e){super(e),this.ref=n.React.createRef()}createItem(e,t,o){const{layout:n}=this.props;return(0,g.jsx)(Wt,{index:t,space:o.space,layoutId:n.id,layoutItemId:e,parentRef:this.ref,layoutItem:n.content[e]},e)}render(){const{layout:e,className:t}=this.props,o=e.order||(0,n.Immutable)([]),i=Object.assign({},Vt,e.setting),a=(0,n.classNames)("layout column-layout d-flex w-100",t);return(0,g.jsx)("div",{ref:this.ref,className:a,style:{position:"relative",overflow:"hidden"},"data-layoutid":e.id,children:(0,g.jsx)("div",{className:"trail-container d-flex flex-column w-100",css:n.css`
            ${Dt(i)};
            padding: ${v.styleUtils.toCSSPadding(i.padding)};
          `,children:o.asMutable().map((e,t)=>this.createItem(e,t,i))})})}}const Ut=n.ReactRedux.connect(ce)(Gt);const _t=n.css`
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
`;const Xt={space:10,style:{padding:{number:[10,10,10,10],unit:v.DistanceUnits.PIXEL}}},Jt={heightMode:"fixed",aspectRatio:1,offsetX:0,offsetY:0,style:{alignSelf:"flex-start"}};class Yt extends n.React.PureComponent{getStyle(e){const{gutter:t,layoutItem:o,isMultiRow:i}=this.props,a=o.bbox,r=xe()?-1:1,l=function(e,t,o){var n,i,a,r,l,s,d,u,c,p,g,v,y,h;return o?{height:(null===(n=e.autoProps)||void 0===n?void 0:n.height)===b.Auto?"auto":t.height,alignSelf:null!==(a=null===(i=e.style)||void 0===i?void 0:i.alignSelf)&&void 0!==a?a:"flex-start"}:"ratio"===e.heightMode?{alignSelf:null!==(l=null===(r=e.style)||void 0===r?void 0:r.alignSelf)&&void 0!==l?l:"flex-start"}:(null===(s=e.autoProps)||void 0===s?void 0:s.height)===b.Auto?{height:"auto",alignSelf:null!==(u=null===(d=e.style)||void 0===d?void 0:d.alignSelf)&&void 0!==u?u:"flex-start"}:(null===(c=e.autoProps)||void 0===c?void 0:c.height)===b.Custom?{height:t.height,alignSelf:null!==(g=null===(p=e.style)||void 0===p?void 0:p.alignSelf)&&void 0!==g?g:"flex-start"}:(null===(v=e.autoProps)||void 0===v?void 0:v.height)===b.Stretch||"fit"===e.heightMode?{alignSelf:"stretch"}:parseFloat(t.height)>0?{height:t.height,alignSelf:null!==(h=null===(y=e.style)||void 0===y?void 0:y.alignSelf)&&void 0!==h?h:"flex-start"}:{alignSelf:"stretch"}}(e,a,i);return function(e,t,o,i,a){var r,l,s,d;return e?[n.css`
        padding: ${o/2}px 0;
        height: ${se(i,"height")};
        align-self: ${i.alignSelf};
      `,0!==a.offsetX||0!==a.offsetY?`translate(${(null!==(r=a.offsetX)&&void 0!==r?r:0)*t}px, ${null!==(l=a.offsetY)&&void 0!==l?l:0}px)`:null]:[n.css`
      padding: 0 ${o/2}px;
      height: ${se(i,"height")};
      align-self: ${i.alignSelf};
    `,0!==a.offsetX||0!==a.offsetY?`translate(${(null!==(s=a.offsetX)&&void 0!==s?s:0)*t}px, ${null!==(d=a.offsetY)&&void 0!==d?d:0}px)`:null]}(i,r,t,l,e)}render(){var e;const{span:t,offset:o,layoutId:i,layoutItem:a}=this.props;if(null==a||a.isPending)return null;const r=n.lodash.assign({},Jt,a.setting),l=(0,n.classNames)("row-layout-item",`col-${t}`,`offset-${o}`),s=null===(e=r.autoProps)||void 0===e?void 0:e.height,d=we(r.aspectRatio),[u,c]=this.getStyle(r);return(0,g.jsx)(Nt,{css:u,style:{transform:c},className:l,layoutId:i,layoutItemId:a.id,forceAspectRatio:Ne(r),aspectRatio:d,onClick:this.props.onClick,autoHeight:s===b.Auto})}}const Kt=12;class qt extends n.React.PureComponent{constructor(e){super(e),this.flipLeftRight=xe()}collectBounds(){var e;const{transformedLayout:t}=this.props,o=null!==(e=t.order)&&void 0!==e?e:[];return this.childRects=[],o.forEach(e=>{var o,n;if(t.content[e].isPending)return;const i=null===(n=null===(o=t.content)||void 0===o?void 0:o[e])||void 0===n?void 0:n.bbox;null!=i&&this.childRects.push({layoutId:t.id,id:e,left:parseInt(i.left,10),width:parseInt(i.width,10),height:parseInt(i.height,10)})}),this.childRects.sort((e,t)=>e.left-t.left)}getConfig(){var e;const{layout:t}=this.props;return null!==(e=t.setting)&&void 0!==e?e:Xt}createItem(e,t,o){var n;const{transformedLayout:i,isMultiRow:a}=this.props,r=this.getConfig(),l=e[t],s=t>0?e[t-1]:null,d=null!==(n=r.space)&&void 0!==n?n:0;let u,c=!0;if(a&&s&&(c=Math.floor(l.left/Kt)===Math.floor(s.left/Kt)),0===t)u=l.left;else if(c)s&&(u=l.left-s.left-s.width);else{const e=Math.floor(l.left/Kt);u=l.left-e*Kt}return(0,g.jsx)(Yt,{offset:u,gutter:d,span:l.width,isMultiRow:a,layoutId:i.id,layoutItemId:l.id,layoutItem:i.content[l.id],alignItems:o.alignItems},`${l.layoutId}_${l.id}`)}render(){var e,t;const{layout:o,className:i}=this.props;this.collectBounds();const a=this.childRects,r=this.getConfig(),s=null!==(e=r.style)&&void 0!==e?e:{},d=null!==(t=r.space)&&void 0!==t?t:0;return(0,g.jsx)(l.Consumer,{children:e=>(0,g.jsx)("div",{className:(0,n.classNames)("row-layout",i,{"row-rtl":this.flipLeftRight}),css:_t,"data-layoutid":o.id,children:(0,g.jsx)("div",{css:n.css`
                  width: 100%;
                  max-width: ${e.maxWidth>0?`${e.maxWidth}px`:"none"};
                `,children:(0,g.jsx)("div",{css:n.css`
                    position: relative;
                    height: 100%;
                    margin-left: ${-d/2}px;
                    margin-right: ${-d/2}px;
                    display: flex;
                    flex-direction: column;
                  `,children:a.length>0&&(0,g.jsx)("div",{className:(0,n.classNames)("row h-100 m-0",{"flex-nowrap":!this.props.isMultiRow}),css:n.css`
                        position: relative;
                        height: 100%;
                        overflow: ${this.props.isMultiRow?"auto":"unset"};
                      `,children:a.map((e,t)=>this.createItem(a,t,s))})})})})})}}class Zt extends n.React.PureComponent{constructor(e){super(e),this.layoutConRef=n.React.createRef(),this.onResize=({width:e,height:t})=>{var o;if(this.props.browserSizeMode!==this.props.mainSizeMode)return;if(0===e&&0===t)return;const{widgetId:n}=this.props;null!=(null===(o=window.runtimeInfo.widgets)||void 0===o?void 0:o[n])?window.runtimeInfo.widgets[n].height=t:window.runtimeInfo.widgets[n]={height:t}},this.handleDebounceResize=n.lodash.debounce(this.onResize,200)}findExtension(){const e=n.ExtensionManager.getInstance().getExtensions(`${n.extensionSpec.ExtensionPoints.LayoutTransformer}`);if((null==e?void 0:e.length)>0){const t=e.find(e=>e.layoutType===n.LayoutType.RowLayout);this.layoutTransform=null==t?void 0:t.transformLayout}}collectRowItems(){var e;const t=null!==(e=this.finalLayout.order)&&void 0!==e?e:[],o=[];let n=[],i=0;return o.push(n),t.forEach(e=>{if(this.finalLayout.content[e].isPending)return;const t=this.finalLayout.content[e].bbox,a=parseInt(t.left,10),r=Math.floor(a/Kt);r>i&&(n=[],i=r,o.push(n)),n.push(e)}),o}transform(){const{layout:e,layouts:t,browserSizeMode:o,mainSizeMode:n}=this.props;null==this.layoutTransform&&this.findExtension();let i=e;t[o]!==e.id&&null!=this.layoutTransform&&(i=this.layoutTransform(e,n,o,Ce())),this.finalLayout=i,this.numOfRows=this.collectRowItems().length}createRow(){const{layout:e,layouts:t}=this.props;return(0,g.jsx)(qt,{layouts:t,layout:e,transformedLayout:this.finalLayout,isMultiRow:this.finalLayout!==e||this.numOfRows>1})}render(){var e,t;const{layout:o,className:i}=this.props,a=null!==(t=(null!==(e=o.setting)&&void 0!==e?e:Xt).style)&&void 0!==t?t:Xt.style;return this.transform(),(0,g.jsxs)("div",{className:(0,n.classNames)("layout d-flex",i),css:n.css`
          width: 100%;
          padding: ${v.styleUtils.toCSSPadding(a.padding)};
        `,"data-layoutid":o.id,ref:this.layoutConRef,children:[this.createRow(),(0,g.jsx)(n.ReactResizeDetector,{handleHeight:!0,onResize:this.handleDebounceResize,targetRef:this.layoutConRef})]})}}const Qt=n.ReactRedux.connect(ce)(Zt);var eo=d(598),to=d.n(eo),oo=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o};const no=e=>{const t=window.SVG,{className:o}=e,i=oo(e,["className"]),a=(0,n.classNames)("jimu-icon jimu-icon-component",o);return t?(0,g.jsx)(t,Object.assign({className:a,src:to()},i)):(0,g.jsx)("svg",Object.assign({className:a},i))};var io=d(1595),ao=d.n(io),ro=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o};const lo=e=>{const t=window.SVG,{className:o}=e,i=ro(e,["className"]),a=(0,n.classNames)("jimu-icon jimu-icon-component",o);return t?(0,g.jsx)(t,Object.assign({className:a,src:ao()},i)):(0,g.jsx)("svg",Object.assign({className:a},i))};function so(e,t){var o;return null===(o=e.content)||void 0===o?void 0:o[t]}function uo(e){var t;const o=v.styleUtils.toCSSPadding(null===(t=null==e?void 0:e.style)||void 0===t?void 0:t.padding);if(o){if(e.paddingColor){const t=o.split(" "),i=e.paddingColor;let a="";const r=window.jimuUA.browser.name.toLowerCase();return"firefox"===r?a="-moz-":"safari"!==r&&"chrome"!==r||(a="-webkit-"),n.css`
        padding: ${o};
        background-image:
        ${a}linear-gradient(270deg, ${i} ${t[0]}, transparent ${t[0]}),
        ${a}linear-gradient(180deg, ${i} ${t[1]}, transparent ${t[1]}),
        ${a}linear-gradient(90deg, ${i} ${t[2]}, transparent ${t[2]}),
        ${a}linear-gradient(0deg, ${i} ${t[3]}, transparent ${t[3]});
      `}return n.css`
      padding: ${o};
    `}}const co=n.css`
  & > div > .max-grid-item-btn {
    display: none;
    width: 26px;
    height: 26px;
    position: absolute;
    top: 0;
    right: 0;
  }

  &:hover > div > .max-grid-item-btn {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`,po=n.css`
  position: absolute;
  left: 0;
  top: 0;
  width: 100% !important;
  height: 100% !important;
  z-index: 30;
  background: var(--ref-palette-neutral-200);
`;function go(e){const{layoutId:t,layoutItemId:o,isInTab:i=!1}=e,[a,r]=n.React.useState(!1),l=n.ReactRedux.useSelector(e=>function(e,t,o){var n,i;const a=e.appConfig.layouts[t];if(!a)return!1;const r=a.content[o];if(null!==(n=null==r?void 0:r.expandable)&&void 0!==n&&!n)return!1;const l=null===(i=null==a?void 0:a.setting)||void 0===i?void 0:i.rootItem;let s=!1;if(l===o){const e=so(a,l);null!=e.children&&0!==e.children.length||(s=!0)}return!s}(e,t,o)),s=n.ReactRedux.useSelector(e=>function(e,t,o){var n;const i=e.appConfig.layouts[t];if(!i)return!1;const a=i.content[o];return null!==(n=null==a?void 0:a.hasItemHeader)&&void 0!==n&&n}(e,t,o)),d=n.ReactRedux.useSelector(e=>{const i=S(e.appConfig,{layoutId:t,layoutItemId:o});return(null==i?void 0:i.type)===n.LayoutItemType.Widget&&null==(null==i?void 0:i.widgetId)}),u=n.React.useCallback(()=>{r(!a)},[a]);return(0,g.jsx)(Nt,Object.assign({},e,{displayHeader:!i&&s&&!d,css:n.css`${co};${a?po:""}`,children:l&&(0,g.jsxs)(v.Button,{icon:!0,className:"max-grid-item-btn p-0",onClick:u,children:[a&&(0,g.jsx)(lo,{}),!a&&(0,g.jsx)(no,{})]})}))}const vo=32;function yo(e,t,o,n,i,a){let r=n,l=i;if("row"===o){const o=a?t.width:e.width,i=a?e.width:t.width;n<0&&(r=o>vo?-Math.min(Math.abs(n),o-vo):0),n>0&&(r=i>vo?Math.min(n,i-vo):0)}else i<0&&(l=e.height>vo?-Math.min(Math.abs(i),e.height-vo):0),i>0&&(l=t.height>vo?Math.min(i,t.height-vo):0);return{x:r,y:l}}function ho(e){const t=e.getAttribute("data-layoutid"),o=e.getAttribute("data-layoutitemid");return+(0,n.getAppStore)().getState().appConfig.layouts[t].content[o].bbox.width}function fo(e){var t,o;const{referenceItemId:i,direction:a,layoutId:r,onResizeEnd:l}=e,s=n.React.useRef(void 0),d=n.React.useRef(void 0),u=n.React.useRef(null),c=null!==(o=null===(t=(0,n.getAppStore)().getState().appContext)||void 0===t?void 0:t.isRTL)&&void 0!==o&&o,p=n.ReactRedux.useSelector(e=>e.appRuntimeInfo.appMode===n.AppMode.Design),v=n.ReactRedux.useSelector(t=>{var o,n;const i=t.appConfig.layouts[e.layoutId];return null===(n=null===(o=null==i?void 0:i.setting)||void 0===o?void 0:o.resizable)||void 0===n||n}),y=n.ReactRedux.useSelector(e=>{var t,o;const n=e.appConfig.layouts[r];return null!==(o=null===(t=null==n?void 0:n.setting)||void 0===t?void 0:t.splitSize)&&void 0!==o?o:8}),h=n.ReactRedux.useSelector(e=>{var t;const o=e.appConfig.layouts[r];return null===(t=null==o?void 0:o.setting)||void 0===t?void 0:t.splitColor}),f=n.React.useMemo(()=>{const e=`${y}px`,t=!!p||v;return n.css`
      width: ${"col"===a?"100%":e};
      height: ${"col"===a?e:"100%"};
      background: ${h};
      position: relative;
      overflow: visible;
      z-index: 20;
      flex-shrink: 0;

      .handler {
        position: absolute;
        background: transparent;
      }
      .horizontal-splitter {
        top: 0;
        bottom: 0;
        left: -5px;
        right: -5px;
        &:after {
          content: '';
          position: absolute;
          inset: 0 5px 0 0;
          cursor: ${t?"col-resize":"default"};
        }
      }

      .vertical-splitter {
        left: 0;
        right: 0;
        top: -5px;
        bottom: -5px;
        &:after {
          content: '';
          position: absolute;
          inset: 0 0 5px 0;
          cursor: ${t?"row-resize":"default"};
        }
      }
    `},[a,v,p,y,h]);return n.hooks.useEffectOnce(()=>{let e,t,o,r,g,y,h,f,m,I,x,w,b;return n.moduleLoader.loadModule("jimu-core/dnd").then(n=>{const S=n.interact;u.current=S,s.current&&(d.current=S(s.current).origin("parent").draggable({inertia:!1,autoScroll:!1,enabled:!!p||v,modifiers:[S.modifiers.restrict({restriction:"parent"})],lockAxis:"row"===a?"x":"y",onstart:n=>{n.stopPropagation(),e=0,t=0,o=s.current.parentElement.getBoundingClientRect(),r=s.current.previousElementSibling,g=r.getBoundingClientRect(),h=r.style.width,f=r.style.height,y=ho(r),m=s.current.nextElementSibling,I=m.getBoundingClientRect(),w=m.style.width,b=m.style.height,x=ho(m)},onmove:o=>{o.stopPropagation(),e+=o.dx,t+=o.dy;const{x:n,y:i}=yo(g,I,a,e,t,c),l=c?-1:1;"row"===a?(r.style.width=`calc(${y}% + ${n*l}px)`,m.style.width=`calc(${x}% - ${n*l}px)`):(r.style.height=`calc(${y}% + ${i}px)`,m.style.height=`calc(${x}% - ${i}px)`)},onend:n=>{n.stopPropagation(),e+=n.dx,t+=n.dy;const{x:s,y:d}=yo(g,I,a,e,t,c),u=c?-1:1;r.style.width=h,m.style.width=w,r.style.height=f,m.style.height=b,l(i,Math.round(s*u*1e4/o.width)/100,Math.round(1e4*d/o.height)/100)}}))}),()=>{var e;null===(e=d.current)||void 0===e||e.unset(),d.current=null}}),n.React.useEffect(()=>{null!=d.current&&u.current(s.current).draggable(!!p||v)},[v,p]),(0,g.jsx)("div",{ref:s,css:f,className:"grid-split flex-shrink-0",children:(0,g.jsx)("div",{className:(0,n.classNames)("handler",{"horizontal-splitter":"row"===a,"vertical-splitter":"col"===a})})})}function mo(e){const{layout:t,layoutItemId:o,isLast:i,className:a,isInTab:r=!1}=e,l=n.React.useMemo(()=>so(t,o),[t,o]),s=n.React.useMemo(()=>{if(l.parent){return so(t,l.parent).gridType}return null},[t,l]),d=+l.bbox.width,u=n.React.useCallback(()=>s===n.GridItemType.Row?n.css`
        height: 100%;
        width: ${d}%;
      `:s===n.GridItemType.Column?n.css`
        width: 100%;
        height: ${d}%;
      `:n.css`
      width: 100%;
      height: 100%;
    `,[d,s]);return l.gridType===n.GridItemType.Row?(0,g.jsx)(Io,{className:a,css:u(),layout:t,layoutItemId:o,items:l.children}):l.gridType===n.GridItemType.Column?(0,g.jsx)(xo,{className:a,css:u(),layout:t,layoutItemId:o,items:l.children}):l.gridType===n.GridItemType.Tab?(0,g.jsx)(wo,{className:a,css:u(),layout:t,layoutItemId:o,items:l.children}):(0,g.jsx)(go,{css:u(),className:(0,n.classNames)(`d-flex ${a}`,{"is-last":i}),layoutId:t.id,layoutItemId:o,isInTab:r})}function Io(e){const{layout:t,layoutItemId:o,items:i,className:a}=e,r=n.React.useRef(void 0);n.hooks.useEffectOnce(()=>{n.moduleLoader.loadModule("jimu-for-builder").then(e=>{r.current=e.getAppConfigAction})});const l=n.hooks.useEventCallback((e,o)=>{const n=r.current(),a=i.indexOf(e),l=i[a+1],s=t.content[e],d=t.content[l];n.editLayoutItemProperty({layoutId:t.id,layoutItemId:e},"bbox",{width:+s.bbox.width+o}).editLayoutItemProperty({layoutId:t.id,layoutItemId:l},"bbox",{width:+d.bbox.width-o}).exec()});return(0,g.jsx)("div",{className:`d-flex ${a}`,css:n.css`
        .is-last {
          width: auto;
          flex-grow: 1;
          flex-shrink: 1;
          flex-basis: 0;
        }
      `,"data-layoutid":t.id,"data-layoutitemid":o,children:i.map((e,o)=>{return a=e,r=o===i.length-1,(0,g.jsxs)(n.React.Fragment,{children:[(0,g.jsx)(mo,{layout:t,layoutItemId:a},a),!r&&(0,g.jsx)(fo,{referenceItemId:a,layoutId:t.id,direction:"row",onResizeEnd:l})]},a);var a,r})})}function xo(e){const{layout:t,layoutItemId:o,items:i,className:a}=e,r=n.React.useRef(void 0);n.hooks.useEffectOnce(()=>{n.moduleLoader.loadModule("jimu-for-builder").then(e=>{r.current=e.getAppConfigAction})});const l=n.hooks.useEventCallback((e,o,n)=>{const a=r.current(),l=i.indexOf(e),s=i[l+1],d=t.content[e],u=t.content[s];a.editLayoutItemProperty({layoutId:t.id,layoutItemId:e},"bbox",{width:+d.bbox.width+n}).editLayoutItemProperty({layoutId:t.id,layoutItemId:s},"bbox",{width:+u.bbox.width-n}).exec()});return(0,g.jsx)("div",{className:`d-flex flex-column ${a}`,css:n.css`
        .is-last {
          height: auto;
          flex-grow: 1;
          flex-shrink: 1;
          flex-basis: 0;
        }
      `,"data-layoutid":t.id,"data-layoutitemid":o,children:i.map((e,o)=>{return a=e,r=o===i.length-1,(0,g.jsxs)(n.React.Fragment,{children:[(0,g.jsx)(mo,{layout:t,layoutItemId:a},a),!r&&(0,g.jsx)(fo,{referenceItemId:a,layoutId:t.id,direction:"col",onResizeEnd:l})]},a);var a,r})})}function wo(e){const{layout:t,layoutItemId:o,items:i,className:a}=e,r=n.hooks.useTranslation(v.defaultMessages),l=t.setting,s=(null==l?void 0:l.hasItemHeader)||!1,d=(null==l?void 0:l.itemHeaderBackground)||"var(--sys-color-primary-main)",u=(null==l?void 0:l.itemHeaderForeground)||"var(--sys-color-primary-text)",c=e=>function(e,t,o){var i,a,r,l,s,d,u;const{layoutId:c,layoutItemId:p}=t,g=e.layouts[c].content[p];if((null==g?void 0:g.type)===n.LayoutItemType.Widget){const t=e.widgets[g.widgetId];return t?null!==(a=null!==(i=null==t?void 0:t.label)&&void 0!==i?i:g.label)&&void 0!==a?a:g.id:o("placeholder")}if((null==g?void 0:g.type)===n.LayoutItemType.Section)return e.sections[g.sectionId].label;return(null==g?void 0:g.gridType)===n.GridItemType.Row?null!==(r=g.label)&&void 0!==r?r:o("gridRow"):(null==g?void 0:g.gridType)===n.GridItemType.Column?null!==(l=g.label)&&void 0!==l?l:o("gridCol"):(null==g?void 0:g.gridType)===n.GridItemType.Tab?null!==(s=g.label)&&void 0!==s?s:o("tabs"):null!==(u=null!==(d=null==g?void 0:g.label)&&void 0!==d?d:null==g?void 0:g.id)&&void 0!==u?u:""}((0,n.getAppStore)().getState().appConfig,{layoutId:t.id,layoutItemId:e},r),p=s?n.css`
    .nav-link.grid-tab {
      border: none;
      border-top-left-radius: var(--sys-shape-2);
      border-top-right-radius: var(--sys-shape-2);
      border-bottom-left-radius: 0 !important;
      border-bottom-right-radius: 0 !important;
    }
    .nav-link.grid-tab.active {
      background: ${d};
      font-size: var(--sys-typography-label1-font-size);
      font-weight: var(--sys-typography-label1-font-weight);
      line-height: var(--sys-typography-label1-line-height);
      color: ${u};
    }
  `:n.css`
      .nav-link.grid-tab { border: none; }
    `;return(0,g.jsx)("div",{className:a,"data-layoutid":t.id,"data-layoutitemid":o,children:(0,g.jsx)(v.Tabs,{type:"tabs",fill:!0,scrollable:!0,className:"w-100 h-100",css:n.css`
          & > .tab-content {
            overflow: hidden;
          }
        `,children:[...i].map((e,o)=>((e,o)=>(0,g.jsx)(v.Tab,{id:`${o}`,innerClassName:"grid-tab",title:c(e),css:p,children:(0,g.jsx)(mo,{layout:t,layoutItemId:e,isInTab:!0})},o))(e,o))})})}class bo extends n.React.PureComponent{findExtension(){const e=n.ExtensionManager.getInstance().getExtensions(`${n.extensionSpec.ExtensionPoints.LayoutTransformer}`);if((null==e?void 0:e.length)>0){const t=e.find(e=>e.layoutType===n.LayoutType.GridLayout);this.layoutTransform=null==t?void 0:t.transformLayout}}render(){var e,t;const{layouts:o,layout:i,browserSizeMode:a,mainSizeMode:r,className:l}=this.props;let s=i;o[a]!==i.id&&(null==this.layoutTransform&&this.findExtension(),null!=this.layoutTransform&&(s=this.layoutTransform(i,r,a)));const{rootItem:d}=null!==(e=s.setting)&&void 0!==e?e:{},u=null===(t=s.content)||void 0===t?void 0:t[d],c=(0,n.classNames)("layout grid-layout d-flex w-100 h-100",l);return(0,g.jsx)("div",{className:c,css:n.css`overflow: hidden;${uo(s.setting)}`,"data-layoutid":s.id,children:(0,g.jsx)("div",{"data-layoutid":s.id,className:"trail-container d-flex w-100 h-100",css:n.css`
            width: 100%;
          `,children:u?(0,g.jsx)(mo,{className:"w-100 h-100",layout:s,layoutItemId:d}):this.props.children})})}}const So=n.ReactRedux.connect(ce)(bo);var Co=d(9465),Ro=d.n(Co);function To(e){var t,o;const{layoutId:i,layoutItemId:a}=e,r=n.ReactRedux.useSelector(e=>{var t,o;const r=e.appConfig.layouts[i].content[a];if(!r)return"";if(r.type===n.LayoutItemType.Widget){const o=r.widgetId,n=e.appConfig.widgets[o];return null!==(t=null==n?void 0:n.label)&&void 0!==t?t:""}const l=r.sectionId,s=e.appConfig.sections[l];return null!==(o=null==s?void 0:s.label)&&void 0!==o?o:""}),l=n.ReactRedux.useSelector(e=>{var t,o,r,l;const s=e.appConfig.layouts[i].content[a];if(!s)return"";if(s.type===n.LayoutItemType.Widget){const n=s.widgetId,i=e.appConfig.widgets[n];return"string"==typeof(null==i?void 0:i.icon)?i.icon:null!==(o=null===(t=null==i?void 0:i.icon)||void 0===t?void 0:t.svg)&&void 0!==o?o:""}const d=s.sectionId,u=e.appConfig.sections[d];return"string"==typeof(null==u?void 0:u.icon)?u.icon:null!==(l=null===(r=null==u?void 0:u.icon)||void 0===r?void 0:r.svg)&&void 0!==l?l:Ro()}),s=n.ReactRedux.useSelector(e=>{var t,o;const n=e.appConfig.layouts[i].parent.id;return null===(o=null===(t=e.appConfig.widgets[n].config)||void 0===t?void 0:t.header)||void 0===o?void 0:o.showWidgetIcon}),d=n.ReactRedux.useSelector(e=>{var t,o;const n=e.appConfig.layouts[i].parent.id;return null===(o=null===(t=e.appConfig.widgets[n].config)||void 0===t?void 0:t.header)||void 0===o?void 0:o.widgetIconSize}),u=n.ReactRedux.useSelector(e=>{var t,o;const n=e.appConfig.layouts[i].parent.id;return null===(o=null===(t=e.appConfig.widgets[n].config)||void 0===t?void 0:t.header)||void 0===o?void 0:o.widgetIconColor}),c=n.ReactRedux.useSelector(e=>{var t,o;const n=e.appConfig.layouts[i].parent.id;return null===(o=null===(t=e.appConfig.widgets[n].config)||void 0===t?void 0:t.header)||void 0===o?void 0:o.textStyle});return(0,g.jsx)("div",{className:"label d-flex align-items-center h-100",children:(0,g.jsxs)(n.React.Fragment,{children:[s&&(0,g.jsx)(v.Icon,{className:"flex-shrink-0",icon:l,size:null!=d?d:16,color:u}),(0,g.jsx)("div",{className:"ml-2",css:n.css`
            font-size: ${null!==(t=null==c?void 0:c.size)&&void 0!==t?t:"1rem"};
            font-weight: ${(null==c?void 0:c.bold)?"bold":"normal"};
            font-style: ${(null==c?void 0:c.italic)?"italic":"normal"};
            text-decoration: ${(null==c?void 0:c.underline)?"underline":""} ${(null==c?void 0:c.strike)?"line-through":""};
            color: ${null!==(o=null==c?void 0:c.color)&&void 0!==o?o:"inherit"};
          `,children:r})]})})}const jo=(e,t,o,i)=>{const a=null!=o?o:{},r=null!=i?i:{},{padding:l,expandedColor:s,collapsedColor:d,border:u,borderLeft:c,borderRight:p,borderTop:g,borderBottom:y,borderRadius:h}=a,{padding:f,border:m,borderRadius:I,backgroundColor:x,textColor:w}=r;return n.css`
  position: relative;
  & + .foldable-panel {
    margin-top: ${t}px;
  }
  .panel-header {
    padding: ${v.styleUtils.toCSSPadding(l)};
    border: ${v.styleUtils.toCSSBorder(u)};
    border-left: ${v.styleUtils.toCSSBorder(c)};
    border-right: ${v.styleUtils.toCSSBorder(p)};
    border-top: ${v.styleUtils.toCSSBorder(g)};
    border-bottom: ${v.styleUtils.toCSSBorder(y)};
    border-radius: ${v.styleUtils.toCSSBorderRadius(h)};
    background-color: ${null!=s?s:"var(--sys-color-primary-main)"};
    .tool-drag-handler {
      cursor: pointer;
      flex-grow: 1;
      flex-shrink: 1;
      max-width: calc(100% - 32px);
    }
  }
  .panel-content {
    padding: ${v.styleUtils.toCSSPadding(f)};
    border: ${v.styleUtils.toCSSBorder(m)};
    border-left: ${v.styleUtils.toCSSBorder(r.borderLeft)};
    border-right: ${v.styleUtils.toCSSBorder(r.borderRight)};
    border-top: ${v.styleUtils.toCSSBorder(r.borderTop)};
    border-bottom: ${v.styleUtils.toCSSBorder(r.borderBottom)};
    border-radius: ${v.styleUtils.toCSSBorderRadius(I)};
    overflow: auto;
    background-color: ${null!=x?x:"none"};
    color: ${null!=w?w:"none"};
    position: relative;
    height: ${e};
    opacity: 1;
    transition: opacity 400ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
  &.collapsed {
    .panel-header {
      background-color: ${null!=d?d:"var(--sys-color-primary-main)"};
    }
    .panel-content {
      height: 0;
      border: none;
      padding-top: unset;
      padding-bottom: unset;
      overflow: hidden;
      visibility: hidden;
      .layout-item-content {
        visibility: hidden;
      }
    }
  }
  `};function Mo(e){var t,o,i,a,r,l,s,d,u,c,p;const{layoutId:y,layoutItemId:h,expanded:f,height:m,gap:I,onExpandedChange:x}=e,w=n.hooks.useTranslation(),b=n.ReactRedux.useSelector(e=>S(e.appConfig,{layoutId:y,layoutItemId:h})),C=n.ReactRedux.useSelector(e=>{var t,o;if(b.type===n.LayoutItemType.Widget){const o=b.widgetId,n=e.appConfig.widgets[o];return null!==(t=null==n?void 0:n.label)&&void 0!==t?t:""}const i=b.sectionId,a=e.appConfig.sections[i];return null!==(o=null==a?void 0:a.label)&&void 0!==o?o:""}),R=n.ReactRedux.useSelector(e=>{var t;const o=e.appConfig.layouts[y].parent.id;return null===(t=e.appConfig.widgets[o].config)||void 0===t?void 0:t.header}),T=n.ReactRedux.useSelector(e=>{var t;const o=e.appConfig.layouts[y].parent.id;return null===(t=e.appConfig.widgets[o].config)||void 0===t?void 0:t.panel}),j=n.ReactRedux.useSelector(e=>b.type===n.LayoutItemType.Widget&&ye(b.widgetId,e.appConfig)),M=null!==(t=null==R?void 0:R.togglePosition)&&void 0!==t?t:"right",P=n.React.useCallback(()=>{x(h,!f)},[h,f,x]),$=f?null===(o=null==R?void 0:R.collapseIcon)||void 0===o?void 0:o.svg:null===(i=null==R?void 0:R.expandIcon)||void 0===i?void 0:i.svg;return(0,g.jsx)("div",{className:(0,n.classNames)("layout-item foldable-panel",{collapsed:!f,"functional-widget":j}),"data-layoutid":y,"data-layoutitemid":h,css:jo(m,I,R,T),children:(0,g.jsxs)("div",{className:"panel d-flex flex-column",children:[(0,g.jsxs)("div",{className:(0,n.classNames)("panel-header d-flex align-items-center",{"flex-row-reverse":"left"===M}),onClick:P,onKeyDown:null,role:"group","aria-label":C,children:[(0,g.jsx)("div",{className:"tool-drag-handler",children:y&&h&&(0,g.jsx)(To,{layoutId:y,layoutItemId:h})}),$&&(0,g.jsx)("div",{className:(0,n.classNames)("actions",{"ml-auto":"right"===M}),children:(0,g.jsx)(v.Button,{icon:!0,type:"tertiary",size:"sm","aria-expanded":f,title:w(f?"clickToHide":"clickToShow"),"aria-label":w(f?"clickToHide":"clickToShow"),children:(0,g.jsx)(v.Icon,{icon:$,size:f?null===(r=null===(a=null==R?void 0:R.collapseIcon)||void 0===a?void 0:a.properties)||void 0===r?void 0:r.size:null===(s=null===(l=null==R?void 0:R.expandIcon)||void 0===l?void 0:l.properties)||void 0===s?void 0:s.size,color:f?null===(u=null===(d=null==R?void 0:R.collapseIcon)||void 0===d?void 0:d.properties)||void 0===u?void 0:u.color:null===(p=null===(c=null==R?void 0:R.expandIcon)||void 0===c?void 0:c.properties)||void 0===p?void 0:p.color})})})]}),(0,g.jsx)("div",{className:(0,n.classNames)("panel-content d-flex flex-grow-1 flex-shrink-1"),children:e.children})]})})}function Po(e){var t,o,i,a;const{layoutId:r,layoutItem:l,layoutItemId:s,expanded:d,gap:u,onExpandedChange:c}=e,p=(null==l?void 0:l.type)===n.LayoutItemType.Widget,v=(null==l?void 0:l.type)===n.LayoutItemType.Section,y=n.ReactRedux.useSelector(t=>ge(t,e),n.ReactRedux.shallowEqual),h=n.ReactRedux.useSelector(e=>{if(v)return Ve(e,l.sectionId)},n.ReactRedux.shallowEqual);let f;f=(null===(o=null===(t=l.setting)||void 0===t?void 0:t.autoProps)||void 0===o?void 0:o.height)===b.Auto?"auto":l.bbox.height;const m=Ne(null!==(i=l.setting)&&void 0!==i?i:{}),I=we(null===(a=l.setting)||void 0===a?void 0:a.aspectRatio);return(0,g.jsxs)(Mo,{layoutId:r,layoutItemId:s,height:f,expanded:d,gap:u,onExpandedChange:c,children:[p&&(0,g.jsx)(at,Object.assign({layoutId:r,layoutItemId:s,forceAspectRatio:m,aspectRatio:I},y)),v&&(0,g.jsx)(kt,Object.assign({layoutId:r,layoutItemId:s},h))]})}var $o=d(4113),Lo=d.n($o),Oo=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o};const ko=e=>{const t=window.SVG,{className:o}=e,i=Oo(e,["className"]),a=(0,n.classNames)("jimu-icon jimu-icon-component",o);return t?(0,g.jsx)(t,Object.assign({className:a,src:Lo()},i)):(0,g.jsx)("svg",Object.assign({className:a},i))};var Eo=d(3424),Ao=d.n(Eo),zo=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o};const No=e=>{const t=window.SVG,{className:o}=e,i=zo(e,["className"]),a=(0,n.classNames)("jimu-icon jimu-icon-component",o);return t?(0,g.jsx)(t,Object.assign({className:a,src:Ao()},i)):(0,g.jsx)("svg",Object.assign({className:a},i))},Bo=n.css`
  // position: sticky;
  // top: 0;
  margin-bottom: 4px;
  z-index: 1;
`;function Fo(e){const{onExpandAll:t,onCollapseAll:o}=e,i=n.hooks.useTranslation();return(0,g.jsxs)("div",{css:Bo,className:"d-flex align-items-center justify-content-end",children:[(0,g.jsx)(v.Tooltip,{title:i("expandAll"),children:(0,g.jsx)(v.Button,{variant:"text",color:"inherit",icon:!0,size:"sm",onClick:t,children:(0,g.jsx)(No,{})})}),(0,g.jsx)(v.Tooltip,{title:i("collapseAll"),children:(0,g.jsx)(v.Button,{variant:"text",color:"inherit",icon:!0,size:"sm",onClick:o,className:"ml-1",children:(0,g.jsx)(ko,{})})})]})}function Ho(e,t){const o=e[t.browserSizeMode]||e[t.appConfig.mainSizeMode],n=t.appConfig.layouts[o].parent.id;return t.appConfig.widgets[n]}class Wo extends n.React.PureComponent{constructor(e){super(e),this.handleExpandedChange=(e,t)=>{if(t)this.props.singleMode?this.setState({expandedItems:[e]}):this.state.expandedItems.includes(e)||this.setState({expandedItems:[...this.state.expandedItems,e]});else if(this.state.expandedItems.includes(e)){const t=this.state.expandedItems.filter(t=>t!==e);this.setState({expandedItems:t})}},this.expandAll=()=>{const{layout:e}=this.props;this.setState({expandedItems:[...e.order]})},this.collapseAll=()=>{this.setState({expandedItems:[]})};const t=this.props.expandByDefault.length>0?this.props.expandByDefault.split(","):[];this.state={expandedItems:t}}createItem(e){const{layout:t,gap:o}=this.props;return t.content[e].isPending?null:(0,g.jsx)(Po,{layoutId:t.id,layoutItemId:e,expanded:this.state.expandedItems.includes(e),gap:o,layoutItem:t.content[e],onExpandedChange:this.handleExpandedChange},e)}render(){var e;const{layout:t,className:o,showToggleAll:i,padding:a,singleMode:r}=this.props,l=null!==(e=t.order)&&void 0!==e?e:[];return(0,g.jsxs)("div",{className:(0,n.classNames)("layout foldable-layout w-100 d-flex flex-column",o),css:n.css`position: relative; overflow: auto; padding: ${v.styleUtils.toCSSPadding(a)}`,"data-layoutid":t.id,children:[i&&!r&&(0,g.jsx)(Fo,{onExpandAll:this.expandAll,onCollapseAll:this.collapseAll}),l.map(e=>this.createItem(e))]})}}const Vo=(0,n.createSelector)([(e,t)=>ce(e,t),(e,t)=>{var o,n;return null!==(n=null===(o=Ho(t.layouts,e).config)||void 0===o?void 0:o.singleMode)&&void 0!==n&&n},(e,t)=>{var o,n;return null!==(n=null===(o=Ho(t.layouts,e).config)||void 0===o?void 0:o.showToggleAll)&&void 0!==n&&n},(e,t)=>{var o,n;return null!==(n=null===(o=Ho(t.layouts,e).config)||void 0===o?void 0:o.gap)&&void 0!==n?n:4},(e,t)=>{var o;return null===(o=Ho(t.layouts,e).config)||void 0===o?void 0:o.padding},(e,t)=>{var o,n,i;const a=t.layouts[e.browserSizeMode]||t.layouts[e.appConfig.mainSizeMode],r=e.appConfig.layouts[a],l=null!==(n=null===(o=Ho(t.layouts,e).config)||void 0===o?void 0:o.expandedItems)&&void 0!==n?n:[],s=[];return l.length>0&&Object.keys(null!==(i=r.content)&&void 0!==i?i:{}).forEach(e=>{const t=r.content[e];l.includes(t.widgetId)&&s.push(e)}),s.join(",")}],(e,t,o,n,i,a)=>Object.assign({singleMode:t,showToggleAll:o,gap:n,padding:i,expandByDefault:a},e)),Do=n.ReactRedux.connect(Vo)(Wo),Go={min:16,space:10};class Uo extends n.React.PureComponent{isStretchInCrossAxis(){const{layoutItem:e}=this.props;return function(e){var t,o,n;return(null!==(n=null===(o=null===(t=e.setting)||void 0===t?void 0:t.autoProps)||void 0===o?void 0:o.height)&&void 0!==n?n:b.Stretch)===b.Stretch}(e)}calWidth(e,t){return function(e,t){var o,n;return(null===(o=e.autoProps)||void 0===o?void 0:o.width)===b.Auto||"ratio"===e.widthMode?"ratio"===e.widthMode?{width:"auto",flex:"0 0 auto"}:{width:"auto"}:(null===(n=e.autoProps)||void 0===n?void 0:n.width)===b.Stretch||"fit"===e.widthMode?{flex:"1 1 auto"}:{width:t.width,flexShrink:0}}(e,t)}getStyle(e,t,o,i){const{layoutItem:a}=this.props,r=a.bbox||{},l=this.calWidth(e,r);return l.height=t||o||i?"auto":r.height,function(e,t,o){var i,a,r;const l=(null===(i=t.autoProps)||void 0===i?void 0:i.width)===b.Auto;return n.css`
    align-self: ${o?"stretch":null!==(r=null===(a=t.style)||void 0===a?void 0:a.alignSelf)&&void 0!==r?r:"flex-start"};
    width: ${se(e,"width")};
    height: ${se(e,"height")};
    flex: ${e.flex};
    flex-shrink: ${e.flexShrink};
    min-width: ${l?"unset":null};
  `}(l,e,t&&!o)}render(){var e,t,o,i;const{layoutId:a,layoutItem:r}=this.props;if(!r||r.isPending)return null;const l=r.setting||{},s=null!==(t=null===(e=l.autoProps)||void 0===e?void 0:e.width)&&void 0!==t?t:b.Custom,d=(null===(o=l.autoProps)||void 0===o?void 0:o.height)===b.Auto,u=(null===(i=l.autoProps)||void 0===i?void 0:i.width)===b.Auto,c=(0,n.classNames)("flex-row-layout-item",{"d-flex":s!==b.Auto}),p=this.isStretchInCrossAxis(),v=Ne(l),y=we(l.aspectRatio);return(0,g.jsx)(Nt,{css:this.getStyle(l,p,v,d),layoutId:a,layoutItemId:r.id,className:c,forceAspectRatio:v,aspectRatio:y,autoWidth:u,autoHeight:d})}}const _o=e=>n.css`
  height: 100%;
  overflow: hidden;
  justify-content: ${e.justifyContent};
  & > div.flex-row-layout-item ~ div.flex-row-layout-item {
    margin-left: ${e.space}px;
  }
`;class Xo extends n.React.PureComponent{createItem(e,t){const{layout:o}=this.props;return(0,g.jsx)(Uo,{index:t,layoutId:o.id,layoutItemId:e,layoutItem:o.content[e]},e)}isEmpty(){var e;const{layout:t}=this.props,o=null!==(e=t.order)&&void 0!==e?e:[];return!(o.length>0&&o.some(e=>!t.content[e].isPending))}render(){var e;const{layout:t,className:o}=this.props,i=null!==(e=t.order)&&void 0!==e?e:[],a=Object.assign({},Go,t.setting),r=this.isEmpty(),l={position:"relative",minWidth:a.min},s=(0,n.classNames)("layout flex-row-layout",o);return(0,g.jsx)("div",{className:s,style:l,"data-layoutid":t.id,children:(0,g.jsx)("div",{className:"trail-container d-flex w-100",css:n.css`
            position: ${r?"absolute":null};
            padding: ${v.styleUtils.toCSSPadding(a.padding)};
            ${_o(a)};
          `,children:i.map((e,t)=>this.createItem(e,t))})})}}const Jo=n.ReactRedux.connect(ce)(Xo);var Yo=d(2686);const Ko=(0,Ke.styled)("div")({position:"absolute",zIndex:1e5,height:"54px",left:"-1000px","&:focus-within":{left:0},ul:{margin:"2px",padding:0,paddingLeft:"2px",paddingTop:"2px",backgroundColor:"var(--sys-color-primary-main)",color:"var(--sys-color-primary-text)","&:focus-within":{outline:"2px solid var(--sys-color-primary-text)",outlineOffset:"-2px"},li:{listStyle:"none",display:"block",position:"absolute",left:"-1000px",padding:"0 20px",textDecoration:"none",h6:{padding:"15px"},"&:focus":{position:"static",left:"auto",outline:"none !important"}}}});function qo(){const e=n.ReactRedux.useSelector(e=>e.appConfig),t=n.ReactRedux.useSelector(e=>e.browserSizeMode),o=n.ReactRedux.useSelector(e=>{var o,i;return(null===(o=e.appConfig.header)||void 0===o?void 0:o.layout[t])||(null===(i=e.appConfig.header)||void 0===i?void 0:i.layout[n.BrowserSizeMode.Large])}),i=n.ReactRedux.useSelector(e=>{var o,i;return(null===(o=e.appConfig.footer)||void 0===o?void 0:o.layout[t])||(null===(i=e.appConfig.footer)||void 0===i?void 0:i.layout[n.BrowserSizeMode.Large])}),a=n.ReactRedux.useSelector(e=>e.appConfig.widgets),r=n.ReactRedux.useSelector(e=>e.appConfig.sections),l=n.ReactRedux.useSelector(e=>e.appConfig.screenGroups),s=n.ReactRedux.useSelector(e=>e.appRuntimeInfo.currentPageId),d=n.hooks.useTranslation(n.defaultMessages),[u,c]=n.React.useState(null);n.React.useEffect(()=>{var o;if(!(null===(o=null==e?void 0:e.pages)||void 0===o?void 0:o[s]))return void c(null);const i=e.pages[s].layout[t]||e.pages[s].layout[n.BrowserSizeMode.Large];let a=null,r=!1;const l=()=>{if(r)return;const o=document.querySelector(`[data-layoutid="${i}"]`);!o||o.querySelector(".widget-content:not(.d-none):empty")?a=window.setTimeout(l,100):c({pageId:s,browserSizeMode:t,linkToIds:(0,n.getPageSkipToIds)(e,t,s)})};return l(),()=>{r=!0,null!=a&&window.clearTimeout(a)}},[e,t,s]);const p=(null==u?void 0:u.pageId)===s&&(null==u?void 0:u.browserSizeMode)===t?u.linkToIds:null,y=e=>{var t,n,u;let c;return c=e===s?d("a11yMainContent"):e===o?d("header"):e===i?d("footer"):(null===(t=a[e])||void 0===t?void 0:t.label)||(null===(n=r[e])||void 0===n?void 0:n.label)||(null===(u=l[e])||void 0===u?void 0:u.label),c};return(0,g.jsx)(Ko,{className:"jimu-skip-to-container",children:(0,g.jsx)("ul",{className:n.INTERACTIVE_CLASS,"aria-label":d("a11ySkipTo"),children:null==p?void 0:p.map((e,t)=>(0,g.jsx)("li",{className:"jimu-outline-inside",tabIndex:0,onKeyDown:t=>{((e,t)=>{var o,i,a;if("Enter"===e.key||" "===e.key){e.preventDefault();const r=t.startsWith("page_")?t:n.WIDGET_PREFIX_FOR_A11Y_SKIP+t;let l=document.getElementById(r);if(!l){const e=null===(o=Yo.MapViewManager.getInstance())||void 0===o?void 0:o.getJimuMapViewGroup(t);if(e){const t=e.getActiveJimuMapView(),o=null===(i=null==t?void 0:t.mapComponent)||void 0===i?void 0:i.shadowRoot;l=null===(a=null==o?void 0:o.getElementById)||void 0===a?void 0:a.call(o,r)}}null==l||l.focus()}})(t,e)},children:(0,g.jsx)(v.Typography,{variant:"title2",children:d("a11ySkipToContent",{content:y(e)})})},t))})})}class Zo{constructor(){this.id="flow-layout-transformer",this.layoutType=n.LayoutType.FlowLayout}transformLayout(e,t,o){if(t!==o&&o===n.BrowserSizeMode.Small){let t=(0,n.Immutable)(e);return(e.order||[]).forEach(e=>{t=t.setIn(["content",e,"setting","heightMode"],"auto")}),t}return e}transformLayoutItem(e,t,o,n,i,a){return{index:t,item:e}}}function Qo(e,t,o){var n;const i=E(e,o),a=function(e,t,o){var n,i,a,r,l,s,d;const u=e.widgets[o];if(null!=u){const c=Re(),p=e.mainSizeMode,g=u.layouts.DEFAULT[c],v=u.layouts.DEFAULT[p],y=be(null!==(l=null===(r=null===(a=null===(i=(null!==(n=e.layouts[g])&&void 0!==n?n:e.layouts[v]).setting)||void 0===i?void 0:i.style)||void 0===a?void 0:a.padding)||void 0===r?void 0:r.number)&&void 0!==l?l:[0]),h=null!==(d=null===(s=null==t?void 0:t[o])||void 0===s?void 0:s.height)&&void 0!==d?d:0;let f=y[0],m=y[2];return re(f)&&(f=ue(f,h)),re(m)&&(m=ue(m,h)),h-f-m}return 0}(e,t,i);if(a>0){const t=null!==(n=e.layouts[o].order)&&void 0!==n?n:[],i={};return t.forEach(t=>{const n=e.layouts[o].content[t];i[t]=Se(a,n)}),i}return null}class en{constructor(){this.id="row-layout-transformer",this.layoutType=n.LayoutType.RowLayout}transformLayout(e,t,o,i){var a,r;if(t===o)return e;let l=(0,n.Immutable)(e);if(o===n.BrowserSizeMode.Small){const t=Qo(i,null===(a=window.runtimeInfo)||void 0===a?void 0:a.widgets,e.id);let o=0;Object.keys(null!==(r=e.content)&&void 0!==r?r:{}).sort((t,o)=>parseInt(e.content[t].bbox.left,10)-parseInt(e.content[o].bbox.left,10)).forEach(i=>{var a,r,s;const d=e.content[i];if(!d.isPending){if(l=l.setIn(["content",i,"bbox"],{left:o*Kt,width:Kt,height:null!==(r=null===(a=d.bbox)||void 0===a?void 0:a.height)&&void 0!==r?r:"auto"}),null!=t){const e=null!==(s=d.setting)&&void 0!==s?s:(0,n.Immutable)({});l=l.setIn(["content",i,"bbox","height"],t[i].height).setIn(["content",i,"setting"],e.merge(t[i].setting))}o+=1}})}return l}transformLayoutItem(e,t,o,n,i,a){return{item:e,index:t}}}var tn=d(1496);class on{constructor(){this.id="grid-layout-transformer",this.layoutType=n.LayoutType.GridLayout,this.transformLayout=(e,t,o)=>{var i,a,r;if(t!==o&&o===n.BrowserSizeMode.Small){let t=(0,n.Immutable)(e);const o=null===(i=e.setting)||void 0===i?void 0:i.rootItem,l=null===(a=e.setting)||void 0===a?void 0:a.mainItemId;if(o&&(null===(r=e.content)||void 0===r?void 0:r[o])){const i=[],a=e.content[o];if(l){let r;if(Object.keys(e.content).some(t=>{const o=e.content[t];return(o.widgetId===l||o.sectionId===l)&&(r=t,!0)}),r){if(t=this.collectItem(e,o,r,a.children,i),(null==i?void 0:i.length)>0){const a=`${tn.utils.getMaximumId(e)+1}`,l={id:a,bbox:{width:50},gridType:n.GridItemType.Tab,children:i,parent:o};t=t.setIn(["content",a],l),i.forEach(e=>{t=t.setIn(["content",e,"parent"],a)}),t=t.setIn(["content",o,"gridType"],n.GridItemType.Column),t=t.setIn(["content",o,"children"],[r,a]),t=t.setIn(["content",r,"parent"],o).setIn(["content",r,"bbox","width"],50)}return t}}t=this.collectItem(e,o,null,a.children,i),i.length>0&&(t=t.setIn(["content",o,"gridType"],n.GridItemType.Tab),t=t.setIn(["content",o,"children"],i))}return t}return e},this.collectItem=(e,t,o,i,a)=>{let r=e;return null==i||i.forEach(i=>{var l;if(!e.content[i].isPending&&i!==o){const s=e.content[i];s.gridType!==n.GridItemType.Column&&s.gridType!==n.GridItemType.Row&&s.gridType!==n.GridItemType.Tab?(a.push(i),o||(r=r.setIn(["content",i,"parent"],t))):(null===(l=s.children)||void 0===l?void 0:l.length)>0&&(r=this.collectItem(r,t,o,s.children,a))}}),r}}transformLayoutItem(e,t,o,n,i,a){return{index:t,item:e}}}const nn={gutter:0,style:{padding:{number:[0],unit:"px"},justifyContent:"flex-start",alignItems:"stretch",borderRadius:{number:[0],unit:v.DistanceUnits.PIXEL}}},an={lockParent:!0,heightMode:"auto",offsetX:0,offsetY:0},rn=(0,n.createSelector)([(e,t)=>{var o;const{layoutItem:n}=t,i=null===(o=e.appRuntimeInfo)||void 0===o?void 0:o.selection;return!!i&&(i.layoutId===t.layoutId&&i.layoutItemId===n.id)},(e,t)=>{var o,i,a;const{layoutItem:r}=t;let l=[0,0,0,0];if(r.type===n.LayoutItemType.Widget){const t=r.widgetId,n=e.appConfig.widgets[t];n&&(l=v.styleUtils.expandStyleArray(null===(a=null===(i=null===(o=n.config)||void 0===o?void 0:o.style)||void 0===i?void 0:i.padding)||void 0===a?void 0:a.number))}return l[0]+l[2]},(e,t)=>{const{layoutItem:o}=t;let i=!0;if(o.type===n.LayoutItemType.Widget){const t=o.widgetId,n=e.appConfig.widgets[t];if(n){const t=Object.keys(n.layouts)[0],o=W(n.layouts[t],e.browserSizeMode,e.appConfig.mainSizeMode),a=e.appConfig.layouts[o];a&&Object.keys(a.content||[]).length>0&&Object.keys(a.content||[]).some(e=>!a.content[e].isPending&&(i=!1,!0))}}return i}],(e,t,o)=>({selected:e,padding:t,isEmpty:o}));function ln(e){const t=parseFloat(null==e?void 0:e.width);return t>0?`${e.width}`.includes("px")?`${Math.round(t)}px`:`${Math.round(t)}%`:"100%"}class sn extends n.React.PureComponent{componentDidMount(){var e;const t=null!==(e=(0,n.getAppStore)().getState().queryObject)&&void 0!==e?e:{},{layoutId:o,layoutItem:i}=this.props,a=`${o}_block_${i.id}`;if(t.block_id===a){const e=document.getElementById(a);setTimeout(()=>{e.scrollIntoView({behavior:"smooth",block:"start"})},500)}}calHeight(e){const t=function(e,t){const o=se(e.bbox||{},"height");if(!o||re(o))return"auto";switch(t.heightMode){case"auto":return"auto";case"fixed":return o;default:return null}}(this.props.layoutItem,e);return this.autoHeight="auto"===t,t}getStyle(e){const{index:t,gutter:o}=this.props,i=xe()?-1:1;return[n.css`
        margin-top: ${t>0?`${o}px`:"unset"};
        width: ${ln(e)};
        height: ${this.calHeight(e)};
        flex-shrink: 0;
      `,e.offsetX||e.offsetY?`translate(${(e.offsetX||0)*i}px, ${e.offsetY||0}px)`:null]}render(){const{layoutId:e,layoutItem:t,parentRef:o,onClick:i,isEmpty:a}=this.props;if(!t||a)return null;const r=(0,n.classNames)("flow-layout-item","d-flex"),l=n.lodash.assign({},an,t.setting),[s,d]=this.getStyle(l);return(0,g.jsx)(Nt,{id:`${e}_block_${t.id}`,css:s,style:{transform:d},layoutId:e,layoutItemId:t.id,parentRef:o,onClick:i,className:r,autoHeight:this.autoHeight})}}const dn=n.ReactRedux.connect(rn)(sn);class un extends n.React.PureComponent{calculatePosition(){const{layoutItem:e}=this.props;return function(e,t={}){var o,i,a;const r=e.setting,l=null!==(o=null==r?void 0:r.floatingArea)&&void 0!==o?o:1,s=`${null!==(i=null==r?void 0:r.offsetX)&&void 0!==i?i:0}px`,d=`${null!==(a=null==r?void 0:r.offsetY)&&void 0!==a?a:0}px`,{dh:u,dw:c,initWidth:p,initHeight:g,isResizing:v}=t,y=xe()?`translateX(calc(50% + ${s}))`:`translateX(calc(-50% + ${s}))`,h={};switch(l){case 1:h.left=s,h.top=d,h.transform=null;break;case 2:h.left="50%",h.top=d,h.transform=y;break;case 3:h.right=s,h.top=d,h.transform=null;break;case 4:h.left=s,h.top="50%",h.transform=`translateY(calc(-50% + ${d}))`;break;case 5:h.left="50%",h.top="50%",h.transform=`${y} translateY(calc(-50% + ${d}))`;break;case 6:h.right=s,h.top="50%",h.transform=`translateY(calc(-50% + ${d}))`;break;case 7:h.left=s,h.bottom=d,h.transform=null;break;case 8:h.left="50%",h.bottom=d,h.transform=y;break;case 9:h.right=s,h.bottom=d,h.transform=null}return n.css`
    position: fixed;
    z-index: 1;
    width: ${v?`${p+c}px`:se(e.bbox,"width")};
    height: ${v?`${g+u}px`:se(e.bbox,"height")};
    left: ${h.left};
    right: ${h.right};
    top: ${h.top};
    bottom: ${h.bottom};
    transform: ${h.transform};
  `}(e)}render(){const{layoutId:e,layoutItem:t,onClick:o}=this.props;if(!t)return null;const i=(0,n.classNames)("flow-layout-item floating","d-flex");return(0,g.jsx)(Nt,{css:this.calculatePosition(),layoutId:e,layoutItemId:t.id,onClick:o,className:i})}}function cn(){const e=[0];for(let t=1;t<=100;t++)e.push(t/100);return e}function pn(e){switch(e){case n.ScreenTriggerType.Top:return"0% 0% -98% 0%";case n.ScreenTriggerType.Bottom:return"-98% 0% -2px 0%";case n.ScreenTriggerType.Upper:return`-${100/3-1}% 0% -${200/3-1}% 0%`;case n.ScreenTriggerType.Lower:return`-${200/3-1}% 0% -${100/3-1}% 0%`;default:return}}function gn(e,t,o,i){const a=n.React.useRef(void 0),r=n.React.useRef(void 0);n.React.useEffect(()=>{a.current&&(a.current.unobserve(e),a.current=null);if(e&&"function"==typeof IntersectionObserver){const n=new IntersectionObserver(e=>{(e=>{const t=e.boundingClientRect,o=e.rootBounds,n=Math.abs(t.bottom-o.top)>=Math.abs(t.top-o.top);if(e.isIntersecting){if(r.current=!0,n)i(!0)}else if(r.current&&(r.current=!1,n))i(!1)})(e[0])},{threshold:cn(),root:t||document,rootMargin:pn(o)});return n.observe(e),a.current=n,()=>{a.current.unobserve(e),a.current=null}}},[e,t,i,o])}const vn=.33,yn=.25;function hn(e){const{props:t,viewHeight:o,headerHeight:i,isActive:a,verticalSpace:r,stretched:l,transitionType:s,screenTransitionType:d,isSmallSize:u}=e,{side:c,size:p,offset:g,background:y,textColor:h,overlay:f=!0,padding:m}=t.panel||{},I=(0,n.getAppStore)().getState().appContext.isRTL?"left"===c?"-":"":"right"===c?"-":"",x=v.styleUtils.toBackgroundEmotionStyle(null!=y?y:{}),w=parseFloat(r);if(u){const e=!f;return n.css`
      width: 100%;
      background: transparent;
      pointer-events: none;
      position: relative;
      opacity: ${s===n.ScreenTransitionType.Fade?a?"1":"0.5":null};
      min-height: ${d===n.ScreenTransitionType.Cover?`${o}px`:null};
      padding-top: ${d!==n.ScreenTransitionType.Fade&&e?`${Math.round(o*vn)}px`:null};

      &.top-spacing > .panel-content {
        /* margin-top: ${Math.round(o*vn)}px; */
      }

      .panel-content {
        width: 100%;
        ${f?"":x};
        color: ${f?"":h};
        /* margin-top: ${s===n.ScreenTransitionType.Push?"${Math.round(viewHeight * SCREEN_RATIO_IN_SMALL_SIZE)}px":"unset"}; */

        > .layout, > .layout-wrapper > .layout {
          pointer-events: auto;
          ${f?x:""};
          color: ${f?h:""};
          min-height: ${Math.round(o*yn)}px;
          padding: ${v.styleUtils.toCSSPadding(m)};
        }

        > .layout-wrapper > .column-layout > .trail-container,
        > .column-layout > .trail-container {
          overflow-y: hidden;
        }

        > .layout-wrapper > .placeholder-btn {
          pointer-events: auto;
          ${f?x:""};
        }

        .panel-spacing {
          height: ${Math.round(o*w/100)}px;
        }
      }

      .panel-content-placeholder {
        width: 1px;
        min-height: ${o}px;
      }

      body:not(.design-mode) & {
        min-height: ${d===n.ScreenTransitionType.Cover?"100vh":null};
        min-height: ${d===n.ScreenTransitionType.Cover?"calc(var(--vh) * 100)":null};
        padding-top: ${d!==n.ScreenTransitionType.Fade&&e?"33vh":null};
        padding-top: ${d!==n.ScreenTransitionType.Fade&&e?"calc(var(--vh) * 33)":null};

        > .layout, > .layout-wrapper > .layout {
          min-height: ${Math.round(25)}vh;
          min-height: calc(var(--vh) * ${Math.round(25)});
        }

        .panel-content-placeholder {
          min-height: 100vh;
          min-height: calc(var(--vh) * 100);
        }

        .panel-spacing {
          height: ${w}vh;
          height: calc(var(--vh) * ${w});
        }
      }
    `}return n.css`
    width: 100%;
    background: transparent;
    pointer-events: none;
    display: flex;
    flex-direction: ${"right"===c?"row-reverse":"row"};
    justify-content: ${"center"===c&&f?"center":"flex-start"};
    position: relative;
    opacity: ${s===n.ScreenTransitionType.Fade?a?"1":"0.5":null};

    &.top-spacing > .panel-content {
      /* margin-top: ${Math.round(2*o/3)}px; */
    }

    .panel-content {
      width: ${p};
      transform: ${f&&Math.abs(parseFloat(g))>0?`translateX(${I}${g})`:null};
      flex: 0 auto;
      min-height: ${l?`${o}px`:"unset"};
      ${f?"":x};
      color: ${f?"":h};

      > .layout,
      > .layout-wrapper > .layout {
        pointer-events: auto;
        ${f?x:""};
        color: ${f?h:""};
        min-height: ${Math.round(o*yn)}px;
        padding: ${v.styleUtils.toCSSPadding(m)};
      }

      > .layout-wrapper > .column-layout > .trail-container,
      > .column-layout > .trail-container {
        overflow-y: hidden;
      }

      > .layout-wrapper > .placeholder-btn {
        pointer-events: auto;
        ${f?x:""};
      }

      .panel-spacing {
        height: ${Math.round(o*w/100)}px;

        &.last-item {
          height: ${l?`${Math.round(o*w/100)}`:o}px;
        }
      }
    }

    .panel-content-placeholder {
      width: 1px;
      min-height: ${l?o:Math.round(o*yn)}px;
    }

    body:not(.design-mode) & {
      &.top-spacing > .panel-content {
        /* margin-top: 66.7vh; */
      }

      .panel-content {
        min-height: ${l?i>0?`calc(100vh - ${i}px)`:"100vh":"unset"};
        min-height: ${l?i>0?`calc(var(--vh) * 100 - ${i}px)`:"calc(var(--vh) * 100)":"unset"};
        > .layout, > .layout-wrapper > .layout {
          min-height: unset;
        }

        .panel-spacing {
          height: ${w}vh;
          height: calc(var(--vh) * ${w});

          &.last-item {
            height: ${l?w:100}vh;
            height: calc(var(--vh) * ${l?w:100});
          }
        }
      }
      .panel-content-placeholder {
        min-height: ${l?"100":Math.round(25)}vh;
        min-height: calc(var(--vh) * ${l?"100":Math.round(25)});
      }
    }
  `}function fn(e){var t;const{index:o,screenId:i,onInteractionChange:a,onHeightChange:r,viewHeight:l,headerHeight:s,layoutEntry:d,isActive:u,isSmallSize:c,transitionType:p,screenTransitionType:v,triggerType:y,stretched:h,verticalSpace:f="0"}=e,m=n.ReactRedux.useSelector(e=>e.appConfig.screens[i]),{panel:I}=m,x=n.React.useRef(void 0),[w,b]=n.React.useState(!1),S=n.React.useRef(void 0),C=n.React.useCallback(e=>{a(o,e)},[o,a]);n.React.useEffect(()=>(S.current=n.lodash.debounce(r,200),()=>{var e;null===(e=S.current)||void 0===e||e.cancel()}),[r]);const R=n.React.useCallback(({width:e,height:t})=>{var n;null===(n=S.current)||void 0===n||n.call(S,o,t)},[o]);return gn(x.current,e.refElement,c?n.ScreenTriggerType.Lower:null!=y?y:n.ScreenTriggerType.Bottom,C),n.React.useEffect(()=>{b(!0)},[]),(0,g.jsxs)("div",{className:(0,n.classNames)("screen-side-panel",{"top-spacing":0===o&&((null===(t=m.panel)||void 0===t?void 0:t.overlay)||c)}),"data-screenid":i,"data-index":o,ref:x,css:hn({props:m,viewHeight:l,headerHeight:s,isActive:u,verticalSpace:f,stretched:h||null==I,transitionType:p,screenTransitionType:v,isSmallSize:c}),children:[I&&(0,g.jsxs)("div",{className:"panel-content",children:[(0,g.jsx)(d,{layouts:I.layout}),(0,g.jsx)("div",{className:(0,n.classNames)("panel-spacing",{"last-item":e.isLast})})]}),!I&&(0,g.jsx)("div",{className:"panel-content-placeholder"}),(0,g.jsx)(n.ReactResizeDetector,{targetRef:x,handleHeight:!0,onResize:R})]})}var mn=d(194),In=d.n(mn),xn=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o};const wn=e=>{const t=window.SVG,{className:o}=e,i=xn(e,["className"]),a=(0,n.classNames)("jimu-icon jimu-icon-component",o);return t?(0,g.jsx)(t,Object.assign({className:a,src:In()},i)):(0,g.jsx)("svg",Object.assign({className:a},i))},bn=(0,Ke.withBuilderTheme)(v.Tooltip);function Sn(e){const{rootLayoutId:t,viewHeight:o,headerHeight:i,screenId:a,isActive:r,isAbsolute:l,isLast:s,isSmallSize:d,layoutEntry:u,isDesignMode:c,formatMessage:p,builderTheme:y}=e,h=n.ReactRedux.useSelector(e=>e.appConfig.screens[a]),f=n.ReactRedux.useSelector(e=>{var t,o,n;return null===(n=null===(o=null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.screenPanelStates)||void 0===o?void 0:o[a])||void 0===n||n}),{main:m}=h,{side:I,size:x,overlay:w=!0}=h.panel||{},b=n.React.useRef(void 0),S=n.React.useCallback(()=>{(0,n.getAppStore)().dispatch(n.appActions.screenPanelVisibleChanged(a,!0))},[a]);const C=(0,n.classNames)("screen-main-panel",{"is-active":r,"last-one":s});return(0,g.jsx)(n.PageVisibilityContext.Provider,{value:!l||r,children:(0,g.jsxs)("div",{id:`${t}_screen_${a}`,className:C,css:function(){var e,t,a,r,s,u,c,p;const g=Object.assign(Object.assign({},null!==(t=null===(e=h.main)||void 0===e?void 0:e.background)&&void 0!==t?t:{}),{color:(null===(r=null===(a=h.main)||void 0===a?void 0:a.background)||void 0===r?void 0:r.color)||"var(--sys-color-surface-background)"});if(d){const e=!w&&null!=h.panel,t=e?`${Math.round(o*vn)}px`:`${o}px`,a=e?`${Math.round(33)}`:"100";return n.css`
        pointer-events: none !important;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: ${o}px;

        > .layout {
          ${v.styleUtils.toBackgroundEmotionStyle(g)};
          color: ${null!==(u=null===(s=h.main)||void 0===s?void 0:s.textColor)&&void 0!==u?u:null};
          height: ${t} !important;
          border: none !important;
          pointer-events: auto;
        }

        body:not(.design-mode) & {
          height: ${i>0?`calc(100vh - ${i}px)`:"100vh"};
          height: ${i>0?`calc(var(--vh) * 100 - ${i}px)`:"calc(var(--vh) * 100)"};
          > .layout {
            height: ${a}vh !important;
            height: calc(var(--vh) * ${a}) !important;
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
      `}let f="0px",m="0px";"none"!==I&&(w||"right"===I||(f=x),w||"right"!==I||(m=x));const b=y?n.css`
      color: ${y.ref.palette.neutral[1200]};
      background-color: ${y.ref.palette.neutral[500]};
      border-color: ${y.ref.palette.neutral[600]};
      &:hover {
        color: ${y.ref.palette.black};
        background-color: ${y.ref.palette.neutral[600]};
      }
    `:null;return n.css`
      ${v.styleUtils.toBackgroundEmotionStyle(g)};
      color: ${null!==(p=null===(c=h.main)||void 0===c?void 0:c.textColor)&&void 0!==p?p:null};
      left: ${l?f:null};
      right: ${l?m:null};
      margin-left: ${l?null:f};
      margin-right: ${l?null:m};
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
          ${b};
          svg {
            margin-right: 0;
            margin-left: 0;
          }
        }
      }
    `}(),ref:b,"data-screenid":a,"data-index":e.index,children:[(0,g.jsx)(u,{layouts:m.layout,isInWidget:!0}),(0,g.jsx)("div",{className:"spacing-area"}),c&&!f&&(0,g.jsx)("div",{className:"toggle-visible-btn",onClick:S,"data-testid":"toggleBtn",children:(0,g.jsx)(bn,{placement:"auto",title:p("showInDesignView"),children:(0,g.jsx)(v.Button,{type:"default",size:"sm",className:"rounded-1",children:(0,g.jsx)(wn,{size:"m"})})})})]})})}function Cn(e,t,o,i,a){return e===n.ScreenTransitionType.Fade?n.css`
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
    `:void 0}function Rn(e,t,o){return e===n.ScreenTransitionType.Fade?n.css`
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
    `:void 0}function Tn(e){const{rootLayoutId:t,activeIndex:o,viewHeight:i,headerHeight:a,screens:r,transitionType:l,isSmallSize:s,layoutEntry:d,isDesignMode:u,formatMessage:c,builderTheme:p}=e;return(0,g.jsxs)(n.React.Fragment,{children:[(0,g.jsx)("div",{className:"screen-container",css:Cn(l,i,a,s,r.length),children:r.map((e,v)=>(0,g.jsx)(Sn,{rootLayoutId:t,index:v,isActive:o===v,screenId:e,viewHeight:i,headerHeight:a,isAbsolute:l===n.ScreenTransitionType.Fade,isLast:v===r.length-1,isSmallSize:s,layoutEntry:d,isDesignMode:u,formatMessage:c,builderTheme:p},e))}),(0,g.jsx)("div",{className:"screen-placeholder",css:Rn(l,i)})]})}function jn(e,t){return n.css`
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
  `}function Mn(e){var t;const{layoutId:o,layoutItemId:i,layoutItem:a}=e,{screenGroupId:r}=a,s=n.ReactRedux.useSelector(e=>e.appConfig.screenGroups[a.screenGroupId]),d=n.ReactRedux.useSelector(e=>{var t,o;return null!==(o=null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.isPrintPreview)&&void 0!==o&&o}),u=n.ReactRedux.useSelector(e=>e.appConfig.screenGroups[a.screenGroupId].screens.some(t=>null!=e.appConfig.screens[t].panel)),c=n.ReactRedux.useSelector(e=>e.browserSizeMode),{pageId:p}=n.React.useContext(l),v=n.ReactRedux.useSelector(e=>{const t=e.appConfig.pages[p];if(null==t?void 0:t.header){const t=e.appConfig.header;if(null==t?void 0:t.sticky){const o=e.browserSizeMode,n=e.appConfig.mainSizeMode,i=t.height[o]||t.height[n]||75;return parseInt(i,10)}}return 0}),{screens:y,stretchPanel:h=!0,triggerType:f=n.ScreenTriggerType.Bottom,verticalSpace:m="0",panelTransitionType:I=n.ScreenTransitionType.Push}=s;let x=d?null:null!==(t=s.transitionType)&&void 0!==t?t:n.ScreenTransitionType.Fade;d||c!==n.BrowserSizeMode.Small||u||(x=n.ScreenTransitionType.Cover);const w=n.ReactRedux.useSelector(e=>{var t;return null===(t=e.appRuntimeInfo.screenGroupNavInfos)||void 0===t?void 0:t[r]}),b=n.React.useRef(void 0),S=n.React.useRef(void 0),C=n.React.useRef(void 0),R=n.React.useRef(void 0),[T,j]=n.React.useState(0),M=n.React.useMemo(()=>{var e,t,o;if(c!==n.BrowserSizeMode.Small)return!1;const i=(0,n.getAppStore)().getState().appConfig,a=null===(t=null===(e=i.screenGroups)||void 0===e?void 0:e[r])||void 0===t?void 0:t.screens;if(null==a?void 0:a[T]){return null===(o=i.screens[a[T]].panel)||void 0===o?void 0:o.overlay}return!1},[r,T,c]);n.React.useEffect(()=>{null!=(null==w?void 0:w.activeIndex)&&w.activeIndex!==T&&j(w.activeIndex)},[w,T]);const P=n.React.useCallback((e,t)=>{t&&e!==T?(0,n.getAppStore)().dispatch(n.appActions.screenGroupNavInfoChanged(r,e,!1)):!t&&e>0&&(0,n.getAppStore)().dispatch(n.appActions.screenGroupNavInfoChanged(r,e-1,!1))},[T,r]),$=n.React.useCallback(()=>{if(!C.current)return;const e=C.current.children[0],t=C.current.children[1],o=t.childElementCount;for(let n=0;n<o;n++){const o=t.children[n],i=o.getAttribute("data-screenid"),a=e.querySelector(`[data-screenid="${i}"]`);a&&(a.style.height=d?`${o.clientHeight}px`:null)}e.style.height=`${t.clientHeight}px`},[d]),L=n.React.useMemo(()=>n.lodash.debounce($,200),[$]),O=n.React.useCallback((e,t)=>{if(!C.current)return;const o=C.current.children[0],i=C.current.children[1];if(x!==n.ScreenTransitionType.Fade)if(x!==n.ScreenTransitionType.Cover){if(x===n.ScreenTransitionType.Push){const t=o.querySelector(`div.screen-main-panel[data-index="${e}"]`),n=i.querySelector(`div.screen-side-panel[data-index="${e}"]`);t.style.height=`${n.clientHeight}px`,o.style.height=`${i.clientHeight}px`}}else!function(e,t,o){const i=e.querySelectorAll("div.screen-main-panel"),a=t.querySelectorAll("div.screen-side-panel"),r=i.length;for(let e=1;e<r;e++){const t=i.item(e),o=i.item(e-1),n=a.item(e-1);t.style.marginTop=n.clientHeight-o.clientHeight+"px"}o!==n.BrowserSizeMode.Small&&(e.style.height=`${t.clientHeight}px`)}(o,i,c);else o.style.height=`${i.clientHeight}px`},[c,x]),k=n.React.useMemo(()=>{const{a11yLabel:e,a11yLandmark:t,addToA11ySkip:o,label:i}=s;return(0,n.getA11yProps)(r,i,e,t,o)},[s,r]);return y.length>0?(0,g.jsx)("div",{className:(0,n.classNames)("flow-layout-item",{"print-preview":d,"small-size":c===n.BrowserSizeMode.Small}),css:jn(0,M),"data-layoutitemid":i,"data-layoutid":o,ref:b,children:(0,g.jsxs)("div",Object.assign({className:"screen-group","data-screengroupid":r,ref:C},k,{children:[(0,g.jsx)("div",{className:"main-panels",ref:R,children:(0,g.jsx)(Tn,{rootLayoutId:o,activeIndex:T,screens:y,transitionType:x,layoutEntry:ht,headerHeight:v,isSmallSize:c===n.BrowserSizeMode.Small})}),(0,g.jsxs)("div",{className:"side-panels",ref:S,children:[y.map((e,t)=>(0,g.jsx)(fn,{index:t,isLast:t===y.length-1,screenId:e,refElement:null,layoutEntry:ht,isActive:t===T,stretched:h,triggerType:f,verticalSpace:m,transitionType:I,screenTransitionType:x,onHeightChange:O,onInteractionChange:P,isSmallSize:c===n.BrowserSizeMode.Small,headerHeight:v},e)),(0,g.jsx)(n.ReactResizeDetector,{targetRef:S,handleHeight:!0,onResize:L})]})]}))}):null}class Pn extends n.React.PureComponent{constructor(e){super(e),this.ref=n.React.createRef();const t=n.ExtensionManager.getInstance().getExtensions(`${n.extensionSpec.ExtensionPoints.LayoutTransformer}`);if(t&&t.length>0){const e=t.find(e=>e.layoutType===this.props.layout.type);this.layoutTransform=null==e?void 0:e.transformLayout}}_createItem(e,t,o){var i;const{layout:a}=this.props;return(null==e?void 0:e.isPending)?null:e.type===n.LayoutItemType.ScreenGroup?(0,g.jsx)(Mn,{itemIndex:t,layoutId:a.id,layoutItemId:e.id,layoutItem:e},`${e.id}_${t}`):(null===(i=e.setting)||void 0===i?void 0:i.isFloating)?(0,g.jsx)(un,{index:t,gutter:o.gutter,layoutId:a.id,layoutItemId:e.id,layoutItem:e},e.id):(0,g.jsx)(dn,{index:t,gutter:o.gutter,layoutId:a.id,layoutItemId:e.id,parentRef:{current:document.body},layoutItem:e},e.id)}render(){const{layout:e,className:t,style:o,layouts:i,browserSizeMode:a}=this.props;if(!e)return null;let r=e;if(i[a]!==e.id&&this.layoutTransform){let t;Object.keys(i).some(o=>i[o]===e.id&&(t=o,!0)),r=this.layoutTransform(e,t,a)}const l=r.order||[],s=n.lodash.assign({},nn,r.setting),d=Object.assign(Object.assign(Object.assign({},o),v.styleUtils.toCSSStyle(s.style)),{position:"relative"}),u=(0,n.classNames)("layout flow-layout w-100",t);return(0,g.jsx)("div",{ref:this.ref,className:u,style:d,"data-layoutid":e.id,children:(0,g.jsx)("div",{"data-layoutid":r.id,className:"trail-container d-flex flex-column align-items-center",css:n.css`
            width: 100%;
          `,children:l.map((e,t)=>this._createItem(r.content[e],t,s))})})}}const $n=n.ReactRedux.connect(ce)(Pn);var Ln=d(8972),On=d(9895);Object.defineProperty,Object.getOwnPropertyNames,Object.getOwnPropertySymbols,Object.getOwnPropertyDescriptor,Object.getPrototypeOf,Object.prototype;var kn=Symbol.for("react-redux-context"),En="undefined"!=typeof globalThis?globalThis:{};function An(){if(!Ln.createContext)return{};const e=En[kn]??=new Map;let t=e.get(Ln.createContext);return t||(t=Ln.createContext(null),e.set(Ln.createContext,t)),t}var zn=An();function Nn(e=zn){return function(){return Ln.useContext(e)}}var Bn=Nn();var Fn=(e,t)=>e===t;function Hn(e=zn){const t=e===zn?Bn:Nn(e),o=(e,o={})=>{const{equalityFn:n=Fn}="function"==typeof o?{equalityFn:o}:o;const i=t(),{store:a,subscription:r,getServerState:l}=i,s=(Ln.useRef(!0),Ln.useCallback({[e.name]:t=>e(t)}[e.name],[e])),d=(0,On.useSyncExternalStoreWithSelector)(r.addNestedSub,a.getState,l||a.getState,s,n);return Ln.useDebugValue(d),d};return Object.assign(o,{withTypes:()=>o}),o}var Wn=Hn();function Vn(e,t,o){var i;const a=Object.keys(null!==(i=e.controllerPanels)&&void 0!==i?i:{}).filter(i=>{const a=z(e,i,n.LayoutItemType.Widget,o);return null!=a&&(a.type!==n.ContainerType.Page||a.id===t)});return a.sort(),a.join(",")}function Dn(e){if(null==e)return null;const{position:t,offsetX:o=0,offsetY:i=0}=e;let a;return e.widthMode!==b.Stretch&&(0!==o&&(a=`translateX(${o}px)`),t!==n.FixedPosition.TopCenter&&t!==n.FixedPosition.MiddleCenter&&t!==n.FixedPosition.BottomCenter||(a=null!=a?`${a} translateX(-50%)`:"translateX(-50%)")),e.heightMode!==b.Stretch&&(0!==i&&(a=null!=a?`${a} translateY(${i}px)`:`translateY(${i}px)`),t!==n.FixedPosition.MiddleLeft&&t!==n.FixedPosition.MiddleCenter&&t!==n.FixedPosition.MiddleRight||(a=null!=a?`${a} translateY(-50%)`:"translateY(-50%)")),a}function Gn(e){let t,o,i;switch(null==e?void 0:e.position){case n.FixedPosition.TopLeft:t=n.css`top: 0; left: 0; bottom: auto; right: auto;`;break;case n.FixedPosition.TopRight:t=n.css`top: 0; left: auto; bottom: auto; right: 0;`;break;case n.FixedPosition.BottomLeft:t=n.css`top: auto; left: 0; bottom: 0; right: auto;`;break;case n.FixedPosition.BottomRight:t=n.css`top: auto; left: auto; bottom: 0; right: 0;`;break;case n.FixedPosition.TopCenter:t=n.css`top: 0; left: 50%; bottom: auto; right: auto;`;break;case n.FixedPosition.BottomCenter:t=n.css`top: auto; left: 50%; bottom: 0; right: auto;`;break;case n.FixedPosition.MiddleLeft:t=n.css`top: 50%; left: 0; bottom: auto; right: auto;`;break;case n.FixedPosition.MiddleRight:t=n.css`top: 50%; left: auto; bottom: auto; right: 0;`;break;case n.FixedPosition.MiddleCenter:t=n.css`top: 50%; left: 50%; bottom: auto; right: auto;`;break;default:t=n.css`top: 0; left: 0; bottom: auto; right: auto;`}return e.widthMode===b.Stretch&&(o=n.css`width:auto;left:${e.left};right:${e.right};`),e.heightMode===b.Stretch&&(i=n.css`height:auto;top:${e.top};bottom:${e.bottom};`),n.css`
    position: fixed;
    ${t}
    width: ${null==e?void 0:e.width};
    height: ${null==e?void 0:e.height};
    ${o};
    ${i}
    overflow: visible;
    z-index: 2;
  `}const Un=(e,t,o)=>n.React.useCallback(i=>{if(!e)return;const a=i.key,r=i.shiftKey;if("Tab"===a)if(r){const t=(0,v.getFocusableElements)(e).filter(e=>{var t,n;return!(null===(n=null===(t=null==e?void 0:e.classList)||void 0===t?void 0:t.contains)||void 0===n?void 0:n.call(t,o))});if(!t||0===t.length)return;(0,n.focusElementInKeyboardMode)(t[t.length-1],!0)}else{const o=e.querySelector(`.${t}`);(0,n.focusElementInKeyboardMode)(o,!0)}},[e,t,o]);var _n=d(8689),Xn=d.n(_n);const Jn=n.css`
  position: relative;
  display: flex;
  background-color: var(--ref-palette-white);
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
  border-radius: var(--sys-shape-2);
  overflow: hidden;
  .panel-header {
    > .actions > .action-collapse {
      svg {
        transition: transform 0.3s ease-in-out;
      }
      &.collapsed svg {
        transform: rotate(180deg);
      }
    }
  }
  .panel-content {
    position: relative;
    overflow: hidden;

    .widget-content {
      z-index: 0;
    }

    .widget-mask {
      position: absolute;
      background: transparent;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 1;
    }
  }
`;function Yn(e){const{layoutId:t,layoutItemId:o,controllerId:i,minimized:a,onClose:r,onToggle:l}=e,[s,d]=n.React.useState(!1),u=n.React.useRef(void 0),c=n.hooks.useLatest(r),p=n.hooks.useLatest(l),[y,h]=n.React.useState(),f=n.hooks.useTranslation(),m=n.ReactRedux.useSelector(e=>e.appConfig.layouts[t].content[o].widgetId),I=n.ReactRedux.useSelector(e=>{var t;const o=null===(t=e.widgetsRuntimeInfo)||void 0===t?void 0:t[m];return(null==o?void 0:o.state)===n.WidgetState.Opened}),x=n.ReactRedux.useSelector(e=>{const t=e.appConfig.widgets[m];return null==t?void 0:t.label},n.ReactRedux.shallowEqual),w=n.ReactRedux.useSelector(e=>{var t;const o=e.widgetsRuntimeInfo[m];return null!==(t=null==o?void 0:o.isClassLoaded)&&void 0!==t&&t}),b=n.ReactRedux.useSelector(e=>e.appConfig.controllerPanels[i].effect),S=n.hooks.usePrevious(I),C=n.React.useMemo(()=>(0,n.prepareLocalVariants)(`${t}_${o}`,null,null,b,null,null),[b,t,o]),R=n.React.useCallback(e=>{c.current(e,m);const t=document.querySelector(`.widget-controller .avatar-card[data-widgetid='${m}'] button`);if(t)(0,n.focusElementInKeyboardMode)(t);else{const e=document.querySelector(`[data-widgetid='${i}'] .popup-more-button button`);(0,n.focusElementInKeyboardMode)(e)}},[c,m,i]),T=n.ReactRedux.useSelector(e=>{var t;return null===(t=e.widgetsState[m])||void 0===t?void 0:t.autoFocus});(0,v.useTrapFocusBySelector)(u,!0,T,".first-node",a?".action-close":".last-virtual-node",s&&I),n.React.useEffect(()=>{I&&!s&&(d(!0),n.WidgetManager.getInstance().loadWidgetClass(m).catch(e=>{console.log(e)}))},[I,m,s]),n.React.useEffect(()=>{I&&!S&&C&&h("hide")},[I,S,C]);let j;s&&w&&(j=n.WidgetManager.getInstance().getWidgetClass(m));const M=Un(u.current,"first-node","last-virtual-node"),P=n.React.useMemo(()=>[{name:"collapse",className:a?"first-node action-collapse collapsed":"first-node action-collapse",label:f(a?"expand":"collapse"),icon:Xn(),onClick:p.current},{name:"close",className:"action-close",label:f("close"),icon:ao(),onClick:R}],[R,a,p,f]);return(0,g.jsxs)(n.motion.div,{id:`${t}_${o}`,role:"dialog","aria-label":x,className:(0,n.classNames)("controller-panel flex-column w-100 h-100",{"d-none":!s||!I}),css:Jn,ref:u,animate:y,onAnimationComplete:()=>{if(null==y?void 0:y.endsWith("hide")){const e=y.replace("hide","show");h(e)}else h("visible")},variants:C,children:[(0,g.jsx)(v.PanelHeader,{level:2,type:"primary",title:x,actions:P,moveable:!1}),(0,g.jsxs)(v.Surface,{level:"paper",variant:"flat",className:"panel-content d-flex flex-grow-1",children:[!w&&(0,g.jsx)(v.Loading,{type:v.LoadingType.Donut}),j&&(0,g.jsx)("div",{className:"w-100 h-100 widget-content p-1",children:(0,g.jsx)(n.ErrorBoundary,{children:(0,g.jsx)(j,{widgetId:m,layoutId:t,layoutItemId:o})})}),(0,g.jsx)("button",{className:"sr-only last-virtual-node",onKeyUp:M})]})]})}const Kn=e=>{const{children:t}=e,o=(0,v.useFullscreenElement)();return o?n.ReactDOM.createPortal(t,o):t};function qn(e){const{controllerId:t}=e,[o,i]=n.React.useState(!1),a=n.ReactRedux.useSelector(e=>{const o=e.appConfig.widgets[t],n=o.manifest.layouts[0].name,i=o.layouts[n];return i[e.browserSizeMode]||i[e.appConfig.mainSizeMode]}),r=n.ReactRedux.useSelector(e=>{var t;const o=e.appConfig.layouts[a];if(!o)return"";const n=e.appConfig.widgets,i=Object.keys(null!==(t=o.content)&&void 0!==t?t:{}).filter(e=>{const t=o.content[e],i=n[null==t?void 0:t.widgetId];return null!=(null==t?void 0:t.widgetId)&&!t.isPending&&!["offPanel","inController"].includes(null==i?void 0:i.inControllerUx)});return i.sort(),i.join(",")}),l=n.ReactRedux.useSelector(e=>{var t,o;const i=e.appConfig.widgets,r=Object.keys(null!==(t=e.widgetsRuntimeInfo)&&void 0!==t?t:{}).filter(t=>{var o;return e.widgetsRuntimeInfo[t].state===n.WidgetState.Opened&&!["offPanel","inController"].includes(null===(o=i[t])||void 0===o?void 0:o.inControllerUx)}),l=e.appConfig.layouts[a];return Object.keys(null!==(o=l.content)&&void 0!==o?o:{}).some(e=>{const t=l.content[e];return null!=(null==t?void 0:t.widgetId)&&!t.isPending&&r.includes(t.widgetId)})}),s=n.React.useMemo(()=>r.split(",").filter(e=>""!==e),[r]),d=n.ReactRedux.useSelector(e=>e.appConfig.controllerPanels[t]),u=n.React.useCallback((e,t)=>{e.stopPropagation(),(0,n.getAppStore)().dispatch(n.appActions.closeWidget(t))},[]),c=n.React.useCallback(()=>{i(!o)},[o]),p=n.React.useMemo(()=>n.css`
    ${Gn(d)}
    height: ${o?"36px":null==d?void 0:d.height};
    transition: height 0.3s ease-in-out;
    transform: ${Dn(d)}
  `,[d,o]);return 0===s.length?null:(0,g.jsx)(Kn,{children:(0,g.jsx)("div",{className:(0,n.classNames)("panel-container",{"d-none":!l}),css:p,children:(0,g.jsx)(n.React.Fragment,{children:s.map(e=>(0,g.jsx)(Yn,{controllerId:t,layoutId:a,layoutItemId:e,minimized:o,onToggle:c,onClose:u},e))})})})}function Zn(e){const{pageId:t}=e,o=n.ReactRedux.useSelector(e=>Vn(e.appConfig,t,e.browserSizeMode)),i=n.React.useMemo(()=>o.split(",").filter(e=>""!==e),[o]);return(0,g.jsx)(n.React.Fragment,{children:i.map(e=>(0,g.jsx)(qn,{controllerId:e},e))})}function Qn(e){const{pageJson:t,visible:o,pageContext:i,browserSizeMode:a,isPrintPreview:r,headerFooterHeight:s}=e,[d,u]=n.React.useState(null),c=n.React.useRef(!1),p=t.layout,v=n.hooks.usePrevious(o),y=n.React.useMemo(()=>function(e,t){if(e){const o=(0,n.getAppStore)().getState().appConfig,i=e.layout[o.mainSizeMode],a=o.layouts[i];if((null==a?void 0:a.type)===n.LayoutType.GridLayout)return t>0?`calc(100% - ${t}px)`:"100%"}return"auto"}(t,s),[s]),h=!r&&t.oneByOneEffect&&t.oneByOneEffect.type!==n.AnimationType.None?t.oneByOneEffect:null,[f,m]=n.React.useMemo(()=>[(0,n.prepareOneByOneVariants)(h),(0,n.prepareOneByOneTransition)(h)],[h]);n.React.useEffect(()=>{u("hide")},[]);const I=t.a11yLandmark,x=t.label,w=Wn(e=>{var t;return null===(t=e.appConfig.attributes)||void 0===t?void 0:t.enableA11yForWidgetSettings}),b=n.React.useMemo(()=>w&&I?{role:I,"aria-label":x,tabIndex:-1}:{},[w,I,x]);let S;n.React.useEffect(()=>{var e;if(o&&p){const t=(0,n.getAppStore)().getState().appConfig,o=p[t.mainSizeMode],i=null===(e=t.layouts[o])||void 0===e?void 0:e.type,a=document.getElementsByTagName("html")[0];i===n.LayoutType.FlowLayout?a.classList.add("scrollable"):a.classList.remove("scrollable")}},[o,p]),n.React.useEffect(()=>{null!=v&&v!==o&&u(o?"show":"hide")},[o,v]),t.mode!==n.PageMode.FitWindow&&t.maxWidth>0&&(S=t.maxWidth);const C=n.React.useMemo(()=>{const e=(0,n.getAppStore)().getState();let o;return t.layout&&(o=W(t.layout,a,e.appConfig.mainSizeMode)),Object.assign(Object.assign({},i),{maxWidth:S,viewOnly:!0,rootLayoutId:o,pageId:t.id})},[i,S,t.id,t.layout,a]),R=n.React.useMemo(()=>({show:{opacity:1,transition:m},hide:{opacity:1,transition:{type:"tween",duration:0}}}),[m]);if(p)return(0,g.jsx)(n.motion.div,Object.assign({id:t.id,"data-pageid":t.id,className:"page jimu-outline-inside"},b,{css:n.css`
        display: ${o?"flex":"none"};
        background-color: ${t.bodyBackgroundColor||"var(--sys-color-surface-background)"};
        color: ${t.bodyTextColor||"var(--sys-color-surface-background-text)"};
        height: ${y};
        flex: 1 0 auto;
        z-index: 1;
      `,initial:c.current?void 0:"hide",animate:d,onAnimationComplete:()=>{o&&"hide"===d?(u("show"),c.current=!0):(null==d?void 0:d.endsWith("show"))&&u(null)},variants:R,children:(0,g.jsx)(n.AnimationContext.Provider,{value:{variants:f||n.DEFAULT_VARIANTS,oid:C.rootLayoutId},children:(0,g.jsx)(l.Provider,{value:C,children:(0,g.jsxs)(n.PageVisibilityContext.Provider,{value:o,children:[(0,g.jsx)(ht,{layouts:p,className:"w-100 flex-grow-1",css:n.css`
                margin: 0 auto;
                background-color: transparent;
                z-index: 0;
              `}),a!==n.BrowserSizeMode.Small&&(0,g.jsx)(Zn,{pageId:t.id})]})},t.id)})}))}function ei(e){const{headerJson:t,browserSizeMode:o,theme:i,mainSizeMode:a,pageContext:r,showClassification:s,onHeightChange:d}=e,u=n.hooks.useTranslation(v.defaultMessages),c=t.height[o]||t.height[a]||50,p=t.layout;let y;t.backgroundIMage&&("string"==typeof t.backgroundIMage?y=t.backgroundIMage:"object"==typeof t.backgroundIMage&&(y=t.backgroundIMage.url)),y=n.appConfigUtils.processResourceUrl(y),n.hooks.useEffectOnce(()=>{d(parseInt(c))});const h=t.sticky&&!s,f=n.css`
    display: flex;
    position: ${h?"sticky":"relative"};
    z-index: ${h?2:"0"};
    top: 0;
    width: 100%;
    min-height: ${Math.round(parseFloat(c))}px;
    height: auto;
    overflow: hidden;
    background-color: ${t.backgroundColor||i.sys.color.surface.header||"transparent"};
    background-image: ${y};
    background-position: ${t.backgroundPosition};
    color: ${t.textColor||i.sys.color.surface.headerText};
    flex: 0 0 auto;
  `,m=n.React.useMemo(()=>Object.assign(Object.assign({},r),{viewOnly:!0}),[r]);return(0,g.jsx)(l.Provider,{value:m,children:(0,g.jsx)(n.PageVisibilityContext.Provider,{value:!0,children:(0,g.jsx)("header",{className:"header jimu-outline-inside",css:f,id:`${n.WIDGET_PREFIX_FOR_A11Y_SKIP}${p[o]}`,tabIndex:-1,"aria-label":u("header"),children:(0,g.jsx)(ht,{layouts:p,className:"w-100 flex-grow-1"})})})})}function ti(e){const{footerJson:t,browserSizeMode:o,theme:i,mainSizeMode:a,pageContext:r,onHeightChange:s}=e,d=n.hooks.useTranslation(v.defaultMessages),u=t.height[o]||t.height[a]||50,c=t.layout;let p;t.backgroundIMage&&("string"==typeof t.backgroundIMage?p=t.backgroundIMage:"object"==typeof t.backgroundIMage&&(p=t.backgroundIMage.url)),p=n.appConfigUtils.processResourceUrl(p),n.hooks.useEffectOnce(()=>{s(parseInt(u))});const y=n.css`
    display: flex;
    width: 100%;
    height: ${Math.round(parseFloat(u))}px;
    flex-shrink: 0;
    overflow: hidden;
    background-color: ${t.backgroundColor||(null==i?void 0:i.sys.color.surface.footer)||"transparent"};
    background-image: ${p};
    background-position: ${t.backgroundPosition};
    color: ${t.textColor||(null==i?void 0:i.sys.color.surface.footerText)};
    z-index: 0;
  `,h=n.React.useMemo(()=>Object.assign(Object.assign({},r),{viewOnly:!0}),[r]);return(0,g.jsx)(l.Provider,{value:h,children:(0,g.jsx)(n.PageVisibilityContext.Provider,{value:!0,children:(0,g.jsx)("footer",{className:"footer jimu-outline-inside",css:y,id:`${n.WIDGET_PREFIX_FOR_A11Y_SKIP}${c[o]}`,tabIndex:-1,"aria-label":d("footer"),children:(0,g.jsx)(ht,{layouts:c,className:"w-100 flex-grow-1"})})})})}const oi=n.css`
  display: flex;
  height: 100%;
  width: 100%;
  background: var(--ref-palette-neutral-1100);

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
`;function ni(){const e=n.i18n.getIntl(),t=n.React.useRef(void 0);n.React.useEffect(()=>{(0,n.focusElementInKeyboardMode)(t.current)},[]);const o=n.React.useCallback(t=>e.formatMessage({id:t}),[e]),i=n.hooks.useEventCallback(()=>{n.jimuHistory.changeQueryObject({print_preview:null}),(0,n.getAppStore)().dispatch(n.appActions.quitPrintPreview())}),a=n.hooks.useEventCallback(()=>{window.print()});return(0,g.jsxs)("div",{className:"print-preview-tool shadow-3",css:oi,children:[(0,g.jsx)("div",{className:"d-flex justify-content-center align-items-center flex-grow-1",children:(0,g.jsx)(v.Button,{ref:t,"aria-label":o("printCurrentPage"),type:"primary",onClick:a,children:o("printCurrentPage")})}),(0,g.jsx)(v.Button,{className:"ml-auto",icon:!0,type:"tertiary","aria-label":o("close"),onClick:i,children:(0,g.jsx)(lo,{color:"var(--ref-palette-white)"})})]})}var ii=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o};function ai(e){const{showClassification:t}=e,o=ii(e,["showClassification"]),i=n.ReactRedux.useSelector(e=>e.appInfo.id),[a,r]=n.React.useState(null);return n.React.useEffect(()=>{t&&!a&&(0,n.loadArcGISJSAPIModule)("esri/kernel").then(e=>{e&&n.moduleLoader.loadModule("jimu-ui/advanced/portal-components").then(r)}).catch(e=>{console.error("loadArcGISJSAPIModule error",e)})},[t]),(null==a?void 0:a.ClassificationBanner)&&(0,g.jsx)(a.ClassificationBanner,Object.assign({portalItemId:i},o))}const ri=Ke.styled.div(()=>"\n    position: sticky;\n    top: 0;\n    z-index: 2;\n  ");function li(e){const{headerJson:t,showClassification:o,classification:i,children:a}=e;return o?(0,g.jsxs)(n.React.Fragment,{children:[(0,g.jsxs)(ri,{className:"sticky-header-wrapper w-100",children:[(0,g.jsx)(ai,{showClassification:o,position:"top",needSticky:!1,classification:i}),(null==t?void 0:t.sticky)&&a]}),!(null==t?void 0:t.sticky)&&a]}):a}pt(n.LayoutType.FixedLayout,Ht),pt(n.LayoutType.FlowLayout,$n),pt(n.LayoutType.GridLayout,So),pt(n.LayoutType.ColumnLayout,Ut),pt(n.LayoutType.AccordionLayout,Do),pt(n.LayoutType.FlexRowLayout,Jo);class si extends n.React.PureComponent{constructor(e){super(e),this.updateHeaderHeight=e=>{this.setState({headerHeight:e})},this.updateFooterHeight=e=>{this.setState({footerHeight:e})},this.isMac=()=>{var e,t;return"macOS"===(null===(t=null===(e=window.jimuUA)||void 0===e?void 0:e.os)||void 0===t?void 0:t.name)},this.handlePrintEvent=e=>{(0,n.getAppStore)().dispatch(n.appActions.activePrintPreview()),n.jimuHistory.changeQueryObject({print_preview:String(!0)}),e.cancelBubble=!0,e.preventDefault(),e.stopImmediatePropagation()},this.state={headerHeight:0,footerHeight:0},n.ExtensionManager.getInstance().registerExtension({epName:n.extensionSpec.ExtensionPoints.LayoutTransformer,extension:new Zo}),n.ExtensionManager.getInstance().registerExtension({epName:n.extensionSpec.ExtensionPoints.LayoutTransformer,extension:new en}),n.ExtensionManager.getInstance().registerExtension({epName:n.extensionSpec.ExtensionPoints.LayoutTransformer,extension:new on}),this.pageContext={theme:this.props.theme},window.jimuConfig.isBuilder||(this.isMac()?this.keyBindings={"command+keyp":this.handlePrintEvent}:this.keyBindings={"ctrl+keyp":this.handlePrintEvent})}componentDidUpdate(e){if(ui(e.pageStatus)!==ui(this.props.pageStatus)){document.getElementsByTagName("html")[0].scrollTop=0}}render(){const{pageStatus:e,pages:t,theme:o,isPrintPreview:i,headerVisible:a,footerVisible:r,header:l,showClassification:s}=this.props,d=ui(e);if(!d||!(null==t?void 0:t[d]))return null;let u="100%";const c=t[d]||{};c&&!isNaN(+c.width)&&(u=+c.width+"px");const p=n.css`
      width: ${u};
      margin: 0 auto;
      min-height: 100%;
      overflow: auto;
      position: relative;
      z-index: 0;
      height: 100%;
      background-color: ${c&&c.backgroundColor};

      html.scrollable & {
        height: auto;
        overflow: unset;
        min-height: 100vh;
      }
    `;return(0,g.jsxs)("div",{className:"page-renderer d-flex flex-column",css:p,ref:e=>{this.pageRef=e},"data-testid":"pageRenderer",children:[i&&(0,g.jsx)(v.Modal,{isOpen:!0,css:n.css`
            max-width: 100% !important;
            margin: 0 !important;

            .modal-body.print-preview-content {
              height: 64px;
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              padding: 0;
            }
          `,backdrop:!1,children:(0,g.jsx)(v.ModalBody,{className:"print-preview-content",children:(0,g.jsx)(ni,{})})}),this.renderDialog(),(0,g.jsx)(li,{headerJson:l,showClassification:s,children:a&&this.renderHeader()}),Object.keys(e).map(e=>this.renderPageBody(e,o)),r&&this.renderFooter(),s&&(0,g.jsx)(ai,{showClassification:s,position:"bottom"}),(0,g.jsx)(n.Keyboard,{bindings:this.keyBindings})]})}renderHeader(){if(!this.props.header)return null;const{header:e,browserSizeMode:t,theme:o,mainSizeMode:n,showClassification:i}=this.props;return(0,g.jsx)(ei,{headerJson:e,pageContext:this.pageContext,browserSizeMode:t,mainSizeMode:n,theme:o,showClassification:i,onHeightChange:this.updateHeaderHeight})}renderFooter(){if(!this.props.footer)return null;const{footer:e,browserSizeMode:t,mainSizeMode:o,theme:n}=this.props;return(0,g.jsx)(ti,{footerJson:e,pageContext:this.pageContext,browserSizeMode:t,mainSizeMode:o,theme:n,onHeightChange:this.updateFooterHeight})}renderPageBody(e,t){const{pageStatus:o,pages:n,isPrintPreview:i}=this.props,a=n[e];if(!a)return;const r=!!o[e];return(0,g.jsx)(Qn,{pageJson:a,pageContext:this.pageContext,browserSizeMode:this.props.browserSizeMode,visible:r,isPrintPreview:i,headerFooterHeight:this.state.headerHeight+this.state.footerHeight},a.id)}renderDialog(){const{dialogs:e,openedDialogIds:t=[],urlDialogJson:o,splashDialogJson:i,isSplashClosed:a,isPageDlgClosed:r,pageDialogJson:s,pageDialogId:d}=this.props;return(0,g.jsxs)(n.React.Fragment,{children:[t.map(t=>{const i=e[t];return i&&i.mode===n.DialogMode.Fixed&&(0,g.jsx)(l.Provider,{value:Object.assign(Object.assign({},this.pageContext),{dialogId:i.id,viewOnly:!0}),children:(0,g.jsx)(n.AppDialog,{dialogJson:i,isCurrentDialog:i.id===(null==o?void 0:o.id),runtime:!0})},i.id)}),o&&o.mode===n.DialogMode.Fixed&&!t.includes(o.id)&&(0,g.jsx)(l.Provider,{value:Object.assign(Object.assign({},this.pageContext),{dialogId:o.id,viewOnly:!0}),children:(0,g.jsx)(n.AppDialog,{dialogJson:o,isCurrentDialog:!0,runtime:!0})},o.id),!r&&s&&(null==o?void 0:o.id)!==s.id&&(0,g.jsx)(l.Provider,{value:Object.assign(Object.assign({},this.pageContext),{dialogId:d,viewOnly:!0}),children:(0,g.jsx)(n.AppDialog,{dialogJson:s,runtime:!0,isOpenByPage:!0})}),!a&&i&&(null==o?void 0:o.id)!==i.id&&(0,g.jsx)(l.Provider,{value:Object.assign(Object.assign({},this.pageContext),{dialogId:i.id,viewOnly:!0}),children:(0,g.jsx)(n.AppDialog,{dialogJson:i,runtime:!0})})]})}}si.displayName="RuntimePageRenderer";const di=(0,n.createSelector)([e=>e.appConfig.pages,e=>e.appConfig.dialogs,e=>e.appConfig.header,e=>e.appConfig.footer,e=>e.browserSizeMode,e=>e.appConfig.mainSizeMode,e=>{var t;const o=window.jimuConfig.isBuilder?e.appStateInBuilder:e;return null===(t=null==o?void 0:o.appRuntimeInfo)||void 0===t?void 0:t.dialogInfos},e=>{var t;const o=window.jimuConfig.isBuilder?e.appStateInBuilder:e;return null===(t=null==o?void 0:o.appRuntimeInfo)||void 0===t?void 0:t.currentPageId},e=>{var t,o,n;const i=window.jimuConfig.isBuilder?e.appStateInBuilder:e,a=null===(t=null==i?void 0:i.appRuntimeInfo)||void 0===t?void 0:t.currentPageId;return null===(n=null===(o=null==i?void 0:i.appConfig)||void 0===o?void 0:o.pages[a])||void 0===n?void 0:n.autoOpenDialogId},e=>{var t;const o=window.jimuConfig.isBuilder?e.appStateInBuilder:e;return null===(t=null==o?void 0:o.appRuntimeInfo)||void 0===t?void 0:t.openedDialogIds},e=>{var t,o;return null!==(o=null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.isPrintPreview)&&void 0!==o&&o},(e,t)=>ui(t.pageStatus),(e,t)=>t.dialogId,e=>n.portalUtils.shouldShowClassificationBanner(e)],(e,t,o,n,i,a,r,l,s,d,u,c,p,g)=>{var v,y;if(!c||!e[c])return{};const h=t[Object.keys(t).find(e=>t[e].isSplash)];return{pages:e,header:o,headerVisible:!!e[c].header,footer:n,footerVisible:!!e[c].footer,browserSizeMode:i,mainSizeMode:a,splashDialogJson:h,isSplashClosed:null===(v=null==r?void 0:r[null==h?void 0:h.id])||void 0===v?void 0:v.isClosed,dialogs:t,openedDialogIds:d,pageDialogId:s,pageDialogJson:t[s],isPageDlgClosed:null===(y=null==r?void 0:r[l+"-"+s])||void 0===y?void 0:y.isClosed,urlDialogJson:t[p],isPrintPreview:u,showClassification:g}});function ui(e){return Object.keys(e).find(t=>e[t])}const ci=n.ReactRedux.connect(di)((0,Ke.withTheme)(si));var pi=function(e,t,o,n){return new(o||(o=Promise))(function(i,a){function r(e){try{s(n.next(e))}catch(e){a(e)}}function l(e){try{s(n.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o(function(e){e(t)})).then(r,l)}s((n=n.apply(e,t||[])).next())})};function gi(){return pi(this,void 0,void 0,function*(){return yield Promise.all([r()])})}})(),u})())}}});