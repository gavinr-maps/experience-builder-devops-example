/*! For license information please see layout-builder.js.LICENSE.txt */
System.register(["jimu-core","jimu-for-builder","jimu-ui","jimu-layouts/layout-runtime","jimu-theme","jimu-core/dnd","jimu-ui/advanced/setting-components","jimu-for-builder/templates","jimu-ui/advanced/style-setting-components","jimu-ui/basic/color-picker"],(function(t,e){var o={},i={},n={},s={},a={},l={},r={},d={},u={},c={};return{setters:[function(t){o.APP_FRAME_NAME_IN_BUILDER=t.APP_FRAME_NAME_IN_BUILDER,o.AnimationComponent=t.AnimationComponent,o.AnimationContext=t.AnimationContext,o.AnimationPlayMode=t.AnimationPlayMode,o.AnimationStartMode=t.AnimationStartMode,o.AnimationTriggerType=t.AnimationTriggerType,o.AnimationType=t.AnimationType,o.AppDialog=t.AppDialog,o.AppMode=t.AppMode,o.BrowserSizeMode=t.BrowserSizeMode,o.ErrorBoundary=t.ErrorBoundary,o.ExtensionManager=t.ExtensionManager,o.HoverType=t.HoverType,o.Immutable=t.Immutable,o.IntersectionContext=t.IntersectionContext,o.Keyboard=t.Keyboard,o.LayoutItemType=t.LayoutItemType,o.LayoutType=t.LayoutType,o.OneByOneAnimation=t.OneByOneAnimation,o.PageMode=t.PageMode,o.PagePart=t.PagePart,o.PageType=t.PageType,o.ParentAnimationMode=t.ParentAnimationMode,o.React=t.React,o.ReactRedux=t.ReactRedux,o.ReactResizeDetector=t.ReactResizeDetector,o.ScreenTransitionType=t.ScreenTransitionType,o.ScreenTriggerType=t.ScreenTriggerType,o.TransitionContainer=t.TransitionContainer,o.TransitionType=t.TransitionType,o.WidgetManager=t.WidgetManager,o.WidgetType=t.WidgetType,o.appActions=t.appActions,o.appConfigUtils=t.appConfigUtils,o.classNames=t.classNames,o.css=t.css,o.extensionSpec=t.extensionSpec,o.getAppStore=t.getAppStore,o.getHoverStyle=t.getHoverStyle,o.getIndexFromProgress=t.getIndexFromProgress,o.getNextAnimationId=t.getNextAnimationId,o.i18n=t.i18n,o.injectIntl=t.injectIntl,o.jimuHistory=t.jimuHistory,o.jsx=t.jsx,o.lodash=t.lodash,o.moduleLoader=t.moduleLoader,o.polished=t.polished,o.spring=t.spring,o.utils=t.utils},function(t){i.appBuilderSync=t.appBuilderSync,i.builderActions=t.builderActions,i.builderAppSync=t.builderAppSync,i.getAppConfigAction=t.getAppConfigAction,i.templateUtils=t.templateUtils},function(t){n.AdvancedButtonGroup=t.AdvancedButtonGroup,n.Button=t.Button,n.Checkbox=t.Checkbox,n.DistanceUnits=t.DistanceUnits,n.Dropdown=t.Dropdown,n.DropdownButton=t.DropdownButton,n.DropdownMenu=t.DropdownMenu,n.FOCUSABLE_CONTAINER_CLASS=t.FOCUSABLE_CONTAINER_CLASS,n.FillType=t.FillType,n.Icon=t.Icon,n.Loading=t.Loading,n.LoadingType=t.LoadingType,n.NumericInput=t.NumericInput,n.Popper=t.Popper,n.Select=t.Select,n.Switch=t.Switch,n.Tab=t.Tab,n.Tabs=t.Tabs,n.Tooltip=t.Tooltip,n._Popper=t._Popper,n.getFallbackPlacementsModifier=t.getFallbackPlacementsModifier,n.hooks=t.hooks,n.styleUtils=t.styleUtils,n.utils=t.utils},function(t){s.CLICK_TOLRERANCE=t.CLICK_TOLRERANCE,s.CONTEXT_MENU_ICON_SIZE=t.CONTEXT_MENU_ICON_SIZE,s.CONTEXT_MENU_ITEM_SIZE=t.CONTEXT_MENU_ITEM_SIZE,s.GridItemType=t.GridItemType,s.LayoutContext=t.LayoutContext,s.LayoutItemSizeModes=t.LayoutItemSizeModes,s.LayoutZIndex=t.LayoutZIndex,s.MIN_LAYOUT_ITEM_SIZE=t.MIN_LAYOUT_ITEM_SIZE,s.PageContext=t.PageContext,s.PageVisibilityContext=t.PageVisibilityContext,s.ParentType=t.ParentType,s.ViewVisibilityContext=t.ViewVisibilityContext,s.ViewportVisibilityContext=t.ViewportVisibilityContext,s.WidgetRenderer=t.WidgetRenderer,s.findLayoutBuilder=t.findLayoutBuilder,s.registerLayoutBuilder=t.registerLayoutBuilder,s.searchUtils=t.searchUtils,s.utils=t.utils},function(t){a.getBuilderThemeVariables=t.getBuilderThemeVariables,a.getTheme=t.getTheme,a.getTheme2=t.getTheme2,a.useTheme=t.useTheme,a.withBuilderTheme=t.withBuilderTheme,a.withTheme=t.withTheme},function(t){l.interact=t.interact},function(t){r.SettingRow=t.SettingRow,r.SettingSection=t.SettingSection,r.SidePopper=t.SidePopper,r.TemplateSelector=t.TemplateSelector,r.WidgetListPopper=t.WidgetListPopper},function(t){d.getBlockTemplates=t.getBlockTemplates,d.getFooterTemplates=t.getFooterTemplates,d.getFullScreenGridPageTemplates=t.getFullScreenGridPageTemplates,d.getFullScreenPageTemplates=t.getFullScreenPageTemplates,d.getGridTemplates=t.getGridTemplates,d.getHeaderTemplates=t.getHeaderTemplates,d.getScreenGroupTemplates=t.getScreenGroupTemplates,d.getScreenTemplates=t.getScreenTemplates,d.getScrollingPageTemplates=t.getScrollingPageTemplates,d.getWindowTemplates=t.getWindowTemplates},function(t){u.AnimationSettingComponent=t.AnimationSettingComponent,u.InputRatio=t.InputRatio,u.InputUnit=t.InputUnit,u.Padding=t.Padding,u.SizeEditor=t.SizeEditor,u.ThemeBackgroundSection=t.ThemeBackgroundSection,u.ThemeBorderSection=t.ThemeBorderSection,u.ThemeBoxShadowSection=t.ThemeBoxShadowSection,u.TransitionSetting=t.TransitionSetting},function(t){c.ThemeColorPicker=t.ThemeColorPicker}],execute:function(){t((()=>{var t={8679:(t,e,o)=>{"use strict";var i=o(9864),n={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},s={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};function r(t){return i.isMemo(t)?a:l[t.$$typeof]||n}l[i.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},l[i.Memo]=a;var d=Object.defineProperty,u=Object.getOwnPropertyNames,c=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,h=Object.getPrototypeOf,g=Object.prototype;t.exports=function t(e,o,i){if("string"!=typeof o){if(g){var n=h(o);n&&n!==g&&t(e,n,i)}var a=u(o);c&&(a=a.concat(c(o)));for(var l=r(e),m=r(o),f=0;f<a.length;++f){var y=a[f];if(!(s[y]||i&&i[y]||m&&m[y]||l&&l[y])){var v=p(o,y);try{d(e,y,v)}catch(t){}}}}return e}},6128:t=>{"use strict";t.exports=function(t,e,o,i,n,s,a,l){if(!t){var r;if(void 0===e)r=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var d=[o,i,n,s,a,l],u=0;(r=new Error(e.replace(/%s/g,(function(){return d[u++]})))).name="Invariant Violation"}throw r.framesToPop=1,r}}},9921:(t,e)=>{"use strict";var o="function"==typeof Symbol&&Symbol.for,i=o?Symbol.for("react.element"):60103,n=o?Symbol.for("react.portal"):60106,s=o?Symbol.for("react.fragment"):60107,a=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,r=o?Symbol.for("react.provider"):60109,d=o?Symbol.for("react.context"):60110,u=o?Symbol.for("react.async_mode"):60111,c=o?Symbol.for("react.concurrent_mode"):60111,p=o?Symbol.for("react.forward_ref"):60112,h=o?Symbol.for("react.suspense"):60113,g=o?Symbol.for("react.suspense_list"):60120,m=o?Symbol.for("react.memo"):60115,f=o?Symbol.for("react.lazy"):60116,y=o?Symbol.for("react.block"):60121,v=o?Symbol.for("react.fundamental"):60117,I=o?Symbol.for("react.responder"):60118,x=o?Symbol.for("react.scope"):60119;function b(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case i:switch(t=t.type){case u:case c:case s:case l:case a:case h:return t;default:switch(t=t&&t.$$typeof){case d:case p:case f:case m:case r:return t;default:return e}}case n:return e}}}function w(t){return b(t)===c}e.AsyncMode=u,e.ConcurrentMode=c,e.ContextConsumer=d,e.ContextProvider=r,e.Element=i,e.ForwardRef=p,e.Fragment=s,e.Lazy=f,e.Memo=m,e.Portal=n,e.Profiler=l,e.StrictMode=a,e.Suspense=h,e.isAsyncMode=function(t){return w(t)||b(t)===u},e.isConcurrentMode=w,e.isContextConsumer=function(t){return b(t)===d},e.isContextProvider=function(t){return b(t)===r},e.isElement=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===i},e.isForwardRef=function(t){return b(t)===p},e.isFragment=function(t){return b(t)===s},e.isLazy=function(t){return b(t)===f},e.isMemo=function(t){return b(t)===m},e.isPortal=function(t){return b(t)===n},e.isProfiler=function(t){return b(t)===l},e.isStrictMode=function(t){return b(t)===a},e.isSuspense=function(t){return b(t)===h},e.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===s||t===c||t===l||t===a||t===h||t===g||"object"==typeof t&&null!==t&&(t.$$typeof===f||t.$$typeof===m||t.$$typeof===r||t.$$typeof===d||t.$$typeof===p||t.$$typeof===v||t.$$typeof===I||t.$$typeof===x||t.$$typeof===y)},e.typeOf=b},9864:(t,e,o)=>{"use strict";t.exports=o(9921)},4247:t=>{t.exports='<svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 1.5h5v5h-5v-5ZM.25 7.75V.25h7.5v7.5H.25ZM1.5 11.5h5v5h-5v-5ZM.25 17.75v-7.5h7.5v7.5H.25ZM16.5 1.5h-5v5h5v-5ZM10.25.25v7.5h7.5V.25h-7.5Zm3.125 17.5v-3.125H10.25v-1.25h3.125V10.25h1.25v3.125h3.125v1.25h-3.125v3.125h-1.25Z" fill="#000"></path></svg>'},9775:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.154 3.154a.527.527 0 0 1 .746 0l1.317 1.317A8.618 8.618 0 0 1 8 4c2.667 0 5.667 1.333 7 4-.696 1.393-1.847 2.422-3.168 3.087l1.014 1.013a.527.527 0 1 1-.746.746l-1.317-1.317A8.617 8.617 0 0 1 8 12c-2.667 0-5.667-1.333-7-4 .696-1.393 1.847-2.422 3.168-3.087L3.154 3.9a.527.527 0 0 1 0-.746Zm1.698 2.443C3.726 6.087 2.782 6.882 2 8c1.422 2.033 3.382 3 6 3a8.66 8.66 0 0 0 2.03-.225l-.675-.674A2.5 2.5 0 0 1 5.9 6.644L4.852 5.598Zm6.296 4.805C12.275 9.912 13.218 9.118 14 8c-1.422-2.033-3.382-3-6-3-.726 0-1.402.074-2.03.225l.675.674a2.5 2.5 0 0 1 3.457 3.456l1.046 1.047ZM6.5 8c0-.221.048-.431.134-.62l1.987 1.986A1.5 1.5 0 0 1 6.5 8Zm.88-1.366 1.986 1.987a1.5 1.5 0 0 0-1.987-1.987Z" fill="#000"></path></svg>'},7077:t=>{t.exports='<svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0H7v1h4v4h1V0ZM0 12h5v-1H1V7H0v5Z" fill="#fff"></path></svg>'},5369:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm5 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" fill="#000"></path></svg>'},1553:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.438.994c.213 0 .397.146.44.35.151.722.257 1.34.316 1.852.374.16.725.362 1.048.599l1.728-.676a.455.455 0 0 1 .556.188l1.42 2.394a.43.43 0 0 1-.091.547 21.98 21.98 0 0 1-1.49 1.194 5.17 5.17 0 0 1-.007 1.183l1.464 1.119a.43.43 0 0 1 .111.563l-1.42 2.394a.454.454 0 0 1-.53.197 22.445 22.445 0 0 1-1.807-.66c-.325.233-.679.43-1.055.586l-.263 1.794a.446.446 0 0 1-.445.376H6.574a.446.446 0 0 1-.44-.35 21.019 21.019 0 0 1-.317-1.853 5.34 5.34 0 0 1-1.047-.598l-1.728.675a.455.455 0 0 1-.556-.187l-1.42-2.395a.43.43 0 0 1 .091-.546c.567-.49 1.063-.888 1.49-1.194a5.167 5.167 0 0 1 .008-1.183L1.19 6.243a.43.43 0 0 1-.112-.562l1.42-2.395a.455.455 0 0 1 .531-.196c.719.233 1.321.453 1.807.66.324-.233.679-.43 1.056-.587l.262-1.794A.446.446 0 0 1 6.6.994h2.839Zm-.365 1H6.985l-.28 1.866-.467.19c-.235.095-.46.21-.672.34l-.207.136-.42.293-.476-.197c-.328-.137-.718-.281-1.169-.433l-.221-.074-1.045 1.719L3.59 6.999l-.06.479a4.127 4.127 0 0 0-.021.816l.014.144.058.492-.419.294c-.288.203-.615.451-.979.746l-.177.145 1.043 1.72 1.845-.703.406.29c.204.146.42.274.645.384l.228.103.474.199.059.49c.04.338.103.731.19 1.177l.043.219h2.088l.282-1.867.466-.19c.236-.095.46-.21.672-.34l.207-.136.419-.293.476.198c.33.136.72.28 1.17.433l.22.072 1.044-1.718-1.56-1.165.06-.479a4.131 4.131 0 0 0 .02-.815l-.013-.144-.06-.492.42-.295a18.1 18.1 0 0 0 .98-.746l.176-.146-1.043-1.72-1.844.705-.406-.29a4.496 4.496 0 0 0-.646-.385l-.228-.103-.474-.199-.058-.49c-.032-.27-.08-.576-.14-.916l-.094-.48Zm-1.067 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 1a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" fill="#000"></path></svg>'},4767:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 2H2v2h12V2ZM2 1H1v4h14V1H2Zm2 7H2v6h2V8ZM2 7H1v8h4V7H2Zm6 1h6v6H8V8ZM7 7h8v8H7V7Z" fill="#000"></path></svg>'},5467:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 12c-2.667 0-5.667-1.333-7-4 1.333-2.667 4.333-4 7-4s5.667 1.333 7 4c-1.333 2.667-4.333 4-7 4Zm0-7c-2.618 0-4.578.967-6 3 1.422 2.033 3.382 3 6 3s4.578-.967 6-3c-1.422-2.033-3.382-3-6-3Zm0 5.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Zm0-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" fill="#000"></path></svg>'},8683:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 5H2v6h4V5ZM1 4v8h6V4H1ZM14 5h-4v6h4V5ZM9 4v8h6V4H9Z" fill="#000"></path></svg>'},760:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 2h12v4H2V2ZM1 7V1h14v6H1Zm1 3h12v4H2v-4Zm-1 5V9h14v6H1Z" fill="#000"></path></svg>'},100:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 1.5a.5.5 0 0 1 1 0v13a.5.5 0 0 1-1 0v-13ZM14 9H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1ZM4 12v-2h10v2H4Zm0-9h6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm0 1v2h6V4H4Z" fill="#000"></path></svg>'},2653:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="m1 7.5 3-2V7h2v1H4v1.5l-3-2Zm14 0-3 2V8h-2V7h2V5.5l3 2ZM7 7h2v1H7V7Z" fill="#000"></path></svg>'},3262:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 15a.5.5 0 0 0 0-1H7.46l2.348-2.138a.508.508 0 1 0-.684-.752L8 12.133V2h6.5a.5.5 0 0 0 0-1H.5a.5.5 0 0 0 0 1H7v10.207l-1.124-1.024a.508.508 0 1 0-.684.752L7.46 14H.5a.5.5 0 0 0 0 1h14ZM14 6.5a.5.5 0 0 1-.5.5H10V6h3.5a.5.5 0 0 1 .5.5Zm-13 0a.5.5 0 0 0 .5.5H5V6H1.5a.5.5 0 0 0-.5.5Z" fill="#000"></path></svg>'},7123:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M.5 1a.5.5 0 0 0 0 1h7.04L5.192 4.138a.508.508 0 1 0 .684.752L7 3.867V14H.5a.5.5 0 0 0 0 1h14a.5.5 0 0 0 0-1H8V3.793l1.124 1.024a.508.508 0 0 0 .684-.752L7.54 2h6.96a.5.5 0 0 0 0-1H.5ZM1 9.5a.5.5 0 0 1 .5-.5H5v1H1.5a.5.5 0 0 1-.5-.5Zm13 0a.5.5 0 0 0-.5-.5H10v1h3.5a.5.5 0 0 0 .5-.5Z" fill="#000"></path></svg>'},1407:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.347 2.146a.485.485 0 0 1 0 .708L5.76 8l5.587 5.146a.486.486 0 0 1 0 .708.538.538 0 0 1-.738 0l-5.956-5.5a.485.485 0 0 1 0-.708l5.956-5.5a.538.538 0 0 1 .738 0Z" fill="#000"></path></svg>'},9791:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 2.707v1.45a.5.5 0 0 1-1 0V1h3.05a.5.5 0 1 1 0 1H2.707L8 7.29 13.293 2H11.95a.5.5 0 1 1 0-1H15v3.156a.5.5 0 0 1-1 0v-1.45L8.707 7.999l5.29 5.289v-1.55a.5.5 0 1 1 1 0V15H11.84a.5.5 0 1 1 0-1h1.456L8 8.705 2.704 14h1.453a.5.5 0 1 1 0 1H1v-3.263a.5.5 0 0 1 1 0v1.553l5.293-5.292L2 2.707Z" fill="#000"></path></svg>'},3046:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.54 1H14v13H7.46l2.348-2.138a.508.508 0 1 0-.684-.752L8 12.134V9H7v3.206l-1.124-1.022a.508.508 0 1 0-.685.751L7.46 14H1V1h6.54Zm0 0L5.192 3.138a.508.508 0 1 0 .684.752L7 2.867V6h1V2.794l1.124 1.023a.508.508 0 0 0 .684-.752L7.54 1ZM0 1a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1Z" fill="#000"></path></svg>'},3626:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 1v13H1V7.46l2.138 2.348a.508.508 0 0 0 .752-.684L2.867 8H6V7H2.794l1.023-1.124a.508.508 0 0 0-.752-.685L1 7.46V1h13Zm0-1a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h13Zm-1.867 7L11.11 5.876a.508.508 0 1 1 .752-.684L14 7.54l-2.065 2.268a.508.508 0 0 1-.752-.684L12.207 8H9V7h3.133Z" fill="#000"></path></svg>'},3273:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.653 13.854a.485.485 0 0 1 0-.708L10.24 8 4.653 2.854a.485.485 0 0 1 0-.708.538.538 0 0 1 .738 0l5.956 5.5a.485.485 0 0 1 0 .708l-5.956 5.5a.538.538 0 0 1-.738 0Z" fill="#000"></path></svg>'},1282:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.124 12.11 8 13.133V2h6.5a.5.5 0 0 0 0-1H.5a.5.5 0 0 0 0 1H7v11.207l-1.124-1.024a.508.508 0 1 0-.684.752L7.46 15l2.348-2.138a.508.508 0 1 0-.684-.752ZM13.5 7a.5.5 0 0 0 0-1H10v1h3.5Zm-12 0a.5.5 0 0 1 0-1H5v1H1.5Z" fill="#000"></path></svg>'},2340:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.876 3.89 7 2.867V14H.5a.5.5 0 0 0 0 1h14a.5.5 0 0 0 0-1H8V2.794l1.124 1.023a.508.508 0 0 0 .684-.752L7.54 1 5.192 3.138a.508.508 0 0 0 .684.752ZM1.5 9a.5.5 0 0 0 0 1H5V9H1.5Zm12 0a.5.5 0 0 1 0 1H10V9h3.5Z" fill="#000"></path></svg>'},4201:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 14a.5.5 0 0 0 0-1h-6l3.953-3.459a.5.5 0 0 0-.658-.752L8 11.234V1.5a.5.5 0 0 0-1 0v9.734L4.206 8.789a.5.5 0 0 0-.659.752L7.5 13h-6a.5.5 0 0 0 0 1h12Z" fill="#000"></path></svg>'},4703:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 0a.5.5 0 0 0-.5.5v14a.5.5 0 0 0 1 0V.5a.5.5 0 0 0-.5-.5ZM0 7.5c0 .291.231.527.516.527h3.508L2.527 9.6a.535.535 0 0 0 0 .746.508.508 0 0 0 .73 0L6 7.5 3.257 4.654a.508.508 0 0 0-.73 0 .535.535 0 0 0 0 .746l1.497 1.573H.516A.522.522 0 0 0 0 7.5Zm15 0a.522.522 0 0 1-.516.527h-3.508L12.473 9.6a.535.535 0 0 1 0 .746.508.508 0 0 1-.73 0L9 7.5l2.743-2.846a.508.508 0 0 1 .73 0 .535.535 0 0 1 0 .746l-1.497 1.573h3.508c.285 0 .516.236.516.527Z" fill="#000"></path></svg>'},1528:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 13.5a.5.5 0 0 0 1 0v-6l3.459 3.953a.5.5 0 0 0 .752-.658L3.766 8H13.5a.5.5 0 0 0 0-1H3.766l2.445-2.794a.5.5 0 1 0-.752-.659L2 7.5v-6a.5.5 0 0 0-1 0v12Z" fill="#000"></path></svg>'},7319:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 1.5a.5.5 0 0 0-1 0v6L9.541 3.547a.5.5 0 1 0-.752.658L11.234 7H1.5a.5.5 0 0 0 0 1h9.734l-2.445 2.794a.5.5 0 1 0 .752.659L13 7.5v6a.5.5 0 0 0 1 0v-12Z" fill="#000"></path></svg>'},3166:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 1a.5.5 0 0 0 0 1h6L3.547 5.459a.5.5 0 1 0 .658.752L7 3.766V13.5a.5.5 0 0 0 1 0V3.766l2.794 2.445a.5.5 0 1 0 .659-.752L7.5 2h6a.5.5 0 0 0 0-1h-12Z" fill="#000"></path></svg>'},7758:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 7.5a.5.5 0 0 0-.5-.5H.5a.5.5 0 0 0 0 1h14a.5.5 0 0 0 .5-.5ZM7.5 0a.522.522 0 0 0-.527.516v3.508L5.4 2.527a.535.535 0 0 0-.746 0 .508.508 0 0 0 0 .73L7.5 6l2.846-2.743a.508.508 0 0 0 0-.73.535.535 0 0 0-.746 0L8.027 4.024V.516A.522.522 0 0 0 7.5 0Zm0 15a.522.522 0 0 1-.527-.516v-3.508L5.4 12.473a.535.535 0 0 1-.746 0 .508.508 0 0 1 0-.73L7.5 9l2.846 2.743a.508.508 0 0 1 0 .73.535.535 0 0 1-.746 0l-1.573-1.497v3.508A.522.522 0 0 1 7.5 15Z" fill="#000"></path></svg>'},6009:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.854 11.347a.486.486 0 0 1-.708 0L8 5.76l-5.146 5.587a.485.485 0 0 1-.708 0 .538.538 0 0 1 0-.738l5.5-5.956a.485.485 0 0 1 .708 0l5.5 5.956a.538.538 0 0 1 0 .738Z" fill="#000"></path></svg>'},5339:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m8.745 8 6.1 6.1a.527.527 0 1 1-.745.746L8 8.746l-6.1 6.1a.527.527 0 1 1-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 0 1 .746-.746l6.1 6.1 6.1-6.1a.527.527 0 0 1 .746.746L8.746 8Z" fill="#000"></path></svg>'},9365:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.994 2.243A1.375 1.375 0 0 0 13.625 1h-7.25l-.132.006A1.375 1.375 0 0 0 5 2.375v1.75h.917v-1.75l.007-.082a.458.458 0 0 1 .451-.376h7.25l.082.007a.458.458 0 0 1 .376.451v7.25l-.007.082a.458.458 0 0 1-.451.376h-1.738V11h1.738l.132-.006A1.375 1.375 0 0 0 15 9.625v-7.25l-.006-.132ZM9.625 5h-7.25C1.615 5 1 5.616 1 6.375v7.25C1 14.385 1.616 15 2.375 15h7.25c.76 0 1.375-.616 1.375-1.375v-7.25C11 5.615 10.384 5 9.625 5ZM2.4 6h7.2c.22 0 .4.201.4.45v7.1c0 .248-.18.45-.4.45H2.4c-.22 0-.4-.201-.4-.45v-7.1c0-.249.18-.45.4-.45ZM4 8h4v1H4V8Zm4 3H4v1h4v-1Z" fill="#000"></path></svg>'},970:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 11a.5.5 0 0 0 .5-.5V2h8.5a.5.5 0 0 0 0-1H2a1 1 0 0 0-1 1v8.5a.5.5 0 0 0 .5.5ZM5 4h9a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm0 1v9h9V5H5Z" fill="#000"></path></svg>'},9216:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.226 1.312c-.403-.404-1.044-.417-1.431-.03L2.49 8.587l-.48 2.674a.637.637 0 0 0 .73.73l2.673-.48 7.305-7.306c.387-.387.374-1.028-.03-1.431l-1.462-1.462Zm-8.113 9.575.32-1.781 4.991-4.992 1.462 1.462-4.992 4.991-1.781.32Zm7.473-6.012 1.402-1.4-1.462-1.463-1.401 1.402 1.461 1.461Z" fill="#000"></path><path d="M1.5 14a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13Z" fill="#000"></path></svg>'},3616:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h8Zm0 1H4a3 3 0 0 0-2.995 2.824L1 4v8a3 3 0 0 0 2.824 2.995L4 15h8a3 3 0 0 0 2.995-2.824L15 12V4a3 3 0 0 0-2.824-2.995L12 1ZM8 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" fill="#000"></path></svg>'},840:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 0A3.5 3.5 0 0 1 11 3.5V6h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1V3.5A3.5 3.5 0 0 1 7.5 0ZM5 6h5V3.5a2.5 2.5 0 0 0-2.336-2.495L7.5 1a2.5 2.5 0 0 0-2.495 2.336L5 3.5V6Zm6 1H3v8h9V7h-1Zm-3.5 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" fill="#000"></path></svg>'},5384:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 1.914 6.475 2.94a.5.5 0 1 1-.707-.707L8 0l2.157 2.157a.5.5 0 0 1-.707.707l-.95-.95V7.5h5.586l-1.1-1.1a.5.5 0 1 1 .706-.708L16 8l-2.232 2.232a.5.5 0 1 1-.707-.707L14.086 8.5H8.5v5.586l1.025-1.025a.5.5 0 1 1 .707.707L8 16l-2.308-2.308a.5.5 0 1 1 .707-.707l1.101 1.1V8.5H1.914l.95.95a.5.5 0 0 1-.707.707L0 8l2.232-2.232a.5.5 0 1 1 .707.707L1.914 7.5H7.5V1.914Z" fill="#000"></path></svg>'},3059:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 8.002a.5.5 0 0 1-1 0V1H1v12.002h3.5a.5.5 0 1 1 0 1H1a1 1 0 0 1-1-1V1A1 1 0 0 1 .044.706.498.498 0 0 1 .5 0H11a1 1 0 0 1 1 1v7.002Zm2.218 1.486a.5.5 0 0 0-.708 0l-5.657 5.658a.5.5 0 0 0 .708.707l5.657-5.658a.5.5 0 0 0 0-.707ZM11 9.928c.376 0 .794.041 1.23.141l-.871.871a5.147 5.147 0 0 0-.359-.012c-1 0-2.731.297-3.83 2 .313.486.677.857 1.062 1.14l-.676.676A6.081 6.081 0 0 1 6 12.928c1.333-2.334 3.5-3 5-3Zm0 5c-.219 0-.472-.014-.746-.054l-.824.825a5.62 5.62 0 0 0 1.57.23c1.5 0 3.667-.667 5-3a6.012 6.012 0 0 0-1.804-1.998l-.684.684c.478.299.936.721 1.319 1.313-1.1 1.704-2.831 2-3.831 2ZM2.5 3.502A.5.5 0 0 1 3 3h6a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5ZM3 6a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H3Z" fill="#000"></path></svg>'},4750:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 0a.5.5 0 0 0-.5.5V7H.5a.5.5 0 0 0 0 1H7v6.5a.5.5 0 0 0 1 0V8h6.5a.5.5 0 0 0 0-1H8V.5a.5.5 0 0 0-.5-.5Z" fill="#000"></path></svg>'},4357:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 6.5a.5.5 0 0 1 1 0v6a.5.5 0 0 1-1 0v-6ZM9.5 6a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 1 0v-6a.5.5 0 0 0-.5-.5Z" fill="#000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11 0H5a1 1 0 0 0-1 1v2H.5a.5.5 0 0 0 0 1h1.6l.81 11.1a1 1 0 0 0 .995.9h8.19a1 1 0 0 0 .995-.9L13.9 4h1.6a.5.5 0 0 0 0-1H12V1a1 1 0 0 0-1-1Zm0 3V1H5v2h6Zm1.895 1h-9.79l.8 11h8.19l.8-11Z" fill="#000"></path></svg>'},7465:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h8Zm0 1H4a3 3 0 0 0-2.995 2.824L1 4v8a3 3 0 0 0 2.824 2.995L4 15h8a3 3 0 0 0 2.995-2.824L15 12V4a3 3 0 0 0-2.824-2.995L12 1ZM8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" fill="#000"></path></svg>'},7322:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 3.5a3.5 3.5 0 1 0-7 0V6H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-2V3.5l.005-.164A2.5 2.5 0 0 1 12.5 1l.164.005A2.5 2.5 0 0 1 15 3.5a.5.5 0 0 0 1 0ZM9 7H3v8h9V7H9Zm-1.5 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" fill="#000"></path></svg>'},5124:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="m8 0 8 6-8 6-8-6 8-6ZM1.887 6 8 10.82 14.113 6 8 1.18 1.887 6ZM0 9.81.563 9 8 14.775 15.437 9l.563.81L8 16 0 9.81Z" fill="#000"></path></svg>'},9781:t=>{t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjkycHgiIGhlaWdodD0iNzJweCIgdmlld0JveD0iMCAwIDkyIDcyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT5pY29uX2FuaW1hdGlvbl9pbl9ub25lPC90aXRsZT4NCiAgICA8ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTk0MS4wMDAwMDAsIC0xOTIuMDAwMDAwKSI+DQogICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5MTcuMDAwMDAwLCA1Mi4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNC4wMDAwMDAsIDE0MC4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgPHJlY3QgZmlsbC1ydWxlPSJub256ZXJvIiB4PSIwIiB5PSIwIiB3aWR0aD0iOTIiIGhlaWdodD0iNzIiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0iIzZBNkE2QSIgcG9pbnRzPSI0NiA0OCAzMS44OTMxNTM5IDU1LjQxNjQwNzkgMzQuNTg3MzIxOCAzOS43MDgyMDM5IDIzLjE3NDY0MzYgMjguNTgzNTkyMSAzOC45NDY1NzcgMjYuMjkxNzk2MSA0NiAxMiA1My4wNTM0MjMgMjYuMjkxNzk2MSA2OC44MjUzNTY0IDI4LjU4MzU5MjEgNTcuNDEyNjc4MiAzOS43MDgyMDM5IDYwLjEwNjg0NjEgNTUuNDE2NDA3OSI+PC9wb2x5Z29uPg0KICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg=="},3167:t=>{t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjkycHgiIGhlaWdodD0iNzJweCIgdmlld0JveD0iMCAwIDkyIDcyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT5pY29uX2FuaW1hdGlvbl90cmFuc2l0aW9uX2ZhZGU8L3RpdGxlPg0KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTA2MS4wMDAwMDAsIC0xNTAuMDAwMDAwKSI+DQogICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5MTcuMDAwMDAwLCA1Mi4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNDQuMDAwMDAwLCA5OC4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgPHJlY3Qgb3BhY2l0eT0iMC4xMDAwMDAwMDEiIGZpbGwtcnVsZT0ibm9uemVybyIgeD0iMCIgeT0iMCIgd2lkdGg9IjkyIiBoZWlnaHQ9IjcyIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgIDxyZWN0IGZpbGw9IiM1MjUyNTIiIHg9IjI4IiB5PSIyNCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjQ4Ij48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgIDxyZWN0IGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsPSIjMzYzNjM2IiB4PSIwIiB5PSIwIiB3aWR0aD0iNjQiIGhlaWdodD0iNDgiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTY0LDAgTDY0LDQ4IEwwLDQ4IEwwLDAgTDY0LDAgWiBNNjMsMSBMMSwxIEwxLDQ3IEw2Myw0NyBMNjMsMSBaIiBmaWxsPSIjNkE2QTZBIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4NCiAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4="},8830:t=>{t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjkycHgiIGhlaWdodD0iNzJweCIgdmlld0JveD0iMCAwIDkyIDcyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT5pY29uX2FuaW1hdGlvbl90cmFuc2l0aW9uX3B1c2g8L3RpdGxlPg0KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTQxLjAwMDAwMCwgLTI3MC4wMDAwMDApIiBmaWxsLXJ1bGU9Im5vbnplcm8iPg0KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTE3LjAwMDAwMCwgNTIuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQuMDAwMDAwLCAyMTguMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5MiIgaGVpZ2h0PSI3MiI+PC9yZWN0Pg0KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOTIsMCBMOTIsNzIgTDAsNzIgTDAsMCBMOTIsMCBaIE05MSwzNyBMMSwzNyBMMSw3MSBMOTEsNzEgTDkxLDM3IFogTTQ2LDQ0IEw1Niw1NCBMNTAuMTY2NjY2Nyw1NCBMNTAuMTY2NjY2Nyw2NCBMNDEuODMzMzMzMyw2NCBMNDEuODMzMzMzMyw1NCBMMzYsNTQgTDQ2LDQ0IFoiIGZpbGw9IiM2QTZBNkEiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4="},8891:t=>{"use strict";t.exports=o},4020:t=>{"use strict";t.exports=l},3137:t=>{"use strict";t.exports=i},6262:t=>{"use strict";t.exports=d},4758:t=>{"use strict";t.exports=s},4796:t=>{"use strict";t.exports=a},726:t=>{"use strict";t.exports=n},7756:t=>{"use strict";t.exports=r},5505:t=>{"use strict";t.exports=u},1362:t=>{"use strict";t.exports=c}},e={};function p(o){var i=e[o];if(void 0!==i)return i.exports;var n=e[o]={exports:{}};return t[o](n,n.exports,p),n.exports}p.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return p.d(e,{a:e}),e},p.d=(t,e)=>{for(var o in e)p.o(e,o)&&!p.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},p.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),p.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var h={};return(()=>{"use strict";p.r(h),p.d(h,{CanvasPane:()=>Ti,ColumnLayoutBuilder:()=>Di,ColumnLayoutItemSetting:()=>As,CommonLayoutItemSetting:()=>Xn,CommonTransformSetting:()=>qn,DEFAULT_ROW_LAYOUT_SETTING:()=>Bi,DropArea:()=>me,FixedLayoutItemSetting:()=>ss,FlowLayoutItemSetting:()=>Is,FlowLayoutSetting:()=>Ns,GLOBAL_DRAGGING_CLASS_NAME:()=>lt,GLOBAL_H5_DRAGGING_CLASS_NAME:()=>rt,GLOBAL_RESIZING_CLASS_NAME:()=>mt,GridLayoutBuilder:()=>Zn,GridLayoutItemSetting:()=>Ls,GridLayoutSetting:()=>Ds,LayoutBuilder:()=>Li,LayoutEntry:()=>Ae,LayoutItemInBuilder:()=>Je,PageRenderer:()=>al,RowLayoutBuilder:()=>nn,RowLayoutItemSetting:()=>js,Toolbar:()=>bt,addItemToLayout:()=>R,bindDragHandler:()=>ct,bindResizeHandler:()=>yt,createDialogFromTemplate:()=>pl,createPageFromTemplate:()=>cl,createSectionFromTemplate:()=>hl,createWidgetFromTemplate:()=>gl,duplicateLayoutItem:()=>w,fixedLayoutActions:()=>t,floatingLayoutItem:()=>j,getGridLayoutStructure:()=>Ln,getRootLayoutId:()=>x,mergeWidgetsIntoColumn:()=>T,pendLayoutItem:()=>b,sectionMenuItems:()=>te,sinkingLayoutItem:()=>L,supportFloating:()=>M,supportSinking:()=>P,withRnd:()=>ul});var t={};p.r(t),p.d(t,{alignFullHeight:()=>Ho,alignFullSize:()=>Wo,alignFullWidth:()=>Do,alignHorizontalCenter:()=>Vo,alignTo:()=>Eo,alignVerticalCenter:()=>Fo,bringForward:()=>zo,bringToFront:()=>ko,sendBackward:()=>No,sendToBack:()=>$o,toggleLockLayout:()=>Oo});var e=p(8891),o=p(3137),i=p(726);const n=e.lodash.assign({},{gridSize:1}),s=e.lodash.assign({},{order:0},{lockParent:!1,lockLayout:!1,autoProps:{}});var a=p(4758),l=p(5369),r=p.n(l);const d=t=>{const o=window.SVG,{className:i}=t,n=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o}(t,["className"]),s=(0,e.classNames)("jimu-icon jimu-icon-component",i);return o?e.React.createElement(o,Object.assign({className:s,src:r()},n)):e.React.createElement("svg",Object.assign({className:s},n))},u=e.React.createContext({});var c=p(4796);const g=(0,c.withBuilderTheme)(i.Tooltip),m=[{name:"flip",options:{fallbackPlacements:["top","right"]}}];class f extends e.React.PureComponent{constructor(t){super(t),a.utils.autoBindHandlers(this,["select"])}componentDidUpdate(){const t=this.getValue(this.props.visible,this.contextProps),e=this.getValue(this.props.disabled,this.contextProps);t&&!e||this.contextProps.onItemUnSelected(this.props.uid)}componentWillUnmount(){this.contextProps.onItemUnSelected(this.props.uid)}select(t){if(t.stopPropagation(),this.props.onClick){const{parentRef:e}=this.contextProps;this.props.onClick({layoutId:this.contextProps.layoutId,layoutItem:this.contextProps.layoutItem,clientRect:e&&e.getBoundingClientRect()},t),this.contextProps.onItemClick(this.props.uid)}}getValue(t,e){return"function"==typeof t?t(e):t}getStyle(){const{theme:t}=this.contextProps;return e.css`
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
        &.msg {
          color: ${t.colors.palette.dark[400]};
        }
      }
      &.disabled {
        .jimu-btn {
          cursor: default;
        }
        .jimu-btn svg {
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
    `}createButton({textContent:t,iconContent:o,tooltip:n,isDisabled:s,noAction:a,isChecked:l,rotate:r,iconSize:d,autoFlipIcon:u,ref:c}){const p=t?"":n,h=s?{title:p}:{},f=(0,e.jsx)(i.Button,Object.assign({"aria-label":t||n,ref:c,className:"px-0 w-100 text-left",type:"tertiary",size:"sm",icon:o&&!t,role:"menuitem",onClick:s||a?null:this.select,"data-extname":this.props.extName},h),o&&(0,e.jsx)(i.Icon,{className:(0,e.classNames)("tool-item-icon",{checked:l}),icon:o,rotate:r,size:d,color:this.contextProps.theme.colors.black,autoFlip:u}),t&&(0,e.jsx)("span",{className:"toolbar-label text-nowrap"},t));return s?f:(0,e.jsx)(g,{placement:"bottom",title:p,modifiers:m,css:this.tooltipStyle()},f)}render(){const{icon:t,autoFlipIcon:o,label:n,size:s,checked:a,disabled:l,visible:r,rotate:d,settingPanel:c,title:p,uid:h,widgetId:g,className:m,seperator:f}=this.props;if(f)return(0,e.jsx)(u.Consumer,null,(t=>(this.contextProps=t,(0,e.jsx)("div",{"data-testid":"toolbarSeparator",css:this.separatorStyle()}))));const y=null==this.props.onClick,v=s||16,I=c;return(0,e.jsx)(u.Consumer,null,(s=>{if(this.contextProps=s,g&&s.layoutItem.widgetId!==g)return null;let u="";"function"==typeof p?u=p(s):"string"==typeof p&&(u=p);const f=c&&s.activeItem===h&&s.toggleOn,x=f||this.getValue(a,s),b=this.getValue(l,s),w=this.getValue(r,s),S=this.getValue(n,s),C=this.getValue(t,s);return null==r||w?(0,e.jsx)("div",{className:(0,e.classNames)("toolbar-item",m,{selected:x,disabled:b,msg:S,"no-action":y}),css:this.getStyle()},!I&&this.createButton({textContent:S,iconContent:C,tooltip:u,isDisabled:b,noAction:y,isChecked:x,rotate:d,iconSize:v,autoFlipIcon:o,ref:null}),I&&(0,e.jsx)(e.React.Fragment,null,this.createButton({textContent:S,iconContent:C,tooltip:u,isDisabled:b,noAction:y,isChecked:x,rotate:d,iconSize:v,autoFlipIcon:o,ref:t=>{this.reference=t}}),(0,e.jsx)(i.Popper,{placement:"bottom-start",reference:this.reference,open:f,disablePortal:!0},(0,e.jsx)("div",{css:e.css`
                          display: flex;
                          pointer-events: all;
                          background-color: ${s.theme.colors.white};
                          border-radius: 2px;
                          box-shadow: 0 2px 8px 1px rgba(0, 0, 0, 0.2);
                        `,className:"d-flex"},f&&(0,e.jsx)(I,Object.assign({},s)))))):null}))}}const y=()=>{};class v extends e.React.PureComponent{constructor(t){super(t),this.dropdownBtnRef=e.React.createRef(),a.utils.autoBindHandlers(this,["togglePopToolItems","onItemClick"])}getBaseStyle(){const{theme:t}=this.contextProps;return e.css`
      cursor: pointer;
      display: flex;
      justify-content: space-around;
      align-items: center;
      background-color: ${t.colors.palette.light[300]};

      &:hover {
        background-color: ${t.colors.palette.light[500]} !important;
      }
    `}getValue(t,e){return"function"==typeof t?t(e):t}togglePopToolItems(t){t&&t.stopPropagation(),this.contextProps.onItemClick(this.props.uid)}onItemClick(t,o){const{parentRef:i}=this.contextProps;t.onClick(Object.assign(Object.assign({},o),{clientRect:i.getBoundingClientRect()})),e.lodash.defer((()=>{this.dropdownBtnRef.current.focus()}))}createToolItem(t,o,i){return t.onClick||t.seperator?(0,e.jsx)(f,Object.assign({key:i,uid:`${this.props.uid}_${i+1}`,isInGroup:!0},t,{onClick:()=>this.onItemClick(t,o)})):null}getGroupMenu(t,o){const{theme:n}=this.contextProps;return t?(0,e.jsx)(i.Icon,{rotate:t.rotate,icon:t.icon,size:t.size||16,color:n.colors.black}):o[0].icon?(0,e.jsx)(i.Icon,{icon:o[0].icon,size:o[0].size||16,color:n.colors.black}):(0,e.jsx)(f,Object.assign({uid:`${this.props.uid}_0`,onClick:y},o[0]))}tooltipStyle(){const{theme:t}=this.contextProps;return e.css`
      border: none;

      .tooltip {
        color: ${t.colors.black};
        background-color: ${t.colors.palette.light[600]};
        border-color: ${t.colors.palette.light[300]};
      }
    `}render(){const{tools:t,uid:o}=this.props;return t&&0!==t.length?(0,e.jsx)(u.Consumer,null,(n=>{this.contextProps=n;const{visible:s,caret:a=!0,title:l}=t[0],r=this.getValue(s,n);if(void 0!==s&&!r)return null;const d=t.filter((t=>{const{visible:e}=t,o=this.getValue(e,n);return void 0===e||o}));if(0===d.length)return null;if(1===d.length)return(0,e.jsx)(f,Object.assign({uid:`${o}_0`},d[0]));let u;d.some((t=>{const{checked:e}=t;if(this.getValue(e,n))return u=t,!0}));let c="";return"function"==typeof l?c=l(n):"string"==typeof l&&(c=l),(0,e.jsx)("div",{className:"toolbar-group",css:this.getBaseStyle()},(0,e.jsx)(i.Dropdown,{direction:"down",size:"sm",className:"px-1",isOpen:n.toggleOn&&n.activeItem===o,toggle:this.togglePopToolItems},(0,e.jsx)(g,{placement:"bottom",title:c,css:this.tooltipStyle()},(0,e.jsx)(i.DropdownButton,{icon:!0,arrow:a,type:"tertiary",size:"sm",ref:this.dropdownBtnRef,css:e.css`
                      .caret-icon {
                        color: ${n.theme.colors.palette.dark[600]};
                        margin-left: 0.25rem;
                      }
                    `},this.getGroupMenu(u,d))),(0,e.jsx)(i.DropdownMenu,{className:"p-0",css:e.css`min-width: 5rem;`},d.map(((t,e)=>this.createToolItem(t,n,e))))))})):null}}var I=function(t,e,o,i){return new(o||(o=Promise))((function(n,s){function a(t){try{r(i.next(t))}catch(t){s(t)}}function l(t){try{r(i.throw(t))}catch(t){s(t)}}function r(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,l)}r((i=i.apply(t,e||[])).next())}))};function x(){if(a.utils.getCurrentDialogId())return a.utils.getCurrentDialogRootLayoutId();switch(a.utils.getActivePagePart()){case e.PagePart.Header:return a.utils.getHeaderRootLayoutId();case e.PagePart.Footer:return a.utils.getFooterRootLayoutId();default:return a.utils.getCurrentPageRootLayoutId()}}function b(t){const i=(0,o.getAppConfigAction)();i.setLayoutItemToPending(t,!0),window.jimuConfig.isBuilder?(i.exec(),o.builderAppSync.publishChangeSelectionToApp(null)):(0,e.getAppStore)().dispatch(e.appActions.layoutChanged(i.appConfig,null))}function w(t){const{layoutId:i,layoutItemId:n}=t,s=(0,o.getAppConfigAction)(),l=s.duplicateLayoutItem(i,i,n,!0);let r=s.appConfig;const d=r.layouts[i];if(d.type===e.LayoutType.FixedLayout)r=S(r,l);else if(d.type===e.LayoutType.FlowLayout)r=C(r,t,l);else{const e=a.searchUtils.getWidgetIdThatUseTheLayoutId(s.appConfig,i);if(e)switch(s.appConfig.widgets[e].manifest.name){case"column":r=C(r,t,l);break;case"row":r=function(t,e,o){let i=t;const{layoutId:n}=e,s=t.layouts[n],a=(t,e)=>parseInt(i.layouts[n].content[t].bbox[e],10),l=(t,e,o)=>{i=i.setIn(["layouts",n,"content",t,"bbox",e],o)},r=Object.keys(s.content).sort(((t,e)=>a(t,"left")-a(e,"left"))),d=r.indexOf(o.layoutItemId);r.splice(d,1);const u=r.indexOf(e.layoutItemId);r.splice(u+1,0,o.layoutItemId),i=i.setIn(["layouts",n,"order"],r);let c=0;for(let t=0;t<r.length;t++)c+=a(r[t],"width");if(l(r[0],"left",0),c<=12)for(let t=1;t<r.length;t++)l(r[t],"left",a(r[t-1],"left")+a(r[t-1],"width"));else{const t=c/12;l(r[0],"width",Math.max(1,Math.floor(a(r[0],"width")/t)));for(let e=1;e<r.length;e++)l(r[e],"left",a(r[e-1],"left")+a(r[e-1],"width")),l(r[e],"width",Math.max(1,Math.floor(a(r[e],"width")/t)))}return i}(r,t,l);break;case"fixed":r=S(r,l)}}window.jimuConfig.isBuilder?((0,o.getAppConfigAction)(r).exec(),o.builderAppSync.publishChangeSelectionToApp(l)):(0,e.getAppStore)().dispatch(e.appActions.layoutChanged(r,l))}function S(t,e){var o,i;const{layoutId:n,layoutItemId:s}=e,l=t.layouts[n].content[s];let{bbox:r,setting:d}=l;const u=t=>{if(a.utils.isPercentage(t))return`${parseFloat(t)+5}%`;const e=parseInt(t,10);return isNaN(e)?t:e+20};return r=(null===(o=null==d?void 0:d.autoProps)||void 0===o?void 0:o.left)?r.set("right",u(r.right)):r.set("left",u(r.left)),r=(null===(i=null==d?void 0:d.autoProps)||void 0===i?void 0:i.top)?r.set("bottom",u(r.bottom)):r.set("top",u(r.top)),(null==d?void 0:d.hCenter)&&(null==d?void 0:d.vCenter)&&(d=d.set("vCenter",!1)),t.setIn(["layouts",n,"content",s,"bbox"],r).setIn(["layouts",n,"content",s,"setting"],d)}function C(t,e,o){var i;const{layoutId:n}=e,s=t.layouts[n],a=[].concat(s.order),l=a.indexOf(o.layoutItemId);a.splice(l,1);const r=a.indexOf(e.layoutItemId);a.splice(r+1,0,o.layoutItemId);const d=s.content[o.layoutItemId];let u=t.setIn(["layouts",n,"order"],a);return(null===(i=d.setting)||void 0===i?void 0:i.isFloating)&&(u=S(u,o)),u}function R(t,i,n,s,l,r){return I(this,void 0,void 0,(function*(){const d=i.layoutInfo;return i.id?yield function(t,i,n,s,l,r){var d;return I(this,void 0,void 0,(function*(){let u;const c=(0,o.getAppConfigAction)(t),p=`${a.utils.getMaximumId(t.layouts[n.layoutId])+1}`;u=i.itemType===e.LayoutItemType.Section?(0,e.Immutable)({id:p,type:e.LayoutItemType.Section,bbox:a.utils.replaceBoundingBox(null,l,s),sectionId:i.id}):i.itemType===e.LayoutItemType.ScreenGroup?(0,e.Immutable)({id:p,type:e.LayoutItemType.ScreenGroup,bbox:{},screenGroupId:i.id}):(0,e.Immutable)({id:p,type:e.LayoutItemType.Widget,bbox:a.utils.replaceBoundingBox(null,l,s),widgetId:i.id});const{layoutId:h,layoutItemId:g}=i.layoutInfo,m=t.layouts[h].content[g];let f;(null===(d=m.setting)||void 0===d?void 0:d.lockParent)&&(u=u.setIn(["setting","lockParent"],!0)),i.isFromCurrentSizeMode||(f=a.searchUtils.getBrowserSizeModeByLayoutId(c.appConfig,i.layoutInfo.layoutId));const y=c.addItemIntoLayout(n.layoutId,u,r,f);return i.isFromCurrentSizeMode&&c.removeLayoutItem(i.layoutInfo,!1),yield Promise.resolve({layoutInfo:y,updatedAppConfig:c.appConfig})}))}(t,i,n,s,l,r):d&&d.layoutId&&d.layoutItemId?yield function(t,i,n,s,l,r){var d,u,c,p;return I(this,void 0,void 0,(function*(){const h=i.layoutInfo,{layoutId:g,layoutItemId:m}=h;if(g===n.layoutId){const e=(0,o.getAppConfigAction)(t),i=null===(p=null===(c=null===(u=null===(d=e.appConfig.layouts)||void 0===d?void 0:d[g])||void 0===u?void 0:u.content)||void 0===c?void 0:c[m])||void 0===p?void 0:p.bbox;if(i){let t=a.utils.replaceBoundingBox(i,l,s);t=t.set("width",i.width).set("height",i.height),e.editLayoutItemBBox(h,t)}return r>=0&&e.editLayoutItemIndex(h,n,r),e.setLayoutItemToPending(h,!1),yield Promise.resolve({layoutInfo:h,updatedAppConfig:e.appConfig})}let f=t;if(t.layouts[g].type===e.LayoutType.GridLayout){const e=(0,o.getAppConfigAction)().detachGridItem(t.layouts[g],m);f=f.setIn(["layouts",g],e)}const y=(0,o.getAppConfigAction)(f),v=y.moveLayoutItemToAnotherLayout(h,n,a.utils.replaceBoundingBox(null,l,s),r);y.clearRedundantLayout(h);const I=a.searchUtils.getWidgetIdThatUseTheLayoutId(t,n.layoutId);return I&&A(t.widgets[I])&&y.editLayoutItemSetting(v,{lockParent:!0}),yield Promise.resolve({layoutInfo:v,updatedAppConfig:y.appConfig})}))}(t,i,n,s,l,r):i.itemType===e.LayoutItemType.Section?yield function(t,i,n,s,l){return I(this,void 0,void 0,(function*(){const r=(0,o.getAppConfigAction)(t),d=r.createSection().id,u=`${a.utils.getMaximumId(t.layouts[i.layoutId])+1}`,c=(0,e.Immutable)({sectionId:d,id:u,type:e.LayoutItemType.Section,bbox:a.utils.replaceBoundingBox(null,s,n)}),p=r.addItemIntoLayout(i.layoutId,c,l);return yield Promise.resolve({layoutInfo:p,updatedAppConfig:r.appConfig})}))}(t,n,s,l,r):i.uri||i.itemId?yield function(t,i,n,s,l,r){return I(this,void 0,void 0,(function*(){const d={uri:i.uri,itemId:i.itemId};return o.appBuilderSync.publishIsBusyToBuilder(!0),yield e.WidgetManager.getInstance().handleNewWidgetJson(d).then((i=>{var d,u,c,p,h;const g=(0,o.getAppConfigAction)(t),m=`${a.utils.getMaximumId(t.layouts[n.layoutId])+1}`,f=e.appConfigUtils.getUniqueId(g.appConfig,"widget");if(i.id=f,g.createWidget((0,e.Immutable)(i)),(!l.width||!l.height)&&(null===(d=i.manifest)||void 0===d?void 0:d.defaultSize)){const{width:t,height:e}=i.manifest.defaultSize;l=Object.assign(Object.assign({},l),{width:t,height:e})}let y=(0,e.Immutable)({id:m,type:e.LayoutItemType.Widget,bbox:a.utils.replaceBoundingBox(null,l,s),widgetId:i.id});(null===(c=null===(u=i.manifest)||void 0===u?void 0:u.defaultSize)||void 0===c?void 0:c.autoWidth)&&(y=y.setIn(["setting","autoProps","width"],a.LayoutItemSizeModes.Auto)),(null===(h=null===(p=i.manifest)||void 0===p?void 0:p.defaultSize)||void 0===h?void 0:h.autoHeight)&&(y=y.setIn(["setting","autoProps","height"],a.LayoutItemSizeModes.Auto));const v=a.searchUtils.getWidgetIdThatUseTheLayoutId(t,n.layoutId);v&&A(t.widgets[v])&&(y=y.setIn(["setting","lockParent"],!0));const I=g.addItemIntoLayout(n.layoutId,y,r);return o.appBuilderSync.publishIsBusyToBuilder(!1),{layoutInfo:I,updatedAppConfig:g.appConfig}})).catch((t=>I(this,void 0,void 0,(function*(){return o.appBuilderSync.publishIsBusyToBuilder(!1),yield Promise.reject(t)}))))}))}(t,i,n,s,l,r):yield function(t,i,n,s,l,r){return I(this,void 0,void 0,(function*(){const i=(0,o.getAppConfigAction)(t),d=`${a.utils.getMaximumId(t.layouts[n.layoutId])+1}`;let u=(0,e.Immutable)({id:d,type:e.LayoutItemType.Widget,bbox:a.utils.replaceBoundingBox(null,l,s)});const c=a.searchUtils.getWidgetIdThatUseTheLayoutId(t,n.layoutId);c&&A(t.widgets[c])&&(u=u.setIn(["setting","lockParent"],!0));const p=i.addItemIntoLayout(n.layoutId,u,r);return yield Promise.resolve({layoutInfo:p,updatedAppConfig:i.appConfig})}))}(t,0,n,s,l,r)}))}function A(t){var o,i,n,s,a,l,r;const d=null===(o=null==t?void 0:t.manifest)||void 0===o?void 0:o.widgetType,u=null!==(s=null===(n=null===(i=null==t?void 0:t.manifest)||void 0===i?void 0:i.properties)||void 0===n?void 0:n.hasEmbeddedLayout)&&void 0!==s&&s,c=null!==(r=null===(l=null===(a=null==t?void 0:t.manifest)||void 0===a?void 0:a.properties)||void 0===l?void 0:l.lockChildren)&&void 0!==r&&r;return d!==e.WidgetType.Layout&&u&&c}function T(t,i,n,s,l,r){return I(this,void 0,void 0,(function*(){const d=(0,o.getAppConfigAction)(t),u=t.layouts[l.layoutId].content[l.layoutItemId],c={id:e.appConfigUtils.getUniqueId(d.appConfig,"widget"),uri:"widgets/layout/column/"};return o.appBuilderSync.publishIsBusyToBuilder(!0),yield e.WidgetManager.getInstance().handleNewWidgetJson(c).then((t=>{d.createWidget((0,e.Immutable)(t)),d.updateLayoutItem(l,"widgetId",t.id),d.editLayoutItemSetting(l,{maintainedByLayout:!0});let o=(0,e.Immutable)(u.bbox);const i=Math.round(parseFloat(o.height)+s.height+20);o=o.set("height",`${i}px`),d.editLayoutItemBBox(l,o)})).then((()=>I(this,void 0,void 0,(function*(){const t=d.appConfig.widgets[c.id],o=(0,e.getAppStore)().getState().browserSizeMode,p=Object.keys(t.layouts)[0],h=t.layouts[p],g=a.searchUtils.findLayoutId(h,o,d.appConfig.mainSizeMode);return yield R(d.appConfig,i,{layoutId:g},n,s).then((({updatedAppConfig:t})=>I(this,void 0,void 0,(function*(){var o;const i=a.utils.getMaximumId(t.layouts[g]),n={id:`${i+1}`,widgetId:u.widgetId,type:e.LayoutItemType.Widget,bbox:u.bbox,setting:{autoProps:null===(o=u.setting)||void 0===o?void 0:o.autoProps}};let s;return s="top"===r?[`${i}`,n.id]:[n.id,`${i}`],t=t.setIn(["layouts",g,"content",n.id],n).setIn(["layouts",g,"order"],s),yield Promise.resolve({updatedAppConfig:t,layoutInfo:l})}))))})))).then((({updatedAppConfig:t})=>(o.appBuilderSync.publishIsBusyToBuilder(!1),{updatedAppConfig:t,layoutInfo:l}))).catch((t=>I(this,void 0,void 0,(function*(){return o.appBuilderSync.publishIsBusyToBuilder(!1),yield Promise.reject(t)}))))}))}function M(t){var i,n,s,l,r;const{layoutId:d,layoutItemId:u}=t,c=(0,o.getAppConfigAction)().appConfig,p=null===(s=null===(n=null===(i=null==c?void 0:c.layouts)||void 0===i?void 0:i[d])||void 0===n?void 0:n.content)||void 0===s?void 0:s[u];if(!p||(null===(l=p.setting)||void 0===l?void 0:l.isFloating))return!1;const h=a.utils.getActivePagePart();if(h!==e.PagePart.Header&&h!==e.PagePart.Footer){const t=a.utils.getCurrentPageRootLayoutId();return(null===(r=c.layouts[t])||void 0===r?void 0:r.type)===e.LayoutType.FlowLayout&&d!==t}return!1}function P(t){var e,i,n,s,a;const{layoutId:l,layoutItemId:r}=t,d=(0,o.getAppConfigAction)().appConfig,u=null===(n=null===(i=null===(e=null==d?void 0:d.layouts)||void 0===e?void 0:e[l])||void 0===i?void 0:i.content)||void 0===n?void 0:n[r];return null!==(a=null===(s=null==u?void 0:u.setting)||void 0===s?void 0:s.isFloating)&&void 0!==a&&a}function j(t,i,n){const s=a.utils.getCurrentPageRootLayoutId();let l=(0,o.getAppConfigAction)();R(l.appConfig,{layoutInfo:t},{layoutId:s},{left:0,top:0,width:1e3,height:1e3},i).then((t=>{l=(0,o.getAppConfigAction)(t.updatedAppConfig),l.editLayoutItemBBox(t.layoutInfo,{top:0,left:0,right:0,width:`${i.width}px`,height:`${i.height}px`}).editLayoutItemSetting(t.layoutInfo,{isFloating:!0,lockParent:!0,floatingArea:n}),window.jimuConfig.isBuilder?((0,o.getAppConfigAction)(l.appConfig).exec(),o.builderAppSync.publishChangeSelectionToApp(t.layoutInfo)):(0,e.getAppStore)().dispatch(e.appActions.layoutChanged(l.appConfig,t.layoutInfo))}))}function L(t,i){var n;const{layoutId:s,layoutItemId:l}=t,r=(0,o.getAppConfigAction)();let d,u=-1,c=2;const p=document.querySelectorAll(`div.flow-layout[data-layoutid="${s}"] > div.trail-container > div.builder-layout-item:not(.floating)`);if((null==p?void 0:p.length)>1)for(let t=0;t<p.length;t++){const e=p[t];if(-1===u&&e.getAttribute("data-layoutitemid")!==l){const o=e.getBoundingClientRect();if(c=Math.round(12*i.width/o.width),a.utils.contains(o,i)){u=t,d=o;break}if(a.utils.intersects(o,i)){u=t+1,d=o;break}}}else{const t=e.utils.findViewportSize(a.utils.getAppConfig(),a.utils.getCurrentSizeMode());d={left:0,top:0,width:t.width,height:t.height},c=Math.round(12*i.width/t.width)}-1===u&&(u=(null===(n=r.appConfig.layouts[s].order)||void 0===n?void 0:n.length)||0),z({layoutInfo:t},{layoutId:s},d||i,i,c,u)}function z(t,i,n,s,l,r,d){return I(this,void 0,void 0,(function*(){let u=(0,o.getAppConfigAction)(d);const c={name:"row",label:"row",uri:"widgets/layout/row/",icon:null,itemType:e.LayoutItemType.Widget,manifest:{widgetType:e.WidgetType.Layout,properties:{}}};return yield R(u.appConfig,c,i,n,s,r).then((o=>I(this,void 0,void 0,(function*(){let{updatedAppConfig:r}=o;const d=a.searchUtils.findLayoutItem(r,o.layoutInfo),u=r.widgets[d.widgetId],c=Object.keys(u.layouts)[0],p=u.layouts[c],h=a.searchUtils.findLayoutId(p,(0,e.getAppStore)().getState().browserSizeMode,r.mainSizeMode),g=e.i18n.getIntl().formatMessage({id:"block"}),m=e.appConfigUtils.getUniqueLabel(r,"widget",g);r=r.setIn(["widgets",u.id,"label"],m),r=r.setIn(["layouts",i.layoutId,"content",d.id,"setting","heightMode"],"fixed").setIn(["layouts",i.layoutId,"content",d.id,"bbox","height"],s.height+20);const f=Math.round(Math.min(s.height,n.height));return yield R(r,t,{layoutId:h},n,{width:l,height:f,left:0},0)})))).then((t=>{const{layoutInfo:i,updatedAppConfig:n}=t;u=(0,o.getAppConfigAction)(n),u.editLayoutItemSetting(i,{heightMode:"fit"}),window.jimuConfig.isBuilder?((0,o.getAppConfigAction)(u.appConfig).exec(),o.builderAppSync.publishChangeSelectionToApp(i)):(0,e.getAppStore)().dispatch(e.appActions.layoutChanged(u.appConfig,i))}))}))}class k extends e.React.PureComponent{constructor(t){super(t),this.topLeft=this.updateFloatingArea.bind(this,1),this.topCenter=this.updateFloatingArea.bind(this,2),this.topRight=this.updateFloatingArea.bind(this,3),this.middleLeft=this.updateFloatingArea.bind(this,4),this.middleCenter=this.updateFloatingArea.bind(this,5),this.middleRight=this.updateFloatingArea.bind(this,6),this.bottomLeft=this.updateFloatingArea.bind(this,7),this.bottomCenter=this.updateFloatingArea.bind(this,8),this.bottomRight=this.updateFloatingArea.bind(this,9)}updateFloatingArea(t){const{layoutId:e,layoutItem:o}=this.props;j({layoutId:e,layoutItemId:o.id},this.getSizeOfItem(),t)}getSizeOfItem(){const{layoutId:t,layoutItem:e}=this.props,o=document.querySelector(`div.exb-rnd[data-layoutid="${t}"][data-layoutitemid="${e.id}"]`);return o?o.getBoundingClientRect():null}getStyle(t){const o=t.colors.palette.light[500];return e.css`
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
    `}render(){const{area:t,theme:o}=this.props;return(0,e.jsx)("div",{className:"floating-area-chooser d-flex",css:this.getStyle(o)},(0,e.jsx)("div",{className:"content w-100"},(0,e.jsx)("div",{className:(0,e.classNames)("top-left",{selected:1===t}),onClick:this.topLeft}),(0,e.jsx)("div",{className:(0,e.classNames)("top-center",{selected:2===t}),onClick:this.topCenter}),(0,e.jsx)("div",{className:(0,e.classNames)("top-right",{selected:3===t}),onClick:this.topRight}),(0,e.jsx)("div",{className:(0,e.classNames)("middle-left",{selected:4===t}),onClick:this.middleLeft}),(0,e.jsx)("div",{className:(0,e.classNames)("middle-center",{selected:5===t}),onClick:this.middleCenter}),(0,e.jsx)("div",{className:(0,e.classNames)("middle-right",{selected:6===t}),onClick:this.middleRight}),(0,e.jsx)("div",{className:(0,e.classNames)("bottom-left",{selected:7===t}),onClick:this.bottomLeft}),(0,e.jsx)("div",{className:(0,e.classNames)("bottom-center",{selected:8===t}),onClick:this.bottomCenter}),(0,e.jsx)("div",{className:(0,e.classNames)("bottom-right",{selected:9===t}),onClick:this.bottomRight})))}}k.defaultProps={area:0};const N=(0,c.withBuilderTheme)(k);var $=p(4357),O=p.n($),E=p(3059),D=p.n(E),B=p(5384),F=p.n(B),V=p(970),H=p.n(V),W=p(3616),G=p.n(W),Z=p(7465),U=p.n(Z),_=p(1553),Y=p.n(_);function X(){var t;return null===(t=(0,e.getAppStore)().getState().appRuntimeInfo)||void 0===t?void 0:t.appMode}function q(){var t,o,i;return null!==(i=null===(o=null===(t=(0,e.getAppStore)().getState().appConfig)||void 0===t?void 0:t.forBuilderAttributes)||void 0===o?void 0:o.lockLayout)&&void 0!==i&&i}function J(t){var o,i,n;const s=(0,e.getAppStore)().getState().appConfig;if(t.type===e.LayoutItemType.Widget){const e=s.widgets[t.widgetId];return null!==(o=null==e?void 0:e.label)&&void 0!==o?o:""}if(t.type===e.LayoutItemType.Section){const e=s.sections[t.sectionId];return null!==(i=null==e?void 0:e.label)&&void 0!==i?i:""}if(t.type===e.LayoutItemType.ScreenGroup){const e=s.screenGroups[t.screenGroupId];return null!==(n=null==e?void 0:e.label)&&void 0!==n?n:""}return""}function Q(){var t;return(null===(t=(0,e.getAppStore)().getState().appRuntimeInfo)||void 0===t?void 0:t.appMode)===e.AppMode.Design}function K(t){var o;if(t.type===e.LayoutItemType.Widget&&t.widgetId){const i=(0,e.getAppStore)().getState().appConfig.widgets[t.widgetId];if(i)return(null===(o=i.manifest)||void 0===o?void 0:o.widgetType)!==e.WidgetType.Layout}return!1}const tt={icon:O(),title:t=>t.formatMessage("delete"),visible:t=>X()===e.AppMode.Design&&(!q()||K(t.layoutItem)),onClick:t=>{const{layoutItem:e,layoutId:i}=t,n={layoutId:i,layoutItemId:e.id};o.appBuilderSync.publishConfirmDeleteToApp(n)}},et={icon:D(),title:t=>t.formatMessage("pendingTip"),visible:t=>X()===e.AppMode.Design&&!q()&&function(t){const{layoutItem:e}=t;return null!=e.widgetId||null!=e.sectionId||null!=e.screenGroupId}(t),onClick:t=>{const{layoutId:e,layoutItem:o}=t;b({layoutId:e,layoutItemId:o.id})}},ot={icon:Y(),title:t=>t.formatMessage("setting"),onClick:t=>{const{layoutId:o,layoutItem:i}=t;(0,e.getAppStore)().dispatch(e.appActions.selectionChanged({layoutId:o,layoutItemId:i.id}))}},it={icon:F(),title:t=>{const{layoutItem:e}=t;return t.formatMessage("dragToMove",{label:J(e)})},visible:()=>X()===e.AppMode.Design&&!q()},nt={icon:H(),title:t=>t.formatMessage("duplicate"),visible:t=>{var o,i,n;if(q())return!1;const{layoutId:s}=t,a=null===(o=(0,e.getAppStore)().getState().appConfig)||void 0===o?void 0:o.layouts[s];return"ROW"!==(null==a?void 0:a.type)||(null!==(n=null===(i=a.order)||void 0===i?void 0:i.length)&&void 0!==n?n:0)<12},onClick:t=>{const{layoutId:e,layoutItem:o}=t;w({layoutId:e,layoutItemId:o.id})}},st={icon:G(),title:t=>t.formatMessage("floating"),visible:t=>{const{layoutItem:e,layoutId:o}=t;return!q()&&M({layoutId:o,layoutItemId:e.id})},settingPanel:N,onClick:()=>{}},at={icon:U(),title:t=>t.formatMessage("sinking"),visible:t=>{var e,o;const{layoutItem:i}=t;return!q()&&null!==(o=null===(e=i.setting)||void 0===e?void 0:e.isFloating)&&void 0!==o&&o},onClick:t=>{const{layoutId:e,layoutItem:o,clientRect:i}=t;L({layoutId:e,layoutItemId:o.id},i)}},lt="interactjs-dragging",rt="exb-h5-dragging";let dt=!1;function ut(t){const o=(0,c.getTheme2)(),i=document.createElement("div");return i.setAttribute("id","interact_dragging_placeholder"),i.style.position="fixed",i.style.left=`${t.left}px`,i.style.top=`${t.top}px`,i.style.width=`${t.width}px`,i.style.height=`${t.height}px`,i.style.backgroundColor=e.polished.rgba(o.colors.palette.primary[700],.2),i.style.zIndex="1100",i}function ct(t,e){if(!t)return null;let o,i,n,s,l,r;const{layoutItemId:d,useDragHandler:u,onDragStart:c,onDragging:p,onDragEnd:h}=e;return t.styleCursor(!1).draggable({inertia:!1,autoScroll:!1,allowFrom:u?".tool-drag-handler":void 0,ignoreFrom:".no-drag-action",listeners:{start:t=>{if(q()||!Q())return void t.interaction.stop();const e=t.target;if(e.classList.contains("no-drag-action"))return void(t.target._canDrag=!1);t.target._canDrag=!0,t.stopPropagation(),e.classList.add("is-dragging"),l=e.style.transform,n=t.rect;const r=t.target.parentNode;s=r.getBoundingClientRect(),document.body.classList.add(lt);const u=getComputedStyle(e,null).getPropertyValue("transform"),[p,h]=function(t=""){let e="0",o="0";if(t.includes("matrix(")){const i=t.substring(t.indexOf("(")+1,t.indexOf(")")).split(",");return e=`${parseInt(i[4],10)}px`,o=`${parseInt(i[5],10)}px`,[e,o]}if(t.includes("translate(")){const i=t.match(/translate\((.*)\s*,\s*(.*)\)/);return 3===i.length&&(e=i[1],o=i[2]),[e,o]}if(t.includes("translateX(")){const o=t.match(/translateX\((.*)\)/);2===o.length&&(e=o[1])}if(t.includes("translateY(")){const e=t.match(/translateY\((.*)\)/);2===e.length&&(o=e[1])}return[e,o]}(u);o=a.utils.isPercentage(p)?a.utils.fromRatio(p,n.width):parseFloat(p),i=a.utils.isPercentage(h)?a.utils.fromRatio(h,n.height):parseFloat(h),e.setAttribute("data-translatex",o),e.setAttribute("data-translatey",i),c&&c(d)},move:t=>{t.stopPropagation(),o+=t.dx,i+=t.dy;const e=t.target;if(!e.parentElement.classList.contains("d-none")){const a=t.client.x,d=t.client.y;if(!(a>=0&&a<=s.width&&d>=0&&d<=s.height||r))return r=ut(n),r=document.body.appendChild(r),e.style.transform=l,void(e.style.visibility="hidden");const u=r||e;u.style.webkitTransform=u.style.transform=`translate(${Math.round(o)}px, ${Math.round(i)}px) translateZ(0)`,u.setAttribute("data-translatex",Math.round(o)),u.setAttribute("data-translatey",Math.round(i))}p&&p(d,o,i)},end:t=>{t.stopPropagation();const e=t.target;e.classList.remove("is-dragging"),document.body.classList.remove(lt),r&&(document.body.removeChild(r),r=null),e.style.visibility=null,e.style.transform=l,h&&h(d,o,i)}}})}function pt(t){dt=t}function ht(){return dt}var gt=p(4020);const mt="interactjs-resizing";let ft=!1;function yt(t,e){if(!t)return null;let o,i,n,s,l=null;const{layoutItemId:r,onResizeStart:d,onResizing:u,onResizeEnd:c,restrictEdges:p=!0}=e;return t.resizable({inertia:!1,edges:{top:".rnd-resize-top",left:a.utils.isRTL()?".rnd-resize-right":".rnd-resize-left",bottom:".rnd-resize-bottom",right:a.utils.isRTL()?".rnd-resize-left":".rnd-resize-right"},modifiers:[gt.interact.modifiers.restrictEdges({outer:p?"parent":null}),gt.interact.modifiers.restrictSize({min:{width:16,height:16}})],listeners:{start:t=>{t.stopPropagation(),o=0,i=0,n=0,s=0;const e=t.target.getBoundingClientRect();d&&d(r,e.width,e.height),document.body.classList.add(mt)},move:t=>{t.stopPropagation();const e=t.deltaRect;o+=e.left,i+=e.top,n+=e.width,s+=e.height,l&&(cancelAnimationFrame(l),l=null),l=requestAnimationFrame((()=>{u&&u(r,o,i,n,s,t.shiftKey,t.speed),l=null}))},end:t=>{if(t.stopPropagation(),l&&(cancelAnimationFrame(l),l=null),c){const e=t.deltaRect;o+=e.left,i+=e.top,n+=e.width,s+=e.height,c(r,o,i,n,s,t.shiftKey)}document.body.classList.remove(mt)}}})}function vt(t){ft=t}function It(){return ft}class xt extends e.React.PureComponent{constructor(t){super(t),this.state={activeItem:null},a.utils.autoBindHandlers(this,["onItemClick","onItemUnSelected"])}onItemClick(t){let e=this.state.toggleOn;e=t!==this.state.activeItem||!e,this.setState({activeItem:t,toggleOn:e})}onItemUnSelected(t){t===this.state.activeItem&&this.setState({activeItem:null,toggleOn:!1})}getStyle(){const{theme:t}=this.props;return e.css`
      display: flex;
      pointer-events: all;
      border-radius: 2px;
      box-shadow: 0 2px 8px 1px rgba(0,0,0,0.20);
      height: 100%;
      margin: 5px 0;
      background: ${t.colors.palette.light[300]};

      .${lt} &,
      .${mt} &,
      .${rt} & {
        display: none;
      }
    `}reOrganizeTools(){const{tools:t}=this.props;if(a.utils.getCurrentSizeMode()===e.BrowserSizeMode.Small){const e=t.filter((t=>{let e;e=Array.isArray(t)?t[0]:t;const{visible:o,seperator:i=!1}=e,n="function"==typeof o?o(this.props):o;return!i&&(void 0===o||n)}));if(e.length>8){const e=t.slice(0,8),o=t.slice(8).map((t=>Object.assign(Object.assign({},t),{label:t.title}))),i=[{icon:r(),caret:!1},...o];return e.push(i),e}}return t}render(){const{tools:t,isLockLayout:o}=this.props;if(!t||0===t.length)return null;const i=this.reOrganizeTools(),{activeItem:n,toggleOn:s}=this.state;return(0,e.jsx)(u.Provider,{value:Object.assign(Object.assign({},this.props),{activeItem:n,toggleOn:s,onItemClick:this.onItemClick,onItemUnSelected:this.onItemUnSelected,isLockLayout:o})},(0,e.jsx)("div",{css:this.getStyle(),className:"layout-item-toolbar"},i.map(((t,o)=>Array.isArray(t)?(0,e.jsx)(v,{uid:`${o}`,key:o,tools:t}):(0,e.jsx)(f,Object.assign({uid:`${o}`,key:o},t))))))}}const bt=e.ReactRedux.connect((t=>{var e,o,i;return{isLockLayout:null!==(i=null===(o=null===(e=t.appConfig)||void 0===e?void 0:e.forBuilderAttributes)||void 0===o?void 0:o.lockLayout)&&void 0!==i&&i}}))(xt),wt={previousView:"Previous view",nextView:"Next view",originTL:"Top left as origin",originTR:"Top right as origin",originBL:"Bottom left as origin",originBR:"Bottom right as origin",alignLeft:"Align left",alignRight:"Align right",alignTop:"Align top",alignCenter:"Align center",alignHCenter:"Horizontal center",alignVCenter:"Vertical center",alignBottom:"Align bottom",alignStretch:"Align stretch",sendBackward:"Send backward",bringForward:"Bring forward",sendToBack:"Send to back",bringToFront:"Bring to front",zoomoutFixed:"Zoom out fixed",order:"Order",moveToLeft:"Move to left",moveToRight:"Move to right",moveToTop:"Move to top",moveToBottom:"Move to bottom",addView:"New view",duplicateScreen:"Duplicate screen",deleteScreen:"Delete screen",applyToFirstPanel:"Apply to the first panel",deleteView:"Delete view",duplicateView:"Duplicate view",insertABlock:"Insert block",insertAScreenGroup:"Insert screen group",moveup:"Move up",movedown:"Move down",chooseTemplate:"Choose a {type} template",chooseHeaderTemplate:"Choose a header template",chooseFooterTemplate:"Choose a footer template",dropWidgetToAdd:"Or drag a widget here",snapToLeft:"Snap to left",snapToTop:"Snap to top",snapToBottom:"Snap to bottom",snapToRight:"Snap to right",fullWidth:"Full width",fullHeight:"Full height",fullSize:"Full size",restoreSize:"Restore size",pendingTip:"Move to the pending list",setting:"Settings",dragToMove:"Drag to move {label}",lockLayout:"Lock position and size",unlockLayout:"Unlock position and size",editHeader:"Edit header",editFooter:"Edit footer",transform:"Transform",rotation:"Rotation",angle:"Angle",floating:"Pin",sinking:"Unpin",floatingArea:"Floating area",changeToAuto:"Change to auto",changeToCustom:"Change to custom",positionType:"Position type",sticky:"Sticky",fixed:"Fixed",flow:"Flow",stack:"Stack",fixedAtTop:"Floating at the top when scrolling",actNormal:"Act as normal widget",hideInDesignView:"Hide in design view",showInDesignView:"Show in design view",unlockGridItem:"Unlock this widget to reorganize its internal widgets.",lockGridItem:"Lock this widget."};class St extends e.React.PureComponent{constructor(){super(...arguments),this.state={showMenus:!0},this.formatMessage=(t,e)=>this.props.intl?this.props.intl.formatMessage({id:t,defaultMessage:wt[t]},e):wt[t],this.showContextMenu=()=>{},this.hideContextMenu=()=>{}}getPositionStyle(){const{positionType:t}=this.props;return"left"===t?e.css`
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
      left: right;
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
        z-index: ${a.LayoutZIndex.HandlerTools};

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

    `}render(){const{builderTheme:t,menuItems:o,layoutId:i,layoutItem:n}=this.props;return(0,e.jsx)("div",{className:"widget-context-menu",css:this.getStyle()},(0,e.jsx)("div",{ref:t=>this.ref=t,className:"content"},(0,e.jsx)("div",{className:"menu-hint",onMouseEnter:this.showContextMenu},(0,e.jsx)(d,{color:t.colors.black,size:"m"})),this.state.showMenus&&(0,e.jsx)("div",{className:"menu-content",onMouseLeave:this.hideContextMenu},(0,e.jsx)(bt,{layoutId:i,layoutItem:n,theme:t,parentRef:this.ref,tools:o,formatMessage:this.formatMessage})),this.props.children))}}const Ct=(0,e.injectIntl)(St),Rt=(e.React.createContext({viewOnly:!0}),e.React.createContext(!0),e.React.createContext(!0)),At=(e.React.createContext({isInView:!1,isInCurrentView:!1}),e.React.createContext(""));function Tt(t,e){const o=function(t){if(isNaN(t))return 0;const e=t%360;return e<0?e+360:e}(t+e);return o>=337.5||o<22.5||o>=157.5&&o<202.5?"ns-resize":o>=22.5&&o<67.5||o>=202.5&&o<247.5?"nesw-resize":o>=67.5&&o<112.5||o>=247.5&&o<292.5?"ew-resize":o>=112.5&&o<157.5||o>=292.5&&o<337.5?"nwse-resize":void 0}const Mt=e.css`
  width: ${9}px;
  height: ${9}px;
  background: transparent;
  position: absolute;
`;function Pt(t){const{pos:o}=t,n=e.React.useRef();return i.hooks.useEffectOnce((()=>{var t;const e=null!==(t=window.devicePixelRatio)&&void 0!==t?t:1;n.current.width=9*e,n.current.height=9*e;const i=n.current.getContext("2d");i&&(i.scale(e,e),i.strokeStyle="#444",i.fillStyle="#fff",i.lineWidth=2,a.utils.isRTL()?("tl"===o&&(i.translate(9,0),i.rotate(Math.PI/2)),"br"===o&&(i.translate(0,9),i.rotate(-Math.PI/2)),"bl"===o&&(i.translate(9,9),i.rotate(Math.PI))):("tr"===o&&(i.translate(9,0),i.rotate(Math.PI/2)),"br"===o&&(i.translate(9,9),i.rotate(Math.PI)),"bl"===o&&(i.translate(0,9),i.rotate(-Math.PI/2))),i.beginPath(),i.moveTo(1,1),i.lineTo(8,1),i.lineTo(8,3),i.lineTo(3,3),i.lineTo(3,8),i.lineTo(1,8),i.closePath(),i.stroke(),i.fill())})),(0,e.jsx)("canvas",{css:Mt,ref:n})}const jt=e.css`
  background: transparent;
  position: absolute;
`;function Lt(t){const{direction:o}=t,n=e.React.useRef();return i.hooks.useEffectOnce((()=>{var t;const e=null!==(t=window.devicePixelRatio)&&void 0!==t?t:1;"h"===o?(n.current.width=16*e,n.current.height=4*e):(n.current.width=4*e,n.current.height=16*e);const i=n.current.getContext("2d");i&&(i.scale(e,e),i.strokeStyle="#444",i.fillStyle="#fff",i.lineWidth=2,"h"===o?i.rect(1,1,14,2):i.rect(1,1,2,14),i.stroke(),i.fill())})),(0,e.jsx)("canvas",{css:jt,ref:n})}const zt=10,kt=t=>e.css`
  top: 0;
  left: 0;
  /* cursor: nwse-resize; */
  cursor: ${Tt(t,135)};
  .jimu-rtl & {
    /* cursor: nesw-resize; */
    cursor: ${Tt(t,225)};
  }
  > svg {
    position: absolute;
    top: 0;
    left: 0;
  }
`,Nt=t=>e.css`
  top: 0;
  right: 0;
  /* cursor: nesw-resize; */
  cursor: ${Tt(t,225)};
  .jimu-rtl & {
    /* cursor: nwse-resize; */
    cursor: ${Tt(t,315)};
  }
`,$t=t=>e.css`
  bottom: 0;
  left: 0;
  /* cursor: nesw-resize; */
  cursor: ${Tt(t,45)};
  .jimu-rtl & {
    /* cursor: nwse-resize; */
    cursor: ${Tt(t,135)};
  }
`,Ot=t=>e.css`
  bottom: 0;
  right: 0;
  /* cursor: nwse-resize; */
  cursor: ${Tt(t,315)};
  .jimu-rtl & {
    /* cursor: nesw-resize; */
    cursor: ${Tt(t,405)};
  }
`,Et=t=>e.css`
  height: ${10}px;
  left: ${zt}px;
  right: ${zt}px;
  top: 0px;
  /* cursor: ns-resize; */
  cursor: ${Tt(t,180)};

  canvas {
    left: 50%;
    top: 0;
    width: ${16}px;
    height: ${4}px;
    margin-left: ${-8}px;
    margin-top: 1px;
  }
`,Dt=t=>e.css`
  width: ${10}px;
  top: ${zt}px;
  bottom: ${zt}px;
  right: 0;
  /* cursor: ew-resize; */
  cursor: ${Tt(t,270)};

  canvas {
    top: 50%;
    right: 0;
    width: ${4}px;
    height: ${16}px;
    margin-top: ${-8}px;
    margin-right: 1px;
  }
`,Bt=t=>e.css`
  height: ${10}px;
  left: ${zt}px;
  right: ${zt}px;
  bottom: 0;
  /* cursor: ns-resize; */
  cursor: ${Tt(t,0)};

  canvas {
    left: 50%;
    bottom: 0;
    width: ${16}px;
    height: ${4}px;
    margin-left: ${-8}px;
    margin-bottom: 1px;
  }
`,Ft=t=>e.css`
  width: ${10}px;
  top: ${zt}px;
  bottom: ${zt}px;
  left: 0;
  /* cursor: ew-resize; */
  cursor: ${Tt(t,90)};

  canvas {
    top: 50%;
    left: 0;
    width: ${4}px;
    height: ${16}px;
    margin-top: ${-8}px;
    margin-left: 1px;
  }
`;function Vt(t){const{rotation:o=0}=t,{top:i,right:n,bottom:s,left:l,topLeft:r,topRight:d,bottomRight:u,bottomLeft:c}=function(t){const{left:e=!0,top:o=!0,right:i=!0,bottom:n=!0}=t;return{top:o,right:i,bottom:n,left:e,topRight:o&&i,bottomRight:n&&i,bottomLeft:n&&e,topLeft:o&&e}}(t),p=e.css`
    width: ${11}px;
    height: ${11}px;
    padding: 1px;
    z-index: ${a.LayoutZIndex.HandlerTools};
  `;return(0,e.jsx)("div",{className:"w-100 h-100 action-area"},i&&(0,e.jsx)("span",{key:"2","data-testid":"top",className:"rnd-resize-top handle no-drag-action",css:Et(o)},(0,e.jsx)(Lt,{direction:"h"})),n&&(0,e.jsx)("span",{key:"4","data-testid":"right",className:"rnd-resize-right handle no-drag-action",css:Dt(o)},(0,e.jsx)(Lt,{direction:"v"})),s&&(0,e.jsx)("span",{key:"6","data-testid":"bottom",className:"rnd-resize-bottom handle no-drag-action",css:Bt(o)},(0,e.jsx)(Lt,{direction:"h"})),l&&(0,e.jsx)("span",{key:"8","data-testid":"left",className:"rnd-resize-left handle no-drag-action",css:Ft(o)},(0,e.jsx)(Lt,{direction:"v"})),r&&(0,e.jsx)("span",{key:"1","data-testid":"topLeft",className:"rnd-resize-top rnd-resize-left handle no-drag-action",css:[p,kt(o)]},(0,e.jsx)(Pt,{pos:"tl"})),d&&(0,e.jsx)("span",{key:"3","data-testid":"topRight",className:"rnd-resize-top rnd-resize-right handle no-drag-action",css:[p,Nt(o)]},(0,e.jsx)(Pt,{pos:"tr"})),u&&(0,e.jsx)("span",{key:"5","data-testid":"bottomRight",className:"rnd-resize-bottom rnd-resize-right handle no-drag-action",css:[p,Ot(o)]},(0,e.jsx)(Pt,{pos:"br"})),c&&(0,e.jsx)("span",{key:"7","data-testid":"bottomLeft",className:"rnd-resize-bottom rnd-resize-left handle no-drag-action",css:[p,$t(o)]},(0,e.jsx)(Pt,{pos:"bl"})))}var Ht=p(1407),Wt=p.n(Ht),Gt=p(3273),Zt=p.n(Gt),Ut=p(4750),_t=p.n(Ut),Yt=p(9365),Xt=p.n(Yt),qt=p(5339),Jt=p.n(qt);function Qt(t){const o=(0,e.getAppStore)().getState();return a.searchUtils.getSectionInfo(o,t.sectionId)}function Kt(t){var o;const{navInfo:i,views:n,activeView:s}=t;if(!i)return null==s?void 0:s.id;if(!i.useProgress)return i.currentViewId;const a=(null===(o=i.visibleViews)||void 0===o?void 0:o.length)>0?i.visibleViews:n,{currentIndex:l}=(0,e.getIndexFromProgress)(i.progress,a.length);return a[l]}const te=[{icon:Wt(),autoFlipIcon:!0,size:10,title:t=>t.formatMessage("previousView"),onClick:t=>{const{layoutItem:o}=t,i=Qt(o),{views:n}=i,s=Kt(i),a=n.indexOf(s);a>0&&e.jimuHistory.changeView(o.sectionId,n[a-1])},disabled:t=>{const{layoutItem:e}=t,o=Qt(e);if(!o)return!0;const{views:i}=o,n=Kt(o);return i.indexOf(n)<=0}},{label:t=>{const{layoutItem:e}=t,o=Qt(e);if(!o)return"";const{views:i}=o,n=Kt(o);return`${Math.max(0,i.indexOf(n))+1} / ${i.length}`}},{icon:Zt(),autoFlipIcon:!0,size:10,title:t=>t.formatMessage("nextView"),onClick:t=>{const{layoutItem:o}=t,i=Qt(o),{views:n}=i,s=Kt(i),a=n.indexOf(s);a>=0&&a<n.length-1&&e.jimuHistory.changeView(o.sectionId,n[a+1])},disabled:t=>{const{layoutItem:e}=t,o=Qt(e);if(!o)return!0;const{views:i}=o,n=Kt(o),s=i.indexOf(n);return s<0||s>=i.length-1}},{icon:_t(),title:t=>t.formatMessage("addView"),visible:()=>X()===e.AppMode.Design&&!q(),onClick:t=>{const i=(0,e.getAppStore)().getState().appConfig,{layoutItem:n}=t,s=(0,e.Immutable)({}).merge({id:e.appConfigUtils.getUniqueId(i,"view"),label:e.appConfigUtils.getUniqueLabel(i,"view",e.i18n.getIntl().formatMessage({id:"view"}))});(0,o.getAppConfigAction)().addView(s,n.sectionId).exec(),e.jimuHistory.changeView(n.sectionId,s.id)}},{icon:Xt(),title:t=>t.formatMessage("duplicateView"),visible:()=>X()===e.AppMode.Design&&!q(),onClick:t=>{const{layoutItem:i}=t;let n=Kt(Qt(i));n||(n=Qt(i).views[0]);const s=(0,o.getAppConfigAction)(),a=s.duplicateView(n,i.sectionId,!0);s.exec(),e.jimuHistory.changeView(i.sectionId,a.id)}},{icon:Jt(),title:t=>t.formatMessage("deleteView"),visible:t=>{if(X()!==e.AppMode.Design||q())return!1;const{layoutItem:o}=t,i=Qt(o);if(!i)return!1;const{views:n}=i;return n&&n.length>1},onClick:t=>{const{layoutItem:i}=t,n=Qt(i),{views:s}=n,a=Kt(n);if(s.length>1){const n=s.indexOf(a);let l;l=n>0?s[n-1]:s[1],(0,o.getAppConfigAction)().removeView(a,i.sectionId).exec(),e.jimuHistory.changeView(t.layoutItem.sectionId,l)}}},{seperator:!0}],ee=[nt,st,at,et,tt],oe=[].concat(te,ee);let ie=0;function ne(t){e.ReactRedux.useSelector((t=>t.extensionsInfo[e.extensionSpec.ExtensionPoints.ContextTool]));const{layoutId:o,layoutItem:n,refElement:s,modifiers:a,formatMessage:l,builderTheme:r,toolItems:d=[],showDefaultTools:u=!0}=t;if(!s)return null;const c=n.type===e.LayoutItemType.Section;let p=function({layoutId:t,layoutItem:o,refElement:i}){const{widgetId:n}=o;if(!n)return[];const s=e.ExtensionManager.getInstance().getExtensions(e.extensionSpec.ExtensionPoints.ContextTool),a=i.getBoundingClientRect();return s.filter((t=>t.widgetId===n)).map((e=>({widgetId:n,icon:e.getIcon(),title:e.getTitle.bind(e),onClick:e.onClick.bind(e),checked:e.checked&&e.checked.bind(e),disabled:e.disabled?"function"==typeof e.disabled?e.disabled.bind(e):e.disabled:null,visible:e.visible?"function"==typeof e.visible?e.visible.bind(e):e.visible:null,settingPanel:e.getSettingPanel({layoutId:t,layoutItem:o,clientRect:a}),index:e.index,extName:e.name}))).sort(((t,e)=>t.index-e.index))}(t);const h=c?oe:ee,g=u?[...d,...h]:d;return p=p.length>0?[].concat(g,{seperator:!0},p):g,0===p.length?null:(0,e.jsx)(i._Popper,{placement:"top-start",reference:s,open:!0,modifiers:a,version:ie++,trapFocus:!1,autoFocus:!1,css:e.css`
        background: transparent;
        box-shadow: none;
      `},(0,e.jsx)("div",null,(0,e.jsx)(bt,{layoutId:o,layoutItem:n,theme:r,parentRef:s,tools:p,formatMessage:l})))}var se=p(840),ae=p.n(se);const le=t=>{const o=window.SVG,{className:i}=t,n=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o}(t,["className"]),s=(0,e.classNames)("jimu-icon jimu-icon-component",i);return o?e.React.createElement(o,Object.assign({className:s,src:ae()},n)):e.React.createElement("svg",Object.assign({className:s},n))};class re extends e.React.PureComponent{constructor(t){super(t),this.formatMessage=(t,e)=>null!=this.props.intl?this.props.intl.formatMessage({id:t,defaultMessage:wt[t]},e):wt[t],this.isMac=()=>{var t,e;return"macOS"===(null===(e=null===(t=window.jimuUA)||void 0===t?void 0:t.os)||void 0===e?void 0:e.name)},this.copyItem=()=>{const{layoutId:t,layoutItem:o,lockLayout:i}=this.props;if(!i){const i=this.ref.getBoundingClientRect(),n=i.width,s=i.height;(0,e.getAppStore)().dispatch(e.appActions.clipboardChanged({layoutId:t,width:n,height:s,layoutItemId:o.id}))}},this.deleteSelectedItem=()=>{const{selected:t,layoutId:e,layoutItem:i,lockLayout:n,isFunctionalWidget:s,isDesignMode:a}=this.props;if(t&&a&&(!n||s)){const t={layoutId:e,layoutItemId:i.id};return o.appBuilderSync.publishConfirmDeleteToApp(t)}},this.state={selected:!1,updateIndex:0},this.screenGroupInfo="",this.isMac()?this.keyBindings={delete:this.deleteSelectedItem,backspace:this.deleteSelectedItem,"command+keyc":this.copyItem}:this.keyBindings={delete:this.deleteSelectedItem,backspace:this.deleteSelectedItem,"ctrl+keyc":this.copyItem}}componentDidMount(){let t;const e=this.screenGroupInfo.split(":");if(e.length>1){const o=e[0],i=e[1];t=document.querySelector(`div.builder-layout-item[data-layoutid="${o}"][data-layoutitemid="${i}"]`)}this.modifiers=[{name:"preventOverflow",enabled:!0,options:{boundary:null!=t?t:"viewport",altAxis:!0}},{name:"flip",enabled:!0,options:{boundary:null!=t?t:"viewport",fallbackPlacements:(0,i.getFallbackPlacementsModifier)(["top-start","bottom-start"],!0).options.fallbackPlacements}}],this.props.selected&&this.setState({selected:!0})}componentDidUpdate(t){this.scrollIntoView(),this.props.selected&&!t.isDesignMode&&this.props.isDesignMode&&this.setState({updateIndex:this.state.updateIndex+1})}doScroll(){const{layoutId:t,layoutItem:e}=this.props,o=document.querySelector(`div.exb-rnd[data-layoutid="${t}"][data-layoutitemid="${e.id}"]`);null!=o&&o.scrollIntoView({behavior:"auto",block:"center"})}scrollIntoView(){const{selected:t,autoScroll:i}=this.props;if(!t||!i)return;const{layoutId:n}=this.props;let s=!1,l=!1;const r=(0,o.getAppConfigAction)().appConfig,d=a.searchUtils.buildLayoutStructure(r,this.pageContext.rootLayoutId,this.pageContext.pageId,a.ParentType.Page,a.utils.getCurrentSizeMode()),{viewId:u,sectionId:c}=a.searchUtils.findParentViewId(n,d),{screenId:p,screenGroupId:h}=a.searchUtils.findParentScreenId(n,d);if(null!==u&&null!=c&&(e.jimuHistory.changeView(c,u),s=!0),null!=h&&null!=h){const t=r.screenGroups[h].screens.indexOf(p);(0,e.getAppStore)().dispatch(e.appActions.screenGroupNavInfoChanged(h,t,!0)),l=!0}s||l?e.lodash.defer((()=>{this.doScroll()})):this.doScroll()}getStyle(){const{isFunctionalWidget:t,isSection:o,selected:i,isBlock:n,rotate:s=0}=this.props,l=e.polished.rgba(this.pageContext.builderTheme.colors.palette.dark[300],.6),r=this.pageContext.builderTheme.colors.palette.primary[600],d=!t||o?"dashed":"solid";return e.css`
      .${rt} &,
      .${lt} & {
        > .action-area {
          display: none !important;
        }
        > div.selected-tip {
          .tip-content {
            outline-color: ${l};
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
      z-index: ${i?a.LayoutZIndex.HandlerTools:"auto"};
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
    `}getKeyboardComponent(){return(0,e.jsx)(e.Keyboard,{bindings:this.keyBindings})}isResizable(){const{resizable:t=!0,selected:e}=this.props;return e&&!this.pageContext.viewOnly&&!this.props.lockLayout&&t}showToolbar(){const{forbidToolbar:t,selected:e}=this.props;return!t&&!this.pageContext.viewOnly&&e}render(){return(0,e.jsx)(At.Consumer,null,(t=>(this.screenGroupInfo=t,(0,e.jsx)(a.PageContext.Consumer,null,(t=>{if(this.pageContext=t,!this.props.isDesignMode)return null;const{layoutId:o,layoutItem:i,resizable:n=!0,draggable:s=!0,selected:a,toolItems:l,showDefaultTools:r,left:d,top:u,right:c,bottom:p,rotate:h}=this.props,g=!s&&!n;return(0,e.jsx)("div",{"data-testid":"select-wrapper",ref:t=>this.ref=t,css:this.getStyle(),className:(0,e.classNames)("select-wrapper",{selected:a,"no-embed-layout":!this.props.hasEmbeddedLayout})},!t.viewOnly&&(0,e.jsx)("div",{className:"selected-tip"},(0,e.jsx)("div",{className:"tip-content"})),this.showToolbar()&&(0,e.jsx)(ne,{layoutId:o,layoutItem:i,refElement:this.ref,modifiers:this.modifiers,builderTheme:this.pageContext.builderTheme,formatMessage:this.formatMessage,toolItems:l,showDefaultTools:r}),this.isResizable()&&(0,e.jsx)(Vt,{left:d,right:c,top:u,bottom:p,rotation:h,builderTheme:t.builderTheme}),g&&a&&(0,e.jsx)("div",{className:"lock-layout-tip rounded-circle"},(0,e.jsx)(le,{size:"s",color:t.builderTheme.colors.black})),a&&this.getKeyboardComponent())})))))}}const de=e.ReactRedux.connect((function(t,o){var i,n,s,a,l;return{lockLayout:null!==(s=null===(n=null===(i=t.appConfig)||void 0===i?void 0:i.forBuilderAttributes)||void 0===n?void 0:n.lockLayout)&&void 0!==s&&s,isDesignMode:t.appRuntimeInfo.appMode===e.AppMode.Design,sectionNavInfo:o.isSection?null===(l=null===(a=t.appRuntimeInfo)||void 0===a?void 0:a.sectionNavInfos)||void 0===l?void 0:l[o.layoutItem.sectionId]:null}}))((0,e.injectIntl)(re));var ue=p(7756);function ce(t,e){const o={};return o.width=Math.min(t.width,e.width),o.height=Math.min(t.height,e.height),o.left=Math.max(0,t.left),o.top=Math.max(0,t.top),o.left+o.width>e.width&&(o.left=e.width-o.width),o.top+o.height>e.height&&(o.top=e.height-o.height),o}function pe(t,o,i,n){var s,l;if((null==t?void 0:t.itemType)===e.LayoutItemType.ScreenGroup){const t=a.utils.getCurrentPageId(),o=a.utils.getAppConfig(),i=o.pages[t];return Object.keys(null!==(s=null==i?void 0:i.layout)&&void 0!==s?s:{}).some((t=>{const s=o.layouts[i.layout[t]];return s.type===e.LayoutType.FlowLayout&&s.id===n}))}let r=function(t,o){var i,n,s,a;if(!o)return!1;if(null!==(i=o.isFromCurrentSizeMode)&&void 0!==i&&!i)return!0;const l=o.layoutInfo;if(l){const o=(0,e.getAppStore)().getState(),{layouts:i}=o.appConfig,r=i[l.layoutId],d=null===(n=null==r?void 0:r.content)||void 0===n?void 0:n[l.layoutItemId];if(d){const o=null!==(a=null===(s=d.setting)||void 0===s?void 0:s.lockParent)&&void 0!==a&&a;if(r.type===e.LayoutType.FlowLayout||o)return l.layoutId===t}}return!0}(n,t);return r&&"function"==typeof o.isItemAccepted&&(r=o.isItemAccepted(t,null!==(l=i.isPlaceholder)&&void 0!==l&&l)),r}function he(t,o){let i,n,s,a;return(0,gt.interact)(t).dropzone({accept:".exb-rnd",checker:(t,n,s,a,l,r,d)=>{const{props:u,layoutId:c,pageContext:p,layoutContext:h}=o.current;return"none"!==getComputedStyle(l).pointerEvents&&(i=function(t){if(t&&"function"==typeof t.getAttribute){const o=t.getAttribute("data-layoutid"),i=t.getAttribute("data-layoutitemid");if(o&&i)return function(t,o){var i,n,s,a,l,r;const d=(0,e.getAppStore)().getState(),{layouts:u,widgets:c}=d.appConfig,p=u[t],h=null===(i=null==p?void 0:p.content)||void 0===i?void 0:i[o];if(h){const i={layoutId:t,layoutItemId:o},u=function(t,o){var i,n,s;if(o.type===e.LayoutItemType.Widget){const e=o.widgetId;if(e)return null===(s=null===(n=null===(i=t.appConfig)||void 0===i?void 0:i.widgets)||void 0===n?void 0:n[e])||void 0===s?void 0:s.manifest}return null}(d,h);let p=null;return h.type===e.LayoutItemType.Widget&&h.widgetId&&(p=null===(n=c[h.widgetId])||void 0===n?void 0:n.uri),{itemType:h.type,layoutInfo:i,uri:p,manifest:u,rotation:null!==(r=null===(l=null===(a=null===(s=h.setting)||void 0===s?void 0:s.style)||void 0===a?void 0:a.transform)||void 0===l?void 0:l.rotate)&&void 0!==r?r:0}}}(o,i)}return null}(d),!p.viewOnly&&s&&!d.contains(l)&&pe(i,h,u,c))},ondragenter:t=>{const{props:e,layoutId:a,pageContext:l}=o.current;t.stopPropagation(),t.target.classList.add("drop-target"),a!==l.rootLayoutId&&t.target.classList.add("drop-active"),n=document.getElementById("interact_dragging_placeholder")||t.relatedTarget,s=t.dropzone.getRect(t.target),e.onDragEnter&&e.onDragEnter(i),e.onToggleDragoverEffect&&e.onToggleDragoverEffect(!0,i)},ondragleave:t=>{const{props:e}=o.current;t.stopPropagation(),t.target.classList.remove("drop-target"),t.target.classList.remove("drop-active"),n=null,s=null,a&&cancelAnimationFrame(a),e.onDragLeave&&e.onDragLeave(i),e.onToggleDragoverEffect&&e.onToggleDragoverEffect(!1,i)},ondropmove:t=>{const{props:e}=o.current;t.stopPropagation(),a&&cancelAnimationFrame(a),a=requestAnimationFrame((()=>{const o=t.dragEvent.rect,l=t.dragEvent._interaction.coords.cur.client,r=l.x-(null==s?void 0:s.left),d=l.y-(null==s?void 0:s.top);e.onDragOver&&e.onDragOver(i,n,s,{left:o.left-(null==s?void 0:s.left),top:o.top-(null==s?void 0:s.top),width:o.width,height:o.height,right:o.left-(null==s?void 0:s.left)+o.width,bottom:o.top-(null==s?void 0:s.top)+o.height},r,d,t.dragEvent.speed),a=null}))},ondrop:t=>{const{props:e}=o.current;if(t.stopPropagation(),t.target.classList.remove("drop-target"),t.target.classList.remove("drop-active"),e.onToggleDragoverEffect&&e.onToggleDragoverEffect(!1,i),a&&cancelAnimationFrame(a),e.onDrop){const o=t.dragEvent.rect;let n={left:o.left-s.left,top:o.top-s.top,width:o.width,height:o.height};n=ce(n,{left:0,top:0,width:s.width,height:s.height}),n.right=n.left+n.width,n.bottom=n.top+n.height;const a=t.dragEvent._interaction.coords.cur.client,l=a.x-s.left,r=a.y-s.top;e.onDrop(i,s,n,l,r)}}})}function ge(t,o){let i,n;const s=e.lodash.throttle((function(t,e,i){if(!t||isNaN(e)||isNaN(i))return;let s=200,a=100;const{props:l}=o.current;t.manifest.defaultSize&&(s=isNaN(t.manifest.defaultSize.width)?s:t.manifest.defaultSize.width,a=isNaN(t.manifest.defaultSize.height)?a:t.manifest.defaultSize.height),l.onDragOver&&l.onDragOver(t,null,n,{left:e-s/2-n.left,top:i-a/2-n.top,width:s,height:a,right:e-s/2-n.left+s,bottom:i-a/2-n.top+a},e-n.left,i-n.top)}),100);function a(){const{props:e,layoutId:n,layoutContext:s,pageContext:a}=o.current;if(a.viewOnly)return;const l=window.parent&&window.parent._dragging_widget_item?window.parent._dragging_widget_item:null;i&&i===l||(i=l,pe(i,s,e,n)&&(t.classList.add("drop-target"),e.onToggleDragoverEffect&&e.onToggleDragoverEffect(!0,i)))}function l(){if(!i)return!1;const{props:t,layoutId:e,pageContext:n,layoutContext:s}=o.current;return!n.viewOnly&&pe(i,s,t,e)}t.addEventListener("dragenter",(function(e){const{props:s}=o.current;e.stopPropagation(),e.preventDefault(),a(),l()&&(n=t.getBoundingClientRect(),i&&s.onDragEnter&&s.onDragEnter(i))})),t.addEventListener("dragleave",(function(e){const{props:n}=o.current;e.stopPropagation(),e.preventDefault(),t.classList.remove("drop-target"),t.classList.remove("drop-active"),l()&&(n.onDragLeave&&n.onDragLeave(i),n.onToggleDragoverEffect&&n.onToggleDragoverEffect(!1,i),i=null)})),t.addEventListener("dragover",(function(e){const{layoutId:n,pageContext:r}=o.current;if(e.stopPropagation(),e.preventDefault(),a(),l()){if(e.dataTransfer&&(e.dataTransfer.dropEffect="copy"),t.classList.contains("drop-target")){const{clientX:o,clientY:a}=e;t.classList.contains("drop-active")||n===r.rootLayoutId||t.classList.add("drop-active"),s(i,o,a)}}else e.dataTransfer&&(e.dataTransfer.dropEffect="none")})),t.addEventListener("drop",(function(e){if(e.stopPropagation(),t.classList.remove("drop-target"),t.classList.remove("drop-active"),document.documentElement.classList.remove(rt),!l())return void(i=null);const{props:n}=o.current,{clientX:s,clientY:a}=e,r=t.getBoundingClientRect();let d=200,u=100;i.manifest.defaultSize&&(d=isNaN(i.manifest.defaultSize.width)?d:i.manifest.defaultSize.width,u=isNaN(i.manifest.defaultSize.height)?u:i.manifest.defaultSize.height);let c={width:d,height:u,left:s-d/2-r.left,top:a-u/2-r.top};c=ce(c,{left:0,top:0,width:r.width,height:r.height}),c.right=c.left+c.width,c.bottom=c.top+c.height,n.onToggleDragoverEffect&&n.onToggleDragoverEffect(!1,i),n.onDrop&&n.onDrop(i,r,c,s-r.left,a-r.top),i=null}))}function me(t){const o=e.React.useRef(),i=e.ReactRedux.useSelector((e=>t.layouts[e.browserSizeMode])),n=e.ReactRedux.useSelector((t=>t.appRuntimeInfo.appMode===e.AppMode.Design)),s=e.React.useContext(a.PageContext),l=e.React.useContext(a.LayoutContext),r=e.React.useRef();r.current={props:t,layoutId:i,pageContext:s,layoutContext:l},e.React.useEffect((()=>{let t;return o.current&&(t=he(o.current,r)),()=>{t&&t.unset()}}),[]),e.React.useEffect((()=>{o.current&&ge(o.current,r)}),[]);const{className:d,style:u,highlightDragover:c}=t,p=(0,e.classNames)("exb-drop-area d-flex",d);return(0,e.jsx)("div",{className:p,css:e.css`
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
        background: ${e.polished.rgba(s.builderTheme.colors.palette.primary[700],.2)};
      }
    `,style:u,ref:t=>{o.current=t}},c&&(0,e.jsx)("div",{className:"w-100 highlight-content"},t.children))}const fe=t=>{const o=window.SVG,{className:i}=t,n=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o}(t,["className"]),s=(0,e.classNames)("jimu-icon jimu-icon-component",i);return o?e.React.createElement(o,Object.assign({className:s,src:_t()},n)):e.React.createElement("svg",Object.assign({className:s},n))};function ye(t){var i,n;const s=(0,o.getAppConfigAction)();if(t.layoutInfo){const{layoutId:o,layoutItemId:n}=t.layoutInfo,a=s.appConfig.layouts[o].content[n];if(a.type===e.LayoutItemType.Widget&&a.widgetId){const t=s.appConfig.widgets[a.widgetId];if((null===(i=null==t?void 0:t.manifest)||void 0===i?void 0:i.widgetType)!==e.WidgetType.Layout)return!0}}else if(t.itemType===e.LayoutItemType.Widget&&t.manifest&&(null===(n=t.manifest)||void 0===n?void 0:n.widgetType)!==e.WidgetType.Layout&&t.uri)return!0;return!1}function ve(t,i){const n=(0,o.getAppConfigAction)();if(i.layoutInfo){const{layoutId:o,layoutItemId:s}=i.layoutInfo,a=n.appConfig.layouts[o].content[s];a.type===e.LayoutItemType.Widget&&(n.removeLayoutItem(i.layoutInfo,!1),n.updateLayoutItem({layoutId:t.layoutId,layoutItemId:t.layoutItemId},"widgetId",a.widgetId),e.lodash.defer((()=>{(0,e.getAppStore)().dispatch(e.appActions.layoutChanged(n.appConfig,{layoutId:t.layoutId,layoutItemId:t.layoutItemId}))})))}else Ie(t,i.uri)}function Ie(t,i){return n=this,s=void 0,l=function*(){const{layoutId:n,layoutItemId:s}=t,a=(0,o.getAppConfigAction)(),l={uri:i};return yield e.WidgetManager.getInstance().handleNewWidgetJson(l).then((t=>{const o=e.appConfigUtils.getUniqueId(a.appConfig,"widget");t.id=o,a.createWidget((0,e.Immutable)(t)),a.updateLayoutItem({layoutId:n,layoutItemId:s},"widgetId",o),e.lodash.defer((()=>{(0,e.getAppStore)().dispatch(e.appActions.layoutChanged(a.appConfig,{layoutId:n,layoutItemId:s}))}))}))},new((a=void 0)||(a=Promise))((function(t,e){function o(t){try{r(l.next(t))}catch(t){e(t)}}function i(t){try{r(l.throw(t))}catch(t){e(t)}}function r(e){var n;e.done?t(e.value):(n=e.value,n instanceof a?n:new a((function(t){t(n)}))).then(o,i)}r((l=l.apply(n,s||[])).next())}));var n,s,a,l}const xe=e.css`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  right: 0;
  display: flex;
  z-index: 0;
`;class be extends e.React.PureComponent{constructor(t){super(t),this.toggleModal=t=>{t.stopPropagation(),this.setState((t=>({showModal:!t.showModal})))},this.closeModal=()=>{this.state.showModal&&this.setState({showModal:!1})},this.toggleDragoverEffect=(t,e)=>{this.ref&&t&&ye(e)?this.ref.classList.add("dragover"):this.ref.classList.remove("dragover")},this.onDrop=t=>{if(!ye(t))return;const{layoutId:e,layoutItemId:o}=this.props;ve({layoutId:e,layoutItemId:o},t)},this.setWidget=t=>{const{layoutId:e,layoutItemId:o}=this.props;Ie({layoutId:e,layoutItemId:o},t.uri).then((()=>{this.setState({isBusy:!1})})),this.setState({showModal:!1,isBusy:!0})},this.isItemAccepted=t=>this.layoutContext.isItemAccepted(t,!0),this.fakeLayouts=(0,e.Immutable)({[e.BrowserSizeMode.Large]:`${this.props.layoutId}_${this.props.layoutItemId}_tlarge`,[e.BrowserSizeMode.Medium]:`${this.props.layoutId}_${this.props.layoutItemId}_tmedium`,[e.BrowserSizeMode.Small]:`${this.props.layoutId}_${this.props.layoutItemId}_tsmall`}),this.state={showModal:!1,isBusy:!1}}getStyle(t){return e.css`
      position: relative;
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
    `}render(){const{forceAspectRatio:t,aspectRatio:o}=this.props;return(0,e.jsx)(a.PageContext.Consumer,null,(n=>(this.pageContext=n,(0,e.jsx)(a.LayoutContext.Consumer,null,(s=>{var a;return this.layoutContext=s,(0,e.jsx)("div",{className:(0,e.classNames)("layout-widget layout-item-content no-widget w-100 d-flex justify-content-center align-items-center",{"aspect-ratio-wrapper":t&&o>0}),ref:t=>{this.ref=t},css:this.getStyle(n.builderTheme)},(0,e.jsx)(me,{css:xe,className:"drop-tip",layouts:this.fakeLayouts,isPlaceholder:!0,highlightDragover:!1,onToggleDragoverEffect:this.toggleDragoverEffect,onDrop:this.onDrop}),this.state.isBusy&&(0,e.jsx)(i.Loading,{type:i.LoadingType.Primary}),!this.state.isBusy&&(0,e.jsx)("div",{ref:t=>{this.btnRef=t},className:"add-btn"},(0,e.jsx)(g,{title:null===(a=this.props.intl)||void 0===a?void 0:a.formatMessage({id:"addWidget"})},(0,e.jsx)(i.Button,{icon:!0,css:e.css`width: 36px; height: 36px; padding: 0.5rem;`,onClick:this.toggleModal,"aria-haspopup":!0},(0,e.jsx)(fe,null)))),!this.state.isBusy&&this.state.showModal&&(0,e.jsx)(ue.WidgetListPopper,{referenceElement:this.btnRef,isAccepted:this.isItemAccepted,onSelect:this.setWidget,onClose:this.closeModal}),this.pageContext.viewOnly&&(0,e.jsx)("div",{className:"mask"}))})))))}}const we=(0,e.injectIntl)(be);class Se extends e.React.PureComponent{mask(){return(0,e.jsx)("div",{className:"widget-mask"})}getStyle(){return e.css`
      .${lt} & {
        overflow: visible !important;
      }
      z-index: ${this.props.isInlineEditing?a.LayoutZIndex.HandlerTools:0};

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
    `}render(){const{widgetId:t,isInlineEditing:o,isFunctionalWidget:i,hasEmbeddedLayout:n}=this.props;if(!t)return(0,e.jsx)(we,Object.assign({css:this.getPlaceholderStyle()},this.props));const s=!o&&i&&!n;return(0,e.jsx)(a.WidgetRenderer,Object.assign({className:"w-100",css:this.getStyle()},this.props),s&&this.mask())}}var Ce;!function(t){t[t.ChooseLayoutType=0]="ChooseLayoutType",t[t.RenderLayout=1]="RenderLayout"}(Ce||(Ce={}));class Re extends e.React.Component{constructor(){super(...arguments),this.state={mode:Ce.RenderLayout},this.onLayoutTypeSelected=()=>{this.setState({mode:Ce.RenderLayout})},this.switchToChoosingMobe=()=>{this.setState({mode:Ce.ChooseLayoutType})}}shouldComponentUpdate(t){return!(t.isPageItem&&!t.visible)&&Object.keys(t).some((e=>t[e]!==this.props[e]))}render(){const{layout:t}=this.props;if(!t)return null;const o=(0,a.findLayoutBuilder)(t.type||e.LayoutType.FlowLayout);if(!o)return null;const i=this.props,{isItemAccepted:n}=i,s=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o}(i,["isItemAccepted"]);return(0,e.jsx)(a.LayoutContext.Provider,{value:{isItemAccepted:n||Te}},(0,e.jsx)(o,Object.assign({},s)))}}const Ae=e.ReactRedux.connect(a.utils.mapStateToLayoutProps)(Re);function Te(t,o){var i;return!!t&&(!o||t.itemType===e.LayoutItemType.Widget&&null!=t.uri&&(null===(i=t.manifest)||void 0===i?void 0:i.widgetType)!==e.WidgetType.Layout)}var Me,Pe,je;!function(t){t[t.BringForward=0]="BringForward",t[t.SendBackward=1]="SendBackward",t[t.BringToFront=2]="BringToFront",t[t.SendToBack=3]="SendToBack"}(Me||(Me={})),(je=Pe||(Pe={})).Page="PAGE",je.Widget="WIDGET",je.View="VIEW",je.Screen="SCREEN";const Le=3;var ze,ke,Ne,$e;function Oe(t,e){if(!t)return null;let o={};t.backgroundIMage&&(o="string"==typeof t.backgroundIMage?{}:t.backgroundIMage);const n=t.backgroundPosition?i.FillType[t.backgroundPosition.toUpperCase()]:i.FillType.FILL;let s;s=null==t.backgroundColor?e:""===t.backgroundColor?"transparent":t.backgroundColor?t.backgroundColor:"";const a={color:s,fillType:n,image:o};return i.styleUtils.toBackgroundStyle(a)}function Ee(t){var o,n;const{viewId:s,isActive:a,layoutEntryComponent:l,viewVisibilityContext:r}=t,d=e.ReactRedux.useSelector((t=>{var e,o;return null===(o=null===(e=t.appConfig)||void 0===e?void 0:e.views)||void 0===o?void 0:o[s]})),u=null===(n=null===(o=(0,c.useTheme)())||void 0===o?void 0:o.body)||void 0===n?void 0:n.bg,p=l,h=r,[g,m]=e.React.useState(!1),f=e.React.useMemo((()=>({isInView:!0,isInCurrentView:a})),[a]);return e.React.useEffect((()=>{a&&d.lazyLoad&&!g&&m(!0)}),[a,d.lazyLoad,g]),(0,e.jsx)("div",{className:(0,e.classNames)("w-100 h-100 d-flex section-view",{[i.FOCUSABLE_CONTAINER_CLASS]:a}),style:Oe(d,u),css:e.css`&, .exb-drop-area { pointer-events: ${a?"auto":"none"}; }`,key:s},(g||!d.lazyLoad)&&(0,e.jsx)(e.ErrorBoundary,null,(0,e.jsx)(h.Provider,{value:f},(0,e.jsx)(p,{layouts:null==d?void 0:d.layout,isInSection:!0,className:"w-100"}))))}function De(t){var o,i;const{views:n,navInfo:s,animationPreview:a,playMode:l,currentIndex:r,previousIndex:d,progress:u,loop:c,viewTransition:p}=t,h=a&&l===e.AnimationPlayMode.OneByOne,{setting:g,playId:m}=e.React.useContext(e.AnimationContext),f=e.ReactRedux.useSelector((t=>{var o;return!g||g.type===e.AnimationType.None||(null===(o=t.appRuntimeInfo)||void 0===o?void 0:o.appMode)===e.AppMode.Design})),y=!f||h||(null==s?void 0:s.playId)&&(null==s?void 0:s.withOneByOne)?g:null,v=e.React.useMemo((()=>({setting:y,playId:h?m:null})),[y,h,m]);return(0,e.jsx)(e.AnimationContext.Provider,{value:v},(0,e.jsx)("div",{className:"section-content"},(0,e.jsx)(e.TransitionContainer,{useProgress:null!==(o=null==s?void 0:s.useProgress)&&void 0!==o&&o,useStep:null!==(i=null==s?void 0:s.useStep)&&void 0!==i&&i,previousIndex:d,currentIndex:r,progress:u,transitionType:null==p?void 0:p.type,direction:null==p?void 0:p.direction,playId:null==s?void 0:s.playId,withOneByOne:null==s?void 0:s.withOneByOne,loop:c},n.map((o=>{const i=o===n[r];return(0,e.jsx)(Ee,{key:o,viewId:o,isActive:i,layoutEntryComponent:t.layoutEntryComponent,viewVisibilityContext:t.viewVisibilityContext})})))))}!function(t){t.Auto="auto",t[t.Normal=0]="Normal",t[t.BoundaryDropArea=10]="BoundaryDropArea",t[t.DragMoveTip=20]="DragMoveTip",t[t.HandlerTools=30]="HandlerTools",t[t.DraggingItem=40]="DraggingItem"}(ze||(ze={})),function(t){t[t.Row=0]="Row",t[t.Column=1]="Column",t[t.Tab=2]="Tab",t[t.Plain=3]="Plain"}(ke||(ke={})),($e=Ne||(Ne={})).Auto="AUTO",$e.Stretch="STRETCH",$e.Custom="CUSTOM";const Be=t=>{const o=window.SVG,{className:i}=t,n=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o}(t,["className"]),s=(0,e.classNames)("jimu-icon jimu-icon-component",i);return o?e.React.createElement(o,Object.assign({className:s,src:Wt()},n)):e.React.createElement("svg",Object.assign({className:s},n))};const Fe=t=>{const o=window.SVG,{className:i}=t,n=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o}(t,["className"]),s=(0,e.classNames)("jimu-icon jimu-icon-component",i);return o?e.React.createElement(o,Object.assign({className:s,src:Zt()},n)):e.React.createElement("svg",Object.assign({className:s},n))};function Ve(t){var o,i,n;const{sectionId:s,currentIndex:a,numOfViews:l,onCurrentViewChange:r}=t,d=e.ReactRedux.useSelector((t=>{var e;return null===(e=t.appConfig.sections[s])||void 0===e?void 0:e.arrowsNav})),u=e.ReactRedux.useSelector((t=>{var e;return null===(e=t.appConfig.sections[s])||void 0===e?void 0:e.dotsNav})),c=null!==(o=null==u?void 0:u.position)&&void 0!==o?o:"b",p=e.React.useMemo((()=>{const t=[];for(let e=0;e<l;e++)t.push(e);return t}),[l]),h=()=>{var t,o,i,n;return e.css`
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
    `},g=e.React.useCallback(((t,o)=>(0,e.jsx)("div",{key:t,className:(0,e.classNames)("dot rounded-circle",{active:o,disabled:l<=1}),onClick:o?void 0:()=>r(t)})),[r,l]),m=e.React.useCallback((()=>{r(a>0?a-1:l-1)}),[a,l,r]),f=e.React.useCallback((()=>{r(a<l-1?a+1:0)}),[a,l,r]),y=l>1&&0!==a,v=l>1&&a!==l-1;return(0,e.jsx)(e.React.Fragment,null,(null==d?void 0:d.visible)&&(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)("div",{className:(0,e.classNames)("arrows-nav first",{vertical:"v"===d.direction,disabled:!y}),css:h(),onClick:y?m:null},(0,e.jsx)(Be,{autoFlip:"v"!==d.direction,size:null!==(i=d.size)&&void 0!==i?i:12})),(0,e.jsx)("div",{className:(0,e.classNames)("arrows-nav second",{vertical:"v"===d.direction,disabled:!v}),css:h(),onClick:v?f:null},(0,e.jsx)(Fe,{autoFlip:"v"!==d.direction,size:null!==(n=d.size)&&void 0!==n?n:12}))),(null==u?void 0:u.visible)&&(0,e.jsx)("div",{className:(0,e.classNames)("dots-nav",{"snap-left":"l"===c,"snap-top":"t"===c,"snap-right":"r"===c,"snap-bottom":"b"===c}),css:(()=>{var t,o,i,n,s,a,l,r,d,p,h,g,m,f;return e.css`
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

        > div:not(:first-child) /* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */ {
          margin-top: ${null!==(s=u.spacing)&&void 0!==s?s:10}px;
        }
      }
      &.snap-right {
        height: 100%;
        top: 0;
        right: ${null!==(a=u.offset)&&void 0!==a?a:50}px;
        width: ${null!==(l=u.size)&&void 0!==l?l:8}px;

        > div:not(:first-child) /* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */ {
          margin-top: ${null!==(r=u.spacing)&&void 0!==r?r:10}px;
        }
      }
      &.snap-top {
        width: 100%;
        top: ${null!==(d=u.offset)&&void 0!==d?d:50}px;
        height: ${null!==(p=u.size)&&void 0!==p?p:8}px;

        > div:not(:first-child) /* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */ {
          margin-left: ${null!==(h=u.spacing)&&void 0!==h?h:10}px;
        }
      }
      &.snap-bottom {
        width: 100%;
        bottom: ${null!==(g=u.offset)&&void 0!==g?g:50}px;
        height: ${null!==(m=u.size)&&void 0!==m?m:8}px;

        > div:not(:first-child) /* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */ {
          margin-left: ${null!==(f=u.spacing)&&void 0!==f?f:10}px;
        }
      }
    `})()},p.map((t=>g(t,t===a)))))}function He(t){return e.css`
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
  `}function We(t){var o;const{views:n,navInfo:s,activeView:a,animationPreview:l,playMode:r,transition:d,sectionId:u,autoPlay:c,focusable:p=!0,interval:h=Le,loop:g=!0,className:m,sectionStyle:f,forceAspectRatio:y,aspectRatio:v,rotate:I,layoutEntryComponent:x,viewVisibilityContext:b}=t,w=e.React.useRef(),S=e.React.useRef(),C=e.React.useRef(!1),R=e.React.useRef(!1),A=e.React.useRef(null),[T,M]=e.React.useState(!1),P=null==a?void 0:a.id,j=e.React.useMemo((()=>{var t;let o,i,a,l=n;return s?(l=null!==(t=s.visibleViews)&&void 0!==t?t:n,s.useProgress?(a=s.progress,o=(0,e.getIndexFromProgress)(a,l.length).currentIndex):(o=Math.max(0,l.indexOf(s.currentViewId)),i=s.previousViewId?Math.max(0,l.indexOf(s.previousViewId)):Math.max(0,o-1))):(o=Math.max(0,l.indexOf(P)),i=o),w.current=o,{currentIndex:o,previousIndex:i,progress:a}}),[P,s,n]),L=e.React.useMemo((()=>i.styleUtils.toCSSStyle(f)),[f]),{transform:z}=L,k=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o}(L,["transform"]),N=I>0||I<0?`rotateZ(${I}deg)`:"";let $=N;z&&($=`${z} ${N}`);const O=e.React.useCallback((()=>{M(!0)}),[]),E=e.React.useCallback((()=>{M(!1)}),[]),D=e.React.useCallback((t=>{C.current=!0,R.current=t.target===S.current,null!=A.current&&(clearTimeout(A.current),A.current=null),c&&M(!0)}),[c]),B=e.React.useCallback((t=>{C.current=!1,null!=A.current&&(clearTimeout(A.current),A.current=null),c&&(A.current=setTimeout((()=>{M(!1)}),500))}),[c]),F=c&&!T;!function(t){const{sectionId:o,autoPlay:i,interval:n=Le,loop:s=!1}=t,a=e.React.useRef(),l=e.ReactRedux.useSelector((t=>{var o,n;return i?(null===(o=t.appRuntimeInfo)||void 0===o?void 0:o.appMode)===e.AppMode.Design||(null===(n=t.appRuntimeInfo)||void 0===n?void 0:n.isPrintPreview):null})),r=e.React.useRef(l),d=e.React.useCallback((()=>{a.current&&(clearInterval(a.current),a.current=null)}),[]),u=e.React.useCallback((()=>{d(),a.current=setInterval((()=>{const t=function(t,o){var i,n;const s=(0,e.getAppStore)().getState(),a=s.appConfig.sections[t].views,l=null===(n=null===(i=s.appRuntimeInfo)||void 0===i?void 0:i.sectionNavInfos)||void 0===n?void 0:n[t],r=(null==l?void 0:l.currentViewId)?a.indexOf(l.currentViewId):0,d=r<a.length-1?r+1:0;return!(!o&&0===d||(e.jimuHistory.changeView(t,a[d]),0))}(o,s);t||d()}),1e3*n)}),[o,s,n,d]);e.React.useEffect((()=>{if(!r.current){if(!i)return void d();u()}return()=>{d()}}),[i,n,s,d,u]),e.React.useEffect((()=>{if(r.current!==l&&null!==l){if(r.current=l,l)return void d();i&&u()}}),[l,u,d,i])}({sectionId:u,interval:h,loop:g,autoPlay:F});const V=e.React.useCallback((t=>{e.jimuHistory.changeView(u,n[t])}),[u,n]);return(0,e.jsx)("div",{className:(0,e.classNames)(`section-layout layout-item-content w-100 ${null===(o=null==f?void 0:f.boxShadow)||void 0===o?void 0:o.presetStyle}`,m,{"aspect-ratio-wrapper":y&&v>0}),css:He(v),"data-sectionid":u,style:Object.assign(Object.assign({},k),{transform:$}),onMouseEnter:c?O:null,onMouseLeave:c?E:null,onTouchStart:c?O:null,onTouchEnd:c?E:null,onFocus:D,onBlur:B,tabIndex:p?0:void 0,ref:S},(0,e.jsx)(De,{views:n,navInfo:s,animationPreview:l,playMode:r,currentIndex:j.currentIndex,previousIndex:j.previousIndex,progress:j.progress,loop:F&&g,viewTransition:d,layoutEntryComponent:x,viewVisibilityContext:b}),(0,e.jsx)(Ve,{sectionId:u,numOfViews:n.length,currentIndex:j.currentIndex,onCurrentViewChange:V}))}class Ge extends e.React.PureComponent{render(){return e.React.createElement(We,Object.assign({},this.props,{layoutEntryComponent:Ae,viewVisibilityContext:a.ViewVisibilityContext}))}}function Ze(t){const{isPreview:e,previewId:o}=t;return e?o:null}function Ue(t,o){const[i,n]=e.React.useState(null),s=e.ReactRedux.useSelector((t=>{var o;return(null===(o=t.appRuntimeInfo)||void 0===o?void 0:o.appMode)===e.AppMode.Design})),l=e.ReactRedux.useSelector((t=>t.browserSizeMode)),r=e.React.useContext(a.PageVisibilityContext),d=e.React.useRef(r),u=e.React.useRef(l);e.React.useEffect((()=>{null==t||o||s&&d.current||n((0,e.getNextAnimationId)())}),[s,o,t]),e.React.useEffect((()=>{null==t||o||s||u.current===l||(u.current=l,n((0,e.getNextAnimationId)()))}),[l,s,o,t]),e.React.useEffect((()=>{null==t||o||s||d.current===r||(d.current=r,n((0,e.getNextAnimationId)()))}),[r,s,o,t]);const c=e.React.useCallback((()=>{n(null)}),[]);return{playId:i,revert:!s&&!r,onAnimationEnd:c}}function _e(){const t=[0];for(let e=1;e<=10;e++)t.push(e/10);return t}const Ye=gt.interact.modifiers.restrictRect({restriction:"parent"}),Xe=gt.interact.modifiers.restrictRect({restriction:"div.limited-drag-boundary"});const qe=[ot,it,et,tt];function Je(t){var o,i,n,s,l,r,d,u,c,p;const h=e.ReactRedux.useSelector((o=>function(t,o){var i;const n=a.utils.mapStateToLayoutItemProps(t,o),{layoutId:s,layoutItemId:l}=o,r=null===(i=t.appConfig.layouts[s])||void 0===i?void 0:i.type;if(!n.layoutItem)return Object.assign({layoutType:r},n);if(n.layoutItem.type===e.LayoutItemType.Widget){const i=function(t,o,i){const n=t.appConfig.layouts[o].content[i];if(n.type===e.LayoutItemType.Widget){const e=t.appConfig.widgets[n.widgetId];if(null!=(null==e?void 0:e.layouts)){const o=Object.keys(e.layouts);if(1!==o.length){const i=[];return o.forEach((o=>{const n=e.layouts[o];i.push(n[t.browserSizeMode])})),i}{const i=null==e?void 0:e.layouts[o[0]];if(i)return i[t.browserSizeMode]}}}return null}(t,s,l),d=Object.assign(Object.assign({layoutType:r},n),a.utils.mapStateToWidgetProps(t,o));return i&&(d.innerLayoutId=i),d}const d=a.searchUtils.getSectionInfo(t,n.layoutItem.sectionId),u=Kt(d);return Object.assign(Object.assign(Object.assign({layoutType:r},n),d),{activeView:t.appConfig.views[u]})}(o,t)),e.ReactRedux.shallowEqual),g=Object.assign(Object.assign({},h),t),m=e.React.useContext(a.PageContext),f=e.React.useRef();let y,v;const{effect:I,oneByOneEffect:x,hoverEffect:b}=null!==(i=null===(o=g.layoutItem)||void 0===o?void 0:o.setting)&&void 0!==i?i:{},{animationPreview:w,hoverPreview:S,previewId:C,playMode:R,layoutType:A}=g,T=e.React.useCallback((()=>m.rootLayoutId),[m.rootLayoutId]),M=function(t,o){const i=e.React.useRef(),[n,s]=e.React.useState(!0);return e.React.useEffect((()=>{if(i.current&&(i.current.unobserve(t),i.current=null),o&&t&&"function"==typeof IntersectionObserver){const e=new IntersectionObserver((t=>{var e;(e=t[0]).target.classList.contains("playing-animation")||e.boundingClientRect.width>0&&e.boundingClientRect.height>0&&s(e.isIntersecting)}),{threshold:_e(),root:document,rootMargin:"20%"});return e.observe(t),i.current=e,()=>{i.current.unobserve(t),i.current=null}}}),[t,o]),n}(f.current,g.watchViewportVisibility);let P=null===(n=null==I?void 0:I[e.AnimationTriggerType.ScrollIntoView])||void 0===n?void 0:n.type;P=P&&P!==e.AnimationType.None?P:null;let j=null===(s=null==x?void 0:x[e.AnimationTriggerType.ScrollIntoView])||void 0===s?void 0:s.type;j=j&&j!==e.AnimationType.None?j:null;const[L,z]=e.React.useState({setting:null==x?void 0:x[e.AnimationTriggerType.ScrollIntoView],playId:null,oid:h.innerLayoutId,revert:null,playMode:null}),{setting:k}=e.React.useContext(e.AnimationContext),[N,$,O]=function(t){const{type:e,isPreview:o,previewId:i,hasParentAnimation:n}=t,s=Ze({isPreview:o,previewId:i}),{playId:a,revert:l,onAnimationEnd:r}=Ue(e,n);return e?o?[s,!1,null]:[a,l,r]:[null,!1,null]}({type:P,isPreview:w,previewId:R!==e.AnimationPlayMode.OneByOne?C:null,hasParentAnimation:null!=(null==k?void 0:k.type)&&k.type!==e.AnimationType.None}),[E,D,B]=function(t){const{type:e,isPreview:o,previewId:i,hasParentAnimation:n}=t,s=Ze({isPreview:o,previewId:i}),{playId:a,revert:l,onAnimationEnd:r}=Ue(e,n);return e?o?[s,!1,null]:[a,l,r]:[null,!1,null]}({type:j,isPreview:w,previewId:R!==e.AnimationPlayMode.AsOne?C:null,hasParentAnimation:null!=(null==k?void 0:k.type)&&k.type!==e.AnimationType.None}),{registerWidgetInitDragHandler:F,registerWidgetInitResizeHandler:V,setRefElement:H}=function(t){const{layoutId:o,layoutItemId:i,layoutType:n,layoutItemType:s,useDragHandler:a,restrict:l,getCurrentRootLayoutId:r}=t,d=e.React.useRef(),u=e.React.useRef(),c=e.React.useRef(),p=e.React.useRef(),h=e.React.useRef(),g=e.React.useRef(),m=e.React.useRef(),f=e.React.useRef();function y(e){pt(!0),vt(!1),t.onDragStart&&t.onDragStart(e),h.current&&h.current()}function v(e,o,i){t.onDragging&&t.onDragging(e,o,i),g.current&&g.current(o,i)}function I(o,i,n){e.lodash.defer((()=>{pt(!1)})),t.onDragEnd&&t.onDragEnd(o,i,n),m.current&&m.current(i,n)}function x(e,o,i){pt(!1),vt(!0),t.onResizeStart&&t.onResizeStart(e,o,i),u.current&&u.current(o,i)}function b(e,o,i,n,s,a,l){t.onResizing&&t.onResizing(e,o,i,n,s,a,l),c.current&&c.current(o,i,n,s)}function w(o,i,n,s,a,l){e.lodash.defer((()=>{vt(!1)})),t.onResizeEnd&&t.onResizeEnd(o,i,n,s,a,l),p.current&&p.current(i,n,s,a)}const S=e.React.useCallback(((t,e,o)=>{u.current=t,c.current=e,p.current=o}),[]),C=e.React.useCallback(((t,e,o)=>{h.current=t,g.current=e,m.current=o}),[]),R=e.React.useCallback((u=>{f.current=u,d.current||(d.current=(0,gt.interact)(u).origin("parent"),d.current=ct(d.current,{layoutId:o,layoutItemId:i,useDragHandler:a,onDragging:v,onDragStart:y,onDragEnd:I,itemType:s,rootLayoutId:r,restrict:()=>l}),d.current=yt(d.current,{layoutItemId:i,onResizing:b,restrictEdges:n===e.LayoutType.FixedLayout,onResizeStart:x,onResizeEnd:w})),d.current&&(l?d.current.draggable({modifiers:[Ye]}):d.current.draggable({modifiers:[Xe]})),t.resizeObserver&&u&&t.resizeObserver.observe(u)}),[l]);return e.React.useEffect((()=>()=>{d.current&&(d.current.unset(),d.current=null),t.resizeObserver&&f.current&&t.resizeObserver.unobserve(f.current)}),[]),{registerWidgetInitDragHandler:C,registerWidgetInitResizeHandler:S,setRefElement:R}}({restrict:t.restrict,layoutId:t.layoutId,layoutItemId:t.layoutItemId,layoutType:A,layoutItemType:null===(l=h.layoutItem)||void 0===l?void 0:l.type,useDragHandler:t.useDragHandler,resizeObserver:t.resizeObserver,getCurrentRootLayoutId:T,onDragStart:t.onDragStart,onDragging:t.onDragging,onDragEnd:t.onDragEnd,onResizeStart:t.onResizeStart,onResizing:t.onResizing,onResizeEnd:t.onResizeEnd});e.React.useEffect((()=>{H(f.current)}),[]),e.React.useEffect((()=>{null==N&&E&&z({setting:null==x?void 0:x[e.AnimationTriggerType.ScrollIntoView],playId:E,oid:h.innerLayoutId,revert:D,playMode:R,onContextAnimationEnd:D?null:()=>{null==B||B(),w&&(0,e.getAppStore)().dispatch(e.appActions.clearAnimationPreview()),z({setting:null==x?void 0:x[e.AnimationTriggerType.ScrollIntoView],oid:h.innerLayoutId,playId:-1})}})}),[N,E]);const W=e.React.useCallback((()=>{var t;if(w)return R!==e.AnimationPlayMode.AsOne;const o=null===(t=(0,e.getAppStore)().getState().appRuntimeInfo)||void 0===t?void 0:t.animationPreview;return null==o||o.playMode!==e.AnimationPlayMode.OneByOne}),[w]),G=e.React.useCallback((()=>{var t;if(W()){const o=null==x?void 0:x[e.AnimationTriggerType.ScrollIntoView],i=(null===(t=null==o?void 0:o.option)||void 0===t?void 0:t.start)===e.AnimationStartMode.AfterPrevious;z({setting:o,playId:(0,e.getNextAnimationId)(),oid:h.innerLayoutId,revert:i,playMode:R,onContextAnimationEnd:i?null:()=>{z({setting:o,oid:h.innerLayoutId,playId:-1})}})}}),[j,w,R,W]),Z=e.React.useCallback((()=>{var t;if(W()){const o=null==x?void 0:x[e.AnimationTriggerType.ScrollIntoView];(null===(t=null==o?void 0:o.option)||void 0===t?void 0:t.start)===e.AnimationStartMode.AfterPrevious&&z({setting:o,playId:(0,e.getNextAnimationId)(),oid:h.innerLayoutId,revert:!1,playMode:R,onContextAnimationEnd:()=>{z({setting:o,oid:h.innerLayoutId,playId:-1})}})}null==O||O(),w&&(0,e.getAppStore)().dispatch(e.appActions.clearAnimationPreview())}),[j,w,R,W]);function U(){var t;const{selected:o,draggable:i=!0}=g,n=null!==(t=h.isInlineEditing)&&void 0!==t&&t,s=e.utils.isTouchDevice();return i&&!m.viewOnly&&!n&&(!s||o)}const{layoutId:_,layoutItemId:Y,top:X,left:J,right:K,bottom:tt,resizable:et,draggable:ot,isBlock:it,autoScroll:nt,layoutItem:st,isFunctionalWidget:at,selected:dt,isInlineEditing:ut,hasEmbeddedLayout:mt,hasExtension:ft}=g;if(!st)return null;const{className:xt,forbidContextMenu:bt,onClick:wt,onDoubleClick:St,children:Rt,id:At,isLastChild:Tt}=g,Mt=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o}(g,["className","forbidContextMenu","onClick","onDoubleClick","children","id","isLastChild"]),Pt=st.type===e.LayoutItemType.Widget,jt=st.type===e.LayoutItemType.Section,Lt=!bt&&!m.viewOnly&&(st.widgetId||st.sectionId)&&(!at||jt),zt=null===(r=null==I?void 0:I[e.AnimationTriggerType.ScrollIntoView])||void 0===r?void 0:r.option,kt=null!==(p=null===(c=null===(u=null===(d=st.setting)||void 0===d?void 0:d.style)||void 0===u?void 0:u.transform)||void 0===c?void 0:c.rotate)&&void 0!==p?p:0;return(0,e.jsx)(a.ViewportVisibilityContext.Provider,{value:!!Q()||M},(0,e.jsx)(e.AnimationComponent,{id:At,parentId:_,type:P,configType:null==zt?void 0:zt.configType,direction:null==zt?void 0:zt.direction,revert:$,delay:t.delay,isLastChild:Tt,playId:N,hoverEffect:b,hoverPlayId:C,onAnimationStart:G,onAnimationEnd:Z,css:function(t){var o;const i=U(),n=null!==(o=h.isInlineEditing)&&void 0!==o&&o,s=e.polished.rgba(m.builderTheme.colors.palette.dark[300],.6),l=m.builderTheme.colors.palette.primary[600],r=at&&!jt||dt?"solid":"dashed";let d=null;return Q()||(d=(0,e.getHoverStyle)(null==b?void 0:b.type,null==b?void 0:b.setting)),e.css`
      ${d};
      position: relative;
      overflow: visible;
      cursor: ${i?"move":"default"};
      touch-action: ${n||!dt?"auto":"none"};
      user-select: ${n?"auto":"none"};
      min-width: ${a.MIN_LAYOUT_ITEM_SIZE}px;
      min-height: ${a.MIN_LAYOUT_ITEM_SIZE}px;

      & > div.widget-context-menu {
        display: none;
      }

      &:hover > div.widget-context-menu {
        display: flex;
      }

      .${rt} &.functional-widget {
        pointer-events: none;
      }
      .${rt} &.functional-widget .exb-drop-area {
        pointer-events: all;
      }

      .${rt} &,
      .${lt} & {
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
            outline: ${it&&!dt?"none":`1px ${r} ${s}`};
            display: block;
            outline-color: ${!at||jt?s:"transparent"};
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
    `}(kt),style:t.style,ref:f,className:(0,e.classNames)("builder-layout-item exb-rnd",xt,{selected:dt,"is-widget":Pt,"is-section":jt,"functional-widget":Pt&&at,"no-drag-action":!U()}),onDoubleClick:function(o){const{layoutId:i,layoutItemId:n}=t,{supportInlineEditing:s,widgetId:a}=h;t.onDoubleClick&&t.onDoubleClick(o,{layoutId:i,layoutItemId:n}),m.viewOnly||(o.stopPropagation(),s&&(0,e.getAppStore)().dispatch(e.appActions.setWidgetIsInlineEditingState(a,!0)))},onClick:function(o){if(Math.abs(o.screenX-y)>a.CLICK_TOLRERANCE||Math.abs(o.screenY-v)>a.CLICK_TOLRERANCE)return void o.stopPropagation();const{viewOnly:i}=m,{isFunctionalWidget:n,layoutItem:s}=h;if(!i&&(!q()&&Q()||n||s.type===e.LayoutItemType.Section)&&(o.stopPropagation(),!It()&&!ht())){if(t.onClick){const{layoutId:e,layoutItemId:i}=g;t.onClick(o,{layoutId:e,layoutItemId:i})}!function(){const{layoutId:o,layoutItemId:i}=t;h.selected||(0,e.getAppStore)().dispatch(e.appActions.selectionChanged({layoutId:o,layoutItemId:i}))}()}},onMouseDown:function(t){y=t.screenX,v=t.screenY},"data-layoutitemid":Y,"data-layoutid":_},(0,e.jsx)(e.AnimationContext.Provider,{value:L},Pt&&(0,e.jsx)(Se,Object.assign({rotate:kt,onInitDragHandler:F,onInitResizeHandler:V},Mt)),jt&&(0,e.jsx)(Ge,Object.assign({rotate:kt},Mt))),Lt&&function(o){const{builderTheme:i}=m;return(0,e.jsx)(Ct,{builderTheme:i,layoutId:t.layoutId,layoutItem:h.layoutItem,positionType:"center",size:a.CONTEXT_MENU_ITEM_SIZE,rotate:o,iconSize:a.CONTEXT_MENU_ICON_SIZE,className:"widget-context-menu",menuItems:t.contextMenuItems||qe})}(kt),!m.viewOnly&&dt&&(0,e.jsx)(de,{layoutId:_,layoutItem:st,top:X,left:J,right:K,bottom:tt,resizable:et,draggable:ot,selected:dt,autoScroll:nt,forbidToolbar:t.forbidToolbar,toolItems:t.toolItems,showDefaultTools:t.showDefaultTools,isInlineEditing:ut,isFunctionalWidget:at,hasEmbeddedLayout:mt,isSection:jt,isBlock:it,hasExtension:Pt&&ft,widgetJson:h.widgetJson,widgetState:h.widgetState,rotate:kt}),!m.viewOnly&&(0,e.jsx)("div",{className:"highlight-tip"},(0,e.jsx)("div",{className:"tip-content"})),t.children))}var Qe=p(5124),Ke=p.n(Qe),to=p(3046),eo=p.n(to),oo=p(3626),io=p.n(oo),no=p(9791),so=p.n(no),ao=p(100),lo=p.n(ao),ro=p(1528),uo=p.n(ro),co=p(7319),po=p.n(co),ho=p(3166),go=p.n(ho),mo=p(4201),fo=p.n(mo),yo=p(4703),vo=p.n(yo),Io=p(7758),xo=p.n(Io),bo=p(1282),wo=p.n(bo),So=p(2340),Co=p.n(So),Ro=p(3262),Ao=p.n(Ro),To=p(7123),Mo=p.n(To),Po=p(7322),jo=p.n(Po),Lo=p(6128);function zo(t){const e=(0,o.getAppConfigAction)(),i=e.appConfig,{layoutId:n,layoutItemId:s}=t,a=i.layouts[n];Lo(a.order,"parent order must not be empty to alter order");const l=[].concat(a.order),r=l.indexOf(s);r===l.length-1||r<0||(l[r]=l[r+1],l[r+1]=t.layoutItemId,e.editLayoutOrder({layoutId:n},l).exec())}function ko(t){const e=(0,o.getAppConfigAction)(),i=e.appConfig,{layoutId:n,layoutItemId:s}=t,a=i.layouts[n];Lo(a.order,"parent order must not be empty to alter order");const l=[].concat(a.order),r=l.indexOf(s);r===l.length-1||r<0||(l.splice(r,1),l.push(t.layoutItemId),e.editLayoutOrder({layoutId:n},l).exec())}function No(t){const e=(0,o.getAppConfigAction)(),i=e.appConfig,{layoutId:n,layoutItemId:s}=t,a=i.layouts[n];Lo(a.order,"parent order must not be empty to alter order");const l=[].concat(a.order),r=l.indexOf(s);r<=0||(l[r]=l[r-1],l[r-1]=t.layoutItemId,e.editLayoutOrder({layoutId:n},l).exec())}function $o(t){const e=(0,o.getAppConfigAction)(),i=e.appConfig,{layoutId:n,layoutItemId:s}=t,a=i.layouts[n];Lo(a.order,"parent order must not be empty to alter order");const l=[].concat(a.order),r=l.indexOf(s);r<=0||(l.splice(r,1),l.splice(0,0,t.layoutItemId),e.editLayoutOrder({layoutId:n},l).exec())}function Oo(t){const i=(0,o.getAppConfigAction)(),n=i.appConfig;let s=a.searchUtils.findLayoutItem(n,t).setting||(0,e.Immutable)({});s=s.set("lockLayout",!s.lockLayout),i.editLayoutItemSetting(t,s).exec()}function Eo(t,i){const n=(0,o.getAppConfigAction)(),s=n.appConfig,l=a.searchUtils.findLayoutItem(s,t),r=l.bbox;let d,u=l.setting||(0,e.Immutable)({});switch(0!==parseInt(r[i],10)&&n.editLayoutItemBBox(t,r.set(i,a.utils.isPercentage(r[i])?"0%":"0px")),u=u.setIn(["autoProps",i],!1),i){case"top":d="bottom";break;case"bottom":d="top";break;case"left":d="right";break;case"right":d="left"}u=u.setIn(["autoProps",d],!0),"left"===i||"right"===i?u=u.set("hCenter",!1):"top"!==i&&"bottom"!==i||(u=u.set("vCenter",!1)),n.editLayoutItemSetting(t,u).exec()}function Do(t){const i=(0,o.getAppConfigAction)(),n=i.appConfig,s=a.searchUtils.findLayoutItem(n,t),l=s.bbox;let r=s.setting||(0,e.Immutable)({});r=r.set("hCenter",!1).setIn(["autoProps","left"],!1).setIn(["autoProps","right"],!1).setIn(["autoProps","width"],a.LayoutItemSizeModes.Stretch),i.editLayoutItemBBox(t,l.set("left",a.utils.isPercentage(l.left)?"0%":"0px").set("right",a.utils.isPercentage(l.right)?"0%":"0px").set("width","100%")).editLayoutItemSetting(t,r).exec()}function Bo(t,i){var n,s;const l=(0,o.getAppConfigAction)(),r=l.appConfig,d=a.searchUtils.findLayoutItem(r,t);let u=d.setting||(0,e.Immutable)({}),c=d.bbox;if("h"===i)if((null===(n=u.autoProps)||void 0===n?void 0:n.width)===a.LayoutItemSizeModes.Stretch){if(a.utils.isPercentage(c.left)!==a.utils.isPercentage(c.right))return;{const t=a.utils.isPercentage(c.left)?"%":"px",e=parseFloat(c.left)+parseFloat(c.right);c=c.set("left",`${e/2}${t}`).set("right",`${e/2}${t}`)}}else c=c.set("left","50%"),u=u.set("hCenter",!0).setIn(["autoProps","left"],!1).setIn(["autoProps","right"],!0);else if((null===(s=u.autoProps)||void 0===s?void 0:s.height)===a.LayoutItemSizeModes.Stretch){if(a.utils.isPercentage(c.top)!==a.utils.isPercentage(c.bottom))return;{const t=a.utils.isPercentage(c.top)?"%":"px",e=parseFloat(c.top)+parseFloat(c.bottom);c=c.set("top",`${e/2}${t}`).set("bottom",`${e/2}${t}`)}}else c=c.set("top","50%"),u=u.set("vCenter",!0).setIn(["autoProps","top"],!1).setIn(["autoProps","bottom"],!0);l.editLayoutItemBBox(t,c).editLayoutItemSetting(t,u).exec()}function Fo(t){Bo(t,"v")}function Vo(t){Bo(t,"h")}function Ho(t){const i=(0,o.getAppConfigAction)(),n=i.appConfig,s=a.searchUtils.findLayoutItem(n,t),l=s.bbox;let r=s.setting||(0,e.Immutable)({});r=r.set("vCenter",!1).setIn(["autoProps","top"],!1).setIn(["autoProps","bottom"],!1).setIn(["autoProps","height"],a.LayoutItemSizeModes.Stretch),i.editLayoutItemBBox(t,l.set("top",a.utils.isPercentage(l.top)?"0%":"0px").set("bottom",a.utils.isPercentage(l.bottom)?"0%":"0px").set("height","100%")).editLayoutItemSetting(t,r).exec()}function Wo(t){const i=(0,o.getAppConfigAction)(),n=i.appConfig,s=a.searchUtils.findLayoutItem(n,t),l=s.bbox;let r=s.setting||(0,e.Immutable)({});r=r.set("vCenter",!1).set("hCenter",!1).setIn(["autoProps","top"],!1).setIn(["autoProps","bottom"],!1).setIn(["autoProps","left"],!1).setIn(["autoProps","right"],!1).setIn(["autoProps","height"],a.LayoutItemSizeModes.Stretch).setIn(["autoProps","width"],a.LayoutItemSizeModes.Stretch),i.editLayoutItemBBox(t,l.set("top",a.utils.isPercentage(l.top)?"0%":"0px").set("bottom",a.utils.isPercentage(l.bottom)?"0%":"0px").set("left",a.utils.isPercentage(l.left)?"0%":"0px").set("right",a.utils.isPercentage(l.right)?"0%":"0px").set("width","100%").set("height","100%")).editLayoutItemSetting(t,r).exec()}const Go=[[{icon:lo(),visible:()=>X()===e.AppMode.Design&&!q(),title:t=>t.formatMessage("align")},{icon:uo(),label:t=>t.formatMessage(a.utils.isRTL()?"snapToRight":"snapToLeft"),title:t=>t.formatMessage(a.utils.isRTL()?"snapToRight":"snapToLeft"),autoFlipIcon:!0,onClick:t=>{const{layoutItem:e,layoutId:o}=t;Eo({layoutId:o,layoutItemId:e.id},"left")}},{icon:vo(),label:t=>t.formatMessage("alignHCenter"),title:t=>t.formatMessage("alignHCenter"),onClick:t=>{const{layoutItem:e,layoutId:o}=t;Vo({layoutId:o,layoutItemId:e.id})}},{icon:po(),label:t=>t.formatMessage(a.utils.isRTL()?"snapToLeft":"snapToRight"),title:t=>t.formatMessage(a.utils.isRTL()?"snapToLeft":"snapToRight"),autoFlipIcon:!0,onClick:t=>{const{layoutItem:e,layoutId:o}=t;Eo({layoutId:o,layoutItemId:e.id},"right")}},{icon:go(),label:t=>t.formatMessage("snapToTop"),title:t=>t.formatMessage("snapToTop"),onClick:t=>{const{layoutItem:e,layoutId:o}=t;Eo({layoutId:o,layoutItemId:e.id},"top")}},{icon:xo(),label:t=>t.formatMessage("alignVCenter"),title:t=>t.formatMessage("alignVCenter"),onClick:t=>{const{layoutItem:e,layoutId:o}=t;Fo({layoutId:o,layoutItemId:e.id})}},{icon:fo(),label:t=>t.formatMessage("snapToBottom"),title:t=>t.formatMessage("snapToBottom"),onClick:t=>{const{layoutItem:e,layoutId:o}=t;Eo({layoutId:o,layoutItemId:e.id},"bottom")}},{icon:io(),label:t=>t.formatMessage("fullWidth"),title:t=>t.formatMessage("fullWidth"),onClick:t=>{const{layoutItem:e,layoutId:o}=t;Do({layoutId:o,layoutItemId:e.id})}},{icon:eo(),label:t=>t.formatMessage("fullHeight"),title:t=>t.formatMessage("fullHeight"),onClick:t=>{const{layoutItem:e,layoutId:o}=t;Ho({layoutId:o,layoutItemId:e.id})}},{icon:so(),label:t=>t.formatMessage("fullSize"),title:t=>t.formatMessage("fullSize"),onClick:t=>{const{layoutItem:e,layoutId:o}=t;Wo({layoutId:o,layoutItemId:e.id})}}],[{icon:Ke(),visible:()=>X()===e.AppMode.Design&&!q(),title:t=>t.formatMessage("arrange")},{icon:wo(),label:t=>t.formatMessage("sendBackward"),title:t=>t.formatMessage("sendBackward"),onClick:t=>{const{layoutItem:e,layoutId:o}=t;No({layoutId:o,layoutItemId:e.id})}},{icon:Co(),label:t=>t.formatMessage("bringForward"),title:t=>t.formatMessage("bringForward"),onClick:t=>{const{layoutItem:e,layoutId:o}=t;zo({layoutId:o,layoutItemId:e.id})}},{icon:Ao(),label:t=>t.formatMessage("sendToBack"),title:t=>t.formatMessage("sendToBack"),onClick:t=>{const{layoutItem:e,layoutId:o}=t;$o({layoutId:o,layoutItemId:e.id})}},{icon:Mo(),label:t=>t.formatMessage("bringToFront"),title:t=>t.formatMessage("bringToFront"),onClick:t=>{const{layoutItem:e,layoutId:o}=t;ko({layoutId:o,layoutItemId:e.id})}}],{icon:t=>{var e,o;const{layoutItem:i}=t;return null!==(o=null===(e=i.setting)||void 0===e?void 0:e.lockLayout)&&void 0!==o&&o?ae():jo()},visible:()=>X()===e.AppMode.Design&&!q(),title:t=>{var e,o;const{layoutItem:i}=t,n=null!==(o=null===(e=i.setting)||void 0===e?void 0:e.lockLayout)&&void 0!==o&&o;return t.formatMessage(n?"unlockLayout":"lockLayout")},onClick:t=>{const{layoutItem:e,layoutId:o}=t;Oo({layoutId:o,layoutItemId:e.id})}},{seperator:!0}];function Zo(t){return/^-?\d*(\.\d+)?%$/.test(t)}function Uo(t,e){return null==(null==t?void 0:t[e])?null:"string"==typeof t[e]?t[e]:function(t){const e=parseFloat(t);return!isNaN(e)&&isFinite(e)}(t[e])?`${Math.round(parseFloat(t[e]))}px`:null}function _o(t,e){return parseFloat(`${t}`)*e/100}function Yo(){var t,o;return null!==(o=null===(t=(0,e.getAppStore)().getState().appContext)||void 0===t?void 0:t.isRTL)&&void 0!==o&&o}function Xo(t,e,o){const i=null==o?void 0:o[t],n="width"===t?"left":"top",s="width"===t?"right":"bottom";if(!i)return null!=e[t]?Ne.Custom:null!=e[n]&&null!=e[s]?Ne.Stretch:Ne.Auto;if(!0===i)return null!=e[n]&&null!=e[s]?Ne.Stretch:Ne.Auto;switch(i){case Ne.Auto:return Ne.Auto;case Ne.Stretch:return Ne.Stretch;default:return Ne.Custom}}function qo(t,e,o,i=!1){const n={};n.left=t.left+o.dx,n.width=t.width+o.dw;const s=e.right-t.right;0===o.dw?n.right=s-o.dx:0===o.dx?(o.dw>0&&(o.dw=Math.min(s,o.dw)),n.right=s-o.dw,n.width=t.width+o.dw):(n.right=s,o.dx<0&&(o.dx=Math.max(-t.left,o.dx),o.dw=-o.dx,n.left=t.left+o.dx,n.width=t.width+o.dw)),n.top=t.top+o.dy,n.height=t.height+o.dh;const a=e.bottom-t.bottom;return 0===o.dh?n.bottom=a-o.dy:0===o.dy?(o.dh>0&&(o.dh=Math.min(a,o.dh)),n.bottom=a-o.dh,n.height=t.height+o.dh):(n.bottom=a,o.dy<0&&(o.dy=Math.max(-t.top,o.dy),o.dh=-o.dy,n.top=t.top+o.dy,n.height=t.height+o.dh)),i&&Yo()?Qo(n):n}function Jo(t,e){var o,i,n,s,a;const l={};let r=null!==(o=null==e?void 0:e.autoProps)&&void 0!==o?o:{},d=t;const u=Xo("height",t,r),c=Xo("width",t,r);if(u===Ne.Stretch)l.top=d.top,l.bottom=d.bottom;else{const o=null!==(i=r.top)&&void 0!==i&&i,s=null!==(n=r.bottom)&&void 0!==n&&n;u===Ne.Custom&&(l.height=d.height),o!==s&&!s||null==t.top?l.bottom=d.bottom:l.top=d.top,e.vCenter&&"50%"===d.top&&(l.top="50%")}if(c===Ne.Stretch)l.left=d.left,l.right=d.right;else{const t=null!==(s=r.left)&&void 0!==s&&s,o=null!==(a=r.right)&&void 0!==a&&a;c===Ne.Custom&&(l.width=d.width),t===o?null!=d.left?l.left=d.left:l.right=d.right:t&&null!=d.right?l.right=d.right:l.left=d.left,e.hCenter&&"50%"===d.left&&(l.left="50%")}return l}function Qo(t){const o=(0,e.Immutable)(t),i=t.left;return o.set("left",t.right).set("right",i)}function Ko(t){return"ratio"===t.heightMode}function ti(t,o,i,n){var s,a;let l=t,r=(0,e.Immutable)(null!=o?o:{});return(null===(s=null==o?void 0:o.autoProps)||void 0===s?void 0:s.width)!==Ne.Stretch&&(r=n.left<n.right?Yo()?r.setIn(["autoProps","right"],!1).setIn(["autoProps","left"],!0):r.setIn(["autoProps","left"],!1).setIn(["autoProps","right"],!0):Yo()?r.setIn(["autoProps","left"],!1).setIn(["autoProps","right"],!0):r.setIn(["autoProps","right"],!1).setIn(["autoProps","left"],!0)),(null===(a=null==o?void 0:o.autoProps)||void 0===a?void 0:a.height)!==Ne.Stretch&&(r=n.top<n.bottom?r.setIn(["autoProps","top"],!1).setIn(["autoProps","bottom"],!0):r.setIn(["autoProps","top"],!0).setIn(["autoProps","bottom"],!1)),["left","right","top","bottom","width","height"].forEach((e=>{const o="left"===e||"right"===e||"width"===e?i.width:i.height;let s=Zo(t[e]);Yo()&&("left"===e?s=Zo(t.right):"right"===e&&(s=Zo(t.left))),l=null==t[e]||s?l.set(e,`${(100*n[e]/o).toFixed(1)}%`):l.set(e,`${Math.round(n[e])}px`)})),{bbox:l,setting:r}}class ei extends e.React.PureComponent{constructor(){super(...arguments),this.state={},this.handleResizeEnd=(t,e,o,i,n,s)=>{const{layoutItem:l}=this.props,r="ratio"===this.itemSetting.heightMode?a.utils.parseAspectRatio(this.itemSetting.aspectRatio)*i:n;this.props.onResizeEnd(t,e,o,i,r,s,l,this.itemSetting)},this.handleResizing=(t,e,o,i,n,s,l)=>{const r="ratio"===this.itemSetting.heightMode?a.utils.parseAspectRatio(this.itemSetting.aspectRatio)*i:n;this.props.onResizing(t,e,o,i,r,s,l)},this.moveUp=()=>{this.props.onMoveByKey(this.props.layoutItemId,0,-1)},this.moveDown=()=>{this.props.onMoveByKey(this.props.layoutItemId,0,1)},this.moveLeft=()=>{this.props.onMoveByKey(this.props.layoutItemId,-1,0)},this.moveRight=()=>{this.props.onMoveByKey(this.props.layoutItemId,1,0)}}getKeyboardComponent(){return this.props.isDesignMode?(0,e.jsx)(e.Keyboard,{bindings:{up:this.moveUp,down:this.moveDown,left:this.moveLeft,right:this.moveRight}}):null}getPositionStyle(){var t,o;const{layoutItem:i,offsetX:n,offsetY:s,dw:l,dh:r,initRect:d,containerRect:u}=this.props;let c=Jo(i.bbox,this.itemSetting);const p=i.setting;null!=d&&(c=qo(d,u,{dw:l,dh:"ratio"===this.itemSetting.heightMode?a.utils.parseAspectRatio(this.itemSetting.aspectRatio)*l:r,dx:n,dy:s},!0),(null==p?void 0:p.hCenter)&&"50%"===(null===(t=i.bbox)||void 0===t?void 0:t.left)&&(c.left="50%"),(null==p?void 0:p.vCenter)&&"50%"===(null===(o=i.bbox)||void 0===o?void 0:o.top)&&(c.top="50%"));const h=Object.assign(Object.assign({},c),function(t,e,o=!1){const i={},n=e.hCenter&&"50%"===t.left,s=e.vCenter&&"50%"===t.top,a=Yo()?-1:1;return n&&s?(i.right="auto",i.bottom="auto",i.transform=`translate(${-50*a}%, -50%)`):n?(i.right="auto",i.transform=`translateX(${-50*a}%)`):s&&(i.bottom="auto",i.transform="translateY(-50%)"),!o&&Ko(e)&&(i.height="auto"),i}(i.bbox,this.itemSetting,Boolean(d)));return 0===l&&0===r||(h.right="auto"),[e.css`
        position: absolute;
        left: ${a.utils.getValueOfBBox(h,"left")};
        right: ${a.utils.getValueOfBBox(h,"right")};
        top: ${a.utils.getValueOfBBox(h,"top")};
        bottom: ${a.utils.getValueOfBBox(h,"bottom")};
        width: ${a.utils.getValueOfBBox(h,"width")};
        height: ${a.utils.getValueOfBBox(h,"height")};
      `,h.transform]}render(){const{layoutId:t,layoutItem:o,isLayoutLockChildren:i,draggable:n=!0,resizable:l=!0}=this.props;if(null==o||o.isPending)return null;this.itemSetting=e.lodash.assign({},s,o.setting);const r=this.itemSetting.lockLayout,d=a.utils.parseAspectRatio(this.itemSetting.aspectRatio),u=Ko(this.itemSetting),c=a.utils.getLayoutItemSizeMode("width",o.bbox,this.itemSetting.autoProps),p=a.utils.getLayoutItemSizeMode("height",o.bbox,this.itemSetting.autoProps),h=a.utils.handleOnebyOneAnimation(this.props),[g,m]=this.getPositionStyle();return(0,e.jsx)(Je,Object.assign({className:"d-flex",css:g,style:{transform:m},layoutId:t,layoutItemId:o.id,restrict:this.itemSetting.lockParent||i,draggable:n&&!r,resizable:l&&!r,showDefaultTools:this.props.showDefaultTools,toolItems:Go,onResizeStart:this.props.onResizeStart,onResizing:this.handleResizing,onResizeEnd:this.handleResizeEnd,onClick:this.props.onClick,top:p!==a.LayoutItemSizeModes.Auto&&!u,bottom:p!==a.LayoutItemSizeModes.Auto&&!u,left:c!==a.LayoutItemSizeModes.Auto,right:c!==a.LayoutItemSizeModes.Auto,forceAspectRatio:u,aspectRatio:d,isInSection:this.props.isInSection},h),this.props.selected&&this.getKeyboardComponent())}}const oi=e.ReactRedux.connect((function(t,o){var i,n;let s=!1;const a=null===(i=t.appRuntimeInfo)||void 0===i?void 0:i.selection;return null!=a&&(s=a.layoutId===o.layoutId&&a.layoutItemId===o.layoutItemId),{selected:s,isDesignMode:(null===(n=t.appRuntimeInfo)||void 0===n?void 0:n.appMode)===e.AppMode.Design}}))(ei);function ii(t,e){var o,i,n,s;if(e.rect.top>t.rect.bottom||e.rect.bottom<t.rect.top)return!1;if(e.rect.right+5<t.rect.left&&null!=(null===(o=e.right)||void 0===o?void 0:o.value)&&null!=(null===(i=t.left)||void 0===i?void 0:i.value)){const o=e.right.usePercentage;if(o===t.left.usePercentage)return o||e.right.origin===t.left.origin}if(t.rect.right+5<e.rect.left&&null!=(null===(n=t.right)||void 0===n?void 0:n.value)&&null!=(null===(s=e.left)||void 0===s?void 0:s.value)){const o=e.left.usePercentage;if(o===t.right.usePercentage)return o||e.left.origin===t.right.origin}return!1}function ni(t,e){var o,i,n,s;if(e.rect.left>t.rect.right||e.rect.right<t.rect.left)return!1;if(e.rect.bottom+5<t.rect.top&&null!=(null===(o=e.bottom)||void 0===o?void 0:o.value)&&null!=(null===(i=t.top)||void 0===i?void 0:i.value)){const o=e.bottom.usePercentage;if(o===t.top.usePercentage)return o||e.bottom.origin===t.top.origin}if(t.rect.bottom+5<e.rect.top&&null!=(null===(n=t.bottom)||void 0===n?void 0:n.value)&&null!=(null===(s=e.top)||void 0===s?void 0:s.value)){const o=e.top.usePercentage;if(o===t.bottom.usePercentage)return o||e.top.origin===t.bottom.origin}return!1}function si(t,e){let o;return e.filter((e=>{var o,i;return(null===(o=e.right)||void 0===o?void 0:o.pixelValue)<(null===(i=t.left)||void 0===i?void 0:i.pixelValue)})).sort(((t,e)=>e.right.pixelValue-t.right.pixelValue)).some((e=>{if(ii(t,e))return o={value:e},!0})),null!=o&&(o.next=si(o.value,e)),o}function ai(t,e){let o;return e.filter((e=>{var o,i;return(null===(o=e.left)||void 0===o?void 0:o.pixelValue)>(null===(i=t.right)||void 0===i?void 0:i.pixelValue)})).sort(((t,e)=>t.left.pixelValue-e.left.pixelValue)).some((e=>{if(ii(t,e))return o={value:e},!0})),null!=o&&(o.next=ai(o.value,e)),o}function li(t,e){let o;return e.filter((e=>{var o,i;return(null===(o=e.bottom)||void 0===o?void 0:o.pixelValue)<(null===(i=t.top)||void 0===i?void 0:i.pixelValue)})).sort(((t,e)=>e.bottom.pixelValue-t.bottom.pixelValue)).some((e=>{if(ni(t,e))return o={value:e},!0})),null!=o&&(o.next=li(o.value,e)),o}function ri(t,e){let o;return e.filter((e=>{var o,i;return(null===(o=e.top)||void 0===o?void 0:o.pixelValue)>(null===(i=t.bottom)||void 0===i?void 0:i.pixelValue)})).sort(((t,e)=>t.top.pixelValue-e.top.pixelValue)).some((e=>{if(ni(t,e))return o={value:e},!0})),null!=o&&(o.next=ri(o.value,e)),o}function di(t,o,i,n,s,l,r,d){if(null!=l&&null!=d){const u=Math.max(t.rect.top,o.rect.top),c=Math.min(t.rect.bottom,o.rect.bottom);l.setColor(e.polished.rgba(d.colors.palette.danger[800],.6));const p={left:s?o.rect.left-i:t.rect.right,top:u,width:i,height:c-u};if(l.drawRect(p),n){const n=(u+c)/2,p=t.right.usePercentage?e.utils.formatPercentageNumber(a.utils.toRatio(i,r)):e.utils.formatPixelNumber(`${i}px`);l.setColor(d.colors.palette.primary[600]),l.drawLine(s?o.rect.left-i:t.rect.right,n,s?o.rect.left:t.rect.right+i,n,!1,p)}}}function ui(t,o,i,n,s,l,r,d){if(null!=l&&null!=d){const u=Math.max(t.rect.left,o.rect.left),c=Math.min(t.rect.right,o.rect.right);l.setColor(e.polished.rgba(d.colors.palette.danger[800],.6));const p={left:u,top:s?o.rect.top-i:t.rect.bottom,width:c-u,height:i};if(l.drawRect(p),n){const n=(u+c)/2,p=t.bottom.usePercentage?e.utils.formatPercentageNumber(a.utils.toRatio(i,r)):e.utils.formatPixelNumber(`${i}px`);l.setColor(d.colors.palette.primary[600]),l.drawLine(n,s?o.rect.top-i:t.rect.bottom,n,s?o.rect.top:t.rect.bottom+i,!1,p)}}}function ci(t,o,i,n,s,l,r){var d,u,c,p,h;let g=0,m=0;const f=0!==i.w||0!==i.h;if(!f||0!==i.w){let s=si(t,o);s=function(t,e){const o={id:"",right:{value:e?"0%":"0px",pixelValue:0,usePercentage:e,origin:0,from:Number.NEGATIVE_INFINITY,to:Number.POSITIVE_INFINITY},rect:{left:-100,width:100,right:0,top:Number.NEGATIVE_INFINITY,bottom:Number.POSITIVE_INFINITY}};if(null==t)return{value:o};let i=t;for(;null!=i.next;)i=i.next;return i.next={value:o},t}(s,null==(null===(d=t.left)||void 0===d?void 0:d.value)||(null===(u=t.left)||void 0===u?void 0:u.usePercentage));let p=ai(t,o);p=function(t,e,o){const i={id:"",left:{value:e?"0%":"0px",pixelValue:o,usePercentage:e,origin:1,from:Number.NEGATIVE_INFINITY,to:Number.POSITIVE_INFINITY},rect:{left:o,width:100,right:o+100,top:Number.NEGATIVE_INFINITY,bottom:Number.POSITIVE_INFINITY}};if(null==t)return{value:i};let n=t;for(;null!=n.next;)n=n.next;return n.next={value:i},t}(p,null==(null===(c=t.right)||void 0===c?void 0:c.value)||t.right.usePercentage,n),g=function(t,e,o,i,n,s){if(e.gridline.rect.top===Number.NEGATIVE_INFINITY&&o.gridline.rect.top===Number.NEGATIVE_INFINITY||null==t.left||null==t.right)return 0;const a=t.left.pixelValue-e.gridline.right.pixelValue,l=o.gridline.left.pixelValue-t.right.pixelValue,r=e.fixed||o.fixed?5:10;if(Math.abs(l-a)<r){let r,d;return r=e.fixed||o.fixed?l-a:(l-a)/2,d=e.fixed?a:o.fixed?l:a+r,di(e.gridline,t,d,!1,!1,i,n,s),di(t,o.gridline,d,!1,!0,i,n,s),r}return 0}(t,{gridline:s.value,fixed:0!==i.w&&0===i.x},{gridline:p.value,fixed:0!==i.w&&0!==i.x},l,n,r),0!==g||0!==i.w&&0===i.x||(g=function(t,e,o,i,n){if(null==(null==e?void 0:e.next))return 0;const s=t.rect.left-e.value.rect.right;let a=e,l=-1;for(;null!=a.next;){const t=a.next,e=a.value.rect.left-t.value.rect.right;-1===l?Math.abs(e-s)<=5&&(l=e,di(t.value,a.value,l,!0,!1,o,i,n)):e===l&&di(t.value,a.value,l,!0,!1,o,i,n),a=t}if(l>0){const a=l-s;return di(e.value,t,l,!1,!1,o,i,n),a}return 0}(t,s,l,n,r)),0!==g||0!==i.w&&0!==i.x||(g=function(t,e,o,i,n){if(null==(null==e?void 0:e.next))return 0;const s=e.value.rect.left-t.rect.right;let a=e,l=-1;for(;null!=a.next;){const t=a.next,e=t.value.rect.left-a.value.rect.right;-1===l?Math.abs(e-s)<=5&&(l=e,di(a.value,t.value,l,!0,!0,o,i,n)):e===l&&di(a.value,t.value,l,!0,!0,o,i,n),a=t}if(l>0){const a=s-l;return di(t,e.value,l,!1,!0,o,i,n),a}return 0}(t,p,l,n,r)),function(t,o,i,n,s,l,r,d){var u;if(null!=l&&null!=d){l.setColor(d.colors.palette.primary[600]);let c=(null===(u=o.gridline)||void 0===u?void 0:u.rect.top)===Number.NEGATIVE_INFINITY;const p=o.gridline.rect;if(null!=p&&null!=t.left&&(!c||n&&!o.fixed)){const i=(Math.max(t.rect.top,p.top)+Math.min(t.rect.bottom,p.bottom))/2,n=t.left.usePercentage;let d=t.rect.left-p.right;o.fixed||(d+=s);const u=n?e.utils.formatPercentageNumber(a.utils.toRatio(d,r)):e.utils.formatPixelNumber(`${d}px`);l.drawLine(p.right,i,p.right+d,i,!1,u)}c=i.gridline.rect.top===Number.NEGATIVE_INFINITY;const h=i.gridline.rect;if(null!=h&&null!=t.right&&(!c||n&&!i.fixed)){const o=(Math.max(t.rect.top,h.top)+Math.min(t.rect.bottom,h.bottom))/2,n=t.right.usePercentage;let d=h.left-t.rect.right;i.fixed||(d-=s);const u=n?e.utils.formatPercentageNumber(a.utils.toRatio(d,r)):e.utils.formatPixelNumber(`${d}px`);l.drawLine(h.left,o,h.left-d,o,!1,u)}}}(t,{gridline:s.value,fixed:0!==i.w&&0===i.x},{gridline:p.value,fixed:0!==i.w&&0!==i.x},0!==i.w,g,l,n,r)}if(!f||0!==i.h){let n=li(t,o);n=function(t,e){const o={id:"",bottom:{value:e?"0%":"0px",pixelValue:0,usePercentage:e,origin:0,from:Number.NEGATIVE_INFINITY,to:Number.POSITIVE_INFINITY},rect:{top:-100,height:100,bottom:0,left:Number.NEGATIVE_INFINITY,right:Number.POSITIVE_INFINITY}};if(null==t)return{value:o};let i=t;for(;null!=i.next;)i=i.next;return i.next={value:o},t}(n,null==(null===(p=t.top)||void 0===p?void 0:p.value)||t.top.usePercentage);let d=ri(t,o);d=function(t,e,o){const i={id:"",top:{value:e?"0%":"0px",pixelValue:o,usePercentage:e,origin:1,from:Number.NEGATIVE_INFINITY,to:Number.POSITIVE_INFINITY},rect:{top:o,height:100,bottom:o+100,left:Number.NEGATIVE_INFINITY,right:Number.POSITIVE_INFINITY}};if(null==t)return{value:i};let n=t;for(;null!=n.next;)n=n.next;return n.next={value:i},t}(d,null==(null===(h=t.bottom)||void 0===h?void 0:h.value)||t.bottom.usePercentage,s),m=function(t,e,o,i,n,s){if(e.gridline.rect.left===Number.NEGATIVE_INFINITY&&o.gridline.rect.left===Number.NEGATIVE_INFINITY||null==t.top||null==t.bottom)return 0;const a=t.top.pixelValue-e.gridline.bottom.pixelValue,l=o.gridline.top.pixelValue-t.bottom.pixelValue,r=e.fixed||o.fixed?5:10;if(Math.abs(l-a)<r){let r,d;return r=e.fixed||o.fixed?l-a:(l-a)/2,d=e.fixed?a:o.fixed?l:a+r,ui(e.gridline,t,d,!1,!1,i,n,s),ui(t,o.gridline,d,!1,!0,i,n,s),r}return 0}(t,{gridline:n.value,fixed:0!==i.h&&0===i.y},{gridline:d.value,fixed:0!==i.h&&0!==i.y},l,s,r),0!==m||0!==i.h&&0===i.y||(m=function(t,e,o,i,n){if(null==(null==e?void 0:e.next))return 0;const s=t.rect.top-e.value.rect.bottom;let a=e,l=-1;for(;null!=a.next;){const t=a.next,e=a.value.rect.top-t.value.rect.bottom;-1===l?Math.abs(e-s)<=5&&(l=e,ui(t.value,a.value,l,!0,!1,o,i,n)):e===l&&ui(t.value,a.value,l,!0,!1,o,i,n),a=t}if(l>0){const a=l-s;return ui(e.value,t,l,!1,!1,o,i,n),a}return 0}(t,n,l,s,r)),0!==m||0!==i.h&&0!==i.y||(m=function(t,e,o,i,n){if(null==(null==e?void 0:e.next))return 0;const s=e.value.rect.top-t.rect.bottom;let a=e,l=-1;for(;null!=a.next;){const t=a.next,e=t.value.rect.top-a.value.rect.bottom;-1===l?Math.abs(e-s)<=5&&(l=e,ui(a.value,t.value,l,!0,!0,o,i,n)):e===l&&ui(a.value,t.value,l,!0,!0,o,i,n),a=t}if(l>0){const a=s-l;return ui(t,e.value,l,!1,!0,o,i,n),a}return 0}(t,d,l,s,r)),function(t,o,i,n,s,l,r,d){if(null!=l&&null!=d){l.setColor(d.colors.palette.primary[600]);let u=o.gridline.rect.left===Number.NEGATIVE_INFINITY;const c=o.gridline.rect;if(null!=c&&null!=t.top&&(!u||n&&!o.fixed)){const i=(Math.max(t.rect.left,c.left)+Math.min(t.rect.right,c.right))/2,n=t.top.usePercentage;let d=t.rect.top-c.bottom;o.fixed||(d+=s);const u=n?e.utils.formatPercentageNumber(a.utils.toRatio(d,r)):e.utils.formatPixelNumber(`${d}px`);l.drawLine(i,c.bottom,i,c.bottom+d,!1,u)}u=i.gridline.rect.left===Number.NEGATIVE_INFINITY;const p=i.gridline.rect;if(null!=p&&null!=t.bottom&&(!u||n&&!i.fixed)){const o=(Math.max(t.rect.left,p.left)+Math.min(t.rect.right,p.right))/2,n=t.bottom.usePercentage;let d=p.top-t.rect.bottom;i.fixed||(d-=s);const u=n?e.utils.formatPercentageNumber(a.utils.toRatio(d,r)):e.utils.formatPixelNumber(`${d}px`);l.drawLine(o,p.top,o,p.top-d,!1,u)}}}(t,{gridline:null==n?void 0:n.value,fixed:0!==i.h&&0===i.y},{gridline:null==d?void 0:d.value,fixed:0!==i.y&&0!==i.y},0!==i.h,m,l,s,r)}return{dx:g,dy:m}}function pi(t,e){return Math.abs(e.pixelValue-t.pixelValue)}function hi(t,e,o){if(t.pixelValue+e===o.pixelValue){const e=o.usePercentage;if(e===t.usePercentage)return e||o.origin===t.origin}return!1}function gi(t,e){return e.filter((e=>function(t,e){if(pi(e,t)<20){const o=e.usePercentage;if(o===t.usePercentage)return o||e.origin===t.origin}return!1}(t,e))).sort(((e,o)=>pi(e,t)-pi(o,t)))}var mi;function fi(t,e=!1){const o={};if(["left","right","width","top","bottom","height"].forEach((e=>{null!=(null==t?void 0:t[e])?o[e]=a.utils.isPercentage(t[e])?"%":"px":o[e]="%"})),e){const t=o.left;o.left=o.right,o.right=t}return o}function yi(t,e){return a.utils.isPercentage(t)?Math.round(a.utils.fromRatio(t,e)):Math.round(parseFloat(t))}function vi(t,e,o,i){var n;const s=[];Object.keys(null!==(n=t.content)&&void 0!==n?n:{}).forEach((n=>{if(n!==i){const i=t.content[n];if(!i.isPending){const t=function(t,e,o){var i,n,s,l,r,d,u,c,p;const h=t.bbox,g=fi(h,Yo()),m=null!==(i=t.setting)&&void 0!==i?i:{},f=function(t,e,o){var i,n,s;const l={},r=null!==(i=t.bbox)&&void 0!==i?i:{},d=null!==(s=null===(n=t.setting)||void 0===n?void 0:n.autoProps)&&void 0!==s?s:{};return d.width===a.LayoutItemSizeModes.Stretch?(l.left=yi(r.left,e),l.right=e-yi(r.right,e),l.width=l.right-l.left):d.width===a.LayoutItemSizeModes.Auto?d.left?l.right=e-yi(r.right,e):l.left=yi(r.left,e):(l.width=yi(r.width,e),d.left?(l.right=e-yi(r.right,e),l.left=l.right-l.width):(l.left=yi(r.left,e),l.right=l.left+l.width)),d.height===a.LayoutItemSizeModes.Stretch?(l.top=yi(r.top,o),l.bottom=o-yi(r.bottom,o),l.height=l.bottom-l.top):d.height===a.LayoutItemSizeModes.Auto?d.top?l.bottom=o-yi(r.bottom,o):l.top=yi(r.top,o):(l.height=yi(r.height,o),d.top?(l.bottom=o-yi(r.bottom,o),l.top=l.bottom-l.height):(l.top=yi(r.top,o),l.bottom=l.top+l.height)),l}(t,e,o),y={id:t.id,rect:f},v=t=>a.utils.isPercentage(t)?100-parseFloat(t)+"%":t,I=t=>a.utils.isPercentage(t)?100-parseFloat(t)+"%":e-parseFloat(t)+"px",x={value:h.left,pixelValue:f.left,usePercentage:"%"===g.left,origin:0},b={value:h.top,pixelValue:f.top,usePercentage:"%"===g.top,origin:0},w={value:v(h.right),pixelValue:f.right,usePercentage:"%"===g.right,origin:1},S={value:v(h.bottom),pixelValue:f.bottom,usePercentage:"%"===g.bottom,origin:1};if((null===(n=m.autoProps)||void 0===n?void 0:n.width)===a.LayoutItemSizeModes.Stretch)y.left=x,y.right=w,g.left===g.right&&"%"===g.left&&(y.xm={value:(parseFloat(y.left.value)+parseFloat(y.right.value))/2+"%",pixelValue:(f.left+f.right)/2,usePercentage:"%"===g.left});else if((null===(s=m.autoProps)||void 0===s?void 0:s.width)===a.LayoutItemSizeModes.Auto)(null===(l=m.autoProps)||void 0===l?void 0:l.left)?y.right=w:y.left=x;else if(null===(r=m.autoProps)||void 0===r?void 0:r.left){if(y.right=w,g.right===g.width){const t=parseFloat(h.right),e=parseFloat(h.width),o="px"===g.right?t+e:100-(t+e),i="px"===g.right?t+e/2:100-(t+e/2);y.left={value:`${o}${g.right}`,pixelValue:f.left,usePercentage:"%"===g.right,origin:1},y.xm={value:`${i}${g.right}`,pixelValue:f.left+f.width/2,usePercentage:"%"===g.right,origin:1}}}else if(y.left=x,g.left===g.width){const t=parseFloat(h.left),e=parseFloat(h.width),o=t+e;y.right={value:`${o}${g.left}`,pixelValue:f.right,usePercentage:"%"===g.left,origin:0},y.xm={value:`${t+e/2}${g.left}`,pixelValue:f.left+f.width/2,usePercentage:"%"===g.left,origin:0}}if(Yo()){let t,o,i;y.rect.left=e-y.rect.right,y.rect.right=y.rect.left+y.rect.width,null!=y.left&&(o={value:I(y.left.value),pixelValue:y.rect.right,usePercentage:"%"===g.left,origin:0===y.left.origin?1:0}),null!=y.right&&(t={value:I(y.right.value),pixelValue:y.rect.left,usePercentage:"%"===g.right,origin:0===y.right.origin?1:0}),null!=y.xm&&(i={value:I(y.xm.value),pixelValue:y.rect.left+y.rect.width/2,usePercentage:y.xm.usePercentage,origin:0===y.xm.origin?1:0}),y.right=o,y.left=t,y.xm=i}if((null===(d=m.autoProps)||void 0===d?void 0:d.height)===a.LayoutItemSizeModes.Stretch)y.top=b,y.bottom=S,g.top===g.bottom&&"%"===g.top&&(y.ym={value:(parseFloat(y.top.value)+parseFloat(y.bottom.value))/2+"%",pixelValue:(f.top+f.bottom)/2,usePercentage:"%"===g.top});else if((null===(u=m.autoProps)||void 0===u?void 0:u.height)===a.LayoutItemSizeModes.Auto)(null===(c=m.autoProps)||void 0===c?void 0:c.top)?y.bottom=S:y.top=b;else if(null===(p=m.autoProps)||void 0===p?void 0:p.top){if(y.bottom=S,g.bottom===g.height){const t=parseFloat(h.bottom),e=parseFloat(h.height),o="px"===g.bottom?t+e:100-(t+e),i="px"===g.bottom?t+e/2:100-(t+e/2);y.top={value:`${o}${g.bottom}`,pixelValue:f.top,usePercentage:"%"===g.bottom,origin:1},y.ym={value:`${i}${g.bottom}`,pixelValue:f.top+f.height/2,usePercentage:"%"===g.bottom,origin:1}}}else if(y.top=b,g.top===g.height){const t=parseFloat(h.top),e=parseFloat(h.height),o=t+e;y.bottom={value:`${o}${g.top}`,pixelValue:f.bottom,usePercentage:"%"===g.top,origin:0},y.ym={value:`${t+e/2}${g.top}`,pixelValue:f.top+f.height/2,usePercentage:"%"===g.top,origin:0}}return y}(i,e,o);s.push(t)}}}));const l={left:0,right:e,width:e,top:0,bottom:o,height:o};return s.push({id:"",left:{value:"0px",pixelValue:0,usePercentage:!1,origin:0,from:0,to:o},right:{value:"0px",pixelValue:e,usePercentage:!1,origin:1,from:0,to:o},top:{value:"0px",pixelValue:0,origin:0,usePercentage:!1,from:0,to:e},bottom:{value:"0px",pixelValue:o,usePercentage:!1,origin:1,from:0,to:e},rect:l}),s.push({id:"",left:{value:"0%",pixelValue:0,usePercentage:!0,origin:0,from:0,to:o},xm:{value:"50%",pixelValue:Math.round(e/2),usePercentage:!0,origin:0,from:0,to:o},right:{value:"0%",pixelValue:e,usePercentage:!0,origin:1,from:0,to:o},top:{value:"0%",pixelValue:0,usePercentage:!0,origin:0,from:0,to:e},ym:{value:"50%",pixelValue:Math.round(o/2),usePercentage:!0,origin:0,from:0,to:e},bottom:{value:"0%",pixelValue:o,usePercentage:!0,origin:1,from:0,to:e},rect:l}),s}function Ii(t,e,o,i,n,s,l,r){var d,u;const c=null!==(d=null==t?void 0:t.setting)&&void 0!==d?d:{},p=null!==(u=null==t?void 0:t.bbox)&&void 0!==u?u:{},h=0!==i.w||0!==i.h;if(h&&(c.hCenter&&"50%"===p.left||c.vCenter&&"50%"===p.top))return i;let g=function(t,e){if(0!==e.w||0!==e.h){const o={x:e.x,y:e.y,w:e.w,h:e.h};return t.width+e.w<16&&(o.w=16-t.width,0!==e.x&&(o.x=-o.w)),t.height+e.h<16&&(o.h=16-t.height,0!==e.y&&(o.y=-o.h)),o}return e}(o,i);n&&(g=function(t,e){if(0===e.w&&0===e.h)return e;const o=t.height/t.width;let i=e.w,n=e.h,s=e.x,a=e.y;return Math.abs(i)*o>Math.abs(n)?n=Math.round(i*o):i=Math.round(n/o),0!==s&&(s=-i),0!==a&&(a=-n),{x:s,y:a,w:i,h:n}}(o,g));const m=function(t,e,o,i,n){var s,l,r,d,u,c,p;const{x:h,y:g,w:m,h:f}=null!=n?n:{x:0,y:0,w:0,h:0},y=null!==(s=null==t?void 0:t.setting)&&void 0!==s?s:{},v={left:Math.round(e.left+h),width:Math.round(e.width+m),right:0,top:Math.round(e.top+g),height:Math.round(e.height+f),bottom:0};v.right=v.left+v.width,v.bottom=v.top+v.height;const I={id:null==t?void 0:t.id,rect:v},x=function(t,e){const o=t.top,i=e.height-(t.top+t.height),n=t.left;return[e.width-(t.left+t.width)<n?1:0,i<o?1:0]}(v,{width:o,height:i}),b=fi(null==t?void 0:t.bbox,Yo());if(Yo()){const t=b.left;b.left=b.right,b.right=t}return(null===(l=y.autoProps)||void 0===l?void 0:l.width)===a.LayoutItemSizeModes.Stretch?(I.left={value:`1${b.left}`,pixelValue:v.left,usePercentage:"%"===b.left,origin:x[0],from:v.top,to:v.bottom},I.right={value:`1${b.right}`,pixelValue:v.left+v.width,usePercentage:"%"===b.right,origin:x[1],from:v.top,to:v.bottom}):0===x[0]?(I.left={value:`1${b.left}`,pixelValue:v.left,usePercentage:"%"===b.left,origin:x[0],from:v.top,to:v.bottom},b.width===b.left&&(null===(r=y.autoProps)||void 0===r?void 0:r.width)!==a.LayoutItemSizeModes.Auto&&(I.xm={value:`1${b.left}`,pixelValue:v.left+v.width/2,usePercentage:"%"===b.left,origin:x[0],from:v.top,to:v.bottom},I.right={value:`1${b.left}`,pixelValue:v.left+v.width,usePercentage:"%"===b.left,origin:x[0],from:v.top,to:v.bottom})):(I.right={value:`1${b.right}`,pixelValue:v.left+v.width,usePercentage:"%"===b.right,origin:x[0],from:v.top,to:v.bottom},b.width===b.right&&(null===(d=y.autoProps)||void 0===d?void 0:d.width)!==a.LayoutItemSizeModes.Auto&&(I.xm={value:`1${b.right}`,pixelValue:v.left+v.width/2,usePercentage:"%"===b.right,origin:x[0],from:v.top,to:v.bottom},I.left={value:`1${b.right}`,pixelValue:v.left,usePercentage:"%"===b.right,origin:x[0],from:v.top,to:v.bottom})),(null===(u=y.autoProps)||void 0===u?void 0:u.height)===a.LayoutItemSizeModes.Stretch?(I.top={value:`1${b.top}`,pixelValue:v.top,usePercentage:"%"===b.top,origin:x[1],from:v.left,to:v.right},I.bottom={value:`1${b.bottom}`,pixelValue:v.top+v.height,usePercentage:"%"===b.bottom,origin:x[1],from:v.left,to:v.right}):0===x[1]?(I.top={value:`1${b.top}`,pixelValue:v.top,usePercentage:"%"===b.top,origin:x[1],from:v.left,to:v.right},b.height===b.top&&(null===(c=y.autoProps)||void 0===c?void 0:c.height)!==a.LayoutItemSizeModes.Auto&&(I.ym={value:`1${b.top}`,pixelValue:v.top+v.height/2,usePercentage:"%"===b.top,origin:x[1],from:v.left,to:v.right},I.bottom={value:`1${b.top}`,pixelValue:v.top+v.height,usePercentage:"%"===b.top,origin:x[1],from:v.left,to:v.right})):(I.bottom={value:`1${b.bottom}`,pixelValue:v.top+v.height,usePercentage:"%"===b.bottom,origin:x[1],from:v.left,to:v.right},b.height===b.bottom&&(null===(p=y.autoProps)||void 0===p?void 0:p.height)!==a.LayoutItemSizeModes.Auto&&(I.ym={value:`1${b.bottom}`,pixelValue:v.top+v.height/2,usePercentage:"%"===b.bottom,origin:x[1],from:v.left,to:v.right},I.top={value:`1${b.bottom}`,pixelValue:v.top,usePercentage:"%"===b.bottom,origin:x[1],from:v.left,to:v.right})),I}(t,o,e.width,e.height,g);let{dx:f,dy:y}=ci(m,s,g,e.width,e.height,l,r);const v=function(t,e,o,i,n,s,a){let l=0,r=0;if(!i&&!n)return{dx:l,dy:r};let d=[],u=[];if(e.forEach((e=>{if(i){const i=[e.left,e.xm,e.right].filter((i=>{var n,s,a;if(null!=i)return i.from=null!==(n=e.rect.top)&&void 0!==n?n:e.rect.bottom,i.to=e.rect.top>=0&&e.rect.bottom>=0?e.rect.bottom:t.rect.top,0!==o.w?0===o.x?i.pixelValue>=(null===(s=t.right)||void 0===s?void 0:s.pixelValue):i.pixelValue<=(null===(a=t.left)||void 0===a?void 0:a.pixelValue):0===o.h}));d=d.concat(i)}if(n){const i=[e.top,e.ym,e.bottom].filter((i=>{var n,s,a;if(null!=i)return i.from=null!==(n=e.rect.left)&&void 0!==n?n:e.rect.right,i.to=e.rect.left>=0&&e.rect.right>=0?e.rect.right:t.rect.left,0!==o.h?0===o.y?i.pixelValue>=(null===(s=t.bottom)||void 0===s?void 0:s.pixelValue):i.pixelValue<=(null===(a=t.top)||void 0===a?void 0:a.pixelValue):0===o.w}));u=u.concat(i)}})),i){const e=[t.left,t.xm,t.right];e.some((t=>{if(null!=t){const o=gi(t,d);if((null==o?void 0:o.length)>0){null!=s&&null!=a&&o.forEach((t=>function(t,e,o){null!=e&&null!=o&&(e.setColor(o.colors.palette.danger[500]),e.drawLine(t.pixelValue,t.from,t.pixelValue,t.to,!0))}(t,s,a)));const i=o[0];if(pi(i,t)<=5)return l=i.pixelValue-t.pixelValue,function(t,e,o,i,n){null!=i&&null!=n&&(i.setColor(n.colors.palette.danger[500]),t.forEach((t=>{if(null!=t){let n=t.from,s=t.to,a=!1;if(e.forEach((e=>{hi(t,o,e)&&(n=Math.min(n,e.from),s=Math.max(s,e.to),a=!0)})),a){const e=t.pixelValue+o;i.drawLine(e,n,e,s)}}})))}(e,d,l,s,a),!0}}}))}if(n){const e=[t.top,t.ym,t.bottom];e.some((t=>{if(null!=t){const o=gi(t,u);if((null==o?void 0:o.length)>0){null!=s&&null!=a&&o.forEach((t=>function(t,e,o){null!=e&&null!=o&&(e.setColor(o.colors.palette.danger[500]),e.drawLine(t.from,t.pixelValue,t.to,t.pixelValue,!0))}(t,s,a)));const i=o[0];if(pi(i,t)<=5)return r=i.pixelValue-t.pixelValue,function(t,e,o,i,n){null!=i&&null!=n&&(i.setColor(n.colors.palette.danger[500]),t.forEach((t=>{if(null!=t){let n=t.from,s=t.to,a=!1;if(e.forEach((e=>{hi(t,o,e)&&(n=Math.min(n,e.from),s=Math.max(s,e.to),a=!0)})),a){const e=t.pixelValue+o;i.drawLine(n,e,s,e)}}})))}(e,u,r,s,a),!0}}}))}return{dx:l,dy:r}}(m,s,g,0===f&&(!h||0!==i.w),0===y&&(!h||0!==i.h),l,r);f=0!==f?f:v.dx,y=0!==y?y:v.dy;let I=g;return 0===f&&0===y||(I=function(t,e,o){let i,n,{x:s,y:a,w:l,h:r}=t;return i=0===l?mi.None:0===s?mi.Start:mi.End,n=0===r?mi.None:0===a?mi.Start:mi.End,0!==e&&(i===mi.None?s+=e:i===mi.End?(s+=e,l+=-e):l+=e),0!==o&&(n===mi.None?a+=o:n===mi.End?(a+=o,r+=-o):r+=o),{x:s,y:a,w:l,h:r}}(g,f,y)),I}!function(t){t[t.Start=0]="Start",t[t.End=1]="End",t[t.None=2]="None"}(mi||(mi={}));var xi=p(6262),bi=p(4767),wi=p.n(bi);const Si=t=>{const o=window.SVG,{className:i}=t,n=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o}(t,["className"]),s=(0,e.classNames)("jimu-icon jimu-icon-component",i);return o?e.React.createElement(o,Object.assign({className:s,src:wi()},n)):e.React.createElement("svg",Object.assign({className:s},n))},Ci=e.css`
  pointer-events: all;
`;function Ri(t){return e.css`
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
  `}function Ai(t){const{pageContext:o,onPageTemplateSelected:n}=t,{builderTheme:s,formatMessage:a,isHeader:l,isFooter:r}=o,[d,u]=e.React.useState(!1),c=e.React.useRef(null),p=e.ReactRedux.useSelector((t=>{var o,i,n;const s=null!==(n=null===(i=null===(o=t.appConfig)||void 0===o?void 0:o.forBuilderAttributes)||void 0===i?void 0:i.lockLayout)&&void 0!==n&&n;return t.appRuntimeInfo.appMode===e.AppMode.Design&&!s})),h=()=>{u(!1)};let m;return m=o.isHeader?a("chooseHeaderTemplate"):o.isFooter?a("chooseFooterTemplate"):a("chooseTemplate",{type:o.isDialog?a("dialog").toLocaleLowerCase():a("page").toLocaleLowerCase()}),p?(0,e.jsx)("div",{className:"d-flex w-100 flex-column justify-content-center align-items-center",css:Ri(s)},(0,e.jsx)("div",{className:"d-flex flex-column justify-content-center align-items-center"},(0,e.jsx)(g,{placement:"bottom",title:m},(0,e.jsx)("div",{className:"action-item",ref:c},(0,e.jsx)(i.Button,{icon:!0,onClick:t=>{t.stopPropagation(),u(!d)},css:Ci,className:"rounded-circle"},(0,e.jsx)(Si,{size:"m",color:s.colors.palette.dark[800]})))),(0,e.jsx)("div",{className:"action-seprator mt-3"}),(0,e.jsx)("h5",{className:"btn-text mt-2"},a("dropWidgetToAdd"))),d&&!o.isDialog&&(0,e.jsx)(ue.TemplateSelector,{templates:l?(0,xi.getHeaderTemplates)():r?(0,xi.getFooterTemplates)():(0,xi.getFullScreenPageTemplates)(),referenceElement:c.current,onItemSelect:n,onClose:h}),d&&o.isDialog&&(0,e.jsx)(ue.TemplateSelector,{templates:(0,xi.getWindowTemplates)(),referenceElement:c.current,onItemSelect:n,onClose:h})):null}class Ti{constructor(t,e){this.canvas=t,this.ctx=t.getContext("2d"),this.ctx.font="1rem",this.theme=e}setSize(t,e,o=1){const i=Math.round(e*o),n=Math.round(t*o);o<1?(this.canvas.style.width=`${t}px`,this.canvas.style.height=`${e}px`,this.canvas.width=t,this.canvas.height=e,this.ctx.scale(1,1)):this.canvas.width===n&&this.canvas.height===i||(this.canvas.style.width=`${t}px`,this.canvas.style.height=`${e}px`,this.canvas.width=n,this.canvas.height=i,this.ctx.scale(o,o))}setColor(t){this.ctx.fillStyle=t,this.ctx.strokeStyle=t}drawRect(t){this.ctx.fillRect(t.left,t.top,t.width,t.height)}drawLine(t,e,o,i,n=!1,s){if(n?this.ctx.setLineDash([5,3]):this.ctx.setLineDash([]),this.ctx.beginPath(),t===o){let n=t<this.canvas.width/2?.5:-.5;n=Number.isInteger(t)?n:0,this.ctx.moveTo(t+n,e),this.ctx.lineTo(o+n,i)}if(e===i){let n=e<this.canvas.height/2?.5:-.5;n=Number.isInteger(e)?n:0,this.ctx.moveTo(t,e+n),this.ctx.lineTo(o,i+n)}if(this.ctx.stroke(),null!=s){const n=(t+o)/2,a=(e+i)/2;this.drawLabel(n,a,s,e===i)}}drawTailedLine(t,e,o,i,n=!1,s){if(n?this.ctx.setLineDash([5,3]):this.ctx.setLineDash([]),this.ctx.beginPath(),t===o){let n=t<this.canvas.width/2?.5:-.5;n=Number.isInteger(t)?n:0;const s=Math.min(e,i);let a=s<this.canvas.height/2?.5:-.5;a=Number.isInteger(s)?a:0;const l=Math.max(e,i);let r=l<this.canvas.height/2?.5:-.5;r=Number.isInteger(l)?r:0,this.ctx.moveTo(t+n,e),this.ctx.lineTo(o+n,i),this.ctx.moveTo(t-5,s+a),this.ctx.lineTo(t+5,s+a),this.ctx.moveTo(o-5,l+r),this.ctx.lineTo(o+5,l+r)}if(e===i){let n=e<this.canvas.height/2?.5:-.5;n=Number.isInteger(e)?n:0;const s=Math.min(t,o);let a=s<this.canvas.width/2?.5:-.5;a=Number.isInteger(s)?a:0;const l=Math.max(t,o);let r=l<this.canvas.width/2?.5:-.5;r=Number.isInteger(l)?r:0,this.ctx.moveTo(t,e+n),this.ctx.lineTo(o,i+n),this.ctx.moveTo(s+a,e-5),this.ctx.lineTo(s+a,e+5),this.ctx.moveTo(l+r,i-5),this.ctx.lineTo(l+r,i+5)}if(this.ctx.stroke(),null!=s){const n=(t+o)/2,a=(e+i)/2;this.drawLabel(n,a,s,e===i)}}drawLabel(t,e,o,i=!0){const n=this.ctx.measureText(o),s=n.width,l=n.actualBoundingBoxAscent+n.actualBoundingBoxDescent,r=s+8,d=l+8,u=a.utils.isRTL()?-1:1;this.ctx.save(),this.theme?this.ctx.fillStyle=this.theme.colors.palette.primary[500]:this.ctx.fillStyle="var(--primary-500)",i?(this.drawRoundRect(t-r/2,e-d-8,r,d),this.ctx.fillStyle="#FFFFFF",this.ctx.fillText(o,t-s*u/2,e-12)):(this.drawRoundRect(t+8,e-d/2,r,d),this.ctx.fillStyle="#FFFFFF",-1===u?this.ctx.fillText(o,t+s+12,e+l/2):this.ctx.fillText(o,t+12,e+l/2)),this.ctx.restore()}drawRoundRect(t,e,o,i,n=2){const s=n,a=n,l=n,r=n;this.ctx.beginPath(),this.ctx.moveTo(t+s,e),this.ctx.lineTo(t+o-a,e),this.ctx.quadraticCurveTo(t+o,e,t+o,e+a),this.ctx.lineTo(t+o,e+i-r),this.ctx.quadraticCurveTo(t+o,e+i,t+o-r,e+i),this.ctx.lineTo(t+l,e+i),this.ctx.quadraticCurveTo(t,e+i,t,e+i-l),this.ctx.lineTo(t,e+s),this.ctx.quadraticCurveTo(t,e,t+s,e),this.ctx.closePath(),this.ctx.fill()}clear(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)}}const Mi=e.css`
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  background: transparent;
`,Pi=e.css`
  ${Mi};
  pointer-events: none;
`;class ji extends e.React.PureComponent{constructor(t){if(super(t),this.handleMouseDown=t=>{this.mousedownX=t.screenX,this.mousedownY=t.screenY},this.updateDeviceRatio=()=>{this.canvasPane.setSize(this.ref.clientWidth,this.ref.clientHeight,window.devicePixelRatio)},this.handleMoveItemByKey=(t,i,n)=>{var s,l,r;const{layout:d}=this.props;let u,c,p=d.content[t].bbox,h=null!==(s=d.content[t].setting)&&void 0!==s?s:(0,e.Immutable)({});const g=null!==(l=null==h?void 0:h.hCenter)&&void 0!==l&&l||null!==(r=null==h?void 0:h.vCenter)&&void 0!==r&&r;if(g){const e=this.ref.querySelector(`div[data-layoutitemid="${t}"]`);u=e.clientWidth,c=e.clientHeight}if(0!==i){if(a.utils.isPercentage(p.left)){const t=parseFloat(p.left);p=(null==h?void 0:h.hCenter)?p.set("left",`${(50-100*u/2/this.ref.clientWidth+.1*i).toFixed(1)}%`):p.set("left",`${(t+.1*i).toFixed(1)}%`)}else{const t=parseFloat(p.left);p=(null==h?void 0:h.hCenter)?p.set("left",`${(this.ref.clientWidth-u)/2+i}px`):p.set("left",`${t+i}px`)}if(a.utils.isPercentage(p.right)){const t=parseFloat(p.right);p=(null==h?void 0:h.hCenter)?p.set("right",`${(50+100*u/2/this.ref.clientWidth-.1*i).toFixed(1)}%`):p.set("right",`${(t-.1*i).toFixed(1)}%`)}else{const t=parseFloat(p.right);p=(null==h?void 0:h.hCenter)?p.set("right",(this.ref.clientWidth+u)/2-i+"px"):p.set("right",t-i+"px")}(null==h?void 0:h.hCenter)&&(h=h.set("hCenter",!1))}if(0!==n){if(a.utils.isPercentage(p.top)){const t=parseFloat(p.top);p=(null==h?void 0:h.vCenter)?p.set("top",`${(50-100*c/2/this.ref.clientHeight+.1*n).toFixed(1)}%`):p.set("top",`${(t+.1*n).toFixed(1)}%`)}else{const t=parseFloat(p.top);p=(null==h?void 0:h.vCenter)?p.set("top",`${(this.ref.clientHeight-c)/2+n}px`):p.set("top",`${t+n}px`)}if(a.utils.isPercentage(p.bottom)){const t=parseFloat(p.bottom);p=(null==h?void 0:h.vCenter)?p.set("bottom",`${(50+100*c/2/this.ref.clientHeight-.1*n).toFixed(1)}%`):p.set("bottom",`${(t-.1*n).toFixed(1)}%`)}else{const t=parseFloat(p.bottom);p=(null==h?void 0:h.hCenter)?p.set("bottom",(this.ref.clientHeight+c)/2-n+"px"):p.set("bottom",t-n+"px")}(null==h?void 0:h.vCenter)&&(h=h.set("vCenter",!1))}const m=(0,o.getAppConfigAction)();g&&m.editLayoutItemSetting({layoutId:d.id,layoutItemId:t},h),m.editLayoutItemBBox({layoutId:d.id,layoutItemId:t},p).exec()},this.toggleShowWidgetList=t=>{t.stopPropagation(),this.setState({showWidgetList:!this.state.showWidgetList})},this.closeWidgetList=()=>{this.state.showWidgetList&&this.setState({showWidgetList:!1})},this.handlePageTemplateSelected=t=>{const i=(0,o.getAppConfigAction)().appConfig;this.setState({isLoadingTemplate:!0}),this.pageContext.isHeader?o.templateUtils.applyPageTemplateToHeader(i,t).then((({appConfig:t})=>{(0,o.getAppConfigAction)(t).exec(),e.lodash.defer((()=>{this.setState({isLoadingTemplate:!1})}))})).catch((t=>console.error(t))):this.pageContext.isFooter?o.templateUtils.applyPageTemplateToFooter(i,t).then((({appConfig:t})=>{(0,o.getAppConfigAction)(t).exec(),e.lodash.defer((()=>{this.setState({isLoadingTemplate:!1})}))})).catch((t=>console.error(t))):this.pageContext.isDialog?o.templateUtils.applyTemplateToDialog(i,this.pageContext.dialogId,t).then((({appConfig:t})=>{(0,o.getAppConfigAction)(t).exec(),e.lodash.defer((()=>{this.setState({isLoadingTemplate:!1})}))})).catch((t=>console.error(t))):o.templateUtils.applyPageTemplateToBody(i,this.pageContext.pageId,t).then((({appConfig:t})=>{(0,o.getAppConfigAction)(t).exec(),e.lodash.defer((()=>{this.setState({isLoadingTemplate:!1})}))})).catch((t=>console.error(t)))},null==this.props.layout)return;a.utils.autoBindHandlers(this,["handleResizeStart","handleResizing","handleResizeEnd","handleDragStart","handleDragEnd","handleDragOver","handleDragEnter","handleDragLeave","handleDrop","handleActivate","handleToggleDragoverEffect"]);const i=e.ExtensionManager.getInstance().getExtensions(`${e.extensionSpec.ExtensionPoints.LayoutTransformer}`);if((null==i?void 0:i.length)>0){const t=i.find((t=>t.layoutType===this.props.layout.type));this.layoutTransform=null==t?void 0:t.transformLayout}this.flipLeftRight=a.utils.isRTL(),this.state={offsetX:0,offsetY:0,dw:0,dh:0,isDragover:!1,showWidgetList:!1,isLoadingTemplate:!1}}handleActivate(t){if(!Q())return;if(Math.abs(t.screenX-this.mousedownX)>a.CLICK_TOLRERANCE||Math.abs(t.screenY-this.mousedownY)>a.CLICK_TOLRERANCE)return void t.stopPropagation();const{isInSection:o,isInWidget:i}=this.props;this.pageContext.viewOnly||o||i||It()||ht()||(t.stopPropagation(),(0,e.getAppStore)().dispatch(e.appActions.selectionChanged(null)))}componentDidMount(){var t,e,o;this.canvasPane=new Ti(this.canvasRef,this.pageContext.builderTheme),this.updateDeviceRatio();const i=`(resolution: ${window.devicePixelRatio}dppx)`;this.mediaQueryList=null===(t=window.matchMedia)||void 0===t?void 0:t.call(window,i);const{name:n,version:s}=window.jimuUA.browser;"safari"===n.toLowerCase()&&parseInt(s)<14?null===(e=this.mediaQueryList)||void 0===e||e.addListener(this.updateDeviceRatio):null===(o=this.mediaQueryList)||void 0===o||o.addEventListener("change",this.updateDeviceRatio)}componentWillUnmount(){var t,e;const{name:o,version:i}=window.jimuUA.browser;"safari"===o.toLowerCase()&&parseInt(i)<14?null===(t=this.mediaQueryList)||void 0===t||t.removeListener(this.updateDeviceRatio):null===(e=this.mediaQueryList)||void 0===e||e.removeEventListener("change",this.updateDeviceRatio)}componentDidUpdate(){this.updateDeviceRatio()}isResizingItem(){return 0!==this.state.dh||0!==this.state.dw}handleResizeStart(t){const{layout:e}=this.props;this.rndingLayoutId=t;const o=this.ref.querySelector(`div.exb-rnd[data-layoutid="${e.id}"][data-layoutitemid="${t}"]`);this.domRect=this.ref.getBoundingClientRect(),this.bboxGridlines=vi(this.props.layout,this.domRect.width,this.domRect.height,t);const i=o.getBoundingClientRect(),n=this.getPositionUnit(t);this.resizingRect=Object.assign({units:n},a.utils.relativeClientRect(i,this.domRect))}getResizingDelta(t,e,o,i,n,s){return Ii(this.props.layout.content[t],this.domRect,this.resizingRect,{x:e,w:i,y:o,h:n},s,this.bboxGridlines,this.canvasPane,this.pageContext.builderTheme)}handleResizing(t,e,o,i,n,s,a){if(this.canvasPane.clear(),a>500)return void this.setState({offsetX:e,offsetY:o,dw:i,dh:n});const l=this.getResizingDelta(t,e,o,i,n,s);this.setState({offsetX:l.x,offsetY:l.y,dw:l.w,dh:l.h})}handleResizeEnd(t,i,n,s,a,l,r,d){var u,c;this.rndingLayoutId=null;const{layout:p}=this.props,h=this.getResizingDelta(t,i,n,s,a,l);this.canvasPane.clear();const g=qo(this.resizingRect,this.domRect,{dx:h.x,dy:h.y,dw:h.w,dh:h.h}),m=(0,o.getAppConfigAction)(),f={layoutId:p.id,layoutItemId:t},{bbox:y,setting:v}=ti((0,e.Immutable)(r.bbox),r.setting,this.domRect,g);let I=y;(null==d?void 0:d.hCenter)&&"50%"===(null===(u=r.bbox)||void 0===u?void 0:u.left)&&(I=I.set("left","50%")),(null==d?void 0:d.vCenter)&&"50%"===(null===(c=r.bbox)||void 0===c?void 0:c.top)&&(I=I.set("top","50%")),m.editLayoutItemBBox(f,this.flipLeftRight?Qo(I):I).editLayoutItemSetting(f,v).exec(),this.bboxGridlines=null,this.setState({offsetX:0,offsetY:0,dw:0,dh:0})}handleDragOver(t,o,i,n,s,l,r){var d,u,c;if(this.canvasPane.clear(),!this.state.isDragover||r>500)return;let p,h,g,m=0,f=0;(null===(d=t.layoutInfo)||void 0===d?void 0:d.layoutId)===this.props.layout.id?(p=t.layoutInfo.layoutItemId,g=this.getPositionUnit(p),h=this.props.layout.content[p]):g=fi({},this.flipLeftRight);const y=t.rotation>0||t.rotation<0,v=Ii(h,this.domRect,n,{x:0,y:0,w:0,h:0},!1,this.bboxGridlines,y?null:this.canvasPane,y?null:this.pageContext.builderTheme);if(null!=o&&(0!==v.x||0!==v.y)){const t=null!==(u=parseFloat(o.getAttribute("data-translatex")))&&void 0!==u?u:0,e=null!==(c=parseFloat(o.getAttribute("data-translatey")))&&void 0!==c?c:0;o.style.transform=`translate(${t+v.x}px, ${e+v.y}px)`}if(m=v.x,f=v.y,this.canvasPane.setColor(this.pageContext.builderTheme.colors.palette.primary[600]),function(t,o,i){const n=o.width-(t.left+t.width),s=o.height-(t.top+t.height),l="px"===t.units.left?e.utils.formatPixelNumber(`${Math.round(t.left)}px`):e.utils.formatPercentageNumber(a.utils.toRatio(t.left,o.width)),r="px"===t.units.right?e.utils.formatPixelNumber(`${Math.round(n)}px`):e.utils.formatPercentageNumber(a.utils.toRatio(n,o.width)),d="px"===t.units.top?e.utils.formatPixelNumber(`${Math.round(t.top)}px`):e.utils.formatPercentageNumber(a.utils.toRatio(t.top,o.height)),u="px"===t.units.bottom?e.utils.formatPixelNumber(`${Math.round(s)}px`):e.utils.formatPercentageNumber(a.utils.toRatio(s,o.height));t.left<=n?t.top<=s?(i.drawLine(0,t.top,t.left,t.top,!1,l),i.drawLine(t.left,0,t.left,t.top,!1,d)):(i.drawLine(0,t.top+t.height,t.left,t.top+t.height,!1,l),i.drawLine(t.left,t.top+t.height,t.left,o.height,!1,u)):t.top<=s?(i.drawLine(t.left+t.width,t.top,o.width,t.top,!1,r),i.drawLine(t.left+t.width,0,t.left+t.width,t.top,!1,d)):(i.drawLine(t.left+t.width,t.top+t.height,o.width,t.top+t.height,!1,r),i.drawLine(t.left+t.width,t.top+t.height,t.left+t.width,o.height,!1,u))}({width:n.width,height:n.height,left:n.left+m,top:n.top+f,units:g},this.domRect,this.canvasPane),null==t.layoutInfo||t.isPending){this.canvasPane.setColor(e.polished.rgba(this.pageContext.builderTheme.colors.palette.primary[700],.2));const t={left:n.left+m,top:n.top+f,width:n.width,height:n.height};this.canvasPane.drawRect(t)}}handleToggleDragoverEffect(t,e){var o;if(this.canvasPane.clear(),t){let t;this.domRect=this.ref.getBoundingClientRect(),(null===(o=e.layoutInfo)||void 0===o?void 0:o.layoutId)===this.props.layout.id&&(t=e.layoutInfo.layoutItemId),this.bboxGridlines=vi(this.props.layout,this.domRect.width,this.domRect.height,t)}this.setState({isDragover:t})}handleDragEnter(t){}handleDragLeave(){}handleDrop(t,e,o){let i;i=null==t.layoutInfo||t.layoutInfo.layoutId!==this.props.layout.id?fi({},this.flipLeftRight):this.getPositionUnit(t.layoutInfo.layoutItemId);const{snappedRect:n,delta:s}=this.calSnappedRect(t,e,Object.assign({units:i},o),t.layoutInfo);this.canvasPane.clear();const a={left:o.left+s.x,top:o.top+s.y,width:o.width,height:o.height,right:e.width-(o.left+s.x+o.width),bottom:e.height-(o.top+s.y+o.height)};this.addWidgetToLayout(t,e,a,n).catch((t=>console.error(t))),this.bboxGridlines=null}calSnappedRect(t,e,o,i){let n;(null==i?void 0:i.layoutId)===this.props.layout.id&&(n=this.props.layout.content[i.layoutItemId]);const s=Ii(n,this.domRect,o,{x:0,y:0,w:0,h:0},!1,this.bboxGridlines),l={left:o.left+s.x,top:o.top+s.y,width:o.width,height:o.height};return l.right=e.width-(+l.left+ +l.width),l.bottom=e.height-(+l.top+ +l.height),o.width>e.width&&(l.width=e.width,l.left=0),o.height>e.height&&(l.height=e.height,l.top=0),l.left=a.utils.toRatio(l.left,e.width),l.top=a.utils.toRatio(l.top,e.height),l.width=a.utils.toRatio(l.width,e.width),l.height=a.utils.toRatio(l.height,e.height),l.right=a.utils.toRatio(l.right,e.width),l.bottom=a.utils.toRatio(l.bottom,e.height),{snappedRect:l,delta:s}}addWidgetToLayout(t,i,n,s,l){var r,d,u,c,p;return d=this,u=void 0,p=function*(){const{layout:d,browserSizeMode:u}=this.props;let c=(0,o.getAppConfigAction)(l);const p=yield R(c.appConfig,t,{layoutId:d.id},i,s),{layoutInfo:h,updatedAppConfig:g}=p;c=(0,o.getAppConfigAction)(g),null!=t.layoutInfo&&t.layoutInfo.layoutId===d.id&&c.editLayoutItemSetting(h,{vCenter:!1,hCenter:!1});const m=c.appConfig.layouts[h.layoutId].content[h.layoutItemId],f=(0,e.Immutable)(null!==(r=m.setting)&&void 0!==r?r:{}),y=ti(m.bbox,f,this.domRect,n);let v=y.bbox;const I=y.setting;if(null==t.layoutInfo&&(this.pageContext.isHeader||this.pageContext.isFooter)){const t=c.appConfig,e=this.pageContext.isHeader?parseInt(`${t.header.height[u]}`):parseInt(`${t.footer.height[u]}`);v=v.set("height",a.utils.toRatio(Math.min(n.height,e),e))}c.editLayoutItemBBox(h,this.flipLeftRight?Qo(v):v).editLayoutItemSetting(h,I),(0,e.getAppStore)().dispatch(e.appActions.layoutChanged(c.appConfig,h))},new((c=void 0)||(c=Promise))((function(t,e){function o(t){try{n(p.next(t))}catch(t){e(t)}}function i(t){try{n(p.throw(t))}catch(t){e(t)}}function n(e){var n;e.done?t(e.value):(n=e.value,n instanceof c?n:new c((function(t){t(n)}))).then(o,i)}n((p=p.apply(d,u||[])).next())}))}getPositionUnit(t){return fi(this.props.layout.content[t].bbox,this.flipLeftRight)}createItem(t,o,i){const{itemResizable:n,itemDraggable:s,itemSelectable:a,showDefaultTools:l}=this.props,{offsetX:r,offsetY:d,dw:u,dh:c}=this.state,p=o===this.rndingLayoutId?r:0,h=o===this.rndingLayoutId?d:0,g=o===this.rndingLayoutId?u:0,m=o===this.rndingLayoutId?c:0,f=o===this.rndingLayoutId?this.resizingRect:void 0,y=o===this.rndingLayoutId?this.domRect:void 0,v=t.content[o];return(0,e.jsx)(oi,{key:`${t.id}_${o}`,index:i,layoutItem:v,offsetX:p,offsetY:h,dw:g,dh:m,initRect:f,containerRect:y,layoutId:t.id,layoutItemId:o,draggable:s,resizable:n,selectable:a,showDefaultTools:l,isLayoutLockChildren:this.layoutSetting.lockChildren,onResizeStart:this.handleResizeStart,onResizing:this.handleResizing,onResizeEnd:this.handleResizeEnd,onMoveByKey:this.handleMoveItemByKey,isInSection:this.props.isInSection})}render(){const{layout:t,className:o,style:s,layouts:l,isPageItem:r,mainSizeMode:d,browserSizeMode:u}=this.props;return null==t?null:(0,e.jsx)(a.PageContext.Consumer,null,(a=>{var c,p;this.pageContext=a;let h=t;const g=l[u]!==t.id;g&&null!=this.layoutTransform&&(h=this.layoutTransform(t,d,u)),this.layoutSetting=e.lodash.assign({},n,g?{}:t.setting);const m=null!==(c=h.order)&&void 0!==c?c:[],f=(0,e.classNames)("layout fixed-layout",o,{"limited-drag-boundary":null===(p=t.setting)||void 0===p?void 0:p.lockDescendants}),y=0!==this.state.dh||0!==this.state.dw,v=Object.assign(Object.assign(Object.assign({height:"auto",position:"relative"},s),i.styleUtils.toCSSStyle(this.layoutSetting.style)),{width:"100%",overflow:"hidden"}),I={display:this.state.isDragover||y?"block":"none",zIndex:m.length+1},x=!this.state.isLoadingTemplate&&0===m.length&&!a.viewOnly&&t.id===a.rootLayoutId;return(0,e.jsx)("div",{className:f,ref:t=>this.ref=t,onClick:this.handleActivate,onMouseDown:this.handleMouseDown,style:v,"data-layoutid":h.id},(0,e.jsx)(e.IntersectionContext.Provider,{value:{monitor:!1}},(0,e.jsx)(e.OneByOneAnimation,{oid:h.id,"data-layoutid":h.id,className:"trail-container",css:e.css`
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: 0;
                    bottom: 0;
                  `},(0,e.jsx)(me,{css:Mi,layouts:this.props.layouts,highlightDragover:!r,onDragEnter:this.handleDragEnter,onDragLeave:this.handleDragLeave,onDragOver:this.handleDragOver,onDrop:this.handleDrop,onToggleDragoverEffect:this.handleToggleDragoverEffect,isRepeat:this.props.isRepeat}),m.map(((t,e)=>this.createItem(h,t,e))))),x&&(0,e.jsx)(Ai,{pageContext:this.pageContext,onPageTemplateSelected:this.handlePageTemplateSelected}),this.state.isLoadingTemplate&&(0,e.jsx)(i.Loading,{type:i.LoadingType.Primary}),(0,e.jsx)("canvas",{css:Pi,style:I,ref:t=>this.canvasRef=t}))}))}}ji.displayName="FixedLayout";const Li=e.ReactRedux.connect(a.utils.mapStateToLayoutProps)(ji),zi={min:16,space:10};class ki extends e.React.PureComponent{constructor(){super(...arguments),this.state={isResizing:!1,dw:0,dh:0},this.onResizeStart=(t,e,o)=>{this.initWidth=e,this.initHeight=o,this.props.onResizeStart(t),this.setState({isResizing:!0})},this.onResizing=(t,e,o,i,n)=>{this.props.onResizing(t,e,o,i,n),this.setState({dw:i,dh:n,isResizing:!0})},this.onResizeEnd=(t,e,o,i,n,s)=>{const{layoutItem:a}=this.props;this.props.onResizeEnd(t,e,o,i,n,a),this.setState({isResizing:!1,dw:0,dh:0})}}isStretchInCrossAxis(){var t,e;const{layoutItem:o}=this.props;return(null===(e=null===(t=o.setting)||void 0===t?void 0:t.autoProps)||void 0===e?void 0:e.width)!==Ne.Custom}calHeight(t,e){var o,i;return(null===(o=t.autoProps)||void 0===o?void 0:o.height)===Ne.Auto||"ratio"===t.heightMode?"ratio"===t.heightMode?{height:"auto",flex:"0 0 auto"}:{height:"auto"}:(null===(i=t.autoProps)||void 0===i?void 0:i.height)===Ne.Stretch||"fit"===t.heightMode?{flex:"1 1 auto"}:{height:e.height,flexShrink:0}}getStyle(t,o){var i,n,s;const{index:a,layoutItem:l,space:r}=this.props,{dw:d,dh:u,isResizing:c}=this.state,p=l.bbox||{},h=this.calHeight(t,p);h.width=o?"auto":p.width,c&&(d||u)&&(h.height=this.initHeight+u,h.width=this.initWidth+d);const g=(null===(i=t.autoProps)||void 0===i?void 0:i.height)===Ne.Auto;return e.css`
      margin-top: ${a>0?`${r}px`:"unset"};
      align-self: ${o?"stretch":null!==(s=null===(n=t.style)||void 0===n?void 0:n.alignSelf)&&void 0!==s?s:"auto"};
      width: ${Uo(h,"width")};
      height: ${Uo(h,"height")};
      flex: ${h.flex};
      flex-shrink: ${h.flexShrink};
      min-height: ${g?"unset":null};
    `}render(){var t,o;const{layoutId:i,layoutItem:n,draggable:s,resizable:a,selectable:l,showDefaultTools:r}=this.props;if(!n||n.isPending)return null;const d=n.setting||{},u=null!==(o=null===(t=d.autoProps)||void 0===t?void 0:t.height)&&void 0!==o?o:Ne.Custom,c=(0,e.classNames)("flexbox-layout-item",{"d-flex":u!==Ne.Auto}),p=this.isStretchInCrossAxis(),h="ratio"===d.heightMode,g=function(t){let e=100,o=100;if("number"==typeof t)e=100,o=Math.round(100*t);else if("string"==typeof t){const i=t.split(":");e=parseInt(i[0],10),o=parseInt(i[1],10)}return o/e}(d.aspectRatio),m=function(t){const{delay:e,isLastChild:o}=t;return{delay:e,isLastChild:o}}(this.props);return(0,e.jsx)(Je,Object.assign({css:this.getStyle(d,p),layoutId:i,layoutItemId:n.id,onResizeStart:this.onResizeStart,onResizing:this.onResizing,onResizeEnd:this.onResizeEnd,left:!p,right:!p,top:!1,bottom:u===Ne.Custom&&!h,draggable:s,resizable:a,selectable:l,showDefaultTools:r,onClick:this.props.onClick,className:c,forceAspectRatio:h,aspectRatio:g},m))}}const Ni=t=>e.css`
  height: 100%;
  overflow-x: hidden;
  padding: ${i.styleUtils.toCSSPadding(t.padding)};
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
`,$i=e.css`
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  background: transparent;
`,Oi=e.css`
  ${$i};
  z-index: 20;
  pointer-events: none;
`;class Ei extends e.React.PureComponent{constructor(t){super(t),this.state={isDragover:!1},this.handleItemResizing=()=>{},a.utils.autoBindHandlers(this,["handleItemResizeStart","handleItemResizing","handleItemResizeEnd","handleDrop","handleDragOver","handleDragEnter","handleDragLeave","handleToggleDragoverEffect"])}componentDidMount(){this.canvasPane=new Ti(this.canvasRef),this.canvasPane.setSize(this.ref.clientWidth,this.ref.clientHeight)}componentDidUpdate(){this.canvasPane.setSize(this.ref.clientWidth,this.ref.clientHeight)}handleItemResizeStart(t){const{layout:e}=this.props;this.domRect=this.ref.getBoundingClientRect();const o=this.ref.querySelector(`div.exb-rnd[data-layoutid="${e.id}"][data-layoutitemid="${t}"]`).getBoundingClientRect();this.resizingRect=a.utils.relativeClientRect(o,this.domRect)}handleItemResizeEnd(t,e,i,n,s,l){const{layout:r}=this.props,d=r.content[t].bbox;let u;u=a.utils.isPercentage(d.width)?`${(100*(this.resizingRect.width+n)/this.domRect.width).toFixed(4)}%`:`${Math.round(this.resizingRect.width+n)}px`;const c={width:u,height:Math.round(this.resizingRect.height+s)};this.childRects=[],this.domRect=null,(0,o.getAppConfigAction)().editLayoutItemBBox({layoutId:this.props.layout.id,layoutItemId:t},c).exec()}handleDragOver(t,o,i,n){var s;let a=n;if(this.canvasPane.clear(),(null===(s=this.childRects)||void 0===s?void 0:s.length)>0){const{insertY:t,refId:e}=function(t,e,o){const i=e.top+e.height/2;let n,s,a=!1;if(o.some(((t,e)=>{if(t.top+t.height/2>i){if(0===e)n=t.top/2;else{const i=o[e-1];n=(t.top+i.top+i.height)/2}a=!0,s=t.id}return a})),!a){const e=o[o.length-1];n=(e.top+e.height+t.height)/2}return{refId:s,insertY:n}}(i,a,this.childRects);this.referenceId=e,a={top:t-5+this.ref.scrollTop,width:i.width-10,left:5,height:10}}else a={top:i.height/2-5,width:i.width-10,left:5,height:10};this.canvasPane.setColor(e.polished.rgba(this.builderTheme.colors.palette.primary[700],1)),this.canvasPane.drawRect(a)}handleToggleDragoverEffect(t){t&&(this.referenceId=null,this.collectBounds(null)),this.setState({isDragover:t})}handleDragEnter(){}handleDragLeave(){}handleDrop(t,i,n){this.canvasPane.clear();const{layout:s}=this.props,a={layoutId:s.id};let l=0;null!=this.referenceId?l=s.order.indexOf(this.referenceId):null!=s.order&&(l=s.order.length),R((0,o.getAppConfigAction)().appConfig,t,a,i,n,l).then((t=>{const{layoutInfo:o,updatedAppConfig:i}=t,{layoutId:n,layoutItemId:s}=o;let a=i.layouts[n].content[s].bbox;a=a.without("left").without("top").without("right").without("bottom");const l=i.setIn(["layouts",n,"content",s,"bbox"],a);(0,e.getAppStore)().dispatch(e.appActions.layoutChanged(l,o))})).finally(null),this.referenceId=null,this.childRects=[]}collectBounds(t){const{layout:e}=this.props;this.childRects=[],this.domRect=this.ref.getBoundingClientRect();const o=this.ref.parentNode.querySelectorAll(`div[data-layoutid="${e.id}"] > .trail-container > div.exb-rnd`);return(null==o?void 0:o.length)>0&&o.forEach((o=>{const i=o.getAttribute("data-layoutitemid");if(t!==i&&e.order.includes(i)){const t=a.utils.relativeClientRect(o.getBoundingClientRect(),this.domRect);t.id=i,this.childRects.push(t)}})),this.childRects.sort(((t,e)=>t.top-e.top))}createItem(t,o,i){const{layout:n,itemDraggable:s,itemResizable:a,itemSelectable:l,showDefaultTools:r}=this.props;return(0,e.jsx)(ki,{key:t,index:o,space:i.space,layoutId:n.id,layoutItemId:t,layoutItem:n.content[t],draggable:s,resizable:a,selectable:l,showDefaultTools:r,onResizeStart:this.handleItemResizeStart,onResizing:this.handleItemResizing,onResizeEnd:this.handleItemResizeEnd})}isEmpty(){var t;const{layout:e}=this.props,o=null!==(t=e.order)&&void 0!==t?t:[];return!(o.length>0&&o.some((t=>!e.content[t].isPending)))}render(){var t;const{layout:o,className:i}=this.props,n=null!==(t=o.order)&&void 0!==t?t:[],s=Object.assign({},zi,o.setting),l=this.isEmpty();return(0,e.jsx)(a.PageContext.Consumer,null,(t=>{this.builderTheme=t.builderTheme,this.theme=t.theme;const a={position:"relative",minWidth:s.min},r=(0,e.classNames)("layout column-layout",i),d={display:this.state.isDragover?"block":"none"};return(0,e.jsx)("div",{className:r,ref:t=>this.ref=t,style:a,"data-layoutid":o.id},(0,e.jsx)(e.IntersectionContext.Provider,{value:{monitor:!0,layoutId:o.id}},(0,e.jsx)(e.OneByOneAnimation,{oid:o.id,className:"trail-container d-flex flex-column w-100",css:e.css`
                    position: ${l?"absolute":null};
                    ${Ni(s)};
                  `},(0,e.jsx)(me,{css:$i,layouts:this.props.layouts,highlightDragover:!0,onDragEnter:this.handleDragEnter,onDragLeave:this.handleDragLeave,onDragOver:this.handleDragOver,onDrop:this.handleDrop,onToggleDragoverEffect:this.handleToggleDragoverEffect}),n.map(((t,e)=>this.createItem(t,e,s))))),l&&this.props.children,(0,e.jsx)("canvas",{css:Oi,style:d,ref:t=>this.canvasRef=t}))}))}}const Di=e.ReactRedux.connect(a.utils.mapStateToLayoutProps)(Ei),Bi={space:10,style:{padding:{number:[10,10,10,10],unit:i.DistanceUnits.PIXEL}}},Fi={heightMode:"fixed",aspectRatio:1,offsetX:0,offsetY:0,style:{alignSelf:"flex-start"}},Vi=12,Hi=e.css`
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
`;function Wi(t){return(0,e.Immutable)(t).set("left",Vi-parseInt(t.left,10)-parseInt(t.width,10))}const Gi=e.css`
  position: absolute;
  left: 0;
  max-height: 40px;
  height: 20%;
  right: 0;
  z-index: ${a.LayoutZIndex.BoundaryDropArea};
  display: flex;
  pointer-events: all;
  display: flex;

  &.drop-active {
    background: transparent !important;
  }

  body:not(.design-mode) & {
    display: none !important;
  }
`,Zi=e.css`
  ${Gi};
  top: 0;
`,Ui=e.css`
  ${Gi};
  bottom: 0;
`;class _i extends e.React.PureComponent{constructor(t){super(t),this.state={isResizing:!1,dh:0},this.handleResizeStart=(t,e,o)=>{this.initWidth=e,this.initHeight=o,this.props.onResizeStart(t),this.setState({isResizing:!0})},this.handleResizing=(t,e,o,i,n)=>{this.props.onResizing(t,e,o,i,n),this.setState({dh:n,isResizing:!0})},this.handleResizeEnd=(t,e,o,i,n,s)=>{const{layoutItem:a}=this.props;this.props.onResizeEnd(t,e,o,i,n,a),this.setState({isResizing:!1,dh:0})},this.handleDropAtTop=(t,e,o)=>{this.dropAtBoundary(t,e,o,"top")},this.handleDropAtBottom=(t,e,o)=>{this.dropAtBoundary(t,e,o,"bottom")},this.dropAtBoundary=(t,e,i,n)=>{let s=(0,o.getAppConfigAction)();T(s.appConfig,t,e,i,{layoutId:this.props.layoutId,layoutItemId:this.props.layoutItemId},n).then((({updatedAppConfig:t})=>{s=(0,o.getAppConfigAction)(t),s.exec()})).finally(null)},this.pasteAtBoundary=(t,e,i,n)=>{let s=(0,o.getAppConfigAction)();const{layoutId:a,layoutItemId:l}=t.layoutInfo,r={layoutInfo:s.duplicateLayoutItem(a,a,l,!0)};T(s.appConfig,r,e,i,{layoutId:this.props.layoutId,layoutItemId:this.props.layoutItemId},n).then((({updatedAppConfig:t})=>{s=(0,o.getAppConfigAction)(t),s.exec()})).finally(null)},this.fakeTopLayouts=(0,e.Immutable)({[e.BrowserSizeMode.Large]:`${this.props.layoutId}_${this.props.layoutItemId}_tlarge`,[e.BrowserSizeMode.Medium]:`${this.props.layoutId}_${this.props.layoutItemId}_tmedium`,[e.BrowserSizeMode.Small]:`${this.props.layoutId}_${this.props.layoutItemId}_tsmall`}),this.fakeBottomLayouts=(0,e.Immutable)({[e.BrowserSizeMode.Large]:`${this.props.layoutId}_${this.props.layoutItemId}_blarge`,[e.BrowserSizeMode.Medium]:`${this.props.layoutId}_${this.props.layoutItemId}_bmedium`,[e.BrowserSizeMode.Small]:`${this.props.layoutId}_${this.props.layoutItemId}_bsmall`})}isFunctionalWidget(){var t,o,i;const{layoutItem:n}=this.props;if(n.type===e.LayoutItemType.Widget){let s=!1;const a=null===(o=null===(t=(0,e.getAppStore)().getState().appConfig)||void 0===t?void 0:t.widgets)||void 0===o?void 0:o[n.widgetId];return null!=(null===(i=null==a?void 0:a.manifest)||void 0===i?void 0:i.properties)&&(s=a.manifest.widgetType===e.WidgetType.Layout||a.manifest.properties.hasEmbeddedLayout),!s}return!1}getStyle(t){var o,i,n,s;const{gutter:l,layoutItem:r,isMultiRow:d}=this.props,{dh:u,isResizing:c}=this.state,p=r.bbox,h=a.utils.isRTL()?-1:1,g=function(t,e,o){var i,n,s,a,l,r,d,u,c,p,h,g,m,f;return o?{height:(null===(i=t.autoProps)||void 0===i?void 0:i.height)===Ne.Auto?"auto":e.height,alignSelf:null!==(s=null===(n=t.style)||void 0===n?void 0:n.alignSelf)&&void 0!==s?s:"flex-start"}:"ratio"===t.heightMode?{alignSelf:null!==(l=null===(a=t.style)||void 0===a?void 0:a.alignSelf)&&void 0!==l?l:"flex-start"}:(null===(r=t.autoProps)||void 0===r?void 0:r.height)===Ne.Auto?{height:"auto",alignSelf:null!==(u=null===(d=t.style)||void 0===d?void 0:d.alignSelf)&&void 0!==u?u:"flex-start"}:(null===(c=t.autoProps)||void 0===c?void 0:c.height)===Ne.Custom?{height:e.height,alignSelf:null!==(h=null===(p=t.style)||void 0===p?void 0:p.alignSelf)&&void 0!==h?h:"flex-start"}:(null===(g=t.autoProps)||void 0===g?void 0:g.height)===Ne.Stretch||"fit"===t.heightMode?{alignSelf:"stretch"}:parseFloat(e.height)>0?{height:e.height,alignSelf:null!==(f=null===(m=t.style)||void 0===m?void 0:m.alignSelf)&&void 0!==f?f:"flex-start"}:{alignSelf:"stretch"}}(t,p,d);return c&&0!==u&&(g.height=this.initHeight+u),d?[e.css`
          padding: ${l/2}px 0;
          height: ${a.utils.getValueOfBBox(g,"height")};
          align-self: ${g.alignSelf};
        `,0!==t.offsetX||0!==t.offsetY?`translate(${(null!==(o=t.offsetX)&&void 0!==o?o:0)*h}px, ${null!==(i=t.offsetY)&&void 0!==i?i:0}px)`:null]:[e.css`
        padding: 0 ${l/2}px;
        height: ${a.utils.getValueOfBBox(g,"height")};
        align-self: ${g.alignSelf};
      `,0!==t.offsetX||0!==t.offsetY?`translate(${(null!==(n=t.offsetX)&&void 0!==n?n:0)*h}px, ${null!==(s=t.offsetY)&&void 0!==s?s:0}px)`:null]}render(){var t;const{order:o,span:i,offset:n,layoutId:s,layoutItem:l,draggable:r,resizable:d,selectable:u}=this.props;if(null==l||l.isPending)return null;const c=e.lodash.assign({},Fi,l.setting),p="ratio"===c.heightMode,h=null===(t=c.autoProps)||void 0===t?void 0:t.height,g=(0,e.classNames)("row-layout-item d-flex",`col-${i}`,`offset-${n}`,`order-${o}`,{"fix-height":h===a.LayoutItemSizeModes.Custom}),m=this.isFunctionalWidget(),f=e.css`
      width: 100%;
      height: 10px;
      background: ${this.props.builderTheme.colors.palette.primary[700]};
    `,y=a.utils.parseAspectRatio(c.aspectRatio),v=a.utils.handleOnebyOneAnimation(this.props),[I,x]=this.getStyle(c);return(0,e.jsx)(Je,Object.assign({css:I,style:{transform:x},layoutId:s,layoutItemId:l.id,onResizeStart:this.handleResizeStart,onResizing:this.handleResizing,onResizeEnd:this.handleResizeEnd,left:!0,right:!0,top:!1,bottom:h===a.LayoutItemSizeModes.Custom&&!p,draggable:r,resizable:d,selectable:u,onClick:this.props.onClick,className:g,forceAspectRatio:p,aspectRatio:y},v),(0,e.jsx)(e.React.Fragment,null,m&&(0,e.jsx)(me,{css:e.css`
                ${Zi};
              `,layouts:this.fakeTopLayouts,highlightDragover:!0,onDrop:this.handleDropAtTop},(0,e.jsx)("div",{css:f})),m&&(0,e.jsx)(me,{css:e.css`
                ${Ui};
              `,layouts:this.fakeBottomLayouts,highlightDragover:!0,onDrop:this.handleDropAtBottom},(0,e.jsx)("div",{css:e.css`${f};position: absolute; bottom:0;`}))))}}function Yi(t,e){let o=-1;return e.some(((e,i)=>{if(e.id===t)return o=i,!0})),o}function Xi(t,o,i,n){const s=n.map((t=>(0,e.Immutable)(t))),l=Yi(t,s);if(a.utils.isRTL()&&(o=0!==o?0:-i),o>0){const t=s[l],e=Math.min(o,t.width-1);return s[l]=t.set("left",t.left+e).set("width",t.width-e),s}if(o<0){let t=0;for(let e=0;e<l;e+=1)t+=Math.min(s[e].width,2);const e=s[l].left-t,i=Math.abs(o);if(e>0){let t=0;for(let e=l;e>=0;e-=1){const o=s[e];let n=0;if(e>0){const t=s[e-1];n=o.left-(t.left+t.width)}else n=o.left;if(0===n)continue;const a=t+n>=i?i-t:n;s[l]=s[l].set("width",s[l].width+a);for(let t=e;t<=l;t+=1)s[t]=s[t].set("left",s[t].left-a);if(t+n>=i)return s;t+=n}if(l>0)for(let e=l-1;e>=0;e-=1){const o=s[e],n=o.width-2;if(n<=0)continue;const a=t+n>=i?i-t:n;s[l]=s[l].set("width",s[l].width+a),s[e]=o.set("width",o.width-a);for(let t=e+1;t<=l;t+=1)s[t]=s[t].set("left",s[t].left-a);if(t+n>=i)return s;t+=n}}return s}if(i<0){const t=Math.min(Math.abs(i),s[l].width-1);return s[l]=s[l].set("width",s[l].width-t),s}if(i>0){let t=0;for(let e=l+1;e<s.length;e+=1)t+=Math.min(s[e].width,2);const e=i;if(Vi-(s[l].left+s[l].width)-t>0){let t=0;for(let o=l;o<s.length;o+=1){const i=s[o];let n=0;if(n=o!==s.length-1?s[o+1].left-(i.left+i.width):Vi-(i.left+i.width),0===n)continue;const a=t+n>=e?e-t:n;s[l]=s[l].set("width",s[l].width+a);for(let t=l+1;t<=o;t+=1)s[t]=s[t].set("left",s[t].left+a);if(t+n>=e)return s;t+=n}if(l!==s.length-1)for(let o=l+1;o<s.length;o+=1){const i=s[o],n=i.width-2;if(n<=0)continue;const a=t+n>=e?e-t:n;s[l]=s[l].set("width",s[l].width+a),s[o]=i.set("width",i.width-a);for(let t=l+1;t<=o;t+=1)s[t]=s[t].set("left",s[t].left+a);if(t+n>=e)return s;t+=n}}return s}return s}function qi(t,o,i){const n=i.map((t=>(0,e.Immutable)(t))),s=Yi(t,n),a=n[s];return n.splice(s,1),Ji(a,o,n)}function Ji(t,o,i){const n=i.map((t=>(0,e.Immutable)(t)));let s=(0,e.Immutable)(t);const a=Math.max(o,0);if(s=s.set("left",a),null==n||0===n.length)return s=s.set("width",Math.min(s.width,Vi-s.left)),[s];let l,r=n.length;const d=()=>{if(0===r)u=n[r].left,l=u;else{const t=n[r-1];u=r<n.length?n[r].left-(t.left+t.width):Vi-(t.left+t.width),l=t.left+t.width+u}};n.some(((t,e)=>{if(a<=t.left)return r=e,!0}));let u=r<n.length?n[r].left-a:Vi-a;if(u>=s.width)return n.splice(r,0,s),n;const c=u;if(d(),u>=s.width)return s=s.set("left",l-s.width),n.splice(r,0,s),n;u=c;for(let t=r;t<n.length;t+=1){const e=n[t];let o=0;if(o=t!==n.length-1?n[t+1].left-(e.left+e.width):Vi-(e.left+e.width),0===o)continue;const i=u+o>=s.width?s.width-u:o;for(let e=r;e<=t;e+=1)n[e]=n[e].set("left",n[e].left+i);if(u+o>=s.width)return n.splice(r,0,s),n;u+=o}if(d(),u>=s.width)return s=s.set("left",l-s.width),n.splice(r,0,s),n;for(let t=r-1;t>=0;t-=1){const e=n[t];let o=0;if(t>0){const i=n[t-1];o=e.left-(i.left+i.width)}else o=e.left;if(0===o)continue;const i=u+o>=s.width?s.width-u:o;for(let e=t;e<=r-1;e+=1)n[e]=n[e].set("left",n[e].left-i);if(u+o>=s.width)return s=s.set("left",l-s.width),n.splice(r,0,s),n;u+=o}if(d(),u>=2)return s=s.set("left",l-u).set("width",u),n.splice(r,0,s),n;if(r!==n.length)for(let t=r;t<n.length;t+=1){const e=n[t],o=e.width-2;if(o<=0)continue;const i=u+o>=2?2-u:o;n[t]=e.set("width",e.width-i);for(let e=r;e<=t;e+=1)n[e]=n[e].set("left",n[e].left+i);if(u+o>=2)return s=s.set("left",n[r].left-2).set("width",2),n.splice(r,0,s),n;u+=o}if(d(),u>=2)return s=s.set("left",l-u).set("width",u),n.splice(r,0,s),n;for(let t=r-1;t>=0;t-=1){const e=n[t],o=e.width-2;if(o<=0)continue;const i=u+o>=2?2-u:o;n[t]=e.set("width",e.width-i);for(let e=t+1;e<=r-1;e+=1)n[e]=n[e].set("left",n[e].left-i);if(u+o>=2)return s=s.set("left",l-2).set("width",2),n.splice(r,0,s),n;u+=o}return n}function Qi(t){const{builderTheme:o,visible:i,gutter:n=0}=t;return(0,e.jsx)("div",{css:e.css`
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
                `}))))))}const Ki=e.css`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`,tn=e.css`
  ${Ki};
  bottom: 0;
  top: 0;
  z-index: ${a.LayoutZIndex.DragMoveTip};
  pointer-events: none;
`;class en extends e.React.PureComponent{constructor(t){super(t),this.state={isResizing:!1,updatingRects:null,isDragoverCenter:!1},a.utils.autoBindHandlers(this,["handleItemResizeStart","handleItemResizing","handleItemResizeEnd","handleDrop","handleDragOver","handleDragEnter","handleDragLeave","handleToggleDragoverCenterEffect"]),this.flipLeftRight=a.utils.isRTL()}componentDidMount(){this.canvasPane=new Ti(this.guideDragOverRef)}handleItemResizeStart(t){this.domRect=this.ref.getBoundingClientRect(),this.setState({isResizing:!0})}handleItemResizing(t,e,o,i,n){const s=this.domRect.width/Vi,a=Xi(t,Math.round(e/s),Math.round(i/s),this.childRects);this.setState({updatingRects:a})}handleItemResizeEnd(t,e,i,n,s,l){const{layout:r}=this.props,d=this.domRect.width/Vi,u=Math.round(e/d),c=Math.round(n/d),p=(0,o.getAppConfigAction)();Xi(t,u,c,this.childRects).forEach((e=>{const o=r.content[e.id].bbox;let i=o.height;e.id===t&&(i=a.utils.isPercentage(o.height)?`${(parseFloat(e.height)+100*s/this.domRect.height).toFixed(4)}%`:`${Math.round(parseFloat(e.height)+s)}px`);const n={left:e.left,width:e.width,height:i};p.editLayoutItemBBox({layoutId:r.id,layoutItemId:e.id},n)})),p.exec(),this.setState({isResizing:!1,updatingRects:null})}handleToggleDragoverCenterEffect(t){this.referenceId=null,t&&this.collectBounds(),this.setState({isDragoverCenter:t})}handleDragOver(t,e,o,i,n,s){var a;const l=null!==(a=t.layoutInfo)&&void 0!==a?a:{layoutId:null},r=this.reCalculateRects(t,o,i,n);let d;r.some((t=>{if(null==t.id||t.layoutId===l.layoutId&&t.id===l.layoutItemId)return d=t,!0}));let u=!0,c=d.left;if(this.flippedChildRects.some((t=>{if((t.layoutId!==d.layoutId||t.id!==d.id)&&(t.left<=d.left&&t.left+t.width>d.left&&(u=!1),!u)){const e=r.find((e=>e.layoutId===t.layoutId&&e.id===t.id));return c=e.left+e.width<=d.left?t.left+t.width:t.left,!0}})),this.dragInsertPos=c,this.canvasPane.clear(),u)this.canvasPane.drawRect({left:c*this.colWidth+this.space/2,top:0,width:d.width*this.colWidth-this.space,height:i.height});else{const t=Math.min(o.width-this.space/2,Math.max(0,c*this.colWidth-this.space/2));this.canvasPane.drawRect({left:t,top:0,width:10,height:o.height})}}handleDragEnter(){this.canvasPane.setSize(this.ref.clientWidth,this.ref.clientHeight),this.canvasPane.setColor(e.polished.rgba(this.builderTheme.colors.palette.primary[700],.5))}handleDragLeave(){this.canvasPane.clear()}getConfig(){var t;const{layout:e}=this.props;return null!==(t=e.setting)&&void 0!==t?t:Bi}reCalculateRects(t,e,o,i){var n,s;const a=null!==(n=t.layoutInfo)&&void 0!==n?n:{layoutId:null},{layout:l}=this.props,r=this.getConfig();this.space=null!==(s=r.space)&&void 0!==s?s:0;const d=this.maxPageWidth>0?Math.min(this.maxPageWidth,e.width):e.width,u=i-(e.width-d)/2,c=o.left-(e.width-d)/2;this.colWidth=d/Vi;const p=Math.round(u/this.colWidth),h=Math.round(c/this.colWidth),g=Math.max(1,Math.round(o.width/this.colWidth)),m=function(t,e,o,i,n,s){var a;let l;const r=null!==(a=e.layoutInfo)&&void 0!==a?a:{layoutId:null},d=r.layoutId===t;return s.some((t=>(!d||t.id!==r.layoutItemId)&&(t.left>=o&&t.left<o+i||o>=t.left&&o<t.left+t.width)))?(s.some(((t,e)=>{if(d&&t.id===r.layoutItemId)return!1;if(n>=t.left&&n<=t.left+t.width)return n>=t.left&&n<t.left+t.width/2?(l=t.left,!0):(l=t.left+t.width,!0);if(o<t.left&&o+i>t.left){let o=0;if(0===e)o=t.left;else{let i;for(let t=e-1;t>=0&&(i=s[t],d&&i.id===r.layoutItemId);t-=1);o=null!=i?t.left-(i.left+i.width):t.left}return l=o>=i?t.left-i:t.left-o,!0}return o>t.left&&o<t.left+t.width?(l=t.left+t.width,!0):void 0})),l):o}(l.id,t,h,g,p,this.flippedChildRects);return null==t.id&&this.isInRow(a)?qi(a.layoutItemId,m,this.flippedChildRects):Ji({width:g,height:o.height,layoutId:a.layoutId,id:a.layoutItemId},m,this.flippedChildRects)}handleDrop(t,i,n){const{layout:s}=this.props;let l=(0,o.getAppConfigAction)();const{addedItemRect:r,insertIndex:d,appConfig:u}=this.calDropPosition(l.appConfig,t,i,n,!1);null!=r?R(u,t,{layoutId:s.id},i,r,d).then((i=>{var n,r,d;const{layoutInfo:u,updatedAppConfig:c}=i,{layoutId:p,layoutItemId:h}=u;if(l=(0,o.getAppConfigAction)(c),(null===(n=t.layoutInfo)||void 0===n?void 0:n.layoutId)!==s.id){let t=null!==(r=c.layouts[p].content[h].setting)&&void 0!==r?r:(0,e.Immutable)({});(null===(d=t.autoProps)||void 0===d?void 0:d.height)||(t=t.setIn(["autoProps","height"],a.LayoutItemSizeModes.Stretch)),l.editLayoutItemSetting(u,t)}let g=c.layouts[p].content[h].bbox;g=g.without("top").without("right").without("bottom"),l.editLayoutItemBBox(u,g),(0,e.getAppStore)().dispatch(e.appActions.layoutChanged(l.appConfig,u))})).finally(null):(0,e.getAppStore)().dispatch(e.appActions.layoutChanged(u,t.layoutInfo)),this.canvasPane.clear()}calDropPosition(t,e,i,n,s){var a;const l=this.maxPageWidth>0?Math.min(this.maxPageWidth,i.width):i.width,r=null!==(a=e.layoutInfo)&&void 0!==a?a:{layoutId:null},{layout:d}=this.props,u=l/Vi,c=this.dragInsertPos,p=Math.max(1,Math.round(n.width/u)),h=(0,o.getAppConfigAction)(t);let g,m,f;return g=!s&&null==e.id&&this.isInRow(r)?qi(r.layoutItemId,c,this.flippedChildRects):Ji({width:p,height:n.height,layoutId:r.layoutId,id:r.layoutItemId},c,this.flippedChildRects),g.forEach(((t,o)=>{var i;let n={left:t.left,width:t.width,height:t.height};this.flipLeftRight&&(n=Wi(n)),t.layoutId===d.id?(h.editLayoutItemBBox({layoutId:t.layoutId,layoutItemId:t.id},n),t.id===(null===(i=e.layoutInfo)||void 0===i?void 0:i.layoutItemId)&&null!=e.id&&h.setLayoutItemToPending({layoutId:t.layoutId,layoutItemId:t.id},!1)):(m=n,f=0+o)})),{addedItemRect:m,insertIndex:f,appConfig:h.appConfig}}isInRow(t){const{layout:e}=this.props;return(null==t?void 0:t.layoutId)===e.id}collectBounds(){var t;const{transformedLayout:e}=this.props,o=null!==(t=e.order)&&void 0!==t?t:[];return this.childRects=[],o.forEach((t=>{var o,i;if(e.content[t].isPending)return;const n=null===(i=null===(o=e.content)||void 0===o?void 0:o[t])||void 0===i?void 0:i.bbox;null!=n&&this.childRects.push({layoutId:e.id,id:t,left:parseInt(n.left,10),width:parseInt(n.width,10),height:n.height})})),this.childRects.sort(((t,e)=>t.left-e.left)),this.flipLeftRight?(this.flippedChildRects=[],this.childRects.forEach((t=>{let e={left:t.left,width:t.width,height:t.height};e=Wi(e),this.flippedChildRects.push({layoutId:t.layoutId,id:t.id,left:e.left,width:e.width,height:e.height})})),this.flippedChildRects.sort(((t,e)=>t.left-e.left))):this.flippedChildRects=this.childRects,this.childRects}createItem(t,o){var i;const{transformedLayout:n,itemDraggable:s,itemResizable:a,itemSelectable:l,isMultiRow:r}=this.props,d=this.getConfig(),u=t[o],c=null!==(i=d.space)&&void 0!==i?i:0;let p;if(0===o)p=u.left;else{const e=t[o-1];p=u.left-e.left-e.width}return(0,e.jsx)(_i,{key:`${u.layoutId}_${u.id}`,order:o+1,offset:p,span:u.width,gutter:c,isMultiRow:r,builderTheme:this.builderTheme,layoutId:n.id,layoutItemId:u.id,layoutItem:n.content[u.id],draggable:s,resizable:a,selectable:l,onResizeStart:this.handleItemResizeStart,onResizing:this.handleItemResizing,onResizeEnd:this.handleItemResizeEnd})}render(){var t;const{transformedLayout:o,className:i}=this.props,{isResizing:n,isDragoverCenter:s}=this.state,l=this.getConfig(),r=s;let d;n&&null!=this.state.updatingRects?d=this.state.updatingRects:(this.collectBounds(),d=this.childRects);const u=null!==(t=l.space)&&void 0!==t?t:0;return(0,e.jsx)(a.PageContext.Consumer,null,(t=>(this.maxPageWidth=t.maxWidth,this.builderTheme=t.builderTheme,(0,e.jsx)("div",{className:(0,e.classNames)("row-layout",i,{"row-rtl":this.flipLeftRight}),css:Hi,"data-layoutid":o.id},(0,e.jsx)("div",{css:e.css`
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
                  `},(0,e.jsx)(e.IntersectionContext.Provider,{value:{monitor:!1}},(0,e.jsx)(e.OneByOneAnimation,{className:(0,e.classNames)("row m-0",{"flex-nowrap":!this.props.isMultiRow,"h-100":d.length>0}),oid:o.id,"data-layoutid":o.id},(0,e.jsx)(me,{css:Ki,layouts:this.props.layouts,highlightDragover:!1,onDragEnter:this.handleDragEnter,onDragLeave:this.handleDragLeave,onDragOver:this.handleDragOver,onDrop:this.handleDrop,onToggleDragoverEffect:this.handleToggleDragoverCenterEffect}),d.map(((t,e)=>this.createItem(d,e))))),0===d.length&&this.props.children,(0,e.jsx)(Qi,{visible:r||n,builderTheme:t.builderTheme,gutter:u}),(0,e.jsx)("canvas",{css:e.css`
                      ${tn};
                      display: ${r?"block":"none"};
                    `,ref:t=>this.guideDragOverRef=t})))))))}}class on extends e.React.PureComponent{constructor(t){super(t),this.onResize=(t,e)=>{var o;if(this.props.browserSizeMode!==this.props.mainSizeMode)return;if(0===e)return;const{widgetId:i}=this.props;null!=(null===(o=window.runtimeInfo.widgets)||void 0===o?void 0:o[i])?window.runtimeInfo.widgets[i].height=e:window.runtimeInfo.widgets[i]={height:e}},this.handleDebounceResize=e.lodash.debounce(this.onResize,200)}findExtension(){const t=e.ExtensionManager.getInstance().getExtensions(`${e.extensionSpec.ExtensionPoints.LayoutTransformer}`);if((null==t?void 0:t.length)>0){const e=t.find((t=>"ROW"===t.layoutType));this.layoutTransform=null==e?void 0:e.transformLayout}}collectRowItems(){var t;const{layout:e,layouts:o,browserSizeMode:i,mainSizeMode:n}=this.props;null==this.layoutTransform&&this.findExtension();let s=e;o[i]!==e.id&&null!=this.layoutTransform&&(s=this.layoutTransform(e,n,i)),this.finalLayout=s;const a=null!==(t=s.order)&&void 0!==t?t:[],l=[];let r=[],d=0;return l.push(r),a.forEach((t=>{if(s.content[t].isPending)return;const e=s.content[t].bbox,o=parseInt(e.left,10),i=Math.floor(o/Vi);i>d&&(r=[],d=i,l.push(r)),r.push(t)})),l}createRow(){const{layout:t,layouts:o}=this.props;return(0,e.jsx)(en,{layouts:o,layout:t,transformedLayout:this.finalLayout,isMultiRow:this.numOfRows>1},this.props.children)}render(){var t;const{layout:o}=this.props,n=null!==(t=o.setting)&&void 0!==t?t:Bi;return(0,e.jsx)(a.PageContext.Consumer,null,(t=>(this.numOfRows=this.collectRowItems().length,(0,e.jsx)("div",{className:(0,e.classNames)("layout d-flex",e.classNames),css:e.css`
                width: 100%;
                padding: ${i.styleUtils.toCSSPadding(n.style.padding)};
              `,"data-layoutid":o.id},this.createRow(),(0,e.jsx)(e.ReactResizeDetector,{handleHeight:!0,onResize:this.handleDebounceResize})))))}}const nn=e.ReactRedux.connect(a.utils.mapStateToLayoutProps)(on);var sn;function an(t,e){const o={id:`${a.utils.getMaximumId(t)+1}`,setting:{type:e}};return{outLayout:t.setIn(["content",o.id],o),outItem:o}}function ln(t,e,o,i){return t.setIn(["content",e,"setting",o],i)}function rn(t,e,o,i,n){const s=t.content[o],a=[].concat(s.setting.children),l=n?i:i+1;return a.splice(l,0,e),ln(t,o,"children",a)}function dn(t,e,o,i){const n=[...t.content[o].setting.children];return n.splice(i,1,e),ln(t,o,"children",n)}function un(t,e,o,i,n,s){const l=t.content[o],{parent:r,size:d}=l.setting,u=t.content[r],c=null==u?void 0:u.setting;let p=t;if((null==c?void 0:c.type)===i){const t=c.children.indexOf(o);return p=rn(p,e,r,t,n),p=ln(p,e,"parent",r),p=ln(p,e,"size",s?100:d/2),p=ln(p,o,"size",s?100:d/2),i===a.GridItemType.Tab&&(p=ln(p,r,"active",t+1)),p}if((null==u?void 0:u.setting.type)===a.GridItemType.Tab){const o=u.setting.parent,a=t.content[o];if((null==a?void 0:a.setting.type)===i){const t=u.setting.size;return p=rn(p,e,o,a.setting.children.indexOf(r),n),p=ln(p,e,"parent",o),p=ln(p,e,"size",s?100:t/2),p=ln(p,r,"size",s?100:t/2),p}const l=an(p,i);p=l.outLayout;const d=l.outItem;if(p=ln(p,d.id,"parent",o),p=ln(p,d.id,"size",u.setting.size),a){const t=a.setting.children.indexOf(r);p=dn(p,d.id,o,t)}return p=ln(p,e,"parent",d.id),p=ln(p,r,"parent",d.id),p=ln(p,e,"size",50),p=ln(p,r,"size",50),p=ln(p,d.id,"children",n?[e,r]:[r,e]),r===p.setting.rootItem&&(p=p.setIn(["setting","rootItem"],d.id)),p}const h=an(p,i);p=h.outLayout;const g=h.outItem;if(p=ln(p,g.id,"parent",r),p=ln(p,g.id,"size",d),u){const t=c.children.indexOf(o);p=dn(p,g.id,r,t)}return p=ln(p,e,"parent",g.id),p=ln(p,o,"parent",g.id),p=ln(p,e,"size",s?100:50),p=ln(p,o,"size",s?100:50),p=ln(p,g.id,"children",n?[e,o]:[o,e]),i===a.GridItemType.Tab&&(p=ln(p,g.id,"active",1)),o===p.setting.rootItem&&(p=p.setIn(["setting","rootItem"],g.id)),p}!function(t){t.Top="top",t.Bottom="bottom",t.Left="left",t.Right="right",t.Center="center"}(sn||(sn={}));var cn=function(t,e,o,i){return new(o||(o=Promise))((function(n,s){function a(t){try{r(i.next(t))}catch(t){s(t)}}function l(t){try{r(i.throw(t))}catch(t){s(t)}}function r(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,l)}r((i=i.apply(t,e||[])).next())}))};function pn(t,e,o){return cn(this,void 0,void 0,(function*(){const i={left:0,top:0,width:100,height:100},{layoutInfo:n,updatedAppConfig:s}=yield R(t,e,o,i,i);return{newLayoutItemId:n.layoutItemId,updatedAppConfig:s}}))}function hn(t,e,i,n,s){return cn(this,void 0,void 0,(function*(){const{layoutInfo:l}=e,{layoutId:r}=i;let d,u=t;if((null==l?void 0:l.layoutId)===r){const e=t.layouts[r].content[l.layoutItemId];if(e.isPending)u=u.setIn(["layouts",r,"content",l.layoutItemId],e.without("isPending"));else{const e=(0,o.getAppConfigAction)().detachGridItem(t.layouts[r],l.layoutItemId);u=u.setIn(["layouts",r],e)}d=l.layoutItemId}else{const o=yield pn(t,e,i);d=o.newLayoutItemId,u=o.updatedAppConfig}if(n){const t=function(t,e,o,i){switch(i){case sn.Center:return un(t,e,o,a.GridItemType.Tab,!1,!0);case sn.Top:return un(t,e,o,a.GridItemType.Column,!0,!1);case sn.Bottom:return un(t,e,o,a.GridItemType.Column,!1,!1);case sn.Left:return un(t,e,o,a.GridItemType.Row,!0,!1);case sn.Right:return un(t,e,o,a.GridItemType.Row,!1,!1)}}(u.layouts[r],d,n,s);u=u.setIn(["layouts",r],t)}else u=u.setIn(["layouts",r,"content",d,"setting","size"],100).setIn(["layouts",r,"setting","rootItem"],d);return{appConfig:u,layoutInfo:{layoutId:r,layoutItemId:d}}}))}const gn=[{icon:H(),title:t=>t.formatMessage("duplicate"),visible:()=>!q(),onClick:t=>{const{layoutId:i,layoutItem:n}=t;!function(t){const{layoutId:i,layoutItemId:n}=t,s=(0,o.getAppConfigAction)(),l=s.duplicateLayoutItem(i,i,n,!0);let r=s.appConfig.layouts[i];const d=r.content[n];if(d.setting.parent){const t=r.content[d.setting.parent],e=[...t.setting.children],o=e.indexOf(n);if(e.splice(o,0,l.layoutItemId),r=ln(r,d.setting.parent,"children",e),r=ln(r,l.layoutItemId,"parent",d.setting.parent),t.setting.type===a.GridItemType.Tab)r=ln(r,l.layoutItemId,"size",d.setting.size);else{const t=d.setting.size/2;r=ln(r,l.layoutItemId,"size",t),r=ln(r,n,"size",t)}}else r=un(r,l.layoutItemId,n,a.GridItemType.Row,!1,!1);const u=s.appConfig.setIn(["layouts",i],r);window.jimuConfig.isBuilder?((0,o.getAppConfigAction)(u).exec(),o.builderAppSync.publishChangeSelectionToApp(l)):(0,e.getAppStore)().dispatch(e.appActions.layoutChanged(u,l))}({layoutId:i,layoutItemId:n.id})}},{icon:D(),title:t=>t.formatMessage("pendingTip"),visible:()=>X()===e.AppMode.Design&&!q(),onClick:t=>{const{layoutId:i,layoutItem:n}=t;!function(t){let i=(0,o.getAppConfigAction)(),n=i.appConfig.layouts[t.layoutId];n=i.detachGridItem(n,t.layoutItemId);let s=i.appConfig.setIn(["layouts",t.layoutId],n);n.setting.rootItem===t.layoutItemId&&(s=s.setIn(["layouts",t.layoutId,"setting"],n.setting.without("rootItem"))),i=(0,o.getAppConfigAction)(s),i.setLayoutItemToPending(t,!0),window.jimuConfig.isBuilder?(i.exec(),o.builderAppSync.publishChangeSelectionToApp(null)):(0,e.getAppStore)().dispatch(e.appActions.layoutChanged(i.appConfig,null))}({layoutId:i,layoutItemId:n.id})}},{icon:O(),title:t=>t.formatMessage("delete"),visible:t=>X()===e.AppMode.Design&&(!q()||K(t.layoutItem)),onClick:t=>{const{layoutItem:e,layoutId:i}=t,n={layoutId:i,layoutItemId:e.id};o.appBuilderSync.publishConfirmDeleteToApp(n)}}];var mn=p(7077),fn=p.n(mn);const yn=t=>{const o=window.SVG,{className:i}=t,n=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o}(t,["className"]),s=(0,e.classNames)("jimu-icon jimu-icon-component",i);return o?e.React.createElement(o,Object.assign({className:s,src:fn()},n)):e.React.createElement("svg",Object.assign({className:s},n))};const vn=t=>{const o=window.SVG,{className:i}=t,n=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o}(t,["className"]),s=(0,e.classNames)("jimu-icon jimu-icon-component",i);return o?e.React.createElement(o,Object.assign({className:s,src:jo()},n)):e.React.createElement("svg",Object.assign({className:s},n))};const In=t=>{const o=window.SVG,{className:i}=t,n=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o}(t,["className"]),s=(0,e.classNames)("jimu-icon jimu-icon-component",i);return o?e.React.createElement(o,Object.assign({className:s,src:Jt()},n)):e.React.createElement("svg",Object.assign({className:s},n))},xn=e.css`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 10;
  display: flex;
`,bn=e.css`
  ${xn};
  pointer-events: none;
`,wn=t=>{const o=(0,c.getTheme2)();return e.css`
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
  `},Sn=e.css`
  position: absolute;
  left: 0;
  top: 0;
  width: 100% !important;
  height: 100% !important;
  z-index: 30;
  background: var(--light);
`;function Cn(t){const{layoutId:n,layoutItemId:s,onDragStart:a,onDragging:l,onDragEnd:r,delay:d,isLastChild:u,className:p}=t,[h,m]=e.React.useState(!1),[f,y]=e.React.useState(!1),[v,I]=e.React.useState(!0),x=e.React.useRef(),b=e.React.useRef(),w=e.React.useRef(!1),S=e.React.useRef(),C=(0,c.getTheme2)(),R=i.hooks.useTranslate(wt),A=e.ReactRedux.useSelector((t=>{var e,o,i,a;const l=t.appConfig.layouts[n];if(null!==(o=null===(e=null==l?void 0:l.setting)||void 0===e?void 0:e.expandable)&&void 0!==o&&!o)return!1;const r=null===(i=null==l?void 0:l.setting)||void 0===i?void 0:i.rootItem;let d=!1;if(r===s){const t=l.content[r];null!=(null===(a=t.setting)||void 0===a?void 0:a.children)&&0!==t.setting.children.length||(d=!0)}return!d})),T=e.ReactRedux.useSelector((t=>{var o,i,n;const s=null!==(n=null===(i=null===(o=t.appConfig)||void 0===o?void 0:o.forBuilderAttributes)||void 0===i?void 0:i.lockLayout)&&void 0!==n&&n;return!(t.appRuntimeInfo.appMode===e.AppMode.Design)||s})),M=e.ReactRedux.useSelector((t=>{var o,i,a;const l=t.appConfig.layouts[n].content[s];if(l.type===e.LayoutItemType.Section)return!0;if(l.type===e.LayoutItemType.Widget){const n=t.appConfig.widgets[l.widgetId];if((null===(o=null==n?void 0:n.manifest)||void 0===o?void 0:o.widgetType)===e.WidgetType.Layout||(null===(a=null===(i=null==n?void 0:n.manifest)||void 0===i?void 0:i.properties)||void 0===a?void 0:a.hasEmbeddedLayout))return null!=n.layouts}return!1})),P=e.ReactRedux.useSelector((t=>{const o=t.appConfig.layouts[n].content[s];return o.type===e.LayoutItemType.Widget&&null==o.widgetId})),j=e.React.useMemo((()=>(0,e.Immutable)({[e.BrowserSizeMode.Large]:`${n}_${s}_tlarge`,[e.BrowserSizeMode.Medium]:`${n}_${s}_tmedium`,[e.BrowserSizeMode.Small]:`${n}_${s}_tsmall`})),[n,s]);i.hooks.useEffectOnce((()=>{const t=(0,c.getTheme)();x.current=new Ti(b.current,t)}));const L=i.hooks.useEventCallback(((t,e)=>{t&&e&&x.current.setSize(t,e,window.devicePixelRatio)})),z=i.hooks.useEventCallback((t=>{w.current=t,document.querySelectorAll("div.grid-layout").forEach((e=>{e.getAttribute("data-layoutid")===n?t&&!e.classList.contains("drop-target")&&e.classList.add("drop-target"):e.classList.contains("drop-target")&&e.classList.remove("drop-target")})),x.current.clear()})),k=e.React.useCallback(((t,o,i,n,s,a)=>{if(!w.current)return;const{width:l,height:r}=i;x.current.clear();const d=(0,c.getTheme)();if(x.current.setColor(e.polished.rgba(d.colors.palette.primary[700],.2)),P&&ye(t))return void x.current.drawRect({left:0,top:0,width:l,height:r});let u;u=a<=.2*r?{left:0,top:0,width:l,height:r/2}:a>=.8*r?{left:0,top:r/2,width:l,height:r/2}:s<=.2*l?{left:0,top:0,width:l/2,height:r}:s>=.8*l?{left:l/2,top:0,width:l/2,height:r}:{left:.2*l,top:.2*r,width:.6*l,height:.6*r},x.current.drawRect(u)}),[P]),N=e.React.useCallback(((t,i,a,l,r)=>{if(P&&ye(t))return void ve({layoutId:n,layoutItemId:s},t);const{width:d,height:u}=i;let c;c=r<=.2*u?sn.Top:r>=.8*u?sn.Bottom:l<=.2*d?sn.Left:l>=.8*d?sn.Right:sn.Center;const p={layoutId:n};let h=(0,o.getAppConfigAction)();hn(h.appConfig,t,p,s,c).then((t=>{const{appConfig:i,layoutInfo:n}=t;h=(0,o.getAppConfigAction)(i),h.exec(),(0,e.getAppStore)().dispatch(e.appActions.selectionChanged(n))}))}),[P,n,s]),$=e.React.useCallback((t=>{Ie({layoutId:n,layoutItemId:s},t.uri),y(!1)}),[n,s]),O=e.React.useCallback((t=>{t.stopPropagation(),y(!f)}),[f]),E=e.React.useCallback((()=>{m(!h)}),[h]),D=e.React.useCallback((()=>{I(!v)}),[v]);return(0,e.jsx)(Je,{layoutId:n,layoutItemId:s,resizable:!1,className:p,showDefaultTools:!1,toolItems:gn,delay:d,isLastChild:u,onDragStart:a,onDragging:l,onDragEnd:r,css:e.css`${wn(P)};${h?Sn:""}`},(!M||v)&&(0,e.jsx)(me,{css:xn,layouts:j,highlightDragover:!0,onDragOver:k,onDrop:N,onToggleDragoverEffect:z}),P&&(0,e.jsx)("div",{className:"add-btn"},(0,e.jsx)(g,{title:R("addWidget")},(0,e.jsx)(i.Button,{icon:!0,ref:S,css:e.css`width: 36px; height: 36px; padding: 0.5rem;`,onClick:O,"aria-haspopup":!0},(0,e.jsx)(fe,null)))),P&&f&&(0,e.jsx)(ue.WidgetListPopper,{referenceElement:S.current,isAccepted:ye,onSelect:$,onClose:()=>y(!1)}),(0,e.jsx)("canvas",{css:bn,ref:b}),(0,e.jsx)(e.ReactResizeDetector,{handleWidth:!0,handleHeight:!0,onResize:L}),A&&(0,e.jsx)(i.Button,{icon:!0,type:"tertiary",className:"max-grid-item-btn p-0",onClick:E},h&&(0,e.jsx)(In,null),!h&&(0,e.jsx)(yn,null)),M&&!T&&(0,e.jsx)("div",{className:(0,e.classNames)("lock-mask",{unlock:!v})},(0,e.jsx)("div",{className:"mask"}),(0,e.jsx)(i.Tooltip,{title:R(v?"unlockGridItem":"lockGridItem")},(0,e.jsx)(i.Button,{className:"lock-btn rounded-circle",size:"sm",type:"tertiary",icon:!0,onClick:D},!v&&(0,e.jsx)(vn,{size:14,color:C.colors.black}),v&&(0,e.jsx)(le,{size:20,color:C.colors.black})))))}const Rn=32;function An(t,e,o,i,n,s){let a=i,l=n;if("row"===o){const o=s?e.width:t.width,n=s?t.width:e.width;i<0&&(a=o>Rn?-Math.min(Math.abs(i),o-Rn):0),i>0&&(a=n>Rn?Math.min(i,n-Rn):0)}else n<0&&(l=t.height>Rn?-Math.min(Math.abs(n),t.height-Rn):0),n>0&&(l=e.height>Rn?Math.min(n,e.height-Rn):0);return{x:a,y:l}}function Tn(t){const o=t.getAttribute("data-layoutid"),i=t.getAttribute("data-layoutitemid");return(0,e.getAppStore)().getState().appConfig.layouts[o].content[i].setting.size}function Mn(t){var o,i;const{referenceItemId:n,direction:s,layoutId:a,onResizeEnd:l}=t,r=e.React.useRef(),d=e.React.useRef(),u=e.React.useRef(null),c=null!==(i=null===(o=(0,e.getAppStore)().getState().appContext)||void 0===o?void 0:o.isRTL)&&void 0!==i&&i,p=e.ReactRedux.useSelector((t=>t.appRuntimeInfo.appMode===e.AppMode.Design)),h=e.ReactRedux.useSelector((e=>{var o,i;return null===(i=null===(o=e.appConfig.layouts[t.layoutId].setting)||void 0===o?void 0:o.resizable)||void 0===i||i})),g=e.ReactRedux.useSelector((t=>{var e,o;return null!==(o=null===(e=t.appConfig.layouts[a].setting)||void 0===e?void 0:e.splitSize)&&void 0!==o?o:8})),m=e.ReactRedux.useSelector((t=>{var e,o;return null!==(o=null===(e=t.appConfig.layouts[a].setting)||void 0===e?void 0:e.splitColor)&&void 0!==o?o:"var(--light-500)"})),f=e.React.useMemo((()=>{const t=`${g}px`,o=!!p||h;return e.css`
      width: ${"col"===s?"100%":t};
      height: ${"col"===s?t:"100%"};
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
    `}),[s,h,p,g,m]);return e.React.useEffect((()=>{if(null==d.current&&(p||h)){let t,o,i,a,p,h,g,m,f,y,v,I,x;e.moduleLoader.loadModule("jimu-core/dnd").then((e=>{const b=e.interact;u.current=b,r.current&&(d.current=b(r.current).origin("parent").draggable({inertia:!1,autoScroll:!1,modifiers:[b.modifiers.restrict({restriction:"parent"})],lockAxis:"row"===s?"x":"y",onstart:e=>{e.stopPropagation(),t=0,o=0,i=r.current.parentElement.getBoundingClientRect(),a=r.current.previousElementSibling,p=a.getBoundingClientRect(),g=a.style.width,m=a.style.height,h=Tn(a),f=r.current.nextElementSibling,y=f.getBoundingClientRect(),I=f.style.width,x=f.style.height,v=Tn(f)},onmove:e=>{e.stopPropagation(),t+=e.dx,o+=e.dy;const{x:i,y:n}=An(p,y,s,t,o,c),l=c?-1:1;"row"===s?(a.style.width=`calc(${h}% + ${i*l}px)`,f.style.width=`calc(${v}% - ${i*l}px)`):(a.style.height=`calc(${h}% + ${n}px)`,f.style.height=`calc(${v}% - ${n}px)`)},onend:e=>{e.stopPropagation(),t+=e.dx,o+=e.dy;const{x:r,y:d}=An(p,y,s,t,o,c),u=c?-1:1;a.style.width=g,f.style.width=I,a.style.height=m,f.style.height=x,l(n,Math.round(r*u*1e4/i.width)/100,Math.round(1e4*d/i.height)/100)}}))}))}return null!=d.current&&u.current(r.current).draggable(!!p||h),()=>{var t;null===(t=d.current)||void 0===t||t.unset(),d.current=null}}),[h,l,n,s,p]),(0,e.jsx)("div",{ref:r,css:f},(0,e.jsx)("div",{className:(0,e.classNames)("w-100 h-100",{"horizontal-splitter":"row"===s,"vertical-splitter":"col"===s})}))}function Pn(t){const{layoutId:n,layoutItemId:s,onDragStart:l,title:r}=t,d=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o}(t,["layoutId","layoutItemId","onDragStart","title"]),u=e.React.useRef(),c=e.React.useContext(a.PageContext),p=e.React.useContext(a.LayoutContext),h=e.ReactRedux.useSelector((t=>{const e=t.appConfig.layouts[n].content[s];return null==e?void 0:e.type})),g=e.ReactRedux.useSelector((t=>{var o,i;const a=t.appConfig,l=a.layouts[n].content[s];if((null==l?void 0:l.type)===e.LayoutItemType.Widget){const t=a.widgets[l.widgetId];return null!==(o=null==t?void 0:t.label)&&void 0!==o?o:l.id}return(null==l?void 0:l.type)===e.LayoutItemType.Section?a.sections[l.sectionId].label:null!==(i=null==l?void 0:l.id)&&void 0!==i?i:""})),m=e.React.useCallback((()=>c.rootLayoutId),[c.rootLayoutId]),f=i.hooks.useEventCallback((()=>{l(s)})),y=i.hooks.useEventCallback((t=>{const i={layoutId:n};let a=(0,o.getAppConfigAction)();hn(a.appConfig,t,i,s,sn.Center).then((t=>{const{appConfig:i,layoutInfo:n}=t;a=(0,o.getAppConfigAction)(i),a.exec(),(0,e.getAppStore)().dispatch(e.appActions.selectionChanged(n))}))})),v=i.hooks.useEventCallback((t=>{u.current.style.backgroundColor=t?"var(--primary-300)":null}));return e.React.useEffect((()=>{u.current.setAttribute("data-layoutid",n),u.current.setAttribute("data-layoutitemid",s);const t=(0,gt.interact)(u.current).origin("parent");ct(t,{layoutId:n,layoutItemId:s,itemType:h,useDragHandler:!1,onDragStart:f,rootLayoutId:m,restrict:()=>!1});const o={current:{props:{layouts:(0,e.Immutable)({[e.BrowserSizeMode.Large]:`${n}_${s}_tlarge`,[e.BrowserSizeMode.Medium]:`${n}_${s}_tmedium`,[e.BrowserSizeMode.Small]:`${n}_${s}_tsmall`}),highlightDragover:!0,onDrop:y,onToggleDragoverEffect:v},layoutId:n,pageContext:c,layoutContext:p}},i=he(u.current,o);return ge(u.current,o),()=>{t.unset(),i.unset()}}),[n,s]),e.React.createElement(i.Tab,Object.assign({},d,{title:g,innerRef:u,innnerClassName:"exb-rnd"}))}function jn(t,e){var o;const i=t.content[e];if(null==i)return null;const n=null!==(o=i.setting)&&void 0!==o?o:{},{type:s=ke.Plain,children:a}=n,l={layoutItemId:e,type:s};return(null==a?void 0:a.length)>0&&(l.children=a.map((e=>jn(t,e)))),l}function Ln(t){var o;return t.type!==e.LayoutType.GridLayout?null:jn(t,null===(o=t.setting)||void 0===o?void 0:o.rootItem)}function zn(t){const{layout:o,layoutItemId:i,isLast:n,onDragStart:s,onDragging:l,onDragEnd:r,className:d}=t,u=e.React.useMemo((()=>{const t=o.content[i];return null==t?void 0:t.setting}),[o,i]),c=e.React.useMemo((()=>(null==u?void 0:u.parent)?o.content[u.parent].setting.type:null),[u,o]),p=e.React.useContext(e.AnimationContext),h=e.React.useMemo((()=>{var t,o;return(null===(o=null===(t=null==p?void 0:p.setting)||void 0===t?void 0:t.option)||void 0===o?void 0:o.parentMode)===e.ParentAnimationMode.AllAtOnce?0:250}),[p]),g=e.React.useCallback((()=>c===a.GridItemType.Row?e.css`height: 100%; width: ${u.size}%`:c===a.GridItemType.Column?e.css`width: 100%; height: ${u.size}%`:e.css`width: 100%; height: 100%;`),[null==u?void 0:u.size,c]);if(!u)return null;if(u.type===a.GridItemType.Row)return(0,e.jsx)(kn,{className:d,css:g(),layout:o,layoutItemId:i,items:u.children});if(u.type===a.GridItemType.Column)return(0,e.jsx)(Nn,{className:d,css:g(),layout:o,layoutItemId:i,items:u.children});if(u.type===a.GridItemType.Tab)return(0,e.jsx)($n,{className:d,css:g(),layout:o,layoutItemId:i,items:u.children});const m=function(t,e){var o,i,n;let s=0;const a=t.setting.rootItem,l=t.content[a];if(l&&(null===(i=null===(o=l.setting)||void 0===o?void 0:o.children)||void 0===i?void 0:i.length)>0){const o=[...l.setting.children];for(;o.length>0;){const i=o.shift(),a=t.content[i],l=a.setting.parent,r=t.content[l];if(`${a.id}`===e||r.setting.type===ke.Tab&&r.setting.children.indexOf(+e)>=0)return s;(null===(n=a.setting.children)||void 0===n?void 0:n.length)>0?o.unshift(...a.setting.children):(r.setting.type!==ke.Tab||r.setting.type===ke.Tab&&0===r.setting.children.indexOf(i))&&(s+=1)}}return s}(o,i),f=function(t,e){var o,i,n;let s=t.content[e];if((null===(i=null===(o=null==s?void 0:s.setting)||void 0===o?void 0:o.children)||void 0===i?void 0:i.length)>0)return!1;for(;null!=s;){const e=null===(n=s.setting)||void 0===n?void 0:n.parent;if(null==e)break;const o=t.content[e],i=o.setting.children.length;if(+o.setting.children[i-1]!=+s.id)return!1;s=o}return!0}(o,i);return(0,e.jsx)(Cn,{css:g(),className:(0,e.classNames)(`d-flex ${d}`,{"is-last":n}),layoutId:o.id,layoutItemId:i,delay:m*h,isLastChild:f,onDragStart:s,onDragging:l,onDragEnd:r})}function kn(t){const{layout:n,layoutItemId:s,items:a,className:l}=t,r=e.React.useRef(),d=e.ReactRedux.useSelector((t=>{var o;return(null===(o=t.appRuntimeInfo)||void 0===o?void 0:o.appMode)===e.AppMode.Design})),u=i.hooks.useEventCallback(((t,e)=>{const i=(0,o.getAppConfigAction)(),s=a.indexOf(t),l=a[s+1],r=n.content[t],d=n.content[l];i.editLayoutItemSetting({layoutId:n.id,layoutItemId:t},r.setting.set("size",r.setting.size+e)),i.editLayoutItemSetting({layoutId:n.id,layoutItemId:l},d.setting.set("size",d.setting.size-e)),i.exec()})),c=i.hooks.useEventCallback((t=>{const e=r.current.querySelector(`div[data-layoutitemid="${t}"]`);let o,i;e.nextElementSibling?(o=e.nextElementSibling,i=o.nextElementSibling):(o=e.previousElementSibling,i=o.previousElementSibling);const n=e.parentElement.getBoundingClientRect(),s=e.getBoundingClientRect();e.style.width=`${e.clientWidth}px`,e.style.height=`${e.clientHeight}px`,e.style.left=s.left-n.left+"px",e.style.top=s.top-n.top+"px",e.style.position="absolute",i.style.width=`${e.clientWidth+o.clientWidth+i.clientWidth}px`,o.style.display="none"})),p=i.hooks.useEventCallback((t=>{const e=r.current.querySelector(`div[data-layoutitemid="${t}"]`);let o,i;e.nextElementSibling?(o=e.nextElementSibling,i=o.nextElementSibling):(o=e.previousElementSibling,i=o.previousElementSibling),e.style.width=null,e.style.height=null,e.style.left=null,e.style.top=null,e.style.position=null,i.style.width=null,o.style.display=null}));return(0,e.jsx)("div",{className:`d-flex ${l}`,css:e.css`
      position: ${d?"relative":"initial"};
      .is-last {
        width: auto;
        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: 0;
      }
    `,"data-layoutid":n.id,"data-layoutitemid":s,ref:r},a.map(((t,o)=>{return i=t,s=o===a.length-1,(0,e.jsx)(e.React.Fragment,{key:i},(0,e.jsx)(zn,{key:i,layout:n,layoutItemId:i,onDragStart:c,onDragEnd:p}),!s&&(0,e.jsx)(Mn,{referenceItemId:i,layoutId:n.id,direction:"row",onResizeEnd:u}));var i,s})))}function Nn(t){const{layout:n,layoutItemId:s,items:a,className:l}=t,r=e.React.useRef(),d=e.ReactRedux.useSelector((t=>{var o;return(null===(o=t.appRuntimeInfo)||void 0===o?void 0:o.appMode)===e.AppMode.Design})),u=i.hooks.useEventCallback(((t,e,i)=>{const s=(0,o.getAppConfigAction)(),l=a.indexOf(t),r=a[l+1],d=n.content[t],u=n.content[r];s.editLayoutItemSetting({layoutId:n.id,layoutItemId:t},d.setting.set("size",d.setting.size+i)),s.editLayoutItemSetting({layoutId:n.id,layoutItemId:r},u.setting.set("size",u.setting.size-i)),s.exec()})),c=i.hooks.useEventCallback((t=>{const e=r.current.querySelector(`div[data-layoutitemid="${t}"]`);let o,i;e.nextElementSibling?(o=e.nextElementSibling,i=o.nextElementSibling):(o=e.previousElementSibling,i=o.previousElementSibling);const n=e.parentElement.getBoundingClientRect(),s=e.getBoundingClientRect();e.style.width=`${e.clientWidth}px`,e.style.height=`${e.clientHeight}px`,e.style.left=s.left-n.left+"px",e.style.top=s.top-n.top+"px",e.style.position="absolute",i.style.height=`${e.clientHeight+o.clientHeight+i.clientHeight}px`,o.style.display="none"})),p=i.hooks.useEventCallback((t=>{const e=r.current.querySelector(`div[data-layoutitemid="${t}"]`);let o,i;e.nextElementSibling?(o=e.nextElementSibling,i=o.nextElementSibling):(o=e.previousElementSibling,i=o.previousElementSibling),e.style.width=null,e.style.height=null,e.style.left=null,e.style.top=null,e.style.position=null,i.style.height=null,o.style.display=null}));return(0,e.jsx)("div",{className:`d-flex flex-column ${l}`,css:e.css`
      position: ${d?"relative":"initial"};
      .is-last {
        height: auto;
        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: 0;
      }
    `,"data-layoutid":n.id,"data-layoutitemid":s,ref:r},a.map(((t,o)=>{return i=t,s=o===a.length-1,(0,e.jsx)(e.React.Fragment,{key:i},(0,e.jsx)(zn,{key:i,layout:n,layoutItemId:i,onDragStart:c,onDragEnd:p}),!s&&(0,e.jsx)(Mn,{referenceItemId:i,layoutId:n.id,direction:"col",onResizeEnd:u}));var i,s})))}function $n(t){const{layout:o,layoutItemId:n,items:s,className:a}=t,[l,r]=e.React.useState(0),d=e.React.useRef(),u=e.React.useRef(),c=e.React.useRef(),p=e.React.useMemo((()=>{var t;return null!==(t=o.content[n].setting.active)&&void 0!==t?t:0}),[o,n]);e.React.useEffect((()=>{r(p)}),[p]);const h=i.hooks.useEventCallback((t=>{const e=s.indexOf(t);r(e)})),g=i.hooks.useEventCallback((t=>{const e=s.indexOf(t);e===s.length-1?r(s.length-2):r(e+1)})),m=i.hooks.useEventCallback((t=>{const e=d.current.querySelector(`div[data-layoutitemid="${t}"]`).getBoundingClientRect();u.current=e;const o=ut(e);c.current=document.body.appendChild(o);const i=s.indexOf(t);i===s.length-1?r(s.length-2):r(i+1)})),f=i.hooks.useEventCallback(((t,e,o)=>{const i=e-u.current.left,n=o-u.current.top;c.current.style.transform=`translate(${Math.round(i)}px, ${Math.round(n)}px) translateZ(0)`})),y=i.hooks.useEventCallback((t=>{document.body.removeChild(c.current),c.current=null}));return(0,e.jsx)("div",{className:a,"data-layoutid":o.id,"data-layoutitemid":n,ref:d},(0,e.jsx)(i.Tabs,{type:"tabs",fill:!0,scrollable:!0,className:"w-100 h-100",value:s[l],onChange:h},s.map(((t,i)=>((t,i)=>(0,e.jsx)(Pn,{key:i,id:t,title:`${i}`,layoutId:o.id,layoutItemId:t,onDragStart:g},(0,e.jsx)(zn,{layout:o,layoutItemId:t,onDragStart:m,onDragging:f,onDragEnd:y})))(t,i)))))}var On=p(4247),En=p.n(On);const Dn=t=>{const o=window.SVG,{className:i}=t,n=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o}(t,["className"]),s=(0,e.classNames)("jimu-icon jimu-icon-component",i);return o?e.React.createElement(o,Object.assign({className:s,src:En()},n)):e.React.createElement("svg",Object.assign({className:s},n))},Bn=e.css`
  pointer-events: auto;
`;function Fn(t){return e.css`
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
  `}function Vn(t){const{layoutId:n,pageContext:s,onTemplateSelected:l,onPageTemplateSelected:r}=t,{formatMessage:d,rootLayoutId:u}=s,[c,p]=e.React.useState(!1),[h,m]=e.React.useState(!1),[f,y]=e.React.useState(!1),v=n===u,I=e.React.useRef(null),x=e.React.useRef(null),b=e.React.useRef(null),w=e.ReactRedux.useSelector((t=>{var o,i,n;const s=null!==(n=null===(i=null===(o=t.appConfig)||void 0===o?void 0:o.forBuilderAttributes)||void 0===i?void 0:i.lockLayout)&&void 0!==n&&n;return t.appRuntimeInfo.appMode===e.AppMode.Design&&!s}));i.hooks.useEffectOnce((()=>{v||p(!0)}));const S=d("chooseTemplate",{type:d("grid").toLocaleLowerCase()}),C=d("chooseTemplate",{type:d("page").toLocaleLowerCase()});return w?(0,e.jsx)("div",{className:"w-100 flex-column justify-content-center align-items-center",css:Fn(v)},(0,e.jsx)("div",{className:"d-flex justify-content-center align-items-center"},!v&&(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)(g,{placement:"bottom",title:d("addWidget")},(0,e.jsx)(i.Button,{icon:!0,ref:I,css:Bn,onClick:t=>{t.stopPropagation(),y(!f)},"aria-haspopup":!0},(0,e.jsx)(fe,{size:16}))),(0,e.jsx)(g,{placement:"bottom",title:S},(0,e.jsx)("div",{className:"action-item"},(0,e.jsx)(i.Button,{ref:x,icon:!0,onClick:t=>{t.stopPropagation(),p(!c)},css:Bn,"aria-haspopup":!0},(0,e.jsx)(Dn,{size:16}))))),v&&(0,e.jsx)(g,{placement:"bottom",title:C},(0,e.jsx)("div",{className:"action-item"},(0,e.jsx)(i.Button,{ref:b,icon:!0,onClick:t=>{t.stopPropagation(),m(!h)},css:Bn,className:"rounded-circle","aria-haspopup":!0},(0,e.jsx)(Dn,{size:16}))))),v&&(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)("div",{className:"action-seprator mt-3"}),(0,e.jsx)("div",null,(0,e.jsx)("h5",{className:"btn-text mt-2"},d("dropWidgetToAdd")))),c&&(0,e.jsx)(ue.TemplateSelector,{templates:(0,xi.getGridTemplates)(),referenceElement:x.current,onItemSelect:t=>{p(!1),l(t)},onClose:()=>{p(!1)}}),f&&(0,e.jsx)(ue.WidgetListPopper,{referenceElement:I.current,isAccepted:()=>!0,onSelect:t=>{y(!1);const i=(0,o.getAppConfigAction)(),s={uri:t.uri};e.WidgetManager.getInstance().handleNewWidgetJson(s).then((t=>{var s;const l=e.appConfigUtils.getUniqueId(i.appConfig,"widget");t.id=l,i.createWidget((0,e.Immutable)(t));let r=i.appConfig;const d=r.layouts[n];let u=null===(s=d.setting)||void 0===s?void 0:s.rootItemId;null!=u&&null!=d.content[u]||(u=`${a.utils.getMaximumId(d)+1}`),r=r.setIn(["layouts",n,"setting","rootItem"],u).setIn(["layouts",n,"content",u],{id:u,type:e.LayoutItemType.Widget,widgetId:l,setting:{size:100}}),(0,o.getAppConfigAction)(r).exec()}))},onClose:()=>{y(!1)}}),h&&(0,e.jsx)(ue.TemplateSelector,{templates:(0,xi.getFullScreenGridPageTemplates)(),referenceElement:b.current,onItemSelect:t=>{m(!1),r(t)},onClose:()=>{m(!1)}})):null}const Hn=e.css`
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  background: transparent;
  display: flex;
`,Wn=t=>{var o;const n=(0,c.getTheme2)();return e.css`
    overflow: hidden;
    position: relative;
    padding: ${i.styleUtils.toCSSPadding(null===(o=null==t?void 0:t.style)||void 0===o?void 0:o.padding)};

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

    .${rt} &.drop-target > .grid-root-drop-area,
    .${lt} &.drop-target > .grid-root-drop-area {
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
  `};class Gn extends e.React.PureComponent{constructor(t){super(t),this.handleTemplateSelected=t=>{return e=this,i=void 0,s=function*(){const e=(0,o.getAppConfigAction)().appConfig,{layout:i}=this.props,{appConfig:n,newLayoutId:s}=yield o.templateUtils.createLayoutFromTemplate(e,t,"layout_0",{}),a=n.layouts.set(i.id,n.layouts[s]).setIn([i.id,"id"],i.id).without(s),l=n.set("layouts",a);(0,o.getAppConfigAction)(l).exec()},new((n=void 0)||(n=Promise))((function(t,o){function a(t){try{r(s.next(t))}catch(t){o(t)}}function l(t){try{r(s.throw(t))}catch(t){o(t)}}function r(e){var o;e.done?t(e.value):(o=e.value,o instanceof n?o:new n((function(t){t(o)}))).then(a,l)}r((s=s.apply(e,i||[])).next())}));var e,i,n,s},this.handlePageTemplateSelected=t=>{const i=(0,o.getAppConfigAction)().appConfig;this.setState({isLoadingTemplate:!0}),o.templateUtils.applyPageTemplateToBody(i,this.pageContext.pageId,t).then((({appConfig:t})=>{(0,o.getAppConfigAction)(t).exec(),e.lodash.defer((()=>{this.setState({isLoadingTemplate:!1})}))})).finally(null)},this.highlight=t=>{this.tipRef.current.classList.add("active",t)},this.clearHighlight=t=>{this.tipRef.current.classList.remove("active",t)},a.utils.autoBindHandlers(this,["handleDrop"]);const{layout:i}=this.props;this.fakeLayouts=(0,e.Immutable)({[e.BrowserSizeMode.Large]:`${i.id}_tlarge`,[e.BrowserSizeMode.Medium]:`${i.id}_tmedium`,[e.BrowserSizeMode.Small]:`${i.id}_tsmall`}),this.tipRef=e.React.createRef()}findExtension(){const t=e.ExtensionManager.getInstance().getExtensions(`${e.extensionSpec.ExtensionPoints.LayoutTransformer}`);if((null==t?void 0:t.length)>0){const o=t.find((t=>t.layoutType===e.LayoutType.GridLayout));this.layoutTransform=null==o?void 0:o.transformLayout}}handleDragOver(){}handleDragEnter(){}handleDragLeave(){}handleDrop(t,i,n){const{layout:s}=this.props,a={layoutId:s.id};let l=(0,o.getAppConfigAction)();hn(l.appConfig,t,a,null,sn.Center).then((t=>{const{appConfig:i,layoutInfo:n}=t;l=(0,o.getAppConfigAction)(i),l.exec(),(0,e.getAppStore)().dispatch(e.appActions.selectionChanged(n))}))}handleDropAtSide(t,i){this.clearHighlight(i);const n=this.props.layout.id;let s=(0,o.getAppConfigAction)();this.tipRef.current.parentElement.classList.remove("drop-target"),function(t,e,i,n){return cn(this,void 0,void 0,(function*(){const{layoutInfo:s}=e;let l,r=t;if((null==s?void 0:s.layoutId)===i){const e=(0,o.getAppConfigAction)().detachGridItem(t.layouts[i],s.layoutItemId);r=r.setIn(["layouts",i],e),l=s.layoutItemId}else{const o=yield pn(t,e,{layoutId:i});l=o.newLayoutItemId,r=o.updatedAppConfig}const d=r.layouts[i],u=d.setting.rootItem;let c;c=n===sn.Left||n===sn.Right?an(d,a.GridItemType.Row):an(d,a.GridItemType.Column);let{outLayout:p,outItem:h}=c;return p=p.setIn(["setting","rootItem"],h.id),p=ln(p,h.id,"size",100),p=ln(p,u,"size",50),p=ln(p,u,"parent",h.id),p=ln(p,l,"size",50),p=ln(p,l,"parent",h.id),p=n===sn.Left||n===sn.Top?ln(p,h.id,"children",[l,u]):ln(p,h.id,"children",[u,l]),r=r.setIn(["layouts",i],p),{appConfig:r,itemId:l}}))}(s.appConfig,t,n,i).then((({appConfig:t,itemId:i})=>{s=(0,o.getAppConfigAction)(t),s.exec(),(0,e.getAppStore)().dispatch(e.appActions.selectionChanged({layoutId:n,layoutItemId:i}))}))}render(){var t,o,i,n,s,l,r;const{layouts:d,layout:u,browserSizeMode:c,mainSizeMode:p,className:h}=this.props,g=d[c]!==u.id;let m=u;g&&(null==this.layoutTransform&&this.findExtension(),null!=this.layoutTransform&&(m=this.layoutTransform(u,p,c)));const{rootItem:f}=null!==(t=m.setting)&&void 0!==t?t:{},y=null===(o=m.content)||void 0===o?void 0:o[f],v=(0,e.classNames)("layout grid-layout d-flex w-100 h-100",h),I=null!==(r=null===(l=null===(s=null===(n=null===(i=m.content)||void 0===i?void 0:i[f])||void 0===n?void 0:n.setting)||void 0===s?void 0:s.children)||void 0===l?void 0:l.length)&&void 0!==r?r:0;return(0,e.jsx)(a.PageContext.Consumer,null,(t=>(this.pageContext=t,(0,e.jsx)("div",{className:v,css:Wn(m.setting),"data-layoutid":m.id},(0,e.jsx)(e.IntersectionContext.Provider,{value:{monitor:!1}},(0,e.jsx)(e.OneByOneAnimation,{oid:m.id,"data-layoutid":m.id,className:"trail-container d-flex w-100 h-100",css:e.css`
                    width: 100%;
                  `},null==y&&(0,e.jsx)(me,{css:Hn,layouts:this.props.layouts,highlightDragover:!0,onDragEnter:this.handleDragEnter,onDragLeave:this.handleDragLeave,onDragOver:this.handleDragOver,onDrop:this.handleDrop},(0,e.jsx)("div",{css:e.css`
                          width: 100%;
                          background: var(--cyan-500);
                        `})),null==y&&!g&&(0,e.jsx)(Vn,{layoutId:u.id,pageContext:t,onTemplateSelected:this.handleTemplateSelected,onPageTemplateSelected:this.handlePageTemplateSelected}),y?(0,e.jsx)(zn,{className:"w-100 h-100",layout:m,layoutItemId:f}):this.props.children)),I>1&&[sn.Top,sn.Right,sn.Bottom,sn.Left].map((t=>(0,e.jsx)(me,{key:t,className:`${t} grid-root-drop-area shadow-sm`,layouts:this.fakeLayouts,onDrop:e=>{this.handleDropAtSide(e,t)},onDragEnter:()=>this.highlight(t),onDragLeave:()=>this.clearHighlight(t)}))),(0,e.jsx)("div",{ref:this.tipRef,className:"highlight-area"})))))}}const Zn=e.ReactRedux.connect(a.utils.mapStateToLayoutProps)(Gn);var Un=p(5505);class _n extends e.React.PureComponent{constructor(t){super(t),this.modalStyle={position:"absolute",top:"0",bottom:"0",width:"100%",height:"auto",paddingBottom:"1px"},this.onTransitionSettingChange=t=>{const{layoutId:i,layoutItemId:n}=this.props,s=(0,o.getAppConfigAction)(),a=s.appConfig.layouts[i].content[n];s.editSectionProperty(a.sectionId,"transition",t).exec(),(null==t?void 0:t.type)!==e.TransitionType.None&&this.previewTransition()},this.onHoverEffectChange=t=>{var i,n;const{layoutId:s,layoutItemId:a}=this.props,l=(0,o.getAppConfigAction)(),r=null!==(i=l.appConfig.layouts[s].content[a].setting)&&void 0!==i?i:(0,e.Immutable)({});(null===(n=r.hoverEffect)||void 0===n?void 0:n.type)!==t.type&&l.editLayoutItemSetting({layoutId:s,layoutItemId:a},r.set("hoverEffect",t)).exec(),t.type!==e.HoverType.None&&o.builderAppSync.publishHoverPreviewToApp({layoutInfo:{layoutId:s,layoutItemId:a},id:(0,e.getNextAnimationId)()})},this.onEffectSettingChange=(t,i)=>{const n=e.AnimationTriggerType.ScrollIntoView,{layoutId:s,layoutItemId:a,setting:l}=this.props,r=l||(0,e.Immutable)({}),d=t===e.AnimationPlayMode.OneByOne?"oneByOneEffect":"effect";this.props.onSettingChange({layoutId:s,layoutItemId:a},r.setIn([d,n],i)),(null==i?void 0:i.type)!==e.AnimationType.None&&o.builderAppSync.publishAnimationPreviewToApp({layoutInfo:{layoutId:s,layoutItemId:a},playMode:t,id:(0,e.getNextAnimationId)()})},this.onSectionOneByOneEffectSettingChange=t=>{this.onEffectSettingChange(e.AnimationPlayMode.OneByOne,t)},this.previewAnimation=t=>{this.hasAnimationEffect()&&o.builderAppSync.publishAnimationPreviewToApp({layoutInfo:{layoutId:this.props.layoutId,layoutItemId:this.props.layoutItemId},playMode:t,id:(0,e.getNextAnimationId)()})},this.previewTransition=(t=!1)=>{var i,n,s;const{sectionId:l}=this.props,r=a.searchUtils.getSectionInfo((0,e.getAppStore)().getState().appStateInBuilder,l),{views:d}=r;if((null==d?void 0:d.length)>1){let a=null===(s=null===(n=null===(i=(0,e.getAppStore)().getState().appStateInBuilder)||void 0===i?void 0:i.appRuntimeInfo)||void 0===n?void 0:n.sectionNavInfos)||void 0===s?void 0:s[l];if(!a){const t=Kt(r),o=d.indexOf(t),i=o>0?o-1:o+1;a=(0,e.Immutable)({currentViewId:t,previousViewId:d[i]})}o.builderAppSync.publishSectionNavInfoToApp(l,a.set("playId",(0,e.getNextAnimationId)()).set("withOneByOne",t).asMutable())}},this.previewTransitionAndOnebyOne=()=>{this.previewTransition(!0)},this.previewOneByOneInSection=()=>{this.previewAnimation(e.AnimationPlayMode.OneByOne)},this.previewHover=()=>{this.hasHoverEffect()&&o.builderAppSync.publishHoverPreviewToApp({layoutInfo:{layoutId:this.props.layoutId,layoutItemId:this.props.layoutItemId},id:(0,e.getNextAnimationId)()})},this.onPlayModeChange=t=>{const{layoutId:i,layoutItemId:n,setting:s}=this.props,a=s||(0,e.Immutable)({});let l=(0,o.getAppConfigAction)().appConfig;l=l.setIn(["layouts",i,"content",n,"setting"],a.set("effectPlayMode",t)),(0,o.getAppConfigAction)(l).exec()},this.switchToIn=()=>{this.setState({animationType:"in"})},this.switchToTransition=()=>{this.setState({animationType:"transition"})},this.switchToHover=()=>{this.setState({animationType:"hover"})},this.state={animationType:"in"}}hasAnimationEffect(){var t,o;const{setting:i}=this.props,n=null===(t=null==i?void 0:i.effect)||void 0===t?void 0:t[e.AnimationTriggerType.ScrollIntoView],s=null===(o=null==i?void 0:i.oneByOneEffect)||void 0===o?void 0:o[e.AnimationTriggerType.ScrollIntoView];return n&&n.type!==e.AnimationType.None||s&&s.type!==e.AnimationType.None}hasHoverEffect(){const{setting:t}=this.props,o=null==t?void 0:t.hoverEffect;return o&&o.type!==e.HoverType.None}render(){var t,o;const{formatMessage:n,isLayoutWidget:s,isSection:a,transitionType:l,transitionDirection:r,setting:d}=this.props,{animationType:u}=this.state,c=null===(t=null==d?void 0:d.effect)||void 0===t?void 0:t[e.AnimationTriggerType.ScrollIntoView],p=null===(o=null==d?void 0:d.oneByOneEffect)||void 0===o?void 0:o[e.AnimationTriggerType.ScrollIntoView];return(0,e.jsx)(ue.SettingSection,{role:"group","aria-label":n("animation"),title:n("animation")},a&&(0,e.jsx)(ue.SettingRow,null,(0,e.jsx)(i.AdvancedButtonGroup,{className:"w-100",css:e.css`
              border-bottom: 1px solid var(--primary-500);
              .jimu-btn {
                width: 50%;
                border-radius: 2px 2px 0 0;
              }
            `},(0,e.jsx)(i.Button,{active:"in"===u,onClick:this.switchToIn},n("in")),(0,e.jsx)(i.Button,{className:"ml-1",active:"transition"===u,onClick:this.switchToTransition},n("transition")))),"in"===u&&(0,e.jsx)(ue.SettingRow,null,(0,e.jsx)(Un.AnimationSettingComponent,{effectSetting:c,oneByOneSetting:p,onSettingChange:this.onEffectSettingChange,previewEnabled:!0,supportAsOne:!0,supportOneByOne:s,onPreviewClicked:this.previewAnimation,formatMessage:n})),"transition"===u&&(0,e.jsx)(ue.SettingRow,{flow:"wrap"},(0,e.jsx)(Un.TransitionSetting,{transition:{type:l,direction:r},transitionLabel:n("view"),oneByOneEffect:p,onOneByOneChange:this.onSectionOneByOneEffectSettingChange,onTransitionChange:this.onTransitionSettingChange,onPreviewTransitionClicked:this.previewTransition,onPreviewOneByOneClicked:this.previewOneByOneInSection,onPreviewAsAWhoneClicked:this.previewTransitionAndOnebyOne,formatMessage:n})))}}const Yn=e.ReactRedux.connect(((t,o)=>{var i,n,s,a,l,r,d;const u=null===(n=null===(i=t.appStateInBuilder)||void 0===i?void 0:i.appConfig)||void 0===n?void 0:n.layouts[o.layoutId].content[o.layoutItemId];let c,p,h,g=!1;const m=(null==u?void 0:u.type)===e.LayoutItemType.Section,f=(null==u?void 0:u.type)===e.LayoutItemType.Widget;if(f){const o=null===(s=t.appStateInBuilder)||void 0===s?void 0:s.appConfig.widgets[u.widgetId];g=(null===(a=null==o?void 0:o.manifest)||void 0===a?void 0:a.widgetType)===e.WidgetType.Layout}if(m){const e=null===(l=t.appStateInBuilder)||void 0===l?void 0:l.appConfig.sections[u.sectionId];h=e.id,c=null===(r=e.transition)||void 0===r?void 0:r.type,p=null===(d=e.transition)||void 0===d?void 0:d.direction}return{setting:u.setting,isLayoutWidget:g,isSection:m,isWidget:f,transitionType:c,transitionDirection:p,sectionId:h}}))(_n);class Xn extends e.React.PureComponent{constructor(){super(...arguments),this.onBackgroundStyleChange=t=>{this.updateStyle("background",t)},this.updateBorder=t=>{this.updateStyle("border",t)},this.updateRadius=t=>{this.updateStyle("borderRadius",t)},this.updateShadow=t=>{this.updateStyle("boxShadow",t)},this.formatMessage=t=>this.props.formatMessage(t)}updateStyle(t,o){var i;const n=(0,e.Immutable)(null!==(i=this.props.style)&&void 0!==i?i:{});this.props.onStyleChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItemId},n.set(t,o))}allowCoverBackground(){var t,i,n;const{layoutId:s,layoutItemId:a}=this.props,l=(0,o.getAppConfigAction)().appConfig,r=l.layouts[s].content[a];if(r.type===e.LayoutItemType.Widget){const e=r.widgetId;return null===(n=null===(i=null===(t=l.widgets[e])||void 0===t?void 0:t.manifest)||void 0===i?void 0:i.properties)||void 0===n?void 0:n.coverLayoutBackground}return!1}render(){const{layoutId:t,layoutItemId:o}=this.props,i=this.props.style||{};return(0,e.jsx)("div",{className:"common-layout-item-setting"},(0,e.jsx)(Yn,{layoutId:t,layoutItemId:o,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage}),!this.props.isSection&&!this.allowCoverBackground()&&(0,e.jsx)(Un.ThemeBackgroundSection,{background:i.background,onChange:this.onBackgroundStyleChange}),(0,e.jsx)(Un.ThemeBorderSection,{border:i.border,borderRadius:i.borderRadius,onBorderChange:this.updateBorder,onBorderRasiusChange:this.updateRadius}),(0,e.jsx)(Un.ThemeBoxShadowSection,{value:i.boxShadow,onChange:this.updateShadow}))}}class qn extends e.React.PureComponent{constructor(){super(...arguments),this.updateRotation=t=>{var o;const i=(0,e.Immutable)(null!==(o=this.props.setting)&&void 0!==o?o:{});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItemId},i.setIn(["style","transform","rotate"],t))},this.formatMessage=t=>this.props.formatMessage(t)}render(){var t,o,n;const s=this.props.setting||{};return(0,e.jsx)(ue.SettingRow,{label:this.formatMessage("rotation"),className:"rotation-setting"},(0,e.jsx)(i.NumericInput,{"aria-label":this.formatMessage("rotation"),value:null!==(n=null===(o=null===(t=s.style)||void 0===t?void 0:t.transform)||void 0===o?void 0:o.rotate)&&void 0!==n?n:0,min:-360,max:360,onChange:this.updateRotation,formatter:t=>`${t}°`,parser:t=>t.replace("°",""),style:{width:"7.5rem"},size:"sm"}))}}var Jn=p(2653),Qn=p.n(Jn);const Kn=t=>{const o=window.SVG,{className:i}=t,n=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o}(t,["className"]),s=(0,e.classNames)("jimu-icon jimu-icon-component",i);return o?e.React.createElement(o,Object.assign({className:s,src:Qn()},n)):e.React.createElement("svg",Object.assign({className:s},n))},ts=[i.DistanceUnits.PIXEL,i.DistanceUnits.PERCENTAGE];class es extends e.React.PureComponent{constructor(t){super(t),this.updateBBox=(t,e)=>{const o=this.props.layoutItem.bbox,{distance:n,unit:s}=e,l=o[t];let r=n.toFixed(2);if(a.utils.isPercentage(l)&&s===i.DistanceUnits.PIXEL){const e=this.getSizeOfContainer();null!=e&&(r="left"===t||"right"===t||"width"===t?Math.round(parseFloat(l)*e.width/100):Math.round(parseFloat(l)*e.height/100))}else if(!a.utils.isPercentage(l)&&s===i.DistanceUnits.PERCENTAGE){const e=this.getSizeOfContainer();null!=e&&(r="left"===t||"right"===t||"width"===t?(100*parseFloat(l)/e.width).toFixed(2):(100*parseFloat(l)/e.height).toFixed(2))}this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o.set(t,e.unit===i.DistanceUnits.PERCENTAGE?`${r}%`:`${r}px`))},this.flipLeftRight=a.utils.isRTL()}getStyle(){return e.css`
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
    `}inputUnit(t){const{layoutItem:o,formatMessage:n}=this.props,s=i.utils.stringOfLinearUnit(o.bbox[t]);return(0,e.jsx)("div",{className:"pos-label",role:"group","aria-label":n(t)},(0,e.jsx)(Un.InputUnit,{units:ts,min:-1/0,max:1/0,value:s,onChange:e=>this.updateBBox(t,e)}))}getSizeOfContainer(){const t=this.querySelector(`div.fixed-layout[data-layoutid="${this.props.layoutId}"]`);return null==t?void 0:t.getBoundingClientRect()}getSizeOfItem(){const{layoutId:t,layoutItem:e}=this.props,o=this.querySelector(`div.exb-rnd[data-layoutid="${t}"][data-layoutitemid="${e.id}"]`);return null==o?void 0:o.getBoundingClientRect()}querySelector(t){var o;const i=document.querySelector(`iframe[name="${e.APP_FRAME_NAME_IN_BUILDER}"]`);return null!=i?(null!==(o=i.contentDocument)&&void 0!==o?o:i.contentWindow.document).querySelector(t):null}switchAuto(t,o,i){var n,s;const{layoutId:l,layoutItem:r}=this.props,d=null!==(n=r.setting)&&void 0!==n?n:(0,e.Immutable)({});let u=null!==(s=r.bbox)&&void 0!==s?s:(0,e.Immutable)({});if(i&&null==u[t]){const e=this.getSizeOfContainer(),o=this.getSizeOfItem();switch(t){case"left":u=u.set(t,a.utils.toRatio(o.left,e.width));break;case"right":u=u.set(t,a.utils.toRatio(e.width-o.right,e.width));break;case"top":u=u.set(t,a.utils.toRatio(o.top,e.height));break;case"bottom":u=u.set(t,a.utils.toRatio(e.height-o.bottom,e.height))}this.props.onPosChange({layoutId:l,layoutItemId:r.id},u)}this.props.onSettingChange({layoutId:l,layoutItemId:r.id},d.setIn(["autoProps",t],!i).setIn(["autoProps",o],i))}checkAutoProps(t){const e=Jo(this.props.layoutItem.bbox,t);return{leftAuto:null==e.left||t.hCenter&&"50%"===e.left,rightAuto:null==e.right||t.hCenter&&"50%"===e.left,topAuto:null==e.top||t.vCenter&&"50%"===e.top,bottomAuto:null==e.bottom||t.vCenter&&"50%"===e.top}}checkOrigin(t,e,o,i){let n=t,s=e,l=o,r=i;return t===e&&(n=a.utils.isRTL(),s=!n),o===i&&(l=!1,r=!0),{top:l,bottom:r,left:n,right:s}}allowChangeAutoProps(t){var e;const o=this.props.layoutItem.setting,i=null!==(e=null==o?void 0:o.autoProps)&&void 0!==e?e:{};return!(a.utils.getLayoutItemSizeMode(t,this.props.layoutItem.bbox,i)===a.LayoutItemSizeModes.Stretch||"width"===t&&(null==o?void 0:o.hCenter)||"height"===t&&(null==o?void 0:o.vCenter))}getOrigin(t,e,o,i){const{formatMessage:n}=this.props;return t||e?o||e?o||i?t||i?"":this.flipLeftRight?n("BR"):n("BL"):this.flipLeftRight?n("BL"):n("BR"):this.flipLeftRight?n("TL"):n("TR"):this.flipLeftRight?n("TR"):n("TL")}render(){const{layoutItem:t,widthMode:o,heightMode:n,formatMessage:l}=this.props;if(null==t)return null;const r=e.lodash.assign({},s,t.setting),{leftAuto:d,rightAuto:u,topAuto:c,bottomAuto:p}=this.checkAutoProps(r),{top:h,bottom:g,left:m,right:f}=this.checkOrigin(d,u,c,p),y=this.allowChangeAutoProps("width"),v=this.allowChangeAutoProps("height");return(0,e.jsx)("div",{css:this.getStyle(),className:"w-100"},(0,e.jsx)("div",{className:"position-setting rounded-lg"},(0,e.jsx)("div",{className:"content d-flex justify-content-center align-items-center"},(0,e.jsx)("div",{className:"d-flex w-half flex-column justify-content-center align-items-center"},(0,e.jsx)("div",{className:"d-flex w-100 justify-content-center align-items-center"},(0,e.jsx)(i.Tooltip,{placement:"bottom",title:y?l(d?"changeToCustom":"changeToAuto"):""},(0,e.jsx)("div",{className:(0,e.classNames)("from-left line-h flex-grow-1 flex-shrink-1",{"is-auto":d,"allow-change":y}),onClick:y?this.switchAuto.bind(this,"left","right",d):null})),d?null:this.inputUnit("left"))),(0,e.jsx)("div",{className:"d-flex h-100 flex-column justify-content-center align-items-center box-column"},(0,e.jsx)("div",{className:"d-flex h-half w-100 flex-column justify-content-center align-items-center"},(0,e.jsx)(i.Tooltip,{placement:"bottom",title:v?l(c?"changeToCustom":"changeToAuto"):""},(0,e.jsx)("div",{className:(0,e.classNames)("from-top line-v flex-grow-1 flex-shrink-1",{"is-auto":c,"allow-change":v}),onClick:v?this.switchAuto.bind(this,"top","bottom",c):null})),c?null:this.inputUnit("top")),(0,e.jsx)("div",{className:(0,e.classNames)("box-item rounded-lg",{stretch:o===a.LayoutItemSizeModes.Stretch||n===a.LayoutItemSizeModes.Stretch,"stretch-w":o===a.LayoutItemSizeModes.Stretch,"stretch-h":n===a.LayoutItemSizeModes.Stretch})},(0,e.jsx)("div",{className:"h-arrow"},(0,e.jsx)(Kn,{className:"arrow-icon"})),(0,e.jsx)("div",{className:"v-arrow"},(0,e.jsx)(Kn,{className:"arrow-icon",rotate:90}))),(0,e.jsx)("div",{className:"d-flex h-half w-100 flex-column justify-content-center align-items-center"},(0,e.jsx)(i.Tooltip,{placement:"bottom",title:v?l(p?"changeToCustom":"changeToAuto"):""},(0,e.jsx)("div",{className:(0,e.classNames)("from-bottom line-v flex-grow-1 flex-shrink-1",{"is-auto":p,"allow-change":v}),onClick:v?this.switchAuto.bind(this,"bottom","top",p):null})),p?null:this.inputUnit("bottom"))),(0,e.jsx)("div",{className:"d-flex w-half flex-column justify-content-center align-items-center"},(0,e.jsx)("div",{className:"d-flex w-100 justify-content-center align-items-center"},(0,e.jsx)(i.Tooltip,{placement:"bottom",title:y?l(u?"changeToCustom":"changeToAuto"):""},(0,e.jsx)("div",{className:(0,e.classNames)("from-right line-h flex-grow-1 flex-shrink-1",{"is-auto":u,"allow-change":y}),onClick:y?this.switchAuto.bind(this,"right","left",u):null})),u?null:this.inputUnit("right"))),(0,e.jsx)("div",{className:(0,e.classNames)("anchor top left",{selected:!m&&!h})}),(0,e.jsx)("div",{className:(0,e.classNames)("anchor top right",{selected:!f&&!h})}),(0,e.jsx)("div",{className:(0,e.classNames)("anchor bottom left",{selected:!m&&!g})}),(0,e.jsx)("div",{className:(0,e.classNames)("anchor bottom right",{selected:!g&&!f})}))),(0,e.jsx)("div",{className:"origin-tip d-flex justify-content-center align-item-center"},this.getOrigin(m,h,f,g)))}}const os=[a.LayoutItemSizeModes.Auto,a.LayoutItemSizeModes.Custom,a.LayoutItemSizeModes.Stretch],is=[a.LayoutItemSizeModes.Custom,a.LayoutItemSizeModes.Stretch],ns=[...[Go[1][1],Go[1][2],Go[1][3],Go[1][4],{seperator:!0},Go[0][1],Go[0][2],Go[0][3]].map((t=>Object.assign(Object.assign({},t),{title:t.title,label:null}))),[{icon:go()},Go[0][4],Go[0][5],Go[0][6],{seperator:!0},Go[0][7],Go[0][8],Go[0][9]]];class ss extends e.React.PureComponent{constructor(t){super(t),this.updateBBox=(t,e)=>{var o;let n=this.props.layoutItem.bbox;const{distance:s,unit:l}=e,r=n[t],d=this.getSizeOfContainer();let u,c=s.toFixed(2);if(a.utils.isPercentage(r)&&l===i.DistanceUnits.PIXEL?d&&(c="left"===t||"right"===t||"width"===t?Math.round(parseFloat(r)*d.width/100):Math.round(parseFloat(r)*d.height/100),u=c):a.utils.isPercentage(r)||l!==i.DistanceUnits.PERCENTAGE||(d&&(c="left"===t||"right"===t||"width"===t?(100*parseFloat(r)/d.width).toFixed(4):(100*parseFloat(r)/d.height).toFixed(4)),u=parseFloat(r)),u||l!==i.DistanceUnits.PERCENTAGE)u||l!==i.DistanceUnits.PIXEL||(u=s);else{const e="width"===t?d.width:d.height;u=Math.round(s*e/100)}if(n=n.set(t,l===i.DistanceUnits.PERCENTAGE?`${c}%`:`${c}px`),"ratio"===(null===(o=this.props.layoutItem.setting)||void 0===o?void 0:o.heightMode)){const e=a.utils.parseAspectRatio(this.props.layoutItem.setting.aspectRatio);if("width"===t){const t=u*e;if(a.utils.isPercentage(n.height)){const e=(100*t/d.height).toFixed(4);n=n.set("height",`${e}%`)}else n=n.set("height",`${Math.round(t)}px`)}else{const t=u/e;if(a.utils.isPercentage(n.width)){const e=(100*t/d.width).toFixed(4);n=n.set("width",`${e}%`)}else n=n.set("width",`${Math.round(t)}px`)}}this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},n)},this.updateMode=(t,o)=>{var i;const n=null!==(i=this.props.layoutItem.setting)&&void 0!==i?i:(0,e.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},n.setIn(["autoProps",t],o))},this.updateLockParent=t=>{let o=this.props.layoutItem.setting||(0,e.Immutable)({});o=o.set("lockParent",t.target.checked),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)},this.toggleHeightMode=()=>{let t=this.props.layoutItem.setting||(0,e.Immutable)({});const o="ratio"===t.heightMode?"fixed":"ratio";if(t=t.set("heightMode",o),"ratio"===o){const e=this.getSizeOfItem();e&&(t=t.set("aspectRatio",Number((e.height/e.width).toFixed(2))))}this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},t)},this.updateAspectRatio=t=>{let o=this.props.layoutItem.setting||(0,e.Immutable)({});o=o.set("aspectRatio",t),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)},this.flipLeftRight=a.utils.isRTL(),this.state={enableToolbar:!1}}componentDidMount(){this.ref&&this.setState({enableToolbar:!0})}getSizeOfContainer(){const t=this.querySelector(`div.fixed-layout[data-layoutid="${this.props.layoutId}"]`);return t?t.getBoundingClientRect():null}getSizeOfItem(){const{layoutId:t,layoutItem:e}=this.props,o=this.querySelector(`div.exb-rnd[data-layoutid="${t}"][data-layoutitemid="${e.id}"]`);return o?o.getBoundingClientRect():null}querySelector(t){const o=document.querySelector(`iframe[name="${e.APP_FRAME_NAME_IN_BUILDER}"]`);return o?(o.contentDocument||o.contentWindow.document).querySelector(t):null}getStyle(){return e.css`
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
    `}render(){const{layoutItem:t,layoutId:o,formatMessage:n,isLockLayout:l,supportAutoSize:r}=this.props;if(!t)return null;this.itemSetting=e.lodash.assign({},s,t.setting);const d="ratio"===this.itemSetting.heightMode,u=a.utils.getLayoutItemSizeMode("width",t.bbox,this.itemSetting.autoProps),p=a.utils.getLayoutItemSizeMode("height",t.bbox,this.itemSetting.autoProps),h=t.bbox,g=(0,c.getTheme)(),m=e.css`width: 60%`;return(0,e.jsx)("div",{className:"fixed-item-setting",css:this.getStyle(),ref:t=>this.ref=t},!l&&this.state.enableToolbar&&(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)(ue.SettingSection,{className:"p-0 d-flex justify-content-center"},(0,e.jsx)(bt,{layoutId:o,layoutItem:t,parentRef:this.ref,theme:g,tools:ns,formatMessage:this.props.formatMessage})),(0,e.jsx)(ue.SettingSection,{role:"group","aria-label":`${n("size")} & ${n("position")}`,title:`${n("size")} & ${n("position")}`},(0,e.jsx)(ue.SettingRow,{role:"group","aria-label":n("width"),label:n("width")},(0,e.jsx)("div",{css:m},(0,e.jsx)(Un.SizeEditor,{label:"W",mode:u,sizeModes:r&&!d?os:is,value:i.utils.stringOfLinearUnit(h.width),onChange:t=>this.updateBBox("width",t),onModeChange:t=>this.updateMode("width",t)}))),u!==a.LayoutItemSizeModes.Auto&&(0,e.jsx)("div",null,(0,e.jsx)(i.Tooltip,{title:n("keepAspectRatio"),placement:"bottom"},(0,e.jsx)(i.Button,{size:"sm",type:"tertiary",className:"ml-1",icon:!0,onClick:this.toggleHeightMode,"aria-pressed":d},d?(0,e.jsx)(le,{size:"s"}):(0,e.jsx)(vn,{size:"s"})))),(0,e.jsx)(ue.SettingRow,{role:"group","aria-label":n("height"),label:n("height"),className:(0,e.classNames)({"mt-0":u!==a.LayoutItemSizeModes.Auto})},(0,e.jsx)("div",{css:m},(0,e.jsx)(Un.SizeEditor,{label:"H",mode:p,sizeModes:r?os:is,disabled:d,value:i.utils.stringOfLinearUnit(h.height),onChange:t=>this.updateBBox("height",t),onModeChange:t=>this.updateMode("height",t)}))),d&&(0,e.jsx)(ue.SettingRow,{label:n("aspectRatio")},(0,e.jsx)(Un.InputRatio,{value:this.itemSetting.aspectRatio,style:{width:"7.5rem"},onChange:this.updateAspectRatio})),(0,e.jsx)(ue.SettingRow,null,(0,e.jsx)(es,Object.assign({},this.props,{widthMode:u,heightMode:p}))),(0,e.jsx)(qn,{layoutId:o,layoutItemId:t.id,setting:t.setting,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage})),(0,e.jsx)(ue.SettingSection,null,(0,e.jsx)(ue.SettingRow,{label:n("lockParent")},(0,e.jsx)(i.Switch,{"aria-label":n("lockParent"),checked:this.itemSetting.lockParent,onChange:this.updateLockParent})))),(t.widgetId||t.sectionId)&&(0,e.jsx)(Xn,{layoutId:o,layoutItemId:t.id,style:this.props.style,isSection:t.type===e.LayoutItemType.Section,onStyleChange:this.props.onStyleChange,formatMessage:this.props.formatMessage,setting:t.setting||(0,e.Immutable)({}),onSettingChange:this.props.onSettingChange}))}}const as={gutter:0,style:{padding:{number:[0],unit:"px"},justifyContent:"flex-start",alignItems:"stretch",borderRadius:{number:[0],unit:i.DistanceUnits.PIXEL}}},ls={lockParent:!0,heightMode:"auto",offsetX:0,offsetY:0};function rs(t){const e=parseFloat(null==t?void 0:t.width);return e>0?`${t.width}`.includes("px")?`${Math.round(e)}px`:`${Math.round(e)}%`:"100%"}const ds={[e.ScreenTransitionType.Push]:p(8830),[e.ScreenTransitionType.Fade]:p(3167),[e.ScreenTransitionType.Cover]:p(8830)};class us extends e.React.PureComponent{constructor(){super(...arguments),this.onTypeChanged=(t,e,o)=>{o?this.props.onPanelTransitionTypeChange(e):this.props.onTransitionTypeChange(e)},this.updateFirstPanel=t=>{}}getStyle(){return e.css`
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
    `}createAnimationCard(t,o,n=!1){const{transitionType:s,panelTransitionType:a}=this.props;let l;return l=n?null!=a?a:e.ScreenTransitionType.Push:null!=s?s:e.ScreenTransitionType.Fade,(0,e.jsx)("div",{className:(0,e.classNames)("d-flex flex-column align-items-center card-item",{selected:t===l}),key:o,onClick:e=>this.onTypeChanged(e,t,n)},(0,e.jsx)("div",{className:"d-flex justify-content-center card-content"},(0,e.jsx)("div",{className:"card-image"},(0,e.jsx)(i.Icon,{className:"w-100",currentColor:!1,icon:ds[t],size:72}))),(0,e.jsx)("div",{className:"card-name flex-grow-1 d-flex align-items-start mt-1"},(0,e.jsx)("span",{className:"text-center text-truncate card-name-content",title:this.props.formatMessage(t.toLowerCase())},this.props.formatMessage(t.toLowerCase()))))}render(){const{formatMessage:t}=this.props;return(0,e.jsx)("div",{className:"bg-light-300 border-color-gray-400",css:this.getStyle()},(0,e.jsx)(ue.SettingSection,{title:t("mainStage")},(0,e.jsx)("div",{className:"animation-cards"},[e.ScreenTransitionType.Fade,e.ScreenTransitionType.Cover,e.ScreenTransitionType.Push].map(((t,e)=>this.createAnimationCard(t,e))))),(0,e.jsx)(ue.SettingSection,{title:t("scrollingPanel")},(0,e.jsx)("div",{className:"animation-cards"},[e.ScreenTransitionType.Push,e.ScreenTransitionType.Fade].map(((t,e)=>this.createAnimationCard(t,e,!0))))),(0,e.jsx)(ue.SettingSection,null,(0,e.jsx)(ue.SettingRow,null,(0,e.jsx)(i.Checkbox,{onChange:this.updateFirstPanel,className:"mr-2"}),t("applyToFirstPanel"))))}}const cs=p(9781);class ps extends e.React.PureComponent{constructor(t){super(t),this.sidePopperTrigger=e.React.createRef(),this.onTransitionTypeChange=t=>{const{screenGroupId:e}=this.props.layoutItem;let i=(0,o.getAppConfigAction)().appConfig;i=i.setIn(["screenGroups",e,"transitionType"],t),(0,o.getAppConfigAction)(i).exec()},this.onPanelTransitionTypeChange=t=>{const{screenGroupId:e}=this.props.layoutItem;let i=(0,o.getAppConfigAction)().appConfig;i=i.setIn(["screenGroups",e,"panelTransitionType"],t),(0,o.getAppConfigAction)(i).exec()},this.toggleSidePanel=()=>{this.setState({showSidePanel:!this.state.showSidePanel})},this.state={showSidePanel:!1}}getAnimBoxStyle(){return e.css`
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
    `}render(){var t,o,n,s,a;const{formatMessage:l}=this.props,r=null!==(t=this.props.transitionType)&&void 0!==t?t:e.ScreenTransitionType.Fade,d=null!==(o=this.props.panelTransitionType)&&void 0!==o?o:e.ScreenTransitionType.Push;return(0,e.jsx)(ue.SettingSection,{title:l("transition")},(0,e.jsx)("div",{className:"anima-box d-flex justify-content-between align-items-center",css:this.getAnimBoxStyle()},(0,e.jsx)("div",{className:"img-tip d-flex justify-content-center align-items-center",onClick:this.toggleSidePanel},(0,e.jsx)("div",{className:"anim-icon first has-sibling"},(0,e.jsx)(i.Icon,{icon:null!==(n=ds[r])&&void 0!==n?n:cs,size:32})),(0,e.jsx)("div",{className:"diag-sep"}),(0,e.jsx)("div",{className:"anim-icon second has-sibling"},(0,e.jsx)(i.Icon,{icon:null!==(s=ds[d])&&void 0!==s?s:cs,size:32}))),(0,e.jsx)("div",{className:"d-flex flex-column justify-content-between align-items-end h-100"},(0,e.jsx)("div",{className:"anim-label"},(0,e.jsx)("span",null,l(r.toLowerCase())),(0,e.jsx)("span",{className:"mx-1"},"/"),(0,e.jsx)("span",null,l(d.toLowerCase()))),(0,e.jsx)("div",{className:"amin-icons w-100",ref:this.sidePopperTrigger},(0,e.jsx)(i.Button,{size:"sm",onClick:this.toggleSidePanel,className:"text-truncate",title:l("change")},l("change"))))),this.state.showSidePanel&&(0,e.jsx)(ue.SidePopper,{isOpen:!0,title:l("transition"),css:this.getSidePopperStyle(),position:"right",toggle:this.toggleSidePanel,trigger:null===(a=this.sidePopperTrigger)||void 0===a?void 0:a.current},(0,e.jsx)("div",{className:"side-content"},(0,e.jsx)(us,{transitionType:r,panelTransitionType:d,onTransitionTypeChange:this.onTransitionTypeChange,onPanelTransitionTypeChange:this.onPanelTransitionTypeChange,formatMessage:l}))))}}const hs=e.ReactRedux.connect(((t,e)=>{const{screenGroupId:o}=e.layoutItem,{appConfig:i}=t.appStateInBuilder;return{transitionType:i.screenGroups[o].transitionType,panelTransitionType:i.screenGroups[o].panelTransitionType}}))(ps),gs={width:110};class ms extends e.React.PureComponent{constructor(){super(...arguments),this.updateWidth=t=>{let o=this.props.layoutItem.setting||(0,e.Immutable)({});o=o.set("width",i.utils.stringOfLinearUnit(t)),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)},this.updateBBoxWidth=t=>{let o=(0,e.Immutable)(this.props.layoutItem.bbox||{});o=o.set("width",i.utils.stringOfLinearUnit(t)),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)},this.updateHeight=t=>{let o=(0,e.Immutable)(this.props.layoutItem.bbox||{});o=o.set("height",i.utils.stringOfLinearUnit(t)),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)},this.updateOffsetX=t=>{const o=this.props.layoutItem.setting||(0,e.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o.set("offsetX",t))},this.updateOffsetY=t=>{const o=this.props.layoutItem.setting||(0,e.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o.set("offsetY",t))},this.updateHeightMode=t=>{let o=this.props.layoutItem.setting||(0,e.Immutable)({});o=o.set("heightMode",t===a.LayoutItemSizeModes.Custom?"fixed":"auto"),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)}}updateFloatingArea(t){const o=this.props.layoutItem.setting||(0,e.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o.set("floatingArea",t))}getStyle(){return e.css`
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
    `}render(){const{layoutId:t,layoutItem:o,formatMessage:n,isLockLayout:s}=this.props;if(!o)return null;if(o.type===e.LayoutItemType.ScreenGroup)return(0,e.jsx)(hs,Object.assign({},this.props));this.itemSetting=e.lodash.assign({},ls,o.setting);const l=o.bbox;return(0,e.jsx)("div",{className:"flow-item-setting",css:this.getStyle()},!s&&(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)(ue.SettingSection,{title:`${n("position")} & ${n("size")}`},(0,e.jsx)("div",{className:"floating-position d-flex"},(0,e.jsx)("div",{className:"floating-area-chooser"},(0,e.jsx)("div",{className:"content"},(0,e.jsx)("div",{className:(0,e.classNames)("top-left",{selected:1===this.itemSetting.floatingArea}),onClick:this.updateFloatingArea.bind(this,1)}),(0,e.jsx)("div",{className:(0,e.classNames)("top-center",{selected:2===this.itemSetting.floatingArea}),onClick:this.updateFloatingArea.bind(this,2)}),(0,e.jsx)("div",{className:(0,e.classNames)("top-right",{selected:3===this.itemSetting.floatingArea}),onClick:this.updateFloatingArea.bind(this,3)}),(0,e.jsx)("div",{className:(0,e.classNames)("middle-left",{selected:4===this.itemSetting.floatingArea}),onClick:this.updateFloatingArea.bind(this,4)}),(0,e.jsx)("div",{className:(0,e.classNames)("middle-center",{selected:5===this.itemSetting.floatingArea}),onClick:this.updateFloatingArea.bind(this,5)}),(0,e.jsx)("div",{className:(0,e.classNames)("middle-right",{selected:6===this.itemSetting.floatingArea}),onClick:this.updateFloatingArea.bind(this,6)}),(0,e.jsx)("div",{className:(0,e.classNames)("bottom-left",{selected:7===this.itemSetting.floatingArea}),onClick:this.updateFloatingArea.bind(this,7)}),(0,e.jsx)("div",{className:(0,e.classNames)("bottom-center",{selected:8===this.itemSetting.floatingArea}),onClick:this.updateFloatingArea.bind(this,8)}),(0,e.jsx)("div",{className:(0,e.classNames)("bottom-right",{selected:9===this.itemSetting.floatingArea}),onClick:this.updateFloatingArea.bind(this,9)}))),(0,e.jsx)("div",{className:"d-flex flex-grow-1 flex-column justify-content-between align-items-end"},(0,e.jsx)("div",{className:"d-flex align-items-center",css:e.css`width: 110px`},(0,e.jsx)("span",{className:"mr-2"},"W"),(0,e.jsx)(Un.SizeEditor,{label:"W",mode:a.LayoutItemSizeModes.Custom,disableModeSelect:!0,value:null==l?void 0:l.width,onChange:this.updateBBoxWidth})),(0,e.jsx)("div",{className:"d-flex align-items-center",css:e.css`width: 110px`},(0,e.jsx)("span",{className:"mr-2"},"H"),(0,e.jsx)(Un.SizeEditor,{label:"H",mode:a.LayoutItemSizeModes.Custom,disableModeSelect:!0,value:null==l?void 0:l.height,onChange:this.updateHeight})))),(0,e.jsx)(ue.SettingRow,{label:n("offsetX")},(0,e.jsx)(i.NumericInput,{style:gs,value:this.itemSetting.offsetX,onChange:this.updateOffsetX,size:"sm"})),(0,e.jsx)(ue.SettingRow,{label:n("offsetY")},(0,e.jsx)(i.NumericInput,{style:gs,value:this.itemSetting.offsetY,onChange:this.updateOffsetY,size:"sm"})))),(o.widgetId||o.sectionId)&&(0,e.jsx)(Xn,{layoutId:t,layoutItemId:o.id,isSection:!1,style:this.props.style,onStyleChange:this.props.onStyleChange,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage}))}}const fs={width:110},ys=[a.LayoutItemSizeModes.Auto,a.LayoutItemSizeModes.Custom],vs=[i.DistanceUnits.PIXEL];class Is extends e.React.PureComponent{constructor(){super(...arguments),this.updateWidth=t=>{let o=this.props.layoutItem.setting||(0,e.Immutable)({});o=o.set("width",i.utils.stringOfLinearUnit(t)),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)},this.updateBBoxWidth=t=>{let o=(0,e.Immutable)(this.props.layoutItem.bbox||{});o=o.set("width",i.utils.stringOfLinearUnit(t)),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)},this.updateHeight=t=>{let o=(0,e.Immutable)(this.props.layoutItem.bbox||{});o=o.set("height",i.utils.stringOfLinearUnit(t)),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)},this.updateOffsetX=t=>{const o=this.props.layoutItem.setting||(0,e.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o.set("offsetX",t))},this.updateOffsetY=t=>{const o=this.props.layoutItem.setting||(0,e.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o.set("offsetY",t))},this.updateHeightMode=t=>{var o,i,n;const{layoutItem:s}=this.props;let l=null!==(o=s.setting)&&void 0!==o?o:(0,e.Immutable)({});if(l=l.set("heightMode",t===a.LayoutItemSizeModes.Custom?"fixed":"auto"),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},l),!(null===(i=s.bbox)||void 0===i?void 0:i.height)){const t=this.getSizeOfItem();if(t){let o=(0,e.Immutable)(null!==(n=s.bbox)&&void 0!==n?n:{});o=o.set("height",`${Math.round(t.height)}px`),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)}}}}getSizeOfItem(){const{layoutId:t,layoutItem:e}=this.props,o=this.querySelector(`div.exb-rnd[data-layoutid="${t}"][data-layoutitemid="${e.id}"]`);return o?o.getBoundingClientRect():null}querySelector(t){const o=document.querySelector(`iframe[name="${e.APP_FRAME_NAME_IN_BUILDER}"]`);return o?(o.contentDocument||o.contentWindow.document).querySelector(t):null}updateFloatingArea(t){const o=this.props.layoutItem.setting||(0,e.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o.set("floatingArea",t))}render(){var t,o;const{layoutId:n,layoutItem:s,formatMessage:l,isLockLayout:r}=this.props;if(!s)return null;if(s.type===e.LayoutItemType.ScreenGroup)return(0,e.jsx)(hs,Object.assign({},this.props));if(this.itemSetting=e.lodash.assign({},ls,s.setting),this.itemSetting.isFloating)return(0,e.jsx)(ms,Object.assign({},this.props));const d=s.bbox,u=i.utils.stringOfLinearUnit(rs(this.itemSetting)),c=i.utils.stringOfLinearUnit(parseFloat(null===(t=s.bbox)||void 0===t?void 0:t.height)>0?null===(o=s.bbox)||void 0===o?void 0:o.height:100),p="auto"===this.itemSetting.heightMode||a.utils.isPercentage(null==d?void 0:d.height);return(0,e.jsx)("div",{className:"flow-item-setting"},!r&&(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)(ue.SettingSection,{title:l("size")},(0,e.jsx)(ue.SettingRow,{label:l("width")},(0,e.jsx)("div",{style:fs},(0,e.jsx)(Un.SizeEditor,{label:"W",mode:a.LayoutItemSizeModes.Custom,disableModeSelect:!0,value:u,onChange:this.updateWidth}))),(0,e.jsx)(ue.SettingRow,{label:l("height")},(0,e.jsx)("div",{style:fs},(0,e.jsx)(Un.SizeEditor,{label:"H",mode:p?a.LayoutItemSizeModes.Auto:a.LayoutItemSizeModes.Custom,sizeModes:ys,availableUnits:vs,disableModeSelect:!1,value:c,onChange:this.updateHeight,onModeChange:this.updateHeightMode})))),(0,e.jsx)(ue.SettingSection,{title:l("position")},(0,e.jsx)(ue.SettingRow,{label:l("offsetX")},(0,e.jsx)(i.NumericInput,{style:fs,value:this.itemSetting.offsetX,onChange:this.updateOffsetX,size:"sm"})),(0,e.jsx)(ue.SettingRow,{label:l("offsetY")},(0,e.jsx)(i.NumericInput,{style:fs,value:this.itemSetting.offsetY,onChange:this.updateOffsetY,size:"sm"})))),(s.widgetId||s.sectionId)&&(0,e.jsx)(Xn,{layoutId:n,layoutItemId:s.id,isSection:!1,style:this.props.style,onStyleChange:this.props.onStyleChange,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage}))}}const xs={width:"7.5rem"},bs=[a.LayoutItemSizeModes.Stretch,a.LayoutItemSizeModes.Custom],ws=[a.LayoutItemSizeModes.Auto,a.LayoutItemSizeModes.Stretch,a.LayoutItemSizeModes.Custom],Ss=[a.LayoutItemSizeModes.Stretch,a.LayoutItemSizeModes.Custom],Cs=[i.DistanceUnits.PIXEL,i.DistanceUnits.PERCENTAGE],Rs=[i.DistanceUnits.PIXEL];class As extends e.React.PureComponent{constructor(){super(...arguments),this.updateBBox=(t,e)=>{var o;let n=this.props.layoutItem.bbox;const{distance:s,unit:l}=e,r=n[t],d=this.getSizeOfContainer();let u,c=s.toFixed(2);if(a.utils.isPercentage(r)&&l===i.DistanceUnits.PIXEL?d&&(c="left"===t||"right"===t||"width"===t?Math.round(parseFloat(r)*d.width/100):Math.round(parseFloat(r)*d.height/100),u=c):a.utils.isPercentage(r)||l!==i.DistanceUnits.PERCENTAGE||(d&&(c="left"===t||"right"===t||"width"===t?(100*parseFloat(r)/d.width).toFixed(4):(100*parseFloat(r)/d.height).toFixed(4)),u=parseFloat(r)),u||l!==i.DistanceUnits.PERCENTAGE)u||l!==i.DistanceUnits.PIXEL||(u=s);else{const e="width"===t?d.width:d.height;u=Math.round(s*e/100)}if(n=n.set(t,l===i.DistanceUnits.PERCENTAGE?`${c}%`:`${c}px`),"ratio"===(null===(o=this.props.layoutItem.setting)||void 0===o?void 0:o.heightMode)){const e=this.props.layoutItem.setting.aspectRatio;if("width"===t){const t=u*e;if(a.utils.isPercentage(n.height)){const e=(100*t/d.height).toFixed(4);n=n.set("height",`${e}%`)}else n=n.set("height",`${Math.round(t)}px`)}else{const t=u/e;if(a.utils.isPercentage(n.width)){const e=(100*t/d.width).toFixed(4);n=n.set("width",`${e}%`)}else n=n.set("width",`${Math.round(t)}px`)}}this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},n)},this.toggleHeightMode=()=>{let t=this.props.layoutItem.setting||(0,e.Immutable)({});const o="ratio"===t.heightMode?"fixed":"ratio";if(t=t.set("heightMode",o),"ratio"===o){const e=this.getSizeOfItem();e&&(t=t.set("aspectRatio",Number((e.height/e.width).toFixed(2))))}else{let t=this.props.layoutItem.bbox;const e=this.getSizeOfItem();if(a.utils.isPercentage(t.width)){const o=this.getSizeOfContainer();t=t.set("width",`${(100*e.width/o.width).toFixed(4)}%`)}else t=t.set("width",`${Math.round(e.width)}px`);t=t.set("height",`${Math.round(e.height)}px`),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},t)}this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},t)},this.updateAlignSelf=t=>{let o=this.props.layoutItem.setting||(0,e.Immutable)({});o=o.setIn(["style","alignSelf"],t.target.value),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)},this.updateHeightMode=t=>{const o=this.props.layoutItem.setting||(0,e.Immutable)({});let i=(0,e.Immutable)(this.props.layoutItem.bbox);if(t===a.LayoutItemSizeModes.Custom&&isNaN(parseFloat(i.height))){const t=this.getSizeOfItem();i=i.set("height",`${Math.round(t.height)}px`),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i)}this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o.setIn(["autoProps","height"],t))},this.updateWidthMode=t=>{const o=this.props.layoutItem.setting||(0,e.Immutable)({});let i=(0,e.Immutable)(this.props.layoutItem.bbox);if(t===a.LayoutItemSizeModes.Custom&&isNaN(parseFloat(i.width))){const t=this.getSizeOfItem();i=i.set("width",`${Math.round(t.width)}px`),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i)}this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o.setIn(["autoProps","width"],t))},this.updateAspectRatio=t=>{let o=this.props.layoutItem.setting||(0,e.Immutable)({});o=o.set("aspectRatio",t),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)},this.formatMessage=t=>this.props.formatMessage(t)}getSizeOfContainer(){const t=this.querySelector(`div.column-layout[data-layoutid="${this.props.layoutId}"]`);return t?t.getBoundingClientRect():null}getSizeOfItem(){const{layoutId:t,layoutItem:e}=this.props,o=this.querySelector(`div.exb-rnd[data-layoutid="${t}"][data-layoutitemid="${e.id}"]`);return o?o.getBoundingClientRect():null}querySelector(t){const o=document.querySelector(`iframe[name="${e.APP_FRAME_NAME_IN_BUILDER}"]`);return o?(o.contentDocument||o.contentWindow.document).querySelector(t):null}getStyle(){return e.css`
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
    `}render(){var t,o,n,s;const{layoutId:l,layoutItem:r,isLockLayout:d,supportAutoSize:u}=this.props;if(!r)return null;const c=r.setting||{},p=c.style||{},h=r.bbox||{},g=(null===(t=c.autoProps)||void 0===t?void 0:t.width)!==a.LayoutItemSizeModes.Custom,m=null!==(n=null===(o=c.autoProps)||void 0===o?void 0:o.height)&&void 0!==n?n:a.LayoutItemSizeModes.Custom,f="ratio"===c.heightMode;return(0,e.jsx)("div",{className:"column-item-setting",css:this.getStyle()},!d&&(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)(ue.SettingSection,{title:this.formatMessage("size")},(0,e.jsx)(ue.SettingRow,{label:this.formatMessage("width")},(0,e.jsx)("div",{style:xs},(0,e.jsx)(Un.SizeEditor,{label:"W",mode:g?a.LayoutItemSizeModes.Stretch:a.LayoutItemSizeModes.Custom,sizeModes:bs,value:null==h?void 0:h.width,availableUnits:Cs,onChange:t=>this.updateBBox("width",t),onModeChange:this.updateWidthMode}))),(0,e.jsx)(ue.SettingRow,{className:"mt-0",label:(0,e.jsx)(i.Tooltip,{title:this.formatMessage("keepAspectRatio"),placement:"bottom"},(0,e.jsx)(i.Button,{size:"sm",type:"tertiary",className:"ml-1",icon:!0,onClick:this.toggleHeightMode,"aria-pressed":f},f?(0,e.jsx)(le,{size:"s"}):(0,e.jsx)(vn,{size:"s"})))}),(0,e.jsx)(ue.SettingRow,{className:"mt-0",label:this.formatMessage("height")},(0,e.jsx)("div",{style:xs},(0,e.jsx)(Un.SizeEditor,{label:"H",mode:m||a.LayoutItemSizeModes.Custom,sizeModes:u?ws:Ss,value:h.height,availableUnits:Rs,onChange:t=>this.updateBBox("height",t),onModeChange:this.updateHeightMode,disabled:f}))),f&&(0,e.jsx)(ue.SettingRow,{label:this.formatMessage("aspectRatio")},(0,e.jsx)(Un.InputRatio,{value:c.aspectRatio,style:xs,onChange:this.updateAspectRatio})),!g&&(0,e.jsx)(ue.SettingRow,{label:this.formatMessage("align")},(0,e.jsx)(i.Select,{className:"align-select",value:null!==(s=p.alignSelf)&&void 0!==s?s:"flex-start",onChange:this.updateAlignSelf,style:xs},(0,e.jsx)("option",{value:"flex-start"},this.formatMessage("start")),(0,e.jsx)("option",{value:"flex-end"},this.formatMessage("end")),(0,e.jsx)("option",{value:"center"},this.formatMessage("center")))),(0,e.jsx)(qn,{layoutId:l,layoutItemId:r.id,setting:c,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage}))),(r.widgetId||r.sectionId)&&(0,e.jsx)(Xn,{layoutId:l,layoutItemId:r.id,isSection:r.type===e.LayoutItemType.Section,style:this.props.style,onStyleChange:this.props.onStyleChange,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage}))}}const Ts={width:"7.5rem"},Ms=[a.LayoutItemSizeModes.Auto,a.LayoutItemSizeModes.Stretch,a.LayoutItemSizeModes.Custom],Ps=[a.LayoutItemSizeModes.Stretch,a.LayoutItemSizeModes.Custom];class js extends e.React.PureComponent{constructor(){super(...arguments),this.handleAlignChange=t=>{this.updateStyle("alignSelf",t.target.value)},this.handleHeightChange=t=>{let e=this.props.layoutItem.bbox;const{distance:o,unit:n}=t,s=e.height,l=this.getSizeOfContainer();let r=o.toFixed(2);a.utils.isPercentage(s)&&n===i.DistanceUnits.PIXEL?null!=l&&(r=Math.round(parseFloat(s)*l.height/100)):a.utils.isPercentage(s)||n!==i.DistanceUnits.PERCENTAGE||null!=l&&(r=(100*parseFloat(s)/l.height).toFixed(4)),e=e.set("height",n===i.DistanceUnits.PERCENTAGE?`${r}%`:`${r}px`),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},e)},this.handleHeightModeChange=t=>{var o;const i=null!==(o=this.props.layoutItem.setting)&&void 0!==o?o:(0,e.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i.setIn(["autoProps","height"],t))},this.updateAspectSetting=t=>{var o;let i=null!==(o=this.props.layoutItem.setting)&&void 0!==o?o:(0,e.Immutable)({});if("fit"===i.heightMode&&(i=i.setIn(["autoProps","height"],a.LayoutItemSizeModes.Stretch)),i=i.set("heightMode",t),"ratio"===t){const t=this.getSizeOfItem();null!=t&&(i=i.set("aspectRatio",Number((t.height/t.width).toFixed(2))))}else{const t=this.props.layoutItem.bbox,e=this.getSizeOfItem();if(a.utils.isPercentage(t.height)){const o=this.getSizeOfContainer();this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},t.set("height",`${(100*e.height/o.height).toFixed(4)}%`))}else this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},t.set("height",`${Math.round(e.height)}px`))}this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i)},this.handleAspectRatioChange=t=>{var o;let i=null!==(o=this.props.layoutItem.setting)&&void 0!==o?o:(0,e.Immutable)({});i=i.set("aspectRatio",t),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i)},this.handleOffsetXChange=t=>{var o;const i=null!==(o=this.props.layoutItem.setting)&&void 0!==o?o:(0,e.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i.set("offsetX",t))},this.handleOffsetYChange=t=>{var o;const i=null!==(o=this.props.layoutItem.setting)&&void 0!==o?o:(0,e.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i.set("offsetY",t))},this.formatMessage=t=>this.props.formatMessage(t)}updateStyle(t,o){var i,n;const{layoutItem:s}=this.props,a=(0,e.Immutable)(null!==(n=null===(i=null==s?void 0:s.setting)||void 0===i?void 0:i.style)&&void 0!==n?n:{});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},{style:a.set(t,o)})}getSizeOfContainer(){const t=this.querySelector(`div.row-layout[data-layoutid="${this.props.layoutId}"]`);return null!=t?t.getBoundingClientRect():null}getSizeOfItem(){const{layoutId:t,layoutItem:e}=this.props,o=this.querySelector(`div.exb-rnd[data-layoutid="${t}"][data-layoutitemid="${e.id}"] > div.layout-item-content`);return null!=o?o.getBoundingClientRect():null}querySelector(t){var o;const i=document.querySelector(`iframe[name="${e.APP_FRAME_NAME_IN_BUILDER}"]`);return null!=i?(null!==(o=i.contentDocument)&&void 0!==o?o:i.contentWindow.document).querySelector(t):null}getStyle(){return e.css`
      .align-select {
        .dropdown-button,
        .dropdown-button:hover {
          height: 26px;
        }
      }
    `}render(){var t,o,n,s;const{layoutId:l,layoutItem:r,isLockLayout:d,supportAutoSize:u}=this.props;if(null==r)return null;const c=e.lodash.assign({},Fi,r.setting),p=r.bbox,h=null!==(t=c.style)&&void 0!==t?t:{},g=null!==(n=null===(o=c.autoProps)||void 0===o?void 0:o.height)&&void 0!==n?n:a.LayoutItemSizeModes.Stretch,m="ratio"===c.heightMode;return(0,e.jsx)("div",{className:"row-item-setting",css:this.getStyle()},!d&&(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)(ue.SettingSection,{title:this.formatMessage("size")},(0,e.jsx)(ue.SettingRow,{label:this.formatMessage("height")},(0,e.jsx)("div",{style:Ts},(0,e.jsx)(Un.SizeEditor,{label:"H",mode:g,sizeModes:u?Ms:Ps,value:i.utils.stringOfLinearUnit(p.height),onChange:this.handleHeightChange,onModeChange:this.handleHeightModeChange,disabled:m}))),(0,e.jsx)(ue.SettingRow,null,(0,e.jsx)(i.Checkbox,{checked:m,onChange:t=>this.updateAspectSetting(t.target.checked?"ratio":"fixed"),className:"mr-2"}),this.formatMessage("keepAspectRatio")),m&&(0,e.jsx)(ue.SettingRow,{label:this.formatMessage("aspectRatio")},(0,e.jsx)(Un.InputRatio,{value:c.aspectRatio,style:Ts,onChange:this.handleAspectRatioChange})),g!==a.LayoutItemSizeModes.Stretch&&(0,e.jsx)(ue.SettingRow,{label:this.formatMessage("align")},(0,e.jsx)(i.Select,{className:"align-select",style:Ts,value:null!==(s=h.alignSelf)&&void 0!==s?s:"flex-start",onChange:this.handleAlignChange},(0,e.jsx)("option",{value:"flex-start"},this.formatMessage("T")),(0,e.jsx)("option",{value:"flex-end"},this.formatMessage("B")),(0,e.jsx)("option",{value:"center"},this.formatMessage("center"))))),(0,e.jsx)(ue.SettingSection,{title:this.formatMessage("position")},(0,e.jsx)(qn,{layoutId:l,layoutItemId:r.id,setting:r.setting,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage}),(0,e.jsx)(ue.SettingRow,{label:this.formatMessage("offsetX")},(0,e.jsx)(i.NumericInput,{style:Ts,value:c.offsetX,onChange:this.handleOffsetXChange,size:"sm"})),(0,e.jsx)(ue.SettingRow,{label:this.formatMessage("offsetY")},(0,e.jsx)(i.NumericInput,{style:Ts,value:c.offsetY,onChange:this.handleOffsetYChange,size:"sm"})))),(null!=r.widgetId||null!=r.sectionId)&&(0,e.jsx)(Xn,{layoutId:l,layoutItemId:r.id,isSection:r.type===e.LayoutItemType.Section,style:this.props.style,onStyleChange:this.props.onStyleChange,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage}))}}class Ls extends e.React.PureComponent{render(){const{layoutItem:t,layoutId:o}=this.props;return t?(0,e.jsx)("div",{className:"grid-item-setting"},(t.widgetId||t.sectionId)&&(0,e.jsx)(Xn,{layoutId:o,layoutItemId:t.id,style:this.props.style,isSection:t.type===e.LayoutItemType.Section,onStyleChange:this.props.onStyleChange,formatMessage:this.props.formatMessage,setting:t.setting||(0,e.Immutable)({}),onSettingChange:this.props.onSettingChange})):null}}const zs={width:110};class ks extends e.React.PureComponent{constructor(){super(...arguments),this.updateSpace=t=>{const{layoutId:i,setting:n}=this.props,s=(0,e.Immutable)(n||{});isNaN(t.distance)||(0,o.getAppConfigAction)().editLayoutSetting({layoutId:i},s.set("gutter",t.distance)).exec()},this.updatePadding=t=>{const{layoutId:i,setting:n}=this.props,s=(0,e.Immutable)(n||{});(0,o.getAppConfigAction)().editLayoutSetting({layoutId:i},s.setIn(["style","padding"],t)).exec()}}render(){const{formatMessage:t}=this.props,o=this.props.setting||{},i=o.style||{},n=o.gutter>=0?o.gutter:as.gutter;return(0,e.jsx)(ue.SettingSection,{role:"group",className:"flow-layout-setting",title:t("layout"),"aria-label":t("layout")},(0,e.jsx)(ue.SettingRow,{label:t("gap")},(0,e.jsx)(Un.InputUnit,{style:zs,"aria-label":t("gap"),min:0,value:{distance:n,unit:void 0},onChange:this.updateSpace})),(0,e.jsx)(ue.SettingRow,{flow:"wrap",role:"group",label:t("padding"),"aria-label":t("padding")},(0,e.jsx)(Un.Padding,{value:i.padding,onChange:this.updatePadding})))}}const Ns=e.ReactRedux.connect((function(t,e){var o,i,n,s;return{setting:null===(s=null===(n=null===(i=null===(o=t.appStateInBuilder)||void 0===o?void 0:o.appConfig)||void 0===i?void 0:i.layouts)||void 0===n?void 0:n[e.layoutId])||void 0===s?void 0:s.setting}}))(ks);var $s=p(1362);const Os=[i.DistanceUnits.PIXEL];class Es extends e.React.PureComponent{constructor(){super(...arguments),this.handlePaddingChange=t=>{const e=(0,o.getAppConfigAction)();this.getLayoutIds().forEach((o=>{e.editLayoutSetting({layoutId:o},{style:{padding:t}})})),e.exec()},this.handleSettingChange=(t,e)=>{const i=(0,o.getAppConfigAction)();this.getLayoutIds().forEach((o=>{i.editLayoutSetting({layoutId:o},{[t]:e})})),i.exec()}}getLayoutIds(){const t=[],{layouts:e}=this.props;return null!=e&&Object.keys(e).forEach((o=>{t.push(e[o])})),t}render(){var t,o,n,s,a;const{layoutSetting:l,formatMessage:r,appTheme:d}=this.props;return(0,e.jsx)("div",{className:"flexbox-layout-setting"},(0,e.jsx)(ue.SettingSection,{title:r("layout")},(0,e.jsx)(ue.SettingRow,{label:r("padding"),flow:"wrap"},(0,e.jsx)(Un.Padding,{value:null===(t=l.style)||void 0===t?void 0:t.padding,onChange:this.handlePaddingChange})),(0,e.jsx)(ue.SettingRow,{label:r("gap")},(0,e.jsx)($s.ThemeColorPicker,{style:{padding:"0"},width:26,height:14,specificTheme:d,value:null!==(o=l.splitColor)&&void 0!==o?o:"var(--light-500)",onChange:t=>this.handleSettingChange("splitColor",t)}),(0,e.jsx)(Un.InputUnit,{css:e.css`width: 110px !important;`,className:"ml-2",units:Os,min:1,max:100,value:{distance:null!==(n=l.splitSize)&&void 0!==n?n:8,unit:i.DistanceUnits.PIXEL},onChange:t=>this.handleSettingChange("splitSize",t.distance)}))),(0,e.jsx)(ue.SettingSection,{title:r("gridItems")},(0,e.jsx)(ue.SettingRow,{label:r("allowResize")},(0,e.jsx)(i.Switch,{"aria-label":r("allowResize"),checked:null===(s=l.resizable)||void 0===s||s,onChange:t=>this.handleSettingChange("resizable",t.target.checked)})),(0,e.jsx)(ue.SettingRow,{label:r("allowExpansion")},(0,e.jsx)(i.Switch,{"aria-label":r("allowExpansion"),checked:null===(a=l.expandable)||void 0===a||a,onChange:t=>this.handleSettingChange("expandable",t.target.checked)}))))}}const Ds=e.ReactRedux.connect((function(t,e){var o,i;const n=t.appStateInBuilder,s=e.layouts[n.browserSizeMode]||e.layouts[n.appConfig.mainSizeMode],{layouts:a}=n.appConfig;return{layoutSetting:null!==(i=null===(o=a[s])||void 0===o?void 0:o.setting)&&void 0!==i?i:{}}}))(Es);class Bs{constructor(){this.id="flow-layout-transformer",this.layoutType=e.LayoutType.FlowLayout}transformLayout(t,o,i){if(o!==i&&i===e.BrowserSizeMode.Small){let o=(0,e.Immutable)(t);return(t.order||[]).forEach((t=>{o=o.setIn(["content",t,"setting","heightMode"],"auto")})),o}return t}transformLayoutItem(t,e,o,i,n,s){return{index:e,item:t}}}function Fs(t,o,i){var n;const s=function(t,e){return Object.keys(t.widgets).find((o=>{const i=t.widgets[o];if(i.layouts)return Object.keys(i.layouts).some((t=>void 0!==Object.keys(i.layouts[t]).find((o=>i.layouts[t][o]===e))))}))}(t,i),a=function(t,o,i){var n,s,a,l,r,d,u;const c=t.widgets[i];if(null!=c){const h=function(){var t;return window.jimuConfig.isBuilder?null===(t=(0,e.getAppStore)().getState().appStateInBuilder)||void 0===t?void 0:t.browserSizeMode:(0,e.getAppStore)().getState().browserSizeMode}(),g=t.mainSizeMode,m=c.layouts.DEFAULT[h],f=c.layouts.DEFAULT[g],y=(p=null!==(r=null===(l=null===(a=null===(s=(null!==(n=t.layouts[m])&&void 0!==n?n:t.layouts[f]).setting)||void 0===s?void 0:s.style)||void 0===a?void 0:a.padding)||void 0===l?void 0:l.number)&&void 0!==r?r:[0])&&0!==p.length?1===p.length?[p[0],p[0],p[0],p[0]]:2===p.length?[p[0],p[1],p[0],p[1]]:3===p.length?[p[0],p[1],p[2],0]:[p[0],p[1],p[2],p[3]]:[0,0,0,0],v=null!==(u=null===(d=null==o?void 0:o[i])||void 0===d?void 0:d.height)&&void 0!==u?u:0;let I=y[0],x=y[2];return Zo(I)&&(I=_o(I,v)),Zo(x)&&(x=_o(x,v)),v-I-x}var p;return 0}(t,o,s);if(a>0){const e=null!==(n=t.layouts[i].order)&&void 0!==n?n:[],o={};return e.forEach((e=>{const n=t.layouts[i].content[e];o[e]=function(t,e){var o,i,n,s;const a=null!==(o=e.setting)&&void 0!==o?o:{},l=Xo("height",e.bbox,a.autoProps);if(l!==Ne.Custom)return{height:l===Ne.Stretch?t:null,setting:{autoProps:{height:l}}};let r;if("ratio"===a.heightMode)r={setting:{heightMode:"ratio",aspectRatio:null!==(i=a.aspectRatio)&&void 0!==i?i:1,autoProps:{height:Ne.Custom}}};else{let o=null!==(s=null===(n=e.bbox)||void 0===n?void 0:n.height)&&void 0!==s?s:t;o=Zo(o)?_o(o,t):parseInt(o),r={height:o,setting:{heightMode:"fixed",autoProps:{height:Ne.Custom}}}}return r}(a,n)})),o}return null}class Vs{constructor(){this.id="row-layout-transformer",this.layoutType=e.LayoutType.RowLayout}transformLayout(t,o,i){var n,s;if(o===i)return t;let a=(0,e.Immutable)(t);if(i===e.BrowserSizeMode.Small){const o=Fs(function(){const t=(0,e.getAppStore)().getState();return window.jimuConfig.isBuilder?null==t?void 0:t.appStateInBuilder:t}().appConfig,null===(n=window.runtimeInfo)||void 0===n?void 0:n.widgets,t.id);let i=0;Object.keys(null!==(s=t.content)&&void 0!==s?s:{}).sort(((e,o)=>parseInt(t.content[e].bbox.left,10)-parseInt(t.content[o].bbox.left,10))).forEach((n=>{var s,l,r;const d=t.content[n];if(!d.isPending){if(a=a.setIn(["content",n,"bbox"],{left:i*Vi,width:Vi,height:null!==(l=null===(s=d.bbox)||void 0===s?void 0:s.height)&&void 0!==l?l:"auto"}),null!=o){const t=null!==(r=d.setting)&&void 0!==r?r:(0,e.Immutable)({});a=a.setIn(["content",n,"bbox","height"],o[n].height).setIn(["content",n,"setting"],t.merge(o[n].setting))}i+=1}}))}return a}transformLayoutItem(t,e,o,i,n,s){return{item:t,index:e}}}class Hs{constructor(){this.id="grid-layout-transformer",this.layoutType=e.LayoutType.GridLayout}transformLayout(t,o,i){var n,s;if(o!==i&&i===e.BrowserSizeMode.Small){let o=(0,e.Immutable)(t);const i=null===(n=t.setting)||void 0===n?void 0:n.rootItem;if(i&&(null===(s=t.content)||void 0===s?void 0:s[i])){const e=[];Object.keys(t.content).forEach((n=>{if(n!==i){const s=t.content[n].setting;s.type!==ke.Column&&s.type!==ke.Row&&s.type!==ke.Tab&&(e.push(n),o=o.setIn(["content",n,"setting","parent"],i))}})),e.length>0&&(o=o.setIn(["content",i,"setting","type"],ke.Tab),o=o.setIn(["content",i,"setting","children"],e))}return o}return t}transformLayoutItem(t,e,o,i,n,s){return{index:e,item:t}}}function Ws(t){const{isFirst:o,isLast:i,menuItems:n}=t,s=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o}(t,["isFirst","isLast","menuItems"]),[a,l]=e.React.useState(n),r=e.ReactRedux.useSelector((t=>{var e,o,i;return null!==(i=null===(o=null===(e=t.appConfig)||void 0===e?void 0:e.forBuilderAttributes)||void 0===o?void 0:o.lockLayout)&&void 0!==i&&i}));return e.React.useEffect((()=>{const e=n.filter((e=>{var o;return"function"==typeof e.visible?e.visible({layoutId:t.layoutId,layoutItem:t.layoutItem,clientRect:null}):null===(o=e.visible)||void 0===o||o}));l(e)}),[o,i,n,t.layoutId,t.layoutItem,r]),e.React.createElement(Ct,Object.assign({menuItems:a},s))}var Gs=function(t,e,o,i){return new(o||(o=Promise))((function(n,s){function a(t){try{r(i.next(t))}catch(t){s(t)}}function l(t){try{r(i.throw(t))}catch(t){s(t)}}function r(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,l)}r((i=i.apply(t,e||[])).next())}))};function Zs(t,i,n){return Gs(this,void 0,void 0,(function*(){const{appConfig:s,newWidgetId:l}=yield o.templateUtils.createWidgetFromTemplate((0,o.getAppConfigAction)().appConfig,n,null,{},!0),r=(0,o.getAppConfigAction)(s),d=(r.appConfig.layouts[t].order||[]).indexOf(i),u=(0,e.Immutable)({id:`${a.utils.getMaximumId(r.appConfig.layouts[t])+1}`,type:e.LayoutItemType.Widget,widgetId:l}),c=r.addItemIntoLayout(t,u,d>=0?d+1:NaN);return(0,e.getAppStore)().dispatch(e.appActions.layoutChanged(r.appConfig,Object.assign(Object.assign({},c),{autoScroll:!0}))),c}))}function Us(t,i,n){return Gs(this,void 0,void 0,(function*(){const{appConfig:s,newScreenGroupId:l}=yield o.templateUtils.createScreenGroupFromTemplate((0,o.getAppConfigAction)().appConfig,n,null,{}),r=(0,o.getAppConfigAction)(s),d=(r.appConfig.layouts[t].order||[]).indexOf(i),u=(0,e.Immutable)({id:`${a.utils.getMaximumId(r.appConfig.layouts[t])+1}`,type:e.LayoutItemType.ScreenGroup,screenGroupId:l}),c=r.addItemIntoLayout(t,u,d>=0?d+1:NaN);return(0,e.getAppStore)().dispatch(e.appActions.layoutChanged(r.appConfig,Object.assign(Object.assign({},c),{autoScroll:!0}))),c}))}function _s(t,e){var i;const{layoutId:n,layoutItemId:s}=e,a=(0,o.getAppConfigAction)(t),l=a.appConfig.layouts[n],r=l.order,d=[].concat(r),u=r.indexOf(s);let c=r.length-1;for(let t=u+1;t<r.length;t++){const e=r[t];if(!(null===(i=l.content[e].setting)||void 0===i?void 0:i.isFloating)){c=t;break}}return d.splice(c+1,0,s),d.splice(u,1),a.editLayoutOrder({layoutId:n},d),a.appConfig}function Ys(t,e){var i;const{layoutId:n,layoutItemId:s}=e,a=(0,o.getAppConfigAction)(t),l=a.appConfig.layouts[n],r=l.order,d=[].concat(r),u=r.indexOf(s);let c=0;for(let t=u-1;t>=0;t--){const e=r[t];if(!(null===(i=l.content[e].setting)||void 0===i?void 0:i.isFloating)){c=t;break}}return d.splice(u,1),d.splice(c,0,s),a.editLayoutOrder({layoutId:n},d),a.appConfig}var Xs=p(8683),qs=p.n(Xs),Js=p(760),Qs=p.n(Js),Ks=p(6009),ta=p.n(Ks);class ea extends e.React.PureComponent{constructor(t){super(t),this.state={isResizing:!1,dh:0,showBlockTemplatePopup:!1,showScreenTemplatePopup:!1,referenceElem:null},this.onResizeStart=(t,e,o)=>{const{padding:i}=this.props;this.minHeight=16+i,this.initHeight=o,this.setState({dh:0,isResizing:!0})},this.onResizing=(t,e,o,i,n)=>{let s=n;n<0&&this.initHeight+n<this.minHeight&&(s=this.minHeight-this.initHeight),this.setState({dh:s,isResizing:!0})},this.onResizeEnd=(t,i,n,s,a,l)=>{const{layoutId:r,layoutItem:d}=this.props;let u=a;a<0&&this.initHeight+a<this.minHeight&&(u=this.minHeight-this.initHeight);const c=(0,e.Immutable)(d.bbox||{}).set("height",Math.round(this.initHeight+u));(0,o.getAppConfigAction)().editLayoutItemBBox({layoutId:r,layoutItemId:d.id},c).exec(),this.setState({isResizing:!1,dh:0})},this.toggleBlockTemplatePopup=()=>{this.setState({showBlockTemplatePopup:!this.state.showBlockTemplatePopup})},this.toggleScreenTemplatePopup=()=>{this.setState({showScreenTemplatePopup:!this.state.showScreenTemplatePopup})},this.removeLayoutItem=()=>{const{layoutId:t,layoutItemId:e}=this.props;(0,o.getAppConfigAction)().removeLayoutItem({layoutId:t,layoutItemId:e},!0).exec()},this.moveLayoutItemUp=()=>{const{layoutId:t,layoutItemId:e}=this.props,i=Ys((0,o.getAppConfigAction)().appConfig,{layoutId:t,layoutItemId:e});(0,o.getAppConfigAction)(i).exec()},this.moveLayoutItemDown=()=>{const{layoutId:t,layoutItemId:e}=this.props,i=_s((0,o.getAppConfigAction)().appConfig,{layoutId:t,layoutItemId:e});(0,o.getAppConfigAction)(i).exec()},this.switchSetting=()=>{const{layoutId:t,layoutItemId:o,selected:i}=this.props;i||(0,e.getAppStore)().dispatch(e.appActions.selectionChanged({layoutId:t,layoutItemId:o}))},this.onTemplateBlockSelected=t=>{Zs(this.props.layoutId,this.props.layoutItemId,t),this.setState({showBlockTemplatePopup:!1})},this.onTemplateScreenGroupSelected=t=>{Us(this.props.layoutId,this.props.layoutItemId,t),this.setState({showScreenTemplatePopup:!1})},this.fakeTopLayouts=(0,e.Immutable)({[e.BrowserSizeMode.Large]:`${this.props.layoutId}_${this.props.layoutItemId}_tlarge`,[e.BrowserSizeMode.Medium]:`${this.props.layoutId}_${this.props.layoutItemId}_tmedium`,[e.BrowserSizeMode.Small]:`${this.props.layoutId}_${this.props.layoutItemId}_tsmall`}),this.fakeBottomLayouts=(0,e.Immutable)({[e.BrowserSizeMode.Large]:`${this.props.layoutId}_${this.props.layoutItemId}_blarge`,[e.BrowserSizeMode.Medium]:`${this.props.layoutId}_${this.props.layoutItemId}_bmedium`,[e.BrowserSizeMode.Small]:`${this.props.layoutId}_${this.props.layoutItemId}_bsmall`}),this.minHeight=0,this.contextMenus=[{icon:qs(),title:this.props.formatMessage("insertABlock"),onClick:this.toggleBlockTemplatePopup,visible:()=>!q()},{icon:Qs(),title:this.props.formatMessage("insertAScreenGroup"),onClick:this.toggleScreenTemplatePopup,visible:()=>!q()},nt,{icon:Y(),title:this.props.formatMessage("setting"),onClick:this.switchSetting},{icon:F(),title:this.props.formatMessage("dragToMove",{label:J(this.props.layoutItem)}),className:"tool-drag-handler",onClick:()=>{},visible:()=>!q()},{icon:ta(),onClick:this.moveLayoutItemUp,title:this.props.formatMessage("moveup"),visible:()=>!this.props.isFirst&&!q()},{icon:ta(),rotate:180,onClick:this.moveLayoutItemDown,title:this.props.formatMessage("movedown"),visible:()=>!this.props.isLast&&!q()},{icon:O(),title:this.props.formatMessage("delete"),onClick:this.removeLayoutItem,visible:()=>!q()}]}calHeight(t){if(this.state.isResizing)return`${this.initHeight+this.state.dh}px`;const{layoutItem:e}=this.props,o=e.bbox||{},i=a.utils.getValueOfBBox(o,"height");if(!i||a.utils.isPercentage(i))return"auto";switch(t.heightMode){case"auto":return"auto";case"fixed":return i}}createContextMenu(){const{builderTheme:t}=this.pageContext,{layoutId:o,layoutItem:i,isFirst:n,isLast:s}=this.props;return(0,e.jsx)(Ws,{layoutId:o,layoutItem:i,builderTheme:t,positionType:"center",size:28,iconSize:16,className:"widget-context-menu",menuItems:this.contextMenus,isFirst:n,isLast:s},(0,e.jsx)("div",{ref:t=>{this.reference=t},css:e.css`position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;`}),this.state.showBlockTemplatePopup&&(0,e.jsx)(ue.TemplateSelector,{templates:(0,xi.getBlockTemplates)(),referenceElement:this.reference,onItemSelect:this.onTemplateBlockSelected,onClose:this.toggleBlockTemplatePopup}),this.state.showScreenTemplatePopup&&(0,e.jsx)(ue.TemplateSelector,{templates:(0,xi.getScreenGroupTemplates)(),referenceElement:this.reference,onItemSelect:this.onTemplateScreenGroupSelected,onClose:this.toggleScreenTemplatePopup}))}getStyle(t){const{builderTheme:o}=this.pageContext,{index:i,gutter:n}=this.props,s=a.utils.isRTL()?-1:1;return[e.css`
        margin-top: ${i>0?`${n}px`:"unset"};
        width: ${rs(t)};
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
      `,t.offsetX||t.offsetY?`translate(${(t.offsetX||0)*s}px, ${t.offsetY||0}px)`:null]}render(){const{layoutId:t,layoutItem:o,draggable:i,selectable:n,isEmpty:s,selected:l}=this.props;if(!o||s)return null;const r=e.lodash.assign({},ls,o.setting),d=(0,e.classNames)("flow-layout-item d-flex",{selected:l}),u=a.utils.handleOnebyOneAnimation(this.props);return(0,e.jsx)(a.PageContext.Consumer,null,(s=>{this.pageContext=s;const[a,l]=this.getStyle(r);return(0,e.jsx)(Je,Object.assign({id:`${t}_block_${o.id}`,css:a,style:{transform:l},layoutId:t,layoutItemId:o.id,onResizeStart:this.onResizeStart,onResizing:this.onResizing,onResizeEnd:this.onResizeEnd,left:!1,right:!1,top:!1,bottom:"fixed"===r.heightMode,restrict:!0,useDragHandler:!0,draggable:i,selectable:n,forbidContextMenu:!0,forbidToolbar:!0,isBlock:!0,className:d},u),!s.viewOnly&&this.createContextMenu())}))}}const oa=e.ReactRedux.connect((function(t,o){var n,s,a,l;let r=!0,d=!1;const{layoutItem:u}=o,c=null===(n=t.appRuntimeInfo)||void 0===n?void 0:n.selection;if(c&&(d=c.layoutId===o.layoutId&&c.layoutItemId===u.id),u.type===e.LayoutItemType.Widget){const e=u.widgetId,o=t.appConfig.widgets[e];let n=[0,0,0,0];if(o){n=i.styleUtils.expandStyleArray(null===(l=null===(a=null===(s=o.config)||void 0===s?void 0:s.style)||void 0===a?void 0:a.padding)||void 0===l?void 0:l.number);const e=Object.keys(o.layouts)[0],d=(p=o.layouts[e],h=t.browserSizeMode,g=t.appConfig.mainSizeMode,p?p[h]||p[g]:null),u=t.appConfig.layouts[d];u&&Object.keys(u.content||[]).length>0&&Object.keys(u.content||[]).some((t=>{if(!u.content[t].isPending)return r=!1,!0}))}return{isEmpty:r,selected:d,padding:n[0]+n[2]}}var p,h,g;return{selected:d,isEmpty:!1,padding:0}}))(ea);class ia extends e.React.PureComponent{constructor(){super(...arguments),this.state={isResizing:!1,dx:0,dy:0,dw:0,dh:0},this.onResizeStart=(t,e,o)=>{this.setState({isResizing:!0}),this.initHeight=o,this.initWidth=e},this.onResizing=(t,e,o,i,n)=>{this.setState({dx:e,dy:o,dw:i,dh:n})},this.onResizeEnd=(t,e,i,n,s,a)=>{const{layoutId:l,layoutItem:r}=this.props;let d=r.bbox;d=d.set("height",Math.round(parseInt(d.height,10)+s)).set("width",Math.round(parseInt(d.width,10)+n)).set("left",Math.round(parseInt(d.left,10)+e)).set("top",Math.round(parseInt(d.top,10)+i)).set("bottom",Math.round(parseInt(d.top,10)-s+i)),(0,o.getAppConfigAction)().editLayoutItemBBox({layoutId:l,layoutItemId:r.id},d).exec(),this.setState({isResizing:!1,dx:0,dy:0,dw:0,dh:0})}}calculatePosition(){const{layoutItem:t}=this.props,{dh:o,dw:i,isResizing:n}=this.state;return function(t,o={}){var i,n,s;const a=t.setting,l=null!==(i=null==a?void 0:a.floatingArea)&&void 0!==i?i:1,r=`${null!==(n=null==a?void 0:a.offsetX)&&void 0!==n?n:0}px`,d=`${null!==(s=null==a?void 0:a.offsetY)&&void 0!==s?s:0}px`,{dh:u,dw:c,initWidth:p,initHeight:h,isResizing:g}=o,m=Yo()?`translateX(calc(50% + ${r}))`:`translateX(calc(-50% + ${r}))`,f={};switch(l){case 1:f.left=r,f.top=d,f.transform=null;break;case 2:f.left="50%",f.top=d,f.transform=m;break;case 3:f.right=r,f.top=d,f.transform=null;break;case 4:f.left=r,f.top="50%",f.transform=`translateY(calc(-50% + ${d}))`;break;case 5:f.left="50%",f.top="50%",f.transform=`${m} translateY(calc(-50% + ${d}))`;break;case 6:f.right=r,f.top="50%",f.transform=`translateY(calc(-50% + ${d}))`;break;case 7:f.left=r,f.bottom=d,f.transform=null;break;case 8:f.left="50%",f.bottom=d,f.transform=m;break;case 9:f.right=r,f.bottom=d,f.transform=null}return e.css`
    position: fixed;
    z-index: 1;
    width: ${g?`${p+c}px`:Uo(t.bbox,"width")};
    height: ${g?`${h+u}px`:Uo(t.bbox,"height")};
    left: ${f.left};
    right: ${f.right};
    top: ${f.top};
    bottom: ${f.bottom};
    transform: ${f.transform};
  `}(t,{dh:o,dw:i,isResizing:n,initWidth:this.initWidth,initHeight:this.initHeight})}render(){const{layoutId:t,layoutItem:o,selectable:i,selected:n}=this.props;if(!o)return null;const s=(0,e.classNames)("flexbox-layout-item floating d-flex",{selected:n});return(0,e.jsx)(a.PageContext.Consumer,null,(n=>(this.pageContext=n,(0,e.jsx)(Je,{css:this.calculatePosition(),layoutId:t,layoutItemId:o.id,onResizeStart:this.onResizeStart,onResizing:this.onResizing,onResizeEnd:this.onResizeEnd,restrict:!0,draggable:!1,selectable:i,className:s}))))}}const na=e.ReactRedux.connect(a.utils.mapStateToLayoutItemProps)(ia);function sa(t){const{formatMessage:n,activeScreenIndex:s,total:a,layoutId:l,layoutItemId:r,screenGroupId:d,browserSizeMode:u,hasPanel:p}=t,h=!e.ReactRedux.useSelector((t=>{var o,i,n;const s=null!==(i=null===(o=t.appConfig.forBuilderAttributes)||void 0===o?void 0:o.lockLayout)&&void 0!==i&&i;return(null===(n=t.appRuntimeInfo)||void 0===n?void 0:n.appMode)===e.AppMode.Design&&!s}))||u!==e.BrowserSizeMode.Large,[m,f]=e.React.useState(!1),y=e.React.useRef(),v=e.React.useCallback((()=>{f(!1)}),[]),I=e.React.useCallback((()=>{const t=(0,c.getTheme2)();return e.css`
      border: none;

      .tooltip {
        color: ${t.colors.black};
        background-color: ${t.colors.palette.light[600]};
        border-color: ${t.colors.palette.light[300]};
      }
    `}),[]),x=e.React.useCallback((t=>{let i=(0,o.getAppConfigAction)();const n=i.appConfig.layouts[l].content[r].screenGroupId;o.templateUtils.createScreenFromTemplate(i.appConfig,t,null,{}).then((({appConfig:t,newScreenId:s})=>{const a=t.screenGroups[n].screens[0],l=t.screens[a],r=Object.keys(l.main.layout);let d=t.screens[s];const u=t.mainSizeMode;i=(0,o.getAppConfigAction)(t),r.forEach((t=>{if(null==d.main.layout[t]){const e=i.createLayoutForSizeModeForOneLayout(t,u,d.main.layout);d=d.setIn(["main","layout",t],e.id)}if(d.panel&&null==d.panel.layout[t]){const e=i.createLayoutForSizeModeForOneLayout(t,u,d.panel.layout);d=d.setIn(["panel","layout",t],e.id)}})),t=(t=i.appConfig).setIn(["screenGroups",n,"screens"],[].concat(t.screenGroups[n].screens,s)).setIn(["screens",s],d),(0,e.getAppStore)().dispatch(e.appActions.appConfigChanged(t)),(0,e.getAppStore)().dispatch(e.appActions.screenGroupNavInfoChanged(n,t.screenGroups[n].screens.length-1))})),v()}),[v,l,r]),b=e.React.useCallback((()=>{if(p)f(!m);else{const t=(0,xi.getScreenTemplates)().find((t=>"nopanel"===t.name));t&&x(t)}}),[m,p,x]),w=e.React.useCallback((()=>{(0,e.getAppStore)().dispatch(e.appActions.screenGroupNavInfoChanged(d,s-1))}),[d,s]),S=e.React.useCallback((()=>{(0,e.getAppStore)().dispatch(e.appActions.screenGroupNavInfoChanged(d,s+1))}),[d,s]),C=e.React.useCallback((()=>{(0,o.getAppConfigAction)().removeScreenByIndex(s,d).exec(),s===a-1&&(0,e.getAppStore)().dispatch(e.appActions.screenGroupNavInfoChanged(d,s-1))}),[s,a,d]),R=e.React.useCallback((()=>{const t=(0,o.getAppConfigAction)();t.duplicateScreenByIndex(s,d),t.exec(),(0,e.getAppStore)().dispatch(e.appActions.screenGroupNavInfoChanged(d,s+1))}),[s,d]);return(0,e.jsx)("div",{className:"menu-bar d-flex justify-content-between align-items-center"},(0,e.jsx)("div",{className:"d-flex justify-content-start align-items-center"},(0,e.jsx)("div",{className:"info ml-2"},n("screen"),": ",s+1," / ",a),(0,e.jsx)(g,{title:0===s?"":n("previous"),placement:"bottom",css:I()},(0,e.jsx)(i.Button,{icon:!0,className:"rounded-circle",disabled:0===s,type:"tertiary",onClick:w},(0,e.jsx)(i.Icon,{icon:ta(),size:16}))),(0,e.jsx)(g,{title:s===a-1?"":n("next"),placement:"bottom",css:I()},(0,e.jsx)(i.Button,{icon:!0,className:"rounded-circle",disabled:s===a-1,type:"tertiary",onClick:S},(0,e.jsx)(i.Icon,{icon:ta(),rotate:180,size:16}))),!h&&(0,e.jsx)("div",{ref:y},(0,e.jsx)(g,{title:n("newScreen"),placement:"bottom",css:I()},(0,e.jsx)(i.Button,{icon:!0,onClick:b,className:"rounded-circle",type:"tertiary","data-testid":"addBtn"},(0,e.jsx)(i.Icon,{icon:_t(),size:16})))),!h&&m&&(0,e.jsx)(ue.TemplateSelector,{templates:(0,xi.getScreenTemplates)(),referenceElement:y.current,onItemSelect:x,onClose:v}),!h&&(0,e.jsx)(g,{title:n("duplicateScreen"),placement:"bottom",css:I()},(0,e.jsx)(i.Button,{icon:!0,className:"rounded-circle",type:"tertiary",onClick:R,"data-testid":"duplicateBtn"},(0,e.jsx)(i.Icon,{icon:Xt(),size:16}))),!h&&a>1&&(0,e.jsx)(g,{title:n("deleteScreen"),placement:"bottom",css:I()},(0,e.jsx)(i.Button,{icon:!0,className:"rounded-circle",type:"tertiary",onClick:C,"data-testid":"removeBtn"},(0,e.jsx)(i.Icon,{icon:O(),size:16})))))}function aa(){const t=[0];for(let e=1;e<=100;e++)t.push(e/100);return t}function la(t){switch(t){case e.ScreenTriggerType.Top:return"0% 0% -98% 0%";case e.ScreenTriggerType.Bottom:return"-98% 0% -2px 0%";case e.ScreenTriggerType.Upper:return`-${100/3-1}% 0% -${200/3-1}% 0%`;case e.ScreenTriggerType.Lower:return`-${200/3-1}% 0% -${100/3-1}% 0%`;default:return}}const ra=.33,da=.25;function ua(t,o,n,s,a,l,r,d,u){const{side:c,size:p,offset:h,background:g,overlay:m=!0,padding:f}=t.panel||{},y=(0,e.getAppStore)().getState().appContext.isRTL?"left"===c?"-":"":"right"===c?"-":"",v=i.styleUtils.toBackgroundEmotionStyle(null!=g?g:{}),I=parseFloat(a);if(u){const t=!m;return e.css`
      width: 100%;
      background: transparent;
      pointer-events: none;
      position: relative;
      opacity: ${r===e.ScreenTransitionType.Fade?s?"1":"0.5":null};
      min-height: ${d===e.ScreenTransitionType.Cover?`${o}px`:null};
      padding-top: ${d!==e.ScreenTransitionType.Fade&&t?`${Math.round(o*ra)}px`:null};

      &.top-spacing > .panel-content {
        /* margin-top: ${Math.round(o*ra)}px; */
      }

      .panel-content {
        width: 100%;
        ${m?"":v};
        /* margin-top: ${r===e.ScreenTransitionType.Push?"${Math.round(viewHeight * SCREEN_RATIO_IN_SMALL_SIZE)}px":"unset"}; */

        > .layout, > .layout-wrapper > .layout {
          pointer-events: auto;
          ${m?v:""};
          min-height: ${Math.round(o*da)}px;
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
        padding-top: ${d!==e.ScreenTransitionType.Fade&&t?"33vh":null};
        padding-top: ${d!==e.ScreenTransitionType.Fade&&t?"calc(var(--vh) * 33)":null};

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
    `}return e.css`
    width: 100%;
    background: transparent;
    pointer-events: none;
    display: flex;
    flex-direction: ${"right"===c?"row-reverse":"row"};
    justify-content: ${"center"===c&&m?"center":"flex-start"};
    position: relative;
    opacity: ${r===e.ScreenTransitionType.Fade?s?"1":"0.5":null};

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
        min-height: ${Math.round(o*da)}px;
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
      min-height: ${l?o:Math.round(o*da)}px;
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
  `}var ca=p(5467),pa=p.n(ca);const ha=t=>{const o=window.SVG,{className:i}=t,n=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o}(t,["className"]),s=(0,e.classNames)("jimu-icon jimu-icon-component",i);return o?e.React.createElement(o,Object.assign({className:s,src:pa()},n)):e.React.createElement("svg",Object.assign({className:s},n))};function ga(t){const{rootLayoutId:o,viewHeight:n,headerHeight:s,screenId:a,isActive:l,isAbsolute:r,isLast:d,isSmallSize:u,layoutEntry:c,isDesignMode:p,formatMessage:h,builderTheme:m}=t,f=e.ReactRedux.useSelector((t=>t.appConfig.screens[a])),y=e.ReactRedux.useSelector((t=>{var e,o,i;return null===(i=null===(o=null===(e=t.appRuntimeInfo)||void 0===e?void 0:e.screenPanelStates)||void 0===o?void 0:o[a])||void 0===i||i})),{main:v}=f,{side:I,size:x,overlay:b=!0}=f.panel||{},w=e.React.useRef(),S=e.React.useCallback((()=>{(0,e.getAppStore)().dispatch(e.appActions.screenPanelVisibleChanged(a,!0))}),[a]),C=(0,e.classNames)("screen-main-panel",{"is-active":l,"last-one":d});return(0,e.jsx)(Rt.Provider,{value:!r||l},(0,e.jsx)("div",{id:`${o}_screen_${a}`,className:C,css:function(){var t,o,a,l;if(u){const a=!b&&null!=f.panel,l=a?`${Math.round(n*ra)}px`:`${n}px`,r=a?`${Math.round(33)}`:"100";return e.css`
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
          height: ${s>0?`calc(100vh - ${s}px)`:"100vh"};
          height: ${s>0?`calc(var(--vh) * 100 - ${s}px)`:"calc(var(--vh) * 100)"};
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
      ${i.styleUtils.toBackgroundEmotionStyle(null!==(l=null===(a=f.main)||void 0===a?void 0:a.background)&&void 0!==l?l:{})};
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
          height: ${s>0?`calc(100vh - ${s}px)`:"100vh"} !important;
          height: ${s>0?`calc(var(--vh) * 100 - ${s}px)`:"calc(var(--vh) * 100)"} !important;
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
    `}(),ref:w,"data-screenid":a,"data-index":t.index},(0,e.jsx)(c,{layouts:v.layout,isInWidget:!0}),(0,e.jsx)("div",{className:"spacing-area"}),p&&!y&&(0,e.jsx)("div",{className:"toggle-visible-btn",onClick:S,"data-testid":"toggleBtn"},(0,e.jsx)(g,{placement:"auto",title:h("showInDesignView")},(0,e.jsx)(i.Button,{type:"default",size:"sm",className:"rounded"},(0,e.jsx)(ha,{size:"m"}))))))}function ma(t,o,i,n,s){return t===e.ScreenTransitionType.Fade?e.css`
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
        margin-top: ${1===s?"0 !important":null};

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
    `:void 0}function fa(t,o,i){return t===e.ScreenTransitionType.Fade?e.css`
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
    `:void 0}function ya(t){const{rootLayoutId:o,activeIndex:i,viewHeight:n,headerHeight:s,screens:a,transitionType:l,isSmallSize:r,layoutEntry:d,isDesignMode:u,formatMessage:c,builderTheme:p}=t;return(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)("div",{className:"screen-container",css:ma(l,n,s,r,a.length)},a.map(((t,h)=>(0,e.jsx)(ga,{key:t,rootLayoutId:o,index:h,isActive:i===h,screenId:t,viewHeight:n,headerHeight:s,isAbsolute:l===e.ScreenTransitionType.Fade,isLast:h===a.length-1,isSmallSize:r,layoutEntry:d,isDesignMode:u,formatMessage:c,builderTheme:p})))),(0,e.jsx)("div",{className:"screen-placeholder",css:fa(l,n)}))}const va=e.css`
  width: 36px;
  height: 36px;
  padding: 0.5rem;
`,Ia=e.css`
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  background: transparent;
`;function xa(t){return e.css`
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
  `}function ba(t){const{layouts:n,builderTheme:s}=t,l=e.ReactRedux.useSelector((t=>n[t.browserSizeMode]||n[t.appConfig.mainSizeMode])),[r,d]=e.React.useState(!1),u=e.React.useRef(null),c=e.React.useCallback((t=>{R((0,o.getAppConfigAction)().appConfig,t,{layoutId:l},{width:100,height:100},{left:0,top:0}).then((({layoutInfo:t,updatedAppConfig:o})=>{(0,e.getAppStore)().dispatch(e.appActions.layoutChanged(o,t))})),d(!1)}),[l]),p=e.React.useCallback(((t,i,n)=>{R((0,o.getAppConfigAction)().appConfig,t,{layoutId:l},i,n).then((({layoutInfo:t,updatedAppConfig:o})=>{(0,e.getAppStore)().dispatch(e.appActions.layoutChanged(o,t))}))}),[l]),h=e.React.useCallback((t=>!t.layoutInfo||t.layoutInfo.layoutId!==l),[l]);return(0,e.jsx)(a.LayoutContext.Provider,{value:{isItemAccepted:h}},(0,e.jsx)("div",{className:"placeholder-btn w-100 justify-content-center align-items-center",css:xa(s)},(0,e.jsx)(me,{css:Ia,layouts:n,onDrop:p}),(0,e.jsx)("div",{className:"action-item",ref:u},(0,e.jsx)(i.Button,{icon:!0,css:va,onClick:t=>{t.stopPropagation(),d(!r)}},(0,e.jsx)(fe,{size:"m"}))),r&&(0,e.jsx)(ue.WidgetListPopper,{referenceElement:u.current,isAccepted:h,onSelect:c,onClose:()=>{d(!1)}})))}var wa=p(9775),Sa=p.n(wa);const Ca=t=>{const o=window.SVG,{className:i}=t,n=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o}(t,["className"]),s=(0,e.classNames)("jimu-icon jimu-icon-component",i);return o?e.React.createElement(o,Object.assign({className:s,src:Sa()},n)):e.React.createElement("svg",Object.assign({className:s},n))},Ra=e.spring.animated;function Aa(t,o,i,n,s,a,l,r,d,u,c,p,h){const{side:g,size:m}=t.panel||{},f=e.css`
    color: ${c.colors.palette.dark[900]};
    background-color: ${c.colors.palette.light[400]};
    border-color: ${c.colors.palette.light[600]};
    &:hover {
      color: ${c.colors.black};
      background-color: ${c.colors.palette.light[600]};
    }
  `;return d?e.css`
      ${ua(t,o,i,n,s,a,l,r,d)};

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
    ${ua(t,o,i,n,s,a,l,r,d)};

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
  `}function Ta(t){const{index:n,screenId:s,onInterctionChange:l,onHeightChange:r,builderTheme:d,viewHeight:u,headerHeight:c,layoutEntry:p,isActive:h,isSmallSize:m,isDesignMode:f,transitionType:y,screenTransitionType:v,triggerType:I,stretched:x,viewOnly:b,verticalSpace:w="0",useAnimation:S=!0,formatMessage:C}=t,R=e.ReactRedux.useSelector((t=>t.appConfig.screens[s])),A=e.ReactRedux.useSelector((t=>{var e,o,i;return null===(i=null===(o=null===(e=t.appRuntimeInfo)||void 0===e?void 0:e.screenPanelStates)||void 0===o?void 0:o[s])||void 0===i||i})),{panel:T}=R,M=e.React.useRef(),P=e.React.useRef(),j=e.React.useRef(),[L,z]=e.React.useState(!1),[k,N]=e.React.useState(0),$=e.React.useRef(A),O=e.React.useRef(f),E=e.React.useRef(),D=e.React.useMemo((()=>{if(T&&T.overlay&&Math.abs(parseFloat(T.offset))>0){const t=(0,e.getAppStore)().getState().appContext.isRTL?"left"===T.side?-1:1:"right"===T.side?-1:1;return parseFloat(T.offset)*t}return 0}),[T]),[B,F]=e.spring.useSpring((()=>({opacity:1,size:1,x:0,y:0}))),V=e.React.useCallback(((t,e)=>{E.current=e,z(!0),N(0)}),[]),H=e.React.useCallback(((t,e,o,i,n)=>{N(i)}),[]),W=e.React.useCallback(((t,e,i,n,l)=>{!function(t,e){var i;const n=(0,o.getAppConfigAction)();let s,l=n.appConfig.screens[t];s=a.utils.isPercentage(null===(i=l.panel)||void 0===i?void 0:i.size)?a.utils.toRatio(e,document.body.clientWidth):`${Math.round(e)}px`,l=l.setIn(["panel","size"],s),n.editScreen(l).exec()}(s,E.current+n),z(!1)}),[s]);e.React.useEffect((()=>{O.current!==f&&(O.current=f,f?$.current?F.start({opacity:1,x:0,y:0,immediate:!0,onRest:null}):F.start({opacity:0,immediate:!0,onRest:null}):F.start({opacity:1,x:0,y:0,immediate:!0,onRest:null}))}),[f,F]),e.React.useEffect((()=>{if(!j.current&&P.current)return j.current=(0,gt.interact)(P.current),yt(j.current,{layoutItemId:s,onResizeStart:V,onResizing:H,onResizeEnd:W}),()=>{j.current&&(j.current.unset(),j.current=null)}}),[s,V,H,W]);const G=e.React.useCallback((t=>{l(n,t)}),[n,l]),Z=e.React.useCallback(((t,e)=>{r(n,e)}),[n,r]),U=e.React.useCallback((t=>{const o=t.target.getBoundingClientRect(),i=M.current.getBoundingClientRect(),n=(0,e.getAppStore)().getState().appContext.isRTL;M.current.classList.add("minimized"),F.start({opacity:0,size:0,x:n?i.left-o.left:i.right-o.right,y:i.bottom-o.bottom,immediate:!S,onRest:()=>{$.current=!1,(0,e.getAppStore)().dispatch(e.appActions.screenPanelVisibleChanged(s,!1))}})}),[F,s,S]),_=e.React.useCallback((()=>{M.current.classList.remove("minimized"),F.start({opacity:1,size:1,x:0,y:0,immediate:!S,onRest:null})}),[F,S]);e.React.useEffect((()=>{$.current!==A&&A&&(_(),$.current=A)}),[A,_]),function(t,o,i,n){const s=e.React.useRef(),a=e.React.useRef();e.React.useEffect((()=>{if(s.current&&(s.current.unobserve(t),s.current=null),t&&"function"==typeof IntersectionObserver){const e=new IntersectionObserver((t=>{(t=>{const e=t.boundingClientRect,o=t.rootBounds,i=Math.abs(e.bottom-o.top)>=Math.abs(e.top-o.top);t.isIntersecting?(a.current=!0,i&&n(!0)):a.current&&(a.current=!1,i)&&n(!1)})(t[0])}),{threshold:aa(),root:o||document,rootMargin:la(i)});return e.observe(t),s.current=e,()=>{s.current.unobserve(t),s.current=null}}}),[t,o,n,i])}(M.current,t.refElement,m?e.ScreenTriggerType.Lower:null!=I?I:e.ScreenTriggerType.Bottom,G);const Y={opacity:B.opacity,translateX:D,x:B.x,y:B.y},X=e.React.useCallback((()=>!b&&h&&(null==T?void 0:T.overlay)),[T,h,b]);return(0,e.jsx)("div",{className:(0,e.classNames)("screen-side-panel",{"top-spacing":0===n&&((null==T?void 0:T.overlay)||m)}),"data-screenid":s,"data-index":n,ref:M,css:Aa(R,u,c,h,w,x||null==T,y,v,m,0,d,L,E.current+k)},T&&(0,e.jsx)(Ra.div,{className:(0,e.classNames)("panel-content",{visible:A}),ref:P,style:Y},(0,e.jsx)("div",{className:"layout-wrapper"},(0,e.jsx)(p,{layouts:T.layout}),!b&&(0,e.jsx)(ba,{layouts:T.layout,builderTheme:d}),(0,e.jsx)("span",{className:"resize-handle left rnd-resize-left"}),(0,e.jsx)("span",{className:"resize-handle right rnd-resize-right"})),X()&&(0,e.jsx)("div",{className:"toggle-visible-btn",onClick:U,"data-testid":`toggleBtn-${A}`},(0,e.jsx)(g,{placement:"auto",title:C("hideInDesignView")},(0,e.jsx)(i.Button,{type:"default",size:"sm",className:"rounded"},(0,e.jsx)(Ca,{size:"m"})))),(0,e.jsx)("div",{className:(0,e.classNames)("panel-spacing",{"last-item":t.isLast})})),!T&&A&&(0,e.jsx)("div",{className:"panel-content-placeholder"}),(0,e.jsx)(e.ReactResizeDetector,{handleHeight:!0,onResize:Z}))}function Ma(t){const{layoutId:i,layoutItemId:n,builderTheme:s,layoutItem:l,formatMessage:r,isFirst:d,isLast:u}=t,[c,p]=e.React.useState(!1),[h,g]=e.React.useState(!1),m=e.React.useRef(),f=e.React.useCallback((()=>{p(!c)}),[c]),y=e.React.useCallback((()=>{g(!h)}),[h]),v=e.React.useCallback((t=>{Zs(i,n,t),p(!1)}),[i,n]),I=e.React.useCallback((t=>{Us(i,n,t),g(!1)}),[i,n]),x=e.React.useCallback((()=>{const t=Ys((0,o.getAppConfigAction)().appConfig,{layoutId:i,layoutItemId:n});(0,o.getAppConfigAction)(t).exec()}),[i,n]),b=e.React.useCallback((()=>{const t=_s((0,o.getAppConfigAction)().appConfig,{layoutId:i,layoutItemId:n});(0,o.getAppConfigAction)(t).exec()}),[i,n]),w=e.React.useCallback((()=>{o.appBuilderSync.publishConfirmDeleteToApp({layoutId:i,layoutItemId:n})}),[i,n]),S=e.React.useCallback((()=>(0,e.getAppStore)().getState().browserSizeMode===e.BrowserSizeMode.Large),[]),C=[{icon:qs(),title:r("insertABlock"),onClick:f,visible:()=>!q()},{icon:Qs(),title:r("insertAScreenGroup"),onClick:y,visible:()=>S()&&!q()},et,Object.assign(Object.assign({},nt),{visible:()=>S()&&!q()}),{icon:Y(),title:r("setting"),onClick:()=>{(0,e.getAppStore)().dispatch(e.appActions.selectionChanged({layoutId:i,layoutItemId:n}))}},{icon:F(),title:r("dragToMove",{label:J(l)}),className:"tool-drag-handler",onClick:()=>{},visible:()=>!q()},{icon:ta(),onClick:x,title:r("moveup"),visible:()=>!d&&!q()},{icon:ta(),rotate:180,onClick:b,title:r("movedown"),visible:()=>!u&&!q()},{icon:O(),title:r("delete"),onClick:w,visible:()=>!q()}];return(0,e.jsx)(Ws,{layoutId:i,layoutItem:l,builderTheme:s,positionType:"center",size:a.CONTEXT_MENU_ITEM_SIZE,iconSize:a.CONTEXT_MENU_ICON_SIZE,className:"widget-context-menu",menuItems:C,isFirst:d,isLast:u},(0,e.jsx)("div",{ref:m,css:e.css`position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;`}),c&&(0,e.jsx)(ue.TemplateSelector,{templates:(0,xi.getBlockTemplates)(),referenceElement:m.current,onItemSelect:v,onClose:f}),h&&(0,e.jsx)(ue.TemplateSelector,{templates:(0,xi.getScreenGroupTemplates)(),referenceElement:m.current,onItemSelect:I,onClose:y}))}function Pa(t,o,i,n,s,a){return e.css`
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
      display: ${s?"block":"none"};
      position: absolute;
      opacity: ${s?.8:.5};
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
        padding-top: ${Math.round(t*ra)}px;
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
          padding-top: ${33}vh;
          padding-top: calc(var(--vh) * ${33});
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
  `}function ja(t){var i;const{layoutId:n,layoutItemId:s,layoutItem:l,formatMessage:r,itemIndex:d,isFirst:u,isLast:c}=t,{screenGroupId:p}=l,h=e.ReactRedux.useSelector((t=>{var e;const o=null===(e=t.appRuntimeInfo)||void 0===e?void 0:e.selection;return!!o&&o.layoutId===n&&o.layoutItemId===s})),g=e.ReactRedux.useSelector((t=>t.appConfig.screenGroups[l.screenGroupId])),m=e.ReactRedux.useSelector((t=>t.appConfig.screenGroups[l.screenGroupId].screens.some((e=>null!=t.appConfig.screens[e].panel)))),f=e.ReactRedux.useSelector((t=>t.browserSizeMode)),{screens:y,stretchPanel:v=!0,triggerType:I=e.ScreenTriggerType.Bottom,verticalSpace:x="0",panelTransitionType:b=e.ScreenTransitionType.Push}=g;let w=null!==(i=g.transitionType)&&void 0!==i?i:e.ScreenTransitionType.Fade;f!==e.BrowserSizeMode.Small||m||(w=e.ScreenTransitionType.Cover);const S=e.ReactRedux.useSelector((t=>{var e;return null===(e=t.appRuntimeInfo.screenGroupNavInfos)||void 0===e?void 0:e[p]})),C=e.ReactRedux.useSelector((t=>e.utils.findViewportSize(t.appConfig,t.browserSizeMode||e.BrowserSizeMode.Large))),R=e.ReactRedux.useSelector((t=>{var o;return(null===(o=t.appRuntimeInfo)||void 0===o?void 0:o.appMode)===e.AppMode.Design})),{viewOnly:A,builderTheme:T,pageId:M}=e.React.useContext(a.PageContext),P=e.ReactRedux.useSelector((t=>{const e=t.appConfig.pages[M];if(null==e?void 0:e.header){const e=t.appConfig.header;if(null==e?void 0:e.sticky){const o=t.browserSizeMode,i=t.appConfig.mainSizeMode,n=e.height[o]||e.height[i]||75;return parseInt(n,10)}}return 0})),j=e.React.useRef(),L=e.React.useRef(),z=e.React.useRef(),k=e.React.useRef(!0),N=e.React.useRef(),$=e.React.useRef(),[O,E]=e.React.useState(0);e.React.useEffect((()=>{if(h){const t=document.querySelector(`div.exb-rnd[data-layoutid="${n}"][data-layoutitemid="${s}"]`);null!=t&&t.scrollIntoView({behavior:"auto",block:"center"})}}),[h,n,s]);const D=e.React.useMemo((()=>{var t,o,i;if(f!==e.BrowserSizeMode.Small)return!1;const n=(0,e.getAppStore)().getState().appConfig,s=null===(o=null===(t=n.screenGroups)||void 0===t?void 0:t[p])||void 0===o?void 0:o.screens;return!!(null==s?void 0:s[O])&&(null===(i=n.screens[s[O]].panel)||void 0===i?void 0:i.overlay)}),[p,O,f]),B=e.React.useCallback((t=>{var o;const i=L.current.querySelectorAll("div.screen-side-panel");let n=0;if(i.forEach((e=>{+e.getAttribute("data-index")<t&&(n+=e.clientHeight)})),L.current.scrollTop=n,w!==e.ScreenTransitionType.Fade){const t=null===(o=z.current)||void 0===o?void 0:o.children[0];t&&(t.scrollTop=L.current.scrollTop)}}),[w]),F=e.React.useCallback((()=>{pt(!0)}),[]),V=e.React.useCallback((()=>{pt(!1)}),[]);e.React.useEffect((()=>{if(j.current&&!$.current){const{layoutId:e,layoutItemId:o,layoutItem:i}=t;$.current=(0,gt.interact)(j.current).origin("parent"),$.current=ct($.current,{layoutId:e,layoutItemId:o,onDragStart:F,onDragEnd:V,useDragHandler:!0,itemType:i.type,rootLayoutId:()=>e,restrict:()=>!0}),$.current.draggable({modifiers:[gt.interact.modifiers.restrictRect({restriction:"parent"})]})}return()=>{$.current&&($.current.unset(),$.current=null)}}),[]),e.React.useEffect((()=>{null!=(null==S?void 0:S.activeIndex)&&S.activeIndex!==O&&(function(t,o){var i;const n=(0,e.getAppStore)().getState().appConfig,s=(0,e.getAppStore)().getState().browserSizeMode,a=null===(i=(0,e.getAppStore)().getState().appRuntimeInfo)||void 0===i?void 0:i.selection;if(null!=a){const i=n.screenGroups[t].screens[o],l=n.screens[i];if(l){const t=l.main.layout[s];a.layoutId===t&&(0,e.getAppStore)().dispatch(e.appActions.selectionChanged(null)),null!=document.querySelector(`div[data-layoutid="${t}"] div[data-layoutid="${a.layoutId}"][data-layoutitemid="${a.layoutItemId}"]`)&&(0,e.getAppStore)().dispatch(e.appActions.selectionChanged(null))}}}(p,O),E(S.activeIndex),S.scrollIntoView&&(k.current=!1,B(S.activeIndex),setTimeout((()=>{k.current=!0}),200)))}),[S,O,B,p]),e.React.useEffect((()=>{N.current&&(L.current.removeEventListener("scroll",N.current),N.current=null),N.current=()=>{var t;const o=null===(t=z.current)||void 0===t?void 0:t.children[0];o&&w!==e.ScreenTransitionType.Fade&&(o.scrollTop=L.current.scrollTop)},L.current.addEventListener("scroll",N.current)}),[w]),e.React.useEffect((()=>{(0,e.getAppStore)().dispatch(e.appActions.screenGroupNavInfoChanged(p,0))}),[R,p]);const H=e.React.useCallback(((t,o)=>{k.current&&(o&&t!==O?(0,e.getAppStore)().dispatch(e.appActions.screenGroupNavInfoChanged(p,t,!1)):!o&&t>0&&(0,e.getAppStore)().dispatch(e.appActions.screenGroupNavInfoChanged(p,t-1,!1)))}),[O,p]),W=e.React.useCallback((t=>{t.stopPropagation(),q()||A||f===e.BrowserSizeMode.Small||(0,e.getAppStore)().dispatch(e.appActions.selectionChanged({layoutId:n,layoutItemId:s}))}),[A,f,n,s]),G=e.React.useCallback((()=>{if(!L.current)return;const t=L.current.children[0],e=L.current.children[1];t.style.height=`${e.clientHeight}px`}),[]),Z=e.React.useMemo((()=>e.lodash.debounce(G,200)),[G]),U=e.React.useCallback(((t,o)=>{if(!L.current)return;const i=L.current.children[0],n=L.current.children[1];if(w!==e.ScreenTransitionType.Fade)if(w!==e.ScreenTransitionType.Cover){if(w===e.ScreenTransitionType.Push){const e=i.querySelector(`div.screen-main-panel[data-index="${t}"]`),o=n.querySelector(`div.screen-side-panel[data-index="${t}"]`);e.style.height=`${o.clientHeight}px`,i.style.height=`${n.clientHeight}px`}}else!function(t,o,i){const n=t.querySelectorAll("div.screen-main-panel"),s=o.querySelectorAll("div.screen-side-panel"),a=n.length;for(let t=1;t<a;t++){const e=n.item(t),o=n.item(t-1),i=s.item(t-1);e.style.marginTop=i.clientHeight-o.clientHeight+"px"}i!==e.BrowserSizeMode.Small&&(t.style.height=`${o.clientHeight}px`)}(i,n,f);else i.style.height=`${n.clientHeight}px`}),[f,w]),_=e.React.useCallback((()=>{(0,e.getAppStore)().dispatch(o.builderActions.confirmDeleteContentChanged({layoutId:n,layoutItemId:s}))}),[n,s]),Y=e.React.useMemo((()=>({delete:_,backspace:_})),[_]);return y.length>0?(0,e.jsx)(At.Provider,{value:`${n}:${s}`},(0,e.jsx)("div",{className:(0,e.classNames)("builder-layout-item exb-rnd",{selected:h,"small-size":f===e.BrowserSizeMode.Small}),css:Pa(C.height,T,u,c,h,D),"data-layoutitemid":s,"data-layoutid":n,onClick:W,ref:j},(0,e.jsx)("div",{className:"screen-menu"},(0,e.jsx)(sa,{activeScreenIndex:O,itemIndex:d,total:y.length,screenGroupId:p,layoutId:n,layoutItemId:s,browserSizeMode:f,hasPanel:m,formatMessage:r})),(0,e.jsx)("div",{className:"screen-group",ref:L},(0,e.jsx)("div",{className:"main-panels",ref:z},(0,e.jsx)(ya,{rootLayoutId:n,activeIndex:O,viewHeight:C.height,headerHeight:P,screens:y,transitionType:w,layoutEntry:Ae,isSmallSize:f===e.BrowserSizeMode.Small,isDesignMode:R,builderTheme:T,formatMessage:r})),(0,e.jsx)("div",{className:"side-panels"},y.map(((t,o)=>(0,e.jsx)(Ta,{key:t,index:o,isLast:o===y.length-1,screenId:t,viewHeight:C.height,headerHeight:P,refElement:R?j.current:null,layoutEntry:Ae,viewOnly:A,builderTheme:T,isActive:o===O,isSmallSize:f===e.BrowserSizeMode.Small,isDesignMode:R,stretched:v,triggerType:I,verticalSpace:x,transitionType:b,screenTransitionType:w,onHeightChange:U,onInterctionChange:H,formatMessage:r}))),(0,e.jsx)(e.ReactResizeDetector,{handleHeight:!0,onResize:Z}))),!A&&(0,e.jsx)(Ma,{layoutId:n,layoutItemId:s,layoutItem:l,isFirst:u,isLast:c,builderTheme:T,formatMessage:r}),R&&(0,e.jsx)("div",{className:"group-tip"},(0,e.jsx)("div",{className:"tip-content"})),R&&h&&(0,e.jsx)(e.Keyboard,{bindings:Y}))):null}const La=t=>{const o=window.SVG,{className:i}=t,n=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o}(t,["className"]),s=(0,e.classNames)("jimu-icon jimu-icon-component",i);return o?e.React.createElement(o,Object.assign({className:s,src:qs()},n)):e.React.createElement("svg",Object.assign({className:s},n))};const za=t=>{const o=window.SVG,{className:i}=t,n=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o}(t,["className"]),s=(0,e.classNames)("jimu-icon jimu-icon-component",i);return o?e.React.createElement(o,Object.assign({className:s,src:Qs()},n)):e.React.createElement("svg",Object.assign({className:s},n))},ka=e.css`
  pointer-events: auto;
`;function Na(t){return e.css`
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
  `}function $a(t){return t===e.BrowserSizeMode.Large}function Oa(t){const{pageContext:o,browserSizeMode:n,onPageTemplateSelected:s,onBlockTemplateSelected:a,onScreenTemplateSelected:l,blockOnly:r}=t,{builderTheme:d,formatMessage:u,isHeader:c,isFooter:p}=o,[h,m]=e.React.useState(!1),[f,y]=e.React.useState(!1),[v,I]=e.React.useState(!1),x=e.React.useRef(null),b=e.React.useRef(null),w=e.React.useRef(null),S=e.ReactRedux.useSelector((t=>{var o,i,n;const s=null!==(n=null===(i=null===(o=t.appConfig)||void 0===o?void 0:o.forBuilderAttributes)||void 0===i?void 0:i.lockLayout)&&void 0!==n&&n;return t.appRuntimeInfo.appMode===e.AppMode.Design&&!s})),C=!c&&!p;let R;return R=c?u("chooseHeaderTemplate"):p?u("chooseFooterTemplate"):u("chooseTemplate",{type:o.isDialog?u("dialog").toLocaleLowerCase():u("page").toLocaleLowerCase()}),S?(0,e.jsx)("div",{className:"w-100 flex-column justify-content-center align-items-center",css:Na(d)},(0,e.jsx)("div",{className:"d-flex"},C&&(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)(g,{placement:"bottom",title:u("insertABlock")},(0,e.jsx)("div",{className:"action-item"},(0,e.jsx)(i.Button,{ref:x,icon:!0,onClick:t=>{t.stopPropagation(),y(!f)},css:ka,className:"rounded-circle"},(0,e.jsx)(La,{size:"m",color:d.colors.palette.dark[800]})))),$a(n)&&(0,e.jsx)(g,{placement:"bottom",title:u("insertAScreenGroup")},(0,e.jsx)("div",{className:"action-item ml-4"},(0,e.jsx)(i.Button,{ref:b,icon:!0,onClick:t=>{t.stopPropagation(),I(!f)},css:ka,className:"rounded-circle"},(0,e.jsx)(za,{size:16,color:d.colors.palette.dark[800]}))))),!r&&(0,e.jsx)(g,{placement:"bottom",title:R},(0,e.jsx)("div",{className:(0,e.classNames)("action-item",{"ml-4":C})},(0,e.jsx)(i.Button,{ref:w,icon:!0,onClick:t=>{t.stopPropagation(),m(!h)},css:ka,className:"rounded-circle"},(0,e.jsx)(Si,{size:16,color:d.colors.palette.dark[800]}))))),(0,e.jsx)("div",{className:"action-seprator mt-3"}),(0,e.jsx)("div",null,(0,e.jsx)("h5",{className:"btn-text mt-2"},u("dropWidgetToAdd"))),C&&f&&(0,e.jsx)(ue.TemplateSelector,{templates:(0,xi.getBlockTemplates)(),referenceElement:x.current,onItemSelect:t=>{y(!1),a(t)},onClose:()=>{y(!1)}}),C&&v&&$a(n)&&(0,e.jsx)(ue.TemplateSelector,{templates:(0,xi.getScreenGroupTemplates)(),referenceElement:b.current,onItemSelect:t=>{I(!1),l(t)},onClose:()=>{I(!1)}}),!r&&h&&(0,e.jsx)(ue.TemplateSelector,{templates:(0,xi.getScrollingPageTemplates)(),referenceElement:w.current,onItemSelect:t=>{m(!1),s(t)},onClose:()=>{m(!1)}})):null}const Ea=e.css`
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  background: transparent;
`,Da=e.css`
  ${Ea};
  z-index: ${a.LayoutZIndex.DragMoveTip};
  pointer-events: none;
`;class Ba extends e.React.PureComponent{constructor(t){super(t),this.state={isDragover:!1,isLoadingTemplate:!1},this.handleActivate=t=>{if(!Q())return;if(Math.abs(t.screenX-this.mousedownX)>a.CLICK_TOLRERANCE||Math.abs(t.screenY-this.mousedownY)>a.CLICK_TOLRERANCE)return void t.stopPropagation();const{isInSection:o,isInWidget:i}=this.props;this.pageContext.viewOnly||o||i||It()||ht()||(t.stopPropagation(),(0,e.getAppStore)().dispatch(e.appActions.selectionChanged(null)))},this.handleMouseDown=t=>{this.mousedownX=t.screenX,this.mousedownY=t.screenY},this.handleDropAtBoundary=(t,e,o)=>{o<this.props.layout.order.length?this.referenceId=this.props.layout.order[o]:this.referenceId=null,null==this.domRect&&(this.domRect=this.ref.getBoundingClientRect()),this.handleDrop(t,this.domRect,e)},this.onWidgetItemSelected=t=>{var e,o,i;const n=this.ref.getBoundingClientRect(),s={height:null!==(i=null===(o=null===(e=t.manifest)||void 0===e?void 0:e.defaultSize)||void 0===o?void 0:o.height)&&void 0!==i?i:300};this.addWidgetToLayout(t,n,s,4,0)},this.handleBlockTemplateSelected=t=>{this.setState({isLoadingTemplate:!0}),Zs(this.props.layout.id,"",t).finally((()=>{this.setState({isLoadingTemplate:!1})}))},this.handleScreenTemplateSelected=t=>{this.setState({isLoadingTemplate:!0}),Us(this.props.layout.id,"",t).finally((()=>{this.setState({isLoadingTemplate:!1})}))},this.handlePageTemplateSelected=t=>{const i=(0,o.getAppConfigAction)().appConfig;this.setState({isLoadingTemplate:!0}),this.pageContext.isHeader?o.templateUtils.applyPageTemplateToHeader(i,t).then((({appConfig:t})=>{(0,o.getAppConfigAction)(t).exec(),e.lodash.defer((()=>{this.setState({isLoadingTemplate:!1})}))})).finally(null):this.pageContext.isFooter?o.templateUtils.applyPageTemplateToFooter(i,t).then((({appConfig:t})=>{(0,o.getAppConfigAction)(t).exec(),e.lodash.defer((()=>{this.setState({isLoadingTemplate:!1})}))})).finally(null):o.templateUtils.applyPageTemplateToBody(i,this.pageContext.pageId,t).then((({appConfig:t})=>{(0,o.getAppConfigAction)(t).exec(),e.lodash.defer((()=>{this.setState({isLoadingTemplate:!1})}))})).finally(null)},a.utils.autoBindHandlers(this,["handleDrop","handleDragOver","handleDragEnter","handleDragLeave","handleToggleDragoverEffect"]);const i=e.ExtensionManager.getInstance().getExtensions(`${e.extensionSpec.ExtensionPoints.LayoutTransformer}`);if((null==i?void 0:i.length)>0){const t=i.find((t=>t.layoutType===this.props.layout.type));this.layoutTransform=null==t?void 0:t.transformLayout}}componentDidMount(){this.canvasPane=new Ti(this.canvasRef),this.canvasPane.setSize(this.ref.clientWidth,this.ref.clientHeight)}componentDidUpdate(){this.canvasPane.setSize(this.ref.clientWidth,this.ref.clientHeight)}handleDragOver(t,o,i,n,s,a){var l,r,d;const{layout:u}=this.props,c=null!==(l=t.layoutInfo)&&void 0!==l?l:{layoutId:null};let p=n;if(this.canvasPane.clear(),(null===(r=this.childRects)||void 0===r?void 0:r.length)>0){const{insertY:t,refId:e}=function(t,e,o,i){let n,s,a=!1;if(o.some(((t,i)=>{if(t.top+t.height/2>e){if(0===i)n=Math.max(t.top/2,t.top-5);else{const e=o[i-1];n=(t.top+e.top+e.height)/2}a=!0,s=t.id}return a})),!a){const e=o[o.length-1];n=Math.min(e.top+e.height+5,(e.top+e.height+t.height)/2)}return{refId:s,insertY:n}}(i,a,this.childRects);if(this.referenceId=e,c.layoutId===this.props.layout.id){const t=u.order,o=t.indexOf(c.layoutItemId),i=t.indexOf(e);if((null===(d=u.content[c.layoutItemId].setting)||void 0===d?void 0:d.isFloating)||o===i-1||null==e&&o===t.length-1)return}p={top:t-5+this.ref.scrollTop,width:i.width-10,left:5,height:10}}else this.referenceId=null,p={top:i.height/2-5,width:i.width-10,left:5,height:10};this.canvasPane.setColor(e.polished.rgba(this.builderTheme.colors.palette.primary[700],.4)),this.canvasPane.drawRect(p)}handleToggleDragoverEffect(t,e){var o;t&&(this.referenceId=null,this.collectBounds(null!==(o=e.layoutInfo)&&void 0!==o?o:{layoutId:null})),this.canvasPane.clear(),this.setState({isDragover:t})}handleDragEnter(t){}handleDragLeave(){}handleDrop(t,i,n){var s,a;this.canvasPane.clear();const{layout:l}=this.props,r=null!==(s=t.layoutInfo)&&void 0!==s?s:{layoutId:null},d=(0,o.getAppConfigAction)();let u=0;if(null!=this.referenceId?u=l.order.indexOf(this.referenceId):null!=l.order&&(u=l.order.length),this.referenceId=null,this.childRects=[],r.layoutId===l.id){if(null===(a=l.content[r.layoutItemId].setting)||void 0===a?void 0:a.isFloating){const t=(0,o.getAppConfigAction)();return t.setLayoutItemToPending(r,!1),void(0,e.getAppStore)().dispatch(e.appActions.layoutChanged(t.appConfig,Object.assign(Object.assign({},r),{autoScroll:!1})))}return void R(d.appConfig,t,{layoutId:l.id},i,n,u).then((t=>{const{layoutInfo:o,updatedAppConfig:i}=t;(0,e.getAppStore)().dispatch(e.appActions.layoutChanged(i,Object.assign(Object.assign({},o),{autoScroll:!0})))})).finally(null)}const c=(this.maxPageWidth>0?Math.min(this.maxPageWidth,i.width):i.width)/12,p=Math.min(Math.round(n.width/c),12);t.itemType===e.LayoutItemType.ScreenGroup?R(d.appConfig,t,{layoutId:l.id},i,n,u).then((t=>{const{layoutInfo:o,updatedAppConfig:i}=t;(0,e.getAppStore)().dispatch(e.appActions.layoutChanged(i,Object.assign(Object.assign({},o),{autoScroll:!0})))})).finally(null):this.addWidgetToLayout(t,i,n,p,u)}addWidgetToLayout(t,e,o,i,n,s){z(t,{layoutId:this.props.layout.id},e,o,i,n,s).finally(null)}collectBounds(t){const{layout:e}=this.props;this.childRects=[],this.domRect=this.ref.getBoundingClientRect();const o=this.ref.parentNode.querySelectorAll(`div[data-layoutid="${e.id}"] > div.exb-rnd`);return(null==o?void 0:o.length)>0&&o.forEach((o=>{var i;const n=o.getAttribute("data-layoutitemid");if((t.layoutId!==e.id||t.layoutItemId!==n)&&(null===(i=e.order)||void 0===i?void 0:i.includes(n))){const t=a.utils.relativeClientRect(o.getBoundingClientRect(),this.domRect);t.id=n,this.childRects.push(t)}})),this.childRects.sort(((t,e)=>t.top-e.top))}createItem(t,i,n,s){if(null==t?void 0:t.isPending)return null;const{layouts:a,layout:l,itemDraggable:r,itemSelectable:d}=this.props,u=function(t){const{layoutId:e,layoutItemId:i}=t,n=(0,o.getAppConfigAction)().appConfig.layouts[e];let s=!1;return n.order.some((t=>{var e;const o=n.content[t];if(!(null===(e=o.setting)||void 0===e?void 0:e.isFloating)&&!o.isPending)return s=t===i,!0})),s}({layoutId:l.id,layoutItemId:t.id}),c=function(t){var e;const{layoutId:i,layoutItemId:n}=t,s=(0,o.getAppConfigAction)().appConfig.layouts[i];let a=!1;for(let t=s.order.length-1;t>=0;t--){const o=s.order[t],i=s.content[o];if(!(null===(e=i.setting)||void 0===e?void 0:e.isFloating)&&!i.isPending){a=o===n;break}}return a}({layoutId:l.id,layoutItemId:t.id}),p=t.setting;return t.type===e.LayoutItemType.ScreenGroup?(0,e.jsx)(ja,{key:`${l.id}_${t.id}`,itemIndex:n,isFirst:u,isLast:c,layoutId:l.id,layoutItemId:t.id,layoutItem:t,theme:this.pageContext.builderTheme,formatMessage:this.pageContext.formatMessage}):(null==p?void 0:p.isFloating)?(0,e.jsx)(na,{key:`${l.id}_${t.id}`,index:n,total:i,builderTheme:this.builderTheme,layouts:a,layoutId:l.id,layoutItemId:t.id,layoutItem:t,gutter:s.gutter,draggable:r,selectable:d,onDropAtBoundary:this.handleDropAtBoundary,formatMessage:this.pageContext.formatMessage}):(0,e.jsx)(oa,{key:`${l.id}_${t.id}`,index:n,isFirst:u,isLast:c,builderTheme:this.builderTheme,layouts:a,layoutId:l.id,layoutItemId:t.id,layoutItem:t,gutter:s.gutter,draggable:r,selectable:d,onDropAtBoundary:this.handleDropAtBoundary,formatMessage:this.pageContext.formatMessage})}getActionStyle(){return e.css`
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
    `}createActions(t){const{viewOnly:o,rootLayoutId:i}=this.pageContext,{layout:n}=this.props,s=!this.pageContext.isHeader&&!this.pageContext.isFooter;return this.state.isLoadingTemplate||!s||o||n.id!==i?null:(0,e.jsx)(Oa,{pageContext:this.pageContext,browserSizeMode:this.props.browserSizeMode,blockOnly:t,onPageTemplateSelected:this.handlePageTemplateSelected,onBlockTemplateSelected:this.handleBlockTemplateSelected,onScreenTemplateSelected:this.handleScreenTemplateSelected})}render(){const{layout:t,className:o,isPageItem:n,layouts:s,mainSizeMode:l,browserSizeMode:r}=this.props;if(null==t)return null;const d=(0,e.classNames)("layout flow-layout w-100",o),u={display:this.state.isDragover?"block":"none"};return(0,e.jsx)(a.PageContext.Consumer,null,(o=>{var a;this.builderTheme=o.builderTheme,this.maxPageWidth=o.maxWidth,this.pageContext=o;let c=t;s[r]!==t.id&&null!=this.layoutTransform&&(c=this.layoutTransform(t,l,r));const p=null!==(a=c.order)&&void 0!==a?a:[],h=e.lodash.assign({},as,c.setting),g=Object.assign({position:"relative"},i.styleUtils.toCSSStyle(h.style));return(0,e.jsx)("div",{className:d,ref:t=>this.ref=t,css:this.getStyle(),style:g,"data-layoutid":t.id,onClick:this.handleActivate,onMouseDown:this.handleMouseDown},(0,e.jsx)(e.IntersectionContext.Provider,{value:{monitor:!0}},(0,e.jsx)(e.OneByOneAnimation,{oid:c.id,"data-layoutid":c.id,className:"trail-container d-flex flex-column align-items-center",css:e.css`
                    width: 100%;
                  `},!o.viewOnly&&(0,e.jsx)(me,{css:Ea,layouts:this.props.layouts,isRepeat:this.props.isRepeat,highlightDragover:!n,onDragEnter:this.handleDragEnter,onDragLeave:this.handleDragLeave,onDragOver:this.handleDragOver,onDrop:this.handleDrop,onToggleDragoverEffect:this.handleToggleDragoverEffect}),p.length>0&&p.map(((t,e)=>this.createItem(c.content[t],p.length,e,h))))),!this.state.isLoadingTemplate&&!o.viewOnly&&0===p.length&&t.id===o.rootLayoutId&&this.createActions(!1),p.length>0&&this.createActions(!0),this.state.isLoadingTemplate&&(0,e.jsx)(i.Loading,{type:i.LoadingType.Primary}),(0,e.jsx)("canvas",{css:Da,style:u,ref:t=>this.canvasRef=t}))}))}}const Fa=e.ReactRedux.connect(a.utils.mapStateToLayoutProps)(Ba);var Va=p(9216),Ha=p.n(Va);const Wa=t=>{const o=window.SVG,{className:i}=t,n=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o}(t,["className"]),s=(0,e.classNames)("jimu-icon jimu-icon-component",i);return o?e.React.createElement(o,Object.assign({className:s,src:Ha()},n)):e.React.createElement("svg",Object.assign({className:s},n))},Ga=e.css`
  .resize-handler {
    height: ${16}px;
    width: 100%;
    cursor: ns-resize;
    position: absolute;
  }
`,Za=e.css`
  position: absolute;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
`;function Ua(t){return e.css`
    .edit-btn {
      background: ${t.colors.primary};
      color: ${t.colors.palette.dark[800]};
      border-radius: 2px;
      &:hover {
        background: ${t.colors.palette.primary[600]};
        color: ${t.colors.black};
      }
    }
  `}function _a(){(0,e.getAppStore)().dispatch(e.appActions.activePagePartChanged(e.PagePart.Header))}function Ya(){(0,e.getAppStore)().dispatch(e.appActions.activePagePartChanged(e.PagePart.Footer))}function Xa(){(0,e.getAppStore)().dispatch(e.appActions.activePagePartChanged(e.PagePart.Body))}function qa(){const t=(0,e.getAppStore)().getState(),o=t.appConfig.header.layout;return a.searchUtils.findLayoutId(o,t.browserSizeMode,t.appConfig.mainSizeMode)}function Ja(){const t=(0,e.getAppStore)().getState(),o=t.appConfig.footer.layout;return a.searchUtils.findLayoutId(o,t.browserSizeMode,t.appConfig.mainSizeMode)}function Qa(t){var o;const i=(0,e.getAppStore)().getState(),n=null===(o=i.appConfig.dialogs[t])||void 0===o?void 0:o.layout;return a.searchUtils.findLayoutId(n,i.browserSizeMode,i.appConfig.mainSizeMode)}function Ka(t){return Object.keys(t).find((e=>t[e]))}function tl(t,o,i,n,s){return e.css`
    ${Ga};
    ${Ua(n)};
    position: relative;
    z-index: auto;
    top: 0;
    display: ${i?"flex":"none"};
    width: 100%;
    height: auto;
    min-height: ${parseFloat(o)}px;
    overflow: hidden;
    background-color: ${t.backgroundColor||s.header.bg||"transparent"};
    background-image: ${t.backgroundIMage};
    background-position: ${t.backgroundPosition};
    color: ${s.header.color};
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
  `}function el(t){const{header:n,headerVisible:s,browserSizeMode:l,mainSizeMode:r,activePagePart:d,pageContext:u,onHeightChange:c}=t,p=e.ReactRedux.useSelector((t=>{var o;return(null===(o=t.appRuntimeInfo)||void 0===o?void 0:o.appMode)===e.AppMode.Design})),h=e.React.useRef(null),g=n.height[l]||n.height[r]||75,m=n.layout,f=!m[l],y=u.builderTheme;e.React.useEffect((()=>{let t;return h.current&&(t=function(t){let e,i;return(0,gt.interact)(t).origin("parent").resizable({inertia:!1,edges:{bottom:".resize-handler"},onstart:o=>{o.stopPropagation(),e=0,i=t.getBoundingClientRect().height,t.style.minHeight="0px"},onmove:o=>{o.stopPropagation();const n=o.deltaRect;e+=n.height,t.style.height=`${i+e}px`},onend:n=>{n.stopPropagation();const s=(0,o.getAppConfigAction)().appConfig.header;t.style.height=null,t.style.minHeight=null,(0,o.getAppConfigAction)().editHeader(s.setIn(["height",a.utils.getCurrentSizeMode()],Math.round(i+e))).exec()}})}(h.current)),()=>{t&&t.unset()}}),[]);const v=qa(),I=e.React.useMemo((()=>Object.assign(Object.assign({},u),{isHeader:!0,rootLayoutId:v,viewOnly:f||p&&d!==e.PagePart.Header})),[u,v,f,d,p]),x=e.React.useCallback(((t,e)=>{c(Math.round(e))}),[c]);return(0,e.jsx)(a.PageContext.Provider,{value:I},(0,e.jsx)("div",{className:"header",css:tl(n,g,s,u.builderTheme,u.theme),ref:t=>h.current=t},(0,e.jsx)("div",{className:"w-100 h-100",css:e.css`
            overflow: auto;
            display: flex;
            position: relative;
            z-index: 0;
            min-height: ${parseFloat(g)}px;
          `},(0,e.jsx)(Ae,{layouts:m,isPageItem:!0,visible:s})),!f&&(0,e.jsx)("span",{className:"resize-handler",css:e.css`
              bottom: ${-8}px;
              z-index: 1;
            `}),d!==e.PagePart.Header&&!f&&(0,e.jsx)("div",{className:"edit-mask-all",css:e.css`
              ${Za};
              background: ${d===e.PagePart.Body?"transparent":e.polished.rgba(y.colors.palette.light[400],.6)};
              z-index: 1;
            `,onClick:Xa}),d===e.PagePart.Body&&(!f||l===r)&&(0,e.jsx)("div",{className:"edit-mask justify-content-center align-items-center",css:e.css`
              ${Za};
              background: ${e.polished.rgba(y.colors.palette.light[400],.6)};
              z-index: 1;
              display: none;
            `},(0,e.jsx)(i.Button,{className:"edit-btn btn-large border-0",onClick:_a},(0,e.jsx)(Wa,{size:"m"}),u.formatMessage("editHeader"))),(0,e.jsx)(e.ReactResizeDetector,{handleHeight:!0,handleWidth:!1,onResize:x})))}function ol(t,o,i,n,s){return e.css`
    ${Ga};
    ${Ua(n)};
    display: ${i?"flex":"none"};
    position: relative;
    width: 100%;
    height: auto;
    min-height: ${parseFloat(o)}px;
    overflow: hidden;
    background-color: ${t.backgroundColor||s.footer.bg||"transparent"};
    background-image: ${t.backgroundIMage};
    background-position: ${t.backgroundPosition};
    color: ${s.footer.color};
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
  `}function il(t){const{footer:n,footerVisible:s,browserSizeMode:l,mainSizeMode:r,activePagePart:d,pageContext:u,onHeightChange:c}=t,p=e.ReactRedux.useSelector((t=>{var o;return(null===(o=t.appRuntimeInfo)||void 0===o?void 0:o.appMode)===e.AppMode.Design})),h=e.React.useRef(null),g=n.height[l]||n.height[r]||75,m=n.layout,f=!m[l],y=u.builderTheme;e.React.useEffect((()=>{let t;return h.current&&(t=function(t){let e,i;return(0,gt.interact)(t).origin("parent").resizable({inertia:!1,edges:{top:".resize-handler"},onstart:o=>{o.stopPropagation(),e=0,i=t.getBoundingClientRect().height},onmove:o=>{o.stopPropagation();const n=o.deltaRect;e+=n.height,t.style.height=`${i+e}px`},onend:n=>{n.stopPropagation();const s=(0,o.getAppConfigAction)().appConfig.footer;t.style.height=null,(0,o.getAppConfigAction)().editFooter(s.setIn(["height",a.utils.getCurrentSizeMode()],Math.round(i+e))).exec()}})}(h.current)),()=>{t&&t.unset()}}),[]);const v=Ja(),I=e.React.useMemo((()=>Object.assign(Object.assign({},u),{isFooter:!0,rootLayoutId:v,viewOnly:f||p&&d!==e.PagePart.Footer})),[u,v,f,d,p]),x=e.React.useCallback(((t,e)=>{c(Math.round(e))}),[c]);return(0,e.jsx)(a.PageContext.Provider,{value:I},(0,e.jsx)("div",{className:"footer",css:ol(n,g,s,u.builderTheme,u.theme),ref:t=>h.current=t},!f&&(0,e.jsx)("span",{className:"resize-handler",css:e.css`
              top: ${-8}px;
              z-index: 1;
            `}),(0,e.jsx)("div",{className:"w-100 h-100",css:e.css`
            overflow: auto;
            display: flex;
            position: relative;
            z-index: 0;
            min-height: ${parseFloat(g)}px;
          `},(0,e.jsx)(Ae,{layouts:m,isPageItem:!0,visible:s})),d!==e.PagePart.Footer&&!f&&(0,e.jsx)("div",{className:"edit-mask-all",css:e.css`
              ${Za};
              background: ${d===e.PagePart.Body?"transparent":e.polished.rgba(y.colors.palette.light[400],.6)};
              z-index: 1;
            `,onClick:Xa}),d===e.PagePart.Body&&(!f||l===r)&&(0,e.jsx)("div",{className:"edit-mask justify-content-center align-items-center",css:e.css`
              ${Za};
              background: ${e.polished.rgba(y.colors.palette.light[400],.6)};
              z-index: 1;
              display: none;
            `},(0,e.jsx)(i.Button,{className:"edit-btn btn-large border-0",onClick:Ya},(0,e.jsx)(Wa,{size:"m"}),u.formatMessage("editFooter"))),(0,e.jsx)(e.ReactResizeDetector,{handleHeight:!0,handleWidth:!1,onResize:x})))}function nl(t){const{pageJson:o,visible:i,renderedPageId:n,browserSizeMode:s,activePagePart:l,pageContext:r,headerFooterHeight:d}=t,[u,c]=e.React.useState(0),{previewId:p,playMode:h}=e.ReactRedux.useSelector((t=>function(t,e){const o=t.appRuntimeInfo.animationPreview;return(null==o?void 0:o.pageId)===e?{previewId:o.id,playMode:o.playMode}:{previewId:0,playMode:null}}(t,o.id)),e.ReactRedux.shallowEqual),g=e.React.useMemo((()=>function(t,o){if(t){const i=(0,e.getAppStore)().getState().appConfig,n=t.layout[i.mainSizeMode],s=i.layouts[n];if((null==s?void 0:s.type)===e.LayoutType.GridLayout)return o>0?`calc(100% - ${o}px)`:"100%"}return"auto"}(o,d)),[d]),m=o.layout,f=o.oneByOneEffect&&o.oneByOneEffect.type!==e.AnimationType.None?o.oneByOneEffect:null,y=e.ReactRedux.useSelector((t=>{var o;return null===f||(null===(o=t.appRuntimeInfo)||void 0===o?void 0:o.appMode)===e.AppMode.Design})),v=e.ReactRedux.useSelector((t=>null===f?null:t.browserSizeMode)),I=e.React.useRef(f),x=e.React.useRef(v),b=e.React.useRef(i),w=f?!i:null;e.React.useEffect((()=>{I.current=f})),e.React.useEffect((()=>{y&&b.current||c((0,e.getNextAnimationId)())}),[y]),e.React.useEffect((()=>{y||x.current===v||c((0,e.getNextAnimationId)()),x.current=v}),[v,y]),e.React.useEffect((()=>{!y&&b.current!==i&&I.current&&c((0,e.getNextAnimationId)()),b.current=i}),[i]);const S=!m[s];let C;o.mode!==e.PageMode.FitWindow&&o.maxWidth>0&&(C=o.maxWidth);const R=e.React.useMemo((()=>{const t=(0,e.getAppStore)().getState();let i;return o.layout&&(i=a.searchUtils.findLayoutId(o.layout,s,t.appConfig.mainSizeMode)),Object.assign(Object.assign({},r),{maxWidth:C,viewOnly:S,rootLayoutId:i,pageId:n})}),[r,S,C,n,o.layout,s]),A=e.React.useMemo((()=>({setting:!y||p>0?f:null,revert:w,playId:p>0?p:u,oid:R.rootLayoutId,playMode:h,onContextAnimationEnd:()=>{p>0?(0,e.getAppStore)().dispatch(e.appActions.clearAnimationPreview()):c(-1)}})),[y,w,u,p,f,R.rootLayoutId]),T=e.React.useCallback((()=>e.css`
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
    `),[i,g,l,o.bodyBackgroundColor]);if(m)return(0,e.jsx)(a.PageContext.Provider,{key:o.id,value:R},(0,e.jsx)(a.PageVisibilityContext.Provider,{value:i},(0,e.jsx)("div",{id:o.id,"data-pageid":o.id,className:"page",css:T()},(0,e.jsx)(e.AnimationContext.Provider,{value:A},(0,e.jsx)(Ae,{layouts:m,isPageItem:!0,visible:i,className:"w-100",css:e.css`
                margin: 0 auto;
                background-color: transparent;
                z-index: 0;
              `})),l!==e.PagePart.Body&&(0,e.jsx)("div",{className:"edit-mask",css:e.css`
                ${Za};
                background: ${e.polished.rgba(r.theme.colors.palette.dark[800],.6)};
                z-index: 1;
              `,onClick:Xa}))))}(0,a.registerLayoutBuilder)(e.LayoutType.FixedLayout,Li),(0,a.registerLayoutBuilder)(e.LayoutType.FlowLayout,Fa),(0,a.registerLayoutBuilder)(e.LayoutType.GridLayout,Zn),(0,a.registerLayoutBuilder)(e.LayoutType.ColumnLayout,Di);class sl extends e.React.PureComponent{constructor(t){super(t),this.updateHeaderHeight=t=>{this.setState({headerHeight:t})},this.updateFooterHeight=t=>{this.setState({footerHeight:t})},this.startPaste=()=>{var t;const i=null===(t=(0,e.getAppStore)().getState().appRuntimeInfo)||void 0===t?void 0:t.clipboard,{activePagePart:n,pageStatus:s,currentDialogId:l,dialogs:r}=this.props;if(i){let t;t=l&&r[l]?Qa(l):n===e.PagePart.Header?qa():n===e.PagePart.Footer?Ja():function(t){var o;const i=(0,e.getAppStore)().getState(),n=null===(o=i.appConfig.pages[t])||void 0===o?void 0:o.layout;return n?a.searchUtils.findLayoutId(n,i.browserSizeMode,i.appConfig.mainSizeMode):null}(Ka(s)),function(t,i){var n,s;const l=(0,o.getAppConfigAction)(),{layoutId:r,layoutItemId:d}=t;if(!(null===(s=null===(n=l.appConfig.layouts[r])||void 0===n?void 0:n.content)||void 0===s?void 0:s[d]))return;const u=l.appConfig.layouts[i].type;u===e.LayoutType.FlowLayout?function(t,i){var n,s,a;I(this,void 0,void 0,(function*(){const l=(0,o.getAppConfigAction)(),{layoutId:r,layoutItemId:d,width:u,height:c}=t,p=l.duplicateLayoutItem(r,r,d,!0),h=null!==(s=null===(n=(0,e.getAppStore)().getState().appRuntimeInfo)||void 0===n?void 0:n.zoomScale)&&void 0!==s?s:1,g=function(t,e,o){const i=window.parent.document.querySelector('iframe[name="_appWindow"]'),n=document.querySelectorAll(`div.flow-layout[data-layoutid="${t}"] > div.trail-container > div.builder-layout-item`);let s=-1,a=2;if(i&&n){const t=i.getBoundingClientRect();n.forEach(((e,o)=>{if(-1===s){const i=e.getBoundingClientRect();(i.top+t.top>=0||i.top+i.height+t.top>=0)&&(s=o+1)}})),a=Math.round(12*e*o/t.width)}return{colSpan:a,insertIndex:s}}(i,u,h);if(-1===g.insertIndex&&(g.insertIndex=(null===(a=l.appConfig.layouts[i].order)||void 0===a?void 0:a.length)||0),l.appConfig.layouts[r].type===e.LayoutType.FlowLayout){const{updatedAppConfig:t}=yield R(l.appConfig,{layoutInfo:p},{layoutId:i},{left:0,top:0,width:u,height:c},{left:0,top:0,width:u,height:c},g.insertIndex);window.jimuConfig.isBuilder?((0,o.getAppConfigAction)(t).exec(),o.builderAppSync.publishChangeSelectionToApp(p)):(0,e.getAppStore)().dispatch(e.appActions.layoutChanged(t,p))}else z({layoutInfo:p},{layoutId:i},{left:0,top:0,width:u,height:c},{left:0,top:0,width:u,height:c},g.colSpan,g.insertIndex,l.appConfig).catch((t=>console.error(t)))}))}(t,i):u===e.LayoutType.FixedLayout?function(t,i,n=null){var s,l,r,d;let u=(0,o.getAppConfigAction)();const{layoutId:c,layoutItemId:p,width:h,height:g}=t,m=(null===(l=null===(s=u.appConfig.layouts[c])||void 0===s?void 0:s.content)||void 0===l?void 0:l[p]).bbox,f=u.duplicateLayoutItem(c,c,p,!0),y=null!==(d=null===(r=(0,e.getAppStore)().getState().appRuntimeInfo)||void 0===r?void 0:r.zoomScale)&&void 0!==d?d:1;R(u.appConfig,{layoutInfo:f},{layoutId:i},{left:0,right:0,width:h,height:g},{left:0,right:0,width:h,height:g}).then((t=>{const{layoutInfo:s,updatedAppConfig:l}=t;if(u=(0,o.getAppConfigAction)(l),n||(n=function(t){const e=window.parent.document.querySelector('div[data-layoutid="right-sidebar-left-layout"]'),o=window.parent.document.querySelector('iframe[name="_appWindow"]');let i,n,s,a,l;if(e&&o){const r=e.getBoundingClientRect(),d=o.getBoundingClientRect();if(n=d.left,s=d.top,a=d.width,l=d.height,t&&(i=(o.contentDocument||o.contentWindow.document).querySelector(`div.layout[data-layoutid="${t}"]`),i)){const t=i.getBoundingClientRect();n+=t.left,s+=t.top,a=t.width,l=t.height}return{left:n>=r.left?0:r.left-n,top:s>=r.top?0:r.top-s,width:a,height:l}}return null}(i)),n){const t=n.width/y,e=n.height/y;u.editLayoutItemBBox(s,a.utils.replaceBoundingBox(m,{left:0,top:0,right:0,bottom:0,width:Math.round(h),height:Math.round(g)},{width:t,height:e}))}u.editLayoutItemSetting(s,{vCenter:!0,hCenter:!0});const r=u.appConfig.layouts[s.layoutId].content[s.layoutItemId].bbox;u.editLayoutItemBBox(s,r.set("left","50%").set("top","50%")),(0,e.getAppStore)().dispatch(e.appActions.layoutChanged(u.appConfig,s))}))}(t,i):console.error(`unknown layout type: ${u}`)}(i,t)}},this.isMac=()=>{var t,e;return"macOS"===(null===(e=null===(t=window.jimuUA)||void 0===t?void 0:t.os)||void 0===e?void 0:e.name)},this.clearSelection=t=>{!Q()||It()||ht()||(t.stopPropagation(),(0,e.getAppStore)().dispatch(e.appActions.selectionChanged(null)))},this.formatMessage=(t,e)=>this.props.intl?this.props.intl.formatMessage({id:t,defaultMessage:wt[t]},e):wt[t],this.state={headerHeight:0,footerHeight:0},e.ExtensionManager.getInstance().registerExtension({epName:e.extensionSpec.ExtensionPoints.LayoutTransformer,extension:new Bs}),e.ExtensionManager.getInstance().registerExtension({epName:e.extensionSpec.ExtensionPoints.LayoutTransformer,extension:new Vs}),e.ExtensionManager.getInstance().registerExtension({epName:e.extensionSpec.ExtensionPoints.LayoutTransformer,extension:new Hs}),this.isMac()?this.keyBindings={"command+keyv":this.startPaste}:this.keyBindings={"ctrl+keyv":this.startPaste},this.updatePageContext()}componentDidMount(){Q()&&!document.body.classList.contains("design-mode")&&document.body.classList.add("design-mode"),q()&&!document.body.classList.contains("lock-layout")&&document.body.classList.add("lock-layout")}componentDidUpdate(t){var e;const o=null===(e=window.document)||void 0===e?void 0:e.documentElement;o&&(window.jimuConfig.isInBuilder&&Q()?o.classList.add("is-in-builder"):o.classList.remove("is-in-builder")),Ka(t.pageStatus)!==Ka(this.props.pageStatus)&&(this.pageRef.scrollTop=0)}getPageStyle(){const{pageStatus:t,pages:o,minHeight:i}=this.props,n=o[Object.keys(t).find((e=>t[e]))];return e.css`
      position: relative;
      margin: 0 auto;
      overflow: hidden;
      height: ${n.mode===e.PageMode.FitWindow?"100%":"auto"};
      min-height: ${i}px;
      .is-dragging {
        z-index: ${a.LayoutZIndex.DraggingItem};
        opacity: 0.8;
      }

      body:not(.design-mode) & {
        overflow: auto;
        height: 100%;
      }
    `}updatePageContext(){const{theme:t}=this.props,o={theme:t,builderTheme:(0,c.getBuilderThemeVariables)(),formatMessage:this.formatMessage};if(this.pageContext)for(const t in o)this.pageContext[t]!==o[t]&&(this.pageContext=this.pageContext.set(t,o[t]));else this.pageContext=(0,e.Immutable)(o)}render(){const{pageStatus:t,pages:o}=this.props,i=Ka(t);return i&&(null==o?void 0:o[i])?(this.updatePageContext(),(0,e.jsx)("div",{className:"page-renderer d-flex flex-column align-items-center w-100",ref:t=>this.pageRef=t,css:this.getPageStyle(),"data-testid":"pageRenderer",onClick:this.clearSelection},this.renderDialog(),this.renderHeader(),Object.keys(t).map((t=>this.renderPageBody(t))),this.renderFooter(),(0,e.jsx)(e.Keyboard,{bindings:this.keyBindings}))):null}renderHeader(){if(!this.props.header)return null;const{header:t,headerVisible:o,browserSizeMode:i,mainSizeMode:n,activePagePart:s}=this.props;return(0,e.jsx)(el,{header:t,activePagePart:s,headerVisible:o,browserSizeMode:i,mainSizeMode:n,pageContext:this.pageContext,onHeightChange:this.updateHeaderHeight})}renderFooter(){if(!this.props.footer)return null;const{footer:t,footerVisible:o,browserSizeMode:i,mainSizeMode:n,activePagePart:s}=this.props;return(0,e.jsx)(il,{footer:t,activePagePart:s,footerVisible:o,browserSizeMode:i,mainSizeMode:n,pageContext:this.pageContext,onHeightChange:this.updateFooterHeight})}renderPageBody(t){const{pages:o,pageStatus:i,browserSizeMode:n,activePagePart:s}=this.props,a=o[t];if(a&&a.type===e.PageType.Normal)return(0,e.jsx)(nl,{key:a.id,pageJson:a,renderedPageId:t,activePagePart:s,browserSizeMode:n,pageContext:this.pageContext,visible:!!i[a.id],headerFooterHeight:this.state.headerHeight+this.state.footerHeight})}isDialogViewOnly(t){const{browserSizeMode:o}=this.props;return!(o===e.BrowserSizeMode.Large||t.layout[o])}renderDialog(){const{currentDialogId:t,urlDialogJson:o,splashDialogJson:i,isSplashClosed:n,isPageDlgClosed:s,pageDialogJson:l,pageDialogId:r}=this.props,d=!n&&i,u=!s&&l,c=o?(null==i?void 0:i.id)===o.id||(null==l?void 0:l.id)===o.id?null:o:null;return(0,e.jsx)(e.React.Fragment,null,c&&(0,e.jsx)(a.PageContext.Provider,{value:Object.assign(Object.assign({},this.pageContext),{dialogId:t,isDialog:!0,viewOnly:this.isDialogViewOnly(o),rootLayoutId:Qa(t)})},(0,e.jsx)(e.AppDialog,{dialogJson:o})),u&&(0,e.jsx)(a.PageContext.Provider,{value:Object.assign(Object.assign({},this.pageContext),{dialogId:r,isDialog:!0,viewOnly:this.isDialogViewOnly(l),rootLayoutId:Qa(l.id)})},(0,e.jsx)(e.AppDialog,{dialogJson:l,isOpenByPage:!0})),d&&(0,e.jsx)(a.PageContext.Provider,{value:Object.assign(Object.assign({},this.pageContext),{dialogId:i.id,isDialog:!0,viewOnly:this.isDialogViewOnly(i),rootLayoutId:Qa(i.id)})},(0,e.jsx)(e.AppDialog,{dialogJson:i})))}}sl.displayName="BuilderPageRenderer";const al=(0,e.injectIntl)(e.ReactRedux.connect(((t,o)=>{var i,n,s,a,l,r,d;const u=e.utils.findViewportSize(t.appConfig,t.browserSizeMode),c=Ka(o.pageStatus);if(!c||!t.appConfig.pages[c])return{};const p=t.appConfig.pages[t.appRuntimeInfo.currentPageId].autoOpenDialogId,h=t.appConfig.dialogs,g=h[Object.keys(h).find((t=>h[t].isSplash))];return{pages:t.appConfig.pages,header:t.appConfig.header,headerVisible:!!t.appConfig.pages[c].header,footer:t.appConfig.footer,footerVisible:!!t.appConfig.pages[c].footer,mainSizeMode:t.appConfig.mainSizeMode,browserSizeMode:t.browserSizeMode,minHeight:u.height,activePagePart:null!==(i=t.appRuntimeInfo.activePagePart)&&void 0!==i?i:e.PagePart.Body,clipboardItem:t.appRuntimeInfo.clipboard,dialogs:t.appConfig.dialogs,currentDialogId:t.appRuntimeInfo.currentDialogId,splashDialogJson:g,isSplashClosed:null===(a=null===(s=null===(n=t.appRuntimeInfo)||void 0===n?void 0:n.dialogInfos)||void 0===s?void 0:s[null==g?void 0:g.id])||void 0===a?void 0:a.isClosed,pageDialogId:p,pageDialogJson:h[p],isPageDlgClosed:null===(d=null===(r=null===(l=t.appRuntimeInfo)||void 0===l?void 0:l.dialogInfos)||void 0===r?void 0:r[t.appRuntimeInfo.currentPageId+"-"+p])||void 0===d?void 0:d.isClosed,urlDialogJson:h[o.dialogId]}}))((0,c.withTheme)(sl)));var ll=p(8679);function rl(t,o){var i,n,s,l;const r=o.layoutId,d=t.appRuntimeInfo.selection,u=o.layoutItem;let c=!1,p=!1,h=!1,g=!1;if(u&&(c=Boolean(d&&r===d.layoutId&&u.id===d.layoutItemId),u.type===e.LayoutItemType.Widget)){const e=t.appConfig.widgets[u.widgetId],o=null===(n=null===(i=null==e?void 0:e.manifest)||void 0===i?void 0:i.properties)||void 0===n?void 0:n.supportInlineEditing;if(h=null===(l=null===(s=null==e?void 0:e.manifest)||void 0===s?void 0:s.properties)||void 0===l?void 0:l.supportRepeat,o){const e=t.widgetsRuntimeInfo[u.widgetId];p=e&&e.isInlineEditing}g=a.utils.isWidgetHasEmbeddedLayout(u.widgetId,t.appConfig)}return{selected:c,supportRepeat:h,isInlineEditing:p,isLayoutWidget:g}}const dl=()=>{};function ul(t){return t=>{class o extends e.React.PureComponent{constructor(t){super(t),this.ref=e.React.createRef()}componentDidMount(){const{layoutId:t,layoutItemId:e,layoutItem:o,onResizeStart:i,onResizing:n,onResizeEnd:s,onDragStart:a,onDragging:l,onDragEnd:r,useDragHandler:d}=this.props;this.ref.current&&(this.interactable=(0,gt.interact)(this.ref.current).origin("parent"),this.interactable=ct(this.interactable,{layoutId:t,layoutItemId:e,useDragHandler:d,onDragging:l,onDragStart:a,onDragEnd:r,itemType:o.type,rootLayoutId:()=>this.rootLayoutId,restrict:()=>this.props.restrict}),this.interactable=yt(this.interactable,{layoutItemId:e,onResizing:n,onResizeStart:i,onResizeEnd:s}))}componentWillUnMount(){this.interactable&&(this.interactable.unset(),this.interactable=null)}getStyle(t){return e.css`
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
        `}render(){return(0,e.jsx)(a.PageContext.Consumer,null,(o=>{this.rootLayoutId=o.rootLayoutId;const i=this.props,{gridSize:n,draggable:s,onResizeStart:a,onResizing:l,onResizeEnd:r,style:d,className:u,useDragHandler:c,children:p}=i,h=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o}(i,["gridSize","draggable","onResizeStart","onResizing","onResizeEnd","style","className","useDragHandler","children"]),{isInlineEditing:g}=this.props,m=(0,e.classNames)("exb-rnd",u,{"functional-widget":!this.props.isLayoutWidget}),f="string"==typeof d?JSON.parse(d):Object.assign({},d);return this.props.forceAspectRatio&&(f.height="auto"),(0,e.jsx)("div",{className:m,ref:this.ref,css:this.getStyle(g),"data-layoutid":this.props.layoutId,"data-layoutitemid":this.props.layoutItemId,"data-repeatable":this.props.supportRepeat,style:f},(0,e.jsx)("div",{className:"rnd-aspect-ratio-wrapper"},(0,e.jsx)(t,Object.assign({layoutId:this.props.layoutId,className:"w-100",layoutItemId:this.props.layoutItemId},h))),p)}))}}o.defaultProps={left:!0,top:!0,right:!0,bottom:!0,restrict:!1,onResizeStart:dl,onResizing:dl,onResizeEnd:dl,onDragStart:dl,onDragging:dl,onDragEnd:dl};const i=ll(o,t);return e.ReactRedux.connect(rl)(i)}}const{createPageFromTemplate:cl,createDialogFromTemplate:pl,createSectionFromTemplate:hl,createWidgetFromTemplate:gl}=o.templateUtils})(),h})())}}}));