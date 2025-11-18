/*! For license information please see layout-builder.js.LICENSE.txt */
System.register(["jimu-core/emotion","jimu-core","jimu-for-builder","jimu-ui","jimu-layouts/layout-runtime","jimu-theme","jimu-core/dnd","jimu-ui/advanced/setting-components","jimu-for-builder/templates","jimu-ui/advanced/style-setting-components","jimu-ui/basic/color-picker"],function(t,e){var o={},i={},n={},s={},a={},l={},r={},d={},u={},c={},p={};return{setters:[function(t){o.jsx=t.jsx,o.jsxs=t.jsxs},function(t){i.APP_FRAME_NAME_IN_BUILDER=t.APP_FRAME_NAME_IN_BUILDER,i.AnimationComponent=t.AnimationComponent,i.AnimationContext=t.AnimationContext,i.AnimationPlayMode=t.AnimationPlayMode,i.AnimationTriggerType=t.AnimationTriggerType,i.AnimationType=t.AnimationType,i.AppDialog=t.AppDialog,i.AppMode=t.AppMode,i.AppType=t.AppType,i.BrowserSizeMode=t.BrowserSizeMode,i.CONSTANTS=t.CONSTANTS,i.ContainerType=t.ContainerType,i.DialogMode=t.DialogMode,i.ErrorBoundary=t.ErrorBoundary,i.ExtensionManager=t.ExtensionManager,i.FixedPosition=t.FixedPosition,i.GridItemType=t.GridItemType,i.HoverType=t.HoverType,i.Immutable=t.Immutable,i.Keyboard=t.Keyboard,i.LayoutItemType=t.LayoutItemType,i.LayoutParentType=t.LayoutParentType,i.LayoutType=t.LayoutType,i.PageMode=t.PageMode,i.PagePart=t.PagePart,i.PageType=t.PageType,i.PageVisibilityContext=t.PageVisibilityContext,i.React=t.React,i.ReactRedux=t.ReactRedux,i.ReactResizeDetector=t.ReactResizeDetector,i.ScreenTransitionType=t.ScreenTransitionType,i.ScreenTriggerType=t.ScreenTriggerType,i.TransitionContainer=t.TransitionContainer,i.TransitionType=t.TransitionType,i.ViewVisibilityContext=t.ViewVisibilityContext,i.WidgetManager=t.WidgetManager,i.WidgetState=t.WidgetState,i.WidgetType=t.WidgetType,i.appActions=t.appActions,i.appConfigUtils=t.appConfigUtils,i.classNames=t.classNames,i.createSelector=t.createSelector,i.css=t.css,i.extensionSpec=t.extensionSpec,i.focusElementInKeyboardMode=t.focusElementInKeyboardMode,i.getA11yProps=t.getA11yProps,i.getAppStore=t.getAppStore,i.getHoverStyle=t.getHoverStyle,i.getIndexFromProgress=t.getIndexFromProgress,i.getNextAnimationId=t.getNextAnimationId,i.hooks=t.hooks,i.i18n=t.i18n,i.injectIntl=t.injectIntl,i.jimuHistory=t.jimuHistory,i.loadArcGISJSAPIModule=t.loadArcGISJSAPIModule,i.lodash=t.lodash,i.moduleLoader=t.moduleLoader,i.motion=t.motion,i.polished=t.polished,i.portalUtils=t.portalUtils,i.prepareLocalVariants=t.prepareLocalVariants,i.prepareOneByOneTransition=t.prepareOneByOneTransition,i.prepareOneByOneVariants=t.prepareOneByOneVariants,i.utils=t.utils},function(t){n.BaseLayoutService=t.BaseLayoutService,n.ContentServiceWrapper=t.ContentServiceWrapper,n.LayoutServiceProvider=t.LayoutServiceProvider,n.appBuilderSync=t.appBuilderSync,n.builderActions=t.builderActions,n.builderAppSync=t.builderAppSync,n.getAppConfigAction=t.getAppConfigAction,n.placeholderService=t.placeholderService,n.screenGroupService=t.screenGroupService,n.widgetService=t.widgetService},function(t){s.AdvancedButtonGroup=t.AdvancedButtonGroup,s.Button=t.Button,s.Checkbox=t.Checkbox,s.DistanceUnits=t.DistanceUnits,s.Dropdown=t.Dropdown,s.DropdownButton=t.DropdownButton,s.DropdownMenu=t.DropdownMenu,s.FOCUSABLE_CONTAINER_CLASS=t.FOCUSABLE_CONTAINER_CLASS,s.FillType=t.FillType,s.Icon=t.Icon,s.Label=t.Label,s.Loading=t.Loading,s.LoadingType=t.LoadingType,s.NumericInput=t.NumericInput,s.PanelHeader=t.PanelHeader,s.Popper=t.Popper,s.Select=t.Select,s.Surface=t.Surface,s.Switch=t.Switch,s.Tab=t.Tab,s.Tabs=t.Tabs,s.TextInput=t.TextInput,s.Tooltip=t.Tooltip,s.defaultMessages=t.defaultMessages,s.getFocusableElements=t.getFocusableElements,s.styleUtils=t.styleUtils,s.useTrapFocusBySelector=t.useTrapFocusBySelector,s.utils=t.utils},function(t){a.CLICK_TOLERANCE=t.CLICK_TOLERANCE,a.CONTEXT_MENU_ICON_SIZE=t.CONTEXT_MENU_ICON_SIZE,a.CONTEXT_MENU_ITEM_SIZE=t.CONTEXT_MENU_ITEM_SIZE,a.LayoutContext=t.LayoutContext,a.LayoutItemSizeModes=t.LayoutItemSizeModes,a.LayoutZIndex=t.LayoutZIndex,a.MIN_LAYOUT_ITEM_SIZE=t.MIN_LAYOUT_ITEM_SIZE,a.PageContext=t.PageContext,a.ViewportVisibilityContext=t.ViewportVisibilityContext,a.WidgetRenderer=t.WidgetRenderer,a.findLayoutBuilder=t.findLayoutBuilder,a.registerLayoutBuilder=t.registerLayoutBuilder,a.searchUtils=t.searchUtils,a.utils=t.utils},function(t){l.Theme2GlobalStyleClassName=t.Theme2GlobalStyleClassName,l.ThemeSwitchComponent=t.ThemeSwitchComponent,l.getBuilderThemeVariables=t.getBuilderThemeVariables,l.getTheme=t.getTheme,l.getTheme2=t.getTheme2,l.getTheme2Module=t.getTheme2Module,l.mapping=t.mapping,l.styled=t.styled,l.withBuilderTheme=t.withBuilderTheme,l.withTheme=t.withTheme},function(t){r.interact=t.interact},function(t){d.SettingRow=t.SettingRow,d.SettingSection=t.SettingSection,d.SidePopper=t.SidePopper,d.TemplateSelector=t.TemplateSelector,d.WidgetListPopper=t.WidgetListPopper},function(t){u.getBlockTemplates=t.getBlockTemplates,u.getFooterTemplates=t.getFooterTemplates,u.getFullScreenGridPageTemplates=t.getFullScreenGridPageTemplates,u.getFullScreenPageTemplates=t.getFullScreenPageTemplates,u.getGridTemplates=t.getGridTemplates,u.getHeaderTemplates=t.getHeaderTemplates,u.getScreenGroupTemplates=t.getScreenGroupTemplates,u.getScreenTemplates=t.getScreenTemplates,u.getScrollingPageTemplates=t.getScrollingPageTemplates,u.getWindowTemplates=t.getWindowTemplates},function(t){c.AnimationSettingComponent=t.AnimationSettingComponent,c.InputRatio=t.InputRatio,c.InputUnit=t.InputUnit,c.Padding=t.Padding,c.SizeEditor=t.SizeEditor,c.ThemeBackgroundSection=t.ThemeBackgroundSection,c.ThemeBorderSection=t.ThemeBorderSection,c.ThemeBoxShadowSection=t.ThemeBoxShadowSection,c.TransitionSetting=t.TransitionSetting},function(t){p.ThemeColorPicker=t.ThemeColorPicker}],execute:function(){t((()=>{var t={63:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M14 2H2v2h12zM2 1H1v4h14V1H2m2 7H2v6h2zM2 7H1v8h4V7H2m6 1h6v6H8zM7 7h8v8H7V7" clip-rule="evenodd"></path></svg>'},119:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M12 0a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4zm0 1H4a3 3 0 0 0-2.995 2.824L1 4v8a3 3 0 0 0 2.824 2.995L4 15h8a3 3 0 0 0 2.995-2.824L15 12V4a3 3 0 0 0-2.824-2.995zM8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8" clip-rule="evenodd"></path></svg>'},462:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12"><path fill="#fff" fill-rule="evenodd" d="M12 0H7v1h4v4h1V0M0 12h5v-1H1V7H0v5" clip-rule="evenodd"></path></svg>'},655:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M2.146 4.653a.485.485 0 0 1 .708 0L8 10.24l5.146-5.587a.485.485 0 0 1 .708 0 .54.54 0 0 1 0 .738l-5.5 5.956a.485.485 0 0 1-.708 0l-5.5-5.956a.54.54 0 0 1 0-.738" clip-rule="evenodd"></path></svg>'},914:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="m8 0 8 6-8 6-8-6zM1.887 6 8 10.82 14.113 6 8 1.18zM0 9.81.563 9 8 14.775 15.437 9l.563.81L8 16z" clip-rule="evenodd"></path></svg>'},1291:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M14.5 15a.5.5 0 0 0 0-1H7.46l2.348-2.138a.508.508 0 1 0-.684-.752L8 12.133V2h6.5a.5.5 0 0 0 0-1H.5a.5.5 0 0 0 0 1H7v10.207l-1.124-1.024a.508.508 0 1 0-.684.752L7.46 14H.5a.5.5 0 0 0 0 1zM14 6.5a.5.5 0 0 1-.5.5H10V6h3.5a.5.5 0 0 1 .5.5m-13 0a.5.5 0 0 0 .5.5H5V6H1.5a.5.5 0 0 0-.5.5" clip-rule="evenodd"></path></svg>'},1334:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M16 3.5a3.5 3.5 0 1 0-7 0V6H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-2V3.5l.005-.164A2.5 2.5 0 0 1 12.5 1l.164.005A2.5 2.5 0 0 1 15 3.5a.5.5 0 0 0 1 0M9 7H3v8h9V7H9m-1.5 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" clip-rule="evenodd"></path></svg>'},1496:t=>{"use strict";t.exports=a},1625:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M2 2h3v9H2zm0-1a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm4 5V2h8v4zm0 5V7h8v4zm-4.5 3a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1z" clip-rule="evenodd"></path></svg>'},1769:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M5.876 3.89 7 2.867V14H.5a.5.5 0 0 0 0 1h14a.5.5 0 0 0 0-1H8V2.794l1.124 1.023a.508.508 0 0 0 .684-.752L7.54 1 5.192 3.138a.508.508 0 0 0 .684.752M1.5 9a.5.5 0 0 0 0 1H5V9zm12 0a.5.5 0 0 1 0 1H10V9z" clip-rule="evenodd"></path></svg>'},1855:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M.5 1a.5.5 0 0 0 0 1h7.04L5.192 4.138a.508.508 0 1 0 .684.752L7 3.867V14H.5a.5.5 0 0 0 0 1h14a.5.5 0 0 0 0-1H8V3.793l1.124 1.024a.508.508 0 0 0 .684-.752L7.54 2h6.96a.5.5 0 0 0 0-1zM1 9.5a.5.5 0 0 1 .5-.5H5v1H1.5a.5.5 0 0 1-.5-.5m13 0a.5.5 0 0 0-.5-.5H10v1h3.5a.5.5 0 0 0 .5-.5" clip-rule="evenodd"></path></svg>'},1888:t=>{"use strict";t.exports=l},1993:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M7.5 1.914 6.475 2.94a.5.5 0 1 1-.707-.707L8 0l2.157 2.157a.5.5 0 0 1-.707.707l-.95-.95V7.5h5.586l-1.1-1.1a.5.5 0 1 1 .706-.708L16 8l-2.232 2.232a.5.5 0 1 1-.707-.707L14.086 8.5H8.5v5.586l1.025-1.025a.5.5 0 1 1 .707.707L8 16l-2.308-2.308a.5.5 0 1 1 .707-.707l1.101 1.1V8.5H1.914l.95.95a.5.5 0 0 1-.707.707L0 8l2.232-2.232a.5.5 0 1 1 .707.707L1.914 7.5H7.5z" clip-rule="evenodd"></path></svg>'},2046:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M11.227 1.312c-.404-.404-1.045-.417-1.432-.03L2.49 8.587l-.48 2.674a.637.637 0 0 0 .73.73l2.673-.48 7.305-7.306c.387-.387.374-1.028-.03-1.431zm-8.114 9.575.32-1.781 4.991-4.992 1.462 1.462-4.992 4.991zm7.473-6.012 1.402-1.4-1.462-1.463-1.401 1.402z" clip-rule="evenodd"></path><path fill="#000" d="M1.5 14a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1z"></path></svg>'},2491:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M1 13.5a.5.5 0 0 0 1 0v-6l3.459 3.953a.5.5 0 0 0 .752-.658L3.766 8H13.5a.5.5 0 0 0 0-1H3.766l2.445-2.794a.5.5 0 1 0-.752-.659L2 7.5v-6a.5.5 0 0 0-1 0z" clip-rule="evenodd"></path></svg>'},2717:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M7.54 1H14v13H7.46l2.348-2.138a.508.508 0 1 0-.684-.752L8 12.134V9H7v3.206l-1.124-1.022a.508.508 0 1 0-.685.751L7.46 14H1V1zm0 0L5.192 3.138a.508.508 0 1 0 .684.752L7 2.867V6h1V2.794l1.124 1.023a.508.508 0 0 0 .684-.752zM0 1a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1z" clip-rule="evenodd"></path></svg>'},2756:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18"><path fill="#000" fill-rule="evenodd" d="M1.5 1.5h5v5h-5zM.25 7.75V.25h7.5v7.5zM1.5 11.5h5v5h-5zM.25 17.75v-7.5h7.5v7.5zM16.5 1.5h-5v5h5zM10.25.25v7.5h7.5V.25zm3.125 17.5v-3.125H10.25v-1.25h3.125V10.25h1.25v3.125h3.125v1.25h-3.125v3.125z" clip-rule="evenodd"></path></svg>'},2799:(t,e)=>{"use strict";var o="function"==typeof Symbol&&Symbol.for,i=o?Symbol.for("react.element"):60103,n=o?Symbol.for("react.portal"):60106,s=o?Symbol.for("react.fragment"):60107,a=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,r=o?Symbol.for("react.provider"):60109,d=o?Symbol.for("react.context"):60110,u=o?Symbol.for("react.async_mode"):60111,c=o?Symbol.for("react.concurrent_mode"):60111,p=o?Symbol.for("react.forward_ref"):60112,h=o?Symbol.for("react.suspense"):60113,g=o?Symbol.for("react.suspense_list"):60120,m=o?Symbol.for("react.memo"):60115,y=o?Symbol.for("react.lazy"):60116,f=o?Symbol.for("react.block"):60121,v=o?Symbol.for("react.fundamental"):60117,I=o?Symbol.for("react.responder"):60118,x=o?Symbol.for("react.scope"):60119;function b(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case i:switch(t=t.type){case u:case c:case s:case l:case a:case h:return t;default:switch(t=t&&t.$$typeof){case d:case p:case y:case m:case r:return t;default:return e}}case n:return e}}}function w(t){return b(t)===c}e.AsyncMode=u,e.ConcurrentMode=c,e.ContextConsumer=d,e.ContextProvider=r,e.Element=i,e.ForwardRef=p,e.Fragment=s,e.Lazy=y,e.Memo=m,e.Portal=n,e.Profiler=l,e.StrictMode=a,e.Suspense=h,e.isAsyncMode=function(t){return w(t)||b(t)===u},e.isConcurrentMode=w,e.isContextConsumer=function(t){return b(t)===d},e.isContextProvider=function(t){return b(t)===r},e.isElement=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===i},e.isForwardRef=function(t){return b(t)===p},e.isFragment=function(t){return b(t)===s},e.isLazy=function(t){return b(t)===y},e.isMemo=function(t){return b(t)===m},e.isPortal=function(t){return b(t)===n},e.isProfiler=function(t){return b(t)===l},e.isStrictMode=function(t){return b(t)===a},e.isSuspense=function(t){return b(t)===h},e.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===s||t===c||t===l||t===a||t===h||t===g||"object"==typeof t&&null!==t&&(t.$$typeof===y||t.$$typeof===m||t.$$typeof===r||t.$$typeof===d||t.$$typeof===p||t.$$typeof===v||t.$$typeof===I||t.$$typeof===x||t.$$typeof===f)},e.typeOf=b},2838:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m8.745 8 6.1 6.1a.527.527 0 1 1-.745.746L8 8.746l-6.1 6.1a.527.527 0 1 1-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 0 1 .746-.746l6.1 6.1 6.1-6.1a.527.527 0 0 1 .746.746z"></path></svg>'},2943:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M4.653 13.854a.485.485 0 0 1 0-.708L10.24 8 4.653 2.854a.485.485 0 0 1 0-.708.54.54 0 0 1 .738 0l5.956 5.5a.485.485 0 0 1 0 .708l-5.956 5.5a.54.54 0 0 1-.738 0" clip-rule="evenodd"></path></svg>'},3303:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M9.438.994c.213 0 .397.146.44.35q.227 1.084.316 1.852.562.242 1.048.599l1.728-.676a.455.455 0 0 1 .556.188l1.42 2.394a.43.43 0 0 1-.091.547 22 22 0 0 1-1.49 1.194q.03.27.03.552 0 .32-.038.63l1.465 1.12a.43.43 0 0 1 .111.563l-1.42 2.394a.454.454 0 0 1-.53.197 23 23 0 0 1-1.807-.66q-.49.35-1.055.586l-.263 1.794a.446.446 0 0 1-.445.376H6.574a.446.446 0 0 1-.44-.35 21 21 0 0 1-.317-1.853 5.3 5.3 0 0 1-1.047-.598l-1.728.675a.455.455 0 0 1-.556-.187l-1.42-2.395a.43.43 0 0 1 .091-.546q.85-.735 1.49-1.194a5.167 5.167 0 0 1 .008-1.183L1.19 6.243a.43.43 0 0 1-.112-.562l1.42-2.395a.455.455 0 0 1 .531-.196q1.078.35 1.807.66c.324-.233.679-.43 1.056-.587l.262-1.794A.446.446 0 0 1 6.6.994zm-.365 1H6.985l-.28 1.866-.467.19q-.353.144-.672.34l-.207.136-.42.293-.476-.197q-.492-.205-1.169-.433l-.221-.074-1.045 1.719L3.59 6.999l-.06.479a4 4 0 0 0-.021.816l.014.144.058.492-.419.294q-.433.304-.979.746l-.177.145 1.043 1.72 1.845-.703.406.29q.307.219.645.384l.228.103.474.199.059.49q.06.507.19 1.177l.043.219h2.088l.282-1.867.466-.19q.354-.144.672-.34l.207-.136.419-.293.476.198q.495.204 1.17.433l.22.072 1.044-1.718-1.56-1.165.06-.479a4 4 0 0 0 .02-.815l-.013-.144-.06-.492.42-.295a18 18 0 0 0 .98-.746l.176-.146-1.043-1.72-1.844.705-.406-.29a4.5 4.5 0 0 0-.646-.385l-.228-.103-.474-.199-.058-.49q-.049-.405-.14-.916zm-1.067 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 1a2 2 0 1 0 0 4 2 2 0 0 0 0-4" clip-rule="evenodd"></path></svg>'},3377:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M9.124 12.11 8 13.133V2h6.5a.5.5 0 0 0 0-1H.5a.5.5 0 0 0 0 1H7v11.207l-1.124-1.024a.508.508 0 1 0-.684.752L7.46 15l2.348-2.138a.508.508 0 1 0-.684-.752M13.5 7a.5.5 0 0 0 0-1H10v1zm-12 0a.5.5 0 0 1 0-1H5v1z" clip-rule="evenodd"></path></svg>'},3387:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M12 8.002a.5.5 0 0 1-1 0V1H1v12.003h3.5a.5.5 0 1 1 0 1H1a1 1 0 0 1-1-1V1A1 1 0 0 1 .044.706.498.498 0 0 1 .5 0H11a1 1 0 0 1 1 1zm2.218 1.486a.5.5 0 0 0-.708 0l-5.657 5.658a.5.5 0 0 0 .708.707l5.657-5.658a.5.5 0 0 0 0-.707M11 9.928c.376 0 .794.041 1.23.141l-.871.871a5 5 0 0 0-.359-.012c-1 0-2.731.297-3.83 2 .313.486.677.857 1.062 1.14l-.676.676A6.1 6.1 0 0 1 6 12.928c1.333-2.334 3.5-3 5-3m0 5c-.219 0-.472-.014-.746-.054l-.824.825a5.6 5.6 0 0 0 1.57.23c1.5 0 3.667-.667 5-3a6 6 0 0 0-1.804-1.998l-.684.684c.478.299.936.721 1.319 1.313-1.1 1.704-2.831 2-3.831 2M2.5 3.502A.5.5 0 0 1 3 3h6a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" clip-rule="evenodd"></path></svg>'},3529:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M8 12c-2.667 0-5.667-1.333-7-4 1.333-2.667 4.333-4 7-4s5.667 1.333 7 4c-1.333 2.667-4.333 4-7 4m0-7c-2.618 0-4.578.967-6 3 1.422 2.033 3.382 3 6 3s4.578-.967 6-3c-1.422-2.033-3.382-3-6-3m0 5.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" clip-rule="evenodd"></path></svg>'},3593:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M1.5 1a.5.5 0 0 0 0 1h6L3.547 5.459a.5.5 0 1 0 .658.752L7 3.766V13.5a.5.5 0 0 0 1 0V3.766l2.794 2.445a.5.5 0 1 0 .659-.752L7.5 2h6a.5.5 0 0 0 0-1z" clip-rule="evenodd"></path></svg>'},3662:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M7.5 0a.5.5 0 0 0-.5.5V7H.5a.5.5 0 0 0 0 1H7v6.5a.5.5 0 0 0 1 0V8h6.5a.5.5 0 0 0 0-1H8V.5a.5.5 0 0 0-.5-.5"></path></svg>'},4005:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="m1 7.5 3-2V7h2v1H4v1.5zm14 0-3 2V8h-2V7h2V5.5zM7 7h2v1H7z" clip-rule="evenodd"></path></svg>'},4064:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M13.854 11.347a.486.486 0 0 1-.708 0L8 5.76l-5.146 5.587a.485.485 0 0 1-.708 0 .54.54 0 0 1 0-.738l5.5-5.956a.485.485 0 0 1 .708 0l5.5 5.956a.54.54 0 0 1 0 .738" clip-rule="evenodd"></path></svg>'},4072:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M14 1v13H1V7.46l2.138 2.348a.508.508 0 0 0 .752-.684L2.867 8H6V7H2.794l1.023-1.124a.508.508 0 0 0-.752-.685L1 7.46V1zm0-1a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1zm-1.867 7L11.11 5.876a.508.508 0 1 1 .752-.684L14 7.54l-2.065 2.268a.508.508 0 0 1-.751-.684L12.206 8H9V7z" clip-rule="evenodd"></path></svg>'},4108:t=>{"use strict";t.exports=n},4146:(t,e,o)=>{"use strict";var i=o(4363),n={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},s={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};function r(t){return i.isMemo(t)?a:l[t.$$typeof]||n}l[i.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},l[i.Memo]=a;var d=Object.defineProperty,u=Object.getOwnPropertyNames,c=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,h=Object.getPrototypeOf,g=Object.prototype;t.exports=function t(e,o,i){if("string"!=typeof o){if(g){var n=h(o);n&&n!==g&&t(e,n,i)}var a=u(o);c&&(a=a.concat(c(o)));for(var l=r(e),m=r(o),y=0;y<a.length;++y){var f=a[y];if(!(s[f]||i&&i[f]||m&&m[f]||l&&l[f])){var v=p(o,f);try{d(e,f,v)}catch(t){}}}}return e}},4221:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M2 2v12h3V2zm4 0v12h4V2zm8 12h-3V2h3zM1 14a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1z" clip-rule="evenodd"></path></svg>'},4321:t=>{"use strict";t.exports=s},4337:t=>{"use strict";t.exports=p},4343:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><g id="Brand/widget-accordion"><path id="Union" fill="#fff" fill-rule="evenodd" d="M1 1h18v1H1zM0 3V0h20v3zm3 5h14v1H3zm0 3h9v1H3zm16 7H1v1h18zM0 17v3h20v-3zM1 6h18v8H1zm-1 9V5h20v10z" clip-rule="evenodd"></path></g></svg>'},4363:(t,e,o)=>{"use strict";t.exports=o(2799)},4548:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M12 0a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4zm0 1H4a3 3 0 0 0-2.995 2.824L1 4v8a3 3 0 0 0 2.824 2.995L4 15h8a3 3 0 0 0 2.995-2.824L15 12V4a3 3 0 0 0-2.824-2.995zM8 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6" clip-rule="evenodd"></path></svg>'},4651:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M2 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2m5 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0m6 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0" clip-rule="evenodd"></path></svg>'},5108:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M1 1.5a.5.5 0 0 1 1 0v13a.5.5 0 0 1-1 0zM14 9H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1M4 12v-2h10v2zm0-9h6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m0 1v2h6V4z" clip-rule="evenodd"></path></svg>'},5196:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M2 15a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1zm0-1V2h4v12zm5-7V2h4v5zm0 7V8h4v6z" clip-rule="evenodd"></path><path fill="#000" d="M14 14.5a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-1 0z"></path></svg>'},5447:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M14.994 2.243A1.375 1.375 0 0 0 13.625 1h-7.25l-.132.006A1.375 1.375 0 0 0 5 2.375v1.75h.917v-1.75l.007-.082a.46.46 0 0 1 .451-.376h7.25l.082.007a.46.46 0 0 1 .376.451v7.25l-.007.082a.46.46 0 0 1-.451.376h-1.738V11h1.738l.132-.006A1.375 1.375 0 0 0 15 9.625v-7.25zM9.625 5h-7.25C1.615 5 1 5.616 1 6.375v7.25C1 14.385 1.616 15 2.375 15h7.25c.76 0 1.375-.616 1.375-1.375v-7.25C11 5.615 10.384 5 9.625 5M2.4 6h7.2c.22 0 .4.201.4.45v7.1c0 .248-.18.45-.4.45H2.4c-.22 0-.4-.201-.4-.45v-7.1c0-.249.18-.45.4-.45M4 8h4v1H4zm4 3H4v1h4z" clip-rule="evenodd"></path></svg>'},5477:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M2 2.707v1.45a.5.5 0 0 1-1 0V1h3.05a.5.5 0 1 1 0 1H2.707L8 7.29 13.293 2H11.95a.5.5 0 1 1 0-1H15v3.156a.5.5 0 0 1-1 0v-1.45L8.707 7.999l5.29 5.289v-1.55a.5.5 0 1 1 1 0V15H11.84a.5.5 0 1 1 0-1h1.456L8 8.705 2.704 14h1.453a.5.5 0 1 1 0 1H1v-3.263a.5.5 0 0 1 1 0v1.553l5.293-5.292z" clip-rule="evenodd"></path></svg>'},5508:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6.5 7.5A.5.5 0 0 1 7 7h1.5v4.5h1a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1h1V8H7a.5.5 0 0 1-.5-.5"></path><path fill="#000" fill-rule="evenodd" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16m0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14" clip-rule="evenodd"></path></svg>'},5549:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M6 5H2v6h4zM1 4v8h6V4zM14 5h-4v6h4zM9 4v8h6V4z" clip-rule="evenodd"></path></svg>'},5562:t=>{"use strict";t.exports=c},5741:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M1 3h14v1H1zM9 7h6v1H9zM4.328 14.354a.5.5 0 0 0 .708 0l3.182-3.182a.5.5 0 1 0-.708-.708l-2.328 2.329V6h-1v6.793l-2.328-2.328a.5.5 0 1 0-.708.707z"></path></svg>'},6245:t=>{"use strict";t.exports=r},6490:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M3.154 3.154a.527.527 0 0 1 .746 0l1.317 1.317A8.6 8.6 0 0 1 8 4c2.667 0 5.667 1.333 7 4-.696 1.393-1.847 2.422-3.168 3.087l1.014 1.013a.527.527 0 1 1-.746.746l-1.317-1.317A8.6 8.6 0 0 1 8 12c-2.667 0-5.667-1.333-7-4 .696-1.393 1.847-2.422 3.168-3.087L3.154 3.9a.527.527 0 0 1 0-.746m1.698 2.443C3.726 6.087 2.782 6.882 2 8c1.422 2.033 3.382 3 6 3a8.7 8.7 0 0 0 2.03-.225l-.675-.674A2.5 2.5 0 0 1 5.9 6.644zm6.296 4.805C12.275 9.913 13.218 9.119 14 8c-1.422-2.033-3.382-3-6-3q-1.088 0-2.03.225l.675.674a2.5 2.5 0 0 1 3.457 3.456zM6.5 8c0-.221.048-.431.134-.62l1.987 1.986A1.5 1.5 0 0 1 6.5 8m.88-1.366 1.986 1.987a1.5 1.5 0 0 0-1.987-1.987" clip-rule="evenodd"></path></svg>'},6663:t=>{t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjkycHgiIGhlaWdodD0iNzJweCIgdmlld0JveD0iMCAwIDkyIDcyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT5pY29uX2FuaW1hdGlvbl90cmFuc2l0aW9uX2ZhZGU8L3RpdGxlPg0KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTA2MS4wMDAwMDAsIC0xNTAuMDAwMDAwKSI+DQogICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5MTcuMDAwMDAwLCA1Mi4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNDQuMDAwMDAwLCA5OC4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgPHJlY3Qgb3BhY2l0eT0iMC4xMDAwMDAwMDEiIGZpbGwtcnVsZT0ibm9uemVybyIgeD0iMCIgeT0iMCIgd2lkdGg9IjkyIiBoZWlnaHQ9IjcyIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgIDxyZWN0IGZpbGw9IiM1MjUyNTIiIHg9IjI4IiB5PSIyNCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjQ4Ij48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgIDxyZWN0IGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsPSIjMzYzNjM2IiB4PSIwIiB5PSIwIiB3aWR0aD0iNjQiIGhlaWdodD0iNDgiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTY0LDAgTDY0LDQ4IEwwLDQ4IEwwLDAgTDY0LDAgWiBNNjMsMSBMMSwxIEwxLDQ3IEw2Myw0NyBMNjMsMSBaIiBmaWxsPSIjNkE2QTZBIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4NCiAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4="},6884:t=>{"use strict";t.exports=u},7386:t=>{"use strict";t.exports=o},7528:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M2 2h12v4H2zM1 7V1h14v6zm1 3h12v4H2zm-1 5V9h14v6z" clip-rule="evenodd"></path></svg>'},7568:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M11.347 2.146a.485.485 0 0 1 0 .708L5.76 8l5.587 5.146a.486.486 0 0 1 0 .708.54.54 0 0 1-.738 0l-5.956-5.5a.485.485 0 0 1 0-.708l5.956-5.5a.54.54 0 0 1 .738 0" clip-rule="evenodd"></path></svg>'},7927:t=>{"use strict";t.exports=function(t,e,o,i,n,s,a,l){if(!t){var r;if(void 0===e)r=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var d=[o,i,n,s,a,l],u=0;(r=new Error(e.replace(/%s/g,function(){return d[u++]}))).name="Invariant Violation"}throw r.framesToPop=1,r}}},8056:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M15 7.5a.5.5 0 0 0-.5-.5H.5a.5.5 0 0 0 0 1h14a.5.5 0 0 0 .5-.5M7.5 0a.52.52 0 0 0-.527.516v3.508L5.4 2.527a.535.535 0 0 0-.746 0 .51.51 0 0 0 0 .73L7.5 6l2.846-2.743a.51.51 0 0 0 0-.73.535.535 0 0 0-.746 0L8.027 4.024V.516A.52.52 0 0 0 7.5 0m0 15a.52.52 0 0 1-.527-.516v-3.508L5.4 12.473a.535.535 0 0 1-.746 0 .51.51 0 0 1 0-.73L7.5 9l2.846 2.743a.51.51 0 0 1 0 .73.535.535 0 0 1-.746 0l-1.573-1.497v3.508A.52.52 0 0 1 7.5 15" clip-rule="evenodd"></path></svg>'},8081:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M13.5 14a.5.5 0 0 0 0-1h-6l3.953-3.459a.5.5 0 0 0-.658-.752L8 11.234V1.5a.5.5 0 0 0-1 0v9.734L4.206 8.789a.5.5 0 0 0-.659.752L7.5 13h-6a.5.5 0 0 0 0 1z" clip-rule="evenodd"></path></svg>'},8416:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M1 3h14v1H1zM9 7h6v1H9zM5.036 6.146a.5.5 0 0 0-.708 0L1.146 9.328a.5.5 0 1 0 .708.708l2.328-2.329V14.5h1V7.707l2.328 2.329a.5.5 0 1 0 .708-.708z"></path></svg>'},8547:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M7.5 0A3.5 3.5 0 0 1 11 3.5V6h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1V3.5A3.5 3.5 0 0 1 7.5 0M5 6h5V3.5a2.5 2.5 0 0 0-2.336-2.495L7.5 1a2.5 2.5 0 0 0-2.495 2.336L5 3.5zm6 1H3v8h9V7zm-3.5 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" clip-rule="evenodd"></path></svg>'},8686:t=>{t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjkycHgiIGhlaWdodD0iNzJweCIgdmlld0JveD0iMCAwIDkyIDcyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT5pY29uX2FuaW1hdGlvbl90cmFuc2l0aW9uX3B1c2g8L3RpdGxlPg0KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTQxLjAwMDAwMCwgLTI3MC4wMDAwMDApIiBmaWxsLXJ1bGU9Im5vbnplcm8iPg0KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTE3LjAwMDAwMCwgNTIuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQuMDAwMDAwLCAyMTguMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5MiIgaGVpZ2h0PSI3MiI+PC9yZWN0Pg0KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOTIsMCBMOTIsNzIgTDAsNzIgTDAsMCBMOTIsMCBaIE05MSwzNyBMMSwzNyBMMSw3MSBMOTEsNzEgTDkxLDM3IFogTTQ2LDQ0IEw1Niw1NCBMNTAuMTY2NjY2Nyw1NCBMNTAuMTY2NjY2Nyw2NCBMNDEuODMzMzMzMyw2NCBMNDEuODMzMzMzMyw1NCBMMzYsNTQgTDQ2LDQ0IFoiIGZpbGw9IiM2QTZBNkEiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4="},8710:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M7.5 0a.5.5 0 0 0-.5.5v14a.5.5 0 0 0 1 0V.5a.5.5 0 0 0-.5-.5M0 7.5c0 .291.231.527.516.527h3.508L2.527 9.6a.535.535 0 0 0 0 .746.51.51 0 0 0 .73 0L6 7.5 3.257 4.654a.51.51 0 0 0-.73 0 .535.535 0 0 0 0 .746l1.497 1.573H.516A.52.52 0 0 0 0 7.5m15 0a.52.52 0 0 1-.516.527h-3.508L12.473 9.6a.535.535 0 0 1 0 .746.51.51 0 0 1-.73 0L9 7.5l2.743-2.846a.51.51 0 0 1 .73 0 .535.535 0 0 1 0 .746l-1.497 1.573h3.508c.285 0 .516.236.516.527" clip-rule="evenodd"></path></svg>'},8736:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path fill="#000" fill-rule="evenodd" d="M14 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2zM2 1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1" clip-rule="evenodd"></path><path fill="#000" fill-rule="evenodd" d="M20 8a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2zM8 7h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1" clip-rule="evenodd"></path></svg>'},9044:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M6 6.5a.5.5 0 0 1 1 0v6a.5.5 0 0 1-1 0zM9.5 6a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 1 0v-6a.5.5 0 0 0-.5-.5"></path><path fill="#000" fill-rule="evenodd" d="M11 0H5a1 1 0 0 0-1 1v2H.5a.5.5 0 0 0 0 1h1.6l.81 11.1a1 1 0 0 0 .995.9h8.19a1 1 0 0 0 .995-.9L13.9 4h1.6a.5.5 0 0 0 0-1H12V1a1 1 0 0 0-1-1m0 3V1H5v2zm1.895 1h-9.79l.8 11h8.19z" clip-rule="evenodd"></path></svg>'},9238:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M13.146 13.847a.486.486 0 0 0 .708 0 .54.54 0 0 0 0-.738l-5.5-5.956a.485.485 0 0 0-.708 0l-5.5 5.956a.54.54 0 0 0 0 .738.485.485 0 0 0 .708 0L8 8.26zm0-5a.485.485 0 0 0 .708 0 .54.54 0 0 0 0-.738l-5.5-5.956a.485.485 0 0 0-.708 0l-5.5 5.956a.54.54 0 0 0 0 .738.485.485 0 0 0 .708 0L8 3.26z" clip-rule="evenodd"></path></svg>'},9244:t=>{"use strict";t.exports=i},9298:t=>{"use strict";t.exports=d},9566:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M14 1.5a.5.5 0 0 0-1 0v6L9.541 3.547a.5.5 0 1 0-.752.658L11.234 7H1.5a.5.5 0 0 0 0 1h9.734l-2.445 2.794a.5.5 0 1 0 .752.659L13 7.5v6a.5.5 0 0 0 1 0z" clip-rule="evenodd"></path></svg>'},9572:t=>{t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjkycHgiIGhlaWdodD0iNzJweCIgdmlld0JveD0iMCAwIDkyIDcyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT5pY29uX2FuaW1hdGlvbl9pbl9ub25lPC90aXRsZT4NCiAgICA8ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTk0MS4wMDAwMDAsIC0xOTIuMDAwMDAwKSI+DQogICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5MTcuMDAwMDAwLCA1Mi4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNC4wMDAwMDAsIDE0MC4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgPHJlY3QgZmlsbC1ydWxlPSJub256ZXJvIiB4PSIwIiB5PSIwIiB3aWR0aD0iOTIiIGhlaWdodD0iNzIiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0iIzZBNkE2QSIgcG9pbnRzPSI0NiA0OCAzMS44OTMxNTM5IDU1LjQxNjQwNzkgMzQuNTg3MzIxOCAzOS43MDgyMDM5IDIzLjE3NDY0MzYgMjguNTgzNTkyMSAzOC45NDY1NzcgMjYuMjkxNzk2MSA0NiAxMiA1My4wNTM0MjMgMjYuMjkxNzk2MSA2OC44MjUzNTY0IDI4LjU4MzU5MjEgNTcuNDEyNjc4MiAzOS43MDgyMDM5IDYwLjEwNjg0NjEgNTUuNDE2NDA3OSI+PC9wb2x5Z29uPg0KICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg=="},9869:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M1.5 11a.5.5 0 0 0 .5-.5V2h8.5a.5.5 0 0 0 0-1H2a1 1 0 0 0-1 1v8.5a.5.5 0 0 0 .5.5M5 4h9a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m0 1v9h9V5z" clip-rule="evenodd"></path></svg>'}},e={};function h(o){var i=e[o];if(void 0!==i)return i.exports;var n=e[o]={exports:{}};return t[o](n,n.exports,h),n.exports}h.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return h.d(e,{a:e}),e},h.d=(t,e)=>{for(var o in e)h.o(e,o)&&!h.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},h.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),h.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var g={};return(()=>{"use strict";h.r(g),h.d(g,{AccordionLayoutBuilder:()=>Sa,AccordionLayoutItemSetting:()=>Bl,CanvasPane:()=>Ji,ColumnLayoutBuilder:()=>pn,ColumnLayoutItemSetting:()=>yl,ColumnLayoutService:()=>_d,CommonLayoutItemSetting:()=>Oa,CommonTransformSetting:()=>Ea,DEFAULT_ROW_LAYOUT_SETTING:()=>hn,DropArea:()=>Xe,FixedLayoutItemSetting:()=>Ya,FixedLayoutService:()=>Fd,FlexRowLayoutBuilder:()=>ja,FlexRowLayoutItemSetting:()=>Sl,FlowLayoutItemSetting:()=>dl,FlowLayoutService:()=>Wd,FlowLayoutSetting:()=>Vl,GLOBAL_DRAGGING_CLASS_NAME:()=>Ot,GLOBAL_H5_DRAGGING_CLASS_NAME:()=>Et,GLOBAL_RESIZING_CLASS_NAME:()=>Ut,GridLayoutBuilder:()=>Vs,GridLayoutItemSetting:()=>$l,GridLayoutService:()=>Od,GridLayoutSetting:()=>Xl,LIMITED_BOUNDARY_CLASS_NAME:()=>Bt,LayoutBuilder:()=>on,LayoutEntry:()=>ro,LayoutItemInBuilder:()=>jo,LayoutItemToolbar:()=>Te,PageRenderer:()=>su,ResizeHandlers:()=>Se,RowLayoutBuilder:()=>jn,RowLayoutItemSetting:()=>Ll,RowLayoutService:()=>Nd,SectionRendererInBuilder:()=>So,ShapeL:()=>le,ShapeRect:()=>ce,Toolbar:()=>Kt,WidgetPlaceholder:()=>io,WidgetRendererInBuilder:()=>no,addItemToLayout:()=>W,appendItemToApp:()=>$e,bindDragHandler:()=>Ht,bindResizeHandler:()=>Yt,canDeleteInExpressMode:()=>Pe,getLabelOfGridTab:()=>Nn,getRootLayoutId:()=>F,sectionMenuItems:()=>Nt,splitGridCell:()=>Hn,withRnd:()=>uu});var t=h(7386),e=h(9244),o=h(4108),i=h(4321);const n=e.lodash.assign({},{gridSize:1}),s=e.lodash.assign({},{order:0},{lockParent:!1,lockLayout:!1,autoProps:{}});var a=h(1496),l=h(4651),r=h.n(l),d=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const u=o=>{const i=window.SVG,{className:n}=o,s=d(o,["className"]),a=(0,e.classNames)("jimu-icon jimu-icon-component",n);return i?(0,t.jsx)(i,Object.assign({className:a,src:r()},s)):(0,t.jsx)("svg",Object.assign({className:a},s))};var c=h(1888);const p=e.React.createContext({}),m={fallbackPlacements:["top","right"]},y={fallbackAxisSideDirection:"start"};class f extends e.React.PureComponent{constructor(){super(...arguments),this.select=t=>{if(null==t||t.stopPropagation(),this.props.onClick){const{parentRef:e}=this.contextProps;this.props.onClick({layoutId:this.contextProps.layoutId,layoutItem:this.contextProps.layoutItem,clientRect:e&&e.getBoundingClientRect()},t),this.contextProps.onItemClick(this.props.uid)}},this.handleDoubleClick=t=>{t.stopPropagation()},this.handleMouseEnter=t=>{t.stopPropagation(),this.props.onMouseEnter&&this.props.onMouseEnter({layoutId:this.contextProps.layoutId,layoutItem:this.contextProps.layoutItem,clientRect:null},t)},this.handleMouseLeave=t=>{t.stopPropagation(),this.props.onMouseLeave&&this.props.onMouseLeave({layoutId:this.contextProps.layoutId,layoutItem:this.contextProps.layoutItem,clientRect:null},t)}}componentDidMount(){const{widgetId:t,extName:i,openWhenAdded:n,isNewAdded:s}=this.props;t&&i&&(n&&s&&this.select(),window.jimuConfig.isInBuilder?(0,e.getAppStore)().dispatch(e.appActions.widgetRuntimeInfoChange(t,"shouldExpandContextTool",!1)):o.builderAppSync.publishWidgetRuntimeInfoChangeToApp(t,"shouldExpandContextTool",!1))}componentDidUpdate(){const t=this.getValue(this.props.visible,this.contextProps),e=this.getValue(this.props.disabled,this.contextProps);t&&!e||this.contextProps.onItemUnSelected(this.props.uid)}componentWillUnmount(){this.contextProps.onItemUnSelected(this.props.uid)}getValue(t,e){return"function"==typeof t?t(e):t}getStyle(){const{theme:t}=this.contextProps;return e.css`
      cursor: pointer;
      width: 32px;
      min-height: 32px;
      display: flex;
      justify-content: flex-start;
      user-select: none;
      background: ${t.ref.palette.neutral[400]};

      &:hover {
        background: ${t.ref.palette.neutral[500]};
      }
      &.selected {
        background: ${t.sys.color.primary.main};
      }

      &.disabled,
      &.no-action {
        cursor: default;
        &:hover {
          background: ${t.ref.palette.neutral[400]};
        }
      }
      &.disabled {
        .jimu-btn {
          cursor: default;
          pointer-events: auto;
        }
        .jimu-btn svg, .toolbar-label {
          color: ${t.ref.palette.neutral[800]} !important;
        }
      }

      &.msg {
        width: auto;
        font-size: 12px;
        color: ${t.ref.palette.black};
        letter-spacing: 0.33px;
        text-align: center;
        padding: 0 8px;
      }

      .toolbar-group & {
        justify-content: flex-start;
      }

      .popper {
        border: 1px solid ${t.ref.palette.neutral[900]};
      }

      .toolbar-label {
        color: ${t.ref.palette.black};
      }
    `}separatorStyle(){const{theme:t}=this.contextProps;return this.props.isInGroup?e.css`
        width: 100%;
        height: 1px;
        background-color: ${t.ref.palette.neutral[600]};
        align-self: center;
      `:e.css`
      div.toolbar-item:not(.d-none) + &,
      div.toolbar-group:not(.d-none) + & {
        display: block;
      }
      display: none;
      width: 1px;
      height: 30px;
      border-left: 1px solid ${t.ref.palette.neutral[600]};
      align-self: center;
    `}tooltipStyle(){const{theme:t}=this.contextProps;return e.css`
      border: none;

      .tooltip {
        color: ${t.ref.palette.black};
        background-color: ${t.ref.palette.neutral[600]};
        border-color: ${t.ref.palette.neutral[400]};
      }
    `}createButton({textContent:o,iconContent:n,tooltip:s,isDisabled:a,noAction:l,isChecked:r,rotate:d,iconSize:u,autoFlipIcon:c,ref:p}){const h=o?"":s,g=a?{title:h}:{},y=(0,t.jsxs)(i.Button,Object.assign({"aria-label":o||s,ref:p,className:(0,e.classNames)("toolbar-item-button px-0 w-100",{"justify-content-start":o}),type:"tertiary",disableHoverEffect:!0,size:"sm",icon:n&&!o,role:"menuitem",onClick:a||l?null:this.select,disabled:a,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,onDoubleClick:this.handleDoubleClick,"data-extname":this.props.extName},g,{children:[n&&(0,t.jsx)(i.Icon,{className:(0,e.classNames)("tool-item-icon",{checked:r}),icon:n,rotate:d,size:u,color:this.contextProps.theme.ref.palette.black,autoFlip:c}),o&&(0,t.jsx)("span",{className:"toolbar-label text-nowrap",children:o})]}));return a?y:(0,t.jsx)(i.Tooltip,{placement:"bottom",title:h,flipOptions:m,css:this.tooltipStyle(),children:y})}render(){const{icon:o,autoFlipIcon:n,label:s,size:a,checked:l,disabled:r,visible:d,rotate:u,settingPanel:h,title:g,uid:m,widgetId:f,className:v,separator:I}=this.props;if(I)return(0,t.jsx)(p.Consumer,{children:e=>(this.contextProps=e,(0,t.jsx)("div",{"data-testid":"toolbarSeparator",css:this.separatorStyle()}))});const x=null==this.props.onClick,b=a||16,w=h;return(0,t.jsx)(p.Consumer,{children:a=>{var p;if(this.contextProps=a,f&&(null===(p=a.layoutItem)||void 0===p?void 0:p.widgetId)!==f)return null;let I="";"function"==typeof g?I=g(a):"string"==typeof g&&(I=g);const S=h&&a.activeItem===m&&a.toggleOn,C=S||this.getValue(l,a),R=this.getValue(r,a),T=this.getValue(d,a),M=this.getValue(s,a),L=this.getValue(o,a);return(0,t.jsxs)("div",{className:(0,e.classNames)("toolbar-item",v,{selected:C,disabled:R,msg:M,"no-action":x,"d-none":null!=d&&!T}),css:this.getStyle(),"data-toolstate":this.props.toolState,children:[!w&&this.createButton({textContent:M,iconContent:L,tooltip:I,isDisabled:R,noAction:x,isChecked:C,rotate:u,iconSize:b,autoFlipIcon:n,ref:null}),w&&(0,t.jsxs)(c.ThemeSwitchComponent,{useTheme2:window.jimuConfig.isInBuilder,children:[this.createButton({textContent:M,iconContent:L,tooltip:I,isDisabled:R,noAction:x,isChecked:C,rotate:u,iconSize:b,autoFlipIcon:n,ref:t=>{this.reference=t}}),(0,t.jsx)(i.Popper,{placement:"bottom-start",reference:this.reference,flipOptions:y,open:S,disablePortal:!0,autoUpdate:!0,children:(0,t.jsx)("div",{css:e.css`
                        display: flex;
                        pointer-events: all;
                        border-radius: 2px;
                        box-shadow: 0 2px 8px 1px rgba(0, 0, 0, 0.2);
                      `,className:"d-flex",children:S&&(0,t.jsx)(w,{layoutId:a.layoutId,layoutItemId:a.layoutItem.id,widgetId:a.layoutItem.widgetId})})})]})]})}})}}const v=(0,e.createSelector)((t,e)=>{var o,i,n;const{widgetId:s,extName:a}=e;if(s&&a){const e=t.widgetsRuntimeInfo[s];return null!==(n=null===(i=null===(o=null==e?void 0:e.layoutItemTools)||void 0===o?void 0:o[a])||void 0===i?void 0:i.version)&&void 0!==n?n:0}return 0},(t,e)=>{var o,i;const{widgetId:n,extName:s}=e;if(n&&s){const e=t.widgetsRuntimeInfo;return null!==(i=null===(o=null==e?void 0:e[n])||void 0===o?void 0:o.shouldExpandContextTool)&&void 0!==i&&i}return!1},(t,e)=>({toolState:t,isNewAdded:e})),I=e.ReactRedux.connect(v)(f),x=()=>null;class b extends e.React.PureComponent{constructor(t){super(t),this.togglePopToolItems=t=>{t&&t.stopPropagation(),this.contextProps.onItemClick(this.props.uid)},this.onItemClick=(t,o)=>{const{parentRef:i}=this.contextProps;t.onClick(Object.assign(Object.assign({},o),{clientRect:i.getBoundingClientRect()})),e.lodash.defer(()=>{(0,e.focusElementInKeyboardMode)(this.dropdownBtnRef.current)})},this.handleDoubleClick=t=>{t.stopPropagation()},this.dropdownBtnRef=e.React.createRef()}getBaseStyle(){const{theme:t}=this.contextProps;return e.css`
      cursor: pointer;
      display: flex;
      justify-content: space-around;
      align-items: center;
      background-color: ${t.ref.palette.neutral[400]};

      &:hover {
        background-color: ${t.ref.palette.neutral[500]} !important;
      }
    `}getValue(t,e){return"function"==typeof t?t(e):t}createToolItem(e,o,i){return e.onClick||e.separator?(0,t.jsx)(I,Object.assign({uid:`${this.props.uid}_${i+1}`,isInGroup:!0},e,{onClick:()=>{this.onItemClick(e,o)}}),i):null}getGroupMenu(e,o){const{theme:n}=this.contextProps;return e?(0,t.jsx)(i.Icon,{rotate:e.rotate,icon:e.icon,size:e.size||16,color:n.ref.palette.black}):o[0].icon?(0,t.jsx)(i.Icon,{icon:o[0].icon,size:o[0].size||16,color:n.ref.palette.black}):(0,t.jsx)(I,Object.assign({uid:`${this.props.uid}_0`,onClick:x},o[0]))}tooltipStyle(){const{theme:t}=this.contextProps;return e.css`
      border: none;

      .tooltip {
        color: ${t.ref.palette.black};
        background-color: ${t.ref.palette.neutral[600]};
        border-color: ${t.ref.palette.neutral[400]};
      }
    `}render(){const{tools:o,uid:n}=this.props;return o&&0!==o.length?(0,t.jsx)(p.Consumer,{children:s=>{var a;this.contextProps=s;const{visible:l,caret:r=!0,title:d}=o[0],u=this.getValue(l,s);if(void 0!==l&&!u)return null;const p=o.filter(t=>{const{visible:e}=t,o=this.getValue(e,s);return void 0===e||o});if(0===p.length)return null;if(1===p.length)return(0,t.jsx)(I,Object.assign({uid:`${n}_0`},p[0]));let h;p.some(t=>{const{checked:e}=t;return!!this.getValue(e,s)&&(h=t,!0)});let g="";return"function"==typeof d?g=d(s):"string"==typeof d&&(g=d),(0,t.jsx)("div",{className:"toolbar-group",css:this.getBaseStyle(),children:(0,t.jsxs)(i.Dropdown,{direction:"down",size:"sm",className:r?"px-1":"",isOpen:null!==(a=s.toggleOn)&&void 0!==a&&a&&s.activeItem===n,toggle:this.togglePopToolItems,children:[(0,t.jsx)(i.Tooltip,{placement:"bottom",title:g,css:this.tooltipStyle(),children:(0,t.jsx)(i.DropdownButton,{icon:!0,arrow:r,type:"tertiary",disableHoverEffect:!0,size:"sm",ref:this.dropdownBtnRef,css:e.css`
                      .caret-icon {
                        color: ${s.theme.ref.palette.neutral[1e3]};
                        margin-left: 0.25rem;
                      }
                    `,onDoubleClick:this.handleDoubleClick,children:this.getGroupMenu(h,p)})}),(0,t.jsx)(i.DropdownMenu,{className:`p-0 ${window.jimuConfig.isInBuilder?c.Theme2GlobalStyleClassName:""}`,css:e.css`min-width: 5rem;`,children:p.map((t,e)=>this.createToolItem(t,s,e))})]})})}}):null}}var w;!function(t){t[t.BringForward=0]="BringForward",t[t.SendBackward=1]="SendBackward",t[t.BringToFront=2]="BringToFront",t[t.SendToBack=3]="SendToBack"}(w||(w={}));const S=3;var C,R;function T(t,e){var o,i,n;if(!e)return null;const{layoutId:s,layoutItemId:a}=e;return null===(n=null===(i=null===(o=t.layouts)||void 0===o?void 0:o[s])||void 0===i?void 0:i.content)||void 0===n?void 0:n[a]}function M(t,o,i){var n,s,a,l,r,d,u,c,p,h;const{layoutId:g}=t,m=o.layouts[g];switch(null===(n=null==m?void 0:m.parent)||void 0===n?void 0:n.type){case e.LayoutParentType.View:{const t=o.views[m.parent.id],e=o.sections[t.parent];return 1===(null===(a=null===(s=null==e?void 0:e.parent)||void 0===s?void 0:s[i])||void 0===a?void 0:a.length)?e.parent[i][0]:(null===(r=null===(l=null==e?void 0:e.parent)||void 0===l?void 0:l[i])||void 0===r?void 0:r.length)>1?M(e.parent[i][0],o,i):null}case e.LayoutParentType.Widget:{const t=o.widgets[m.parent.id];return 1===(null===(u=null===(d=null==t?void 0:t.parent)||void 0===d?void 0:d[i])||void 0===u?void 0:u.length)?t.parent[i][0]:(null===(p=null===(c=null==t?void 0:t.parent)||void 0===c?void 0:c[i])||void 0===p?void 0:p.length)>1?M(t.parent[i][0],o,i):null}case e.LayoutParentType.Screen:{const t=o.screens[m.parent.id];return null===(h=o.screenGroups[t.parent].parent)||void 0===h?void 0:h[i]}default:return null}}function L(t,e,o,i,n=!1){let s=j(t,e,o,i,n),a=i;if(s||(s=j(t,e,o,t.mainSizeMode,n),a=t.mainSizeMode),s)return P(t,s.layoutId,a)}function P(t,o,i){var n;let s=t.layouts[o];for(;(null==s?void 0:s.parent)&&[e.LayoutParentType.Screen,e.LayoutParentType.View,e.LayoutParentType.Widget].includes(s.parent.type);){const e=M({layoutId:o},t,i);o=null==e?void 0:e.layoutId,s=t.layouts[o]}switch(null===(n=null==s?void 0:s.parent)||void 0===n?void 0:n.type){case e.LayoutParentType.Dialog:return{type:e.ContainerType.Dialog,id:s.parent.id};case e.LayoutParentType.Page:return{type:e.ContainerType.Page,id:s.parent.id};case e.LayoutParentType.Header:return{type:e.ContainerType.Header,id:"header"};case e.LayoutParentType.Footer:return{type:e.ContainerType.Footer,id:"footer"};default:return null}}function A(t,e,o){return t?t[e]||t[o]:null}function j(t,o,i,n,s=!0){var a,l,r,d,u;switch(i){case e.LayoutItemType.ScreenGroup:{const e=null===(a=t.screenGroups[o].parent)||void 0===a?void 0:a[n],i=T(t,e);return s||!(null==i?void 0:i.isPending)?e:null}case e.LayoutItemType.Section:case e.LayoutItemType.Widget:{let a;if(i===e.LayoutItemType.Widget&&(a=t.widgets[o]),i===e.LayoutItemType.Section&&(a=t.sections[o]),1===(null===(r=null===(l=null==a?void 0:a.parent)||void 0===l?void 0:l[n])||void 0===r?void 0:r.length)){const e=a.parent[n][0],o=T(t,e);return s||!(null==o?void 0:o.isPending)?e:null}if((null===(u=null===(d=null==a?void 0:a.parent)||void 0===d?void 0:d[n])||void 0===u?void 0:u.length)>1){const o=a.parent[n][0],i=t.layouts[o.layoutId];if(null==i?void 0:i.parent)return j(t,i.parent.id,e.LayoutItemType.Widget,n,s)}}default:return null}}!function(t){t.Auto="auto",t[t.Normal=0]="Normal",t[t.BoundaryDropArea=10]="BoundaryDropArea",t[t.DragMoveTip=20]="DragMoveTip",t[t.HandlerTools=30]="HandlerTools",t[t.DraggingItem=40]="DraggingItem"}(C||(C={})),function(t){t.Auto="AUTO",t.Stretch="STRETCH",t.Custom="CUSTOM"}(R||(R={}));function z(t){return/^-?\d*(\.\d+)?%$/.test(t)}function $(t,e){return null==(null==t?void 0:t[e])?null:"string"==typeof t[e]?t[e]:function(t){const e=parseFloat(t);return!isNaN(e)&&isFinite(e)}(t[e])?`${Math.round(parseFloat(t[e]))}px`:null}function N(t,e){return parseFloat(`${t}`)*e/100}(0,e.createSelector)([t=>t.appConfig.mainSizeMode,t=>t.browserSizeMode,(t,o)=>{var i,n,s,a,l;let r;if(t.browserSizeMode===t.appConfig.mainSizeMode)r=!0;else{let a;(null===(i=o.layouts)||void 0===i?void 0:i[t.browserSizeMode])?a=t.browserSizeMode:(null===(n=o.layouts)||void 0===n?void 0:n[t.appConfig.mainSizeMode])&&(a=t.appConfig.mainSizeMode);const l=null===(s=o.layouts)||void 0===s?void 0:s[a],d=P(t.appConfig,l,a);if((null==d?void 0:d.type)===e.ContainerType.Header)r=null!=t.appConfig.header.layout[t.browserSizeMode];else if((null==d?void 0:d.type)===e.ContainerType.Footer)r=null!=t.appConfig.footer.layout[t.browserSizeMode];else if((null==d?void 0:d.type)===e.ContainerType.Dialog){r=null!=t.appConfig.dialogs[d.id].layout[t.browserSizeMode]}else if((null==d?void 0:d.type)===e.ContainerType.Page){r=null!=t.appConfig.pages[d.id].layout[t.browserSizeMode]}}if(r&&(null===(a=o.layouts)||void 0===a?void 0:a[t.browserSizeMode])){const e=o.layouts[t.browserSizeMode];return t.appConfig.layouts[e]}const d=null===(l=o.layouts)||void 0===l?void 0:l[t.appConfig.mainSizeMode];return t.appConfig.layouts[d]}],(t,e,o)=>({mainSizeMode:t,browserSizeMode:e,layout:o})),(0,e.createSelector)([(t,e)=>{var o,i,n;const{layoutId:s,layoutItemId:a}=e;return null===(n=null===(i=null===(o=t.appConfig.layouts)||void 0===o?void 0:o[s])||void 0===i?void 0:i.content)||void 0===n?void 0:n[a]},(t,o)=>{var i,n,s,a,l,r;const{layoutId:d,layoutItemId:u}=o,c=null===(s=null===(n=null===(i=t.appConfig.layouts)||void 0===i?void 0:i[d])||void 0===n?void 0:n.content)||void 0===s?void 0:s[u];if((null==c?void 0:c.type)===e.LayoutItemType.Widget&&c.widgetId){const e=t.appConfig.widgets[c.widgetId];return null!==(r=null===(l=null===(a=null==e?void 0:e.manifest)||void 0===a?void 0:a.properties)||void 0===l?void 0:l.watchViewportVisibility)&&void 0!==r&&r}return!1},t=>{var e;return null===(e=t.appRuntimeInfo)||void 0===e?void 0:e.selection},t=>{var e;return null===(e=t.appRuntimeInfo)||void 0===e?void 0:e.animationPreview},t=>{var e;return null===(e=t.appRuntimeInfo)||void 0===e?void 0:e.hoverPreview},(t,e)=>e.layoutId],(t,e,o,i,n,s)=>{var a;if(!t)return{layoutItem:null,selected:!1};let l=!1;const r=null!==(a=t.isPending)&&void 0!==a&&a;o&&(l=o.layoutId===s&&o.layoutItemId===t.id);const d={selected:l,watchViewportVisibility:e,layoutItem:r?null:t,autoScroll:l?o.autoScroll:void 0};if(l&&(null==i?void 0:i.layoutInfo)){const{layoutId:e,layoutItemId:o}=i.layoutInfo;d.animationPreview=e===s&&o===t.id,d.playMode=d.animationPreview?i.playMode:null,d.previewId=d.animationPreview?i.id:null}else if(l&&(null==n?void 0:n.layoutInfo)){const{layoutId:e,layoutItemId:o}=n.layoutInfo;d.hoverPreview=e===s&&o===t.id,d.previewId=d.hoverPreview?n.id:null}return d});const k=(0,e.createSelector)([(t,o)=>{var i,n,s;const{layoutId:a,layoutItemId:l}=o,r=null===(s=null===(n=null===(i=t.appConfig.layouts)||void 0===i?void 0:i[a])||void 0===n?void 0:n.content)||void 0===s?void 0:s[l];if((null==r?void 0:r.type)===e.LayoutItemType.Widget&&r.widgetId)return t.appConfig.widgets[r.widgetId]},(t,o)=>{var i,n,s,a;const{layoutId:l,layoutItemId:r}=o,d=null===(s=null===(n=null===(i=t.appConfig.layouts)||void 0===i?void 0:i[l])||void 0===n?void 0:n.content)||void 0===s?void 0:s[r];if((null==d?void 0:d.type)===e.LayoutItemType.Widget&&!d.widgetId)return null===(a=d.setting)||void 0===a?void 0:a.placeholderStyle},(t,o)=>{var i,n,s;const{layoutId:a,layoutItemId:l}=o,r=null===(s=null===(n=null===(i=t.appConfig.layouts)||void 0===i?void 0:i[a])||void 0===n?void 0:n.content)||void 0===s?void 0:s[l];if((null==r?void 0:r.type)===e.LayoutItemType.Widget&&r.widgetId)return t.widgetsRuntimeInfo[r.widgetId]},(t,o)=>{var i,n,s;const{layoutId:a,layoutItemId:l}=o,r=null===(s=null===(n=null===(i=t.appConfig.layouts)||void 0===i?void 0:i[a])||void 0===n?void 0:n.content)||void 0===s?void 0:s[l];if((null==r?void 0:r.type)===e.LayoutItemType.Widget&&!r.widgetId)return t.widgetsState[r.widgetId]},(t,o)=>{var i,n;const{layoutId:s}=o,a=null===(i=t.appConfig.layouts)||void 0===i?void 0:i[s];if((null===(n=a.parent)||void 0===n?void 0:n.type)===e.LayoutParentType.Widget){const e=a.parent.id,o=t.appConfig.widgets[e];return/widgets\/common\/controller\/?/.test(o.uri)}return!1}],(t,o,i,n,s)=>{var a,l,r,d,u,c,p,h,g,m,y,f,v,I,x,b,w,S,C;const R=null===(l=null===(a=null==t?void 0:t.manifest)||void 0===a?void 0:a.properties)||void 0===l?void 0:l.supportInlineEditing;return{hasEmbeddedLayout:(null===(d=null===(r=null==t?void 0:t.manifest)||void 0===r?void 0:r.properties)||void 0===d?void 0:d.hasEmbeddedLayout)&&Object.keys(null!==(u=t.layouts)&&void 0!==u?u:{}).length>0,supportInlineEditing:R,supportRepeat:null===(p=null===(c=null==t?void 0:t.manifest)||void 0===c?void 0:c.properties)||void 0===p?void 0:p.supportRepeat,isClassLoaded:null!==(h=null==i?void 0:i.isClassLoaded)&&void 0!==h&&h,isInlineEditing:R&&(null==i?void 0:i.isInlineEditing),isInController:s,useDragHandler:null!==(y=null===(m=null===(g=null==t?void 0:t.manifest)||void 0===g?void 0:g.properties)||void 0===m?void 0:m.useDragHandler)&&void 0!==y&&y,widgetStyle:null!=t?t.style:o,canCrossLayoutBoundary:null===(v=null===(f=null==t?void 0:t.manifest)||void 0===f?void 0:f.properties)||void 0===v?void 0:v.canCrossLayoutBoundary,hasExtension:(null===(x=null===(I=null==t?void 0:t.manifest)||void 0===I?void 0:I.extensions)||void 0===x?void 0:x.length)>0,needHiddenState:null!==(S=null===(w=null===(b=null==t?void 0:t.manifest)||void 0===b?void 0:b.properties)||void 0===w?void 0:w.needHiddenState)&&void 0!==S&&S,widgetJson:t,widgetId:null==t?void 0:t.id,isFunctionalWidget:(null===(C=null==t?void 0:t.manifest)||void 0===C?void 0:C.widgetType)!==e.WidgetType.Layout,widgetState:n}});function O(){var t,o;return null!==(o=null===(t=(0,e.getAppStore)().getState().appContext)||void 0===t?void 0:t.isRTL)&&void 0!==o&&o}function E(){var t,o;return(null===(t=null===window||void 0===window?void 0:window.jimuConfig)||void 0===t?void 0:t.isBuilder)?null===(o=(0,e.getAppStore)().getState().appStateInBuilder)||void 0===o?void 0:o.browserSizeMode:(0,e.getAppStore)().getState().browserSizeMode}function B(t,e,o){const i=null==o?void 0:o[t],n="width"===t?"left":"top",s="width"===t?"right":"bottom";if(!i)return null!=e[t]?R.Custom:null!=e[n]&&null!=e[s]?R.Stretch:R.Auto;if(!0===i)return null!=e[n]&&null!=e[s]?R.Stretch:R.Auto;switch(i){case R.Auto:return R.Auto;case R.Stretch:return R.Stretch;default:return R.Custom}}var D=function(t,e,o,i){return new(o||(o=Promise))(function(n,s){function a(t){try{r(i.next(t))}catch(t){s(t)}}function l(t){try{r(i.throw(t))}catch(t){s(t)}}function r(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o(function(t){t(e)})).then(a,l)}r((i=i.apply(t,e||[])).next())})};function F(){if(a.utils.getCurrentDialogId())return a.utils.getCurrentDialogRootLayoutId();switch(a.utils.getActivePagePart()){case e.PagePart.Header:return a.utils.getHeaderRootLayoutId();case e.PagePart.Footer:return a.utils.getFooterRootLayoutId();default:return a.utils.getCurrentPageRootLayoutId()}}function H(t,e){if(window.jimuConfig.isBuilder){(0,o.getAppConfigAction)(t).exec(),o.builderAppSync.publishChangeSelectionToApp(e)}else a.utils.changeLayout(t,e)}function V(t,i){var n,s;const l=(0,o.getAppConfigAction)(),{layoutId:r,layoutItemId:d}=t;if(!(null===(s=null===(n=l.appConfig.layouts[r])||void 0===n?void 0:n.content)||void 0===s?void 0:s[d]))return;const u=l.appConfig.layouts[i].type;if(u===e.LayoutType.FlowLayout)!function(t,i){var n,s,a;const l=(0,o.getAppConfigAction)(),{layoutId:r,layoutItemId:d,width:u,height:c}=t,p=l.duplicateLayoutItemToOtherLayout({layoutId:r,layoutItemId:d},i),h={layoutId:i,layoutItemId:p},g=null!==(s=null===(n=(0,e.getAppStore)().getState().appRuntimeInfo)||void 0===n?void 0:n.zoomScale)&&void 0!==s?s:1;l.adjustOrderOfItem(h,-1);const m=function(t,e,o){if(!window.jimuConfig.isInBuilder)return{insertIndex:-1,colSpan:0};const i=window.parent.document.querySelector('iframe[name="_appWindow"]'),n=document.querySelectorAll(`div.flow-layout[data-layoutid="${t}"] > div.trail-container > div.builder-layout-item`);let s=-1,a=2;if(i&&n){const t=i.getBoundingClientRect();n.forEach((e,o)=>{if(-1===s){const i=e.getBoundingClientRect();(i.top+t.top>=0||i.top+i.height+t.top>=0)&&(s=o+1)}}),a=Math.round(12*e*o/t.width)}return{colSpan:a,insertIndex:s}}(i,u,g);-1===m.insertIndex&&(m.insertIndex=(null===(a=l.appConfig.layouts[i].order)||void 0===a?void 0:a.length)||0);const y=l.appConfig.layouts[r].type;y===e.LayoutType.FlowLayout?H(l.appConfig,h):U({layoutInfo:h},{targetLayoutId:i,containerRect:{left:0,top:0,width:u,height:c},itemRect:{left:0,top:0,width:u,height:c},width:m.colSpan,insertIndex:m.insertIndex,appConfig:l.appConfig}).catch(t=>{console.error(t)})}(t,i);else if(u===e.LayoutType.FixedLayout)!function(t,i,n=null){var s,l,r,d;const u=(0,o.getAppConfigAction)(),{layoutId:c,layoutItemId:p,width:h,height:g}=t,m=null===(l=null===(s=u.appConfig.layouts[c])||void 0===s?void 0:s.content)||void 0===l?void 0:l[p],y=m.bbox,f=u.duplicateLayoutItemToOtherLayout({layoutId:c,layoutItemId:p},i),v={layoutId:i,layoutItemId:f},I=null!==(d=null===(r=(0,e.getAppStore)().getState().appRuntimeInfo)||void 0===r?void 0:r.zoomScale)&&void 0!==d?d:1;n||(n=function(t){if(!window.jimuConfig.isInBuilder)return;const e=window.parent.document.querySelector('div[data-layoutid="right-sidebar-left-layout"]'),o=window.parent.document.querySelector('iframe[name="_appWindow"]');let i,n,s,a,l;if(e&&o){const r=e.getBoundingClientRect(),d=o.getBoundingClientRect();if(n=d.left,s=d.top,a=d.width,l=d.height,t){if(i=(o.contentDocument||o.contentWindow.document).querySelector(`div.layout[data-layoutid="${t}"]`),i){const t=i.getBoundingClientRect();n+=t.left,s+=t.top,a=t.width,l=t.height}}return{left:n>=r.left?0:r.left-n,top:s>=r.top?0:r.top-s,width:a,height:l}}return null}(i));if(n){const t=n.width/I,e=n.height/I;u.editLayoutItemProperty(v,"bbox",a.utils.replaceBoundingBox(y,{left:0,top:0,right:0,bottom:0,width:Math.round(h),height:Math.round(g)},{width:t,height:e}))}u.editLayoutItemProperty(v,"setting.vCenter",!0).editLayoutItemProperty(v,"setting.hCenter",!0);const x=u.appConfig.layouts[v.layoutId].content[v.layoutItemId].bbox;u.editLayoutItemProperty(v,"bbox",x.set("left","50%").set("top","50%")),u.adjustOrderOfItem(v,-1),a.utils.changeLayout(u.appConfig,v)}(t,i);else if(u===e.LayoutType.GridLayout){const[n,s]=function(t,i,n){var s,l;let r=(0,o.getAppConfigAction)(t);const{layoutId:d,layoutItemId:u}=i,c=t.layouts[n],p=(null===(s=c.content)||void 0===s?void 0:s[null===(l=c.setting)||void 0===l?void 0:l.rootItem])?c.setting.rootItem:null,h=r.duplicateLayoutItemToOtherLayout({layoutId:d,layoutItemId:u},n),g={layoutId:n,layoutItemId:h};if(!p)return r.editLayoutItemProperty(g,"gridType",e.GridItemType.Plain).editLayoutItemProperty(g,"bbox.width",100).editLayoutProperty(n,"setting.rootItem",h),[r.appConfig,g];const m={layoutId:n,layoutItemId:p},y=a.searchUtils.findLayoutItem(r.appConfig,m),f=y.gridType,v=o.LayoutServiceProvider.getService(r.appConfig,n),I=v.createBlankItem(r.appConfig,n);t=I[0];const x=I[1],b={layoutId:n,layoutItemId:x};return r=(0,o.getAppConfigAction)(t),r.editLayoutItemProperty(b,"gridType",f!==e.GridItemType.Row?e.GridItemType.Row:e.GridItemType.Column).editLayoutItemProperty(b,"children",[p,h]).editLayoutItemProperty(b,"bbox.width",100).editLayoutItemProperty(m,"bbox.width",50).editLayoutItemProperty(m,"parent",x).editLayoutItemProperty(g,"bbox.width",50).editLayoutItemProperty(g,"parent",x).editLayoutItemProperty(g,"gridType",e.GridItemType.Plain).editLayoutProperty(n,"setting.rootItem",x),[r.appConfig,g]}(l.appConfig,t,i);a.utils.changeLayout(n,s)}else console.error(`unknown layout type: ${u}`)}function W(t,i,n){return D(this,void 0,void 0,function*(){const s=i.layoutInfo;return i.id?yield function(t,e,i){return D(this,void 0,void 0,function*(){var n;const s=(0,o.getAppConfigAction)(t);let l;const r=a.utils.getCurrentSizeMode();l=e.isFromCurrentSizeMode?r:a.searchUtils.getBrowserSizeModeByLayoutId(t,e.layoutInfo.layoutId);const d=a.searchUtils.findLayoutItem(s.appConfig,e.layoutInfo),u=s.moveLayoutItem(e.layoutInfo,i,l,r);return(null===(n=d.setting)||void 0===n?void 0:n.lockParent)&&s.editLayoutItemProperty(u,"setting.lockParent",!0),yield Promise.resolve({layoutInfo:u,updatedAppConfig:s.appConfig})})}(t,i,n):s&&s.layoutId&&s.layoutItemId?function(t,e,i){const n=(0,o.getAppConfigAction)(t),s=a.utils.getCurrentSizeMode(),l=n.moveLayoutItem(e.layoutInfo,i,s,s),r=a.searchUtils.getWidgetIdThatUseTheLayoutId(t,i);r&&G(t.widgets[r])&&n.editLayoutItemProperty(l,"setting.lockParent",!0);return{layoutInfo:l,updatedAppConfig:n.appConfig}}(t,i,n):i.itemType===e.LayoutItemType.Section?function(t,e){const i=(0,o.getAppConfigAction)(t),n=i.addNewSectionToLayout(e),s={layoutId:e,layoutItemId:n};return{layoutInfo:s,updatedAppConfig:i.appConfig}}(t,n):i.uri||i.itemId?yield function(t,e,i){return D(this,void 0,void 0,function*(){const n=(0,o.getAppConfigAction)(t),s=yield n.addNewWidgetToLayout(i,{uri:e.uri,itemId:e.itemId}),l={layoutId:i,layoutItemId:s},r=a.searchUtils.getWidgetIdThatUseTheLayoutId(t,i);return r&&G(t.widgets[r])&&n.editLayoutItemProperty(l,"setting.lockParent",!0),{layoutInfo:l,updatedAppConfig:n.appConfig}})}(t,i,n):function(t,e){const i=(0,o.getAppConfigAction)(t),n=i.addPlaceholderToLayout(e),s={layoutId:e,layoutItemId:n},l=a.searchUtils.getWidgetIdThatUseTheLayoutId(t,e);l&&G(t.widgets[l])&&i.editLayoutItemProperty(s,"setting.lockParent",!0);return{layoutInfo:s,updatedAppConfig:i.appConfig}}(t,n)})}function G(t){var o,i,n,s,a,l,r;const d=null===(o=null==t?void 0:t.manifest)||void 0===o?void 0:o.widgetType,u=null!==(s=null===(n=null===(i=null==t?void 0:t.manifest)||void 0===i?void 0:i.properties)||void 0===n?void 0:n.hasEmbeddedLayout)&&void 0!==s&&s,c=null!==(r=null===(l=null===(a=null==t?void 0:t.manifest)||void 0===a?void 0:a.properties)||void 0===l?void 0:l.lockChildren)&&void 0!==r&&r;return d!==e.WidgetType.Layout&&u&&c}function U(t,i){return D(this,void 0,void 0,function*(){const{targetLayoutId:n,containerRect:s,itemRect:l,width:r,insertIndex:d,appConfig:u}=i;let c=(0,o.getAppConfigAction)(u);const p={name:"row",label:"row",uri:"widgets/layout/row/",icon:null,itemType:e.LayoutItemType.Widget,manifest:{widgetType:e.WidgetType.Layout,properties:{}}},h=yield W(c.appConfig,p,n),{updatedAppConfig:g,layoutInfo:m}=h,y=a.utils.replaceBoundingBox(null,l,s);c=(0,o.getAppConfigAction)(g),c.editLayoutItemProperty(m,"bbox",y).adjustOrderOfItem(m,d);const f=a.searchUtils.findLayoutItem(g,h.layoutInfo),v=g.widgets[f.widgetId],I=Object.keys(v.layouts)[0],x=v.layouts[I],b=a.searchUtils.findLayoutId(x,(0,e.getAppStore)().getState().browserSizeMode,g.mainSizeMode),w=e.i18n.getIntl().formatMessage({id:"block"}),S=e.appConfigUtils.getUniqueLabel(g,"widget",w);c.editWidgetProperty(v.id,"label",S).editLayoutItemProperty(m,"setting.heightMode","fixed").editLayoutItemProperty(m,"bbox.height",l.height+20).editLayoutProperty(b,"parent",{id:v.id,type:e.LayoutParentType.Widget});const C=yield W(c.appConfig,t,b),{layoutInfo:R,updatedAppConfig:T}=C;c=(0,o.getAppConfigAction)(T),c.editLayoutItemProperty(R,"setting.heightMode","fit").editLayoutItemProperty(R,"bbox.left",0).editLayoutItemProperty(R,"bbox.width",r).editLayoutItemProperty(R,"bbox.height",Math.round(Math.min(l.height,s.height))).adjustOrderOfItem(R,0),window.jimuConfig.isBuilder?((0,o.getAppConfigAction)(c.appConfig).exec(),o.builderAppSync.publishChangeSelectionToApp(R)):a.utils.changeLayout(c.appConfig,R)})}class _ extends e.React.PureComponent{constructor(t){super(t),this.topLeft=this.updateFloatingArea.bind(this,1),this.topCenter=this.updateFloatingArea.bind(this,2),this.topRight=this.updateFloatingArea.bind(this,3),this.middleLeft=this.updateFloatingArea.bind(this,4),this.middleCenter=this.updateFloatingArea.bind(this,5),this.middleRight=this.updateFloatingArea.bind(this,6),this.bottomLeft=this.updateFloatingArea.bind(this,7),this.bottomCenter=this.updateFloatingArea.bind(this,8),this.bottomRight=this.updateFloatingArea.bind(this,9)}updateFloatingArea(t){const{layoutId:e,layoutItemId:i}=this.props;!function(t,e,i){D(this,void 0,void 0,function*(){const n=a.utils.getCurrentPageRootLayoutId();let s=(0,o.getAppConfigAction)();const l=yield W(s.appConfig,{layoutInfo:t},n);s=(0,o.getAppConfigAction)(l.updatedAppConfig),s.editLayoutItemProperty(l.layoutInfo,"bbox",{top:0,left:0,right:0,width:`${e.width}px`,height:`${e.height}px`}).editLayoutItemProperty(l.layoutInfo,"setting.isFloating",!0).editLayoutItemProperty(l.layoutInfo,"setting.lockParent",!0).editLayoutItemProperty(l.layoutInfo,"setting.floatingArea",i).adjustOrderOfItem(l.layoutInfo,null),window.jimuConfig.isBuilder?((0,o.getAppConfigAction)(s.appConfig).exec(),o.builderAppSync.publishChangeSelectionToApp(l.layoutInfo)):a.utils.changeLayout(s.appConfig,l.layoutInfo)})}({layoutId:e,layoutItemId:i},this.getSizeOfItem(),t)}getSizeOfItem(){const{layoutId:t,layoutItemId:o}=this.props;let i;if(window.jimuConfig.isBuilder){const t=document.querySelector(`iframe[name="${e.APP_FRAME_NAME_IN_BUILDER}"]`);i=(null==t?void 0:t.contentDocument)||(null==t?void 0:t.contentWindow.document)}else i=document;const n=i.querySelector(`div.exb-rnd[data-layoutid="${t}"][data-layoutitemid="${o}"]`);return n?n.getBoundingClientRect():null}getStyle(){let t;t=window.jimuConfig.isBuilder?(0,c.getTheme)():(0,c.getTheme2)();const o=t.ref.palette.neutral[500];return e.css`
      background-color: ${t.ref.palette.neutral[400]};
      position: relative;
      padding: 4px;

      .content {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-row-gap: 0;
        grid-column-gap: 0;
        border: 1px solid ${o};

        & > button {
          cursor: pointer;
          height: 50px;
          width: 50px;
          position: relative;
          border: none;
          background-color: transparent;
          border-radius: 0;

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
              outline: 1px solid ${t.sys.color.primary.dark};
              background: ${t.sys.color.primary.light};
            }
          }
        }

        & > button:nth-of-type(3n+1) {
          border-right: 1px solid ${o};
        }
        & > button:nth-of-type(3n) {
          border-left: 1px solid ${o};
        }
        & > button:nth-of-type(1), & > button:nth-of-type(2), & > button:nth-of-type(3) {
          border-bottom: 1px solid ${o};
        }
        & > button:nth-of-type(7), & > button:nth-of-type(8), & > button:nth-of-type(9) {
          border-top: 1px solid ${o};
        }

        .selected:after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: ${t.sys.color.primary.light};
          border: 1px solid ${t.sys.color.primary.main};
        }
      }
    `}render(){const{area:o}=this.props;return(0,t.jsx)("div",{className:"floating-area-chooser d-flex",css:this.getStyle(),children:(0,t.jsxs)("div",{className:"content w-100",children:[(0,t.jsx)(i.Button,{className:(0,e.classNames)("top-left",{selected:1===o}),onClick:this.topLeft}),(0,t.jsx)(i.Button,{className:(0,e.classNames)("top-center",{selected:2===o}),onClick:this.topCenter}),(0,t.jsx)(i.Button,{className:(0,e.classNames)("top-right",{selected:3===o}),onClick:this.topRight}),(0,t.jsx)(i.Button,{className:(0,e.classNames)("middle-left",{selected:4===o}),onClick:this.middleLeft}),(0,t.jsx)(i.Button,{className:(0,e.classNames)("middle-center",{selected:5===o}),onClick:this.middleCenter}),(0,t.jsx)(i.Button,{className:(0,e.classNames)("middle-right",{selected:6===o}),onClick:this.middleRight}),(0,t.jsx)(i.Button,{className:(0,e.classNames)("bottom-left",{selected:7===o}),onClick:this.bottomLeft}),(0,t.jsx)(i.Button,{className:(0,e.classNames)("bottom-center",{selected:8===o}),onClick:this.bottomCenter}),(0,t.jsx)(i.Button,{className:(0,e.classNames)("bottom-right",{selected:9===o}),onClick:this.bottomRight})]})})}}_.defaultProps={area:0};var Y=h(9044),X=h.n(Y),q=h(3387),Z=h.n(q),J=h(1993),K=h.n(J),Q=h(9869),tt=h.n(Q),et=h(4548),ot=h.n(et),it=h(119),nt=h.n(it),st=h(3303),at=h.n(st);function lt(){var t;let o=(0,e.getAppStore)().getState();return window.jimuConfig.isBuilder&&(o=o.appStateInBuilder),null===(t=o.appRuntimeInfo)||void 0===t?void 0:t.appMode}function rt(){var t,o,i;let n=(0,e.getAppStore)().getState();return window.jimuConfig.isBuilder&&(n=n.appStateInBuilder),null!==(i=null===(o=null===(t=n.appConfig)||void 0===t?void 0:t.forBuilderAttributes)||void 0===o?void 0:o.lockLayout)&&void 0!==i&&i}function dt(t){var o,i,n;const s=(0,e.getAppStore)().getState().appConfig;if(t.type===e.LayoutItemType.Widget){const e=s.widgets[t.widgetId];return null!==(o=null==e?void 0:e.label)&&void 0!==o?o:""}if(t.type===e.LayoutItemType.Section){const e=s.sections[t.sectionId];return null!==(i=null==e?void 0:e.label)&&void 0!==i?i:""}if(t.type===e.LayoutItemType.ScreenGroup){const e=s.screenGroups[t.screenGroupId];return null!==(n=null==e?void 0:e.label)&&void 0!==n?n:""}return""}function ut(){return lt()===e.AppMode.Design}function ct(){return lt()===e.AppMode.Express}function pt(t){var o;let i=(0,e.getAppStore)().getState();if(window.jimuConfig.isBuilder&&(i=i.appStateInBuilder),t.type===e.LayoutItemType.Widget&&t.widgetId){const n=i.appConfig.widgets[t.widgetId];if(n)return(null===(o=n.manifest)||void 0===o?void 0:o.widgetType)!==e.WidgetType.Layout}return!1}const ht={icon:X(),title:t=>t.formatMessage("delete"),visible:t=>{const o=lt();return(o===e.AppMode.Design||o===e.AppMode.Express)&&(!rt()||pt(t.layoutItem))},onClick:t=>{const{layoutItem:e,layoutId:i}=t,n={layoutId:i,layoutItemId:e.id};o.appBuilderSync.publishConfirmDeleteToApp(n)}},gt={icon:Z(),title:t=>t.formatMessage("pendingTip"),visible:t=>lt()===e.AppMode.Design&&!rt()&&function(t){const{layoutItem:e}=t;return null!=e.widgetId||null!=e.sectionId||null!=e.screenGroupId}(t),onClick:t=>{const{layoutId:e,layoutItem:i}=t;!function(t){const e=(0,o.getAppConfigAction)();e.setLayoutItemToPending(t,!0),H(e.appConfig,null)}({layoutId:e,layoutItemId:i.id})}},mt={icon:at(),title:t=>t.formatMessage("setting"),onClick:t=>{const{layoutId:o,layoutItem:i}=t;(0,e.getAppStore)().dispatch(e.appActions.selectionChanged({layoutId:o,layoutItemId:i.id}))}},yt={icon:K(),title:t=>{const{layoutItem:e}=t;return t.formatMessage("dragToMove",{label:dt(e)})},visible:()=>lt()===e.AppMode.Design&&!rt()},ft={icon:tt(),title:t=>t.formatMessage("duplicate"),visible:t=>{var o,i,n;if(rt()||!ut())return!1;const{layoutId:s}=t,a=null===(o=(0,e.getAppStore)().getState().appConfig)||void 0===o?void 0:o.layouts[s];return"ROW"!==(null==a?void 0:a.type)||(null!==(n=null===(i=a.order)||void 0===i?void 0:i.length)&&void 0!==n?n:0)<12},onClick:t=>{const{layoutId:e,layoutItem:i}=t;!function(t){const{layoutId:e}=t,i=(0,o.getAppConfigAction)(),n={layoutId:e,layoutItemId:i.duplicateLayoutItemInSameLayout(t)};H(i.appConfig,n)}({layoutId:e,layoutItemId:i.id})}},vt={icon:ot(),title:t=>t.formatMessage("floating"),visible:t=>{if(rt()||!ut())return!1;const{layoutItem:i,layoutId:n}=t;return function(t){var i,n,s,l,r;const{layoutId:d,layoutItemId:u}=t,c=(0,o.getAppConfigAction)().appConfig,p=null===(s=null===(n=null===(i=null==c?void 0:c.layouts)||void 0===i?void 0:i[d])||void 0===n?void 0:n.content)||void 0===s?void 0:s[u];if(!p||(null===(l=p.setting)||void 0===l?void 0:l.isFloating))return!1;const h=a.utils.getActivePagePart();if(h!==e.PagePart.Header&&h!==e.PagePart.Footer){const t=a.utils.getCurrentPageRootLayoutId();return(null===(r=c.layouts[t])||void 0===r?void 0:r.type)===e.LayoutType.FlowLayout&&d!==t}return!1}({layoutId:n,layoutItemId:i.id})},settingPanel:_,onClick:()=>null},It={icon:nt(),title:t=>t.formatMessage("sinking"),visible:t=>{var e,o;if(rt()||!ut())return!1;const{layoutItem:i}=t;return null!==(o=null===(e=i.setting)||void 0===e?void 0:e.isFloating)&&void 0!==o&&o},onClick:t=>{const{layoutId:i,layoutItem:n,clientRect:s}=t;!function(t,i){var n;const{layoutId:s,layoutItemId:l}=t,r=(0,o.getAppConfigAction)();let d,u,c=-1,p=2;if(window.jimuConfig.isBuilder){const t=document.querySelector(`iframe[name="${e.APP_FRAME_NAME_IN_BUILDER}"]`);u=(null==t?void 0:t.contentDocument)||(null==t?void 0:t.contentWindow.document)}else u=document;if(null==i){const t=u.querySelector(`div.exb-rnd[data-layoutid="${s}"][data-layoutitemid="${l}"]`);i=t?t.getBoundingClientRect():{width:100,height:100}}const h=u.querySelectorAll(`div.flow-layout[data-layoutid="${s}"] > div.trail-container > div.builder-layout-item:not(.floating)`);if((null==h?void 0:h.length)>1)for(let t=0;t<h.length;t++){const e=h[t];if(-1===c&&e.getAttribute("data-layoutitemid")!==l){const o=e.getBoundingClientRect();if(p=Math.round(12*i.width/o.width),a.utils.contains(o,i)){c=t,d=o;break}if(a.utils.intersects(o,i)){c=t+1,d=o;break}}}else{const t=a.utils.getCurrentSizeMode();let o=e.utils.findViewportSize(a.utils.getAppConfig(),t);0===o.width&&(o=e.CONSTANTS.SCREEN_RESOLUTIONS[t][1]),d={left:0,top:0,width:o.width,height:o.height},p=Math.round(12*i.width/o.width)}-1===c&&(c=(null===(n=r.appConfig.layouts[s].order)||void 0===n?void 0:n.length)||0),U({layoutInfo:t},{targetLayoutId:s,containerRect:d||i,itemRect:i,width:p,insertIndex:c})}({layoutId:i,layoutItemId:n.id},s)}};var xt=h(7568),bt=h.n(xt),wt=h(2943),St=h.n(wt),Ct=h(3662),Rt=h.n(Ct),Tt=h(5447),Mt=h.n(Tt),Lt=h(2838),Pt=h.n(Lt);function At(t){let o=(0,e.getAppStore)().getState();return window.jimuConfig.isBuilder&&(o=o.appStateInBuilder),a.searchUtils.getSectionInfo(o,t.sectionId)}function jt(t){var o;const{navInfo:i,views:n,activeView:s}=null!=t?t:{};if(!i)return null==s?void 0:s.id;if(!i.useProgress)return i.currentViewId;const a=(null===(o=i.visibleViews)||void 0===o?void 0:o.length)>0?i.visibleViews:n,{currentIndex:l}=(0,e.getIndexFromProgress)(i.progress,a.length);return a[l]}const zt={icon:Mt(),title:t=>t.formatMessage("duplicateView"),visible:()=>lt()===e.AppMode.Design&&!rt(),onClick:t=>{const{layoutItem:i}=t;let n=jt(At(i));if(!n){n=At(i).views[0]}const s=(0,o.getAppConfigAction)(),a=s.duplicateView(n,i.sectionId,!0);s.exec(),window.jimuConfig.isBuilder?o.builderAppSync.publishSectionNavInfoToApp(i.sectionId,{currentViewId:a.id,useProgress:!1}):e.jimuHistory.changeView(i.sectionId,a.id)}},$t={icon:Pt(),title:t=>t.formatMessage("deleteView"),visible:t=>{if(lt()!==e.AppMode.Design||rt())return!1;const{layoutItem:o}=t,i=At(o);if(!i)return!1;const{views:n}=i;return n&&n.length>1},onClick:t=>{const{layoutItem:i}=t,n=At(i),{views:s}=n,a=jt(n);if(s.length>1){const n=s.indexOf(a);let l;l=n>0?s[n-1]:s[1],(0,o.getAppConfigAction)().removeView(a,i.sectionId).exec(),window.jimuConfig.isBuilder?o.builderAppSync.publishSectionNavInfoToApp(t.layoutItem.sectionId,{currentViewId:l,useProgress:!1}):e.jimuHistory.changeView(t.layoutItem.sectionId,l)}}},Nt=[{icon:bt(),autoFlipIcon:!0,size:10,title:t=>t.formatMessage("previousView"),onClick:t=>{const{layoutItem:o}=t,i=At(o),{views:n}=i,s=jt(i),a=n.indexOf(s);a>0&&e.jimuHistory.changeView(o.sectionId,n[a-1])},disabled:t=>{const{layoutItem:e}=t,o=At(e);if(!o)return!0;const{views:i}=o,n=jt(o);return i.indexOf(n)<=0}},{label:t=>{const{layoutItem:e}=t,o=At(e);if(!o)return"";const{views:i}=o,n=jt(o);return`${Math.max(0,i.indexOf(n))+1} / ${i.length}`}},{icon:St(),autoFlipIcon:!0,size:10,title:t=>t.formatMessage("nextView"),onClick:t=>{const{layoutItem:o}=t,i=At(o),{views:n}=i,s=jt(i),a=n.indexOf(s);a>=0&&a<n.length-1&&e.jimuHistory.changeView(o.sectionId,n[a+1])},disabled:t=>{const{layoutItem:e}=t,o=At(e);if(!o)return!0;const{views:i}=o,n=jt(o),s=i.indexOf(n);return s<0||s>=i.length-1}},{icon:Rt(),title:t=>t.formatMessage("addView"),visible:()=>lt()===e.AppMode.Design&&!rt(),onClick:t=>{const{layoutItem:i}=t,n=(0,o.getAppConfigAction)(),s=n.addView(i.sectionId);n.exec(),window.jimuConfig.isBuilder?o.builderAppSync.publishSectionNavInfoToApp(i.sectionId,{currentViewId:s,useProgress:!1}):e.jimuHistory.changeView(i.sectionId,s)}},zt,$t,{separator:!0}],kt=[zt,$t],Ot="interactjs-dragging",Et="exb-h5-dragging",Bt="limited-drag-boundary";let Dt=!1;function Ft(t){const o=(0,c.getTheme2)(),i=document.createElement("div");return i.setAttribute("id","interact_dragging_placeholder"),i.style.position="fixed",i.style.left=`${t.left}px`,i.style.top=`${t.top}px`,i.style.width=`${t.width}px`,i.style.height=`${t.height}px`,i.style.backgroundColor=e.polished.rgba(o.sys.color.primary.dark,.2),i.style.zIndex="1100",i}function Ht(t,e){if(!t)return null;let o,i,n,s,l,r;const{layoutItemId:d,useDragHandler:u,onDragStart:c,onDragging:p,onDragEnd:h,draggableAtRuntime:g=!1}=e;return t.styleCursor(!1).draggable({inertia:!1,autoScroll:!1,allowFrom:u?".tool-drag-handler":void 0,ignoreFrom:".no-drag-action",listeners:{start:t=>{if(rt()||!g&&!ut())return void t.interaction.stop();const e=t.target;if(e.classList.contains("no-drag-action"))return void(t.target._canDrag=!1);t.target._canDrag=!0,t.stopPropagation(),e.classList.add("is-dragging"),l=e.style.transform,n=t.rect;const r=t.target.parentNode;s=r.getBoundingClientRect(),document.body.classList.add(Ot);const u=getComputedStyle(e,null).getPropertyValue("transform"),[p,h]=function(t=""){let e="0",o="0";if(t.includes("matrix(")){const i=t.substring(t.indexOf("(")+1,t.indexOf(")")).split(",");return e=`${parseInt(i[4],10)}px`,o=`${parseInt(i[5],10)}px`,[e,o]}if(t.includes("translate(")){const i=t.match(/translate\((.*)\s*,\s*(.*)\)/);return 3===i.length&&(e=i[1],o=i[2]),[e,o]}if(t.includes("translateX(")){const o=t.match(/translateX\((.*)\)/);2===o.length&&(e=o[1])}if(t.includes("translateY(")){const e=t.match(/translateY\((.*)\)/);2===e.length&&(o=e[1])}return[e,o]}(u);o=a.utils.isPercentage(p)?a.utils.fromRatio(p,n.width):parseFloat(p),i=a.utils.isPercentage(h)?a.utils.fromRatio(h,n.height):parseFloat(h),e.setAttribute("data-translatex",o),e.setAttribute("data-translatey",i),c&&c(d)},move:t=>{t.stopPropagation(),o+=t.dx,i+=t.dy;const e=t.target;if(!e.parentElement.classList.contains("d-none")){const a=t.client.x,d=t.client.y;if(!(a>=0&&a<=s.width&&d>=0&&d<=s.height)&&!r)return r=Ft(n),r=document.body.appendChild(r),e.style.transform=l,void(e.style.visibility="hidden");const u=r||e;u.style.webkitTransform=u.style.transform=`translate(${Math.round(o)}px, ${Math.round(i)}px) translateZ(0)`,u.setAttribute("data-translatex",Math.round(o)),u.setAttribute("data-translatey",Math.round(i))}p&&p(d,o,i)},end:t=>{t.stopPropagation();const e=t.target;e.classList.remove("is-dragging"),document.body.classList.remove(Ot),r&&(document.body.removeChild(r),r=null),e.style.visibility=null,e.style.transform=l,h&&h(d,o,i)}}})}function Vt(t){Dt=t}function Wt(){return Dt}var Gt=h(6245);const Ut="interactjs-resizing";let _t=!1;function Yt(t,e){if(!t)return null;let o,i,n,s,l=null;const{layoutItemId:r,onResizeStart:d,onResizing:u,onResizeEnd:c,restrictEdges:p=!0}=e;return t.resizable({inertia:!1,edges:{top:".rnd-resize-top",left:a.utils.isRTL()?".rnd-resize-right":".rnd-resize-left",bottom:".rnd-resize-bottom",right:a.utils.isRTL()?".rnd-resize-left":".rnd-resize-right"},modifiers:[Gt.interact.modifiers.restrictEdges({outer:p?"parent":null}),Gt.interact.modifiers.restrictSize({min:{width:16,height:16}})],listeners:{start:t=>{t.stopPropagation(),o=0,i=0,n=0,s=0;const e=t.target.getBoundingClientRect();d&&d(r,e.width,e.height),document.body.classList.add(Ut)},move:t=>{t.stopPropagation();const e=t.deltaRect;o+=e.left,i+=e.top,n+=e.width,s+=e.height,l&&(cancelAnimationFrame(l),l=null),l=requestAnimationFrame(()=>{u&&u(r,o,i,n,s,t.shiftKey,t.speed),l=null})},end:t=>{if(t.stopPropagation(),l&&(cancelAnimationFrame(l),l=null),c){const e=t.deltaRect;o+=e.left,i+=e.top,n+=e.width,s+=e.height,c(r,o,i,n,s,t.shiftKey)}document.body.classList.remove(Ut)}}})}function Xt(t){_t=t}function qt(){return _t}class Zt extends e.React.PureComponent{constructor(){super(...arguments),this.state={activeItem:null},this.onItemClick=t=>{let e=this.state.toggleOn;e=t!==this.state.activeItem||!e,this.setState({activeItem:t,toggleOn:e})},this.onItemUnSelected=t=>{t===this.state.activeItem&&this.setState({activeItem:null,toggleOn:!1})}}getStyle(){const{theme:t}=this.props;return e.css`
      display: flex;
      pointer-events: all;
      border-radius: 2px;
      box-shadow: 0 2px 8px 1px rgba(0,0,0,0.20);
      height: 100%;
      margin: 5px 0;
      background: ${t.ref.palette.neutral[400]};

      .toolbar-item, .toolbar-item {
        .toolbar-item-button:focus, .toolbar-item-button:focus-visible {
          z-index: 1;
        }
      }

      .${Ot} &,
      .${Ut} &,
      .${Et} & {
        display: none;
      }
    `}reOrganizeTools(){const{tools:t}=this.props;if(a.utils.getCurrentSizeMode()===e.BrowserSizeMode.Small){const e=t.filter(t=>{let e;e=Array.isArray(t)?t[0]:t;const{visible:o,separator:i=!1}=e,n="function"==typeof o?o(this.props):o;return!i&&(void 0===o||n)});if(e.length>8){const e=t.slice(0,8),o=t.slice(8).map(t=>Object.assign(Object.assign({},t),{label:t.title})),i=[{icon:r(),caret:!1},...o];return e.push(i),e}}return t}render(){const{tools:e,isLockLayout:o}=this.props;if(!e||0===e.length)return null;const i=this.reOrganizeTools(),{activeItem:n,toggleOn:s}=this.state;return(0,t.jsx)(p.Provider,{value:Object.assign(Object.assign({},this.props),{activeItem:n,toggleOn:s,onItemClick:this.onItemClick,onItemUnSelected:this.onItemUnSelected,isLockLayout:o}),children:(0,t.jsx)(c.ThemeSwitchComponent,{useTheme2:window.jimuConfig.isInBuilder,children:(0,t.jsx)("div",{css:this.getStyle(),className:"layout-item-toolbar",children:i.map((e,o)=>Array.isArray(e)?(0,t.jsx)(b,{uid:`${o}`,tools:e},o):(0,t.jsx)(I,Object.assign({uid:`${o}`},e),o))})})})}}const Jt=(0,e.createSelector)(t=>{var e,o,i;return null!==(i=null===(o=null===(e=t.appConfig)||void 0===e?void 0:e.forBuilderAttributes)||void 0===o?void 0:o.lockLayout)&&void 0!==i&&i},(t,o)=>{const{layoutItem:i}=o;if(i.type===e.LayoutItemType.Section){const t=At(i);if(t)return jt(t)}return""},(t,o)=>{const{layoutItem:i}=o;if(i.type===e.LayoutItemType.Section){let e;return e=window.jimuConfig.isBuilder?t.appStateInBuilder.appConfig.sections[i.sectionId]:t.appConfig.sections[i.sectionId],e.views.length}return 0},(t,e,o)=>({isLockLayout:t,activeViewId:e,numOfViews:o})),Kt=e.ReactRedux.connect(Jt)(Zt),Qt={previousView:"Previous view",nextView:"Next view",originTL:"Top left as origin",originTR:"Top right as origin",originBL:"Bottom left as origin",originBR:"Bottom right as origin",alignLeft:"Align left",alignRight:"Align right",alignTop:"Align top",alignCenter:"Align center",alignHCenter:"Horizontal center",alignVCenter:"Vertical center",alignBottom:"Align bottom",alignStretch:"Align stretch",sendBackward:"Send backward",bringForward:"Bring forward",sendToBack:"Send to back",bringToFront:"Bring to front",zoomoutFixed:"Zoom out fixed",order:"Order",moveToLeft:"Move to left",moveToRight:"Move to right",moveToTop:"Move to top",moveToBottom:"Move to bottom",addView:"New view",duplicateScreen:"Duplicate screen",deleteScreen:"Delete screen",applyToFirstPanel:"Apply to the first panel",deleteView:"Delete view",duplicateView:"Duplicate view",insertABlock:"Insert block",insertAScreenGroup:"Insert screen group",moveup:"Move up",movedown:"Move down",chooseTemplate:"Choose a {type} template",chooseHeaderTemplate:"Choose a header template",chooseFooterTemplate:"Choose a footer template",dropWidgetToAdd:"Or drag a widget here",snapToLeft:"Snap to left",snapToTop:"Snap to top",snapToBottom:"Snap to bottom",snapToRight:"Snap to right",fullWidth:"Full width",fullHeight:"Full height",fullSize:"Full size",restoreSize:"Restore size",pendingTip:"Move to the pending list",setting:"Settings",dragToMove:"Drag to move {label}",lockLayout:"Lock position and size",unlockLayout:"Unlock position and size",editHeader:"Edit header",editFooter:"Edit footer",transform:"Transform",rotation:"Rotation",angle:"Angle",floating:"Pin",sinking:"Unpin",floatingArea:"Floating area",changeToAuto:"Change to auto",changeToCustom:"Change to custom",positionType:"Position type",sticky:"Sticky",fixed:"Fixed",flow:"Flow",stack:"Stack",fixedAtTop:"Floating at the top when scrolling",actNormal:"Act as normal widget",hideInDesignView:"Click to hide in design view",showInDesignView:"Click to show in design view",unlockGridItem:"Unlock this widget to reorganize its internal widgets.",lockGridItem:"Lock this widget.",activeViewTip:"Section. Active view {viewLabel}.",widgetLabel:"Widget label"};class te extends e.React.PureComponent{constructor(){super(...arguments),this.formatMessage=(t,e)=>this.props.intl?this.props.intl.formatMessage({id:t,defaultMessage:Qt[t]},e):Qt[t]}getPositionStyle(){const{positionType:t}=this.props;return"left"===t?e.css`
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
      top: 0;
      left: 0;
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
          background-color: ${o.ref.palette.neutral[400]};
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

    `}render(){const{builderTheme:e,menuItems:o,layoutId:i,layoutItem:n,className:s,onMouseEnter:a,onMouseLeave:l}=this.props;return(0,t.jsx)("div",{className:`widget-context-menu ${s}`,css:this.getStyle(),children:(0,t.jsxs)("div",{ref:t=>{this.ref=t},className:"content",children:[(0,t.jsx)("div",{className:"menu-hint",children:(0,t.jsx)(u,{color:e.ref.palette.black,size:"m"})}),(0,t.jsx)("div",{className:"menu-content",onMouseLeave:l,onMouseEnter:a,children:(0,t.jsx)(Kt,{layoutId:i,layoutItem:n,theme:e,parentRef:this.ref,tools:o,formatMessage:this.formatMessage})}),this.props.children]})})}}const ee=(0,e.injectIntl)(te),oe=(e.React.createContext({viewOnly:!0}),e.React.createContext(!0),e.React.createContext("")),ie=22.5;function ne(t,e){const o=function(t){if(isNaN(t))return 0;const e=t%360;return e<0?e+360:e}(t+e);return o>=337.5||o<ie||o>=157.5&&o<202.5?"ns-resize":o>=ie&&o<67.5||o>=202.5&&o<247.5?"nesw-resize":o>=67.5&&o<112.5||o>=247.5&&o<292.5?"ew-resize":o>=112.5&&o<157.5||o>=292.5&&o<337.5?"nwse-resize":void 0}const se=9,ae=e.css`
  width: ${se}px;
  height: ${se}px;
  background: transparent;
  position: absolute;
`;function le(o){const{pos:i}=o,n=e.React.useRef(void 0);return e.hooks.useEffectOnce(()=>{var t;const e=null!==(t=window.devicePixelRatio)&&void 0!==t?t:1;n.current.width=se*e,n.current.height=se*e;const o=n.current.getContext("2d");o&&(o.scale(e,e),o.strokeStyle="#444",o.fillStyle="#fff",o.lineWidth=2,a.utils.isRTL()?("tl"===i&&(o.translate(se,0),o.rotate(Math.PI/2)),"br"===i&&(o.translate(0,se),o.rotate(-Math.PI/2)),"bl"===i&&(o.translate(se,se),o.rotate(Math.PI))):("tr"===i&&(o.translate(se,0),o.rotate(Math.PI/2)),"br"===i&&(o.translate(se,se),o.rotate(Math.PI)),"bl"===i&&(o.translate(0,se),o.rotate(-Math.PI/2))),o.beginPath(),o.moveTo(1,1),o.lineTo(se-1,1),o.lineTo(se-1,se/3),o.lineTo(se/3,se/3),o.lineTo(se/3,se-1),o.lineTo(1,se-1),o.closePath(),o.stroke(),o.fill())}),(0,t.jsx)("canvas",{css:ae,ref:n})}const re=16,de=4,ue=e.css`
  background: transparent;
  position: absolute;
`;function ce(o){const{direction:i}=o,n=e.React.useRef(void 0);return e.hooks.useEffectOnce(()=>{var t;const e=null!==(t=window.devicePixelRatio)&&void 0!==t?t:1;"h"===i?(n.current.width=re*e,n.current.height=de*e):(n.current.width=de*e,n.current.height=re*e);const o=n.current.getContext("2d");o&&(o.scale(e,e),o.strokeStyle="#444",o.fillStyle="#fff",o.lineWidth=2,"h"===i?o.rect(1,1,re-2,de-2):o.rect(1,1,de-2,re-2),o.stroke(),o.fill())}),(0,t.jsx)("canvas",{css:ue,ref:n})}const pe=11,he=16,ge=10,me=t=>e.css`
  top: 0;
  left: 0;
  position: absolute;
  /* cursor: nwse-resize; */
  cursor: ${ne(t,135)};
  .jimu-rtl & {
    /* cursor: nesw-resize; */
    cursor: ${ne(t,225)};
  }
  > svg {
    position: absolute;
    top: 0;
    left: 0;
  }
`,ye=t=>e.css`
  top: 0;
  right: 0;
  position: absolute;
  /* cursor: nesw-resize; */
  cursor: ${ne(t,225)};
  .jimu-rtl & {
    /* cursor: nwse-resize; */
    cursor: ${ne(t,315)};
  }
`,fe=t=>e.css`
  bottom: 0;
  left: 0;
  position: absolute;
  /* cursor: nesw-resize; */
  cursor: ${ne(t,45)};
  .jimu-rtl & {
    /* cursor: nwse-resize; */
    cursor: ${ne(t,135)};
  }
`,ve=t=>e.css`
  bottom: 0;
  right: 0;
  position: absolute;
  /* cursor: nwse-resize; */
  cursor: ${ne(t,315)};
  .jimu-rtl & {
    /* cursor: nesw-resize; */
    cursor: ${ne(t,405)};
  }
`,Ie=t=>e.css`
  height: ${10}px;
  left: ${ge}px;
  right: ${ge}px;
  top: 0px;
  position: absolute;
  /* cursor: ns-resize; */
  cursor: ${ne(t,180)};

  canvas {
    left: 50%;
    top: 0;
    width: ${he}px;
    height: ${4}px;
    margin-left: ${-8}px;
    margin-top: 1px;
  }
`,xe=t=>e.css`
  width: ${10}px;
  top: ${ge}px;
  bottom: ${ge}px;
  right: 0;
  position: absolute;
  /* cursor: ew-resize; */
  cursor: ${ne(t,270)};

  canvas {
    top: 50%;
    right: 0;
    width: ${4}px;
    height: ${he}px;
    margin-top: ${-8}px;
    margin-right: 1px;
  }
`,be=t=>e.css`
  height: ${10}px;
  left: ${ge}px;
  right: ${ge}px;
  bottom: 0;
  position: absolute;
  /* cursor: ns-resize; */
  cursor: ${ne(t,0)};

  canvas {
    left: 50%;
    bottom: 0;
    width: ${he}px;
    height: ${4}px;
    margin-left: ${-8}px;
    margin-bottom: 1px;
  }
`,we=t=>e.css`
  width: ${10}px;
  top: ${ge}px;
  bottom: ${ge}px;
  left: 0;
  position: absolute;
  /* cursor: ew-resize; */
  cursor: ${ne(t,90)};

  canvas {
    top: 50%;
    left: 0;
    width: ${4}px;
    height: ${he}px;
    margin-top: ${-8}px;
    margin-left: 1px;
  }
`;function Se(o){const{rotation:i=0}=o,{top:n,right:s,bottom:l,left:r,topLeft:d,topRight:u,bottomRight:c,bottomLeft:p}=function(t){const{left:e=!0,top:o=!0,right:i=!0,bottom:n=!0}=t;return{top:o,right:i,bottom:n,left:e,topRight:o&&i,bottomRight:n&&i,bottomLeft:n&&e,topLeft:o&&e}}(o),h=e.css`
    width: ${pe}px;
    height: ${pe}px;
    padding: 1px;
    z-index: ${a.LayoutZIndex.HandlerTools};
  `;return(0,t.jsxs)("div",{className:"w-100 h-100 action-area",children:[n&&(0,t.jsx)("span",{"data-testid":"top",className:"rnd-resize-top handle no-drag-action",css:Ie(i),children:(0,t.jsx)(ce,{direction:"h"})},"2"),s&&(0,t.jsx)("span",{"data-testid":"right",className:"rnd-resize-right handle no-drag-action",css:xe(i),children:(0,t.jsx)(ce,{direction:"v"})},"4"),l&&(0,t.jsx)("span",{"data-testid":"bottom",className:"rnd-resize-bottom handle no-drag-action",css:be(i),children:(0,t.jsx)(ce,{direction:"h"})},"6"),r&&(0,t.jsx)("span",{"data-testid":"left",className:"rnd-resize-left handle no-drag-action",css:we(i),children:(0,t.jsx)(ce,{direction:"v"})},"8"),d&&(0,t.jsx)("span",{"data-testid":"topLeft",className:"rnd-resize-top rnd-resize-left handle no-drag-action",css:[h,me(i)],children:(0,t.jsx)(le,{pos:"tl"})},"1"),u&&(0,t.jsx)("span",{"data-testid":"topRight",className:"rnd-resize-top rnd-resize-right handle no-drag-action",css:[h,ye(i)],children:(0,t.jsx)(le,{pos:"tr"})},"3"),c&&(0,t.jsx)("span",{"data-testid":"bottomRight",className:"rnd-resize-bottom rnd-resize-right handle no-drag-action",css:[h,ve(i)],children:(0,t.jsx)(le,{pos:"br"})},"5"),p&&(0,t.jsx)("span",{"data-testid":"bottomLeft",className:"rnd-resize-bottom rnd-resize-left handle no-drag-action",css:[h,fe(i)],children:(0,t.jsx)(le,{pos:"bl"})},"7")]})}const Ce=[ft,vt,It,gt,ht],Re=[].concat(Nt,Ce);function Te(n){const{layoutId:s,layoutItem:a,placement:l="top-start",refElement:r,shiftOptions:d,flipOptions:u,formatMessage:c,builderTheme:p,toolItems:h=[],showDefaultTools:g=!0}=n,[m,y]=e.React.useState(!1);let f=[],v=[];const I=a.type===e.LayoutItemType.Section,x=e.React.useMemo(()=>{const t=I?Re:Ce;let i=g?[...h,...t]:h;if(ct()){o.placeholderService.getPlaceholderInfo((0,e.getAppStore)().getState().appConfig,{layoutId:s,layoutItemId:a.id})&&(i=[ht])}return i},[I,a.id,s,h,g]);return e.hooks.useEffectOnce(()=>{if(a.widgetId){const t=(0,e.getAppStore)().getState().appConfig.widgets[a.widgetId];e.ExtensionManager.getInstance().registerWidgetExtensions(t,!1).then(t=>{t.length>0&&y(!0)})}}),m&&(f=function(t,o){return o?e.ExtensionManager.getInstance().getExtensions(e.extensionSpec.ExtensionPoints.ContextTool).filter(t=>t.widgetId===o).map(e=>{var i;return{widgetId:o,icon:e.getIcon(),title:e.getTitle.bind(e),onClick:e.onClick.bind(e),checked:e.checked&&e.checked.bind(e),disabled:e.disabled?"function"==typeof e.disabled?e.disabled.bind(e):e.disabled:null,visible:e.visible?"function"==typeof e.visible?e.visible.bind(e):e.visible:null,openWhenAdded:null!==(i=e.openWhenAdded)&&void 0!==i&&i,settingPanel:e.getSettingPanel({layoutId:t,layoutItem:{widgetId:o},clientRect:null}),index:e.index,extName:e.name}}).sort((t,e)=>t.index-e.index):[]}(s,a.widgetId)),f.length>0?v=x.length>0?[].concat(x,{separator:!0},f):f:x.length>0&&(v=x),r&&0!==v.length?(0,t.jsx)(i.Popper,{placement:l,reference:r,open:!0,unstyled:!0,autoUpdate:!0,shiftOptions:d,flipOptions:u,trapFocus:!1,autoFocus:!1,css:e.css`
        background: transparent;
        box-shadow: none;
      `,children:(0,t.jsx)("div",{children:(0,t.jsx)(Kt,{layoutId:s,layoutItem:a,theme:p,parentRef:r,tools:v,formatMessage:c})})}):null}var Me=function(t,e,o,i){return new(o||(o=Promise))(function(n,s){function a(t){try{r(i.next(t))}catch(t){s(t)}}function l(t){try{r(i.throw(t))}catch(t){s(t)}}function r(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o(function(t){t(e)})).then(a,l)}r((i=i.apply(t,e||[])).next())})};function Le(t){const i=(0,o.getAppConfigAction)();if(t.layoutInfo){const{layoutId:o,layoutItemId:n}=t.layoutInfo,s=i.appConfig.layouts[o].content[n];return!(s.type===e.LayoutItemType.Widget&&!s.widgetId)}if(e.utils.isExpressMode()){const e=["widgets/arcgis/arcgis-map/","widgets/common/divider/","widgets/common/menu/","widgets/common/navigator/","widgets/common/controller/","widgets/layout/fixed/","widgets/layout/sidebar/","widgets/layout/row/","widgets/layout/grid/","widgets/layout/column/","widgets/layout/accordion/","widgets/layout/flowrow/"];return t.uri&&!e.includes(t.uri)}return!(t.itemType===e.LayoutItemType.Widget&&t.manifest&&!t.uri)}function Pe(t,i){var n,s;const{layoutId:l}=t,r=a.searchUtils.findLayoutItem(i,t);if((null==r?void 0:r.type)===e.LayoutItemType.Widget){const t=(0,o.getAppConfigAction)().appConfig,i=t.layouts[l];if(!r.widgetId)return i.type===e.LayoutType.GridLayout;const a=null===(n=t.widgets)||void 0===n?void 0:n[r.widgetId];return(null===(s=null==a?void 0:a.manifest)||void 0===s?void 0:s.widgetType)!==e.WidgetType.Layout&&("widgets/arcgis/arcgis-map/"!==(null==a?void 0:a.uri)&&"widgets/common/navigator/"!==(null==a?void 0:a.uri)&&"widgets/common/controller/"!==(null==a?void 0:a.uri))}return!1}function Ae(t,i){const n=(0,o.getAppConfigAction)();if(i.layoutInfo){const{layoutId:o,layoutItemId:s}=i.layoutInfo,l=n.appConfig.layouts[o].content[s];n.removeLayoutItem(i.layoutInfo,!1,!1),n.addContentToPlaceholder(t,l.type,l.type===e.LayoutItemType.Widget?l.widgetId:l.sectionId),e.lodash.defer(()=>{a.utils.changeLayout(n.appConfig,t)})}else i.itemType===e.LayoutItemType.Widget&&i.uri?ze(t,i):i.itemType===e.LayoutItemType.Section&&je(t)}function je(t){const{layoutId:i,layoutItemId:n}=t,s=(0,o.getAppConfigAction)(),l=s.createSection();s.addContentToPlaceholder(t,e.LayoutItemType.Section,l.id),e.lodash.defer(()=>{a.utils.changeLayout(s.appConfig,{layoutId:i,layoutItemId:n})})}function ze(t,i){return Me(this,void 0,void 0,function*(){const{layoutId:n,layoutItemId:s}=t,l=(0,o.getAppConfigAction)(),r=yield l.createWidget({uri:i.uri,itemId:i.itemId});l.addContentToPlaceholder(t,e.LayoutItemType.Widget,r.id),e.lodash.defer(()=>{a.utils.changeLayout(l.appConfig,{layoutId:n,layoutItemId:s})})})}function $e(t){return Me(this,void 0,void 0,function*(){var i,n,s,a;const l=(0,e.getAppStore)().getState(),r=window.jimuConfig.isBuilder?l.appStateInBuilder:l,{appConfig:d,browserSizeMode:u}=r,{activePagePart:c,currentPageId:p}=r.appRuntimeInfo;let h;if(u!==d.mainSizeMode)return;h=c===e.PagePart.Header?d.header.layout[u]:c===e.PagePart.Footer?d.footer.layout[u]:d.pages[p].layout[u];if(d.layouts[h].type===e.LayoutType.FixedLayout){const l=yield W(d,t,h),r=o.LayoutServiceProvider.getInstance().getServiceByType(e.LayoutType.FixedLayout).processAfterItemAdded(l.updatedAppConfig,t,l.layoutInfo,{currentSizeMode:u,containerRect:{width:1280,height:800},itemRect:{width:(null===(n=null===(i=t.manifest)||void 0===i?void 0:i.defaultSize)||void 0===n?void 0:n.width)||200,height:(null===(a=null===(s=t.manifest)||void 0===s?void 0:s.defaultSize)||void 0===a?void 0:a.height)||200},insertIndex:null,others:{snapResult:{left:0,top:0,width:0,height:0}}});(0,o.getAppConfigAction)(r).editLayoutItemProperty(l.layoutInfo,"bbox.left","50%").editLayoutItemProperty(l.layoutInfo,"bbox.top","50%").editLayoutItemProperty(l.layoutInfo,"setting.vCenter",!0).editLayoutItemProperty(l.layoutInfo,"setting.autoProps.top",!1).editLayoutItemProperty(l.layoutInfo,"setting.autoProps.bottom",!0).editLayoutItemProperty(l.layoutInfo,"setting.hCenter",!0).editLayoutItemProperty(l.layoutInfo,"setting.autoProps.left",!1).editLayoutItemProperty(l.layoutInfo,"setting.autoProps.right",!0).exec()}})}var Ne=h(8547),ke=h.n(Ne),Oe=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const Ee=o=>{const i=window.SVG,{className:n}=o,s=Oe(o,["className"]),a=(0,e.classNames)("jimu-icon jimu-icon-component",n);return i?(0,t.jsx)(i,Object.assign({className:a,src:ke()},s)):(0,t.jsx)("svg",Object.assign({className:a},s))};class Be extends e.React.PureComponent{constructor(t){super(t),this.formatMessage=(t,e)=>null!=this.props.intl?this.props.intl.formatMessage({id:t,defaultMessage:Qt[t]},e):Qt[t],this.isMac=()=>{var t,e;return"macOS"===(null===(e=null===(t=window.jimuUA)||void 0===t?void 0:t.os)||void 0===e?void 0:e.name)},this.copyItem=()=>{const{layoutId:t,layoutItem:o,lockLayout:i}=this.props;if(!i){const i=this.ref.getBoundingClientRect(),n=i.width,s=i.height;(0,e.getAppStore)().dispatch(e.appActions.clipboardChanged({layoutId:t,width:n,height:s,layoutItemId:o.id}))}},this.deleteSelectedItem=()=>{const{selected:t,layoutId:i,layoutItem:n,lockLayout:s,isFunctionalWidget:a,isDesignMode:l}=this.props;if(t&&(l||e.utils.isExpressMode())){if(e.utils.isExpressMode()){const t=(0,o.getAppConfigAction)().appConfig;if(!Pe({layoutId:i,layoutItemId:n.id},t))return}if(!s||a){const t={layoutId:i,layoutItemId:n.id};o.appBuilderSync.publishConfirmDeleteToApp(t)}}},this.state={selected:!1,updateIndex:0},this.screenGroupInfo="",this.isMac()?this.keyBindings={delete:this.deleteSelectedItem,backspace:this.deleteSelectedItem,"command+keyc":this.copyItem}:this.keyBindings={delete:this.deleteSelectedItem,backspace:this.deleteSelectedItem,"ctrl+keyc":this.copyItem}}componentDidMount(){let t;const e=this.screenGroupInfo.split(":");if(e.length>1){const o=e[0],i=e[1];t=document.querySelector(`div.builder-layout-item[data-layoutid="${o}"][data-layoutitemid="${i}"]`)}this.shiftOptions={boundary:null!=t?t:"viewport",crossAxis:!0},this.flipOptions={fallbackPlacements:["top-start","bottom-start","right-start","left-start"]},this.props.selected&&this.setState({selected:!0})}componentDidUpdate(t){this.scrollIntoView(),this.props.selected&&!t.isDesignMode&&this.props.isDesignMode&&this.setState({updateIndex:this.state.updateIndex+1})}doScroll(){const{layoutId:t,layoutItem:e}=this.props,o=document.querySelector(`div.exb-rnd[data-layoutid="${t}"][data-layoutitemid="${e.id}"]`);null!=o&&o.scrollIntoView({behavior:"auto",block:"center"})}scrollIntoView(){var t,i;const{selected:n,autoScroll:s}=this.props;if(!n||!s)return;const{layoutId:a}=this.props;let l=!1,r=!1;const d=(0,o.getAppConfigAction)().appConfig,u=d.layouts[a];if((null===(t=u.parent)||void 0===t?void 0:t.type)===e.LayoutParentType.View){const t=d.views[u.parent.id];null!=(null==t?void 0:t.parent)&&(e.jimuHistory.changeView(t.parent,t.id),l=!0)}if((null===(i=u.parent)||void 0===i?void 0:i.type)===e.LayoutParentType.Screen){const t=d.screens[u.parent.id];if(null!=(null==t?void 0:t.parent)){const o=d.screenGroups[t.parent].screens.indexOf(t.id);(0,e.getAppStore)().dispatch(e.appActions.screenGroupNavInfoChanged(t.parent,o,!0)),r=!0}}l||r?e.lodash.defer(()=>{this.doScroll()}):this.doScroll()}getStyle(){const{isFunctionalWidget:t,isSection:o,selected:i,isBlock:n,rotate:s=0}=this.props,l=e.polished.rgba(this.pageContext.builderTheme.ref.palette.neutral[900],.6),r=this.pageContext.builderTheme.sys.color.primary.main,d=!t||o?"dashed":"solid";return e.css`
      .${Et} &,
      .${Ot} & {
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

      .exb-rnd.selected > div > & > div.selected-tip {
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
        background: ${this.pageContext.builderTheme.ref.palette.neutral[800]};
        border: 1px solid ${this.pageContext.builderTheme.ref.palette.neutral[600]};
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
    `}getKeyboardComponent(){return(0,t.jsx)(e.Keyboard,{bindings:this.keyBindings})}isResizable(){const{resizable:t=!0,selected:o,isExpressMode:i}=this.props;return!e.utils.isExpressMode()&&o&&!this.pageContext.viewOnly&&!this.props.lockLayout&&!i&&t}showToolbar(){const{forbidToolbar:t,selected:o}=this.props;return!t&&!this.pageContext.viewOnly&&!e.utils.isExpressMode()&&o}render(){return(0,t.jsx)(oe.Consumer,{children:o=>(this.screenGroupInfo=o,(0,t.jsx)(a.PageContext.Consumer,{children:o=>{if(this.pageContext=o,!this.props.isDesignMode&&!e.utils.isExpressMode())return null;const{layoutId:i,layoutItem:n,resizable:s=!0,draggable:a=!0,selected:l,toolItems:r,showDefaultTools:d,left:u,top:c,right:p,bottom:h,rotate:g,isDesignMode:m}=this.props,y=!a&&!s;return(0,t.jsxs)("div",{"data-testid":"select-wrapper",ref:t=>{this.ref=t},css:this.getStyle(),className:(0,e.classNames)("select-wrapper",{selected:l,"no-embed-layout":!this.props.hasEmbeddedLayout}),children:[!o.viewOnly&&(0,t.jsx)("div",{className:"selected-tip",children:(0,t.jsx)("div",{className:"tip-content"})}),this.showToolbar()&&(0,t.jsx)(Te,{layoutId:i,layoutItem:n,refElement:this.ref,shiftOptions:this.shiftOptions,flipOptions:this.flipOptions,builderTheme:this.pageContext.builderTheme,formatMessage:this.formatMessage,toolItems:m?r:void 0,showDefaultTools:!!m&&d}),this.isResizable()&&(0,t.jsx)(Se,{left:u,right:p,top:c,bottom:h,rotation:g,builderTheme:o.builderTheme}),y&&l&&!e.utils.isExpressMode()&&(0,t.jsx)("div",{className:"lock-layout-tip rounded-circle",children:(0,t.jsx)(Ee,{size:"s",color:o.builderTheme.ref.palette.black})}),l&&this.getKeyboardComponent()]})}}))})}}const De=(0,e.createSelector)([t=>{var e,o,i;return null!==(i=null===(o=null===(e=t.appConfig)||void 0===e?void 0:e.forBuilderAttributes)||void 0===o?void 0:o.lockLayout)&&void 0!==i&&i},t=>t.appRuntimeInfo.appMode===e.AppMode.Design,t=>t.appRuntimeInfo.appMode===e.AppMode.Express,(t,e)=>{var o,i;return e.isSection?null===(i=null===(o=t.appRuntimeInfo)||void 0===o?void 0:o.sectionNavInfos)||void 0===i?void 0:i[e.layoutItem.sectionId]:null}],(t,e,o,i)=>({lockLayout:t,isDesignMode:e,isExpressMode:o,sectionNavInfo:i})),Fe=e.ReactRedux.connect(De)((0,e.injectIntl)(Be));function He(n){const{layoutId:s,layoutItemId:l,sizemode:r,onSyncChange:d,className:u}=n,c=e.hooks.useTranslation(i.defaultMessages),p=e.React.useMemo(()=>c("syncPlaceholderTip"),[c]),h=e.React.useMemo(()=>{const t=(0,e.getAppStore)().getState().appConfig;return a.searchUtils.getRootContainerInfoOfLayout(t,s,r)},[s,r]),g=e.ReactRedux.useSelector(t=>{const e=o.placeholderService.getPlaceholderInfo(t.appConfig,{layoutId:s,layoutItemId:l});return e&&e.layoutInfo.layoutId!==s?e.id:-1}),m=e.ReactRedux.useSelector(t=>{const e=t.browserSizeMode,o=t.appConfig.placeholderInfos,i=Object.keys(null!=o?o:{}).filter(t=>{var i;const n=o[t];return!!h&&(n.rootContainer.type===h.type&&n.rootContainer.id===h.id&&null==(null===(i=n.syncs)||void 0===i?void 0:i[e]))}).map(t=>+t);return i.sort(),i.join(",")}),y=e.ReactRedux.useSelector(t=>{var o;return(null===(o=t.appInfo)||void 0===o?void 0:o.type)===e.AppType.Template}),f=e.ReactRedux.useSelector(t=>{var o;return(null===(o=t.appRuntimeInfo)||void 0===o?void 0:o.appMode)===e.AppMode.Design}),v=e.ReactRedux.useSelector(t=>t.appConfig.mainSizeMode),I=e.React.useCallback(t=>{d(+t.target.value)},[d]);return y&&f&&r!==v?0===m.length&&null==g?null:(0,t.jsxs)("div",{className:"w-100 h-100 d-flex flex-column justify-content-center align-items-center",children:[(0,t.jsxs)(i.Select,{css:e.css`
          width: auto;
          .btn { border: 1px solid var(--sys-color-divider-input-field); }
          .btn, .btn:hover { border-radius: 1rem; padding: 0 24px; }
        `,value:g,onChange:I,"aria-label":p,title:p,className:u,children:[(0,t.jsx)("option",{selected:-1===g,value:-1,children:c("none")}),g>0&&(0,t.jsx)("option",{selected:!0,value:g,children:g}),m.split(",").map(e=>(0,t.jsx)("option",{value:+e,children:e},e))]}),(0,t.jsx)("span",{className:"mt-2 px-2",css:e.css`font-size: 14px; color: var(--sys-color-action-text);`,children:p})]}):null}var Ve=h(9298);function We(t){if(t&&"function"==typeof t.getAttribute){const o=t.getAttribute("data-layoutid"),i=t.getAttribute("data-layoutitemid");if(o&&i)return function(t,o){var i,n,s,a,l,r;const d=(0,e.getAppStore)().getState(),{layouts:u,widgets:c}=d.appConfig,p=u[t],h=null===(i=null==p?void 0:p.content)||void 0===i?void 0:i[o];if(h){const i={layoutId:t,layoutItemId:o},u=function(t,o){var i,n,s;if(o.type===e.LayoutItemType.Widget){const e=o.widgetId;if(e)return null===(s=null===(n=null===(i=t.appConfig)||void 0===i?void 0:i.widgets)||void 0===n?void 0:n[e])||void 0===s?void 0:s.manifest}return null}(d,h);let p=null;return h.type===e.LayoutItemType.Widget&&h.widgetId&&(p=null===(n=c[h.widgetId])||void 0===n?void 0:n.uri),{itemType:h.type,layoutInfo:i,uri:p,manifest:u,rotation:null!==(r=null===(l=null===(a=null===(s=h.setting)||void 0===s?void 0:s.style)||void 0===a?void 0:a.transform)||void 0===l?void 0:l.rotate)&&void 0!==r?r:0}}}(o,i)}return null}function Ge(t,e){const o={};return o.width=Math.min(t.width,e.width),o.height=Math.min(t.height,e.height),o.left=Math.max(0,t.left),o.top=Math.max(0,t.top),o.left+o.width>e.width&&(o.left=e.width-o.width),o.top+o.height>e.height&&(o.top=e.height-o.height),o}function Ue(t,o,i,n){var s,l;if((null==t?void 0:t.itemType)===e.LayoutItemType.ScreenGroup){const t=a.utils.getCurrentPageId(),o=a.utils.getAppConfig(),i=o.pages[t];return Object.keys(null!==(s=null==i?void 0:i.layout)&&void 0!==s?s:{}).some(t=>{const s=o.layouts[i.layout[t]];return s.type===e.LayoutType.FlowLayout&&s.id===n})}let r=function(t,o){var i,n,s,a;if(!o)return!1;if(null!==(i=o.isFromCurrentSizeMode)&&void 0!==i&&!i)return!0;const l=o.layoutInfo;if(l){const o=(0,e.getAppStore)().getState(),{layouts:i}=o.appConfig,r=i[l.layoutId],d=null===(n=null==r?void 0:r.content)||void 0===n?void 0:n[l.layoutItemId];if(d){const o=null!==(a=null===(s=d.setting)||void 0===s?void 0:s.lockParent)&&void 0!==a&&a;if(r.type===e.LayoutType.FlowLayout||o)return l.layoutId===t}}return!0}(n,t);return r&&"function"==typeof o.isItemAccepted&&(r=o.isItemAccepted(t,null!==(l=i.isPlaceholder)&&void 0!==l&&l)),r}function _e(t,e,o){let i,n,s,a,l;return(0,Gt.interact)(t).dropzone({accept:null!=o?o:".exb-rnd",checker:(t,o,n,s,a,l,r)=>{const{props:d,layoutId:u,pageContext:c,layoutContext:p}=e.current;return"none"!==getComputedStyle(a).pointerEvents&&(i=We(r),!c.viewOnly&&n&&!r.contains(a)&&Ue(i,p,d,u))},ondragenter:t=>{var o,l,r;const{props:d,layoutId:u,pageContext:c}=e.current;if(t.stopPropagation(),t.target.classList.add("drop-target"),u!==c.rootLayoutId&&t.target.classList.add("drop-active"),n=document.getElementById("interact_dragging_placeholder")||t.relatedTarget,a=t.dropzone.getRect(t.target),(null===(r=null===(l=null===(o=t.dragEvent.interactable)||void 0===o?void 0:o.options)||void 0===l?void 0:l.drag)||void 0===r?void 0:r.allowFrom)&&(s=t.relatedTarget.querySelector(t.dragEvent.interactable.options.drag.allowFrom),s)){const e=s.getBoundingClientRect(),o=t.dragEvent.rect;s.setAttribute("data-dx",""+(e.left-o.left)),s.setAttribute("data-dy",""+(e.top-o.top)),s.setAttribute("data-width",`${e.width}`),s.setAttribute("data-height",`${e.height}`)}d.onDragEnter&&d.onDragEnter(i),d.onToggleDragoverEffect&&d.onToggleDragoverEffect(!0,i)},ondragleave:t=>{const{props:o}=e.current;t.stopPropagation(),t.target.classList.remove("drop-target"),t.target.classList.remove("drop-active"),n=null,a=null,l&&cancelAnimationFrame(l),s&&(s.removeAttribute("data-dx"),s.removeAttribute("data-dy"),s.removeAttribute("data-width"),s.removeAttribute("data-height")),o.onDragLeave&&o.onDragLeave(i),o.onToggleDragoverEffect&&o.onToggleDragoverEffect(!1,i)},ondropmove:t=>{const{props:o}=e.current;t.stopPropagation(),l&&cancelAnimationFrame(l),l=requestAnimationFrame(()=>{const e=t.dragEvent.rect,r=t.dragEvent._interaction.coords.cur.client,d=r.x-(null==a?void 0:a.left),u=r.y-(null==a?void 0:a.top);if(o.onDragOver){let l;s&&(l={left:parseFloat(s.getAttribute("data-dx"))+e.left-(null==a?void 0:a.left),top:parseFloat(s.getAttribute("data-dy"))+e.top-(null==a?void 0:a.top),width:parseFloat(s.getAttribute("data-width")),height:parseFloat(s.getAttribute("data-height"))}),o.onDragOver(i,n,a,{left:e.left-(null==a?void 0:a.left),top:e.top-(null==a?void 0:a.top),width:e.width,height:e.height,right:e.left-(null==a?void 0:a.left)+e.width,bottom:e.top-(null==a?void 0:a.top)+e.height,handlerRect:l},d,u,t.dragEvent.speed)}l=null})},ondrop:t=>{const{props:o}=e.current;if(t.stopPropagation(),t.target.classList.remove("drop-target"),t.target.classList.remove("drop-active"),o.onToggleDragoverEffect&&o.onToggleDragoverEffect(!1,i),l&&cancelAnimationFrame(l),o.onDrop){const e=t.dragEvent.rect;let n={left:e.left-a.left,top:e.top-a.top,width:e.width,height:e.height};n=Ge(n,{left:0,top:0,width:a.width,height:a.height}),n.right=n.left+n.width,n.bottom=n.top+n.height;const s=t.dragEvent._interaction.coords.cur.client,l=s.x-a.left,r=s.y-a.top;o.onDrop(i,a,n,l,r)}}})}function Ye(t,o){let i,n;const s=e.lodash.throttle(function(t,e,i){if(!t||isNaN(e)||isNaN(i))return;let s=200,a=100;const{props:l}=o.current;t.manifest.defaultSize&&(s=isNaN(t.manifest.defaultSize.width)?s:t.manifest.defaultSize.width,a=isNaN(t.manifest.defaultSize.height)?a:t.manifest.defaultSize.height);l.onDragOver&&l.onDragOver(t,null,n,{left:e-s/2-n.left,top:i-a/2-n.top,width:s,height:a,right:e-s/2-n.left+s,bottom:i-a/2-n.top+a},e-n.left,i-n.top)},100);function a(){const{props:e,layoutId:n,layoutContext:s,pageContext:a}=o.current;if(a.viewOnly)return;const l=window.jimuConfig.isInBuilder&&window.parent&&window.parent._dragging_widget_item?window.parent._dragging_widget_item:null;i&&i===l||(i=l,Ue(i,s,e,n)&&(t.classList.add("drop-target"),e.onToggleDragoverEffect&&e.onToggleDragoverEffect(!0,i)))}function l(){if(!i)return!1;const{props:t,layoutId:e,pageContext:n,layoutContext:s}=o.current;return!n.viewOnly&&Ue(i,s,t,e)}t.addEventListener("dragenter",function(e){const{props:s}=o.current;if(e.stopPropagation(),e.preventDefault(),a(),!l())return;n=t.getBoundingClientRect(),i&&s.onDragEnter&&s.onDragEnter(i)}),t.addEventListener("dragleave",function(e){const{props:n}=o.current;if(e.stopPropagation(),e.preventDefault(),t.classList.remove("drop-target"),t.classList.remove("drop-active"),!l())return;n.onDragLeave&&n.onDragLeave(i);n.onToggleDragoverEffect&&n.onToggleDragoverEffect(!1,i);i=null}),t.addEventListener("dragover",function(e){const{layoutId:n,pageContext:r}=o.current;if(e.stopPropagation(),e.preventDefault(),a(),!l())return void(e.dataTransfer&&(e.dataTransfer.dropEffect="none"));e.dataTransfer&&(e.dataTransfer.dropEffect="copy");if(t.classList.contains("drop-target")){const{clientX:o,clientY:a}=e;t.classList.contains("drop-active")||n===r.rootLayoutId||t.classList.add("drop-active"),s(i,o,a)}}),t.addEventListener("drop",function(e){if(e.stopPropagation(),t.classList.remove("drop-target"),t.classList.remove("drop-active"),document.documentElement.classList.remove(Et),!l())return void(i=null);const{props:n}=o.current,{clientX:s,clientY:a}=e,r=t.getBoundingClientRect();let d=200,u=100;i.manifest.defaultSize&&(d=isNaN(i.manifest.defaultSize.width)?d:i.manifest.defaultSize.width,u=isNaN(i.manifest.defaultSize.height)?u:i.manifest.defaultSize.height);let c={width:d,height:u,left:s-d/2-r.left,top:a-u/2-r.top};c=Ge(c,{left:0,top:0,width:r.width,height:r.height}),c.right=c.left+c.width,c.bottom=c.top+c.height,n.onToggleDragoverEffect&&n.onToggleDragoverEffect(!1,i);n.onDrop&&n.onDrop(i,r,c,s-r.left,a-r.top);i=null})}function Xe(o){const i=e.React.useRef(void 0),n=e.ReactRedux.useSelector(t=>o.layouts[t.browserSizeMode]),s=e.ReactRedux.useSelector(t=>t.appRuntimeInfo.appMode===e.AppMode.Design),l=e.React.useContext(a.PageContext),r=e.React.useContext(a.LayoutContext),d=e.React.useRef(void 0);d.current={props:o,layoutId:n,pageContext:l,layoutContext:r},e.React.useEffect(()=>{let t;return i.current&&(t=_e(i.current,d)),()=>{t&&t.unset()}},[]),e.React.useEffect(()=>{i.current&&Ye(i.current,d)},[]);const{className:u,style:c,highlightDragover:p}=o,h=(0,e.classNames)("exb-drop-area d-flex",u);return(0,t.jsx)("div",{className:h,css:e.css`
      background: transparent;
      padding: inherit;
      pointer-events: ${s?"auto":"none !important"};

      & > .highlight-content {
        display: none;
        pointer-events: none;
        position: relative;
      }

      &.drop-target > .highlight-content {
        display: flex;
      }

      &.drop-active {
        background: ${e.polished.rgba(l.builderTheme.sys.color.primary.dark,.2)};
      }
    `,style:c,ref:t=>{i.current=t},children:p&&(0,t.jsx)("div",{className:"w-100 highlight-content",children:o.children})})}var qe=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const Ze=o=>{const i=window.SVG,{className:n}=o,s=qe(o,["className"]),a=(0,e.classNames)("jimu-icon jimu-icon-component",n);return i?(0,t.jsx)(i,Object.assign({className:a,src:Rt()},s)):(0,t.jsx)("svg",Object.assign({className:a},s))},Je=(0,c.withBuilderTheme)(i.Tooltip),Ke=(0,c.withBuilderTheme)(Ve.WidgetListPopper),Qe=e.css`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  right: 0;
  display: flex;
  z-index: 0;
`;class to extends e.React.PureComponent{constructor(t){super(t),this.toggleModal=t=>{t.stopPropagation(),(0,e.getAppStore)().getState().browserSizeMode!==e.BrowserSizeMode.Small?this.setState(t=>({showModal:!t.showModal})):o.appBuilderSync.publishSidePanelToApp({type:"widget",isPlaceholder:!0,isItemAccepted:this.isItemAccepted,onSelect:this.setContent})},this.closeModal=()=>{this.state.showModal&&this.setState({showModal:!1})},this.toggleDragoverEffect=(t,e)=>{this.ref&&t&&this.isItemAccepted(e)?this.ref.classList.add("dragover"):this.ref.classList.remove("dragover")},this.onDrop=t=>{if(!this.isItemAccepted(t))return;const{layoutId:e,layoutItemId:o}=this.props;Ae({layoutId:e,layoutItemId:o},t)},this.setContent=t=>{const{layoutId:o,layoutItemId:i}=this.props;t.itemType===e.LayoutItemType.Widget?ze({layoutId:o,layoutItemId:i},t).then(()=>{this.setState({isBusy:!1})}):t.itemType===e.LayoutItemType.Section&&je({layoutId:o,layoutItemId:i}),this.setState({showModal:!1,isBusy:!0})},this.handleSyncChange=t=>{const{browserSizeMode:e,layoutId:i,layoutItemId:n}=this.props;(0,o.getAppConfigAction)().syncPlaceholder({layoutId:i,layoutItemId:n},t,e).exec()},this.isItemAccepted=t=>this.layoutContext.isItemAccepted(t,!0)&&Le(t),this.fakeLayouts=(0,e.Immutable)({[e.BrowserSizeMode.Large]:`${this.props.layoutId}_${this.props.layoutItemId}_tlarge`,[e.BrowserSizeMode.Medium]:`${this.props.layoutId}_${this.props.layoutItemId}_tmedium`,[e.BrowserSizeMode.Small]:`${this.props.layoutId}_${this.props.layoutItemId}_tsmall`}),this.state={showModal:!1,isBusy:!1}}componentDidUpdate(t){t.currentDialogId!==this.props.currentDialogId&&this.setState({showModal:!1})}getStyle(t){return e.css`
      overflow: hidden;
      container-type: inline-size;

      &.is-template {
        border: 1px dashed ${t.sys.color.primary.dark};
      }

      &.dragover .drop-tip {
        background: ${e.polished.rgba(t.sys.color.primary.dark,.5)} !important;
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

      .placeholder-id {
        background: var(--sys-color-surface-overlay);
        color: var(--sys-color-surface-overlay-text);
        font-size: min(32px, 12.5cqw, 12.5cqh);
        width: min(25cqw, 25cqh);
        height: min(25cqw, 25cqh);
        max-width: 64px;
        max-height: 64px;
        gap: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
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
      background-color: ${t.ref.palette.neutral[400]};
      max-height: 400px;
      overflow: auto;
    `}getModalStyle(){const{builderTheme:t}=this.pageContext;return e.css`
      .modal-content {
        background-color: ${t.ref.palette.neutral[400]};
      }

      .modal-header {
        color: ${t.ref.palette.black};
        .close {
          color: ${t.ref.palette.neutral[1100]};
          &:hover {
            color: ${t.ref.palette.black};
          }
        }
      }
    `}render(){const{isTemplate:o,isMainSizeMode:n}=this.props,s=e.utils.isExpressMode();return(0,t.jsx)(a.PageContext.Consumer,{children:l=>(this.pageContext=l,(0,t.jsx)(a.LayoutContext.Consumer,{children:a=>{var r;return this.layoutContext=a,(0,t.jsxs)("div",{className:(0,e.classNames)("layout-widget layout-item-content no-widget h-100 w-100 d-flex justify-content-center align-items-center",{"is-template":o}),ref:t=>{this.ref=t},css:this.getStyle(l.builderTheme),children:[!o&&(0,t.jsxs)(e.React.Fragment,{children:[(0,t.jsx)(Xe,{css:Qe,className:"drop-tip",layouts:this.fakeLayouts,isPlaceholder:!0,highlightDragover:!1,onToggleDragoverEffect:this.toggleDragoverEffect,onDrop:this.onDrop}),this.state.isBusy&&(0,t.jsx)(i.Loading,{type:i.LoadingType.Primary}),!this.state.isBusy&&(0,t.jsx)("div",{ref:t=>{this.btnRef=t},className:(0,e.classNames)("add-btn",{"d-none":this.pageContext.viewOnly||s&&!n}),children:(0,t.jsx)(Je,{title:null===(r=this.props.intl)||void 0===r?void 0:r.formatMessage({id:"addWidget"}),children:(0,t.jsx)(i.Button,{icon:!0,css:e.css`width: 36px; height: 36px; padding: 0.5rem;`,onClick:this.toggleModal,"aria-haspopup":!0,children:(0,t.jsx)(Ze,{})})})}),!this.state.isBusy&&this.state.showModal&&(0,t.jsx)(Ke,{referenceElement:this.btnRef,isAccepted:this.isItemAccepted,onSelect:this.setContent,onClose:this.closeModal}),this.pageContext.viewOnly&&(0,t.jsx)("div",{className:"mask"})]}),o&&(0,t.jsxs)(e.React.Fragment,{children:[this.props.placeholderId>0&&(0,t.jsx)("div",{className:"placeholder-id rounded-circle",children:this.props.placeholderId}),!this.pageContext.viewOnly&&(0,t.jsx)(He,{layoutId:this.props.layoutId,layoutItemId:this.props.layoutItemId,sizemode:this.props.browserSizeMode,onSyncChange:this.handleSyncChange,className:"sync-select"})]})]})}}))})}}const eo=(0,e.createSelector)(t=>{var e;return null===(e=t.appRuntimeInfo)||void 0===e?void 0:e.currentDialogId},t=>t.browserSizeMode,t=>t.browserSizeMode===t.appConfig.mainSizeMode,t=>{var o;return(null===(o=t.appInfo)||void 0===o?void 0:o.type)===e.AppType.Template},(t,e)=>{const{layoutId:i,layoutItemId:n}=e,s=o.placeholderService.getPlaceholderInfo(t.appConfig,{layoutId:i,layoutItemId:n});return s&&s.layoutInfo.layoutId===i?s.id:-1},(t,e,o,i,n)=>({currentDialogId:t,browserSizeMode:e,isMainSizeMode:o,isTemplate:i,placeholderId:n})),oo=e.ReactRedux.connect(eo)(to),io=(0,e.injectIntl)(oo);class no extends e.React.PureComponent{mask(){return(0,t.jsx)("div",{className:"widget-mask"})}getStyle(){return e.css`
      .${Ot} & {
        overflow: visible !important;
      }
      z-index: ${this.props.isInlineEditing?a.LayoutZIndex.HandlerTools:0};

      body:not(.design-mode) & {
        z-index: auto;
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

      body:not(.design-mode) & .widget-mask {
        display: none !important;
      }
    `}getPlaceholderStyle(){return e.css`
      body:not(.design-mode) & {
        display: none !important;
      }
    `}render(){const{widgetId:e,isInlineEditing:o,isFunctionalWidget:i,hasEmbeddedLayout:n}=this.props,s=!o&&i&&!n;return(0,t.jsxs)(a.WidgetRenderer,Object.assign({className:"w-100",css:this.getStyle()},this.props,{children:[!e&&(0,t.jsx)(io,Object.assign({css:this.getPlaceholderStyle()},this.props)),s&&e&&this.mask()]}))}}var so,ao=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};!function(t){t[t.ChooseLayoutType=0]="ChooseLayoutType",t[t.RenderLayout=1]="RenderLayout"}(so||(so={}));class lo extends e.React.Component{constructor(t){super(t),this.state={mode:so.RenderLayout},this.onLayoutTypeSelected=()=>{this.setState({mode:so.RenderLayout})},this.switchToChoosingMode=()=>{this.setState({mode:so.ChooseLayoutType})},this.layoutComponent=(0,a.findLayoutBuilder)(this.props.layout.type||e.LayoutType.FlowLayout)}shouldComponentUpdate(t){return!(t.isPageItem&&!t.visible)&&Object.keys(t).some(e=>t[e]!==this.props[e])}render(){const{layout:e}=this.props;if(!e)return null;const o=this.layoutComponent;if(!o)return null;const i=this.props,{isItemAccepted:n}=i,s=ao(i,["isItemAccepted"]);return(0,t.jsx)(a.LayoutContext.Provider,{value:{isItemAccepted:n||uo},children:(0,t.jsx)(o,Object.assign({},s))})}}const ro=e.ReactRedux.connect(a.utils.mapStateToLayoutProps)(lo);function uo(t){return null!=t}function co(t,e){if(!t)return null;let o={};t.backgroundIMage&&(o="string"==typeof t.backgroundIMage?{}:t.backgroundIMage);const n=t.backgroundPosition?i.FillType[t.backgroundPosition.toUpperCase()]:i.FillType.FILL;let s;s=null==t.backgroundColor?e:""===t.backgroundColor?"transparent":t.backgroundColor?t.backgroundColor:"";const a={color:s,fillType:n,image:o};return Object.assign(Object.assign({},i.styleUtils.toBackgroundStyle(a)),{color:t.textColor?t.textColor:null})}function po(o){const{viewId:n,isActive:s,layoutEntryComponent:a}=o,l=e.ReactRedux.useSelector(t=>{var e,o;return null===(o=null===(e=t.appConfig)||void 0===e?void 0:e.views)||void 0===o?void 0:o[n]}),r=a,[d,u]=e.React.useState(!1),c=e.React.useMemo(()=>({isInView:!0,isInCurrentView:s}),[s]);return e.React.useEffect(()=>{s&&l.lazyLoad&&!d&&u(!0)},[s,l.lazyLoad,d]),(0,t.jsx)("div",{className:(0,e.classNames)("w-100 h-100 d-flex section-view",{[i.FOCUSABLE_CONTAINER_CLASS]:s}),style:co(l,"var(--sys-color-surface-background)"),css:e.css`&, .exb-drop-area { pointer-events: ${s?"auto":"none"}; }`,id:`${l.parent}_${l.id}`,children:(d||!l.lazyLoad)&&(0,t.jsx)(e.ErrorBoundary,{children:(0,t.jsx)(e.ViewVisibilityContext.Provider,{value:c,children:(0,t.jsx)(r,{layouts:null==l?void 0:l.layout,isInSection:!0,className:"w-100"})})})},n)}function ho(o){var i,n;const{layoutId:s,layoutItemId:a,views:l,navInfo:r,animationPreview:d,playMode:u,previewId:c,currentIndex:p,previousIndex:h,progress:g,loop:m,viewTransition:y}=o,f=e.ReactRedux.useSelector(t=>{var e;return null===(e=t.appConfig.layouts[s].content[a].setting)||void 0===e?void 0:e.oneByOneEffect});return(0,t.jsx)("div",{className:"section-content",children:(0,t.jsx)(e.TransitionContainer,{useProgress:null!==(i=null==r?void 0:r.useProgress)&&void 0!==i&&i,useStep:null!==(n=null==r?void 0:r.useStep)&&void 0!==n&&n,previousIndex:h,currentIndex:p,progress:g,transitionType:null==y?void 0:y.type,direction:null==y?void 0:y.direction,playId:null==r?void 0:r.playId,withOneByOne:null==r?void 0:r.withOneByOne,previewId:d?c:null,previewMode:d?u:null,loop:m,oneByOneSetting:f,children:l.map(e=>{const i=e===l[p];return(0,t.jsx)(po,{viewId:e,isActive:i,layoutEntryComponent:o.layoutEntryComponent},e)})})})}var go=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const mo=o=>{const i=window.SVG,{className:n}=o,s=go(o,["className"]),a=(0,e.classNames)("jimu-icon jimu-icon-component",n);return i?(0,t.jsx)(i,Object.assign({className:a,src:bt()},s)):(0,t.jsx)("svg",Object.assign({className:a},s))};var yo=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const fo=o=>{const i=window.SVG,{className:n}=o,s=yo(o,["className"]),a=(0,e.classNames)("jimu-icon jimu-icon-component",n);return i?(0,t.jsx)(i,Object.assign({className:a,src:St()},s)):(0,t.jsx)("svg",Object.assign({className:a},s))};function vo(o){var n,s,a;const{sectionId:l,currentIndex:r,numOfViews:d,onCurrentViewChange:u}=o,c=e.hooks.useTranslation(i.defaultMessages),p=e.ReactRedux.useSelector(t=>{var e;return null===(e=t.appConfig.sections[l])||void 0===e?void 0:e.arrowsNav}),h=e.ReactRedux.useSelector(t=>{var e;return null===(e=t.appConfig.sections[l])||void 0===e?void 0:e.dotsNav}),g=e.ReactRedux.useSelector(t=>{if(null==h?void 0:h.visible){const e=t.appConfig.sections[l],o=null==e?void 0:e.views;if((null==o?void 0:o.length)>0){return o.map(e=>t.appConfig.views[e].label).join(";")}}return""}),m=e.React.useMemo(()=>g.length>0?g.split(";"):[],[g]),y=null!==(n=null==h?void 0:h.position)&&void 0!==n?n:"b",f=e.React.useMemo(()=>{const t=[];for(let e=0;e<d;e++)t.push(e);return t},[d]),v=()=>{var t,o,i,n;return e.css`
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
        left: ${null!==(t=p.offset)&&void 0!==t?t:8}px;
        top: 50%;
        transform: translateY(-50%);

        &.vertical {
          top: ${null!==(o=p.offset)&&void 0!==o?o:8}px;
          left: 50%;
          transform: translateX(-50%) rotate(90deg);
        }
      }
      &.second {
        right: ${null!==(i=p.offset)&&void 0!==i?i:8}px;
        top: 50%;
        transform: translateY(-50%);

        &.vertical {
          bottom: ${null!==(n=p.offset)&&void 0!==n?n:8}px;
          left: 50%;
          top: auto;
          right: auto;
          transform: translateX(-50%) rotate(90deg);
        }
      }
    `},I=e.React.useCallback((o,n)=>{var s;return(0,t.jsx)(i.Button,{type:"tertiary","aria-label":null!==(s=m[o])&&void 0!==s?s:"","aria-pressed":n,className:(0,e.classNames)("dot p-0 rounded-circle",{active:n,disabled:d<=1}),onClick:n?void 0:()=>{u(o)}},o)},[u,d,m]),x=e.React.useCallback(()=>{u(r>0?r-1:d-1)},[r,d,u]),b=e.React.useCallback(()=>{u(r<d-1?r+1:0)},[r,d,u]),w=d>1&&0!==r,S=d>1&&r!==d-1;return(0,t.jsxs)(e.React.Fragment,{children:[(null==p?void 0:p.visible)&&(0,t.jsxs)(e.React.Fragment,{children:[(0,t.jsx)(i.Button,{type:"tertiary",disabled:!w,className:(0,e.classNames)("arrows-nav first p-0",{vertical:"v"===p.direction}),css:v(),onClick:w?x:null,"aria-label":c("previous"),children:(0,t.jsx)(mo,{className:"m-0",autoFlip:"v"!==p.direction,size:null!==(s=p.size)&&void 0!==s?s:20})}),(0,t.jsx)(i.Button,{type:"tertiary",disabled:!S,className:(0,e.classNames)("arrows-nav second p-0",{vertical:"v"===p.direction}),css:v(),onClick:S?b:null,"aria-label":c("next"),children:(0,t.jsx)(fo,{className:"m-0",autoFlip:"v"!==p.direction,size:null!==(a=p.size)&&void 0!==a?a:20})})]}),(null==h?void 0:h.visible)&&(0,t.jsx)("div",{className:(0,e.classNames)("dots-nav",{"snap-left":"l"===y,"snap-top":"t"===y,"snap-right":"r"===y,"snap-bottom":"b"===y}),css:(()=>{var t,o,i,n,s,a,l,r,d,u,c,p,g,m;return e.css`
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
        width: ${null!==(t=h.size)&&void 0!==t?t:8}px;
        height: ${null!==(o=h.size)&&void 0!==o?o:8}px;

        &.active {
          border-color: var(--ref-palette-white);
          background: var(--sys-color-primary-main);
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
        left: ${null!==(i=h.offset)&&void 0!==i?i:50}px;
        width: ${null!==(n=h.size)&&void 0!==n?n:8}px;

        > button:not(:first-of-type) {
          margin-top: ${null!==(s=h.spacing)&&void 0!==s?s:10}px;
        }
      }
      &.snap-right {
        height: 100%;
        top: 0;
        right: ${null!==(a=h.offset)&&void 0!==a?a:50}px;
        width: ${null!==(l=h.size)&&void 0!==l?l:8}px;

        > button:not(:first-of-type) {
          margin-top: ${null!==(r=h.spacing)&&void 0!==r?r:10}px;
        }
      }
      &.snap-top {
        width: 100%;
        top: ${null!==(d=h.offset)&&void 0!==d?d:50}px;
        height: ${null!==(u=h.size)&&void 0!==u?u:8}px;

        > button:not(:first-of-type) {
          margin-left: ${null!==(c=h.spacing)&&void 0!==c?c:10}px;
        }
      }
      &.snap-bottom {
        width: 100%;
        bottom: ${null!==(p=h.offset)&&void 0!==p?p:50}px;
        height: ${null!==(g=h.size)&&void 0!==g?g:8}px;

        > button:not(:first-of-type) {
          margin-left: ${null!==(m=h.spacing)&&void 0!==m?m:10}px;
        }
      }
    `})(),children:f.map(t=>I(t,t===r))})]})}function Io(t){const{sectionId:o,autoPlay:i,interval:n=S,loop:s=!1}=t,a=e.React.useRef(void 0),l=e.ReactRedux.useSelector(t=>{var o,n;return i?(null===(o=t.appRuntimeInfo)||void 0===o?void 0:o.appMode)===e.AppMode.Design||(null===(n=t.appRuntimeInfo)||void 0===n?void 0:n.isPrintPreview):null}),r=e.React.useRef(l),d=e.React.useCallback(()=>{a.current&&(clearInterval(a.current),a.current=null)},[]),u=e.React.useCallback(()=>{d(),a.current=setInterval(()=>{const t=function(t,o){var i,n;const s=(0,e.getAppStore)().getState(),a=s.appConfig.sections[t].views;let l=null===(n=null===(i=s.appRuntimeInfo)||void 0===i?void 0:i.sectionNavInfos)||void 0===n?void 0:n[t];const r=(null==l?void 0:l.currentViewId)?a.indexOf(l.currentViewId):0,d=r<a.length-1?r+1:0;return o||0!==d?(l=l?l.set("previousViewId",a[r]).set("currentViewId",a[d]):{previousViewId:a[r],currentViewId:a[d]},(0,e.getAppStore)().dispatch(e.appActions.sectionNavInfoChanged(t,l)),!0):(e.jimuHistory.changeView(t,a[a.length-1]),!1)}(o,s);t||d()},1e3*n)},[o,s,n,d]);e.React.useEffect(()=>{if(!r.current){if(!i)return void d();u()}return()=>{d()}},[i,n,s,d,u]),e.React.useEffect(()=>{if(r.current!==l&&null!==l){if(r.current=l,l)return void d();i&&u()}},[l,u,d,i])}var xo=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};function bo(t,o){return e.css`
    overflow: visible;
    position: relative;
    aspect-ratio: ${t&&o>0?o:null};

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
  `}function wo(o){var n;const{layoutId:s,layoutItemId:a,views:l,navInfo:r,activeView:d,animationPreview:u,playMode:c,previewId:p,transition:h,sectionId:g,autoPlay:m,focusable:y=!0,interval:f=S,loop:v=!0,className:I,sectionStyle:x,rotate:b,forceAspectRatio:w,aspectRatio:C,layoutEntryComponent:R}=o,T=e.React.useRef(void 0),M=e.React.useRef(void 0),L=e.React.useRef(!1),P=e.React.useRef(!1),A=e.React.useRef(null),[j,z]=e.React.useState(!1),$=e.ReactRedux.useSelector(t=>t.appConfig.sections[g].label),N=e.ReactRedux.useSelector(t=>t.appConfig.sections[g].a11yLabel),k=e.ReactRedux.useSelector(t=>t.appConfig.sections[g].addToA11ySkip),O=e.hooks.useTranslation(Qt),E=null==d?void 0:d.id,B=e.React.useMemo(()=>{var t;let o,i,n,s=l;if(r)if(s=null!==(t=r.visibleViews)&&void 0!==t?t:l,r.useProgress){n=r.progress;o=(0,e.getIndexFromProgress)(n,s.length).currentIndex}else o=Math.max(0,s.indexOf(r.currentViewId)),i=r.previousViewId?Math.max(0,s.indexOf(r.previousViewId)):Math.max(0,o-1);else o=Math.max(0,s.indexOf(E)),i=o;return T.current=o,{currentIndex:o,previousIndex:i,progress:n}},[E,r,l]),D=e.React.useMemo(()=>i.styleUtils.toCSSStyle(x),[x]),{transform:F}=D,H=xo(D,["transform"]),V=b>0||b<0?`rotateZ(${b}deg)`:"";let W=V;F&&(W=`${F} ${V}`);const G=e.React.useCallback(()=>{z(!0)},[]),U=e.React.useCallback(()=>{z(!1)},[]),_=e.React.useCallback(t=>{L.current=!0,P.current=t.target===M.current,null!=A.current&&(clearTimeout(A.current),A.current=null),m&&z(!0)},[m]),Y=e.React.useCallback(t=>{L.current=!1,null!=A.current&&(clearTimeout(A.current),A.current=null),m&&(A.current=setTimeout(()=>{z(!1)},500))},[m]),X=m&&!j;Io({sectionId:g,interval:f,loop:v,autoPlay:X});const q=e.React.useCallback(t=>{e.jimuHistory.changeView(g,l[t])},[g,l]),Z=e.React.useMemo(()=>{const t=(0,e.getA11yProps)(g,$,N,k);return y&&(t.tabIndex=0),t},[y,g,N,k,$]),J=O("activeViewTip",{viewLabel:(()=>{var t,o,i;const n=l[T.current],s=(0,e.getAppStore)().getState().appConfig;return null!==(i=null===(o=null===(t=null==s?void 0:s.views)||void 0===t?void 0:t[n])||void 0===o?void 0:o.label)&&void 0!==i?i:""})()});return Z["aria-label"]?Z["aria-label"]=Z["aria-label"]+". "+J:Z["aria-label"]=J,(0,t.jsxs)("div",Object.assign({className:(0,e.classNames)(`section-layout layout-item-content w-100 ${null===(n=null==x?void 0:x.boxShadow)||void 0===n?void 0:n.presetStyle}`,I),css:bo(w,C),"data-sectionid":g,style:Object.assign(Object.assign({},H),{transform:W}),onMouseEnter:m?G:null,onMouseLeave:m?U:null,onTouchStart:m?G:null,onTouchEnd:m?U:null,onFocus:_,onBlur:Y,tabIndex:y?0:void 0},Z,{ref:M,children:[(0,t.jsx)(ho,{layoutId:s,layoutItemId:a,views:l,navInfo:r,animationPreview:u,playMode:c,previewId:p,currentIndex:B.currentIndex,previousIndex:B.previousIndex,progress:B.progress,loop:X&&v,viewTransition:h,layoutEntryComponent:R}),(0,t.jsx)(vo,{sectionId:g,numOfViews:l.length,currentIndex:B.currentIndex,onCurrentViewChange:q})]}))}class So extends e.React.PureComponent{render(){return(0,t.jsx)(wo,Object.assign({},this.props,{layoutEntryComponent:ro}))}}function Co(){const t=[0];for(let e=1;e<=10;e++)t.push(e/10);return t}function Ro(t,o){const i=e.React.useRef(void 0),[n,s]=e.React.useState(!0);return e.React.useEffect(()=>{if(i.current&&(i.current.unobserve(t),i.current=null),!o)return;if(t&&"function"==typeof IntersectionObserver){const e=new IntersectionObserver(t=>{var e;(e=t[0]).target.classList.contains("playing-animation")||e.boundingClientRect.width>0&&e.boundingClientRect.height>0&&s(e.isIntersecting)},{threshold:Co(),root:document,rootMargin:"20%"});return e.observe(t),i.current=e,()=>{i.current.unobserve(t),i.current=null}}},[t,o]),n}const To=Gt.interact.modifiers.restrictRect({restriction:"parent"}),Mo=Gt.interact.modifiers.restrictRect({restriction:`div.${Bt}`});var Lo=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const Po=[mt,yt,gt,ht],Ao=[yt];function jo(o){var i,n,s,l,r,d,u;const c=e.ReactRedux.useSelector(t=>zo(t,o),e.ReactRedux.shallowEqual),p=Object.assign(Object.assign({},c),o),h=e.React.useContext(a.PageContext),g=e.React.useRef(void 0);let m,y;const{effect:f,oneByOneEffect:v,hoverEffect:I}=null!==(n=null===(i=p.layoutItem)||void 0===i?void 0:i.setting)&&void 0!==n?n:{},{animationPreview:x,previewId:b,playMode:w,layoutType:S}=p,C=e.React.useCallback(()=>h.rootLayoutId,[h.rootLayoutId]),R=Ro(g.current,p.watchViewportVisibility),{registerWidgetInitDragHandler:T,registerWidgetInitResizeHandler:M,setRefElement:L}=function(t){const{layoutId:o,layoutItemId:i,layoutType:n,layoutItemType:s,useDragHandler:a,restrict:l,getCurrentRootLayoutId:r}=t,d=e.React.useRef(void 0),u=e.React.useRef(void 0),c=e.React.useRef(void 0),p=e.React.useRef(void 0),h=e.React.useRef(void 0),g=e.React.useRef(void 0),m=e.React.useRef(void 0),y=e.React.useRef(void 0);function f(e){Vt(!0),Xt(!1),t.onDragStart&&t.onDragStart(e),h.current&&h.current()}function v(e,o,i){t.onDragging&&t.onDragging(e,o,i),g.current&&g.current(o,i)}function I(o,i,n){e.lodash.defer(()=>{Vt(!1)}),t.onDragEnd&&t.onDragEnd(o,i,n),m.current&&m.current(i,n)}function x(e,o,i){Vt(!1),Xt(!0),t.onResizeStart&&t.onResizeStart(e,o,i),u.current&&u.current(o,i)}function b(e,o,i,n,s,a,l){t.onResizing&&t.onResizing(e,o,i,n,s,a,l),c.current&&c.current(o,i,n,s)}function w(o,i,n,s,a,l){e.lodash.defer(()=>{Xt(!1)}),t.onResizeEnd&&t.onResizeEnd(o,i,n,s,a,l),p.current&&p.current(i,n,s,a)}const S=e.React.useCallback((t,e,o)=>{u.current=t,c.current=e,p.current=o},[]),C=e.React.useCallback((t,e,o)=>{h.current=t,g.current=e,m.current=o},[]),R=e.React.useCallback(u=>{y.current=u,d.current||(d.current=(0,Gt.interact)(u).origin("parent"),d.current=Ht(d.current,{layoutId:o,layoutItemId:i,useDragHandler:a,onDragging:v,onDragStart:f,onDragEnd:I,itemType:s,rootLayoutId:r,restrict:()=>l}),d.current=Yt(d.current,{layoutItemId:i,onResizing:b,restrictEdges:n===e.LayoutType.FixedLayout,onResizeStart:x,onResizeEnd:w})),d.current&&(l?d.current.draggable({modifiers:[To]}):d.current.draggable({modifiers:[Mo]})),t.resizeObserver&&u&&t.resizeObserver.observe(u)},[l]);return e.React.useEffect(()=>()=>{d.current&&(d.current.unset(),d.current=null),t.resizeObserver&&y.current&&t.resizeObserver.unobserve(y.current)},[t.resizeObserver]),{registerWidgetInitDragHandler:C,registerWidgetInitResizeHandler:S,setRefElement:R}}({restrict:o.restrict,layoutId:o.layoutId,layoutItemId:o.layoutItemId,layoutType:S,layoutItemType:null===(s=c.layoutItem)||void 0===s?void 0:s.type,useDragHandler:o.useDragHandler,resizeObserver:o.resizeObserver,getCurrentRootLayoutId:C,onDragStart:o.onDragStart,onDragging:o.onDragging,onDragEnd:o.onDragEnd,onResizeStart:o.onResizeStart,onResizing:o.onResizing,onResizeEnd:o.onResizeEnd});function P(){var t;const{selected:o,draggable:i=!0}=p,n=null!==(t=c.isInlineEditing)&&void 0!==t&&t,s=e.utils.isTouchDevice();return i&&!h.viewOnly&&!n&&(!s||o)}e.hooks.useEffectOnce(()=>{L(g.current)});const{layoutId:A,layoutItemId:j,parentRef:z,top:$,left:N,right:k,bottom:O,resizable:E,draggable:B,isBlock:D,autoScroll:F,layoutItem:H,isFunctionalWidget:V,selected:W,isInlineEditing:G,hasEmbeddedLayout:U,hasExtension:_}=p;if(!H)return null;const{className:Y,forbidContextMenu:X,onClick:q,onDoubleClick:Z,children:J,id:K}=p,Q=Lo(p,["className","forbidContextMenu","onClick","onDoubleClick","children","id"]),tt=H.type===e.LayoutItemType.Widget,et=H.type===e.LayoutItemType.Section,ot=!X&&!h.viewOnly&&(H.widgetId||H.sectionId)&&(!V||et),it=null!==(u=null===(d=null===(r=null===(l=H.setting)||void 0===l?void 0:l.style)||void 0===r?void 0:r.transform)||void 0===d?void 0:d.rotate)&&void 0!==u?u:0;return(0,t.jsx)(a.ViewportVisibilityContext.Provider,{value:!!ut()||R,children:(0,t.jsxs)(e.AnimationComponent,{id:K,parentId:A,parentRef:z,innerLayoutId:c.innerLayoutId,animationSetting:null==f?void 0:f[e.AnimationTriggerType.ScrollIntoView],oneByOneSetting:null==v?void 0:v[e.AnimationTriggerType.ScrollIntoView],playId:x?b:null,playMode:w,css:function(t){var o;const i=P(),n=null!==(o=c.isInlineEditing)&&void 0!==o&&o,s=e.polished.rgba(h.builderTheme.ref.palette.neutral[900],.6),l=h.builderTheme.sys.color.primary.main,r=V&&!et||W?"solid":"dashed";let d=null;return ut()||(d=(0,e.getHoverStyle)(null==I?void 0:I.type,null==I?void 0:I.setting)),e.css`
      ${d};
      position: relative;
      overflow: visible;
      cursor: ${i?"move":"default"};
      touch-action: ${n||!W?"auto":"none"};
      user-select: ${n?"auto":"none"};
      min-width: ${a.MIN_LAYOUT_ITEM_SIZE}px;
      min-height: ${a.MIN_LAYOUT_ITEM_SIZE}px;

      & > div > div.widget-context-menu {
        display: none;
      }

      &:hover > div > div.widget-context-menu {
        display: flex;
      }

      .${Et} &.functional-widget {
        pointer-events: none;
      }
      .${Et} &.functional-widget .exb-drop-area {
        pointer-events: all;
      }

      .${Et} &,
      .${Ot} & {
        > div > div.highlight-tip {
          .tip-content {
            outline-color: ${s};
          }
        }
      }

      body:not(.design-mode) &,
      body.lock-layout & {
        cursor: default;
      }

      body:not(.design-mode) & > div > div.highlight-tip {
        display: none !important;
      }

      & > div > div.highlight-tip {
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
            outline: ${D&&!W?"none":`1px ${r} ${s}`};
            display: block;
            outline-color: ${!V||et?s:"transparent"};
          }
        }
      }

      &:hover > div > div.highlight-tip,
      &.hovered > div > div.highlight-tip {
        display: block;
        .tip-content {
          &:after {
            outline-color: ${l};
          }
        }
      }

      &.functional-widget:not(.selected):hover > div > div.highlight-tip,
      &.functional-widget:not(.selected).hovered > div > div.highlight-tip {
        .tip-content {
          &:after {
            outline-width: 2px;
          }
        }
      }
    `}(it),style:o.style,ref:g,className:(0,e.classNames)("builder-layout-item exb-rnd",Y,{selected:W,"is-widget":tt,"is-section":et,"functional-widget":tt&&V,"no-drag-action":!P()}),onDoubleClick:function(t){const{layoutId:i,layoutItemId:n}=o,{supportInlineEditing:s,widgetId:a}=c;o.onDoubleClick&&o.onDoubleClick(t,{layoutId:i,layoutItemId:n});const{browserSizeMode:l,mainBrowserSizeMode:r}=c;h.viewOnly||e.utils.isExpressMode()&&(l!==r||!V)||(t.stopPropagation(),s&&(0,e.getAppStore)().dispatch(e.appActions.setWidgetIsInlineEditingState(a,!0)))},onClick:function(t){if(Math.abs(t.screenX-m)>a.CLICK_TOLERANCE||Math.abs(t.screenY-y)>a.CLICK_TOLERANCE)return void t.stopPropagation();const{viewOnly:i}=h,{browserSizeMode:n,mainBrowserSizeMode:s}=c;if(i||e.utils.isExpressMode()&&(n!==s||!V))return;t.stopPropagation();const l=new CustomEvent("click",{detail:1,bubbles:!0});if(l.composedPath=()=>t.nativeEvent.composedPath(),document.dispatchEvent(l),!qt()&&!Wt()){if(o.onClick){const{layoutId:e,layoutItemId:i}=p;o.onClick(t,{layoutId:e,layoutItemId:i})}!function(){const{layoutId:t,layoutItemId:i}=o;c.selected||(0,e.getAppStore)().dispatch(e.appActions.selectionChanged({layoutId:t,layoutItemId:i}))}()}},onMouseDown:function(t){m=t.screenX,y=t.screenY},isSection:et,"data-layoutitemid":j,"data-layoutid":A,children:[tt&&(0,t.jsx)(no,Object.assign({rotate:it,onInitDragHandler:T,onInitResizeHandler:M},Q)),et&&(0,t.jsx)(So,Object.assign({rotate:it},Q)),(ot||c.useDragHandler)&&!h.viewOnly&&!c.isInController&&function(e){const{builderTheme:i}=h;return(0,t.jsx)(ee,{builderTheme:i,layoutId:o.layoutId,layoutItem:c.layoutItem,positionType:"center",size:a.CONTEXT_MENU_ITEM_SIZE,rotate:e,iconSize:a.CONTEXT_MENU_ICON_SIZE,className:"widget-context-menu",menuItems:o.contextMenuItems||(c.useDragHandler?Ao:Po)})}(it),!h.viewOnly&&W&&(0,t.jsx)(Fe,{layoutId:A,layoutItem:H,top:$,left:N,right:k,bottom:O,resizable:E,draggable:B,selected:W,autoScroll:F,forbidToolbar:o.forbidToolbar,toolItems:o.toolItems,showDefaultTools:o.showDefaultTools,isInlineEditing:G,isFunctionalWidget:V,hasEmbeddedLayout:U,isSection:et,isBlock:D,hasExtension:tt&&_,widgetJson:c.widgetJson,widgetState:c.widgetState,rotate:it}),!h.viewOnly&&(0,t.jsx)("div",{className:"highlight-tip",children:(0,t.jsx)("div",{className:"tip-content"})}),o.children]})})}const zo=(0,e.createSelector)([(t,e)=>t.browserSizeMode,(t,e)=>t.appConfig.mainSizeMode,(t,e)=>a.utils.mapStateToLayoutItemProps(t,e),(t,e)=>{var o;return null===(o=t.appConfig.layouts[e.layoutId])||void 0===o?void 0:o.type},(t,o)=>{const i=a.searchUtils.findLayoutItem(t.appConfig,{layoutId:o.layoutId,layoutItemId:o.layoutItemId});if((null==i?void 0:i.type)===e.LayoutItemType.Widget){const i=function(t,o,i){var n;const s=t.appConfig.layouts[o].content[i];if(s.type===e.LayoutItemType.Widget){const e=t.appConfig.widgets[s.widgetId];if(null!=(null==e?void 0:e.layouts)){const o=Object.keys(e.layouts);if(1!==o.length){const i=[];return o.forEach(o=>{var n;const s=e.layouts[o];i.push(null!==(n=s[t.browserSizeMode])&&void 0!==n?n:s[t.appConfig.mainSizeMode])}),i}{const i=null==e?void 0:e.layouts[o[0]];if(i)return null!==(n=i[t.browserSizeMode])&&void 0!==n?n:i[t.appConfig.mainSizeMode]}}}return null}(t,o.layoutId,o.layoutItemId);return i}return null},(t,o)=>{const i=a.searchUtils.findLayoutItem(t.appConfig,{layoutId:o.layoutId,layoutItemId:o.layoutItemId});return(null==i?void 0:i.type)===e.LayoutItemType.Widget?a.utils.mapStateToWidgetProps(t,o):null},(t,o)=>{const i=a.searchUtils.findLayoutItem(t.appConfig,{layoutId:o.layoutId,layoutItemId:o.layoutItemId});return(null==i?void 0:i.type)===e.LayoutItemType.Section?a.searchUtils.getSectionInfo(t,i.sectionId):null},(t,o)=>{const i=a.searchUtils.findLayoutItem(t.appConfig,{layoutId:o.layoutId,layoutItemId:o.layoutItemId});if((null==i?void 0:i.type)===e.LayoutItemType.Section){const e=jt(a.searchUtils.getSectionInfo(t,i.sectionId));return t.appConfig.views[e]}return null}],(t,e,o,i,n,s,a,l)=>Object.assign(Object.assign(Object.assign({browserSizeMode:t,mainBrowserSizeMode:e,layoutType:i,innerLayoutId:n,activeView:l},o),null!=s?s:{}),null!=a?a:{}));var $o=h(914),No=h.n($o),ko=h(2717),Oo=h.n(ko),Eo=h(4072),Bo=h.n(Eo),Do=h(5477),Fo=h.n(Do),Ho=h(5108),Vo=h.n(Ho),Wo=h(2491),Go=h.n(Wo),Uo=h(9566),_o=h.n(Uo),Yo=h(3593),Xo=h.n(Yo),qo=h(8081),Zo=h.n(qo),Jo=h(8710),Ko=h.n(Jo),Qo=h(8056),ti=h.n(Qo),ei=h(3377),oi=h.n(ei),ii=h(1769),ni=h.n(ii),si=h(1291),ai=h.n(si),li=h(1855),ri=h.n(li),di=h(1334),ui=h.n(di),ci=h(7927);function pi(t,o,i){const n={};let s;if(window.jimuConfig.isBuilder){const o=document.querySelector(`iframe[name="${e.APP_FRAME_NAME_IN_BUILDER}"]`);if(o){s=(o.contentDocument||o.contentWindow.document).querySelector(`div.fixed-layout[data-layoutid=${t.id}]`)}}else s=document.querySelector(`div.fixed-layout[data-layoutid=${t.id}]`);if(!s)return t;const a=s.querySelectorAll(":scope > div.trail-container > div.exb-rnd");if((null==a?void 0:a.length)>0){a.forEach(e=>{const i=e.getAttribute("data-layoutitemid");if(t.order.includes(i)){const t=e.getBoundingClientRect();n[i]=o?{top:t.top-o.top,left:t.left-o.left,right:t.right-o.right,bottom:t.bottom-o.bottom,width:t.width,height:t.height}:t}}),i&&(n[i.layoutItemId]=i.rect);const e=[...t.order].filter(e=>t.content[e]&&!t.content[e].isPending);return e.sort((t,e)=>{const o=n[t],i=n[e];if(o.top>i.top)return 1;if(o.top<i.top)return-1;const s=O()?o.right:o.left,a=O()?i.right:i.left;return s>a?1:s<a?-1:o.width>i.width||o.height>i.height?1:o.width<i.width||o.height<i.height?-1:0}),t.set("order",e)}return t}function hi(t,i){const n=(0,o.getAppConfigAction)(),s=n.appConfig,l=a.searchUtils.findLayoutItem(s,t),r=l.bbox;let d,u=l.setting||(0,e.Immutable)({});switch(n.editLayoutItemProperty(t,"bbox",r.set(i,a.utils.isPercentage(r[i])?"0%":"0px")),u=u.setIn(["autoProps",i],!1),i){case"top":d="bottom";break;case"bottom":d="top";break;case"left":d="right";break;case"right":d="left"}if(u=u.setIn(["autoProps",d],!0),"left"===i||"right"===i?u=u.set("hCenter",!1):"top"!==i&&"bottom"!==i||(u=u.set("vCenter",!1)),n.editLayoutItemProperty(t,"setting",u),n.appConfig.useAutoSortInFixedLayout){const e=pi(n.appConfig.layouts[t.layoutId]);n.editLayoutProperty(t.layoutId,"order",e.order)}n.exec()}function gi(t,i){var n,s;const l=(0,o.getAppConfigAction)(),r=l.appConfig,d=a.searchUtils.findLayoutItem(r,t);let u=d.setting||(0,e.Immutable)({}),c=d.bbox;if("h"===i)if((null===(n=u.autoProps)||void 0===n?void 0:n.width)===a.LayoutItemSizeModes.Stretch){if(a.utils.isPercentage(c.left)!==a.utils.isPercentage(c.right))return;{const t=a.utils.isPercentage(c.left)?"%":"px",e=parseFloat(c.left)+parseFloat(c.right);c=c.set("left",`${e/2}${t}`).set("right",`${e/2}${t}`)}}else c=c.set("left","50%"),u=u.set("hCenter",!0).setIn(["autoProps","left"],!1).setIn(["autoProps","right"],!0);else if((null===(s=u.autoProps)||void 0===s?void 0:s.height)===a.LayoutItemSizeModes.Stretch){if(a.utils.isPercentage(c.top)!==a.utils.isPercentage(c.bottom))return;{const t=a.utils.isPercentage(c.top)?"%":"px",e=parseFloat(c.top)+parseFloat(c.bottom);c=c.set("top",`${e/2}${t}`).set("bottom",`${e/2}${t}`)}}else c=c.set("top","50%"),u=u.set("vCenter",!0).setIn(["autoProps","top"],!1).setIn(["autoProps","bottom"],!0);if(l.editLayoutItemProperty(t,"bbox",c).editLayoutItemProperty(t,"setting",u),l.appConfig.useAutoSortInFixedLayout){const e=pi(l.appConfig.layouts[t.layoutId]);l.editLayoutProperty(t.layoutId,"order",e.order)}l.exec()}const mi=[[{icon:Vo(),visible:()=>lt()===e.AppMode.Design&&!rt(),title:t=>t.formatMessage("align")},{icon:Go(),label:t=>t.formatMessage(a.utils.isRTL()?"snapToRight":"snapToLeft"),title:t=>t.formatMessage(a.utils.isRTL()?"snapToRight":"snapToLeft"),autoFlipIcon:!0,onClick:t=>{const{layoutItem:e,layoutId:o}=t;hi({layoutId:o,layoutItemId:e.id},"left")}},{icon:Ko(),label:t=>t.formatMessage("alignHCenter"),title:t=>t.formatMessage("alignHCenter"),disabled:t=>{var e,o;const{layoutItem:i}=t;return(null===(o=null===(e=i.setting)||void 0===e?void 0:e.autoProps)||void 0===o?void 0:o.width)===a.LayoutItemSizeModes.Stretch&&a.utils.isPercentage(i.bbox.left)!==a.utils.isPercentage(i.bbox.right)},onClick:t=>{const{layoutItem:e,layoutId:o}=t;gi({layoutId:o,layoutItemId:e.id},"h")}},{icon:_o(),label:t=>t.formatMessage(a.utils.isRTL()?"snapToLeft":"snapToRight"),title:t=>t.formatMessage(a.utils.isRTL()?"snapToLeft":"snapToRight"),autoFlipIcon:!0,onClick:t=>{const{layoutItem:e,layoutId:o}=t;hi({layoutId:o,layoutItemId:e.id},"right")}},{icon:Xo(),label:t=>t.formatMessage("snapToTop"),title:t=>t.formatMessage("snapToTop"),onClick:t=>{const{layoutItem:e,layoutId:o}=t;hi({layoutId:o,layoutItemId:e.id},"top")}},{icon:ti(),label:t=>t.formatMessage("alignVCenter"),title:t=>t.formatMessage("alignVCenter"),disabled:t=>{var e,o;const{layoutItem:i}=t;return(null===(o=null===(e=i.setting)||void 0===e?void 0:e.autoProps)||void 0===o?void 0:o.height)===a.LayoutItemSizeModes.Stretch&&a.utils.isPercentage(i.bbox.top)!==a.utils.isPercentage(i.bbox.bottom)},onClick:t=>{const{layoutItem:e,layoutId:o}=t;gi({layoutId:o,layoutItemId:e.id},"v")}},{icon:Zo(),label:t=>t.formatMessage("snapToBottom"),title:t=>t.formatMessage("snapToBottom"),onClick:t=>{const{layoutItem:e,layoutId:o}=t;hi({layoutId:o,layoutItemId:e.id},"bottom")}},{icon:Bo(),label:t=>t.formatMessage("fullWidth"),title:t=>t.formatMessage("fullWidth"),onClick:t=>{const{layoutItem:i,layoutId:n}=t;!function(t){const i=(0,o.getAppConfigAction)(),n=i.appConfig,s=a.searchUtils.findLayoutItem(n,t),l=s.bbox;let r=s.setting||(0,e.Immutable)({});if(r=r.set("hCenter",!1).setIn(["autoProps","left"],!1).setIn(["autoProps","right"],!1).setIn(["autoProps","width"],a.LayoutItemSizeModes.Stretch),i.editLayoutItemProperty(t,"bbox",l.set("left",a.utils.isPercentage(l.left)?"0%":"0px").set("right",a.utils.isPercentage(l.right)?"0%":"0px").set("width","100%")).editLayoutItemProperty(t,"setting",r),i.appConfig.useAutoSortInFixedLayout){const e=pi(i.appConfig.layouts[t.layoutId]);i.editLayoutProperty(t.layoutId,"order",e.order)}i.exec()}({layoutId:n,layoutItemId:i.id})}},{icon:Oo(),label:t=>t.formatMessage("fullHeight"),title:t=>t.formatMessage("fullHeight"),onClick:t=>{const{layoutItem:i,layoutId:n}=t;!function(t){const i=(0,o.getAppConfigAction)(),n=i.appConfig,s=a.searchUtils.findLayoutItem(n,t),l=s.bbox;let r=s.setting||(0,e.Immutable)({});if(r=r.set("vCenter",!1).setIn(["autoProps","top"],!1).setIn(["autoProps","bottom"],!1).setIn(["autoProps","height"],a.LayoutItemSizeModes.Stretch),i.editLayoutItemProperty(t,"bbox",l.set("top",a.utils.isPercentage(l.top)?"0%":"0px").set("bottom",a.utils.isPercentage(l.bottom)?"0%":"0px").set("height","100%")).editLayoutItemProperty(t,"setting",r),i.appConfig.useAutoSortInFixedLayout){const e=pi(i.appConfig.layouts[t.layoutId]);i.editLayoutProperty(t.layoutId,"order",e.order)}i.exec()}({layoutId:n,layoutItemId:i.id})}},{icon:Fo(),label:t=>t.formatMessage("fullSize"),title:t=>t.formatMessage("fullSize"),onClick:t=>{const{layoutItem:i,layoutId:n}=t;!function(t){const i=(0,o.getAppConfigAction)(),n=i.appConfig,s=a.searchUtils.findLayoutItem(n,t),l=s.bbox;let r=s.setting||(0,e.Immutable)({});if(r=r.set("vCenter",!1).set("hCenter",!1).setIn(["autoProps","top"],!1).setIn(["autoProps","bottom"],!1).setIn(["autoProps","left"],!1).setIn(["autoProps","right"],!1).setIn(["autoProps","height"],a.LayoutItemSizeModes.Stretch).setIn(["autoProps","width"],a.LayoutItemSizeModes.Stretch),i.editLayoutItemProperty(t,"bbox",l.set("top",a.utils.isPercentage(l.top)?"0%":"0px").set("bottom",a.utils.isPercentage(l.bottom)?"0%":"0px").set("left",a.utils.isPercentage(l.left)?"0%":"0px").set("right",a.utils.isPercentage(l.right)?"0%":"0px").set("width","100%").set("height","100%")).editLayoutItemProperty(t,"setting",r),i.appConfig.useAutoSortInFixedLayout){const e=pi(i.appConfig.layouts[t.layoutId]);i.editLayoutProperty(t.layoutId,"order",e.order)}i.exec()}({layoutId:n,layoutItemId:i.id})}}],[{icon:No(),visible:()=>lt()===e.AppMode.Design&&!rt(),title:t=>t.formatMessage("arrange")},{icon:oi(),label:t=>t.formatMessage("sendBackward"),title:t=>t.formatMessage("sendBackward"),onClick:t=>{const{layoutItem:e,layoutId:i}=t;!function(t){const e=(0,o.getAppConfigAction)(),i=e.appConfig,{layoutId:n,layoutItemId:s}=t,a=i.layouts[n];ci(a.order,"parent order must not be empty to alter order");const l=[].concat(a.order),r=l.indexOf(s);r<=0||(l[r]=l[r-1],l[r-1]=t.layoutItemId,e.editLayoutProperty(n,"order",l).exec())}({layoutId:i,layoutItemId:e.id})}},{icon:ni(),label:t=>t.formatMessage("bringForward"),title:t=>t.formatMessage("bringForward"),onClick:t=>{const{layoutItem:e,layoutId:i}=t;!function(t){const e=(0,o.getAppConfigAction)(),i=e.appConfig,{layoutId:n,layoutItemId:s}=t,a=i.layouts[n];ci(a.order,"parent order must not be empty to alter order");const l=[].concat(a.order),r=l.indexOf(s);r===l.length-1||r<0||(l[r]=l[r+1],l[r+1]=t.layoutItemId,e.editLayoutProperty(n,"order",l).exec())}({layoutId:i,layoutItemId:e.id})}},{icon:ai(),label:t=>t.formatMessage("sendToBack"),title:t=>t.formatMessage("sendToBack"),onClick:t=>{const{layoutItem:e,layoutId:i}=t;!function(t){const e=(0,o.getAppConfigAction)(),i=e.appConfig,{layoutId:n,layoutItemId:s}=t,a=i.layouts[n];ci(a.order,"parent order must not be empty to alter order");const l=[].concat(a.order),r=l.indexOf(s);r<=0||(l.splice(r,1),l.splice(0,0,t.layoutItemId),e.editLayoutProperty(n,"order",l).exec())}({layoutId:i,layoutItemId:e.id})}},{icon:ri(),label:t=>t.formatMessage("bringToFront"),title:t=>t.formatMessage("bringToFront"),onClick:t=>{const{layoutItem:e,layoutId:i}=t;!function(t){const e=(0,o.getAppConfigAction)(),i=e.appConfig,{layoutId:n,layoutItemId:s}=t,a=i.layouts[n];ci(a.order,"parent order must not be empty to alter order");const l=[].concat(a.order),r=l.indexOf(s);r===l.length-1||r<0||(l.splice(r,1),l.push(t.layoutItemId),e.editLayoutProperty(n,"order",l).exec())}({layoutId:i,layoutItemId:e.id})}}],{icon:t=>{var e,o;const{layoutItem:i}=t;return null!==(o=null===(e=i.setting)||void 0===e?void 0:e.lockLayout)&&void 0!==o&&o?ke():ui()},visible:()=>lt()===e.AppMode.Design&&!rt(),title:t=>{var e,o;const{layoutItem:i}=t,n=null!==(o=null===(e=i.setting)||void 0===e?void 0:e.lockLayout)&&void 0!==o&&o;return t.formatMessage(n?"unlockLayout":"lockLayout")},onClick:t=>{const{layoutItem:i,layoutId:n}=t;!function(t){const i=(0,o.getAppConfigAction)(),n=i.appConfig,s=a.searchUtils.findLayoutItem(n,t).setting||(0,e.Immutable)({});i.editLayoutItemProperty(t,"setting.lockLayout",!s.lockLayout).exec()}({layoutId:n,layoutItemId:i.id})}},{separator:!0}];function yi(t,e,o,i=!1){const n={};n.left=t.left+o.dx,n.width=t.width+o.dw;const s=e.right-t.right;0===o.dw?n.right=s-o.dx:0===o.dx?(o.dw>0&&(o.dw=Math.min(s,o.dw)),n.right=s-o.dw,n.width=t.width+o.dw):(n.right=s,o.dx<0&&(o.dx=Math.max(-t.left,o.dx),o.dw=-o.dx,n.left=t.left+o.dx,n.width=t.width+o.dw)),n.top=t.top+o.dy,n.height=t.height+o.dh;const a=e.bottom-t.bottom;return 0===o.dh?n.bottom=a-o.dy:0===o.dy?(o.dh>0&&(o.dh=Math.min(a,o.dh)),n.bottom=a-o.dh,n.height=t.height+o.dh):(n.bottom=a,o.dy<0&&(o.dy=Math.max(-t.top,o.dy),o.dh=-o.dy,n.top=t.top+o.dy,n.height=t.height+o.dh)),i&&O()?vi(n):n}function fi(t,e){var o,i,n,s,a;const l={};let r=null!==(o=null==e?void 0:e.autoProps)&&void 0!==o?o:{},d=t;const u=B("height",t,r),c=B("width",t,r);if(u===R.Stretch)l.top=d.top,l.bottom=d.bottom;else{const o=null!==(i=r.top)&&void 0!==i&&i,s=null!==(n=r.bottom)&&void 0!==n&&n;u===R.Custom&&(l.height=d.height),o!==s&&!s||null==t.top?l.bottom=d.bottom:l.top=d.top,e.vCenter&&"50%"===d.top&&(l.top="50%")}if(c===R.Stretch)l.left=d.left,l.right=d.right;else{const t=null!==(s=r.left)&&void 0!==s&&s,o=null!==(a=r.right)&&void 0!==a&&a;c===R.Custom&&(l.width=d.width),t===o?null!=d.left?l.left=d.left:l.right=d.right:t&&null!=d.right?l.right=d.right:l.left=d.left,e.hCenter&&"50%"===d.left&&(l.left="50%")}return l}function vi(t){const o=(0,e.Immutable)(t),i=t.left;return o.set("left",t.right).set("right",i)}function Ii(t,o,i,n){var s,a;let l=t,r=(0,e.Immutable)(null!=o?o:{});return(null===(s=null==o?void 0:o.autoProps)||void 0===s?void 0:s.width)!==R.Stretch&&(r=n.left<n.right?O()?r.setIn(["autoProps","right"],!1).setIn(["autoProps","left"],!0):r.setIn(["autoProps","left"],!1).setIn(["autoProps","right"],!0):O()?r.setIn(["autoProps","left"],!1).setIn(["autoProps","right"],!0):r.setIn(["autoProps","right"],!1).setIn(["autoProps","left"],!0)),(null===(a=null==o?void 0:o.autoProps)||void 0===a?void 0:a.height)!==R.Stretch&&(r=n.top<n.bottom?r.setIn(["autoProps","top"],!1).setIn(["autoProps","bottom"],!0):r.setIn(["autoProps","top"],!0).setIn(["autoProps","bottom"],!1)),["left","right","top","bottom","width","height"].forEach(e=>{const o="left"===e||"right"===e||"width"===e?i.width:i.height;let s=z(t[e]);O()&&("left"===e?s=z(t.right):"right"===e&&(s=z(t.left))),l=null==t[e]||s?l.set(e,`${(100*n[e]/o).toFixed(1)}%`):l.set(e,`${Math.round(n[e])}px`)}),{bbox:l,setting:r}}class xi extends e.React.PureComponent{constructor(){super(...arguments),this.state={},this.handleResizeEnd=(t,e,o,i,n,s)=>{const{layoutItem:a}=this.props;this.props.onResizeEnd(t,e,o,i,n,s,a,this.itemSetting)},this.handleResizing=(t,e,o,i,n,s,a)=>{this.props.onResizing(t,e,o,i,n,s,a)},this.moveUp=()=>{this.props.onMoveByKey(this.props.layoutItemId,0,-1)},this.moveDown=()=>{this.props.onMoveByKey(this.props.layoutItemId,0,1)},this.moveLeft=()=>{this.props.onMoveByKey(this.props.layoutItemId,-1,0)},this.moveRight=()=>{this.props.onMoveByKey(this.props.layoutItemId,1,0)}}getKeyboardComponent(){return this.props.isDesignMode?(0,t.jsx)(e.Keyboard,{bindings:{up:this.moveUp,down:this.moveDown,left:this.moveLeft,right:this.moveRight}}):null}getPositionStyle(){var t,o;const{layoutItem:i,offsetX:n,offsetY:s,dw:l,dh:r,initRect:d,containerRect:u}=this.props;let c=fi(i.bbox,this.itemSetting);const p=i.setting;null!=d&&(c=yi(d,u,{dw:l,dh:"ratio"===this.itemSetting.heightMode?l/a.utils.parseAspectRatio(this.itemSetting.aspectRatio):r,dx:n,dy:s},!0),(null==p?void 0:p.hCenter)&&"50%"===(null===(t=i.bbox)||void 0===t?void 0:t.left)&&(c.left="50%"),(null==p?void 0:p.vCenter)&&"50%"===(null===(o=i.bbox)||void 0===o?void 0:o.top)&&(c.top="50%"));const h=Object.assign(Object.assign({},c),function(t,e,o=!1){const i={},n=e.hCenter&&"50%"===t.left,s=e.vCenter&&"50%"===t.top,a=O()?-1:1;return n&&s?(i.right="auto",i.bottom="auto",i.transform=`translate(${-50*a}%, -50%)`):n?(i.right="auto",i.transform=`translateX(${-50*a}%)`):s&&(i.bottom="auto",i.transform="translateY(-50%)"),!o&&function(t){return"ratio"===t.heightMode&&null!=t.aspectRatio}(e)&&(i.height="auto"),i}(i.bbox,this.itemSetting,Boolean(d)));return 0===l&&0===r||(h.right="auto"),function(t){return[e.css`
      position: absolute;
      left: ${$(t,"left")};
      right: ${$(t,"right")};
      top: ${$(t,"top")};
      bottom: ${$(t,"bottom")};
      width: ${$(t,"width")};
      height: ${$(t,"height")};
    `,t.transform]}(h)}render(){const{layoutId:o,layoutItem:i,isLayoutLockChildren:n,draggable:l=!0,resizable:r=!0,showDefaultTools:d=!0}=this.props;if(null==i||i.isPending)return null;this.itemSetting=e.lodash.assign({},s,i.setting);const u=this.itemSetting.lockLayout,c=a.utils.parseAspectRatio(this.itemSetting.aspectRatio),p=a.utils.shouldUseAspectRatio(this.itemSetting),h=a.utils.getLayoutItemSizeMode("width",i.bbox,this.itemSetting.autoProps),g=a.utils.getLayoutItemSizeMode("height",i.bbox,this.itemSetting.autoProps),[m,y]=this.getPositionStyle();return(0,t.jsx)(jo,{className:"d-flex",css:m,style:{transform:y},layoutId:o,layoutItemId:i.id,restrict:this.itemSetting.lockParent||n,draggable:l&&!u,resizable:r&&!u,showDefaultTools:d,toolItems:d?mi:[],onResizeStart:this.props.onResizeStart,onResizing:this.handleResizing,onResizeEnd:this.handleResizeEnd,onClick:this.props.onClick,top:g!==a.LayoutItemSizeModes.Auto&&!p,bottom:g!==a.LayoutItemSizeModes.Auto&&!p,left:h!==a.LayoutItemSizeModes.Auto,right:h!==a.LayoutItemSizeModes.Auto,forceAspectRatio:p,aspectRatio:c,isInSection:this.props.isInSection,autoWidth:h===a.LayoutItemSizeModes.Auto,autoHeight:g===a.LayoutItemSizeModes.Auto,children:this.props.selected&&this.getKeyboardComponent()})}}const bi=(0,e.createSelector)([(t,e)=>{var o;const i=null===(o=t.appRuntimeInfo)||void 0===o?void 0:o.selection;return null!=i&&(i.layoutId===e.layoutId&&i.layoutItemId===e.layoutItemId)},t=>{var o;return(null===(o=t.appRuntimeInfo)||void 0===o?void 0:o.appMode)===e.AppMode.Design}],(t,e)=>({selected:t,isDesignMode:e})),wi=e.ReactRedux.connect(bi)(xi);function Si(t,e){var o,i,n,s;if(e.rect.top>t.rect.bottom||e.rect.bottom<t.rect.top)return!1;if(e.rect.right+5<t.rect.left&&null!=(null===(o=e.right)||void 0===o?void 0:o.value)&&null!=(null===(i=t.left)||void 0===i?void 0:i.value)){const o=e.right.usePercentage;if(o===t.left.usePercentage)return o||e.right.origin===t.left.origin}if(t.rect.right+5<e.rect.left&&null!=(null===(n=t.right)||void 0===n?void 0:n.value)&&null!=(null===(s=e.left)||void 0===s?void 0:s.value)){const o=e.left.usePercentage;if(o===t.right.usePercentage)return o||e.left.origin===t.right.origin}return!1}function Ci(t,e){var o,i,n,s;if(e.rect.left>t.rect.right||e.rect.right<t.rect.left)return!1;if(e.rect.bottom+5<t.rect.top&&null!=(null===(o=e.bottom)||void 0===o?void 0:o.value)&&null!=(null===(i=t.top)||void 0===i?void 0:i.value)){const o=e.bottom.usePercentage;if(o===t.top.usePercentage)return o||e.bottom.origin===t.top.origin}if(t.rect.bottom+5<e.rect.top&&null!=(null===(n=t.bottom)||void 0===n?void 0:n.value)&&null!=(null===(s=e.top)||void 0===s?void 0:s.value)){const o=e.top.usePercentage;if(o===t.bottom.usePercentage)return o||e.top.origin===t.bottom.origin}return!1}function Ri(t,e){let o;return e.filter(e=>{var o,i;return(null===(o=e.right)||void 0===o?void 0:o.pixelValue)<(null===(i=t.left)||void 0===i?void 0:i.pixelValue)}).sort((t,e)=>e.right.pixelValue-t.right.pixelValue).some(e=>!!Si(t,e)&&(o={value:e},!0)),null!=o&&(o.next=Ri(o.value,e)),o}function Ti(t,e){let o;return e.filter(e=>{var o,i;return(null===(o=e.left)||void 0===o?void 0:o.pixelValue)>(null===(i=t.right)||void 0===i?void 0:i.pixelValue)}).sort((t,e)=>t.left.pixelValue-e.left.pixelValue).some(e=>!!Si(t,e)&&(o={value:e},!0)),null!=o&&(o.next=Ti(o.value,e)),o}function Mi(t,e){let o;return e.filter(e=>{var o,i;return(null===(o=e.bottom)||void 0===o?void 0:o.pixelValue)<(null===(i=t.top)||void 0===i?void 0:i.pixelValue)}).sort((t,e)=>e.bottom.pixelValue-t.bottom.pixelValue).some(e=>!!Ci(t,e)&&(o={value:e},!0)),null!=o&&(o.next=Mi(o.value,e)),o}function Li(t,e){let o;return e.filter(e=>{var o,i;return(null===(o=e.top)||void 0===o?void 0:o.pixelValue)>(null===(i=t.bottom)||void 0===i?void 0:i.pixelValue)}).sort((t,e)=>t.top.pixelValue-e.top.pixelValue).some(e=>!!Ci(t,e)&&(o={value:e},!0)),null!=o&&(o.next=Li(o.value,e)),o}function Pi(t,o,i,n,s,l){const{distance:r,drawLabel:d,reverse:u}=l;if(null!=i&&null!=s){const l=Math.max(t.rect.top,o.rect.top),c=Math.min(t.rect.bottom,o.rect.bottom);i.setColor(e.polished.rgba(s.sys.color.error.light,.35));const p={left:u?o.rect.left-r:t.rect.right,top:l,width:r,height:c-l};if(i.drawRect(p),d){const d=(l+c)/2,p=t.right.usePercentage?e.utils.formatPercentageNumber(a.utils.toRatio(r,n)):e.utils.formatPixelNumber(`${r}px`);i.setColor(s.sys.color.primary.main),i.drawLine(u?o.rect.left-r:t.rect.right,d,u?o.rect.left:t.rect.right+r,d,!1,p)}}}function Ai(t,o,i,n,s,l){const{distance:r,drawLabel:d,reverse:u}=l;if(null!=i&&null!=s){const l=Math.max(t.rect.left,o.rect.left),c=Math.min(t.rect.right,o.rect.right);i.setColor(e.polished.rgba(s.sys.color.error.light,.35));const p={left:l,top:u?o.rect.top-r:t.rect.bottom,width:c-l,height:r};if(i.drawRect(p),d){const d=(l+c)/2,p=t.bottom.usePercentage?e.utils.formatPercentageNumber(a.utils.toRatio(r,n)):e.utils.formatPixelNumber(`${r}px`);i.setColor(s.sys.color.primary.main),i.drawLine(d,u?o.rect.top-r:t.rect.bottom,d,u?o.rect.top:t.rect.bottom+r,!1,p)}}}function ji(t,o,i){var n,s,l,r,d;let u=0,c=0;const{delta:p,containerWidth:h,containerHeight:g,canvasPane:m,theme:y}=i,f=0!==p.w||0!==p.h;if(!f||0!==p.w){let i=Ri(t,o);i=function(t,e){const o={id:"",right:{value:e?"0%":"0px",pixelValue:0,usePercentage:e,origin:0,from:Number.NEGATIVE_INFINITY,to:Number.POSITIVE_INFINITY},rect:{left:-100,width:100,right:0,top:Number.NEGATIVE_INFINITY,bottom:Number.POSITIVE_INFINITY}};if(null==t)return{value:o};let i=t;for(;null!=i.next;)i=i.next;return i.next={value:o},t}(i,null==(null===(n=t.left)||void 0===n?void 0:n.value)||(null===(s=t.left)||void 0===s?void 0:s.usePercentage));let r=Ti(t,o);r=function(t,e,o){const i={id:"",left:{value:e?"0%":"0px",pixelValue:o,usePercentage:e,origin:1,from:Number.NEGATIVE_INFINITY,to:Number.POSITIVE_INFINITY},rect:{left:o,width:100,right:o+100,top:Number.NEGATIVE_INFINITY,bottom:Number.POSITIVE_INFINITY}};if(null==t)return{value:i};let n=t;for(;null!=n.next;)n=n.next;return n.next={value:i},t}(r,null==(null===(l=t.right)||void 0===l?void 0:l.value)||t.right.usePercentage,h),u=function(t,e,o,i,n,s){if(e.gridline.rect.top===Number.NEGATIVE_INFINITY&&o.gridline.rect.top===Number.NEGATIVE_INFINITY||null==t.left||null==t.right)return 0;const a=t.left.pixelValue-e.gridline.right.pixelValue,l=o.gridline.left.pixelValue-t.right.pixelValue,r=e.fixed||o.fixed?5:10;if(Math.abs(l-a)<r){let r,d;return r=e.fixed||o.fixed?l-a:(l-a)/2,d=e.fixed?a:o.fixed?l:a+r,Pi(e.gridline,t,i,n,s,{distance:d,drawLabel:!1,reverse:!1}),Pi(t,o.gridline,i,n,s,{distance:d,drawLabel:!1,reverse:!0}),r}return 0}(t,{gridline:i.value,fixed:0!==p.w&&0===p.x},{gridline:r.value,fixed:0!==p.w&&0!==p.x},m,h,y),0!==u||0!==p.w&&0===p.x||(u=function(t,e,o,i,n){if(null==(null==e?void 0:e.next))return 0;const s=t.rect.left-e.value.rect.right;let a=e,l=-1;for(;null!=a.next;){const t=a.next,e=a.value.rect.left-t.value.rect.right;-1===l?Math.abs(e-s)<=5&&(l=e,Pi(t.value,a.value,o,i,n,{distance:l,drawLabel:!0,reverse:!1})):e===l&&Pi(t.value,a.value,o,i,n,{distance:l,drawLabel:!0,reverse:!1}),a=t}if(l>0){const a=l-s;return Pi(e.value,t,o,i,n,{distance:l,drawLabel:!1,reverse:!1}),a}return 0}(t,i,m,h,y)),0!==u||0!==p.w&&0!==p.x||(u=function(t,e,o,i,n){if(null==(null==e?void 0:e.next))return 0;const s=e.value.rect.left-t.rect.right;let a=e,l=-1;for(;null!=a.next;){const t=a.next,e=t.value.rect.left-a.value.rect.right;-1===l?Math.abs(e-s)<=5&&(l=e,Pi(a.value,t.value,o,i,n,{distance:l,drawLabel:!0,reverse:!0})):e===l&&Pi(a.value,t.value,o,i,n,{distance:l,drawLabel:!0,reverse:!0}),a=t}if(l>0){const a=s-l;return Pi(t,e.value,o,i,n,{distance:l,drawLabel:!1,reverse:!0}),a}return 0}(t,r,m,h,y)),function(t,o,i,n,s,l){var r;const{isResizing:d,dx:u,containerWidth:c}=l;if(null!=n&&null!=s){n.setColor(s.sys.color.primary.main);let l=(null===(r=o.gridline)||void 0===r?void 0:r.rect.top)===Number.NEGATIVE_INFINITY;const p=o.gridline.rect;if(null!=p&&null!=t.left&&(!l||d&&!o.fixed)){const i=(Math.max(t.rect.top,p.top)+Math.min(t.rect.bottom,p.bottom))/2,s=t.left.usePercentage;let l=t.rect.left-p.right;o.fixed||(l+=u);const r=s?e.utils.formatPercentageNumber(a.utils.toRatio(l,c)):e.utils.formatPixelNumber(`${l}px`);n.drawLine(p.right,i,p.right+l,i,!1,r)}l=i.gridline.rect.top===Number.NEGATIVE_INFINITY;const h=i.gridline.rect;if(null!=h&&null!=t.right&&(!l||d&&!i.fixed)){const o=(Math.max(t.rect.top,h.top)+Math.min(t.rect.bottom,h.bottom))/2,s=t.right.usePercentage;let l=h.left-t.rect.right;i.fixed||(l-=u);const r=s?e.utils.formatPercentageNumber(a.utils.toRatio(l,c)):e.utils.formatPixelNumber(`${l}px`);n.drawLine(h.left,o,h.left-l,o,!1,r)}}}(t,{gridline:i.value,fixed:0!==p.w&&0===p.x},{gridline:r.value,fixed:0!==p.w&&0!==p.x},m,y,{isResizing:0!==p.w,dx:u,containerWidth:h})}if(!f||0!==p.h){let i=Mi(t,o);i=function(t,e){const o={id:"",bottom:{value:e?"0%":"0px",pixelValue:0,usePercentage:e,origin:0,from:Number.NEGATIVE_INFINITY,to:Number.POSITIVE_INFINITY},rect:{top:-100,height:100,bottom:0,left:Number.NEGATIVE_INFINITY,right:Number.POSITIVE_INFINITY}};if(null==t)return{value:o};let i=t;for(;null!=i.next;)i=i.next;return i.next={value:o},t}(i,null==(null===(r=t.top)||void 0===r?void 0:r.value)||t.top.usePercentage);let n=Li(t,o);n=function(t,e,o){const i={id:"",top:{value:e?"0%":"0px",pixelValue:o,usePercentage:e,origin:1,from:Number.NEGATIVE_INFINITY,to:Number.POSITIVE_INFINITY},rect:{top:o,height:100,bottom:o+100,left:Number.NEGATIVE_INFINITY,right:Number.POSITIVE_INFINITY}};if(null==t)return{value:i};let n=t;for(;null!=n.next;)n=n.next;return n.next={value:i},t}(n,null==(null===(d=t.bottom)||void 0===d?void 0:d.value)||t.bottom.usePercentage,g),c=function(t,e,o,i,n,s){if(e.gridline.rect.left===Number.NEGATIVE_INFINITY&&o.gridline.rect.left===Number.NEGATIVE_INFINITY||null==t.top||null==t.bottom)return 0;const a=t.top.pixelValue-e.gridline.bottom.pixelValue,l=o.gridline.top.pixelValue-t.bottom.pixelValue,r=e.fixed||o.fixed?5:10;if(Math.abs(l-a)<r){let r,d;return r=e.fixed||o.fixed?l-a:(l-a)/2,d=e.fixed?a:o.fixed?l:a+r,Ai(e.gridline,t,i,n,s,{distance:d,drawLabel:!1,reverse:!1}),Ai(t,o.gridline,i,n,s,{distance:d,drawLabel:!1,reverse:!0}),r}return 0}(t,{gridline:i.value,fixed:0!==p.h&&0===p.y},{gridline:n.value,fixed:0!==p.h&&0!==p.y},m,g,y),0!==c||0!==p.h&&0===p.y||(c=function(t,e,o,i,n){if(null==(null==e?void 0:e.next))return 0;const s=t.rect.top-e.value.rect.bottom;let a=e,l=-1;for(;null!=a.next;){const t=a.next,e=a.value.rect.top-t.value.rect.bottom;-1===l?Math.abs(e-s)<=5&&(l=e,Ai(t.value,a.value,o,i,n,{distance:l,drawLabel:!0,reverse:!1})):e===l&&Ai(t.value,a.value,o,i,n,{distance:l,drawLabel:!0,reverse:!1}),a=t}if(l>0){const a=l-s;return Ai(e.value,t,o,i,n,{distance:l,drawLabel:!1,reverse:!1}),a}return 0}(t,i,m,g,y)),0!==c||0!==p.h&&0!==p.y||(c=function(t,e,o,i,n){if(null==(null==e?void 0:e.next))return 0;const s=e.value.rect.top-t.rect.bottom;let a=e,l=-1;for(;null!=a.next;){const t=a.next,e=t.value.rect.top-a.value.rect.bottom;-1===l?Math.abs(e-s)<=5&&(l=e,Ai(a.value,t.value,o,i,n,{distance:l,drawLabel:!0,reverse:!0})):e===l&&Ai(a.value,t.value,o,i,n,{distance:l,drawLabel:!0,reverse:!0}),a=t}if(l>0){const a=s-l;return Ai(t,e.value,o,i,n,{distance:l,drawLabel:!1,reverse:!0}),a}return 0}(t,n,m,g,y)),function(t,o,i,n,s,l){const{isResizing:r,dy:d,containerHeight:u}=l;if(null!=n&&null!=s){n.setColor(s.sys.color.primary.main);let l=o.gridline.rect.left===Number.NEGATIVE_INFINITY;const c=o.gridline.rect;if(null!=c&&null!=t.top&&(!l||r&&!o.fixed)){const i=(Math.max(t.rect.left,c.left)+Math.min(t.rect.right,c.right))/2,s=t.top.usePercentage;let l=t.rect.top-c.bottom;o.fixed||(l+=d);const r=s?e.utils.formatPercentageNumber(a.utils.toRatio(l,u)):e.utils.formatPixelNumber(`${l}px`);n.drawLine(i,c.bottom,i,c.bottom+l,!1,r)}l=i.gridline.rect.left===Number.NEGATIVE_INFINITY;const p=i.gridline.rect;if(null!=p&&null!=t.bottom&&(!l||r&&!i.fixed)){const o=(Math.max(t.rect.left,p.left)+Math.min(t.rect.right,p.right))/2,s=t.bottom.usePercentage;let l=p.top-t.rect.bottom;i.fixed||(l-=d);const r=s?e.utils.formatPercentageNumber(a.utils.toRatio(l,u)):e.utils.formatPixelNumber(`${l}px`);n.drawLine(o,p.top,o,p.top-l,!1,r)}}}(t,{gridline:null==i?void 0:i.value,fixed:0!==p.h&&0===p.y},{gridline:null==n?void 0:n.value,fixed:0!==p.y&&0!==p.y},m,y,{isResizing:0!==p.h,dy:c,containerHeight:g})}return{dx:u,dy:c}}function zi(t,e){return Math.abs(e.pixelValue-t.pixelValue)}function $i(t,e,o){if(t.pixelValue+e===o.pixelValue){const e=o.usePercentage;if(e===t.usePercentage)return e||o.origin===t.origin}return!1}function Ni(t,e){return e.filter(e=>function(t,e){if(zi(e,t)<20){const o=e.usePercentage;if(o===t.usePercentage)return o||e.origin===t.origin}return!1}(t,e)).sort((e,o)=>zi(e,t)-zi(o,t))}function ki(t,e,o,i){let n=0,s=0;const{canSnapToX:a,canSnapToY:l,canvasPane:r,theme:d}=i;if(!a&&!l)return{dx:n,dy:s};let u=[],c=[];if(e.forEach(e=>{if(a){const i=[e.left,e.xm,e.right].filter(i=>{var n,s,a;return null!=i&&(i.from=null!==(n=e.rect.top)&&void 0!==n?n:e.rect.bottom,i.to=e.rect.top>=0&&e.rect.bottom>=0?e.rect.bottom:t.rect.top,0!==o.w?0===o.x?i.pixelValue>=(null===(s=t.right)||void 0===s?void 0:s.pixelValue):i.pixelValue<=(null===(a=t.left)||void 0===a?void 0:a.pixelValue):0===o.h)});u=u.concat(i)}if(l){const i=[e.top,e.ym,e.bottom].filter(i=>{var n,s,a;return null!=i&&(i.from=null!==(n=e.rect.left)&&void 0!==n?n:e.rect.right,i.to=e.rect.left>=0&&e.rect.right>=0?e.rect.right:t.rect.left,0!==o.h?0===o.y?i.pixelValue>=(null===(s=t.bottom)||void 0===s?void 0:s.pixelValue):i.pixelValue<=(null===(a=t.top)||void 0===a?void 0:a.pixelValue):0===o.w)});c=c.concat(i)}}),a){const e=[t.left,t.xm,t.right];e.some(t=>{if(null!=t){const o=Ni(t,u);if((null==o?void 0:o.length)>0){null!=r&&null!=d&&o.forEach(t=>{!function(t,e,o){null!=e&&null!=o&&(e.setColor(o.sys.color.error.main),e.drawLine(t.pixelValue,t.from,t.pixelValue,t.to,!0))}(t,r,d)});const i=o[0];if(zi(i,t)<=5)return n=i.pixelValue-t.pixelValue,function(t,e,o,i,n){null!=i&&null!=n&&(i.setColor(n.sys.color.error.main),t.forEach(t=>{if(null!=t){let n=t.from,s=t.to,a=!1;if(e.forEach(e=>{$i(t,o,e)&&(n=Math.min(n,e.from),s=Math.max(s,e.to),a=!0)}),a){const e=t.pixelValue+o;i.drawLine(e,n,e,s)}}}))}(e,u,n,r,d),!0}}})}if(l){const e=[t.top,t.ym,t.bottom];e.some(t=>{if(null!=t){const o=Ni(t,c);if((null==o?void 0:o.length)>0){null!=r&&null!=d&&o.forEach(t=>{!function(t,e,o){null!=e&&null!=o&&(e.setColor(o.sys.color.error.main),e.drawLine(t.from,t.pixelValue,t.to,t.pixelValue,!0))}(t,r,d)});const i=o[0];if(zi(i,t)<=5)return s=i.pixelValue-t.pixelValue,function(t,e,o,i,n){null!=i&&null!=n&&(i.setColor(n.sys.color.error.main),t.forEach(t=>{if(null!=t){let n=t.from,s=t.to,a=!1;if(e.forEach(e=>{$i(t,o,e)&&(n=Math.min(n,e.from),s=Math.max(s,e.to),a=!0)}),a){const e=t.pixelValue+o;i.drawLine(n,e,s,e)}}}))}(e,c,s,r,d),!0}}})}return{dx:n,dy:s}}var Oi;function Ei(t,e=!1){const o={};if(["left","right","width","top","bottom","height"].forEach(e=>{null!=(null==t?void 0:t[e])?o[e]=a.utils.isPercentage(t[e])?"%":"px":o[e]="%"}),e){const t=o.left;o.left=o.right,o.right=t}return o}function Bi(t,e){const o=t.top,i=e.height-(t.top+t.height),n=t.left;return[e.width-(t.left+t.width)<n?1:0,i<o?1:0]}function Di(t,e){return a.utils.isPercentage(t)?Math.round(a.utils.fromRatio(t,e)):Math.round(parseFloat(t))}function Fi(t,e,o){var i,n,s,l,r,d,u,c,p;const h=t.bbox,g=Ei(h,O()),m=null!==(i=t.setting)&&void 0!==i?i:{},y=function(t,e,o){var i,n,s;const l={},r=null!==(i=t.bbox)&&void 0!==i?i:{},d=null!==(s=null===(n=t.setting)||void 0===n?void 0:n.autoProps)&&void 0!==s?s:{};return d.width===a.LayoutItemSizeModes.Stretch?(l.left=Di(r.left,e),l.right=e-Di(r.right,e),l.width=l.right-l.left):d.width===a.LayoutItemSizeModes.Auto?d.left?l.right=e-Di(r.right,e):l.left=Di(r.left,e):(l.width=Di(r.width,e),d.left?(l.right=e-Di(r.right,e),l.left=l.right-l.width):(l.left=Di(r.left,e),l.right=l.left+l.width)),d.height===a.LayoutItemSizeModes.Stretch?(l.top=Di(r.top,o),l.bottom=o-Di(r.bottom,o),l.height=l.bottom-l.top):d.height===a.LayoutItemSizeModes.Auto?d.top?l.bottom=o-Di(r.bottom,o):l.top=Di(r.top,o):(l.height=Di(r.height,o),d.top?(l.bottom=o-Di(r.bottom,o),l.top=l.bottom-l.height):(l.top=Di(r.top,o),l.bottom=l.top+l.height)),l}(t,e,o),f={id:t.id,rect:y},v=t=>a.utils.isPercentage(t)?100-parseFloat(t)+"%":t,I=t=>a.utils.isPercentage(t)?100-parseFloat(t)+"%":e-parseFloat(t)+"px",x={value:h.left,pixelValue:y.left,usePercentage:"%"===g.left,origin:0},b={value:h.top,pixelValue:y.top,usePercentage:"%"===g.top,origin:0},w={value:v(h.right),pixelValue:y.right,usePercentage:"%"===g.right,origin:1},S={value:v(h.bottom),pixelValue:y.bottom,usePercentage:"%"===g.bottom,origin:1};if((null===(n=m.autoProps)||void 0===n?void 0:n.width)===a.LayoutItemSizeModes.Stretch)f.left=x,f.right=w,g.left===g.right&&"%"===g.left&&(f.xm={value:(parseFloat(f.left.value)+parseFloat(f.right.value))/2+"%",pixelValue:(y.left+y.right)/2,usePercentage:"%"===g.left});else if((null===(s=m.autoProps)||void 0===s?void 0:s.width)===a.LayoutItemSizeModes.Auto)(null===(l=m.autoProps)||void 0===l?void 0:l.left)?f.right=w:f.left=x;else if(null===(r=m.autoProps)||void 0===r?void 0:r.left){if(f.right=w,g.right===g.width){const t=parseFloat(h.right),e=parseFloat(h.width),o="px"===g.right?t+e:100-(t+e),i="px"===g.right?t+e/2:100-(t+e/2);f.left={value:`${o}${g.right}`,pixelValue:y.left,usePercentage:"%"===g.right,origin:1},f.xm={value:`${i}${g.right}`,pixelValue:y.left+y.width/2,usePercentage:"%"===g.right,origin:1}}}else if(f.left=x,g.left===g.width){const t=parseFloat(h.left),e=parseFloat(h.width),o=t+e;f.right={value:`${o}${g.left}`,pixelValue:y.right,usePercentage:"%"===g.left,origin:0},f.xm={value:`${t+e/2}${g.left}`,pixelValue:y.left+y.width/2,usePercentage:"%"===g.left,origin:0}}if(O()){let t,o,i;f.rect.left=e-f.rect.right,f.rect.right=f.rect.left+f.rect.width,null!=f.left&&(o={value:I(f.left.value),pixelValue:f.rect.right,usePercentage:"%"===g.left,origin:0===f.left.origin?1:0}),null!=f.right&&(t={value:I(f.right.value),pixelValue:f.rect.left,usePercentage:"%"===g.right,origin:0===f.right.origin?1:0}),null!=f.xm&&(i={value:I(f.xm.value),pixelValue:f.rect.left+f.rect.width/2,usePercentage:f.xm.usePercentage,origin:0===f.xm.origin?1:0}),f.right=o,f.left=t,f.xm=i}if((null===(d=m.autoProps)||void 0===d?void 0:d.height)===a.LayoutItemSizeModes.Stretch)f.top=b,f.bottom=S,g.top===g.bottom&&"%"===g.top&&(f.ym={value:(parseFloat(f.top.value)+parseFloat(f.bottom.value))/2+"%",pixelValue:(y.top+y.bottom)/2,usePercentage:"%"===g.top});else if((null===(u=m.autoProps)||void 0===u?void 0:u.height)===a.LayoutItemSizeModes.Auto)(null===(c=m.autoProps)||void 0===c?void 0:c.top)?f.bottom=S:f.top=b;else if(null===(p=m.autoProps)||void 0===p?void 0:p.top){if(f.bottom=S,g.bottom===g.height){const t=parseFloat(h.bottom),e=parseFloat(h.height),o="px"===g.bottom?t+e:100-(t+e),i="px"===g.bottom?t+e/2:100-(t+e/2);f.top={value:`${o}${g.bottom}`,pixelValue:y.top,usePercentage:"%"===g.bottom,origin:1},f.ym={value:`${i}${g.bottom}`,pixelValue:y.top+y.height/2,usePercentage:"%"===g.bottom,origin:1}}}else if(f.top=b,g.top===g.height){const t=parseFloat(h.top),e=parseFloat(h.height),o=t+e;f.bottom={value:`${o}${g.top}`,pixelValue:y.bottom,usePercentage:"%"===g.top,origin:0},f.ym={value:`${t+e/2}${g.top}`,pixelValue:y.top+y.height/2,usePercentage:"%"===g.top,origin:0}}return f}function Hi(t,e,o,i){var n;const s=[];Object.keys(null!==(n=t.content)&&void 0!==n?n:{}).forEach(n=>{if(n!==i){const i=t.content[n];if(!i.isPending){const t=Fi(i,e,o);s.push(t)}}});const a={left:0,right:e,width:e,top:0,bottom:o,height:o};return s.push({id:"",left:{value:"0px",pixelValue:0,usePercentage:!1,origin:0,from:0,to:o},right:{value:"0px",pixelValue:e,usePercentage:!1,origin:1,from:0,to:o},top:{value:"0px",pixelValue:0,origin:0,usePercentage:!1,from:0,to:e},bottom:{value:"0px",pixelValue:o,usePercentage:!1,origin:1,from:0,to:e},rect:a}),s.push({id:"",left:{value:"0%",pixelValue:0,usePercentage:!0,origin:0,from:0,to:o},xm:{value:"50%",pixelValue:Math.round(e/2),usePercentage:!0,origin:0,from:0,to:o},right:{value:"0%",pixelValue:e,usePercentage:!0,origin:1,from:0,to:o},top:{value:"0%",pixelValue:0,usePercentage:!0,origin:0,from:0,to:e},ym:{value:"50%",pixelValue:Math.round(o/2),usePercentage:!0,origin:0,from:0,to:e},bottom:{value:"0%",pixelValue:o,usePercentage:!0,origin:1,from:0,to:e},rect:a}),s}function Vi(t,e,o,i,n){var s,l;const{delta:r,shiftKey:d,canvasPane:u,theme:c}=n,p=null!==(s=null==t?void 0:t.setting)&&void 0!==s?s:{},h=null!==(l=null==t?void 0:t.bbox)&&void 0!==l?l:{},g=0!==r.w||0!==r.h;if(g&&(p.hCenter&&"50%"===h.left||p.vCenter&&"50%"===h.top))return r;let m=function(t,e){if(0!==e.w||0!==e.h){const o={x:e.x,y:e.y,w:e.w,h:e.h};return t.width+e.w<16&&(o.w=16-t.width,0!==e.x&&(o.x=-o.w)),t.height+e.h<16&&(o.h=16-t.height,0!==e.y&&(o.y=-o.h)),o}return e}(o,r);d&&(m=function(t,e){if(0===e.w&&0===e.h)return e;const o=t.height/t.width;let i=e.w,n=e.h,s=e.x,a=e.y;Math.abs(i)*o>Math.abs(n)?n=Math.round(i*o):i=Math.round(n/o);0!==s&&(s=-i);0!==a&&(a=-n);return{x:s,y:a,w:i,h:n}}(o,m));const y=function(t,e,o,i,n){var s,l,r,d,u,c,p;const{x:h,y:g,w:m,h:y}=null!=n?n:{x:0,y:0,w:0,h:0},f=null!==(s=null==t?void 0:t.setting)&&void 0!==s?s:{},v={left:Math.round(e.left+h),width:Math.round(e.width+m),right:0,top:Math.round(e.top+g),height:Math.round(e.height+y),bottom:0};v.right=v.left+v.width,v.bottom=v.top+v.height;const I={id:null==t?void 0:t.id,rect:v},x=Bi(v,{width:o,height:i}),b=Ei(null==t?void 0:t.bbox,O());if(O()){const t=b.left;b.left=b.right,b.right=t}return(null===(l=f.autoProps)||void 0===l?void 0:l.width)===a.LayoutItemSizeModes.Stretch?(I.left={value:`1${b.left}`,pixelValue:v.left,usePercentage:"%"===b.left,origin:x[0],from:v.top,to:v.bottom},I.right={value:`1${b.right}`,pixelValue:v.left+v.width,usePercentage:"%"===b.right,origin:x[1],from:v.top,to:v.bottom}):0===x[0]?(I.left={value:`1${b.left}`,pixelValue:v.left,usePercentage:"%"===b.left,origin:x[0],from:v.top,to:v.bottom},b.width===b.left&&(null===(r=f.autoProps)||void 0===r?void 0:r.width)!==a.LayoutItemSizeModes.Auto&&(I.xm={value:`1${b.left}`,pixelValue:v.left+v.width/2,usePercentage:"%"===b.left,origin:x[0],from:v.top,to:v.bottom},I.right={value:`1${b.left}`,pixelValue:v.left+v.width,usePercentage:"%"===b.left,origin:x[0],from:v.top,to:v.bottom})):(I.right={value:`1${b.right}`,pixelValue:v.left+v.width,usePercentage:"%"===b.right,origin:x[0],from:v.top,to:v.bottom},b.width===b.right&&(null===(d=f.autoProps)||void 0===d?void 0:d.width)!==a.LayoutItemSizeModes.Auto&&(I.xm={value:`1${b.right}`,pixelValue:v.left+v.width/2,usePercentage:"%"===b.right,origin:x[0],from:v.top,to:v.bottom},I.left={value:`1${b.right}`,pixelValue:v.left,usePercentage:"%"===b.right,origin:x[0],from:v.top,to:v.bottom})),(null===(u=f.autoProps)||void 0===u?void 0:u.height)===a.LayoutItemSizeModes.Stretch?(I.top={value:`1${b.top}`,pixelValue:v.top,usePercentage:"%"===b.top,origin:x[1],from:v.left,to:v.right},I.bottom={value:`1${b.bottom}`,pixelValue:v.top+v.height,usePercentage:"%"===b.bottom,origin:x[1],from:v.left,to:v.right}):0===x[1]?(I.top={value:`1${b.top}`,pixelValue:v.top,usePercentage:"%"===b.top,origin:x[1],from:v.left,to:v.right},b.height===b.top&&(null===(c=f.autoProps)||void 0===c?void 0:c.height)!==a.LayoutItemSizeModes.Auto&&(I.ym={value:`1${b.top}`,pixelValue:v.top+v.height/2,usePercentage:"%"===b.top,origin:x[1],from:v.left,to:v.right},I.bottom={value:`1${b.top}`,pixelValue:v.top+v.height,usePercentage:"%"===b.top,origin:x[1],from:v.left,to:v.right})):(I.bottom={value:`1${b.bottom}`,pixelValue:v.top+v.height,usePercentage:"%"===b.bottom,origin:x[1],from:v.left,to:v.right},b.height===b.bottom&&(null===(p=f.autoProps)||void 0===p?void 0:p.height)!==a.LayoutItemSizeModes.Auto&&(I.ym={value:`1${b.bottom}`,pixelValue:v.top+v.height/2,usePercentage:"%"===b.bottom,origin:x[1],from:v.left,to:v.right},I.top={value:`1${b.bottom}`,pixelValue:v.top,usePercentage:"%"===b.bottom,origin:x[1],from:v.left,to:v.right})),I}(t,o,e.width,e.height,m);let{dx:f,dy:v}=ji(y,i,{delta:m,containerWidth:e.width,containerHeight:e.height,canvasPane:u,theme:c});const I=ki(y,i,m,{canSnapToX:0===f&&(!g||0!==r.w),canSnapToY:0===v&&(!g||0!==r.h),canvasPane:u,theme:c});f=0!==f?f:I.dx,v=0!==v?v:I.dy;let x=m;return 0===f&&0===v||(x=function(t,e,o){let i,n,{x:s,y:a,w:l,h:r}=t;i=0===l?Oi.None:0===s?Oi.Start:Oi.End;n=0===r?Oi.None:0===a?Oi.Start:Oi.End;0!==e&&(i===Oi.None?s+=e:i===Oi.End?(s+=e,l+=-e):l+=e);0!==o&&(n===Oi.None?a+=o:n===Oi.End?(a+=o,r+=-o):r+=o);return{x:s,y:a,w:l,h:r}}(m,f,v)),x}!function(t){t[t.Start=0]="Start",t[t.End=1]="End",t[t.None=2]="None"}(Oi||(Oi={}));var Wi=h(6884),Gi=h(63),Ui=h.n(Gi),_i=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const Yi=o=>{const i=window.SVG,{className:n}=o,s=_i(o,["className"]),a=(0,e.classNames)("jimu-icon jimu-icon-component",n);return i?(0,t.jsx)(i,Object.assign({className:a,src:Ui()},s)):(0,t.jsx)("svg",Object.assign({className:a},s))},Xi=e.css`
  pointer-events: all;
`;function qi(t,o){return e.css`
    position: relative;
    container-type: size;
    container-name: large small;
    @container large (height > 100px) {
      .action-block-content {
        display: flex;
        flex-direction: column;
        justify-content: ${o?"center":"flex-start"};
        padding-top: ${o?0:"50px"};
        align-items: center;
        .action-separator { 
          width: 300px;
          height: 1px;
          margin: 1rem 0 0.5rem;
        }
        .btn-text {
          font-size: 1rem;
          font-weight: 500;
          line-height: 32px;
        }
        .action-item {
          width: 32px;
        }
      }
    }
    @container small (max-height: 100px) {
      .action-block-content {
        display: flex;
        justify-content: center;
        align-items: center;
        .action-separator {
          width: 1px;
          height: min(3rem, 32cqh);
          margin: 0 1rem;
        }
        .icon-btn-sizer {
          min-width: min(22px, 22cqh);
          min-height: min(22px, 22cqh);
        }
        .jimu-svg {
          width: min(1rem, 16cqh);
          height: min(1rem, 16cqh);
        }
        .btn-text { font-size: min(1rem, 32cqh); margin-bottom: 0 !important; }
      }
    }
    pointer-events: none;
    z-index: 1;
    .btn {
      background: ${t.ref.palette.neutral[600]};
      &:hover {
        background: ${t.ref.palette.neutral[700]};
      }
    }
    .btn-text { user-select: none; }
    .action-separator {
      background-color: ${t.ref.palette.neutral[1100]};
    }
  `}function Zi(n){const{pageContext:s,onPageTemplateSelected:a}=n,{builderTheme:l,formatMessage:r,isHeader:d,isFooter:u}=s,[c,p]=e.React.useState(!1),h=e.React.useRef(null),g=e.ReactRedux.useSelector(t=>{var o,i,n;const s=null!==(n=null===(i=null===(o=t.appConfig)||void 0===o?void 0:o.forBuilderAttributes)||void 0===i?void 0:i.lockLayout)&&void 0!==n&&n;return t.appRuntimeInfo.appMode===e.AppMode.Design&&!s}),m=()=>{p(!1)};let y;return y=s.isHeader?r("chooseHeaderTemplate"):s.isFooter?r("chooseFooterTemplate"):r("chooseTemplate",{type:s.isDialog?r("dialog").toLocaleLowerCase():r("page").toLocaleLowerCase()}),g?(0,t.jsxs)("div",{className:"d-flex w-100 h-100 justify-content-center",css:qi(l,s.isHeader||s.isFooter),children:[(0,t.jsxs)("div",{className:"action-block-content",children:[(0,t.jsx)(Je,{placement:"bottom",title:y,children:(0,t.jsx)("div",{className:"action-item",ref:h,children:(0,t.jsx)(i.Button,{icon:!0,onClick:t=>{if(t.stopPropagation(),(0,e.getAppStore)().getState().browserSizeMode!==e.BrowserSizeMode.Small)p(!c);else if(s.isDialog)o.appBuilderSync.publishSidePanelToApp({type:"templateBlock",templateMethod:"getWindowTemplates",onSelect:a});else{const t=d?"getHeaderTemplates":u?"getFooterTemplates":"getFullScreenPageTemplates",e="getFullScreenPageTemplates"===t?"template":"templateBlock";o.appBuilderSync.publishSidePanelToApp({type:e,templateMethod:t,onSelect:a})}},css:Xi,className:"rounded-circle",children:(0,t.jsx)(Yi,{autoFlip:!0,size:"m",color:l.ref.palette.neutral[1100]})})})}),(0,t.jsx)("div",{className:"action-separator"}),(0,t.jsx)("h5",{className:"btn-text",children:r("dropWidgetToAdd")})]}),c&&!s.isDialog&&(0,t.jsx)(Ve.TemplateSelector,{templates:d?(0,Wi.getHeaderTemplates)():u?(0,Wi.getFooterTemplates)():(0,Wi.getFullScreenPageTemplates)(!1),referenceElement:h.current,onItemSelect:a,onClose:m}),c&&s.isDialog&&(0,t.jsx)(Ve.TemplateSelector,{templates:(0,Wi.getWindowTemplates)(!1),referenceElement:h.current,onItemSelect:a,onClose:m})]}):null}class Ji{constructor(t,e){this.canvas=t,this.ctx=t.getContext("2d"),this.ctx.font="1rem",this.theme=e}setSize(t,e,o=1){const i=Math.round(e*o),n=Math.round(t*o);o<1?(this.canvas.style.width=`${t}px`,this.canvas.style.height=`${e}px`,this.canvas.width=t,this.canvas.height=e,this.ctx.scale(1,1)):this.canvas.width===n&&this.canvas.height===i||(this.canvas.style.width=`${t}px`,this.canvas.style.height=`${e}px`,this.canvas.width=n,this.canvas.height=i,this.ctx.scale(o,o))}setColor(t){this.ctx.fillStyle=t,this.ctx.strokeStyle=t}drawRect(t){this.ctx.fillRect(t.left,t.top,t.width,t.height)}drawLine(t,e,o,i,n=!1,s){if(n?this.ctx.setLineDash([5,3]):this.ctx.setLineDash([]),this.ctx.beginPath(),t===o){let n=t<this.canvas.width/2?.5:-.5;n=Number.isInteger(t)?n:0,this.ctx.moveTo(t+n,e),this.ctx.lineTo(o+n,i)}if(e===i){let n=e<this.canvas.height/2?.5:-.5;n=Number.isInteger(e)?n:0,this.ctx.moveTo(t,e+n),this.ctx.lineTo(o,i+n)}if(this.ctx.stroke(),null!=s){const n=(t+o)/2,a=(e+i)/2;this.drawLabel(n,a,s,e===i)}}drawTailedLine(t,e,o,i,n=!1,s){if(n?this.ctx.setLineDash([5,3]):this.ctx.setLineDash([]),this.ctx.beginPath(),t===o){let n=t<this.canvas.width/2?.5:-.5;n=Number.isInteger(t)?n:0;const s=Math.min(e,i);let a=s<this.canvas.height/2?.5:-.5;a=Number.isInteger(s)?a:0;const l=Math.max(e,i);let r=l<this.canvas.height/2?.5:-.5;r=Number.isInteger(l)?r:0,this.ctx.moveTo(t+n,e),this.ctx.lineTo(o+n,i),this.ctx.moveTo(t-5,s+a),this.ctx.lineTo(t+5,s+a),this.ctx.moveTo(o-5,l+r),this.ctx.lineTo(o+5,l+r)}if(e===i){let n=e<this.canvas.height/2?.5:-.5;n=Number.isInteger(e)?n:0;const s=Math.min(t,o);let a=s<this.canvas.width/2?.5:-.5;a=Number.isInteger(s)?a:0;const l=Math.max(t,o);let r=l<this.canvas.width/2?.5:-.5;r=Number.isInteger(l)?r:0,this.ctx.moveTo(t,e+n),this.ctx.lineTo(o,i+n),this.ctx.moveTo(s+a,e-5),this.ctx.lineTo(s+a,e+5),this.ctx.moveTo(l+r,i-5),this.ctx.lineTo(l+r,i+5)}if(this.ctx.stroke(),null!=s){const n=(t+o)/2,a=(e+i)/2;this.drawLabel(n,a,s,e===i)}}drawLabel(t,e,o,i=!0){const n=this.ctx.measureText(o),s=n.width,l=n.actualBoundingBoxAscent+n.actualBoundingBoxDescent,r=s+8,d=l+8,u=a.utils.isRTL()?-1:1;this.ctx.save(),this.theme?this.ctx.fillStyle=this.theme.sys.color.primary.main:this.ctx.fillStyle="var(--sys-color-primary-main)",i?(this.drawRoundRect(t-r/2,e-d-8,r,d),this.ctx.fillStyle="#FFFFFF",this.ctx.fillText(o,t-s*u/2,e-12)):(this.drawRoundRect(t+8,e-d/2,r,d),this.ctx.fillStyle="#FFFFFF",-1===u?this.ctx.fillText(o,t+s+12,e+l/2):this.ctx.fillText(o,t+12,e+l/2)),this.ctx.restore()}drawRoundRect(t,e,o,i,n=2){const s=n,a=n,l=n,r=n;this.ctx.beginPath(),this.ctx.moveTo(t+s,e),this.ctx.lineTo(t+o-a,e),this.ctx.quadraticCurveTo(t+o,e,t+o,e+a),this.ctx.lineTo(t+o,e+i-r),this.ctx.quadraticCurveTo(t+o,e+i,t+o-r,e+i),this.ctx.lineTo(t+l,e+i),this.ctx.quadraticCurveTo(t,e+i,t,e+i-l),this.ctx.lineTo(t,e+s),this.ctx.quadraticCurveTo(t,e,t+s,e),this.ctx.closePath(),this.ctx.fill()}clear(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)}}var Ki=function(t,e,o,i){return new(o||(o=Promise))(function(n,s){function a(t){try{r(i.next(t))}catch(t){s(t)}}function l(t){try{r(i.throw(t))}catch(t){s(t)}}function r(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o(function(t){t(e)})).then(a,l)}r((i=i.apply(t,e||[])).next())})};const Qi=e.css`
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  background: transparent;
`,tn=e.css`
  ${Qi};
  pointer-events: none;
`;class en extends e.React.PureComponent{constructor(t){if(super(t),this.handleActivate=t=>{if(!ut()&&!ct())return;if(Math.abs(t.screenX-this.mousedownX)>a.CLICK_TOLERANCE||Math.abs(t.screenY-this.mousedownY)>a.CLICK_TOLERANCE)return void t.stopPropagation();const{isInSection:o,isInWidget:i}=this.props;this.pageContext.viewOnly||o||i||qt()||Wt()||(t.stopPropagation(),(0,e.getAppStore)().dispatch(e.appActions.selectionChanged(null)))},this.handleMouseDown=t=>{this.mousedownX=t.screenX,this.mousedownY=t.screenY},this.updateDeviceRatio=()=>{this.canvasPane.setSize(this.ref.clientWidth,this.ref.clientHeight,window.devicePixelRatio)},this.handleResizeStart=t=>{const{layout:e}=this.props;this.rndingLayoutId=t;const o=this.ref.querySelector(`div.exb-rnd[data-layoutid="${e.id}"][data-layoutitemid="${t}"]`);this.domRect=this.ref.getBoundingClientRect(),this.bboxGridlines=Hi(this.props.layout,this.domRect.width,this.domRect.height,t);const i=o.getBoundingClientRect(),n=this.getPositionUnit(t);this.resizingRect=Object.assign({units:n},a.utils.relativeClientRect(i,this.domRect))},this.handleResizing=(t,e,o,i,n,s,a)=>{if(this.canvasPane.clear(),a>500)return void this.setState({offsetX:e,offsetY:o,dw:i,dh:n});const l=this.getResizingDelta(t,e,o,i,n,s);this.setState({offsetX:l.x,offsetY:l.y,dw:l.w,dh:l.h})},this.handleResizeEnd=(t,i,n,s,a,l,r,d)=>{var u,c;this.rndingLayoutId=null;const{layout:p}=this.props,h=this.getResizingDelta(t,i,n,s,a,l);this.canvasPane.clear();const g=yi(this.resizingRect,this.domRect,{dx:h.x,dy:h.y,dw:h.w,dh:h.h}),m=(0,o.getAppConfigAction)(),y={layoutId:p.id,layoutItemId:t},{bbox:f,setting:v}=Ii((0,e.Immutable)(r.bbox),r.setting,this.domRect,g);let I=f;if((null==d?void 0:d.hCenter)&&"50%"===(null===(u=r.bbox)||void 0===u?void 0:u.left)&&(I=I.set("left","50%")),(null==d?void 0:d.vCenter)&&"50%"===(null===(c=r.bbox)||void 0===c?void 0:c.top)&&(I=I.set("top","50%")),m.editLayoutItemProperty(y,"bbox",this.flipLeftRight?vi(I):I).editLayoutItemProperty(y,"setting",v),m.appConfig.useAutoSortInFixedLayout){const t=pi(m.appConfig.layouts[y.layoutId]);m.editLayoutProperty(y.layoutId,"order",t.order)}m.exec(),this.bboxGridlines=null,this.setState({offsetX:0,offsetY:0,dw:0,dh:0})},this.handleMoveItemByKey=(t,i,n)=>{var s,l,r;const{layout:d}=this.props;let u,c,p=d.content[t].bbox,h=null!==(s=d.content[t].setting)&&void 0!==s?s:(0,e.Immutable)({});const g=null!==(l=null==h?void 0:h.hCenter)&&void 0!==l&&l||null!==(r=null==h?void 0:h.vCenter)&&void 0!==r&&r;if(g){const e=this.ref.querySelector(`div[data-layoutitemid="${t}"]`);u=e.clientWidth,c=e.clientHeight}if(0!==i){if(a.utils.isPercentage(p.left)){const t=parseFloat(p.left);p=(null==h?void 0:h.hCenter)?p.set("left",`${(50-100*u/2/this.ref.clientWidth+.1*i).toFixed(1)}%`):p.set("left",`${(t+.1*i).toFixed(1)}%`)}else{const t=parseFloat(p.left);p=(null==h?void 0:h.hCenter)?p.set("left",`${(this.ref.clientWidth-u)/2+i}px`):p.set("left",`${t+i}px`)}if(a.utils.isPercentage(p.right)){const t=parseFloat(p.right);p=(null==h?void 0:h.hCenter)?p.set("right",`${(50+100*u/2/this.ref.clientWidth-.1*i).toFixed(1)}%`):p.set("right",`${(t-.1*i).toFixed(1)}%`)}else{const t=parseFloat(p.right);p=(null==h?void 0:h.hCenter)?p.set("right",(this.ref.clientWidth+u)/2-i+"px"):p.set("right",t-i+"px")}(null==h?void 0:h.hCenter)&&(h=h.set("hCenter",!1))}if(0!==n){if(a.utils.isPercentage(p.top)){const t=parseFloat(p.top);p=(null==h?void 0:h.vCenter)?p.set("top",`${(50-100*c/2/this.ref.clientHeight+.1*n).toFixed(1)}%`):p.set("top",`${(t+.1*n).toFixed(1)}%`)}else{const t=parseFloat(p.top);p=(null==h?void 0:h.vCenter)?p.set("top",`${(this.ref.clientHeight-c)/2+n}px`):p.set("top",`${t+n}px`)}if(a.utils.isPercentage(p.bottom)){const t=parseFloat(p.bottom);p=(null==h?void 0:h.vCenter)?p.set("bottom",`${(50+100*c/2/this.ref.clientHeight-.1*n).toFixed(1)}%`):p.set("bottom",`${(t-.1*n).toFixed(1)}%`)}else{const t=parseFloat(p.bottom);p=(null==h?void 0:h.hCenter)?p.set("bottom",(this.ref.clientHeight+c)/2-n+"px"):p.set("bottom",t-n+"px")}(null==h?void 0:h.vCenter)&&(h=h.set("vCenter",!1))}const m=(0,o.getAppConfigAction)();if(g&&m.editLayoutItemProperty({layoutId:d.id,layoutItemId:t},"setting",h),m.editLayoutItemProperty({layoutId:d.id,layoutItemId:t},"bbox",p),m.appConfig.useAutoSortInFixedLayout){const t=pi(m.appConfig.layouts[d.id]);m.editLayoutProperty(d.id,"order",t.order)}m.exec()},this.handleDragOver=(t,o,i,n,s,l,r)=>{var d,u,c;if(this.canvasPane.clear(),!this.state.isDragover||r>500)return;let p,h,g,m=0,y=0;(null===(d=t.layoutInfo)||void 0===d?void 0:d.layoutId)===this.props.layout.id?(p=t.layoutInfo.layoutItemId,g=this.getPositionUnit(p),h=this.props.layout.content[p]):g=Ei({},this.flipLeftRight);const f=t.rotation>0||t.rotation<0,v=Vi(h,this.domRect,n,this.bboxGridlines,{delta:{x:0,w:0,y:0,h:0},shiftKey:!1,canvasPane:f?null:this.canvasPane,theme:f?null:this.pageContext.builderTheme});if(null!=o&&(0!==v.x||0!==v.y)){const t=null!==(u=parseFloat(o.getAttribute("data-translatex")))&&void 0!==u?u:0,e=null!==(c=parseFloat(o.getAttribute("data-translatey")))&&void 0!==c?c:0;o.style.transform=`translate(${t+v.x}px, ${e+v.y}px)`}m=v.x,y=v.y,this.canvasPane.setColor(this.pageContext.builderTheme.sys.color.primary.main);if(function(t,o,i){const n=o.width-(t.left+t.width),s=o.height-(t.top+t.height),l="px"===t.units.left?e.utils.formatPixelNumber(`${Math.round(t.left)}px`):e.utils.formatPercentageNumber(a.utils.toRatio(t.left,o.width)),r="px"===t.units.right?e.utils.formatPixelNumber(`${Math.round(n)}px`):e.utils.formatPercentageNumber(a.utils.toRatio(n,o.width)),d="px"===t.units.top?e.utils.formatPixelNumber(`${Math.round(t.top)}px`):e.utils.formatPercentageNumber(a.utils.toRatio(t.top,o.height)),u="px"===t.units.bottom?e.utils.formatPixelNumber(`${Math.round(s)}px`):e.utils.formatPercentageNumber(a.utils.toRatio(s,o.height));t.left<=n?t.top<=s?(i.drawLine(0,t.top,t.left,t.top,!1,l),i.drawLine(t.left,0,t.left,t.top,!1,d)):(i.drawLine(0,t.top+t.height,t.left,t.top+t.height,!1,l),i.drawLine(t.left,t.top+t.height,t.left,o.height,!1,u)):t.top<=s?(i.drawLine(t.left+t.width,t.top,o.width,t.top,!1,r),i.drawLine(t.left+t.width,0,t.left+t.width,t.top,!1,d)):(i.drawLine(t.left+t.width,t.top+t.height,o.width,t.top+t.height,!1,r),i.drawLine(t.left+t.width,t.top+t.height,t.left+t.width,o.height,!1,u))}({width:n.width,height:n.height,left:n.left+m,top:n.top+y,units:g},this.domRect,this.canvasPane),null==t.layoutInfo||t.isPending){this.canvasPane.setColor(e.polished.rgba(this.pageContext.builderTheme.sys.color.primary.light,.2));const t={left:n.left+m,top:n.top+y,width:n.width,height:n.height};this.canvasPane.drawRect(t)}},this.handleToggleDragoverEffect=(t,e)=>{var o;if(this.canvasPane.clear(),t){let t;this.domRect=this.ref.getBoundingClientRect(),(null===(o=e.layoutInfo)||void 0===o?void 0:o.layoutId)===this.props.layout.id&&(t=e.layoutInfo.layoutItemId),this.bboxGridlines=Hi(this.props.layout,this.domRect.width,this.domRect.height,t)}this.setState({isDragover:t})},this.handleDragEnter=t=>null,this.handleDragLeave=()=>null,this.handleDrop=(t,e,o)=>{let i;i=null==t.layoutInfo||t.layoutInfo.layoutId!==this.props.layout.id?Ei({},this.flipLeftRight):this.getPositionUnit(t.layoutInfo.layoutItemId);const{snappedRect:n,delta:s}=this.calSnappedRect(t,e,Object.assign({units:i},o),t.layoutInfo);this.canvasPane.clear();const a={left:o.left+s.x,top:o.top+s.y,width:o.width,height:o.height,right:e.width-(o.left+s.x+o.width),bottom:e.height-(o.top+s.y+o.height)};this.addWidgetToLayout(t,e,a,n).catch(t=>{console.error(t)}),this.bboxGridlines=null},this.toggleShowWidgetList=t=>{t.stopPropagation(),this.setState({showWidgetList:!this.state.showWidgetList})},this.closeWidgetList=()=>{this.state.showWidgetList&&this.setState({showWidgetList:!1})},this.handlePageTemplateSelected=t=>{const i=(0,o.getAppConfigAction)();this.setState({isLoadingTemplate:!0}),this.pageContext.isHeader?i.applyHeaderTemplate(t).then(()=>{i.exec(),e.lodash.defer(()=>{this.setState({isLoadingTemplate:!1})})}).catch(t=>{console.error(t)}):this.pageContext.isFooter?i.applyFooterTemplate(t).then(()=>{i.exec(),e.lodash.defer(()=>{this.setState({isLoadingTemplate:!1})})}).catch(t=>{console.error(t)}):this.pageContext.isDialog?i.applyDialogTemplate(this.pageContext.dialogId,t).then(()=>{i.exec(),e.lodash.defer(()=>{this.setState({isLoadingTemplate:!1})})}).catch(t=>{console.error(t)}):i.applyPageBodyTemplate(this.pageContext.pageId,t).then(()=>{i.exec(),e.lodash.defer(()=>{this.setState({isLoadingTemplate:!1})})}).catch(t=>{console.error(t)})},null==this.props.layout)return;const i=e.ExtensionManager.getInstance().getExtensions(`${e.extensionSpec.ExtensionPoints.LayoutTransformer}`);if((null==i?void 0:i.length)>0){const t=i.find(t=>t.layoutType===this.props.layout.type);this.layoutTransform=null==t?void 0:t.transformLayout}this.flipLeftRight=a.utils.isRTL(),this.state={offsetX:0,offsetY:0,dw:0,dh:0,isDragover:!1,showWidgetList:!1,isLoadingTemplate:!1}}componentDidMount(){var t,e,o;this.canvasPane=new Ji(this.canvasRef,this.pageContext.builderTheme),this.updateDeviceRatio();const i=`(resolution: ${window.devicePixelRatio}dppx)`;this.mediaQueryList=null===(t=window.matchMedia)||void 0===t?void 0:t.call(window,i);const{name:n,version:s}=window.jimuUA.browser;"safari"===n.toLowerCase()&&parseInt(s)<14?null===(e=this.mediaQueryList)||void 0===e||e.addEventListener("change",this.updateDeviceRatio):null===(o=this.mediaQueryList)||void 0===o||o.addEventListener("change",this.updateDeviceRatio)}componentWillUnmount(){var t,e;const{name:o,version:i}=window.jimuUA.browser;"safari"===o.toLowerCase()&&parseInt(i)<14?null===(t=this.mediaQueryList)||void 0===t||t.removeEventListener("change",this.updateDeviceRatio):null===(e=this.mediaQueryList)||void 0===e||e.removeEventListener("change",this.updateDeviceRatio)}componentDidUpdate(){this.updateDeviceRatio()}isResizingItem(){return 0!==this.state.dh||0!==this.state.dw}getResizingDelta(t,e,o,i,n,s){return Vi(this.props.layout.content[t],this.domRect,this.resizingRect,this.bboxGridlines,{delta:{x:e,w:i,y:o,h:n},shiftKey:s,canvasPane:this.canvasPane,theme:this.pageContext.builderTheme})}calSnappedRect(t,e,o,i){let n;(null==i?void 0:i.layoutId)===this.props.layout.id&&(n=this.props.layout.content[i.layoutItemId]);const s=Vi(n,this.domRect,o,this.bboxGridlines,{delta:{x:0,y:0,w:0,h:0},shiftKey:!1}),l={left:o.left+s.x,top:o.top+s.y,width:o.width,height:o.height};return l.right=e.width-(+l.left+ +l.width),l.bottom=e.height-(+l.top+ +l.height),o.width>e.width&&(l.width=e.width,l.left=0),o.height>e.height&&(l.height=e.height,l.top=0),l.left=a.utils.toRatio(l.left,e.width),l.top=a.utils.toRatio(l.top,e.height),l.width=a.utils.toRatio(l.width,e.width),l.height=a.utils.toRatio(l.height,e.height),l.right=a.utils.toRatio(l.right,e.width),l.bottom=a.utils.toRatio(l.bottom,e.height),{snappedRect:l,delta:s}}addWidgetToLayout(t,i,n,s,l){return Ki(this,void 0,void 0,function*(){const{layout:r,browserSizeMode:d}=this.props,u=(0,o.getAppConfigAction)(l),c=yield W(u.appConfig,t,r.id),{layoutInfo:p,updatedAppConfig:h}=c,g=o.LayoutServiceProvider.getInstance().getServiceByType(e.LayoutType.FixedLayout).processAfterItemAdded(h,t,p,{currentSizeMode:d,containerRect:i,itemRect:n,insertIndex:null,others:{snapResult:s}});a.utils.changeLayout(g,p)})}getPositionUnit(t){return Ei(this.props.layout.content[t].bbox,this.flipLeftRight)}createItem(e,o,i){const{itemResizable:n,itemDraggable:s,itemSelectable:a,showDefaultTools:l}=this.props,{offsetX:r,offsetY:d,dw:u,dh:c}=this.state,p=o===this.rndingLayoutId?r:0,h=o===this.rndingLayoutId?d:0,g=o===this.rndingLayoutId?u:0,m=o===this.rndingLayoutId?c:0,y=o===this.rndingLayoutId?this.resizingRect:void 0,f=o===this.rndingLayoutId?this.domRect:void 0,v=e.content[o];return(0,t.jsx)(wi,{index:i,layoutItem:v,offsetX:p,offsetY:h,dw:g,dh:m,initRect:y,containerRect:f,layoutId:e.id,layoutItemId:o,draggable:s,resizable:n,selectable:a,showDefaultTools:l,isLayoutLockChildren:this.layoutSetting.lockChildren,onResizeStart:this.handleResizeStart,onResizing:this.handleResizing,onResizeEnd:this.handleResizeEnd,onMoveByKey:this.handleMoveItemByKey,isInSection:this.props.isInSection},`${e.id}_${o}`)}render(){const{layout:o,className:s,style:l,layouts:r,isPageItem:d,mainSizeMode:u,browserSizeMode:c}=this.props;return null==o?null:(0,t.jsx)(a.PageContext.Consumer,{children:a=>{var p,h,g;this.pageContext=a;let m=o;const y=r[c]!==o.id;y&&null!=this.layoutTransform&&(m=this.layoutTransform(o,u,c)),this.layoutSetting=e.lodash.assign({},n,y?{}:o.setting);const f=null!==(p=m.order)&&void 0!==p?p:[],v=(0,e.classNames)("layout fixed-layout",s,{[Bt]:null===(h=o.setting)||void 0===h?void 0:h.lockDescendants}),I=0!==this.state.dh||0!==this.state.dw,x=Object.assign(Object.assign(Object.assign({height:"auto",position:"relative"},l),i.styleUtils.toCSSStyle(this.layoutSetting.style)),{width:"100%",overflow:"hidden"}),b={display:this.state.isDragover||I?"block":"none",zIndex:f.length+1},w=!this.state.isLoadingTemplate&&0===Object.keys(null!==(g=m.content)&&void 0!==g?g:{}).length&&!a.viewOnly&&o.id===a.rootLayoutId;return(0,t.jsxs)("div",{className:v,ref:t=>{this.ref=t},onClick:this.handleActivate,onMouseDown:this.handleMouseDown,style:x,"data-layoutid":m.id,children:[(0,t.jsxs)("div",{"data-layoutid":m.id,className:"trail-container",css:e.css`
                  position: absolute;
                  left: 0;
                  right: 0;
                  top: 0;
                  bottom: 0;
                `,children:[(0,t.jsx)(Xe,{css:Qi,layouts:this.props.layouts,highlightDragover:!d,onDragEnter:this.handleDragEnter,onDragLeave:this.handleDragLeave,onDragOver:this.handleDragOver,onDrop:this.handleDrop,onToggleDragoverEffect:this.handleToggleDragoverEffect,isRepeat:this.props.isRepeat}),f.map((t,e)=>this.createItem(m,t,e))]}),w&&(0,t.jsx)(Zi,{pageContext:this.pageContext,onPageTemplateSelected:this.handlePageTemplateSelected}),this.state.isLoadingTemplate&&(0,t.jsx)(i.Loading,{type:i.LoadingType.Primary}),(0,t.jsx)("canvas",{css:tn,style:b,ref:t=>{this.canvasRef=t}})]})}})}}en.displayName="FixedLayout";const on=e.ReactRedux.connect(a.utils.mapStateToLayoutProps)(en);function nn(t,e,o){const i=e.top+e.height/2;let n,s,a=!1;if(o.some((t,e)=>{if(t.top+t.height/2>i){if(0===e)n=t.top/2;else{const i=o[e-1];n=(t.top+i.top+i.height)/2}a=!0,s=t.id}return a}),!a){const e=o[o.length-1];n=(e.top+e.height+t.height)/2}return{refId:s,insertY:n}}const sn={min:16,space:10};class an extends e.React.PureComponent{constructor(){super(...arguments),this.state={isResizing:!1,dw:0,dh:0},this.onResizeStart=(t,e,o)=>{this.initWidth=e,this.initHeight=o,this.props.onResizeStart(t),this.setState({isResizing:!0})},this.onResizing=(t,e,o,i,n)=>{this.props.onResizing(t,e,o,i,n),this.setState({dw:i,dh:n,isResizing:!0})},this.onResizeEnd=(t,e,o,i,n,s)=>{const{layoutItem:a}=this.props;this.props.onResizeEnd(t,e,o,i,n,a),this.setState({isResizing:!1,dw:0,dh:0})}}isStretchInCrossAxis(){const{layoutItem:t}=this.props;return function(t){var e,o;return(null===(o=null===(e=t.setting)||void 0===e?void 0:e.autoProps)||void 0===o?void 0:o.width)!==R.Custom}(t)}calHeight(t,e){return function(t,e){var o,i;return(null===(o=t.autoProps)||void 0===o?void 0:o.height)===R.Auto||"ratio"===t.heightMode?"ratio"===t.heightMode?{height:"auto",flex:"0 0 auto"}:{height:"auto"}:(null===(i=t.autoProps)||void 0===i?void 0:i.height)===R.Stretch||"fit"===t.heightMode?{flex:"1 1 auto"}:{height:e.height,flexShrink:0}}(t,e)}getStyle(t,o){const{layoutItem:i}=this.props,{dw:n,dh:s,isResizing:a}=this.state,l=i.bbox||{},r=this.calHeight(t,l);return r.width=o?"auto":l.width,a&&(n||s)&&(r.height=this.initHeight+s,r.width=this.initWidth+n),this.autoHeight="auto"===r.height,function(t,o,i){var n,s,a;const l=(null===(n=o.autoProps)||void 0===n?void 0:n.height)===R.Auto;return e.css`
    align-self: ${i?"stretch":null!==(a=null===(s=o.style)||void 0===s?void 0:s.alignSelf)&&void 0!==a?a:"auto"};
    width: ${$(t,"width")};
    height: ${$(t,"height")};
    flex: ${t.flex};
    flex-shrink: ${t.flexShrink};
    min-height: ${l?"unset":null};
  `}(r,t,o)}render(){var o,i;const{layoutId:n,layoutItem:s,parentRef:l,draggable:r,resizable:d,selectable:u,showDefaultTools:c}=this.props;if(!s||s.isPending)return null;const p=s.setting||{},h=null!==(i=null===(o=p.autoProps)||void 0===o?void 0:o.height)&&void 0!==i?i:R.Custom,g=(0,e.classNames)("flexbox-layout-item",{"d-flex":h!==R.Auto}),m=this.isStretchInCrossAxis(),y=a.utils.shouldUseAspectRatio(p),f=a.utils.parseAspectRatio(p.aspectRatio);return(0,t.jsx)(jo,{css:this.getStyle(p,m),layoutId:n,layoutItemId:s.id,parentRef:l,onResizeStart:this.onResizeStart,onResizing:this.onResizing,onResizeEnd:this.onResizeEnd,left:!m,right:!m,top:!1,bottom:h===R.Custom&&!y,draggable:r,resizable:d,selectable:u,showDefaultTools:c,onClick:this.props.onClick,className:g,forceAspectRatio:y,aspectRatio:f,autoHeight:this.autoHeight})}}const ln=t=>e.css`
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
    scrollbar-width: thin;  /* Firefox */
    &::-webkit-scrollbar {
      display: block;  /* Safari and Chrome */
    }
  }
  & > div.flexbox-layout-item ~ div.flexbox-layout-item {
    margin-top: ${t.space}px;
  }
`,rn=e.css`
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  background: transparent;
`,dn=e.css`
  ${rn};
  z-index: 20;
  pointer-events: none;
`,un=10;class cn extends e.React.PureComponent{constructor(t){super(t),this.state={isDragover:!1},this.handleItemResizeStart=t=>{const{layout:e}=this.props;this.domRect=this.ref.current.getBoundingClientRect();const o=this.ref.current.querySelector(`div.exb-rnd[data-layoutid="${e.id}"][data-layoutitemid="${t}"]`).getBoundingClientRect();this.resizingRect=a.utils.relativeClientRect(o,this.domRect)},this.handleItemResizing=()=>null,this.handleItemResizeEnd=(t,e,i,n,s,l)=>{const{layout:r}=this.props,d=r.content[t].bbox;let u;u=a.utils.isPercentage(d.width)?`${(100*(this.resizingRect.width+n)/this.domRect.width).toFixed(4)}%`:`${Math.round(this.resizingRect.width+n)}px`;const c={width:u,height:Math.round(this.resizingRect.height+s)};this.childRects=[],this.domRect=null;(0,o.getAppConfigAction)().editLayoutItemProperty({layoutId:this.props.layout.id,layoutItemId:t},"bbox",c).exec()},this.handleDragOver=(t,o,i,n)=>{var s;let a=n;if(this.canvasPane.clear(),(null===(s=this.childRects)||void 0===s?void 0:s.length)>0){const{insertY:t,refId:e}=nn(i,a,this.childRects);this.referenceId=e,a={top:t-5+this.ref.current.scrollTop,width:i.width-un,left:5,height:un}}else a={top:i.height/2-5,width:i.width-un,left:5,height:un};this.canvasPane.setColor(e.polished.rgba(this.builderTheme.sys.color.primary.light,.5)),this.canvasPane.drawRect(a)},this.handleToggleDragoverEffect=t=>{t&&(this.referenceId=null,this.collectBounds(null)),this.setState({isDragover:t})},this.handleDrop=(t,i,n)=>{this.canvasPane.clear();const{layout:s}=this.props;let l=0;null!=this.referenceId?l=s.order.indexOf(this.referenceId):null!=s.order&&(l=s.order.length);W((0,o.getAppConfigAction)().appConfig,t,s.id).then(s=>{const{layoutInfo:r,updatedAppConfig:d}=s,u=o.LayoutServiceProvider.getInstance().getServiceByType(e.LayoutType.ColumnLayout).processAfterItemAdded(d,t,r,{currentSizeMode:null,containerRect:i,itemRect:n,insertIndex:l});a.utils.changeLayout(u,r)}).finally(null),this.referenceId=null,this.childRects=[]},this.ref=e.React.createRef()}componentDidMount(){this.canvasPane=new Ji(this.canvasRef),this.canvasPane.setSize(this.ref.current.clientWidth,this.ref.current.clientHeight)}componentDidUpdate(){this.canvasPane.setSize(this.ref.current.clientWidth,this.ref.current.clientHeight)}collectBounds(t){const{layout:e}=this.props;this.childRects=[],this.domRect=this.ref.current.getBoundingClientRect();const o=this.ref.current.parentNode.querySelectorAll(`div[data-layoutid="${e.id}"] > .trail-container > div.exb-rnd`);return(null==o?void 0:o.length)>0&&o.forEach(o=>{const i=o.getAttribute("data-layoutitemid");if(t!==i&&e.order.includes(i)){const t=a.utils.relativeClientRect(o.getBoundingClientRect(),this.domRect);t.id=i,this.childRects.push(t)}}),this.childRects.sort((t,e)=>t.top-e.top)}createItem(e,o,i){const{layout:n,itemDraggable:s,itemResizable:a,itemSelectable:l,showDefaultTools:r}=this.props;return(0,t.jsx)(an,{index:o,space:i.space,layoutId:n.id,layoutItemId:e,parentRef:this.ref,layoutItem:n.content[e],draggable:s,resizable:a,selectable:l,showDefaultTools:r,onResizeStart:this.handleItemResizeStart,onResizing:this.handleItemResizing,onResizeEnd:this.handleItemResizeEnd},e)}isEmpty(){var t;const{layout:e}=this.props,o=null!==(t=e.order)&&void 0!==t?t:[];return!(o.length>0&&o.some(t=>!e.content[t].isPending))}render(){var o;const{layout:n,className:s}=this.props,l=null!==(o=n.order)&&void 0!==o?o:[],r=Object.assign({},sn,n.setting),d=this.isEmpty();return(0,t.jsx)(a.PageContext.Consumer,{children:o=>{this.builderTheme=o.builderTheme,this.theme=o.theme;const a={position:"relative",minWidth:r.min},u=(0,e.classNames)("layout column-layout",s),c={display:this.state.isDragover?"block":"none"};return(0,t.jsxs)("div",{className:u,ref:this.ref,style:a,"data-layoutid":n.id,children:[(0,t.jsxs)("div",{className:"trail-container d-flex flex-column w-100",css:e.css`
                  position: ${d?"absolute":null};
                  padding: ${i.styleUtils.toCSSPadding(r.padding)};
                  ${ln(r)};
                `,children:[(0,t.jsx)(Xe,{css:rn,layouts:this.props.layouts,highlightDragover:!0,onDragOver:this.handleDragOver,onDrop:this.handleDrop,onToggleDragoverEffect:this.handleToggleDragoverEffect}),l.map((t,e)=>this.createItem(t,e,r))]}),d&&this.props.children,(0,t.jsx)("canvas",{css:dn,style:c,ref:t=>{this.canvasRef=t}})]})}})}}const pn=e.ReactRedux.connect(a.utils.mapStateToLayoutProps)(cn),hn={space:10,style:{padding:{number:[10,10,10,10],unit:i.DistanceUnits.PIXEL}}},gn={heightMode:"fixed",aspectRatio:1,offsetX:0,offsetY:0,style:{alignSelf:"flex-start"}},mn=12,yn=e.css`
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
`;function fn(t){return(0,e.Immutable)(t).set("left",mn-parseInt(t.left,10)-parseInt(t.width,10))}const vn=e.css`
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
`,In=e.css`
  ${vn};
  top: 0;
`,xn=e.css`
  ${vn};
  bottom: 0;
`;class bn extends e.React.PureComponent{constructor(t){super(t),this.state={isResizing:!1,dh:0},this.handleResizeStart=(t,e,o)=>{this.initWidth=e,this.initHeight=o,this.props.onResizeStart(t),this.setState({isResizing:!0})},this.handleResizing=(t,e,o,i,n)=>{this.props.onResizing(t,e,o,i,n),this.setState({dh:n,isResizing:!0})},this.handleResizeEnd=(t,e,o,i,n,s)=>{const{layoutItem:a}=this.props;this.props.onResizeEnd(t,e,o,i,n,a),this.setState({isResizing:!1,dh:0})},this.handleDropAtTop=(t,e,o)=>{this.dropAtBoundary(t,e,o,"top")},this.handleDropAtBottom=(t,e,o)=>{this.dropAtBoundary(t,e,o,"bottom")},this.dropAtBoundary=(t,i,n,s)=>{let l=(0,o.getAppConfigAction)();(function(t,i,n,s,l,r){return D(this,void 0,void 0,function*(){var d;let u=(0,o.getAppConfigAction)(t);const c=t.layouts[l.layoutId].content[l.layoutItemId],p=E(),h=c.without("id").without("type").without("widgetId").without("sectionId").without("screenGroupId"),g=yield u.createWidget({uri:"widgets/layout/column/"}),m=o.LayoutServiceProvider.getInstance().getServiceByType(e.LayoutType.RowLayout).createBlankItem(u.appConfig,l.layoutId);let y=m[0];const f=m[1],v=y.layouts[l.layoutId].order;u=(0,o.getAppConfigAction)(y),u.editLayoutProperty(l.layoutId,"order",[].concat(v,f));const I=Object.keys(g.layouts)[0],x=g.layouts[I],b=a.searchUtils.findLayoutId(x,p,u.appConfig.mainSizeMode),w=o.LayoutServiceProvider.getInstance().getServiceByType(e.LayoutType.ColumnLayout),S=u.moveLayoutItem(l,b,p,p);y=w.processAfterItemAdded(u.appConfig,i,S,{currentSizeMode:null,containerRect:n,itemRect:s,insertIndex:0});const C=yield W(y,i,b);y=w.processAfterItemAdded(C.updatedAppConfig,i,C.layoutInfo,{currentSizeMode:null,containerRect:n,itemRect:s,insertIndex:"top"===r?0:1}),u=(0,o.getAppConfigAction)(y),u.editLayoutProperty(l.layoutId,`content.${l.layoutItemId}`,h).editLayoutItemProperty(l,"id",l.layoutItemId).editLayoutItemProperty(l,"type",e.LayoutItemType.Widget).editLayoutItemProperty(l,"widgetId",g.id).editLayoutItemProperty(S,"bbox.height",h.bbox.height).editWidgetProperty(g.id,`parent.${p}`,[l]);let R=h.bbox;const T=Math.round(parseFloat(R.height)+s.height+20);return R=R.set("height",`${T}px`),u.editLayoutItemProperty(l,"bbox",R),u.editLayoutProperty(l.layoutId,"content",u.appConfig.layouts[l.layoutId].content.without(f)),(null===(d=i.layoutInfo)||void 0===d?void 0:d.layoutId)===l.layoutId?u.editLayoutProperty(l.layoutId,"order",v.filter(t=>t!==i.layoutInfo.layoutItemId)):u.editLayoutProperty(l.layoutId,"order",v),{updatedAppConfig:u.appConfig,layoutInfo:l}})})(l.appConfig,t,i,n,{layoutId:this.props.layoutId,layoutItemId:this.props.layoutItemId},s).then(({updatedAppConfig:t})=>{l=(0,o.getAppConfigAction)(t),l.exec()}).finally(null)},this.fakeTopLayouts=(0,e.Immutable)({[e.BrowserSizeMode.Large]:`${this.props.layoutId}_${this.props.layoutItemId}_tlarge`,[e.BrowserSizeMode.Medium]:`${this.props.layoutId}_${this.props.layoutItemId}_tmedium`,[e.BrowserSizeMode.Small]:`${this.props.layoutId}_${this.props.layoutItemId}_tsmall`}),this.fakeBottomLayouts=(0,e.Immutable)({[e.BrowserSizeMode.Large]:`${this.props.layoutId}_${this.props.layoutItemId}_blarge`,[e.BrowserSizeMode.Medium]:`${this.props.layoutId}_${this.props.layoutItemId}_bmedium`,[e.BrowserSizeMode.Small]:`${this.props.layoutId}_${this.props.layoutItemId}_bsmall`})}isFunctionalWidget(){var t,o,i;const{layoutItem:n}=this.props;if(n.type===e.LayoutItemType.Widget){let s=!1;const a=null===(o=null===(t=(0,e.getAppStore)().getState().appConfig)||void 0===t?void 0:t.widgets)||void 0===o?void 0:o[n.widgetId];return null!=(null===(i=null==a?void 0:a.manifest)||void 0===i?void 0:i.properties)&&(s=a.manifest.widgetType===e.WidgetType.Layout||a.manifest.properties.hasEmbeddedLayout),!s}return!1}getStyle(t){const{gutter:o,layoutItem:i,isMultiRow:n}=this.props,{dh:s,isResizing:l}=this.state,r=i.bbox,d=a.utils.isRTL()?-1:1,u=function(t,e,o){var i,n,s,a,l,r,d,u,c,p,h,g,m,y;return o?{height:(null===(i=t.autoProps)||void 0===i?void 0:i.height)===R.Auto?"auto":e.height,alignSelf:null!==(s=null===(n=t.style)||void 0===n?void 0:n.alignSelf)&&void 0!==s?s:"flex-start"}:"ratio"===t.heightMode?{alignSelf:null!==(l=null===(a=t.style)||void 0===a?void 0:a.alignSelf)&&void 0!==l?l:"flex-start"}:(null===(r=t.autoProps)||void 0===r?void 0:r.height)===R.Auto?{height:"auto",alignSelf:null!==(u=null===(d=t.style)||void 0===d?void 0:d.alignSelf)&&void 0!==u?u:"flex-start"}:(null===(c=t.autoProps)||void 0===c?void 0:c.height)===R.Custom?{height:e.height,alignSelf:null!==(h=null===(p=t.style)||void 0===p?void 0:p.alignSelf)&&void 0!==h?h:"flex-start"}:(null===(g=t.autoProps)||void 0===g?void 0:g.height)===R.Stretch||"fit"===t.heightMode?{alignSelf:"stretch"}:parseFloat(e.height)>0?{height:e.height,alignSelf:null!==(y=null===(m=t.style)||void 0===m?void 0:m.alignSelf)&&void 0!==y?y:"flex-start"}:{alignSelf:"stretch"}}(t,r,n);return l&&0!==s&&(u.height=this.initHeight+s),function(t,o,i,n,s){var a,l,r,d;return t?[e.css`
        padding: ${i/2}px 0;
        height: ${$(n,"height")};
        align-self: ${n.alignSelf};
      `,0!==s.offsetX||0!==s.offsetY?`translate(${(null!==(a=s.offsetX)&&void 0!==a?a:0)*o}px, ${null!==(l=s.offsetY)&&void 0!==l?l:0}px)`:null]:[e.css`
      padding: 0 ${i/2}px;
      height: ${$(n,"height")};
      align-self: ${n.alignSelf};
    `,0!==s.offsetX||0!==s.offsetY?`translate(${(null!==(r=s.offsetX)&&void 0!==r?r:0)*o}px, ${null!==(d=s.offsetY)&&void 0!==d?d:0}px)`:null]}(n,d,o,u,t)}render(){var o;const{order:i,span:n,offset:s,layoutId:l,layoutItem:r,draggable:d,resizable:u,selectable:c}=this.props;if(null==r||r.isPending)return null;const p=e.lodash.assign({},gn,r.setting),h=a.utils.shouldUseAspectRatio(p),g=null===(o=p.autoProps)||void 0===o?void 0:o.height,m=(0,e.classNames)("row-layout-item d-flex",`col-${n}`,`offset-${s}`,`order-${i}`,{"fix-height":g===a.LayoutItemSizeModes.Custom}),y=this.isFunctionalWidget(),f=e.css`
      width: 100%;
      height: 10px;
      background: ${e.polished.rgba(this.props.builderTheme.sys.color.primary.light,.5)};
    `,v=a.utils.parseAspectRatio(p.aspectRatio),[I,x]=this.getStyle(p);return(0,t.jsx)(jo,{css:I,style:{transform:x},layoutId:l,layoutItemId:r.id,onResizeStart:this.handleResizeStart,onResizing:this.handleResizing,onResizeEnd:this.handleResizeEnd,left:!0,right:!0,top:!1,bottom:g===a.LayoutItemSizeModes.Custom&&!h,draggable:d,resizable:u,selectable:c,onClick:this.props.onClick,className:m,forceAspectRatio:h,aspectRatio:v,autoHeight:g===a.LayoutItemSizeModes.Auto,children:(0,t.jsxs)(e.React.Fragment,{children:[y&&(0,t.jsx)(Xe,{css:e.css`
                ${In};
              `,layouts:this.fakeTopLayouts,highlightDragover:!0,onDrop:this.handleDropAtTop,children:(0,t.jsx)("div",{css:f})}),y&&(0,t.jsx)(Xe,{css:e.css`
                ${xn};
              `,layouts:this.fakeBottomLayouts,highlightDragover:!0,onDrop:this.handleDropAtBottom,children:(0,t.jsx)("div",{css:e.css`${f};position: absolute; bottom:0;`})})]})})}}function wn(t,e){let o=-1;return e.some((e,i)=>e.id===t&&(o=i,!0)),o}function Sn(t,o,i,n){const s=n.map(t=>(0,e.Immutable)(t)),l=wn(t,s);if(a.utils.isRTL()&&(o=0!==o?0:-i),o>0){const t=s[l],e=Math.min(o,t.width-1);return s[l]=t.set("left",t.left+e).set("width",t.width-e),s}if(o<0){let t=0;for(let e=0;e<l;e+=1)t+=Math.min(s[e].width,2);const e=s[l].left-t,i=Math.abs(o);if(e>0){let t=0;for(let e=l;e>=0;e-=1){const o=s[e];let n=0;if(e>0){const t=s[e-1];n=o.left-(t.left+t.width)}else n=o.left;if(0===n)continue;const a=t+n>=i?i-t:n;s[l]=s[l].set("width",s[l].width+a);for(let t=e;t<=l;t+=1)s[t]=s[t].set("left",s[t].left-a);if(t+n>=i)return s;t+=n}if(l>0)for(let e=l-1;e>=0;e-=1){const o=s[e],n=o.width-2;if(n<=0)continue;const a=t+n>=i?i-t:n;s[l]=s[l].set("width",s[l].width+a),s[e]=o.set("width",o.width-a);for(let t=e+1;t<=l;t+=1)s[t]=s[t].set("left",s[t].left-a);if(t+n>=i)return s;t+=n}}return s}if(i<0){const t=Math.min(Math.abs(i),s[l].width-1);return s[l]=s[l].set("width",s[l].width-t),s}if(i>0){let t=0;for(let e=l+1;e<s.length;e+=1)t+=Math.min(s[e].width,2);const e=Math.floor(s[l].left/mn),o=i;if(mn*(e+1)-(s[l].left+s[l].width)-t>0){let t=0;for(let i=l;i<s.length;i+=1){const n=s[i];let a=0;if(i!==s.length-1){a=s[i+1].left-(n.left+n.width)}else a=mn*(e+1)-(n.left+n.width);if(0===a)continue;const r=t+a>=o?o-t:a;s[l]=s[l].set("width",s[l].width+r);for(let t=l+1;t<=i;t+=1)s[t]=s[t].set("left",s[t].left+r);if(t+a>=o)return s;t+=a}if(l!==s.length-1)for(let e=l+1;e<s.length;e+=1){const i=s[e],n=i.width-2;if(n<=0)continue;const a=t+n>=o?o-t:n;s[l]=s[l].set("width",s[l].width+a),s[e]=i.set("width",i.width-a);for(let t=l+1;t<=e;t+=1)s[t]=s[t].set("left",s[t].left+a);if(t+n>=o)return s;t+=n}}return s}return s}function Cn(t,o,i){const n=i.map(t=>(0,e.Immutable)(t)),s=wn(t,n),a=n[s];return n.splice(s,1),Rn(a,o,n)}function Rn(t,o,i){const n=i.map(t=>(0,e.Immutable)(t));let s=(0,e.Immutable)(t);const a=Math.max(o,0);if(s=s.set("left",a),null==n||0===n.length)return s=s.set("width",Math.min(s.width,mn-s.left)),[s];let l,r=n.length;const d=()=>{if(0===r)u=n[r].left,l=u;else{const t=n[r-1];u=r<n.length?n[r].left-(t.left+t.width):mn-(t.left+t.width),l=t.left+t.width+u}};n.some((t,e)=>a<=t.left&&(r=e,!0));let u=r<n.length?n[r].left-a:mn-a;if(u>=s.width)return n.splice(r,0,s),n;const c=u;if(d(),u>=s.width)return s=s.set("left",l-s.width),n.splice(r,0,s),n;u=c;for(let t=r;t<n.length;t+=1){const e=n[t];let o=0;if(t!==n.length-1){o=n[t+1].left-(e.left+e.width)}else o=mn-(e.left+e.width);if(0===o)continue;const i=u+o>=s.width?s.width-u:o;for(let e=r;e<=t;e+=1)n[e]=n[e].set("left",n[e].left+i);if(u+o>=s.width)return n.splice(r,0,s),n;u+=o}if(d(),u>=s.width)return s=s.set("left",l-s.width),n.splice(r,0,s),n;for(let t=r-1;t>=0;t-=1){const e=n[t];let o=0;if(t>0){const i=n[t-1];o=e.left-(i.left+i.width)}else o=e.left;if(0===o)continue;const i=u+o>=s.width?s.width-u:o;for(let e=t;e<=r-1;e+=1)n[e]=n[e].set("left",n[e].left-i);if(u+o>=s.width)return s=s.set("left",l-s.width),n.splice(r,0,s),n;u+=o}if(d(),u>=2)return s=s.set("left",l-u).set("width",u),n.splice(r,0,s),n;if(r!==n.length)for(let t=r;t<n.length;t+=1){const e=n[t],o=e.width-2;if(o<=0)continue;const i=u+o>=2?2-u:o;n[t]=e.set("width",e.width-i);for(let e=r;e<=t;e+=1)n[e]=n[e].set("left",n[e].left+i);if(u+o>=2)return s=s.set("left",n[r].left-2).set("width",2),n.splice(r,0,s),n;u+=o}if(d(),u>=2)return s=s.set("left",l-u).set("width",u),n.splice(r,0,s),n;for(let t=r-1;t>=0;t-=1){const e=n[t],o=e.width-2;if(o<=0)continue;const i=u+o>=2?2-u:o;n[t]=e.set("width",e.width-i);for(let e=t+1;e<=r-1;e+=1)n[e]=n[e].set("left",n[e].left-i);if(u+o>=2)return s=s.set("left",l-2).set("width",2),n.splice(r,0,s),n;u+=o}return n}function Tn(o){const{builderTheme:i,visible:n,gutter:s=0}=o;return(0,t.jsx)("div",{css:e.css`
        pointer-events: none;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0px;
        position: absolute;
        z-index: 1;
        display: ${n?"flex":"none"};
      `,children:[0,1,2,3,4,5,6,7,8,9,10,11].map(o=>(0,t.jsx)("div",{css:e.css`
              width: 8.333333%;
            `,children:(0,t.jsx)("div",{css:e.css`
                padding-left: ${s/2}px;
                padding-right: ${s/2}px;
                height: 100%;
                width: 100%;
                overflow: hidden;
              `,children:(0,t.jsx)("div",{css:e.css`
                  transform: translateY(-5%);
                  border: 1px dashed ${e.polished.rgba(i.ref.palette.neutral[900],.6)};
                  height: 110%;
                  width: 100%;
                `})})},o))})}const Mn=e.css`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`,Ln=e.css`
  ${Mn};
  bottom: 0;
  top: 0;
  z-index: ${a.LayoutZIndex.DragMoveTip};
  pointer-events: none;
`;class Pn extends e.React.PureComponent{constructor(t){super(t),this.state={isResizing:!1,updatingRects:null,isDragoverCenter:!1},this.handleItemResizeStart=t=>{this.domRect=this.ref.getBoundingClientRect(),this.setState({isResizing:!0})},this.handleItemResizing=(t,e,o,i,n)=>{const s=this.domRect.width/mn,a=Sn(t,Math.round(e/s),Math.round(i/s),this.childRects);this.setState({updatingRects:a})},this.handleItemResizeEnd=(t,e,i,n,s,l)=>{const{layout:r}=this.props,d=this.domRect.width/mn,u=Math.round(e/d),c=Math.round(n/d),p=(0,o.getAppConfigAction)();Sn(t,u,c,this.childRects).forEach(e=>{const o=r.content[e.id].bbox;let i=o.height;e.id===t&&(i=a.utils.isPercentage(o.height)?`${(parseFloat(e.height)+100*s/this.domRect.height).toFixed(4)}%`:`${Math.round(parseFloat(e.height)+s)}px`);const n={left:e.left,width:e.width,height:i};p.editLayoutItemProperty({layoutId:r.id,layoutItemId:e.id},"bbox",n)}),p.exec(),this.setState({isResizing:!1,updatingRects:null})},this.handleToggleDragoverCenterEffect=t=>{this.referenceId=null,t&&this.collectBounds(),this.setState({isDragoverCenter:t})},this.handleDragOver=(t,e,o,i,n,s)=>{var a;const l=null!==(a=t.layoutInfo)&&void 0!==a?a:{layoutId:null},r=this.reCalculateRects(t,o,i,n);let d;r.some(t=>(null==t.id||t.layoutId===l.layoutId&&t.id===l.layoutItemId)&&(d=t,!0));let u=!0,c=d.left;if(this.flippedChildRects.some(t=>{if(t.layoutId===d.layoutId&&t.id===d.id)return!1;if(t.left<=d.left&&t.left+t.width>d.left&&(u=!1),!u){const e=r.find(e=>e.layoutId===t.layoutId&&e.id===t.id);return c=e.left+e.width<=d.left?t.left+t.width:t.left,!0}return!1}),this.dragInsertPos=c,this.canvasPane.clear(),u)this.canvasPane.drawRect({left:c*this.colWidth+this.space/2,top:0,width:d.width*this.colWidth-this.space,height:i.height});else{const t=Math.min(o.width-this.space/2,Math.max(0,c*this.colWidth-this.space/2));this.canvasPane.drawRect({left:t,top:0,width:10,height:o.height})}},this.handleDragEnter=()=>{this.canvasPane.setSize(this.ref.clientWidth,this.ref.clientHeight),this.canvasPane.setColor(e.polished.rgba(this.builderTheme.sys.color.primary.light,.5))},this.handleDragLeave=()=>{this.canvasPane.clear()},this.handleDrop=(t,i,n)=>{const{layout:s}=this.props,l=(0,o.getAppConfigAction)(),{addedItemRect:r,insertIndex:d,appConfig:u}=this.calDropPosition(l.appConfig,t,i,n,!1);null!=r?W(u,t,s.id).then(n=>{const{layoutInfo:s,updatedAppConfig:l}=n,u=o.LayoutServiceProvider.getInstance().getServiceByType(e.LayoutType.RowLayout).processAfterItemAdded(l,t,s,{currentSizeMode:null,containerRect:i,itemRect:r,insertIndex:d});a.utils.changeLayout(u,s)}).finally(null):a.utils.changeLayout(u,t.layoutInfo),this.canvasPane.clear()},this.flipLeftRight=a.utils.isRTL()}componentDidMount(){this.canvasPane=new Ji(this.guideDragOverRef)}getConfig(){var t;const{layout:e}=this.props;return null!==(t=e.setting)&&void 0!==t?t:hn}reCalculateRects(t,e,o,i){var n,s;const a=null!==(n=t.layoutInfo)&&void 0!==n?n:{layoutId:null},{layout:l}=this.props,r=this.getConfig();this.space=null!==(s=r.space)&&void 0!==s?s:0;const d=this.maxPageWidth>0?Math.min(this.maxPageWidth,e.width):e.width,u=i-(e.width-d)/2,c=o.left-(e.width-d)/2;this.colWidth=d/mn;const p=Math.round(u/this.colWidth),h=Math.round(c/this.colWidth),g=Math.max(1,Math.ceil(o.width/this.colWidth)),m=function(t,e,o,i,n,s){var a;let l;const r=null!==(a=e.layoutInfo)&&void 0!==a?a:{layoutId:null},d=r.layoutId===t;return s.some(t=>(!d||t.id!==r.layoutItemId)&&(t.left>=o&&t.left<o+i||o>=t.left&&o<t.left+t.width))?(s.some((t,e)=>{if(d&&t.id===r.layoutItemId)return!1;if(n>=t.left&&n<=t.left+t.width)return n>=t.left&&n<t.left+t.width/2?(l=t.left,!0):(l=t.left+t.width,!0);if(o<t.left&&o+i>t.left){let o=0;if(0===e)o=t.left;else{let i;for(let t=e-1;t>=0&&(i=s[t],d&&i.id===r.layoutItemId);t-=1);o=null!=i?t.left-(i.left+i.width):t.left}return l=o>=i?t.left-i:t.left-o,!0}return o>t.left&&o<t.left+t.width&&(l=t.left+t.width,!0)}),l):o}(l.id,t,h,g,p,this.flippedChildRects);return null==t.id&&this.isInRow(a)?Cn(a.layoutItemId,m,this.flippedChildRects):Rn({width:g,height:o.height,layoutId:a.layoutId,id:a.layoutItemId},m,this.flippedChildRects)}calDropPosition(t,e,i,n,s){var a;const l=this.maxPageWidth>0?Math.min(this.maxPageWidth,i.width):i.width,r=null!==(a=e.layoutInfo)&&void 0!==a?a:{layoutId:null},{layout:d}=this.props,u=l/mn,c=this.dragInsertPos,p=Math.max(1,Math.ceil(n.width/u)),h=(0,o.getAppConfigAction)(t);let g,m,y;return g=!s&&null==e.id&&this.isInRow(r)?Cn(r.layoutItemId,c,this.flippedChildRects):Rn({width:p,height:n.height,layoutId:r.layoutId,id:r.layoutItemId},c,this.flippedChildRects),g.forEach((t,o)=>{var i;let n={left:t.left,width:t.width,height:t.height};if(this.flipLeftRight&&(n=fn(n)),t.layoutId===d.id)h.editLayoutItemProperty({layoutId:t.layoutId,layoutItemId:t.id},"bbox",n),t.id===(null===(i=e.layoutInfo)||void 0===i?void 0:i.layoutItemId)&&null!=e.id&&h.setLayoutItemToPending({layoutId:t.layoutId,layoutItemId:t.id},!1);else{m=n,y=0+o}}),{addedItemRect:m,insertIndex:y,appConfig:h.appConfig}}isInRow(t){const{layout:e}=this.props;return(null==t?void 0:t.layoutId)===e.id}collectBounds(){var t;const{transformedLayout:e}=this.props,o=null!==(t=e.order)&&void 0!==t?t:[];return this.childRects=[],o.forEach(t=>{var o,i;if(e.content[t].isPending)return;const n=null===(i=null===(o=e.content)||void 0===o?void 0:o[t])||void 0===i?void 0:i.bbox;null!=n&&this.childRects.push({layoutId:e.id,id:t,left:parseInt(n.left,10),width:parseInt(n.width,10),height:n.height})}),this.childRects.sort((t,e)=>t.left-e.left),this.flipLeftRight?(this.flippedChildRects=[],this.childRects.forEach(t=>{let e={left:t.left,width:t.width,height:t.height};e=fn(e),this.flippedChildRects.push({layoutId:t.layoutId,id:t.id,left:e.left,width:e.width,height:e.height})}),this.flippedChildRects.sort((t,e)=>t.left-e.left)):this.flippedChildRects=this.childRects,this.childRects}createItem(e,o){var i;const{transformedLayout:n,itemDraggable:s,itemResizable:a,itemSelectable:l,isMultiRow:r}=this.props,d=this.getConfig(),u=e[o],c=o>0?e[o-1]:null,p=null!==(i=d.space)&&void 0!==i?i:0;let h,g=!0;if(r&&c&&(g=Math.floor(u.left/mn)===Math.floor(c.left/mn)),0===o)h=u.left;else if(g)c&&(h=u.left-c.left-c.width);else{const t=Math.floor(u.left/mn);h=u.left-t*mn}return(0,t.jsx)(bn,{order:o+1,offset:h,span:u.width,gutter:p,isMultiRow:r,builderTheme:this.builderTheme,layoutId:n.id,layoutItemId:u.id,layoutItem:n.content[u.id],draggable:s,resizable:a,selectable:l,onResizeStart:this.handleItemResizeStart,onResizing:this.handleItemResizing,onResizeEnd:this.handleItemResizeEnd},`${u.layoutId}_${u.id}`)}render(){var o;const{transformedLayout:i,className:n}=this.props,{isResizing:s,isDragoverCenter:l}=this.state,r=this.getConfig(),d=l;let u;s&&null!=this.state.updatingRects?u=this.state.updatingRects:(this.collectBounds(),u=this.childRects);const c=null!==(o=r.space)&&void 0!==o?o:0;return(0,t.jsx)(a.PageContext.Consumer,{children:o=>(this.maxPageWidth=o.maxWidth,this.builderTheme=o.builderTheme,(0,t.jsx)("div",{className:(0,e.classNames)("row-layout",n,{"row-rtl":this.flipLeftRight}),css:yn,"data-layoutid":i.id,children:(0,t.jsx)("div",{css:e.css`
                width: 100%;
                max-width: ${o.maxWidth>0?`${o.maxWidth}px`:"none"};
              `,children:(0,t.jsxs)("div",{ref:t=>{this.ref=t},css:e.css`
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
                  `,children:[(0,t.jsxs)("div",{className:(0,e.classNames)("row m-0",{"flex-nowrap":!this.props.isMultiRow,"h-100":u.length>0}),"data-layoutid":i.id,children:[(0,t.jsx)(Xe,{css:Mn,layouts:this.props.layouts,highlightDragover:!1,onDragEnter:this.handleDragEnter,onDragLeave:this.handleDragLeave,onDragOver:this.handleDragOver,onDrop:this.handleDrop,onToggleDragoverEffect:this.handleToggleDragoverCenterEffect}),u.map((t,e)=>this.createItem(u,e))]}),0===u.length&&this.props.children,(0,t.jsx)(Tn,{visible:d||s,builderTheme:o.builderTheme,gutter:c}),(0,t.jsx)("canvas",{css:e.css`
                      ${Ln};
                      display: ${d?"block":"none"};
                    `,ref:t=>{this.guideDragOverRef=t}})]})})}))})}}class An extends e.React.PureComponent{constructor(t){super(t),this.layoutConRef=e.React.createRef(),this.onResize=({width:t,height:e})=>{var o;if(this.props.browserSizeMode!==this.props.mainSizeMode)return;if(0===e)return;const{widgetId:i}=this.props;null!=(null===(o=window.runtimeInfo.widgets)||void 0===o?void 0:o[i])?window.runtimeInfo.widgets[i].height=e:window.runtimeInfo.widgets[i]={height:e}},this.handleDebounceResize=e.lodash.debounce(this.onResize,200)}findExtension(){const t=e.ExtensionManager.getInstance().getExtensions(`${e.extensionSpec.ExtensionPoints.LayoutTransformer}`);if((null==t?void 0:t.length)>0){const e=t.find(t=>"ROW"===t.layoutType);this.layoutTransform=null==e?void 0:e.transformLayout}}collectRowItems(){var t;const{layout:e,layouts:o,browserSizeMode:i,mainSizeMode:n}=this.props;null==this.layoutTransform&&this.findExtension();let s=e;o[i]!==e.id&&null!=this.layoutTransform&&(s=this.layoutTransform(e,n,i,a.utils.getAppConfig())),this.finalLayout=s;const l=null!==(t=s.order)&&void 0!==t?t:[],r=[];let d=[],u=0;return r.push(d),l.forEach(t=>{if(s.content[t].isPending)return;const e=s.content[t].bbox,o=parseInt(e.left,10),i=Math.floor(o/mn);i>u&&(d=[],u=i,r.push(d)),d.push(t)}),r}createRow(){const{layout:e,layouts:o}=this.props;return(0,t.jsx)(Pn,{layouts:o,layout:e,transformedLayout:this.finalLayout,isMultiRow:this.numOfRows>1,children:this.props.children})}render(){var o,n;const{layout:s,className:a}=this.props,l=null!==(n=(null!==(o=s.setting)&&void 0!==o?o:hn).style)&&void 0!==n?n:hn.style;return this.numOfRows=this.collectRowItems().length,(0,t.jsxs)("div",{className:(0,e.classNames)("layout d-flex",a),css:e.css`
          width: 100%;
          padding: ${i.styleUtils.toCSSPadding(l.padding)};
        `,"data-layoutid":s.id,ref:this.layoutConRef,children:[this.createRow(),(0,t.jsx)(e.ReactResizeDetector,{targetRef:this.layoutConRef,handleHeight:!0,onResize:this.handleDebounceResize})]})}}const jn=e.ReactRedux.connect(a.utils.mapStateToLayoutProps)(An);var zn;function $n(t,e){var o;return null===(o=t.content)||void 0===o?void 0:o[e]}function Nn(t,o,i){var n,s,a,l,r,d,u;const{layoutId:c,layoutItemId:p}=o,h=t.layouts[c].content[p];if((null==h?void 0:h.type)===e.LayoutItemType.Widget){const e=t.widgets[h.widgetId];return e?null!==(s=null!==(n=null==e?void 0:e.label)&&void 0!==n?n:h.label)&&void 0!==s?s:h.id:i("placeholder")}if((null==h?void 0:h.type)===e.LayoutItemType.Section){return t.sections[h.sectionId].label}return(null==h?void 0:h.gridType)===e.GridItemType.Row?null!==(a=h.label)&&void 0!==a?a:i("gridRow"):(null==h?void 0:h.gridType)===e.GridItemType.Column?null!==(l=h.label)&&void 0!==l?l:i("gridCol"):(null==h?void 0:h.gridType)===e.GridItemType.Tab?null!==(r=h.label)&&void 0!==r?r:i("tabs"):null!==(u=null!==(d=null==h?void 0:h.label)&&void 0!==d?d:null==h?void 0:h.id)&&void 0!==u?u:""}function kn(t,e){const o={id:`${a.utils.getMaximumId(t)+1}`,gridType:e};return{outLayout:t.setIn(["content",o.id],o),outItem:o}}function On(t,e,o){return t.setIn(["content",e,"bbox"],{width:o})}function En(t,e,o,i){return t.setIn(["content",e,o],i)}function Bn(t,e,o,i,n){const s=$n(t,o),a=[].concat(s.children),l=n?i:i+1;return a.splice(l,0,e),En(t,o,"children",a)}function Dn(t,o,i,n,s,a){const l=$n(t,i),{parent:r}=l,d=+l.bbox.width,u=$n(t,r),c=kn(t,n);let p=c.outLayout;const h=c.outItem;if(p=En(p,h.id,"parent",r),p=On(p,h.id,d),u){const t=u.children.indexOf(i);p=function(t,e,o,i){const n=[...$n(t,o).children];return n.splice(i,1,e),En(t,o,"children",n)}(p,h.id,r,t)}return p=En(p,o,"parent",h.id),p=En(p,i,"parent",h.id),p=On(p,o,a?100:50),p=On(p,i,a?100:50),p=En(p,h.id,"children",s?[o,i]:[i,o]),n===e.GridItemType.Tab&&(p=En(p,h.id,"activeTab",1)),i===p.setting.rootItem&&(p=p.setIn(["setting","rootItem"],h.id)),p}function Fn(t,o,i,n,s,a){const l=$n(t,o),{gridType:r}=l;switch(r){case e.GridItemType.Column:case e.GridItemType.Row:return function(t,o,i,n,s,a){const l=o.gridType,r=$n(t,i),{parent:d}=r,u=+r.bbox.width,c=$n(t,d);let p=t;if((null==c?void 0:c.gridType)===n){const t=c.children.indexOf(i);if(l===n){const e=o.children,n=[...c.children];s?n.splice(t,0,...e):n.splice(t+1,0,...e),p=En(p,d,"children",n),p=p.set("content",p.content.without(o.id)),e.forEach(t=>{const e=+p.content[t].bbox.width;p=On(p,t,e*u/200),p=En(p,t,"parent",d)}),p=On(p,i,u/2)}else p=Bn(p,o.id,d,t,s),p=En(p,o.id,"parent",d),p=On(p,o.id,a?100:u/2),p=On(p,i,a?100:u/2),n===e.GridItemType.Tab&&(p=En(p,d,"activeTab",t+1));return p}if(l===n){const t=c.children.indexOf(i);p=Bn(p,i,o.id,s?o.children.length:0,!s),p=En(p,i,"parent",o.id),p=On(p,i,50),o.children.forEach(t=>{const e=+p.content[t].bbox.width;p=On(p,t,.5*e)});const e=[...c.children];return e.splice(t,1,o.id),p=En(p,d,"children",e),p=En(p,o.id,"parent",d),p}return Dn(p,o.id,i,n,s,a)}(t,l,i,n,s,a);case e.GridItemType.Tab:return function(t,o,i,n,s,a){const l=$n(t,i),{parent:r}=l,d=+l.bbox.width,u=$n(t,r);let c=t;if(n===e.GridItemType.Tab){if((null==u?void 0:u.gridType)===e.GridItemType.Tab){const e=u.children.indexOf(i),n=[].concat(u.children);return n.splice(e+1,0,...o.children),c=En(t,r,"children",n),o.children.forEach(t=>{c=En(c,t,"parent",r)}),c=c.set("content",c.content.without(o.id)),c}const n=u.children.indexOf(i),s=[].concat(u.children);return s.splice(n,1,o.id),c=En(t,r,"children",s),c=Bn(c,i,o.id,0,!0),c=En(c,i,"parent",o.id),c=En(c,o.id,"parent",r),c}if((null==u?void 0:u.gridType)===n){const t=u.children.indexOf(i);return c=Bn(c,o.id,r,t,s),c=En(c,o.id,"parent",r),c=On(c,o.id,a?100:d/2),c=On(c,i,a?100:d/2),c}return Dn(c,o.id,i,n,s,a)}(t,l,i,n,s,a);default:return function(t,o,i,n,s,a){const l=$n(t,i),{parent:r}=l,d=+l.bbox.width,u=$n(t,r);let c=t;if((null==u?void 0:u.gridType)===n){const t=u.children.indexOf(i);return c=Bn(c,o.id,r,t,s),c=En(c,o.id,"parent",r),c=On(c,o.id,a?100:d/2),c=On(c,i,a?100:d/2),n===e.GridItemType.Tab&&(c=En(c,r,"activeTab",t+1)),c}return Dn(c,o.id,i,n,s,a)}(t,l,i,n,s,a)}}function Hn(t,i,n){var s,a;const{layoutId:l,layoutItemId:r}=t,d=(0,o.getAppConfigAction)(),{layouts:u}=d.appConfig;let c=u[l];const p=kn(c,e.GridItemType.Plain);c=p.outLayout,c=c.setIn(["content",p.outItem.id,"type"],e.LayoutItemType.Widget).setIn(["content",p.outItem.id,"expandable"],null===(a=null===(s=c.setting)||void 0===s?void 0:s.expandable)||void 0===a||a);const h=c.content[p.outItem.id];c=Fn(c,h.id,r,"h"===i?e.GridItemType.Row:e.GridItemType.Column,n,!1);const g=d.appConfig.setIn(["layouts",l],c);(0,o.getAppConfigAction)(g).exec()}!function(t){t.Top="top",t.Bottom="bottom",t.Left="left",t.Right="right",t.Center="center"}(zn||(zn={}));var Vn=function(t,e,o,i){return new(o||(o=Promise))(function(n,s){function a(t){try{r(i.next(t))}catch(t){s(t)}}function l(t){try{r(i.throw(t))}catch(t){s(t)}}function r(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o(function(t){t(e)})).then(a,l)}r((i=i.apply(t,e||[])).next())})};function Wn(t,o,i){return Vn(this,void 0,void 0,function*(){var n;const{layoutInfo:{layoutId:s,layoutItemId:a},updatedAppConfig:l}=yield W(t,o,i.layoutId);let r=l;return(null===(n=o.layoutInfo)||void 0===n?void 0:n.layoutId)!==i.layoutId&&(r=l.setIn(["layouts",s,"content",a,"gridType"],e.GridItemType.Plain)),{newLayoutItemId:a,updatedAppConfig:r}})}function Gn(t,o,i,n,s){return Vn(this,void 0,void 0,function*(){var a,l;const{layoutId:r}=i;let d=t;const u=yield Wn(t,o,i),c=u.newLayoutItemId;if(d=u.updatedAppConfig,n){const t=function(t,o,i,n){switch(n){case zn.Center:return Fn(t,o,i,e.GridItemType.Tab,!1,!0);case zn.Top:return Fn(t,o,i,e.GridItemType.Column,!0,!1);case zn.Bottom:return Fn(t,o,i,e.GridItemType.Column,!1,!1);case zn.Left:return Fn(t,o,i,e.GridItemType.Row,!0,!1);case zn.Right:return Fn(t,o,i,e.GridItemType.Row,!1,!1)}}(d.layouts[r],c,n,s);d=d.setIn(["layouts",r],t)}else d=d.setIn(["layouts",r,"content",c,"bbox"],{width:100}).setIn(["layouts",r,"content",c,"gridType"],e.GridItemType.Plain).setIn(["layouts",r,"setting","rootItem"],c);return d=d.setIn(["layouts",r,"content",c,"expandable"],null===(l=null===(a=d.layouts[r].setting)||void 0===a?void 0:a.expandable)||void 0===l||l),{appConfig:d,layoutInfo:{layoutId:r,layoutItemId:c}}})}function Un(t,e){const o=t.content[e],{parent:i}=o;if(!i)return t.setting.rootItem===e?t.setIn(["setting","rootItem"],null):t;let n=t.setIn(["content",e],o.without("parent"));const s=t.content[i];if(!s||null==(null==s?void 0:s.children))return t;const a=s.children.indexOf(e);if(a<0)return t;const l=s.children.filter(t=>t!==e);if(1===l.length){const e=l[0];if(n=n.setIn(["content",e,"bbox","width"],s.bbox.width),null!=s.parent){n=n.setIn(["content",e,"parent"],s.parent);const o=t.content[s.parent];if(o){const t=[...o.children],a=t.indexOf(i);t.splice(a,1,e),n=n.setIn(["content",s.parent,"children"],t)}}else n=n.setIn(["content",e],n.content[e].without("parent")),n=n.setIn(["setting","rootItem"],e);n=n.set("content",n.content.without(i))}else if(l.length>1){if(a<l.length){const t=n.content[l[a]];n=n.setIn(["content",l[a],"bbox","width"],t.bbox.width+o.bbox.width)}else{const t=n.content[l[l.length-1]];n=n.setIn(["content",l[l.length-1],"bbox","width"],t.bbox.width+o.bbox.width)}n=n.setIn(["content",i,"children"],l)}return n}var _n=h(5196),Yn=h.n(_n),Xn=h(1625),qn=h.n(Xn);const Zn=[{icon:Yn(),rotate:180,autoFlipIcon:!0,title:t=>t.formatMessage("splitHorizontally2"),visible:()=>!rt(),onClick:t=>{const{layoutId:e,layoutItem:o}=t;Hn({layoutId:e,layoutItemId:o.id},"h",!0)}},{icon:Yn(),autoFlipIcon:!0,title:t=>t.formatMessage("splitHorizontally"),visible:()=>!rt(),onClick:t=>{const{layoutId:e,layoutItem:o}=t;Hn({layoutId:e,layoutItemId:o.id},"h",!1)}},{icon:qn(),rotate:180,title:t=>t.formatMessage("splitVertically2"),visible:()=>!rt(),onClick:t=>{const{layoutId:e,layoutItem:o}=t;Hn({layoutId:e,layoutItemId:o.id},"v",!0)}},{icon:qn(),title:t=>t.formatMessage("splitVertically"),visible:()=>!rt(),onClick:t=>{const{layoutId:e,layoutItem:o}=t;Hn({layoutId:e,layoutItemId:o.id},"v",!1)}},{icon:tt(),title:t=>t.formatMessage("duplicate"),visible:()=>!rt(),onClick:t=>{const{layoutId:e,layoutItem:i}=t;!function(t){const{layoutId:e,layoutItemId:i}=t,n=(0,o.getAppConfigAction)(),s={layoutId:e,layoutItemId:n.duplicateLayoutItemInSameLayout({layoutId:e,layoutItemId:i})};H(n.appConfig,s)}({layoutId:e,layoutItemId:i.id})}},vt,{icon:Z(),title:t=>t.formatMessage("pendingTip"),visible:t=>{const{layoutItem:o}=t,i=o.type===e.LayoutItemType.Widget&&null==o.widgetId;return lt()===e.AppMode.Design&&!rt()&&!i},onClick:t=>{const{layoutId:e,layoutItem:i}=t;!function(t){const e=(0,o.getAppConfigAction)();e.setLayoutItemToPending(t,!0),H(e.appConfig,null)}({layoutId:e,layoutItemId:i.id})}},{icon:X(),title:t=>t.formatMessage("delete"),visible:t=>lt()===e.AppMode.Design&&(!rt()||pt(t.layoutItem)),onClick:t=>{const{layoutItem:e,layoutId:i}=t,n={layoutId:i,layoutItemId:e.id};o.appBuilderSync.publishConfirmDeleteToApp(n)}}];var Jn=h(462),Kn=h.n(Jn),Qn=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const ts=o=>{const i=window.SVG,{className:n}=o,s=Qn(o,["className"]),a=(0,e.classNames)("jimu-icon jimu-icon-component",n);return i?(0,t.jsx)(i,Object.assign({className:a,src:Kn()},s)):(0,t.jsx)("svg",Object.assign({className:a},s))};var es=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const os=o=>{const i=window.SVG,{className:n}=o,s=es(o,["className"]),a=(0,e.classNames)("jimu-icon jimu-icon-component",n);return i?(0,t.jsx)(i,Object.assign({className:a,src:ui()},s)):(0,t.jsx)("svg",Object.assign({className:a},s))};var is=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const ns=o=>{const i=window.SVG,{className:n}=o,s=is(o,["className"]),a=(0,e.classNames)("jimu-icon jimu-icon-component",n);return i?(0,t.jsx)(i,Object.assign({className:a,src:Pt()},s)):(0,t.jsx)("svg",Object.assign({className:a},s))},ss=(0,c.withBuilderTheme)(Ve.WidgetListPopper),as=[].concat(Nt,Zn),ls=e.css`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 10;
  display: flex;
`,rs=e.css`
  ${ls};
  pointer-events: none;
`,ds=t=>{const o=(0,c.getTheme2)();return e.css`
    & > div > .max-grid-item-btn {
      display: none;
      width: 26px;
      height: 26px;
      position: absolute;
      top: 0;
      right: 0;
    }

    & > div > .layout-widget > .add-btn {
      display: ${t?"none":"block"};
    }

    & > div > .add-btn {
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
        background: ${o.ref.palette.white};
        opacity: 0.1;
      }

      .lock-btn {
        background: ${e.polished.rgba(o.ref.palette.white,.6)};
        border-color: ${o.ref.palette.black} !important;
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

    body:not(.design-mode) &:hover > div > .max-grid-item-btn {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `},us=e.css`
  position: absolute;
  left: 0;
  top: 0;
  width: 100% !important;
  height: 100% !important;
  z-index: 30;
  background: var(--ref-palette-neutral-200);
`;function cs(n){const{layoutId:s,layoutItemId:l,onDragStart:r,onDragging:d,onDragEnd:u,className:p}=n,[h,g]=e.React.useState(!1),[m,y]=e.React.useState(!1),[f,v]=e.React.useState(!0),I=e.React.useRef(void 0),x=e.React.useRef(void 0),b=e.React.useRef(void 0),w=e.React.useRef(!1),S=e.React.useRef(void 0),C=(0,c.getTheme2)(),R=e.hooks.useTranslation(Qt),T=e.React.useContext(a.PageContext),M=e.ReactRedux.useSelector(t=>function(t,e,o){var i,n;const s=t.appConfig.layouts[e],a=s.content[o];if(null!==(i=null==a?void 0:a.expandable)&&void 0!==i&&!i)return!1;const l=null===(n=null==s?void 0:s.setting)||void 0===n?void 0:n.rootItem;let r=!1;if(l===o){const t=$n(s,l);null!=t.children&&0!==t.children.length||(r=!0)}return!r}(t,s,l)),L=e.ReactRedux.useSelector(t=>{var o;return(null===(o=t.appInfo)||void 0===o?void 0:o.type)===e.AppType.Template}),P=e.ReactRedux.useSelector(t=>{var o;return(null===(o=t.appRuntimeInfo)||void 0===o?void 0:o.appMode)===e.AppMode.Design}),A=e.ReactRedux.useSelector(t=>{var o,i,n;const s=null!==(n=null===(i=null===(o=t.appConfig)||void 0===o?void 0:o.forBuilderAttributes)||void 0===i?void 0:i.lockLayout)&&void 0!==n&&n;return!(t.appRuntimeInfo.appMode===e.AppMode.Design)||s}),j=e.ReactRedux.useSelector(t=>{var o,i,n;const a=t.appConfig.layouts[s].content[l];if((null==a?void 0:a.type)===e.LayoutItemType.Section)return!0;if((null==a?void 0:a.type)===e.LayoutItemType.Widget){const s=t.appConfig.widgets[a.widgetId];if((null===(o=null==s?void 0:s.manifest)||void 0===o?void 0:o.widgetType)===e.WidgetType.Layout||(null===(n=null===(i=null==s?void 0:s.manifest)||void 0===i?void 0:i.properties)||void 0===n?void 0:n.hasEmbeddedLayout))return null!=s.layouts}return!1}),z=e.ReactRedux.useSelector(t=>t.browserSizeMode===t.appConfig.mainSizeMode),$=e.ReactRedux.useSelector(t=>{const o=t.appConfig.layouts[s].content[l];return(null==o?void 0:o.type)===e.LayoutItemType.Widget&&null==(null==o?void 0:o.widgetId)}),N=e.ReactRedux.useSelector(t=>{const o=t.appConfig.layouts[s].content[l];return(null==o?void 0:o.type)===e.LayoutItemType.Section}),k=e.React.useMemo(()=>(0,e.Immutable)({[e.BrowserSizeMode.Large]:`${s}_${l}_tlarge`,[e.BrowserSizeMode.Medium]:`${s}_${l}_tmedium`,[e.BrowserSizeMode.Small]:`${s}_${l}_tsmall`}),[s,l]);e.hooks.useEffectOnce(()=>{const t=(0,c.getTheme)();I.current=new Ji(x.current,t)}),e.React.useEffect(()=>{P&&M&&g(!1)},[P,M]);const O=e.hooks.useEventCallback(({width:t,height:e})=>{t&&e&&I.current.setSize(t,e,window.devicePixelRatio)}),E=e.hooks.useEventCallback(t=>{w.current=t,document.querySelectorAll("div.grid-layout").forEach(e=>{e.getAttribute("data-layoutid")===s?t&&!e.classList.contains("drop-target")&&e.classList.add("drop-target"):e.classList.contains("drop-target")&&e.classList.remove("drop-target")}),I.current.clear()}),B=e.React.useCallback((t,o,i,n,s,a)=>{if(!w.current)return;const{width:l,height:r}=i;I.current.clear();const d=(0,c.getTheme)();if(I.current.setColor(e.polished.rgba(d.sys.color.primary.light,.2)),$&&Le(t))return void I.current.drawRect({left:0,top:0,width:l,height:r});let u;u=a<=.2*r?{left:0,top:0,width:l,height:r/2}:a>=.8*r?{left:0,top:r/2,width:l,height:r/2}:s<=.2*l?{left:0,top:0,width:l/2,height:r}:s>=.8*l?{left:l/2,top:0,width:l/2,height:r}:{left:.2*l,top:.2*r,width:.6*l,height:.6*r},I.current.drawRect(u)},[$]),D=e.React.useCallback((t,i,n,r,d)=>{let u=(0,o.getAppConfigAction)();if($&&Le(t))return void Ae({layoutId:s,layoutItemId:l},t);const{width:c,height:p}=i;let h;h=d<=.2*p?zn.Top:d>=.8*p?zn.Bottom:r<=.2*c?a.utils.isRTL()?zn.Right:zn.Left:r>=.8*c?a.utils.isRTL()?zn.Left:zn.Right:zn.Center;const g={layoutId:s};Gn(u.appConfig,t,g,l,h).then(t=>{const{appConfig:i,layoutInfo:n}=t;u=(0,o.getAppConfigAction)(i),u.exec(),(0,e.getAppStore)().dispatch(e.appActions.selectionChanged(n))})},[$,s,l]),F=e.React.useCallback(t=>{t.itemType===e.LayoutItemType.Section?je({layoutId:s,layoutItemId:l}):ze({layoutId:s,layoutItemId:l},t),y(!1)},[s,l]),H=e.React.useCallback(t=>{t.stopPropagation(),(0,e.getAppStore)().getState().browserSizeMode!==e.BrowserSizeMode.Small?y(!m):o.appBuilderSync.publishSidePanelToApp({type:"widget",isPlaceholder:!0,isItemAccepted:Le,onSelect:F})},[m,F]),V=e.React.useCallback(()=>{g(!h)},[h]),W=e.React.useCallback(()=>{v(!f)},[f]),G=e.utils.isExpressMode(),U=T.viewOnly||G&&!z;return(0,t.jsxs)(jo,{layoutId:s,layoutItemId:l,resizable:!1,className:p,showDefaultTools:!1,toolItems:N?as:Zn,onDragStart:r,onDragging:d,onDragEnd:u,css:e.css`${ds($)};${h?us:""}`,children:[(!j||f)&&!A&&!U&&!($&&L&&!z)&&(0,t.jsx)(Xe,{css:ls,layouts:k,highlightDragover:!0,onDragOver:B,onDrop:D,onToggleDragoverEffect:E}),$&&(0,t.jsx)("div",{className:(0,e.classNames)("add-btn",{"d-none":U||L&&P||L&&!z}),children:(0,t.jsx)(Je,{title:R("addWidget"),children:(0,t.jsx)(i.Button,{icon:!0,ref:S,css:e.css`width: 36px; height: 36px; padding: 0.5rem;`,onClick:H,"aria-haspopup":!0,children:(0,t.jsx)(Ze,{})})})}),$&&m&&(0,t.jsx)(ss,{referenceElement:S.current,isAccepted:Le,onSelect:F,onClose:()=>{y(!1)}}),(0,t.jsx)("canvas",{css:rs,ref:x}),(0,t.jsx)("div",{css:e.css`
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: transparent;
        pointer-events: none;
      `,ref:b}),(0,t.jsx)(e.ReactResizeDetector,{handleWidth:!0,handleHeight:!0,onResize:O,targetRef:b}),M&&(0,t.jsxs)(i.Button,{icon:!0,className:"max-grid-item-btn p-0",onClick:V,title:R(h?"restore":"maximize"),children:[h&&(0,t.jsx)(ns,{}),!h&&(0,t.jsx)(ts,{})]}),j&&!A&&(0,t.jsxs)("div",{className:(0,e.classNames)("lock-mask",{unlock:!f}),children:[(0,t.jsx)("div",{className:"mask"}),(0,t.jsx)(i.Tooltip,{title:R(f?"unlockGridItem":"lockGridItem"),children:(0,t.jsxs)(i.Button,{className:"lock-btn rounded-circle",size:"sm",type:"tertiary",icon:!0,onClick:W,children:[!f&&(0,t.jsx)(os,{size:14,color:C.ref.palette.black}),f&&(0,t.jsx)(Ee,{size:20,color:C.ref.palette.black})]})})]})]})}const ps=32;function hs(t,e,o,i,n,s){let a=i,l=n;if("row"===o){const o=s?e.width:t.width,n=s?t.width:e.width;i<0&&(a=o>ps?-Math.min(Math.abs(i),o-ps):0),i>0&&(a=n>ps?Math.min(i,n-ps):0)}else n<0&&(l=t.height>ps?-Math.min(Math.abs(n),t.height-ps):0),n>0&&(l=e.height>ps?Math.min(n,e.height-ps):0);return{x:a,y:l}}function gs(t){const o=t.getAttribute("data-layoutid"),i=t.getAttribute("data-layoutitemid");return+(0,e.getAppStore)().getState().appConfig.layouts[o].content[i].bbox.width}function ms(o){var i,n;const{referenceItemId:s,direction:a,layoutId:l,onResizeEnd:r}=o,d=e.React.useRef(void 0),u=e.React.useRef(void 0),c=e.React.useRef(null),p=null!==(n=null===(i=(0,e.getAppStore)().getState().appContext)||void 0===i?void 0:i.isRTL)&&void 0!==n&&n,h=e.ReactRedux.useSelector(t=>t.appRuntimeInfo.appMode===e.AppMode.Design),g=e.ReactRedux.useSelector(t=>{var e,i;return null===(i=null===(e=t.appConfig.layouts[o.layoutId].setting)||void 0===e?void 0:e.resizable)||void 0===i||i}),m=e.ReactRedux.useSelector(t=>{var e,o;return null!==(o=null===(e=t.appConfig.layouts[l].setting)||void 0===e?void 0:e.splitSize)&&void 0!==o?o:8}),y=e.ReactRedux.useSelector(t=>{var e;return null===(e=t.appConfig.layouts[l].setting)||void 0===e?void 0:e.splitColor}),f=e.React.useMemo(()=>{const t=`${m}px`,o=!!h||g;return e.css`
      width: ${"col"===a?"100%":t};
      height: ${"col"===a?t:"100%"};
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
          cursor: ${o?"col-resize":"default"};
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
          cursor: ${o?"row-resize":"default"};
        }
      }
    `},[a,g,h,m,y]);return e.hooks.useEffectOnce(()=>{let t,o,i,n,l,m,y,f,v,I,x,b,w;return e.moduleLoader.loadModule("jimu-core/dnd").then(e=>{const S=e.interact;c.current=S,d.current&&(u.current=S(d.current).origin("parent").draggable({inertia:!1,autoScroll:!1,enabled:!!h||g,modifiers:[S.modifiers.restrict({restriction:"parent"})],lockAxis:"row"===a?"x":"y",onstart:e=>{e.stopPropagation(),t=0,o=0,i=d.current.parentElement.getBoundingClientRect(),n=d.current.previousElementSibling,l=n.getBoundingClientRect(),y=n.style.width,f=n.style.height,m=gs(n),v=d.current.nextElementSibling,I=v.getBoundingClientRect(),b=v.style.width,w=v.style.height,x=gs(v)},onmove:e=>{e.stopPropagation(),t+=e.dx,o+=e.dy;const{x:i,y:s}=hs(l,I,a,t,o,p),r=p?-1:1;"row"===a?(n.style.width=`calc(${m}% + ${i*r}px)`,v.style.width=`calc(${x}% - ${i*r}px)`):(n.style.height=`calc(${m}% + ${s}px)`,v.style.height=`calc(${x}% - ${s}px)`)},onend:e=>{e.stopPropagation(),t+=e.dx,o+=e.dy;const{x:d,y:u}=hs(l,I,a,t,o,p),c=p?-1:1;n.style.width=y,v.style.width=b,n.style.height=f,v.style.height=w,r(s,Math.round(d*c*1e4/i.width)/100,Math.round(1e4*u/i.height)/100)}}))}),()=>{var t;null===(t=u.current)||void 0===t||t.unset(),u.current=null}}),e.React.useEffect(()=>{null!=u.current&&c.current(d.current).draggable(!!h||g)},[g,h]),(0,t.jsx)("div",{ref:d,css:f,className:"grid-split flex-shrink-0",children:(0,t.jsx)("div",{className:(0,e.classNames)("handler",{"horizontal-splitter":"row"===a,"vertical-splitter":"col"===a})})})}var ys=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const fs=e.css`
  .nav-link.grid-tab.highlight-pre {
    position: relative;
    &:after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 50%;
      height: 100%;
      background-color: var(--sys-color-primary-light);
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
      background-color: var(--sys-color-primary-light);
    }
  }
`;function vs(n){const{layoutId:s,layoutItemId:l,onDragStart:r,title:d}=n,u=ys(n,["layoutId","layoutItemId","onDragStart","title"]),c=e.React.useRef(void 0),p=e.React.useRef(!1),h=e.hooks.useTranslation(i.defaultMessages),g=e.React.useContext(a.PageContext),m=e.React.useContext(a.LayoutContext),y=e.ReactRedux.useSelector(t=>{const e=t.appConfig.layouts[s].content[l];return null==e?void 0:e.type}),f=e.ReactRedux.useSelector(t=>Nn(t.appConfig,{layoutId:s,layoutItemId:l},h)),v=e.React.useCallback(()=>g.rootLayoutId,[g.rootLayoutId]),I=e.hooks.useEventCallback(()=>{r(l)}),x=e.hooks.useEventCallback((t,e,o,i,n,s)=>{p.current&&(n<=o.width/2?(c.current.classList.add("highlight-pre"),c.current.classList.remove("highlight-next")):(c.current.classList.remove("highlight-pre"),c.current.classList.add("highlight-next")))}),b=e.hooks.useEventCallback((t,i,n,r,d)=>{const u={layoutId:s};let c=(0,o.getAppConfigAction)(),p=!1;p=r<=i.width/2?!a.utils.isRTL():a.utils.isRTL(),Gn(c.appConfig,t,u,l,zn.Center).then(t=>{const{appConfig:i,layoutInfo:n}=t;if(c=(0,o.getAppConfigAction)(i),p){const t=i.layouts[s].content[l].parent,e=[...i.layouts[s].content[t].children];e.splice(e.indexOf(l),2,n.layoutItemId,l),c.editLayoutItemProperty({layoutId:s,layoutItemId:t},"children",e)}c.exec(),(0,e.getAppStore)().dispatch(e.appActions.selectionChanged(n))})}),w=e.hooks.useEventCallback(t=>{p.current=t,t||(c.current.classList.remove("highlight-pre"),c.current.classList.remove("highlight-next"))});return e.React.useEffect(()=>{c.current.setAttribute("data-layoutid",s),c.current.setAttribute("data-layoutitemid",l);const t=(0,Gt.interact)(c.current).origin("parent");Ht(t,{layoutId:s,layoutItemId:l,itemType:y,useDragHandler:!1,onDragStart:I,rootLayoutId:v,restrict:()=>!0}).draggable({modifiers:[Gt.interact.modifiers.restrictRect({restriction:c.current.parentElement.parentElement})]});const o={current:{props:{layouts:(0,e.Immutable)({[e.BrowserSizeMode.Large]:`${s}_${l}_tlarge`,[e.BrowserSizeMode.Medium]:`${s}_${l}_tmedium`,[e.BrowserSizeMode.Small]:`${s}_${l}_tsmall`}),highlightDragover:!0,onDragOver:x,onDrop:b,onToggleDragoverEffect:w},layoutId:s,pageContext:g,layoutContext:m}},i=_e(c.current,o,".grid-tab");return Ye(c.current,o),()=>{t.unset(),i.unset()}},[s,l]),(0,t.jsx)(i.Tab,Object.assign({},u,{title:f,innerRef:c,innerClassName:"grid-tab",css:fs}))}var Is=h(4221),xs=h.n(Is);let bs=0;const ws={rootBoundary:"viewport",crossAxis:!0},Ss={boundary:document.body,fallbackPlacements:["top-start","bottom-start","right-start","left-start"]},Cs=[{icon:xs(),title:t=>{const{layoutItem:o,formatMessage:i}=t,n=o.gridType;let s;return n===e.GridItemType.Row?s="distributeSpaceH":n===e.GridItemType.Column&&(s="distributeSpaceV"),i(s)},visible:t=>{const{layoutItem:o}=t,i=o.gridType;return(i===e.GridItemType.Row||i===e.GridItemType.Column)&&(ut()||ct())&&!rt()},onClick:t=>{const{layoutId:e}=t,i=t.layoutItem,n=(0,o.getAppConfigAction)(),s=100/i.children.length;i.children.forEach(t=>{n.editLayoutItemProperty({layoutId:e,layoutItemId:t},"bbox",{width:s})}),n.exec()},onMouseEnter:t=>{const{layoutId:e,layoutItem:o}=t;document.querySelector(`div.grid-layout[data-layoutid="${e}"]`).querySelector(`div[data-layoutid="${e}"][data-layoutitemid="${o.id}"]`).classList.add("menu-active")},onMouseLeave:t=>{const{layoutId:e,layoutItem:o}=t;document.querySelector(`div.grid-layout[data-layoutid="${e}"]`).querySelector(`div[data-layoutid="${e}"][data-layoutitemid="${o.id}"]`).classList.remove("menu-active")}}];function Rs(o){const{layoutId:n,layoutItem:s,refElement:a}=o,l=e.hooks.useTranslation(i.defaultMessages);return a?(0,t.jsx)(i.Popper,{placement:"top-start",reference:a,open:!0,unstyled:!0,shiftOptions:ws,flipOptions:Ss,version:bs++,trapFocus:!1,autoFocus:!1,css:e.css`
        background: transparent;
        box-shadow: none;
      `,children:(0,t.jsx)("div",{children:(0,t.jsx)(Kt,{layoutId:n,layoutItem:s,theme:(0,c.getTheme2)(),parentRef:a,tools:Cs,formatMessage:l})})}):null}function Ts(o){const{layout:i,layoutItemId:n,isLast:s,onDragStart:a,onDragging:l,onDragEnd:r,className:d}=o,u=e.React.useMemo(()=>$n(i,n),[i,n]),c=e.React.useMemo(()=>{if(null==u?void 0:u.parent){return $n(i,u.parent).gridType}return null},[u,i]),p=e.ReactRedux.useSelector(t=>{var e,o;const n=null!==(o=null===(e=i.setting)||void 0===e?void 0:e.splitSize)&&void 0!==o?o:8;let s=0;if(null==u?void 0:u.parent){s=$n(i,u.parent).children.length}return n*(s-1)/s}),h=e.React.useCallback(()=>{let t;return t=p>0?`calc(${+u.bbox.width}% - ${p.toFixed(2)}px)`:+u.bbox.width+"%",c===e.GridItemType.Row?e.css`
        height: 100%;
        width: ${t};
      `:c===e.GridItemType.Column?e.css`
        width: 100%;
        height: ${t};
      `:e.css`
      width: 100%;
      height: 100%;
    `},[u.bbox.width,p,c]);return u.gridType===e.GridItemType.Row?(0,t.jsx)(Ms,{className:d,css:h(),layout:i,layoutItemId:n,items:u.children}):u.gridType===e.GridItemType.Column?(0,t.jsx)(Ls,{className:d,css:h(),layout:i,layoutItemId:n,items:u.children}):u.gridType===e.GridItemType.Tab?(0,t.jsx)(Ps,{className:d,css:h(),layout:i,layoutItemId:n,items:u.children,onDragStart:a,onDragEnd:r}):(0,t.jsx)(cs,{css:h(),className:(0,e.classNames)(`d-flex ${d}`,{"is-last":s}),layoutId:i.id,layoutItemId:n,onDragStart:a,onDragging:l,onDragEnd:r})}function Ms(i){const{layout:n,layoutItemId:s,items:a,className:l}=i,r=e.React.useRef(void 0),d=e.ReactRedux.useSelector(t=>{var o;return(null===(o=t.appRuntimeInfo)||void 0===o?void 0:o.appMode)===e.AppMode.Design}),u=e.ReactRedux.useSelector(t=>{const e=t.appRuntimeInfo.selection;return(null==e?void 0:e.layoutId)===n.id&&(null==e?void 0:e.layoutItemId)===s}),p=e.hooks.useEventCallback((t,e)=>{const i=(0,o.getAppConfigAction)(),s=a.indexOf(t),l=a[s+1],r=n.content[t],d=n.content[l];i.editLayoutItemProperty({layoutId:n.id,layoutItemId:t},"bbox",{width:+r.bbox.width+e},!0).editLayoutItemProperty({layoutId:n.id,layoutItemId:l},"bbox",{width:+d.bbox.width-e},!0).exec()}),h=e.hooks.useEventCallback(t=>{var e;const o=r.current.querySelector(`div[data-layoutitemid="${t}"]`);let i,n;(null===(e=o.nextElementSibling)||void 0===e?void 0:e.classList.contains("grid-split"))?(i=o.nextElementSibling,n=i.nextElementSibling):(i=o.previousElementSibling,n=i.previousElementSibling);const s=o.parentElement.getBoundingClientRect(),a=o.getBoundingClientRect();o.style.width=`${o.clientWidth}px`,o.style.height=`${o.clientHeight}px`,o.style.left=a.left-s.left+"px",o.style.top=a.top-s.top+"px",o.style.position="absolute",n.style.width=`${o.clientWidth+i.clientWidth+n.clientWidth}px`,i.style.display="none"}),g=e.hooks.useEventCallback(t=>{var e;const o=r.current.querySelector(`div[data-layoutitemid="${t}"]`);let i,n;(null===(e=o.nextElementSibling)||void 0===e?void 0:e.classList.contains("grid-split"))?(i=o.nextElementSibling,n=i.nextElementSibling):(i=o.previousElementSibling,n=i.previousElementSibling),o.style.width=null,o.style.height=null,o.style.left=null,o.style.top=null,o.style.position=null,n.style.width=null,i.style.display=null}),m=(0,c.getTheme2)();return(0,t.jsxs)("div",{className:`d-flex ${l}`,css:e.css`
        position: ${d?"relative":"initial"};
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
            background: ${m.sys.color.primary.main};
          }
        }
        &.menu-active > .grid-row-item:nth-of-type(4n-1):after {
          background: ${m.sys.color.error.dark};
          opacity: 0.6;
        }
      `,"data-layoutid":n.id,"data-layoutitemid":s,ref:r,children:[a.map((o,i)=>{return s=o,l=i===a.length-1,(0,t.jsxs)(e.React.Fragment,{children:[(0,t.jsx)(Ts,{className:"grid-row-item",layout:n,layoutItemId:s,onDragStart:h,onDragEnd:g},s),!l&&(0,t.jsx)(ms,{referenceItemId:s,layoutId:n.id,direction:"row",onResizeEnd:p})]},s);var s,l}),u&&(0,t.jsx)(Rs,{layoutId:n.id,layoutItem:n.content[s],refElement:r.current})]})}function Ls(i){const{layout:n,layoutItemId:s,items:a,className:l}=i,r=e.React.useRef(void 0),d=e.ReactRedux.useSelector(t=>{var o;return(null===(o=t.appRuntimeInfo)||void 0===o?void 0:o.appMode)===e.AppMode.Design}),u=e.ReactRedux.useSelector(t=>{const e=t.appRuntimeInfo.selection;return(null==e?void 0:e.layoutId)===n.id&&(null==e?void 0:e.layoutItemId)===s}),p=e.hooks.useEventCallback((t,e,i)=>{const s=(0,o.getAppConfigAction)(),l=a.indexOf(t),r=a[l+1],d=n.content[t],u=n.content[r];s.editLayoutItemProperty({layoutId:n.id,layoutItemId:t},"bbox",{width:+d.bbox.width+i},!0).editLayoutItemProperty({layoutId:n.id,layoutItemId:r},"bbox",{width:+u.bbox.width-i},!0).exec()}),h=e.hooks.useEventCallback(t=>{var e;const o=r.current.querySelector(`div[data-layoutitemid="${t}"]`);let i,n;(null===(e=o.nextElementSibling)||void 0===e?void 0:e.classList.contains("grid-split"))?(i=o.nextElementSibling,n=i.nextElementSibling):(i=o.previousElementSibling,n=i.previousElementSibling);const s=o.parentElement.getBoundingClientRect(),a=o.getBoundingClientRect();o.style.width=`${o.clientWidth}px`,o.style.height=`${o.clientHeight}px`,o.style.left=a.left-s.left+"px",o.style.top=a.top-s.top+"px",o.style.position="absolute",n.style.height=`${o.clientHeight+i.clientHeight+n.clientHeight}px`,i.style.display="none"}),g=e.hooks.useEventCallback(t=>{var e;const o=r.current.querySelector(`div[data-layoutitemid="${t}"]`);let i,n;(null===(e=o.nextElementSibling)||void 0===e?void 0:e.classList.contains("grid-split"))?(i=o.nextElementSibling,n=i.nextElementSibling):(i=o.previousElementSibling,n=i.previousElementSibling),o.style.width=null,o.style.height=null,o.style.left=null,o.style.top=null,o.style.position=null,n.style.height=null,i.style.display=null}),m=(0,c.getTheme2)();return(0,t.jsxs)("div",{className:`d-flex flex-column ${l}`,css:e.css`
        position: ${d?"relative":"initial"};
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
            background: ${m.sys.color.primary.main};
          }
        }
        &.menu-active > .grid-col-item:nth-of-type(4n-1):after {
          background: ${m.sys.color.error.dark};
          opacity: 0.6;
        }
      `,"data-layoutid":n.id,"data-layoutitemid":s,ref:r,children:[a.map((o,i)=>{return s=o,l=i===a.length-1,(0,t.jsxs)(e.React.Fragment,{children:[(0,t.jsx)(Ts,{className:"grid-col-item",layout:n,layoutItemId:s,onDragStart:h,onDragEnd:g},s),!l&&(0,t.jsx)(ms,{referenceItemId:s,layoutId:n.id,direction:"col",onResizeEnd:p})]},s);var s,l}),u&&(0,t.jsx)(Rs,{layoutId:n.id,layoutItem:n.content[s],refElement:r.current})]})}function Ps(o){var n;const{layout:s,layoutItemId:a,items:l,className:r,onDragStart:d,onDragEnd:u}=o,c=e.ReactRedux.useSelector(t=>{var o;return(null===(o=t.appRuntimeInfo)||void 0===o?void 0:o.appMode)===e.AppMode.Design}),[p,h]=e.React.useState(0),g=e.React.useRef(void 0),m=e.React.useRef(void 0),y=e.React.useRef(void 0),f=(null===(n=s.setting)||void 0===n?void 0:n.rootItem)===a;e.hooks.useEffectOnce(()=>{let t=(0,Gt.interact)(g.current).origin("parent");return t=Ht(t,{layoutId:s.id,layoutItemId:a,useDragHandler:!1,itemType:e.LayoutItemType.Widget,rootLayoutId:null,restrict:null,onDragStart:d,onDragEnd:u}),t.draggable({modifiers:[Gt.interact.modifiers.restrictRect({restriction:`div.grid-layout[data-layoutid="${s.id}"]`})]}),()=>{t&&(t.unset(),t=null)}}),e.React.useEffect(()=>{g.current&&(f?(0,Gt.interact)(g.current).draggable(!1):(0,Gt.interact)(g.current).draggable(!0))},[f]);const v=e.React.useMemo(()=>{var t;return null!==(t=$n(s,a).activeTab)&&void 0!==t?t:0},[s,a]);e.React.useEffect(()=>{h(v)},[v]);const I=e.hooks.useEventCallback(t=>{const e=l.indexOf(t);h(e)}),x=e.hooks.useEventCallback(t=>{const e=l.indexOf(t);e===l.length-1?h(l.length-2):h(e+1)}),b=e.hooks.useEventCallback(t=>{const e=g.current.querySelector(`div[data-layoutitemid="${t}"]`).getBoundingClientRect();m.current=e;const o=Ft(e);y.current=document.body.appendChild(o);const i=l.indexOf(t);i===l.length-1?h(l.length-2):h(i+1)}),w=e.hooks.useEventCallback((t,e,o)=>{const i=e-m.current.left,n=o-m.current.top;y.current.style.transform=`translate(${Math.round(i)}px, ${Math.round(n)}px) translateZ(0)`}),S=e.hooks.useEventCallback(t=>{document.body.removeChild(y.current),y.current=null});return(0,t.jsx)("div",{className:(0,e.classNames)(r,"exb-rnd"),"data-layoutid":s.id,"data-layoutitemid":a,css:e.css`${c?"relative":"initial"};`,ref:g,children:(0,t.jsx)(i.Tabs,{type:"tabs",fill:!0,scrollable:!0,className:"w-100 h-100",value:l[p],onChange:I,css:e.css`
          & > .tab-content {
            overflow: hidden;
          }
        `,children:[...l].map((e,o)=>((e,o)=>(0,t.jsx)(vs,{id:e,title:`${o}`,layoutId:s.id,layoutItemId:e,onDragStart:x,children:(0,t.jsx)(Ts,{layout:s,layoutItemId:e,onDragStart:b,onDragging:w,onDragEnd:S})},e))(e,o))})})}var As=h(2756),js=h.n(As),zs=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const $s=o=>{const i=window.SVG,{className:n}=o,s=zs(o,["className"]),a=(0,e.classNames)("jimu-icon jimu-icon-component",n);return i?(0,t.jsx)(i,Object.assign({className:a,src:js()},s)):(0,t.jsx)("svg",Object.assign({className:a},s))},Ns=(0,c.withBuilderTheme)(Ve.WidgetListPopper),ks=e.css`
  pointer-events: auto;
`;function Os(t){return e.css`
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
      font-size: 1rem;
      font-weight: 500;
      line-height: 32px;
    }
    .btn {
      margin-right: 8px;
    }
    .action-item {
      width: 32px;
    }
    .action-separator {
      width: 300px;
      height: 1px;
      background-color: var(--ref-palette-neutral-400);
    }
  `}function Es(n){const{layoutId:s,pageContext:a,onTemplateSelected:l,onPageTemplateSelected:r}=n,{formatMessage:d,rootLayoutId:u}=a,[c,p]=e.React.useState(!1),[h,g]=e.React.useState(!1),[m,y]=e.React.useState(!1),f=s===u,v=e.React.useRef(null),I=e.React.useRef(null),x=e.React.useRef(null),b=e.ReactRedux.useSelector(t=>{var o,i,n;const s=null!==(n=null===(i=null===(o=t.appConfig)||void 0===o?void 0:o.forBuilderAttributes)||void 0===i?void 0:i.lockLayout)&&void 0!==n&&n;return t.appRuntimeInfo.appMode===e.AppMode.Design&&!s});e.hooks.useEffectOnce(()=>{f||(0,e.getAppStore)().getState().browserSizeMode===e.BrowserSizeMode.Small||p(!0)});const w=d("chooseTemplate",{type:d("grid").toLocaleLowerCase()}),S=d("chooseTemplate",{type:d("page").toLocaleLowerCase()}),C=t=>{p(!1),l(t)},R=t=>{g(!1),r(t)},T=t=>{y(!1);const i=(0,o.getAppConfigAction)();let n;n=t.itemType===e.LayoutItemType.Section?new Promise(t=>{t(i.addNewSectionToLayout(s))}):i.addNewWidgetToLayout(s,{uri:t.uri,itemId:t.itemId}),n.then(t=>{var o,n;const a={layoutId:s,layoutItemId:t},l=i.appConfig.layouts[s];i.editLayoutProperty(s,"setting.rootItem",t).editLayoutItemProperty(a,"bbox",{width:100}).editLayoutItemProperty(a,"gridType",e.GridItemType.Plain).editLayoutItemProperty(a,"expandable",null===(n=null===(o=l.setting)||void 0===o?void 0:o.expandable)||void 0===n||n),H(i.appConfig,a)})};return b?(0,t.jsxs)("div",{className:"w-100 flex-column justify-content-center align-items-center",css:Os(f),children:[(0,t.jsxs)("div",{className:"d-flex justify-content-center align-items-center",children:[!f&&(0,t.jsxs)(e.React.Fragment,{children:[(0,t.jsx)(Je,{placement:"bottom",title:d("addWidget"),children:(0,t.jsx)(i.Button,{icon:!0,ref:v,css:ks,onClick:t=>{t.stopPropagation(),(0,e.getAppStore)().getState().browserSizeMode!==e.BrowserSizeMode.Small?y(!m):o.appBuilderSync.publishSidePanelToApp({type:"widget",isPlaceholder:!1,isItemAccepted:()=>!0,onSelect:T})},"aria-haspopup":!0,children:(0,t.jsx)(Ze,{size:16})})}),(0,t.jsx)(Je,{placement:"bottom",title:w,children:(0,t.jsx)("div",{className:"action-item",children:(0,t.jsx)(i.Button,{ref:I,icon:!0,onClick:t=>{t.stopPropagation(),(0,e.getAppStore)().getState().browserSizeMode!==e.BrowserSizeMode.Small?p(!c):o.appBuilderSync.publishSidePanelToApp({type:"template",templateMethod:"getGridTemplates",onSelect:C})},css:ks,"aria-haspopup":!0,children:(0,t.jsx)($s,{autoFlip:!0,size:16})})})})]}),f&&(0,t.jsx)(Je,{placement:"bottom",title:S,children:(0,t.jsx)("div",{className:"action-item",children:(0,t.jsx)(i.Button,{ref:x,icon:!0,onClick:t=>{t.stopPropagation(),(0,e.getAppStore)().getState().browserSizeMode!==e.BrowserSizeMode.Small?g(!h):o.appBuilderSync.publishSidePanelToApp({type:"template",templateMethod:"getFullScreenGridPageTemplates",onSelect:R})},css:ks,className:"rounded-circle","aria-haspopup":!0,children:(0,t.jsx)($s,{autoFlip:!0,size:16})})})})]}),f&&(0,t.jsxs)(e.React.Fragment,{children:[(0,t.jsx)("div",{className:"action-separator mt-4"}),(0,t.jsx)("div",{children:(0,t.jsx)("h5",{className:"btn-text mt-2",children:d("dropWidgetToAdd")})})]}),c&&(0,t.jsx)(Ve.TemplateSelector,{templates:(0,Wi.getGridTemplates)(),referenceElement:I.current,onItemSelect:C,onClose:()=>{p(!1)}}),m&&(0,t.jsx)(Ns,{referenceElement:v.current,isAccepted:()=>!0,onSelect:T,onClose:()=>{y(!1)}}),h&&(0,t.jsx)(Ve.TemplateSelector,{templates:(0,Wi.getFullScreenGridPageTemplates)(!1),referenceElement:x.current,onItemSelect:R,onClose:()=>{g(!1)}})]}):null}var Bs=function(t,e,o,i){return new(o||(o=Promise))(function(n,s){function a(t){try{r(i.next(t))}catch(t){s(t)}}function l(t){try{r(i.throw(t))}catch(t){s(t)}}function r(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o(function(t){t(e)})).then(a,l)}r((i=i.apply(t,e||[])).next())})};const Ds=e.css`
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  background: transparent;
  display: flex;
`,Fs=t=>{const o=(0,c.getTheme2)(),n=function(t){var o;const n=i.styleUtils.toCSSPadding(null===(o=null==t?void 0:t.style)||void 0===o?void 0:o.padding);if(n){if(t.paddingColor){const o=n.split(" "),i=t.paddingColor;let s="";const a=window.jimuUA.browser.name.toLowerCase();return"firefox"===a?s="-moz-":"safari"!==a&&"chrome"!==a||(s="-webkit-"),e.css`
        padding: ${n};
        background-image:
        ${s}linear-gradient(270deg, ${i} ${o[0]}, transparent ${o[0]}),
        ${s}linear-gradient(180deg, ${i} ${o[1]}, transparent ${o[1]}),
        ${s}linear-gradient(90deg, ${i} ${o[2]}, transparent ${o[2]}),
        ${s}linear-gradient(0deg, ${i} ${o[3]}, transparent ${o[3]});
      `}return e.css`
      padding: ${n};
    `}}(t);return e.css`
    overflow: hidden;
    position: relative;
    ${n}

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

    .${Et} &.drop-target > .grid-root-drop-area,
    .${Ot} &.drop-target > .grid-root-drop-area {
      display: flex !important;
    }

    .highlight-area {
      background: ${e.polished.rgba(o.sys.color.primary.dark,.2)};
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
  `};class Hs extends e.React.PureComponent{constructor(t){super(t),this.handleDragOver=()=>null,this.handleDragEnter=()=>null,this.handleDragLeave=()=>null,this.handleDrop=(t,i,n)=>{const{layout:s}=this.props,a={layoutId:s.id};let l=(0,o.getAppConfigAction)();Gn(l.appConfig,t,a,null,zn.Center).then(t=>{const{appConfig:i,layoutInfo:n}=t;l=(0,o.getAppConfigAction)(i),l.exec(),(0,e.getAppStore)().dispatch(e.appActions.selectionChanged(n))})},this.handleTemplateSelected=t=>Bs(this,void 0,void 0,function*(){const e=(0,o.getAppConfigAction)(),{layout:i}=this.props;yield e.applyGridTemplate(i.parent.id,t),e.exec()}),this.handlePageTemplateSelected=t=>{const i=(0,o.getAppConfigAction)();this.setState({isLoadingTemplate:!0}),i.applyPageBodyTemplate(this.pageContext.pageId,t).then(()=>{i.exec(),e.lodash.defer(()=>{this.setState({isLoadingTemplate:!1})})}).finally(null)},this.highlight=t=>{this.tipRef.current.classList.add("active",t)},this.clearHighlight=t=>{this.tipRef.current.classList.remove("active",t)};const{layout:i}=this.props;this.fakeLayouts=(0,e.Immutable)({[e.BrowserSizeMode.Large]:`${i.id}_tlarge`,[e.BrowserSizeMode.Medium]:`${i.id}_tmedium`,[e.BrowserSizeMode.Small]:`${i.id}_tsmall`}),this.tipRef=e.React.createRef()}findExtension(){const t=e.ExtensionManager.getInstance().getExtensions(`${e.extensionSpec.ExtensionPoints.LayoutTransformer}`);if((null==t?void 0:t.length)>0){const o=t.find(t=>t.layoutType===e.LayoutType.GridLayout);this.layoutTransform=null==o?void 0:o.transformLayout}}handleDropAtSide(t,i){this.clearHighlight(i);const n=this.props.layout.id;let s=(0,o.getAppConfigAction)();this.tipRef.current.parentElement.classList.remove("drop-target"),function(t,o,i,n){return Vn(this,void 0,void 0,function*(){const{layoutInfo:s}=o;let l,r=t;if((null==s?void 0:s.layoutId)===i){const e=a.searchUtils.findLayoutItem(t,s);if(e.isPending)r=r.setIn(["layouts",i,"content",s.layoutItemId],e.without("isPending"));else{const t=Un(r.layouts[i],s.layoutItemId);r=r.setIn(["layouts",i],t)}l=s.layoutItemId}else{const e=yield Wn(t,o,{layoutId:i});l=e.newLayoutItemId,r=e.updatedAppConfig}const d=r.layouts[i],u=d.setting.rootItem,c=d.content[u];let p;if(n===zn.Left||n===zn.Right){if(c.gridType===e.GridItemType.Row){let t=d;t=On(t,u,100),t=On(t,l,50),t=En(t,l,"parent",u),c.children.forEach(e=>{const o=t.content[e];t=On(t,e,+o.bbox.width/2)});const e=[...c.children];return n===zn.Left?e.unshift(l):e.push(l),t=t.setIn(["content",u,"children"],e),r=r.setIn(["layouts",i],t),{appConfig:r,itemId:l}}p=kn(d,e.GridItemType.Row)}else{if(c.gridType===e.GridItemType.Column){let t=d;t=On(t,u,100),t=On(t,l,50),t=En(t,l,"parent",u),c.children.forEach(e=>{const o=t.content[e];t=On(t,e,+o.bbox.width/2)});const e=[...c.children];return n===zn.Top?e.unshift(l):e.push(l),t=t.setIn(["content",u,"children"],e),r=r.setIn(["layouts",i],t),{appConfig:r,itemId:l}}p=kn(d,e.GridItemType.Column)}let{outLayout:h,outItem:g}=p;return h=h.setIn(["setting","rootItem"],g.id),h=On(h,g.id,100),h=On(h,u,50),h=En(h,u,"parent",g.id),h=On(h,l,50),h=En(h,l,"parent",g.id),h=n===zn.Left||n===zn.Top?En(h,g.id,"children",[l,u]):En(h,g.id,"children",[u,l]),r=r.setIn(["layouts",i],h),{appConfig:r,itemId:l}})}(s.appConfig,t,n,i).then(({appConfig:t,itemId:i})=>{s=(0,o.getAppConfigAction)(t),s.exec(),(0,e.getAppStore)().dispatch(e.appActions.selectionChanged({layoutId:n,layoutItemId:i}))})}render(){var o,i,n;const{layouts:s,layout:l,browserSizeMode:r,mainSizeMode:d,className:u}=this.props,c=s[r]!==l.id;let p=l;c&&(null==this.layoutTransform&&this.findExtension(),null!=this.layoutTransform&&(p=this.layoutTransform(l,d,r)));const{rootItem:h}=null!==(o=p.setting)&&void 0!==o?o:{},g=$n(p,h),m=(0,e.classNames)("layout grid-layout d-flex w-100 h-100",u),y=null!==(n=null===(i=null==g?void 0:g.children)||void 0===i?void 0:i.length)&&void 0!==n?n:0;return(0,t.jsx)(a.PageContext.Consumer,{children:o=>(this.pageContext=o,(0,t.jsxs)("div",{className:m,css:Fs(p.setting),"data-layoutid":p.id,children:[(0,t.jsxs)("div",{"data-layoutid":p.id,className:"trail-container d-flex w-100 h-100",css:e.css`
                  width: 100%;
                `,children:[null==g&&(0,t.jsx)(Xe,{css:Ds,layouts:this.props.layouts,highlightDragover:!0,onDragEnter:this.handleDragEnter,onDragLeave:this.handleDragLeave,onDragOver:this.handleDragOver,onDrop:this.handleDrop,children:(0,t.jsx)("div",{css:e.css`
                        width: 100%;
                        background: var(--cyan-500);
                      `})}),null==g&&!c&&(0,t.jsx)(Es,{layoutId:l.id,pageContext:o,onTemplateSelected:this.handleTemplateSelected,onPageTemplateSelected:this.handlePageTemplateSelected}),g?(0,t.jsx)(Ts,{className:"w-100 h-100",layout:p,layoutItemId:h}):this.props.children]}),y>1&&[zn.Top,zn.Right,zn.Bottom,zn.Left].map(e=>(0,t.jsx)(Xe,{className:`${e} grid-root-drop-area shadow-1`,layouts:this.fakeLayouts,onDrop:t=>{this.handleDropAtSide(t,e)},onDragEnter:()=>{this.highlight(e)},onDragLeave:()=>{this.clearHighlight(e)}},e)),(0,t.jsx)("div",{ref:this.tipRef,className:"highlight-area"})]}))})}}const Vs=e.ReactRedux.connect(a.utils.mapStateToLayoutProps)(Hs);var Ws=h(8736),Gs=h.n(Ws);function Us(o){var n,s;const{layoutId:a,layoutItemId:l}=o,r=e.ReactRedux.useSelector(t=>{var o,i;const n=t.appConfig.layouts[a].content[l];if(!n)return"";if(n.type===e.LayoutItemType.Widget){const e=n.widgetId,i=t.appConfig.widgets[e];return null!==(o=null==i?void 0:i.label)&&void 0!==o?o:""}const s=n.sectionId,r=t.appConfig.sections[s];return null!==(i=null==r?void 0:r.label)&&void 0!==i?i:""}),d=e.ReactRedux.useSelector(t=>{var o,i,n,s;const r=t.appConfig.layouts[a].content[l];if(!r)return"";if(r.type===e.LayoutItemType.Widget){const e=r.widgetId,n=t.appConfig.widgets[e];return"string"==typeof(null==n?void 0:n.icon)?n.icon:null!==(i=null===(o=null==n?void 0:n.icon)||void 0===o?void 0:o.svg)&&void 0!==i?i:""}const d=r.sectionId,u=t.appConfig.sections[d];return"string"==typeof(null==u?void 0:u.icon)?u.icon:null!==(s=null===(n=null==u?void 0:u.icon)||void 0===n?void 0:n.svg)&&void 0!==s?s:Gs()}),u=e.ReactRedux.useSelector(t=>{var e,o;const i=t.appConfig.layouts[a].parent.id;return null===(o=null===(e=t.appConfig.widgets[i].config)||void 0===e?void 0:e.header)||void 0===o?void 0:o.showWidgetIcon}),c=e.ReactRedux.useSelector(t=>{var e,o;const i=t.appConfig.layouts[a].parent.id;return null===(o=null===(e=t.appConfig.widgets[i].config)||void 0===e?void 0:e.header)||void 0===o?void 0:o.widgetIconSize}),p=e.ReactRedux.useSelector(t=>{var e,o;const i=t.appConfig.layouts[a].parent.id;return null===(o=null===(e=t.appConfig.widgets[i].config)||void 0===e?void 0:e.header)||void 0===o?void 0:o.widgetIconColor}),h=e.ReactRedux.useSelector(t=>{var e,o;const i=t.appConfig.layouts[a].parent.id;return null===(o=null===(e=t.appConfig.widgets[i].config)||void 0===e?void 0:e.header)||void 0===o?void 0:o.textStyle});return(0,t.jsx)("div",{className:"label d-flex align-items-center h-100",children:(0,t.jsxs)(e.React.Fragment,{children:[u&&(0,t.jsx)(i.Icon,{icon:d,size:null!=c?c:16,color:p}),(0,t.jsx)("div",{className:"ml-2 text-truncate",css:e.css`
            font-size: ${null!==(n=null==h?void 0:h.size)&&void 0!==n?n:"1rem"};
            font-weight: ${(null==h?void 0:h.bold)?"bold":"normal"};
            font-style: ${(null==h?void 0:h.italic)?"italic":"normal"};
            text-decoration: ${(null==h?void 0:h.underline)?"underline":""} ${(null==h?void 0:h.strike)?"line-through":""};
            color: ${null!==(s=null==h?void 0:h.color)&&void 0!==s?s:"inherit"};
          `,children:r})]})})}var _s=h(655),Ys=h.n(_s),Xs=h(4064),qs=h.n(Xs);const Zs=[{icon:Ys(),title:t=>t.formatMessage("movedown"),disabled:t=>{const{layoutId:e,layoutItem:i}=t,n=(0,o.getAppConfigAction)().appConfig.layouts[e];return n.order.indexOf(i.id)===n.order.length-1},visible:()=>lt()===e.AppMode.Design&&!rt(),onClick:t=>{const{layoutId:e,layoutItem:i}=t,n=(0,o.getAppConfigAction)(),s=n.appConfig.layouts[e],a=[].concat(s.order),l=a.indexOf(i.id);a.splice(l,2,s.order[l+1],s.order[l]),n.editLayoutProperty(e,"order",a),n.exec()}},{icon:qs(),title:t=>t.formatMessage("moveup"),disabled:t=>{var e;const{layoutId:i,layoutItem:n}=t;return(null===(e=(0,o.getAppConfigAction)().appConfig.layouts[i].order)||void 0===e?void 0:e[0])===n.id},visible:()=>lt()===e.AppMode.Design&&!rt(),onClick:t=>{const{layoutId:e,layoutItem:i}=t,n=(0,o.getAppConfigAction)(),s=n.appConfig.layouts[e],a=[].concat(s.order),l=a.indexOf(i.id);a.splice(l-1,2,s.order[l],s.order[l-1]),n.editLayoutProperty(e,"order",a),n.exec()}},{separator:!0}],Js=t=>{const{height:o,gap:n,headerConfig:s,panelConfig:a,isFunctionalWidget:l,isInlineEditing:r,isSection:d}=t,u=null!=s?s:{},c=null!=a?a:{},{padding:p,expandedColor:h,collapsedColor:g,border:m,borderLeft:y,borderRight:f,borderTop:v,borderBottom:I,borderRadius:x}=u,{padding:b,border:w,borderRadius:S,backgroundColor:C,textColor:R}=c;return e.css`
  position: relative;
  touch-action: none;
  user-select: ${ut()&&!r?"none":"auto"};
  & + .foldable-panel {
    margin-top: ${n}px;
  }
  .panel-header {
    padding: ${i.styleUtils.toCSSPadding(p)};
    border: ${i.styleUtils.toCSSBorder(m)};
    border-left: ${i.styleUtils.toCSSBorder(y)};
    border-right: ${i.styleUtils.toCSSBorder(f)};
    border-top: ${i.styleUtils.toCSSBorder(v)};
    border-bottom: ${i.styleUtils.toCSSBorder(I)};
    border-radius: ${i.styleUtils.toCSSBorderRadius(x)};
    background-color: ${null!=h?h:"var(--sys-color-primary-main)"};
    .tool-drag-handler {
      cursor: pointer;
      flex-grow: 1;
      flex-shrink: 1;
    }
  }
  .panel-content {
    padding: ${i.styleUtils.toCSSPadding(b)};
    border: ${i.styleUtils.toCSSBorder(w)};
    border-left: ${i.styleUtils.toCSSBorder(c.borderLeft)};
    border-right: ${i.styleUtils.toCSSBorder(c.borderRight)};
    border-top: ${i.styleUtils.toCSSBorder(c.borderTop)};
    border-bottom: ${i.styleUtils.toCSSBorder(c.borderBottom)};
    border-radius: ${i.styleUtils.toCSSBorderRadius(S)};
    overflow: auto;
    background-color: ${null!=C?C:"none"};
    color: ${null!=R?R:"none"};
    position: relative;
    height: ${o};
    opacity: 1;
    transition: opacity 400ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
  &.collapsed {
    .panel-header {
      background-color: ${null!=g?g:"var(--sys-color-primary-main)"};
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
  .${Et} &.functional-widget {
     pointer-events: none;
   }
   .${Et} &.functional-widget .exb-drop-area {
     pointer-events: all;
   }

   .${Et} &,
   .${Ot} & {
     > div.highlight-tip {
       .tip-content {
         outline-color: var(--ref-palette-neutral-900);
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
        .tip-content {
          height: 100%;
          padding: 1px;
          &:after {
            content: '';
            width: 100%;
            height: 100%;
            outline: 1px dashed var(--ref-palette-neutral-900);
            display: block;
            outline-color: ${!l||d?"var(--ref-palette-neutral-900)":"transparent"};
          }
        }
      }

      &:hover > div.highlight-tip,
      &.hovered > div.highlight-tip {
        display: block;
        .tip-content {
          &:after {
            outline-color: var(--sys-color-primary-main);
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
  `};function Ks(o){var n,s,l,r,d,u,c,p,h,g,m,y,f,v;const{layoutId:I,layoutItem:x,layoutItemId:b,expanded:w,selected:S,resizable:C,isResizing:R,isInlineEditing:T,height:M,gap:L,onExpandedChange:P,onClick:A,onDoubleClick:j,onResizeStart:z,onResizeEnd:$,onResizing:N}=o,k=e.React.useRef(null),O=e.React.useRef(null),E=e.React.useRef({x:0,y:0}),B=e.hooks.useTranslation(),{viewOnly:D}=e.React.useContext(a.PageContext),F=e.ReactRedux.useSelector(t=>{var o,i;if(x.type===e.LayoutItemType.Widget){const e=x.widgetId,i=t.appConfig.widgets[e];return null!==(o=null==i?void 0:i.label)&&void 0!==o?o:""}const n=x.sectionId,s=t.appConfig.sections[n];return null!==(i=null==s?void 0:s.label)&&void 0!==i?i:""}),H=e.ReactRedux.useSelector(t=>x.type===e.LayoutItemType.Widget&&a.utils.isFunctionalWidget(x.widgetId,t.appConfig)),V=e.ReactRedux.useSelector(t=>{var e;const o=t.appConfig.layouts[I].parent.id;return null===(e=t.appConfig.widgets[o].config)||void 0===e?void 0:e.header}),W=e.ReactRedux.useSelector(t=>{var e;const o=t.appConfig.layouts[I].parent.id;return null===(e=t.appConfig.widgets[o].config)||void 0===e?void 0:e.panel}),G=e.ReactRedux.useSelector(t=>x.type===e.LayoutItemType.Section);e.React.useEffect(()=>{let t=(0,Gt.interact)(k.current).origin("parent");t=Ht(t,{layoutId:I,layoutItemId:b,onDragging:null,useDragHandler:!0,itemType:null,rootLayoutId:()=>"",restrict:()=>!1});let e=(0,Gt.interact)(O.current).origin("parent");return e=Yt(e,{layoutItemId:b,restrictEdges:!1,onResizeStart:(t,e,o)=>{const i=O.current.querySelector(".panel-header");let n=o;i&&(n=o-i.clientHeight),z(t,e,n)},onResizing:N,onResizeEnd:$}),()=>{null==t||t.unset(),null==e||e.unset()}},[I,b,z,N,$]),e.React.useEffect(()=>{(0,Gt.interact)(k.current).resizable(C)},[C]);const U=e.React.useCallback(t=>{const{x:e,y:o}=E.current;Math.abs(t.screenX-e)>a.CLICK_TOLERANCE||Math.abs(t.screenY-o)>a.CLICK_TOLERANCE?t.stopPropagation():P(b,!w)},[b,w,P]),_=e.React.useCallback(t=>{if(D||(rt()||!ut())&&!H&&x.type!==e.LayoutItemType.Section)return;t.stopPropagation();const o=new CustomEvent("click",{detail:1,bubbles:!0});o.composedPath=()=>t.nativeEvent.composedPath(),document.dispatchEvent(o),A()},[D,H,x.type,A]),Y=e.React.useCallback(t=>{D||(t.stopPropagation(),j())},[D,j]),X=e.React.useCallback(t=>{E.current={x:t.screenX,y:t.screenY}},[]);const q=null!==(n=null==V?void 0:V.togglePosition)&&void 0!==n?n:"right",Z=(null===(l=null===(s=x.setting)||void 0===s?void 0:s.autoProps)||void 0===l?void 0:l.height)===a.LayoutItemSizeModes.Auto,J=a.utils.shouldUseAspectRatio(null!==(r=x.setting)&&void 0!==r?r:{});let K=M;R?K=M:(Z||J)&&(K="auto");const Q=w?null===(d=null==V?void 0:V.collapseIcon)||void 0===d?void 0:d.svg:null===(u=null==V?void 0:V.expandIcon)||void 0===u?void 0:u.svg;return(0,t.jsxs)("div",{className:(0,e.classNames)("builder-layout-item exb-rnd foldable-panel",{selected:S,collapsed:!w,"no-drag-action":!function(){const t=e.utils.isTouchDevice();return!D&&!T&&(!t||S)}(),"functional-widget":H}),"data-layoutid":I,"data-layoutitemid":b,ref:k,onClick:_,onDoubleClick:Y,onKeyDown:null,css:Js({height:K,gap:L,headerConfig:V,panelConfig:W,isFunctionalWidget:H,isInlineEditing:T,isSection:G}),children:[(0,t.jsxs)("div",{className:"panel d-flex flex-column",ref:O,children:[(0,t.jsxs)("div",{className:(0,e.classNames)("panel-header d-flex align-items-center",{"flex-row-reverse":"left"===q}),onClick:U,onMouseDown:X,onKeyDown:null,role:"group","aria-label":F,children:[(0,t.jsx)("div",{className:"tool-drag-handler",children:I&&b&&(0,t.jsx)(Us,{layoutId:I,layoutItemId:b})}),Q&&(0,t.jsx)("div",{className:(0,e.classNames)("actions",{"ml-auto":"right"===q}),children:(0,t.jsx)(i.Button,{icon:!0,type:"tertiary",size:"sm","aria-expanded":w,title:B(w?"clickToHide":"clickToShow"),"aria-label":B(w?"clickToHide":"clickToShow"),children:(0,t.jsx)(i.Icon,{icon:Q,size:w?null===(p=null===(c=null==V?void 0:V.collapseIcon)||void 0===c?void 0:c.properties)||void 0===p?void 0:p.size:null===(g=null===(h=null==V?void 0:V.expandIcon)||void 0===h?void 0:h.properties)||void 0===g?void 0:g.size,color:w?null===(y=null===(m=null==V?void 0:V.collapseIcon)||void 0===m?void 0:m.properties)||void 0===y?void 0:y.color:null===(v=null===(f=null==V?void 0:V.expandIcon)||void 0===f?void 0:f.properties)||void 0===v?void 0:v.color,autoFlip:!0})})})]}),(0,t.jsx)("div",{className:(0,e.classNames)("panel-content d-flex flex-grow-1 flex-shrink-1"),children:o.children}),S&&(0,t.jsx)(Fe,{layoutId:I,layoutItem:x,top:!1,left:!1,right:!1,bottom:w&&!Z&&!J,resizable:w&&!Z&&!J,draggable:!0,selected:!0,forbidToolbar:!1,toolItems:Zs,showDefaultTools:!0,isInlineEditing:!1,isFunctionalWidget:!0,hasEmbeddedLayout:!1,isSection:!1,hasExtension:!1})]}),(0,t.jsx)("div",{className:"highlight-tip",children:(0,t.jsx)("div",{className:"tip-content"})})]})}function Qs(o){var i,n,s,l;const{layoutId:r,layoutItem:d,layoutItemId:u,gap:c,expanded:p,onResizeEnd:h,onResizeStart:g,onExpandedChange:m}=o,[y,f]=e.React.useState(!1),[v,I]=e.React.useState(0),x=e.React.useRef(0),b=e.React.useRef(0),w=d.type===e.LayoutItemType.Widget,S=d.type===e.LayoutItemType.Section,C=e.ReactRedux.useSelector(t=>{if(w)return k(t,o)},e.ReactRedux.shallowEqual),R=e.ReactRedux.useSelector(t=>{if(S)return a.searchUtils.getSectionInfo(t,d.sectionId)},e.ReactRedux.shallowEqual),T=e.ReactRedux.useSelector(t=>{const e=t.appRuntimeInfo.selection;return(null==e?void 0:e.layoutId)===r&&(null==e?void 0:e.layoutItemId)===u}),M=e.React.useCallback((t,e,o,i,n)=>{f(!1),h(t,e,o,i,n)},[h]),L=e.React.useCallback((t,e,o)=>{b.current=e,x.current=o,f(!0),g(t,e,o)},[g]),P=e.React.useCallback((t,e,o,i,n)=>{I(n)},[]),A=(null===(n=null===(i=d.setting)||void 0===i?void 0:i.autoProps)||void 0===n?void 0:n.height)!==a.LayoutItemSizeModes.Auto,j=a.utils.shouldUseAspectRatio(null!==(s=d.setting)&&void 0!==s?s:{}),z=a.utils.parseAspectRatio(null===(l=d.setting)||void 0===l?void 0:l.aspectRatio);let $;return $=y?`${x.current+v}px`:d.bbox.height,(0,t.jsxs)(Ks,{layoutId:r,layoutItem:d,layoutItemId:u,resizable:A,selected:T,isResizing:y,isInlineEditing:null==C?void 0:C.isInlineEditing,height:$,expanded:p,onExpandedChange:m,onClick:()=>{T||(0,e.getAppStore)().dispatch(e.appActions.selectionChanged({layoutId:r,layoutItemId:u}))},onDoubleClick:()=>{(null==C?void 0:C.supportInlineEditing)&&(0,e.getAppStore)().dispatch(e.appActions.setWidgetIsInlineEditingState(C.widgetId,!0))},onResizeStart:L,onResizing:P,onResizeEnd:M,gap:c,children:[w&&(0,t.jsx)(no,Object.assign({layoutId:r,layoutItemId:u,forceAspectRatio:j,aspectRatio:z},C)),S&&(0,t.jsx)(So,Object.assign({layoutId:r,layoutItemId:u},R))]})}var ta=h(4343),ea=h.n(ta),oa=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const ia=o=>{const i=window.SVG,{className:n}=o,s=oa(o,["className"]),a=(0,e.classNames)("jimu-icon jimu-icon-component",n);return i?(0,t.jsx)(i,Object.assign({className:a,src:ea()},s)):(0,t.jsx)("svg",Object.assign({className:a},s))},na=t=>{const o=null!=t?t:{},{padding:n,collapsedColor:s,border:a,borderLeft:l,borderRight:r,borderTop:d,borderBottom:u,borderRadius:c}=o;return e.css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    pointer-events: none;
    z-index: 1;
    padding: ${i.styleUtils.toCSSPadding(n)};
    border: ${i.styleUtils.toCSSBorder(a)};
    border-left: ${i.styleUtils.toCSSBorder(l)};
    border-right: ${i.styleUtils.toCSSBorder(r)};
    border-top: ${i.styleUtils.toCSSBorder(d)};
    border-bottom: ${i.styleUtils.toCSSBorder(u)};
    border-radius: ${i.styleUtils.toCSSBorderRadius(c)};
    background-color: ${null!=s?s:"var(--sys-color-primary-main)"};
  `};function sa(o){var n,s,a,l,r,d,u,c;const{layoutId:p}=o,h=e.hooks.useTranslation(Qt),g=e.ReactRedux.useSelector(t=>{var e;const o=t.appConfig.layouts[p].parent.id;return null===(e=t.appConfig.widgets[o].config)||void 0===e?void 0:e.header}),m=h("widgetLabel"),y=null===(n=null==g?void 0:g.expandIcon)||void 0===n?void 0:n.svg,f=null==g?void 0:g.textStyle,v=null!==(s=null==g?void 0:g.togglePosition)&&void 0!==s?s:"right",I=null==g?void 0:g.showWidgetIcon,x=null==g?void 0:g.widgetIconSize,b=null==g?void 0:g.widgetIconColor;return(0,t.jsxs)("div",{className:(0,e.classNames)("empty-panel-header d-flex align-items-center",{"flex-row-reverse":"left"===v}),css:na(g),children:[(0,t.jsx)("div",{className:"label d-flex align-items-center flex-grow-1 h-100",children:(0,t.jsxs)(e.React.Fragment,{children:[I&&(0,t.jsx)(ia,{size:null!=x?x:16,color:b}),(0,t.jsx)("div",{className:"ml-2 text-truncate",css:e.css`
              font-size: ${null!==(a=null==f?void 0:f.size)&&void 0!==a?a:"1rem"};
              font-weight: ${(null==f?void 0:f.bold)?"bold":"normal"};
              font-style: ${(null==f?void 0:f.italic)?"italic":"normal"};
              text-decoration: ${(null==f?void 0:f.underline)?"underline":""} ${(null==f?void 0:f.strike)?"line-through":""};
              color: ${null!==(l=null==f?void 0:f.color)&&void 0!==l?l:"inherit"};
            `,children:m})]})}),y&&(0,t.jsx)("div",{className:(0,e.classNames)("actions",{"ml-auto":"right"===v}),children:(0,t.jsx)(i.Button,{icon:!0,type:"tertiary",size:"sm",children:(0,t.jsx)(i.Icon,{autoFlip:!0,icon:y,size:null===(d=null===(r=null==g?void 0:g.expandIcon)||void 0===r?void 0:r.properties)||void 0===d?void 0:d.size,color:null===(c=null===(u=null==g?void 0:g.expandIcon)||void 0===u?void 0:u.properties)||void 0===c?void 0:c.color})})})]})}var aa=h(8416),la=h.n(aa),ra=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const da=o=>{const i=window.SVG,{className:n}=o,s=ra(o,["className"]),a=(0,e.classNames)("jimu-icon jimu-icon-component",n);return i?(0,t.jsx)(i,Object.assign({className:a,src:la()},s)):(0,t.jsx)("svg",Object.assign({className:a},s))};var ua=h(5741),ca=h.n(ua),pa=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const ha=o=>{const i=window.SVG,{className:n}=o,s=pa(o,["className"]),a=(0,e.classNames)("jimu-icon jimu-icon-component",n);return i?(0,t.jsx)(i,Object.assign({className:a,src:ca()},s)):(0,t.jsx)("svg",Object.assign({className:a},s))},ga=e.css`
  // position: sticky;
  // top: 0;
  margin-bottom: 4px;
  z-index: 1;
`;function ma(o){const{onExpandAll:n,onCollapseAll:s}=o,a=e.hooks.useTranslation();return(0,t.jsxs)("div",{css:ga,className:"d-flex align-items-center justify-content-end",children:[(0,t.jsx)(i.Tooltip,{title:a("expandAll"),children:(0,t.jsx)(i.Button,{variant:"text",color:"inherit",icon:!0,size:"sm",onClick:n,children:(0,t.jsx)(ha,{})})}),(0,t.jsx)(i.Tooltip,{title:a("collapseAll"),children:(0,t.jsx)(i.Button,{variant:"text",color:"inherit",icon:!0,size:"sm",onClick:s,className:"ml-1",children:(0,t.jsx)(da,{})})})]})}function ya(t,e){const o=t[e.browserSizeMode]||t[e.appConfig.mainSizeMode],i=e.appConfig.layouts[o].parent.id;return e.appConfig.widgets[i]}const fa=e.css`
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  background: transparent;
`,va=e.css`
  ${fa};
  z-index: 20;
  pointer-events: none;
`,Ia=10;function xa(t,e){return e.find(e=>!t.includes(e))}class ba extends e.React.PureComponent{constructor(t){super(t),this.handleExpandedChange=(t,e)=>{if(e)this.props.singleMode?this.setState({expandedItems:[t]}):this.state.expandedItems.includes(t)||this.setState({expandedItems:[...this.state.expandedItems,t]});else if(this.state.expandedItems.includes(t)){const e=this.state.expandedItems.filter(e=>e!==t);this.setState({expandedItems:e})}},this.expandAll=()=>{const{layout:t}=this.props;this.setState({expandedItems:[...t.order]})},this.collapseAll=()=>{this.setState({expandedItems:[]})},this.handleItemResizeStart=(t,e,o)=>{const{layout:i}=this.props,n=i.content[t].bbox;a.utils.isPercentage(n.height)&&(this.domRect=this.ref.getBoundingClientRect()),this.resizingRect={width:e,height:o}},this.handleItemResizeEnd=(t,e,i,n,s)=>{const{layout:l}=this.props,r=l.content[t].bbox;let d;d=a.utils.isPercentage(r.height)?`${(100*(this.resizingRect.height+s)/this.domRect.height).toFixed(2)}%`:`${Math.round(this.resizingRect.height+s)}px`,this.childRects=[],this.domRect=null;(0,o.getAppConfigAction)().editLayoutItemProperty({layoutId:this.props.layout.id,layoutItemId:t},"bbox",{height:d}).exec()},this.handleDragOver=(t,e,o,i)=>{var n,s;let a=null!==(n=i.handlerRect)&&void 0!==n?n:i;if(this.canvasPane.clear(),(null===(s=this.childRects)||void 0===s?void 0:s.length)>0){const{insertY:t,refId:e}=nn(o,a,this.childRects);this.referenceId=e,a={top:t-5,width:o.width-Ia,left:5,height:Ia}}else a={top:o.height/2-5,width:o.width-Ia,left:5,height:Ia};this.canvasPane.setColor(this.builderTheme.sys.color.primary.light),this.canvasPane.drawRect(a)},this.handleToggleDragoverEffect=t=>{t&&(this.referenceId=null,this.collectBounds(null)),this.setState({isDragover:t})},this.handleDrop=(t,i,n)=>{this.canvasPane.clear();const{layout:s}=this.props;let l=0;null!=this.referenceId?l=s.order.indexOf(this.referenceId):null!=s.order&&(l=s.order.length);W((0,o.getAppConfigAction)().appConfig,t,s.id).then(s=>{const{layoutInfo:r,updatedAppConfig:d}=s,u=o.LayoutServiceProvider.getInstance().getServiceByType(e.LayoutType.AccordionLayout).processAfterItemAdded(d,t,r,{currentSizeMode:null,containerRect:i,itemRect:n,insertIndex:l});a.utils.changeLayout(u,r)}).finally(null),this.referenceId=null,this.childRects=[]};const i=this.props.expandByDefault.includes(",")?this.props.expandByDefault.split(","):[];this.state={isDragover:!1,expandedItems:i}}componentDidMount(){this.canvasPane=new Ji(this.canvasRef),this.canvasPane.setSize(this.ref.clientWidth,this.ref.scrollHeight)}componentDidUpdate(t){var e,o,i,n,s,a,l,r,d;if(this.canvasPane.setSize(this.ref.clientWidth,this.ref.scrollHeight),t.singleMode!==this.props.singleMode&&this.props.singleMode)this.state.expandedItems.length>1&&this.setState({expandedItems:[this.state.expandedItems[0]]});else if((null===(e=t.layout.order)||void 0===e?void 0:e.length)!==(null===(o=this.props.layout.order)||void 0===o?void 0:o.length)){const e=null!==(n=null===(i=t.layout.order)||void 0===i?void 0:i.length)&&void 0!==n?n:0,o=null!==(a=null===(s=this.props.layout.order)||void 0===s?void 0:s.length)&&void 0!==a?a:0;if(e<o){const e=xa(null!==(l=t.layout.order)&&void 0!==l?l:[],this.props.layout.order);this.props.singleMode?this.setState({expandedItems:[e]}):this.setState({expandedItems:[...this.state.expandedItems,e]})}if(e>o){const e=xa(null!==(r=this.props.layout.order)&&void 0!==r?r:[],t.layout.order);if(null===(d=this.state.expandedItems)||void 0===d?void 0:d.includes(e)){const t=this.state.expandedItems.filter(t=>t!==e);this.setState({expandedItems:t})}}}}collectBounds(t){const{layout:e}=this.props;this.childRects=[],this.domRect=this.ref.getBoundingClientRect();const o=this.ref.querySelectorAll(":scope > div.exb-rnd");return(null==o?void 0:o.length)>0&&o.forEach(o=>{const i=o.getAttribute("data-layoutitemid");if(t!==i&&e.order.includes(i)){const t=a.utils.relativeClientRect(o.getBoundingClientRect(),this.domRect);t.id=i,this.childRects.push(t)}}),this.childRects.sort((t,e)=>t.top-e.top)}isEmpty(){var t;const{layout:e}=this.props,o=null!==(t=e.order)&&void 0!==t?t:[];return!(o.length>0&&o.some(t=>!e.content[t].isPending))}createItem(e,o,i){const{layout:n,showDefaultTools:s,gap:a}=this.props;return n.content[e].isPending?null:(0,t.jsx)(Qs,{layoutId:n.id,layoutItemId:e,gap:a,expanded:this.state.expandedItems.includes(e),layoutItem:n.content[e],draggable:!0,resizable:!0,showDefaultTools:s,onExpandedChange:this.handleExpandedChange,onResizeStart:this.handleItemResizeStart,onResizeEnd:this.handleItemResizeEnd},e)}render(){var o;const{layout:n,className:s,showToggleAll:l,padding:r,singleMode:d}=this.props,u=null!==(o=n.order)&&void 0!==o?o:[],c=Object.assign({},n.setting),p=this.isEmpty();return(0,t.jsx)(a.PageContext.Consumer,{children:o=>{this.builderTheme=o.builderTheme;const a={display:this.state.isDragover?"block":"none"};return(0,t.jsx)("div",{className:(0,e.classNames)("layout foldable-layout w-100",s),css:e.css`position: relative;`,"data-layoutid":n.id,children:(0,t.jsxs)("div",{className:"h-100 w-100 d-flex flex-column",ref:t=>{this.ref=t},css:e.css`
                  overflow: auto;
                  overflow-x: hidden;
                  padding: ${i.styleUtils.toCSSPadding(r)}
                `,children:[l&&!d&&(0,t.jsx)(ma,{onExpandAll:this.expandAll,onCollapseAll:this.collapseAll}),(0,t.jsx)(Xe,{css:fa,layouts:this.props.layouts,highlightDragover:!0,onDragOver:this.handleDragOver,onDrop:this.handleDrop,onToggleDragoverEffect:this.handleToggleDragoverEffect}),u.map((t,e)=>this.createItem(t,e,c)),p&&(0,t.jsx)(sa,{layoutId:n.id}),p&&this.props.children,(0,t.jsx)("canvas",{css:va,style:a,ref:t=>{this.canvasRef=t}})]})})}})}}const wa=(0,e.createSelector)([(t,e)=>a.utils.mapStateToLayoutProps(t,e),(t,e)=>{var o,i;return null!==(i=null===(o=ya(e.layouts,t).config)||void 0===o?void 0:o.singleMode)&&void 0!==i&&i},(t,e)=>{var o,i;return null!==(i=null===(o=ya(e.layouts,t).config)||void 0===o?void 0:o.showToggleAll)&&void 0!==i&&i},(t,e)=>{var o,i;return null!==(i=null===(o=ya(e.layouts,t).config)||void 0===o?void 0:o.gap)&&void 0!==i?i:4},(t,e)=>{var o;return null===(o=ya(e.layouts,t).config)||void 0===o?void 0:o.padding},(t,e)=>{var o,i,n;const s=e.layouts[t.browserSizeMode]||e.layouts[t.appConfig.mainSizeMode],a=t.appConfig.layouts[s],l=null!==(i=null===(o=ya(e.layouts,t).config)||void 0===o?void 0:o.expandedItems)&&void 0!==i?i:[],r=[];return l.length>0&&Object.keys(null!==(n=a.content)&&void 0!==n?n:{}).forEach(t=>{const e=a.content[t];l.includes(e.widgetId)&&r.push(t)}),r.join(",")}],(t,e,o,i,n,s)=>Object.assign({singleMode:e,showToggleAll:o,gap:i,padding:n,expandByDefault:s},t)),Sa=e.ReactRedux.connect(wa)(ba);const Ca={min:16,space:10};class Ra extends e.React.PureComponent{constructor(){super(...arguments),this.state={isResizing:!1,dw:0,dh:0},this.onResizeStart=(t,e,o)=>{this.initWidth=e,this.initHeight=o,this.props.onResizeStart(t),this.setState({isResizing:!0})},this.onResizing=(t,e,o,i,n)=>{this.setState({dw:i,dh:n,isResizing:!0})},this.onResizeEnd=(t,e,o,i,n,s)=>{const{layoutItem:a}=this.props;this.props.onResizeEnd(t,e,o,i,n,a),this.setState({isResizing:!1,dw:0,dh:0})}}isStretchInCrossAxis(){const{layoutItem:t}=this.props;return function(t){var e,o,i;return(null!==(i=null===(o=null===(e=t.setting)||void 0===e?void 0:e.autoProps)||void 0===o?void 0:o.height)&&void 0!==i?i:R.Stretch)===R.Stretch}(t)}calWidth(t,e){return function(t,e){var o,i;return(null===(o=t.autoProps)||void 0===o?void 0:o.width)===R.Auto||"ratio"===t.widthMode?"ratio"===t.widthMode?{width:"auto",flex:"0 0 auto"}:{width:"auto"}:(null===(i=t.autoProps)||void 0===i?void 0:i.width)===R.Stretch||"fit"===t.widthMode?{flex:"1 1 auto"}:{width:e.width,flexShrink:0}}(t,e)}getStyle(t,o,i,n){const{layoutItem:s}=this.props,{dw:a,dh:l,isResizing:r}=this.state,d=s.bbox||{},u=this.calWidth(t,d);return u.height=o||i||n?"auto":d.height,r&&(a||l)&&(u.height=this.initHeight+l,u.width=this.initWidth+a),function(t,o,i){var n,s,a;const l=(null===(n=o.autoProps)||void 0===n?void 0:n.width)===R.Auto;return e.css`
    align-self: ${i?"stretch":null!==(a=null===(s=o.style)||void 0===s?void 0:s.alignSelf)&&void 0!==a?a:"flex-start"};
    width: ${$(t,"width")};
    height: ${$(t,"height")};
    flex: ${t.flex};
    flex-shrink: ${t.flexShrink};
    min-width: ${l?"unset":null};
  `}(u,t,o&&!i)}render(){var o,i,n,s;const{layoutId:l,layoutItem:r,draggable:d,resizable:u,selectable:c,showDefaultTools:p}=this.props;if(!r||r.isPending)return null;const h=r.setting||{},g=null!==(i=null===(o=h.autoProps)||void 0===o?void 0:o.width)&&void 0!==i?i:R.Custom,m=(null===(n=h.autoProps)||void 0===n?void 0:n.height)===R.Auto,y=(null===(s=h.autoProps)||void 0===s?void 0:s.width)===R.Auto,f=(0,e.classNames)("flex-row-layout-item",{"d-flex":g!==R.Auto}),v=this.isStretchInCrossAxis(),I=a.utils.shouldUseAspectRatio(h),x=a.utils.parseAspectRatio(h.aspectRatio);return(0,t.jsx)(jo,{css:this.getStyle(h,v,I,m),layoutId:l,layoutItemId:r.id,onResizeStart:this.onResizeStart,onResizing:this.onResizing,onResizeEnd:this.onResizeEnd,top:!m&&!v&&!I,bottom:!m&&!v&&!I,left:g===R.Custom||I,right:g===R.Custom||I,draggable:d,resizable:u,selectable:c,showDefaultTools:p,onClick:this.props.onClick,className:f,forceAspectRatio:I,aspectRatio:x,autoWidth:y,autoHeight:m})}}const Ta=t=>e.css`
  height: 100%;
  overflow: hidden;
  justify-content: ${t.justifyContent};
  & > div.flex-row-layout-item ~ div.flex-row-layout-item {
    margin-left: ${t.space}px;
  }
`,Ma=e.css`
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  background: transparent;
`,La=e.css`
  ${Ma};
  z-index: 20;
  pointer-events: none;
`,Pa=10;class Aa extends e.React.PureComponent{constructor(){super(...arguments),this.state={isDragover:!1},this.handleItemResizeStart=t=>{const{layout:e}=this.props;this.domRect=this.ref.getBoundingClientRect();const o=this.ref.querySelector(`div.exb-rnd[data-layoutid="${e.id}"][data-layoutitemid="${t}"]`).getBoundingClientRect();this.resizingRect=a.utils.relativeClientRect(o,this.domRect)},this.handleItemResizeEnd=(t,e,i,n,s,l)=>{const{layout:r}=this.props,d=r.content[t].bbox;let u;u=a.utils.isPercentage(d.width)?`${(100*(this.resizingRect.width+n)/this.domRect.width).toFixed(4)}%`:`${Math.round(this.resizingRect.width+n)}px`;const c={width:u,height:Math.round(this.resizingRect.height+s)};this.childRects=[],this.domRect=null;(0,o.getAppConfigAction)().editLayoutItemProperty({layoutId:this.props.layout.id,layoutItemId:t},"bbox",c).exec()},this.handleDragOver=(t,o,i,n)=>{var s;let l=n;if(this.canvasPane.clear(),(null===(s=this.childRects)||void 0===s?void 0:s.length)>0){const{insertX:t,refId:e}=function(t,e,o){const i=a.utils.isRTL(),n=e.left+e.width/2;let s,l,r=!1;if(o.some((e,a)=>{const d=e.left+e.width/2;if(i){if(d<n){if(0===a)s=e.left+e.width+(t.width-e.left-e.width)/2;else{const t=o[a-1];s=(e.left+e.width+t.left)/2}r=!0,l=e.id}}else if(d>n){if(0===a)s=e.left/2;else{const t=o[a-1];s=(e.left+t.left+t.width)/2}r=!0,l=e.id}return r}),!r){const e=o[o.length-1];s=i?e.left/2:(e.left+e.width+t.width)/2}return{refId:l,insertX:s}}(i,l,this.childRects);this.referenceId=e,l={left:t-5+this.ref.scrollLeft,height:i.height-Pa,top:5,width:Pa}}else l={left:i.width/2-5,height:i.height-Pa,top:5,width:Pa};this.canvasPane.setColor(e.polished.rgba(this.builderTheme.sys.color.primary.light,.5)),this.canvasPane.drawRect(l)},this.handleToggleDragoverEffect=(t,e)=>{var o;t&&(this.referenceId=null,this.collectBounds((null===(o=e.layoutInfo)||void 0===o?void 0:o.layoutId)===this.props.layout.id?e.layoutInfo.layoutItemId:null)),this.setState({isDragover:t})},this.handleDrop=(t,i,n)=>{var s;this.canvasPane.clear();const{layout:l}=this.props;let r=0;if(null!=this.referenceId){if(r=l.order.indexOf(this.referenceId),(null===(s=t.layoutInfo)||void 0===s?void 0:s.layoutId)===l.id){l.order.indexOf(t.layoutInfo.layoutItemId)<r&&(r-=1)}}else null!=l.order&&(r=l.order.length);W((0,o.getAppConfigAction)().appConfig,t,l.id).then(s=>{const{layoutInfo:l,updatedAppConfig:d}=s,u=o.LayoutServiceProvider.getInstance().getServiceByType(e.LayoutType.FlexRowLayout).processAfterItemAdded(d,t,l,{currentSizeMode:null,containerRect:i,itemRect:n,insertIndex:r});a.utils.changeLayout(u,l)}).finally(null),this.referenceId=null,this.childRects=[]}}componentDidMount(){this.canvasPane=new Ji(this.canvasRef),this.canvasPane.setSize(this.ref.clientWidth,this.ref.clientHeight)}componentDidUpdate(){this.canvasPane.setSize(this.ref.clientWidth,this.ref.clientHeight)}collectBounds(t){const{layout:e}=this.props;this.childRects=[],this.domRect=this.ref.getBoundingClientRect();const o=this.ref.parentNode.querySelectorAll(`div[data-layoutid="${e.id}"] > .trail-container > div.exb-rnd`);return(null==o?void 0:o.length)>0&&o.forEach(o=>{const i=o.getAttribute("data-layoutitemid");if(t!==i&&e.order.includes(i)){const t=a.utils.relativeClientRect(o.getBoundingClientRect(),this.domRect);t.id=i,this.childRects.push(t)}}),this.childRects.sort((t,e)=>a.utils.isRTL()?e.left-t.left:t.left-e.left)}createItem(e,o){const{layout:i,itemDraggable:n,itemResizable:s,itemSelectable:a,showDefaultTools:l}=this.props;return(0,t.jsx)(Ra,{index:o,layoutId:i.id,layoutItemId:e,layoutItem:i.content[e],draggable:n,resizable:s,selectable:a,showDefaultTools:l,onResizeStart:this.handleItemResizeStart,onResizeEnd:this.handleItemResizeEnd},e)}isEmpty(){var t;const{layout:e}=this.props,o=null!==(t=e.order)&&void 0!==t?t:[];return!(o.length>0&&o.some(t=>!e.content[t].isPending))}render(){var o;const{layout:n,className:s}=this.props,l=null!==(o=n.order)&&void 0!==o?o:[],r=Object.assign({},Ca,n.setting),d=this.isEmpty();return(0,t.jsx)(a.PageContext.Consumer,{children:o=>{this.builderTheme=o.builderTheme,this.theme=o.theme;const a={position:"relative",minWidth:r.min},u=(0,e.classNames)("layout flex-row-layout",s),c={display:this.state.isDragover?"block":"none"};return(0,t.jsxs)("div",{className:u,ref:t=>{this.ref=t},style:a,"data-layoutid":n.id,children:[(0,t.jsxs)("div",{className:"trail-container d-flex w-100",css:e.css`
                  position: ${d?"absolute":null};
                  padding: ${i.styleUtils.toCSSPadding(r.padding)};
                  ${Ta(r)};
                `,children:[(0,t.jsx)(Xe,{css:Ma,layouts:this.props.layouts,highlightDragover:!0,onDragOver:this.handleDragOver,onDrop:this.handleDrop,onToggleDragoverEffect:this.handleToggleDragoverEffect}),l.map((t,e)=>this.createItem(t,e))]}),d&&!ct()&&this.props.children,(0,t.jsx)("canvas",{css:La,style:c,ref:t=>{this.canvasRef=t}})]})}})}}const ja=e.ReactRedux.connect(a.utils.mapStateToLayoutProps)(Aa);var za=h(5562);class $a extends e.React.PureComponent{constructor(t){super(t),this.modalStyle={position:"absolute",top:"0",bottom:"0",width:"100%",height:"auto",paddingBottom:"1px"},this.onTransitionSettingChange=t=>{const{layoutId:i,layoutItemId:n}=this.props,s=(0,o.getAppConfigAction)(),a=s.appConfig.layouts[i].content[n];s.editSectionProperty(a.sectionId,"transition",t).exec(),(null==t?void 0:t.type)!==e.TransitionType.None&&this.previewTransition()},this.onHoverEffectChange=t=>{var i,n;const{layoutId:s,layoutItemId:a}=this.props,l=(0,o.getAppConfigAction)();(null===(n=(null!==(i=l.appConfig.layouts[s].content[a].setting)&&void 0!==i?i:(0,e.Immutable)({})).hoverEffect)||void 0===n?void 0:n.type)!==t.type&&l.editLayoutItemProperty({layoutId:s,layoutItemId:a},"setting.hoverEffect",t).exec(),t.type!==e.HoverType.None&&o.builderAppSync.publishHoverPreviewToApp({layoutInfo:{layoutId:s,layoutItemId:a},id:(0,e.getNextAnimationId)()})},this.onEffectSettingChange=(t,i)=>{const n=e.AnimationTriggerType.ScrollIntoView,{layoutId:s,layoutItemId:a,setting:l}=this.props,r=l||(0,e.Immutable)({}),d=t===e.AnimationPlayMode.OneByOne?"oneByOneEffect":"effect";this.props.onSettingChange({layoutId:s,layoutItemId:a},r.setIn([d,n],i)),(null==i?void 0:i.type)!==e.AnimationType.None&&o.builderAppSync.publishAnimationPreviewToApp({layoutInfo:{layoutId:s,layoutItemId:a},playMode:t,id:(0,e.getNextAnimationId)()})},this.onSectionOneByOneEffectSettingChange=t=>{this.onEffectSettingChange(e.AnimationPlayMode.OneByOne,t)},this.previewAnimation=t=>{this.hasAnimationEffect()&&o.builderAppSync.publishAnimationPreviewToApp({layoutInfo:{layoutId:this.props.layoutId,layoutItemId:this.props.layoutItemId},playMode:t,id:(0,e.getNextAnimationId)()})},this.previewTransition=(t=!1)=>{var i,n,s;const{sectionId:l}=this.props,r=a.searchUtils.getSectionInfo((0,e.getAppStore)().getState().appStateInBuilder,l),{views:d}=r;if((null==d?void 0:d.length)>1){let a=null===(s=null===(n=null===(i=(0,e.getAppStore)().getState().appStateInBuilder)||void 0===i?void 0:i.appRuntimeInfo)||void 0===n?void 0:n.sectionNavInfos)||void 0===s?void 0:s[l];if(!a){const t=jt(r),o=d.indexOf(t),i=o>0?o-1:o+1;a=(0,e.Immutable)({currentViewId:t,previousViewId:d[i]})}o.builderAppSync.publishSectionNavInfoToApp(l,a.set("playId",(0,e.getNextAnimationId)()).set("withOneByOne",t).asMutable())}},this.previewTransitionAndOnebyOne=()=>{this.previewTransition(!0)},this.previewOneByOneInSection=()=>{this.previewAnimation(e.AnimationPlayMode.OneByOne)},this.previewHover=()=>{this.hasHoverEffect()&&o.builderAppSync.publishHoverPreviewToApp({layoutInfo:{layoutId:this.props.layoutId,layoutItemId:this.props.layoutItemId},id:(0,e.getNextAnimationId)()})},this.onPlayModeChange=t=>{const{layoutId:e,layoutItemId:i}=this.props;(0,o.getAppConfigAction)().editLayoutItemProperty({layoutId:e,layoutItemId:i},"setting.effectPlayMode",t).exec()},this.switchToIn=()=>{this.setState({animationType:"in"})},this.switchToTransition=()=>{this.setState({animationType:"transition"})},this.switchToHover=()=>{this.setState({animationType:"hover"})},this.state={animationType:"in"}}hasAnimationEffect(){var t,o;const{setting:i}=this.props,n=null===(t=null==i?void 0:i.effect)||void 0===t?void 0:t[e.AnimationTriggerType.ScrollIntoView],s=null===(o=null==i?void 0:i.oneByOneEffect)||void 0===o?void 0:o[e.AnimationTriggerType.ScrollIntoView];return n&&n.type!==e.AnimationType.None||s&&s.type!==e.AnimationType.None}hasHoverEffect(){const{setting:t}=this.props,o=null==t?void 0:t.hoverEffect;return o&&o.type!==e.HoverType.None}render(){var o,n;const{formatMessage:s,supportOneByOne:a,isSection:l,transitionType:r,transitionDirection:d,setting:u}=this.props,{animationType:c}=this.state,p=null===(o=null==u?void 0:u.effect)||void 0===o?void 0:o[e.AnimationTriggerType.ScrollIntoView],h=null===(n=null==u?void 0:u.oneByOneEffect)||void 0===n?void 0:n[e.AnimationTriggerType.ScrollIntoView];return(0,t.jsxs)(Ve.SettingSection,{role:"group","aria-label":s("animation"),title:s("animation"),children:[l&&(0,t.jsx)(Ve.SettingRow,{children:(0,t.jsxs)(i.AdvancedButtonGroup,{className:"w-100",css:e.css`
              border-bottom: 1px solid var(--sys-color-primary-main);
              .jimu-btn {
                width: 50%;
                border-radius: 2px 2px 0 0;
              }
            `,children:[(0,t.jsx)(i.Button,{active:"in"===c,onClick:this.switchToIn,children:s("in")}),(0,t.jsx)(i.Button,{className:"ml-1",active:"transition"===c,onClick:this.switchToTransition,children:s("transition")})]})}),"in"===c&&(0,t.jsx)(Ve.SettingRow,{children:(0,t.jsx)(za.AnimationSettingComponent,{effectSetting:p,oneByOneSetting:h,onSettingChange:this.onEffectSettingChange,previewEnabled:!0,supportAsOne:!0,supportOneByOne:a,onPreviewClicked:this.previewAnimation,formatMessage:s})}),"transition"===c&&(0,t.jsx)(Ve.SettingRow,{flow:"wrap",children:(0,t.jsx)(za.TransitionSetting,{transition:{type:r,direction:d},transitionLabel:s("view"),oneByOneEffect:h,onOneByOneChange:this.onSectionOneByOneEffectSettingChange,onTransitionChange:this.onTransitionSettingChange,onPreviewTransitionClicked:this.previewTransition,onPreviewOneByOneClicked:this.previewOneByOneInSection,onPreviewAsAWhoneClicked:this.previewTransitionAndOnebyOne,formatMessage:s})})]})}}const Na=(0,e.createSelector)([(t,e)=>{var o,i;const{layoutId:n,layoutItemId:s}=e,a=null===(i=null===(o=t.appStateInBuilder)||void 0===o?void 0:o.appConfig)||void 0===i?void 0:i.layouts[n].content[s];return null==a?void 0:a.setting},(t,o)=>{var i,n;const{layoutId:s,layoutItemId:a}=o,l=null===(n=null===(i=t.appStateInBuilder)||void 0===i?void 0:i.appConfig)||void 0===n?void 0:n.layouts[s].content[a];return(null==l?void 0:l.type)===e.LayoutItemType.Widget},(t,o)=>{var i,n,s,a,l,r;const{layoutId:d,layoutItemId:u}=o,c=null===(n=null===(i=t.appStateInBuilder)||void 0===i?void 0:i.appConfig)||void 0===n?void 0:n.layouts[d].content[u];if((null==c?void 0:c.type)===e.LayoutItemType.Widget){const o=null===(s=t.appStateInBuilder)||void 0===s?void 0:s.appConfig.widgets[c.widgetId],i=null===(l=null===(a=null==o?void 0:o.manifest)||void 0===a?void 0:a.properties)||void 0===l?void 0:l.forbidOneByOneEffect;return(null===(r=null==o?void 0:o.manifest)||void 0===r?void 0:r.widgetType)===e.WidgetType.Layout&&!i}return!1},(t,o)=>{var i,n,s;const{layoutId:a,layoutItemId:l}=o,r=null===(n=null===(i=t.appStateInBuilder)||void 0===i?void 0:i.appConfig)||void 0===n?void 0:n.layouts[a].content[l];if((null==r?void 0:r.type)===e.LayoutItemType.Section)return null===(s=t.appStateInBuilder)||void 0===s?void 0:s.appConfig.sections[r.sectionId]}],(t,e,o,i)=>{var n,s;return{setting:t,isWidget:e,supportOneByOne:o,isSection:null!=i,transitionType:null===(n=null==i?void 0:i.transition)||void 0===n?void 0:n.type,transitionDirection:null===(s=null==i?void 0:i.transition)||void 0===s?void 0:s.direction,sectionId:null==i?void 0:i.id}}),ka=e.ReactRedux.connect(Na)($a);class Oa extends e.React.PureComponent{constructor(){super(...arguments),this.onBackgroundStyleChange=t=>{this.updateStyle("background",t)},this.onForegroundChange=t=>{this.updateStyle("textColor",t)},this.onBothChange=(t,o)=>{var i;const n=(0,e.Immutable)(null!==(i=this.props.style)&&void 0!==i?i:{});this.props.onStyleChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItemId},n.set("background",t).set("textColor",o))},this.updateBorder=t=>{var o;this.updateStyle("border",t);const i=(0,e.Immutable)(null!==(o=this.props.style)&&void 0!==o?o:{});this.props.onStyleChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItemId},i.set("border",t).without("borderTop").without("borderLeft").without("borderRight").without("borderBottom"))},this.updateBorderSide=(t,o)=>{var i;const n=(0,e.Immutable)(null!==(i=this.props.style)&&void 0!==i?i:{});this.props.onStyleChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItemId},n.set(e.lodash.camelCase(`border-${t}`),o).without("border"))},this.updateRadius=t=>{this.updateStyle("borderRadius",t)},this.updateShadow=t=>{this.updateStyle("boxShadow",t)},this.formatMessage=t=>this.props.formatMessage(t)}updateStyle(t,o){var i;const n=(0,e.Immutable)(null!==(i=this.props.style)&&void 0!==i?i:{});this.props.onStyleChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItemId},n.set(t,o))}allowCoverBackground(){var t,i,n;const{layoutId:s,layoutItemId:a}=this.props,l=(0,o.getAppConfigAction)().appConfig,r=l.layouts[s].content[a];if(r.type===e.LayoutItemType.Widget){const e=r.widgetId;return null===(n=null===(i=null===(t=l.widgets[e])||void 0===t?void 0:t.manifest)||void 0===i?void 0:i.properties)||void 0===n?void 0:n.coverLayoutBackground}return!1}allowAnimation(){const{layoutId:t}=this.props;return(0,o.getAppConfigAction)().appConfig.layouts[t].type!==e.LayoutType.AccordionLayout}allowBorder(){var t,i,n;const{layoutId:s,layoutItemId:a}=this.props,l=(0,c.getTheme2Module)();if(c.mapping.whetherIsNewTheme(l)){const l=(0,o.getAppConfigAction)().appConfig,r=l.layouts[s].content[a];if(r.type===e.LayoutItemType.Widget){const e=l.widgets[r.widgetId];if(e){return!(null!==(n=null===(i=null===(t=e.manifest)||void 0===t?void 0:t.properties)||void 0===i?void 0:i.useOwnBorder)&&void 0!==n&&n)}}}return!0}render(){const{layoutId:e,layoutItemId:o}=this.props,i=this.props.style||{};return(0,t.jsxs)("div",{className:"common-layout-item-setting",children:[this.allowAnimation()&&(0,t.jsx)(ka,{layoutId:e,layoutItemId:o,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage}),!this.props.isSection&&!this.allowCoverBackground()&&(0,t.jsx)(za.ThemeBackgroundSection,{background:i.background,onChange:this.onBackgroundStyleChange,hasForeground:!0,foreground:i.textColor,onForegroundChange:this.onForegroundChange,onBothChange:this.onBothChange}),this.allowBorder()&&(0,t.jsx)(za.ThemeBorderSection,{border:i.border,borderTop:i.borderTop,borderLeft:i.borderLeft,borderRight:i.borderRight,borderBottom:i.borderBottom,borderRadius:i.borderRadius,onBorderChange:this.updateBorder,onBorderSideChange:this.updateBorderSide,onBorderRadiusChange:this.updateRadius},`${e}-${o}`),(0,t.jsx)(za.ThemeBoxShadowSection,{value:i.boxShadow,onChange:this.updateShadow})]})}}class Ea extends e.React.PureComponent{constructor(){super(...arguments),this.updateRotation=t=>{var o;const i=(0,e.Immutable)(null!==(o=this.props.setting)&&void 0!==o?o:{});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItemId},i.setIn(["style","transform","rotate"],t))},this.formatMessage=t=>this.props.formatMessage(t)}render(){var o,n,s;const a=this.props.setting||{};return(0,t.jsx)(Ve.SettingRow,{label:this.formatMessage("rotation"),className:"rotation-setting",children:(0,t.jsx)(i.NumericInput,{"aria-label":this.formatMessage("rotation"),value:null!==(s=null===(n=null===(o=a.style)||void 0===o?void 0:o.transform)||void 0===n?void 0:n.rotate)&&void 0!==s?s:0,min:-360,max:360,precision:2,onChange:this.updateRotation,formatter:t=>`${t}\xb0`,parser:t=>t.replace("\xb0",""),css:e.css`width: 72px;`,size:"sm"})})}}var Ba=h(4005),Da=h.n(Ba),Fa=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const Ha=o=>{const i=window.SVG,{className:n}=o,s=Fa(o,["className"]),a=(0,e.classNames)("jimu-icon jimu-icon-component",n);return i?(0,t.jsx)(i,Object.assign({className:a,src:Da()},s)):(0,t.jsx)("svg",Object.assign({className:a},s))},Va=[i.DistanceUnits.PIXEL,i.DistanceUnits.PERCENTAGE];class Wa extends e.React.PureComponent{constructor(t){super(t),this.updateBBox=(t,e)=>{const o=this.props.layoutItem.bbox,{distance:n,unit:s}=e,l=o[t];let r=n.toFixed(2);if(a.utils.isPercentage(l)&&s===i.DistanceUnits.PIXEL){const e=this.getSizeOfContainer();null!=e&&(r="left"===t||"right"===t||"width"===t?Math.round(parseFloat(l)*e.width/100):Math.round(parseFloat(l)*e.height/100))}else if(!a.utils.isPercentage(l)&&s===i.DistanceUnits.PERCENTAGE){const e=this.getSizeOfContainer();null!=e&&(r="left"===t||"right"===t||"width"===t?(100*parseFloat(l)/e.width).toFixed(2):(100*parseFloat(l)/e.height).toFixed(2))}this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o.set(t,e.unit===i.DistanceUnits.PERCENTAGE?`${r}%`:`${r}px`))},this.flipLeftRight=a.utils.isRTL()}getStyle(){return e.css`
      .position-setting {
        background-color: var(--ref-palette-neutral-500);
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
        background-color: var(--ref-palette-neutral-800);
        margin: 4px 0;
        position: relative;
        overflow: visible;

        &.stretch {
          background-color: transparent;
          border: 1px solid var(--ref-palette-neutral-800);
        }
        .h-arrow, .v-arrow {
          display: none;
          .arrow-icon {
            color: var(--ref-palette-neutral-800);
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
          background: var(--sys-color-primary-dark);
          border: 2px solid var(--sys-color-primary-main) !important;
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
          border-left: 2px solid var(--ref-palette-neutral-800);
          &.selected:before {
            position: absolute;
            right: -10px;
            top: 50%;
            transform: translateY(-50%);
            content: '';
            height: 2px;
            width: 10px;
            background-color: var(--sys-color-primary-main);
          }
        }
        &.top {
          top: 6px;
          border-top: 2px solid var(--ref-palette-neutral-800);
          &.selected:after {
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            content: '';
            width: 2px;
            height: 10px;
            background-color: var(--sys-color-primary-main);
          }
        }
        &.bottom {
          bottom: 6px;
          border-bottom: 2px solid var(--ref-palette-neutral-800);
          &.selected:after {
            position: absolute;
            top: -10px;
            left: 50%;
            transform: translateX(-50%);
            content: '';
            width: 2px;
            height: 10px;
            background-color: var(--sys-color-primary-main);
          }
        }
        &.right {
          right: 6px;
          border-right: 2px solid var(--ref-palette-neutral-800);
          &.selected:before {
            position: absolute;
            left: -10px;
            top: 50%;
            transform: translateY(-50%);
            content: '';
            height: 2px;
            width: 10px;
            background-color: var(--sys-color-primary-main);
          }
        }
      }

      .from-left {
        border-left: 2px solid var(--sys-color-primary-main);
        &.is-auto {
          border-left-color: var(--ref-palette-neutral-800);
        }
        &.allow-change:hover {
          border-left-color: var(--sys-color-primary-main);
        }
      }
      .from-top {
        border-top: 2px solid var(--sys-color-primary-main);
        &.is-auto {
          border-top-color: var(--ref-palette-neutral-800);
        }
        &.allow-change:hover {
          border-top-color: var(--sys-color-primary-main);
        }
      }
      .from-right {
        border-right: 2px solid var(--sys-color-primary-main);
        &.is-auto {
          border-right-color: var(--ref-palette-neutral-800);
        }
        &.allow-change:hover {
          border-right-color: var(--sys-color-primary-main);
        }
      }
      .from-bottom {
        border-bottom: 2px solid var(--sys-color-primary-main);
        &.is-auto {
          border-bottom-color: var(--ref-palette-neutral-800);
        }
        &.allow-change:hover {
          border-bottom-color: var(--sys-color-primary-main);
        }
      }
      /* .line-h.is-auto,
      .line-v.is-auto {
        border-color: var(--ref-palette-neutral-800);
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
            border-top-color: var(--sys-color-primary-main);
          }
        }
        &:after {
          content: '';
          height: 0;
          width: 100%;
          border-top: 2px solid var(--sys-color-primary-main);
        }
        &.is-auto:after {
          border-top-style: dashed;
          border-top-color: var(--ref-palette-neutral-800);
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
            border-left-color: var(--sys-color-primary-main);
          }
        }
        &:after {
          content: '';
          width: 0;
          height: 100%;
          border-left: 2px solid var(--sys-color-primary-main);
        }
        &.is-auto:after {
          border-left-style: dashed;
          border-left-color: var(--ref-palette-neutral-800);
        }
      }

      .auto-label {
        width: 16px;
        height: 16px;
        background: var(--sys-color-primary-main);
        border: 1px solid var(--ref-palette-neutral-500);
        font-size: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--ref-palette-neutral-400);
      }

      .style-setting--input-unit {
        &:hover {
          input.jimu-numeric-input-input {
            background-color: var(--ref-palette-neutral-300);
          }
          .style-setting--unit-selector {
            background-color: var(--ref-palette-neutral-300);
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
          background-color: var(--ref-palette-neutral-500);
          &:focus {
            background-color: var(--ref-palette-neutral-300);
          }
        }
        .style-setting--unit-selector {
          background-color: var(--ref-palette-neutral-500);
          color: var(--ref-palette-neutral-900);
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
        color: var(--ref-palette-neutral-900);
      }
    `}inputUnit(e){const{layoutItem:o,formatMessage:n}=this.props,s=i.utils.stringOfLinearUnit(o.bbox[e]);return(0,t.jsx)("div",{className:"pos-label",role:"group","aria-label":n(e),children:(0,t.jsx)(za.InputUnit,{units:Va,min:-1/0,max:1/0,value:s,onChange:t=>{this.updateBBox(e,t)}})})}getSizeOfContainer(){const t=this.querySelector(`div.fixed-layout[data-layoutid="${this.props.layoutId}"]`);return null==t?void 0:t.getBoundingClientRect()}getSizeOfItem(){const{layoutId:t,layoutItem:e}=this.props,o=this.querySelector(`div.exb-rnd[data-layoutid="${t}"][data-layoutitemid="${e.id}"]`);return null==o?void 0:o.getBoundingClientRect()}querySelector(t){var o;const i=document.querySelector(`iframe[name="${e.APP_FRAME_NAME_IN_BUILDER}"]`);if(null!=i){return(null!==(o=i.contentDocument)&&void 0!==o?o:i.contentWindow.document).querySelector(t)}return null}switchAuto(t,o,i){var n,s;const{layoutId:l,layoutItem:r}=this.props,d=null!==(n=r.setting)&&void 0!==n?n:(0,e.Immutable)({});let u=null!==(s=r.bbox)&&void 0!==s?s:(0,e.Immutable)({});if(i&&null==u[t]){const e=this.getSizeOfContainer(),o=this.getSizeOfItem();switch(t){case"left":u=u.set(t,a.utils.toRatio(o.left,e.width));break;case"right":u=u.set(t,a.utils.toRatio(e.width-o.right,e.width));break;case"top":u=u.set(t,a.utils.toRatio(o.top,e.height));break;case"bottom":u=u.set(t,a.utils.toRatio(e.height-o.bottom,e.height))}this.props.onPosChange({layoutId:l,layoutItemId:r.id},u)}this.props.onSettingChange({layoutId:l,layoutItemId:r.id},d.setIn(["autoProps",t],!i).setIn(["autoProps",o],i))}checkAutoProps(t){const e=fi(this.props.layoutItem.bbox,t);return{leftAuto:null==e.left||t.hCenter&&"50%"===e.left,rightAuto:null==e.right||t.hCenter&&"50%"===e.left,topAuto:null==e.top||t.vCenter&&"50%"===e.top,bottomAuto:null==e.bottom||t.vCenter&&"50%"===e.top}}checkOrigin(t,e,o,i){let n=t,s=e,l=o,r=i;return t===e&&(n=a.utils.isRTL(),s=!n),o===i&&(l=!1,r=!0),{top:l,bottom:r,left:n,right:s}}allowChangeAutoProps(t){var e;const o=this.props.layoutItem.setting,i=null!==(e=null==o?void 0:o.autoProps)&&void 0!==e?e:{};return!(a.utils.getLayoutItemSizeMode(t,this.props.layoutItem.bbox,i)===a.LayoutItemSizeModes.Stretch||"width"===t&&(null==o?void 0:o.hCenter)||"height"===t&&(null==o?void 0:o.vCenter))}getOrigin(t,e,o,i){const{formatMessage:n}=this.props;return t||e?o||e?o||i?t||i?"":this.flipLeftRight?n("BR"):n("BL"):this.flipLeftRight?n("BL"):n("BR"):this.flipLeftRight?n("TL"):n("TR"):this.flipLeftRight?n("TR"):n("TL")}render(){const{layoutItem:o,widthMode:n,heightMode:l,formatMessage:r}=this.props;if(null==o)return null;const d=e.lodash.assign({},s,o.setting),{leftAuto:u,rightAuto:c,topAuto:p,bottomAuto:h}=this.checkAutoProps(d),{top:g,bottom:m,left:y,right:f}=this.checkOrigin(u,c,p,h),v=this.allowChangeAutoProps("width"),I=this.allowChangeAutoProps("height");return(0,t.jsxs)("div",{css:this.getStyle(),className:"w-100",children:[(0,t.jsx)("div",{className:"position-setting rounded-2",children:(0,t.jsxs)("div",{className:"content d-flex justify-content-center align-items-center",children:[(0,t.jsx)("div",{className:"d-flex w-half flex-column justify-content-center align-items-center",children:(0,t.jsxs)("div",{className:"d-flex w-100 justify-content-center align-items-center",children:[(0,t.jsx)(i.Tooltip,{placement:"bottom",title:v?r(u?"changeToCustom":"changeToAuto"):"",children:(0,t.jsx)("div",{className:(0,e.classNames)("from-left line-h flex-grow-1 flex-shrink-1",{"is-auto":u,"allow-change":v}),onClick:v?this.switchAuto.bind(this,"left","right",u):null})}),u?null:this.inputUnit("left")]})}),(0,t.jsxs)("div",{className:"d-flex h-100 flex-column justify-content-center align-items-center box-column",children:[(0,t.jsxs)("div",{className:"d-flex h-half w-100 flex-column justify-content-center align-items-center",children:[(0,t.jsx)(i.Tooltip,{placement:"bottom",title:I?r(p?"changeToCustom":"changeToAuto"):"",children:(0,t.jsx)("div",{className:(0,e.classNames)("from-top line-v flex-grow-1 flex-shrink-1",{"is-auto":p,"allow-change":I}),onClick:I?this.switchAuto.bind(this,"top","bottom",p):null})}),p?null:this.inputUnit("top")]}),(0,t.jsxs)("div",{className:(0,e.classNames)("box-item rounded-2",{stretch:n===a.LayoutItemSizeModes.Stretch||l===a.LayoutItemSizeModes.Stretch,"stretch-w":n===a.LayoutItemSizeModes.Stretch,"stretch-h":l===a.LayoutItemSizeModes.Stretch}),children:[(0,t.jsx)("div",{className:"h-arrow",children:(0,t.jsx)(Ha,{className:"arrow-icon"})}),(0,t.jsx)("div",{className:"v-arrow",children:(0,t.jsx)(Ha,{className:"arrow-icon",rotate:90})})]}),(0,t.jsxs)("div",{className:"d-flex h-half w-100 flex-column justify-content-center align-items-center",children:[(0,t.jsx)(i.Tooltip,{placement:"bottom",title:I?r(h?"changeToCustom":"changeToAuto"):"",children:(0,t.jsx)("div",{className:(0,e.classNames)("from-bottom line-v flex-grow-1 flex-shrink-1",{"is-auto":h,"allow-change":I}),onClick:I?this.switchAuto.bind(this,"bottom","top",h):null})}),h?null:this.inputUnit("bottom")]})]}),(0,t.jsx)("div",{className:"d-flex w-half flex-column justify-content-center align-items-center",children:(0,t.jsxs)("div",{className:"d-flex w-100 justify-content-center align-items-center",children:[(0,t.jsx)(i.Tooltip,{placement:"bottom",title:v?r(c?"changeToCustom":"changeToAuto"):"",children:(0,t.jsx)("div",{className:(0,e.classNames)("from-right line-h flex-grow-1 flex-shrink-1",{"is-auto":c,"allow-change":v}),onClick:v?this.switchAuto.bind(this,"right","left",c):null})}),c?null:this.inputUnit("right")]})}),(0,t.jsx)("div",{className:(0,e.classNames)("anchor top left",{selected:!y&&!g})}),(0,t.jsx)("div",{className:(0,e.classNames)("anchor top right",{selected:!f&&!g})}),(0,t.jsx)("div",{className:(0,e.classNames)("anchor bottom left",{selected:!y&&!m})}),(0,t.jsx)("div",{className:(0,e.classNames)("anchor bottom right",{selected:!m&&!f})})]})}),(0,t.jsx)("div",{className:"origin-tip d-flex justify-content-center align-item-center",children:this.getOrigin(y,g,f,m)})]})}}const Ga=[a.LayoutItemSizeModes.Auto,a.LayoutItemSizeModes.Custom,a.LayoutItemSizeModes.Stretch],Ua=[a.LayoutItemSizeModes.Custom,a.LayoutItemSizeModes.Stretch],_a=[...[mi[1][1],mi[1][2],mi[1][3],mi[1][4],{separator:!0},mi[0][1],mi[0][2],mi[0][3]].map(t=>Object.assign(Object.assign({},t),{title:t.title,label:null})),[{icon:r(),caret:!1},mi[0][4],mi[0][5],mi[0][6],{separator:!0},mi[0][7],mi[0][8],mi[0][9]]];class Ya extends e.React.PureComponent{constructor(t){super(t),this.updateBBox=(t,e)=>{var o;let n=this.props.layoutItem.bbox;const{distance:s,unit:l}=e,r=n[t],d=this.getSizeOfContainer();let u,c=s.toFixed(2);if(a.utils.isPercentage(r)&&l===i.DistanceUnits.PIXEL?d&&(c="left"===t||"right"===t||"width"===t?Math.round(parseFloat(r)*d.width/100):Math.round(parseFloat(r)*d.height/100),u=c):a.utils.isPercentage(r)||l!==i.DistanceUnits.PERCENTAGE||(d&&(c="left"===t||"right"===t||"width"===t?(100*parseFloat(r)/d.width).toFixed(4):(100*parseFloat(r)/d.height).toFixed(4)),u=parseFloat(r)),u||l!==i.DistanceUnits.PERCENTAGE)u||l!==i.DistanceUnits.PIXEL||(u=s);else{const e="width"===t?d.width:d.height;u=Math.round(s*e/100)}if(n=n.set(t,l===i.DistanceUnits.PERCENTAGE?`${c}%`:`${c}px`),"ratio"===(null===(o=this.props.layoutItem.setting)||void 0===o?void 0:o.heightMode)){const e=a.utils.parseAspectRatio(this.props.layoutItem.setting.aspectRatio);if("width"===t){const t=u*e;if(a.utils.isPercentage(n.height)){const e=(100*t/d.height).toFixed(4);n=n.set("height",`${e}%`)}else n=n.set("height",`${Math.round(t)}px`)}else{const t=u/e;if(a.utils.isPercentage(n.width)){const e=(100*t/d.width).toFixed(4);n=n.set("width",`${e}%`)}else n=n.set("width",`${Math.round(t)}px`)}}this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},n)},this.updateMode=(t,i)=>{var n;const s=null!==(n=this.props.layoutItem.setting)&&void 0!==n?n:(0,e.Immutable)({}),l={layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id};if(i===a.LayoutItemSizeModes.Custom){const e=this.getSizeOfContainer(),n=this.getSizeOfItem();if(e&&n){const a=(100*n[t]/e[t]).toFixed(4);return void(0,o.getAppConfigAction)().editLayoutItemProperty(l,"setting",s.setIn(["autoProps",t],i)).editLayoutItemProperty(l,`bbox.${t}`,`${a}%`).exec()}}if(i===a.LayoutItemSizeModes.Stretch){let e=this.props.layoutItem.bbox;const n=(0,o.getAppConfigAction)();if("height"===t&&s.vCenter&&"50%"===e.top){const o=parseFloat(e.height);if(a.utils.isPercentage(e.height)){const t=((100-o)/2).toFixed(1);e=e.set("top",`${t}%`).set("bottom",`${t}%`)}else{const t=this.getSizeOfContainer(),i=Math.round((t.height-o)/2);e=e.set("top",`${i}px`).set("bottom",`${i}px`)}return void n.editLayoutItemProperty(l,"bbox",e).editLayoutItemProperty(l,"setting",s.setIn(["autoProps",t],i)).exec()}if("width"===t&&s.hCenter&&"50%"===e.left){const o=parseFloat(e.width);if(a.utils.isPercentage(e.width)){const t=((100-o)/2).toFixed(1);e=e.set("left",`${t}%`).set("right",`${t}%`)}else{const t=this.getSizeOfContainer(),i=Math.round((t.width-o)/2);e=e.set("left",`${i}px`).set("right",`${i}px`)}return void n.editLayoutItemProperty(l,"bbox",e).editLayoutItemProperty(l,"setting",s.setIn(["autoProps",t],i)).exec()}}this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},s.setIn(["autoProps",t],i))},this.updateLockParent=t=>{let o=this.props.layoutItem.setting||(0,e.Immutable)({});o=o.set("lockParent",t.target.checked),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)},this.toggleHeightMode=()=>{let t=this.props.layoutItem.setting||(0,e.Immutable)({});const o="ratio"===t.heightMode?"fixed":"ratio";if(t=t.set("heightMode",o),"ratio"===o){const e=this.getSizeOfItem();e&&(t=t.set("aspectRatio",Number((e.height/e.width).toFixed(2))).setIn(["autoProps","height","AUTO"]))}this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},t)},this.updateAspectRatio=t=>{let o=this.props.layoutItem.setting||(0,e.Immutable)({});o=o.set("aspectRatio",t),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)},this.flipLeftRight=a.utils.isRTL(),this.state={enableToolbar:!1}}componentDidMount(){this.ref&&this.setState({enableToolbar:!0})}getSizeOfContainer(){const t=this.querySelector(`div.fixed-layout[data-layoutid="${this.props.layoutId}"]`);return t?t.getBoundingClientRect():null}getSizeOfItem(){const{layoutId:t,layoutItem:e}=this.props,o=this.querySelector(`div.exb-rnd[data-layoutid="${t}"][data-layoutitemid="${e.id}"]`);return o?o.getBoundingClientRect():null}querySelector(t){const o=document.querySelector(`iframe[name="${e.APP_FRAME_NAME_IN_BUILDER}"]`);if(o){return(o.contentDocument||o.contentWindow.document).querySelector(t)}return null}getStyle(){return e.css`
      .layout-item-toolbar {
        box-shadow: none;
        background: transparent;

        .toolbar-item, icon-container {
          width: 28px;
          min-height: 28px;
        }
        .toolbar-group {
          background: transparent;
          margin: 0 1px;
        }
        .toolbar-item {
          margin: 0 1px;
          background: transparent;
          &:hover {
            background: var(--ref-palette-neutral-500);
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
    `}render(){const{layoutItem:o,layoutId:n,formatMessage:l,isLockLayout:r,supportAutoSize:d}=this.props;if(!o)return null;this.itemSetting=e.lodash.assign({},s,o.setting);const u="ratio"===this.itemSetting.heightMode,p=a.utils.getLayoutItemSizeMode("width",o.bbox,this.itemSetting.autoProps),h=a.utils.getLayoutItemSizeMode("height",o.bbox,this.itemSetting.autoProps),g=o.bbox,m=(0,c.getTheme)(),y=e.css`width: 100px;`;return(0,t.jsxs)("div",{className:"fixed-item-setting",css:this.getStyle(),ref:t=>{this.ref=t},children:[!r&&this.state.enableToolbar&&(0,t.jsxs)(e.React.Fragment,{children:[(0,t.jsx)(Ve.SettingSection,{className:"p-0 d-flex justify-content-center",children:(0,t.jsx)(Kt,{layoutId:n,layoutItem:o,parentRef:this.ref,theme:m,tools:_a,formatMessage:this.props.formatMessage})}),(0,t.jsxs)(Ve.SettingSection,{role:"group","aria-label":`${l("size")} & ${l("position")}`,title:`${l("size")} & ${l("position")}`,children:[(0,t.jsx)(Ve.SettingRow,{role:"group","aria-label":l("width"),label:l("width"),children:(0,t.jsx)("div",{css:y,children:(0,t.jsx)(za.SizeEditor,{label:"W",mode:p,sizeModes:d&&!u?Ga:Ua,value:i.utils.stringOfLinearUnit(g.width),onChange:t=>{this.updateBBox("width",t)},onModeChange:t=>{this.updateMode("width",t)}})})}),p!==a.LayoutItemSizeModes.Auto&&(0,t.jsx)("div",{children:(0,t.jsx)(i.Tooltip,{title:l("keepAspectRatio"),placement:"bottom",children:(0,t.jsx)(i.Button,{size:"sm",type:"tertiary",className:"ml-1",icon:!0,onClick:this.toggleHeightMode,"aria-pressed":u,children:u?(0,t.jsx)(Ee,{size:"s"}):(0,t.jsx)(os,{size:"s"})})})}),(0,t.jsx)(Ve.SettingRow,{role:"group","aria-label":l("height"),label:l("height"),className:(0,e.classNames)({"mt-0":p!==a.LayoutItemSizeModes.Auto}),children:(0,t.jsx)("div",{css:y,children:(0,t.jsx)(za.SizeEditor,{label:"H",mode:h,sizeModes:d?Ga:Ua,disabled:u,value:i.utils.stringOfLinearUnit(g.height),onChange:t=>{this.updateBBox("height",t)},onModeChange:t=>{this.updateMode("height",t)}})})}),u&&(0,t.jsx)(Ve.SettingRow,{"aria-label":l("aspectRatio"),label:l("aspectRatio"),children:(0,t.jsx)(za.InputRatio,{value:this.itemSetting.aspectRatio,style:{width:100},onChange:this.updateAspectRatio})}),(0,t.jsx)(Ve.SettingRow,{children:(0,t.jsx)(Wa,Object.assign({},this.props,{widthMode:p,heightMode:h}))}),(0,t.jsx)(Ea,{layoutId:n,layoutItemId:o.id,setting:o.setting,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage})]}),(0,t.jsx)(Ve.SettingSection,{children:(0,t.jsx)(Ve.SettingRow,{tag:"label",label:l("lockParent"),children:(0,t.jsx)(i.Switch,{checked:this.itemSetting.lockParent,onChange:this.updateLockParent})})})]}),(o.type===e.LayoutItemType.Widget||o.sectionId)&&(0,t.jsx)(Oa,{layoutId:n,layoutItemId:o.id,style:this.props.style,isSection:o.type===e.LayoutItemType.Section,onStyleChange:this.props.onStyleChange,formatMessage:this.props.formatMessage,setting:o.setting||(0,e.Immutable)({}),onSettingChange:this.props.onSettingChange})]})}}const Xa={gutter:0,style:{padding:{number:[0],unit:"px"},justifyContent:"flex-start",alignItems:"stretch",borderRadius:{number:[0],unit:i.DistanceUnits.PIXEL}}},qa={lockParent:!0,heightMode:"auto",offsetX:0,offsetY:0},Za=(0,e.createSelector)([(t,e)=>{var o;const{layoutItem:i}=e,n=null===(o=t.appRuntimeInfo)||void 0===o?void 0:o.selection;return!!n&&(n.layoutId===e.layoutId&&n.layoutItemId===i.id)},(t,o)=>{var n,s,a;const{layoutItem:l}=o;let r=[0,0,0,0];if(l.type===e.LayoutItemType.Widget){const e=l.widgetId,o=t.appConfig.widgets[e];o&&(r=i.styleUtils.expandStyleArray(null===(a=null===(s=null===(n=o.config)||void 0===n?void 0:n.style)||void 0===s?void 0:s.padding)||void 0===a?void 0:a.number))}return r[0]+r[2]},(t,o)=>{const{layoutItem:i}=o;let n=!0;if(i.type===e.LayoutItemType.Widget){const e=i.widgetId,o=t.appConfig.widgets[e];if(o){const e=Object.keys(o.layouts)[0],i=A(o.layouts[e],t.browserSizeMode,t.appConfig.mainSizeMode),s=t.appConfig.layouts[i];s&&Object.keys(s.content||[]).length>0&&Object.keys(s.content||[]).some(t=>!s.content[t].isPending&&(n=!1,!0))}}return n}],(t,e,o)=>({selected:t,padding:e,isEmpty:o}));function Ja(t){const e=parseFloat(null==t?void 0:t.width);return e>0?`${t.width}`.includes("px")?`${Math.round(e)}px`:`${Math.round(e)}%`:"100%"}const Ka={[e.ScreenTransitionType.Push]:h(8686),[e.ScreenTransitionType.Fade]:h(6663),[e.ScreenTransitionType.Cover]:h(8686)};class Qa extends e.React.PureComponent{constructor(){super(...arguments),this.onTypeChanged=(t,e,o)=>{o?this.props.onPanelTransitionTypeChange(e):this.props.onTransitionTypeChange(e)},this.updateFirstPanel=t=>{}}getStyle(){return e.css`
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
          background-color: var(--ref-palette-neutral-300);
        }

        &.selected .card-content {
          outline: 2px solid var(--sys-color-primary-light);
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
          color: var(--ref-palette-neutral-1100);
          .card-name-content {
            line-height: 1rem;
            max-height: 2rem;
            white-space: normal;
          }
        }
      }
    `}createAnimationCard(o,n,s=!1){const{transitionType:a,panelTransitionType:l}=this.props;let r;return r=s?null!=l?l:e.ScreenTransitionType.Push:null!=a?a:e.ScreenTransitionType.Fade,(0,t.jsxs)("div",{className:(0,e.classNames)("d-flex flex-column align-items-center card-item",{selected:o===r}),onClick:t=>{this.onTypeChanged(t,o,s)},children:[(0,t.jsx)("div",{className:"d-flex justify-content-center card-content",children:(0,t.jsx)("div",{className:"card-image",children:(0,t.jsx)(i.Icon,{className:"w-100",currentColor:!1,icon:Ka[o],size:72})})}),(0,t.jsx)("div",{className:"card-name flex-grow-1 d-flex align-items-start mt-1",children:(0,t.jsx)("span",{className:"text-center text-truncate card-name-content",title:this.props.formatMessage(o.toLowerCase()),children:this.props.formatMessage(o.toLowerCase())})})]},n)}render(){const{formatMessage:o}=this.props;return(0,t.jsxs)("div",{className:"bg-default border-color-gray-400",css:this.getStyle(),children:[(0,t.jsx)(Ve.SettingSection,{title:o("mainStage"),children:(0,t.jsx)("div",{className:"animation-cards",children:[e.ScreenTransitionType.Fade,e.ScreenTransitionType.Cover,e.ScreenTransitionType.Push].map((t,e)=>this.createAnimationCard(t,e))})}),(0,t.jsx)(Ve.SettingSection,{title:o("scrollingPanel"),children:(0,t.jsx)("div",{className:"animation-cards",children:[e.ScreenTransitionType.Push,e.ScreenTransitionType.Fade].map((t,e)=>this.createAnimationCard(t,e,!0))})}),(0,t.jsx)(Ve.SettingSection,{children:(0,t.jsxs)(Ve.SettingRow,{children:[(0,t.jsx)(i.Checkbox,{onChange:this.updateFirstPanel,className:"mr-2"}),o("applyToFirstPanel")]})})]})}}const tl=h(9572);class el extends e.React.PureComponent{constructor(t){super(t),this.sidePopperTrigger=e.React.createRef(),this.onTransitionTypeChange=t=>{const{screenGroupId:e}=this.props.layoutItem;(0,o.getAppConfigAction)().editScreenGroupProperty(e,"transitionType",t).exec()},this.onPanelTransitionTypeChange=t=>{const{screenGroupId:e}=this.props.layoutItem;(0,o.getAppConfigAction)().editScreenGroupProperty(e,"panelTransitionType",t).exec()},this.toggleSidePanel=()=>{this.setState({showSidePanel:!this.state.showSidePanel})},this.state={showSidePanel:!1}}getAnimBoxStyle(){return e.css`
      background-color: transparent;
      width: 100%;
      height: 72px;

      .img-tip {
        position: relative;
        min-width: 90px;
        height: 72px;
        cursor: pointer;
        background: var(--ref-palette-neutral-300);

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
          background: var(--ref-palette-neutral-500);
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
        color: var(--ref-palette-neutral-1000);
        font-size: 13px;
      }
      .side-content {
        position: relative;
        width: 100%;
        height: calc(100% - 60px);
        overflow: auto;
      }
    `}render(){var o,n,s,a,l;const{formatMessage:r}=this.props,d=null!==(o=this.props.transitionType)&&void 0!==o?o:e.ScreenTransitionType.Fade,u=null!==(n=this.props.panelTransitionType)&&void 0!==n?n:e.ScreenTransitionType.Push;return(0,t.jsxs)(Ve.SettingSection,{title:r("transition"),children:[(0,t.jsxs)("div",{className:"anima-box d-flex justify-content-between align-items-center",css:this.getAnimBoxStyle(),children:[(0,t.jsxs)("div",{className:"img-tip d-flex justify-content-center align-items-center",onClick:this.toggleSidePanel,children:[(0,t.jsx)("div",{className:"anim-icon first has-sibling",children:(0,t.jsx)(i.Icon,{icon:null!==(s=Ka[d])&&void 0!==s?s:tl,size:32})}),(0,t.jsx)("div",{className:"diag-sep"}),(0,t.jsx)("div",{className:"anim-icon second has-sibling",children:(0,t.jsx)(i.Icon,{icon:null!==(a=Ka[u])&&void 0!==a?a:tl,size:32})})]}),(0,t.jsxs)("div",{className:"d-flex flex-column justify-content-between align-items-end h-100",children:[(0,t.jsxs)("div",{className:"anim-label",children:[(0,t.jsx)("span",{children:r(d.toLowerCase())}),(0,t.jsx)("span",{className:"mx-1",children:"/"}),(0,t.jsx)("span",{children:r(u.toLowerCase())})]}),(0,t.jsx)("div",{className:"amin-icons w-100",ref:this.sidePopperTrigger,children:(0,t.jsx)(i.Button,{size:"sm",onClick:this.toggleSidePanel,className:"text-truncate",title:r("change"),children:r("change")})})]})]}),this.state.showSidePanel&&(0,t.jsx)(Ve.SidePopper,{isOpen:!0,title:r("transition"),css:this.getSidePopperStyle(),position:"right",toggle:this.toggleSidePanel,trigger:null===(l=this.sidePopperTrigger)||void 0===l?void 0:l.current,children:(0,t.jsx)("div",{className:"side-content",children:(0,t.jsx)(Qa,{transitionType:d,panelTransitionType:u,onTransitionTypeChange:this.onTransitionTypeChange,onPanelTransitionTypeChange:this.onPanelTransitionTypeChange,formatMessage:r})})})]})}}const ol=(0,e.createSelector)([(t,e)=>{const{screenGroupId:o}=e.layoutItem,{appConfig:i}=t.appStateInBuilder;return i.screenGroups[o].transitionType},(t,e)=>{const{screenGroupId:o}=e.layoutItem,{appConfig:i}=t.appStateInBuilder;return i.screenGroups[o].panelTransitionType}],(t,e)=>({transitionType:t,panelTransitionType:e})),il=e.ReactRedux.connect(ol)(el),nl={width:110};class sl extends e.React.PureComponent{constructor(){super(...arguments),this.updateWidth=t=>{let o=this.props.layoutItem.setting||(0,e.Immutable)({});o=o.set("width",i.utils.stringOfLinearUnit(t)),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)},this.updateBBoxWidth=t=>{let o=(0,e.Immutable)(this.props.layoutItem.bbox||{});o=o.set("width",i.utils.stringOfLinearUnit(t)),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)},this.updateHeight=t=>{let o=(0,e.Immutable)(this.props.layoutItem.bbox||{});o=o.set("height",i.utils.stringOfLinearUnit(t)),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)},this.updateOffsetX=t=>{const o=this.props.layoutItem.setting||(0,e.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o.set("offsetX",t))},this.updateOffsetY=t=>{const o=this.props.layoutItem.setting||(0,e.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o.set("offsetY",t))},this.updateHeightMode=t=>{let o=this.props.layoutItem.setting||(0,e.Immutable)({});o=o.set("heightMode",t===a.LayoutItemSizeModes.Custom?"fixed":"auto"),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)}}updateFloatingArea(t){const o=this.props.layoutItem.setting||(0,e.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o.set("floatingArea",t))}getStyle(){return e.css`
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
          border: 1px solid var(--ref-palette-neutral-500);

          & > div {
            cursor: pointer;
            width: 30px;
            height: 30px;
            position: relative;
          }

          & > div:nth-of-type(3n+1) {
            border-right: 1px solid var(--ref-palette-neutral-500);
          }
          & > div:nth-of-type(3n) {
            border-left: 1px solid var(--ref-palette-neutral-500);
          }
          & > div:nth-of-type(1), & > div:nth-of-type(2), & > div:nth-of-type(3) {
            border-bottom: 1px solid var(--ref-palette-neutral-500);
          }
          & > div:nth-of-type(7), & > div:nth-of-type(8), & > div:nth-of-type(9) {
            border-top: 1px solid var(--ref-palette-neutral-500);
          }

          .selected:after {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: var(--sys-color-primary-light);
            border: 1px solid var(--sys-color-primary-main);
          }
        }
      }
    `}render(){const{layoutId:o,layoutItem:n,formatMessage:s,isLockLayout:l}=this.props;if(!n)return null;if(n.type===e.LayoutItemType.ScreenGroup)return(0,t.jsx)(il,Object.assign({},this.props));this.itemSetting=e.lodash.assign({},qa,n.setting);const r=n.bbox;return(0,t.jsxs)("div",{className:"flow-item-setting",css:this.getStyle(),children:[!l&&(0,t.jsx)(e.React.Fragment,{children:(0,t.jsxs)(Ve.SettingSection,{title:`${s("position")} & ${s("size")}`,children:[(0,t.jsxs)("div",{className:"floating-position d-flex",children:[(0,t.jsx)("div",{className:"floating-area-chooser",children:(0,t.jsxs)("div",{className:"content",children:[(0,t.jsx)("div",{className:(0,e.classNames)("top-left",{selected:1===this.itemSetting.floatingArea}),onClick:this.updateFloatingArea.bind(this,1)}),(0,t.jsx)("div",{className:(0,e.classNames)("top-center",{selected:2===this.itemSetting.floatingArea}),onClick:this.updateFloatingArea.bind(this,2)}),(0,t.jsx)("div",{className:(0,e.classNames)("top-right",{selected:3===this.itemSetting.floatingArea}),onClick:this.updateFloatingArea.bind(this,3)}),(0,t.jsx)("div",{className:(0,e.classNames)("middle-left",{selected:4===this.itemSetting.floatingArea}),onClick:this.updateFloatingArea.bind(this,4)}),(0,t.jsx)("div",{className:(0,e.classNames)("middle-center",{selected:5===this.itemSetting.floatingArea}),onClick:this.updateFloatingArea.bind(this,5)}),(0,t.jsx)("div",{className:(0,e.classNames)("middle-right",{selected:6===this.itemSetting.floatingArea}),onClick:this.updateFloatingArea.bind(this,6)}),(0,t.jsx)("div",{className:(0,e.classNames)("bottom-left",{selected:7===this.itemSetting.floatingArea}),onClick:this.updateFloatingArea.bind(this,7)}),(0,t.jsx)("div",{className:(0,e.classNames)("bottom-center",{selected:8===this.itemSetting.floatingArea}),onClick:this.updateFloatingArea.bind(this,8)}),(0,t.jsx)("div",{className:(0,e.classNames)("bottom-right",{selected:9===this.itemSetting.floatingArea}),onClick:this.updateFloatingArea.bind(this,9)})]})}),(0,t.jsxs)("div",{className:"d-flex flex-grow-1 flex-column justify-content-between align-items-end",children:[(0,t.jsxs)("div",{className:"d-flex align-items-center",css:e.css`width: 110px`,children:[(0,t.jsx)("span",{className:"mr-2",children:"W"}),(0,t.jsx)(za.SizeEditor,{label:"W",mode:a.LayoutItemSizeModes.Custom,disableModeSelect:!0,value:null==r?void 0:r.width,onChange:this.updateBBoxWidth})]}),(0,t.jsxs)("div",{className:"d-flex align-items-center",css:e.css`width: 110px`,children:[(0,t.jsx)("span",{className:"mr-2",children:"H"}),(0,t.jsx)(za.SizeEditor,{label:"H",mode:a.LayoutItemSizeModes.Custom,disableModeSelect:!0,value:null==r?void 0:r.height,onChange:this.updateHeight})]})]})]}),(0,t.jsx)(Ve.SettingRow,{label:s("offsetX"),children:(0,t.jsx)(i.NumericInput,{style:nl,value:this.itemSetting.offsetX,precision:0,onChange:this.updateOffsetX,size:"sm"})}),(0,t.jsx)(Ve.SettingRow,{label:s("offsetY"),children:(0,t.jsx)(i.NumericInput,{style:nl,precision:0,value:this.itemSetting.offsetY,onChange:this.updateOffsetY,size:"sm"})})]})}),(n.type===e.LayoutItemType.Widget||n.sectionId)&&(0,t.jsx)(Oa,{layoutId:o,layoutItemId:n.id,isSection:!1,style:this.props.style,onStyleChange:this.props.onStyleChange,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage})]})}}const al={width:110},ll=[a.LayoutItemSizeModes.Auto,a.LayoutItemSizeModes.Custom],rl=[i.DistanceUnits.PIXEL];class dl extends e.React.PureComponent{constructor(){super(...arguments),this.updateWidth=t=>{let o=this.props.layoutItem.setting||(0,e.Immutable)({});o=o.set("width",i.utils.stringOfLinearUnit(t)),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)},this.updateBBoxWidth=t=>{let o=(0,e.Immutable)(this.props.layoutItem.bbox||{});o=o.set("width",i.utils.stringOfLinearUnit(t)),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)},this.updateHeight=t=>{let o=(0,e.Immutable)(this.props.layoutItem.bbox||{});o=o.set("height",i.utils.stringOfLinearUnit(t)),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)},this.updateOffsetX=t=>{const o=this.props.layoutItem.setting||(0,e.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o.set("offsetX",t))},this.updateOffsetY=t=>{const o=this.props.layoutItem.setting||(0,e.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o.set("offsetY",t))},this.updateHeightMode=t=>{var o,i,n;const{layoutItem:s}=this.props;let l=null!==(o=s.setting)&&void 0!==o?o:(0,e.Immutable)({});if(l=l.set("heightMode",t===a.LayoutItemSizeModes.Custom?"fixed":"auto"),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},l),!(null===(i=s.bbox)||void 0===i?void 0:i.height)){const t=this.getSizeOfItem();if(t){let o=(0,e.Immutable)(null!==(n=s.bbox)&&void 0!==n?n:{});o=o.set("height",`${Math.round(t.height)}px`),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)}}}}getSizeOfItem(){const{layoutId:t,layoutItem:e}=this.props,o=this.querySelector(`div.exb-rnd[data-layoutid="${t}"][data-layoutitemid="${e.id}"]`);return o?o.getBoundingClientRect():null}querySelector(t){const o=document.querySelector(`iframe[name="${e.APP_FRAME_NAME_IN_BUILDER}"]`);if(o){return(o.contentDocument||o.contentWindow.document).querySelector(t)}return null}updateFloatingArea(t){const o=this.props.layoutItem.setting||(0,e.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o.set("floatingArea",t))}render(){var o,n;const{layoutId:s,layoutItem:l,formatMessage:r,isLockLayout:d}=this.props;if(!l)return null;if(l.type===e.LayoutItemType.ScreenGroup)return(0,t.jsx)(il,Object.assign({},this.props));if(this.itemSetting=e.lodash.assign({},qa,l.setting),this.itemSetting.isFloating)return(0,t.jsx)(sl,Object.assign({},this.props));const u=l.bbox,c=i.utils.stringOfLinearUnit(Ja(this.itemSetting)),p=i.utils.stringOfLinearUnit(parseFloat(null===(o=l.bbox)||void 0===o?void 0:o.height)>0?null===(n=l.bbox)||void 0===n?void 0:n.height:100),h="auto"===this.itemSetting.heightMode||a.utils.isPercentage(null==u?void 0:u.height);return(0,t.jsxs)("div",{className:"flow-item-setting",children:[!d&&(0,t.jsxs)(e.React.Fragment,{children:[(0,t.jsxs)(Ve.SettingSection,{title:r("size"),children:[(0,t.jsx)(Ve.SettingRow,{label:r("width"),children:(0,t.jsx)("div",{style:al,children:(0,t.jsx)(za.SizeEditor,{label:"W",mode:a.LayoutItemSizeModes.Custom,disableModeSelect:!0,value:c,onChange:this.updateWidth})})}),(0,t.jsx)(Ve.SettingRow,{label:r("height"),children:(0,t.jsx)("div",{style:al,children:(0,t.jsx)(za.SizeEditor,{label:"H",mode:h?a.LayoutItemSizeModes.Auto:a.LayoutItemSizeModes.Custom,sizeModes:ll,availableUnits:rl,disableModeSelect:!1,value:p,onChange:this.updateHeight,onModeChange:this.updateHeightMode})})})]}),(0,t.jsxs)(Ve.SettingSection,{title:r("position"),children:[(0,t.jsx)(Ve.SettingRow,{label:r("offsetX"),children:(0,t.jsx)(i.NumericInput,{style:al,value:this.itemSetting.offsetX,onChange:this.updateOffsetX,precision:0,size:"sm"})}),(0,t.jsx)(Ve.SettingRow,{label:r("offsetY"),children:(0,t.jsx)(i.NumericInput,{style:al,value:this.itemSetting.offsetY,onChange:this.updateOffsetY,precision:0,size:"sm"})})]})]}),(l.type===e.LayoutItemType.Widget||l.sectionId)&&(0,t.jsx)(Oa,{layoutId:s,layoutItemId:l.id,isSection:!1,style:this.props.style,onStyleChange:this.props.onStyleChange,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage})]})}}const ul=e.css`width: 100px;`,cl=[a.LayoutItemSizeModes.Stretch,a.LayoutItemSizeModes.Custom],pl=[a.LayoutItemSizeModes.Auto,a.LayoutItemSizeModes.Stretch,a.LayoutItemSizeModes.Custom],hl=[a.LayoutItemSizeModes.Stretch,a.LayoutItemSizeModes.Custom],gl=[i.DistanceUnits.PIXEL,i.DistanceUnits.PERCENTAGE],ml=[i.DistanceUnits.PIXEL];class yl extends e.React.PureComponent{constructor(){super(...arguments),this.updateBBox=(t,e)=>{var o;let n=this.props.layoutItem.bbox;const{distance:s,unit:l}=e,r=n[t],d=this.getSizeOfContainer();let u,c=s.toFixed(2);if(a.utils.isPercentage(r)&&l===i.DistanceUnits.PIXEL?d&&(c="left"===t||"right"===t||"width"===t?Math.round(parseFloat(r)*d.width/100):Math.round(parseFloat(r)*d.height/100),u=c):a.utils.isPercentage(r)||l!==i.DistanceUnits.PERCENTAGE||(d&&(c="left"===t||"right"===t||"width"===t?(100*parseFloat(r)/d.width).toFixed(4):(100*parseFloat(r)/d.height).toFixed(4)),u=parseFloat(r)),u||l!==i.DistanceUnits.PERCENTAGE)u||l!==i.DistanceUnits.PIXEL||(u=s);else{const e="width"===t?d.width:d.height;u=Math.round(s*e/100)}if(n=n.set(t,l===i.DistanceUnits.PERCENTAGE?`${c}%`:`${c}px`),"ratio"===(null===(o=this.props.layoutItem.setting)||void 0===o?void 0:o.heightMode)){const e=this.props.layoutItem.setting.aspectRatio;if("width"===t){const t=u*e;if(a.utils.isPercentage(n.height)){const e=(100*t/d.height).toFixed(4);n=n.set("height",`${e}%`)}else n=n.set("height",`${Math.round(t)}px`)}else{const t=u/e;if(a.utils.isPercentage(n.width)){const e=(100*t/d.width).toFixed(4);n=n.set("width",`${e}%`)}else n=n.set("width",`${Math.round(t)}px`)}}this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},n)},this.toggleHeightMode=()=>{let t=this.props.layoutItem.setting||(0,e.Immutable)({});const o="ratio"===t.heightMode?"fixed":"ratio";if(t=t.set("heightMode",o),"ratio"===o){const e=this.getSizeOfItem();e&&(t=t.set("aspectRatio",Number((e.height/e.width).toFixed(2))))}else{let t=this.props.layoutItem.bbox;const e=this.getSizeOfItem();if(a.utils.isPercentage(t.width)){const o=this.getSizeOfContainer();t=t.set("width",`${(100*e.width/o.width).toFixed(4)}%`)}else t=t.set("width",`${Math.round(e.width)}px`);t=t.set("height",`${Math.round(e.height)}px`),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},t)}this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},t)},this.updateAlignSelf=t=>{let o=this.props.layoutItem.setting||(0,e.Immutable)({});o=o.setIn(["style","alignSelf"],t.target.value),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)},this.updateHeightMode=t=>{const o=this.props.layoutItem.setting||(0,e.Immutable)({});let i=(0,e.Immutable)(this.props.layoutItem.bbox);if(t===a.LayoutItemSizeModes.Custom&&isNaN(parseFloat(i.height))){const t=this.getSizeOfItem();i=i.set("height",`${Math.round(t.height)}px`),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i)}this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o.setIn(["autoProps","height"],t))},this.updateWidthMode=t=>{const o=this.props.layoutItem.setting||(0,e.Immutable)({});let i=(0,e.Immutable)(this.props.layoutItem.bbox);if(t===a.LayoutItemSizeModes.Custom&&isNaN(parseFloat(i.width))){const t=this.getSizeOfItem();i=i.set("width",`${Math.round(t.width)}px`),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i)}this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o.setIn(["autoProps","width"],t))},this.updateAspectRatio=t=>{let o=this.props.layoutItem.setting||(0,e.Immutable)({});o=o.set("aspectRatio",t),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)},this.formatMessage=t=>this.props.formatMessage(t)}getSizeOfContainer(){const t=this.querySelector(`div.column-layout[data-layoutid="${this.props.layoutId}"]`);return t?t.getBoundingClientRect():null}getSizeOfItem(){const{layoutId:t,layoutItem:e}=this.props,o=this.querySelector(`div.exb-rnd[data-layoutid="${t}"][data-layoutitemid="${e.id}"]`);return o?o.getBoundingClientRect():null}querySelector(t){const o=document.querySelector(`iframe[name="${e.APP_FRAME_NAME_IN_BUILDER}"]`);if(o){return(o.contentDocument||o.contentWindow.document).querySelector(t)}return null}getStyle(){return e.css`
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
    `}render(){var o,n,s,l;const{layoutId:r,layoutItem:d,isLockLayout:u,supportAutoSize:c}=this.props;if(!d)return null;const p=d.setting||{},h=p.style||{},g=d.bbox||{},m=(null===(o=p.autoProps)||void 0===o?void 0:o.width)!==a.LayoutItemSizeModes.Custom,y=null!==(s=null===(n=p.autoProps)||void 0===n?void 0:n.height)&&void 0!==s?s:a.LayoutItemSizeModes.Custom,f="ratio"===p.heightMode;return(0,t.jsxs)("div",{className:"column-item-setting",css:this.getStyle(),children:[!u&&(0,t.jsx)(e.React.Fragment,{children:(0,t.jsxs)(Ve.SettingSection,{role:"group",title:this.formatMessage("size"),"aria-label":this.formatMessage("size"),children:[(0,t.jsx)(Ve.SettingRow,{role:"group",label:this.formatMessage("width"),"aria-label":this.formatMessage("width"),children:(0,t.jsx)("div",{css:ul,children:(0,t.jsx)(za.SizeEditor,{label:"W",mode:m?a.LayoutItemSizeModes.Stretch:a.LayoutItemSizeModes.Custom,sizeModes:cl,value:null==g?void 0:g.width,availableUnits:gl,onChange:t=>{this.updateBBox("width",t)},onModeChange:this.updateWidthMode})})}),(0,t.jsx)("div",{children:(0,t.jsx)(i.Tooltip,{title:this.formatMessage("keepAspectRatio"),placement:"bottom",children:(0,t.jsx)(i.Button,{size:"sm",type:"tertiary",className:"ml-1",icon:!0,onClick:this.toggleHeightMode,"aria-pressed":f,children:f?(0,t.jsx)(Ee,{size:"s"}):(0,t.jsx)(os,{size:"s"})})})}),(0,t.jsx)(Ve.SettingRow,{role:"group",className:"mt-0",label:this.formatMessage("height"),"aria-label":this.formatMessage("height"),children:(0,t.jsx)("div",{css:ul,children:(0,t.jsx)(za.SizeEditor,{label:"H",mode:y||a.LayoutItemSizeModes.Custom,sizeModes:c?pl:hl,value:g.height,availableUnits:ml,onChange:t=>{this.updateBBox("height",t)},onModeChange:this.updateHeightMode,disabled:f})})}),f&&(0,t.jsx)(Ve.SettingRow,{label:this.formatMessage("aspectRatio"),"aria-label":this.formatMessage("aspectRatio"),children:(0,t.jsx)(za.InputRatio,{value:p.aspectRatio,style:{width:100},onChange:this.updateAspectRatio})}),!m&&(0,t.jsx)(Ve.SettingRow,{label:this.formatMessage("align"),children:(0,t.jsxs)(i.Select,{"aria-label":this.formatMessage("align"),className:"align-select",value:null!==(l=h.alignSelf)&&void 0!==l?l:"flex-start",onChange:this.updateAlignSelf,css:ul,children:[(0,t.jsx)("option",{value:"flex-start",children:this.formatMessage("start")}),(0,t.jsx)("option",{value:"flex-end",children:this.formatMessage("end")}),(0,t.jsx)("option",{value:"center",children:this.formatMessage("center")})]})}),(0,t.jsx)(Ea,{layoutId:r,layoutItemId:d.id,setting:p,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage})]})}),(d.type===e.LayoutItemType.Widget||d.sectionId)&&(0,t.jsx)(Oa,{layoutId:r,layoutItemId:d.id,isSection:d.type===e.LayoutItemType.Section,style:this.props.style,onStyleChange:this.props.onStyleChange,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage})]})}}const fl=e.css`width: 100px;`,vl=[a.LayoutItemSizeModes.Auto,a.LayoutItemSizeModes.Stretch,a.LayoutItemSizeModes.Custom],Il=[a.LayoutItemSizeModes.Auto,a.LayoutItemSizeModes.Stretch,a.LayoutItemSizeModes.Custom],xl=[a.LayoutItemSizeModes.Stretch,a.LayoutItemSizeModes.Custom],bl=[i.DistanceUnits.PIXEL,i.DistanceUnits.PERCENTAGE],wl=[i.DistanceUnits.PIXEL];class Sl extends e.React.PureComponent{constructor(){super(...arguments),this.updateBBox=(t,e)=>{var o;let n=this.props.layoutItem.bbox;const{distance:s,unit:l}=e,r=n[t],d=this.getSizeOfContainer();let u,c=s.toFixed(2);if(a.utils.isPercentage(r)&&l===i.DistanceUnits.PIXEL?d&&(c="left"===t||"right"===t||"width"===t?Math.round(parseFloat(r)*d.width/100):Math.round(parseFloat(r)*d.height/100),u=c):a.utils.isPercentage(r)||l!==i.DistanceUnits.PERCENTAGE||(d&&(c="left"===t||"right"===t||"width"===t?(100*parseFloat(r)/d.width).toFixed(4):(100*parseFloat(r)/d.height).toFixed(4)),u=parseFloat(r)),u||l!==i.DistanceUnits.PERCENTAGE)u||l!==i.DistanceUnits.PIXEL||(u=s);else{const e="width"===t?d.width:d.height;u=Math.round(s*e/100)}if(n=n.set(t,l===i.DistanceUnits.PERCENTAGE?`${c}%`:`${c}px`),"ratio"===(null===(o=this.props.layoutItem.setting)||void 0===o?void 0:o.heightMode)){const e=this.props.layoutItem.setting.aspectRatio;if("width"===t){const t=u*e;if(a.utils.isPercentage(n.height)){const e=(100*t/d.height).toFixed(4);n=n.set("height",`${e}%`)}else n=n.set("height",`${Math.round(t)}px`)}else{const t=u/e;if(a.utils.isPercentage(n.width)){const e=(100*t/d.width).toFixed(4);n=n.set("width",`${e}%`)}else n=n.set("width",`${Math.round(t)}px`)}}this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},n)},this.toggleHeightMode=()=>{let t=this.props.layoutItem.setting||(0,e.Immutable)({});const i="ratio"===t.heightMode?"fixed":"ratio";t=t.set("heightMode",i);const n=(0,o.getAppConfigAction)();if("ratio"===i){const e=this.getSizeOfItem();e&&(t=t.set("aspectRatio",Number((e.height/e.width).toFixed(2))))}else{let t=this.props.layoutItem.bbox;const e=this.getSizeOfItem();if(a.utils.isPercentage(t.width)){const o=this.getSizeOfContainer();t=t.set("width",`${(100*e.width/o.width).toFixed(4)}%`)}else t=t.set("width",`${Math.round(e.width)}px`);t=t.set("height",`${Math.round(e.height)}px`),n.editLayoutItemProperty({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},"bbox",t)}n.editLayoutItemProperty({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},"setting",t).exec()},this.updateAlignSelf=t=>{let o=this.props.layoutItem.setting||(0,e.Immutable)({});o=o.setIn(["style","alignSelf"],t.target.value),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)},this.updateHeightMode=t=>{const o=this.props.layoutItem.setting||(0,e.Immutable)({});let i=(0,e.Immutable)(this.props.layoutItem.bbox);if(t===a.LayoutItemSizeModes.Custom&&isNaN(parseFloat(i.height))){const t=this.getSizeOfItem();i=i.set("height",`${Math.round(t.height)}px`),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i)}this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o.setIn(["autoProps","height"],t))},this.updateWidthMode=t=>{const o=this.props.layoutItem.setting||(0,e.Immutable)({});let i=(0,e.Immutable)(this.props.layoutItem.bbox);if(t===a.LayoutItemSizeModes.Custom&&isNaN(parseFloat(i.width))){const t=this.getSizeOfItem();i=i.set("width",`${Math.round(t.width)}px`),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i)}this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o.setIn(["autoProps","width"],t))},this.updateAspectRatio=t=>{let o=this.props.layoutItem.setting||(0,e.Immutable)({});o=o.set("aspectRatio",t),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)},this.formatMessage=t=>this.props.formatMessage(t)}getSizeOfContainer(){const t=this.querySelector(`div.column-layout[data-layoutid="${this.props.layoutId}"]`);return t?t.getBoundingClientRect():null}getSizeOfItem(){const{layoutId:t,layoutItem:e}=this.props,o=this.querySelector(`div.exb-rnd[data-layoutid="${t}"][data-layoutitemid="${e.id}"]`);return o?o.getBoundingClientRect():null}querySelector(t){const o=document.querySelector(`iframe[name="${e.APP_FRAME_NAME_IN_BUILDER}"]`);if(o){return(o.contentDocument||o.contentWindow.document).querySelector(t)}return null}getStyle(){return e.css`
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
    `}render(){var o,n,s,l,r;const{layoutId:d,layoutItem:u,isLockLayout:c,supportAutoSize:p}=this.props;if(!u)return null;const h=u.setting||{},g=h.style||{},m=u.bbox||{},y=null!==(n=null===(o=h.autoProps)||void 0===o?void 0:o.height)&&void 0!==n?n:a.LayoutItemSizeModes.Stretch,f=y===a.LayoutItemSizeModes.Stretch,v=null!==(l=null===(s=h.autoProps)||void 0===s?void 0:s.width)&&void 0!==l?l:a.LayoutItemSizeModes.Custom,I="ratio"===h.heightMode;return(0,t.jsxs)("div",{className:"flex-row-item-setting",css:this.getStyle(),children:[!c&&(0,t.jsx)(e.React.Fragment,{children:(0,t.jsxs)(Ve.SettingSection,{role:"group",title:this.formatMessage("size"),"aria-label":this.formatMessage("size"),children:[(0,t.jsx)(Ve.SettingRow,{role:"group",label:this.formatMessage("width"),"aria-label":this.formatMessage("width"),children:(0,t.jsx)("div",{css:fl,children:(0,t.jsx)(za.SizeEditor,{label:"W",mode:v,sizeModes:Il,value:null==m?void 0:m.width,availableUnits:wl,onChange:t=>{this.updateBBox("width",t)},onModeChange:this.updateWidthMode})})}),(0,t.jsx)("div",{children:(0,t.jsx)(i.Tooltip,{title:this.formatMessage("keepAspectRatio"),placement:"bottom",children:(0,t.jsx)(i.Button,{size:"sm",type:"tertiary",className:"ml-1",icon:!0,onClick:this.toggleHeightMode,"aria-pressed":I,children:I?(0,t.jsx)(Ee,{size:"s"}):(0,t.jsx)(os,{size:"s"})})})}),(0,t.jsx)(Ve.SettingRow,{role:"group",className:"mt-0",label:this.formatMessage("height"),"aria-label":this.formatMessage("height"),children:(0,t.jsx)("div",{css:fl,children:(0,t.jsx)(za.SizeEditor,{label:"H",mode:y,sizeModes:p?vl:xl,value:m.height,availableUnits:bl,onChange:t=>{this.updateBBox("height",t)},onModeChange:this.updateHeightMode,disabled:I})})}),I&&(0,t.jsx)(Ve.SettingRow,{label:this.formatMessage("aspectRatio"),"aria-label":this.formatMessage("aspectRatio"),children:(0,t.jsx)(za.InputRatio,{value:h.aspectRatio,style:{width:100},onChange:this.updateAspectRatio})}),!f&&(0,t.jsx)(Ve.SettingRow,{label:this.formatMessage("align"),children:(0,t.jsxs)(i.Select,{"aria-label":this.formatMessage("align"),className:"align-select",value:null!==(r=g.alignSelf)&&void 0!==r?r:"flex-start",onChange:this.updateAlignSelf,css:fl,children:[(0,t.jsx)("option",{value:"flex-start",children:this.formatMessage("start")}),(0,t.jsx)("option",{value:"flex-end",children:this.formatMessage("end")}),(0,t.jsx)("option",{value:"center",children:this.formatMessage("center")})]})}),(0,t.jsx)(Ea,{layoutId:d,layoutItemId:u.id,setting:h,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage})]})}),(u.type===e.LayoutItemType.Widget||u.sectionId)&&(0,t.jsx)(Oa,{layoutId:d,layoutItemId:u.id,isSection:u.type===e.LayoutItemType.Section,style:this.props.style,onStyleChange:this.props.onStyleChange,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage})]})}}const Cl=e.css`width: 72px`,Rl=e.css`width: 100px;`,Tl=[a.LayoutItemSizeModes.Auto,a.LayoutItemSizeModes.Stretch,a.LayoutItemSizeModes.Custom],Ml=[a.LayoutItemSizeModes.Stretch,a.LayoutItemSizeModes.Custom];class Ll extends e.React.PureComponent{constructor(){super(...arguments),this.handleAlignChange=t=>{this.updateStyle("alignSelf",t.target.value)},this.handleHeightChange=t=>{let e=this.props.layoutItem.bbox;const{distance:o,unit:n}=t,s=e.height,l=this.getSizeOfContainer();let r=o.toFixed(2);a.utils.isPercentage(s)&&n===i.DistanceUnits.PIXEL?null!=l&&(r=Math.round(parseFloat(s)*l.height/100)):a.utils.isPercentage(s)||n!==i.DistanceUnits.PERCENTAGE||null!=l&&(r=(100*parseFloat(s)/l.height).toFixed(4)),e=e.set("height",n===i.DistanceUnits.PERCENTAGE?`${r}%`:`${r}px`),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},e)},this.handleHeightModeChange=t=>{var o;const i=null!==(o=this.props.layoutItem.setting)&&void 0!==o?o:(0,e.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i.setIn(["autoProps","height"],t))},this.updateAspectSetting=t=>{var o;let i=null!==(o=this.props.layoutItem.setting)&&void 0!==o?o:(0,e.Immutable)({});if("fit"===i.heightMode&&(i=i.setIn(["autoProps","height"],a.LayoutItemSizeModes.Stretch)),i=i.set("heightMode",t),"ratio"===t){const t=this.getSizeOfItem();null!=t&&(i=i.set("aspectRatio",Number((t.height/t.width).toFixed(2))))}else{const t=this.props.layoutItem.bbox,e=this.getSizeOfItem();if(a.utils.isPercentage(t.height)){const o=this.getSizeOfContainer();this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},t.set("height",`${(100*e.height/o.height).toFixed(4)}%`))}else this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},t.set("height",`${Math.round(e.height)}px`))}this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i)},this.handleAspectRatioChange=t=>{var o;let i=null!==(o=this.props.layoutItem.setting)&&void 0!==o?o:(0,e.Immutable)({});i=i.set("aspectRatio",t),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i)},this.handleOffsetXChange=t=>{var o;const i=null!==(o=this.props.layoutItem.setting)&&void 0!==o?o:(0,e.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i.set("offsetX",t))},this.handleOffsetYChange=t=>{var o;const i=null!==(o=this.props.layoutItem.setting)&&void 0!==o?o:(0,e.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i.set("offsetY",t))},this.formatMessage=t=>this.props.formatMessage(t)}updateStyle(t,o){var i;const{layoutItem:n}=this.props,s=(0,e.Immutable)(null!==(i=null==n?void 0:n.setting)&&void 0!==i?i:{});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},s.setIn(["style",t],o))}getSizeOfContainer(){const t=this.querySelector(`div.row-layout[data-layoutid="${this.props.layoutId}"]`);return null!=t?t.getBoundingClientRect():null}getSizeOfItem(){const{layoutId:t,layoutItem:e}=this.props,o=this.querySelector(`div.exb-rnd[data-layoutid="${t}"][data-layoutitemid="${e.id}"] > div`);return null!=o?o.getBoundingClientRect():null}querySelector(t){var o;const i=document.querySelector(`iframe[name="${e.APP_FRAME_NAME_IN_BUILDER}"]`);if(null!=i){return(null!==(o=i.contentDocument)&&void 0!==o?o:i.contentWindow.document).querySelector(t)}return null}getStyle(){return e.css`
      .align-select {
        .dropdown-button,
        .dropdown-button:hover {
          height: 26px;
        }
      }
    `}render(){var o,n,s,l;const{layoutId:r,layoutItem:d,isLockLayout:u,supportAutoSize:c}=this.props;if(null==d)return null;const p=e.lodash.assign({},gn,d.setting),h=d.bbox,g=null!==(o=p.style)&&void 0!==o?o:{},m=null!==(s=null===(n=p.autoProps)||void 0===n?void 0:n.height)&&void 0!==s?s:a.LayoutItemSizeModes.Stretch,y="ratio"===p.heightMode;return(0,t.jsxs)("div",{className:"row-item-setting",css:this.getStyle(),children:[!u&&(0,t.jsxs)(e.React.Fragment,{children:[(0,t.jsxs)(Ve.SettingSection,{role:"group",title:this.formatMessage("size"),"aria-label":this.formatMessage("size"),children:[(0,t.jsx)(Ve.SettingRow,{role:"group",label:this.formatMessage("height"),"aria-label":this.formatMessage("height"),children:(0,t.jsx)("div",{css:Rl,children:(0,t.jsx)(za.SizeEditor,{label:"H",mode:m,sizeModes:c?Tl:Ml,value:i.utils.stringOfLinearUnit(h.height),onChange:this.handleHeightChange,onModeChange:this.handleHeightModeChange,disabled:y})})}),(0,t.jsx)(Ve.SettingRow,{children:(0,t.jsxs)(i.Label,{children:[(0,t.jsx)(i.Checkbox,{"aria-label":this.formatMessage("keepAspectRatio"),checked:y,onChange:t=>{this.updateAspectSetting(t.target.checked?"ratio":"fixed")},className:"mr-2"}),(0,t.jsx)("span",{className:"checkbox-label",children:this.formatMessage("keepAspectRatio")})]})}),y&&(0,t.jsx)(Ve.SettingRow,{label:this.formatMessage("aspectRatio"),"aria-label":this.formatMessage("aspectRatio"),children:(0,t.jsx)(za.InputRatio,{value:p.aspectRatio,style:{width:100},onChange:this.handleAspectRatioChange})}),m!==a.LayoutItemSizeModes.Stretch&&(0,t.jsx)(Ve.SettingRow,{label:this.formatMessage("align"),children:(0,t.jsxs)(i.Select,{"aria-label":this.formatMessage("align"),className:"align-select",css:Rl,value:null!==(l=g.alignSelf)&&void 0!==l?l:"flex-start",onChange:this.handleAlignChange,children:[(0,t.jsx)("option",{value:"flex-start",children:this.formatMessage("T")}),(0,t.jsx)("option",{value:"flex-end",children:this.formatMessage("B")}),(0,t.jsx)("option",{value:"center",children:this.formatMessage("center")})]})})]}),(0,t.jsxs)(Ve.SettingSection,{role:"group",title:this.formatMessage("position"),"aria-label":this.formatMessage("position"),children:[(0,t.jsx)(Ea,{layoutId:r,layoutItemId:d.id,setting:d.setting,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage}),(0,t.jsx)(Ve.SettingRow,{label:this.formatMessage("offsetX"),"aria-label":this.formatMessage("offsetX"),children:(0,t.jsx)(i.NumericInput,{css:Cl,value:p.offsetX,onChange:this.handleOffsetXChange,precision:0,size:"sm"})}),(0,t.jsx)(Ve.SettingRow,{label:this.formatMessage("offsetY"),"aria-label":this.formatMessage("offsetY"),children:(0,t.jsx)(i.NumericInput,{css:Cl,value:p.offsetY,onChange:this.handleOffsetYChange,precision:0,size:"sm"})})]})]}),(d.type===e.LayoutItemType.Widget||null!=d.sectionId)&&(0,t.jsx)(Oa,{layoutId:r,layoutItemId:d.id,isSection:d.type===e.LayoutItemType.Section,style:this.props.style,onStyleChange:this.props.onStyleChange,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage})]})}}var Pl=h(5508),Al=h.n(Pl),jl=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const zl=o=>{const i=window.SVG,{className:n}=o,s=jl(o,["className"]),a=(0,e.classNames)("jimu-icon jimu-icon-component",n);return i?(0,t.jsx)(i,Object.assign({className:a,src:Al()},s)):(0,t.jsx)("svg",Object.assign({className:a},s))};function $l(n){var s,a;const{layoutItem:l,layoutId:r}=n,d=e.hooks.useTranslation(i.defaultMessages),[u,c]=e.React.useState(null!==(s=l.label)&&void 0!==s?s:""),p=e.ReactRedux.useSelector(t=>{const o=t.appStateInBuilder.appConfig.layouts[r];if(l.parent){return o.content[l.parent].gridType===e.GridItemType.Tab}return!1}),h=e.ReactRedux.useSelector(t=>{const o=t.appStateInBuilder.appConfig.layouts[r].content[l.id];return!p||o.gridType!==e.GridItemType.Row&&o.gridType!==e.GridItemType.Column?"":o.label});e.React.useEffect(()=>{c(h)},[h]);const g=e.React.useCallback(t=>{(0,o.getAppConfigAction)().editLayoutItemProperty({layoutId:r,layoutItemId:l.id},"label",""!==t?t:void 0,!0).exec()},[r,l.id]),m=e.React.useCallback(t=>{(0,o.getAppConfigAction)().editLayoutItemProperty({layoutId:r,layoutItemId:l.id},"expandable",t,!0).exec()},[r,l.id]),y=e.React.useCallback(t=>{c(t.target.value)},[]);if(!l)return null;const f=l;return!p||f.gridType!==e.GridItemType.Row&&f.gridType!==e.GridItemType.Column?f.gridType===e.GridItemType.Plain?(0,t.jsxs)("div",{className:"grid-item-setting h-100",children:[(0,t.jsx)(Ve.SettingSection,{title:d("gridItem"),children:(0,t.jsx)(Ve.SettingRow,{children:(0,t.jsxs)(i.Label,{centric:!0,children:[(0,t.jsx)(i.Checkbox,{"aria-label":d("allowExpansion"),checked:null===(a=l.expandable)||void 0===a||a,onChange:(t,e)=>{m(t.target.checked)}}),(0,t.jsx)("span",{className:"ml-2 text-truncate",children:d("allowExpansion")})]})})}),(0,t.jsx)(Oa,{layoutId:r,layoutItemId:l.id,style:n.style,isSection:l.type===e.LayoutItemType.Section,onStyleChange:n.onStyleChange,formatMessage:n.formatMessage,setting:l.setting||(0,e.Immutable)({}),onSettingChange:n.onSettingChange})]}):(0,t.jsx)("div",{className:"grid-item-setting h-100",children:(0,t.jsxs)("div",{className:"h-100 align-items-center justify-content-center d-flex flex-column",css:e.css`color: var(--ref-palette-neutral-1000)`,children:[(0,t.jsx)("div",{children:(0,t.jsx)(zl,{size:48})}),(0,t.jsx)("div",{className:"mt-4",children:d("noConfigNeeded")})]})}):(0,t.jsx)("div",{className:"grid-item-setting h-100",children:(0,t.jsx)(Ve.SettingSection,{children:(0,t.jsx)(Ve.SettingRow,{label:d("label"),flow:"wrap",children:(0,t.jsx)(i.TextInput,{size:"sm",value:u,onChange:y,onAcceptValue:g,className:"w-100"})})})})}const Nl=e.css`width: 100px;`,kl=[a.LayoutItemSizeModes.Auto,a.LayoutItemSizeModes.Custom],Ol=[a.LayoutItemSizeModes.Custom],El=[i.DistanceUnits.PIXEL];class Bl extends e.React.PureComponent{constructor(){super(...arguments),this.updateHeight=t=>{const e=this.props.layoutItem.bbox;this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},e.set("height",`${t.distance}px`))},this.toggleAspectRatio=(t,o)=>{const i=this.props.layoutItem.setting||(0,e.Immutable)({}),n=o?"ratio":"fixed";this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i.set("heightMode",n))},this.updateHeightMode=t=>{const o=this.props.layoutItem.setting||(0,e.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o.setIn(["autoProps","height"],t))},this.updateAspectRatio=t=>{let o=this.props.layoutItem.setting||(0,e.Immutable)({});o=o.set("aspectRatio",t),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)},this.formatMessage=t=>this.props.formatMessage(t)}getStyle(){return e.css`
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
    `}render(){var o,n;const{layoutId:s,layoutItem:l,isLockLayout:r,supportAutoSize:d}=this.props;if(!l)return null;const u=l.setting||{},c=l.bbox||{},p=null!==(n=null===(o=u.autoProps)||void 0===o?void 0:o.height)&&void 0!==n?n:a.LayoutItemSizeModes.Custom,h="ratio"===u.heightMode;return(0,t.jsxs)("div",{className:"accordion-item-setting",css:this.getStyle(),children:[!r&&(0,t.jsx)(e.React.Fragment,{children:(0,t.jsxs)(Ve.SettingSection,{role:"group",title:this.formatMessage("size"),"aria-label":this.formatMessage("size"),children:[(0,t.jsx)(Ve.SettingRow,{role:"group",label:this.formatMessage("height"),"aria-label":this.formatMessage("height"),children:(0,t.jsx)("div",{css:Nl,children:(0,t.jsx)(za.SizeEditor,{label:"H",mode:p||a.LayoutItemSizeModes.Custom,sizeModes:d?kl:Ol,value:c.height,availableUnits:El,onChange:this.updateHeight,onModeChange:this.updateHeightMode,disabled:h})})}),(0,t.jsx)(Ve.SettingRow,{children:(0,t.jsxs)(i.Label,{children:[(0,t.jsx)(i.Checkbox,{className:"mr-2",checked:h,onChange:this.toggleAspectRatio}),(0,t.jsx)("span",{className:"checkbox-label",children:this.formatMessage("keepAspectRatio")})]})}),h&&(0,t.jsx)(Ve.SettingRow,{label:this.formatMessage("aspectRatio"),"aria-label":this.formatMessage("aspectRatio"),children:(0,t.jsx)(za.InputRatio,{value:u.aspectRatio||"1:1",style:{width:100},onChange:this.updateAspectRatio})})]})}),(l.type===e.LayoutItemType.Widget||l.sectionId)&&(0,t.jsx)(Oa,{layoutId:s,layoutItemId:l.id,isSection:l.type===e.LayoutItemType.Section,style:this.props.style,onStyleChange:this.props.onStyleChange,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage})]})}}const Dl={width:110};class Fl extends e.React.PureComponent{constructor(){super(...arguments),this.updateSpace=t=>{const{layoutId:e}=this.props;if(!isNaN(t.distance)){(0,o.getAppConfigAction)().editLayoutProperty(e,"setting.gutter",t.distance).exec()}},this.updatePadding=t=>{const{layoutId:e}=this.props;(0,o.getAppConfigAction)().editLayoutProperty(e,"setting.style.padding",t).exec()}}render(){const{formatMessage:e}=this.props,o=this.props.setting||{},i=o.style||{},n=o.gutter>=0?o.gutter:Xa.gutter;return(0,t.jsxs)(Ve.SettingSection,{role:"group",className:"flow-layout-setting",title:e("layout"),"aria-label":e("layout"),children:[(0,t.jsx)(Ve.SettingRow,{label:e("gap"),children:(0,t.jsx)(za.InputUnit,{style:Dl,"aria-label":e("gap"),min:0,value:{distance:n,unit:void 0},onChange:this.updateSpace})}),(0,t.jsx)(Ve.SettingRow,{flow:"wrap",role:"group",label:e("padding"),"aria-label":e("padding"),children:(0,t.jsx)(za.Padding,{value:i.padding,onChange:this.updatePadding})})]})}}const Hl=(0,e.createSelector)((t,e)=>{var o,i,n,s;return null===(s=null===(n=null===(i=null===(o=t.appStateInBuilder)||void 0===o?void 0:o.appConfig)||void 0===i?void 0:i.layouts)||void 0===n?void 0:n[e.layoutId])||void 0===s?void 0:s.setting},t=>({setting:t})),Vl=e.ReactRedux.connect(Hl)(Fl);var Wl=h(4337);function Gl(n){const{layoutId:s}=n,a=e.hooks.useTranslation(),l=e.ReactRedux.useSelector(t=>{const o=t.appStateInBuilder.appConfig.layouts[s],i=Object.keys((null==o?void 0:o.content)||{}).map(t=>{const i=o.content[t];return i.isPending?"":i.type===e.LayoutItemType.Widget&&i.widgetId?`widget:${i.widgetId}`:i.type===e.LayoutItemType.Section?`section:${i.sectionId}`:""}).filter(t=>""!==t);return i.sort(),i.join(",")}),r=e.ReactRedux.useSelector(t=>{var e,o;const i=t.appStateInBuilder.appConfig.layouts[s];return null!==(o=null===(e=null==i?void 0:i.setting)||void 0===e?void 0:e.mainItemId)&&void 0!==o?o:""}),d=e.React.useMemo(()=>{if(l.length>0){const t=(0,e.getAppStore)().getState().appStateInBuilder;return l.split(",").map(e=>{const[o,i]=e.split(":");return"widget"===o?{value:i,label:t.appConfig.widgets[i].label}:{value:i,label:t.appConfig.sections[i].label}})}return[]},[l]),u=e.React.useCallback(t=>{var i;const n=(0,o.getAppConfigAction)();if(""===t.target.value){const t=null!==(i=n.appConfig.layouts[s].setting)&&void 0!==i?i:(0,e.Immutable)({});n.editLayoutProperty(s,"setting",t.without("mainItemId")).exec()}else n.editLayoutProperty(s,"setting.mainItemId",t.target.value).exec()},[s]);return(0,t.jsxs)(i.Select,{css:e.css`.jimu-dropdown { width: 100%; }`,value:r,onChange:u,children:[(0,t.jsx)("option",{value:"",children:a("none")},"none"),d.map(e=>(0,t.jsx)("option",{value:e.value,children:e.label},e.value))]})}const Ul=[i.DistanceUnits.PIXEL];class _l extends e.React.PureComponent{constructor(){super(...arguments),this.handlePaddingChange=t=>{const e=(0,o.getAppConfigAction)();this.getLayoutIds().forEach(o=>{e.editLayoutProperty(o,"setting.style.padding",t)}),e.exec()},this.handleSettingChange=(t,e)=>{const i=(0,o.getAppConfigAction)();this.getLayoutIds().forEach(o=>{i.editLayoutProperty(o,`setting.${t}`,e)}),i.exec()},this.toggleExpandable=()=>{var t,i;const{layoutId:n,layoutSetting:s}=this.props,a=null===(t=s.expandable)||void 0===t||t,l=(0,o.getAppConfigAction)(),r=l.appConfig.layouts[n];Object.keys(null!==(i=r.content)&&void 0!==i?i:{}).forEach(t=>{const o=r.content[t];o.gridType!==e.GridItemType.Plain&&null!=o.gridType||l.editLayoutItemProperty({layoutId:n,layoutItemId:t},"expandable",!a,!0)}),l.editLayoutProperty(n,"setting.expandable",!a),l.exec()}}getLayoutIds(){const t=[],{layouts:e}=this.props;return null!=e&&Object.keys(e).forEach(o=>{t.push(e[o])}),t}render(){var o,n,s,a;const{layoutSetting:l,allItemsExpandable:r,allItemsNotExpandable:d,useCustomLayoutInSmallSizeMode:u,formatMessage:c,appTheme:p}=this.props;return(0,t.jsxs)("div",{className:"flexbox-layout-setting",children:[(0,t.jsxs)(Ve.SettingSection,{role:"group",title:c("layout"),"aria-label":c("layout"),children:[(0,t.jsx)(Ve.SettingRow,{label:c("padding"),role:"group","aria-label":c("padding"),flow:"wrap",children:(0,t.jsx)(za.Padding,{value:null===(o=l.style)||void 0===o?void 0:o.padding,onChange:this.handlePaddingChange})}),(0,t.jsx)(Ve.SettingRow,{label:c("paddingColor"),children:(0,t.jsx)(Wl.ThemeColorPicker,{"aria-label":c("paddingColor"),specificTheme:p,value:l.paddingColor,onChange:t=>{this.handleSettingChange("paddingColor",t)}})}),(0,t.jsxs)(Ve.SettingRow,{label:c("gap"),truncateLabel:!0,children:[(0,t.jsx)(Wl.ThemeColorPicker,{"aria-label":c("gap"),specificTheme:p,value:l.splitColor,onChange:t=>{this.handleSettingChange("splitColor",t)}}),(0,t.jsx)(za.InputUnit,{css:e.css`width: 74px !important;`,className:"ml-2",units:Ul,min:1,max:100,precision:0,value:{distance:null!==(n=l.splitSize)&&void 0!==n?n:8,unit:i.DistanceUnits.PIXEL},onChange:t=>{this.handleSettingChange("splitSize",t.distance)}})]})]}),(0,t.jsxs)(Ve.SettingSection,{role:"group",title:c("gridItems"),"aria-label":c("gridItems"),children:[(0,t.jsx)(Ve.SettingRow,{children:(0,t.jsxs)(i.Label,{centric:!0,children:[(0,t.jsx)(i.Checkbox,{"aria-label":c("allowResize"),checked:null===(s=l.resizable)||void 0===s||s,onChange:(t,e)=>{this.handleSettingChange("resizable",e)}}),(0,t.jsx)("span",{className:"ml-2",title:c("allowResize"),children:c("allowResize")})]})}),(0,t.jsx)(Ve.SettingRow,{children:(0,t.jsxs)("div",{className:"d-flex w-100 align-items-center",children:[(0,t.jsxs)(i.Label,{css:e.css`width: 80%;`,className:"justify-content-start",children:[(0,t.jsx)(i.Checkbox,{"aria-label":c("allowExpansion"),checked:(null===(a=l.expandable)||void 0===a||a)&&r,indeterminate:!r&&!d,onClick:this.toggleExpandable}),(0,t.jsx)("span",{className:"ml-2 text-truncate",title:c("allowExpansion"),children:c("allowExpansion")})]}),(0,t.jsx)(i.Tooltip,{title:c("gridSettingOverrideTip"),placement:"bottom",children:(0,t.jsx)(i.Button,{className:"ml-auto",type:"tertiary",icon:!0,children:(0,t.jsx)(zl,{})})})]})}),!u&&(0,t.jsx)(Ve.SettingRow,{label:c("setMainGridItem"),flow:"wrap",children:(0,t.jsx)(Gl,{layoutId:this.props.layoutId})})]})]})}}const Yl=(0,e.createSelector)((t,e)=>{const o=t.appStateInBuilder;return o?e.layouts[o.browserSizeMode]||e.layouts[o.appConfig.mainSizeMode]:null},(t,e)=>{var o,i;const n=t.appStateInBuilder;if(!n)return{};const s=e.layouts[n.browserSizeMode]||e.layouts[n.appConfig.mainSizeMode],{layouts:a}=n.appConfig;return null!==(i=null===(o=a[s])||void 0===o?void 0:o.setting)&&void 0!==i?i:{}},(t,o)=>{var i;const n=t.appStateInBuilder;if(!n)return!1;const s=o.layouts[n.browserSizeMode]||o.layouts[n.appConfig.mainSizeMode],{layouts:a}=n.appConfig,l=a[s],r=Object.keys(null!==(i=l.content)&&void 0!==i?i:{});return!(r.length>0)||r.every(t=>{var o;const i=l.content[t];return i.gridType!==e.GridItemType.Plain||(null===(o=i.expandable)||void 0===o||o)})},(t,o)=>{var i;const n=t.appStateInBuilder;if(!n)return!1;const s=o.layouts[n.browserSizeMode]||o.layouts[n.appConfig.mainSizeMode],{layouts:a}=n.appConfig,l=a[s],r=Object.keys(null!==(i=l.content)&&void 0!==i?i:{});return!(r.length>0)||r.every(t=>{const o=l.content[t];return o.gridType!==e.GridItemType.Plain||null!=o.expandable&&!o.expandable})},(t,o)=>{const i=t.appStateInBuilder;if(!i)return{};const n=o.layouts[i.browserSizeMode]||o.layouts[i.appConfig.mainSizeMode],s=a.searchUtils.getRootContainerInfoOfLayout(i.appConfig,n,i.browserSizeMode);switch(null==s?void 0:s.type){case e.ContainerType.Page:return null!=i.appConfig.pages[s.id].layout[e.BrowserSizeMode.Small];case e.ContainerType.Dialog:return null!=i.appConfig.dialogs[s.id].layout[e.BrowserSizeMode.Small];case e.ContainerType.Header:return null!=i.appConfig.header.layout[e.BrowserSizeMode.Small];case e.ContainerType.Footer:return null!=i.appConfig.footer.layout[e.BrowserSizeMode.Small];default:return!1}},(t,e,o,i,n)=>({layoutId:t,layoutSetting:e,allItemsExpandable:o,allItemsNotExpandable:i,useCustomLayoutInSmallSizeMode:n})),Xl=e.ReactRedux.connect(Yl)(_l);class ql{constructor(){this.id="flow-layout-transformer",this.layoutType=e.LayoutType.FlowLayout}transformLayout(t,o,i){if(o!==i&&i===e.BrowserSizeMode.Small){let o=(0,e.Immutable)(t);return(t.order||[]).forEach(t=>{o=o.setIn(["content",t,"setting","heightMode"],"auto")}),o}return t}transformLayoutItem(t,e,o,i,n,s){return{index:e,item:t}}}function Zl(t,o,i){var n;const s=function(t,o){var i;const n=t.layouts[o];return(null===(i=null==n?void 0:n.parent)||void 0===i?void 0:i.type)===e.LayoutParentType.Widget?n.parent.id:null}(t,i),a=function(t,e,o){var i,n,s,a,l,r,d;const u=t.widgets[o];if(null!=u){const p=E(),h=t.mainSizeMode,g=u.layouts.DEFAULT[p],m=u.layouts.DEFAULT[h],y=(c=null!==(l=null===(a=null===(s=null===(n=(null!==(i=t.layouts[g])&&void 0!==i?i:t.layouts[m]).setting)||void 0===n?void 0:n.style)||void 0===s?void 0:s.padding)||void 0===a?void 0:a.number)&&void 0!==l?l:[0])&&0!==c.length?1===c.length?[c[0],c[0],c[0],c[0]]:2===c.length?[c[0],c[1],c[0],c[1]]:3===c.length?[c[0],c[1],c[2],0]:[c[0],c[1],c[2],c[3]]:[0,0,0,0],f=null!==(d=null===(r=null==e?void 0:e[o])||void 0===r?void 0:r.height)&&void 0!==d?d:0;let v=y[0],I=y[2];return z(v)&&(v=N(v,f)),z(I)&&(I=N(I,f)),f-v-I}var c;return 0}(t,o,s);if(a>0){const e=null!==(n=t.layouts[i].order)&&void 0!==n?n:[],o={};return e.forEach(e=>{const n=t.layouts[i].content[e];o[e]=function(t,e){var o,i,n,s;const a=null!==(o=e.setting)&&void 0!==o?o:{},l=B("height",e.bbox,a.autoProps);let r;if("ratio"===a.heightMode)r={setting:{heightMode:"ratio",aspectRatio:null!==(i=a.aspectRatio)&&void 0!==i?i:1,autoProps:{height:R.Custom}}};else{if(l!==R.Custom)return{height:l===R.Stretch?t:null,setting:{autoProps:{height:l}}};{let o=null!==(s=null===(n=e.bbox)||void 0===n?void 0:n.height)&&void 0!==s?s:t;o=z(o)?N(o,t):parseInt(o),r={height:o,setting:{heightMode:"fixed",autoProps:{height:R.Custom}}}}}return r}(a,n)}),o}return null}class Jl{constructor(){this.id="row-layout-transformer",this.layoutType=e.LayoutType.RowLayout}transformLayout(t,o,i,n){var s,a;if(o===i)return t;let l=(0,e.Immutable)(t);if(i===e.BrowserSizeMode.Small){const o=Zl(n,null===(s=window.runtimeInfo)||void 0===s?void 0:s.widgets,t.id);let i=0;Object.keys(null!==(a=t.content)&&void 0!==a?a:{}).sort((e,o)=>parseInt(t.content[e].bbox.left,10)-parseInt(t.content[o].bbox.left,10)).forEach(n=>{var s,a,r;const d=t.content[n];if(!d.isPending){if(l=l.setIn(["content",n,"bbox"],{left:i*mn,width:mn,height:null!==(a=null===(s=d.bbox)||void 0===s?void 0:s.height)&&void 0!==a?a:"auto"}),null!=o){const t=null!==(r=d.setting)&&void 0!==r?r:(0,e.Immutable)({});l=l.setIn(["content",n,"bbox","height"],o[n].height).setIn(["content",n,"setting"],t.merge(o[n].setting))}i+=1}})}return l}transformLayoutItem(t,e,o,i,n,s){return{item:t,index:e}}}class Kl{constructor(){this.id="grid-layout-transformer",this.layoutType=e.LayoutType.GridLayout,this.transformLayout=(t,o,i)=>{var n,s,l;if(o!==i&&i===e.BrowserSizeMode.Small){let o=(0,e.Immutable)(t);const i=null===(n=t.setting)||void 0===n?void 0:n.rootItem,r=null===(s=t.setting)||void 0===s?void 0:s.mainItemId;if(i&&(null===(l=t.content)||void 0===l?void 0:l[i])){const n=[],s=t.content[i];if(r){let l;if(Object.keys(t.content).some(e=>{const o=t.content[e];return(o.widgetId===r||o.sectionId===r)&&(l=e,!0)}),l){if(o=this.collectItem(t,i,l,s.children,n),(null==n?void 0:n.length)>0){const s=`${a.utils.getMaximumId(t)+1}`,r={id:s,bbox:{width:50},gridType:e.GridItemType.Tab,children:n,parent:i};o=o.setIn(["content",s],r),n.forEach(t=>{o=o.setIn(["content",t,"parent"],s)}),o=o.setIn(["content",i,"gridType"],e.GridItemType.Column),o=o.setIn(["content",i,"children"],[l,s]),o=o.setIn(["content",l,"parent"],i).setIn(["content",l,"bbox","width"],50)}return o}}o=this.collectItem(t,i,null,s.children,n),n.length>0&&(o=o.setIn(["content",i,"gridType"],e.GridItemType.Tab),o=o.setIn(["content",i,"children"],n))}return o}return t},this.collectItem=(t,o,i,n,s)=>{let a=t;return null==n||n.forEach(n=>{var l;if(!t.content[n].isPending&&n!==i){const r=t.content[n];r.gridType!==e.GridItemType.Column&&r.gridType!==e.GridItemType.Row&&r.gridType!==e.GridItemType.Tab?(s.push(n),i||(a=a.setIn(["content",n,"parent"],o))):(null===(l=r.children)||void 0===l?void 0:l.length)>0&&(a=this.collectItem(a,o,i,r.children,s))}}),a}}transformLayoutItem(t,e,o,i,n,s){return{index:e,item:t}}}const Ql=10;var tr=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};function er(o){const{isFirst:i,isLast:n,menuItems:s}=o,a=tr(o,["isFirst","isLast","menuItems"]),[l,r]=e.React.useState(s),d=e.ReactRedux.useSelector(t=>{var e,o,i;return null!==(i=null===(o=null===(e=t.appConfig)||void 0===e?void 0:e.forBuilderAttributes)||void 0===o?void 0:o.lockLayout)&&void 0!==i&&i});return e.React.useEffect(()=>{const t=s.filter(t=>{var e;return"function"==typeof t.visible?t.visible({layoutId:o.layoutId,layoutItem:o.layoutItem,clientRect:null}):null===(e=t.visible)||void 0===e||e});r(t)},[i,n,s,o.layoutId,o.layoutItem,d]),(0,t.jsx)(ee,Object.assign({menuItems:l},a))}var or=function(t,e,o,i){return new(o||(o=Promise))(function(n,s){function a(t){try{r(i.next(t))}catch(t){s(t)}}function l(t){try{r(i.throw(t))}catch(t){s(t)}}function r(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o(function(t){t(e)})).then(a,l)}r((i=i.apply(t,e||[])).next())})};function ir(t,i,n){return or(this,void 0,void 0,function*(){const s={},l=yield o.widgetService.createFromTemplate((0,o.getAppConfigAction)().appConfig,n,null,[a.utils.getCurrentSizeMode()],s,{isBlock:!0});let r=l[0];const d=l[1];r=o.widgetService.afterBatchCopied(r,(0,e.Immutable)(n.config),s);const u=(0,o.getAppConfigAction)(r),c=u.addTemplateContentToLayout(t,e.LayoutItemType.Widget,d),p=(u.appConfig.layouts[t].order||[]).indexOf(i);return u.adjustOrderOfItem(c,p>=0?p+1:NaN),a.utils.changeLayout(u.appConfig,Object.assign(Object.assign({},c),{autoScroll:!0})),c})}function nr(t,i,n){return or(this,void 0,void 0,function*(){const s={},l=yield o.screenGroupService.createFromTemplate((0,o.getAppConfigAction)().appConfig,n,null,[a.utils.getCurrentSizeMode()],s);let r=l[0];const d=l[1];r=o.widgetService.afterBatchCopied(r,(0,e.Immutable)(n.config),s);const u=(0,o.getAppConfigAction)(r),c=u.addTemplateContentToLayout(t,e.LayoutItemType.ScreenGroup,d),p=(u.appConfig.layouts[t].order||[]).indexOf(i);return u.adjustOrderOfItem(c,p>=0?p+1:NaN),a.utils.changeLayout(u.appConfig,Object.assign(Object.assign({},c),{autoScroll:!0})),c})}function sr(t,e){var i;const{layoutId:n,layoutItemId:s}=e,a=(0,o.getAppConfigAction)(t),l=a.appConfig.layouts[n],r=l.order,d=[].concat(r),u=r.indexOf(s);let c=r.length-1;for(let t=u+1;t<r.length;t++){const e=r[t];if(!(null===(i=l.content[e].setting)||void 0===i?void 0:i.isFloating)){c=t;break}}return d.splice(c+1,0,s),d.splice(u,1),a.editLayoutProperty(n,"order",d),a.appConfig}function ar(t,e){var i;const{layoutId:n,layoutItemId:s}=e,a=(0,o.getAppConfigAction)(t),l=a.appConfig.layouts[n],r=l.order,d=[].concat(r),u=r.indexOf(s);let c=0;for(let t=u-1;t>=0;t--){const e=r[t];if(!(null===(i=l.content[e].setting)||void 0===i?void 0:i.isFloating)){c=t;break}}return d.splice(u,1),d.splice(c,0,s),a.editLayoutProperty(n,"order",d),a.appConfig}var lr=h(5549),rr=h.n(lr),dr=h(7528),ur=h.n(dr);class cr extends e.React.PureComponent{constructor(t){super(t),this.state={isResizing:!1,dh:0,showBlockTemplatePopup:!1,showScreenTemplatePopup:!1,referenceElem:null},this.onResizeStart=(t,e,o)=>{const{padding:i}=this.props;this.minHeight=16+i,this.initHeight=o,this.setState({dh:0,isResizing:!0})},this.onResizing=(t,e,o,i,n)=>{let s=n;n<0&&this.initHeight+n<this.minHeight&&(s=this.minHeight-this.initHeight),this.setState({dh:s,isResizing:!0})},this.onResizeEnd=(t,i,n,s,a,l)=>{const{layoutId:r,layoutItem:d}=this.props;let u=a;a<0&&this.initHeight+a<this.minHeight&&(u=this.minHeight-this.initHeight);const c=(0,e.Immutable)(d.bbox||{}).set("height",Math.round(this.initHeight+u));(0,o.getAppConfigAction)().editLayoutItemProperty({layoutId:r,layoutItemId:d.id},"bbox",c).exec(),this.setState({isResizing:!1,dh:0})},this.toggleBlockTemplatePopup=()=>{(0,e.getAppStore)().getState().browserSizeMode!==e.BrowserSizeMode.Small?this.setState({showBlockTemplatePopup:!this.state.showBlockTemplatePopup}):o.appBuilderSync.publishSidePanelToApp({type:"templateBlock",templateMethod:"getBlockTemplates",onSelect:this.onTemplateBlockSelected})},this.toggleScreenTemplatePopup=()=>{(0,e.getAppStore)().getState().browserSizeMode!==e.BrowserSizeMode.Small?this.setState({showScreenTemplatePopup:!this.state.showScreenTemplatePopup}):o.appBuilderSync.publishSidePanelToApp({type:"template",templateMethod:"getScreenGroupTemplates",onSelect:this.onTemplateScreenGroupSelected})},this.removeLayoutItem=()=>{const{layoutId:t,layoutItemId:e}=this.props;(0,o.getAppConfigAction)().removeLayoutItem({layoutId:t,layoutItemId:e},!0).exec()},this.moveLayoutItemUp=()=>{const{layoutId:t,layoutItemId:e}=this.props,i=ar((0,o.getAppConfigAction)().appConfig,{layoutId:t,layoutItemId:e});(0,o.getAppConfigAction)(i).exec()},this.moveLayoutItemDown=()=>{const{layoutId:t,layoutItemId:e}=this.props,i=sr((0,o.getAppConfigAction)().appConfig,{layoutId:t,layoutItemId:e});(0,o.getAppConfigAction)(i).exec()},this.switchSetting=()=>{const{layoutId:t,layoutItemId:o,selected:i}=this.props;i||(0,e.getAppStore)().dispatch(e.appActions.selectionChanged({layoutId:t,layoutItemId:o}))},this.onTemplateBlockSelected=t=>{ir(this.props.layoutId,this.props.layoutItemId,t),this.setState({showBlockTemplatePopup:!1})},this.onTemplateScreenGroupSelected=t=>{nr(this.props.layoutId,this.props.layoutItemId,t),this.setState({showScreenTemplatePopup:!1})},this.fakeTopLayouts=(0,e.Immutable)({[e.BrowserSizeMode.Large]:`${this.props.layoutId}_${this.props.layoutItemId}_tlarge`,[e.BrowserSizeMode.Medium]:`${this.props.layoutId}_${this.props.layoutItemId}_tmedium`,[e.BrowserSizeMode.Small]:`${this.props.layoutId}_${this.props.layoutItemId}_tsmall`}),this.fakeBottomLayouts=(0,e.Immutable)({[e.BrowserSizeMode.Large]:`${this.props.layoutId}_${this.props.layoutItemId}_blarge`,[e.BrowserSizeMode.Medium]:`${this.props.layoutId}_${this.props.layoutItemId}_bmedium`,[e.BrowserSizeMode.Small]:`${this.props.layoutId}_${this.props.layoutItemId}_bsmall`}),this.minHeight=0,this.contextMenus=[{icon:rr(),title:this.props.formatMessage("insertABlock"),onClick:this.toggleBlockTemplatePopup,visible:()=>!rt()},{icon:ur(),title:this.props.formatMessage("insertAScreenGroup"),onClick:this.toggleScreenTemplatePopup,visible:()=>!rt()&&(0,e.getAppStore)().getState().browserSizeMode!==e.BrowserSizeMode.Small},ft,{icon:at(),title:this.props.formatMessage("setting"),onClick:this.switchSetting},{icon:K(),title:this.props.formatMessage("dragToMove",{label:dt(this.props.layoutItem)}),className:"tool-drag-handler",onClick:()=>null,visible:()=>!rt()},{icon:qs(),onClick:this.moveLayoutItemUp,title:this.props.formatMessage("moveup"),visible:()=>!this.props.isFirst&&!rt()},{icon:qs(),rotate:180,onClick:this.moveLayoutItemDown,title:this.props.formatMessage("movedown"),visible:()=>!this.props.isLast&&!rt()},{icon:X(),title:this.props.formatMessage("delete"),onClick:this.removeLayoutItem,visible:()=>!rt()}]}calHeight(t){if(this.state.isResizing)return`${this.initHeight+this.state.dh}px`;const e=function(t,e){const o=$(t.bbox||{},"height");if(!o||z(o))return"auto";switch(e.heightMode){case"auto":return"auto";case"fixed":return o;default:return null}}(this.props.layoutItem,t);return this.autoHeight="auto"===e,e}createContextMenu(){const{builderTheme:o}=this.pageContext,{layoutId:i,layoutItem:n,isFirst:s,isLast:a}=this.props;return(0,t.jsxs)(er,{layoutId:i,layoutItem:n,builderTheme:o,positionType:"center",size:28,iconSize:16,className:"widget-context-menu",menuItems:this.contextMenus,isFirst:s,isLast:a,children:[(0,t.jsx)("div",{ref:t=>{this.reference=t},css:e.css`position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;`}),this.state.showBlockTemplatePopup&&(0,t.jsx)(Ve.TemplateSelector,{templates:(0,Wi.getBlockTemplates)(),referenceElement:this.reference,onItemSelect:this.onTemplateBlockSelected,onClose:this.toggleBlockTemplatePopup}),this.state.showScreenTemplatePopup&&(0,t.jsx)(Ve.TemplateSelector,{templates:(0,Wi.getScreenGroupTemplates)(),referenceElement:this.reference,onItemSelect:this.onTemplateScreenGroupSelected,onClose:this.toggleScreenTemplatePopup})]})}getStyle(t){const{builderTheme:o}=this.pageContext,{index:i,gutter:n}=this.props,s=a.utils.isRTL()?-1:1;return[e.css`
        margin-top: ${i>0?`${n}px`:"unset"};
        width: ${Ja(t)};
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
          background-color: ${o.ref.palette.black};
        }

        .tool-drag-handler {
          cursor: move;
        }
      `,t.offsetX||t.offsetY?`translate(${(t.offsetX||0)*s}px, ${t.offsetY||0}px)`:null]}render(){const{layoutId:o,layoutItem:i,parentRef:n,draggable:s,selectable:l,isEmpty:r,selected:d}=this.props;if(!i||r)return null;const u=e.lodash.assign({},qa,i.setting),c=(0,e.classNames)("flow-layout-item d-flex",{selected:d});return(0,t.jsx)(a.PageContext.Consumer,{children:e=>{this.pageContext=e;const[a,r]=this.getStyle(u);return(0,t.jsx)(jo,{id:`${o}_block_${i.id}`,css:a,style:{transform:r},layoutId:o,layoutItemId:i.id,parentRef:n,onResizeStart:this.onResizeStart,onResizing:this.onResizing,onResizeEnd:this.onResizeEnd,left:!1,right:!1,top:!1,bottom:"fixed"===u.heightMode,restrict:!0,useDragHandler:!0,draggable:s,selectable:l,forbidContextMenu:!0,forbidToolbar:!0,isBlock:!0,className:c,autoHeight:this.autoHeight,children:!e.viewOnly&&this.createContextMenu()})}})}}const pr=e.ReactRedux.connect(Za)(cr);class hr extends e.React.PureComponent{constructor(){super(...arguments),this.state={isResizing:!1,dx:0,dy:0,dw:0,dh:0},this.onResizeStart=(t,e,o)=>{this.setState({isResizing:!0}),this.initHeight=o,this.initWidth=e},this.onResizing=(t,e,o,i,n)=>{this.setState({dx:e,dy:o,dw:i,dh:n})},this.onResizeEnd=(t,e,i,n,s,a)=>{const{layoutId:l,layoutItem:r}=this.props;let d=r.bbox;d=d.set("height",Math.round(parseInt(d.height,10)+s)).set("width",Math.round(parseInt(d.width,10)+n)).set("left",Math.round(parseInt(d.left,10)+e)).set("top",Math.round(parseInt(d.top,10)+i)).set("bottom",Math.round(parseInt(d.top,10)-s+i));(0,o.getAppConfigAction)().editLayoutItemProperty({layoutId:l,layoutItemId:r.id},"bbox",d).exec(),this.setState({isResizing:!1,dx:0,dy:0,dw:0,dh:0})}}calculatePosition(){const{layoutItem:t}=this.props,{dh:o,dw:i,isResizing:n}=this.state;return function(t,o={}){var i,n,s;const a=t.setting,l=null!==(i=null==a?void 0:a.floatingArea)&&void 0!==i?i:1,r=`${null!==(n=null==a?void 0:a.offsetX)&&void 0!==n?n:0}px`,d=`${null!==(s=null==a?void 0:a.offsetY)&&void 0!==s?s:0}px`,{dh:u,dw:c,initWidth:p,initHeight:h,isResizing:g}=o,m=O()?`translateX(calc(50% + ${r}))`:`translateX(calc(-50% + ${r}))`,y={};switch(l){case 1:y.left=r,y.top=d,y.transform=null;break;case 2:y.left="50%",y.top=d,y.transform=m;break;case 3:y.right=r,y.top=d,y.transform=null;break;case 4:y.left=r,y.top="50%",y.transform=`translateY(calc(-50% + ${d}))`;break;case 5:y.left="50%",y.top="50%",y.transform=`${m} translateY(calc(-50% + ${d}))`;break;case 6:y.right=r,y.top="50%",y.transform=`translateY(calc(-50% + ${d}))`;break;case 7:y.left=r,y.bottom=d,y.transform=null;break;case 8:y.left="50%",y.bottom=d,y.transform=m;break;case 9:y.right=r,y.bottom=d,y.transform=null}return e.css`
    position: fixed;
    z-index: 1;
    width: ${g?`${p+c}px`:$(t.bbox,"width")};
    height: ${g?`${h+u}px`:$(t.bbox,"height")};
    left: ${y.left};
    right: ${y.right};
    top: ${y.top};
    bottom: ${y.bottom};
    transform: ${y.transform};
  `}(t,{dh:o,dw:i,isResizing:n,initWidth:this.initWidth,initHeight:this.initHeight})}render(){const{layoutId:o,layoutItem:i,selectable:n,selected:s}=this.props;if(!i)return null;const l=(0,e.classNames)("flexbox-layout-item floating d-flex",{selected:s});return(0,t.jsx)(a.PageContext.Consumer,{children:e=>(this.pageContext=e,(0,t.jsx)(jo,{css:this.calculatePosition(),layoutId:o,layoutItemId:i.id,onResizeStart:this.onResizeStart,onResizing:this.onResizing,onResizeEnd:this.onResizeEnd,restrict:!0,draggable:!1,selectable:n,className:l}))})}}const gr=e.ReactRedux.connect(a.utils.mapStateToLayoutItemProps)(hr);function mr(n){const{formatMessage:s,activeScreenIndex:a,total:l,layoutId:r,layoutItemId:d,screenGroupId:u,browserSizeMode:p,hasPanel:h}=n,g=!e.ReactRedux.useSelector(t=>{var o,i,n;const s=null!==(i=null===(o=t.appConfig.forBuilderAttributes)||void 0===o?void 0:o.lockLayout)&&void 0!==i&&i;return(null===(n=t.appRuntimeInfo)||void 0===n?void 0:n.appMode)===e.AppMode.Design&&!s})||p!==e.BrowserSizeMode.Large,[m,y]=e.React.useState(!1),f=e.React.useRef(void 0),v=e.React.useCallback(()=>{y(!1)},[]),I=e.React.useCallback(()=>{const t=(0,c.getTheme2)();return e.css`
      border: none;

      .tooltip {
        color: ${t.ref.palette.black};
        background-color: ${t.ref.palette.neutral[600]};
        border-color: ${t.ref.palette.neutral[400]};
      }
    `},[]),x=e.React.useCallback(t=>{const i=(0,o.getAppConfigAction)(),n=i.appConfig.layouts[r].content[d].screenGroupId;i.createScreenFromTemplate(null,t).then(t=>{let o=i.appConfig;o=o.setIn(["screenGroups",n,"screens"],[].concat(o.screenGroups[n].screens,t)).setIn(["screens",t,"parent"],n),e.utils.changeAppConfig(o),(0,e.getAppStore)().dispatch(e.appActions.screenGroupNavInfoChanged(n,o.screenGroups[n].screens.length-1))}),v()},[v,r,d]),b=e.React.useCallback(()=>{if(h)y(!m);else{const t=(0,Wi.getScreenTemplates)().find(t=>"nopanel"===t.name);t&&x(t)}},[m,h,x]),w=e.React.useCallback(()=>{(0,e.getAppStore)().dispatch(e.appActions.screenGroupNavInfoChanged(u,a-1))},[u,a]),S=e.React.useCallback(()=>{(0,e.getAppStore)().dispatch(e.appActions.screenGroupNavInfoChanged(u,a+1))},[u,a]),C=e.React.useCallback(()=>{(0,o.getAppConfigAction)().removeScreenByIndex(a,u).exec(),a===l-1&&(0,e.getAppStore)().dispatch(e.appActions.screenGroupNavInfoChanged(u,a-1))},[a,l,u]),R=e.React.useCallback(()=>{const t=(0,o.getAppConfigAction)();t.duplicateScreenByIndex(a,u),t.exec(),(0,e.getAppStore)().dispatch(e.appActions.screenGroupNavInfoChanged(u,a+1))},[a,u]);return(0,t.jsx)("div",{className:"menu-bar d-flex justify-content-between align-items-center",children:(0,t.jsxs)("div",{className:"d-flex justify-content-start align-items-center",children:[(0,t.jsxs)("div",{className:"info ml-2",children:[s("screen"),": ",a+1," / ",l]}),(0,t.jsx)(Je,{title:0===a?"":s("previous"),placement:"bottom",css:I(),children:(0,t.jsx)(i.Button,{icon:!0,className:"rounded-circle",disabled:0===a,type:"tertiary",onClick:w,children:(0,t.jsx)(i.Icon,{icon:qs(),size:16})})}),(0,t.jsx)(Je,{title:a===l-1?"":s("next"),placement:"bottom",css:I(),children:(0,t.jsx)(i.Button,{icon:!0,className:"rounded-circle",disabled:a===l-1,type:"tertiary",onClick:S,children:(0,t.jsx)(i.Icon,{icon:qs(),rotate:180,size:16})})}),!g&&(0,t.jsx)("div",{ref:f,children:(0,t.jsx)(Je,{title:s("newScreen"),placement:"bottom",css:I(),children:(0,t.jsx)(i.Button,{icon:!0,onClick:b,className:"rounded-circle",type:"tertiary","data-testid":"addBtn",children:(0,t.jsx)(i.Icon,{icon:Rt(),size:16})})})}),!g&&m&&(0,t.jsx)(Ve.TemplateSelector,{templates:(0,Wi.getScreenTemplates)(),referenceElement:f.current,onItemSelect:x,onClose:v}),!g&&(0,t.jsx)(Je,{title:s("duplicateScreen"),placement:"bottom",css:I(),children:(0,t.jsx)(i.Button,{icon:!0,className:"rounded-circle",type:"tertiary",onClick:R,"data-testid":"duplicateBtn",children:(0,t.jsx)(i.Icon,{icon:Mt(),size:16})})}),!g&&l>1&&(0,t.jsx)(Je,{title:s("deleteScreen"),placement:"bottom",css:I(),children:(0,t.jsx)(i.Button,{icon:!0,className:"rounded-circle",type:"tertiary",onClick:C,"data-testid":"removeBtn",children:(0,t.jsx)(i.Icon,{icon:X(),size:16})})})]})})}function yr(){const t=[0];for(let e=1;e<=100;e++)t.push(e/100);return t}function fr(t){switch(t){case e.ScreenTriggerType.Top:return"0% 0% -98% 0%";case e.ScreenTriggerType.Bottom:return"-98% 0% -2px 0%";case e.ScreenTriggerType.Upper:return`-${100/3-1}% 0% -${200/3-1}% 0%`;case e.ScreenTriggerType.Lower:return`-${200/3-1}% 0% -${100/3-1}% 0%`;default:return}}function vr(t,o,i,n){const s=e.React.useRef(void 0),a=e.React.useRef(void 0);e.React.useEffect(()=>{s.current&&(s.current.unobserve(t),s.current=null);if(t&&"function"==typeof IntersectionObserver){const e=new IntersectionObserver(t=>{(t=>{const e=t.boundingClientRect,o=t.rootBounds,i=Math.abs(e.bottom-o.top)>=Math.abs(e.top-o.top);if(t.isIntersecting){if(a.current=!0,i)n(!0)}else if(a.current&&(a.current=!1,i))n(!1)})(t[0])},{threshold:yr(),root:o||document,rootMargin:fr(i)});return e.observe(t),s.current=e,()=>{s.current.unobserve(t),s.current=null}}},[t,o,n,i])}const Ir=.33,xr=.25;function br(t){const{props:o,viewHeight:n,headerHeight:s,isActive:a,verticalSpace:l,stretched:r,transitionType:d,screenTransitionType:u,isSmallSize:c}=t,{side:p,size:h,offset:g,background:m,textColor:y,overlay:f=!0,padding:v}=o.panel||{},I=(0,e.getAppStore)().getState().appContext.isRTL?"left"===p?"-":"":"right"===p?"-":"",x=i.styleUtils.toBackgroundEmotionStyle(null!=m?m:{}),b=parseFloat(l);if(c){const t=!f;return e.css`
      width: 100%;
      background: transparent;
      pointer-events: none;
      position: relative;
      opacity: ${d===e.ScreenTransitionType.Fade?a?"1":"0.5":null};
      min-height: ${u===e.ScreenTransitionType.Cover?`${n}px`:null};
      padding-top: ${u!==e.ScreenTransitionType.Fade&&t?`${Math.round(n*Ir)}px`:null};

      &.top-spacing > .panel-content {
        /* margin-top: ${Math.round(n*Ir)}px; */
      }

      .panel-content {
        width: 100%;
        ${f?"":x};
        color: ${f?"":y};
        /* margin-top: ${d===e.ScreenTransitionType.Push?"${Math.round(viewHeight * SCREEN_RATIO_IN_SMALL_SIZE)}px":"unset"}; */

        > .layout, > .layout-wrapper > .layout {
          pointer-events: auto;
          ${f?x:""};
          color: ${f?y:""};
          min-height: ${Math.round(n*xr)}px;
          padding: ${i.styleUtils.toCSSPadding(v)};
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
          height: ${Math.round(n*b/100)}px;
        }
      }

      .panel-content-placeholder {
        width: 1px;
        min-height: ${n}px;
      }

      body:not(.design-mode) & {
        min-height: ${u===e.ScreenTransitionType.Cover?"100vh":null};
        min-height: ${u===e.ScreenTransitionType.Cover?"calc(var(--vh) * 100)":null};
        padding-top: ${u!==e.ScreenTransitionType.Fade&&t?"33vh":null};
        padding-top: ${u!==e.ScreenTransitionType.Fade&&t?"calc(var(--vh) * 33)":null};

        > .layout, > .layout-wrapper > .layout {
          min-height: ${Math.round(25)}vh;
          min-height: calc(var(--vh) * ${Math.round(25)});
        }

        .panel-content-placeholder {
          min-height: 100vh;
          min-height: calc(var(--vh) * 100);
        }

        .panel-spacing {
          height: ${b}vh;
          height: calc(var(--vh) * ${b});
        }
      }
    `}return e.css`
    width: 100%;
    background: transparent;
    pointer-events: none;
    display: flex;
    flex-direction: ${"right"===p?"row-reverse":"row"};
    justify-content: ${"center"===p&&f?"center":"flex-start"};
    position: relative;
    opacity: ${d===e.ScreenTransitionType.Fade?a?"1":"0.5":null};

    &.top-spacing > .panel-content {
      /* margin-top: ${Math.round(2*n/3)}px; */
    }

    .panel-content {
      width: ${h};
      transform: ${f&&Math.abs(parseFloat(g))>0?`translateX(${I}${g})`:null};
      flex: 0 auto;
      min-height: ${r?`${n}px`:"unset"};
      ${f?"":x};
      color: ${f?"":y};

      > .layout,
      > .layout-wrapper > .layout {
        pointer-events: auto;
        ${f?x:""};
        color: ${f?y:""};
        min-height: ${Math.round(n*xr)}px;
        padding: ${i.styleUtils.toCSSPadding(v)};
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
        height: ${Math.round(n*b/100)}px;

        &.last-item {
          height: ${r?`${Math.round(n*b/100)}`:n}px;
        }
      }
    }

    .panel-content-placeholder {
      width: 1px;
      min-height: ${r?n:Math.round(n*xr)}px;
    }

    body:not(.design-mode) & {
      &.top-spacing > .panel-content {
        /* margin-top: 66.7vh; */
      }

      .panel-content {
        min-height: ${r?s>0?`calc(100vh - ${s}px)`:"100vh":"unset"};
        min-height: ${r?s>0?`calc(var(--vh) * 100 - ${s}px)`:"calc(var(--vh) * 100)":"unset"};
        > .layout, > .layout-wrapper > .layout {
          min-height: unset;
        }

        .panel-spacing {
          height: ${b}vh;
          height: calc(var(--vh) * ${b});

          &.last-item {
            height: ${r?b:100}vh;
            height: calc(var(--vh) * ${r?b:100});
          }
        }
      }
      .panel-content-placeholder {
        min-height: ${r?"100":Math.round(25)}vh;
        min-height: calc(var(--vh) * ${r?"100":Math.round(25)});
      }
    }
  `}var wr=h(3529),Sr=h.n(wr),Cr=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const Rr=o=>{const i=window.SVG,{className:n}=o,s=Cr(o,["className"]),a=(0,e.classNames)("jimu-icon jimu-icon-component",n);return i?(0,t.jsx)(i,Object.assign({className:a,src:Sr()},s)):(0,t.jsx)("svg",Object.assign({className:a},s))};function Tr(o){const{rootLayoutId:n,viewHeight:s,headerHeight:a,screenId:l,isActive:r,isAbsolute:d,isLast:u,isSmallSize:c,layoutEntry:p,isDesignMode:h,formatMessage:g,builderTheme:m}=o,y=e.ReactRedux.useSelector(t=>t.appConfig.screens[l]),f=e.ReactRedux.useSelector(t=>{var e,o,i;return null===(i=null===(o=null===(e=t.appRuntimeInfo)||void 0===e?void 0:e.screenPanelStates)||void 0===o?void 0:o[l])||void 0===i||i}),{main:v}=y,{side:I,size:x,overlay:b=!0}=y.panel||{},w=e.React.useRef(void 0),S=e.React.useCallback(()=>{(0,e.getAppStore)().dispatch(e.appActions.screenPanelVisibleChanged(l,!0))},[l]);const C=(0,e.classNames)("screen-main-panel",{"is-active":r,"last-one":u});return(0,t.jsx)(e.PageVisibilityContext.Provider,{value:!d||r,children:(0,t.jsxs)("div",{id:`${n}_screen_${l}`,className:C,css:function(){var t,o,n,l,r,u,p,h;const g=Object.assign(Object.assign({},null!==(o=null===(t=y.main)||void 0===t?void 0:t.background)&&void 0!==o?o:{}),{color:(null===(l=null===(n=y.main)||void 0===n?void 0:n.background)||void 0===l?void 0:l.color)||"var(--sys-color-surface-background)"});if(c){const t=!b&&null!=y.panel,o=t?`${Math.round(s*Ir)}px`:`${s}px`,n=t?`${Math.round(33)}`:"100";return e.css`
        pointer-events: none !important;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: ${s}px;

        > .layout {
          ${i.styleUtils.toBackgroundEmotionStyle(g)};
          color: ${null!==(u=null===(r=y.main)||void 0===r?void 0:r.textColor)&&void 0!==u?u:null};
          height: ${o} !important;
          border: none !important;
          pointer-events: auto;
        }

        body:not(.design-mode) & {
          height: ${a>0?`calc(100vh - ${a}px)`:"100vh"};
          height: ${a>0?`calc(var(--vh) * 100 - ${a}px)`:"calc(var(--vh) * 100)"};
          > .layout {
            height: ${n}vh !important;
            height: calc(var(--vh) * ${n}) !important;
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
      `}let f="0px",v="0px";"none"!==I&&(b||"right"===I||(f=x),b||"right"!==I||(v=x));const w=m?e.css`
      color: ${m.ref.palette.neutral[1200]};
      background-color: ${m.ref.palette.neutral[500]};
      border-color: ${m.ref.palette.neutral[600]};
      &:hover {
        color: ${m.ref.palette.black};
        background-color: ${m.ref.palette.neutral[600]};
      }
    `:null;return e.css`
      ${i.styleUtils.toBackgroundEmotionStyle(g)};
      color: ${null!==(h=null===(p=y.main)||void 0===p?void 0:p.textColor)&&void 0!==h?h:null};
      left: ${d?f:null};
      right: ${d?v:null};
      margin-left: ${d?null:f};
      margin-right: ${d?null:v};
      pointer-events: auto;
      display: flex;
      flex-direction: column;
      position: relative;

      > .layout {
        height: ${s}px !important;
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
          ${w};
          svg {
            margin-right: 0;
            margin-left: 0;
          }
        }
      }
    `}(),ref:w,"data-screenid":l,"data-index":o.index,children:[(0,t.jsx)(p,{layouts:v.layout,isInWidget:!0}),(0,t.jsx)("div",{className:"spacing-area"}),h&&!f&&(0,t.jsx)("div",{className:"toggle-visible-btn",onClick:S,"data-testid":"toggleBtn",children:(0,t.jsx)(Je,{placement:"auto",title:g("showInDesignView"),children:(0,t.jsx)(i.Button,{type:"default",size:"sm",className:"rounded-1",children:(0,t.jsx)(Rr,{size:"m"})})})})]})})}function Mr(t,o,i,n,s){return t===e.ScreenTransitionType.Fade?e.css`
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
    `:void 0}function Lr(t,o,i){return t===e.ScreenTransitionType.Fade?e.css`
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
    `:void 0}function Pr(o){const{rootLayoutId:i,activeIndex:n,viewHeight:s,headerHeight:a,screens:l,transitionType:r,isSmallSize:d,layoutEntry:u,isDesignMode:c,formatMessage:p,builderTheme:h}=o;return(0,t.jsxs)(e.React.Fragment,{children:[(0,t.jsx)("div",{className:"screen-container",css:Mr(r,s,a,d,l.length),children:l.map((o,g)=>(0,t.jsx)(Tr,{rootLayoutId:i,index:g,isActive:n===g,screenId:o,viewHeight:s,headerHeight:a,isAbsolute:r===e.ScreenTransitionType.Fade,isLast:g===l.length-1,isSmallSize:d,layoutEntry:u,isDesignMode:c,formatMessage:p,builderTheme:h},o))}),(0,t.jsx)("div",{className:"screen-placeholder",css:Lr(r,s)})]})}const Ar=(0,c.withBuilderTheme)(Ve.WidgetListPopper),jr=e.css`
  width: 36px;
  height: 36px;
  padding: 0.5rem;
`,zr=e.css`
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  background: transparent;
`,$r=e.css`
  display: flex;
  height: 200px;
  position: relative;
  z-index: 1;
  border: 1px dashed var(--sys-color-divider-primary);

  body.lock-layout &,
  body:not(.design-mode) & {
    display: none !important;
  }

  .action-item {
    z-index: 1;
  }
`;function Nr(n){const{layouts:s}=n,l=e.ReactRedux.useSelector(t=>s[t.browserSizeMode]||s[t.appConfig.mainSizeMode]),[r,d]=e.React.useState(!1),u=e.React.useRef(null),c=e.React.useCallback(t=>{W((0,o.getAppConfigAction)().appConfig,t,l).then(({layoutInfo:i,updatedAppConfig:n})=>{const s=o.LayoutServiceProvider.getInstance().getServiceByType(e.LayoutType.ColumnLayout).processAfterItemAdded(n,t,i,{currentSizeMode:null,containerRect:{width:100,height:100},itemRect:{left:0,top:0},insertIndex:null});a.utils.changeLayout(s,i)}),d(!1)},[l]),p=e.React.useCallback((t,i,n)=>{W((0,o.getAppConfigAction)().appConfig,t,l).then(({layoutInfo:s,updatedAppConfig:l})=>{const r=o.LayoutServiceProvider.getInstance().getServiceByType(e.LayoutType.ColumnLayout).processAfterItemAdded(l,t,s,{currentSizeMode:null,containerRect:i,itemRect:n,insertIndex:null});a.utils.changeLayout(r,s)})},[l]),h=e.React.useCallback(t=>!t.layoutInfo||t.layoutInfo.layoutId!==l,[l]);return(0,t.jsx)(a.LayoutContext.Provider,{value:{isItemAccepted:h},children:(0,t.jsxs)("div",{className:"placeholder-btn w-100 justify-content-center align-items-center",css:$r,children:[(0,t.jsx)(Xe,{css:zr,layouts:s,onDrop:p}),(0,t.jsx)("div",{className:"action-item",ref:u,children:(0,t.jsx)(i.Button,{icon:!0,css:jr,onClick:t=>{t.stopPropagation(),(0,e.getAppStore)().getState().browserSizeMode!==e.BrowserSizeMode.Small?d(!r):o.appBuilderSync.publishSidePanelToApp({type:"widget",isPlaceholder:!0,isItemAccepted:h,onSelect:c})},children:(0,t.jsx)(Ze,{size:"m"})})}),r&&(0,t.jsx)(Ar,{referenceElement:u.current,isAccepted:h,onSelect:c,onClose:()=>{d(!1)}})]})})}var kr=h(6490),Or=h.n(kr),Er=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const Br=o=>{const i=window.SVG,{className:n}=o,s=Er(o,["className"]),a=(0,e.classNames)("jimu-icon jimu-icon-component",n);return i?(0,t.jsx)(i,Object.assign({className:a,src:Or()},s)):(0,t.jsx)("svg",Object.assign({className:a},s))};function Dr(t){const{props:o,viewHeight:i,headerHeight:n,isActive:s,verticalSpace:a,stretched:l,transitionType:r,screenTransitionType:d,isSmallSize:u,builderTheme:c,isResizing:p,width:h}=t,{side:g,size:m}=o.panel||{},y=e.css`
    color: ${c.ref.palette.neutral[1200]};
    background-color: ${c.ref.palette.neutral[500]};
    border-color: ${c.ref.palette.neutral[600]};
    &:hover {
      color: ${c.ref.palette.black};
      background-color: ${c.ref.palette.neutral[600]};
    }
  `;return u?e.css`
      ${br({props:o,viewHeight:i,headerHeight:n,isActive:s,verticalSpace:a,stretched:l,transitionType:r,screenTransitionType:d,isSmallSize:u})};

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
          ${y};
        }
      }
      body:not(.design-mode) & .toggle-visible-btn {
        display: none !important;
      }
    `:e.css`
    ${br({props:o,viewHeight:i,headerHeight:n,isActive:s,verticalSpace:a,stretched:l,transitionType:r,screenTransitionType:d,isSmallSize:u})};

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
        ${y};
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
      outline: 1px solid var(--sys-color-divider-primary);
      width: 5px;
      pointer-events: auto;
      &:after {
        content: '';
        position: absolute;
        z-index: -1;
        top: 0;
        bottom: 0;
        left: 50%;
        border-left: 1px dotted var(--sys-color-divider-primary);
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
  `}function Fr(n){const{index:s,screenId:l,onInteractionChange:r,onHeightChange:d,builderTheme:u,viewHeight:c,headerHeight:p,layoutEntry:h,isActive:g,isSmallSize:m,isDesignMode:y,transitionType:f,screenTransitionType:v,triggerType:I,stretched:x,viewOnly:b,verticalSpace:w="0",formatMessage:S}=n,C=e.ReactRedux.useSelector(t=>t.appConfig.screens[l]),R=e.ReactRedux.useSelector(t=>{var e,o,i;return null===(i=null===(o=null===(e=t.appRuntimeInfo)||void 0===e?void 0:e.screenPanelStates)||void 0===o?void 0:o[l])||void 0===i||i}),{panel:T}=C,M=e.React.useRef(void 0),L=e.React.useRef(void 0),P=e.React.useRef(void 0),[A,j]=e.React.useState(!1),[z,$]=e.React.useState(0),[N,k]=e.React.useState(),O=e.React.useRef(R),E=e.React.useRef(void 0),B=e.React.useMemo(()=>{if(T&&T.overlay&&Math.abs(parseFloat(T.offset))>0){const t=(0,e.getAppStore)().getState().appContext.isRTL?"left"===T.side?-1:1:"right"===T.side?-1:1;return parseFloat(T.offset)*t}return 0},[T]),D=e.React.useCallback((t,e)=>{E.current=e,j(!0),$(0)},[]),F=e.React.useCallback((t,e,o,i,n)=>{$(i)},[]),H=e.React.useCallback((t,e,i,n,s)=>{!function(t,e){var i;const n=(0,o.getAppConfigAction)(),s=n.appConfig.screens[t];let l;l=a.utils.isPercentage(null===(i=s.panel)||void 0===i?void 0:i.size)?a.utils.toRatio(e,document.body.clientWidth):`${Math.round(e)}px`,n.editScreenProperty(t,"panel.size",l).exec()}(l,E.current+n),j(!1)},[l]);e.React.useEffect(()=>{y?O.current?k({opacity:1,x:B,y:0,transition:{type:"tween",duration:0}}):k({opacity:0,transition:{type:"tween",duration:0}}):k({opacity:1,x:B,y:0,transition:{type:"tween",duration:0}})},[y,B]),e.React.useEffect(()=>{if(!P.current&&L.current)return P.current=(0,Gt.interact)(L.current),Yt(P.current,{layoutItemId:l,onResizeStart:D,onResizing:F,onResizeEnd:H}),()=>{P.current&&(P.current.unset(),P.current=null)}},[l,D,F,H]);const V=e.React.useCallback(t=>{r(s,t)},[s,r]),W=e.React.useCallback(({width:t,height:e})=>{d(s,e)},[s,d]),G=e.React.useCallback(()=>{M.current.classList.remove("minimized"),k({opacity:1,scale:1,x:B,y:0,transition:{type:"tween",duration:.5,ease:"easeOut"}})},[B]);e.React.useEffect(()=>{O.current!==R&&R&&(G(),O.current=R)},[R,G]),vr(M.current,n.refElement,m?e.ScreenTriggerType.Lower:null!=I?I:e.ScreenTriggerType.Bottom,V);const U=e.React.useCallback(()=>!b&&g&&(null==T?void 0:T.overlay),[T,g,b]);return(0,t.jsxs)("div",{className:(0,e.classNames)("screen-side-panel",{"top-spacing":0===s&&((null==T?void 0:T.overlay)||m)}),"data-screenid":l,"data-index":s,ref:M,css:Dr({props:C,viewHeight:c,headerHeight:p,isActive:g,verticalSpace:w,stretched:x||null==T,transitionType:f,screenTransitionType:v,isSmallSize:m,panelVisible:R,builderTheme:u,isResizing:A,width:E.current+z}),children:[T&&(0,t.jsxs)(e.motion.div,{className:(0,e.classNames)("panel-content",{visible:R}),ref:L,animate:N,style:{transform:`translateX(${B}px)`},children:[(0,t.jsxs)("div",{className:"layout-wrapper",children:[(0,t.jsx)(h,{layouts:T.layout}),!b&&(0,t.jsx)(Nr,{layouts:T.layout}),(0,t.jsx)("span",{className:"resize-handle left rnd-resize-left"}),(0,t.jsx)("span",{className:"resize-handle right rnd-resize-right"})]}),U()&&(0,t.jsx)("div",{className:"toggle-visible-btn",onClick:t=>{const o=t.target.getBoundingClientRect(),i=M.current.getBoundingClientRect(),n=(0,e.getAppStore)().getState().appContext.isRTL;M.current.classList.add("minimized"),k({opacity:0,scale:0,x:n?i.left-o.left:i.right-o.right,y:i.bottom-o.bottom,transition:{type:"tween",duration:.5,ease:"easeOut"}}),setTimeout(()=>{O.current=!1,(0,e.getAppStore)().dispatch(e.appActions.screenPanelVisibleChanged(l,!1))},600)},"data-testid":`toggleBtn-${R}`,children:(0,t.jsx)(Je,{placement:"auto",title:S("hideInDesignView"),children:(0,t.jsx)(i.Button,{type:"default",size:"sm",className:"rounded-1",children:(0,t.jsx)(Br,{size:"m"})})})}),(0,t.jsx)("div",{className:(0,e.classNames)("panel-spacing",{"last-item":n.isLast})})]}),!T&&R&&(0,t.jsx)("div",{className:"panel-content-placeholder"}),(0,t.jsx)(e.ReactResizeDetector,{targetRef:M,handleHeight:!0,onResize:W})]})}function Hr(i){const{layoutId:n,layoutItemId:s,builderTheme:l,layoutItem:r,formatMessage:d,isFirst:u,isLast:c}=i,[p,h]=e.React.useState(!1),[g,m]=e.React.useState(!1),y=e.React.useRef(void 0),f=e.React.useCallback(t=>{ir(n,s,t),h(!1)},[n,s]),v=e.React.useCallback(()=>{(0,e.getAppStore)().getState().browserSizeMode!==e.BrowserSizeMode.Small?h(!p):o.appBuilderSync.publishSidePanelToApp({type:"templateBlock",templateMethod:"getBlockTemplates",onSelect:f})},[p,f]),I=e.React.useCallback(()=>{m(!g)},[g]),x=e.React.useCallback(t=>{nr(n,s,t),m(!1)},[n,s]),b=e.React.useCallback(()=>{const t=ar((0,o.getAppConfigAction)().appConfig,{layoutId:n,layoutItemId:s});(0,o.getAppConfigAction)(t).exec()},[n,s]),w=e.React.useCallback(()=>{const t=sr((0,o.getAppConfigAction)().appConfig,{layoutId:n,layoutItemId:s});(0,o.getAppConfigAction)(t).exec()},[n,s]),S=e.React.useCallback(()=>{o.appBuilderSync.publishConfirmDeleteToApp({layoutId:n,layoutItemId:s})},[n,s]),C=e.React.useCallback(()=>(0,e.getAppStore)().getState().browserSizeMode===e.BrowserSizeMode.Large,[]),R=[{icon:rr(),title:d("insertABlock"),onClick:v,visible:()=>!rt()},{icon:ur(),title:d("insertAScreenGroup"),onClick:I,visible:()=>C()&&!rt()},gt,Object.assign(Object.assign({},ft),{visible:()=>C()&&!rt()}),{icon:at(),title:d("setting"),onClick:()=>{(0,e.getAppStore)().dispatch(e.appActions.selectionChanged({layoutId:n,layoutItemId:s}))}},{icon:K(),title:d("dragToMove",{label:dt(r)}),className:"tool-drag-handler",onClick:()=>null,visible:()=>!rt()},{icon:qs(),onClick:b,title:d("moveup"),visible:()=>!u&&!rt()},{icon:qs(),rotate:180,onClick:w,title:d("movedown"),visible:()=>!c&&!rt()},{icon:X(),title:d("delete"),onClick:S,visible:()=>!rt()}];return(0,t.jsxs)(er,{layoutId:n,layoutItem:r,builderTheme:l,positionType:"center",size:a.CONTEXT_MENU_ITEM_SIZE,iconSize:a.CONTEXT_MENU_ICON_SIZE,className:"widget-context-menu",menuItems:R,isFirst:u,isLast:c,children:[(0,t.jsx)("div",{ref:y,css:e.css`position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;`}),p&&(0,t.jsx)(Ve.TemplateSelector,{templates:(0,Wi.getBlockTemplates)(),referenceElement:y.current,onItemSelect:f,onClose:v}),g&&(0,t.jsx)(Ve.TemplateSelector,{templates:(0,Wi.getScreenGroupTemplates)(),referenceElement:y.current,onItemSelect:x,onClose:I})]})}function Vr(t,o,i,n,s,a){return e.css`
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
      background-color: ${o.ref.palette.neutral[300]};
      overflow: visible;

      .info {
        color: ${o.ref.palette.black};
      }

      .jimu-btn svg {
        color: ${o.ref.palette.neutral[1e3]};
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
        padding-top: ${Math.round(t*Ir)}px;
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
          outline: 2px solid ${o.sys.color.primary.dark};
          display: block;
        }
      }
    }

    &:hover .group-tip {
      display: block;
    }
  `}function Wr(i){var n;const{layoutId:s,layoutItemId:l,layoutItem:r,formatMessage:d,itemIndex:u,isFirst:c,isLast:p}=i,{screenGroupId:h}=r,g=e.ReactRedux.useSelector(t=>{var e;const o=null===(e=t.appRuntimeInfo)||void 0===e?void 0:e.selection;return!!o&&(o.layoutId===s&&o.layoutItemId===l)}),m=e.ReactRedux.useSelector(t=>t.appConfig.screenGroups[r.screenGroupId]),y=e.ReactRedux.useSelector(t=>t.appConfig.screenGroups[r.screenGroupId].screens.some(e=>null!=t.appConfig.screens[e].panel)),f=e.ReactRedux.useSelector(t=>t.browserSizeMode),{screens:v,stretchPanel:I=!0,triggerType:x=e.ScreenTriggerType.Bottom,verticalSpace:b="0",panelTransitionType:w=e.ScreenTransitionType.Push}=m;let S=null!==(n=m.transitionType)&&void 0!==n?n:e.ScreenTransitionType.Fade;f!==e.BrowserSizeMode.Small||y||(S=e.ScreenTransitionType.Cover);const C=e.ReactRedux.useSelector(t=>{var e;return null===(e=t.appRuntimeInfo.screenGroupNavInfos)||void 0===e?void 0:e[h]}),R=e.ReactRedux.useSelector(t=>{const o=t.browserSizeMode||e.BrowserSizeMode.Large,i=e.utils.findViewportSize(t.appConfig,o);return i.width>0?i:e.CONSTANTS.SCREEN_RESOLUTIONS[o][1]}),T=e.ReactRedux.useSelector(t=>{var o;return(null===(o=t.appRuntimeInfo)||void 0===o?void 0:o.appMode)===e.AppMode.Design}),{viewOnly:M,builderTheme:L,pageId:P}=e.React.useContext(a.PageContext),A=e.ReactRedux.useSelector(t=>{const e=t.appConfig.pages[P];if(null==e?void 0:e.header){const e=t.appConfig.header;if(null==e?void 0:e.sticky){const o=t.browserSizeMode,i=t.appConfig.mainSizeMode,n=e.height[o]||e.height[i]||75;return parseInt(n,10)}}return 0}),j=e.React.useRef(void 0),z=e.React.useRef(void 0),$=e.React.useRef(void 0),N=e.React.useRef(void 0),k=e.React.useRef(!0),O=e.React.useRef(void 0),E=e.React.useRef(void 0),[B,D]=e.React.useState(0);e.React.useEffect(()=>{if(g){const t=document.querySelector(`div.exb-rnd[data-layoutid="${s}"][data-layoutitemid="${l}"]`);null!=t&&t.scrollIntoView({behavior:"auto",block:"center"})}},[g,s,l]);const F=e.React.useMemo(()=>{var t,o,i;if(f!==e.BrowserSizeMode.Small)return!1;const n=(0,e.getAppStore)().getState().appConfig,s=null===(o=null===(t=n.screenGroups)||void 0===t?void 0:t[h])||void 0===o?void 0:o.screens;if(null==s?void 0:s[B]){return null===(i=n.screens[s[B]].panel)||void 0===i?void 0:i.overlay}return!1},[h,B,f]),H=e.React.useCallback(t=>{var o;const i=z.current.querySelectorAll("div.screen-side-panel");let n=0;if(i.forEach(e=>{+e.getAttribute("data-index")<t&&(n+=e.clientHeight)}),z.current.scrollTop=n,S!==e.ScreenTransitionType.Fade){const t=null===(o=$.current)||void 0===o?void 0:o.children[0];t&&(t.scrollTop=z.current.scrollTop)}},[S]),V=e.React.useCallback(()=>{Vt(!0)},[]),W=e.React.useCallback(()=>{Vt(!1)},[]);e.React.useEffect(()=>{if(j.current&&!E.current){const{layoutId:t,layoutItemId:e,layoutItem:o}=i;E.current=(0,Gt.interact)(j.current).origin("parent"),E.current=Ht(E.current,{layoutId:t,layoutItemId:e,onDragStart:V,onDragEnd:W,useDragHandler:!0,itemType:o.type,rootLayoutId:()=>t,restrict:()=>!0}),E.current.draggable({modifiers:[Gt.interact.modifiers.restrictRect({restriction:"parent"})]})}return()=>{E.current&&(E.current.unset(),E.current=null)}},[]),e.React.useEffect(()=>{null!=(null==C?void 0:C.activeIndex)&&C.activeIndex!==B&&(!function(t,o){var i;const n=(0,e.getAppStore)().getState().appConfig,s=(0,e.getAppStore)().getState().browserSizeMode,a=null===(i=(0,e.getAppStore)().getState().appRuntimeInfo)||void 0===i?void 0:i.selection;if(null!=a){const i=n.screenGroups[t].screens[o],l=n.screens[i];if(l){const t=l.main.layout[s];a.layoutId===t&&(0,e.getAppStore)().dispatch(e.appActions.selectionChanged(null)),null!=document.querySelector(`div[data-layoutid="${t}"] div[data-layoutid="${a.layoutId}"][data-layoutitemid="${a.layoutItemId}"]`)&&(0,e.getAppStore)().dispatch(e.appActions.selectionChanged(null))}}}(h,B),D(C.activeIndex),C.scrollIntoView&&(k.current=!1,H(C.activeIndex),setTimeout(()=>{k.current=!0},200)))},[C,B,H,h]),e.React.useEffect(()=>{O.current&&(z.current.removeEventListener("scroll",O.current),O.current=null),O.current=()=>{var t;const o=null===(t=$.current)||void 0===t?void 0:t.children[0];o&&S!==e.ScreenTransitionType.Fade&&(o.scrollTop=z.current.scrollTop)},z.current.addEventListener("scroll",O.current)},[S]),e.React.useEffect(()=>{(0,e.getAppStore)().dispatch(e.appActions.screenGroupNavInfoChanged(h,0))},[T,h]);const G=e.React.useCallback((t,o)=>{k.current&&(o&&t!==B?(0,e.getAppStore)().dispatch(e.appActions.screenGroupNavInfoChanged(h,t,!1)):!o&&t>0&&(0,e.getAppStore)().dispatch(e.appActions.screenGroupNavInfoChanged(h,t-1,!1)))},[B,h]),U=e.React.useCallback(t=>{t.stopPropagation(),rt()||M||f===e.BrowserSizeMode.Small||(0,e.getAppStore)().dispatch(e.appActions.selectionChanged({layoutId:s,layoutItemId:l}))},[M,f,s,l]),_=e.React.useCallback(()=>{if(!z.current)return;const t=z.current.children[0],e=z.current.children[1];t.style.height=`${e.clientHeight}px`},[]),Y=e.React.useMemo(()=>e.lodash.debounce(_,200),[_]),X=e.React.useCallback((t,o)=>{if(!z.current)return;const i=z.current.children[0],n=z.current.children[1];if(S!==e.ScreenTransitionType.Fade)if(S!==e.ScreenTransitionType.Cover){if(S===e.ScreenTransitionType.Push){const e=i.querySelector(`div.screen-main-panel[data-index="${t}"]`),o=n.querySelector(`div.screen-side-panel[data-index="${t}"]`);e.style.height=`${o.clientHeight}px`,i.style.height=`${n.clientHeight}px`}}else!function(t,o,i){const n=t.querySelectorAll("div.screen-main-panel"),s=o.querySelectorAll("div.screen-side-panel"),a=n.length;for(let t=1;t<a;t++){const e=n.item(t),o=n.item(t-1),i=s.item(t-1);e.style.marginTop=i.clientHeight-o.clientHeight+"px"}i!==e.BrowserSizeMode.Small&&(t.style.height=`${o.clientHeight}px`)}(i,n,f);else i.style.height=`${n.clientHeight}px`},[f,S]),q=e.React.useCallback(()=>{(0,e.getAppStore)().dispatch(o.builderActions.confirmDeleteContentChanged({layoutId:s,layoutItemId:l}))},[s,l]),Z=e.React.useMemo(()=>({delete:q,backspace:q}),[q]);return v.length>0?(0,t.jsx)(oe.Provider,{value:`${s}:${l}`,children:(0,t.jsxs)("div",{className:(0,e.classNames)("builder-layout-item exb-rnd",{selected:g,"small-size":f===e.BrowserSizeMode.Small}),css:Vr(R.height,L,c,p,g,F),"data-layoutitemid":l,"data-layoutid":s,onClick:U,ref:j,children:[(0,t.jsx)("div",{className:"screen-menu",children:(0,t.jsx)(mr,{activeScreenIndex:B,itemIndex:u,total:v.length,screenGroupId:h,layoutId:s,layoutItemId:l,browserSizeMode:f,hasPanel:y,formatMessage:d})}),(0,t.jsxs)("div",{className:"screen-group",ref:z,children:[(0,t.jsx)("div",{className:"main-panels",ref:$,children:(0,t.jsx)(Pr,{rootLayoutId:s,activeIndex:B,viewHeight:R.height,headerHeight:A,screens:v,transitionType:S,layoutEntry:ro,isSmallSize:f===e.BrowserSizeMode.Small,isDesignMode:T,builderTheme:L,formatMessage:d})}),(0,t.jsxs)("div",{className:"side-panels",ref:N,children:[v.map((o,i)=>(0,t.jsx)(Fr,{index:i,isLast:i===v.length-1,screenId:o,viewHeight:R.height,headerHeight:A,refElement:T?j.current:null,layoutEntry:ro,viewOnly:M,builderTheme:L,isActive:i===B,isSmallSize:f===e.BrowserSizeMode.Small,isDesignMode:T,stretched:I,triggerType:x,verticalSpace:b,transitionType:w,screenTransitionType:S,onHeightChange:X,onInteractionChange:G,formatMessage:d},o)),(0,t.jsx)(e.ReactResizeDetector,{targetRef:N,handleHeight:!0,onResize:Y})]})]}),!M&&(0,t.jsx)(Hr,{layoutId:s,layoutItemId:l,layoutItem:r,isFirst:c,isLast:p,builderTheme:L,formatMessage:d}),T&&(0,t.jsx)("div",{className:"group-tip",children:(0,t.jsx)("div",{className:"tip-content"})}),T&&g&&(0,t.jsx)(e.Keyboard,{bindings:Z})]})}):null}var Gr=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const Ur=o=>{const i=window.SVG,{className:n}=o,s=Gr(o,["className"]),a=(0,e.classNames)("jimu-icon jimu-icon-component",n);return i?(0,t.jsx)(i,Object.assign({className:a,src:rr()},s)):(0,t.jsx)("svg",Object.assign({className:a},s))};var _r=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const Yr=o=>{const i=window.SVG,{className:n}=o,s=_r(o,["className"]),a=(0,e.classNames)("jimu-icon jimu-icon-component",n);return i?(0,t.jsx)(i,Object.assign({className:a,src:ur()},s)):(0,t.jsx)("svg",Object.assign({className:a},s))},Xr=e.css`
  pointer-events: auto;
`;function qr(t){return e.css`
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
      font-size: 1rem;
      font-weight: 500;
      line-height: 32px;
    }
    .btn {
      margin-right: 2rem;
      background: ${t.ref.palette.neutral[600]};
      &:hover {
        background: ${t.ref.palette.neutral[700]};
      }
    }
    .action-item {
      width: 32px;
    }

    .action-separator {
      width: 300px;
      height: 1px;
      background-color: ${t.ref.palette.neutral[1100]};
    }
  `}function Zr(t){return t===e.BrowserSizeMode.Large}function Jr(n){const{pageContext:s,browserSizeMode:a,onPageTemplateSelected:l,onBlockTemplateSelected:r,onScreenTemplateSelected:d,blockOnly:u}=n,{builderTheme:c,formatMessage:p,isHeader:h,isFooter:g}=s,[m,y]=e.React.useState(!1),[f,v]=e.React.useState(!1),[I,x]=e.React.useState(!1),b=e.React.useRef(null),w=e.React.useRef(null),S=e.React.useRef(null),C=e.ReactRedux.useSelector(t=>{var o,i,n;const s=null!==(n=null===(i=null===(o=t.appConfig)||void 0===o?void 0:o.forBuilderAttributes)||void 0===i?void 0:i.lockLayout)&&void 0!==n&&n;return t.appRuntimeInfo.appMode===e.AppMode.Design&&!s}),R=!h&&!g;let T;T=h?p("chooseHeaderTemplate"):g?p("chooseFooterTemplate"):p("chooseTemplate",{type:s.isDialog?p("dialog").toLocaleLowerCase():p("page").toLocaleLowerCase()});return C?(0,t.jsxs)("div",{className:"w-100 flex-column justify-content-center align-items-center",css:qr(c),children:[(0,t.jsxs)("div",{className:"d-flex",children:[R&&(0,t.jsxs)(e.React.Fragment,{children:[(0,t.jsx)(Je,{placement:"bottom",title:p("insertABlock"),children:(0,t.jsx)("div",{className:"action-item",children:(0,t.jsx)(i.Button,{ref:b,icon:!0,onClick:t=>{t.stopPropagation(),a!==e.BrowserSizeMode.Small?v(!f):o.appBuilderSync.publishSidePanelToApp({type:"templateBlock",templateMethod:"getBlockTemplates",onSelect:r})},css:Xr,className:"rounded-circle",children:(0,t.jsx)(Ur,{size:"m",color:c.ref.palette.neutral[1100]})})})}),Zr(a)&&(0,t.jsx)(Je,{placement:"bottom",title:p("insertAScreenGroup"),children:(0,t.jsx)("div",{className:"action-item ml-5",children:(0,t.jsx)(i.Button,{ref:w,icon:!0,onClick:t=>{t.stopPropagation(),x(!I)},css:Xr,className:"rounded-circle",children:(0,t.jsx)(Yr,{size:16,color:c.ref.palette.neutral[1100]})})})})]}),!u&&(0,t.jsx)(Je,{placement:"bottom",title:T,children:(0,t.jsx)("div",{className:(0,e.classNames)("action-item",{"ml-5":R}),children:(0,t.jsx)(i.Button,{ref:S,icon:!0,onClick:t=>{t.stopPropagation(),a!==e.BrowserSizeMode.Small?y(!m):o.appBuilderSync.publishSidePanelToApp({type:"template",templateMethod:"getScrollingPageTemplates",onSelect:l})},css:Xr,className:"rounded-circle",children:(0,t.jsx)(Yi,{autoFlip:!0,size:16,color:c.ref.palette.neutral[1100]})})})})]}),(0,t.jsx)("div",{className:"action-separator mt-4"}),(0,t.jsx)("div",{children:(0,t.jsx)("h5",{className:"btn-text mt-2",children:p("dropWidgetToAdd")})}),R&&f&&(0,t.jsx)(Ve.TemplateSelector,{templates:(0,Wi.getBlockTemplates)(),referenceElement:b.current,onItemSelect:t=>{v(!1),r(t)},onClose:()=>{v(!1)}}),R&&I&&Zr(a)&&(0,t.jsx)(Ve.TemplateSelector,{templates:(0,Wi.getScreenGroupTemplates)(),referenceElement:w.current,onItemSelect:t=>{x(!1),d(t)},onClose:()=>{x(!1)}}),!u&&m&&(0,t.jsx)(Ve.TemplateSelector,{templates:(0,Wi.getScrollingPageTemplates)(!1),referenceElement:S.current,onItemSelect:t=>{y(!1),l(t)},onClose:()=>{y(!1)}})]}):null}const Kr=e.css`
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  background: transparent;
`,Qr=e.css`
  ${Kr};
  z-index: ${a.LayoutZIndex.DragMoveTip};
  pointer-events: none;
`;class td extends e.React.PureComponent{constructor(t){super(t),this.state={isDragover:!1,isLoadingTemplate:!1},this.handleActivate=t=>{if(!ut()&&!ct())return;if(Math.abs(t.screenX-this.mousedownX)>a.CLICK_TOLERANCE||Math.abs(t.screenY-this.mousedownY)>a.CLICK_TOLERANCE)return void t.stopPropagation();const{isInSection:o,isInWidget:i}=this.props;this.pageContext.viewOnly||o||i||qt()||Wt()||(t.stopPropagation(),(0,e.getAppStore)().dispatch(e.appActions.selectionChanged(null)))},this.handleMouseDown=t=>{this.mousedownX=t.screenX,this.mousedownY=t.screenY},this.handleDragOver=(t,o,i,n,s,a)=>{var l,r,d;const{layout:u}=this.props,c=null!==(l=t.layoutInfo)&&void 0!==l?l:{layoutId:null};let p=n;if(this.canvasPane.clear(),(null===(r=this.childRects)||void 0===r?void 0:r.length)>0){const{insertY:t,refId:e}=function(t,e,o){let i,n,s=!1;if(o.some((t,a)=>{if(t.top+t.height/2>e){if(0===a)i=Math.max(t.top/2,t.top-5);else{const e=o[a-1];i=(t.top+e.top+e.height)/2}s=!0,n=t.id}return s}),!s){const e=o[o.length-1];i=Math.min(e.top+e.height+5,(e.top+e.height+t.height)/2)}return{refId:n,insertY:i}}(i,a,this.childRects);if(this.referenceId=e,c.layoutId===this.props.layout.id){const t=u.order,o=t.indexOf(c.layoutItemId),i=t.indexOf(e);if((null===(d=u.content[c.layoutItemId].setting)||void 0===d?void 0:d.isFloating)||o===i-1||null==e&&o===t.length-1)return}p={top:t-5+this.ref.current.scrollTop,width:i.width-Ql,left:5,height:Ql}}else this.referenceId=null,p={top:i.height/2-5,width:i.width-Ql,left:5,height:Ql};this.canvasPane.setColor(e.polished.rgba(this.builderTheme.sys.color.primary.light,.5)),this.canvasPane.drawRect(p)},this.handleToggleDragoverEffect=(t,e)=>{var o;t&&(this.referenceId=null,this.collectBounds(null!==(o=e.layoutInfo)&&void 0!==o?o:{layoutId:null})),this.canvasPane.clear(),this.setState({isDragover:t})},this.handleDrop=(t,i,n)=>{var s,l;this.canvasPane.clear();const{layout:r}=this.props,d=null!==(s=t.layoutInfo)&&void 0!==s?s:{layoutId:null},u=(0,o.getAppConfigAction)();let c=0;if(null!=this.referenceId?c=r.order.indexOf(this.referenceId):null!=r.order&&(c=r.order.length),this.referenceId=null,this.childRects=[],d.layoutId===r.id){if(null===(l=r.content[d.layoutItemId].setting)||void 0===l?void 0:l.isFloating){const t=(0,o.getAppConfigAction)();return t.setLayoutItemToPending(d,!1),void a.utils.changeLayout(t.appConfig,Object.assign(Object.assign({},d),{autoScroll:!1}))}return void W(u.appConfig,t,r.id).then(s=>{const{layoutInfo:l,updatedAppConfig:r}=s,d=o.LayoutServiceProvider.getInstance().getServiceByType(e.LayoutType.FlowLayout).processAfterItemAdded(r,t,l,{currentSizeMode:null,containerRect:i,itemRect:n,insertIndex:c});a.utils.changeLayout(d,Object.assign(Object.assign({},l),{autoScroll:!0}))}).finally(null)}const p=(this.maxPageWidth>0?Math.min(this.maxPageWidth,i.width):i.width)/12,h=Math.min(Math.ceil(n.width/p),12);t.itemType===e.LayoutItemType.ScreenGroup?W(u.appConfig,t,r.id).then(s=>{const{layoutInfo:l,updatedAppConfig:r}=s,d=o.LayoutServiceProvider.getInstance().getServiceByType(e.LayoutType.FlowLayout).processAfterItemAdded(r,t,l,{currentSizeMode:null,containerRect:i,itemRect:n,insertIndex:c});a.utils.changeLayout(d,Object.assign(Object.assign({},l),{autoScroll:!0}))}).finally(null):this.addWidgetToLayout(t,i,n,h,c)},this.handleDropAtBoundary=(t,e,o)=>{o<this.props.layout.order.length?this.referenceId=this.props.layout.order[o]:this.referenceId=null,null==this.domRect&&(this.domRect=this.ref.current.getBoundingClientRect()),this.handleDrop(t,this.domRect,e)},this.onWidgetItemSelected=t=>{var e,o,i;const n=this.ref.current.getBoundingClientRect(),s={height:null!==(i=null===(o=null===(e=t.manifest)||void 0===e?void 0:e.defaultSize)||void 0===o?void 0:o.height)&&void 0!==i?i:300};this.addWidgetToLayout(t,n,s,4,0)},this.handleBlockTemplateSelected=t=>{this.setState({isLoadingTemplate:!0}),ir(this.props.layout.id,"",t).finally(()=>{this.setState({isLoadingTemplate:!1})})},this.handleScreenTemplateSelected=t=>{this.setState({isLoadingTemplate:!0}),nr(this.props.layout.id,"",t).finally(()=>{this.setState({isLoadingTemplate:!1})})},this.handlePageTemplateSelected=t=>{const i=(0,o.getAppConfigAction)();this.setState({isLoadingTemplate:!0}),this.pageContext.isHeader?i.applyHeaderTemplate(t).then(()=>{i.exec(),e.lodash.defer(()=>{this.setState({isLoadingTemplate:!1})})}).finally(null):this.pageContext.isFooter?i.applyFooterTemplate(t).then(()=>{i.exec(),e.lodash.defer(()=>{this.setState({isLoadingTemplate:!1})})}).finally(null):i.applyPageBodyTemplate(this.pageContext.pageId,t).then(()=>{i.exec(),e.lodash.defer(()=>{this.setState({isLoadingTemplate:!1})})}).finally(null)},this.ref=e.React.createRef();const i=e.ExtensionManager.getInstance().getExtensions(`${e.extensionSpec.ExtensionPoints.LayoutTransformer}`);if((null==i?void 0:i.length)>0){const t=i.find(t=>t.layoutType===this.props.layout.type);this.layoutTransform=null==t?void 0:t.transformLayout}}componentDidMount(){this.canvasPane=new Ji(this.canvasRef),this.canvasPane.setSize(this.ref.current.clientWidth,this.ref.current.clientHeight)}componentDidUpdate(){this.canvasPane.setSize(this.ref.current.clientWidth,this.ref.current.clientHeight)}addWidgetToLayout(t,e,o,i,n,s){U(t,{targetLayoutId:this.props.layout.id,containerRect:e,itemRect:o,width:i,insertIndex:n,appConfig:s}).finally(null)}collectBounds(t){const{layout:e}=this.props;this.childRects=[],this.domRect=this.ref.current.getBoundingClientRect();const o=this.ref.current.parentNode.querySelectorAll(`div[data-layoutid="${e.id}"] > div.exb-rnd`);return(null==o?void 0:o.length)>0&&o.forEach(o=>{var i,n;const s=o.getAttribute("data-layoutitemid");if((t.layoutId!==e.id||t.layoutItemId!==s)&&(null===(i=e.order)||void 0===i?void 0:i.includes(s))){if(!(null===(n=e.content[s].setting)||void 0===n?void 0:n.isFloating)){const t=a.utils.relativeClientRect(o.getBoundingClientRect(),this.domRect);t.id=s,this.childRects.push(t)}}}),this.childRects.sort((t,e)=>t.top-e.top)}createItem(i,n,s,a){if(null==i?void 0:i.isPending)return null;const{layouts:l,layout:r,itemDraggable:d,itemSelectable:u}=this.props,c=function(t){const{layoutId:e,layoutItemId:i}=t,n=(0,o.getAppConfigAction)().appConfig.layouts[e];let s=!1;return n.order.some(t=>{var e;const o=n.content[t];return!(null===(e=o.setting)||void 0===e?void 0:e.isFloating)&&!o.isPending&&(s=t===i,!0)}),s}({layoutId:r.id,layoutItemId:i.id}),p=function(t){var e;const{layoutId:i,layoutItemId:n}=t,s=(0,o.getAppConfigAction)().appConfig.layouts[i];let a=!1;for(let t=s.order.length-1;t>=0;t--){const o=s.order[t],i=s.content[o];if(!(null===(e=i.setting)||void 0===e?void 0:e.isFloating)&&!i.isPending){a=o===n;break}}return a}({layoutId:r.id,layoutItemId:i.id}),h=i.setting;return i.type===e.LayoutItemType.ScreenGroup?(0,t.jsx)(Wr,{itemIndex:s,isFirst:c,isLast:p,layoutId:r.id,layoutItemId:i.id,layoutItem:i,theme:this.pageContext.builderTheme,formatMessage:this.pageContext.formatMessage},`${r.id}_${i.id}`):(null==h?void 0:h.isFloating)?(0,t.jsx)(gr,{index:s,total:n,builderTheme:this.builderTheme,layouts:l,layoutId:r.id,layoutItemId:i.id,layoutItem:i,gutter:a.gutter,draggable:d,selectable:u,onDropAtBoundary:this.handleDropAtBoundary,formatMessage:this.pageContext.formatMessage},`${r.id}_${i.id}`):(0,t.jsx)(pr,{index:s,isFirst:c,isLast:p,builderTheme:this.builderTheme,layouts:l,layoutId:r.id,layoutItemId:i.id,layoutItem:i,parentRef:{current:document.body},gutter:a.gutter,draggable:d,selectable:u,onDropAtBoundary:this.handleDropAtBoundary,formatMessage:this.pageContext.formatMessage},`${r.id}_${i.id}`)}getActionStyle(){return e.css`
      height: 200px;
      padding: 1rem;
      pointer-events: none;
      z-index: 1;
      .btn-text {
        line-height: 32px;
      }
      .btn {
        margin-right: 2rem;
        background: ${this.builderTheme.ref.palette.neutral[600]};
        &:hover {
          background: ${this.builderTheme.ref.palette.neutral[700]};
        }
      }
      .action-item {
        width: 32px;
      }

      .action-separator {
        .sep {
          width: 65px;
          height: 1px;
          background-color: ${this.builderTheme.ref.palette.neutral[1100]};
        }
        .btn-text {
          margin: 0 13px;
        }
      }
    `}getStyle(){const{builderTheme:t}=this.pageContext;return e.css`
      & > .trail-container > .builder-layout-item {
        margin-bottom: 10px;
        border-top: 1px dashed ${e.polished.rgba(t.ref.palette.neutral[1e3],.6)};
        border-bottom: 1px dashed ${e.polished.rgba(t.ref.palette.neutral[1e3],.6)};
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
    `}createActions(e){const{viewOnly:o,rootLayoutId:i}=this.pageContext,{layout:n}=this.props;return!(!this.pageContext.isHeader&&!this.pageContext.isFooter)||o||n.id!==i?null:(0,t.jsx)(Jr,{pageContext:this.pageContext,browserSizeMode:this.props.browserSizeMode,blockOnly:e,onPageTemplateSelected:this.handlePageTemplateSelected,onBlockTemplateSelected:this.handleBlockTemplateSelected,onScreenTemplateSelected:this.handleScreenTemplateSelected})}render(){const{layout:o,className:n,isPageItem:s,layouts:l,mainSizeMode:r,browserSizeMode:d}=this.props;if(null==o)return null;const u=(0,e.classNames)("layout flow-layout w-100",n),c={display:this.state.isDragover?"block":"none"};return(0,t.jsx)(a.PageContext.Consumer,{children:n=>{var a,p;this.builderTheme=n.builderTheme,this.maxPageWidth=n.maxWidth,this.pageContext=n;let h=o;l[d]!==o.id&&null!=this.layoutTransform&&(h=this.layoutTransform(o,r,d));const g=null!==(a=h.order)&&void 0!==a?a:[],m=e.lodash.assign({},Xa,h.setting),y=Object.assign({position:"relative"},i.styleUtils.toCSSStyle(m.style));return(0,t.jsxs)("div",{className:u,ref:this.ref,css:this.getStyle(),style:y,"data-layoutid":o.id,onClick:this.handleActivate,onMouseDown:this.handleMouseDown,children:[(0,t.jsxs)("div",{"data-layoutid":h.id,className:"trail-container d-flex flex-column align-items-center",css:e.css`
                  width: 100%;
                `,children:[!n.viewOnly&&(0,t.jsx)(Xe,{css:Kr,layouts:this.props.layouts,isRepeat:this.props.isRepeat,highlightDragover:!s,onDragOver:this.handleDragOver,onDrop:this.handleDrop,onToggleDragoverEffect:this.handleToggleDragoverEffect}),g.length>0&&g.map((t,e)=>this.createItem(h.content[t],g.length,e,m))]}),!this.state.isLoadingTemplate&&!n.viewOnly&&0===Object.keys(null!==(p=h.content)&&void 0!==p?p:{}).length&&o.id===n.rootLayoutId&&this.createActions(!1),g.length>0&&this.createActions(!0),this.state.isLoadingTemplate&&(0,t.jsx)(i.Loading,{type:i.LoadingType.Skeleton}),(0,t.jsx)("canvas",{css:Qr,style:c,ref:t=>{this.canvasRef=t}})]})}})}}const ed=e.ReactRedux.connect(a.utils.mapStateToLayoutProps)(td);var od=h(2046),id=h.n(od),nd=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const sd=o=>{const i=window.SVG,{className:n}=o,s=nd(o,["className"]),a=(0,e.classNames)("jimu-icon jimu-icon-component",n);return i?(0,t.jsx)(i,Object.assign({className:a,src:id()},s)):(0,t.jsx)("svg",Object.assign({className:a},s))},ad=e.css`
  .resize-handler {
    height: ${16}px;
    width: 100%;
    cursor: ns-resize;
    position: absolute;
  }
`,ld=e.css`
  position: absolute;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
`;function rd(t){return e.css`
    .edit-btn {
      background: ${t.sys.color.primary.main};
      color: ${t.ref.palette.neutral[1100]};
      border-radius: 2px;
      &:hover {
        background: ${t.sys.color.primary.main};
        color: ${t.ref.palette.black};
      }
    }
  `}function dd(){(0,e.getAppStore)().dispatch(e.appActions.activePagePartChanged(e.PagePart.Header))}function ud(){(0,e.getAppStore)().dispatch(e.appActions.activePagePartChanged(e.PagePart.Footer))}function cd(){(0,e.getAppStore)().dispatch(e.appActions.activePagePartChanged(e.PagePart.Body))}function pd(){const t=(0,e.getAppStore)().getState(),o=t.appConfig.header.layout;return a.searchUtils.findLayoutId(o,t.browserSizeMode,t.appConfig.mainSizeMode)}function hd(){const t=(0,e.getAppStore)().getState(),o=t.appConfig.footer.layout;return a.searchUtils.findLayoutId(o,t.browserSizeMode,t.appConfig.mainSizeMode)}function gd(t){var o;const i=(0,e.getAppStore)().getState(),n=null===(o=i.appConfig.dialogs[t])||void 0===o?void 0:o.layout;return a.searchUtils.findLayoutId(n,i.browserSizeMode,i.appConfig.mainSizeMode)}function md(t){return Object.keys(t).find(e=>t[e])}function yd(t,o,i,n,s){var a;let l="string"==typeof t.backgroundIMage?t.backgroundIMage:null===(a=t.backgroundIMage)||void 0===a?void 0:a.url;l=e.appConfigUtils.processResourceUrl(l);const r=t.sticky&&!s;return e.css`
    ${ad};
    ${rd(i)};
    position: relative;
    z-index: 0;
    top: 0;
    display: flex;
    width: 100%;
    height: auto;
    height: ${parseFloat(o)}px;
    overflow: hidden;
    background-color: ${t.backgroundColor||n.sys.color.surface.header||"transparent"};
    background-image: ${l};
    background-position: ${t.backgroundPosition};
    color: ${t.textColor||n.sys.color.surface.headerText};
    border-bottom: 1px dashed ${e.polished.rgba(i.ref.palette.white,.12)};
    flex: 0 0 auto;

    &:hover {
      .edit-mask {
        display: flex;
      }
    }

    .resize-handler {
      bottom: ${-8}px;
      z-index: 1;
      .handler {
        width: 36px;
        height: 4px;
        background: var(--ref-palette-black);
        border: 1px solid var(--ref-palette-white);
        position: absolute;
        left: 50%;
        bottom: 9px;
        transform: translateX(-50%);
      }
    }

    body.lock-layout &,
    body:not(.design-mode) & {
      border-bottom: none;
      > .resize-handler {
        display: none !important;
      }
    }
    body:not(.design-mode) & {
      position: ${r?"sticky":"relative"};
      z-index: ${r?2:"0"};

      .edit-mask, .edit-mask-all {
        display: none !important;
      }
    }
  `}function fd(n){const{header:s,browserSizeMode:l,mainSizeMode:r,activePagePart:d,pageContext:u,showClassification:c,onResizeStart:p,onHeightChange:h,onResizeEnd:g}=n,m=e.ReactRedux.useSelector(t=>{var o;return(null===(o=t.appRuntimeInfo)||void 0===o?void 0:o.appMode)===e.AppMode.Design}),y=e.React.useRef(null),f=s.height[l]||s.height[r]||75,v=s.layout,I=!v[l],x=u.builderTheme,b=e.hooks.usePrevious(f);e.hooks.useEffectOnce(()=>{let t;return y.current&&(t=function(t,e,i,n){let s,l;return(0,Gt.interact)(t).origin("parent").resizable({inertia:!1,edges:{bottom:".resize-handler"},onstart:o=>{o.stopPropagation(),s=0,l=t.getBoundingClientRect().height,t.style.minHeight="0px",e()},onmove:e=>{e.stopPropagation();const o=e.deltaRect;s+=o.height,t.style.height=`${l+s}px`,requestAnimationFrame(()=>{i(l+s)})},onend:e=>{e.stopPropagation(),t.style.height=null,t.style.minHeight=null;const i=Math.round(l+s);n(),(0,o.getAppConfigAction)().editHeaderProperty(`height.${a.utils.getCurrentSizeMode()}`,i).exec()}})}(y.current,p,h,g)),h(parseInt(f)),()=>{t&&t.unset()}}),e.React.useEffect(()=>{f!==b&&h(parseInt(f))},[b,f,h]);const w=pd(),S=e.React.useMemo(()=>Object.assign(Object.assign({},u),{isHeader:!0,rootLayoutId:w,viewOnly:I||m&&d!==e.PagePart.Header}),[u,w,I,d,m]);return(0,t.jsx)(a.PageContext.Provider,{value:S,children:(0,t.jsxs)("div",{className:"header",css:yd(s,f,u.builderTheme,u.theme,c),ref:t=>{y.current=t},children:[(0,t.jsx)("div",{className:"w-100 h-100",css:e.css`
            overflow: auto;
            display: flex;
            position: relative;
            z-index: 0;
          `,children:(0,t.jsx)(ro,{layouts:v,isPageItem:!0,visible:!0})}),!I&&(0,t.jsx)("span",{className:"resize-handler",children:(0,t.jsx)("div",{className:(0,e.classNames)("handler",{"d-none":d!==e.PagePart.Header})})}),d!==e.PagePart.Header&&!I&&(0,t.jsx)("div",{className:"edit-mask-all",css:e.css`
              ${ld};
              background: ${d===e.PagePart.Body?"transparent":e.polished.rgba(x.ref.palette.neutral[500],.6)};
              z-index: 1;
            `,onClick:cd}),d===e.PagePart.Body&&(!I||l===r)&&(0,t.jsx)("div",{className:"edit-mask justify-content-center align-items-center",css:e.css`
              ${ld};
              background: ${e.polished.rgba(x.ref.palette.neutral[500],.6)};
              z-index: 1;
              display: none;
            `,children:(0,t.jsxs)(i.Button,{className:"edit-btn btn-large border-0",onClick:dd,children:[(0,t.jsx)(sd,{size:"m"}),u.formatMessage("editHeader")]})})]})})}function vd(t,o,i,n){var s;let a="string"==typeof t.backgroundIMage?t.backgroundIMage:null===(s=t.backgroundIMage)||void 0===s?void 0:s.url;return a=e.appConfigUtils.processResourceUrl(a),e.css`
    ${ad};
    ${rd(i)};
    display: flex;
    position: relative;
    width: 100%;
    height: ${parseFloat(o)}px;
    flex-shrink: 0;
    overflow: hidden;
    background-color: ${t.backgroundColor||(null==n?void 0:n.sys.color.surface.footer)||"transparent"};
    background-image: ${a};
    background-position: ${t.backgroundPosition};
    color: ${t.textColor||(null==n?void 0:n.sys.color.surface.footerText)};
    border-top: 1px dashed ${e.polished.rgba(i.ref.palette.white,.12)};
    z-index: 0;

    .resize-handler {
      top: ${-8}px;
      z-index: 1;
      .handler {
        width: 36px;
        height: 4px;
        background: var(--ref-palette-black);
        border: 1px solid var(--ref-palette-white);
        position: absolute;
        left: 50%;
        top: 9px;
        transform: translateX(-50%);
      }
    }

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
  `}function Id(n){const{footer:s,browserSizeMode:l,mainSizeMode:r,activePagePart:d,pageContext:u,onResizeStart:c,onHeightChange:p,onResizeEnd:h}=n,g=e.ReactRedux.useSelector(t=>{var o;return(null===(o=t.appRuntimeInfo)||void 0===o?void 0:o.appMode)===e.AppMode.Design}),m=e.React.useRef(null),y=s.height[l]||s.height[r]||75,f=s.layout,v=!f[l],I=u.builderTheme,x=e.hooks.usePrevious(y);e.hooks.useEffectOnce(()=>{let t;return m.current&&(t=function(t,e,i,n){let s=0,l=0;return(0,Gt.interact)(t).origin("parent").resizable({inertia:!1,edges:{top:".resize-handler"},onstart:o=>{o.stopPropagation(),s=0,l=t.getBoundingClientRect().height,t.style.minHeight="16px",e()},onmove:e=>{e.stopPropagation();const o=e.deltaRect;s+=o.height,t.style.height=`${l+s}px`,requestAnimationFrame(()=>{i(l+s)})},onend:e=>{e.stopPropagation(),t.style.height=null,t.style.minHeight=null;const i=Math.round(l+s);n(),(0,o.getAppConfigAction)().editFooterProperty(`height.${a.utils.getCurrentSizeMode()}`,i).exec()}})}(m.current,c,p,h)),p(parseInt(y)),()=>{t&&t.unset()}}),e.React.useEffect(()=>{y!==x&&p(parseInt(y))},[x,y,p]);const b=hd(),w=e.React.useMemo(()=>Object.assign(Object.assign({},u),{isFooter:!0,rootLayoutId:b,viewOnly:v||g&&d!==e.PagePart.Footer}),[u,b,v,d,g]);return(0,t.jsx)(a.PageContext.Provider,{value:w,children:(0,t.jsxs)("div",{className:"footer",css:vd(s,y,u.builderTheme,u.theme),ref:t=>{m.current=t},children:[!v&&(0,t.jsx)("span",{className:"resize-handler",children:(0,t.jsx)("div",{className:(0,e.classNames)("handler",{"d-none":d!==e.PagePart.Footer})})}),(0,t.jsx)("div",{className:"w-100 h-100",css:e.css`
            overflow: auto;
            display: flex;
            position: relative;
            z-index: 0;
          `,children:(0,t.jsx)(ro,{layouts:f,isPageItem:!0,visible:!0})}),d!==e.PagePart.Footer&&!v&&(0,t.jsx)("div",{className:"edit-mask-all",css:e.css`
              ${ld};
              background: ${d===e.PagePart.Body?"transparent":e.polished.rgba(I.ref.palette.neutral[500],.6)};
              z-index: 1;
            `,onClick:cd}),d===e.PagePart.Body&&(!v||l===r)&&(0,t.jsx)("div",{className:"edit-mask justify-content-center align-items-center",css:e.css`
              ${ld};
              background: ${e.polished.rgba(I.ref.palette.neutral[500],.6)};
              z-index: 1;
              display: none;
            `,children:(0,t.jsxs)(i.Button,{className:"edit-btn btn-large border-0",onClick:ud,children:[(0,t.jsx)(sd,{size:"m"}),u.formatMessage("editFooter")]})})]})})}function xd(t){let o,i,n;switch(null==t?void 0:t.position){case e.FixedPosition.TopLeft:o=e.css`top: 0; left: 0; bottom: auto; right: auto;`;break;case e.FixedPosition.TopRight:o=e.css`top: 0; left: auto; bottom: auto; right: 0;`;break;case e.FixedPosition.BottomLeft:o=e.css`top: auto; left: 0; bottom: 0; right: auto;`;break;case e.FixedPosition.BottomRight:o=e.css`top: auto; left: auto; bottom: 0; right: 0;`;break;case e.FixedPosition.TopCenter:o=e.css`top: 0; left: 50%; bottom: auto; right: auto;`;break;case e.FixedPosition.BottomCenter:o=e.css`top: auto; left: 50%; bottom: 0; right: auto;`;break;case e.FixedPosition.MiddleLeft:o=e.css`top: 50%; left: 0; bottom: auto; right: auto;`;break;case e.FixedPosition.MiddleRight:o=e.css`top: 50%; left: auto; bottom: auto; right: 0;`;break;case e.FixedPosition.MiddleCenter:o=e.css`top: 50%; left: 50%; bottom: auto; right: auto;`;break;default:o=e.css`top: 0; left: 0; bottom: auto; right: auto;`}return t.widthMode===R.Stretch&&(i=e.css`width:auto;left:${t.left};right:${t.right};`),t.heightMode===R.Stretch&&(n=e.css`height:auto;top:${t.top};bottom:${t.bottom};`),e.css`
    position: fixed;
    ${o}
    width: ${null==t?void 0:t.width};
    height: ${null==t?void 0:t.height};
    ${i};
    ${n}
    overflow: visible;
    z-index: 2;
  `}var bd=h(9238),wd=h.n(bd);const Sd=e.css`
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
`,Cd={rootBoundary:"viewport",crossAxis:!0},Rd={fallbackPlacements:["top-start","bottom-start","right-start","left-start"]};function Td(o){const{layoutId:n,layoutItemId:s,controllerId:l,minimized:r,onClick:d,onToggle:u,onClose:p}=o,[h,g]=e.React.useState(!1),m=e.React.useRef(void 0),[y,f]=e.React.useState(),v=e.hooks.useLatest(p),I=e.hooks.useLatest(u),x=e.hooks.useTranslation(),b=e.ReactRedux.useSelector(t=>t.appRuntimeInfo.appMode===e.AppMode.Design),w=e.ReactRedux.useSelector(t=>{var e;const o=t.appRuntimeInfo.selection;if(!o)return!1;if(n===o.layoutId&&s===o.layoutItemId)return!0;return null!=(null===(e=m.current)||void 0===e?void 0:e.querySelector(`div.builder-layout-item[data-layoutid="${o.layoutId}"][data-layoutitemid="${o.layoutItemId}"]`))}),S=e.ReactRedux.useSelector(t=>t.appConfig.layouts[n].content[s].widgetId),C=e.ReactRedux.useSelector(t=>{var e,o,i;const n=t.appConfig.widgets[S];return(null===(o=null===(e=null==n?void 0:n.manifest)||void 0===e?void 0:e.properties)||void 0===o?void 0:o.hasEmbeddedLayout)&&Object.keys(null!==(i=n.layouts)&&void 0!==i?i:{}).length>0}),R=e.ReactRedux.useSelector(t=>{var o;const i=t.appConfig.widgets[S];return(null===(o=null==i?void 0:i.manifest)||void 0===o?void 0:o.widgetType)!==e.WidgetType.Layout}),T=e.ReactRedux.useSelector(t=>{var e,o,i;const n=t.appConfig.widgets[S];return null!==(i=null===(o=null===(e=null==n?void 0:n.manifest)||void 0===e?void 0:e.properties)||void 0===o?void 0:o.supportInlineEditing)&&void 0!==i&&i}),M=e.ReactRedux.useSelector(t=>{const e=t.widgetsRuntimeInfo[S];return T&&(null==e?void 0:e.isInlineEditing)}),L=e.ReactRedux.useSelector(t=>{var o;const i=null===(o=t.widgetsRuntimeInfo)||void 0===o?void 0:o[S];return(null==i?void 0:i.state)===e.WidgetState.Opened}),P=e.ReactRedux.useSelector(t=>{const e=t.appConfig.widgets[S];return null==e?void 0:e.label},e.ReactRedux.shallowEqual),A=e.ReactRedux.useSelector(t=>{var e;const o=t.widgetsRuntimeInfo[S];return null!==(e=null==o?void 0:o.isClassLoaded)&&void 0!==e&&e}),j=e.ReactRedux.useSelector(t=>t.appConfig.controllerPanels[l].effect),z=e.hooks.usePrevious(L),$=e.React.useMemo(()=>(0,e.prepareLocalVariants)(`${n}_${s}`,null,null,j,null,null),[j,n,s]),N=e.React.useCallback(t=>{v.current(t,S);const o=document.querySelector(`.widget-controller .avatar-card[data-widgetid='${S}'] button`);if(o)(0,e.focusElementInKeyboardMode)(o);else{const t=document.querySelector(`[data-widgetid='${l}'] .popup-more-button button`);(0,e.focusElementInKeyboardMode)(t)}},[v,S,l]);(0,i.useTrapFocusBySelector)(m,!0,!0,".first-node",".last-virtual-node",h&&L);const{viewOnly:k}=e.React.useContext(a.PageContext),O=e.ReactRedux.useSelector(t=>t.appRuntimeInfo.appMode===e.AppMode.Express),E=e.ReactRedux.useSelector(t=>t.browserSizeMode!==t.appConfig.mainSizeMode),B=e.React.useCallback(t=>{var o;if(t.stopPropagation(),k||O&&E)return;const i=null===(o=(0,e.getAppStore)().getState().appRuntimeInfo)||void 0===o?void 0:o.selection;i&&i.layoutId===n&&i.layoutItemId===s||(0,e.getAppStore)().dispatch(e.appActions.selectionChanged({layoutId:n,layoutItemId:s})),null==d||d(t)},[O,n,s,E,d,k]),D=e.React.useCallback(t=>{t.stopPropagation();const{browserSizeMode:o,appConfig:{mainSizeMode:i}}=(0,e.getAppStore)().getState();!T||k||e.utils.isExpressMode()&&o!==i||(0,e.getAppStore)().dispatch(e.appActions.setWidgetIsInlineEditingState(S,!0))},[T,k,S]);let F;e.React.useEffect(()=>{L&&!h&&(g(!0),e.WidgetManager.getInstance().loadWidgetClass(S).catch(t=>{console.log(t)})),L&&!w&&b&&!k&&(0,e.getAppStore)().dispatch(e.appActions.closeWidget(S))},[L,w,S,h,b,k]),e.React.useEffect(()=>{L&&!z&&!b&&$&&f("hide")},[L,z,b,$]),h&&A&&(F=e.WidgetManager.getInstance().getWidgetClass(S));const H=b&&!M&&R&&!C,V=(0,c.getTheme2)(),W=(0,e.getAppStore)().getState().appConfig.layouts[n].content[s],G=(U=m.current,_="first-node",Y="last-virtual-node",e.React.useCallback(t=>{if(!U)return;const o=t.key,n=t.shiftKey;if("Tab"===o)if(n){const t=(0,i.getFocusableElements)(U).filter(t=>{var e,o;return!(null===(o=null===(e=null==t?void 0:t.classList)||void 0===e?void 0:e.contains)||void 0===o?void 0:o.call(e,Y))});if(!t||0===t.length)return;(0,e.focusElementInKeyboardMode)(t[t.length-1],!0)}else{const t=U.querySelector(`.${_}`);(0,e.focusElementInKeyboardMode)(t,!0)}},[U,_,Y]));var U,_,Y;const X=e.React.useMemo(()=>[{name:"collapse",className:r?"first-node action-collapse collapsed":"first-node action-collapse",label:x(r?"expand":"collapse"),icon:wd(),onClick:I.current},{name:"close",className:"action-close",label:x("close"),icon:Pt(),onClick:N}],[N,r,I,x]);return(0,t.jsxs)(e.motion.div,{id:`${n}_${s}`,className:(0,e.classNames)("controller-panel flex-column w-100 h-100",{"d-none":!h||!L}),css:Sd,onClick:B,onDoubleClick:D,ref:m,animate:y,onAnimationComplete:()=>{if(null==y?void 0:y.endsWith("hide")){const t=y.replace("hide","show");f(t)}else f(null)},variants:$,children:[(0,t.jsx)(i.PanelHeader,{level:2,type:"primary",title:P,actions:X,moveable:!1}),(0,t.jsxs)(i.Surface,{level:"paper",variant:"flat",className:"panel-content d-flex flex-grow-1",children:[!A&&(0,t.jsx)(i.Loading,{type:i.LoadingType.Donut}),F&&(0,t.jsx)("div",{className:"w-100 h-100 widget-content p-1",children:(0,t.jsxs)(e.ErrorBoundary,{children:[(0,t.jsx)(F,{widgetId:S,layoutId:n,layoutItemId:s}),b&&(0,t.jsx)(Te,{layoutId:n,layoutItem:W,refElement:m.current,shiftOptions:Cd,flipOptions:Rd,builderTheme:V,formatMessage:x,showDefaultTools:!1})]})}),H&&(0,t.jsx)("div",{className:"widget-mask"}),(0,t.jsx)("button",{className:"sr-only last-virtual-node",onKeyUp:G})]})]})}function Md(i){var n,s,l,r;const{controllerId:d,selected:u,innerSelected:p,isDesignMode:h}=i,g=e.React.useRef(void 0),[m,y]=e.React.useState(!1),[f,v]=e.React.useState(),[I,x]=e.React.useState(!1),[b,w]=e.React.useState(),{viewOnly:S}=e.React.useContext(a.PageContext),C=e.ReactRedux.useSelector(t=>{const e=t.appConfig.widgets[d],o=e.manifest.layouts[0].name,i=e.layouts[o];return a.searchUtils.findLayoutId(i,t.browserSizeMode,t.appConfig.mainSizeMode)}),T=e.ReactRedux.useSelector(t=>{var e;const o=t.appConfig.layouts[C];if(!o)return"";const i=t.appConfig.widgets,n=Object.keys(null!==(e=o.content)&&void 0!==e?e:{}).filter(t=>{const e=o.content[t],n=i[null==e?void 0:e.widgetId];return null!=(null==e?void 0:e.widgetId)&&!e.isPending&&!(null==n?void 0:n.offPanel)});return n.sort(),n.join(",")}),M=e.ReactRedux.useSelector(t=>{var o,i;if(h&&!S)return!1;const n=t.appConfig.widgets,s=Object.keys(null!==(o=t.widgetsRuntimeInfo)&&void 0!==o?o:{}).filter(o=>{var i;return t.widgetsRuntimeInfo[o].state===e.WidgetState.Opened&&!(null===(i=n[o])||void 0===i?void 0:i.offPanel)}),a=t.appConfig.layouts[C];return Object.keys(null!==(i=a.content)&&void 0!==i?i:{}).some(t=>{const e=a.content[t];return null!=(null==e?void 0:e.widgetId)&&!e.isPending&&s.includes(e.widgetId)})}),L=e.ReactRedux.useSelector(t=>{var e;const o=null===(e=t.appRuntimeInfo)||void 0===e?void 0:e.animationPreview;return(null==o?void 0:o.controllerId)===d?o.id:-1}),P=e.hooks.usePrevious(L),A=e.ReactRedux.useSelector(t=>t.appConfig.controllerPanels[d].effect),j=e.React.useMemo(()=>(0,e.prepareLocalVariants)(d,null,null,A,null,null),[A,d]);e.React.useEffect(()=>{L>0&&L>P&&j&&w("hide")},[L,P,j]);const z=e.React.useMemo(()=>T.split(",").filter(t=>""!==t),[T]),$=e.ReactRedux.useSelector(t=>t.appConfig.controllerPanels[d]);e.React.useEffect(()=>{let t,e;const i=((null==$?void 0:$.position)||"").includes("CENTER")?2:1,n=((null==$?void 0:$.position)||"").includes("MIDDLE")?2:1,s=(o,i,n)=>{t=i,e=n,y(!0),v({dx:0,dy:0,dw:0,dh:0,width:i,height:n})},l=(o,s,a,l,r)=>{v({dx:s,dy:a,dw:l,dh:r,width:t+l*i,height:e+r*n})},r=(s,l,r,u,c)=>{y(!1),function(t){const{controllerId:e,dx:i,dy:n,dw:s,dh:l,width:r,height:d}=t,u=(0,o.getAppConfigAction)();let c=u.appConfig.controllerPanels[e];c.widthMode===a.LayoutItemSizeModes.Stretch?0!==s&&(c=0!==i?a.utils.isPercentage(c.left)?c.set("left",`${(parseFloat(c.left)+100*i/window.innerWidth).toFixed(2)}%`):c.set("left",`${Math.round(parseFloat(c.left)+i)}px`):a.utils.isPercentage(c.right)?c.set("right",`${(parseFloat(c.right)-100*s/window.innerWidth).toFixed(2)}%`):c.set("right",`${Math.round(parseFloat(c.right)-s)}px`)):c=a.utils.isPercentage(c.width)?c.set("width",`${(100*r/window.innerWidth).toFixed(2)}%`):c.set("width",`${Math.round(r)}px`),c.heightMode===a.LayoutItemSizeModes.Stretch?0!==l&&(c=0!==n?a.utils.isPercentage(c.top)?c.set("top",`${(parseFloat(c.top)+100*n/window.innerHeight).toFixed(2)}%`):c.set("top",`${Math.round(parseFloat(c.top)+n)}px`):a.utils.isPercentage(c.bottom)?c.set("bottom",`${(parseFloat(c.bottom)-100*l/window.innerHeight).toFixed(2)}%`):c.set("bottom",`${Math.round(parseFloat(c.bottom)-l)}px`)):c=a.utils.isPercentage(c.height)?c.set("height",`${(100*d/window.innerHeight).toFixed(2)}%`):c.set("height",`${Math.round(d)}px`),u.editControllerPanel(e,c).exec()}({controllerId:d,dx:l,dy:r,dw:u,dh:c,width:t+u*i,height:e+c*n})};if(g.current){Yt((0,Gt.interact)(g.current).origin("parent"),{layoutItemId:"controller",restrictEdges:!0,onResizeStart:s,onResizing:l,onResizeEnd:r})}return()=>{}},[d,null==$?void 0:$.position]);const N=e.React.useCallback(t=>{t.stopPropagation()},[]),k=e.React.useCallback(()=>{x(!I)},[I]),O=e.React.useCallback((t,o)=>{t.stopPropagation(),(0,e.getAppStore)().dispatch(e.appActions.selectionChanged(null)),(0,e.getAppStore)().dispatch(e.appActions.closeWidget(o))},[]),E=h&&!S?u||p:M;let B;const D=function(t){if(null==t)return null;const{position:o,offsetX:i=0,offsetY:n=0}=t;let s;return t.widthMode!==R.Stretch&&(0!==i&&(s=`translateX(${i}px)`),o!==e.FixedPosition.TopCenter&&o!==e.FixedPosition.MiddleCenter&&o!==e.FixedPosition.BottomCenter||(s=null!=s?`${s} translateX(-50%)`:"translateX(-50%)")),t.heightMode!==R.Stretch&&(0!==n&&(s=null!=s?`${s} translateY(${n}px)`:`translateY(${n}px)`),o!==e.FixedPosition.MiddleLeft&&o!==e.FixedPosition.MiddleCenter&&o!==e.FixedPosition.MiddleRight||(s=null!=s?`${s} translateY(-50%)`:"translateY(-50%)")),s}($);return null!=D&&(B={transform:D}),(0,t.jsxs)(e.motion.div,{id:d,className:"panel-container",css:(()=>{const t=(0,c.getTheme2)();if(m){let o,i;return $.widthMode===a.LayoutItemSizeModes.Stretch&&(o=e.css`
          left: calc(${$.left} + ${f.dx}px);
          right: ${0===f.dx?`calc(${$.right} - ${f.dw}px)`:$.right};
        `),$.heightMode===a.LayoutItemSizeModes.Stretch&&(i=e.css`
          top: calc(${$.top} + ${f.dy}px);
          bottom: ${0===f.dy?`calc(${$.bottom} - ${f.dh}px)`:$.bottom};
        `),e.css`
        ${xd($)};
        display: ${E?"block":"none"};
        width: ${$.widthMode!==a.LayoutItemSizeModes.Stretch?f.width+"px":"auto"};
        height: ${$.heightMode!==a.LayoutItemSizeModes.Stretch?f.height+"px":"auto"};
        ${o}
        ${i}
        border: ${u?"1px solid var(--sys-color-primary-main)":"none"};
        background: ${u?e.polished.rgba(t.sys.color.primary.main,.2):"transparent"};
      `}return e.css`
      ${xd($)};
      display: ${E?"block":"none"};
      height: ${I?"36px":null==$?void 0:$.height};
      border: ${u?"1px solid var(--sys-color-primary-main)":"none"};
      transition: height 0.3s ease-in-out;
      background: ${u?e.polished.rgba(t.sys.color.primary.main,.2):"transparent"};
    `})(),onClick:N,ref:g,style:B,animate:b,onAnimationComplete:()=>{if(null==b?void 0:b.endsWith("hide")){const t=b.replace("hide","show");w(t)}else w(null)},variants:j,children:[u&&(0,t.jsx)(Se,{left:!(null===(n=null==$?void 0:$.position)||void 0===n?void 0:n.includes("LEFT"))||$.widthMode===a.LayoutItemSizeModes.Stretch,right:!(null===(s=null==$?void 0:$.position)||void 0===s?void 0:s.includes("RIGHT"))||$.widthMode===a.LayoutItemSizeModes.Stretch,top:!(null===(l=null==$?void 0:$.position)||void 0===l?void 0:l.includes("TOP"))||$.heightMode===a.LayoutItemSizeModes.Stretch,bottom:!(null===(r=null==$?void 0:$.position)||void 0===r?void 0:r.includes("BOTTOM"))||$.heightMode===a.LayoutItemSizeModes.Stretch}),(0,t.jsx)(e.React.Fragment,{children:z.map(e=>(0,t.jsx)(Td,{controllerId:d,layoutId:C,layoutItemId:e,minimized:I,onToggle:k,onClose:O},e))})]})}function Ld(o){const{pageId:i}=o,n=e.ReactRedux.useSelector(t=>function(t,o,i){var n;const s=Object.keys(null!==(n=t.controllerPanels)&&void 0!==n?n:{}).filter(n=>{const s=L(t,n,e.LayoutItemType.Widget,i);return null!=s&&(s.type!==e.ContainerType.Page||s.id===o)});return s.sort(),s.join(",")}(t.appConfig,i,t.browserSizeMode)),s=e.React.useMemo(()=>n.split(",").filter(t=>""!==t),[n]),a=e.ReactRedux.useSelector(t=>t.appRuntimeInfo.appMode===e.AppMode.Design),[l,r]=e.ReactRedux.useSelector(t=>{var o,i;if(!a)return[null,null];const n=t.appRuntimeInfo.selection;if(!n)return[null,null];const{layoutId:s,layoutItemId:l}=n,r=t.appConfig.layouts[s].content[l];if((null==r?void 0:r.type)===e.LayoutItemType.Widget&&r.widgetId){const e=t.appConfig.widgets[r.widgetId];if("widgets/common/controller/"===(null==e?void 0:e.uri)&&(null===(o=t.appConfig.controllerPanels)||void 0===o?void 0:o[r.widgetId]))return[r.widgetId,null]}const d=o=>{var i,n,s,a,l,r,d,u;switch(null==o?void 0:o.type){case e.LayoutParentType.View:{const e=o.id,l=t.appConfig.views[e].parent,r=t.appConfig.sections[l],d=(null===(n=null===(i=r.parent)||void 0===i?void 0:i[t.browserSizeMode])||void 0===n?void 0:n[0])||(null===(a=null===(s=r.parent)||void 0===s?void 0:s[t.appConfig.mainSizeMode])||void 0===a?void 0:a[0]),u=t.appConfig.layouts[null==d?void 0:d.layoutId];return null==u?void 0:u.parent}case e.LayoutParentType.Widget:{const e=o.id,i=t.appConfig.widgets[e],n=(null===(r=null===(l=i.parent)||void 0===l?void 0:l[t.browserSizeMode])||void 0===r?void 0:r[0])||(null===(u=null===(d=i.parent)||void 0===d?void 0:d[t.appConfig.mainSizeMode])||void 0===u?void 0:u[0]),s=t.appConfig.layouts[null==n?void 0:n.layoutId];return null==s?void 0:s.parent}default:return null}};let u=t.appConfig.layouts[s].parent;for(;u;){if(u.type===e.LayoutParentType.Widget){const e=t.appConfig.widgets[u.id];if("widgets/common/controller/"===(null==e?void 0:e.uri)&&(null===(i=t.appConfig.controllerPanels)||void 0===i?void 0:i[e.id]))return[u.id,r.id]}u=d(u)}return[null,null]},e.ReactRedux.shallowEqual);return e.React.useEffect(()=>{var t;if(l){const o=(0,e.getAppStore)().getState(),i=Object.keys(null!==(t=o.widgetsRuntimeInfo)&&void 0!==t?t:{}).filter(t=>{const i=o.widgetsRuntimeInfo[t];return i.state===e.WidgetState.Opened&&i.controllerWidgetId!==l&&t!==l});i.length>0&&(0,e.getAppStore)().dispatch(e.appActions.closeWidgets(i))}},[l]),e.React.useEffect(()=>{var t;const o=(0,e.getAppStore)().getState(),i=Object.keys(null!==(t=o.widgetsRuntimeInfo)&&void 0!==t?t:{}).filter(t=>o.widgetsRuntimeInfo[t].state===e.WidgetState.Opened);i.length>0&&(0,e.getAppStore)().dispatch(e.appActions.closeWidgets(i))},[a]),(0,t.jsx)(e.React.Fragment,{children:s.map(e=>(0,t.jsx)(Md,{isDesignMode:a,selected:l===e&&null===r,innerSelected:l===e&&null!=r,controllerId:e},e))})}function Pd(o){const{pageJson:i,visible:n,renderedPageId:s,browserSizeMode:l,activePagePart:r,pageContext:d,headerFooterHeight:u}=o,[c,p]=e.React.useState(null),h=e.ReactRedux.useSelector(t=>function(t,e){const o=t.appRuntimeInfo.animationPreview;return(null==o?void 0:o.pageId)===e?o.id:0}(t,i.id),e.ReactRedux.shallowEqual),g=e.React.useMemo(()=>function(t,o){if(t){const i=(0,e.getAppStore)().getState().appConfig,n=t.layout[i.mainSizeMode],s=i.layouts[n];if((null==s?void 0:s.type)===e.LayoutType.GridLayout)return o>0?`calc(100% - ${o}px)`:"100%"}return"auto"}(i,u),[u]),m=i.layout,y=i.oneByOneEffect&&i.oneByOneEffect.type!==e.AnimationType.None?i.oneByOneEffect:null,f=e.ReactRedux.useSelector(t=>{var e;return null===(e=t.appRuntimeInfo)||void 0===e?void 0:e.appMode}),v=e.ReactRedux.useSelector(t=>{var e,o,i;return null!==(i=null===(o=null===(e=t.appConfig)||void 0===e?void 0:e.forBuilderAttributes)||void 0===o?void 0:o.lockLayout)&&void 0!==i&&i}),I=e.hooks.usePrevious(f),x=e.ReactRedux.useSelector(t=>t.browserSizeMode),b=e.hooks.usePrevious(x),w=e.hooks.usePrevious(h),S=e.hooks.usePrevious(n),[C,R]=e.React.useMemo(()=>[(0,e.prepareOneByOneVariants)(y),(0,e.prepareOneByOneTransition)(y)],[y]),T=!m[l];let M;i.mode!==e.PageMode.FitWindow&&i.maxWidth>0&&(M=i.maxWidth);const L=e.React.useMemo(()=>{const t=(0,e.getAppStore)().getState();let o;return i.layout&&(o=a.searchUtils.findLayoutId(i.layout,l,t.appConfig.mainSizeMode)),Object.assign(Object.assign({},d),{maxWidth:M,viewOnly:T,rootLayoutId:o,pageId:s})},[d,T,M,s,i.layout,l]);e.React.useEffect(()=>{f!==e.AppMode.Design||document.body.classList.contains("design-mode")||document.body.classList.add("design-mode"),f===e.AppMode.Run&&document.body.classList.contains("design-mode")&&document.body.classList.remove("design-mode")},[f]),e.React.useEffect(()=>{v&&!document.body.classList.contains("lock-layout")&&document.body.classList.add("lock-layout"),!v&&document.body.classList.contains("lock-layout")&&document.body.classList.remove("lock-layout")},[v]),e.React.useEffect(()=>{h>0&&h>w&&p(`${L.rootLayoutId}_show`)},[h,w,L]),e.React.useEffect(()=>{I===e.AppMode.Design&&f===e.AppMode.Run&&p("hide"),I!==e.AppMode.Design&&f===e.AppMode.Design&&p("visible")},[f,I,n]),e.React.useEffect(()=>{f!==e.AppMode.Design&&x!==b&&p("hide")},[f,x,b]),e.React.useEffect(()=>{f!==e.AppMode.Design&&S!==n&&p(n?"show":"hide")},[n,f,S]);const P=e.React.useMemo(()=>{const t={show:{opacity:1,transition:R},hide:{opacity:1,transition:{type:"tween",duration:0}},visible:{opacity:1,transition:{type:"tween",duration:0}}};return t[`${L.rootLayoutId}_show`]=t.show,t},[R,L.rootLayoutId]);if(m)return(0,t.jsxs)(e.motion.div,{id:i.id,"data-pageid":i.id,className:"page",css:e.css`
      display: ${n?"flex":"none"};
      position: relative;
      background-color: ${i.bodyBackgroundColor||"var(--sys-color-surface-background)"};
      color: ${i.bodyTextColor||"var(--sys-color-surface-background-text)"};
      z-index: 1;
      flex: 1 0 auto;
      height: ${g};

      body:not(.design-mode) & {
        .edit-mask {
          display: none !important;
        }
      }

      .exb-drop-area {
        pointer-events: ${r!==e.PagePart.Body?"none !important":"auto"}
      }
    `,animate:c,onAnimationComplete:()=>{n&&"hide"===c?p("show"):(null==c?void 0:c.endsWith("show"))&&p(null)},variants:P,children:[(0,t.jsx)(e.AnimationContext.Provider,{value:{variants:C,oid:L.rootLayoutId},children:(0,t.jsx)(a.PageContext.Provider,{value:L,children:(0,t.jsxs)(e.PageVisibilityContext.Provider,{value:n,children:[(0,t.jsx)(ro,{layouts:m,isPageItem:!0,visible:n,className:"w-100",css:e.css`
                margin: 0 auto;
                background-color: transparent;
                z-index: 0;
              `}),l!==e.BrowserSizeMode.Small&&(0,t.jsx)(Ld,{pageId:i.id})]})},i.id)}),r!==e.PagePart.Body&&(0,t.jsx)("div",{className:"edit-mask",css:e.css`
                ${ld};
                background: ${e.polished.rgba(d.theme.ref.palette.neutral[1100],.6)};
                z-index: 1;
              `,onClick:cd})]})}function Ad(t){var o,i;let n=(0,e.getAppStore)().getState();window.jimuConfig.isBuilder&&(n=n.appStateInBuilder);const s=null===(o=n.appRuntimeInfo.screenGroupNavInfos)||void 0===o?void 0:o[t];return null!==(i=null==s?void 0:s.activeIndex)&&void 0!==i?i:0}const jd=[{icon:Mt(),title:t=>t.formatMessage("duplicateScreen"),visible:()=>lt()===e.AppMode.Design&&!rt(),onClick:t=>{const{layoutItem:i}=t,n=Ad(i.screenGroupId),s=(0,o.getAppConfigAction)();s.duplicateScreenByIndex(n,i.screenGroupId),s.exec(),(0,e.getAppStore)().dispatch(e.appActions.screenGroupNavInfoChanged(i.screenGroupId,n+1))}},{icon:X(),title:t=>t.formatMessage("deleteScreen"),visible:t=>{var i;if(lt()!==e.AppMode.Design||rt())return!1;const{layoutItem:n}=t,s=n.screenGroupId,a=null===(i=(0,o.getAppConfigAction)().appConfig.screenGroups)||void 0===i?void 0:i[s];if(!a)return!1;const{screens:l}=a;return l&&l.length>1},onClick:t=>{const{layoutItem:i}=t,n=Ad(i.screenGroupId),s=(0,o.getAppConfigAction)(),a=s.appConfig.screenGroups[i.screenGroupId].screens.length;s.removeScreenByIndex(n,i.screenGroupId).exec(),n===a-1&&(window.jimuConfig.isInBuilder?(0,e.getAppStore)().dispatch(e.appActions.screenGroupNavInfoChanged(i.screenGroupId,n-1)):o.builderAppSync.publishScreenGroupNavInfoToApp(i.screenGroupId,n-1))}}],zd=[ft,vt,gt,ht],$d=[].concat(Nt,zd);class Nd extends o.BaseLayoutService{removeItemFromOrder(t,e){const{layoutId:o,layoutItemId:i}=e,n=t.layouts[o];if(!(null==n?void 0:n.order))return t;let s=[].concat(n.order);return s=s.filter(t=>t!==i),t.setIn(["layouts",o,"order"],s)}afterItemMoved(t,e,o){let i=super.afterItemMoved(t,e,o);return i=this.removeItemFromOrder(i,e),this.clearEmptyRowInFlowLayout(i,e)}afterItemRemoved(t,e){let o=super.afterItemRemoved(t,e);return o=this.removeItemFromOrder(o,e),this.clearEmptyRowInFlowLayout(o,e)}duplicateItemInSameLayout(t,e,o,i){const n=super.duplicateItemInSameLayout(t,e,o,i);let s=n[0];const a=n[1],l=s.layouts[e.layoutId],r=[].concat(l.order),d=r.indexOf(e.layoutItemId);return r.splice(d,1,e.layoutItemId,a),s=s.setIn(["layouts",e.layoutId,"order"],r),s=this.offsetDuplicateItem(s,e.layoutId),[s,a]}getTocStructure(t,e){var i;const n=t.layouts[e],s=a.utils.getCurrentSizeMode();if((null===(i=null==n?void 0:n.order)||void 0===i?void 0:i.length)>0){return[].concat(n.order).filter(t=>!n.content[t].isPending).map(i=>{const a=n.content[i];return new o.ContentServiceWrapper(t,a).toTocNode({layoutId:e,layoutItemId:i},s)})}return[]}processAfterItemAdded(t,e,i,n){var s;const{insertIndex:l,itemRect:r}=n,d=(0,o.getAppConfigAction)(t),u={left:r.left,width:r.width,height:r.height};return(null===(s=e.layoutInfo)||void 0===s?void 0:s.layoutId)!==i.layoutId&&d.editLayoutItemProperty(i,"setting.autoProps.height",a.LayoutItemSizeModes.Stretch),d.editLayoutItemProperty(i,"bbox",u).adjustOrderOfItem(i,l),d.appConfig}getToolItems(t,o,i){if("view"===(null==i?void 0:i.toLowerCase()))return kt;if("screen"===(null==i?void 0:i.toLowerCase()))return jd;return a.searchUtils.findLayoutItem(t,o).type===e.LayoutItemType.Section?$d:zd}offsetDuplicateItem(t,e){let o=t;const i=t.layouts[e],n=(t,i)=>parseInt(o.layouts[e].content[t].bbox[i],10),s=(t,i,n)=>{o=o.setIn(["layouts",e,"content",t,"bbox",i],n)},a=Object.keys(i.content).sort((t,e)=>n(t,"left")-n(e,"left"));let l=0;for(let t=0;t<a.length;t++)l+=n(a[t],"width");if(s(a[0],"left",0),l<=12)for(let t=1;t<a.length;t++)s(a[t],"left",n(a[t-1],"left")+n(a[t-1],"width"));else{const t=l/12;s(a[0],"width",Math.max(1,Math.floor(n(a[0],"width")/t)));for(let e=1;e<a.length;e++)s(a[e],"left",n(a[e-1],"left")+n(a[e-1],"width")),s(a[e],"width",Math.max(1,Math.floor(n(a[e],"width")/t)))}return o}clearEmptyRowInFlowLayout(t,i){var n,s,l;const r=t.layouts[i.layoutId];if((null!==(s=null===(n=null==r?void 0:r.order)||void 0===n?void 0:n.length)&&void 0!==s?s:0)>0)return t;const d=a.searchUtils.getWidgetIdThatUseTheLayoutId(t,i.layoutId);if(d){const i=t.widgets[d];if("row"===(null===(l=null==i?void 0:i.manifest)||void 0===l?void 0:l.name)){const i=a.utils.getCurrentSizeMode(),n=o.widgetService.findParent(t,d,i);if(n){const s=t.layouts[n.layoutId];if((null==s?void 0:s.type)===e.LayoutType.FlowLayout){return o.LayoutServiceProvider.getInstance().getServiceByType(s.type).removeItem(t,n,i,!0,!1)}}}}return t}}const kd=[].concat(Nt,Zn);class Od extends o.BaseLayoutService{beforeItemRemoved(t,e){const{layoutId:o,layoutItemId:i}=e;let n=t.layouts[o];return n=Un(n,i),t.setIn(["layouts",o],n)}pendItem(t,e){let o=t,i=o.layouts[e.layoutId];return i=Un(i,e.layoutItemId),o=o.setIn(["layouts",e.layoutId],i),i.setting.rootItem===e.layoutItemId&&(o=o.setIn(["layouts",e.layoutId,"setting"],i.setting.without("rootItem"))),o=super.pendItem(o,e),o}duplicateItemInSameLayout(t,o,i,n){const s=super.duplicateItemInSameLayout(t,o,i,n);let a=s[0];const l=s[1],{layoutId:r,layoutItemId:d}=o;let u=a.layouts[r];const c=u.content[d];if(c.parent){const t=$n(u,c.parent),o=[...t.children],i=o.indexOf(d);if(o.splice(i,0,l),u=En(u,c.parent,"children",o),u=En(u,l,"parent",c.parent),t.gridType===e.GridItemType.Tab)u=On(u,l,+c.bbox.width);else{const t=+c.bbox.width/2;u=On(u,l,t),u=On(u,d,t)}}else u=Fn(u,l,d,e.GridItemType.Row,!1,!1);return a=a.setIn(["layouts",r],u),[a,l]}getTocStructure(t,e){var o;const i=t.layouts[e],n=null===(o=i.setting)||void 0===o?void 0:o.rootItem,s=this.fetchGridNode(t,i,`${n}`,a.utils.getCurrentSizeMode());return null!=s?[s]:[]}getToolItems(t,o,i){if("view"===(null==i?void 0:i.toLowerCase()))return kt;if("screen"===(null==i?void 0:i.toLowerCase()))return jd;const n=a.searchUtils.findLayoutItem(t,o);return n.gridType===e.GridItemType.Row||n.gridType===e.GridItemType.Column?Cs:n.gridType===e.GridItemType.Tab?[]:n.type===e.LayoutItemType.Section?kd:Zn}processAfterItemAdded(t){return t}translate(t){return e.i18n.getIntl().formatMessage({id:t})}fetchGridNode(t,i,n,s){var a,l,r,d;const u=null===(a=i.content)||void 0===a?void 0:a[n];if(null==u)return null;const{gridType:c=e.GridItemType.Plain,children:p}=u;if(c===e.GridItemType.Plain){return new o.ContentServiceWrapper(t,u).toTocNode({layoutId:i.id,layoutItemId:n},s)}let h;c===e.GridItemType.Row?h=null!==(l=u.label)&&void 0!==l?l:this.translate("gridRow"):c===e.GridItemType.Column?h=null!==(r=u.label)&&void 0!==r?r:this.translate("gridCol"):c===e.GridItemType.Tab&&(h=null!==(d=u.label)&&void 0!==d?d:this.translate("tabs"));let g=!1;if(u.parent){g=i.content[u.parent].gridType===e.GridItemType.Tab}const m=g&&(c===e.GridItemType.Row||c===e.GridItemType.Column),y={label:h,type:"layoutItem",layoutId:i.id,layoutItemId:n,isLabelReadOnly:!m};return(null==p?void 0:p.length)>0&&(y.children=[...p].map(e=>this.fetchGridNode(t,i,e,s))),y}}const Ed=[ft,vt,gt,ht],Bd=[].concat(mi,Ed),Dd=[].concat(mi,Nt,Ed);class Fd extends o.BaseLayoutService{removeItemFromOrder(t,e){const{layoutId:o,layoutItemId:i}=e,n=t.layouts[o];let s=[].concat(n.order);return s=s.filter(t=>t!==i),t.setIn(["layouts",o,"order"],s)}afterItemMoved(t,e){return this.removeItemFromOrder(t,e)}afterItemRemoved(t,e){const o=super.afterItemRemoved(t,e);return this.removeItemFromOrder(o,e)}updateBBoxAfterAdd(t,o,i,n){var s,l,r,d,u,c;const{containerRect:p,itemRect:h,currentSizeMode:g}=n;let m=n.snapResult;const y=o.layoutInfo,f=a.searchUtils.findLayoutItem(t,i);let v,I=(0,e.Immutable)(null!==(s=f.setting)&&void 0!==s?s:{});if(null==o.id&&(null==y?void 0:y.layoutId)===i.layoutId){const e=a.searchUtils.findLayoutItem(t,o.layoutInfo),i=null==e?void 0:e.bbox;if(i){v=a.utils.replaceBoundingBox(i,m,p).set("width",i.width).set("height",i.height)}else v=a.utils.replaceBoundingBox(null,m,p)}else if(v=a.utils.replaceBoundingBox(null,m,p),null==o.layoutInfo&&f.type===e.LayoutItemType.Widget&&f.widgetId){const e=t.widgets[f.widgetId];if((!m.width||!m.height)&&(null===(l=e.manifest)||void 0===l?void 0:l.defaultSize)){const{width:t,height:o}=e.manifest.defaultSize;m=Object.assign(Object.assign({},h),{width:t,height:o})}(null===(d=null===(r=e.manifest)||void 0===r?void 0:r.defaultSize)||void 0===d?void 0:d.autoWidth)&&(I=I.setIn(["autoProps","width"],a.LayoutItemSizeModes.Auto)),(null===(c=null===(u=e.manifest)||void 0===u?void 0:u.defaultSize)||void 0===c?void 0:c.autoHeight)&&(I=I.setIn(["autoProps","height"],a.LayoutItemSizeModes.Auto))}const x=Ii(v,I,p,h);v=x.bbox,I=x.setting;const b=t.layouts[i.layoutId],w=b.parent.type===e.LayoutParentType.Header,S=b.parent.type===e.LayoutParentType.Footer;if(null==o.layoutInfo&&(w||S)){const e=w?parseInt(`${t.header.height[g]}`):parseInt(`${t.footer.height[g]}`);v=v.set("height",a.utils.toRatio(Math.min(h.height,e),e))}return[v,I]}processAfterItemAdded(t,e,i,n){var s;const{currentSizeMode:l,containerRect:r,itemRect:d,others:u}=n,c=t,{snapResult:p}=u,h=(0,o.getAppConfigAction)(c),[g,m]=this.updateBBoxAfterAdd(c,e,i,{containerRect:r,itemRect:d,snapResult:p,currentSizeMode:l});if(h.editLayoutItemProperty(i,"bbox",a.utils.isRTL()?vi(g):g).editLayoutItemProperty(i,"setting",m),null!=e.layoutInfo&&e.layoutInfo.layoutId===i.layoutId&&h.editLayoutItemProperty(i,"setting.vCenter",!1).editLayoutItemProperty(i,"setting.hCenter",!1),(null===(s=e.layoutInfo)||void 0===s?void 0:s.layoutId)!==i.layoutId&&h.adjustOrderOfItem(i,null),c.useAutoSortInFixedLayout){const t=pi(h.appConfig.layouts[i.layoutId],r,{layoutItemId:i.layoutItemId,rect:d});h.editLayoutProperty(i.layoutId,"order",t.order)}return h.appConfig}duplicateItemInSameLayout(t,e,o,i){const n=super.duplicateItemInSameLayout(t,e,o,i);let s=n[0];const a=n[1],l=s.layouts[e.layoutId],r=[].concat(l.order);return r.push(a),s=s.setIn(["layouts",e.layoutId,"order"],r),s=this.offsetDuplicateItem(s,{layoutId:e.layoutId,layoutItemId:a}),[s,a]}getTocStructure(t,e){var i;const n=t.layouts[e],s=a.utils.getCurrentSizeMode();if((null===(i=null==n?void 0:n.order)||void 0===i?void 0:i.length)>0){return[].concat(n.order).filter(t=>!n.content[t].isPending).map(i=>{const a=n.content[i];return new o.ContentServiceWrapper(t,a).toTocNode({layoutId:e,layoutItemId:i},s)})}return[]}getToolItems(t,o,i){if("view"===(null==i?void 0:i.toLowerCase()))return kt;if("screen"===(null==i?void 0:i.toLowerCase()))return jd;return a.searchUtils.findLayoutItem(t,o).type===e.LayoutItemType.Section?Dd:Bd}offsetDuplicateItem(t,e){var o,i;const{layoutId:n,layoutItemId:s}=e,l=t.layouts[n].content[s];let{bbox:r,setting:d}=l;const u=t=>{if(a.utils.isPercentage(t))return`${parseFloat(t)+5}%`;const e=parseInt(t,10);return isNaN(e)?t:e+20};return r=(null===(o=null==d?void 0:d.autoProps)||void 0===o?void 0:o.left)?r.set("right",u(r.right)):r.set("left",u(r.left)),r=(null===(i=null==d?void 0:d.autoProps)||void 0===i?void 0:i.top)?r.set("bottom",u(r.bottom)):r.set("top",u(r.top)),(null==d?void 0:d.hCenter)&&(null==d?void 0:d.vCenter)&&(d=d.set("vCenter",!1)),t.setIn(["layouts",n,"content",s,"bbox"],r).setIn(["layouts",n,"content",s,"setting"],d)}}const Hd=[ft,It,ht],Vd=[gt,ft,ht];class Wd extends o.BaseLayoutService{removeItemFromOrder(t,e){const{layoutId:o,layoutItemId:i}=e,n=t.layouts[o];let s=[].concat(n.order);return s=s.filter(t=>t!==i),t.setIn(["layouts",o,"order"],s)}afterItemMoved(t,e){return this.removeItemFromOrder(t,e)}afterItemRemoved(t,e){const o=super.afterItemRemoved(t,e);return this.removeItemFromOrder(o,e)}duplicateItemInSameLayout(t,e,o,i){var n;const s=super.duplicateItemInSameLayout(t,e,o,i);let a=s[0];const l=s[1],r=a.layouts[e.layoutId],d=[].concat(r.order),u=d.indexOf(e.layoutItemId);d.splice(u,1,e.layoutItemId,l),a=a.setIn(["layouts",e.layoutId,"order"],d);return(null===(n=r.content[l].setting)||void 0===n?void 0:n.isFloating)&&(a=this.offsetDuplicateItem(a,{layoutId:e.layoutId,layoutItemId:l})),[a,l]}getTocStructure(t,e){var i;const n=t.layouts[e],s=a.utils.getCurrentSizeMode();if((null===(i=null==n?void 0:n.order)||void 0===i?void 0:i.length)>0){return[].concat(n.order).filter(t=>!n.content[t].isPending).map(i=>{const a=n.content[i];return new o.ContentServiceWrapper(t,a).toTocNode({layoutId:e,layoutItemId:i},s)})}return[]}processAfterItemAdded(t,e,i,n){const{containerRect:s,itemRect:l,insertIndex:r}=n,d=(0,o.getAppConfigAction)(t),u=a.utils.replaceBoundingBox(null,l,s);return d.editLayoutItemProperty(i,"bbox",u).adjustOrderOfItem(i,r),d.appConfig}getToolItems(t,o,i){if("view"===(null==i?void 0:i.toLowerCase()))return kt;if("screen"===(null==i?void 0:i.toLowerCase()))return jd;return a.searchUtils.findLayoutItem(t,o).type===e.LayoutItemType.ScreenGroup?Vd:Hd}offsetDuplicateItem(t,e){var o,i;const{layoutId:n,layoutItemId:s}=e,l=t.layouts[n].content[s];let{bbox:r,setting:d}=l;const u=t=>{if(a.utils.isPercentage(t))return`${parseFloat(t)+5}%`;const e=parseInt(t,10);return isNaN(e)?t:e+20};return r=(null===(o=null==d?void 0:d.autoProps)||void 0===o?void 0:o.left)?r.set("right",u(r.right)):r.set("left",u(r.left)),r=(null===(i=null==d?void 0:d.autoProps)||void 0===i?void 0:i.top)?r.set("bottom",u(r.bottom)):r.set("top",u(r.top)),(null==d?void 0:d.hCenter)&&(null==d?void 0:d.vCenter)&&(d=d.set("vCenter",!1)),t.setIn(["layouts",n,"content",s,"bbox"],r).setIn(["layouts",n,"content",s,"setting"],d)}}const Gd=[ft,vt,gt,ht],Ud=[].concat(Nt,Gd);class _d extends o.BaseLayoutService{removeItemFromOrder(t,e){const{layoutId:o,layoutItemId:i}=e,n=t.layouts[o];let s=[].concat(n.order);return s=s.filter(t=>t!==i),t.setIn(["layouts",o,"order"],s)}afterItemMoved(t,e){return this.removeItemFromOrder(t,e)}afterItemRemoved(t,e){const o=super.afterItemRemoved(t,e);return this.removeItemFromOrder(o,e)}duplicateItemInSameLayout(t,e,o,i){const n=super.duplicateItemInSameLayout(t,e,o,i);let s=n[0];const a=n[1],l=s.layouts[e.layoutId],r=[].concat(l.order),d=r.indexOf(e.layoutItemId);return r.splice(d,1,e.layoutItemId,a),s=s.setIn(["layouts",e.layoutId,"order"],r),[s,a]}getTocStructure(t,e){var i;const n=t.layouts[e],s=a.utils.getCurrentSizeMode();if((null===(i=null==n?void 0:n.order)||void 0===i?void 0:i.length)>0){return[].concat(n.order).filter(t=>!n.content[t].isPending).map(i=>{const a=n.content[i];return new o.ContentServiceWrapper(t,a).toTocNode({layoutId:e,layoutItemId:i},s)})}return[]}processAfterItemAdded(t,i,n,s){var l,r;const{containerRect:d,itemRect:u,insertIndex:c}=s,p=(0,o.getAppConfigAction)(t);let h=a.utils.replaceBoundingBox(null,u,d);h=h.without("left").without("top").without("right").without("bottom"),p.editLayoutItemProperty(n,"bbox",h).adjustOrderOfItem(n,c);const g=a.searchUtils.findLayoutItem(t,n);if(g.type===e.LayoutItemType.Widget&&g.widgetId){(null===(r=null===(l=t.widgets[g.widgetId].manifest)||void 0===l?void 0:l.defaultSize)||void 0===r?void 0:r.autoHeight)&&p.editLayoutItemProperty(n,"setting.autoProps.height",a.LayoutItemSizeModes.Auto)}return p.appConfig}getToolItems(t,o,i){if("view"===(null==i?void 0:i.toLowerCase()))return kt;if("screen"===(null==i?void 0:i.toLowerCase()))return jd;return a.searchUtils.findLayoutItem(t,o).type===e.LayoutItemType.Section?Ud:Gd}}const Yd=[ft,vt,gt,ht],Xd=[].concat(Nt,Yd);class qd extends o.BaseLayoutService{removeItemFromOrder(t,e){const{layoutId:o,layoutItemId:i}=e,n=t.layouts[o];let s=[].concat(n.order);return s=s.filter(t=>t!==i),t.setIn(["layouts",o,"order"],s)}afterItemMoved(t,e){return this.removeItemFromOrder(t,e)}afterItemRemoved(t,e){const o=super.afterItemRemoved(t,e);return this.removeItemFromOrder(o,e)}duplicateItemInSameLayout(t,e,o,i){const n=super.duplicateItemInSameLayout(t,e,o,i);let s=n[0];const a=n[1],l=s.layouts[e.layoutId],r=[].concat(l.order),d=r.indexOf(e.layoutItemId);return r.splice(d,1,e.layoutItemId,a),s=s.setIn(["layouts",e.layoutId,"order"],r),[s,a]}getTocStructure(t,e){var i;const n=t.layouts[e],s=a.utils.getCurrentSizeMode();if((null===(i=null==n?void 0:n.order)||void 0===i?void 0:i.length)>0){return[].concat(n.order).filter(t=>!n.content[t].isPending).map(i=>{const a=n.content[i];return new o.ContentServiceWrapper(t,a).toTocNode({layoutId:e,layoutItemId:i},s)})}return[]}processAfterItemAdded(t,i,n,s){var l,r;const{containerRect:d,itemRect:u,insertIndex:c}=s,p=(0,o.getAppConfigAction)(t);let h=a.utils.replaceBoundingBox(null,u,d);h=h.without("left").without("top").without("right").without("bottom").without("width"),p.editLayoutItemProperty(n,"bbox",h).adjustOrderOfItem(n,c);const g=a.searchUtils.findLayoutItem(t,n);if(g.type===e.LayoutItemType.Widget&&g.widgetId){(null===(r=null===(l=t.widgets[g.widgetId].manifest)||void 0===l?void 0:l.defaultSize)||void 0===r?void 0:r.autoHeight)&&p.editLayoutItemProperty(n,"setting.autoProps.height",a.LayoutItemSizeModes.Auto)}return p.appConfig}getToolItems(t,o,i){if("view"===(null==i?void 0:i.toLowerCase()))return kt;if("screen"===(null==i?void 0:i.toLowerCase()))return jd;return a.searchUtils.findLayoutItem(t,o).type===e.LayoutItemType.Section?Xd:Yd}}const Zd=[ft,vt,gt,ht],Jd=[].concat(Nt,Zd);class Kd extends o.BaseLayoutService{removeItemFromOrder(t,e){const{layoutId:o,layoutItemId:i}=e,n=t.layouts[o];let s=[].concat(n.order);return s=s.filter(t=>t!==i),t.setIn(["layouts",o,"order"],s)}afterItemMoved(t,e){return this.removeItemFromOrder(t,e)}afterItemRemoved(t,e){const o=super.afterItemRemoved(t,e);return this.removeItemFromOrder(o,e)}duplicateItemInSameLayout(t,e,o,i){const n=super.duplicateItemInSameLayout(t,e,o,i);let s=n[0];const a=n[1],l=s.layouts[e.layoutId],r=[].concat(l.order),d=r.indexOf(e.layoutItemId);return r.splice(d,1,e.layoutItemId,a),s=s.setIn(["layouts",e.layoutId,"order"],r),[s,a]}getTocStructure(t,e){var i;const n=t.layouts[e],s=a.utils.getCurrentSizeMode();if((null===(i=null==n?void 0:n.order)||void 0===i?void 0:i.length)>0){return[].concat(n.order).filter(t=>!n.content[t].isPending).map(i=>{const a=n.content[i];return new o.ContentServiceWrapper(t,a).toTocNode({layoutId:e,layoutItemId:i},s)})}return[]}processAfterItemAdded(t,i,n,s){var l,r,d,u;const{containerRect:c,insertIndex:p,itemRect:h}=s,g=(0,o.getAppConfigAction)(t);let m=a.utils.replaceBoundingBox(null,h,c);m=m.without("left").without("top").without("right").without("bottom"),g.editLayoutItemProperty(n,"bbox",m).adjustOrderOfItem(n,p);const y=a.searchUtils.findLayoutItem(t,n);if(y.type===e.LayoutItemType.Widget&&y.widgetId){const e=t.widgets[y.widgetId];(null===(r=null===(l=e.manifest)||void 0===l?void 0:l.defaultSize)||void 0===r?void 0:r.autoHeight)&&g.editLayoutItemProperty(n,"setting.autoProps.height",a.LayoutItemSizeModes.Auto),(null===(u=null===(d=e.manifest)||void 0===d?void 0:d.defaultSize)||void 0===u?void 0:u.autoWidth)&&g.editLayoutItemProperty(n,"setting.autoProps.width",a.LayoutItemSizeModes.Auto)}return g.appConfig}getToolItems(t,o,i){if("view"===(null==i?void 0:i.toLowerCase()))return kt;if("screen"===(null==i?void 0:i.toLowerCase()))return jd;return a.searchUtils.findLayoutItem(t,o).type===e.LayoutItemType.Section?Jd:Zd}}var Qd=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};function tu(o){const{showClassification:i}=o,n=Qd(o,["showClassification"]),s=e.ReactRedux.useSelector(t=>t.appInfo.id),[a,l]=e.React.useState(null);return e.React.useEffect(()=>{i&&!a&&(0,e.loadArcGISJSAPIModule)("esri/kernel").then(t=>{t&&e.moduleLoader.loadModule("jimu-ui/advanced/portal-components").then(l)}).catch(t=>{console.error("loadArcGISJSAPIModule error",t)})},[i]),(null==a?void 0:a.ClassificationBanner)&&(0,t.jsx)(a.ClassificationBanner,Object.assign({portalItemId:s},n))}const eu=c.styled.div(()=>"\n    position: sticky;\n    top: 0;\n    z-index: 2;\n  ");function ou(o){const{headerJson:i,showClassification:n,classification:s,children:a}=o;return n?(0,t.jsxs)(e.React.Fragment,{children:[(0,t.jsxs)(eu,{className:"sticky-header-wrapper w-100",children:[(0,t.jsx)(tu,{showClassification:n,position:"top",needSticky:!1,classification:s}),(null==i?void 0:i.sticky)&&a]}),!(null==i?void 0:i.sticky)&&a]}):a}o.LayoutServiceProvider.getInstance().registerService(e.LayoutType.RowLayout,new Nd),o.LayoutServiceProvider.getInstance().registerService(e.LayoutType.GridLayout,new Od),o.LayoutServiceProvider.getInstance().registerService(e.LayoutType.FixedLayout,new Fd),o.LayoutServiceProvider.getInstance().registerService(e.LayoutType.FlowLayout,new Wd),o.LayoutServiceProvider.getInstance().registerService(e.LayoutType.ColumnLayout,new _d),o.LayoutServiceProvider.getInstance().registerService(e.LayoutType.AccordionLayout,new qd),o.LayoutServiceProvider.getInstance().registerService(e.LayoutType.FlexRowLayout,new Kd),(0,a.registerLayoutBuilder)(e.LayoutType.FixedLayout,on),(0,a.registerLayoutBuilder)(e.LayoutType.FlowLayout,ed),(0,a.registerLayoutBuilder)(e.LayoutType.GridLayout,Vs),(0,a.registerLayoutBuilder)(e.LayoutType.ColumnLayout,pn),(0,a.registerLayoutBuilder)(e.LayoutType.AccordionLayout,Sa),(0,a.registerLayoutBuilder)(e.LayoutType.FlexRowLayout,ja);class iu extends e.React.PureComponent{constructor(t){super(t),this.onResizeStart=()=>{this.setState({isResizing:!0})},this.onResizeEnd=()=>{this.setState({isResizing:!1})},this.updateHeaderHeight=t=>{this.setState({headerHeight:t})},this.updateFooterHeight=t=>{this.setState({footerHeight:t})},this.startPaste=()=>{var t;const o=null===(t=(0,e.getAppStore)().getState().appRuntimeInfo)||void 0===t?void 0:t.clipboard,{activePagePart:i,pageStatus:n,currentDialogId:s,dialogs:l}=this.props;if(o){let t;if(s&&l[s])t=gd(s);else if(i===e.PagePart.Header)t=pd();else if(i===e.PagePart.Footer)t=hd();else{t=function(t){var o;const i=(0,e.getAppStore)().getState(),n=null===(o=i.appConfig.pages[t])||void 0===o?void 0:o.layout;return n?a.searchUtils.findLayoutId(n,i.browserSizeMode,i.appConfig.mainSizeMode):null}(md(n))}V(o,t)}},this.isMac=()=>{var t,e;return"macOS"===(null===(e=null===(t=window.jimuUA)||void 0===t?void 0:t.os)||void 0===e?void 0:e.name)},this.clearSelection=t=>{!ut()&&!ct()||qt()||Wt()||(t.stopPropagation(),(0,e.getAppStore)().dispatch(e.appActions.selectionChanged(null)))},this.formatMessage=(t,e)=>this.props.intl?this.props.intl.formatMessage({id:t,defaultMessage:Qt[t]},e):Qt[t],this.onClassificationBannerReady=()=>{o.appBuilderSync.publishClassificationBannerReadyToBuilder()},this.state={headerHeight:0,footerHeight:0,isResizing:!1},e.ExtensionManager.getInstance().registerExtension({epName:e.extensionSpec.ExtensionPoints.LayoutTransformer,extension:new ql}),e.ExtensionManager.getInstance().registerExtension({epName:e.extensionSpec.ExtensionPoints.LayoutTransformer,extension:new Jl}),e.ExtensionManager.getInstance().registerExtension({epName:e.extensionSpec.ExtensionPoints.LayoutTransformer,extension:new Kl}),this.isMac()?this.keyBindings={"command+keyv":this.startPaste}:this.keyBindings={"ctrl+keyv":this.startPaste},this.updatePageContext()}componentDidUpdate(t){var e;const o=null===(e=window.document)||void 0===e?void 0:e.documentElement;o&&(window.jimuConfig.isInBuilder&&ut()?o.classList.add("is-in-builder"):o.classList.remove("is-in-builder"));md(t.pageStatus)!==md(this.props.pageStatus)&&(this.pageRef.scrollTop=0)}getPageStyle(){const{pageStatus:t,pages:o,minHeight:i,currentAppMode:n}=this.props,s=o[Object.keys(t).find(e=>t[e])];let l;return l=i>0?`${i}px`:s.mode===e.PageMode.AutoScroll?n===e.AppMode.Run?"min(100%, 1080px)":"1080px":"100vh",e.css`
      position: relative;
      margin: 0 auto;
      overflow: hidden;
      z-index: 0;
      height: ${s.mode===e.PageMode.FitWindow?"100%":"auto"};
      min-height: ${l};
      .is-dragging {
        z-index: ${a.LayoutZIndex.DraggingItem};
        opacity: 0.8;
      }

      body:not(.design-mode) & {
        overflow: auto;
        height: 100%;
      }
    `}updatePageContext(){const{theme:t}=this.props,o={theme:t,builderTheme:(0,c.getBuilderThemeVariables)(),formatMessage:this.formatMessage};if(this.pageContext)for(const t in o)this.pageContext[t]!==o[t]&&(this.pageContext=this.pageContext.set(t,o[t]));else this.pageContext=(0,e.Immutable)(o)}render(){var o;const{pageStatus:i,pages:n,headerVisible:s,footerVisible:a,header:l,showClassification:r}=this.props,d=md(i);if(!d||!(null==n?void 0:n[d]))return null;this.updatePageContext();let u=null;return r&&(u=null===(o=this.props.classification)||void 0===o?void 0:o.asMutable({deep:!0})),(0,t.jsxs)("div",{className:"page-renderer d-flex flex-column align-items-center w-100",ref:t=>{this.pageRef=t},css:this.getPageStyle(),"data-testid":"pageRenderer",onClick:this.clearSelection,children:[this.renderDialog(),(0,t.jsx)(ou,{headerJson:l,showClassification:r,classification:u,children:s&&this.renderHeader()}),Object.keys(i).map(t=>this.renderPageBody(t)),a&&this.renderFooter(),r&&(0,t.jsx)(tu,{showClassification:r,position:"bottom",classification:u,onReady:this.onClassificationBannerReady}),(0,t.jsx)(e.Keyboard,{bindings:this.keyBindings})]})}renderHeader(){if(!this.props.header)return null;const{header:e,browserSizeMode:o,mainSizeMode:i,activePagePart:n,showClassification:s}=this.props;return(0,t.jsx)(fd,{header:e,activePagePart:n,browserSizeMode:o,mainSizeMode:i,pageContext:this.pageContext,showClassification:s,onResizeStart:this.onResizeStart,onHeightChange:this.updateHeaderHeight,onResizeEnd:this.onResizeEnd})}renderFooter(){if(!this.props.footer)return null;const{footer:e,browserSizeMode:o,mainSizeMode:i,activePagePart:n}=this.props;return(0,t.jsx)(Id,{footer:e,activePagePart:n,browserSizeMode:o,mainSizeMode:i,pageContext:this.pageContext,onResizeStart:this.onResizeStart,onHeightChange:this.updateFooterHeight,onResizeEnd:this.onResizeEnd})}renderPageBody(o){const{pages:i,pageStatus:n,browserSizeMode:s,activePagePart:a}=this.props,l=i[o];if(!l||l.type!==e.PageType.Normal)return;const r=l.header?this.state.headerHeight:0,d=l.footer?this.state.footerHeight:0;return(0,t.jsx)(Pd,{pageJson:l,renderedPageId:o,activePagePart:a,browserSizeMode:s,pageContext:this.pageContext,visible:!!n[l.id],isResizing:this.state.isResizing,headerFooterHeight:r+d},l.id)}isDialogViewOnly(t){const{browserSizeMode:o}=this.props;return!!(o!==e.BrowserSizeMode.Large&&!t.layout[o])}renderDialog(){const{dialogs:o,openedDialogIds:i=[],currentDialogId:n,urlDialogJson:s,splashDialogJson:l,isSplashClosed:r,isPageDlgClosed:d,pageDialogJson:u,pageDialogId:c}=this.props,p=!r&&l,h=!d&&u,g=s?(null==l?void 0:l.id)===s.id||(null==u?void 0:u.id)===s.id?null:s:null;return(0,t.jsxs)(e.React.Fragment,{children:[i.map(i=>{const l=o[i];return!h&&(l.mode===e.DialogMode.Fixed||l.id===(null==s?void 0:s.id))&&(0,t.jsx)(a.PageContext.Provider,{value:Object.assign(Object.assign({},this.pageContext),{dialogId:i,isDialog:!0,viewOnly:this.isDialogViewOnly(l),rootLayoutId:gd(i)}),children:(0,t.jsx)(e.AppDialog,{dialogJson:l,isCurrentDialog:i===n})},i)}),g&&!i.includes(n)&&(0,t.jsx)(a.PageContext.Provider,{value:Object.assign(Object.assign({},this.pageContext),{dialogId:n,isDialog:!0,viewOnly:this.isDialogViewOnly(n),rootLayoutId:gd(n)}),children:(0,t.jsx)(e.AppDialog,{dialogJson:s,isCurrentDialog:!0})}),h&&(0,t.jsx)(a.PageContext.Provider,{value:Object.assign(Object.assign({},this.pageContext),{dialogId:c,isDialog:!0,viewOnly:this.isDialogViewOnly(u),rootLayoutId:gd(u.id)}),children:(0,t.jsx)(e.AppDialog,{dialogJson:u,isOpenByPage:!0})}),p&&(0,t.jsx)(a.PageContext.Provider,{value:Object.assign(Object.assign({},this.pageContext),{dialogId:l.id,isDialog:!0,viewOnly:this.isDialogViewOnly(l),rootLayoutId:gd(l.id)}),children:(0,t.jsx)(e.AppDialog,{dialogJson:l})})]})}}iu.displayName="BuilderPageRenderer";const nu=(0,e.createSelector)([t=>e.utils.findViewportSize(t.appConfig,t.browserSizeMode).height,(t,e)=>md(e.pageStatus),(t,e)=>e.dialogId,t=>t.appRuntimeInfo.currentPageId,t=>t.appRuntimeInfo.appMode,t=>t.appConfig.pages,t=>t.appConfig.dialogs,t=>t.appConfig.header,t=>t.appConfig.footer,t=>t.appConfig.mainSizeMode,t=>t.browserSizeMode,t=>{var o;return null!==(o=t.appRuntimeInfo.activePagePart)&&void 0!==o?o:e.PagePart.Body},t=>t.appRuntimeInfo.clipboard,t=>t.appRuntimeInfo.currentDialogId,t=>{var e;return null===(e=t.appRuntimeInfo)||void 0===e?void 0:e.dialogInfos},t=>t.appConfig.pages[t.appRuntimeInfo.currentPageId].autoOpenDialogId,t=>{var e;return null===(e=t.appRuntimeInfo)||void 0===e?void 0:e.openedDialogIds},t=>e.portalUtils.shouldShowClassificationBanner(t),t=>t.appInfo.classification],(t,e,o,i,n,s,a,l,r,d,u,c,p,h,g,m,y,f,v)=>{var I,x;if(!e||!s[e])return{};const b=a[Object.keys(a).find(t=>a[t].isSplash)];return{pages:s,dialogs:a,header:l,footer:r,headerVisible:!!s[e].header,footerVisible:!!s[e].footer,mainSizeMode:d,browserSizeMode:u,minHeight:t,activePagePart:c,clipboardItem:p,openedDialogIds:y,currentDialogId:h,currentAppMode:n,splashDialogJson:b,isSplashClosed:null===(I=null==g?void 0:g[null==b?void 0:b.id])||void 0===I?void 0:I.isClosed,pageDialogId:m,pageDialogJson:a[m],isPageDlgClosed:null===(x=null==g?void 0:g[i+"-"+m])||void 0===x?void 0:x.isClosed,urlDialogJson:a[o],showClassification:f,classification:v}}),su=(0,e.injectIntl)(e.ReactRedux.connect(nu)((0,c.withTheme)(iu)));var au=h(4146),lu=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};function ru(t,o){var i,n,s,l;const r=o.layoutId,d=t.appRuntimeInfo.selection,u=o.layoutItem;let c=!1,p=!1,h=!1,g=!1;if(u&&(c=Boolean(d&&r===d.layoutId&&u.id===d.layoutItemId),u.type===e.LayoutItemType.Widget)){const e=t.appConfig.widgets[u.widgetId],o=null===(n=null===(i=null==e?void 0:e.manifest)||void 0===i?void 0:i.properties)||void 0===n?void 0:n.supportInlineEditing;if(h=null===(l=null===(s=null==e?void 0:e.manifest)||void 0===s?void 0:s.properties)||void 0===l?void 0:l.supportRepeat,o){const e=t.widgetsRuntimeInfo[u.widgetId];p=e&&e.isInlineEditing}g=a.utils.isWidgetHasEmbeddedLayout(u.widgetId,t.appConfig)}return{selected:c,supportRepeat:h,isInlineEditing:p,isLayoutWidget:g}}const du=()=>null;function uu(o){return o=>{class i extends e.React.PureComponent{constructor(t){super(t),this.ref=e.React.createRef()}componentDidMount(){const{layoutId:t,layoutItemId:e,layoutItem:o,onResizeStart:i,onResizing:n,onResizeEnd:s,onDragStart:a,onDragging:l,onDragEnd:r,useDragHandler:d}=this.props;this.ref.current&&(this.interactable=(0,Gt.interact)(this.ref.current).origin("parent"),this.interactable=Ht(this.interactable,{layoutId:t,layoutItemId:e,useDragHandler:d,onDragging:l,onDragStart:a,onDragEnd:r,itemType:o.type,rootLayoutId:()=>this.rootLayoutId,restrict:()=>this.props.restrict}),this.interactable=Yt(this.interactable,{layoutItemId:e,onResizing:n,onResizeStart:i,onResizeEnd:s}))}componentWillUnMount(){this.interactable&&(this.interactable.unset(),this.interactable=null)}getStyle(t){return e.css`
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
        `}render(){return(0,t.jsx)(a.PageContext.Consumer,{children:i=>{this.rootLayoutId=i.rootLayoutId;const n=this.props,{gridSize:s,draggable:a,onResizeStart:l,onResizing:r,onResizeEnd:d,style:u,className:c,useDragHandler:p,children:h}=n,g=lu(n,["gridSize","draggable","onResizeStart","onResizing","onResizeEnd","style","className","useDragHandler","children"]),{isInlineEditing:m}=this.props,y=(0,e.classNames)("exb-rnd",c,{"functional-widget":!this.props.isLayoutWidget}),f="string"==typeof u?JSON.parse(u):Object.assign({},u);return this.props.forceAspectRatio&&(f.height="auto"),(0,t.jsxs)("div",{className:y,ref:this.ref,css:this.getStyle(m),"data-layoutid":this.props.layoutId,"data-layoutitemid":this.props.layoutItemId,"data-repeatable":this.props.supportRepeat,style:f,children:[(0,t.jsx)("div",{className:"rnd-aspect-ratio-wrapper",children:(0,t.jsx)(o,Object.assign({layoutId:this.props.layoutId,className:"w-100",layoutItemId:this.props.layoutItemId},g))}),h]})}})}}i.defaultProps={left:!0,top:!0,right:!0,bottom:!0,restrict:!1,onResizeStart:du,onResizing:du,onResizeEnd:du,onDragStart:du,onDragging:du,onDragEnd:du};const n=au(i,o);return e.ReactRedux.connect(ru)(n)}}})(),g})())}}});