System.register(["jimu-core","jimu-core/emotion","jimu-ui","jimu-theme","jimu-layouts/layout-runtime"],function(e,t){var o={},n={},i={},a={},l={};return{setters:[function(e){o.AnimationContext=e.AnimationContext,o.AnimationLight=e.AnimationLight,o.AnimationTriggerType=e.AnimationTriggerType,o.AnimationType=e.AnimationType,o.AppDialog=e.AppDialog,o.AppMode=e.AppMode,o.BrowserSizeMode=e.BrowserSizeMode,o.ContainerType=e.ContainerType,o.DEFAULT_VARIANTS=e.DEFAULT_VARIANTS,o.DialogMode=e.DialogMode,o.ErrorBoundary=e.ErrorBoundary,o.ExtensionManager=e.ExtensionManager,o.FixedPosition=e.FixedPosition,o.GridItemType=e.GridItemType,o.INTERACTIVE_CLASS=e.INTERACTIVE_CLASS,o.Immutable=e.Immutable,o.Keyboard=e.Keyboard,o.LayoutItemType=e.LayoutItemType,o.LayoutParentType=e.LayoutParentType,o.LayoutType=e.LayoutType,o.PageMode=e.PageMode,o.PagePart=e.PagePart,o.PageVisibilityContext=e.PageVisibilityContext,o.React=e.React,o.ReactRedux=e.ReactRedux,o.ReactResizeDetector=e.ReactResizeDetector,o.ScreenTransitionType=e.ScreenTransitionType,o.ScreenTriggerType=e.ScreenTriggerType,o.TransitionContainer=e.TransitionContainer,o.ViewVisibilityContext=e.ViewVisibilityContext,o.WIDGET_PREFIX_FOR_A11Y_SKIP=e.WIDGET_PREFIX_FOR_A11Y_SKIP,o.WidgetManager=e.WidgetManager,o.WidgetState=e.WidgetState,o.WidgetType=e.WidgetType,o.appActions=e.appActions,o.appConfigUtils=e.appConfigUtils,o.classNames=e.classNames,o.createSelector=e.createSelector,o.css=e.css,o.defaultMessages=e.defaultMessages,o.extensionSpec=e.extensionSpec,o.focusElementInKeyboardMode=e.focusElementInKeyboardMode,o.getA11yProps=e.getA11yProps,o.getAppStore=e.getAppStore,o.getHoverStyle=e.getHoverStyle,o.getIndexFromProgress=e.getIndexFromProgress,o.getWidgetIdsInRootContainers=e.getWidgetIdsInRootContainers,o.hooks=e.hooks,o.i18n=e.i18n,o.jimuHistory=e.jimuHistory,o.loadArcGISJSAPIModule=e.loadArcGISJSAPIModule,o.lodash=e.lodash,o.moduleLoader=e.moduleLoader,o.motion=e.motion,o.polished=e.polished,o.portalUtils=e.portalUtils,o.prepareLocalVariants=e.prepareLocalVariants,o.prepareOneByOneTransition=e.prepareOneByOneTransition,o.prepareOneByOneVariants=e.prepareOneByOneVariants,o.translatedLocales=e.translatedLocales,o.utils=e.utils},function(e){n.jsx=e.jsx,n.jsxs=e.jsxs},function(e){i.Button=e.Button,i.DistanceUnits=e.DistanceUnits,i.FOCUSABLE_CONTAINER_CLASS=e.FOCUSABLE_CONTAINER_CLASS,i.FillType=e.FillType,i.Icon=e.Icon,i.Loading=e.Loading,i.LoadingType=e.LoadingType,i.Modal=e.Modal,i.ModalBody=e.ModalBody,i.PanelHeader=e.PanelHeader,i.Surface=e.Surface,i.Tab=e.Tab,i.Tabs=e.Tabs,i.Tooltip=e.Tooltip,i.Typography=e.Typography,i.defaultMessages=e.defaultMessages,i.getFocusableElements=e.getFocusableElements,i.hooks=e.hooks,i.styleUtils=e.styleUtils,i.useTrapFocusBySelector=e.useTrapFocusBySelector},function(e){a.getThemeModule=e.getThemeModule,a.mapping=e.mapping,a.styled=e.styled,a.withBuilderTheme=e.withBuilderTheme,a.withTheme=e.withTheme},function(e){l.utils=e.utils}],execute:function(){e((()=>{var e={462:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12"><path fill="#fff" fill-rule="evenodd" d="M12 0H7v1h4v4h1V0M0 12h5v-1H1V7H0v5" clip-rule="evenodd"></path></svg>'},1496:e=>{"use strict";e.exports=l},1888:e=>{"use strict";e.exports=a},2838:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m8.745 8 6.1 6.1a.527.527 0 1 1-.745.746L8 8.746l-6.1 6.1a.527.527 0 1 1-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 0 1 .746-.746l6.1 6.1 6.1-6.1a.527.527 0 0 1 .746.746z"></path></svg>'},2943:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M4.653 13.854a.485.485 0 0 1 0-.708L10.24 8 4.653 2.854a.485.485 0 0 1 0-.708.54.54 0 0 1 .738 0l5.956 5.5a.485.485 0 0 1 0 .708l-5.956 5.5a.54.54 0 0 1-.738 0" clip-rule="evenodd"></path></svg>'},3529:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M8 12c-2.667 0-5.667-1.333-7-4 1.333-2.667 4.333-4 7-4s5.667 1.333 7 4c-1.333 2.667-4.333 4-7 4m0-7c-2.618 0-4.578.967-6 3 1.422 2.033 3.382 3 6 3s4.578-.967 6-3c-1.422-2.033-3.382-3-6-3m0 5.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" clip-rule="evenodd"></path></svg>'},4321:e=>{"use strict";e.exports=i},5741:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M1 3h14v1H1zM9 7h6v1H9zM4.328 14.354a.5.5 0 0 0 .708 0l3.182-3.182a.5.5 0 1 0-.708-.708l-2.328 2.329V6h-1v6.793l-2.328-2.328a.5.5 0 1 0-.708.707z"></path></svg>'},7386:e=>{"use strict";e.exports=n},7568:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M11.347 2.146a.485.485 0 0 1 0 .708L5.76 8l5.587 5.146a.486.486 0 0 1 0 .708.54.54 0 0 1-.738 0l-5.956-5.5a.485.485 0 0 1 0-.708l5.956-5.5a.54.54 0 0 1 .738 0" clip-rule="evenodd"></path></svg>'},8416:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M1 3h14v1H1zM9 7h6v1H9zM5.036 6.146a.5.5 0 0 0-.708 0L1.146 9.328a.5.5 0 1 0 .708.708l2.328-2.329V14.5h1V7.707l2.328 2.329a.5.5 0 1 0 .708-.708z"></path></svg>'},8736:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path fill="#000" fill-rule="evenodd" d="M14 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2zM2 1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1" clip-rule="evenodd"></path><path fill="#000" fill-rule="evenodd" d="M20 8a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2zM8 7h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1" clip-rule="evenodd"></path></svg>'},8996:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M8 2.125 14.334 14H1.667zm-.882-.47a1 1 0 0 1 1.765 0l6.333 11.874A1 1 0 0 1 14.334 15H1.667a1 1 0 0 1-.882-1.47zM8 4.874a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0L8.9 5.87a.905.905 0 0 0-.9-.995m1 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0" clip-rule="evenodd"></path></svg>'},9238:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M13.146 13.847a.486.486 0 0 0 .708 0 .54.54 0 0 0 0-.738l-5.5-5.956a.485.485 0 0 0-.708 0l-5.5 5.956a.54.54 0 0 0 0 .738.485.485 0 0 0 .708 0L8 8.26zm0-5a.485.485 0 0 0 .708 0 .54.54 0 0 0 0-.738l-5.5-5.956a.485.485 0 0 0-.708 0l-5.5 5.956a.54.54 0 0 0 0 .738.485.485 0 0 0 .708 0L8 3.26z" clip-rule="evenodd"></path></svg>'},9244:e=>{"use strict";e.exports=o}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var s={};return(()=>{"use strict";r.r(s),r.d(s,{A11ySkip:()=>_o,AccordionLayoutViewer:()=>Wo,CLICK_TOLERANCE:()=>I,COLS_IN_ONE_ROW:()=>h,CONTEXT_MENU_ICON_SIZE:()=>f,CONTEXT_MENU_ITEM_SIZE:()=>y,ColumnLayoutViewer:()=>Vt,DEFAULT_AUTOPLAY_INTERVAL:()=>x,FixedLayoutViewer:()=>Nt,FlexRowLayoutViewer:()=>Uo,GridLayoutViewer:()=>xo,LayoutContext:()=>c,LayoutEntry:()=>gt,LayoutItem:()=>Et,LayoutItemSizeModes:()=>b,LayoutZIndex:()=>w,MIN_LAYOUT_ITEM_SIZE:()=>m,OrderAdjustType:()=>p,PageContext:()=>d,PageRenderer:()=>Yn,RowLayoutViewer:()=>Kt,SectionRenderer:()=>$t,ViewportVisibilityContext:()=>u,WidgetRenderer:()=>at,controlPanelUtils:()=>o,defaultMessages:()=>i,findLayoutBuilder:()=>ut,findLayoutViewer:()=>ct,init:()=>Kn,registerLayoutBuilder:()=>st,registerLayoutViewer:()=>dt,searchUtils:()=>t,utils:()=>e});var e={};r.r(e),r.d(e,{autoBindHandlers:()=>ie,calHeightOfLayoutItem:()=>Se,changeLayout:()=>Fe,contains:()=>ke,emptyFunc:()=>ne,expandStyleArray:()=>be,fromRatio:()=>ue,gcd:()=>Be,getActivePagePart:()=>Me,getAppConfig:()=>Ce,getCurrentDialogId:()=>je,getCurrentDialogRootLayoutId:()=>Pe,getCurrentPageId:()=>Te,getCurrentPageRootLayoutId:()=>$e,getCurrentSizeMode:()=>Re,getFooterRootLayoutId:()=>Oe,getHeaderRootLayoutId:()=>Le,getLayoutItemSizeMode:()=>ze,getMaximumId:()=>ae,getValueOfBBox:()=>se,intersects:()=>Ee,isFunctionalWidget:()=>he,isNumber:()=>re,isPercentage:()=>le,isRTL:()=>xe,isWidgetHasEmbeddedLayout:()=>ve,isWidgetPlaceholder:()=>ye,mapStateToLayoutItemProps:()=>pe,mapStateToLayoutProps:()=>ce,mapStateToWidgetProps:()=>ge,normalizeLinearUnit:()=>Ae,parseAspectRatio:()=>we,relativeClientRect:()=>Ie,replaceBoundingBox:()=>fe,shouldUseAspectRatio:()=>Ne,toRatio:()=>de,updateBoundingBoxProp:()=>me});var t={};r.r(t),r.d(t,{findLayoutId:()=>H,findLayoutItem:()=>S,findParentLayoutInfo:()=>C,getBlockAnchorPointsInPage:()=>ee,getBrowserSizeModeByLayoutId:()=>Y,getBrowserSizeModeByLayoutIdAndWidgetId:()=>X,getChildrenContents:()=>U,getContentContainerInfo:()=>A,getContentIdInLayoutItem:()=>R,getContentLayoutInfosInOneSizeMode:()=>_,getContentLayoutItem:()=>L,getContentRootContainerInfo:()=>z,getContentsInContainer:()=>B,getContentsInContainerRecursive:()=>F,getContentsInContainerRecursiveAdv:()=>W,getContentsInLayout:()=>T,getContentsInLayoutRecursive:()=>j,getContentsInLayoutWithRecursiveLayouts:()=>$,getContentsInTheSameContainer:()=>Z,getContentsInTheSameRootContainer:()=>Q,getLayoutIdsInLayoutItem:()=>P,getLayoutInfosByType:()=>k,getLayoutInfosHoldContent:()=>D,getLayoutItemIds:()=>O,getMapWidgets:()=>oe,getParentWidgetIdOfContent:()=>G,getPendingLayoutItemsFromOtherSizeMode:()=>Ye,getPendingLayoutItemsFromOtherSizeModeInDialog:()=>_e,getPendingLayoutItemsFromOtherSizeModeInPage:()=>Ge,getPendingLayoutItemsInDialog:()=>Ue,getPendingLayoutItemsInLayoutWithDeep:()=>Xe,getPendingLayoutItemsInPage:()=>De,getRelatedLayoutInfosInWidgetByLayoutInfo:()=>J,getRelatedLayoutItemsInWidgetByLayoutInfo:()=>K,getRootContainerInfoOfLayout:()=>N,getScreenAnchorPointsInPage:()=>te,getSectionInfo:()=>Ve,getVisibleWidgetsInLayoutRecursive:()=>M,getWidgetIdThatUseTheLayoutId:()=>E});var o={};r.r(o),r.d(o,{convertToStyle:()=>Mn,findPageRelatedControllerIds:()=>Tn,panelTransformStyle:()=>jn,useHandleLastVirtualNodeFocus:()=>Pn});var n=r(9244);const i={previousView:"Previous view",nextView:"Next view",originTL:"Top left as origin",originTR:"Top right as origin",originBL:"Bottom left as origin",originBR:"Bottom right as origin",alignLeft:"Align left",alignRight:"Align right",alignTop:"Align top",alignCenter:"Align center",alignHCenter:"Horizontal center",alignVCenter:"Vertical center",alignBottom:"Align bottom",alignStretch:"Align stretch",sendBackward:"Send backward",bringForward:"Bring forward",sendToBack:"Send to back",bringToFront:"Bring to front",zoomoutFixed:"Zoom out fixed",order:"Order",moveToLeft:"Move to left",moveToRight:"Move to right",moveToTop:"Move to top",moveToBottom:"Move to bottom",addView:"New view",duplicateScreen:"Duplicate screen",deleteScreen:"Delete screen",applyToFirstPanel:"Apply to the first panel",deleteView:"Delete view",duplicateView:"Duplicate view",insertABlock:"Insert block",insertAScreenGroup:"Insert screen group",moveup:"Move up",movedown:"Move down",chooseTemplate:"Choose a {type} template",chooseHeaderTemplate:"Choose a header template",chooseFooterTemplate:"Choose a footer template",dropWidgetToAdd:"Or drag a widget here",snapToLeft:"Snap to left",snapToTop:"Snap to top",snapToBottom:"Snap to bottom",snapToRight:"Snap to right",fullWidth:"Full width",fullHeight:"Full height",fullSize:"Full size",restoreSize:"Restore size",pendingTip:"Move to the pending list",setting:"Settings",dragToMove:"Drag to move {label}",lockLayout:"Lock position and size",unlockLayout:"Unlock position and size",editHeader:"Edit header",editFooter:"Edit footer",transform:"Transform",rotation:"Rotation",angle:"Angle",floating:"Pin",sinking:"Unpin",floatingArea:"Floating area",changeToAuto:"Change to auto",changeToCustom:"Change to custom",positionType:"Position type",sticky:"Sticky",fixed:"Fixed",flow:"Flow",stack:"Stack",fixedAtTop:"Floating at the top when scrolling",actNormal:"Act as normal widget",hideInDesignView:"Click to hide in design view",showInDesignView:"Click to show in design view",unlockGridItem:"Unlock this widget to reorganize its internal widgets.",lockGridItem:"Lock this widget.",activeViewTip:"Section. Active view {viewLabel}.",widgetLabel:"Widget label"};var a=function(e,t,o,n){return new(o||(o=Promise))(function(i,a){function l(e){try{s(n.next(e))}catch(e){a(e)}}function r(e){try{s(n.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o(function(e){e(t)})).then(l,r)}s((n=n.apply(e,t||[])).next())})};function l(){return a(this,void 0,void 0,function*(){let e=(0,n.getAppStore)().getState().appContext.locale;return e=n.i18n.getLocaleToLoad(e,n.translatedLocales),e?yield n.i18n.loadLocaleMessages("jimu-layouts/lib/translations",e).then(e=>((0,n.getAppStore)().dispatch(n.appActions.i18nMessagesLoaded("jimu-layouts",e)),n.i18n.resetIntls(),e)):Promise.resolve(i)})}const d=n.React.createContext({viewOnly:!0}),u=n.React.createContext(!0),c=(n.React.createContext(""),n.React.createContext({}));var p,g=r(7386),v=r(4321);!function(e){e[e.BringForward=0]="BringForward",e[e.SendBackward=1]="SendBackward",e[e.BringToFront=2]="BringToFront",e[e.SendToBack=3]="SendToBack"}(p||(p={}));const h=12,y=28,f=16,m=16,I=5,x=3;var w,b;function S(e,t){var o,n,i;if(!t)return null;const{layoutId:a,layoutItemId:l}=t;return null===(i=null===(n=null===(o=e.layouts)||void 0===o?void 0:o[a])||void 0===n?void 0:n.content)||void 0===i?void 0:i[l]}function C(e,t,o){var i,a,l,r,s,d,u,c,p,g;const{layoutId:v}=e,h=t.layouts[v];switch(null===(i=null==h?void 0:h.parent)||void 0===i?void 0:i.type){case n.LayoutParentType.View:{const e=t.views[h.parent.id],n=t.sections[e.parent];return 1===(null===(l=null===(a=null==n?void 0:n.parent)||void 0===a?void 0:a[o])||void 0===l?void 0:l.length)?n.parent[o][0]:(null===(s=null===(r=null==n?void 0:n.parent)||void 0===r?void 0:r[o])||void 0===s?void 0:s.length)>1?C(n.parent[o][0],t,o):null}case n.LayoutParentType.Widget:{const e=t.widgets[h.parent.id];return 1===(null===(u=null===(d=null==e?void 0:e.parent)||void 0===d?void 0:d[o])||void 0===u?void 0:u.length)?e.parent[o][0]:(null===(p=null===(c=null==e?void 0:e.parent)||void 0===c?void 0:c[o])||void 0===p?void 0:p.length)>1?C(e.parent[o][0],t,o):null}case n.LayoutParentType.Screen:{const e=t.screens[h.parent.id];return null===(g=t.screenGroups[e.parent].parent)||void 0===g?void 0:g[o]}default:return null}}function R(e){switch(e.type){case n.LayoutItemType.Widget:return"string"==typeof e.widgetId?e.widgetId:null;case n.LayoutItemType.Section:return"string"==typeof e.sectionId?e.sectionId:null;case n.LayoutItemType.ScreenGroup:return"string"==typeof e.screenGroupId?e.screenGroupId:null;default:return null}}function T(e,t,o=!1){return(null==e?void 0:e.content)?Object.keys(e.content).filter(n=>e.content[n].type===t&&!!R(e.content[n])&&(o||!e.content[n].isPending)).map(t=>R(e.content[t])):[]}function j(e,t,o,i,a=!1){let l=[];const r=T(e.layouts[t],n.LayoutItemType.Widget,a),s=T(e.layouts[t],n.LayoutItemType.Section,a),d=T(e.layouts[t],n.LayoutItemType.ScreenGroup,a);o===n.LayoutItemType.Widget?l=l.concat(r):o===n.LayoutItemType.Section?l=l.concat(s):o===n.LayoutItemType.ScreenGroup&&(l=l.concat(d));return r.filter(t=>{var o,i,a,l,r;return(null===(i=null===(o=e.widgets[t])||void 0===o?void 0:o.manifest)||void 0===i?void 0:i.widgetType)===n.WidgetType.Layout||(null===(r=null===(l=null===(a=e.widgets[t])||void 0===a?void 0:a.manifest)||void 0===l?void 0:l.properties)||void 0===r?void 0:r.hasEmbeddedLayout)}).forEach(t=>{var n;Object.keys(null!==(n=e.widgets[t].layouts)&&void 0!==n?n:{}).forEach(n=>{const r=H(e.widgets[t].layouts[n],i,e.mainSizeMode);l=l.concat(j(e,r,o,i,a))})}),s.forEach(t=>{var n,r;null===(r=null===(n=e.sections)||void 0===n?void 0:n[t])||void 0===r||r.views.forEach(t=>{const n=H(e.views[t].layout,i,e.mainSizeMode);e.views[t]&&n&&(l=l.concat(j(e,n,o,i,a)))})}),d.forEach(t=>{var n,r;null===(r=null===(n=e.screenGroups)||void 0===n?void 0:n[t])||void 0===r||r.screens.forEach(t=>{var n,r,s,d,u;const c=H(null===(r=null===(n=e.screens)||void 0===n?void 0:n[t])||void 0===r?void 0:r.main.layout,i,e.mainSizeMode);c&&(l=l.concat(j(e,c,o,i,a)));const p=H(null===(u=null===(d=null===(s=e.screens)||void 0===s?void 0:s[t])||void 0===d?void 0:d.panel)||void 0===u?void 0:u.layout,i,e.mainSizeMode);p&&(l=l.concat(j(e,p,o,i,a)))})}),l}function M(e,t,o,i){const a=e.appConfig,l=(t,o,n)=>{var i,l;if(null===(l=null===(i=e.widgetsState[t])||void 0===i?void 0:i.hiddenLayoutIds)||void 0===l?void 0:l.includes(o))return[];const r=a.layouts[o];if(!r||!r.content)return[];const s=[];return Object.keys(r.content).forEach(i=>{var a,l,d;const u=r.content[i];if(u.type===n&&!u.isPending&&R(u)){if(null===(d=null===(l=null===(a=e.widgetsState[t])||void 0===a?void 0:a.hiddenLayoutItems)||void 0===l?void 0:l[o])||void 0===d?void 0:d.includes(i))return;s.push(R(u))}}),s};let r=[],s=[],d=[],u=[];i?(s=l(i,t,n.LayoutItemType.Widget),d=l(i,t,n.LayoutItemType.Section),u=l(i,t,n.LayoutItemType.ScreenGroup)):(s=T(a.layouts[t],n.LayoutItemType.Widget),d=T(a.layouts[t],n.LayoutItemType.Section),u=T(a.layouts[t],n.LayoutItemType.ScreenGroup)),r=r.concat(s);const c=s.filter(e=>{var t,o,i,l,r;return(null===(o=null===(t=a.widgets[e])||void 0===t?void 0:t.manifest)||void 0===o?void 0:o.widgetType)===n.WidgetType.Layout||(null===(r=null===(l=null===(i=a.widgets[e])||void 0===i?void 0:i.manifest)||void 0===l?void 0:l.properties)||void 0===r?void 0:r.hasEmbeddedLayout)});return c.forEach(n=>{var i,l,s;(null===(l=null===(i=e.widgetsState[n])||void 0===i?void 0:i.hiddenLayoutIds)||void 0===l?void 0:l.includes(t))||Object.keys(null!==(s=a.widgets[n].layouts)&&void 0!==s?s:{}).forEach(t=>{const i=H(a.widgets[n].layouts[t],o,a.mainSizeMode);r=r.concat(M(e,i,o,n))})}),d.forEach(t=>{var n,i;const l=a.sections[t],s=(null===(i=null===(n=e.appRuntimeInfo.sectionNavInfos)||void 0===n?void 0:n[t])||void 0===i?void 0:i.currentViewId)||l.views[0],d=H(a.views[s].layout,o,a.mainSizeMode);a.views[s]&&d&&(r=r.concat(M(e,d,o)))}),u.forEach(t=>{var n,i;null===(i=null===(n=a.screenGroups)||void 0===n?void 0:n[t])||void 0===i||i.screens.forEach(t=>{var n,i,l,s,d;const u=H(null===(i=null===(n=a.screens)||void 0===n?void 0:n[t])||void 0===i?void 0:i.main.layout,o,a.mainSizeMode);u&&(r=r.concat(M(e,u,o)));const c=H(null===(d=null===(s=null===(l=a.screens)||void 0===l?void 0:l[t])||void 0===s?void 0:s.panel)||void 0===d?void 0:d.layout,o,a.mainSizeMode);c&&(r=r.concat(M(e,c,o)))})}),r}function P(e,t,o){var i;const a=e.appConfig,l=null===(i=a.layouts[t.layoutId])||void 0===i?void 0:i.content[t.layoutItemId];if(!l)return[];const r=[];if(l.type===n.LayoutItemType.Widget&&l.widgetId){const t=a.widgets[l.widgetId];t.layouts&&Object.keys(t.layouts).forEach(n=>{var i,s;const d=H(t.layouts[n],e.browserSizeMode,a.mainSizeMode);o&&(null===(s=null===(i=e.widgetsState[l.widgetId])||void 0===i?void 0:i.hiddenLayoutIds)||void 0===s?void 0:s.includes(d))||r.push(d)})}else if(l.type===n.LayoutItemType.Section&&l.sectionId){const t=a.sections[l.sectionId];t.views.forEach(n=>{var i,s;const d=H(a.views[n].layout,e.browserSizeMode,a.mainSizeMode),u=(null===(s=null===(i=e.appRuntimeInfo.sectionNavInfos)||void 0===i?void 0:i[l.sectionId])||void 0===s?void 0:s.currentViewId)||t.views[0];o&&n!==u||r.push(d)})}else if(l.type===n.LayoutItemType.ScreenGroup&&l.screenGroupId){const t=a.screenGroups[l.screenGroupId];null==t||t.screens.forEach(t=>{var o,n,i,l,s;const d=H(null===(n=null===(o=a.screens)||void 0===o?void 0:o[t])||void 0===n?void 0:n.main.layout,e.browserSizeMode,a.mainSizeMode);d&&r.push(d);const u=H(null===(s=null===(l=null===(i=a.screens)||void 0===i?void 0:i[t])||void 0===l?void 0:l.panel)||void 0===s?void 0:s.layout,e.browserSizeMode,a.mainSizeMode);u&&r.push(u)})}return r}function $(e,t,o,i,a=!1){let l=[];const r=T(e.layouts[t],n.LayoutItemType.Widget,a),s=T(e.layouts[t],n.LayoutItemType.Section,a),d=T(e.layouts[t],n.LayoutItemType.ScreenGroup,a);l=o===n.LayoutItemType.Widget?l.concat(r):o===n.LayoutItemType.ScreenGroup?l.concat(d):l.concat(s);return r.filter(t=>e.widgets&&e.widgets[t]&&(e.widgets[t].manifest.widgetType===n.WidgetType.Layout||e.widgets[t].manifest.properties.hasEmbeddedLayout)).forEach(t=>{var n;Object.keys(null!==(n=e.widgets[t].layouts)&&void 0!==n?n:{}).forEach(n=>{const r=H(e.widgets[t].layouts[n],i,e.mainSizeMode);l=l.concat($(e,r,o,i,a))})}),l}function L(e,t,o){if(!(null==e?void 0:e.content))return null;const n=Object.keys(e.content).find(n=>e.content[n].type===o&&(e.content[n].widgetId===t||e.content[n].sectionId===t||e.content[n].screenGroupId===t)&&!e.content[n].isPending);return e.content[n]}function O(e,t,o=!1){const n=e.layouts[t];return(null==n?void 0:n.content)?o?Object.keys(n.content):Object.keys(n.content).filter(e=>!n.content[e].isPending):[]}function k(e,t,o=!1){return(null==e?void 0:e.content)?Object.keys(e.content).filter(n=>e.content[n].type===t&&!!R(e.content[n])&&(o||!e.content[n].isPending)).map(t=>({layoutId:e.id,layoutItemId:t})):[]}function E(e,t){var o;const i=e.layouts[t];return(null===(o=null==i?void 0:i.parent)||void 0===o?void 0:o.type)===n.LayoutParentType.Widget?i.parent.id:null}function A(e,t,o,i,a=!1){var l;const r=V(e,t,o,i,a);if(r){const t=e.layouts[r.layoutId];switch(null===(l=t.parent)||void 0===l?void 0:l.type){case n.LayoutParentType.Page:return{type:n.ContainerType.Page,id:t.parent.id};case n.LayoutParentType.Dialog:return{type:n.ContainerType.Dialog,id:t.parent.id};case n.LayoutParentType.Header:return{type:n.ContainerType.Header,id:"header"};case n.LayoutParentType.Footer:return{type:n.ContainerType.Footer,id:"footer"};case n.LayoutParentType.View:return{type:n.ContainerType.View,id:t.parent.id};case n.LayoutParentType.Screen:return{type:e.screens[t.parent.id].main.layout[i]===r.layoutId?n.ContainerType.ScreenMain:n.ContainerType.ScreenPanel,id:t.parent.id};case n.LayoutParentType.Widget:return A(e,t.parent.id,o,i,a)}}return null}function z(e,t,o,n,i=!1){let a=V(e,t,o,n,i),l=n;if(a||(a=V(e,t,o,e.mainSizeMode,i),l=e.mainSizeMode),a)return N(e,a.layoutId,l)}function N(e,t,o){var i;let a=e.layouts[t];for(;(null==a?void 0:a.parent)&&[n.LayoutParentType.Screen,n.LayoutParentType.View,n.LayoutParentType.Widget].includes(a.parent.type);){const n=C({layoutId:t},e,o);t=null==n?void 0:n.layoutId,a=e.layouts[t]}switch(null===(i=null==a?void 0:a.parent)||void 0===i?void 0:i.type){case n.LayoutParentType.Dialog:return{type:n.ContainerType.Dialog,id:a.parent.id};case n.LayoutParentType.Page:return{type:n.ContainerType.Page,id:a.parent.id};case n.LayoutParentType.Header:return{type:n.ContainerType.Header,id:"header"};case n.LayoutParentType.Footer:return{type:n.ContainerType.Footer,id:"footer"};default:return null}}function B(e,t,o,i,a=!1){var l,r,s,d,u,c;let p;switch(t.type){case n.ContainerType.Page:return p=H(null===(r=null===(l=e.pages)||void 0===l?void 0:l[t.id])||void 0===r?void 0:r.layout,i,e.mainSizeMode),p?$(e,p,o,i,a):[];case n.ContainerType.Header:return p=H(null===(s=e.header)||void 0===s?void 0:s.layout,i,e.mainSizeMode),p?$(e,p,o,i,a):[];case n.ContainerType.Footer:return p=H(null===(d=e.footer)||void 0===d?void 0:d.layout,i,e.mainSizeMode),p?$(e,p,o,i,a):[];case n.ContainerType.View:return p=H(null===(c=null===(u=e.views)||void 0===u?void 0:u[t.id])||void 0===c?void 0:c.layout,i,e.mainSizeMode),p?$(e,p,o,i,a):[];case n.ContainerType.Dialog:return p=H(e.dialogs[t.id].layout,i,e.mainSizeMode),p?$(e,p,o,i,a):[];case n.ContainerType.ScreenMain:case n.ContainerType.ScreenPanel:if(!e.screens||!e.screens[t.id])return[];const g=H(e.screens[t.id].main.layout,i,e.mainSizeMode);if(!g)return[];const v=$(e,g,o,i,a);if(e.screens[t.id].panel){const n=$(e,H(e.screens[t.id].panel.layout,i,e.mainSizeMode),o,i,a);return v.concat(n)}return v}}function F(e,t,o,i,a=!1){var l,r,s,d,u,c;let p;switch(t.type){case n.ContainerType.Page:return p=H(null===(r=null===(l=e.pages)||void 0===l?void 0:l[t.id])||void 0===r?void 0:r.layout,i,e.mainSizeMode),p?j(e,p,o,i,a):[];case n.ContainerType.Header:return p=H(null===(s=e.header)||void 0===s?void 0:s.layout,i,e.mainSizeMode),p?j(e,p,o,i,a):[];case n.ContainerType.Footer:return p=H(null===(d=e.footer)||void 0===d?void 0:d.layout,i,e.mainSizeMode),p?j(e,p,o,i,a):[];case n.ContainerType.View:return p=H(null===(c=null===(u=e.views)||void 0===u?void 0:u[t.id])||void 0===c?void 0:c.layout,i,e.mainSizeMode),p?j(e,p,o,i,a):[];case n.ContainerType.Dialog:return p=H(e.dialogs[t.id].layout,i,e.mainSizeMode),p?j(e,p,o,i,a):[];case n.ContainerType.ScreenMain:case n.ContainerType.ScreenPanel:if(!e.screens||!e.screens[t.id])return[];const g=H(e.screens[t.id].main.layout,i,e.mainSizeMode);if(!g)return[];const v=j(e,g,o,i);if(e.screens[t.id].panel){const n=j(e,H(e.screens[t.id].panel.layout,i,e.mainSizeMode),o,i);return v.concat(n)}return v}}function W(e,t,o,i,a){const l=t=>{let l=[];return l=a.includeOtherSizeMode?l.concat(F(e,t,o,n.BrowserSizeMode.Large,a.includePending),F(e,t,o,n.BrowserSizeMode.Medium,a.includePending),F(e,t,o,n.BrowserSizeMode.Small,a.includePending)):F(e,t,o,i,a.includePending),l=Array.from(new Set(l)),l};if(t.type===n.ContainerType.Dialog)return l(t);if(t.type===n.ContainerType.Page){const o=e.pages[t.id];let i=l(t);return o.header&&(i=i.concat(l({type:n.ContainerType.Header,id:"header"}))),o.footer&&(i=i.concat(l({type:n.ContainerType.Footer,id:"footer"}))),i=Array.from(new Set(i)),i}if(t.type===n.ContainerType.Header){const o=e.pages[a.currentPageId];let i=l(t).concat(l({type:n.ContainerType.Page,id:a.currentPageId}));return(null==o?void 0:o.footer)&&(i=i.concat(l({type:n.ContainerType.Footer,id:"footer"}))),i=Array.from(new Set(i)),i}if(t.type===n.ContainerType.Footer){const o=e.pages[a.currentPageId];let i=l(t).concat(l({type:n.ContainerType.Page,id:a.currentPageId}));return(null==o?void 0:o.header)&&(i=i.concat(l({type:n.ContainerType.Header,id:"header"}))),i=Array.from(new Set(i)),i}}function H(e,t,o){return e?e[t]||e[o]:null}function V(e,t,o,i,a=!0){var l,r,s,d,u;switch(o){case n.LayoutItemType.ScreenGroup:{const o=null===(l=e.screenGroups[t].parent)||void 0===l?void 0:l[i],n=S(e,o);return a||!(null==n?void 0:n.isPending)?o:null}case n.LayoutItemType.Section:case n.LayoutItemType.Widget:{let l;if(o===n.LayoutItemType.Widget&&(l=e.widgets[t]),o===n.LayoutItemType.Section&&(l=e.sections[t]),1===(null===(s=null===(r=null==l?void 0:l.parent)||void 0===r?void 0:r[i])||void 0===s?void 0:s.length)){const t=l.parent[i][0],o=S(e,t);return a||!(null==o?void 0:o.isPending)?t:null}if((null===(u=null===(d=null==l?void 0:l.parent)||void 0===d?void 0:d[i])||void 0===u?void 0:u.length)>1){const t=l.parent[i][0],o=e.layouts[t.layoutId];if(null==o?void 0:o.parent)return V(e,o.parent.id,n.LayoutItemType.Widget,i,a)}}default:return null}}function D(e,t,o,i){switch(t){case n.LayoutItemType.ScreenGroup:{const t=e.screenGroups[o];if(t.parent)return i?[t.parent[i]]:Object.values(t.parent)}case n.LayoutItemType.Section:case n.LayoutItemType.Widget:{let a;if(t===n.LayoutItemType.Widget&&(a=e.widgets[o]),t===n.LayoutItemType.Section&&(a=e.sections[o]),null==a?void 0:a.parent){if(i)return a.parent[i];const e=[];return Object.values(a.parent).forEach(t=>{e.push(...t)}),e}}default:return[]}}function G(e,t,o,i){var a,l,r,s,d,u,c;let p;if(o===n.LayoutItemType.Widget){const o=e.widgets[t];p=null===(r=null===(l=null===(a=null==o?void 0:o.parent)||void 0===a?void 0:a[i])||void 0===l?void 0:l[0])||void 0===r?void 0:r.layoutId}if(o===n.LayoutItemType.Section){const o=e.sections[t];p=null===(u=null===(d=null===(s=null==o?void 0:o.parent)||void 0===s?void 0:s[i])||void 0===d?void 0:d[0])||void 0===u?void 0:u.layoutId}if(p){const t=e.layouts[p];if((null===(c=null==t?void 0:t.parent)||void 0===c?void 0:c.type)===n.LayoutParentType.Widget)return t.parent.id}return null}function U(e,t,o,n){const i=e.widgets[t];if(!i.layouts)return[];let a=[];return Object.keys(i.layouts).forEach(t=>{Object.keys(i.layouts[t]).forEach(l=>{const r=e.layouts[i.layouts[t][l]];a=a.concat(T(r,o,n))})}),Array.from(new Set(a))}function _(e,t,o,i){var a,l,r;switch(o){case n.LayoutItemType.ScreenGroup:{const o=e.screenGroups[t];if(null===(a=o.parent)||void 0===a?void 0:a[i])return[o.parent[i]]}case n.LayoutItemType.Section:case n.LayoutItemType.Widget:{let a;if(o===n.LayoutItemType.Widget&&(a=e.widgets[t]),o===n.LayoutItemType.Section&&(a=e.sections[t]),(null===(r=null===(l=null==a?void 0:a.parent)||void 0===l?void 0:l[i])||void 0===r?void 0:r.length)>0)return a.parent[i]}default:return[]}}function X(e,t,o){const n=e.widgets[o];if(!n)return;let i;return Object.keys(n.layouts).find(e=>!!Object.keys(n.layouts[e]).find(o=>n.layouts[e][o]===t&&(i=o,!0))),i}function Y(e,t){return n.appConfigUtils.getSizeModeOfALayout(e,t)}function J(e,t,o,i){if(!e.widgets[o])return[];const a=e.layouts[t.layoutId]&&e.layouts[t.layoutId].content&&e.layouts[t.layoutId].content[t.layoutItemId];if(!a)return[];const l=a.type;let r;return l===n.LayoutItemType.Section?r=a.sectionId:l===n.LayoutItemType.Widget&&(r=a.widgetId),r?q(e,r,l,o,i):function(e,t,o){const n=e.widgets[t];if(!n)return!1;let i=!1;return n.layouts&&Object.keys(n.layouts).some(t=>Object.keys(n.layouts[t]).some(a=>{const l=n.layouts[t][a];return O(e,l,!0).some(e=>o.layoutId===l&&o.layoutItemId===e&&(i=!0,!0))})),i}(e,o,t)?[t]:[]}function K(e,t,o,n){return J(e,t,o,n).map(t=>e.layouts[t.layoutId][t.layoutItemId])}function q(e,t,o,i,a){const l=e.widgets[i];if(!l||!t)return[];const r=[];return l.layouts&&Object.keys(l.layouts).forEach(i=>{const s=l.layouts[i][a],d=e.layouts[s];d&&d.content&&Object.keys(d.content).forEach(i=>{const l=d.content[i];if(l.type!==o||l.widgetId!==t&&l.sectionId!==t&&l.screenGroupId!==t){if(l.type===n.LayoutItemType.Widget){const i=e.widgets[l.widgetId];i&&i.manifest.widgetType===n.WidgetType.Layout&&r.push(...q(e,t,o,i.id,a))}}else r.push({layoutId:d.id,layoutItemId:l.id})})}),r}function Z(e,t,o,n,i,a=!1){const l=A(e,t,o,i,a);return l?B(e,l,n,i,a):[]}function Q(e,t,o,n,i,a=!1){const l=z(e,t,o,i,a);return l?F(e,l,n,i,a):[]}function ee(e,t,o){var i,a;const l=e.pages[t],r=null===(i=null==l?void 0:l.layout)||void 0===i?void 0:i[o],s=e.layouts[r],d=[];return(null==s?void 0:s.type)===n.LayoutType.FlowLayout&&Object.keys(null!==(a=s.content)&&void 0!==a?a:{}).sort().forEach(t=>{var o;const i=s.content[t];if(!i.isPending&&!(null===(o=i.setting)||void 0===o?void 0:o.isFloating)&&i.type===n.LayoutItemType.Widget){const o=function(e,t){const{layoutId:o,layoutItemId:n}=t,i=e.layouts[o].content[n],a=e.widgets[i.widgetId];if(a)return{label:a.label,id:`${o}_block_${n}`};return null}(e,{layoutId:r,layoutItemId:t});o&&d.push(o)}}),d}function te(e,t,o){var i,a;const l=e.pages[t],r=null===(i=null==l?void 0:l.layout)||void 0===i?void 0:i[o],s=e.layouts[r],d=[];return(null==s?void 0:s.type)===n.LayoutType.FlowLayout&&Object.keys(null!==(a=s.content)&&void 0!==a?a:{}).sort().forEach(t=>{var o;const i=s.content[t];if(!i.isPending&&!(null===(o=i.setting)||void 0===o?void 0:o.isFloating)&&i.type===n.LayoutItemType.ScreenGroup){const t=e.screenGroups[i.screenGroupId],o=[];null==t||t.screens.forEach(t=>{const n=function(e,t,o){const n=e.screens[o];if(n)return{label:n.label,id:`${t}_screen_${o}`};return null}(e,r,t);n&&o.push(n)}),d.push({id:t.id,label:t.label,screens:o})}}),d}function oe(e,t,o,i){const a=[],l={id:i,type:o,maps:W(e,{type:o,id:i},n.LayoutItemType.Widget,t,{includePending:!1,includeOtherSizeMode:!1}).filter(t=>e.widgets[t].manifest.properties.canCreateMapView)};return a.push(l),Object.keys(e.pages).forEach(o=>{if(o===i)return;const l={id:o,type:n.ContainerType.Page,maps:F(e,{id:o,type:n.ContainerType.Page},n.LayoutItemType.Widget,t).filter(t=>e.widgets[t].manifest.properties.canCreateMapView)};a.push(l)}),Object.keys(e.dialogs||{}).forEach(o=>{if(o===i)return;const l={id:o,type:n.ContainerType.Dialog,maps:F(e,{id:o,type:n.ContainerType.Dialog},n.LayoutItemType.Widget,t).filter(t=>e.widgets[t].manifest.properties.canCreateMapView)};a.push(l)}),a}!function(e){e.Auto="auto",e[e.Normal=0]="Normal",e[e.BoundaryDropArea=10]="BoundaryDropArea",e[e.DragMoveTip=20]="DragMoveTip",e[e.HandlerTools=30]="HandlerTools",e[e.DraggingItem=40]="DraggingItem"}(w||(w={})),function(e){e.Auto="AUTO",e.Stretch="STRETCH",e.Custom="CUSTOM"}(b||(b={}));const ne=()=>null;function ie(e,t){t.forEach(t=>{e[t]&&(e[t]=e[t].bind(e))})}function ae(e){let t=-1;return e.content&&Object.keys(e.content).forEach(e=>{const o=parseInt(e,10);o>t&&(t=o)}),t}function le(e){return/^-?\d*(\.\d+)?%$/.test(e)}function re(e){const t=parseFloat(e);return!isNaN(t)&&isFinite(t)}function se(e,t){return null==(null==e?void 0:e[t])?null:"string"==typeof e[t]?e[t]:re(e[t])?`${Math.round(parseFloat(e[t]))}px`:null}function de(e,t){return`${(100*e/t).toFixed(1)}%`}function ue(e,t){return parseFloat(`${e}`)*t/100}const ce=(0,n.createSelector)([e=>e.appConfig.mainSizeMode,e=>e.browserSizeMode,(e,t)=>{var o,i,a,l,r;let s;if(e.browserSizeMode===e.appConfig.mainSizeMode)s=!0;else{let l;(null===(o=t.layouts)||void 0===o?void 0:o[e.browserSizeMode])?l=e.browserSizeMode:(null===(i=t.layouts)||void 0===i?void 0:i[e.appConfig.mainSizeMode])&&(l=e.appConfig.mainSizeMode);const r=null===(a=t.layouts)||void 0===a?void 0:a[l],d=N(e.appConfig,r,l);if((null==d?void 0:d.type)===n.ContainerType.Header)s=null!=e.appConfig.header.layout[e.browserSizeMode];else if((null==d?void 0:d.type)===n.ContainerType.Footer)s=null!=e.appConfig.footer.layout[e.browserSizeMode];else if((null==d?void 0:d.type)===n.ContainerType.Dialog){s=null!=e.appConfig.dialogs[d.id].layout[e.browserSizeMode]}else if((null==d?void 0:d.type)===n.ContainerType.Page){s=null!=e.appConfig.pages[d.id].layout[e.browserSizeMode]}}if(s&&(null===(l=t.layouts)||void 0===l?void 0:l[e.browserSizeMode])){const o=t.layouts[e.browserSizeMode];return e.appConfig.layouts[o]}const d=null===(r=t.layouts)||void 0===r?void 0:r[e.appConfig.mainSizeMode];return e.appConfig.layouts[d]}],(e,t,o)=>({mainSizeMode:e,browserSizeMode:t,layout:o})),pe=(0,n.createSelector)([(e,t)=>{var o,n,i;const{layoutId:a,layoutItemId:l}=t;return null===(i=null===(n=null===(o=e.appConfig.layouts)||void 0===o?void 0:o[a])||void 0===n?void 0:n.content)||void 0===i?void 0:i[l]},(e,t)=>{var o,i,a,l,r,s;const{layoutId:d,layoutItemId:u}=t,c=null===(a=null===(i=null===(o=e.appConfig.layouts)||void 0===o?void 0:o[d])||void 0===i?void 0:i.content)||void 0===a?void 0:a[u];if((null==c?void 0:c.type)===n.LayoutItemType.Widget&&c.widgetId){const t=e.appConfig.widgets[c.widgetId];return null!==(s=null===(r=null===(l=null==t?void 0:t.manifest)||void 0===l?void 0:l.properties)||void 0===r?void 0:r.watchViewportVisibility)&&void 0!==s&&s}return!1},e=>{var t;return null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.selection},e=>{var t;return null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.animationPreview},e=>{var t;return null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.hoverPreview},(e,t)=>t.layoutId],(e,t,o,n,i,a)=>{var l;if(!e)return{layoutItem:null,selected:!1};let r=!1;const s=null!==(l=e.isPending)&&void 0!==l&&l;o&&(r=o.layoutId===a&&o.layoutItemId===e.id);const d={selected:r,watchViewportVisibility:t,layoutItem:s?null:e,autoScroll:r?o.autoScroll:void 0};if(r&&(null==n?void 0:n.layoutInfo)){const{layoutId:t,layoutItemId:o}=n.layoutInfo;d.animationPreview=t===a&&o===e.id,d.playMode=d.animationPreview?n.playMode:null,d.previewId=d.animationPreview?n.id:null}else if(r&&(null==i?void 0:i.layoutInfo)){const{layoutId:t,layoutItemId:o}=i.layoutInfo;d.hoverPreview=t===a&&o===e.id,d.previewId=d.hoverPreview?i.id:null}return d}),ge=(0,n.createSelector)([(e,t)=>{var o,i,a;const{layoutId:l,layoutItemId:r}=t,s=null===(a=null===(i=null===(o=e.appConfig.layouts)||void 0===o?void 0:o[l])||void 0===i?void 0:i.content)||void 0===a?void 0:a[r];if((null==s?void 0:s.type)===n.LayoutItemType.Widget&&s.widgetId)return e.appConfig.widgets[s.widgetId]},(e,t)=>{var o,i,a,l;const{layoutId:r,layoutItemId:s}=t,d=null===(a=null===(i=null===(o=e.appConfig.layouts)||void 0===o?void 0:o[r])||void 0===i?void 0:i.content)||void 0===a?void 0:a[s];if((null==d?void 0:d.type)===n.LayoutItemType.Widget&&!d.widgetId)return null===(l=d.setting)||void 0===l?void 0:l.placeholderStyle},(e,t)=>{var o,i,a;const{layoutId:l,layoutItemId:r}=t,s=null===(a=null===(i=null===(o=e.appConfig.layouts)||void 0===o?void 0:o[l])||void 0===i?void 0:i.content)||void 0===a?void 0:a[r];if((null==s?void 0:s.type)===n.LayoutItemType.Widget&&s.widgetId)return e.widgetsRuntimeInfo[s.widgetId]},(e,t)=>{var o,i,a;const{layoutId:l,layoutItemId:r}=t,s=null===(a=null===(i=null===(o=e.appConfig.layouts)||void 0===o?void 0:o[l])||void 0===i?void 0:i.content)||void 0===a?void 0:a[r];if((null==s?void 0:s.type)===n.LayoutItemType.Widget&&!s.widgetId)return e.widgetsState[s.widgetId]},(e,t)=>{var o,i;const{layoutId:a}=t,l=null===(o=e.appConfig.layouts)||void 0===o?void 0:o[a];if((null===(i=l.parent)||void 0===i?void 0:i.type)===n.LayoutParentType.Widget){const t=l.parent.id,o=e.appConfig.widgets[t];return/widgets\/common\/controller\/?/.test(o.uri)}return!1}],(e,t,o,i,a)=>{var l,r,s,d,u,c,p,g,v,h,y,f,m,I,x,w,b,S,C;const R=null===(r=null===(l=null==e?void 0:e.manifest)||void 0===l?void 0:l.properties)||void 0===r?void 0:r.supportInlineEditing;return{hasEmbeddedLayout:(null===(d=null===(s=null==e?void 0:e.manifest)||void 0===s?void 0:s.properties)||void 0===d?void 0:d.hasEmbeddedLayout)&&Object.keys(null!==(u=e.layouts)&&void 0!==u?u:{}).length>0,supportInlineEditing:R,supportRepeat:null===(p=null===(c=null==e?void 0:e.manifest)||void 0===c?void 0:c.properties)||void 0===p?void 0:p.supportRepeat,isClassLoaded:null!==(g=null==o?void 0:o.isClassLoaded)&&void 0!==g&&g,isInlineEditing:R&&(null==o?void 0:o.isInlineEditing),isInController:a,useDragHandler:null!==(y=null===(h=null===(v=null==e?void 0:e.manifest)||void 0===v?void 0:v.properties)||void 0===h?void 0:h.useDragHandler)&&void 0!==y&&y,widgetStyle:null!=e?e.style:t,canCrossLayoutBoundary:null===(m=null===(f=null==e?void 0:e.manifest)||void 0===f?void 0:f.properties)||void 0===m?void 0:m.canCrossLayoutBoundary,hasExtension:(null===(x=null===(I=null==e?void 0:e.manifest)||void 0===I?void 0:I.extensions)||void 0===x?void 0:x.length)>0,needHiddenState:null!==(S=null===(b=null===(w=null==e?void 0:e.manifest)||void 0===w?void 0:w.properties)||void 0===b?void 0:b.needHiddenState)&&void 0!==S&&S,widgetJson:e,widgetId:null==e?void 0:e.id,isFunctionalWidget:(null===(C=null==e?void 0:e.manifest)||void 0===C?void 0:C.widgetType)!==n.WidgetType.Layout,widgetState:i}});function ve(e,t){var o,n,i,a;const l=null===(o=null==t?void 0:t.widgets)||void 0===o?void 0:o[e];return!!(null===(i=null===(n=null==l?void 0:l.manifest)||void 0===n?void 0:n.properties)||void 0===i?void 0:i.hasEmbeddedLayout)&&Object.keys(null!==(a=null==l?void 0:l.layouts)&&void 0!==a?a:{}).length>0}function he(e,t){var o,i;const a=null===(o=null==t?void 0:t.widgets)||void 0===o?void 0:o[e];return(null===(i=null==a?void 0:a.manifest)||void 0===i?void 0:i.widgetType)!==n.WidgetType.Layout}function ye(e,t){var o,i;if(!t||t.itemType!==n.LayoutItemType.Widget)return!1;if(t.layoutInfo){const{layoutId:n,layoutItemId:a}=t.layoutInfo,l=null===(i=null===(o=e.layouts)||void 0===o?void 0:o[n].content)||void 0===i?void 0:i[a];if(l&&!l.widgetId)return!0}return!t.layoutInfo&&!t.uri}function fe(e,t,o){if(!e)return(0,n.Immutable)({left:le(t.left)?t.left:`${Math.round(t.left)}px`,right:le(t.right)?t.right:`${Math.round(t.right)}px`,top:le(t.top)?t.top:`${Math.round(t.top)}px`,bottom:le(t.bottom)?t.bottom:`${Math.round(t.bottom)}px`,width:le(t.width)?t.width:`${Math.round(t.width)}px`,height:le(t.height)?t.height:`${Math.round(t.height)}px`});let i=e;return["left","right","top","bottom","width","height"].forEach(e=>{null!=i[e]?i=me(e,i,t[e],o):null!=t[e]&&(i=i.set(e,`${Math.round(t[e])}px`))}),i}function me(e,t,o,n){if(null==t[e]||"auto"===t[e])return t;let i=t;return i=le(t[e])?"left"===e||"right"===e||"width"===e?le(o)?t.set(e,o):t.set(e,`${(100*+o/n.width).toFixed(4)}%`):le(o)?t.set(e,o):t.set(e,`${(100*+o/n.height).toFixed(4)}%`):le(o)?"left"===e||"right"===e||"width"===e?t.set(e,Math.round(parseFloat(`${o}`)*n.width/100)):t.set(e,Math.round(parseFloat(`${o}`)*n.height/100)):isNaN(+o)?t.without(e):t.set(e,`${Math.round(+o)}px`),i}function Ie(e,t){return{left:e.left-t.left,top:e.top-t.top,right:e.right,bottom:e.bottom,width:e.width,height:e.height,id:null}}function xe(){var e,t;return null!==(t=null===(e=(0,n.getAppStore)().getState().appContext)||void 0===e?void 0:e.isRTL)&&void 0!==t&&t}function we(e){let t=100,o=100;if("number"==typeof e)t=100,o=Math.round(100*e);else if("string"==typeof e){const n=e.split(":");t=parseInt(n[0],10),o=parseInt(n[1],10)}return t/o}function be(e){return e&&0!==e.length?1===e.length?[e[0],e[0],e[0],e[0]]:2===e.length?[e[0],e[1],e[0],e[1]]:3===e.length?[e[0],e[1],e[2],0]:[e[0],e[1],e[2],e[3]]:[0,0,0,0]}function Se(e,t){var o,n,i,a;const l=null!==(o=t.setting)&&void 0!==o?o:{},r=ze("height",t.bbox,l.autoProps);let s;if("ratio"===l.heightMode)s={setting:{heightMode:"ratio",aspectRatio:null!==(n=l.aspectRatio)&&void 0!==n?n:1,autoProps:{height:b.Custom}}};else{if(r!==b.Custom)return{height:r===b.Stretch?e:null,setting:{autoProps:{height:r}}};{let o=null!==(a=null===(i=t.bbox)||void 0===i?void 0:i.height)&&void 0!==a?a:e;o=le(o)?ue(o,e):parseInt(o),s={height:o,setting:{heightMode:"fixed",autoProps:{height:b.Custom}}}}}return s}function Ce(){var e;return window.jimuConfig.isBuilder?null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appConfig:(0,n.getAppStore)().getState().appConfig}function Re(){var e,t;return(null===(e=null===window||void 0===window?void 0:window.jimuConfig)||void 0===e?void 0:e.isBuilder)?null===(t=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===t?void 0:t.browserSizeMode:(0,n.getAppStore)().getState().browserSizeMode}function Te(){var e,t,o;return window.jimuConfig.isBuilder?null===(t=null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appRuntimeInfo)||void 0===t?void 0:t.currentPageId:null===(o=(0,n.getAppStore)().getState().appRuntimeInfo)||void 0===o?void 0:o.currentPageId}function je(){var e,t,o;return window.jimuConfig.isBuilder?null===(t=null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appRuntimeInfo)||void 0===t?void 0:t.currentDialogId:null===(o=(0,n.getAppStore)().getState().appRuntimeInfo)||void 0===o?void 0:o.currentDialogId}function Me(){var e,t,o;return window.jimuConfig.isBuilder?null===(t=null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appRuntimeInfo)||void 0===t?void 0:t.activePagePart:null===(o=(0,n.getAppStore)().getState().appRuntimeInfo)||void 0===o?void 0:o.activePagePart}function Pe(){var e,t,o;const i=window.jimuConfig.isBuilder?null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appConfig:(0,n.getAppStore)().getState().appConfig,a=je(),l=Re();return null===(o=null===(t=null==i?void 0:i.dialogs[a])||void 0===t?void 0:t.layout)||void 0===o?void 0:o[l]}function $e(){var e,t,o;const i=window.jimuConfig.isBuilder?null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appConfig:(0,n.getAppStore)().getState().appConfig,a=Te(),l=Re();return null===(o=null===(t=null==i?void 0:i.pages[a])||void 0===t?void 0:t.layout)||void 0===o?void 0:o[l]}function Le(){var e,t,o;const i=window.jimuConfig.isBuilder?null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appConfig:(0,n.getAppStore)().getState().appConfig,a=Re();return null===(o=null===(t=null==i?void 0:i.header)||void 0===t?void 0:t.layout)||void 0===o?void 0:o[a]}function Oe(){var e,t,o;const i=window.jimuConfig.isBuilder?null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appConfig:(0,n.getAppStore)().getState().appConfig,a=Re();return null===(o=null===(t=null==i?void 0:i.footer)||void 0===t?void 0:t.layout)||void 0===o?void 0:o[a]}function ke(e,t){return t.left>=e.left&&t.left+t.width<=e.left+e.width&&t.top>=e.top&&t.top+t.height<=e.top+e.height}function Ee(e,t){return!(t.left>e.left+e.width||t.left+t.width<e.left||t.top>e.top+e.height||t.top+t.height<e.top)}function Ae(e,t){var o,i,a;let l,r;if(null!=e&&"object"==typeof e)l=null!==(o=e.unit)&&void 0!==o?o:v.DistanceUnits.PIXEL,r=null!==(i=e.distance)&&void 0!==i?i:0;else{const t=n.polished.getValueAndUnit(e);l=null!==(a=null==t?void 0:t[1])&&void 0!==a?a:v.DistanceUnits.PIXEL,r=+(null==t?void 0:t[0])>=0?+t[0]:0}return t>=0||(t=l===v.DistanceUnits.PERCENTAGE?1:0),`${r.toFixed(t)}${l}`}function ze(e,t,o){const n=null==o?void 0:o[e],i="width"===e?"left":"top",a="width"===e?"right":"bottom";if(!n)return null!=t[e]?b.Custom:null!=t[i]&&null!=t[a]?b.Stretch:b.Auto;if(!0===n)return null!=t[i]&&null!=t[a]?b.Stretch:b.Auto;switch(n){case b.Auto:return b.Auto;case b.Stretch:return b.Stretch;default:return b.Custom}}function Ne(e){return"ratio"===e.heightMode&&null!=e.aspectRatio}function Be(e,t){let o=Math.max(e,t),n=Math.min(e,t);for(;0!==n;){const e=n;n=o%n,o=e}return o}function Fe(e,t){n.utils.changeAppConfig(e),(0,n.getAppStore)().dispatch(n.appActions.selectionChanged(t))}const We=n.lodash.assign({},{gridSize:1}),He=n.lodash.assign({},{order:0},{lockParent:!1,lockLayout:!1,autoProps:{}});function Ve(e,t){var o;const n=e.appConfig.sections[t];if(!n||!n.views)return null;const i=null===(o=e.appRuntimeInfo.sectionNavInfos)||void 0===o?void 0:o[n.id];let a;if(!i){const t=n.views[0];a=e.appConfig.views[t]}return{sectionId:t,navInfo:i,activeView:a,views:n.views,sectionStyle:n.style,transition:n.transition,autoPlay:n.autoPlay,interval:n.interval,loop:n.loop,focusable:n.focusable}}function De(e,t,o,i){const a=e.pages[t];return a?i===n.PagePart.Header?a.header&&e.header?Xe(e,e.header.layout[o],o):[]:i===n.PagePart.Footer?a.footer&&e.footer?Xe(e,e.footer.layout[o],o):[]:i===n.PagePart.Body?Xe(e,a.layout[o],o):[]:[]}function Ge(e,t,o,i){const a=e.pages[t];return a?i===n.PagePart.Header?a.header&&e.header?Ye(e,e.header.layout,o):[]:i===n.PagePart.Footer?a.footer&&e.footer?Ye(e,e.footer.layout,o):[]:i===n.PagePart.Body?Ye(e,a.layout,o):[]:[]}function Ue(e,t,o){const n=e.dialogs[t];return n?Xe(e,n.layout[o],o):[]}function _e(e,t,o){const n=e.dialogs[t];return n?Ye(e,n.layout,o):[]}function Xe(e,t,o){let i=[];k(e.layouts[t],n.LayoutItemType.Widget,!0).forEach(t=>{const n=e.layouts[t.layoutId].content[t.layoutItemId];n.isPending?i.push(t):e.widgets[n.widgetId].layouts&&Object.keys(e.widgets[n.widgetId].layouts).forEach(t=>{i=i.concat(Xe(e,e.widgets[n.widgetId].layouts[t][o],o))})});k(e.layouts[t],n.LayoutItemType.Section,!0).forEach(t=>{const n=e.layouts[t.layoutId].content[t.layoutItemId];n.isPending?i.push(t):e.sections[n.sectionId].views&&e.sections[n.sectionId].views.forEach(t=>{i=i.concat(Xe(e,e.views[t].layout[o],o))})});return k(e.layouts[t],n.LayoutItemType.ScreenGroup,!0).forEach(t=>{var n,a;const l=e.layouts[t.layoutId].content[t.layoutItemId];if(l.isPending)i.push(t);else{const t=l.screenGroupId;null===(a=null===(n=e.screenGroups)||void 0===n?void 0:n[t].screens)||void 0===a||a.forEach(t=>{const n=null==e?void 0:e.screens[t];n.main&&(i=i.concat(Xe(e,n.main.layout[o],o))),n.panel&&(i=i.concat(Xe(e,n.panel.layout[o],o)))})}}),i}function Ye(e,t,o,i=null,a=null,l=null){const r=[];i||(i=j(e,t[o],n.LayoutItemType.Widget,o,!0)),a||(a=j(e,t[o],n.LayoutItemType.Section,o,!0)),l||(l=j(e,t[o],n.LayoutItemType.ScreenGroup,o,!0));return Object.keys(n.BrowserSizeMode).filter(e=>n.BrowserSizeMode[e]!==o).map(e=>n.BrowserSizeMode[e]).forEach(s=>{k(e.layouts[t[s]],n.LayoutItemType.Widget,!0).forEach(t=>{var s;const d=e.layouts[t.layoutId].content[t.layoutItemId];(null===(s=e.widgets[d.widgetId].manifest)||void 0===s?void 0:s.widgetType)!==n.WidgetType.Layout&&i.indexOf(d.widgetId)<0?!Je(e,r,t)&&r.push(t):e.widgets[d.widgetId].layouts&&Object.keys(e.widgets[d.widgetId].layouts).forEach(t=>{Ye(e,e.widgets[d.widgetId].layouts[t],o,i,a,l).forEach(t=>{!Je(e,r,t)&&r.push(t)})})});k(e.layouts[t[s]],n.LayoutItemType.Section,!0).forEach(t=>{const n=e.layouts[t.layoutId].content[t.layoutItemId];a.indexOf(n.sectionId)<0?!Je(e,r,t)&&r.push(t):e.sections[n.sectionId].views&&e.sections[n.sectionId].views.forEach(t=>{Ye(e,e.views[t].layout,o,i,a,l).forEach(t=>{!Je(e,r,t)&&r.push(t)})})});k(e.layouts[t[s]],n.LayoutItemType.ScreenGroup,!0).forEach(t=>{var n,s;const d=e.layouts[t.layoutId].content[t.layoutItemId];l.indexOf(d.screenGroupId)<0?!Je(e,r,t)&&r.push(t):(null===(s=null===(n=e.screenGroups)||void 0===n?void 0:n[d.screenGroupId])||void 0===s?void 0:s.screens)&&e.screenGroups[d.screenGroupId].screens.forEach(t=>{var n;const s=null===(n=e.screens)||void 0===n?void 0:n[t];(null==s?void 0:s.main)&&Ye(e,s.main.layout,o,i,a,l).forEach(t=>{!Je(e,r,t)&&r.push(t)}),(null==s?void 0:s.panel)&&Ye(e,s.panel.layout,o,i,a,l).forEach(t=>{!Je(e,r,t)&&r.push(t)})})})}),r}function Je(e,t,o){const i=e.layouts[o.layoutId].content[o.layoutItemId];return!!t.find(t=>{const o=e.layouts[t.layoutId].content[t.layoutItemId];return o.type===i.type&&(o.type===n.LayoutItemType.Widget&&o.widgetId===i.widgetId||o.type===n.LayoutItemType.Section&&o.sectionId===i.sectionId)})}var Ke=r(1888);function qe(e){const{widgetId:t,needHiddenState:o}=e,i=n.ReactRedux.useSelector(t=>function(e,t){var o,n,i;const a=e.appConfig.widgets[t.widgetId],l=null!==(i=null===(n=null===(o=null==a?void 0:a.manifest)||void 0===o?void 0:o.properties)||void 0===n?void 0:n.handleA11yLabelInWidget)&&void 0!==i&&i;return{label:null==a?void 0:a.label,a11yLabel:null==a?void 0:a.a11yLabel,addToSkip:null==a?void 0:a.addToA11ySkip,handleA11yLabelInWidget:l}}(t,e),n.ReactRedux.shallowEqual),{label:a,a11yLabel:l,addToSkip:r,handleA11yLabelInWidget:s}=i,d=n.React.useRef(null),[u,c]=n.React.useState(!1),p=v.hooks.useHiddenState(o?d.current:void 0);n.React.useEffect(()=>{d.current&&!u&&c(!0)},[u]),n.React.useEffect(()=>{o&&void 0!==p&&(0,n.getAppStore)().dispatch(n.appActions.widgetRuntimeInfoChange(t,"state",p?n.WidgetState.Hidden:void 0))},[o,p,t]);const h=n.React.useMemo(()=>s?{}:(0,n.getA11yProps)(t,a,l,r),[a,l,r,t,s]);return(0,g.jsx)("div",Object.assign({className:(0,n.classNames)(e.className,"jimu-outline-inside")},h,{ref:d,children:e.children}))}var Ze=r(8996),Qe=r.n(Ze),et=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o};const tt=e=>{const t=window.SVG,{className:o}=e,i=et(e,["className"]),a=(0,n.classNames)("jimu-icon jimu-icon-component",o);return t?(0,g.jsx)(t,Object.assign({className:a,src:Qe()},i)):(0,g.jsx)("svg",Object.assign({className:a},i))},ot=function(e){const{msg:t}=e;return(0,g.jsxs)("div",{className:"w-100 h-100 d-flex p-3 flex-column justify-content-center align-items-center hint-paper",children:[(0,g.jsx)(tt,{color:"var(--sys-color-warning-dark)"}),(0,g.jsx)("span",{children:t})]})};var nt=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o};class it extends n.React.PureComponent{constructor(e){super(e),this.onMouseDown=()=>{var e;if(this.props.widgetId){(null===(e=(0,n.getAppStore)().getState().widgetsRuntimeInfo[this.props.widgetId])||void 0===e?void 0:e.state)!==n.WidgetState.Active&&(0,n.getAppStore)().dispatch(n.appActions.activateWidget(this.props.widgetId))}},this.onMouseDown=this.onMouseDown.bind(this),this.ref=n.React.createRef(),this.state={error:null}}loadWidgetClass(){const{widgetId:e,isClassLoaded:t}=this.props;e&&!t&&n.WidgetManager.getInstance().loadWidgetClass(e).catch(e=>{console.log(e),this.setState({error:n.i18n.getIntl().formatMessage({id:"widgetLoadError"})})})}componentDidMount(){this.loadWidgetClass()}componentDidUpdate(){this.loadWidgetClass()}renderWidgetContent(){var e;const{widgetId:t,widgetJson:o,needHiddenState:i,layoutId:a,layoutItemId:l,autoWidth:r,autoHeight:s,onInitResizeHandler:d,onInitDragHandler:u}=this.props;let c;if(t&&(c=n.WidgetManager.getInstance().getWidgetClass(t)),this.state.error)return(0,g.jsx)("div",{className:"widget-content",children:(0,g.jsx)(ot,{msg:this.state.error})});const p=null===(e=null==o?void 0:o.manifest)||void 0===e?void 0:e.exbVersion;return(0,g.jsx)(qe,{widgetId:t,needHiddenState:i,className:(0,n.classNames)("widget-content",{"d-none":!t}),children:c&&(0,g.jsx)(n.ErrorBoundary,{fallback:window.jimuConfig.exbVersion!==p?(0,g.jsx)(ot,{msg:n.i18n.getIntl().formatMessage({id:"versionMismatchRemind"})}):void 0,children:(0,g.jsx)(c,{widgetId:t,layoutId:a,layoutItemId:l,autoWidth:r,autoHeight:s,onInitResizeHandler:d,onInitDragHandler:u})})})}getStyle(){const{forceAspectRatio:e,aspectRatio:t}=this.props,o=n.css`
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
    `}render(){var e,t,o,i,a,l;const{className:r,widgetStyle:s,widgetId:d,rotate:u,theme:c,widgetJson:p}=this.props,h=v.styleUtils.toCSSStyle(s),{transform:y,borderRadius:f}=h,m=nt(h,["transform","borderRadius"]),I=u>0||u<0?`rotateZ(${u}deg)`:"";let x=I;y&&(x=`${y} ${I}`);const w=(null===(e=null==p?void 0:p.manifest)||void 0===e?void 0:e.widgetType)===n.WidgetType.Layout,b=null!==(i=null===(o=null===(t=null==p?void 0:p.manifest)||void 0===t?void 0:t.properties)||void 0===o?void 0:o.useOwnBorder)&&void 0!==i&&i,S=(0,Ke.getThemeModule)(c.uri),C=null==f?void 0:f.split(" ").every(e=>parseFloat(e)>=0);return(0,g.jsxs)("div",{className:(0,n.classNames)(`widget-renderer layout-item-content w-100 ${null!==(l=null===(a=null==s?void 0:s.boxShadow)||void 0===a?void 0:a.presetStyle)&&void 0!==l?l:""}`,r),css:this.getStyle(),style:Object.assign(Object.assign({},m),{borderRadius:C&&f||(w||b||!Ke.mapping.whetherIsNewTheme(S)?null:c.sys.shape.shape2),transform:x}),onMouseDownCapture:this.onMouseDown,"data-widgetid":d,ref:this.ref,children:[this.renderWidgetContent(),this.props.children]})}}const at=n.ReactRedux.connect(ge)((0,Ke.withTheme)(it)),lt={},rt={};function st(e,t){lt[e]=t}function dt(e,t){rt[e]=t}function ut(e){return lt[e]}function ct(e){return rt[e]}class pt extends n.React.PureComponent{render(){const{layout:e}=this.props;if(!e)return null;const t=ct(e.type||n.LayoutType.FlowLayout);return t?(0,g.jsx)(t,Object.assign({},this.props)):null}}const gt=n.ReactRedux.connect(ce)(pt);function vt(e,t){if(!e)return null;let o={};e.backgroundIMage&&(o="string"==typeof e.backgroundIMage?{}:e.backgroundIMage);const n=e.backgroundPosition?v.FillType[e.backgroundPosition.toUpperCase()]:v.FillType.FILL;let i;i=null==e.backgroundColor?t:""===e.backgroundColor?"transparent":e.backgroundColor?e.backgroundColor:"";const a={color:i,fillType:n,image:o};return Object.assign(Object.assign({},v.styleUtils.toBackgroundStyle(a)),{color:e.textColor?e.textColor:null})}function ht(e){const{viewId:t,isActive:o,layoutEntryComponent:i}=e,a=n.ReactRedux.useSelector(e=>{var o,n;return null===(n=null===(o=e.appConfig)||void 0===o?void 0:o.views)||void 0===n?void 0:n[t]}),l=i,[r,s]=n.React.useState(!1),d=n.React.useMemo(()=>({isInView:!0,isInCurrentView:o}),[o]);return n.React.useEffect(()=>{o&&a.lazyLoad&&!r&&s(!0)},[o,a.lazyLoad,r]),(0,g.jsx)("div",{className:(0,n.classNames)("w-100 h-100 d-flex section-view",{[v.FOCUSABLE_CONTAINER_CLASS]:o}),style:vt(a,"var(--sys-color-surface-background)"),css:n.css`&, .exb-drop-area { pointer-events: ${o?"auto":"none"}; }`,id:`${a.parent}_${a.id}`,children:(r||!a.lazyLoad)&&(0,g.jsx)(n.ErrorBoundary,{children:(0,g.jsx)(n.ViewVisibilityContext.Provider,{value:d,children:(0,g.jsx)(l,{layouts:null==a?void 0:a.layout,isInSection:!0,className:"w-100"})})})},t)}function yt(e){var t,o;const{layoutId:i,layoutItemId:a,views:l,navInfo:r,animationPreview:s,playMode:d,previewId:u,currentIndex:c,previousIndex:p,progress:v,loop:h,viewTransition:y}=e,f=n.ReactRedux.useSelector(e=>{var t;return null===(t=e.appConfig.layouts[i].content[a].setting)||void 0===t?void 0:t.oneByOneEffect});return(0,g.jsx)("div",{className:"section-content",children:(0,g.jsx)(n.TransitionContainer,{useProgress:null!==(t=null==r?void 0:r.useProgress)&&void 0!==t&&t,useStep:null!==(o=null==r?void 0:r.useStep)&&void 0!==o&&o,previousIndex:p,currentIndex:c,progress:v,transitionType:null==y?void 0:y.type,direction:null==y?void 0:y.direction,playId:null==r?void 0:r.playId,withOneByOne:null==r?void 0:r.withOneByOne,previewId:s?u:null,previewMode:s?d:null,loop:h,oneByOneSetting:f,children:l.map(t=>{const o=t===l[c];return(0,g.jsx)(ht,{viewId:t,isActive:o,layoutEntryComponent:e.layoutEntryComponent},t)})})})}var ft=r(7568),mt=r.n(ft),It=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o};const xt=e=>{const t=window.SVG,{className:o}=e,i=It(e,["className"]),a=(0,n.classNames)("jimu-icon jimu-icon-component",o);return t?(0,g.jsx)(t,Object.assign({className:a,src:mt()},i)):(0,g.jsx)("svg",Object.assign({className:a},i))};var wt=r(2943),bt=r.n(wt),St=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o};const Ct=e=>{const t=window.SVG,{className:o}=e,i=St(e,["className"]),a=(0,n.classNames)("jimu-icon jimu-icon-component",o);return t?(0,g.jsx)(t,Object.assign({className:a,src:bt()},i)):(0,g.jsx)("svg",Object.assign({className:a},i))};function Rt(e){var t,o,i;const{sectionId:a,currentIndex:l,numOfViews:r,onCurrentViewChange:s}=e,d=n.hooks.useTranslation(v.defaultMessages),u=n.ReactRedux.useSelector(e=>{var t;return null===(t=e.appConfig.sections[a])||void 0===t?void 0:t.arrowsNav}),c=n.ReactRedux.useSelector(e=>{var t;return null===(t=e.appConfig.sections[a])||void 0===t?void 0:t.dotsNav}),p=n.ReactRedux.useSelector(e=>{if(null==c?void 0:c.visible){const t=e.appConfig.sections[a],o=null==t?void 0:t.views;if((null==o?void 0:o.length)>0){return o.map(t=>e.appConfig.views[t].label).join(";")}}return""}),h=n.React.useMemo(()=>p.length>0?p.split(";"):[],[p]),y=null!==(t=null==c?void 0:c.position)&&void 0!==t?t:"b",f=n.React.useMemo(()=>{const e=[];for(let t=0;t<r;t++)e.push(t);return e},[r]),m=()=>{var e,t,o,i;return n.css`
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
    `},I=n.React.useCallback((e,t)=>{var o;return(0,g.jsx)(v.Button,{type:"tertiary","aria-label":null!==(o=h[e])&&void 0!==o?o:"","aria-pressed":t,className:(0,n.classNames)("dot p-0 rounded-circle",{active:t,disabled:r<=1}),onClick:t?void 0:()=>{s(e)}},e)},[s,r,h]),x=n.React.useCallback(()=>{s(l>0?l-1:r-1)},[l,r,s]),w=n.React.useCallback(()=>{s(l<r-1?l+1:0)},[l,r,s]),b=r>1&&0!==l,S=r>1&&l!==r-1;return(0,g.jsxs)(n.React.Fragment,{children:[(null==u?void 0:u.visible)&&(0,g.jsxs)(n.React.Fragment,{children:[(0,g.jsx)(v.Button,{type:"tertiary",disabled:!b,className:(0,n.classNames)("arrows-nav first p-0",{vertical:"v"===u.direction}),css:m(),onClick:b?x:null,"aria-label":d("previous"),children:(0,g.jsx)(xt,{className:"m-0",autoFlip:"v"!==u.direction,size:null!==(o=u.size)&&void 0!==o?o:20})}),(0,g.jsx)(v.Button,{type:"tertiary",disabled:!S,className:(0,n.classNames)("arrows-nav second p-0",{vertical:"v"===u.direction}),css:m(),onClick:S?w:null,"aria-label":d("next"),children:(0,g.jsx)(Ct,{className:"m-0",autoFlip:"v"!==u.direction,size:null!==(i=u.size)&&void 0!==i?i:20})})]}),(null==c?void 0:c.visible)&&(0,g.jsx)("div",{className:(0,n.classNames)("dots-nav",{"snap-left":"l"===y,"snap-top":"t"===y,"snap-right":"r"===y,"snap-bottom":"b"===y}),css:(()=>{var e,t,o,i,a,l,r,s,d,u,p,g,v,h;return n.css`
      position: absolute;
      display: flex;
      flex-direction: ${"l"===y||"r"===y?"column":"row"};
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
        right: ${null!==(l=c.offset)&&void 0!==l?l:50}px;
        width: ${null!==(r=c.size)&&void 0!==r?r:8}px;

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
          margin-left: ${null!==(h=c.spacing)&&void 0!==h?h:10}px;
        }
      }
    `})(),children:f.map(e=>I(e,e===l))})]})}function Tt(e){const{sectionId:t,autoPlay:o,interval:i=x,loop:a=!1}=e,l=n.React.useRef(void 0),r=n.ReactRedux.useSelector(e=>{var t,i;return o?(null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.appMode)===n.AppMode.Design||(null===(i=e.appRuntimeInfo)||void 0===i?void 0:i.isPrintPreview):null}),s=n.React.useRef(r),d=n.React.useCallback(()=>{l.current&&(clearInterval(l.current),l.current=null)},[]),u=n.React.useCallback(()=>{d(),l.current=setInterval(()=>{const e=function(e,t){var o,i;const a=(0,n.getAppStore)().getState(),l=a.appConfig.sections[e].views;let r=null===(i=null===(o=a.appRuntimeInfo)||void 0===o?void 0:o.sectionNavInfos)||void 0===i?void 0:i[e];const s=(null==r?void 0:r.currentViewId)?l.indexOf(r.currentViewId):0,d=s<l.length-1?s+1:0;return t||0!==d?(r=r?r.set("previousViewId",l[s]).set("currentViewId",l[d]):{previousViewId:l[s],currentViewId:l[d]},(0,n.getAppStore)().dispatch(n.appActions.sectionNavInfoChanged(e,r)),!0):(n.jimuHistory.changeView(e,l[l.length-1]),!1)}(t,a);e||d()},1e3*i)},[t,a,i,d]);n.React.useEffect(()=>{if(!s.current){if(!o)return void d();u()}return()=>{d()}},[o,i,a,d,u]),n.React.useEffect(()=>{if(s.current!==r&&null!==r){if(s.current=r,r)return void d();o&&u()}},[r,u,d,o])}var jt=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o};function Mt(e,t){return n.css`
    overflow: visible;
    position: relative;
    aspect-ratio: ${e&&t>0?t:null};

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
  `}function Pt(e){var t;const{layoutId:o,layoutItemId:a,views:l,navInfo:r,activeView:s,animationPreview:d,playMode:u,previewId:c,transition:p,sectionId:h,autoPlay:y,focusable:f=!0,interval:m=x,loop:I=!0,className:w,sectionStyle:b,rotate:S,forceAspectRatio:C,aspectRatio:R,layoutEntryComponent:T}=e,j=n.React.useRef(void 0),M=n.React.useRef(void 0),P=n.React.useRef(!1),$=n.React.useRef(!1),L=n.React.useRef(null),[O,k]=n.React.useState(!1),E=n.ReactRedux.useSelector(e=>e.appConfig.sections[h].label),A=n.ReactRedux.useSelector(e=>e.appConfig.sections[h].a11yLabel),z=n.ReactRedux.useSelector(e=>e.appConfig.sections[h].addToA11ySkip),N=n.hooks.useTranslation(i),B=null==s?void 0:s.id,F=n.React.useMemo(()=>{var e;let t,o,i,a=l;if(r)if(a=null!==(e=r.visibleViews)&&void 0!==e?e:l,r.useProgress){i=r.progress;t=(0,n.getIndexFromProgress)(i,a.length).currentIndex}else t=Math.max(0,a.indexOf(r.currentViewId)),o=r.previousViewId?Math.max(0,a.indexOf(r.previousViewId)):Math.max(0,t-1);else t=Math.max(0,a.indexOf(B)),o=t;return j.current=t,{currentIndex:t,previousIndex:o,progress:i}},[B,r,l]),W=n.React.useMemo(()=>v.styleUtils.toCSSStyle(b),[b]),{transform:H}=W,V=jt(W,["transform"]),D=S>0||S<0?`rotateZ(${S}deg)`:"";let G=D;H&&(G=`${H} ${D}`);const U=n.React.useCallback(()=>{k(!0)},[]),_=n.React.useCallback(()=>{k(!1)},[]),X=n.React.useCallback(e=>{P.current=!0,$.current=e.target===M.current,null!=L.current&&(clearTimeout(L.current),L.current=null),y&&k(!0)},[y]),Y=n.React.useCallback(e=>{P.current=!1,null!=L.current&&(clearTimeout(L.current),L.current=null),y&&(L.current=setTimeout(()=>{k(!1)},500))},[y]),J=y&&!O;Tt({sectionId:h,interval:m,loop:I,autoPlay:J});const K=n.React.useCallback(e=>{n.jimuHistory.changeView(h,l[e])},[h,l]),q=n.React.useMemo(()=>{const e=(0,n.getA11yProps)(h,E,A,z);return f&&(e.tabIndex=0),e},[f,h,A,z,E]),Z=N("activeViewTip",{viewLabel:(()=>{var e,t,o;const i=l[j.current],a=(0,n.getAppStore)().getState().appConfig;return null!==(o=null===(t=null===(e=null==a?void 0:a.views)||void 0===e?void 0:e[i])||void 0===t?void 0:t.label)&&void 0!==o?o:""})()});return q["aria-label"]?q["aria-label"]=q["aria-label"]+". "+Z:q["aria-label"]=Z,(0,g.jsxs)("div",Object.assign({className:(0,n.classNames)(`section-layout layout-item-content w-100 ${null===(t=null==b?void 0:b.boxShadow)||void 0===t?void 0:t.presetStyle}`,w),css:Mt(C,R),"data-sectionid":h,style:Object.assign(Object.assign({},V),{transform:G}),onMouseEnter:y?U:null,onMouseLeave:y?_:null,onTouchStart:y?U:null,onTouchEnd:y?_:null,onFocus:X,onBlur:Y,tabIndex:f?0:void 0},q,{ref:M,children:[(0,g.jsx)(yt,{layoutId:o,layoutItemId:a,views:l,navInfo:r,animationPreview:d,playMode:u,previewId:c,currentIndex:F.currentIndex,previousIndex:F.previousIndex,progress:F.progress,loop:J&&I,viewTransition:p,layoutEntryComponent:T}),(0,g.jsx)(Rt,{sectionId:h,numOfViews:l.length,currentIndex:F.currentIndex,onCurrentViewChange:K})]}))}class $t extends n.React.PureComponent{render(){return(0,g.jsx)(Pt,Object.assign({},this.props,{layoutEntryComponent:gt}))}}function Lt(){const e=[0];for(let t=1;t<=10;t++)e.push(t/10);return e}function Ot(e,t){const o=n.React.useRef(void 0),[i,a]=n.React.useState(!0);return n.React.useEffect(()=>{if(o.current&&(o.current.unobserve(e),o.current=null),!t)return;if(e&&"function"==typeof IntersectionObserver){const t=new IntersectionObserver(e=>{var t;(t=e[0]).target.classList.contains("playing-animation")||t.boundingClientRect.width>0&&t.boundingClientRect.height>0&&a(t.isIntersecting)},{threshold:Lt(),root:document,rootMargin:"20%"});return t.observe(e),o.current=t,()=>{o.current.unobserve(e),o.current=null}}},[e,t]),i}var kt=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o};function Et(e){var t,o,i,a,l,r;const s=n.ReactRedux.useSelector(t=>function(e,t){var o,i;const a=pe(e,t);if(!a.layoutItem)return a;if(a.layoutItem.type===n.LayoutItemType.Widget){const{layoutId:l,layoutItemId:r}=t,s=e.appConfig.widgets[a.layoutItem.widgetId],d=null===(i=null===(o=null==s?void 0:s.manifest)||void 0===o?void 0:o.properties)||void 0===i?void 0:i.supportInlineEditing,u=function(e,t,o){var i,a;const l=e.appConfig.layouts[t].content[o];if(l.type===n.LayoutItemType.Widget){const t=e.appConfig.widgets[l.widgetId],o=null===(i=null==t?void 0:t.layouts)||void 0===i?void 0:i.DEFAULT;if(o)return null!==(a=o[e.browserSizeMode])&&void 0!==a?a:o[e.appConfig.mainSizeMode]}return null}(e,l,r),c=Object.assign({widgetId:a.layoutItem.widgetId,supportInlineEditing:d},a);return u&&(c.innerLayoutId=u),c}const l=Ve(e,a.layoutItem.sectionId);return Object.assign(Object.assign({},a),l)}(t,e),n.ReactRedux.shallowEqual),d=Object.assign(Object.assign({},e),s),c=n.React.useRef(void 0),{layoutId:p,layoutItemId:v,layoutItem:h}=d,{className:y,children:f,id:I,isLastChild:x,parentRef:w}=d,b=kt(d,["className","children","id","isLastChild","parentRef"]),S=(null==h?void 0:h.type)===n.LayoutItemType.Widget,C=(null==h?void 0:h.type)===n.LayoutItemType.Section,{effect:R,oneByOneEffect:T,hoverEffect:j}=null!==(o=null===(t=d.layoutItem)||void 0===t?void 0:t.setting)&&void 0!==o?o:{},M=Ot(c.current,d.watchViewportVisibility);if(!d.layoutItem||C&&!h.sectionId)return null;const P=null!==(r=null===(l=null===(a=null===(i=h.setting)||void 0===i?void 0:i.style)||void 0===a?void 0:a.transform)||void 0===l?void 0:l.rotate)&&void 0!==r?r:0;return(0,g.jsx)(u.Provider,{value:M,children:(0,g.jsxs)(n.AnimationLight,{id:d.id,parentId:p,parentRef:w,innerLayoutId:s.innerLayoutId,animationSetting:null==R?void 0:R[n.AnimationTriggerType.ScrollIntoView],oneByOneSetting:null==T?void 0:T[n.AnimationTriggerType.ScrollIntoView],ref:c,css:n.css`
          ${(0,n.getHoverStyle)(null==j?void 0:j.type,null==j?void 0:j.setting)};
          position: relative;
          overflow: visible;
          min-width: ${m}px;
          min-height: ${m}px;
        `,style:e.style,className:(0,n.classNames)("d-flex layout-item",y,{"is-widget":S,"is-section":C}),"data-layoutitemid":v,"data-layoutid":p,children:[S&&(0,g.jsx)(at,Object.assign({rotate:P},b)),C&&(0,g.jsx)($t,Object.assign({rotate:P},b)),e.children]})})}class At extends n.React.PureComponent{getPositionStyle(e){const{layoutItem:t,transformedBBox:o}=this.props,i=function(e,t){var o,n,i,a,l;const r={};let s=null!==(o=null==t?void 0:t.autoProps)&&void 0!==o?o:{},d=e;const u=ze("height",e,s),c=ze("width",e,s);if(u===b.Stretch)r.top=d.top,r.bottom=d.bottom;else{const o=null!==(n=s.top)&&void 0!==n&&n,a=null!==(i=s.bottom)&&void 0!==i&&i;u===b.Custom&&(r.height=d.height),o!==a&&!a||null==e.top?r.bottom=d.bottom:r.top=d.top,t.vCenter&&"50%"===d.top&&(r.top="50%")}if(c===b.Stretch)r.left=d.left,r.right=d.right;else{const e=null!==(a=s.left)&&void 0!==a&&a,o=null!==(l=s.right)&&void 0!==l&&l;c===b.Custom&&(r.width=d.width),e===o?null!=d.left?r.left=d.left:r.right=d.right:e&&null!=d.right?r.right=d.right:r.left=d.left,t.hCenter&&"50%"===d.left&&(r.left="50%")}return r}(null!=o?o:t.bbox,e),a=Object.assign(Object.assign({},i),function(e,t,o=!1){const n={},i=t.hCenter&&"50%"===e.left,a=t.vCenter&&"50%"===e.top,l=xe()?-1:1;return i&&a?(n.right="auto",n.bottom="auto",n.transform=`translate(${-50*l}%, -50%)`):i?(n.right="auto",n.transform=`translateX(${-50*l}%)`):a&&(n.bottom="auto",n.transform="translateY(-50%)"),!o&&Ne(t)&&(n.height="auto"),n}(t.bbox,e));return function(e){return[n.css`
      position: absolute;
      left: ${se(e,"left")};
      right: ${se(e,"right")};
      top: ${se(e,"top")};
      bottom: ${se(e,"bottom")};
      width: ${se(e,"width")};
      height: ${se(e,"height")};
    `,e.transform]}(a)}render(){const{layoutItem:e,layoutId:t}=this.props;if(null==e||e.isPending)return null;const o=n.lodash.assign({},He,e.setting),i=we(o.aspectRatio),a=Ne(o),[l,r]=this.getPositionStyle(o),s=ze("width",e.bbox,o.autoProps),d=ze("height",e.bbox,o.autoProps);return(0,g.jsx)(Et,{css:l,style:{transform:r},layoutId:t,layoutItemId:e.id,forceAspectRatio:a,aspectRatio:i,isInSection:this.props.isInSection,autoWidth:s===b.Auto,autoHeight:d===b.Auto})}}class zt extends n.React.PureComponent{createItem(e,t,o,n){const i=e.content[t];return(0,g.jsx)(At,{index:o,layoutId:e.id,layoutItemId:t,layoutItem:i,transformedBBox:n?e.content[t].bbox:null,isInSection:this.props.isInSection},`${e.id}_${t}`)}render(){const{layout:e,layouts:t,className:o,style:i,browserSizeMode:a}=this.props;if(!e)return null;let l=e,r=!1;if(t[a]!==e.id&&this.layoutTransform){let o;Object.keys(t).some(n=>t[n]===e.id&&(o=n,!0)),l=this.layoutTransform(e,o,a),r=!0}const s=n.lodash.assign({},We,l.setting),d=l.order||[],u=(0,n.classNames)("layout fixed-layout d-flex",o);return(0,g.jsx)("div",{className:u,style:Object.assign(Object.assign(Object.assign({position:"relative",height:"auto"},i),v.styleUtils.toCSSStyle(s.style)),{width:"100%",overflow:"hidden"}),"data-layoutid":l.id,children:d.length>0&&(0,g.jsx)("div",{css:n.css`
              position: absolute;
              left: 0;
              right: 0;
              top: 0;
              bottom: 0;
            `,"data-layoutid":e.id,children:d.map((e,t)=>this.createItem(l,e,t,r))})})}}const Nt=n.ReactRedux.connect(ce)(zt);class Bt extends n.React.PureComponent{isStretchInCrossAxis(){const{layoutItem:e}=this.props;return function(e){var t,o;return(null===(o=null===(t=e.setting)||void 0===t?void 0:t.autoProps)||void 0===o?void 0:o.width)!==b.Custom}(e)}calHeight(e,t){return function(e,t){var o,n;return(null===(o=e.autoProps)||void 0===o?void 0:o.height)===b.Auto||"ratio"===e.heightMode?"ratio"===e.heightMode?{height:"auto",flex:"0 0 auto"}:{height:"auto"}:(null===(n=e.autoProps)||void 0===n?void 0:n.height)===b.Stretch||"fit"===e.heightMode?{flex:"1 1 auto"}:{height:t.height,flexShrink:0}}(e,t)}getStyle(e,t){const{layoutItem:o}=this.props,i=o.bbox||{},a=this.calHeight(e,i);return a.width=t?"auto":i.width,this.autoHeight="auto"===a.height,function(e,t,o){var i,a,l;const r=(null===(i=t.autoProps)||void 0===i?void 0:i.height)===b.Auto;return n.css`
    align-self: ${o?"stretch":null!==(l=null===(a=t.style)||void 0===a?void 0:a.alignSelf)&&void 0!==l?l:"auto"};
    width: ${se(e,"width")};
    height: ${se(e,"height")};
    flex: ${e.flex};
    flex-shrink: ${e.flexShrink};
    min-height: ${r?"unset":null};
  `}(a,e,t)}render(){var e,t;const{layoutId:o,layoutItem:i,parentRef:a,onClick:l}=this.props;if(!i||i.isPending)return null;const r=i.setting||{},s=null!==(t=null===(e=r.autoProps)||void 0===e?void 0:e.height)&&void 0!==t?t:b.Custom,d=(0,n.classNames)("flexbox-layout-item",{"d-flex":s!==b.Auto}),u=this.isStretchInCrossAxis(),c=Ne(r),p=we(r.aspectRatio);return(0,g.jsx)(Et,{css:this.getStyle(r,u),layoutId:o,layoutItemId:i.id,parentRef:a,onClick:l,className:d,forceAspectRatio:c,aspectRatio:p,autoHeight:this.autoHeight})}}const Ft={min:16,space:10},Wt=e=>n.css`
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
`;class Ht extends n.React.PureComponent{constructor(e){super(e),this.ref=n.React.createRef()}createItem(e,t,o){const{layout:n}=this.props;return(0,g.jsx)(Bt,{index:t,space:o.space,layoutId:n.id,layoutItemId:e,parentRef:this.ref,layoutItem:n.content[e]},e)}render(){const{layout:e,className:t}=this.props,o=e.order||(0,n.Immutable)([]),i=Object.assign({},Ft,e.setting),a=(0,n.classNames)("layout column-layout d-flex w-100",t);return(0,g.jsx)("div",{ref:this.ref,className:a,style:{position:"relative",overflow:"hidden"},"data-layoutid":e.id,children:(0,g.jsx)("div",{className:"trail-container d-flex flex-column w-100",css:n.css`
            ${Wt(i)};
            padding: ${v.styleUtils.toCSSPadding(i.padding)};
          `,children:o.asMutable().map((e,t)=>this.createItem(e,t,i))})})}}const Vt=n.ReactRedux.connect(ce)(Ht),Dt=n.css`
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
`;const Gt={space:10,style:{padding:{number:[10,10,10,10],unit:v.DistanceUnits.PIXEL}}},Ut={heightMode:"fixed",aspectRatio:1,offsetX:0,offsetY:0,style:{alignSelf:"flex-start"}};class _t extends n.React.PureComponent{getStyle(e){const{gutter:t,layoutItem:o,isMultiRow:i}=this.props,a=o.bbox,l=xe()?-1:1,r=function(e,t,o){var n,i,a,l,r,s,d,u,c,p,g,v,h,y;return o?{height:(null===(n=e.autoProps)||void 0===n?void 0:n.height)===b.Auto?"auto":t.height,alignSelf:null!==(a=null===(i=e.style)||void 0===i?void 0:i.alignSelf)&&void 0!==a?a:"flex-start"}:"ratio"===e.heightMode?{alignSelf:null!==(r=null===(l=e.style)||void 0===l?void 0:l.alignSelf)&&void 0!==r?r:"flex-start"}:(null===(s=e.autoProps)||void 0===s?void 0:s.height)===b.Auto?{height:"auto",alignSelf:null!==(u=null===(d=e.style)||void 0===d?void 0:d.alignSelf)&&void 0!==u?u:"flex-start"}:(null===(c=e.autoProps)||void 0===c?void 0:c.height)===b.Custom?{height:t.height,alignSelf:null!==(g=null===(p=e.style)||void 0===p?void 0:p.alignSelf)&&void 0!==g?g:"flex-start"}:(null===(v=e.autoProps)||void 0===v?void 0:v.height)===b.Stretch||"fit"===e.heightMode?{alignSelf:"stretch"}:parseFloat(t.height)>0?{height:t.height,alignSelf:null!==(y=null===(h=e.style)||void 0===h?void 0:h.alignSelf)&&void 0!==y?y:"flex-start"}:{alignSelf:"stretch"}}(e,a,i);return function(e,t,o,i,a){var l,r,s,d;return e?[n.css`
        padding: ${o/2}px 0;
        height: ${se(i,"height")};
        align-self: ${i.alignSelf};
      `,0!==a.offsetX||0!==a.offsetY?`translate(${(null!==(l=a.offsetX)&&void 0!==l?l:0)*t}px, ${null!==(r=a.offsetY)&&void 0!==r?r:0}px)`:null]:[n.css`
      padding: 0 ${o/2}px;
      height: ${se(i,"height")};
      align-self: ${i.alignSelf};
    `,0!==a.offsetX||0!==a.offsetY?`translate(${(null!==(s=a.offsetX)&&void 0!==s?s:0)*t}px, ${null!==(d=a.offsetY)&&void 0!==d?d:0}px)`:null]}(i,l,t,r,e)}render(){var e;const{span:t,offset:o,layoutId:i,layoutItem:a}=this.props;if(null==a||a.isPending)return null;const l=n.lodash.assign({},Ut,a.setting),r=(0,n.classNames)("row-layout-item",`col-${t}`,`offset-${o}`),s=null===(e=l.autoProps)||void 0===e?void 0:e.height,d=we(l.aspectRatio),[u,c]=this.getStyle(l);return(0,g.jsx)(Et,{css:u,style:{transform:c},className:r,layoutId:i,layoutItemId:a.id,forceAspectRatio:Ne(l),aspectRatio:d,onClick:this.props.onClick,autoHeight:s===b.Auto})}}const Xt=12;class Yt extends n.React.PureComponent{constructor(e){super(e),this.flipLeftRight=xe()}collectBounds(){var e;const{transformedLayout:t}=this.props,o=null!==(e=t.order)&&void 0!==e?e:[];return this.childRects=[],o.forEach(e=>{var o,n;if(t.content[e].isPending)return;const i=null===(n=null===(o=t.content)||void 0===o?void 0:o[e])||void 0===n?void 0:n.bbox;null!=i&&this.childRects.push({layoutId:t.id,id:e,left:parseInt(i.left,10),width:parseInt(i.width,10),height:parseInt(i.height,10)})}),this.childRects.sort((e,t)=>e.left-t.left)}getConfig(){var e;const{layout:t}=this.props;return null!==(e=t.setting)&&void 0!==e?e:Gt}createItem(e,t,o){var n;const{transformedLayout:i,isMultiRow:a}=this.props,l=this.getConfig(),r=e[t],s=t>0?e[t-1]:null,d=null!==(n=l.space)&&void 0!==n?n:0;let u,c=!0;if(a&&s&&(c=Math.floor(r.left/Xt)===Math.floor(s.left/Xt)),0===t)u=r.left;else if(c)s&&(u=r.left-s.left-s.width);else{const e=Math.floor(r.left/Xt);u=r.left-e*Xt}return(0,g.jsx)(_t,{offset:u,gutter:d,span:r.width,isMultiRow:a,layoutId:i.id,layoutItemId:r.id,layoutItem:i.content[r.id],alignItems:o.alignItems},`${r.layoutId}_${r.id}`)}render(){var e,t;const{layout:o,className:i}=this.props;this.collectBounds();const a=this.childRects,l=this.getConfig(),r=null!==(e=l.style)&&void 0!==e?e:{},s=null!==(t=l.space)&&void 0!==t?t:0;return(0,g.jsx)(d.Consumer,{children:e=>(0,g.jsx)("div",{className:(0,n.classNames)("row-layout",i,{"row-rtl":this.flipLeftRight}),css:Dt,"data-layoutid":o.id,children:(0,g.jsx)("div",{css:n.css`
                  width: 100%;
                  max-width: ${e.maxWidth>0?`${e.maxWidth}px`:"none"};
                `,children:(0,g.jsx)("div",{css:n.css`
                    position: relative;
                    height: 100%;
                    margin-left: ${-s/2}px;
                    margin-right: ${-s/2}px;
                    display: flex;
                    flex-direction: column;
                  `,children:a.length>0&&(0,g.jsx)("div",{className:(0,n.classNames)("row h-100 m-0",{"flex-nowrap":!this.props.isMultiRow}),css:n.css`
                        position: relative;
                        height: 100%;
                        overflow: ${this.props.isMultiRow?"auto":"unset"};
                      `,children:a.map((e,t)=>this.createItem(a,t,r))})})})})})}}class Jt extends n.React.PureComponent{constructor(e){super(e),this.layoutConRef=n.React.createRef(),this.onResize=({width:e,height:t})=>{var o;if(this.props.browserSizeMode!==this.props.mainSizeMode)return;if(0===e&&0===t)return;const{widgetId:n}=this.props;null!=(null===(o=window.runtimeInfo.widgets)||void 0===o?void 0:o[n])?window.runtimeInfo.widgets[n].height=t:window.runtimeInfo.widgets[n]={height:t}},this.handleDebounceResize=n.lodash.debounce(this.onResize,200)}findExtension(){const e=n.ExtensionManager.getInstance().getExtensions(`${n.extensionSpec.ExtensionPoints.LayoutTransformer}`);if((null==e?void 0:e.length)>0){const t=e.find(e=>e.layoutType===n.LayoutType.RowLayout);this.layoutTransform=null==t?void 0:t.transformLayout}}collectRowItems(){var e;const t=null!==(e=this.finalLayout.order)&&void 0!==e?e:[],o=[];let n=[],i=0;return o.push(n),t.forEach(e=>{if(this.finalLayout.content[e].isPending)return;const t=this.finalLayout.content[e].bbox,a=parseInt(t.left,10),l=Math.floor(a/Xt);l>i&&(n=[],i=l,o.push(n)),n.push(e)}),o}transform(){const{layout:e,layouts:t,browserSizeMode:o,mainSizeMode:n}=this.props;null==this.layoutTransform&&this.findExtension();let i=e;t[o]!==e.id&&null!=this.layoutTransform&&(i=this.layoutTransform(e,n,o,Ce())),this.finalLayout=i,this.numOfRows=this.collectRowItems().length}createRow(){const{layout:e,layouts:t}=this.props;return(0,g.jsx)(Yt,{layouts:t,layout:e,transformedLayout:this.finalLayout,isMultiRow:this.finalLayout!==e||this.numOfRows>1})}render(){var e,t;const{layout:o,className:i}=this.props,a=null!==(t=(null!==(e=o.setting)&&void 0!==e?e:Gt).style)&&void 0!==t?t:Gt.style;return this.transform(),(0,g.jsxs)("div",{className:(0,n.classNames)("layout d-flex",i),css:n.css`
          width: 100%;
          padding: ${v.styleUtils.toCSSPadding(a.padding)};
        `,"data-layoutid":o.id,ref:this.layoutConRef,children:[this.createRow(),(0,g.jsx)(n.ReactResizeDetector,{handleHeight:!0,onResize:this.handleDebounceResize,targetRef:this.layoutConRef})]})}}const Kt=n.ReactRedux.connect(ce)(Jt);var qt=r(462),Zt=r.n(qt),Qt=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o};const eo=e=>{const t=window.SVG,{className:o}=e,i=Qt(e,["className"]),a=(0,n.classNames)("jimu-icon jimu-icon-component",o);return t?(0,g.jsx)(t,Object.assign({className:a,src:Zt()},i)):(0,g.jsx)("svg",Object.assign({className:a},i))};var to=r(2838),oo=r.n(to),no=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o};const io=e=>{const t=window.SVG,{className:o}=e,i=no(e,["className"]),a=(0,n.classNames)("jimu-icon jimu-icon-component",o);return t?(0,g.jsx)(t,Object.assign({className:a,src:oo()},i)):(0,g.jsx)("svg",Object.assign({className:a},i))};function ao(e,t){var o;return null===(o=e.content)||void 0===o?void 0:o[t]}function lo(e){var t;const o=v.styleUtils.toCSSPadding(null===(t=null==e?void 0:e.style)||void 0===t?void 0:t.padding);if(o){if(e.paddingColor){const t=o.split(" "),i=e.paddingColor;let a="";const l=window.jimuUA.browser.name.toLowerCase();return"firefox"===l?a="-moz-":"safari"!==l&&"chrome"!==l||(a="-webkit-"),n.css`
        padding: ${o};
        background-image:
        ${a}linear-gradient(270deg, ${i} ${t[0]}, transparent ${t[0]}),
        ${a}linear-gradient(180deg, ${i} ${t[1]}, transparent ${t[1]}),
        ${a}linear-gradient(90deg, ${i} ${t[2]}, transparent ${t[2]}),
        ${a}linear-gradient(0deg, ${i} ${t[3]}, transparent ${t[3]});
      `}return n.css`
      padding: ${o};
    `}}const ro=n.css`
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
`,so=n.css`
  position: absolute;
  left: 0;
  top: 0;
  width: 100% !important;
  height: 100% !important;
  z-index: 30;
  background: var(--ref-palette-neutral-200);
`;function uo(e){const[t,o]=n.React.useState(!1),i=n.ReactRedux.useSelector(t=>function(e,t,o){var n,i;const a=e.appConfig.layouts[t],l=a.content[o];if(null!==(n=null==l?void 0:l.expandable)&&void 0!==n&&!n)return!1;const r=null===(i=null==a?void 0:a.setting)||void 0===i?void 0:i.rootItem;let s=!1;if(r===o){const e=ao(a,r);null!=e.children&&0!==e.children.length||(s=!0)}return!s}(t,e.layoutId,e.layoutItemId)),a=n.React.useCallback(()=>{o(!t)},[t]);return(0,g.jsx)(Et,Object.assign({},e,{css:n.css`${ro};${t?so:""}`,children:i&&(0,g.jsxs)(v.Button,{icon:!0,className:"max-grid-item-btn p-0",onClick:a,children:[t&&(0,g.jsx)(io,{}),!t&&(0,g.jsx)(eo,{})]})}))}const co=32;function po(e,t,o,n,i,a){let l=n,r=i;if("row"===o){const o=a?t.width:e.width,i=a?e.width:t.width;n<0&&(l=o>co?-Math.min(Math.abs(n),o-co):0),n>0&&(l=i>co?Math.min(n,i-co):0)}else i<0&&(r=e.height>co?-Math.min(Math.abs(i),e.height-co):0),i>0&&(r=t.height>co?Math.min(i,t.height-co):0);return{x:l,y:r}}function go(e){const t=e.getAttribute("data-layoutid"),o=e.getAttribute("data-layoutitemid");return+(0,n.getAppStore)().getState().appConfig.layouts[t].content[o].bbox.width}function vo(e){var t,o;const{referenceItemId:i,direction:a,layoutId:l,onResizeEnd:r}=e,s=n.React.useRef(void 0),d=n.React.useRef(void 0),u=n.React.useRef(null),c=null!==(o=null===(t=(0,n.getAppStore)().getState().appContext)||void 0===t?void 0:t.isRTL)&&void 0!==o&&o,p=n.ReactRedux.useSelector(e=>e.appRuntimeInfo.appMode===n.AppMode.Design),v=n.ReactRedux.useSelector(t=>{var o,n;return null===(n=null===(o=t.appConfig.layouts[e.layoutId].setting)||void 0===o?void 0:o.resizable)||void 0===n||n}),h=n.ReactRedux.useSelector(e=>{var t,o;return null!==(o=null===(t=e.appConfig.layouts[l].setting)||void 0===t?void 0:t.splitSize)&&void 0!==o?o:8}),y=n.ReactRedux.useSelector(e=>{var t;return null===(t=e.appConfig.layouts[l].setting)||void 0===t?void 0:t.splitColor}),f=n.React.useMemo(()=>{const e=`${h}px`,t=!!p||v;return n.css`
      width: ${"col"===a?"100%":e};
      height: ${"col"===a?e:"100%"};
      background: ${y};
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
    `},[a,v,p,h,y]);return n.hooks.useEffectOnce(()=>{let e,t,o,l,g,h,y,f,m,I,x,w,b;return n.moduleLoader.loadModule("jimu-core/dnd").then(n=>{const S=n.interact;u.current=S,s.current&&(d.current=S(s.current).origin("parent").draggable({inertia:!1,autoScroll:!1,enabled:!!p||v,modifiers:[S.modifiers.restrict({restriction:"parent"})],lockAxis:"row"===a?"x":"y",onstart:n=>{n.stopPropagation(),e=0,t=0,o=s.current.parentElement.getBoundingClientRect(),l=s.current.previousElementSibling,g=l.getBoundingClientRect(),y=l.style.width,f=l.style.height,h=go(l),m=s.current.nextElementSibling,I=m.getBoundingClientRect(),w=m.style.width,b=m.style.height,x=go(m)},onmove:o=>{o.stopPropagation(),e+=o.dx,t+=o.dy;const{x:n,y:i}=po(g,I,a,e,t,c),r=c?-1:1;"row"===a?(l.style.width=`calc(${h}% + ${n*r}px)`,m.style.width=`calc(${x}% - ${n*r}px)`):(l.style.height=`calc(${h}% + ${i}px)`,m.style.height=`calc(${x}% - ${i}px)`)},onend:n=>{n.stopPropagation(),e+=n.dx,t+=n.dy;const{x:s,y:d}=po(g,I,a,e,t,c),u=c?-1:1;l.style.width=y,m.style.width=w,l.style.height=f,m.style.height=b,r(i,Math.round(s*u*1e4/o.width)/100,Math.round(1e4*d/o.height)/100)}}))}),()=>{var e;null===(e=d.current)||void 0===e||e.unset(),d.current=null}}),n.React.useEffect(()=>{null!=d.current&&u.current(s.current).draggable(!!p||v)},[v,p]),(0,g.jsx)("div",{ref:s,css:f,className:"grid-split flex-shrink-0",children:(0,g.jsx)("div",{className:(0,n.classNames)("handler",{"horizontal-splitter":"row"===a,"vertical-splitter":"col"===a})})})}function ho(e){const{layout:t,layoutItemId:o,isLast:i,className:a}=e,l=n.React.useMemo(()=>ao(t,o),[t,o]),r=n.React.useMemo(()=>{if(l.parent){return ao(t,l.parent).gridType}return null},[t,l]),s=+l.bbox.width,d=n.React.useCallback(()=>r===n.GridItemType.Row?n.css`
        height: 100%;
        width: ${s}%;
      `:r===n.GridItemType.Column?n.css`
        width: 100%;
        height: ${s}%;
      `:n.css`
      width: 100%;
      height: 100%;
    `,[s,r]);return l.gridType===n.GridItemType.Row?(0,g.jsx)(yo,{className:a,css:d(),layout:t,layoutItemId:o,items:l.children}):l.gridType===n.GridItemType.Column?(0,g.jsx)(fo,{className:a,css:d(),layout:t,layoutItemId:o,items:l.children}):l.gridType===n.GridItemType.Tab?(0,g.jsx)(mo,{className:a,css:d(),layout:t,layoutItemId:o,items:l.children}):(0,g.jsx)(uo,{css:d(),className:(0,n.classNames)(`d-flex ${a}`,{"is-last":i}),layoutId:t.id,layoutItemId:o})}function yo(e){const{layout:t,layoutItemId:o,items:i,className:a}=e,l=n.React.useRef(void 0);n.hooks.useEffectOnce(()=>{n.moduleLoader.loadModule("jimu-for-builder").then(e=>{l.current=e.getAppConfigAction})});const r=n.hooks.useEventCallback((e,o)=>{const n=l.current(),a=i.indexOf(e),r=i[a+1],s=t.content[e],d=t.content[r];n.editLayoutItemProperty({layoutId:t.id,layoutItemId:e},"bbox",{width:+s.bbox.width+o}).editLayoutItemProperty({layoutId:t.id,layoutItemId:r},"bbox",{width:+d.bbox.width-o}).exec()});return(0,g.jsx)("div",{className:`d-flex ${a}`,css:n.css`
        .is-last {
          width: auto;
          flex-grow: 1;
          flex-shrink: 1;
          flex-basis: 0;
        }
      `,"data-layoutid":t.id,"data-layoutitemid":o,children:i.map((e,o)=>{return a=e,l=o===i.length-1,(0,g.jsxs)(n.React.Fragment,{children:[(0,g.jsx)(ho,{layout:t,layoutItemId:a},a),!l&&(0,g.jsx)(vo,{referenceItemId:a,layoutId:t.id,direction:"row",onResizeEnd:r})]},a);var a,l})})}function fo(e){const{layout:t,layoutItemId:o,items:i,className:a}=e,l=n.React.useRef(void 0);n.hooks.useEffectOnce(()=>{n.moduleLoader.loadModule("jimu-for-builder").then(e=>{l.current=e.getAppConfigAction})});const r=n.hooks.useEventCallback((e,o,n)=>{const a=l.current(),r=i.indexOf(e),s=i[r+1],d=t.content[e],u=t.content[s];a.editLayoutItemProperty({layoutId:t.id,layoutItemId:e},"bbox",{width:+d.bbox.width+n}).editLayoutItemProperty({layoutId:t.id,layoutItemId:s},"bbox",{width:+u.bbox.width-n}).exec()});return(0,g.jsx)("div",{className:`d-flex flex-column ${a}`,css:n.css`
        .is-last {
          height: auto;
          flex-grow: 1;
          flex-shrink: 1;
          flex-basis: 0;
        }
      `,"data-layoutid":t.id,"data-layoutitemid":o,children:i.map((e,o)=>{return a=e,l=o===i.length-1,(0,g.jsxs)(n.React.Fragment,{children:[(0,g.jsx)(ho,{layout:t,layoutItemId:a},a),!l&&(0,g.jsx)(vo,{referenceItemId:a,layoutId:t.id,direction:"col",onResizeEnd:r})]},a);var a,l})})}function mo(e){const{layout:t,layoutItemId:o,items:i,className:a}=e,l=n.hooks.useTranslation(v.defaultMessages),r=e=>function(e,t,o){var i,a,l,r,s,d,u;const{layoutId:c,layoutItemId:p}=t,g=e.layouts[c].content[p];if((null==g?void 0:g.type)===n.LayoutItemType.Widget){const t=e.widgets[g.widgetId];return t?null!==(a=null!==(i=null==t?void 0:t.label)&&void 0!==i?i:g.label)&&void 0!==a?a:g.id:o("placeholder")}if((null==g?void 0:g.type)===n.LayoutItemType.Section)return e.sections[g.sectionId].label;return(null==g?void 0:g.gridType)===n.GridItemType.Row?null!==(l=g.label)&&void 0!==l?l:o("gridRow"):(null==g?void 0:g.gridType)===n.GridItemType.Column?null!==(r=g.label)&&void 0!==r?r:o("gridCol"):(null==g?void 0:g.gridType)===n.GridItemType.Tab?null!==(s=g.label)&&void 0!==s?s:o("tabs"):null!==(u=null!==(d=null==g?void 0:g.label)&&void 0!==d?d:null==g?void 0:g.id)&&void 0!==u?u:""}((0,n.getAppStore)().getState().appConfig,{layoutId:t.id,layoutItemId:e},l);return(0,g.jsx)("div",{className:a,"data-layoutid":t.id,"data-layoutitemid":o,children:(0,g.jsx)(v.Tabs,{type:"tabs",fill:!0,scrollable:!0,className:"w-100 h-100",css:n.css`
          & > .tab-content {
            overflow: hidden;
          }
        `,children:[...i].map((e,o)=>((e,o)=>(0,g.jsx)(v.Tab,{id:`${o}`,title:r(e),children:(0,g.jsx)(ho,{layout:t,layoutItemId:e})},o))(e,o))})})}class Io extends n.React.PureComponent{findExtension(){const e=n.ExtensionManager.getInstance().getExtensions(`${n.extensionSpec.ExtensionPoints.LayoutTransformer}`);if((null==e?void 0:e.length)>0){const t=e.find(e=>e.layoutType===n.LayoutType.GridLayout);this.layoutTransform=null==t?void 0:t.transformLayout}}render(){var e,t;const{layouts:o,layout:i,browserSizeMode:a,mainSizeMode:l,className:r}=this.props;let s=i;o[a]!==i.id&&(null==this.layoutTransform&&this.findExtension(),null!=this.layoutTransform&&(s=this.layoutTransform(i,l,a)));const{rootItem:d}=null!==(e=s.setting)&&void 0!==e?e:{},u=null===(t=s.content)||void 0===t?void 0:t[d],c=(0,n.classNames)("layout grid-layout d-flex w-100 h-100",r);return(0,g.jsx)("div",{className:c,css:n.css`overflow: hidden;${lo(s.setting)}`,"data-layoutid":s.id,children:(0,g.jsx)("div",{"data-layoutid":s.id,className:"trail-container d-flex w-100 h-100",css:n.css`
            width: 100%;
          `,children:u?(0,g.jsx)(ho,{className:"w-100 h-100",layout:s,layoutItemId:d}):this.props.children})})}}const xo=n.ReactRedux.connect(ce)(Io);var wo=r(8736),bo=r.n(wo);function So(e){var t,o;const{layoutId:i,layoutItemId:a}=e,l=n.ReactRedux.useSelector(e=>{var t,o;const l=e.appConfig.layouts[i].content[a];if(!l)return"";if(l.type===n.LayoutItemType.Widget){const o=l.widgetId,n=e.appConfig.widgets[o];return null!==(t=null==n?void 0:n.label)&&void 0!==t?t:""}const r=l.sectionId,s=e.appConfig.sections[r];return null!==(o=null==s?void 0:s.label)&&void 0!==o?o:""}),r=n.ReactRedux.useSelector(e=>{var t,o,l,r;const s=e.appConfig.layouts[i].content[a];if(!s)return"";if(s.type===n.LayoutItemType.Widget){const n=s.widgetId,i=e.appConfig.widgets[n];return"string"==typeof(null==i?void 0:i.icon)?i.icon:null!==(o=null===(t=null==i?void 0:i.icon)||void 0===t?void 0:t.svg)&&void 0!==o?o:""}const d=s.sectionId,u=e.appConfig.sections[d];return"string"==typeof(null==u?void 0:u.icon)?u.icon:null!==(r=null===(l=null==u?void 0:u.icon)||void 0===l?void 0:l.svg)&&void 0!==r?r:bo()}),s=n.ReactRedux.useSelector(e=>{var t,o;const n=e.appConfig.layouts[i].parent.id;return null===(o=null===(t=e.appConfig.widgets[n].config)||void 0===t?void 0:t.header)||void 0===o?void 0:o.showWidgetIcon}),d=n.ReactRedux.useSelector(e=>{var t,o;const n=e.appConfig.layouts[i].parent.id;return null===(o=null===(t=e.appConfig.widgets[n].config)||void 0===t?void 0:t.header)||void 0===o?void 0:o.widgetIconSize}),u=n.ReactRedux.useSelector(e=>{var t,o;const n=e.appConfig.layouts[i].parent.id;return null===(o=null===(t=e.appConfig.widgets[n].config)||void 0===t?void 0:t.header)||void 0===o?void 0:o.widgetIconColor}),c=n.ReactRedux.useSelector(e=>{var t,o;const n=e.appConfig.layouts[i].parent.id;return null===(o=null===(t=e.appConfig.widgets[n].config)||void 0===t?void 0:t.header)||void 0===o?void 0:o.textStyle});return(0,g.jsx)("div",{className:"label d-flex align-items-center h-100",children:(0,g.jsxs)(n.React.Fragment,{children:[s&&(0,g.jsx)(v.Icon,{icon:r,size:null!=d?d:16,color:u}),(0,g.jsx)("div",{className:"ml-2 text-truncate",css:n.css`
            font-size: ${null!==(t=null==c?void 0:c.size)&&void 0!==t?t:"1rem"};
            font-weight: ${(null==c?void 0:c.bold)?"bold":"normal"};
            font-style: ${(null==c?void 0:c.italic)?"italic":"normal"};
            text-decoration: ${(null==c?void 0:c.underline)?"underline":""} ${(null==c?void 0:c.strike)?"line-through":""};
            color: ${null!==(o=null==c?void 0:c.color)&&void 0!==o?o:"inherit"};
          `,children:l})]})})}const Co=(e,t,o,i)=>{const a=null!=o?o:{},l=null!=i?i:{},{padding:r,expandedColor:s,collapsedColor:d,border:u,borderLeft:c,borderRight:p,borderTop:g,borderBottom:h,borderRadius:y}=a,{padding:f,border:m,borderRadius:I,backgroundColor:x,textColor:w}=l;return n.css`
  position: relative;
  & + .foldable-panel {
    margin-top: ${t}px;
  }
  .panel-header {
    padding: ${v.styleUtils.toCSSPadding(r)};
    border: ${v.styleUtils.toCSSBorder(u)};
    border-left: ${v.styleUtils.toCSSBorder(c)};
    border-right: ${v.styleUtils.toCSSBorder(p)};
    border-top: ${v.styleUtils.toCSSBorder(g)};
    border-bottom: ${v.styleUtils.toCSSBorder(h)};
    border-radius: ${v.styleUtils.toCSSBorderRadius(y)};
    background-color: ${null!=s?s:"var(--sys-color-primary-main)"};
    .tool-drag-handler {
      cursor: pointer;
      flex-grow: 1;
      flex-shrink: 1;
    }
  }
  .panel-content {
    padding: ${v.styleUtils.toCSSPadding(f)};
    border: ${v.styleUtils.toCSSBorder(m)};
    border-left: ${v.styleUtils.toCSSBorder(l.borderLeft)};
    border-right: ${v.styleUtils.toCSSBorder(l.borderRight)};
    border-top: ${v.styleUtils.toCSSBorder(l.borderTop)};
    border-bottom: ${v.styleUtils.toCSSBorder(l.borderBottom)};
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
  `};function Ro(e){var t,o,i,a,l,r,s,d,u,c,p;const{layoutId:h,layoutItemId:y,expanded:f,height:m,gap:I,onExpandedChange:x}=e,w=n.hooks.useTranslation(),b=n.ReactRedux.useSelector(e=>S(e.appConfig,{layoutId:h,layoutItemId:y})),C=n.ReactRedux.useSelector(e=>{var t,o;if(b.type===n.LayoutItemType.Widget){const o=b.widgetId,n=e.appConfig.widgets[o];return null!==(t=null==n?void 0:n.label)&&void 0!==t?t:""}const i=b.sectionId,a=e.appConfig.sections[i];return null!==(o=null==a?void 0:a.label)&&void 0!==o?o:""}),R=n.ReactRedux.useSelector(e=>{var t;const o=e.appConfig.layouts[h].parent.id;return null===(t=e.appConfig.widgets[o].config)||void 0===t?void 0:t.header}),T=n.ReactRedux.useSelector(e=>{var t;const o=e.appConfig.layouts[h].parent.id;return null===(t=e.appConfig.widgets[o].config)||void 0===t?void 0:t.panel}),j=n.ReactRedux.useSelector(e=>b.type===n.LayoutItemType.Widget&&he(b.widgetId,e.appConfig)),M=null!==(t=null==R?void 0:R.togglePosition)&&void 0!==t?t:"right",P=n.React.useCallback(()=>{x(y,!f)},[y,f,x]),$=f?null===(o=null==R?void 0:R.collapseIcon)||void 0===o?void 0:o.svg:null===(i=null==R?void 0:R.expandIcon)||void 0===i?void 0:i.svg;return(0,g.jsx)("div",{className:(0,n.classNames)("layout-item foldable-panel",{collapsed:!f,"functional-widget":j}),"data-layoutid":h,"data-layoutitemid":y,css:Co(m,I,R,T),children:(0,g.jsxs)("div",{className:"panel d-flex flex-column",children:[(0,g.jsxs)("div",{className:(0,n.classNames)("panel-header d-flex align-items-center",{"flex-row-reverse":"left"===M}),onClick:P,onKeyDown:null,role:"group","aria-label":C,children:[(0,g.jsx)("div",{className:"tool-drag-handler",children:h&&y&&(0,g.jsx)(So,{layoutId:h,layoutItemId:y})}),$&&(0,g.jsx)("div",{className:(0,n.classNames)("actions",{"ml-auto":"right"===M}),children:(0,g.jsx)(v.Button,{icon:!0,type:"tertiary",size:"sm","aria-expanded":f,title:w(f?"clickToHide":"clickToShow"),"aria-label":w(f?"clickToHide":"clickToShow"),children:(0,g.jsx)(v.Icon,{icon:$,size:f?null===(l=null===(a=null==R?void 0:R.collapseIcon)||void 0===a?void 0:a.properties)||void 0===l?void 0:l.size:null===(s=null===(r=null==R?void 0:R.expandIcon)||void 0===r?void 0:r.properties)||void 0===s?void 0:s.size,color:f?null===(u=null===(d=null==R?void 0:R.collapseIcon)||void 0===d?void 0:d.properties)||void 0===u?void 0:u.color:null===(p=null===(c=null==R?void 0:R.expandIcon)||void 0===c?void 0:c.properties)||void 0===p?void 0:p.color})})})]}),(0,g.jsx)("div",{className:(0,n.classNames)("panel-content d-flex flex-grow-1 flex-shrink-1"),children:e.children})]})})}function To(e){var t,o,i,a;const{layoutId:l,layoutItem:r,layoutItemId:s,expanded:d,gap:u,onExpandedChange:c}=e,p=(null==r?void 0:r.type)===n.LayoutItemType.Widget,v=(null==r?void 0:r.type)===n.LayoutItemType.Section,h=n.ReactRedux.useSelector(t=>ge(t,e),n.ReactRedux.shallowEqual),y=n.ReactRedux.useSelector(e=>{if(v)return Ve(e,r.sectionId)},n.ReactRedux.shallowEqual);let f;f=(null===(o=null===(t=r.setting)||void 0===t?void 0:t.autoProps)||void 0===o?void 0:o.height)===b.Auto?"auto":r.bbox.height;const m=Ne(null!==(i=r.setting)&&void 0!==i?i:{}),I=we(null===(a=r.setting)||void 0===a?void 0:a.aspectRatio);return(0,g.jsxs)(Ro,{layoutId:l,layoutItemId:s,height:f,expanded:d,gap:u,onExpandedChange:c,children:[p&&(0,g.jsx)(at,Object.assign({layoutId:l,layoutItemId:s,forceAspectRatio:m,aspectRatio:I},h)),v&&(0,g.jsx)($t,Object.assign({layoutId:l,layoutItemId:s},y))]})}var jo=r(8416),Mo=r.n(jo),Po=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o};const $o=e=>{const t=window.SVG,{className:o}=e,i=Po(e,["className"]),a=(0,n.classNames)("jimu-icon jimu-icon-component",o);return t?(0,g.jsx)(t,Object.assign({className:a,src:Mo()},i)):(0,g.jsx)("svg",Object.assign({className:a},i))};var Lo=r(5741),Oo=r.n(Lo),ko=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o};const Eo=e=>{const t=window.SVG,{className:o}=e,i=ko(e,["className"]),a=(0,n.classNames)("jimu-icon jimu-icon-component",o);return t?(0,g.jsx)(t,Object.assign({className:a,src:Oo()},i)):(0,g.jsx)("svg",Object.assign({className:a},i))},Ao=n.css`
  // position: sticky;
  // top: 0;
  margin-bottom: 4px;
  z-index: 1;
`;function zo(e){const{onExpandAll:t,onCollapseAll:o}=e,i=n.hooks.useTranslation();return(0,g.jsxs)("div",{css:Ao,className:"d-flex align-items-center justify-content-end",children:[(0,g.jsx)(v.Tooltip,{title:i("expandAll"),children:(0,g.jsx)(v.Button,{variant:"text",color:"inherit",icon:!0,size:"sm",onClick:t,children:(0,g.jsx)(Eo,{})})}),(0,g.jsx)(v.Tooltip,{title:i("collapseAll"),children:(0,g.jsx)(v.Button,{variant:"text",color:"inherit",icon:!0,size:"sm",onClick:o,className:"ml-1",children:(0,g.jsx)($o,{})})})]})}function No(e,t){const o=e[t.browserSizeMode]||e[t.appConfig.mainSizeMode],n=t.appConfig.layouts[o].parent.id;return t.appConfig.widgets[n]}class Bo extends n.React.PureComponent{constructor(e){super(e),this.handleExpandedChange=(e,t)=>{if(t)this.props.singleMode?this.setState({expandedItems:[e]}):this.state.expandedItems.includes(e)||this.setState({expandedItems:[...this.state.expandedItems,e]});else if(this.state.expandedItems.includes(e)){const t=this.state.expandedItems.filter(t=>t!==e);this.setState({expandedItems:t})}},this.expandAll=()=>{const{layout:e}=this.props;this.setState({expandedItems:[...e.order]})},this.collapseAll=()=>{this.setState({expandedItems:[]})};const t=this.props.expandByDefault.length>0?this.props.expandByDefault.split(","):[];this.state={expandedItems:t}}createItem(e){const{layout:t,gap:o}=this.props;return t.content[e].isPending?null:(0,g.jsx)(To,{layoutId:t.id,layoutItemId:e,expanded:this.state.expandedItems.includes(e),gap:o,layoutItem:t.content[e],onExpandedChange:this.handleExpandedChange},e)}render(){var e;const{layout:t,className:o,showToggleAll:i,padding:a,singleMode:l}=this.props,r=null!==(e=t.order)&&void 0!==e?e:[];return(0,g.jsxs)("div",{className:(0,n.classNames)("layout foldable-layout w-100 d-flex flex-column",o),css:n.css`position: relative; overflow: auto; padding: ${v.styleUtils.toCSSPadding(a)}`,"data-layoutid":t.id,children:[i&&!l&&(0,g.jsx)(zo,{onExpandAll:this.expandAll,onCollapseAll:this.collapseAll}),r.map(e=>this.createItem(e))]})}}const Fo=(0,n.createSelector)([(e,t)=>ce(e,t),(e,t)=>{var o,n;return null!==(n=null===(o=No(t.layouts,e).config)||void 0===o?void 0:o.singleMode)&&void 0!==n&&n},(e,t)=>{var o,n;return null!==(n=null===(o=No(t.layouts,e).config)||void 0===o?void 0:o.showToggleAll)&&void 0!==n&&n},(e,t)=>{var o,n;return null!==(n=null===(o=No(t.layouts,e).config)||void 0===o?void 0:o.gap)&&void 0!==n?n:4},(e,t)=>{var o;return null===(o=No(t.layouts,e).config)||void 0===o?void 0:o.padding},(e,t)=>{var o,n,i;const a=t.layouts[e.browserSizeMode]||t.layouts[e.appConfig.mainSizeMode],l=e.appConfig.layouts[a],r=null!==(n=null===(o=No(t.layouts,e).config)||void 0===o?void 0:o.expandedItems)&&void 0!==n?n:[],s=[];return r.length>0&&Object.keys(null!==(i=l.content)&&void 0!==i?i:{}).forEach(e=>{const t=l.content[e];r.includes(t.widgetId)&&s.push(e)}),s.join(",")}],(e,t,o,n,i,a)=>Object.assign({singleMode:t,showToggleAll:o,gap:n,padding:i,expandByDefault:a},e)),Wo=n.ReactRedux.connect(Fo)(Bo),Ho={min:16,space:10};class Vo extends n.React.PureComponent{isStretchInCrossAxis(){const{layoutItem:e}=this.props;return function(e){var t,o,n;return(null!==(n=null===(o=null===(t=e.setting)||void 0===t?void 0:t.autoProps)||void 0===o?void 0:o.height)&&void 0!==n?n:b.Stretch)===b.Stretch}(e)}calWidth(e,t){return function(e,t){var o,n;return(null===(o=e.autoProps)||void 0===o?void 0:o.width)===b.Auto||"ratio"===e.widthMode?"ratio"===e.widthMode?{width:"auto",flex:"0 0 auto"}:{width:"auto"}:(null===(n=e.autoProps)||void 0===n?void 0:n.width)===b.Stretch||"fit"===e.widthMode?{flex:"1 1 auto"}:{width:t.width,flexShrink:0}}(e,t)}getStyle(e,t,o,i){const{layoutItem:a}=this.props,l=a.bbox||{},r=this.calWidth(e,l);return r.height=t||o||i?"auto":l.height,function(e,t,o){var i,a,l;const r=(null===(i=t.autoProps)||void 0===i?void 0:i.width)===b.Auto;return n.css`
    align-self: ${o?"stretch":null!==(l=null===(a=t.style)||void 0===a?void 0:a.alignSelf)&&void 0!==l?l:"flex-start"};
    width: ${se(e,"width")};
    height: ${se(e,"height")};
    flex: ${e.flex};
    flex-shrink: ${e.flexShrink};
    min-width: ${r?"unset":null};
  `}(r,e,t&&!o)}render(){var e,t,o,i;const{layoutId:a,layoutItem:l}=this.props;if(!l||l.isPending)return null;const r=l.setting||{},s=null!==(t=null===(e=r.autoProps)||void 0===e?void 0:e.width)&&void 0!==t?t:b.Custom,d=(null===(o=r.autoProps)||void 0===o?void 0:o.height)===b.Auto,u=(null===(i=r.autoProps)||void 0===i?void 0:i.width)===b.Auto,c=(0,n.classNames)("flex-row-layout-item",{"d-flex":s!==b.Auto}),p=this.isStretchInCrossAxis(),v=Ne(r),h=we(r.aspectRatio);return(0,g.jsx)(Et,{css:this.getStyle(r,p,v,d),layoutId:a,layoutItemId:l.id,className:c,forceAspectRatio:v,aspectRatio:h,autoWidth:u,autoHeight:d})}}const Do=e=>n.css`
  height: 100%;
  overflow: hidden;
  justify-content: ${e.justifyContent};
  & > div.flex-row-layout-item ~ div.flex-row-layout-item {
    margin-left: ${e.space}px;
  }
`;class Go extends n.React.PureComponent{createItem(e,t){const{layout:o}=this.props;return(0,g.jsx)(Vo,{index:t,layoutId:o.id,layoutItemId:e,layoutItem:o.content[e]},e)}isEmpty(){var e;const{layout:t}=this.props,o=null!==(e=t.order)&&void 0!==e?e:[];return!(o.length>0&&o.some(e=>!t.content[e].isPending))}render(){var e;const{layout:t,className:o}=this.props,i=null!==(e=t.order)&&void 0!==e?e:[],a=Object.assign({},Ho,t.setting),l=this.isEmpty(),r={position:"relative",minWidth:a.min},s=(0,n.classNames)("layout flex-row-layout",o);return(0,g.jsx)("div",{className:s,style:r,"data-layoutid":t.id,children:(0,g.jsx)("div",{className:"trail-container d-flex w-100",css:n.css`
            position: ${l?"absolute":null};
            padding: ${v.styleUtils.toCSSPadding(a.padding)};
            ${Do(a)};
          `,children:i.map((e,t)=>this.createItem(e,t))})})}}const Uo=n.ReactRedux.connect(ce)(Go);function _o(){const e=n.ReactRedux.useSelector(e=>e.appConfig),t=n.ReactRedux.useSelector(e=>e.browserSizeMode),o=n.ReactRedux.useSelector(e=>{var o;return null===(o=e.appConfig.header)||void 0===o?void 0:o.layout[t]}),i=n.ReactRedux.useSelector(e=>{var o;return null===(o=e.appConfig.footer)||void 0===o?void 0:o.layout[t]}),a=n.ReactRedux.useSelector(e=>e.appConfig.widgets),l=n.ReactRedux.useSelector(e=>e.appConfig.sections),r=n.ReactRedux.useSelector(e=>e.appConfig.screenGroups),s=n.ReactRedux.useSelector(e=>e.appRuntimeInfo.currentPageId),d=n.hooks.useTranslation(n.defaultMessages),u=n.React.useMemo(()=>(0,n.getWidgetIdsInRootContainers)(e,t,s,T),[e,t,s]),c=n.React.useMemo(()=>n.css`
      position: absolute;
      z-index: 100000;
      height: 54px;
      left: -1000px;
      &:focus-within {
        left: 0;
      }
      ul {
        margin: 2px;
        padding: 0;
        padding-left: 2px;
        padding-top: 2px;
        background-color: var(--sys-color-primary-main);
        color: var(--sys-color-primary-text);
        &:focus-within {
          outline: 2px solid var(--sys-color-primary-text);
          outline-offset: -2px;
        }
        li {
          list-style: none;
          display: block;
          position: absolute;
          left: -1000px;
          padding: 0 20px;
          text-decoration: none;
          h6 {
            padding: 15px;
          }
          &:focus {
            position: static;
            left: auto;
            outline: none !important;
          }
        }
      }
    `,[]),p=e=>{var t,n,s;let u="";return u=e===o?d("header"):e===i?d("footer"):(null===(t=a[e])||void 0===t?void 0:t.label)||(null===(n=l[e])||void 0===n?void 0:n.label)||(null===(s=r[e])||void 0===s?void 0:s.label),u};return(0,g.jsx)("div",{css:c,className:"jimu-skip-to-container",children:(0,g.jsx)("ul",{className:n.INTERACTIVE_CLASS,"aria-label":d("a11ySkipTo"),children:u.map((e,t)=>(0,g.jsx)("li",{className:"jimu-outline-inside",tabIndex:0,onKeyDown:t=>{((e,t)=>{if("Enter"===e.key||" "===e.key){const e=document.getElementById(n.WIDGET_PREFIX_FOR_A11Y_SKIP+t);null==e||e.focus()}})(t,e)},children:(0,g.jsx)(v.Typography,{variant:"title2",children:d("a11ySkipToContent",{content:p(e)})})},t))})})}class Xo{constructor(){this.id="flow-layout-transformer",this.layoutType=n.LayoutType.FlowLayout}transformLayout(e,t,o){if(t!==o&&o===n.BrowserSizeMode.Small){let t=(0,n.Immutable)(e);return(e.order||[]).forEach(e=>{t=t.setIn(["content",e,"setting","heightMode"],"auto")}),t}return e}transformLayoutItem(e,t,o,n,i,a){return{index:t,item:e}}}function Yo(e,t,o){var n;const i=E(e,o),a=function(e,t,o){var n,i,a,l,r,s,d;const u=e.widgets[o];if(null!=u){const c=Re(),p=e.mainSizeMode,g=u.layouts.DEFAULT[c],v=u.layouts.DEFAULT[p],h=be(null!==(r=null===(l=null===(a=null===(i=(null!==(n=e.layouts[g])&&void 0!==n?n:e.layouts[v]).setting)||void 0===i?void 0:i.style)||void 0===a?void 0:a.padding)||void 0===l?void 0:l.number)&&void 0!==r?r:[0]),y=null!==(d=null===(s=null==t?void 0:t[o])||void 0===s?void 0:s.height)&&void 0!==d?d:0;let f=h[0],m=h[2];return le(f)&&(f=ue(f,y)),le(m)&&(m=ue(m,y)),y-f-m}return 0}(e,t,i);if(a>0){const t=null!==(n=e.layouts[o].order)&&void 0!==n?n:[],i={};return t.forEach(t=>{const n=e.layouts[o].content[t];i[t]=Se(a,n)}),i}return null}class Jo{constructor(){this.id="row-layout-transformer",this.layoutType=n.LayoutType.RowLayout}transformLayout(e,t,o,i){var a,l;if(t===o)return e;let r=(0,n.Immutable)(e);if(o===n.BrowserSizeMode.Small){const t=Yo(i,null===(a=window.runtimeInfo)||void 0===a?void 0:a.widgets,e.id);let o=0;Object.keys(null!==(l=e.content)&&void 0!==l?l:{}).sort((t,o)=>parseInt(e.content[t].bbox.left,10)-parseInt(e.content[o].bbox.left,10)).forEach(i=>{var a,l,s;const d=e.content[i];if(!d.isPending){if(r=r.setIn(["content",i,"bbox"],{left:o*Xt,width:Xt,height:null!==(l=null===(a=d.bbox)||void 0===a?void 0:a.height)&&void 0!==l?l:"auto"}),null!=t){const e=null!==(s=d.setting)&&void 0!==s?s:(0,n.Immutable)({});r=r.setIn(["content",i,"bbox","height"],t[i].height).setIn(["content",i,"setting"],e.merge(t[i].setting))}o+=1}})}return r}transformLayoutItem(e,t,o,n,i,a){return{item:e,index:t}}}var Ko=r(1496);class qo{constructor(){this.id="grid-layout-transformer",this.layoutType=n.LayoutType.GridLayout,this.transformLayout=(e,t,o)=>{var i,a,l;if(t!==o&&o===n.BrowserSizeMode.Small){let t=(0,n.Immutable)(e);const o=null===(i=e.setting)||void 0===i?void 0:i.rootItem,r=null===(a=e.setting)||void 0===a?void 0:a.mainItemId;if(o&&(null===(l=e.content)||void 0===l?void 0:l[o])){const i=[],a=e.content[o];if(r){let l;if(Object.keys(e.content).some(t=>{const o=e.content[t];return(o.widgetId===r||o.sectionId===r)&&(l=t,!0)}),l){if(t=this.collectItem(e,o,l,a.children,i),(null==i?void 0:i.length)>0){const a=`${Ko.utils.getMaximumId(e)+1}`,r={id:a,bbox:{width:50},gridType:n.GridItemType.Tab,children:i,parent:o};t=t.setIn(["content",a],r),i.forEach(e=>{t=t.setIn(["content",e,"parent"],a)}),t=t.setIn(["content",o,"gridType"],n.GridItemType.Column),t=t.setIn(["content",o,"children"],[l,a]),t=t.setIn(["content",l,"parent"],o).setIn(["content",l,"bbox","width"],50)}return t}}t=this.collectItem(e,o,null,a.children,i),i.length>0&&(t=t.setIn(["content",o,"gridType"],n.GridItemType.Tab),t=t.setIn(["content",o,"children"],i))}return t}return e},this.collectItem=(e,t,o,i,a)=>{let l=e;return null==i||i.forEach(i=>{var r;if(!e.content[i].isPending&&i!==o){const s=e.content[i];s.gridType!==n.GridItemType.Column&&s.gridType!==n.GridItemType.Row&&s.gridType!==n.GridItemType.Tab?(a.push(i),o||(l=l.setIn(["content",i,"parent"],t))):(null===(r=s.children)||void 0===r?void 0:r.length)>0&&(l=this.collectItem(l,t,o,s.children,a))}}),l}}transformLayoutItem(e,t,o,n,i,a){return{index:t,item:e}}}const Zo={gutter:0,style:{padding:{number:[0],unit:"px"},justifyContent:"flex-start",alignItems:"stretch",borderRadius:{number:[0],unit:v.DistanceUnits.PIXEL}}},Qo={lockParent:!0,heightMode:"auto",offsetX:0,offsetY:0},en=(0,n.createSelector)([(e,t)=>{var o;const{layoutItem:n}=t,i=null===(o=e.appRuntimeInfo)||void 0===o?void 0:o.selection;return!!i&&(i.layoutId===t.layoutId&&i.layoutItemId===n.id)},(e,t)=>{var o,i,a;const{layoutItem:l}=t;let r=[0,0,0,0];if(l.type===n.LayoutItemType.Widget){const t=l.widgetId,n=e.appConfig.widgets[t];n&&(r=v.styleUtils.expandStyleArray(null===(a=null===(i=null===(o=n.config)||void 0===o?void 0:o.style)||void 0===i?void 0:i.padding)||void 0===a?void 0:a.number))}return r[0]+r[2]},(e,t)=>{const{layoutItem:o}=t;let i=!0;if(o.type===n.LayoutItemType.Widget){const t=o.widgetId,n=e.appConfig.widgets[t];if(n){const t=Object.keys(n.layouts)[0],o=H(n.layouts[t],e.browserSizeMode,e.appConfig.mainSizeMode),a=e.appConfig.layouts[o];a&&Object.keys(a.content||[]).length>0&&Object.keys(a.content||[]).some(e=>!a.content[e].isPending&&(i=!1,!0))}}return i}],(e,t,o)=>({selected:e,padding:t,isEmpty:o}));function tn(e){const t=parseFloat(null==e?void 0:e.width);return t>0?`${e.width}`.includes("px")?`${Math.round(t)}px`:`${Math.round(t)}%`:"100%"}class on extends n.React.PureComponent{componentDidMount(){var e;const t=null!==(e=(0,n.getAppStore)().getState().queryObject)&&void 0!==e?e:{},{layoutId:o,layoutItem:i}=this.props,a=`${o}_block_${i.id}`;if(t.block_id===a){const e=document.getElementById(a);setTimeout(()=>{e.scrollIntoView({behavior:"smooth",block:"start"})},500)}}calHeight(e){const t=function(e,t){const o=se(e.bbox||{},"height");if(!o||le(o))return"auto";switch(t.heightMode){case"auto":return"auto";case"fixed":return o;default:return null}}(this.props.layoutItem,e);return this.autoHeight="auto"===t,t}getStyle(e){const{index:t,gutter:o}=this.props,i=xe()?-1:1;return[n.css`
        margin-top: ${t>0?`${o}px`:"unset"};
        width: ${tn(e)};
        height: ${this.calHeight(e)};
        flex-shrink: 0;
      `,e.offsetX||e.offsetY?`translate(${(e.offsetX||0)*i}px, ${e.offsetY||0}px)`:null]}render(){const{layoutId:e,layoutItem:t,parentRef:o,onClick:i,isEmpty:a}=this.props;if(!t||a)return null;const l=(0,n.classNames)("flow-layout-item","d-flex"),r=n.lodash.assign({},Qo,t.setting),[s,d]=this.getStyle(r);return(0,g.jsx)(Et,{id:`${e}_block_${t.id}`,css:s,style:{transform:d},layoutId:e,layoutItemId:t.id,parentRef:o,onClick:i,className:l,autoHeight:this.autoHeight})}}const nn=n.ReactRedux.connect(en)(on);class an extends n.React.PureComponent{calculatePosition(){const{layoutItem:e}=this.props;return function(e,t={}){var o,i,a;const l=e.setting,r=null!==(o=null==l?void 0:l.floatingArea)&&void 0!==o?o:1,s=`${null!==(i=null==l?void 0:l.offsetX)&&void 0!==i?i:0}px`,d=`${null!==(a=null==l?void 0:l.offsetY)&&void 0!==a?a:0}px`,{dh:u,dw:c,initWidth:p,initHeight:g,isResizing:v}=t,h=xe()?`translateX(calc(50% + ${s}))`:`translateX(calc(-50% + ${s}))`,y={};switch(r){case 1:y.left=s,y.top=d,y.transform=null;break;case 2:y.left="50%",y.top=d,y.transform=h;break;case 3:y.right=s,y.top=d,y.transform=null;break;case 4:y.left=s,y.top="50%",y.transform=`translateY(calc(-50% + ${d}))`;break;case 5:y.left="50%",y.top="50%",y.transform=`${h} translateY(calc(-50% + ${d}))`;break;case 6:y.right=s,y.top="50%",y.transform=`translateY(calc(-50% + ${d}))`;break;case 7:y.left=s,y.bottom=d,y.transform=null;break;case 8:y.left="50%",y.bottom=d,y.transform=h;break;case 9:y.right=s,y.bottom=d,y.transform=null}return n.css`
    position: fixed;
    z-index: 1;
    width: ${v?`${p+c}px`:se(e.bbox,"width")};
    height: ${v?`${g+u}px`:se(e.bbox,"height")};
    left: ${y.left};
    right: ${y.right};
    top: ${y.top};
    bottom: ${y.bottom};
    transform: ${y.transform};
  `}(e)}render(){const{layoutId:e,layoutItem:t,onClick:o}=this.props;if(!t)return null;const i=(0,n.classNames)("flow-layout-item floating","d-flex");return(0,g.jsx)(Et,{css:this.calculatePosition(),layoutId:e,layoutItemId:t.id,onClick:o,className:i})}}function ln(){const e=[0];for(let t=1;t<=100;t++)e.push(t/100);return e}function rn(e){switch(e){case n.ScreenTriggerType.Top:return"0% 0% -98% 0%";case n.ScreenTriggerType.Bottom:return"-98% 0% -2px 0%";case n.ScreenTriggerType.Upper:return`-${100/3-1}% 0% -${200/3-1}% 0%`;case n.ScreenTriggerType.Lower:return`-${200/3-1}% 0% -${100/3-1}% 0%`;default:return}}function sn(e,t,o,i){const a=n.React.useRef(void 0),l=n.React.useRef(void 0);n.React.useEffect(()=>{a.current&&(a.current.unobserve(e),a.current=null);if(e&&"function"==typeof IntersectionObserver){const n=new IntersectionObserver(e=>{(e=>{const t=e.boundingClientRect,o=e.rootBounds,n=Math.abs(t.bottom-o.top)>=Math.abs(t.top-o.top);if(e.isIntersecting){if(l.current=!0,n)i(!0)}else if(l.current&&(l.current=!1,n))i(!1)})(e[0])},{threshold:ln(),root:t||document,rootMargin:rn(o)});return n.observe(e),a.current=n,()=>{a.current.unobserve(e),a.current=null}}},[e,t,i,o])}const dn=.33,un=.25;function cn(e){const{props:t,viewHeight:o,headerHeight:i,isActive:a,verticalSpace:l,stretched:r,transitionType:s,screenTransitionType:d,isSmallSize:u}=e,{side:c,size:p,offset:g,background:h,textColor:y,overlay:f=!0,padding:m}=t.panel||{},I=(0,n.getAppStore)().getState().appContext.isRTL?"left"===c?"-":"":"right"===c?"-":"",x=v.styleUtils.toBackgroundEmotionStyle(null!=h?h:{}),w=parseFloat(l);if(u){const e=!f;return n.css`
      width: 100%;
      background: transparent;
      pointer-events: none;
      position: relative;
      opacity: ${s===n.ScreenTransitionType.Fade?a?"1":"0.5":null};
      min-height: ${d===n.ScreenTransitionType.Cover?`${o}px`:null};
      padding-top: ${d!==n.ScreenTransitionType.Fade&&e?`${Math.round(o*dn)}px`:null};

      &.top-spacing > .panel-content {
        /* margin-top: ${Math.round(o*dn)}px; */
      }

      .panel-content {
        width: 100%;
        ${f?"":x};
        color: ${f?"":y};
        /* margin-top: ${s===n.ScreenTransitionType.Push?"${Math.round(viewHeight * SCREEN_RATIO_IN_SMALL_SIZE)}px":"unset"}; */

        > .layout, > .layout-wrapper > .layout {
          pointer-events: auto;
          ${f?x:""};
          color: ${f?y:""};
          min-height: ${Math.round(o*un)}px;
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
      min-height: ${r?`${o}px`:"unset"};
      ${f?"":x};
      color: ${f?"":y};

      > .layout,
      > .layout-wrapper > .layout {
        pointer-events: auto;
        ${f?x:""};
        color: ${f?y:""};
        min-height: ${Math.round(o*un)}px;
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
          height: ${r?`${Math.round(o*w/100)}`:o}px;
        }
      }
    }

    .panel-content-placeholder {
      width: 1px;
      min-height: ${r?o:Math.round(o*un)}px;
    }

    body:not(.design-mode) & {
      &.top-spacing > .panel-content {
        /* margin-top: 66.7vh; */
      }

      .panel-content {
        min-height: ${r?i>0?`calc(100vh - ${i}px)`:"100vh":"unset"};
        min-height: ${r?i>0?`calc(var(--vh) * 100 - ${i}px)`:"calc(var(--vh) * 100)":"unset"};
        > .layout, > .layout-wrapper > .layout {
          min-height: unset;
        }

        .panel-spacing {
          height: ${w}vh;
          height: calc(var(--vh) * ${w});

          &.last-item {
            height: ${r?w:100}vh;
            height: calc(var(--vh) * ${r?w:100});
          }
        }
      }
      .panel-content-placeholder {
        min-height: ${r?"100":Math.round(25)}vh;
        min-height: calc(var(--vh) * ${r?"100":Math.round(25)});
      }
    }
  `}function pn(e){var t;const{index:o,screenId:i,onInteractionChange:a,onHeightChange:l,viewHeight:r,headerHeight:s,layoutEntry:d,isActive:u,isSmallSize:c,transitionType:p,screenTransitionType:v,triggerType:h,stretched:y,verticalSpace:f="0"}=e,m=n.ReactRedux.useSelector(e=>e.appConfig.screens[i]),{panel:I}=m,x=n.React.useRef(void 0),[w,b]=n.React.useState(!1),S=n.React.useRef(void 0),C=n.React.useCallback(e=>{a(o,e)},[o,a]);n.React.useEffect(()=>(S.current=n.lodash.debounce(l,200),()=>{var e;null===(e=S.current)||void 0===e||e.cancel()}),[l]);const R=n.React.useCallback(({width:e,height:t})=>{var n;null===(n=S.current)||void 0===n||n.call(S,o,t)},[o]);return sn(x.current,e.refElement,c?n.ScreenTriggerType.Lower:null!=h?h:n.ScreenTriggerType.Bottom,C),n.React.useEffect(()=>{b(!0)},[]),(0,g.jsxs)("div",{className:(0,n.classNames)("screen-side-panel",{"top-spacing":0===o&&((null===(t=m.panel)||void 0===t?void 0:t.overlay)||c)}),"data-screenid":i,"data-index":o,ref:x,css:cn({props:m,viewHeight:r,headerHeight:s,isActive:u,verticalSpace:f,stretched:y||null==I,transitionType:p,screenTransitionType:v,isSmallSize:c}),children:[I&&(0,g.jsxs)("div",{className:"panel-content",children:[(0,g.jsx)(d,{layouts:I.layout}),(0,g.jsx)("div",{className:(0,n.classNames)("panel-spacing",{"last-item":e.isLast})})]}),!I&&(0,g.jsx)("div",{className:"panel-content-placeholder"}),(0,g.jsx)(n.ReactResizeDetector,{targetRef:x,handleHeight:!0,onResize:R})]})}var gn=r(3529),vn=r.n(gn),hn=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o};const yn=e=>{const t=window.SVG,{className:o}=e,i=hn(e,["className"]),a=(0,n.classNames)("jimu-icon jimu-icon-component",o);return t?(0,g.jsx)(t,Object.assign({className:a,src:vn()},i)):(0,g.jsx)("svg",Object.assign({className:a},i))},fn=(0,Ke.withBuilderTheme)(v.Tooltip);function mn(e){const{rootLayoutId:t,viewHeight:o,headerHeight:i,screenId:a,isActive:l,isAbsolute:r,isLast:s,isSmallSize:d,layoutEntry:u,isDesignMode:c,formatMessage:p,builderTheme:h}=e,y=n.ReactRedux.useSelector(e=>e.appConfig.screens[a]),f=n.ReactRedux.useSelector(e=>{var t,o,n;return null===(n=null===(o=null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.screenPanelStates)||void 0===o?void 0:o[a])||void 0===n||n}),{main:m}=y,{side:I,size:x,overlay:w=!0}=y.panel||{},b=n.React.useRef(void 0),S=n.React.useCallback(()=>{(0,n.getAppStore)().dispatch(n.appActions.screenPanelVisibleChanged(a,!0))},[a]);const C=(0,n.classNames)("screen-main-panel",{"is-active":l,"last-one":s});return(0,g.jsx)(n.PageVisibilityContext.Provider,{value:!r||l,children:(0,g.jsxs)("div",{id:`${t}_screen_${a}`,className:C,css:function(){var e,t,a,l,s,u,c,p;const g=Object.assign(Object.assign({},null!==(t=null===(e=y.main)||void 0===e?void 0:e.background)&&void 0!==t?t:{}),{color:(null===(l=null===(a=y.main)||void 0===a?void 0:a.background)||void 0===l?void 0:l.color)||"var(--sys-color-surface-background)"});if(d){const e=!w&&null!=y.panel,t=e?`${Math.round(o*dn)}px`:`${o}px`,a=e?`${Math.round(33)}`:"100";return n.css`
        pointer-events: none !important;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: ${o}px;

        > .layout {
          ${v.styleUtils.toBackgroundEmotionStyle(g)};
          color: ${null!==(u=null===(s=y.main)||void 0===s?void 0:s.textColor)&&void 0!==u?u:null};
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
      `}let f="0px",m="0px";"none"!==I&&(w||"right"===I||(f=x),w||"right"!==I||(m=x));const b=h?n.css`
      color: ${h.ref.palette.neutral[1200]};
      background-color: ${h.ref.palette.neutral[500]};
      border-color: ${h.ref.palette.neutral[600]};
      &:hover {
        color: ${h.ref.palette.black};
        background-color: ${h.ref.palette.neutral[600]};
      }
    `:null;return n.css`
      ${v.styleUtils.toBackgroundEmotionStyle(g)};
      color: ${null!==(p=null===(c=y.main)||void 0===c?void 0:c.textColor)&&void 0!==p?p:null};
      left: ${r?f:null};
      right: ${r?m:null};
      margin-left: ${r?null:f};
      margin-right: ${r?null:m};
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
    `}(),ref:b,"data-screenid":a,"data-index":e.index,children:[(0,g.jsx)(u,{layouts:m.layout,isInWidget:!0}),(0,g.jsx)("div",{className:"spacing-area"}),c&&!f&&(0,g.jsx)("div",{className:"toggle-visible-btn",onClick:S,"data-testid":"toggleBtn",children:(0,g.jsx)(fn,{placement:"auto",title:p("showInDesignView"),children:(0,g.jsx)(v.Button,{type:"default",size:"sm",className:"rounded-1",children:(0,g.jsx)(yn,{size:"m"})})})})]})})}function In(e,t,o,i,a){return e===n.ScreenTransitionType.Fade?n.css`
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
    `:void 0}function xn(e,t,o){return e===n.ScreenTransitionType.Fade?n.css`
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
    `:void 0}function wn(e){const{rootLayoutId:t,activeIndex:o,viewHeight:i,headerHeight:a,screens:l,transitionType:r,isSmallSize:s,layoutEntry:d,isDesignMode:u,formatMessage:c,builderTheme:p}=e;return(0,g.jsxs)(n.React.Fragment,{children:[(0,g.jsx)("div",{className:"screen-container",css:In(r,i,a,s,l.length),children:l.map((e,v)=>(0,g.jsx)(mn,{rootLayoutId:t,index:v,isActive:o===v,screenId:e,viewHeight:i,headerHeight:a,isAbsolute:r===n.ScreenTransitionType.Fade,isLast:v===l.length-1,isSmallSize:s,layoutEntry:d,isDesignMode:u,formatMessage:c,builderTheme:p},e))}),(0,g.jsx)("div",{className:"screen-placeholder",css:xn(r,i)})]})}function bn(e,t){return n.css`
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
  `}function Sn(e){var t;const{layoutId:o,layoutItemId:i,layoutItem:a}=e,{screenGroupId:l}=a,r=n.ReactRedux.useSelector(e=>e.appConfig.screenGroups[a.screenGroupId]),s=n.ReactRedux.useSelector(e=>{var t,o;return null!==(o=null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.isPrintPreview)&&void 0!==o&&o}),u=n.ReactRedux.useSelector(e=>e.appConfig.screenGroups[a.screenGroupId].screens.some(t=>null!=e.appConfig.screens[t].panel)),c=n.ReactRedux.useSelector(e=>e.browserSizeMode),{pageId:p}=n.React.useContext(d),v=n.ReactRedux.useSelector(e=>{const t=e.appConfig.pages[p];if(null==t?void 0:t.header){const t=e.appConfig.header;if(null==t?void 0:t.sticky){const o=e.browserSizeMode,n=e.appConfig.mainSizeMode,i=t.height[o]||t.height[n]||75;return parseInt(i,10)}}return 0}),{screens:h,stretchPanel:y=!0,triggerType:f=n.ScreenTriggerType.Bottom,verticalSpace:m="0",panelTransitionType:I=n.ScreenTransitionType.Push}=r;let x=s?null:null!==(t=r.transitionType)&&void 0!==t?t:n.ScreenTransitionType.Fade;s||c!==n.BrowserSizeMode.Small||u||(x=n.ScreenTransitionType.Cover);const w=n.ReactRedux.useSelector(e=>{var t;return null===(t=e.appRuntimeInfo.screenGroupNavInfos)||void 0===t?void 0:t[l]}),b=n.React.useRef(void 0),S=n.React.useRef(void 0),C=n.React.useRef(void 0),R=n.React.useRef(void 0),[T,j]=n.React.useState(0),M=n.React.useMemo(()=>{var e,t,o;if(c!==n.BrowserSizeMode.Small)return!1;const i=(0,n.getAppStore)().getState().appConfig,a=null===(t=null===(e=i.screenGroups)||void 0===e?void 0:e[l])||void 0===t?void 0:t.screens;if(null==a?void 0:a[T]){return null===(o=i.screens[a[T]].panel)||void 0===o?void 0:o.overlay}return!1},[l,T,c]);n.React.useEffect(()=>{null!=(null==w?void 0:w.activeIndex)&&w.activeIndex!==T&&j(w.activeIndex)},[w,T]);const P=n.React.useCallback((e,t)=>{t&&e!==T?(0,n.getAppStore)().dispatch(n.appActions.screenGroupNavInfoChanged(l,e,!1)):!t&&e>0&&(0,n.getAppStore)().dispatch(n.appActions.screenGroupNavInfoChanged(l,e-1,!1))},[T,l]),$=n.React.useCallback(()=>{if(!C.current)return;const e=C.current.children[0],t=C.current.children[1],o=t.childElementCount;for(let n=0;n<o;n++){const o=t.children[n],i=o.getAttribute("data-screenid"),a=e.querySelector(`[data-screenid="${i}"]`);a&&(a.style.height=s?`${o.clientHeight}px`:null)}e.style.height=`${t.clientHeight}px`},[s]),L=n.React.useMemo(()=>n.lodash.debounce($,200),[$]),O=n.React.useCallback((e,t)=>{if(!C.current)return;const o=C.current.children[0],i=C.current.children[1];if(x!==n.ScreenTransitionType.Fade)if(x!==n.ScreenTransitionType.Cover){if(x===n.ScreenTransitionType.Push){const t=o.querySelector(`div.screen-main-panel[data-index="${e}"]`),n=i.querySelector(`div.screen-side-panel[data-index="${e}"]`);t.style.height=`${n.clientHeight}px`,o.style.height=`${i.clientHeight}px`}}else!function(e,t,o){const i=e.querySelectorAll("div.screen-main-panel"),a=t.querySelectorAll("div.screen-side-panel"),l=i.length;for(let e=1;e<l;e++){const t=i.item(e),o=i.item(e-1),n=a.item(e-1);t.style.marginTop=n.clientHeight-o.clientHeight+"px"}o!==n.BrowserSizeMode.Small&&(e.style.height=`${t.clientHeight}px`)}(o,i,c);else o.style.height=`${i.clientHeight}px`},[c,x]),k=n.React.useMemo(()=>{const{a11yLabel:e,addToA11ySkip:t,label:o}=r;return(0,n.getA11yProps)(l,o,e,t)},[r,l]);return h.length>0?(0,g.jsx)("div",{className:(0,n.classNames)("flow-layout-item",{"print-preview":s,"small-size":c===n.BrowserSizeMode.Small}),css:bn(0,M),"data-layoutitemid":i,"data-layoutid":o,ref:b,children:(0,g.jsxs)("div",Object.assign({className:"screen-group",ref:C},k,{children:[(0,g.jsx)("div",{className:"main-panels",ref:R,children:(0,g.jsx)(wn,{rootLayoutId:o,activeIndex:T,screens:h,transitionType:x,layoutEntry:gt,headerHeight:v,isSmallSize:c===n.BrowserSizeMode.Small})}),(0,g.jsxs)("div",{className:"side-panels",ref:S,children:[h.map((e,t)=>(0,g.jsx)(pn,{index:t,isLast:t===h.length-1,screenId:e,refElement:null,layoutEntry:gt,isActive:t===T,stretched:y,triggerType:f,verticalSpace:m,transitionType:I,screenTransitionType:x,onHeightChange:O,onInteractionChange:P,isSmallSize:c===n.BrowserSizeMode.Small,headerHeight:v},e)),(0,g.jsx)(n.ReactResizeDetector,{targetRef:S,handleHeight:!0,onResize:L})]})]}))}):null}class Cn extends n.React.PureComponent{constructor(e){super(e),this.ref=n.React.createRef();const t=n.ExtensionManager.getInstance().getExtensions(`${n.extensionSpec.ExtensionPoints.LayoutTransformer}`);if(t&&t.length>0){const e=t.find(e=>e.layoutType===this.props.layout.type);this.layoutTransform=null==e?void 0:e.transformLayout}}_createItem(e,t,o){var i;const{layout:a}=this.props;return(null==e?void 0:e.isPending)?null:e.type===n.LayoutItemType.ScreenGroup?(0,g.jsx)(Sn,{itemIndex:t,layoutId:a.id,layoutItemId:e.id,layoutItem:e},`${e.id}_${t}`):(null===(i=e.setting)||void 0===i?void 0:i.isFloating)?(0,g.jsx)(an,{index:t,gutter:o.gutter,layoutId:a.id,layoutItemId:e.id,layoutItem:e},e.id):(0,g.jsx)(nn,{index:t,gutter:o.gutter,layoutId:a.id,layoutItemId:e.id,parentRef:{current:document.body},layoutItem:e},e.id)}render(){const{layout:e,className:t,style:o,layouts:i,browserSizeMode:a}=this.props;if(!e)return null;let l=e;if(i[a]!==e.id&&this.layoutTransform){let t;Object.keys(i).some(o=>i[o]===e.id&&(t=o,!0)),l=this.layoutTransform(e,t,a)}const r=l.order||[],s=n.lodash.assign({},Zo,l.setting),d=Object.assign(Object.assign(Object.assign({},o),v.styleUtils.toCSSStyle(s.style)),{position:"relative"}),u=(0,n.classNames)("layout flow-layout w-100",t);return(0,g.jsx)("div",{ref:this.ref,className:u,style:d,"data-layoutid":e.id,children:(0,g.jsx)("div",{"data-layoutid":l.id,className:"trail-container d-flex flex-column align-items-center",css:n.css`
            width: 100%;
          `,children:r.map((e,t)=>this._createItem(l.content[e],t,s))})})}}const Rn=n.ReactRedux.connect(ce)(Cn);function Tn(e,t,o){var i;const a=Object.keys(null!==(i=e.controllerPanels)&&void 0!==i?i:{}).filter(i=>{const a=z(e,i,n.LayoutItemType.Widget,o);return null!=a&&(a.type!==n.ContainerType.Page||a.id===t)});return a.sort(),a.join(",")}function jn(e){if(null==e)return null;const{position:t,offsetX:o=0,offsetY:i=0}=e;let a;return e.widthMode!==b.Stretch&&(0!==o&&(a=`translateX(${o}px)`),t!==n.FixedPosition.TopCenter&&t!==n.FixedPosition.MiddleCenter&&t!==n.FixedPosition.BottomCenter||(a=null!=a?`${a} translateX(-50%)`:"translateX(-50%)")),e.heightMode!==b.Stretch&&(0!==i&&(a=null!=a?`${a} translateY(${i}px)`:`translateY(${i}px)`),t!==n.FixedPosition.MiddleLeft&&t!==n.FixedPosition.MiddleCenter&&t!==n.FixedPosition.MiddleRight||(a=null!=a?`${a} translateY(-50%)`:"translateY(-50%)")),a}function Mn(e){let t,o,i;switch(null==e?void 0:e.position){case n.FixedPosition.TopLeft:t=n.css`top: 0; left: 0; bottom: auto; right: auto;`;break;case n.FixedPosition.TopRight:t=n.css`top: 0; left: auto; bottom: auto; right: 0;`;break;case n.FixedPosition.BottomLeft:t=n.css`top: auto; left: 0; bottom: 0; right: auto;`;break;case n.FixedPosition.BottomRight:t=n.css`top: auto; left: auto; bottom: 0; right: 0;`;break;case n.FixedPosition.TopCenter:t=n.css`top: 0; left: 50%; bottom: auto; right: auto;`;break;case n.FixedPosition.BottomCenter:t=n.css`top: auto; left: 50%; bottom: 0; right: auto;`;break;case n.FixedPosition.MiddleLeft:t=n.css`top: 50%; left: 0; bottom: auto; right: auto;`;break;case n.FixedPosition.MiddleRight:t=n.css`top: 50%; left: auto; bottom: auto; right: 0;`;break;case n.FixedPosition.MiddleCenter:t=n.css`top: 50%; left: 50%; bottom: auto; right: auto;`;break;default:t=n.css`top: 0; left: 0; bottom: auto; right: auto;`}return e.widthMode===b.Stretch&&(o=n.css`width:auto;left:${e.left};right:${e.right};`),e.heightMode===b.Stretch&&(i=n.css`height:auto;top:${e.top};bottom:${e.bottom};`),n.css`
    position: fixed;
    ${t}
    width: ${null==e?void 0:e.width};
    height: ${null==e?void 0:e.height};
    ${o};
    ${i}
    overflow: visible;
    z-index: 2;
  `}const Pn=(e,t,o)=>n.React.useCallback(i=>{if(!e)return;const a=i.key,l=i.shiftKey;if("Tab"===a)if(l){const t=(0,v.getFocusableElements)(e).filter(e=>{var t,n;return!(null===(n=null===(t=null==e?void 0:e.classList)||void 0===t?void 0:t.contains)||void 0===n?void 0:n.call(t,o))});if(!t||0===t.length)return;(0,n.focusElementInKeyboardMode)(t[t.length-1],!0)}else{const o=e.querySelector(`.${t}`);(0,n.focusElementInKeyboardMode)(o,!0)}},[e,t,o]);var $n=r(9238),Ln=r.n($n);const On=n.css`
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
`;function kn(e){const{layoutId:t,layoutItemId:o,controllerId:i,minimized:a,onClose:l,onToggle:r}=e,[s,d]=n.React.useState(!1),u=n.React.useRef(void 0),c=n.hooks.useLatest(l),p=n.hooks.useLatest(r),[h,y]=n.React.useState(),f=n.hooks.useTranslation(),m=n.ReactRedux.useSelector(e=>e.appConfig.layouts[t].content[o].widgetId),I=n.ReactRedux.useSelector(e=>{var t;const o=null===(t=e.widgetsRuntimeInfo)||void 0===t?void 0:t[m];return(null==o?void 0:o.state)===n.WidgetState.Opened}),x=n.ReactRedux.useSelector(e=>{const t=e.appConfig.widgets[m];return null==t?void 0:t.label},n.ReactRedux.shallowEqual),w=n.ReactRedux.useSelector(e=>{var t;const o=e.widgetsRuntimeInfo[m];return null!==(t=null==o?void 0:o.isClassLoaded)&&void 0!==t&&t}),b=n.ReactRedux.useSelector(e=>e.appConfig.controllerPanels[i].effect),S=n.hooks.usePrevious(I),C=n.React.useMemo(()=>(0,n.prepareLocalVariants)(`${t}_${o}`,null,null,b,null,null),[b,t,o]),R=n.React.useCallback(e=>{c.current(e,m);const t=document.querySelector(`.widget-controller .avatar-card[data-widgetid='${m}'] button`);if(t)(0,n.focusElementInKeyboardMode)(t);else{const e=document.querySelector(`[data-widgetid='${i}'] .popup-more-button button`);(0,n.focusElementInKeyboardMode)(e)}},[c,m,i]),T=n.ReactRedux.useSelector(e=>{var t;return null===(t=e.widgetsState[m])||void 0===t?void 0:t.autoFocus});(0,v.useTrapFocusBySelector)(u,!0,T,".first-node",".last-virtual-node",s&&I),n.React.useEffect(()=>{I&&!s&&(d(!0),n.WidgetManager.getInstance().loadWidgetClass(m).catch(e=>{console.log(e)}))},[I,m,s]),n.React.useEffect(()=>{I&&!S&&C&&y("hide")},[I,S,C]);let j;s&&w&&(j=n.WidgetManager.getInstance().getWidgetClass(m));const M=Pn(u.current,"first-node","last-virtual-node"),P=n.React.useMemo(()=>[{name:"collapse",className:a?"first-node action-collapse collapsed":"first-node action-collapse",label:f(a?"expand":"collapse"),icon:Ln(),onClick:p.current},{name:"close",className:"action-close",label:f("close"),icon:oo(),onClick:R}],[R,a,p,f]);return(0,g.jsxs)(n.motion.div,{id:`${t}_${o}`,className:(0,n.classNames)("controller-panel flex-column w-100 h-100",{"d-none":!s||!I}),css:On,ref:u,animate:h,onAnimationComplete:()=>{if(null==h?void 0:h.endsWith("hide")){const e=h.replace("hide","show");y(e)}else y("visible")},variants:C,children:[(0,g.jsx)(v.PanelHeader,{level:2,type:"primary",title:x,actions:P,moveable:!1}),(0,g.jsxs)(v.Surface,{level:"paper",variant:"flat",className:"panel-content d-flex flex-grow-1",children:[!w&&(0,g.jsx)(v.Loading,{type:v.LoadingType.Donut}),j&&(0,g.jsx)("div",{className:"w-100 h-100 widget-content p-1",children:(0,g.jsx)(n.ErrorBoundary,{children:(0,g.jsx)(j,{widgetId:m,layoutId:t,layoutItemId:o})})}),(0,g.jsx)("button",{className:"sr-only last-virtual-node",onKeyUp:M})]})]})}function En(e){const{controllerId:t}=e,[o,i]=n.React.useState(!1),a=n.ReactRedux.useSelector(e=>{const o=e.appConfig.widgets[t],n=o.manifest.layouts[0].name,i=o.layouts[n];return i[e.browserSizeMode]||i[e.appConfig.mainSizeMode]}),l=n.ReactRedux.useSelector(e=>{var t;const o=e.appConfig.layouts[a];if(!o)return"";const n=e.appConfig.widgets,i=Object.keys(null!==(t=o.content)&&void 0!==t?t:{}).filter(e=>{const t=o.content[e],i=n[null==t?void 0:t.widgetId];return null!=(null==t?void 0:t.widgetId)&&!t.isPending&&!(null==i?void 0:i.offPanel)});return i.sort(),i.join(",")}),r=n.ReactRedux.useSelector(e=>{var t,o;const i=e.appConfig.widgets,l=Object.keys(null!==(t=e.widgetsRuntimeInfo)&&void 0!==t?t:{}).filter(t=>{var o;return e.widgetsRuntimeInfo[t].state===n.WidgetState.Opened&&!(null===(o=i[t])||void 0===o?void 0:o.offPanel)}),r=e.appConfig.layouts[a];return Object.keys(null!==(o=r.content)&&void 0!==o?o:{}).some(e=>{const t=r.content[e];return null!=(null==t?void 0:t.widgetId)&&!t.isPending&&l.includes(t.widgetId)})}),s=n.React.useMemo(()=>l.split(",").filter(e=>""!==e),[l]),d=n.ReactRedux.useSelector(e=>e.appConfig.controllerPanels[t]),u=n.React.useCallback((e,t)=>{e.stopPropagation(),(0,n.getAppStore)().dispatch(n.appActions.closeWidget(t))},[]),c=n.React.useCallback(()=>{i(!o)},[o]),p=n.React.useMemo(()=>n.css`
    ${Mn(d)}
    height: ${o?"36px":null==d?void 0:d.height};
    transition: height 0.3s ease-in-out;
    transform: ${jn(d)}
  `,[d,o]);return 0===s.length?null:(0,g.jsx)("div",{className:(0,n.classNames)("panel-container",{"d-none":!r}),css:p,children:(0,g.jsx)(n.React.Fragment,{children:s.map(e=>(0,g.jsx)(kn,{controllerId:t,layoutId:a,layoutItemId:e,minimized:o,onToggle:c,onClose:u},e))})})}function An(e){const{pageId:t}=e,o=n.ReactRedux.useSelector(e=>Tn(e.appConfig,t,e.browserSizeMode)),i=n.React.useMemo(()=>o.split(",").filter(e=>""!==e),[o]);return(0,g.jsx)(n.React.Fragment,{children:i.map(e=>(0,g.jsx)(En,{controllerId:e},e))})}function zn(e){const{pageJson:t,visible:o,pageContext:i,browserSizeMode:a,isPrintPreview:l,headerFooterHeight:r}=e,[s,u]=n.React.useState(null),c=n.React.useRef(!1),p=t.layout,v=n.hooks.usePrevious(o),h=n.React.useMemo(()=>function(e,t){if(e){const o=(0,n.getAppStore)().getState().appConfig,i=e.layout[o.mainSizeMode],a=o.layouts[i];if((null==a?void 0:a.type)===n.LayoutType.GridLayout)return t>0?`calc(100% - ${t}px)`:"100%"}return"auto"}(t,r),[r]),y=!l&&t.oneByOneEffect&&t.oneByOneEffect.type!==n.AnimationType.None?t.oneByOneEffect:null,[f,m]=n.React.useMemo(()=>[(0,n.prepareOneByOneVariants)(y),(0,n.prepareOneByOneTransition)(y)],[y]);let I;n.React.useEffect(()=>{u("hide")},[]),n.React.useEffect(()=>{var e;if(o&&p){const t=(0,n.getAppStore)().getState().appConfig,o=p[t.mainSizeMode],i=null===(e=t.layouts[o])||void 0===e?void 0:e.type,a=document.getElementsByTagName("html")[0];i===n.LayoutType.FlowLayout?a.classList.add("scrollable"):a.classList.remove("scrollable")}},[o,p]),n.React.useEffect(()=>{null!=v&&v!==o&&u(o?"show":"hide")},[o,v]),t.mode!==n.PageMode.FitWindow&&t.maxWidth>0&&(I=t.maxWidth);const x=n.React.useMemo(()=>{const e=(0,n.getAppStore)().getState();let o;return t.layout&&(o=H(t.layout,a,e.appConfig.mainSizeMode)),Object.assign(Object.assign({},i),{maxWidth:I,viewOnly:!0,rootLayoutId:o,pageId:t.id})},[i,I,t.id,t.layout,a]),w=n.React.useMemo(()=>({show:{opacity:1,transition:m},hide:{opacity:1,transition:{type:"tween",duration:0}}}),[m]);if(p)return(0,g.jsx)(n.motion.div,{id:t.id,"data-pageid":t.id,className:"page",css:n.css`
        display: ${o?"flex":"none"};
        background-color: ${t.bodyBackgroundColor||"var(--sys-color-surface-background)"};
        color: ${t.bodyTextColor||"var(--sys-color-surface-background-text)"};
        height: ${h};
        flex: 1 0 auto;
        z-index: 1;
      `,initial:c.current?void 0:"hide",animate:s,onAnimationComplete:()=>{o&&"hide"===s?(u("show"),c.current=!0):(null==s?void 0:s.endsWith("show"))&&u(null)},variants:w,children:(0,g.jsx)(n.AnimationContext.Provider,{value:{variants:f||n.DEFAULT_VARIANTS,oid:x.rootLayoutId},children:(0,g.jsx)(d.Provider,{value:x,children:(0,g.jsxs)(n.PageVisibilityContext.Provider,{value:o,children:[(0,g.jsx)(gt,{layouts:p,className:"w-100 flex-grow-1",css:n.css`
                margin: 0 auto;
                background-color: transparent;
                z-index: 0;
              `}),a!==n.BrowserSizeMode.Small&&(0,g.jsx)(An,{pageId:t.id})]})},t.id)})})}function Nn(e){const{headerJson:t,browserSizeMode:o,theme:i,mainSizeMode:a,pageContext:l,showClassification:r,onHeightChange:s}=e,u=n.hooks.useTranslation(v.defaultMessages),c=t.height[o]||t.height[a]||50,p=t.layout;let h;t.backgroundIMage&&("string"==typeof t.backgroundIMage?h=t.backgroundIMage:"object"==typeof t.backgroundIMage&&(h=t.backgroundIMage.url)),h=n.appConfigUtils.processResourceUrl(h),n.hooks.useEffectOnce(()=>{s(parseInt(c))});const y=t.sticky&&!r,f=n.css`
    display: flex;
    position: ${y?"sticky":"relative"};
    z-index: ${y?2:"0"};
    top: 0;
    width: 100%;
    min-height: ${Math.round(parseFloat(c))}px;
    height: auto;
    overflow: hidden;
    background-color: ${t.backgroundColor||i.sys.color.surface.header||"transparent"};
    background-image: ${h};
    background-position: ${t.backgroundPosition};
    color: ${t.textColor||i.sys.color.surface.headerText};
    flex: 0 0 auto;
  `,m=n.React.useMemo(()=>Object.assign(Object.assign({},l),{viewOnly:!0}),[l]);return(0,g.jsx)(d.Provider,{value:m,children:(0,g.jsx)(n.PageVisibilityContext.Provider,{value:!0,children:(0,g.jsx)("div",{className:"header jimu-outline-inside",css:f,id:`${n.WIDGET_PREFIX_FOR_A11Y_SKIP}${p[o]}`,tabIndex:-1,role:"group","aria-label":u("header"),children:(0,g.jsx)(gt,{layouts:p,className:"w-100 flex-grow-1"})})})})}function Bn(e){const{footerJson:t,browserSizeMode:o,theme:i,mainSizeMode:a,pageContext:l,onHeightChange:r}=e,s=n.hooks.useTranslation(v.defaultMessages),u=t.height[o]||t.height[a]||50,c=t.layout;let p;t.backgroundIMage&&("string"==typeof t.backgroundIMage?p=t.backgroundIMage:"object"==typeof t.backgroundIMage&&(p=t.backgroundIMage.url)),p=n.appConfigUtils.processResourceUrl(p),n.hooks.useEffectOnce(()=>{r(parseInt(u))});const h=n.css`
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
  `,y=n.React.useMemo(()=>Object.assign(Object.assign({},l),{viewOnly:!0}),[l]);return(0,g.jsx)(d.Provider,{value:y,children:(0,g.jsx)(n.PageVisibilityContext.Provider,{value:!0,children:(0,g.jsx)("div",{className:"footer jimu-outline-inside",css:h,id:`${n.WIDGET_PREFIX_FOR_A11Y_SKIP}${c[o]}`,tabIndex:-1,role:"group","aria-label":s("footer"),children:(0,g.jsx)(gt,{layouts:c,className:"w-100 flex-grow-1"})})})})}const Fn=n.css`
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
`;function Wn(){const e=n.i18n.getIntl(),t=n.React.useRef(void 0);n.React.useEffect(()=>{(0,n.focusElementInKeyboardMode)(t.current)},[]);const o=n.React.useCallback(t=>e.formatMessage({id:t}),[e]),i=n.hooks.useEventCallback(()=>{n.jimuHistory.changeQueryObject({print_preview:null}),(0,n.getAppStore)().dispatch(n.appActions.quitPrintPreview())}),a=n.hooks.useEventCallback(()=>{window.print()});return(0,g.jsxs)("div",{className:"print-preview-tool shadow-3",css:Fn,children:[(0,g.jsx)("div",{className:"d-flex justify-content-center align-items-center flex-grow-1",children:(0,g.jsx)(v.Button,{ref:t,"aria-label":o("printCurrentPage"),type:"primary",onClick:a,children:o("printCurrentPage")})}),(0,g.jsx)(v.Button,{className:"ml-auto",icon:!0,type:"tertiary","aria-label":o("close"),onClick:i,children:(0,g.jsx)(io,{color:"var(--ref-palette-white)"})})]})}var Hn=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o};function Vn(e){const{showClassification:t}=e,o=Hn(e,["showClassification"]),i=n.ReactRedux.useSelector(e=>e.appInfo.id),[a,l]=n.React.useState(null);return n.React.useEffect(()=>{t&&!a&&(0,n.loadArcGISJSAPIModule)("esri/kernel").then(e=>{e&&n.moduleLoader.loadModule("jimu-ui/advanced/portal-components").then(l)}).catch(e=>{console.error("loadArcGISJSAPIModule error",e)})},[t]),(null==a?void 0:a.ClassificationBanner)&&(0,g.jsx)(a.ClassificationBanner,Object.assign({portalItemId:i},o))}const Dn=Ke.styled.div(()=>"\n    position: sticky;\n    top: 0;\n    z-index: 2;\n  ");function Gn(e){const{headerJson:t,showClassification:o,classification:i,children:a}=e;return o?(0,g.jsxs)(n.React.Fragment,{children:[(0,g.jsxs)(Dn,{className:"sticky-header-wrapper w-100",children:[(0,g.jsx)(Vn,{showClassification:o,position:"top",needSticky:!1,classification:i}),(null==t?void 0:t.sticky)&&a]}),!(null==t?void 0:t.sticky)&&a]}):a}dt(n.LayoutType.FixedLayout,Nt),dt(n.LayoutType.FlowLayout,Rn),dt(n.LayoutType.GridLayout,xo),dt(n.LayoutType.ColumnLayout,Vt),dt(n.LayoutType.AccordionLayout,Wo),dt(n.LayoutType.FlexRowLayout,Uo);class Un extends n.React.PureComponent{constructor(e){super(e),this.updateHeaderHeight=e=>{this.setState({headerHeight:e})},this.updateFooterHeight=e=>{this.setState({footerHeight:e})},this.isMac=()=>{var e,t;return"macOS"===(null===(t=null===(e=window.jimuUA)||void 0===e?void 0:e.os)||void 0===t?void 0:t.name)},this.handlePrintEvent=e=>{(0,n.getAppStore)().dispatch(n.appActions.activePrintPreview()),n.jimuHistory.changeQueryObject({print_preview:String(!0)}),e.cancelBubble=!0,e.preventDefault(),e.stopImmediatePropagation()},this.state={headerHeight:0,footerHeight:0},n.ExtensionManager.getInstance().registerExtension({epName:n.extensionSpec.ExtensionPoints.LayoutTransformer,extension:new Xo}),n.ExtensionManager.getInstance().registerExtension({epName:n.extensionSpec.ExtensionPoints.LayoutTransformer,extension:new Jo}),n.ExtensionManager.getInstance().registerExtension({epName:n.extensionSpec.ExtensionPoints.LayoutTransformer,extension:new qo}),this.pageContext={theme:this.props.theme},window.jimuConfig.isBuilder||(this.isMac()?this.keyBindings={"command+keyp":this.handlePrintEvent}:this.keyBindings={"ctrl+keyp":this.handlePrintEvent})}componentDidUpdate(e){if(Xn(e.pageStatus)!==Xn(this.props.pageStatus)){document.getElementsByTagName("html")[0].scrollTop=0}}render(){const{pageStatus:e,pages:t,theme:o,isPrintPreview:i,headerVisible:a,footerVisible:l,header:r,showClassification:s}=this.props,d=Xn(e);if(!d||!(null==t?void 0:t[d]))return null;let u="100%";const c=t[d]||{};c&&!isNaN(+c.width)&&(u=+c.width+"px");const p=n.css`
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
          `,backdrop:!1,children:(0,g.jsx)(v.ModalBody,{className:"print-preview-content",children:(0,g.jsx)(Wn,{})})}),this.renderDialog(),(0,g.jsx)(Gn,{headerJson:r,showClassification:s,children:a&&this.renderHeader()}),Object.keys(e).map(e=>this.renderPageBody(e,o)),l&&this.renderFooter(),s&&(0,g.jsx)(Vn,{showClassification:s,position:"bottom"}),(0,g.jsx)(n.Keyboard,{bindings:this.keyBindings})]})}renderHeader(){if(!this.props.header)return null;const{header:e,browserSizeMode:t,theme:o,mainSizeMode:n,showClassification:i}=this.props;return(0,g.jsx)(Nn,{headerJson:e,pageContext:this.pageContext,browserSizeMode:t,mainSizeMode:n,theme:o,showClassification:i,onHeightChange:this.updateHeaderHeight})}renderFooter(){if(!this.props.footer)return null;const{footer:e,browserSizeMode:t,mainSizeMode:o,theme:n}=this.props;return(0,g.jsx)(Bn,{footerJson:e,pageContext:this.pageContext,browserSizeMode:t,mainSizeMode:o,theme:n,onHeightChange:this.updateFooterHeight})}renderPageBody(e,t){const{pageStatus:o,pages:n,isPrintPreview:i}=this.props,a=n[e];if(!a)return;const l=!!o[e];return(0,g.jsx)(zn,{pageJson:a,pageContext:this.pageContext,browserSizeMode:this.props.browserSizeMode,visible:l,isPrintPreview:i,headerFooterHeight:this.state.headerHeight+this.state.footerHeight},a.id)}renderDialog(){const{dialogs:e,openedDialogIds:t=[],urlDialogJson:o,splashDialogJson:i,isSplashClosed:a,isPageDlgClosed:l,pageDialogJson:r,pageDialogId:s}=this.props;return(0,g.jsxs)(n.React.Fragment,{children:[t.map(t=>{const i=e[t];return i&&i.mode===n.DialogMode.Fixed&&(0,g.jsx)(d.Provider,{value:Object.assign(Object.assign({},this.pageContext),{dialogId:i.id,viewOnly:!0}),children:(0,g.jsx)(n.AppDialog,{dialogJson:i,isCurrentDialog:i.id===(null==o?void 0:o.id),runtime:!0})},i.id)}),o&&o.mode===n.DialogMode.Fixed&&!t.includes(o.id)&&(0,g.jsx)(d.Provider,{value:Object.assign(Object.assign({},this.pageContext),{dialogId:o.id,viewOnly:!0}),children:(0,g.jsx)(n.AppDialog,{dialogJson:o,isCurrentDialog:!0,runtime:!0})},o.id),!l&&r&&(null==o?void 0:o.id)!==r.id&&(0,g.jsx)(d.Provider,{value:Object.assign(Object.assign({},this.pageContext),{dialogId:s,viewOnly:!0}),children:(0,g.jsx)(n.AppDialog,{dialogJson:r,runtime:!0,isOpenByPage:!0})}),!a&&i&&(null==o?void 0:o.id)!==i.id&&(0,g.jsx)(d.Provider,{value:Object.assign(Object.assign({},this.pageContext),{dialogId:i.id,viewOnly:!0}),children:(0,g.jsx)(n.AppDialog,{dialogJson:i,runtime:!0})})]})}}Un.displayName="RuntimePageRenderer";const _n=(0,n.createSelector)([e=>e.appConfig.pages,e=>e.appConfig.dialogs,e=>e.appConfig.header,e=>e.appConfig.footer,e=>e.browserSizeMode,e=>e.appConfig.mainSizeMode,e=>{var t;const o=window.jimuConfig.isBuilder?e.appStateInBuilder:e;return null===(t=null==o?void 0:o.appRuntimeInfo)||void 0===t?void 0:t.dialogInfos},e=>{var t;const o=window.jimuConfig.isBuilder?e.appStateInBuilder:e;return null===(t=null==o?void 0:o.appRuntimeInfo)||void 0===t?void 0:t.currentPageId},e=>{var t,o,n;const i=window.jimuConfig.isBuilder?e.appStateInBuilder:e,a=null===(t=null==i?void 0:i.appRuntimeInfo)||void 0===t?void 0:t.currentPageId;return null===(n=null===(o=null==i?void 0:i.appConfig)||void 0===o?void 0:o.pages[a])||void 0===n?void 0:n.autoOpenDialogId},e=>{var t;const o=window.jimuConfig.isBuilder?e.appStateInBuilder:e;return null===(t=null==o?void 0:o.appRuntimeInfo)||void 0===t?void 0:t.openedDialogIds},e=>{var t,o;return null!==(o=null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.isPrintPreview)&&void 0!==o&&o},(e,t)=>Xn(t.pageStatus),(e,t)=>t.dialogId,e=>n.portalUtils.shouldShowClassificationBanner(e)],(e,t,o,n,i,a,l,r,s,d,u,c,p,g)=>{var v,h;if(!c||!e[c])return{};const y=t[Object.keys(t).find(e=>t[e].isSplash)];return{pages:e,header:o,headerVisible:!!e[c].header,footer:n,footerVisible:!!e[c].footer,browserSizeMode:i,mainSizeMode:a,splashDialogJson:y,isSplashClosed:null===(v=null==l?void 0:l[null==y?void 0:y.id])||void 0===v?void 0:v.isClosed,dialogs:t,openedDialogIds:d,pageDialogId:s,pageDialogJson:t[s],isPageDlgClosed:null===(h=null==l?void 0:l[r+"-"+s])||void 0===h?void 0:h.isClosed,urlDialogJson:t[p],isPrintPreview:u,showClassification:g}});function Xn(e){return Object.keys(e).find(t=>e[t])}const Yn=n.ReactRedux.connect(_n)((0,Ke.withTheme)(Un));var Jn=function(e,t,o,n){return new(o||(o=Promise))(function(i,a){function l(e){try{s(n.next(e))}catch(e){a(e)}}function r(e){try{s(n.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o(function(e){e(t)})).then(l,r)}s((n=n.apply(e,t||[])).next())})};function Kn(){return Jn(this,void 0,void 0,function*(){return yield Promise.all([l()])})}})(),s})())}}});