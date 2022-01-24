/*! For license information please see layout-builder.js.LICENSE.txt */
System.register(["jimu-core","jimu-for-builder","jimu-ui","jimu-layouts/layout-runtime","jimu-core/dnd","jimu-theme","jimu-ui/advanced/setting-components","jimu-for-builder/templates","jimu-ui/advanced/style-setting-components"],(function(t,e){var o={},i={},n={},s={},a={},l={},r={},d={},u={};return{setters:[function(t){o.APP_FRAME_NAME_IN_BUILDER=t.APP_FRAME_NAME_IN_BUILDER,o.Animation=t.Animation,o.AnimationContext=t.AnimationContext,o.AnimationPlayMode=t.AnimationPlayMode,o.AnimationTriggerType=t.AnimationTriggerType,o.AnimationType=t.AnimationType,o.AppDialog=t.AppDialog,o.AppMode=t.AppMode,o.BrowserSizeMode=t.BrowserSizeMode,o.ErrorBoundary=t.ErrorBoundary,o.ExtensionManager=t.ExtensionManager,o.Immutable=t.Immutable,o.Keyboard=t.Keyboard,o.LayoutItemType=t.LayoutItemType,o.LayoutType=t.LayoutType,o.OneByOneAnimation=t.OneByOneAnimation,o.PageMode=t.PageMode,o.PagePart=t.PagePart,o.PageType=t.PageType,o.React=t.React,o.ReactRedux=t.ReactRedux,o.ReactResizeDetector=t.ReactResizeDetector,o.ScreenTransitionType=t.ScreenTransitionType,o.ScreenTriggerType=t.ScreenTriggerType,o.TransitionContainer=t.TransitionContainer,o.TransitionType=t.TransitionType,o.WidgetManager=t.WidgetManager,o.WidgetType=t.WidgetType,o.appActions=t.appActions,o.appConfigUtils=t.appConfigUtils,o.classNames=t.classNames,o.css=t.css,o.extensionSpec=t.extensionSpec,o.getAppStore=t.getAppStore,o.getIndexFromProgress=t.getIndexFromProgress,o.i18n=t.i18n,o.injectIntl=t.injectIntl,o.jimuHistory=t.jimuHistory,o.jsx=t.jsx,o.lodash=t.lodash,o.polished=t.polished,o.spring=t.spring,o.utils=t.utils},function(t){i.appBuilderSync=t.appBuilderSync,i.builderActions=t.builderActions,i.builderAppSync=t.builderAppSync,i.getAppConfigAction=t.getAppConfigAction,i.templateUtils=t.templateUtils},function(t){n.AdvancedButtonGroup=t.AdvancedButtonGroup,n.Button=t.Button,n.Checkbox=t.Checkbox,n.Dropdown=t.Dropdown,n.DropdownButton=t.DropdownButton,n.DropdownMenu=t.DropdownMenu,n.FOCUSABLE_CONTAINER_CLASS=t.FOCUSABLE_CONTAINER_CLASS,n.FillType=t.FillType,n.Icon=t.Icon,n.Loading=t.Loading,n.LoadingType=t.LoadingType,n.NumericInput=t.NumericInput,n.Popper=t.Popper,n.Select=t.Select,n.Switch=t.Switch,n.Tooltip=t.Tooltip,n.UnitTypes=t.UnitTypes,n._Popper=t._Popper,n.getFallbackPlacementsModifier=t.getFallbackPlacementsModifier,n.styleUtils=t.styleUtils,n.utils=t.utils},function(t){s.CLICK_TOLRERANCE=t.CLICK_TOLRERANCE,s.CONTEXT_MENU_ICON_SIZE=t.CONTEXT_MENU_ICON_SIZE,s.CONTEXT_MENU_ITEM_SIZE=t.CONTEXT_MENU_ITEM_SIZE,s.LayoutContext=t.LayoutContext,s.LayoutItemSizeModes=t.LayoutItemSizeModes,s.LayoutZIndex=t.LayoutZIndex,s.MIN_LAYOUT_ITEM_SIZE=t.MIN_LAYOUT_ITEM_SIZE,s.PageContext=t.PageContext,s.PageVisibilityContext=t.PageVisibilityContext,s.ParentType=t.ParentType,s.ViewVisibilityContext=t.ViewVisibilityContext,s.ViewportVisibilityContext=t.ViewportVisibilityContext,s.WidgetRenderer=t.WidgetRenderer,s.findLayoutBuilder=t.findLayoutBuilder,s.registerLayoutBuilder=t.registerLayoutBuilder,s.searchUtils=t.searchUtils,s.utils=t.utils},function(t){a.interact=t.interact},function(t){l.getBuilderThemeVariables=t.getBuilderThemeVariables,l.getTheme=t.getTheme,l.getTheme2=t.getTheme2,l.useTheme=t.useTheme,l.withBuilderTheme=t.withBuilderTheme,l.withTheme=t.withTheme},function(t){r.SettingRow=t.SettingRow,r.SettingSection=t.SettingSection,r.SidePopper=t.SidePopper,r.TemplateSelector=t.TemplateSelector,r.WidgetListPopper=t.WidgetListPopper},function(t){d.getBlockTemplates=t.getBlockTemplates,d.getFooterTemplates=t.getFooterTemplates,d.getFullScreenPageTemplates=t.getFullScreenPageTemplates,d.getHeaderTemplates=t.getHeaderTemplates,d.getScreenGroupTemplates=t.getScreenGroupTemplates,d.getScreenTemplates=t.getScreenTemplates,d.getScrollingPageTemplates=t.getScrollingPageTemplates,d.getWindowTemplates=t.getWindowTemplates},function(t){u.AnimationSettingComponent=t.AnimationSettingComponent,u.BackgroundSetting=t.BackgroundSetting,u.BorderRadiusSetting=t.BorderRadiusSetting,u.BorderSetting=t.BorderSetting,u.BoxShadowSetting=t.BoxShadowSetting,u.InputRatio=t.InputRatio,u.InputUnit=t.InputUnit,u.Padding=t.Padding,u.SizeEditor=t.SizeEditor,u.TransitionSetting=t.TransitionSetting}],execute:function(){t((()=>{var t={8679:(t,e,o)=>{"use strict";var i=o(9864),n={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},s={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};function r(t){return i.isMemo(t)?a:l[t.$$typeof]||n}l[i.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},l[i.Memo]=a;var d=Object.defineProperty,u=Object.getOwnPropertyNames,c=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,h=Object.getPrototypeOf,g=Object.prototype;t.exports=function t(e,o,i){if("string"!=typeof o){if(g){var n=h(o);n&&n!==g&&t(e,n,i)}var a=u(o);c&&(a=a.concat(c(o)));for(var l=r(e),m=r(o),f=0;f<a.length;++f){var y=a[f];if(!(s[y]||i&&i[y]||m&&m[y]||l&&l[y])){var v=p(o,y);try{d(e,y,v)}catch(t){}}}}return e}},6128:t=>{"use strict";t.exports=function(t,e,o,i,n,s,a,l){if(!t){var r;if(void 0===e)r=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var d=[o,i,n,s,a,l],u=0;(r=new Error(e.replace(/%s/g,(function(){return d[u++]})))).name="Invariant Violation"}throw r.framesToPop=1,r}}},9921:(t,e)=>{"use strict";var o="function"==typeof Symbol&&Symbol.for,i=o?Symbol.for("react.element"):60103,n=o?Symbol.for("react.portal"):60106,s=o?Symbol.for("react.fragment"):60107,a=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,r=o?Symbol.for("react.provider"):60109,d=o?Symbol.for("react.context"):60110,u=o?Symbol.for("react.async_mode"):60111,c=o?Symbol.for("react.concurrent_mode"):60111,p=o?Symbol.for("react.forward_ref"):60112,h=o?Symbol.for("react.suspense"):60113,g=o?Symbol.for("react.suspense_list"):60120,m=o?Symbol.for("react.memo"):60115,f=o?Symbol.for("react.lazy"):60116,y=o?Symbol.for("react.block"):60121,v=o?Symbol.for("react.fundamental"):60117,I=o?Symbol.for("react.responder"):60118,x=o?Symbol.for("react.scope"):60119;function b(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case i:switch(t=t.type){case u:case c:case s:case l:case a:case h:return t;default:switch(t=t&&t.$$typeof){case d:case p:case f:case m:case r:return t;default:return e}}case n:return e}}}function w(t){return b(t)===c}e.AsyncMode=u,e.ConcurrentMode=c,e.ContextConsumer=d,e.ContextProvider=r,e.Element=i,e.ForwardRef=p,e.Fragment=s,e.Lazy=f,e.Memo=m,e.Portal=n,e.Profiler=l,e.StrictMode=a,e.Suspense=h,e.isAsyncMode=function(t){return w(t)||b(t)===u},e.isConcurrentMode=w,e.isContextConsumer=function(t){return b(t)===d},e.isContextProvider=function(t){return b(t)===r},e.isElement=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===i},e.isForwardRef=function(t){return b(t)===p},e.isFragment=function(t){return b(t)===s},e.isLazy=function(t){return b(t)===f},e.isMemo=function(t){return b(t)===m},e.isPortal=function(t){return b(t)===n},e.isProfiler=function(t){return b(t)===l},e.isStrictMode=function(t){return b(t)===a},e.isSuspense=function(t){return b(t)===h},e.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===s||t===c||t===l||t===a||t===h||t===g||"object"==typeof t&&null!==t&&(t.$$typeof===f||t.$$typeof===m||t.$$typeof===r||t.$$typeof===d||t.$$typeof===p||t.$$typeof===v||t.$$typeof===I||t.$$typeof===x||t.$$typeof===y)},e.typeOf=b},9864:(t,e,o)=>{"use strict";t.exports=o(9921)},9775:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.154 3.154a.527.527 0 01.746 0l1.317 1.317A8.618 8.618 0 018 4c2.667 0 5.667 1.333 7 4-.696 1.393-1.847 2.422-3.168 3.087l1.014 1.013a.527.527 0 11-.746.746l-1.317-1.317A8.617 8.617 0 018 12c-2.667 0-5.667-1.333-7-4 .696-1.393 1.847-2.422 3.168-3.087L3.154 3.9a.527.527 0 010-.746zm1.698 2.443C3.726 6.087 2.782 6.882 2 8c1.422 2.033 3.382 3 6 3a8.66 8.66 0 002.03-.225l-.675-.674A2.5 2.5 0 015.9 6.644L4.852 5.598zm6.296 4.805C12.275 9.912 13.218 9.118 14 8c-1.422-2.033-3.382-3-6-3-.726 0-1.402.074-2.03.225l.675.674a2.5 2.5 0 013.457 3.456l1.046 1.047zM6.5 8c0-.221.048-.431.134-.62l1.987 1.986A1.5 1.5 0 016.5 8zm.88-1.366l1.986 1.987a1.5 1.5 0 00-1.987-1.987z" fill="#000"></path></svg>'},5369:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 7a1 1 0 100 2 1 1 0 000-2zm5 1a1 1 0 112 0 1 1 0 01-2 0zm6 0a1 1 0 112 0 1 1 0 01-2 0z" fill="#000"></path></svg>'},1553:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.438.994c.213 0 .397.146.44.35.151.722.257 1.34.316 1.852.374.16.725.362 1.048.599l1.728-.676a.455.455 0 01.556.188l1.42 2.394a.43.43 0 01-.091.547 21.98 21.98 0 01-1.49 1.194 5.17 5.17 0 01-.007 1.183l1.464 1.119a.43.43 0 01.111.563l-1.42 2.394a.454.454 0 01-.53.197 22.445 22.445 0 01-1.807-.66c-.325.233-.679.43-1.055.586l-.263 1.794a.446.446 0 01-.445.376H6.574a.446.446 0 01-.44-.35 21.019 21.019 0 01-.317-1.853 5.34 5.34 0 01-1.047-.598l-1.728.675a.455.455 0 01-.556-.187l-1.42-2.395a.43.43 0 01.091-.546c.567-.49 1.063-.888 1.49-1.194a5.167 5.167 0 01.008-1.183L1.19 6.243a.43.43 0 01-.112-.562l1.42-2.395a.455.455 0 01.531-.196c.719.233 1.321.453 1.807.66.324-.233.679-.43 1.056-.587l.262-1.794A.446.446 0 016.6.994h2.839zm-.365 1H6.985l-.28 1.866-.467.19c-.235.095-.46.21-.672.34l-.207.136-.42.293-.476-.197c-.328-.137-.718-.281-1.169-.433l-.221-.074-1.045 1.719L3.59 6.999l-.06.479a4.127 4.127 0 00-.021.816l.014.144.058.492-.419.294c-.288.203-.615.451-.979.746l-.177.145 1.043 1.72 1.845-.703.406.29c.204.146.42.274.645.384l.228.103.474.199.059.49c.04.338.103.731.19 1.177l.043.219h2.088l.282-1.867.466-.19c.236-.095.46-.21.672-.34l.207-.136.419-.293.476.198c.33.136.72.28 1.17.433l.22.072 1.044-1.718-1.56-1.165.06-.479a4.131 4.131 0 00.02-.815l-.013-.144-.06-.492.42-.295a18.1 18.1 0 00.98-.746l.176-.146-1.043-1.72-1.844.705-.406-.29a4.496 4.496 0 00-.646-.385l-.228-.103-.474-.199-.058-.49c-.032-.27-.08-.576-.14-.916l-.094-.48zm-1.067 3a3 3 0 110 6 3 3 0 010-6zm0 1a2 2 0 100 4 2 2 0 000-4z" fill="#000"></path></svg>'},4767:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 2H2v2h12V2zM2 1H1v4h14V1H2zm2 7H2v6h2V8zM2 7H1v8h4V7H2zm6 1h6v6H8V8zM7 7h8v8H7V7z" fill="#000"></path></svg>'},5467:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 12c-2.667 0-5.667-1.333-7-4 1.333-2.667 4.333-4 7-4s5.667 1.333 7 4c-1.333 2.667-4.333 4-7 4zm0-7c-2.618 0-4.578.967-6 3 1.422 2.033 3.382 3 6 3s4.578-.967 6-3c-1.422-2.033-3.382-3-6-3zm0 5.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5zm0-1a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill="#000"></path></svg>'},8683:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 5H2v6h4V5zM1 4v8h6V4H1zM14 5h-4v6h4V5zM9 4v8h6V4H9z" fill="#000"></path></svg>'},760:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 2h12v4H2V2zM1 7V1h14v6H1zm1 3h12v4H2v-4zm-1 5V9h14v6H1z" fill="#000"></path></svg>'},100:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 1.5a.5.5 0 011 0v13a.5.5 0 01-1 0v-13zM14 9H4a1 1 0 00-1 1v2a1 1 0 001 1h10a1 1 0 001-1v-2a1 1 0 00-1-1zM4 12v-2h10v2H4zm0-9h6a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm0 1v2h6V4H4z" fill="#000"></path></svg>'},2653:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 7.5l3-2V7h2v1H4v1.5l-3-2zm14 0l-3 2V8h-2V7h2V5.5l3 2zM7 7h2v1H7V7z" fill="#000"></path></svg>'},3262:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 15a.5.5 0 000-1H7.46l2.348-2.138a.508.508 0 10-.684-.752L8 12.133V2h6.5a.5.5 0 000-1H.5a.5.5 0 000 1H7v10.207l-1.124-1.024a.508.508 0 10-.684.752L7.46 14H.5a.5.5 0 000 1h14zM14 6.5a.5.5 0 01-.5.5H10V6h3.5a.5.5 0 01.5.5zm-13 0a.5.5 0 00.5.5H5V6H1.5a.5.5 0 00-.5.5z" fill="#000"></path></svg>'},7123:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M.5 1a.5.5 0 000 1h7.04L5.192 4.138a.508.508 0 10.684.752L7 3.867V14H.5a.5.5 0 000 1h14a.5.5 0 000-1H8V3.793l1.124 1.024a.508.508 0 00.684-.752L7.54 2h6.96a.5.5 0 000-1H.5zM1 9.5a.5.5 0 01.5-.5H5v1H1.5a.5.5 0 01-.5-.5zm13 0a.5.5 0 00-.5-.5H10v1h3.5a.5.5 0 00.5-.5z" fill="#000"></path></svg>'},1407:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.347 2.146a.485.485 0 010 .708L5.76 8l5.587 5.146a.486.486 0 010 .708.538.538 0 01-.738 0l-5.956-5.5a.485.485 0 010-.708l5.956-5.5a.538.538 0 01.738 0z" fill="#000"></path></svg>'},9791:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 2.707v1.45a.5.5 0 01-1 0V1h3.05a.5.5 0 110 1H2.707L8 7.29 13.293 2H11.95a.5.5 0 110-1H15v3.156a.5.5 0 01-1 0v-1.45L8.707 7.999l5.29 5.289v-1.55a.5.5 0 111 0V15H11.84a.5.5 0 110-1h1.456L8 8.705 2.704 14h1.453a.5.5 0 110 1H1v-3.263a.5.5 0 011 0v1.553l5.293-5.292L2 2.707z" fill="#000"></path></svg>'},3046:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.54 1H14v13H7.46l2.348-2.138a.508.508 0 10-.684-.752L8 12.134V9H7v3.206l-1.124-1.022a.508.508 0 10-.685.751L7.46 14H1V1h6.54zm0 0L5.192 3.138a.508.508 0 10.684.752L7 2.867V6h1V2.794l1.124 1.023a.508.508 0 00.684-.752L7.54 1zM0 1a1 1 0 011-1h13a1 1 0 011 1v13a1 1 0 01-1 1H1a1 1 0 01-1-1V1z" fill="#000"></path></svg>'},3626:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 1v13H1V7.46l2.138 2.348a.508.508 0 00.752-.684L2.867 8H6V7H2.794l1.023-1.124a.508.508 0 00-.752-.685L1 7.46V1h13zm0-1a1 1 0 011 1v13a1 1 0 01-1 1H1a1 1 0 01-1-1V1a1 1 0 011-1h13zm-1.867 7L11.11 5.876a.508.508 0 11.752-.684L14 7.54l-2.065 2.268a.508.508 0 01-.752-.684L12.207 8H9V7h3.133z" fill="#000"></path></svg>'},3273:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.653 13.854a.485.485 0 010-.708L10.24 8 4.653 2.854a.485.485 0 010-.708.538.538 0 01.738 0l5.956 5.5a.485.485 0 010 .708l-5.956 5.5a.538.538 0 01-.738 0z" fill="#000"></path></svg>'},1282:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.124 12.11L8 13.133V2h6.5a.5.5 0 000-1H.5a.5.5 0 000 1H7v11.207l-1.124-1.024a.508.508 0 10-.684.752L7.46 15l2.348-2.138a.508.508 0 10-.684-.752zM13.5 7a.5.5 0 000-1H10v1h3.5zm-12 0a.5.5 0 010-1H5v1H1.5z" fill="#000"></path></svg>'},2340:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.876 3.89L7 2.867V14H.5a.5.5 0 000 1h14a.5.5 0 000-1H8V2.794l1.124 1.023a.508.508 0 00.684-.752L7.54 1 5.192 3.138a.508.508 0 00.684.752zM1.5 9a.5.5 0 000 1H5V9H1.5zm12 0a.5.5 0 010 1H10V9h3.5z" fill="#000"></path></svg>'},4201:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 14a.5.5 0 000-1h-6l3.953-3.459a.5.5 0 00-.658-.752L8 11.234V1.5a.5.5 0 00-1 0v9.734L4.206 8.789a.5.5 0 00-.659.752L7.5 13h-6a.5.5 0 000 1h12z" fill="#000"></path></svg>'},4703:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 0a.5.5 0 00-.5.5v14a.5.5 0 001 0V.5a.5.5 0 00-.5-.5zM0 7.5c0 .291.231.527.516.527h3.508L2.527 9.6a.535.535 0 000 .746.508.508 0 00.73 0L6 7.5 3.257 4.654a.508.508 0 00-.73 0 .535.535 0 000 .746l1.497 1.573H.516A.522.522 0 000 7.5zm15 0a.522.522 0 01-.516.527h-3.508L12.473 9.6a.535.535 0 010 .746.508.508 0 01-.73 0L9 7.5l2.743-2.846a.508.508 0 01.73 0 .535.535 0 010 .746l-1.497 1.573h3.508c.285 0 .516.236.516.527z" fill="#000"></path></svg>'},1528:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 13.5a.5.5 0 001 0v-6l3.459 3.953a.5.5 0 00.752-.658L3.766 8H13.5a.5.5 0 000-1H3.766l2.445-2.794a.5.5 0 10-.752-.659L2 7.5v-6a.5.5 0 00-1 0v12z" fill="#000"></path></svg>'},7319:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 1.5a.5.5 0 00-1 0v6L9.541 3.547a.5.5 0 10-.752.658L11.234 7H1.5a.5.5 0 000 1h9.734l-2.445 2.794a.5.5 0 10.752.659L13 7.5v6a.5.5 0 001 0v-12z" fill="#000"></path></svg>'},3166:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 1a.5.5 0 000 1h6L3.547 5.459a.5.5 0 10.658.752L7 3.766V13.5a.5.5 0 001 0V3.766l2.794 2.445a.5.5 0 10.659-.752L7.5 2h6a.5.5 0 000-1h-12z" fill="#000"></path></svg>'},7758:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 7.5a.5.5 0 00-.5-.5H.5a.5.5 0 000 1h14a.5.5 0 00.5-.5zM7.5 0a.522.522 0 00-.527.516v3.508L5.4 2.527a.535.535 0 00-.746 0 .508.508 0 000 .73L7.5 6l2.846-2.743a.508.508 0 000-.73.535.535 0 00-.746 0L8.027 4.024V.516A.522.522 0 007.5 0zm0 15a.522.522 0 01-.527-.516v-3.508L5.4 12.473a.535.535 0 01-.746 0 .508.508 0 010-.73L7.5 9l2.846 2.743a.508.508 0 010 .73.535.535 0 01-.746 0l-1.573-1.497v3.508A.522.522 0 017.5 15z" fill="#000"></path></svg>'},6009:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.854 11.347a.486.486 0 01-.708 0L8 5.76l-5.146 5.587a.485.485 0 01-.708 0 .538.538 0 010-.738l5.5-5.956a.485.485 0 01.708 0l5.5 5.956a.538.538 0 010 .738z" fill="#000"></path></svg>'},5339:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.745 8l6.1 6.1a.527.527 0 11-.745.746L8 8.746l-6.1 6.1a.527.527 0 11-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 01.746-.746l6.1 6.1 6.1-6.1a.527.527 0 01.746.746L8.746 8z" fill="#000"></path></svg>'},9365:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.994 2.243A1.375 1.375 0 0013.625 1h-7.25l-.132.006A1.375 1.375 0 005 2.375v1.75h.917v-1.75l.007-.082a.458.458 0 01.451-.376h7.25l.082.007a.458.458 0 01.376.451v7.25l-.007.082a.458.458 0 01-.451.376h-1.738V11h1.738l.132-.006A1.375 1.375 0 0015 9.625v-7.25l-.006-.132zM9.625 5h-7.25C1.615 5 1 5.616 1 6.375v7.25C1 14.385 1.616 15 2.375 15h7.25c.76 0 1.375-.616 1.375-1.375v-7.25C11 5.615 10.384 5 9.625 5zM2.4 6h7.2c.22 0 .4.201.4.45v7.1c0 .248-.18.45-.4.45H2.4c-.22 0-.4-.201-.4-.45v-7.1c0-.249.18-.45.4-.45zM4 8h4v1H4V8zm4 3H4v1h4v-1z" fill="#000"></path></svg>'},970:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 11a.5.5 0 00.5-.5V2h8.5a.5.5 0 000-1H2a1 1 0 00-1 1v8.5a.5.5 0 00.5.5zM5 4h9a1 1 0 011 1v9a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1zm0 1v9h9V5H5z" fill="#000"></path></svg>'},9216:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.226 1.312c-.403-.404-1.044-.417-1.431-.03L2.49 8.587l-.48 2.674a.637.637 0 00.73.73l2.673-.48 7.305-7.306c.387-.387.374-1.028-.03-1.431l-1.462-1.462zm-8.113 9.575l.32-1.781 4.991-4.992 1.462 1.462-4.992 4.991-1.781.32zm7.473-6.012l1.402-1.4-1.462-1.463-1.401 1.402 1.461 1.461z" fill="#000"></path><path d="M1.5 14a.5.5 0 000 1h13a.5.5 0 000-1h-13z" fill="#000"></path></svg>'},3616:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0a4 4 0 014 4v8a4 4 0 01-4 4H4a4 4 0 01-4-4V4a4 4 0 014-4h8zm0 1H4a3 3 0 00-2.995 2.824L1 4v8a3 3 0 002.824 2.995L4 15h8a3 3 0 002.995-2.824L15 12V4a3 3 0 00-2.824-2.995L12 1zM8 4a4 4 0 110 8 4 4 0 010-8zm0 1a3 3 0 100 6 3 3 0 000-6z" fill="#000"></path></svg>'},840:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 0A3.5 3.5 0 0111 3.5V6h1a1 1 0 011 1v8a1 1 0 01-1 1H3a1 1 0 01-1-1V7a1 1 0 011-1h1V3.5A3.5 3.5 0 017.5 0zM5 6h5V3.5a2.5 2.5 0 00-2.336-2.495L7.5 1a2.5 2.5 0 00-2.495 2.336L5 3.5V6zm6 1H3v8h9V7h-1zm-3.5 5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill="#000"></path></svg>'},5384:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 1.914L6.475 2.94a.5.5 0 11-.707-.707L8 0l2.157 2.157a.5.5 0 01-.707.707l-.95-.95V7.5h5.586l-1.1-1.1a.5.5 0 11.706-.708L16 8l-2.232 2.232a.5.5 0 11-.707-.707L14.086 8.5H8.5v5.586l1.025-1.025a.5.5 0 11.707.707L8 16l-2.308-2.308a.5.5 0 11.707-.707l1.101 1.1V8.5H1.914l.95.95a.5.5 0 01-.707.707L0 8l2.232-2.232a.5.5 0 11.707.707L1.914 7.5H7.5V1.914z" fill="#000"></path></svg>'},3059:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 8.002a.5.5 0 01-1 0V1H1v12.002h3.5a.5.5 0 110 1H1a1 1 0 01-1-1V1A1 1 0 01.044.706.498.498 0 01.5 0H11a1 1 0 011 1v7.002zm2.218 1.486a.5.5 0 00-.708 0l-5.657 5.658a.5.5 0 00.708.707l5.657-5.658a.5.5 0 000-.707zM11 9.928c.376 0 .794.041 1.23.141l-.871.871a5.147 5.147 0 00-.359-.012c-1 0-2.731.297-3.83 2 .313.486.677.857 1.062 1.14l-.676.676A6.081 6.081 0 016 12.928c1.333-2.334 3.5-3 5-3zm0 5c-.219 0-.472-.014-.746-.054l-.824.825a5.62 5.62 0 001.57.23c1.5 0 3.667-.667 5-3a6.012 6.012 0 00-1.804-1.998l-.684.684c.478.299.936.721 1.319 1.313-1.1 1.704-2.831 2-3.831 2zM2.5 3.502A.5.5 0 013 3h6a.5.5 0 010 1H3a.5.5 0 01-.5-.5zM3 6a.5.5 0 000 1h2a.5.5 0 000-1H3z" fill="#000"></path></svg>'},4750:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 0a.5.5 0 00-.5.5V7H.5a.5.5 0 000 1H7v6.5a.5.5 0 001 0V8h6.5a.5.5 0 000-1H8V.5a.5.5 0 00-.5-.5z" fill="#000"></path></svg>'},4357:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 6.5a.5.5 0 011 0v6a.5.5 0 01-1 0v-6zM9.5 6a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5z" fill="#000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11 0H5a1 1 0 00-1 1v2H.5a.5.5 0 000 1h1.6l.81 11.1a1 1 0 00.995.9h8.19a1 1 0 00.995-.9L13.9 4h1.6a.5.5 0 000-1H12V1a1 1 0 00-1-1zm0 3V1H5v2h6zm1.895 1h-9.79l.8 11h8.19l.8-11z" fill="#000"></path></svg>'},7465:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0a4 4 0 014 4v8a4 4 0 01-4 4H4a4 4 0 01-4-4V4a4 4 0 014-4h8zm0 1H4a3 3 0 00-2.995 2.824L1 4v8a3 3 0 002.824 2.995L4 15h8a3 3 0 002.995-2.824L15 12V4a3 3 0 00-2.824-2.995L12 1zM8 4a4 4 0 100 8 4 4 0 000-8z" fill="#000"></path></svg>'},7322:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 3.5a3.5 3.5 0 10-7 0V6H3a1 1 0 00-1 1v8a1 1 0 001 1h9a1 1 0 001-1V7a1 1 0 00-1-1h-2V3.5l.005-.164A2.5 2.5 0 0112.5 1l.164.005A2.5 2.5 0 0115 3.5a.5.5 0 001 0zM9 7H3v8h9V7H9zm-1.5 5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill="#000"></path></svg>'},5124:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 0l8 6-8 6-8-6 8-6zM1.887 6L8 10.82 14.113 6 8 1.18 1.887 6zM0 9.81L.563 9 8 14.775 15.437 9l.563.81L8 16 0 9.81z" fill="#000"></path></svg>'},325:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M19.637 15.866L30.951 27.18a2.667 2.667 0 01-3.771 3.771L15.866 19.637 4.552 30.951A2.667 2.667 0 01.781 27.18l11.314-11.314L.781 4.552A2.667 2.667 0 014.552.781l11.314 11.314L27.18.781a2.667 2.667 0 013.771 3.771L19.637 15.866z"></path></svg>'},9781:t=>{t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjkycHgiIGhlaWdodD0iNzJweCIgdmlld0JveD0iMCAwIDkyIDcyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT5pY29uX2FuaW1hdGlvbl9pbl9ub25lPC90aXRsZT4NCiAgICA8ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTk0MS4wMDAwMDAsIC0xOTIuMDAwMDAwKSI+DQogICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5MTcuMDAwMDAwLCA1Mi4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNC4wMDAwMDAsIDE0MC4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgPHJlY3QgZmlsbC1ydWxlPSJub256ZXJvIiB4PSIwIiB5PSIwIiB3aWR0aD0iOTIiIGhlaWdodD0iNzIiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0iIzZBNkE2QSIgcG9pbnRzPSI0NiA0OCAzMS44OTMxNTM5IDU1LjQxNjQwNzkgMzQuNTg3MzIxOCAzOS43MDgyMDM5IDIzLjE3NDY0MzYgMjguNTgzNTkyMSAzOC45NDY1NzcgMjYuMjkxNzk2MSA0NiAxMiA1My4wNTM0MjMgMjYuMjkxNzk2MSA2OC44MjUzNTY0IDI4LjU4MzU5MjEgNTcuNDEyNjc4MiAzOS43MDgyMDM5IDYwLjEwNjg0NjEgNTUuNDE2NDA3OSI+PC9wb2x5Z29uPg0KICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg=="},3167:t=>{t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjkycHgiIGhlaWdodD0iNzJweCIgdmlld0JveD0iMCAwIDkyIDcyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT5pY29uX2FuaW1hdGlvbl90cmFuc2l0aW9uX2ZhZGU8L3RpdGxlPg0KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTA2MS4wMDAwMDAsIC0xNTAuMDAwMDAwKSI+DQogICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5MTcuMDAwMDAwLCA1Mi4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNDQuMDAwMDAwLCA5OC4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgPHJlY3Qgb3BhY2l0eT0iMC4xMDAwMDAwMDEiIGZpbGwtcnVsZT0ibm9uemVybyIgeD0iMCIgeT0iMCIgd2lkdGg9IjkyIiBoZWlnaHQ9IjcyIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgIDxyZWN0IGZpbGw9IiM1MjUyNTIiIHg9IjI4IiB5PSIyNCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjQ4Ij48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgIDxyZWN0IGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsPSIjMzYzNjM2IiB4PSIwIiB5PSIwIiB3aWR0aD0iNjQiIGhlaWdodD0iNDgiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTY0LDAgTDY0LDQ4IEwwLDQ4IEwwLDAgTDY0LDAgWiBNNjMsMSBMMSwxIEwxLDQ3IEw2Myw0NyBMNjMsMSBaIiBmaWxsPSIjNkE2QTZBIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4NCiAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4="},8830:t=>{t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjkycHgiIGhlaWdodD0iNzJweCIgdmlld0JveD0iMCAwIDkyIDcyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT5pY29uX2FuaW1hdGlvbl90cmFuc2l0aW9uX3B1c2g8L3RpdGxlPg0KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTQxLjAwMDAwMCwgLTI3MC4wMDAwMDApIiBmaWxsLXJ1bGU9Im5vbnplcm8iPg0KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTE3LjAwMDAwMCwgNTIuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQuMDAwMDAwLCAyMTguMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5MiIgaGVpZ2h0PSI3MiI+PC9yZWN0Pg0KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOTIsMCBMOTIsNzIgTDAsNzIgTDAsMCBMOTIsMCBaIE05MSwzNyBMMSwzNyBMMSw3MSBMOTEsNzEgTDkxLDM3IFogTTQ2LDQ0IEw1Niw1NCBMNTAuMTY2NjY2Nyw1NCBMNTAuMTY2NjY2Nyw2NCBMNDEuODMzMzMzMyw2NCBMNDEuODMzMzMzMyw1NCBMMzYsNTQgTDQ2LDQ0IFoiIGZpbGw9IiM2QTZBNkEiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4="},8891:t=>{"use strict";t.exports=o},4020:t=>{"use strict";t.exports=a},3137:t=>{"use strict";t.exports=i},6262:t=>{"use strict";t.exports=d},4758:t=>{"use strict";t.exports=s},4796:t=>{"use strict";t.exports=l},726:t=>{"use strict";t.exports=n},7756:t=>{"use strict";t.exports=r},5505:t=>{"use strict";t.exports=u}},e={};function c(o){var i=e[o];if(void 0!==i)return i.exports;var n=e[o]={exports:{}};return t[o](n,n.exports,c),n.exports}c.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return c.d(e,{a:e}),e},c.d=(t,e)=>{for(var o in e)c.o(e,o)&&!c.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},c.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),c.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var p={};return(()=>{"use strict";c.r(p),c.d(p,{CanvasPane:()=>hi,ColumnLayoutBuilder:()=>Si,ColumnLayoutItemSetting:()=>Fn,CommonLayoutItemSetting:()=>ln,CommonTransformSetting:()=>rn,DEFAULT_ROW_LAYOUT_SETTING:()=>Ci,DropArea:()=>ae,FixedLayoutItemSetting:()=>vn,FlowLayoutItemSetting:()=>Nn,FlowLayoutSetting:()=>Yn,GLOBAL_DRAGGING_CLASS_NAME:()=>st,GLOBAL_H5_DRAGGING_CLASS_NAME:()=>at,GLOBAL_RESIZING_CLASS_NAME:()=>pt,GridLayoutBuilder:()=>on,LayoutBuilder:()=>yi,LayoutEntry:()=>ge,LayoutItemInBuilder:()=>Be,PageRenderer:()=>ha,RowLayoutBuilder:()=>Hi,RowLayoutItemSetting:()=>Un,Toolbar:()=>vt,addItemToLayout:()=>R,bindDragHandler:()=>dt,bindResizeHandler:()=>gt,createDialogFromTemplate:()=>Ia,createPageFromTemplate:()=>va,createSectionFromTemplate:()=>xa,createWidgetFromTemplate:()=>ba,duplicateLayoutItem:()=>w,fixedLayoutActions:()=>t,floatingLayoutItem:()=>L,getRootLayoutId:()=>x,mergeWidgetsIntoColumn:()=>A,pendLayoutItem:()=>b,sectionMenuItems:()=>_t,sinkingLayoutItem:()=>z,supportFloating:()=>M,supportSinking:()=>P,withRnd:()=>ya});var t={};c.r(t),c.d(t,{alignFullHeight:()=>Mo,alignFullSize:()=>Po,alignFullWidth:()=>Co,alignHorizontalCenter:()=>Ao,alignTo:()=>So,alignVerticalCenter:()=>To,bringForward:()=>vo,bringToFront:()=>Io,sendBackward:()=>xo,sendToBack:()=>bo,toggleLockLayout:()=>wo});var e=c(8891),o=c(3137),i=c(726);const n=e.lodash.assign({},{gridSize:1}),s=e.lodash.assign({},{order:0},{lockParent:!1,lockLayout:!1,autoProps:{}});var a=c(4758),l=c(4020),r=c(5369),d=c.n(r);const u=t=>{const{className:o}=t,n=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o}(t,["className"]),s=(0,e.classNames)("jimu-icon-component",o);return e.React.createElement(i.Icon,Object.assign({className:s,icon:d()},n))},h=e.React.createContext({}),g=[{name:"flip",options:{fallbackPlacements:["top","right"]}}];class m extends e.React.PureComponent{constructor(t){super(t),a.utils.autoBindHandlers(this,["select"])}componentDidUpdate(){const t=this.getValue(this.props.visible,this.contextProps),e=this.getValue(this.props.disabled,this.contextProps);t&&!e||this.contextProps.onItemUnSelected(this.props.uid)}componentWillUnmount(){this.contextProps.onItemUnSelected(this.props.uid)}select(t){if(t.stopPropagation(),this.props.onClick){const{parentRef:e}=this.contextProps;this.props.onClick({layoutId:this.contextProps.layoutId,layoutItem:this.contextProps.layoutItem,clientRect:e&&e.getBoundingClientRect()},t),this.contextProps.onItemClick(this.props.uid)}}getValue(t,e){return"function"==typeof t?t(e):t}getStyle(){const{theme:t}=this.contextProps;return e.css`
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
    `}createButton({textContent:t,iconContent:o,tooltip:n,isDisabled:s,noAction:a,isChecked:l,rotate:r,iconSize:d,autoFlipIcon:u,ref:c}){const p=t?"":n,h=s?{title:p}:{},m=(0,e.jsx)(i.Button,Object.assign({"aria-label":t||n,ref:c,className:"px-0 w-100 text-left",type:"tertiary",size:"sm",icon:o&&!t,role:"menuitem",onClick:s||a?null:this.select},h),o&&(0,e.jsx)(i.Icon,{className:(0,e.classNames)("tool-item-icon",{checked:l}),icon:o,rotate:r,size:d,color:this.contextProps.theme.colors.black,autoFlip:u}),t&&(0,e.jsx)("span",{className:"toolbar-label text-nowrap"},t));return s?m:(0,e.jsx)(i.Tooltip,{placement:"bottom",title:p,modifiers:g,css:this.tooltipStyle()},m)}render(){const{icon:t,autoFlipIcon:o,label:n,size:s,checked:a,disabled:l,visible:r,rotate:d,settingPanel:u,title:c,uid:p,widgetId:g,className:m,seperator:f}=this.props;if(f)return(0,e.jsx)(h.Consumer,null,(t=>(this.contextProps=t,(0,e.jsx)("div",{"data-testid":"toolbarSeparator",css:this.separatorStyle()}))));const y=null==this.props.onClick,v=s||16,I=u;return(0,e.jsx)(h.Consumer,null,(s=>{if(this.contextProps=s,g&&s.layoutItem.widgetId!==g)return null;let h="";"function"==typeof c?h=c(s):"string"==typeof c&&(h=c);const f=u&&s.activeItem===p&&s.toggleOn,x=f||this.getValue(a,s),b=this.getValue(l,s),w=this.getValue(r,s),S=this.getValue(n,s),C=this.getValue(t,s);return null==r||w?(0,e.jsx)("div",{className:(0,e.classNames)("toolbar-item",m,{selected:x,disabled:b,msg:S,"no-action":y}),css:this.getStyle()},!I&&this.createButton({textContent:S,iconContent:C,tooltip:h,isDisabled:b,noAction:y,isChecked:x,rotate:d,iconSize:v,autoFlipIcon:o,ref:null}),I&&(0,e.jsx)(e.React.Fragment,null,this.createButton({textContent:S,iconContent:C,tooltip:h,isDisabled:b,noAction:y,isChecked:x,rotate:d,iconSize:v,autoFlipIcon:o,ref:t=>{this.reference=t}}),(0,e.jsx)(i.Popper,{placement:"bottom-start",reference:this.reference,open:f,disablePortal:!0},(0,e.jsx)("div",{css:e.css`
                          display: flex;
                          pointer-events: all;
                          background-color: ${s.theme.colors.white};
                          border-radius: 2px;
                          box-shadow: 0 2px 8px 1px rgba(0, 0, 0, 0.2);
                        `,className:"d-flex"},f&&(0,e.jsx)(I,Object.assign({},s)))))):null}))}}const f=()=>{};class y extends e.React.PureComponent{constructor(t){super(t),this.dropdownBtnRef=e.React.createRef(),a.utils.autoBindHandlers(this,["togglePopToolItems","onItemClick"])}getBaseStyle(){const{theme:t}=this.contextProps;return e.css`
      cursor: pointer;
      display: flex;
      justify-content: space-around;
      align-items: center;
      background-color: ${t.colors.palette.light[300]};

      &:hover {
        background-color: ${t.colors.palette.light[500]} !important;
      }
    `}getValue(t,e){return"function"==typeof t?t(e):t}togglePopToolItems(t){t&&t.stopPropagation(),this.contextProps.onItemClick(this.props.uid)}onItemClick(t,o){const{parentRef:i}=this.contextProps;t.onClick(Object.assign(Object.assign({},o),{clientRect:i.getBoundingClientRect()})),e.lodash.defer((()=>{this.dropdownBtnRef.current.focus()}))}createToolItem(t,o,i){return t.onClick||t.seperator?(0,e.jsx)(m,Object.assign({key:i,uid:`${this.props.uid}_${i+1}`,isInGroup:!0},t,{onClick:()=>this.onItemClick(t,o)})):null}getGroupMenu(t,o){const{theme:n}=this.contextProps;return t?(0,e.jsx)(i.Icon,{rotate:t.rotate,icon:t.icon,size:t.size||16,color:n.colors.black}):o[0].icon?(0,e.jsx)(i.Icon,{icon:o[0].icon,size:o[0].size||16,color:n.colors.black}):(0,e.jsx)(m,Object.assign({uid:`${this.props.uid}_0`,onClick:f},o[0]))}render(){const{tools:t,uid:o}=this.props;return t&&0!==t.length?(0,e.jsx)(h.Consumer,null,(n=>{this.contextProps=n;const{visible:s,caret:a=!0}=t[0],l=this.getValue(s,n);if(void 0!==s&&!l)return null;const r=t.filter((t=>{const{visible:e}=t,o=this.getValue(e,n);return void 0===e||o}));if(0===r.length)return null;if(1===r.length)return(0,e.jsx)(m,Object.assign({uid:`${o}_0`},r[0]));let d;return r.some((t=>{const{checked:e}=t;if(this.getValue(e,n))return d=t,!0})),(0,e.jsx)("div",{className:"toolbar-group",css:this.getBaseStyle()},(0,e.jsx)(i.Dropdown,{direction:"down",size:"sm",className:"px-1",isOpen:n.toggleOn&&n.activeItem===o,toggle:this.togglePopToolItems},(0,e.jsx)(i.DropdownButton,{icon:!0,arrow:a,type:"tertiary",size:"sm",innerRef:this.dropdownBtnRef,css:e.css`
                    .caret-icon {
                      color: ${n.theme.colors.palette.dark[600]};
                      margin-left: 0.25rem;
                    }
                  `},this.getGroupMenu(d,r)),(0,e.jsx)(i.DropdownMenu,{className:"p-0",css:e.css`min-width: 5rem;`},r.map(((t,e)=>this.createToolItem(t,n,e))))))})):null}}var v=c(4796),I=function(t,e,o,i){return new(o||(o=Promise))((function(n,s){function a(t){try{r(i.next(t))}catch(t){s(t)}}function l(t){try{r(i.throw(t))}catch(t){s(t)}}function r(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,l)}r((i=i.apply(t,e||[])).next())}))};function x(){if(a.utils.getCurrentDialogId())return a.utils.getCurrentDialogRootLayoutId();switch(a.utils.getActivePagePart()){case e.PagePart.Header:return a.utils.getHeaderRootLayoutId();case e.PagePart.Footer:return a.utils.getFooterRootLayoutId();default:return a.utils.getCurrentPageRootLayoutId()}}function b(t){const i=(0,o.getAppConfigAction)();i.setLayoutItemToPending(t,!0),window.jimuConfig.isBuilder?(i.exec(),o.builderAppSync.publishChangeSelectionToApp(null)):(0,e.getAppStore)().dispatch(e.appActions.layoutChanged(i.appConfig,null))}function w(t){const{layoutId:i,layoutItemId:n}=t,s=(0,o.getAppConfigAction)(),l=s.duplicateLayoutItem(i,i,n,!0);let r=s.appConfig;const d=r.layouts[i];if(d.type===e.LayoutType.FixedLayout)r=S(r,l);else if(d.type===e.LayoutType.FlowLayout)r=C(r,t,l);else{const e=a.searchUtils.getWidgetIdThatUseTheLayoutId(s.appConfig,i);if(e)switch(s.appConfig.widgets[e].manifest.name){case"column":r=C(r,t,l);break;case"row":r=function(t,e,o){let i=t;const{layoutId:n}=e,s=t.layouts[n],a=(t,e)=>parseInt(i.layouts[n].content[t].bbox[e],10),l=(t,e,o)=>{i=i.setIn(["layouts",n,"content",t,"bbox",e],o)},r=Object.keys(s.content).sort(((t,e)=>a(t,"left")-a(e,"left"))),d=r.indexOf(o.layoutItemId);r.splice(d,1);const u=r.indexOf(e.layoutItemId);r.splice(u+1,0,o.layoutItemId),i=i.setIn(["layouts",n,"order"],r);let c=0;for(let t=0;t<r.length;t++)c+=a(r[t],"width");if(l(r[0],"left",0),c<=12)for(let t=1;t<r.length;t++)l(r[t],"left",a(r[t-1],"left")+a(r[t-1],"width"));else{const t=c/12;l(r[0],"width",Math.max(1,Math.floor(a(r[0],"width")/t)));for(let e=1;e<r.length;e++)l(r[e],"left",a(r[e-1],"left")+a(r[e-1],"width")),l(r[e],"width",Math.max(1,Math.floor(a(r[e],"width")/t)))}return i}(r,t,l);break;case"fixed":r=S(r,l)}}window.jimuConfig.isBuilder?((0,o.getAppConfigAction)(r).exec(),o.builderAppSync.publishChangeSelectionToApp(l)):(0,e.getAppStore)().dispatch(e.appActions.layoutChanged(r,l))}function S(t,e){var o,i;const{layoutId:n,layoutItemId:s}=e,l=t.layouts[n].content[s];let{bbox:r,setting:d}=l;const u=t=>{if(a.utils.isPercentage(t))return`${parseFloat(t)+5}%`;const e=parseInt(t,10);return isNaN(e)?t:e+20};return r=(null===(o=null==d?void 0:d.autoProps)||void 0===o?void 0:o.left)?r.set("right",u(r.right)):r.set("left",u(r.left)),r=(null===(i=null==d?void 0:d.autoProps)||void 0===i?void 0:i.top)?r.set("bottom",u(r.bottom)):r.set("top",u(r.top)),(null==d?void 0:d.hCenter)&&(null==d?void 0:d.vCenter)&&(d=d.set("vCenter",!1)),t.setIn(["layouts",n,"content",s,"bbox"],r).setIn(["layouts",n,"content",s,"setting"],d)}function C(t,e,o){var i;const{layoutId:n}=e,s=t.layouts[n],a=[].concat(s.order),l=a.indexOf(o.layoutItemId);a.splice(l,1);const r=a.indexOf(e.layoutItemId);a.splice(r+1,0,o.layoutItemId);const d=s.content[o.layoutItemId];let u=t.setIn(["layouts",n,"order"],a);return(null===(i=d.setting)||void 0===i?void 0:i.isFloating)&&(u=S(u,o)),u}function R(t,i,n,s,l,r){return I(this,void 0,void 0,(function*(){const d=i.layoutInfo;return i.id?yield function(t,i,n,s,l,r){var d;return I(this,void 0,void 0,(function*(){let u;const c=(0,o.getAppConfigAction)(t),p=`${a.utils.getMaximumId(t.layouts[n.layoutId])+1}`;u=i.itemType===e.LayoutItemType.Section?(0,e.Immutable)({id:p,type:e.LayoutItemType.Section,bbox:a.utils.replaceBoundingBox(null,l,s),sectionId:i.id}):i.itemType===e.LayoutItemType.ScreenGroup?(0,e.Immutable)({id:p,type:e.LayoutItemType.ScreenGroup,bbox:{},screenGroupId:i.id}):(0,e.Immutable)({id:p,type:e.LayoutItemType.Widget,bbox:a.utils.replaceBoundingBox(null,l,s),widgetId:i.id});const{layoutId:h,layoutItemId:g}=i.layoutInfo,m=t.layouts[h].content[g];let f;(null===(d=m.setting)||void 0===d?void 0:d.lockParent)&&(u=u.setIn(["setting","lockParent"],!0)),i.isFromCurrentSizeMode||(f=a.searchUtils.getBrowserSizeModeByLayoutId(c.appConfig,i.layoutInfo.layoutId));const y=c.addItemIntoLayout(n.layoutId,u,r,f);return i.isFromCurrentSizeMode&&c.removeLayoutItem(i.layoutInfo,!1),yield Promise.resolve({layoutInfo:y,updatedAppConfig:c.appConfig})}))}(t,i,n,s,l,r):d&&d.layoutId&&d.layoutItemId?yield function(t,e,i,n,s,l){var r,d,u,c;return I(this,void 0,void 0,(function*(){const p=e.layoutInfo,h=(0,o.getAppConfigAction)(t),{layoutId:g,layoutItemId:m}=p;if(g===i.layoutId){const t=null===(c=null===(u=null===(d=null===(r=h.appConfig.layouts)||void 0===r?void 0:r[g])||void 0===d?void 0:d.content)||void 0===u?void 0:u[m])||void 0===c?void 0:c.bbox;if(t){let e=a.utils.replaceBoundingBox(t,s,n);e=e.set("width",t.width).set("height",t.height),h.editLayoutItemBBox(p,e)}return l>=0&&h.editLayoutItemIndex(p,i,l),h.setLayoutItemToPending(p,!1),yield Promise.resolve({layoutInfo:p,updatedAppConfig:h.appConfig})}const f=h.moveLayoutItemToAnotherLayout(p,i,a.utils.replaceBoundingBox(null,s,n),l);h.clearRedundantLayout(p);const y=a.searchUtils.getWidgetIdThatUseTheLayoutId(t,i.layoutId);return y&&T(t.widgets[y])&&h.editLayoutItemSetting(f,{lockParent:!0}),yield Promise.resolve({layoutInfo:f,updatedAppConfig:h.appConfig})}))}(t,i,n,s,l,r):i.itemType===e.LayoutItemType.Section?yield function(t,i,n,s,l){return I(this,void 0,void 0,(function*(){const r=(0,o.getAppConfigAction)(t),d=r.createSection().id,u=`${a.utils.getMaximumId(t.layouts[i.layoutId])+1}`,c=(0,e.Immutable)({sectionId:d,id:u,type:e.LayoutItemType.Section,bbox:a.utils.replaceBoundingBox(null,s,n)}),p=r.addItemIntoLayout(i.layoutId,c,l);return yield Promise.resolve({layoutInfo:p,updatedAppConfig:r.appConfig})}))}(t,n,s,l,r):i.uri?yield function(t,i,n,s,l,r){return I(this,void 0,void 0,(function*(){const d={uri:i.uri};return o.appBuilderSync.publishIsBusyToBuilder(!0),yield e.WidgetManager.getInstance().handleNewWidgetJson(d).then((i=>{var d;const u=(0,o.getAppConfigAction)(t),c=`${a.utils.getMaximumId(t.layouts[n.layoutId])+1}`,p=e.appConfigUtils.getUniqueId(u.appConfig,"widget");if(i.id=p,u.createWidget((0,e.Immutable)(i)),(!l.width||!l.height)&&(null===(d=i.manifest)||void 0===d?void 0:d.defaultSize)){const{width:t,height:e}=i.manifest.defaultSize;l=Object.assign(Object.assign({},l),{width:t,height:e})}let h=(0,e.Immutable)({id:c,type:e.LayoutItemType.Widget,bbox:a.utils.replaceBoundingBox(null,l,s),widgetId:i.id});const g=a.searchUtils.getWidgetIdThatUseTheLayoutId(t,n.layoutId);g&&T(t.widgets[g])&&(h=h.setIn(["setting","lockParent"],!0));const m=u.addItemIntoLayout(n.layoutId,h,r);return o.appBuilderSync.publishIsBusyToBuilder(!1),{layoutInfo:m,updatedAppConfig:u.appConfig}})).catch((t=>I(this,void 0,void 0,(function*(){return o.appBuilderSync.publishIsBusyToBuilder(!1),yield Promise.reject(t)}))))}))}(t,i,n,s,l,r):yield function(t,i,n,s,l,r){return I(this,void 0,void 0,(function*(){const i=(0,o.getAppConfigAction)(t),d=`${a.utils.getMaximumId(t.layouts[n.layoutId])+1}`;let u=(0,e.Immutable)({id:d,type:e.LayoutItemType.Widget,bbox:a.utils.replaceBoundingBox(null,l,s)});const c=a.searchUtils.getWidgetIdThatUseTheLayoutId(t,n.layoutId);c&&T(t.widgets[c])&&(u=u.setIn(["setting","lockParent"],!0));const p=i.addItemIntoLayout(n.layoutId,u,r);return yield Promise.resolve({layoutInfo:p,updatedAppConfig:i.appConfig})}))}(t,0,n,s,l,r)}))}function T(t){var o,i,n,s,a,l,r;const d=null===(o=null==t?void 0:t.manifest)||void 0===o?void 0:o.widgetType,u=null!==(s=null===(n=null===(i=null==t?void 0:t.manifest)||void 0===i?void 0:i.properties)||void 0===n?void 0:n.hasEmbeddedLayout)&&void 0!==s&&s,c=null!==(r=null===(l=null===(a=null==t?void 0:t.manifest)||void 0===a?void 0:a.properties)||void 0===l?void 0:l.lockChildren)&&void 0!==r&&r;return d!==e.WidgetType.Layout&&u&&c}function A(t,i,n,s,l,r){return I(this,void 0,void 0,(function*(){const d=(0,o.getAppConfigAction)(t),u=t.layouts[l.layoutId].content[l.layoutItemId],c={id:e.appConfigUtils.getUniqueId(d.appConfig,"widget"),uri:"widgets/layout/column/"};return o.appBuilderSync.publishIsBusyToBuilder(!0),yield e.WidgetManager.getInstance().handleNewWidgetJson(c).then((t=>{d.createWidget((0,e.Immutable)(t)),d.updateLayoutItem(l,"widgetId",t.id),d.editLayoutItemSetting(l,{maintainedByLayout:!0});let o=(0,e.Immutable)(u.bbox);const i=Math.round(parseFloat(o.height)+s.height+20);o=o.set("height",`${i}px`),d.editLayoutItemBBox(l,o)})).then((()=>I(this,void 0,void 0,(function*(){const t=d.appConfig.widgets[c.id],o=(0,e.getAppStore)().getState().browserSizeMode,p=Object.keys(t.layouts)[0],h=t.layouts[p],g=a.searchUtils.findLayoutId(h,o,d.appConfig.mainSizeMode);return yield R(d.appConfig,i,{layoutId:g},n,s).then((({updatedAppConfig:t})=>I(this,void 0,void 0,(function*(){var o;const i=a.utils.getMaximumId(t.layouts[g]),n={id:`${i+1}`,widgetId:u.widgetId,type:e.LayoutItemType.Widget,bbox:u.bbox,setting:{autoProps:null===(o=u.setting)||void 0===o?void 0:o.autoProps}};let s;return s="top"===r?[`${i}`,n.id]:[n.id,`${i}`],t=t.setIn(["layouts",g,"content",n.id],n).setIn(["layouts",g,"order"],s),yield Promise.resolve({updatedAppConfig:t,layoutInfo:l})}))))})))).then((({updatedAppConfig:t})=>(o.appBuilderSync.publishIsBusyToBuilder(!1),{updatedAppConfig:t,layoutInfo:l}))).catch((t=>I(this,void 0,void 0,(function*(){return o.appBuilderSync.publishIsBusyToBuilder(!1),yield Promise.reject(t)}))))}))}function M(t){var i,n,s,l,r;const{layoutId:d,layoutItemId:u}=t,c=(0,o.getAppConfigAction)().appConfig,p=null===(s=null===(n=null===(i=null==c?void 0:c.layouts)||void 0===i?void 0:i[d])||void 0===n?void 0:n.content)||void 0===s?void 0:s[u];if(!p||(null===(l=p.setting)||void 0===l?void 0:l.isFloating))return!1;const h=a.utils.getActivePagePart();if(h!==e.PagePart.Header&&h!==e.PagePart.Footer){const t=a.utils.getCurrentPageRootLayoutId();return(null===(r=c.layouts[t])||void 0===r?void 0:r.type)===e.LayoutType.FlowLayout&&d!==t}return!1}function P(t){var e,i,n,s,a;const{layoutId:l,layoutItemId:r}=t,d=(0,o.getAppConfigAction)().appConfig,u=null===(n=null===(i=null===(e=null==d?void 0:d.layouts)||void 0===e?void 0:e[l])||void 0===i?void 0:i.content)||void 0===n?void 0:n[r];return null!==(a=null===(s=null==u?void 0:u.setting)||void 0===s?void 0:s.isFloating)&&void 0!==a&&a}function L(t,i,n){const s=a.utils.getCurrentPageRootLayoutId();let l=(0,o.getAppConfigAction)();R(l.appConfig,{layoutInfo:t},{layoutId:s},{left:0,top:0,width:1e3,height:1e3},i).then((t=>{l=(0,o.getAppConfigAction)(t.updatedAppConfig),l.editLayoutItemBBox(t.layoutInfo,{top:0,left:0,right:0,width:`${i.width}px`,height:`${i.height}px`}).editLayoutItemSetting(t.layoutInfo,{isFloating:!0,lockParent:!0,floatingArea:n}),window.jimuConfig.isBuilder?((0,o.getAppConfigAction)(l.appConfig).exec(),o.builderAppSync.publishChangeSelectionToApp(t.layoutInfo)):(0,e.getAppStore)().dispatch(e.appActions.layoutChanged(l.appConfig,t.layoutInfo))}))}function z(t,i){var n;const{layoutId:s,layoutItemId:l}=t,r=(0,o.getAppConfigAction)();let d,u=-1,c=2;const p=document.querySelectorAll(`div.flow-layout[data-layoutid="${s}"] > div.trail-container > div.builder-layout-item:not(.floating)`);if((null==p?void 0:p.length)>1)for(let t=0;t<p.length;t++){const e=p[t];if(-1===u&&e.getAttribute("data-layoutitemid")!==l){const o=e.getBoundingClientRect();if(c=Math.round(12*i.width/o.width),a.utils.contains(o,i)){u=t,d=o;break}if(a.utils.intersects(o,i)){u=t+1,d=o;break}}}else{const t=e.utils.findViewportSize(a.utils.getAppConfig(),a.utils.getCurrentSizeMode());d={left:0,top:0,width:t.width,height:t.height},c=Math.round(12*i.width/t.width)}-1===u&&(u=(null===(n=r.appConfig.layouts[s].order)||void 0===n?void 0:n.length)||0),j({layoutInfo:t},{layoutId:s},d||i,i,c,u)}function j(t,i,n,s,l,r,d){return I(this,void 0,void 0,(function*(){let u=(0,o.getAppConfigAction)(d);const c={name:"row",label:"row",uri:"widgets/layout/row/",icon:null,itemType:e.LayoutItemType.Widget,manifest:{widgetType:e.WidgetType.Layout,properties:{}}};return yield R(u.appConfig,c,i,n,s,r).then((o=>I(this,void 0,void 0,(function*(){let{updatedAppConfig:r}=o;const d=a.searchUtils.findLayoutItem(r,o.layoutInfo),u=r.widgets[d.widgetId],c=Object.keys(u.layouts)[0],p=u.layouts[c],h=a.searchUtils.findLayoutId(p,(0,e.getAppStore)().getState().browserSizeMode,r.mainSizeMode),g=e.i18n.getIntl().formatMessage({id:"block"}),m=e.appConfigUtils.getUniqueLabel(r,"widget",g);r=r.setIn(["widgets",u.id,"label"],m),r=r.setIn(["layouts",i.layoutId,"content",d.id,"setting","heightMode"],"fixed").setIn(["layouts",i.layoutId,"content",d.id,"bbox","height"],s.height+20);const f=Math.round(Math.min(s.height,n.height));return yield R(r,t,{layoutId:h},n,{width:l,height:f,left:0},0)})))).then((t=>{const{layoutInfo:i,updatedAppConfig:n}=t;u=(0,o.getAppConfigAction)(n),u.editLayoutItemSetting(i,{heightMode:"fit"}),window.jimuConfig.isBuilder?((0,o.getAppConfigAction)(u.appConfig).exec(),o.builderAppSync.publishChangeSelectionToApp(i)):(0,e.getAppStore)().dispatch(e.appActions.layoutChanged(u.appConfig,i))}))}))}class N extends e.React.PureComponent{constructor(t){super(t),this.topLeft=this.updateFloatingArea.bind(this,1),this.topCenter=this.updateFloatingArea.bind(this,2),this.topRight=this.updateFloatingArea.bind(this,3),this.middleLeft=this.updateFloatingArea.bind(this,4),this.middleCenter=this.updateFloatingArea.bind(this,5),this.middleRight=this.updateFloatingArea.bind(this,6),this.bottomLeft=this.updateFloatingArea.bind(this,7),this.bottomCenter=this.updateFloatingArea.bind(this,8),this.bottomRight=this.updateFloatingArea.bind(this,9)}updateFloatingArea(t){const{layoutId:e,layoutItem:o}=this.props;L({layoutId:e,layoutItemId:o.id},this.getSizeOfItem(),t)}getSizeOfItem(){const{layoutId:t,layoutItem:e}=this.props,o=document.querySelector(`div.exb-rnd[data-layoutid="${t}"][data-layoutitemid="${e.id}"]`);return o?o.getBoundingClientRect():null}getStyle(t){const o=t.colors.palette.light[500];return e.css`
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
    `}render(){const{area:t,theme:o}=this.props;return(0,e.jsx)("div",{className:"floating-area-chooser d-flex",css:this.getStyle(o)},(0,e.jsx)("div",{className:"content w-100"},(0,e.jsx)("div",{className:(0,e.classNames)("top-left",{selected:1===t}),onClick:this.topLeft}),(0,e.jsx)("div",{className:(0,e.classNames)("top-center",{selected:2===t}),onClick:this.topCenter}),(0,e.jsx)("div",{className:(0,e.classNames)("top-right",{selected:3===t}),onClick:this.topRight}),(0,e.jsx)("div",{className:(0,e.classNames)("middle-left",{selected:4===t}),onClick:this.middleLeft}),(0,e.jsx)("div",{className:(0,e.classNames)("middle-center",{selected:5===t}),onClick:this.middleCenter}),(0,e.jsx)("div",{className:(0,e.classNames)("middle-right",{selected:6===t}),onClick:this.middleRight}),(0,e.jsx)("div",{className:(0,e.classNames)("bottom-left",{selected:7===t}),onClick:this.bottomLeft}),(0,e.jsx)("div",{className:(0,e.classNames)("bottom-center",{selected:8===t}),onClick:this.bottomCenter}),(0,e.jsx)("div",{className:(0,e.classNames)("bottom-right",{selected:9===t}),onClick:this.bottomRight})))}}N.defaultProps={area:0};const $=(0,v.withBuilderTheme)(N);var k=c(4357),O=c.n(k),B=c(3059),E=c.n(B),D=c(5384),F=c.n(D),V=c(970),H=c.n(V),W=c(3616),U=c.n(W),G=c(7465),_=c.n(G),Y=c(1553),Z=c.n(Y);function X(){var t;return null===(t=(0,e.getAppStore)().getState().appRuntimeInfo)||void 0===t?void 0:t.appMode}function q(){var t,o,i;return null!==(i=null===(o=null===(t=(0,e.getAppStore)().getState().appConfig)||void 0===t?void 0:t.forBuilderAttributes)||void 0===o?void 0:o.lockLayout)&&void 0!==i&&i}function J(){var t;return(null===(t=(0,e.getAppStore)().getState().appRuntimeInfo)||void 0===t?void 0:t.appMode)===e.AppMode.Design}const Q={icon:O(),title:t=>t.formatMessage("delete"),visible:t=>X()===e.AppMode.Design&&(!q()||function(t){var o;if(t.type===e.LayoutItemType.Widget&&t.widgetId){const i=(0,e.getAppStore)().getState().appConfig.widgets[t.widgetId];if(i)return(null===(o=i.manifest)||void 0===o?void 0:o.widgetType)!==e.WidgetType.Layout}return!1}(t.layoutItem)),onClick:t=>{const{layoutItem:e,layoutId:i}=t,n={layoutId:i,layoutItemId:e.id};o.appBuilderSync.publishConfirmDeleteToApp(n)}},K={icon:E(),title:t=>t.formatMessage("pendingTip"),visible:t=>X()===e.AppMode.Design&&!q()&&function(t){const{layoutItem:e}=t;return null!=e.widgetId||null!=e.sectionId||null!=e.screenGroupId}(t),onClick:t=>{const{layoutId:e,layoutItem:o}=t;b({layoutId:e,layoutItemId:o.id})}},tt={icon:Z(),title:t=>t.formatMessage("setting"),onClick:t=>{const{layoutId:o,layoutItem:i}=t;(0,e.getAppStore)().dispatch(e.appActions.selectionChanged({layoutId:o,layoutItemId:i.id}))}},et={icon:F(),title:t=>t.formatMessage("dragToMove"),visible:()=>X()===e.AppMode.Design&&!q()},ot={icon:H(),title:t=>t.formatMessage("duplicate"),visible:t=>{var o,i,n;if(q())return!1;const{layoutId:s}=t,a=null===(o=(0,e.getAppStore)().getState().appConfig)||void 0===o?void 0:o.layouts[s];return"ROW"!==(null==a?void 0:a.type)||(null!==(n=null===(i=a.order)||void 0===i?void 0:i.length)&&void 0!==n?n:0)<12},onClick:t=>{const{layoutId:e,layoutItem:o}=t;w({layoutId:e,layoutItemId:o.id})}},it={icon:U(),title:t=>t.formatMessage("floating"),visible:t=>{const{layoutItem:e,layoutId:o}=t;return!q()&&M({layoutId:o,layoutItemId:e.id})},settingPanel:$,onClick:()=>{}},nt={icon:_(),title:t=>t.formatMessage("sinking"),visible:t=>{var e,o;const{layoutItem:i}=t;return!q()&&null!==(o=null===(e=i.setting)||void 0===e?void 0:e.isFloating)&&void 0!==o&&o},onClick:t=>{const{layoutId:e,layoutItem:o,clientRect:i}=t;z({layoutId:e,layoutItemId:o.id},i)}},st="interactjs-dragging",at="exb-h5-dragging",lt="limited-drag-boundary";let rt=!1;function dt(t,o){if(!t)return null;let i,n,s,l,r,d;const{layoutItemId:u,useDragHandler:c,onDragStart:p,onDragging:h,onDragEnd:g}=o;return t.styleCursor(!1).draggable({inertia:!1,autoScroll:!1,allowFrom:c?".tool-drag-handler":void 0,ignoreFrom:".no-drag-action",onstart:t=>{if(q()||!J())return void t.interaction.stop();const e=t.target;if(e.classList.contains("no-drag-action"))return void(t.target._canDrag=!1);t.target._canDrag=!0,t.stopPropagation(),e.classList.add("is-dragging"),r=e.style.transform,s=t.rect;const o=t.target.parentNode;l=o.getBoundingClientRect(),document.body.classList.add(st);const d=getComputedStyle(e,null).getPropertyValue("transform"),[c,h]=function(t=""){let e="0",o="0";if(t.includes("matrix(")){const i=t.substring(t.indexOf("(")+1,t.indexOf(")")).split(",");return e=`${parseInt(i[4],10)}px`,o=`${parseInt(i[5],10)}px`,[e,o]}if(t.includes("translate(")){const i=t.match(/translate\((.*)\s*,\s*(.*)\)/);return 3===i.length&&(e=i[1],o=i[2]),[e,o]}if(t.includes("translateX(")){const o=t.match(/translateX\((.*)\)/);2===o.length&&(e=o[1])}if(t.includes("translateY(")){const e=t.match(/translateY\((.*)\)/);2===e.length&&(o=e[1])}return[e,o]}(d);i=a.utils.isPercentage(c)?a.utils.fromRatio(c,s.width):parseFloat(c),n=a.utils.isPercentage(h)?a.utils.fromRatio(h,s.height):parseFloat(h),e.setAttribute("data-translatex",i),e.setAttribute("data-translatey",n),p&&p(u)},onmove:t=>{t.stopPropagation(),i+=t.dx,n+=t.dy;const o=t.target,a=t.client.x,c=t.client.y;if(!(a>=0&&a<=l.width&&c>=0&&c<=l.height||d))return d=function(t){const o=(0,v.getTheme2)(),i=document.createElement("div");return i.setAttribute("id","interact_dragging_placeholder"),i.style.position="fixed",i.style.left=`${t.left}px`,i.style.top=`${t.top}px`,i.style.width=`${t.width}px`,i.style.height=`${t.height}px`,i.style.backgroundColor=e.polished.rgba(o.colors.palette.primary[700],.2),i.style.zIndex="1100",i}(s),d=document.body.appendChild(d),o.style.transform=r,void(o.style.visibility="hidden");const p=d||o;p.style.webkitTransform=p.style.transform=`translate(${Math.round(i)}px, ${Math.round(n)}px) translateZ(0)`,p.setAttribute("data-translatex",Math.round(i)),p.setAttribute("data-translatey",Math.round(n)),h&&h(u,i,n)},onend:t=>{t.stopPropagation();const e=t.target;e.classList.remove("is-dragging"),document.body.classList.remove(st),d&&(document.body.removeChild(d),d=null),e.style.visibility=null,e.style.transform=r,g&&g(u,i,n)}})}function ut(t){rt=t}function ct(){return rt}const pt="interactjs-resizing";let ht=!1;function gt(t,e){if(!t)return null;let o,i,n,s,r=null;const{layoutItemId:d,onResizeStart:u,onResizing:c,onResizeEnd:p,restrictEdges:h=!0}=e;return t.resizable({inertia:!1,edges:{top:".rnd-resize-top",left:a.utils.isRTL()?".rnd-resize-right":".rnd-resize-left",bottom:".rnd-resize-bottom",right:a.utils.isRTL()?".rnd-resize-left":".rnd-resize-right"},modifiers:[l.interact.modifiers.restrictEdges({outer:h?"parent":null}),l.interact.modifiers.restrictSize({min:{width:16,height:16}})],onstart:t=>{t.stopPropagation(),o=0,i=0,n=0,s=0;const e=t.target.getBoundingClientRect();u&&u(d,e.width,e.height),document.body.classList.add(pt)},onmove:t=>{t.stopPropagation();const e=t.deltaRect;o+=e.left,i+=e.top,n+=e.width,s+=e.height,r&&(cancelAnimationFrame(r),r=null),r=requestAnimationFrame((()=>{c&&c(d,o,i,n,s,t.shiftKey,t.speed),r=null}))},onend:t=>{t.stopPropagation(),r&&(cancelAnimationFrame(r),r=null),p&&p(d,o,i,n,s,t.shiftKey),document.body.classList.remove(pt)}})}function mt(t){ht=t}function ft(){return ht}class yt extends e.React.PureComponent{constructor(t){super(t),this.state={activeItem:null},a.utils.autoBindHandlers(this,["onItemClick","onItemUnSelected"])}onItemClick(t){let e=this.state.toggleOn;e=t!==this.state.activeItem||!e,this.setState({activeItem:t,toggleOn:e})}onItemUnSelected(t){t===this.state.activeItem&&this.setState({activeItem:null,toggleOn:!1})}getStyle(){const{theme:t}=this.props;return e.css`
      display: flex;
      pointer-events: all;
      border-radius: 2px;
      box-shadow: 0 2px 8px 1px rgba(0,0,0,0.20);
      height: 100%;
      margin: 5px 0;
      background: ${t.colors.palette.light[300]};

      .${st} &,
      .${pt} &,
      .${at} & {
        display: none;
      }
    `}reOrganizeTools(){const{tools:t}=this.props;if(a.utils.getCurrentSizeMode()===e.BrowserSizeMode.Small){const e=t.filter((t=>{let e;e=Array.isArray(t)?t[0]:t;const{visible:o,seperator:i=!1}=e,n="function"==typeof o?o(this.props):o;return!i&&(void 0===o||n)}));if(e.length>8){const e=t.slice(0,8),o=t.slice(8).map((t=>Object.assign(Object.assign({},t),{label:t.title}))),i=[{icon:d(),caret:!1},...o];return e.push(i),e}}return t}render(){const{tools:t,isLockLayout:o}=this.props;if(!t||0===t.length)return null;const i=this.reOrganizeTools(),{activeItem:n,toggleOn:s}=this.state;return(0,e.jsx)(h.Provider,{value:Object.assign(Object.assign({},this.props),{activeItem:n,toggleOn:s,onItemClick:this.onItemClick,onItemUnSelected:this.onItemUnSelected,isLockLayout:o})},(0,e.jsx)("div",{css:this.getStyle(),className:"layout-item-toolbar"},i.map(((t,o)=>Array.isArray(t)?(0,e.jsx)(y,{uid:`${o}`,key:o,tools:t}):(0,e.jsx)(m,Object.assign({uid:`${o}`,key:o},t))))))}}const vt=e.ReactRedux.connect((t=>{var e,o,i;return{isLockLayout:null!==(i=null===(o=null===(e=t.appConfig)||void 0===e?void 0:e.forBuilderAttributes)||void 0===o?void 0:o.lockLayout)&&void 0!==i&&i}}))(yt),It={previousView:"Previous view",nextView:"Next view",originTL:"Top left as origin",originTR:"Top right as origin",originBL:"Bottom left as origin",originBR:"Bottom right as origin",alignLeft:"Align left",alignRight:"Align right",alignTop:"Align top",alignCenter:"Align center",alignHCenter:"Horizontal center",alignVCenter:"Vertical center",alignBottom:"Align bottom",alignStretch:"Align stretch",sendBackward:"Send backward",bringForward:"Bring forward",sendToBack:"Send to back",bringToFront:"Bring to front",zoomoutFixed:"Zoom out fixed",order:"Order",moveToLeft:"Move to left",moveToRight:"Move to right",moveToTop:"Move to top",moveToBottom:"Move to bottom",addView:"Add view",duplicateScreen:"Duplicate screen",deleteScreen:"Delete screen",applyToFirstPanel:"Apply to the first panel",deleteView:"Delete view",duplicateView:"Duplicate view",insertABlock:"Insert block",insertAScreenGroup:"Insert screen group",moveup:"Move up",movedown:"Move down",chooseTemplate:"Choose a {type} template",chooseHeaderTemplate:"Choose a header template",chooseFooterTemplate:"Choose a footer template",dropWidgetToAdd:"Or drag a widget here",snapToLeft:"Snap to left",snapToTop:"Snap to top",snapToBottom:"Snap to bottom",snapToRight:"Snap to right",fullWidth:"Full width",fullHeight:"Full height",fullSize:"Full size",restoreSize:"Restore size",pendingTip:"Move to the pending list",setting:"Settings",dragToMove:"Drag to move",lockLayout:"Lock position and size",unlockLayout:"Unlock position and size",editHeader:"Edit header",editFooter:"Edit footer",transform:"Transform",rotation:"Rotation",angle:"Angle",floating:"Pin",sinking:"Unpin",floatingArea:"Floating area",changeToAuto:"Change to auto",changeToCustom:"Change to custom",positionType:"Position type",sticky:"Sticky",fixed:"Fixed",flow:"Flow",stack:"Stack",fixedAtTop:"Floating at the top when scrolling",actNormal:"Act as normal widget",hideInDesignView:"Hide in design view",showInDesignView:"Show in design view"};class xt extends e.React.PureComponent{constructor(){super(...arguments),this.state={showMenus:!0},this.formatMessage=t=>this.props.intl?this.props.intl.formatMessage({id:t,defaultMessage:It[t]}):It[t],this.showContextMenu=()=>{},this.hideContextMenu=()=>{}}getPositionStyle(){const{positionType:t}=this.props;return"left"===t?e.css`
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

    `}render(){const{builderTheme:t,menuItems:o,layoutId:i,layoutItem:n}=this.props;return(0,e.jsx)("div",{className:"widget-context-menu",css:this.getStyle()},(0,e.jsx)("div",{ref:t=>this.ref=t,className:"content"},(0,e.jsx)("div",{className:"menu-hint",onMouseEnter:this.showContextMenu},(0,e.jsx)(u,{color:t.colors.black,size:"m"})),this.state.showMenus&&(0,e.jsx)("div",{className:"menu-content",onMouseLeave:this.hideContextMenu},(0,e.jsx)(vt,{layoutId:i,layoutItem:n,theme:t,parentRef:this.ref,tools:o,formatMessage:this.formatMessage})),this.props.children))}}const bt=(0,e.injectIntl)(xt),wt=(e.React.createContext({viewOnly:!0}),e.React.createContext(!0),e.React.createContext(!0)),St=(e.React.createContext({isInView:!1,isInCurrentView:!1}),e.React.createContext(""));function Ct(t,e){const o=function(t){if(isNaN(t))return 0;const e=t%360;return e<0?e+360:e}(t+e);return o>=337.5||o<22.5||o>=157.5&&o<202.5?"ns-resize":o>=22.5&&o<67.5||o>=202.5&&o<247.5?"nesw-resize":o>=67.5&&o<112.5||o>=247.5&&o<292.5?"ew-resize":o>=112.5&&o<157.5||o>=292.5&&o<337.5?"nwse-resize":void 0}const Rt=t=>e.css`
  top: ${-5}px;
  left: ${-5}px;
  /* cursor: nwse-resize; */
  cursor: ${Ct(t,135)};
  .jimu-rtl & {
    /* cursor: nesw-resize; */
    cursor: ${Ct(t,225)};
  }
`,Tt=t=>e.css`
  top: ${-5}px;
  right: ${-5}px;
  /* cursor: nesw-resize; */
  cursor: ${Ct(t,225)};
  .jimu-rtl & {
    /* cursor: nwse-resize; */
    cursor: ${Ct(t,315)};
  }
`,At=t=>e.css`
  bottom: ${-5}px;
  left: ${-5}px;
  /* cursor: nesw-resize; */
  cursor: ${Ct(t,45)};
  .jimu-rtl & {
    /* cursor: nwse-resize; */
    cursor: ${Ct(t,135)};
  }
`,Mt=t=>e.css`
  bottom: ${-5}px;
  right: ${-5}px;
  /* cursor: nwse-resize; */
  cursor: ${Ct(t,315)};
  .jimu-rtl & {
    /* cursor: nesw-resize; */
    cursor: ${Ct(t,405)};
  }
`,Pt=t=>e.css`
  height: ${16}px;
  left: ${10}px;
  right: ${10}px;
  top: ${-8}px;
  /* cursor: ns-resize; */
  cursor: ${Ct(t,180)};

  &:after {
    left: 50%;
    top: 50%;
    margin-left: ${-5}px;
    margin-top: ${-5}px;
  }
`,Lt=t=>e.css`
  width: ${16}px;
  top: ${10}px;
  bottom: ${10}px;
  right: ${-8}px;
  /* cursor: ew-resize; */
  cursor: ${Ct(t,270)};

  &:after {
    top: 50%;
    right: 50%;
    margin-top: ${-5}px;
    margin-right: ${-5}px;
  }
`,zt=t=>e.css`
  height: ${16}px;
  left: ${10}px;
  right: ${10}px;
  bottom: ${-8}px;
  /* cursor: ns-resize; */
  cursor: ${Ct(t,0)};

  &:after {
    left: 50%;
    bottom: 50%;
    margin-left: ${-5}px;
    margin-bottom: ${-5}px;
  }
`,jt=t=>e.css`
  width: ${16}px;
  top: ${10}px;
  bottom: ${10}px;
  left: ${-8}px;
  /* cursor: ew-resize; */
  cursor: ${Ct(t,90)};

  &:after {
    top: 50%;
    left: 50%;
    margin-top: ${-5}px;
    margin-left: ${-5}px;
  }
`;function Nt(t){const{rotation:o=0,builderTheme:i}=t,{top:n,right:s,bottom:l,left:r,topLeft:d,topRight:u,bottomRight:c,bottomLeft:p}=function(t){const{left:e=!0,top:o=!0,right:i=!0,bottom:n=!0}=t;return{top:o,right:i,bottom:n,left:e,topRight:o&&i,bottomRight:n&&i,bottomLeft:n&&e,topLeft:o&&e}}(t),h=e.css`
    width: ${10}px;
    height: ${10}px;
    background: ${i.colors.black};
    border: 1px solid ${i.colors.palette.light[600]};
    box-shadow: 0 2px 4px 0 ${e.polished.rgba(i.colors.white,.5)};
    z-index: ${a.LayoutZIndex.HandlerTools};
  `,g=h,m=e.css`
    box-shadow: none;

    &:after {
      position: absolute;
      content: '';
      ${h};
    }
  `;return(0,e.jsx)("div",{className:"w-100 h-100 action-area"},n&&(0,e.jsx)("span",{key:"2","data-testid":"top",className:"rnd-resize-top handle no-drag-action",css:[m,Pt(o)]}),s&&(0,e.jsx)("span",{key:"4","data-testid":"right",className:"rnd-resize-right handle no-drag-action",css:[m,Lt(o)]}),l&&(0,e.jsx)("span",{key:"6","data-testid":"bottom",className:"rnd-resize-bottom handle no-drag-action",css:[m,zt(o)]}),r&&(0,e.jsx)("span",{key:"8","data-testid":"left",className:"rnd-resize-left handle no-drag-action",css:[m,jt(o)]}),d&&(0,e.jsx)("span",{key:"1","data-testid":"topLeft",className:"rnd-resize-top rnd-resize-left handle no-drag-action",css:[g,Rt(o)]}),u&&(0,e.jsx)("span",{key:"3","data-testid":"topRight",className:"rnd-resize-top rnd-resize-right handle no-drag-action",css:[g,Tt(o)]}),c&&(0,e.jsx)("span",{key:"5","data-testid":"bottomRight",className:"rnd-resize-bottom rnd-resize-right handle no-drag-action",css:[g,Mt(o)]}),p&&(0,e.jsx)("span",{key:"7","data-testid":"bottomLeft",className:"rnd-resize-bottom rnd-resize-left handle no-drag-action",css:[g,At(o)]}))}var $t=c(1407),kt=c.n($t),Ot=c(3273),Bt=c.n(Ot),Et=c(4750),Dt=c.n(Et),Ft=c(9365),Vt=c.n(Ft),Ht=c(5339),Wt=c.n(Ht);function Ut(t){const o=(0,e.getAppStore)().getState();return a.searchUtils.getSectionInfo(o,t.sectionId)}function Gt(t){var o;const{navInfo:i,views:n,activeView:s}=t;if(!i)return null==s?void 0:s.id;if(!i.useProgress)return i.currentViewId;const a=(null===(o=i.visibleViews)||void 0===o?void 0:o.length)>0?i.visibleViews:n,{currentIndex:l}=(0,e.getIndexFromProgress)(i.progress,a.length);return a[l]}const _t=[{icon:kt(),autoFlipIcon:!0,size:10,title:t=>t.formatMessage("previousView"),onClick:t=>{const{layoutItem:o}=t,i=Ut(o),{views:n}=i,s=Gt(i),a=n.indexOf(s);a>0&&e.jimuHistory.changeView(o.sectionId,n[a-1])},disabled:t=>{const{layoutItem:e}=t,o=Ut(e);if(!o)return!0;const{views:i}=o,n=Gt(o);return i.indexOf(n)<=0}},{label:t=>{const{layoutItem:e}=t,o=Ut(e);if(!o)return"";const{views:i}=o,n=Gt(o);return`${Math.max(0,i.indexOf(n))+1} / ${i.length}`}},{icon:Bt(),autoFlipIcon:!0,size:10,title:t=>t.formatMessage("nextView"),onClick:t=>{const{layoutItem:o}=t,i=Ut(o),{views:n}=i,s=Gt(i),a=n.indexOf(s);a>=0&&a<n.length-1&&e.jimuHistory.changeView(o.sectionId,n[a+1])},disabled:t=>{const{layoutItem:e}=t,o=Ut(e);if(!o)return!0;const{views:i}=o,n=Gt(o),s=i.indexOf(n);return s<0||s>=i.length-1}},{icon:Dt(),title:t=>t.formatMessage("addView"),visible:()=>X()===e.AppMode.Design&&!q(),onClick:t=>{const i=(0,e.getAppStore)().getState().appConfig,{layoutItem:n}=t,s=(0,e.Immutable)({}).merge({id:e.appConfigUtils.getUniqueId(i,"view"),label:e.appConfigUtils.getUniqueLabel(i,"view",e.i18n.getIntl().formatMessage({id:"view"}))});(0,o.getAppConfigAction)().addView(s,n.sectionId).exec(),e.jimuHistory.changeView(n.sectionId,s.id)}},{icon:Vt(),title:t=>t.formatMessage("duplicateView"),visible:()=>X()===e.AppMode.Design&&!q(),onClick:t=>{const{layoutItem:i}=t;let n=Gt(Ut(i));n||(n=Ut(i).views[0]);const s=(0,o.getAppConfigAction)(),a=s.duplicateView(n,i.sectionId,!0);s.exec(),e.jimuHistory.changeView(i.sectionId,a.id)}},{icon:Wt(),title:t=>t.formatMessage("deleteView"),visible:t=>{if(X()!==e.AppMode.Design||q())return!1;const{layoutItem:o}=t,i=Ut(o);if(!i)return!1;const{views:n}=i;return n&&n.length>1},onClick:t=>{const{layoutItem:i}=t,n=Ut(i),{views:s}=n,a=Gt(n);if(s.length>1){const n=s.indexOf(a);let l;l=n>0?s[n-1]:s[1],(0,o.getAppConfigAction)().removeView(a,i.sectionId).exec(),e.jimuHistory.changeView(t.layoutItem.sectionId,l)}}},{seperator:!0}],Yt=[ot,it,nt,K,Q],Zt=[].concat(_t,Yt);let Xt=0;function qt({layoutId:t,layoutItem:o,refElement:i}){const{widgetId:n}=o;if(!n)return[];const s=e.ExtensionManager.getInstance().getExtensions(e.extensionSpec.ExtensionPoints.ContextTool),a=i.getBoundingClientRect();return s.filter((t=>t.widgetId===n)).map((e=>({widgetId:n,icon:e.getIcon(),title:e.getTitle.bind(e),onClick:e.onClick.bind(e),checked:e.checked&&e.checked.bind(e),disabled:e.disabled?"function"==typeof e.disabled?e.disabled.bind(e):e.disabled:null,visible:e.visible?"function"==typeof e.visible?e.visible.bind(e):e.visible:null,settingPanel:e.getSettingPanel({layoutId:t,layoutItem:o,clientRect:a}),index:e.index}))).sort(((t,e)=>t.index-e.index))}function Jt(t){const{layoutId:o,layoutItem:n,refElement:s,modifiers:a,formatMessage:l,builderTheme:r,toolItems:d=[],showDefaultTools:u=!0}=t;if(!s)return null;const c=n.type===e.LayoutItemType.Section;let p;return p=u?[].concat(d,c?Zt:Yt,qt(t)):qt(t),0===p.length?null:(0,e.jsx)(i._Popper,{placement:"top-start",reference:s,open:!0,modifiers:a,version:Xt++,trapFocus:!1,autoFocus:!1,css:e.css`
        background: transparent;
        box-shadow: none;
      `},(0,e.jsx)("div",null,(0,e.jsx)(vt,{layoutId:o,layoutItem:n,theme:r,parentRef:s,tools:p,formatMessage:l})))}var Qt=c(840),Kt=c.n(Qt);const te=t=>{const{className:o}=t,n=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o}(t,["className"]),s=(0,e.classNames)("jimu-icon-component",o);return e.React.createElement(i.Icon,Object.assign({className:s,icon:Kt()},n))};class ee extends e.React.PureComponent{constructor(t){super(t),this.formatMessage=t=>null!=this.props.intl?this.props.intl.formatMessage({id:t,defaultMessage:It[t]}):It[t],this.isMac=()=>/macintosh|mac os x/i.test(navigator.userAgent),this.copyItem=()=>{const{layoutId:t,layoutItem:o,lockLayout:i}=this.props;if(!i){const i=this.ref.getBoundingClientRect(),n=i.width,s=i.height;(0,e.getAppStore)().dispatch(e.appActions.clipboardChanged({layoutId:t,width:n,height:s,layoutItemId:o.id}))}},this.deleteSelectedItem=()=>{const{selected:t,layoutId:e,layoutItem:i,lockLayout:n,isFunctionalWidget:s,isDesignMode:a}=this.props;if(t&&a&&(!n||s)){const t={layoutId:e,layoutItemId:i.id};return o.appBuilderSync.publishConfirmDeleteToApp(t)}},this.state={selected:!1,updateIndex:0},this.screenGroupInfo="",this.isMac()?this.keyBindings={delete:this.deleteSelectedItem,backspace:this.deleteSelectedItem,"command+keyc":this.copyItem}:this.keyBindings={delete:this.deleteSelectedItem,backspace:this.deleteSelectedItem,"ctrl+keyc":this.copyItem}}componentDidMount(){let t;const e=this.screenGroupInfo.split(":");if(e.length>1){const o=e[0],i=e[1];t=document.querySelector(`div.builder-layout-item[data-layoutid="${o}"][data-layoutitemid="${i}"]`)}this.modifiers=[{name:"preventOverflow",enabled:!0,options:{boundary:null!=t?t:"viewport",altAxis:!0}},{name:"flip",enabled:!0,options:{boundary:null!=t?t:"viewport",fallbackPlacements:(0,i.getFallbackPlacementsModifier)(["top-start","bottom-start"],!0).options.fallbackPlacements}}],this.props.selected&&this.setState({selected:!0})}componentDidUpdate(t){this.scrollIntoView(),this.props.selected&&!t.isDesignMode&&this.props.isDesignMode&&this.setState({updateIndex:this.state.updateIndex+1})}doScroll(){const{layoutId:t,layoutItem:e}=this.props,o=document.querySelector(`div.exb-rnd[data-layoutid="${t}"][data-layoutitemid="${e.id}"]`);null!=o&&o.scrollIntoView({behavior:"auto",block:"center"})}scrollIntoView(){const{selected:t,autoScroll:i}=this.props;if(!t||!i)return;const{layoutId:n}=this.props;let s=!1,l=!1;const r=(0,o.getAppConfigAction)().appConfig,d=a.searchUtils.buildLayoutStructure(r,this.pageContext.rootLayoutId,this.pageContext.pageId,a.ParentType.Page,a.utils.getCurrentSizeMode()),{viewId:u,sectionId:c}=a.searchUtils.findParentViewId(n,d),{screenId:p,screenGroupId:h}=a.searchUtils.findParentScreenId(n,d);if(null!==u&&null!=c&&(e.jimuHistory.changeView(c,u),s=!0),null!=h&&null!=h){const t=r.screenGroups[h].screens.indexOf(p);(0,e.getAppStore)().dispatch(e.appActions.screenGroupNavInfoChanged(h,t,!0)),l=!0}s||l?e.lodash.defer((()=>{this.doScroll()})):this.doScroll()}getStyle(){const{isFunctionalWidget:t,isSection:o,selected:i,isBlock:n,rotate:s=0}=this.props,l=e.polished.rgba(this.pageContext.builderTheme.colors.palette.dark[300],.6),r=this.pageContext.builderTheme.colors.palette.primary[600],d=!t||o?"dashed":"solid";return e.css`
      .${at} &,
      .${st} & {
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
    `}getKeyboardComponent(){return(0,e.jsx)(e.Keyboard,{bindings:this.keyBindings})}isResizable(){const{resizable:t=!0,selected:e,isInlineEditing:o}=this.props;return e&&!this.pageContext.viewOnly&&!this.props.lockLayout&&t&&!o}showToolbar(){const{forbidToolbar:t,selected:e}=this.props;return!t&&!this.pageContext.viewOnly&&e}render(){return(0,e.jsx)(St.Consumer,null,(t=>(this.screenGroupInfo=t,(0,e.jsx)(a.PageContext.Consumer,null,(t=>{if(this.pageContext=t,!this.props.isDesignMode)return null;const{layoutId:o,layoutItem:i,resizable:n=!0,draggable:s=!0,selected:a,toolItems:l,showDefaultTools:r,left:d,top:u,right:c,bottom:p,rotate:h}=this.props,g=!s&&!n;return(0,e.jsx)("div",{"data-testid":"select-wrapper",ref:t=>this.ref=t,css:this.getStyle(),className:(0,e.classNames)("select-wrapper",{selected:a,"no-embed-layout":!this.props.hasEmbeddedLayout})},!t.viewOnly&&(0,e.jsx)("div",{className:"selected-tip"},(0,e.jsx)("div",{className:"tip-content"})),this.showToolbar()&&(0,e.jsx)(Jt,{layoutId:o,layoutItem:i,refElement:this.ref,modifiers:this.modifiers,builderTheme:this.pageContext.builderTheme,formatMessage:this.formatMessage,toolItems:l,showDefaultTools:r}),this.isResizable()&&(0,e.jsx)(Nt,{left:d,right:c,top:u,bottom:p,rotation:h,builderTheme:t.builderTheme}),g&&a&&(0,e.jsx)("div",{className:"lock-layout-tip rounded-circle"},(0,e.jsx)(te,{size:"s",color:t.builderTheme.colors.black})),a&&this.getKeyboardComponent())})))))}}const oe=e.ReactRedux.connect((function(t,o){var i,n,s,a,l;return{lockLayout:null!==(s=null===(n=null===(i=t.appConfig)||void 0===i?void 0:i.forBuilderAttributes)||void 0===n?void 0:n.lockLayout)&&void 0!==s&&s,isDesignMode:t.appRuntimeInfo.appMode===e.AppMode.Design,sectionNavInfo:o.isSection?null===(l=null===(a=t.appRuntimeInfo)||void 0===a?void 0:a.sectionNavInfos)||void 0===l?void 0:l[o.layoutItem.sectionId]:null}}))((0,e.injectIntl)(ee));var ie=c(7756);function ne(t,e){const o={};return o.width=Math.min(t.width,e.width),o.height=Math.min(t.height,e.height),o.left=Math.max(0,t.left),o.top=Math.max(0,t.top),o.left+o.width>e.width&&(o.left=e.width-o.width),o.top+o.height>e.height&&(o.top=e.height-o.height),o}function se(t,o,i,n){var s,l;if((null==t?void 0:t.itemType)===e.LayoutItemType.ScreenGroup){const t=a.utils.getCurrentPageId(),o=a.utils.getAppConfig(),i=o.pages[t];return Object.keys(null!==(s=null==i?void 0:i.layout)&&void 0!==s?s:{}).some((t=>{const s=o.layouts[i.layout[t]];return s.type===e.LayoutType.FlowLayout&&s.id===n}))}let r=function(t,o){var i,n,s,a;if(!o)return!1;if(null!==(i=o.isFromCurrentSizeMode)&&void 0!==i&&!i)return!0;const l=o.layoutInfo;if(l){const o=(0,e.getAppStore)().getState(),{layouts:i}=o.appConfig,r=i[l.layoutId],d=null===(n=null==r?void 0:r.content)||void 0===n?void 0:n[l.layoutItemId];if(d){const o=null!==(a=null===(s=d.setting)||void 0===s?void 0:s.lockParent)&&void 0!==a&&a;if(r.type===e.LayoutType.FlowLayout||o)return l.layoutId===t}}return!0}(n,t);return r&&"function"==typeof o.isItemAccepted&&(r=o.isItemAccepted(t,null!==(l=i.isPlaceholder)&&void 0!==l&&l)),r}function ae(t){const o=e.React.useRef(),i=e.ReactRedux.useSelector((e=>t.layouts[e.browserSizeMode])),n=e.ReactRedux.useSelector((t=>t.appRuntimeInfo.appMode===e.AppMode.Design)),s=e.React.useContext(a.PageContext),r=e.React.useContext(a.LayoutContext),d=e.React.useRef();d.current={props:t,layoutId:i,pageContext:s,layoutContext:r},e.React.useEffect((()=>{let t;return o.current&&(t=function(t,o){let i,n,s,a;return(0,l.interact)(t).dropzone({accept:".exb-rnd",checker:(t,n,s,a,l,r,d)=>{const{props:u,layoutId:c,pageContext:p,layoutContext:h}=o.current;return"none"!==getComputedStyle(l).pointerEvents&&(i=function(t){if(t&&"function"==typeof t.getAttribute){const o=t.getAttribute("data-layoutid"),i=t.getAttribute("data-layoutitemid");if(o&&i)return function(t,o){var i,n,s,a,l,r;const d=(0,e.getAppStore)().getState(),{layouts:u,widgets:c}=d.appConfig,p=u[t],h=null===(i=null==p?void 0:p.content)||void 0===i?void 0:i[o];if(h){const i={layoutId:t,layoutItemId:o},u=function(t,o){var i,n,s;if(o.type===e.LayoutItemType.Widget){const e=o.widgetId;if(e)return null===(s=null===(n=null===(i=t.appConfig)||void 0===i?void 0:i.widgets)||void 0===n?void 0:n[e])||void 0===s?void 0:s.manifest}return null}(d,h);let p=null;return h.type===e.LayoutItemType.Widget&&h.widgetId&&(p=null===(n=c[h.widgetId])||void 0===n?void 0:n.uri),{itemType:h.type,layoutInfo:i,uri:p,manifest:u,rotation:null!==(r=null===(l=null===(a=null===(s=h.setting)||void 0===s?void 0:s.style)||void 0===a?void 0:a.transform)||void 0===l?void 0:l.rotate)&&void 0!==r?r:0}}}(o,i)}return null}(d),!p.viewOnly&&s&&!d.contains(l)&&se(i,h,u,c))},ondragenter:t=>{const{props:e,layoutId:a,pageContext:l}=o.current;t.stopPropagation(),t.target.classList.add("drop-target"),a!==l.rootLayoutId&&t.target.classList.add("drop-active"),n=document.getElementById("interact_dragging_placeholder")||t.relatedTarget,s=t.dropzone.getRect(),e.onDragEnter&&e.onDragEnter(i),e.onToggleDragoverEffect&&e.onToggleDragoverEffect(!0,i)},ondragleave:t=>{const{props:e}=o.current;t.stopPropagation(),t.target.classList.remove("drop-target"),t.target.classList.remove("drop-active"),n=null,s=null,a&&cancelAnimationFrame(a),e.onDragLeave&&e.onDragLeave(i),e.onToggleDragoverEffect&&e.onToggleDragoverEffect(!1,i)},ondropmove:t=>{const{props:e}=o.current;t.stopPropagation(),a&&cancelAnimationFrame(a),a=requestAnimationFrame((()=>{const o=t.dragEvent.rect,l=t.dragEvent._interaction.coords.cur.client,r=l.x-s.left,d=l.y-s.top;e.onDragOver&&e.onDragOver(i,n,s,{left:o.left-s.left,top:o.top-s.top,width:o.width,height:o.height,right:o.left-s.left+o.width,bottom:o.top-s.top+o.height},r,d,t.dragEvent.speed),a=null}))},ondrop:t=>{const{props:e}=o.current;if(t.stopPropagation(),t.target.classList.remove("drop-target"),t.target.classList.remove("drop-active"),e.onToggleDragoverEffect&&e.onToggleDragoverEffect(!1,i),a&&cancelAnimationFrame(a),e.onDrop){const o=t.dragEvent.rect;let n={left:o.left-s.left,top:o.top-s.top,width:o.width,height:o.height};n=ne(n,{left:0,top:0,width:s.width,height:s.height}),n.right=n.left+n.width,n.bottom=n.top+n.height;const a=t.dragEvent._interaction.coords.cur.client,l=a.x-s.left,r=a.y-s.top;e.onDrop(i,s,n,l,r)}}})}(o.current,d)),()=>{t&&t.unset()}}),[]),e.React.useEffect((()=>{o.current&&function(t,o){let i,n;const s=e.lodash.throttle((function(t,e,i){if(!t||isNaN(e)||isNaN(i))return;let s=200,a=100;const{props:l}=o.current;t.manifest.defaultSize&&(s=isNaN(t.manifest.defaultSize.width)?s:t.manifest.defaultSize.width,a=isNaN(t.manifest.defaultSize.height)?a:t.manifest.defaultSize.height),l.onDragOver&&l.onDragOver(t,null,n,{left:e-s/2-n.left,top:i-a/2-n.top,width:s,height:a,right:e-s/2-n.left+s,bottom:i-a/2-n.top+a},e-n.left,i-n.top)}),100);function a(){const{props:e,layoutId:n,layoutContext:s}=o.current,a=window.parent&&window.parent._dragging_widget_item?window.parent._dragging_widget_item:null;i&&i===a||(i=a,se(i,s,e,n)&&(t.classList.add("drop-target"),e.onToggleDragoverEffect&&e.onToggleDragoverEffect(!0,i)))}function l(){if(!i)return!1;const{props:t,layoutId:e,pageContext:n,layoutContext:s}=o.current;return!n.viewOnly&&se(i,s,t,e)}t.addEventListener("dragenter",(function(e){const{props:s}=o.current;e.stopPropagation(),e.preventDefault(),a(),l()&&(n=t.getBoundingClientRect(),i&&s.onDragEnter&&s.onDragEnter(i))})),t.addEventListener("dragleave",(function(e){const{props:n}=o.current;e.stopPropagation(),e.preventDefault(),t.classList.remove("drop-target"),t.classList.remove("drop-active"),l()&&(n.onDragLeave&&n.onDragLeave(i),n.onToggleDragoverEffect&&n.onToggleDragoverEffect(!1,i),i=null)})),t.addEventListener("dragover",(function(e){const{layoutId:n,pageContext:r}=o.current;if(e.stopPropagation(),e.preventDefault(),a(),l()){if(e.dataTransfer&&(e.dataTransfer.dropEffect="copy"),t.classList.contains("drop-target")){const{clientX:o,clientY:a}=e;t.classList.contains("drop-active")||n===r.rootLayoutId||t.classList.add("drop-active"),s(i,o,a)}}else e.dataTransfer&&(e.dataTransfer.dropEffect="none")})),t.addEventListener("drop",(function(e){if(e.stopPropagation(),t.classList.remove("drop-target"),t.classList.remove("drop-active"),document.documentElement.classList.remove(at),!l())return void(i=null);const{props:n}=o.current,{clientX:s,clientY:a}=e,r=t.getBoundingClientRect();let d=200,u=100;i.manifest.defaultSize&&(d=isNaN(i.manifest.defaultSize.width)?d:i.manifest.defaultSize.width,u=isNaN(i.manifest.defaultSize.height)?u:i.manifest.defaultSize.height);let c={width:d,height:u,left:s-d/2-r.left,top:a-u/2-r.top};c=ne(c,{left:0,top:0,width:r.width,height:r.height}),c.right=c.left+c.width,c.bottom=c.top+c.height,n.onToggleDragoverEffect&&n.onToggleDragoverEffect(!1,i),n.onDrop&&n.onDrop(i,r,c,s-r.left,a-r.top),i=null}))}(o.current,d)}),[]);const{className:u,style:c,highlightDragover:p}=t,h=(0,e.classNames)("exb-drop-area d-flex",u);return(0,e.jsx)("div",{className:h,css:e.css`
      background: transparent;
      padding: inherit;
      pointer-events: ${n?"auto":"none"};

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
    `,style:c,ref:t=>{o.current=t}},p&&(0,e.jsx)("div",{className:"w-100 highlight-content"},t.children))}const le=t=>{const{className:o}=t,n=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o}(t,["className"]),s=(0,e.classNames)("jimu-icon-component",o);return e.React.createElement(i.Icon,Object.assign({className:s,icon:Dt()},n))};const re=e.css`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  right: 0;
  display: flex;
  z-index: 0;
`;class de extends e.React.PureComponent{constructor(t){super(t),this.toggleModal=t=>{t.stopPropagation(),this.setState((t=>({showModal:!t.showModal})))},this.closeModal=()=>{this.state.showModal&&this.setState({showModal:!1})},this.toggleDragoverEffect=(t,e)=>{this.ref&&t&&this.canDrop(e)?this.ref.classList.add("dragover"):this.ref.classList.remove("dragover")},this.onDrop=(t,i,n)=>{if(!this.canDrop(t))return;const s=(0,o.getAppConfigAction)();if(t.layoutInfo){const{layoutId:o,layoutItemId:i}=t.layoutInfo,n=s.appConfig.layouts[o].content[i];n.type===e.LayoutItemType.Widget&&(s.removeLayoutItem(t.layoutInfo,!1),s.updateLayoutItem({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItemId},"widgetId",n.widgetId),s.exec())}else this.newWidget(t.uri)},this.setWidget=t=>{this.newWidget(t.uri).then((()=>{this.setState({isBusy:!1})})),this.setState({showModal:!1,isBusy:!0})},this.isItemAccepted=t=>this.layoutContext.isItemAccepted(t,!0),this.fakeLayouts=(0,e.Immutable)({[e.BrowserSizeMode.Large]:`${this.props.layoutId}_${this.props.layoutItemId}_tlarge`,[e.BrowserSizeMode.Medium]:`${this.props.layoutId}_${this.props.layoutItemId}_tmedium`,[e.BrowserSizeMode.Small]:`${this.props.layoutId}_${this.props.layoutItemId}_tsmall`}),this.state={showModal:!1,isBusy:!1}}getStyle(t){return e.css`
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
    `}canDrop(t){var i,n;const s=(0,o.getAppConfigAction)();if(t.layoutInfo){const{layoutId:o,layoutItemId:n}=t.layoutInfo,a=s.appConfig.layouts[o].content[n];if(a.type===e.LayoutItemType.Widget&&a.widgetId){const t=s.appConfig.widgets[a.widgetId];if((null===(i=null==t?void 0:t.manifest)||void 0===i?void 0:i.widgetType)!==e.WidgetType.Layout)return!0}}else if(t.itemType===e.LayoutItemType.Widget&&t.manifest&&(null===(n=t.manifest)||void 0===n?void 0:n.widgetType)!==e.WidgetType.Layout&&t.uri)return!0;return!1}newWidget(t){return i=this,n=void 0,a=function*(){const i=(0,o.getAppConfigAction)(),n={uri:t};return yield e.WidgetManager.getInstance().handleNewWidgetJson(n).then((t=>{const o=e.appConfigUtils.getUniqueId(i.appConfig,"widget");t.id=o,i.createWidget((0,e.Immutable)(t)),i.updateLayoutItem({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItemId},"widgetId",o),i.exec()}))},new((s=void 0)||(s=Promise))((function(t,e){function o(t){try{r(a.next(t))}catch(t){e(t)}}function l(t){try{r(a.throw(t))}catch(t){e(t)}}function r(e){var i;e.done?t(e.value):(i=e.value,i instanceof s?i:new s((function(t){t(i)}))).then(o,l)}r((a=a.apply(i,n||[])).next())}));var i,n,s,a}getPopupStyle(){const{builderTheme:t}=this.pageContext;return e.css`
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
    `}render(){const{forceAspectRatio:t,aspectRatio:o}=this.props;return(0,e.jsx)(a.PageContext.Consumer,null,(n=>(this.pageContext=n,(0,e.jsx)(a.LayoutContext.Consumer,null,(s=>{var a;return this.layoutContext=s,(0,e.jsx)("div",{className:(0,e.classNames)("layout-widget layout-item-content no-widget w-100 d-flex justify-content-center align-items-center",{"aspect-ratio-wrapper":t&&o>0}),ref:t=>{this.ref=t},css:this.getStyle(n.builderTheme)},(0,e.jsx)(ae,{css:re,className:"drop-tip",layouts:this.fakeLayouts,isPlaceholder:!0,highlightDragover:!1,onToggleDragoverEffect:this.toggleDragoverEffect,onDrop:this.onDrop}),this.state.isBusy&&(0,e.jsx)(i.Loading,{type:i.LoadingType.Primary}),!this.state.isBusy&&(0,e.jsx)("div",{ref:t=>{this.btnRef=t},className:"add-btn"},(0,e.jsx)(i.Button,{icon:!0,css:e.css`width: 36px; height: 36px; padding: 0.5rem;`,onClick:this.toggleModal,"aria-haspopup":!0,"aria-label":null===(a=this.props.intl)||void 0===a?void 0:a.formatMessage({id:"addWidget"})},(0,e.jsx)(le,null))),!this.state.isBusy&&this.state.showModal&&(0,e.jsx)(ie.WidgetListPopper,{builderTheme:n.builderTheme,referenceElement:this.btnRef,isItemAccepted:this.isItemAccepted,onItemSelect:this.setWidget,onClose:this.closeModal}),this.pageContext.viewOnly&&(0,e.jsx)("div",{className:"mask"}))})))))}}const ue=(0,e.injectIntl)(de);class ce extends e.React.PureComponent{mask(){return(0,e.jsx)("div",{className:"widget-mask"})}getStyle(){return e.css`
      .${st} & {
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
    `}render(){const{widgetId:t,isInlineEditing:o,isFunctionalWidget:i,hasEmbeddedLayout:n}=this.props;if(!t)return(0,e.jsx)(ue,Object.assign({css:this.getPlaceholderStyle()},this.props));const s=!o&&i&&!n;return(0,e.jsx)(a.WidgetRenderer,Object.assign({className:"w-100",css:this.getStyle()},this.props),s&&this.mask())}}var pe;!function(t){t[t.ChooseLayoutType=0]="ChooseLayoutType",t[t.RenderLayout=1]="RenderLayout"}(pe||(pe={}));class he extends e.React.Component{constructor(){super(...arguments),this.state={mode:pe.RenderLayout},this.onLayoutTypeSelected=()=>{this.setState({mode:pe.RenderLayout})},this.switchToChoosingMobe=()=>{this.setState({mode:pe.ChooseLayoutType})}}shouldComponentUpdate(t){return!(t.isPageItem&&!t.visible)&&Object.keys(t).some((e=>t[e]!==this.props[e]))}render(){const{layout:t}=this.props;if(!t)return null;const o=(0,a.findLayoutBuilder)(t.type||e.LayoutType.FlowLayout);if(!o)return null;const i=this.props,{isItemAccepted:n}=i,s=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o}(i,["isItemAccepted"]);return(0,e.jsx)(a.LayoutContext.Provider,{value:{isItemAccepted:n||me}},(0,e.jsx)(o,Object.assign({},s)))}}const ge=e.ReactRedux.connect(a.utils.mapStateToLayoutProps)(he);function me(t,o){var i;return!!t&&(!o||t.itemType===e.LayoutItemType.Widget&&null!=t.uri&&(null===(i=t.manifest)||void 0===i?void 0:i.widgetType)!==e.WidgetType.Layout)}var fe,ye,ve;!function(t){t[t.BringForward=0]="BringForward",t[t.SendBackward=1]="SendBackward",t[t.BringToFront=2]="BringToFront",t[t.SendToBack=3]="SendToBack"}(fe||(fe={})),(ve=ye||(ye={})).Page="PAGE",ve.Widget="WIDGET",ve.View="VIEW",ve.Screen="SCREEN";const Ie=3;var xe,be,we;function Se(t,e){if(!t)return null;let o={};t.backgroundIMage&&(o="string"==typeof t.backgroundIMage?{}:t.backgroundIMage);const n=t.backgroundPosition?i.FillType[t.backgroundPosition.toUpperCase()]:i.FillType.FILL;let s;s=null==t.backgroundColor?e:""===t.backgroundColor?"transparent":t.backgroundColor?t.backgroundColor:"";const a={color:s,fillType:n,image:o};return i.styleUtils.toBackgroundStyle(a)}function Ce(t){var o,n;const{viewId:s,isActive:a,layoutEntryComponent:l,viewVisibilityContext:r}=t,d=e.ReactRedux.useSelector((t=>{var e,o;return null===(o=null===(e=t.appConfig)||void 0===e?void 0:e.views)||void 0===o?void 0:o[s]})),u=null===(n=null===(o=(0,v.useTheme)())||void 0===o?void 0:o.body)||void 0===n?void 0:n.bg,c=l,p=r,[h,g]=e.React.useState(!1),m=e.React.useMemo((()=>({isInView:!0,isInCurrentView:a})),[a]);return e.React.useEffect((()=>{a&&d.lazyLoad&&!h&&g(!0)}),[a,d.lazyLoad,h]),(0,e.jsx)("div",{className:(0,e.classNames)("w-100 h-100 d-flex section-view",{[i.FOCUSABLE_CONTAINER_CLASS]:a}),style:Se(d,u),key:s},(h||!d.lazyLoad)&&(0,e.jsx)(e.ErrorBoundary,null,(0,e.jsx)(p.Provider,{value:m},(0,e.jsx)(c,{layouts:null==d?void 0:d.layout,isInSection:!0,className:"w-100"}))))}function Re(t){var o,i;const{views:n,navInfo:s,animationPreview:a,playMode:l,currentIndex:r,previousIndex:d,progress:u,loop:c,viewTransition:p}=t,h=a&&l===e.AnimationPlayMode.OneByOne,{setting:g,playId:m,onAnimationEnd:f,depth:y}=e.React.useContext(e.AnimationContext),v=e.ReactRedux.useSelector((t=>{var o;return!g||g.type===e.AnimationType.None||(null===(o=t.appRuntimeInfo)||void 0===o?void 0:o.appMode)===e.AppMode.Design})),I=!v||h||(null==s?void 0:s.playId)&&(null==s?void 0:s.withOneByOne)?g:null,x=e.React.useMemo((()=>({trigger:e.AnimationTriggerType.Manual,setting:I,playId:!v||h?m:null,inheritedOneByOneSetting:null,depth:y+1,onAnimationEnd:f})),[v,I,h,m,y,f]);return(0,e.jsx)(e.AnimationContext.Provider,{value:x},(0,e.jsx)("div",{className:"section-content"},(0,e.jsx)(e.TransitionContainer,{useProgress:null!==(o=null==s?void 0:s.useProgress)&&void 0!==o&&o,useStep:null!==(i=null==s?void 0:s.useStep)&&void 0!==i&&i,previousIndex:d,currentIndex:r,progress:u,transitionType:null==p?void 0:p.type,direction:null==p?void 0:p.direction,playId:null==s?void 0:s.playId,withOneByOne:null==s?void 0:s.withOneByOne,loop:c},n.map((o=>{const i=o===n[r];return(0,e.jsx)(Ce,{key:o,viewId:o,isActive:i,layoutEntryComponent:t.layoutEntryComponent,viewVisibilityContext:t.viewVisibilityContext})})))))}!function(t){t.Auto="auto",t[t.Normal=0]="Normal",t[t.BoundaryDropArea=10]="BoundaryDropArea",t[t.DragMoveTip=20]="DragMoveTip",t[t.HandlerTools=30]="HandlerTools",t[t.DraggingItem=40]="DraggingItem"}(xe||(xe={})),(we=be||(be={})).Auto="AUTO",we.Stretch="STRETCH",we.Custom="CUSTOM";const Te=t=>{const{className:o}=t,n=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o}(t,["className"]),s=(0,e.classNames)("jimu-icon-component",o);return e.React.createElement(i.Icon,Object.assign({className:s,icon:kt()},n))};const Ae=t=>{const{className:o}=t,n=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o}(t,["className"]),s=(0,e.classNames)("jimu-icon-component",o);return e.React.createElement(i.Icon,Object.assign({className:s,icon:Bt()},n))};function Me(t){var o,i,n;const{sectionId:s,currentIndex:a,numOfViews:l,onCurrentViewChange:r}=t,d=e.ReactRedux.useSelector((t=>{var e;return null===(e=t.appConfig.sections[s])||void 0===e?void 0:e.arrowsNav})),u=e.ReactRedux.useSelector((t=>{var e;return null===(e=t.appConfig.sections[s])||void 0===e?void 0:e.dotsNav})),c=null!==(o=null==u?void 0:u.position)&&void 0!==o?o:"b",p=e.React.useMemo((()=>{const t=[];for(let e=0;e<l;e++)t.push(e);return t}),[l]),h=()=>{var t,o,i,n;return e.css`
      position: absolute;
      cursor: pointer;

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
    `},g=e.React.useCallback(((t,o)=>(0,e.jsx)("div",{key:t,className:(0,e.classNames)("dot rounded-circle",{active:o,disabled:l<=1}),onClick:o?void 0:()=>r(t)})),[r,l]),m=e.React.useCallback((()=>{r(a>0?a-1:l-1)}),[a,l,r]),f=e.React.useCallback((()=>{r(a<l-1?a+1:0)}),[a,l,r]),y=l>1&&0!==a,v=l>1&&a!==l-1;return(0,e.jsx)(e.React.Fragment,null,(null==d?void 0:d.visible)&&(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)("div",{className:(0,e.classNames)("arrows-nav first",{vertical:"v"===d.direction,disabled:!y}),css:h(),onClick:y?m:null},(0,e.jsx)(Te,{autoFlip:"v"!==d.direction,size:null!==(i=d.size)&&void 0!==i?i:12})),(0,e.jsx)("div",{className:(0,e.classNames)("arrows-nav second",{vertical:"v"===d.direction,disabled:!v}),css:h(),onClick:v?f:null},(0,e.jsx)(Ae,{autoFlip:"v"!==d.direction,size:null!==(n=d.size)&&void 0!==n?n:12}))),(null==u?void 0:u.visible)&&(0,e.jsx)("div",{className:(0,e.classNames)("dots-nav",{"snap-left":"l"===c,"snap-top":"t"===c,"snap-right":"r"===c,"snap-bottom":"b"===c}),css:(()=>{var t,o,i,n,s,a,l,r,d,p,h,g,m,f;return e.css`
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
    `})()},p.map((t=>g(t,t===a)))))}function Pe(t){return e.css`
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
  `}function Le(t){const{views:o,navInfo:n,activeView:s,animationPreview:a,playMode:l,transition:r,sectionId:d,autoPlay:u,focusable:c=!0,interval:p=Ie,loop:h=!0,className:g,sectionStyle:m,forceAspectRatio:f,aspectRatio:y,rotate:v,layoutEntryComponent:I,viewVisibilityContext:x}=t,b=e.React.useRef(),w=e.React.useRef(),S=e.React.useRef(!1),C=e.React.useRef(!1),R=e.React.useRef(null),[T,A]=e.React.useState(!1),M=null==s?void 0:s.id,P=e.React.useMemo((()=>{var t;let i,s,a,l=o;return n?(l=null!==(t=n.visibleViews)&&void 0!==t?t:o,n.useProgress?(a=n.progress,i=(0,e.getIndexFromProgress)(a,l.length).currentIndex):(i=Math.max(0,l.indexOf(n.currentViewId)),s=n.previousViewId?Math.max(0,l.indexOf(n.previousViewId)):Math.max(0,i-1))):(i=Math.max(0,l.indexOf(M)),s=i),b.current=i,{currentIndex:i,previousIndex:s,progress:a}}),[M,n,o]),L=e.React.useMemo((()=>i.styleUtils.toCSSStyle(m)),[m]),{transform:z}=L,j=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o}(L,["transform"]),N=v>0||v<0?`rotateZ(${v}deg)`:"";let $=N;z&&($=`${z} ${N}`);const k=e.React.useCallback((()=>{A(!0)}),[]),O=e.React.useCallback((()=>{A(!1)}),[]),B=e.React.useCallback((t=>{S.current=!0,C.current=t.target===w.current,null!=R.current&&(clearTimeout(R.current),R.current=null),u&&A(!0)}),[u]),E=e.React.useCallback((t=>{S.current=!1,null!=R.current&&(clearTimeout(R.current),R.current=null),u&&(R.current=setTimeout((()=>{A(!1)}),500))}),[u]),D=u&&!T;!function(t){const{sectionId:o,autoPlay:i,interval:n=Ie,loop:s=!1}=t,a=e.React.useRef(),l=e.ReactRedux.useSelector((t=>{var o;return i?(null===(o=t.appRuntimeInfo)||void 0===o?void 0:o.appMode)===e.AppMode.Design:null})),r=e.React.useRef(l),d=e.React.useCallback((()=>{a.current&&(clearInterval(a.current),a.current=null)}),[]),u=e.React.useCallback((()=>{d(),a.current=setInterval((()=>{const t=function(t,o){var i,n;const s=(0,e.getAppStore)().getState(),a=s.appConfig.sections[t].views,l=null===(n=null===(i=s.appRuntimeInfo)||void 0===i?void 0:i.sectionNavInfos)||void 0===n?void 0:n[t],r=(null==l?void 0:l.currentViewId)?a.indexOf(l.currentViewId):0,d=r<a.length-1?r+1:0;return!(!o&&0===d||(e.jimuHistory.changeView(t,a[d]),0))}(o,s);t||d()}),1e3*n)}),[o,s,n,d]);e.React.useEffect((()=>{if(!r.current){if(!i)return void d();u()}return()=>{d()}}),[i,n,s,d,u]),e.React.useEffect((()=>{if(r.current!==l&&null!==l){if(r.current=l,l)return void d();i&&u()}}),[l,u,d,i])}({sectionId:d,interval:p,loop:h,autoPlay:D});const F=e.React.useCallback((t=>{e.jimuHistory.changeView(d,o[t])}),[d,o]);return(0,e.jsx)("div",{className:(0,e.classNames)("section-layout layout-item-content w-100",g,{"aspect-ratio-wrapper":f&&y>0}),css:Pe(y),"data-sectionid":d,style:Object.assign(Object.assign({},j),{transform:$}),onMouseEnter:u?k:null,onMouseLeave:u?O:null,onTouchStart:u?k:null,onTouchEnd:u?O:null,onFocus:B,onBlur:E,tabIndex:c?0:void 0,ref:w},(0,e.jsx)(Re,{views:o,navInfo:n,animationPreview:a,playMode:l,currentIndex:P.currentIndex,previousIndex:P.previousIndex,progress:P.progress,loop:D&&h,viewTransition:r,layoutEntryComponent:I,viewVisibilityContext:x}),(0,e.jsx)(Me,{sectionId:d,numOfViews:o.length,currentIndex:P.currentIndex,onCurrentViewChange:F}))}class ze extends e.React.PureComponent{render(){return e.React.createElement(Le,Object.assign({},this.props,{layoutEntryComponent:ge,viewVisibilityContext:a.ViewVisibilityContext}))}}function je(t,o){const[i,n]=e.React.useState(!0),s=e.React.useContext(wt);return e.React.useEffect((()=>{null!=t&&n(s)}),[t,s]),i}function Ne(){const t=[0];for(let e=1;e<=10;e++)t.push(e/10);return t}const $e=l.interact.modifiers.restrictRect({restriction:"parent"}),ke=l.interact.modifiers.restrictRect({restriction:"div.limited-drag-boundary"}),Oe=[tt,et,K,Q];function Be(t){var o,i,n,s,r,d,u,c;const p=e.ReactRedux.useSelector((o=>function(t,o){var i;const n=a.utils.mapStateToLayoutItemProps(t,o),s=o.layoutId,l=null===(i=t.appConfig.layouts[s])||void 0===i?void 0:i.type;if(!n.layoutItem)return Object.assign({layoutType:l},n);if(n.layoutItem.type===e.LayoutItemType.Widget)return Object.assign(Object.assign({layoutType:l},n),a.utils.mapStateToWidgetProps(t,o));const r=a.searchUtils.getSectionInfo(t,n.layoutItem.sectionId),d=Gt(r);return Object.assign(Object.assign(Object.assign({layoutType:l},n),r),{activeView:t.appConfig.views[d]})}(o,t)),e.ReactRedux.shallowEqual),h=Object.assign(Object.assign({},p),t),g=e.React.useContext(a.PageContext),m=e.React.useRef(),f=e.React.useRef();let y,v;const{effect:I,oneByOneEffect:x}=null!==(i=null===(o=h.layoutItem)||void 0===o?void 0:o.setting)&&void 0!==i?i:{},{animationPreview:b,previewId:w,playMode:S,layoutType:C}=h,R=e.React.useCallback((()=>g.rootLayoutId),[g.rootLayoutId]),T=function(t,o){const i=e.React.useRef(),[n,s]=e.React.useState(!0);return e.React.useEffect((()=>{if(i.current&&(i.current.unobserve(t),i.current=null),o&&t&&"function"==typeof IntersectionObserver){const e=new IntersectionObserver((t=>{var e;(e=t[0]).target.classList.contains("playing-animation")||e.boundingClientRect.width>0&&e.boundingClientRect.height>0&&s(e.isIntersecting)}),{threshold:Ne(),root:document,rootMargin:"20%"});return e.observe(t),i.current=e,()=>{i.current.unobserve(t),i.current=null}}}),[t,o]),n}(m.current,h.watchViewportVisibility),{type:A,trigger:M,playId:P,revert:L,onAnimationEnd:z}=function(t){var o;const{effect:i,isPreview:n,previewId:s,playMode:l,isParentPlaying:r}=t,{pageId:d}=e.React.useContext(a.PageContext),u=e.React.useRef(),[c,p]=e.React.useState(),h=e.React.useRef(e.AnimationTriggerType.Manual);let g=null===(o=null==i?void 0:i[e.AnimationTriggerType.ScrollIntoView])||void 0===o?void 0:o.type;g=g&&g!==e.AnimationType.None?g:null;const m=e.ReactRedux.useSelector((t=>{var o;return null===g||(null===(o=t.appRuntimeInfo)||void 0===o?void 0:o.appMode)===e.AppMode.Design})),f=e.ReactRedux.useSelector((t=>null===g?null:t.browserSizeMode)),y=je(g),v=e.React.useRef(y),I=e.React.useRef(f),x=e.React.useMemo((()=>g?n&&u.current!==s&&l!==e.AnimationPlayMode.OneByOne?(u.current=s,s):c:null),[g,n,l,s,c]);e.React.useEffect((()=>{m||p(Symbol("autoplay when switching to live view")),h.current=e.AnimationTriggerType.Manual}),[m]),e.React.useEffect((()=>{m||I.current===f||(p(Symbol("autoplay when size mode changed")),h.current=e.AnimationTriggerType.Manual),I.current=f}),[f,m]),e.React.useEffect((()=>{m||v.current===y||(v.current=y,p(Symbol("autoplay when visible change")),h.current=e.AnimationTriggerType.Manual)}),[y,m]);const b=e.React.useCallback((()=>{c&&(h.current=e.AnimationTriggerType.ScrollIntoView,p(null))}),[c]);if(!g)return{};const w={type:!m||x&&x===s||r?g:null,trigger:x?e.AnimationTriggerType.Manual:h.current,revert:!y};return w.playId=null===w.type?null:x,w.onAnimationEnd=null===w.type?null:b,w}({effect:I,isPreview:b,previewId:w,playMode:S,isParentPlaying:h.isParentPlaying}),{setting:j,trigger:N,inheritedOneByOneSetting:$,playId:k,depth:O,revert:B,onAnimationEnd:E}=function(t){var o,i,n;const{effect:s,isSection:l,isPreview:r,previewId:d,playMode:u,isParentPlaying:c}=t,{pageId:p}=e.React.useContext(a.PageContext),h=e.React.useContext(e.AnimationContext),g=e.React.useRef(),m=e.React.useRef(e.AnimationTriggerType.Manual);let f=null===(o=null==s?void 0:s[e.AnimationTriggerType.ScrollIntoView])||void 0===o?void 0:o.type;f=f&&f!==e.AnimationType.None?f:null;const y=e.ReactRedux.useSelector((t=>{var o;return null===f||(null===(o=t.appRuntimeInfo)||void 0===o?void 0:o.appMode)===e.AppMode.Design})),v=je(f),I=e.React.useRef(v),[x,b]=e.React.useState(),w=e.React.useMemo((()=>f?r&&g.current!==d&&u!==e.AnimationPlayMode.AsOne?(g.current=d,d):x:null),[f,r,u,d,x]);e.React.useEffect((()=>{y||b(Symbol("autoplay when switching to live view")),m.current=e.AnimationTriggerType.Manual}),[y]),e.React.useEffect((()=>{y||I.current===v||(I.current=v,b(Symbol("autoplay when visible change")),m.current=e.AnimationTriggerType.Manual)}),[v,y]);const S=e.React.useCallback((()=>{x&&(m.current=e.AnimationTriggerType.ScrollIntoView,b(null))}),[x]);if(!f)return{inheritedOneByOneSetting:null==h?void 0:h.setting,depth:(null!==(i=null==h?void 0:h.depth)&&void 0!==i?i:0)+1};const C={setting:!y||w&&w===d||l||c?null==s?void 0:s[e.AnimationTriggerType.ScrollIntoView]:null,onAnimationEnd:S,trigger:w?e.AnimationTriggerType.Manual:m.current,inheritedOneByOneSetting:null==h?void 0:h.setting,depth:(null!==(n=null==h?void 0:h.depth)&&void 0!==n?n:0)+1};return C.playId=null===C.setting?null:w,C.revert=!(!C.setting&&!C.inheritedOneByOneSetting||v),C}({effect:x,isSection:(null===(n=h.layoutItem)||void 0===n?void 0:n.type)===e.LayoutItemType.Section,isPreview:b,previewId:w,playMode:S,isParentPlaying:h.isParentPlaying});e.React.useEffect((()=>{if(m.current&&!f.current){const{layoutId:o,layoutItemId:i,useDragHandler:n,onDragging:s,onResizing:a}=t,{layoutItem:r}=p;f.current=(0,l.interact)(m.current).origin("parent"),f.current=dt(f.current,{layoutId:o,layoutItemId:i,useDragHandler:n,onDragging:s,onDragStart:F,onDragEnd:V,itemType:r.type,rootLayoutId:R,restrict:()=>t.restrict}),f.current=gt(f.current,{layoutItemId:i,onResizing:a,restrictEdges:C===e.LayoutType.FixedLayout,onResizeStart:H,onResizeEnd:W})}return f.current&&(t.restrict?f.current.draggable({modifiers:[$e]}):f.current.draggable({modifiers:[ke]})),t.resizeObserver&&t.resizeObserver.observe(m.current),()=>{f.current&&(f.current.unset(),f.current=null),t.resizeObserver&&t.resizeObserver.unobserve(m.current)}}),[t.restrict]);const D=e.React.useMemo((()=>({trigger:N,setting:j,inheritedOneByOneSetting:$,playId:k,depth:O,revert:B,onAnimationEnd:E})),[N,j,$,k,O,B,E]);function F(e){ut(!0),mt(!1),t.onDragStart&&t.onDragStart(e)}function V(o,i,n){e.lodash.defer((()=>{ut(!1)})),t.onDragEnd&&t.onDragEnd(o,i,n)}function H(e,o,i){ut(!1),mt(!0),t.onResizeStart&&t.onResizeStart(e,o,i)}function W(o,i,n,s,a,l){e.lodash.defer((()=>{mt(!1)})),t.onResizeEnd&&t.onResizeEnd(o,i,n,s,a,l)}function U(){var t;const{selected:o,draggable:i=!0}=h,n=null!==(t=p.isInlineEditing)&&void 0!==t&&t,s=e.utils.isTouchDevice();return i&&!g.viewOnly&&!n&&(!s||o)}const{layoutId:G,layoutItemId:_,top:Y,left:Z,right:X,bottom:Q,resizable:K,draggable:tt,isBlock:et,autoScroll:ot,layoutItem:it,isFunctionalWidget:nt,selected:lt,isInlineEditing:rt,hasEmbeddedLayout:pt,hasExtension:ht,isParentPlaying:yt,isParentRevert:vt,isParentEnableScroll:It,parentAnimationStyle:xt,parentPlayId:wt}=h;if(!it)return null;const{className:St,forbidContextMenu:Ct,onClick:Rt,onDoubleClick:Tt,children:At,id:Mt}=h,Pt=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o}(h,["className","forbidContextMenu","onClick","onDoubleClick","children","id"]),Lt=it.type===e.LayoutItemType.Widget,zt=it.type===e.LayoutItemType.Section,jt=!Ct&&!g.viewOnly&&(it.widgetId||it.sectionId)&&(!nt||zt),Nt=null===(s=null==I?void 0:I[e.AnimationTriggerType.ScrollIntoView])||void 0===s?void 0:s.option,$t=null!==(c=null===(u=null===(d=null===(r=it.setting)||void 0===r?void 0:r.style)||void 0===d?void 0:d.transform)||void 0===u?void 0:u.rotate)&&void 0!==c?c:0;return(0,e.jsx)(e.AnimationContext.Provider,{value:D},(0,e.jsx)(a.ViewportVisibilityContext.Provider,{value:!!J()||T},(0,e.jsx)(e.Animation,{id:Mt,type:A,trigger:M,configType:null==Nt?void 0:Nt.configType,direction:null==Nt?void 0:Nt.direction,playId:P,onAnimationEnd:z,parentAnimationStyle:xt,isParentPlaying:yt,isParentRevert:vt,isParentEnableScroll:It,parentPlayId:wt,revert:L,css:function(t){var o;const i=U(),n=null!==(o=p.isInlineEditing)&&void 0!==o&&o,s=e.polished.rgba(g.builderTheme.colors.palette.dark[300],.6),l=g.builderTheme.colors.palette.primary[600],r=nt&&!zt||lt?"solid":"dashed";return e.css`
      position: relative;
      overflow: visible;
      cursor: ${i?"move":"default"};
      touch-action: ${n||!lt?"auto":"none"};
      user-select: ${n?"auto":"none"};
      min-width: ${a.MIN_LAYOUT_ITEM_SIZE}px;
      min-height: ${a.MIN_LAYOUT_ITEM_SIZE}px;

      & > div.widget-context-menu {
        display: none;
      }

      &:hover > div.widget-context-menu {
        display: flex;
      }

      .${at} &.functional-widget {
        pointer-events: none;
      }
      .${at} &.functional-widget .exb-drop-area {
        pointer-events: all;
      }

      .${at} &,
      .${st} & {
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
            outline: ${et&&!lt?"none":`1px ${r} ${s}`};
            display: block;
            outline-color: ${!nt||zt?s:"transparent"};
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
    `}($t),ref:m,className:(0,e.classNames)("builder-layout-item exb-rnd",St,{selected:lt,"is-widget":Lt,"is-section":zt,"functional-widget":Lt&&nt,"no-drag-action":!U()}),onDoubleClick:function(o){const{layoutId:i,layoutItemId:n}=t,{supportInlineEditing:s,widgetId:a}=p;t.onDoubleClick&&t.onDoubleClick(o,{layoutId:i,layoutItemId:n}),g.viewOnly||(o.stopPropagation(),s&&(0,e.getAppStore)().dispatch(e.appActions.setWidgetIsInlineEditingState(a,!0)))},onClick:function(o){if(Math.abs(o.screenX-y)>a.CLICK_TOLRERANCE||Math.abs(o.screenY-v)>a.CLICK_TOLRERANCE)return void o.stopPropagation();const{viewOnly:i}=g,{isFunctionalWidget:n,layoutItem:s}=p;if(!i&&(!q()&&J()||n||s.type===e.LayoutItemType.Section)&&(o.stopPropagation(),!ft()&&!ct())){if(t.onClick){const{layoutId:e,layoutItemId:i}=h;t.onClick(o,{layoutId:e,layoutItemId:i})}!function(){const{layoutId:o,layoutItemId:i}=t;p.selected||(0,e.getAppStore)().dispatch(e.appActions.selectionChanged({layoutId:o,layoutItemId:i}))}()}},onMouseDown:function(t){y=t.screenX,v=t.screenY},"data-layoutitemid":_,"data-layoutid":G},Lt&&(0,e.jsx)(ce,Object.assign({rotate:$t},Pt)),zt&&(0,e.jsx)(ze,Object.assign({rotate:$t},Pt)),jt&&function(o){const{builderTheme:i}=g;return(0,e.jsx)(bt,{builderTheme:i,layoutId:t.layoutId,layoutItem:p.layoutItem,positionType:"center",size:a.CONTEXT_MENU_ITEM_SIZE,rotate:o,iconSize:a.CONTEXT_MENU_ICON_SIZE,className:"widget-context-menu",menuItems:t.contextMenuItems||Oe})}($t),!g.viewOnly&&lt&&(0,e.jsx)(oe,{layoutId:G,layoutItem:it,top:Y,left:Z,right:X,bottom:Q,resizable:K,draggable:tt,selected:lt,autoScroll:ot,forbidToolbar:t.forbidToolbar,toolItems:t.toolItems,showDefaultTools:t.showDefaultTools,isInlineEditing:rt,isFunctionalWidget:nt,hasEmbeddedLayout:pt,isSection:zt,isBlock:et,hasExtension:Lt&&ht,widgetJson:p.widgetJson,widgetState:p.widgetState,rotate:$t}),!g.viewOnly&&(0,e.jsx)("div",{className:"highlight-tip"},(0,e.jsx)("div",{className:"tip-content"})),t.children)))}var Ee=c(5124),De=c.n(Ee),Fe=c(3046),Ve=c.n(Fe),He=c(3626),We=c.n(He),Ue=c(9791),Ge=c.n(Ue),_e=c(100),Ye=c.n(_e),Ze=c(1528),Xe=c.n(Ze),qe=c(7319),Je=c.n(qe),Qe=c(3166),Ke=c.n(Qe),to=c(4201),eo=c.n(to),oo=c(4703),io=c.n(oo),no=c(7758),so=c.n(no),ao=c(1282),lo=c.n(ao),ro=c(2340),uo=c.n(ro),co=c(3262),po=c.n(co),ho=c(7123),go=c.n(ho),mo=c(7322),fo=c.n(mo),yo=c(6128);function vo(t){const e=(0,o.getAppConfigAction)(),i=e.appConfig,{layoutId:n,layoutItemId:s}=t,a=i.layouts[n];yo(a.order,"parent order must not be empty to alter order");const l=[].concat(a.order),r=l.indexOf(s);r===l.length-1||r<0||(l[r]=l[r+1],l[r+1]=t.layoutItemId,e.editLayoutOrder({layoutId:n},l).exec())}function Io(t){const e=(0,o.getAppConfigAction)(),i=e.appConfig,{layoutId:n,layoutItemId:s}=t,a=i.layouts[n];yo(a.order,"parent order must not be empty to alter order");const l=[].concat(a.order),r=l.indexOf(s);r===l.length-1||r<0||(l.splice(r,1),l.push(t.layoutItemId),e.editLayoutOrder({layoutId:n},l).exec())}function xo(t){const e=(0,o.getAppConfigAction)(),i=e.appConfig,{layoutId:n,layoutItemId:s}=t,a=i.layouts[n];yo(a.order,"parent order must not be empty to alter order");const l=[].concat(a.order),r=l.indexOf(s);r<=0||(l[r]=l[r-1],l[r-1]=t.layoutItemId,e.editLayoutOrder({layoutId:n},l).exec())}function bo(t){const e=(0,o.getAppConfigAction)(),i=e.appConfig,{layoutId:n,layoutItemId:s}=t,a=i.layouts[n];yo(a.order,"parent order must not be empty to alter order");const l=[].concat(a.order),r=l.indexOf(s);r<=0||(l.splice(r,1),l.splice(0,0,t.layoutItemId),e.editLayoutOrder({layoutId:n},l).exec())}function wo(t){const i=(0,o.getAppConfigAction)(),n=i.appConfig;let s=a.searchUtils.findLayoutItem(n,t).setting||(0,e.Immutable)({});s=s.set("lockLayout",!s.lockLayout),i.editLayoutItemSetting(t,s).exec()}function So(t,i){const n=(0,o.getAppConfigAction)(),s=n.appConfig,l=a.searchUtils.findLayoutItem(s,t),r=l.bbox;let d,u=l.setting||(0,e.Immutable)({});switch(0!==parseInt(r[i],10)&&n.editLayoutItemBBox(t,r.set(i,a.utils.isPercentage(r[i])?"0%":"0px")),u=u.setIn(["autoProps",i],!1),i){case"top":d="bottom";break;case"bottom":d="top";break;case"left":d="right";break;case"right":d="left"}u=u.setIn(["autoProps",d],!0),"left"===i||"right"===i?u=u.set("hCenter",!1):"top"!==i&&"bottom"!==i||(u=u.set("vCenter",!1)),n.editLayoutItemSetting(t,u).exec()}function Co(t){const i=(0,o.getAppConfigAction)(),n=i.appConfig,s=a.searchUtils.findLayoutItem(n,t),l=s.bbox;let r=s.setting||(0,e.Immutable)({});r=r.set("hCenter",!1).setIn(["autoProps","left"],!1).setIn(["autoProps","right"],!1).setIn(["autoProps","width"],a.LayoutItemSizeModes.Stretch),i.editLayoutItemBBox(t,l.set("left",a.utils.isPercentage(l.left)?"0%":"0px").set("right",a.utils.isPercentage(l.right)?"0%":"0px").set("width","100%")).editLayoutItemSetting(t,r).exec()}function Ro(t,i){var n,s;const l=(0,o.getAppConfigAction)(),r=l.appConfig,d=a.searchUtils.findLayoutItem(r,t);let u=d.setting||(0,e.Immutable)({}),c=d.bbox;if("h"===i)if((null===(n=u.autoProps)||void 0===n?void 0:n.width)===a.LayoutItemSizeModes.Stretch){if(a.utils.isPercentage(c.left)!==a.utils.isPercentage(c.right))return;{const t=a.utils.isPercentage(c.left)?"%":"px",e=parseFloat(c.left)+parseFloat(c.right);c=c.set("left",`${e/2}${t}`).set("right",`${e/2}${t}`)}}else c=c.set("left","50%"),u=u.set("hCenter",!0).setIn(["autoProps","left"],!1).setIn(["autoProps","right"],!0);else if((null===(s=u.autoProps)||void 0===s?void 0:s.height)===a.LayoutItemSizeModes.Stretch){if(a.utils.isPercentage(c.top)!==a.utils.isPercentage(c.bottom))return;{const t=a.utils.isPercentage(c.top)?"%":"px",e=parseFloat(c.top)+parseFloat(c.bottom);c=c.set("top",`${e/2}${t}`).set("bottom",`${e/2}${t}`)}}else c=c.set("top","50%"),u=u.set("vCenter",!0).setIn(["autoProps","top"],!1).setIn(["autoProps","bottom"],!0);l.editLayoutItemBBox(t,c).editLayoutItemSetting(t,u).exec()}function To(t){Ro(t,"v")}function Ao(t){Ro(t,"h")}function Mo(t){const i=(0,o.getAppConfigAction)(),n=i.appConfig,s=a.searchUtils.findLayoutItem(n,t),l=s.bbox;let r=s.setting||(0,e.Immutable)({});r=r.set("vCenter",!1).setIn(["autoProps","top"],!1).setIn(["autoProps","bottom"],!1).setIn(["autoProps","height"],a.LayoutItemSizeModes.Stretch),i.editLayoutItemBBox(t,l.set("top",a.utils.isPercentage(l.top)?"0%":"0px").set("bottom",a.utils.isPercentage(l.bottom)?"0%":"0px").set("height","100%")).editLayoutItemSetting(t,r).exec()}function Po(t){const i=(0,o.getAppConfigAction)(),n=i.appConfig,s=a.searchUtils.findLayoutItem(n,t),l=s.bbox;let r=s.setting||(0,e.Immutable)({});r=r.set("vCenter",!1).set("hCenter",!1).setIn(["autoProps","top"],!1).setIn(["autoProps","bottom"],!1).setIn(["autoProps","left"],!1).setIn(["autoProps","right"],!1).setIn(["autoProps","height"],a.LayoutItemSizeModes.Stretch).setIn(["autoProps","width"],a.LayoutItemSizeModes.Stretch),i.editLayoutItemBBox(t,l.set("top",a.utils.isPercentage(l.top)?"0%":"0px").set("bottom",a.utils.isPercentage(l.bottom)?"0%":"0px").set("left",a.utils.isPercentage(l.left)?"0%":"0px").set("right",a.utils.isPercentage(l.right)?"0%":"0px").set("width","100%").set("height","100%")).editLayoutItemSetting(t,r).exec()}const Lo=[[{icon:Ye(),visible:()=>X()===e.AppMode.Design&&!q()},{icon:Xe(),label:t=>t.formatMessage(a.utils.isRTL()?"snapToRight":"snapToLeft"),title:t=>t.formatMessage(a.utils.isRTL()?"snapToRight":"snapToLeft"),autoFlipIcon:!0,onClick:t=>{const{layoutItem:e,layoutId:o}=t;So({layoutId:o,layoutItemId:e.id},"left")}},{icon:io(),label:t=>t.formatMessage("alignHCenter"),title:t=>t.formatMessage("alignHCenter"),onClick:t=>{const{layoutItem:e,layoutId:o}=t;Ao({layoutId:o,layoutItemId:e.id})}},{icon:Je(),label:t=>t.formatMessage(a.utils.isRTL()?"snapToLeft":"snapToRight"),title:t=>t.formatMessage(a.utils.isRTL()?"snapToLeft":"snapToRight"),autoFlipIcon:!0,onClick:t=>{const{layoutItem:e,layoutId:o}=t;So({layoutId:o,layoutItemId:e.id},"right")}},{icon:Ke(),label:t=>t.formatMessage("snapToTop"),title:t=>t.formatMessage("snapToTop"),onClick:t=>{const{layoutItem:e,layoutId:o}=t;So({layoutId:o,layoutItemId:e.id},"top")}},{icon:so(),label:t=>t.formatMessage("alignVCenter"),title:t=>t.formatMessage("alignVCenter"),onClick:t=>{const{layoutItem:e,layoutId:o}=t;To({layoutId:o,layoutItemId:e.id})}},{icon:eo(),label:t=>t.formatMessage("snapToBottom"),title:t=>t.formatMessage("snapToBottom"),onClick:t=>{const{layoutItem:e,layoutId:o}=t;So({layoutId:o,layoutItemId:e.id},"bottom")}},{icon:We(),label:t=>t.formatMessage("fullWidth"),title:t=>t.formatMessage("fullWidth"),onClick:t=>{const{layoutItem:e,layoutId:o}=t;Co({layoutId:o,layoutItemId:e.id})}},{icon:Ve(),label:t=>t.formatMessage("fullHeight"),title:t=>t.formatMessage("fullHeight"),onClick:t=>{const{layoutItem:e,layoutId:o}=t;Mo({layoutId:o,layoutItemId:e.id})}},{icon:Ge(),label:t=>t.formatMessage("fullSize"),title:t=>t.formatMessage("fullSize"),onClick:t=>{const{layoutItem:e,layoutId:o}=t;Po({layoutId:o,layoutItemId:e.id})}}],[{icon:De(),visible:()=>X()===e.AppMode.Design&&!q()},{icon:lo(),label:t=>t.formatMessage("sendBackward"),title:t=>t.formatMessage("sendBackward"),onClick:t=>{const{layoutItem:e,layoutId:o}=t;xo({layoutId:o,layoutItemId:e.id})}},{icon:uo(),label:t=>t.formatMessage("bringForward"),title:t=>t.formatMessage("bringForward"),onClick:t=>{const{layoutItem:e,layoutId:o}=t;vo({layoutId:o,layoutItemId:e.id})}},{icon:po(),label:t=>t.formatMessage("sendToBack"),title:t=>t.formatMessage("sendToBack"),onClick:t=>{const{layoutItem:e,layoutId:o}=t;bo({layoutId:o,layoutItemId:e.id})}},{icon:go(),label:t=>t.formatMessage("bringToFront"),title:t=>t.formatMessage("bringToFront"),onClick:t=>{const{layoutItem:e,layoutId:o}=t;Io({layoutId:o,layoutItemId:e.id})}}],{icon:t=>{var e,o;const{layoutItem:i}=t;return null!==(o=null===(e=i.setting)||void 0===e?void 0:e.lockLayout)&&void 0!==o&&o?Kt():fo()},visible:()=>X()===e.AppMode.Design&&!q(),title:t=>{var e,o;const{layoutItem:i}=t,n=null!==(o=null===(e=i.setting)||void 0===e?void 0:e.lockLayout)&&void 0!==o&&o;return t.formatMessage(n?"unlockLayout":"lockLayout")},onClick:t=>{const{layoutItem:e,layoutId:o}=t;wo({layoutId:o,layoutItemId:e.id})}},{seperator:!0}];function zo(t){return/^-?\d*(\.\d+)?%$/.test(t)}function jo(t,e){return null==(null==t?void 0:t[e])?null:"string"==typeof t[e]?t[e]:function(t){const e=parseFloat(t);return!isNaN(e)&&isFinite(e)}(t[e])?`${Math.round(parseFloat(t[e]))}px`:null}function No(t,e){return parseFloat(`${t}`)*e/100}function $o(){var t,o;return null!==(o=null===(t=(0,e.getAppStore)().getState().appContext)||void 0===t?void 0:t.isRTL)&&void 0!==o&&o}function ko(t,e,o){const i=null==o?void 0:o[t],n="width"===t?"left":"top",s="width"===t?"right":"bottom";if(!i)return null!=e[t]?be.Custom:null!=e[n]&&null!=e[s]?be.Stretch:be.Auto;if(!0===i)return null!=e[n]&&null!=e[s]?be.Stretch:be.Auto;switch(i){case be.Auto:return be.Auto;case be.Stretch:return be.Stretch;default:return be.Custom}}function Oo(t,e,o,i=!1){const n={};n.left=t.left+o.dx,n.width=t.width+o.dw;const s=e.right-t.right;0===o.dw?n.right=s-o.dx:0===o.dx?n.right=s-o.dw:n.right=s,n.top=t.top+o.dy,n.height=t.height+o.dh;const a=e.bottom-t.bottom;return 0===o.dh?n.bottom=a-o.dy:0===o.dy?n.bottom=a-o.dh:n.bottom=a,i&&$o()?Eo(n):n}function Bo(t,e){var o,i,n,s,a;const l={};let r=null!==(o=null==e?void 0:e.autoProps)&&void 0!==o?o:{},d=t;const u=ko("height",t,r),c=ko("width",t,r);if(u===be.Stretch)l.top=d.top,l.bottom=d.bottom;else{const o=null!==(i=r.top)&&void 0!==i&&i,s=null!==(n=r.bottom)&&void 0!==n&&n;u===be.Custom&&(l.height=d.height),o!==s&&!s||null==t.top?l.bottom=d.bottom:l.top=d.top,e.vCenter&&"50%"===d.top&&(l.top="50%")}if(c===be.Stretch)l.left=d.left,l.right=d.right;else{const t=null!==(s=r.left)&&void 0!==s&&s,o=null!==(a=r.right)&&void 0!==a&&a;c===be.Custom&&(l.width=d.width),t===o?null!=d.left?l.left=d.left:l.right=d.right:t&&null!=d.right?l.right=d.right:l.left=d.left,e.hCenter&&"50%"===d.left&&(l.left="50%")}return l}function Eo(t){const o=(0,e.Immutable)(t),i=t.left;return o.set("left",t.right).set("right",i)}function Do(t){return"ratio"===t.heightMode}function Fo(t,o,i,n){var s,a;let l=t,r=(0,e.Immutable)(null!=o?o:{});return(null===(s=null==o?void 0:o.autoProps)||void 0===s?void 0:s.width)!==be.Stretch&&(r=n.left<n.right?$o()?r.setIn(["autoProps","right"],!1).setIn(["autoProps","left"],!0):r.setIn(["autoProps","left"],!1).setIn(["autoProps","right"],!0):$o()?r.setIn(["autoProps","left"],!1).setIn(["autoProps","right"],!0):r.setIn(["autoProps","right"],!1).setIn(["autoProps","left"],!0)),(null===(a=null==o?void 0:o.autoProps)||void 0===a?void 0:a.height)!==be.Stretch&&(r=n.top<n.bottom?r.setIn(["autoProps","top"],!1).setIn(["autoProps","bottom"],!0):r.setIn(["autoProps","top"],!0).setIn(["autoProps","bottom"],!1)),["left","right","top","bottom","width","height"].forEach((e=>{const o="left"===e||"right"===e||"width"===e?i.width:i.height;let s=zo(t[e]);$o()&&("left"===e?s=zo(t.right):"right"===e&&(s=zo(t.left))),l=null==t[e]||s?l.set(e,`${(100*n[e]/o).toFixed(1)}%`):l.set(e,`${Math.round(n[e])}px`)})),{bbox:l,setting:r}}class Vo extends e.React.PureComponent{constructor(){super(...arguments),this.state={},this.handleResizeEnd=(t,e,o,i,n,s)=>{const{layoutItem:l}=this.props,r="ratio"===this.itemSetting.heightMode?a.utils.parseAspectRatio(this.itemSetting.aspectRatio)*i:n;this.props.onResizeEnd(t,e,o,i,r,s,l,this.itemSetting)},this.handleResizing=(t,e,o,i,n,s,l)=>{const r="ratio"===this.itemSetting.heightMode?a.utils.parseAspectRatio(this.itemSetting.aspectRatio)*i:n;this.props.onResizing(t,e,o,i,r,s,l)},this.moveUp=()=>{this.props.onMoveByKey(this.props.layoutItemId,0,-1)},this.moveDown=()=>{this.props.onMoveByKey(this.props.layoutItemId,0,1)},this.moveLeft=()=>{this.props.onMoveByKey(this.props.layoutItemId,-1,0)},this.moveRight=()=>{this.props.onMoveByKey(this.props.layoutItemId,1,0)}}getKeyboardComponent(){return(0,e.jsx)(e.Keyboard,{bindings:{up:this.moveUp,down:this.moveDown,left:this.moveLeft,right:this.moveRight}})}getPositionStyle(){var t,o;const{layoutItem:i,offsetX:n,offsetY:s,dw:l,dh:r,initRect:d,containerRect:u}=this.props;let c=Bo(i.bbox,this.itemSetting);const p=i.setting;null!=d&&(c=Oo(d,u,{dw:l,dh:"ratio"===this.itemSetting.heightMode?a.utils.parseAspectRatio(this.itemSetting.aspectRatio)*l:r,dx:n,dy:s},!0),(null==p?void 0:p.hCenter)&&"50%"===(null===(t=i.bbox)||void 0===t?void 0:t.left)&&(c.left="50%"),(null==p?void 0:p.vCenter)&&"50%"===(null===(o=i.bbox)||void 0===o?void 0:o.top)&&(c.top="50%"));const h=Object.assign(Object.assign({},c),function(t,e,o=!1){const i={},n=e.hCenter&&"50%"===t.left,s=e.vCenter&&"50%"===t.top;return n&&s?(i.right="auto",i.bottom="auto",i.transform="translate(-50%, -50%)"):n?(i.right="auto",i.transform="translateX(-50%)"):s&&(i.bottom="auto",i.transform="translateY(-50%)"),!o&&Do(e)&&(i.height="auto"),i}(i.bbox,this.itemSetting,Boolean(d)));return 0===l&&0===r||(h.right="auto"),e.css`
      position: absolute;
      transform: ${h.transform};
      left: ${a.utils.getValueOfBBox(h,"left")};
      right: ${a.utils.getValueOfBBox(h,"right")};
      top: ${a.utils.getValueOfBBox(h,"top")};
      bottom: ${a.utils.getValueOfBBox(h,"bottom")};
      width: ${a.utils.getValueOfBBox(h,"width")};
      height: ${a.utils.getValueOfBBox(h,"height")};
    `}render(){const{layoutId:t,layoutItem:o,isLayoutLockChildren:i,draggable:n=!0,resizable:l=!0}=this.props;if(null==o||o.isPending)return null;this.itemSetting=e.lodash.assign({},s,o.setting);const r=this.itemSetting.lockLayout,d=a.utils.parseAspectRatio(this.itemSetting.aspectRatio),u=Do(this.itemSetting),c=a.utils.getLayoutItemSizeMode("width",o.bbox,this.itemSetting.autoProps),p=a.utils.getLayoutItemSizeMode("height",o.bbox,this.itemSetting.autoProps),h=a.utils.handleOnebyOneAnimation(this.props);return(0,e.jsx)(Be,Object.assign({className:"d-flex",css:this.getPositionStyle(),layoutId:t,layoutItemId:o.id,restrict:this.itemSetting.lockParent||i,draggable:n&&!r,resizable:l&&!r,showDefaultTools:this.props.showDefaultTools,toolItems:Lo,onResizeStart:this.props.onResizeStart,onResizing:this.handleResizing,onResizeEnd:this.handleResizeEnd,onClick:this.props.onClick,top:p!==a.LayoutItemSizeModes.Auto&&!u,bottom:p!==a.LayoutItemSizeModes.Auto&&!u,left:c!==a.LayoutItemSizeModes.Auto,right:c!==a.LayoutItemSizeModes.Auto,forceAspectRatio:u,aspectRatio:d,isInSection:this.props.isInSection},h),this.props.selected&&this.getKeyboardComponent())}}const Ho=e.ReactRedux.connect((function(t,e){var o;let i=!1;const n=null===(o=t.appRuntimeInfo)||void 0===o?void 0:o.selection;return null!=n&&(i=n.layoutId===e.layoutId&&n.layoutItemId===e.layoutItemId),{selected:i}}))(Vo);function Wo(t,e){var o,i,n,s;if(e.rect.top>t.rect.bottom||e.rect.bottom<t.rect.top)return!1;if(e.rect.right+5<t.rect.left&&null!=(null===(o=e.right)||void 0===o?void 0:o.value)&&null!=(null===(i=t.left)||void 0===i?void 0:i.value)){const o=e.right.usePercentage;if(o===t.left.usePercentage)return o||e.right.origin===t.left.origin}if(t.rect.right+5<e.rect.left&&null!=(null===(n=t.right)||void 0===n?void 0:n.value)&&null!=(null===(s=e.left)||void 0===s?void 0:s.value)){const o=e.left.usePercentage;if(o===t.right.usePercentage)return o||e.left.origin===t.right.origin}return!1}function Uo(t,e){var o,i,n,s;if(e.rect.left>t.rect.right||e.rect.right<t.rect.left)return!1;if(e.rect.bottom+5<t.rect.top&&null!=(null===(o=e.bottom)||void 0===o?void 0:o.value)&&null!=(null===(i=t.top)||void 0===i?void 0:i.value)){const o=e.bottom.usePercentage;if(o===t.top.usePercentage)return o||e.bottom.origin===t.top.origin}if(t.rect.bottom+5<e.rect.top&&null!=(null===(n=t.bottom)||void 0===n?void 0:n.value)&&null!=(null===(s=e.top)||void 0===s?void 0:s.value)){const o=e.top.usePercentage;if(o===t.bottom.usePercentage)return o||e.top.origin===t.bottom.origin}return!1}function Go(t,e){let o;return e.filter((e=>{var o,i;return(null===(o=e.right)||void 0===o?void 0:o.pixelValue)<(null===(i=t.left)||void 0===i?void 0:i.pixelValue)})).sort(((t,e)=>e.right.pixelValue-t.right.pixelValue)).some((e=>{if(Wo(t,e))return o={value:e},!0})),null!=o&&(o.next=Go(o.value,e)),o}function _o(t,e){let o;return e.filter((e=>{var o,i;return(null===(o=e.left)||void 0===o?void 0:o.pixelValue)>(null===(i=t.right)||void 0===i?void 0:i.pixelValue)})).sort(((t,e)=>t.left.pixelValue-e.left.pixelValue)).some((e=>{if(Wo(t,e))return o={value:e},!0})),null!=o&&(o.next=_o(o.value,e)),o}function Yo(t,e){let o;return e.filter((e=>{var o,i;return(null===(o=e.bottom)||void 0===o?void 0:o.pixelValue)<(null===(i=t.top)||void 0===i?void 0:i.pixelValue)})).sort(((t,e)=>e.bottom.pixelValue-t.bottom.pixelValue)).some((e=>{if(Uo(t,e))return o={value:e},!0})),null!=o&&(o.next=Yo(o.value,e)),o}function Zo(t,e){let o;return e.filter((e=>{var o,i;return(null===(o=e.top)||void 0===o?void 0:o.pixelValue)>(null===(i=t.bottom)||void 0===i?void 0:i.pixelValue)})).sort(((t,e)=>t.top.pixelValue-e.top.pixelValue)).some((e=>{if(Uo(t,e))return o={value:e},!0})),null!=o&&(o.next=Zo(o.value,e)),o}function Xo(t,o,i,n,s,l,r,d){if(null!=l&&null!=d){const u=Math.max(t.rect.top,o.rect.top),c=Math.min(t.rect.bottom,o.rect.bottom);l.setColor(e.polished.rgba(d.colors.palette.danger[800],.6));const p={left:s?o.rect.left-i:t.rect.right,top:u,width:i,height:c-u};if(l.drawRect(p),n){const n=(u+c)/2,p=t.right.usePercentage?e.utils.formatPercentageNumber(a.utils.toRatio(i,r)):e.utils.formatPixelNumber(`${i}px`);l.setColor(d.colors.palette.primary[600]),l.drawLine(s?o.rect.left-i:t.rect.right,n,s?o.rect.left:t.rect.right+i,n,!1,p)}}}function qo(t,o,i,n,s,l,r,d){if(null!=l&&null!=d){const u=Math.max(t.rect.left,o.rect.left),c=Math.min(t.rect.right,o.rect.right);l.setColor(e.polished.rgba(d.colors.palette.danger[800],.6));const p={left:u,top:s?o.rect.top-i:t.rect.bottom,width:c-u,height:i};if(l.drawRect(p),n){const n=(u+c)/2,p=t.bottom.usePercentage?e.utils.formatPercentageNumber(a.utils.toRatio(i,r)):e.utils.formatPixelNumber(`${i}px`);l.setColor(d.colors.palette.primary[600]),l.drawLine(n,s?o.rect.top-i:t.rect.bottom,n,s?o.rect.top:t.rect.bottom+i,!1,p)}}}function Jo(t,o,i,n,s,l,r){var d,u,c,p,h;let g=0,m=0;const f=0!==i.w||0!==i.h;if(!f||0!==i.w){let s=Go(t,o);s=function(t,e){const o={id:"",right:{value:e?"0%":"0px",pixelValue:0,usePercentage:e,origin:0,from:Number.NEGATIVE_INFINITY,to:Number.POSITIVE_INFINITY},rect:{left:-100,width:100,right:0,top:Number.NEGATIVE_INFINITY,bottom:Number.POSITIVE_INFINITY}};if(null==t)return{value:o};let i=t;for(;null!=i.next;)i=i.next;return i.next={value:o},t}(s,null==(null===(d=t.left)||void 0===d?void 0:d.value)||(null===(u=t.left)||void 0===u?void 0:u.usePercentage));let p=_o(t,o);p=function(t,e,o){const i={id:"",left:{value:e?"0%":"0px",pixelValue:o,usePercentage:e,origin:1,from:Number.NEGATIVE_INFINITY,to:Number.POSITIVE_INFINITY},rect:{left:o,width:100,right:o+100,top:Number.NEGATIVE_INFINITY,bottom:Number.POSITIVE_INFINITY}};if(null==t)return{value:i};let n=t;for(;null!=n.next;)n=n.next;return n.next={value:i},t}(p,null==(null===(c=t.right)||void 0===c?void 0:c.value)||t.right.usePercentage,n),g=function(t,e,o,i,n,s){if(e.gridline.rect.top===Number.NEGATIVE_INFINITY&&o.gridline.rect.top===Number.NEGATIVE_INFINITY||null==t.left||null==t.right)return 0;const a=t.left.pixelValue-e.gridline.right.pixelValue,l=o.gridline.left.pixelValue-t.right.pixelValue,r=e.fixed||o.fixed?5:10;if(Math.abs(l-a)<r){let r,d;return r=e.fixed||o.fixed?l-a:(l-a)/2,d=e.fixed?a:o.fixed?l:a+r,Xo(e.gridline,t,d,!1,!1,i,n,s),Xo(t,o.gridline,d,!1,!0,i,n,s),r}return 0}(t,{gridline:s.value,fixed:0!==i.w&&0===i.x},{gridline:p.value,fixed:0!==i.w&&0!==i.x},l,n,r),0!==g||0!==i.w&&0===i.x||(g=function(t,e,o,i,n){if(null==(null==e?void 0:e.next))return 0;const s=t.rect.left-e.value.rect.right;let a=e,l=-1;for(;null!=a.next;){const t=a.next,e=a.value.rect.left-t.value.rect.right;-1===l?Math.abs(e-s)<=5&&(l=e,Xo(t.value,a.value,l,!0,!1,o,i,n)):e===l&&Xo(t.value,a.value,l,!0,!1,o,i,n),a=t}if(l>0){const a=l-s;return Xo(e.value,t,l,!1,!1,o,i,n),a}return 0}(t,s,l,n,r)),0!==g||0!==i.w&&0!==i.x||(g=function(t,e,o,i,n){if(null==(null==e?void 0:e.next))return 0;const s=e.value.rect.left-t.rect.right;let a=e,l=-1;for(;null!=a.next;){const t=a.next,e=t.value.rect.left-a.value.rect.right;-1===l?Math.abs(e-s)<=5&&(l=e,Xo(a.value,t.value,l,!0,!0,o,i,n)):e===l&&Xo(a.value,t.value,l,!0,!0,o,i,n),a=t}if(l>0){const a=s-l;return Xo(t,e.value,l,!1,!0,o,i,n),a}return 0}(t,p,l,n,r)),function(t,o,i,n,s,l,r,d){var u;if(null!=l&&null!=d){l.setColor(d.colors.palette.primary[600]);let c=(null===(u=o.gridline)||void 0===u?void 0:u.rect.top)===Number.NEGATIVE_INFINITY;const p=o.gridline.rect;if(null!=p&&null!=t.left&&(!c||n&&!o.fixed)){const i=(Math.max(t.rect.top,p.top)+Math.min(t.rect.bottom,p.bottom))/2,n=t.left.usePercentage;let d=t.rect.left-p.right;o.fixed||(d+=s);const u=n?e.utils.formatPercentageNumber(a.utils.toRatio(d,r)):e.utils.formatPixelNumber(`${d}px`);l.drawLine(p.right,i,p.right+d,i,!1,u)}c=i.gridline.rect.top===Number.NEGATIVE_INFINITY;const h=i.gridline.rect;if(null!=h&&null!=t.right&&(!c||n&&!i.fixed)){const o=(Math.max(t.rect.top,h.top)+Math.min(t.rect.bottom,h.bottom))/2,n=t.right.usePercentage;let d=h.left-t.rect.right;i.fixed||(d-=s);const u=n?e.utils.formatPercentageNumber(a.utils.toRatio(d,r)):e.utils.formatPixelNumber(`${d}px`);l.drawLine(h.left,o,h.left-d,o,!1,u)}}}(t,{gridline:s.value,fixed:0!==i.w&&0===i.x},{gridline:p.value,fixed:0!==i.w&&0!==i.x},0!==i.w,g,l,n,r)}if(!f||0!==i.h){let n=Yo(t,o);n=function(t,e){const o={id:"",bottom:{value:e?"0%":"0px",pixelValue:0,usePercentage:e,origin:0,from:Number.NEGATIVE_INFINITY,to:Number.POSITIVE_INFINITY},rect:{top:-100,height:100,bottom:0,left:Number.NEGATIVE_INFINITY,right:Number.POSITIVE_INFINITY}};if(null==t)return{value:o};let i=t;for(;null!=i.next;)i=i.next;return i.next={value:o},t}(n,null==(null===(p=t.top)||void 0===p?void 0:p.value)||t.top.usePercentage);let d=Zo(t,o);d=function(t,e,o){const i={id:"",top:{value:e?"0%":"0px",pixelValue:o,usePercentage:e,origin:1,from:Number.NEGATIVE_INFINITY,to:Number.POSITIVE_INFINITY},rect:{top:o,height:100,bottom:o+100,left:Number.NEGATIVE_INFINITY,right:Number.POSITIVE_INFINITY}};if(null==t)return{value:i};let n=t;for(;null!=n.next;)n=n.next;return n.next={value:i},t}(d,null==(null===(h=t.bottom)||void 0===h?void 0:h.value)||t.bottom.usePercentage,s),m=function(t,e,o,i,n,s){if(e.gridline.rect.left===Number.NEGATIVE_INFINITY&&o.gridline.rect.left===Number.NEGATIVE_INFINITY||null==t.top||null==t.bottom)return 0;const a=t.top.pixelValue-e.gridline.bottom.pixelValue,l=o.gridline.top.pixelValue-t.bottom.pixelValue,r=e.fixed||o.fixed?5:10;if(Math.abs(l-a)<r){let r,d;return r=e.fixed||o.fixed?l-a:(l-a)/2,d=e.fixed?a:o.fixed?l:a+r,qo(e.gridline,t,d,!1,!1,i,n,s),qo(t,o.gridline,d,!1,!0,i,n,s),r}return 0}(t,{gridline:n.value,fixed:0!==i.h&&0===i.y},{gridline:d.value,fixed:0!==i.h&&0!==i.y},l,s,r),0!==m||0!==i.h&&0===i.y||(m=function(t,e,o,i,n){if(null==(null==e?void 0:e.next))return 0;const s=t.rect.top-e.value.rect.bottom;let a=e,l=-1;for(;null!=a.next;){const t=a.next,e=a.value.rect.top-t.value.rect.bottom;-1===l?Math.abs(e-s)<=5&&(l=e,qo(t.value,a.value,l,!0,!1,o,i,n)):e===l&&qo(t.value,a.value,l,!0,!1,o,i,n),a=t}if(l>0){const a=l-s;return qo(e.value,t,l,!1,!1,o,i,n),a}return 0}(t,n,l,s,r)),0!==m||0!==i.h&&0!==i.y||(m=function(t,e,o,i,n){if(null==(null==e?void 0:e.next))return 0;const s=e.value.rect.top-t.rect.bottom;let a=e,l=-1;for(;null!=a.next;){const t=a.next,e=t.value.rect.top-a.value.rect.bottom;-1===l?Math.abs(e-s)<=5&&(l=e,qo(a.value,t.value,l,!0,!0,o,i,n)):e===l&&qo(a.value,t.value,l,!0,!0,o,i,n),a=t}if(l>0){const a=s-l;return qo(t,e.value,l,!1,!0,o,i,n),a}return 0}(t,d,l,s,r)),function(t,o,i,n,s,l,r,d){if(null!=l&&null!=d){l.setColor(d.colors.palette.primary[600]);let u=o.gridline.rect.left===Number.NEGATIVE_INFINITY;const c=o.gridline.rect;if(null!=c&&null!=t.top&&(!u||n&&!o.fixed)){const i=(Math.max(t.rect.left,c.left)+Math.min(t.rect.right,c.right))/2,n=t.top.usePercentage;let d=t.rect.top-c.bottom;o.fixed||(d+=s);const u=n?e.utils.formatPercentageNumber(a.utils.toRatio(d,r)):e.utils.formatPixelNumber(`${d}px`);l.drawLine(i,c.bottom,i,c.bottom+d,!1,u)}u=i.gridline.rect.left===Number.NEGATIVE_INFINITY;const p=i.gridline.rect;if(null!=p&&null!=t.bottom&&(!u||n&&!i.fixed)){const o=(Math.max(t.rect.left,p.left)+Math.min(t.rect.right,p.right))/2,n=t.bottom.usePercentage;let d=p.top-t.rect.bottom;i.fixed||(d-=s);const u=n?e.utils.formatPercentageNumber(a.utils.toRatio(d,r)):e.utils.formatPixelNumber(`${d}px`);l.drawLine(o,p.top,o,p.top-d,!1,u)}}}(t,{gridline:null==n?void 0:n.value,fixed:0!==i.h&&0===i.y},{gridline:null==d?void 0:d.value,fixed:0!==i.y&&0!==i.y},0!==i.h,m,l,s,r)}return{dx:g,dy:m}}function Qo(t,e){return Math.abs(e.pixelValue-t.pixelValue)}function Ko(t,e,o){if(t.pixelValue+e===o.pixelValue){const e=o.usePercentage;if(e===t.usePercentage)return e||o.origin===t.origin}return!1}function ti(t,e){return e.filter((e=>function(t,e){if(Qo(e,t)<20){const o=e.usePercentage;if(o===t.usePercentage)return o||e.origin===t.origin}return!1}(t,e))).sort(((e,o)=>Qo(e,t)-Qo(o,t)))}var ei;function oi(t,e=!1){const o={};if(["left","right","width","top","bottom","height"].forEach((e=>{null!=(null==t?void 0:t[e])?o[e]=a.utils.isPercentage(t[e])?"%":"px":o[e]="%"})),e){const t=o.left;o.left=o.right,o.right=t}return o}function ii(t,e){return a.utils.isPercentage(t)?Math.round(a.utils.fromRatio(t,e)):Math.round(parseFloat(t))}function ni(t,e,o,i){var n;const s=[];Object.keys(null!==(n=t.content)&&void 0!==n?n:{}).forEach((n=>{if(n!==i){const i=t.content[n];if(!i.isPending){const t=function(t,e,o){var i,n,s,l,r,d,u,c,p;const h=t.bbox,g=oi(h,$o()),m=null!==(i=t.setting)&&void 0!==i?i:{},f=function(t,e,o){var i,n,s;const l={},r=null!==(i=t.bbox)&&void 0!==i?i:{},d=null!==(s=null===(n=t.setting)||void 0===n?void 0:n.autoProps)&&void 0!==s?s:{};return d.width===a.LayoutItemSizeModes.Stretch?(l.left=ii(r.left,e),l.right=e-ii(r.right,e),l.width=l.right-l.left):d.width===a.LayoutItemSizeModes.Auto?d.left?l.right=e-ii(r.right,e):l.left=ii(r.left,e):(l.width=ii(r.width,e),d.left?(l.right=e-ii(r.right,e),l.left=l.right-l.width):(l.left=ii(r.left,e),l.right=l.left+l.width)),d.height===a.LayoutItemSizeModes.Stretch?(l.top=ii(r.top,o),l.bottom=o-ii(r.bottom,o),l.height=l.bottom-l.top):d.height===a.LayoutItemSizeModes.Auto?d.top?l.bottom=o-ii(r.bottom,o):l.top=ii(r.top,o):(l.height=ii(r.height,o),d.top?(l.bottom=o-ii(r.bottom,o),l.top=l.bottom-l.height):(l.top=ii(r.top,o),l.bottom=l.top+l.height)),l}(t,e,o),y={id:t.id,rect:f},v=t=>a.utils.isPercentage(t)?100-parseFloat(t)+"%":t,I=t=>a.utils.isPercentage(t)?100-parseFloat(t)+"%":e-parseFloat(t)+"px",x={value:h.left,pixelValue:f.left,usePercentage:"%"===g.left,origin:0},b={value:h.top,pixelValue:f.top,usePercentage:"%"===g.top,origin:0},w={value:v(h.right),pixelValue:f.right,usePercentage:"%"===g.right,origin:1},S={value:v(h.bottom),pixelValue:f.bottom,usePercentage:"%"===g.bottom,origin:1};if((null===(n=m.autoProps)||void 0===n?void 0:n.width)===a.LayoutItemSizeModes.Stretch)y.left=x,y.right=w,g.left===g.right&&"%"===g.left&&(y.xm={value:(parseFloat(y.left.value)+parseFloat(y.right.value))/2+"%",pixelValue:(f.left+f.right)/2,usePercentage:"%"===g.left});else if((null===(s=m.autoProps)||void 0===s?void 0:s.width)===a.LayoutItemSizeModes.Auto)(null===(l=m.autoProps)||void 0===l?void 0:l.left)?y.right=w:y.left=x;else if(null===(r=m.autoProps)||void 0===r?void 0:r.left){if(y.right=w,g.right===g.width){const t=parseFloat(h.right),e=parseFloat(h.width),o="px"===g.right?t+e:100-(t+e),i="px"===g.right?t+e/2:100-(t+e/2);y.left={value:`${o}${g.right}`,pixelValue:f.left,usePercentage:"%"===g.right,origin:1},y.xm={value:`${i}${g.right}`,pixelValue:f.left+f.width/2,usePercentage:"%"===g.right,origin:1}}}else if(y.left=x,g.left===g.width){const t=parseFloat(h.left),e=parseFloat(h.width),o=t+e;y.right={value:`${o}${g.left}`,pixelValue:f.right,usePercentage:"%"===g.left,origin:0},y.xm={value:`${t+e/2}${g.left}`,pixelValue:f.left+f.width/2,usePercentage:"%"===g.left,origin:0}}if($o()){let t,o,i;y.rect.left=e-y.rect.right,y.rect.right=y.rect.left+y.rect.width,null!=y.left&&(o={value:I(y.left.value),pixelValue:y.rect.right,usePercentage:"%"===g.left,origin:0===y.left.origin?1:0}),null!=y.right&&(t={value:I(y.right.value),pixelValue:y.rect.left,usePercentage:"%"===g.right,origin:0===y.right.origin?1:0}),null!=y.xm&&(i={value:I(y.xm.value),pixelValue:y.rect.left+y.rect.width/2,usePercentage:y.xm.usePercentage,origin:0===y.xm.origin?1:0}),y.right=o,y.left=t,y.xm=i}if((null===(d=m.autoProps)||void 0===d?void 0:d.height)===a.LayoutItemSizeModes.Stretch)y.top=b,y.bottom=S,g.top===g.bottom&&"%"===g.top&&(y.ym={value:(parseFloat(y.top.value)+parseFloat(y.bottom.value))/2+"%",pixelValue:(f.top+f.bottom)/2,usePercentage:"%"===g.top});else if((null===(u=m.autoProps)||void 0===u?void 0:u.height)===a.LayoutItemSizeModes.Auto)(null===(c=m.autoProps)||void 0===c?void 0:c.top)?y.bottom=S:y.top=b;else if(null===(p=m.autoProps)||void 0===p?void 0:p.top){if(y.bottom=S,g.bottom===g.height){const t=parseFloat(h.bottom),e=parseFloat(h.height),o="px"===g.bottom?t+e:100-(t+e),i="px"===g.bottom?t+e/2:100-(t+e/2);y.top={value:`${o}${g.bottom}`,pixelValue:f.top,usePercentage:"%"===g.bottom,origin:1},y.ym={value:`${i}${g.bottom}`,pixelValue:f.top+f.height/2,usePercentage:"%"===g.bottom,origin:1}}}else if(y.top=b,g.top===g.height){const t=parseFloat(h.top),e=parseFloat(h.height),o=t+e;y.bottom={value:`${o}${g.top}`,pixelValue:f.bottom,usePercentage:"%"===g.top,origin:0},y.ym={value:`${t+e/2}${g.top}`,pixelValue:f.top+f.height/2,usePercentage:"%"===g.top,origin:0}}return y}(i,e,o);s.push(t)}}}));const l={left:0,right:e,width:e,top:0,bottom:o,height:o};return s.push({id:"",left:{value:"0px",pixelValue:0,usePercentage:!1,origin:0,from:0,to:o},right:{value:"0px",pixelValue:e,usePercentage:!1,origin:1,from:0,to:o},top:{value:"0px",pixelValue:0,origin:0,usePercentage:!1,from:0,to:e},bottom:{value:"0px",pixelValue:o,usePercentage:!1,origin:1,from:0,to:e},rect:l}),s.push({id:"",left:{value:"0%",pixelValue:0,usePercentage:!0,origin:0,from:0,to:o},xm:{value:"50%",pixelValue:Math.round(e/2),usePercentage:!0,origin:0,from:0,to:o},right:{value:"0%",pixelValue:e,usePercentage:!0,origin:1,from:0,to:o},top:{value:"0%",pixelValue:0,usePercentage:!0,origin:0,from:0,to:e},ym:{value:"50%",pixelValue:Math.round(o/2),usePercentage:!0,origin:0,from:0,to:e},bottom:{value:"0%",pixelValue:o,usePercentage:!0,origin:1,from:0,to:e},rect:l}),s}function si(t,e,o,i,n,s,l,r){var d,u;const c=null!==(d=null==t?void 0:t.setting)&&void 0!==d?d:{},p=null!==(u=null==t?void 0:t.bbox)&&void 0!==u?u:{},h=0!==i.w||0!==i.h;if(h&&(c.hCenter&&"50%"===p.left||c.vCenter&&"50%"===p.top))return i;let g=function(t,e){if(0!==e.w||0!==e.h){const o={x:e.x,y:e.y,w:e.w,h:e.h};return t.width+e.w<16&&(o.w=16-t.width,0!==e.x&&(o.x=-o.w)),t.height+e.h<16&&(o.h=16-t.height,0!==e.y&&(o.y=-o.h)),o}return e}(o,i);n&&(g=function(t,e){if(0===e.w&&0===e.h)return e;const o=t.height/t.width;let i=e.w,n=e.h,s=e.x,a=e.y;return Math.abs(i)*o>Math.abs(n)?n=Math.round(i*o):i=Math.round(n/o),0!==s&&(s=-i),0!==a&&(a=-n),{x:s,y:a,w:i,h:n}}(o,g));const m=function(t,e,o,i,n){var s,l,r,d,u,c,p;const{x:h,y:g,w:m,h:f}=null!=n?n:{x:0,y:0,w:0,h:0},y=null!==(s=null==t?void 0:t.setting)&&void 0!==s?s:{},v={left:Math.round(e.left+h),width:Math.round(e.width+m),right:0,top:Math.round(e.top+g),height:Math.round(e.height+f),bottom:0};v.right=v.left+v.width,v.bottom=v.top+v.height;const I={id:null==t?void 0:t.id,rect:v},x=function(t,e){const o=t.top,i=e.height-(t.top+t.height),n=t.left;return[e.width-(t.left+t.width)<n?1:0,i<o?1:0]}(v,{width:o,height:i}),b=oi(null==t?void 0:t.bbox,$o());if($o()){const t=b.left;b.left=b.right,b.right=t}return(null===(l=y.autoProps)||void 0===l?void 0:l.width)===a.LayoutItemSizeModes.Stretch?(I.left={value:`1${b.left}`,pixelValue:v.left,usePercentage:"%"===b.left,origin:x[0],from:v.top,to:v.bottom},I.right={value:`1${b.right}`,pixelValue:v.left+v.width,usePercentage:"%"===b.right,origin:x[1],from:v.top,to:v.bottom}):0===x[0]?(I.left={value:`1${b.left}`,pixelValue:v.left,usePercentage:"%"===b.left,origin:x[0],from:v.top,to:v.bottom},b.width===b.left&&(null===(r=y.autoProps)||void 0===r?void 0:r.width)!==a.LayoutItemSizeModes.Auto&&(I.xm={value:`1${b.left}`,pixelValue:v.left+v.width/2,usePercentage:"%"===b.left,origin:x[0],from:v.top,to:v.bottom},I.right={value:`1${b.left}`,pixelValue:v.left+v.width,usePercentage:"%"===b.left,origin:x[0],from:v.top,to:v.bottom})):(I.right={value:`1${b.right}`,pixelValue:v.left+v.width,usePercentage:"%"===b.right,origin:x[0],from:v.top,to:v.bottom},b.width===b.right&&(null===(d=y.autoProps)||void 0===d?void 0:d.width)!==a.LayoutItemSizeModes.Auto&&(I.xm={value:`1${b.right}`,pixelValue:v.left+v.width/2,usePercentage:"%"===b.right,origin:x[0],from:v.top,to:v.bottom},I.left={value:`1${b.right}`,pixelValue:v.left,usePercentage:"%"===b.right,origin:x[0],from:v.top,to:v.bottom})),(null===(u=y.autoProps)||void 0===u?void 0:u.height)===a.LayoutItemSizeModes.Stretch?(I.top={value:`1${b.top}`,pixelValue:v.top,usePercentage:"%"===b.top,origin:x[1],from:v.left,to:v.right},I.bottom={value:`1${b.bottom}`,pixelValue:v.top+v.height,usePercentage:"%"===b.bottom,origin:x[1],from:v.left,to:v.right}):0===x[1]?(I.top={value:`1${b.top}`,pixelValue:v.top,usePercentage:"%"===b.top,origin:x[1],from:v.left,to:v.right},b.height===b.top&&(null===(c=y.autoProps)||void 0===c?void 0:c.height)!==a.LayoutItemSizeModes.Auto&&(I.ym={value:`1${b.top}`,pixelValue:v.top+v.height/2,usePercentage:"%"===b.top,origin:x[1],from:v.left,to:v.right},I.bottom={value:`1${b.top}`,pixelValue:v.top+v.height,usePercentage:"%"===b.top,origin:x[1],from:v.left,to:v.right})):(I.bottom={value:`1${b.bottom}`,pixelValue:v.top+v.height,usePercentage:"%"===b.bottom,origin:x[1],from:v.left,to:v.right},b.height===b.bottom&&(null===(p=y.autoProps)||void 0===p?void 0:p.height)!==a.LayoutItemSizeModes.Auto&&(I.ym={value:`1${b.bottom}`,pixelValue:v.top+v.height/2,usePercentage:"%"===b.bottom,origin:x[1],from:v.left,to:v.right},I.top={value:`1${b.bottom}`,pixelValue:v.top,usePercentage:"%"===b.bottom,origin:x[1],from:v.left,to:v.right})),I}(t,o,e.width,e.height,g);let{dx:f,dy:y}=Jo(m,s,g,e.width,e.height,l,r);const v=function(t,e,o,i,n,s,a){let l=0,r=0;if(!i&&!n)return{dx:l,dy:r};let d=[],u=[];if(e.forEach((e=>{if(i){const i=[e.left,e.xm,e.right].filter((i=>{var n,s,a;if(null!=i)return i.from=null!==(n=e.rect.top)&&void 0!==n?n:e.rect.bottom,i.to=e.rect.top>=0&&e.rect.bottom>=0?e.rect.bottom:t.rect.top,0!==o.w?0===o.x?i.pixelValue>=(null===(s=t.right)||void 0===s?void 0:s.pixelValue):i.pixelValue<=(null===(a=t.left)||void 0===a?void 0:a.pixelValue):0===o.h}));d=d.concat(i)}if(n){const i=[e.top,e.ym,e.bottom].filter((i=>{var n,s,a;if(null!=i)return i.from=null!==(n=e.rect.left)&&void 0!==n?n:e.rect.right,i.to=e.rect.left>=0&&e.rect.right>=0?e.rect.right:t.rect.left,0!==o.h?0===o.y?i.pixelValue>=(null===(s=t.bottom)||void 0===s?void 0:s.pixelValue):i.pixelValue<=(null===(a=t.top)||void 0===a?void 0:a.pixelValue):0===o.w}));u=u.concat(i)}})),i){const e=[t.left,t.xm,t.right];e.some((t=>{if(null!=t){const o=ti(t,d);if((null==o?void 0:o.length)>0){null!=s&&null!=a&&o.forEach((t=>function(t,e,o){null!=e&&null!=o&&(e.setColor(o.colors.palette.danger[500]),e.drawLine(t.pixelValue,t.from,t.pixelValue,t.to,!0))}(t,s,a)));const i=o[0];if(Qo(i,t)<=5)return l=i.pixelValue-t.pixelValue,function(t,e,o,i,n){null!=i&&null!=n&&(i.setColor(n.colors.palette.danger[500]),t.forEach((t=>{if(null!=t){let n=t.from,s=t.to,a=!1;if(e.forEach((e=>{Ko(t,o,e)&&(n=Math.min(n,e.from),s=Math.max(s,e.to),a=!0)})),a){const e=t.pixelValue+o;i.drawLine(e,n,e,s)}}})))}(e,d,l,s,a),!0}}}))}if(n){const e=[t.top,t.ym,t.bottom];e.some((t=>{if(null!=t){const o=ti(t,u);if((null==o?void 0:o.length)>0){null!=s&&null!=a&&o.forEach((t=>function(t,e,o){null!=e&&null!=o&&(e.setColor(o.colors.palette.danger[500]),e.drawLine(t.from,t.pixelValue,t.to,t.pixelValue,!0))}(t,s,a)));const i=o[0];if(Qo(i,t)<=5)return r=i.pixelValue-t.pixelValue,function(t,e,o,i,n){null!=i&&null!=n&&(i.setColor(n.colors.palette.danger[500]),t.forEach((t=>{if(null!=t){let n=t.from,s=t.to,a=!1;if(e.forEach((e=>{Ko(t,o,e)&&(n=Math.min(n,e.from),s=Math.max(s,e.to),a=!0)})),a){const e=t.pixelValue+o;i.drawLine(n,e,s,e)}}})))}(e,u,r,s,a),!0}}}))}return{dx:l,dy:r}}(m,s,g,0===f&&(!h||0!==i.w),0===y&&(!h||0!==i.h),l,r);f=0!==f?f:v.dx,y=0!==y?y:v.dy;let I=g;return 0===f&&0===y||(I=function(t,e,o){let i,n,{x:s,y:a,w:l,h:r}=t;return i=0===l?ei.None:0===s?ei.Start:ei.End,n=0===r?ei.None:0===a?ei.Start:ei.End,0!==e&&(i===ei.None?s+=e:i===ei.End?(s+=e,l+=-e):l+=e),0!==o&&(n===ei.None?a+=o:n===ei.End?(a+=o,r+=-o):r+=o),{x:s,y:a,w:l,h:r}}(g,f,y)),I}!function(t){t[t.Start=0]="Start",t[t.End=1]="End",t[t.None=2]="None"}(ei||(ei={}));var ai=c(6262),li=c(4767),ri=c.n(li);const di=t=>{const{className:o}=t,n=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o}(t,["className"]),s=(0,e.classNames)("jimu-icon-component",o);return e.React.createElement(i.Icon,Object.assign({className:s,icon:ri()},n))},ui=e.css`
  pointer-events: all;
`;function ci(t){return e.css`
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
  `}function pi(t){const{pageContext:o,onPageTemplateSelected:n}=t,{builderTheme:s,formatMessage:a,isHeader:l,isFooter:r}=o,[d,u]=e.React.useState(!1),c=e.React.useRef(null),p=e.ReactRedux.useSelector((t=>{var o,i,n;const s=null!==(n=null===(i=null===(o=t.appConfig)||void 0===o?void 0:o.forBuilderAttributes)||void 0===i?void 0:i.lockLayout)&&void 0!==n&&n;return t.appRuntimeInfo.appMode===e.AppMode.Design&&!s})),h=()=>{u(!1)};let g;return g=o.isHeader?a("chooseHeaderTemplate"):o.isFooter?a("chooseFooterTemplate"):a("chooseTemplate",{type:o.isDialog?a("dialog").toLocaleLowerCase():a("page").toLocaleLowerCase()}),p?(0,e.jsx)("div",{className:"d-flex w-100 flex-column justify-content-center align-items-center",css:ci(s)},(0,e.jsx)("div",{className:"d-flex flex-column justify-content-center align-items-center"},(0,e.jsx)(i.Tooltip,{placement:"bottom",title:g},(0,e.jsx)("div",{className:"action-item",ref:c},(0,e.jsx)(i.Button,{icon:!0,onClick:t=>{t.stopPropagation(),u(!d)},css:ui,className:"rounded-circle"},(0,e.jsx)(di,{size:"m",color:s.colors.palette.dark[800]})))),(0,e.jsx)("div",{className:"action-seprator mt-3"}),(0,e.jsx)("h5",{className:"btn-text mt-2"},a("dropWidgetToAdd"))),d&&!o.isDialog&&(0,e.jsx)(ie.TemplateSelector,{templates:l?(0,ai.getHeaderTemplates)():r?(0,ai.getFooterTemplates)():(0,ai.getFullScreenPageTemplates)(),referenceElement:c.current,onItemSelect:n,onClose:h}),d&&o.isDialog&&(0,e.jsx)(ie.TemplateSelector,{templates:(0,ai.getWindowTemplates)(),referenceElement:c.current,onItemSelect:n,onClose:h})):null}class hi{constructor(t,e){this.canvas=t,this.ctx=t.getContext("2d"),this.ctx.font="1rem",this.theme=e}setSize(t,e,o=1){const i=Math.round(e*o),n=Math.round(t*o);o<1?(this.canvas.style.width=`${t}px`,this.canvas.style.height=`${e}px`,this.canvas.width=t,this.canvas.height=e,this.ctx.scale(1,1)):this.canvas.width===n&&this.canvas.height===i||(this.canvas.style.width=`${t}px`,this.canvas.style.height=`${e}px`,this.canvas.width=n,this.canvas.height=i,this.ctx.scale(o,o))}setColor(t){this.ctx.fillStyle=t,this.ctx.strokeStyle=t}drawRect(t){this.ctx.fillRect(t.left,t.top,t.width,t.height)}drawLine(t,e,o,i,n=!1,s){if(n?this.ctx.setLineDash([5,3]):this.ctx.setLineDash([]),this.ctx.beginPath(),t===o){let n=t<this.canvas.width/2?.5:-.5;n=Number.isInteger(t)?n:0,this.ctx.moveTo(t+n,e),this.ctx.lineTo(o+n,i)}if(e===i){let n=e<this.canvas.height/2?.5:-.5;n=Number.isInteger(e)?n:0,this.ctx.moveTo(t,e+n),this.ctx.lineTo(o,i+n)}if(this.ctx.stroke(),null!=s){const n=(t+o)/2,a=(e+i)/2;this.drawLabel(n,a,s,e===i)}}drawTailedLine(t,e,o,i,n=!1,s){if(n?this.ctx.setLineDash([5,3]):this.ctx.setLineDash([]),this.ctx.beginPath(),t===o){let n=t<this.canvas.width/2?.5:-.5;n=Number.isInteger(t)?n:0;const s=Math.min(e,i);let a=s<this.canvas.height/2?.5:-.5;a=Number.isInteger(s)?a:0;const l=Math.max(e,i);let r=l<this.canvas.height/2?.5:-.5;r=Number.isInteger(l)?r:0,this.ctx.moveTo(t+n,e),this.ctx.lineTo(o+n,i),this.ctx.moveTo(t-5,s+a),this.ctx.lineTo(t+5,s+a),this.ctx.moveTo(o-5,l+r),this.ctx.lineTo(o+5,l+r)}if(e===i){let n=e<this.canvas.height/2?.5:-.5;n=Number.isInteger(e)?n:0;const s=Math.min(t,o);let a=s<this.canvas.width/2?.5:-.5;a=Number.isInteger(s)?a:0;const l=Math.max(t,o);let r=l<this.canvas.width/2?.5:-.5;r=Number.isInteger(l)?r:0,this.ctx.moveTo(t,e+n),this.ctx.lineTo(o,i+n),this.ctx.moveTo(s+a,e-5),this.ctx.lineTo(s+a,e+5),this.ctx.moveTo(l+r,i-5),this.ctx.lineTo(l+r,i+5)}if(this.ctx.stroke(),null!=s){const n=(t+o)/2,a=(e+i)/2;this.drawLabel(n,a,s,e===i)}}drawLabel(t,e,o,i=!0){const n=this.ctx.measureText(o),s=n.width,l=n.actualBoundingBoxAscent+n.actualBoundingBoxDescent,r=s+8,d=l+8,u=a.utils.isRTL()?-1:1;this.ctx.save(),this.theme?this.ctx.fillStyle=this.theme.colors.palette.primary[500]:this.ctx.fillStyle="var(--primary-500)",i?(this.drawRoundRect(t-r/2,e-d-8,r,d),this.ctx.fillStyle="#FFFFFF",this.ctx.fillText(o,t-s*u/2,e-12)):(this.drawRoundRect(t+8,e-d/2,r,d),this.ctx.fillStyle="#FFFFFF",-1===u?this.ctx.fillText(o,t+s+12,e+l/2):this.ctx.fillText(o,t+12,e+l/2)),this.ctx.restore()}drawRoundRect(t,e,o,i,n=2){const s=n,a=n,l=n,r=n;this.ctx.beginPath(),this.ctx.moveTo(t+s,e),this.ctx.lineTo(t+o-a,e),this.ctx.quadraticCurveTo(t+o,e,t+o,e+a),this.ctx.lineTo(t+o,e+i-r),this.ctx.quadraticCurveTo(t+o,e+i,t+o-r,e+i),this.ctx.lineTo(t+l,e+i),this.ctx.quadraticCurveTo(t,e+i,t,e+i-l),this.ctx.lineTo(t,e+s),this.ctx.quadraticCurveTo(t,e,t+s,e),this.ctx.closePath(),this.ctx.fill()}clear(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)}}const gi=e.css`
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  background: transparent;
`,mi=e.css`
  ${gi};
  pointer-events: none;
`;class fi extends e.React.PureComponent{constructor(t){var i;if(super(t),this.handleMouseDown=t=>{this.mousedownX=t.screenX,this.mousedownY=t.screenY},this.updateDeviceRatio=()=>{this.canvasPane.setSize(this.ref.clientWidth,this.ref.clientHeight,window.devicePixelRatio)},this.handleMoveItemByKey=(t,i,n)=>{var s,l,r;const{layout:d}=this.props;let u,c,p=d.content[t].bbox,h=null!==(s=d.content[t].setting)&&void 0!==s?s:(0,e.Immutable)({});const g=null!==(l=null==h?void 0:h.hCenter)&&void 0!==l&&l||null!==(r=null==h?void 0:h.vCenter)&&void 0!==r&&r;if(g){const e=this.ref.querySelector(`div[data-layoutitemid="${t}"]`);u=e.clientWidth,c=e.clientHeight}if(0!==i){if(a.utils.isPercentage(p.left)){const t=parseFloat(p.left);p=(null==h?void 0:h.hCenter)?p.set("left",`${(50-100*u/2/this.ref.clientWidth+.1*i).toFixed(1)}%`):p.set("left",`${(t+.1*i).toFixed(1)}%`)}else{const t=parseFloat(p.left);p=(null==h?void 0:h.hCenter)?p.set("left",`${(this.ref.clientWidth-u)/2+i}px`):p.set("left",`${t+i}px`)}if(a.utils.isPercentage(p.right)){const t=parseFloat(p.right);p=(null==h?void 0:h.hCenter)?p.set("right",`${(50+100*u/2/this.ref.clientWidth-.1*i).toFixed(1)}%`):p.set("right",`${(t-.1*i).toFixed(1)}%`)}else{const t=parseFloat(p.right);p=(null==h?void 0:h.hCenter)?p.set("right",(this.ref.clientWidth+u)/2-i+"px"):p.set("right",t-i+"px")}(null==h?void 0:h.hCenter)&&(h=h.set("hCenter",!1))}if(0!==n){if(a.utils.isPercentage(p.top)){const t=parseFloat(p.top);p=(null==h?void 0:h.vCenter)?p.set("top",`${(50-100*c/2/this.ref.clientHeight+.1*n).toFixed(1)}%`):p.set("top",`${(t+.1*n).toFixed(1)}%`)}else{const t=parseFloat(p.top);p=(null==h?void 0:h.vCenter)?p.set("top",`${(this.ref.clientHeight-c)/2+n}px`):p.set("top",`${t+n}px`)}if(a.utils.isPercentage(p.bottom)){const t=parseFloat(p.bottom);p=(null==h?void 0:h.vCenter)?p.set("bottom",`${(50+100*c/2/this.ref.clientHeight-.1*n).toFixed(1)}%`):p.set("bottom",`${(t-.1*n).toFixed(1)}%`)}else{const t=parseFloat(p.bottom);p=(null==h?void 0:h.hCenter)?p.set("bottom",(this.ref.clientHeight+c)/2-n+"px"):p.set("bottom",t-n+"px")}(null==h?void 0:h.vCenter)&&(h=h.set("vCenter",!1))}const m=(0,o.getAppConfigAction)();g&&m.editLayoutItemSetting({layoutId:d.id,layoutItemId:t},h),m.editLayoutItemBBox({layoutId:d.id,layoutItemId:t},p).exec()},this.toggleShowWidgetList=t=>{t.stopPropagation(),this.setState({showWidgetList:!this.state.showWidgetList})},this.closeWidgetList=()=>{this.state.showWidgetList&&this.setState({showWidgetList:!1})},this.handlePageTemplateSelected=t=>{const i=(0,o.getAppConfigAction)().appConfig;this.setState({isLoadingTemplate:!0}),this.pageContext.isHeader?o.templateUtils.applyPageTemplateToHeader(i,t).then((({appConfig:t})=>{(0,o.getAppConfigAction)(t).exec(),e.lodash.defer((()=>{this.setState({isLoadingTemplate:!1})}))})).catch((t=>console.error(t))):this.pageContext.isFooter?o.templateUtils.applyPageTemplateToFooter(i,t).then((({appConfig:t})=>{(0,o.getAppConfigAction)(t).exec(),e.lodash.defer((()=>{this.setState({isLoadingTemplate:!1})}))})).catch((t=>console.error(t))):this.pageContext.isDialog?o.templateUtils.applyTemplateToDialog(i,this.pageContext.dialogId,t).then((({appConfig:t})=>{(0,o.getAppConfigAction)(t).exec(),e.lodash.defer((()=>{this.setState({isLoadingTemplate:!1})}))})).catch((t=>console.error(t))):o.templateUtils.applyPageTemplateToBody(i,this.pageContext.pageId,t).then((({appConfig:t})=>{(0,o.getAppConfigAction)(t).exec(),e.lodash.defer((()=>{this.setState({isLoadingTemplate:!1})}))})).catch((t=>console.error(t)))},null==this.props.layout)return;a.utils.autoBindHandlers(this,["handleResizeStart","handleResizing","handleResizeEnd","handleDragStart","handleDragEnd","handleDragOver","handleDragEnter","handleDragLeave","handleDrop","handleActivate","handleToggleDragoverEffect"]);const n=e.ExtensionManager.getInstance().getExtensions(`${e.extensionSpec.ExtensionPoints.LayoutTransformer}`);if((null==n?void 0:n.length)>0){const t=n.find((t=>t.layoutType===this.props.layout.type));this.layoutTransform=null===(i=t)||void 0===i?void 0:i.transformLayout}this.flipLeftRight=a.utils.isRTL(),this.state={offsetX:0,offsetY:0,dw:0,dh:0,isDragover:!1,showWidgetList:!1,isLoadingTemplate:!1}}handleActivate(t){if(!J())return;if(Math.abs(t.screenX-this.mousedownX)>a.CLICK_TOLRERANCE||Math.abs(t.screenY-this.mousedownY)>a.CLICK_TOLRERANCE)return void t.stopPropagation();const{isInSection:o,isInWidget:i}=this.props;this.pageContext.viewOnly||o||i||ft()||ct()||(t.stopPropagation(),(0,e.getAppStore)().dispatch(e.appActions.selectionChanged(null)))}componentDidMount(){var t,e,o;this.canvasPane=new hi(this.canvasRef,this.pageContext.builderTheme),this.updateDeviceRatio();const i=`(resolution: ${window.devicePixelRatio}dppx)`;this.mediaQueryList=null===(t=window.matchMedia)||void 0===t?void 0:t.call(window,i);const{name:n,version:s}=window.jimuUA.browser;"safari"===n.toLowerCase()&&parseInt(s)<14?null===(e=this.mediaQueryList)||void 0===e||e.addListener(this.updateDeviceRatio):null===(o=this.mediaQueryList)||void 0===o||o.addEventListener("change",this.updateDeviceRatio)}componentWillUnmount(){var t,e;const{name:o,version:i}=window.jimuUA.browser;"safari"===o.toLowerCase()&&parseInt(i)<14?null===(t=this.mediaQueryList)||void 0===t||t.removeListener(this.updateDeviceRatio):null===(e=this.mediaQueryList)||void 0===e||e.removeEventListener("change",this.updateDeviceRatio)}componentDidUpdate(){this.updateDeviceRatio()}isResizingItem(){return 0!==this.state.dh||0!==this.state.dw}handleResizeStart(t){const{layout:e}=this.props;this.rndingLayoutId=t;const o=this.ref.querySelector(`div.exb-rnd[data-layoutid="${e.id}"][data-layoutitemid="${t}"]`);this.domRect=this.ref.getBoundingClientRect(),this.bboxGridlines=ni(this.props.layout,this.domRect.width,this.domRect.height,t);const i=o.getBoundingClientRect(),n=this.getPositionUnit(t);this.resizingRect=Object.assign({units:n},a.utils.relativeClientRect(i,this.domRect))}getResizingDelta(t,e,o,i,n,s){return si(this.props.layout.content[t],this.domRect,this.resizingRect,{x:e,w:i,y:o,h:n},s,this.bboxGridlines,this.canvasPane,this.pageContext.builderTheme)}handleResizing(t,e,o,i,n,s,a){if(this.canvasPane.clear(),a>500)return void this.setState({offsetX:e,offsetY:o,dw:i,dh:n});const l=this.getResizingDelta(t,e,o,i,n,s);this.setState({offsetX:l.x,offsetY:l.y,dw:l.w,dh:l.h})}handleResizeEnd(t,i,n,s,a,l,r,d){var u,c;this.rndingLayoutId=null;const{layout:p}=this.props,h=this.getResizingDelta(t,i,n,s,a,l);this.canvasPane.clear();const g=Oo(this.resizingRect,this.domRect,{dx:h.x,dy:h.y,dw:h.w,dh:h.h}),m=(0,o.getAppConfigAction)(),f={layoutId:p.id,layoutItemId:t},{bbox:y,setting:v}=Fo((0,e.Immutable)(r.bbox),r.setting,this.domRect,g);let I=y;(null==d?void 0:d.hCenter)&&"50%"===(null===(u=r.bbox)||void 0===u?void 0:u.left)&&(I=I.set("left","50%")),(null==d?void 0:d.vCenter)&&"50%"===(null===(c=r.bbox)||void 0===c?void 0:c.top)&&(I=I.set("top","50%")),m.editLayoutItemBBox(f,this.flipLeftRight?Eo(I):I).editLayoutItemSetting(f,v).exec(),this.bboxGridlines=null,this.setState({offsetX:0,offsetY:0,dw:0,dh:0})}handleDragOver(t,o,i,n,s,l,r){var d,u,c;if(this.canvasPane.clear(),!this.state.isDragover||r>500)return;let p,h,g,m=0,f=0;(null===(d=t.layoutInfo)||void 0===d?void 0:d.layoutId)===this.props.layout.id?(p=t.layoutInfo.layoutItemId,g=this.getPositionUnit(p),h=this.props.layout.content[p]):g=oi({},this.flipLeftRight);const y=t.rotation>0||t.rotation<0,v=si(h,this.domRect,n,{x:0,y:0,w:0,h:0},!1,this.bboxGridlines,y?null:this.canvasPane,y?null:this.pageContext.builderTheme);if(null!=o&&(0!==v.x||0!==v.y)){const t=null!==(u=parseFloat(o.getAttribute("data-translatex")))&&void 0!==u?u:0,e=null!==(c=parseFloat(o.getAttribute("data-translatey")))&&void 0!==c?c:0;o.style.transform=`translate(${t+v.x}px, ${e+v.y}px)`}if(m=v.x,f=v.y,this.canvasPane.setColor(this.pageContext.builderTheme.colors.palette.primary[600]),function(t,o,i){const n=o.width-(t.left+t.width),s=o.height-(t.top+t.height),l="px"===t.units.left?e.utils.formatPixelNumber(`${Math.round(t.left)}px`):e.utils.formatPercentageNumber(a.utils.toRatio(t.left,o.width)),r="px"===t.units.right?e.utils.formatPixelNumber(`${Math.round(n)}px`):e.utils.formatPercentageNumber(a.utils.toRatio(n,o.width)),d="px"===t.units.top?e.utils.formatPixelNumber(`${Math.round(t.top)}px`):e.utils.formatPercentageNumber(a.utils.toRatio(t.top,o.height)),u="px"===t.units.bottom?e.utils.formatPixelNumber(`${Math.round(s)}px`):e.utils.formatPercentageNumber(a.utils.toRatio(s,o.height));t.left<=n?t.top<=s?(i.drawLine(0,t.top,t.left,t.top,!1,l),i.drawLine(t.left,0,t.left,t.top,!1,d)):(i.drawLine(0,t.top+t.height,t.left,t.top+t.height,!1,l),i.drawLine(t.left,t.top+t.height,t.left,o.height,!1,u)):t.top<=s?(i.drawLine(t.left+t.width,t.top,o.width,t.top,!1,r),i.drawLine(t.left+t.width,0,t.left+t.width,t.top,!1,d)):(i.drawLine(t.left+t.width,t.top+t.height,o.width,t.top+t.height,!1,r),i.drawLine(t.left+t.width,t.top+t.height,t.left+t.width,o.height,!1,u))}({width:n.width,height:n.height,left:n.left+m,top:n.top+f,units:g},this.domRect,this.canvasPane),null==t.layoutInfo||t.isPending){this.canvasPane.setColor(e.polished.rgba(this.pageContext.builderTheme.colors.palette.primary[700],.2));const t={left:n.left+m,top:n.top+f,width:n.width,height:n.height};this.canvasPane.drawRect(t)}}handleToggleDragoverEffect(t,e){var o;if(this.canvasPane.clear(),t){let t;this.domRect=this.ref.getBoundingClientRect(),(null===(o=e.layoutInfo)||void 0===o?void 0:o.layoutId)===this.props.layout.id&&(t=e.layoutInfo.layoutItemId),this.bboxGridlines=ni(this.props.layout,this.domRect.width,this.domRect.height,t)}this.setState({isDragover:t})}handleDragEnter(t){}handleDragLeave(){}handleDrop(t,e,o){let i;i=null==t.layoutInfo||t.layoutInfo.layoutId!==this.props.layout.id?oi({},this.flipLeftRight):this.getPositionUnit(t.layoutInfo.layoutItemId);const{snappedRect:n,delta:s}=this.calSnappedRect(t,e,Object.assign({units:i},o),t.layoutInfo);this.canvasPane.clear();const a={left:o.left+s.x,top:o.top+s.y,width:o.width,height:o.height,right:e.width-(o.left+s.x+o.width),bottom:e.height-(o.top+s.y+o.height)};this.addWidgetToLayout(t,e,a,n).catch((t=>console.error(t))),this.bboxGridlines=null}calSnappedRect(t,e,o,i){let n;(null==i?void 0:i.layoutId)===this.props.layout.id&&(n=this.props.layout.content[i.layoutItemId]);const s=si(n,this.domRect,o,{x:0,y:0,w:0,h:0},!1,this.bboxGridlines),l={left:o.left+s.x,top:o.top+s.y,width:o.width,height:o.height};return l.right=e.width-(+l.left+ +l.width),l.bottom=e.height-(+l.top+ +l.height),o.width>e.width&&(l.width=e.width,l.left=0),o.height>e.height&&(l.height=e.height,l.top=0),l.left=a.utils.toRatio(l.left,e.width),l.top=a.utils.toRatio(l.top,e.height),l.width=a.utils.toRatio(l.width,e.width),l.height=a.utils.toRatio(l.height,e.height),l.right=a.utils.toRatio(l.right,e.width),l.bottom=a.utils.toRatio(l.bottom,e.height),{snappedRect:l,delta:s}}addWidgetToLayout(t,i,n,s,l){var r,d,u,c,p;return d=this,u=void 0,p=function*(){const{layout:d,browserSizeMode:u}=this.props;let c=(0,o.getAppConfigAction)(l);const p=yield R(c.appConfig,t,{layoutId:d.id},i,s),{layoutInfo:h,updatedAppConfig:g}=p;c=(0,o.getAppConfigAction)(g),null!=t.layoutInfo&&t.layoutInfo.layoutId===d.id&&c.editLayoutItemSetting(h,{vCenter:!1,hCenter:!1});const m=c.appConfig.layouts[h.layoutId].content[h.layoutItemId],f=(0,e.Immutable)(null!==(r=m.setting)&&void 0!==r?r:{}),y=Fo(m.bbox,f,this.domRect,n);let v=y.bbox;const I=y.setting;if(null==t.layoutInfo&&(this.pageContext.isHeader||this.pageContext.isFooter)){const t=c.appConfig,e=this.pageContext.isHeader?parseInt(`${t.header.height[u]}`):parseInt(`${t.footer.height[u]}`);v=v.set("height",a.utils.toRatio(Math.min(n.height,e),e))}c.editLayoutItemBBox(h,this.flipLeftRight?Eo(v):v).editLayoutItemSetting(h,I),(0,e.getAppStore)().dispatch(e.appActions.layoutChanged(c.appConfig,h))},new((c=void 0)||(c=Promise))((function(t,e){function o(t){try{n(p.next(t))}catch(t){e(t)}}function i(t){try{n(p.throw(t))}catch(t){e(t)}}function n(e){var n;e.done?t(e.value):(n=e.value,n instanceof c?n:new c((function(t){t(n)}))).then(o,i)}n((p=p.apply(d,u||[])).next())}))}getPositionUnit(t){return oi(this.props.layout.content[t].bbox,this.flipLeftRight)}createItem(t,o,i){const{itemResizable:n,itemDraggable:s,itemSelectable:a,showDefaultTools:l}=this.props,{offsetX:r,offsetY:d,dw:u,dh:c}=this.state,p=o===this.rndingLayoutId?r:0,h=o===this.rndingLayoutId?d:0,g=o===this.rndingLayoutId?u:0,m=o===this.rndingLayoutId?c:0,f=o===this.rndingLayoutId?this.resizingRect:void 0,y=o===this.rndingLayoutId?this.domRect:void 0,v=t.content[o];return(0,e.jsx)(Ho,{key:`${t.id}_${o}`,index:i,layoutItem:v,offsetX:p,offsetY:h,dw:g,dh:m,initRect:f,containerRect:y,layoutId:t.id,layoutItemId:o,draggable:s,resizable:n,selectable:a,showDefaultTools:l,isLayoutLockChildren:this.layoutSetting.lockChildren,onResizeStart:this.handleResizeStart,onResizing:this.handleResizing,onResizeEnd:this.handleResizeEnd,onMoveByKey:this.handleMoveItemByKey,isInSection:this.props.isInSection})}render(){const{layout:t,className:o,style:s,layouts:l,isPageItem:r,mainSizeMode:d,browserSizeMode:u}=this.props;return null==t?null:(0,e.jsx)(a.PageContext.Consumer,null,(a=>{var c,p;this.pageContext=a;let h=t;const g=l[u]!==t.id;g&&null!=this.layoutTransform&&(h=this.layoutTransform(t,d,u)),this.layoutSetting=e.lodash.assign({},n,g?{}:t.setting);const m=null!==(c=h.order)&&void 0!==c?c:[],f=(0,e.classNames)("layout fixed-layout",o,{[lt]:null===(p=t.setting)||void 0===p?void 0:p.lockDescendants}),y=0!==this.state.dh||0!==this.state.dw,v=Object.assign(Object.assign(Object.assign({height:"auto",position:"relative"},s),i.styleUtils.toCSSStyle(this.layoutSetting.style)),{width:"100%",overflow:"hidden"}),I={display:this.state.isDragover||y?"block":"none",zIndex:m.length+1},x=!this.state.isLoadingTemplate&&0===m.length&&!a.viewOnly&&t.id===a.rootLayoutId;return(0,e.jsx)("div",{className:f,ref:t=>this.ref=t,onClick:this.handleActivate,onMouseDown:this.handleMouseDown,style:v,"data-layoutid":h.id},(0,e.jsx)(e.OneByOneAnimation,{"data-layoutid":h.id,className:"trail-container",css:e.css`
                  position: absolute;
                  left: 0;
                  right: 0;
                  top: 0;
                  bottom: 0;
                `},(0,e.jsx)(ae,{css:gi,layouts:this.props.layouts,highlightDragover:!r,onDragEnter:this.handleDragEnter,onDragLeave:this.handleDragLeave,onDragOver:this.handleDragOver,onDrop:this.handleDrop,onToggleDragoverEffect:this.handleToggleDragoverEffect,isRepeat:this.props.isRepeat}),m.map(((t,e)=>this.createItem(h,t,e)))),x&&(0,e.jsx)(pi,{pageContext:this.pageContext,onPageTemplateSelected:this.handlePageTemplateSelected}),this.state.isLoadingTemplate&&(0,e.jsx)(i.Loading,{type:i.LoadingType.Primary}),(0,e.jsx)("canvas",{css:mi,style:I,ref:t=>this.canvasRef=t}))}))}}fi.displayName="FixedLayout";const yi=e.ReactRedux.connect(a.utils.mapStateToLayoutProps)(fi),vi={min:16,space:10};class Ii extends e.React.PureComponent{constructor(){super(...arguments),this.state={isResizing:!1,dw:0,dh:0},this.onResizeStart=(t,e,o)=>{this.initWidth=e,this.initHeight=o,this.props.onResizeStart(t),this.setState({isResizing:!0})},this.onResizing=(t,e,o,i,n)=>{this.props.onResizing(t,e,o,i,n),this.setState({dw:i,dh:n,isResizing:!0})},this.onResizeEnd=(t,e,o,i,n,s)=>{const{layoutItem:a}=this.props;this.props.onResizeEnd(t,e,o,i,n,a),this.setState({isResizing:!1,dw:0,dh:0})}}isStretchInCrossAxis(){var t,e;const{layoutItem:o}=this.props;return(null===(e=null===(t=o.setting)||void 0===t?void 0:t.autoProps)||void 0===e?void 0:e.width)!==be.Custom}calHeight(t,e){var o,i;return(null===(o=t.autoProps)||void 0===o?void 0:o.height)===be.Auto||"ratio"===t.heightMode?"ratio"===t.heightMode?{height:"auto",flex:"0 0 auto"}:{height:"auto"}:(null===(i=t.autoProps)||void 0===i?void 0:i.height)===be.Stretch||"fit"===t.heightMode?{flex:"1 1 auto"}:{height:e.height,flexShrink:0}}getStyle(t,o){var i,n;const{index:s,layoutItem:a,space:l}=this.props,{dw:r,dh:d,isResizing:u}=this.state,c=a.bbox||{},p=this.calHeight(t,c);return p.width=o?"auto":c.width,u&&(r||d)&&(p.height=this.initHeight+d,p.width=this.initWidth+r),e.css`
      margin-top: ${s>0?`${l}px`:"unset"};
      align-self: ${o?"stretch":null!==(n=null===(i=t.style)||void 0===i?void 0:i.alignSelf)&&void 0!==n?n:"auto"};
      width: ${jo(p,"width")};
      height: ${jo(p,"height")};
      flex: ${p.flex};
      flex-shrink: ${p.flexShrink};
    `}render(){var t,o;const{layoutId:i,layoutItem:n,draggable:s,resizable:a,selectable:l,showDefaultTools:r}=this.props;if(!n||n.isPending)return null;const d=n.setting||{},u=(0,e.classNames)("flexbox-layout-item d-flex"),c=this.isStretchInCrossAxis(),p=null!==(o=null===(t=d.autoProps)||void 0===t?void 0:t.height)&&void 0!==o?o:be.Custom,h="ratio"===d.heightMode,g=function(t){let e=100,o=100;if("number"==typeof t)e=100,o=Math.round(100*t);else if("string"==typeof t){const i=t.split(":");e=parseInt(i[0],10),o=parseInt(i[1],10)}return o/e}(d.aspectRatio),m=function(t){if(!t.animationStyle)return{};const{isPlaying:e,revert:o,enableScroll:i,animationStyle:n,playId:s}=t;return{isParentPlaying:e,isParentRevert:o,isParentEnableScroll:i,parentAnimationStyle:n,parentPlayId:s}}(this.props);return(0,e.jsx)(Be,Object.assign({css:this.getStyle(d,c),layoutId:i,layoutItemId:n.id,onResizeStart:this.onResizeStart,onResizing:this.onResizing,onResizeEnd:this.onResizeEnd,left:!c,right:!c,top:!1,bottom:p===be.Custom&&!h,draggable:s,resizable:a,selectable:l,showDefaultTools:r,onClick:this.props.onClick,className:u,forceAspectRatio:h,aspectRatio:g},m))}}const xi=e.css`
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  background: transparent;
`,bi=e.css`
  ${xi};
  z-index: 20;
  pointer-events: none;
`;class wi extends e.React.PureComponent{constructor(t){super(t),this.state={isDragover:!1},this.handleItemResizing=()=>{},a.utils.autoBindHandlers(this,["handleItemResizeStart","handleItemResizing","handleItemResizeEnd","handleDrop","handleDragOver","handleDragEnter","handleDragLeave","handleToggleDragoverEffect"])}componentDidMount(){this.canvasPane=new hi(this.canvasRef),this.canvasPane.setSize(this.ref.clientWidth,this.ref.clientHeight)}componentDidUpdate(){this.canvasPane.setSize(this.ref.clientWidth,this.ref.clientHeight)}handleItemResizeStart(t){const{layout:e}=this.props;this.domRect=this.ref.getBoundingClientRect();const o=this.ref.querySelector(`div.exb-rnd[data-layoutid="${e.id}"][data-layoutitemid="${t}"]`).getBoundingClientRect();this.resizingRect=a.utils.relativeClientRect(o,this.domRect)}handleItemResizeEnd(t,e,i,n,s,l){const{layout:r}=this.props,d=r.content[t].bbox;let u;u=a.utils.isPercentage(d.width)?`${(100*(this.resizingRect.width+n)/this.domRect.width).toFixed(4)}%`:`${Math.round(this.resizingRect.width+n)}px`;const c={width:u,height:Math.round(this.resizingRect.height+s)};this.childRects=[],this.domRect=null,(0,o.getAppConfigAction)().editLayoutItemBBox({layoutId:this.props.layout.id,layoutItemId:t},c).exec()}handleDragOver(t,o,i,n){var s;let a=n;if(this.canvasPane.clear(),(null===(s=this.childRects)||void 0===s?void 0:s.length)>0){const{insertY:t,refId:e}=function(t,e,o){const i=e.top+e.height/2;let n,s,a=!1;if(o.some(((t,e)=>{if(t.top+t.height/2>i){if(0===e)n=t.top/2;else{const i=o[e-1];n=(t.top+i.top+i.height)/2}a=!0,s=t.id}return a})),!a){const e=o[o.length-1];n=(e.top+e.height+t.height)/2}return{refId:s,insertY:n}}(i,a,this.childRects);this.referenceId=e,a={top:t-5+this.ref.scrollTop,width:i.width-10,left:5,height:10}}else a={top:i.height/2-5,width:i.width-10,left:5,height:10};this.canvasPane.setColor(e.polished.rgba(this.builderTheme.colors.palette.primary[700],1)),this.canvasPane.drawRect(a)}handleToggleDragoverEffect(t){t&&(this.referenceId=null,this.collectBounds(null)),this.setState({isDragover:t})}handleDragEnter(){}handleDragLeave(){}handleDrop(t,i,n){this.canvasPane.clear();const{layout:s}=this.props,a={layoutId:s.id};let l=0;null!=this.referenceId?l=s.order.indexOf(this.referenceId):null!=s.order&&(l=s.order.length),R((0,o.getAppConfigAction)().appConfig,t,a,i,n,l).then((t=>{const{layoutInfo:o,updatedAppConfig:i}=t,{layoutId:n,layoutItemId:s}=o;let a=i.layouts[n].content[s].bbox;a=a.without("left").without("top").without("right").without("bottom");const l=i.setIn(["layouts",n,"content",s,"bbox"],a);(0,e.getAppStore)().dispatch(e.appActions.layoutChanged(l,o))})).finally(null),this.referenceId=null,this.childRects=[]}collectBounds(t){const{layout:e}=this.props;this.childRects=[],this.domRect=this.ref.getBoundingClientRect();const o=this.ref.parentNode.querySelectorAll(`div[data-layoutid="${e.id}"] > .trail-container > div.exb-rnd`);return(null==o?void 0:o.length)>0&&o.forEach((o=>{const i=o.getAttribute("data-layoutitemid");if(t!==i&&e.order.includes(i)){const t=a.utils.relativeClientRect(o.getBoundingClientRect(),this.domRect);t.id=i,this.childRects.push(t)}})),this.childRects.sort(((t,e)=>t.top-e.top))}createItem(t,o,i){const{layout:n,itemDraggable:s,itemResizable:a,itemSelectable:l,showDefaultTools:r}=this.props;return(0,e.jsx)(Ii,{key:t,index:o,space:i.space,layoutId:n.id,layoutItemId:t,layoutItem:n.content[t],draggable:s,resizable:a,selectable:l,showDefaultTools:r,onResizeStart:this.handleItemResizeStart,onResizing:this.handleItemResizing,onResizeEnd:this.handleItemResizeEnd})}isEmpty(){var t;const{layout:e}=this.props,o=null!==(t=e.order)&&void 0!==t?t:[];return!(o.length>0&&o.some((t=>!e.content[t].isPending)))}render(){var t;const{layout:o,className:n}=this.props,s=null!==(t=o.order)&&void 0!==t?t:[],l=Object.assign({},vi,o.setting),r=this.isEmpty();return(0,e.jsx)(a.PageContext.Consumer,null,(t=>{this.builderTheme=t.builderTheme,this.theme=t.theme;const a={position:"relative",minWidth:l.min},d=(0,e.classNames)("layout column-layout",n),u={display:this.state.isDragover?"block":"none"};return(0,e.jsx)("div",{className:d,ref:t=>this.ref=t,style:a,"data-layoutid":o.id},(0,e.jsx)(e.OneByOneAnimation,{enableScroll:!0,className:"trail-container d-flex flex-column w-100",css:e.css`
                  position: ${r?"absolute":null};
                  height: 100%;
                  overflow-x: hidden;
                  padding: ${i.styleUtils.toCSSPadding(l.padding)};
                  justify-content: ${l.justifyContent};
                  overflow-y: ${!1===l.overflowY?"hidden !important":null}
                `},(0,e.jsx)(ae,{css:xi,layouts:this.props.layouts,highlightDragover:!0,onDragEnter:this.handleDragEnter,onDragLeave:this.handleDragLeave,onDragOver:this.handleDragOver,onDrop:this.handleDrop,onToggleDragoverEffect:this.handleToggleDragoverEffect}),s.map(((t,e)=>this.createItem(t,e,l)))),r&&this.props.children,(0,e.jsx)("canvas",{css:bi,style:u,ref:t=>this.canvasRef=t}))}))}}const Si=e.ReactRedux.connect(a.utils.mapStateToLayoutProps)(wi),Ci={space:10,style:{padding:{number:[10,10,10,10],unit:i.UnitTypes.PIXEL}}},Ri={heightMode:"fixed",aspectRatio:1,offsetX:0,offsetY:0,style:{alignSelf:"flex-start"}},Ti=12,Ai=e.css`
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
`;function Mi(t){return(0,e.Immutable)(t).set("left",Ti-parseInt(t.left,10)-parseInt(t.width,10))}const Pi=e.css`
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
`,Li=e.css`
  ${Pi};
  top: 0;
`,zi=e.css`
  ${Pi};
  bottom: 0;
`;class ji extends e.React.PureComponent{constructor(t){super(t),this.state={isResizing:!1,dh:0},this.handleResizeStart=(t,e,o)=>{this.initWidth=e,this.initHeight=o,this.props.onResizeStart(t),this.setState({isResizing:!0})},this.handleResizing=(t,e,o,i,n)=>{this.props.onResizing(t,e,o,i,n),this.setState({dh:n,isResizing:!0})},this.handleResizeEnd=(t,e,o,i,n,s)=>{const{layoutItem:a}=this.props;this.props.onResizeEnd(t,e,o,i,n,a),this.setState({isResizing:!1,dh:0})},this.handleDropAtTop=(t,e,o)=>{this.dropAtBoundary(t,e,o,"top")},this.handleDropAtBottom=(t,e,o)=>{this.dropAtBoundary(t,e,o,"bottom")},this.dropAtBoundary=(t,e,i,n)=>{let s=(0,o.getAppConfigAction)();A(s.appConfig,t,e,i,{layoutId:this.props.layoutId,layoutItemId:this.props.layoutItemId},n).then((({updatedAppConfig:t})=>{s=(0,o.getAppConfigAction)(t),s.exec()})).finally(null)},this.pasteAtBoundary=(t,e,i,n)=>{let s=(0,o.getAppConfigAction)();const{layoutId:a,layoutItemId:l}=t.layoutInfo,r={layoutInfo:s.duplicateLayoutItem(a,a,l,!0)};A(s.appConfig,r,e,i,{layoutId:this.props.layoutId,layoutItemId:this.props.layoutItemId},n).then((({updatedAppConfig:t})=>{s=(0,o.getAppConfigAction)(t),s.exec()})).finally(null)},this.fakeTopLayouts=(0,e.Immutable)({[e.BrowserSizeMode.Large]:`${this.props.layoutId}_${this.props.layoutItemId}_tlarge`,[e.BrowserSizeMode.Medium]:`${this.props.layoutId}_${this.props.layoutItemId}_tmedium`,[e.BrowserSizeMode.Small]:`${this.props.layoutId}_${this.props.layoutItemId}_tsmall`}),this.fakeBottomLayouts=(0,e.Immutable)({[e.BrowserSizeMode.Large]:`${this.props.layoutId}_${this.props.layoutItemId}_blarge`,[e.BrowserSizeMode.Medium]:`${this.props.layoutId}_${this.props.layoutItemId}_bmedium`,[e.BrowserSizeMode.Small]:`${this.props.layoutId}_${this.props.layoutItemId}_bsmall`})}isFunctionalWidget(){var t,o,i;const{layoutItem:n}=this.props;if(n.type===e.LayoutItemType.Widget){let s=!1;const a=null===(o=null===(t=(0,e.getAppStore)().getState().appConfig)||void 0===t?void 0:t.widgets)||void 0===o?void 0:o[n.widgetId];return null!=(null===(i=null==a?void 0:a.manifest)||void 0===i?void 0:i.properties)&&(s=a.manifest.widgetType===e.WidgetType.Layout||a.manifest.properties.hasEmbeddedLayout),!s}return!1}getStyle(t){var o,i,n,s;const{gutter:l,layoutItem:r,isMultiRow:d}=this.props,{dh:u,isResizing:c}=this.state,p=function(t,e,o){var i,n,s,a,l,r,d,u,c,p,h,g,m,f;return o?{height:(null===(i=t.autoProps)||void 0===i?void 0:i.height)===be.Auto?"auto":e.height,alignSelf:null!==(s=null===(n=t.style)||void 0===n?void 0:n.alignSelf)&&void 0!==s?s:"flex-start"}:"ratio"===t.heightMode?{alignSelf:null!==(l=null===(a=t.style)||void 0===a?void 0:a.alignSelf)&&void 0!==l?l:"flex-start"}:(null===(r=t.autoProps)||void 0===r?void 0:r.height)===be.Auto?{height:"auto",alignSelf:null!==(u=null===(d=t.style)||void 0===d?void 0:d.alignSelf)&&void 0!==u?u:"flex-start"}:(null===(c=t.autoProps)||void 0===c?void 0:c.height)===be.Custom?{height:e.height,alignSelf:null!==(h=null===(p=t.style)||void 0===p?void 0:p.alignSelf)&&void 0!==h?h:"flex-start"}:(null===(g=t.autoProps)||void 0===g?void 0:g.height)===be.Stretch||"fit"===t.heightMode?{alignSelf:"stretch"}:parseFloat(e.height)>0?{height:e.height,alignSelf:null!==(f=null===(m=t.style)||void 0===m?void 0:m.alignSelf)&&void 0!==f?f:"flex-start"}:{alignSelf:"stretch"}}(t,r.bbox,d);return c&&0!==u&&(p.height=this.initHeight+u),d?e.css`
        padding: ${l/2}px 0;
        transform: ${0!==t.offsetX||0!==t.offsetY?`translate(${null!==(o=t.offsetX)&&void 0!==o?o:0}px, ${null!==(i=t.offsetY)&&void 0!==i?i:0}px)`:null};
        height: ${a.utils.getValueOfBBox(p,"height")};
        align-self: ${p.alignSelf};
      `:e.css`
      padding: 0 ${l/2}px;
      transform: ${0!==t.offsetX||0!==t.offsetY?`translate(${null!==(n=t.offsetX)&&void 0!==n?n:0}px, ${null!==(s=t.offsetY)&&void 0!==s?s:0}px)`:null};
      height: ${a.utils.getValueOfBBox(p,"height")};
      align-self: ${p.alignSelf};
    `}render(){var t;const{order:o,span:i,offset:n,layoutId:s,layoutItem:l,draggable:r,resizable:d,selectable:u}=this.props;if(null==l||l.isPending)return null;const c=e.lodash.assign({},Ri,l.setting),p="ratio"===c.heightMode,h=null===(t=c.autoProps)||void 0===t?void 0:t.height,g=(0,e.classNames)("row-layout-item d-flex",`col-${i}`,`offset-${n}`,`order-${o}`,{"fix-height":h===a.LayoutItemSizeModes.Custom}),m=this.isFunctionalWidget(),f=e.css`
      width: 100%;
      height: 10px;
      background: ${this.props.builderTheme.colors.palette.primary[700]};
    `,y=a.utils.parseAspectRatio(c.aspectRatio),v=a.utils.handleOnebyOneAnimation(this.props);return(0,e.jsx)(Be,Object.assign({css:this.getStyle(c),layoutId:s,layoutItemId:l.id,onResizeStart:this.handleResizeStart,onResizing:this.handleResizing,onResizeEnd:this.handleResizeEnd,left:!0,right:!0,top:!1,bottom:h===a.LayoutItemSizeModes.Custom&&!p,draggable:r,resizable:d,selectable:u,onClick:this.props.onClick,className:g,forceAspectRatio:p,aspectRatio:y},v),(0,e.jsx)(e.React.Fragment,null,m&&(0,e.jsx)(ae,{css:e.css`
                ${Li};
              `,layouts:this.fakeTopLayouts,highlightDragover:!0,onDrop:this.handleDropAtTop},(0,e.jsx)("div",{css:f})),m&&(0,e.jsx)(ae,{css:e.css`
                ${zi};
              `,layouts:this.fakeBottomLayouts,highlightDragover:!0,onDrop:this.handleDropAtBottom},(0,e.jsx)("div",{css:e.css`${f};position: absolute; bottom:0;`}))))}}function Ni(t,e){let o=-1;return e.some(((e,i)=>{if(e.id===t)return o=i,!0})),o}function $i(t,o,i,n){const s=n.map((t=>(0,e.Immutable)(t))),l=Ni(t,s);if(a.utils.isRTL()&&(o=0!==o?0:-i),o>0){const t=s[l],e=Math.min(o,t.width-1);return s[l]=t.set("left",t.left+e).set("width",t.width-e),s}if(o<0){let t=0;for(let e=0;e<l;e+=1)t+=Math.min(s[e].width,2);const e=s[l].left-t,i=Math.abs(o);if(e>0){let t=0;for(let e=l;e>=0;e-=1){const o=s[e];let n=0;if(e>0){const t=s[e-1];n=o.left-(t.left+t.width)}else n=o.left;if(0===n)continue;const a=t+n>=i?i-t:n;s[l]=s[l].set("width",s[l].width+a);for(let t=e;t<=l;t+=1)s[t]=s[t].set("left",s[t].left-a);if(t+n>=i)return s;t+=n}if(l>0)for(let e=l-1;e>=0;e-=1){const o=s[e],n=o.width-2;if(n<=0)continue;const a=t+n>=i?i-t:n;s[l]=s[l].set("width",s[l].width+a),s[e]=o.set("width",o.width-a);for(let t=e+1;t<=l;t+=1)s[t]=s[t].set("left",s[t].left-a);if(t+n>=i)return s;t+=n}}return s}if(i<0){const t=Math.min(Math.abs(i),s[l].width-1);return s[l]=s[l].set("width",s[l].width-t),s}if(i>0){let t=0;for(let e=l+1;e<s.length;e+=1)t+=Math.min(s[e].width,2);const e=i;if(Ti-(s[l].left+s[l].width)-t>0){let t=0;for(let o=l;o<s.length;o+=1){const i=s[o];let n=0;if(n=o!==s.length-1?s[o+1].left-(i.left+i.width):Ti-(i.left+i.width),0===n)continue;const a=t+n>=e?e-t:n;s[l]=s[l].set("width",s[l].width+a);for(let t=l+1;t<=o;t+=1)s[t]=s[t].set("left",s[t].left+a);if(t+n>=e)return s;t+=n}if(l!==s.length-1)for(let o=l+1;o<s.length;o+=1){const i=s[o],n=i.width-2;if(n<=0)continue;const a=t+n>=e?e-t:n;s[l]=s[l].set("width",s[l].width+a),s[o]=i.set("width",i.width-a);for(let t=l+1;t<=o;t+=1)s[t]=s[t].set("left",s[t].left+a);if(t+n>=e)return s;t+=n}}return s}return s}function ki(t,o,i){const n=i.map((t=>(0,e.Immutable)(t))),s=Ni(t,n),a=n[s];return n.splice(s,1),Oi(a,o,n)}function Oi(t,o,i){const n=i.map((t=>(0,e.Immutable)(t)));let s=(0,e.Immutable)(t);const a=Math.max(o,0);if(s=s.set("left",a),null==n||0===n.length)return s=s.set("width",Math.min(s.width,Ti-s.left)),[s];let l,r=n.length;const d=()=>{if(0===r)u=n[r].left,l=u;else{const t=n[r-1];u=r<n.length?n[r].left-(t.left+t.width):Ti-(t.left+t.width),l=t.left+t.width+u}};n.some(((t,e)=>{if(a<=t.left)return r=e,!0}));let u=r<n.length?n[r].left-a:Ti-a;if(u>=s.width)return n.splice(r,0,s),n;const c=u;if(d(),u>=s.width)return s=s.set("left",l-s.width),n.splice(r,0,s),n;u=c;for(let t=r;t<n.length;t+=1){const e=n[t];let o=0;if(o=t!==n.length-1?n[t+1].left-(e.left+e.width):Ti-(e.left+e.width),0===o)continue;const i=u+o>=s.width?s.width-u:o;for(let e=r;e<=t;e+=1)n[e]=n[e].set("left",n[e].left+i);if(u+o>=s.width)return n.splice(r,0,s),n;u+=o}if(d(),u>=s.width)return s=s.set("left",l-s.width),n.splice(r,0,s),n;for(let t=r-1;t>=0;t-=1){const e=n[t];let o=0;if(t>0){const i=n[t-1];o=e.left-(i.left+i.width)}else o=e.left;if(0===o)continue;const i=u+o>=s.width?s.width-u:o;for(let e=t;e<=r-1;e+=1)n[e]=n[e].set("left",n[e].left-i);if(u+o>=s.width)return s=s.set("left",l-s.width),n.splice(r,0,s),n;u+=o}if(d(),u>=2)return s=s.set("left",l-u).set("width",u),n.splice(r,0,s),n;if(r!==n.length)for(let t=r;t<n.length;t+=1){const e=n[t],o=e.width-2;if(o<=0)continue;const i=u+o>=2?2-u:o;n[t]=e.set("width",e.width-i);for(let e=r;e<=t;e+=1)n[e]=n[e].set("left",n[e].left+i);if(u+o>=2)return s=s.set("left",n[r].left-2).set("width",2),n.splice(r,0,s),n;u+=o}if(d(),u>=2)return s=s.set("left",l-u).set("width",u),n.splice(r,0,s),n;for(let t=r-1;t>=0;t-=1){const e=n[t],o=e.width-2;if(o<=0)continue;const i=u+o>=2?2-u:o;n[t]=e.set("width",e.width-i);for(let e=t+1;e<=r-1;e+=1)n[e]=n[e].set("left",n[e].left-i);if(u+o>=2)return s=s.set("left",l-2).set("width",2),n.splice(r,0,s),n;u+=o}return n}function Bi(t){const{builderTheme:o,visible:i,gutter:n=0}=t;return(0,e.jsx)("div",{css:e.css`
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
                `}))))))}const Ei=e.css`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`,Di=e.css`
  ${Ei};
  bottom: 0;
  top: 0;
  z-index: ${a.LayoutZIndex.DragMoveTip};
  pointer-events: none;
`;class Fi extends e.React.PureComponent{constructor(t){super(t),this.state={isResizing:!1,updatingRects:null,isDragoverCenter:!1},a.utils.autoBindHandlers(this,["handleItemResizeStart","handleItemResizing","handleItemResizeEnd","handleDrop","handleDragOver","handleDragEnter","handleDragLeave","handleToggleDragoverCenterEffect"]),this.flipLeftRight=a.utils.isRTL()}componentDidMount(){this.canvasPane=new hi(this.guideDragOverRef)}handleItemResizeStart(t){this.domRect=this.ref.getBoundingClientRect(),this.setState({isResizing:!0})}handleItemResizing(t,e,o,i,n){const s=this.domRect.width/Ti,a=$i(t,Math.round(e/s),Math.round(i/s),this.childRects);this.setState({updatingRects:a})}handleItemResizeEnd(t,e,i,n,s,l){const{layout:r}=this.props,d=this.domRect.width/Ti,u=Math.round(e/d),c=Math.round(n/d),p=(0,o.getAppConfigAction)();$i(t,u,c,this.childRects).forEach((e=>{const o=r.content[e.id].bbox;let i=o.height;e.id===t&&(i=a.utils.isPercentage(o.height)?`${(parseFloat(e.height)+100*s/this.domRect.height).toFixed(4)}%`:`${Math.round(parseFloat(e.height)+s)}px`);const n={left:e.left,width:e.width,height:i};p.editLayoutItemBBox({layoutId:r.id,layoutItemId:e.id},n)})),p.exec(),this.setState({isResizing:!1,updatingRects:null})}handleToggleDragoverCenterEffect(t){this.referenceId=null,t&&this.collectBounds(),this.setState({isDragoverCenter:t})}handleDragOver(t,e,o,i,n,s){var a;const l=null!==(a=t.layoutInfo)&&void 0!==a?a:{layoutId:null},r=this.reCalculateRects(t,o,i,n);let d;r.some((t=>{if(null==t.id||t.layoutId===l.layoutId&&t.id===l.layoutItemId)return d=t,!0}));let u=!0,c=d.left;if(this.flippedChildRects.some((t=>{if((t.layoutId!==d.layoutId||t.id!==d.id)&&(t.left<=d.left&&t.left+t.width>d.left&&(u=!1),!u)){const e=r.find((e=>e.layoutId===t.layoutId&&e.id===t.id));return c=e.left+e.width<=d.left?t.left+t.width:t.left,!0}})),this.dragInsertPos=c,this.canvasPane.clear(),u)this.canvasPane.drawRect({left:c*this.colWidth+this.space/2,top:0,width:d.width*this.colWidth-this.space,height:i.height});else{const t=Math.min(o.width-this.space/2,Math.max(0,c*this.colWidth-this.space/2));this.canvasPane.drawRect({left:t,top:0,width:10,height:o.height})}}handleDragEnter(){this.canvasPane.setSize(this.ref.clientWidth,this.ref.clientHeight),this.canvasPane.setColor(e.polished.rgba(this.builderTheme.colors.palette.primary[700],.5))}handleDragLeave(){this.canvasPane.clear()}getConfig(){var t;const{layout:e}=this.props;return null!==(t=e.setting)&&void 0!==t?t:Ci}reCalculateRects(t,e,o,i){var n,s;const a=null!==(n=t.layoutInfo)&&void 0!==n?n:{layoutId:null},{layout:l}=this.props,r=this.getConfig();this.space=null!==(s=r.space)&&void 0!==s?s:0;const d=this.maxPageWidth>0?Math.min(this.maxPageWidth,e.width):e.width,u=i-(e.width-d)/2,c=o.left-(e.width-d)/2;this.colWidth=d/Ti;const p=Math.round(u/this.colWidth),h=Math.round(c/this.colWidth),g=Math.round(o.width/this.colWidth),m=function(t,e,o,i,n,s){var a;let l;const r=null!==(a=e.layoutInfo)&&void 0!==a?a:{layoutId:null},d=r.layoutId===t;return s.some((t=>(!d||t.id!==r.layoutItemId)&&(t.left>=o&&t.left<o+i||o>=t.left&&o<t.left+t.width)))?(s.some(((t,e)=>{if(d&&t.id===r.layoutItemId)return!1;if(n>=t.left&&n<=t.left+t.width)return n>=t.left&&n<t.left+t.width/2?(l=t.left,!0):(l=t.left+t.width,!0);if(o<t.left&&o+i>t.left){let o=0;if(0===e)o=t.left;else{let i;for(let t=e-1;t>=0&&(i=s[t],d&&i.id===r.layoutItemId);t-=1);o=null!=i?t.left-(i.left+i.width):t.left}return l=o>=i?t.left-i:t.left-o,!0}return o>t.left&&o<t.left+t.width?(l=t.left+t.width,!0):void 0})),l):o}(l.id,t,h,g,p,this.flippedChildRects);return null==t.id&&this.isInRow(a)?ki(a.layoutItemId,m,this.flippedChildRects):Oi({width:g,height:o.height,layoutId:a.layoutId,id:a.layoutItemId},m,this.flippedChildRects)}handleDrop(t,i,n){const{layout:s}=this.props;let l=(0,o.getAppConfigAction)();const{addedItemRect:r,insertIndex:d,appConfig:u}=this.calDropPosition(l.appConfig,t,i,n,!1);null!=r?R(u,t,{layoutId:s.id},i,r,d).then((i=>{var n;const{layoutInfo:r,updatedAppConfig:d}=i;l=(0,o.getAppConfigAction)(d),(null===(n=t.layoutInfo)||void 0===n?void 0:n.layoutId)!==s.id&&l.editLayoutItemSetting(r,{autoProps:{height:a.LayoutItemSizeModes.Stretch}});const{layoutId:u,layoutItemId:c}=r;let p=d.layouts[u].content[c].bbox;p=p.without("top").without("right").without("bottom"),l.editLayoutItemBBox(r,p),(0,e.getAppStore)().dispatch(e.appActions.layoutChanged(l.appConfig,r))})).finally(null):(0,e.getAppStore)().dispatch(e.appActions.layoutChanged(u,t.layoutInfo)),this.canvasPane.clear()}calDropPosition(t,e,i,n,s){var a;const l=this.maxPageWidth>0?Math.min(this.maxPageWidth,i.width):i.width,r=null!==(a=e.layoutInfo)&&void 0!==a?a:{layoutId:null},{layout:d}=this.props,u=l/Ti,c=this.dragInsertPos,p=Math.round(n.width/u),h=(0,o.getAppConfigAction)(t);let g,m,f;return g=!s&&null==e.id&&this.isInRow(r)?ki(r.layoutItemId,c,this.flippedChildRects):Oi({width:p,height:n.height,layoutId:r.layoutId,id:r.layoutItemId},c,this.flippedChildRects),g.forEach(((t,o)=>{var i;let n={left:t.left,width:t.width,height:t.height};this.flipLeftRight&&(n=Mi(n)),t.layoutId===d.id?(h.editLayoutItemBBox({layoutId:t.layoutId,layoutItemId:t.id},n),t.id===(null===(i=e.layoutInfo)||void 0===i?void 0:i.layoutItemId)&&null!=e.id&&h.setLayoutItemToPending({layoutId:t.layoutId,layoutItemId:t.id},!1)):(m=n,f=0+o)})),{addedItemRect:m,insertIndex:f,appConfig:h.appConfig}}isInRow(t){const{layout:e}=this.props;return(null==t?void 0:t.layoutId)===e.id}collectBounds(){var t;const{transformedLayout:e}=this.props,o=null!==(t=e.order)&&void 0!==t?t:[];return this.childRects=[],o.forEach((t=>{var o,i;if(e.content[t].isPending)return;const n=null===(i=null===(o=e.content)||void 0===o?void 0:o[t])||void 0===i?void 0:i.bbox;null!=n&&this.childRects.push({layoutId:e.id,id:t,left:parseInt(n.left,10),width:parseInt(n.width,10),height:n.height})})),this.childRects.sort(((t,e)=>t.left-e.left)),this.flipLeftRight?(this.flippedChildRects=[],this.childRects.forEach((t=>{let e={left:t.left,width:t.width,height:t.height};e=Mi(e),this.flippedChildRects.push({layoutId:t.layoutId,id:t.id,left:e.left,width:e.width,height:e.height})})),this.flippedChildRects.sort(((t,e)=>t.left-e.left))):this.flippedChildRects=this.childRects,this.childRects}createItem(t,o){var i;const{transformedLayout:n,itemDraggable:s,itemResizable:a,itemSelectable:l,isMultiRow:r}=this.props,d=this.getConfig(),u=t[o],c=null!==(i=d.space)&&void 0!==i?i:0;let p;if(0===o)p=u.left;else{const e=t[o-1];p=u.left-e.left-e.width}return(0,e.jsx)(ji,{key:`${u.layoutId}_${u.id}`,order:o+1,offset:p,span:u.width,gutter:c,isMultiRow:r,builderTheme:this.builderTheme,layoutId:n.id,layoutItemId:u.id,layoutItem:n.content[u.id],draggable:s,resizable:a,selectable:l,onResizeStart:this.handleItemResizeStart,onResizing:this.handleItemResizing,onResizeEnd:this.handleItemResizeEnd})}render(){var t;const{transformedLayout:o,className:i}=this.props,{isResizing:n,isDragoverCenter:s}=this.state,l=this.getConfig(),r=s;let d;n&&null!=this.state.updatingRects?d=this.state.updatingRects:(this.collectBounds(),d=this.childRects);const u=null!==(t=l.space)&&void 0!==t?t:0;return(0,e.jsx)(a.PageContext.Consumer,null,(t=>(this.maxPageWidth=t.maxWidth,this.builderTheme=t.builderTheme,(0,e.jsx)("div",{className:(0,e.classNames)("row-layout",i,{"row-rtl":this.flipLeftRight}),css:Ai,"data-layoutid":o.id},(0,e.jsx)("div",{css:e.css`
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
                  `},(0,e.jsx)(e.OneByOneAnimation,{className:(0,e.classNames)("row m-0",{"flex-nowrap":!this.props.isMultiRow,"h-100":d.length>0}),"data-layoutid":o.id},(0,e.jsx)(ae,{css:Ei,layouts:this.props.layouts,highlightDragover:!1,onDragEnter:this.handleDragEnter,onDragLeave:this.handleDragLeave,onDragOver:this.handleDragOver,onDrop:this.handleDrop,onToggleDragoverEffect:this.handleToggleDragoverCenterEffect}),d.map(((t,e)=>this.createItem(d,e)))),0===d.length&&this.props.children,(0,e.jsx)(Bi,{visible:r||n,builderTheme:t.builderTheme,gutter:u}),(0,e.jsx)("canvas",{css:e.css`
                      ${Di};
                      display: ${r?"block":"none"};
                    `,ref:t=>this.guideDragOverRef=t})))))))}}class Vi extends e.React.PureComponent{constructor(t){super(t),this.onResize=(t,e)=>{var o;if(this.props.browserSizeMode!==this.props.mainSizeMode)return;if(0===e)return;const{widgetId:i}=this.props;null!=(null===(o=window.runtimeInfo.widgets)||void 0===o?void 0:o[i])?window.runtimeInfo.widgets[i].height=e:window.runtimeInfo.widgets[i]={height:e}},this.handleDebounceResize=e.lodash.debounce(this.onResize,200)}findExtension(){var t;const o=e.ExtensionManager.getInstance().getExtensions(`${e.extensionSpec.ExtensionPoints.LayoutTransformer}`);if((null==o?void 0:o.length)>0){const e=o.find((t=>"ROW"===t.layoutType));this.layoutTransform=null===(t=e)||void 0===t?void 0:t.transformLayout}}collectRowItems(){var t;const{layout:e,layouts:o,browserSizeMode:i,mainSizeMode:n}=this.props;null==this.layoutTransform&&this.findExtension();let s=e;o[i]!==e.id&&null!=this.layoutTransform&&(s=this.layoutTransform(e,n,i)),this.finalLayout=s;const a=null!==(t=s.order)&&void 0!==t?t:[],l=[];let r=[],d=0;return l.push(r),a.forEach((t=>{if(s.content[t].isPending)return;const e=s.content[t].bbox,o=parseInt(e.left,10),i=Math.floor(o/Ti);i>d&&(r=[],d=i,l.push(r)),r.push(t)})),l}createRow(){const{layout:t,layouts:o}=this.props;return(0,e.jsx)(Fi,{layouts:o,layout:t,transformedLayout:this.finalLayout,isMultiRow:this.numOfRows>1},this.props.children)}render(){var t;const{layout:o}=this.props,n=null!==(t=o.setting)&&void 0!==t?t:Ci;return(0,e.jsx)(a.PageContext.Consumer,null,(t=>(this.numOfRows=this.collectRowItems().length,(0,e.jsx)("div",{className:(0,e.classNames)("layout d-flex",e.classNames),css:e.css`
                width: 100%;
                padding: ${i.styleUtils.toCSSPadding(n.style.padding)};
              `,"data-layoutid":o.id},this.createRow(),(0,e.jsx)(e.ReactResizeDetector,{handleHeight:!0,onResize:this.handleDebounceResize})))))}}const Hi=e.ReactRedux.connect(a.utils.mapStateToLayoutProps)(Vi),Wi={numOfRows:2,numOfCols:2,rowGap:10,colGap:10},Ui={startX:0,startY:0,spanX:1,spanY:1};function Gi(t,e,o){return e>o?[1,o]:t+e-1>o?[o-e+1,e]:[t,e]}function _i(t,o,i,n,s,a){const[l,r]=Gi(t,i,a),[d,u]=Gi(o,n,s);return e.css`
    grid-row: ${d} / span ${u};
    grid-column: ${l} / span ${r};
  `}function Yi(t,e){let[o,i,n,s]=[0,0,0,0];const{dx:a,dy:l,dw:r,dh:d}=e;return Math.abs(r)>=t.w/3&&(0===a?n=r<0?-Math.ceil(-r/t.w):Math.ceil(r/t.w):a>0?(o=Math.ceil(a/t.w),n=-o):(o=-Math.ceil(-a/t.w),n=-o)),Math.abs(d)>=t.h/3&&(0===l?d<0?s=-Math.ceil(-d/t.h):d>0&&(s=Math.ceil(d/t.h)):l>0?(i=Math.ceil(l/t.h),s=-i):(i=-Math.ceil(-l/t.h),s=-i)),{x:o,y:i,w:n,h:s}}class Zi extends e.React.PureComponent{constructor(t){super(t),this.restrictDelta=t=>{var e;const{layoutItem:o,numOfRows:i,numOfCols:n}=this.props,s=null!==(e=o.setting)&&void 0!==e?e:Ui,{startX:a,startY:l,spanX:r,spanY:d}=s;t.x<0?(t.x=Math.max(t.x,1-a),t.w=-t.x):t.x>0?(t.x=Math.min(t.x,r-1),t.w=-t.x):t.w>0?t.w=Math.min(t.w,n-(a+r)+1):t.w<0&&(t.w=Math.max(t.w,1-r)),t.y<0?(t.y=Math.max(t.y,1-l),t.h=-t.y):t.y>0?(t.y=Math.min(t.y,d-1),t.h=-t.y):t.h>0?t.h=Math.min(t.h,i-(l+d)+1):t.h<0&&(t.h=Math.max(t.h,1-d))},this.handleResizeStart=(t,e,o)=>{var i;const{layoutItem:n}=this.props,s=null!==(i=n.setting)&&void 0!==i?i:Ui,{spanX:a,spanY:l}=s;this.isResizing=!0,this.unitSize={w:e/a,h:o/l}},this.handleResizing=(t,e,o,i,n)=>{const s=Yi(this.unitSize,{dx:e,dy:o,dw:i,dh:n});this.restrictDelta(s),this.setState({delta:s})},this.handleResizeEnd=(t,i,n,s,a)=>{var l;const{layoutId:r,layoutItem:d}=this.props;this.isResizing=!1;const u=Yi(this.unitSize,{dx:i,dy:n,dw:s,dh:a});this.restrictDelta(u);const c=(0,o.getAppConfigAction)(),p={layoutId:r,layoutItemId:d.id};let h=null!==(l=d.setting)&&void 0!==l?l:(0,e.Immutable)({});h=h.set("startX",h.startX+u.x).set("spanX",h.spanX+u.w).set("startY",h.startY+u.y).set("spanY",h.spanY+u.h),c.editLayoutItemSetting(p,h).exec(),this.setState({delta:{x:0,y:0,w:0,h:0}})},this.isResizing=!1,this.unitSize={w:0,h:0},this.state={delta:{x:0,y:0,w:0,h:0}}}render(){var t;const{layoutId:o,layoutItem:i,numOfRows:n,numOfCols:s}=this.props,a=null!==(t=i.setting)&&void 0!==t?t:Ui,{startX:l,startY:r,spanX:d,spanY:u}=a,{delta:c}=this.state;return(0,e.jsx)(Be,{className:"d-flex",css:_i(l+c.x,r+c.y,d+c.w,u+c.h,n,s),layoutId:o,layoutItemId:i.id,left:1!==l||d>1,top:1!==r||u>1,right:l+d-1<s||d>1,bottom:r+u-1<n||u>1,onResizeStart:this.handleResizeStart,onResizing:this.handleResizing,onResizeEnd:this.handleResizeEnd})}}function Xi(t,e,o,i){if(t<=e)return 1;let n=e;const s=e+o;for(let e=1;e<i;e++){if(t<=n+s)return t<=n+s/2?e:e+1;n+=s}return i}function qi(t,e,o,i,n,s){if(t+o>=i*s+n*(s-1))return s-e;const a=i+n,l=t+o/2;for(let i=0;i<s;i++){const n=i*a,s=n+e*a,r=n+o+a;if(t>n&&t+o<=r)return l<=s?i:i+1}return 0}function Ji(t,e,o,i,n){const s=e*o+(e-1)*i;if(t+s>=o*n+i*(n-1))return n-e;const a=o+i,l=t+s/2;for(let o=0;o<n;o++){const i=o*a,n=i+e*a,r=i+s+a;if(t>i&&t+s<=r)return l<=n?o:o+1}return 0}function Qi(t,e,o,i){const{rowHeight:n,rowGap:s,colWidth:a,colGap:l,rows:r,cols:d}=i,u=e.left+o.x,c=e.top+o.y,p=e.width+o.w,h=Xi(e.height+o.h,n,s,r),g=Xi(p,a,l,d);if(0!==o.w||0!==o.h)return null;let m,f;return t?(m=Ji(u,g,a,l,d),f=Ji(c,h,n,s,r)):(m=qi(u,g,e.width,a,l,d),f=qi(c,h,e.height,n,s,r)),{rect:{left:(a+l)*m+i.pl,top:(n+s)*f+i.pt,width:g*a+(g-1)*l,height:h*n+(h-1)*s},startX:m,startY:f,spanX:g,spanY:h}}const Ki=e.css`
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  background: transparent;
`,tn=e.css`
  ${Ki};
  pointer-events: none;
`;class en extends e.React.PureComponent{constructor(t){super(t),this.updateDeviceRatio=()=>{this.canvasPane.setSize(this.ref.parentElement.clientWidth,this.ref.parentElement.clientHeight,window.devicePixelRatio)},a.utils.autoBindHandlers(this,["handleDragOver","handleDragEnter","handleDragLeave","handleDrop","handleActivate","handleToggleDragoverEffect"]),this.state={isDragover:!1}}componentDidMount(){var t,e,o;this.canvasPane=new hi(this.canvasRef,this.pageContext.builderTheme),this.updateDeviceRatio();const i=`(resolution: ${window.devicePixelRatio}dppx)`;this.mediaQueryList=null===(t=window.matchMedia)||void 0===t?void 0:t.call(window,i);const{name:n,version:s}=window.jimuUA.browser;"safari"===n.toLowerCase()&&parseInt(s)<14?null===(e=this.mediaQueryList)||void 0===e||e.addListener(this.updateDeviceRatio):null===(o=this.mediaQueryList)||void 0===o||o.addEventListener("change",this.updateDeviceRatio)}componentWillUnmount(){var t,e;const{name:o,version:i}=window.jimuUA.browser;"safari"===o.toLowerCase()&&parseInt(i)<14?null===(t=this.mediaQueryList)||void 0===t||t.removeListener(this.updateDeviceRatio):null===(e=this.mediaQueryList)||void 0===e||e.removeEventListener("change",this.updateDeviceRatio)}componentDidUpdate(){this.updateDeviceRatio()}handleDragOver(t,o,i,n,s,a,l){var r;if(this.canvasPane.clear(),!this.state.isDragover||l>500)return;const d=(null===(r=t.layoutInfo)||void 0===r?void 0:r.layoutId)===this.props.layout.id,{rect:u}=Qi(d,n,{x:0,y:0,w:0,h:0},this.gridlines);this.canvasPane.setColor(e.polished.rgba(this.pageContext.builderTheme.colors.palette.primary[700],.2)),this.canvasPane.drawRect(u)}handleToggleDragoverEffect(t,e){this.canvasPane.clear(),t&&(this.domRect=this.ref.getBoundingClientRect(),this.gridlines=function(t,e,o){var n,s;const a=Object.assign({},Wi,t.setting),{numOfRows:l,numOfCols:r,rowGap:d,colGap:u}=a,c=i.styleUtils.expandStyleArray(null===(s=null===(n=a.style)||void 0===n?void 0:n.padding)||void 0===s?void 0:s.number),p=(o-(l-1)*d)/l,h=(e-(r-1)*u)/r;return{pt:c[0],pl:c[3],rowGap:d,colGap:u,rowHeight:Math.max(1,p),colWidth:Math.max(1,h),rows:l,cols:r}}(this.props.layout,this.domRect.width,this.domRect.height)),this.setState({isDragover:t})}handleDragEnter(t){}handleDragLeave(){}handleDrop(t,e,o){var i;const n=(null===(i=t.layoutInfo)||void 0===i?void 0:i.layoutId)===this.props.layout.id,{startX:s,startY:a,spanX:l,spanY:r}=Qi(n,o,{x:0,y:0,w:0,h:0},this.gridlines);this.canvasPane.clear(),this.gridlines=null,this.addWidgetToLayout(t,s,a,l,r).catch((t=>console.error(t)))}addWidgetToLayout(t,i,n,s,a){var l,r,d,u,c;return r=this,d=void 0,c=function*(){const{layout:r}=this.props;let d=(0,o.getAppConfigAction)();const u=yield R(d.appConfig,t,{layoutId:r.id},{left:0,top:0,width:100,height:100},{left:0,top:0,width:10,height:10}),{layoutInfo:c,updatedAppConfig:p}=u;d=(0,o.getAppConfigAction)(p);const h=p.layouts[c.layoutId].content[c.layoutItemId];let g=(0,e.Immutable)(null!==(l=h.setting)&&void 0!==l?l:{});g=g.set("startX",i+1).set("startY",n+1).set("spanX",s).set("spanY",a),d.editLayoutItemSetting(c,g),(0,e.getAppStore)().dispatch(e.appActions.layoutChanged(d.appConfig,c))},new((u=void 0)||(u=Promise))((function(t,e){function o(t){try{n(c.next(t))}catch(t){e(t)}}function i(t){try{n(c.throw(t))}catch(t){e(t)}}function n(e){var n;e.done?t(e.value):(n=e.value,n instanceof u?n:new u((function(t){t(n)}))).then(o,i)}n((c=c.apply(r,d||[])).next())}))}createItem(t,o,i){const n=t.content[o];return(0,e.jsx)(Zi,{key:`${t.id}_${o}`,layoutItem:n,layoutId:t.id,numOfRows:this.layoutSetting.numOfRows,numOfCols:this.layoutSetting.numOfCols})}createPlaceholders(){var t;const{numOfRows:o,numOfCols:n,rowGap:s,colGap:a}=this.layoutSetting,l=s>0,r=a>0,d=[];for(let t=1;t<=o;t++)for(let i=1;i<=n;i++)d.push((0,e.jsx)("div",{key:`${t}_${i}`,className:(0,e.classNames)("grid-placeholder",{"has-row-gap":l,"has-col-gap":r,"last-row":t===o,"last-col":i===n}),css:e.css`
              grid-row: ${t} / span 1;
              grid-column: ${i} / span 1;
            `}));return(0,e.jsx)("div",{css:e.css`
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          padding: ${i.styleUtils.toCSSPadding(null===(t=this.layoutSetting.style)||void 0===t?void 0:t.padding)};
        `,className:"placeholder-container"},d)}render(){const{layout:t,className:o,isPageItem:n}=this.props;return null==t?null:(0,e.jsx)(a.PageContext.Consumer,null,(s=>{var a,l,r;this.pageContext=s,this.layoutSetting=e.lodash.assign({},Wi,t.setting);const{numOfRows:d,numOfCols:u,rowGap:c,colGap:p}=this.layoutSetting,h=null!==(a=t.order)&&void 0!==a?a:[],g=(0,e.classNames)("layout grid-layout",o,{[lt]:null===(l=t.setting)||void 0===l?void 0:l.lockDescendants}),m=e.css`
            height: 100%;
            position: relative;
            padding: ${i.styleUtils.toCSSPadding(null===(r=this.layoutSetting.style)||void 0===r?void 0:r.padding)};
            width: 100%;
            overflow: hidden;
            .grid-placeholder {
              border: 1px dashed ${this.pageContext.builderTheme.colors.palette.light[700]};
              &:not(.has-row-gap) {
                border-bottom-width: 0;
              }
              &.last-row {
                border-bottom-width: 1px;
              }
              &:not(.has-col-gap) {
                border-right-width: 0;
              }
              &.last-col {
                border-right-width: 1px;
              }
            }
            .trail-container,
            .placeholder-container {
              display: grid;
              grid-template-rows: repeat(${d}, 1fr);
              grid-template-columns: repeat(${u}, 1fr);
              grid-row-gap: ${c}px;
              grid-column-gap: ${p}px;
            }
          `,f=e.css`
            ${tn};
            display: ${this.state.isDragover||ft?"block":"none"};
            z-index: ${h.length+1};
          `;return(0,e.jsx)("div",{className:g,css:m,"data-layoutid":t.id},this.createPlaceholders(),(0,e.jsx)("div",{ref:t=>this.ref=t,className:"w-100 h-100"},(0,e.jsx)(e.OneByOneAnimation,{"data-layoutid":t.id,className:"trail-container",css:e.css`
                    width: 100%;
                    height: 100%;
                  `},(0,e.jsx)(ae,{css:Ki,layouts:this.props.layouts,highlightDragover:!n,onDragEnter:this.handleDragEnter,onDragLeave:this.handleDragLeave,onDragOver:this.handleDragOver,onDrop:this.handleDrop,onToggleDragoverEffect:this.handleToggleDragoverEffect,isRepeat:this.props.isRepeat}),h.map(((e,o)=>this.createItem(t,e,o))))),(0,e.jsx)("canvas",{css:f,ref:t=>this.canvasRef=t}))}))}}en.displayName="GridLayout";const on=e.ReactRedux.connect(a.utils.mapStateToLayoutProps)(en);var nn=c(5505);class sn extends e.React.PureComponent{constructor(t){super(t),this.modalStyle={position:"absolute",top:"0",bottom:"0",width:"100%",height:"auto",paddingBottom:"1px"},this.onTransitionSettingChange=t=>{const{layoutId:i,layoutItemId:n}=this.props,s=(0,o.getAppConfigAction)(),a=s.appConfig.layouts[i].content[n];s.editSectionProperty(a.sectionId,"transition",t).exec(),(null==t?void 0:t.type)!==e.TransitionType.None&&this.previewTransition()},this.onEffectSettingChange=(t,i)=>{const n=e.AnimationTriggerType.ScrollIntoView,{layoutId:s,layoutItemId:a,setting:l}=this.props,r=l||(0,e.Immutable)({}),d=t===e.AnimationPlayMode.OneByOne?"oneByOneEffect":"effect";this.props.onSettingChange({layoutId:s,layoutItemId:a},r.setIn([d,n],i)),(null==i?void 0:i.type)!==e.AnimationType.None&&o.builderAppSync.publishAnimationPreviewToApp({layoutInfo:{layoutId:s,layoutItemId:a},playMode:t,id:Symbol("preview animation")})},this.onSectionOneByOneEffectSettingChange=t=>{this.onEffectSettingChange(e.AnimationPlayMode.OneByOne,t)},this.previewAnimation=t=>{this.hasAnimationEffect()&&o.builderAppSync.publishAnimationPreviewToApp({layoutInfo:{layoutId:this.props.layoutId,layoutItemId:this.props.layoutItemId},playMode:t,id:Symbol("preview animation")})},this.previewTransition=(t=!1)=>{var i,n,s;const{sectionId:l}=this.props,r=a.searchUtils.getSectionInfo((0,e.getAppStore)().getState().appStateInBuilder,l),{views:d}=r;if((null==d?void 0:d.length)>1){let a=null===(s=null===(n=null===(i=(0,e.getAppStore)().getState().appStateInBuilder)||void 0===i?void 0:i.appRuntimeInfo)||void 0===n?void 0:n.sectionNavInfos)||void 0===s?void 0:s[l];if(!a){const t=Gt(r),o=d.indexOf(t),i=o>0?o-1:o+1;a=(0,e.Immutable)({currentViewId:t,previousViewId:d[i]})}o.builderAppSync.publishSectionNavInfoToApp(l,a.set("playId",Symbol("play transition")).set("withOneByOne",t).asMutable())}},this.previewTransitionAndOnebyOne=()=>{this.previewTransition(!0)},this.previewOneByOneInSection=()=>{this.previewAnimation(e.AnimationPlayMode.OneByOne)},this.onPlayModeChange=t=>{const{layoutId:i,layoutItemId:n,setting:s}=this.props,a=s||(0,e.Immutable)({});let l=(0,o.getAppConfigAction)().appConfig;l=l.setIn(["layouts",i,"content",n,"setting"],a.set("effectPlayMode",t)),(0,o.getAppConfigAction)(l).exec()},this.switchToIn=()=>{this.setState({animationType:"in"})},this.switchToTransition=()=>{this.setState({animationType:"transition"})},this.state={animationType:"in"}}hasAnimationEffect(){var t,o;const{setting:i}=this.props,n=null===(t=null==i?void 0:i.effect)||void 0===t?void 0:t[e.AnimationTriggerType.ScrollIntoView],s=null===(o=null==i?void 0:i.oneByOneEffect)||void 0===o?void 0:o[e.AnimationTriggerType.ScrollIntoView];return n&&n.type!==e.AnimationType.None||s&&s.type!==e.AnimationType.None}render(){var t,o;const{formatMessage:n,isLayoutWidget:s,isSection:a,transitionType:l,transitionDirection:r,setting:d}=this.props,{animationType:u}=this.state,c=null===(t=null==d?void 0:d.effect)||void 0===t?void 0:t[e.AnimationTriggerType.ScrollIntoView],p=null===(o=null==d?void 0:d.oneByOneEffect)||void 0===o?void 0:o[e.AnimationTriggerType.ScrollIntoView];return(0,e.jsx)(ie.SettingSection,{role:"group","aria-label":n("animation"),title:n("animation")},a&&(0,e.jsx)(ie.SettingRow,null,(0,e.jsx)(i.AdvancedButtonGroup,{className:"w-100",css:e.css`
            border-bottom: 1px solid var(--primary-500);
            .jimu-btn {
              width: 50%;
              border-radius: 2px 2px 0 0;
            }
          `},(0,e.jsx)(i.Button,{active:"in"===u,onClick:this.switchToIn},n("in")),(0,e.jsx)(i.Button,{className:"ml-1",active:"transition"===u,onClick:this.switchToTransition},n("transition")))),"in"===u&&(0,e.jsx)(ie.SettingRow,{flow:"wrap",label:n("scrollIntoView")},(0,e.jsx)(nn.AnimationSettingComponent,{effectSetting:c,oneByOneSetting:p,onSettingChange:this.onEffectSettingChange,previewEnabled:!0,supportAsOne:!0,supportOneByOne:s,onPreviewClicked:this.previewAnimation,formatMessage:n})),"transition"===u&&(0,e.jsx)(ie.SettingRow,{flow:"wrap"},(0,e.jsx)(nn.TransitionSetting,{transition:{type:l,direction:r},transitionLabel:n("view"),oneByOneEffect:p,onOneByOneChange:this.onSectionOneByOneEffectSettingChange,onTransitionChange:this.onTransitionSettingChange,onPreviewTransitionClicked:this.previewTransition,onPreviewOneByOneClicked:this.previewOneByOneInSection,onPreviewAsAWhoneClicked:this.previewTransitionAndOnebyOne,formatMessage:n})))}}const an=e.ReactRedux.connect(((t,o)=>{var i,n,s,a,l,r,d;const u=null===(n=null===(i=t.appStateInBuilder)||void 0===i?void 0:i.appConfig)||void 0===n?void 0:n.layouts[o.layoutId].content[o.layoutItemId];let c,p,h,g=!1;const m=(null==u?void 0:u.type)===e.LayoutItemType.Section,f=(null==u?void 0:u.type)===e.LayoutItemType.Widget;if(f){const o=null===(s=t.appStateInBuilder)||void 0===s?void 0:s.appConfig.widgets[u.widgetId];g=(null===(a=null==o?void 0:o.manifest)||void 0===a?void 0:a.widgetType)===e.WidgetType.Layout}if(m){const e=null===(l=t.appStateInBuilder)||void 0===l?void 0:l.appConfig.sections[u.sectionId];h=e.id,c=null===(r=e.transition)||void 0===r?void 0:r.type,p=null===(d=e.transition)||void 0===d?void 0:d.direction}return{setting:u.setting,isLayoutWidget:g,isSection:m,isWidget:f,transitionType:c,transitionDirection:p,sectionId:h}}))(sn);class ln extends e.React.PureComponent{constructor(){super(...arguments),this.onBackgroundStyleChange=t=>{var o,i;let n=(0,e.Immutable)(null!==(i=null===(o=this.props.style)||void 0===o?void 0:o.background)&&void 0!==i?i:{});for(const e in t)switch(e){case"fillType":n.fillType!==t[e]&&(n=n.set("fillType",t[e]));break;case"color":n=n.set("color",t[e]);break;case"image":n=n.set("image",t[e])}this.updateStyle("background",n)},this.updateBorder=t=>{this.updateStyle("border",t)},this.updateRadius=t=>{this.updateStyle("borderRadius",t)},this.updateShadow=t=>{this.updateStyle("boxShadow",t)},this.formatMessage=t=>this.props.formatMessage(t)}updateStyle(t,o){var i;const n=(0,e.Immutable)(null!==(i=this.props.style)&&void 0!==i?i:{});this.props.onStyleChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItemId},n.set(t,o))}allowCoverBackground(){var t,i,n;const{layoutId:s,layoutItemId:a}=this.props,l=(0,o.getAppConfigAction)().appConfig,r=l.layouts[s].content[a];if(r.type===e.LayoutItemType.Widget){const e=r.widgetId;return null===(n=null===(i=null===(t=l.widgets[e])||void 0===t?void 0:t.manifest)||void 0===i?void 0:i.properties)||void 0===n?void 0:n.coverLayoutBackground}return!1}render(){const{layoutId:t,layoutItemId:o}=this.props,i=this.props.style||{};return(0,e.jsx)("div",{className:"common-layout-item-setting"},(0,e.jsx)(an,{layoutId:t,layoutItemId:o,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage}),!this.props.isSection&&!this.allowCoverBackground()&&(0,e.jsx)(ie.SettingSection,{title:this.formatMessage("background")},(0,e.jsx)(ie.SettingRow,{role:"group","aria-label":this.formatMessage("background")},(0,e.jsx)(nn.BackgroundSetting,{background:i.background,onChange:this.onBackgroundStyleChange}))),(0,e.jsx)(ie.SettingSection,{title:this.formatMessage("border"),role:"group","aria-label":this.formatMessage("border")},(0,e.jsx)(ie.SettingRow,{flow:"wrap"},(0,e.jsx)(nn.BorderSetting,{value:i.border,onChange:this.updateBorder})),(0,e.jsx)(ie.SettingRow,{label:this.formatMessage("borderRadius"),flow:"wrap"},(0,e.jsx)(nn.BorderRadiusSetting,{value:i.borderRadius,onChange:this.updateRadius}))),(0,e.jsx)(ie.SettingSection,{title:this.formatMessage("boxShadow")},(0,e.jsx)(ie.SettingRow,{flow:"wrap",role:"group","aria-label":this.formatMessage("boxShadow")},(0,e.jsx)(nn.BoxShadowSetting,{value:i.boxShadow,onChange:this.updateShadow}))))}}class rn extends e.React.PureComponent{constructor(){super(...arguments),this.updateRotation=t=>{var o;const i=(0,e.Immutable)(null!==(o=this.props.setting)&&void 0!==o?o:{});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItemId},i.setIn(["style","transform","rotate"],t))},this.formatMessage=t=>this.props.formatMessage(t)}render(){var t,o,n;const s=this.props.setting||{};return(0,e.jsx)(ie.SettingRow,{label:this.formatMessage("rotation"),className:"rotation-setting"},(0,e.jsx)(i.NumericInput,{"aria-label":this.formatMessage("rotation"),value:null!==(n=null===(o=null===(t=s.style)||void 0===t?void 0:t.transform)||void 0===o?void 0:o.rotate)&&void 0!==n?n:0,min:-360,max:360,onChange:this.updateRotation,formatter:t=>`${t}°`,parser:t=>t.replace("°",""),style:{width:"7.5rem"},size:"sm"}))}}var dn=c(2653),un=c.n(dn);const cn=t=>{const{className:o}=t,n=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o}(t,["className"]),s=(0,e.classNames)("jimu-icon-component",o);return e.React.createElement(i.Icon,Object.assign({className:s,icon:un()},n))},pn=[i.UnitTypes.PIXEL,i.UnitTypes.PERCENTAGE];class hn extends e.React.PureComponent{constructor(t){super(t),this.updateBBox=(t,e)=>{const o=this.props.layoutItem.bbox,{distance:n,unit:s}=e,l=o[t];let r=n.toFixed(2);if(a.utils.isPercentage(l)&&s===i.UnitTypes.PIXEL){const e=this.getSizeOfContainer();null!=e&&(r="left"===t||"right"===t||"width"===t?Math.round(parseFloat(l)*e.width/100):Math.round(parseFloat(l)*e.height/100))}else if(!a.utils.isPercentage(l)&&s===i.UnitTypes.PERCENTAGE){const e=this.getSizeOfContainer();null!=e&&(r="left"===t||"right"===t||"width"===t?(100*parseFloat(l)/e.width).toFixed(2):(100*parseFloat(l)/e.height).toFixed(2))}this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o.set(t,e.unit===i.UnitTypes.PERCENTAGE?`${r}%`:`${r}px`))},this.flipLeftRight=a.utils.isRTL()}getStyle(){return e.css`
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
    `}inputUnit(t){const{layoutItem:o,formatMessage:n}=this.props,s=i.utils.stringOfLinearUnit(o.bbox[t]);return(0,e.jsx)("div",{className:"pos-label",role:"group","aria-label":n(t)},(0,e.jsx)(nn.InputUnit,{units:pn,min:-1/0,max:1/0,value:s,onChange:e=>this.updateBBox(t,e)}))}getSizeOfContainer(){const t=this.querySelector(`div.fixed-layout[data-layoutid="${this.props.layoutId}"]`);return null==t?void 0:t.getBoundingClientRect()}getSizeOfItem(){const{layoutId:t,layoutItem:e}=this.props,o=this.querySelector(`div.exb-rnd[data-layoutid="${t}"][data-layoutitemid="${e.id}"]`);return null==o?void 0:o.getBoundingClientRect()}querySelector(t){var o;const i=document.querySelector(`iframe[name="${e.APP_FRAME_NAME_IN_BUILDER}"]`);return null!=i?(null!==(o=i.contentDocument)&&void 0!==o?o:i.contentWindow.document).querySelector(t):null}switchAuto(t,o,i){var n,s;const{layoutId:l,layoutItem:r}=this.props,d=null!==(n=r.setting)&&void 0!==n?n:(0,e.Immutable)({});let u=null!==(s=r.bbox)&&void 0!==s?s:(0,e.Immutable)({});if(i&&null==u[t]){const e=this.getSizeOfContainer(),o=this.getSizeOfItem();switch(t){case"left":u=u.set(t,a.utils.toRatio(o.left,e.width));break;case"right":u=u.set(t,a.utils.toRatio(e.width-o.right,e.width));break;case"top":u=u.set(t,a.utils.toRatio(o.top,e.height));break;case"bottom":u=u.set(t,a.utils.toRatio(e.height-o.bottom,e.height))}this.props.onPosChange({layoutId:l,layoutItemId:r.id},u)}this.props.onSettingChange({layoutId:l,layoutItemId:r.id},d.setIn(["autoProps",t],!i).setIn(["autoProps",o],i))}checkAutoProps(t){const e=Bo(this.props.layoutItem.bbox,t);return{leftAuto:null==e.left||t.hCenter&&"50%"===e.left,rightAuto:null==e.right||t.hCenter&&"50%"===e.left,topAuto:null==e.top||t.vCenter&&"50%"===e.top,bottomAuto:null==e.bottom||t.vCenter&&"50%"===e.top}}checkOrigin(t,e,o,i){let n=t,s=e,l=o,r=i;return t===e&&(n=a.utils.isRTL(),s=!n),o===i&&(l=!1,r=!0),{top:l,bottom:r,left:n,right:s}}allowChangeAutoProps(t){var e;const o=this.props.layoutItem.setting,i=null!==(e=null==o?void 0:o.autoProps)&&void 0!==e?e:{};return!(a.utils.getLayoutItemSizeMode(t,this.props.layoutItem.bbox,i)===a.LayoutItemSizeModes.Stretch||"width"===t&&(null==o?void 0:o.hCenter)||"height"===t&&(null==o?void 0:o.vCenter))}getOrigin(t,e,o,i){const{formatMessage:n}=this.props;return t||e?o||e?o||i?t||i?"":this.flipLeftRight?n("BR"):n("BL"):this.flipLeftRight?n("BL"):n("BR"):this.flipLeftRight?n("TL"):n("TR"):this.flipLeftRight?n("TR"):n("TL")}render(){const{layoutItem:t,widthMode:o,heightMode:n,formatMessage:l}=this.props;if(null==t)return null;const r=e.lodash.assign({},s,t.setting),{leftAuto:d,rightAuto:u,topAuto:c,bottomAuto:p}=this.checkAutoProps(r),{top:h,bottom:g,left:m,right:f}=this.checkOrigin(d,u,c,p),y=this.allowChangeAutoProps("width"),v=this.allowChangeAutoProps("height");return(0,e.jsx)("div",{css:this.getStyle(),className:"w-100"},(0,e.jsx)("div",{className:"position-setting rounded-lg"},(0,e.jsx)("div",{className:"content d-flex justify-content-center align-items-center"},(0,e.jsx)("div",{className:"d-flex w-half flex-column justify-content-center align-items-center"},(0,e.jsx)("div",{className:"d-flex w-100 justify-content-center align-items-center"},(0,e.jsx)(i.Tooltip,{placement:"bottom",title:y?l(d?"changeToCustom":"changeToAuto"):""},(0,e.jsx)("div",{className:(0,e.classNames)("from-left line-h flex-grow-1 flex-shrink-1",{"is-auto":d,"allow-change":y}),onClick:y?this.switchAuto.bind(this,"left","right",d):null})),d?null:this.inputUnit("left"))),(0,e.jsx)("div",{className:"d-flex h-100 flex-column justify-content-center align-items-center box-column"},(0,e.jsx)("div",{className:"d-flex h-half w-100 flex-column justify-content-center align-items-center"},(0,e.jsx)(i.Tooltip,{placement:"bottom",title:v?l(c?"changeToCustom":"changeToAuto"):""},(0,e.jsx)("div",{className:(0,e.classNames)("from-top line-v flex-grow-1 flex-shrink-1",{"is-auto":c,"allow-change":v}),onClick:v?this.switchAuto.bind(this,"top","bottom",c):null})),c?null:this.inputUnit("top")),(0,e.jsx)("div",{className:(0,e.classNames)("box-item rounded-lg",{stretch:o===a.LayoutItemSizeModes.Stretch||n===a.LayoutItemSizeModes.Stretch,"stretch-w":o===a.LayoutItemSizeModes.Stretch,"stretch-h":n===a.LayoutItemSizeModes.Stretch})},(0,e.jsx)("div",{className:"h-arrow"},(0,e.jsx)(cn,{className:"arrow-icon"})),(0,e.jsx)("div",{className:"v-arrow"},(0,e.jsx)(cn,{className:"arrow-icon",rotate:90}))),(0,e.jsx)("div",{className:"d-flex h-half w-100 flex-column justify-content-center align-items-center"},(0,e.jsx)(i.Tooltip,{placement:"bottom",title:v?l(p?"changeToCustom":"changeToAuto"):""},(0,e.jsx)("div",{className:(0,e.classNames)("from-bottom line-v flex-grow-1 flex-shrink-1",{"is-auto":p,"allow-change":v}),onClick:v?this.switchAuto.bind(this,"bottom","top",p):null})),p?null:this.inputUnit("bottom"))),(0,e.jsx)("div",{className:"d-flex w-half flex-column justify-content-center align-items-center"},(0,e.jsx)("div",{className:"d-flex w-100 justify-content-center align-items-center"},(0,e.jsx)(i.Tooltip,{placement:"bottom",title:y?l(u?"changeToCustom":"changeToAuto"):""},(0,e.jsx)("div",{className:(0,e.classNames)("from-right line-h flex-grow-1 flex-shrink-1",{"is-auto":u,"allow-change":y}),onClick:y?this.switchAuto.bind(this,"right","left",u):null})),u?null:this.inputUnit("right"))),(0,e.jsx)("div",{className:(0,e.classNames)("anchor top left",{selected:!m&&!h})}),(0,e.jsx)("div",{className:(0,e.classNames)("anchor top right",{selected:!f&&!h})}),(0,e.jsx)("div",{className:(0,e.classNames)("anchor bottom left",{selected:!m&&!g})}),(0,e.jsx)("div",{className:(0,e.classNames)("anchor bottom right",{selected:!g&&!f})}))),(0,e.jsx)("div",{className:"origin-tip d-flex justify-content-center align-item-center"},this.getOrigin(m,h,f,g)))}}const gn=t=>{const{className:o}=t,n=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o}(t,["className"]),s=(0,e.classNames)("jimu-icon-component",o);return e.React.createElement(i.Icon,Object.assign({className:s,icon:fo()},n))},mn=[a.LayoutItemSizeModes.Auto,a.LayoutItemSizeModes.Custom,a.LayoutItemSizeModes.Stretch],fn=[a.LayoutItemSizeModes.Custom,a.LayoutItemSizeModes.Stretch],yn=[...[Lo[1][1],Lo[1][2],Lo[1][3],Lo[1][4],{seperator:!0},Lo[0][1],Lo[0][2],Lo[0][3]].map((t=>Object.assign(Object.assign({},t),{title:t.title,label:null}))),[{icon:Ke()},Lo[0][4],Lo[0][5],Lo[0][6],{seperator:!0},Lo[0][7],Lo[0][8],Lo[0][9]]];class vn extends e.React.PureComponent{constructor(t){super(t),this.updateBBox=(t,e)=>{var o;let n=this.props.layoutItem.bbox;const{distance:s,unit:l}=e,r=n[t],d=this.getSizeOfContainer();let u,c=s.toFixed(2);if(a.utils.isPercentage(r)&&l===i.UnitTypes.PIXEL?d&&(c="left"===t||"right"===t||"width"===t?Math.round(parseFloat(r)*d.width/100):Math.round(parseFloat(r)*d.height/100),u=c):a.utils.isPercentage(r)||l!==i.UnitTypes.PERCENTAGE||(d&&(c="left"===t||"right"===t||"width"===t?(100*parseFloat(r)/d.width).toFixed(4):(100*parseFloat(r)/d.height).toFixed(4)),u=parseFloat(r)),u||l!==i.UnitTypes.PERCENTAGE)u||l!==i.UnitTypes.PIXEL||(u=s);else{const e="width"===t?d.width:d.height;u=Math.round(s*e/100)}if(n=n.set(t,l===i.UnitTypes.PERCENTAGE?`${c}%`:`${c}px`),"ratio"===(null===(o=this.props.layoutItem.setting)||void 0===o?void 0:o.heightMode)){const e=a.utils.parseAspectRatio(this.props.layoutItem.setting.aspectRatio);if("width"===t){const t=u*e;if(a.utils.isPercentage(n.height)){const e=(100*t/d.height).toFixed(4);n=n.set("height",`${e}%`)}else n=n.set("height",`${Math.round(t)}px`)}else{const t=u/e;if(a.utils.isPercentage(n.width)){const e=(100*t/d.width).toFixed(4);n=n.set("width",`${e}%`)}else n=n.set("width",`${Math.round(t)}px`)}}this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},n)},this.updateMode=(t,o)=>{var i;const n=null!==(i=this.props.layoutItem.setting)&&void 0!==i?i:(0,e.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},n.setIn(["autoProps",t],o))},this.updateLockParent=t=>{let o=this.props.layoutItem.setting||(0,e.Immutable)({});o=o.set("lockParent",t.target.checked),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)},this.toggleHeightMode=()=>{let t=this.props.layoutItem.setting||(0,e.Immutable)({});const o="ratio"===t.heightMode?"fixed":"ratio";if(t=t.set("heightMode",o),"ratio"===o){const e=this.getSizeOfItem();e&&(t=t.set("aspectRatio",Number((e.height/e.width).toFixed(2))))}this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},t)},this.updateAspectRatio=t=>{let o=this.props.layoutItem.setting||(0,e.Immutable)({});o=o.set("aspectRatio",t),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)},this.flipLeftRight=a.utils.isRTL(),this.state={enableToolbar:!1}}componentDidMount(){this.ref&&this.setState({enableToolbar:!0})}getSizeOfContainer(){const t=this.querySelector(`div.fixed-layout[data-layoutid="${this.props.layoutId}"]`);return t?t.getBoundingClientRect():null}getSizeOfItem(){const{layoutId:t,layoutItem:e}=this.props,o=this.querySelector(`div.exb-rnd[data-layoutid="${t}"][data-layoutitemid="${e.id}"]`);return o?o.getBoundingClientRect():null}querySelector(t){const o=document.querySelector(`iframe[name="${e.APP_FRAME_NAME_IN_BUILDER}"]`);return o?(o.contentDocument||o.contentWindow.document).querySelector(t):null}getStyle(){return e.css`
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
    `}render(){const{layoutItem:t,layoutId:o,formatMessage:n,isLockLayout:l,supportAutoSize:r}=this.props;if(!t)return null;this.itemSetting=e.lodash.assign({},s,t.setting);const d="ratio"===this.itemSetting.heightMode,u=a.utils.getLayoutItemSizeMode("width",t.bbox,this.itemSetting.autoProps),c=a.utils.getLayoutItemSizeMode("height",t.bbox,this.itemSetting.autoProps),p=t.bbox,h=(0,v.getTheme)(),g=e.css`width: 60%`;return(0,e.jsx)("div",{className:"fixed-item-setting",css:this.getStyle(),ref:t=>this.ref=t},!l&&this.state.enableToolbar&&(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)(ie.SettingSection,{className:"p-0 d-flex justify-content-center"},(0,e.jsx)(vt,{layoutId:o,layoutItem:t,parentRef:this.ref,theme:h,tools:yn,formatMessage:this.props.formatMessage})),(0,e.jsx)(ie.SettingSection,{role:"group","aria-label":`${n("size")} & ${n("position")}`,title:`${n("size")} & ${n("position")}`},(0,e.jsx)(ie.SettingRow,{role:"group","aria-label":n("width"),label:n("width")},(0,e.jsx)("div",{css:g},(0,e.jsx)(nn.SizeEditor,{label:"W",mode:u,sizeModes:r&&!d?mn:fn,value:i.utils.stringOfLinearUnit(p.width),onChange:t=>this.updateBBox("width",t),onModeChange:t=>this.updateMode("width",t)}))),u!==a.LayoutItemSizeModes.Auto&&(0,e.jsx)("div",{className:"ml-3 d-flex",css:e.css`
                    .icon {
                      cursor: pointer;
                      width: 12px;
                    }
                  `},(0,e.jsx)(i.Tooltip,{title:n("keepAspectRatio"),placement:"bottom"},(0,e.jsx)(i.Button,{size:"sm",type:"tertiary",icon:!0,onClick:this.toggleHeightMode},d?(0,e.jsx)(te,{size:"s"}):(0,e.jsx)(gn,{size:"s"})))),(0,e.jsx)(ie.SettingRow,{role:"group","aria-label":n("height"),label:n("height")},(0,e.jsx)("div",{css:g},(0,e.jsx)(nn.SizeEditor,{label:"H",mode:c,sizeModes:r?mn:fn,disabled:d,value:i.utils.stringOfLinearUnit(p.height),onChange:t=>this.updateBBox("height",t),onModeChange:t=>this.updateMode("height",t)}))),d&&(0,e.jsx)(ie.SettingRow,{label:n("aspectRatio")},(0,e.jsx)(nn.InputRatio,{value:this.itemSetting.aspectRatio,style:{width:"7.5rem"},onChange:this.updateAspectRatio})),(0,e.jsx)(ie.SettingRow,null,(0,e.jsx)(hn,Object.assign({},this.props,{widthMode:u,heightMode:c}))),(0,e.jsx)(rn,{layoutId:o,layoutItemId:t.id,setting:t.setting,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage})),(0,e.jsx)(ie.SettingSection,null,(0,e.jsx)(ie.SettingRow,{label:n("lockParent")},(0,e.jsx)(i.Switch,{"aria-label":n("lockParent"),checked:this.itemSetting.lockParent,onChange:this.updateLockParent})))),(t.widgetId||t.sectionId)&&(0,e.jsx)(ln,{layoutId:o,layoutItemId:t.id,style:this.props.style,isSection:t.type===e.LayoutItemType.Section,onStyleChange:this.props.onStyleChange,formatMessage:this.props.formatMessage,setting:t.setting||(0,e.Immutable)({}),onSettingChange:this.props.onSettingChange}))}}const In={gutter:0,style:{padding:{number:[0],unit:"px"},justifyContent:"flex-start",alignItems:"stretch",borderRadius:{number:[0],unit:i.UnitTypes.PIXEL}}},xn={lockParent:!0,heightMode:"auto",offsetX:0,offsetY:0};function bn(t){const e=parseFloat(null==t?void 0:t.width);return e>0?`${t.width}`.includes("px")?`${Math.round(e)}px`:`${Math.round(e)}%`:"100%"}const wn={[e.ScreenTransitionType.Push]:c(8830),[e.ScreenTransitionType.Fade]:c(3167),[e.ScreenTransitionType.Cover]:c(8830)};class Sn extends e.React.PureComponent{constructor(){super(...arguments),this.onTypeChanged=(t,e,o)=>{o?this.props.onPanelTransitionTypeChange(e):this.props.onTransitionTypeChange(e)},this.updateFirstPanel=t=>{}}getStyle(){return e.css`
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
    `}createAnimationCard(t,o,n=!1){const{transitionType:s,panelTransitionType:a}=this.props;let l;return l=n?null!=a?a:e.ScreenTransitionType.Push:null!=s?s:e.ScreenTransitionType.Fade,(0,e.jsx)("div",{className:(0,e.classNames)("d-flex flex-column align-items-center card-item",{selected:t===l}),key:o,onClick:e=>this.onTypeChanged(e,t,n)},(0,e.jsx)("div",{className:"d-flex justify-content-center card-content"},(0,e.jsx)("div",{className:"card-image"},(0,e.jsx)(i.Icon,{className:"w-100",currentColor:!1,icon:wn[t],size:72}))),(0,e.jsx)("div",{className:"card-name flex-grow-1 d-flex align-items-start mt-1"},(0,e.jsx)("span",{className:"text-center text-truncate card-name-content",title:this.props.formatMessage(t.toLowerCase())},this.props.formatMessage(t.toLowerCase()))))}render(){const{formatMessage:t}=this.props;return(0,e.jsx)("div",{className:"bg-light-300 border-color-gray-400",css:this.getStyle()},(0,e.jsx)(ie.SettingSection,{title:t("mainStage")},(0,e.jsx)("div",{className:"animation-cards"},[e.ScreenTransitionType.Fade,e.ScreenTransitionType.Cover,e.ScreenTransitionType.Push].map(((t,e)=>this.createAnimationCard(t,e))))),(0,e.jsx)(ie.SettingSection,{title:t("scrollingPanel")},(0,e.jsx)("div",{className:"animation-cards"},[e.ScreenTransitionType.Push,e.ScreenTransitionType.Fade].map(((t,e)=>this.createAnimationCard(t,e,!0))))),(0,e.jsx)(ie.SettingSection,null,(0,e.jsx)(ie.SettingRow,null,(0,e.jsx)(i.Checkbox,{onChange:this.updateFirstPanel,className:"mr-2"}),t("applyToFirstPanel"))))}}const Cn=c(325),Rn=c(9781);class Tn extends e.React.PureComponent{constructor(t){super(t),this.sidePopperTrigger=e.React.createRef(),this.onTransitionTypeChange=t=>{const{screenGroupId:e}=this.props.layoutItem;let i=(0,o.getAppConfigAction)().appConfig;i=i.setIn(["screenGroups",e,"transitionType"],t),(0,o.getAppConfigAction)(i).exec()},this.onPanelTransitionTypeChange=t=>{const{screenGroupId:e}=this.props.layoutItem;let i=(0,o.getAppConfigAction)().appConfig;i=i.setIn(["screenGroups",e,"panelTransitionType"],t),(0,o.getAppConfigAction)(i).exec()},this.toggleSidePanel=()=>{this.setState({showSidePanel:!this.state.showSidePanel})},this.state={showSidePanel:!1}}getAnimBoxStyle(){return e.css`
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
    `}render(){var t,o,n,s,a;const{formatMessage:l}=this.props,r=null!==(t=this.props.transitionType)&&void 0!==t?t:e.ScreenTransitionType.Fade,d=null!==(o=this.props.panelTransitionType)&&void 0!==o?o:e.ScreenTransitionType.Push;return(0,e.jsx)(ie.SettingSection,{title:l("transition")},(0,e.jsx)("div",{className:"anima-box d-flex justify-content-between align-items-center",css:this.getAnimBoxStyle()},(0,e.jsx)("div",{className:"img-tip d-flex justify-content-center align-items-center",onClick:this.toggleSidePanel},(0,e.jsx)("div",{className:"anim-icon first has-sibling"},(0,e.jsx)(i.Icon,{icon:null!==(n=wn[r])&&void 0!==n?n:Rn,size:32})),(0,e.jsx)("div",{className:"diag-sep"}),(0,e.jsx)("div",{className:"anim-icon second has-sibling"},(0,e.jsx)(i.Icon,{icon:null!==(s=wn[d])&&void 0!==s?s:Rn,size:32}))),(0,e.jsx)("div",{className:"d-flex flex-column justify-content-between align-items-end h-100"},(0,e.jsx)("div",{className:"anim-label"},(0,e.jsx)("span",null,l(r.toLowerCase())),(0,e.jsx)("span",{className:"mx-1"},"/"),(0,e.jsx)("span",null,l(d.toLowerCase()))),(0,e.jsx)("div",{className:"amin-icons w-100",ref:this.sidePopperTrigger},(0,e.jsx)(i.Button,{size:"sm",onClick:this.toggleSidePanel,className:"text-truncate",title:l("change")},l("change"))))),this.state.showSidePanel&&(0,e.jsx)(ie.SidePopper,{isOpen:!0,css:this.getSidePopperStyle(),position:"right",toggle:this.toggleSidePanel,trigger:null===(a=this.sidePopperTrigger)||void 0===a?void 0:a.current},(0,e.jsx)(ie.SettingSection,{className:"header d-flex justify-content-between align-items-center"},(0,e.jsx)("div",{className:"side-popper-title m-2"},l("transition")),(0,e.jsx)("div",{className:"clost-btn",title:l("close")},(0,e.jsx)(i.Button,{type:"tertiary",className:"p-0 d-flex justify-content-center align-items-center",onClick:this.toggleSidePanel},(0,e.jsx)(i.Icon,{icon:Cn,size:12})))),(0,e.jsx)("div",{className:"side-content"},(0,e.jsx)(Sn,{transitionType:r,panelTransitionType:d,onTransitionTypeChange:this.onTransitionTypeChange,onPanelTransitionTypeChange:this.onPanelTransitionTypeChange,formatMessage:l}))))}}const An=e.ReactRedux.connect(((t,e)=>{const{screenGroupId:o}=e.layoutItem,{appConfig:i}=t.appStateInBuilder;return{transitionType:i.screenGroups[o].transitionType,panelTransitionType:i.screenGroups[o].panelTransitionType}}))(Tn),Mn={width:110};class Pn extends e.React.PureComponent{constructor(){super(...arguments),this.updateWidth=t=>{let o=this.props.layoutItem.setting||(0,e.Immutable)({});o=o.set("width",i.utils.stringOfLinearUnit(t)),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)},this.updateBBoxWidth=t=>{let o=(0,e.Immutable)(this.props.layoutItem.bbox||{});o=o.set("width",i.utils.stringOfLinearUnit(t)),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)},this.updateHeight=t=>{let o=(0,e.Immutable)(this.props.layoutItem.bbox||{});o=o.set("height",i.utils.stringOfLinearUnit(t)),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)},this.updateOffsetX=t=>{const o=this.props.layoutItem.setting||(0,e.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o.set("offsetX",t))},this.updateOffsetY=t=>{const o=this.props.layoutItem.setting||(0,e.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o.set("offsetY",t))},this.updateHeightMode=t=>{let o=this.props.layoutItem.setting||(0,e.Immutable)({});o=o.set("heightMode",t===a.LayoutItemSizeModes.Custom?"fixed":"auto"),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)}}updateFloatingArea(t){const o=this.props.layoutItem.setting||(0,e.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o.set("floatingArea",t))}getStyle(){return e.css`
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
    `}render(){const{layoutId:t,layoutItem:o,formatMessage:n,isLockLayout:s}=this.props;if(!o)return null;if(o.type===e.LayoutItemType.ScreenGroup)return(0,e.jsx)(An,Object.assign({},this.props));this.itemSetting=e.lodash.assign({},xn,o.setting);const l=o.bbox;return(0,e.jsx)("div",{className:"flow-item-setting",css:this.getStyle()},!s&&(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)(ie.SettingSection,{title:`${n("position")} & ${n("size")}`},(0,e.jsx)("div",{className:"floating-position d-flex"},(0,e.jsx)("div",{className:"floating-area-chooser"},(0,e.jsx)("div",{className:"content"},(0,e.jsx)("div",{className:(0,e.classNames)("top-left",{selected:1===this.itemSetting.floatingArea}),onClick:this.updateFloatingArea.bind(this,1)}),(0,e.jsx)("div",{className:(0,e.classNames)("top-center",{selected:2===this.itemSetting.floatingArea}),onClick:this.updateFloatingArea.bind(this,2)}),(0,e.jsx)("div",{className:(0,e.classNames)("top-right",{selected:3===this.itemSetting.floatingArea}),onClick:this.updateFloatingArea.bind(this,3)}),(0,e.jsx)("div",{className:(0,e.classNames)("middle-left",{selected:4===this.itemSetting.floatingArea}),onClick:this.updateFloatingArea.bind(this,4)}),(0,e.jsx)("div",{className:(0,e.classNames)("middle-center",{selected:5===this.itemSetting.floatingArea}),onClick:this.updateFloatingArea.bind(this,5)}),(0,e.jsx)("div",{className:(0,e.classNames)("middle-right",{selected:6===this.itemSetting.floatingArea}),onClick:this.updateFloatingArea.bind(this,6)}),(0,e.jsx)("div",{className:(0,e.classNames)("bottom-left",{selected:7===this.itemSetting.floatingArea}),onClick:this.updateFloatingArea.bind(this,7)}),(0,e.jsx)("div",{className:(0,e.classNames)("bottom-center",{selected:8===this.itemSetting.floatingArea}),onClick:this.updateFloatingArea.bind(this,8)}),(0,e.jsx)("div",{className:(0,e.classNames)("bottom-right",{selected:9===this.itemSetting.floatingArea}),onClick:this.updateFloatingArea.bind(this,9)}))),(0,e.jsx)("div",{className:"d-flex flex-grow-1 flex-column justify-content-between align-items-end"},(0,e.jsx)("div",{className:"d-flex align-items-center",css:e.css`width: 110px`},(0,e.jsx)("span",{className:"mr-2"},"W"),(0,e.jsx)(nn.SizeEditor,{label:"W",mode:a.LayoutItemSizeModes.Custom,disableModeSelect:!0,value:null==l?void 0:l.width,onChange:this.updateBBoxWidth})),(0,e.jsx)("div",{className:"d-flex align-items-center",css:e.css`width: 110px`},(0,e.jsx)("span",{className:"mr-2"},"H"),(0,e.jsx)(nn.SizeEditor,{label:"H",mode:a.LayoutItemSizeModes.Custom,disableModeSelect:!0,value:null==l?void 0:l.height,onChange:this.updateHeight})))),(0,e.jsx)(ie.SettingRow,{label:n("offsetX")},(0,e.jsx)(i.NumericInput,{style:Mn,value:this.itemSetting.offsetX,onChange:this.updateOffsetX,size:"sm"})),(0,e.jsx)(ie.SettingRow,{label:n("offsetY")},(0,e.jsx)(i.NumericInput,{style:Mn,value:this.itemSetting.offsetY,onChange:this.updateOffsetY,size:"sm"})))),(o.widgetId||o.sectionId)&&(0,e.jsx)(ln,{layoutId:t,layoutItemId:o.id,isSection:!1,style:this.props.style,onStyleChange:this.props.onStyleChange,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage}))}}const Ln={width:110},zn=[a.LayoutItemSizeModes.Auto,a.LayoutItemSizeModes.Custom],jn=[i.UnitTypes.PIXEL];class Nn extends e.React.PureComponent{constructor(){super(...arguments),this.updateWidth=t=>{let o=this.props.layoutItem.setting||(0,e.Immutable)({});o=o.set("width",i.utils.stringOfLinearUnit(t)),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)},this.updateBBoxWidth=t=>{let o=(0,e.Immutable)(this.props.layoutItem.bbox||{});o=o.set("width",i.utils.stringOfLinearUnit(t)),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)},this.updateHeight=t=>{let o=(0,e.Immutable)(this.props.layoutItem.bbox||{});o=o.set("height",i.utils.stringOfLinearUnit(t)),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)},this.updateOffsetX=t=>{const o=this.props.layoutItem.setting||(0,e.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o.set("offsetX",t))},this.updateOffsetY=t=>{const o=this.props.layoutItem.setting||(0,e.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o.set("offsetY",t))},this.updateHeightMode=t=>{var o,i,n;const{layoutItem:s}=this.props;let l=null!==(o=s.setting)&&void 0!==o?o:(0,e.Immutable)({});if(l=l.set("heightMode",t===a.LayoutItemSizeModes.Custom?"fixed":"auto"),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},l),!(null===(i=s.bbox)||void 0===i?void 0:i.height)){const t=this.getSizeOfItem();if(t){let o=(0,e.Immutable)(null!==(n=s.bbox)&&void 0!==n?n:{});o=o.set("height",`${Math.round(t.height)}px`),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)}}}}getSizeOfItem(){const{layoutId:t,layoutItem:e}=this.props,o=this.querySelector(`div.exb-rnd[data-layoutid="${t}"][data-layoutitemid="${e.id}"]`);return o?o.getBoundingClientRect():null}querySelector(t){const o=document.querySelector(`iframe[name="${e.APP_FRAME_NAME_IN_BUILDER}"]`);return o?(o.contentDocument||o.contentWindow.document).querySelector(t):null}updateFloatingArea(t){const o=this.props.layoutItem.setting||(0,e.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o.set("floatingArea",t))}render(){var t,o;const{layoutId:n,layoutItem:s,formatMessage:l,isLockLayout:r}=this.props;if(!s)return null;if(s.type===e.LayoutItemType.ScreenGroup)return(0,e.jsx)(An,Object.assign({},this.props));if(this.itemSetting=e.lodash.assign({},xn,s.setting),this.itemSetting.isFloating)return(0,e.jsx)(Pn,Object.assign({},this.props));const d=s.bbox,u=i.utils.stringOfLinearUnit(bn(this.itemSetting)),c=i.utils.stringOfLinearUnit(parseFloat(null===(t=s.bbox)||void 0===t?void 0:t.height)>0?null===(o=s.bbox)||void 0===o?void 0:o.height:100),p="auto"===this.itemSetting.heightMode||a.utils.isPercentage(null==d?void 0:d.height);return(0,e.jsx)("div",{className:"flow-item-setting"},!r&&(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)(ie.SettingSection,{title:l("size")},(0,e.jsx)(ie.SettingRow,{label:l("width")},(0,e.jsx)("div",{style:Ln},(0,e.jsx)(nn.SizeEditor,{label:"W",mode:a.LayoutItemSizeModes.Custom,disableModeSelect:!0,value:u,onChange:this.updateWidth}))),(0,e.jsx)(ie.SettingRow,{label:l("height")},(0,e.jsx)("div",{style:Ln},(0,e.jsx)(nn.SizeEditor,{label:"H",mode:p?a.LayoutItemSizeModes.Auto:a.LayoutItemSizeModes.Custom,sizeModes:zn,availableUnits:jn,disableModeSelect:!1,value:c,onChange:this.updateHeight,onModeChange:this.updateHeightMode})))),(0,e.jsx)(ie.SettingSection,{title:l("position")},(0,e.jsx)(ie.SettingRow,{label:l("offsetX")},(0,e.jsx)(i.NumericInput,{style:Ln,value:this.itemSetting.offsetX,onChange:this.updateOffsetX,size:"sm"})),(0,e.jsx)(ie.SettingRow,{label:l("offsetY")},(0,e.jsx)(i.NumericInput,{style:Ln,value:this.itemSetting.offsetY,onChange:this.updateOffsetY,size:"sm"})))),(s.widgetId||s.sectionId)&&(0,e.jsx)(ln,{layoutId:n,layoutItemId:s.id,isSection:!1,style:this.props.style,onStyleChange:this.props.onStyleChange,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage}))}}const $n={width:"7.5rem"},kn=[a.LayoutItemSizeModes.Stretch,a.LayoutItemSizeModes.Custom],On=[a.LayoutItemSizeModes.Auto,a.LayoutItemSizeModes.Stretch,a.LayoutItemSizeModes.Custom],Bn=[a.LayoutItemSizeModes.Stretch,a.LayoutItemSizeModes.Custom],En=[i.UnitTypes.PIXEL,i.UnitTypes.PERCENTAGE],Dn=[i.UnitTypes.PIXEL];class Fn extends e.React.PureComponent{constructor(){super(...arguments),this.updateBBox=(t,e)=>{var o;let n=this.props.layoutItem.bbox;const{distance:s,unit:l}=e,r=n[t],d=this.getSizeOfContainer();let u,c=s.toFixed(2);if(a.utils.isPercentage(r)&&l===i.UnitTypes.PIXEL?d&&(c="left"===t||"right"===t||"width"===t?Math.round(parseFloat(r)*d.width/100):Math.round(parseFloat(r)*d.height/100),u=c):a.utils.isPercentage(r)||l!==i.UnitTypes.PERCENTAGE||(d&&(c="left"===t||"right"===t||"width"===t?(100*parseFloat(r)/d.width).toFixed(4):(100*parseFloat(r)/d.height).toFixed(4)),u=parseFloat(r)),u||l!==i.UnitTypes.PERCENTAGE)u||l!==i.UnitTypes.PIXEL||(u=s);else{const e="width"===t?d.width:d.height;u=Math.round(s*e/100)}if(n=n.set(t,l===i.UnitTypes.PERCENTAGE?`${c}%`:`${c}px`),"ratio"===(null===(o=this.props.layoutItem.setting)||void 0===o?void 0:o.heightMode)){const e=this.props.layoutItem.setting.aspectRatio;if("width"===t){const t=u*e;if(a.utils.isPercentage(n.height)){const e=(100*t/d.height).toFixed(4);n=n.set("height",`${e}%`)}else n=n.set("height",`${Math.round(t)}px`)}else{const t=u/e;if(a.utils.isPercentage(n.width)){const e=(100*t/d.width).toFixed(4);n=n.set("width",`${e}%`)}else n=n.set("width",`${Math.round(t)}px`)}}this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},n)},this.toggleHeightMode=()=>{let t=this.props.layoutItem.setting||(0,e.Immutable)({});const o="ratio"===t.heightMode?"fixed":"ratio";if(t=t.set("heightMode",o),"ratio"===o){const e=this.getSizeOfItem();e&&(t=t.set("aspectRatio",Number((e.height/e.width).toFixed(2))))}else{let t=this.props.layoutItem.bbox;const e=this.getSizeOfItem();if(a.utils.isPercentage(t.width)){const o=this.getSizeOfContainer();t=t.set("width",`${(100*e.width/o.width).toFixed(4)}%`)}else t=t.set("width",`${Math.round(e.width)}px`);t=t.set("height",`${Math.round(e.height)}px`),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},t)}this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},t)},this.updateAlignSelf=t=>{let o=this.props.layoutItem.setting||(0,e.Immutable)({});o=o.setIn(["style","alignSelf"],t.target.value),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)},this.updateHeightMode=t=>{const o=this.props.layoutItem.setting||(0,e.Immutable)({});let i=(0,e.Immutable)(this.props.layoutItem.bbox);if(t===a.LayoutItemSizeModes.Custom&&isNaN(parseFloat(i.height))){const t=this.getSizeOfItem();i=i.set("height",`${Math.round(t.height)}px`),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i)}this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o.setIn(["autoProps","height"],t))},this.updateWidthMode=t=>{const o=this.props.layoutItem.setting||(0,e.Immutable)({});let i=(0,e.Immutable)(this.props.layoutItem.bbox);if(t===a.LayoutItemSizeModes.Custom&&isNaN(parseFloat(i.width))){const t=this.getSizeOfItem();i=i.set("width",`${Math.round(t.width)}px`),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i)}this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o.setIn(["autoProps","width"],t))},this.updateAspectRatio=t=>{let o=this.props.layoutItem.setting||(0,e.Immutable)({});o=o.set("aspectRatio",t),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)},this.formatMessage=t=>this.props.formatMessage(t)}getSizeOfContainer(){const t=this.querySelector(`div.column-layout[data-layoutid="${this.props.layoutId}"]`);return t?t.getBoundingClientRect():null}getSizeOfItem(){const{layoutId:t,layoutItem:e}=this.props,o=this.querySelector(`div.exb-rnd[data-layoutid="${t}"][data-layoutitemid="${e.id}"]`);return o?o.getBoundingClientRect():null}querySelector(t){const o=document.querySelector(`iframe[name="${e.APP_FRAME_NAME_IN_BUILDER}"]`);return o?(o.contentDocument||o.contentWindow.document).querySelector(t):null}getStyle(){return e.css`
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
    `}render(){var t,o,n,s;const{layoutId:l,layoutItem:r,isLockLayout:d,supportAutoSize:u}=this.props;if(!r)return null;const c=r.setting||{},p=c.style||{},h=r.bbox||{},g=(null===(t=c.autoProps)||void 0===t?void 0:t.width)!==a.LayoutItemSizeModes.Custom,m=null!==(n=null===(o=c.autoProps)||void 0===o?void 0:o.height)&&void 0!==n?n:a.LayoutItemSizeModes.Custom,f="ratio"===c.heightMode;return(0,e.jsx)("div",{className:"column-item-setting",css:this.getStyle()},!d&&(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)(ie.SettingSection,{title:this.formatMessage("size")},(0,e.jsx)(ie.SettingRow,{label:this.formatMessage("width")},(0,e.jsx)("div",{style:$n},(0,e.jsx)(nn.SizeEditor,{label:"W",mode:g?a.LayoutItemSizeModes.Stretch:a.LayoutItemSizeModes.Custom,sizeModes:kn,value:null==h?void 0:h.width,availableUnits:En,onChange:t=>this.updateBBox("width",t),onModeChange:this.updateWidthMode}))),(0,e.jsx)("div",{className:"ml-3 d-flex",css:e.css`
                .icon {
                  cursor: pointer;
                  width: 12px;
                }
              `},(0,e.jsx)(i.Tooltip,{title:this.formatMessage("keepAspectRatio"),placement:"bottom"},(0,e.jsx)("div",{className:"icon",onClick:this.toggleHeightMode},f?(0,e.jsx)(te,{size:"s"}):(0,e.jsx)(gn,{size:"s"})))),(0,e.jsx)(ie.SettingRow,{label:this.formatMessage("height")},(0,e.jsx)("div",{style:$n},(0,e.jsx)(nn.SizeEditor,{label:"H",mode:m||a.LayoutItemSizeModes.Custom,sizeModes:u?On:Bn,value:h.height,availableUnits:Dn,onChange:t=>this.updateBBox("height",t),onModeChange:this.updateHeightMode,disabled:f}))),f&&(0,e.jsx)(ie.SettingRow,{label:this.formatMessage("aspectRatio")},(0,e.jsx)(nn.InputRatio,{value:c.aspectRatio,style:$n,onChange:this.updateAspectRatio})),!g&&(0,e.jsx)(ie.SettingRow,{label:this.formatMessage("align")},(0,e.jsx)(i.Select,{className:"align-select",value:null!==(s=p.alignSelf)&&void 0!==s?s:"flex-start",onChange:this.updateAlignSelf,style:$n},(0,e.jsx)("option",{value:"flex-start"},this.formatMessage("start")),(0,e.jsx)("option",{value:"flex-end"},this.formatMessage("end")),(0,e.jsx)("option",{value:"center"},this.formatMessage("center")))),(0,e.jsx)(rn,{layoutId:l,layoutItemId:r.id,setting:c,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage}))),(r.widgetId||r.sectionId)&&(0,e.jsx)(ln,{layoutId:l,layoutItemId:r.id,isSection:r.type===e.LayoutItemType.Section,style:this.props.style,onStyleChange:this.props.onStyleChange,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage}))}}const Vn={width:"7.5rem"},Hn=[a.LayoutItemSizeModes.Auto,a.LayoutItemSizeModes.Stretch,a.LayoutItemSizeModes.Custom],Wn=[a.LayoutItemSizeModes.Stretch,a.LayoutItemSizeModes.Custom];class Un extends e.React.PureComponent{constructor(){super(...arguments),this.handleAlignChange=t=>{this.updateStyle("alignSelf",t.target.value)},this.handleHeightChange=t=>{let e=this.props.layoutItem.bbox;const{distance:o,unit:n}=t,s=e.height,l=this.getSizeOfContainer();let r=o.toFixed(2);a.utils.isPercentage(s)&&n===i.UnitTypes.PIXEL?null!=l&&(r=Math.round(parseFloat(s)*l.height/100)):a.utils.isPercentage(s)||n!==i.UnitTypes.PERCENTAGE||null!=l&&(r=(100*parseFloat(s)/l.height).toFixed(4)),e=e.set("height",n===i.UnitTypes.PERCENTAGE?`${r}%`:`${r}px`),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},e)},this.handleHeightModeChange=t=>{var o;const i=null!==(o=this.props.layoutItem.setting)&&void 0!==o?o:(0,e.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i.setIn(["autoProps","height"],t))},this.updateAspectSetting=t=>{var o;let i=null!==(o=this.props.layoutItem.setting)&&void 0!==o?o:(0,e.Immutable)({});if("fit"===i.heightMode&&(i=i.setIn(["autoProps","height"],a.LayoutItemSizeModes.Stretch)),i=i.set("heightMode",t),"ratio"===t){const t=this.getSizeOfItem();null!=t&&(i=i.set("aspectRatio",Number((t.height/t.width).toFixed(2))))}else{const t=this.props.layoutItem.bbox,e=this.getSizeOfItem();if(a.utils.isPercentage(t.height)){const o=this.getSizeOfContainer();this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},t.set("height",`${(100*e.height/o.height).toFixed(4)}%`))}else this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},t.set("height",`${Math.round(e.height)}px`))}this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i)},this.handleAspectRatioChange=t=>{var o;let i=null!==(o=this.props.layoutItem.setting)&&void 0!==o?o:(0,e.Immutable)({});i=i.set("aspectRatio",t),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i)},this.handleOffsetXChange=t=>{var o;const i=null!==(o=this.props.layoutItem.setting)&&void 0!==o?o:(0,e.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i.set("offsetX",t))},this.handleOffsetYChange=t=>{var o;const i=null!==(o=this.props.layoutItem.setting)&&void 0!==o?o:(0,e.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i.set("offsetY",t))},this.formatMessage=t=>this.props.formatMessage(t)}updateStyle(t,o){var i,n;const{layoutItem:s}=this.props,a=(0,e.Immutable)(null!==(n=null===(i=null==s?void 0:s.setting)||void 0===i?void 0:i.style)&&void 0!==n?n:{});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},{style:a.set(t,o)})}getSizeOfContainer(){const t=this.querySelector(`div.row-layout[data-layoutid="${this.props.layoutId}"]`);return null!=t?t.getBoundingClientRect():null}getSizeOfItem(){const{layoutId:t,layoutItem:e}=this.props,o=this.querySelector(`div.exb-rnd[data-layoutid="${t}"][data-layoutitemid="${e.id}"] > div.layout-item-content`);return null!=o?o.getBoundingClientRect():null}querySelector(t){var o;const i=document.querySelector(`iframe[name="${e.APP_FRAME_NAME_IN_BUILDER}"]`);return null!=i?(null!==(o=i.contentDocument)&&void 0!==o?o:i.contentWindow.document).querySelector(t):null}getStyle(){return e.css`
      .align-select {
        .dropdown-button,
        .dropdown-button:hover {
          height: 26px;
        }
      }
    `}render(){var t,o,n,s;const{layoutId:l,layoutItem:r,isLockLayout:d,supportAutoSize:u}=this.props;if(null==r)return null;const c=e.lodash.assign({},Ri,r.setting),p=r.bbox,h=null!==(t=c.style)&&void 0!==t?t:{},g=null!==(n=null===(o=c.autoProps)||void 0===o?void 0:o.height)&&void 0!==n?n:a.LayoutItemSizeModes.Stretch,m="ratio"===c.heightMode;return(0,e.jsx)("div",{className:"row-item-setting",css:this.getStyle()},!d&&(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)(ie.SettingSection,{title:this.formatMessage("size")},(0,e.jsx)(ie.SettingRow,{label:this.formatMessage("height")},(0,e.jsx)("div",{style:Vn},(0,e.jsx)(nn.SizeEditor,{label:"H",mode:g,sizeModes:u?Hn:Wn,value:i.utils.stringOfLinearUnit(p.height),onChange:this.handleHeightChange,onModeChange:this.handleHeightModeChange,disabled:m}))),(0,e.jsx)(ie.SettingRow,null,(0,e.jsx)(i.Checkbox,{checked:m,onChange:t=>this.updateAspectSetting(t.target.checked?"ratio":"fixed"),className:"mr-2"}),this.formatMessage("keepAspectRatio")),m&&(0,e.jsx)(ie.SettingRow,{label:this.formatMessage("aspectRatio")},(0,e.jsx)(nn.InputRatio,{value:c.aspectRatio,style:Vn,onChange:this.handleAspectRatioChange})),g!==a.LayoutItemSizeModes.Stretch&&(0,e.jsx)(ie.SettingRow,{label:this.formatMessage("align")},(0,e.jsx)(i.Select,{className:"align-select",style:Vn,value:null!==(s=h.alignSelf)&&void 0!==s?s:"flex-start",onChange:this.handleAlignChange},(0,e.jsx)("option",{value:"flex-start"},this.formatMessage("T")),(0,e.jsx)("option",{value:"flex-end"},this.formatMessage("B")),(0,e.jsx)("option",{value:"center"},this.formatMessage("center"))))),(0,e.jsx)(ie.SettingSection,{title:this.formatMessage("position")},(0,e.jsx)(rn,{layoutId:l,layoutItemId:r.id,setting:r.setting,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage}),(0,e.jsx)(ie.SettingRow,{label:this.formatMessage("offsetX")},(0,e.jsx)(i.NumericInput,{style:Vn,value:c.offsetX,onChange:this.handleOffsetXChange,size:"sm"})),(0,e.jsx)(ie.SettingRow,{label:this.formatMessage("offsetY")},(0,e.jsx)(i.NumericInput,{style:Vn,value:c.offsetY,onChange:this.handleOffsetYChange,size:"sm"})))),(null!=r.widgetId||null!=r.sectionId)&&(0,e.jsx)(ln,{layoutId:l,layoutItemId:r.id,isSection:r.type===e.LayoutItemType.Section,style:this.props.style,onStyleChange:this.props.onStyleChange,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage}))}}const Gn={width:110};class _n extends e.React.PureComponent{constructor(){super(...arguments),this.updateSpace=t=>{const{layoutId:i,setting:n}=this.props,s=(0,e.Immutable)(n||{});isNaN(t.distance)||(0,o.getAppConfigAction)().editLayoutSetting({layoutId:i},s.set("gutter",t.distance)).exec()},this.updatePadding=t=>{const{layoutId:i,setting:n}=this.props,s=(0,e.Immutable)(n||{});(0,o.getAppConfigAction)().editLayoutSetting({layoutId:i},s.setIn(["style","padding"],t)).exec()}}render(){const{formatMessage:t}=this.props,o=this.props.setting||{},i=o.style||{},n=o.gutter>=0?o.gutter:In.gutter;return(0,e.jsx)(ie.SettingSection,{role:"group",className:"flow-layout-setting",title:t("layout"),"aria-label":t("layout")},(0,e.jsx)(ie.SettingRow,{label:t("gap")},(0,e.jsx)(nn.InputUnit,{style:Gn,"aria-label":t("gap"),min:0,value:{distance:n,unit:void 0},onChange:this.updateSpace})),(0,e.jsx)(ie.SettingRow,{flow:"wrap",role:"group",label:t("padding"),"aria-label":t("padding")},(0,e.jsx)(nn.Padding,{value:i.padding,onChange:this.updatePadding})))}}const Yn=e.ReactRedux.connect((function(t,e){var o,i,n,s;return{setting:null===(s=null===(n=null===(i=null===(o=t.appStateInBuilder)||void 0===o?void 0:o.appConfig)||void 0===i?void 0:i.layouts)||void 0===n?void 0:n[e.layoutId])||void 0===s?void 0:s.setting}}))(_n);class Zn{constructor(){this.id="flow-layout-transformer",this.layoutType=e.LayoutType.FlowLayout}transformLayout(t,o,i){if(o!==i&&i===e.BrowserSizeMode.Small){let o=(0,e.Immutable)(t);return(t.order||[]).forEach((t=>{o=o.setIn(["content",t,"setting","heightMode"],"auto")})),o}return t}transformLayoutItem(t,e,o,i,n,s){return{index:e,item:t}}}function Xn(t,o,i){var n;const s=function(t,e){return Object.keys(t.widgets).find((o=>{const i=t.widgets[o];if(i.layouts)return Object.keys(i.layouts).some((t=>void 0!==Object.keys(i.layouts[t]).find((o=>i.layouts[t][o]===e))))}))}(t,i),a=function(t,o,i){var n,s,a,l,r,d,u;const c=t.widgets[i];if(null!=c){const h=function(){var t;return window.jimuConfig.isBuilder?null===(t=(0,e.getAppStore)().getState().appStateInBuilder)||void 0===t?void 0:t.browserSizeMode:(0,e.getAppStore)().getState().browserSizeMode}(),g=t.mainSizeMode,m=c.layouts.DEFAULT[h],f=c.layouts.DEFAULT[g],y=(p=null!==(r=null===(l=null===(a=null===(s=(null!==(n=t.layouts[m])&&void 0!==n?n:t.layouts[f]).setting)||void 0===s?void 0:s.style)||void 0===a?void 0:a.padding)||void 0===l?void 0:l.number)&&void 0!==r?r:[0])&&0!==p.length?1===p.length?[p[0],p[0],p[0],p[0]]:2===p.length?[p[0],p[1],p[0],p[1]]:3===p.length?[p[0],p[1],p[2],0]:[p[0],p[1],p[2],p[3]]:[0,0,0,0],v=null!==(u=null===(d=null==o?void 0:o[i])||void 0===d?void 0:d.height)&&void 0!==u?u:0;let I=y[0],x=y[2];return zo(I)&&(I=No(I,v)),zo(x)&&(x=No(x,v)),v-I-x}var p;return 0}(t,o,s);if(a>0){const e=null!==(n=t.layouts[i].order)&&void 0!==n?n:[],o={};return e.forEach((e=>{const n=t.layouts[i].content[e];o[e]=function(t,e){var o,i,n,s;const a=null!==(o=e.setting)&&void 0!==o?o:{},l=ko("height",e.bbox,a.autoProps);if(l!==be.Custom)return{height:l===be.Stretch?t:null,setting:{autoProps:{height:l}}};let r;if("ratio"===a.heightMode)r={setting:{heightMode:"ratio",aspectRatio:null!==(i=a.aspectRatio)&&void 0!==i?i:1,autoProps:{height:be.Custom}}};else{let o=null!==(s=null===(n=e.bbox)||void 0===n?void 0:n.height)&&void 0!==s?s:t;o=zo(o)?No(o,t):parseInt(o),r={height:o,setting:{heightMode:"fixed",autoProps:{height:be.Custom}}}}return r}(a,n)})),o}return null}class qn{constructor(){this.id="row-layout-transformer",this.layoutType=e.LayoutType.RowLayout}transformLayout(t,o,i){var n,s;if(o===i)return t;let a=(0,e.Immutable)(t);if(i===e.BrowserSizeMode.Small){const o=Xn(function(){const t=(0,e.getAppStore)().getState();return window.jimuConfig.isBuilder?null==t?void 0:t.appStateInBuilder:t}().appConfig,null===(n=window.runtimeInfo)||void 0===n?void 0:n.widgets,t.id);let i=0;Object.keys(null!==(s=t.content)&&void 0!==s?s:{}).sort(((e,o)=>parseInt(t.content[e].bbox.left,10)-parseInt(t.content[o].bbox.left,10))).forEach((n=>{var s,l,r;const d=t.content[n];if(!d.isPending){if(a=a.setIn(["content",n,"bbox"],{left:i*Ti,width:Ti,height:null!==(l=null===(s=d.bbox)||void 0===s?void 0:s.height)&&void 0!==l?l:"auto"}),null!=o){const t=null!==(r=d.setting)&&void 0!==r?r:(0,e.Immutable)({});a=a.setIn(["content",n,"bbox","height"],o[n].height).setIn(["content",n,"setting"],t.merge(o[n].setting))}i+=1}}))}return a}transformLayoutItem(t,e,o,i,n,s){return{item:t,index:e}}}var Jn=function(t,e,o,i){return new(o||(o=Promise))((function(n,s){function a(t){try{r(i.next(t))}catch(t){s(t)}}function l(t){try{r(i.throw(t))}catch(t){s(t)}}function r(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,l)}r((i=i.apply(t,e||[])).next())}))};function Qn(t,i,n){return Jn(this,void 0,void 0,(function*(){const{appConfig:s,newWidgetId:l}=yield o.templateUtils.createWidgetFromTemplate((0,o.getAppConfigAction)().appConfig,n,null,{},!0),r=(0,o.getAppConfigAction)(s),d=(r.appConfig.layouts[t].order||[]).indexOf(i),u=(0,e.Immutable)({id:`${a.utils.getMaximumId(r.appConfig.layouts[t])+1}`,type:e.LayoutItemType.Widget,widgetId:l}),c=r.addItemIntoLayout(t,u,d>=0?d+1:NaN);return(0,e.getAppStore)().dispatch(e.appActions.layoutChanged(r.appConfig,Object.assign(Object.assign({},c),{autoScroll:!0}))),c}))}function Kn(t,i,n){return Jn(this,void 0,void 0,(function*(){const{appConfig:s,newScreenGroupId:l}=yield o.templateUtils.createScreenGroupFromTemplate((0,o.getAppConfigAction)().appConfig,n,null,{}),r=(0,o.getAppConfigAction)(s),d=(r.appConfig.layouts[t].order||[]).indexOf(i),u=(0,e.Immutable)({id:`${a.utils.getMaximumId(r.appConfig.layouts[t])+1}`,type:e.LayoutItemType.ScreenGroup,screenGroupId:l}),c=r.addItemIntoLayout(t,u,d>=0?d+1:NaN);return(0,e.getAppStore)().dispatch(e.appActions.layoutChanged(r.appConfig,Object.assign(Object.assign({},c),{autoScroll:!0}))),c}))}function ts(t,e){var i;const{layoutId:n,layoutItemId:s}=e,a=(0,o.getAppConfigAction)(t),l=a.appConfig.layouts[n],r=l.order,d=[].concat(r),u=r.indexOf(s);let c=r.length-1;for(let t=u+1;t<r.length;t++){const e=r[t];if(!(null===(i=l.content[e].setting)||void 0===i?void 0:i.isFloating)){c=t;break}}return d.splice(c+1,0,s),d.splice(u,1),a.editLayoutOrder({layoutId:n},d),a.appConfig}function es(t,e){var i;const{layoutId:n,layoutItemId:s}=e,a=(0,o.getAppConfigAction)(t),l=a.appConfig.layouts[n],r=l.order,d=[].concat(r),u=r.indexOf(s);let c=0;for(let t=u-1;t>=0;t--){const e=r[t];if(!(null===(i=l.content[e].setting)||void 0===i?void 0:i.isFloating)){c=t;break}}return d.splice(u,1),d.splice(c,0,s),a.editLayoutOrder({layoutId:n},d),a.appConfig}var os=c(8683),is=c.n(os),ns=c(760),ss=c.n(ns),as=c(6009),ls=c.n(as);class rs extends e.React.PureComponent{constructor(t){super(t),this.state={isResizing:!1,dh:0,showBlockTemplatePopup:!1,showScreenTemplatePopup:!1,referenceElem:null},this.onResizeStart=(t,e,o)=>{const{padding:i}=this.props;this.minHeight=16+i,this.initHeight=o,this.setState({dh:0,isResizing:!0})},this.onResizing=(t,e,o,i,n)=>{let s=n;n<0&&this.initHeight+n<this.minHeight&&(s=this.minHeight-this.initHeight),this.setState({dh:s,isResizing:!0})},this.onResizeEnd=(t,i,n,s,a,l)=>{const{layoutId:r,layoutItem:d}=this.props;let u=a;a<0&&this.initHeight+a<this.minHeight&&(u=this.minHeight-this.initHeight);const c=(0,e.Immutable)(d.bbox||{}).set("height",Math.round(this.initHeight+u));(0,o.getAppConfigAction)().editLayoutItemBBox({layoutId:r,layoutItemId:d.id},c).exec(),this.setState({isResizing:!1,dh:0})},this.toggleBlockTemplatePopup=()=>{this.setState({showBlockTemplatePopup:!this.state.showBlockTemplatePopup})},this.toggleScreenTemplatePopup=()=>{this.setState({showScreenTemplatePopup:!this.state.showScreenTemplatePopup})},this.removeLayoutItem=()=>{const{layoutId:t,layoutItemId:e}=this.props;(0,o.getAppConfigAction)().removeLayoutItem({layoutId:t,layoutItemId:e},!0).exec()},this.moveLayoutItemUp=()=>{const{layoutId:t,layoutItemId:e}=this.props,i=es((0,o.getAppConfigAction)().appConfig,{layoutId:t,layoutItemId:e});(0,o.getAppConfigAction)(i).exec()},this.moveLayoutItemDown=()=>{const{layoutId:t,layoutItemId:e}=this.props,i=ts((0,o.getAppConfigAction)().appConfig,{layoutId:t,layoutItemId:e});(0,o.getAppConfigAction)(i).exec()},this.switchSetting=()=>{const{layoutId:t,layoutItemId:o,selected:i}=this.props;i||(0,e.getAppStore)().dispatch(e.appActions.selectionChanged({layoutId:t,layoutItemId:o}))},this.onTemplateBlockSelected=t=>{Qn(this.props.layoutId,this.props.layoutItemId,t),this.setState({showBlockTemplatePopup:!1})},this.onTemplateScreenGroupSelected=t=>{Kn(this.props.layoutId,this.props.layoutItemId,t),this.setState({showScreenTemplatePopup:!1})},this.fakeTopLayouts=(0,e.Immutable)({[e.BrowserSizeMode.Large]:`${this.props.layoutId}_${this.props.layoutItemId}_tlarge`,[e.BrowserSizeMode.Medium]:`${this.props.layoutId}_${this.props.layoutItemId}_tmedium`,[e.BrowserSizeMode.Small]:`${this.props.layoutId}_${this.props.layoutItemId}_tsmall`}),this.fakeBottomLayouts=(0,e.Immutable)({[e.BrowserSizeMode.Large]:`${this.props.layoutId}_${this.props.layoutItemId}_blarge`,[e.BrowserSizeMode.Medium]:`${this.props.layoutId}_${this.props.layoutItemId}_bmedium`,[e.BrowserSizeMode.Small]:`${this.props.layoutId}_${this.props.layoutItemId}_bsmall`}),this.minHeight=0,this.contextMenus=[{icon:is(),title:this.props.formatMessage("insertABlock"),onClick:this.toggleBlockTemplatePopup,visible:()=>!q()},{icon:ss(),title:this.props.formatMessage("insertAScreenGroup"),onClick:this.toggleScreenTemplatePopup,visible:()=>!q()},ot,{icon:Z(),title:this.props.formatMessage("setting"),onClick:this.switchSetting},{icon:F(),title:this.props.formatMessage("dragToMove"),className:"tool-drag-handler",onClick:()=>{},visible:()=>!q()},{icon:ls(),onClick:this.moveLayoutItemUp,title:this.props.formatMessage("moveup"),visible:()=>!this.props.isFirst&&!q()},{icon:ls(),rotate:180,onClick:this.moveLayoutItemDown,title:this.props.formatMessage("movedown"),visible:()=>!this.props.isLast&&!q()},{icon:O(),title:this.props.formatMessage("delete"),onClick:this.removeLayoutItem,visible:()=>!q()}]}calHeight(t){if(this.state.isResizing)return`${this.initHeight+this.state.dh}px`;const{layoutItem:e}=this.props,o=e.bbox||{},i=a.utils.getValueOfBBox(o,"height");if(!i||a.utils.isPercentage(i))return"auto";switch(t.heightMode){case"auto":return"auto";case"fixed":return i}}createContextMenu(){const{builderTheme:t}=this.pageContext;return(0,e.jsx)(bt,{layoutId:this.props.layoutId,layoutItem:this.props.layoutItem,builderTheme:t,positionType:"center",size:28,iconSize:16,className:"widget-context-menu",menuItems:this.contextMenus},(0,e.jsx)("div",{ref:t=>{this.reference=t},css:e.css`position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;`}),this.state.showBlockTemplatePopup&&(0,e.jsx)(ie.TemplateSelector,{templates:(0,ai.getBlockTemplates)(),referenceElement:this.reference,onItemSelect:this.onTemplateBlockSelected,onClose:this.toggleBlockTemplatePopup}),this.state.showScreenTemplatePopup&&(0,e.jsx)(ie.TemplateSelector,{templates:(0,ai.getScreenGroupTemplates)(),referenceElement:this.reference,onItemSelect:this.onTemplateScreenGroupSelected,onClose:this.toggleScreenTemplatePopup}))}getStyle(t){const{builderTheme:o}=this.pageContext,{index:i,gutter:n}=this.props;return e.css`
      margin-top: ${i>0?`${n}px`:"unset"};
      width: ${bn(t)};
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
        background-color: ${o.colors.black};
      }

      .tool-drag-handler {
        cursor: move;
      }
    `}render(){const{layoutId:t,layoutItem:o,draggable:i,selectable:n,isEmpty:s,selected:l}=this.props;if(!o||s)return null;const r=e.lodash.assign({},xn,o.setting),d=(0,e.classNames)("flow-layout-item d-flex",{selected:l}),u=a.utils.handleOnebyOneAnimation(this.props);return(0,e.jsx)(a.PageContext.Consumer,null,(s=>(this.pageContext=s,(0,e.jsx)(Be,Object.assign({id:`${t}_block_${o.id}`,css:this.getStyle(r),layoutId:t,layoutItemId:o.id,onResizeStart:this.onResizeStart,onResizing:this.onResizing,onResizeEnd:this.onResizeEnd,left:!1,right:!1,top:!1,bottom:"fixed"===r.heightMode,restrict:!0,useDragHandler:!0,draggable:i,selectable:n,forbidContextMenu:!0,forbidToolbar:!0,isBlock:!0,className:d},u),!s.viewOnly&&this.createContextMenu()))))}}const ds=e.ReactRedux.connect((function(t,o){var n,s,a,l;let r=!0,d=!1;const{layoutItem:u}=o,c=null===(n=t.appRuntimeInfo)||void 0===n?void 0:n.selection;if(c&&(d=c.layoutId===o.layoutId&&c.layoutItemId===u.id),u.type===e.LayoutItemType.Widget){const e=u.widgetId,o=t.appConfig.widgets[e];let n=[0,0,0,0];if(o){n=i.styleUtils.expandStyleArray(null===(l=null===(a=null===(s=o.config)||void 0===s?void 0:s.style)||void 0===a?void 0:a.padding)||void 0===l?void 0:l.number);const e=Object.keys(o.layouts)[0],d=(p=o.layouts[e],h=t.browserSizeMode,g=t.appConfig.mainSizeMode,p?p[h]||p[g]:null),u=t.appConfig.layouts[d];u&&Object.keys(u.content||[]).length>0&&Object.keys(u.content||[]).some((t=>{if(!u.content[t].isPending)return r=!1,!0}))}return{isEmpty:r,selected:d,padding:n[0]+n[2]}}var p,h,g;return{selected:d,isEmpty:!1,padding:0}}))(rs);class us extends e.React.PureComponent{constructor(){super(...arguments),this.state={isResizing:!1,dx:0,dy:0,dw:0,dh:0},this.onResizeStart=(t,e,o)=>{this.setState({isResizing:!0}),this.initHeight=o,this.initWidth=e},this.onResizing=(t,e,o,i,n)=>{this.setState({dx:e,dy:o,dw:i,dh:n})},this.onResizeEnd=(t,e,i,n,s,a)=>{const{layoutId:l,layoutItem:r}=this.props;let d=r.bbox;d=d.set("height",Math.round(parseInt(d.height,10)+s)).set("width",Math.round(parseInt(d.width,10)+n)).set("left",Math.round(parseInt(d.left,10)+e)).set("top",Math.round(parseInt(d.top,10)+i)).set("bottom",Math.round(parseInt(d.top,10)-s+i)),(0,o.getAppConfigAction)().editLayoutItemBBox({layoutId:l,layoutItemId:r.id},d).exec(),this.setState({isResizing:!1,dx:0,dy:0,dw:0,dh:0})}}calculatePosition(){const{layoutItem:t}=this.props,{dh:o,dw:i,isResizing:n}=this.state;return function(t,o={}){var i,n,s;const a=t.setting,l=null!==(i=null==a?void 0:a.floatingArea)&&void 0!==i?i:1,r=`${null!==(n=null==a?void 0:a.offsetX)&&void 0!==n?n:0}px`,d=`${null!==(s=null==a?void 0:a.offsetY)&&void 0!==s?s:0}px`,{dh:u,dw:c,initWidth:p,initHeight:h,isResizing:g}=o,m=$o()?`translateX(calc(50% + ${r}))`:`translateX(calc(-50% + ${r}))`,f={};switch(l){case 1:f.left=r,f.top=d,f.transform=null;break;case 2:f.left="50%",f.top=d,f.transform=m;break;case 3:f.right=r,f.top=d,f.transform=null;break;case 4:f.left=r,f.top="50%",f.transform=`translateY(calc(-50% + ${d}))`;break;case 5:f.left="50%",f.top="50%",f.transform=`${m} translateY(calc(-50% + ${d}))`;break;case 6:f.right=r,f.top="50%",f.transform=`translateY(calc(-50% + ${d}))`;break;case 7:f.left=r,f.bottom=d,f.transform=null;break;case 8:f.left="50%",f.bottom=d,f.transform=m;break;case 9:f.right=r,f.bottom=d,f.transform=null}return e.css`
    position: fixed;
    z-index: 1;
    width: ${g?`${p+c}px`:jo(t.bbox,"width")};
    height: ${g?`${h+u}px`:jo(t.bbox,"height")};
    left: ${f.left};
    right: ${f.right};
    top: ${f.top};
    bottom: ${f.bottom};
    transform: ${f.transform};
  `}(t,{dh:o,dw:i,isResizing:n,initWidth:this.initWidth,initHeight:this.initHeight})}render(){const{layoutId:t,layoutItem:o,selectable:i,selected:n}=this.props;if(!o)return null;const s=(0,e.classNames)("flexbox-layout-item floating d-flex",{selected:n});return(0,e.jsx)(a.PageContext.Consumer,null,(n=>(this.pageContext=n,(0,e.jsx)(Be,{css:this.calculatePosition(),layoutId:t,layoutItemId:o.id,onResizeStart:this.onResizeStart,onResizing:this.onResizing,onResizeEnd:this.onResizeEnd,restrict:!0,draggable:!1,selectable:i,className:s}))))}}const cs=e.ReactRedux.connect(a.utils.mapStateToLayoutItemProps)(us),ps=(0,v.withBuilderTheme)((function(t){const{formatMessage:n,activeScreenIndex:s,total:a,theme:l,layoutId:r,layoutItemId:d,screenGroupId:u,browserSizeMode:c,hasPanel:p}=t,h=!e.ReactRedux.useSelector((t=>{var o,i,n;const s=null!==(i=null===(o=t.appConfig.forBuilderAttributes)||void 0===o?void 0:o.lockLayout)&&void 0!==i&&i;return(null===(n=t.appRuntimeInfo)||void 0===n?void 0:n.appMode)===e.AppMode.Design&&!s}))||c!==e.BrowserSizeMode.Large,[g,m]=e.React.useState(!1),f=e.React.useRef(),y=e.React.useCallback((()=>{m(!1)}),[]),v=e.React.useCallback((()=>e.css`
      border: none;

      .tooltip {
        color: ${l.colors.black};
        background-color: ${l.colors.palette.light[600]};
        border-color: ${l.colors.palette.light[300]};
      }
    `),[l]),I=e.React.useCallback((t=>{let i=(0,o.getAppConfigAction)();const n=i.appConfig.layouts[r].content[d].screenGroupId;o.templateUtils.createScreenFromTemplate(i.appConfig,t,null,{}).then((({appConfig:t,newScreenId:s})=>{const a=t.screenGroups[n].screens[0],l=t.screens[a],r=Object.keys(l.main.layout);let d=t.screens[s];const u=t.mainSizeMode;i=(0,o.getAppConfigAction)(t),r.forEach((t=>{if(null==d.main.layout[t]){const e=i.createLayoutForSizeModeForOneLayout(t,u,d.main.layout);d=d.setIn(["main","layout",t],e.id)}if(d.panel&&null==d.panel.layout[t]){const e=i.createLayoutForSizeModeForOneLayout(t,u,d.panel.layout);d=d.setIn(["panel","layout",t],e.id)}})),t=(t=i.appConfig).setIn(["screenGroups",n,"screens"],[].concat(t.screenGroups[n].screens,s)).setIn(["screens",s],d),(0,e.getAppStore)().dispatch(e.appActions.appConfigChanged(t)),(0,e.getAppStore)().dispatch(e.appActions.screenGroupNavInfoChanged(n,t.screenGroups[n].screens.length-1))})),y()}),[y,r,d]),x=e.React.useCallback((()=>{if(p)m(!g);else{const t=(0,ai.getScreenTemplates)().find((t=>"nopanel"===t.name));t&&I(t)}}),[g,p,I]),b=e.React.useCallback((()=>{(0,e.getAppStore)().dispatch(e.appActions.screenGroupNavInfoChanged(u,s-1))}),[u,s]),w=e.React.useCallback((()=>{(0,e.getAppStore)().dispatch(e.appActions.screenGroupNavInfoChanged(u,s+1))}),[u,s]),S=e.React.useCallback((()=>{(0,o.getAppConfigAction)().removeScreenByIndex(s,u).exec(),s===a-1&&(0,e.getAppStore)().dispatch(e.appActions.screenGroupNavInfoChanged(u,s-1))}),[s,a,u]),C=e.React.useCallback((()=>{const t=(0,o.getAppConfigAction)();t.duplicateScreenByIndex(s,u),t.exec(),(0,e.getAppStore)().dispatch(e.appActions.screenGroupNavInfoChanged(u,s+1))}),[s,u]);return(0,e.jsx)("div",{className:"menu-bar d-flex justify-content-between align-items-center"},(0,e.jsx)("div",{className:"d-flex justify-content-start align-items-center"},(0,e.jsx)("div",{className:"info ml-2"},n("screen"),": ",s+1," / ",a),(0,e.jsx)(i.Tooltip,{title:0===s?"":n("previous"),placement:"bottom",css:v()},(0,e.jsx)(i.Button,{icon:!0,className:"rounded-circle",disabled:0===s,type:"tertiary",onClick:b},(0,e.jsx)(i.Icon,{icon:ls(),size:16}))),(0,e.jsx)(i.Tooltip,{title:s===a-1?"":n("next"),placement:"bottom",css:v()},(0,e.jsx)(i.Button,{icon:!0,className:"rounded-circle",disabled:s===a-1,type:"tertiary",onClick:w},(0,e.jsx)(i.Icon,{icon:ls(),rotate:180,size:16}))),!h&&(0,e.jsx)("div",{ref:f},(0,e.jsx)(i.Tooltip,{title:n("addScreen"),placement:"bottom",css:v()},(0,e.jsx)(i.Button,{icon:!0,onClick:x,className:"rounded-circle",type:"tertiary","data-testid":"addBtn"},(0,e.jsx)(i.Icon,{icon:Dt(),size:16})))),!h&&g&&(0,e.jsx)(ie.TemplateSelector,{templates:(0,ai.getScreenTemplates)(),referenceElement:f.current,onItemSelect:I,onClose:y}),!h&&(0,e.jsx)(i.Tooltip,{title:n("duplicateScreen"),placement:"bottom",css:v()},(0,e.jsx)(i.Button,{icon:!0,className:"rounded-circle",type:"tertiary",onClick:C,"data-testid":"duplicateBtn"},(0,e.jsx)(i.Icon,{icon:Vt(),size:16}))),!h&&a>1&&(0,e.jsx)(i.Tooltip,{title:n("deleteScreen"),placement:"bottom",css:v()},(0,e.jsx)(i.Button,{icon:!0,className:"rounded-circle",type:"tertiary",onClick:S,"data-testid":"removeBtn"},(0,e.jsx)(i.Icon,{icon:O(),size:16})))))}));function hs(){const t=[0];for(let e=1;e<=100;e++)t.push(e/100);return t}function gs(t){switch(t){case e.ScreenTriggerType.Top:return"0% 0% -98% 0%";case e.ScreenTriggerType.Bottom:return"-98% 0% -2px 0%";case e.ScreenTriggerType.Upper:return`-${100/3-1}% 0% -${200/3-1}% 0%`;case e.ScreenTriggerType.Lower:return`-${200/3-1}% 0% -${100/3-1}% 0%`;default:return}}const ms=.33,fs=.25;function ys(t,o,n,s,a,l,r,d,u){const{side:c,size:p,offset:h,background:g,overlay:m=!0,padding:f}=t.panel||{},y=(0,e.getAppStore)().getState().appContext.isRTL?"left"===c?"-":"":"right"===c?"-":"",v=i.styleUtils.toBackgroundEmotionStyle(null!=g?g:{}),I=parseFloat(a);if(u){const t=!m;return e.css`
      width: 100%;
      background: transparent;
      pointer-events: none;
      position: relative;
      opacity: ${r===e.ScreenTransitionType.Fade?s?"1":"0.5":null};
      min-height: ${d===e.ScreenTransitionType.Cover?`${o}px`:null};
      padding-top: ${d!==e.ScreenTransitionType.Fade&&t?`${Math.round(o*ms)}px`:null};

      &.top-spacing > .panel-content {
        /* margin-top: ${Math.round(o*ms)}px; */
      }

      .panel-content {
        width: 100%;
        ${m?"":v};
        /* margin-top: ${r===e.ScreenTransitionType.Push?"${Math.round(viewHeight * SCREEN_RATIO_IN_SMALL_SIZE)}px":"unset"}; */

        > .layout, > .layout-wrapper > .layout {
          pointer-events: auto;
          ${m?v:""};
          min-height: ${Math.round(o*fs)}px;
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
        min-height: ${Math.round(o*fs)}px;
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
      min-height: ${l?o:Math.round(o*fs)}px;
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
  `}var vs=c(5467),Is=c.n(vs);const xs=t=>{const{className:o}=t,n=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o}(t,["className"]),s=(0,e.classNames)("jimu-icon-component",o);return e.React.createElement(i.Icon,Object.assign({className:s,icon:Is()},n))};function bs(t){const{rootLayoutId:o,viewHeight:n,headerHeight:s,screenId:a,isActive:l,isAbsolute:r,isLast:d,isSmallSize:u,layoutEntry:c,isDesignMode:p,formatMessage:h,builderTheme:g}=t,m=e.ReactRedux.useSelector((t=>t.appConfig.screens[a])),f=e.ReactRedux.useSelector((t=>{var e,o,i;return null===(i=null===(o=null===(e=t.appRuntimeInfo)||void 0===e?void 0:e.screenPanelStates)||void 0===o?void 0:o[a])||void 0===i||i})),{main:y}=m,{side:v,size:I,overlay:x=!0}=m.panel||{},b=e.React.useRef(),w=e.React.useCallback((()=>{(0,e.getAppStore)().dispatch(e.appActions.screenPanelVisibleChanged(a,!0))}),[a]),S=(0,e.classNames)("screen-main-panel",{"is-active":l,"last-one":d});return(0,e.jsx)(wt.Provider,{value:!r||l},(0,e.jsx)("div",{id:`${o}_screen_${a}`,className:S,css:function(){var t,o,a,l;if(u){const a=!x&&null!=m.panel,l=a?`${Math.round(n*ms)}px`:`${n}px`,r=a?`${Math.round(33)}`:"100";return e.css`
        pointer-events: none !important;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: ${n}px;

        > .layout {
          ${i.styleUtils.toBackgroundEmotionStyle(null!==(o=null===(t=m.main)||void 0===t?void 0:t.background)&&void 0!==o?o:{})};
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
      `}let d="0px",c="0px";"none"!==v&&(x||"right"===v||(d=I),x||"right"!==v||(c=I));const p=g?e.css`
      color: ${g.colors.palette.dark[900]};
      background-color: ${g.colors.palette.light[400]};
      border-color: ${g.colors.palette.light[600]};
      &:hover {
        color: ${g.colors.black};
        background-color: ${g.colors.palette.light[600]};
      }
    `:null;return e.css`
      ${i.styleUtils.toBackgroundEmotionStyle(null!==(l=null===(a=m.main)||void 0===a?void 0:a.background)&&void 0!==l?l:{})};
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
    `}(),ref:b,"data-screenid":a,"data-index":t.index},(0,e.jsx)(c,{layouts:y.layout,isInWidget:!0}),(0,e.jsx)("div",{className:"spacing-area"}),p&&!f&&(0,e.jsx)("div",{className:"toggle-visible-btn",onClick:w,"data-testid":"toggleBtn"},(0,e.jsx)(i.Tooltip,{placement:"auto",title:h("showInDesignView")},(0,e.jsx)(i.Button,{type:"default",size:"sm",className:"rounded"},(0,e.jsx)(xs,{size:"m"}))))))}function ws(t,o,i,n,s){return t===e.ScreenTransitionType.Fade?e.css`
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
    `:void 0}function Ss(t,o,i){return t===e.ScreenTransitionType.Fade?e.css`
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
    `:void 0}function Cs(t){const{rootLayoutId:o,activeIndex:i,viewHeight:n,headerHeight:s,screens:a,transitionType:l,isSmallSize:r,layoutEntry:d,isDesignMode:u,formatMessage:c,builderTheme:p}=t;return(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)("div",{className:"screen-container",css:ws(l,n,s,r,a.length)},a.map(((t,h)=>(0,e.jsx)(bs,{key:t,rootLayoutId:o,index:h,isActive:i===h,screenId:t,viewHeight:n,headerHeight:s,isAbsolute:l===e.ScreenTransitionType.Fade,isLast:h===a.length-1,isSmallSize:r,layoutEntry:d,isDesignMode:u,formatMessage:c,builderTheme:p})))),(0,e.jsx)("div",{className:"screen-placeholder",css:Ss(l,n)}))}const Rs=e.css`
  width: 36px;
  height: 36px;
  padding: 0.5rem;
`,Ts=e.css`
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  background: transparent;
`;function As(t){return e.css`
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
  `}function Ms(t){const{layouts:n,builderTheme:s}=t,l=e.ReactRedux.useSelector((t=>n[t.browserSizeMode]||n[t.appConfig.mainSizeMode])),[r,d]=e.React.useState(!1),u=e.React.useRef(null),c=e.React.useCallback((t=>{R((0,o.getAppConfigAction)().appConfig,t,{layoutId:l},{width:100,height:100},{left:0,top:0}).then((({layoutInfo:t,updatedAppConfig:o})=>{(0,e.getAppStore)().dispatch(e.appActions.layoutChanged(o,t))})),d(!1)}),[l]),p=e.React.useCallback(((t,i,n)=>{R((0,o.getAppConfigAction)().appConfig,t,{layoutId:l},i,n).then((({layoutInfo:t,updatedAppConfig:o})=>{(0,e.getAppStore)().dispatch(e.appActions.layoutChanged(o,t))}))}),[l]),h=e.React.useCallback((t=>!t.layoutInfo||t.layoutInfo.layoutId!==l),[l]);return(0,e.jsx)(a.LayoutContext.Provider,{value:{isItemAccepted:h}},(0,e.jsx)("div",{className:"placeholder-btn w-100 justify-content-center align-items-center",css:As(s)},(0,e.jsx)(ae,{css:Ts,layouts:n,onDrop:p}),(0,e.jsx)("div",{className:"action-item",ref:u},(0,e.jsx)(i.Button,{icon:!0,css:Rs,onClick:t=>{t.stopPropagation(),d(!r)}},(0,e.jsx)(le,{size:"m"}))),r&&(0,e.jsx)(ie.WidgetListPopper,{builderTheme:s,referenceElement:u.current,isItemAccepted:h,onItemSelect:c,onClose:()=>{d(!1)}})))}var Ps=c(9775),Ls=c.n(Ps);const zs=t=>{const{className:o}=t,n=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o}(t,["className"]),s=(0,e.classNames)("jimu-icon-component",o);return e.React.createElement(i.Icon,Object.assign({className:s,icon:Ls()},n))},js=e.spring.animated;function Ns(t,o,i,n,s,a,l,r,d,u,c,p,h){const{side:g,size:m}=t.panel||{},f=e.css`
    color: ${c.colors.palette.dark[900]};
    background-color: ${c.colors.palette.light[400]};
    border-color: ${c.colors.palette.light[600]};
    &:hover {
      color: ${c.colors.black};
      background-color: ${c.colors.palette.light[600]};
    }
  `;return d?e.css`
      ${ys(t,o,i,n,s,a,l,r,d)};

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
    ${ys(t,o,i,n,s,a,l,r,d)};

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
  `}function $s(t){const{index:n,screenId:s,onInterctionChange:r,onHeightChange:d,builderTheme:u,viewHeight:c,headerHeight:p,layoutEntry:h,isActive:g,isSmallSize:m,isDesignMode:f,transitionType:y,screenTransitionType:v,triggerType:I,stretched:x,viewOnly:b,verticalSpace:w="0",useAnimation:S=!0,formatMessage:C}=t,R=e.ReactRedux.useSelector((t=>t.appConfig.screens[s])),T=e.ReactRedux.useSelector((t=>{var e,o,i;return null===(i=null===(o=null===(e=t.appRuntimeInfo)||void 0===e?void 0:e.screenPanelStates)||void 0===o?void 0:o[s])||void 0===i||i})),{panel:A}=R,M=e.React.useRef(),P=e.React.useRef(),L=e.React.useRef(),[z,j]=e.React.useState(!1),[N,$]=e.React.useState(0),k=e.React.useRef(T),O=e.React.useRef(f),B=e.React.useRef(),E=e.React.useMemo((()=>{if(A&&A.overlay&&Math.abs(parseFloat(A.offset))>0){const t=(0,e.getAppStore)().getState().appContext.isRTL?"left"===A.side?-1:1:"right"===A.side?-1:1;return parseFloat(A.offset)*t}return 0}),[A]),[D,F]=e.spring.useSpring((()=>({opacity:1,x:0,y:0}))),V=e.React.useCallback(((t,e)=>{B.current=e,j(!0),$(0)}),[]),H=e.React.useCallback(((t,e,o,i,n)=>{$(i)}),[]),W=e.React.useCallback(((t,e,i,n,l)=>{!function(t,e){var i;const n=(0,o.getAppConfigAction)();let s,l=n.appConfig.screens[t];s=a.utils.isPercentage(null===(i=l.panel)||void 0===i?void 0:i.size)?a.utils.toRatio(e,document.body.clientWidth):`${Math.round(e)}px`,l=l.setIn(["panel","size"],s),n.editScreen(l).exec()}(s,B.current+n),j(!1)}),[s]);e.React.useEffect((()=>{O.current!==f&&(O.current=f,f?k.current?F({opacity:1,x:0,y:0,immediate:!0,onRest:null}):F({opacity:0,immediate:!0,onRest:null}):F({opacity:1,x:0,y:0,immediate:!0,onRest:null}))}),[f,F]),e.React.useEffect((()=>{if(!L.current&&P.current)return L.current=(0,l.interact)(P.current),gt(L.current,{layoutItemId:s,onResizeStart:V,onResizing:H,onResizeEnd:W}),()=>{L.current&&(L.current.unset(),L.current=null)}}),[s,V,H,W]);const U=e.React.useCallback((t=>{r(n,t)}),[n,r]),G=e.React.useCallback(((t,e)=>{d(n,e)}),[n,d]),_=e.React.useCallback((t=>{const o=t.target.getBoundingClientRect(),i=M.current.getBoundingClientRect(),n=(0,e.getAppStore)().getState().appContext.isRTL;M.current.classList.add("minimized"),F({opacity:0,size:0,x:n?i.left-o.left:i.right-o.right,y:i.bottom-o.bottom,immediate:!S,onRest:()=>{k.current=!1,(0,e.getAppStore)().dispatch(e.appActions.screenPanelVisibleChanged(s,!1))}})}),[F,s,S]),Y=e.React.useCallback((()=>{M.current.classList.remove("minimized"),F({opacity:1,size:1,x:0,y:0,immediate:!S,onRest:null})}),[F,S]);e.React.useEffect((()=>{k.current!==T&&T&&(Y(),k.current=T)}),[T,Y]),function(t,o,i,n){const s=e.React.useRef(),a=e.React.useRef();e.React.useEffect((()=>{if(s.current&&(s.current.unobserve(t),s.current=null),t&&"function"==typeof IntersectionObserver){const e=new IntersectionObserver((t=>{(t=>{const e=t.boundingClientRect,o=t.rootBounds,i=Math.abs(e.bottom-o.top)>=Math.abs(e.top-o.top);t.isIntersecting?(a.current=!0,i&&n(!0)):a.current&&(a.current=!1,i)&&n(!1)})(t[0])}),{threshold:hs(),root:o||document,rootMargin:gs(i)});return e.observe(t),s.current=e,()=>{s.current.unobserve(t),s.current=null}}}),[t,o,n,i])}(M.current,t.refElement,m?e.ScreenTriggerType.Lower:null!=I?I:e.ScreenTriggerType.Bottom,U);const Z={opacity:D.opacity,transform:e.spring.interpolate([D.x,D.y],((t,e)=>`translate(${t+E}px, ${e}px)`))},X=e.React.useCallback((()=>!b&&g&&(null==A?void 0:A.overlay)),[A,g,b]);return(0,e.jsx)("div",{className:(0,e.classNames)("screen-side-panel",{"top-spacing":0===n&&((null==A?void 0:A.overlay)||m)}),"data-screenid":s,"data-index":n,ref:M,css:Ns(R,c,p,g,w,x||null==A,y,v,m,0,u,z,B.current+N)},A&&(0,e.jsx)(js.div,{className:(0,e.classNames)("panel-content",{visible:T}),ref:P,style:Z},(0,e.jsx)("div",{className:"layout-wrapper"},(0,e.jsx)(h,{layouts:A.layout}),!b&&(0,e.jsx)(Ms,{layouts:A.layout,builderTheme:u}),(0,e.jsx)("span",{className:"resize-handle left rnd-resize-left"}),(0,e.jsx)("span",{className:"resize-handle right rnd-resize-right"})),X()&&(0,e.jsx)("div",{className:"toggle-visible-btn",onClick:_,"data-testid":`toggleBtn-${T}`},(0,e.jsx)(i.Tooltip,{placement:"auto",title:C("hideInDesignView")},(0,e.jsx)(i.Button,{type:"default",size:"sm",className:"rounded"},(0,e.jsx)(zs,{size:"m"})))),(0,e.jsx)("div",{className:(0,e.classNames)("panel-spacing",{"last-item":t.isLast})})),!A&&T&&(0,e.jsx)("div",{className:"panel-content-placeholder"}),(0,e.jsx)(e.ReactResizeDetector,{handleHeight:!0,onResize:G}))}function ks(t){const{layoutId:i,layoutItemId:n,builderTheme:s,layoutItem:l,formatMessage:r,isFirst:d,isLast:u}=t,[c,p]=e.React.useState(!1),[h,g]=e.React.useState(!1),m=e.React.useRef(),f=e.React.useCallback((()=>{p(!c)}),[c]),y=e.React.useCallback((()=>{g(!h)}),[h]),v=e.React.useCallback((t=>{Qn(i,n,t),p(!1)}),[i,n]),I=e.React.useCallback((t=>{Kn(i,n,t),g(!1)}),[i,n]),x=e.React.useCallback((()=>{const t=es((0,o.getAppConfigAction)().appConfig,{layoutId:i,layoutItemId:n});(0,o.getAppConfigAction)(t).exec()}),[i,n]),b=e.React.useCallback((()=>{const t=ts((0,o.getAppConfigAction)().appConfig,{layoutId:i,layoutItemId:n});(0,o.getAppConfigAction)(t).exec()}),[i,n]),w=e.React.useCallback((()=>{o.appBuilderSync.publishConfirmDeleteToApp({layoutId:i,layoutItemId:n})}),[i,n]),S=e.React.useCallback((()=>(0,e.getAppStore)().getState().browserSizeMode===e.BrowserSizeMode.Large),[]),C=[{icon:is(),title:r("insertABlock"),onClick:f,visible:()=>!q()},{icon:ss(),title:r("insertAScreenGroup"),onClick:y,visible:()=>S()&&!q()},K,Object.assign(Object.assign({},ot),{visible:()=>S()&&!q()}),{icon:Z(),title:r("setting"),onClick:()=>{(0,e.getAppStore)().dispatch(e.appActions.selectionChanged({layoutId:i,layoutItemId:n}))}},{icon:F(),title:r("dragToMove"),className:"tool-drag-handler",onClick:()=>{},visible:()=>!q()},{icon:ls(),onClick:x,title:r("moveup"),visible:()=>!d&&!q()},{icon:ls(),rotate:180,onClick:b,title:r("movedown"),visible:()=>!u&&!q()},{icon:O(),title:r("delete"),onClick:w,visible:()=>!q()}];return(0,e.jsx)(bt,{layoutId:i,layoutItem:l,builderTheme:s,positionType:"center",size:a.CONTEXT_MENU_ITEM_SIZE,iconSize:a.CONTEXT_MENU_ICON_SIZE,className:"widget-context-menu",menuItems:C},(0,e.jsx)("div",{ref:m,css:e.css`position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;`}),c&&(0,e.jsx)(ie.TemplateSelector,{templates:(0,ai.getBlockTemplates)(),referenceElement:m.current,onItemSelect:v,onClose:f}),h&&(0,e.jsx)(ie.TemplateSelector,{templates:(0,ai.getScreenGroupTemplates)(),referenceElement:m.current,onItemSelect:I,onClose:y}))}function Os(t,o,i,n,s,a){return e.css`
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
        padding-top: ${Math.round(t*ms)}px;
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
  `}function Bs(t){var i;const{layoutId:n,layoutItemId:s,layoutItem:r,formatMessage:d,itemIndex:u,isFirst:c,isLast:p}=t,{screenGroupId:h}=r,g=e.ReactRedux.useSelector((t=>{var e;const o=null===(e=t.appRuntimeInfo)||void 0===e?void 0:e.selection;return!!o&&o.layoutId===n&&o.layoutItemId===s})),m=e.ReactRedux.useSelector((t=>t.appConfig.screenGroups[r.screenGroupId])),f=e.ReactRedux.useSelector((t=>t.appConfig.screenGroups[r.screenGroupId].screens.some((e=>null!=t.appConfig.screens[e].panel)))),y=e.ReactRedux.useSelector((t=>t.browserSizeMode)),{screens:v,stretchPanel:I=!0,triggerType:x=e.ScreenTriggerType.Bottom,verticalSpace:b="0",panelTransitionType:w=e.ScreenTransitionType.Push}=m;let S=null!==(i=m.transitionType)&&void 0!==i?i:e.ScreenTransitionType.Fade;y!==e.BrowserSizeMode.Small||f||(S=e.ScreenTransitionType.Cover);const C=e.ReactRedux.useSelector((t=>{var e;return null===(e=t.appRuntimeInfo.screenGroupNavInfos)||void 0===e?void 0:e[h]})),R=e.ReactRedux.useSelector((t=>e.utils.findViewportSize(t.appConfig,t.browserSizeMode||e.BrowserSizeMode.Large))),T=e.ReactRedux.useSelector((t=>{var o;return(null===(o=t.appRuntimeInfo)||void 0===o?void 0:o.appMode)===e.AppMode.Design})),{viewOnly:A,builderTheme:M,pageId:P}=e.React.useContext(a.PageContext),L=e.ReactRedux.useSelector((t=>{const e=t.appConfig.pages[P];if(null==e?void 0:e.header){const e=t.appConfig.header;if(null==e?void 0:e.sticky){const o=t.browserSizeMode,i=t.appConfig.mainSizeMode,n=e.height[o]||e.height[i]||75;return parseInt(n,10)}}return 0})),z=e.React.useRef(),j=e.React.useRef(),N=e.React.useRef(),$=e.React.useRef(!0),k=e.React.useRef(),O=e.React.useRef(),[B,E]=e.React.useState(0);e.React.useEffect((()=>{if(g){const t=document.querySelector(`div.exb-rnd[data-layoutid="${n}"][data-layoutitemid="${s}"]`);null!=t&&t.scrollIntoView({behavior:"auto",block:"center"})}}),[g,n,s]);const D=e.React.useMemo((()=>{var t,o,i;if(y!==e.BrowserSizeMode.Small)return!1;const n=(0,e.getAppStore)().getState().appConfig,s=null===(o=null===(t=n.screenGroups)||void 0===t?void 0:t[h])||void 0===o?void 0:o.screens;return!!(null==s?void 0:s[B])&&(null===(i=n.screens[s[B]].panel)||void 0===i?void 0:i.overlay)}),[h,B,y]),F=e.React.useCallback((t=>{var o;const i=j.current.querySelectorAll("div.screen-side-panel");let n=0;if(i.forEach((e=>{+e.getAttribute("data-index")<t&&(n+=e.clientHeight)})),j.current.scrollTop=n,S!==e.ScreenTransitionType.Fade){const t=null===(o=N.current)||void 0===o?void 0:o.children[0];t&&(t.scrollTop=j.current.scrollTop)}}),[S]),V=e.React.useCallback((()=>{ut(!0)}),[]),H=e.React.useCallback((()=>{ut(!1)}),[]);e.React.useEffect((()=>{if(z.current&&!O.current){const{layoutId:e,layoutItemId:o,layoutItem:i}=t;O.current=(0,l.interact)(z.current).origin("parent"),O.current=dt(O.current,{layoutId:e,layoutItemId:o,onDragStart:V,onDragEnd:H,useDragHandler:!0,itemType:i.type,rootLayoutId:()=>e,restrict:()=>!0}),O.current.draggable({modifiers:[l.interact.modifiers.restrictRect({restriction:"parent"})]})}return()=>{O.current&&(O.current.unset(),O.current=null)}}),[]),e.React.useEffect((()=>{null!=(null==C?void 0:C.activeIndex)&&C.activeIndex!==B&&(function(t,o){var i;const n=(0,e.getAppStore)().getState().appConfig,s=(0,e.getAppStore)().getState().browserSizeMode,a=null===(i=(0,e.getAppStore)().getState().appRuntimeInfo)||void 0===i?void 0:i.selection;if(null!=a){const i=n.screenGroups[t].screens[o],l=n.screens[i];if(l){const t=l.main.layout[s];a.layoutId===t&&(0,e.getAppStore)().dispatch(e.appActions.selectionChanged(null)),null!=document.querySelector(`div[data-layoutid="${t}"] div[data-layoutid="${a.layoutId}"][data-layoutitemid="${a.layoutItemId}"]`)&&(0,e.getAppStore)().dispatch(e.appActions.selectionChanged(null))}}}(h,B),E(C.activeIndex),C.scrollIntoView&&($.current=!1,F(C.activeIndex),setTimeout((()=>{$.current=!0}),200)))}),[C,B,F,h]),e.React.useEffect((()=>{k.current&&(j.current.removeEventListener("scroll",k.current),k.current=null),k.current=()=>{var t;const o=null===(t=N.current)||void 0===t?void 0:t.children[0];o&&S!==e.ScreenTransitionType.Fade&&(o.scrollTop=j.current.scrollTop)},j.current.addEventListener("scroll",k.current)}),[S]),e.React.useEffect((()=>{(0,e.getAppStore)().dispatch(e.appActions.screenGroupNavInfoChanged(h,0))}),[T,h]);const W=e.React.useCallback(((t,o)=>{$.current&&(o&&t!==B?(0,e.getAppStore)().dispatch(e.appActions.screenGroupNavInfoChanged(h,t,!1)):!o&&t>0&&(0,e.getAppStore)().dispatch(e.appActions.screenGroupNavInfoChanged(h,t-1,!1)))}),[B,h]),U=e.React.useCallback((t=>{t.stopPropagation(),q()||A||y===e.BrowserSizeMode.Small||(0,e.getAppStore)().dispatch(e.appActions.selectionChanged({layoutId:n,layoutItemId:s}))}),[A,y,n,s]),G=e.React.useCallback((()=>{if(!j.current)return;const t=j.current.children[0],e=j.current.children[1];t.style.height=`${e.clientHeight}px`}),[]),_=e.React.useMemo((()=>e.lodash.debounce(G,200)),[G]),Y=e.React.useCallback(((t,o)=>{if(!j.current)return;const i=j.current.children[0],n=j.current.children[1];if(S!==e.ScreenTransitionType.Fade)if(S!==e.ScreenTransitionType.Cover){if(S===e.ScreenTransitionType.Push){const e=i.querySelector(`div.screen-main-panel[data-index="${t}"]`),o=n.querySelector(`div.screen-side-panel[data-index="${t}"]`);e.style.height=`${o.clientHeight}px`,i.style.height=`${n.clientHeight}px`}}else!function(t,o,i){const n=t.querySelectorAll("div.screen-main-panel"),s=o.querySelectorAll("div.screen-side-panel"),a=n.length;for(let t=1;t<a;t++){const e=n.item(t),o=n.item(t-1),i=s.item(t-1);e.style.marginTop=i.clientHeight-o.clientHeight+"px"}i!==e.BrowserSizeMode.Small&&(t.style.height=`${o.clientHeight}px`)}(i,n,y);else i.style.height=`${n.clientHeight}px`}),[y,S]),Z=e.React.useCallback((()=>{(0,e.getAppStore)().dispatch(o.builderActions.confirmDeleteContentChanged({layoutId:n,layoutItemId:s}))}),[n,s]),X=e.React.useMemo((()=>({delete:Z,backspace:Z})),[Z]);return v.length>0?(0,e.jsx)(St.Provider,{value:`${n}:${s}`},(0,e.jsx)("div",{className:(0,e.classNames)("builder-layout-item exb-rnd",{selected:g,"small-size":y===e.BrowserSizeMode.Small}),css:Os(R.height,M,c,p,g,D),"data-layoutitemid":s,"data-layoutid":n,onClick:U,ref:z},(0,e.jsx)("div",{className:"screen-menu"},(0,e.jsx)(ps,{activeScreenIndex:B,itemIndex:u,total:v.length,screenGroupId:h,layoutId:n,layoutItemId:s,theme:M,browserSizeMode:y,hasPanel:f,formatMessage:d})),(0,e.jsx)("div",{className:"screen-group",ref:j},(0,e.jsx)("div",{className:"main-panels",ref:N},(0,e.jsx)(Cs,{rootLayoutId:n,activeIndex:B,viewHeight:R.height,headerHeight:L,screens:v,transitionType:S,layoutEntry:ge,isSmallSize:y===e.BrowserSizeMode.Small,isDesignMode:T,builderTheme:M,formatMessage:d})),(0,e.jsx)("div",{className:"side-panels"},v.map(((t,o)=>(0,e.jsx)($s,{key:t,index:o,isLast:o===v.length-1,screenId:t,viewHeight:R.height,headerHeight:L,refElement:T?z.current:null,layoutEntry:ge,viewOnly:A,builderTheme:M,isActive:o===B,isSmallSize:y===e.BrowserSizeMode.Small,isDesignMode:T,stretched:I,triggerType:x,verticalSpace:b,transitionType:w,screenTransitionType:S,onHeightChange:Y,onInterctionChange:W,formatMessage:d}))),(0,e.jsx)(e.ReactResizeDetector,{handleHeight:!0,onResize:_}))),!A&&(0,e.jsx)(ks,{layoutId:n,layoutItemId:s,layoutItem:r,isFirst:c,isLast:p,builderTheme:M,formatMessage:d}),T&&(0,e.jsx)("div",{className:"group-tip"},(0,e.jsx)("div",{className:"tip-content"})),T&&g&&(0,e.jsx)(e.Keyboard,{bindings:X}))):null}const Es=t=>{const{className:o}=t,n=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o}(t,["className"]),s=(0,e.classNames)("jimu-icon-component",o);return e.React.createElement(i.Icon,Object.assign({className:s,icon:is()},n))};const Ds=t=>{const{className:o}=t,n=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o}(t,["className"]),s=(0,e.classNames)("jimu-icon-component",o);return e.React.createElement(i.Icon,Object.assign({className:s,icon:ss()},n))},Fs=e.css`
  pointer-events: auto;
`;function Vs(t){return e.css`
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
  `}function Hs(t){return t===e.BrowserSizeMode.Large}function Ws(t){const{pageContext:o,browserSizeMode:n,onPageTemplateSelected:s,onBlockTemplateSelected:a,onScreenTemplateSelected:l,blockOnly:r}=t,{builderTheme:d,formatMessage:u,isHeader:c,isFooter:p}=o,[h,g]=e.React.useState(!1),[m,f]=e.React.useState(!1),[y,v]=e.React.useState(!1),I=e.React.useRef(null),x=e.React.useRef(null),b=e.React.useRef(null),w=e.ReactRedux.useSelector((t=>{var o,i,n;const s=null!==(n=null===(i=null===(o=t.appConfig)||void 0===o?void 0:o.forBuilderAttributes)||void 0===i?void 0:i.lockLayout)&&void 0!==n&&n;return t.appRuntimeInfo.appMode===e.AppMode.Design&&!s})),S=!c&&!p;let C;return C=c?u("chooseHeaderTemplate"):p?u("chooseFooterTemplate"):u("chooseTemplate",{type:o.isDialog?u("dialog").toLocaleLowerCase():u("page").toLocaleLowerCase()}),w?(0,e.jsx)("div",{className:"w-100 flex-column justify-content-center align-items-center",css:Vs(d)},(0,e.jsx)("div",{className:"d-flex"},S&&(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)(i.Tooltip,{placement:"bottom",title:u("insertABlock")},(0,e.jsx)("div",{className:"action-item"},(0,e.jsx)(i.Button,{ref:I,icon:!0,onClick:t=>{t.stopPropagation(),f(!m)},css:Fs,className:"rounded-circle"},(0,e.jsx)(Es,{size:"m",color:d.colors.palette.dark[800]})))),Hs(n)&&(0,e.jsx)(i.Tooltip,{placement:"bottom",title:u("insertAScreenGroup")},(0,e.jsx)("div",{className:"action-item ml-4"},(0,e.jsx)(i.Button,{ref:x,icon:!0,onClick:t=>{t.stopPropagation(),v(!m)},css:Fs,className:"rounded-circle"},(0,e.jsx)(Ds,{size:16,color:d.colors.palette.dark[800]}))))),!r&&(0,e.jsx)(i.Tooltip,{placement:"bottom",title:C},(0,e.jsx)("div",{className:(0,e.classNames)("action-item",{"ml-4":S})},(0,e.jsx)(i.Button,{ref:b,icon:!0,onClick:t=>{t.stopPropagation(),g(!h)},css:Fs,className:"rounded-circle"},(0,e.jsx)(di,{size:16,color:d.colors.palette.dark[800]}))))),(0,e.jsx)("div",{className:"action-seprator mt-3"}),(0,e.jsx)("div",null,(0,e.jsx)("h5",{className:"btn-text mt-2"},u("dropWidgetToAdd"))),S&&m&&(0,e.jsx)(ie.TemplateSelector,{templates:(0,ai.getBlockTemplates)(),referenceElement:I.current,onItemSelect:t=>{f(!1),a(t)},onClose:()=>{f(!1)}}),S&&y&&Hs(n)&&(0,e.jsx)(ie.TemplateSelector,{templates:(0,ai.getScreenGroupTemplates)(),referenceElement:x.current,onItemSelect:t=>{v(!1),l(t)},onClose:()=>{v(!1)}}),!r&&h&&(0,e.jsx)(ie.TemplateSelector,{templates:(0,ai.getScrollingPageTemplates)(),referenceElement:b.current,onItemSelect:t=>{g(!1),s(t)},onClose:()=>{g(!1)}})):null}const Us=e.css`
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  background: transparent;
`,Gs=e.css`
  ${Us};
  z-index: ${a.LayoutZIndex.DragMoveTip};
  pointer-events: none;
`;class _s extends e.React.PureComponent{constructor(t){var i;super(t),this.state={isDragover:!1,isLoadingTemplate:!1},this.handleActivate=t=>{if(!J())return;if(Math.abs(t.screenX-this.mousedownX)>a.CLICK_TOLRERANCE||Math.abs(t.screenY-this.mousedownY)>a.CLICK_TOLRERANCE)return void t.stopPropagation();const{isInSection:o,isInWidget:i}=this.props;this.pageContext.viewOnly||o||i||ft()||ct()||(t.stopPropagation(),(0,e.getAppStore)().dispatch(e.appActions.selectionChanged(null)))},this.handleMouseDown=t=>{this.mousedownX=t.screenX,this.mousedownY=t.screenY},this.handleDropAtBoundary=(t,e,o)=>{o<this.props.layout.order.length?this.referenceId=this.props.layout.order[o]:this.referenceId=null,null==this.domRect&&(this.domRect=this.ref.getBoundingClientRect()),this.handleDrop(t,this.domRect,e)},this.onWidgetItemSelected=t=>{var e,o,i;const n=this.ref.getBoundingClientRect(),s={height:null!==(i=null===(o=null===(e=t.manifest)||void 0===e?void 0:e.defaultSize)||void 0===o?void 0:o.height)&&void 0!==i?i:300};this.addWidgetToLayout(t,n,s,4,0)},this.handleBlockTemplateSelected=t=>{this.setState({isLoadingTemplate:!0}),Qn(this.props.layout.id,"",t).finally((()=>{this.setState({isLoadingTemplate:!1})}))},this.handleScreenTemplateSelected=t=>{this.setState({isLoadingTemplate:!0}),Kn(this.props.layout.id,"",t).finally((()=>{this.setState({isLoadingTemplate:!1})}))},this.handlePageTemplateSelected=t=>{const i=(0,o.getAppConfigAction)().appConfig;this.setState({isLoadingTemplate:!0}),this.pageContext.isHeader?o.templateUtils.applyPageTemplateToHeader(i,t).then((({appConfig:t})=>{(0,o.getAppConfigAction)(t).exec(),e.lodash.defer((()=>{this.setState({isLoadingTemplate:!1})}))})).finally(null):this.pageContext.isFooter?o.templateUtils.applyPageTemplateToFooter(i,t).then((({appConfig:t})=>{(0,o.getAppConfigAction)(t).exec(),e.lodash.defer((()=>{this.setState({isLoadingTemplate:!1})}))})).finally(null):o.templateUtils.applyPageTemplateToBody(i,this.pageContext.pageId,t).then((({appConfig:t})=>{(0,o.getAppConfigAction)(t).exec(),e.lodash.defer((()=>{this.setState({isLoadingTemplate:!1})}))})).finally(null)},a.utils.autoBindHandlers(this,["handleDrop","handleDragOver","handleDragEnter","handleDragLeave","handleToggleDragoverEffect"]);const n=e.ExtensionManager.getInstance().getExtensions(`${e.extensionSpec.ExtensionPoints.LayoutTransformer}`);if((null==n?void 0:n.length)>0){const t=n.find((t=>t.layoutType===this.props.layout.type));this.layoutTransform=null===(i=t)||void 0===i?void 0:i.transformLayout}}componentDidMount(){this.canvasPane=new hi(this.canvasRef),this.canvasPane.setSize(this.ref.clientWidth,this.ref.clientHeight)}componentDidUpdate(){this.canvasPane.setSize(this.ref.clientWidth,this.ref.clientHeight)}handleDragOver(t,o,i,n,s,a){var l,r,d;const{layout:u}=this.props,c=null!==(l=t.layoutInfo)&&void 0!==l?l:{layoutId:null};let p=n;if(this.canvasPane.clear(),(null===(r=this.childRects)||void 0===r?void 0:r.length)>0){const{insertY:t,refId:e}=function(t,e,o,i){let n,s,a=!1;if(o.some(((t,i)=>{if(t.top+t.height/2>e){if(0===i)n=Math.max(t.top/2,t.top-5);else{const e=o[i-1];n=(t.top+e.top+e.height)/2}a=!0,s=t.id}return a})),!a){const e=o[o.length-1];n=Math.min(e.top+e.height+5,(e.top+e.height+t.height)/2)}return{refId:s,insertY:n}}(i,a,this.childRects);if(this.referenceId=e,c.layoutId===this.props.layout.id){const t=u.order,o=t.indexOf(c.layoutItemId),i=t.indexOf(e);if((null===(d=u.content[c.layoutItemId].setting)||void 0===d?void 0:d.isFloating)||o===i-1||null==e&&o===t.length-1)return}p={top:t-5+this.ref.scrollTop,width:i.width-10,left:5,height:10}}else this.referenceId=null,p={top:i.height/2-5,width:i.width-10,left:5,height:10};this.canvasPane.setColor(e.polished.rgba(this.builderTheme.colors.palette.primary[700],.4)),this.canvasPane.drawRect(p)}handleToggleDragoverEffect(t,e){var o;t&&(this.referenceId=null,this.collectBounds(null!==(o=e.layoutInfo)&&void 0!==o?o:{layoutId:null})),this.canvasPane.clear(),this.setState({isDragover:t})}handleDragEnter(t){}handleDragLeave(){}handleDrop(t,i,n){var s,a;this.canvasPane.clear();const{layout:l}=this.props,r=null!==(s=t.layoutInfo)&&void 0!==s?s:{layoutId:null},d=(0,o.getAppConfigAction)();let u=0;if(null!=this.referenceId?u=l.order.indexOf(this.referenceId):null!=l.order&&(u=l.order.length),this.referenceId=null,this.childRects=[],r.layoutId===l.id){if(null===(a=l.content[r.layoutItemId].setting)||void 0===a?void 0:a.isFloating){const t=(0,o.getAppConfigAction)();return t.setLayoutItemToPending(r,!1),void(0,e.getAppStore)().dispatch(e.appActions.layoutChanged(t.appConfig,Object.assign(Object.assign({},r),{autoScroll:!1})))}return void R(d.appConfig,t,{layoutId:l.id},i,n,u).then((t=>{const{layoutInfo:o,updatedAppConfig:i}=t;(0,e.getAppStore)().dispatch(e.appActions.layoutChanged(i,Object.assign(Object.assign({},o),{autoScroll:!0})))})).finally(null)}const c=(this.maxPageWidth>0?Math.min(this.maxPageWidth,i.width):i.width)/12,p=Math.min(Math.round(n.width/c),12);t.itemType===e.LayoutItemType.ScreenGroup?R(d.appConfig,t,{layoutId:l.id},i,n,u).then((t=>{const{layoutInfo:o,updatedAppConfig:i}=t;(0,e.getAppStore)().dispatch(e.appActions.layoutChanged(i,Object.assign(Object.assign({},o),{autoScroll:!0})))})).finally(null):this.addWidgetToLayout(t,i,n,p,u)}addWidgetToLayout(t,e,o,i,n,s){j(t,{layoutId:this.props.layout.id},e,o,i,n,s).finally(null)}collectBounds(t){const{layout:e}=this.props;this.childRects=[],this.domRect=this.ref.getBoundingClientRect();const o=this.ref.parentNode.querySelectorAll(`div[data-layoutid="${e.id}"] > div.exb-rnd`);return(null==o?void 0:o.length)>0&&o.forEach((o=>{var i;const n=o.getAttribute("data-layoutitemid");if((t.layoutId!==e.id||t.layoutItemId!==n)&&(null===(i=e.order)||void 0===i?void 0:i.includes(n))){const t=a.utils.relativeClientRect(o.getBoundingClientRect(),this.domRect);t.id=n,this.childRects.push(t)}})),this.childRects.sort(((t,e)=>t.top-e.top))}createItem(t,i,n,s){if(null==t?void 0:t.isPending)return null;const{layouts:a,layout:l,itemDraggable:r,itemSelectable:d}=this.props,u=function(t){const{layoutId:e,layoutItemId:i}=t,n=(0,o.getAppConfigAction)().appConfig.layouts[e];let s=!1;return n.order.some((t=>{var e;const o=n.content[t];if(!(null===(e=o.setting)||void 0===e?void 0:e.isFloating)&&!o.isPending)return s=t===i,!0})),s}({layoutId:l.id,layoutItemId:t.id}),c=function(t){var e;const{layoutId:i,layoutItemId:n}=t,s=(0,o.getAppConfigAction)().appConfig.layouts[i];let a=!1;for(let t=s.order.length-1;t>=0;t--){const o=s.order[t],i=s.content[o];if(!(null===(e=i.setting)||void 0===e?void 0:e.isFloating)&&!i.isPending){a=o===n;break}}return a}({layoutId:l.id,layoutItemId:t.id}),p=t.setting;return t.type===e.LayoutItemType.ScreenGroup?(0,e.jsx)(Bs,{key:`${l.id}_${t.id}`,itemIndex:n,isFirst:u,isLast:c,layoutId:l.id,layoutItemId:t.id,layoutItem:t,theme:this.pageContext.builderTheme,formatMessage:this.pageContext.formatMessage}):(null==p?void 0:p.isFloating)?(0,e.jsx)(cs,{key:`${l.id}_${t.id}`,index:n,total:i,builderTheme:this.builderTheme,layouts:a,layoutId:l.id,layoutItemId:t.id,layoutItem:t,gutter:s.gutter,draggable:r,selectable:d,onDropAtBoundary:this.handleDropAtBoundary,formatMessage:this.pageContext.formatMessage}):(0,e.jsx)(ds,{key:`${l.id}_${t.id}`,index:n,isFirst:u,isLast:c,builderTheme:this.builderTheme,layouts:a,layoutId:l.id,layoutItemId:t.id,layoutItem:t,gutter:s.gutter,draggable:r,selectable:d,onDropAtBoundary:this.handleDropAtBoundary,formatMessage:this.pageContext.formatMessage})}getActionStyle(){return e.css`
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
    `}createActions(t){const{viewOnly:o,rootLayoutId:i}=this.pageContext,{layout:n}=this.props,s=!this.pageContext.isHeader&&!this.pageContext.isFooter;return this.state.isLoadingTemplate||!s||o||n.id!==i?null:(0,e.jsx)(Ws,{pageContext:this.pageContext,browserSizeMode:this.props.browserSizeMode,blockOnly:t,onPageTemplateSelected:this.handlePageTemplateSelected,onBlockTemplateSelected:this.handleBlockTemplateSelected,onScreenTemplateSelected:this.handleScreenTemplateSelected})}render(){const{layout:t,className:o,isPageItem:n,layouts:s,mainSizeMode:l,browserSizeMode:r}=this.props;if(null==t)return null;const d=(0,e.classNames)("layout flow-layout w-100",o),u={display:this.state.isDragover?"block":"none"};return(0,e.jsx)(a.PageContext.Consumer,null,(o=>{var a;this.builderTheme=o.builderTheme,this.maxPageWidth=o.maxWidth,this.pageContext=o;let c=t;s[r]!==t.id&&null!=this.layoutTransform&&(c=this.layoutTransform(t,l,r));const p=null!==(a=c.order)&&void 0!==a?a:[],h=e.lodash.assign({},In,c.setting),g=Object.assign({position:"relative"},i.styleUtils.toCSSStyle(h.style));return(0,e.jsx)("div",{className:d,ref:t=>this.ref=t,css:this.getStyle(),style:g,"data-layoutid":t.id,onClick:this.handleActivate,onMouseDown:this.handleMouseDown},(0,e.jsx)(e.OneByOneAnimation,{"data-layoutid":c.id,enableScroll:!0,className:"trail-container d-flex flex-column align-items-center",css:e.css`
                  width: 100%;
                `},!o.viewOnly&&(0,e.jsx)(ae,{css:Us,layouts:this.props.layouts,isRepeat:this.props.isRepeat,highlightDragover:!n,onDragEnter:this.handleDragEnter,onDragLeave:this.handleDragLeave,onDragOver:this.handleDragOver,onDrop:this.handleDrop,onToggleDragoverEffect:this.handleToggleDragoverEffect}),p.length>0&&p.map(((t,e)=>this.createItem(c.content[t],p.length,e,h)))),!this.state.isLoadingTemplate&&!o.viewOnly&&0===p.length&&t.id===o.rootLayoutId&&this.createActions(!1),p.length>0&&this.createActions(!0),this.state.isLoadingTemplate&&(0,e.jsx)(i.Loading,{type:i.LoadingType.Primary}),(0,e.jsx)("canvas",{css:Gs,style:u,ref:t=>this.canvasRef=t}))}))}}const Ys=e.ReactRedux.connect(a.utils.mapStateToLayoutProps)(_s);var Zs=c(9216),Xs=c.n(Zs);const qs=t=>{const{className:o}=t,n=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o}(t,["className"]),s=(0,e.classNames)("jimu-icon-component",o);return e.React.createElement(i.Icon,Object.assign({className:s,icon:Xs()},n))},Js=e.css`
  .resize-handler {
    height: ${16}px;
    width: 100%;
    cursor: ns-resize;
    position: absolute;
  }
`,Qs=e.css`
  position: absolute;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
`;function Ks(t){return e.css`
    .edit-btn {
      background: ${t.colors.primary};
      color: ${t.colors.palette.dark[800]};
      border-radius: 2px;
      &:hover {
        background: ${t.colors.palette.primary[600]};
        color: ${t.colors.black};
      }
    }
  `}function ta(){(0,e.getAppStore)().dispatch(e.appActions.activePagePartChanged(e.PagePart.Header))}function ea(){(0,e.getAppStore)().dispatch(e.appActions.activePagePartChanged(e.PagePart.Footer))}function oa(){(0,e.getAppStore)().dispatch(e.appActions.activePagePartChanged(e.PagePart.Body))}function ia(){const t=(0,e.getAppStore)().getState(),o=t.appConfig.header.layout;return a.searchUtils.findLayoutId(o,t.browserSizeMode,t.appConfig.mainSizeMode)}function na(){const t=(0,e.getAppStore)().getState(),o=t.appConfig.footer.layout;return a.searchUtils.findLayoutId(o,t.browserSizeMode,t.appConfig.mainSizeMode)}function sa(t){var o;const i=(0,e.getAppStore)().getState(),n=null===(o=i.appConfig.dialogs[t])||void 0===o?void 0:o.layout;return a.searchUtils.findLayoutId(n,i.browserSizeMode,i.appConfig.mainSizeMode)}function aa(t){return Object.keys(t).find((e=>t[e]))}function la(t,o,i,n,s){return e.css`
    ${Js};
    ${Ks(n)};
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
  `}function ra(t){const{header:n,headerVisible:s,browserSizeMode:r,mainSizeMode:d,activePagePart:u,pageContext:c}=t,p=e.React.useRef(null),h=n.height[r]||n.height[d]||75,g=n.layout,m=!g[r],f=c.builderTheme;e.React.useEffect((()=>{let t;return p.current&&(t=function(t){let e,i;return(0,l.interact)(t).origin("parent").resizable({inertia:!1,edges:{bottom:".resize-handler"},onstart:o=>{o.stopPropagation(),e=0,i=t.getBoundingClientRect().height,t.style.minHeight="0px"},onmove:o=>{o.stopPropagation();const n=o.deltaRect;e+=n.height,t.style.height=`${i+e}px`},onend:n=>{n.stopPropagation();const s=(0,o.getAppConfigAction)().appConfig.header;t.style.height=null,t.style.minHeight=null,(0,o.getAppConfigAction)().editHeader(s.setIn(["height",a.utils.getCurrentSizeMode()],Math.round(i+e))).exec()}})}(p.current)),()=>{t&&t.unset()}}),[]);const y=ia(),v=e.React.useMemo((()=>Object.assign(Object.assign({},c),{isHeader:!0,rootLayoutId:y,viewOnly:m||u!==e.PagePart.Header})),[c,y,m,u]);return(0,e.jsx)(a.PageContext.Provider,{value:v},(0,e.jsx)("div",{className:"header",css:la(n,h,s,c.builderTheme,c.theme),ref:t=>p.current=t},(0,e.jsx)("div",{className:"w-100 h-100",css:e.css`
            overflow: auto;
            display: flex;
            position: relative;
            z-index: 0;
            min-height: ${parseFloat(h)}px;
          `},(0,e.jsx)(ge,{layouts:g,isPageItem:!0,visible:s})),!m&&(0,e.jsx)("span",{className:"resize-handler",css:e.css`
              bottom: ${-8}px;
              z-index: 1;
            `}),u!==e.PagePart.Header&&!m&&(0,e.jsx)("div",{className:"edit-mask-all",css:e.css`
              ${Qs};
              background: ${u===e.PagePart.Body?"transparent":e.polished.rgba(f.colors.palette.light[400],.6)};
              z-index: 1;
            `,onClick:oa}),u===e.PagePart.Body&&(!m||r===d)&&(0,e.jsx)("div",{className:"edit-mask justify-content-center align-items-center",css:e.css`
              ${Qs};
              background: ${e.polished.rgba(f.colors.palette.light[400],.6)};
              z-index: 1;
              display: none;
            `},(0,e.jsx)(i.Button,{className:"edit-btn btn-large border-0",onClick:ta},(0,e.jsx)(qs,{size:"m"}),c.formatMessage("editHeader")))))}function da(t,o,i,n,s){return e.css`
    ${Js};
    ${Ks(n)};
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
  `}function ua(t){const{footer:n,footerVisible:s,browserSizeMode:r,mainSizeMode:d,activePagePart:u,pageContext:c}=t,p=e.React.useRef(null),h=n.height[r]||n.height[d]||75,g=n.layout,m=!g[r],f=c.builderTheme;e.React.useEffect((()=>{let t;return p.current&&(t=function(t){let e,i;return(0,l.interact)(t).origin("parent").resizable({inertia:!1,edges:{top:".resize-handler"},onstart:o=>{o.stopPropagation(),e=0,i=t.getBoundingClientRect().height},onmove:o=>{o.stopPropagation();const n=o.deltaRect;e+=n.height,t.style.height=`${i+e}px`},onend:n=>{n.stopPropagation();const s=(0,o.getAppConfigAction)().appConfig.footer;t.style.height=null,(0,o.getAppConfigAction)().editFooter(s.setIn(["height",a.utils.getCurrentSizeMode()],Math.round(i+e))).exec()}})}(p.current)),()=>{t&&t.unset()}}),[]);const y=na(),v=e.React.useMemo((()=>Object.assign(Object.assign({},c),{isFooter:!0,rootLayoutId:y,viewOnly:m||u!==e.PagePart.Footer})),[c,y,m,u]);return(0,e.jsx)(a.PageContext.Provider,{value:v},(0,e.jsx)("div",{className:"footer",css:da(n,h,s,c.builderTheme,c.theme),ref:t=>p.current=t},!m&&(0,e.jsx)("span",{className:"resize-handler",css:e.css`
              top: ${-8}px;
              z-index: 1;
            `}),(0,e.jsx)("div",{className:"w-100 h-100",css:e.css`
            overflow: auto;
            display: flex;
            position: relative;
            z-index: 0;
            min-height: ${parseFloat(h)}px;
          `},(0,e.jsx)(ge,{layouts:g,isPageItem:!0,visible:s})),u!==e.PagePart.Footer&&!m&&(0,e.jsx)("div",{className:"edit-mask-all",css:e.css`
              ${Qs};
              background: ${u===e.PagePart.Body?"transparent":e.polished.rgba(f.colors.palette.light[400],.6)};
              z-index: 1;
            `,onClick:oa}),u===e.PagePart.Body&&(!m||r===d)&&(0,e.jsx)("div",{className:"edit-mask justify-content-center align-items-center",css:e.css`
              ${Qs};
              background: ${e.polished.rgba(f.colors.palette.light[400],.6)};
              z-index: 1;
              display: none;
            `},(0,e.jsx)(i.Button,{className:"edit-btn btn-large border-0",onClick:ea},(0,e.jsx)(qs,{size:"m"}),c.formatMessage("editFooter")))))}function ca(t){const{pageJson:o,visible:i,renderedPageId:n,browserSizeMode:s,activePagePart:l,pageContext:r}=t,d=e.React.useRef(!1),[u,c]=e.React.useState(Symbol("init")),p=e.ReactRedux.useSelector((t=>function(t,e){const o=t.appRuntimeInfo.animationPreview;return(null==o?void 0:o.pageId)===e?o.id:null}(t,o.id))),h=e.React.useRef(),g=p&&p!==h.current,m=o.layout,f=d.current?p:(d.current=!0,u),y=o.oneByOneEffect&&o.oneByOneEffect.type!==e.AnimationType.None?o.oneByOneEffect:null,v=e.ReactRedux.useSelector((t=>{var o;return null===y||(null===(o=t.appRuntimeInfo)||void 0===o?void 0:o.appMode)===e.AppMode.Design})),I=e.ReactRedux.useSelector((t=>null===y?null:t.browserSizeMode)),x=e.React.useRef(y),b=e.React.useRef(I),w=y?!i:null;e.React.useEffect((()=>{h.current=p,x.current=y})),e.React.useEffect((()=>{v||(c(Symbol("play page")),d.current=!1)}),[v]),e.React.useEffect((()=>{v||b.current===I||(c(Symbol("autoplay when size mode changed")),d.current=!1),b.current=I}),[I,v]),e.React.useEffect((()=>{x.current&&(c(Symbol("autoplay when switching to visible")),d.current=!1)}),[i]);const S=!m[s];let C;o.mode!==e.PageMode.FitWindow&&o.maxWidth>0&&(C=o.maxWidth);const R=e.React.useMemo((()=>{const t=(0,e.getAppStore)().getState();let i;return o.layout&&(i=a.searchUtils.findLayoutId(o.layout,s,t.appConfig.mainSizeMode)),Object.assign(Object.assign({},r),{maxWidth:C,viewOnly:S,rootLayoutId:i,pageId:n})}),[r,S,C,n,o.layout,s]),T=e.React.useMemo((()=>{const t=!v||g?y:null;return{trigger:e.AnimationTriggerType.Manual,setting:t,inheritedOneByOneSetting:null,playId:null===t?null:f,depth:0,revert:w}}),[v,w,f,g,y]),A=e.React.useCallback((()=>e.css`
      display: ${i?"flex":"none"};
      position: relative;
      background-color: ${o.bodyBackgroundColor||"transparent"};
      z-index: 1;
      flex: 1 0 auto;

      body:not(.design-mode) & {
        .edit-mask {
          display: none !important;
        }
      }
    `),[i,o.bodyBackgroundColor]);if(m)return(0,e.jsx)(a.PageContext.Provider,{key:o.id,value:R},(0,e.jsx)(a.PageVisibilityContext.Provider,{value:i},(0,e.jsx)("div",{id:o.id,"data-pageid":o.id,className:"page",css:A()},(0,e.jsx)(e.AnimationContext.Provider,{value:T},(0,e.jsx)(ge,{layouts:m,isPageItem:!0,visible:i,className:"w-100",css:e.css`
                margin: 0 auto;
                background-color: transparent;
                z-index: 0;
              `})),l!==e.PagePart.Body&&(0,e.jsx)("div",{className:"edit-mask",css:e.css`
                ${Qs};
                background: ${e.polished.rgba(r.theme.colors.palette.dark[800],.6)};
                z-index: 1;
              `,onClick:oa}))))}(0,a.registerLayoutBuilder)(e.LayoutType.FixedLayout,yi),(0,a.registerLayoutBuilder)(e.LayoutType.FlowLayout,Ys),(0,a.registerLayoutBuilder)(e.LayoutType.GridLayout,on),(0,a.registerLayoutBuilder)(e.LayoutType.ColumnLayout,Si);class pa extends e.React.PureComponent{constructor(t){super(t),this.startPaste=()=>{var t;const i=null===(t=(0,e.getAppStore)().getState().appRuntimeInfo)||void 0===t?void 0:t.clipboard,{activePagePart:n,pageStatus:s,currentDialogId:l,dialogs:r}=this.props;if(i){let t;t=l&&r[l]?sa(l):n===e.PagePart.Header?ia():n===e.PagePart.Footer?na():function(t){var o;const i=(0,e.getAppStore)().getState(),n=null===(o=i.appConfig.pages[t])||void 0===o?void 0:o.layout;return n?a.searchUtils.findLayoutId(n,i.browserSizeMode,i.appConfig.mainSizeMode):null}(aa(s)),function(t,i){var n,s;const l=(0,o.getAppConfigAction)(),{layoutId:r,layoutItemId:d}=t;if(!(null===(s=null===(n=l.appConfig.layouts[r])||void 0===n?void 0:n.content)||void 0===s?void 0:s[d]))return;const u=l.appConfig.layouts[i].type;u===e.LayoutType.FlowLayout?function(t,i){var n,s,a;I(this,void 0,void 0,(function*(){const l=(0,o.getAppConfigAction)(),{layoutId:r,layoutItemId:d,width:u,height:c}=t,p=l.duplicateLayoutItem(r,r,d,!0),h=null!==(s=null===(n=(0,e.getAppStore)().getState().appRuntimeInfo)||void 0===n?void 0:n.zoomScale)&&void 0!==s?s:1,g=function(t,e,o){const i=window.parent.document.querySelector('iframe[name="_appWindow"]'),n=document.querySelectorAll(`div.flow-layout[data-layoutid="${t}"] > div.trail-container > div.builder-layout-item`);let s=-1,a=2;if(i&&n){const t=i.getBoundingClientRect();n.forEach(((e,o)=>{if(-1===s){const i=e.getBoundingClientRect();(i.top+t.top>=0||i.top+i.height+t.top>=0)&&(s=o+1)}})),a=Math.round(12*e*o/t.width)}return{colSpan:a,insertIndex:s}}(i,u,h);if(-1===g.insertIndex&&(g.insertIndex=(null===(a=l.appConfig.layouts[i].order)||void 0===a?void 0:a.length)||0),l.appConfig.layouts[r].type===e.LayoutType.FlowLayout){const{updatedAppConfig:t}=yield R(l.appConfig,{layoutInfo:p},{layoutId:i},{left:0,top:0,width:u,height:c},{left:0,top:0,width:u,height:c},g.insertIndex);window.jimuConfig.isBuilder?((0,o.getAppConfigAction)(t).exec(),o.builderAppSync.publishChangeSelectionToApp(p)):(0,e.getAppStore)().dispatch(e.appActions.layoutChanged(t,p))}else j({layoutInfo:p},{layoutId:i},{left:0,top:0,width:u,height:c},{left:0,top:0,width:u,height:c},g.colSpan,g.insertIndex,l.appConfig).catch((t=>console.error(t)))}))}(t,i):u===e.LayoutType.FixedLayout?function(t,i,n=null){var s,l,r,d;let u=(0,o.getAppConfigAction)();const{layoutId:c,layoutItemId:p,width:h,height:g}=t,m=(null===(l=null===(s=u.appConfig.layouts[c])||void 0===s?void 0:s.content)||void 0===l?void 0:l[p]).bbox,f=u.duplicateLayoutItem(c,c,p,!0),y=null!==(d=null===(r=(0,e.getAppStore)().getState().appRuntimeInfo)||void 0===r?void 0:r.zoomScale)&&void 0!==d?d:1;R(u.appConfig,{layoutInfo:f},{layoutId:i},{left:0,right:0,width:h,height:g},{left:0,right:0,width:h,height:g}).then((t=>{const{layoutInfo:s,updatedAppConfig:l}=t;if(u=(0,o.getAppConfigAction)(l),n||(n=function(t){const e=window.parent.document.querySelector('div[data-layoutid="right-sidebar-left-layout"]'),o=window.parent.document.querySelector('iframe[name="_appWindow"]');let i,n,s,a,l;if(e&&o){const r=e.getBoundingClientRect(),d=o.getBoundingClientRect();if(n=d.left,s=d.top,a=d.width,l=d.height,t&&(i=(o.contentDocument||o.contentWindow.document).querySelector(`div.layout[data-layoutid="${t}"]`),i)){const t=i.getBoundingClientRect();n+=t.left,s+=t.top,a=t.width,l=t.height}return{left:n>=r.left?0:r.left-n,top:s>=r.top?0:r.top-s,width:a,height:l}}return null}(i)),n){const t=n.width/y,e=n.height/y;u.editLayoutItemBBox(s,a.utils.replaceBoundingBox(m,{left:0,top:0,right:0,bottom:0,width:Math.round(h),height:Math.round(g)},{width:t,height:e}))}u.editLayoutItemSetting(s,{vCenter:!0,hCenter:!0});const r=u.appConfig.layouts[s.layoutId].content[s.layoutItemId].bbox;u.editLayoutItemBBox(s,r.set("left","50%").set("top","50%")),(0,e.getAppStore)().dispatch(e.appActions.layoutChanged(u.appConfig,s))}))}(t,i):console.error(`unknown layout type: ${u}`)}(i,t)}},this.isMac=()=>/macintosh|mac os x/i.test(navigator.userAgent),this.clearSelection=t=>{!J()||ft()||ct()||(t.stopPropagation(),(0,e.getAppStore)().dispatch(e.appActions.selectionChanged(null)))},this.formatMessage=(t,e)=>this.props.intl?this.props.intl.formatMessage({id:t,defaultMessage:It[t]},e):It[t],e.ExtensionManager.getInstance().registerExtension({epName:e.extensionSpec.ExtensionPoints.LayoutTransformer,extension:new Zn}),e.ExtensionManager.getInstance().registerExtension({epName:e.extensionSpec.ExtensionPoints.LayoutTransformer,extension:new qn}),this.isMac()?this.keyBindings={"command+keyv":this.startPaste}:this.keyBindings={"ctrl+keyv":this.startPaste},this.updatePageContext()}componentDidMount(){J()&&!document.body.classList.contains("design-mode")&&document.body.classList.add("design-mode"),q()&&!document.body.classList.contains("lock-layout")&&document.body.classList.add("lock-layout")}componentDidUpdate(t){var e;const o=null===(e=window.document)||void 0===e?void 0:e.documentElement;o&&(window.jimuConfig.isInBuilder&&J()?o.classList.add("is-in-builder"):o.classList.remove("is-in-builder")),aa(t.pageStatus)!==aa(this.props.pageStatus)&&(this.pageRef.scrollTop=0)}getPageStyle(){const{pageStatus:t,pages:o,minHeight:i}=this.props,n=o[Object.keys(t).find((e=>t[e]))];return e.css`
      position: relative;
      margin: 0 auto;
      overflow: hidden;
      height: ${n.mode===e.PageMode.FitWindow?"100%":"auto"};
      min-height: ${i}px;
      .page {
        height: auto;
      }
      .is-dragging {
        z-index: ${a.LayoutZIndex.DraggingItem};
        opacity: 0.8;
      }

      body:not(.design-mode) & {
        overflow: auto;
        height: 100%;
      }
    `}updatePageContext(){const{theme:t}=this.props,o={theme:t,builderTheme:(0,v.getBuilderThemeVariables)(),formatMessage:this.formatMessage};if(this.pageContext)for(const t in o)this.pageContext[t]!==o[t]&&(this.pageContext=this.pageContext.set(t,o[t]));else this.pageContext=(0,e.Immutable)(o)}render(){const{pageStatus:t,pages:o}=this.props,i=aa(t);return i&&(null==o?void 0:o[i])?(this.updatePageContext(),(0,e.jsx)("div",{className:"page-renderer d-flex flex-column align-items-center w-100",ref:t=>this.pageRef=t,css:this.getPageStyle(),"data-testid":"pageRenderer",onClick:this.clearSelection},this.renderDialog(),this.renderHeader(),Object.keys(t).map((t=>this.renderPageBody(t))),this.renderFooter(),(0,e.jsx)(e.Keyboard,{bindings:this.keyBindings}))):null}renderHeader(){if(!this.props.header)return null;const{header:t,headerVisible:o,browserSizeMode:i,mainSizeMode:n,activePagePart:s}=this.props;return(0,e.jsx)(ra,{header:t,activePagePart:s,headerVisible:o,browserSizeMode:i,mainSizeMode:n,pageContext:this.pageContext})}renderFooter(){if(!this.props.footer)return null;const{footer:t,footerVisible:o,browserSizeMode:i,mainSizeMode:n,activePagePart:s}=this.props;return(0,e.jsx)(ua,{footer:t,activePagePart:s,footerVisible:o,browserSizeMode:i,mainSizeMode:n,pageContext:this.pageContext})}renderPageBody(t){const{pages:o,pageStatus:i,browserSizeMode:n,activePagePart:s}=this.props,a=o[t];if(a&&a.type===e.PageType.Normal)return(0,e.jsx)(ca,{key:a.id,pageJson:a,renderedPageId:t,activePagePart:s,browserSizeMode:n,pageContext:this.pageContext,visible:!!i[a.id]})}isDialogViewOnly(t){const{browserSizeMode:o}=this.props;return!(o===e.BrowserSizeMode.Large||t.layout[o])}renderDialog(){const{currentDialogId:t,urlDialogJson:o,splashDialogJson:i,isSplashClosed:n,isPageDlgClosed:s,pageDialogJson:l,pageDialogId:r}=this.props,d=!n&&i,u=!s&&l,c=o?(null==i?void 0:i.id)===o.id||(null==l?void 0:l.id)===o.id?null:o:null;return(0,e.jsx)(e.React.Fragment,null,c&&(0,e.jsx)(a.PageContext.Provider,{value:Object.assign(Object.assign({},this.pageContext),{dialogId:t,isDialog:!0,viewOnly:this.isDialogViewOnly(o),rootLayoutId:sa(t)})},(0,e.jsx)(e.AppDialog,{dialogJson:o})),u&&(0,e.jsx)(a.PageContext.Provider,{value:Object.assign(Object.assign({},this.pageContext),{dialogId:r,isDialog:!0,viewOnly:this.isDialogViewOnly(l),rootLayoutId:sa(l.id)})},(0,e.jsx)(e.AppDialog,{dialogJson:l,isOpenByPage:!0})),d&&(0,e.jsx)(a.PageContext.Provider,{value:Object.assign(Object.assign({},this.pageContext),{dialogId:i.id,isDialog:!0,viewOnly:this.isDialogViewOnly(i),rootLayoutId:sa(i.id)})},(0,e.jsx)(e.AppDialog,{dialogJson:i})))}}pa.displayName="BuilderPageRenderer";const ha=(0,e.injectIntl)(e.ReactRedux.connect(((t,o)=>{var i,n,s,a,l,r,d;const u=e.utils.findViewportSize(t.appConfig,t.browserSizeMode),c=aa(o.pageStatus);if(!c||!t.appConfig.pages[c])return{};const p=t.appConfig.pages[t.appRuntimeInfo.currentPageId].autoOpenDialogId,h=t.appConfig.dialogs,g=h[Object.keys(h).find((t=>h[t].isSplash))];return{pages:t.appConfig.pages,header:t.appConfig.header,headerVisible:!!t.appConfig.pages[c].header,footer:t.appConfig.footer,footerVisible:!!t.appConfig.pages[c].footer,mainSizeMode:t.appConfig.mainSizeMode,browserSizeMode:t.browserSizeMode,minHeight:u.height,activePagePart:null!==(i=t.appRuntimeInfo.activePagePart)&&void 0!==i?i:e.PagePart.Body,clipboardItem:t.appRuntimeInfo.clipboard,dialogs:t.appConfig.dialogs,currentDialogId:t.appRuntimeInfo.currentDialogId,splashDialogJson:g,isSplashClosed:null===(a=null===(s=null===(n=t.appRuntimeInfo)||void 0===n?void 0:n.dialogInfos)||void 0===s?void 0:s[null==g?void 0:g.id])||void 0===a?void 0:a.isClosed,pageDialogId:p,pageDialogJson:h[p],isPageDlgClosed:null===(d=null===(r=null===(l=t.appRuntimeInfo)||void 0===l?void 0:l.dialogInfos)||void 0===r?void 0:r[t.appRuntimeInfo.currentPageId+"-"+p])||void 0===d?void 0:d.isClosed,urlDialogJson:h[o.dialogId]}}))((0,v.withTheme)(pa)));var ga=c(8679);function ma(t,o){var i,n,s,l;const r=o.layoutId,d=t.appRuntimeInfo.selection,u=o.layoutItem;let c=!1,p=!1,h=!1,g=!1;if(u&&(c=Boolean(d&&r===d.layoutId&&u.id===d.layoutItemId),u.type===e.LayoutItemType.Widget)){const e=t.appConfig.widgets[u.widgetId],o=null===(n=null===(i=null==e?void 0:e.manifest)||void 0===i?void 0:i.properties)||void 0===n?void 0:n.supportInlineEditing;if(h=null===(l=null===(s=null==e?void 0:e.manifest)||void 0===s?void 0:s.properties)||void 0===l?void 0:l.supportRepeat,o){const e=t.widgetsRuntimeInfo[u.widgetId];p=e&&e.isInlineEditing}g=a.utils.isWidgetHasEmbeddedLayout(u.widgetId,t.appConfig)}return{selected:c,supportRepeat:h,isInlineEditing:p,isLayoutWidget:g}}const fa=()=>{};function ya(t){return t=>{class o extends e.React.PureComponent{constructor(t){super(t),this.ref=e.React.createRef()}componentDidMount(){const{layoutId:t,layoutItemId:e,layoutItem:o,onResizeStart:i,onResizing:n,onResizeEnd:s,onDragStart:a,onDragging:r,onDragEnd:d,useDragHandler:u}=this.props;this.ref.current&&(this.interactable=(0,l.interact)(this.ref.current).origin("parent"),this.interactable=dt(this.interactable,{layoutId:t,layoutItemId:e,useDragHandler:u,onDragging:r,onDragStart:a,onDragEnd:d,itemType:o.type,rootLayoutId:()=>this.rootLayoutId,restrict:()=>this.props.restrict}),this.interactable=gt(this.interactable,{layoutItemId:e,onResizing:n,onResizeStart:i,onResizeEnd:s}))}componentWillUnMount(){this.interactable&&(this.interactable.unset(),this.interactable=null)}getStyle(t){return e.css`
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
        `}render(){return(0,e.jsx)(a.PageContext.Consumer,null,(o=>{this.rootLayoutId=o.rootLayoutId;const i=this.props,{gridSize:n,draggable:s,onResizeStart:a,onResizing:l,onResizeEnd:r,style:d,className:u,useDragHandler:c,children:p}=i,h=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o}(i,["gridSize","draggable","onResizeStart","onResizing","onResizeEnd","style","className","useDragHandler","children"]),{isInlineEditing:g}=this.props,m=(0,e.classNames)("exb-rnd",u,{"functional-widget":!this.props.isLayoutWidget}),f="string"==typeof d?JSON.parse(d):Object.assign({},d);return this.props.forceAspectRatio&&(f.height="auto"),(0,e.jsx)("div",{className:m,ref:this.ref,css:this.getStyle(g),"data-layoutid":this.props.layoutId,"data-layoutitemid":this.props.layoutItemId,"data-repeatable":this.props.supportRepeat,style:f},(0,e.jsx)("div",{className:"rnd-aspect-ratio-wrapper"},(0,e.jsx)(t,Object.assign({layoutId:this.props.layoutId,className:"w-100",layoutItemId:this.props.layoutItemId},h))),p)}))}}o.defaultProps={left:!0,top:!0,right:!0,bottom:!0,restrict:!1,onResizeStart:fa,onResizing:fa,onResizeEnd:fa,onDragStart:fa,onDragging:fa,onDragEnd:fa};const i=ga(o,t);return e.ReactRedux.connect(ma)(i)}}const{createPageFromTemplate:va,createDialogFromTemplate:Ia,createSectionFromTemplate:xa,createWidgetFromTemplate:ba}=o.templateUtils})(),p})())}}}));