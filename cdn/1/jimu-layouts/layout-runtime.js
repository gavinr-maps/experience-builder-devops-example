System.register(["jimu-core","jimu-ui","jimu-theme","jimu-layouts/layout-runtime"],(function(e,t){var o={},n={},i={},a={};return{setters:[function(e){o.AnimationComponent=e.AnimationComponent,o.AnimationContext=e.AnimationContext,o.AnimationPlayMode=e.AnimationPlayMode,o.AnimationStartMode=e.AnimationStartMode,o.AnimationTriggerType=e.AnimationTriggerType,o.AnimationType=e.AnimationType,o.AppDialog=e.AppDialog,o.AppMode=e.AppMode,o.BrowserSizeMode=e.BrowserSizeMode,o.ContainerType=e.ContainerType,o.DEFAULT_ANIMATION_PROPS=e.DEFAULT_ANIMATION_PROPS,o.DialogMode=e.DialogMode,o.ErrorBoundary=e.ErrorBoundary,o.ExtensionManager=e.ExtensionManager,o.FixedPosition=e.FixedPosition,o.GridItemType=e.GridItemType,o.Immutable=e.Immutable,o.IntersectionContext=e.IntersectionContext,o.Keyboard=e.Keyboard,o.LayoutItemType=e.LayoutItemType,o.LayoutParentType=e.LayoutParentType,o.LayoutType=e.LayoutType,o.OneByOneAnimation=e.OneByOneAnimation,o.PageMode=e.PageMode,o.PagePart=e.PagePart,o.ParentAnimationMode=e.ParentAnimationMode,o.React=e.React,o.ReactRedux=e.ReactRedux,o.ReactResizeDetector=e.ReactResizeDetector,o.ScreenTransitionType=e.ScreenTransitionType,o.ScreenTriggerType=e.ScreenTriggerType,o.TransitionContainer=e.TransitionContainer,o.WidgetManager=e.WidgetManager,o.WidgetState=e.WidgetState,o.WidgetType=e.WidgetType,o.appActions=e.appActions,o.appConfigUtils=e.appConfigUtils,o.classNames=e.classNames,o.createSelector=e.createSelector,o.css=e.css,o.extensionSpec=e.extensionSpec,o.focusElementInKeyboardMode=e.focusElementInKeyboardMode,o.getAnimationEffect=e.getAnimationEffect,o.getAppStore=e.getAppStore,o.getHoverStyle=e.getHoverStyle,o.getIndexFromProgress=e.getIndexFromProgress,o.getNextAnimationId=e.getNextAnimationId,o.hooks=e.hooks,o.i18n=e.i18n,o.jimuHistory=e.jimuHistory,o.jsx=e.jsx,o.loadArcGISJSAPIModule=e.loadArcGISJSAPIModule,o.lodash=e.lodash,o.moduleLoader=e.moduleLoader,o.polished=e.polished,o.portalUtils=e.portalUtils,o.spring=e.spring,o.translatedLocales=e.translatedLocales,o.utils=e.utils},function(e){n.Button=e.Button,n.DistanceUnits=e.DistanceUnits,n.FOCUSABLE_CONTAINER_CLASS=e.FOCUSABLE_CONTAINER_CLASS,n.FillType=e.FillType,n.Icon=e.Icon,n.Loading=e.Loading,n.LoadingType=e.LoadingType,n.Modal=e.Modal,n.ModalBody=e.ModalBody,n.PanelHeader=e.PanelHeader,n.Tab=e.Tab,n.Tabs=e.Tabs,n.Tooltip=e.Tooltip,n.defaultMessages=e.defaultMessages,n.getFocusableElements=e.getFocusableElements,n.styleUtils=e.styleUtils,n.useTrapFocusBySelector=e.useTrapFocusBySelector},function(e){i.styled=e.styled,i.useTheme=e.useTheme,i.withBuilderTheme=e.withBuilderTheme,i.withTheme=e.withTheme},function(e){a.PageVisibilityContext=e.PageVisibilityContext,a.utils=e.utils}],execute:function(){e((()=>{var e={462:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12"><path fill="#fff" fill-rule="evenodd" d="M12 0H7v1h4v4h1V0M0 12h5v-1H1V7H0v5" clip-rule="evenodd"></path></svg>'},1496:e=>{"use strict";e.exports=a},1888:e=>{"use strict";e.exports=i},2838:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m8.745 8 6.1 6.1a.527.527 0 1 1-.745.746L8 8.746l-6.1 6.1a.527.527 0 1 1-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 0 1 .746-.746l6.1 6.1 6.1-6.1a.527.527 0 0 1 .746.746z"></path></svg>'},2943:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M4.653 13.854a.485.485 0 0 1 0-.708L10.24 8 4.653 2.854a.485.485 0 0 1 0-.708.54.54 0 0 1 .738 0l5.956 5.5a.485.485 0 0 1 0 .708l-5.956 5.5a.54.54 0 0 1-.738 0" clip-rule="evenodd"></path></svg>'},3529:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M8 12c-2.667 0-5.667-1.333-7-4 1.333-2.667 4.333-4 7-4s5.667 1.333 7 4c-1.333 2.667-4.333 4-7 4m0-7c-2.618 0-4.578.967-6 3 1.422 2.033 3.382 3 6 3s4.578-.967 6-3c-1.422-2.033-3.382-3-6-3m0 5.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" clip-rule="evenodd"></path></svg>'},4321:e=>{"use strict";e.exports=n},5741:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M1 3h14v1H1zM9 7h6v1H9zM4.328 14.354a.5.5 0 0 0 .708 0l3.182-3.182a.5.5 0 1 0-.708-.708l-2.328 2.329V6h-1v6.793l-2.328-2.328a.5.5 0 1 0-.708.707z"></path></svg>'},7568:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M11.347 2.146a.485.485 0 0 1 0 .708L5.76 8l5.587 5.146a.486.486 0 0 1 0 .708.54.54 0 0 1-.738 0l-5.956-5.5a.485.485 0 0 1 0-.708l5.956-5.5a.54.54 0 0 1 .738 0" clip-rule="evenodd"></path></svg>'},8416:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M1 3h14v1H1zM9 7h6v1H9zM5.036 6.146a.5.5 0 0 0-.708 0L1.146 9.328a.5.5 0 1 0 .708.708l2.328-2.329V14.5h1V7.707l2.328 2.329a.5.5 0 1 0 .708-.708z"></path></svg>'},8736:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path fill="#000" fill-rule="evenodd" d="M14 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2zM2 1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1" clip-rule="evenodd"></path><path fill="#000" fill-rule="evenodd" d="M20 8a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2zM8 7h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1" clip-rule="evenodd"></path></svg>'},9238:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M13.146 13.847a.486.486 0 0 0 .708 0 .54.54 0 0 0 0-.738l-5.5-5.956a.485.485 0 0 0-.708 0l-5.5 5.956a.54.54 0 0 0 0 .738.485.485 0 0 0 .708 0L8 8.26zm0-5a.485.485 0 0 0 .708 0 .54.54 0 0 0 0-.738l-5.5-5.956a.485.485 0 0 0-.708 0l-5.5 5.956a.54.54 0 0 0 0 .738.485.485 0 0 0 .708 0L8 3.26z" clip-rule="evenodd"></path></svg>'},9244:e=>{"use strict";e.exports=o}},t={};function l(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,l),i.exports}l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var o in t)l.o(t,o)&&!l.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return(()=>{"use strict";l.r(r),l.d(r,{AccordionLayoutViewer:()=>Fo,CLICK_TOLERANCE:()=>x,COLS_IN_ONE_ROW:()=>h,CONTEXT_MENU_ICON_SIZE:()=>m,CONTEXT_MENU_ITEM_SIZE:()=>f,ColumnLayoutViewer:()=>Ht,DEFAULT_AUTOPLAY_INTERVAL:()=>w,FixedLayoutViewer:()=>Et,FlexRowLayoutViewer:()=>Go,GridLayoutViewer:()=>mo,LayoutContext:()=>g,LayoutEntry:()=>st,LayoutItem:()=>Ot,LayoutItemSizeModes:()=>S,LayoutZIndex:()=>b,MIN_LAYOUT_ITEM_SIZE:()=>I,OrderAdjustType:()=>v,PageContext:()=>d,PageRenderer:()=>Xn,PageVisibilityContext:()=>c,RowLayoutViewer:()=>Jt,SectionRenderer:()=>Rt,ViewVisibilityContext:()=>p,ViewportVisibilityContext:()=>u,WidgetRenderer:()=>et,controlPanelUtils:()=>o,defaultMessages:()=>i,findLayoutBuilder:()=>at,findLayoutViewer:()=>lt,init:()=>Yn,registerLayoutBuilder:()=>nt,registerLayoutViewer:()=>it,searchUtils:()=>t,utils:()=>e});var e={};l.r(e),l.d(e,{autoBindHandlers:()=>ae,calHeightOfLayoutItem:()=>Ce,changeLayout:()=>We,contains:()=>Ae,emptyFunc:()=>ie,expandStyleArray:()=>Se,fromRatio:()=>ce,gcd:()=>Fe,getActivePagePart:()=>Pe,getAppConfig:()=>Te,getCurrentDialogId:()=>Me,getCurrentDialogRootLayoutId:()=>Le,getCurrentPageId:()=>je,getCurrentPageRootLayoutId:()=>$e,getCurrentSizeMode:()=>Re,getFooterRootLayoutId:()=>ke,getHeaderRootLayoutId:()=>Oe,getLayoutItemSizeMode:()=>ze,getMaximumId:()=>le,getValueOfBBox:()=>de,handleOnebyOneAnimation:()=>He,intersects:()=>Ee,isFunctionalWidget:()=>he,isNumber:()=>se,isPercentage:()=>re,isRTL:()=>we,isWidgetHasEmbeddedLayout:()=>ye,isWidgetPlaceholder:()=>fe,mapStateToLayoutItemProps:()=>ge,mapStateToLayoutProps:()=>pe,mapStateToWidgetProps:()=>ve,normalizeLinearUnit:()=>Ne,parseAspectRatio:()=>be,relativeClientRect:()=>xe,replaceBoundingBox:()=>me,shouldUseAspectRatio:()=>Be,toRatio:()=>ue,updateBoundingBoxProp:()=>Ie});var t={};l.r(t),l.d(t,{findLayoutId:()=>V,findLayoutItem:()=>C,findParentLayoutInfo:()=>T,getBlockAnchorPointsInPage:()=>te,getBrowserSizeModeByLayoutId:()=>Y,getBrowserSizeModeByLayoutIdAndWidgetId:()=>J,getChildrenContents:()=>_,getContentContainerInfo:()=>N,getContentIdInLayoutItem:()=>R,getContentLayoutInfosInOneSizeMode:()=>X,getContentLayoutItem:()=>O,getContentRootContainerInfo:()=>z,getContentsInContainer:()=>F,getContentsInContainerRecursive:()=>H,getContentsInContainerRecursiveAdv:()=>W,getContentsInLayout:()=>j,getContentsInLayoutRecursive:()=>M,getContentsInLayoutWithRecursiveLayouts:()=>$,getContentsInTheSameContainer:()=>Q,getContentsInTheSameRootContainer:()=>ee,getLayoutIdsInLayoutItem:()=>L,getLayoutInfosByType:()=>A,getLayoutInfosHoldContent:()=>G,getLayoutItemIds:()=>k,getMapWidgets:()=>ne,getParentWidgetIdOfContent:()=>U,getPendingLayoutItemsFromOtherSizeMode:()=>qe,getPendingLayoutItemsFromOtherSizeModeInDialog:()=>Je,getPendingLayoutItemsFromOtherSizeModeInPage:()=>_e,getPendingLayoutItemsInDialog:()=>Xe,getPendingLayoutItemsInLayoutWithDeep:()=>Ye,getPendingLayoutItemsInPage:()=>Ue,getRelatedLayoutInfosInWidgetByLayoutInfo:()=>q,getRelatedLayoutItemsInWidgetByLayoutInfo:()=>K,getRootContainerInfoOfLayout:()=>B,getScreenAnchorPointsInPage:()=>oe,getSectionInfo:()=>Ge,getVisibleWidgetsInLayoutRecursive:()=>P,getWidgetIdThatUseTheLayoutId:()=>E});var o={};l.r(o),l.d(o,{convertToStyle:()=>Tn,findPageRelatedControllerIds:()=>Sn,panelTransformStyle:()=>Cn,useHandleLastVirtualNodeFocus:()=>Rn});var n=l(9244);const i={previousView:"Previous view",nextView:"Next view",originTL:"Top left as origin",originTR:"Top right as origin",originBL:"Bottom left as origin",originBR:"Bottom right as origin",alignLeft:"Align left",alignRight:"Align right",alignTop:"Align top",alignCenter:"Align center",alignHCenter:"Horizontal center",alignVCenter:"Vertical center",alignBottom:"Align bottom",alignStretch:"Align stretch",sendBackward:"Send backward",bringForward:"Bring forward",sendToBack:"Send to back",bringToFront:"Bring to front",zoomoutFixed:"Zoom out fixed",order:"Order",moveToLeft:"Move to left",moveToRight:"Move to right",moveToTop:"Move to top",moveToBottom:"Move to bottom",addView:"New view",duplicateScreen:"Duplicate screen",deleteScreen:"Delete screen",applyToFirstPanel:"Apply to the first panel",deleteView:"Delete view",duplicateView:"Duplicate view",insertABlock:"Insert block",insertAScreenGroup:"Insert screen group",moveup:"Move up",movedown:"Move down",chooseTemplate:"Choose a {type} template",chooseHeaderTemplate:"Choose a header template",chooseFooterTemplate:"Choose a footer template",dropWidgetToAdd:"Or drag a widget here",snapToLeft:"Snap to left",snapToTop:"Snap to top",snapToBottom:"Snap to bottom",snapToRight:"Snap to right",fullWidth:"Full width",fullHeight:"Full height",fullSize:"Full size",restoreSize:"Restore size",pendingTip:"Move to the pending list",setting:"Settings",dragToMove:"Drag to move {label}",lockLayout:"Lock position and size",unlockLayout:"Unlock position and size",editHeader:"Edit header",editFooter:"Edit footer",transform:"Transform",rotation:"Rotation",angle:"Angle",floating:"Pin",sinking:"Unpin",floatingArea:"Floating area",changeToAuto:"Change to auto",changeToCustom:"Change to custom",positionType:"Position type",sticky:"Sticky",fixed:"Fixed",flow:"Flow",stack:"Stack",fixedAtTop:"Floating at the top when scrolling",actNormal:"Act as normal widget",hideInDesignView:"Hide in design view",showInDesignView:"Show in design view",unlockGridItem:"Unlock this widget to reorganize its internal widgets.",lockGridItem:"Lock this widget.",activeViewTip:"Section. Active view {viewLabel}.",widgetLabel:"Widget label"};var a=function(e,t,o,n){return new(o||(o=Promise))((function(i,a){function l(e){try{s(n.next(e))}catch(e){a(e)}}function r(e){try{s(n.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(l,r)}s((n=n.apply(e,t||[])).next())}))};function s(){return a(this,void 0,void 0,(function*(){let e=(0,n.getAppStore)().getState().appContext.locale;return e=n.i18n.getLocaleToLoad(e,n.translatedLocales),e?yield n.i18n.loadLocaleMessages("jimu-layouts/lib/translations",e).then((e=>((0,n.getAppStore)().dispatch(n.appActions.i18nMessagesLoaded("jimu-layouts",e)),n.i18n.resetIntls(),e))):Promise.resolve(i)}))}const d=n.React.createContext({viewOnly:!0}),u=n.React.createContext(!0),c=n.React.createContext(!0),p=n.React.createContext({isInView:!1,isInCurrentView:!1}),g=(n.React.createContext(""),n.React.createContext({}));var v,y=l(4321);!function(e){e[e.BringForward=0]="BringForward",e[e.SendBackward=1]="SendBackward",e[e.BringToFront=2]="BringToFront",e[e.SendToBack=3]="SendToBack"}(v||(v={}));const h=12,f=28,m=16,I=16,x=5,w=3;var b,S;function C(e,t){var o,n,i;if(!t)return null;const{layoutId:a,layoutItemId:l}=t;return null===(i=null===(n=null===(o=e.layouts)||void 0===o?void 0:o[a])||void 0===n?void 0:n.content)||void 0===i?void 0:i[l]}function T(e,t,o){var i,a,l,r,s,d,u,c,p,g;const{layoutId:v}=e,y=t.layouts[v];switch(null===(i=null==y?void 0:y.parent)||void 0===i?void 0:i.type){case n.LayoutParentType.View:{const e=t.views[y.parent.id],n=t.sections[e.parent];return 1===(null===(l=null===(a=null==n?void 0:n.parent)||void 0===a?void 0:a[o])||void 0===l?void 0:l.length)?n.parent[o][0]:(null===(s=null===(r=null==n?void 0:n.parent)||void 0===r?void 0:r[o])||void 0===s?void 0:s.length)>1?T(n.parent[o][0],t,o):null}case n.LayoutParentType.Widget:{const e=t.widgets[y.parent.id];return 1===(null===(u=null===(d=null==e?void 0:e.parent)||void 0===d?void 0:d[o])||void 0===u?void 0:u.length)?e.parent[o][0]:(null===(p=null===(c=null==e?void 0:e.parent)||void 0===c?void 0:c[o])||void 0===p?void 0:p.length)>1?T(e.parent[o][0],t,o):null}case n.LayoutParentType.Screen:{const e=t.screens[y.parent.id];return null===(g=t.screenGroups[e.parent].parent)||void 0===g?void 0:g[o]}default:return null}}function R(e){switch(e.type){case n.LayoutItemType.Widget:return"string"==typeof e.widgetId?e.widgetId:null;case n.LayoutItemType.Section:return"string"==typeof e.sectionId?e.sectionId:null;case n.LayoutItemType.ScreenGroup:return"string"==typeof e.screenGroupId?e.screenGroupId:null;default:return null}}function j(e,t,o=!1){return(null==e?void 0:e.content)?Object.keys(e.content).filter((n=>e.content[n].type===t&&!!R(e.content[n])&&(o||!e.content[n].isPending))).map((t=>R(e.content[t]))):[]}function M(e,t,o,i,a=!1){let l=[];const r=j(e.layouts[t],n.LayoutItemType.Widget,a),s=j(e.layouts[t],n.LayoutItemType.Section,a),d=j(e.layouts[t],n.LayoutItemType.ScreenGroup,a);o===n.LayoutItemType.Widget?l=l.concat(r):o===n.LayoutItemType.Section?l=l.concat(s):o===n.LayoutItemType.ScreenGroup&&(l=l.concat(d));return r.filter((t=>{var o,i,a,l,r;return(null===(i=null===(o=e.widgets[t])||void 0===o?void 0:o.manifest)||void 0===i?void 0:i.widgetType)===n.WidgetType.Layout||(null===(r=null===(l=null===(a=e.widgets[t])||void 0===a?void 0:a.manifest)||void 0===l?void 0:l.properties)||void 0===r?void 0:r.hasEmbeddedLayout)})).forEach((t=>{var n;Object.keys(null!==(n=e.widgets[t].layouts)&&void 0!==n?n:{}).forEach((n=>{const r=V(e.widgets[t].layouts[n],i,e.mainSizeMode);l=l.concat(M(e,r,o,i,a))}))})),s.forEach((t=>{var n,r;null===(r=null===(n=e.sections)||void 0===n?void 0:n[t])||void 0===r||r.views.forEach((t=>{const n=V(e.views[t].layout,i,e.mainSizeMode);e.views[t]&&n&&(l=l.concat(M(e,n,o,i,a)))}))})),d.forEach((t=>{var n,r;null===(r=null===(n=e.screenGroups)||void 0===n?void 0:n[t])||void 0===r||r.screens.forEach((t=>{var n,r,s,d,u;const c=V(null===(r=null===(n=e.screens)||void 0===n?void 0:n[t])||void 0===r?void 0:r.main.layout,i,e.mainSizeMode);c&&(l=l.concat(M(e,c,o,i,a)));const p=V(null===(u=null===(d=null===(s=e.screens)||void 0===s?void 0:s[t])||void 0===d?void 0:d.panel)||void 0===u?void 0:u.layout,i,e.mainSizeMode);p&&(l=l.concat(M(e,p,o,i,a)))}))})),l}function P(e,t,o,i){const a=e.appConfig,l=(t,o,n)=>{var i,l;if(null===(l=null===(i=e.widgetsState[t])||void 0===i?void 0:i.hiddenLayoutIds)||void 0===l?void 0:l.includes(o))return[];const r=a.layouts[o];if(!r||!r.content)return[];const s=[];return Object.keys(r.content).forEach((i=>{var a,l,d;const u=r.content[i];if(u.type===n&&!u.isPending&&R(u)){if(null===(d=null===(l=null===(a=e.widgetsState[t])||void 0===a?void 0:a.hiddenLayoutItems)||void 0===l?void 0:l[o])||void 0===d?void 0:d.includes(i))return;s.push(R(u))}})),s};let r=[],s=[],d=[],u=[];i?(s=l(i,t,n.LayoutItemType.Widget),d=l(i,t,n.LayoutItemType.Section),u=l(i,t,n.LayoutItemType.ScreenGroup)):(s=j(a.layouts[t],n.LayoutItemType.Widget),d=j(a.layouts[t],n.LayoutItemType.Section),u=j(a.layouts[t],n.LayoutItemType.ScreenGroup)),r=r.concat(s);const c=s.filter((e=>{var t,o,i,l,r;return(null===(o=null===(t=a.widgets[e])||void 0===t?void 0:t.manifest)||void 0===o?void 0:o.widgetType)===n.WidgetType.Layout||(null===(r=null===(l=null===(i=a.widgets[e])||void 0===i?void 0:i.manifest)||void 0===l?void 0:l.properties)||void 0===r?void 0:r.hasEmbeddedLayout)}));return c.forEach((n=>{var i,l,s;(null===(l=null===(i=e.widgetsState[n])||void 0===i?void 0:i.hiddenLayoutIds)||void 0===l?void 0:l.includes(t))||Object.keys(null!==(s=a.widgets[n].layouts)&&void 0!==s?s:{}).forEach((t=>{const i=V(a.widgets[n].layouts[t],o,a.mainSizeMode);r=r.concat(P(e,i,o,n))}))})),d.forEach((t=>{var n,i;const l=a.sections[t],s=(null===(i=null===(n=e.appRuntimeInfo.sectionNavInfos)||void 0===n?void 0:n[t])||void 0===i?void 0:i.currentViewId)||l.views[0],d=V(a.views[s].layout,o,a.mainSizeMode);a.views[s]&&d&&(r=r.concat(P(e,d,o)))})),u.forEach((t=>{var n,i;null===(i=null===(n=a.screenGroups)||void 0===n?void 0:n[t])||void 0===i||i.screens.forEach((t=>{var n,i,l,s,d;const u=V(null===(i=null===(n=a.screens)||void 0===n?void 0:n[t])||void 0===i?void 0:i.main.layout,o,a.mainSizeMode);u&&(r=r.concat(P(e,u,o)));const c=V(null===(d=null===(s=null===(l=a.screens)||void 0===l?void 0:l[t])||void 0===s?void 0:s.panel)||void 0===d?void 0:d.layout,o,a.mainSizeMode);c&&(r=r.concat(P(e,c,o)))}))})),r}function L(e,t,o){var i;const a=e.appConfig,l=null===(i=a.layouts[t.layoutId])||void 0===i?void 0:i.content[t.layoutItemId];if(!l)return[];const r=[];if(l.type===n.LayoutItemType.Widget&&l.widgetId){const t=a.widgets[l.widgetId];t.layouts&&Object.keys(t.layouts).forEach((n=>{var i,s;const d=V(t.layouts[n],e.browserSizeMode,a.mainSizeMode);o&&(null===(s=null===(i=e.widgetsState[l.widgetId])||void 0===i?void 0:i.hiddenLayoutIds)||void 0===s?void 0:s.includes(d))||r.push(d)}))}else if(l.type===n.LayoutItemType.Section&&l.sectionId){const t=a.sections[l.sectionId];t.views.forEach((n=>{var i,s;const d=V(a.views[n].layout,e.browserSizeMode,a.mainSizeMode),u=(null===(s=null===(i=e.appRuntimeInfo.sectionNavInfos)||void 0===i?void 0:i[l.sectionId])||void 0===s?void 0:s.currentViewId)||t.views[0];o&&n!==u||r.push(d)}))}else if(l.type===n.LayoutItemType.ScreenGroup&&l.screenGroupId){const t=a.screenGroups[l.screenGroupId];null==t||t.screens.forEach((t=>{var o,n,i,l,s;const d=V(null===(n=null===(o=a.screens)||void 0===o?void 0:o[t])||void 0===n?void 0:n.main.layout,e.browserSizeMode,a.mainSizeMode);d&&r.push(d);const u=V(null===(s=null===(l=null===(i=a.screens)||void 0===i?void 0:i[t])||void 0===l?void 0:l.panel)||void 0===s?void 0:s.layout,e.browserSizeMode,a.mainSizeMode);u&&r.push(u)}))}return r}function $(e,t,o,i,a=!1){let l=[];const r=j(e.layouts[t],n.LayoutItemType.Widget,a),s=j(e.layouts[t],n.LayoutItemType.Section,a),d=j(e.layouts[t],n.LayoutItemType.ScreenGroup,a);l=o===n.LayoutItemType.Widget?l.concat(r):o===n.LayoutItemType.ScreenGroup?l.concat(d):l.concat(s);return r.filter((t=>e.widgets&&e.widgets[t]&&(e.widgets[t].manifest.widgetType===n.WidgetType.Layout||e.widgets[t].manifest.properties.hasEmbeddedLayout))).forEach((t=>{var n;Object.keys(null!==(n=e.widgets[t].layouts)&&void 0!==n?n:{}).forEach((n=>{const r=V(e.widgets[t].layouts[n],i,e.mainSizeMode);l=l.concat($(e,r,o,i,a))}))})),l}function O(e,t,o){if(!(null==e?void 0:e.content))return null;const n=Object.keys(e.content).find((n=>e.content[n].type===o&&(e.content[n].widgetId===t||e.content[n].sectionId===t||e.content[n].screenGroupId===t)&&!e.content[n].isPending));return e.content[n]}function k(e,t,o=!1){const n=e.layouts[t];return(null==n?void 0:n.content)?o?Object.keys(n.content):Object.keys(n.content).filter((e=>!n.content[e].isPending)):[]}function A(e,t,o=!1){return(null==e?void 0:e.content)?Object.keys(e.content).filter((n=>e.content[n].type===t&&!!R(e.content[n])&&(o||!e.content[n].isPending))).map((t=>({layoutId:e.id,layoutItemId:t}))):[]}function E(e,t){var o;const i=e.layouts[t];return(null===(o=null==i?void 0:i.parent)||void 0===o?void 0:o.type)===n.LayoutParentType.Widget?i.parent.id:null}function N(e,t,o,i,a=!1){var l;const r=D(e,t,o,i,a);if(r){const t=e.layouts[r.layoutId];switch(null===(l=t.parent)||void 0===l?void 0:l.type){case n.LayoutParentType.Page:return{type:n.ContainerType.Page,id:t.parent.id};case n.LayoutParentType.Dialog:return{type:n.ContainerType.Dialog,id:t.parent.id};case n.LayoutParentType.Header:return{type:n.ContainerType.Header,id:"header"};case n.LayoutParentType.Footer:return{type:n.ContainerType.Footer,id:"footer"};case n.LayoutParentType.View:return{type:n.ContainerType.View,id:t.parent.id};case n.LayoutParentType.Screen:return{type:e.screens[t.parent.id].main.layout[i]===r.layoutId?n.ContainerType.ScreenMain:n.ContainerType.ScreenPanel,id:t.parent.id};case n.LayoutParentType.Widget:return N(e,t.parent.id,o,i,a)}}return null}function z(e,t,o,n,i=!1){let a=D(e,t,o,n,i),l=n;if(a||(a=D(e,t,o,e.mainSizeMode,i),l=e.mainSizeMode),a)return B(e,a.layoutId,l)}function B(e,t,o){var i;let a=e.layouts[t];for(;(null==a?void 0:a.parent)&&[n.LayoutParentType.Screen,n.LayoutParentType.View,n.LayoutParentType.Widget].includes(a.parent.type);){const n=T({layoutId:t},e,o);t=null==n?void 0:n.layoutId,a=e.layouts[t]}switch(null===(i=null==a?void 0:a.parent)||void 0===i?void 0:i.type){case n.LayoutParentType.Dialog:return{type:n.ContainerType.Dialog,id:a.parent.id};case n.LayoutParentType.Page:return{type:n.ContainerType.Page,id:a.parent.id};case n.LayoutParentType.Header:return{type:n.ContainerType.Header,id:"header"};case n.LayoutParentType.Footer:return{type:n.ContainerType.Footer,id:"footer"};default:return null}}function F(e,t,o,i,a=!1){var l,r,s,d,u,c;let p;switch(t.type){case n.ContainerType.Page:return p=V(null===(r=null===(l=e.pages)||void 0===l?void 0:l[t.id])||void 0===r?void 0:r.layout,i,e.mainSizeMode),p?$(e,p,o,i,a):[];case n.ContainerType.Header:return p=V(null===(s=e.header)||void 0===s?void 0:s.layout,i,e.mainSizeMode),p?$(e,p,o,i,a):[];case n.ContainerType.Footer:return p=V(null===(d=e.footer)||void 0===d?void 0:d.layout,i,e.mainSizeMode),p?$(e,p,o,i,a):[];case n.ContainerType.View:return p=V(null===(c=null===(u=e.views)||void 0===u?void 0:u[t.id])||void 0===c?void 0:c.layout,i,e.mainSizeMode),p?$(e,p,o,i,a):[];case n.ContainerType.Dialog:return p=V(e.dialogs[t.id].layout,i,e.mainSizeMode),p?$(e,p,o,i,a):[];case n.ContainerType.ScreenMain:case n.ContainerType.ScreenPanel:if(!e.screens||!e.screens[t.id])return[];const g=V(e.screens[t.id].main.layout,i,e.mainSizeMode);if(!g)return[];const v=$(e,g,o,i,a);if(e.screens[t.id].panel){const n=$(e,V(e.screens[t.id].panel.layout,i,e.mainSizeMode),o,i,a);return v.concat(n)}return v}}function H(e,t,o,i,a=!1){var l,r,s,d,u,c;let p;switch(t.type){case n.ContainerType.Page:return p=V(null===(r=null===(l=e.pages)||void 0===l?void 0:l[t.id])||void 0===r?void 0:r.layout,i,e.mainSizeMode),p?M(e,p,o,i,a):[];case n.ContainerType.Header:return p=V(null===(s=e.header)||void 0===s?void 0:s.layout,i,e.mainSizeMode),p?M(e,p,o,i,a):[];case n.ContainerType.Footer:return p=V(null===(d=e.footer)||void 0===d?void 0:d.layout,i,e.mainSizeMode),p?M(e,p,o,i,a):[];case n.ContainerType.View:return p=V(null===(c=null===(u=e.views)||void 0===u?void 0:u[t.id])||void 0===c?void 0:c.layout,i,e.mainSizeMode),p?M(e,p,o,i,a):[];case n.ContainerType.Dialog:return p=V(e.dialogs[t.id].layout,i,e.mainSizeMode),p?M(e,p,o,i,a):[];case n.ContainerType.ScreenMain:case n.ContainerType.ScreenPanel:if(!e.screens||!e.screens[t.id])return[];const g=V(e.screens[t.id].main.layout,i,e.mainSizeMode);if(!g)return[];const v=M(e,g,o,i);if(e.screens[t.id].panel){const n=M(e,V(e.screens[t.id].panel.layout,i,e.mainSizeMode),o,i);return v.concat(n)}return v}}function W(e,t,o,i,a){const l=t=>{let l=[];return l=a.includeOtherSizeMode?l.concat(H(e,t,o,n.BrowserSizeMode.Large,a.includePending),H(e,t,o,n.BrowserSizeMode.Medium,a.includePending),H(e,t,o,n.BrowserSizeMode.Small,a.includePending)):H(e,t,o,i,a.includePending),l=Array.from(new Set(l)),l};if(t.type===n.ContainerType.Dialog)return l(t);if(t.type===n.ContainerType.Page){const o=e.pages[t.id];let i=l(t);return o.header&&(i=i.concat(l({type:n.ContainerType.Header,id:"header"}))),o.footer&&(i=i.concat(l({type:n.ContainerType.Footer,id:"footer"}))),i=Array.from(new Set(i)),i}if(t.type===n.ContainerType.Header){const o=e.pages[a.currentPageId];let i=l(t).concat(l({type:n.ContainerType.Page,id:a.currentPageId}));return(null==o?void 0:o.footer)&&(i=i.concat(l({type:n.ContainerType.Footer,id:"footer"}))),i=Array.from(new Set(i)),i}if(t.type===n.ContainerType.Footer){const o=e.pages[a.currentPageId];let i=l(t).concat(l({type:n.ContainerType.Page,id:a.currentPageId}));return(null==o?void 0:o.header)&&(i=i.concat(l({type:n.ContainerType.Header,id:"header"}))),i=Array.from(new Set(i)),i}}function V(e,t,o){return e?e[t]||e[o]:null}function D(e,t,o,i,a=!0){var l,r,s,d,u;switch(o){case n.LayoutItemType.ScreenGroup:{const o=null===(l=e.screenGroups[t].parent)||void 0===l?void 0:l[i],n=C(e,o);return a||!(null==n?void 0:n.isPending)?o:null}case n.LayoutItemType.Section:case n.LayoutItemType.Widget:{let l;if(o===n.LayoutItemType.Widget&&(l=e.widgets[t]),o===n.LayoutItemType.Section&&(l=e.sections[t]),1===(null===(s=null===(r=null==l?void 0:l.parent)||void 0===r?void 0:r[i])||void 0===s?void 0:s.length)){const t=l.parent[i][0],o=C(e,t);return a||!(null==o?void 0:o.isPending)?t:null}if((null===(u=null===(d=null==l?void 0:l.parent)||void 0===d?void 0:d[i])||void 0===u?void 0:u.length)>1){const t=l.parent[i][0],o=e.layouts[t.layoutId];if(null==o?void 0:o.parent)return D(e,o.parent.id,n.LayoutItemType.Widget,i,a)}}default:return null}}function G(e,t,o,i){switch(t){case n.LayoutItemType.ScreenGroup:{const t=e.screenGroups[o];if(t.parent)return i?[t.parent[i]]:Object.values(t.parent)}case n.LayoutItemType.Section:case n.LayoutItemType.Widget:{let a;if(t===n.LayoutItemType.Widget&&(a=e.widgets[o]),t===n.LayoutItemType.Section&&(a=e.sections[o]),null==a?void 0:a.parent){if(i)return a.parent[i];const e=[];return Object.values(a.parent).forEach((t=>{e.push(...t)})),e}}default:return[]}}function U(e,t,o,i){var a,l,r,s,d,u,c;let p;if(o===n.LayoutItemType.Widget){const o=e.widgets[t];p=null===(r=null===(l=null===(a=null==o?void 0:o.parent)||void 0===a?void 0:a[i])||void 0===l?void 0:l[0])||void 0===r?void 0:r.layoutId}if(o===n.LayoutItemType.Section){const o=e.sections[t];p=null===(u=null===(d=null===(s=null==o?void 0:o.parent)||void 0===s?void 0:s[i])||void 0===d?void 0:d[0])||void 0===u?void 0:u.layoutId}if(p){const t=e.layouts[p];if((null===(c=null==t?void 0:t.parent)||void 0===c?void 0:c.type)===n.LayoutParentType.Widget)return t.parent.id}return null}function _(e,t,o,n){const i=e.widgets[t];if(!i.layouts)return[];let a=[];return Object.keys(i.layouts).forEach((t=>{Object.keys(i.layouts[t]).forEach((l=>{const r=e.layouts[i.layouts[t][l]];a=a.concat(j(r,o,n))}))})),Array.from(new Set(a))}function X(e,t,o,i){var a,l,r;switch(o){case n.LayoutItemType.ScreenGroup:{const o=e.screenGroups[t];if(null===(a=o.parent)||void 0===a?void 0:a[i])return[o.parent[i]]}case n.LayoutItemType.Section:case n.LayoutItemType.Widget:{let a;if(o===n.LayoutItemType.Widget&&(a=e.widgets[t]),o===n.LayoutItemType.Section&&(a=e.sections[t]),(null===(r=null===(l=null==a?void 0:a.parent)||void 0===l?void 0:l[i])||void 0===r?void 0:r.length)>0)return a.parent[i]}default:return[]}}function J(e,t,o){const n=e.widgets[o];if(!n)return;let i;return Object.keys(n.layouts).find((e=>!!Object.keys(n.layouts[e]).find((o=>n.layouts[e][o]===t&&(i=o,!0))))),i}function Y(e,t){return n.appConfigUtils.getSizeModeOfALayout(e,t)}function q(e,t,o,i){if(!e.widgets[o])return[];const a=e.layouts[t.layoutId]&&e.layouts[t.layoutId].content&&e.layouts[t.layoutId].content[t.layoutItemId];if(!a)return[];const l=a.type;let r;return l===n.LayoutItemType.Section?r=a.sectionId:l===n.LayoutItemType.Widget&&(r=a.widgetId),r?Z(e,r,l,o,i):function(e,t,o){const n=e.widgets[t];if(!n)return!1;let i=!1;return n.layouts&&Object.keys(n.layouts).some((t=>Object.keys(n.layouts[t]).some((a=>{const l=n.layouts[t][a];return k(e,l,!0).some((e=>o.layoutId===l&&o.layoutItemId===e&&(i=!0,!0)))})))),i}(e,o,t)?[t]:[]}function K(e,t,o,n){return q(e,t,o,n).map((t=>e.layouts[t.layoutId][t.layoutItemId]))}function Z(e,t,o,i,a){const l=e.widgets[i];if(!l||!t)return[];const r=[];return l.layouts&&Object.keys(l.layouts).forEach((i=>{const s=l.layouts[i][a],d=e.layouts[s];d&&d.content&&Object.keys(d.content).forEach((i=>{const l=d.content[i];if(l.type!==o||l.widgetId!==t&&l.sectionId!==t&&l.screenGroupId!==t){if(l.type===n.LayoutItemType.Widget){const i=e.widgets[l.widgetId];i&&i.manifest.widgetType===n.WidgetType.Layout&&r.push(...Z(e,t,o,i.id,a))}}else r.push({layoutId:d.id,layoutItemId:l.id})}))})),r}function Q(e,t,o,n,i,a=!1){const l=N(e,t,o,i,a);return l?F(e,l,n,i,a):[]}function ee(e,t,o,n,i,a=!1){const l=z(e,t,o,i,a);return l?H(e,l,n,i,a):[]}function te(e,t,o){var i,a;const l=e.pages[t],r=null===(i=null==l?void 0:l.layout)||void 0===i?void 0:i[o],s=e.layouts[r],d=[];return(null==s?void 0:s.type)===n.LayoutType.FlowLayout&&Object.keys(null!==(a=s.content)&&void 0!==a?a:{}).sort().forEach((t=>{var o;const i=s.content[t];if(!i.isPending&&!(null===(o=i.setting)||void 0===o?void 0:o.isFloating)&&i.type===n.LayoutItemType.Widget){const o=function(e,t){const{layoutId:o,layoutItemId:n}=t,i=e.layouts[o].content[n],a=e.widgets[i.widgetId];if(a)return{label:a.label,id:`${o}_block_${n}`};return null}(e,{layoutId:r,layoutItemId:t});o&&d.push(o)}})),d}function oe(e,t,o){var i,a;const l=e.pages[t],r=null===(i=null==l?void 0:l.layout)||void 0===i?void 0:i[o],s=e.layouts[r],d=[];return(null==s?void 0:s.type)===n.LayoutType.FlowLayout&&Object.keys(null!==(a=s.content)&&void 0!==a?a:{}).sort().forEach((t=>{var o;const i=s.content[t];if(!i.isPending&&!(null===(o=i.setting)||void 0===o?void 0:o.isFloating)&&i.type===n.LayoutItemType.ScreenGroup){const t=e.screenGroups[i.screenGroupId],o=[];null==t||t.screens.forEach((t=>{const n=function(e,t,o){const n=e.screens[o];if(n)return{label:n.label,id:`${t}_screen_${o}`};return null}(e,r,t);n&&o.push(n)})),d.push({id:t.id,label:t.label,screens:o})}})),d}function ne(e,t,o,i){const a=[],l={id:i,type:o,maps:W(e,{type:o,id:i},n.LayoutItemType.Widget,t,{includePending:!1,includeOtherSizeMode:!1}).filter((t=>e.widgets[t].manifest.properties.canCreateMapView))};return a.push(l),Object.keys(e.pages).forEach((o=>{if(o===i)return;const l={id:o,type:n.ContainerType.Page,maps:H(e,{id:o,type:n.ContainerType.Page},n.LayoutItemType.Widget,t).filter((t=>e.widgets[t].manifest.properties.canCreateMapView))};a.push(l)})),Object.keys(e.dialogs||{}).forEach((o=>{if(o===i)return;const l={id:o,type:n.ContainerType.Dialog,maps:H(e,{id:o,type:n.ContainerType.Dialog},n.LayoutItemType.Widget,t).filter((t=>e.widgets[t].manifest.properties.canCreateMapView))};a.push(l)})),a}!function(e){e.Auto="auto",e[e.Normal=0]="Normal",e[e.BoundaryDropArea=10]="BoundaryDropArea",e[e.DragMoveTip=20]="DragMoveTip",e[e.HandlerTools=30]="HandlerTools",e[e.DraggingItem=40]="DraggingItem"}(b||(b={})),function(e){e.Auto="AUTO",e.Stretch="STRETCH",e.Custom="CUSTOM"}(S||(S={}));const ie=()=>null;function ae(e,t){t.forEach((t=>{e[t]&&(e[t]=e[t].bind(e))}))}function le(e){let t=-1;return e.content&&Object.keys(e.content).forEach((e=>{const o=parseInt(e,10);o>t&&(t=o)})),t}function re(e){return/^-?\d*(\.\d+)?%$/.test(e)}function se(e){const t=parseFloat(e);return!isNaN(t)&&isFinite(t)}function de(e,t){return null==(null==e?void 0:e[t])?null:"string"==typeof e[t]?e[t]:se(e[t])?`${Math.round(parseFloat(e[t]))}px`:null}function ue(e,t){return`${(100*e/t).toFixed(1)}%`}function ce(e,t){return parseFloat(`${e}`)*t/100}const pe=(0,n.createSelector)([e=>e.appConfig.mainSizeMode,e=>e.browserSizeMode,(e,t)=>{var o,i,a,l,r;let s;if(e.browserSizeMode===e.appConfig.mainSizeMode)s=!0;else{let l;(null===(o=t.layouts)||void 0===o?void 0:o[e.browserSizeMode])?l=e.browserSizeMode:(null===(i=t.layouts)||void 0===i?void 0:i[e.appConfig.mainSizeMode])&&(l=e.appConfig.mainSizeMode);const r=null===(a=t.layouts)||void 0===a?void 0:a[l],d=B(e.appConfig,r,l);if((null==d?void 0:d.type)===n.ContainerType.Header)s=null!=e.appConfig.header.layout[e.browserSizeMode];else if((null==d?void 0:d.type)===n.ContainerType.Footer)s=null!=e.appConfig.footer.layout[e.browserSizeMode];else if((null==d?void 0:d.type)===n.ContainerType.Dialog){s=null!=e.appConfig.dialogs[d.id].layout[e.browserSizeMode]}else if((null==d?void 0:d.type)===n.ContainerType.Page){s=null!=e.appConfig.pages[d.id].layout[e.browserSizeMode]}}if(s&&(null===(l=t.layouts)||void 0===l?void 0:l[e.browserSizeMode])){const o=t.layouts[e.browserSizeMode];return e.appConfig.layouts[o]}const d=null===(r=t.layouts)||void 0===r?void 0:r[e.appConfig.mainSizeMode];return e.appConfig.layouts[d]}],((e,t,o)=>({mainSizeMode:e,browserSizeMode:t,layout:o}))),ge=(0,n.createSelector)([(e,t)=>{var o,n,i;const{layoutId:a,layoutItemId:l}=t;return null===(i=null===(n=null===(o=e.appConfig.layouts)||void 0===o?void 0:o[a])||void 0===n?void 0:n.content)||void 0===i?void 0:i[l]},(e,t)=>{var o,i,a,l,r,s;const{layoutId:d,layoutItemId:u}=t,c=null===(a=null===(i=null===(o=e.appConfig.layouts)||void 0===o?void 0:o[d])||void 0===i?void 0:i.content)||void 0===a?void 0:a[u];if((null==c?void 0:c.type)===n.LayoutItemType.Widget&&c.widgetId){const t=e.appConfig.widgets[c.widgetId];return null!==(s=null===(r=null===(l=null==t?void 0:t.manifest)||void 0===l?void 0:l.properties)||void 0===r?void 0:r.watchViewportVisibility)&&void 0!==s&&s}return!1},e=>{var t;return null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.selection},e=>{var t;return null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.animationPreview},e=>{var t;return null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.hoverPreview},(e,t)=>t.layoutId],((e,t,o,n,i,a)=>{var l;if(!e)return{layoutItem:null,selected:!1};let r=!1;const s=null!==(l=e.isPending)&&void 0!==l&&l;o&&(r=o.layoutId===a&&o.layoutItemId===e.id);const d={selected:r,watchViewportVisibility:t,layoutItem:s?null:e,autoScroll:r?o.autoScroll:void 0};if(r&&(null==n?void 0:n.layoutInfo)){const{layoutId:t,layoutItemId:o}=n.layoutInfo;d.animationPreview=t===a&&o===e.id,d.playMode=d.animationPreview?n.playMode:null,d.previewId=d.animationPreview?n.id:null}else if(r&&(null==i?void 0:i.layoutInfo)){const{layoutId:t,layoutItemId:o}=i.layoutInfo;d.hoverPreview=t===a&&o===e.id,d.previewId=d.hoverPreview?i.id:null}return d})),ve=(0,n.createSelector)([(e,t)=>{var o,i,a;const{layoutId:l,layoutItemId:r}=t,s=null===(a=null===(i=null===(o=e.appConfig.layouts)||void 0===o?void 0:o[l])||void 0===i?void 0:i.content)||void 0===a?void 0:a[r];if((null==s?void 0:s.type)===n.LayoutItemType.Widget&&s.widgetId)return e.appConfig.widgets[s.widgetId]},(e,t)=>{var o,i,a,l;const{layoutId:r,layoutItemId:s}=t,d=null===(a=null===(i=null===(o=e.appConfig.layouts)||void 0===o?void 0:o[r])||void 0===i?void 0:i.content)||void 0===a?void 0:a[s];if((null==d?void 0:d.type)===n.LayoutItemType.Widget&&!d.widgetId)return null===(l=d.setting)||void 0===l?void 0:l.placeholderStyle},(e,t)=>{var o,i,a;const{layoutId:l,layoutItemId:r}=t,s=null===(a=null===(i=null===(o=e.appConfig.layouts)||void 0===o?void 0:o[l])||void 0===i?void 0:i.content)||void 0===a?void 0:a[r];if((null==s?void 0:s.type)===n.LayoutItemType.Widget&&s.widgetId)return e.widgetsRuntimeInfo[s.widgetId]},(e,t)=>{var o,i,a;const{layoutId:l,layoutItemId:r}=t,s=null===(a=null===(i=null===(o=e.appConfig.layouts)||void 0===o?void 0:o[l])||void 0===i?void 0:i.content)||void 0===a?void 0:a[r];if((null==s?void 0:s.type)===n.LayoutItemType.Widget&&!s.widgetId)return e.widgetsState[s.widgetId]},(e,t)=>{var o,i;const{layoutId:a}=t,l=null===(o=e.appConfig.layouts)||void 0===o?void 0:o[a];if((null===(i=l.parent)||void 0===i?void 0:i.type)===n.LayoutParentType.Widget){const t=l.parent.id,o=e.appConfig.widgets[t];return/widgets\/common\/controller\/?/.test(o.uri)}return!1}],((e,t,o,i,a)=>{var l,r,s,d,u,c,p,g,v,y,h,f,m,I,x,w;const b=null===(r=null===(l=null==e?void 0:e.manifest)||void 0===l?void 0:l.properties)||void 0===r?void 0:r.supportInlineEditing;return{hasEmbeddedLayout:(null===(d=null===(s=null==e?void 0:e.manifest)||void 0===s?void 0:s.properties)||void 0===d?void 0:d.hasEmbeddedLayout)&&Object.keys(null!==(u=e.layouts)&&void 0!==u?u:{}).length>0,supportInlineEditing:b,supportRepeat:null===(p=null===(c=null==e?void 0:e.manifest)||void 0===c?void 0:c.properties)||void 0===p?void 0:p.supportRepeat,isClassLoaded:null!==(g=null==o?void 0:o.isClassLoaded)&&void 0!==g&&g,isInlineEditing:b&&(null==o?void 0:o.isInlineEditing),isInController:a,useDragHandler:null!==(h=null===(y=null===(v=null==e?void 0:e.manifest)||void 0===v?void 0:v.properties)||void 0===y?void 0:y.useDragHandler)&&void 0!==h&&h,widgetStyle:null!=e?e.style:t,canCrossLayoutBoundary:null===(m=null===(f=null==e?void 0:e.manifest)||void 0===f?void 0:f.properties)||void 0===m?void 0:m.canCrossLayoutBoundary,hasExtension:(null===(x=null===(I=null==e?void 0:e.manifest)||void 0===I?void 0:I.extensions)||void 0===x?void 0:x.length)>0,widgetJson:e,widgetId:null==e?void 0:e.id,isFunctionalWidget:(null===(w=null==e?void 0:e.manifest)||void 0===w?void 0:w.widgetType)!==n.WidgetType.Layout,widgetState:i}}));function ye(e,t){var o,n,i,a;const l=null===(o=null==t?void 0:t.widgets)||void 0===o?void 0:o[e];return!!(null===(i=null===(n=null==l?void 0:l.manifest)||void 0===n?void 0:n.properties)||void 0===i?void 0:i.hasEmbeddedLayout)&&Object.keys(null!==(a=null==l?void 0:l.layouts)&&void 0!==a?a:{}).length>0}function he(e,t){var o,i;const a=null===(o=null==t?void 0:t.widgets)||void 0===o?void 0:o[e];return(null===(i=null==a?void 0:a.manifest)||void 0===i?void 0:i.widgetType)!==n.WidgetType.Layout}function fe(e,t){var o,i;if(!t||t.itemType!==n.LayoutItemType.Widget)return!1;if(t.layoutInfo){const{layoutId:n,layoutItemId:a}=t.layoutInfo,l=null===(i=null===(o=e.layouts)||void 0===o?void 0:o[n].content)||void 0===i?void 0:i[a];if(l&&!l.widgetId)return!0}return!t.layoutInfo&&!t.uri}function me(e,t,o){if(!e)return(0,n.Immutable)({left:re(t.left)?t.left:`${Math.round(t.left)}px`,right:re(t.right)?t.right:`${Math.round(t.right)}px`,top:re(t.top)?t.top:`${Math.round(t.top)}px`,bottom:re(t.bottom)?t.bottom:`${Math.round(t.bottom)}px`,width:re(t.width)?t.width:`${Math.round(t.width)}px`,height:re(t.height)?t.height:`${Math.round(t.height)}px`});let i=e;return["left","right","top","bottom","width","height"].forEach((e=>{null!=i[e]?i=Ie(e,i,t[e],o):null!=t[e]&&(i=i.set(e,`${Math.round(t[e])}px`))})),i}function Ie(e,t,o,n){if(null==t[e]||"auto"===t[e])return t;let i=t;return i=re(t[e])?"left"===e||"right"===e||"width"===e?re(o)?t.set(e,o):t.set(e,`${(100*+o/n.width).toFixed(4)}%`):re(o)?t.set(e,o):t.set(e,`${(100*+o/n.height).toFixed(4)}%`):re(o)?"left"===e||"right"===e||"width"===e?t.set(e,Math.round(parseFloat(`${o}`)*n.width/100)):t.set(e,Math.round(parseFloat(`${o}`)*n.height/100)):isNaN(+o)?t.without(e):t.set(e,`${Math.round(+o)}px`),i}function xe(e,t){return{left:e.left-t.left,top:e.top-t.top,right:e.right,bottom:e.bottom,width:e.width,height:e.height,id:null}}function we(){var e,t;return null!==(t=null===(e=(0,n.getAppStore)().getState().appContext)||void 0===e?void 0:e.isRTL)&&void 0!==t&&t}function be(e){let t=100,o=100;if("number"==typeof e)t=100,o=Math.round(100*e);else if("string"==typeof e){const n=e.split(":");t=parseInt(n[0],10),o=parseInt(n[1],10)}return t/o}function Se(e){return e&&0!==e.length?1===e.length?[e[0],e[0],e[0],e[0]]:2===e.length?[e[0],e[1],e[0],e[1]]:3===e.length?[e[0],e[1],e[2],0]:[e[0],e[1],e[2],e[3]]:[0,0,0,0]}function Ce(e,t){var o,n,i,a;const l=null!==(o=t.setting)&&void 0!==o?o:{},r=ze("height",t.bbox,l.autoProps);let s;if("ratio"===l.heightMode)s={setting:{heightMode:"ratio",aspectRatio:null!==(n=l.aspectRatio)&&void 0!==n?n:1,autoProps:{height:S.Custom}}};else{if(r!==S.Custom)return{height:r===S.Stretch?e:null,setting:{autoProps:{height:r}}};{let o=null!==(a=null===(i=t.bbox)||void 0===i?void 0:i.height)&&void 0!==a?a:e;o=re(o)?ce(o,e):parseInt(o),s={height:o,setting:{heightMode:"fixed",autoProps:{height:S.Custom}}}}}return s}function Te(){var e;return window.jimuConfig.isBuilder?null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appConfig:(0,n.getAppStore)().getState().appConfig}function Re(){var e,t;return(null===(e=null===window||void 0===window?void 0:window.jimuConfig)||void 0===e?void 0:e.isBuilder)?null===(t=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===t?void 0:t.browserSizeMode:(0,n.getAppStore)().getState().browserSizeMode}function je(){var e,t,o;return window.jimuConfig.isBuilder?null===(t=null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appRuntimeInfo)||void 0===t?void 0:t.currentPageId:null===(o=(0,n.getAppStore)().getState().appRuntimeInfo)||void 0===o?void 0:o.currentPageId}function Me(){var e,t,o;return window.jimuConfig.isBuilder?null===(t=null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appRuntimeInfo)||void 0===t?void 0:t.currentDialogId:null===(o=(0,n.getAppStore)().getState().appRuntimeInfo)||void 0===o?void 0:o.currentDialogId}function Pe(){var e,t,o;return window.jimuConfig.isBuilder?null===(t=null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appRuntimeInfo)||void 0===t?void 0:t.activePagePart:null===(o=(0,n.getAppStore)().getState().appRuntimeInfo)||void 0===o?void 0:o.activePagePart}function Le(){var e,t,o;const i=window.jimuConfig.isBuilder?null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appConfig:(0,n.getAppStore)().getState().appConfig,a=Me(),l=Re();return null===(o=null===(t=null==i?void 0:i.dialogs[a])||void 0===t?void 0:t.layout)||void 0===o?void 0:o[l]}function $e(){var e,t,o;const i=window.jimuConfig.isBuilder?null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appConfig:(0,n.getAppStore)().getState().appConfig,a=je(),l=Re();return null===(o=null===(t=null==i?void 0:i.pages[a])||void 0===t?void 0:t.layout)||void 0===o?void 0:o[l]}function Oe(){var e,t,o;const i=window.jimuConfig.isBuilder?null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appConfig:(0,n.getAppStore)().getState().appConfig,a=Re();return null===(o=null===(t=null==i?void 0:i.header)||void 0===t?void 0:t.layout)||void 0===o?void 0:o[a]}function ke(){var e,t,o;const i=window.jimuConfig.isBuilder?null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appConfig:(0,n.getAppStore)().getState().appConfig,a=Re();return null===(o=null===(t=null==i?void 0:i.footer)||void 0===t?void 0:t.layout)||void 0===o?void 0:o[a]}function Ae(e,t){return t.left>=e.left&&t.left+t.width<=e.left+e.width&&t.top>=e.top&&t.top+t.height<=e.top+e.height}function Ee(e,t){return!(t.left>e.left+e.width||t.left+t.width<e.left||t.top>e.top+e.height||t.top+t.height<e.top)}function Ne(e,t){var o,i,a;let l,r;if(null!=e&&"object"==typeof e)l=null!==(o=e.unit)&&void 0!==o?o:y.DistanceUnits.PIXEL,r=null!==(i=e.distance)&&void 0!==i?i:0;else{const t=n.polished.getValueAndUnit(e);l=null!==(a=null==t?void 0:t[1])&&void 0!==a?a:y.DistanceUnits.PIXEL,r=+(null==t?void 0:t[0])>=0?+t[0]:0}return t>=0||(t=l===y.DistanceUnits.PERCENTAGE?1:0),`${r.toFixed(t)}${l}`}function ze(e,t,o){const n=null==o?void 0:o[e],i="width"===e?"left":"top",a="width"===e?"right":"bottom";if(!n)return null!=t[e]?S.Custom:null!=t[i]&&null!=t[a]?S.Stretch:S.Auto;if(!0===n)return null!=t[i]&&null!=t[a]?S.Stretch:S.Auto;switch(n){case S.Auto:return S.Auto;case S.Stretch:return S.Stretch;default:return S.Custom}}function Be(e){return"ratio"===e.heightMode&&null!=e.aspectRatio}function Fe(e,t){let o=Math.max(e,t),n=Math.min(e,t);for(;0!==n;){const e=n;n=o%n,o=e}return o}function He(e){const{delay:t,isLastChild:o}=e;return{delay:t,isLastChild:o}}function We(e,t){n.utils.changeAppConfig(e),(0,n.getAppStore)().dispatch(n.appActions.selectionChanged(t))}const Ve=n.lodash.assign({},{gridSize:1}),De=n.lodash.assign({},{order:0},{lockParent:!1,lockLayout:!1,autoProps:{}});function Ge(e,t){var o;const n=e.appConfig.sections[t];if(!n||!n.views)return null;const i=null===(o=e.appRuntimeInfo.sectionNavInfos)||void 0===o?void 0:o[n.id];let a;if(!i){const t=n.views[0];a=e.appConfig.views[t]}return{sectionId:t,navInfo:i,activeView:a,views:n.views,sectionStyle:n.style,transition:n.transition,autoPlay:n.autoPlay,interval:n.interval,loop:n.loop,focusable:n.focusable}}function Ue(e,t,o,i){const a=e.pages[t];return a?i===n.PagePart.Header?a.header&&e.header?Ye(e,e.header.layout[o],o):[]:i===n.PagePart.Footer?a.footer&&e.footer?Ye(e,e.footer.layout[o],o):[]:i===n.PagePart.Body?Ye(e,a.layout[o],o):[]:[]}function _e(e,t,o,i){const a=e.pages[t];return a?i===n.PagePart.Header?a.header&&e.header?qe(e,e.header.layout,o):[]:i===n.PagePart.Footer?a.footer&&e.footer?qe(e,e.footer.layout,o):[]:i===n.PagePart.Body?qe(e,a.layout,o):[]:[]}function Xe(e,t,o){const n=e.dialogs[t];return n?Ye(e,n.layout[o],o):[]}function Je(e,t,o){const n=e.dialogs[t];return n?qe(e,n.layout,o):[]}function Ye(e,t,o){let i=[];A(e.layouts[t],n.LayoutItemType.Widget,!0).forEach((t=>{const n=e.layouts[t.layoutId].content[t.layoutItemId];n.isPending?i.push(t):e.widgets[n.widgetId].layouts&&Object.keys(e.widgets[n.widgetId].layouts).forEach((t=>{i=i.concat(Ye(e,e.widgets[n.widgetId].layouts[t][o],o))}))}));A(e.layouts[t],n.LayoutItemType.Section,!0).forEach((t=>{const n=e.layouts[t.layoutId].content[t.layoutItemId];n.isPending?i.push(t):e.sections[n.sectionId].views&&e.sections[n.sectionId].views.forEach((t=>{i=i.concat(Ye(e,e.views[t].layout[o],o))}))}));return A(e.layouts[t],n.LayoutItemType.ScreenGroup,!0).forEach((t=>{var n,a;const l=e.layouts[t.layoutId].content[t.layoutItemId];if(l.isPending)i.push(t);else{const t=l.screenGroupId;null===(a=null===(n=e.screenGroups)||void 0===n?void 0:n[t].screens)||void 0===a||a.forEach((t=>{const n=null==e?void 0:e.screens[t];n.main&&(i=i.concat(Ye(e,n.main.layout[o],o))),n.panel&&(i=i.concat(Ye(e,n.panel.layout[o],o)))}))}})),i}function qe(e,t,o,i=null,a=null,l=null){const r=[];i||(i=M(e,t[o],n.LayoutItemType.Widget,o,!0)),a||(a=M(e,t[o],n.LayoutItemType.Section,o,!0)),l||(l=M(e,t[o],n.LayoutItemType.ScreenGroup,o,!0));return Object.keys(n.BrowserSizeMode).filter((e=>n.BrowserSizeMode[e]!==o)).map((e=>n.BrowserSizeMode[e])).forEach((s=>{A(e.layouts[t[s]],n.LayoutItemType.Widget,!0).forEach((t=>{var s;const d=e.layouts[t.layoutId].content[t.layoutItemId];(null===(s=e.widgets[d.widgetId].manifest)||void 0===s?void 0:s.widgetType)!==n.WidgetType.Layout&&i.indexOf(d.widgetId)<0?!Ke(e,r,t)&&r.push(t):e.widgets[d.widgetId].layouts&&Object.keys(e.widgets[d.widgetId].layouts).forEach((t=>{qe(e,e.widgets[d.widgetId].layouts[t],o,i,a,l).forEach((t=>{!Ke(e,r,t)&&r.push(t)}))}))}));A(e.layouts[t[s]],n.LayoutItemType.Section,!0).forEach((t=>{const n=e.layouts[t.layoutId].content[t.layoutItemId];a.indexOf(n.sectionId)<0?!Ke(e,r,t)&&r.push(t):e.sections[n.sectionId].views&&e.sections[n.sectionId].views.forEach((t=>{qe(e,e.views[t].layout,o,i,a,l).forEach((t=>{!Ke(e,r,t)&&r.push(t)}))}))}));A(e.layouts[t[s]],n.LayoutItemType.ScreenGroup,!0).forEach((t=>{var n,s;const d=e.layouts[t.layoutId].content[t.layoutItemId];l.indexOf(d.screenGroupId)<0?!Ke(e,r,t)&&r.push(t):(null===(s=null===(n=e.screenGroups)||void 0===n?void 0:n[d.screenGroupId])||void 0===s?void 0:s.screens)&&e.screenGroups[d.screenGroupId].screens.forEach((t=>{var n;const s=null===(n=e.screens)||void 0===n?void 0:n[t];(null==s?void 0:s.main)&&qe(e,s.main.layout,o,i,a,l).forEach((t=>{!Ke(e,r,t)&&r.push(t)})),(null==s?void 0:s.panel)&&qe(e,s.panel.layout,o,i,a,l).forEach((t=>{!Ke(e,r,t)&&r.push(t)}))}))}))})),r}function Ke(e,t,o){const i=e.layouts[o.layoutId].content[o.layoutItemId];return!!t.find((t=>{const o=e.layouts[t.layoutId].content[t.layoutItemId];return o.type===i.type&&(o.type===n.LayoutItemType.Widget&&o.widgetId===i.widgetId||o.type===n.LayoutItemType.Section&&o.sectionId===i.sectionId)}))}var Ze=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o};class Qe extends n.React.PureComponent{constructor(e){super(e),this.onMouseDown=()=>{var e;if(this.props.widgetId){(null===(e=(0,n.getAppStore)().getState().widgetsRuntimeInfo[this.props.widgetId])||void 0===e?void 0:e.state)!==n.WidgetState.Active&&(0,n.getAppStore)().dispatch(n.appActions.activateWidget(this.props.widgetId))}},this.onMouseDown=this.onMouseDown.bind(this),this.ref=n.React.createRef(),this.state={error:null}}loadWidgetClass(){const{widgetId:e,isClassLoaded:t}=this.props;e&&!t&&n.WidgetManager.getInstance().loadWidgetClass(e).catch((e=>{console.log(e),this.setState({error:n.i18n.getIntl().formatMessage({id:"widgetLoadError"})})}))}componentDidMount(){this.loadWidgetClass()}componentDidUpdate(){this.loadWidgetClass()}renderWidgetContent(){const{widgetId:e,layoutId:t,layoutItemId:o,autoWidth:i,autoHeight:a,onInitResizeHandler:l,onInitDragHandler:r}=this.props;let s;return e&&(s=n.WidgetManager.getInstance().getWidgetClass(e)),this.state.error?(0,n.jsx)("div",{className:"widget-content"},this.state.error):(0,n.jsx)("div",{className:(0,n.classNames)("widget-content",{"d-none":!e})},s&&(0,n.jsx)(n.ErrorBoundary,null,(0,n.jsx)(s,{widgetId:e,layoutId:t,layoutItemId:o,autoWidth:i,autoHeight:a,onInitResizeHandler:l,onInitDragHandler:r})))}getStyle(){const{forceAspectRatio:e,aspectRatio:t}=this.props,o=n.css`
      -webkit-overflow-scrolling: touch;
    `;return n.css`
      ${"app-loader"===this.props.widgetId?o:""};
      overflow: ${this.props.canCrossLayoutBoundary?"visible":"hidden"};
      position: relative;
      aspect-ratio: ${e&&t>0?t:null};

      & > .widget-content {
        position: relative;
        height: 100%;
        width: 100%;
        z-index: 0;
      }
    `}render(){var e,t;const{className:o,widgetStyle:i,widgetId:a,rotate:l}=this.props,r=y.styleUtils.toCSSStyle(i),{transform:s}=r,d=Ze(r,["transform"]),u=l>0||l<0?`rotateZ(${l}deg)`:"";let c=u;return s&&(c=`${s} ${u}`),(0,n.jsx)("div",{className:(0,n.classNames)(`widget-renderer layout-item-content w-100 ${null!==(t=null===(e=null==i?void 0:i.boxShadow)||void 0===e?void 0:e.presetStyle)&&void 0!==t?t:""}`,o),css:this.getStyle(),style:Object.assign(Object.assign({},d),{transform:c}),onMouseDownCapture:this.onMouseDown,"data-widgetid":a,ref:this.ref},this.renderWidgetContent(),this.props.children)}}const et=n.ReactRedux.connect(ve)(Qe),tt={},ot={};function nt(e,t){tt[e]=t}function it(e,t){ot[e]=t}function at(e){return tt[e]}function lt(e){return ot[e]}class rt extends n.React.PureComponent{render(){const{layout:e}=this.props;if(!e)return null;const t=lt(e.type||n.LayoutType.FlowLayout);return t?n.React.createElement(t,Object.assign({},this.props)):null}}const st=n.ReactRedux.connect(pe)(rt);var dt=l(1888);function ut(e,t){if(!e)return null;let o={};e.backgroundIMage&&(o="string"==typeof e.backgroundIMage?{}:e.backgroundIMage);const n=e.backgroundPosition?y.FillType[e.backgroundPosition.toUpperCase()]:y.FillType.FILL;let i;i=null==e.backgroundColor?t:""===e.backgroundColor?"transparent":e.backgroundColor?e.backgroundColor:"";const a={color:i,fillType:n,image:o};return y.styleUtils.toBackgroundStyle(a)}function ct(e){var t,o;const{viewId:i,isActive:a,layoutEntryComponent:l,viewVisibilityContext:r}=e,s=n.ReactRedux.useSelector((e=>{var t,o;return null===(o=null===(t=e.appConfig)||void 0===t?void 0:t.views)||void 0===o?void 0:o[i]})),d=null===(o=null===(t=(0,dt.useTheme)())||void 0===t?void 0:t.body)||void 0===o?void 0:o.bg,u=l,c=r,[p,g]=n.React.useState(!1),v=n.React.useMemo((()=>({isInView:!0,isInCurrentView:a})),[a]);return n.React.useEffect((()=>{a&&s.lazyLoad&&!p&&g(!0)}),[a,s.lazyLoad,p]),(0,n.jsx)("div",{className:(0,n.classNames)("w-100 h-100 d-flex section-view",{[y.FOCUSABLE_CONTAINER_CLASS]:a}),style:ut(s,d),css:n.css`&, .exb-drop-area { pointer-events: ${a?"auto":"none"}; }`,key:i,id:`${s.parent}_${s.id}`},(p||!s.lazyLoad)&&(0,n.jsx)(n.ErrorBoundary,null,(0,n.jsx)(c.Provider,{value:v},(0,n.jsx)(u,{layouts:null==s?void 0:s.layout,isInSection:!0,className:"w-100"}))))}function pt(e){var t,o;const{views:i,navInfo:a,animationPreview:l,playMode:r,currentIndex:s,previousIndex:d,progress:u,loop:c,viewTransition:p}=e,g=l&&r===n.AnimationPlayMode.OneByOne,{setting:v,playId:y}=n.React.useContext(n.AnimationContext),h=n.ReactRedux.useSelector((e=>{var t;return!v||v.type===n.AnimationType.None||(null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.appMode)===n.AppMode.Design})),f=!h||g||(null==a?void 0:a.playId)&&(null==a?void 0:a.withOneByOne)?v:null,m=n.React.useMemo((()=>({setting:f,playId:g?y:null})),[f,g,y]);return(0,n.jsx)(n.AnimationContext.Provider,{value:m},(0,n.jsx)("div",{className:"section-content"},(0,n.jsx)(n.TransitionContainer,{useProgress:null!==(t=null==a?void 0:a.useProgress)&&void 0!==t&&t,useStep:null!==(o=null==a?void 0:a.useStep)&&void 0!==o&&o,previousIndex:d,currentIndex:s,progress:u,transitionType:null==p?void 0:p.type,direction:null==p?void 0:p.direction,playId:null==a?void 0:a.playId,withOneByOne:null==a?void 0:a.withOneByOne,loop:c},i.map((t=>{const o=t===i[s];return(0,n.jsx)(ct,{key:t,viewId:t,isActive:o,layoutEntryComponent:e.layoutEntryComponent,viewVisibilityContext:e.viewVisibilityContext})})))))}var gt=l(7568),vt=l.n(gt),yt=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o};const ht=e=>{const t=window.SVG,{className:o}=e,i=yt(e,["className"]),a=(0,n.classNames)("jimu-icon jimu-icon-component",o);return t?n.React.createElement(t,Object.assign({className:a,src:vt()},i)):n.React.createElement("svg",Object.assign({className:a},i))};var ft=l(2943),mt=l.n(ft),It=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o};const xt=e=>{const t=window.SVG,{className:o}=e,i=It(e,["className"]),a=(0,n.classNames)("jimu-icon jimu-icon-component",o);return t?n.React.createElement(t,Object.assign({className:a,src:mt()},i)):n.React.createElement("svg",Object.assign({className:a},i))};function wt(e){var t,o,i;const{sectionId:a,currentIndex:l,numOfViews:r,onCurrentViewChange:s}=e,d=n.hooks.useTranslation(y.defaultMessages),u=n.ReactRedux.useSelector((e=>{var t;return null===(t=e.appConfig.sections[a])||void 0===t?void 0:t.arrowsNav})),c=n.ReactRedux.useSelector((e=>{var t;return null===(t=e.appConfig.sections[a])||void 0===t?void 0:t.dotsNav})),p=n.ReactRedux.useSelector((e=>{if(null==c?void 0:c.visible){const t=e.appConfig.sections[a],o=null==t?void 0:t.views;if((null==o?void 0:o.length)>0){return o.map((t=>e.appConfig.views[t].label)).join(";")}}return""})),g=n.React.useMemo((()=>p.length>0?p.split(";"):[]),[p]),v=null!==(t=null==c?void 0:c.position)&&void 0!==t?t:"b",h=n.React.useMemo((()=>{const e=[];for(let t=0;t<r;t++)e.push(t);return e}),[r]),f=()=>{var e,t,o,i;return n.css`
      position: absolute;
      cursor: pointer;
      pointer-events: auto;

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
    `},m=n.React.useCallback(((e,t)=>{var o;return(0,n.jsx)(y.Button,{key:e,type:"tertiary","aria-label":null!==(o=g[e])&&void 0!==o?o:"","aria-pressed":t,className:(0,n.classNames)("dot p-0 rounded-circle",{active:t,disabled:r<=1}),onClick:t?void 0:()=>{s(e)}})}),[s,r,g]),I=n.React.useCallback((()=>{s(l>0?l-1:r-1)}),[l,r,s]),x=n.React.useCallback((()=>{s(l<r-1?l+1:0)}),[l,r,s]),w=r>1&&0!==l,b=r>1&&l!==r-1;return(0,n.jsx)(n.React.Fragment,null,(null==u?void 0:u.visible)&&(0,n.jsx)(n.React.Fragment,null,(0,n.jsx)(y.Button,{type:"tertiary",disabled:!w,className:(0,n.classNames)("arrows-nav first p-0",{vertical:"v"===u.direction}),css:f(),onClick:w?I:null,"aria-label":d("previous")},(0,n.jsx)(ht,{className:"m-0",autoFlip:"v"!==u.direction,size:null!==(o=u.size)&&void 0!==o?o:20})),(0,n.jsx)(y.Button,{type:"tertiary",disabled:!b,className:(0,n.classNames)("arrows-nav second p-0",{vertical:"v"===u.direction}),css:f(),onClick:b?x:null,"aria-label":d("next")},(0,n.jsx)(xt,{className:"m-0",autoFlip:"v"!==u.direction,size:null!==(i=u.size)&&void 0!==i?i:20}))),(null==c?void 0:c.visible)&&(0,n.jsx)("div",{className:(0,n.classNames)("dots-nav",{"snap-left":"l"===v,"snap-top":"t"===v,"snap-right":"r"===v,"snap-bottom":"b"===v}),css:(()=>{var e,t,o,i,a,l,r,s,d,u,p,g,y,h;return n.css`
      position: absolute;
      display: flex;
      flex-direction: ${"l"===v||"r"===v?"column":"row"};
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
        height: ${null!==(y=c.size)&&void 0!==y?y:8}px;

        > button:not(:first-of-type) {
          margin-left: ${null!==(h=c.spacing)&&void 0!==h?h:10}px;
        }
      }
    `})()},h.map((e=>m(e,e===l)))))}function bt(e){const{sectionId:t,autoPlay:o,interval:i=w,loop:a=!1}=e,l=n.React.useRef(),r=n.ReactRedux.useSelector((e=>{var t,i;return o?(null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.appMode)===n.AppMode.Design||(null===(i=e.appRuntimeInfo)||void 0===i?void 0:i.isPrintPreview):null})),s=n.React.useRef(r),d=n.React.useCallback((()=>{l.current&&(clearInterval(l.current),l.current=null)}),[]),u=n.React.useCallback((()=>{d(),l.current=setInterval((()=>{const e=function(e,t){var o,i;const a=(0,n.getAppStore)().getState(),l=a.appConfig.sections[e].views;let r=null===(i=null===(o=a.appRuntimeInfo)||void 0===o?void 0:o.sectionNavInfos)||void 0===i?void 0:i[e];const s=(null==r?void 0:r.currentViewId)?l.indexOf(r.currentViewId):0,d=s<l.length-1?s+1:0;return t||0!==d?(r=r?r.set("previousViewId",l[s]).set("currentViewId",l[d]):{previousViewId:l[s],currentViewId:l[d]},(0,n.getAppStore)().dispatch(n.appActions.sectionNavInfoChanged(e,r)),!0):(n.jimuHistory.changeView(e,l[l.length-1]),!1)}(t,a);e||d()}),1e3*i)}),[t,a,i,d]);n.React.useEffect((()=>{if(!s.current){if(!o)return void d();u()}return()=>{d()}}),[o,i,a,d,u]),n.React.useEffect((()=>{if(s.current!==r&&null!==r){if(s.current=r,r)return void d();o&&u()}}),[r,u,d,o])}var St=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o};function Ct(e,t){return n.css`
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
  `}function Tt(e){var t;const{views:o,navInfo:a,activeView:l,animationPreview:r,playMode:s,transition:d,sectionId:u,autoPlay:c,focusable:p=!0,interval:g=w,loop:v=!0,className:h,sectionStyle:f,rotate:m,forceAspectRatio:I,aspectRatio:x,layoutEntryComponent:b,viewVisibilityContext:S}=e,C=n.React.useRef(),T=n.React.useRef(),R=n.React.useRef(!1),j=n.React.useRef(!1),M=n.React.useRef(null),[P,L]=n.React.useState(!1),$=n.hooks.useTranslation(i),O=null==l?void 0:l.id,k=n.React.useMemo((()=>{var e;let t,i,l,r=o;if(a)if(r=null!==(e=a.visibleViews)&&void 0!==e?e:o,a.useProgress){l=a.progress;t=(0,n.getIndexFromProgress)(l,r.length).currentIndex}else t=Math.max(0,r.indexOf(a.currentViewId)),i=a.previousViewId?Math.max(0,r.indexOf(a.previousViewId)):Math.max(0,t-1);else t=Math.max(0,r.indexOf(O)),i=t;return C.current=t,{currentIndex:t,previousIndex:i,progress:l}}),[O,a,o]),A=n.React.useMemo((()=>y.styleUtils.toCSSStyle(f)),[f]),{transform:E}=A,N=St(A,["transform"]),z=m>0||m<0?`rotateZ(${m}deg)`:"";let B=z;E&&(B=`${E} ${z}`);const F=n.React.useCallback((()=>{L(!0)}),[]),H=n.React.useCallback((()=>{L(!1)}),[]),W=n.React.useCallback((e=>{R.current=!0,j.current=e.target===T.current,null!=M.current&&(clearTimeout(M.current),M.current=null),c&&L(!0)}),[c]),V=n.React.useCallback((e=>{R.current=!1,null!=M.current&&(clearTimeout(M.current),M.current=null),c&&(M.current=setTimeout((()=>{L(!1)}),500))}),[c]),D=c&&!P;bt({sectionId:u,interval:g,loop:v,autoPlay:D});const G=n.React.useCallback((e=>{n.jimuHistory.changeView(u,o[e])}),[u,o]);return(0,n.jsx)("div",{className:(0,n.classNames)(`section-layout layout-item-content w-100 ${null===(t=null==f?void 0:f.boxShadow)||void 0===t?void 0:t.presetStyle}`,h),css:Ct(I,x),"data-sectionid":u,style:Object.assign(Object.assign({},N),{transform:B}),onMouseEnter:c?F:null,onMouseLeave:c?H:null,onTouchStart:c?F:null,onTouchEnd:c?H:null,onFocus:W,onBlur:V,tabIndex:p?0:void 0,"aria-label":$("activeViewTip",{viewLabel:(()=>{var e,t,i;const a=o[C.current],l=(0,n.getAppStore)().getState().appConfig;return null!==(i=null===(t=null===(e=null==l?void 0:l.views)||void 0===e?void 0:e[a])||void 0===t?void 0:t.label)&&void 0!==i?i:""})()}),ref:T},(0,n.jsx)(pt,{views:o,navInfo:a,animationPreview:r,playMode:s,currentIndex:k.currentIndex,previousIndex:k.previousIndex,progress:k.progress,loop:D&&v,viewTransition:d,layoutEntryComponent:b,viewVisibilityContext:S}),(0,n.jsx)(wt,{sectionId:u,numOfViews:o.length,currentIndex:k.currentIndex,onCurrentViewChange:G}))}class Rt extends n.React.PureComponent{render(){return n.React.createElement(Tt,Object.assign({},this.props,{layoutEntryComponent:st,viewVisibilityContext:p}))}}var jt=l(1496);function Mt(e,t){const[o,i]=n.React.useState(null),a=n.React.useContext(jt.PageVisibilityContext),l=n.React.useRef(!1);n.React.useEffect((()=>{null==e||t||l.current===a||(l.current=a,i((0,n.getNextAnimationId)()))}),[a,t,e]);const r=n.React.useCallback((()=>{i(null)}),[]);return[o,!a,r]}function Pt(){const e=[0];for(let t=1;t<=10;t++)e.push(t/10);return e}function Lt(e,t){const o=n.React.useRef(),[i,a]=n.React.useState(!0);return n.React.useEffect((()=>{if(o.current&&(o.current.unobserve(e),o.current=null),!t)return;if(e&&"function"==typeof IntersectionObserver){const t=new IntersectionObserver((e=>{var t;(t=e[0]).target.classList.contains("playing-animation")||t.boundingClientRect.width>0&&t.boundingClientRect.height>0&&a(t.isIntersecting)}),{threshold:Pt(),root:document,rootMargin:"20%"});return t.observe(e),o.current=t,()=>{o.current.unobserve(e),o.current=null}}}),[e,t]),i}var $t=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o};function Ot(e){var t,o,i,a,l,r,s,d,c;const p=n.ReactRedux.useSelector((t=>function(e,t){var o,i;const a=ge(e,t);if(!a.layoutItem)return a;if(a.layoutItem.type===n.LayoutItemType.Widget){const{layoutId:l,layoutItemId:r}=t,s=e.appConfig.widgets[a.layoutItem.widgetId],d=null===(i=null===(o=null==s?void 0:s.manifest)||void 0===o?void 0:o.properties)||void 0===i?void 0:i.supportInlineEditing,u=function(e,t,o){var i;const a=e.appConfig.layouts[t].content[o];if(a.type===n.LayoutItemType.Widget){const t=e.appConfig.widgets[a.widgetId],o=null===(i=null==t?void 0:t.layouts)||void 0===i?void 0:i.DEFAULT;if(o)return o[e.browserSizeMode]}return null}(e,l,r),c=Object.assign({widgetId:a.layoutItem.widgetId,supportInlineEditing:d},a);return u&&(c.innerLayoutId=u),c}const l=Ge(e,a.layoutItem.sectionId);return Object.assign(Object.assign({},a),l)}(t,e)),n.ReactRedux.shallowEqual),g=n.ReactRedux.useSelector((e=>{var t,o;return null!==(o=null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.isPrintPreview)&&void 0!==o&&o})),v=Object.assign(Object.assign({},e),p),y=n.React.useRef(),{layoutId:h,layoutItemId:f,layoutItem:m}=v,{className:x,children:w,id:b,isLastChild:S}=v,C=$t(v,["className","children","id","isLastChild"]),T=(null==m?void 0:m.type)===n.LayoutItemType.Widget,R=(null==m?void 0:m.type)===n.LayoutItemType.Section,{effect:j,oneByOneEffect:M,hoverEffect:P}=g?{}:null!==(o=null===(t=v.layoutItem)||void 0===t?void 0:t.setting)&&void 0!==o?o:{};let L=null===(i=null==j?void 0:j[n.AnimationTriggerType.ScrollIntoView])||void 0===i?void 0:i.type;L=L&&L!==n.AnimationType.None?L:null;let $=null===(a=null==M?void 0:M[n.AnimationTriggerType.ScrollIntoView])||void 0===a?void 0:a.type;$=$&&$!==n.AnimationType.None?$:null;const[O,k]=n.React.useState(!1),[A,E]=n.React.useState({setting:null==M?void 0:M[n.AnimationTriggerType.ScrollIntoView],playId:null,oid:p.innerLayoutId,revert:null}),N=Lt(y.current,v.watchViewportVisibility);n.React.useEffect((()=>{k(!0)}),[]);const{setting:z}=n.React.useContext(n.AnimationContext),[B,F,H]=Mt(L,null!=(null==z?void 0:z.type)&&z.type!==n.AnimationType.None),[W,V,D]=Mt($,null!=(null==z?void 0:z.type)&&z.type!==n.AnimationType.None);n.React.useEffect((()=>{null==B&&W&&E({setting:null==M?void 0:M[n.AnimationTriggerType.ScrollIntoView],playId:W,oid:p.innerLayoutId,revert:V,onContextAnimationEnd:V?null:()=>{D(),E({setting:null==M?void 0:M[n.AnimationTriggerType.ScrollIntoView],oid:p.innerLayoutId,playId:-1})}})}),[B,W,D,M,V,p.innerLayoutId]);const G=n.React.useCallback((()=>{var e;const t=null==M?void 0:M[n.AnimationTriggerType.ScrollIntoView],o=(null===(e=null==t?void 0:t.option)||void 0===e?void 0:e.start)===n.AnimationStartMode.AfterPrevious;E({setting:t,playId:(0,n.getNextAnimationId)(),oid:p.innerLayoutId,revert:o,onContextAnimationEnd:o?null:()=>{E({setting:t,oid:p.innerLayoutId,playId:-1})}})}),[M,p.innerLayoutId]),U=n.React.useCallback((()=>{var e;const t=null==M?void 0:M[n.AnimationTriggerType.ScrollIntoView];(null===(e=null==t?void 0:t.option)||void 0===e?void 0:e.start)===n.AnimationStartMode.AfterPrevious&&E({setting:t,playId:(0,n.getNextAnimationId)(),oid:p.innerLayoutId,revert:!1,onContextAnimationEnd:()=>{E({setting:t,oid:p.innerLayoutId,playId:-1})}}),B>0&&(null==H||H())}),[B,H,M,p.innerLayoutId]);if(!v.layoutItem||R&&!m.sectionId)return null;const _=null===(l=null==j?void 0:j[n.AnimationTriggerType.ScrollIntoView])||void 0===l?void 0:l.option,X=null!==(c=null===(d=null===(s=null===(r=m.setting)||void 0===r?void 0:r.style)||void 0===s?void 0:s.transform)||void 0===d?void 0:d.rotate)&&void 0!==c?c:0;return(0,n.jsx)(u.Provider,{value:N},(0,n.jsx)(n.AnimationComponent,{id:b,parentId:h,type:L,configType:null==_?void 0:_.configType,direction:null==_?void 0:_.direction,revert:F,delay:e.delay,isLastChild:S,playId:B,onAnimationStart:G,onAnimationEnd:U,ref:y,css:n.css`
          ${(0,n.getHoverStyle)(null==P?void 0:P.type,null==P?void 0:P.setting)};
          position: relative;
          overflow: visible;
          min-width: ${I}px;
          min-height: ${I}px;
        `,style:e.style,className:(0,n.classNames)("d-flex layout-item",x,{"is-widget":T,"is-section":R}),"data-layoutitemid":f,"data-layoutid":h},(0,n.jsx)(n.AnimationContext.Provider,{value:A},T&&(0,n.jsx)(et,Object.assign({rotate:X},C)),R&&(0,n.jsx)(Rt,Object.assign({rotate:X},C))),e.children))}class kt extends n.React.PureComponent{getPositionStyle(e){const{layoutItem:t,transformedBBox:o}=this.props,i=function(e,t){var o,n,i,a,l;const r={};let s=null!==(o=null==t?void 0:t.autoProps)&&void 0!==o?o:{},d=e;const u=ze("height",e,s),c=ze("width",e,s);if(u===S.Stretch)r.top=d.top,r.bottom=d.bottom;else{const o=null!==(n=s.top)&&void 0!==n&&n,a=null!==(i=s.bottom)&&void 0!==i&&i;u===S.Custom&&(r.height=d.height),o!==a&&!a||null==e.top?r.bottom=d.bottom:r.top=d.top,t.vCenter&&"50%"===d.top&&(r.top="50%")}if(c===S.Stretch)r.left=d.left,r.right=d.right;else{const e=null!==(a=s.left)&&void 0!==a&&a,o=null!==(l=s.right)&&void 0!==l&&l;c===S.Custom&&(r.width=d.width),e===o?null!=d.left?r.left=d.left:r.right=d.right:e&&null!=d.right?r.right=d.right:r.left=d.left,t.hCenter&&"50%"===d.left&&(r.left="50%")}return r}(null!=o?o:t.bbox,e),a=Object.assign(Object.assign({},i),function(e,t,o=!1){const n={},i=t.hCenter&&"50%"===e.left,a=t.vCenter&&"50%"===e.top,l=we()?-1:1;return i&&a?(n.right="auto",n.bottom="auto",n.transform=`translate(${-50*l}%, -50%)`):i?(n.right="auto",n.transform=`translateX(${-50*l}%)`):a&&(n.bottom="auto",n.transform="translateY(-50%)"),!o&&Be(t)&&(n.height="auto"),n}(t.bbox,e));return function(e){return[n.css`
      position: absolute;
      left: ${de(e,"left")};
      right: ${de(e,"right")};
      top: ${de(e,"top")};
      bottom: ${de(e,"bottom")};
      width: ${de(e,"width")};
      height: ${de(e,"height")};
    `,e.transform]}(a)}render(){const{layoutItem:e,layoutId:t}=this.props;if(null==e||e.isPending)return null;const o=n.lodash.assign({},De,e.setting),i=be(o.aspectRatio),a=Be(o),l=He(this.props),[r,s]=this.getPositionStyle(o),d=ze("width",e.bbox,o.autoProps),u=ze("height",e.bbox,o.autoProps);return(0,n.jsx)(Ot,Object.assign({css:r,style:{transform:s},layoutId:t,layoutItemId:e.id,forceAspectRatio:a,aspectRatio:i,isInSection:this.props.isInSection,autoWidth:d===S.Auto,autoHeight:u===S.Auto},l))}}class At extends n.React.PureComponent{createItem(e,t,o,i){const a=e.content[t];return(0,n.jsx)(kt,{key:`${e.id}_${t}`,index:o,layoutId:e.id,layoutItemId:t,layoutItem:a,transformedBBox:i?e.content[t].bbox:null,isInSection:this.props.isInSection})}render(){const{layout:e,layouts:t,className:o,style:i,browserSizeMode:a}=this.props;if(!e)return null;let l=e,r=!1;if(t[a]!==e.id&&this.layoutTransform){let o;Object.keys(t).some((n=>t[n]===e.id&&(o=n,!0))),l=this.layoutTransform(e,o,a),r=!0}const s=n.lodash.assign({},Ve,l.setting),d=l.order||[],u=(0,n.classNames)("layout fixed-layout d-flex",o);return(0,n.jsx)("div",{className:u,style:Object.assign(Object.assign(Object.assign({position:"relative",height:"auto"},i),y.styleUtils.toCSSStyle(s.style)),{width:"100%",overflow:"hidden"}),"data-layoutid":l.id},d.length>0&&(0,n.jsx)(n.IntersectionContext.Provider,{value:{monitor:!1}},(0,n.jsx)(n.OneByOneAnimation,{css:n.css`
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
              `,oid:e.id,"data-layoutid":e.id},d.map(((e,t)=>this.createItem(l,e,t,r))))))}}const Et=n.ReactRedux.connect(pe)(At);class Nt extends n.React.PureComponent{isStretchInCrossAxis(){const{layoutItem:e}=this.props;return function(e){var t,o;return(null===(o=null===(t=e.setting)||void 0===t?void 0:t.autoProps)||void 0===o?void 0:o.width)!==S.Custom}(e)}calHeight(e,t){return function(e,t){var o,n;return(null===(o=e.autoProps)||void 0===o?void 0:o.height)===S.Auto||"ratio"===e.heightMode?"ratio"===e.heightMode?{height:"auto",flex:"0 0 auto"}:{height:"auto"}:(null===(n=e.autoProps)||void 0===n?void 0:n.height)===S.Stretch||"fit"===e.heightMode?{flex:"1 1 auto"}:{height:t.height,flexShrink:0}}(e,t)}getStyle(e,t){const{layoutItem:o}=this.props,i=o.bbox||{},a=this.calHeight(e,i);return a.width=t?"auto":i.width,this.autoHeight="auto"===a.height,function(e,t,o){var i,a,l;const r=(null===(i=t.autoProps)||void 0===i?void 0:i.height)===S.Auto;return n.css`
    align-self: ${o?"stretch":null!==(l=null===(a=t.style)||void 0===a?void 0:a.alignSelf)&&void 0!==l?l:"auto"};
    width: ${de(e,"width")};
    height: ${de(e,"height")};
    flex: ${e.flex};
    flex-shrink: ${e.flexShrink};
    min-height: ${r?"unset":null};
  `}(a,e,t)}render(){var e,t;const{layoutId:o,layoutItem:i,onClick:a}=this.props;if(!i||i.isPending)return null;const l=i.setting||{},r=null!==(t=null===(e=l.autoProps)||void 0===e?void 0:e.height)&&void 0!==t?t:S.Custom,s=(0,n.classNames)("flexbox-layout-item",{"d-flex":r!==S.Auto}),d=this.isStretchInCrossAxis(),u=Be(l),c=be(l.aspectRatio),p=He(this.props);return(0,n.jsx)(Ot,Object.assign({css:this.getStyle(l,d),layoutId:o,layoutItemId:i.id,onClick:a,className:s,forceAspectRatio:u,aspectRatio:c,autoHeight:this.autoHeight},p))}}const zt={min:16,space:10},Bt=e=>n.css`
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
`;class Ft extends n.React.PureComponent{createItem(e,t,o){const{layout:i}=this.props;return(0,n.jsx)(Nt,{key:e,index:t,space:o.space,layoutId:i.id,layoutItemId:e,layoutItem:i.content[e]})}render(){const{layout:e,className:t}=this.props,o=e.order||(0,n.Immutable)([]),i=Object.assign({},zt,e.setting),a=(0,n.classNames)("layout column-layout d-flex w-100",t);return(0,n.jsx)("div",{className:a,style:{position:"relative",overflow:"hidden"},"data-layoutid":e.id},(0,n.jsx)(n.IntersectionContext.Provider,{value:{monitor:!0,layoutId:e.id}},(0,n.jsx)(n.OneByOneAnimation,{oid:e.id,className:"trail-container d-flex flex-column w-100",css:n.css`
              ${Bt(i)};
              padding: ${y.styleUtils.toCSSPadding(i.padding)};
            `},o.asMutable().map(((e,t)=>this.createItem(e,t,i))))))}}const Ht=n.ReactRedux.connect(pe)(Ft),Wt=n.css`
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
`;const Vt={space:10,style:{padding:{number:[10,10,10,10],unit:y.DistanceUnits.PIXEL}}},Dt={heightMode:"fixed",aspectRatio:1,offsetX:0,offsetY:0,style:{alignSelf:"flex-start"}};class Gt extends n.React.PureComponent{getStyle(e){const{gutter:t,layoutItem:o,isMultiRow:i}=this.props,a=o.bbox,l=we()?-1:1,r=function(e,t,o){var n,i,a,l,r,s,d,u,c,p,g,v,y,h;return o?{height:(null===(n=e.autoProps)||void 0===n?void 0:n.height)===S.Auto?"auto":t.height,alignSelf:null!==(a=null===(i=e.style)||void 0===i?void 0:i.alignSelf)&&void 0!==a?a:"flex-start"}:"ratio"===e.heightMode?{alignSelf:null!==(r=null===(l=e.style)||void 0===l?void 0:l.alignSelf)&&void 0!==r?r:"flex-start"}:(null===(s=e.autoProps)||void 0===s?void 0:s.height)===S.Auto?{height:"auto",alignSelf:null!==(u=null===(d=e.style)||void 0===d?void 0:d.alignSelf)&&void 0!==u?u:"flex-start"}:(null===(c=e.autoProps)||void 0===c?void 0:c.height)===S.Custom?{height:t.height,alignSelf:null!==(g=null===(p=e.style)||void 0===p?void 0:p.alignSelf)&&void 0!==g?g:"flex-start"}:(null===(v=e.autoProps)||void 0===v?void 0:v.height)===S.Stretch||"fit"===e.heightMode?{alignSelf:"stretch"}:parseFloat(t.height)>0?{height:t.height,alignSelf:null!==(h=null===(y=e.style)||void 0===y?void 0:y.alignSelf)&&void 0!==h?h:"flex-start"}:{alignSelf:"stretch"}}(e,a,i);return function(e,t,o,i,a){var l,r,s,d;return e?[n.css`
        padding: ${o/2}px 0;
        height: ${de(i,"height")};
        align-self: ${i.alignSelf};
      `,0!==a.offsetX||0!==a.offsetY?`translate(${(null!==(l=a.offsetX)&&void 0!==l?l:0)*t}px, ${null!==(r=a.offsetY)&&void 0!==r?r:0}px)`:null]:[n.css`
      padding: 0 ${o/2}px;
      height: ${de(i,"height")};
      align-self: ${i.alignSelf};
    `,0!==a.offsetX||0!==a.offsetY?`translate(${(null!==(s=a.offsetX)&&void 0!==s?s:0)*t}px, ${null!==(d=a.offsetY)&&void 0!==d?d:0}px)`:null]}(i,l,t,r,e)}render(){var e;const{span:t,offset:o,layoutId:i,layoutItem:a}=this.props;if(null==a||a.isPending)return null;const l=n.lodash.assign({},Dt,a.setting),r=(0,n.classNames)("row-layout-item",`col-${t}`,`offset-${o}`),s=null===(e=l.autoProps)||void 0===e?void 0:e.height,d=be(l.aspectRatio),u=He(this.props),[c,p]=this.getStyle(l);return(0,n.jsx)(Ot,Object.assign({css:c,style:{transform:p},className:r,layoutId:i,layoutItemId:a.id,forceAspectRatio:Be(l),aspectRatio:d,onClick:this.props.onClick,autoHeight:s===S.Auto},u))}}const Ut=12;class _t extends n.React.PureComponent{constructor(e){super(e),this.flipLeftRight=we()}collectBounds(){var e;const{transformedLayout:t}=this.props,o=null!==(e=t.order)&&void 0!==e?e:[];return this.childRects=[],o.forEach((e=>{var o,n;if(t.content[e].isPending)return;const i=null===(n=null===(o=t.content)||void 0===o?void 0:o[e])||void 0===n?void 0:n.bbox;null!=i&&this.childRects.push({layoutId:t.id,id:e,left:parseInt(i.left,10),width:parseInt(i.width,10),height:parseInt(i.height,10)})})),this.childRects.sort(((e,t)=>e.left-t.left))}getConfig(){var e;const{layout:t}=this.props;return null!==(e=t.setting)&&void 0!==e?e:Vt}createItem(e,t,o){var i;const{transformedLayout:a,isMultiRow:l}=this.props,r=this.getConfig(),s=e[t],d=t>0?e[t-1]:null,u=null!==(i=r.space)&&void 0!==i?i:0;let c,p=!0;if(l&&d&&(p=Math.floor(s.left/Ut)===Math.floor(d.left/Ut)),0===t)c=s.left;else if(p)d&&(c=s.left-d.left-d.width);else{const e=Math.floor(s.left/Ut);c=s.left-e*Ut}return(0,n.jsx)(Gt,{key:`${s.layoutId}_${s.id}`,offset:c,gutter:u,span:s.width,isMultiRow:l,layoutId:a.id,layoutItemId:s.id,layoutItem:a.content[s.id],alignItems:o.alignItems})}render(){var e,t;const{layout:o,className:i}=this.props;this.collectBounds();const a=this.childRects,l=this.getConfig(),r=null!==(e=l.style)&&void 0!==e?e:{},s=null!==(t=l.space)&&void 0!==t?t:0;return(0,n.jsx)(d.Consumer,null,(e=>(0,n.jsx)("div",{className:(0,n.classNames)("row-layout",i,{"row-rtl":this.flipLeftRight}),css:Wt,"data-layoutid":o.id},(0,n.jsx)("div",{css:n.css`
                  width: 100%;
                  max-width: ${e.maxWidth>0?`${e.maxWidth}px`:"none"};
                `},(0,n.jsx)("div",{css:n.css`
                    position: relative;
                    height: 100%;
                    margin-left: ${-s/2}px;
                    margin-right: ${-s/2}px;
                    display: flex;
                    flex-direction: column;
                  `},a.length>0&&(0,n.jsx)(n.IntersectionContext.Provider,{value:{monitor:!1}},(0,n.jsx)(n.OneByOneAnimation,{oid:o.id,className:(0,n.classNames)("row h-100 m-0",{"flex-nowrap":!this.props.isMultiRow}),css:n.css`
                          position: relative;
                          height: 100%;
                          overflow: ${this.props.isMultiRow?"auto":"unset"};
                        `},a.map(((e,t)=>this.createItem(a,t,r))))))))))}}class Xt extends n.React.PureComponent{constructor(e){super(e),this.layoutConRef=n.React.createRef(),this.onResize=({width:e,height:t})=>{var o;if(this.props.browserSizeMode!==this.props.mainSizeMode)return;if(0===e&&0===t)return;const{widgetId:n}=this.props;null!=(null===(o=window.runtimeInfo.widgets)||void 0===o?void 0:o[n])?window.runtimeInfo.widgets[n].height=t:window.runtimeInfo.widgets[n]={height:t}},this.handleDebounceResize=n.lodash.debounce(this.onResize,200)}findExtension(){const e=n.ExtensionManager.getInstance().getExtensions(`${n.extensionSpec.ExtensionPoints.LayoutTransformer}`);if((null==e?void 0:e.length)>0){const t=e.find((e=>e.layoutType===n.LayoutType.RowLayout));this.layoutTransform=null==t?void 0:t.transformLayout}}collectRowItems(){var e;const t=null!==(e=this.finalLayout.order)&&void 0!==e?e:[],o=[];let n=[],i=0;return o.push(n),t.forEach((e=>{if(this.finalLayout.content[e].isPending)return;const t=this.finalLayout.content[e].bbox,a=parseInt(t.left,10),l=Math.floor(a/Ut);l>i&&(n=[],i=l,o.push(n)),n.push(e)})),o}transform(){const{layout:e,layouts:t,browserSizeMode:o,mainSizeMode:n}=this.props;null==this.layoutTransform&&this.findExtension();let i=e;t[o]!==e.id&&null!=this.layoutTransform&&(i=this.layoutTransform(e,n,o,Te())),this.finalLayout=i,this.numOfRows=this.collectRowItems().length}createRow(){const{layout:e,layouts:t}=this.props;return(0,n.jsx)(_t,{layouts:t,layout:e,transformedLayout:this.finalLayout,isMultiRow:this.finalLayout!==e||this.numOfRows>1})}render(){var e,t;const{layout:o,className:i}=this.props,a=null!==(t=(null!==(e=o.setting)&&void 0!==e?e:Vt).style)&&void 0!==t?t:Vt.style;return this.transform(),(0,n.jsx)("div",{className:(0,n.classNames)("layout d-flex",i),css:n.css`
          width: 100%;
          padding: ${y.styleUtils.toCSSPadding(a.padding)};
        `,"data-layoutid":o.id,ref:this.layoutConRef},this.createRow(),(0,n.jsx)(n.ReactResizeDetector,{handleHeight:!0,onResize:this.handleDebounceResize,targetRef:this.layoutConRef}))}}const Jt=n.ReactRedux.connect(pe)(Xt);var Yt=l(462),qt=l.n(Yt),Kt=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o};const Zt=e=>{const t=window.SVG,{className:o}=e,i=Kt(e,["className"]),a=(0,n.classNames)("jimu-icon jimu-icon-component",o);return t?n.React.createElement(t,Object.assign({className:a,src:qt()},i)):n.React.createElement("svg",Object.assign({className:a},i))};var Qt=l(2838),eo=l.n(Qt),to=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o};const oo=e=>{const t=window.SVG,{className:o}=e,i=to(e,["className"]),a=(0,n.classNames)("jimu-icon jimu-icon-component",o);return t?n.React.createElement(t,Object.assign({className:a,src:eo()},i)):n.React.createElement("svg",Object.assign({className:a},i))};function no(e,t){var o;return null===(o=e.content)||void 0===o?void 0:o[t]}function io(e){var t;const o=y.styleUtils.toCSSPadding(null===(t=null==e?void 0:e.style)||void 0===t?void 0:t.padding);if(o){if(e.paddingColor){const t=o.split(" "),i=e.paddingColor;let a="";const l=window.jimuUA.browser.name.toLowerCase();return"firefox"===l?a="-moz-":"safari"!==l&&"chrome"!==l||(a="-webkit-"),n.css`
        padding: ${o};
        background-image:
        ${a}linear-gradient(270deg, ${i} ${t[0]}, transparent ${t[0]}),
        ${a}linear-gradient(180deg, ${i} ${t[1]}, transparent ${t[1]}),
        ${a}linear-gradient(90deg, ${i} ${t[2]}, transparent ${t[2]}),
        ${a}linear-gradient(0deg, ${i} ${t[3]}, transparent ${t[3]});
      `}return n.css`
      padding: ${o};
    `}}const ao=n.css`
  & > .max-grid-item-btn {
    display: none;
    background: var(--ref-palette-neutral-500);
    width: 26px;
    height: 26px;
    position: absolute;
    top: 0;
    right: 0;
  }

  &:hover > .max-grid-item-btn {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`,lo=n.css`
  position: absolute;
  left: 0;
  top: 0;
  width: 100% !important;
  height: 100% !important;
  z-index: 30;
  background: var(--ref-palette-neutral-200);
`;function ro(e){const[t,o]=n.React.useState(!1),i=n.ReactRedux.useSelector((t=>function(e,t,o){var n,i;const a=e.appConfig.layouts[t],l=a.content[o];if(null!==(n=null==l?void 0:l.expandable)&&void 0!==n&&!n)return!1;const r=null===(i=null==a?void 0:a.setting)||void 0===i?void 0:i.rootItem;let s=!1;if(r===o){const e=no(a,r);null!=e.children&&0!==e.children.length||(s=!0)}return!s}(t,e.layoutId,e.layoutItemId))),a=n.React.useCallback((()=>{o(!t)}),[t]);return(0,n.jsx)(Ot,Object.assign({},e,{css:n.css`${ao};${t?lo:""}`}),i&&(0,n.jsx)(y.Button,{icon:!0,type:"tertiary",className:"max-grid-item-btn p-0",onClick:a},t&&(0,n.jsx)(oo,null),!t&&(0,n.jsx)(Zt,null)))}const so=32;function uo(e,t,o,n,i,a){let l=n,r=i;if("row"===o){const o=a?t.width:e.width,i=a?e.width:t.width;n<0&&(l=o>so?-Math.min(Math.abs(n),o-so):0),n>0&&(l=i>so?Math.min(n,i-so):0)}else i<0&&(r=e.height>so?-Math.min(Math.abs(i),e.height-so):0),i>0&&(r=t.height>so?Math.min(i,t.height-so):0);return{x:l,y:r}}function co(e){const t=e.getAttribute("data-layoutid"),o=e.getAttribute("data-layoutitemid");return+(0,n.getAppStore)().getState().appConfig.layouts[t].content[o].bbox.width}function po(e){var t,o;const{referenceItemId:i,direction:a,layoutId:l,onResizeEnd:r}=e,s=n.React.useRef(),d=n.React.useRef(),u=n.React.useRef(null),c=null!==(o=null===(t=(0,n.getAppStore)().getState().appContext)||void 0===t?void 0:t.isRTL)&&void 0!==o&&o,p=n.ReactRedux.useSelector((e=>e.appRuntimeInfo.appMode===n.AppMode.Design)),g=n.ReactRedux.useSelector((t=>{var o,n;return null===(n=null===(o=t.appConfig.layouts[e.layoutId].setting)||void 0===o?void 0:o.resizable)||void 0===n||n})),v=n.ReactRedux.useSelector((e=>{var t,o;return null!==(o=null===(t=e.appConfig.layouts[l].setting)||void 0===t?void 0:t.splitSize)&&void 0!==o?o:8})),y=n.ReactRedux.useSelector((e=>{var t,o;return null!==(o=null===(t=e.appConfig.layouts[l].setting)||void 0===t?void 0:t.splitColor)&&void 0!==o?o:"var(--ref-palette-neutral-500)"})),h=n.React.useMemo((()=>{const e=`${v}px`,t=!!p||g;return n.css`
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
    `}),[a,g,p,v,y]);return n.hooks.useEffectOnce((()=>{let e,t,o,l,v,y,h,f,m,I,x,w,b;return n.moduleLoader.loadModule("jimu-core/dnd").then((n=>{const S=n.interact;u.current=S,s.current&&(d.current=S(s.current).origin("parent").draggable({inertia:!1,autoScroll:!1,enabled:!!p||g,modifiers:[S.modifiers.restrict({restriction:"parent"})],lockAxis:"row"===a?"x":"y",onstart:n=>{n.stopPropagation(),e=0,t=0,o=s.current.parentElement.getBoundingClientRect(),l=s.current.previousElementSibling,v=l.getBoundingClientRect(),h=l.style.width,f=l.style.height,y=co(l),m=s.current.nextElementSibling,I=m.getBoundingClientRect(),w=m.style.width,b=m.style.height,x=co(m)},onmove:o=>{o.stopPropagation(),e+=o.dx,t+=o.dy;const{x:n,y:i}=uo(v,I,a,e,t,c),r=c?-1:1;"row"===a?(l.style.width=`calc(${y}% + ${n*r}px)`,m.style.width=`calc(${x}% - ${n*r}px)`):(l.style.height=`calc(${y}% + ${i}px)`,m.style.height=`calc(${x}% - ${i}px)`)},onend:n=>{n.stopPropagation(),e+=n.dx,t+=n.dy;const{x:s,y:d}=uo(v,I,a,e,t,c),u=c?-1:1;l.style.width=h,m.style.width=w,l.style.height=f,m.style.height=b,r(i,Math.round(s*u*1e4/o.width)/100,Math.round(1e4*d/o.height)/100)}}))})),()=>{var e;null===(e=d.current)||void 0===e||e.unset(),d.current=null}})),n.React.useEffect((()=>{null!=d.current&&u.current(s.current).draggable(!!p||g)}),[g,p]),(0,n.jsx)("div",{ref:s,css:h,className:"grid-split flex-shrink-0"},(0,n.jsx)("div",{className:(0,n.classNames)("handler",{"horizontal-splitter":"row"===a,"vertical-splitter":"col"===a})}))}function go(e){const{layout:t,layoutItemId:o,isLast:i,className:a}=e,l=n.React.useMemo((()=>no(t,o)),[t,o]),r=n.React.useMemo((()=>{if(l.parent){return no(t,l.parent).gridType}return null}),[t,l]),s=+l.bbox.width,d=n.React.useContext(n.AnimationContext),u=n.React.useMemo((()=>{var e,t;return(null===(t=null===(e=null==d?void 0:d.setting)||void 0===e?void 0:e.option)||void 0===t?void 0:t.parentMode)===n.ParentAnimationMode.AllAtOnce?0:250}),[d]),c=n.React.useCallback((()=>r===n.GridItemType.Row?n.css`
        height: 100%;
        width: ${s}%;
      `:r===n.GridItemType.Column?n.css`
        width: 100%;
        height: ${s}%;
      `:n.css`
      width: 100%;
      height: 100%;
    `),[s,r]);if(l.gridType===n.GridItemType.Row)return(0,n.jsx)(vo,{className:a,css:c(),layout:t,layoutItemId:o,items:l.children});if(l.gridType===n.GridItemType.Column)return(0,n.jsx)(yo,{className:a,css:c(),layout:t,layoutItemId:o,items:l.children});if(l.gridType===n.GridItemType.Tab)return(0,n.jsx)(ho,{className:a,css:c(),layout:t,layoutItemId:o,items:l.children});const p=function(e,t){var o,i;let a=0;const l=no(e,e.setting.rootItem);if(l&&(null===(o=l.children)||void 0===o?void 0:o.length)>0){const o=[...l.children];for(;o.length>0;){const l=o.shift(),r=no(e,l),s=no(e,r.parent);if(`${r.id}`===t||s.gridType===n.GridItemType.Tab&&s.children.includes(t))return a;(null===(i=r.children)||void 0===i?void 0:i.length)>0?o.unshift(...r.children):(s.gridType!==n.GridItemType.Tab||s.gridType===n.GridItemType.Tab&&0===s.children.indexOf(l))&&(a+=1)}}return a}(t,o),g=function(e,t){var o;let n=no(e,t);if((null===(o=null==n?void 0:n.children)||void 0===o?void 0:o.length)>0)return!1;for(;null!=n;){const t=n.parent;if(null==t)break;const o=no(e,t),i=o.children.length;if(+o.children[i-1]!=+n.id)return!1;n=o}return!0}(t,o);return(0,n.jsx)(ro,{css:c(),className:(0,n.classNames)(`d-flex ${a}`,{"is-last":i}),layoutId:t.id,layoutItemId:o,delay:p*u,isLastChild:g})}function vo(e){const{layout:t,layoutItemId:o,items:i,className:a}=e,l=n.React.useRef();n.hooks.useEffectOnce((()=>{n.moduleLoader.loadModule("jimu-for-builder").then((e=>{l.current=e.getAppConfigAction}))}));const r=n.hooks.useEventCallback(((e,o)=>{const n=l.current(),a=i.indexOf(e),r=i[a+1],s=t.content[e],d=t.content[r];n.editLayoutItemProperty({layoutId:t.id,layoutItemId:e},"bbox",{width:+s.bbox.width+o}).editLayoutItemProperty({layoutId:t.id,layoutItemId:r},"bbox",{width:+d.bbox.width-o}).exec()}));return(0,n.jsx)("div",{className:`d-flex ${a}`,css:n.css`
        .is-last {
          width: auto;
          flex-grow: 1;
          flex-shrink: 1;
          flex-basis: 0;
        }
      `,"data-layoutid":t.id,"data-layoutitemid":o},i.map(((e,o)=>{return a=e,l=o===i.length-1,(0,n.jsx)(n.React.Fragment,{key:a},(0,n.jsx)(go,{key:a,layout:t,layoutItemId:a}),!l&&(0,n.jsx)(po,{referenceItemId:a,layoutId:t.id,direction:"row",onResizeEnd:r}));var a,l})))}function yo(e){const{layout:t,layoutItemId:o,items:i,className:a}=e,l=n.React.useRef();n.hooks.useEffectOnce((()=>{n.moduleLoader.loadModule("jimu-for-builder").then((e=>{l.current=e.getAppConfigAction}))}));const r=n.hooks.useEventCallback(((e,o,n)=>{const a=l.current(),r=i.indexOf(e),s=i[r+1],d=t.content[e],u=t.content[s];a.editLayoutItemProperty({layoutId:t.id,layoutItemId:e},"bbox",{width:+d.bbox.width+n}).editLayoutItemProperty({layoutId:t.id,layoutItemId:s},"bbox",{width:+u.bbox.width-n}).exec()}));return(0,n.jsx)("div",{className:`d-flex flex-column ${a}`,css:n.css`
        .is-last {
          height: auto;
          flex-grow: 1;
          flex-shrink: 1;
          flex-basis: 0;
        }
      `,"data-layoutid":t.id,"data-layoutitemid":o},i.map(((e,o)=>{return a=e,l=o===i.length-1,(0,n.jsx)(n.React.Fragment,{key:a},(0,n.jsx)(go,{key:a,layout:t,layoutItemId:a}),!l&&(0,n.jsx)(po,{referenceItemId:a,layoutId:t.id,direction:"col",onResizeEnd:r}));var a,l})))}function ho(e){const{layout:t,layoutItemId:o,items:i,className:a}=e,l=n.hooks.useTranslation(y.defaultMessages),r=e=>function(e,t,o){var i,a,l,r,s,d,u;const{layoutId:c,layoutItemId:p}=t,g=e.layouts[c].content[p];if((null==g?void 0:g.type)===n.LayoutItemType.Widget){const t=e.widgets[g.widgetId];return t?null!==(a=null!==(i=null==t?void 0:t.label)&&void 0!==i?i:g.label)&&void 0!==a?a:g.id:o("placeholder")}if((null==g?void 0:g.type)===n.LayoutItemType.Section)return e.sections[g.sectionId].label;return(null==g?void 0:g.gridType)===n.GridItemType.Row?null!==(l=g.label)&&void 0!==l?l:o("gridRow"):(null==g?void 0:g.gridType)===n.GridItemType.Column?null!==(r=g.label)&&void 0!==r?r:o("gridCol"):(null==g?void 0:g.gridType)===n.GridItemType.Tab?null!==(s=g.label)&&void 0!==s?s:o("tabs"):null!==(u=null!==(d=null==g?void 0:g.label)&&void 0!==d?d:null==g?void 0:g.id)&&void 0!==u?u:""}((0,n.getAppStore)().getState().appConfig,{layoutId:t.id,layoutItemId:e},l);return(0,n.jsx)("div",{className:a,"data-layoutid":t.id,"data-layoutitemid":o},(0,n.jsx)(y.Tabs,{type:"tabs",fill:!0,scrollable:!0,className:"w-100 h-100",css:n.css`
          & > .tab-content {
            overflow: hidden;
          }
        `},[...i].map(((e,o)=>((e,o)=>(0,n.jsx)(y.Tab,{key:o,id:`${o}`,title:r(e)},(0,n.jsx)(go,{layout:t,layoutItemId:e})))(e,o)))))}class fo extends n.React.PureComponent{findExtension(){const e=n.ExtensionManager.getInstance().getExtensions(`${n.extensionSpec.ExtensionPoints.LayoutTransformer}`);if((null==e?void 0:e.length)>0){const t=e.find((e=>e.layoutType===n.LayoutType.GridLayout));this.layoutTransform=null==t?void 0:t.transformLayout}}render(){var e,t;const{layouts:o,layout:i,browserSizeMode:a,mainSizeMode:l,className:r}=this.props;let s=i;o[a]!==i.id&&(null==this.layoutTransform&&this.findExtension(),null!=this.layoutTransform&&(s=this.layoutTransform(i,l,a)));const{rootItem:d}=null!==(e=s.setting)&&void 0!==e?e:{},u=null===(t=s.content)||void 0===t?void 0:t[d],c=(0,n.classNames)("layout grid-layout d-flex w-100 h-100",r);return(0,n.jsx)("div",{className:c,css:n.css`overflow: hidden;${io(s.setting)}`,"data-layoutid":s.id},(0,n.jsx)(n.IntersectionContext.Provider,{value:{monitor:!1}},(0,n.jsx)(n.OneByOneAnimation,{oid:s.id,"data-layoutid":s.id,className:"trail-container d-flex w-100 h-100",css:n.css`
              width: 100%;
            `},u?(0,n.jsx)(go,{className:"w-100 h-100",layout:s,layoutItemId:d}):this.props.children)))}}const mo=n.ReactRedux.connect(pe)(fo);var Io=l(8736),xo=l.n(Io);function wo(e){var t,o;const{layoutId:i,layoutItemId:a}=e,l=n.ReactRedux.useSelector((e=>{var t,o;const l=e.appConfig.layouts[i].content[a];if(!l)return"";if(l.type===n.LayoutItemType.Widget){const o=l.widgetId,n=e.appConfig.widgets[o];return null!==(t=null==n?void 0:n.label)&&void 0!==t?t:""}const r=l.sectionId,s=e.appConfig.sections[r];return null!==(o=null==s?void 0:s.label)&&void 0!==o?o:""})),r=n.ReactRedux.useSelector((e=>{var t,o,l,r;const s=e.appConfig.layouts[i].content[a];if(!s)return"";if(s.type===n.LayoutItemType.Widget){const n=s.widgetId,i=e.appConfig.widgets[n];return"string"==typeof(null==i?void 0:i.icon)?i.icon:null!==(o=null===(t=null==i?void 0:i.icon)||void 0===t?void 0:t.svg)&&void 0!==o?o:""}const d=s.sectionId,u=e.appConfig.sections[d];return"string"==typeof(null==u?void 0:u.icon)?u.icon:null!==(r=null===(l=null==u?void 0:u.icon)||void 0===l?void 0:l.svg)&&void 0!==r?r:xo()})),s=n.ReactRedux.useSelector((e=>{var t,o;const n=e.appConfig.layouts[i].parent.id;return null===(o=null===(t=e.appConfig.widgets[n].config)||void 0===t?void 0:t.header)||void 0===o?void 0:o.showWidgetIcon})),d=n.ReactRedux.useSelector((e=>{var t,o;const n=e.appConfig.layouts[i].parent.id;return null===(o=null===(t=e.appConfig.widgets[n].config)||void 0===t?void 0:t.header)||void 0===o?void 0:o.widgetIconSize})),u=n.ReactRedux.useSelector((e=>{var t,o;const n=e.appConfig.layouts[i].parent.id;return null===(o=null===(t=e.appConfig.widgets[n].config)||void 0===t?void 0:t.header)||void 0===o?void 0:o.widgetIconColor})),c=n.ReactRedux.useSelector((e=>{var t,o;const n=e.appConfig.layouts[i].parent.id;return null===(o=null===(t=e.appConfig.widgets[n].config)||void 0===t?void 0:t.header)||void 0===o?void 0:o.textStyle}));return(0,n.jsx)("div",{className:"label d-flex align-items-center h-100"},(0,n.jsx)(n.React.Fragment,null,s&&(0,n.jsx)(y.Icon,{icon:r,size:null!=d?d:16,color:u}),(0,n.jsx)("div",{className:"ml-2 text-truncate",css:n.css`
            font-size: ${null!==(t=null==c?void 0:c.size)&&void 0!==t?t:"1rem"};
            font-weight: ${(null==c?void 0:c.bold)?"bold":"normal"};
            font-style: ${(null==c?void 0:c.italic)?"italic":"normal"};
            text-decoration: ${(null==c?void 0:c.underline)?"underline":""} ${(null==c?void 0:c.strike)?"line-through":""};
            color: ${null!==(o=null==c?void 0:c.color)&&void 0!==o?o:"inherit"};
          `},l)))}const bo=(e,t,o,i)=>{const a=null!=o?o:{},l=null!=i?i:{},{padding:r,expandedColor:s,collapsedColor:d,border:u,borderLeft:c,borderRight:p,borderTop:g,borderBottom:v,borderRadius:h}=a,{padding:f,border:m,borderRadius:I,backgroundColor:x}=l;return n.css`
  position: relative;
  touch-action: none;
  & + .foldable-panel {
    margin-top: ${t}px;
  }
  .panel-header {
    padding: ${y.styleUtils.toCSSPadding(r)};
    border: ${y.styleUtils.toCSSBorder(u)};
    border-left: ${y.styleUtils.toCSSBorder(c)};
    border-right: ${y.styleUtils.toCSSBorder(p)};
    border-top: ${y.styleUtils.toCSSBorder(g)};
    border-bottom: ${y.styleUtils.toCSSBorder(v)};
    border-radius: ${y.styleUtils.toCSSBorderRadius(h)};
    background-color: ${null!=s?s:"var(--sys-color-primary-main)"};
    .tool-drag-handler {
      cursor: pointer;
      flex-grow: 1;
      flex-shrink: 1;
    }
  }
  .panel-content {
    padding: ${y.styleUtils.toCSSPadding(f)};
    border: ${y.styleUtils.toCSSBorder(m)};
    border-left: ${y.styleUtils.toCSSBorder(l.borderLeft)};
    border-right: ${y.styleUtils.toCSSBorder(l.borderRight)};
    border-top: ${y.styleUtils.toCSSBorder(l.borderTop)};
    border-bottom: ${y.styleUtils.toCSSBorder(l.borderBottom)};
    border-radius: ${y.styleUtils.toCSSBorderRadius(I)};
    overflow: auto;
    background-color: ${null!=x?x:"none"};
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
      padding: unset;
      border: none;
      visibility: hidden;
      .layout-item {
        display: none;
      }
    }
  }
  `};function So(e){var t,o,i,a,l,r,s,d,u,c,p;const{layoutId:g,layoutItemId:v,expanded:h,height:f,gap:m,onExpandedChange:I}=e,x=n.hooks.useTranslation(),w=n.ReactRedux.useSelector((e=>C(e.appConfig,{layoutId:g,layoutItemId:v}))),b=n.ReactRedux.useSelector((e=>{var t,o;if(w.type===n.LayoutItemType.Widget){const o=w.widgetId,n=e.appConfig.widgets[o];return null!==(t=null==n?void 0:n.label)&&void 0!==t?t:""}const i=w.sectionId,a=e.appConfig.sections[i];return null!==(o=null==a?void 0:a.label)&&void 0!==o?o:""})),S=n.ReactRedux.useSelector((e=>{var t;const o=e.appConfig.layouts[g].parent.id;return null===(t=e.appConfig.widgets[o].config)||void 0===t?void 0:t.header})),T=n.ReactRedux.useSelector((e=>{var t;const o=e.appConfig.layouts[g].parent.id;return null===(t=e.appConfig.widgets[o].config)||void 0===t?void 0:t.panel})),R=n.ReactRedux.useSelector((e=>w.type===n.LayoutItemType.Widget&&he(w.widgetId,e.appConfig))),j=null!==(t=null==S?void 0:S.togglePosition)&&void 0!==t?t:"right",M=n.React.useCallback((()=>{I(v,!h)}),[v,h,I]),P=h?null===(o=null==S?void 0:S.collapseIcon)||void 0===o?void 0:o.svg:null===(i=null==S?void 0:S.expandIcon)||void 0===i?void 0:i.svg;return(0,n.jsx)("div",{className:(0,n.classNames)("layout-item foldable-panel",{collapsed:!h,"functional-widget":R}),"data-layoutid":g,"data-layoutitemid":v,css:bo(f,m,S,T)},(0,n.jsx)("div",{className:"panel d-flex flex-column"},(0,n.jsx)("div",{className:(0,n.classNames)("panel-header d-flex align-items-center",{"flex-row-reverse":"left"===j}),onClick:M,onKeyDown:null,role:"group","aria-label":b},(0,n.jsx)("div",{className:"tool-drag-handler"},g&&v&&(0,n.jsx)(wo,{layoutId:g,layoutItemId:v})),P&&(0,n.jsx)("div",{className:(0,n.classNames)("actions",{"ml-auto":"right"===j})},(0,n.jsx)(y.Button,{icon:!0,type:"tertiary",size:"sm","aria-expanded":h,title:x(h?"clickToHide":"clickToShow"),"aria-label":x(h?"clickToHide":"clickToShow")},(0,n.jsx)(y.Icon,{icon:P,size:h?null===(l=null===(a=null==S?void 0:S.collapseIcon)||void 0===a?void 0:a.properties)||void 0===l?void 0:l.size:null===(s=null===(r=null==S?void 0:S.expandIcon)||void 0===r?void 0:r.properties)||void 0===s?void 0:s.size,color:h?null===(u=null===(d=null==S?void 0:S.collapseIcon)||void 0===d?void 0:d.properties)||void 0===u?void 0:u.color:null===(p=null===(c=null==S?void 0:S.expandIcon)||void 0===c?void 0:c.properties)||void 0===p?void 0:p.color})))),(0,n.jsx)("div",{className:(0,n.classNames)("panel-content d-flex flex-grow-1 flex-shrink-1")},e.children)))}function Co(e){var t,o,i,a;const{layoutId:l,layoutItem:r,layoutItemId:s,expanded:d,gap:u,onExpandedChange:c}=e,p=(null==r?void 0:r.type)===n.LayoutItemType.Widget,g=(null==r?void 0:r.type)===n.LayoutItemType.Section,v=n.ReactRedux.useSelector((t=>ve(t,e)),n.ReactRedux.shallowEqual),y=n.ReactRedux.useSelector((e=>{if(g)return Ge(e,r.sectionId)}),n.ReactRedux.shallowEqual);let h;h=(null===(o=null===(t=r.setting)||void 0===t?void 0:t.autoProps)||void 0===o?void 0:o.height)===S.Auto?"auto":r.bbox.height;const f=Be(null!==(i=r.setting)&&void 0!==i?i:{}),m=be(null===(a=r.setting)||void 0===a?void 0:a.aspectRatio);return(0,n.jsx)(So,{layoutId:l,layoutItemId:s,height:h,expanded:d,gap:u,onExpandedChange:c},p&&(0,n.jsx)(et,Object.assign({layoutId:l,layoutItemId:s,forceAspectRatio:f,aspectRatio:m},v)),g&&(0,n.jsx)(Rt,Object.assign({layoutId:l,layoutItemId:s},y)))}var To=l(8416),Ro=l.n(To),jo=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o};const Mo=e=>{const t=window.SVG,{className:o}=e,i=jo(e,["className"]),a=(0,n.classNames)("jimu-icon jimu-icon-component",o);return t?n.React.createElement(t,Object.assign({className:a,src:Ro()},i)):n.React.createElement("svg",Object.assign({className:a},i))};var Po=l(5741),Lo=l.n(Po),$o=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o};const Oo=e=>{const t=window.SVG,{className:o}=e,i=$o(e,["className"]),a=(0,n.classNames)("jimu-icon jimu-icon-component",o);return t?n.React.createElement(t,Object.assign({className:a,src:Lo()},i)):n.React.createElement("svg",Object.assign({className:a},i))},ko=n.css`
  // position: sticky;
  // top: 0;
  margin-bottom: 4px;
  z-index: 1;
`;function Ao(e){const{onExpandAll:t,onCollapseAll:o}=e,i=n.hooks.useTranslation();return(0,n.jsx)("div",{css:ko,className:"d-flex align-items-center justify-content-end"},(0,n.jsx)(y.Tooltip,{title:i("expandAll")},(0,n.jsx)(y.Button,{type:"tertiary",icon:!0,size:"sm",onClick:t},(0,n.jsx)(Oo,null))),(0,n.jsx)(y.Tooltip,{title:i("collapseAll")},(0,n.jsx)(y.Button,{type:"tertiary",icon:!0,size:"sm",onClick:o,className:"ml-1"},(0,n.jsx)(Mo,null))))}function Eo(e,t){const o=e[t.browserSizeMode]||e[t.appConfig.mainSizeMode],n=t.appConfig.layouts[o].parent.id;return t.appConfig.widgets[n]}function No(e,t,o){const i=(0,n.getAppStore)(),a=i.getState().appConfig.layouts[e],l=o.filter((e=>!t.includes(e))),r=t.filter((e=>!o.includes(e))),s=a.order?a.order.filter((e=>!o.includes(e))):[],d=l.map((t=>({layoutId:e,layoutItemId:t}))),u=r.map((t=>({layoutId:e,layoutItemId:t})));d.length>0&&i.dispatch(n.appActions.showWidgetsInLayoutItems(d)),u.length>0&&i.dispatch(n.appActions.hideWidgetsInLayoutItems(u)),i.dispatch(n.appActions.widgetStatePropChange(a.parent.id,"hiddenLayoutItems",[{[e]:s}]))}class zo extends n.React.PureComponent{constructor(e){var t;super(e),this.handleExpandedChange=(e,t)=>{if(t)this.props.singleMode?(this.setState({expandedItems:[e]}),No(this.props.layout.id,this.state.expandedItems,[e])):this.state.expandedItems.includes(e)||(this.setState({expandedItems:[...this.state.expandedItems,e]}),No(this.props.layout.id,this.state.expandedItems,[...this.state.expandedItems,e]));else if(this.state.expandedItems.includes(e)){const t=this.state.expandedItems.filter((t=>t!==e));this.setState({expandedItems:t}),No(this.props.layout.id,this.state.expandedItems,t)}},this.expandAll=()=>{const{layout:e}=this.props;this.setState({expandedItems:[...e.order]}),No(this.props.layout.id,this.state.expandedItems,[...e.order])},this.collapseAll=()=>{this.setState({expandedItems:[]}),No(this.props.layout.id,this.state.expandedItems,[])};const o=this.props.expandByDefault.length>0?this.props.expandByDefault.split(","):[];this.state={expandedItems:o},No(e.layout.id,[...null!==(t=this.props.layout.order)&&void 0!==t?t:[]],o)}createItem(e){const{layout:t,gap:o}=this.props;return t.content[e].isPending?null:(0,n.jsx)(Co,{key:e,layoutId:t.id,layoutItemId:e,expanded:this.state.expandedItems.includes(e),gap:o,layoutItem:t.content[e],onExpandedChange:this.handleExpandedChange})}render(){var e;const{layout:t,className:o,showToggleAll:i,padding:a}=this.props,l=null!==(e=t.order)&&void 0!==e?e:[];return(0,n.jsx)("div",{className:(0,n.classNames)("layout foldable-layout w-100 d-flex flex-column",o),css:n.css`position: relative; overflow: auto; padding: ${y.styleUtils.toCSSPadding(a)}`,"data-layoutid":t.id},i&&(0,n.jsx)(Ao,{onExpandAll:this.expandAll,onCollapseAll:this.collapseAll}),l.map((e=>this.createItem(e))))}}const Bo=(0,n.createSelector)([(e,t)=>pe(e,t),(e,t)=>{var o,n;return null!==(n=null===(o=Eo(t.layouts,e).config)||void 0===o?void 0:o.singleMode)&&void 0!==n&&n},(e,t)=>{var o,n;return null!==(n=null===(o=Eo(t.layouts,e).config)||void 0===o?void 0:o.showToggleAll)&&void 0!==n&&n},(e,t)=>{var o,n;return null!==(n=null===(o=Eo(t.layouts,e).config)||void 0===o?void 0:o.gap)&&void 0!==n?n:4},(e,t)=>{var o;return null===(o=Eo(t.layouts,e).config)||void 0===o?void 0:o.padding},(e,t)=>{var o,n,i;const a=t.layouts[e.browserSizeMode]||t.layouts[e.appConfig.mainSizeMode],l=e.appConfig.layouts[a],r=null!==(n=null===(o=Eo(t.layouts,e).config)||void 0===o?void 0:o.expandedItems)&&void 0!==n?n:[],s=[];return r.length>0&&Object.keys(null!==(i=l.content)&&void 0!==i?i:{}).forEach((e=>{const t=l.content[e];r.includes(t.widgetId)&&s.push(e)})),s.join(",")}],((e,t,o,n,i,a)=>Object.assign({singleMode:t,showToggleAll:o,gap:n,padding:i,expandByDefault:a},e))),Fo=n.ReactRedux.connect(Bo)(zo),Ho={min:16,space:10};class Wo extends n.React.PureComponent{isStretchInCrossAxis(){const{layoutItem:e}=this.props;return function(e){var t,o,n;return(null!==(n=null===(o=null===(t=e.setting)||void 0===t?void 0:t.autoProps)||void 0===o?void 0:o.height)&&void 0!==n?n:S.Stretch)===S.Stretch}(e)}calWidth(e,t){return function(e,t){var o,n;return(null===(o=e.autoProps)||void 0===o?void 0:o.width)===S.Auto||"ratio"===e.widthMode?"ratio"===e.widthMode?{width:"auto",flex:"0 0 auto"}:{width:"auto"}:(null===(n=e.autoProps)||void 0===n?void 0:n.width)===S.Stretch||"fit"===e.widthMode?{flex:"1 1 auto"}:{width:t.width,flexShrink:0}}(e,t)}getStyle(e,t,o,i){const{layoutItem:a}=this.props,l=a.bbox||{},r=this.calWidth(e,l);return r.height=t||o||i?"auto":l.height,function(e,t,o){var i,a,l;const r=(null===(i=t.autoProps)||void 0===i?void 0:i.width)===S.Auto;return n.css`
    align-self: ${o?"stretch":null!==(l=null===(a=t.style)||void 0===a?void 0:a.alignSelf)&&void 0!==l?l:"flex-start"};
    width: ${de(e,"width")};
    height: ${de(e,"height")};
    flex: ${e.flex};
    flex-shrink: ${e.flexShrink};
    min-width: ${r?"unset":null};
  `}(r,e,t)}render(){var e,t,o,i;const{layoutId:a,layoutItem:l}=this.props;if(!l||l.isPending)return null;const r=l.setting||{},s=null!==(t=null===(e=r.autoProps)||void 0===e?void 0:e.width)&&void 0!==t?t:S.Custom,d=(null===(o=r.autoProps)||void 0===o?void 0:o.height)===S.Auto,u=(null===(i=r.autoProps)||void 0===i?void 0:i.width)===S.Auto,c=(0,n.classNames)("flex-row-layout-item",{"d-flex":s!==S.Auto}),p=this.isStretchInCrossAxis(),g=Be(r),v=be(r.aspectRatio),y=He(this.props);return(0,n.jsx)(Ot,Object.assign({css:this.getStyle(r,p,g,d),layoutId:a,layoutItemId:l.id,className:c,forceAspectRatio:g,aspectRatio:v,autoWidth:u,autoHeight:d},y))}}const Vo=e=>n.css`
  height: 100%;
  overflow: hidden;
  justify-content: ${e.justifyContent};
  & > div.flex-row-layout-item ~ div.flex-row-layout-item {
    margin-left: ${e.space}px;
  }
`;class Do extends n.React.PureComponent{createItem(e,t){const{layout:o}=this.props;return(0,n.jsx)(Wo,{key:e,index:t,layoutId:o.id,layoutItemId:e,layoutItem:o.content[e]})}isEmpty(){var e;const{layout:t}=this.props,o=null!==(e=t.order)&&void 0!==e?e:[];return!(o.length>0&&o.some((e=>!t.content[e].isPending)))}render(){var e;const{layout:t,className:o}=this.props,i=null!==(e=t.order)&&void 0!==e?e:[],a=Object.assign({},Ho,t.setting),l=this.isEmpty(),r={position:"relative",minWidth:a.min},s=(0,n.classNames)("layout flex-row-layout",o);return(0,n.jsx)("div",{className:s,style:r,"data-layoutid":t.id},(0,n.jsx)(n.IntersectionContext.Provider,{value:{monitor:!0,layoutId:t.id}},(0,n.jsx)(n.OneByOneAnimation,{oid:t.id,className:"trail-container d-flex w-100",css:n.css`
              position: ${l?"absolute":null};
              padding: ${y.styleUtils.toCSSPadding(a.padding)};
              ${Vo(a)};
            `},i.map(((e,t)=>this.createItem(e,t))))))}}const Go=n.ReactRedux.connect(pe)(Do);class Uo{constructor(){this.id="flow-layout-transformer",this.layoutType=n.LayoutType.FlowLayout}transformLayout(e,t,o){if(t!==o&&o===n.BrowserSizeMode.Small){let t=(0,n.Immutable)(e);return(e.order||[]).forEach((e=>{t=t.setIn(["content",e,"setting","heightMode"],"auto")})),t}return e}transformLayoutItem(e,t,o,n,i,a){return{index:t,item:e}}}function _o(e,t,o){var n;const i=E(e,o),a=function(e,t,o){var n,i,a,l,r,s,d;const u=e.widgets[o];if(null!=u){const c=Re(),p=e.mainSizeMode,g=u.layouts.DEFAULT[c],v=u.layouts.DEFAULT[p],y=Se(null!==(r=null===(l=null===(a=null===(i=(null!==(n=e.layouts[g])&&void 0!==n?n:e.layouts[v]).setting)||void 0===i?void 0:i.style)||void 0===a?void 0:a.padding)||void 0===l?void 0:l.number)&&void 0!==r?r:[0]),h=null!==(d=null===(s=null==t?void 0:t[o])||void 0===s?void 0:s.height)&&void 0!==d?d:0;let f=y[0],m=y[2];return re(f)&&(f=ce(f,h)),re(m)&&(m=ce(m,h)),h-f-m}return 0}(e,t,i);if(a>0){const t=null!==(n=e.layouts[o].order)&&void 0!==n?n:[],i={};return t.forEach((t=>{const n=e.layouts[o].content[t];i[t]=Ce(a,n)})),i}return null}class Xo{constructor(){this.id="row-layout-transformer",this.layoutType=n.LayoutType.RowLayout}transformLayout(e,t,o,i){var a,l;if(t===o)return e;let r=(0,n.Immutable)(e);if(o===n.BrowserSizeMode.Small){const t=_o(i,null===(a=window.runtimeInfo)||void 0===a?void 0:a.widgets,e.id);let o=0;Object.keys(null!==(l=e.content)&&void 0!==l?l:{}).sort(((t,o)=>parseInt(e.content[t].bbox.left,10)-parseInt(e.content[o].bbox.left,10))).forEach((i=>{var a,l,s;const d=e.content[i];if(!d.isPending){if(r=r.setIn(["content",i,"bbox"],{left:o*Ut,width:Ut,height:null!==(l=null===(a=d.bbox)||void 0===a?void 0:a.height)&&void 0!==l?l:"auto"}),null!=t){const e=null!==(s=d.setting)&&void 0!==s?s:(0,n.Immutable)({});r=r.setIn(["content",i,"bbox","height"],t[i].height).setIn(["content",i,"setting"],e.merge(t[i].setting))}o+=1}}))}return r}transformLayoutItem(e,t,o,n,i,a){return{item:e,index:t}}}class Jo{constructor(){this.id="grid-layout-transformer",this.layoutType=n.LayoutType.GridLayout,this.transformLayout=(e,t,o)=>{var i,a,l;if(t!==o&&o===n.BrowserSizeMode.Small){let t=(0,n.Immutable)(e);const o=null===(i=e.setting)||void 0===i?void 0:i.rootItem,r=null===(a=e.setting)||void 0===a?void 0:a.mainItemId;if(o&&(null===(l=e.content)||void 0===l?void 0:l[o])){const i=[],a=e.content[o];if(r){let l;if(Object.keys(e.content).some((t=>{const o=e.content[t];return(o.widgetId===r||o.sectionId===r)&&(l=t,!0)})),l){if(t=this.collectItem(e,o,l,a.children,i),(null==i?void 0:i.length)>0){const a=`${jt.utils.getMaximumId(e)+1}`,r={id:a,bbox:{width:50},gridType:n.GridItemType.Tab,children:i,parent:o};t=t.setIn(["content",a],r),i.forEach((e=>{t=t.setIn(["content",e,"parent"],a)})),t=t.setIn(["content",o,"gridType"],n.GridItemType.Column),t=t.setIn(["content",o,"children"],[l,a]),t=t.setIn(["content",l,"parent"],o).setIn(["content",l,"bbox","width"],50)}return t}}t=this.collectItem(e,o,null,a.children,i),i.length>0&&(t=t.setIn(["content",o,"gridType"],n.GridItemType.Tab),t=t.setIn(["content",o,"children"],i))}return t}return e},this.collectItem=(e,t,o,i,a)=>{let l=e;return null==i||i.forEach((i=>{var r;if(!e.content[i].isPending&&i!==o){const s=e.content[i];s.gridType!==n.GridItemType.Column&&s.gridType!==n.GridItemType.Row&&s.gridType!==n.GridItemType.Tab?(a.push(i),o||(l=l.setIn(["content",i,"parent"],t))):(null===(r=s.children)||void 0===r?void 0:r.length)>0&&(l=this.collectItem(l,t,o,s.children,a))}})),l}}transformLayoutItem(e,t,o,n,i,a){return{index:t,item:e}}}const Yo={gutter:0,style:{padding:{number:[0],unit:"px"},justifyContent:"flex-start",alignItems:"stretch",borderRadius:{number:[0],unit:y.DistanceUnits.PIXEL}}},qo={lockParent:!0,heightMode:"auto",offsetX:0,offsetY:0},Ko=(0,n.createSelector)([(e,t)=>{var o;const{layoutItem:n}=t,i=null===(o=e.appRuntimeInfo)||void 0===o?void 0:o.selection;return!!i&&(i.layoutId===t.layoutId&&i.layoutItemId===n.id)},(e,t)=>{var o,i,a;const{layoutItem:l}=t;let r=[0,0,0,0];if(l.type===n.LayoutItemType.Widget){const t=l.widgetId,n=e.appConfig.widgets[t];n&&(r=y.styleUtils.expandStyleArray(null===(a=null===(i=null===(o=n.config)||void 0===o?void 0:o.style)||void 0===i?void 0:i.padding)||void 0===a?void 0:a.number))}return r[0]+r[2]},(e,t)=>{const{layoutItem:o}=t;let i=!0;if(o.type===n.LayoutItemType.Widget){const t=o.widgetId,n=e.appConfig.widgets[t];if(n){const t=Object.keys(n.layouts)[0],o=V(n.layouts[t],e.browserSizeMode,e.appConfig.mainSizeMode),a=e.appConfig.layouts[o];a&&Object.keys(a.content||[]).length>0&&Object.keys(a.content||[]).some((e=>!a.content[e].isPending&&(i=!1,!0)))}}return i}],((e,t,o)=>({selected:e,padding:t,isEmpty:o})));function Zo(e){const t=parseFloat(null==e?void 0:e.width);return t>0?`${e.width}`.includes("px")?`${Math.round(t)}px`:`${Math.round(t)}%`:"100%"}class Qo extends n.React.PureComponent{componentDidMount(){var e;const t=null!==(e=(0,n.getAppStore)().getState().queryObject)&&void 0!==e?e:{},{layoutId:o,layoutItem:i}=this.props,a=`${o}_block_${i.id}`;if(t.block_id===a){const e=document.getElementById(a);setTimeout((()=>{e.scrollIntoView({behavior:"smooth",block:"start"})}),500)}}calHeight(e){const t=function(e,t){const o=de(e.bbox||{},"height");if(!o||re(o))return"auto";switch(t.heightMode){case"auto":return"auto";case"fixed":return o;default:return null}}(this.props.layoutItem,e);return this.autoHeight="auto"===t,t}getStyle(e){const{index:t,gutter:o}=this.props,i=we()?-1:1;return[n.css`
        margin-top: ${t>0?`${o}px`:"unset"};
        width: ${Zo(e)};
        height: ${this.calHeight(e)};
        flex-shrink: 0;
      `,e.offsetX||e.offsetY?`translate(${(e.offsetX||0)*i}px, ${e.offsetY||0}px)`:null]}render(){const{layoutId:e,layoutItem:t,onClick:o,isEmpty:i}=this.props;if(!t||i)return null;const a=(0,n.classNames)("flow-layout-item","d-flex"),l=n.lodash.assign({},qo,t.setting),r=He(this.props),[s,d]=this.getStyle(l);return(0,n.jsx)(Ot,Object.assign({id:`${e}_block_${t.id}`,css:s,style:{transform:d},layoutId:e,layoutItemId:t.id,onClick:o,className:a,autoHeight:this.autoHeight},r))}}const en=n.ReactRedux.connect(Ko)(Qo);class tn extends n.React.PureComponent{calculatePosition(){const{layoutItem:e}=this.props;return function(e,t={}){var o,i,a;const l=e.setting,r=null!==(o=null==l?void 0:l.floatingArea)&&void 0!==o?o:1,s=`${null!==(i=null==l?void 0:l.offsetX)&&void 0!==i?i:0}px`,d=`${null!==(a=null==l?void 0:l.offsetY)&&void 0!==a?a:0}px`,{dh:u,dw:c,initWidth:p,initHeight:g,isResizing:v}=t,y=we()?`translateX(calc(50% + ${s}))`:`translateX(calc(-50% + ${s}))`,h={};switch(r){case 1:h.left=s,h.top=d,h.transform=null;break;case 2:h.left="50%",h.top=d,h.transform=y;break;case 3:h.right=s,h.top=d,h.transform=null;break;case 4:h.left=s,h.top="50%",h.transform=`translateY(calc(-50% + ${d}))`;break;case 5:h.left="50%",h.top="50%",h.transform=`${y} translateY(calc(-50% + ${d}))`;break;case 6:h.right=s,h.top="50%",h.transform=`translateY(calc(-50% + ${d}))`;break;case 7:h.left=s,h.bottom=d,h.transform=null;break;case 8:h.left="50%",h.bottom=d,h.transform=y;break;case 9:h.right=s,h.bottom=d,h.transform=null}return n.css`
    position: fixed;
    z-index: 1;
    width: ${v?`${p+c}px`:de(e.bbox,"width")};
    height: ${v?`${g+u}px`:de(e.bbox,"height")};
    left: ${h.left};
    right: ${h.right};
    top: ${h.top};
    bottom: ${h.bottom};
    transform: ${h.transform};
  `}(e)}render(){const{layoutId:e,layoutItem:t,onClick:o}=this.props;if(!t)return null;const i=(0,n.classNames)("flow-layout-item floating","d-flex");return(0,n.jsx)(Ot,{css:this.calculatePosition(),layoutId:e,layoutItemId:t.id,onClick:o,className:i})}}function on(){const e=[0];for(let t=1;t<=100;t++)e.push(t/100);return e}function nn(e){switch(e){case n.ScreenTriggerType.Top:return"0% 0% -98% 0%";case n.ScreenTriggerType.Bottom:return"-98% 0% -2px 0%";case n.ScreenTriggerType.Upper:return`-${100/3-1}% 0% -${200/3-1}% 0%`;case n.ScreenTriggerType.Lower:return`-${200/3-1}% 0% -${100/3-1}% 0%`;default:return}}function an(e,t,o,i){const a=n.React.useRef(),l=n.React.useRef();n.React.useEffect((()=>{a.current&&(a.current.unobserve(e),a.current=null);if(e&&"function"==typeof IntersectionObserver){const n=new IntersectionObserver((e=>{(e=>{const t=e.boundingClientRect,o=e.rootBounds,n=Math.abs(t.bottom-o.top)>=Math.abs(t.top-o.top);if(e.isIntersecting){if(l.current=!0,n)i(!0)}else if(l.current&&(l.current=!1,n))i(!1)})(e[0])}),{threshold:on(),root:t||document,rootMargin:nn(o)});return n.observe(e),a.current=n,()=>{a.current.unobserve(e),a.current=null}}}),[e,t,i,o])}const ln=.33,rn=.25;function sn(e){const{props:t,viewHeight:o,headerHeight:i,isActive:a,verticalSpace:l,stretched:r,transitionType:s,screenTransitionType:d,isSmallSize:u}=e,{side:c,size:p,offset:g,background:v,overlay:h=!0,padding:f}=t.panel||{},m=(0,n.getAppStore)().getState().appContext.isRTL?"left"===c?"-":"":"right"===c?"-":"",I=y.styleUtils.toBackgroundEmotionStyle(null!=v?v:{}),x=parseFloat(l);if(u){const e=!h;return n.css`
      width: 100%;
      background: transparent;
      pointer-events: none;
      position: relative;
      opacity: ${s===n.ScreenTransitionType.Fade?a?"1":"0.5":null};
      min-height: ${d===n.ScreenTransitionType.Cover?`${o}px`:null};
      padding-top: ${d!==n.ScreenTransitionType.Fade&&e?`${Math.round(o*ln)}px`:null};

      &.top-spacing > .panel-content {
        /* margin-top: ${Math.round(o*ln)}px; */
      }

      .panel-content {
        width: 100%;
        ${h?"":I};
        /* margin-top: ${s===n.ScreenTransitionType.Push?"${Math.round(viewHeight * SCREEN_RATIO_IN_SMALL_SIZE)}px":"unset"}; */

        > .layout, > .layout-wrapper > .layout {
          pointer-events: auto;
          ${h?I:""};
          min-height: ${Math.round(o*rn)}px;
          padding: ${y.styleUtils.toCSSPadding(f)};
        }

        > .layout-wrapper > .column-layout > .trail-container,
        > .column-layout > .trail-container {
          overflow-y: hidden;
        }

        > .layout-wrapper > .placeholder-btn {
          pointer-events: auto;
          ${h?I:""};
        }

        .panel-spacing {
          height: ${Math.round(o*x/100)}px;
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
          height: ${x}vh;
          height: calc(var(--vh) * ${x});
        }
      }
    `}return n.css`
    width: 100%;
    background: transparent;
    pointer-events: none;
    display: flex;
    flex-direction: ${"right"===c?"row-reverse":"row"};
    justify-content: ${"center"===c&&h?"center":"flex-start"};
    position: relative;
    opacity: ${s===n.ScreenTransitionType.Fade?a?"1":"0.5":null};

    &.top-spacing > .panel-content {
      /* margin-top: ${Math.round(2*o/3)}px; */
    }

    .panel-content {
      width: ${p};
      transform: ${h&&Math.abs(parseFloat(g))>0?`translateX(${m}${g})`:null};
      flex: 0 auto;
      min-height: ${r?`${o}px`:"unset"};
      ${h?"":I};

      > .layout,
      > .layout-wrapper > .layout {
        pointer-events: auto;
        ${h?I:""};
        min-height: ${Math.round(o*rn)}px;
        padding: ${y.styleUtils.toCSSPadding(f)};
      }

      > .layout-wrapper > .column-layout > .trail-container,
      > .column-layout > .trail-container {
        overflow-y: hidden;
      }

      > .layout-wrapper > .placeholder-btn {
        pointer-events: auto;
        ${h?I:""};
      }

      .panel-spacing {
        height: ${Math.round(o*x/100)}px;

        &.last-item {
          height: ${r?`${Math.round(o*x/100)}`:o}px;
        }
      }
    }

    .panel-content-placeholder {
      width: 1px;
      min-height: ${r?o:Math.round(o*rn)}px;
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
          height: ${x}vh;
          height: calc(var(--vh) * ${x});

          &.last-item {
            height: ${r?x:100}vh;
            height: calc(var(--vh) * ${r?x:100});
          }
        }
      }
      .panel-content-placeholder {
        min-height: ${r?"100":Math.round(25)}vh;
        min-height: calc(var(--vh) * ${r?"100":Math.round(25)});
      }
    }
  `}function dn(e){var t;const{index:o,screenId:i,onInteractionChange:a,onHeightChange:l,viewHeight:r,headerHeight:s,layoutEntry:d,isActive:u,isSmallSize:c,transitionType:p,screenTransitionType:g,triggerType:v,stretched:y,verticalSpace:h="0"}=e,f=n.ReactRedux.useSelector((e=>e.appConfig.screens[i])),{panel:m}=f,I=n.React.useRef(),[x,w]=n.React.useState(!1),b=n.React.useRef(),S=n.React.useCallback((e=>{a(o,e)}),[o,a]);n.React.useEffect((()=>(b.current=n.lodash.debounce(l,200),()=>{var e;null===(e=b.current)||void 0===e||e.cancel()})),[l]);const C=n.React.useCallback((({width:e,height:t})=>{var n;null===(n=b.current)||void 0===n||n.call(b,o,t)}),[o]);return an(I.current,e.refElement,c?n.ScreenTriggerType.Lower:null!=v?v:n.ScreenTriggerType.Bottom,S),n.React.useEffect((()=>{w(!0)}),[]),(0,n.jsx)("div",{className:(0,n.classNames)("screen-side-panel",{"top-spacing":0===o&&((null===(t=f.panel)||void 0===t?void 0:t.overlay)||c)}),"data-screenid":i,"data-index":o,ref:I,css:sn({props:f,viewHeight:r,headerHeight:s,isActive:u,verticalSpace:h,stretched:y||null==m,transitionType:p,screenTransitionType:g,isSmallSize:c})},m&&(0,n.jsx)("div",{className:"panel-content"},(0,n.jsx)(d,{layouts:m.layout}),(0,n.jsx)("div",{className:(0,n.classNames)("panel-spacing",{"last-item":e.isLast})})),!m&&(0,n.jsx)("div",{className:"panel-content-placeholder"}),(0,n.jsx)(n.ReactResizeDetector,{targetRef:I,handleHeight:!0,onResize:C}))}var un=l(3529),cn=l.n(un),pn=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o};const gn=e=>{const t=window.SVG,{className:o}=e,i=pn(e,["className"]),a=(0,n.classNames)("jimu-icon jimu-icon-component",o);return t?n.React.createElement(t,Object.assign({className:a,src:cn()},i)):n.React.createElement("svg",Object.assign({className:a},i))},vn=(0,dt.withBuilderTheme)(y.Tooltip);function yn(e){const{rootLayoutId:t,viewHeight:o,headerHeight:i,screenId:a,isActive:l,isAbsolute:r,isLast:s,isSmallSize:d,layoutEntry:u,isDesignMode:p,formatMessage:g,builderTheme:v}=e,h=n.ReactRedux.useSelector((e=>e.appConfig.screens[a])),f=n.ReactRedux.useSelector((e=>{var t,o,n;return null===(n=null===(o=null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.screenPanelStates)||void 0===o?void 0:o[a])||void 0===n||n})),{main:m}=h,{side:I,size:x,overlay:w=!0}=h.panel||{},b=n.React.useRef(),S=n.React.useCallback((()=>{(0,n.getAppStore)().dispatch(n.appActions.screenPanelVisibleChanged(a,!0))}),[a]);const C=(0,n.classNames)("screen-main-panel",{"is-active":l,"last-one":s});return(0,n.jsx)(c.Provider,{value:!r||l},(0,n.jsx)("div",{id:`${t}_screen_${a}`,className:C,css:function(){var e,t,a,l;if(d){const a=!w&&null!=h.panel,l=a?`${Math.round(o*ln)}px`:`${o}px`,r=a?`${Math.round(33)}`:"100";return n.css`
        pointer-events: none !important;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: ${o}px;

        > .layout {
          ${y.styleUtils.toBackgroundEmotionStyle(null!==(t=null===(e=h.main)||void 0===e?void 0:e.background)&&void 0!==t?t:{})};
          height: ${l} !important;
          border: none !important;
          pointer-events: auto;
        }

        body:not(.design-mode) & {
          height: ${i>0?`calc(100vh - ${i}px)`:"100vh"};
          height: ${i>0?`calc(var(--vh) * 100 - ${i}px)`:"calc(var(--vh) * 100)"};
          > .layout {
            height: ${r}vh !important;
            height: calc(var(--vh) * ${r}) !important;
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
      `}let s="0px",u="0px";"none"!==I&&(w||"right"===I||(s=x),w||"right"!==I||(u=x));const c=v?n.css`
      color: ${v.ref.palette.neutral[1200]};
      background-color: ${v.ref.palette.neutral[500]};
      border-color: ${v.ref.palette.neutral[600]};
      &:hover {
        color: ${v.ref.palette.black};
        background-color: ${v.ref.palette.neutral[600]};
      }
    `:null;return n.css`
      ${y.styleUtils.toBackgroundEmotionStyle(null!==(l=null===(a=h.main)||void 0===a?void 0:a.background)&&void 0!==l?l:{})};
      left: ${r?s:null};
      right: ${r?u:null};
      margin-left: ${r?null:s};
      margin-right: ${r?null:u};
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
    `}(),ref:b,"data-screenid":a,"data-index":e.index},(0,n.jsx)(u,{layouts:m.layout,isInWidget:!0}),(0,n.jsx)("div",{className:"spacing-area"}),p&&!f&&(0,n.jsx)("div",{className:"toggle-visible-btn",onClick:S,"data-testid":"toggleBtn"},(0,n.jsx)(vn,{placement:"auto",title:g("showInDesignView")},(0,n.jsx)(y.Button,{type:"default",size:"sm",className:"rounded-1"},(0,n.jsx)(gn,{size:"m"}))))))}function hn(e,t,o,i,a){return e===n.ScreenTransitionType.Fade?n.css`
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
    `:void 0}function fn(e,t,o){return e===n.ScreenTransitionType.Fade?n.css`
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
    `:void 0}function mn(e){const{rootLayoutId:t,activeIndex:o,viewHeight:i,headerHeight:a,screens:l,transitionType:r,isSmallSize:s,layoutEntry:d,isDesignMode:u,formatMessage:c,builderTheme:p}=e;return(0,n.jsx)(n.React.Fragment,null,(0,n.jsx)("div",{className:"screen-container",css:hn(r,i,a,s,l.length)},l.map(((e,g)=>(0,n.jsx)(yn,{key:e,rootLayoutId:t,index:g,isActive:o===g,screenId:e,viewHeight:i,headerHeight:a,isAbsolute:r===n.ScreenTransitionType.Fade,isLast:g===l.length-1,isSmallSize:s,layoutEntry:d,isDesignMode:u,formatMessage:c,builderTheme:p})))),(0,n.jsx)("div",{className:"screen-placeholder",css:fn(r,i)}))}function In(e,t){return n.css`
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
  `}function xn(e){var t;const{layoutId:o,layoutItemId:i,layoutItem:a}=e,{screenGroupId:l}=a,r=n.ReactRedux.useSelector((e=>e.appConfig.screenGroups[a.screenGroupId])),s=n.ReactRedux.useSelector((e=>{var t,o;return null!==(o=null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.isPrintPreview)&&void 0!==o&&o})),u=n.ReactRedux.useSelector((e=>e.appConfig.screenGroups[a.screenGroupId].screens.some((t=>null!=e.appConfig.screens[t].panel)))),c=n.ReactRedux.useSelector((e=>e.browserSizeMode)),{pageId:p}=n.React.useContext(d),g=n.ReactRedux.useSelector((e=>{const t=e.appConfig.pages[p];if(null==t?void 0:t.header){const t=e.appConfig.header;if(null==t?void 0:t.sticky){const o=e.browserSizeMode,n=e.appConfig.mainSizeMode,i=t.height[o]||t.height[n]||75;return parseInt(i,10)}}return 0})),{screens:v,stretchPanel:y=!0,triggerType:h=n.ScreenTriggerType.Bottom,verticalSpace:f="0",panelTransitionType:m=n.ScreenTransitionType.Push}=r;let I=s?null:null!==(t=r.transitionType)&&void 0!==t?t:n.ScreenTransitionType.Fade;s||c!==n.BrowserSizeMode.Small||u||(I=n.ScreenTransitionType.Cover);const x=n.ReactRedux.useSelector((e=>{var t;return null===(t=e.appRuntimeInfo.screenGroupNavInfos)||void 0===t?void 0:t[l]})),w=n.React.useRef(),b=n.React.useRef(),S=n.React.useRef(),C=n.React.useRef(),[T,R]=n.React.useState(0),j=n.React.useMemo((()=>{var e,t,o;if(c!==n.BrowserSizeMode.Small)return!1;const i=(0,n.getAppStore)().getState().appConfig,a=null===(t=null===(e=i.screenGroups)||void 0===e?void 0:e[l])||void 0===t?void 0:t.screens;if(null==a?void 0:a[T]){return null===(o=i.screens[a[T]].panel)||void 0===o?void 0:o.overlay}return!1}),[l,T,c]);n.React.useEffect((()=>{null!=(null==x?void 0:x.activeIndex)&&x.activeIndex!==T&&R(x.activeIndex)}),[x,T]);const M=n.React.useCallback(((e,t)=>{t&&e!==T?(0,n.getAppStore)().dispatch(n.appActions.screenGroupNavInfoChanged(l,e,!1)):!t&&e>0&&(0,n.getAppStore)().dispatch(n.appActions.screenGroupNavInfoChanged(l,e-1,!1))}),[T,l]),P=n.React.useCallback((()=>{if(!S.current)return;const e=S.current.children[0],t=S.current.children[1],o=t.childElementCount;for(let n=0;n<o;n++){const o=t.children[n],i=o.getAttribute("data-screenid"),a=e.querySelector(`[data-screenid="${i}"]`);a&&(a.style.height=s?`${o.clientHeight}px`:null)}e.style.height=`${t.clientHeight}px`}),[s]),L=n.React.useMemo((()=>n.lodash.debounce(P,200)),[P]),$=n.React.useCallback(((e,t)=>{if(!S.current)return;const o=S.current.children[0],i=S.current.children[1];if(I!==n.ScreenTransitionType.Fade)if(I!==n.ScreenTransitionType.Cover){if(I===n.ScreenTransitionType.Push){const t=o.querySelector(`div.screen-main-panel[data-index="${e}"]`),n=i.querySelector(`div.screen-side-panel[data-index="${e}"]`);t.style.height=`${n.clientHeight}px`,o.style.height=`${i.clientHeight}px`}}else!function(e,t,o){const i=e.querySelectorAll("div.screen-main-panel"),a=t.querySelectorAll("div.screen-side-panel"),l=i.length;for(let e=1;e<l;e++){const t=i.item(e),o=i.item(e-1),n=a.item(e-1);t.style.marginTop=n.clientHeight-o.clientHeight+"px"}o!==n.BrowserSizeMode.Small&&(e.style.height=`${t.clientHeight}px`)}(o,i,c);else o.style.height=`${i.clientHeight}px`}),[c,I]);return v.length>0?(0,n.jsx)("div",{className:(0,n.classNames)("flow-layout-item",{"print-preview":s,"small-size":c===n.BrowserSizeMode.Small}),css:In(0,j),"data-layoutitemid":i,"data-layoutid":o,ref:w},(0,n.jsx)("div",{className:"screen-group",ref:S},(0,n.jsx)("div",{className:"main-panels",ref:C},(0,n.jsx)(mn,{rootLayoutId:o,activeIndex:T,screens:v,transitionType:I,layoutEntry:st,headerHeight:g,isSmallSize:c===n.BrowserSizeMode.Small})),(0,n.jsx)("div",{className:"side-panels",ref:b},v.map(((e,t)=>(0,n.jsx)(dn,{key:e,index:t,isLast:t===v.length-1,screenId:e,refElement:null,layoutEntry:st,isActive:t===T,stretched:y,triggerType:h,verticalSpace:f,transitionType:m,screenTransitionType:I,onHeightChange:$,onInteractionChange:M,isSmallSize:c===n.BrowserSizeMode.Small,headerHeight:g}))),(0,n.jsx)(n.ReactResizeDetector,{targetRef:b,handleHeight:!0,onResize:L})))):null}class wn extends n.React.PureComponent{constructor(e){super(e);const t=n.ExtensionManager.getInstance().getExtensions(`${n.extensionSpec.ExtensionPoints.LayoutTransformer}`);if(t&&t.length>0){const e=t.find((e=>e.layoutType===this.props.layout.type));this.layoutTransform=null==e?void 0:e.transformLayout}}_createItem(e,t,o){var i;const{layout:a}=this.props;return(null==e?void 0:e.isPending)?null:e.type===n.LayoutItemType.ScreenGroup?(0,n.jsx)(xn,{key:`${e.id}_${t}`,itemIndex:t,layoutId:a.id,layoutItemId:e.id,layoutItem:e}):(null===(i=e.setting)||void 0===i?void 0:i.isFloating)?(0,n.jsx)(tn,{key:e.id,index:t,gutter:o.gutter,layoutId:a.id,layoutItemId:e.id,layoutItem:e}):(0,n.jsx)(en,{key:e.id,index:t,gutter:o.gutter,layoutId:a.id,layoutItemId:e.id,layoutItem:e})}render(){const{layout:e,className:t,style:o,layouts:i,browserSizeMode:a}=this.props;if(!e)return null;let l=e;if(i[a]!==e.id&&this.layoutTransform){let t;Object.keys(i).some((o=>i[o]===e.id&&(t=o,!0))),l=this.layoutTransform(e,t,a)}const r=l.order||[],s=n.lodash.assign({},Yo,l.setting),d=Object.assign(Object.assign(Object.assign({},o),y.styleUtils.toCSSStyle(s.style)),{position:"relative"}),u=(0,n.classNames)("layout flow-layout w-100",t);return(0,n.jsx)("div",{className:u,style:d,"data-layoutid":e.id},(0,n.jsx)(n.IntersectionContext.Provider,{value:{monitor:!0}},(0,n.jsx)(n.OneByOneAnimation,{oid:l.id,"data-layoutid":l.id,className:"trail-container d-flex flex-column align-items-center",css:n.css`
              width: 100%;
            `},r.map(((e,t)=>this._createItem(l.content[e],t,s))))))}}const bn=n.ReactRedux.connect(pe)(wn);function Sn(e,t,o){var i;const a=Object.keys(null!==(i=e.controllerPanels)&&void 0!==i?i:{}).filter((i=>{const a=z(e,i,n.LayoutItemType.Widget,o);return null!=a&&(a.type!==n.ContainerType.Page||a.id===t)}));return a.sort(),a.join(",")}function Cn(e){if(null==e)return null;const{position:t,offsetX:o=0,offsetY:i=0}=e;let a;return e.widthMode!==S.Stretch&&(0!==o&&(a=`translateX(${o}px)`),t!==n.FixedPosition.TopCenter&&t!==n.FixedPosition.MiddleCenter&&t!==n.FixedPosition.BottomCenter||(a=null!=a?`${a} translateX(-50%)`:"translateX(-50%)")),e.heightMode!==S.Stretch&&(0!==i&&(a=null!=a?`${a} translateY(${i}px)`:`translateY(${i}px)`),t!==n.FixedPosition.MiddleLeft&&t!==n.FixedPosition.MiddleCenter&&t!==n.FixedPosition.MiddleRight||(a=null!=a?`${a} translateY(-50%)`:"translateY(-50%)")),a}function Tn(e){let t,o,i;switch(null==e?void 0:e.position){case n.FixedPosition.TopLeft:t=n.css`top: 0; left: 0; bottom: auto; right: auto;`;break;case n.FixedPosition.TopRight:t=n.css`top: 0; left: auto; bottom: auto; right: 0;`;break;case n.FixedPosition.BottomLeft:t=n.css`top: auto; left: 0; bottom: 0; right: auto;`;break;case n.FixedPosition.BottomRight:t=n.css`top: auto; left: auto; bottom: 0; right: 0;`;break;case n.FixedPosition.TopCenter:t=n.css`top: 0; left: 50%; bottom: auto; right: auto;`;break;case n.FixedPosition.BottomCenter:t=n.css`top: auto; left: 50%; bottom: 0; right: auto;`;break;case n.FixedPosition.MiddleLeft:t=n.css`top: 50%; left: 0; bottom: auto; right: auto;`;break;case n.FixedPosition.MiddleRight:t=n.css`top: 50%; left: auto; bottom: auto; right: 0;`;break;case n.FixedPosition.MiddleCenter:t=n.css`top: 50%; left: 50%; bottom: auto; right: auto;`;break;default:t=n.css`top: 0; left: 0; bottom: auto; right: auto;`}return e.widthMode===S.Stretch&&(o=n.css`width:auto;left:${e.left};right:${e.right};`),e.heightMode===S.Stretch&&(i=n.css`height:auto;top:${e.top};bottom:${e.bottom};`),n.css`
    position: fixed;
    ${t}
    width: ${null==e?void 0:e.width};
    height: ${null==e?void 0:e.height};
    ${o};
    ${i}
    overflow: visible;
    z-index: 2;
  `}const Rn=(e,t,o)=>n.React.useCallback((i=>{if(!e)return;const a=i.key,l=i.shiftKey;if("Tab"===a)if(l){const t=(0,y.getFocusableElements)(e).filter((e=>{var t,n;return!(null===(n=null===(t=null==e?void 0:e.classList)||void 0===t?void 0:t.contains)||void 0===n?void 0:n.call(t,o))}));if(!t||0===t.length)return;(0,n.focusElementInKeyboardMode)(t[t.length-1],!0)}else{const o=e.querySelector(`.${t}`);(0,n.focusElementInKeyboardMode)(o,!0)}}),[e,t,o]);var jn=l(9238),Mn=l.n(jn);const{animated:Pn,useSpring:Ln}=n.spring,$n=n.css`
  position: relative;
  display: flex;
  background-color: var(--ref-palette-white);
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
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
`;function On(e){const{layoutId:t,layoutItemId:o,controllerId:i,minimized:a,onClose:l,onToggle:r}=e,[s,d]=n.React.useState(!1),u=n.React.useRef(),c=n.hooks.useLatest(l),p=n.hooks.useLatest(r),g=n.hooks.useTranslation(),v=n.ReactRedux.useSelector((e=>e.appConfig.layouts[t].content[o].widgetId)),h=n.ReactRedux.useSelector((e=>{var t;const o=null===(t=e.widgetsRuntimeInfo)||void 0===t?void 0:t[v];return(null==o?void 0:o.state)===n.WidgetState.Opened})),f=n.ReactRedux.useSelector((e=>{const t=e.appConfig.widgets[v];return null==t?void 0:t.label}),n.ReactRedux.shallowEqual),m=n.ReactRedux.useSelector((e=>{var t;const o=e.widgetsRuntimeInfo[v];return null!==(t=null==o?void 0:o.isClassLoaded)&&void 0!==t&&t})),I=n.ReactRedux.useSelector((e=>e.appConfig.controllerPanels[i].effect)),x=n.React.useMemo((()=>{var e,t;return(null==I?void 0:I.type)&&I.type!==n.AnimationType.None?(0,n.getAnimationEffect)(I.type,{configType:null===(e=I.option)||void 0===e?void 0:e.configType,direction:null===(t=I.option)||void 0===t?void 0:t.direction}):null}),[I]),[w,b]=Ln((()=>n.DEFAULT_ANIMATION_PROPS),[x]),S=n.React.useCallback((e=>{c.current(e,v);const t=document.querySelector(`.widget-controller .avatar-card[data-widgetid='${v}'] button`);if(t)(0,n.focusElementInKeyboardMode)(t);else{const e=document.querySelector(`[data-widgetid='${i}'] .popup-more-button button`);(0,n.focusElementInKeyboardMode)(e)}}),[c,v,i]),C=n.ReactRedux.useSelector((e=>{var t;return null===(t=e.widgetsState[v])||void 0===t?void 0:t.autoFocus}));let T;(0,y.useTrapFocusBySelector)(u,!0,C,".first-node",".last-virtual-node",s&&h),n.React.useEffect((()=>{h&&!s&&(d(!0),n.WidgetManager.getInstance().loadWidgetClass(v).catch((e=>{console.log(e)})))}),[h,v,s]),n.React.useEffect((()=>{h&&null!=x&&b.start(Object.assign(Object.assign({},x.animateProps()),{onRest:()=>{n.lodash.defer((()=>{u.current.style.clipPath=null}))}}))}),[b,h,x]),s&&m&&(T=n.WidgetManager.getInstance().getWidgetClass(v));const R=Rn(u.current,"first-node","last-virtual-node"),j=n.React.useMemo((()=>[{name:"collapse",className:a?"first-node action-collapse collapsed":"first-node action-collapse",label:g(a?"expand":"collapse"),icon:Mn(),onClick:p.current},{name:"close",className:"action-close",label:g("close"),icon:eo(),onClick:S}]),[S,a,p,g]);return(0,n.jsx)(Pn.div,{className:(0,n.classNames)("controller-panel flex-column w-100 h-100",{"d-none":!s||!h}),css:$n,ref:u,style:null!=x?w:null},(0,n.jsx)(y.PanelHeader,{level:2,type:"primary",title:f,actions:j,moveable:!1}),(0,n.jsx)("div",{className:"panel-content d-flex flex-grow-1"},!m&&(0,n.jsx)(y.Loading,{type:y.LoadingType.Donut}),T&&(0,n.jsx)("div",{className:"w-100 h-100 widget-content p-1"},(0,n.jsx)(n.ErrorBoundary,null,(0,n.jsx)(T,{widgetId:v,layoutId:t,layoutItemId:o}))),(0,n.jsx)("button",{className:"sr-only last-virtual-node",onKeyUp:R})))}function kn(e){const{controllerId:t}=e,[o,i]=n.React.useState(!1),a=n.ReactRedux.useSelector((e=>{const o=e.appConfig.widgets[t],n=o.manifest.layouts[0].name,i=o.layouts[n];return i[e.browserSizeMode]||i[e.appConfig.mainSizeMode]})),l=n.ReactRedux.useSelector((e=>{var t;const o=e.appConfig.layouts[a];if(!o)return"";const n=e.appConfig.widgets,i=Object.keys(null!==(t=o.content)&&void 0!==t?t:{}).filter((e=>{const t=o.content[e],i=n[null==t?void 0:t.widgetId];return null!=(null==t?void 0:t.widgetId)&&!t.isPending&&!(null==i?void 0:i.offPanel)}));return i.sort(),i.join(",")})),r=n.ReactRedux.useSelector((e=>{var t,o;const i=e.appConfig.widgets,l=Object.keys(null!==(t=e.widgetsRuntimeInfo)&&void 0!==t?t:{}).filter((t=>{var o;return e.widgetsRuntimeInfo[t].state===n.WidgetState.Opened&&!(null===(o=i[t])||void 0===o?void 0:o.offPanel)})),r=e.appConfig.layouts[a];return Object.keys(null!==(o=r.content)&&void 0!==o?o:{}).some((e=>{const t=r.content[e];return null!=(null==t?void 0:t.widgetId)&&!t.isPending&&l.includes(t.widgetId)}))})),s=n.React.useMemo((()=>l.split(",").filter((e=>""!==e))),[l]),d=n.ReactRedux.useSelector((e=>e.appConfig.controllerPanels[t])),u=n.React.useCallback(((e,t)=>{e.stopPropagation(),(0,n.getAppStore)().dispatch(n.appActions.closeWidget(t))}),[]),c=n.React.useCallback((()=>{i(!o)}),[o]),p=n.React.useMemo((()=>n.css`
    ${Tn(d)}
    height: ${o?"36px":null==d?void 0:d.height};
    transition: height 0.3s ease-in-out;
    transform: ${Cn(d)}
  `),[d,o]);return 0===s.length?null:(0,n.jsx)("div",{className:(0,n.classNames)("panel-container",{"d-none":!r}),css:p},(0,n.jsx)(n.React.Fragment,null,s.map((e=>(0,n.jsx)(On,{key:e,controllerId:t,layoutId:a,layoutItemId:e,minimized:o,onToggle:c,onClose:u})))))}function An(e){const{pageId:t}=e,o=n.ReactRedux.useSelector((e=>Sn(e.appConfig,t,e.browserSizeMode))),i=n.React.useMemo((()=>o.split(",").filter((e=>""!==e))),[o]);return(0,n.jsx)(n.React.Fragment,null,i.map((e=>(0,n.jsx)(kn,{key:e,controllerId:e}))))}function En(e){const{pageJson:t,visible:o,pageContext:i,browserSizeMode:a,isPrintPreview:l,headerFooterHeight:r}=e,[s,u]=n.React.useState(),p=t.layout,g=n.React.useMemo((()=>function(e,t){if(e){const o=(0,n.getAppStore)().getState().appConfig,i=e.layout[o.mainSizeMode],a=o.layouts[i];if((null==a?void 0:a.type)===n.LayoutType.GridLayout)return t>0?`calc(100% - ${t}px)`:"100%"}return"auto"}(t,r)),[r]),v=!l&&t.oneByOneEffect&&t.oneByOneEffect.type!==n.AnimationType.None?t.oneByOneEffect:null,y=v?!o:null;let h;n.React.useEffect((()=>{v&&u((0,n.getNextAnimationId)())}),[o,v]),n.React.useEffect((()=>{var e;if(o&&p){const t=(0,n.getAppStore)().getState().appConfig,o=p[t.mainSizeMode],i=null===(e=t.layouts[o])||void 0===e?void 0:e.type,a=document.getElementsByTagName("html")[0];i===n.LayoutType.FlowLayout?a.classList.add("scrollable"):a.classList.remove("scrollable")}}),[o,p]),t.mode!==n.PageMode.FitWindow&&t.maxWidth>0&&(h=t.maxWidth);const f=n.React.useMemo((()=>{const e=(0,n.getAppStore)().getState();let o;return t.layout&&(o=V(t.layout,a,e.appConfig.mainSizeMode)),Object.assign(Object.assign({},i),{maxWidth:h,viewOnly:!0,rootLayoutId:o,pageId:t.id})}),[i,h,t.id,t.layout,a]),m=n.React.useMemo((()=>({setting:v,revert:y,playId:v?s:null,oid:f.rootLayoutId,onContextAnimationEnd:()=>{u(-1)}})),[v,y,s,f.rootLayoutId]);if(p)return(0,n.jsx)(d.Provider,{key:t.id,value:f},(0,n.jsx)(c.Provider,{value:o},(0,n.jsx)("div",{id:t.id,"data-pageid":t.id,className:"page",css:n.css`
            display: ${o?"flex":"none"};
            background-color: ${t.bodyBackgroundColor||"transparent"};
            height: ${g};
            flex: 1 0 auto;
            z-index: 1;
          `},(0,n.jsx)(n.AnimationContext.Provider,{value:m},(0,n.jsx)(st,{layouts:p,className:"w-100 flex-grow-1",css:n.css`
                margin: 0 auto;
                background-color: transparent;
                z-index: 0;
              `})),a!==n.BrowserSizeMode.Small&&(0,n.jsx)(An,{pageId:t.id}))))}function Nn(e){var t,o,i,a;const{headerJson:l,browserSizeMode:r,theme:s,mainSizeMode:u,pageContext:p,showClassification:g,onHeightChange:v}=e,y=l.height[r]||l.height[u]||50,h=l.layout;let f;l.backgroundIMage&&("string"==typeof l.backgroundIMage?f=l.backgroundIMage:"object"==typeof l.backgroundIMage&&(f=l.backgroundIMage.url)),f=n.appConfigUtils.processResourceUrl(f),n.hooks.useEffectOnce((()=>{v(parseInt(y))}));const m=n.React.useMemo((()=>{var e,t,o,i;const a=l.sticky&&!g;return n.css`
      display: flex;
      position: ${a?"sticky":"relative"};
      z-index: ${a?2:"0"};
      top: 0;
      width: 100%;
      min-height: ${Math.round(parseFloat(y))}px;
      height: auto;
      overflow: hidden;
      background-color: ${l.backgroundColor||(null===(t=null===(e=s.mixin)||void 0===e?void 0:e.header)||void 0===t?void 0:t.bg)||"transparent"};
      background-image: ${f};
      background-position: ${l.backgroundPosition};
      color: ${null===(i=null===(o=s.mixin)||void 0===o?void 0:o.header)||void 0===i?void 0:i.color};
      flex: 0 0 auto;
    `}),[l.sticky,l.backgroundColor,l.backgroundPosition,y,null===(o=null===(t=s.mixin)||void 0===t?void 0:t.header)||void 0===o?void 0:o.bg,null===(a=null===(i=s.mixin)||void 0===i?void 0:i.header)||void 0===a?void 0:a.color,f,g]),I=n.React.useMemo((()=>Object.assign(Object.assign({},p),{viewOnly:!0})),[p]);return(0,n.jsx)(d.Provider,{value:I},(0,n.jsx)(c.Provider,{value:!0},(0,n.jsx)("div",{className:"header",css:m},(0,n.jsx)(st,{layouts:h,className:"w-100 flex-grow-1"}))))}function zn(e){var t,o,i,a;const{footerJson:l,browserSizeMode:r,theme:s,mainSizeMode:u,pageContext:p,onHeightChange:g}=e,v=l.height[r]||l.height[u]||50,y=l.layout;let h;l.backgroundIMage&&("string"==typeof l.backgroundIMage?h=l.backgroundIMage:"object"==typeof l.backgroundIMage&&(h=l.backgroundIMage.url)),h=n.appConfigUtils.processResourceUrl(h),n.hooks.useEffectOnce((()=>{g(parseInt(v))}));const f=n.React.useMemo((()=>{var e,t,o,i;return n.css`
      display: flex;
      width: 100%;
      height: ${Math.round(parseFloat(v))}px;
      flex-shrink: 0;
      overflow: hidden;
      background-color: ${l.backgroundColor||(null===(t=null===(e=s.mixin)||void 0===e?void 0:e.footer)||void 0===t?void 0:t.bg)||"transparent"};
      background-image: ${h};
      background-position: ${l.backgroundPosition};
      color: ${null===(i=null===(o=s.mixin)||void 0===o?void 0:o.footer)||void 0===i?void 0:i.color};
      z-index: 0;
    `}),[v,l.backgroundColor,l.backgroundPosition,null===(o=null===(t=s.mixin)||void 0===t?void 0:t.footer)||void 0===o?void 0:o.bg,null===(a=null===(i=s.mixin)||void 0===i?void 0:i.footer)||void 0===a?void 0:a.color,h]),m=n.React.useMemo((()=>Object.assign(Object.assign({},p),{viewOnly:!0})),[p]);return(0,n.jsx)(d.Provider,{value:m},(0,n.jsx)(c.Provider,{value:!0},(0,n.jsx)("div",{className:"footer",css:f},(0,n.jsx)(st,{layouts:y,className:"w-100 flex-grow-1"}))))}const Bn=n.css`
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
`;function Fn(){const e=n.i18n.getIntl(),t=n.React.useRef();n.React.useEffect((()=>{(0,n.focusElementInKeyboardMode)(t.current)}),[]);const o=n.React.useCallback((t=>e.formatMessage({id:t})),[e]),i=n.hooks.useEventCallback((()=>{n.jimuHistory.changeQueryObject({print_preview:null}),(0,n.getAppStore)().dispatch(n.appActions.quitPrintPreview())})),a=n.hooks.useEventCallback((()=>{window.print()}));return(0,n.jsx)("div",{className:"print-preview-tool shadow-3",css:Bn},(0,n.jsx)("div",{className:"d-flex justify-content-center align-items-center flex-grow-1"},(0,n.jsx)(y.Button,{ref:t,"aria-label":o("printCurrentPage"),type:"primary",onClick:a},o("printCurrentPage"))),(0,n.jsx)(y.Button,{className:"ml-auto",icon:!0,type:"tertiary","aria-label":o("close"),onClick:i},(0,n.jsx)(oo,{color:"var(--ref-palette-white)"})))}var Hn=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o};function Wn(e){const{showClassification:t}=e,o=Hn(e,["showClassification"]),i=n.ReactRedux.useSelector((e=>e.appInfo.id)),[a,l]=n.React.useState(null);return n.React.useEffect((()=>{t&&!a&&(0,n.loadArcGISJSAPIModule)("esri/kernel").then((e=>{e&&n.moduleLoader.loadModule("jimu-ui/advanced/portal-components").then(l)})).catch((e=>{console.error("loadArcGISJSAPIModule error",e)}))}),[t]),(null==a?void 0:a.ClassificationBanner)&&(0,n.jsx)(a.ClassificationBanner,Object.assign({portalItemId:i},o))}const Vn=dt.styled.div((()=>"\n    position: sticky;\n    top: 0;\n    z-index: 2;\n  "));function Dn(e){const{headerJson:t,showClassification:o,classification:i,children:a}=e;return o?(0,n.jsx)(n.React.Fragment,null,(0,n.jsx)(Vn,{className:"sticky-header-wrapper w-100"},(0,n.jsx)(Wn,{showClassification:o,position:"top",needSticky:!1,classification:i}),(null==t?void 0:t.sticky)&&a),!(null==t?void 0:t.sticky)&&a):a}it(n.LayoutType.FixedLayout,Et),it(n.LayoutType.FlowLayout,bn),it(n.LayoutType.GridLayout,mo),it(n.LayoutType.ColumnLayout,Ht),it(n.LayoutType.AccordionLayout,Fo),it(n.LayoutType.FlexRowLayout,Go);class Gn extends n.React.PureComponent{constructor(e){super(e),this.updateHeaderHeight=e=>{this.setState({headerHeight:e})},this.updateFooterHeight=e=>{this.setState({footerHeight:e})},this.isMac=()=>{var e,t;return"macOS"===(null===(t=null===(e=window.jimuUA)||void 0===e?void 0:e.os)||void 0===t?void 0:t.name)},this.handlePrintEvent=e=>{(0,n.getAppStore)().dispatch(n.appActions.activePrintPreview()),n.jimuHistory.changeQueryObject({print_preview:String(!0)}),e.cancelBubble=!0,e.preventDefault(),e.stopImmediatePropagation()},this.state={headerHeight:0,footerHeight:0},n.ExtensionManager.getInstance().registerExtension({epName:n.extensionSpec.ExtensionPoints.LayoutTransformer,extension:new Uo}),n.ExtensionManager.getInstance().registerExtension({epName:n.extensionSpec.ExtensionPoints.LayoutTransformer,extension:new Xo}),n.ExtensionManager.getInstance().registerExtension({epName:n.extensionSpec.ExtensionPoints.LayoutTransformer,extension:new Jo}),this.pageContext={theme:this.props.theme},window.jimuConfig.isBuilder||(this.isMac()?this.keyBindings={"command+keyp":this.handlePrintEvent}:this.keyBindings={"ctrl+keyp":this.handlePrintEvent})}componentDidUpdate(e){if(_n(e.pageStatus)!==_n(this.props.pageStatus)){document.getElementsByTagName("html")[0].scrollTop=0}}render(){const{pageStatus:e,pages:t,theme:o,isPrintPreview:i,headerVisible:a,footerVisible:l,header:r,showClassification:s}=this.props,d=_n(e);if(!d||!(null==t?void 0:t[d]))return null;let u="100%";const c=t[d]||{};c&&!isNaN(+c.width)&&(u=+c.width+"px");const p=n.css`
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
    `;return(0,n.jsx)("div",{className:"page-renderer d-flex flex-column",css:p,ref:e=>{this.pageRef=e},"data-testid":"pageRenderer"},i&&(0,n.jsx)(y.Modal,{isOpen:!0,css:n.css`
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
          `,backdrop:!1},(0,n.jsx)(y.ModalBody,{className:"print-preview-content"},(0,n.jsx)(Fn,null))),this.renderDialog(),(0,n.jsx)(Dn,{headerJson:r,showClassification:s},a&&this.renderHeader()),Object.keys(e).map((e=>this.renderPageBody(e,o))),l&&this.renderFooter(),s&&(0,n.jsx)(Wn,{showClassification:s,position:"bottom"}),(0,n.jsx)(n.Keyboard,{bindings:this.keyBindings}))}renderHeader(){if(!this.props.header)return null;const{header:e,browserSizeMode:t,theme:o,mainSizeMode:i,showClassification:a}=this.props;return(0,n.jsx)(Nn,{headerJson:e,pageContext:this.pageContext,browserSizeMode:t,mainSizeMode:i,theme:o,showClassification:a,onHeightChange:this.updateHeaderHeight})}renderFooter(){if(!this.props.footer)return null;const{footer:e,browserSizeMode:t,mainSizeMode:o,theme:i}=this.props;return(0,n.jsx)(zn,{footerJson:e,pageContext:this.pageContext,browserSizeMode:t,mainSizeMode:o,theme:i,onHeightChange:this.updateFooterHeight})}renderPageBody(e,t){const{pageStatus:o,pages:i,isPrintPreview:a}=this.props,l=i[e];if(!l)return;const r=!!o[e];return(0,n.jsx)(En,{key:l.id,pageJson:l,pageContext:this.pageContext,browserSizeMode:this.props.browserSizeMode,visible:r,isPrintPreview:a,headerFooterHeight:this.state.headerHeight+this.state.footerHeight})}renderDialog(){const{dialogs:e,openedDialogIds:t=[],urlDialogJson:o,splashDialogJson:i,isSplashClosed:a,isPageDlgClosed:l,pageDialogJson:r,pageDialogId:s}=this.props;return(0,n.jsx)(n.React.Fragment,null,t.map((t=>{const i=e[t];return i&&i.mode===n.DialogMode.Fixed&&(0,n.jsx)(d.Provider,{key:i.id,value:Object.assign(Object.assign({},this.pageContext),{dialogId:i.id,viewOnly:!0})},(0,n.jsx)(n.AppDialog,{dialogJson:i,isCurrentDialog:i.id===(null==o?void 0:o.id),runtime:!0}))})),o&&o.mode===n.DialogMode.Fixed&&!t.includes(o.id)&&(0,n.jsx)(d.Provider,{key:o.id,value:Object.assign(Object.assign({},this.pageContext),{dialogId:o.id,viewOnly:!0})},(0,n.jsx)(n.AppDialog,{dialogJson:o,isCurrentDialog:!0,runtime:!0})),!l&&r&&(null==o?void 0:o.id)!==r.id&&(0,n.jsx)(d.Provider,{value:Object.assign(Object.assign({},this.pageContext),{dialogId:s,viewOnly:!0})},(0,n.jsx)(n.AppDialog,{dialogJson:r,runtime:!0,isOpenByPage:!0})),!a&&i&&(null==o?void 0:o.id)!==i.id&&(0,n.jsx)(d.Provider,{value:Object.assign(Object.assign({},this.pageContext),{dialogId:i.id,viewOnly:!0})},(0,n.jsx)(n.AppDialog,{dialogJson:i,runtime:!0})))}}Gn.displayName="RuntimePageRenderer";const Un=(0,n.createSelector)([e=>e.appConfig.pages,e=>e.appConfig.dialogs,e=>e.appConfig.header,e=>e.appConfig.footer,e=>e.browserSizeMode,e=>e.appConfig.mainSizeMode,e=>{var t;const o=window.jimuConfig.isBuilder?e.appStateInBuilder:e;return null===(t=null==o?void 0:o.appRuntimeInfo)||void 0===t?void 0:t.dialogInfos},e=>{var t;const o=window.jimuConfig.isBuilder?e.appStateInBuilder:e;return null===(t=null==o?void 0:o.appRuntimeInfo)||void 0===t?void 0:t.currentPageId},e=>{var t,o,n;const i=window.jimuConfig.isBuilder?e.appStateInBuilder:e,a=null===(t=null==i?void 0:i.appRuntimeInfo)||void 0===t?void 0:t.currentPageId;return null===(n=null===(o=null==i?void 0:i.appConfig)||void 0===o?void 0:o.pages[a])||void 0===n?void 0:n.autoOpenDialogId},e=>{var t;const o=window.jimuConfig.isBuilder?e.appStateInBuilder:e;return null===(t=null==o?void 0:o.appRuntimeInfo)||void 0===t?void 0:t.openedDialogIds},e=>{var t,o;return null!==(o=null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.isPrintPreview)&&void 0!==o&&o},(e,t)=>_n(t.pageStatus),(e,t)=>t.dialogId,e=>n.portalUtils.shouldShowClassificationBanner(e)],((e,t,o,n,i,a,l,r,s,d,u,c,p,g)=>{var v,y;if(!c||!e[c])return{};const h=t[Object.keys(t).find((e=>t[e].isSplash))];return{pages:e,header:o,headerVisible:!!e[c].header,footer:n,footerVisible:!!e[c].footer,browserSizeMode:i,mainSizeMode:a,splashDialogJson:h,isSplashClosed:null===(v=null==l?void 0:l[null==h?void 0:h.id])||void 0===v?void 0:v.isClosed,dialogs:t,openedDialogIds:d,pageDialogId:s,pageDialogJson:t[s],isPageDlgClosed:null===(y=null==l?void 0:l[r+"-"+s])||void 0===y?void 0:y.isClosed,urlDialogJson:t[p],isPrintPreview:u,showClassification:g}}));function _n(e){return Object.keys(e).find((t=>e[t]))}const Xn=n.ReactRedux.connect(Un)((0,dt.withTheme)(Gn));var Jn=function(e,t,o,n){return new(o||(o=Promise))((function(i,a){function l(e){try{s(n.next(e))}catch(e){a(e)}}function r(e){try{s(n.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(l,r)}s((n=n.apply(e,t||[])).next())}))};function Yn(){return Jn(this,void 0,void 0,(function*(){return yield Promise.all([s()])}))}})(),r})())}}}));