System.register(["jimu-core","jimu-ui","jimu-theme","jimu-layouts/layout-runtime"],(function(e,t){var o={},n={},i={},a={};return{setters:[function(e){o.AnimationComponent=e.AnimationComponent,o.AnimationContext=e.AnimationContext,o.AnimationPlayMode=e.AnimationPlayMode,o.AnimationStartMode=e.AnimationStartMode,o.AnimationTriggerType=e.AnimationTriggerType,o.AnimationType=e.AnimationType,o.AppDialog=e.AppDialog,o.AppMode=e.AppMode,o.BrowserSizeMode=e.BrowserSizeMode,o.ContainerType=e.ContainerType,o.DEFAULT_ANIMATION_PROPS=e.DEFAULT_ANIMATION_PROPS,o.ErrorBoundary=e.ErrorBoundary,o.ExtensionManager=e.ExtensionManager,o.FixedPosition=e.FixedPosition,o.GridItemType=e.GridItemType,o.Immutable=e.Immutable,o.IntersectionContext=e.IntersectionContext,o.Keyboard=e.Keyboard,o.LayoutItemType=e.LayoutItemType,o.LayoutParentType=e.LayoutParentType,o.LayoutType=e.LayoutType,o.OneByOneAnimation=e.OneByOneAnimation,o.PageMode=e.PageMode,o.PagePart=e.PagePart,o.ParentAnimationMode=e.ParentAnimationMode,o.React=e.React,o.ReactRedux=e.ReactRedux,o.ReactResizeDetector=e.ReactResizeDetector,o.ScreenTransitionType=e.ScreenTransitionType,o.ScreenTriggerType=e.ScreenTriggerType,o.TransitionContainer=e.TransitionContainer,o.WidgetManager=e.WidgetManager,o.WidgetState=e.WidgetState,o.WidgetType=e.WidgetType,o.appActions=e.appActions,o.appConfigUtils=e.appConfigUtils,o.classNames=e.classNames,o.createSelector=e.createSelector,o.css=e.css,o.extensionSpec=e.extensionSpec,o.getAnimationEffect=e.getAnimationEffect,o.getAppStore=e.getAppStore,o.getHoverStyle=e.getHoverStyle,o.getIndexFromProgress=e.getIndexFromProgress,o.getNextAnimationId=e.getNextAnimationId,o.hooks=e.hooks,o.i18n=e.i18n,o.jimuHistory=e.jimuHistory,o.jsx=e.jsx,o.lodash=e.lodash,o.moduleLoader=e.moduleLoader,o.polished=e.polished,o.spring=e.spring,o.translatedLocales=e.translatedLocales},function(e){n.Button=e.Button,n.DistanceUnits=e.DistanceUnits,n.FOCUSABLE_CONTAINER_CLASS=e.FOCUSABLE_CONTAINER_CLASS,n.FillType=e.FillType,n.Loading=e.Loading,n.LoadingType=e.LoadingType,n.Modal=e.Modal,n.ModalBody=e.ModalBody,n.Tab=e.Tab,n.Tabs=e.Tabs,n.Tooltip=e.Tooltip,n.defaultMessages=e.defaultMessages,n.styleUtils=e.styleUtils,n.useTrapFocusLoop=e.useTrapFocusLoop},function(e){i.useTheme=e.useTheme,i.withBuilderTheme=e.withBuilderTheme,i.withTheme=e.withTheme},function(e){a.PageVisibilityContext=e.PageVisibilityContext}],execute:function(){e((()=>{var e={462:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12"><path fill="#fff" fill-rule="evenodd" d="M12 0H7v1h4v4h1V0M0 12h5v-1H1V7H0v5" clip-rule="evenodd"></path></svg>'},3529:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M8 12c-2.667 0-5.667-1.333-7-4 1.333-2.667 4.333-4 7-4s5.667 1.333 7 4c-1.333 2.667-4.333 4-7 4m0-7c-2.618 0-4.578.967-6 3 1.422 2.033 3.382 3 6 3s4.578-.967 6-3c-1.422-2.033-3.382-3-6-3m0 5.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" clip-rule="evenodd"></path></svg>'},7568:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M11.347 2.146a.485.485 0 0 1 0 .708L5.76 8l5.587 5.146a.486.486 0 0 1 0 .708.54.54 0 0 1-.738 0l-5.956-5.5a.485.485 0 0 1 0-.708l5.956-5.5a.54.54 0 0 1 .738 0" clip-rule="evenodd"></path></svg>'},2943:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M4.653 13.854a.485.485 0 0 1 0-.708L10.24 8 4.653 2.854a.485.485 0 0 1 0-.708.54.54 0 0 1 .738 0l5.956 5.5a.485.485 0 0 1 0 .708l-5.956 5.5a.54.54 0 0 1-.738 0" clip-rule="evenodd"></path></svg>'},9238:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M13.146 13.847a.486.486 0 0 0 .708 0 .54.54 0 0 0 0-.738l-5.5-5.956a.485.485 0 0 0-.708 0l-5.5 5.956a.54.54 0 0 0 0 .738.485.485 0 0 0 .708 0L8 8.26zm0-5a.485.485 0 0 0 .708 0 .54.54 0 0 0 0-.738l-5.5-5.956a.485.485 0 0 0-.708 0l-5.5 5.956a.54.54 0 0 0 0 .738.485.485 0 0 0 .708 0L8 3.26z" clip-rule="evenodd"></path></svg>'},2838:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m8.745 8 6.1 6.1a.527.527 0 1 1-.745.746L8 8.746l-6.1 6.1a.527.527 0 1 1-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 0 1 .746-.746l6.1 6.1 6.1-6.1a.527.527 0 0 1 .746.746z"></path></svg>'},9244:e=>{"use strict";e.exports=o},1496:e=>{"use strict";e.exports=a},1888:e=>{"use strict";e.exports=i},4321:e=>{"use strict";e.exports=n}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var l={};return(()=>{"use strict";r.r(l),r.d(l,{CLICK_TOLRERANCE:()=>x,COLS_IN_ONE_ROW:()=>h,CONTEXT_MENU_ICON_SIZE:()=>m,CONTEXT_MENU_ITEM_SIZE:()=>f,ColumnLayoutViewer:()=>Bt,DEFAULT_AUTOPLAY_INTERVAL:()=>w,FixedLayoutViewer:()=>kt,GridLayoutViewer:()=>vo,LayoutContext:()=>g,LayoutEntry:()=>rt,LayoutItem:()=>$t,LayoutItemSizeModes:()=>S,LayoutZIndex:()=>b,MIN_LAYOUT_ITEM_SIZE:()=>I,OrderAdjustType:()=>y,PageContext:()=>d,PageRenderer:()=>hn,PageVisibilityContext:()=>c,RowLayoutViewer:()=>Ut,SectionRenderer:()=>Tt,ViewVisibilityContext:()=>p,ViewportVisibilityContext:()=>u,WidgetRenderer:()=>Ke,controlPanelUtils:()=>o,defaultMessages:()=>i,findLayoutBuilder:()=>nt,findLayoutViewer:()=>it,init:()=>mn,registerLayoutBuilder:()=>tt,registerLayoutViewer:()=>ot,searchUtils:()=>t,utils:()=>e});var e={};r.r(e),r.d(e,{autoBindHandlers:()=>ne,calHeightOfLayoutItem:()=>Se,contains:()=>ke,emptyFunc:()=>oe,expandStyleArray:()=>be,fromRatio:()=>ue,gcd:()=>Be,getActivePagePart:()=>Pe,getAppConfig:()=>Te,getCurrentDialogId:()=>je,getCurrentDialogRootLayoutId:()=>Me,getCurrentPageId:()=>Re,getCurrentPageRootLayoutId:()=>$e,getCurrentSizeMode:()=>Ce,getFooterRootLayoutId:()=>Oe,getHeaderRootLayoutId:()=>Le,getLayoutItemSizeMode:()=>Ne,getMaximumId:()=>ie,getValueOfBBox:()=>se,handleOnebyOneAnimation:()=>Fe,intersects:()=>Ae,isEmptyLayout:()=>re,isFunctionalWidget:()=>ve,isNumber:()=>le,isPercentage:()=>ae,isRTL:()=>xe,isWidgetHasEmbeddedLayout:()=>ye,isWidgetPlaceholder:()=>he,mapStateToLayoutItemProps:()=>pe,mapStateToLayoutProps:()=>ce,mapStateToWidgetProps:()=>ge,normalizeLinearUnit:()=>Ee,parseAspectRatio:()=>we,relativeClientRect:()=>Ie,replaceBoundingBox:()=>fe,shouldUseAspectRatio:()=>ze,toRatio:()=>de,updateBoundingBoxProp:()=>me});var t={};r.r(t),r.d(t,{findLayoutId:()=>H,findLayoutItem:()=>T,findParentLayoutInfo:()=>C,getBlockAnchorPointsInPage:()=>Q,getBrowserSizeModeByLayoutId:()=>X,getBrowserSizeModeByLayoutIdAndWidgetId:()=>_,getChildrenContents:()=>G,getContentContainerInfo:()=>A,getContentIdInLayoutItem:()=>R,getContentLayoutInfosInOneSizeMode:()=>U,getContentLayoutItem:()=>$,getContentRootContainerInfo:()=>E,getContentsInContainer:()=>z,getContentsInContainerRecursive:()=>B,getContentsInContainerRecursiveAdv:()=>F,getContentsInLayout:()=>j,getContentsInLayoutRecursive:()=>P,getContentsInLayoutWithRecrusiveLayouts:()=>M,getContentsInTheSameContainer:()=>Z,getContentsInTheSameRootContainer:()=>K,getLayoutInfosByType:()=>O,getLayoutInfosHoldcontent:()=>D,getLayoutItemIds:()=>L,getMapWidgets:()=>te,getParentWidgetIdOfContent:()=>V,getPendingLayoutItemsFromOtherSizeMode:()=>Ye,getPendingLayoutItemsFromOtherSizeModeInDialog:()=>_e,getPendingLayoutItemsFromOtherSizeModeInPage:()=>Ge,getPendingLayoutItemsInDialog:()=>Ue,getPendingLayoutItemsInLayoutWithDeep:()=>Xe,getPendingLayoutItemsInPage:()=>Ve,getRelatedLayoutInfosInWidgetByLayoutInfo:()=>Y,getRelatedLayoutItemsInWidgetByLayoutInfo:()=>J,getRootContainerInfoOfLayout:()=>N,getScreenAnchorPointsInPage:()=>ee,getSectionInfo:()=>De,getWidgetIdThatUseTheLayoutId:()=>k});var o={};r.r(o),r.d(o,{convertToStyle:()=>qo,findPageRelatedControllerIds:()=>Yo,panelTransformStyle:()=>Jo});var n=r(9244);const i={previousView:"Previous view",nextView:"Next view",originTL:"Top left as origin",originTR:"Top right as origin",originBL:"Bottom left as origin",originBR:"Bottom right as origin",alignLeft:"Align left",alignRight:"Align right",alignTop:"Align top",alignCenter:"Align center",alignHCenter:"Horizontal center",alignVCenter:"Vertical center",alignBottom:"Align bottom",alignStretch:"Align stretch",sendBackward:"Send backward",bringForward:"Bring forward",sendToBack:"Send to back",bringToFront:"Bring to front",zoomoutFixed:"Zoom out fixed",order:"Order",moveToLeft:"Move to left",moveToRight:"Move to right",moveToTop:"Move to top",moveToBottom:"Move to bottom",addView:"New view",duplicateScreen:"Duplicate screen",deleteScreen:"Delete screen",applyToFirstPanel:"Apply to the first panel",deleteView:"Delete view",duplicateView:"Duplicate view",insertABlock:"Insert block",insertAScreenGroup:"Insert screen group",moveup:"Move up",movedown:"Move down",chooseTemplate:"Choose a {type} template",chooseHeaderTemplate:"Choose a header template",chooseFooterTemplate:"Choose a footer template",dropWidgetToAdd:"Or drag a widget here",snapToLeft:"Snap to left",snapToTop:"Snap to top",snapToBottom:"Snap to bottom",snapToRight:"Snap to right",fullWidth:"Full width",fullHeight:"Full height",fullSize:"Full size",restoreSize:"Restore size",pendingTip:"Move to the pending list",setting:"Settings",dragToMove:"Drag to move {label}",lockLayout:"Lock position and size",unlockLayout:"Unlock position and size",editHeader:"Edit header",editFooter:"Edit footer",transform:"Transform",rotation:"Rotation",angle:"Angle",floating:"Pin",sinking:"Unpin",floatingArea:"Floating area",changeToAuto:"Change to auto",changeToCustom:"Change to custom",positionType:"Position type",sticky:"Sticky",fixed:"Fixed",flow:"Flow",stack:"Stack",fixedAtTop:"Floating at the top when scrolling",actNormal:"Act as normal widget",hideInDesignView:"Hide in design view",showInDesignView:"Show in design view",unlockGridItem:"Unlock this widget to reorganize its internal widgets.",lockGridItem:"Lock this widget.",splitHorizontally:"Split horizontally",splitVertically:"Split vertically"};var a=function(e,t,o,n){return new(o||(o=Promise))((function(i,a){function r(e){try{s(n.next(e))}catch(e){a(e)}}function l(e){try{s(n.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(r,l)}s((n=n.apply(e,t||[])).next())}))};function s(){return a(this,void 0,void 0,(function*(){let e=(0,n.getAppStore)().getState().appContext.locale;return e=n.i18n.getLocaleToLoad(e,n.translatedLocales),e?yield n.i18n.loadLocaleMessages("jimu-layouts/lib/translations",e).then((e=>((0,n.getAppStore)().dispatch(n.appActions.i18nMessagesLoaded("jimu-layouts",e)),n.i18n.resetIntls(),e))):Promise.resolve(i)}))}const d=n.React.createContext({viewOnly:!0}),u=n.React.createContext(!0),c=n.React.createContext(!0),p=n.React.createContext({isInView:!1,isInCurrentView:!1}),g=(n.React.createContext(""),n.React.createContext({}));var y,v=r(4321);!function(e){e[e.BringForward=0]="BringForward",e[e.SendBackward=1]="SendBackward",e[e.BringToFront=2]="BringToFront",e[e.SendToBack=3]="SendToBack"}(y||(y={}));const h=12,f=28,m=16,I=16,x=5,w=3;var b,S;function T(e,t){var o,n,i;if(!t)return null;const{layoutId:a,layoutItemId:r}=t;return null===(i=null===(n=null===(o=e.layouts)||void 0===o?void 0:o[a])||void 0===n?void 0:n.content)||void 0===i?void 0:i[r]}function C(e,t,o){var i,a,r,l,s,d,u,c,p,g;const{layoutId:y}=e,v=t.layouts[y];switch(null===(i=null==v?void 0:v.parent)||void 0===i?void 0:i.type){case n.LayoutParentType.View:{const e=t.views[v.parent.id],n=t.sections[e.parent];return 1===(null===(r=null===(a=null==n?void 0:n.parent)||void 0===a?void 0:a[o])||void 0===r?void 0:r.length)?n.parent[o][0]:(null===(s=null===(l=null==n?void 0:n.parent)||void 0===l?void 0:l[o])||void 0===s?void 0:s.length)>1?C(n.parent[o][0],t,o):null}case n.LayoutParentType.Widget:{const e=t.widgets[v.parent.id];return 1===(null===(u=null===(d=null==e?void 0:e.parent)||void 0===d?void 0:d[o])||void 0===u?void 0:u.length)?e.parent[o][0]:(null===(p=null===(c=null==e?void 0:e.parent)||void 0===c?void 0:c[o])||void 0===p?void 0:p.length)>1?C(e.parent[o][0],t,o):null}case n.LayoutParentType.Screen:{const e=t.screens[v.parent.id];return null===(g=t.screenGroups[e.parent].parent)||void 0===g?void 0:g[o]}default:return null}}function R(e){switch(e.type){case n.LayoutItemType.Widget:return"string"==typeof e.widgetId?e.widgetId:null;case n.LayoutItemType.Section:return"string"==typeof e.sectionId?e.sectionId:null;case n.LayoutItemType.ScreenGroup:return"string"==typeof e.screenGroupId?e.screenGroupId:null;default:return null}}function j(e,t,o=!1){return(null==e?void 0:e.content)?Object.keys(e.content).filter((n=>e.content[n].type===t&&!!R(e.content[n])&&(o||!e.content[n].isPending))).map((t=>R(e.content[t]))):[]}function P(e,t,o,i,a=!1){let r=[];const l=j(e.layouts[t],n.LayoutItemType.Widget,a),s=j(e.layouts[t],n.LayoutItemType.Section,a),d=j(e.layouts[t],n.LayoutItemType.ScreenGroup,a);o===n.LayoutItemType.Widget?r=r.concat(l):o===n.LayoutItemType.Section?r=r.concat(s):o===n.LayoutItemType.ScreenGroup&&(r=r.concat(d));return l.filter((t=>{var o,i,a,r,l;return(null===(i=null===(o=e.widgets[t])||void 0===o?void 0:o.manifest)||void 0===i?void 0:i.widgetType)===n.WidgetType.Layout||(null===(l=null===(r=null===(a=e.widgets[t])||void 0===a?void 0:a.manifest)||void 0===r?void 0:r.properties)||void 0===l?void 0:l.hasEmbeddedLayout)})).forEach((t=>{var n;Object.keys(null!==(n=e.widgets[t].layouts)&&void 0!==n?n:{}).forEach((n=>{const l=H(e.widgets[t].layouts[n],i,e.mainSizeMode);r=r.concat(P(e,l,o,i,a))}))})),s.forEach((t=>{var n,l;null===(l=null===(n=e.sections)||void 0===n?void 0:n[t])||void 0===l||l.views.forEach((t=>{const n=H(e.views[t].layout,i,e.mainSizeMode);e.views[t]&&n&&(r=r.concat(P(e,n,o,i,a)))}))})),d.forEach((t=>{var n,l;null===(l=null===(n=e.screenGroups)||void 0===n?void 0:n[t])||void 0===l||l.screens.forEach((t=>{var n,l,s,d,u;const c=H(null===(l=null===(n=e.screens)||void 0===n?void 0:n[t])||void 0===l?void 0:l.main.layout,i,e.mainSizeMode);c&&(r=r.concat(P(e,c,o,i,a)));const p=H(null===(u=null===(d=null===(s=e.screens)||void 0===s?void 0:s[t])||void 0===d?void 0:d.panel)||void 0===u?void 0:u.layout,i,e.mainSizeMode);p&&(r=r.concat(P(e,p,o,i,a)))}))})),r}function M(e,t,o,i,a=!1){let r=[];const l=j(e.layouts[t],n.LayoutItemType.Widget,a),s=j(e.layouts[t],n.LayoutItemType.Section,a),d=j(e.layouts[t],n.LayoutItemType.ScreenGroup,a);r=o===n.LayoutItemType.Widget?r.concat(l):o===n.LayoutItemType.ScreenGroup?r.concat(d):r.concat(s);return l.filter((t=>e.widgets&&e.widgets[t]&&(e.widgets[t].manifest.widgetType===n.WidgetType.Layout||e.widgets[t].manifest.properties.hasEmbeddedLayout))).forEach((t=>{var n;Object.keys(null!==(n=e.widgets[t].layouts)&&void 0!==n?n:{}).forEach((n=>{const l=H(e.widgets[t].layouts[n],i,e.mainSizeMode);r=r.concat(M(e,l,o,i,a))}))})),r}function $(e,t,o){if(!(null==e?void 0:e.content))return null;const n=Object.keys(e.content).find((n=>e.content[n].type===o&&(e.content[n].widgetId===t||e.content[n].sectionId===t||e.content[n].screenGroupId===t)&&!e.content[n].isPending));return e.content[n]}function L(e,t,o=!1){const n=e.layouts[t];return(null==n?void 0:n.content)?o?Object.keys(n.content):Object.keys(n.content).filter((e=>!n.content[e].isPending)):[]}function O(e,t,o=!1){return(null==e?void 0:e.content)?Object.keys(e.content).filter((n=>e.content[n].type===t&&!!R(e.content[n])&&(o||!e.content[n].isPending))).map((t=>({layoutId:e.id,layoutItemId:t}))):[]}function k(e,t){var o;const i=e.layouts[t];return(null===(o=null==i?void 0:i.parent)||void 0===o?void 0:o.type)===n.LayoutParentType.Widget?i.parent.id:null}function A(e,t,o,i,a=!1){var r;const l=W(e,t,o,i,a);if(l){const t=e.layouts[l.layoutId];switch(null===(r=t.parent)||void 0===r?void 0:r.type){case n.LayoutParentType.Page:return{type:n.ContainerType.Page,id:t.parent.id};case n.LayoutParentType.Dialog:return{type:n.ContainerType.Dialog,id:t.parent.id};case n.LayoutParentType.Header:return{type:n.ContainerType.Header,id:"header"};case n.LayoutParentType.Footer:return{type:n.ContainerType.Footer,id:"footer"};case n.LayoutParentType.View:return{type:n.ContainerType.View,id:t.parent.id};case n.LayoutParentType.Screen:return{type:e.screens[t.parent.id].main.layout[i]===l.layoutId?n.ContainerType.ScreenMain:n.ContainerType.ScreenPanel,id:t.parent.id};case n.LayoutParentType.Widget:return A(e,t.parent.id,o,i,a)}}return null}function E(e,t,o,n,i=!1){let a=W(e,t,o,n,i),r=n;if(a||(a=W(e,t,o,e.mainSizeMode,i),r=e.mainSizeMode),a)return N(e,a.layoutId,r)}function N(e,t,o){var i;let a=e.layouts[t];for(;(null==a?void 0:a.parent)&&[n.LayoutParentType.Screen,n.LayoutParentType.View,n.LayoutParentType.Widget].includes(a.parent.type);){const n=C({layoutId:t},e,o);t=null==n?void 0:n.layoutId,a=e.layouts[t]}switch(null===(i=null==a?void 0:a.parent)||void 0===i?void 0:i.type){case n.LayoutParentType.Dialog:return{type:n.ContainerType.Dialog,id:a.parent.id};case n.LayoutParentType.Page:return{type:n.ContainerType.Page,id:a.parent.id};case n.LayoutParentType.Header:return{type:n.ContainerType.Header,id:"header"};case n.LayoutParentType.Footer:return{type:n.ContainerType.Footer,id:"footer"}}}function z(e,t,o,i,a=!1){var r,l,s,d,u,c;let p;switch(t.type){case n.ContainerType.Page:return p=H(null===(l=null===(r=e.pages)||void 0===r?void 0:r[t.id])||void 0===l?void 0:l.layout,i,e.mainSizeMode),p?M(e,p,o,i,a):[];case n.ContainerType.Header:return p=H(null===(s=e.header)||void 0===s?void 0:s.layout,i,e.mainSizeMode),p?M(e,p,o,i,a):[];case n.ContainerType.Footer:return p=H(null===(d=e.footer)||void 0===d?void 0:d.layout,i,e.mainSizeMode),p?M(e,p,o,i,a):[];case n.ContainerType.View:return p=H(null===(c=null===(u=e.views)||void 0===u?void 0:u[t.id])||void 0===c?void 0:c.layout,i,e.mainSizeMode),p?M(e,p,o,i,a):[];case n.ContainerType.Dialog:return p=H(e.dialogs[t.id].layout,i,e.mainSizeMode),p?M(e,p,o,i,a):[];case n.ContainerType.ScreenMain:case n.ContainerType.ScreenPanel:if(!e.screens||!e.screens[t.id])return[];const g=H(e.screens[t.id].main.layout,i,e.mainSizeMode);if(!g)return[];const y=M(e,g,o,i,a);if(e.screens[t.id].panel){const n=M(e,H(e.screens[t.id].panel.layout,i,e.mainSizeMode),o,i,a);return y.concat(n)}return y}}function B(e,t,o,i,a=!1){var r,l,s,d,u,c;let p;switch(t.type){case n.ContainerType.Page:return p=H(null===(l=null===(r=e.pages)||void 0===r?void 0:r[t.id])||void 0===l?void 0:l.layout,i,e.mainSizeMode),p?P(e,p,o,i,a):[];case n.ContainerType.Header:return p=H(null===(s=e.header)||void 0===s?void 0:s.layout,i,e.mainSizeMode),p?P(e,p,o,i,a):[];case n.ContainerType.Footer:return p=H(null===(d=e.footer)||void 0===d?void 0:d.layout,i,e.mainSizeMode),p?P(e,p,o,i,a):[];case n.ContainerType.View:return p=H(null===(c=null===(u=e.views)||void 0===u?void 0:u[t.id])||void 0===c?void 0:c.layout,i,e.mainSizeMode),p?P(e,p,o,i,a):[];case n.ContainerType.Dialog:return p=H(e.dialogs[t.id].layout,i,e.mainSizeMode),p?P(e,p,o,i,a):[];case n.ContainerType.ScreenMain:case n.ContainerType.ScreenPanel:if(!e.screens||!e.screens[t.id])return[];const g=H(e.screens[t.id].main.layout,i,e.mainSizeMode);if(!g)return[];const y=P(e,g,o,i);if(e.screens[t.id].panel){const n=P(e,H(e.screens[t.id].panel.layout,i,e.mainSizeMode),o,i);return y.concat(n)}return y}}function F(e,t,o,i,a){const r=t=>{let r=[];return r=a.includeOtherSizeMode?r.concat(B(e,t,o,n.BrowserSizeMode.Large,a.includePending),B(e,t,o,n.BrowserSizeMode.Medium,a.includePending),B(e,t,o,n.BrowserSizeMode.Small,a.includePending)):B(e,t,o,i,a.includePending),r=Array.from(new Set(r)),r};if(t.type===n.ContainerType.Dialog)return r(t);if(t.type===n.ContainerType.Page){const o=e.pages[t.id];let i=r(t);return o.header&&(i=i.concat(r({type:n.ContainerType.Header,id:"header"}))),o.footer&&(i=i.concat(r({type:n.ContainerType.Footer,id:"footer"}))),i=Array.from(new Set(i)),i}if(t.type===n.ContainerType.Header){const o=e.pages[a.currentPageId];let i=r(t).concat(r({type:n.ContainerType.Page,id:a.currentPageId}));return(null==o?void 0:o.footer)&&(i=i.concat(r({type:n.ContainerType.Footer,id:"footer"}))),i=Array.from(new Set(i)),i}if(t.type===n.ContainerType.Footer){const o=e.pages[a.currentPageId];let i=r(t).concat(r({type:n.ContainerType.Page,id:a.currentPageId}));return(null==o?void 0:o.header)&&(i=i.concat(r({type:n.ContainerType.Header,id:"header"}))),i=Array.from(new Set(i)),i}}function H(e,t,o){return e?e[t]||e[o]:null}function W(e,t,o,i,a=!0){var r,l,s,d,u;switch(o){case n.LayoutItemType.ScreenGroup:{const o=null===(r=e.screenGroups[t].parent)||void 0===r?void 0:r[i],n=T(e,o);return a||!(null==n?void 0:n.isPending)?o:null}case n.LayoutItemType.Section:case n.LayoutItemType.Widget:{let r;if(o===n.LayoutItemType.Widget&&(r=e.widgets[t]),o===n.LayoutItemType.Section&&(r=e.sections[t]),1===(null===(s=null===(l=null==r?void 0:r.parent)||void 0===l?void 0:l[i])||void 0===s?void 0:s.length)){const t=r.parent[i][0],o=T(e,t);return a||!(null==o?void 0:o.isPending)?t:null}if((null===(u=null===(d=null==r?void 0:r.parent)||void 0===d?void 0:d[i])||void 0===u?void 0:u.length)>1){const t=r.parent[i][0],o=e.layouts[t.layoutId];if(null==o?void 0:o.parent)return W(e,o.parent.id,n.LayoutItemType.Widget,i,a)}}}return null}function D(e,t,o,i){switch(t){case n.LayoutItemType.ScreenGroup:{const t=e.screenGroups[o];if(t.parent)return i?[t.parent[i]]:Object.values(t.parent)}case n.LayoutItemType.Section:case n.LayoutItemType.Widget:{let a;if(t===n.LayoutItemType.Widget&&(a=e.widgets[o]),t===n.LayoutItemType.Section&&(a=e.sections[o]),null==a?void 0:a.parent){if(i)return a.parent[i];const e=[];return Object.values(a.parent).forEach((t=>{e.push(...t)})),e}}}return[]}function V(e,t,o,i){var a,r,l,s,d,u,c;let p;if(o===n.LayoutItemType.Widget){const o=e.widgets[t];p=null===(l=null===(r=null===(a=null==o?void 0:o.parent)||void 0===a?void 0:a[i])||void 0===r?void 0:r[0])||void 0===l?void 0:l.layoutId}if(o===n.LayoutItemType.Section){const o=e.sections[t];p=null===(u=null===(d=null===(s=null==o?void 0:o.parent)||void 0===s?void 0:s[i])||void 0===d?void 0:d[0])||void 0===u?void 0:u.layoutId}if(p){const t=e.layouts[p];if((null===(c=null==t?void 0:t.parent)||void 0===c?void 0:c.type)===n.LayoutParentType.Widget)return t.parent.id}return null}function G(e,t,o,n){const i=e.widgets[t];if(!i.layouts)return[];let a=[];return Object.keys(i.layouts).forEach((t=>{Object.keys(i.layouts[t]).forEach((r=>{const l=e.layouts[i.layouts[t][r]];a=a.concat(j(l,o,n))}))})),Array.from(new Set(a))}function U(e,t,o,i){var a,r,l;switch(o){case n.LayoutItemType.ScreenGroup:{const o=e.screenGroups[t];if(null===(a=o.parent)||void 0===a?void 0:a[i])return[o.parent[i]]}case n.LayoutItemType.Section:case n.LayoutItemType.Widget:{let a;if(o===n.LayoutItemType.Widget&&(a=e.widgets[t]),o===n.LayoutItemType.Section&&(a=e.sections[t]),(null===(l=null===(r=null==a?void 0:a.parent)||void 0===r?void 0:r[i])||void 0===l?void 0:l.length)>0)return a.parent[i]}}return[]}function _(e,t,o){const n=e.widgets[o];if(!n)return;let i;return Object.keys(n.layouts).find((e=>{if(Object.keys(n.layouts[e]).find((o=>{if(n.layouts[e][o]===t)return i=o,!0})))return!0})),i}function X(e,t){return n.appConfigUtils.getSizeModeOfALayout(e,t)}function Y(e,t,o,i){if(!e.widgets[o])return[];const a=e.layouts[t.layoutId]&&e.layouts[t.layoutId].content&&e.layouts[t.layoutId].content[t.layoutItemId];if(!a)return[];const r=a.type;let l;return r===n.LayoutItemType.Section?l=a.sectionId:r===n.LayoutItemType.Widget&&(l=a.widgetId),l?q(e,l,r,o,i):function(e,t,o){const n=e.widgets[t];if(!n)return!1;let i=!1;return n.layouts&&Object.keys(n.layouts).some((t=>Object.keys(n.layouts[t]).some((a=>{const r=n.layouts[t][a];return L(e,r,!0).some((e=>o.layoutId===r&&o.layoutItemId===e&&(i=!0,!0)))})))),i}(e,o,t)?[t]:[]}function J(e,t,o,n){return Y(e,t,o,n).map((t=>e.layouts[t.layoutId][t.layoutItemId]))}function q(e,t,o,i,a){const r=e.widgets[i];if(!r||!t)return[];const l=[];return r.layouts&&Object.keys(r.layouts).forEach((i=>{const s=r.layouts[i][a],d=e.layouts[s];d&&d.content&&Object.keys(d.content).forEach((i=>{const r=d.content[i];if(r.type!==o||r.widgetId!==t&&r.sectionId!==t&&r.screenGroupId!==t){if(r.type===n.LayoutItemType.Widget){const i=e.widgets[r.widgetId];i&&i.manifest.widgetType===n.WidgetType.Layout&&l.push(...q(e,t,o,i.id,a))}}else l.push({layoutId:d.id,layoutItemId:r.id})}))})),l}function Z(e,t,o,n,i,a=!1){const r=A(e,t,o,i,a);return r?z(e,r,n,i,a):[]}function K(e,t,o,n,i,a=!1){const r=E(e,t,o,i,a);return r?B(e,r,n,i,a):[]}function Q(e,t,o){var i,a;const r=e.pages[t],l=null===(i=null==r?void 0:r.layout)||void 0===i?void 0:i[o],s=e.layouts[l],d=[];return(null==s?void 0:s.type)===n.LayoutType.FlowLayout&&Object.keys(null!==(a=s.content)&&void 0!==a?a:{}).sort().forEach((t=>{var o;const i=s.content[t];if(!i.isPending&&!(null===(o=i.setting)||void 0===o?void 0:o.isFloating)&&i.type===n.LayoutItemType.Widget){const o=function(e,t){const{layoutId:o,layoutItemId:n}=t,i=e.layouts[o].content[n],a=e.widgets[i.widgetId];if(a)return{label:a.label,id:`${o}_block_${n}`};return null}(e,{layoutId:l,layoutItemId:t});o&&d.push(o)}})),d}function ee(e,t,o){var i,a;const r=e.pages[t],l=null===(i=null==r?void 0:r.layout)||void 0===i?void 0:i[o],s=e.layouts[l],d=[];return(null==s?void 0:s.type)===n.LayoutType.FlowLayout&&Object.keys(null!==(a=s.content)&&void 0!==a?a:{}).sort().forEach((t=>{var o;const i=s.content[t];if(!i.isPending&&!(null===(o=i.setting)||void 0===o?void 0:o.isFloating)&&i.type===n.LayoutItemType.ScreenGroup){const t=e.screenGroups[i.screenGroupId],o=[];null==t||t.screens.forEach((t=>{const n=function(e,t,o){const n=e.screens[o];if(n)return{label:n.label,id:`${t}_screen_${o}`};return null}(e,l,t);n&&o.push(n)})),d.push({id:t.id,label:t.label,screens:o})}})),d}function te(e,t,o,i){const a=[],r={id:i,type:o,maps:F(e,{type:o,id:i},n.LayoutItemType.Widget,t,{includePending:!1,includeOtherSizeMode:!1}).filter((t=>e.widgets[t].manifest.properties.canCreateMapView))};return a.push(r),Object.keys(e.pages).forEach((o=>{if(o===i)return;const r={id:o,type:n.ContainerType.Page,maps:B(e,{id:o,type:n.ContainerType.Page},n.LayoutItemType.Widget,t).filter((t=>e.widgets[t].manifest.properties.canCreateMapView))};a.push(r)})),Object.keys(e.dialogs||{}).forEach((o=>{if(o===i)return;const r={id:o,type:n.ContainerType.Dialog,maps:B(e,{id:o,type:n.ContainerType.Dialog},n.LayoutItemType.Widget,t).filter((t=>e.widgets[t].manifest.properties.canCreateMapView))};a.push(r)})),a}!function(e){e.Auto="auto",e[e.Normal=0]="Normal",e[e.BoundaryDropArea=10]="BoundaryDropArea",e[e.DragMoveTip=20]="DragMoveTip",e[e.HandlerTools=30]="HandlerTools",e[e.DraggingItem=40]="DraggingItem"}(b||(b={})),function(e){e.Auto="AUTO",e.Stretch="STRETCH",e.Custom="CUSTOM"}(S||(S={}));const oe=()=>{};function ne(e,t){t.forEach((t=>{e[t]&&(e[t]=e[t].bind(e))}))}function ie(e){let t=-1;return e.content&&Object.keys(e.content).forEach((e=>{const o=parseInt(e,10);o>t&&(t=o)})),t}function ae(e){return/^-?\d*(\.\d+)?%$/.test(e)}function re(e){var t;const o=Object.keys(null!==(t=e.content)&&void 0!==t?t:{});if(0===o.length)return!0;return!o.some((t=>!e.content[t].isPending))}function le(e){const t=parseFloat(e);return!isNaN(t)&&isFinite(t)}function se(e,t){return null==(null==e?void 0:e[t])?null:"string"==typeof e[t]?e[t]:le(e[t])?`${Math.round(parseFloat(e[t]))}px`:null}function de(e,t){return`${(100*e/t).toFixed(1)}%`}function ue(e,t){return parseFloat(`${e}`)*t/100}const ce=(0,n.createSelector)([e=>e.appConfig.mainSizeMode,e=>e.browserSizeMode,(e,t)=>{var o,i,a,r,l;let s;if(e.browserSizeMode===e.appConfig.mainSizeMode)s=!0;else{let r;(null===(o=t.layouts)||void 0===o?void 0:o[e.browserSizeMode])?r=e.browserSizeMode:(null===(i=t.layouts)||void 0===i?void 0:i[e.appConfig.mainSizeMode])&&(r=e.appConfig.mainSizeMode);const l=null===(a=t.layouts)||void 0===a?void 0:a[r],d=N(e.appConfig,l,r);if((null==d?void 0:d.type)===n.ContainerType.Header)s=null!=e.appConfig.header.layout[e.browserSizeMode];else if((null==d?void 0:d.type)===n.ContainerType.Footer)s=null!=e.appConfig.footer.layout[e.browserSizeMode];else if((null==d?void 0:d.type)===n.ContainerType.Dialog){s=null!=e.appConfig.dialogs[d.id].layout[e.browserSizeMode]}else if((null==d?void 0:d.type)===n.ContainerType.Page){s=null!=e.appConfig.pages[d.id].layout[e.browserSizeMode]}}if(s&&(null===(r=t.layouts)||void 0===r?void 0:r[e.browserSizeMode])){const o=t.layouts[e.browserSizeMode];return e.appConfig.layouts[o]}const d=null===(l=t.layouts)||void 0===l?void 0:l[e.appConfig.mainSizeMode];return e.appConfig.layouts[d]}],((e,t,o)=>({mainSizeMode:e,browserSizeMode:t,layout:o}))),pe=(0,n.createSelector)([(e,t)=>{var o,n,i;const{layoutId:a,layoutItemId:r}=t;return null===(i=null===(n=null===(o=e.appConfig.layouts)||void 0===o?void 0:o[a])||void 0===n?void 0:n.content)||void 0===i?void 0:i[r]},(e,t)=>{var o,i,a,r,l,s;const{layoutId:d,layoutItemId:u}=t,c=null===(a=null===(i=null===(o=e.appConfig.layouts)||void 0===o?void 0:o[d])||void 0===i?void 0:i.content)||void 0===a?void 0:a[u];if((null==c?void 0:c.type)===n.LayoutItemType.Widget&&c.widgetId){const t=e.appConfig.widgets[c.widgetId];return null!==(s=null===(l=null===(r=null==t?void 0:t.manifest)||void 0===r?void 0:r.properties)||void 0===l?void 0:l.watchViewportVisibility)&&void 0!==s&&s}return!1},e=>{var t;return null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.selection},e=>{var t;return null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.animationPreview},e=>{var t;return null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.hoverPreview},(e,t)=>t.layoutId],((e,t,o,n,i,a)=>{var r;if(!e)return{layoutItem:null,selected:!1};let l=!1;const s=null!==(r=e.isPending)&&void 0!==r&&r;o&&(l=o.layoutId===a&&o.layoutItemId===e.id);const d={selected:l,watchViewportVisibility:t,layoutItem:s?null:e,autoScroll:l?o.autoScroll:void 0};if(l&&(null==n?void 0:n.layoutInfo)){const{layoutId:t,layoutItemId:o}=n.layoutInfo;d.animationPreview=t===a&&o===e.id,d.playMode=d.animationPreview?n.playMode:null,d.previewId=d.animationPreview?n.id:null}else if(l&&(null==i?void 0:i.layoutInfo)){const{layoutId:t,layoutItemId:o}=i.layoutInfo;d.hoverPreview=t===a&&o===e.id,d.previewId=d.hoverPreview?i.id:null}return d})),ge=(0,n.createSelector)([(e,t)=>{var o,i,a;const{layoutId:r,layoutItemId:l}=t,s=null===(a=null===(i=null===(o=e.appConfig.layouts)||void 0===o?void 0:o[r])||void 0===i?void 0:i.content)||void 0===a?void 0:a[l];if((null==s?void 0:s.type)===n.LayoutItemType.Widget&&s.widgetId)return e.appConfig.widgets[s.widgetId]},(e,t)=>{var o,i,a,r;const{layoutId:l,layoutItemId:s}=t,d=null===(a=null===(i=null===(o=e.appConfig.layouts)||void 0===o?void 0:o[l])||void 0===i?void 0:i.content)||void 0===a?void 0:a[s];if((null==d?void 0:d.type)===n.LayoutItemType.Widget&&!d.widgetId)return null===(r=d.setting)||void 0===r?void 0:r.placeholderStyle},(e,t)=>{var o,i,a;const{layoutId:r,layoutItemId:l}=t,s=null===(a=null===(i=null===(o=e.appConfig.layouts)||void 0===o?void 0:o[r])||void 0===i?void 0:i.content)||void 0===a?void 0:a[l];if((null==s?void 0:s.type)===n.LayoutItemType.Widget&&s.widgetId)return e.widgetsRuntimeInfo[s.widgetId]},(e,t)=>{var o,i,a;const{layoutId:r,layoutItemId:l}=t,s=null===(a=null===(i=null===(o=e.appConfig.layouts)||void 0===o?void 0:o[r])||void 0===i?void 0:i.content)||void 0===a?void 0:a[l];if((null==s?void 0:s.type)===n.LayoutItemType.Widget&&!s.widgetId)return e.widgetsState[s.widgetId]},(e,t)=>{var o,i;const{layoutId:a}=t,r=null===(o=e.appConfig.layouts)||void 0===o?void 0:o[a];if((null===(i=r.parent)||void 0===i?void 0:i.type)===n.LayoutParentType.Widget){const t=r.parent.id,o=e.appConfig.widgets[t];return/widgets\/common\/controller\/?/.test(o.uri)}return!1}],((e,t,o,i,a)=>{var r,l,s,d,u,c,p,g,y,v,h,f,m,I,x,w;const b=null===(l=null===(r=null==e?void 0:e.manifest)||void 0===r?void 0:r.properties)||void 0===l?void 0:l.supportInlineEditing;return{hasEmbeddedLayout:(null===(d=null===(s=null==e?void 0:e.manifest)||void 0===s?void 0:s.properties)||void 0===d?void 0:d.hasEmbeddedLayout)&&Object.keys(null!==(u=e.layouts)&&void 0!==u?u:{}).length>0,supportInlineEditing:b,supportRepeat:null===(p=null===(c=null==e?void 0:e.manifest)||void 0===c?void 0:c.properties)||void 0===p?void 0:p.supportRepeat,isClassLoaded:null!==(g=null==o?void 0:o.isClassLoaded)&&void 0!==g&&g,isInlineEditing:b&&(null==o?void 0:o.isInlineEditing),isInController:a,useDragHandler:null!==(h=null===(v=null===(y=null==e?void 0:e.manifest)||void 0===y?void 0:y.properties)||void 0===v?void 0:v.useDragHandler)&&void 0!==h&&h,widgetStyle:null!=e?e.style:t,canCrossLayoutBoundary:null===(m=null===(f=null==e?void 0:e.manifest)||void 0===f?void 0:f.properties)||void 0===m?void 0:m.canCrossLayoutBoundary,hasExtension:(null===(x=null===(I=null==e?void 0:e.manifest)||void 0===I?void 0:I.extensions)||void 0===x?void 0:x.length)>0,widgetJson:e,widgetId:null==e?void 0:e.id,isFunctionalWidget:(null===(w=null==e?void 0:e.manifest)||void 0===w?void 0:w.widgetType)!==n.WidgetType.Layout,widgetState:i}}));function ye(e,t){var o,n,i,a;const r=null===(o=null==t?void 0:t.widgets)||void 0===o?void 0:o[e];return!!(null===(i=null===(n=null==r?void 0:r.manifest)||void 0===n?void 0:n.properties)||void 0===i?void 0:i.hasEmbeddedLayout)&&Object.keys(null!==(a=null==r?void 0:r.layouts)&&void 0!==a?a:{}).length>0}function ve(e,t){var o,i;const a=null===(o=null==t?void 0:t.widgets)||void 0===o?void 0:o[e];return(null===(i=null==a?void 0:a.manifest)||void 0===i?void 0:i.widgetType)!==n.WidgetType.Layout}function he(e,t){var o,i;if(!t||t.itemType!==n.LayoutItemType.Widget)return!1;if(t.layoutInfo){const{layoutId:n,layoutItemId:a}=t.layoutInfo,r=null===(i=null===(o=e.layouts)||void 0===o?void 0:o[n].content)||void 0===i?void 0:i[a];if(r&&!r.widgetId)return!0}return!t.layoutInfo&&!t.uri}function fe(e,t,o){if(!e)return(0,n.Immutable)({left:ae(t.left)?t.left:`${Math.round(t.left)}px`,right:ae(t.right)?t.right:`${Math.round(t.right)}px`,top:ae(t.top)?t.top:`${Math.round(t.top)}px`,bottom:ae(t.bottom)?t.bottom:`${Math.round(t.bottom)}px`,width:ae(t.width)?t.width:`${Math.round(t.width)}px`,height:ae(t.height)?t.height:`${Math.round(t.height)}px`});let i=e;return["left","right","top","bottom","width","height"].forEach((e=>{null!=i[e]?i=me(e,i,t[e],o):null!=t[e]&&(i=i.set(e,`${Math.round(t[e])}px`))})),i}function me(e,t,o,n){if(null==t[e]||"auto"===t[e])return t;let i=t;return i=ae(t[e])?"left"===e||"right"===e||"width"===e?ae(o)?t.set(e,o):t.set(e,`${(100*+o/n.width).toFixed(4)}%`):ae(o)?t.set(e,o):t.set(e,`${(100*+o/n.height).toFixed(4)}%`):ae(o)?"left"===e||"right"===e||"width"===e?t.set(e,Math.round(parseFloat(`${o}`)*n.width/100)):t.set(e,Math.round(parseFloat(`${o}`)*n.height/100)):isNaN(+o)?t.without(e):t.set(e,`${Math.round(+o)}px`),i}function Ie(e,t){return{left:e.left-t.left,top:e.top-t.top,right:e.right,bottom:e.bottom,width:e.width,height:e.height,id:null}}function xe(){var e,t;return null!==(t=null===(e=(0,n.getAppStore)().getState().appContext)||void 0===e?void 0:e.isRTL)&&void 0!==t&&t}function we(e){let t=100,o=100;if("number"==typeof e)t=100,o=Math.round(100*e);else if("string"==typeof e){const n=e.split(":");t=parseInt(n[0],10),o=parseInt(n[1],10)}return t/o}function be(e){return e&&0!==e.length?1===e.length?[e[0],e[0],e[0],e[0]]:2===e.length?[e[0],e[1],e[0],e[1]]:3===e.length?[e[0],e[1],e[2],0]:[e[0],e[1],e[2],e[3]]:[0,0,0,0]}function Se(e,t){var o,n,i,a;const r=null!==(o=t.setting)&&void 0!==o?o:{},l=Ne("height",t.bbox,r.autoProps);let s;if("ratio"===r.heightMode)s={setting:{heightMode:"ratio",aspectRatio:null!==(n=r.aspectRatio)&&void 0!==n?n:1,autoProps:{height:S.Custom}}};else{if(l!==S.Custom)return{height:l===S.Stretch?e:null,setting:{autoProps:{height:l}}};{let o=null!==(a=null===(i=t.bbox)||void 0===i?void 0:i.height)&&void 0!==a?a:e;o=ae(o)?ue(o,e):parseInt(o),s={height:o,setting:{heightMode:"fixed",autoProps:{height:S.Custom}}}}}return s}function Te(){var e;return window.jimuConfig.isBuilder?null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appConfig:(0,n.getAppStore)().getState().appConfig}function Ce(){var e,t;return(null===(e=null===window||void 0===window?void 0:window.jimuConfig)||void 0===e?void 0:e.isBuilder)?null===(t=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===t?void 0:t.browserSizeMode:(0,n.getAppStore)().getState().browserSizeMode}function Re(){var e,t,o;return window.jimuConfig.isBuilder?null===(t=null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appRuntimeInfo)||void 0===t?void 0:t.currentPageId:null===(o=(0,n.getAppStore)().getState().appRuntimeInfo)||void 0===o?void 0:o.currentPageId}function je(){var e,t,o;return window.jimuConfig.isBuilder?null===(t=null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appRuntimeInfo)||void 0===t?void 0:t.currentDialogId:null===(o=(0,n.getAppStore)().getState().appRuntimeInfo)||void 0===o?void 0:o.currentDialogId}function Pe(){var e,t,o;return window.jimuConfig.isBuilder?null===(t=null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appRuntimeInfo)||void 0===t?void 0:t.activePagePart:null===(o=(0,n.getAppStore)().getState().appRuntimeInfo)||void 0===o?void 0:o.activePagePart}function Me(){var e,t,o;const i=window.jimuConfig.isBuilder?null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appConfig:(0,n.getAppStore)().getState().appConfig,a=je(),r=Ce();return null===(o=null===(t=null==i?void 0:i.dialogs[a])||void 0===t?void 0:t.layout)||void 0===o?void 0:o[r]}function $e(){var e,t,o;const i=window.jimuConfig.isBuilder?null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appConfig:(0,n.getAppStore)().getState().appConfig,a=Re(),r=Ce();return null===(o=null===(t=null==i?void 0:i.pages[a])||void 0===t?void 0:t.layout)||void 0===o?void 0:o[r]}function Le(){var e,t,o;const i=window.jimuConfig.isBuilder?null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appConfig:(0,n.getAppStore)().getState().appConfig,a=Ce();return null===(o=null===(t=null==i?void 0:i.header)||void 0===t?void 0:t.layout)||void 0===o?void 0:o[a]}function Oe(){var e,t,o;const i=window.jimuConfig.isBuilder?null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appConfig:(0,n.getAppStore)().getState().appConfig,a=Ce();return null===(o=null===(t=null==i?void 0:i.footer)||void 0===t?void 0:t.layout)||void 0===o?void 0:o[a]}function ke(e,t){return t.left>=e.left&&t.left+t.width<=e.left+e.width&&t.top>=e.top&&t.top+t.height<=e.top+e.height}function Ae(e,t){return!(t.left>e.left+e.width||t.left+t.width<e.left||t.top>e.top+e.height||t.top+t.height<e.top)}function Ee(e,t){var o,i,a;let r,l;if(null!=e&&"object"==typeof e)r=null!==(o=e.unit)&&void 0!==o?o:v.DistanceUnits.PIXEL,l=null!==(i=e.distance)&&void 0!==i?i:0;else{const t=n.polished.getValueAndUnit(e);r=null!==(a=null==t?void 0:t[1])&&void 0!==a?a:v.DistanceUnits.PIXEL,l=+(null==t?void 0:t[0])>=0?+t[0]:0}return t>=0||(t=r===v.DistanceUnits.PERCENTAGE?1:0),`${l.toFixed(t)}${r}`}function Ne(e,t,o){const n=null==o?void 0:o[e],i="width"===e?"left":"top",a="width"===e?"right":"bottom";if(!n)return null!=t[e]?S.Custom:null!=t[i]&&null!=t[a]?S.Stretch:S.Auto;if(!0===n)return null!=t[i]&&null!=t[a]?S.Stretch:S.Auto;switch(n){case S.Auto:return S.Auto;case S.Stretch:return S.Stretch;default:return S.Custom}}function ze(e){return"ratio"===e.heightMode&&null!=e.aspectRatio}function Be(e,t){let o=Math.max(e,t),n=Math.min(e,t);for(;0!==n;){const e=n;n=o%n,o=e}return o}function Fe(e){const{delay:t,isLastChild:o}=e;return{delay:t,isLastChild:o}}const He=n.lodash.assign({},{gridSize:1}),We=n.lodash.assign({},{order:0},{lockParent:!1,lockLayout:!1,autoProps:{}});function De(e,t){var o;const n=e.appConfig.sections[t];if(!n||!n.views)return null;const i=null===(o=e.appRuntimeInfo.sectionNavInfos)||void 0===o?void 0:o[n.id];let a;if(!i){const t=n.views[0];a=e.appConfig.views[t]}return{sectionId:t,navInfo:i,activeView:a,views:n.views,sectionStyle:n.style,transition:n.transition,autoPlay:n.autoPlay,interval:n.interval,loop:n.loop,focusable:n.focusable}}function Ve(e,t,o,i){const a=e.pages[t];return a?i===n.PagePart.Header?a.header&&e.header?Xe(e,e.header.layout[o],o):[]:i===n.PagePart.Footer?a.footer&&e.footer?Xe(e,e.footer.layout[o],o):[]:i===n.PagePart.Body?Xe(e,a.layout[o],o):[]:[]}function Ge(e,t,o,i){const a=e.pages[t];return a?i===n.PagePart.Header?a.header&&e.header?Ye(e,e.header.layout,o):[]:i===n.PagePart.Footer?a.footer&&e.footer?Ye(e,e.footer.layout,o):[]:i===n.PagePart.Body?Ye(e,a.layout,o):[]:[]}function Ue(e,t,o){const n=e.dialogs[t];return n?Xe(e,n.layout[o],o):[]}function _e(e,t,o){const n=e.dialogs[t];return n?Ye(e,n.layout,o):[]}function Xe(e,t,o){let i=[];O(e.layouts[t],n.LayoutItemType.Widget,!0).forEach((t=>{const n=e.layouts[t.layoutId].content[t.layoutItemId];n.isPending?i.push(t):e.widgets[n.widgetId].layouts&&Object.keys(e.widgets[n.widgetId].layouts).forEach((t=>{i=i.concat(Xe(e,e.widgets[n.widgetId].layouts[t][o],o))}))}));O(e.layouts[t],n.LayoutItemType.Section,!0).forEach((t=>{const n=e.layouts[t.layoutId].content[t.layoutItemId];n.isPending?i.push(t):e.sections[n.sectionId].views&&e.sections[n.sectionId].views.forEach((t=>{i=i.concat(Xe(e,e.views[t].layout[o],o))}))}));return O(e.layouts[t],n.LayoutItemType.ScreenGroup,!0).forEach((t=>{var n,a;const r=e.layouts[t.layoutId].content[t.layoutItemId];if(r.isPending)i.push(t);else{const t=r.screenGroupId;null===(a=null===(n=e.screenGroups)||void 0===n?void 0:n[t].screens)||void 0===a||a.forEach((t=>{const n=null==e?void 0:e.screens[t];n.main&&(i=i.concat(Xe(e,n.main.layout[o],o))),n.panel&&(i=i.concat(Xe(e,n.panel.layout[o],o)))}))}})),i}function Ye(e,t,o,i=null,a=null,r=null){const l=[];i||(i=P(e,t[o],n.LayoutItemType.Widget,o,!0)),a||(a=P(e,t[o],n.LayoutItemType.Section,o,!0)),r||(r=P(e,t[o],n.LayoutItemType.ScreenGroup,o,!0));return Object.keys(n.BrowserSizeMode).filter((e=>n.BrowserSizeMode[e]!==o)).map((e=>n.BrowserSizeMode[e])).forEach((s=>{O(e.layouts[t[s]],n.LayoutItemType.Widget,!0).forEach((t=>{var s;const d=e.layouts[t.layoutId].content[t.layoutItemId];(null===(s=e.widgets[d.widgetId].manifest)||void 0===s?void 0:s.widgetType)!==n.WidgetType.Layout&&i.indexOf(d.widgetId)<0?!Je(e,l,t)&&l.push(t):e.widgets[d.widgetId].layouts&&Object.keys(e.widgets[d.widgetId].layouts).forEach((t=>{Ye(e,e.widgets[d.widgetId].layouts[t],o,i,a,r).forEach((t=>{!Je(e,l,t)&&l.push(t)}))}))}));O(e.layouts[t[s]],n.LayoutItemType.Section,!0).forEach((t=>{const n=e.layouts[t.layoutId].content[t.layoutItemId];a.indexOf(n.sectionId)<0?!Je(e,l,t)&&l.push(t):e.sections[n.sectionId].views&&e.sections[n.sectionId].views.forEach((t=>{Ye(e,e.views[t].layout,o,i,a,r).forEach((t=>{!Je(e,l,t)&&l.push(t)}))}))}));O(e.layouts[t[s]],n.LayoutItemType.ScreenGroup,!0).forEach((t=>{var n,s;const d=e.layouts[t.layoutId].content[t.layoutItemId];r.indexOf(d.screenGroupId)<0?!Je(e,l,t)&&l.push(t):(null===(s=null===(n=e.screenGroups)||void 0===n?void 0:n[d.screenGroupId])||void 0===s?void 0:s.screens)&&e.screenGroups[d.screenGroupId].screens.forEach((t=>{var n;const s=null===(n=e.screens)||void 0===n?void 0:n[t];(null==s?void 0:s.main)&&Ye(e,s.main.layout,o,i,a,r).forEach((t=>{!Je(e,l,t)&&l.push(t)})),(null==s?void 0:s.panel)&&Ye(e,s.panel.layout,o,i,a,r).forEach((t=>{!Je(e,l,t)&&l.push(t)}))}))}))})),l}function Je(e,t,o){const i=e.layouts[o.layoutId].content[o.layoutItemId];return!!t.find((t=>{const o=e.layouts[t.layoutId].content[t.layoutItemId];return o.type===i.type&&(o.type===n.LayoutItemType.Widget&&o.widgetId===i.widgetId||o.type===n.LayoutItemType.Section&&o.sectionId===i.sectionId)}))}var qe=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o};class Ze extends n.React.PureComponent{constructor(e){super(e),this.onMouseDown=()=>{var e;if(this.props.widgetId){(null===(e=(0,n.getAppStore)().getState().widgetsRuntimeInfo[this.props.widgetId])||void 0===e?void 0:e.state)!==n.WidgetState.Active&&(0,n.getAppStore)().dispatch(n.appActions.activateWidget(this.props.widgetId))}},this.onMouseDown=this.onMouseDown.bind(this),this.ref=n.React.createRef(),this.state={error:null}}loadWidgetClass(){const{widgetId:e,isClassLoaded:t}=this.props;e&&!t&&n.WidgetManager.getInstance().loadWidgetClass(e).catch((e=>{console.log(e),this.setState({error:n.i18n.getIntl().formatMessage({id:"widgetLoadError"})})}))}componentDidMount(){this.loadWidgetClass()}componentDidUpdate(){this.loadWidgetClass()}renderWidgetContent(){const{widgetId:e,layoutId:t,layoutItemId:o,autoWidth:i,autoHeight:a,onInitResizeHandler:r,onInitDragHandler:l}=this.props;let s;return e&&(s=n.WidgetManager.getInstance().getWidgetClass(e)),this.state.error?(0,n.jsx)("div",{className:"widget-content"},this.state.error):(0,n.jsx)("div",{className:(0,n.classNames)("widget-content",{"d-none":!e})},s&&(0,n.jsx)(n.ErrorBoundary,null,(0,n.jsx)(s,{widgetId:e,layoutId:t,layoutItemId:o,autoWidth:i,autoHeight:a,onInitResizeHandler:r,onInitDragHandler:l})))}getStyle(){const{forceAspectRatio:e,aspectRatio:t}=this.props,o=n.css`
      -webkit-overflow-scrolling: touch;
    `;return n.css`
      ${"app-loader"===this.props.widgetId?o:""};
      overflow: ${this.props.canCrossLayoutBoundary?"visible":"hidden"};
      position: relative;
      aspect-ratio: ${e&&t>0?t:null};

      .widget-content {
        position: relative;
        height: 100%;
        width: 100%;
        z-index: 0;
      }
    `}render(){var e,t;const{className:o,widgetStyle:i,widgetId:a,rotate:r}=this.props,l=v.styleUtils.toCSSStyle(i),{transform:s}=l,d=qe(l,["transform"]),u=r>0||r<0?`rotateZ(${r}deg)`:"";let c=u;return s&&(c=`${s} ${u}`),(0,n.jsx)("div",{className:(0,n.classNames)(`widget-renderer layout-item-content w-100 ${null!==(t=null===(e=null==i?void 0:i.boxShadow)||void 0===e?void 0:e.presetStyle)&&void 0!==t?t:""}`,o),css:this.getStyle(),style:Object.assign(Object.assign({},d),{transform:c}),onMouseDownCapture:this.onMouseDown,"data-widgetid":a,ref:this.ref},this.renderWidgetContent(),this.props.children)}}const Ke=n.ReactRedux.connect(ge)(Ze),Qe={},et={};function tt(e,t){Qe[e]=t}function ot(e,t){et[e]=t}function nt(e){return Qe[e]}function it(e){return et[e]}class at extends n.React.PureComponent{render(){const{layout:e}=this.props;if(!e)return null;const t=it(e.type||n.LayoutType.FlowLayout);return t?n.React.createElement(t,Object.assign({},this.props)):null}}const rt=n.ReactRedux.connect(ce)(at);var lt=r(1888);function st(e,t){if(!e)return null;let o={};e.backgroundIMage&&(o="string"==typeof e.backgroundIMage?{}:e.backgroundIMage);const n=e.backgroundPosition?v.FillType[e.backgroundPosition.toUpperCase()]:v.FillType.FILL;let i;i=null==e.backgroundColor?t:""===e.backgroundColor?"transparent":e.backgroundColor?e.backgroundColor:"";const a={color:i,fillType:n,image:o};return v.styleUtils.toBackgroundStyle(a)}function dt(e){var t,o;const{viewId:i,isActive:a,layoutEntryComponent:r,viewVisibilityContext:l}=e,s=n.ReactRedux.useSelector((e=>{var t,o;return null===(o=null===(t=e.appConfig)||void 0===t?void 0:t.views)||void 0===o?void 0:o[i]})),d=null===(o=null===(t=(0,lt.useTheme)())||void 0===t?void 0:t.body)||void 0===o?void 0:o.bg,u=r,c=l,[p,g]=n.React.useState(!1),y=n.React.useMemo((()=>({isInView:!0,isInCurrentView:a})),[a]);return n.React.useEffect((()=>{a&&s.lazyLoad&&!p&&g(!0)}),[a,s.lazyLoad,p]),(0,n.jsx)("div",{className:(0,n.classNames)("w-100 h-100 d-flex section-view",{[v.FOCUSABLE_CONTAINER_CLASS]:a}),style:st(s,d),css:n.css`&, .exb-drop-area { pointer-events: ${a?"auto":"none"}; }`,key:i,id:`${s.parent}_${s.id}`},(p||!s.lazyLoad)&&(0,n.jsx)(n.ErrorBoundary,null,(0,n.jsx)(c.Provider,{value:y},(0,n.jsx)(u,{layouts:null==s?void 0:s.layout,isInSection:!0,className:"w-100"}))))}function ut(e){var t,o;const{views:i,navInfo:a,animationPreview:r,playMode:l,currentIndex:s,previousIndex:d,progress:u,loop:c,viewTransition:p}=e,g=r&&l===n.AnimationPlayMode.OneByOne,{setting:y,playId:v}=n.React.useContext(n.AnimationContext),h=n.ReactRedux.useSelector((e=>{var t;return!y||y.type===n.AnimationType.None||(null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.appMode)===n.AppMode.Design})),f=!h||g||(null==a?void 0:a.playId)&&(null==a?void 0:a.withOneByOne)?y:null,m=n.React.useMemo((()=>({setting:f,playId:g?v:null})),[f,g,v]);return(0,n.jsx)(n.AnimationContext.Provider,{value:m},(0,n.jsx)("div",{className:"section-content"},(0,n.jsx)(n.TransitionContainer,{useProgress:null!==(t=null==a?void 0:a.useProgress)&&void 0!==t&&t,useStep:null!==(o=null==a?void 0:a.useStep)&&void 0!==o&&o,previousIndex:d,currentIndex:s,progress:u,transitionType:null==p?void 0:p.type,direction:null==p?void 0:p.direction,playId:null==a?void 0:a.playId,withOneByOne:null==a?void 0:a.withOneByOne,loop:c},i.map((t=>{const o=t===i[s];return(0,n.jsx)(dt,{key:t,viewId:t,isActive:o,layoutEntryComponent:e.layoutEntryComponent,viewVisibilityContext:e.viewVisibilityContext})})))))}var ct=r(7568),pt=r.n(ct),gt=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o};const yt=e=>{const t=window.SVG,{className:o}=e,i=gt(e,["className"]),a=(0,n.classNames)("jimu-icon jimu-icon-component",o);return t?n.React.createElement(t,Object.assign({className:a,src:pt()},i)):n.React.createElement("svg",Object.assign({className:a},i))};var vt=r(2943),ht=r.n(vt),ft=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o};const mt=e=>{const t=window.SVG,{className:o}=e,i=ft(e,["className"]),a=(0,n.classNames)("jimu-icon jimu-icon-component",o);return t?n.React.createElement(t,Object.assign({className:a,src:ht()},i)):n.React.createElement("svg",Object.assign({className:a},i))};function It(e){var t,o,i;const{sectionId:a,currentIndex:r,numOfViews:l,onCurrentViewChange:s}=e,d=n.hooks.useTranslation(v.defaultMessages),u=n.ReactRedux.useSelector((e=>{var t;return null===(t=e.appConfig.sections[a])||void 0===t?void 0:t.arrowsNav})),c=n.ReactRedux.useSelector((e=>{var t;return null===(t=e.appConfig.sections[a])||void 0===t?void 0:t.dotsNav})),p=null!==(t=null==c?void 0:c.position)&&void 0!==t?t:"b",g=n.React.useMemo((()=>{const e=[];for(let t=0;t<l;t++)e.push(t);return e}),[l]),y=()=>{var e,t,o,i;return n.css`
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
    `},h=n.React.useCallback(((e,t)=>(0,n.jsx)("div",{key:e,className:(0,n.classNames)("dot rounded-circle",{active:t,disabled:l<=1}),onClick:t?void 0:()=>{s(e)}})),[s,l]),f=n.React.useCallback((()=>{s(r>0?r-1:l-1)}),[r,l,s]),m=n.React.useCallback((()=>{s(r<l-1?r+1:0)}),[r,l,s]),I=l>1&&0!==r,x=l>1&&r!==l-1;return(0,n.jsx)(n.React.Fragment,null,(null==u?void 0:u.visible)&&(0,n.jsx)(n.React.Fragment,null,(0,n.jsx)(v.Button,{type:"tertiary",disabled:!I,className:(0,n.classNames)("arrows-nav first p-0",{vertical:"v"===u.direction}),css:y(),onClick:I?f:null,"aria-label":d("previous")},(0,n.jsx)(yt,{className:"m-0",autoFlip:"v"!==u.direction,size:null!==(o=u.size)&&void 0!==o?o:24})),(0,n.jsx)(v.Button,{type:"tertiary",disabled:!x,className:(0,n.classNames)("arrows-nav second p-0",{vertical:"v"===u.direction}),css:y(),onClick:x?m:null,"aria-label":d("next")},(0,n.jsx)(mt,{className:"m-0",autoFlip:"v"!==u.direction,size:null!==(i=u.size)&&void 0!==i?i:24}))),(null==c?void 0:c.visible)&&(0,n.jsx)("div",{className:(0,n.classNames)("dots-nav",{"snap-left":"l"===p,"snap-top":"t"===p,"snap-right":"r"===p,"snap-bottom":"b"===p}),css:(()=>{var e,t,o,i,a,r,l,s,d,u,g,y,v,h;return n.css`
      position: absolute;
      display: flex;
      flex-direction: ${"l"===p||"r"===p?"column":"row"};
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

        > div:not(:first-of-type) {
          margin-top: ${null!==(a=c.spacing)&&void 0!==a?a:10}px;
        }
      }
      &.snap-right {
        height: 100%;
        top: 0;
        right: ${null!==(r=c.offset)&&void 0!==r?r:50}px;
        width: ${null!==(l=c.size)&&void 0!==l?l:8}px;

        > div:not(:first-of-type) {
          margin-top: ${null!==(s=c.spacing)&&void 0!==s?s:10}px;
        }
      }
      &.snap-top {
        width: 100%;
        top: ${null!==(d=c.offset)&&void 0!==d?d:50}px;
        height: ${null!==(u=c.size)&&void 0!==u?u:8}px;

        > div:not(:first-of-type) {
          margin-left: ${null!==(g=c.spacing)&&void 0!==g?g:10}px;
        }
      }
      &.snap-bottom {
        width: 100%;
        bottom: ${null!==(y=c.offset)&&void 0!==y?y:50}px;
        height: ${null!==(v=c.size)&&void 0!==v?v:8}px;

        > div:not(:first-of-type) {
          margin-left: ${null!==(h=c.spacing)&&void 0!==h?h:10}px;
        }
      }
    `})()},g.map((e=>h(e,e===r)))))}function xt(e){const{sectionId:t,autoPlay:o,interval:i=w,loop:a=!1}=e,r=n.React.useRef(),l=n.ReactRedux.useSelector((e=>{var t,i;return o?(null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.appMode)===n.AppMode.Design||(null===(i=e.appRuntimeInfo)||void 0===i?void 0:i.isPrintPreview):null})),s=n.React.useRef(l),d=n.React.useCallback((()=>{r.current&&(clearInterval(r.current),r.current=null)}),[]),u=n.React.useCallback((()=>{d(),r.current=setInterval((()=>{const e=function(e,t){var o,i;const a=(0,n.getAppStore)().getState(),r=a.appConfig.sections[e].views;let l=null===(i=null===(o=a.appRuntimeInfo)||void 0===o?void 0:o.sectionNavInfos)||void 0===i?void 0:i[e];const s=(null==l?void 0:l.currentViewId)?r.indexOf(l.currentViewId):0,d=s<r.length-1?s+1:0;return!(!t&&0===d||(l=l?l.set("previousViewId",r[s]).set("currentViewId",r[d]):{previousViewId:r[s],currentViewId:r[d]},(0,n.getAppStore)().dispatch(n.appActions.sectionNavInfoChanged(e,l)),0))}(t,a);e||d()}),1e3*i)}),[t,a,i,d]);n.React.useEffect((()=>{if(!s.current){if(!o)return void d();u()}return()=>{d()}}),[o,i,a,d,u]),n.React.useEffect((()=>{if(s.current!==l&&null!==l){if(s.current=l,l)return void d();o&&u()}}),[l,u,d,o])}var wt=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o};function bt(e,t){return n.css`
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
  `}function St(e){var t;const{views:o,navInfo:i,activeView:a,animationPreview:r,playMode:l,transition:s,sectionId:d,autoPlay:u,focusable:c=!0,interval:p=w,loop:g=!0,className:y,sectionStyle:h,rotate:f,forceAspectRatio:m,aspectRatio:I,layoutEntryComponent:x,viewVisibilityContext:b}=e,S=n.React.useRef(),T=n.React.useRef(),C=n.React.useRef(!1),R=n.React.useRef(!1),j=n.React.useRef(null),[P,M]=n.React.useState(!1),$=null==a?void 0:a.id,L=n.React.useMemo((()=>{var e;let t,a,r,l=o;if(i)if(l=null!==(e=i.visibleViews)&&void 0!==e?e:o,i.useProgress){r=i.progress;t=(0,n.getIndexFromProgress)(r,l.length).currentIndex}else t=Math.max(0,l.indexOf(i.currentViewId)),a=i.previousViewId?Math.max(0,l.indexOf(i.previousViewId)):Math.max(0,t-1);else t=Math.max(0,l.indexOf($)),a=t;return S.current=t,{currentIndex:t,previousIndex:a,progress:r}}),[$,i,o]),O=n.React.useMemo((()=>v.styleUtils.toCSSStyle(h)),[h]),{transform:k}=O,A=wt(O,["transform"]),E=f>0||f<0?`rotateZ(${f}deg)`:"";let N=E;k&&(N=`${k} ${E}`);const z=n.React.useCallback((()=>{M(!0)}),[]),B=n.React.useCallback((()=>{M(!1)}),[]),F=n.React.useCallback((e=>{C.current=!0,R.current=e.target===T.current,null!=j.current&&(clearTimeout(j.current),j.current=null),u&&M(!0)}),[u]),H=n.React.useCallback((e=>{C.current=!1,null!=j.current&&(clearTimeout(j.current),j.current=null),u&&(j.current=setTimeout((()=>{M(!1)}),500))}),[u]),W=u&&!P;xt({sectionId:d,interval:p,loop:g,autoPlay:W});const D=n.React.useCallback((e=>{n.jimuHistory.changeView(d,o[e])}),[d,o]);return(0,n.jsx)("div",{className:(0,n.classNames)(`section-layout layout-item-content w-100 ${null===(t=null==h?void 0:h.boxShadow)||void 0===t?void 0:t.presetStyle}`,y),css:bt(m,I),"data-sectionid":d,style:Object.assign(Object.assign({},A),{transform:N}),onMouseEnter:u?z:null,onMouseLeave:u?B:null,onTouchStart:u?z:null,onTouchEnd:u?B:null,onFocus:F,onBlur:H,tabIndex:c?0:void 0,ref:T},(0,n.jsx)(ut,{views:o,navInfo:i,animationPreview:r,playMode:l,currentIndex:L.currentIndex,previousIndex:L.previousIndex,progress:L.progress,loop:W&&g,viewTransition:s,layoutEntryComponent:x,viewVisibilityContext:b}),(0,n.jsx)(It,{sectionId:d,numOfViews:o.length,currentIndex:L.currentIndex,onCurrentViewChange:D}))}class Tt extends n.React.PureComponent{render(){return n.React.createElement(St,Object.assign({},this.props,{layoutEntryComponent:rt,viewVisibilityContext:p}))}}var Ct=r(1496);function Rt(e,t){const[o,i]=n.React.useState(null),a=n.React.useContext(Ct.PageVisibilityContext),r=n.React.useRef(!1);n.React.useEffect((()=>{null==e||t||r.current===a||(r.current=a,i((0,n.getNextAnimationId)()))}),[a,t,e]);const l=n.React.useCallback((()=>{i(null)}),[]);return[o,!a,l]}function jt(){const e=[0];for(let t=1;t<=10;t++)e.push(t/10);return e}function Pt(e,t){const o=n.React.useRef(),[i,a]=n.React.useState(!0);return n.React.useEffect((()=>{if(o.current&&(o.current.unobserve(e),o.current=null),!t)return;if(e&&"function"==typeof IntersectionObserver){const t=new IntersectionObserver((e=>{var t;(t=e[0]).target.classList.contains("playing-animation")||t.boundingClientRect.width>0&&t.boundingClientRect.height>0&&a(t.isIntersecting)}),{threshold:jt(),root:document,rootMargin:"20%"});return t.observe(e),o.current=t,()=>{o.current.unobserve(e),o.current=null}}}),[e,t]),i}var Mt=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o};function $t(e){var t,o,i,a,r,l,s,d,c;const p=n.ReactRedux.useSelector((t=>function(e,t){const o=pe(e,t);if(!o.layoutItem)return o;if(o.layoutItem.type===n.LayoutItemType.Widget){const{layoutId:i,layoutItemId:a}=t,r=function(e,t,o){var i;const a=e.appConfig.layouts[t].content[o];if(a.type===n.LayoutItemType.Widget){const t=e.appConfig.widgets[a.widgetId],o=null===(i=null==t?void 0:t.layouts)||void 0===i?void 0:i.DEFAULT;if(o)return o[e.browserSizeMode]}return null}(e,i,a),l=Object.assign({},o);return r&&(l.innerLayoutId=r),l}const i=De(e,o.layoutItem.sectionId);return Object.assign(Object.assign({},o),i)}(t,e)),n.ReactRedux.shallowEqual),g=n.ReactRedux.useSelector((e=>{var t,o;return null!==(o=null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.isPrintPreview)&&void 0!==o&&o})),y=Object.assign(Object.assign({},e),p),v=n.React.useRef(),{layoutId:h,layoutItemId:f,layoutItem:m}=y,{className:x,children:w,id:b,isLastChild:S}=y,T=Mt(y,["className","children","id","isLastChild"]),C=(null==m?void 0:m.type)===n.LayoutItemType.Widget,R=(null==m?void 0:m.type)===n.LayoutItemType.Section,{effect:j,oneByOneEffect:P,hoverEffect:M}=g?{}:null!==(o=null===(t=y.layoutItem)||void 0===t?void 0:t.setting)&&void 0!==o?o:{};let $=null===(i=null==j?void 0:j[n.AnimationTriggerType.ScrollIntoView])||void 0===i?void 0:i.type;$=$&&$!==n.AnimationType.None?$:null;let L=null===(a=null==P?void 0:P[n.AnimationTriggerType.ScrollIntoView])||void 0===a?void 0:a.type;L=L&&L!==n.AnimationType.None?L:null;const[O,k]=n.React.useState(!1),[A,E]=n.React.useState({setting:null==P?void 0:P[n.AnimationTriggerType.ScrollIntoView],playId:null,oid:p.innerLayoutId,revert:null}),N=Pt(v.current,y.watchViewportVisibility);n.React.useEffect((()=>{k(!0)}),[]);const{setting:z}=n.React.useContext(n.AnimationContext),[B,F,H]=Rt($,null!=(null==z?void 0:z.type)&&z.type!==n.AnimationType.None),[W,D,V]=Rt(L,null!=(null==z?void 0:z.type)&&z.type!==n.AnimationType.None);n.React.useEffect((()=>{null==B&&W&&E({setting:null==P?void 0:P[n.AnimationTriggerType.ScrollIntoView],playId:W,oid:p.innerLayoutId,revert:D,onContextAnimationEnd:D?null:()=>{V(),E({setting:null==P?void 0:P[n.AnimationTriggerType.ScrollIntoView],oid:p.innerLayoutId,playId:-1})}})}),[B,W]);const G=n.React.useCallback((()=>{var e;const t=null==P?void 0:P[n.AnimationTriggerType.ScrollIntoView],o=(null===(e=null==t?void 0:t.option)||void 0===e?void 0:e.start)===n.AnimationStartMode.AfterPrevious;E({setting:t,playId:(0,n.getNextAnimationId)(),oid:p.innerLayoutId,revert:o,onContextAnimationEnd:o?null:()=>{E({setting:t,oid:p.innerLayoutId,playId:-1})}})}),[L]),U=n.React.useCallback((()=>{var e;const t=null==P?void 0:P[n.AnimationTriggerType.ScrollIntoView];(null===(e=null==t?void 0:t.option)||void 0===e?void 0:e.start)===n.AnimationStartMode.AfterPrevious&&E({setting:t,playId:(0,n.getNextAnimationId)(),oid:p.innerLayoutId,revert:!1,onContextAnimationEnd:()=>{E({setting:t,oid:p.innerLayoutId,playId:-1})}}),B>0&&(null==H||H())}),[L,B]),_=n.React.useCallback((e=>{var t;if(window.jimuConfig.isInBuilder){(null===(t=(0,n.getAppStore)().getState().appRuntimeInfo)||void 0===t?void 0:t.appMode)===n.AppMode.Express&&(e.stopPropagation(),(0,n.getAppStore)().dispatch(n.appActions.selectionChanged({layoutId:h,layoutItemId:f})))}}),[]);if(!y.layoutItem||R&&!m.sectionId)return null;const X=null===(r=null==j?void 0:j[n.AnimationTriggerType.ScrollIntoView])||void 0===r?void 0:r.option,Y=null!==(c=null===(d=null===(s=null===(l=m.setting)||void 0===l?void 0:l.style)||void 0===s?void 0:s.transform)||void 0===d?void 0:d.rotate)&&void 0!==c?c:0;return(0,n.jsx)(u.Provider,{value:N},(0,n.jsx)(n.AnimationComponent,{id:b,parentId:h,type:$,configType:null==X?void 0:X.configType,direction:null==X?void 0:X.direction,revert:F,delay:e.delay,isLastChild:S,playId:B,onAnimationStart:G,onAnimationEnd:U,ref:v,css:n.css`
          ${(0,n.getHoverStyle)(null==M?void 0:M.type,null==M?void 0:M.setting)};
          position: relative;
          overflow: visible;
          min-width: ${I}px;
          min-height: ${I}px;
        `,style:e.style,className:(0,n.classNames)("d-flex layout-item",x,{"is-widget":C,"is-section":R}),onClick:_,"data-layoutitemid":f,"data-layoutid":h},(0,n.jsx)(n.AnimationContext.Provider,{value:A},C&&(0,n.jsx)(Ke,Object.assign({rotate:Y},T)),R&&(0,n.jsx)(Tt,Object.assign({rotate:Y},T))),e.children))}class Lt extends n.React.PureComponent{getPositionStyle(e){const{layoutItem:t,transformedBBox:o}=this.props,i=function(e,t){var o,n,i,a,r;const l={};let s=null!==(o=null==t?void 0:t.autoProps)&&void 0!==o?o:{},d=e;const u=Ne("height",e,s),c=Ne("width",e,s);if(u===S.Stretch)l.top=d.top,l.bottom=d.bottom;else{const o=null!==(n=s.top)&&void 0!==n&&n,a=null!==(i=s.bottom)&&void 0!==i&&i;u===S.Custom&&(l.height=d.height),o!==a&&!a||null==e.top?l.bottom=d.bottom:l.top=d.top,t.vCenter&&"50%"===d.top&&(l.top="50%")}if(c===S.Stretch)l.left=d.left,l.right=d.right;else{const e=null!==(a=s.left)&&void 0!==a&&a,o=null!==(r=s.right)&&void 0!==r&&r;c===S.Custom&&(l.width=d.width),e===o?null!=d.left?l.left=d.left:l.right=d.right:e&&null!=d.right?l.right=d.right:l.left=d.left,t.hCenter&&"50%"===d.left&&(l.left="50%")}return l}(null!=o?o:t.bbox,e),a=Object.assign(Object.assign({},i),function(e,t,o=!1){const n={},i=t.hCenter&&"50%"===e.left,a=t.vCenter&&"50%"===e.top,r=xe()?-1:1;return i&&a?(n.right="auto",n.bottom="auto",n.transform=`translate(${-50*r}%, -50%)`):i?(n.right="auto",n.transform=`translateX(${-50*r}%)`):a&&(n.bottom="auto",n.transform="translateY(-50%)"),!o&&ze(t)&&(n.height="auto"),n}(t.bbox,e));return function(e){return[n.css`
      position: absolute;
      left: ${se(e,"left")};
      right: ${se(e,"right")};
      top: ${se(e,"top")};
      bottom: ${se(e,"bottom")};
      width: ${se(e,"width")};
      height: ${se(e,"height")};
    `,e.transform]}(a)}render(){const{layoutItem:e,layoutId:t}=this.props;if(null==e||e.isPending)return null;const o=n.lodash.assign({},We,e.setting),i=we(o.aspectRatio),a=ze(o),r=Fe(this.props),[l,s]=this.getPositionStyle(o),d=Ne("width",e.bbox,o.autoProps),u=Ne("height",e.bbox,o.autoProps);return(0,n.jsx)($t,Object.assign({css:l,style:{transform:s},layoutId:t,layoutItemId:e.id,forceAspectRatio:a,aspectRatio:i,isInSection:this.props.isInSection,autoWidth:d===S.Auto,autoHeight:u===S.Auto},r))}}class Ot extends n.React.PureComponent{createItem(e,t,o,i){const a=e.content[t];return(0,n.jsx)(Lt,{key:`${e.id}_${t}`,index:o,layoutId:e.id,layoutItemId:t,layoutItem:a,transformedBBox:i?e.content[t].bbox:null,isInSection:this.props.isInSection})}render(){const{layout:e,layouts:t,className:o,style:i,browserSizeMode:a}=this.props;if(!e)return null;let r=e,l=!1;if(t[a]!==e.id&&this.layoutTransform){let o;Object.keys(t).some((n=>{if(t[n]===e.id)return o=n,!0})),r=this.layoutTransform(e,o,a),l=!0}const s=n.lodash.assign({},He,r.setting),d=r.order||[],u=(0,n.classNames)("layout fixed-layout d-flex",o);return(0,n.jsx)("div",{className:u,style:Object.assign(Object.assign(Object.assign({position:"relative",height:"auto"},i),v.styleUtils.toCSSStyle(s.style)),{width:"100%",overflow:"hidden"}),"data-layoutid":r.id},d.length>0&&(0,n.jsx)(n.IntersectionContext.Provider,{value:{monitor:!1}},(0,n.jsx)(n.OneByOneAnimation,{css:n.css`
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
              `,oid:e.id,"data-layoutid":e.id},d.map(((e,t)=>this.createItem(r,e,t,l))))))}}const kt=n.ReactRedux.connect(ce)(Ot);class At extends n.React.PureComponent{isStretchInCrossAxis(){const{layoutItem:e}=this.props;return function(e){var t,o;return(null===(o=null===(t=e.setting)||void 0===t?void 0:t.autoProps)||void 0===o?void 0:o.width)!==S.Custom}(e)}calHeight(e,t){return function(e,t){var o,n;return(null===(o=e.autoProps)||void 0===o?void 0:o.height)===S.Auto||"ratio"===e.heightMode?"ratio"===e.heightMode?{height:"auto",flex:"0 0 auto"}:{height:"auto"}:(null===(n=e.autoProps)||void 0===n?void 0:n.height)===S.Stretch||"fit"===e.heightMode?{flex:"1 1 auto"}:{height:t.height,flexShrink:0}}(e,t)}getStyle(e,t){const{layoutItem:o}=this.props,i=o.bbox||{},a=this.calHeight(e,i);return a.width=t?"auto":i.width,this.autoHeight="auto"===a.height,function(e,t,o){var i,a,r;const l=(null===(i=t.autoProps)||void 0===i?void 0:i.height)===S.Auto;return n.css`
    align-self: ${o?"stretch":null!==(r=null===(a=t.style)||void 0===a?void 0:a.alignSelf)&&void 0!==r?r:"auto"};
    width: ${se(e,"width")};
    height: ${se(e,"height")};
    flex: ${e.flex};
    flex-shrink: ${e.flexShrink};
    min-height: ${l?"unset":null};
  `}(a,e,t)}render(){var e,t;const{layoutId:o,layoutItem:i,onClick:a}=this.props;if(!i||i.isPending)return null;const r=i.setting||{},l=null!==(t=null===(e=r.autoProps)||void 0===e?void 0:e.height)&&void 0!==t?t:S.Custom,s=(0,n.classNames)("flexbox-layout-item",{"d-flex":l!==S.Auto}),d=this.isStretchInCrossAxis(),u=ze(r),c=we(r.aspectRatio),p=Fe(this.props);return(0,n.jsx)($t,Object.assign({css:this.getStyle(r,d),layoutId:o,layoutItemId:i.id,onClick:a,className:s,forceAspectRatio:u,aspectRatio:c,autoHeight:this.autoHeight},p))}}const Et={min:16,space:10},Nt=e=>n.css`
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
`;class zt extends n.React.PureComponent{createItem(e,t,o){const{layout:i}=this.props;return(0,n.jsx)(At,{key:e,index:t,space:o.space,layoutId:i.id,layoutItemId:e,layoutItem:i.content[e]})}render(){const{layout:e,className:t}=this.props,o=e.order||(0,n.Immutable)([]),i=Object.assign({},Et,e.setting),a={position:"relative",overflow:"hidden",padding:v.styleUtils.toCSSPadding(i.padding)},r=(0,n.classNames)("layout column-layout d-flex w-100",t);return(0,n.jsx)("div",{className:r,style:a,"data-layoutid":e.id},(0,n.jsx)(n.IntersectionContext.Provider,{value:{monitor:!0,layoutId:e.id}},(0,n.jsx)(n.OneByOneAnimation,{oid:e.id,className:"trail-container d-flex flex-column w-100",css:Nt(i)},o.asMutable().map(((e,t)=>this.createItem(e,t,i))))))}}const Bt=n.ReactRedux.connect(ce)(zt),Ft=n.css`
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
`;const Ht={space:10,style:{padding:{number:[10,10,10,10],unit:v.DistanceUnits.PIXEL}}},Wt={heightMode:"fixed",aspectRatio:1,offsetX:0,offsetY:0,style:{alignSelf:"flex-start"}};class Dt extends n.React.PureComponent{getStyle(e){const{gutter:t,layoutItem:o,isMultiRow:i}=this.props,a=o.bbox,r=xe()?-1:1,l=function(e,t,o){var n,i,a,r,l,s,d,u,c,p,g,y,v,h;return o?{height:(null===(n=e.autoProps)||void 0===n?void 0:n.height)===S.Auto?"auto":t.height,alignSelf:null!==(a=null===(i=e.style)||void 0===i?void 0:i.alignSelf)&&void 0!==a?a:"flex-start"}:"ratio"===e.heightMode?{alignSelf:null!==(l=null===(r=e.style)||void 0===r?void 0:r.alignSelf)&&void 0!==l?l:"flex-start"}:(null===(s=e.autoProps)||void 0===s?void 0:s.height)===S.Auto?{height:"auto",alignSelf:null!==(u=null===(d=e.style)||void 0===d?void 0:d.alignSelf)&&void 0!==u?u:"flex-start"}:(null===(c=e.autoProps)||void 0===c?void 0:c.height)===S.Custom?{height:t.height,alignSelf:null!==(g=null===(p=e.style)||void 0===p?void 0:p.alignSelf)&&void 0!==g?g:"flex-start"}:(null===(y=e.autoProps)||void 0===y?void 0:y.height)===S.Stretch||"fit"===e.heightMode?{alignSelf:"stretch"}:parseFloat(t.height)>0?{height:t.height,alignSelf:null!==(h=null===(v=e.style)||void 0===v?void 0:v.alignSelf)&&void 0!==h?h:"flex-start"}:{alignSelf:"stretch"}}(e,a,i);return function(e,t,o,i,a){var r,l,s,d;return e?[n.css`
        padding: ${o/2}px 0;
        height: ${se(i,"height")};
        align-self: ${i.alignSelf};
      `,0!==a.offsetX||0!==a.offsetY?`translate(${(null!==(r=a.offsetX)&&void 0!==r?r:0)*t}px, ${null!==(l=a.offsetY)&&void 0!==l?l:0}px)`:null]:[n.css`
      padding: 0 ${o/2}px;
      height: ${se(i,"height")};
      align-self: ${i.alignSelf};
    `,0!==a.offsetX||0!==a.offsetY?`translate(${(null!==(s=a.offsetX)&&void 0!==s?s:0)*t}px, ${null!==(d=a.offsetY)&&void 0!==d?d:0}px)`:null]}(i,r,t,l,e)}render(){var e;const{span:t,offset:o,layoutId:i,layoutItem:a}=this.props;if(null==a||a.isPending)return null;const r=n.lodash.assign({},Wt,a.setting),l=(0,n.classNames)("row-layout-item",`col-${t}`,`offset-${o}`),s=null===(e=r.autoProps)||void 0===e?void 0:e.height,d=we(r.aspectRatio),u=Fe(this.props),[c,p]=this.getStyle(r);return(0,n.jsx)($t,Object.assign({css:c,style:{transform:p},className:l,layoutId:i,layoutItemId:a.id,forceAspectRatio:ze(r),aspectRatio:d,onClick:this.props.onClick,autoHeight:s===S.Auto},u))}}class Vt extends n.React.PureComponent{constructor(e){super(e),this.flipLeftRight=xe()}collectBounds(){var e;const{transformedLayout:t}=this.props,o=null!==(e=t.order)&&void 0!==e?e:[];return this.childRects=[],o.forEach((e=>{var o,n;if(t.content[e].isPending)return;const i=null===(n=null===(o=t.content)||void 0===o?void 0:o[e])||void 0===n?void 0:n.bbox;null!=i&&this.childRects.push({layoutId:t.id,id:e,left:parseInt(i.left,10),width:parseInt(i.width,10),height:parseInt(i.height,10)})})),this.childRects.sort(((e,t)=>e.left-t.left))}getConfig(){var e;const{layout:t}=this.props;return null!==(e=t.setting)&&void 0!==e?e:Ht}createItem(e,t,o){var i;const{transformedLayout:a,isMultiRow:r}=this.props,l=this.getConfig(),s=e[t],d=null!==(i=l.space)&&void 0!==i?i:0;let u;if(0===t)u=s.left;else{const o=e[t-1];u=s.left-o.left-o.width}return(0,n.jsx)(Dt,{key:`${s.layoutId}_${s.id}`,offset:u,gutter:d,span:s.width,isMultiRow:r,layoutId:a.id,layoutItemId:s.id,layoutItem:a.content[s.id],alignItems:o.alignItems})}render(){var e,t;const{layout:o,className:i}=this.props;this.collectBounds();const a=this.childRects,r=this.getConfig(),l=null!==(e=r.style)&&void 0!==e?e:{},s=null!==(t=r.space)&&void 0!==t?t:0;return(0,n.jsx)(d.Consumer,null,(e=>(0,n.jsx)("div",{className:(0,n.classNames)("row-layout",i,{"row-rtl":this.flipLeftRight}),css:Ft,"data-layoutid":o.id},(0,n.jsx)("div",{css:n.css`
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
                        `},a.map(((e,t)=>this.createItem(a,t,l))))))))))}}class Gt extends n.React.PureComponent{constructor(e){super(e),this.onResize=(e,t)=>{var o;if(this.props.browserSizeMode!==this.props.mainSizeMode)return;if(0===e&&0===t)return;const{widgetId:n}=this.props;null!=(null===(o=window.runtimeInfo.widgets)||void 0===o?void 0:o[n])?window.runtimeInfo.widgets[n].height=t:window.runtimeInfo.widgets[n]={height:t}},this.handleDebounceResize=n.lodash.debounce(this.onResize,200)}findExtension(){const e=n.ExtensionManager.getInstance().getExtensions(`${n.extensionSpec.ExtensionPoints.LayoutTransformer}`);if((null==e?void 0:e.length)>0){const t=e.find((e=>e.layoutType===n.LayoutType.RowLayout));this.layoutTransform=null==t?void 0:t.transformLayout}}collectRowItems(){var e;const t=null!==(e=this.finalLayout.order)&&void 0!==e?e:[],o=[];let n=[],i=0;return o.push(n),t.forEach((e=>{if(this.finalLayout.content[e].isPending)return;const t=this.finalLayout.content[e].bbox,a=parseInt(t.left,10),r=Math.floor(a/12);r>i&&(n=[],i=r,o.push(n)),n.push(e)})),o}transform(){const{layout:e,layouts:t,browserSizeMode:o,mainSizeMode:n}=this.props;null==this.layoutTransform&&this.findExtension();let i=e;t[o]!==e.id&&null!=this.layoutTransform&&(i=this.layoutTransform(e,n,o,Te())),this.finalLayout=i,this.numOfRows=this.collectRowItems().length}createRow(){const{layout:e,layouts:t}=this.props;return(0,n.jsx)(Vt,{layouts:t,layout:e,transformedLayout:this.finalLayout,isMultiRow:this.finalLayout!==e||this.numOfRows>1})}render(){var e,t;const{layout:o,className:i}=this.props,a=null!==(t=(null!==(e=o.setting)&&void 0!==e?e:Ht).style)&&void 0!==t?t:Ht.style;return this.transform(),(0,n.jsx)("div",{className:(0,n.classNames)("layout d-flex",i),css:n.css`
          width: 100%;
          padding: ${v.styleUtils.toCSSPadding(a.padding)};
        `,"data-layoutid":o.id},this.createRow(),(0,n.jsx)(n.ReactResizeDetector,{handleHeight:!0,onResize:this.handleDebounceResize}))}}const Ut=n.ReactRedux.connect(ce)(Gt);var _t=r(462),Xt=r.n(_t),Yt=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o};const Jt=e=>{const t=window.SVG,{className:o}=e,i=Yt(e,["className"]),a=(0,n.classNames)("jimu-icon jimu-icon-component",o);return t?n.React.createElement(t,Object.assign({className:a,src:Xt()},i)):n.React.createElement("svg",Object.assign({className:a},i))};var qt=r(2838),Zt=r.n(qt),Kt=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o};const Qt=e=>{const t=window.SVG,{className:o}=e,i=Kt(e,["className"]),a=(0,n.classNames)("jimu-icon jimu-icon-component",o);return t?n.React.createElement(t,Object.assign({className:a,src:Zt()},i)):n.React.createElement("svg",Object.assign({className:a},i))};function eo(e,t){var o;return null===(o=e.content)||void 0===o?void 0:o[t]}function to(e){var t;const o=v.styleUtils.toCSSPadding(null===(t=null==e?void 0:e.style)||void 0===t?void 0:t.padding);if(o){if(e.paddingColor){const t=o.split(" "),i=e.paddingColor;let a="";const r=window.jimuUA.browser.name.toLowerCase();return"firefox"===r?a="-moz-":"safari"!==r&&"chrome"!==r||(a="-webkit-"),n.css`
        padding: ${o};
        background-image:
        ${a}linear-gradient(270deg, ${i} ${t[0]}, transparent ${t[0]}),
        ${a}linear-gradient(180deg, ${i} ${t[1]}, transparent ${t[1]}),
        ${a}linear-gradient(90deg, ${i} ${t[2]}, transparent ${t[2]}),
        ${a}linear-gradient(0deg, ${i} ${t[3]}, transparent ${t[3]});
      `}return n.css`
      padding: ${o};
    `}}const oo=n.css`
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
`,no=n.css`
  position: absolute;
  left: 0;
  top: 0;
  width: 100% !important;
  height: 100% !important;
  z-index: 20;
  background: var(--ref-palette-neutral-200);
`;function io(e){const[t,o]=n.React.useState(!1),i=n.ReactRedux.useSelector((t=>function(e,t,o){var n,i;const a=e.appConfig.layouts[t];if(null!==(n=a.content[o].expandable)&&void 0!==n&&!n)return!1;const r=null===(i=null==a?void 0:a.setting)||void 0===i?void 0:i.rootItem;let l=!1;if(r===o){const e=eo(a,r);null!=e.children&&0!==e.children.length||(l=!0)}return!l}(t,e.layoutId,e.layoutItemId))),a=n.React.useCallback((()=>{o(!t)}),[t]);return(0,n.jsx)($t,Object.assign({},e,{css:n.css`${oo};${t?no:""}`}),i&&(0,n.jsx)(v.Button,{icon:!0,type:"tertiary",className:"max-grid-item-btn p-0",onClick:a},t&&(0,n.jsx)(Qt,null),!t&&(0,n.jsx)(Jt,null)))}const ao=32;function ro(e,t,o,n,i,a){let r=n,l=i;if("row"===o){const o=a?t.width:e.width,i=a?e.width:t.width;n<0&&(r=o>ao?-Math.min(Math.abs(n),o-ao):0),n>0&&(r=i>ao?Math.min(n,i-ao):0)}else i<0&&(l=e.height>ao?-Math.min(Math.abs(i),e.height-ao):0),i>0&&(l=t.height>ao?Math.min(i,t.height-ao):0);return{x:r,y:l}}function lo(e){const t=e.getAttribute("data-layoutid"),o=e.getAttribute("data-layoutitemid");return+(0,n.getAppStore)().getState().appConfig.layouts[t].content[o].bbox.width}function so(e){var t,o;const{referenceItemId:i,direction:a,layoutId:r,onResizeEnd:l}=e,s=n.React.useRef(),d=n.React.useRef(),u=n.React.useRef(null),c=null!==(o=null===(t=(0,n.getAppStore)().getState().appContext)||void 0===t?void 0:t.isRTL)&&void 0!==o&&o,p=n.ReactRedux.useSelector((e=>e.appRuntimeInfo.appMode===n.AppMode.Design)),g=n.ReactRedux.useSelector((t=>{var o,n;return null===(n=null===(o=t.appConfig.layouts[e.layoutId].setting)||void 0===o?void 0:o.resizable)||void 0===n||n})),y=n.ReactRedux.useSelector((e=>{var t,o;return null!==(o=null===(t=e.appConfig.layouts[r].setting)||void 0===t?void 0:t.splitSize)&&void 0!==o?o:8})),v=n.ReactRedux.useSelector((e=>{var t,o;return null!==(o=null===(t=e.appConfig.layouts[r].setting)||void 0===t?void 0:t.splitColor)&&void 0!==o?o:"var(--light-500)"})),h=n.React.useMemo((()=>{const e=`${y}px`,t=!!p||g;return n.css`
      width: ${"col"===a?"100%":e};
      height: ${"col"===a?e:"100%"};
      background: ${v};
      position: relative;
      z-index: 10;
      flex-shrink: 0;

      .horizontal-splitter {
        cursor: ${t?"col-resize":"default"};
      }

      .vertical-splitter {
        cursor: ${t?"row-resize":"default"};
      }
    `}),[a,g,p,y,v]);return n.hooks.useEffectOnce((()=>{let e,t,o,r,y,v,h,f,m,I,x,w,b;return n.moduleLoader.loadModule("jimu-core/dnd").then((n=>{const S=n.interact;u.current=S,s.current&&(d.current=S(s.current).origin("parent").draggable({inertia:!1,autoScroll:!1,enabled:!!p||g,modifiers:[S.modifiers.restrict({restriction:"parent"})],lockAxis:"row"===a?"x":"y",onstart:n=>{n.stopPropagation(),e=0,t=0,o=s.current.parentElement.getBoundingClientRect(),r=s.current.previousElementSibling,y=r.getBoundingClientRect(),h=r.style.width,f=r.style.height,v=lo(r),m=s.current.nextElementSibling,I=m.getBoundingClientRect(),w=m.style.width,b=m.style.height,x=lo(m)},onmove:o=>{o.stopPropagation(),e+=o.dx,t+=o.dy;const{x:n,y:i}=ro(y,I,a,e,t,c),l=c?-1:1;"row"===a?(r.style.width=`calc(${v}% + ${n*l}px)`,m.style.width=`calc(${x}% - ${n*l}px)`):(r.style.height=`calc(${v}% + ${i}px)`,m.style.height=`calc(${x}% - ${i}px)`)},onend:n=>{n.stopPropagation(),e+=n.dx,t+=n.dy;const{x:s,y:d}=ro(y,I,a,e,t,c),u=c?-1:1;r.style.width=h,m.style.width=w,r.style.height=f,m.style.height=b,l(i,Math.round(s*u*1e4/o.width)/100,Math.round(1e4*d/o.height)/100)}}))})),()=>{var e;null===(e=d.current)||void 0===e||e.unset(),d.current=null}})),n.React.useEffect((()=>{null!=d.current&&u.current(s.current).draggable(!!p||g)}),[g,p]),(0,n.jsx)("div",{ref:s,css:h,className:"grid-split flex-shrink-0"},(0,n.jsx)("div",{className:(0,n.classNames)("w-100 h-100",{"horizontal-splitter":"row"===a,"vertical-splitter":"col"===a})}))}function uo(e){const{layout:t,layoutItemId:o,isLast:i,className:a}=e,r=n.React.useMemo((()=>eo(t,o)),[t,o]),l=n.React.useMemo((()=>{if(r.parent){return eo(t,r.parent).gridType}return null}),[t,r]),s=+r.bbox.width,d=n.React.useContext(n.AnimationContext),u=n.React.useMemo((()=>{var e,t;return(null===(t=null===(e=null==d?void 0:d.setting)||void 0===e?void 0:e.option)||void 0===t?void 0:t.parentMode)===n.ParentAnimationMode.AllAtOnce?0:250}),[d]),c=n.React.useCallback((()=>l===n.GridItemType.Row?n.css`
        height: 100%;
        width: ${s}%;
      `:l===n.GridItemType.Column?n.css`
        width: 100%;
        height: ${s}%;
      `:n.css`
      width: 100%;
      height: 100%;
    `),[s,l]);if(r.gridType===n.GridItemType.Row)return(0,n.jsx)(co,{className:a,css:c(),layout:t,layoutItemId:o,items:r.children});if(r.gridType===n.GridItemType.Column)return(0,n.jsx)(po,{className:a,css:c(),layout:t,layoutItemId:o,items:r.children});if(r.gridType===n.GridItemType.Tab)return(0,n.jsx)(go,{className:a,css:c(),layout:t,layoutItemId:o,items:r.children});const p=function(e,t){var o,i;let a=0;const r=eo(e,e.setting.rootItem);if(r&&(null===(o=r.children)||void 0===o?void 0:o.length)>0){const o=[...r.children];for(;o.length>0;){const r=o.shift(),l=eo(e,r),s=eo(e,l.parent);if(`${l.id}`===t||s.gridType===n.GridItemType.Tab&&s.children.includes(t))return a;(null===(i=l.children)||void 0===i?void 0:i.length)>0?o.unshift(...l.children):(s.gridType!==n.GridItemType.Tab||s.gridType===n.GridItemType.Tab&&0===s.children.indexOf(r))&&(a+=1)}}return a}(t,o),g=function(e,t){var o;let n=eo(e,t);if((null===(o=null==n?void 0:n.children)||void 0===o?void 0:o.length)>0)return!1;for(;null!=n;){const t=n.parent;if(null==t)break;const o=eo(e,t),i=o.children.length;if(+o.children[i-1]!=+n.id)return!1;n=o}return!0}(t,o);return(0,n.jsx)(io,{css:c(),className:(0,n.classNames)(`d-flex ${a}`,{"is-last":i}),layoutId:t.id,layoutItemId:o,delay:p*u,isLastChild:g})}function co(e){const{layout:t,layoutItemId:o,items:i,className:a}=e,r=n.React.useRef();n.hooks.useEffectOnce((()=>{n.moduleLoader.loadModule("jimu-for-builder").then((e=>{r.current=e.getAppConfigAction}))}));const l=n.hooks.useEventCallback(((e,o)=>{const n=r.current(),a=i.indexOf(e),l=i[a+1],s=t.content[e],d=t.content[l];n.editLayoutItemProperty({layoutId:t.id,layoutItemId:e},"bbox",{width:+s.bbox.width+o}).editLayoutItemProperty({layoutId:t.id,layoutItemId:l},"bbox",{width:+d.bbox.width-o}).exec()}));return(0,n.jsx)("div",{className:`d-flex ${a}`,css:n.css`
        .is-last {
          width: auto;
          flex-grow: 1;
          flex-shrink: 1;
          flex-basis: 0;
        }
      `,"data-layoutid":t.id,"data-layoutitemid":o},i.map(((e,o)=>{return a=e,r=o===i.length-1,(0,n.jsx)(n.React.Fragment,{key:a},(0,n.jsx)(uo,{key:a,layout:t,layoutItemId:a}),!r&&(0,n.jsx)(so,{referenceItemId:a,layoutId:t.id,direction:"row",onResizeEnd:l}));var a,r})))}function po(e){const{layout:t,layoutItemId:o,items:i,className:a}=e,r=n.React.useRef();n.hooks.useEffectOnce((()=>{n.moduleLoader.loadModule("jimu-for-builder").then((e=>{r.current=e.getAppConfigAction}))}));const l=n.hooks.useEventCallback(((e,o,n)=>{const a=r.current(),l=i.indexOf(e),s=i[l+1],d=t.content[e],u=t.content[s];a.editLayoutItemProperty({layoutId:t.id,layoutItemId:e},"bbox",{width:+d.bbox.width+n}).editLayoutItemProperty({layoutId:t.id,layoutItemId:s},"bbox",{width:+u.bbox.width-n}).exec()}));return(0,n.jsx)("div",{className:`d-flex flex-column ${a}`,css:n.css`
        .is-last {
          height: auto;
          flex-grow: 1;
          flex-shrink: 1;
          flex-basis: 0;
        }
      `,"data-layoutid":t.id,"data-layoutitemid":o},i.map(((e,o)=>{return a=e,r=o===i.length-1,(0,n.jsx)(n.React.Fragment,{key:a},(0,n.jsx)(uo,{key:a,layout:t,layoutItemId:a}),!r&&(0,n.jsx)(so,{referenceItemId:a,layoutId:t.id,direction:"col",onResizeEnd:l}));var a,r})))}function go(e){const{layout:t,layoutItemId:o,items:i,className:a}=e,r=n.hooks.useTranslation(v.defaultMessages),l=e=>function(e,t,o){var i,a,r,l,s,d,u;const{layoutId:c,layoutItemId:p}=t,g=e.layouts[c].content[p];if((null==g?void 0:g.type)===n.LayoutItemType.Widget){const t=e.widgets[g.widgetId];return t?null!==(a=null!==(i=null==t?void 0:t.label)&&void 0!==i?i:g.label)&&void 0!==a?a:g.id:o("placeholder")}if((null==g?void 0:g.type)===n.LayoutItemType.Section)return e.sections[g.sectionId].label;return(null==g?void 0:g.gridType)===n.GridItemType.Row?null!==(r=g.label)&&void 0!==r?r:o("gridRow"):(null==g?void 0:g.gridType)===n.GridItemType.Column?null!==(l=g.label)&&void 0!==l?l:o("gridCol"):(null==g?void 0:g.gridType)===n.GridItemType.Tab?null!==(s=g.label)&&void 0!==s?s:o("tabs"):null!==(u=null!==(d=null==g?void 0:g.label)&&void 0!==d?d:null==g?void 0:g.id)&&void 0!==u?u:""}((0,n.getAppStore)().getState().appConfig,{layoutId:t.id,layoutItemId:e},r);return(0,n.jsx)("div",{className:a,"data-layoutid":t.id,"data-layoutitemid":o},(0,n.jsx)(v.Tabs,{type:"tabs",fill:!0,scrollable:!0,className:"w-100 h-100",css:n.css`
          & > .tab-content {
            overflow: hidden;
          }
        `},[...i].map(((e,o)=>((e,o)=>(0,n.jsx)(v.Tab,{key:o,id:`${o}`,title:l(e)},(0,n.jsx)(uo,{layout:t,layoutItemId:e})))(e,o)))))}class yo extends n.React.PureComponent{findExtension(){const e=n.ExtensionManager.getInstance().getExtensions(`${n.extensionSpec.ExtensionPoints.LayoutTransformer}`);if((null==e?void 0:e.length)>0){const t=e.find((e=>e.layoutType===n.LayoutType.GridLayout));this.layoutTransform=null==t?void 0:t.transformLayout}}render(){var e,t;const{layouts:o,layout:i,browserSizeMode:a,mainSizeMode:r,className:l}=this.props;let s=i;o[a]!==i.id&&(null==this.layoutTransform&&this.findExtension(),null!=this.layoutTransform&&(s=this.layoutTransform(i,r,a)));const{rootItem:d}=null!==(e=s.setting)&&void 0!==e?e:{},u=null===(t=s.content)||void 0===t?void 0:t[d],c=(0,n.classNames)("layout grid-layout d-flex w-100 h-100",l);return(0,n.jsx)("div",{className:c,css:n.css`overflow: hidden;${to(s.setting)};`,"data-layoutid":s.id},(0,n.jsx)(n.IntersectionContext.Provider,{value:{monitor:!1}},(0,n.jsx)(n.OneByOneAnimation,{oid:s.id,"data-layoutid":s.id,className:"trail-container d-flex w-100 h-100",css:n.css`
              width: 100%;
            `},u?(0,n.jsx)(uo,{className:"w-100 h-100",layout:s,layoutItemId:d}):this.props.children)))}}const vo=n.ReactRedux.connect(ce)(yo);class ho{constructor(){this.id="flow-layout-transformer",this.layoutType=n.LayoutType.FlowLayout}transformLayout(e,t,o){if(t!==o&&o===n.BrowserSizeMode.Small){let t=(0,n.Immutable)(e);return(e.order||[]).forEach((e=>{t=t.setIn(["content",e,"setting","heightMode"],"auto")})),t}return e}transformLayoutItem(e,t,o,n,i,a){return{index:t,item:e}}}function fo(e,t,o){var n;const i=k(e,o),a=function(e,t,o){var n,i,a,r,l,s,d;const u=e.widgets[o];if(null!=u){const c=Ce(),p=e.mainSizeMode,g=u.layouts.DEFAULT[c],y=u.layouts.DEFAULT[p],v=be(null!==(l=null===(r=null===(a=null===(i=(null!==(n=e.layouts[g])&&void 0!==n?n:e.layouts[y]).setting)||void 0===i?void 0:i.style)||void 0===a?void 0:a.padding)||void 0===r?void 0:r.number)&&void 0!==l?l:[0]),h=null!==(d=null===(s=null==t?void 0:t[o])||void 0===s?void 0:s.height)&&void 0!==d?d:0;let f=v[0],m=v[2];return ae(f)&&(f=ue(f,h)),ae(m)&&(m=ue(m,h)),h-f-m}return 0}(e,t,i);if(a>0){const t=null!==(n=e.layouts[o].order)&&void 0!==n?n:[],i={};return t.forEach((t=>{const n=e.layouts[o].content[t];i[t]=Se(a,n)})),i}return null}class mo{constructor(){this.id="row-layout-transformer",this.layoutType=n.LayoutType.RowLayout}transformLayout(e,t,o,i){var a,r;if(t===o)return e;let l=(0,n.Immutable)(e);if(o===n.BrowserSizeMode.Small){const t=fo(i,null===(a=window.runtimeInfo)||void 0===a?void 0:a.widgets,e.id);let o=0;Object.keys(null!==(r=e.content)&&void 0!==r?r:{}).sort(((t,o)=>parseInt(e.content[t].bbox.left,10)-parseInt(e.content[o].bbox.left,10))).forEach((i=>{var a,r,s;const d=e.content[i];if(!d.isPending){if(l=l.setIn(["content",i,"bbox"],{left:12*o,width:12,height:null!==(r=null===(a=d.bbox)||void 0===a?void 0:a.height)&&void 0!==r?r:"auto"}),null!=t){const e=null!==(s=d.setting)&&void 0!==s?s:(0,n.Immutable)({});l=l.setIn(["content",i,"bbox","height"],t[i].height).setIn(["content",i,"setting"],e.merge(t[i].setting))}o+=1}}))}return l}transformLayoutItem(e,t,o,n,i,a){return{item:e,index:t}}}class Io{constructor(){this.id="grid-layout-transformer",this.layoutType=n.LayoutType.GridLayout,this.transformLayout=(e,t,o)=>{var i,a;if(t!==o&&o===n.BrowserSizeMode.Small){let t=(0,n.Immutable)(e);const o=null===(i=e.setting)||void 0===i?void 0:i.rootItem;if(o&&(null===(a=e.content)||void 0===a?void 0:a[o])){const i=[],a=e.content[o];t=this.collectItem(e,o,a.children,i),i.length>0&&(t=t.setIn(["content",o,"gridType"],n.GridItemType.Tab),t=t.setIn(["content",o,"children"],i))}return t}return e},this.collectItem=(e,t,o,i)=>{let a=e;return null==o||o.forEach((o=>{var r;if(!e.content[o].isPending){const l=e.content[o];l.gridType!==n.GridItemType.Column&&l.gridType!==n.GridItemType.Row&&l.gridType!==n.GridItemType.Tab?(i.push(o),a=a.setIn(["content",o,"parent"],t)):(null===(r=l.children)||void 0===r?void 0:r.length)>0&&(a=this.collectItem(a,t,l.children,i))}})),a}}transformLayoutItem(e,t,o,n,i,a){return{index:t,item:e}}}const xo={gutter:0,style:{padding:{number:[0],unit:"px"},justifyContent:"flex-start",alignItems:"stretch",borderRadius:{number:[0],unit:v.DistanceUnits.PIXEL}}},wo={lockParent:!0,heightMode:"auto",offsetX:0,offsetY:0},bo=(0,n.createSelector)([(e,t)=>{var o;const{layoutItem:n}=t,i=null===(o=e.appRuntimeInfo)||void 0===o?void 0:o.selection;return!!i&&(i.layoutId===t.layoutId&&i.layoutItemId===n.id)},(e,t)=>{var o,i,a;const{layoutItem:r}=t;let l=[0,0,0,0];if(r.type===n.LayoutItemType.Widget){const t=r.widgetId,n=e.appConfig.widgets[t];n&&(l=v.styleUtils.expandStyleArray(null===(a=null===(i=null===(o=n.config)||void 0===o?void 0:o.style)||void 0===i?void 0:i.padding)||void 0===a?void 0:a.number))}return l[0]+l[2]},(e,t)=>{const{layoutItem:o}=t;let i=!0;if(o.type===n.LayoutItemType.Widget){const t=o.widgetId,n=e.appConfig.widgets[t];if(n){const t=Object.keys(n.layouts)[0],o=H(n.layouts[t],e.browserSizeMode,e.appConfig.mainSizeMode),a=e.appConfig.layouts[o];a&&Object.keys(a.content||[]).length>0&&Object.keys(a.content||[]).some((e=>{if(!a.content[e].isPending)return i=!1,!0}))}}return i}],((e,t,o)=>({selected:e,padding:t,isEmpty:o})));function So(e){const t=parseFloat(null==e?void 0:e.width);return t>0?`${e.width}`.includes("px")?`${Math.round(t)}px`:`${Math.round(t)}%`:"100%"}class To extends n.React.PureComponent{componentDidMount(){var e;const t=null!==(e=(0,n.getAppStore)().getState().queryObject)&&void 0!==e?e:{},{layoutId:o,layoutItem:i}=this.props,a=`${o}_block_${i.id}`;if(t.block_id===a){const e=document.getElementById(a);setTimeout((()=>{e.scrollIntoView({behavior:"smooth",block:"start"})}),500)}}calHeight(e){const t=function(e,t){const o=se(e.bbox||{},"height");if(!o||ae(o))return"auto";switch(t.heightMode){case"auto":return"auto";case"fixed":return o}}(this.props.layoutItem,e);return this.autoHeight="auto"===t,t}getStyle(e){const{index:t,gutter:o}=this.props,i=xe()?-1:1;return[n.css`
        margin-top: ${t>0?`${o}px`:"unset"};
        width: ${So(e)};
        height: ${this.calHeight(e)};
        flex-shrink: 0;
      `,e.offsetX||e.offsetY?`translate(${(e.offsetX||0)*i}px, ${e.offsetY||0}px)`:null]}render(){const{layoutId:e,layoutItem:t,onClick:o,isEmpty:i}=this.props;if(!t||i)return null;const a=(0,n.classNames)("flow-layout-item","d-flex"),r=n.lodash.assign({},wo,t.setting),l=Fe(this.props),[s,d]=this.getStyle(r);return(0,n.jsx)($t,Object.assign({id:`${e}_block_${t.id}`,css:s,style:{transform:d},layoutId:e,layoutItemId:t.id,onClick:o,className:a,autoHeight:this.autoHeight},l))}}const Co=n.ReactRedux.connect(bo)(To);class Ro extends n.React.PureComponent{calculatePosition(){const{layoutItem:e}=this.props;return function(e,t={}){var o,i,a;const r=e.setting,l=null!==(o=null==r?void 0:r.floatingArea)&&void 0!==o?o:1,s=`${null!==(i=null==r?void 0:r.offsetX)&&void 0!==i?i:0}px`,d=`${null!==(a=null==r?void 0:r.offsetY)&&void 0!==a?a:0}px`,{dh:u,dw:c,initWidth:p,initHeight:g,isResizing:y}=t,v=xe()?`translateX(calc(50% + ${s}))`:`translateX(calc(-50% + ${s}))`,h={};switch(l){case 1:h.left=s,h.top=d,h.transform=null;break;case 2:h.left="50%",h.top=d,h.transform=v;break;case 3:h.right=s,h.top=d,h.transform=null;break;case 4:h.left=s,h.top="50%",h.transform=`translateY(calc(-50% + ${d}))`;break;case 5:h.left="50%",h.top="50%",h.transform=`${v} translateY(calc(-50% + ${d}))`;break;case 6:h.right=s,h.top="50%",h.transform=`translateY(calc(-50% + ${d}))`;break;case 7:h.left=s,h.bottom=d,h.transform=null;break;case 8:h.left="50%",h.bottom=d,h.transform=v;break;case 9:h.right=s,h.bottom=d,h.transform=null}return n.css`
    position: fixed;
    z-index: 1;
    width: ${y?`${p+c}px`:se(e.bbox,"width")};
    height: ${y?`${g+u}px`:se(e.bbox,"height")};
    left: ${h.left};
    right: ${h.right};
    top: ${h.top};
    bottom: ${h.bottom};
    transform: ${h.transform};
  `}(e)}render(){const{layoutId:e,layoutItem:t,onClick:o}=this.props;if(!t)return null;const i=(0,n.classNames)("flow-layout-item floating","d-flex");return(0,n.jsx)($t,{css:this.calculatePosition(),layoutId:e,layoutItemId:t.id,onClick:o,className:i})}}const jo=2;function Po(){const e=[0];for(let t=1;t<=100;t++)e.push(t/100);return e}function Mo(e){switch(e){case n.ScreenTriggerType.Top:return`0% 0% -${100-jo}% 0%`;case n.ScreenTriggerType.Bottom:return`-${100-jo}% 0% -2px 0%`;case n.ScreenTriggerType.Upper:return`-${100/3-jo/2}% 0% -${200/3-jo/2}% 0%`;case n.ScreenTriggerType.Lower:return`-${200/3-jo/2}% 0% -${100/3-jo/2}% 0%`;default:return}}function $o(e,t,o,i){const a=n.React.useRef(),r=n.React.useRef();n.React.useEffect((()=>{a.current&&(a.current.unobserve(e),a.current=null);if(e&&"function"==typeof IntersectionObserver){const n=new IntersectionObserver((e=>{(e=>{const t=e.boundingClientRect,o=e.rootBounds,n=Math.abs(t.bottom-o.top)>=Math.abs(t.top-o.top);if(e.isIntersecting){if(r.current=!0,n)i(!0)}else if(r.current&&(r.current=!1,n))i(!1)})(e[0])}),{threshold:Po(),root:t||document,rootMargin:Mo(o)});return n.observe(e),a.current=n,()=>{a.current.unobserve(e),a.current=null}}}),[e,t,i,o])}const Lo=.33,Oo=.25;function ko(e,t,o,i,a,r,l,s,d){const{side:u,size:c,offset:p,background:g,overlay:y=!0,padding:h}=e.panel||{},f=(0,n.getAppStore)().getState().appContext.isRTL?"left"===u?"-":"":"right"===u?"-":"",m=v.styleUtils.toBackgroundEmotionStyle(null!=g?g:{}),I=parseFloat(a);if(d){const e=!y;return n.css`
      width: 100%;
      background: transparent;
      pointer-events: none;
      position: relative;
      opacity: ${l===n.ScreenTransitionType.Fade?i?"1":"0.5":null};
      min-height: ${s===n.ScreenTransitionType.Cover?`${t}px`:null};
      padding-top: ${s!==n.ScreenTransitionType.Fade&&e?`${Math.round(t*Lo)}px`:null};

      &.top-spacing > .panel-content {
        /* margin-top: ${Math.round(t*Lo)}px; */
      }

      .panel-content {
        width: 100%;
        ${y?"":m};
        /* margin-top: ${l===n.ScreenTransitionType.Push?"${Math.round(viewHeight * SCREEN_RATIO_IN_SMALL_SIZE)}px":"unset"}; */

        > .layout, > .layout-wrapper > .layout {
          pointer-events: auto;
          ${y?m:""};
          min-height: ${Math.round(t*Oo)}px;
          padding: ${v.styleUtils.toCSSPadding(h)};
        }

        > .layout-wrapper > .column-layout > .trail-container,
        > .column-layout > .trail-container {
          overflow-y: hidden;
        }

        > .layout-wrapper > .placeholder-btn {
          pointer-events: auto;
          ${y?m:""};
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
        min-height: ${s===n.ScreenTransitionType.Cover?"100vh":null};
        min-height: ${s===n.ScreenTransitionType.Cover?"calc(var(--vh) * 100)":null};
        padding-top: ${s!==n.ScreenTransitionType.Fade&&e?100*Lo+"vh":null};
        padding-top: ${s!==n.ScreenTransitionType.Fade&&e?`calc(var(--vh) * ${100*Lo})`:null};

        > .layout, > .layout-wrapper > .layout {
          min-height: ${Math.round(100*Oo)}vh;
          min-height: calc(var(--vh) * ${Math.round(100*Oo)});
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
    flex-direction: ${"right"===u?"row-reverse":"row"};
    justify-content: ${"center"===u&&y?"center":"flex-start"};
    position: relative;
    opacity: ${l===n.ScreenTransitionType.Fade?i?"1":"0.5":null};

    &.top-spacing > .panel-content {
      /* margin-top: ${Math.round(2*t/3)}px; */
    }

    .panel-content {
      width: ${c};
      transform: ${y&&Math.abs(parseFloat(p))>0?`translateX(${f}${p})`:null};
      flex: 0 auto;
      min-height: ${r?`${t}px`:"unset"};
      ${y?"":m};

      > .layout,
      > .layout-wrapper > .layout {
        pointer-events: auto;
        ${y?m:""};
        min-height: ${Math.round(t*Oo)}px;
        padding: ${v.styleUtils.toCSSPadding(h)};
      }

      > .layout-wrapper > .column-layout > .trail-container,
      > .column-layout > .trail-container {
        overflow-y: hidden;
      }

      > .layout-wrapper > .placeholder-btn {
        pointer-events: auto;
        ${y?m:""};
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
      min-height: ${r?t:Math.round(t*Oo)}px;
    }

    body:not(.design-mode) & {
      &.top-spacing > .panel-content {
        /* margin-top: 66.7vh; */
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
        min-height: ${r?"100":Math.round(100*Oo)}vh;
        min-height: calc(var(--vh) * ${r?"100":Math.round(100*Oo)});
      }
    }
  `}function Ao(e){var t;const{index:o,screenId:i,onInterctionChange:a,onHeightChange:r,viewHeight:l,headerHeight:s,layoutEntry:d,isActive:u,isSmallSize:c,transitionType:p,screenTransitionType:g,triggerType:y,stretched:v,verticalSpace:h="0"}=e,f=n.ReactRedux.useSelector((e=>e.appConfig.screens[i])),{panel:m}=f,I=n.React.useRef(),[x,w]=n.React.useState(!1),b=n.React.useRef(),S=n.React.useCallback((e=>{a(o,e)}),[o,a]);n.React.useEffect((()=>(b.current=n.lodash.debounce(r,200),()=>{var e;null===(e=b.current)||void 0===e||e.cancel()})),[r]);const T=n.React.useCallback(((e,t)=>{var n;null===(n=b.current)||void 0===n||n.call(b,o,t)}),[o]);return $o(I.current,e.refElement,c?n.ScreenTriggerType.Lower:null!=y?y:n.ScreenTriggerType.Bottom,S),n.React.useEffect((()=>{w(!0)}),[]),(0,n.jsx)("div",{className:(0,n.classNames)("screen-side-panel",{"top-spacing":0===o&&((null===(t=f.panel)||void 0===t?void 0:t.overlay)||c)}),"data-screenid":i,"data-index":o,ref:I,css:ko(f,l,s,u,h,v||null==m,p,g,c)},m&&(0,n.jsx)("div",{className:"panel-content"},(0,n.jsx)(d,{layouts:m.layout}),(0,n.jsx)("div",{className:(0,n.classNames)("panel-spacing",{"last-item":e.isLast})})),!m&&(0,n.jsx)("div",{className:"panel-content-placeholder"}),(0,n.jsx)(n.ReactResizeDetector,{handleHeight:!0,onResize:T}))}var Eo=r(3529),No=r.n(Eo),zo=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o};const Bo=e=>{const t=window.SVG,{className:o}=e,i=zo(e,["className"]),a=(0,n.classNames)("jimu-icon jimu-icon-component",o);return t?n.React.createElement(t,Object.assign({className:a,src:No()},i)):n.React.createElement("svg",Object.assign({className:a},i))},Fo=(0,lt.withBuilderTheme)(v.Tooltip);function Ho(e){const{rootLayoutId:t,viewHeight:o,headerHeight:i,screenId:a,isActive:r,isAbsolute:l,isLast:s,isSmallSize:d,layoutEntry:u,isDesignMode:p,formatMessage:g,builderTheme:y}=e,h=n.ReactRedux.useSelector((e=>e.appConfig.screens[a])),f=n.ReactRedux.useSelector((e=>{var t,o,n;return null===(n=null===(o=null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.screenPanelStates)||void 0===o?void 0:o[a])||void 0===n||n})),{main:m}=h,{side:I,size:x,overlay:w=!0}=h.panel||{},b=n.React.useRef(),S=n.React.useCallback((()=>{(0,n.getAppStore)().dispatch(n.appActions.screenPanelVisibleChanged(a,!0))}),[a]);const T=(0,n.classNames)("screen-main-panel",{"is-active":r,"last-one":s});return(0,n.jsx)(c.Provider,{value:!l||r},(0,n.jsx)("div",{id:`${t}_screen_${a}`,className:T,css:function(){var e,t,a,r;if(d){const a=!w&&null!=h.panel,r=a?`${Math.round(o*Lo)}px`:`${o}px`,l=a?`${Math.round(100*Lo)}`:"100";return n.css`
        pointer-events: none !important;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: ${o}px;

        > .layout {
          ${v.styleUtils.toBackgroundEmotionStyle(null!==(t=null===(e=h.main)||void 0===e?void 0:e.background)&&void 0!==t?t:{})};
          height: ${r} !important;
          border: none !important;
          pointer-events: auto;
        }

        body:not(.design-mode) & {
          height: ${i>0?`calc(100vh - ${i}px)`:"100vh"};
          height: ${i>0?`calc(var(--vh) * 100 - ${i}px)`:"calc(var(--vh) * 100)"};
          > .layout {
            height: ${l}vh !important;
            height: calc(var(--vh) * ${l}) !important;
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
      `}let s="0px",u="0px";"none"!==I&&(w||"right"===I||(s=x),w||"right"!==I||(u=x));const c=y?n.css`
      color: ${y.ref.palette.neutral[1200]};
      background-color: ${y.ref.palette.neutral[500]};
      border-color: ${y.ref.palette.neutral[600]};
      &:hover {
        color: ${y.ref.palette.black};
        background-color: ${y.ref.palette.neutral[600]};
      }
    `:null;return n.css`
      ${v.styleUtils.toBackgroundEmotionStyle(null!==(r=null===(a=h.main)||void 0===a?void 0:a.background)&&void 0!==r?r:{})};
      left: ${l?s:null};
      right: ${l?u:null};
      margin-left: ${l?null:s};
      margin-right: ${l?null:u};
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
    `}(),ref:b,"data-screenid":a,"data-index":e.index},(0,n.jsx)(u,{layouts:m.layout,isInWidget:!0}),(0,n.jsx)("div",{className:"spacing-area"}),p&&!f&&(0,n.jsx)("div",{className:"toggle-visible-btn",onClick:S,"data-testid":"toggleBtn"},(0,n.jsx)(Fo,{placement:"auto",title:g("showInDesignView")},(0,n.jsx)(v.Button,{type:"default",size:"sm",className:"rounded-1"},(0,n.jsx)(Bo,{size:"m"}))))))}function Wo(e,t,o,i,a){return e===n.ScreenTransitionType.Fade?n.css`
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
    `:void 0}function Do(e,t,o){return e===n.ScreenTransitionType.Fade?n.css`
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
    `:void 0}function Vo(e){const{rootLayoutId:t,activeIndex:o,viewHeight:i,headerHeight:a,screens:r,transitionType:l,isSmallSize:s,layoutEntry:d,isDesignMode:u,formatMessage:c,builderTheme:p}=e;return(0,n.jsx)(n.React.Fragment,null,(0,n.jsx)("div",{className:"screen-container",css:Wo(l,i,a,s,r.length)},r.map(((e,g)=>(0,n.jsx)(Ho,{key:e,rootLayoutId:t,index:g,isActive:o===g,screenId:e,viewHeight:i,headerHeight:a,isAbsolute:l===n.ScreenTransitionType.Fade,isLast:g===r.length-1,isSmallSize:s,layoutEntry:d,isDesignMode:u,formatMessage:c,builderTheme:p})))),(0,n.jsx)("div",{className:"screen-placeholder",css:Do(l,i)}))}function Go(e,t){return n.css`
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
        padding-top: ${Math.round(100*Lo)}vh;
        padding-top: calc(var(--vh) * ${Math.round(100*Lo)});
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
  `}function Uo(e){var t;const{layoutId:o,layoutItemId:i,layoutItem:a}=e,{screenGroupId:r}=a,l=n.ReactRedux.useSelector((e=>e.appConfig.screenGroups[a.screenGroupId])),s=n.ReactRedux.useSelector((e=>{var t,o;return null!==(o=null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.isPrintPreview)&&void 0!==o&&o})),u=n.ReactRedux.useSelector((e=>e.appConfig.screenGroups[a.screenGroupId].screens.some((t=>null!=e.appConfig.screens[t].panel)))),c=n.ReactRedux.useSelector((e=>e.browserSizeMode)),{pageId:p}=n.React.useContext(d),g=n.ReactRedux.useSelector((e=>{const t=e.appConfig.pages[p];if(null==t?void 0:t.header){const t=e.appConfig.header;if(null==t?void 0:t.sticky){const o=e.browserSizeMode,n=e.appConfig.mainSizeMode,i=t.height[o]||t.height[n]||75;return parseInt(i,10)}}return 0})),{screens:y,stretchPanel:v=!0,triggerType:h=n.ScreenTriggerType.Bottom,verticalSpace:f="0",panelTransitionType:m=n.ScreenTransitionType.Push}=l;let I=s?null:null!==(t=l.transitionType)&&void 0!==t?t:n.ScreenTransitionType.Fade;s||c!==n.BrowserSizeMode.Small||u||(I=n.ScreenTransitionType.Cover);const x=n.ReactRedux.useSelector((e=>{var t;return null===(t=e.appRuntimeInfo.screenGroupNavInfos)||void 0===t?void 0:t[r]})),w=n.React.useRef(),b=n.React.useRef(),S=n.React.useRef(),[T,C]=n.React.useState(0),R=n.React.useMemo((()=>{var e,t,o;if(c!==n.BrowserSizeMode.Small)return!1;const i=(0,n.getAppStore)().getState().appConfig,a=null===(t=null===(e=i.screenGroups)||void 0===e?void 0:e[r])||void 0===t?void 0:t.screens;if(null==a?void 0:a[T]){return null===(o=i.screens[a[T]].panel)||void 0===o?void 0:o.overlay}return!1}),[r,T,c]);n.React.useEffect((()=>{null!=(null==x?void 0:x.activeIndex)&&x.activeIndex!==T&&C(x.activeIndex)}),[x,T]);const j=n.React.useCallback(((e,t)=>{t&&e!==T?(0,n.getAppStore)().dispatch(n.appActions.screenGroupNavInfoChanged(r,e,!1)):!t&&e>0&&(0,n.getAppStore)().dispatch(n.appActions.screenGroupNavInfoChanged(r,e-1,!1))}),[T,r]),P=n.React.useCallback((()=>{if(!b.current)return;const e=b.current.children[0],t=b.current.children[1],o=t.childElementCount;for(let n=0;n<o;n++){const o=t.children[n],i=o.getAttribute("data-screenid"),a=e.querySelector(`[data-screenid="${i}"]`);a&&(a.style.height=s?`${o.clientHeight}px`:null)}e.style.height=`${t.clientHeight}px`}),[s]),M=n.React.useMemo((()=>n.lodash.debounce(P,200)),[P]),$=n.React.useCallback(((e,t)=>{if(!b.current)return;const o=b.current.children[0],i=b.current.children[1];if(I!==n.ScreenTransitionType.Fade)if(I!==n.ScreenTransitionType.Cover){if(I===n.ScreenTransitionType.Push){const t=o.querySelector(`div.screen-main-panel[data-index="${e}"]`),n=i.querySelector(`div.screen-side-panel[data-index="${e}"]`);t.style.height=`${n.clientHeight}px`,o.style.height=`${i.clientHeight}px`}}else!function(e,t,o){const i=e.querySelectorAll("div.screen-main-panel"),a=t.querySelectorAll("div.screen-side-panel"),r=i.length;for(let e=1;e<r;e++){const t=i.item(e),o=i.item(e-1),n=a.item(e-1);t.style.marginTop=n.clientHeight-o.clientHeight+"px"}o!==n.BrowserSizeMode.Small&&(e.style.height=`${t.clientHeight}px`)}(o,i,c);else o.style.height=`${i.clientHeight}px`}),[c,I]);return y.length>0?(0,n.jsx)("div",{className:(0,n.classNames)("flow-layout-item",{"print-preview":s,"small-size":c===n.BrowserSizeMode.Small}),css:Go(0,R),"data-layoutitemid":i,"data-layoutid":o,ref:w},(0,n.jsx)("div",{className:"screen-group",ref:b},(0,n.jsx)("div",{className:"main-panels",ref:S},(0,n.jsx)(Vo,{rootLayoutId:o,activeIndex:T,screens:y,transitionType:I,layoutEntry:rt,headerHeight:g,isSmallSize:c===n.BrowserSizeMode.Small})),(0,n.jsx)("div",{className:"side-panels"},y.map(((e,t)=>(0,n.jsx)(Ao,{key:e,index:t,isLast:t===y.length-1,screenId:e,refElement:null,layoutEntry:rt,isActive:t===T,stretched:v,triggerType:h,verticalSpace:f,transitionType:m,screenTransitionType:I,onHeightChange:$,onInterctionChange:j,isSmallSize:c===n.BrowserSizeMode.Small,headerHeight:g}))),(0,n.jsx)(n.ReactResizeDetector,{handleHeight:!0,onResize:M})))):null}class _o extends n.React.PureComponent{constructor(e){super(e);const t=n.ExtensionManager.getInstance().getExtensions(`${n.extensionSpec.ExtensionPoints.LayoutTransformer}`);if(t&&t.length>0){const e=t.find((e=>e.layoutType===this.props.layout.type));this.layoutTransform=null==e?void 0:e.transformLayout}}_createItem(e,t,o){var i;const{layout:a}=this.props;return(null==e?void 0:e.isPending)?null:e.type===n.LayoutItemType.ScreenGroup?(0,n.jsx)(Uo,{key:`${e.id}_${t}`,itemIndex:t,layoutId:a.id,layoutItemId:e.id,layoutItem:e}):(null===(i=e.setting)||void 0===i?void 0:i.isFloating)?(0,n.jsx)(Ro,{key:e.id,index:t,gutter:o.gutter,layoutId:a.id,layoutItemId:e.id,layoutItem:e}):(0,n.jsx)(Co,{key:e.id,index:t,gutter:o.gutter,layoutId:a.id,layoutItemId:e.id,layoutItem:e})}render(){const{layout:e,className:t,style:o,layouts:i,browserSizeMode:a}=this.props;if(!e)return null;let r=e;if(i[a]!==e.id&&this.layoutTransform){let t;Object.keys(i).some((o=>{if(i[o]===e.id)return t=o,!0})),r=this.layoutTransform(e,t,a)}const l=r.order||[],s=n.lodash.assign({},xo,r.setting),d=Object.assign(Object.assign(Object.assign({},o),v.styleUtils.toCSSStyle(s.style)),{position:"relative"}),u=(0,n.classNames)("layout flow-layout w-100",t);return(0,n.jsx)("div",{className:u,style:d,"data-layoutid":e.id},(0,n.jsx)(n.IntersectionContext.Provider,{value:{monitor:!0}},(0,n.jsx)(n.OneByOneAnimation,{oid:r.id,"data-layoutid":r.id,className:"trail-container d-flex flex-column align-items-center",css:n.css`
              width: 100%;
            `},l.map(((e,t)=>this._createItem(r.content[e],t,s))))))}}const Xo=n.ReactRedux.connect(ce)(_o);function Yo(e,t,o){var i;const a=Object.keys(null!==(i=e.controllerPanels)&&void 0!==i?i:{}).filter((i=>{const a=E(e,i,n.LayoutItemType.Widget,o);return null!=a&&(a.type!==n.ContainerType.Page||a.id===t)}));return a.sort(),a.join(",")}function Jo(e){if(null==e)return null;const{position:t,offsetX:o=0,offsetY:i=0}=e;let a;return e.widthMode!==S.Stretch&&(0!==o&&(a=`translateX(${o}px)`),t!==n.FixedPosition.TopCenter&&t!==n.FixedPosition.MiddleCenter&&t!==n.FixedPosition.BottomCenter||(a=null!=a?`${a} translateX(-50%)`:"translateX(-50%)")),e.heightMode!==S.Stretch&&(0!==i&&(a=null!=a?`${a} translateY(${i}px)`:`translateY(${i}px)`),t!==n.FixedPosition.MiddleLeft&&t!==n.FixedPosition.MiddleCenter&&t!==n.FixedPosition.MiddleRight||(a=null!=a?`${a} translateY(-50%)`:"translateY(-50%)")),a}function qo(e){let t,o,i;switch(null==e?void 0:e.position){case n.FixedPosition.TopLeft:t=n.css`top: 0; left: 0; bottom: auto; right: auto;`;break;case n.FixedPosition.TopRight:t=n.css`top: 0; left: auto; bottom: auto; right: 0;`;break;case n.FixedPosition.BottomLeft:t=n.css`top: auto; left: 0; bottom: 0; right: auto;`;break;case n.FixedPosition.BottomRight:t=n.css`top: auto; left: auto; bottom: 0; right: 0;`;break;case n.FixedPosition.TopCenter:t=n.css`top: 0; left: 50%; bottom: auto; right: auto;`;break;case n.FixedPosition.BottomCenter:t=n.css`top: auto; left: 50%; bottom: 0; right: auto;`;break;case n.FixedPosition.MiddleLeft:t=n.css`top: 50%; left: 0; bottom: auto; right: auto;`;break;case n.FixedPosition.MiddleRight:t=n.css`top: 50%; left: auto; bottom: auto; right: 0;`;break;case n.FixedPosition.MiddleCenter:t=n.css`top: 50%; left: 50%; bottom: auto; right: auto;`;break;default:t=n.css`top: 0; left: 0; bottom: auto; right: auto;`}return e.widthMode===S.Stretch&&(o=n.css`width:auto;left:${e.left};right:${e.right};`),e.heightMode===S.Stretch&&(i=n.css`height:auto;top:${e.top};bottom:${e.bottom};`),n.css`
    position: fixed;
    ${t}
    width: ${null==e?void 0:e.width};
    height: ${null==e?void 0:e.height};
    ${o};
    ${i}
    overflow: visible;
    z-index: 2;
  `}var Zo=r(9238),Ko=r.n(Zo),Qo=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o};const en=e=>{const t=window.SVG,{className:o}=e,i=Qo(e,["className"]),a=(0,n.classNames)("jimu-icon jimu-icon-component",o);return t?n.React.createElement(t,Object.assign({className:a,src:Ko()},i)):n.React.createElement("svg",Object.assign({className:a},i))},{animated:tn,useSpring:on}=n.spring,nn=n.css`
  position: relative;
  display: flex;
  background-color: var(--ref-palette-white);
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
  .panel-header {
    background-color: var(--sys-color-primary-main);
    color: var(--ref-palette-white);
    font-weight: 500;
    font-size: 0.875rem;
    height: 36px;
    .actions .jimu-btn {
      color: var(--sys-color-primary-light);
      &:hover {
        color: var(--ref-palette-white);
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
`;function an(e){const{layoutId:t,layoutItemId:o,controllerId:i,minimized:a,onClose:r,onToggle:l}=e,[s,d]=n.React.useState(!1),u=n.React.useRef(),c=n.hooks.useTranslation(),p=n.ReactRedux.useSelector((e=>e.appConfig.layouts[t].content[o].widgetId)),g=n.ReactRedux.useSelector((e=>{var t;const o=null===(t=e.widgetsRuntimeInfo)||void 0===t?void 0:t[p];return(null==o?void 0:o.state)===n.WidgetState.Opened})),y=n.ReactRedux.useSelector((e=>{const t=e.appConfig.widgets[p];return null==t?void 0:t.label}),n.ReactRedux.shallowEqual),h=n.ReactRedux.useSelector((e=>{var t;const o=e.widgetsRuntimeInfo[p];return null!==(t=null==o?void 0:o.isClassLoaded)&&void 0!==t&&t})),f=n.ReactRedux.useSelector((e=>e.appConfig.controllerPanels[i].effect)),m=n.React.useMemo((()=>{var e,t;return(null==f?void 0:f.type)&&f.type!==n.AnimationType.None?(0,n.getAnimationEffect)(f.type,{configType:null===(e=f.option)||void 0===e?void 0:e.configType,direction:null===(t=f.option)||void 0===t?void 0:t.direction}):null}),[f]),[I,x]=on((()=>n.DEFAULT_ANIMATION_PROPS),[m]),w=n.React.useCallback((e=>{r(e,p);const t=document.querySelector(`.widget-controller .avatar-card[data-widgetid='${p}']`).querySelector("button");null==t||t.focus()}),[p,r]);let b;return(0,v.useTrapFocusLoop)(u,!0,!0,!1,s&&g),n.React.useEffect((()=>{g&&!s&&(d(!0),n.WidgetManager.getInstance().loadWidgetClass(p).catch((e=>{console.log(e)})))}),[g,p,s]),n.React.useEffect((()=>{g&&null!=m&&x.start(Object.assign(Object.assign({},m.animateProps()),{onRest:()=>{n.lodash.defer((()=>{u.current.style.clipPath=null}))}}))}),[x,g,m]),s&&h&&(b=n.WidgetManager.getInstance().getWidgetClass(p)),(0,n.jsx)(tn.div,{className:(0,n.classNames)("controller-panel flex-column w-100 h-100",{"d-none":!s||!g}),css:nn,ref:u,style:null!=m?I:null},(0,n.jsx)("div",{className:"panel-header d-flex align-items-center flex-shrink-0 px-4"},(0,n.jsx)("div",{className:"label d-flex align-items-center h-100"},(0,n.jsx)("div",{className:"text-truncate"},y)),(0,n.jsx)("div",{className:"actions ml-auto d-flex align-items-center"},(0,n.jsx)(v.Button,{className:"p-0",icon:!0,type:"tertiary",size:"sm",onClick:l,title:c(a?"expand":"collapse"),"aria-label":c(a?"expand":"collapse")},(0,n.jsx)(en,{css:n.css`
              transform: rotate(${a?180:0}deg);
              transition: transform 0.3s ease-in-out;
            `})),(0,n.jsx)(v.Button,{className:"p-0 ml-2",icon:!0,type:"tertiary",size:"sm",onClick:w,title:c("close"),"aria-label":c("close")},(0,n.jsx)(Qt,null)))),(0,n.jsx)("div",{className:"panel-content d-flex flex-grow-1"},!h&&(0,n.jsx)(v.Loading,{type:v.LoadingType.Donut}),b&&(0,n.jsx)("div",{className:"w-100 h-100 widget-content p-1"},(0,n.jsx)(n.ErrorBoundary,null,(0,n.jsx)(b,{widgetId:p,layoutId:t,layoutItemId:o})))))}function rn(e){const{controllerId:t}=e,[o,i]=n.React.useState(!1),a=n.ReactRedux.useSelector((e=>{const o=e.appConfig.widgets[t],n=o.manifest.layouts[0].name,i=o.layouts[n];return i[e.browserSizeMode]||i[e.appConfig.mainSizeMode]})),r=n.ReactRedux.useSelector((e=>{var t;const o=e.appConfig.layouts[a];if(!o)return"";const n=Object.keys(null!==(t=o.content)&&void 0!==t?t:{}).filter((e=>{const t=o.content[e];return null!=(null==t?void 0:t.widgetId)&&!t.isPending}));return n.sort(),n.join(",")})),l=n.ReactRedux.useSelector((e=>{var t,o;const i=Object.keys(null!==(t=e.widgetsRuntimeInfo)&&void 0!==t?t:{}).filter((t=>e.widgetsRuntimeInfo[t].state===n.WidgetState.Opened)),r=e.appConfig.layouts[a];return Object.keys(null!==(o=r.content)&&void 0!==o?o:{}).some((e=>{const t=r.content[e];return null!=(null==t?void 0:t.widgetId)&&!t.isPending&&i.includes(t.widgetId)}))})),s=n.React.useMemo((()=>r.split(",").filter((e=>""!==e))),[r]),d=n.ReactRedux.useSelector((e=>e.appConfig.controllerPanels[t])),u=n.React.useCallback(((e,t)=>{e.stopPropagation(),(0,n.getAppStore)().dispatch(n.appActions.closeWidget(t))}),[]),c=n.React.useCallback((()=>{i(!o)}),[o]),p=n.React.useMemo((()=>n.css`
    ${qo(d)}
    height: ${o?"36px":null==d?void 0:d.height};
    transition: height 0.3s ease-in-out;
    transform: ${Jo(d)}
  `),[d,o]);return 0===s.length?null:(0,n.jsx)("div",{className:(0,n.classNames)("panel-container",{"d-none":!l}),css:p},(0,n.jsx)(n.React.Fragment,null,s.map((e=>(0,n.jsx)(an,{key:e,controllerId:t,layoutId:a,layoutItemId:e,minimized:o,onToggle:c,onClose:u})))))}function ln(e){const{pageId:t}=e,o=n.ReactRedux.useSelector((e=>Yo(e.appConfig,t,e.browserSizeMode))),i=n.React.useMemo((()=>o.split(",").filter((e=>""!==e))),[o]);return(0,n.jsx)(n.React.Fragment,null,i.map((e=>(0,n.jsx)(rn,{key:e,controllerId:e}))))}function sn(e){const{pageJson:t,visible:o,pageContext:i,browserSizeMode:a,isPrintPreview:r,headerFooterHeight:l}=e,[s,u]=n.React.useState(),p=t.layout,g=n.React.useMemo((()=>function(e,t){if(e){const o=(0,n.getAppStore)().getState().appConfig,i=e.layout[o.mainSizeMode],a=o.layouts[i];if((null==a?void 0:a.type)===n.LayoutType.GridLayout)return t>0?`calc(100% - ${t}px)`:"100%"}return"auto"}(t,l)),[l]),y=!r&&t.oneByOneEffect&&t.oneByOneEffect.type!==n.AnimationType.None?t.oneByOneEffect:null,v=y?!o:null;let h;n.React.useEffect((()=>{y&&u((0,n.getNextAnimationId)())}),[o]),n.React.useEffect((()=>{var e;if(o&&p){const t=(0,n.getAppStore)().getState().appConfig,o=p[t.mainSizeMode],i=null===(e=t.layouts[o])||void 0===e?void 0:e.type,a=document.getElementsByTagName("html")[0];i===n.LayoutType.FlowLayout?a.classList.add("scrollable"):a.classList.remove("scrollable")}}),[o]),t.mode!==n.PageMode.FitWindow&&t.maxWidth>0&&(h=t.maxWidth);const f=n.React.useMemo((()=>{const e=(0,n.getAppStore)().getState();let o;return t.layout&&(o=H(t.layout,a,e.appConfig.mainSizeMode)),Object.assign(Object.assign({},i),{maxWidth:h,viewOnly:!0,rootLayoutId:o,pageId:t.id})}),[i,h,t.id]),m=n.React.useMemo((()=>({setting:y,revert:v,playId:y?s:null,oid:f.rootLayoutId,onContextAnimationEnd:()=>{u(-1)}})),[y,v,s]);if(p)return(0,n.jsx)(d.Provider,{key:t.id,value:f},(0,n.jsx)(c.Provider,{value:o},(0,n.jsx)("div",{id:t.id,"data-pageid":t.id,className:"page",css:n.css`
            display: ${o?"flex":"none"};
            background-color: ${t.bodyBackgroundColor||"transparent"};
            height: ${g};
            flex: 1 0 auto;
            z-index: 1;
          `},(0,n.jsx)(n.AnimationContext.Provider,{value:m},(0,n.jsx)(rt,{layouts:p,className:"w-100 flex-grow-1",css:n.css`
                margin: 0 auto;
                background-color: transparent;
                z-index: 0;
              `})),a!==n.BrowserSizeMode.Small&&(0,n.jsx)(ln,{pageId:t.id}))))}function dn(e){var t,o,i,a;const{headerJson:r,visible:l,browserSizeMode:s,theme:u,mainSizeMode:p,pageContext:g,onHeightChange:y}=e,v=r.height[s]||r.height[p]||50,h=r.layout;let f;r.backgroundIMage&&("string"==typeof r.backgroundIMage?f=r.backgroundIMage:"object"==typeof r.backgroundIMage&&(f=r.backgroundIMage.url));const m=n.React.useMemo((()=>{var e,t,o;return n.css`
      display: ${l?"flex":"none"};
      position: ${r.sticky?"sticky":"relative"};
      z-index: ${r.sticky?2:"0"};
      top: 0;
      width: 100%;
      min-height: ${Math.round(parseFloat(v))}px;
      height: auto;
      overflow: hidden;
      background-color: ${r.backgroundColor||(null===(e=u.comp)||void 0===e?void 0:e.Header.root.vars.bg)||"transparent"};
      background-image: ${f};
      background-position: ${r.backgroundPosition};
      color: ${null===(o=null===(t=null==u?void 0:u.comp)||void 0===t?void 0:t.Header.root.vars)||void 0===o?void 0:o.color};
      flex: 0 0 auto;
    `}),[l,v,r.sticky,r.backgroundColor,f,r.backgroundPosition,null===(o=null===(t=null==u?void 0:u.comp)||void 0===t?void 0:t.Header.root.vars)||void 0===o?void 0:o.bg,null===(a=null===(i=null==u?void 0:u.comp)||void 0===i?void 0:i.Header.root.vars)||void 0===a?void 0:a.color]),I=n.React.useMemo((()=>Object.assign(Object.assign({},g),{viewOnly:!0})),[g]),x=n.React.useCallback(((e,t)=>{y(t)}),[y]);return(0,n.jsx)(d.Provider,{value:I},(0,n.jsx)(c.Provider,{value:l},(0,n.jsx)("div",{className:"header",css:m},(0,n.jsx)(rt,{layouts:h,className:"w-100 flex-grow-1"}),(0,n.jsx)(n.ReactResizeDetector,{handleHeight:!0,handleWidth:!1,onResize:x}))))}function un(e){var t,o,i,a;const{footerJson:r,visible:l,browserSizeMode:s,theme:u,mainSizeMode:p,pageContext:g,onHeightChange:y}=e,v=r.height[s]||r.height[p]||50,h=r.layout;let f;r.backgroundIMage&&("string"==typeof r.backgroundIMage?f=r.backgroundIMage:"object"==typeof r.backgroundIMage&&(f=r.backgroundIMage.url));const m=n.React.useMemo((()=>{var e,t,o;return n.css`
      display: ${l?"flex":"none"};
      width: 100%;
      min-height: ${Math.round(parseFloat(v))}px;
      height: auto;
      overflow: hidden;
      background-color: ${r.backgroundColor||(null===(e=u.comp)||void 0===e?void 0:e.Footer.root.vars.bg)||"transparent"};
      background-image: ${f};
      background-position: ${r.backgroundPosition};
      color: ${null===(o=null===(t=null==u?void 0:u.comp)||void 0===t?void 0:t.Footer.root.vars)||void 0===o?void 0:o.color};
      z-index: 0;
    `}),[l,v,r.backgroundColor,f,r.backgroundPosition,null===(o=null===(t=null==u?void 0:u.comp)||void 0===t?void 0:t.Footer.root.vars)||void 0===o?void 0:o.bg,null===(a=null===(i=null==u?void 0:u.comp)||void 0===i?void 0:i.Footer.root.vars)||void 0===a?void 0:a.color]),I=n.React.useMemo((()=>Object.assign(Object.assign({},g),{viewOnly:!0})),[g]),x=n.React.useCallback(((e,t)=>{y(t)}),[y]);return(0,n.jsx)(d.Provider,{value:I},(0,n.jsx)(c.Provider,{value:l},(0,n.jsx)("div",{className:"footer",css:m},(0,n.jsx)(rt,{layouts:h,className:"w-100 flex-grow-1"}),(0,n.jsx)(n.ReactResizeDetector,{handleHeight:!0,handleWidth:!1,onResize:x}))))}const cn=n.css`
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
`;function pn(){const e=n.i18n.getIntl(),t=n.React.useRef();n.React.useEffect((()=>{t.current.focus()}),[]);const o=n.React.useCallback((t=>e.formatMessage({id:t})),[e]),i=n.hooks.useEventCallback((()=>{n.jimuHistory.changeQueryObject({print_preview:null}),(0,n.getAppStore)().dispatch(n.appActions.quitPrintPreview())})),a=n.hooks.useEventCallback((()=>{window.print()}));return(0,n.jsx)("div",{className:"print-preview-tool shadow-3",css:cn},(0,n.jsx)("div",{className:"d-flex justify-content-center align-items-center flex-grow-1"},(0,n.jsx)(v.Button,{ref:t,"aria-label":o("printCurrentPage"),type:"primary",onClick:a},o("printCurrentPage"))),(0,n.jsx)(v.Button,{className:"ml-auto",icon:!0,type:"tertiary","aria-label":o("close"),onClick:i},(0,n.jsx)(Qt,{color:"var(--white)"})))}ot(n.LayoutType.FixedLayout,kt),ot(n.LayoutType.FlowLayout,Xo),ot(n.LayoutType.GridLayout,vo),ot(n.LayoutType.ColumnLayout,Bt);class gn extends n.React.PureComponent{constructor(e){super(e),this.updateHeaderHeight=e=>{this.setState({headerHeight:e})},this.updateFooterHeight=e=>{this.setState({footerHeight:e})},this.isMac=()=>{var e,t;return"macOS"===(null===(t=null===(e=window.jimuUA)||void 0===e?void 0:e.os)||void 0===t?void 0:t.name)},this.handlePrintEvent=e=>{(0,n.getAppStore)().dispatch(n.appActions.activePrintPreview()),n.jimuHistory.changeQueryObject({print_preview:String(!0)}),e.cancelBubble=!0,e.preventDefault(),e.stopImmediatePropagation()},this.state={headerHeight:0,footerHeight:0},n.ExtensionManager.getInstance().registerExtension({epName:n.extensionSpec.ExtensionPoints.LayoutTransformer,extension:new ho}),n.ExtensionManager.getInstance().registerExtension({epName:n.extensionSpec.ExtensionPoints.LayoutTransformer,extension:new mo}),n.ExtensionManager.getInstance().registerExtension({epName:n.extensionSpec.ExtensionPoints.LayoutTransformer,extension:new Io}),this.pageContext={theme:this.props.theme},window.jimuConfig.isBuilder||(this.isMac()?this.keyBindings={"command+keyp":this.handlePrintEvent}:this.keyBindings={"ctrl+keyp":this.handlePrintEvent})}componentDidUpdate(e){if(vn(e.pageStatus)!==vn(this.props.pageStatus)){document.getElementsByTagName("html")[0].scrollTop=0}}render(){const{pageStatus:e,pages:t,theme:o,isPrintPreview:i}=this.props,a=vn(e);if(!a||!(null==t?void 0:t[a]))return null;let r="100%";const l=t[a]||{};l&&!isNaN(+l.width)&&(r=+l.width+"px");const s=n.css`
      width: ${r};
      margin: 0 auto;
      min-height: 100%;
      overflow: auto;
      height: 100%;
      background-color: ${l&&l.backgroundColor};

      html.scrollable & {
        height: auto;
        overflow: unset;
        min-height: 100vh;
      }
    `;return(0,n.jsx)("div",{className:"page-renderer d-flex flex-column",css:s,ref:e=>{this.pageRef=e},"data-testid":"pageRenderer"},i&&(0,n.jsx)(v.Modal,{isOpen:!0,css:n.css`
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
          `,backdrop:!1},(0,n.jsx)(v.ModalBody,{className:"print-preview-content"},(0,n.jsx)(pn,null))),this.renderDialog(),this.renderHeader(),Object.keys(e).map((e=>this.renderPageBody(e,o))),this.renderFooter(),(0,n.jsx)(n.Keyboard,{bindings:this.keyBindings}))}renderHeader(){if(!this.props.header)return null;const{header:e,headerVisible:t,browserSizeMode:o,theme:i,mainSizeMode:a}=this.props;return(0,n.jsx)(dn,{headerJson:e,pageContext:this.pageContext,visible:t,browserSizeMode:o,mainSizeMode:a,theme:i,onHeightChange:this.updateHeaderHeight})}renderFooter(){if(!this.props.footer)return null;const{footer:e,footerVisible:t,browserSizeMode:o,mainSizeMode:i,theme:a}=this.props;return(0,n.jsx)(un,{footerJson:e,pageContext:this.pageContext,visible:t,browserSizeMode:o,mainSizeMode:i,theme:a,onHeightChange:this.updateFooterHeight})}renderPageBody(e,t){const{pageStatus:o,pages:i,isPrintPreview:a}=this.props,r=i[e];if(!r)return;const l=!!o[e];return(0,n.jsx)(sn,{key:r.id,pageJson:r,pageContext:this.pageContext,browserSizeMode:this.props.browserSizeMode,visible:l,isPrintPreview:a,headerFooterHeight:this.state.headerHeight+this.state.footerHeight})}renderDialog(){const{dialogId:e,urlDialogJson:t,splashDialogJson:o,isSplashClosed:i,isPageDlgClosed:a,pageDialogJson:r,pageDialogId:l}=this.props;return(0,n.jsx)(n.React.Fragment,null,t&&(0,n.jsx)(d.Provider,{value:Object.assign(Object.assign({},this.pageContext),{dialogId:e,viewOnly:!0})},(0,n.jsx)(n.AppDialog,{dialogJson:t,runtime:!0})),!a&&r&&(null==t?void 0:t.id)!==r.id&&(0,n.jsx)(d.Provider,{value:Object.assign(Object.assign({},this.pageContext),{dialogId:l,viewOnly:!0})},(0,n.jsx)(n.AppDialog,{dialogJson:r,runtime:!0,isOpenByPage:!0})),!i&&o&&(null==t?void 0:t.id)!==o.id&&(0,n.jsx)(d.Provider,{value:Object.assign(Object.assign({},this.pageContext),{dialogId:o.id,viewOnly:!0})},(0,n.jsx)(n.AppDialog,{dialogJson:o,runtime:!0})))}}gn.displayName="RuntimePageRenderer";const yn=(0,n.createSelector)([e=>e.appConfig.pages,e=>e.appConfig.dialogs,e=>e.appConfig.header,e=>e.appConfig.footer,e=>e.browserSizeMode,e=>e.appConfig.mainSizeMode,e=>{var t;const o=window.jimuConfig.isBuilder?e.appStateInBuilder:e;return null===(t=null==o?void 0:o.appRuntimeInfo)||void 0===t?void 0:t.dialogInfos},e=>{var t;const o=window.jimuConfig.isBuilder?e.appStateInBuilder:e;return null===(t=null==o?void 0:o.appRuntimeInfo)||void 0===t?void 0:t.currentPageId},e=>{var t,o,n;const i=window.jimuConfig.isBuilder?e.appStateInBuilder:e,a=null===(t=null==i?void 0:i.appRuntimeInfo)||void 0===t?void 0:t.currentPageId;return null===(n=null===(o=null==i?void 0:i.appConfig)||void 0===o?void 0:o.pages[a])||void 0===n?void 0:n.autoOpenDialogId},e=>{var t,o;return null!==(o=null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.isPrintPreview)&&void 0!==o&&o},(e,t)=>vn(t.pageStatus),(e,t)=>t.dialogId],((e,t,o,n,i,a,r,l,s,d,u,c)=>{var p,g;if(!u||!e[u])return{};const y=t[Object.keys(t).find((e=>t[e].isSplash))];return{pages:e,header:o,headerVisible:!!e[u].header,footer:n,footerVisible:!!e[u].footer,browserSizeMode:i,mainSizeMode:a,splashDialogJson:y,isSplashClosed:null===(p=null==r?void 0:r[null==y?void 0:y.id])||void 0===p?void 0:p.isClosed,pageDialogId:s,pageDialogJson:t[s],isPageDlgClosed:null===(g=null==r?void 0:r[l+"-"+s])||void 0===g?void 0:g.isClosed,urlDialogJson:t[c],isPrintPreview:d}}));function vn(e){return Object.keys(e).find((t=>e[t]))}const hn=n.ReactRedux.connect(yn)((0,lt.withTheme)(gn));var fn=function(e,t,o,n){return new(o||(o=Promise))((function(i,a){function r(e){try{s(n.next(e))}catch(e){a(e)}}function l(e){try{s(n.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(r,l)}s((n=n.apply(e,t||[])).next())}))};function mn(){return fn(this,void 0,void 0,(function*(){return yield Promise.all([s()])}))}})(),l})())}}}));