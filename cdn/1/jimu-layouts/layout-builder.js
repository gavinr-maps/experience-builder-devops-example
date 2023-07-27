/*! For license information please see layout-builder.js.LICENSE.txt */
System.register(["jimu-core","jimu-for-builder","jimu-ui","jimu-layouts/layout-runtime","jimu-theme","jimu-core/dnd","jimu-ui/advanced/setting-components","jimu-for-builder/templates","jimu-ui/advanced/style-setting-components","jimu-ui/basic/color-picker"],(function(t,e){var o={},i={},n={},a={},s={},l={},r={},d={},u={},c={};return{setters:[function(t){o.APP_FRAME_NAME_IN_BUILDER=t.APP_FRAME_NAME_IN_BUILDER,o.AnimationComponent=t.AnimationComponent,o.AnimationContext=t.AnimationContext,o.AnimationPlayMode=t.AnimationPlayMode,o.AnimationStartMode=t.AnimationStartMode,o.AnimationTriggerType=t.AnimationTriggerType,o.AnimationType=t.AnimationType,o.AppDialog=t.AppDialog,o.AppMode=t.AppMode,o.BrowserSizeMode=t.BrowserSizeMode,o.ContainerType=t.ContainerType,o.DEFAULT_ANIMATION_PROPS=t.DEFAULT_ANIMATION_PROPS,o.ErrorBoundary=t.ErrorBoundary,o.ExtensionManager=t.ExtensionManager,o.GridItemType=t.GridItemType,o.HoverType=t.HoverType,o.Immutable=t.Immutable,o.IntersectionContext=t.IntersectionContext,o.Keyboard=t.Keyboard,o.LayoutItemType=t.LayoutItemType,o.LayoutParentType=t.LayoutParentType,o.LayoutType=t.LayoutType,o.OneByOneAnimation=t.OneByOneAnimation,o.PageMode=t.PageMode,o.PagePart=t.PagePart,o.PageType=t.PageType,o.ParentAnimationMode=t.ParentAnimationMode,o.React=t.React,o.ReactRedux=t.ReactRedux,o.ReactResizeDetector=t.ReactResizeDetector,o.ScreenTransitionType=t.ScreenTransitionType,o.ScreenTriggerType=t.ScreenTriggerType,o.TransitionContainer=t.TransitionContainer,o.TransitionType=t.TransitionType,o.WidgetManager=t.WidgetManager,o.WidgetState=t.WidgetState,o.WidgetType=t.WidgetType,o.appActions=t.appActions,o.appConfigUtils=t.appConfigUtils,o.classNames=t.classNames,o.createSelector=t.createSelector,o.css=t.css,o.extensionSpec=t.extensionSpec,o.getAnimationEffect=t.getAnimationEffect,o.getAppStore=t.getAppStore,o.getHoverStyle=t.getHoverStyle,o.getIndexFromProgress=t.getIndexFromProgress,o.getNextAnimationId=t.getNextAnimationId,o.hooks=t.hooks,o.i18n=t.i18n,o.injectIntl=t.injectIntl,o.jimuHistory=t.jimuHistory,o.jsx=t.jsx,o.lodash=t.lodash,o.moduleLoader=t.moduleLoader,o.polished=t.polished,o.spring=t.spring,o.utils=t.utils},function(t){i.appBuilderSync=t.appBuilderSync,i.builderActions=t.builderActions,i.builderAppSync=t.builderAppSync,i.getAppConfigAction=t.getAppConfigAction,i.templateUtils=t.templateUtils},function(t){n.AdvancedButtonGroup=t.AdvancedButtonGroup,n.Button=t.Button,n.Checkbox=t.Checkbox,n.DistanceUnits=t.DistanceUnits,n.Dropdown=t.Dropdown,n.DropdownButton=t.DropdownButton,n.DropdownMenu=t.DropdownMenu,n.FOCUSABLE_CONTAINER_CLASS=t.FOCUSABLE_CONTAINER_CLASS,n.FillType=t.FillType,n.Icon=t.Icon,n.Loading=t.Loading,n.LoadingType=t.LoadingType,n.NumericInput=t.NumericInput,n.Popper=t.Popper,n.Select=t.Select,n.Switch=t.Switch,n.Tab=t.Tab,n.Tabs=t.Tabs,n.TextInput=t.TextInput,n.Tooltip=t.Tooltip,n._Popper=t._Popper,n.defaultMessages=t.defaultMessages,n.getFallbackPlacementsModifier=t.getFallbackPlacementsModifier,n.styleUtils=t.styleUtils,n.utils=t.utils},function(t){a.CLICK_TOLRERANCE=t.CLICK_TOLRERANCE,a.CONTEXT_MENU_ICON_SIZE=t.CONTEXT_MENU_ICON_SIZE,a.CONTEXT_MENU_ITEM_SIZE=t.CONTEXT_MENU_ITEM_SIZE,a.LayoutContext=t.LayoutContext,a.LayoutItemSizeModes=t.LayoutItemSizeModes,a.LayoutZIndex=t.LayoutZIndex,a.MIN_LAYOUT_ITEM_SIZE=t.MIN_LAYOUT_ITEM_SIZE,a.PageContext=t.PageContext,a.PageVisibilityContext=t.PageVisibilityContext,a.ViewVisibilityContext=t.ViewVisibilityContext,a.ViewportVisibilityContext=t.ViewportVisibilityContext,a.WidgetRenderer=t.WidgetRenderer,a.findLayoutBuilder=t.findLayoutBuilder,a.registerLayoutBuilder=t.registerLayoutBuilder,a.searchUtils=t.searchUtils,a.utils=t.utils},function(t){s.Theme2GlobalStyleClassName=t.Theme2GlobalStyleClassName,s.getBuilderThemeVariables=t.getBuilderThemeVariables,s.getTheme=t.getTheme,s.getTheme2=t.getTheme2,s.useTheme=t.useTheme,s.withBuilderTheme=t.withBuilderTheme,s.withTheme=t.withTheme},function(t){l.interact=t.interact},function(t){r.SettingRow=t.SettingRow,r.SettingSection=t.SettingSection,r.SidePopper=t.SidePopper,r.TemplateSelector=t.TemplateSelector,r.WidgetListPopper=t.WidgetListPopper},function(t){d.getBlockTemplates=t.getBlockTemplates,d.getFooterTemplates=t.getFooterTemplates,d.getFullScreenGridPageTemplates=t.getFullScreenGridPageTemplates,d.getFullScreenPageTemplates=t.getFullScreenPageTemplates,d.getGridTemplates=t.getGridTemplates,d.getHeaderTemplates=t.getHeaderTemplates,d.getScreenGroupTemplates=t.getScreenGroupTemplates,d.getScreenTemplates=t.getScreenTemplates,d.getScrollingPageTemplates=t.getScrollingPageTemplates,d.getWindowTemplates=t.getWindowTemplates},function(t){u.AnimationSettingComponent=t.AnimationSettingComponent,u.InputRatio=t.InputRatio,u.InputUnit=t.InputUnit,u.Padding=t.Padding,u.SizeEditor=t.SizeEditor,u.ThemeBackgroundSection=t.ThemeBackgroundSection,u.ThemeBorderSection=t.ThemeBorderSection,u.ThemeBoxShadowSection=t.ThemeBoxShadowSection,u.TransitionSetting=t.TransitionSetting},function(t){c.ThemeColorPicker=t.ThemeColorPicker}],execute:function(){t((()=>{var t={8679:(t,e,o)=>{"use strict";var i=o(9864),n={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},s={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};function r(t){return i.isMemo(t)?s:l[t.$$typeof]||n}l[i.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},l[i.Memo]=s;var d=Object.defineProperty,u=Object.getOwnPropertyNames,c=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,h=Object.getPrototypeOf,g=Object.prototype;t.exports=function t(e,o,i){if("string"!=typeof o){if(g){var n=h(o);n&&n!==g&&t(e,n,i)}var s=u(o);c&&(s=s.concat(c(o)));for(var l=r(e),m=r(o),f=0;f<s.length;++f){var y=s[f];if(!(a[y]||i&&i[y]||m&&m[y]||l&&l[y])){var v=p(o,y);try{d(e,y,v)}catch(t){}}}}return e}},6128:t=>{"use strict";t.exports=function(t,e,o,i,n,a,s,l){if(!t){var r;if(void 0===e)r=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var d=[o,i,n,a,s,l],u=0;(r=new Error(e.replace(/%s/g,(function(){return d[u++]})))).name="Invariant Violation"}throw r.framesToPop=1,r}}},9921:(t,e)=>{"use strict";var o="function"==typeof Symbol&&Symbol.for,i=o?Symbol.for("react.element"):60103,n=o?Symbol.for("react.portal"):60106,a=o?Symbol.for("react.fragment"):60107,s=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,r=o?Symbol.for("react.provider"):60109,d=o?Symbol.for("react.context"):60110,u=o?Symbol.for("react.async_mode"):60111,c=o?Symbol.for("react.concurrent_mode"):60111,p=o?Symbol.for("react.forward_ref"):60112,h=o?Symbol.for("react.suspense"):60113,g=o?Symbol.for("react.suspense_list"):60120,m=o?Symbol.for("react.memo"):60115,f=o?Symbol.for("react.lazy"):60116,y=o?Symbol.for("react.block"):60121,v=o?Symbol.for("react.fundamental"):60117,I=o?Symbol.for("react.responder"):60118,x=o?Symbol.for("react.scope"):60119;function b(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case i:switch(t=t.type){case u:case c:case a:case l:case s:case h:return t;default:switch(t=t&&t.$$typeof){case d:case p:case f:case m:case r:return t;default:return e}}case n:return e}}}function w(t){return b(t)===c}e.AsyncMode=u,e.ConcurrentMode=c,e.ContextConsumer=d,e.ContextProvider=r,e.Element=i,e.ForwardRef=p,e.Fragment=a,e.Lazy=f,e.Memo=m,e.Portal=n,e.Profiler=l,e.StrictMode=s,e.Suspense=h,e.isAsyncMode=function(t){return w(t)||b(t)===u},e.isConcurrentMode=w,e.isContextConsumer=function(t){return b(t)===d},e.isContextProvider=function(t){return b(t)===r},e.isElement=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===i},e.isForwardRef=function(t){return b(t)===p},e.isFragment=function(t){return b(t)===a},e.isLazy=function(t){return b(t)===f},e.isMemo=function(t){return b(t)===m},e.isPortal=function(t){return b(t)===n},e.isProfiler=function(t){return b(t)===l},e.isStrictMode=function(t){return b(t)===s},e.isSuspense=function(t){return b(t)===h},e.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===a||t===c||t===l||t===s||t===h||t===g||"object"==typeof t&&null!==t&&(t.$$typeof===f||t.$$typeof===m||t.$$typeof===r||t.$$typeof===d||t.$$typeof===p||t.$$typeof===v||t.$$typeof===I||t.$$typeof===x||t.$$typeof===y)},e.typeOf=b},9864:(t,e,o)=>{"use strict";t.exports=o(9921)},4247:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18"><path fill="#000" fill-rule="evenodd" d="M1.5 1.5h5v5h-5v-5ZM.25 7.75V.25h7.5v7.5H.25ZM1.5 11.5h5v5h-5v-5ZM.25 17.75v-7.5h7.5v7.5H.25ZM16.5 1.5h-5v5h5v-5ZM10.25.25v7.5h7.5V.25h-7.5Zm3.125 17.5v-3.125H10.25v-1.25h3.125V10.25h1.25v3.125h3.125v1.25h-3.125v3.125h-1.25Z" clip-rule="evenodd"></path></svg>'},9775:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M3.154 3.154a.527.527 0 0 1 .746 0l1.317 1.317A8.618 8.618 0 0 1 8 4c2.667 0 5.667 1.333 7 4-.696 1.393-1.847 2.422-3.168 3.087l1.014 1.013a.527.527 0 1 1-.746.746l-1.317-1.317A8.617 8.617 0 0 1 8 12c-2.667 0-5.667-1.333-7-4 .696-1.393 1.847-2.422 3.168-3.087L3.154 3.9a.527.527 0 0 1 0-.746Zm1.698 2.443C3.726 6.087 2.782 6.882 2 8c1.422 2.033 3.382 3 6 3a8.66 8.66 0 0 0 2.03-.225l-.675-.674A2.5 2.5 0 0 1 5.9 6.644L4.852 5.598Zm6.296 4.805C12.275 9.912 13.218 9.118 14 8c-1.422-2.033-3.382-3-6-3-.726 0-1.402.074-2.03.225l.675.674a2.5 2.5 0 0 1 3.457 3.456l1.046 1.047ZM6.5 8c0-.221.048-.431.134-.62l1.987 1.986A1.5 1.5 0 0 1 6.5 8Zm.88-1.366 1.986 1.987a1.5 1.5 0 0 0-1.987-1.987Z" clip-rule="evenodd"></path></svg>'},7077:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12"><path fill="#fff" fill-rule="evenodd" d="M12 0H7v1h4v4h1V0ZM0 12h5v-1H1V7H0v5Z" clip-rule="evenodd"></path></svg>'},5369:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M2 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm5 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" clip-rule="evenodd"></path></svg>'},1553:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M9.438.994c.213 0 .397.146.44.35.151.722.257 1.34.316 1.852.374.16.725.362 1.048.599l1.728-.676a.455.455 0 0 1 .556.188l1.42 2.394a.43.43 0 0 1-.091.547 21.98 21.98 0 0 1-1.49 1.194 5.17 5.17 0 0 1-.007 1.183l1.464 1.119a.43.43 0 0 1 .111.563l-1.42 2.394a.454.454 0 0 1-.53.197 22.445 22.445 0 0 1-1.807-.66c-.325.233-.679.43-1.055.586l-.263 1.794a.446.446 0 0 1-.445.376H6.574a.446.446 0 0 1-.44-.35 21.019 21.019 0 0 1-.317-1.853 5.34 5.34 0 0 1-1.047-.598l-1.728.675a.455.455 0 0 1-.556-.187l-1.42-2.395a.43.43 0 0 1 .091-.546c.567-.49 1.063-.888 1.49-1.194a5.167 5.167 0 0 1 .008-1.183L1.19 6.243a.43.43 0 0 1-.112-.562l1.42-2.395a.455.455 0 0 1 .531-.196c.719.233 1.321.453 1.807.66.324-.233.679-.43 1.056-.587l.262-1.794A.446.446 0 0 1 6.6.994h2.839Zm-.365 1H6.985l-.28 1.866-.467.19c-.235.095-.46.21-.672.34l-.207.136-.42.293-.476-.197c-.328-.137-.718-.281-1.169-.433l-.221-.074-1.045 1.719L3.59 6.999l-.06.479a4.127 4.127 0 0 0-.021.816l.014.144.058.492-.419.294c-.288.203-.615.451-.979.746l-.177.145 1.043 1.72 1.845-.703.406.29c.204.146.42.274.645.384l.228.103.474.199.059.49c.04.338.103.731.19 1.177l.043.219h2.088l.282-1.867.466-.19c.236-.095.46-.21.672-.34l.207-.136.419-.293.476.198c.33.136.72.28 1.17.433l.22.072 1.044-1.718-1.56-1.165.06-.479a4.131 4.131 0 0 0 .02-.815l-.013-.144-.06-.492.42-.295a18.1 18.1 0 0 0 .98-.746l.176-.146-1.043-1.72-1.844.705-.406-.29a4.496 4.496 0 0 0-.646-.385l-.228-.103-.474-.199-.058-.49c-.032-.27-.08-.576-.14-.916l-.094-.48Zm-1.067 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 1a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" clip-rule="evenodd"></path></svg>'},4767:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M14 2H2v2h12V2ZM2 1H1v4h14V1H2Zm2 7H2v6h2V8ZM2 7H1v8h4V7H2Zm6 1h6v6H8V8ZM7 7h8v8H7V7Z" clip-rule="evenodd"></path></svg>'},5467:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M8 12c-2.667 0-5.667-1.333-7-4 1.333-2.667 4.333-4 7-4s5.667 1.333 7 4c-1.333 2.667-4.333 4-7 4Zm0-7c-2.618 0-4.578.967-6 3 1.422 2.033 3.382 3 6 3s4.578-.967 6-3c-1.422-2.033-3.382-3-6-3Zm0 5.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Zm0-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" clip-rule="evenodd"></path></svg>'},8683:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M6 5H2v6h4V5ZM1 4v8h6V4H1ZM14 5h-4v6h4V5ZM9 4v8h6V4H9Z" clip-rule="evenodd"></path></svg>'},760:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M2 2h12v4H2V2ZM1 7V1h14v6H1Zm1 3h12v4H2v-4Zm-1 5V9h14v6H1Z" clip-rule="evenodd"></path></svg>'},5634:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M2 2v12h3V2H2Zm4 0v12h4V2H6Zm8 12h-3V2h3v12ZM1 14a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12Z" clip-rule="evenodd"></path></svg>'},100:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M1 1.5a.5.5 0 0 1 1 0v13a.5.5 0 0 1-1 0v-13ZM14 9H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1ZM4 12v-2h10v2H4Zm0-9h6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm0 1v2h6V4H4Z" clip-rule="evenodd"></path></svg>'},2653:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="m1 7.5 3-2V7h2v1H4v1.5l-3-2Zm14 0-3 2V8h-2V7h2V5.5l3 2ZM7 7h2v1H7V7Z" clip-rule="evenodd"></path></svg>'},3262:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M14.5 15a.5.5 0 0 0 0-1H7.46l2.348-2.138a.508.508 0 1 0-.684-.752L8 12.133V2h6.5a.5.5 0 0 0 0-1H.5a.5.5 0 0 0 0 1H7v10.207l-1.124-1.024a.508.508 0 1 0-.684.752L7.46 14H.5a.5.5 0 0 0 0 1h14ZM14 6.5a.5.5 0 0 1-.5.5H10V6h3.5a.5.5 0 0 1 .5.5Zm-13 0a.5.5 0 0 0 .5.5H5V6H1.5a.5.5 0 0 0-.5.5Z" clip-rule="evenodd"></path></svg>'},7123:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M.5 1a.5.5 0 0 0 0 1h7.04L5.192 4.138a.508.508 0 1 0 .684.752L7 3.867V14H.5a.5.5 0 0 0 0 1h14a.5.5 0 0 0 0-1H8V3.793l1.124 1.024a.508.508 0 0 0 .684-.752L7.54 2h6.96a.5.5 0 0 0 0-1H.5ZM1 9.5a.5.5 0 0 1 .5-.5H5v1H1.5a.5.5 0 0 1-.5-.5Zm13 0a.5.5 0 0 0-.5-.5H10v1h3.5a.5.5 0 0 0 .5-.5Z" clip-rule="evenodd"></path></svg>'},1407:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M11.347 2.146a.485.485 0 0 1 0 .708L5.76 8l5.587 5.146a.486.486 0 0 1 0 .708.538.538 0 0 1-.738 0l-5.956-5.5a.485.485 0 0 1 0-.708l5.956-5.5a.538.538 0 0 1 .738 0Z" clip-rule="evenodd"></path></svg>'},9791:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M2 2.707v1.45a.5.5 0 0 1-1 0V1h3.05a.5.5 0 1 1 0 1H2.707L8 7.29 13.293 2H11.95a.5.5 0 1 1 0-1H15v3.156a.5.5 0 0 1-1 0v-1.45L8.707 7.999l5.29 5.289v-1.55a.5.5 0 1 1 1 0V15H11.84a.5.5 0 1 1 0-1h1.456L8 8.705 2.704 14h1.453a.5.5 0 1 1 0 1H1v-3.263a.5.5 0 0 1 1 0v1.553l5.293-5.292L2 2.707Z" clip-rule="evenodd"></path></svg>'},3046:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M7.54 1H14v13H7.46l2.348-2.138a.508.508 0 1 0-.684-.752L8 12.134V9H7v3.206l-1.124-1.022a.508.508 0 1 0-.685.751L7.46 14H1V1h6.54Zm0 0L5.192 3.138a.508.508 0 1 0 .684.752L7 2.867V6h1V2.794l1.124 1.023a.508.508 0 0 0 .684-.752L7.54 1ZM0 1a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1Z" clip-rule="evenodd"></path></svg>'},3626:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M14 1v13H1V7.46l2.138 2.348a.508.508 0 0 0 .752-.684L2.867 8H6V7H2.794l1.023-1.124a.508.508 0 0 0-.752-.685L1 7.46V1h13Zm0-1a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h13Zm-1.867 7L11.11 5.876a.508.508 0 1 1 .752-.684L14 7.54l-2.065 2.268a.508.508 0 0 1-.752-.684L12.207 8H9V7h3.133Z" clip-rule="evenodd"></path></svg>'},3273:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M4.653 13.854a.485.485 0 0 1 0-.708L10.24 8 4.653 2.854a.485.485 0 0 1 0-.708.538.538 0 0 1 .738 0l5.956 5.5a.485.485 0 0 1 0 .708l-5.956 5.5a.538.538 0 0 1-.738 0Z" clip-rule="evenodd"></path></svg>'},1282:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M9.124 12.11 8 13.133V2h6.5a.5.5 0 0 0 0-1H.5a.5.5 0 0 0 0 1H7v11.207l-1.124-1.024a.508.508 0 1 0-.684.752L7.46 15l2.348-2.138a.508.508 0 1 0-.684-.752ZM13.5 7a.5.5 0 0 0 0-1H10v1h3.5Zm-12 0a.5.5 0 0 1 0-1H5v1H1.5Z" clip-rule="evenodd"></path></svg>'},2340:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M5.876 3.89 7 2.867V14H.5a.5.5 0 0 0 0 1h14a.5.5 0 0 0 0-1H8V2.794l1.124 1.023a.508.508 0 0 0 .684-.752L7.54 1 5.192 3.138a.508.508 0 0 0 .684.752ZM1.5 9a.5.5 0 0 0 0 1H5V9H1.5Zm12 0a.5.5 0 0 1 0 1H10V9h3.5Z" clip-rule="evenodd"></path></svg>'},4201:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M13.5 14a.5.5 0 0 0 0-1h-6l3.953-3.459a.5.5 0 0 0-.658-.752L8 11.234V1.5a.5.5 0 0 0-1 0v9.734L4.206 8.789a.5.5 0 0 0-.659.752L7.5 13h-6a.5.5 0 0 0 0 1h12Z" clip-rule="evenodd"></path></svg>'},4703:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M7.5 0a.5.5 0 0 0-.5.5v14a.5.5 0 0 0 1 0V.5a.5.5 0 0 0-.5-.5ZM0 7.5c0 .291.231.527.516.527h3.508L2.527 9.6a.535.535 0 0 0 0 .746.508.508 0 0 0 .73 0L6 7.5 3.257 4.654a.508.508 0 0 0-.73 0 .535.535 0 0 0 0 .746l1.497 1.573H.516A.522.522 0 0 0 0 7.5Zm15 0a.522.522 0 0 1-.516.527h-3.508L12.473 9.6a.535.535 0 0 1 0 .746.508.508 0 0 1-.73 0L9 7.5l2.743-2.846a.508.508 0 0 1 .73 0 .535.535 0 0 1 0 .746l-1.497 1.573h3.508c.285 0 .516.236.516.527Z" clip-rule="evenodd"></path></svg>'},1528:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M1 13.5a.5.5 0 0 0 1 0v-6l3.459 3.953a.5.5 0 0 0 .752-.658L3.766 8H13.5a.5.5 0 0 0 0-1H3.766l2.445-2.794a.5.5 0 1 0-.752-.659L2 7.5v-6a.5.5 0 0 0-1 0v12Z" clip-rule="evenodd"></path></svg>'},7319:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M14 1.5a.5.5 0 0 0-1 0v6L9.541 3.547a.5.5 0 1 0-.752.658L11.234 7H1.5a.5.5 0 0 0 0 1h9.734l-2.445 2.794a.5.5 0 1 0 .752.659L13 7.5v6a.5.5 0 0 0 1 0v-12Z" clip-rule="evenodd"></path></svg>'},3166:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M1.5 1a.5.5 0 0 0 0 1h6L3.547 5.459a.5.5 0 1 0 .658.752L7 3.766V13.5a.5.5 0 0 0 1 0V3.766l2.794 2.445a.5.5 0 1 0 .659-.752L7.5 2h6a.5.5 0 0 0 0-1h-12Z" clip-rule="evenodd"></path></svg>'},7758:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M15 7.5a.5.5 0 0 0-.5-.5H.5a.5.5 0 0 0 0 1h14a.5.5 0 0 0 .5-.5ZM7.5 0a.522.522 0 0 0-.527.516v3.508L5.4 2.527a.535.535 0 0 0-.746 0 .508.508 0 0 0 0 .73L7.5 6l2.846-2.743a.508.508 0 0 0 0-.73.535.535 0 0 0-.746 0L8.027 4.024V.516A.522.522 0 0 0 7.5 0Zm0 15a.522.522 0 0 1-.527-.516v-3.508L5.4 12.473a.535.535 0 0 1-.746 0 .508.508 0 0 1 0-.73L7.5 9l2.846 2.743a.508.508 0 0 1 0 .73.535.535 0 0 1-.746 0l-1.573-1.497v3.508A.522.522 0 0 1 7.5 15Z" clip-rule="evenodd"></path></svg>'},6009:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M13.854 11.347a.486.486 0 0 1-.708 0L8 5.76l-5.146 5.587a.485.485 0 0 1-.708 0 .538.538 0 0 1 0-.738l5.5-5.956a.485.485 0 0 1 .708 0l5.5 5.956a.538.538 0 0 1 0 .738Z" clip-rule="evenodd"></path></svg>'},5339:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m8.745 8 6.1 6.1a.527.527 0 1 1-.745.746L8 8.746l-6.1 6.1a.527.527 0 1 1-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 0 1 .746-.746l6.1 6.1 6.1-6.1a.527.527 0 0 1 .746.746L8.746 8Z"></path></svg>'},9365:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M14.994 2.243A1.375 1.375 0 0 0 13.625 1h-7.25l-.132.006A1.375 1.375 0 0 0 5 2.375v1.75h.917v-1.75l.007-.082a.458.458 0 0 1 .451-.376h7.25l.082.007a.458.458 0 0 1 .376.451v7.25l-.007.082a.458.458 0 0 1-.451.376h-1.738V11h1.738l.132-.006A1.375 1.375 0 0 0 15 9.625v-7.25l-.006-.132ZM9.625 5h-7.25C1.615 5 1 5.616 1 6.375v7.25C1 14.385 1.616 15 2.375 15h7.25c.76 0 1.375-.616 1.375-1.375v-7.25C11 5.615 10.384 5 9.625 5ZM2.4 6h7.2c.22 0 .4.201.4.45v7.1c0 .248-.18.45-.4.45H2.4c-.22 0-.4-.201-.4-.45v-7.1c0-.249.18-.45.4-.45ZM4 8h4v1H4V8Zm4 3H4v1h4v-1Z" clip-rule="evenodd"></path></svg>'},970:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M1.5 11a.5.5 0 0 0 .5-.5V2h8.5a.5.5 0 0 0 0-1H2a1 1 0 0 0-1 1v8.5a.5.5 0 0 0 .5.5ZM5 4h9a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm0 1v9h9V5H5Z" clip-rule="evenodd"></path></svg>'},9216:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M11.226 1.312c-.403-.404-1.044-.417-1.431-.03L2.49 8.587l-.48 2.674a.637.637 0 0 0 .73.73l2.673-.48 7.305-7.306c.387-.387.374-1.028-.03-1.431l-1.462-1.462Zm-8.113 9.575.32-1.781 4.991-4.992 1.462 1.462-4.992 4.991-1.781.32Zm7.473-6.012 1.402-1.4-1.462-1.463-1.401 1.402 1.461 1.461Z" clip-rule="evenodd"></path><path fill="#000" d="M1.5 14a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13Z"></path></svg>'},3616:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M12 0a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h8Zm0 1H4a3 3 0 0 0-2.995 2.824L1 4v8a3 3 0 0 0 2.824 2.995L4 15h8a3 3 0 0 0 2.995-2.824L15 12V4a3 3 0 0 0-2.824-2.995L12 1ZM8 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" clip-rule="evenodd"></path></svg>'},840:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M7.5 0A3.5 3.5 0 0 1 11 3.5V6h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1V3.5A3.5 3.5 0 0 1 7.5 0ZM5 6h5V3.5a2.5 2.5 0 0 0-2.336-2.495L7.5 1a2.5 2.5 0 0 0-2.495 2.336L5 3.5V6Zm6 1H3v8h9V7h-1Zm-3.5 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" clip-rule="evenodd"></path></svg>'},5384:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M7.5 1.914 6.475 2.94a.5.5 0 1 1-.707-.707L8 0l2.157 2.157a.5.5 0 0 1-.707.707l-.95-.95V7.5h5.586l-1.1-1.1a.5.5 0 1 1 .706-.708L16 8l-2.232 2.232a.5.5 0 1 1-.707-.707L14.086 8.5H8.5v5.586l1.025-1.025a.5.5 0 1 1 .707.707L8 16l-2.308-2.308a.5.5 0 1 1 .707-.707l1.101 1.1V8.5H1.914l.95.95a.5.5 0 0 1-.707.707L0 8l2.232-2.232a.5.5 0 1 1 .707.707L1.914 7.5H7.5V1.914Z" clip-rule="evenodd"></path></svg>'},3059:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M12 8.002a.5.5 0 0 1-1 0V1H1v12.002h3.5a.5.5 0 1 1 0 1H1a1 1 0 0 1-1-1V1A1 1 0 0 1 .044.706.498.498 0 0 1 .5 0H11a1 1 0 0 1 1 1v7.002Zm2.218 1.486a.5.5 0 0 0-.708 0l-5.657 5.658a.5.5 0 0 0 .708.707l5.657-5.658a.5.5 0 0 0 0-.707ZM11 9.928c.376 0 .794.041 1.23.141l-.871.871a5.147 5.147 0 0 0-.359-.012c-1 0-2.731.297-3.83 2 .313.486.677.857 1.062 1.14l-.676.676A6.081 6.081 0 0 1 6 12.928c1.333-2.334 3.5-3 5-3Zm0 5c-.219 0-.472-.014-.746-.054l-.824.825a5.62 5.62 0 0 0 1.57.23c1.5 0 3.667-.667 5-3a6.012 6.012 0 0 0-1.804-1.998l-.684.684c.478.299.936.721 1.319 1.313-1.1 1.704-2.831 2-3.831 2ZM2.5 3.502A.5.5 0 0 1 3 3h6a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5ZM3 6a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H3Z" clip-rule="evenodd"></path></svg>'},4750:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M7.5 0a.5.5 0 0 0-.5.5V7H.5a.5.5 0 0 0 0 1H7v6.5a.5.5 0 0 0 1 0V8h6.5a.5.5 0 0 0 0-1H8V.5a.5.5 0 0 0-.5-.5Z"></path></svg>'},4650:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 16"><path fill="#000" d="M7 15V0h1v15H7ZM0 2h4v1H1v9h3v1H0V2ZM11 13h4V2h-4v1h3v9h-3v1Z"></path></svg>'},1442:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 16"><path fill="#000" fill-rule="evenodd" d="M3 1v3H2V0h11v4h-1V1H3ZM2 11h1v3h9v-3h1v4H2v-4ZM15 8H0V7h15v1Z" clip-rule="evenodd"></path></svg>'},4357:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M6 6.5a.5.5 0 0 1 1 0v6a.5.5 0 0 1-1 0v-6ZM9.5 6a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 1 0v-6a.5.5 0 0 0-.5-.5Z"></path><path fill="#000" fill-rule="evenodd" d="M11 0H5a1 1 0 0 0-1 1v2H.5a.5.5 0 0 0 0 1h1.6l.81 11.1a1 1 0 0 0 .995.9h8.19a1 1 0 0 0 .995-.9L13.9 4h1.6a.5.5 0 0 0 0-1H12V1a1 1 0 0 0-1-1Zm0 3V1H5v2h6Zm1.895 1h-9.79l.8 11h8.19l.8-11Z" clip-rule="evenodd"></path></svg>'},7465:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M12 0a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h8Zm0 1H4a3 3 0 0 0-2.995 2.824L1 4v8a3 3 0 0 0 2.824 2.995L4 15h8a3 3 0 0 0 2.995-2.824L15 12V4a3 3 0 0 0-2.824-2.995L12 1ZM8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" clip-rule="evenodd"></path></svg>'},7322:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M16 3.5a3.5 3.5 0 1 0-7 0V6H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-2V3.5l.005-.164A2.5 2.5 0 0 1 12.5 1l.164.005A2.5 2.5 0 0 1 15 3.5a.5.5 0 0 0 1 0ZM9 7H3v8h9V7H9Zm-1.5 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" clip-rule="evenodd"></path></svg>'},5124:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="m8 0 8 6-8 6-8-6 8-6ZM1.887 6 8 10.82 14.113 6 8 1.18 1.887 6ZM0 9.81.563 9 8 14.775 15.437 9l.563.81L8 16 0 9.81Z" clip-rule="evenodd"></path></svg>'},8866:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6.5 7.5A.5.5 0 0 1 7 7h1.5v4.5h1a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1h1V8H7a.5.5 0 0 1-.5-.5Z"></path><path fill="#000" fill-rule="evenodd" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16Zm0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14Z" clip-rule="evenodd"></path></svg>'},9781:t=>{t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjkycHgiIGhlaWdodD0iNzJweCIgdmlld0JveD0iMCAwIDkyIDcyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT5pY29uX2FuaW1hdGlvbl9pbl9ub25lPC90aXRsZT4NCiAgICA8ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTk0MS4wMDAwMDAsIC0xOTIuMDAwMDAwKSI+DQogICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5MTcuMDAwMDAwLCA1Mi4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNC4wMDAwMDAsIDE0MC4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgPHJlY3QgZmlsbC1ydWxlPSJub256ZXJvIiB4PSIwIiB5PSIwIiB3aWR0aD0iOTIiIGhlaWdodD0iNzIiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0iIzZBNkE2QSIgcG9pbnRzPSI0NiA0OCAzMS44OTMxNTM5IDU1LjQxNjQwNzkgMzQuNTg3MzIxOCAzOS43MDgyMDM5IDIzLjE3NDY0MzYgMjguNTgzNTkyMSAzOC45NDY1NzcgMjYuMjkxNzk2MSA0NiAxMiA1My4wNTM0MjMgMjYuMjkxNzk2MSA2OC44MjUzNTY0IDI4LjU4MzU5MjEgNTcuNDEyNjc4MiAzOS43MDgyMDM5IDYwLjEwNjg0NjEgNTUuNDE2NDA3OSI+PC9wb2x5Z29uPg0KICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg=="},3167:t=>{t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjkycHgiIGhlaWdodD0iNzJweCIgdmlld0JveD0iMCAwIDkyIDcyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT5pY29uX2FuaW1hdGlvbl90cmFuc2l0aW9uX2ZhZGU8L3RpdGxlPg0KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTA2MS4wMDAwMDAsIC0xNTAuMDAwMDAwKSI+DQogICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5MTcuMDAwMDAwLCA1Mi4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNDQuMDAwMDAwLCA5OC4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgPHJlY3Qgb3BhY2l0eT0iMC4xMDAwMDAwMDEiIGZpbGwtcnVsZT0ibm9uemVybyIgeD0iMCIgeT0iMCIgd2lkdGg9IjkyIiBoZWlnaHQ9IjcyIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgIDxyZWN0IGZpbGw9IiM1MjUyNTIiIHg9IjI4IiB5PSIyNCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjQ4Ij48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgIDxyZWN0IGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsPSIjMzYzNjM2IiB4PSIwIiB5PSIwIiB3aWR0aD0iNjQiIGhlaWdodD0iNDgiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTY0LDAgTDY0LDQ4IEwwLDQ4IEwwLDAgTDY0LDAgWiBNNjMsMSBMMSwxIEwxLDQ3IEw2Myw0NyBMNjMsMSBaIiBmaWxsPSIjNkE2QTZBIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4NCiAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4="},8830:t=>{t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjkycHgiIGhlaWdodD0iNzJweCIgdmlld0JveD0iMCAwIDkyIDcyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT5pY29uX2FuaW1hdGlvbl90cmFuc2l0aW9uX3B1c2g8L3RpdGxlPg0KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTQxLjAwMDAwMCwgLTI3MC4wMDAwMDApIiBmaWxsLXJ1bGU9Im5vbnplcm8iPg0KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTE3LjAwMDAwMCwgNTIuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQuMDAwMDAwLCAyMTguMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5MiIgaGVpZ2h0PSI3MiI+PC9yZWN0Pg0KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOTIsMCBMOTIsNzIgTDAsNzIgTDAsMCBMOTIsMCBaIE05MSwzNyBMMSwzNyBMMSw3MSBMOTEsNzEgTDkxLDM3IFogTTQ2LDQ0IEw1Niw1NCBMNTAuMTY2NjY2Nyw1NCBMNTAuMTY2NjY2Nyw2NCBMNDEuODMzMzMzMyw2NCBMNDEuODMzMzMzMyw1NCBMMzYsNTQgTDQ2LDQ0IFoiIGZpbGw9IiM2QTZBNkEiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4="},8891:t=>{"use strict";t.exports=o},4020:t=>{"use strict";t.exports=l},3137:t=>{"use strict";t.exports=i},6262:t=>{"use strict";t.exports=d},4758:t=>{"use strict";t.exports=a},4796:t=>{"use strict";t.exports=s},726:t=>{"use strict";t.exports=n},7756:t=>{"use strict";t.exports=r},5505:t=>{"use strict";t.exports=u},1362:t=>{"use strict";t.exports=c}},e={};function p(o){var i=e[o];if(void 0!==i)return i.exports;var n=e[o]={exports:{}};return t[o](n,n.exports,p),n.exports}p.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return p.d(e,{a:e}),e},p.d=(t,e)=>{for(var o in e)p.o(e,o)&&!p.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},p.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),p.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var h={};return(()=>{"use strict";p.r(h),p.d(h,{CanvasPane:()=>Yi,ColumnLayoutBuilder:()=>sn,ColumnLayoutItemSetting:()=>ms,CommonLayoutItemSetting:()=>Oa,CommonTransformSetting:()=>Ea,DEFAULT_ROW_LAYOUT_SETTING:()=>ln,DropArea:()=>De,FixedLayoutItemSetting:()=>_a,FlowLayoutItemSetting:()=>rs,FlowLayoutSetting:()=>Ms,GLOBAL_DRAGGING_CLASS_NAME:()=>Ct,GLOBAL_H5_DRAGGING_CLASS_NAME:()=>Rt,GLOBAL_RESIZING_CLASS_NAME:()=>kt,GridLayoutBuilder:()=>ja,GridLayoutItemSetting:()=>Cs,GridLayoutSetting:()=>ks,LIMITED_BOUNDARY_CLASS_NAME:()=>Tt,LayoutBuilder:()=>Qi,LayoutEntry:()=>to,LayoutItemInBuilder:()=>xo,PageRenderer:()=>hr,RowLayoutBuilder:()=>Tn,RowLayoutItemSetting:()=>xs,SectionRendererInBuilder:()=>co,ShapeL:()=>Xt,ShapeRect:()=>Kt,Toolbar:()=>Ft,WidgetRendererInBuilder:()=>Je,addItemToLayout:()=>V,bindDragHandler:()=>Pt,bindResizeHandler:()=>$t,createDialogFromTemplate:()=>xr,createPageFromTemplate:()=>Ir,createSectionFromTemplate:()=>br,createWidgetFromTemplate:()=>wr,duplicateGridItem:()=>On,duplicateLayoutItem:()=>D,fixedLayoutActions:()=>t,floatingLayoutItem:()=>U,getGridLayoutStructure:()=>Ln,getLabelOfGridTab:()=>jn,getRootLayoutId:()=>E,mergeWidgetsIntoColumn:()=>G,pendGridLayoutItem:()=>En,pendLayoutItem:()=>B,sectionMenuItems:()=>Se,sinkingLayoutItem:()=>Y,splitGridCell:()=>Fn,supportFloating:()=>Z,supportSinking:()=>_,withRnd:()=>vr});var t={};p.r(t),p.d(t,{alignFullHeight:()=>Li,alignFullSize:()=>ji,alignFullWidth:()=>Ti,alignHorizontalCenter:()=>Pi,alignTo:()=>Ri,alignVerticalCenter:()=>Mi,bringForward:()=>xi,bringToFront:()=>bi,sendBackward:()=>wi,sendToBack:()=>Si,toggleLockLayout:()=>Ci});var e=p(8891),o=p(3137),i=p(726);const n=e.lodash.assign({},{gridSize:1}),a=e.lodash.assign({},{order:0},{lockParent:!1,lockLayout:!1,autoProps:{}});var s=p(4758),l=p(5369),r=p.n(l);const d=t=>{const o=window.SVG,{className:i}=t,n=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o}(t,["className"]),a=(0,e.classNames)("jimu-icon jimu-icon-component",i);return o?e.React.createElement(o,Object.assign({className:a,src:r()},n)):e.React.createElement("svg",Object.assign({className:a},n))};var u=p(4796);const c=e.React.createContext({}),g=(0,u.withBuilderTheme)(i.Tooltip),m=window.jimuConfig.isInBuilder?g:i.Tooltip,f=[{name:"flip",options:{fallbackPlacements:["top","right"]}}];class y extends e.React.PureComponent{constructor(t){super(t),s.utils.autoBindHandlers(this,["select","handleMouseEnter","handleMouseLeave"])}componentDidUpdate(){const t=this.getValue(this.props.visible,this.contextProps),e=this.getValue(this.props.disabled,this.contextProps);t&&!e||this.contextProps.onItemUnSelected(this.props.uid)}componentWillUnmount(){this.contextProps.onItemUnSelected(this.props.uid)}select(t){if(t.stopPropagation(),this.props.onClick){const{parentRef:e}=this.contextProps;this.props.onClick({layoutId:this.contextProps.layoutId,layoutItem:this.contextProps.layoutItem,clientRect:e&&e.getBoundingClientRect()},t),this.contextProps.onItemClick(this.props.uid)}}handleDoubleClick(t){t.stopPropagation()}handleMouseEnter(t){t.stopPropagation(),this.props.onMouseEnter&&this.props.onMouseEnter({layoutId:this.contextProps.layoutId,layoutItem:this.contextProps.layoutItem,clientRect:null},t)}handleMouseLeave(t){t.stopPropagation(),this.props.onMouseLeave&&this.props.onMouseLeave({layoutId:this.contextProps.layoutId,layoutItem:this.contextProps.layoutItem,clientRect:null},t)}getValue(t,e){return"function"==typeof t?t(e):t}getStyle(){const{theme:t}=this.contextProps;return e.css`
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
        &:hover {
          background: ${t.colors.palette.light[300]};
        }
      }
      &.disabled {
        .jimu-btn {
          cursor: default;
        }
        .jimu-btn svg, .toolbar-label {
          color: ${t.colors.palette.dark[200]} !important;
        }
      }

      &.msg {
        width: auto;
        font-size: 12px;
        color: ${t.colors.black};
        letter-spacing: 0.33px;
        text-align: center;
        padding: 0 8px;
      }

      .toolbar-group & {
        justify-content: flex-start;
      }

      .popper {
        border: 1px solid ${t.colors.palette.dark[400]};
      }

      .toolbar-label {
        color: ${t.colors.black};
      }
    `}separatorStyle(){const{theme:t}=this.contextProps;return this.props.isInGroup?e.css`
        width: 100%;
        height: 1px;
        background-color: ${t.colors.palette.light[600]};
        align-self: center;
      `:e.css`
      div.toolbar-item + &,
      div.toolbar-group + & {
        display: block;
      }
      display: none;
      width: 1px;
      height: 30px;
      border-left: 1px solid ${t.colors.palette.light[600]};
      align-self: center;
    `}tooltipStyle(){const{theme:t}=this.contextProps;return e.css`
      border: none;

      .tooltip {
        color: ${t.colors.black};
        background-color: ${t.colors.palette.light[600]};
        border-color: ${t.colors.palette.light[300]};
      }
    `}createButton({textContent:t,iconContent:o,tooltip:n,isDisabled:a,noAction:s,isChecked:l,rotate:r,iconSize:d,autoFlipIcon:u,ref:c}){const p=t?"":n,h=a?{title:p}:{},g=(0,e.jsx)(i.Button,Object.assign({"aria-label":t||n,ref:c,className:"px-0 w-100 text-left",type:"tertiary",size:"sm",icon:o&&!t,role:"menuitem",onClick:a||s?null:this.select,disabled:a,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,onDoubleClick:this.handleDoubleClick,"data-extname":this.props.extName},h),o&&(0,e.jsx)(i.Icon,{className:(0,e.classNames)("tool-item-icon",{checked:l}),icon:o,rotate:r,size:d,color:this.contextProps.theme.colors.black,autoFlip:u}),t&&(0,e.jsx)("span",{className:"toolbar-label text-nowrap"},t));return a?g:(0,e.jsx)(m,{placement:"bottom",title:p,modifiers:f,css:this.tooltipStyle()},g)}render(){const{icon:t,autoFlipIcon:o,label:n,size:a,checked:s,disabled:l,visible:r,rotate:d,settingPanel:u,title:p,uid:h,widgetId:g,className:m,seperator:f}=this.props;if(f)return(0,e.jsx)(c.Consumer,null,(t=>(this.contextProps=t,(0,e.jsx)("div",{"data-testid":"toolbarSeparator",css:this.separatorStyle()}))));const y=null==this.props.onClick,v=a||16,I=u;return(0,e.jsx)(c.Consumer,null,(a=>{if(this.contextProps=a,g&&a.layoutItem.widgetId!==g)return null;let c="";"function"==typeof p?c=p(a):"string"==typeof p&&(c=p);const f=u&&a.activeItem===h&&a.toggleOn,x=f||this.getValue(s,a),b=this.getValue(l,a),w=this.getValue(r,a),S=this.getValue(n,a),C=this.getValue(t,a);return null==r||w?(0,e.jsx)("div",{className:(0,e.classNames)("toolbar-item",m,{selected:x,disabled:b,msg:S,"no-action":y}),css:this.getStyle()},!I&&this.createButton({textContent:S,iconContent:C,tooltip:c,isDisabled:b,noAction:y,isChecked:x,rotate:d,iconSize:v,autoFlipIcon:o,ref:null}),I&&(0,e.jsx)(e.React.Fragment,null,this.createButton({textContent:S,iconContent:C,tooltip:c,isDisabled:b,noAction:y,isChecked:x,rotate:d,iconSize:v,autoFlipIcon:o,ref:t=>{this.reference=t}}),(0,e.jsx)(i.Popper,{placement:"bottom-start",reference:this.reference,open:f,disablePortal:!0},(0,e.jsx)("div",{css:e.css`
                          display: flex;
                          pointer-events: all;
                          background-color: ${a.theme.colors.white};
                          border-radius: 2px;
                          box-shadow: 0 2px 8px 1px rgba(0, 0, 0, 0.2);
                        `,className:"d-flex"},f&&(0,e.jsx)(I,Object.assign({},a)))))):null}))}}const v=()=>{},I=window.jimuConfig.isInBuilder?g:i.Tooltip;class x extends e.React.PureComponent{constructor(t){super(t),this.dropdownBtnRef=e.React.createRef(),s.utils.autoBindHandlers(this,["togglePopToolItems","onItemClick"])}getBaseStyle(){const{theme:t}=this.contextProps;return e.css`
      cursor: pointer;
      display: flex;
      justify-content: space-around;
      align-items: center;
      background-color: ${t.colors.palette.light[300]};

      &:hover {
        background-color: ${t.colors.palette.light[500]} !important;
      }
    `}getValue(t,e){return"function"==typeof t?t(e):t}togglePopToolItems(t){t&&t.stopPropagation(),this.contextProps.onItemClick(this.props.uid)}onItemClick(t,o){const{parentRef:i}=this.contextProps;t.onClick(Object.assign(Object.assign({},o),{clientRect:i.getBoundingClientRect()})),e.lodash.defer((()=>{this.dropdownBtnRef.current.focus()}))}createToolItem(t,o,i){return t.onClick||t.seperator?(0,e.jsx)(y,Object.assign({key:i,uid:`${this.props.uid}_${i+1}`,isInGroup:!0},t,{onClick:()=>{this.onItemClick(t,o)}})):null}getGroupMenu(t,o){const{theme:n}=this.contextProps;return t?(0,e.jsx)(i.Icon,{rotate:t.rotate,icon:t.icon,size:t.size||16,color:n.colors.black}):o[0].icon?(0,e.jsx)(i.Icon,{icon:o[0].icon,size:o[0].size||16,color:n.colors.black}):(0,e.jsx)(y,Object.assign({uid:`${this.props.uid}_0`,onClick:v},o[0]))}handleDoubleClick(t){t.stopPropagation()}tooltipStyle(){const{theme:t}=this.contextProps;return e.css`
      border: none;

      .tooltip {
        color: ${t.colors.black};
        background-color: ${t.colors.palette.light[600]};
        border-color: ${t.colors.palette.light[300]};
      }
    `}render(){const{tools:t,uid:o}=this.props;return t&&0!==t.length?(0,e.jsx)(c.Consumer,null,(n=>{this.contextProps=n;const{visible:a,caret:s=!0,title:l}=t[0],r=this.getValue(a,n);if(void 0!==a&&!r)return null;const d=t.filter((t=>{const{visible:e}=t,o=this.getValue(e,n);return void 0===e||o}));if(0===d.length)return null;if(1===d.length)return(0,e.jsx)(y,Object.assign({uid:`${o}_0`},d[0]));let c;d.some((t=>{const{checked:e}=t;if(this.getValue(e,n))return c=t,!0}));let p="";return"function"==typeof l?p=l(n):"string"==typeof l&&(p=l),(0,e.jsx)("div",{className:"toolbar-group",css:this.getBaseStyle()},(0,e.jsx)(i.Dropdown,{direction:"down",size:"sm",className:"px-1",isOpen:n.toggleOn&&n.activeItem===o,toggle:this.togglePopToolItems},(0,e.jsx)(I,{placement:"bottom",title:p,css:this.tooltipStyle()},(0,e.jsx)(i.DropdownButton,{icon:!0,arrow:s,type:"tertiary",size:"sm",ref:this.dropdownBtnRef,css:e.css`
                      .caret-icon {
                        color: ${n.theme.colors.palette.dark[600]};
                        margin-left: 0.25rem;
                      }
                    `,onDoubleClick:this.handleDoubleClick},this.getGroupMenu(c,d))),(0,e.jsx)(i.DropdownMenu,{className:`p-0 ${window.jimuConfig.isInBuilder?u.Theme2GlobalStyleClassName:""}`,css:e.css`min-width: 5rem;`},d.map(((t,e)=>this.createToolItem(t,n,e))))))})):null}}var b;!function(t){t[t.BringForward=0]="BringForward",t[t.SendBackward=1]="SendBackward",t[t.BringToFront=2]="BringToFront",t[t.SendToBack=3]="SendToBack"}(b||(b={}));const w=3;var S,C,R;function T(t,e){var o,i,n;if(!e)return null;const{layoutId:a,layoutItemId:s}=e;return null===(n=null===(i=null===(o=t.layouts)||void 0===o?void 0:o[a])||void 0===i?void 0:i.content)||void 0===n?void 0:n[s]}function A(t,o,i){var n,a,s,l,r,d,u,c,p,h;const{layoutId:g}=t,m=o.layouts[g];switch(null===(n=null==m?void 0:m.parent)||void 0===n?void 0:n.type){case e.LayoutParentType.View:{const t=o.views[m.parent.id],e=o.sections[t.parent];return 1===(null===(s=null===(a=null==e?void 0:e.parent)||void 0===a?void 0:a[i])||void 0===s?void 0:s.length)?e.parent[i][0]:(null===(r=null===(l=null==e?void 0:e.parent)||void 0===l?void 0:l[i])||void 0===r?void 0:r.length)>1?A(e.parent[i][0],o,i):null}case e.LayoutParentType.Widget:{const t=o.widgets[m.parent.id];return 1===(null===(u=null===(d=null==t?void 0:t.parent)||void 0===d?void 0:d[i])||void 0===u?void 0:u.length)?t.parent[i][0]:(null===(p=null===(c=null==t?void 0:t.parent)||void 0===c?void 0:c[i])||void 0===p?void 0:p.length)>1?A(t.parent[i][0],o,i):null}case e.LayoutParentType.Screen:{const t=o.screens[m.parent.id];return null===(h=o.screenGroups[t.parent].parent)||void 0===h?void 0:h[i]}default:return null}}function M(t,o,i){var n;let a=t.layouts[o];for(;(null==a?void 0:a.parent)&&[e.LayoutParentType.Screen,e.LayoutParentType.View,e.LayoutParentType.Widget].includes(a.parent.type);){const e=A({layoutId:o},t,i);o=null==e?void 0:e.layoutId,a=t.layouts[o]}switch(null===(n=null==a?void 0:a.parent)||void 0===n?void 0:n.type){case e.LayoutParentType.Dialog:return{type:e.ContainerType.Dialog,id:a.parent.id};case e.LayoutParentType.Page:return{type:e.ContainerType.Page,id:a.parent.id};case e.LayoutParentType.Header:return{type:e.ContainerType.Header,id:"header"};case e.LayoutParentType.Footer:return{type:e.ContainerType.Footer,id:"footer"}}}function P(t,o,i,n,a=!0){var s,l,r,d,u;switch(i){case e.LayoutItemType.ScreenGroup:{const e=null===(s=t.screenGroups[o].parent)||void 0===s?void 0:s[n],i=T(t,e);return a||!(null==i?void 0:i.isPending)?e:null}case e.LayoutItemType.Section:case e.LayoutItemType.Widget:{let s;if(i===e.LayoutItemType.Widget&&(s=t.widgets[o]),i===e.LayoutItemType.Section&&(s=t.sections[o]),1===(null===(r=null===(l=null==s?void 0:s.parent)||void 0===l?void 0:l[n])||void 0===r?void 0:r.length)){const e=s.parent[n][0],o=T(t,e);return a||!(null==o?void 0:o.isPending)?e:null}if((null===(u=null===(d=null==s?void 0:s.parent)||void 0===d?void 0:d[n])||void 0===u?void 0:u.length)>1){const o=s.parent[n][0],i=t.layouts[o.layoutId];if(null==i?void 0:i.parent)return P(t,i.parent.id,e.LayoutItemType.Widget,n,a)}}}return null}function L(t){return/^-?\d*(\.\d+)?%$/.test(t)}function j(t,e){return null==(null==t?void 0:t[e])?null:"string"==typeof t[e]?t[e]:function(t){const e=parseFloat(t);return!isNaN(e)&&isFinite(e)}(t[e])?`${Math.round(parseFloat(t[e]))}px`:null}function z(t,e){return parseFloat(`${t}`)*e/100}function k(){var t,o;return null!==(o=null===(t=(0,e.getAppStore)().getState().appContext)||void 0===t?void 0:t.isRTL)&&void 0!==o&&o}function N(){var t;return window.jimuConfig.isBuilder?null===(t=(0,e.getAppStore)().getState().appStateInBuilder)||void 0===t?void 0:t.browserSizeMode:(0,e.getAppStore)().getState().browserSizeMode}function $(t,e,o){const i=null==o?void 0:o[t],n="width"===t?"left":"top",a="width"===t?"right":"bottom";if(!i)return null!=e[t]?C.Custom:null!=e[n]&&null!=e[a]?C.Stretch:C.Auto;if(!0===i)return null!=e[n]&&null!=e[a]?C.Stretch:C.Auto;switch(i){case C.Auto:return C.Auto;case C.Stretch:return C.Stretch;default:return C.Custom}}!function(t){t.Auto="auto",t[t.Normal=0]="Normal",t[t.BoundaryDropArea=10]="BoundaryDropArea",t[t.DragMoveTip=20]="DragMoveTip",t[t.HandlerTools=30]="HandlerTools",t[t.DraggingItem=40]="DraggingItem"}(S||(S={})),(R=C||(C={})).Auto="AUTO",R.Stretch="STRETCH",R.Custom="CUSTOM",(0,e.createSelector)([t=>t.appConfig.mainSizeMode,t=>t.browserSizeMode,(t,o)=>{var i,n,a,s,l;let r;if(t.browserSizeMode===t.appConfig.mainSizeMode)r=!0;else{let s;(null===(i=o.layouts)||void 0===i?void 0:i[t.browserSizeMode])?s=t.browserSizeMode:(null===(n=o.layouts)||void 0===n?void 0:n[t.appConfig.mainSizeMode])&&(s=t.appConfig.mainSizeMode);const l=null===(a=o.layouts)||void 0===a?void 0:a[s],d=M(t.appConfig,l,s);(null==d?void 0:d.type)===e.ContainerType.Header?r=null!=t.appConfig.header.layout[t.browserSizeMode]:(null==d?void 0:d.type)===e.ContainerType.Footer?r=null!=t.appConfig.footer.layout[t.browserSizeMode]:(null==d?void 0:d.type)===e.ContainerType.Dialog?r=null!=t.appConfig.dialogs[d.id].layout[t.browserSizeMode]:(null==d?void 0:d.type)===e.ContainerType.Page&&(r=null!=t.appConfig.pages[d.id].layout[t.browserSizeMode])}if(r&&(null===(s=o.layouts)||void 0===s?void 0:s[t.browserSizeMode])){const e=o.layouts[t.browserSizeMode];return t.appConfig.layouts[e]}const d=null===(l=o.layouts)||void 0===l?void 0:l[t.appConfig.mainSizeMode];return t.appConfig.layouts[d]}],((t,e,o)=>({mainSizeMode:t,browserSizeMode:e,layout:o}))),(0,e.createSelector)([(t,e)=>{var o,i,n;const{layoutId:a,layoutItemId:s}=e;return null===(n=null===(i=null===(o=t.appConfig.layouts)||void 0===o?void 0:o[a])||void 0===i?void 0:i.content)||void 0===n?void 0:n[s]},(t,o)=>{var i,n,a,s,l,r;const{layoutId:d,layoutItemId:u}=o,c=null===(a=null===(n=null===(i=t.appConfig.layouts)||void 0===i?void 0:i[d])||void 0===n?void 0:n.content)||void 0===a?void 0:a[u];if((null==c?void 0:c.type)===e.LayoutItemType.Widget&&c.widgetId){const e=t.appConfig.widgets[c.widgetId];return null!==(r=null===(l=null===(s=null==e?void 0:e.manifest)||void 0===s?void 0:s.properties)||void 0===l?void 0:l.watchViewportVisibility)&&void 0!==r&&r}return!1},t=>{var e;return null===(e=t.appRuntimeInfo)||void 0===e?void 0:e.selection},t=>{var e;return null===(e=t.appRuntimeInfo)||void 0===e?void 0:e.animationPreview},t=>{var e;return null===(e=t.appRuntimeInfo)||void 0===e?void 0:e.hoverPreview},(t,e)=>e.layoutId],((t,e,o,i,n,a)=>{var s;if(!t)return{layoutItem:null,selected:!1};let l=!1;const r=null!==(s=t.isPending)&&void 0!==s&&s;o&&(l=o.layoutId===a&&o.layoutItemId===t.id);const d={selected:l,watchViewportVisibility:e,layoutItem:r?null:t,autoScroll:l?o.autoScroll:void 0};if(l&&(null==i?void 0:i.layoutInfo)){const{layoutId:e,layoutItemId:o}=i.layoutInfo;d.animationPreview=e===a&&o===t.id,d.playMode=d.animationPreview?i.playMode:null,d.previewId=d.animationPreview?i.id:null}else if(l&&(null==n?void 0:n.layoutInfo)){const{layoutId:e,layoutItemId:o}=n.layoutInfo;d.hoverPreview=e===a&&o===t.id,d.previewId=d.hoverPreview?n.id:null}return d})),(0,e.createSelector)([(t,o)=>{var i,n,a;const{layoutId:s,layoutItemId:l}=o,r=null===(a=null===(n=null===(i=t.appConfig.layouts)||void 0===i?void 0:i[s])||void 0===n?void 0:n.content)||void 0===a?void 0:a[l];if((null==r?void 0:r.type)===e.LayoutItemType.Widget&&r.widgetId)return t.appConfig.widgets[r.widgetId]},(t,o)=>{var i,n,a,s;const{layoutId:l,layoutItemId:r}=o,d=null===(a=null===(n=null===(i=t.appConfig.layouts)||void 0===i?void 0:i[l])||void 0===n?void 0:n.content)||void 0===a?void 0:a[r];if((null==d?void 0:d.type)===e.LayoutItemType.Widget&&!d.widgetId)return null===(s=d.setting)||void 0===s?void 0:s.placeholderStyle},(t,o)=>{var i,n,a;const{layoutId:s,layoutItemId:l}=o,r=null===(a=null===(n=null===(i=t.appConfig.layouts)||void 0===i?void 0:i[s])||void 0===n?void 0:n.content)||void 0===a?void 0:a[l];if((null==r?void 0:r.type)===e.LayoutItemType.Widget&&r.widgetId)return t.widgetsRuntimeInfo[r.widgetId]},(t,o)=>{var i,n,a;const{layoutId:s,layoutItemId:l}=o,r=null===(a=null===(n=null===(i=t.appConfig.layouts)||void 0===i?void 0:i[s])||void 0===n?void 0:n.content)||void 0===a?void 0:a[l];if((null==r?void 0:r.type)===e.LayoutItemType.Widget&&!r.widgetId)return t.widgetsState[r.widgetId]},(t,o)=>{var i,n;const{layoutId:a}=o,s=null===(i=t.appConfig.layouts)||void 0===i?void 0:i[a];if((null===(n=s.parent)||void 0===n?void 0:n.type)===e.LayoutParentType.Widget){const e=s.parent.id,o=t.appConfig.widgets[e];return/widgets\/common\/controller\/?/.test(o.uri)}return!1}],((t,o,i,n,a)=>{var s,l,r,d,u,c,p,h,g,m,f,y,v,I,x,b;const w=null===(l=null===(s=null==t?void 0:t.manifest)||void 0===s?void 0:s.properties)||void 0===l?void 0:l.supportInlineEditing;return{hasEmbeddedLayout:(null===(d=null===(r=null==t?void 0:t.manifest)||void 0===r?void 0:r.properties)||void 0===d?void 0:d.hasEmbeddedLayout)&&Object.keys(null!==(u=t.layouts)&&void 0!==u?u:{}).length>0,supportInlineEditing:w,supportRepeat:null===(p=null===(c=null==t?void 0:t.manifest)||void 0===c?void 0:c.properties)||void 0===p?void 0:p.supportRepeat,isClassLoaded:null!==(h=null==i?void 0:i.isClassLoaded)&&void 0!==h&&h,isInlineEditing:w&&(null==i?void 0:i.isInlineEditing),isInController:a,useDragHandler:null!==(f=null===(m=null===(g=null==t?void 0:t.manifest)||void 0===g?void 0:g.properties)||void 0===m?void 0:m.useDragHandler)&&void 0!==f&&f,widgetStyle:null!=t?t.style:o,canCrossLayoutBoundary:null===(v=null===(y=null==t?void 0:t.manifest)||void 0===y?void 0:y.properties)||void 0===v?void 0:v.canCrossLayoutBoundary,hasExtension:(null===(x=null===(I=null==t?void 0:t.manifest)||void 0===I?void 0:I.extensions)||void 0===x?void 0:x.length)>0,widgetJson:t,widgetId:null==t?void 0:t.id,isFunctionalWidget:(null===(b=null==t?void 0:t.manifest)||void 0===b?void 0:b.widgetType)!==e.WidgetType.Layout,widgetState:n}}));var O=function(t,e,o,i){return new(o||(o=Promise))((function(n,a){function s(t){try{r(i.next(t))}catch(t){a(t)}}function l(t){try{r(i.throw(t))}catch(t){a(t)}}function r(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(s,l)}r((i=i.apply(t,e||[])).next())}))};function E(){if(s.utils.getCurrentDialogId())return s.utils.getCurrentDialogRootLayoutId();switch(s.utils.getActivePagePart()){case e.PagePart.Header:return s.utils.getHeaderRootLayoutId();case e.PagePart.Footer:return s.utils.getFooterRootLayoutId();default:return s.utils.getCurrentPageRootLayoutId()}}function B(t){const i=(0,o.getAppConfigAction)();i.setLayoutItemToPending(t,!0),window.jimuConfig.isBuilder?(i.exec(),o.builderAppSync.publishChangeSelectionToApp(null)):(0,e.getAppStore)().dispatch(e.appActions.layoutChanged(i.appConfig,null))}function D(t){const{layoutId:i,layoutItemId:n}=t,a=(0,o.getAppConfigAction)(),l=a.duplicateLayoutItem(i,i,n,!0);a.setParentOfContent(l,!0);let r=a.appConfig;const d=r.layouts[i];if(d.type===e.LayoutType.FixedLayout)r=F(r,l);else if(d.type===e.LayoutType.FlowLayout)r=H(r,t,l);else{const e=s.searchUtils.getWidgetIdThatUseTheLayoutId(a.appConfig,i);if(e)switch(a.appConfig.widgets[e].manifest.name){case"column":r=H(r,t,l);break;case"row":r=function(t,e,o){let i=t;const{layoutId:n}=e,a=t.layouts[n],s=(t,e)=>parseInt(i.layouts[n].content[t].bbox[e],10),l=(t,e,o)=>{i=i.setIn(["layouts",n,"content",t,"bbox",e],o)},r=Object.keys(a.content).sort(((t,e)=>s(t,"left")-s(e,"left"))),d=r.indexOf(o.layoutItemId);r.splice(d,1);const u=r.indexOf(e.layoutItemId);r.splice(u+1,0,o.layoutItemId),i=i.setIn(["layouts",n,"order"],r);let c=0;for(let t=0;t<r.length;t++)c+=s(r[t],"width");if(l(r[0],"left",0),c<=12)for(let t=1;t<r.length;t++)l(r[t],"left",s(r[t-1],"left")+s(r[t-1],"width"));else{const t=c/12;l(r[0],"width",Math.max(1,Math.floor(s(r[0],"width")/t)));for(let e=1;e<r.length;e++)l(r[e],"left",s(r[e-1],"left")+s(r[e-1],"width")),l(r[e],"width",Math.max(1,Math.floor(s(r[e],"width")/t)))}return i}(r,t,l);break;case"fixed":r=F(r,l)}}window.jimuConfig.isBuilder?((0,o.getAppConfigAction)(r).exec(),o.builderAppSync.publishChangeSelectionToApp(l)):(0,e.getAppStore)().dispatch(e.appActions.layoutChanged(r,l))}function F(t,e){var o,i;const{layoutId:n,layoutItemId:a}=e,l=t.layouts[n].content[a];let{bbox:r,setting:d}=l;const u=t=>{if(s.utils.isPercentage(t))return`${parseFloat(t)+5}%`;const e=parseInt(t,10);return isNaN(e)?t:e+20};return r=(null===(o=null==d?void 0:d.autoProps)||void 0===o?void 0:o.left)?r.set("right",u(r.right)):r.set("left",u(r.left)),r=(null===(i=null==d?void 0:d.autoProps)||void 0===i?void 0:i.top)?r.set("bottom",u(r.bottom)):r.set("top",u(r.top)),(null==d?void 0:d.hCenter)&&(null==d?void 0:d.vCenter)&&(d=d.set("vCenter",!1)),t.setIn(["layouts",n,"content",a,"bbox"],r).setIn(["layouts",n,"content",a,"setting"],d)}function H(t,e,o){var i;const{layoutId:n}=e,a=t.layouts[n],s=[].concat(a.order),l=s.indexOf(o.layoutItemId);s.splice(l,1);const r=s.indexOf(e.layoutItemId);s.splice(r+1,0,o.layoutItemId);const d=a.content[o.layoutItemId];let u=t.setIn(["layouts",n,"order"],s);return(null===(i=d.setting)||void 0===i?void 0:i.isFloating)&&(u=F(u,o)),u}function V(t,i,n,a,l,r){return O(this,void 0,void 0,(function*(){const d=i.layoutInfo;return i.id?yield function(t,i,n,a,l,r){var d;return O(this,void 0,void 0,(function*(){let u;const c=(0,o.getAppConfigAction)(t),p=`${s.utils.getMaximumId(t.layouts[n.layoutId])+1}`;u=i.itemType===e.LayoutItemType.Section?(0,e.Immutable)({id:p,type:e.LayoutItemType.Section,bbox:s.utils.replaceBoundingBox(null,l,a),sectionId:i.id}):i.itemType===e.LayoutItemType.ScreenGroup?(0,e.Immutable)({id:p,type:e.LayoutItemType.ScreenGroup,bbox:{},screenGroupId:i.id}):(0,e.Immutable)({id:p,type:e.LayoutItemType.Widget,bbox:s.utils.replaceBoundingBox(null,l,a),widgetId:i.id});const{layoutId:h,layoutItemId:g}=i.layoutInfo,m=t.layouts[h].content[g];let f;(null===(d=m.setting)||void 0===d?void 0:d.lockParent)&&(u=u.setIn(["setting","lockParent"],!0)),i.isFromCurrentSizeMode||(f=s.searchUtils.getBrowserSizeModeByLayoutId(c.appConfig,i.layoutInfo.layoutId)),i.isFromCurrentSizeMode&&c.removeLayoutItem(i.layoutInfo,!1);const y=c.addItemIntoLayout(n.layoutId,u,r,f);return yield Promise.resolve({layoutInfo:y,updatedAppConfig:c.appConfig})}))}(t,i,n,a,l,r):d&&d.layoutId&&d.layoutItemId?yield function(t,i,n,a,l,r){var d,u,c,p;return O(this,void 0,void 0,(function*(){const h=i.layoutInfo,{layoutId:g,layoutItemId:m}=h;if(g===n.layoutId){const e=(0,o.getAppConfigAction)(t),i=null===(p=null===(c=null===(u=null===(d=e.appConfig.layouts)||void 0===d?void 0:d[g])||void 0===u?void 0:u.content)||void 0===c?void 0:c[m])||void 0===p?void 0:p.bbox;if(i){let t=s.utils.replaceBoundingBox(i,l,a);t=t.set("width",i.width).set("height",i.height),e.editLayoutItemBBox(h,t)}return r>=0&&e.editLayoutItemIndex(h,n,r),e.setLayoutItemToPending(h,!1),yield Promise.resolve({layoutInfo:h,updatedAppConfig:e.appConfig})}let f=t;if(t.layouts[g].type===e.LayoutType.GridLayout){const e=(0,o.getAppConfigAction)().detachGridItem(t.layouts[g],m);f=f.setIn(["layouts",g],e)}const y=(0,o.getAppConfigAction)(f),v=y.moveLayoutItemToAnotherLayout(h,n,s.utils.replaceBoundingBox(null,l,a),r);y.clearRedundantLayout(h);const I=s.searchUtils.getWidgetIdThatUseTheLayoutId(t,n.layoutId);return I&&W(t.widgets[I])&&y.editLayoutItemSetting(v,{lockParent:!0}),yield Promise.resolve({layoutInfo:v,updatedAppConfig:y.appConfig})}))}(t,i,n,a,l,r):i.itemType===e.LayoutItemType.Section?yield function(t,i,n,a,l){return O(this,void 0,void 0,(function*(){const r=(0,o.getAppConfigAction)(t),d=r.createSection().id,u=`${s.utils.getMaximumId(t.layouts[i.layoutId])+1}`,c=(0,e.Immutable)({sectionId:d,id:u,type:e.LayoutItemType.Section,bbox:s.utils.replaceBoundingBox(null,a,n)}),p=r.addItemIntoLayout(i.layoutId,c,l);return yield Promise.resolve({layoutInfo:p,updatedAppConfig:r.appConfig})}))}(t,n,a,l,r):i.uri||i.itemId?yield function(t,i,n,a,l,r){return O(this,void 0,void 0,(function*(){const d={uri:i.uri,itemId:i.itemId};return o.appBuilderSync.publishIsBusyToBuilder(!0),yield e.WidgetManager.getInstance().handleNewWidgetJson(d).then((i=>{var d,u,c,p,h;const g=(0,o.getAppConfigAction)(t),m=`${s.utils.getMaximumId(t.layouts[n.layoutId])+1}`,f=e.appConfigUtils.getUniqueId(g.appConfig,"widget");if(i.id=f,g.createWidget((0,e.Immutable)(i)),(!l.width||!l.height)&&(null===(d=i.manifest)||void 0===d?void 0:d.defaultSize)){const{width:t,height:e}=i.manifest.defaultSize;l=Object.assign(Object.assign({},l),{width:t,height:e})}let y=(0,e.Immutable)({id:m,type:e.LayoutItemType.Widget,bbox:s.utils.replaceBoundingBox(null,l,a),widgetId:i.id});(null===(c=null===(u=i.manifest)||void 0===u?void 0:u.defaultSize)||void 0===c?void 0:c.autoWidth)&&(y=y.setIn(["setting","autoProps","width"],s.LayoutItemSizeModes.Auto)),(null===(h=null===(p=i.manifest)||void 0===p?void 0:p.defaultSize)||void 0===h?void 0:h.autoHeight)&&(y=y.setIn(["setting","autoProps","height"],s.LayoutItemSizeModes.Auto));const v=s.searchUtils.getWidgetIdThatUseTheLayoutId(t,n.layoutId);v&&W(t.widgets[v])&&(y=y.setIn(["setting","lockParent"],!0));const I=g.addItemIntoLayout(n.layoutId,y,r);return o.appBuilderSync.publishIsBusyToBuilder(!1),{layoutInfo:I,updatedAppConfig:g.appConfig}})).catch((t=>O(this,void 0,void 0,(function*(){return o.appBuilderSync.publishIsBusyToBuilder(!1),yield Promise.reject(t)}))))}))}(t,i,n,a,l,r):yield function(t,i,n,a,l,r){return O(this,void 0,void 0,(function*(){const i=(0,o.getAppConfigAction)(t),d=`${s.utils.getMaximumId(t.layouts[n.layoutId])+1}`;let u=(0,e.Immutable)({id:d,type:e.LayoutItemType.Widget,bbox:s.utils.replaceBoundingBox(null,l,a)});const c=s.searchUtils.getWidgetIdThatUseTheLayoutId(t,n.layoutId);c&&W(t.widgets[c])&&(u=u.setIn(["setting","lockParent"],!0));const p=i.addItemIntoLayout(n.layoutId,u,r);return yield Promise.resolve({layoutInfo:p,updatedAppConfig:i.appConfig})}))}(t,0,n,a,l,r)}))}function W(t){var o,i,n,a,s,l,r;const d=null===(o=null==t?void 0:t.manifest)||void 0===o?void 0:o.widgetType,u=null!==(a=null===(n=null===(i=null==t?void 0:t.manifest)||void 0===i?void 0:i.properties)||void 0===n?void 0:n.hasEmbeddedLayout)&&void 0!==a&&a,c=null!==(r=null===(l=null===(s=null==t?void 0:t.manifest)||void 0===s?void 0:s.properties)||void 0===l?void 0:l.lockChildren)&&void 0!==r&&r;return d!==e.WidgetType.Layout&&u&&c}function G(t,i,n,a,l,r){return O(this,void 0,void 0,(function*(){const d=(0,o.getAppConfigAction)(t),u=t.layouts[l.layoutId].content[l.layoutItemId],c=N(),p={id:e.appConfigUtils.getUniqueId(d.appConfig,"widget"),uri:"widgets/layout/column/",parent:{[c]:[l]}};return o.appBuilderSync.publishIsBusyToBuilder(!0),yield e.WidgetManager.getInstance().handleNewWidgetJson(p).then((t=>{d.createWidget((0,e.Immutable)(t)),d.updateLayoutItem(l,"widgetId",t.id),d.editLayoutItemSetting(l,{maintainedByLayout:!0});let o=(0,e.Immutable)(u.bbox);const i=Math.round(parseFloat(o.height)+a.height+20);o=o.set("height",`${i}px`),d.editLayoutItemBBox(l,o)})).then((()=>O(this,void 0,void 0,(function*(){const t=d.appConfig.widgets[p.id],o=Object.keys(t.layouts)[0],h=t.layouts[o],g=s.searchUtils.findLayoutId(h,c,d.appConfig.mainSizeMode);return yield V(d.appConfig,i,{layoutId:g},n,a).then((({updatedAppConfig:t})=>O(this,void 0,void 0,(function*(){var o,i,n;const a=s.utils.getMaximumId(t.layouts[g]),d={id:`${a+1}`,widgetId:u.widgetId,type:e.LayoutItemType.Widget,bbox:u.bbox,setting:{autoProps:null===(o=u.setting)||void 0===o?void 0:o.autoProps}},p=t.widgets[u.widgetId];let h,m=[].concat(null!==(n=null===(i=p.parent)||void 0===i?void 0:i[c])&&void 0!==n?n:[]);return m.length>0&&(m=m.filter((t=>t.layoutId!==l.layoutId&&t.layoutItemId!==u.id))),m.push({layoutId:g,layoutItemId:d.id}),h="top"===r?[`${a}`,d.id]:[d.id,`${a}`],t=t.setIn(["layouts",g,"content",d.id],d).setIn(["layouts",g,"order"],h).setIn(["widgets",u.widgetId,"parent",c],m),yield Promise.resolve({updatedAppConfig:t,layoutInfo:l})}))))})))).then((({updatedAppConfig:t})=>(o.appBuilderSync.publishIsBusyToBuilder(!1),{updatedAppConfig:t,layoutInfo:l}))).catch((t=>O(this,void 0,void 0,(function*(){return o.appBuilderSync.publishIsBusyToBuilder(!1),yield Promise.reject(t)}))))}))}function Z(t){var i,n,a,l,r;const{layoutId:d,layoutItemId:u}=t,c=(0,o.getAppConfigAction)().appConfig,p=null===(a=null===(n=null===(i=null==c?void 0:c.layouts)||void 0===i?void 0:i[d])||void 0===n?void 0:n.content)||void 0===a?void 0:a[u];if(!p||(null===(l=p.setting)||void 0===l?void 0:l.isFloating))return!1;const h=s.utils.getActivePagePart();if(h!==e.PagePart.Header&&h!==e.PagePart.Footer){const t=s.utils.getCurrentPageRootLayoutId();return(null===(r=c.layouts[t])||void 0===r?void 0:r.type)===e.LayoutType.FlowLayout&&d!==t}return!1}function _(t){var e,i,n,a,s;const{layoutId:l,layoutItemId:r}=t,d=(0,o.getAppConfigAction)().appConfig,u=null===(n=null===(i=null===(e=null==d?void 0:d.layouts)||void 0===e?void 0:e[l])||void 0===i?void 0:i.content)||void 0===n?void 0:n[r];return null!==(s=null===(a=null==u?void 0:u.setting)||void 0===a?void 0:a.isFloating)&&void 0!==s&&s}function U(t,i,n){const a=s.utils.getCurrentPageRootLayoutId();let l=(0,o.getAppConfigAction)();V(l.appConfig,{layoutInfo:t},{layoutId:a},{left:0,top:0,width:1e3,height:1e3},i).then((t=>{l=(0,o.getAppConfigAction)(t.updatedAppConfig),l.editLayoutItemBBox(t.layoutInfo,{top:0,left:0,right:0,width:`${i.width}px`,height:`${i.height}px`}).editLayoutItemSetting(t.layoutInfo,{isFloating:!0,lockParent:!0,floatingArea:n}),window.jimuConfig.isBuilder?((0,o.getAppConfigAction)(l.appConfig).exec(),o.builderAppSync.publishChangeSelectionToApp(t.layoutInfo)):(0,e.getAppStore)().dispatch(e.appActions.layoutChanged(l.appConfig,t.layoutInfo))}))}function Y(t,i){var n;const{layoutId:a,layoutItemId:l}=t,r=(0,o.getAppConfigAction)();let d,u=-1,c=2;const p=document.querySelectorAll(`div.flow-layout[data-layoutid="${a}"] > div.trail-container > div.builder-layout-item:not(.floating)`);if((null==p?void 0:p.length)>1)for(let t=0;t<p.length;t++){const e=p[t];if(-1===u&&e.getAttribute("data-layoutitemid")!==l){const o=e.getBoundingClientRect();if(c=Math.round(12*i.width/o.width),s.utils.contains(o,i)){u=t,d=o;break}if(s.utils.intersects(o,i)){u=t+1,d=o;break}}}else{const t=e.utils.findViewportSize(s.utils.getAppConfig(),s.utils.getCurrentSizeMode());d={left:0,top:0,width:t.width,height:t.height},c=Math.round(12*i.width/t.width)}-1===u&&(u=(null===(n=r.appConfig.layouts[a].order)||void 0===n?void 0:n.length)||0),X({layoutInfo:t},{layoutId:a},d||i,i,c,u)}function X(t,i,n,a,l,r,d){return O(this,void 0,void 0,(function*(){let u=(0,o.getAppConfigAction)(d);const c={name:"row",label:"row",uri:"widgets/layout/row/",icon:null,itemType:e.LayoutItemType.Widget,manifest:{widgetType:e.WidgetType.Layout,properties:{}}};yield V(u.appConfig,c,i,n,a,r).then((o=>O(this,void 0,void 0,(function*(){let{updatedAppConfig:r}=o;const d=s.searchUtils.findLayoutItem(r,o.layoutInfo),u=r.widgets[d.widgetId],c=Object.keys(u.layouts)[0],p=u.layouts[c],h=s.searchUtils.findLayoutId(p,(0,e.getAppStore)().getState().browserSizeMode,r.mainSizeMode),g=e.i18n.getIntl().formatMessage({id:"block"}),m=e.appConfigUtils.getUniqueLabel(r,"widget",g);r=r.setIn(["widgets",u.id,"label"],m),r=r.setIn(["layouts",i.layoutId,"content",d.id,"setting","heightMode"],"fixed").setIn(["layouts",i.layoutId,"content",d.id,"bbox","height"],a.height+20).setIn(["layouts",h,"parent"],{id:u.id,type:e.LayoutParentType.Widget});const f=Math.round(Math.min(a.height,n.height));return yield V(r,t,{layoutId:h},n,{width:l,height:f,left:0},0)})))).then((t=>{const{layoutInfo:i,updatedAppConfig:n}=t;u=(0,o.getAppConfigAction)(n),u.editLayoutItemSetting(i,{heightMode:"fit"}),window.jimuConfig.isBuilder?((0,o.getAppConfigAction)(u.appConfig).exec(),o.builderAppSync.publishChangeSelectionToApp(i)):(0,e.getAppStore)().dispatch(e.appActions.layoutChanged(u.appConfig,i))}))}))}class q extends e.React.PureComponent{constructor(t){super(t),this.topLeft=this.updateFloatingArea.bind(this,1),this.topCenter=this.updateFloatingArea.bind(this,2),this.topRight=this.updateFloatingArea.bind(this,3),this.middleLeft=this.updateFloatingArea.bind(this,4),this.middleCenter=this.updateFloatingArea.bind(this,5),this.middleRight=this.updateFloatingArea.bind(this,6),this.bottomLeft=this.updateFloatingArea.bind(this,7),this.bottomCenter=this.updateFloatingArea.bind(this,8),this.bottomRight=this.updateFloatingArea.bind(this,9)}updateFloatingArea(t){const{layoutId:e,layoutItem:o}=this.props;U({layoutId:e,layoutItemId:o.id},this.getSizeOfItem(),t)}getSizeOfItem(){const{layoutId:t,layoutItem:e}=this.props,o=document.querySelector(`div.exb-rnd[data-layoutid="${t}"][data-layoutitemid="${e.id}"]`);return o?o.getBoundingClientRect():null}getStyle(t){const o=t.colors.palette.light[500];return e.css`
      background-color: ${t.colors.palette.light[300]};
      position: relative;
      padding: 4px;

      .content {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-row-gap: 0;
        grid-column-gap: 0;
        border: 1px solid ${o};

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
          border-right: 1px solid ${o};
        }
        & > div:nth-of-type(3n) {
          border-left: 1px solid ${o};
        }
        & > div:nth-of-type(1), & > div:nth-of-type(2), & > div:nth-of-type(3) {
          border-bottom: 1px solid ${o};
        }
        & > div:nth-of-type(7), & > div:nth-of-type(8), & > div:nth-of-type(9) {
          border-top: 1px solid ${o};
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
    `}render(){const{area:t,theme:o}=this.props;return(0,e.jsx)("div",{className:"floating-area-chooser d-flex",css:this.getStyle(o)},(0,e.jsx)("div",{className:"content w-100"},(0,e.jsx)("div",{className:(0,e.classNames)("top-left",{selected:1===t}),onClick:this.topLeft}),(0,e.jsx)("div",{className:(0,e.classNames)("top-center",{selected:2===t}),onClick:this.topCenter}),(0,e.jsx)("div",{className:(0,e.classNames)("top-right",{selected:3===t}),onClick:this.topRight}),(0,e.jsx)("div",{className:(0,e.classNames)("middle-left",{selected:4===t}),onClick:this.middleLeft}),(0,e.jsx)("div",{className:(0,e.classNames)("middle-center",{selected:5===t}),onClick:this.middleCenter}),(0,e.jsx)("div",{className:(0,e.classNames)("middle-right",{selected:6===t}),onClick:this.middleRight}),(0,e.jsx)("div",{className:(0,e.classNames)("bottom-left",{selected:7===t}),onClick:this.bottomLeft}),(0,e.jsx)("div",{className:(0,e.classNames)("bottom-center",{selected:8===t}),onClick:this.bottomCenter}),(0,e.jsx)("div",{className:(0,e.classNames)("bottom-right",{selected:9===t}),onClick:this.bottomRight})))}}q.defaultProps={area:0};const J=(0,u.withBuilderTheme)(q);var Q=p(4357),K=p.n(Q),tt=p(3059),et=p.n(tt),ot=p(5384),it=p.n(ot),nt=p(970),at=p.n(nt),st=p(3616),lt=p.n(st),rt=p(7465),dt=p.n(rt),ut=p(1553),ct=p.n(ut);function pt(){var t;return null===(t=(0,e.getAppStore)().getState().appRuntimeInfo)||void 0===t?void 0:t.appMode}function ht(){var t,o,i;return null!==(i=null===(o=null===(t=(0,e.getAppStore)().getState().appConfig)||void 0===t?void 0:t.forBuilderAttributes)||void 0===o?void 0:o.lockLayout)&&void 0!==i&&i}function gt(t){var o,i,n;const a=(0,e.getAppStore)().getState().appConfig;if(t.type===e.LayoutItemType.Widget){const e=a.widgets[t.widgetId];return null!==(o=null==e?void 0:e.label)&&void 0!==o?o:""}if(t.type===e.LayoutItemType.Section){const e=a.sections[t.sectionId];return null!==(i=null==e?void 0:e.label)&&void 0!==i?i:""}if(t.type===e.LayoutItemType.ScreenGroup){const e=a.screenGroups[t.screenGroupId];return null!==(n=null==e?void 0:e.label)&&void 0!==n?n:""}return""}function mt(){var t;return(null===(t=(0,e.getAppStore)().getState().appRuntimeInfo)||void 0===t?void 0:t.appMode)===e.AppMode.Design}function ft(t){var o;if(t.type===e.LayoutItemType.Widget&&t.widgetId){const i=(0,e.getAppStore)().getState().appConfig.widgets[t.widgetId];if(i)return(null===(o=i.manifest)||void 0===o?void 0:o.widgetType)!==e.WidgetType.Layout}return!1}const yt={icon:K(),title:t=>t.formatMessage("delete"),visible:t=>pt()===e.AppMode.Design&&(!ht()||ft(t.layoutItem)),onClick:t=>{const{layoutItem:e,layoutId:i}=t,n={layoutId:i,layoutItemId:e.id};o.appBuilderSync.publishConfirmDeleteToApp(n)}},vt={icon:et(),title:t=>t.formatMessage("pendingTip"),visible:t=>pt()===e.AppMode.Design&&!ht()&&function(t){const{layoutItem:e}=t;return null!=e.widgetId||null!=e.sectionId||null!=e.screenGroupId}(t),onClick:t=>{const{layoutId:e,layoutItem:o}=t;B({layoutId:e,layoutItemId:o.id})}},It={icon:ct(),title:t=>t.formatMessage("setting"),onClick:t=>{const{layoutId:o,layoutItem:i}=t;(0,e.getAppStore)().dispatch(e.appActions.selectionChanged({layoutId:o,layoutItemId:i.id}))}},xt={icon:it(),title:t=>{const{layoutItem:e}=t;return t.formatMessage("dragToMove",{label:gt(e)})},visible:()=>pt()===e.AppMode.Design&&!ht()},bt={icon:at(),title:t=>t.formatMessage("duplicate"),visible:t=>{var o,i,n;if(ht())return!1;const{layoutId:a}=t,s=null===(o=(0,e.getAppStore)().getState().appConfig)||void 0===o?void 0:o.layouts[a];return"ROW"!==(null==s?void 0:s.type)||(null!==(n=null===(i=s.order)||void 0===i?void 0:i.length)&&void 0!==n?n:0)<12},onClick:t=>{const{layoutId:e,layoutItem:o}=t;D({layoutId:e,layoutItemId:o.id})}},wt={icon:lt(),title:t=>t.formatMessage("floating"),visible:t=>{const{layoutItem:e,layoutId:o}=t;return!ht()&&Z({layoutId:o,layoutItemId:e.id})},settingPanel:J,onClick:()=>{}},St={icon:dt(),title:t=>t.formatMessage("sinking"),visible:t=>{var e,o;const{layoutItem:i}=t;return!ht()&&null!==(o=null===(e=i.setting)||void 0===e?void 0:e.isFloating)&&void 0!==o&&o},onClick:t=>{const{layoutId:e,layoutItem:o,clientRect:i}=t;Y({layoutId:e,layoutItemId:o.id},i)}},Ct="interactjs-dragging",Rt="exb-h5-dragging",Tt="limited-drag-boundary";let At=!1;function Mt(t){const o=(0,u.getTheme2)(),i=document.createElement("div");return i.setAttribute("id","interact_dragging_placeholder"),i.style.position="fixed",i.style.left=`${t.left}px`,i.style.top=`${t.top}px`,i.style.width=`${t.width}px`,i.style.height=`${t.height}px`,i.style.backgroundColor=e.polished.rgba(o.colors.palette.primary[700],.2),i.style.zIndex="1100",i}function Pt(t,e){if(!t)return null;let o,i,n,a,l,r;const{layoutItemId:d,useDragHandler:u,onDragStart:c,onDragging:p,onDragEnd:h,draggableAtRuntime:g=!1}=e;return t.styleCursor(!1).draggable({inertia:!1,autoScroll:!1,allowFrom:u?".tool-drag-handler":void 0,ignoreFrom:".no-drag-action",listeners:{start:t=>{if(ht()||!g&&!mt())return void t.interaction.stop();const e=t.target;if(e.classList.contains("no-drag-action"))return void(t.target._canDrag=!1);t.target._canDrag=!0,t.stopPropagation(),e.classList.add("is-dragging"),l=e.style.transform,n=t.rect;const r=t.target.parentNode;a=r.getBoundingClientRect(),document.body.classList.add(Ct);const u=getComputedStyle(e,null).getPropertyValue("transform"),[p,h]=function(t=""){let e="0",o="0";if(t.includes("matrix(")){const i=t.substring(t.indexOf("(")+1,t.indexOf(")")).split(",");return e=`${parseInt(i[4],10)}px`,o=`${parseInt(i[5],10)}px`,[e,o]}if(t.includes("translate(")){const i=t.match(/translate\((.*)\s*,\s*(.*)\)/);return 3===i.length&&(e=i[1],o=i[2]),[e,o]}if(t.includes("translateX(")){const o=t.match(/translateX\((.*)\)/);2===o.length&&(e=o[1])}if(t.includes("translateY(")){const e=t.match(/translateY\((.*)\)/);2===e.length&&(o=e[1])}return[e,o]}(u);o=s.utils.isPercentage(p)?s.utils.fromRatio(p,n.width):parseFloat(p),i=s.utils.isPercentage(h)?s.utils.fromRatio(h,n.height):parseFloat(h),e.setAttribute("data-translatex",o),e.setAttribute("data-translatey",i),c&&c(d)},move:t=>{t.stopPropagation(),o+=t.dx,i+=t.dy;const e=t.target;if(!e.parentElement.classList.contains("d-none")){const s=t.client.x,d=t.client.y;if(!(s>=0&&s<=a.width&&d>=0&&d<=a.height||r))return r=Mt(n),r=document.body.appendChild(r),e.style.transform=l,void(e.style.visibility="hidden");const u=r||e;u.style.webkitTransform=u.style.transform=`translate(${Math.round(o)}px, ${Math.round(i)}px) translateZ(0)`,u.setAttribute("data-translatex",Math.round(o)),u.setAttribute("data-translatey",Math.round(i))}p&&p(d,o,i)},end:t=>{t.stopPropagation();const e=t.target;e.classList.remove("is-dragging"),document.body.classList.remove(Ct),r&&(document.body.removeChild(r),r=null),e.style.visibility=null,e.style.transform=l,h&&h(d,o,i)}}})}function Lt(t){At=t}function jt(){return At}var zt=p(4020);const kt="interactjs-resizing";let Nt=!1;function $t(t,e){if(!t)return null;let o,i,n,a,l=null;const{layoutItemId:r,onResizeStart:d,onResizing:u,onResizeEnd:c,restrictEdges:p=!0}=e;return t.resizable({inertia:!1,edges:{top:".rnd-resize-top",left:s.utils.isRTL()?".rnd-resize-right":".rnd-resize-left",bottom:".rnd-resize-bottom",right:s.utils.isRTL()?".rnd-resize-left":".rnd-resize-right"},modifiers:[zt.interact.modifiers.restrictEdges({outer:p?"parent":null}),zt.interact.modifiers.restrictSize({min:{width:16,height:16}})],listeners:{start:t=>{t.stopPropagation(),o=0,i=0,n=0,a=0;const e=t.target.getBoundingClientRect();d&&d(r,e.width,e.height),document.body.classList.add(kt)},move:t=>{t.stopPropagation();const e=t.deltaRect;o+=e.left,i+=e.top,n+=e.width,a+=e.height,l&&(cancelAnimationFrame(l),l=null),l=requestAnimationFrame((()=>{u&&u(r,o,i,n,a,t.shiftKey,t.speed),l=null}))},end:t=>{if(t.stopPropagation(),l&&(cancelAnimationFrame(l),l=null),c){const e=t.deltaRect;o+=e.left,i+=e.top,n+=e.width,a+=e.height,c(r,o,i,n,a,t.shiftKey)}document.body.classList.remove(kt)}}})}function Ot(t){Nt=t}function Et(){return Nt}class Bt extends e.React.PureComponent{constructor(t){super(t),this.state={activeItem:null},s.utils.autoBindHandlers(this,["onItemClick","onItemUnSelected"])}onItemClick(t){let e=this.state.toggleOn;e=t!==this.state.activeItem||!e,this.setState({activeItem:t,toggleOn:e})}onItemUnSelected(t){t===this.state.activeItem&&this.setState({activeItem:null,toggleOn:!1})}getStyle(){const{theme:t}=this.props;return e.css`
      display: flex;
      pointer-events: all;
      border-radius: 2px;
      box-shadow: 0 2px 8px 1px rgba(0,0,0,0.20);
      height: 100%;
      margin: 5px 0;
      background: ${t.colors.palette.light[300]};

      .toolbar-item, .toolbar-item {
        .jimu-btn:focus, .jimu-btn:focus-visible {
          z-index: 1;
        }
      }

      .${Ct} &,
      .${kt} &,
      .${Rt} & {
        display: none;
      }
    `}reOrganizeTools(){const{tools:t}=this.props;if(s.utils.getCurrentSizeMode()===e.BrowserSizeMode.Small){const e=t.filter((t=>{let e;e=Array.isArray(t)?t[0]:t;const{visible:o,seperator:i=!1}=e,n="function"==typeof o?o(this.props):o;return!i&&(void 0===o||n)}));if(e.length>8){const e=t.slice(0,8),o=t.slice(8).map((t=>Object.assign(Object.assign({},t),{label:t.title}))),i=[{icon:r(),caret:!1},...o];return e.push(i),e}}return t}render(){const{tools:t,isLockLayout:o}=this.props;if(!t||0===t.length)return null;const i=this.reOrganizeTools(),{activeItem:n,toggleOn:a}=this.state;return(0,e.jsx)(c.Provider,{value:Object.assign(Object.assign({},this.props),{activeItem:n,toggleOn:a,onItemClick:this.onItemClick,onItemUnSelected:this.onItemUnSelected,isLockLayout:o})},(0,e.jsx)("div",{css:this.getStyle(),className:`layout-item-toolbar ${window.jimuConfig.isInBuilder?u.Theme2GlobalStyleClassName:""}`},i.map(((t,o)=>Array.isArray(t)?(0,e.jsx)(x,{uid:`${o}`,key:o,tools:t}):(0,e.jsx)(y,Object.assign({uid:`${o}`,key:o},t))))))}}const Dt=(0,e.createSelector)((t=>{var e,o,i;return null!==(i=null===(o=null===(e=t.appConfig)||void 0===e?void 0:e.forBuilderAttributes)||void 0===o?void 0:o.lockLayout)&&void 0!==i&&i}),(t=>({isLockLayout:t}))),Ft=e.ReactRedux.connect(Dt)(Bt),Ht={previousView:"Previous view",nextView:"Next view",originTL:"Top left as origin",originTR:"Top right as origin",originBL:"Bottom left as origin",originBR:"Bottom right as origin",alignLeft:"Align left",alignRight:"Align right",alignTop:"Align top",alignCenter:"Align center",alignHCenter:"Horizontal center",alignVCenter:"Vertical center",alignBottom:"Align bottom",alignStretch:"Align stretch",sendBackward:"Send backward",bringForward:"Bring forward",sendToBack:"Send to back",bringToFront:"Bring to front",zoomoutFixed:"Zoom out fixed",order:"Order",moveToLeft:"Move to left",moveToRight:"Move to right",moveToTop:"Move to top",moveToBottom:"Move to bottom",addView:"New view",duplicateScreen:"Duplicate screen",deleteScreen:"Delete screen",applyToFirstPanel:"Apply to the first panel",deleteView:"Delete view",duplicateView:"Duplicate view",insertABlock:"Insert block",insertAScreenGroup:"Insert screen group",moveup:"Move up",movedown:"Move down",chooseTemplate:"Choose a {type} template",chooseHeaderTemplate:"Choose a header template",chooseFooterTemplate:"Choose a footer template",dropWidgetToAdd:"Or drag a widget here",snapToLeft:"Snap to left",snapToTop:"Snap to top",snapToBottom:"Snap to bottom",snapToRight:"Snap to right",fullWidth:"Full width",fullHeight:"Full height",fullSize:"Full size",restoreSize:"Restore size",pendingTip:"Move to the pending list",setting:"Settings",dragToMove:"Drag to move {label}",lockLayout:"Lock position and size",unlockLayout:"Unlock position and size",editHeader:"Edit header",editFooter:"Edit footer",transform:"Transform",rotation:"Rotation",angle:"Angle",floating:"Pin",sinking:"Unpin",floatingArea:"Floating area",changeToAuto:"Change to auto",changeToCustom:"Change to custom",positionType:"Position type",sticky:"Sticky",fixed:"Fixed",flow:"Flow",stack:"Stack",fixedAtTop:"Floating at the top when scrolling",actNormal:"Act as normal widget",hideInDesignView:"Hide in design view",showInDesignView:"Show in design view",unlockGridItem:"Unlock this widget to reorganize its internal widgets.",lockGridItem:"Lock this widget.",splitHorizontally:"Split horizontally",splitVertically:"Split vertically"};class Vt extends e.React.PureComponent{constructor(){super(...arguments),this.formatMessage=(t,e)=>this.props.intl?this.props.intl.formatMessage({id:t,defaultMessage:Ht[t]},e):Ht[t]}getPositionStyle(){const{positionType:t}=this.props;return"left"===t?e.css`
        position: absolute;
        top: 0;
        left: 0;
      `:"center"===t?e.css`
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
      `:e.css`
      position: absolute;
      top: 0;
      right: 0;
    `}getStyle(){const{size:t,builderTheme:o,rotate:i}=this.props;return e.css`
      body:not(.design-mode) & {
        display: none !important;
      }

      position: absolute;
      width: 100%;
      height: 100%;
      background: transparent;
      pointer-events: none;
      transform: ${i>0||i<0?`rotateZ(${i}deg)`:""} ;

      .content {
        ${this.getPositionStyle()};
        pointer-events: all;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 100ms;
        z-index: ${s.LayoutZIndex.HandlerTools};

        .menu-hint {
          background-color: ${o.colors.palette.light[300]};
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
          transform: ${i>0||i<0?`rotateZ(${-i}deg)`:""} ;

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

    `}render(){const{builderTheme:t,menuItems:o,layoutId:i,layoutItem:n,className:a,onMouseEnter:s,onMouseLeave:l}=this.props;return(0,e.jsx)("div",{className:`widget-context-menu ${a}`,css:this.getStyle()},(0,e.jsx)("div",{ref:t=>this.ref=t,className:"content"},(0,e.jsx)("div",{className:"menu-hint"},(0,e.jsx)(d,{color:t.colors.black,size:"m"})),(0,e.jsx)("div",{className:"menu-content",onMouseLeave:l,onMouseEnter:s},(0,e.jsx)(Ft,{layoutId:i,layoutItem:n,theme:t,parentRef:this.ref,tools:o,formatMessage:this.formatMessage})),this.props.children))}}const Wt=(0,e.injectIntl)(Vt),Gt=(e.React.createContext({viewOnly:!0}),e.React.createContext(!0),e.React.createContext(!0)),Zt=(e.React.createContext({isInView:!1,isInCurrentView:!1}),e.React.createContext(""));function _t(t,e){const o=function(t){if(isNaN(t))return 0;const e=t%360;return e<0?e+360:e}(t+e);return o>=337.5||o<22.5||o>=157.5&&o<202.5?"ns-resize":o>=22.5&&o<67.5||o>=202.5&&o<247.5?"nesw-resize":o>=67.5&&o<112.5||o>=247.5&&o<292.5?"ew-resize":o>=112.5&&o<157.5||o>=292.5&&o<337.5?"nwse-resize":void 0}const Ut=9,Yt=e.css`
  width: ${Ut}px;
  height: ${Ut}px;
  background: transparent;
  position: absolute;
`;function Xt(t){const{pos:o}=t,i=e.React.useRef();return e.hooks.useEffectOnce((()=>{var t;const e=null!==(t=window.devicePixelRatio)&&void 0!==t?t:1;i.current.width=Ut*e,i.current.height=Ut*e;const n=i.current.getContext("2d");n&&(n.scale(e,e),n.strokeStyle="#444",n.fillStyle="#fff",n.lineWidth=2,s.utils.isRTL()?("tl"===o&&(n.translate(Ut,0),n.rotate(Math.PI/2)),"br"===o&&(n.translate(0,Ut),n.rotate(-Math.PI/2)),"bl"===o&&(n.translate(Ut,Ut),n.rotate(Math.PI))):("tr"===o&&(n.translate(Ut,0),n.rotate(Math.PI/2)),"br"===o&&(n.translate(Ut,Ut),n.rotate(Math.PI)),"bl"===o&&(n.translate(0,Ut),n.rotate(-Math.PI/2))),n.beginPath(),n.moveTo(1,1),n.lineTo(Ut-1,1),n.lineTo(Ut-1,Ut/3),n.lineTo(Ut/3,Ut/3),n.lineTo(Ut/3,Ut-1),n.lineTo(1,Ut-1),n.closePath(),n.stroke(),n.fill())})),(0,e.jsx)("canvas",{css:Yt,ref:i})}const qt=16,Jt=4,Qt=e.css`
  background: transparent;
  position: absolute;
`;function Kt(t){const{direction:o}=t,i=e.React.useRef();return e.hooks.useEffectOnce((()=>{var t;const e=null!==(t=window.devicePixelRatio)&&void 0!==t?t:1;"h"===o?(i.current.width=qt*e,i.current.height=Jt*e):(i.current.width=Jt*e,i.current.height=qt*e);const n=i.current.getContext("2d");n&&(n.scale(e,e),n.strokeStyle="#444",n.fillStyle="#fff",n.lineWidth=2,"h"===o?n.rect(1,1,qt-2,Jt-2):n.rect(1,1,Jt-2,qt-2),n.stroke(),n.fill())})),(0,e.jsx)("canvas",{css:Qt,ref:i})}const te=11,ee=10,oe=t=>e.css`
  top: 0;
  left: 0;
  position: absolute;
  /* cursor: nwse-resize; */
  cursor: ${_t(t,135)};
  .jimu-rtl & {
    /* cursor: nesw-resize; */
    cursor: ${_t(t,225)};
  }
  > svg {
    position: absolute;
    top: 0;
    left: 0;
  }
`,ie=t=>e.css`
  top: 0;
  right: 0;
  position: absolute;
  /* cursor: nesw-resize; */
  cursor: ${_t(t,225)};
  .jimu-rtl & {
    /* cursor: nwse-resize; */
    cursor: ${_t(t,315)};
  }
`,ne=t=>e.css`
  bottom: 0;
  left: 0;
  position: absolute;
  /* cursor: nesw-resize; */
  cursor: ${_t(t,45)};
  .jimu-rtl & {
    /* cursor: nwse-resize; */
    cursor: ${_t(t,135)};
  }
`,ae=t=>e.css`
  bottom: 0;
  right: 0;
  position: absolute;
  /* cursor: nwse-resize; */
  cursor: ${_t(t,315)};
  .jimu-rtl & {
    /* cursor: nesw-resize; */
    cursor: ${_t(t,405)};
  }
`,se=t=>e.css`
  height: ${10}px;
  left: ${ee}px;
  right: ${ee}px;
  top: 0px;
  position: absolute;
  /* cursor: ns-resize; */
  cursor: ${_t(t,180)};

  canvas {
    left: 50%;
    top: 0;
    width: ${16}px;
    height: ${4}px;
    margin-left: ${-8}px;
    margin-top: 1px;
  }
`,le=t=>e.css`
  width: ${10}px;
  top: ${ee}px;
  bottom: ${ee}px;
  right: 0;
  position: absolute;
  /* cursor: ew-resize; */
  cursor: ${_t(t,270)};

  canvas {
    top: 50%;
    right: 0;
    width: ${4}px;
    height: ${16}px;
    margin-top: ${-8}px;
    margin-right: 1px;
  }
`,re=t=>e.css`
  height: ${10}px;
  left: ${ee}px;
  right: ${ee}px;
  bottom: 0;
  position: absolute;
  /* cursor: ns-resize; */
  cursor: ${_t(t,0)};

  canvas {
    left: 50%;
    bottom: 0;
    width: ${16}px;
    height: ${4}px;
    margin-left: ${-8}px;
    margin-bottom: 1px;
  }
`,de=t=>e.css`
  width: ${10}px;
  top: ${ee}px;
  bottom: ${ee}px;
  left: 0;
  position: absolute;
  /* cursor: ew-resize; */
  cursor: ${_t(t,90)};

  canvas {
    top: 50%;
    left: 0;
    width: ${4}px;
    height: ${16}px;
    margin-top: ${-8}px;
    margin-left: 1px;
  }
`;function ue(t){const{rotation:o=0}=t,{top:i,right:n,bottom:a,left:l,topLeft:r,topRight:d,bottomRight:u,bottomLeft:c}=function(t){const{left:e=!0,top:o=!0,right:i=!0,bottom:n=!0}=t;return{top:o,right:i,bottom:n,left:e,topRight:o&&i,bottomRight:n&&i,bottomLeft:n&&e,topLeft:o&&e}}(t),p=e.css`
    width: ${te}px;
    height: ${te}px;
    padding: 1px;
    z-index: ${s.LayoutZIndex.HandlerTools};
  `;return(0,e.jsx)("div",{className:"w-100 h-100 action-area"},i&&(0,e.jsx)("span",{key:"2","data-testid":"top",className:"rnd-resize-top handle no-drag-action",css:se(o)},(0,e.jsx)(Kt,{direction:"h"})),n&&(0,e.jsx)("span",{key:"4","data-testid":"right",className:"rnd-resize-right handle no-drag-action",css:le(o)},(0,e.jsx)(Kt,{direction:"v"})),a&&(0,e.jsx)("span",{key:"6","data-testid":"bottom",className:"rnd-resize-bottom handle no-drag-action",css:re(o)},(0,e.jsx)(Kt,{direction:"h"})),l&&(0,e.jsx)("span",{key:"8","data-testid":"left",className:"rnd-resize-left handle no-drag-action",css:de(o)},(0,e.jsx)(Kt,{direction:"v"})),r&&(0,e.jsx)("span",{key:"1","data-testid":"topLeft",className:"rnd-resize-top rnd-resize-left handle no-drag-action",css:[p,oe(o)]},(0,e.jsx)(Xt,{pos:"tl"})),d&&(0,e.jsx)("span",{key:"3","data-testid":"topRight",className:"rnd-resize-top rnd-resize-right handle no-drag-action",css:[p,ie(o)]},(0,e.jsx)(Xt,{pos:"tr"})),u&&(0,e.jsx)("span",{key:"5","data-testid":"bottomRight",className:"rnd-resize-bottom rnd-resize-right handle no-drag-action",css:[p,ae(o)]},(0,e.jsx)(Xt,{pos:"br"})),c&&(0,e.jsx)("span",{key:"7","data-testid":"bottomLeft",className:"rnd-resize-bottom rnd-resize-left handle no-drag-action",css:[p,ne(o)]},(0,e.jsx)(Xt,{pos:"bl"})))}var ce=p(1407),pe=p.n(ce),he=p(3273),ge=p.n(he),me=p(4750),fe=p.n(me),ye=p(9365),ve=p.n(ye),Ie=p(5339),xe=p.n(Ie);function be(t){const o=(0,e.getAppStore)().getState();return s.searchUtils.getSectionInfo(o,t.sectionId)}function we(t){var o;const{navInfo:i,views:n,activeView:a}=null!=t?t:{};if(!i)return null==a?void 0:a.id;if(!i.useProgress)return i.currentViewId;const s=(null===(o=i.visibleViews)||void 0===o?void 0:o.length)>0?i.visibleViews:n,{currentIndex:l}=(0,e.getIndexFromProgress)(i.progress,s.length);return s[l]}const Se=[{icon:pe(),autoFlipIcon:!0,size:10,title:t=>t.formatMessage("previousView"),onClick:t=>{const{layoutItem:o}=t,i=be(o),{views:n}=i,a=we(i),s=n.indexOf(a);s>0&&e.jimuHistory.changeView(o.sectionId,n[s-1])},disabled:t=>{const{layoutItem:e}=t,o=be(e);if(!o)return!0;const{views:i}=o,n=we(o);return i.indexOf(n)<=0}},{label:t=>{const{layoutItem:e}=t,o=be(e);if(!o)return"";const{views:i}=o,n=we(o);return`${Math.max(0,i.indexOf(n))+1} / ${i.length}`}},{icon:ge(),autoFlipIcon:!0,size:10,title:t=>t.formatMessage("nextView"),onClick:t=>{const{layoutItem:o}=t,i=be(o),{views:n}=i,a=we(i),s=n.indexOf(a);s>=0&&s<n.length-1&&e.jimuHistory.changeView(o.sectionId,n[s+1])},disabled:t=>{const{layoutItem:e}=t,o=be(e);if(!o)return!0;const{views:i}=o,n=we(o),a=i.indexOf(n);return a<0||a>=i.length-1}},{icon:fe(),title:t=>t.formatMessage("addView"),visible:()=>pt()===e.AppMode.Design&&!ht(),onClick:t=>{const i=(0,e.getAppStore)().getState().appConfig,{layoutItem:n}=t,a=(0,e.Immutable)({}).merge({id:e.appConfigUtils.getUniqueId(i,"view"),label:e.appConfigUtils.getUniqueLabel(i,"view",e.i18n.getIntl().formatMessage({id:"view"}))});(0,o.getAppConfigAction)().addView(a,n.sectionId).exec(),e.jimuHistory.changeView(n.sectionId,a.id)}},{icon:ve(),title:t=>t.formatMessage("duplicateView"),visible:()=>pt()===e.AppMode.Design&&!ht(),onClick:t=>{const{layoutItem:i}=t;let n=we(be(i));n||(n=be(i).views[0]);const a=(0,o.getAppConfigAction)(),s=a.duplicateView(n,i.sectionId,!0);a.exec(),e.jimuHistory.changeView(i.sectionId,s.id)}},{icon:xe(),title:t=>t.formatMessage("deleteView"),visible:t=>{if(pt()!==e.AppMode.Design||ht())return!1;const{layoutItem:o}=t,i=be(o);if(!i)return!1;const{views:n}=i;return n&&n.length>1},onClick:t=>{const{layoutItem:i}=t,n=be(i),{views:a}=n,s=we(n);if(a.length>1){const n=a.indexOf(s);let l;l=n>0?a[n-1]:a[1],(0,o.getAppConfigAction)().removeView(s,i.sectionId).exec(),e.jimuHistory.changeView(t.layoutItem.sectionId,l)}}},{seperator:!0}],Ce=[bt,wt,St,vt,yt],Re=[].concat(Se,Ce);let Te=0;function Ae(t){e.ReactRedux.useSelector((t=>t.extensionsInfo[e.extensionSpec.ExtensionPoints.ContextTool]));const{layoutId:o,layoutItem:n,refElement:a,modifiers:s,formatMessage:l,builderTheme:r,toolItems:d=[],showDefaultTools:u=!0}=t;if(!a)return null;const c=n.type===e.LayoutItemType.Section;let p=function({layoutId:t,layoutItem:o,refElement:i}){const{widgetId:n}=o;if(!n)return[];const a=e.ExtensionManager.getInstance().getExtensions(e.extensionSpec.ExtensionPoints.ContextTool),s=i.getBoundingClientRect();return a.filter((t=>t.widgetId===n)).map((e=>({widgetId:n,icon:e.getIcon(),title:e.getTitle.bind(e),onClick:e.onClick.bind(e),checked:e.checked&&e.checked.bind(e),disabled:e.disabled?"function"==typeof e.disabled?e.disabled.bind(e):e.disabled:null,visible:e.visible?"function"==typeof e.visible?e.visible.bind(e):e.visible:null,settingPanel:e.getSettingPanel({layoutId:t,layoutItem:o,clientRect:s}),index:e.index,extName:e.name}))).sort(((t,e)=>t.index-e.index))}(t);const h=c?Re:Ce,g=u?[...d,...h]:d;return p=p.length>0?[].concat(g,{seperator:!0},p):g,0===p.length?null:(0,e.jsx)(i._Popper,{placement:"top-start",reference:a,open:!0,modifiers:s,version:Te++,trapFocus:!1,autoFocus:!1,css:e.css`
        background: transparent;
        box-shadow: none;
      `},(0,e.jsx)("div",null,(0,e.jsx)(Ft,{layoutId:o,layoutItem:n,theme:r,parentRef:a,tools:p,formatMessage:l})))}var Me=p(840),Pe=p.n(Me);const Le=t=>{const o=window.SVG,{className:i}=t,n=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o}(t,["className"]),a=(0,e.classNames)("jimu-icon jimu-icon-component",i);return o?e.React.createElement(o,Object.assign({className:a,src:Pe()},n)):e.React.createElement("svg",Object.assign({className:a},n))};class je extends e.React.PureComponent{constructor(t){super(t),this.formatMessage=(t,e)=>null!=this.props.intl?this.props.intl.formatMessage({id:t,defaultMessage:Ht[t]},e):Ht[t],this.isMac=()=>{var t,e;return"macOS"===(null===(e=null===(t=window.jimuUA)||void 0===t?void 0:t.os)||void 0===e?void 0:e.name)},this.copyItem=()=>{const{layoutId:t,layoutItem:o,lockLayout:i}=this.props;if(!i){const i=this.ref.getBoundingClientRect(),n=i.width,a=i.height;(0,e.getAppStore)().dispatch(e.appActions.clipboardChanged({layoutId:t,width:n,height:a,layoutItemId:o.id}))}},this.deleteSelectedItem=()=>{const{selected:t,layoutId:e,layoutItem:i,lockLayout:n,isFunctionalWidget:a,isDesignMode:s}=this.props;if(t&&s&&(!n||a)){const t={layoutId:e,layoutItemId:i.id};o.appBuilderSync.publishConfirmDeleteToApp(t)}},this.state={selected:!1,updateIndex:0},this.screenGroupInfo="",this.isMac()?this.keyBindings={delete:this.deleteSelectedItem,backspace:this.deleteSelectedItem,"command+keyc":this.copyItem}:this.keyBindings={delete:this.deleteSelectedItem,backspace:this.deleteSelectedItem,"ctrl+keyc":this.copyItem}}componentDidMount(){let t;const e=this.screenGroupInfo.split(":");if(e.length>1){const o=e[0],i=e[1];t=document.querySelector(`div.builder-layout-item[data-layoutid="${o}"][data-layoutitemid="${i}"]`)}this.modifiers=[{name:"preventOverflow",enabled:!0,options:{boundary:null!=t?t:"viewport",altAxis:!0}},{name:"flip",enabled:!0,options:{boundary:null!=t?t:"viewport",fallbackPlacements:(0,i.getFallbackPlacementsModifier)(["top-start","bottom-start"],!0).options.fallbackPlacements}}],this.props.selected&&this.setState({selected:!0})}componentDidUpdate(t){this.scrollIntoView(),this.props.selected&&!t.isDesignMode&&this.props.isDesignMode&&this.setState({updateIndex:this.state.updateIndex+1})}doScroll(){const{layoutId:t,layoutItem:e}=this.props,o=document.querySelector(`div.exb-rnd[data-layoutid="${t}"][data-layoutitemid="${e.id}"]`);null!=o&&o.scrollIntoView({behavior:"auto",block:"center"})}scrollIntoView(){var t,i;const{selected:n,autoScroll:a}=this.props;if(!n||!a)return;const{layoutId:s}=this.props;let l=!1,r=!1;const d=(0,o.getAppConfigAction)().appConfig,u=d.layouts[s];if((null===(t=u.parent)||void 0===t?void 0:t.type)===e.LayoutParentType.View){const t=d.views[u.parent.id];null!=(null==t?void 0:t.parent)&&(e.jimuHistory.changeView(t.parent,t.id),l=!0)}if((null===(i=u.parent)||void 0===i?void 0:i.type)===e.LayoutParentType.Screen){const t=d.screens[u.parent.id];if(null!=(null==t?void 0:t.parent)){const o=d.screenGroups[t.parent].screens.indexOf(t.id);(0,e.getAppStore)().dispatch(e.appActions.screenGroupNavInfoChanged(t.parent,o,!0)),r=!0}}l||r?e.lodash.defer((()=>{this.doScroll()})):this.doScroll()}getStyle(){const{isFunctionalWidget:t,isSection:o,selected:i,isBlock:n,rotate:a=0}=this.props,l=e.polished.rgba(this.pageContext.builderTheme.colors.palette.dark[300],.6),r=this.pageContext.builderTheme.colors.palette.primary[600],d=!t||o?"dashed":"solid";return e.css`
      .${Rt} &,
      .${Ct} & {
        > .action-area {
          display: none !important;
        }
        > div.selected-tip {
          .tip-content {
            outline-color: ${l};
          }
        }
      }

      transform: ${a>0||a<0?`rotateZ(${a}deg)`:""};
      padding: inherit;
      position: absolute;
      left: 0;
      bottom: 0;
      top: 0;
      right: 0;
      z-index: ${i?s.LayoutZIndex.HandlerTools:"auto"};
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
            outline: ${n&&!i?"none":`1px ${d} ${l}`};
            display: block;
            outline-color: ${!t||o?l:"transparent"};
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
    `}getKeyboardComponent(){return(0,e.jsx)(e.Keyboard,{bindings:this.keyBindings})}isResizable(){const{resizable:t=!0,selected:e}=this.props;return e&&!this.pageContext.viewOnly&&!this.props.lockLayout&&t}showToolbar(){const{forbidToolbar:t,selected:e}=this.props;return!t&&!this.pageContext.viewOnly&&e}render(){return(0,e.jsx)(Zt.Consumer,null,(t=>(this.screenGroupInfo=t,(0,e.jsx)(s.PageContext.Consumer,null,(t=>{if(this.pageContext=t,!this.props.isDesignMode)return null;const{layoutId:o,layoutItem:i,resizable:n=!0,draggable:a=!0,selected:s,toolItems:l,showDefaultTools:r,left:d,top:u,right:c,bottom:p,rotate:h}=this.props,g=!a&&!n;return(0,e.jsx)("div",{"data-testid":"select-wrapper",ref:t=>this.ref=t,css:this.getStyle(),className:(0,e.classNames)("select-wrapper",{selected:s,"no-embed-layout":!this.props.hasEmbeddedLayout})},!t.viewOnly&&(0,e.jsx)("div",{className:"selected-tip"},(0,e.jsx)("div",{className:"tip-content"})),this.showToolbar()&&(0,e.jsx)(Ae,{layoutId:o,layoutItem:i,refElement:this.ref,modifiers:this.modifiers,builderTheme:this.pageContext.builderTheme,formatMessage:this.formatMessage,toolItems:l,showDefaultTools:r}),this.isResizable()&&(0,e.jsx)(ue,{left:d,right:c,top:u,bottom:p,rotation:h,builderTheme:t.builderTheme}),g&&s&&(0,e.jsx)("div",{className:"lock-layout-tip rounded-circle"},(0,e.jsx)(Le,{size:"s",color:t.builderTheme.colors.black})),s&&this.getKeyboardComponent())})))))}}const ze=(0,e.createSelector)([t=>{var e,o,i;return null!==(i=null===(o=null===(e=t.appConfig)||void 0===e?void 0:e.forBuilderAttributes)||void 0===o?void 0:o.lockLayout)&&void 0!==i&&i},t=>t.appRuntimeInfo.appMode===e.AppMode.Design,(t,e)=>{var o,i;return e.isSection?null===(i=null===(o=t.appRuntimeInfo)||void 0===o?void 0:o.sectionNavInfos)||void 0===i?void 0:i[e.layoutItem.sectionId]:null}],((t,e,o)=>({lockLayout:t,isDesignMode:e,sectionNavInfo:o}))),ke=e.ReactRedux.connect(ze)((0,e.injectIntl)(je));var Ne=p(7756);function $e(t,e){const o={};return o.width=Math.min(t.width,e.width),o.height=Math.min(t.height,e.height),o.left=Math.max(0,t.left),o.top=Math.max(0,t.top),o.left+o.width>e.width&&(o.left=e.width-o.width),o.top+o.height>e.height&&(o.top=e.height-o.height),o}function Oe(t,o,i,n){var a,l;if((null==t?void 0:t.itemType)===e.LayoutItemType.ScreenGroup){const t=s.utils.getCurrentPageId(),o=s.utils.getAppConfig(),i=o.pages[t];return Object.keys(null!==(a=null==i?void 0:i.layout)&&void 0!==a?a:{}).some((t=>{const a=o.layouts[i.layout[t]];return a.type===e.LayoutType.FlowLayout&&a.id===n}))}let r=function(t,o){var i,n,a,s;if(!o)return!1;if(null!==(i=o.isFromCurrentSizeMode)&&void 0!==i&&!i)return!0;const l=o.layoutInfo;if(l){const o=(0,e.getAppStore)().getState(),{layouts:i}=o.appConfig,r=i[l.layoutId],d=null===(n=null==r?void 0:r.content)||void 0===n?void 0:n[l.layoutItemId];if(d){const o=null!==(s=null===(a=d.setting)||void 0===a?void 0:a.lockParent)&&void 0!==s&&s;if(r.type===e.LayoutType.FlowLayout||o)return l.layoutId===t}}return!0}(n,t);return r&&"function"==typeof o.isItemAccepted&&(r=o.isItemAccepted(t,null!==(l=i.isPlaceholder)&&void 0!==l&&l)),r}function Ee(t,o,i){let n,a,s,l;return(0,zt.interact)(t).dropzone({accept:null!=i?i:".exb-rnd",checker:(t,i,a,s,l,r,d)=>{const{props:u,layoutId:c,pageContext:p,layoutContext:h}=o.current;return"none"!==getComputedStyle(l).pointerEvents&&(n=function(t){if(t&&"function"==typeof t.getAttribute){const o=t.getAttribute("data-layoutid"),i=t.getAttribute("data-layoutitemid");if(o&&i)return function(t,o){var i,n,a,s,l,r;const d=(0,e.getAppStore)().getState(),{layouts:u,widgets:c}=d.appConfig,p=u[t],h=null===(i=null==p?void 0:p.content)||void 0===i?void 0:i[o];if(h){const i={layoutId:t,layoutItemId:o},u=function(t,o){var i,n,a;if(o.type===e.LayoutItemType.Widget){const e=o.widgetId;if(e)return null===(a=null===(n=null===(i=t.appConfig)||void 0===i?void 0:i.widgets)||void 0===n?void 0:n[e])||void 0===a?void 0:a.manifest}return null}(d,h);let p=null;return h.type===e.LayoutItemType.Widget&&h.widgetId&&(p=null===(n=c[h.widgetId])||void 0===n?void 0:n.uri),{itemType:h.type,layoutInfo:i,uri:p,manifest:u,rotation:null!==(r=null===(l=null===(s=null===(a=h.setting)||void 0===a?void 0:a.style)||void 0===s?void 0:s.transform)||void 0===l?void 0:l.rotate)&&void 0!==r?r:0}}}(o,i)}return null}(d),!p.viewOnly&&a&&!d.contains(l)&&Oe(n,h,u,c))},ondragenter:t=>{const{props:e,layoutId:i,pageContext:l}=o.current;t.stopPropagation(),t.target.classList.add("drop-target"),i!==l.rootLayoutId&&t.target.classList.add("drop-active"),a=document.getElementById("interact_dragging_placeholder")||t.relatedTarget,s=t.dropzone.getRect(t.target),e.onDragEnter&&e.onDragEnter(n),e.onToggleDragoverEffect&&e.onToggleDragoverEffect(!0,n)},ondragleave:t=>{const{props:e}=o.current;t.stopPropagation(),t.target.classList.remove("drop-target"),t.target.classList.remove("drop-active"),a=null,s=null,l&&cancelAnimationFrame(l),e.onDragLeave&&e.onDragLeave(n),e.onToggleDragoverEffect&&e.onToggleDragoverEffect(!1,n)},ondropmove:t=>{const{props:e}=o.current;t.stopPropagation(),l&&cancelAnimationFrame(l),l=requestAnimationFrame((()=>{const o=t.dragEvent.rect,i=t.dragEvent._interaction.coords.cur.client,r=i.x-(null==s?void 0:s.left),d=i.y-(null==s?void 0:s.top);e.onDragOver&&e.onDragOver(n,a,s,{left:o.left-(null==s?void 0:s.left),top:o.top-(null==s?void 0:s.top),width:o.width,height:o.height,right:o.left-(null==s?void 0:s.left)+o.width,bottom:o.top-(null==s?void 0:s.top)+o.height},r,d,t.dragEvent.speed),l=null}))},ondrop:t=>{const{props:e}=o.current;if(t.stopPropagation(),t.target.classList.remove("drop-target"),t.target.classList.remove("drop-active"),e.onToggleDragoverEffect&&e.onToggleDragoverEffect(!1,n),l&&cancelAnimationFrame(l),e.onDrop){const o=t.dragEvent.rect;let i={left:o.left-s.left,top:o.top-s.top,width:o.width,height:o.height};i=$e(i,{left:0,top:0,width:s.width,height:s.height}),i.right=i.left+i.width,i.bottom=i.top+i.height;const a=t.dragEvent._interaction.coords.cur.client,l=a.x-s.left,r=a.y-s.top;e.onDrop(n,s,i,l,r)}}})}function Be(t,o){let i,n;const a=e.lodash.throttle((function(t,e,i){if(!t||isNaN(e)||isNaN(i))return;let a=200,s=100;const{props:l}=o.current;t.manifest.defaultSize&&(a=isNaN(t.manifest.defaultSize.width)?a:t.manifest.defaultSize.width,s=isNaN(t.manifest.defaultSize.height)?s:t.manifest.defaultSize.height),l.onDragOver&&l.onDragOver(t,null,n,{left:e-a/2-n.left,top:i-s/2-n.top,width:a,height:s,right:e-a/2-n.left+a,bottom:i-s/2-n.top+s},e-n.left,i-n.top)}),100);function s(){const{props:e,layoutId:n,layoutContext:a,pageContext:s}=o.current;if(s.viewOnly)return;const l=window.parent&&window.parent._dragging_widget_item?window.parent._dragging_widget_item:null;i&&i===l||(i=l,Oe(i,a,e,n)&&(t.classList.add("drop-target"),e.onToggleDragoverEffect&&e.onToggleDragoverEffect(!0,i)))}function l(){if(!i)return!1;const{props:t,layoutId:e,pageContext:n,layoutContext:a}=o.current;return!n.viewOnly&&Oe(i,a,t,e)}t.addEventListener("dragenter",(function(e){const{props:a}=o.current;e.stopPropagation(),e.preventDefault(),s(),l()&&(n=t.getBoundingClientRect(),i&&a.onDragEnter&&a.onDragEnter(i))})),t.addEventListener("dragleave",(function(e){const{props:n}=o.current;e.stopPropagation(),e.preventDefault(),t.classList.remove("drop-target"),t.classList.remove("drop-active"),l()&&(n.onDragLeave&&n.onDragLeave(i),n.onToggleDragoverEffect&&n.onToggleDragoverEffect(!1,i),i=null)})),t.addEventListener("dragover",(function(e){const{layoutId:n,pageContext:r}=o.current;if(e.stopPropagation(),e.preventDefault(),s(),l()){if(e.dataTransfer&&(e.dataTransfer.dropEffect="copy"),t.classList.contains("drop-target")){const{clientX:o,clientY:s}=e;t.classList.contains("drop-active")||n===r.rootLayoutId||t.classList.add("drop-active"),a(i,o,s)}}else e.dataTransfer&&(e.dataTransfer.dropEffect="none")})),t.addEventListener("drop",(function(e){if(e.stopPropagation(),t.classList.remove("drop-target"),t.classList.remove("drop-active"),document.documentElement.classList.remove(Rt),!l())return void(i=null);const{props:n}=o.current,{clientX:a,clientY:s}=e,r=t.getBoundingClientRect();let d=200,u=100;i.manifest.defaultSize&&(d=isNaN(i.manifest.defaultSize.width)?d:i.manifest.defaultSize.width,u=isNaN(i.manifest.defaultSize.height)?u:i.manifest.defaultSize.height);let c={width:d,height:u,left:a-d/2-r.left,top:s-u/2-r.top};c=$e(c,{left:0,top:0,width:r.width,height:r.height}),c.right=c.left+c.width,c.bottom=c.top+c.height,n.onToggleDragoverEffect&&n.onToggleDragoverEffect(!1,i),n.onDrop&&n.onDrop(i,r,c,a-r.left,s-r.top),i=null}))}function De(t){const o=e.React.useRef(),i=e.ReactRedux.useSelector((e=>t.layouts[e.browserSizeMode])),n=e.ReactRedux.useSelector((t=>t.appRuntimeInfo.appMode===e.AppMode.Design)),a=e.React.useContext(s.PageContext),l=e.React.useContext(s.LayoutContext),r=e.React.useRef();r.current={props:t,layoutId:i,pageContext:a,layoutContext:l},e.React.useEffect((()=>{let t;return o.current&&(t=Ee(o.current,r)),()=>{t&&t.unset()}}),[]),e.React.useEffect((()=>{o.current&&Be(o.current,r)}),[]);const{className:d,style:u,highlightDragover:c}=t,p=(0,e.classNames)("exb-drop-area d-flex",d);return(0,e.jsx)("div",{className:p,css:e.css`
      background: transparent;
      padding: inherit;
      pointer-events: ${n?"auto":"none !important"};

      & > .highlight-content {
        display: none;
        pointer-events: none;
        position: relative;
      }

      &.drop-target > .highlight-content {
        display: flex;
      }

      &.drop-active {
        background: ${e.polished.rgba(a.builderTheme.colors.palette.primary[700],.2)};
      }
    `,style:u,ref:t=>{o.current=t}},c&&(0,e.jsx)("div",{className:"w-100 highlight-content"},t.children))}const Fe=t=>{const o=window.SVG,{className:i}=t,n=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o}(t,["className"]),a=(0,e.classNames)("jimu-icon jimu-icon-component",i);return o?e.React.createElement(o,Object.assign({className:a,src:fe()},n)):e.React.createElement("svg",Object.assign({className:a},n))};var He=function(t,e,o,i){return new(o||(o=Promise))((function(n,a){function s(t){try{r(i.next(t))}catch(t){a(t)}}function l(t){try{r(i.throw(t))}catch(t){a(t)}}function r(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(s,l)}r((i=i.apply(t,e||[])).next())}))};function Ve(t){const i=(0,o.getAppConfigAction)();if(t.layoutInfo){const{layoutId:o,layoutItemId:n}=t.layoutInfo,a=i.appConfig.layouts[o].content[n];return!(a.type===e.LayoutItemType.Widget&&!a.widgetId)}return!(t.itemType===e.LayoutItemType.Widget&&t.manifest&&!t.uri)}function We(t,i){var n,a;const l=(0,o.getAppConfigAction)();if(i.layoutInfo){const{layoutId:o,layoutItemId:r}=i.layoutInfo,d=l.appConfig.layouts[o].content[r];l.removeLayoutItem(i.layoutInfo,!1);const u=d.setting;if(d.type===e.LayoutItemType.Widget){l.updateLayoutItem({layoutId:t.layoutId,layoutItemId:t.layoutItemId},"widgetId",d.widgetId);const o=null!==(n=l.appConfig.widgets[d.widgetId].parent)&&void 0!==n?n:(0,e.Immutable)({}),i=s.utils.getCurrentSizeMode();l.editWidgetProperty(d.widgetId,"parent",o.set(i,[t]))}else if(d.type===e.LayoutItemType.Section){l.updateLayoutItem({layoutId:t.layoutId,layoutItemId:t.layoutItemId},"sectionId",d.sectionId).updateLayoutItem({layoutId:t.layoutId,layoutItemId:t.layoutItemId},"type",e.LayoutItemType.Section);const o=null!==(a=l.appConfig.sections[d.sectionId].parent)&&void 0!==a?a:(0,e.Immutable)({}),i=s.utils.getCurrentSizeMode();l.editWidgetProperty(d.sectionId,"parent",o.set(i,[t]))}(null==u?void 0:u.placeholderStyle)&&l.updateLayoutItem({layoutId:t.layoutId,layoutItemId:t.layoutItemId},"setting",u.without("placeholderStyle")),e.lodash.defer((()=>{(0,e.getAppStore)().dispatch(e.appActions.layoutChanged(l.appConfig,{layoutId:t.layoutId,layoutItemId:t.layoutItemId}))}))}else i.itemType===e.LayoutItemType.Widget&&i.uri?Ze(t,i):i.itemType===e.LayoutItemType.Section&&Ge(t)}function Ge(t){const{layoutId:i,layoutItemId:n}=t,a=(0,o.getAppConfigAction)(),l=a.createSection();a.updateLayoutItem({layoutId:i,layoutItemId:n},"sectionId",l.id).updateLayoutItem({layoutId:i,layoutItemId:n},"type",e.LayoutItemType.Section);const r={[s.utils.getCurrentSizeMode()]:[t]};a.editSectionProperty(l.id,"parent",r);const d=a.appConfig.layouts[i].content[n].setting;(null==d?void 0:d.placeholderStyle)&&a.updateLayoutItem({layoutId:t.layoutId,layoutItemId:t.layoutItemId},"setting",d.without("placeholderStyle")),e.lodash.defer((()=>{(0,e.getAppStore)().dispatch(e.appActions.layoutChanged(a.appConfig,{layoutId:i,layoutItemId:n}))}))}function Ze(t,i){return He(this,void 0,void 0,(function*(){const{layoutId:n,layoutItemId:a}=t,l=(0,o.getAppConfigAction)(),r={uri:i.uri,itemId:i.itemId};yield e.WidgetManager.getInstance().handleNewWidgetJson(r).then((o=>{const i=e.appConfigUtils.getUniqueId(l.appConfig,"widget");o.id=i,l.createWidget((0,e.Immutable)(o)),l.updateLayoutItem({layoutId:n,layoutItemId:a},"widgetId",i);const r={[s.utils.getCurrentSizeMode()]:[t]};l.editWidgetProperty(o.id,"parent",r);const d=l.appConfig.layouts[n].content[a].setting;(null==d?void 0:d.placeholderStyle)&&l.updateLayoutItem({layoutId:t.layoutId,layoutItemId:t.layoutItemId},"setting",d.without("placeholderStyle")),e.lodash.defer((()=>{(0,e.getAppStore)().dispatch(e.appActions.layoutChanged(l.appConfig,{layoutId:n,layoutItemId:a}))}))}))}))}const _e=e.css`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  right: 0;
  display: flex;
  z-index: 0;
`;class Ue extends e.React.PureComponent{constructor(t){super(t),this.toggleModal=t=>{t.stopPropagation(),(0,e.getAppStore)().getState().browserSizeMode!==e.BrowserSizeMode.Small?this.setState((t=>({showModal:!t.showModal}))):o.appBuilderSync.letBuilderShowPopperSelector("widget",{isPlaceholder:!0,isItemAccepted:this.isItemAccepted,onSelect:this.setContent})},this.closeModal=()=>{this.state.showModal&&this.setState({showModal:!1})},this.toggleDragoverEffect=(t,e)=>{this.ref&&t&&Ve(e)?this.ref.classList.add("dragover"):this.ref.classList.remove("dragover")},this.onDrop=t=>{if(!Ve(t))return;const{layoutId:e,layoutItemId:o}=this.props;We({layoutId:e,layoutItemId:o},t)},this.setContent=t=>{const{layoutId:o,layoutItemId:i}=this.props;t.itemType===e.LayoutItemType.Widget?Ze({layoutId:o,layoutItemId:i},t).then((()=>{this.setState({isBusy:!1})})):t.itemType===e.LayoutItemType.Section&&Ge({layoutId:o,layoutItemId:i}),this.setState({showModal:!1,isBusy:!0})},this.isItemAccepted=t=>this.layoutContext.isItemAccepted(t,!0),this.fakeLayouts=(0,e.Immutable)({[e.BrowserSizeMode.Large]:`${this.props.layoutId}_${this.props.layoutItemId}_tlarge`,[e.BrowserSizeMode.Medium]:`${this.props.layoutId}_${this.props.layoutItemId}_tmedium`,[e.BrowserSizeMode.Small]:`${this.props.layoutId}_${this.props.layoutItemId}_tsmall`}),this.state={showModal:!1,isBusy:!1}}componentDidUpdate(t){t.currentDialogId!==this.props.currentDialogId&&this.setState({showModal:!1})}getStyle(t){return e.css`
      position: absolute;
      left: 0;
      top: 0;
      overflow: hidden;

      &.dragover .drop-tip {
        background: ${e.polished.rgba(t.colors.palette.primary[700],.5)} !important;
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
    `}getPopupStyle(){const{builderTheme:t}=this.pageContext;return e.css`
      background-color: ${t.colors.palette.light[300]};
      max-height: 400px;
      overflow: auto;
    `}getModalStyle(){const{builderTheme:t}=this.pageContext;return e.css`
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
    `}render(){return(0,e.jsx)(s.PageContext.Consumer,null,(t=>(this.pageContext=t,(0,e.jsx)(s.LayoutContext.Consumer,null,(o=>{var n;return this.layoutContext=o,(0,e.jsx)("div",{className:"layout-widget layout-item-content no-widget h-100 w-100 d-flex justify-content-center align-items-center",ref:t=>{this.ref=t},css:this.getStyle(t.builderTheme)},(0,e.jsx)(De,{css:_e,className:"drop-tip",layouts:this.fakeLayouts,isPlaceholder:!0,highlightDragover:!1,onToggleDragoverEffect:this.toggleDragoverEffect,onDrop:this.onDrop}),this.state.isBusy&&(0,e.jsx)(i.Loading,{type:i.LoadingType.Primary}),!this.state.isBusy&&(0,e.jsx)("div",{ref:t=>{this.btnRef=t},className:"add-btn"},(0,e.jsx)(g,{title:null===(n=this.props.intl)||void 0===n?void 0:n.formatMessage({id:"addWidget"})},(0,e.jsx)(i.Button,{icon:!0,css:e.css`width: 36px; height: 36px; padding: 0.5rem;`,onClick:this.toggleModal,"aria-haspopup":!0},(0,e.jsx)(Fe,null)))),!this.state.isBusy&&this.state.showModal&&(0,e.jsx)(Ne.WidgetListPopper,{referenceElement:this.btnRef,isAccepted:this.isItemAccepted,onSelect:this.setContent,onClose:this.closeModal}),this.pageContext.viewOnly&&(0,e.jsx)("div",{className:"mask"}))})))))}}const Ye=(0,e.createSelector)((t=>{var e;return null===(e=t.appRuntimeInfo)||void 0===e?void 0:e.currentDialogId}),(t=>({currentDialogId:t}))),Xe=e.ReactRedux.connect(Ye)(Ue),qe=(0,e.injectIntl)(Xe);class Je extends e.React.PureComponent{mask(){return(0,e.jsx)("div",{className:"widget-mask"})}getStyle(){return e.css`
      .${Ct} & {
        overflow: visible !important;
      }
      z-index: ${this.props.isInlineEditing?s.LayoutZIndex.HandlerTools:0};

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
    `}getPlaceholderStyle(){return e.css`
      body:not(.design-mode) & {
        display: none !important;
      }
    `}render(){const{widgetId:t,isInlineEditing:o,isFunctionalWidget:i,hasEmbeddedLayout:n}=this.props,a=!o&&i&&!n;return(0,e.jsx)(s.WidgetRenderer,Object.assign({className:"w-100",css:this.getStyle()},this.props),!t&&(0,e.jsx)(qe,Object.assign({css:this.getPlaceholderStyle()},this.props)),a&&t&&this.mask())}}var Qe;!function(t){t[t.ChooseLayoutType=0]="ChooseLayoutType",t[t.RenderLayout=1]="RenderLayout"}(Qe||(Qe={}));class Ke extends e.React.Component{constructor(){super(...arguments),this.state={mode:Qe.RenderLayout},this.onLayoutTypeSelected=()=>{this.setState({mode:Qe.RenderLayout})},this.switchToChoosingMobe=()=>{this.setState({mode:Qe.ChooseLayoutType})}}shouldComponentUpdate(t){return!(t.isPageItem&&!t.visible)&&Object.keys(t).some((e=>t[e]!==this.props[e]))}render(){const{layout:t}=this.props;if(!t)return null;const o=(0,s.findLayoutBuilder)(t.type||e.LayoutType.FlowLayout);if(!o)return null;const i=this.props,{isItemAccepted:n}=i,a=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o}(i,["isItemAccepted"]);return(0,e.jsx)(s.LayoutContext.Provider,{value:{isItemAccepted:n||eo}},(0,e.jsx)(o,Object.assign({},a)))}}const to=e.ReactRedux.connect(s.utils.mapStateToLayoutProps)(Ke);function eo(t){return null!=t}function oo(t,e){if(!t)return null;let o={};t.backgroundIMage&&(o="string"==typeof t.backgroundIMage?{}:t.backgroundIMage);const n=t.backgroundPosition?i.FillType[t.backgroundPosition.toUpperCase()]:i.FillType.FILL;let a;a=null==t.backgroundColor?e:""===t.backgroundColor?"transparent":t.backgroundColor?t.backgroundColor:"";const s={color:a,fillType:n,image:o};return i.styleUtils.toBackgroundStyle(s)}function io(t){var o,n;const{viewId:a,isActive:s,layoutEntryComponent:l,viewVisibilityContext:r}=t,d=e.ReactRedux.useSelector((t=>{var e,o;return null===(o=null===(e=t.appConfig)||void 0===e?void 0:e.views)||void 0===o?void 0:o[a]})),c=null===(n=null===(o=(0,u.useTheme)())||void 0===o?void 0:o.body)||void 0===n?void 0:n.bg,p=l,h=r,[g,m]=e.React.useState(!1),f=e.React.useMemo((()=>({isInView:!0,isInCurrentView:s})),[s]);return e.React.useEffect((()=>{s&&d.lazyLoad&&!g&&m(!0)}),[s,d.lazyLoad,g]),(0,e.jsx)("div",{className:(0,e.classNames)("w-100 h-100 d-flex section-view",{[i.FOCUSABLE_CONTAINER_CLASS]:s}),style:oo(d,c),css:e.css`&, .exb-drop-area { pointer-events: ${s?"auto":"none"}; }`,key:a,id:`${d.parent}_${d.id}`},(g||!d.lazyLoad)&&(0,e.jsx)(e.ErrorBoundary,null,(0,e.jsx)(h.Provider,{value:f},(0,e.jsx)(p,{layouts:null==d?void 0:d.layout,isInSection:!0,className:"w-100"}))))}function no(t){var o,i;const{views:n,navInfo:a,animationPreview:s,playMode:l,currentIndex:r,previousIndex:d,progress:u,loop:c,viewTransition:p}=t,h=s&&l===e.AnimationPlayMode.OneByOne,{setting:g,playId:m}=e.React.useContext(e.AnimationContext),f=e.ReactRedux.useSelector((t=>{var o;return!g||g.type===e.AnimationType.None||(null===(o=t.appRuntimeInfo)||void 0===o?void 0:o.appMode)===e.AppMode.Design})),y=!f||h||(null==a?void 0:a.playId)&&(null==a?void 0:a.withOneByOne)?g:null,v=e.React.useMemo((()=>({setting:y,playId:h?m:null})),[y,h,m]);return(0,e.jsx)(e.AnimationContext.Provider,{value:v},(0,e.jsx)("div",{className:"section-content"},(0,e.jsx)(e.TransitionContainer,{useProgress:null!==(o=null==a?void 0:a.useProgress)&&void 0!==o&&o,useStep:null!==(i=null==a?void 0:a.useStep)&&void 0!==i&&i,previousIndex:d,currentIndex:r,progress:u,transitionType:null==p?void 0:p.type,direction:null==p?void 0:p.direction,playId:null==a?void 0:a.playId,withOneByOne:null==a?void 0:a.withOneByOne,loop:c},n.map((o=>{const i=o===n[r];return(0,e.jsx)(io,{key:o,viewId:o,isActive:i,layoutEntryComponent:t.layoutEntryComponent,viewVisibilityContext:t.viewVisibilityContext})})))))}const ao=t=>{const o=window.SVG,{className:i}=t,n=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o}(t,["className"]),a=(0,e.classNames)("jimu-icon jimu-icon-component",i);return o?e.React.createElement(o,Object.assign({className:a,src:pe()},n)):e.React.createElement("svg",Object.assign({className:a},n))};const so=t=>{const o=window.SVG,{className:i}=t,n=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o}(t,["className"]),a=(0,e.classNames)("jimu-icon jimu-icon-component",i);return o?e.React.createElement(o,Object.assign({className:a,src:ge()},n)):e.React.createElement("svg",Object.assign({className:a},n))};function lo(t){var o,i,n;const{sectionId:a,currentIndex:s,numOfViews:l,onCurrentViewChange:r}=t,d=e.ReactRedux.useSelector((t=>{var e;return null===(e=t.appConfig.sections[a])||void 0===e?void 0:e.arrowsNav})),u=e.ReactRedux.useSelector((t=>{var e;return null===(e=t.appConfig.sections[a])||void 0===e?void 0:e.dotsNav})),c=null!==(o=null==u?void 0:u.position)&&void 0!==o?o:"b",p=e.React.useMemo((()=>{const t=[];for(let e=0;e<l;e++)t.push(e);return t}),[l]),h=()=>{var t,o,i,n;return e.css`
      position: absolute;
      cursor: pointer;
      pointer-events: auto;

      &.disabled {
        cursor: default;
        svg {
          color: var(--light-400);
        }
      }

      &.first {
        left: ${null!==(t=d.offset)&&void 0!==t?t:0}px;
        top: 50%;
        transform: translateY(-50%);

        &.vertical {
          top: ${null!==(o=d.offset)&&void 0!==o?o:0}px;
          left: 50%;
          transform: translateX(-50%) rotate(90deg);
        }
      }
      &.second {
        right: ${null!==(i=d.offset)&&void 0!==i?i:0}px;
        top: 50%;
        transform: translateY(-50%);

        &.vertical {
          bottom: ${null!==(n=d.offset)&&void 0!==n?n:0}px;
          left: 50%;
          top: auto;
          right: auto;
          transform: translateX(-50%) rotate(90deg);
        }
      }
    `},g=e.React.useCallback(((t,o)=>(0,e.jsx)("div",{key:t,className:(0,e.classNames)("dot rounded-circle",{active:o,disabled:l<=1}),onClick:o?void 0:()=>{r(t)}})),[r,l]),m=e.React.useCallback((()=>{r(s>0?s-1:l-1)}),[s,l,r]),f=e.React.useCallback((()=>{r(s<l-1?s+1:0)}),[s,l,r]),y=l>1&&0!==s,v=l>1&&s!==l-1;return(0,e.jsx)(e.React.Fragment,null,(null==d?void 0:d.visible)&&(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)("div",{className:(0,e.classNames)("arrows-nav first",{vertical:"v"===d.direction,disabled:!y}),css:h(),onClick:y?m:null},(0,e.jsx)(ao,{autoFlip:"v"!==d.direction,size:null!==(i=d.size)&&void 0!==i?i:24})),(0,e.jsx)("div",{className:(0,e.classNames)("arrows-nav second",{vertical:"v"===d.direction,disabled:!v}),css:h(),onClick:v?f:null},(0,e.jsx)(so,{autoFlip:"v"!==d.direction,size:null!==(n=d.size)&&void 0!==n?n:24}))),(null==u?void 0:u.visible)&&(0,e.jsx)("div",{className:(0,e.classNames)("dots-nav",{"snap-left":"l"===c,"snap-top":"t"===c,"snap-right":"r"===c,"snap-bottom":"b"===c}),css:(()=>{var t,o,i,n,a,s,l,r,d,p,h,g,m,f;return e.css`
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
        width: ${null!==(t=u.size)&&void 0!==t?t:8}px;
        height: ${null!==(o=u.size)&&void 0!==o?o:8}px;

        &.active {
          border-color: var(--white);
          background: var(--primary-500);
          width: ${u.size>0?1.5*u.size:12}px;
          height: ${u.size>0?1.5*u.size:12}px;
        }

        &.disabled {
          cursor: default;
        }
      }

      &.snap-left {
        height: 100%;
        top: 0;
        left: ${null!==(i=u.offset)&&void 0!==i?i:50}px;
        width: ${null!==(n=u.size)&&void 0!==n?n:8}px;

        > div:not(:first-of-type) {
          margin-top: ${null!==(a=u.spacing)&&void 0!==a?a:10}px;
        }
      }
      &.snap-right {
        height: 100%;
        top: 0;
        right: ${null!==(s=u.offset)&&void 0!==s?s:50}px;
        width: ${null!==(l=u.size)&&void 0!==l?l:8}px;

        > div:not(:first-of-type) {
          margin-top: ${null!==(r=u.spacing)&&void 0!==r?r:10}px;
        }
      }
      &.snap-top {
        width: 100%;
        top: ${null!==(d=u.offset)&&void 0!==d?d:50}px;
        height: ${null!==(p=u.size)&&void 0!==p?p:8}px;

        > div:not(:first-of-type) {
          margin-left: ${null!==(h=u.spacing)&&void 0!==h?h:10}px;
        }
      }
      &.snap-bottom {
        width: 100%;
        bottom: ${null!==(g=u.offset)&&void 0!==g?g:50}px;
        height: ${null!==(m=u.size)&&void 0!==m?m:8}px;

        > div:not(:first-of-type) {
          margin-left: ${null!==(f=u.spacing)&&void 0!==f?f:10}px;
        }
      }
    `})()},p.map((t=>g(t,t===s)))))}function ro(t){return e.css`
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
  `}function uo(t){var o;const{views:n,navInfo:a,activeView:s,animationPreview:l,playMode:r,transition:d,sectionId:u,autoPlay:c,focusable:p=!0,interval:h=w,loop:g=!0,className:m,sectionStyle:f,forceAspectRatio:y,aspectRatio:v,rotate:I,layoutEntryComponent:x,viewVisibilityContext:b}=t,S=e.React.useRef(),C=e.React.useRef(),R=e.React.useRef(!1),T=e.React.useRef(!1),A=e.React.useRef(null),[M,P]=e.React.useState(!1),L=null==s?void 0:s.id,j=e.React.useMemo((()=>{var t;let o,i,s,l=n;return a?(l=null!==(t=a.visibleViews)&&void 0!==t?t:n,a.useProgress?(s=a.progress,o=(0,e.getIndexFromProgress)(s,l.length).currentIndex):(o=Math.max(0,l.indexOf(a.currentViewId)),i=a.previousViewId?Math.max(0,l.indexOf(a.previousViewId)):Math.max(0,o-1))):(o=Math.max(0,l.indexOf(L)),i=o),S.current=o,{currentIndex:o,previousIndex:i,progress:s}}),[L,a,n]),z=e.React.useMemo((()=>i.styleUtils.toCSSStyle(f)),[f]),{transform:k}=z,N=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o}(z,["transform"]),$=I>0||I<0?`rotateZ(${I}deg)`:"";let O=$;k&&(O=`${k} ${$}`);const E=e.React.useCallback((()=>{P(!0)}),[]),B=e.React.useCallback((()=>{P(!1)}),[]),D=e.React.useCallback((t=>{R.current=!0,T.current=t.target===C.current,null!=A.current&&(clearTimeout(A.current),A.current=null),c&&P(!0)}),[c]),F=e.React.useCallback((t=>{R.current=!1,null!=A.current&&(clearTimeout(A.current),A.current=null),c&&(A.current=setTimeout((()=>{P(!1)}),500))}),[c]),H=c&&!M;!function(t){const{sectionId:o,autoPlay:i,interval:n=w,loop:a=!1}=t,s=e.React.useRef(),l=e.ReactRedux.useSelector((t=>{var o,n;return i?(null===(o=t.appRuntimeInfo)||void 0===o?void 0:o.appMode)===e.AppMode.Design||(null===(n=t.appRuntimeInfo)||void 0===n?void 0:n.isPrintPreview):null})),r=e.React.useRef(l),d=e.React.useCallback((()=>{s.current&&(clearInterval(s.current),s.current=null)}),[]),u=e.React.useCallback((()=>{d(),s.current=setInterval((()=>{const t=function(t,o){var i,n;const a=(0,e.getAppStore)().getState(),s=a.appConfig.sections[t].views;let l=null===(n=null===(i=a.appRuntimeInfo)||void 0===i?void 0:i.sectionNavInfos)||void 0===n?void 0:n[t];const r=(null==l?void 0:l.currentViewId)?s.indexOf(l.currentViewId):0,d=r<s.length-1?r+1:0;return!(!o&&0===d||(l=l.set("previousViewId",s[r]).set("currentViewId",s[d]),(0,e.getAppStore)().dispatch(e.appActions.sectionNavInfoChanged(t,l)),0))}(o,a);t||d()}),1e3*n)}),[o,a,n,d]);e.React.useEffect((()=>{if(!r.current){if(!i)return void d();u()}return()=>{d()}}),[i,n,a,d,u]),e.React.useEffect((()=>{if(r.current!==l&&null!==l){if(r.current=l,l)return void d();i&&u()}}),[l,u,d,i])}({sectionId:u,interval:h,loop:g,autoPlay:H});const V=e.React.useCallback((t=>{e.jimuHistory.changeView(u,n[t])}),[u,n]);return(0,e.jsx)("div",{className:(0,e.classNames)(`section-layout layout-item-content w-100 ${null===(o=null==f?void 0:f.boxShadow)||void 0===o?void 0:o.presetStyle}`,m,{"aspect-ratio-wrapper":y&&v>0}),css:ro(v),"data-sectionid":u,style:Object.assign(Object.assign({},N),{transform:O}),onMouseEnter:c?E:null,onMouseLeave:c?B:null,onTouchStart:c?E:null,onTouchEnd:c?B:null,onFocus:D,onBlur:F,tabIndex:p?0:void 0,ref:C},(0,e.jsx)(no,{views:n,navInfo:a,animationPreview:l,playMode:r,currentIndex:j.currentIndex,previousIndex:j.previousIndex,progress:j.progress,loop:H&&g,viewTransition:d,layoutEntryComponent:x,viewVisibilityContext:b}),(0,e.jsx)(lo,{sectionId:u,numOfViews:n.length,currentIndex:j.currentIndex,onCurrentViewChange:V}))}class co extends e.React.PureComponent{render(){return e.React.createElement(uo,Object.assign({},this.props,{layoutEntryComponent:to,viewVisibilityContext:s.ViewVisibilityContext}))}}function po(t){const{isPreview:e,previewId:o}=t;return e?o:null}function ho(t,o){const[i,n]=e.React.useState(null),a=e.ReactRedux.useSelector((t=>{var o;return(null===(o=t.appRuntimeInfo)||void 0===o?void 0:o.appMode)===e.AppMode.Design})),l=e.ReactRedux.useSelector((t=>t.browserSizeMode)),r=e.React.useContext(s.PageVisibilityContext),d=e.React.useRef(r),u=e.React.useRef(l);e.React.useEffect((()=>{null==t||o||a&&d.current||n((0,e.getNextAnimationId)())}),[a,o,t]),e.React.useEffect((()=>{null==t||o||a||u.current===l||(u.current=l,n((0,e.getNextAnimationId)()))}),[l,a,o,t]),e.React.useEffect((()=>{null==t||o||a||d.current===r||(d.current=r,n((0,e.getNextAnimationId)()))}),[r,a,o,t]);const c=e.React.useCallback((()=>{n(null)}),[]);return{playId:i,revert:!a&&!r,onAnimationEnd:c}}function go(){const t=[0];for(let e=1;e<=10;e++)t.push(e/10);return t}const mo=zt.interact.modifiers.restrictRect({restriction:"parent"}),fo=zt.interact.modifiers.restrictRect({restriction:`div.${Tt}`});var yo=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const vo=[It,xt,vt,yt],Io=[xt];function xo(t){var o,i,n,a,l,r,d,u,c,p;const h=e.ReactRedux.useSelector((o=>function(t,o){var i;const n=s.utils.mapStateToLayoutItemProps(t,o),{layoutId:a,layoutItemId:l}=o,r=null===(i=t.appConfig.layouts[a])||void 0===i?void 0:i.type;if(!n.layoutItem)return Object.assign({layoutType:r},n);if(n.layoutItem.type===e.LayoutItemType.Widget){const i=function(t,o,i){const n=t.appConfig.layouts[o].content[i];if(n.type===e.LayoutItemType.Widget){const e=t.appConfig.widgets[n.widgetId];if(null!=(null==e?void 0:e.layouts)){const o=Object.keys(e.layouts);if(1!==o.length){const i=[];return o.forEach((o=>{const n=e.layouts[o];i.push(n[t.browserSizeMode])})),i}{const i=null==e?void 0:e.layouts[o[0]];if(i)return i[t.browserSizeMode]}}}return null}(t,a,l),d=Object.assign(Object.assign({layoutType:r},n),s.utils.mapStateToWidgetProps(t,o));return i&&(d.innerLayoutId=i),d}const d=s.searchUtils.getSectionInfo(t,n.layoutItem.sectionId),u=we(d);return Object.assign(Object.assign(Object.assign({layoutType:r},n),d),{activeView:t.appConfig.views[u]})}(o,t)),e.ReactRedux.shallowEqual),g=Object.assign(Object.assign({},h),t),m=e.React.useContext(s.PageContext),f=e.React.useRef();let y,v;const{effect:I,oneByOneEffect:x,hoverEffect:b}=null!==(i=null===(o=g.layoutItem)||void 0===o?void 0:o.setting)&&void 0!==i?i:{},{animationPreview:w,hoverPreview:S,previewId:C,playMode:R,layoutType:T}=g,A=e.React.useCallback((()=>m.rootLayoutId),[m.rootLayoutId]),M=function(t,o){const i=e.React.useRef(),[n,a]=e.React.useState(!0);return e.React.useEffect((()=>{if(i.current&&(i.current.unobserve(t),i.current=null),o&&t&&"function"==typeof IntersectionObserver){const e=new IntersectionObserver((t=>{var e;(e=t[0]).target.classList.contains("playing-animation")||e.boundingClientRect.width>0&&e.boundingClientRect.height>0&&a(e.isIntersecting)}),{threshold:go(),root:document,rootMargin:"20%"});return e.observe(t),i.current=e,()=>{i.current.unobserve(t),i.current=null}}}),[t,o]),n}(f.current,g.watchViewportVisibility);let P=null===(n=null==I?void 0:I[e.AnimationTriggerType.ScrollIntoView])||void 0===n?void 0:n.type;P=P&&P!==e.AnimationType.None?P:null;let L=null===(a=null==x?void 0:x[e.AnimationTriggerType.ScrollIntoView])||void 0===a?void 0:a.type;L=L&&L!==e.AnimationType.None?L:null;const[j,z]=e.React.useState({setting:null==x?void 0:x[e.AnimationTriggerType.ScrollIntoView],playId:null,oid:h.innerLayoutId,revert:null,playMode:null}),{setting:k}=e.React.useContext(e.AnimationContext),[N,$,O]=function(t){const{type:e,isPreview:o,previewId:i,hasParentAnimation:n}=t,a=po({isPreview:o,previewId:i}),{playId:s,revert:l,onAnimationEnd:r}=ho(e,n);return e?o?[a,!1,null]:[s,l,r]:[null,!1,null]}({type:P,isPreview:w,previewId:R!==e.AnimationPlayMode.OneByOne?C:null,hasParentAnimation:null!=(null==k?void 0:k.type)&&k.type!==e.AnimationType.None}),[E,B,D]=function(t){const{type:e,isPreview:o,previewId:i,hasParentAnimation:n}=t,a=po({isPreview:o,previewId:i}),{playId:s,revert:l,onAnimationEnd:r}=ho(e,n);return e?o?[a,!1,null]:[s,l,r]:[null,!1,null]}({type:L,isPreview:w,previewId:R!==e.AnimationPlayMode.AsOne?C:null,hasParentAnimation:null!=(null==k?void 0:k.type)&&k.type!==e.AnimationType.None}),{registerWidgetInitDragHandler:F,registerWidgetInitResizeHandler:H,setRefElement:V}=function(t){const{layoutId:o,layoutItemId:i,layoutType:n,layoutItemType:a,useDragHandler:s,restrict:l,getCurrentRootLayoutId:r}=t,d=e.React.useRef(),u=e.React.useRef(),c=e.React.useRef(),p=e.React.useRef(),h=e.React.useRef(),g=e.React.useRef(),m=e.React.useRef(),f=e.React.useRef();function y(e){Lt(!0),Ot(!1),t.onDragStart&&t.onDragStart(e),h.current&&h.current()}function v(e,o,i){t.onDragging&&t.onDragging(e,o,i),g.current&&g.current(o,i)}function I(o,i,n){e.lodash.defer((()=>{Lt(!1)})),t.onDragEnd&&t.onDragEnd(o,i,n),m.current&&m.current(i,n)}function x(e,o,i){Lt(!1),Ot(!0),t.onResizeStart&&t.onResizeStart(e,o,i),u.current&&u.current(o,i)}function b(e,o,i,n,a,s,l){t.onResizing&&t.onResizing(e,o,i,n,a,s,l),c.current&&c.current(o,i,n,a)}function w(o,i,n,a,s,l){e.lodash.defer((()=>{Ot(!1)})),t.onResizeEnd&&t.onResizeEnd(o,i,n,a,s,l),p.current&&p.current(i,n,a,s)}const S=e.React.useCallback(((t,e,o)=>{u.current=t,c.current=e,p.current=o}),[]),C=e.React.useCallback(((t,e,o)=>{h.current=t,g.current=e,m.current=o}),[]),R=e.React.useCallback((u=>{f.current=u,d.current||(d.current=(0,zt.interact)(u).origin("parent"),d.current=Pt(d.current,{layoutId:o,layoutItemId:i,useDragHandler:s,onDragging:v,onDragStart:y,onDragEnd:I,itemType:a,rootLayoutId:r,restrict:()=>l}),d.current=$t(d.current,{layoutItemId:i,onResizing:b,restrictEdges:n===e.LayoutType.FixedLayout,onResizeStart:x,onResizeEnd:w})),d.current&&(l?d.current.draggable({modifiers:[mo]}):d.current.draggable({modifiers:[fo]})),t.resizeObserver&&u&&t.resizeObserver.observe(u)}),[l]);return e.React.useEffect((()=>()=>{d.current&&(d.current.unset(),d.current=null),t.resizeObserver&&f.current&&t.resizeObserver.unobserve(f.current)}),[]),{registerWidgetInitDragHandler:C,registerWidgetInitResizeHandler:S,setRefElement:R}}({restrict:t.restrict,layoutId:t.layoutId,layoutItemId:t.layoutItemId,layoutType:T,layoutItemType:null===(l=h.layoutItem)||void 0===l?void 0:l.type,useDragHandler:t.useDragHandler,resizeObserver:t.resizeObserver,getCurrentRootLayoutId:A,onDragStart:t.onDragStart,onDragging:t.onDragging,onDragEnd:t.onDragEnd,onResizeStart:t.onResizeStart,onResizing:t.onResizing,onResizeEnd:t.onResizeEnd});e.React.useEffect((()=>{V(f.current)}),[]),e.React.useEffect((()=>{null==N&&E&&z({setting:null==x?void 0:x[e.AnimationTriggerType.ScrollIntoView],playId:E,oid:h.innerLayoutId,revert:B,playMode:R,onContextAnimationEnd:B?null:()=>{null==D||D(),w&&(0,e.getAppStore)().dispatch(e.appActions.clearAnimationPreview()),z({setting:null==x?void 0:x[e.AnimationTriggerType.ScrollIntoView],oid:h.innerLayoutId,playId:-1})}})}),[N,E]);const W=e.React.useCallback((()=>{var t;if(w)return R!==e.AnimationPlayMode.AsOne;const o=null===(t=(0,e.getAppStore)().getState().appRuntimeInfo)||void 0===t?void 0:t.animationPreview;return null==o||o.playMode!==e.AnimationPlayMode.OneByOne}),[w]),G=e.React.useCallback((()=>{var t;if(W()){const o=null==x?void 0:x[e.AnimationTriggerType.ScrollIntoView],i=(null===(t=null==o?void 0:o.option)||void 0===t?void 0:t.start)===e.AnimationStartMode.AfterPrevious;z({setting:o,playId:(0,e.getNextAnimationId)(),oid:h.innerLayoutId,revert:i,playMode:R,onContextAnimationEnd:i?null:()=>{z({setting:o,oid:h.innerLayoutId,playId:-1})}})}}),[L,w,R,W]),Z=e.React.useCallback((()=>{var t;if(W()){const o=null==x?void 0:x[e.AnimationTriggerType.ScrollIntoView];(null===(t=null==o?void 0:o.option)||void 0===t?void 0:t.start)===e.AnimationStartMode.AfterPrevious&&z({setting:o,playId:(0,e.getNextAnimationId)(),oid:h.innerLayoutId,revert:!1,playMode:R,onContextAnimationEnd:()=>{z({setting:o,oid:h.innerLayoutId,playId:-1})}})}null==O||O(),w&&(0,e.getAppStore)().dispatch(e.appActions.clearAnimationPreview())}),[L,w,R,W]);function _(){var t;const{selected:o,draggable:i=!0}=g,n=null!==(t=h.isInlineEditing)&&void 0!==t&&t,a=e.utils.isTouchDevice();return i&&!m.viewOnly&&!n&&(!a||o)}const{layoutId:U,layoutItemId:Y,top:X,left:q,right:J,bottom:Q,resizable:K,draggable:tt,isBlock:et,autoScroll:ot,layoutItem:it,isFunctionalWidget:nt,selected:at,isInlineEditing:st,hasEmbeddedLayout:lt,hasExtension:rt}=g;if(!it)return null;const{className:dt,forbidContextMenu:ut,onClick:ct,onDoubleClick:pt,children:gt,id:ft,isLastChild:yt}=g,vt=yo(g,["className","forbidContextMenu","onClick","onDoubleClick","children","id","isLastChild"]),It=it.type===e.LayoutItemType.Widget,xt=it.type===e.LayoutItemType.Section,bt=!ut&&!m.viewOnly&&(it.widgetId||it.sectionId)&&(!nt||xt),wt=null===(r=null==I?void 0:I[e.AnimationTriggerType.ScrollIntoView])||void 0===r?void 0:r.option,St=null!==(p=null===(c=null===(u=null===(d=it.setting)||void 0===d?void 0:d.style)||void 0===u?void 0:u.transform)||void 0===c?void 0:c.rotate)&&void 0!==p?p:0;return(0,e.jsx)(s.ViewportVisibilityContext.Provider,{value:!!mt()||M},(0,e.jsx)(e.AnimationComponent,{id:ft,parentId:U,type:P,configType:null==wt?void 0:wt.configType,direction:null==wt?void 0:wt.direction,revert:$,delay:t.delay,isLastChild:yt,playId:N,hoverEffect:b,hoverPlayId:C,onAnimationStart:G,onAnimationEnd:Z,css:function(t){var o;const i=_(),n=null!==(o=h.isInlineEditing)&&void 0!==o&&o,a=e.polished.rgba(m.builderTheme.colors.palette.dark[300],.6),l=m.builderTheme.colors.palette.primary[600],r=nt&&!xt||at?"solid":"dashed";let d=null;return mt()||(d=(0,e.getHoverStyle)(null==b?void 0:b.type,null==b?void 0:b.setting)),e.css`
      ${d};
      position: relative;
      overflow: visible;
      cursor: ${i?"move":"default"};
      touch-action: ${n||!at?"auto":"none"};
      user-select: ${n?"auto":"none"};
      min-width: ${s.MIN_LAYOUT_ITEM_SIZE}px;
      min-height: ${s.MIN_LAYOUT_ITEM_SIZE}px;

      & > div.widget-context-menu {
        display: none;
      }

      &:hover > div.widget-context-menu {
        display: flex;
      }

      .${Rt} &.functional-widget {
        pointer-events: none;
      }
      .${Rt} &.functional-widget .exb-drop-area {
        pointer-events: all;
      }

      .${Rt} &,
      .${Ct} & {
        > div.highlight-tip {
          .tip-content {
            outline-color: ${a};
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
            outline: ${et&&!at?"none":`1px ${r} ${a}`};
            display: block;
            outline-color: ${!nt||xt?a:"transparent"};
          }
        }
      }

      &:hover > div.highlight-tip,
      &.hovered > div.highlight-tip {
        display: block;
        .tip-content {
          &:after {
            outline-color: ${l};
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
    `}(St),style:t.style,ref:f,className:(0,e.classNames)("builder-layout-item exb-rnd",dt,{selected:at,"is-widget":It,"is-section":xt,"functional-widget":It&&nt,"no-drag-action":!_()}),onDoubleClick:function(o){const{layoutId:i,layoutItemId:n}=t,{supportInlineEditing:a,widgetId:s}=h;t.onDoubleClick&&t.onDoubleClick(o,{layoutId:i,layoutItemId:n}),m.viewOnly||(o.stopPropagation(),a&&(0,e.getAppStore)().dispatch(e.appActions.setWidgetIsInlineEditingState(s,!0)))},onClick:function(o){if(Math.abs(o.screenX-y)>s.CLICK_TOLRERANCE||Math.abs(o.screenY-v)>s.CLICK_TOLRERANCE)return void o.stopPropagation();const{viewOnly:i}=m,{isFunctionalWidget:n,layoutItem:a}=h;if(!i&&(!ht()&&mt()||n||a.type===e.LayoutItemType.Section)&&(o.stopPropagation(),!Et()&&!jt())){if(t.onClick){const{layoutId:e,layoutItemId:i}=g;t.onClick(o,{layoutId:e,layoutItemId:i})}!function(){const{layoutId:o,layoutItemId:i}=t;h.selected||(0,e.getAppStore)().dispatch(e.appActions.selectionChanged({layoutId:o,layoutItemId:i}))}()}},onMouseDown:function(t){y=t.screenX,v=t.screenY},"data-layoutitemid":Y,"data-layoutid":U},(0,e.jsx)(e.AnimationContext.Provider,{value:j},It&&(0,e.jsx)(Je,Object.assign({rotate:St,onInitDragHandler:F,onInitResizeHandler:H},vt)),xt&&(0,e.jsx)(co,Object.assign({rotate:St},vt))),(bt||h.useDragHandler)&&!m.viewOnly&&!h.isInController&&function(o){const{builderTheme:i}=m;return(0,e.jsx)(Wt,{builderTheme:i,layoutId:t.layoutId,layoutItem:h.layoutItem,positionType:"center",size:s.CONTEXT_MENU_ITEM_SIZE,rotate:o,iconSize:s.CONTEXT_MENU_ICON_SIZE,className:"widget-context-menu",menuItems:t.contextMenuItems||(h.useDragHandler?Io:vo)})}(St),!m.viewOnly&&at&&(0,e.jsx)(ke,{layoutId:U,layoutItem:it,top:X,left:q,right:J,bottom:Q,resizable:K,draggable:tt,selected:at,autoScroll:ot,forbidToolbar:t.forbidToolbar,toolItems:t.toolItems,showDefaultTools:t.showDefaultTools,isInlineEditing:st,isFunctionalWidget:nt,hasEmbeddedLayout:lt,isSection:xt,isBlock:et,hasExtension:It&&rt,widgetJson:h.widgetJson,widgetState:h.widgetState,rotate:St}),!m.viewOnly&&(0,e.jsx)("div",{className:"highlight-tip"},(0,e.jsx)("div",{className:"tip-content"})),t.children))}var bo=p(5124),wo=p.n(bo),So=p(3046),Co=p.n(So),Ro=p(3626),To=p.n(Ro),Ao=p(9791),Mo=p.n(Ao),Po=p(100),Lo=p.n(Po),jo=p(1528),zo=p.n(jo),ko=p(7319),No=p.n(ko),$o=p(3166),Oo=p.n($o),Eo=p(4201),Bo=p.n(Eo),Do=p(4703),Fo=p.n(Do),Ho=p(7758),Vo=p.n(Ho),Wo=p(1282),Go=p.n(Wo),Zo=p(2340),_o=p.n(Zo),Uo=p(3262),Yo=p.n(Uo),Xo=p(7123),qo=p.n(Xo),Jo=p(7322),Qo=p.n(Jo),Ko=p(6128);const ti=5;function ei(t,e){var o,i,n,a;if(e.rect.top>t.rect.bottom||e.rect.bottom<t.rect.top)return!1;if(e.rect.right+ti<t.rect.left&&null!=(null===(o=e.right)||void 0===o?void 0:o.value)&&null!=(null===(i=t.left)||void 0===i?void 0:i.value)){const o=e.right.usePercentage;if(o===t.left.usePercentage)return o||e.right.origin===t.left.origin}if(t.rect.right+ti<e.rect.left&&null!=(null===(n=t.right)||void 0===n?void 0:n.value)&&null!=(null===(a=e.left)||void 0===a?void 0:a.value)){const o=e.left.usePercentage;if(o===t.right.usePercentage)return o||e.left.origin===t.right.origin}return!1}function oi(t,e){var o,i,n,a;if(e.rect.left>t.rect.right||e.rect.right<t.rect.left)return!1;if(e.rect.bottom+ti<t.rect.top&&null!=(null===(o=e.bottom)||void 0===o?void 0:o.value)&&null!=(null===(i=t.top)||void 0===i?void 0:i.value)){const o=e.bottom.usePercentage;if(o===t.top.usePercentage)return o||e.bottom.origin===t.top.origin}if(t.rect.bottom+ti<e.rect.top&&null!=(null===(n=t.bottom)||void 0===n?void 0:n.value)&&null!=(null===(a=e.top)||void 0===a?void 0:a.value)){const o=e.top.usePercentage;if(o===t.bottom.usePercentage)return o||e.top.origin===t.bottom.origin}return!1}function ii(t,e){let o;return e.filter((e=>{var o,i;return(null===(o=e.right)||void 0===o?void 0:o.pixelValue)<(null===(i=t.left)||void 0===i?void 0:i.pixelValue)})).sort(((t,e)=>e.right.pixelValue-t.right.pixelValue)).some((e=>{if(ei(t,e))return o={value:e},!0})),null!=o&&(o.next=ii(o.value,e)),o}function ni(t,e){let o;return e.filter((e=>{var o,i;return(null===(o=e.left)||void 0===o?void 0:o.pixelValue)>(null===(i=t.right)||void 0===i?void 0:i.pixelValue)})).sort(((t,e)=>t.left.pixelValue-e.left.pixelValue)).some((e=>{if(ei(t,e))return o={value:e},!0})),null!=o&&(o.next=ni(o.value,e)),o}function ai(t,e){let o;return e.filter((e=>{var o,i;return(null===(o=e.bottom)||void 0===o?void 0:o.pixelValue)<(null===(i=t.top)||void 0===i?void 0:i.pixelValue)})).sort(((t,e)=>e.bottom.pixelValue-t.bottom.pixelValue)).some((e=>{if(oi(t,e))return o={value:e},!0})),null!=o&&(o.next=ai(o.value,e)),o}function si(t,e){let o;return e.filter((e=>{var o,i;return(null===(o=e.top)||void 0===o?void 0:o.pixelValue)>(null===(i=t.bottom)||void 0===i?void 0:i.pixelValue)})).sort(((t,e)=>t.top.pixelValue-e.top.pixelValue)).some((e=>{if(oi(t,e))return o={value:e},!0})),null!=o&&(o.next=si(o.value,e)),o}function li(t,o,i,n,a,l,r,d){if(null!=l&&null!=d){const u=Math.max(t.rect.top,o.rect.top),c=Math.min(t.rect.bottom,o.rect.bottom);l.setColor(e.polished.rgba(d.colors.palette.danger[800],.6));const p={left:a?o.rect.left-i:t.rect.right,top:u,width:i,height:c-u};if(l.drawRect(p),n){const n=(u+c)/2,p=t.right.usePercentage?e.utils.formatPercentageNumber(s.utils.toRatio(i,r)):e.utils.formatPixelNumber(`${i}px`);l.setColor(d.colors.palette.primary[600]),l.drawLine(a?o.rect.left-i:t.rect.right,n,a?o.rect.left:t.rect.right+i,n,!1,p)}}}function ri(t,o,i,n,a,l,r,d){if(null!=l&&null!=d){const u=Math.max(t.rect.left,o.rect.left),c=Math.min(t.rect.right,o.rect.right);l.setColor(e.polished.rgba(d.colors.palette.danger[800],.6));const p={left:u,top:a?o.rect.top-i:t.rect.bottom,width:c-u,height:i};if(l.drawRect(p),n){const n=(u+c)/2,p=t.bottom.usePercentage?e.utils.formatPercentageNumber(s.utils.toRatio(i,r)):e.utils.formatPixelNumber(`${i}px`);l.setColor(d.colors.palette.primary[600]),l.drawLine(n,a?o.rect.top-i:t.rect.bottom,n,a?o.rect.top:t.rect.bottom+i,!1,p)}}}function di(t,o,i,n,a,l,r){var d,u,c,p,h;let g=0,m=0;const f=0!==i.w||0!==i.h;if(!f||0!==i.w){let a=ii(t,o);a=function(t,e){const o={id:"",right:{value:e?"0%":"0px",pixelValue:0,usePercentage:e,origin:0,from:Number.NEGATIVE_INFINITY,to:Number.POSITIVE_INFINITY},rect:{left:-100,width:100,right:0,top:Number.NEGATIVE_INFINITY,bottom:Number.POSITIVE_INFINITY}};if(null==t)return{value:o};let i=t;for(;null!=i.next;)i=i.next;return i.next={value:o},t}(a,null==(null===(d=t.left)||void 0===d?void 0:d.value)||(null===(u=t.left)||void 0===u?void 0:u.usePercentage));let p=ni(t,o);p=function(t,e,o){const i={id:"",left:{value:e?"0%":"0px",pixelValue:o,usePercentage:e,origin:1,from:Number.NEGATIVE_INFINITY,to:Number.POSITIVE_INFINITY},rect:{left:o,width:100,right:o+100,top:Number.NEGATIVE_INFINITY,bottom:Number.POSITIVE_INFINITY}};if(null==t)return{value:i};let n=t;for(;null!=n.next;)n=n.next;return n.next={value:i},t}(p,null==(null===(c=t.right)||void 0===c?void 0:c.value)||t.right.usePercentage,n),g=function(t,e,o,i,n,a){if(e.gridline.rect.top===Number.NEGATIVE_INFINITY&&o.gridline.rect.top===Number.NEGATIVE_INFINITY||null==t.left||null==t.right)return 0;const s=t.left.pixelValue-e.gridline.right.pixelValue,l=o.gridline.left.pixelValue-t.right.pixelValue,r=e.fixed||o.fixed?ti:2*ti;if(Math.abs(l-s)<r){let r,d;return r=e.fixed||o.fixed?l-s:(l-s)/2,d=e.fixed?s:o.fixed?l:s+r,li(e.gridline,t,d,!1,!1,i,n,a),li(t,o.gridline,d,!1,!0,i,n,a),r}return 0}(t,{gridline:a.value,fixed:0!==i.w&&0===i.x},{gridline:p.value,fixed:0!==i.w&&0!==i.x},l,n,r),0!==g||0!==i.w&&0===i.x||(g=function(t,e,o,i,n){if(null==(null==e?void 0:e.next))return 0;const a=t.rect.left-e.value.rect.right;let s=e,l=-1;for(;null!=s.next;){const t=s.next,e=s.value.rect.left-t.value.rect.right;-1===l?Math.abs(e-a)<=ti&&(l=e,li(t.value,s.value,l,!0,!1,o,i,n)):e===l&&li(t.value,s.value,l,!0,!1,o,i,n),s=t}if(l>0){const s=l-a;return li(e.value,t,l,!1,!1,o,i,n),s}return 0}(t,a,l,n,r)),0!==g||0!==i.w&&0!==i.x||(g=function(t,e,o,i,n){if(null==(null==e?void 0:e.next))return 0;const a=e.value.rect.left-t.rect.right;let s=e,l=-1;for(;null!=s.next;){const t=s.next,e=t.value.rect.left-s.value.rect.right;-1===l?Math.abs(e-a)<=ti&&(l=e,li(s.value,t.value,l,!0,!0,o,i,n)):e===l&&li(s.value,t.value,l,!0,!0,o,i,n),s=t}if(l>0){const s=a-l;return li(t,e.value,l,!1,!0,o,i,n),s}return 0}(t,p,l,n,r)),function(t,o,i,n,a,l,r,d){var u;if(null!=l&&null!=d){l.setColor(d.colors.palette.primary[600]);let c=(null===(u=o.gridline)||void 0===u?void 0:u.rect.top)===Number.NEGATIVE_INFINITY;const p=o.gridline.rect;if(null!=p&&null!=t.left&&(!c||n&&!o.fixed)){const i=(Math.max(t.rect.top,p.top)+Math.min(t.rect.bottom,p.bottom))/2,n=t.left.usePercentage;let d=t.rect.left-p.right;o.fixed||(d+=a);const u=n?e.utils.formatPercentageNumber(s.utils.toRatio(d,r)):e.utils.formatPixelNumber(`${d}px`);l.drawLine(p.right,i,p.right+d,i,!1,u)}c=i.gridline.rect.top===Number.NEGATIVE_INFINITY;const h=i.gridline.rect;if(null!=h&&null!=t.right&&(!c||n&&!i.fixed)){const o=(Math.max(t.rect.top,h.top)+Math.min(t.rect.bottom,h.bottom))/2,n=t.right.usePercentage;let d=h.left-t.rect.right;i.fixed||(d-=a);const u=n?e.utils.formatPercentageNumber(s.utils.toRatio(d,r)):e.utils.formatPixelNumber(`${d}px`);l.drawLine(h.left,o,h.left-d,o,!1,u)}}}(t,{gridline:a.value,fixed:0!==i.w&&0===i.x},{gridline:p.value,fixed:0!==i.w&&0!==i.x},0!==i.w,g,l,n,r)}if(!f||0!==i.h){let n=ai(t,o);n=function(t,e){const o={id:"",bottom:{value:e?"0%":"0px",pixelValue:0,usePercentage:e,origin:0,from:Number.NEGATIVE_INFINITY,to:Number.POSITIVE_INFINITY},rect:{top:-100,height:100,bottom:0,left:Number.NEGATIVE_INFINITY,right:Number.POSITIVE_INFINITY}};if(null==t)return{value:o};let i=t;for(;null!=i.next;)i=i.next;return i.next={value:o},t}(n,null==(null===(p=t.top)||void 0===p?void 0:p.value)||t.top.usePercentage);let d=si(t,o);d=function(t,e,o){const i={id:"",top:{value:e?"0%":"0px",pixelValue:o,usePercentage:e,origin:1,from:Number.NEGATIVE_INFINITY,to:Number.POSITIVE_INFINITY},rect:{top:o,height:100,bottom:o+100,left:Number.NEGATIVE_INFINITY,right:Number.POSITIVE_INFINITY}};if(null==t)return{value:i};let n=t;for(;null!=n.next;)n=n.next;return n.next={value:i},t}(d,null==(null===(h=t.bottom)||void 0===h?void 0:h.value)||t.bottom.usePercentage,a),m=function(t,e,o,i,n,a){if(e.gridline.rect.left===Number.NEGATIVE_INFINITY&&o.gridline.rect.left===Number.NEGATIVE_INFINITY||null==t.top||null==t.bottom)return 0;const s=t.top.pixelValue-e.gridline.bottom.pixelValue,l=o.gridline.top.pixelValue-t.bottom.pixelValue,r=e.fixed||o.fixed?ti:2*ti;if(Math.abs(l-s)<r){let r,d;return r=e.fixed||o.fixed?l-s:(l-s)/2,d=e.fixed?s:o.fixed?l:s+r,ri(e.gridline,t,d,!1,!1,i,n,a),ri(t,o.gridline,d,!1,!0,i,n,a),r}return 0}(t,{gridline:n.value,fixed:0!==i.h&&0===i.y},{gridline:d.value,fixed:0!==i.h&&0!==i.y},l,a,r),0!==m||0!==i.h&&0===i.y||(m=function(t,e,o,i,n){if(null==(null==e?void 0:e.next))return 0;const a=t.rect.top-e.value.rect.bottom;let s=e,l=-1;for(;null!=s.next;){const t=s.next,e=s.value.rect.top-t.value.rect.bottom;-1===l?Math.abs(e-a)<=ti&&(l=e,ri(t.value,s.value,l,!0,!1,o,i,n)):e===l&&ri(t.value,s.value,l,!0,!1,o,i,n),s=t}if(l>0){const s=l-a;return ri(e.value,t,l,!1,!1,o,i,n),s}return 0}(t,n,l,a,r)),0!==m||0!==i.h&&0!==i.y||(m=function(t,e,o,i,n){if(null==(null==e?void 0:e.next))return 0;const a=e.value.rect.top-t.rect.bottom;let s=e,l=-1;for(;null!=s.next;){const t=s.next,e=t.value.rect.top-s.value.rect.bottom;-1===l?Math.abs(e-a)<=ti&&(l=e,ri(s.value,t.value,l,!0,!0,o,i,n)):e===l&&ri(s.value,t.value,l,!0,!0,o,i,n),s=t}if(l>0){const s=a-l;return ri(t,e.value,l,!1,!0,o,i,n),s}return 0}(t,d,l,a,r)),function(t,o,i,n,a,l,r,d){if(null!=l&&null!=d){l.setColor(d.colors.palette.primary[600]);let u=o.gridline.rect.left===Number.NEGATIVE_INFINITY;const c=o.gridline.rect;if(null!=c&&null!=t.top&&(!u||n&&!o.fixed)){const i=(Math.max(t.rect.left,c.left)+Math.min(t.rect.right,c.right))/2,n=t.top.usePercentage;let d=t.rect.top-c.bottom;o.fixed||(d+=a);const u=n?e.utils.formatPercentageNumber(s.utils.toRatio(d,r)):e.utils.formatPixelNumber(`${d}px`);l.drawLine(i,c.bottom,i,c.bottom+d,!1,u)}u=i.gridline.rect.left===Number.NEGATIVE_INFINITY;const p=i.gridline.rect;if(null!=p&&null!=t.bottom&&(!u||n&&!i.fixed)){const o=(Math.max(t.rect.left,p.left)+Math.min(t.rect.right,p.right))/2,n=t.bottom.usePercentage;let d=p.top-t.rect.bottom;i.fixed||(d-=a);const u=n?e.utils.formatPercentageNumber(s.utils.toRatio(d,r)):e.utils.formatPixelNumber(`${d}px`);l.drawLine(o,p.top,o,p.top-d,!1,u)}}}(t,{gridline:null==n?void 0:n.value,fixed:0!==i.h&&0===i.y},{gridline:null==d?void 0:d.value,fixed:0!==i.y&&0!==i.y},0!==i.h,m,l,a,r)}return{dx:g,dy:m}}function ui(t,e){return Math.abs(e.pixelValue-t.pixelValue)}function ci(t,e,o){if(t.pixelValue+e===o.pixelValue){const e=o.usePercentage;if(e===t.usePercentage)return e||o.origin===t.origin}return!1}function pi(t,e){return e.filter((e=>function(t,e){if(ui(e,t)<4*ti){const o=e.usePercentage;if(o===t.usePercentage)return o||e.origin===t.origin}return!1}(t,e))).sort(((e,o)=>ui(e,t)-ui(o,t)))}var hi;function gi(t,e=!1){const o={};if(["left","right","width","top","bottom","height"].forEach((e=>{null!=(null==t?void 0:t[e])?o[e]=s.utils.isPercentage(t[e])?"%":"px":o[e]="%"})),e){const t=o.left;o.left=o.right,o.right=t}return o}function mi(t,e){return s.utils.isPercentage(t)?Math.round(s.utils.fromRatio(t,e)):Math.round(parseFloat(t))}function fi(t,e,o){var i,n,a,l,r,d,u,c,p;const h=t.bbox,g=gi(h,k()),m=null!==(i=t.setting)&&void 0!==i?i:{},f=function(t,e,o){var i,n,a;const l={},r=null!==(i=t.bbox)&&void 0!==i?i:{},d=null!==(a=null===(n=t.setting)||void 0===n?void 0:n.autoProps)&&void 0!==a?a:{};return d.width===s.LayoutItemSizeModes.Stretch?(l.left=mi(r.left,e),l.right=e-mi(r.right,e),l.width=l.right-l.left):d.width===s.LayoutItemSizeModes.Auto?d.left?l.right=e-mi(r.right,e):l.left=mi(r.left,e):(l.width=mi(r.width,e),d.left?(l.right=e-mi(r.right,e),l.left=l.right-l.width):(l.left=mi(r.left,e),l.right=l.left+l.width)),d.height===s.LayoutItemSizeModes.Stretch?(l.top=mi(r.top,o),l.bottom=o-mi(r.bottom,o),l.height=l.bottom-l.top):d.height===s.LayoutItemSizeModes.Auto?d.top?l.bottom=o-mi(r.bottom,o):l.top=mi(r.top,o):(l.height=mi(r.height,o),d.top?(l.bottom=o-mi(r.bottom,o),l.top=l.bottom-l.height):(l.top=mi(r.top,o),l.bottom=l.top+l.height)),l}(t,e,o),y={id:t.id,rect:f},v=t=>s.utils.isPercentage(t)?100-parseFloat(t)+"%":t,I=t=>s.utils.isPercentage(t)?100-parseFloat(t)+"%":e-parseFloat(t)+"px",x={value:h.left,pixelValue:f.left,usePercentage:"%"===g.left,origin:0},b={value:h.top,pixelValue:f.top,usePercentage:"%"===g.top,origin:0},w={value:v(h.right),pixelValue:f.right,usePercentage:"%"===g.right,origin:1},S={value:v(h.bottom),pixelValue:f.bottom,usePercentage:"%"===g.bottom,origin:1};if((null===(n=m.autoProps)||void 0===n?void 0:n.width)===s.LayoutItemSizeModes.Stretch)y.left=x,y.right=w,g.left===g.right&&"%"===g.left&&(y.xm={value:(parseFloat(y.left.value)+parseFloat(y.right.value))/2+"%",pixelValue:(f.left+f.right)/2,usePercentage:"%"===g.left});else if((null===(a=m.autoProps)||void 0===a?void 0:a.width)===s.LayoutItemSizeModes.Auto)(null===(l=m.autoProps)||void 0===l?void 0:l.left)?y.right=w:y.left=x;else if(null===(r=m.autoProps)||void 0===r?void 0:r.left){if(y.right=w,g.right===g.width){const t=parseFloat(h.right),e=parseFloat(h.width),o="px"===g.right?t+e:100-(t+e),i="px"===g.right?t+e/2:100-(t+e/2);y.left={value:`${o}${g.right}`,pixelValue:f.left,usePercentage:"%"===g.right,origin:1},y.xm={value:`${i}${g.right}`,pixelValue:f.left+f.width/2,usePercentage:"%"===g.right,origin:1}}}else if(y.left=x,g.left===g.width){const t=parseFloat(h.left),e=parseFloat(h.width),o=t+e;y.right={value:`${o}${g.left}`,pixelValue:f.right,usePercentage:"%"===g.left,origin:0},y.xm={value:`${t+e/2}${g.left}`,pixelValue:f.left+f.width/2,usePercentage:"%"===g.left,origin:0}}if(k()){let t,o,i;y.rect.left=e-y.rect.right,y.rect.right=y.rect.left+y.rect.width,null!=y.left&&(o={value:I(y.left.value),pixelValue:y.rect.right,usePercentage:"%"===g.left,origin:0===y.left.origin?1:0}),null!=y.right&&(t={value:I(y.right.value),pixelValue:y.rect.left,usePercentage:"%"===g.right,origin:0===y.right.origin?1:0}),null!=y.xm&&(i={value:I(y.xm.value),pixelValue:y.rect.left+y.rect.width/2,usePercentage:y.xm.usePercentage,origin:0===y.xm.origin?1:0}),y.right=o,y.left=t,y.xm=i}if((null===(d=m.autoProps)||void 0===d?void 0:d.height)===s.LayoutItemSizeModes.Stretch)y.top=b,y.bottom=S,g.top===g.bottom&&"%"===g.top&&(y.ym={value:(parseFloat(y.top.value)+parseFloat(y.bottom.value))/2+"%",pixelValue:(f.top+f.bottom)/2,usePercentage:"%"===g.top});else if((null===(u=m.autoProps)||void 0===u?void 0:u.height)===s.LayoutItemSizeModes.Auto)(null===(c=m.autoProps)||void 0===c?void 0:c.top)?y.bottom=S:y.top=b;else if(null===(p=m.autoProps)||void 0===p?void 0:p.top){if(y.bottom=S,g.bottom===g.height){const t=parseFloat(h.bottom),e=parseFloat(h.height),o="px"===g.bottom?t+e:100-(t+e),i="px"===g.bottom?t+e/2:100-(t+e/2);y.top={value:`${o}${g.bottom}`,pixelValue:f.top,usePercentage:"%"===g.bottom,origin:1},y.ym={value:`${i}${g.bottom}`,pixelValue:f.top+f.height/2,usePercentage:"%"===g.bottom,origin:1}}}else if(y.top=b,g.top===g.height){const t=parseFloat(h.top),e=parseFloat(h.height),o=t+e;y.bottom={value:`${o}${g.top}`,pixelValue:f.bottom,usePercentage:"%"===g.top,origin:0},y.ym={value:`${t+e/2}${g.top}`,pixelValue:f.top+f.height/2,usePercentage:"%"===g.top,origin:0}}return y}function yi(t,e,o,i){var n;const a=[];Object.keys(null!==(n=t.content)&&void 0!==n?n:{}).forEach((n=>{if(n!==i){const i=t.content[n];if(!i.isPending){const t=fi(i,e,o);a.push(t)}}}));const s={left:0,right:e,width:e,top:0,bottom:o,height:o};return a.push({id:"",left:{value:"0px",pixelValue:0,usePercentage:!1,origin:0,from:0,to:o},right:{value:"0px",pixelValue:e,usePercentage:!1,origin:1,from:0,to:o},top:{value:"0px",pixelValue:0,origin:0,usePercentage:!1,from:0,to:e},bottom:{value:"0px",pixelValue:o,usePercentage:!1,origin:1,from:0,to:e},rect:s}),a.push({id:"",left:{value:"0%",pixelValue:0,usePercentage:!0,origin:0,from:0,to:o},xm:{value:"50%",pixelValue:Math.round(e/2),usePercentage:!0,origin:0,from:0,to:o},right:{value:"0%",pixelValue:e,usePercentage:!0,origin:1,from:0,to:o},top:{value:"0%",pixelValue:0,usePercentage:!0,origin:0,from:0,to:e},ym:{value:"50%",pixelValue:Math.round(o/2),usePercentage:!0,origin:0,from:0,to:e},bottom:{value:"0%",pixelValue:o,usePercentage:!0,origin:1,from:0,to:e},rect:s}),a}function vi(t,e,o,i,n,a,l,r){var d,u;const c=null!==(d=null==t?void 0:t.setting)&&void 0!==d?d:{},p=null!==(u=null==t?void 0:t.bbox)&&void 0!==u?u:{},h=0!==i.w||0!==i.h;if(h&&(c.hCenter&&"50%"===p.left||c.vCenter&&"50%"===p.top))return i;let g=function(t,e){if(0!==e.w||0!==e.h){const o={x:e.x,y:e.y,w:e.w,h:e.h};return t.width+e.w<16&&(o.w=16-t.width,0!==e.x&&(o.x=-o.w)),t.height+e.h<16&&(o.h=16-t.height,0!==e.y&&(o.y=-o.h)),o}return e}(o,i);n&&(g=function(t,e){if(0===e.w&&0===e.h)return e;const o=t.height/t.width;let i=e.w,n=e.h,a=e.x,s=e.y;return Math.abs(i)*o>Math.abs(n)?n=Math.round(i*o):i=Math.round(n/o),0!==a&&(a=-i),0!==s&&(s=-n),{x:a,y:s,w:i,h:n}}(o,g));const m=function(t,e,o,i,n){var a,l,r,d,u,c,p;const{x:h,y:g,w:m,h:f}=null!=n?n:{x:0,y:0,w:0,h:0},y=null!==(a=null==t?void 0:t.setting)&&void 0!==a?a:{},v={left:Math.round(e.left+h),width:Math.round(e.width+m),right:0,top:Math.round(e.top+g),height:Math.round(e.height+f),bottom:0};v.right=v.left+v.width,v.bottom=v.top+v.height;const I={id:null==t?void 0:t.id,rect:v},x=function(t,e){const o=t.top,i=e.height-(t.top+t.height),n=t.left;return[e.width-(t.left+t.width)<n?1:0,i<o?1:0]}(v,{width:o,height:i}),b=gi(null==t?void 0:t.bbox,k());if(k()){const t=b.left;b.left=b.right,b.right=t}return(null===(l=y.autoProps)||void 0===l?void 0:l.width)===s.LayoutItemSizeModes.Stretch?(I.left={value:`1${b.left}`,pixelValue:v.left,usePercentage:"%"===b.left,origin:x[0],from:v.top,to:v.bottom},I.right={value:`1${b.right}`,pixelValue:v.left+v.width,usePercentage:"%"===b.right,origin:x[1],from:v.top,to:v.bottom}):0===x[0]?(I.left={value:`1${b.left}`,pixelValue:v.left,usePercentage:"%"===b.left,origin:x[0],from:v.top,to:v.bottom},b.width===b.left&&(null===(r=y.autoProps)||void 0===r?void 0:r.width)!==s.LayoutItemSizeModes.Auto&&(I.xm={value:`1${b.left}`,pixelValue:v.left+v.width/2,usePercentage:"%"===b.left,origin:x[0],from:v.top,to:v.bottom},I.right={value:`1${b.left}`,pixelValue:v.left+v.width,usePercentage:"%"===b.left,origin:x[0],from:v.top,to:v.bottom})):(I.right={value:`1${b.right}`,pixelValue:v.left+v.width,usePercentage:"%"===b.right,origin:x[0],from:v.top,to:v.bottom},b.width===b.right&&(null===(d=y.autoProps)||void 0===d?void 0:d.width)!==s.LayoutItemSizeModes.Auto&&(I.xm={value:`1${b.right}`,pixelValue:v.left+v.width/2,usePercentage:"%"===b.right,origin:x[0],from:v.top,to:v.bottom},I.left={value:`1${b.right}`,pixelValue:v.left,usePercentage:"%"===b.right,origin:x[0],from:v.top,to:v.bottom})),(null===(u=y.autoProps)||void 0===u?void 0:u.height)===s.LayoutItemSizeModes.Stretch?(I.top={value:`1${b.top}`,pixelValue:v.top,usePercentage:"%"===b.top,origin:x[1],from:v.left,to:v.right},I.bottom={value:`1${b.bottom}`,pixelValue:v.top+v.height,usePercentage:"%"===b.bottom,origin:x[1],from:v.left,to:v.right}):0===x[1]?(I.top={value:`1${b.top}`,pixelValue:v.top,usePercentage:"%"===b.top,origin:x[1],from:v.left,to:v.right},b.height===b.top&&(null===(c=y.autoProps)||void 0===c?void 0:c.height)!==s.LayoutItemSizeModes.Auto&&(I.ym={value:`1${b.top}`,pixelValue:v.top+v.height/2,usePercentage:"%"===b.top,origin:x[1],from:v.left,to:v.right},I.bottom={value:`1${b.top}`,pixelValue:v.top+v.height,usePercentage:"%"===b.top,origin:x[1],from:v.left,to:v.right})):(I.bottom={value:`1${b.bottom}`,pixelValue:v.top+v.height,usePercentage:"%"===b.bottom,origin:x[1],from:v.left,to:v.right},b.height===b.bottom&&(null===(p=y.autoProps)||void 0===p?void 0:p.height)!==s.LayoutItemSizeModes.Auto&&(I.ym={value:`1${b.bottom}`,pixelValue:v.top+v.height/2,usePercentage:"%"===b.bottom,origin:x[1],from:v.left,to:v.right},I.top={value:`1${b.bottom}`,pixelValue:v.top,usePercentage:"%"===b.bottom,origin:x[1],from:v.left,to:v.right})),I}(t,o,e.width,e.height,g);let{dx:f,dy:y}=di(m,a,g,e.width,e.height,l,r);const v=function(t,e,o,i,n,a,s){let l=0,r=0;if(!i&&!n)return{dx:l,dy:r};let d=[],u=[];if(e.forEach((e=>{if(i){const i=[e.left,e.xm,e.right].filter((i=>{var n,a,s;if(null!=i)return i.from=null!==(n=e.rect.top)&&void 0!==n?n:e.rect.bottom,i.to=e.rect.top>=0&&e.rect.bottom>=0?e.rect.bottom:t.rect.top,0!==o.w?0===o.x?i.pixelValue>=(null===(a=t.right)||void 0===a?void 0:a.pixelValue):i.pixelValue<=(null===(s=t.left)||void 0===s?void 0:s.pixelValue):0===o.h}));d=d.concat(i)}if(n){const i=[e.top,e.ym,e.bottom].filter((i=>{var n,a,s;if(null!=i)return i.from=null!==(n=e.rect.left)&&void 0!==n?n:e.rect.right,i.to=e.rect.left>=0&&e.rect.right>=0?e.rect.right:t.rect.left,0!==o.h?0===o.y?i.pixelValue>=(null===(a=t.bottom)||void 0===a?void 0:a.pixelValue):i.pixelValue<=(null===(s=t.top)||void 0===s?void 0:s.pixelValue):0===o.w}));u=u.concat(i)}})),i){const e=[t.left,t.xm,t.right];e.some((t=>{if(null!=t){const o=pi(t,d);if((null==o?void 0:o.length)>0){null!=a&&null!=s&&o.forEach((t=>{!function(t,e,o){null!=e&&null!=o&&(e.setColor(o.colors.palette.danger[500]),e.drawLine(t.pixelValue,t.from,t.pixelValue,t.to,!0))}(t,a,s)}));const i=o[0];if(ui(i,t)<=ti)return l=i.pixelValue-t.pixelValue,function(t,e,o,i,n){null!=i&&null!=n&&(i.setColor(n.colors.palette.danger[500]),t.forEach((t=>{if(null!=t){let n=t.from,a=t.to,s=!1;if(e.forEach((e=>{ci(t,o,e)&&(n=Math.min(n,e.from),a=Math.max(a,e.to),s=!0)})),s){const e=t.pixelValue+o;i.drawLine(e,n,e,a)}}})))}(e,d,l,a,s),!0}}}))}if(n){const e=[t.top,t.ym,t.bottom];e.some((t=>{if(null!=t){const o=pi(t,u);if((null==o?void 0:o.length)>0){null!=a&&null!=s&&o.forEach((t=>{!function(t,e,o){null!=e&&null!=o&&(e.setColor(o.colors.palette.danger[500]),e.drawLine(t.from,t.pixelValue,t.to,t.pixelValue,!0))}(t,a,s)}));const i=o[0];if(ui(i,t)<=ti)return r=i.pixelValue-t.pixelValue,function(t,e,o,i,n){null!=i&&null!=n&&(i.setColor(n.colors.palette.danger[500]),t.forEach((t=>{if(null!=t){let n=t.from,a=t.to,s=!1;if(e.forEach((e=>{ci(t,o,e)&&(n=Math.min(n,e.from),a=Math.max(a,e.to),s=!0)})),s){const e=t.pixelValue+o;i.drawLine(n,e,a,e)}}})))}(e,u,r,a,s),!0}}}))}return{dx:l,dy:r}}(m,a,g,0===f&&(!h||0!==i.w),0===y&&(!h||0!==i.h),l,r);f=0!==f?f:v.dx,y=0!==y?y:v.dy;let I=g;return 0===f&&0===y||(I=function(t,e,o){let i,n,{x:a,y:s,w:l,h:r}=t;return i=0===l?hi.None:0===a?hi.Start:hi.End,n=0===r?hi.None:0===s?hi.Start:hi.End,0!==e&&(i===hi.None?a+=e:i===hi.End?(a+=e,l+=-e):l+=e),0!==o&&(n===hi.None?s+=o:n===hi.End?(s+=o,r+=-o):r+=o),{x:a,y:s,w:l,h:r}}(g,f,y)),I}function Ii(t,o,i){var n;const a={};let s=o,l=i;if(!s||!l){let o;if(window.jimuConfig.isBuilder){const i=document.querySelector(`iframe[name="${e.APP_FRAME_NAME_IN_BUILDER}"]`);i&&(o=(i.contentDocument||i.contentWindow.document).querySelector(`div.fixed-layout[data-layoutid=${t.id}]`))}else o=document.querySelector(`div.fixed-layout[data-layoutid=${t.id}]`);o?(s=o.clientWidth,l=o.clientHeight):(s=100,l=100)}Object.keys(null!==(n=t.content)&&void 0!==n?n:{}).forEach((e=>{const o=fi(t.content[e],s,l);a[e]=o}));const r=[...t.order];return r.sort(((t,e)=>{const o=a[t].rect,i=a[e].rect;if(o.top>i.top)return 1;if(o.top<i.top)return-1;const n=k()?o.right:o.left,s=k()?i.right:i.left;return n>s?1:n<s?-1:o.width>i.width||o.height>i.height?1:o.width<i.width||o.height<i.height?-1:0})),t.set("order",r)}function xi(t){const e=(0,o.getAppConfigAction)(),i=e.appConfig,{layoutId:n,layoutItemId:a}=t,s=i.layouts[n];Ko(s.order,"parent order must not be empty to alter order");const l=[].concat(s.order),r=l.indexOf(a);r===l.length-1||r<0||(l[r]=l[r+1],l[r+1]=t.layoutItemId,e.editLayoutOrder({layoutId:n},l).exec())}function bi(t){const e=(0,o.getAppConfigAction)(),i=e.appConfig,{layoutId:n,layoutItemId:a}=t,s=i.layouts[n];Ko(s.order,"parent order must not be empty to alter order");const l=[].concat(s.order),r=l.indexOf(a);r===l.length-1||r<0||(l.splice(r,1),l.push(t.layoutItemId),e.editLayoutOrder({layoutId:n},l).exec())}function wi(t){const e=(0,o.getAppConfigAction)(),i=e.appConfig,{layoutId:n,layoutItemId:a}=t,s=i.layouts[n];Ko(s.order,"parent order must not be empty to alter order");const l=[].concat(s.order),r=l.indexOf(a);r<=0||(l[r]=l[r-1],l[r-1]=t.layoutItemId,e.editLayoutOrder({layoutId:n},l).exec())}function Si(t){const e=(0,o.getAppConfigAction)(),i=e.appConfig,{layoutId:n,layoutItemId:a}=t,s=i.layouts[n];Ko(s.order,"parent order must not be empty to alter order");const l=[].concat(s.order),r=l.indexOf(a);r<=0||(l.splice(r,1),l.splice(0,0,t.layoutItemId),e.editLayoutOrder({layoutId:n},l).exec())}function Ci(t){const i=(0,o.getAppConfigAction)(),n=i.appConfig;let a=s.searchUtils.findLayoutItem(n,t).setting||(0,e.Immutable)({});a=a.set("lockLayout",!a.lockLayout),i.editLayoutItemSetting(t,a).exec()}function Ri(t,i){const n=(0,o.getAppConfigAction)(),a=n.appConfig,l=s.searchUtils.findLayoutItem(a,t),r=l.bbox;let d,u=l.setting||(0,e.Immutable)({});switch(0!==parseInt(r[i],10)&&n.editLayoutItemBBox(t,r.set(i,s.utils.isPercentage(r[i])?"0%":"0px")),u=u.setIn(["autoProps",i],!1),i){case"top":d="bottom";break;case"bottom":d="top";break;case"left":d="right";break;case"right":d="left"}if(u=u.setIn(["autoProps",d],!0),"left"===i||"right"===i?u=u.set("hCenter",!1):"top"!==i&&"bottom"!==i||(u=u.set("vCenter",!1)),n.editLayoutItemSetting(t,u),n.appConfig.useAutoSortInFixedLayout){const e=Ii(n.appConfig.layouts[t.layoutId]);n.editLayoutOrder(t,e.order)}n.exec()}function Ti(t){const i=(0,o.getAppConfigAction)(),n=i.appConfig,a=s.searchUtils.findLayoutItem(n,t),l=a.bbox;let r=a.setting||(0,e.Immutable)({});if(r=r.set("hCenter",!1).setIn(["autoProps","left"],!1).setIn(["autoProps","right"],!1).setIn(["autoProps","width"],s.LayoutItemSizeModes.Stretch),i.editLayoutItemBBox(t,l.set("left",s.utils.isPercentage(l.left)?"0%":"0px").set("right",s.utils.isPercentage(l.right)?"0%":"0px").set("width","100%")).editLayoutItemSetting(t,r),i.appConfig.useAutoSortInFixedLayout){const e=Ii(i.appConfig.layouts[t.layoutId]);i.editLayoutOrder(t,e.order)}i.exec()}function Ai(t,i){var n,a;const l=(0,o.getAppConfigAction)(),r=l.appConfig,d=s.searchUtils.findLayoutItem(r,t);let u=d.setting||(0,e.Immutable)({}),c=d.bbox;if("h"===i)if((null===(n=u.autoProps)||void 0===n?void 0:n.width)===s.LayoutItemSizeModes.Stretch){if(s.utils.isPercentage(c.left)!==s.utils.isPercentage(c.right))return;{const t=s.utils.isPercentage(c.left)?"%":"px",e=parseFloat(c.left)+parseFloat(c.right);c=c.set("left",`${e/2}${t}`).set("right",`${e/2}${t}`)}}else c=c.set("left","50%"),u=u.set("hCenter",!0).setIn(["autoProps","left"],!1).setIn(["autoProps","right"],!0);else if((null===(a=u.autoProps)||void 0===a?void 0:a.height)===s.LayoutItemSizeModes.Stretch){if(s.utils.isPercentage(c.top)!==s.utils.isPercentage(c.bottom))return;{const t=s.utils.isPercentage(c.top)?"%":"px",e=parseFloat(c.top)+parseFloat(c.bottom);c=c.set("top",`${e/2}${t}`).set("bottom",`${e/2}${t}`)}}else c=c.set("top","50%"),u=u.set("vCenter",!0).setIn(["autoProps","top"],!1).setIn(["autoProps","bottom"],!0);if(l.editLayoutItemBBox(t,c).editLayoutItemSetting(t,u),l.appConfig.useAutoSortInFixedLayout){const e=Ii(l.appConfig.layouts[t.layoutId]);l.editLayoutOrder(t,e.order)}l.exec()}function Mi(t){Ai(t,"v")}function Pi(t){Ai(t,"h")}function Li(t){const i=(0,o.getAppConfigAction)(),n=i.appConfig,a=s.searchUtils.findLayoutItem(n,t),l=a.bbox;let r=a.setting||(0,e.Immutable)({});if(r=r.set("vCenter",!1).setIn(["autoProps","top"],!1).setIn(["autoProps","bottom"],!1).setIn(["autoProps","height"],s.LayoutItemSizeModes.Stretch),i.editLayoutItemBBox(t,l.set("top",s.utils.isPercentage(l.top)?"0%":"0px").set("bottom",s.utils.isPercentage(l.bottom)?"0%":"0px").set("height","100%")).editLayoutItemSetting(t,r),i.appConfig.useAutoSortInFixedLayout){const e=Ii(i.appConfig.layouts[t.layoutId]);i.editLayoutOrder(t,e.order)}i.exec()}function ji(t){const i=(0,o.getAppConfigAction)(),n=i.appConfig,a=s.searchUtils.findLayoutItem(n,t),l=a.bbox;let r=a.setting||(0,e.Immutable)({});if(r=r.set("vCenter",!1).set("hCenter",!1).setIn(["autoProps","top"],!1).setIn(["autoProps","bottom"],!1).setIn(["autoProps","left"],!1).setIn(["autoProps","right"],!1).setIn(["autoProps","height"],s.LayoutItemSizeModes.Stretch).setIn(["autoProps","width"],s.LayoutItemSizeModes.Stretch),i.editLayoutItemBBox(t,l.set("top",s.utils.isPercentage(l.top)?"0%":"0px").set("bottom",s.utils.isPercentage(l.bottom)?"0%":"0px").set("left",s.utils.isPercentage(l.left)?"0%":"0px").set("right",s.utils.isPercentage(l.right)?"0%":"0px").set("width","100%").set("height","100%")).editLayoutItemSetting(t,r),i.appConfig.useAutoSortInFixedLayout){const e=Ii(i.appConfig.layouts[t.layoutId]);i.editLayoutOrder(t,e.order)}i.exec()}!function(t){t[t.Start=0]="Start",t[t.End=1]="End",t[t.None=2]="None"}(hi||(hi={}));const zi=[[{icon:Lo(),visible:()=>pt()===e.AppMode.Design&&!ht(),title:t=>t.formatMessage("align")},{icon:zo(),label:t=>t.formatMessage(s.utils.isRTL()?"snapToRight":"snapToLeft"),title:t=>t.formatMessage(s.utils.isRTL()?"snapToRight":"snapToLeft"),autoFlipIcon:!0,onClick:t=>{const{layoutItem:e,layoutId:o}=t;Ri({layoutId:o,layoutItemId:e.id},"left")}},{icon:Fo(),label:t=>t.formatMessage("alignHCenter"),title:t=>t.formatMessage("alignHCenter"),disabled:t=>{var e,o;const{layoutItem:i}=t;return(null===(o=null===(e=i.setting)||void 0===e?void 0:e.autoProps)||void 0===o?void 0:o.width)===s.LayoutItemSizeModes.Stretch&&s.utils.isPercentage(i.bbox.left)!==s.utils.isPercentage(i.bbox.right)},onClick:t=>{const{layoutItem:e,layoutId:o}=t;Pi({layoutId:o,layoutItemId:e.id})}},{icon:No(),label:t=>t.formatMessage(s.utils.isRTL()?"snapToLeft":"snapToRight"),title:t=>t.formatMessage(s.utils.isRTL()?"snapToLeft":"snapToRight"),autoFlipIcon:!0,onClick:t=>{const{layoutItem:e,layoutId:o}=t;Ri({layoutId:o,layoutItemId:e.id},"right")}},{icon:Oo(),label:t=>t.formatMessage("snapToTop"),title:t=>t.formatMessage("snapToTop"),onClick:t=>{const{layoutItem:e,layoutId:o}=t;Ri({layoutId:o,layoutItemId:e.id},"top")}},{icon:Vo(),label:t=>t.formatMessage("alignVCenter"),title:t=>t.formatMessage("alignVCenter"),disabled:t=>{var e,o;const{layoutItem:i}=t;return(null===(o=null===(e=i.setting)||void 0===e?void 0:e.autoProps)||void 0===o?void 0:o.height)===s.LayoutItemSizeModes.Stretch&&s.utils.isPercentage(i.bbox.top)!==s.utils.isPercentage(i.bbox.bottom)},onClick:t=>{const{layoutItem:e,layoutId:o}=t;Mi({layoutId:o,layoutItemId:e.id})}},{icon:Bo(),label:t=>t.formatMessage("snapToBottom"),title:t=>t.formatMessage("snapToBottom"),onClick:t=>{const{layoutItem:e,layoutId:o}=t;Ri({layoutId:o,layoutItemId:e.id},"bottom")}},{icon:To(),label:t=>t.formatMessage("fullWidth"),title:t=>t.formatMessage("fullWidth"),onClick:t=>{const{layoutItem:e,layoutId:o}=t;Ti({layoutId:o,layoutItemId:e.id})}},{icon:Co(),label:t=>t.formatMessage("fullHeight"),title:t=>t.formatMessage("fullHeight"),onClick:t=>{const{layoutItem:e,layoutId:o}=t;Li({layoutId:o,layoutItemId:e.id})}},{icon:Mo(),label:t=>t.formatMessage("fullSize"),title:t=>t.formatMessage("fullSize"),onClick:t=>{const{layoutItem:e,layoutId:o}=t;ji({layoutId:o,layoutItemId:e.id})}}],[{icon:wo(),visible:()=>pt()===e.AppMode.Design&&!ht(),title:t=>t.formatMessage("arrange")},{icon:Go(),label:t=>t.formatMessage("sendBackward"),title:t=>t.formatMessage("sendBackward"),onClick:t=>{const{layoutItem:e,layoutId:o}=t;wi({layoutId:o,layoutItemId:e.id})}},{icon:_o(),label:t=>t.formatMessage("bringForward"),title:t=>t.formatMessage("bringForward"),onClick:t=>{const{layoutItem:e,layoutId:o}=t;xi({layoutId:o,layoutItemId:e.id})}},{icon:Yo(),label:t=>t.formatMessage("sendToBack"),title:t=>t.formatMessage("sendToBack"),onClick:t=>{const{layoutItem:e,layoutId:o}=t;Si({layoutId:o,layoutItemId:e.id})}},{icon:qo(),label:t=>t.formatMessage("bringToFront"),title:t=>t.formatMessage("bringToFront"),onClick:t=>{const{layoutItem:e,layoutId:o}=t;bi({layoutId:o,layoutItemId:e.id})}}],{icon:t=>{var e,o;const{layoutItem:i}=t;return null!==(o=null===(e=i.setting)||void 0===e?void 0:e.lockLayout)&&void 0!==o&&o?Pe():Qo()},visible:()=>pt()===e.AppMode.Design&&!ht(),title:t=>{var e,o;const{layoutItem:i}=t,n=null!==(o=null===(e=i.setting)||void 0===e?void 0:e.lockLayout)&&void 0!==o&&o;return t.formatMessage(n?"unlockLayout":"lockLayout")},onClick:t=>{const{layoutItem:e,layoutId:o}=t;Ci({layoutId:o,layoutItemId:e.id})}},{seperator:!0}];function ki(t,e,o,i=!1){const n={};n.left=t.left+o.dx,n.width=t.width+o.dw;const a=e.right-t.right;0===o.dw?n.right=a-o.dx:0===o.dx?(o.dw>0&&(o.dw=Math.min(a,o.dw)),n.right=a-o.dw,n.width=t.width+o.dw):(n.right=a,o.dx<0&&(o.dx=Math.max(-t.left,o.dx),o.dw=-o.dx,n.left=t.left+o.dx,n.width=t.width+o.dw)),n.top=t.top+o.dy,n.height=t.height+o.dh;const s=e.bottom-t.bottom;return 0===o.dh?n.bottom=s-o.dy:0===o.dy?(o.dh>0&&(o.dh=Math.min(s,o.dh)),n.bottom=s-o.dh,n.height=t.height+o.dh):(n.bottom=s,o.dy<0&&(o.dy=Math.max(-t.top,o.dy),o.dh=-o.dy,n.top=t.top+o.dy,n.height=t.height+o.dh)),i&&k()?$i(n):n}function Ni(t,e){var o,i,n,a,s;const l={};let r=null!==(o=null==e?void 0:e.autoProps)&&void 0!==o?o:{},d=t;const u=$("height",t,r),c=$("width",t,r);if(u===C.Stretch)l.top=d.top,l.bottom=d.bottom;else{const o=null!==(i=r.top)&&void 0!==i&&i,a=null!==(n=r.bottom)&&void 0!==n&&n;u===C.Custom&&(l.height=d.height),o!==a&&!a||null==t.top?l.bottom=d.bottom:l.top=d.top,e.vCenter&&"50%"===d.top&&(l.top="50%")}if(c===C.Stretch)l.left=d.left,l.right=d.right;else{const t=null!==(a=r.left)&&void 0!==a&&a,o=null!==(s=r.right)&&void 0!==s&&s;c===C.Custom&&(l.width=d.width),t===o?null!=d.left?l.left=d.left:l.right=d.right:t&&null!=d.right?l.right=d.right:l.left=d.left,e.hCenter&&"50%"===d.left&&(l.left="50%")}return l}function $i(t){const o=(0,e.Immutable)(t),i=t.left;return o.set("left",t.right).set("right",i)}function Oi(t){return"ratio"===t.heightMode}function Ei(t,o,i,n){var a,s;let l=t,r=(0,e.Immutable)(null!=o?o:{});return(null===(a=null==o?void 0:o.autoProps)||void 0===a?void 0:a.width)!==C.Stretch&&(r=n.left<n.right?k()?r.setIn(["autoProps","right"],!1).setIn(["autoProps","left"],!0):r.setIn(["autoProps","left"],!1).setIn(["autoProps","right"],!0):k()?r.setIn(["autoProps","left"],!1).setIn(["autoProps","right"],!0):r.setIn(["autoProps","right"],!1).setIn(["autoProps","left"],!0)),(null===(s=null==o?void 0:o.autoProps)||void 0===s?void 0:s.height)!==C.Stretch&&(r=n.top<n.bottom?r.setIn(["autoProps","top"],!1).setIn(["autoProps","bottom"],!0):r.setIn(["autoProps","top"],!0).setIn(["autoProps","bottom"],!1)),["left","right","top","bottom","width","height"].forEach((e=>{const o="left"===e||"right"===e||"width"===e?i.width:i.height;let a=L(t[e]);k()&&("left"===e?a=L(t.right):"right"===e&&(a=L(t.left))),l=null==t[e]||a?l.set(e,`${(100*n[e]/o).toFixed(1)}%`):l.set(e,`${Math.round(n[e])}px`)})),{bbox:l,setting:r}}class Bi extends e.React.PureComponent{constructor(){super(...arguments),this.state={},this.handleResizeEnd=(t,e,o,i,n,a)=>{const{layoutItem:l}=this.props,r="ratio"===this.itemSetting.heightMode?s.utils.parseAspectRatio(this.itemSetting.aspectRatio)*i:n;this.props.onResizeEnd(t,e,o,i,r,a,l,this.itemSetting)},this.handleResizing=(t,e,o,i,n,a,l)=>{const r="ratio"===this.itemSetting.heightMode?s.utils.parseAspectRatio(this.itemSetting.aspectRatio)*i:n;this.props.onResizing(t,e,o,i,r,a,l)},this.moveUp=()=>{this.props.onMoveByKey(this.props.layoutItemId,0,-1)},this.moveDown=()=>{this.props.onMoveByKey(this.props.layoutItemId,0,1)},this.moveLeft=()=>{this.props.onMoveByKey(this.props.layoutItemId,-1,0)},this.moveRight=()=>{this.props.onMoveByKey(this.props.layoutItemId,1,0)}}getKeyboardComponent(){return this.props.isDesignMode?(0,e.jsx)(e.Keyboard,{bindings:{up:this.moveUp,down:this.moveDown,left:this.moveLeft,right:this.moveRight}}):null}getPositionStyle(){var t,o;const{layoutItem:i,offsetX:n,offsetY:a,dw:l,dh:r,initRect:d,containerRect:u}=this.props;let c=Ni(i.bbox,this.itemSetting);const p=i.setting;null!=d&&(c=ki(d,u,{dw:l,dh:"ratio"===this.itemSetting.heightMode?s.utils.parseAspectRatio(this.itemSetting.aspectRatio)*l:r,dx:n,dy:a},!0),(null==p?void 0:p.hCenter)&&"50%"===(null===(t=i.bbox)||void 0===t?void 0:t.left)&&(c.left="50%"),(null==p?void 0:p.vCenter)&&"50%"===(null===(o=i.bbox)||void 0===o?void 0:o.top)&&(c.top="50%"));const h=Object.assign(Object.assign({},c),function(t,e,o=!1){const i={},n=e.hCenter&&"50%"===t.left,a=e.vCenter&&"50%"===t.top,s=k()?-1:1;return n&&a?(i.right="auto",i.bottom="auto",i.transform=`translate(${-50*s}%, -50%)`):n?(i.right="auto",i.transform=`translateX(${-50*s}%)`):a&&(i.bottom="auto",i.transform="translateY(-50%)"),!o&&Oi(e)&&(i.height="auto"),i}(i.bbox,this.itemSetting,Boolean(d)));return 0===l&&0===r||(h.right="auto"),function(t){return[e.css`
      position: absolute;
      left: ${j(t,"left")};
      right: ${j(t,"right")};
      top: ${j(t,"top")};
      bottom: ${j(t,"bottom")};
      width: ${j(t,"width")};
      height: ${j(t,"height")};
    `,t.transform]}(h)}render(){const{layoutId:t,layoutItem:o,isLayoutLockChildren:i,draggable:n=!0,resizable:l=!0,showDefaultTools:r=!0}=this.props;if(null==o||o.isPending)return null;this.itemSetting=e.lodash.assign({},a,o.setting);const d=this.itemSetting.lockLayout,u=s.utils.parseAspectRatio(this.itemSetting.aspectRatio),c=Oi(this.itemSetting),p=s.utils.getLayoutItemSizeMode("width",o.bbox,this.itemSetting.autoProps),h=s.utils.getLayoutItemSizeMode("height",o.bbox,this.itemSetting.autoProps),g=s.utils.handleOnebyOneAnimation(this.props),[m,f]=this.getPositionStyle();return(0,e.jsx)(xo,Object.assign({className:"d-flex",css:m,style:{transform:f},layoutId:t,layoutItemId:o.id,restrict:this.itemSetting.lockParent||i,draggable:n&&!d,resizable:l&&!d,showDefaultTools:r,toolItems:r?zi:[],onResizeStart:this.props.onResizeStart,onResizing:this.handleResizing,onResizeEnd:this.handleResizeEnd,onClick:this.props.onClick,top:h!==s.LayoutItemSizeModes.Auto&&!c,bottom:h!==s.LayoutItemSizeModes.Auto&&!c,left:p!==s.LayoutItemSizeModes.Auto,right:p!==s.LayoutItemSizeModes.Auto,forceAspectRatio:c,aspectRatio:u,isInSection:this.props.isInSection,autoWidth:p===s.LayoutItemSizeModes.Auto,autoHeight:h===s.LayoutItemSizeModes.Auto},g),this.props.selected&&this.getKeyboardComponent())}}const Di=(0,e.createSelector)([(t,e)=>{var o;const i=null===(o=t.appRuntimeInfo)||void 0===o?void 0:o.selection;return null!=i&&i.layoutId===e.layoutId&&i.layoutItemId===e.layoutItemId},t=>{var o;return(null===(o=t.appRuntimeInfo)||void 0===o?void 0:o.appMode)===e.AppMode.Design}],((t,e)=>({selected:t,isDesignMode:e}))),Fi=e.ReactRedux.connect(Di)(Bi);var Hi=p(6262),Vi=p(4767),Wi=p.n(Vi);const Gi=t=>{const o=window.SVG,{className:i}=t,n=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o}(t,["className"]),a=(0,e.classNames)("jimu-icon jimu-icon-component",i);return o?e.React.createElement(o,Object.assign({className:a,src:Wi()},n)):e.React.createElement("svg",Object.assign({className:a},n))},Zi=e.css`
  pointer-events: all;
`;function _i(t){return e.css`
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
  `}function Ui(t){const{pageContext:n,onPageTemplateSelected:a}=t,{builderTheme:s,formatMessage:l,isHeader:r,isFooter:d}=n,[u,c]=e.React.useState(!1),p=e.React.useRef(null),h=e.ReactRedux.useSelector((t=>{var o,i,n;const a=null!==(n=null===(i=null===(o=t.appConfig)||void 0===o?void 0:o.forBuilderAttributes)||void 0===i?void 0:i.lockLayout)&&void 0!==n&&n;return t.appRuntimeInfo.appMode===e.AppMode.Design&&!a})),m=()=>{c(!1)};let f;return f=n.isHeader?l("chooseHeaderTemplate"):n.isFooter?l("chooseFooterTemplate"):l("chooseTemplate",{type:n.isDialog?l("dialog").toLocaleLowerCase():l("page").toLocaleLowerCase()}),h?(0,e.jsx)("div",{className:"d-flex w-100 flex-column justify-content-center align-items-center",css:_i(s)},(0,e.jsx)("div",{className:"d-flex flex-column justify-content-center align-items-center"},(0,e.jsx)(g,{placement:"bottom",title:f},(0,e.jsx)("div",{className:"action-item",ref:p},(0,e.jsx)(i.Button,{icon:!0,onClick:t=>{if(t.stopPropagation(),(0,e.getAppStore)().getState().browserSizeMode!==e.BrowserSizeMode.Small)c(!u);else if(n.isDialog)o.appBuilderSync.letBuilderShowPopperSelector("template",{templateMethod:"getWindowTemplates",onSelect:a});else{const t=r?"getHeaderTemplates":d?"getFooterTemplates":"getFullScreenPageTemplates";o.appBuilderSync.letBuilderShowPopperSelector("template",{templateMethod:t,onSelect:a})}},css:Zi,className:"rounded-circle"},(0,e.jsx)(Gi,{size:"m",color:s.colors.palette.dark[800]})))),(0,e.jsx)("div",{className:"action-seprator mt-3"}),(0,e.jsx)("h5",{className:"btn-text mt-2"},l("dropWidgetToAdd"))),u&&!n.isDialog&&(0,e.jsx)(Ne.TemplateSelector,{templates:r?(0,Hi.getHeaderTemplates)():d?(0,Hi.getFooterTemplates)():(0,Hi.getFullScreenPageTemplates)(),referenceElement:p.current,onItemSelect:a,onClose:m}),u&&n.isDialog&&(0,e.jsx)(Ne.TemplateSelector,{templates:(0,Hi.getWindowTemplates)(),referenceElement:p.current,onItemSelect:a,onClose:m})):null}class Yi{constructor(t,e){this.canvas=t,this.ctx=t.getContext("2d"),this.ctx.font="1rem",this.theme=e}setSize(t,e,o=1){const i=Math.round(e*o),n=Math.round(t*o);o<1?(this.canvas.style.width=`${t}px`,this.canvas.style.height=`${e}px`,this.canvas.width=t,this.canvas.height=e,this.ctx.scale(1,1)):this.canvas.width===n&&this.canvas.height===i||(this.canvas.style.width=`${t}px`,this.canvas.style.height=`${e}px`,this.canvas.width=n,this.canvas.height=i,this.ctx.scale(o,o))}setColor(t){this.ctx.fillStyle=t,this.ctx.strokeStyle=t}drawRect(t){this.ctx.fillRect(t.left,t.top,t.width,t.height)}drawLine(t,e,o,i,n=!1,a){if(n?this.ctx.setLineDash([5,3]):this.ctx.setLineDash([]),this.ctx.beginPath(),t===o){let n=t<this.canvas.width/2?.5:-.5;n=Number.isInteger(t)?n:0,this.ctx.moveTo(t+n,e),this.ctx.lineTo(o+n,i)}if(e===i){let n=e<this.canvas.height/2?.5:-.5;n=Number.isInteger(e)?n:0,this.ctx.moveTo(t,e+n),this.ctx.lineTo(o,i+n)}if(this.ctx.stroke(),null!=a){const n=(t+o)/2,s=(e+i)/2;this.drawLabel(n,s,a,e===i)}}drawTailedLine(t,e,o,i,n=!1,a){if(n?this.ctx.setLineDash([5,3]):this.ctx.setLineDash([]),this.ctx.beginPath(),t===o){let n=t<this.canvas.width/2?.5:-.5;n=Number.isInteger(t)?n:0;const a=Math.min(e,i);let s=a<this.canvas.height/2?.5:-.5;s=Number.isInteger(a)?s:0;const l=Math.max(e,i);let r=l<this.canvas.height/2?.5:-.5;r=Number.isInteger(l)?r:0,this.ctx.moveTo(t+n,e),this.ctx.lineTo(o+n,i),this.ctx.moveTo(t-5,a+s),this.ctx.lineTo(t+5,a+s),this.ctx.moveTo(o-5,l+r),this.ctx.lineTo(o+5,l+r)}if(e===i){let n=e<this.canvas.height/2?.5:-.5;n=Number.isInteger(e)?n:0;const a=Math.min(t,o);let s=a<this.canvas.width/2?.5:-.5;s=Number.isInteger(a)?s:0;const l=Math.max(t,o);let r=l<this.canvas.width/2?.5:-.5;r=Number.isInteger(l)?r:0,this.ctx.moveTo(t,e+n),this.ctx.lineTo(o,i+n),this.ctx.moveTo(a+s,e-5),this.ctx.lineTo(a+s,e+5),this.ctx.moveTo(l+r,i-5),this.ctx.lineTo(l+r,i+5)}if(this.ctx.stroke(),null!=a){const n=(t+o)/2,s=(e+i)/2;this.drawLabel(n,s,a,e===i)}}drawLabel(t,e,o,i=!0){const n=this.ctx.measureText(o),a=n.width,l=n.actualBoundingBoxAscent+n.actualBoundingBoxDescent,r=a+8,d=l+8,u=s.utils.isRTL()?-1:1;this.ctx.save(),this.theme?this.ctx.fillStyle=this.theme.colors.palette.primary[500]:this.ctx.fillStyle="var(--primary-500)",i?(this.drawRoundRect(t-r/2,e-d-8,r,d),this.ctx.fillStyle="#FFFFFF",this.ctx.fillText(o,t-a*u/2,e-12)):(this.drawRoundRect(t+8,e-d/2,r,d),this.ctx.fillStyle="#FFFFFF",-1===u?this.ctx.fillText(o,t+a+12,e+l/2):this.ctx.fillText(o,t+12,e+l/2)),this.ctx.restore()}drawRoundRect(t,e,o,i,n=2){const a=n,s=n,l=n,r=n;this.ctx.beginPath(),this.ctx.moveTo(t+a,e),this.ctx.lineTo(t+o-s,e),this.ctx.quadraticCurveTo(t+o,e,t+o,e+s),this.ctx.lineTo(t+o,e+i-r),this.ctx.quadraticCurveTo(t+o,e+i,t+o-r,e+i),this.ctx.lineTo(t+l,e+i),this.ctx.quadraticCurveTo(t,e+i,t,e+i-l),this.ctx.lineTo(t,e+a),this.ctx.quadraticCurveTo(t,e,t+a,e),this.ctx.closePath(),this.ctx.fill()}clear(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)}}const Xi=e.css`
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  background: transparent;
`,qi=e.css`
  ${Xi};
  pointer-events: none;
`;class Ji extends e.React.PureComponent{constructor(t){if(super(t),this.handleMouseDown=t=>{this.mousedownX=t.screenX,this.mousedownY=t.screenY},this.updateDeviceRatio=()=>{this.canvasPane.setSize(this.ref.clientWidth,this.ref.clientHeight,window.devicePixelRatio)},this.handleMoveItemByKey=(t,i,n)=>{var a,l,r;const{layout:d}=this.props;let u,c,p=d.content[t].bbox,h=null!==(a=d.content[t].setting)&&void 0!==a?a:(0,e.Immutable)({});const g=null!==(l=null==h?void 0:h.hCenter)&&void 0!==l&&l||null!==(r=null==h?void 0:h.vCenter)&&void 0!==r&&r;if(g){const e=this.ref.querySelector(`div[data-layoutitemid="${t}"]`);u=e.clientWidth,c=e.clientHeight}if(0!==i){if(s.utils.isPercentage(p.left)){const t=parseFloat(p.left);p=(null==h?void 0:h.hCenter)?p.set("left",`${(50-100*u/2/this.ref.clientWidth+.1*i).toFixed(1)}%`):p.set("left",`${(t+.1*i).toFixed(1)}%`)}else{const t=parseFloat(p.left);p=(null==h?void 0:h.hCenter)?p.set("left",`${(this.ref.clientWidth-u)/2+i}px`):p.set("left",`${t+i}px`)}if(s.utils.isPercentage(p.right)){const t=parseFloat(p.right);p=(null==h?void 0:h.hCenter)?p.set("right",`${(50+100*u/2/this.ref.clientWidth-.1*i).toFixed(1)}%`):p.set("right",`${(t-.1*i).toFixed(1)}%`)}else{const t=parseFloat(p.right);p=(null==h?void 0:h.hCenter)?p.set("right",(this.ref.clientWidth+u)/2-i+"px"):p.set("right",t-i+"px")}(null==h?void 0:h.hCenter)&&(h=h.set("hCenter",!1))}if(0!==n){if(s.utils.isPercentage(p.top)){const t=parseFloat(p.top);p=(null==h?void 0:h.vCenter)?p.set("top",`${(50-100*c/2/this.ref.clientHeight+.1*n).toFixed(1)}%`):p.set("top",`${(t+.1*n).toFixed(1)}%`)}else{const t=parseFloat(p.top);p=(null==h?void 0:h.vCenter)?p.set("top",`${(this.ref.clientHeight-c)/2+n}px`):p.set("top",`${t+n}px`)}if(s.utils.isPercentage(p.bottom)){const t=parseFloat(p.bottom);p=(null==h?void 0:h.vCenter)?p.set("bottom",`${(50+100*c/2/this.ref.clientHeight-.1*n).toFixed(1)}%`):p.set("bottom",`${(t-.1*n).toFixed(1)}%`)}else{const t=parseFloat(p.bottom);p=(null==h?void 0:h.hCenter)?p.set("bottom",(this.ref.clientHeight+c)/2-n+"px"):p.set("bottom",t-n+"px")}(null==h?void 0:h.vCenter)&&(h=h.set("vCenter",!1))}const m=(0,o.getAppConfigAction)();if(g&&m.editLayoutItemSetting({layoutId:d.id,layoutItemId:t},h),m.editLayoutItemBBox({layoutId:d.id,layoutItemId:t},p),m.appConfig.useAutoSortInFixedLayout){const t=Ii(m.appConfig.layouts[d.id],this.ref.clientWidth,this.ref.clientHeight);m.editLayoutOrder({layoutId:d.id},t.order)}m.exec()},this.toggleShowWidgetList=t=>{t.stopPropagation(),this.setState({showWidgetList:!this.state.showWidgetList})},this.closeWidgetList=()=>{this.state.showWidgetList&&this.setState({showWidgetList:!1})},this.handlePageTemplateSelected=t=>{const i=(0,o.getAppConfigAction)().appConfig;this.setState({isLoadingTemplate:!0}),this.pageContext.isHeader?o.templateUtils.applyPageTemplateToHeader(i,t).then((({appConfig:t})=>{(0,o.getAppConfigAction)(t).exec(),e.lodash.defer((()=>{this.setState({isLoadingTemplate:!1})}))})).catch((t=>{console.error(t)})):this.pageContext.isFooter?o.templateUtils.applyPageTemplateToFooter(i,t).then((({appConfig:t})=>{(0,o.getAppConfigAction)(t).exec(),e.lodash.defer((()=>{this.setState({isLoadingTemplate:!1})}))})).catch((t=>{console.error(t)})):this.pageContext.isDialog?o.templateUtils.applyTemplateToDialog(i,this.pageContext.dialogId,t).then((({appConfig:t})=>{(0,o.getAppConfigAction)(t).exec(),e.lodash.defer((()=>{this.setState({isLoadingTemplate:!1})}))})).catch((t=>{console.error(t)})):o.templateUtils.applyPageTemplateToBody(i,this.pageContext.pageId,t).then((({appConfig:t})=>{(0,o.getAppConfigAction)(t).exec(),e.lodash.defer((()=>{this.setState({isLoadingTemplate:!1})}))})).catch((t=>{console.error(t)}))},null==this.props.layout)return;s.utils.autoBindHandlers(this,["handleResizeStart","handleResizing","handleResizeEnd","handleDragStart","handleDragEnd","handleDragOver","handleDragEnter","handleDragLeave","handleDrop","handleActivate","handleToggleDragoverEffect"]);const i=e.ExtensionManager.getInstance().getExtensions(`${e.extensionSpec.ExtensionPoints.LayoutTransformer}`);if((null==i?void 0:i.length)>0){const t=i.find((t=>t.layoutType===this.props.layout.type));this.layoutTransform=null==t?void 0:t.transformLayout}this.flipLeftRight=s.utils.isRTL(),this.state={offsetX:0,offsetY:0,dw:0,dh:0,isDragover:!1,showWidgetList:!1,isLoadingTemplate:!1}}handleActivate(t){if(!mt())return;if(Math.abs(t.screenX-this.mousedownX)>s.CLICK_TOLRERANCE||Math.abs(t.screenY-this.mousedownY)>s.CLICK_TOLRERANCE)return void t.stopPropagation();const{isInSection:o,isInWidget:i}=this.props;this.pageContext.viewOnly||o||i||Et()||jt()||(t.stopPropagation(),(0,e.getAppStore)().dispatch(e.appActions.selectionChanged(null)))}componentDidMount(){var t,e,o;this.canvasPane=new Yi(this.canvasRef,this.pageContext.builderTheme),this.updateDeviceRatio();const i=`(resolution: ${window.devicePixelRatio}dppx)`;this.mediaQueryList=null===(t=window.matchMedia)||void 0===t?void 0:t.call(window,i);const{name:n,version:a}=window.jimuUA.browser;"safari"===n.toLowerCase()&&parseInt(a)<14?null===(e=this.mediaQueryList)||void 0===e||e.addListener(this.updateDeviceRatio):null===(o=this.mediaQueryList)||void 0===o||o.addEventListener("change",this.updateDeviceRatio)}componentWillUnmount(){var t,e;const{name:o,version:i}=window.jimuUA.browser;"safari"===o.toLowerCase()&&parseInt(i)<14?null===(t=this.mediaQueryList)||void 0===t||t.removeListener(this.updateDeviceRatio):null===(e=this.mediaQueryList)||void 0===e||e.removeEventListener("change",this.updateDeviceRatio)}componentDidUpdate(){this.updateDeviceRatio()}isResizingItem(){return 0!==this.state.dh||0!==this.state.dw}handleResizeStart(t){const{layout:e}=this.props;this.rndingLayoutId=t;const o=this.ref.querySelector(`div.exb-rnd[data-layoutid="${e.id}"][data-layoutitemid="${t}"]`);this.domRect=this.ref.getBoundingClientRect(),this.bboxGridlines=yi(this.props.layout,this.domRect.width,this.domRect.height,t);const i=o.getBoundingClientRect(),n=this.getPositionUnit(t);this.resizingRect=Object.assign({units:n},s.utils.relativeClientRect(i,this.domRect))}getResizingDelta(t,e,o,i,n,a){return vi(this.props.layout.content[t],this.domRect,this.resizingRect,{x:e,w:i,y:o,h:n},a,this.bboxGridlines,this.canvasPane,this.pageContext.builderTheme)}handleResizing(t,e,o,i,n,a,s){if(this.canvasPane.clear(),s>500)return void this.setState({offsetX:e,offsetY:o,dw:i,dh:n});const l=this.getResizingDelta(t,e,o,i,n,a);this.setState({offsetX:l.x,offsetY:l.y,dw:l.w,dh:l.h})}handleResizeEnd(t,i,n,a,s,l,r,d){var u,c;this.rndingLayoutId=null;const{layout:p}=this.props,h=this.getResizingDelta(t,i,n,a,s,l);this.canvasPane.clear();const g=ki(this.resizingRect,this.domRect,{dx:h.x,dy:h.y,dw:h.w,dh:h.h}),m=(0,o.getAppConfigAction)(),f={layoutId:p.id,layoutItemId:t},{bbox:y,setting:v}=Ei((0,e.Immutable)(r.bbox),r.setting,this.domRect,g);let I=y;if((null==d?void 0:d.hCenter)&&"50%"===(null===(u=r.bbox)||void 0===u?void 0:u.left)&&(I=I.set("left","50%")),(null==d?void 0:d.vCenter)&&"50%"===(null===(c=r.bbox)||void 0===c?void 0:c.top)&&(I=I.set("top","50%")),m.editLayoutItemBBox(f,this.flipLeftRight?$i(I):I).editLayoutItemSetting(f,v),m.appConfig.useAutoSortInFixedLayout){const t=Ii(m.appConfig.layouts[f.layoutId],this.domRect.width,this.domRect.height);m.editLayoutOrder(f,t.order)}m.exec(),this.bboxGridlines=null,this.setState({offsetX:0,offsetY:0,dw:0,dh:0})}handleDragOver(t,o,i,n,a,l,r){var d,u,c;if(this.canvasPane.clear(),!this.state.isDragover||r>500)return;let p,h,g,m=0,f=0;(null===(d=t.layoutInfo)||void 0===d?void 0:d.layoutId)===this.props.layout.id?(p=t.layoutInfo.layoutItemId,g=this.getPositionUnit(p),h=this.props.layout.content[p]):g=gi({},this.flipLeftRight);const y=t.rotation>0||t.rotation<0,v=vi(h,this.domRect,n,{x:0,y:0,w:0,h:0},!1,this.bboxGridlines,y?null:this.canvasPane,y?null:this.pageContext.builderTheme);if(null!=o&&(0!==v.x||0!==v.y)){const t=null!==(u=parseFloat(o.getAttribute("data-translatex")))&&void 0!==u?u:0,e=null!==(c=parseFloat(o.getAttribute("data-translatey")))&&void 0!==c?c:0;o.style.transform=`translate(${t+v.x}px, ${e+v.y}px)`}if(m=v.x,f=v.y,this.canvasPane.setColor(this.pageContext.builderTheme.colors.palette.primary[600]),function(t,o,i){const n=o.width-(t.left+t.width),a=o.height-(t.top+t.height),l="px"===t.units.left?e.utils.formatPixelNumber(`${Math.round(t.left)}px`):e.utils.formatPercentageNumber(s.utils.toRatio(t.left,o.width)),r="px"===t.units.right?e.utils.formatPixelNumber(`${Math.round(n)}px`):e.utils.formatPercentageNumber(s.utils.toRatio(n,o.width)),d="px"===t.units.top?e.utils.formatPixelNumber(`${Math.round(t.top)}px`):e.utils.formatPercentageNumber(s.utils.toRatio(t.top,o.height)),u="px"===t.units.bottom?e.utils.formatPixelNumber(`${Math.round(a)}px`):e.utils.formatPercentageNumber(s.utils.toRatio(a,o.height));t.left<=n?t.top<=a?(i.drawLine(0,t.top,t.left,t.top,!1,l),i.drawLine(t.left,0,t.left,t.top,!1,d)):(i.drawLine(0,t.top+t.height,t.left,t.top+t.height,!1,l),i.drawLine(t.left,t.top+t.height,t.left,o.height,!1,u)):t.top<=a?(i.drawLine(t.left+t.width,t.top,o.width,t.top,!1,r),i.drawLine(t.left+t.width,0,t.left+t.width,t.top,!1,d)):(i.drawLine(t.left+t.width,t.top+t.height,o.width,t.top+t.height,!1,r),i.drawLine(t.left+t.width,t.top+t.height,t.left+t.width,o.height,!1,u))}({width:n.width,height:n.height,left:n.left+m,top:n.top+f,units:g},this.domRect,this.canvasPane),null==t.layoutInfo||t.isPending){this.canvasPane.setColor(e.polished.rgba(this.pageContext.builderTheme.colors.palette.primary[700],.2));const t={left:n.left+m,top:n.top+f,width:n.width,height:n.height};this.canvasPane.drawRect(t)}}handleToggleDragoverEffect(t,e){var o;if(this.canvasPane.clear(),t){let t;this.domRect=this.ref.getBoundingClientRect(),(null===(o=e.layoutInfo)||void 0===o?void 0:o.layoutId)===this.props.layout.id&&(t=e.layoutInfo.layoutItemId),this.bboxGridlines=yi(this.props.layout,this.domRect.width,this.domRect.height,t)}this.setState({isDragover:t})}handleDragEnter(t){}handleDragLeave(){}handleDrop(t,e,o){let i;i=null==t.layoutInfo||t.layoutInfo.layoutId!==this.props.layout.id?gi({},this.flipLeftRight):this.getPositionUnit(t.layoutInfo.layoutItemId);const{snappedRect:n,delta:a}=this.calSnappedRect(t,e,Object.assign({units:i},o),t.layoutInfo);this.canvasPane.clear();const s={left:o.left+a.x,top:o.top+a.y,width:o.width,height:o.height,right:e.width-(o.left+a.x+o.width),bottom:e.height-(o.top+a.y+o.height)};this.addWidgetToLayout(t,e,s,n).catch((t=>{console.error(t)})),this.bboxGridlines=null}calSnappedRect(t,e,o,i){let n;(null==i?void 0:i.layoutId)===this.props.layout.id&&(n=this.props.layout.content[i.layoutItemId]);const a=vi(n,this.domRect,o,{x:0,y:0,w:0,h:0},!1,this.bboxGridlines),l={left:o.left+a.x,top:o.top+a.y,width:o.width,height:o.height};return l.right=e.width-(+l.left+ +l.width),l.bottom=e.height-(+l.top+ +l.height),o.width>e.width&&(l.width=e.width,l.left=0),o.height>e.height&&(l.height=e.height,l.top=0),l.left=s.utils.toRatio(l.left,e.width),l.top=s.utils.toRatio(l.top,e.height),l.width=s.utils.toRatio(l.width,e.width),l.height=s.utils.toRatio(l.height,e.height),l.right=s.utils.toRatio(l.right,e.width),l.bottom=s.utils.toRatio(l.bottom,e.height),{snappedRect:l,delta:a}}addWidgetToLayout(t,i,n,a,l){var r,d,u,c,p;return d=this,u=void 0,p=function*(){const{layout:d,browserSizeMode:u}=this.props;let c=(0,o.getAppConfigAction)(l);const p=yield V(c.appConfig,t,{layoutId:d.id},i,a),{layoutInfo:h,updatedAppConfig:g}=p;c=(0,o.getAppConfigAction)(g),null!=t.layoutInfo&&t.layoutInfo.layoutId===d.id&&c.editLayoutItemSetting(h,{vCenter:!1,hCenter:!1});const m=c.appConfig.layouts[h.layoutId].content[h.layoutItemId],f=(0,e.Immutable)(null!==(r=m.setting)&&void 0!==r?r:{}),y=Ei(m.bbox,f,this.domRect,n);let v=y.bbox;const I=y.setting;if(null==t.layoutInfo&&(this.pageContext.isHeader||this.pageContext.isFooter)){const t=c.appConfig,e=this.pageContext.isHeader?parseInt(`${t.header.height[u]}`):parseInt(`${t.footer.height[u]}`);v=v.set("height",s.utils.toRatio(Math.min(n.height,e),e))}if(c.editLayoutItemBBox(h,this.flipLeftRight?$i(v):v).editLayoutItemSetting(h,I),c.appConfig.useAutoSortInFixedLayout){const t=Ii(c.appConfig.layouts[h.layoutId],i.width,i.height);c.editLayoutOrder(h,t.order)}(0,e.getAppStore)().dispatch(e.appActions.layoutChanged(c.appConfig,h))},new((c=void 0)||(c=Promise))((function(t,e){function o(t){try{n(p.next(t))}catch(t){e(t)}}function i(t){try{n(p.throw(t))}catch(t){e(t)}}function n(e){var n;e.done?t(e.value):(n=e.value,n instanceof c?n:new c((function(t){t(n)}))).then(o,i)}n((p=p.apply(d,u||[])).next())}))}getPositionUnit(t){return gi(this.props.layout.content[t].bbox,this.flipLeftRight)}createItem(t,o,i){const{itemResizable:n,itemDraggable:a,itemSelectable:s,showDefaultTools:l}=this.props,{offsetX:r,offsetY:d,dw:u,dh:c}=this.state,p=o===this.rndingLayoutId?r:0,h=o===this.rndingLayoutId?d:0,g=o===this.rndingLayoutId?u:0,m=o===this.rndingLayoutId?c:0,f=o===this.rndingLayoutId?this.resizingRect:void 0,y=o===this.rndingLayoutId?this.domRect:void 0,v=t.content[o];return(0,e.jsx)(Fi,{key:`${t.id}_${o}`,index:i,layoutItem:v,offsetX:p,offsetY:h,dw:g,dh:m,initRect:f,containerRect:y,layoutId:t.id,layoutItemId:o,draggable:a,resizable:n,selectable:s,showDefaultTools:l,isLayoutLockChildren:this.layoutSetting.lockChildren,onResizeStart:this.handleResizeStart,onResizing:this.handleResizing,onResizeEnd:this.handleResizeEnd,onMoveByKey:this.handleMoveItemByKey,isInSection:this.props.isInSection})}render(){const{layout:t,className:o,style:a,layouts:l,isPageItem:r,mainSizeMode:d,browserSizeMode:u}=this.props;return null==t?null:(0,e.jsx)(s.PageContext.Consumer,null,(s=>{var c,p;this.pageContext=s;let h=t;const g=l[u]!==t.id;g&&null!=this.layoutTransform&&(h=this.layoutTransform(t,d,u)),this.layoutSetting=e.lodash.assign({},n,g?{}:t.setting);const m=null!==(c=h.order)&&void 0!==c?c:[],f=(0,e.classNames)("layout fixed-layout",o,{[Tt]:null===(p=t.setting)||void 0===p?void 0:p.lockDescendants}),y=0!==this.state.dh||0!==this.state.dw,v=Object.assign(Object.assign(Object.assign({height:"auto",position:"relative"},a),i.styleUtils.toCSSStyle(this.layoutSetting.style)),{width:"100%",overflow:"hidden"}),I={display:this.state.isDragover||y?"block":"none",zIndex:m.length+1},x=!this.state.isLoadingTemplate&&0===m.length&&!s.viewOnly&&t.id===s.rootLayoutId;return(0,e.jsx)("div",{className:f,ref:t=>this.ref=t,onClick:this.handleActivate,onMouseDown:this.handleMouseDown,style:v,"data-layoutid":h.id},(0,e.jsx)(e.IntersectionContext.Provider,{value:{monitor:!1}},(0,e.jsx)(e.OneByOneAnimation,{oid:h.id,"data-layoutid":h.id,className:"trail-container",css:e.css`
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: 0;
                    bottom: 0;
                  `},(0,e.jsx)(De,{css:Xi,layouts:this.props.layouts,highlightDragover:!r,onDragEnter:this.handleDragEnter,onDragLeave:this.handleDragLeave,onDragOver:this.handleDragOver,onDrop:this.handleDrop,onToggleDragoverEffect:this.handleToggleDragoverEffect,isRepeat:this.props.isRepeat}),m.map(((t,e)=>this.createItem(h,t,e))))),x&&(0,e.jsx)(Ui,{pageContext:this.pageContext,onPageTemplateSelected:this.handlePageTemplateSelected}),this.state.isLoadingTemplate&&(0,e.jsx)(i.Loading,{type:i.LoadingType.Primary}),(0,e.jsx)("canvas",{css:qi,style:I,ref:t=>this.canvasRef=t}))}))}}Ji.displayName="FixedLayout";const Qi=e.ReactRedux.connect(s.utils.mapStateToLayoutProps)(Ji),Ki={min:16,space:10};class tn extends e.React.PureComponent{constructor(){super(...arguments),this.state={isResizing:!1,dw:0,dh:0},this.onResizeStart=(t,e,o)=>{this.initWidth=e,this.initHeight=o,this.props.onResizeStart(t),this.setState({isResizing:!0})},this.onResizing=(t,e,o,i,n)=>{this.props.onResizing(t,e,o,i,n),this.setState({dw:i,dh:n,isResizing:!0})},this.onResizeEnd=(t,e,o,i,n,a)=>{const{layoutItem:s}=this.props;this.props.onResizeEnd(t,e,o,i,n,s),this.setState({isResizing:!1,dw:0,dh:0})}}isStretchInCrossAxis(){const{layoutItem:t}=this.props;return function(t){var e,o;return(null===(o=null===(e=t.setting)||void 0===e?void 0:e.autoProps)||void 0===o?void 0:o.width)!==C.Custom}(t)}calHeight(t,e){return function(t,e){var o,i;return(null===(o=t.autoProps)||void 0===o?void 0:o.height)===C.Auto||"ratio"===t.heightMode?"ratio"===t.heightMode?{height:"auto",flex:"0 0 auto"}:{height:"auto"}:(null===(i=t.autoProps)||void 0===i?void 0:i.height)===C.Stretch||"fit"===t.heightMode?{flex:"1 1 auto"}:{height:e.height,flexShrink:0}}(t,e)}getStyle(t,o){const{index:i,layoutItem:n,space:a}=this.props,{dw:s,dh:l,isResizing:r}=this.state,d=n.bbox||{},u=this.calHeight(t,d);return u.width=o?"auto":d.width,r&&(s||l)&&(u.height=this.initHeight+l,u.width=this.initWidth+s),this.autoHeight="auto"===u.height,function(t,o,i,n,a){var s,l,r;const d=(null===(s=n.autoProps)||void 0===s?void 0:s.height)===C.Auto;return e.css`
    margin-top: ${t>0?`${o}px`:"unset"};
    align-self: ${a?"stretch":null!==(r=null===(l=n.style)||void 0===l?void 0:l.alignSelf)&&void 0!==r?r:"auto"};
    width: ${j(i,"width")};
    height: ${j(i,"height")};
    flex: ${i.flex};
    flex-shrink: ${i.flexShrink};
    min-height: ${d?"unset":null};
  `}(i,a,u,t,o)}render(){var t,o;const{layoutId:i,layoutItem:n,draggable:a,resizable:s,selectable:l,showDefaultTools:r}=this.props;if(!n||n.isPending)return null;const d=n.setting||{},u=null!==(o=null===(t=d.autoProps)||void 0===t?void 0:t.height)&&void 0!==o?o:C.Custom,c=(0,e.classNames)("flexbox-layout-item",{"d-flex":u!==C.Auto}),p=this.isStretchInCrossAxis(),h="ratio"===d.heightMode,g=function(t){let e=100,o=100;if("number"==typeof t)e=100,o=Math.round(100*t);else if("string"==typeof t){const i=t.split(":");e=parseInt(i[0],10),o=parseInt(i[1],10)}return o/e}(d.aspectRatio),m=function(t){const{delay:e,isLastChild:o}=t;return{delay:e,isLastChild:o}}(this.props);return(0,e.jsx)(xo,Object.assign({css:this.getStyle(d,p),layoutId:i,layoutItemId:n.id,onResizeStart:this.onResizeStart,onResizing:this.onResizing,onResizeEnd:this.onResizeEnd,left:!p,right:!p,top:!1,bottom:u===C.Custom&&!h,draggable:a,resizable:s,selectable:l,showDefaultTools:r,onClick:this.props.onClick,className:c,forceAspectRatio:h,aspectRatio:g,autoHeight:this.autoHeight},m))}}const en=t=>e.css`
  height: 100%;
  overflow-x: hidden;
  justify-content: ${t.justifyContent};
  overflow-y: auto !important;
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */
  &::-webkit-scrollbar {
    display: none;  /* Safari and Chrome */
  }
  &:hover {
    -ms-overflow-style: auto;  /* Internet Explorer 10+ */
    scrollbar-width: auto;  /* Firefox */
    &::-webkit-scrollbar {
      display: block;  /* Safari and Chrome */
    }
  }
`,on=e.css`
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  background: transparent;
`,nn=e.css`
  ${on};
  z-index: 20;
  pointer-events: none;
`;class an extends e.React.PureComponent{constructor(t){super(t),this.state={isDragover:!1},this.handleItemResizing=()=>{},s.utils.autoBindHandlers(this,["handleItemResizeStart","handleItemResizing","handleItemResizeEnd","handleDrop","handleDragOver","handleDragEnter","handleDragLeave","handleToggleDragoverEffect"])}componentDidMount(){this.canvasPane=new Yi(this.canvasRef),this.canvasPane.setSize(this.ref.clientWidth,this.ref.clientHeight)}componentDidUpdate(){this.canvasPane.setSize(this.ref.clientWidth,this.ref.clientHeight)}handleItemResizeStart(t){const{layout:e}=this.props;this.domRect=this.ref.getBoundingClientRect();const o=this.ref.querySelector(`div.exb-rnd[data-layoutid="${e.id}"][data-layoutitemid="${t}"]`).getBoundingClientRect();this.resizingRect=s.utils.relativeClientRect(o,this.domRect)}handleItemResizeEnd(t,e,i,n,a,l){const{layout:r}=this.props,d=r.content[t].bbox;let u;u=s.utils.isPercentage(d.width)?`${(100*(this.resizingRect.width+n)/this.domRect.width).toFixed(4)}%`:`${Math.round(this.resizingRect.width+n)}px`;const c={width:u,height:Math.round(this.resizingRect.height+a)};this.childRects=[],this.domRect=null,(0,o.getAppConfigAction)().editLayoutItemBBox({layoutId:this.props.layout.id,layoutItemId:t},c).exec()}handleDragOver(t,o,i,n){var a;let s=n;if(this.canvasPane.clear(),(null===(a=this.childRects)||void 0===a?void 0:a.length)>0){const{insertY:t,refId:e}=function(t,e,o){const i=e.top+e.height/2;let n,a,s=!1;if(o.some(((t,e)=>{if(t.top+t.height/2>i){if(0===e)n=t.top/2;else{const i=o[e-1];n=(t.top+i.top+i.height)/2}s=!0,a=t.id}return s})),!s){const e=o[o.length-1];n=(e.top+e.height+t.height)/2}return{refId:a,insertY:n}}(i,s,this.childRects);this.referenceId=e,s={top:t-5+this.ref.scrollTop,width:i.width-10,left:5,height:10}}else s={top:i.height/2-5,width:i.width-10,left:5,height:10};this.canvasPane.setColor(e.polished.rgba(this.builderTheme.colors.palette.primary[700],1)),this.canvasPane.drawRect(s)}handleToggleDragoverEffect(t){t&&(this.referenceId=null,this.collectBounds(null)),this.setState({isDragover:t})}handleDragEnter(){}handleDragLeave(){}handleDrop(t,i,n){this.canvasPane.clear();const{layout:a}=this.props,s={layoutId:a.id};let l=0;null!=this.referenceId?l=a.order.indexOf(this.referenceId):null!=a.order&&(l=a.order.length),V((0,o.getAppConfigAction)().appConfig,t,s,i,n,l).then((t=>{const{layoutInfo:o,updatedAppConfig:i}=t,{layoutId:n,layoutItemId:a}=o;let s=i.layouts[n].content[a].bbox;s=s.without("left").without("top").without("right").without("bottom");const l=i.setIn(["layouts",n,"content",a,"bbox"],s);(0,e.getAppStore)().dispatch(e.appActions.layoutChanged(l,o))})).finally(null),this.referenceId=null,this.childRects=[]}collectBounds(t){const{layout:e}=this.props;this.childRects=[],this.domRect=this.ref.getBoundingClientRect();const o=this.ref.parentNode.querySelectorAll(`div[data-layoutid="${e.id}"] > .trail-container > div.exb-rnd`);return(null==o?void 0:o.length)>0&&o.forEach((o=>{const i=o.getAttribute("data-layoutitemid");if(t!==i&&e.order.includes(i)){const t=s.utils.relativeClientRect(o.getBoundingClientRect(),this.domRect);t.id=i,this.childRects.push(t)}})),this.childRects.sort(((t,e)=>t.top-e.top))}createItem(t,o,i){const{layout:n,itemDraggable:a,itemResizable:s,itemSelectable:l,showDefaultTools:r}=this.props;return(0,e.jsx)(tn,{key:t,index:o,space:i.space,layoutId:n.id,layoutItemId:t,layoutItem:n.content[t],draggable:a,resizable:s,selectable:l,showDefaultTools:r,onResizeStart:this.handleItemResizeStart,onResizing:this.handleItemResizing,onResizeEnd:this.handleItemResizeEnd})}isEmpty(){var t;const{layout:e}=this.props,o=null!==(t=e.order)&&void 0!==t?t:[];return!(o.length>0&&o.some((t=>!e.content[t].isPending)))}render(){var t;const{layout:o,className:n}=this.props,a=null!==(t=o.order)&&void 0!==t?t:[],l=Object.assign({},Ki,o.setting),r=this.isEmpty();return(0,e.jsx)(s.PageContext.Consumer,null,(t=>{this.builderTheme=t.builderTheme,this.theme=t.theme;const s={position:"relative",minWidth:l.min,padding:i.styleUtils.toCSSPadding(l.padding)},d=(0,e.classNames)("layout column-layout",n),u={display:this.state.isDragover?"block":"none"};return(0,e.jsx)("div",{className:d,ref:t=>this.ref=t,style:s,"data-layoutid":o.id},(0,e.jsx)(e.IntersectionContext.Provider,{value:{monitor:!0,layoutId:o.id}},(0,e.jsx)(e.OneByOneAnimation,{oid:o.id,className:"trail-container d-flex flex-column w-100",css:e.css`
                    position: ${r?"absolute":null};
                    ${en(l)};
                  `},(0,e.jsx)(De,{css:on,layouts:this.props.layouts,highlightDragover:!0,onDragEnter:this.handleDragEnter,onDragLeave:this.handleDragLeave,onDragOver:this.handleDragOver,onDrop:this.handleDrop,onToggleDragoverEffect:this.handleToggleDragoverEffect}),a.map(((t,e)=>this.createItem(t,e,l))))),r&&this.props.children,(0,e.jsx)("canvas",{css:nn,style:u,ref:t=>this.canvasRef=t}))}))}}const sn=e.ReactRedux.connect(s.utils.mapStateToLayoutProps)(an),ln={space:10,style:{padding:{number:[10,10,10,10],unit:i.DistanceUnits.PIXEL}}},rn={heightMode:"fixed",aspectRatio:1,offsetX:0,offsetY:0,style:{alignSelf:"flex-start"}},dn=2,un=12,cn=e.css`
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
`;function pn(t){return(0,e.Immutable)(t).set("left",un-parseInt(t.left,10)-parseInt(t.width,10))}const hn=e.css`
  position: absolute;
  left: 0;
  max-height: 40px;
  height: 20%;
  right: 0;
  z-index: ${s.LayoutZIndex.BoundaryDropArea};
  display: flex;
  pointer-events: all;
  display: flex;

  &.drop-active {
    background: transparent !important;
  }

  body:not(.design-mode) & {
    display: none !important;
  }
`,gn=e.css`
  ${hn};
  top: 0;
`,mn=e.css`
  ${hn};
  bottom: 0;
`;class fn extends e.React.PureComponent{constructor(t){super(t),this.state={isResizing:!1,dh:0},this.handleResizeStart=(t,e,o)=>{this.initWidth=e,this.initHeight=o,this.props.onResizeStart(t),this.setState({isResizing:!0})},this.handleResizing=(t,e,o,i,n)=>{this.props.onResizing(t,e,o,i,n),this.setState({dh:n,isResizing:!0})},this.handleResizeEnd=(t,e,o,i,n,a)=>{const{layoutItem:s}=this.props;this.props.onResizeEnd(t,e,o,i,n,s),this.setState({isResizing:!1,dh:0})},this.handleDropAtTop=(t,e,o)=>{this.dropAtBoundary(t,e,o,"top")},this.handleDropAtBottom=(t,e,o)=>{this.dropAtBoundary(t,e,o,"bottom")},this.dropAtBoundary=(t,e,i,n)=>{let a=(0,o.getAppConfigAction)();G(a.appConfig,t,e,i,{layoutId:this.props.layoutId,layoutItemId:this.props.layoutItemId},n).then((({updatedAppConfig:t})=>{a=(0,o.getAppConfigAction)(t),a.exec()})).finally(null)},this.pasteAtBoundary=(t,e,i,n)=>{let a=(0,o.getAppConfigAction)();const{layoutId:s,layoutItemId:l}=t.layoutInfo,r=a.duplicateLayoutItem(s,s,l,!0);a.clearParentOfContent(r,!0),a.setParentOfContent(r,!0);const d={layoutInfo:r};G(a.appConfig,d,e,i,{layoutId:this.props.layoutId,layoutItemId:this.props.layoutItemId},n).then((({updatedAppConfig:t})=>{a=(0,o.getAppConfigAction)(t),a.exec()})).finally(null)},this.fakeTopLayouts=(0,e.Immutable)({[e.BrowserSizeMode.Large]:`${this.props.layoutId}_${this.props.layoutItemId}_tlarge`,[e.BrowserSizeMode.Medium]:`${this.props.layoutId}_${this.props.layoutItemId}_tmedium`,[e.BrowserSizeMode.Small]:`${this.props.layoutId}_${this.props.layoutItemId}_tsmall`}),this.fakeBottomLayouts=(0,e.Immutable)({[e.BrowserSizeMode.Large]:`${this.props.layoutId}_${this.props.layoutItemId}_blarge`,[e.BrowserSizeMode.Medium]:`${this.props.layoutId}_${this.props.layoutItemId}_bmedium`,[e.BrowserSizeMode.Small]:`${this.props.layoutId}_${this.props.layoutItemId}_bsmall`})}isFunctionalWidget(){var t,o,i;const{layoutItem:n}=this.props;if(n.type===e.LayoutItemType.Widget){let a=!1;const s=null===(o=null===(t=(0,e.getAppStore)().getState().appConfig)||void 0===t?void 0:t.widgets)||void 0===o?void 0:o[n.widgetId];return null!=(null===(i=null==s?void 0:s.manifest)||void 0===i?void 0:i.properties)&&(a=s.manifest.widgetType===e.WidgetType.Layout||s.manifest.properties.hasEmbeddedLayout),!a}return!1}getStyle(t){const{gutter:o,layoutItem:i,isMultiRow:n}=this.props,{dh:a,isResizing:l}=this.state,r=i.bbox,d=s.utils.isRTL()?-1:1,u=function(t,e,o){var i,n,a,s,l,r,d,u,c,p,h,g,m,f;return o?{height:(null===(i=t.autoProps)||void 0===i?void 0:i.height)===C.Auto?"auto":e.height,alignSelf:null!==(a=null===(n=t.style)||void 0===n?void 0:n.alignSelf)&&void 0!==a?a:"flex-start"}:"ratio"===t.heightMode?{alignSelf:null!==(l=null===(s=t.style)||void 0===s?void 0:s.alignSelf)&&void 0!==l?l:"flex-start"}:(null===(r=t.autoProps)||void 0===r?void 0:r.height)===C.Auto?{height:"auto",alignSelf:null!==(u=null===(d=t.style)||void 0===d?void 0:d.alignSelf)&&void 0!==u?u:"flex-start"}:(null===(c=t.autoProps)||void 0===c?void 0:c.height)===C.Custom?{height:e.height,alignSelf:null!==(h=null===(p=t.style)||void 0===p?void 0:p.alignSelf)&&void 0!==h?h:"flex-start"}:(null===(g=t.autoProps)||void 0===g?void 0:g.height)===C.Stretch||"fit"===t.heightMode?{alignSelf:"stretch"}:parseFloat(e.height)>0?{height:e.height,alignSelf:null!==(f=null===(m=t.style)||void 0===m?void 0:m.alignSelf)&&void 0!==f?f:"flex-start"}:{alignSelf:"stretch"}}(t,r,n);return l&&0!==a&&(u.height=this.initHeight+a),function(t,o,i,n,a){var s,l,r,d;return t?[e.css`
        padding: ${i/2}px 0;
        height: ${j(n,"height")};
        align-self: ${n.alignSelf};
      `,0!==a.offsetX||0!==a.offsetY?`translate(${(null!==(s=a.offsetX)&&void 0!==s?s:0)*o}px, ${null!==(l=a.offsetY)&&void 0!==l?l:0}px)`:null]:[e.css`
      padding: 0 ${i/2}px;
      height: ${j(n,"height")};
      align-self: ${n.alignSelf};
    `,0!==a.offsetX||0!==a.offsetY?`translate(${(null!==(r=a.offsetX)&&void 0!==r?r:0)*o}px, ${null!==(d=a.offsetY)&&void 0!==d?d:0}px)`:null]}(n,d,o,u,t)}render(){var t;const{order:o,span:i,offset:n,layoutId:a,layoutItem:l,draggable:r,resizable:d,selectable:u}=this.props;if(null==l||l.isPending)return null;const c=e.lodash.assign({},rn,l.setting),p="ratio"===c.heightMode,h=null===(t=c.autoProps)||void 0===t?void 0:t.height,g=(0,e.classNames)("row-layout-item d-flex",`col-${i}`,`offset-${n}`,`order-${o}`,{"fix-height":h===s.LayoutItemSizeModes.Custom}),m=this.isFunctionalWidget(),f=e.css`
      width: 100%;
      height: 10px;
      background: ${this.props.builderTheme.colors.palette.primary[700]};
    `,y=s.utils.parseAspectRatio(c.aspectRatio),v=s.utils.handleOnebyOneAnimation(this.props),[I,x]=this.getStyle(c);return(0,e.jsx)(xo,Object.assign({css:I,style:{transform:x},layoutId:a,layoutItemId:l.id,onResizeStart:this.handleResizeStart,onResizing:this.handleResizing,onResizeEnd:this.handleResizeEnd,left:!0,right:!0,top:!1,bottom:h===s.LayoutItemSizeModes.Custom&&!p,draggable:r,resizable:d,selectable:u,onClick:this.props.onClick,className:g,forceAspectRatio:p,aspectRatio:y,autoHeight:h===s.LayoutItemSizeModes.Auto},v),(0,e.jsx)(e.React.Fragment,null,m&&(0,e.jsx)(De,{css:e.css`
                ${gn};
              `,layouts:this.fakeTopLayouts,highlightDragover:!0,onDrop:this.handleDropAtTop},(0,e.jsx)("div",{css:f})),m&&(0,e.jsx)(De,{css:e.css`
                ${mn};
              `,layouts:this.fakeBottomLayouts,highlightDragover:!0,onDrop:this.handleDropAtBottom},(0,e.jsx)("div",{css:e.css`${f};position: absolute; bottom:0;`}))))}}function yn(t,e){let o=-1;return e.some(((e,i)=>{if(e.id===t)return o=i,!0})),o}function vn(t,o,i,n){const a=n.map((t=>(0,e.Immutable)(t))),l=yn(t,a);if(s.utils.isRTL()&&(o=0!==o?0:-i),o>0){const t=a[l],e=Math.min(o,t.width-1);return a[l]=t.set("left",t.left+e).set("width",t.width-e),a}if(o<0){let t=0;for(let e=0;e<l;e+=1)t+=Math.min(a[e].width,dn);const e=a[l].left-t,i=Math.abs(o);if(e>0){let t=0;for(let e=l;e>=0;e-=1){const o=a[e];let n=0;if(e>0){const t=a[e-1];n=o.left-(t.left+t.width)}else n=o.left;if(0===n)continue;const s=t+n>=i?i-t:n;a[l]=a[l].set("width",a[l].width+s);for(let t=e;t<=l;t+=1)a[t]=a[t].set("left",a[t].left-s);if(t+n>=i)return a;t+=n}if(l>0)for(let e=l-1;e>=0;e-=1){const o=a[e],n=o.width-dn;if(n<=0)continue;const s=t+n>=i?i-t:n;a[l]=a[l].set("width",a[l].width+s),a[e]=o.set("width",o.width-s);for(let t=e+1;t<=l;t+=1)a[t]=a[t].set("left",a[t].left-s);if(t+n>=i)return a;t+=n}}return a}if(i<0){const t=Math.min(Math.abs(i),a[l].width-1);return a[l]=a[l].set("width",a[l].width-t),a}if(i>0){let t=0;for(let e=l+1;e<a.length;e+=1)t+=Math.min(a[e].width,dn);const e=i;if(un-(a[l].left+a[l].width)-t>0){let t=0;for(let o=l;o<a.length;o+=1){const i=a[o];let n=0;if(n=o!==a.length-1?a[o+1].left-(i.left+i.width):un-(i.left+i.width),0===n)continue;const s=t+n>=e?e-t:n;a[l]=a[l].set("width",a[l].width+s);for(let t=l+1;t<=o;t+=1)a[t]=a[t].set("left",a[t].left+s);if(t+n>=e)return a;t+=n}if(l!==a.length-1)for(let o=l+1;o<a.length;o+=1){const i=a[o],n=i.width-dn;if(n<=0)continue;const s=t+n>=e?e-t:n;a[l]=a[l].set("width",a[l].width+s),a[o]=i.set("width",i.width-s);for(let t=l+1;t<=o;t+=1)a[t]=a[t].set("left",a[t].left+s);if(t+n>=e)return a;t+=n}}return a}return a}function In(t,o,i){const n=i.map((t=>(0,e.Immutable)(t))),a=yn(t,n),s=n[a];return n.splice(a,1),xn(s,o,n)}function xn(t,o,i){const n=i.map((t=>(0,e.Immutable)(t)));let a=(0,e.Immutable)(t);const s=Math.max(o,0);if(a=a.set("left",s),null==n||0===n.length)return a=a.set("width",Math.min(a.width,un-a.left)),[a];let l,r=n.length;const d=()=>{if(0===r)u=n[r].left,l=u;else{const t=n[r-1];u=r<n.length?n[r].left-(t.left+t.width):un-(t.left+t.width),l=t.left+t.width+u}};n.some(((t,e)=>{if(s<=t.left)return r=e,!0}));let u=r<n.length?n[r].left-s:un-s;if(u>=a.width)return n.splice(r,0,a),n;const c=u;if(d(),u>=a.width)return a=a.set("left",l-a.width),n.splice(r,0,a),n;u=c;for(let t=r;t<n.length;t+=1){const e=n[t];let o=0;if(o=t!==n.length-1?n[t+1].left-(e.left+e.width):un-(e.left+e.width),0===o)continue;const i=u+o>=a.width?a.width-u:o;for(let e=r;e<=t;e+=1)n[e]=n[e].set("left",n[e].left+i);if(u+o>=a.width)return n.splice(r,0,a),n;u+=o}if(d(),u>=a.width)return a=a.set("left",l-a.width),n.splice(r,0,a),n;for(let t=r-1;t>=0;t-=1){const e=n[t];let o=0;if(t>0){const i=n[t-1];o=e.left-(i.left+i.width)}else o=e.left;if(0===o)continue;const i=u+o>=a.width?a.width-u:o;for(let e=t;e<=r-1;e+=1)n[e]=n[e].set("left",n[e].left-i);if(u+o>=a.width)return a=a.set("left",l-a.width),n.splice(r,0,a),n;u+=o}if(d(),u>=dn)return a=a.set("left",l-u).set("width",u),n.splice(r,0,a),n;if(r!==n.length)for(let t=r;t<n.length;t+=1){const e=n[t],o=e.width-dn;if(o<=0)continue;const i=u+o>=dn?dn-u:o;n[t]=e.set("width",e.width-i);for(let e=r;e<=t;e+=1)n[e]=n[e].set("left",n[e].left+i);if(u+o>=dn)return a=a.set("left",n[r].left-dn).set("width",dn),n.splice(r,0,a),n;u+=o}if(d(),u>=dn)return a=a.set("left",l-u).set("width",u),n.splice(r,0,a),n;for(let t=r-1;t>=0;t-=1){const e=n[t],o=e.width-dn;if(o<=0)continue;const i=u+o>=dn?dn-u:o;n[t]=e.set("width",e.width-i);for(let e=t+1;e<=r-1;e+=1)n[e]=n[e].set("left",n[e].left-i);if(u+o>=dn)return a=a.set("left",l-dn).set("width",dn),n.splice(r,0,a),n;u+=o}return n}function bn(t){const{builderTheme:o,visible:i,gutter:n=0}=t;return(0,e.jsx)("div",{css:e.css`
        pointer-events: none;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0px;
        position: absolute;
        z-index: 1;
        display: ${i?"flex":"none"};
      `},[0,1,2,3,4,5,6,7,8,9,10,11].map((t=>(0,e.jsx)("div",{key:t,css:e.css`
              width: 8.333333%;
            `},(0,e.jsx)("div",{css:e.css`
                padding-left: ${n/2}px;
                padding-right: ${n/2}px;
                height: 100%;
                width: 100%;
                overflow: hidden;
              `},(0,e.jsx)("div",{css:e.css`
                  transform: translateY(-5%);
                  border: 1px dashed ${e.polished.rgba(o.colors.palette.dark[300],.6)};
                  height: 110%;
                  width: 100%;
                `}))))))}const wn=e.css`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`,Sn=e.css`
  ${wn};
  bottom: 0;
  top: 0;
  z-index: ${s.LayoutZIndex.DragMoveTip};
  pointer-events: none;
`;class Cn extends e.React.PureComponent{constructor(t){super(t),this.state={isResizing:!1,updatingRects:null,isDragoverCenter:!1},s.utils.autoBindHandlers(this,["handleItemResizeStart","handleItemResizing","handleItemResizeEnd","handleDrop","handleDragOver","handleDragEnter","handleDragLeave","handleToggleDragoverCenterEffect"]),this.flipLeftRight=s.utils.isRTL()}componentDidMount(){this.canvasPane=new Yi(this.guideDragOverRef)}handleItemResizeStart(t){this.domRect=this.ref.getBoundingClientRect(),this.setState({isResizing:!0})}handleItemResizing(t,e,o,i,n){const a=this.domRect.width/un,s=vn(t,Math.round(e/a),Math.round(i/a),this.childRects);this.setState({updatingRects:s})}handleItemResizeEnd(t,e,i,n,a,l){const{layout:r}=this.props,d=this.domRect.width/un,u=Math.round(e/d),c=Math.round(n/d),p=(0,o.getAppConfigAction)();vn(t,u,c,this.childRects).forEach((e=>{const o=r.content[e.id].bbox;let i=o.height;e.id===t&&(i=s.utils.isPercentage(o.height)?`${(parseFloat(e.height)+100*a/this.domRect.height).toFixed(4)}%`:`${Math.round(parseFloat(e.height)+a)}px`);const n={left:e.left,width:e.width,height:i};p.editLayoutItemBBox({layoutId:r.id,layoutItemId:e.id},n)})),p.exec(),this.setState({isResizing:!1,updatingRects:null})}handleToggleDragoverCenterEffect(t){this.referenceId=null,t&&this.collectBounds(),this.setState({isDragoverCenter:t})}handleDragOver(t,e,o,i,n,a){var s;const l=null!==(s=t.layoutInfo)&&void 0!==s?s:{layoutId:null},r=this.reCalculateRects(t,o,i,n);let d;r.some((t=>{if(null==t.id||t.layoutId===l.layoutId&&t.id===l.layoutItemId)return d=t,!0}));let u=!0,c=d.left;if(this.flippedChildRects.some((t=>{if((t.layoutId!==d.layoutId||t.id!==d.id)&&(t.left<=d.left&&t.left+t.width>d.left&&(u=!1),!u)){const e=r.find((e=>e.layoutId===t.layoutId&&e.id===t.id));return c=e.left+e.width<=d.left?t.left+t.width:t.left,!0}})),this.dragInsertPos=c,this.canvasPane.clear(),u)this.canvasPane.drawRect({left:c*this.colWidth+this.space/2,top:0,width:d.width*this.colWidth-this.space,height:i.height});else{const t=Math.min(o.width-this.space/2,Math.max(0,c*this.colWidth-this.space/2));this.canvasPane.drawRect({left:t,top:0,width:10,height:o.height})}}handleDragEnter(){this.canvasPane.setSize(this.ref.clientWidth,this.ref.clientHeight),this.canvasPane.setColor(e.polished.rgba(this.builderTheme.colors.palette.primary[700],.5))}handleDragLeave(){this.canvasPane.clear()}getConfig(){var t;const{layout:e}=this.props;return null!==(t=e.setting)&&void 0!==t?t:ln}reCalculateRects(t,e,o,i){var n,a;const s=null!==(n=t.layoutInfo)&&void 0!==n?n:{layoutId:null},{layout:l}=this.props,r=this.getConfig();this.space=null!==(a=r.space)&&void 0!==a?a:0;const d=this.maxPageWidth>0?Math.min(this.maxPageWidth,e.width):e.width,u=i-(e.width-d)/2,c=o.left-(e.width-d)/2;this.colWidth=d/un;const p=Math.round(u/this.colWidth),h=Math.round(c/this.colWidth),g=Math.max(1,Math.ceil(o.width/this.colWidth)),m=function(t,e,o,i,n,a){var s;let l;const r=null!==(s=e.layoutInfo)&&void 0!==s?s:{layoutId:null},d=r.layoutId===t;return a.some((t=>(!d||t.id!==r.layoutItemId)&&(t.left>=o&&t.left<o+i||o>=t.left&&o<t.left+t.width)))?(a.some(((t,e)=>{if(d&&t.id===r.layoutItemId)return!1;if(n>=t.left&&n<=t.left+t.width)return n>=t.left&&n<t.left+t.width/2?(l=t.left,!0):(l=t.left+t.width,!0);if(o<t.left&&o+i>t.left){let o=0;if(0===e)o=t.left;else{let i;for(let t=e-1;t>=0&&(i=a[t],d&&i.id===r.layoutItemId);t-=1);o=null!=i?t.left-(i.left+i.width):t.left}return l=o>=i?t.left-i:t.left-o,!0}return o>t.left&&o<t.left+t.width?(l=t.left+t.width,!0):void 0})),l):o}(l.id,t,h,g,p,this.flippedChildRects);return null==t.id&&this.isInRow(s)?In(s.layoutItemId,m,this.flippedChildRects):xn({width:g,height:o.height,layoutId:s.layoutId,id:s.layoutItemId},m,this.flippedChildRects)}handleDrop(t,i,n){const{layout:a}=this.props;let l=(0,o.getAppConfigAction)();const{addedItemRect:r,insertIndex:d,appConfig:u}=this.calDropPosition(l.appConfig,t,i,n,!1);null!=r?V(u,t,{layoutId:a.id},i,r,d).then((i=>{var n,r,d;const{layoutInfo:u,updatedAppConfig:c}=i,{layoutId:p,layoutItemId:h}=u;if(l=(0,o.getAppConfigAction)(c),(null===(n=t.layoutInfo)||void 0===n?void 0:n.layoutId)!==a.id){let t=null!==(r=c.layouts[p].content[h].setting)&&void 0!==r?r:(0,e.Immutable)({});(null===(d=t.autoProps)||void 0===d?void 0:d.height)||(t=t.setIn(["autoProps","height"],s.LayoutItemSizeModes.Stretch)),l.editLayoutItemSetting(u,t)}let g=c.layouts[p].content[h].bbox;g=g.without("top").without("right").without("bottom"),l.editLayoutItemBBox(u,g),(0,e.getAppStore)().dispatch(e.appActions.layoutChanged(l.appConfig,u))})).finally(null):(0,e.getAppStore)().dispatch(e.appActions.layoutChanged(u,t.layoutInfo)),this.canvasPane.clear()}calDropPosition(t,e,i,n,a){var s;const l=this.maxPageWidth>0?Math.min(this.maxPageWidth,i.width):i.width,r=null!==(s=e.layoutInfo)&&void 0!==s?s:{layoutId:null},{layout:d}=this.props,u=l/un,c=this.dragInsertPos,p=Math.max(1,Math.ceil(n.width/u)),h=(0,o.getAppConfigAction)(t);let g,m,f;return g=!a&&null==e.id&&this.isInRow(r)?In(r.layoutItemId,c,this.flippedChildRects):xn({width:p,height:n.height,layoutId:r.layoutId,id:r.layoutItemId},c,this.flippedChildRects),g.forEach(((t,o)=>{var i;let n={left:t.left,width:t.width,height:t.height};this.flipLeftRight&&(n=pn(n)),t.layoutId===d.id?(h.editLayoutItemBBox({layoutId:t.layoutId,layoutItemId:t.id},n),t.id===(null===(i=e.layoutInfo)||void 0===i?void 0:i.layoutItemId)&&null!=e.id&&h.setLayoutItemToPending({layoutId:t.layoutId,layoutItemId:t.id},!1)):(m=n,f=0+o)})),{addedItemRect:m,insertIndex:f,appConfig:h.appConfig}}isInRow(t){const{layout:e}=this.props;return(null==t?void 0:t.layoutId)===e.id}collectBounds(){var t;const{transformedLayout:e}=this.props,o=null!==(t=e.order)&&void 0!==t?t:[];return this.childRects=[],o.forEach((t=>{var o,i;if(e.content[t].isPending)return;const n=null===(i=null===(o=e.content)||void 0===o?void 0:o[t])||void 0===i?void 0:i.bbox;null!=n&&this.childRects.push({layoutId:e.id,id:t,left:parseInt(n.left,10),width:parseInt(n.width,10),height:n.height})})),this.childRects.sort(((t,e)=>t.left-e.left)),this.flipLeftRight?(this.flippedChildRects=[],this.childRects.forEach((t=>{let e={left:t.left,width:t.width,height:t.height};e=pn(e),this.flippedChildRects.push({layoutId:t.layoutId,id:t.id,left:e.left,width:e.width,height:e.height})})),this.flippedChildRects.sort(((t,e)=>t.left-e.left))):this.flippedChildRects=this.childRects,this.childRects}createItem(t,o){var i;const{transformedLayout:n,itemDraggable:a,itemResizable:s,itemSelectable:l,isMultiRow:r}=this.props,d=this.getConfig(),u=t[o],c=null!==(i=d.space)&&void 0!==i?i:0;let p;if(0===o)p=u.left;else{const e=t[o-1];p=u.left-e.left-e.width}return(0,e.jsx)(fn,{key:`${u.layoutId}_${u.id}`,order:o+1,offset:p,span:u.width,gutter:c,isMultiRow:r,builderTheme:this.builderTheme,layoutId:n.id,layoutItemId:u.id,layoutItem:n.content[u.id],draggable:a,resizable:s,selectable:l,onResizeStart:this.handleItemResizeStart,onResizing:this.handleItemResizing,onResizeEnd:this.handleItemResizeEnd})}render(){var t;const{transformedLayout:o,className:i}=this.props,{isResizing:n,isDragoverCenter:a}=this.state,l=this.getConfig(),r=a;let d;n&&null!=this.state.updatingRects?d=this.state.updatingRects:(this.collectBounds(),d=this.childRects);const u=null!==(t=l.space)&&void 0!==t?t:0;return(0,e.jsx)(s.PageContext.Consumer,null,(t=>(this.maxPageWidth=t.maxWidth,this.builderTheme=t.builderTheme,(0,e.jsx)("div",{className:(0,e.classNames)("row-layout",i,{"row-rtl":this.flipLeftRight}),css:cn,"data-layoutid":o.id},(0,e.jsx)("div",{css:e.css`
                width: 100%;
                max-width: ${t.maxWidth>0?`${t.maxWidth}px`:"none"};
              `},(0,e.jsx)("div",{ref:t=>this.ref=t,css:e.css`
                    position: relative;
                    height: 100%;
                    margin-left: ${-u/2}px;
                    margin-right: ${-u/2}px;
                    display: flex;
                    flex-direction: column;
                    .row {
                      overflow: ${this.props.isMultiRow?"auto":"unset"};
                    }
                    & > .jimu-widget-placeholder {
                      width: calc(100% - ${u}px);
                      align-self: center;
                    }
                  `},(0,e.jsx)(e.IntersectionContext.Provider,{value:{monitor:!1}},(0,e.jsx)(e.OneByOneAnimation,{className:(0,e.classNames)("row m-0",{"flex-nowrap":!this.props.isMultiRow,"h-100":d.length>0}),oid:o.id,"data-layoutid":o.id},(0,e.jsx)(De,{css:wn,layouts:this.props.layouts,highlightDragover:!1,onDragEnter:this.handleDragEnter,onDragLeave:this.handleDragLeave,onDragOver:this.handleDragOver,onDrop:this.handleDrop,onToggleDragoverEffect:this.handleToggleDragoverCenterEffect}),d.map(((t,e)=>this.createItem(d,e))))),0===d.length&&this.props.children,(0,e.jsx)(bn,{visible:r||n,builderTheme:t.builderTheme,gutter:u}),(0,e.jsx)("canvas",{css:e.css`
                      ${Sn};
                      display: ${r?"block":"none"};
                    `,ref:t=>this.guideDragOverRef=t})))))))}}class Rn extends e.React.PureComponent{constructor(t){super(t),this.onResize=(t,e)=>{var o;if(this.props.browserSizeMode!==this.props.mainSizeMode)return;if(0===e)return;const{widgetId:i}=this.props;null!=(null===(o=window.runtimeInfo.widgets)||void 0===o?void 0:o[i])?window.runtimeInfo.widgets[i].height=e:window.runtimeInfo.widgets[i]={height:e}},this.handleDebounceResize=e.lodash.debounce(this.onResize,200)}findExtension(){const t=e.ExtensionManager.getInstance().getExtensions(`${e.extensionSpec.ExtensionPoints.LayoutTransformer}`);if((null==t?void 0:t.length)>0){const e=t.find((t=>"ROW"===t.layoutType));this.layoutTransform=null==e?void 0:e.transformLayout}}collectRowItems(){var t;const{layout:e,layouts:o,browserSizeMode:i,mainSizeMode:n}=this.props;null==this.layoutTransform&&this.findExtension();let a=e;o[i]!==e.id&&null!=this.layoutTransform&&(a=this.layoutTransform(e,n,i)),this.finalLayout=a;const s=null!==(t=a.order)&&void 0!==t?t:[],l=[];let r=[],d=0;return l.push(r),s.forEach((t=>{if(a.content[t].isPending)return;const e=a.content[t].bbox,o=parseInt(e.left,10),i=Math.floor(o/un);i>d&&(r=[],d=i,l.push(r)),r.push(t)})),l}createRow(){const{layout:t,layouts:o}=this.props;return(0,e.jsx)(Cn,{layouts:o,layout:t,transformedLayout:this.finalLayout,isMultiRow:this.numOfRows>1},this.props.children)}render(){var t;const{layout:o,className:n}=this.props,a=null!==(t=o.setting)&&void 0!==t?t:ln;return this.numOfRows=this.collectRowItems().length,(0,e.jsx)("div",{className:(0,e.classNames)("layout d-flex",n),css:e.css`
          width: 100%;
          padding: ${i.styleUtils.toCSSPadding(a.style.padding)};
        `,"data-layoutid":o.id},this.createRow(),(0,e.jsx)(e.ReactResizeDetector,{handleHeight:!0,onResize:this.handleDebounceResize}))}}const Tn=e.ReactRedux.connect(s.utils.mapStateToLayoutProps)(Rn);var An;function Mn(t,e){var o;return null===(o=t.content)||void 0===o?void 0:o[e]}function Pn(t,o){const i=Mn(t,o);if(null==i)return null;const{gridType:n=e.GridItemType.Plain,children:a}=i,s={layoutItemId:o,type:n};return(null==a?void 0:a.length)>0&&(s.children=[...a].map((e=>Pn(t,e)))),s}function Ln(t){var o;return t.type!==e.LayoutType.GridLayout?null:Pn(t,`${null===(o=t.setting)||void 0===o?void 0:o.rootItem}`)}function jn(t,o,i){var n,a,s,l,r,d,u;const{layoutId:c,layoutItemId:p}=o,h=t.layouts[c].content[p];if((null==h?void 0:h.type)===e.LayoutItemType.Widget){const e=t.widgets[h.widgetId];return e?null!==(a=null!==(n=null==e?void 0:e.label)&&void 0!==n?n:h.label)&&void 0!==a?a:h.id:i("placeholder")}return(null==h?void 0:h.type)===e.LayoutItemType.Section?t.sections[h.sectionId].label:(null==h?void 0:h.gridType)===e.GridItemType.Row?null!==(s=h.label)&&void 0!==s?s:i("gridRow"):(null==h?void 0:h.gridType)===e.GridItemType.Column?null!==(l=h.label)&&void 0!==l?l:i("gridCol"):(null==h?void 0:h.gridType)===e.GridItemType.Tab?null!==(r=h.label)&&void 0!==r?r:i("tabs"):null!==(u=null!==(d=null==h?void 0:h.label)&&void 0!==d?d:null==h?void 0:h.id)&&void 0!==u?u:""}function zn(t,e){const o={id:`${s.utils.getMaximumId(t)+1}`,gridType:e};return{outLayout:t.setIn(["content",o.id],o),outItem:o}}function kn(t,e,o){return t.setIn(["content",e,"bbox"],{width:o})}function Nn(t,e,o,i){return t.setIn(["content",e,o],i)}function $n(t,e,o,i,n){const a=Mn(t,o),s=[].concat(a.children),l=n?i:i+1;return s.splice(l,0,e),Nn(t,o,"children",s)}function On(t){const{layoutId:i,layoutItemId:n}=t,a=(0,o.getAppConfigAction)(),s=a.duplicateLayoutItem(i,i,n,!0);a.clearParentOfContent(s,!0),a.setParentOfContent(s,!0);let l=a.appConfig.layouts[i];const r=l.content[n];if(r.parent){const t=Mn(l,r.parent),o=[...t.children],i=o.indexOf(n);if(o.splice(i,0,s.layoutItemId),l=Nn(l,r.parent,"children",o),l=Nn(l,s.layoutItemId,"parent",r.parent),t.gridType===e.GridItemType.Tab)l=kn(l,s.layoutItemId,+r.bbox.width);else{const t=+r.bbox.width/2;l=kn(l,s.layoutItemId,t),l=kn(l,n,t)}}else l=Dn(l,s.layoutItemId,n,e.GridItemType.Row,!1,!1);const d=a.appConfig.setIn(["layouts",i],l);window.jimuConfig.isBuilder?((0,o.getAppConfigAction)(d).exec(),o.builderAppSync.publishChangeSelectionToApp(s)):(0,e.getAppStore)().dispatch(e.appActions.layoutChanged(d,s))}function En(t){let i=(0,o.getAppConfigAction)(),n=i.appConfig.layouts[t.layoutId];n=i.detachGridItem(n,t.layoutItemId);let a=i.appConfig.setIn(["layouts",t.layoutId],n);n.setting.rootItem===t.layoutItemId&&(a=a.setIn(["layouts",t.layoutId,"setting"],n.setting.without("rootItem"))),i=(0,o.getAppConfigAction)(a),i.setLayoutItemToPending(t,!0),window.jimuConfig.isBuilder?(i.exec(),o.builderAppSync.publishChangeSelectionToApp(null)):(0,e.getAppStore)().dispatch(e.appActions.layoutChanged(i.appConfig,null))}function Bn(t,o,i,n,a,s){const l=Mn(t,i),{parent:r}=l,d=+l.bbox.width,u=Mn(t,r),c=zn(t,n);let p=c.outLayout;const h=c.outItem;if(p=Nn(p,h.id,"parent",r),p=kn(p,h.id,d),u){const t=u.children.indexOf(i);p=function(t,e,o,i){const n=[...Mn(t,o).children];return n.splice(i,1,e),Nn(t,o,"children",n)}(p,h.id,r,t)}return p=Nn(p,o,"parent",h.id),p=Nn(p,i,"parent",h.id),p=kn(p,o,s?100:50),p=kn(p,i,s?100:50),p=Nn(p,h.id,"children",a?[o,i]:[i,o]),n===e.GridItemType.Tab&&(p=Nn(p,h.id,"activeTab",1)),i===p.setting.rootItem&&(p=p.setIn(["setting","rootItem"],h.id)),p}function Dn(t,o,i,n,a,s){const l=Mn(t,o),{gridType:r}=l;switch(r){case e.GridItemType.Column:case e.GridItemType.Row:return function(t,o,i,n,a,s){const l=o.gridType,r=Mn(t,i),{parent:d}=r,u=+r.bbox.width,c=Mn(t,d);let p=t;if((null==c?void 0:c.gridType)===n){const t=c.children.indexOf(i);if(l===n){const e=o.children,n=[...c.children];a?n.splice(t,0,...e):n.splice(t+1,0,...e),p=Nn(p,d,"children",n),p=p.set("content",p.content.without(o.id)),e.forEach((t=>{const e=+p.content[t].bbox.width;p=kn(p,t,e*u/200),p=Nn(p,t,"parent",d)})),p=kn(p,i,u/2)}else p=$n(p,o.id,d,t,a),p=Nn(p,o.id,"parent",d),p=kn(p,o.id,s?100:u/2),p=kn(p,i,s?100:u/2),n===e.GridItemType.Tab&&(p=Nn(p,d,"activeTab",t+1));return p}if(l===n){const t=c.children.indexOf(i);p=$n(p,i,o.id,a?o.children.length:0,!a),p=Nn(p,i,"parent",o.id),p=kn(p,i,50),o.children.forEach((t=>{const e=+p.content[t].bbox.width;p=kn(p,t,.5*e)}));const e=[...c.children];return e.splice(t,1,o.id),p=Nn(p,d,"children",e),p=Nn(p,o.id,"parent",d),p}return Bn(p,o.id,i,n,a,s)}(t,l,i,n,a,s);case e.GridItemType.Tab:return function(t,o,i,n,a,s){const l=Mn(t,i),{parent:r}=l,d=+l.bbox.width,u=Mn(t,r);let c=t;if(n===e.GridItemType.Tab){if((null==u?void 0:u.gridType)===e.GridItemType.Tab){const e=u.children.indexOf(i),n=[].concat(u.children);return n.splice(e+1,0,...o.children),c=Nn(t,r,"children",n),o.children.forEach((t=>{c=Nn(c,t,"parent",r)})),c=c.set("content",c.content.without(o.id)),c}const n=u.children.indexOf(i),a=[].concat(u.children);return a.splice(n,1,o.id),c=Nn(t,r,"children",a),c=$n(c,i,o.id,0,!0),c=Nn(c,i,"parent",o.id),c=Nn(c,o.id,"parent",r),c}if((null==u?void 0:u.gridType)===n){const t=u.children.indexOf(i);return c=$n(c,o.id,r,t,a),c=Nn(c,o.id,"parent",r),c=kn(c,o.id,s?100:d/2),c=kn(c,i,s?100:d/2),c}return Bn(c,o.id,i,n,a,s)}(t,l,i,n,a,s);default:return function(t,o,i,n,a,s){const l=Mn(t,i),{parent:r}=l,d=+l.bbox.width,u=Mn(t,r);let c=t;if((null==u?void 0:u.gridType)===n){const t=u.children.indexOf(i);return c=$n(c,o.id,r,t,a),c=Nn(c,o.id,"parent",r),c=kn(c,o.id,s?100:d/2),c=kn(c,i,s?100:d/2),n===e.GridItemType.Tab&&(c=Nn(c,r,"activeTab",t+1)),c}return Bn(c,o.id,i,n,a,s)}(t,l,i,n,a,s)}}function Fn(t,i){const{layoutId:n,layoutItemId:a}=t,s=(0,o.getAppConfigAction)(),{layouts:l}=s.appConfig;let r=l[n];const d=zn(r,e.GridItemType.Plain);r=d.outLayout,r=r.setIn(["content",d.outItem.id,"type"],e.LayoutItemType.Widget);r=Dn(r,r.content[d.outItem.id].id,a,"h"===i?e.GridItemType.Row:e.GridItemType.Column,!1,!1);const u=s.appConfig.setIn(["layouts",n],r);(0,o.getAppConfigAction)(u).exec()}!function(t){t.Top="top",t.Bottom="bottom",t.Left="left",t.Right="right",t.Center="center"}(An||(An={}));var Hn=function(t,e,o,i){return new(o||(o=Promise))((function(n,a){function s(t){try{r(i.next(t))}catch(t){a(t)}}function l(t){try{r(i.throw(t))}catch(t){a(t)}}function r(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(s,l)}r((i=i.apply(t,e||[])).next())}))};function Vn(t,o,i){return Hn(this,void 0,void 0,(function*(){const n={left:0,top:0,width:100,height:100},{layoutInfo:{layoutId:a,layoutItemId:s},updatedAppConfig:l}=yield V(t,o,i,n,n);return{newLayoutItemId:s,updatedAppConfig:l.setIn(["layouts",a,"content",s,"gridType"],e.GridItemType.Plain)}}))}function Wn(t,i,n,a,s){return Hn(this,void 0,void 0,(function*(){const{layoutInfo:l}=i,{layoutId:r}=n;let d,u=t;if((null==l?void 0:l.layoutId)===r){const e=t.layouts[r].content[l.layoutItemId];if(e.isPending)u=u.setIn(["layouts",r,"content",l.layoutItemId],e.without("isPending"));else{const e=(0,o.getAppConfigAction)().detachGridItem(t.layouts[r],l.layoutItemId);u=u.setIn(["layouts",r],e)}d=l.layoutItemId}else{const e=yield Vn(t,i,n);d=e.newLayoutItemId,u=e.updatedAppConfig}if(a){const t=function(t,o,i,n){switch(n){case An.Center:return Dn(t,o,i,e.GridItemType.Tab,!1,!0);case An.Top:return Dn(t,o,i,e.GridItemType.Column,!0,!1);case An.Bottom:return Dn(t,o,i,e.GridItemType.Column,!1,!1);case An.Left:return Dn(t,o,i,e.GridItemType.Row,!0,!1);case An.Right:return Dn(t,o,i,e.GridItemType.Row,!1,!1)}}(u.layouts[r],d,a,s);u=u.setIn(["layouts",r],t)}else u=u.setIn(["layouts",r,"content",d,"bbox"],{width:100}).setIn(["layouts",r,"content",d,"gridType"],e.GridItemType.Plain).setIn(["layouts",r,"setting","rootItem"],d);return{appConfig:u,layoutInfo:{layoutId:r,layoutItemId:d}}}))}var Gn=p(4650),Zn=p.n(Gn),_n=p(1442),Un=p.n(_n);const Yn=[{icon:Zn(),title:t=>t.formatMessage("splitHorizontally"),visible:()=>!ht(),onClick:t=>{const{layoutId:e,layoutItem:o}=t;Fn({layoutId:e,layoutItemId:o.id},"h")}},{icon:Un(),title:t=>t.formatMessage("splitVertically"),visible:()=>!ht(),onClick:t=>{const{layoutId:e,layoutItem:o}=t;Fn({layoutId:e,layoutItemId:o.id},"v")}},{icon:at(),title:t=>t.formatMessage("duplicate"),visible:()=>!ht(),onClick:t=>{const{layoutId:e,layoutItem:o}=t;On({layoutId:e,layoutItemId:o.id})}},{icon:et(),title:t=>t.formatMessage("pendingTip"),visible:t=>{const{layoutItem:o}=t,i=o.type===e.LayoutItemType.Widget&&null==o.widgetId;return pt()===e.AppMode.Design&&!ht()&&!i},onClick:t=>{const{layoutId:e,layoutItem:o}=t;En({layoutId:e,layoutItemId:o.id})}},{icon:K(),title:t=>t.formatMessage("delete"),visible:t=>pt()===e.AppMode.Design&&(!ht()||ft(t.layoutItem)),onClick:t=>{const{layoutItem:e,layoutId:i}=t,n={layoutId:i,layoutItemId:e.id};o.appBuilderSync.publishConfirmDeleteToApp(n)}}];var Xn=p(7077),qn=p.n(Xn);const Jn=t=>{const o=window.SVG,{className:i}=t,n=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o}(t,["className"]),a=(0,e.classNames)("jimu-icon jimu-icon-component",i);return o?e.React.createElement(o,Object.assign({className:a,src:qn()},n)):e.React.createElement("svg",Object.assign({className:a},n))};const Qn=t=>{const o=window.SVG,{className:i}=t,n=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o}(t,["className"]),a=(0,e.classNames)("jimu-icon jimu-icon-component",i);return o?e.React.createElement(o,Object.assign({className:a,src:Qo()},n)):e.React.createElement("svg",Object.assign({className:a},n))};const Kn=t=>{const o=window.SVG,{className:i}=t,n=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o}(t,["className"]),a=(0,e.classNames)("jimu-icon jimu-icon-component",i);return o?e.React.createElement(o,Object.assign({className:a,src:xe()},n)):e.React.createElement("svg",Object.assign({className:a},n))},ta=e.css`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 10;
  display: flex;
`,ea=e.css`
  ${ta};
  pointer-events: none;
`,oa=t=>{const o=(0,u.getTheme2)();return e.css`
    & > .max-grid-item-btn {
      display: none;
      background: var(--light-500);
      width: 26px;
      height: 26px;
      position: absolute;
      top: 0;
      right: 0;
    }

    & > .layout-widget > .add-btn {
      display: ${t?"none":"block"};
    }

    & > .add-btn {
      z-index: 20;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .lock-mask {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      z-index: 20;
      pointer-events: none;
      transition: all 400ms;

      .mask {
        width: 100%;
        height: 100%;
        background: ${o.colors.white};
        opacity: 0.1;
      }

      .lock-btn {
        background: ${e.polished.rgba(o.colors.white,.6)};
        border-color: ${o.colors.black} !important;
        box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.3);
        width: 38px;
        height: 38px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        transition: all 400ms;
        pointer-events: all;
      }

      &.unlock {
        width: 32px;
        height: 32px;

        .mask {
          background: transparent;
        }

        .lock-btn {
          width: 26px;
          height: 26px;
        }
      }
    }

    body:not(.design-mode) &:hover > .max-grid-item-btn {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `},ia=e.css`
  position: absolute;
  left: 0;
  top: 0;
  width: 100% !important;
  height: 100% !important;
  z-index: 30;
  background: var(--light);
`;function na(t){const{layoutId:n,layoutItemId:a,onDragStart:l,onDragging:r,onDragEnd:d,delay:c,isLastChild:p,className:h}=t,[m,f]=e.React.useState(!1),[y,v]=e.React.useState(!1),[I,x]=e.React.useState(!0),b=e.React.useRef(),w=e.React.useRef(),S=e.React.useRef(!1),C=e.React.useRef(),R=(0,u.getTheme2)(),T=e.hooks.useTranslation(Ht),A=e.ReactRedux.useSelector((t=>function(t,e,o){var i,n,a;const s=t.appConfig.layouts[e];if(null!==(n=null===(i=null==s?void 0:s.setting)||void 0===i?void 0:i.expandable)&&void 0!==n&&!n)return!1;const l=null===(a=null==s?void 0:s.setting)||void 0===a?void 0:a.rootItem;let r=!1;if(l===o){const t=Mn(s,l);null!=t.children&&0!==t.children.length||(r=!0)}return!r}(t,n,a))),M=e.ReactRedux.useSelector((t=>{var o,i,n;const a=null!==(n=null===(i=null===(o=t.appConfig)||void 0===o?void 0:o.forBuilderAttributes)||void 0===i?void 0:i.lockLayout)&&void 0!==n&&n;return!(t.appRuntimeInfo.appMode===e.AppMode.Design)||a})),P=e.ReactRedux.useSelector((t=>{var o,i,s;const l=t.appConfig.layouts[n].content[a];if(l.type===e.LayoutItemType.Section)return!0;if(l.type===e.LayoutItemType.Widget){const n=t.appConfig.widgets[l.widgetId];if((null===(o=null==n?void 0:n.manifest)||void 0===o?void 0:o.widgetType)===e.WidgetType.Layout||(null===(s=null===(i=null==n?void 0:n.manifest)||void 0===i?void 0:i.properties)||void 0===s?void 0:s.hasEmbeddedLayout))return null!=n.layouts}return!1})),L=e.ReactRedux.useSelector((t=>{const o=t.appConfig.layouts[n].content[a];return o.type===e.LayoutItemType.Widget&&null==o.widgetId})),j=e.React.useMemo((()=>(0,e.Immutable)({[e.BrowserSizeMode.Large]:`${n}_${a}_tlarge`,[e.BrowserSizeMode.Medium]:`${n}_${a}_tmedium`,[e.BrowserSizeMode.Small]:`${n}_${a}_tsmall`})),[n,a]);e.hooks.useEffectOnce((()=>{const t=(0,u.getTheme)();b.current=new Yi(w.current,t)}));const z=e.hooks.useEventCallback(((t,e)=>{t&&e&&b.current.setSize(t,e,window.devicePixelRatio)})),k=e.hooks.useEventCallback((t=>{S.current=t,document.querySelectorAll("div.grid-layout").forEach((e=>{e.getAttribute("data-layoutid")===n?t&&!e.classList.contains("drop-target")&&e.classList.add("drop-target"):e.classList.contains("drop-target")&&e.classList.remove("drop-target")})),b.current.clear()})),N=e.React.useCallback(((t,o,i,n,a,s)=>{if(!S.current)return;const{width:l,height:r}=i;b.current.clear();const d=(0,u.getTheme)();if(b.current.setColor(e.polished.rgba(d.colors.palette.primary[700],.2)),L&&Ve(t))return void b.current.drawRect({left:0,top:0,width:l,height:r});let c;c=s<=.2*r?{left:0,top:0,width:l,height:r/2}:s>=.8*r?{left:0,top:r/2,width:l,height:r/2}:a<=.2*l?{left:0,top:0,width:l/2,height:r}:a>=.8*l?{left:l/2,top:0,width:l/2,height:r}:{left:.2*l,top:.2*r,width:.6*l,height:.6*r},b.current.drawRect(c)}),[L]),$=e.React.useCallback(((t,i,l,r,d)=>{var u;let c=(0,o.getAppConfigAction)();if(L&&Ve(t)){if((null===(u=t.layoutInfo)||void 0===u?void 0:u.layoutId)===n){let i=c.appConfig;const s=i.layouts[t.layoutInfo.layoutId].content[t.layoutInfo.layoutItemId];if(s.gridType===e.GridItemType.Tab||s.gridType===e.GridItemType.Row||s.gridType===e.GridItemType.Column){let l=c.detachGridItem(i.layouts[n],t.layoutInfo.layoutItemId);return l=l.setIn(["content",a,"type"],null).setIn(["content",a,"gridType"],s.gridType).setIn(["content",a,"children"],s.children),s.children.forEach((t=>{l=l.setIn(["content",t,"parent"],a)})),l=l.set("content",l.content.without(t.layoutInfo.layoutItemId)),i=i.setIn(["layouts",n],l),c=(0,o.getAppConfigAction)(i),c.exec(),void(0,e.getAppStore)().dispatch(e.appActions.selectionChanged({layoutId:n,layoutItemId:a}))}}return void We({layoutId:n,layoutItemId:a},t)}const{width:p,height:h}=i;let g;g=d<=.2*h?An.Top:d>=.8*h?An.Bottom:r<=.2*p?s.utils.isRTL()?An.Right:An.Left:r>=.8*p?s.utils.isRTL()?An.Left:An.Right:An.Center;const m={layoutId:n};Wn(c.appConfig,t,m,a,g).then((t=>{const{appConfig:i,layoutInfo:n}=t;c=(0,o.getAppConfigAction)(i),c.exec(),(0,e.getAppStore)().dispatch(e.appActions.selectionChanged(n))}))}),[L,n,a]),O=e.React.useCallback((t=>{Ze({layoutId:n,layoutItemId:a},t),v(!1)}),[n,a]),E=e.React.useCallback((t=>{t.stopPropagation(),(0,e.getAppStore)().getState().browserSizeMode!==e.BrowserSizeMode.Small?v(!y):o.appBuilderSync.letBuilderShowPopperSelector("widget",{isPlaceholder:!0,isItemAccepted:Ve,onSelect:O})}),[y,O]),B=e.React.useCallback((()=>{f(!m)}),[m]),D=e.React.useCallback((()=>{x(!I)}),[I]);return(0,e.jsx)(xo,{layoutId:n,layoutItemId:a,resizable:!1,className:h,showDefaultTools:!1,toolItems:Yn,delay:c,isLastChild:p,onDragStart:l,onDragging:r,onDragEnd:d,css:e.css`${oa(L)};${m?ia:""}`},(!P||I)&&(0,e.jsx)(De,{css:ta,layouts:j,highlightDragover:!0,onDragOver:N,onDrop:$,onToggleDragoverEffect:k}),L&&(0,e.jsx)("div",{className:"add-btn"},(0,e.jsx)(g,{title:T("addWidget")},(0,e.jsx)(i.Button,{icon:!0,ref:C,css:e.css`width: 36px; height: 36px; padding: 0.5rem;`,onClick:E,"aria-haspopup":!0},(0,e.jsx)(Fe,null)))),L&&y&&(0,e.jsx)(Ne.WidgetListPopper,{referenceElement:C.current,isAccepted:Ve,onSelect:O,onClose:()=>{v(!1)}}),(0,e.jsx)("canvas",{css:ea,ref:w}),(0,e.jsx)(e.ReactResizeDetector,{handleWidth:!0,handleHeight:!0,onResize:z}),A&&(0,e.jsx)(i.Button,{icon:!0,type:"tertiary",className:"max-grid-item-btn p-0",onClick:B,title:T(m?"restore":"maximize")},m&&(0,e.jsx)(Kn,null),!m&&(0,e.jsx)(Jn,null)),P&&!M&&(0,e.jsx)("div",{className:(0,e.classNames)("lock-mask",{unlock:!I})},(0,e.jsx)("div",{className:"mask"}),(0,e.jsx)(i.Tooltip,{title:T(I?"unlockGridItem":"lockGridItem")},(0,e.jsx)(i.Button,{className:"lock-btn rounded-circle",size:"sm",type:"tertiary",icon:!0,onClick:D},!I&&(0,e.jsx)(Qn,{size:14,color:R.colors.black}),I&&(0,e.jsx)(Le,{size:20,color:R.colors.black})))))}const aa=32;function sa(t,e,o,i,n,a){let s=i,l=n;if("row"===o){const o=a?e.width:t.width,n=a?t.width:e.width;i<0&&(s=o>aa?-Math.min(Math.abs(i),o-aa):0),i>0&&(s=n>aa?Math.min(i,n-aa):0)}else n<0&&(l=t.height>aa?-Math.min(Math.abs(n),t.height-aa):0),n>0&&(l=e.height>aa?Math.min(n,e.height-aa):0);return{x:s,y:l}}function la(t){const o=t.getAttribute("data-layoutid"),i=t.getAttribute("data-layoutitemid");return+(0,e.getAppStore)().getState().appConfig.layouts[o].content[i].bbox.width}function ra(t){var o,i;const{referenceItemId:n,direction:a,layoutId:s,onResizeEnd:l}=t,r=e.React.useRef(),d=e.React.useRef(),u=e.React.useRef(null),c=null!==(i=null===(o=(0,e.getAppStore)().getState().appContext)||void 0===o?void 0:o.isRTL)&&void 0!==i&&i,p=e.ReactRedux.useSelector((t=>t.appRuntimeInfo.appMode===e.AppMode.Design)),h=e.ReactRedux.useSelector((e=>{var o,i;return null===(i=null===(o=e.appConfig.layouts[t.layoutId].setting)||void 0===o?void 0:o.resizable)||void 0===i||i})),g=e.ReactRedux.useSelector((t=>{var e,o;return null!==(o=null===(e=t.appConfig.layouts[s].setting)||void 0===e?void 0:e.splitSize)&&void 0!==o?o:8})),m=e.ReactRedux.useSelector((t=>{var e,o;return null!==(o=null===(e=t.appConfig.layouts[s].setting)||void 0===e?void 0:e.splitColor)&&void 0!==o?o:"var(--light-500)"})),f=e.React.useMemo((()=>{const t=`${g}px`,o=!!p||h;return e.css`
      width: ${"col"===a?"100%":t};
      height: ${"col"===a?t:"100%"};
      background: ${m};
      position: relative;
      z-index: 10;
      flex-shrink: 0;

      .horizontal-splitter {
        cursor: ${o?"col-resize":"default"};
      }

      .vertical-splitter {
        cursor: ${o?"row-resize":"default"};
      }
    `}),[a,h,p,g,m]);return e.hooks.useEffectOnce((()=>{let t,o,i,s,g,m,f,y,v,I,x,b,w;return e.moduleLoader.loadModule("jimu-core/dnd").then((e=>{const S=e.interact;u.current=S,r.current&&(d.current=S(r.current).origin("parent").draggable({inertia:!1,autoScroll:!1,enabled:!!p||h,modifiers:[S.modifiers.restrict({restriction:"parent"})],lockAxis:"row"===a?"x":"y",onstart:e=>{e.stopPropagation(),t=0,o=0,i=r.current.parentElement.getBoundingClientRect(),s=r.current.previousElementSibling,g=s.getBoundingClientRect(),f=s.style.width,y=s.style.height,m=la(s),v=r.current.nextElementSibling,I=v.getBoundingClientRect(),b=v.style.width,w=v.style.height,x=la(v)},onmove:e=>{e.stopPropagation(),t+=e.dx,o+=e.dy;const{x:i,y:n}=sa(g,I,a,t,o,c),l=c?-1:1;"row"===a?(s.style.width=`calc(${m}% + ${i*l}px)`,v.style.width=`calc(${x}% - ${i*l}px)`):(s.style.height=`calc(${m}% + ${n}px)`,v.style.height=`calc(${x}% - ${n}px)`)},onend:e=>{e.stopPropagation(),t+=e.dx,o+=e.dy;const{x:r,y:d}=sa(g,I,a,t,o,c),u=c?-1:1;s.style.width=f,v.style.width=b,s.style.height=y,v.style.height=w,l(n,Math.round(r*u*1e4/i.width)/100,Math.round(1e4*d/i.height)/100)}}))})),()=>{var t;null===(t=d.current)||void 0===t||t.unset(),d.current=null}})),e.React.useEffect((()=>{null!=d.current&&u.current(r.current).draggable(!!p||h)}),[h,p]),(0,e.jsx)("div",{ref:r,css:f,className:"grid-split flex-shrink-0"},(0,e.jsx)("div",{className:(0,e.classNames)("w-100 h-100",{"horizontal-splitter":"row"===a,"vertical-splitter":"col"===a})}))}var da=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const ua=e.css`
  .nav-link.grid-tab.highlight-pre {
    position: relative;
    &:after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 50%;
      height: 100%;
      background-color: var(--primary-300);
    }
  }

  .nav-link.grid-tab.highlight-next {
    position: relative;
    &:after {
      content: '';
      position: absolute;
      right: 0;
      top: 0;
      width: 50%;
      height: 100%;
      background-color: var(--primary-300);
    }
  }
`;function ca(t){const{layoutId:n,layoutItemId:a,onDragStart:l,title:r}=t,d=da(t,["layoutId","layoutItemId","onDragStart","title"]),u=e.React.useRef(),c=e.React.useRef(!1),p=e.hooks.useTranslation(i.defaultMessages),h=e.React.useContext(s.PageContext),g=e.React.useContext(s.LayoutContext),m=e.ReactRedux.useSelector((t=>{const e=t.appConfig.layouts[n].content[a];return null==e?void 0:e.type})),f=e.ReactRedux.useSelector((t=>jn(t.appConfig,{layoutId:n,layoutItemId:a},p))),y=e.React.useCallback((()=>h.rootLayoutId),[h.rootLayoutId]),v=e.hooks.useEventCallback((()=>{l(a)})),I=e.hooks.useEventCallback(((t,e,o,i,n,a)=>{c.current&&(n<=o.width/2?(u.current.classList.add("highlight-pre"),u.current.classList.remove("highlight-next")):(u.current.classList.remove("highlight-pre"),u.current.classList.add("highlight-next")))})),x=e.hooks.useEventCallback(((t,i,l,r,d)=>{const u={layoutId:n};let c=(0,o.getAppConfigAction)(),p=!1;p=r<=i.width/2?!s.utils.isRTL():s.utils.isRTL(),Wn(c.appConfig,t,u,a,An.Center).then((t=>{const{appConfig:i,layoutInfo:s}=t;let l=i;if(p){const t=l.layouts[n].content[a].parent,e=[...l.layouts[n].content[t].children];e.splice(e.indexOf(a),2,s.layoutItemId,a),l=l.setIn(["layouts",n,"content",t,"children"],e)}c=(0,o.getAppConfigAction)(l),c.exec(),(0,e.getAppStore)().dispatch(e.appActions.selectionChanged(s))}))})),b=e.hooks.useEventCallback((t=>{c.current=t,t||(u.current.classList.remove("highlight-pre"),u.current.classList.remove("highlight-next"))}));return e.React.useEffect((()=>{u.current.setAttribute("data-layoutid",n),u.current.setAttribute("data-layoutitemid",a);const t=(0,zt.interact)(u.current).origin("parent");Pt(t,{layoutId:n,layoutItemId:a,itemType:m,useDragHandler:!1,onDragStart:v,rootLayoutId:y,restrict:()=>!0}).draggable({modifiers:[zt.interact.modifiers.restrictRect({restriction:u.current.parentElement.parentElement})]});const o={current:{props:{layouts:(0,e.Immutable)({[e.BrowserSizeMode.Large]:`${n}_${a}_tlarge`,[e.BrowserSizeMode.Medium]:`${n}_${a}_tmedium`,[e.BrowserSizeMode.Small]:`${n}_${a}_tsmall`}),highlightDragover:!0,onDragOver:I,onDrop:x,onToggleDragoverEffect:b},layoutId:n,pageContext:h,layoutContext:g}},i=Ee(u.current,o,".grid-tab");return Be(u.current,o),()=>{t.unset(),i.unset()}}),[n,a]),(0,e.jsx)(i.Tab,Object.assign({},d,{title:f,innerRef:u,innnerClassName:"grid-tab",css:ua}))}var pa=p(5634),ha=p.n(pa);let ga=0;const ma=[{name:"preventOverflow",enabled:!0,options:{boundary:"viewport",altAxis:!0}},{name:"flip",enabled:!0,options:{boundary:"viewport",fallbackPlacements:(0,i.getFallbackPlacementsModifier)(["top-start","bottom-start"],!0).options.fallbackPlacements}}],fa=[{icon:ha(),title:t=>{const{layoutItem:o,formatMessage:i}=t,n=o.gridType;let a;return n===e.GridItemType.Row?a="distributeSpaceH":n===e.GridItemType.Column&&(a="distributeSpaceV"),i(a)},visible:t=>{const{layoutItem:o}=t,i=o.gridType;return(i===e.GridItemType.Row||i===e.GridItemType.Column)&&!ht()},onClick:t=>{const{layoutId:e}=t,i=t.layoutItem,n=(0,o.getAppConfigAction)(),a=100/i.children.length;i.children.forEach((t=>{n.editLayoutItemBBox({layoutId:e,layoutItemId:t},{width:a})})),n.exec()},onMouseEnter:t=>{const{layoutId:e,layoutItem:o}=t;document.querySelector(`div.grid-layout[data-layoutid="${e}"]`).querySelector(`div[data-layoutid="${e}"][data-layoutitemid="${o.id}"]`).classList.add("menu-active")},onMouseLeave:t=>{const{layoutId:e,layoutItem:o}=t;document.querySelector(`div.grid-layout[data-layoutid="${e}"]`).querySelector(`div[data-layoutid="${e}"][data-layoutitemid="${o.id}"]`).classList.remove("menu-active")}}];function ya(t){e.ReactRedux.useSelector((t=>t.extensionsInfo[e.extensionSpec.ExtensionPoints.ContextTool]));const{layoutId:o,layoutItem:n,refElement:a}=t,s=e.hooks.useTranslation(i.defaultMessages);return a?(0,e.jsx)(i._Popper,{placement:"top-start",reference:a,open:!0,modifiers:ma,version:ga++,trapFocus:!1,autoFocus:!1,css:e.css`
        background: transparent;
        box-shadow: none;
      `},(0,e.jsx)("div",null,(0,e.jsx)(Ft,{layoutId:o,layoutItem:n,theme:(0,u.getTheme2)(),parentRef:a,tools:fa,formatMessage:s}))):null}function va(t){const{layout:o,layoutItemId:i,isLast:n,onDragStart:a,onDragging:s,onDragEnd:l,className:r}=t,d=e.React.useMemo((()=>Mn(o,i)),[o,i]),u=e.React.useMemo((()=>(null==d?void 0:d.parent)?Mn(o,d.parent).gridType:null),[d,o]),c=e.ReactRedux.useSelector((t=>{var e,i;const n=null!==(i=null===(e=o.setting)||void 0===e?void 0:e.splitSize)&&void 0!==i?i:8;let a=0;return(null==d?void 0:d.parent)&&(a=Mn(o,d.parent).children.length),n*(a-1)/a})),p=e.React.useContext(e.AnimationContext),h=e.React.useMemo((()=>{var t,o;return(null===(o=null===(t=null==p?void 0:p.setting)||void 0===t?void 0:t.option)||void 0===o?void 0:o.parentMode)===e.ParentAnimationMode.AllAtOnce?0:250}),[p]),g=e.React.useCallback((()=>{let t;return t=c>0?`calc(${+d.bbox.width}% - ${c.toFixed(2)}px)`:+d.bbox.width+"%",u===e.GridItemType.Row?e.css`
        height: 100%;
        width: ${t};
      `:u===e.GridItemType.Column?e.css`
        width: 100%;
        height: ${t};
      `:e.css`
      width: 100%;
      height: 100%;
    `}),[d.bbox.width,c,u]);if(d.gridType===e.GridItemType.Row)return(0,e.jsx)(Ia,{className:r,css:g(),layout:o,layoutItemId:i,items:d.children});if(d.gridType===e.GridItemType.Column)return(0,e.jsx)(xa,{className:r,css:g(),layout:o,layoutItemId:i,items:d.children});if(d.gridType===e.GridItemType.Tab)return(0,e.jsx)(ba,{className:r,css:g(),layout:o,layoutItemId:i,items:d.children,onDragStart:a,onDragEnd:l});const m=function(t,o){var i,n;let a=0;const s=Mn(t,t.setting.rootItem);if(s&&(null===(i=s.children)||void 0===i?void 0:i.length)>0){const i=[...s.children];for(;i.length>0;){const s=i.shift(),l=Mn(t,s),r=Mn(t,l.parent);if(`${l.id}`===o||r.gridType===e.GridItemType.Tab&&r.children.includes(o))return a;(null===(n=l.children)||void 0===n?void 0:n.length)>0?i.unshift(...l.children):(r.gridType!==e.GridItemType.Tab||r.gridType===e.GridItemType.Tab&&0===r.children.indexOf(s))&&(a+=1)}}return a}(o,i),f=function(t,e){var o;let i=Mn(t,e);if((null===(o=null==i?void 0:i.children)||void 0===o?void 0:o.length)>0)return!1;for(;null!=i;){const e=i.parent;if(null==e)break;const o=Mn(t,e),n=o.children.length;if(+o.children[n-1]!=+i.id)return!1;i=o}return!0}(o,i);return(0,e.jsx)(na,{css:g(),className:(0,e.classNames)(`d-flex ${r}`,{"is-last":n}),layoutId:o.id,layoutItemId:i,delay:m*h,isLastChild:f,onDragStart:a,onDragging:s,onDragEnd:l})}function Ia(t){const{layout:i,layoutItemId:n,items:a,className:s}=t,l=e.React.useRef(),r=e.ReactRedux.useSelector((t=>{var o;return(null===(o=t.appRuntimeInfo)||void 0===o?void 0:o.appMode)===e.AppMode.Design})),d=e.ReactRedux.useSelector((t=>{const e=t.appRuntimeInfo.selection;return(null==e?void 0:e.layoutId)===i.id&&(null==e?void 0:e.layoutItemId)===n})),c=e.hooks.useEventCallback(((t,e)=>{const n=(0,o.getAppConfigAction)(),s=a.indexOf(t),l=a[s+1],r=i.content[t],d=i.content[l];n.editLayoutItemBBox({layoutId:i.id,layoutItemId:t},{width:+r.bbox.width+e}),n.editLayoutItemBBox({layoutId:i.id,layoutItemId:l},{width:+d.bbox.width-e}),n.exec()})),p=e.hooks.useEventCallback((t=>{var e;const o=l.current.querySelector(`div[data-layoutitemid="${t}"]`);let i,n;(null===(e=o.nextElementSibling)||void 0===e?void 0:e.classList.contains("grid-split"))?(i=o.nextElementSibling,n=i.nextElementSibling):(i=o.previousElementSibling,n=i.previousElementSibling);const a=o.parentElement.getBoundingClientRect(),s=o.getBoundingClientRect();o.style.width=`${o.clientWidth}px`,o.style.height=`${o.clientHeight}px`,o.style.left=s.left-a.left+"px",o.style.top=s.top-a.top+"px",o.style.position="absolute",n.style.width=`${o.clientWidth+i.clientWidth+n.clientWidth}px`,i.style.display="none"})),h=e.hooks.useEventCallback((t=>{var e;const o=l.current.querySelector(`div[data-layoutitemid="${t}"]`);let i,n;(null===(e=o.nextElementSibling)||void 0===e?void 0:e.classList.contains("grid-split"))?(i=o.nextElementSibling,n=i.nextElementSibling):(i=o.previousElementSibling,n=i.previousElementSibling),o.style.width=null,o.style.height=null,o.style.left=null,o.style.top=null,o.style.position=null,n.style.width=null,i.style.display=null})),g=(0,u.getTheme2)();return(0,e.jsx)("div",{className:`d-flex ${s}`,css:e.css`
        position: ${r?"relative":"initial"};
        .is-last {
          width: auto;
          flex-grow: 1;
          flex-shrink: 1;
          flex-basis: 0;
        }
        &.menu-active > .grid-row-item {
          &:after {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            opacity: 0.3;
            background: ${g.colors.palette.primary[600]};
          }
        }
        &.menu-active > .grid-row-item:nth-of-type(4n-1):after {
          background: ${g.colors.palette.danger[800]};
          opacity: 0.6;
        }
      `,"data-layoutid":i.id,"data-layoutitemid":n,ref:l},a.map(((t,o)=>{return n=t,s=o===a.length-1,(0,e.jsx)(e.React.Fragment,{key:n},(0,e.jsx)(va,{key:n,className:"grid-row-item",layout:i,layoutItemId:n,onDragStart:p,onDragEnd:h}),!s&&(0,e.jsx)(ra,{referenceItemId:n,layoutId:i.id,direction:"row",onResizeEnd:c}));var n,s})),d&&(0,e.jsx)(ya,{layoutId:i.id,layoutItem:i.content[n],refElement:l.current}))}function xa(t){const{layout:i,layoutItemId:n,items:a,className:s}=t,l=e.React.useRef(),r=e.ReactRedux.useSelector((t=>{var o;return(null===(o=t.appRuntimeInfo)||void 0===o?void 0:o.appMode)===e.AppMode.Design})),d=e.ReactRedux.useSelector((t=>{const e=t.appRuntimeInfo.selection;return(null==e?void 0:e.layoutId)===i.id&&(null==e?void 0:e.layoutItemId)===n})),c=e.hooks.useEventCallback(((t,e,n)=>{const s=(0,o.getAppConfigAction)(),l=a.indexOf(t),r=a[l+1],d=i.content[t],u=i.content[r];s.editLayoutItemBBox({layoutId:i.id,layoutItemId:t},{width:+d.bbox.width+n}),s.editLayoutItemBBox({layoutId:i.id,layoutItemId:r},{width:+u.bbox.width-n}),s.exec()})),p=e.hooks.useEventCallback((t=>{var e;const o=l.current.querySelector(`div[data-layoutitemid="${t}"]`);let i,n;(null===(e=o.nextElementSibling)||void 0===e?void 0:e.classList.contains("grid-split"))?(i=o.nextElementSibling,n=i.nextElementSibling):(i=o.previousElementSibling,n=i.previousElementSibling);const a=o.parentElement.getBoundingClientRect(),s=o.getBoundingClientRect();o.style.width=`${o.clientWidth}px`,o.style.height=`${o.clientHeight}px`,o.style.left=s.left-a.left+"px",o.style.top=s.top-a.top+"px",o.style.position="absolute",n.style.height=`${o.clientHeight+i.clientHeight+n.clientHeight}px`,i.style.display="none"})),h=e.hooks.useEventCallback((t=>{var e;const o=l.current.querySelector(`div[data-layoutitemid="${t}"]`);let i,n;(null===(e=o.nextElementSibling)||void 0===e?void 0:e.classList.contains("grid-split"))?(i=o.nextElementSibling,n=i.nextElementSibling):(i=o.previousElementSibling,n=i.previousElementSibling),o.style.width=null,o.style.height=null,o.style.left=null,o.style.top=null,o.style.position=null,n.style.height=null,i.style.display=null})),g=(0,u.getTheme2)();return(0,e.jsx)("div",{className:`d-flex flex-column ${s}`,css:e.css`
        position: ${r?"relative":"initial"};
        .is-last {
          height: auto;
          flex-grow: 1;
          flex-shrink: 1;
          flex-basis: 0;
        }
        &.menu-active > .grid-col-item {
          &:after {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            opacity: 0.3;
            background: ${g.colors.palette.primary[600]};
          }
        }
        &.menu-active > .grid-col-item:nth-of-type(4n-1):after {
          background: ${g.colors.palette.danger[800]};
          opacity: 0.6;
        }
      `,"data-layoutid":i.id,"data-layoutitemid":n,ref:l},a.map(((t,o)=>{return n=t,s=o===a.length-1,(0,e.jsx)(e.React.Fragment,{key:n},(0,e.jsx)(va,{key:n,className:"grid-col-item",layout:i,layoutItemId:n,onDragStart:p,onDragEnd:h}),!s&&(0,e.jsx)(ra,{referenceItemId:n,layoutId:i.id,direction:"col",onResizeEnd:c}));var n,s})),d&&(0,e.jsx)(ya,{layoutId:i.id,layoutItem:i.content[n],refElement:l.current}))}function ba(t){var o;const{layout:n,layoutItemId:a,items:s,className:l,onDragStart:r,onDragEnd:d}=t,[u,c]=e.React.useState(0),p=e.React.useRef(),h=e.React.useRef(),g=e.React.useRef(),m=(null===(o=n.setting)||void 0===o?void 0:o.rootItem)===a;e.hooks.useEffectOnce((()=>{let t=(0,zt.interact)(p.current).origin("parent");return t=Pt(t,{layoutId:n.id,layoutItemId:a,useDragHandler:!1,itemType:e.LayoutItemType.Widget,rootLayoutId:null,restrict:null,onDragStart:r,onDragEnd:d}),t.draggable({modifiers:[zt.interact.modifiers.restrictRect({restriction:`div.grid-layout[data-layoutid="${n.id}"]`})]}),()=>{t&&(t.unset(),t=null)}})),e.React.useEffect((()=>{p.current&&(m?(0,zt.interact)(p.current).draggable(!1):(0,zt.interact)(p.current).draggable(!0))}),[m]);const f=e.React.useMemo((()=>{var t;return null!==(t=Mn(n,a).activeTab)&&void 0!==t?t:0}),[n,a]);e.React.useEffect((()=>{c(f)}),[f]);const y=e.hooks.useEventCallback((t=>{const e=s.indexOf(t);c(e)})),v=e.hooks.useEventCallback((t=>{const e=s.indexOf(t);e===s.length-1?c(s.length-2):c(e+1)})),I=e.hooks.useEventCallback((t=>{const e=p.current.querySelector(`div[data-layoutitemid="${t}"]`).getBoundingClientRect();h.current=e;const o=Mt(e);g.current=document.body.appendChild(o);const i=s.indexOf(t);i===s.length-1?c(s.length-2):c(i+1)})),x=e.hooks.useEventCallback(((t,e,o)=>{const i=e-h.current.left,n=o-h.current.top;g.current.style.transform=`translate(${Math.round(i)}px, ${Math.round(n)}px) translateZ(0)`})),b=e.hooks.useEventCallback((t=>{document.body.removeChild(g.current),g.current=null}));return(0,e.jsx)("div",{className:(0,e.classNames)(l,"exb-rnd"),"data-layoutid":n.id,"data-layoutitemid":a,css:e.css`position: relative;`,ref:p},(0,e.jsx)(i.Tabs,{type:"tabs",fill:!0,scrollable:!0,className:"w-100 h-100",value:s[u],onChange:y,css:e.css`
          & > .tab-content {
            overflow: hidden;
          }
        `},[...s].map(((t,o)=>((t,o)=>(0,e.jsx)(ca,{key:t,id:t,title:`${o}`,layoutId:n.id,layoutItemId:t,onDragStart:v},(0,e.jsx)(va,{layout:n,layoutItemId:t,onDragStart:I,onDragging:x,onDragEnd:b})))(t,o)))))}var wa=p(4247),Sa=p.n(wa);const Ca=t=>{const o=window.SVG,{className:i}=t,n=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o}(t,["className"]),a=(0,e.classNames)("jimu-icon jimu-icon-component",i);return o?e.React.createElement(o,Object.assign({className:a,src:Sa()},n)):e.React.createElement("svg",Object.assign({className:a},n))},Ra=e.css`
  pointer-events: auto;
`;function Ta(t){return e.css`
    body.lock-layout &,
    body:not(.design-mode) & {
      display: none !important;
    }

    display: flex;
    height: ${t?"200px":"100%"};
    padding: 1rem;
    pointer-events: none;
    position: relative;
    z-index: 1;
    .btn-text {
      line-height: 32px;
    }
    .btn {
      margin-right: 8px;
    }
    .action-item {
      width: 32px;
    }
    .action-seprator {
      width: 300px;
      height: 1px;
      background-color: var(--light-300);
    }
  `}function Aa(t){const{layoutId:n,pageContext:a,onTemplateSelected:l,onPageTemplateSelected:r}=t,{formatMessage:d,rootLayoutId:u}=a,[c,p]=e.React.useState(!1),[h,m]=e.React.useState(!1),[f,y]=e.React.useState(!1),v=n===u,I=e.React.useRef(null),x=e.React.useRef(null),b=e.React.useRef(null),w=e.ReactRedux.useSelector((t=>{var o,i,n;const a=null!==(n=null===(i=null===(o=t.appConfig)||void 0===o?void 0:o.forBuilderAttributes)||void 0===i?void 0:i.lockLayout)&&void 0!==n&&n;return t.appRuntimeInfo.appMode===e.AppMode.Design&&!a}));e.hooks.useEffectOnce((()=>{v||(0,e.getAppStore)().getState().browserSizeMode===e.BrowserSizeMode.Small||p(!0)}));const S=d("chooseTemplate",{type:d("grid").toLocaleLowerCase()}),C=d("chooseTemplate",{type:d("page").toLocaleLowerCase()}),R=t=>{p(!1),l(t)},T=t=>{m(!1),r(t)},A=t=>{y(!1);const i=(0,o.getAppConfigAction)(),a={uri:t.uri,itemId:t.itemId},l=(0,e.getAppStore)().getState().browserSizeMode;e.WidgetManager.getInstance().handleNewWidgetJson(a).then((t=>{var a;const r=e.appConfigUtils.getUniqueId(i.appConfig,"widget");t.id=r,i.createWidget((0,e.Immutable)(t));let d=i.appConfig;const u=d.layouts[n];let c=null===(a=u.setting)||void 0===a?void 0:a.rootItemId;null!=c&&null!=u.content[c]||(c=`${s.utils.getMaximumId(u)+1}`),d=d.setIn(["layouts",n,"setting","rootItem"],c).setIn(["layouts",n,"content",c],{id:c,type:e.LayoutItemType.Widget,widgetId:r,bbox:{width:100}}).setIn(["widgets",r,"parent",l],[{layoutId:n,layoutItemId:c}]),(0,o.getAppConfigAction)(d).exec()}))};return w?(0,e.jsx)("div",{className:"w-100 flex-column justify-content-center align-items-center",css:Ta(v)},(0,e.jsx)("div",{className:"d-flex justify-content-center align-items-center"},!v&&(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)(g,{placement:"bottom",title:d("addWidget")},(0,e.jsx)(i.Button,{icon:!0,ref:I,css:Ra,onClick:t=>{t.stopPropagation(),(0,e.getAppStore)().getState().browserSizeMode!==e.BrowserSizeMode.Small?y(!f):o.appBuilderSync.letBuilderShowPopperSelector("widget",{isPlaceholder:!1,isItemAccepted:()=>!0,onSelect:A})},"aria-haspopup":!0},(0,e.jsx)(Fe,{size:16}))),(0,e.jsx)(g,{placement:"bottom",title:S},(0,e.jsx)("div",{className:"action-item"},(0,e.jsx)(i.Button,{ref:x,icon:!0,onClick:t=>{t.stopPropagation(),(0,e.getAppStore)().getState().browserSizeMode!==e.BrowserSizeMode.Small?p(!c):o.appBuilderSync.letBuilderShowPopperSelector("template",{templateMethod:"getGridTemplates",onSelect:R})},css:Ra,"aria-haspopup":!0},(0,e.jsx)(Ca,{size:16}))))),v&&(0,e.jsx)(g,{placement:"bottom",title:C},(0,e.jsx)("div",{className:"action-item"},(0,e.jsx)(i.Button,{ref:b,icon:!0,onClick:t=>{t.stopPropagation(),(0,e.getAppStore)().getState().browserSizeMode!==e.BrowserSizeMode.Small?m(!h):o.appBuilderSync.letBuilderShowPopperSelector("template",{templateMethod:"getFullScreenGridPageTemplates",onSelect:T})},css:Ra,className:"rounded-circle","aria-haspopup":!0},(0,e.jsx)(Ca,{size:16}))))),v&&(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)("div",{className:"action-seprator mt-3"}),(0,e.jsx)("div",null,(0,e.jsx)("h5",{className:"btn-text mt-2"},d("dropWidgetToAdd")))),c&&(0,e.jsx)(Ne.TemplateSelector,{templates:(0,Hi.getGridTemplates)(),referenceElement:x.current,onItemSelect:R,onClose:()=>{p(!1)}}),f&&(0,e.jsx)(Ne.WidgetListPopper,{referenceElement:I.current,isAccepted:()=>!0,onSelect:A,onClose:()=>{y(!1)}}),h&&(0,e.jsx)(Ne.TemplateSelector,{templates:(0,Hi.getFullScreenGridPageTemplates)(),referenceElement:b.current,onItemSelect:T,onClose:()=>{m(!1)}})):null}const Ma=e.css`
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  background: transparent;
  display: flex;
`,Pa=t=>{var o;const n=(0,u.getTheme2)(),a=i.styleUtils.toCSSPadding(null===(o=null==t?void 0:t.style)||void 0===o?void 0:o.padding);let s;if(a&&t.paddingColor){const o=a.split(" "),i=t.paddingColor;let n="";const l=window.jimuUA.browser.name.toLowerCase();"firefox"===l?n="-moz-":"safari"!==l&&"chrome"!==l||(n="-webkit-"),s=e.css`
      background-image:
      ${n}linear-gradient(270deg, ${i} ${o[0]}, transparent ${o[0]}),
      ${n}linear-gradient(180deg, ${i} ${o[1]}, transparent ${o[1]}),
      ${n}linear-gradient(90deg, ${i} ${o[2]}, transparent ${o[2]}),
      ${n}linear-gradient(0deg, ${i} ${o[3]}, transparent ${o[3]});
    `}return e.css`
    overflow: hidden;
    position: relative;
    padding: ${a};
    ${s}

    .grid-root-drop-area {
      position: absolute;
      background: rgba(0, 0, 0, 0.4);
      border: 2px solid rgba(255, 255, 255, 0.04);
      box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
      border-radius: 7px;
      display: none !important;
      z-index: 30;

      &.top {
        top: 2px;
        left: 50%;
        width: 60px;
        height: 10px;
        transform: translateX(-50%);
      }

      &.bottom {
        bottom: 2px;
        left: 50%;
        width: 60px;
        height: 10px;
        transform: translateX(-50%);
      }

      &.right {
        right: 2px;
        top: 50%;
        height: 60px;
        width: 10px;
        transform: translateY(-50%);
      }

      &.left {
        left: 2px;
        top: 50%;
        height: 60px;
        width: 10px;
        transform: translateY(-50%);
      }
    }

    .${Rt} &.drop-target > .grid-root-drop-area,
    .${Ct} &.drop-target > .grid-root-drop-area {
      display: flex !important;
    }

    .highlight-area {
      background: ${e.polished.rgba(n.colors.palette.primary[700],.2)};
      position: absolute;
      opacity: 0.6;
      pointer-events: none;
      display: none;

      &.active {
        display: block;
      }

      &.top {
        top: 0;
        width: 100%;
        height: 50%;
      }
      &.bottom {
        bottom: 0;
        width: 100%;
        height: 50%;
      }
      &.left {
        left: 0;
        width: 50%;
        height: 100%;
      }
      &.right {
        right: 0;
        width: 50%;
        height: 100%;
      }
      &.center {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  `};class La extends e.React.PureComponent{constructor(t){super(t),this.handleTemplateSelected=t=>{return e=this,i=void 0,a=function*(){const e=(0,o.getAppConfigAction)().appConfig,{layout:i}=this.props,{appConfig:n}=yield o.templateUtils.applyGridTemplate(e,i.parent.id,t);(0,o.getAppConfigAction)(n).exec()},new((n=void 0)||(n=Promise))((function(t,o){function s(t){try{r(a.next(t))}catch(t){o(t)}}function l(t){try{r(a.throw(t))}catch(t){o(t)}}function r(e){var o;e.done?t(e.value):(o=e.value,o instanceof n?o:new n((function(t){t(o)}))).then(s,l)}r((a=a.apply(e,i||[])).next())}));var e,i,n,a},this.handlePageTemplateSelected=t=>{const i=(0,o.getAppConfigAction)().appConfig;this.setState({isLoadingTemplate:!0}),o.templateUtils.applyPageTemplateToBody(i,this.pageContext.pageId,t).then((({appConfig:t})=>{(0,o.getAppConfigAction)(t).exec(),e.lodash.defer((()=>{this.setState({isLoadingTemplate:!1})}))})).finally(null)},this.highlight=t=>{this.tipRef.current.classList.add("active",t)},this.clearHighlight=t=>{this.tipRef.current.classList.remove("active",t)},s.utils.autoBindHandlers(this,["handleDrop"]);const{layout:i}=this.props;this.fakeLayouts=(0,e.Immutable)({[e.BrowserSizeMode.Large]:`${i.id}_tlarge`,[e.BrowserSizeMode.Medium]:`${i.id}_tmedium`,[e.BrowserSizeMode.Small]:`${i.id}_tsmall`}),this.tipRef=e.React.createRef()}findExtension(){const t=e.ExtensionManager.getInstance().getExtensions(`${e.extensionSpec.ExtensionPoints.LayoutTransformer}`);if((null==t?void 0:t.length)>0){const o=t.find((t=>t.layoutType===e.LayoutType.GridLayout));this.layoutTransform=null==o?void 0:o.transformLayout}}handleDragOver(){}handleDragEnter(){}handleDragLeave(){}handleDrop(t,i,n){const{layout:a}=this.props,s={layoutId:a.id};let l=(0,o.getAppConfigAction)();Wn(l.appConfig,t,s,null,An.Center).then((t=>{const{appConfig:i,layoutInfo:n}=t;l=(0,o.getAppConfigAction)(i),l.exec(),(0,e.getAppStore)().dispatch(e.appActions.selectionChanged(n))}))}handleDropAtSide(t,i){this.clearHighlight(i);const n=this.props.layout.id;let a=(0,o.getAppConfigAction)();this.tipRef.current.parentElement.classList.remove("drop-target"),function(t,i,n,a){return Hn(this,void 0,void 0,(function*(){const{layoutInfo:s}=i;let l,r=t;if((null==s?void 0:s.layoutId)===n){const e=(0,o.getAppConfigAction)().detachGridItem(t.layouts[n],s.layoutItemId);r=r.setIn(["layouts",n],e),l=s.layoutItemId}else{const e=yield Vn(t,i,{layoutId:n});l=e.newLayoutItemId,r=e.updatedAppConfig}const d=r.layouts[n],u=d.setting.rootItem,c=d.content[u];let p;if(a===An.Left||a===An.Right){if(c.gridType===e.GridItemType.Row){let t=d;t=kn(t,u,100),t=kn(t,l,50),t=Nn(t,l,"parent",u),c.children.forEach((e=>{const o=t.content[e];t=kn(t,e,+o.bbox.width/2)}));const e=[...c.children];return a===An.Left?e.unshift(l):e.push(l),t=t.setIn(["content",u,"children"],e),r=r.setIn(["layouts",n],t),{appConfig:r,itemId:l}}p=zn(d,e.GridItemType.Row)}else{if(c.gridType===e.GridItemType.Column){let t=d;t=kn(t,u,100),t=kn(t,l,50),t=Nn(t,l,"parent",u),c.children.forEach((e=>{const o=t.content[e];t=kn(t,e,+o.bbox.width/2)}));const e=[...c.children];return a===An.Top?e.unshift(l):e.push(l),t=t.setIn(["content",u,"children"],e),r=r.setIn(["layouts",n],t),{appConfig:r,itemId:l}}p=zn(d,e.GridItemType.Column)}let{outLayout:h,outItem:g}=p;return h=h.setIn(["setting","rootItem"],g.id),h=kn(h,g.id,100),h=kn(h,u,50),h=Nn(h,u,"parent",g.id),h=kn(h,l,50),h=Nn(h,l,"parent",g.id),h=a===An.Left||a===An.Top?Nn(h,g.id,"children",[l,u]):Nn(h,g.id,"children",[u,l]),r=r.setIn(["layouts",n],h),{appConfig:r,itemId:l}}))}(a.appConfig,t,n,i).then((({appConfig:t,itemId:i})=>{a=(0,o.getAppConfigAction)(t),a.exec(),(0,e.getAppStore)().dispatch(e.appActions.selectionChanged({layoutId:n,layoutItemId:i}))}))}render(){var t,o,i;const{layouts:n,layout:a,browserSizeMode:l,mainSizeMode:r,className:d}=this.props,u=n[l]!==a.id;let c=a;u&&(null==this.layoutTransform&&this.findExtension(),null!=this.layoutTransform&&(c=this.layoutTransform(a,r,l)));const{rootItem:p}=null!==(t=c.setting)&&void 0!==t?t:{},h=Mn(c,p),g=(0,e.classNames)("layout grid-layout d-flex w-100 h-100",d),m=null!==(i=null===(o=null==h?void 0:h.children)||void 0===o?void 0:o.length)&&void 0!==i?i:0;return(0,e.jsx)(s.PageContext.Consumer,null,(t=>(this.pageContext=t,(0,e.jsx)("div",{className:g,css:Pa(c.setting),"data-layoutid":c.id},(0,e.jsx)(e.IntersectionContext.Provider,{value:{monitor:!1}},(0,e.jsx)(e.OneByOneAnimation,{oid:c.id,"data-layoutid":c.id,className:"trail-container d-flex w-100 h-100",css:e.css`
                    width: 100%;
                  `},null==h&&(0,e.jsx)(De,{css:Ma,layouts:this.props.layouts,highlightDragover:!0,onDragEnter:this.handleDragEnter,onDragLeave:this.handleDragLeave,onDragOver:this.handleDragOver,onDrop:this.handleDrop},(0,e.jsx)("div",{css:e.css`
                          width: 100%;
                          background: var(--cyan-500);
                        `})),null==h&&!u&&(0,e.jsx)(Aa,{layoutId:a.id,pageContext:t,onTemplateSelected:this.handleTemplateSelected,onPageTemplateSelected:this.handlePageTemplateSelected}),h?(0,e.jsx)(va,{className:"w-100 h-100",layout:c,layoutItemId:p}):this.props.children)),m>1&&[An.Top,An.Right,An.Bottom,An.Left].map((t=>(0,e.jsx)(De,{key:t,className:`${t} grid-root-drop-area shadow-sm`,layouts:this.fakeLayouts,onDrop:e=>{this.handleDropAtSide(e,t)},onDragEnter:()=>{this.highlight(t)},onDragLeave:()=>{this.clearHighlight(t)}}))),(0,e.jsx)("div",{ref:this.tipRef,className:"highlight-area"})))))}}const ja=e.ReactRedux.connect(s.utils.mapStateToLayoutProps)(La);var za=p(5505);class ka extends e.React.PureComponent{constructor(t){super(t),this.modalStyle={position:"absolute",top:"0",bottom:"0",width:"100%",height:"auto",paddingBottom:"1px"},this.onTransitionSettingChange=t=>{const{layoutId:i,layoutItemId:n}=this.props,a=(0,o.getAppConfigAction)(),s=a.appConfig.layouts[i].content[n];a.editSectionProperty(s.sectionId,"transition",t).exec(),(null==t?void 0:t.type)!==e.TransitionType.None&&this.previewTransition()},this.onHoverEffectChange=t=>{var i,n;const{layoutId:a,layoutItemId:s}=this.props,l=(0,o.getAppConfigAction)(),r=null!==(i=l.appConfig.layouts[a].content[s].setting)&&void 0!==i?i:(0,e.Immutable)({});(null===(n=r.hoverEffect)||void 0===n?void 0:n.type)!==t.type&&l.editLayoutItemSetting({layoutId:a,layoutItemId:s},r.set("hoverEffect",t)).exec(),t.type!==e.HoverType.None&&o.builderAppSync.publishHoverPreviewToApp({layoutInfo:{layoutId:a,layoutItemId:s},id:(0,e.getNextAnimationId)()})},this.onEffectSettingChange=(t,i)=>{const n=e.AnimationTriggerType.ScrollIntoView,{layoutId:a,layoutItemId:s,setting:l}=this.props,r=l||(0,e.Immutable)({}),d=t===e.AnimationPlayMode.OneByOne?"oneByOneEffect":"effect";this.props.onSettingChange({layoutId:a,layoutItemId:s},r.setIn([d,n],i)),(null==i?void 0:i.type)!==e.AnimationType.None&&o.builderAppSync.publishAnimationPreviewToApp({layoutInfo:{layoutId:a,layoutItemId:s},playMode:t,id:(0,e.getNextAnimationId)()})},this.onSectionOneByOneEffectSettingChange=t=>{this.onEffectSettingChange(e.AnimationPlayMode.OneByOne,t)},this.previewAnimation=t=>{this.hasAnimationEffect()&&o.builderAppSync.publishAnimationPreviewToApp({layoutInfo:{layoutId:this.props.layoutId,layoutItemId:this.props.layoutItemId},playMode:t,id:(0,e.getNextAnimationId)()})},this.previewTransition=(t=!1)=>{var i,n,a;const{sectionId:l}=this.props,r=s.searchUtils.getSectionInfo((0,e.getAppStore)().getState().appStateInBuilder,l),{views:d}=r;if((null==d?void 0:d.length)>1){let s=null===(a=null===(n=null===(i=(0,e.getAppStore)().getState().appStateInBuilder)||void 0===i?void 0:i.appRuntimeInfo)||void 0===n?void 0:n.sectionNavInfos)||void 0===a?void 0:a[l];if(!s){const t=we(r),o=d.indexOf(t),i=o>0?o-1:o+1;s=(0,e.Immutable)({currentViewId:t,previousViewId:d[i]})}o.builderAppSync.publishSectionNavInfoToApp(l,s.set("playId",(0,e.getNextAnimationId)()).set("withOneByOne",t).asMutable())}},this.previewTransitionAndOnebyOne=()=>{this.previewTransition(!0)},this.previewOneByOneInSection=()=>{this.previewAnimation(e.AnimationPlayMode.OneByOne)},this.previewHover=()=>{this.hasHoverEffect()&&o.builderAppSync.publishHoverPreviewToApp({layoutInfo:{layoutId:this.props.layoutId,layoutItemId:this.props.layoutItemId},id:(0,e.getNextAnimationId)()})},this.onPlayModeChange=t=>{const{layoutId:i,layoutItemId:n,setting:a}=this.props,s=a||(0,e.Immutable)({});let l=(0,o.getAppConfigAction)().appConfig;l=l.setIn(["layouts",i,"content",n,"setting"],s.set("effectPlayMode",t)),(0,o.getAppConfigAction)(l).exec()},this.switchToIn=()=>{this.setState({animationType:"in"})},this.switchToTransition=()=>{this.setState({animationType:"transition"})},this.switchToHover=()=>{this.setState({animationType:"hover"})},this.state={animationType:"in"}}hasAnimationEffect(){var t,o;const{setting:i}=this.props,n=null===(t=null==i?void 0:i.effect)||void 0===t?void 0:t[e.AnimationTriggerType.ScrollIntoView],a=null===(o=null==i?void 0:i.oneByOneEffect)||void 0===o?void 0:o[e.AnimationTriggerType.ScrollIntoView];return n&&n.type!==e.AnimationType.None||a&&a.type!==e.AnimationType.None}hasHoverEffect(){const{setting:t}=this.props,o=null==t?void 0:t.hoverEffect;return o&&o.type!==e.HoverType.None}render(){var t,o;const{formatMessage:n,isLayoutWidget:a,isSection:s,transitionType:l,transitionDirection:r,setting:d}=this.props,{animationType:u}=this.state,c=null===(t=null==d?void 0:d.effect)||void 0===t?void 0:t[e.AnimationTriggerType.ScrollIntoView],p=null===(o=null==d?void 0:d.oneByOneEffect)||void 0===o?void 0:o[e.AnimationTriggerType.ScrollIntoView];return(0,e.jsx)(Ne.SettingSection,{role:"group","aria-label":n("animation"),title:n("animation")},s&&(0,e.jsx)(Ne.SettingRow,null,(0,e.jsx)(i.AdvancedButtonGroup,{className:"w-100",css:e.css`
              border-bottom: 1px solid var(--primary-500);
              .jimu-btn {
                width: 50%;
                border-radius: 2px 2px 0 0;
              }
            `},(0,e.jsx)(i.Button,{active:"in"===u,onClick:this.switchToIn},n("in")),(0,e.jsx)(i.Button,{className:"ml-1",active:"transition"===u,onClick:this.switchToTransition},n("transition")))),"in"===u&&(0,e.jsx)(Ne.SettingRow,null,(0,e.jsx)(za.AnimationSettingComponent,{effectSetting:c,oneByOneSetting:p,onSettingChange:this.onEffectSettingChange,previewEnabled:!0,supportAsOne:!0,supportOneByOne:a,onPreviewClicked:this.previewAnimation,formatMessage:n})),"transition"===u&&(0,e.jsx)(Ne.SettingRow,{flow:"wrap"},(0,e.jsx)(za.TransitionSetting,{transition:{type:l,direction:r},transitionLabel:n("view"),oneByOneEffect:p,onOneByOneChange:this.onSectionOneByOneEffectSettingChange,onTransitionChange:this.onTransitionSettingChange,onPreviewTransitionClicked:this.previewTransition,onPreviewOneByOneClicked:this.previewOneByOneInSection,onPreviewAsAWhoneClicked:this.previewTransitionAndOnebyOne,formatMessage:n})))}}const Na=(0,e.createSelector)([(t,e)=>{var o,i;const{layoutId:n,layoutItemId:a}=e,s=null===(i=null===(o=t.appStateInBuilder)||void 0===o?void 0:o.appConfig)||void 0===i?void 0:i.layouts[n].content[a];return null==s?void 0:s.setting},(t,o)=>{var i,n;const{layoutId:a,layoutItemId:s}=o,l=null===(n=null===(i=t.appStateInBuilder)||void 0===i?void 0:i.appConfig)||void 0===n?void 0:n.layouts[a].content[s];return(null==l?void 0:l.type)===e.LayoutItemType.Widget},(t,o)=>{var i,n,a,s;const{layoutId:l,layoutItemId:r}=o,d=null===(n=null===(i=t.appStateInBuilder)||void 0===i?void 0:i.appConfig)||void 0===n?void 0:n.layouts[l].content[r];if((null==d?void 0:d.type)===e.LayoutItemType.Widget){const o=null===(a=t.appStateInBuilder)||void 0===a?void 0:a.appConfig.widgets[d.widgetId];return(null===(s=null==o?void 0:o.manifest)||void 0===s?void 0:s.widgetType)===e.WidgetType.Layout}return!1},(t,o)=>{var i,n,a;const{layoutId:s,layoutItemId:l}=o,r=null===(n=null===(i=t.appStateInBuilder)||void 0===i?void 0:i.appConfig)||void 0===n?void 0:n.layouts[s].content[l];if((null==r?void 0:r.type)===e.LayoutItemType.Section)return null===(a=t.appStateInBuilder)||void 0===a?void 0:a.appConfig.sections[r.sectionId]}],((t,e,o,i)=>{var n,a;return{setting:t,isWidget:e,isLayoutWidget:o,isSection:null!=i,transitionType:null===(n=null==i?void 0:i.transition)||void 0===n?void 0:n.type,transitionDirection:null===(a=null==i?void 0:i.transition)||void 0===a?void 0:a.direction,sectionId:null==i?void 0:i.id}})),$a=e.ReactRedux.connect(Na)(ka);class Oa extends e.React.PureComponent{constructor(){super(...arguments),this.onBackgroundStyleChange=t=>{this.updateStyle("background",t)},this.updateBorder=t=>{this.updateStyle("border",t)},this.updateRadius=t=>{this.updateStyle("borderRadius",t)},this.updateShadow=t=>{this.updateStyle("boxShadow",t)},this.formatMessage=t=>this.props.formatMessage(t)}updateStyle(t,o){var i;const n=(0,e.Immutable)(null!==(i=this.props.style)&&void 0!==i?i:{});this.props.onStyleChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItemId},n.set(t,o))}allowCoverBackground(){var t,i,n;const{layoutId:a,layoutItemId:s}=this.props,l=(0,o.getAppConfigAction)().appConfig,r=l.layouts[a].content[s];if(r.type===e.LayoutItemType.Widget){const e=r.widgetId;return null===(n=null===(i=null===(t=l.widgets[e])||void 0===t?void 0:t.manifest)||void 0===i?void 0:i.properties)||void 0===n?void 0:n.coverLayoutBackground}return!1}render(){const{layoutId:t,layoutItemId:o}=this.props,i=this.props.style||{};return(0,e.jsx)("div",{className:"common-layout-item-setting"},(0,e.jsx)($a,{layoutId:t,layoutItemId:o,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage}),!this.props.isSection&&!this.allowCoverBackground()&&(0,e.jsx)(za.ThemeBackgroundSection,{background:i.background,onChange:this.onBackgroundStyleChange}),(0,e.jsx)(za.ThemeBorderSection,{border:i.border,borderRadius:i.borderRadius,onBorderChange:this.updateBorder,onBorderRasiusChange:this.updateRadius}),(0,e.jsx)(za.ThemeBoxShadowSection,{value:i.boxShadow,onChange:this.updateShadow}))}}class Ea extends e.React.PureComponent{constructor(){super(...arguments),this.updateRotation=t=>{var o;const i=(0,e.Immutable)(null!==(o=this.props.setting)&&void 0!==o?o:{});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItemId},i.setIn(["style","transform","rotate"],t))},this.formatMessage=t=>this.props.formatMessage(t)}render(){var t,o,n;const a=this.props.setting||{};return(0,e.jsx)(Ne.SettingRow,{label:this.formatMessage("rotation"),className:"rotation-setting"},(0,e.jsx)(i.NumericInput,{"aria-label":this.formatMessage("rotation"),value:null!==(n=null===(o=null===(t=a.style)||void 0===t?void 0:t.transform)||void 0===o?void 0:o.rotate)&&void 0!==n?n:0,min:-360,max:360,precision:2,onChange:this.updateRotation,formatter:t=>`${t}°`,parser:t=>t.replace("°",""),css:e.css`width: 72px;`,size:"sm"}))}}var Ba=p(2653),Da=p.n(Ba);const Fa=t=>{const o=window.SVG,{className:i}=t,n=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o}(t,["className"]),a=(0,e.classNames)("jimu-icon jimu-icon-component",i);return o?e.React.createElement(o,Object.assign({className:a,src:Da()},n)):e.React.createElement("svg",Object.assign({className:a},n))},Ha=[i.DistanceUnits.PIXEL,i.DistanceUnits.PERCENTAGE];class Va extends e.React.PureComponent{constructor(t){super(t),this.updateBBox=(t,e)=>{const o=this.props.layoutItem.bbox,{distance:n,unit:a}=e,l=o[t];let r=n.toFixed(2);if(s.utils.isPercentage(l)&&a===i.DistanceUnits.PIXEL){const e=this.getSizeOfContainer();null!=e&&(r="left"===t||"right"===t||"width"===t?Math.round(parseFloat(l)*e.width/100):Math.round(parseFloat(l)*e.height/100))}else if(!s.utils.isPercentage(l)&&a===i.DistanceUnits.PERCENTAGE){const e=this.getSizeOfContainer();null!=e&&(r="left"===t||"right"===t||"width"===t?(100*parseFloat(l)/e.width).toFixed(2):(100*parseFloat(l)/e.height).toFixed(2))}this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o.set(t,e.unit===i.DistanceUnits.PERCENTAGE?`${r}%`:`${r}px`))},this.flipLeftRight=s.utils.isRTL()}getStyle(){return e.css`
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
          width: auto;
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
    `}inputUnit(t){const{layoutItem:o,formatMessage:n}=this.props,a=i.utils.stringOfLinearUnit(o.bbox[t]);return(0,e.jsx)("div",{className:"pos-label",role:"group","aria-label":n(t)},(0,e.jsx)(za.InputUnit,{units:Ha,min:-1/0,max:1/0,value:a,onChange:e=>{this.updateBBox(t,e)}}))}getSizeOfContainer(){const t=this.querySelector(`div.fixed-layout[data-layoutid="${this.props.layoutId}"]`);return null==t?void 0:t.getBoundingClientRect()}getSizeOfItem(){const{layoutId:t,layoutItem:e}=this.props,o=this.querySelector(`div.exb-rnd[data-layoutid="${t}"][data-layoutitemid="${e.id}"]`);return null==o?void 0:o.getBoundingClientRect()}querySelector(t){var o;const i=document.querySelector(`iframe[name="${e.APP_FRAME_NAME_IN_BUILDER}"]`);return null!=i?(null!==(o=i.contentDocument)&&void 0!==o?o:i.contentWindow.document).querySelector(t):null}switchAuto(t,o,i){var n,a;const{layoutId:l,layoutItem:r}=this.props,d=null!==(n=r.setting)&&void 0!==n?n:(0,e.Immutable)({});let u=null!==(a=r.bbox)&&void 0!==a?a:(0,e.Immutable)({});if(i&&null==u[t]){const e=this.getSizeOfContainer(),o=this.getSizeOfItem();switch(t){case"left":u=u.set(t,s.utils.toRatio(o.left,e.width));break;case"right":u=u.set(t,s.utils.toRatio(e.width-o.right,e.width));break;case"top":u=u.set(t,s.utils.toRatio(o.top,e.height));break;case"bottom":u=u.set(t,s.utils.toRatio(e.height-o.bottom,e.height))}this.props.onPosChange({layoutId:l,layoutItemId:r.id},u)}this.props.onSettingChange({layoutId:l,layoutItemId:r.id},d.setIn(["autoProps",t],!i).setIn(["autoProps",o],i))}checkAutoProps(t){const e=Ni(this.props.layoutItem.bbox,t);return{leftAuto:null==e.left||t.hCenter&&"50%"===e.left,rightAuto:null==e.right||t.hCenter&&"50%"===e.left,topAuto:null==e.top||t.vCenter&&"50%"===e.top,bottomAuto:null==e.bottom||t.vCenter&&"50%"===e.top}}checkOrigin(t,e,o,i){let n=t,a=e,l=o,r=i;return t===e&&(n=s.utils.isRTL(),a=!n),o===i&&(l=!1,r=!0),{top:l,bottom:r,left:n,right:a}}allowChangeAutoProps(t){var e;const o=this.props.layoutItem.setting,i=null!==(e=null==o?void 0:o.autoProps)&&void 0!==e?e:{};return!(s.utils.getLayoutItemSizeMode(t,this.props.layoutItem.bbox,i)===s.LayoutItemSizeModes.Stretch||"width"===t&&(null==o?void 0:o.hCenter)||"height"===t&&(null==o?void 0:o.vCenter))}getOrigin(t,e,o,i){const{formatMessage:n}=this.props;return t||e?o||e?o||i?t||i?"":this.flipLeftRight?n("BR"):n("BL"):this.flipLeftRight?n("BL"):n("BR"):this.flipLeftRight?n("TL"):n("TR"):this.flipLeftRight?n("TR"):n("TL")}render(){const{layoutItem:t,widthMode:o,heightMode:n,formatMessage:l}=this.props;if(null==t)return null;const r=e.lodash.assign({},a,t.setting),{leftAuto:d,rightAuto:u,topAuto:c,bottomAuto:p}=this.checkAutoProps(r),{top:h,bottom:g,left:m,right:f}=this.checkOrigin(d,u,c,p),y=this.allowChangeAutoProps("width"),v=this.allowChangeAutoProps("height");return(0,e.jsx)("div",{css:this.getStyle(),className:"w-100"},(0,e.jsx)("div",{className:"position-setting rounded-lg"},(0,e.jsx)("div",{className:"content d-flex justify-content-center align-items-center"},(0,e.jsx)("div",{className:"d-flex w-half flex-column justify-content-center align-items-center"},(0,e.jsx)("div",{className:"d-flex w-100 justify-content-center align-items-center"},(0,e.jsx)(i.Tooltip,{placement:"bottom",title:y?l(d?"changeToCustom":"changeToAuto"):""},(0,e.jsx)("div",{className:(0,e.classNames)("from-left line-h flex-grow-1 flex-shrink-1",{"is-auto":d,"allow-change":y}),onClick:y?this.switchAuto.bind(this,"left","right",d):null})),d?null:this.inputUnit("left"))),(0,e.jsx)("div",{className:"d-flex h-100 flex-column justify-content-center align-items-center box-column"},(0,e.jsx)("div",{className:"d-flex h-half w-100 flex-column justify-content-center align-items-center"},(0,e.jsx)(i.Tooltip,{placement:"bottom",title:v?l(c?"changeToCustom":"changeToAuto"):""},(0,e.jsx)("div",{className:(0,e.classNames)("from-top line-v flex-grow-1 flex-shrink-1",{"is-auto":c,"allow-change":v}),onClick:v?this.switchAuto.bind(this,"top","bottom",c):null})),c?null:this.inputUnit("top")),(0,e.jsx)("div",{className:(0,e.classNames)("box-item rounded-lg",{stretch:o===s.LayoutItemSizeModes.Stretch||n===s.LayoutItemSizeModes.Stretch,"stretch-w":o===s.LayoutItemSizeModes.Stretch,"stretch-h":n===s.LayoutItemSizeModes.Stretch})},(0,e.jsx)("div",{className:"h-arrow"},(0,e.jsx)(Fa,{className:"arrow-icon"})),(0,e.jsx)("div",{className:"v-arrow"},(0,e.jsx)(Fa,{className:"arrow-icon",rotate:90}))),(0,e.jsx)("div",{className:"d-flex h-half w-100 flex-column justify-content-center align-items-center"},(0,e.jsx)(i.Tooltip,{placement:"bottom",title:v?l(p?"changeToCustom":"changeToAuto"):""},(0,e.jsx)("div",{className:(0,e.classNames)("from-bottom line-v flex-grow-1 flex-shrink-1",{"is-auto":p,"allow-change":v}),onClick:v?this.switchAuto.bind(this,"bottom","top",p):null})),p?null:this.inputUnit("bottom"))),(0,e.jsx)("div",{className:"d-flex w-half flex-column justify-content-center align-items-center"},(0,e.jsx)("div",{className:"d-flex w-100 justify-content-center align-items-center"},(0,e.jsx)(i.Tooltip,{placement:"bottom",title:y?l(u?"changeToCustom":"changeToAuto"):""},(0,e.jsx)("div",{className:(0,e.classNames)("from-right line-h flex-grow-1 flex-shrink-1",{"is-auto":u,"allow-change":y}),onClick:y?this.switchAuto.bind(this,"right","left",u):null})),u?null:this.inputUnit("right"))),(0,e.jsx)("div",{className:(0,e.classNames)("anchor top left",{selected:!m&&!h})}),(0,e.jsx)("div",{className:(0,e.classNames)("anchor top right",{selected:!f&&!h})}),(0,e.jsx)("div",{className:(0,e.classNames)("anchor bottom left",{selected:!m&&!g})}),(0,e.jsx)("div",{className:(0,e.classNames)("anchor bottom right",{selected:!g&&!f})}))),(0,e.jsx)("div",{className:"origin-tip d-flex justify-content-center align-item-center"},this.getOrigin(m,h,f,g)))}}const Wa=[s.LayoutItemSizeModes.Auto,s.LayoutItemSizeModes.Custom,s.LayoutItemSizeModes.Stretch],Ga=[s.LayoutItemSizeModes.Custom,s.LayoutItemSizeModes.Stretch],Za=[...[zi[1][1],zi[1][2],zi[1][3],zi[1][4],{seperator:!0},zi[0][1],zi[0][2],zi[0][3]].map((t=>Object.assign(Object.assign({},t),{title:t.title,label:null}))),[{icon:Oo()},zi[0][4],zi[0][5],zi[0][6],{seperator:!0},zi[0][7],zi[0][8],zi[0][9]]];class _a extends e.React.PureComponent{constructor(t){super(t),this.updateBBox=(t,e)=>{var o;let n=this.props.layoutItem.bbox;const{distance:a,unit:l}=e,r=n[t],d=this.getSizeOfContainer();let u,c=a.toFixed(2);if(s.utils.isPercentage(r)&&l===i.DistanceUnits.PIXEL?d&&(c="left"===t||"right"===t||"width"===t?Math.round(parseFloat(r)*d.width/100):Math.round(parseFloat(r)*d.height/100),u=c):s.utils.isPercentage(r)||l!==i.DistanceUnits.PERCENTAGE||(d&&(c="left"===t||"right"===t||"width"===t?(100*parseFloat(r)/d.width).toFixed(4):(100*parseFloat(r)/d.height).toFixed(4)),u=parseFloat(r)),u||l!==i.DistanceUnits.PERCENTAGE)u||l!==i.DistanceUnits.PIXEL||(u=a);else{const e="width"===t?d.width:d.height;u=Math.round(a*e/100)}if(n=n.set(t,l===i.DistanceUnits.PERCENTAGE?`${c}%`:`${c}px`),"ratio"===(null===(o=this.props.layoutItem.setting)||void 0===o?void 0:o.heightMode)){const e=s.utils.parseAspectRatio(this.props.layoutItem.setting.aspectRatio);if("width"===t){const t=u*e;if(s.utils.isPercentage(n.height)){const e=(100*t/d.height).toFixed(4);n=n.set("height",`${e}%`)}else n=n.set("height",`${Math.round(t)}px`)}else{const t=u/e;if(s.utils.isPercentage(n.width)){const e=(100*t/d.width).toFixed(4);n=n.set("width",`${e}%`)}else n=n.set("width",`${Math.round(t)}px`)}}this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},n)},this.updateMode=(t,o)=>{var i;const n=null!==(i=this.props.layoutItem.setting)&&void 0!==i?i:(0,e.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},n.setIn(["autoProps",t],o))},this.updateLockParent=t=>{let o=this.props.layoutItem.setting||(0,e.Immutable)({});o=o.set("lockParent",t.target.checked),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)},this.toggleHeightMode=()=>{let t=this.props.layoutItem.setting||(0,e.Immutable)({});const o="ratio"===t.heightMode?"fixed":"ratio";if(t=t.set("heightMode",o),"ratio"===o){const e=this.getSizeOfItem();e&&(t=t.set("aspectRatio",Number((e.height/e.width).toFixed(2))).setIn(["autoProps","height","AUTO"]))}this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},t)},this.updateAspectRatio=t=>{let o=this.props.layoutItem.setting||(0,e.Immutable)({});o=o.set("aspectRatio",t),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)},this.flipLeftRight=s.utils.isRTL(),this.state={enableToolbar:!1}}componentDidMount(){this.ref&&this.setState({enableToolbar:!0})}getSizeOfContainer(){const t=this.querySelector(`div.fixed-layout[data-layoutid="${this.props.layoutId}"]`);return t?t.getBoundingClientRect():null}getSizeOfItem(){const{layoutId:t,layoutItem:e}=this.props,o=this.querySelector(`div.exb-rnd[data-layoutid="${t}"][data-layoutitemid="${e.id}"]`);return o?o.getBoundingClientRect():null}querySelector(t){const o=document.querySelector(`iframe[name="${e.APP_FRAME_NAME_IN_BUILDER}"]`);return o?(o.contentDocument||o.contentWindow.document).querySelector(t):null}getStyle(){return e.css`
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
    `}render(){const{layoutItem:t,layoutId:o,formatMessage:n,isLockLayout:l,supportAutoSize:r}=this.props;if(!t)return null;this.itemSetting=e.lodash.assign({},a,t.setting);const d="ratio"===this.itemSetting.heightMode,c=s.utils.getLayoutItemSizeMode("width",t.bbox,this.itemSetting.autoProps),p=s.utils.getLayoutItemSizeMode("height",t.bbox,this.itemSetting.autoProps),h=t.bbox,g=(0,u.getTheme)(),m=e.css`width: 100px;`;return(0,e.jsx)("div",{className:"fixed-item-setting",css:this.getStyle(),ref:t=>this.ref=t},!l&&this.state.enableToolbar&&(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)(Ne.SettingSection,{className:"p-0 d-flex justify-content-center"},(0,e.jsx)(Ft,{layoutId:o,layoutItem:t,parentRef:this.ref,theme:g,tools:Za,formatMessage:this.props.formatMessage})),(0,e.jsx)(Ne.SettingSection,{role:"group","aria-label":`${n("size")} & ${n("position")}`,title:`${n("size")} & ${n("position")}`},(0,e.jsx)(Ne.SettingRow,{role:"group","aria-label":n("width"),label:n("width")},(0,e.jsx)("div",{css:m},(0,e.jsx)(za.SizeEditor,{label:"W",mode:c,sizeModes:r&&!d?Wa:Ga,value:i.utils.stringOfLinearUnit(h.width),onChange:t=>{this.updateBBox("width",t)},onModeChange:t=>{this.updateMode("width",t)}}))),c!==s.LayoutItemSizeModes.Auto&&(0,e.jsx)("div",null,(0,e.jsx)(i.Tooltip,{title:n("keepAspectRatio"),placement:"bottom"},(0,e.jsx)(i.Button,{size:"sm",type:"tertiary",className:"ml-1",icon:!0,onClick:this.toggleHeightMode,"aria-pressed":d},d?(0,e.jsx)(Le,{size:"s"}):(0,e.jsx)(Qn,{size:"s"})))),(0,e.jsx)(Ne.SettingRow,{role:"group","aria-label":n("height"),label:n("height"),className:(0,e.classNames)({"mt-0":c!==s.LayoutItemSizeModes.Auto})},(0,e.jsx)("div",{css:m},(0,e.jsx)(za.SizeEditor,{label:"H",mode:p,sizeModes:r?Wa:Ga,disabled:d,value:i.utils.stringOfLinearUnit(h.height),onChange:t=>{this.updateBBox("height",t)},onModeChange:t=>{this.updateMode("height",t)}}))),d&&(0,e.jsx)(Ne.SettingRow,{"aria-label":n("aspectRatio"),label:n("aspectRatio")},(0,e.jsx)(za.InputRatio,{value:this.itemSetting.aspectRatio,style:{width:100},onChange:this.updateAspectRatio})),(0,e.jsx)(Ne.SettingRow,null,(0,e.jsx)(Va,Object.assign({},this.props,{widthMode:c,heightMode:p}))),(0,e.jsx)(Ea,{layoutId:o,layoutItemId:t.id,setting:t.setting,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage})),(0,e.jsx)(Ne.SettingSection,null,(0,e.jsx)(Ne.SettingRow,{label:n("lockParent")},(0,e.jsx)(i.Switch,{"aria-label":n("lockParent"),checked:this.itemSetting.lockParent,onChange:this.updateLockParent})))),(t.type===e.LayoutItemType.Widget||t.sectionId)&&(0,e.jsx)(Oa,{layoutId:o,layoutItemId:t.id,style:this.props.style,isSection:t.type===e.LayoutItemType.Section,onStyleChange:this.props.onStyleChange,formatMessage:this.props.formatMessage,setting:t.setting||(0,e.Immutable)({}),onSettingChange:this.props.onSettingChange}))}}const Ua={gutter:0,style:{padding:{number:[0],unit:"px"},justifyContent:"flex-start",alignItems:"stretch",borderRadius:{number:[0],unit:i.DistanceUnits.PIXEL}}},Ya={lockParent:!0,heightMode:"auto",offsetX:0,offsetY:0},Xa=(0,e.createSelector)([(t,e)=>{var o;const{layoutItem:i}=e,n=null===(o=t.appRuntimeInfo)||void 0===o?void 0:o.selection;return!!n&&n.layoutId===e.layoutId&&n.layoutItemId===i.id},(t,o)=>{var n,a,s;const{layoutItem:l}=o;let r=[0,0,0,0];if(l.type===e.LayoutItemType.Widget){const e=l.widgetId,o=t.appConfig.widgets[e];o&&(r=i.styleUtils.expandStyleArray(null===(s=null===(a=null===(n=o.config)||void 0===n?void 0:n.style)||void 0===a?void 0:a.padding)||void 0===s?void 0:s.number))}return r[0]+r[2]},(t,o)=>{const{layoutItem:i}=o;let n=!0;if(i.type===e.LayoutItemType.Widget){const e=i.widgetId,o=t.appConfig.widgets[e];if(o){const e=Object.keys(o.layouts)[0],i=(a=o.layouts[e],s=t.browserSizeMode,l=t.appConfig.mainSizeMode,a?a[s]||a[l]:null),r=t.appConfig.layouts[i];r&&Object.keys(r.content||[]).length>0&&Object.keys(r.content||[]).some((t=>{if(!r.content[t].isPending)return n=!1,!0}))}}var a,s,l;return n}],((t,e,o)=>({selected:t,padding:e,isEmpty:o})));function qa(t){const e=parseFloat(null==t?void 0:t.width);return e>0?`${t.width}`.includes("px")?`${Math.round(e)}px`:`${Math.round(e)}%`:"100%"}const Ja={[e.ScreenTransitionType.Push]:p(8830),[e.ScreenTransitionType.Fade]:p(3167),[e.ScreenTransitionType.Cover]:p(8830)};class Qa extends e.React.PureComponent{constructor(){super(...arguments),this.onTypeChanged=(t,e,o)=>{o?this.props.onPanelTransitionTypeChange(e):this.props.onTransitionTypeChange(e)},this.updateFirstPanel=t=>{}}getStyle(){return e.css`
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
    `}createAnimationCard(t,o,n=!1){const{transitionType:a,panelTransitionType:s}=this.props;let l;return l=n?null!=s?s:e.ScreenTransitionType.Push:null!=a?a:e.ScreenTransitionType.Fade,(0,e.jsx)("div",{className:(0,e.classNames)("d-flex flex-column align-items-center card-item",{selected:t===l}),key:o,onClick:e=>{this.onTypeChanged(e,t,n)}},(0,e.jsx)("div",{className:"d-flex justify-content-center card-content"},(0,e.jsx)("div",{className:"card-image"},(0,e.jsx)(i.Icon,{className:"w-100",currentColor:!1,icon:Ja[t],size:72}))),(0,e.jsx)("div",{className:"card-name flex-grow-1 d-flex align-items-start mt-1"},(0,e.jsx)("span",{className:"text-center text-truncate card-name-content",title:this.props.formatMessage(t.toLowerCase())},this.props.formatMessage(t.toLowerCase()))))}render(){const{formatMessage:t}=this.props;return(0,e.jsx)("div",{className:"bg-light-300 border-color-gray-400",css:this.getStyle()},(0,e.jsx)(Ne.SettingSection,{title:t("mainStage")},(0,e.jsx)("div",{className:"animation-cards"},[e.ScreenTransitionType.Fade,e.ScreenTransitionType.Cover,e.ScreenTransitionType.Push].map(((t,e)=>this.createAnimationCard(t,e))))),(0,e.jsx)(Ne.SettingSection,{title:t("scrollingPanel")},(0,e.jsx)("div",{className:"animation-cards"},[e.ScreenTransitionType.Push,e.ScreenTransitionType.Fade].map(((t,e)=>this.createAnimationCard(t,e,!0))))),(0,e.jsx)(Ne.SettingSection,null,(0,e.jsx)(Ne.SettingRow,null,(0,e.jsx)(i.Checkbox,{onChange:this.updateFirstPanel,className:"mr-2"}),t("applyToFirstPanel"))))}}const Ka=p(9781);class ts extends e.React.PureComponent{constructor(t){super(t),this.sidePopperTrigger=e.React.createRef(),this.onTransitionTypeChange=t=>{const{screenGroupId:e}=this.props.layoutItem;let i=(0,o.getAppConfigAction)().appConfig;i=i.setIn(["screenGroups",e,"transitionType"],t),(0,o.getAppConfigAction)(i).exec()},this.onPanelTransitionTypeChange=t=>{const{screenGroupId:e}=this.props.layoutItem;let i=(0,o.getAppConfigAction)().appConfig;i=i.setIn(["screenGroups",e,"panelTransitionType"],t),(0,o.getAppConfigAction)(i).exec()},this.toggleSidePanel=()=>{this.setState({showSidePanel:!this.state.showSidePanel})},this.state={showSidePanel:!1}}getAnimBoxStyle(){return e.css`
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
    `}getSidePopperStyle(){return e.css`
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
    `}render(){var t,o,n,a,s;const{formatMessage:l}=this.props,r=null!==(t=this.props.transitionType)&&void 0!==t?t:e.ScreenTransitionType.Fade,d=null!==(o=this.props.panelTransitionType)&&void 0!==o?o:e.ScreenTransitionType.Push;return(0,e.jsx)(Ne.SettingSection,{title:l("transition")},(0,e.jsx)("div",{className:"anima-box d-flex justify-content-between align-items-center",css:this.getAnimBoxStyle()},(0,e.jsx)("div",{className:"img-tip d-flex justify-content-center align-items-center",onClick:this.toggleSidePanel},(0,e.jsx)("div",{className:"anim-icon first has-sibling"},(0,e.jsx)(i.Icon,{icon:null!==(n=Ja[r])&&void 0!==n?n:Ka,size:32})),(0,e.jsx)("div",{className:"diag-sep"}),(0,e.jsx)("div",{className:"anim-icon second has-sibling"},(0,e.jsx)(i.Icon,{icon:null!==(a=Ja[d])&&void 0!==a?a:Ka,size:32}))),(0,e.jsx)("div",{className:"d-flex flex-column justify-content-between align-items-end h-100"},(0,e.jsx)("div",{className:"anim-label"},(0,e.jsx)("span",null,l(r.toLowerCase())),(0,e.jsx)("span",{className:"mx-1"},"/"),(0,e.jsx)("span",null,l(d.toLowerCase()))),(0,e.jsx)("div",{className:"amin-icons w-100",ref:this.sidePopperTrigger},(0,e.jsx)(i.Button,{size:"sm",onClick:this.toggleSidePanel,className:"text-truncate",title:l("change")},l("change"))))),this.state.showSidePanel&&(0,e.jsx)(Ne.SidePopper,{isOpen:!0,title:l("transition"),css:this.getSidePopperStyle(),position:"right",toggle:this.toggleSidePanel,trigger:null===(s=this.sidePopperTrigger)||void 0===s?void 0:s.current},(0,e.jsx)("div",{className:"side-content"},(0,e.jsx)(Qa,{transitionType:r,panelTransitionType:d,onTransitionTypeChange:this.onTransitionTypeChange,onPanelTransitionTypeChange:this.onPanelTransitionTypeChange,formatMessage:l}))))}}const es=(0,e.createSelector)([(t,e)=>{const{screenGroupId:o}=e.layoutItem,{appConfig:i}=t.appStateInBuilder;return i.screenGroups[o].transitionType},(t,e)=>{const{screenGroupId:o}=e.layoutItem,{appConfig:i}=t.appStateInBuilder;return i.screenGroups[o].panelTransitionType}],((t,e)=>({transitionType:t,panelTransitionType:e}))),os=e.ReactRedux.connect(es)(ts),is={width:110};class ns extends e.React.PureComponent{constructor(){super(...arguments),this.updateWidth=t=>{let o=this.props.layoutItem.setting||(0,e.Immutable)({});o=o.set("width",i.utils.stringOfLinearUnit(t)),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)},this.updateBBoxWidth=t=>{let o=(0,e.Immutable)(this.props.layoutItem.bbox||{});o=o.set("width",i.utils.stringOfLinearUnit(t)),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)},this.updateHeight=t=>{let o=(0,e.Immutable)(this.props.layoutItem.bbox||{});o=o.set("height",i.utils.stringOfLinearUnit(t)),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)},this.updateOffsetX=t=>{const o=this.props.layoutItem.setting||(0,e.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o.set("offsetX",t))},this.updateOffsetY=t=>{const o=this.props.layoutItem.setting||(0,e.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o.set("offsetY",t))},this.updateHeightMode=t=>{let o=this.props.layoutItem.setting||(0,e.Immutable)({});o=o.set("heightMode",t===s.LayoutItemSizeModes.Custom?"fixed":"auto"),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)}}updateFloatingArea(t){const o=this.props.layoutItem.setting||(0,e.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o.set("floatingArea",t))}getStyle(){return e.css`
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
    `}render(){const{layoutId:t,layoutItem:o,formatMessage:n,isLockLayout:a}=this.props;if(!o)return null;if(o.type===e.LayoutItemType.ScreenGroup)return(0,e.jsx)(os,Object.assign({},this.props));this.itemSetting=e.lodash.assign({},Ya,o.setting);const l=o.bbox;return(0,e.jsx)("div",{className:"flow-item-setting",css:this.getStyle()},!a&&(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)(Ne.SettingSection,{title:`${n("position")} & ${n("size")}`},(0,e.jsx)("div",{className:"floating-position d-flex"},(0,e.jsx)("div",{className:"floating-area-chooser"},(0,e.jsx)("div",{className:"content"},(0,e.jsx)("div",{className:(0,e.classNames)("top-left",{selected:1===this.itemSetting.floatingArea}),onClick:this.updateFloatingArea.bind(this,1)}),(0,e.jsx)("div",{className:(0,e.classNames)("top-center",{selected:2===this.itemSetting.floatingArea}),onClick:this.updateFloatingArea.bind(this,2)}),(0,e.jsx)("div",{className:(0,e.classNames)("top-right",{selected:3===this.itemSetting.floatingArea}),onClick:this.updateFloatingArea.bind(this,3)}),(0,e.jsx)("div",{className:(0,e.classNames)("middle-left",{selected:4===this.itemSetting.floatingArea}),onClick:this.updateFloatingArea.bind(this,4)}),(0,e.jsx)("div",{className:(0,e.classNames)("middle-center",{selected:5===this.itemSetting.floatingArea}),onClick:this.updateFloatingArea.bind(this,5)}),(0,e.jsx)("div",{className:(0,e.classNames)("middle-right",{selected:6===this.itemSetting.floatingArea}),onClick:this.updateFloatingArea.bind(this,6)}),(0,e.jsx)("div",{className:(0,e.classNames)("bottom-left",{selected:7===this.itemSetting.floatingArea}),onClick:this.updateFloatingArea.bind(this,7)}),(0,e.jsx)("div",{className:(0,e.classNames)("bottom-center",{selected:8===this.itemSetting.floatingArea}),onClick:this.updateFloatingArea.bind(this,8)}),(0,e.jsx)("div",{className:(0,e.classNames)("bottom-right",{selected:9===this.itemSetting.floatingArea}),onClick:this.updateFloatingArea.bind(this,9)}))),(0,e.jsx)("div",{className:"d-flex flex-grow-1 flex-column justify-content-between align-items-end"},(0,e.jsx)("div",{className:"d-flex align-items-center",css:e.css`width: 110px`},(0,e.jsx)("span",{className:"mr-2"},"W"),(0,e.jsx)(za.SizeEditor,{label:"W",mode:s.LayoutItemSizeModes.Custom,disableModeSelect:!0,value:null==l?void 0:l.width,onChange:this.updateBBoxWidth})),(0,e.jsx)("div",{className:"d-flex align-items-center",css:e.css`width: 110px`},(0,e.jsx)("span",{className:"mr-2"},"H"),(0,e.jsx)(za.SizeEditor,{label:"H",mode:s.LayoutItemSizeModes.Custom,disableModeSelect:!0,value:null==l?void 0:l.height,onChange:this.updateHeight})))),(0,e.jsx)(Ne.SettingRow,{label:n("offsetX")},(0,e.jsx)(i.NumericInput,{style:is,value:this.itemSetting.offsetX,onChange:this.updateOffsetX,size:"sm"})),(0,e.jsx)(Ne.SettingRow,{label:n("offsetY")},(0,e.jsx)(i.NumericInput,{style:is,value:this.itemSetting.offsetY,onChange:this.updateOffsetY,size:"sm"})))),(o.type===e.LayoutItemType.Widget||o.sectionId)&&(0,e.jsx)(Oa,{layoutId:t,layoutItemId:o.id,isSection:!1,style:this.props.style,onStyleChange:this.props.onStyleChange,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage}))}}const as={width:110},ss=[s.LayoutItemSizeModes.Auto,s.LayoutItemSizeModes.Custom],ls=[i.DistanceUnits.PIXEL];class rs extends e.React.PureComponent{constructor(){super(...arguments),this.updateWidth=t=>{let o=this.props.layoutItem.setting||(0,e.Immutable)({});o=o.set("width",i.utils.stringOfLinearUnit(t)),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)},this.updateBBoxWidth=t=>{let o=(0,e.Immutable)(this.props.layoutItem.bbox||{});o=o.set("width",i.utils.stringOfLinearUnit(t)),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)},this.updateHeight=t=>{let o=(0,e.Immutable)(this.props.layoutItem.bbox||{});o=o.set("height",i.utils.stringOfLinearUnit(t)),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)},this.updateOffsetX=t=>{const o=this.props.layoutItem.setting||(0,e.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o.set("offsetX",t))},this.updateOffsetY=t=>{const o=this.props.layoutItem.setting||(0,e.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o.set("offsetY",t))},this.updateHeightMode=t=>{var o,i,n;const{layoutItem:a}=this.props;let l=null!==(o=a.setting)&&void 0!==o?o:(0,e.Immutable)({});if(l=l.set("heightMode",t===s.LayoutItemSizeModes.Custom?"fixed":"auto"),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},l),!(null===(i=a.bbox)||void 0===i?void 0:i.height)){const t=this.getSizeOfItem();if(t){let o=(0,e.Immutable)(null!==(n=a.bbox)&&void 0!==n?n:{});o=o.set("height",`${Math.round(t.height)}px`),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)}}}}getSizeOfItem(){const{layoutId:t,layoutItem:e}=this.props,o=this.querySelector(`div.exb-rnd[data-layoutid="${t}"][data-layoutitemid="${e.id}"]`);return o?o.getBoundingClientRect():null}querySelector(t){const o=document.querySelector(`iframe[name="${e.APP_FRAME_NAME_IN_BUILDER}"]`);return o?(o.contentDocument||o.contentWindow.document).querySelector(t):null}updateFloatingArea(t){const o=this.props.layoutItem.setting||(0,e.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o.set("floatingArea",t))}render(){var t,o;const{layoutId:n,layoutItem:a,formatMessage:l,isLockLayout:r}=this.props;if(!a)return null;if(a.type===e.LayoutItemType.ScreenGroup)return(0,e.jsx)(os,Object.assign({},this.props));if(this.itemSetting=e.lodash.assign({},Ya,a.setting),this.itemSetting.isFloating)return(0,e.jsx)(ns,Object.assign({},this.props));const d=a.bbox,u=i.utils.stringOfLinearUnit(qa(this.itemSetting)),c=i.utils.stringOfLinearUnit(parseFloat(null===(t=a.bbox)||void 0===t?void 0:t.height)>0?null===(o=a.bbox)||void 0===o?void 0:o.height:100),p="auto"===this.itemSetting.heightMode||s.utils.isPercentage(null==d?void 0:d.height);return(0,e.jsx)("div",{className:"flow-item-setting"},!r&&(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)(Ne.SettingSection,{title:l("size")},(0,e.jsx)(Ne.SettingRow,{label:l("width")},(0,e.jsx)("div",{style:as},(0,e.jsx)(za.SizeEditor,{label:"W",mode:s.LayoutItemSizeModes.Custom,disableModeSelect:!0,value:u,onChange:this.updateWidth}))),(0,e.jsx)(Ne.SettingRow,{label:l("height")},(0,e.jsx)("div",{style:as},(0,e.jsx)(za.SizeEditor,{label:"H",mode:p?s.LayoutItemSizeModes.Auto:s.LayoutItemSizeModes.Custom,sizeModes:ss,availableUnits:ls,disableModeSelect:!1,value:c,onChange:this.updateHeight,onModeChange:this.updateHeightMode})))),(0,e.jsx)(Ne.SettingSection,{title:l("position")},(0,e.jsx)(Ne.SettingRow,{label:l("offsetX")},(0,e.jsx)(i.NumericInput,{style:as,value:this.itemSetting.offsetX,onChange:this.updateOffsetX,size:"sm"})),(0,e.jsx)(Ne.SettingRow,{label:l("offsetY")},(0,e.jsx)(i.NumericInput,{style:as,value:this.itemSetting.offsetY,onChange:this.updateOffsetY,size:"sm"})))),(a.type===e.LayoutItemType.Widget||a.sectionId)&&(0,e.jsx)(Oa,{layoutId:n,layoutItemId:a.id,isSection:!1,style:this.props.style,onStyleChange:this.props.onStyleChange,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage}))}}const ds=e.css`width: 100px;`,us=[s.LayoutItemSizeModes.Stretch,s.LayoutItemSizeModes.Custom],cs=[s.LayoutItemSizeModes.Auto,s.LayoutItemSizeModes.Stretch,s.LayoutItemSizeModes.Custom],ps=[s.LayoutItemSizeModes.Stretch,s.LayoutItemSizeModes.Custom],hs=[i.DistanceUnits.PIXEL,i.DistanceUnits.PERCENTAGE],gs=[i.DistanceUnits.PIXEL];class ms extends e.React.PureComponent{constructor(){super(...arguments),this.updateBBox=(t,e)=>{var o;let n=this.props.layoutItem.bbox;const{distance:a,unit:l}=e,r=n[t],d=this.getSizeOfContainer();let u,c=a.toFixed(2);if(s.utils.isPercentage(r)&&l===i.DistanceUnits.PIXEL?d&&(c="left"===t||"right"===t||"width"===t?Math.round(parseFloat(r)*d.width/100):Math.round(parseFloat(r)*d.height/100),u=c):s.utils.isPercentage(r)||l!==i.DistanceUnits.PERCENTAGE||(d&&(c="left"===t||"right"===t||"width"===t?(100*parseFloat(r)/d.width).toFixed(4):(100*parseFloat(r)/d.height).toFixed(4)),u=parseFloat(r)),u||l!==i.DistanceUnits.PERCENTAGE)u||l!==i.DistanceUnits.PIXEL||(u=a);else{const e="width"===t?d.width:d.height;u=Math.round(a*e/100)}if(n=n.set(t,l===i.DistanceUnits.PERCENTAGE?`${c}%`:`${c}px`),"ratio"===(null===(o=this.props.layoutItem.setting)||void 0===o?void 0:o.heightMode)){const e=this.props.layoutItem.setting.aspectRatio;if("width"===t){const t=u*e;if(s.utils.isPercentage(n.height)){const e=(100*t/d.height).toFixed(4);n=n.set("height",`${e}%`)}else n=n.set("height",`${Math.round(t)}px`)}else{const t=u/e;if(s.utils.isPercentage(n.width)){const e=(100*t/d.width).toFixed(4);n=n.set("width",`${e}%`)}else n=n.set("width",`${Math.round(t)}px`)}}this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},n)},this.toggleHeightMode=()=>{let t=this.props.layoutItem.setting||(0,e.Immutable)({});const o="ratio"===t.heightMode?"fixed":"ratio";if(t=t.set("heightMode",o),"ratio"===o){const e=this.getSizeOfItem();e&&(t=t.set("aspectRatio",Number((e.height/e.width).toFixed(2))))}else{let t=this.props.layoutItem.bbox;const e=this.getSizeOfItem();if(s.utils.isPercentage(t.width)){const o=this.getSizeOfContainer();t=t.set("width",`${(100*e.width/o.width).toFixed(4)}%`)}else t=t.set("width",`${Math.round(e.width)}px`);t=t.set("height",`${Math.round(e.height)}px`),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},t)}this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},t)},this.updateAlignSelf=t=>{let o=this.props.layoutItem.setting||(0,e.Immutable)({});o=o.setIn(["style","alignSelf"],t.target.value),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)},this.updateHeightMode=t=>{const o=this.props.layoutItem.setting||(0,e.Immutable)({});let i=(0,e.Immutable)(this.props.layoutItem.bbox);if(t===s.LayoutItemSizeModes.Custom&&isNaN(parseFloat(i.height))){const t=this.getSizeOfItem();i=i.set("height",`${Math.round(t.height)}px`),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i)}this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o.setIn(["autoProps","height"],t))},this.updateWidthMode=t=>{const o=this.props.layoutItem.setting||(0,e.Immutable)({});let i=(0,e.Immutable)(this.props.layoutItem.bbox);if(t===s.LayoutItemSizeModes.Custom&&isNaN(parseFloat(i.width))){const t=this.getSizeOfItem();i=i.set("width",`${Math.round(t.width)}px`),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i)}this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o.setIn(["autoProps","width"],t))},this.updateAspectRatio=t=>{let o=this.props.layoutItem.setting||(0,e.Immutable)({});o=o.set("aspectRatio",t),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)},this.formatMessage=t=>this.props.formatMessage(t)}getSizeOfContainer(){const t=this.querySelector(`div.column-layout[data-layoutid="${this.props.layoutId}"]`);return t?t.getBoundingClientRect():null}getSizeOfItem(){const{layoutId:t,layoutItem:e}=this.props,o=this.querySelector(`div.exb-rnd[data-layoutid="${t}"][data-layoutitemid="${e.id}"]`);return o?o.getBoundingClientRect():null}querySelector(t){const o=document.querySelector(`iframe[name="${e.APP_FRAME_NAME_IN_BUILDER}"]`);return o?(o.contentDocument||o.contentWindow.document).querySelector(t):null}getStyle(){return e.css`
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
    `}render(){var t,o,n,a;const{layoutId:l,layoutItem:r,isLockLayout:d,supportAutoSize:u}=this.props;if(!r)return null;const c=r.setting||{},p=c.style||{},h=r.bbox||{},g=(null===(t=c.autoProps)||void 0===t?void 0:t.width)!==s.LayoutItemSizeModes.Custom,m=null!==(n=null===(o=c.autoProps)||void 0===o?void 0:o.height)&&void 0!==n?n:s.LayoutItemSizeModes.Custom,f="ratio"===c.heightMode;return(0,e.jsx)("div",{className:"column-item-setting",css:this.getStyle()},!d&&(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)(Ne.SettingSection,{role:"group",title:this.formatMessage("size"),"aria-label":this.formatMessage("size")},(0,e.jsx)(Ne.SettingRow,{role:"group",label:this.formatMessage("width"),"aria-label":this.formatMessage("width")},(0,e.jsx)("div",{css:ds},(0,e.jsx)(za.SizeEditor,{label:"W",mode:g?s.LayoutItemSizeModes.Stretch:s.LayoutItemSizeModes.Custom,sizeModes:us,value:null==h?void 0:h.width,availableUnits:hs,onChange:t=>{this.updateBBox("width",t)},onModeChange:this.updateWidthMode}))),(0,e.jsx)(Ne.SettingRow,{className:"mt-0",label:(0,e.jsx)(i.Tooltip,{title:this.formatMessage("keepAspectRatio"),placement:"bottom"},(0,e.jsx)(i.Button,{size:"sm",type:"tertiary",className:"ml-1",icon:!0,onClick:this.toggleHeightMode,"aria-pressed":f},f?(0,e.jsx)(Le,{size:"s"}):(0,e.jsx)(Qn,{size:"s"})))}),(0,e.jsx)(Ne.SettingRow,{role:"group",className:"mt-0",label:this.formatMessage("height"),"aria-label":this.formatMessage("height")},(0,e.jsx)("div",{css:ds},(0,e.jsx)(za.SizeEditor,{label:"H",mode:m||s.LayoutItemSizeModes.Custom,sizeModes:u?cs:ps,value:h.height,availableUnits:gs,onChange:t=>{this.updateBBox("height",t)},onModeChange:this.updateHeightMode,disabled:f}))),f&&(0,e.jsx)(Ne.SettingRow,{label:this.formatMessage("aspectRatio"),"aria-label":this.formatMessage("aspectRatio")},(0,e.jsx)(za.InputRatio,{value:c.aspectRatio,style:{width:100},onChange:this.updateAspectRatio})),!g&&(0,e.jsx)(Ne.SettingRow,{label:this.formatMessage("align")},(0,e.jsx)(i.Select,{"aria-label":this.formatMessage("align"),className:"align-select",value:null!==(a=p.alignSelf)&&void 0!==a?a:"flex-start",onChange:this.updateAlignSelf,css:ds},(0,e.jsx)("option",{value:"flex-start"},this.formatMessage("start")),(0,e.jsx)("option",{value:"flex-end"},this.formatMessage("end")),(0,e.jsx)("option",{value:"center"},this.formatMessage("center")))),(0,e.jsx)(Ea,{layoutId:l,layoutItemId:r.id,setting:c,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage}))),(r.type===e.LayoutItemType.Widget||r.sectionId)&&(0,e.jsx)(Oa,{layoutId:l,layoutItemId:r.id,isSection:r.type===e.LayoutItemType.Section,style:this.props.style,onStyleChange:this.props.onStyleChange,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage}))}}const fs=e.css`width: 72px`,ys=e.css`width: 100px;`,vs=[s.LayoutItemSizeModes.Auto,s.LayoutItemSizeModes.Stretch,s.LayoutItemSizeModes.Custom],Is=[s.LayoutItemSizeModes.Stretch,s.LayoutItemSizeModes.Custom];class xs extends e.React.PureComponent{constructor(){super(...arguments),this.handleAlignChange=t=>{this.updateStyle("alignSelf",t.target.value)},this.handleHeightChange=t=>{let e=this.props.layoutItem.bbox;const{distance:o,unit:n}=t,a=e.height,l=this.getSizeOfContainer();let r=o.toFixed(2);s.utils.isPercentage(a)&&n===i.DistanceUnits.PIXEL?null!=l&&(r=Math.round(parseFloat(a)*l.height/100)):s.utils.isPercentage(a)||n!==i.DistanceUnits.PERCENTAGE||null!=l&&(r=(100*parseFloat(a)/l.height).toFixed(4)),e=e.set("height",n===i.DistanceUnits.PERCENTAGE?`${r}%`:`${r}px`),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},e)},this.handleHeightModeChange=t=>{var o;const i=null!==(o=this.props.layoutItem.setting)&&void 0!==o?o:(0,e.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i.setIn(["autoProps","height"],t))},this.updateAspectSetting=t=>{var o;let i=null!==(o=this.props.layoutItem.setting)&&void 0!==o?o:(0,e.Immutable)({});if("fit"===i.heightMode&&(i=i.setIn(["autoProps","height"],s.LayoutItemSizeModes.Stretch)),i=i.set("heightMode",t),"ratio"===t){const t=this.getSizeOfItem();null!=t&&(i=i.set("aspectRatio",Number((t.height/t.width).toFixed(2))))}else{const t=this.props.layoutItem.bbox,e=this.getSizeOfItem();if(s.utils.isPercentage(t.height)){const o=this.getSizeOfContainer();this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},t.set("height",`${(100*e.height/o.height).toFixed(4)}%`))}else this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},t.set("height",`${Math.round(e.height)}px`))}this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i)},this.handleAspectRatioChange=t=>{var o;let i=null!==(o=this.props.layoutItem.setting)&&void 0!==o?o:(0,e.Immutable)({});i=i.set("aspectRatio",t),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i)},this.handleOffsetXChange=t=>{var o;const i=null!==(o=this.props.layoutItem.setting)&&void 0!==o?o:(0,e.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i.set("offsetX",t))},this.handleOffsetYChange=t=>{var o;const i=null!==(o=this.props.layoutItem.setting)&&void 0!==o?o:(0,e.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i.set("offsetY",t))},this.formatMessage=t=>this.props.formatMessage(t)}updateStyle(t,o){var i,n;const{layoutItem:a}=this.props,s=(0,e.Immutable)(null!==(n=null===(i=null==a?void 0:a.setting)||void 0===i?void 0:i.style)&&void 0!==n?n:{});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},{style:s.set(t,o)})}getSizeOfContainer(){const t=this.querySelector(`div.row-layout[data-layoutid="${this.props.layoutId}"]`);return null!=t?t.getBoundingClientRect():null}getSizeOfItem(){const{layoutId:t,layoutItem:e}=this.props,o=this.querySelector(`div.exb-rnd[data-layoutid="${t}"][data-layoutitemid="${e.id}"] > div.layout-item-content`);return null!=o?o.getBoundingClientRect():null}querySelector(t){var o;const i=document.querySelector(`iframe[name="${e.APP_FRAME_NAME_IN_BUILDER}"]`);return null!=i?(null!==(o=i.contentDocument)&&void 0!==o?o:i.contentWindow.document).querySelector(t):null}getStyle(){return e.css`
      .align-select {
        .dropdown-button,
        .dropdown-button:hover {
          height: 26px;
        }
      }
    `}render(){var t,o,n,a;const{layoutId:l,layoutItem:r,isLockLayout:d,supportAutoSize:u}=this.props;if(null==r)return null;const c=e.lodash.assign({},rn,r.setting),p=r.bbox,h=null!==(t=c.style)&&void 0!==t?t:{},g=null!==(n=null===(o=c.autoProps)||void 0===o?void 0:o.height)&&void 0!==n?n:s.LayoutItemSizeModes.Stretch,m="ratio"===c.heightMode;return(0,e.jsx)("div",{className:"row-item-setting",css:this.getStyle()},!d&&(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)(Ne.SettingSection,{role:"group",title:this.formatMessage("size"),"aria-label":this.formatMessage("size")},(0,e.jsx)(Ne.SettingRow,{role:"group",label:this.formatMessage("height"),"aria-label":this.formatMessage("height")},(0,e.jsx)("div",{css:ys},(0,e.jsx)(za.SizeEditor,{label:"H",mode:g,sizeModes:u?vs:Is,value:i.utils.stringOfLinearUnit(p.height),onChange:this.handleHeightChange,onModeChange:this.handleHeightModeChange,disabled:m}))),(0,e.jsx)(Ne.SettingRow,null,(0,e.jsx)(i.Checkbox,{"aria-label":this.formatMessage("keepAspectRatio"),checked:m,onChange:t=>{this.updateAspectSetting(t.target.checked?"ratio":"fixed")},className:"mr-2"}),this.formatMessage("keepAspectRatio")),m&&(0,e.jsx)(Ne.SettingRow,{label:this.formatMessage("aspectRatio"),"aria-label":this.formatMessage("aspectRatio")},(0,e.jsx)(za.InputRatio,{value:c.aspectRatio,style:{width:100},onChange:this.handleAspectRatioChange})),g!==s.LayoutItemSizeModes.Stretch&&(0,e.jsx)(Ne.SettingRow,{label:this.formatMessage("align")},(0,e.jsx)(i.Select,{"aria-label":this.formatMessage("align"),className:"align-select",css:ys,value:null!==(a=h.alignSelf)&&void 0!==a?a:"flex-start",onChange:this.handleAlignChange},(0,e.jsx)("option",{value:"flex-start"},this.formatMessage("T")),(0,e.jsx)("option",{value:"flex-end"},this.formatMessage("B")),(0,e.jsx)("option",{value:"center"},this.formatMessage("center"))))),(0,e.jsx)(Ne.SettingSection,{role:"group",title:this.formatMessage("position"),"aria-label":this.formatMessage("position")},(0,e.jsx)(Ea,{layoutId:l,layoutItemId:r.id,setting:r.setting,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage}),(0,e.jsx)(Ne.SettingRow,{label:this.formatMessage("offsetX"),"aria-label":this.formatMessage("offsetX")},(0,e.jsx)(i.NumericInput,{css:fs,value:c.offsetX,onChange:this.handleOffsetXChange,size:"sm"})),(0,e.jsx)(Ne.SettingRow,{label:this.formatMessage("offsetY"),"aria-label":this.formatMessage("offsetY")},(0,e.jsx)(i.NumericInput,{css:fs,value:c.offsetY,onChange:this.handleOffsetYChange,size:"sm"})))),(r.type===e.LayoutItemType.Widget||null!=r.sectionId)&&(0,e.jsx)(Oa,{layoutId:l,layoutItemId:r.id,isSection:r.type===e.LayoutItemType.Section,style:this.props.style,onStyleChange:this.props.onStyleChange,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage}))}}var bs=p(8866),ws=p.n(bs);const Ss=t=>{const o=window.SVG,{className:i}=t,n=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o}(t,["className"]),a=(0,e.classNames)("jimu-icon jimu-icon-component",i);return o?e.React.createElement(o,Object.assign({className:a,src:ws()},n)):e.React.createElement("svg",Object.assign({className:a},n))};function Cs(t){var n;const{layoutItem:a,layoutId:s}=t,l=e.hooks.useTranslation(i.defaultMessages),[r,d]=e.React.useState(null!==(n=a.label)&&void 0!==n?n:""),u=e.ReactRedux.useSelector((t=>{const o=t.appStateInBuilder.appConfig.layouts[s];return!!a.parent&&o.content[a.parent].gridType===e.GridItemType.Tab})),c=e.ReactRedux.useSelector((t=>{const o=t.appStateInBuilder.appConfig.layouts[s].content[a.id];return!u||o.gridType!==e.GridItemType.Row&&o.gridType!==e.GridItemType.Column?"":o.label}));e.React.useEffect((()=>{d(c)}),[c]);const p=e.React.useCallback((t=>{const e=(0,o.getAppConfigAction)().appConfig.setIn(["layouts",s,"content",a.id,"label"],""!==t?t:void 0);(0,o.getAppConfigAction)(e).exec()}),[s,a.id]),h=e.React.useCallback((t=>{d(t.target.value)}),[]);if(!a)return null;const g=a;return!u||g.gridType!==e.GridItemType.Row&&g.gridType!==e.GridItemType.Column?(0,e.jsx)("div",{className:"grid-item-setting h-100"},g.gridType===e.GridItemType.Plain?(0,e.jsx)(Oa,{layoutId:s,layoutItemId:a.id,style:t.style,isSection:a.type===e.LayoutItemType.Section,onStyleChange:t.onStyleChange,formatMessage:t.formatMessage,setting:a.setting||(0,e.Immutable)({}),onSettingChange:t.onSettingChange}):(0,e.jsx)("div",{className:"h-100 align-items-center justify-content-center d-flex flex-column",css:e.css`color: var(--dark-500)`},(0,e.jsx)("div",null,(0,e.jsx)(Ss,{size:48})),(0,e.jsx)("div",{className:"mt-3"},l("noConfigNeeded")))):(0,e.jsx)("div",{className:"grid-item-setting h-100"},(0,e.jsx)(Ne.SettingSection,null,(0,e.jsx)(Ne.SettingRow,{label:l("label"),flow:"wrap"},(0,e.jsx)(i.TextInput,{size:"sm",value:r,onChange:h,onAcceptValue:p,className:"w-100"}))))}const Rs={width:110};class Ts extends e.React.PureComponent{constructor(){super(...arguments),this.updateSpace=t=>{const{layoutId:i,setting:n}=this.props,a=(0,e.Immutable)(n||{});isNaN(t.distance)||(0,o.getAppConfigAction)().editLayoutSetting({layoutId:i},a.set("gutter",t.distance)).exec()},this.updatePadding=t=>{const{layoutId:i,setting:n}=this.props,a=(0,e.Immutable)(n||{});(0,o.getAppConfigAction)().editLayoutSetting({layoutId:i},a.setIn(["style","padding"],t)).exec()}}render(){const{formatMessage:t}=this.props,o=this.props.setting||{},i=o.style||{},n=o.gutter>=0?o.gutter:Ua.gutter;return(0,e.jsx)(Ne.SettingSection,{role:"group",className:"flow-layout-setting",title:t("layout"),"aria-label":t("layout")},(0,e.jsx)(Ne.SettingRow,{label:t("gap")},(0,e.jsx)(za.InputUnit,{style:Rs,"aria-label":t("gap"),min:0,value:{distance:n,unit:void 0},onChange:this.updateSpace})),(0,e.jsx)(Ne.SettingRow,{flow:"wrap",role:"group",label:t("padding"),"aria-label":t("padding")},(0,e.jsx)(za.Padding,{value:i.padding,onChange:this.updatePadding})))}}const As=(0,e.createSelector)(((t,e)=>{var o,i,n,a;return null===(a=null===(n=null===(i=null===(o=t.appStateInBuilder)||void 0===o?void 0:o.appConfig)||void 0===i?void 0:i.layouts)||void 0===n?void 0:n[e.layoutId])||void 0===a?void 0:a.setting}),(t=>({setting:t}))),Ms=e.ReactRedux.connect(As)(Ts);var Ps=p(1362);const Ls=[i.DistanceUnits.PIXEL];class js extends e.React.PureComponent{constructor(){super(...arguments),this.handlePaddingChange=t=>{const e=(0,o.getAppConfigAction)();this.getLayoutIds().forEach((o=>{e.editLayoutSetting({layoutId:o},{style:{padding:t}})})),e.exec()},this.handleSettingChange=(t,e)=>{const i=(0,o.getAppConfigAction)();this.getLayoutIds().forEach((o=>{i.editLayoutSetting({layoutId:o},{[t]:e})})),i.exec()}}getLayoutIds(){const t=[],{layouts:e}=this.props;return null!=e&&Object.keys(e).forEach((o=>{t.push(e[o])})),t}render(){var t,o,n,a,s;const{layoutSetting:l,formatMessage:r,appTheme:d}=this.props;return(0,e.jsx)("div",{className:"flexbox-layout-setting"},(0,e.jsx)(Ne.SettingSection,{role:"group",title:r("layout"),"aria-label":r("layout")},(0,e.jsx)(Ne.SettingRow,{label:r("padding"),role:"group","aria-label":r("padding"),flow:"wrap"},(0,e.jsx)(za.Padding,{value:null===(t=l.style)||void 0===t?void 0:t.padding,onChange:this.handlePaddingChange})),(0,e.jsx)(Ne.SettingRow,{label:r("paddingColor")},(0,e.jsx)(Ps.ThemeColorPicker,{"aria-label":r("paddingColor"),specificTheme:d,value:l.paddingColor,onChange:t=>{this.handleSettingChange("paddingColor",t)}})),(0,e.jsx)(Ne.SettingRow,{label:r("gap"),truncateLabel:!0},(0,e.jsx)(Ps.ThemeColorPicker,{"aria-label":r("gap"),specificTheme:d,value:null!==(o=l.splitColor)&&void 0!==o?o:"var(--light-500)",onChange:t=>{this.handleSettingChange("splitColor",t)}}),(0,e.jsx)(za.InputUnit,{css:e.css`width: 74px !important;`,className:"ml-2",units:Ls,min:1,max:100,value:{distance:null!==(n=l.splitSize)&&void 0!==n?n:8,unit:i.DistanceUnits.PIXEL},onChange:t=>{this.handleSettingChange("splitSize",t.distance)}}))),(0,e.jsx)(Ne.SettingSection,{role:"group",title:r("gridItems"),"aria-label":r("gridItems")},(0,e.jsx)(Ne.SettingRow,{label:r("allowResize")},(0,e.jsx)(i.Switch,{"aria-label":r("allowResize"),checked:null===(a=l.resizable)||void 0===a||a,onChange:t=>{this.handleSettingChange("resizable",t.target.checked)}})),(0,e.jsx)(Ne.SettingRow,{label:r("allowExpansion")},(0,e.jsx)(i.Switch,{"aria-label":r("allowExpansion"),checked:null===(s=l.expandable)||void 0===s||s,onChange:t=>{this.handleSettingChange("expandable",t.target.checked)}}))))}}const zs=(0,e.createSelector)(((t,e)=>{var o,i;const n=t.appStateInBuilder;if(!n)return{};const a=e.layouts[n.browserSizeMode]||e.layouts[n.appConfig.mainSizeMode],{layouts:s}=n.appConfig;return null!==(i=null===(o=s[a])||void 0===o?void 0:o.setting)&&void 0!==i?i:{}}),(t=>({layoutSetting:t}))),ks=e.ReactRedux.connect(zs)(js);class Ns{constructor(){this.id="flow-layout-transformer",this.layoutType=e.LayoutType.FlowLayout}transformLayout(t,o,i){if(o!==i&&i===e.BrowserSizeMode.Small){let o=(0,e.Immutable)(t);return(t.order||[]).forEach((t=>{o=o.setIn(["content",t,"setting","heightMode"],"auto")})),o}return t}transformLayoutItem(t,e,o,i,n,a){return{index:e,item:t}}}class $s{constructor(){this.id="row-layout-transformer",this.layoutType=e.LayoutType.RowLayout}transformLayout(t,o,i){var n,a;if(o===i)return t;let s=(0,e.Immutable)(t);if(i===e.BrowserSizeMode.Small){const o=function(t,o,i){var n;const a=function(t,o){var i;const n=t.layouts[o];return(null===(i=null==n?void 0:n.parent)||void 0===i?void 0:i.type)===e.LayoutParentType.Widget?n.parent.id:null}(t,i),s=function(t,e,o){var i,n,a,s,l,r,d;const u=t.widgets[o];if(null!=u){const p=N(),h=t.mainSizeMode,g=u.layouts.DEFAULT[p],m=u.layouts.DEFAULT[h],f=(c=null!==(l=null===(s=null===(a=null===(n=(null!==(i=t.layouts[g])&&void 0!==i?i:t.layouts[m]).setting)||void 0===n?void 0:n.style)||void 0===a?void 0:a.padding)||void 0===s?void 0:s.number)&&void 0!==l?l:[0])&&0!==c.length?1===c.length?[c[0],c[0],c[0],c[0]]:2===c.length?[c[0],c[1],c[0],c[1]]:3===c.length?[c[0],c[1],c[2],0]:[c[0],c[1],c[2],c[3]]:[0,0,0,0],y=null!==(d=null===(r=null==e?void 0:e[o])||void 0===r?void 0:r.height)&&void 0!==d?d:0;let v=f[0],I=f[2];return L(v)&&(v=z(v,y)),L(I)&&(I=z(I,y)),y-v-I}var c;return 0}(t,o,a);if(s>0){const e=null!==(n=t.layouts[i].order)&&void 0!==n?n:[],o={};return e.forEach((e=>{const n=t.layouts[i].content[e];o[e]=function(t,e){var o,i,n,a;const s=null!==(o=e.setting)&&void 0!==o?o:{},l=$("height",e.bbox,s.autoProps);if(l!==C.Custom)return{height:l===C.Stretch?t:null,setting:{autoProps:{height:l}}};let r;if("ratio"===s.heightMode)r={setting:{heightMode:"ratio",aspectRatio:null!==(i=s.aspectRatio)&&void 0!==i?i:1,autoProps:{height:C.Custom}}};else{let o=null!==(a=null===(n=e.bbox)||void 0===n?void 0:n.height)&&void 0!==a?a:t;o=L(o)?z(o,t):parseInt(o),r={height:o,setting:{heightMode:"fixed",autoProps:{height:C.Custom}}}}return r}(s,n)})),o}return null}(function(){const t=(0,e.getAppStore)().getState();return window.jimuConfig.isBuilder?null==t?void 0:t.appStateInBuilder:t}().appConfig,null===(n=window.runtimeInfo)||void 0===n?void 0:n.widgets,t.id);let i=0;Object.keys(null!==(a=t.content)&&void 0!==a?a:{}).sort(((e,o)=>parseInt(t.content[e].bbox.left,10)-parseInt(t.content[o].bbox.left,10))).forEach((n=>{var a,l,r;const d=t.content[n];if(!d.isPending){if(s=s.setIn(["content",n,"bbox"],{left:i*un,width:un,height:null!==(l=null===(a=d.bbox)||void 0===a?void 0:a.height)&&void 0!==l?l:"auto"}),null!=o){const t=null!==(r=d.setting)&&void 0!==r?r:(0,e.Immutable)({});s=s.setIn(["content",n,"bbox","height"],o[n].height).setIn(["content",n,"setting"],t.merge(o[n].setting))}i+=1}}))}return s}transformLayoutItem(t,e,o,i,n,a){return{item:t,index:e}}}class Os{constructor(){this.id="grid-layout-transformer",this.layoutType=e.LayoutType.GridLayout,this.transformLayout=(t,o,i)=>{var n,a;if(o!==i&&i===e.BrowserSizeMode.Small){let o=(0,e.Immutable)(t);const i=null===(n=t.setting)||void 0===n?void 0:n.rootItem;if(i&&(null===(a=t.content)||void 0===a?void 0:a[i])){const n=[],a=t.content[i];o=this.collectItem(t,i,a.children,n),n.length>0&&(o=o.setIn(["content",i,"gridType"],e.GridItemType.Tab),o=o.setIn(["content",i,"children"],n))}return o}return t},this.collectItem=(t,o,i,n)=>{let a=t;return null==i||i.forEach((i=>{var s;if(!t.content[i].isPending){const l=t.content[i];l.gridType!==e.GridItemType.Column&&l.gridType!==e.GridItemType.Row&&l.gridType!==e.GridItemType.Tab?(n.push(i),a=a.setIn(["content",i,"parent"],o)):(null===(s=l.children)||void 0===s?void 0:s.length)>0&&(a=this.collectItem(a,o,l.children,n))}})),a}}transformLayoutItem(t,e,o,i,n,a){return{index:e,item:t}}}const Es=10;var Bs=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};function Ds(t){const{isFirst:o,isLast:i,menuItems:n}=t,a=Bs(t,["isFirst","isLast","menuItems"]),[s,l]=e.React.useState(n),r=e.ReactRedux.useSelector((t=>{var e,o,i;return null!==(i=null===(o=null===(e=t.appConfig)||void 0===e?void 0:e.forBuilderAttributes)||void 0===o?void 0:o.lockLayout)&&void 0!==i&&i}));return e.React.useEffect((()=>{const e=n.filter((e=>{var o;return"function"==typeof e.visible?e.visible({layoutId:t.layoutId,layoutItem:t.layoutItem,clientRect:null}):null===(o=e.visible)||void 0===o||o}));l(e)}),[o,i,n,t.layoutId,t.layoutItem,r]),e.React.createElement(Wt,Object.assign({menuItems:s},a))}var Fs=function(t,e,o,i){return new(o||(o=Promise))((function(n,a){function s(t){try{r(i.next(t))}catch(t){a(t)}}function l(t){try{r(i.throw(t))}catch(t){a(t)}}function r(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(s,l)}r((i=i.apply(t,e||[])).next())}))};function Hs(t,i,n){return Fs(this,void 0,void 0,(function*(){const{appConfig:a,newWidgetId:l}=yield o.templateUtils.createWidgetFromTemplate((0,o.getAppConfigAction)().appConfig,n,null,{},!0),r=(0,o.getAppConfigAction)(a),d=(r.appConfig.layouts[t].order||[]).indexOf(i),u=(0,e.Immutable)({id:`${s.utils.getMaximumId(r.appConfig.layouts[t])+1}`,type:e.LayoutItemType.Widget,widgetId:l}),c=r.addItemIntoLayout(t,u,d>=0?d+1:NaN);return r.setParentOfContent(c,!0),(0,e.getAppStore)().dispatch(e.appActions.layoutChanged(r.appConfig,Object.assign(Object.assign({},c),{autoScroll:!0}))),c}))}function Vs(t,i,n){return Fs(this,void 0,void 0,(function*(){const{appConfig:a,newScreenGroupId:l}=yield o.templateUtils.createScreenGroupFromTemplate((0,o.getAppConfigAction)().appConfig,n,null,{}),r=(0,o.getAppConfigAction)(a),d=(r.appConfig.layouts[t].order||[]).indexOf(i),u=(0,e.Immutable)({id:`${s.utils.getMaximumId(r.appConfig.layouts[t])+1}`,type:e.LayoutItemType.ScreenGroup,screenGroupId:l}),c=r.addItemIntoLayout(t,u,d>=0?d+1:NaN);return r.setParentOfContent(c,!0),(0,e.getAppStore)().dispatch(e.appActions.layoutChanged(r.appConfig,Object.assign(Object.assign({},c),{autoScroll:!0}))),c}))}function Ws(t,e){var i;const{layoutId:n,layoutItemId:a}=e,s=(0,o.getAppConfigAction)(t),l=s.appConfig.layouts[n],r=l.order,d=[].concat(r),u=r.indexOf(a);let c=r.length-1;for(let t=u+1;t<r.length;t++){const e=r[t];if(!(null===(i=l.content[e].setting)||void 0===i?void 0:i.isFloating)){c=t;break}}return d.splice(c+1,0,a),d.splice(u,1),s.editLayoutOrder({layoutId:n},d),s.appConfig}function Gs(t,e){var i;const{layoutId:n,layoutItemId:a}=e,s=(0,o.getAppConfigAction)(t),l=s.appConfig.layouts[n],r=l.order,d=[].concat(r),u=r.indexOf(a);let c=0;for(let t=u-1;t>=0;t--){const e=r[t];if(!(null===(i=l.content[e].setting)||void 0===i?void 0:i.isFloating)){c=t;break}}return d.splice(u,1),d.splice(c,0,a),s.editLayoutOrder({layoutId:n},d),s.appConfig}var Zs=p(8683),_s=p.n(Zs),Us=p(760),Ys=p.n(Us),Xs=p(6009),qs=p.n(Xs);class Js extends e.React.PureComponent{constructor(t){super(t),this.state={isResizing:!1,dh:0,showBlockTemplatePopup:!1,showScreenTemplatePopup:!1,referenceElem:null},this.onResizeStart=(t,e,o)=>{const{padding:i}=this.props;this.minHeight=16+i,this.initHeight=o,this.setState({dh:0,isResizing:!0})},this.onResizing=(t,e,o,i,n)=>{let a=n;n<0&&this.initHeight+n<this.minHeight&&(a=this.minHeight-this.initHeight),this.setState({dh:a,isResizing:!0})},this.onResizeEnd=(t,i,n,a,s,l)=>{const{layoutId:r,layoutItem:d}=this.props;let u=s;s<0&&this.initHeight+s<this.minHeight&&(u=this.minHeight-this.initHeight);const c=(0,e.Immutable)(d.bbox||{}).set("height",Math.round(this.initHeight+u));(0,o.getAppConfigAction)().editLayoutItemBBox({layoutId:r,layoutItemId:d.id},c).exec(),this.setState({isResizing:!1,dh:0})},this.toggleBlockTemplatePopup=()=>{(0,e.getAppStore)().getState().browserSizeMode!==e.BrowserSizeMode.Small?this.setState({showBlockTemplatePopup:!this.state.showBlockTemplatePopup}):o.appBuilderSync.letBuilderShowPopperSelector("template",{templateMethod:"getBlockTemplates",onSelect:this.onTemplateBlockSelected})},this.toggleScreenTemplatePopup=()=>{(0,e.getAppStore)().getState().browserSizeMode!==e.BrowserSizeMode.Small?this.setState({showScreenTemplatePopup:!this.state.showScreenTemplatePopup}):o.appBuilderSync.letBuilderShowPopperSelector("template",{templateMethod:"getScreenGroupTemplates",onSelect:this.onTemplateScreenGroupSelected})},this.removeLayoutItem=()=>{const{layoutId:t,layoutItemId:e}=this.props;(0,o.getAppConfigAction)().removeLayoutItem({layoutId:t,layoutItemId:e},!0).exec()},this.moveLayoutItemUp=()=>{const{layoutId:t,layoutItemId:e}=this.props,i=Gs((0,o.getAppConfigAction)().appConfig,{layoutId:t,layoutItemId:e});(0,o.getAppConfigAction)(i).exec()},this.moveLayoutItemDown=()=>{const{layoutId:t,layoutItemId:e}=this.props,i=Ws((0,o.getAppConfigAction)().appConfig,{layoutId:t,layoutItemId:e});(0,o.getAppConfigAction)(i).exec()},this.switchSetting=()=>{const{layoutId:t,layoutItemId:o,selected:i}=this.props;i||(0,e.getAppStore)().dispatch(e.appActions.selectionChanged({layoutId:t,layoutItemId:o}))},this.onTemplateBlockSelected=t=>{Hs(this.props.layoutId,this.props.layoutItemId,t),this.setState({showBlockTemplatePopup:!1})},this.onTemplateScreenGroupSelected=t=>{Vs(this.props.layoutId,this.props.layoutItemId,t),this.setState({showScreenTemplatePopup:!1})},this.fakeTopLayouts=(0,e.Immutable)({[e.BrowserSizeMode.Large]:`${this.props.layoutId}_${this.props.layoutItemId}_tlarge`,[e.BrowserSizeMode.Medium]:`${this.props.layoutId}_${this.props.layoutItemId}_tmedium`,[e.BrowserSizeMode.Small]:`${this.props.layoutId}_${this.props.layoutItemId}_tsmall`}),this.fakeBottomLayouts=(0,e.Immutable)({[e.BrowserSizeMode.Large]:`${this.props.layoutId}_${this.props.layoutItemId}_blarge`,[e.BrowserSizeMode.Medium]:`${this.props.layoutId}_${this.props.layoutItemId}_bmedium`,[e.BrowserSizeMode.Small]:`${this.props.layoutId}_${this.props.layoutItemId}_bsmall`}),this.minHeight=0,this.contextMenus=[{icon:_s(),title:this.props.formatMessage("insertABlock"),onClick:this.toggleBlockTemplatePopup,visible:()=>!ht()},{icon:Ys(),title:this.props.formatMessage("insertAScreenGroup"),onClick:this.toggleScreenTemplatePopup,visible:()=>!ht()&&(0,e.getAppStore)().getState().browserSizeMode!==e.BrowserSizeMode.Small},bt,{icon:ct(),title:this.props.formatMessage("setting"),onClick:this.switchSetting},{icon:it(),title:this.props.formatMessage("dragToMove",{label:gt(this.props.layoutItem)}),className:"tool-drag-handler",onClick:()=>{},visible:()=>!ht()},{icon:qs(),onClick:this.moveLayoutItemUp,title:this.props.formatMessage("moveup"),visible:()=>!this.props.isFirst&&!ht()},{icon:qs(),rotate:180,onClick:this.moveLayoutItemDown,title:this.props.formatMessage("movedown"),visible:()=>!this.props.isLast&&!ht()},{icon:K(),title:this.props.formatMessage("delete"),onClick:this.removeLayoutItem,visible:()=>!ht()}]}calHeight(t){if(this.state.isResizing)return`${this.initHeight+this.state.dh}px`;const e=function(t,e){const o=j(t.bbox||{},"height");if(!o||L(o))return"auto";switch(e.heightMode){case"auto":return"auto";case"fixed":return o}}(this.props.layoutItem,t);return this.autoHeight="auto"===e,e}createContextMenu(){const{builderTheme:t}=this.pageContext,{layoutId:o,layoutItem:i,isFirst:n,isLast:a}=this.props;return(0,e.jsx)(Ds,{layoutId:o,layoutItem:i,builderTheme:t,positionType:"center",size:28,iconSize:16,className:"widget-context-menu",menuItems:this.contextMenus,isFirst:n,isLast:a},(0,e.jsx)("div",{ref:t=>{this.reference=t},css:e.css`position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;`}),this.state.showBlockTemplatePopup&&(0,e.jsx)(Ne.TemplateSelector,{templates:(0,Hi.getBlockTemplates)(),referenceElement:this.reference,onItemSelect:this.onTemplateBlockSelected,onClose:this.toggleBlockTemplatePopup}),this.state.showScreenTemplatePopup&&(0,e.jsx)(Ne.TemplateSelector,{templates:(0,Hi.getScreenGroupTemplates)(),referenceElement:this.reference,onItemSelect:this.onTemplateScreenGroupSelected,onClose:this.toggleScreenTemplatePopup}))}getStyle(t){const{builderTheme:o}=this.pageContext,{index:i,gutter:n}=this.props,a=s.utils.isRTL()?-1:1;return[e.css`
        margin-top: ${i>0?`${n}px`:"unset"};
        width: ${qa(t)};
        height: ${this.calHeight(t)};
        flex-shrink: 0;
        position: relative;
        cursor: default;
        & > div.widget-context-menu {
          display: none;
        }

        &:hover > div.widget-context-menu {
          display: flex;
        }

        .template-popup {
          background-color: ${o.colors.black};
        }

        .tool-drag-handler {
          cursor: move;
        }
      `,t.offsetX||t.offsetY?`translate(${(t.offsetX||0)*a}px, ${t.offsetY||0}px)`:null]}render(){const{layoutId:t,layoutItem:o,draggable:i,selectable:n,isEmpty:a,selected:l}=this.props;if(!o||a)return null;const r=e.lodash.assign({},Ya,o.setting),d=(0,e.classNames)("flow-layout-item d-flex",{selected:l}),u=s.utils.handleOnebyOneAnimation(this.props);return(0,e.jsx)(s.PageContext.Consumer,null,(a=>{this.pageContext=a;const[s,l]=this.getStyle(r);return(0,e.jsx)(xo,Object.assign({id:`${t}_block_${o.id}`,css:s,style:{transform:l},layoutId:t,layoutItemId:o.id,onResizeStart:this.onResizeStart,onResizing:this.onResizing,onResizeEnd:this.onResizeEnd,left:!1,right:!1,top:!1,bottom:"fixed"===r.heightMode,restrict:!0,useDragHandler:!0,draggable:i,selectable:n,forbidContextMenu:!0,forbidToolbar:!0,isBlock:!0,className:d,autoHeight:this.autoHeight},u),!a.viewOnly&&this.createContextMenu())}))}}const Qs=e.ReactRedux.connect(Xa)(Js);class Ks extends e.React.PureComponent{constructor(){super(...arguments),this.state={isResizing:!1,dx:0,dy:0,dw:0,dh:0},this.onResizeStart=(t,e,o)=>{this.setState({isResizing:!0}),this.initHeight=o,this.initWidth=e},this.onResizing=(t,e,o,i,n)=>{this.setState({dx:e,dy:o,dw:i,dh:n})},this.onResizeEnd=(t,e,i,n,a,s)=>{const{layoutId:l,layoutItem:r}=this.props;let d=r.bbox;d=d.set("height",Math.round(parseInt(d.height,10)+a)).set("width",Math.round(parseInt(d.width,10)+n)).set("left",Math.round(parseInt(d.left,10)+e)).set("top",Math.round(parseInt(d.top,10)+i)).set("bottom",Math.round(parseInt(d.top,10)-a+i)),(0,o.getAppConfigAction)().editLayoutItemBBox({layoutId:l,layoutItemId:r.id},d).exec(),this.setState({isResizing:!1,dx:0,dy:0,dw:0,dh:0})}}calculatePosition(){const{layoutItem:t}=this.props,{dh:o,dw:i,isResizing:n}=this.state;return function(t,o={}){var i,n,a;const s=t.setting,l=null!==(i=null==s?void 0:s.floatingArea)&&void 0!==i?i:1,r=`${null!==(n=null==s?void 0:s.offsetX)&&void 0!==n?n:0}px`,d=`${null!==(a=null==s?void 0:s.offsetY)&&void 0!==a?a:0}px`,{dh:u,dw:c,initWidth:p,initHeight:h,isResizing:g}=o,m=k()?`translateX(calc(50% + ${r}))`:`translateX(calc(-50% + ${r}))`,f={};switch(l){case 1:f.left=r,f.top=d,f.transform=null;break;case 2:f.left="50%",f.top=d,f.transform=m;break;case 3:f.right=r,f.top=d,f.transform=null;break;case 4:f.left=r,f.top="50%",f.transform=`translateY(calc(-50% + ${d}))`;break;case 5:f.left="50%",f.top="50%",f.transform=`${m} translateY(calc(-50% + ${d}))`;break;case 6:f.right=r,f.top="50%",f.transform=`translateY(calc(-50% + ${d}))`;break;case 7:f.left=r,f.bottom=d,f.transform=null;break;case 8:f.left="50%",f.bottom=d,f.transform=m;break;case 9:f.right=r,f.bottom=d,f.transform=null}return e.css`
    position: fixed;
    z-index: 1;
    width: ${g?`${p+c}px`:j(t.bbox,"width")};
    height: ${g?`${h+u}px`:j(t.bbox,"height")};
    left: ${f.left};
    right: ${f.right};
    top: ${f.top};
    bottom: ${f.bottom};
    transform: ${f.transform};
  `}(t,{dh:o,dw:i,isResizing:n,initWidth:this.initWidth,initHeight:this.initHeight})}render(){const{layoutId:t,layoutItem:o,selectable:i,selected:n}=this.props;if(!o)return null;const a=(0,e.classNames)("flexbox-layout-item floating d-flex",{selected:n});return(0,e.jsx)(s.PageContext.Consumer,null,(n=>(this.pageContext=n,(0,e.jsx)(xo,{css:this.calculatePosition(),layoutId:t,layoutItemId:o.id,onResizeStart:this.onResizeStart,onResizing:this.onResizing,onResizeEnd:this.onResizeEnd,restrict:!0,draggable:!1,selectable:i,className:a}))))}}const tl=e.ReactRedux.connect(s.utils.mapStateToLayoutItemProps)(Ks);function el(t){const{formatMessage:n,activeScreenIndex:a,total:s,layoutId:l,layoutItemId:r,screenGroupId:d,browserSizeMode:c,hasPanel:p}=t,h=!e.ReactRedux.useSelector((t=>{var o,i,n;const a=null!==(i=null===(o=t.appConfig.forBuilderAttributes)||void 0===o?void 0:o.lockLayout)&&void 0!==i&&i;return(null===(n=t.appRuntimeInfo)||void 0===n?void 0:n.appMode)===e.AppMode.Design&&!a}))||c!==e.BrowserSizeMode.Large,[m,f]=e.React.useState(!1),y=e.React.useRef(),v=e.React.useCallback((()=>{f(!1)}),[]),I=e.React.useCallback((()=>{const t=(0,u.getTheme2)();return e.css`
      border: none;

      .tooltip {
        color: ${t.colors.black};
        background-color: ${t.colors.palette.light[600]};
        border-color: ${t.colors.palette.light[300]};
      }
    `}),[]),x=e.React.useCallback((t=>{let i=(0,o.getAppConfigAction)();const n=i.appConfig.layouts[l].content[r].screenGroupId;o.templateUtils.createScreenFromTemplate(i.appConfig,t,null,{}).then((({appConfig:t,newScreenId:a})=>{var s,l;const r=t.screenGroups[n].screens[0],d=t.screens[r],u=Object.keys(d.main.layout);let c=t.screens[a];c=c.set("parent",n);const p=t.mainSizeMode;i=(0,o.getAppConfigAction)(t),u.forEach((t=>{var e,o;if(null==c.main.layout[t]){const e=i.createLayoutForSizeModeForOneLayout(t,p,c.main.layout);c=c.setIn(["main","layout",t],e.id),i.clearLayoutStructure(e.id,t,!0),i.buildLayoutStructure(e.id,t,!0)}else i.clearLayoutStructure(c.main.layout[t],t,!0),i.buildLayoutStructure(c.main.layout[t],t,!0);if(c.panel&&null==c.panel.layout[t]){const e=i.createLayoutForSizeModeForOneLayout(t,p,c.panel.layout);c=c.setIn(["panel","layout",t],e.id),i.clearLayoutStructure(e.id,t,!0),i.buildLayoutStructure(e.id,t,!0)}else(null===(o=null===(e=c.panel)||void 0===e?void 0:e.layout)||void 0===o?void 0:o[t])&&(i.clearLayoutStructure(c.panel.layout[t],t,!0),i.buildLayoutStructure(c.panel.layout[t],t,!0))}));const h=(t=(t=i.appConfig).setIn(["screenGroups",n,"screens"],[].concat(t.screenGroups[n].screens,a)).setIn(["screens",a],c)).screens[a];Object.values(h.main.layout).forEach((o=>{t=t.setIn(["layouts",o,"parent"],{id:a,type:e.LayoutParentType.Screen})})),Object.values(null!==(l=null===(s=h.panel)||void 0===s?void 0:s.layout)&&void 0!==l?l:{}).forEach((o=>{t=t.setIn(["layouts",o,"parent"],{id:a,type:e.LayoutParentType.Screen})})),(0,e.getAppStore)().dispatch(e.appActions.appConfigChanged(t)),(0,e.getAppStore)().dispatch(e.appActions.screenGroupNavInfoChanged(n,t.screenGroups[n].screens.length-1))})),v()}),[v,l,r]),b=e.React.useCallback((()=>{if(p)f(!m);else{const t=(0,Hi.getScreenTemplates)().find((t=>"nopanel"===t.name));t&&x(t)}}),[m,p,x]),w=e.React.useCallback((()=>{(0,e.getAppStore)().dispatch(e.appActions.screenGroupNavInfoChanged(d,a-1))}),[d,a]),S=e.React.useCallback((()=>{(0,e.getAppStore)().dispatch(e.appActions.screenGroupNavInfoChanged(d,a+1))}),[d,a]),C=e.React.useCallback((()=>{(0,o.getAppConfigAction)().removeScreenByIndex(a,d).exec(),a===s-1&&(0,e.getAppStore)().dispatch(e.appActions.screenGroupNavInfoChanged(d,a-1))}),[a,s,d]),R=e.React.useCallback((()=>{let t=(0,o.getAppConfigAction)();const i=t.duplicateScreenByIndex(a,d);let n=t.appConfig;n=n.setIn(["screens",i.id,"parent"],d),t=(0,o.getAppConfigAction)(n),t.exec(),(0,e.getAppStore)().dispatch(e.appActions.screenGroupNavInfoChanged(d,a+1))}),[a,d]);return(0,e.jsx)("div",{className:"menu-bar d-flex justify-content-between align-items-center"},(0,e.jsx)("div",{className:"d-flex justify-content-start align-items-center"},(0,e.jsx)("div",{className:"info ml-2"},n("screen"),": ",a+1," / ",s),(0,e.jsx)(g,{title:0===a?"":n("previous"),placement:"bottom",css:I()},(0,e.jsx)(i.Button,{icon:!0,className:"rounded-circle",disabled:0===a,type:"tertiary",onClick:w},(0,e.jsx)(i.Icon,{icon:qs(),size:16}))),(0,e.jsx)(g,{title:a===s-1?"":n("next"),placement:"bottom",css:I()},(0,e.jsx)(i.Button,{icon:!0,className:"rounded-circle",disabled:a===s-1,type:"tertiary",onClick:S},(0,e.jsx)(i.Icon,{icon:qs(),rotate:180,size:16}))),!h&&(0,e.jsx)("div",{ref:y},(0,e.jsx)(g,{title:n("newScreen"),placement:"bottom",css:I()},(0,e.jsx)(i.Button,{icon:!0,onClick:b,className:"rounded-circle",type:"tertiary","data-testid":"addBtn"},(0,e.jsx)(i.Icon,{icon:fe(),size:16})))),!h&&m&&(0,e.jsx)(Ne.TemplateSelector,{templates:(0,Hi.getScreenTemplates)(),referenceElement:y.current,onItemSelect:x,onClose:v}),!h&&(0,e.jsx)(g,{title:n("duplicateScreen"),placement:"bottom",css:I()},(0,e.jsx)(i.Button,{icon:!0,className:"rounded-circle",type:"tertiary",onClick:R,"data-testid":"duplicateBtn"},(0,e.jsx)(i.Icon,{icon:ve(),size:16}))),!h&&s>1&&(0,e.jsx)(g,{title:n("deleteScreen"),placement:"bottom",css:I()},(0,e.jsx)(i.Button,{icon:!0,className:"rounded-circle",type:"tertiary",onClick:C,"data-testid":"removeBtn"},(0,e.jsx)(i.Icon,{icon:K(),size:16})))))}const ol=2;function il(){const t=[0];for(let e=1;e<=100;e++)t.push(e/100);return t}function nl(t){switch(t){case e.ScreenTriggerType.Top:return`0% 0% -${100-ol}% 0%`;case e.ScreenTriggerType.Bottom:return`-${100-ol}% 0% -2px 0%`;case e.ScreenTriggerType.Upper:return`-${100/3-ol/2}% 0% -${200/3-ol/2}% 0%`;case e.ScreenTriggerType.Lower:return`-${200/3-ol/2}% 0% -${100/3-ol/2}% 0%`;default:return}}const al=.33,sl=.25;function ll(t,o,n,a,s,l,r,d,u){const{side:c,size:p,offset:h,background:g,overlay:m=!0,padding:f}=t.panel||{},y=(0,e.getAppStore)().getState().appContext.isRTL?"left"===c?"-":"":"right"===c?"-":"",v=i.styleUtils.toBackgroundEmotionStyle(null!=g?g:{}),I=parseFloat(s);if(u){const t=!m;return e.css`
      width: 100%;
      background: transparent;
      pointer-events: none;
      position: relative;
      opacity: ${r===e.ScreenTransitionType.Fade?a?"1":"0.5":null};
      min-height: ${d===e.ScreenTransitionType.Cover?`${o}px`:null};
      padding-top: ${d!==e.ScreenTransitionType.Fade&&t?`${Math.round(o*al)}px`:null};

      &.top-spacing > .panel-content {
        /* margin-top: ${Math.round(o*al)}px; */
      }

      .panel-content {
        width: 100%;
        ${m?"":v};
        /* margin-top: ${r===e.ScreenTransitionType.Push?"${Math.round(viewHeight * SCREEN_RATIO_IN_SMALL_SIZE)}px":"unset"}; */

        > .layout, > .layout-wrapper > .layout {
          pointer-events: auto;
          ${m?v:""};
          min-height: ${Math.round(o*sl)}px;
          padding: ${i.styleUtils.toCSSPadding(f)};
        }

        > .layout-wrapper > .column-layout > .trail-container,
        > .column-layout > .trail-container {
          overflow-y: hidden;
        }

        > .layout-wrapper > .placeholder-btn {
          pointer-events: auto;
          ${m?v:""};
        }

        .panel-spacing {
          height: ${Math.round(o*I/100)}px;
        }
      }

      .panel-content-placeholder {
        width: 1px;
        min-height: ${o}px;
      }

      body:not(.design-mode) & {
        min-height: ${d===e.ScreenTransitionType.Cover?"100vh":null};
        min-height: ${d===e.ScreenTransitionType.Cover?"calc(var(--vh) * 100)":null};
        padding-top: ${d!==e.ScreenTransitionType.Fade&&t?100*al+"vh":null};
        padding-top: ${d!==e.ScreenTransitionType.Fade&&t?`calc(var(--vh) * ${100*al})`:null};

        > .layout, > .layout-wrapper > .layout {
          min-height: ${Math.round(100*sl)}vh;
          min-height: calc(var(--vh) * ${Math.round(100*sl)});
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
    `}return e.css`
    width: 100%;
    background: transparent;
    pointer-events: none;
    display: flex;
    flex-direction: ${"right"===c?"row-reverse":"row"};
    justify-content: ${"center"===c&&m?"center":"flex-start"};
    position: relative;
    opacity: ${r===e.ScreenTransitionType.Fade?a?"1":"0.5":null};

    &.top-spacing > .panel-content {
      /* margin-top: ${Math.round(2*o/3)}px; */
    }

    .panel-content {
      width: ${p};
      transform: ${m&&Math.abs(parseFloat(h))>0?`translateX(${y}${h})`:null};
      flex: 0 auto;
      min-height: ${l?`${o}px`:"unset"};
      ${m?"":v};

      > .layout,
      > .layout-wrapper > .layout {
        pointer-events: auto;
        ${m?v:""};
        min-height: ${Math.round(o*sl)}px;
        padding: ${i.styleUtils.toCSSPadding(f)};
      }

      > .layout-wrapper > .column-layout > .trail-container,
      > .column-layout > .trail-container {
        overflow-y: hidden;
      }

      > .layout-wrapper > .placeholder-btn {
        pointer-events: auto;
        ${m?v:""};
      }

      .panel-spacing {
        height: ${Math.round(o*I/100)}px;

        &.last-item {
          height: ${l?`${Math.round(o*I/100)}`:o}px;
        }
      }
    }

    .panel-content-placeholder {
      width: 1px;
      min-height: ${l?o:Math.round(o*sl)}px;
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
        min-height: ${l?"100":Math.round(100*sl)}vh;
        min-height: calc(var(--vh) * ${l?"100":Math.round(100*sl)});
      }
    }
  `}var rl=p(5467),dl=p.n(rl);const ul=t=>{const o=window.SVG,{className:i}=t,n=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o}(t,["className"]),a=(0,e.classNames)("jimu-icon jimu-icon-component",i);return o?e.React.createElement(o,Object.assign({className:a,src:dl()},n)):e.React.createElement("svg",Object.assign({className:a},n))};function cl(t){const{rootLayoutId:o,viewHeight:n,headerHeight:a,screenId:s,isActive:l,isAbsolute:r,isLast:d,isSmallSize:u,layoutEntry:c,isDesignMode:p,formatMessage:h,builderTheme:m}=t,f=e.ReactRedux.useSelector((t=>t.appConfig.screens[s])),y=e.ReactRedux.useSelector((t=>{var e,o,i;return null===(i=null===(o=null===(e=t.appRuntimeInfo)||void 0===e?void 0:e.screenPanelStates)||void 0===o?void 0:o[s])||void 0===i||i})),{main:v}=f,{side:I,size:x,overlay:b=!0}=f.panel||{},w=e.React.useRef(),S=e.React.useCallback((()=>{(0,e.getAppStore)().dispatch(e.appActions.screenPanelVisibleChanged(s,!0))}),[s]),C=(0,e.classNames)("screen-main-panel",{"is-active":l,"last-one":d});return(0,e.jsx)(Gt.Provider,{value:!r||l},(0,e.jsx)("div",{id:`${o}_screen_${s}`,className:C,css:function(){var t,o,s,l;if(u){const s=!b&&null!=f.panel,l=s?`${Math.round(n*al)}px`:`${n}px`,r=s?`${Math.round(100*al)}`:"100";return e.css`
        pointer-events: none !important;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: ${n}px;

        > .layout {
          ${i.styleUtils.toBackgroundEmotionStyle(null!==(o=null===(t=f.main)||void 0===t?void 0:t.background)&&void 0!==o?o:{})};
          height: ${l} !important;
          border: none !important;
          pointer-events: auto;
        }

        body:not(.design-mode) & {
          height: ${a>0?`calc(100vh - ${a}px)`:"100vh"};
          height: ${a>0?`calc(var(--vh) * 100 - ${a}px)`:"calc(var(--vh) * 100)"};
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
      `}let d="0px",c="0px";"none"!==I&&(b||"right"===I||(d=x),b||"right"!==I||(c=x));const p=m?e.css`
      color: ${m.colors.palette.dark[900]};
      background-color: ${m.colors.palette.light[400]};
      border-color: ${m.colors.palette.light[600]};
      &:hover {
        color: ${m.colors.black};
        background-color: ${m.colors.palette.light[600]};
      }
    `:null;return e.css`
      ${i.styleUtils.toBackgroundEmotionStyle(null!==(l=null===(s=f.main)||void 0===s?void 0:s.background)&&void 0!==l?l:{})};
      left: ${r?d:null};
      right: ${r?c:null};
      margin-left: ${r?null:d};
      margin-right: ${r?null:c};
      pointer-events: auto;
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
          height: ${a>0?`calc(100vh - ${a}px)`:"100vh"} !important;
          height: ${a>0?`calc(var(--vh) * 100 - ${a}px)`:"calc(var(--vh) * 100)"} !important;
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
    `}(),ref:w,"data-screenid":s,"data-index":t.index},(0,e.jsx)(c,{layouts:v.layout,isInWidget:!0}),(0,e.jsx)("div",{className:"spacing-area"}),p&&!y&&(0,e.jsx)("div",{className:"toggle-visible-btn",onClick:S,"data-testid":"toggleBtn"},(0,e.jsx)(g,{placement:"auto",title:h("showInDesignView")},(0,e.jsx)(i.Button,{type:"default",size:"sm",className:"rounded"},(0,e.jsx)(ul,{size:"m"}))))))}function pl(t,o,i,n,a){return t===e.ScreenTransitionType.Fade?e.css`
      position: sticky;
      height: ${o}px;
      top: 0;

      body:not(.design-mode) & {
        height: ${i>0?`calc(100vh - ${i}px)`:"100vh"};
        height: ${i>0?`calc(var(--vh) * 100 - ${i}px)`:"calc(var(--vh) * 100)"};
        top: ${i>0?`${i}px`:0};
        .layout .exb-drop-area {
          pointer-events: none !important;
        }
      }

      .screen-main-panel {
        position: absolute;
        opacity: 0;
        visibility: hidden;
        z-index: 0;
        transition: ${n?null:"opacity 400ms"};
        top: 0;
        /* height: ${n?"unset":"100% !important"}; */

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
    `:t===e.ScreenTransitionType.Cover?e.css`
      position: sticky;
      height: ${o}px;
      overflow: hidden;
      top: 0;

      body:not(.design-mode) & {
        height: 100%;
        overflow: unset;
        position: relative;

        .screen-main-panel {
          top: ${i>0?`${i}px`:0};
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
    `:t===e.ScreenTransitionType.Push?e.css`
      position: sticky;
      height: ${o}px;
      overflow: hidden;
      top: 0;

      body:not(.design-mode) & {
        height: auto;
        overflow: unset;

        .screen-main-panel > .layout {
          top: ${i>0?`${i}px`:0};
        }
      }

      .screen-main-panel > .layout {
        position: sticky !important;
        top: 0;
      }
    `:void 0}function hl(t,o,i){return t===e.ScreenTransitionType.Fade?e.css`
      height: calc(100% - ${o}px);
      background: transparent;
      pointer-events: none;

      body:not(.design-mode) & {
        height: calc(100% - 100vh);
        height: calc(100% - var(--vh) * 100);
      }
    `:t===e.ScreenTransitionType.Cover||t===e.ScreenTransitionType.Push?e.css`
      height: calc(100% - ${o}px);
      background: transparent;
      pointer-events: none;
      display: block;

      body:not(.design-mode) & {
        height: calc(100% - 100vh);
        height: calc(100% - var(--vh) * 100);
        display: none;
      }
    `:void 0}function gl(t){const{rootLayoutId:o,activeIndex:i,viewHeight:n,headerHeight:a,screens:s,transitionType:l,isSmallSize:r,layoutEntry:d,isDesignMode:u,formatMessage:c,builderTheme:p}=t;return(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)("div",{className:"screen-container",css:pl(l,n,a,r,s.length)},s.map(((t,h)=>(0,e.jsx)(cl,{key:t,rootLayoutId:o,index:h,isActive:i===h,screenId:t,viewHeight:n,headerHeight:a,isAbsolute:l===e.ScreenTransitionType.Fade,isLast:h===s.length-1,isSmallSize:r,layoutEntry:d,isDesignMode:u,formatMessage:c,builderTheme:p})))),(0,e.jsx)("div",{className:"screen-placeholder",css:hl(l,n)}))}const ml=e.css`
  width: 36px;
  height: 36px;
  padding: 0.5rem;
`,fl=e.css`
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  background: transparent;
`;function yl(t){return e.css`
    display: flex;
    height: 200px;
    position: relative;
    z-index: 1;
    border: 1px dashed ${e.polished.rgba(t.colors.palette.dark[600],.6)};

    body.lock-layout &,
    body:not(.design-mode) & {
      display: none !important;
    }

    .action-item {
      z-index: 1;
    }
  `}function vl(t){const{layouts:n,builderTheme:a}=t,l=e.ReactRedux.useSelector((t=>n[t.browserSizeMode]||n[t.appConfig.mainSizeMode])),[r,d]=e.React.useState(!1),u=e.React.useRef(null),c=e.React.useCallback((t=>{V((0,o.getAppConfigAction)().appConfig,t,{layoutId:l},{width:100,height:100},{left:0,top:0}).then((({layoutInfo:t,updatedAppConfig:o})=>{(0,e.getAppStore)().dispatch(e.appActions.layoutChanged(o,t))})),d(!1)}),[l]),p=e.React.useCallback(((t,i,n)=>{V((0,o.getAppConfigAction)().appConfig,t,{layoutId:l},i,n).then((({layoutInfo:t,updatedAppConfig:o})=>{(0,e.getAppStore)().dispatch(e.appActions.layoutChanged(o,t))}))}),[l]),h=e.React.useCallback((t=>!t.layoutInfo||t.layoutInfo.layoutId!==l),[l]);return(0,e.jsx)(s.LayoutContext.Provider,{value:{isItemAccepted:h}},(0,e.jsx)("div",{className:"placeholder-btn w-100 justify-content-center align-items-center",css:yl(a)},(0,e.jsx)(De,{css:fl,layouts:n,onDrop:p}),(0,e.jsx)("div",{className:"action-item",ref:u},(0,e.jsx)(i.Button,{icon:!0,css:ml,onClick:t=>{t.stopPropagation(),(0,e.getAppStore)().getState().browserSizeMode!==e.BrowserSizeMode.Small?d(!r):o.appBuilderSync.letBuilderShowPopperSelector("widget",{isPlaceholder:!0,isItemAccepted:h,onSelect:c})}},(0,e.jsx)(Fe,{size:"m"}))),r&&(0,e.jsx)(Ne.WidgetListPopper,{referenceElement:u.current,isAccepted:h,onSelect:c,onClose:()=>{d(!1)}})))}var Il=p(9775),xl=p.n(Il);const bl=t=>{const o=window.SVG,{className:i}=t,n=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o}(t,["className"]),a=(0,e.classNames)("jimu-icon jimu-icon-component",i);return o?e.React.createElement(o,Object.assign({className:a,src:xl()},n)):e.React.createElement("svg",Object.assign({className:a},n))},wl=e.spring.animated;function Sl(t,o,i,n,a,s,l,r,d,u,c,p,h){const{side:g,size:m}=t.panel||{},f=e.css`
    color: ${c.colors.palette.dark[900]};
    background-color: ${c.colors.palette.light[400]};
    border-color: ${c.colors.palette.light[600]};
    &:hover {
      color: ${c.colors.black};
      background-color: ${c.colors.palette.light[600]};
    }
  `;return d?e.css`
      ${ll(t,o,i,n,a,s,l,r,d)};

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

      &.minimized .exb-drop-area, &.minimized .toggle-visible-btn {
        pointer-events: none !important;
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
        pointer-events: auto;

        > button {
          ${f};
        }
      }
      body:not(.design-mode) & .toggle-visible-btn {
        display: none !important;
      }
    `:e.css`
    ${ll(t,o,i,n,a,s,l,r,d)};

    .panel-content {
      position: relative;
      touch-action: none;
      width: ${p?`${h}px`:m};

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
      pointer-events: auto;
      > button {
        ${f};
        svg {
          margin-right: 0;
          margin-left: 0;
        }
      }
    }

    &.minimized .exb-drop-area, &.minimized .toggle-visible-btn {
        pointer-events: none !important;
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
      pointer-events: auto;
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
  `}function Cl(t){const{index:n,screenId:a,onInterctionChange:l,onHeightChange:r,builderTheme:d,viewHeight:u,headerHeight:c,layoutEntry:p,isActive:h,isSmallSize:m,isDesignMode:f,transitionType:y,screenTransitionType:v,triggerType:I,stretched:x,viewOnly:b,verticalSpace:w="0",useAnimation:S=!0,formatMessage:C}=t,R=e.ReactRedux.useSelector((t=>t.appConfig.screens[a])),T=e.ReactRedux.useSelector((t=>{var e,o,i;return null===(i=null===(o=null===(e=t.appRuntimeInfo)||void 0===e?void 0:e.screenPanelStates)||void 0===o?void 0:o[a])||void 0===i||i})),{panel:A}=R,M=e.React.useRef(),P=e.React.useRef(),L=e.React.useRef(),[j,z]=e.React.useState(!1),[k,N]=e.React.useState(0),$=e.React.useRef(T),O=e.React.useRef(f),E=e.React.useRef(),B=e.React.useMemo((()=>{if(A&&A.overlay&&Math.abs(parseFloat(A.offset))>0){const t=(0,e.getAppStore)().getState().appContext.isRTL?"left"===A.side?-1:1:"right"===A.side?-1:1;return parseFloat(A.offset)*t}return 0}),[A]),[D,F]=e.spring.useSpring((()=>({opacity:1,size:1,x:0,y:0}))),H=e.React.useCallback(((t,e)=>{E.current=e,z(!0),N(0)}),[]),V=e.React.useCallback(((t,e,o,i,n)=>{N(i)}),[]),W=e.React.useCallback(((t,e,i,n,l)=>{!function(t,e){var i;const n=(0,o.getAppConfigAction)();let a,l=n.appConfig.screens[t];a=s.utils.isPercentage(null===(i=l.panel)||void 0===i?void 0:i.size)?s.utils.toRatio(e,document.body.clientWidth):`${Math.round(e)}px`,l=l.setIn(["panel","size"],a),n.editScreen(l).exec()}(a,E.current+n),z(!1)}),[a]);e.React.useEffect((()=>{O.current!==f&&(O.current=f,f?$.current?F.start({opacity:1,x:0,y:0,immediate:!0,onRest:null}):F.start({opacity:0,immediate:!0,onRest:null}):F.start({opacity:1,x:0,y:0,immediate:!0,onRest:null}))}),[f,F]),e.React.useEffect((()=>{if(!L.current&&P.current)return L.current=(0,zt.interact)(P.current),$t(L.current,{layoutItemId:a,onResizeStart:H,onResizing:V,onResizeEnd:W}),()=>{L.current&&(L.current.unset(),L.current=null)}}),[a,H,V,W]);const G=e.React.useCallback((t=>{l(n,t)}),[n,l]),Z=e.React.useCallback(((t,e)=>{r(n,e)}),[n,r]),_=e.React.useCallback((t=>{const o=t.target.getBoundingClientRect(),i=M.current.getBoundingClientRect(),n=(0,e.getAppStore)().getState().appContext.isRTL;M.current.classList.add("minimized"),F.start({opacity:0,size:0,x:n?i.left-o.left:i.right-o.right,y:i.bottom-o.bottom,immediate:!S,onRest:()=>{$.current=!1,(0,e.getAppStore)().dispatch(e.appActions.screenPanelVisibleChanged(a,!1))}})}),[F,a,S]),U=e.React.useCallback((()=>{M.current.classList.remove("minimized"),F.start({opacity:1,size:1,x:0,y:0,immediate:!S,onRest:null})}),[F,S]);e.React.useEffect((()=>{$.current!==T&&T&&(U(),$.current=T)}),[T,U]),function(t,o,i,n){const a=e.React.useRef(),s=e.React.useRef();e.React.useEffect((()=>{if(a.current&&(a.current.unobserve(t),a.current=null),t&&"function"==typeof IntersectionObserver){const e=new IntersectionObserver((t=>{(t=>{const e=t.boundingClientRect,o=t.rootBounds,i=Math.abs(e.bottom-o.top)>=Math.abs(e.top-o.top);t.isIntersecting?(s.current=!0,i&&n(!0)):s.current&&(s.current=!1,i)&&n(!1)})(t[0])}),{threshold:il(),root:o||document,rootMargin:nl(i)});return e.observe(t),a.current=e,()=>{a.current.unobserve(t),a.current=null}}}),[t,o,n,i])}(M.current,t.refElement,m?e.ScreenTriggerType.Lower:null!=I?I:e.ScreenTriggerType.Bottom,G);const Y={opacity:D.opacity,translateX:B,x:D.x,y:D.y},X=e.React.useCallback((()=>!b&&h&&(null==A?void 0:A.overlay)),[A,h,b]);return(0,e.jsx)("div",{className:(0,e.classNames)("screen-side-panel",{"top-spacing":0===n&&((null==A?void 0:A.overlay)||m)}),"data-screenid":a,"data-index":n,ref:M,css:Sl(R,u,c,h,w,x||null==A,y,v,m,0,d,j,E.current+k)},A&&(0,e.jsx)(wl.div,{className:(0,e.classNames)("panel-content",{visible:T}),ref:P,style:Y},(0,e.jsx)("div",{className:"layout-wrapper"},(0,e.jsx)(p,{layouts:A.layout}),!b&&(0,e.jsx)(vl,{layouts:A.layout,builderTheme:d}),(0,e.jsx)("span",{className:"resize-handle left rnd-resize-left"}),(0,e.jsx)("span",{className:"resize-handle right rnd-resize-right"})),X()&&(0,e.jsx)("div",{className:"toggle-visible-btn",onClick:_,"data-testid":`toggleBtn-${T}`},(0,e.jsx)(g,{placement:"auto",title:C("hideInDesignView")},(0,e.jsx)(i.Button,{type:"default",size:"sm",className:"rounded"},(0,e.jsx)(bl,{size:"m"})))),(0,e.jsx)("div",{className:(0,e.classNames)("panel-spacing",{"last-item":t.isLast})})),!A&&T&&(0,e.jsx)("div",{className:"panel-content-placeholder"}),(0,e.jsx)(e.ReactResizeDetector,{handleHeight:!0,onResize:Z}))}function Rl(t){const{layoutId:i,layoutItemId:n,builderTheme:a,layoutItem:l,formatMessage:r,isFirst:d,isLast:u}=t,[c,p]=e.React.useState(!1),[h,g]=e.React.useState(!1),m=e.React.useRef(),f=e.React.useCallback((t=>{Hs(i,n,t),p(!1)}),[i,n]),y=e.React.useCallback((()=>{(0,e.getAppStore)().getState().browserSizeMode!==e.BrowserSizeMode.Small?p(!c):o.appBuilderSync.letBuilderShowPopperSelector("template",{templateMethod:"getBlockTemplates",onSelect:f})}),[c,f]),v=e.React.useCallback((()=>{g(!h)}),[h]),I=e.React.useCallback((t=>{Vs(i,n,t),g(!1)}),[i,n]),x=e.React.useCallback((()=>{const t=Gs((0,o.getAppConfigAction)().appConfig,{layoutId:i,layoutItemId:n});(0,o.getAppConfigAction)(t).exec()}),[i,n]),b=e.React.useCallback((()=>{const t=Ws((0,o.getAppConfigAction)().appConfig,{layoutId:i,layoutItemId:n});(0,o.getAppConfigAction)(t).exec()}),[i,n]),w=e.React.useCallback((()=>{o.appBuilderSync.publishConfirmDeleteToApp({layoutId:i,layoutItemId:n})}),[i,n]),S=e.React.useCallback((()=>(0,e.getAppStore)().getState().browserSizeMode===e.BrowserSizeMode.Large),[]),C=[{icon:_s(),title:r("insertABlock"),onClick:y,visible:()=>!ht()},{icon:Ys(),title:r("insertAScreenGroup"),onClick:v,visible:()=>S()&&!ht()},vt,Object.assign(Object.assign({},bt),{visible:()=>S()&&!ht()}),{icon:ct(),title:r("setting"),onClick:()=>{(0,e.getAppStore)().dispatch(e.appActions.selectionChanged({layoutId:i,layoutItemId:n}))}},{icon:it(),title:r("dragToMove",{label:gt(l)}),className:"tool-drag-handler",onClick:()=>{},visible:()=>!ht()},{icon:qs(),onClick:x,title:r("moveup"),visible:()=>!d&&!ht()},{icon:qs(),rotate:180,onClick:b,title:r("movedown"),visible:()=>!u&&!ht()},{icon:K(),title:r("delete"),onClick:w,visible:()=>!ht()}];return(0,e.jsx)(Ds,{layoutId:i,layoutItem:l,builderTheme:a,positionType:"center",size:s.CONTEXT_MENU_ITEM_SIZE,iconSize:s.CONTEXT_MENU_ICON_SIZE,className:"widget-context-menu",menuItems:C,isFirst:d,isLast:u},(0,e.jsx)("div",{ref:m,css:e.css`position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;`}),c&&(0,e.jsx)(Ne.TemplateSelector,{templates:(0,Hi.getBlockTemplates)(),referenceElement:m.current,onItemSelect:f,onClose:y}),h&&(0,e.jsx)(Ne.TemplateSelector,{templates:(0,Hi.getScreenGroupTemplates)(),referenceElement:m.current,onItemSelect:I,onClose:v}))}function Tl(t,o,i,n,a,s){return e.css`
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
        bottom: ${i?n?"-10px":"-32px":"auto"};
        z-index: ${i&&n?10:null};
      }
    }

    .screen-menu {
      display: ${a?"block":"none"};
      position: absolute;
      opacity: ${a?.8:.5};
      left: 0;
      top: ${i?"auto":"-32px"};
      bottom: ${i?"-32px":"auto"};
      height: 32px;
      width: 100%;
      background-color: ${o.colors.palette.light[200]};
      overflow: visible;

      .info {
        color: ${o.colors.black};
      }

      .jimu-btn svg {
        color: ${o.colors.palette.dark[600]};
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
      z-index: ${s?0:1};
    }

    &.small-size .side-panels {
      z-index: ${s?1:0};
    }

    .side-panels {
      position: relative;
      z-index: 1;
      pointer-events: none;

      > div:first-of-type > div.panel-content {
        padding-top: ${Math.round(t*al)}px;
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
          padding-top: ${100*al}vh;
          padding-top: calc(var(--vh) * ${100*al});
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
          outline: 2px solid ${o.colors.palette.primary[700]};
          display: block;
        }
      }
    }

    &:hover .group-tip {
      display: block;
    }
  `}function Al(t){var i;const{layoutId:n,layoutItemId:a,layoutItem:l,formatMessage:r,itemIndex:d,isFirst:u,isLast:c}=t,{screenGroupId:p}=l,h=e.ReactRedux.useSelector((t=>{var e;const o=null===(e=t.appRuntimeInfo)||void 0===e?void 0:e.selection;return!!o&&o.layoutId===n&&o.layoutItemId===a})),g=e.ReactRedux.useSelector((t=>t.appConfig.screenGroups[l.screenGroupId])),m=e.ReactRedux.useSelector((t=>t.appConfig.screenGroups[l.screenGroupId].screens.some((e=>null!=t.appConfig.screens[e].panel)))),f=e.ReactRedux.useSelector((t=>t.browserSizeMode)),{screens:y,stretchPanel:v=!0,triggerType:I=e.ScreenTriggerType.Bottom,verticalSpace:x="0",panelTransitionType:b=e.ScreenTransitionType.Push}=g;let w=null!==(i=g.transitionType)&&void 0!==i?i:e.ScreenTransitionType.Fade;f!==e.BrowserSizeMode.Small||m||(w=e.ScreenTransitionType.Cover);const S=e.ReactRedux.useSelector((t=>{var e;return null===(e=t.appRuntimeInfo.screenGroupNavInfos)||void 0===e?void 0:e[p]})),C=e.ReactRedux.useSelector((t=>e.utils.findViewportSize(t.appConfig,t.browserSizeMode||e.BrowserSizeMode.Large))),R=e.ReactRedux.useSelector((t=>{var o;return(null===(o=t.appRuntimeInfo)||void 0===o?void 0:o.appMode)===e.AppMode.Design})),{viewOnly:T,builderTheme:A,pageId:M}=e.React.useContext(s.PageContext),P=e.ReactRedux.useSelector((t=>{const e=t.appConfig.pages[M];if(null==e?void 0:e.header){const e=t.appConfig.header;if(null==e?void 0:e.sticky){const o=t.browserSizeMode,i=t.appConfig.mainSizeMode,n=e.height[o]||e.height[i]||75;return parseInt(n,10)}}return 0})),L=e.React.useRef(),j=e.React.useRef(),z=e.React.useRef(),k=e.React.useRef(!0),N=e.React.useRef(),$=e.React.useRef(),[O,E]=e.React.useState(0);e.React.useEffect((()=>{if(h){const t=document.querySelector(`div.exb-rnd[data-layoutid="${n}"][data-layoutitemid="${a}"]`);null!=t&&t.scrollIntoView({behavior:"auto",block:"center"})}}),[h,n,a]);const B=e.React.useMemo((()=>{var t,o,i;if(f!==e.BrowserSizeMode.Small)return!1;const n=(0,e.getAppStore)().getState().appConfig,a=null===(o=null===(t=n.screenGroups)||void 0===t?void 0:t[p])||void 0===o?void 0:o.screens;return!!(null==a?void 0:a[O])&&(null===(i=n.screens[a[O]].panel)||void 0===i?void 0:i.overlay)}),[p,O,f]),D=e.React.useCallback((t=>{var o;const i=j.current.querySelectorAll("div.screen-side-panel");let n=0;if(i.forEach((e=>{+e.getAttribute("data-index")<t&&(n+=e.clientHeight)})),j.current.scrollTop=n,w!==e.ScreenTransitionType.Fade){const t=null===(o=z.current)||void 0===o?void 0:o.children[0];t&&(t.scrollTop=j.current.scrollTop)}}),[w]),F=e.React.useCallback((()=>{Lt(!0)}),[]),H=e.React.useCallback((()=>{Lt(!1)}),[]);e.React.useEffect((()=>{if(L.current&&!$.current){const{layoutId:e,layoutItemId:o,layoutItem:i}=t;$.current=(0,zt.interact)(L.current).origin("parent"),$.current=Pt($.current,{layoutId:e,layoutItemId:o,onDragStart:F,onDragEnd:H,useDragHandler:!0,itemType:i.type,rootLayoutId:()=>e,restrict:()=>!0}),$.current.draggable({modifiers:[zt.interact.modifiers.restrictRect({restriction:"parent"})]})}return()=>{$.current&&($.current.unset(),$.current=null)}}),[]),e.React.useEffect((()=>{null!=(null==S?void 0:S.activeIndex)&&S.activeIndex!==O&&(function(t,o){var i;const n=(0,e.getAppStore)().getState().appConfig,a=(0,e.getAppStore)().getState().browserSizeMode,s=null===(i=(0,e.getAppStore)().getState().appRuntimeInfo)||void 0===i?void 0:i.selection;if(null!=s){const i=n.screenGroups[t].screens[o],l=n.screens[i];if(l){const t=l.main.layout[a];s.layoutId===t&&(0,e.getAppStore)().dispatch(e.appActions.selectionChanged(null)),null!=document.querySelector(`div[data-layoutid="${t}"] div[data-layoutid="${s.layoutId}"][data-layoutitemid="${s.layoutItemId}"]`)&&(0,e.getAppStore)().dispatch(e.appActions.selectionChanged(null))}}}(p,O),E(S.activeIndex),S.scrollIntoView&&(k.current=!1,D(S.activeIndex),setTimeout((()=>{k.current=!0}),200)))}),[S,O,D,p]),e.React.useEffect((()=>{N.current&&(j.current.removeEventListener("scroll",N.current),N.current=null),N.current=()=>{var t;const o=null===(t=z.current)||void 0===t?void 0:t.children[0];o&&w!==e.ScreenTransitionType.Fade&&(o.scrollTop=j.current.scrollTop)},j.current.addEventListener("scroll",N.current)}),[w]),e.React.useEffect((()=>{(0,e.getAppStore)().dispatch(e.appActions.screenGroupNavInfoChanged(p,0))}),[R,p]);const V=e.React.useCallback(((t,o)=>{k.current&&(o&&t!==O?(0,e.getAppStore)().dispatch(e.appActions.screenGroupNavInfoChanged(p,t,!1)):!o&&t>0&&(0,e.getAppStore)().dispatch(e.appActions.screenGroupNavInfoChanged(p,t-1,!1)))}),[O,p]),W=e.React.useCallback((t=>{t.stopPropagation(),ht()||T||f===e.BrowserSizeMode.Small||(0,e.getAppStore)().dispatch(e.appActions.selectionChanged({layoutId:n,layoutItemId:a}))}),[T,f,n,a]),G=e.React.useCallback((()=>{if(!j.current)return;const t=j.current.children[0],e=j.current.children[1];t.style.height=`${e.clientHeight}px`}),[]),Z=e.React.useMemo((()=>e.lodash.debounce(G,200)),[G]),_=e.React.useCallback(((t,o)=>{if(!j.current)return;const i=j.current.children[0],n=j.current.children[1];if(w!==e.ScreenTransitionType.Fade)if(w!==e.ScreenTransitionType.Cover){if(w===e.ScreenTransitionType.Push){const e=i.querySelector(`div.screen-main-panel[data-index="${t}"]`),o=n.querySelector(`div.screen-side-panel[data-index="${t}"]`);e.style.height=`${o.clientHeight}px`,i.style.height=`${n.clientHeight}px`}}else!function(t,o,i){const n=t.querySelectorAll("div.screen-main-panel"),a=o.querySelectorAll("div.screen-side-panel"),s=n.length;for(let t=1;t<s;t++){const e=n.item(t),o=n.item(t-1),i=a.item(t-1);e.style.marginTop=i.clientHeight-o.clientHeight+"px"}i!==e.BrowserSizeMode.Small&&(t.style.height=`${o.clientHeight}px`)}(i,n,f);else i.style.height=`${n.clientHeight}px`}),[f,w]),U=e.React.useCallback((()=>{(0,e.getAppStore)().dispatch(o.builderActions.confirmDeleteContentChanged({layoutId:n,layoutItemId:a}))}),[n,a]),Y=e.React.useMemo((()=>({delete:U,backspace:U})),[U]);return y.length>0?(0,e.jsx)(Zt.Provider,{value:`${n}:${a}`},(0,e.jsx)("div",{className:(0,e.classNames)("builder-layout-item exb-rnd",{selected:h,"small-size":f===e.BrowserSizeMode.Small}),css:Tl(C.height,A,u,c,h,B),"data-layoutitemid":a,"data-layoutid":n,onClick:W,ref:L},(0,e.jsx)("div",{className:"screen-menu"},(0,e.jsx)(el,{activeScreenIndex:O,itemIndex:d,total:y.length,screenGroupId:p,layoutId:n,layoutItemId:a,browserSizeMode:f,hasPanel:m,formatMessage:r})),(0,e.jsx)("div",{className:"screen-group",ref:j},(0,e.jsx)("div",{className:"main-panels",ref:z},(0,e.jsx)(gl,{rootLayoutId:n,activeIndex:O,viewHeight:C.height,headerHeight:P,screens:y,transitionType:w,layoutEntry:to,isSmallSize:f===e.BrowserSizeMode.Small,isDesignMode:R,builderTheme:A,formatMessage:r})),(0,e.jsx)("div",{className:"side-panels"},y.map(((t,o)=>(0,e.jsx)(Cl,{key:t,index:o,isLast:o===y.length-1,screenId:t,viewHeight:C.height,headerHeight:P,refElement:R?L.current:null,layoutEntry:to,viewOnly:T,builderTheme:A,isActive:o===O,isSmallSize:f===e.BrowserSizeMode.Small,isDesignMode:R,stretched:v,triggerType:I,verticalSpace:x,transitionType:b,screenTransitionType:w,onHeightChange:_,onInterctionChange:V,formatMessage:r}))),(0,e.jsx)(e.ReactResizeDetector,{handleHeight:!0,onResize:Z}))),!T&&(0,e.jsx)(Rl,{layoutId:n,layoutItemId:a,layoutItem:l,isFirst:u,isLast:c,builderTheme:A,formatMessage:r}),R&&(0,e.jsx)("div",{className:"group-tip"},(0,e.jsx)("div",{className:"tip-content"})),R&&h&&(0,e.jsx)(e.Keyboard,{bindings:Y}))):null}const Ml=t=>{const o=window.SVG,{className:i}=t,n=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o}(t,["className"]),a=(0,e.classNames)("jimu-icon jimu-icon-component",i);return o?e.React.createElement(o,Object.assign({className:a,src:_s()},n)):e.React.createElement("svg",Object.assign({className:a},n))};const Pl=t=>{const o=window.SVG,{className:i}=t,n=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o}(t,["className"]),a=(0,e.classNames)("jimu-icon jimu-icon-component",i);return o?e.React.createElement(o,Object.assign({className:a,src:Ys()},n)):e.React.createElement("svg",Object.assign({className:a},n))},Ll=e.css`
  pointer-events: auto;
`;function jl(t){return e.css`
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
  `}function zl(t){return t===e.BrowserSizeMode.Large}function kl(t){const{pageContext:n,browserSizeMode:a,onPageTemplateSelected:s,onBlockTemplateSelected:l,onScreenTemplateSelected:r,blockOnly:d}=t,{builderTheme:u,formatMessage:c,isHeader:p,isFooter:h}=n,[m,f]=e.React.useState(!1),[y,v]=e.React.useState(!1),[I,x]=e.React.useState(!1),b=e.React.useRef(null),w=e.React.useRef(null),S=e.React.useRef(null),C=e.ReactRedux.useSelector((t=>{var o,i,n;const a=null!==(n=null===(i=null===(o=t.appConfig)||void 0===o?void 0:o.forBuilderAttributes)||void 0===i?void 0:i.lockLayout)&&void 0!==n&&n;return t.appRuntimeInfo.appMode===e.AppMode.Design&&!a})),R=!p&&!h;let T;return T=p?c("chooseHeaderTemplate"):h?c("chooseFooterTemplate"):c("chooseTemplate",{type:n.isDialog?c("dialog").toLocaleLowerCase():c("page").toLocaleLowerCase()}),C?(0,e.jsx)("div",{className:"w-100 flex-column justify-content-center align-items-center",css:jl(u)},(0,e.jsx)("div",{className:"d-flex"},R&&(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)(g,{placement:"bottom",title:c("insertABlock")},(0,e.jsx)("div",{className:"action-item"},(0,e.jsx)(i.Button,{ref:b,icon:!0,onClick:t=>{t.stopPropagation(),a!==e.BrowserSizeMode.Small?v(!y):o.appBuilderSync.letBuilderShowPopperSelector("template",{templateMethod:"getBlockTemplates",onSelect:l})},css:Ll,className:"rounded-circle"},(0,e.jsx)(Ml,{size:"m",color:u.colors.palette.dark[800]})))),zl(a)&&(0,e.jsx)(g,{placement:"bottom",title:c("insertAScreenGroup")},(0,e.jsx)("div",{className:"action-item ml-4"},(0,e.jsx)(i.Button,{ref:w,icon:!0,onClick:t=>{t.stopPropagation(),x(!y)},css:Ll,className:"rounded-circle"},(0,e.jsx)(Pl,{size:16,color:u.colors.palette.dark[800]}))))),!d&&(0,e.jsx)(g,{placement:"bottom",title:T},(0,e.jsx)("div",{className:(0,e.classNames)("action-item",{"ml-4":R})},(0,e.jsx)(i.Button,{ref:S,icon:!0,onClick:t=>{t.stopPropagation(),a!==e.BrowserSizeMode.Small?f(!m):o.appBuilderSync.letBuilderShowPopperSelector("template",{templateMethod:"getScrollingPageTemplates",onSelect:s})},css:Ll,className:"rounded-circle"},(0,e.jsx)(Gi,{size:16,color:u.colors.palette.dark[800]}))))),(0,e.jsx)("div",{className:"action-seprator mt-3"}),(0,e.jsx)("div",null,(0,e.jsx)("h5",{className:"btn-text mt-2"},c("dropWidgetToAdd"))),R&&y&&(0,e.jsx)(Ne.TemplateSelector,{templates:(0,Hi.getBlockTemplates)(),referenceElement:b.current,onItemSelect:t=>{v(!1),l(t)},onClose:()=>{v(!1)}}),R&&I&&zl(a)&&(0,e.jsx)(Ne.TemplateSelector,{templates:(0,Hi.getScreenGroupTemplates)(),referenceElement:w.current,onItemSelect:t=>{x(!1),r(t)},onClose:()=>{x(!1)}}),!d&&m&&(0,e.jsx)(Ne.TemplateSelector,{templates:(0,Hi.getScrollingPageTemplates)(),referenceElement:S.current,onItemSelect:t=>{f(!1),s(t)},onClose:()=>{f(!1)}})):null}const Nl=e.css`
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  background: transparent;
`,$l=e.css`
  ${Nl};
  z-index: ${s.LayoutZIndex.DragMoveTip};
  pointer-events: none;
`;class Ol extends e.React.PureComponent{constructor(t){super(t),this.state={isDragover:!1,isLoadingTemplate:!1},this.handleActivate=t=>{if(!mt())return;if(Math.abs(t.screenX-this.mousedownX)>s.CLICK_TOLRERANCE||Math.abs(t.screenY-this.mousedownY)>s.CLICK_TOLRERANCE)return void t.stopPropagation();const{isInSection:o,isInWidget:i}=this.props;this.pageContext.viewOnly||o||i||Et()||jt()||(t.stopPropagation(),(0,e.getAppStore)().dispatch(e.appActions.selectionChanged(null)))},this.handleMouseDown=t=>{this.mousedownX=t.screenX,this.mousedownY=t.screenY},this.handleDropAtBoundary=(t,e,o)=>{o<this.props.layout.order.length?this.referenceId=this.props.layout.order[o]:this.referenceId=null,null==this.domRect&&(this.domRect=this.ref.getBoundingClientRect()),this.handleDrop(t,this.domRect,e)},this.onWidgetItemSelected=t=>{var e,o,i;const n=this.ref.getBoundingClientRect(),a={height:null!==(i=null===(o=null===(e=t.manifest)||void 0===e?void 0:e.defaultSize)||void 0===o?void 0:o.height)&&void 0!==i?i:300};this.addWidgetToLayout(t,n,a,4,0)},this.handleBlockTemplateSelected=t=>{this.setState({isLoadingTemplate:!0}),Hs(this.props.layout.id,"",t).finally((()=>{this.setState({isLoadingTemplate:!1})}))},this.handleScreenTemplateSelected=t=>{this.setState({isLoadingTemplate:!0}),Vs(this.props.layout.id,"",t).finally((()=>{this.setState({isLoadingTemplate:!1})}))},this.handlePageTemplateSelected=t=>{const i=(0,o.getAppConfigAction)().appConfig;this.setState({isLoadingTemplate:!0}),this.pageContext.isHeader?o.templateUtils.applyPageTemplateToHeader(i,t).then((({appConfig:t})=>{(0,o.getAppConfigAction)(t).exec(),e.lodash.defer((()=>{this.setState({isLoadingTemplate:!1})}))})).finally(null):this.pageContext.isFooter?o.templateUtils.applyPageTemplateToFooter(i,t).then((({appConfig:t})=>{(0,o.getAppConfigAction)(t).exec(),e.lodash.defer((()=>{this.setState({isLoadingTemplate:!1})}))})).finally(null):o.templateUtils.applyPageTemplateToBody(i,this.pageContext.pageId,t).then((({appConfig:t})=>{(0,o.getAppConfigAction)(t).exec(),e.lodash.defer((()=>{this.setState({isLoadingTemplate:!1})}))})).finally(null)},s.utils.autoBindHandlers(this,["handleDrop","handleDragOver","handleDragEnter","handleDragLeave","handleToggleDragoverEffect"]);const i=e.ExtensionManager.getInstance().getExtensions(`${e.extensionSpec.ExtensionPoints.LayoutTransformer}`);if((null==i?void 0:i.length)>0){const t=i.find((t=>t.layoutType===this.props.layout.type));this.layoutTransform=null==t?void 0:t.transformLayout}}componentDidMount(){this.canvasPane=new Yi(this.canvasRef),this.canvasPane.setSize(this.ref.clientWidth,this.ref.clientHeight)}componentDidUpdate(){this.canvasPane.setSize(this.ref.clientWidth,this.ref.clientHeight)}handleDragOver(t,o,i,n,a,s){var l,r,d;const{layout:u}=this.props,c=null!==(l=t.layoutInfo)&&void 0!==l?l:{layoutId:null};let p=n;if(this.canvasPane.clear(),(null===(r=this.childRects)||void 0===r?void 0:r.length)>0){const{insertY:t,refId:e}=function(t,e,o,i){let n,a,s=!1;if(o.some(((t,i)=>{if(t.top+t.height/2>e){if(0===i)n=Math.max(t.top/2,t.top-5);else{const e=o[i-1];n=(t.top+e.top+e.height)/2}s=!0,a=t.id}return s})),!s){const e=o[o.length-1];n=Math.min(e.top+e.height+5,(e.top+e.height+t.height)/2)}return{refId:a,insertY:n}}(i,s,this.childRects);if(this.referenceId=e,c.layoutId===this.props.layout.id){const t=u.order,o=t.indexOf(c.layoutItemId),i=t.indexOf(e);if((null===(d=u.content[c.layoutItemId].setting)||void 0===d?void 0:d.isFloating)||o===i-1||null==e&&o===t.length-1)return}p={top:t-5+this.ref.scrollTop,width:i.width-Es,left:5,height:Es}}else this.referenceId=null,p={top:i.height/2-5,width:i.width-Es,left:5,height:Es};this.canvasPane.setColor(e.polished.rgba(this.builderTheme.colors.palette.primary[700],.4)),this.canvasPane.drawRect(p)}handleToggleDragoverEffect(t,e){var o;t&&(this.referenceId=null,this.collectBounds(null!==(o=e.layoutInfo)&&void 0!==o?o:{layoutId:null})),this.canvasPane.clear(),this.setState({isDragover:t})}handleDragEnter(t){}handleDragLeave(){}handleDrop(t,i,n){var a,s;this.canvasPane.clear();const{layout:l}=this.props,r=null!==(a=t.layoutInfo)&&void 0!==a?a:{layoutId:null},d=(0,o.getAppConfigAction)();let u=0;if(null!=this.referenceId?u=l.order.indexOf(this.referenceId):null!=l.order&&(u=l.order.length),this.referenceId=null,this.childRects=[],r.layoutId===l.id){if(null===(s=l.content[r.layoutItemId].setting)||void 0===s?void 0:s.isFloating){const t=(0,o.getAppConfigAction)();return t.setLayoutItemToPending(r,!1),void(0,e.getAppStore)().dispatch(e.appActions.layoutChanged(t.appConfig,Object.assign(Object.assign({},r),{autoScroll:!1})))}return void V(d.appConfig,t,{layoutId:l.id},i,n,u).then((t=>{const{layoutInfo:o,updatedAppConfig:i}=t;(0,e.getAppStore)().dispatch(e.appActions.layoutChanged(i,Object.assign(Object.assign({},o),{autoScroll:!0})))})).finally(null)}const c=(this.maxPageWidth>0?Math.min(this.maxPageWidth,i.width):i.width)/12,p=Math.min(Math.ceil(n.width/c),12);t.itemType===e.LayoutItemType.ScreenGroup?V(d.appConfig,t,{layoutId:l.id},i,n,u).then((t=>{const{layoutInfo:o,updatedAppConfig:i}=t;(0,e.getAppStore)().dispatch(e.appActions.layoutChanged(i,Object.assign(Object.assign({},o),{autoScroll:!0})))})).finally(null):this.addWidgetToLayout(t,i,n,p,u)}addWidgetToLayout(t,e,o,i,n,a){X(t,{layoutId:this.props.layout.id},e,o,i,n,a).finally(null)}collectBounds(t){const{layout:e}=this.props;this.childRects=[],this.domRect=this.ref.getBoundingClientRect();const o=this.ref.parentNode.querySelectorAll(`div[data-layoutid="${e.id}"] > div.exb-rnd`);return(null==o?void 0:o.length)>0&&o.forEach((o=>{var i;const n=o.getAttribute("data-layoutitemid");if((t.layoutId!==e.id||t.layoutItemId!==n)&&(null===(i=e.order)||void 0===i?void 0:i.includes(n))){const t=s.utils.relativeClientRect(o.getBoundingClientRect(),this.domRect);t.id=n,this.childRects.push(t)}})),this.childRects.sort(((t,e)=>t.top-e.top))}createItem(t,i,n,a){if(null==t?void 0:t.isPending)return null;const{layouts:s,layout:l,itemDraggable:r,itemSelectable:d}=this.props,u=function(t){const{layoutId:e,layoutItemId:i}=t,n=(0,o.getAppConfigAction)().appConfig.layouts[e];let a=!1;return n.order.some((t=>{var e;const o=n.content[t];if(!(null===(e=o.setting)||void 0===e?void 0:e.isFloating)&&!o.isPending)return a=t===i,!0})),a}({layoutId:l.id,layoutItemId:t.id}),c=function(t){var e;const{layoutId:i,layoutItemId:n}=t,a=(0,o.getAppConfigAction)().appConfig.layouts[i];let s=!1;for(let t=a.order.length-1;t>=0;t--){const o=a.order[t],i=a.content[o];if(!(null===(e=i.setting)||void 0===e?void 0:e.isFloating)&&!i.isPending){s=o===n;break}}return s}({layoutId:l.id,layoutItemId:t.id}),p=t.setting;return t.type===e.LayoutItemType.ScreenGroup?(0,e.jsx)(Al,{key:`${l.id}_${t.id}`,itemIndex:n,isFirst:u,isLast:c,layoutId:l.id,layoutItemId:t.id,layoutItem:t,theme:this.pageContext.builderTheme,formatMessage:this.pageContext.formatMessage}):(null==p?void 0:p.isFloating)?(0,e.jsx)(tl,{key:`${l.id}_${t.id}`,index:n,total:i,builderTheme:this.builderTheme,layouts:s,layoutId:l.id,layoutItemId:t.id,layoutItem:t,gutter:a.gutter,draggable:r,selectable:d,onDropAtBoundary:this.handleDropAtBoundary,formatMessage:this.pageContext.formatMessage}):(0,e.jsx)(Qs,{key:`${l.id}_${t.id}`,index:n,isFirst:u,isLast:c,builderTheme:this.builderTheme,layouts:s,layoutId:l.id,layoutItemId:t.id,layoutItem:t,gutter:a.gutter,draggable:r,selectable:d,onDropAtBoundary:this.handleDropAtBoundary,formatMessage:this.pageContext.formatMessage})}getActionStyle(){return e.css`
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
    `}getStyle(){const{builderTheme:t}=this.pageContext;return e.css`
      & > .trail-container > .builder-layout-item {
        margin-bottom: 10px;
        border-top: 1px dashed ${e.polished.rgba(t.colors.palette.dark[600],.6)};
        border-bottom: 1px dashed ${e.polished.rgba(t.colors.palette.dark[600],.6)};
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
    `}createActions(t){const{viewOnly:o,rootLayoutId:i}=this.pageContext,{layout:n}=this.props,a=!this.pageContext.isHeader&&!this.pageContext.isFooter;return this.state.isLoadingTemplate||!a||o||n.id!==i?null:(0,e.jsx)(kl,{pageContext:this.pageContext,browserSizeMode:this.props.browserSizeMode,blockOnly:t,onPageTemplateSelected:this.handlePageTemplateSelected,onBlockTemplateSelected:this.handleBlockTemplateSelected,onScreenTemplateSelected:this.handleScreenTemplateSelected})}render(){const{layout:t,className:o,isPageItem:n,layouts:a,mainSizeMode:l,browserSizeMode:r}=this.props;if(null==t)return null;const d=(0,e.classNames)("layout flow-layout w-100",o),u={display:this.state.isDragover?"block":"none"};return(0,e.jsx)(s.PageContext.Consumer,null,(o=>{var s;this.builderTheme=o.builderTheme,this.maxPageWidth=o.maxWidth,this.pageContext=o;let c=t;a[r]!==t.id&&null!=this.layoutTransform&&(c=this.layoutTransform(t,l,r));const p=null!==(s=c.order)&&void 0!==s?s:[],h=e.lodash.assign({},Ua,c.setting),g=Object.assign({position:"relative"},i.styleUtils.toCSSStyle(h.style));return(0,e.jsx)("div",{className:d,ref:t=>this.ref=t,css:this.getStyle(),style:g,"data-layoutid":t.id,onClick:this.handleActivate,onMouseDown:this.handleMouseDown},(0,e.jsx)(e.IntersectionContext.Provider,{value:{monitor:!0}},(0,e.jsx)(e.OneByOneAnimation,{oid:c.id,"data-layoutid":c.id,className:"trail-container d-flex flex-column align-items-center",css:e.css`
                    width: 100%;
                  `},!o.viewOnly&&(0,e.jsx)(De,{css:Nl,layouts:this.props.layouts,isRepeat:this.props.isRepeat,highlightDragover:!n,onDragEnter:this.handleDragEnter,onDragLeave:this.handleDragLeave,onDragOver:this.handleDragOver,onDrop:this.handleDrop,onToggleDragoverEffect:this.handleToggleDragoverEffect}),p.length>0&&p.map(((t,e)=>this.createItem(c.content[t],p.length,e,h))))),!this.state.isLoadingTemplate&&!o.viewOnly&&0===p.length&&t.id===o.rootLayoutId&&this.createActions(!1),p.length>0&&this.createActions(!0),this.state.isLoadingTemplate&&(0,e.jsx)(i.Loading,{type:i.LoadingType.Primary}),(0,e.jsx)("canvas",{css:$l,style:u,ref:t=>this.canvasRef=t}))}))}}const El=e.ReactRedux.connect(s.utils.mapStateToLayoutProps)(Ol);var Bl=p(9216),Dl=p.n(Bl);const Fl=t=>{const o=window.SVG,{className:i}=t,n=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o}(t,["className"]),a=(0,e.classNames)("jimu-icon jimu-icon-component",i);return o?e.React.createElement(o,Object.assign({className:a,src:Dl()},n)):e.React.createElement("svg",Object.assign({className:a},n))},Hl=e.css`
  .resize-handler {
    height: ${16}px;
    width: 100%;
    cursor: ns-resize;
    position: absolute;
  }
`,Vl=e.css`
  position: absolute;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
`;function Wl(t){return e.css`
    .edit-btn {
      background: ${t.colors.primary};
      color: ${t.colors.palette.dark[800]};
      border-radius: 2px;
      &:hover {
        background: ${t.colors.palette.primary[600]};
        color: ${t.colors.black};
      }
    }
  `}function Gl(){(0,e.getAppStore)().dispatch(e.appActions.activePagePartChanged(e.PagePart.Header))}function Zl(){(0,e.getAppStore)().dispatch(e.appActions.activePagePartChanged(e.PagePart.Footer))}function _l(){(0,e.getAppStore)().dispatch(e.appActions.activePagePartChanged(e.PagePart.Body))}function Ul(){const t=(0,e.getAppStore)().getState(),o=t.appConfig.header.layout;return s.searchUtils.findLayoutId(o,t.browserSizeMode,t.appConfig.mainSizeMode)}function Yl(){const t=(0,e.getAppStore)().getState(),o=t.appConfig.footer.layout;return s.searchUtils.findLayoutId(o,t.browserSizeMode,t.appConfig.mainSizeMode)}function Xl(t){var o;const i=(0,e.getAppStore)().getState(),n=null===(o=i.appConfig.dialogs[t])||void 0===o?void 0:o.layout;return s.searchUtils.findLayoutId(n,i.browserSizeMode,i.appConfig.mainSizeMode)}function ql(t){return Object.keys(t).find((e=>t[e]))}function Jl(t,o,i,n,a){return e.css`
    ${Hl};
    ${Wl(n)};
    position: relative;
    z-index: auto;
    top: 0;
    display: ${i?"flex":"none"};
    width: 100%;
    height: auto;
    min-height: ${parseFloat(o)}px;
    overflow: hidden;
    background-color: ${t.backgroundColor||a.header.bg||"transparent"};
    background-image: ${t.backgroundIMage};
    background-position: ${t.backgroundPosition};
    color: ${a.header.color};
    border-bottom: 1px dashed ${e.polished.rgba(n.colors.white,.12)};
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
  `}function Ql(t){const{header:n,headerVisible:a,browserSizeMode:l,mainSizeMode:r,activePagePart:d,pageContext:u,onHeightChange:c}=t,p=e.ReactRedux.useSelector((t=>{var o;return(null===(o=t.appRuntimeInfo)||void 0===o?void 0:o.appMode)===e.AppMode.Design})),h=e.React.useRef(null),g=n.height[l]||n.height[r]||75,m=n.layout,f=!m[l],y=u.builderTheme;e.React.useEffect((()=>{let t;return h.current&&(t=function(t){let e,i;return(0,zt.interact)(t).origin("parent").resizable({inertia:!1,edges:{bottom:".resize-handler"},onstart:o=>{o.stopPropagation(),e=0,i=t.getBoundingClientRect().height,t.style.minHeight="0px"},onmove:o=>{o.stopPropagation();const n=o.deltaRect;e+=n.height,t.style.height=`${i+e}px`},onend:n=>{n.stopPropagation();const a=(0,o.getAppConfigAction)().appConfig.header;t.style.height=null,t.style.minHeight=null,(0,o.getAppConfigAction)().editHeader(a.setIn(["height",s.utils.getCurrentSizeMode()],Math.round(i+e))).exec()}})}(h.current)),()=>{t&&t.unset()}}),[]);const v=Ul(),I=e.React.useMemo((()=>Object.assign(Object.assign({},u),{isHeader:!0,rootLayoutId:v,viewOnly:f||p&&d!==e.PagePart.Header})),[u,v,f,d,p]),x=e.React.useCallback(((t,e)=>{c(Math.round(e))}),[c]);return(0,e.jsx)(s.PageContext.Provider,{value:I},(0,e.jsx)("div",{className:"header",css:Jl(n,g,a,u.builderTheme,u.theme),ref:t=>h.current=t},(0,e.jsx)("div",{className:"w-100 h-100",css:e.css`
            overflow: auto;
            display: flex;
            position: relative;
            z-index: 0;
            min-height: ${parseFloat(g)}px;
          `},(0,e.jsx)(to,{layouts:m,isPageItem:!0,visible:a})),!f&&(0,e.jsx)("span",{className:"resize-handler",css:e.css`
              bottom: ${-8}px;
              z-index: 1;
            `}),d!==e.PagePart.Header&&!f&&(0,e.jsx)("div",{className:"edit-mask-all",css:e.css`
              ${Vl};
              background: ${d===e.PagePart.Body?"transparent":e.polished.rgba(y.colors.palette.light[400],.6)};
              z-index: 1;
            `,onClick:_l}),d===e.PagePart.Body&&(!f||l===r)&&(0,e.jsx)("div",{className:"edit-mask justify-content-center align-items-center",css:e.css`
              ${Vl};
              background: ${e.polished.rgba(y.colors.palette.light[400],.6)};
              z-index: 1;
              display: none;
            `},(0,e.jsx)(i.Button,{className:"edit-btn btn-large border-0",onClick:Gl},(0,e.jsx)(Fl,{size:"m"}),u.formatMessage("editHeader"))),(0,e.jsx)(e.ReactResizeDetector,{handleHeight:!0,handleWidth:!1,onResize:x})))}function Kl(t,o,i,n,a){return e.css`
    ${Hl};
    ${Wl(n)};
    display: ${i?"flex":"none"};
    position: relative;
    width: 100%;
    height: auto;
    min-height: ${parseFloat(o)}px;
    overflow: hidden;
    background-color: ${t.backgroundColor||a.footer.bg||"transparent"};
    background-image: ${t.backgroundIMage};
    background-position: ${t.backgroundPosition};
    color: ${a.footer.color};
    border-top: 1px dashed ${e.polished.rgba(n.colors.white,.12)};
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
  `}function tr(t){const{footer:n,footerVisible:a,browserSizeMode:l,mainSizeMode:r,activePagePart:d,pageContext:u,onHeightChange:c}=t,p=e.ReactRedux.useSelector((t=>{var o;return(null===(o=t.appRuntimeInfo)||void 0===o?void 0:o.appMode)===e.AppMode.Design})),h=e.React.useRef(null),g=n.height[l]||n.height[r]||75,m=n.layout,f=!m[l],y=u.builderTheme;e.React.useEffect((()=>{let t;return h.current&&(t=function(t){let e,i;return(0,zt.interact)(t).origin("parent").resizable({inertia:!1,edges:{top:".resize-handler"},onstart:o=>{o.stopPropagation(),e=0,i=t.getBoundingClientRect().height},onmove:o=>{o.stopPropagation();const n=o.deltaRect;e+=n.height,t.style.height=`${i+e}px`},onend:n=>{n.stopPropagation();const a=(0,o.getAppConfigAction)().appConfig.footer;t.style.height=null,(0,o.getAppConfigAction)().editFooter(a.setIn(["height",s.utils.getCurrentSizeMode()],Math.round(i+e))).exec()}})}(h.current)),()=>{t&&t.unset()}}),[]);const v=Yl(),I=e.React.useMemo((()=>Object.assign(Object.assign({},u),{isFooter:!0,rootLayoutId:v,viewOnly:f||p&&d!==e.PagePart.Footer})),[u,v,f,d,p]),x=e.React.useCallback(((t,e)=>{c(Math.round(e))}),[c]);return(0,e.jsx)(s.PageContext.Provider,{value:I},(0,e.jsx)("div",{className:"footer",css:Kl(n,g,a,u.builderTheme,u.theme),ref:t=>h.current=t},!f&&(0,e.jsx)("span",{className:"resize-handler",css:e.css`
              top: ${-8}px;
              z-index: 1;
            `}),(0,e.jsx)("div",{className:"w-100 h-100",css:e.css`
            overflow: auto;
            display: flex;
            position: relative;
            z-index: 0;
            min-height: ${parseFloat(g)}px;
          `},(0,e.jsx)(to,{layouts:m,isPageItem:!0,visible:a})),d!==e.PagePart.Footer&&!f&&(0,e.jsx)("div",{className:"edit-mask-all",css:e.css`
              ${Vl};
              background: ${d===e.PagePart.Body?"transparent":e.polished.rgba(y.colors.palette.light[400],.6)};
              z-index: 1;
            `,onClick:_l}),d===e.PagePart.Body&&(!f||l===r)&&(0,e.jsx)("div",{className:"edit-mask justify-content-center align-items-center",css:e.css`
              ${Vl};
              background: ${e.polished.rgba(y.colors.palette.light[400],.6)};
              z-index: 1;
              display: none;
            `},(0,e.jsx)(i.Button,{className:"edit-btn btn-large border-0",onClick:Zl},(0,e.jsx)(Fl,{size:"m"}),u.formatMessage("editFooter"))),(0,e.jsx)(e.ReactResizeDetector,{handleHeight:!0,handleWidth:!1,onResize:x})))}const{animated:er,useSpring:or}=e.spring,ir=e.css`
  position: relative;
  display: flex;
  background-color: var(--white);
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
  .panel-header {
    background-color: var(--primary-600);
    color: var(--white);
    font-weight: 500;
    font-size: 0.875rem;
    height: 36px;
    .actions .jimu-btn {
      color: var(--primary-200);
      &:hover {
        color: var(--white);
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
`,nr=[{name:"preventOverflow",enabled:!0,options:{boundary:"viewport",altAxis:!0}},{name:"flip",enabled:!0,options:{boundary:"viewport",fallbackPlacements:(0,i.getFallbackPlacementsModifier)(["top-start","bottom-start"],!0).options.fallbackPlacements}}];function ar(t){const{layoutId:o,layoutItemId:n,controllerId:a,onClick:s,onClose:l}=t,[r,d]=e.React.useState(!1),c=e.React.useRef(),p=e.hooks.useTranslation(),h=e.ReactRedux.useSelector((t=>t.appRuntimeInfo.appMode===e.AppMode.Design)),g=e.ReactRedux.useSelector((t=>{var e;const i=t.appRuntimeInfo.selection;return!!i&&(o===i.layoutId&&n===i.layoutItemId||null!=(null===(e=c.current)||void 0===e?void 0:e.querySelector(`div.builder-layout-item[data-layoutid="${i.layoutId}"][data-layoutitemid="${i.layoutItemId}"]`)))})),m=e.ReactRedux.useSelector((t=>t.appConfig.layouts[o].content[n].widgetId)),f=e.ReactRedux.useSelector((t=>{var e,o,i;const n=t.appConfig.widgets[m];return(null===(o=null===(e=null==n?void 0:n.manifest)||void 0===e?void 0:e.properties)||void 0===o?void 0:o.hasEmbeddedLayout)&&Object.keys(null!==(i=n.layouts)&&void 0!==i?i:{}).length>0})),y=e.ReactRedux.useSelector((t=>{var o;const i=t.appConfig.widgets[m];return(null===(o=null==i?void 0:i.manifest)||void 0===o?void 0:o.widgetType)!==e.WidgetType.Layout})),v=e.ReactRedux.useSelector((t=>{var e,o,i;const n=t.appConfig.widgets[m];return null!==(i=null===(o=null===(e=null==n?void 0:n.manifest)||void 0===e?void 0:e.properties)||void 0===o?void 0:o.supportInlineEditing)&&void 0!==i&&i})),I=e.ReactRedux.useSelector((t=>{const e=t.widgetsRuntimeInfo[m];return v&&(null==e?void 0:e.isInlineEditing)})),x=e.ReactRedux.useSelector((t=>{var o;const i=null===(o=t.widgetsRuntimeInfo)||void 0===o?void 0:o[m];return(null==i?void 0:i.state)===e.WidgetState.Opened})),b=e.ReactRedux.useSelector((t=>{const e=t.appConfig.widgets[m];return null==e?void 0:e.label}),e.ReactRedux.shallowEqual),w=e.ReactRedux.useSelector((t=>{var e;const o=t.widgetsRuntimeInfo[m];return null!==(e=null==o?void 0:o.isClassLoaded)&&void 0!==e&&e})),S=e.ReactRedux.useSelector((t=>t.appConfig.controllerPanels[a].effect)),C=e.React.useMemo((()=>{var t,o;return(null==S?void 0:S.type)&&S.type!==e.AnimationType.None?(0,e.getAnimationEffect)(S.type,{configType:null===(t=S.option)||void 0===t?void 0:t.configType,direction:null===(o=S.option)||void 0===o?void 0:o.direction}):null}),[S]),[R,T]=or((()=>e.DEFAULT_ANIMATION_PROPS),[C]),A=e.React.useCallback((t=>{l(t,m)}),[m,l]),M=e.React.useCallback((t=>{var i;t.stopPropagation();const a=null===(i=(0,e.getAppStore)().getState().appRuntimeInfo)||void 0===i?void 0:i.selection;a&&a.layoutId===o&&a.layoutItemId===n||(0,e.getAppStore)().dispatch(e.appActions.selectionChanged({layoutId:o,layoutItemId:n})),null==s||s(t)}),[o,n,s]),P=e.React.useCallback((t=>{t.stopPropagation(),v&&(0,e.getAppStore)().dispatch(e.appActions.setWidgetIsInlineEditingState(m,!0))}),[m,v]);let L;e.React.useEffect((()=>{!x&&!g||r||(d(!0),e.WidgetManager.getInstance().loadWidgetClass(m).catch((t=>{console.log(t)})))}),[x,g,m,r]),e.React.useEffect((()=>{x&&!h&&null!=C&&T.start(Object.assign(Object.assign({},C.animateProps()),{onRest:()=>{e.lodash.defer((()=>{c.current.style.clipPath=null,c.current.parentElement.style.clipPath=null}))}}))}),[T,x,h,C]);const j=h?g:x;r&&w&&(L=e.WidgetManager.getInstance().getWidgetClass(m));const z=h&&!I&&y&&!f,k=(0,u.getTheme2)(),N=(0,e.getAppStore)().getState().appConfig.layouts[o].content[n];return(0,e.jsx)(er.div,{className:(0,e.classNames)("controller-panel flex-column w-100 h-100",{"d-none":!r||!j}),css:ir,style:null!=C?R:null,onClick:M,onDoubleClick:P,ref:c},(0,e.jsx)("div",{className:"panel-header d-flex align-items-center flex-shrink-0 px-3"},(0,e.jsx)("div",{className:"label d-flex align-items-center h-100"},(0,e.jsx)("div",{className:"text-truncate"},b)),(0,e.jsx)("div",{className:"actions ml-auto"},(0,e.jsx)(i.Button,{className:"p-0",icon:!0,type:"tertiary",size:"sm",onClick:A},(0,e.jsx)(Kn,null)))),(0,e.jsx)("div",{className:"panel-content d-flex flex-grow-1"},!w&&(0,e.jsx)(i.Loading,{type:i.LoadingType.Donut}),L&&(0,e.jsx)("div",{className:"w-100 h-100 widget-content"},(0,e.jsx)(e.ErrorBoundary,null,(0,e.jsx)(L,{widgetId:m,layoutId:o,layoutItemId:n}),h&&(0,e.jsx)(Ae,{layoutId:o,layoutItem:N,refElement:c.current,modifiers:nr,builderTheme:k,formatMessage:p,showDefaultTools:!1}))),z&&(0,e.jsx)("div",{className:"widget-mask"})))}const{useSpring:sr}=e.spring,{animated:lr}=e.spring;function rr(t){var i,n,a,l,r,d;const{controllerId:c,selected:p,innerSelected:h,isDesignMode:g}=t,m=e.React.useRef(),[f,y]=e.React.useState(!1),[v,I]=e.React.useState(),x=e.ReactRedux.useSelector((t=>{const e=t.appConfig.widgets[c],o=e.manifest.layouts[0].name,i=e.layouts[o];return s.searchUtils.findLayoutId(i,t.browserSizeMode,t.appConfig.mainSizeMode)})),b=e.ReactRedux.useSelector((t=>{var e;const o=t.appConfig.layouts[x],i=Object.keys(null!==(e=o.content)&&void 0!==e?e:{}).filter((t=>{const e=o.content[t];return null!=(null==e?void 0:e.widgetId)&&!e.isPending}));return i.sort(),i.join(",")})),w=e.ReactRedux.useSelector((t=>{var o,i;if(g)return!1;const n=Object.keys(null!==(o=t.widgetsRuntimeInfo)&&void 0!==o?o:{}).filter((o=>t.widgetsRuntimeInfo[o].state===e.WidgetState.Opened)),a=t.appConfig.layouts[x];return Object.keys(null!==(i=a.content)&&void 0!==i?i:{}).some((t=>{const e=a.content[t];return null!=(null==e?void 0:e.widgetId)&&!e.isPending&&n.includes(e.widgetId)}))})),S=e.React.useMemo((()=>b.split(",").filter((t=>""!==t))),[b]),C=e.ReactRedux.useSelector((t=>t.appConfig.controllerPanels[c])),R=function(t){const{controllerId:o}=t,i=e.ReactRedux.useSelector((t=>{var e;const i=null===(e=t.appRuntimeInfo)||void 0===e?void 0:e.animationPreview;return(null==i?void 0:i.controllerId)===o?i.id:-1})),n=e.ReactRedux.useSelector((t=>t.appConfig.controllerPanels[o].effect)),a=e.React.useMemo((()=>{var t,o;return(null==n?void 0:n.type)&&n.type!==e.AnimationType.None?(0,e.getAnimationEffect)(n.type,{configType:null===(t=n.option)||void 0===t?void 0:t.configType,direction:null===(o=n.option)||void 0===o?void 0:o.direction}):null}),[n]),[s,l]=sr((()=>e.DEFAULT_ANIMATION_PROPS),[a]);return e.React.useEffect((()=>{i>0&&null!=a&&l.start(Object.assign(Object.assign({},a.animateProps()),{onRest:()=>{(0,e.getAppStore)().dispatch(e.appActions.clearAnimationPreview())}}))}),[l,i,a]),null!=a?s:null}({controllerId:c});e.React.useEffect((()=>{let t,e;const i=(o,i,n)=>{t=i,e=n,y(!0),I({width:i,height:n})},n=(o,i,n,a,s)=>{I({width:t+a,height:e+s})},a=(i,n,a,l,r)=>{y(!1),function(t,e,i){const n=(0,o.getAppConfigAction)();let a=n.appConfig.controllerPanels[t];a=s.utils.isPercentage(a.width)?a.set("width",`${(100*e/window.innerWidth).toFixed(2)}%`):a.set("width",`${Math.round(e)}px`),a=s.utils.isPercentage(a.height)?a.set("height",`${(100*i/window.innerHeight).toFixed(2)}%`):a.set("height",`${Math.round(i)}px`),n.editControllerPanel(t,a).exec()}(c,t+l,e+r)};return m.current&&$t((0,zt.interact)(m.current).origin("parent"),{layoutItemId:"controller",restrictEdges:!0,onResizeStart:i,onResizing:n,onResizeEnd:a}),()=>{}}),[c]);const T=e.React.useCallback((t=>{t.stopPropagation()}),[]),A=e.React.useCallback(((t,o)=>{t.stopPropagation(),(0,e.getAppStore)().dispatch(e.appActions.selectionChanged(null)),(0,e.getAppStore)().dispatch(e.appActions.closeWidget(o))}),[]),M=g?p||h:w;let P=R;return null==(null==C?void 0:C.offsetX)&&null==(null==C?void 0:C.offsetY)||(P=Object.assign({},{transform:`translate(${null!==(i=null==C?void 0:C.offsetX)&&void 0!==i?i:0}px, ${null!==(n=null==C?void 0:C.offsetY)&&void 0!==n?n:0}px)`},R)),(0,e.jsx)(lr.div,{ref:m,style:P,css:(()=>{const t=(0,u.getTheme2)();return e.css`
      ${function(t){var o,i,n,a;return e.css`
    position: fixed;
    top: ${(null===(o=null==t?void 0:t.position)||void 0===o?void 0:o.includes("TOP"))?0:"auto"};
    left: ${(null===(i=null==t?void 0:t.position)||void 0===i?void 0:i.includes("LEFT"))?0:"auto"};
    right: ${(null===(n=null==t?void 0:t.position)||void 0===n?void 0:n.includes("RIGHT"))?0:"auto"};
    bottom: ${(null===(a=null==t?void 0:t.position)||void 0===a?void 0:a.includes("BOTTOM"))?0:"auto"};
    width: ${null==t?void 0:t.width};
    height: ${null==t?void 0:t.height};
    overflow: visible;
    z-index: 2;
  `}(C)};
      display: ${M?"block":"none"};
      width: ${f?v.width+"px":null==C?void 0:C.width};
      height: ${f?v.height+"px":null==C?void 0:C.height};
      border: ${p?"1px solid var(--primary-600)":"none"};
      background: ${p?e.polished.rgba(t.colors.palette.primary[600],.2):"transparent"};
    `})(),onClick:T,className:"panel-container"},p&&(0,e.jsx)(ue,{left:!(null===(a=null==C?void 0:C.position)||void 0===a?void 0:a.includes("LEFT")),right:!(null===(l=null==C?void 0:C.position)||void 0===l?void 0:l.includes("RIGHT")),top:!(null===(r=null==C?void 0:C.position)||void 0===r?void 0:r.includes("TOP")),bottom:!(null===(d=null==C?void 0:C.position)||void 0===d?void 0:d.includes("BOTTOM"))}),(0,e.jsx)(e.React.Fragment,null,S.map((t=>(0,e.jsx)(ar,{key:t,controllerId:c,layoutId:x,layoutItemId:t,onClose:A})))))}function dr(t){const{pageId:o}=t,i=e.ReactRedux.useSelector((t=>function(t,o,i){var n;const a=Object.keys(null!==(n=t.controllerPanels)&&void 0!==n?n:{}).filter((n=>{const a=function(t,e,o,i,n=!1){let a=P(t,e,o,i,n),s=i;if(a||(a=P(t,e,o,t.mainSizeMode,n),s=t.mainSizeMode),a)return M(t,a.layoutId,s)}(t,n,e.LayoutItemType.Widget,i);return null!=a&&(a.type!==e.ContainerType.Page||a.id===o)}));return a.sort(),a.join(",")}(t.appConfig,o,t.browserSizeMode))),n=e.React.useMemo((()=>i.split(",").filter((t=>""!==t))),[i]),a=e.ReactRedux.useSelector((t=>t.appRuntimeInfo.appMode===e.AppMode.Design)),[s,l]=e.ReactRedux.useSelector((t=>{var o,i;if(!a)return[null,null];const n=t.appRuntimeInfo.selection;if(!n)return[null,null];const{layoutId:s,layoutItemId:l}=n,r=t.appConfig.layouts[s].content[l];if((null==r?void 0:r.type)===e.LayoutItemType.Widget&&r.widgetId){const e=t.appConfig.widgets[r.widgetId];if("widgets/common/controller/"===(null==e?void 0:e.uri)&&(null===(o=t.appConfig.controllerPanels)||void 0===o?void 0:o[r.widgetId]))return[r.widgetId,null]}const d=o=>{var i,n,a,s,l,r,d,u;switch(null==o?void 0:o.type){case e.LayoutParentType.View:{const e=o.id,l=t.appConfig.views[e].parent,r=t.appConfig.sections[l],d=(null===(n=null===(i=r.parent)||void 0===i?void 0:i[t.browserSizeMode])||void 0===n?void 0:n[0])||(null===(s=null===(a=r.parent)||void 0===a?void 0:a[t.appConfig.mainSizeMode])||void 0===s?void 0:s[0]),u=t.appConfig.layouts[null==d?void 0:d.layoutId];return null==u?void 0:u.parent}case e.LayoutParentType.Widget:{const e=o.id,i=t.appConfig.widgets[e],n=(null===(r=null===(l=i.parent)||void 0===l?void 0:l[t.browserSizeMode])||void 0===r?void 0:r[0])||(null===(u=null===(d=i.parent)||void 0===d?void 0:d[t.appConfig.mainSizeMode])||void 0===u?void 0:u[0]),a=t.appConfig.layouts[null==n?void 0:n.layoutId];return null==a?void 0:a.parent}default:return null}};let u=t.appConfig.layouts[s].parent;for(;u;){if(u.type===e.LayoutParentType.Widget){const e=t.appConfig.widgets[u.id];if("widgets/common/controller/"===(null==e?void 0:e.uri)&&(null===(i=t.appConfig.controllerPanels)||void 0===i?void 0:i[e.id]))return[u.id,r.id]}u=d(u)}return[null,null]}),e.ReactRedux.shallowEqual);return e.React.useEffect((()=>{var t;if(s){const o=(0,e.getAppStore)().getState(),i=Object.keys(null!==(t=o.widgetsRuntimeInfo)&&void 0!==t?t:{}).filter((t=>{const i=o.widgetsRuntimeInfo[t];return i.state===e.WidgetState.Opened&&i.controllerWidgetId!==s}));i.length>0&&(0,e.getAppStore)().dispatch(e.appActions.closeWidgets(i))}}),[s]),e.React.useEffect((()=>{var t;const o=(0,e.getAppStore)().getState(),i=Object.keys(null!==(t=o.widgetsRuntimeInfo)&&void 0!==t?t:{}).filter((t=>o.widgetsRuntimeInfo[t].state===e.WidgetState.Opened));i.length>0&&(0,e.getAppStore)().dispatch(e.appActions.closeWidgets(i))}),[a]),(0,e.jsx)(e.React.Fragment,null,n.map((t=>(0,e.jsx)(rr,{key:t,isDesignMode:a,selected:s===t&&null===l,innerSelected:s===t&&null!=l,controllerId:t}))))}function ur(t){const{pageJson:o,visible:i,renderedPageId:n,browserSizeMode:a,activePagePart:l,pageContext:r,headerFooterHeight:d}=t,[u,c]=e.React.useState(0),{previewId:p,playMode:h}=e.ReactRedux.useSelector((t=>function(t,e){const o=t.appRuntimeInfo.animationPreview;return(null==o?void 0:o.pageId)===e?{previewId:o.id,playMode:o.playMode}:{previewId:0,playMode:null}}(t,o.id)),e.ReactRedux.shallowEqual),g=e.React.useMemo((()=>function(t,o){if(t){const i=(0,e.getAppStore)().getState().appConfig,n=t.layout[i.mainSizeMode],a=i.layouts[n];if((null==a?void 0:a.type)===e.LayoutType.GridLayout)return o>0?`calc(100% - ${o}px)`:"100%"}return"auto"}(o,d)),[d]),m=o.layout,f=o.oneByOneEffect&&o.oneByOneEffect.type!==e.AnimationType.None?o.oneByOneEffect:null,y=e.ReactRedux.useSelector((t=>{var o;return null===f||(null===(o=t.appRuntimeInfo)||void 0===o?void 0:o.appMode)===e.AppMode.Design})),v=e.ReactRedux.useSelector((t=>null===f?null:t.browserSizeMode)),I=e.React.useRef(f),x=e.React.useRef(v),b=e.React.useRef(i),w=f?!i:null;e.React.useEffect((()=>{I.current=f})),e.React.useEffect((()=>{y&&b.current||c((0,e.getNextAnimationId)())}),[y]),e.React.useEffect((()=>{y||x.current===v||c((0,e.getNextAnimationId)()),x.current=v}),[v,y]),e.React.useEffect((()=>{!y&&b.current!==i&&I.current&&c((0,e.getNextAnimationId)()),b.current=i}),[i]);const S=!m[a];let C;o.mode!==e.PageMode.FitWindow&&o.maxWidth>0&&(C=o.maxWidth);const R=e.React.useMemo((()=>{const t=(0,e.getAppStore)().getState();let i;return o.layout&&(i=s.searchUtils.findLayoutId(o.layout,a,t.appConfig.mainSizeMode)),Object.assign(Object.assign({},r),{maxWidth:C,viewOnly:S,rootLayoutId:i,pageId:n})}),[r,S,C,n,o.layout,a]),T=e.React.useMemo((()=>({setting:!y||p>0?f:null,revert:w,playId:p>0?p:u,oid:R.rootLayoutId,playMode:h,onContextAnimationEnd:()=>{p>0?(0,e.getAppStore)().dispatch(e.appActions.clearAnimationPreview()):c(-1)}})),[y,w,u,p,f,R.rootLayoutId]),A=e.React.useCallback((()=>e.css`
      display: ${i?"flex":"none"};
      position: relative;
      background-color: ${o.bodyBackgroundColor||"transparent"};
      z-index: 1;
      flex: 1 0 auto;
      height: ${g};

      body:not(.design-mode) & {
        .edit-mask {
          display: none !important;
        }
      }

      .exb-drop-area {
        pointer-events: ${l!==e.PagePart.Body?"none !important":"auto"}
      }
    `),[i,g,l,o.bodyBackgroundColor]);if(m)return(0,e.jsx)(s.PageContext.Provider,{key:o.id,value:R},(0,e.jsx)(s.PageVisibilityContext.Provider,{value:i},(0,e.jsx)("div",{id:o.id,"data-pageid":o.id,className:"page",css:A()},(0,e.jsx)(e.AnimationContext.Provider,{value:T},(0,e.jsx)(to,{layouts:m,isPageItem:!0,visible:i,className:"w-100",css:e.css`
                margin: 0 auto;
                background-color: transparent;
                z-index: 0;
              `})),a!==e.BrowserSizeMode.Small&&(0,e.jsx)(dr,{pageId:o.id}),l!==e.PagePart.Body&&(0,e.jsx)("div",{className:"edit-mask",css:e.css`
                ${Vl};
                background: ${e.polished.rgba(r.theme.colors.palette.dark[800],.6)};
                z-index: 1;
              `,onClick:_l}))))}(0,s.registerLayoutBuilder)(e.LayoutType.FixedLayout,Qi),(0,s.registerLayoutBuilder)(e.LayoutType.FlowLayout,El),(0,s.registerLayoutBuilder)(e.LayoutType.GridLayout,ja),(0,s.registerLayoutBuilder)(e.LayoutType.ColumnLayout,sn);class cr extends e.React.PureComponent{constructor(t){super(t),this.updateHeaderHeight=t=>{this.setState({headerHeight:t})},this.updateFooterHeight=t=>{this.setState({footerHeight:t})},this.startPaste=()=>{var t;const i=null===(t=(0,e.getAppStore)().getState().appRuntimeInfo)||void 0===t?void 0:t.clipboard,{activePagePart:n,pageStatus:a,currentDialogId:l,dialogs:r}=this.props;if(i){let t;t=l&&r[l]?Xl(l):n===e.PagePart.Header?Ul():n===e.PagePart.Footer?Yl():function(t){var o;const i=(0,e.getAppStore)().getState(),n=null===(o=i.appConfig.pages[t])||void 0===o?void 0:o.layout;return n?s.searchUtils.findLayoutId(n,i.browserSizeMode,i.appConfig.mainSizeMode):null}(ql(a)),function(t,i){var n,a;const l=(0,o.getAppConfigAction)(),{layoutId:r,layoutItemId:d}=t;if(!(null===(a=null===(n=l.appConfig.layouts[r])||void 0===n?void 0:n.content)||void 0===a?void 0:a[d]))return;const u=l.appConfig.layouts[i].type;u===e.LayoutType.FlowLayout?function(t,i){var n,a,s;O(this,void 0,void 0,(function*(){const l=(0,o.getAppConfigAction)(),{layoutId:r,layoutItemId:d,width:u,height:c}=t,p=l.duplicateLayoutItem(r,r,d,!0);l.clearParentOfContent(p,!0),l.setParentOfContent(p,!0);const h=null!==(a=null===(n=(0,e.getAppStore)().getState().appRuntimeInfo)||void 0===n?void 0:n.zoomScale)&&void 0!==a?a:1,g=function(t,e,o){const i=window.parent.document.querySelector('iframe[name="_appWindow"]'),n=document.querySelectorAll(`div.flow-layout[data-layoutid="${t}"] > div.trail-container > div.builder-layout-item`);let a=-1,s=2;if(i&&n){const t=i.getBoundingClientRect();n.forEach(((e,o)=>{if(-1===a){const i=e.getBoundingClientRect();(i.top+t.top>=0||i.top+i.height+t.top>=0)&&(a=o+1)}})),s=Math.round(12*e*o/t.width)}return{colSpan:s,insertIndex:a}}(i,u,h);if(-1===g.insertIndex&&(g.insertIndex=(null===(s=l.appConfig.layouts[i].order)||void 0===s?void 0:s.length)||0),l.appConfig.layouts[r].type===e.LayoutType.FlowLayout){const{updatedAppConfig:t}=yield V(l.appConfig,{layoutInfo:p},{layoutId:i},{left:0,top:0,width:u,height:c},{left:0,top:0,width:u,height:c},g.insertIndex);window.jimuConfig.isBuilder?((0,o.getAppConfigAction)(t).exec(),o.builderAppSync.publishChangeSelectionToApp(p)):(0,e.getAppStore)().dispatch(e.appActions.layoutChanged(t,p))}else X({layoutInfo:p},{layoutId:i},{left:0,top:0,width:u,height:c},{left:0,top:0,width:u,height:c},g.colSpan,g.insertIndex,l.appConfig).catch((t=>{console.error(t)}))}))}(t,i):u===e.LayoutType.FixedLayout?function(t,i,n=null){var a,l,r,d;let u=(0,o.getAppConfigAction)();const{layoutId:c,layoutItemId:p,width:h,height:g}=t,m=(null===(l=null===(a=u.appConfig.layouts[c])||void 0===a?void 0:a.content)||void 0===l?void 0:l[p]).bbox,f=u.duplicateLayoutItem(c,c,p,!0);u.clearParentOfContent(f,!0),u.setParentOfContent(f,!0);const y=null!==(d=null===(r=(0,e.getAppStore)().getState().appRuntimeInfo)||void 0===r?void 0:r.zoomScale)&&void 0!==d?d:1;V(u.appConfig,{layoutInfo:f},{layoutId:i},{left:0,right:0,width:h,height:g},{left:0,right:0,width:h,height:g}).then((t=>{const{layoutInfo:a,updatedAppConfig:l}=t;if(u=(0,o.getAppConfigAction)(l),n||(n=function(t){const e=window.parent.document.querySelector('div[data-layoutid="right-sidebar-left-layout"]'),o=window.parent.document.querySelector('iframe[name="_appWindow"]');let i,n,a,s,l;if(e&&o){const r=e.getBoundingClientRect(),d=o.getBoundingClientRect();if(n=d.left,a=d.top,s=d.width,l=d.height,t&&(i=(o.contentDocument||o.contentWindow.document).querySelector(`div.layout[data-layoutid="${t}"]`),i)){const t=i.getBoundingClientRect();n+=t.left,a+=t.top,s=t.width,l=t.height}return{left:n>=r.left?0:r.left-n,top:a>=r.top?0:r.top-a,width:s,height:l}}return null}(i)),n){const t=n.width/y,e=n.height/y;u.editLayoutItemBBox(a,s.utils.replaceBoundingBox(m,{left:0,top:0,right:0,bottom:0,width:Math.round(h),height:Math.round(g)},{width:t,height:e}))}u.editLayoutItemSetting(a,{vCenter:!0,hCenter:!0});const r=u.appConfig.layouts[a.layoutId].content[a.layoutItemId].bbox;u.editLayoutItemBBox(a,r.set("left","50%").set("top","50%")),(0,e.getAppStore)().dispatch(e.appActions.layoutChanged(u.appConfig,a))}))}(t,i):console.error(`unknown layout type: ${u}`)}(i,t)}},this.isMac=()=>{var t,e;return"macOS"===(null===(e=null===(t=window.jimuUA)||void 0===t?void 0:t.os)||void 0===e?void 0:e.name)},this.clearSelection=t=>{!mt()||Et()||jt()||(t.stopPropagation(),(0,e.getAppStore)().dispatch(e.appActions.selectionChanged(null)))},this.formatMessage=(t,e)=>this.props.intl?this.props.intl.formatMessage({id:t,defaultMessage:Ht[t]},e):Ht[t],this.state={headerHeight:0,footerHeight:0},e.ExtensionManager.getInstance().registerExtension({epName:e.extensionSpec.ExtensionPoints.LayoutTransformer,extension:new Ns}),e.ExtensionManager.getInstance().registerExtension({epName:e.extensionSpec.ExtensionPoints.LayoutTransformer,extension:new $s}),e.ExtensionManager.getInstance().registerExtension({epName:e.extensionSpec.ExtensionPoints.LayoutTransformer,extension:new Os}),this.isMac()?this.keyBindings={"command+keyv":this.startPaste}:this.keyBindings={"ctrl+keyv":this.startPaste},this.updatePageContext()}componentDidMount(){mt()&&!document.body.classList.contains("design-mode")&&document.body.classList.add("design-mode"),ht()&&!document.body.classList.contains("lock-layout")&&document.body.classList.add("lock-layout")}componentDidUpdate(t){var e;const o=null===(e=window.document)||void 0===e?void 0:e.documentElement;o&&(window.jimuConfig.isInBuilder&&mt()?o.classList.add("is-in-builder"):o.classList.remove("is-in-builder")),ql(t.pageStatus)!==ql(this.props.pageStatus)&&(this.pageRef.scrollTop=0)}getPageStyle(){const{pageStatus:t,pages:o,minHeight:i}=this.props,n=o[Object.keys(t).find((e=>t[e]))];return e.css`
      position: relative;
      margin: 0 auto;
      overflow: hidden;
      height: ${n.mode===e.PageMode.FitWindow?"100%":"auto"};
      min-height: ${i}px;
      .is-dragging {
        z-index: ${s.LayoutZIndex.DraggingItem};
        opacity: 0.8;
      }

      body:not(.design-mode) & {
        overflow: auto;
        height: 100%;
      }
    `}updatePageContext(){const{theme:t}=this.props,o={theme:t,builderTheme:(0,u.getBuilderThemeVariables)(),formatMessage:this.formatMessage};if(this.pageContext)for(const t in o)this.pageContext[t]!==o[t]&&(this.pageContext=this.pageContext.set(t,o[t]));else this.pageContext=(0,e.Immutable)(o)}render(){const{pageStatus:t,pages:o}=this.props,i=ql(t);return i&&(null==o?void 0:o[i])?(this.updatePageContext(),(0,e.jsx)("div",{className:"page-renderer d-flex flex-column align-items-center w-100",ref:t=>this.pageRef=t,css:this.getPageStyle(),"data-testid":"pageRenderer",onClick:this.clearSelection},this.renderDialog(),this.renderHeader(),Object.keys(t).map((t=>this.renderPageBody(t))),this.renderFooter(),(0,e.jsx)(e.Keyboard,{bindings:this.keyBindings}))):null}renderHeader(){if(!this.props.header)return null;const{header:t,headerVisible:o,browserSizeMode:i,mainSizeMode:n,activePagePart:a}=this.props;return(0,e.jsx)(Ql,{header:t,activePagePart:a,headerVisible:o,browserSizeMode:i,mainSizeMode:n,pageContext:this.pageContext,onHeightChange:this.updateHeaderHeight})}renderFooter(){if(!this.props.footer)return null;const{footer:t,footerVisible:o,browserSizeMode:i,mainSizeMode:n,activePagePart:a}=this.props;return(0,e.jsx)(tr,{footer:t,activePagePart:a,footerVisible:o,browserSizeMode:i,mainSizeMode:n,pageContext:this.pageContext,onHeightChange:this.updateFooterHeight})}renderPageBody(t){const{pages:o,pageStatus:i,browserSizeMode:n,activePagePart:a}=this.props,s=o[t];if(s&&s.type===e.PageType.Normal)return(0,e.jsx)(ur,{key:s.id,pageJson:s,renderedPageId:t,activePagePart:a,browserSizeMode:n,pageContext:this.pageContext,visible:!!i[s.id],headerFooterHeight:this.state.headerHeight+this.state.footerHeight})}isDialogViewOnly(t){const{browserSizeMode:o}=this.props;return!(o===e.BrowserSizeMode.Large||t.layout[o])}renderDialog(){const{currentDialogId:t,urlDialogJson:o,splashDialogJson:i,isSplashClosed:n,isPageDlgClosed:a,pageDialogJson:l,pageDialogId:r}=this.props,d=!n&&i,u=!a&&l,c=o?(null==i?void 0:i.id)===o.id||(null==l?void 0:l.id)===o.id?null:o:null;return(0,e.jsx)(e.React.Fragment,null,c&&(0,e.jsx)(s.PageContext.Provider,{value:Object.assign(Object.assign({},this.pageContext),{dialogId:t,isDialog:!0,viewOnly:this.isDialogViewOnly(o),rootLayoutId:Xl(t)})},(0,e.jsx)(e.AppDialog,{dialogJson:o})),u&&(0,e.jsx)(s.PageContext.Provider,{value:Object.assign(Object.assign({},this.pageContext),{dialogId:r,isDialog:!0,viewOnly:this.isDialogViewOnly(l),rootLayoutId:Xl(l.id)})},(0,e.jsx)(e.AppDialog,{dialogJson:l,isOpenByPage:!0})),d&&(0,e.jsx)(s.PageContext.Provider,{value:Object.assign(Object.assign({},this.pageContext),{dialogId:i.id,isDialog:!0,viewOnly:this.isDialogViewOnly(i),rootLayoutId:Xl(i.id)})},(0,e.jsx)(e.AppDialog,{dialogJson:i})))}}cr.displayName="BuilderPageRenderer";const pr=(0,e.createSelector)([t=>e.utils.findViewportSize(t.appConfig,t.browserSizeMode).height,(t,e)=>ql(e.pageStatus),(t,e)=>e.dialogId,t=>t.appRuntimeInfo.currentPageId,t=>t.appConfig.pages,t=>t.appConfig.dialogs,t=>t.appConfig.header,t=>t.appConfig.footer,t=>t.appConfig.mainSizeMode,t=>t.browserSizeMode,t=>{var o;return null!==(o=t.appRuntimeInfo.activePagePart)&&void 0!==o?o:e.PagePart.Body},t=>t.appRuntimeInfo.clipboard,t=>t.appRuntimeInfo.currentDialogId,t=>{var e;return null===(e=t.appRuntimeInfo)||void 0===e?void 0:e.dialogInfos},t=>t.appConfig.pages[t.appRuntimeInfo.currentPageId].autoOpenDialogId],((t,e,o,i,n,a,s,l,r,d,u,c,p,h,g)=>{var m,f;if(!e||!n[e])return{};const y=a[Object.keys(a).find((t=>a[t].isSplash))];return{pages:n,dialogs:a,header:s,footer:l,headerVisible:!!n[e].header,footerVisible:!!n[e].footer,mainSizeMode:r,browserSizeMode:d,minHeight:t,activePagePart:u,clipboardItem:c,currentDialogId:p,splashDialogJson:y,isSplashClosed:null===(m=null==h?void 0:h[null==y?void 0:y.id])||void 0===m?void 0:m.isClosed,pageDialogId:g,pageDialogJson:a[g],isPageDlgClosed:null===(f=null==h?void 0:h[i+"-"+g])||void 0===f?void 0:f.isClosed,urlDialogJson:a[o]}})),hr=(0,e.injectIntl)(e.ReactRedux.connect(pr)((0,u.withTheme)(cr)));var gr=p(8679),mr=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};function fr(t,o){var i,n,a,l;const r=o.layoutId,d=t.appRuntimeInfo.selection,u=o.layoutItem;let c=!1,p=!1,h=!1,g=!1;if(u&&(c=Boolean(d&&r===d.layoutId&&u.id===d.layoutItemId),u.type===e.LayoutItemType.Widget)){const e=t.appConfig.widgets[u.widgetId],o=null===(n=null===(i=null==e?void 0:e.manifest)||void 0===i?void 0:i.properties)||void 0===n?void 0:n.supportInlineEditing;if(h=null===(l=null===(a=null==e?void 0:e.manifest)||void 0===a?void 0:a.properties)||void 0===l?void 0:l.supportRepeat,o){const e=t.widgetsRuntimeInfo[u.widgetId];p=e&&e.isInlineEditing}g=s.utils.isWidgetHasEmbeddedLayout(u.widgetId,t.appConfig)}return{selected:c,supportRepeat:h,isInlineEditing:p,isLayoutWidget:g}}const yr=()=>{};function vr(t){return t=>{class o extends e.React.PureComponent{constructor(t){super(t),this.ref=e.React.createRef()}componentDidMount(){const{layoutId:t,layoutItemId:e,layoutItem:o,onResizeStart:i,onResizing:n,onResizeEnd:a,onDragStart:s,onDragging:l,onDragEnd:r,useDragHandler:d}=this.props;this.ref.current&&(this.interactable=(0,zt.interact)(this.ref.current).origin("parent"),this.interactable=Pt(this.interactable,{layoutId:t,layoutItemId:e,useDragHandler:d,onDragging:l,onDragStart:s,onDragEnd:r,itemType:o.type,rootLayoutId:()=>this.rootLayoutId,restrict:()=>this.props.restrict}),this.interactable=$t(this.interactable,{layoutItemId:e,onResizing:n,onResizeStart:i,onResizeEnd:a}))}componentWillUnMount(){this.interactable&&(this.interactable.unset(),this.interactable=null)}getStyle(t){return e.css`
          ${this.aspectRatioStyle()};

          &.dragging {
            opacity: 0.9;
          }

          display: flex;
          position: relative;
          touch-action: ${t?"auto":"none"};
          user-select: ${t?"auto":"none"};
        `}aspectRatioStyle(){const{aspectRatio:t,forceAspectRatio:o}=this.props;return o?e.css`
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
          `:e.css`
          & > .rnd-aspect-ratio-wrapper {
            width: 100%;
            height: 100%;
            display: flex;
          }
        `}render(){return(0,e.jsx)(s.PageContext.Consumer,null,(o=>{this.rootLayoutId=o.rootLayoutId;const i=this.props,{gridSize:n,draggable:a,onResizeStart:s,onResizing:l,onResizeEnd:r,style:d,className:u,useDragHandler:c,children:p}=i,h=mr(i,["gridSize","draggable","onResizeStart","onResizing","onResizeEnd","style","className","useDragHandler","children"]),{isInlineEditing:g}=this.props,m=(0,e.classNames)("exb-rnd",u,{"functional-widget":!this.props.isLayoutWidget}),f="string"==typeof d?JSON.parse(d):Object.assign({},d);return this.props.forceAspectRatio&&(f.height="auto"),(0,e.jsx)("div",{className:m,ref:this.ref,css:this.getStyle(g),"data-layoutid":this.props.layoutId,"data-layoutitemid":this.props.layoutItemId,"data-repeatable":this.props.supportRepeat,style:f},(0,e.jsx)("div",{className:"rnd-aspect-ratio-wrapper"},(0,e.jsx)(t,Object.assign({layoutId:this.props.layoutId,className:"w-100",layoutItemId:this.props.layoutItemId},h))),p)}))}}o.defaultProps={left:!0,top:!0,right:!0,bottom:!0,restrict:!1,onResizeStart:yr,onResizing:yr,onResizeEnd:yr,onDragStart:yr,onDragging:yr,onDragEnd:yr};const i=gr(o,t);return e.ReactRedux.connect(fr)(i)}}const{createPageFromTemplate:Ir,createDialogFromTemplate:xr,createSectionFromTemplate:br,createWidgetFromTemplate:wr}=o.templateUtils})(),h})())}}}));