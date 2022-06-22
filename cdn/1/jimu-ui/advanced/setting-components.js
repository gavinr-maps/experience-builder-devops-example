System.register(["jimu-core","jimu-core/react","jimu-for-builder","jimu-for-builder/templates","jimu-layouts/layout-runtime","jimu-theme","jimu-ui","jimu-ui/advanced/data-source-selector","jimu-ui/advanced/expression-builder","jimu-ui/advanced/resource-selector","jimu-ui/advanced/setting-components","jimu-ui/basic/item-selector","jimu-ui/basic/list-tree"],(function(e,t){var s={},i={},o={},a={},n={},r={},l={},c={},p={},d={},u={},m={},g={};return{setters:[function(e){s.CONSTANTS=e.CONSTANTS,s.DataSourceComponent=e.DataSourceComponent,s.DataSourceManager=e.DataSourceManager,s.DataSourceTypes=e.DataSourceTypes,s.DialogMode=e.DialogMode,s.ExpressionPartType=e.ExpressionPartType,s.Immutable=e.Immutable,s.JimuFieldType=e.JimuFieldType,s.LayoutItemType=e.LayoutItemType,s.LayoutType=e.LayoutType,s.LinkType=e.LinkType,s.LoadingType=e.LoadingType,s.MultipleDataSourceComponent=e.MultipleDataSourceComponent,s.OrderRule=e.OrderRule,s.PagePart=e.PagePart,s.PageType=e.PageType,s.React=e.React,s.ReactRedux=e.ReactRedux,s.ReactResizeDetector=e.ReactResizeDetector,s.ServiceManager=e.ServiceManager,s.SessionManager=e.SessionManager,s.SupportedItemTypes=e.SupportedItemTypes,s.UtilityManager=e.UtilityManager,s.WidgetType=e.WidgetType,s.appConfigUtils=e.appConfigUtils,s.cancelablePromise=e.cancelablePromise,s.classNames=e.classNames,s.css=e.css,s.dataSourceUtils=e.dataSourceUtils,s.defaultMessages=e.defaultMessages,s.esri=e.esri,s.getAppStore=e.getAppStore,s.i18n=e.i18n,s.injectIntl=e.injectIntl,s.jsx=e.jsx,s.loadArcGISJSAPIModules=e.loadArcGISJSAPIModules,s.lodash=e.lodash,s.moduleLoader=e.moduleLoader,s.polished=e.polished,s.portalUrlUtils=e.portalUrlUtils,s.requestUtils=e.requestUtils,s.urlUtils=e.urlUtils},function(e){i.useEffect=e.useEffect},function(e){o.builderAppSync=e.builderAppSync,o.getAppConfigAction=e.getAppConfigAction},function(e){a.getFullScreenPageTemplates=e.getFullScreenPageTemplates,a.getScrollingPageTemplates=e.getScrollingPageTemplates},function(e){n.searchUtils=e.searchUtils,n.utils=e.utils},function(e){r.getBuilderThemeVariables=e.getBuilderThemeVariables,r.popperPointer=e.popperPointer,r.registerStyles=e.registerStyles,r.useTheme=e.useTheme,r.withStyles=e.withStyles,r.withTheme=e.withTheme,r.withTheme2=e.withTheme2},function(e){l.AdvancedButtonGroup=e.AdvancedButtonGroup,l.Alert=e.Alert,l.Button=e.Button,l.Card=e.Card,l.CardBody=e.CardBody,l.CardImg=e.CardImg,l.Checkbox=e.Checkbox,l.Collapse=e.Collapse,l.Container=e.Container,l.Dropdown=e.Dropdown,l.DropdownButton=e.DropdownButton,l.DropdownItem=e.DropdownItem,l.DropdownMenu=e.DropdownMenu,l.DropdownToggle=e.DropdownToggle,l.FOCUSABLE_CONTAINER_CLASS=e.FOCUSABLE_CONTAINER_CLASS,l.FormGroup=e.FormGroup,l.Icon=e.Icon,l.Input=e.Input,l.Label=e.Label,l.Link=e.Link,l.Loading=e.Loading,l.LoadingType=e.LoadingType,l.Modal=e.Modal,l.ModalBody=e.ModalBody,l.ModalFooter=e.ModalFooter,l.ModalHeader=e.ModalHeader,l.NumericInput=e.NumericInput,l.PanelHeader=e.PanelHeader,l.Popper=e.Popper,l.Radio=e.Radio,l.Row=e.Row,l.SVG=e.SVG,l.Select=e.Select,l.Switch=e.Switch,l.Tab=e.Tab,l.Tabs=e.Tabs,l.TextArea=e.TextArea,l.TextInput=e.TextInput,l.Toast=e.Toast,l.ToastType=e.ToastType,l.Tooltip=e.Tooltip,l.defaultMessages=e.defaultMessages,l.hooks=e.hooks,l.isOutBoundary=e.isOutBoundary,l.utils=e.utils},function(e){c.AllDataSourceTypes=e.AllDataSourceTypes,c.DataSourceSelector=e.DataSourceSelector,c.DataSourceTree=e.DataSourceTree,c.FieldSelector=e.FieldSelector,c.dataComponentsUtils=e.dataComponentsUtils},function(e){p.ExpressionInput=e.ExpressionInput,p.ExpressionInputType=e.ExpressionInputType},function(e){d.IconPicker=e.IconPicker},function(e){u.SettingRow=e.SettingRow,u.SettingSection=e.SettingSection,u.SidePopper=e.SidePopper},function(e){m.ItemSelector=e.ItemSelector,m.ItemSelectorMode=e.ItemSelectorMode},function(e){g.List=e.List,g.TreeItemActionType=e.TreeItemActionType}],execute:function(){e((()=>{var e={67906:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 2a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM0 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6Zm6.66.062c1.1-.202 2.043.09 2.829.876a3.22 3.22 0 0 1 .688 3.532l1.587 1.588a.805.805 0 0 1 0 1.137l-.569.57a.805.805 0 0 1-1.137 0L8.47 12.176a3.22 3.22 0 0 1-3.532-.688c-.786-.786-1.078-1.728-.876-2.829a.402.402 0 0 1 .68-.212l1.618 1.619a.402.402 0 0 0 .569 0l1.138-1.138a.402.402 0 0 0 0-.569L6.448 6.742a.402.402 0 0 1 .212-.68Z" fill="#000"></path></svg>'},11167:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2V4a2 2 0 0 1 2-2h8a2 2 0 0 0-2-2H2Z" fill="#000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6 4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6Zm5.489 2.938c-.786-.786-1.728-1.078-2.829-.876a.402.402 0 0 0-.212.68l1.619 1.618a.402.402 0 0 1 0 .569l-1.138 1.138a.402.402 0 0 1-.569 0L6.742 8.448a.402.402 0 0 0-.68.212c-.202 1.1.09 2.043.876 2.829a3.22 3.22 0 0 0 3.532.688l1.588 1.587a.805.805 0 0 0 1.137 0l.57-.569a.805.805 0 0 0 0-1.137l-1.588-1.588a3.22 3.22 0 0 0-.688-3.532Z" fill="#000"></path></svg>'},13372:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4.751a2 2 0 0 0-.495-1.317L12.098.683A2 2 0 0 0 10.592 0H3Zm3.325 3.077c1.376-.252 2.554.114 3.536 1.095a4.024 4.024 0 0 1 .86 4.416l1.985 1.984c.392.393.392 1.03 0 1.422l-.712.712a1.006 1.006 0 0 1-1.422 0L8.588 10.72a4.024 4.024 0 0 1-4.416-.86c-.981-.982-1.347-2.16-1.095-3.536a.503.503 0 0 1 .85-.265L5.95 8.083a.503.503 0 0 0 .711 0l1.422-1.422a.503.503 0 0 0 0-.71L6.06 3.926a.503.503 0 0 1 .265-.85Z" fill="#000"></path></svg>'},18371:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m6.036 12.157 8.01-8.01a.5.5 0 1 1 .707.707l-8.01 8.01a1 1 0 0 1-1.415 0L1.146 8.682a.5.5 0 1 1 .708-.707l4.182 4.182Z" fill="#000"></path></svg>'},24786:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m1.373 8 2.07-2.071.83.828L2.2 8.828a3.515 3.515 0 0 0 4.97 4.971l2.072-2.071.828.828L8 14.627A4.686 4.686 0 1 1 1.373 8ZM13.799 7.172l-2.071 2.07.828.83L14.627 8A4.686 4.686 0 1 0 8 1.373l-2.071 2.07.828.83L8.828 2.2a3.515 3.515 0 0 1 4.971 4.97Z" fill="#000"></path><path d="M5.515 9.657a.586.586 0 0 0 .828.828l4.142-4.142a.586.586 0 0 0-.828-.828L5.515 9.657Z" fill="#000"></path></svg>'},59788:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.146 4.653a.485.485 0 0 1 .708 0L8 10.24l5.146-5.587a.485.485 0 0 1 .708 0 .538.538 0 0 1 0 .738l-5.5 5.956a.485.485 0 0 1-.708 0l-5.5-5.956a.538.538 0 0 1 0-.738Z" fill="#000"></path></svg>'},60843:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.646 10.354a.5.5 0 0 0 .708-.708L2.707 8h10.586l-1.647 1.646a.5.5 0 0 0 .708.708l2.5-2.5a.5.5 0 0 0 0-.708l-2.5-2.5a.5.5 0 0 0-.708.708L13.293 7H2.707l1.647-1.646a.5.5 0 1 0-.708-.708l-2.5 2.5a.5.5 0 0 0 0 .708l2.5 2.5Z" fill="#000"></path></svg>'},3273:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.653 13.854a.485.485 0 0 1 0-.708L10.24 8 4.653 2.854a.485.485 0 0 1 0-.708.538.538 0 0 1 .738 0l5.956 5.5a.485.485 0 0 1 0 .708l-5.956 5.5a.538.538 0 0 1-.738 0Z" fill="#000"></path></svg>'},96009:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.854 11.347a.486.486 0 0 1-.708 0L8 5.76l-5.146 5.587a.485.485 0 0 1-.708 0 .538.538 0 0 1 0-.738l5.5-5.956a.485.485 0 0 1 .708 0l5.5 5.956a.538.538 0 0 1 0 .738Z" fill="#000"></path></svg>'},18656:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.354 12.354a.5.5 0 0 0-.708-.708L8 13.293V2.707l1.646 1.647a.5.5 0 0 0 .708-.708l-2.5-2.5a.5.5 0 0 0-.708 0l-2.5 2.5a.5.5 0 1 0 .708.708L7 2.707v10.586l-1.646-1.647a.5.5 0 0 0-.708.708l2.5 2.5a.5.5 0 0 0 .708 0l2.5-2.5Z" fill="#000"></path></svg>'},55339:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m8.745 8 6.1 6.1a.527.527 0 1 1-.745.746L8 8.746l-6.1 6.1a.527.527 0 1 1-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 0 1 .746-.746l6.1 6.1 6.1-6.1a.527.527 0 0 1 .746.746L8.746 8Z" fill="#000"></path></svg>'},59216:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.226 1.312c-.403-.404-1.044-.417-1.431-.03L2.49 8.587l-.48 2.674a.637.637 0 0 0 .73.73l2.673-.48 7.305-7.306c.387-.387.374-1.028-.03-1.431l-1.462-1.462Zm-8.113 9.575.32-1.781 4.991-4.992 1.462 1.462-4.992 4.991-1.781.32Zm7.473-6.012 1.402-1.4-1.462-1.463-1.401 1.402 1.461 1.461Z" fill="#000"></path><path d="M1.5 14a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13Z" fill="#000"></path></svg>'},59455:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 8A6 6 0 1 1 2 8a6 6 0 0 1 12 0Zm1 0A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8Z" fill="#000"></path></svg>'},80272:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 8A6 6 0 1 1 2 8a6 6 0 0 1 12 0Zm1 0A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM7.5 4.5a.5.5 0 0 1 1 0v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3Z" fill="#000"></path></svg>'},34750:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 0a.5.5 0 0 0-.5.5V7H.5a.5.5 0 0 0 0 1H7v6.5a.5.5 0 0 0 1 0V8h6.5a.5.5 0 0 0 0-1H8V.5a.5.5 0 0 0-.5-.5Z" fill="#000"></path></svg>'},30224:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-1.27 4.936a6.5 6.5 0 1 1 .707-.707l4.136 4.137a.5.5 0 1 1-.707.707l-4.137-4.137Z" fill="#000"></path></svg>'},88866:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6.5 7.5A.5.5 0 0 1 7 7h1.5v4.5h1a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1h1V8H7a.5.5 0 0 1-.5-.5Z" fill="#000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16Zm0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14Z" fill="#000"></path></svg>'},79964:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 2.125 14.334 14H1.667L8 2.125Zm-.882-.47a1 1 0 0 1 1.765 0l6.333 11.874A1 1 0 0 1 14.334 15H1.667a1 1 0 0 1-.882-1.47L7.118 1.653ZM8 4.874a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0L8.9 5.87a.905.905 0 0 0-.9-.995Zm1 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="#000"></path></svg>'},65085:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M4.103 7.873 16 19.25 27.897 7.873c.939-.898 2.46-.898 3.399 0s.939 2.353 0 3.251L17.7 24.127a2.481 2.481 0 0 1-3.399 0L.705 11.124c-.939-.898-.939-2.353 0-3.251s2.46-.898 3.399 0z"></path></svg>'},40325:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M19.637 15.866 30.951 27.18a2.667 2.667 0 0 1-3.771 3.771L15.866 19.637 4.552 30.951A2.667 2.667 0 0 1 .781 27.18l11.314-11.314L.781 4.552A2.667 2.667 0 0 1 4.552.781l11.314 11.314L27.18.781a2.667 2.667 0 0 1 3.771 3.771L19.637 15.866z"></path></svg>'},17720:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 32"><path d="M2.333 4a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm0 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm0 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0z"></path></svg>'},78115:e=>{e.exports='<svg viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.5 13a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1h-4ZM0 8.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5ZM.5 5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1H.5ZM.5 1a.5.5 0 1 1 0-1h15a.5.5 0 0 1 0 1H.5Z" fill="#000"></path></svg>'},70502:e=>{e.exports='<svg viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.5 0a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4ZM0 4.5A.5.5 0 0 1 .5 4h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5ZM.5 8a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1H.5ZM.5 12a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1H.5Z" fill="#000"></path></svg>'},48891:e=>{"use strict";e.exports=s},51315:e=>{"use strict";e.exports=i},23137:e=>{"use strict";e.exports=o},96262:e=>{"use strict";e.exports=a},74758:e=>{"use strict";e.exports=n},34796:e=>{"use strict";e.exports=r},30726:e=>{"use strict";e.exports=l},338:e=>{"use strict";e.exports=c},39342:e=>{"use strict";e.exports=p},20663:e=>{"use strict";e.exports=d},77756:e=>{"use strict";e.exports=u},20878:e=>{"use strict";e.exports=m},59587:e=>{"use strict";e.exports=g}},t={};function h(s){var i=t[s];if(void 0!==i)return i.exports;var o=t[s]={exports:{}};return e[s](o,o.exports,h),o.exports}h.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return h.d(t,{a:t}),t},h.d=(e,t)=>{for(var s in t)h.o(t,s)&&!h.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},h.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),h.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var v={};return(()=>{"use strict";h.r(v),h.d(v,{AddUtilityTabs:()=>ai,ByFieldSeriesX:()=>Vt,ByFieldSeriesY:()=>Ht,DefaultGeocodeLabel:()=>es,DefaultGeocodeURL:()=>Yt,DirectionSelector:()=>At,JimuLayerViewSelector:()=>J,JimuMapViewSelector:()=>W,LinkSelector:()=>Te,LinkSelectorContent:()=>ye,LinkSelectorSidePopper:()=>je,LinkSetting:()=>be,LinkSettingPopup:()=>Ce,MAX_RECENT_SEARCHES:()=>Wt,MAX_SUGGESTION:()=>zt,MapWidgetSelector:()=>z,MaxCategories:()=>Jt,MaxPieces:()=>Zt,MaxSeries:()=>qt,NavQuickStyleItem:()=>Bt,OpenTypes:()=>X,OutStatisticFieldNameSplit:()=>Kt,OutputDsAddress:()=>Xt,OutputDsObjectField:()=>Qt,PageTemplatePopper:()=>ft,ProxySetting:()=>Ke,ProxySettingPopup:()=>st,QuickStylePopper:()=>Ft,RadioGroup:()=>Q,SearchDataSetting:()=>Ls,SearchDataType:()=>Gt,SearchGeneralSetting:()=>Es,SearchServiceType:()=>_t,SearchSuggestionSetting:()=>Ds,SettingCollapse:()=>D,SettingLayout:()=>t,SettingRow:()=>O,SettingSection:()=>w,SidePopper:()=>we,SizeMode:()=>Dt,SizeModeSelector:()=>Ut,SortSetting:()=>Pt,StylePicker:()=>q,TemplateSelector:()=>bt,UnControlledSettingCollapse:()=>E,UtilitySelector:()=>yi,WidgetListPopper:()=>dt,WidgetSelector:()=>$,_JimuMapViewSelector:()=>G,_LinkSelector:()=>Ne,_LinkSelectorContent:()=>fe,_LinkSelectorSidePopper:()=>ke,_MapWidgetSelector:()=>F,_SettingCollapse:()=>A,_SidePopper:()=>Se,changeCurrentDialog:()=>wi,changeCurrentPage:()=>Si,handelDialogInfos:()=>bi,proxySettingUtils:()=>s});var e={};h.r(e),h.d(e,{JimuLayerViewSelector:()=>f,LinkSelectorContent:()=>p,ProxySetting:()=>d,ProxySettingPopup:()=>u,RadioGroup:()=>m,SettingCollapse:()=>c,SettingRow:()=>l,SettingSection:()=>r,SidePopper:()=>g,SortSetting:()=>a,StylePicker:()=>n,WidgetSelector:()=>o});var t={};h.r(t),h.d(t,{SettingCollapse:()=>D,SettingRow:()=>O,SettingSection:()=>w,UnControlledSettingCollapse:()=>E,_SettingCollapse:()=>A});var s={};h.r(s),h.d(s,{deleteProxies:()=>$e,getCreateProxyUrl:()=>We,getDeleteProxyUrl:()=>Ge,getNeedProxyDataSources:()=>Le,getProxyJsonFromSourceUrl:()=>De,getProxyRootUrl:()=>ze,isRegisteredApp:()=>Ue,isSameProxy:()=>Ee,needToConfigProxy:()=>Be,traverseToGetNeedProxyDataSources:()=>Ae});var i=h(48891);const o=e=>{const t=e.theme;return i.css`
    .component-choose-widget-popup{
      .widget-card-active-btn{
        outline: none;
      }
    }
    div.component-choose-widget-popup-modal{
      width: 850px;
      max-width: 850px;
      height: 600px;
      background: ${t.colors.white};
      border-radius: 4px;
      position: absolute;
      margin: auto;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      .component-choose-widget-clear-border{
        border: 0;
        padding: 0;
      }
      .modal-content{
        border: 0;
        padding: 20px 10px 20px 40px;
        position: static;
      }
      .component-choose-widget-modal-header{
        .choose-widget-popup-close{
          width: 50px;
          height: 50px;
          display: inline-block;
          right: 28px;
          position: absolute;
          top: 10px;
          &:hover{
            cursor: pointer;
          }
        }
        .choose-widget-popup-close:after{
          content: '';
          display: inline-block;
          width: 16px;
          height: 16px;
          background-image: url(${"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAsElEQVQ4jaWSLQ7EIBhEv2LxnAzP1cBzAU6DhKCpZneaQHYpP2k6omreCzA9yjf0IgyfGCMZY+g8zy2ADrpgmsA5R977raTC6IJpAiklCSEopTSVVBgddME0AeeclFJTSQ+jCwY5fh9xVERm8E0wkiAzeCjoJcgMbm/wJjdBf4XdOmwF49irdf4Es6l2E7MVXLOSXAJr7XKqkQTMFcwYQiha65JzLruggy4YZPgfPMkHXzQME+F7oHYAAAAASUVORK5CYII="});
          position: relative;
          left: 18px;
          top: 12px;
        }
      }
      .component-choose-widget-modal-body{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        justify-content: flex-start;
        margin: 40px 0 10px 0;
        .widget-card-item{
          width: 70px;
          height: 120px;
          border: 0;
          margin: 0 30px 0 0;
          &:hover{
            cursor: pointer;
          }
          .widget-card-image{
            width: 70px;
            height: 70px;
            border: 1px solid #ccc;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            >div{
              width: 30px;
              height: 30px;
              position: relative;
              &:after{
                display: none;
              }
            }
          }
          .widget-card-content{
            font-size: 12px;
            color: #000;
            letter-spacing: 0.33px;
            padding: 2px;
            text-align: center;
            line-height: 14px;
          }
        }
        .widget-card-selected{
          .widget-card-image{
            border: 2px solid #0C5CB6;
            >div:after{
              content: '';
              display: block;
              width: 16px;
              height: 16px;
              position: absolute;
              top: -20px;
              right: -20px;
              background-image: url(${"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA20lEQVQ4jWPkidn2n4ECwESJ5iFgABsLI8PBRiuGS732DKJ8bKQbwMHKzKAqyc0gK8zBIMDNilUNI6FYkBBgBxrExPDg9Xes8iy4NIZYSDJ4GYkx/Pj1j6F25Q2cFuD0wo2nXxi42ZkZYu1lGMItpUg34Mrjzwx//0HYT9//IN0AFiZGBjstIaAh/xkOXntLugHGyvwM/FysDBcefGT48PUP6QaI8ELinZ2FicFGQ4iBnRW7UmY2vegGbBIPXn1j+P//P8OXn38ZPn77zXDxwSesBhBMB4QAxXkBAMaDOywJrob4AAAAAElFTkSuQmCC"});
            }
          }
        }
      }
      .component-choose-widget-modal-footer{
        position: absolute;
        bottom: 20px;
        right: 40px;
        >button{
          font-size: 14px;
          letter-spacing: 0.39px;
          text-align: center;
          vertical-align: middle;
        }
        button:first-of-type {
          background-color: #0075D0;
          border: 1px solid  #0075D0;
          border-radius: 3px;
          color: #ffffff;
        }
        button:last-of-type{
          background-color: #ffffff;
          border: 1px solid #CCCCCC;
          border-radius: 3px;
          color: #000000;
        }
      }
    }
  `},a=e=>{const t=e.theme.colors;return i.css`
    width:100%;
    &.single-row-item {
        .select-con {
            padding: ${i.polished.rem(10)} ${i.polished.rem(0)};
            .option-name-con {
                margin-bottom: 0;
                .close-con>span {
                    margin-left: ${i.polished.rem(10)};
                }
            }
        }
    }
    .padding-0 {
        padding: 0;
    }
    .add-option-btn {
        & {
            color:${t.palette.primary[600]};
            margin-top:10px;
            cursor: pointer;
            font-size:13px;
            overflow: hidden;
            padding: 0;
        }
        .add-option-icon{
            margin-right: 4px;
        }
    }
    .no-sort-remind {
        margin: 70px auto 0;
        color: ${t.palette.light[800]};
        font-size: 13px;
        text-align: center;
    }
    .select-con {
        & {
            margin-top:17px;
            box-sizing:border-box;
            padding:${i.polished.rem(10)};
            padding-top:${i.polished.rem(8)};
            margin-bottom:10px;
            background:${t.palette.light[500]};
            box-shadow: 0 0 0 2px ${i.polished.rgba(t.white,.3)};
        }
        .option-name-con {
            & {
              display: flex;
              align-items: center;
              margin-bottom:${i.polished.rem(7)};
              width: 100%;
            }
            .option-name {
              font-size: 13px;
              line-height: 13px;
              color: ${t.palette.dark[800]};
              max-width: 87%;
              height: ${i.polished.rem(25)};
              line-height: ${i.polished.rem(25)};
              cursor: pointer;
            }
            .option-name input {
                display:inline-block;
                width: auto;
                max-width: 88%;
                height: 100%;
            }
            .option-name-icon-con {
                margin-left: ${i.polished.rem(5)};
                svg {
                    margin-top:  ${i.polished.rem(5)};
                }
            }
            .option-name-icon {
                color: ${t.palette.dark[400]};
                cursor: pointer;
            }
            .option-name span {
                display: inline-block;
                text-overflow: ellipsis;
                overflow:hidden;
            }
            .close-con {
                flex-grow: 1;
                svg {
                    margin: 0;
                }
            }
            .close-con>span {
                margin-right: ${i.polished.rem(10)};
                color: ${t.black};
                cursor: pointer;
            }
        }

        .select-down-con {
            & {
                display: flex;
                align-items: center;
                height: ${i.polished.rem(34)};
            }
            .sort-arrow-down-icon {
                margin-right: 0;
            }
            .select-input {
                flex-grow:1;
                color: ${t.dark};
            }
            .sort-button {
                margin-left: 5px;
                width:30px;
                cursor: pointer;
                border:none;
            }
            .sort-field-selector {
                & {
                    background:${t.palette.secondary[200]};
                    border-radius: 2px;
                    width: ${i.polished.rem(140)};
                    overflow: hidden;
                }


            }
        }
    }


  `},n=e=>{const t=e.theme;return i.css`
    .widget-setting--stylepicker {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 10px;
    }

    .widget-setting--stylepicker-item {
      height: 93px;
      border: 1px solid ${t.colors.palette.light[500]};
      background-color: ${t.colors.white};
      background-repeat: no-repeat;
      background-position: center;
      &:hover {
        border-color: ${t.colors.primary};
      }
      &.active {
        border: 2px solid ${t.colors.primary};
      }
      &.full-width {
        grid-column-start: 1;
        grid-column-end: 3;
      }
    }
  `},r=e=>{const t=e.theme;return i.css`
    padding: ${t.sizes[3]};
    border-bottom: 1px solid ${t.colors.palette.light[800]};

    &:last-child {
      border-bottom: 0 none;
    }

    &:nth-of-type(1):nth-last-of-type(1) {
      border-bottom: 0 none;
    }

    .jimu-widget-setting--section-header {
      > h6 {
        color: ${t.colors.palette.dark[600]};
        font-weight: ${t.typography.weights.bold};
        margin-bottom: 0;
      }
      + * {
        margin-top: ${t.sizes[3]};
      }
    }

    .jimu-widget-setting--section-header {
      &.row {
        margin-left: 0;
        margin-right: 0;
      }
    }
  `},l=e=>{const t=e.theme,s=e.flow,o=e.action;return i.css`
    &.jimu-widget-setting--row {
      margin-bottom: 0;
      margin-left: 0;
      margin-right: 0;
      &:first-child  /* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */{
        margin-top: 0;
      }
      + .jimu-widget-setting--row {
        margin-top: ${t.sizes[3]};
      }
    }
    &,
    .jimu-widget-setting--row-header {
      > .jimu-widget-setting--row-label {
        font-size: 0.8125rem;
        font-weight: 500;
        color: ${t.colors.palette.dark[400]};
      }
    }
    > .jimu-widget-setting--row-label {
      display: inline-block;
      margin-bottom: ${"wrap"===s?o?"0":t.sizes[2]:"0"};
      margin-right: 20px;
    }
    > input {
      &[type='number'] {
        width: 50px;
        flex-shrink: 0;
      }
    }
    input {
      &[type='number'] {
        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      }
    }
    .jimu-widget-setting--row-header {
      display: flex;
      width: 100%;
      align-items: center;
      margin-bottom: 0.75rem;
      > .btn {
        width: 100%;
        padding-left: 0;
        padding-right: 0;
      }
      .jimu-widget-setting--row-label {
        text-align: left;
        flex: 1;
        margin-bottom: 0;
      }
    }
    &.form-inline {
      flex-wrap: nowrap;
      .jimu-widget-setting--row-label {
        max-width: 80%;
        + * {
          flex-shrink: 0;
        }
      }
    }
  `},c=e=>{var t,s,o,a,n,r,l,c;const p=null==e?void 0:e.isOpen,d=null!==(t=null==e?void 0:e.type)&&void 0!==t?t:"default",u=e.theme,m=null===(a=null===(o=null===(s=null==u?void 0:u.colors)||void 0===s?void 0:s.palette)||void 0===o?void 0:o.light)||void 0===a?void 0:a[500],g=null===(l=null===(r=null===(n=null==u?void 0:u.colors)||void 0===n?void 0:n.palette)||void 0===r?void 0:r.light)||void 0===l?void 0:l[800],h=null===(c=null==u?void 0:u.colors)||void 0===c?void 0:c.primary;return"primary"!==d?i.css`
    .dividing-line {
      background-color: ${g};
    }
    `:i.css`
    .handle {
      border-top: 2px solid ${p?h:m};
      background-color: ${m};
      .title {
        padding-left: 8px;
        padding-right: 8px;
      }
    }
    .dividing-line {
      background-color: ${g};
    }
    `};function p(e){const t=e.theme,s=t&&t.colors&&t.colors.palette&&t.colors.palette.light[500]||"#ccc",o=t&&t.colors&&t.colors.primary||"blue",a=i.polished.rgba(s,.5);return window.jimuConfig.isInBuilder?i.css`
    .widget-builder-link-selector {
      .collapse-btn{
        margin-right: ${i.polished.rem(-16)};
      }
      .option-name{
        font-size: ${i.polished.rem(13)};
        color: ${t.colors.palette.dark[400]};
        font-weight:
      }
      .link-selector-list {
        .view-border{
          border-width: 1px;
          border-style: solid;
        }
        .link-selector-list-item {
          height: ${i.polished.rem(30)};
          cursor: pointer;

          &:hover {
            background-color: ${a};
          }
        }

        .link-selector-list-select {
          background-color: ${a};
        }
      }

      select {
        padding-top: ${i.polished.rem(2)} !important;
      }

      .itemselected {
        background-color: ${o} !important;
      }

      .btn-primary {
        background-color: #00A6B6 !important;
        border-color: #00A6B6 !important;
        color: #ffffff !important;
      }

      .form-check-input {
        span {
          background: #00A6B6 !important;
        }
      }

      .form-check-input:hover {
        border-color: gray;
      }

      input[type='radio'].form-check-input {
        -webkit-appearance: none;
        -moz-appearance: none;
        background: transparent;
        border: 1px solid #000;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        transition: all 0.2s ease;
        &:before {
        content: '';
        display: block;
        position: absolute;
        width: 0;
        height: 0;
        border-radius: 50%;
        background: #00A6B6 !important;
        margin: 8px;
        transition: all 0.2s ease-out;
        }
        &:hover {
        border-color: #00A6B6 !important;
        }
        &:checked {
        &:before {
            width: 8px;
            height: 8px;
            margin: 3px;
        }
        }
      }
      .link-setting-cursor-pointer{
        cursor: pointer;
      }
      .open-type-label{
        max-width: calc(100% - ${i.polished.rem(25)});
        display: inline-block;
      }
    }
    .url-error-container{
      *{
        color: ${t.colors.danger};
      }
      div{
        width: calc(100% - 20px);
        margin-left: 4px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  `:i.css`
    .widget-builder-link-selector {
      .collapse-btn{
        position: absolute;
        right: ${i.polished.rem(-4)};
      }
      .option-name{
        font-size: ${i.polished.rem(13)};
        color: ${t.colors.palette.dark[400]};
        font-weight: 500;
      }
      .mb-12{
        margin-bottom: ${i.polished.rem(12)};
      }
      .item-common{
        background: ${t.colors.white};
      }
      .view-border{
        border: 1px solid ${t.colors.palette.light[400]};
      }
      .link-selector-list {

        .link-selector-list-item {
          height: ${i.polished.rem(30)};
          cursor: pointer;

          &:hover {
            background-color: ${a};
          }
        }

        .link-selector-list-select {
          background-color: ${a};
        }
      }

      select {
        padding-top: ${i.polished.rem(2)} !important;
      }

      .itemselected {
        background-color: ${o} !important;
      }
      .link-setting-cursor-pointer{
        cursor: pointer;
      }
      .open-type-label{
        max-width: calc(100% - ${i.polished.rem(25)});
        display: inline-block;
      }
      .url-error-container{
        *{
          color: ${t.colors.danger};
        }
        div{
          width: calc(100% - 20px);
          margin-left: 4px;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  `}function d(e){const t=e.theme;return i.css`
    color: ${t.colors.palette.dark[600]};
    .font-size-13{
      font-size: ${i.polished.rem(13)} !important;
    }
    .subscriber-warning{
      font-size: ${i.polished.rem(13)};
    }
    .secondary-title{
      font-size: ${i.polished.rem(14)};
    }
    .content-table{
      font-size: ${i.polished.rem(13)};
      color: ${t.colors.palette.dark[800]};
    }
    .content-table-header{
      height: ${i.polished.rem(32)};
      background-color: ${t.colors.palette.light[400]};
      display: block;
      line-height: ${i.polished.rem(30)};
    }
    .content-table-tr{
      height: ${i.polished.rem(39)};
      line-height: ${i.polished.rem(39)};
      border-bottom: 1px solid ${t.colors.palette.light[400]};
    }
    .col-4, .col-2{
      height: 100%;
    }
    .request-limit{
      margin-top: ${i.polished.rem(6)};
    }
    .request-interval{
      display: block;
      margin-top: ${i.polished.rem(-3)};
    }
  `}function u(e){const t=e.theme;return i.css`
    max-width: ${i.polished.rem(960)} !important;
    .header{
      font-size: ${i.polished.rem(16)};
      color: ${t.colors.palette.dark[600]};
    }
    .proxy-setting-container{
      width: ${i.polished.rem(960)};
      height: ${i.polished.rem(640)};
      border: 0;
      color: ${t.colors.palette.dark[600]};
    }
    .px-30{
      padding-right: ${i.polished.rem(30)};
      padding-left: ${i.polished.rem(30)};
    }
  `}const m=e=>{const t=e.theme,s=e.gutter;return i.css`
    margin-bottom: 0;
    label {
      display: inline-flex;
      align-items: center;
      margin-right: ${s||t.sizes[3]};
      .jimu-radio {
        margin-right: ${t.gutters[4]};
      }
    }
  `};function g(e){const t=e.theme;return i.css`
    width: ${i.polished.rem(260)};
    height: calc(100% - 70px);
    padding: 0;
    overflow: hidden;
    border-radius: 0;
    box-shadow: 0 0 0;
    border-left: 1px solid ${t.colors.palette.light[800]};
    border-right: 1px solid ${t.colors.palette.light[800]};
    border-top: 0;
    border-bottom: 0;
    margin: 0 !important;
  `}const f=e=>{const t=e.theme;return i.css`
    .dropdown-menu--inner {
      background-color: ${t.colors.palette.secondary[200]};
      padding: 0;
    }

    .dropdown-toggle-content {
      width: 100%;
    }

    .layerviewselector-input {
      width: 100%;
      height: 30px !important;
      background-color: ${t.colors.palette.secondary[200]};
      &:hover {
        background-color: ${t.colors.palette.secondary[200]};
      }
      flex-direction: unset !important;
    }

    .layerviewselector-input-text {
      max-width: calc(100% - 13px);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .layerviewselector-bg {
      max-height: 270px;
      overflow-y: auto;
      background-color: ${t.colors.palette.secondary[200]};
    }

    .layerviewselector-item-bg {
      cursor: pointer;
    }

    .layerviewselector-item-bg:hover {
      background-color: ${t.colors.primary};
    }

    .layerviewselector-ds-item {
      cursor: pointer;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
    }

    .layerviewselector-ds-item:hover {
      background-color: ${t.colors.primary};
    }

    .layerviewselector-ds-item-selected {
      background-color: ${t.colors.primary};
    }
  `};var y=h(23137),b=h(34796),x=h(30726);class S extends i.React.PureComponent{render(){const e=this.props,{className:t,style:s,title:o,role:a,children:n}=e,r=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["className","style","title","role","children"]);return i.React.createElement(x.Container,{className:(0,i.classNames)(t,"jimu-widget-setting--section"),style:s,role:a,"aria-label":r["aria-label"]},o&&i.React.createElement(x.Row,{className:"jimu-widget-setting--section-header"},i.React.createElement("h6",{className:"w-100 text-truncate setting-text-level-1"},this.props.title)),n)}}const w=(0,b.withStyles)(S,"SettingSection");var k=h(3273),j=h.n(k);const C=e=>{const{className:t}=e,s=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["className"]),o=(0,i.classNames)("jimu-icon jimu-icon-component",t);return i.React.createElement(x.SVG,Object.assign({className:o,src:j()},s))};const I=e=>i.React.createElement("div",{className:"jimu-widget-setting--row-header mb-3"},e.children);class P extends i.React.PureComponent{constructor(){super(...arguments),this.onActionClick=e=>{"drilldown"===e&&this.props&&this.props.onDrillDown&&this.props.onDrillDown()}}render(){const e=this.props,{action:t,flow:s,truncateLabel:o,label:a,role:n,indented:r,className:l,level:c=3}=e,p=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["action","flow","truncateLabel","label","role","indented","className","level"]),d="string"==typeof a?a:"",u=(0,i.classNames)(l,"jimu-widget-setting--row","form-group","align-items-center",{"form-inline":"wrap"!==s,"pl-4":r}),m=t?"span":"label",g=a&&i.React.createElement(m,{title:d,className:(0,i.classNames)(`jimu-widget-setting--row-label justify-content-start flex-grow-1 text-break setting-text-level-${c}`,{"w-100 mr-0":"wrap"===s,"text-truncate":o})},a);return i.React.createElement(x.Row,{className:u,role:n,"aria-label":p["aria-label"]},"wrap"===s&&t?i.React.createElement(I,null,"drilldown"===t?i.React.createElement(x.Button,{size:"sm",type:"tertiary",onClick:()=>this.onActionClick("drilldown")},g,i.React.createElement(C,{className:"right-icon"})):void 0):g,this.props.children)}}const O=(0,b.withStyles)(P,"SettingRow");var N=h(96009),T=h.n(N),M=h(59788),R=h.n(M),L=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s};const A=e=>{const{type:t="default",className:s,leftIcon:o,label:a,bottomLine:n=!1,isOpen:r,onRequestOpen:l,onRequestClose:c,children:p,rightIcon:d=R(),rightActiveIcon:u=T(),level:m=0}=e,g=L(e,["type","className","leftIcon","label","bottomLine","isOpen","onRequestOpen","onRequestClose","children","rightIcon","rightActiveIcon","level"]),h="string"==typeof a,v=r?u:d;return i.React.createElement("div",{className:(0,i.classNames)("setting-collapse w-100",s)},i.React.createElement("div",{className:"handle w-100 d-flex justify-content-between"},i.React.createElement("div",{className:"title py-1 d-flex align-items-center flex-grow-1",style:{maxWidth:"85%"}},o&&i.React.createElement(x.Icon,{className:"mr-2",icon:o}),!h&&a,h&&i.React.createElement("div",{title:a,className:`text-truncate setting-text-level-${m}`,style:{maxWidth:"80%"}}," ",a)),i.React.createElement(x.Button,{size:"sm",type:"tertiary",icon:!0,onClick:()=>{r?null==c||c():null==l||l()}},i.React.createElement(x.Icon,{icon:v}))),i.React.createElement(x.Collapse,Object.assign({},g,{isOpen:r}),r&&i.React.createElement(i.React.Fragment,null,p,n&&i.React.createElement("div",{className:"dividing-line mt-3",style:{width:"100%",height:"1px"}}))))},D=(0,b.withStyles)(A,"SettingCollapse"),E=e=>{const{defaultIsOpen:t=!1,label:s}=e,o=L(e,["defaultIsOpen","label"]),[a,n]=i.React.useState(t);return i.React.createElement(D,Object.assign({label:s,isOpen:a},o,{onRequestOpen:()=>n(!0),onRequestClose:()=>n(!1)}))};var U=function(e,t,s,i){return new(s||(s=Promise))((function(o,a){function n(e){try{l(i.next(e))}catch(e){a(e)}}function r(e){try{l(i.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(n,r)}l((i=i.apply(e,t||[])).next())}))};class B extends i.React.PureComponent{constructor(e){super(e),this.onSelectWidget=e=>{this.setState({currentWidget:e})},this.getListItemJSX=e=>(0,i.jsx)(x.Card,{className:(0,i.classNames)("widget-card-item",{"widget-card-selected":this.state.currentWidget&&0===this.state.currentWidget.indexOf(e.uri)}),key:e.title,onClick:()=>this.onSelectWidget(e.uri)},(0,i.jsx)("div",{className:"widget-card-image bg-light-300"},(0,i.jsx)("div",null,(0,i.jsx)(x.CardImg,{top:!0,width:"100%",src:e.image.src,alt:e.image.alt}))),(0,i.jsx)(x.CardBody,{className:"widget-card-content"},(0,i.jsx)("span",{className:"text-capitalize",title:e.title},e.title))),this.state={currentWidget:null,listInfo:[]}}componentDidMount(){this.getListInfo().then((e=>{this.setState({listInfo:e.listInfo})}))}getListInfo(){return U(this,void 0,void 0,(function*(){return yield fetch(`${i.urlUtils.getAbsoluteRootUrl()}widgets/widgets-info.json`).then((e=>U(this,void 0,void 0,(function*(){return yield e.json()})))).then((e=>({listInfo:e.map((e=>{const t={title:"",uri:"",image:{src:""}};return t.title=e.label,t.uri=e.path,t.image.src="../"+e.icon,t}))})))}))}render(){return(0,i.jsx)("div",{className:(0,i.classNames)("w-100 h-100",{[this.props.className]:!!this.props.className})},(0,i.jsx)("div",{className:"component-choose-widget-popup"},(0,i.jsx)(x.Modal,{isOpen:!0,className:"component-choose-widget-popup-modal"},(0,i.jsx)(x.ModalHeader,{className:"component-choose-widget-clear-border component-choose-widget-modal-header"},this.props.title,(0,i.jsx)("span",{className:"choose-widget-popup-close",onClick:this.props.onCancel})),(0,i.jsx)(x.ModalBody,{className:"component-choose-widget-clear-border component-choose-widget-modal-body"},this.state.listInfo.length>0?this.state.listInfo.map((e=>this.getListItemJSX(e))):"Loading..."),(0,i.jsx)(x.ModalFooter,{className:"component-choose-widget-clear-border component-choose-widget-modal-footer"},(0,i.jsx)(x.Button,{onClick:()=>this.props.onOK(this.state.currentWidget)},"OK"),(0,i.jsx)(x.Button,{onClick:this.props.onCancel},"Cancel")))))}}const $=(0,b.withStyles)(B,"WidgetSelector");class F extends i.React.PureComponent{constructor(){super(...arguments),this.noneMapWidget=(0,i.Immutable)({id:"none",label:this.props.intl.formatMessage({id:"none",defaultMessage:x.defaultMessages.none})}),this.getStyle=e=>i.css`
      .component-map-selector{
        width: 100%;
      }

    `,this.onSelect=e=>{const t=e.target.value,s=t===this.noneMapWidget.id?[]:[t];this.props.onSelect&&this.props.onSelect(s)},this.getSelectedMapWidget=()=>{if(!this.props.useMapWidgetIds)return null;const e=this.props.useMapWidgetIds[0];return this.props.mapWidgetJsons.find((t=>t.id===e))||null}}render(){const e=this.props.mapWidgetJsons,t=this.getSelectedMapWidget();return(0,i.jsx)("div",{css:this.getStyle(this.props.theme),className:"w-100"},(0,i.jsx)("div",{className:"component-map-selector"},(0,i.jsx)(x.Select,{size:"sm",value:t?t.id:this.noneMapWidget.id,onChange:this.onSelect,className:""},e.concat(this.noneMapWidget).map(((e,t)=>(0,i.jsx)("option",{key:t,value:e.id},e.label))))))}}const z=i.ReactRedux.connect(((e,t)=>{const s=window&&window.jimuConfig&&window.jimuConfig.isBuilder?e.appStateInBuilder&&e.appStateInBuilder.appConfig:e.appConfig,i=s&&s.widgets;return{mapWidgetJsons:i?Object.keys(i).filter((e=>i[e]&&i[e].manifest&&i[e].manifest.properties&&i[e].manifest.properties.canCreateMapView)).map((e=>i[e])):[]}}))((0,i.injectIntl)((0,b.withTheme)(F))),W=z,G=F;class _ extends i.React.PureComponent{getContent(){const e=[];for(let t=0;t<this.props.fromRootDsIds.length;t++)e.push(this.props.fromRootDsIds[t]);return i.React.createElement("div",{className:"w-100"},e.map(((e,t)=>{const s=i.DataSourceManager.getInstance().getDataSource(e),o=s.getLabel(),a=s.getChildDataSources();return i.React.createElement("div",{key:t},i.React.createElement("div",{className:"text-dark-600 pl-2 pr-2",style:{fontSize:"14px"}},o),a.map(((t,s)=>i.React.createElement("div",{key:s,className:"mt-1 mb-1"},i.React.createElement("div",{className:(0,i.classNames)("layerviewselector-ds-item pl-2 pr-2",{"layerviewselector-ds-item-selected":this.props.selectedDsIds&&this.props.selectedDsIds.includes(t.id)}),title:t.getLabel(),onClick:()=>{this.props.onSelect&&this.props.onSelect({rootDataSourceId:e,dataSourceId:t.id})}},t.getLabel())))))})))}render(){return this.props.fromRootDsIds&&0!==this.props.fromRootDsIds.length?i.React.createElement("div",{className:"w-100"},this.getContent()):null}}const V=h(65085);class H extends i.React.PureComponent{constructor(e){super(e),this.toggleList=e=>{this.setState({listOpen:!this.state.listOpen})},this.onResize=e=>{this.setState({width:e})},this.handleChooseLayer=e=>{if(this.props.onSelect)if(e){const t=i.DataSourceManager.getInstance().getDataSource(e.rootDataSourceId),s=i.DataSourceManager.getInstance().getDataSource(e.dataSourceId).id,o=t.getJimuChildId(s)[0];this.props.onSelect((0,i.Immutable)({jimuMapViewId:`${this.props.useMapWidgetIds[0]}-${e.rootDataSourceId}`,jimuLayerId:o,dataSourceId:e&&e.dataSourceId,rootDataSourceId:e&&e.rootDataSourceId}))}else this.props.onSelect((0,i.Immutable)({}));this.setState({listOpen:!1})},this.handleClickNone=()=>{this.props.onSelect&&this.props.onSelect((0,i.Immutable)({})),this.setState({listOpen:!1})},this.getTitle=()=>this.props.jimuLayerViewInfo&&this.props.useMapWidgetIds&&this.props.useMapWidgetIds[0]&&this.props.jimuLayerViewInfo.dataSourceId?(0,i.jsx)(i.DataSourceComponent,{useDataSource:(0,i.Immutable)({dataSourceId:this.props.jimuLayerViewInfo.dataSourceId,mainDataSourceId:this.props.jimuLayerViewInfo.dataSourceId,rootDataSourceId:this.props.jimuLayerViewInfo.rootDataSourceId})},((e,t,s)=>e.getLabel())):this.getNoneString(),this.getContent=()=>{const e=this.props.useMapWidgetIds&&this.props.useMapWidgetIds[0],t=(0,i.getAppStore)().getState().appStateInBuilder.appConfig.widgets[e];return t&&t.useDataSources&&t.useDataSources[0]?(0,i.jsx)("div",{className:"w-100 mt-1 mb-2"},(0,i.jsx)("div",{onClick:()=>{this.handleClickNone()}},(0,i.jsx)("div",{className:"layerviewselector-ds-item pl-2 pr-2"},this.getNoneString())),(0,i.jsx)("div",{className:"w-100 mt-1 mb-1"},(0,i.jsx)("div",{className:"w-100 border border-bottom-0 border-right-0 border-left-0"})),(0,i.jsx)(i.MultipleDataSourceComponent,{useDataSources:t.useDataSources},((e,t)=>{const s=(0,i.Immutable)(Object.keys(e)),o=[];return this.props.jimuLayerViewInfo&&this.props.jimuLayerViewInfo.dataSourceId&&o.push(this.props.jimuLayerViewInfo.dataSourceId),(0,i.jsx)(_,{fromRootDsIds:s,onSelect:e=>{this.handleChooseLayer(e)},selectedDsIds:(0,i.Immutable)(o)})}))):this.getEmptyContent()},this.getNoneString=()=>this.props.intl.formatMessage({id:"none",defaultMessage:"None"}),this.getEmptyContent=()=>(0,i.jsx)("div",{className:"w-100 mt-1 mb-2"},(0,i.jsx)("div",{className:"layerviewselector-ds-item pl-2 pr-2",onClick:()=>{this.handleClickNone()}},this.getNoneString())),this.state={listOpen:!1,width:0}}render(){return(0,i.jsx)("div",{className:(0,i.classNames)("w-100",{[this.props.className]:!!this.props.className})},(0,i.jsx)(x.Dropdown,{size:"sm",toggle:e=>{this.toggleList(e)},isOpen:this.state.listOpen,className:"w-100"},(0,i.jsx)(x.DropdownToggle,{size:"sm",type:"tertiary",className:(0,i.classNames)("h-100 p-0 m-0 d-flex flex-column align-items-center toollist-item","justify-content-between toollist-item-click layerviewselector-input")},(0,i.jsx)("div",{className:"w-100 d-flex justify-content-between align-items-center"},(0,i.jsx)("div",{className:"layerviewselector-input-text ml-2"},this.getTitle()),(0,i.jsx)(x.Icon,{size:8,icon:V}))),(0,i.jsx)(x.DropdownMenu,{className:(0,i.classNames)("ml-0 mr-0 mb-0 mt-1 p-0",{[this.props.className]:!!this.props.className})},(0,i.jsx)("div",{className:"w-100 h-100 layerviewselector-bg"},(0,i.jsx)("div",{style:{width:`${this.state.width}px`}},this.getContent())))),(0,i.jsx)(i.ReactResizeDetector,{handleWidth:!0,onResize:this.onResize}))}}const J=(0,i.injectIntl)((0,b.withStyles)(H,"JimuLayerViewSelector"));class Z extends i.React.PureComponent{constructor(e){super(e),this.onStyleClick=e=>{this.state.selectedValue!==e&&(this.setState({selectedValue:e}),this.props.onChange&&this.props.onChange(e))},this.state={selectedValue:this.props.value}}componentDidUpdate(e,t){e.value!==this.props.value&&this.setState({selectedValue:this.props.value})}render(){const e=this.props.styles;return i.React.createElement("div",{className:(0,i.classNames)("widget-setting--stylepicker w-100",{small:"small"===this.props.size})},Object.keys(e).map(((t,s)=>i.React.createElement("div",{key:t,role:"button",className:(0,i.classNames)("widget-setting--stylepicker-item",{active:t===this.state.selectedValue,"full-width":"full"===e[t].size}),style:{backgroundImage:`url(${e[t].thumbnail})`},onClick:()=>this.onStyleClick(t)}))))}}const q=(0,b.withStyles)(Z,"StylePicker");class K extends i.React.PureComponent{constructor(e){super(e),this.state={value:this.props.value},this.onRadioButtonChange=e=>{const t=e.target.value;this.state.value!==t&&(this.setState({value:t}),this.props.onChange&&this.props.onChange(t))},K.count++,this.inputName=`setting-radiogroup-${K.count}`}render(){const e=this.props,{options:t,className:s}=e,o=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["options","className"]);return i.React.createElement(x.FormGroup,Object.assign({},o,{onChange:this.onRadioButtonChange,className:`setting--button-group ${s}`}),t.map((e=>i.React.createElement(x.Label,{key:e.value},i.React.createElement(x.Radio,{value:e.value,name:this.inputName,checked:this.state.value===e.value}),e.content))))}}K.count=0;const Q=(0,b.withStyles)(K,"RadioGroup");var X;!function(e){e.CurrentWindow="_self",e.TopWindow="_top",e.NewWindow="_blank"}(X||(X={}));class Y extends i.React.PureComponent{constructor(){super(...arguments),this.itemOnClick=e=>{this.props.onClick(e),this.setState({selectedItemName:e.name})}}getListContent(){return this.props.datas.map(((e,t)=>i.React.createElement("div",{onClick:()=>this.itemOnClick(e),key:t,className:(0,i.classNames)("link-selector-list-item btn w-100 border text-left border-bottom-0 rounded-0 text-truncate",{itemselected:this.props.linkParam.value===e.id})},e.name)))}render(){const e=this.props.datas.find((e=>this.props.linkParam.value===e.id)),t=e&&e.id;return i.React.createElement("div",{className:"link-selector-list w-100"},i.React.createElement(x.Select,{value:t,className:"w-100",onChange:e=>this.itemOnClick(this.props.datas.find((t=>t.id===e.target.value))),"aria-label":this.props["aria-label"],size:"sm"},this.props.datas.map(((e,t)=>i.React.createElement("option",{key:t,value:e.id},e.name)))))}}class ee extends i.React.PureComponent{constructor(){super(...arguments),this.currentPage={id:i.CONSTANTS.CURRENT_PAGE,name:this.props.intl.formatMessage({id:"currentPage",defaultMessage:x.defaultMessages.currentPage})},this.getInitLinkParam=()=>{const e=this.props.appConfig.pageStructure;if(!e||e.length<1)return(0,i.Immutable)({value:""});if(this.props.originLinkParam.linkType!==i.LinkType.Page){const e=this.getPageData();return(0,i.Immutable)({linkType:i.LinkType.Page,value:e&&e.some((e=>"default"===e.id))?"default":e&&e[0]&&e[0].id,openType:!this.props.openTypes||this.props.openTypes.includes(X.CurrentWindow)?X.CurrentWindow:this.props.openTypes[0]})}return this.props.originLinkParam},this.getPageData=()=>{const e=this.props.appConfig&&this.props.appConfig.pages,t=e&&Object.keys(e).filter((t=>e[t].type===i.PageType.Normal));let s=[this.currentPage];return t&&(s=s.concat(t.map((t=>({id:t,name:e[t].label}))))),s},this.setLinkParam=e=>{let t=this.props.linkParam;t=t.set("value",e.id),this.props.onLinkParamChange(t)}}componentDidMount(){const e=this.getInitLinkParam();this.props.onLinkParamChange(e)}render(){const e=this.getPageData();return i.React.createElement("div",{className:"w-100"},i.React.createElement("div",{className:"mb-12 option-name"},this.props.intl.formatMessage({id:"chooseAPage",defaultMessage:x.defaultMessages.chooseAPage})),i.React.createElement("div",null,i.React.createElement(Y,{linkParam:this.props.linkParam,datas:e,onClick:this.setLinkParam,"aria-label":this.props.intl.formatMessage({id:"chooseAPage",defaultMessage:x.defaultMessages.chooseAPage})})))}}class te extends i.React.PureComponent{constructor(){super(...arguments),this.getInitLinkParam=()=>{const e=this.props.appConfig.dialogs;if(!e||Object.keys(e).length<1)return(0,i.Immutable)({linkType:i.LinkType.Dialog,value:""});if(this.props.originLinkParam.linkType!==i.LinkType.Dialog){const e=this.getDialogData();return(0,i.Immutable)({linkType:i.LinkType.Dialog,value:e&&e.some((e=>"default"===e.id))?"default":e&&e[0]&&e[0].id})}return this.props.originLinkParam},this.getDialogData=()=>{var e,t;const s=this.props.appConfig&&this.props.appConfig.dialogs,o=(null===(e=s&&Object.values(s).filter((e=>(null==e?void 0:e.mode)===i.DialogMode.Fixed)))||void 0===e?void 0:e.sort(((e,t)=>e.index-t.index)))||[],a=(null===(t=s&&Object.values(s).filter((e=>(null==e?void 0:e.mode)===i.DialogMode.Anchored)))||void 0===t?void 0:t.sort(((e,t)=>e.index-t.index)))||[],n=o.concat(a).map((e=>e.id));return n&&n.filter((e=>!s[e].isSplash)).map((e=>({id:e,name:s[e].label})))},this.setLinkParam=e=>{let t=this.props.linkParam;t=t.set("value",e.id),this.props.onLinkParamChange(t)}}componentDidMount(){const e=this.getInitLinkParam();this.props.onLinkParamChange(e)}componentDidUpdate(e){if(e.appConfig!==this.props.appConfig){const e=this.getInitLinkParam();this.props.onLinkParamChange(e)}}render(){const e=this.getDialogData();return i.React.createElement("div",{className:"w-100"},i.React.createElement("div",{className:"mb-12 option-name"},this.props.intl.formatMessage({id:"chooseADialog",defaultMessage:x.defaultMessages.chooseADialog})),i.React.createElement("div",null,e&&e.length>0&&i.React.createElement(Y,{linkParam:this.props.linkParam,datas:e,onClick:this.setLinkParam,"aria-label":this.props.intl.formatMessage({id:"chooseADialog",defaultMessage:x.defaultMessages.chooseADialog})})))}}var se=h(74758);class ie extends i.React.PureComponent{constructor(){super(...arguments),this.getInitLinkParam=()=>{const e=se.searchUtils.getBlockAnchorPointsInPage(se.utils.getAppConfig(),se.utils.getCurrentPageId(),se.utils.getCurrentSizeMode());if(!e||e.length<1)return(0,i.Immutable)({linkType:i.LinkType.Block,value:""});if(this.props.originLinkParam.linkType!==i.LinkType.Block){const e=this.getBlockData();return(0,i.Immutable)({linkType:i.LinkType.Block,value:e&&e.some((e=>"default"===e.id))?"default":e&&e[0]&&e[0].id})}return this.props.originLinkParam},this.getBlockData=()=>se.searchUtils.getBlockAnchorPointsInPage(se.utils.getAppConfig(),se.utils.getCurrentPageId(),se.utils.getCurrentSizeMode()).map((e=>({id:e.id,name:e.label}))),this.setLinkParam=e=>{let t=this.props.linkParam;t=t.set("value",e.id),this.props.onLinkParamChange(t)}}componentDidMount(){const e=this.getInitLinkParam();this.props.onLinkParamChange(e)}render(){const e=this.getBlockData();return i.React.createElement("div",{className:"w-100"},i.React.createElement("div",{className:"mb-12 option-name"},this.props.intl.formatMessage({id:"jumpTo",defaultMessage:x.defaultMessages.jumpTo})),i.React.createElement("div",null,e&&e.length>0&&i.React.createElement(Y,{linkParam:this.props.linkParam,datas:e,onClick:this.setLinkParam,"aria-label":this.props.intl.formatMessage({id:"jumpTo",defaultMessage:x.defaultMessages.jumpTo})})))}}class oe extends i.React.PureComponent{constructor(){super(...arguments),this.screenGroupLabelStyle={marginLeft:"-20px"},this.getInitLinkParam=()=>{const e=this.getScreenData();return!e||e.length<1?(0,i.Immutable)({linkType:i.LinkType.Screen,value:""}):this.props.originLinkParam.linkType!==i.LinkType.Screen?(0,i.Immutable)({linkType:i.LinkType.Screen,value:e[0].screens[0].id}):this.props.originLinkParam},this.getScreenData=()=>se.searchUtils.getScreenAnchorPointsInPage(se.utils.getAppConfig(),se.utils.getCurrentPageId(),se.utils.getCurrentSizeMode()),this.setLinkParam=e=>{let t=this.props.linkParam;t=t.set("value",e.target.value),this.props.onLinkParamChange(t)}}componentDidMount(){const e=this.getInitLinkParam();this.props.onLinkParamChange(e)}render(){var e;const t=this.getScreenData(),s=[];return t.forEach((e=>{s.push(i.React.createElement("option",{value:e.id,key:e.id,disabled:!0,style:this.screenGroupLabelStyle},e.label)),e.screens.forEach(((t,o)=>s.push(i.React.createElement("option",{value:t.id,key:`${e.id}-${o}`},t.label))))})),i.React.createElement("div",{className:"w-100"},i.React.createElement("div",{className:"mb-12 option-name"},this.props.intl.formatMessage({id:"jumpTo",defaultMessage:x.defaultMessages.jumpTo})),i.React.createElement("div",null,t.length>0&&i.React.createElement(x.Select,{value:null===(e=this.props.linkParam)||void 0===e?void 0:e.value,className:"w-100",onChange:this.setLinkParam,size:"sm","aria-label":this.props.intl.formatMessage({id:"jumpTo",defaultMessage:x.defaultMessages.jumpTo})},s)))}}const ae=e=>{const{className:t}=e,s=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["className"]),o=(0,i.classNames)("jimu-icon jimu-icon-component",t);return i.React.createElement(x.SVG,Object.assign({className:o,src:R()},s))};const ne=e=>{const{className:t}=e,s=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["className"]),o=(0,i.classNames)("jimu-icon jimu-icon-component",t);return i.React.createElement(x.SVG,Object.assign({className:o,src:T()},s))};class re extends i.React.PureComponent{constructor(){super(...arguments),this.onCollapseClick=e=>{e.stopPropagation(),e.nativeEvent.stopImmediatePropagation(),this.setState({collapse:!this.state.collapse})}}componentWillMount(){this.setState({collapse:this.props.isOpen})}render(){return i.React.createElement("div",{className:(0,i.classNames)("w-100",this.props.className)},i.React.createElement("div",{title:this.props.title,style:{overflow:"hidden"},className:"w-100 btn pb-2 pr-2 d-flex justify-content-between"},i.React.createElement("div",null,this.props.title),i.React.createElement(x.Button,{type:"tertiary",size:"sm",className:"collapse-btn py-0 jimu-outline-inside pr-0",onClick:this.onCollapseClick},this.state.collapse?i.React.createElement(ae,{size:"s"}):i.React.createElement(ne,{size:"s"}))),i.React.createElement(x.Collapse,{isOpen:this.state.collapse,"aria-label":this.props.title},this.props.children))}}function le(e,t){const s=t&&t.pages;return s&&s[e]&&s[e].type===i.PageType.Normal&&se.searchUtils.getContentsInPageBody(t,e,i.LayoutItemType.Section,se.utils.getCurrentSizeMode())||[]}function ce(e,t){if(!e)return[];const s=pe(e,t);if(s&&s.length>0){let e=[],i=[];return s.forEach((s=>{e=e.concat(de(s,t).map((e=>e.id)))})),e.length>0&&e.forEach((e=>{i=i.concat(ce(e,t))})),e.concat(i)}return[]}function pe(e,t){return se.searchUtils.getContentsInView(t,e,i.LayoutItemType.Section,se.utils.getCurrentSizeMode())||[]}function de(e,t){const s=t.sections[e].views,i=[];for(let e=0;e<s.length;e++)i.push({id:s[e],label:t.views[s[e]].label});return i}class ue extends i.React.PureComponent{constructor(e){super(e),this.noScroll="Do not scroll",this.getInitLinkParam=()=>this.props.originLinkParam.linkType===i.LinkType.View?this.props.originLinkParam:(0,i.Immutable)({linkType:i.LinkType.View,openType:!this.props.openTypes||this.props.openTypes.includes(X.CurrentWindow)?X.CurrentWindow:this.props.openTypes[0],value:""}),this.pageChange=e=>{let t=this.props.linkParam;t=t.set("value",e.target.value),this.props.onLinkParamChange(t)},this.viewChange=(e,t)=>{let s=[];s=Object.assign(s,this.state.viewLinkParamArr),s[0]||(s[0]=this.getDefaultPageId());const i=this.props.appConfig.sections[t].views;let o=s.filter((t=>i.some((e=>e===t))&&t!==e)),a=[];const n=s.indexOf(e);if(n>-1?o=o.concat(s[n]):a=a.concat(e),o&&o.length>0){let e=[];o.forEach((t=>{e=e.concat(ce(t,this.props.appConfig))})),o=o.concat(e)}s=s.filter((e=>!o.some((t=>t===e)))),s=s.concat(a);let r=this.props.linkParam;r=r.set("value",s.join(",")),this.props.onLinkParamChange(r)},this.viewRemove=e=>{let t=[];t=Object.assign(t,this.state.viewLinkParamArr),t[0]||(t[0]=this.getDefaultPageId());const s=ce(e,this.props.appConfig).concat(e);t=t.slice(0,1).concat(t.slice(1).filter((e=>!s.some((t=>t===e)))));let i=this.props.linkParam;i=i.set("value",t.join(",")),this.props.onLinkParamChange(i,!0)},this.onScrollToViewChange=e=>{this.setState({scrollToViewId:e})},this.getDefaultPageId=()=>{const e=this.props.appConfig&&this.props.appConfig.pages,t=e&&Object.keys(e).filter((e=>le(e,this.props.appConfig).length>0));return t&&t.find((t=>e[t].isDefault))||(null==t?void 0:t[0])},this.getSelectedVeiwIds=()=>this.state.viewLinkParamArr.slice(1),this.state={viewLinkParamArr:[],scrollToViewId:this.noScroll}}componentDidMount(){const e=this.getInitLinkParam(),{value:t,linkType:s}=e;t&&s===i.LinkType.View?this.setState({viewLinkParamArr:t.split(",")}):this.setState({viewLinkParamArr:[]}),this.props.onLinkParamChange(e)}static getDerivedStateFromProps(e,t){const{value:s,linkType:o}=e.linkParam;return s&&o===i.LinkType.View?Object.assign(Object.assign({},t),{viewLinkParamArr:s.split(",")}):Object.assign(Object.assign({},t),{viewLinkParamArr:[]})}render(){var e,t;if(!this.props.appConfig)return null;const s={};Object.keys(this.props.appConfig.pages).forEach((e=>{this.props.appConfig.pages[e]&&this.props.appConfig.pages[e].type===i.PageType.Normal&&(s[e]=Object.assign({},this.props.appConfig.pages[e]))}));const o=this.state.viewLinkParamArr[0]||this.getDefaultPageId();return s[o]?i.React.createElement("div",{className:"w-100"},i.React.createElement("div",{className:"mb-12 option-name"},this.props.intl.formatMessage({id:"chooseViews",defaultMessage:x.defaultMessages.chooseViews})),i.React.createElement("div",null,i.React.createElement(x.Select,{value:o,onChange:this.pageChange,className:"w-100 mb-3",size:"sm"},Object.keys(s).filter((e=>le(e,this.props.appConfig).length>0)).map(((e,t)=>i.React.createElement("option",{key:t,value:s[e].id},s[e].label)))),i.React.createElement("div",{className:(0,i.classNames)("choose-view",{"mb-3":(null===(e=le(o,this.props.appConfig))||void 0===e?void 0:e.length)>0})},le(o,this.props.appConfig).map((e=>i.React.createElement(me,{sections:this.props.appConfig.sections,sectionId:e,viewsInfo:de(e,this.props.appConfig),viewLinkParamArr:this.state.viewLinkParamArr,viewChange:this.viewChange,viewRemove:this.viewRemove,key:e})))),i.React.createElement("div",{className:(0,i.classNames)("choose-view",{"mb-3":(null===(t=this.getSelectedVeiwIds())||void 0===t?void 0:t.length)>0})},this.getSelectedVeiwIds().map((e=>pe(e,this.props.appConfig).map((e=>i.React.createElement(me,{sections:this.props.appConfig.sections,sectionId:e,viewsInfo:de(e,this.props.appConfig),viewLinkParamArr:this.state.viewLinkParamArr,viewChange:this.viewChange,viewRemove:this.viewRemove,key:e})))))))):null}}class me extends i.React.PureComponent{constructor(e){super(e),this.onViewChange=e=>{this.setState({viewId:e}),this.props.viewChange(e,this.props.sectionId)},this.state={viewId:null}}componentWillUnmount(){this.props.viewRemove(this.state.viewId)}render(){return i.React.createElement(re,{className:"mb-3 choose-view",title:this.props.sections[this.props.sectionId]&&this.props.sections[this.props.sectionId].label,isOpen:!0,key:this.props.sectionId},i.React.createElement("div",{className:"link-selector-list w-100 view-border border-top-0 border-left-0 border-right-0 rounded-0",role:"menu"},this.props.viewsInfo.map(((e,t)=>i.React.createElement(x.Button,{role:"menuitem",onClick:()=>this.onViewChange(e.id),key:t,className:(0,i.classNames)("jimu-outline-inside link-selector-list-item btn w-100 view-border px-2 pt-1 text-left border-bottom-0 rounded-0 text-truncate",{"item-common":!this.props.viewLinkParamArr.includes(e.id)},{itemselected:this.props.viewLinkParamArr.includes(e.id)}),title:e.label,"aria-checked":this.props.viewLinkParamArr.includes(e.id)},e.label)))))}}var ge=h(39342);const he=(0,i.Immutable)([ge.ExpressionInputType.Static,ge.ExpressionInputType.Attribute,ge.ExpressionInputType.Expression]);class ve extends i.React.PureComponent{constructor(e){var t;super(e),this.getInitLinkParam=()=>this.props.originLinkParam.linkType===i.LinkType.WebAddress?this.props.originLinkParam:(0,i.Immutable)({linkType:i.LinkType.WebAddress,openType:!this.props.openTypes||this.props.openTypes.includes(X.NewWindow)?X.NewWindow:this.props.openTypes[0],value:""}),this.webAddressInputChange=e=>{const t=e;let s=this.props.linkParam;s=s.set("value",t).set("expression",null),this.props.onLinkParamChange(s)},this.webAddressExpressionChange=e=>{let t=this.props.linkParam;t=t.set("expression",e).set("value",""),this.props.onLinkParamChange(t),this.closeExpPopup()},this.openExpPopup=()=>this.setState({isExpPopupOpen:!0}),this.closeExpPopup=()=>this.setState({isExpPopupOpen:!1}),this.getDefaultExp=()=>({name:"Expression",parts:[{type:i.ExpressionPartType.String,exp:'"https://"'}]}),this.onUrlChange=e=>{this.setState({url:e.target.value})},this.state={isExpPopupOpen:!1,url:(null===(t=this.props.linkParam)||void 0===t?void 0:t.linkType)===i.LinkType.WebAddress?this.props.linkParam.value:""}}componentDidMount(){const e=this.getInitLinkParam();this.props.onLinkParamChange(e)}componentDidUpdate(e){var t,s,o;(null===(t=e.linkParam)||void 0===t?void 0:t.value)!==(null===(s=this.props.linkParam)||void 0===s?void 0:s.value)&&this.setState({url:(null===(o=this.props.linkParam)||void 0===o?void 0:o.linkType)===i.LinkType.WebAddress?this.props.linkParam.value:this.state.url})}render(){return i.React.createElement("div",{className:"w-100"},i.React.createElement("div",{className:"mb-12 option-name"},this.props.intl.formatMessage({id:"url",defaultMessage:x.defaultMessages.url})),i.React.createElement("div",null,this.props.useDataSources&&this.props.useDataSources.length>0?i.React.createElement(ge.ExpressionInput,{useDataSources:this.props.useDataSources,onChange:this.webAddressExpressionChange,expression:this.props.linkParam&&this.props.linkParam.expression||this.getDefaultExp(),closeExpPopup:this.closeExpPopup,openExpPopup:this.openExpPopup,isExpPopupOpen:this.state.isExpPopupOpen,types:he,widgetId:this.props.widgetId,"aria-label":this.props.intl.formatMessage({id:"url",defaultMessage:x.defaultMessages.url})}):i.React.createElement(x.TextInput,{type:"url",value:this.state.url,onChange:this.onUrlChange,className:"w-100",placeholder:this.props.intl.formatMessage({id:"websitePlaceholder",defaultMessage:x.defaultMessages.websitePlaceholder}),spellCheck:!1,onAcceptValue:this.webAddressInputChange,"aria-label":this.props.intl.formatMessage({id:"url",defaultMessage:x.defaultMessages.url})})))}}class fe extends i.React.PureComponent{constructor(e){if(super(e),this.getLinkTypeContent=()=>{if(this.props.isLinkPageSetting)return(0,i.jsx)(x.Select,{value:this.state.linkParam.linkType,size:"sm",onChange:this.linkTypeChange,className:"w-100","aria-label":this.props.intl.formatMessage({id:"linkTo",defaultMessage:x.defaultMessages.linkTo})},(0,i.jsx)("option",{value:i.LinkType.WebAddress},this.props.intl.formatMessage({id:"url",defaultMessage:x.defaultMessages.url})));{const e=this.getHiddenLinks();return(0,i.jsx)(x.Select,{value:this.state.linkParam.linkType,size:"sm",onChange:this.linkTypeChange,className:"w-100","aria-label":this.props.intl.formatMessage({id:"linkTo",defaultMessage:x.defaultMessages.linkTo})},!e.some((e=>e===i.LinkType.None))&&(0,i.jsx)("option",{value:i.LinkType.None},this.props.intl.formatMessage({id:"none",defaultMessage:x.defaultMessages.none})),!e.some((e=>e===i.LinkType.Page))&&(0,i.jsx)("option",{value:i.LinkType.Page},this.props.intl.formatMessage({id:"page",defaultMessage:i.defaultMessages.page})),!e.some((e=>e===i.LinkType.View))&&(0,i.jsx)("option",{value:i.LinkType.View},this.props.intl.formatMessage({id:"view",defaultMessage:i.defaultMessages.view})),!e.some((e=>e===i.LinkType.Dialog))&&(0,i.jsx)("option",{value:i.LinkType.Dialog},this.props.intl.formatMessage({id:"dialog",defaultMessage:i.defaultMessages.dialog})),!e.some((e=>e===i.LinkType.WebAddress))&&(0,i.jsx)("option",{value:i.LinkType.WebAddress},this.props.intl.formatMessage({id:"url",defaultMessage:x.defaultMessages.url})),!e.some((e=>e===i.LinkType.Block))&&(0,i.jsx)("option",{value:i.LinkType.Block},this.props.intl.formatMessage({id:"block",defaultMessage:i.defaultMessages.block})),!e.some((e=>e===i.LinkType.PageTop))&&(0,i.jsx)("option",{value:i.LinkType.PageTop},this.props.intl.formatMessage({id:"pageTop",defaultMessage:x.defaultMessages.pageTop})),!e.some((e=>e===i.LinkType.PrintPreview))&&(0,i.jsx)("option",{value:i.LinkType.PrintPreview},this.props.intl.formatMessage({id:"printPreview",defaultMessage:x.defaultMessages.printPreview})))}},this.getHiddenLinks=()=>{var e,t,s,o,a;let n=this.props.hiddenLinks||(0,i.Immutable)([]);const r=se.utils.getCurrentPageId(),l=se.utils.getAppConfig(),c=null===(e=l.pages)||void 0===e?void 0:e[r],p=se.searchUtils.findLayoutId(null==c?void 0:c.layout,se.utils.getCurrentSizeMode(),l.mainSizeMode),d=l.layouts[p],u=(null===(t=null===window||void 0===window?void 0:window.jimuConfig)||void 0===t?void 0:t.isBuilder)?null===(o=null===(s=(0,i.getAppStore)().getState().appStateInBuilder)||void 0===s?void 0:s.appRuntimeInfo)||void 0===o?void 0:o.currentDialogId:null===(a=(0,i.getAppStore)().getState().appRuntimeInfo)||void 0===a?void 0:a.currentDialogId;return((null==d?void 0:d.type)===i.LayoutType.FixedLayout||u)&&(n=n.concat([i.LinkType.Block,i.LinkType.Screen,i.LinkType.PageTop])),n},this.getLinkContent=e=>{switch(e){case i.LinkType.None:return null;case i.LinkType.Page:return(0,i.jsx)(ee,{originLinkParam:this.state.originLinkParam,linkParam:this.state.linkParam,appConfig:this.props.appConfig,onLinkParamChange:this.linkParamChange,intl:this.props.intl,openTypes:this.props.openTypes});case i.LinkType.Dialog:return(0,i.jsx)(te,{originLinkParam:this.state.originLinkParam,linkParam:this.state.linkParam,appConfig:this.props.appConfig,onLinkParamChange:this.linkParamChange,intl:this.props.intl});case i.LinkType.Block:return(0,i.jsx)(ie,{originLinkParam:this.state.originLinkParam,linkParam:this.state.linkParam,onLinkParamChange:this.linkParamChange,intl:this.props.intl});case i.LinkType.Screen:return(0,i.jsx)(oe,{originLinkParam:this.state.originLinkParam,linkParam:this.state.linkParam,onLinkParamChange:this.linkParamChange,intl:this.props.intl});case i.LinkType.View:return(0,i.jsx)(ue,{originLinkParam:this.state.originLinkParam,linkParam:this.state.linkParam,intl:this.props.intl,openTypes:this.props.openTypes,appConfig:this.props.appConfig,onLinkParamChange:this.linkParamChange,browserSizeMode:this.props.browserSizeMode});case i.LinkType.WebAddress:return(0,i.jsx)(ve,{originLinkParam:this.state.originLinkParam,linkParam:this.state.linkParam,intl:this.props.intl,onLinkParamChange:this.linkParamChange,useDataSources:this.props.useDataSources,openTypes:this.props.openTypes,widgetId:this.props.widgetId});default:return null}},this.linkTypeChange=e=>{let t=(0,i.Immutable)(this.state.linkParam);const s=e.target.value;s===i.LinkType.PageTop&&(t=(0,i.Immutable)({})),this.setState({linkParam:t.set("linkType",s)})},this.radioOpenTypeChange=e=>{let t=(0,i.Immutable)(this.state.linkParam);t=t.set("openType",e),this.setState({linkParam:t})},this.linkParamChange=(e,t)=>{t?e&&this.state.linkParam&&e.linkType===this.state.linkParam.linkType&&this.setState({linkParam:e}):this.setState({linkParam:e})},this.settingConfirm=()=>{const e=(0,i.Immutable)(this.state.linkParam);this.setState({originLinkParam:e}),this.props.onSettingConfirm(e)},this.isLinkParamOk=e=>{if(!e||!e.linkType)return!1;if(e.linkType===i.LinkType.View){const t=e.value&&e.value.split(",")[0]||null,s=e.value&&e.value.split(",").slice(1)||[];return!!(t&&"string"==typeof t&&s.length>0)}if(e.linkType===i.LinkType.WebAddress){if(this.props.useDataSources&&this.props.useDataSources.length>0){const t=e.expression&&e.expression.parts;let s=!1;return t&&t.length>0&&(s=1!==t.length||!!t[0].exp&&'""'!==t[0].exp),s}{const t=x.utils.getHttpErrorType(e.value);return e.value&&!t}}return e.linkType===i.LinkType.PageTop||e.linkType===i.LinkType.PrintPreview||e.linkType===i.LinkType.None||!(!e.value||"string"!=typeof e.value)},this.props.linkParam&&this.props.linkParam.linkType)this.state={linkParam:(0,i.Immutable)(this.props.linkParam),originLinkParam:(0,i.Immutable)(this.props.linkParam)};else{const e={linkType:i.LinkType.None,openType:!this.props.openTypes||this.props.openTypes.includes(X.CurrentWindow)?X.CurrentWindow:this.props.openTypes[0]};this.state={linkParam:(0,i.Immutable)(e),originLinkParam:(0,i.Immutable)(e)}}}needOpenIn(e){return!e||![i.LinkType.Dialog,i.LinkType.Block,i.LinkType.Screen,i.LinkType.PageTop,i.LinkType.PrintPreview].some((t=>t===e.linkType))}render(){if(this.props.appConfig){const e=this.getLinkTypeContent(),t=this.getLinkContent(this.state.linkParam.linkType);return(0,i.jsx)("div",{className:(0,i.classNames)(this.props.className,"w-100 h-100")},(0,i.jsx)("div",{className:"widget-builder-link-selector w-100 h-100"},(0,i.jsx)("div",{style:{position:"relative"},className:"w-100 h-100"},(0,i.jsx)(x.Container,null,(0,i.jsx)(x.Row,{className:"mb-12 option-name"},this.props.intl.formatMessage({id:"linkTo",defaultMessage:x.defaultMessages.linkTo})),(0,i.jsx)(x.Row,{className:"mb-3"},e),this.state.linkParam.linkType!==i.LinkType.None?(0,i.jsx)("div",null,(0,i.jsx)(x.Row,{className:"mb-3"},t),this.needOpenIn(this.state.linkParam)&&(0,i.jsx)("div",null,(0,i.jsx)(x.Row,{className:"mb-12 option-name"},this.props.intl.formatMessage({id:"openIn",defaultMessage:x.defaultMessages.openIn})),(0,i.jsx)(x.Container,{className:"p-0","aria-label":this.props.intl.formatMessage({id:"openIn",defaultMessage:x.defaultMessages.openIn})},(!this.props.openTypes||this.props.openTypes.some((e=>e===X.CurrentWindow)))&&(0,i.jsx)(x.Row,{className:"mb-3"},(0,i.jsx)(x.Radio,{onChange:()=>this.radioOpenTypeChange(X.CurrentWindow),id:"link-setting-app-window",checked:this.state.linkParam.openType===X.CurrentWindow}),(0,i.jsx)(x.Label,{for:"link-setting-app-window",className:"ml-2 link-setting-cursor-pointer open-type-label text-truncate"},this.props.intl.formatMessage({id:"appWindow",defaultMessage:x.defaultMessages.appWindow}))),(!this.props.openTypes||this.props.openTypes.some((e=>e===X.TopWindow)))&&(0,i.jsx)(x.Row,{className:"mb-3"},(0,i.jsx)(x.Radio,{onChange:()=>this.radioOpenTypeChange(X.TopWindow),id:"link-setting-top-window",checked:this.state.linkParam.openType===X.TopWindow}),(0,i.jsx)(x.Label,{for:"link-setting-top-window",className:"ml-2 link-setting-cursor-pointer open-type-label text-truncate"},this.props.intl.formatMessage({id:"topWindow",defaultMessage:x.defaultMessages.topWindow}))),(!this.props.openTypes||this.props.openTypes.some((e=>e===X.NewWindow)))&&(0,i.jsx)(x.Row,{className:"mb-3"},(0,i.jsx)(x.Radio,{onChange:()=>this.radioOpenTypeChange(X.NewWindow),id:"link-setting-new-window",checked:this.state.linkParam.openType===X.NewWindow}),(0,i.jsx)(x.Label,{for:"link-setting-new-window",className:"ml-2 link-setting-cursor-pointer open-type-label text-truncate"},this.props.intl.formatMessage({id:"newWindow",defaultMessage:x.defaultMessages.newWindow})))))):null),(0,i.jsx)("div",{className:"w-100",style:{position:"absolute"}},(0,i.jsx)(x.Button,{className:"w-100 text-dark link-setting-ok-btn",type:"primary",onClick:this.settingConfirm,disabled:!this.isLinkParamOk(this.state.linkParam),title:this.props.intl.formatMessage({id:"ok",defaultMessage:i.defaultMessages.ok})},(0,i.jsx)("div",{className:"text-truncate"},this.props.intl.formatMessage({id:"ok",defaultMessage:i.defaultMessages.ok})))))))}return null}componentDidMount(){this.props.isLinkPageSetting&&this.linkTypeChange({target:{value:i.LinkType.WebAddress}})}}const ye=i.ReactRedux.connect((e=>({appConfig:window&&window.jimuConfig&&window.jimuConfig.isBuilder?e.appStateInBuilder.appConfig:e.appConfig,browserSizeMode:window&&window.jimuConfig&&window.jimuConfig.isBuilder?e.appStateInBuilder.browserSizeMode:e.browserSizeMode})))((0,i.injectIntl)((0,b.withStyles)(fe,"LinkSelectorContent"))),be=ye;const xe=[{name:"preventOverflow",options:{boundariesElement:"viewport"}}];class Se extends i.React.PureComponent{constructor(){super(...arguments),this.closeBtnRef=i.React.createRef(),this.popperRef=i.React.createRef(),this.handleDocumentMousedown=e=>{if(this.props.isOpen){const t=e.target;(!this.props.trigger||(Array.isArray(this.props.trigger)?!this.props.trigger.some((e=>!(0,x.isOutBoundary)(t,e))):(0,x.isOutBoundary)(t,this.props.trigger)))&&this.toggle()}},this.toggle=()=>{this.props.toggle(),setTimeout((()=>{var e,t;this.props.backToFocusNode?this.props.backToFocusNode.focus():Array.isArray(this.props.trigger)?null===(e=this.props.trigger[0])||void 0===e||e.focus():null===(t=this.props.trigger)||void 0===t||t.focus()}),200)},this.onKeyDown=e=>{var t,s;if("Esc"===e.key||"Escape"===e.key){if(!(null===(t=this.popperRef.current)||void 0===t?void 0:t.contains(e.target)))return;e.target===this.closeBtnRef.current?this.toggle():null===(s=this.closeBtnRef.current)||void 0===s||s.focus()}}}componentDidMount(){var e;null===(e=this.getReference(this.props.position))||void 0===e||e.addEventListener("mousedown",this.handleDocumentMousedown,!1)}componentDidUpdate(e){var t;const s="left"===this.props.position&&e.leftSidebarCollapse&&!this.props.leftSidebarCollapse||"right"===this.props.position&&e.rightSidebarCollapse&&!this.props.rightSidebarCollapse,i=this.props.widgetId&&this.props.layoutSelection!==e.layoutSelection&&(null===(t=se.searchUtils.findLayoutItem(se.utils.getAppConfig(),this.props.layoutSelection))||void 0===t?void 0:t.widgetId)!==this.props.widgetId,o=!e.isTemplatePage&&this.props.isTemplatePage;(s||i||o)&&this.props.isOpen&&this.toggle()}componentWillUnmount(){var e;null===(e=this.getReference(this.props.position))||void 0===e||e.removeEventListener("mousedown",this.handleDocumentMousedown,!1)}getReference(e){return"left"===e?document&&document.querySelector('[data-layoutid="left-sidebar-left-layout"]'):document&&document.querySelector('[data-layoutid="right-sidebar-right-layout"]')}getPlacement(e){return"left"===e?"right-start":"left-start"}render(){const e=this.props,{isOpen:t,position:s,className:o,dispatch:a,leftSidebarCollapse:n,rightSidebarCollapse:r,trigger:l,backToFocusNode:c,widgetId:p,layoutSelection:d,title:u,isTemplatePage:m}=e,g=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["isOpen","position","className","dispatch","leftSidebarCollapse","rightSidebarCollapse","trigger","backToFocusNode","widgetId","layoutSelection","title","isTemplatePage"]);return(0,i.jsx)(x.Popper,Object.assign({reference:this.getReference(s),placement:this.getPlacement(s),open:t,forceLatestFocusElements:!0,className:(0,i.classNames)("bg-light-300",o),modifiers:xe},g,{toggle:null,onKeyDown:this.onKeyDown,"aria-label":"string"==typeof this.props["aria-label"]?this.props["aria-label"]:"string"==typeof u?u:void 0}),(0,i.jsx)("div",{className:"w-100 h-100",ref:this.popperRef},void 0!==u&&(0,i.jsx)(x.PanelHeader,{title:u,showClose:!0,onClose:this.toggle,level:1,className:"p-3",closeButtonRef:this.closeBtnRef}),void 0!==u?(0,i.jsx)("div",{css:i.css`height: calc(100% - 56px); overflow: auto;`},this.props.children):this.props.children))}}const we=i.ReactRedux.connect(((e,t)=>{var s,i,o,a,n,r,l,c,p,d;return{leftSidebarCollapse:null===(i=null===(s=e.widgetsState)||void 0===s?void 0:s["left-sidebar"])||void 0===i?void 0:i.collapse,rightSidebarCollapse:null===(a=null===(o=e.widgetsState)||void 0===o?void 0:o["right-sidebar"])||void 0===a?void 0:a.collapse,layoutSelection:t.widgetId?(null===(n=null===window||void 0===window?void 0:window.jimuConfig)||void 0===n?void 0:n.isBuilder)?null===(l=null===(r=e.appStateInBuilder)||void 0===r?void 0:r.appRuntimeInfo)||void 0===l?void 0:l.selection:null===(c=e.appRuntimeInfo)||void 0===c?void 0:c.selection:null,isTemplatePage:(null===(p=null===window||void 0===window?void 0:window.jimuConfig)||void 0===p?void 0:p.isBuilder)&&"template"===(null===(d=e.appRuntimeInfo)||void 0===d?void 0:d.currentPageId)}}))((0,b.withStyles)(Se,"SidePopper"));class ke extends i.React.PureComponent{constructor(){super(...arguments),this.close=()=>{this.props.onSettingCancel()},this.getIsOpen=()=>this.props.isOpen||this.props.showDialog}render(){const e=this.props.position||"right",{title:t}=this.props;return i.React.createElement(we,{isOpen:this.getIsOpen(),position:e,toggle:this.close,trigger:this.props.trigger,backToFocusNode:this.props.backToFocusNode,widgetId:this.props.widgetId,title:this.props.intl.formatMessage({id:t?"setLinkForTitle":"setLink",defaultMessage:t?x.defaultMessages.setLinkForTitle:x.defaultMessages.setLink},{title:t})},i.React.createElement("div",{className:"bg-light-300 w-100 h-100 px-3"},i.React.createElement(ye,{isLinkPageSetting:this.props.isLinkPageSetting,linkParam:this.props.linkParam,onSettingConfirm:this.props.onSettingConfirm,useDataSources:this.props.useDataSources,widgetId:this.props.widgetId,hiddenLinks:this.props.hiddenLinks,openTypes:this.props.openTypes})))}}const je=(0,i.injectIntl)((0,b.withTheme)(ke)),Ce=je;var Ie=h(24786),Pe=h.n(Ie);const Oe=e=>{const{className:t}=e,s=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["className"]),o=(0,i.classNames)("jimu-icon jimu-icon-component",t);return i.React.createElement(x.SVG,Object.assign({className:o,src:Pe()},s))};class Ne extends i.React.PureComponent{constructor(e){super(e),this.linkSelectorTrigger=i.React.createRef(),this.toggle=()=>{this.setState({isOpen:!this.state.isOpen})},this.onCancel=()=>{var e,t;null===(t=(e=this.props).onSettingCancel)||void 0===t||t.call(e),this.toggle()},this.onConfirm=e=>{var t,s;null===(s=(t=this.props).onSettingConfirm)||void 0===s||s.call(t,e),this.toggle()},this.state={isOpen:!1}}render(){const e=this.props,{theme:t,intl:s,buttonLabel:o}=e,a=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["theme","intl","buttonLabel"]),n=o||this.props.intl.formatMessage({id:"setLink",defaultMessage:x.defaultMessages.setLink});return i.React.createElement(i.React.Fragment,null,i.React.createElement(x.Button,{className:"w-100 text-black",type:"primary",onClick:this.toggle,ref:this.linkSelectorTrigger,title:n},i.React.createElement("div",{className:"w-100 px-2 text-truncate"},i.React.createElement(Oe,{className:"text-black mr-1"}),n)),i.React.createElement(je,Object.assign({},a,{isOpen:this.state.isOpen,position:"right",onSettingCancel:this.onCancel,onSettingConfirm:this.onConfirm,trigger:this.linkSelectorTrigger.current,widgetId:this.props.widgetId})))}}const Te=(0,b.withTheme)((0,i.injectIntl)(Ne));var Me=h(338),Re=function(e,t,s,i){return new(s||(s=Promise))((function(o,a){function n(e){try{l(i.next(e))}catch(e){a(e)}}function r(e){try{l(i.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(n,r)}l((i=i.apply(e,t||[])).next())}))};function Le(){var e,t,s,o;return Re(this,void 0,void 0,(function*(){const a=null===(o=null===(s=null===(t=null===(e=(0,i.getAppStore)())||void 0===e?void 0:e.getState())||void 0===t?void 0:t.appStateInBuilder)||void 0===s?void 0:s.appConfig)||void 0===o?void 0:o.dataSources,n=[];return a&&Object.keys(a).forEach((e=>{const t=i.DataSourceManager.getInstance().getDataSource(e);n.push(Ae(t))})),Promise.allSettled(n).then((e=>{let t={};return e.filter((e=>"fulfilled"===e.status)).map((e=>e.value)).forEach((e=>{e&&Object.keys(e).forEach((s=>{t[s]?t[s].dataSources=t[s].dataSources.concat(e[s].dataSources):t=Object.assign(Object.assign({},t),e)}))})),t}))}))}function Ae(e,t=!1){var s,o,a,n,r,l,c,p,d,u;return Re(this,void 0,void 0,(function*(){const m={};if(!e)return m;const g=null===(n=null===(a=null===(o=null===(s=(0,i.getAppStore)())||void 0===s?void 0:s.getState())||void 0===o?void 0:o.appStateInBuilder)||void 0===a?void 0:a.appConfig)||void 0===n?void 0:n.widgets,h=(null===(r=e.getMainDataSource())||void 0===r?void 0:r.id)===e.id,v=Me.dataComponentsUtils.getWidgetsUsingDsOrItsViews(e.id,g,!1).length>0,f=i.dataSourceUtils.getFullServiceUrl(null===(l=e.getDataSourceJson())||void 0===l?void 0:l.url,!1);if(h&&f&&(t||v)){const t=(null===(c=e.getDataSourceJson())||void 0===c?void 0:c.portalUrl)&&(null===(p=e.getDataSourceJson())||void 0===p?void 0:p.itemId)?yield function(e,t){return Re(this,void 0,void 0,(function*(){const s=function(e,t){return`${i.SessionManager.getInstance().getSessionKeyFromUrl(t)}-${e}`}(e,t);return _e[s]||(_e[s]=i.requestUtils.requestWrapper(t,(s=>Re(this,void 0,void 0,(function*(){return yield i.esri.restPortal.getItem(e,{portal:i.portalUrlUtils.getPortalRestUrl(t),authentication:s})}))))),yield _e[s]}))}(null===(d=e.getDataSourceJson())||void 0===d?void 0:d.itemId,null===(u=e.getDataSourceJson())||void 0===u?void 0:u.portalUrl):null,s=i.dataSourceUtils.isOriginDataPremium(t,f),o=i.dataSourceUtils.isOriginDataSubscriber(t,f);(s||o)&&(m[f]={dataSources:[e],isPremium:s,isSubscriber:o})}const y=[];if(h&&e.isDataSourceSet){const s=(e.type===Me.AllDataSourceTypes.WebMap||e.type===Me.AllDataSourceTypes.WebScene)&&v||t;e.getChildDataSources().forEach((e=>{y.push(Ae(e,s))}))}return Promise.allSettled(y).then((e=>{let t=m;return e.filter((e=>"fulfilled"===e.status)).map((e=>e.value)).forEach((e=>{e&&Object.keys(e).forEach((s=>{t[s]?t[s].dataSources=t[s].dataSources.concat(e[s].dataSources):t=Object.assign(Object.assign({},t),e)}))})),t}))}))}function De(e,t){var s;if(!e||!t)return null;let i=null;for(const o in t)if((null===(s=t[o])||void 0===s?void 0:s.sourceUrl)===e){i=t[o];break}return i}function Ee(e,t,s,i){return!(!e||!t)&&(e.sourceUrl===t&&((!e.hitsPerInterval&&!s||e.hitsPerInterval===s)&&!((e.intervalSeconds||i)&&e.intervalSeconds!==i)))}function Ue(){var e,t;const s=null===(e=(0,i.getAppStore)().getState())||void 0===e?void 0:e.appStateInBuilder.appInfo;return null===(t=null==s?void 0:s.typeKeywords)||void 0===t?void 0:t.includes("Registered App")}function Be(){var e,t,s,o,a,n,r,l,c,p;return Re(this,void 0,void 0,(function*(){if((null===(s=null===(t=null===(e=(0,i.getAppStore)().getState())||void 0===e?void 0:e.appContext)||void 0===t?void 0:t.jimuConfig)||void 0===s?void 0:s.isInPortal)||(null===(n=null===(a=null===(o=(0,i.getAppStore)().getState())||void 0===o?void 0:o.appContext)||void 0===a?void 0:a.jimuConfig)||void 0===n?void 0:n.isDevEdition))return yield Promise.resolve(!1);const d=Ue();let u=!1;if(!d){const e=null===(r=(0,i.getAppStore)().getState())||void 0===r?void 0:r.appStateInBuilder.appInfo,t=null===(p=null===(c=null===(l=(0,i.getAppStore)().getState())||void 0===l?void 0:l.appStateInBuilder)||void 0===c?void 0:c.user)||void 0===p?void 0:p.username;u=(null==e?void 0:e.owner)===t}if(!d&&!u)return yield Promise.resolve(!1);const m=yield Le(),g=Object.keys(m).map((e=>Re(this,void 0,void 0,(function*(){return yield i.ServiceManager.getInstance().fetchServiceInfo(e).then((e=>e.isHostedInSamePortal))}))));return Promise.all(g).then((e=>(null==e?void 0:e.length)>0&&(null==e?void 0:e.some((e=>e)))))}))}function $e(e,t){return Re(this,void 0,void 0,(function*(){if(!e||0===e.length||!t)return yield Promise.resolve();const s=Ge();return yield i.esri.restRequest.request(s,{authentication:i.SessionManager.getInstance().getSessionByUrl((0,i.getAppStore)().getState().portalUrl),httpMethod:"POST",params:{proxies:e.join()}}).then((e=>Re(this,void 0,void 0,(function*(){var s;return e.results&&Object.values(e.results).forEach((e=>{e.success&&Fe(e.proxyId,t)})),null==t||t.exec(),(null===(s=e.results)||void 0===s?void 0:s.every((e=>!0===e.success)))?Promise.resolve():Promise.reject(`Deleting existing proxy failed: ${JSON.stringify(e)}`)})))).catch((s=>Re(this,void 0,void 0,(function*(){return e.forEach((e=>{Fe(e,t)})),null==t||t.exec(),Promise.reject(`Deleting existing proxy failed: ${JSON.stringify(s)}`)}))))}))}function Fe(e,t){var s,o,a;const n=null===(a=null===(o=null===(s=(0,i.getAppStore)().getState())||void 0===s?void 0:s.appStateInBuilder)||void 0===o?void 0:o.appConfig)||void 0===a?void 0:a.appProxies,r=n&&Object.values(n).find((t=>t.proxyId===e));r&&(null==t||t.removeAppProxy(r.id))}function ze(){var e,t,s,o,a,n,r;const l=null===(t=null===(e=(0,i.getAppStore)().getState())||void 0===e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.portalUrl,c=null===(o=null===(s=(0,i.getAppStore)().getState())||void 0===s?void 0:s.appStateInBuilder)||void 0===o?void 0:o.appId;return`${l}/sharing/rest/content/users/${null===(r=null===(n=null===(a=(0,i.getAppStore)().getState())||void 0===a?void 0:a.appStateInBuilder)||void 0===n?void 0:n.appInfo)||void 0===r?void 0:r.owner}/items/${c}`}function We(){return`${ze()}/createProxies`}function Ge(){return`${ze()}/deleteProxies`}const _e={};var Ve=h(18371),He=h.n(Ve);const Je=e=>{const{className:t}=e,s=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["className"]),o=(0,i.classNames)("jimu-icon jimu-icon-component",t);return i.React.createElement(x.SVG,Object.assign({className:o,src:He()},s))};class Ze extends i.React.PureComponent{constructor(e){super(e),this.__unmount=!1,this.interval={none:this.props.intl.formatMessage({id:"intervalNone",defaultMessage:x.defaultMessages.intervalNone}),second:this.props.intl.formatMessage({id:"intervalSecond",defaultMessage:x.defaultMessages.intervalSecond}),minute:this.props.intl.formatMessage({id:"intervalMinute",defaultMessage:x.defaultMessages.intervalMinute}),hour:this.props.intl.formatMessage({id:"intervalHour",defaultMessage:x.defaultMessages.intervalHour}),day:this.props.intl.formatMessage({id:"intervalDay",defaultMessage:x.defaultMessages.intervalDay})},this.setIsHostedInSamePortal=()=>{this.props.sourceUrl&&i.ServiceManager.getInstance().fetchServiceInfo(this.props.sourceUrl).then((e=>{this.__unmount||this.setState({isHostedInSamePortal:e.isHostedInSamePortal})}))},this.onToggleProxy=()=>{let e;e=this.props.proxyConfig?null:(0,i.Immutable)({sourceUrl:this.props.sourceUrl}),this.props.onChange(this.props.sourceUrl,e)},this.onHitsPerInervalChange=e=>{const t=e,s=(0,i.Immutable)({sourceUrl:this.props.sourceUrl,hitsPerInterval:t}),o=this.props.proxyConfig?this.props.proxyConfig.merge(s):s;this.props.onChange(this.props.sourceUrl,o)},this.onIntervalUnitChange=e=>{const t=e.target.value,s=this.getIntervalSeconds(t),o=(0,i.Immutable)({sourceUrl:this.props.sourceUrl,intervalSeconds:s}),a=this.props.proxyConfig?this.props.proxyConfig.merge(o):o;this.props.onChange(this.props.sourceUrl,a)},this.state={isHostedInSamePortal:!0}}componentDidMount(){this.__unmount=!1,this.setIsHostedInSamePortal()}componentDidUpdate(e){this.__unmount=!1,e.sourceUrl!==this.props.sourceUrl&&this.setIsHostedInSamePortal()}componentWillUnmount(){this.__unmount=!0}getIntervalUnit(e){if(!e)return"none";switch(e){case 1:return"second";case 60:return"minute";case 3600:return"hour";case 86400:return"day";default:return"none"}}getIntervalSeconds(e){if(!e)return null;switch(e){case"second":return 1;case"minute":return 60;case"hour":return 3600;case"day":return 86400;default:return null}}render(){var e,t;if(!this.props.sourceUrl)return null;const s=this.props.label,o=!!this.props.proxyConfig,a=this.getIntervalUnit(null===(e=this.props.proxyConfig)||void 0===e?void 0:e.intervalSeconds),n=i.SessionManager.getInstance().getMainSession(),r=`${this.props.sourceUrl}?token=${n.token}`;return i.React.createElement("tr",{className:"row m-0 content-table-tr"},i.React.createElement("td",{className:"col-2",title:this.state.isHostedInSamePortal?null:this.props.intl.formatMessage({id:"disabledProxyTooltip",defaultMessage:x.defaultMessages.disabledProxyTooltip})},i.React.createElement(x.Switch,{onChange:this.onToggleProxy,checked:o,className:"mr-2",disabled:!this.state.isHostedInSamePortal,"aria-label":this.props.intl.formatMessage({id:"authorized",defaultMessage:x.defaultMessages.authorized}),"aria-checked":o})),i.React.createElement("td",{className:"col-4",title:s},i.React.createElement(x.Link,{to:r,target:"_blank",className:"font-size-13 px-0 text-truncate d-block text-left","aria-label":this.props.intl.formatMessage({id:"subscriberContent",defaultMessage:x.defaultMessages.subscriberContent})},s)),i.React.createElement("td",{className:"col-2"},this.props.isPremium&&i.React.createElement(Je,{size:"m"})),i.React.createElement("td",{className:"col-2"},o&&i.React.createElement(x.NumericInput,{size:"sm",value:null===(t=this.props.proxyConfig)||void 0===t?void 0:t.hitsPerInterval,onChange:this.onHitsPerInervalChange,precision:0,min:1,className:"request-limit","aria-label":this.props.intl.formatMessage({id:"requestLimit",defaultMessage:x.defaultMessages.requestLimit})})),i.React.createElement("td",{className:"col-2"},o&&i.React.createElement(x.Select,{value:a,onChange:this.onIntervalUnitChange,size:"sm",className:"request-interval","aria-label":this.props.intl.formatMessage({id:"requestInterval",defaultMessage:x.defaultMessages.requestInterval})},Object.keys(this.interval).map(((e,t)=>i.React.createElement("option",{value:e,key:t,selected:e===a},this.interval[e]))))))}}class qe extends i.React.PureComponent{constructor(){super(...arguments),this.columnName={authorized:this.props.intl.formatMessage({id:"authorized",defaultMessage:x.defaultMessages.authorized}),subscriberContent:this.props.intl.formatMessage({id:"subscriberContent",defaultMessage:x.defaultMessages.subscriberContent}),credits:this.props.intl.formatMessage({id:"credits",defaultMessage:x.defaultMessages.credits}),requestLimit:this.props.intl.formatMessage({id:"requestLimit",defaultMessage:x.defaultMessages.requestLimit}),requestInterval:this.props.intl.formatMessage({id:"requestInterval",defaultMessage:x.defaultMessages.requestInterval})},this.onProxyChange=(e,t)=>{let s;const o=this.props.proxyConfigs||(0,i.Immutable)({}),a=i.dataSourceUtils.getDsTypeFromWholeServiceUrl(e)===i.DataSourceTypes.SceneService;if(t){if(s=o.set(e,t),a){const i=e.replace("/SceneServer","/FeatureServer"),o=t.set("sourceUrl",i);s=s.set(i,o)}}else if(s=o.without(e),a){const t=e.replace("/SceneServer","/FeatureServer");s=s.without(t)}this.props.onChange(s)}}render(){const e=this.props.needProxyDataSources,t=this.props.proxyConfigs;return i.React.createElement("div",{className:(0,i.classNames)("h-100 w-100 bg-light-300",{[this.props.className]:!!this.props.className})},i.React.createElement("div",{className:"subscriber-warning"},this.props.intl.formatMessage({id:"subscriberWarning",defaultMessage:x.defaultMessages.subscriberWarning})),i.React.createElement("div",{className:"secondary-title mt-4 mb-3"},this.props.intl.formatMessage({id:"data",defaultMessage:x.defaultMessages.data})),i.React.createElement("table",{className:"content-table w-100"},i.React.createElement("thead",{className:"content-table-header container"},i.React.createElement("tr",{className:"row"},Object.keys(this.columnName).map(((e,t)=>i.React.createElement("th",{key:t,className:(0,i.classNames)("text-truncate",{"col-4":"subscriberContent"===e,"col-2":"subscriberContent"!==e}),title:this.columnName[e]},this.columnName[e]))))),i.React.createElement("tbody",{className:"container"},e&&Object.keys(e).map(((s,o)=>{var a,n;const r=e[s],l=r.dataSources[0],c=(null===(a=l)||void 0===a?void 0:a.getLayerDefinition)?null===(n=l)||void 0===n?void 0:n.getLayerDefinition():l.getServiceDefinition?l.getServiceDefinition():null;return i.React.createElement(Ze,{isPremium:r.isPremium,isSubscriber:r.isSubscriber,sourceUrl:s,intl:this.props.intl,key:o,onChange:this.onProxyChange,label:(null==c?void 0:c.name)||i.dataSourceUtils.getServiceLabelFromUrl(s),icon:Me.dataComponentsUtils.getDsIcon(l.getDataSourceJson()),proxyConfig:null==t?void 0:t[s]})})))))}}const Ke=(0,i.injectIntl)((0,b.withStyles)(qe,"ProxySetting"));var Qe;!function(e){e.IMAGE="image",e.ICON="icon"}(Qe||(Qe={}));var Xe=function(e,t,s,i){return new(s||(s=Promise))((function(o,a){function n(e){try{l(i.next(e))}catch(e){a(e)}}function r(e){try{l(i.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(n,r)}l((i=i.apply(e,t||[])).next())}))};const Ye={};class et extends i.React.PureComponent{constructor(e){super(e),this.__unmount=!1,this.getProxyConfigFromAppProxyJsons=()=>Xe(this,void 0,void 0,(function*(){var e,t;const s=yield Le(),o={},a=null===(t=null===(e=(0,i.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appConfig)||void 0===t?void 0:t.appProxies;return Object.keys(s).forEach((e=>{const t=De(e,a);t&&(o[e]=t.without("id").without("proxyId").without("proxyUrl"))})),{proxyConfigs:(0,i.Immutable)(o),needProxyDataSources:s}})),this.registerApp=()=>Xe(this,void 0,void 0,(function*(){var e,t,s,o;const a=null===(t=null===(e=(0,i.getAppStore)().getState())||void 0===e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.appId;if(Ye[a])return yield Ye[a];const n=`${null===(o=null===(s=(0,i.getAppStore)().getState())||void 0===s?void 0:s.appStateInBuilder)||void 0===o?void 0:o.portalUrl}/sharing/rest/oauth2/registerApp`;return Ye[a]=i.esri.restRequest.request(n,{authentication:i.SessionManager.getInstance().getSessionByUrl((0,i.getAppStore)().getState().portalUrl),httpMethod:"POST",params:{itemId:a,appType:"browser",redirect_uris:JSON.stringify([this.getAppRootUrl()])}}),yield Ye[a]})),this.createProxies=e=>Xe(this,void 0,void 0,(function*(){var t,s,o;if(!e)return yield Promise.resolve(null);const a=null===(o=null===(s=null===(t=(0,i.getAppStore)().getState())||void 0===t?void 0:t.appStateInBuilder)||void 0===s?void 0:s.appConfig)||void 0===o?void 0:o.appProxies,n={};let r=[];if(Object.keys(e).forEach((t=>{const s=e[t];if(!s)return;const i=s.hitsPerInterval,o=s.intervalSeconds,l=De(t,a);Ee(l,t,i,o)?n[l.id]=l:r=r.concat({sourceUrl:t,hitsPerInterval:i,intervalSeconds:o})})),0===r.length)return(0,i.Immutable)(n);Ue()||(yield this.registerApp());const l={referrers:[this.getAppUrl()]},c=We();return i.esri.restRequest.request(c,{authentication:i.SessionManager.getInstance().getSessionByUrl((0,i.getAppStore)().getState().portalUrl),httpMethod:"POST",params:{serviceProxyParams:l,proxies:r}}).then((e=>{var t,s;const o=(null==e?void 0:e.appProxies)||[],a=n,r=null===(s=null===(t=(0,i.getAppStore)().getState())||void 0===t?void 0:t.appStateInBuilder)||void 0===s?void 0:s.appConfig,l=null==r?void 0:r.appProxies;return o.forEach((e=>{const t=De(e.sourceUrl,l),s=(null==t?void 0:t.id)||i.appConfigUtils.getUniqueId(r.set("appProxies",l?l.merge(a):a),"appProxy");a[s]=Object.assign(Object.assign({},e),{id:s})})),(0,i.Immutable)(a)}))})),this.getAppRootUrl=()=>{var e;return null===(e=null===window||void 0===window?void 0:window.location)||void 0===e?void 0:e.origin},this.getAppUrl=()=>{var e,t,s,o,a,n;const r=null===(t=null===(e=(0,i.getAppStore)().getState())||void 0===e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.appId,l=null===(o=null===(s=(0,i.getAppStore)().getState())||void 0===s?void 0:s.appStateInBuilder)||void 0===o?void 0:o.appInfo,c="Web Experience Template"===(null==l?void 0:l.type),p=null===(a=i.urlUtils.getAppUrl({appId:r,isTemplate:c}))||void 0===a?void 0:a.replace(/^\//,"");return`${null===(n=this.getAppRootUrl())||void 0===n?void 0:n.replace(/\/$/,"")}/${p}`},this.onProxyConfigChange=e=>{this.setState({proxyConfigs:e})},this.onFinish=()=>{var e,t,s,o;this.setState({isLoading:!0});const a=this.state.proxyConfigs||(0,i.Immutable)({}),n=null===(s=null===(t=null===(e=(0,i.getAppStore)().getState())||void 0===e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.appConfig)||void 0===s?void 0:s.appProxies,r=n&&Object.values(n).filter((e=>{var t;let s=a[null==e?void 0:e.sourceUrl];if(i.dataSourceUtils.getDsTypeFromWholeServiceUrl(null==e?void 0:e.sourceUrl)===i.DataSourceTypes.FeatureService){const i=null===(t=null==e?void 0:e.sourceUrl)||void 0===t?void 0:t.replace("/FeatureServer","/SceneServer"),o=a[i];s=s||(null==o?void 0:o.set("sourceUrl",null==e?void 0:e.sourceUrl))}return!s||!Ee(e,s.sourceUrl,s.hitsPerInterval,s.intervalSeconds)}));$e(null==r?void 0:r.map((e=>e.proxyId)),null===(o=this.state)||void 0===o?void 0:o.getAppConfigAction()).then((()=>Xe(this,void 0,void 0,(function*(){return yield this.createProxies(a).then((e=>{var t;if(!this.__unmount){if(e){const s=null===(t=this.state)||void 0===t?void 0:t.getAppConfigAction();Object.keys(e).forEach((t=>{null==s||s.editAppProxy(e[t])})),null==s||s.exec()}this.props.onFinish().then((()=>{this.__unmount||setTimeout((()=>{this.setState({isLoading:!1},(()=>{this.props.onToggle()}))}),3e3)}),(()=>{this.__unmount||setTimeout((()=>{this.setState({isLoading:!1},(()=>{this.props.onToggle()}))}),3e3)}))}}))})))).catch((e=>{console.error("Creating proxy failed: ",e),this.setState({isLoading:!1,isError:!0},(()=>{setTimeout((()=>{this.setState({isError:!1})}),5500)}))}))},this.getTostStyle=()=>{var e,t,s,o,a,n,r,l,c,p,d;return i.css`
      & {
        height:  ${i.polished.rem(40)};
        top: ${i.polished.rem(60)};
      }
      .jimu-toast-info {
        background: ${null===(o=null===(s=null===(t=null===(e=this.props)||void 0===e?void 0:e.theme)||void 0===t?void 0:t.colors)||void 0===s?void 0:s.palette)||void 0===o?void 0:o.secondary[300]};
        line-height: ${i.polished.rem(40)};
        color: ${null===(l=null===(r=null===(n=null===(a=this.props)||void 0===a?void 0:a.theme)||void 0===n?void 0:n.colors)||void 0===r?void 0:r.palette)||void 0===l?void 0:l.dark[800]};
        font-weight: 300;
        padding: 0 ${i.polished.rem(16)};
        box-shadow: 0 0 ${i.polished.rem(10)} ${i.polished.rem(2)} ${i.polished.rgba(null===(d=null===(p=null===(c=this.props)||void 0===c?void 0:c.theme)||void 0===p?void 0:p.colors)||void 0===d?void 0:d.white,.2)};
      }
    `},this.state={getAppConfigAction:null,isLoading:!1,isError:!1,proxyConfigs:null,needProxyDataSources:null}}componentDidMount(){this.__unmount=!1,i.moduleLoader.loadModule("jimu-for-builder").then((e=>{this.__unmount||this.setState({getAppConfigAction:e.getAppConfigAction})})),this.setState({isLoading:!0}),this.getProxyConfigFromAppProxyJsons().then((e=>{this.__unmount||this.setState({proxyConfigs:e.proxyConfigs,needProxyDataSources:e.needProxyDataSources,isLoading:!1})}),(e=>{this.__unmount||this.setState({isLoading:!1}),console.error("Getting proxy config error",e)}))}componentDidUpdate(e){(!e.isOpen&&this.props.isOpen||e.appProxies!==this.props.appProxies)&&(this.setState({isLoading:!0}),this.getProxyConfigFromAppProxyJsons().then((e=>{this.__unmount||this.setState({proxyConfigs:e.proxyConfigs,needProxyDataSources:e.needProxyDataSources,isLoading:!1})}),(e=>{this.__unmount||this.setState({isLoading:!1}),console.error("Getting proxy config error",e)})))}componentWillUnmount(){this.__unmount=!0}render(){const e=this.state.proxyConfigs,t=this.state.needProxyDataSources,s=this.props.intl.formatMessage({id:"subscriberContents",defaultMessage:x.defaultMessages.subscriberContents});return(0,i.jsx)(x.Modal,{isOpen:this.props.isOpen,centered:!0,className:(0,i.classNames)({[this.props.className]:!!this.props.className}),returnfocusafterclose:"true",contentClassName:"proxy-setting-container",backdrop:"static","aria-label":s},(0,i.jsx)(x.ModalHeader,{className:"d-flex justify-content-between header px-30",toggle:this.props.onToggle},(0,i.jsx)("div",{className:"flex-grow-1 text-truncate"},s)),(0,i.jsx)(x.ModalBody,{className:"d-flex px-30"},(0,i.jsx)(Ke,{onChange:this.onProxyConfigChange,proxyConfigs:e,needProxyDataSources:t})),(0,i.jsx)(x.ModalFooter,{className:"px-30"},(0,i.jsx)(x.Button,{className:"mr-2",type:"primary",onClick:this.onFinish},this.props.intl.formatMessage({id:"publish",defaultMessage:i.defaultMessages.publish})),(0,i.jsx)(x.Button,{type:"default",onClick:this.props.onCancel},this.props.intl.formatMessage({id:"cancel",defaultMessage:i.defaultMessages.cancel}))),this.state.isLoading&&(0,i.jsx)(x.Loading,{type:i.LoadingType.Secondary}),this.state.isError&&(0,i.jsx)(x.Toast,{open:this.state.isError,type:x.ToastType.Info,css:this.getTostStyle(),text:this.props.intl.formatMessage({id:"creatProxyToPublishAppError",defaultMessage:x.defaultMessages.creatProxyToPublishAppError})}))}}const tt=(0,b.withStyles)((0,b.withTheme)((0,i.injectIntl)(et)),"ProxySettingPopup"),st=i.ReactRedux.connect(((e,t)=>{var s,i;return{appProxies:null===(i=null===(s=null==e?void 0:e.appStateInBuilder)||void 0===s?void 0:s.appConfig)||void 0===i?void 0:i.appProxies}}))(tt);class it extends i.React.PureComponent{componentDidUpdate(e){this.props.pageId===e.pageId&&this.props.sizemode===e.sizemode||this.props.toggle()}getStyle(){const{theme:e}=this.props;return e&&i.css`
      background-color: ${e.colors.palette.light[300]};
      ${(0,b.popperPointer)({background:e.colors.palette.light[300],border:{color:e.colors.palette.light[600],width:"1px"}})}
      > * {
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }

        ::-webkit-scrollbar-track {
          background: transparent;
        }

        ::-webkit-scrollbar-thumb {
          background: ${e.colors.palette.light[500]};
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: ${e.colors.palette.light[800]};
        }
      }
    `}render(){const e=this.props,{pageId:t,sizemode:s,dispatch:o}=e,a=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["pageId","sizemode","dispatch"]);return(0,i.jsx)(x.Popper,Object.assign({css:this.getStyle()},a))}}const ot=i.ReactRedux.connect((function(e){return{pageId:e.appRuntimeInfo.currentPageId,sizemode:e.browserSizeMode}}))(it);var at=h(55339),nt=h.n(at);const rt=e=>{const{className:t}=e,s=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["className"]),o=(0,i.classNames)("jimu-icon jimu-icon-component",t);return i.React.createElement(x.SVG,Object.assign({className:o,src:nt()},s))},lt=[{name:"flip",enabled:!0},{name:"preventOverflow",enabled:!0,options:{boundariesElement:"viewport",padding:10}}],ct=1e3;class pt extends i.React.PureComponent{constructor(e){super(e),this.groupLabelMap={1:this.props.intl.formatMessage({id:"mapCentric",defaultMessage:x.defaultMessages.mapCentric}),2:this.props.intl.formatMessage({id:"dataCentric",defaultMessage:x.defaultMessages.dataCentric}),3:this.props.intl.formatMessage({id:"pageElements",defaultMessage:x.defaultMessages.pageElements}),4:this.props.intl.formatMessage({id:"menuAndTollbars",defaultMessage:x.defaultMessages.menuAndTollbars}),9:this.props.intl.formatMessage({id:"section",defaultMessage:i.defaultMessages.section})},this.allGroup={value:ct,label:this.props.intl.formatMessage({id:"all",defaultMessage:x.defaultMessages.all})},this.WidgetCard=({widgetInfo:e})=>{var t,s;return(0,i.jsx)(x.Button,{className:"d-flex align-items-start justify-content-center widget-card",key:e.name,onClick:()=>this.props.onSelect(e),"aria-label":e.label},(0,i.jsx)("div",{className:"d-flex flex-column w-100 h-100 widget-card--content"},(0,i.jsx)("div",{className:"d-flex justify-content-center"},(0,i.jsx)("div",{className:"widget-card-image"},(0,i.jsx)(x.Icon,{className:"w-100 m-0",autoFlip:null===(s=null===(t=e.manifest)||void 0===t?void 0:t.properties)||void 0===s?void 0:s.flipIcon,icon:"string"==typeof e.icon?e.icon:e.icon&&e.icon.svg,color:this.props.theme.colors.dark}))),(0,i.jsx)("div",{className:"flex-grow-1 d-flex align-items-center"},(0,i.jsx)("div",{className:"widget-card-name w-100 text-center text-capitalize text-truncate",css:i.css`
                line-height: 1rem;
                max-height: 2.2rem;
                white-space: normal;
              `,title:e.label},e.label))))},this.WidgetGroup=({group:e})=>{if(!e)return null;const t=this.WidgetCard;return(0,i.jsx)("div",{className:"widget-group w-100 mb-3"},(0,i.jsx)("h4",{className:"group-label w-100 text-break",title:e.label},e.label),(0,i.jsx)("div",{className:"card-grid m-0"},e.itemList.sort(((e,t)=>e.order-t.order)).map(((e,s)=>e?(0,i.jsx)(t,{widgetInfo:e,key:s}):(0,i.jsx)("div",{className:"widget-card",style:{visibility:"hidden"},key:s})))))},this.togglePopper=e=>{this.state.open&&this.props.onClose&&this.props.onClose(e)},this.getGroupList=()=>{var e,t,s;const i=[this.allGroup],o=this.state.commonWidgetList||[],a=null===(e=this.state.jimuForBuilderUtils)||void 0===e?void 0:e.CUSTOM_GROUP;return o.forEach((e=>{"number"!=typeof e.group||i.some((t=>t.value===e.group))||i.push({value:e.group,label:this.getGroupLabel(e.group)})})),(null===(s=null===(t=this.state.jimuForBuilderUtils)||void 0===t?void 0:t.showCustomWidgets)||void 0===s?void 0:s.call(t,o))&&i.push({value:a,label:this.getGroupLabel(a)}),i.filter((e=>!!e.label))},this.changeSelectedGroup=e=>{this.setState({selectedGroup:e.target.value})},this.state={selectedGroup:ct,commonWidgetList:null,remoteCustomWidgetList:null,open:!0,generation:0,jimuForBuilderUtils:null}}componentDidMount(){this.loadJimuForBuilderUtilsPromise=i.cancelablePromise.cancelable(i.moduleLoader.loadModule("jimu-for-builder").then((e=>{var t;this.setState({jimuForBuilderUtils:null==e?void 0:e.utils}),this.groupLabelMap[null===(t=null==e?void 0:e.utils)||void 0===t?void 0:t.CUSTOM_GROUP]=this.props.intl.formatMessage({id:"custom",defaultMessage:x.defaultMessages.custom})})))}componentDidUpdate(e,t){!t.jimuForBuilderUtils&&this.state.jimuForBuilderUtils&&(this.loadCommonWidgetList(this.state.jimuForBuilderUtils.fetchCommonWidgetList),this.loadCustomWidgetList(this.state.jimuForBuilderUtils.fetchRemoteCustomWidgetList))}componentWillUnmount(){var e,t,s;null===(e=this.loadJimuForBuilderUtilsPromise)||void 0===e||e.cancel(),null===(t=this.loadCommonWidgetsPromise)||void 0===t||t.cancel(),null===(s=this.loadCommonWidgetsPromise)||void 0===s||s.cancel()}loadCommonWidgetList(e){e&&(this.loadCommonWidgetsPromise=i.cancelablePromise.cancelable(e().then((e=>{const t=null==e?void 0:e.filter((e=>e.manifest.widgetType!==i.WidgetType.Layout&&this.props.isAccepted(e,this.props.isPlaceholder)));this.setState({generation:this.state.generation+1,commonWidgetList:t})}))))}loadCustomWidgetList(e){e&&(this.loadRemoteCustomWidgetsPromise=i.cancelablePromise.cancelable(e().then((e=>{const t=null==e?void 0:e.filter((e=>this.props.isAccepted(e,this.props.isPlaceholder)));this.setState({generation:this.state.generation+1,remoteCustomWidgetList:t})}))))}getStyle(){const{theme:e}=this.props;return i.css`
      background-color: ${e.colors.palette.light[400]};
      color: ${e.colors.palette.dark[800]};

      .content {
        max-height: 350px;
        height: 480px;
        width: 380px;
        overflow: hidden;
        padding: 0;
      }

      .title {
        font-size: 16px;
        font-weight: 600;
        color: ${e.colors.palette.dark[600]};
      }

      .px-20 {
        padding-left: 20px;
        padding-right: 20px;
      }

      .pt-20 {
        padding-top: 20px;
      }

      .list-container {
        height: calc(100% - 90px);
        overflow-y: auto;
        padding-bottom: 20px;
      }

      .groups {
        font-size: 13px;
        font-weight: 600;
        color: ${e.colors.palette.dark[400]};
      }

      .group-select {
        width: 210px;
      }

      .widget-group {
        .group-label{
          font-size: 13px;
          font-weight: 600;
          color: ${e.colors.palette.dark[400]};
        }
      }

      .card-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        grid-row-gap: 0.5rem;
        grid-column-gap: 0.5rem;
      }

      .widget-card {
        height: 80px;
        padding: 0;
        border: none;

        .widget-card--content {
          padding-top: 12px;
          cursor: pointer;
          background-color: ${e.colors.palette.light[500]};
          &:hover {
            background-color: ${e.colors.palette.light[600]};
          }
        }

        .widget-card-image {
          width: 20px;
          height: 20px;
          &:after {
            display: none;
          }
          img {
            width: 20px;
            height: 20px;
          }
        }

        .widget-card-name {
          line-height: 1rem;
          max-height: 2rem;
          white-space: normal;
          color: ${e.colors.dark};
          padding: 0 10px;
          font-size: 13px;
        }
      }
    `}getGroupLabel(e){return this.groupLabelMap[e]}getCommonGroups(e,t){const s=t===ct?e:null==e?void 0:e.filter((e=>e.group===t)),i={};return null==s||s.forEach((e=>{var t;e.group!==(null===(t=this.state.jimuForBuilderUtils)||void 0===t?void 0:t.CUSTOM_GROUP)&&(i[e.group]||(i[e.group]={label:this.getGroupLabel(e.group),groupId:e.group,itemList:[]}),i[e.group].itemList.push(e))})),i}getCustomGroup(e,t,s){var i,o,a;return s===ct||s===(null===(i=this.state.jimuForBuilderUtils)||void 0===i?void 0:i.CUSTOM_GROUP)?{label:this.getGroupLabel(null===(o=this.state.jimuForBuilderUtils)||void 0===o?void 0:o.CUSTOM_GROUP),groupId:null===(a=this.state.jimuForBuilderUtils)||void 0===a?void 0:a.CUSTOM_GROUP,itemList:(t||[]).concat((null==e?void 0:e.filter((e=>{var t;return e.group===(null===(t=this.state.jimuForBuilderUtils)||void 0===t?void 0:t.CUSTOM_GROUP)})))||[])}:null}render(){var e,t,s;if(!this.state.open)return null;const o=this.WidgetGroup,{commonWidgetList:a,remoteCustomWidgetList:n,selectedGroup:r}=this.state;return(0,i.jsx)(ot,{theme:this.props.theme,placement:null!==(e=this.props.placement)&&void 0!==e?e:"bottom",toggle:this.togglePopper,css:this.getStyle(),version:this.state.generation,modifiers:lt,reference:this.props.referenceElement,open:!0,forceLatestFocusElements:!0},(0,i.jsx)("div",{className:"shadow-lg content",css:this.props.css},(0,i.jsx)("div",{className:"d-flex justify-content-between align-items-center mb-3 px-20 pt-20"},(0,i.jsx)("div",{className:"title"},this.props.intl.formatMessage({id:"addWidget",defaultMessage:x.defaultMessages.addWidget})),(0,i.jsx)(x.Button,{size:"sm",icon:!0,type:"tertiary",onClick:this.togglePopper,title:this.props.intl.formatMessage({id:"close",defaultMessage:i.defaultMessages.close})},(0,i.jsx)(rt,null))),(0,i.jsx)("div",{className:"d-flex justify-content-between align-items-center mb-3 px-20"},(0,i.jsx)("div",{className:"groups"},this.props.intl.formatMessage({id:"category",defaultMessage:x.defaultMessages.category})),(0,i.jsx)(x.Select,{className:"group-select",size:"sm",value:r,onChange:this.changeSelectedGroup},this.getGroupList().map(((e,t)=>(0,i.jsx)("option",{value:e.value,key:t,selected:e.value===r},e.label))))),(0,i.jsx)("div",{className:"w-100 list-container px-20"},!a&&(0,i.jsx)(x.Loading,{type:x.LoadingType.Secondary}),a&&Object.values(this.getCommonGroups(a,r)).sort(((e,t)=>e.groupId-t.groupId)).map(((e,t)=>(0,i.jsx)(o,{key:t,group:e}))),(null===(s=null===(t=this.state.jimuForBuilderUtils)||void 0===t?void 0:t.showCustomWidgets)||void 0===s?void 0:s.call(t,a))&&(0,i.jsx)(o,{group:this.getCustomGroup(a,n,r)}))))}}pt.defaultProps={isPlaceholder:!1,isAccepted:()=>!0};const dt=(0,b.withTheme2)((0,i.injectIntl)(pt));var ut=h(96262);function mt(e){var t,s,o,a;const{template:n,onClick:r}=e,l=(0,i.getAppStore)().getState().appContext.locale,c=null!==(s=null===(t=n.i18nLabel)||void 0===t?void 0:t[l])&&void 0!==s?s:n.label,p=null!==(a=null===(o=n.i18nDescription)||void 0===o?void 0:o[l])&&void 0!==a?a:n.description,d=null!=n.gifThumbnail,u="templage_desc_"+n.name,m=i.React.useMemo((()=>i.css`
    transform: ${(0,i.getAppStore)().getState().appContext.isRTL&&n.flipThumbnail?"scaleX(-1);":""}  ;
  `),[n]);return(0,i.jsx)("div",{className:"block-item"},(0,i.jsx)(x.Tooltip,{title:p},(0,i.jsx)(x.Button,{role:"option","aria-label":c,"aria-describedby":u,onClick:r,className:"block-item--icon p-0"},(0,i.jsx)("img",{className:(0,i.classNames)("default-icon",{"multiple-icon":d}),css:m,src:n.thumbnail,width:n.thumbnailWidth/2,height:n.thumbnailHeight/2}),d&&(0,i.jsx)("img",{className:(0,i.classNames)("gif-icon",{"multiple-icon":d}),css:m,src:n.gifThumbnail}))),(0,i.jsx)("span",{"aria-hidden":!0,className:"block-item-label text-center mt-2",css:i.css`max-width: ${n.thumbnailWidth/2}px`},c),(0,i.jsx)("span",{"aria-hidden":!0,className:"sr-only",id:u},p))}function gt(e){const{templates:t,onItemSelect:s}=e,o=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["templates","onItemSelect"]),a=i.React.useMemo((()=>(0,b.getBuilderThemeVariables)()),[]),n=i.React.useMemo((()=>i.css`
    width: auto;
    padding: 20px;
    background-color: ${a?a.colors.palette.light[300]:"var(--light-300)"};
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 10px;
    grid-column-gap: 10px;

    .block-item {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      cursor: pointer;
      padding: 0;

      .jimu-btn {
        border-radius: unset !important;
      }

      .block-item--icon {
        background: ${a?a.colors.palette.light[200]:"var(--light-200)"};
        border: none;
        position: relative;

        .default-icon {
          opacity: 1;
        }
        .gif-icon {
          opacity: 0;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      }
      .block-item--icon:hover {
        outline: 2px solid ${a?a.colors.palette.primary[600]:"var(--primary-600)"};
        .default-icon.multiple-icon {
          opacity: 0;
        }
        .gif-icon {
          opacity: 1;
        }
      }

      .block-item-label {
        color: ${a?a.colors.palette.dark[400]:"var(--dark-400)"};
      }
    }

    .size-mode-SMALL & .block-item {
      width: 140px;
      height: auto;
    }
  `),[a]);return(0,i.jsx)("div",Object.assign({css:n},o,{role:"listbox"}),t.map((e=>(0,i.jsx)(mt,{key:e.name,template:e,onClick:()=>s(e)}))))}class ht extends i.React.PureComponent{constructor(){super(...arguments),this.onTabSelect=e=>{this.props.onTabSelect(e)}}render(){const{theme:e}=this.props;return(0,i.jsx)("div",{className:"w-100 h-100"},(0,i.jsx)("h5",{className:"pt-3 px-4 mb-2 text-dark-600 text-truncate",title:this.props.formatMessage("addPage")},this.props.formatMessage("addPage")),(0,i.jsx)(x.Tabs,{defaultValue:"fullScreenApp",fill:!0,type:"underline",css:i.css`
            height: calc(100% - 49px);
            .tab-content {
              height: calc(100% - 30px);
              .tab-pane {
                height: 100%;
                overflow-y: scroll;
              }
            }
            .jimu-nav {
              padding-left: ${e&&e.sizes[4]};
              padding-right: ${e&&e.sizes[4]};
            }
            .nav-item {
              width: 50%;
            }
          `,onChange:this.onTabSelect},(0,i.jsx)(x.Tab,{id:"fullScreenApp",title:this.props.formatMessage("fullScreenApp"),className:x.FOCUSABLE_CONTAINER_CLASS},(0,i.jsx)(gt,{className:(0,i.classNames)({[x.FOCUSABLE_CONTAINER_CLASS]:"fullScreenApp"===this.props.tabId}),templates:(0,ut.getFullScreenPageTemplates)(),onItemSelect:this.props.onItemSelect})),(0,i.jsx)(x.Tab,{id:"scrollingPage",title:this.props.formatMessage("scrollingPage"),className:x.FOCUSABLE_CONTAINER_CLASS},(0,i.jsx)(gt,{className:(0,i.classNames)({[x.FOCUSABLE_CONTAINER_CLASS]:"scrollingPage"===this.props.tabId}),templates:(0,ut.getScrollingPageTemplates)(),onItemSelect:this.props.onItemSelect}))))}}const vt=[{name:"preventOverflow",options:{boundariesElement:"viewport",padding:{bottom:20}}}];class ft extends i.React.PureComponent{constructor(e){super(e),this.togglePopper=()=>{var e;this.state.open&&this.props.onClose&&this.props.onClose(),this.state.open&&(null===(e=this.props.referenceElement)||void 0===e||e.focus()),this.setState({open:!this.state.open})},this.tabSelect=e=>{this.setState({tabId:e})},this.onItemSelect=e=>{this.props.onClose(),this.props.onItemSelect(e)},this.state={open:!0,tabId:"fullScreenApp"}}render(){const{referenceElement:e,theme:t}=this.props;return(0,i.jsx)(ot,{placement:"bottom",theme:this.props.theme,reference:e,offset:[0,10],open:!0,toggle:this.togglePopper,showArrow:!0,modifiers:vt,forceLatestFocusElements:!0},(0,i.jsx)("div",{css:i.css`
            max-height: 640px;
            height: calc(100vh - 150px);
            overflow: hidden;
          `},(0,i.jsx)(ht,{theme:t,tabId:this.state.tabId,onTabSelect:this.tabSelect,formatMessage:this.props.formatMessage,onItemSelect:this.onItemSelect})))}}const yt=[{name:"preventOverflow",options:{altAxis:!0,boundariesElement:"viewport",padding:{bottom:20}}},{name:"flip",options:{fallbackPlacements:["right","left"]}}];function bt(e){const{title:t,templates:s,referenceElement:o,onItemSelect:a,onClose:n}=e,r=i.React.useMemo((()=>e.theme||(0,b.getBuilderThemeVariables)()),[]),l=i.React.useMemo((()=>i.css`
    min-width: 300px;
    width: auto;
    border: 1px solid ${r?r.colors.palette.light[600]:"var(--light-600)"};
    box-shadow: 0 4px 20px 4px rgba(0,0,0,0.50);

    .template-content {
      max-height: 600px;
      height: ${t?"calc(100% - 50px)":"100%"};
      overflow: auto;
    }

    .size-mode-SMALL & .template-content {
      width: 320px;
    }
  `),[r,t]),c=i.React.useCallback((()=>{null==n||n(),"function"==typeof(null==o?void 0:o.focus)&&i.lodash.defer((()=>{null==o||o.focus()}))}),[n,o]);return(0,i.jsx)(ot,{placement:"bottom",theme:r,css:l,reference:o,offset:[0,10],toggle:c,open:!0,showArrow:!0,modifiers:yt},t&&(0,i.jsx)("h5",{className:"text-dark-600 text-truncate title px-4 pt-3 mb-0"},t),(0,i.jsx)("div",{className:"template-content"},(0,i.jsx)(gt,{templates:s,onItemSelect:a})))}var xt=h(59216),St=h.n(xt);const wt=e=>{const{className:t}=e,s=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["className"]),o=(0,i.classNames)("jimu-icon jimu-icon-component",t);return i.React.createElement(x.SVG,Object.assign({className:o,src:St()},s))};var kt=h(34750),jt=h.n(kt);const Ct=e=>{const{className:t}=e,s=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["className"]),o=(0,i.classNames)("jimu-icon jimu-icon-component",t);return i.React.createElement(x.SVG,Object.assign({className:o,src:jt()},s))};class It extends i.React.PureComponent{constructor(e){super(e),this.initData=()=>{if(Array.isArray(this.props.value)&&this.props.value.length)return!1;const e=this.deepClone(this.state.option);e.ruleOptionName=this.props.intl.formatMessage({id:"option",defaultMessage:x.defaultMessages.option})+0;const t=[e];this.props.onChange(t)},this.onOptionChange=(e,t,s,i)=>{const o=this.deepClone(this.props.value);o[t].rule[e][s]=i,this.props.onChange(o,t)},this.onSelectChange=(e,t,s)=>{const i=e[0];if(!i)return;const o=this.deepClone(this.props.value),a=i.name;o[s].rule[t].jimuFieldName=a,this.props.onChange(o,s)},this.addOption=()=>{const e=Array.isArray(this.props.value),t=e?this.props.value.length:0,s=this.createOptionText(t),i=this.deepClone(this.state.option);i.ruleOptionName=s;const o=e?this.deepClone(this.props.value):[];o.push(i),this.props.onChange(o)},this.createOptionText=e=>{const t=this.props.intl.formatMessage({id:"option",defaultMessage:x.defaultMessages.option})+e;if(!this.isOptionNameRepeat(t))return t;const s=e+1;return this.createOptionText(s)},this.deleteOption=e=>{const t=this.deepClone(this.props.value);t.splice(e,1),this.props.onChange(t)},this.deleteAll=()=>{this.props.onChange([])},this.toggleOptionNameDisplay=(e,t)=>{const s=this.deepClone(this.props.value);let i=s[e].isEditOptionName;if(i=!!i,s[e].isEditOptionName=!i,t){const i=t;!this.isOptionNameRepeat(i)&&i&&(s[e].ruleOptionName=i)}this.props.onChange(s)},this.isOptionNameRepeat=e=>{if(!Array.isArray(this.props.value))return!1;let t=!1;return this.props.value.forEach((s=>{s.ruleOptionName===e&&(t=!0)})),t},this.deepClone=e=>{const t=Array.isArray(e)?[]:{};for(const s in e){const i=("object"==typeof e[s]||"function"==typeof e[s])&&null!==e[s];t[s]=i?this.deepClone(e[s]):e[s]}return t},this.setInputRef=e=>{e&&(e.select(),e.focus())},this.createRuleOptionElement=(e,t,s,o)=>{const a=t.jimuFieldName?(0,i.Immutable)([t.jimuFieldName]):(0,i.Immutable)([]);return(0,i.jsx)("div",{className:"select-down-con",key:t.jimuFieldName||s},this.props.useDataSource&&(0,i.jsx)("div",{className:"sort-field-selector"},(0,i.jsx)(Me.FieldSelector,{useDataSources:e,onChange:(e,t)=>{this.onSelectChange(e,s,o)},selectedFields:a,isSearchInputHidden:!0,isDataSourceDropDownHidden:!0,useDropdown:!0})),[{getTitle:()=>this.nls("ascending"),order:i.OrderRule.Asc,getIcon:()=>h(70502)},{getTitle:()=>this.nls("decending"),order:i.OrderRule.Desc,getIcon:()=>h(78115)}].map(((e,a,n)=>(0,i.jsx)(x.Button,{key:a,title:e.getTitle(),type:t.order===e.order?"primary":"secondary",className:"sort-button "+(this.props.singleRowItemOnly&&t.order!==e.order?"collapse":""),onClick:()=>{this.onOptionChange(s,o,"order",this.props.singleRowItemOnly?[...n,n[0]][a+1].order:e.order)}},(0,i.jsx)(x.Icon,{size:"12",icon:e.getIcon(),className:"sort-arrow-down-icon"})))))},this.createOptionNameElement=(e,t)=>{const s=e.ruleOptionName,o=this.props.intl.formatMessage({id:"optionNamePlaceholder",defaultMessage:x.defaultMessages.optionNamePlaceholder}),a=(0,i.jsx)(x.TextInput,{className:"flex-grow-1 h-100",size:"sm",type:"text",defaultValue:s,onAcceptValue:e=>{this.toggleOptionNameDisplay(t,e)},ref:e=>{this.setInputRef(e)},placeholder:o,title:s});return(0,i.jsx)("div",{className:"option-name d-flex align-items-center flex-grow-1","aria-label":s},e.isEditOptionName?a:(0,i.jsx)("span",{title:s,onDoubleClick:()=>{this.toggleOptionNameDisplay(t)}},s),(0,i.jsx)(x.Button,{size:"sm",type:"tertiary",icon:!0,className:"padding-0 option-name-icon-con",title:this.nls("edit"),onClick:()=>{this.toggleOptionNameDisplay(t)}},(0,i.jsx)(wt,{size:"s",className:"option-name-icon"})))},this.createOptionElement=(e,t,s)=>{let o;o=(0,i.jsx)("div",{className:"close-con text-right"},(0,i.jsx)(x.Button,{size:"sm",icon:!0,type:"tertiary",className:"padding-0",title:this.nls("deleteOption"),onClick:()=>{this.deleteOption(s)}},(0,i.jsx)(rt,{size:this.props.singleRowItemOnly?14:12,className:"sort-arrow-down-icon"})));const a=()=>t.rule.map(((t,i)=>this.createRuleOptionElement(e,t,i,s)));return(0,i.jsx)("div",{className:"select-con",key:s},this.props.singleRowItemOnly&&(0,i.jsx)(i.React.Fragment,null,(0,i.jsx)("div",{className:"option-name-con"},(0,i.jsx)(x.Icon,{size:14,icon:h(17720)}),a(),o))||(0,i.jsx)(i.React.Fragment,null,(0,i.jsx)("div",{className:"option-name-con d-flex align-items-center"},(()=>this.createOptionNameElement(t,s))(),o),a()))},this.nls=e=>this.props.intl?this.props.intl.formatMessage({id:e,defaultMessage:x.defaultMessages[e]}):e,this.onDataSourceCreated=e=>{},this.state={option:{ruleOptionName:"",isEditOptionName:!1,rule:[{jimuFieldName:"",order:i.OrderRule.Asc}]}}}componentDidMount(){this.initData()}componentDidUpdate(e,t){var s,i,o;(null===(s=null==e?void 0:e.useDataSource)||void 0===s?void 0:s.dataSourceId)!==(null===(o=null===(i=this.props)||void 0===i?void 0:i.useDataSource)||void 0===o?void 0:o.dataSourceId)&&Promise.resolve(!0).then((()=>{this.initData()}))}render(){const{value:e}=this.props,t=this.props.intl.formatMessage({id:"invalidExpression",defaultMessage:x.defaultMessages.invalidExpression});return(0,i.jsx)("div",{className:(0,i.classNames)("sort-con",this.props.singleRowItemOnly&&"single-row-item",{[this.props.className]:!!this.props.className})},(0,i.jsx)("div",null,(0,i.jsx)(x.Button,{type:"tertiary",className:"add-option-btn"},(0,i.jsx)(Ct,{size:"s",className:"add-option-icon"}),(0,i.jsx)("span",{onClick:this.addOption},this.props.intl.formatMessage({id:"addOption",defaultMessage:x.defaultMessages.addOption}))),(0,i.jsx)(i.DataSourceComponent,{useDataSource:this.props.useDataSource,onDataSourceCreated:this.onDataSourceCreated},(s=>Array.isArray(e)?(this.props.optionRenderFunction||(()=>e.map(((e,t)=>{var s;return this.createOptionElement((0,i.Immutable)([null===(s=this.props.useDataSource)||void 0===s?void 0:s.asMutable({deep:!0})]),e,t)}))))(this.props,this.createOptionElement):t)),Array.isArray(e)&&0===e.length&&(0,i.jsx)("div",{className:"no-sort-remind"},(0,i.jsx)("div",null,this.props.intl.formatMessage({id:"noOptionRemindText",defaultMessage:x.defaultMessages.noOptionRemindText})),(0,i.jsx)("div",null,this.props.intl.formatMessage({id:"pleaceAddOne",defaultMessage:x.defaultMessages.pleaceAddOne})))))}}const Pt=(0,b.withStyles)((0,i.injectIntl)(It),"SortSetting");var Ot=h(60843),Nt=h.n(Ot);const Tt=e=>{const{className:t}=e,s=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["className"]),o=(0,i.classNames)("jimu-icon jimu-icon-component",t);return i.React.createElement(x.SVG,Object.assign({className:o,src:Nt()},s))};var Mt=h(18656),Rt=h.n(Mt);const Lt=e=>{const{className:t}=e,s=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["className"]),o=(0,i.classNames)("jimu-icon jimu-icon-component",t);return i.React.createElement(x.SVG,Object.assign({className:o,src:Rt()},s))};const At=e=>{const t=x.hooks.useTranslate(),{vertical:s=!1,onChange:o,autoFlip:a=!0,className:n,size:r="sm"}=e,l=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["vertical","onChange","autoFlip","className","size"]);return i.React.createElement(x.AdvancedButtonGroup,Object.assign({size:r,className:(0,i.classNames)("setting--direction-selector",n)},l),i.React.createElement(x.Button,{size:r,title:t("horizontal"),type:"default",icon:!0,active:!s,onClick:()=>o(!1)},i.React.createElement(Tt,{autoFlip:a})),i.React.createElement(x.Button,{size:r,title:t("vertical"),type:"default",icon:!0,active:s,onClick:()=>o(!0)},i.React.createElement(Lt,null)))};var Dt;!function(e){e.Auto="AUTO",e.Custom="CUSTOM"}(Dt||(Dt={}));class Et extends i.React.PureComponent{constructor(e){super(e),this.toggleDropdown=()=>{this.setState((e=>({dropdownOpen:!e.dropdownOpen})))},this.state={dropdownOpen:!1},this._onAutoSelected=this.onSelect.bind(this,Dt.Auto),this._onCustomSelected=this.onSelect.bind(this,Dt.Custom)}onSelect(e){this.props.mode!==e&&this.props.onChange(e)}getStyle(){return i.css`
      .auto-dropdown.jimu-dropdown {
        width: 26px;
        height: 26px;

        .btn {
          padding: 0 !important;
        }
      }

      & > .jimu-dropdown .jimu-dropdown-button,
      & > .jimu-dropdown .jimu-dropdown-button:hover {
        height: 26px;
        padding: 0 0.375rem;
      }
    `}autoInput(){return(0,i.jsx)(x.Input,{style:{width:"110px"},css:i.css`
          background-color: var(--light-600);
          border-color: var(--light-600);
          color: var(--black);
          height: 1.625rem;
          border-width: 0;
          padding: 0 0.25rem;
        `,disabled:!0,value:this.props.intl.formatMessage({id:"auto"})})}render(){const{mode:e,intl:t}=this.props,s=t.formatMessage({id:"auto"}),o=t.formatMessage({id:"custom"});return(0,i.jsx)("div",{className:"d-flex",css:this.getStyle()},(0,i.jsx)(x.Dropdown,{className:"auto-dropdown",isOpen:this.state.dropdownOpen,toggle:this.toggleDropdown},(0,i.jsx)(x.DropdownButton,{icon:!0}),(0,i.jsx)(x.DropdownMenu,null,(0,i.jsx)(x.DropdownItem,{onClick:this._onAutoSelected},(0,i.jsx)("span",{css:i.css`width: 1rem;`},e===Dt.Auto&&(0,i.jsx)(Je,{size:"s"})),s),(0,i.jsx)(x.DropdownItem,{onClick:this._onCustomSelected},(0,i.jsx)("span",{css:i.css`width: 1rem;`},e===Dt.Custom&&(0,i.jsx)(Je,{size:"s"})),o))),e===Dt.Auto&&this.autoInput(),e===Dt.Custom&&this.props.children)}}const Ut=(0,i.injectIntl)(Et),Bt=e=>{const{title:t,children:s,selected:o,onClick:a}=e,n=(()=>{var e,t,s;const o=(0,b.useTheme)(),a=null===(e=null==o?void 0:o.colors)||void 0===e?void 0:e.palette.primary[600],n=null===(t=null==o?void 0:o.colors)||void 0===t?void 0:t.palette.light[200],r=null===(s=null==o?void 0:o.colors)||void 0===s?void 0:s.black;return i.React.useMemo((()=>i.css`
      width: 100%;
      height:  ${i.polished.rem(50)};
      padding: ${i.polished.rem(8)}  ${i.polished.rem(12)};
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${r};
      background-color: ${n};
      position: relative;
      &.selected {
        outline: 3px solid ${a};
      }
      >.overlay {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;
      }
  `),[a,n,r])})();return(0,i.jsx)("div",{css:n,title:t,className:(0,i.classNames)("quick-style-item",{selected:o}),onClick:a},(0,i.jsx)("div",{className:"overlay"}),s)};const $t=[{name:"preventOverflow",options:{altAxis:!0}},{name:"flip",options:{fallbackPlacements:["bottom-end","top-end"]}}],Ft=e=>{const{open:t,reference:s,onClose:o,placement:a="right-start",children:n}=e,r=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["open","reference","onClose","placement","children"]),l=(()=>{var e,t,s,o;const a=(0,b.getBuilderThemeVariables)(),n=null===(e=null==a?void 0:a.colors)||void 0===e?void 0:e.palette.dark[600],r=null===(t=null==a?void 0:a.colors)||void 0===t?void 0:t.palette.dark[800],l=null===(s=null==a?void 0:a.colors)||void 0===s?void 0:s.palette.light[300],c=null===(o=null==a?void 0:a.colors)||void 0===o?void 0:o.palette.light[600];return i.React.useMemo((()=>i.css`
      background-color: ${l};
      color: ${n};
      border: 1px solid ${c};
      > .popper-box {
        > .panel-header {
          color: ${n};
          .action-btn {
            color: ${n};
            &:hover {
              color: ${r};
            }
          }
        }
      }
    `),[n,r,l,c])})(),c=x.hooks.useTranslate(x.defaultMessages);return(0,i.jsx)(x.Popper,Object.assign({css:l,open:t,className:"shadow-2",reference:s,modifiers:$t,placement:a},r),(0,i.jsx)(x.PanelHeader,{className:"px-3 py-2",title:c("quickStyle"),onClose:o}),n)},zt=6,Wt=6;var Gt,_t;!function(e){e.Both="Both",e.GeocodeService="GeocodeService",e.FeatureService="FeatureService"}(Gt||(Gt={})),function(e){e.GeocodeService="GeocodeService",e.FeatureService="FeatureService"}(_t||(_t={}));const Vt="FieldName",Ht="FieldValue",Jt=99,Zt=1e3,qt=20,Kt="__",Qt="objectid",Xt="address",Yt="https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer",es="ArcGIS World Geocoding Service";var ts=h(77756),ss=h(20663);const is=e=>as(e)?es:os(e),os=e=>{if(!e)return"geocoder";const t=e.split("/");return t[t.length-2]||"geocoder"},as=e=>!!e&&/(?:arcgis\.com\/arcgis\/rest\/services\/world\/geocodeserver).*/gi.test(e),ns={jimuName:Qt,alias:"OBJECTID",type:i.JimuFieldType.Number,name:Qt},rs={jimuName:Xt,alias:"ADDRESS",type:i.JimuFieldType.String,name:Xt},ls=(e="")=>({label:e,idField:Qt,fields:{[Qt]:ns,[Xt]:rs}}),cs=(e,t)=>{var s;return(null===(s=t.filter((t=>(null==t?void 0:t.dataSourceId)===(null==e?void 0:e.dataSourceId))))||void 0===s?void 0:s.length)>0},ps=e=>null==e?void 0:e.map((e=>e.configId)),ds=e=>e&&0!==(null==e?void 0:e.length)?`config_${us(e)+1}`:"config_0",us=e=>{var t;const s=null==e?void 0:e.map((e=>{var t;const s=null===(t=null==e?void 0:e.split("_"))||void 0===t?void 0:t.pop();return s?Number(s):0}));return null===(t=null==s?void 0:s.sort(((e,t)=>t-e)))||void 0===t?void 0:t[0]},ms=(e,t)=>{var s;if(!e)return`${t}_output_0`;const i=null===(s=null==e?void 0:e.split("_"))||void 0===s?void 0:s.pop();return`${t}_output_${Number(i)}`};var gs=h(59587);const hs=e=>{const t={overrideItemBlockInfo:({itemBlockInfo:e},t)=>({name:gs.TreeItemActionType.RenderOverrideItem,children:[{name:gs.TreeItemActionType.RenderOverrideItemDroppableContainer,children:[{name:gs.TreeItemActionType.RenderOverrideItemDraggableContainer,children:[{name:gs.TreeItemActionType.RenderOverrideItemBody,children:[{name:gs.TreeItemActionType.RenderOverrideItemMainLine,children:[{name:gs.TreeItemActionType.RenderOverrideItemDragHandle},{name:gs.TreeItemActionType.RenderOverrideItemIcon,autoCollapsed:!0},{name:gs.TreeItemActionType.RenderOverrideItemTitle},{name:gs.TreeItemActionType.RenderOverrideItemCommands}]}]}]}]}]})},s=i.css`
    &{
      max-height: 256px;
      overflow-y: auto;
    }
  `,o=(0,b.useTheme)(),{disPlayField:a,useDataSource:n,onFieldChange:r}=e;return(0,i.jsx)("div",{className:"w-100"},(0,i.jsx)(Me.FieldSelector,{useDataSources:n?(0,i.Immutable)([n]):(0,i.Immutable)([]),onChange:e=>{r(e,a,!0)},selectedFields:(0,i.Immutable)(null==a?void 0:a.map((e=>null==e?void 0:e.name))),isMultiple:!0,isSearchInputHidden:!1,isDataSourceDropDownHidden:!0,useDropdown:!0,useMultiDropdownBottomTools:!0,types:(0,i.Immutable)([i.JimuFieldType.Number,i.JimuFieldType.String])}),(0,i.jsx)("div",{css:s},(0,i.jsx)(gs.List,Object.assign({size:"sm",className:"mt-2",itemsJson:Array.from(a).map(((e,t)=>({itemStateDetailContent:e,itemKey:`${null==e?void 0:e.name}${t}`,itemStateIcon:Me.dataComponentsUtils.getIconFromFieldType(e.type,o),itemStateTitle:e.alias||e.jimuName||e.name,itemStateCommands:[]}))),dndEnabled:!0,onUpdateItem:(e,t)=>{const{itemJsons:s}=t.props,[,i]=s,o=i.map((e=>e.itemStateDetailContent));r(o,a,!0)},isItemFocused:()=>!1},t))))},{useEffect:vs}=i.React,fs=(0,i.Immutable)([Me.AllDataSourceTypes.FeatureLayer,Me.AllDataSourceTypes.SceneLayer]),ys=e=>{var t;const s=x.hooks.useTranslate(x.defaultMessages,i.defaultMessages),{trigger:o,isOpen:a,id:n,datasourceConfig:r,dsConfigItemIndex:l,popperFocusNode:c,toggle:p,updateConfigForLayerOptions:d,onSettingChange:u,hideIconSetting:m}=e,g=(null==r?void 0:r[l])||(0,i.Immutable)({}),{configId:h,label:v,icon:f,searchFields:y,searchExact:b,displayFields:S,hint:w,useDataSource:k}=g,[j,C]=i.React.useState(null),[I,P]=i.React.useState(v);vs((()=>{h&&P(v)}),[h]);const O=(e,t)=>{const s=ps(null==r?void 0:r.asMutable({deep:!0})),i=h||ds(s);let o=r?r.asMutable({deep:!0}):[];const a=null==e?void 0:e.getLabel(),n=N(t),l={configId:i,icon:null,label:a,displayLabel:!0,useDataSource:t,displayFields:n,searchFields:n,hint:"",searchServiceType:_t.FeatureService};return(null==g?void 0:g.configId)?o=o.map((e=>(null==e?void 0:e.configId)===i?l:e)):o.push(l),{dsConfigItem:l,datasourceConfig:o}},N=e=>{var t,s,o,a;const n=i.DataSourceManager.getInstance().getDataSource(null==e?void 0:e.dataSourceId),r=null===(t=n.getLayerDefinition())||void 0===t?void 0:t.displayField,l=null===(s=null==n?void 0:n.getSchema())||void 0===s?void 0:s.fields;let c;const p=[];for(const e in l)(null===(o=null==l?void 0:l[e])||void 0===o?void 0:o.type)!==i.JimuFieldType.Date&&p.push(null==l?void 0:l[e]),(null===(a=null==l?void 0:l[e])||void 0===a?void 0:a.name)===r&&(c=null==l?void 0:l[e]);const d=(null==p?void 0:p.length)>1?p[1]:p[0];return c?[(0,i.Immutable)(c)]:[(0,i.Immutable)(d)]},T=(e,t,s=!1)=>{var o,a;if(!e)return;const n=s?"displayFields":"searchFields";let c=M(e);0===(null==c?void 0:c.length)&&(c=null===(a=null===(o=(0,i.Immutable)(t))||void 0===o?void 0:o.asMutable({deep:!0}))||void 0===a?void 0:a.splice(0,1));const p=null==r?void 0:r.asMutable({deep:!0}),d=null==g?void 0:g.setIn([n],c);null==p||p.splice(l,1,null==d?void 0:d.asMutable({deep:!0})),u((0,i.Immutable)(p))},M=e=>null==e?void 0:e.filter((e=>(null==e?void 0:e.type)!==(null===i.JimuFieldType||void 0===i.JimuFieldType?void 0:i.JimuFieldType.Date))),R=(e,t)=>{const s=null==r?void 0:r.asMutable({deep:!0}),o=null==g?void 0:g.setIn(e,t);null==s||s.splice(l,1,null==o?void 0:o.asMutable({deep:!0})),u((0,i.Immutable)(s))},L=(null==g?void 0:g.useDataSource)?[null===(t=null==g?void 0:g.useDataSource)||void 0===t?void 0:t.asMutable({deep:!0})]:[];return(0,i.jsx)(ts.SidePopper,{isOpen:a,position:"right",toggle:p,trigger:o,title:s("setLayerSource"),backToFocusNode:c},(0,i.jsx)("div",{className:"w-100",css:i.css`height: calc(100% - 40px);overflow: auto;`},(0,i.jsx)(ts.SettingSection,{style:{paddingTop:0}},(0,i.jsx)(ts.SettingRow,{flow:"wrap",label:s("data")},(0,i.jsx)(Me.DataSourceSelector,{closeDataSourceListOnChange:!0,types:fs,useDataSources:(0,i.Immutable)(L),disableRemove:()=>!0,mustUseDataSource:!0,onChange:e=>{e&&e.length>0&&(e=>{i.DataSourceManager.getInstance().createDataSourceByUseDataSource((0,i.Immutable)(e)).then((e=>{const t=(s=e)?s.type===i.DataSourceTypes.SceneLayer?s.getAssociatedDataSource():s:null;var s;return t||Promise.reject(Error("")),t})).then((t=>{const{datasourceConfig:s}=O(t,e);d((0,i.Immutable)(s))}))})(e[0])},widgetId:n}))),(null==g?void 0:g.configId)&&j&&(0,i.jsx)("div",null,(0,i.jsx)(ts.SettingSection,null,(0,i.jsx)(ts.SettingRow,{flow:"wrap",label:s("label")},(0,i.jsx)(x.TextInput,{size:"sm",value:I||"",title:I||"",onAcceptValue:e=>{e?(P(null==e?void 0:e.trim()),R(["label"],null==e?void 0:e.trim())):P(v)},onChange:e=>{var t;const s=null===(t=null==e?void 0:e.target)||void 0===t?void 0:t.value;P(s)},className:"w-100",placeholder:s("findAddressOrPlace")}))),!m&&(0,i.jsx)(ts.SettingSection,null,(0,i.jsx)(ts.SettingRow,{label:s("searchIcon")},(0,i.jsx)(ss.IconPicker,{icon:f,onChange:e=>{R(["icon"],e)},configurableOption:"none"}))),(0,i.jsx)(ts.SettingSection,{title:s("searchOptions")},(0,i.jsx)(ts.SettingRow,{flow:"wrap",label:s("selectSearchFields")},(0,i.jsx)(Me.FieldSelector,{useDataSources:k?(0,i.Immutable)([k]):(0,i.Immutable)([]),onChange:e=>{T(e,y)},selectedFields:(0,i.Immutable)(null==y?void 0:y.map((e=>null==e?void 0:e.name))),isMultiple:!0,isSearchInputHidden:!1,isDataSourceDropDownHidden:!0,useDropdown:!0,useMultiDropdownBottomTools:!0,types:(0,i.Immutable)([i.JimuFieldType.Number,i.JimuFieldType.String])}),(0,i.jsx)("div",{className:"mt-2"},(0,i.jsx)(x.Checkbox,{checked:b,onClick:e=>{const t=e.currentTarget;t&&R(["searchExact"],t.checked)},className:"mr-1"})," ",s("exactMatch"))),(0,i.jsx)(ts.SettingRow,{flow:"wrap",label:s("displayFields")},(0,i.jsx)(hs,{disPlayField:S||[],onFieldChange:T,useDataSource:k})),(0,i.jsx)(ts.SettingRow,{flow:"wrap",label:s("searchHint")},(0,i.jsx)(x.TextInput,{size:"sm",value:w||"",title:w||"",onChange:e=>{var t;const s=null===(t=null==e?void 0:e.target)||void 0===t?void 0:t.value;R(["hint"],s)},className:"w-100",placeholder:s("findAddressOrPlace")})))),(null==L?void 0:L[0])&&(0,i.jsx)("div",{className:"waiting-for-database"},(0,i.jsx)(i.DataSourceComponent,{useDataSource:(0,i.Immutable)(L[0]),onDataSourceCreated:e=>{C(e)}}))))};var bs=h(79964),xs=h.n(bs);const Ss=e=>{const{className:t}=e,s=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["className"]),o=(0,i.classNames)("jimu-icon jimu-icon-component",t);return i.React.createElement(x.SVG,Object.assign({className:o,src:xs()},s))};const{useEffect:ws,useRef:ks}=i.React,js=new(0,i.esri.Sanitizer);var Cs;!function(e){e.Pass="Pass",e.NotHttps="Not_Https",e.InvalidURL="Invalid_URL"}(Cs||(Cs={}));const Is=e=>{var t,s,o,a,n,r;const l=x.hooks.useTranslate(x.defaultMessages,i.defaultMessages),c=ks((e=>{})),p=(0,b.useTheme)(),{id:d,trigger:u,toggle:m,isOpen:g,datasourceConfig:h,dsConfigItemIndex:v,popperFocusNode:f,onSettingChange:y,updateConfigForLayerOptions:S,hideIconSetting:w}=e,k=(null==h?void 0:h[v])||(0,i.Immutable)({}),{configId:j,label:C,icon:I,geocodeURL:P,hint:O}=k,[N,T]=i.React.useState(P),[M,R]=i.React.useState(!1),[L,A]=i.React.useState(C),[D,E]=i.React.useState(Cs.Pass);ws((()=>{g&&((null==k?void 0:k.geocodeURL)?(R(!0),E(Cs.Pass),T(P),A(null==k?void 0:k.label)):(R(!1),T(""),A(es),D===Cs.Pass&&E(Cs.InvalidURL)))}),[v,j,g]),ws((()=>{c.current=i.lodash.debounce((e=>{U(e).then((e=>{!M&&R(!0),E(null==e?void 0:e.urlCheckResultType)})).catch((e=>{E(Cs.InvalidURL)}))}),500)}),[]);const U=e=>{return t=void 0,s=void 0,a=function*(){const t=new RegExp("^(([h][t]{2}[p][s])?://)");if(!e||!t.test(e))return Promise.resolve({urlCheckResultType:Cs.NotHttps});try{return(0,i.loadArcGISJSAPIModules)(["esri/request"]).then((t=>{const[s]=t;return s(e,{query:{f:"json"},responseType:"json"}).then((e=>{const t=(null==e?void 0:e.data)||{};if(null==t?void 0:t.capabilities){const e=(null==t?void 0:t.singleLineAddressField)||{};return Promise.resolve({urlCheckResultType:Cs.Pass,singleLineFieldName:null==e?void 0:e.name})}return Promise.resolve({urlCheckResultType:Cs.InvalidURL})}))}))}catch(e){return Promise.resolve({urlCheckResultType:Cs.InvalidURL})}},new((o=void 0)||(o=Promise))((function(e,i){function n(e){try{l(a.next(e))}catch(e){i(e)}}function r(e){try{l(a.throw(e))}catch(e){i(e)}}function l(t){var s;t.done?e(t.value):(s=t.value,s instanceof o?s:new o((function(e){e(s)}))).then(n,r)}l((a=a.apply(t,s||[])).next())}));var t,s,o,a},B=(e,t)=>{const s=null==h?void 0:h.asMutable({deep:!0}),o=null==k?void 0:k.setIn(e,t);null==s||s.splice(v,1,null==o?void 0:o.asMutable({deep:!0})),y((0,i.Immutable)(s))},$=js.sanitize(l("exampleUrl",{url:`${Yt}`}));return(0,i.jsx)(ts.SidePopper,{isOpen:g,position:"right",toggle:m,trigger:u,title:l("setLocatorSource"),backToFocusNode:f},(0,i.jsx)("div",{className:"w-100",css:i.css`height: calc(100% - 40px);overflow: auto;`},(0,i.jsx)(ts.SettingSection,{style:{paddingTop:0}},(0,i.jsx)(ts.SettingRow,{flow:"wrap",label:l("locatorUrl")},(0,i.jsx)(x.TextArea,{placeholder:l("enterUrl"),value:N||"",style:{minHeight:i.polished.rem(100)},onChange:e=>{const t=e.target.value;T(t),c.current(t)},onBlur:e=>{var t;const s=e.target.value;null===(t=c.current)||void 0===t||t.cancel(),U(s).then((e=>{(null==e?void 0:e.urlCheckResultType)===Cs.Pass?(E(null==e?void 0:e.urlCheckResultType),((e,t)=>{const s=ps(null==h?void 0:h.asMutable({deep:!0})),o=j||ds(s);let a=h?h.asMutable({deep:!0}):[];const n=is(e),r={configId:o,icon:null,label:n,hint:"",outputDataSourceId:`${d}_output_${o}`,geocodeURL:e,searchServiceType:_t.GeocodeService,singleLineFieldName:t};(null==k?void 0:k.configId)?a=h.map((e=>(null==e?void 0:e.configId)===o?r:e)):a.push(r),S((0,i.Immutable)(a))})(s,null==e?void 0:e.singleLineFieldName)):P&&(E(Cs.Pass),T(P))})).catch((e=>{E(Cs.Pass),T(P)}))}}),(0,i.jsx)("div",{className:"mt-2 text-break"},(0,i.jsx)("i",{style:{fontSize:i.polished.rem(12),color:null===(s=null===(t=p.colors)||void 0===t?void 0:t.palette)||void 0===s?void 0:s.dark[500]},dangerouslySetInnerHTML:{__html:$}})),D!==Cs.Pass&&M&&(0,i.jsx)("div",{className:"d-flex w-100 align-items-center justify-content-between mt-1"},(0,i.jsx)(Ss,{size:16,color:null===(a=null===(o=p.colors)||void 0===o?void 0:o.palette)||void 0===a?void 0:a.danger[500]}),(0,i.jsx)("div",{style:{width:"calc(100% - 20px)",margin:"0 4px",overflow:"hidden",textOverflow:"ellipsis",color:null===(r=null===(n=p.colors)||void 0===n?void 0:n.palette)||void 0===r?void 0:r.danger[500]}},D===Cs.NotHttps?l("onlySupportedHTTPS"):l("invalidUrlMessage"))))),D===Cs.Pass&&j&&(0,i.jsx)("div",null,(0,i.jsx)(ts.SettingSection,null,(0,i.jsx)(ts.SettingRow,{flow:"wrap",label:l("label")},(0,i.jsx)(x.TextInput,{size:"sm",value:L||"",title:L||"",onChange:e=>{var t;const s=null===(t=null==e?void 0:e.target)||void 0===t?void 0:t.value;A(s)},onAcceptValue:e=>{e?(A(null==e?void 0:e.trim()),B(["label"],null==e?void 0:e.trim())):A(C)},className:"w-100",placeholder:l("findAddressOrPlace")}))),!w&&(0,i.jsx)(ts.SettingSection,null,(0,i.jsx)(ts.SettingRow,{label:l("searchIcon")},(0,i.jsx)(ss.IconPicker,{icon:I,onChange:e=>{B(["icon"],e)},configurableOption:"none"}))),(0,i.jsx)(ts.SettingSection,{title:l("searchOptions")},(0,i.jsx)(ts.SettingRow,{flow:"wrap",label:l("searchHint")},(0,i.jsx)(x.TextInput,{size:"sm",value:O||"",title:O||"",onChange:e=>{var t;const s=null===(t=null==e?void 0:e.target)||void 0===t?void 0:t.value;B(["hint"],s)},className:"w-100",placeholder:l("findAddressOrPlace")}))))))},Ps=h(40325),Os=e=>{const t=x.hooks.useTranslate(i.defaultMessages,x.defaultMessages),{className:s,datasourceConfig:o,useDataSources:a,dsConfigItemIndex:n,isCreateOutputDs:r,showSourcePanel:l,showNewSourceItem:c,id:p,onDsConfigIdChange:d,updateConfigForLayerOptions:u,hideSidePopper:m}=e,g=i.ReactRedux.useSelector((e=>{var t,s,i;return null===(i=null===(s=null===(t=null==e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.appConfig)||void 0===s?void 0:s.widgets)||void 0===i?void 0:i[p]})),h={isItemFocused:(e,t)=>{const{itemJsons:[s,i]}=t.props;return l&&i.indexOf(s)===n},overrideItemBlockInfo:({itemBlockInfo:e},t)=>({name:gs.TreeItemActionType.RenderOverrideItem,children:[{name:gs.TreeItemActionType.RenderOverrideItemDroppableContainer,children:[{name:gs.TreeItemActionType.RenderOverrideItemDraggableContainer,children:[{name:gs.TreeItemActionType.RenderOverrideItemBody,children:[{name:gs.TreeItemActionType.RenderOverrideItemMainLine,children:[{name:gs.TreeItemActionType.RenderOverrideItemDragHandle},{name:gs.TreeItemActionType.RenderOverrideItemIcon,autoCollapsed:!0},{name:gs.TreeItemActionType.RenderOverrideItemTitle},{name:gs.TreeItemActionType.RenderOverrideItemDetailToggle},{name:gs.TreeItemActionType.RenderOverrideItemCommands}]}]}]}]}]})};return(0,i.jsx)("div",{className:`w-100 mt-2 ${s||""}`},(0,i.jsx)(gs.List,Object.assign({className:"w-100",itemsJson:Array.from(o).map(((e,s)=>{var a;return{itemStateDetailContent:e,itemKey:`${s}`,itemStateTitle:null==e?void 0:e.label,itemStateIcon:{icon:null===(a=e.icon)||void 0===a?void 0:a.svg},itemStateCommands:[{label:t("deleteOption"),iconProps:()=>({icon:Ps,size:12}),action:()=>{(e=>{const t=null==o?void 0:o.asMutable({deep:!0});null==t||t.splice(e,1),u((0,i.Immutable)(t)),m()})(s)}}]}})),dndEnabled:!0,renderOverrideItemDetailToggle:(e,s)=>{var o;const{itemJsons:n}=s.props,[l]=n,c=null==l?void 0:l.itemStateDetailContent,p=(null==c?void 0:c.searchServiceType)===_t.GeocodeService,d=p?null==c?void 0:c.outputDataSourceId:null===(o=null==c?void 0:c.useDataSource)||void 0===o?void 0:o.dataSourceId,u=!!r&&!((e,t=!1)=>{let s;if(t){const t=(null==g?void 0:g.outputDataSources)||[];s=(null==t?void 0:t.filter((t=>e===t)).length)>0}else s=(null==a?void 0:a.filter((t=>e===t.dataSourceId)).length)>0;return s&&e})(d,p);return u?(0,i.jsx)(x.Alert,{buttonType:"tertiary",form:"tooltip",size:"small",type:"error",text:t("dataSourceCreateError")}):""},onUpdateItem:(e,t)=>{const{itemJsons:s}=t.props,[,o]=s,a=o.map((e=>e.itemStateDetailContent));d(null),u((0,i.Immutable)(a))},onClickItemBody:(e,t)=>{var s;const{itemJsons:[i]}=t.props,o=(null===(s=null==i?void 0:i.itemStateDetailContent)||void 0===s?void 0:s.searchServiceType)===_t.GeocodeService;d(+i.itemKey,o)}},h)),c&&(0,i.jsx)(gs.List,Object.assign({className:"setting-ui-unit-list-new",itemsJson:[{name:"......"}].map(((e,t)=>({itemStateDetailContent:"item",itemKey:"index",itemStateTitle:"......",itemStateCommands:[]}))),dndEnabled:!1,renderOverrideItemDetailToggle:()=>""},h,{isItemFocused:()=>!0})))},{useSelector:Ns}=i.ReactRedux,{useRef:Ts,useEffect:Ms}=i.React,Rs={name:es,url:Yt},Ls=e=>{var t,s,o,a,n,r;const l=x.hooks.useTranslate(x.defaultMessages,i.defaultMessages),c=i.ReactRedux.useSelector((e=>{var t,s;return null===(s=null===(t=null==e?void 0:e.asMutable({deep:!0}))||void 0===t?void 0:t.appStateInBuilder)||void 0===s?void 0:s.portalSelf})),p=(0,b.useTheme)(),{datasourceConfig:d,id:u,useDataSources:m,searchDataSettingType:g,isCreateOutputDs:h,isNewWidget:v,portalUrl:f,hideIconSetting:S,onSettingChange:w,createOutputDs:k}=e,j=Ts(null),C=Ts(null),[I,P]=i.React.useState(!1),[O,N]=i.React.useState(!1),[T,M]=i.React.useState(!1),[R,L]=i.React.useState(!1),[A,D]=i.React.useState(null),[E,U]=i.React.useState(null),B=Ns((e=>{var t,s,i;return null===(i=null===(s=null===(t=null==e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.appConfig)||void 0===s?void 0:s.widgets)||void 0===i?void 0:i[u]})),$=i.css`
    & {
      background-color: ${null===(o=null===(s=null===(t=p.colors)||void 0===t?void 0:t.palette)||void 0===s?void 0:s.secondary)||void 0===o?void 0:o[400]};
    }
  `,F=i.css`
    .data-remind {
      color: ${null===(r=null===(n=null===(a=p.colors)||void 0===a?void 0:a.palette)||void 0===n?void 0:n.dark)||void 0===r?void 0:r[500]};
      font-size: ${i.polished.rem(12)};
    }
  `;Ms((()=>{const e=!g||g===Gt.Both||g===Gt.GeocodeService;v&&e&&z()}),[v]),Ms((()=>{V()}),[d]);const z=()=>{G().then((e=>{W(e)})).catch((e=>{W([Rs])}))},W=e=>{const t=[],s=[],o=[];null==e||e.forEach((e=>{const a=ds(t),n=((e,t,s,o)=>{const a=o||is(s),n=ms(t,e),r=ls(o);return{id:n,type:i.DataSourceTypes.FeatureLayer,label:a,originDataSources:[],isOutputFromWidget:!0,isDataInDataSourceInstance:!1,schema:r,geometryType:"esriGeometryPoint"}})(u,a,e.url,null==e?void 0:e.name),r={configId:(l={configId:a,id:u,hint:"",label:null==e?void 0:e.name,geocodeServiceUrl:e.url,singleLineFieldName:e.singleLineFieldName}).configId,label:(null==l?void 0:l.label)||is(l.geocodeServiceUrl),geocodeURL:l.geocodeServiceUrl,outputDataSourceId:ms(l.configId,l.id),useDataSource:null,hint:null==l?void 0:l.hint,searchServiceType:_t.GeocodeService,singleLineFieldName:null==l?void 0:l.singleLineFieldName};var l;t.push(a),s.push(r),o.push(n)}));const a=!g||g===Gt.Both||g===Gt.GeocodeService;h&&a?k&&k(o,(0,i.Immutable)(s)):w&&w((0,i.Immutable)(s))},G=()=>{var e,t;return(null===(e=null==c?void 0:c.helperServices)||void 0===e?void 0:e.geocode)?Promise.resolve(_(null===(t=null==c?void 0:c.helperServices)||void 0===t?void 0:t.geocode)):f?(e=>{const t=i.esri.restRequest.request,s=i.SessionManager.getInstance();return t(`${i.portalUrlUtils.getPortalRestUrl(e)}portals/self`,{authentication:s.getMainSession(),httpMethod:"GET"}).then((e=>{var t;return Promise.resolve((null===(t=null==e?void 0:e.helperServices)||void 0===t?void 0:t.geocode)||[])})).catch((e=>Promise.resolve([])))})(f).then((e=>Promise.resolve(_(e))),(e=>Promise.resolve([Rs]))):void 0},_=e=>{var t;const s=e||[];return(null===(t=null==s?void 0:s.filter((e=>(null==e?void 0:e.url)===Yt)))||void 0===t?void 0:t.length)>0||s.unshift(Rs),s},V=()=>{const e=(null==B?void 0:B.outputDataSources)||[],t=(null==d?void 0:d.asMutable({deep:!0}))||[];for(let s;s<(null==t?void 0:t.length)-1;s++){const i=t[s];if((null==i?void 0:i.searchServiceType)===_t.FeatureService)continue;const o=null==i?void 0:i.outputDataSourceId;if(!(null==e?void 0:e.includes(o))){Z(d);break}}},H=()=>{M(!1),N(!1),D(null)},J=e=>{const t=e?!T:!O;if(L(t),t){const e=(null==d?void 0:d.length)||0;D(e),Y(e,!0)}e?N(t):M(t)},Z=e=>{X(e)&&L(!1);const t=q(e);Q(t),h?k&&k(t.outputDataSources,e):w&&w(e)},q=e=>{var t;return null===(t=null==e?void 0:e.asMutable({deep:!0}))||void 0===t?void 0:t.reduce(((e,t)=>{const s=null==t?void 0:t.useDataSource;s&&!cs(s,null==e?void 0:e.useDataSources)&&(null==e||e.useDataSources.push(s));const i=K(t);return i&&e.outputDataSources.push(i),e}),{useDataSources:[],outputDataSources:[]})},K=e=>{let t;return(null==e?void 0:e.searchServiceType)===_t.GeocodeService&&(t={id:null==e?void 0:e.outputDataSourceId,type:i.DataSourceTypes.FeatureLayer,label:null==e?void 0:e.label,originDataSources:[],isOutputFromWidget:!0,isDataInDataSourceInstance:!1,schema:ls(null==e?void 0:e.label),geometryType:"esriGeometryPoint"}),t},Q=e=>{var t;const s={id:u},i=(0,y.getAppConfigAction)();s.useDataSources=null==e?void 0:e.useDataSources,s.outputDataSources=null===(t=null==e?void 0:e.outputDataSources)||void 0===t?void 0:t.map((e=>null==e?void 0:e.id)),((e,t,s)=>{var i,o,a,n;const r=(null===(i=null==e?void 0:e.useDataSources)||void 0===i?void 0:i.asMutable({deep:!0}))||[],l=(null===(o=null==e?void 0:e.outputDataSources)||void 0===o?void 0:o.asMutable({deep:!0}))||[];if((null==r?void 0:r.length)!==(null==t?void 0:t.length)||(null==l?void 0:l.length)!==(null==s?void 0:s.length))return!0;const c=(null===(a=null==t?void 0:t.filter((e=>!cs(e,r))))||void 0===a?void 0:a.length)>0,p=(null===(n=l.filter((e=>!(null==s?void 0:s.includes(e)))))||void 0===n?void 0:n.length)>0;return c||p})(B,s.useDataSources,s.outputDataSources)&&i.editWidget(s).exec()},X=e=>(null==e?void 0:e.length)!==(null==d?void 0:d.length),Y=(e,t=!1)=>{let s;s=t?C.current.getElementsByClassName("add-search-btn")[0]:C.current.getElementsByClassName("jimu-tree-item__body")[e],U(s)};return(0,i.jsx)(ts.SettingSection,{css:F},(0,i.jsx)(ts.SettingRow,{flow:"wrap"},(0,i.jsx)("span",{className:"w-100 data-remind"},l("addSources"))),(0,i.jsx)(ts.SettingRow,{flow:"wrap"},(0,i.jsx)("div",{className:"w-100",ref:C},(0,i.jsx)("div",null,(!g||g===Gt.Both)&&(0,i.jsx)(x.Dropdown,{className:"w-100",size:"sm",toggle:()=>{P(!I)},isOpen:I,autoWidth:!0},(0,i.jsx)(x.DropdownButton,{className:"add-search-btn w-100",arrow:!1,icon:!0,type:"primary"},(0,i.jsx)(Ct,{className:"mr-1 d-inline-block",autoFlip:!0}),l("newSearchSource")),(0,i.jsx)(x.DropdownMenu,{css:$},(0,i.jsx)(x.DropdownItem,{className:"w-100",onClick:()=>{J(!0)}},l("layerSource")),(0,i.jsx)(x.DropdownItem,{className:"w-100",onClick:()=>{J(!1)}},l("locatorSource")))),g===Gt.FeatureService&&(0,i.jsx)(x.Button,{type:"primary",className:"w-100",onClick:()=>{J(!0)}},(0,i.jsx)(Ct,{className:"mr-1 d-inline-block",autoFlip:!0}),l("layerSource")),g===Gt.GeocodeService&&(0,i.jsx)(x.Button,{type:"primary",className:"w-100",onClick:()=>{J(!1)}},(0,i.jsx)(Ct,{className:"mr-1 d-inline-block",autoFlip:!0}),l("locatorSource"))),(0,i.jsx)("div",{className:"w-100",ref:j},(0,i.jsx)(Os,{id:u,dsConfigItemIndex:A,datasourceConfig:d||(0,i.Immutable)([]),showSourcePanel:(()=>{var e;return(null===(e=null==d?void 0:d[A])||void 0===e?void 0:e.searchServiceType)===_t.GeocodeService?T:O})(),useDataSources:m,onDsConfigIdChange:(e,t)=>{"number"==typeof e?(Y(e,!1),A===e?t?(M(!T),N(!1)):(N(!O),M(!1)):(D(e),t?(M(!0),N(!1)):(N(!0),M(!1)))):H()},showNewSourceItem:R,updateConfigForLayerOptions:Z,hideSidePopper:H,isCreateOutputDs:h}))),(0,i.jsx)(ys,{id:u,dsConfigItemIndex:A,datasourceConfig:d||(0,i.Immutable)([]),useDataSources:m,isOpen:O,onSettingChange:w,trigger:null==j?void 0:j.current,updateConfigForLayerOptions:Z,toggle:()=>{N(!O),L(!1)},popperFocusNode:E,hideIconSetting:S}),(0,i.jsx)(Is,{id:u,dsConfigItemIndex:A,datasourceConfig:d||(0,i.Immutable)([]),useDataSources:m,isOpen:T,onSettingChange:w,updateConfigForLayerOptions:Z,trigger:null==j?void 0:j.current,toggle:()=>{M(!T),L(!1)},popperFocusNode:E,hideIconSetting:S})))};var As=h(51315);const Ds=e=>{const t=x.hooks.useTranslate(x.defaultMessages,i.defaultMessages),s=(0,b.useTheme)(),o=i.css`
    .check-box-label {
      color: ${s.colors.palette.dark[800]}
    }
    .search-setting-con {
      padding-left: 0;
      padding-right: 0;
    }
    .checkbox-con .jimu-widget-setting--row-label{
      max-width: 100%;
    }
  `,{onSettingChange:a,hideRecentSearchSetting:n}=e,r=e.settingConfig||(0,i.Immutable)({}),{maxSuggestions:l,isUseCurrentLoation:c,isShowRecentSearches:p,recentSearchesMaxNumber:d}=r,[u,m]=i.React.useState(d),[g,h]=i.React.useState(l);(0,As.useEffect)((()=>{m(d),h(l)}),[r]);const v=(e,t)=>{const s=r.setIn(e,t);a&&a(s)},f=(e,t=1)=>{if(0===(null==e?void 0:e.length))return!0;if(isNaN(Number(e)))return!1;{const s=Number(e);return Number.isInteger(s)&&s>=t}};return(0,i.jsx)("div",{css:o},(0,i.jsx)(ts.SettingRow,{flow:"wrap",className:"mt-2 checkbox-con",label:t("maximumSuggestions")},(0,i.jsx)(x.TextInput,{size:"sm",value:g,onChange:e=>{const t=e.target.value;f(t,0)&&h(t)},onAcceptValue:e=>{e||h(e=l||zt),f(e,0)&&v(["maxSuggestions"],Number(e))},className:"w-100"})),(0,i.jsx)(ts.SettingRow,null,(0,i.jsx)(x.Checkbox,{checked:!!c,onClick:e=>{const t=e.currentTarget;t&&v(["isUseCurrentLoation"],t.checked)},className:"mr-1","aria-label":t("useCurrentLocation")}),(0,i.jsx)("span",{className:"check-box-label"},t("useCurrentLocation"))),!n&&(0,i.jsx)(ts.SettingRow,{label:t("recentSearches")},(0,i.jsx)(x.Switch,{checked:p||!1,onChange:e=>{v(["isShowRecentSearches"],!p)}})),p&&(0,i.jsx)(ts.SettingRow,{label:t("maximumNumber")},(0,i.jsx)(x.TextInput,{size:"sm",value:u,onChange:e=>{const t=e.target.value;f(t)&&m(t)},onAcceptValue:e=>{e||m(e=d||Wt),f(e)&&v(["recentSearchesMaxNumber"],Number(e))},style:{width:"50px"}})))},Es=e=>{const t=x.hooks.useTranslate(x.defaultMessages,i.defaultMessages),{hint:s,onSettingChange:o}=e,[a,n]=i.React.useState(s);return(0,As.useEffect)((()=>{n(s)}),[s]),(0,i.jsx)("div",{className:"general-setting-con"},(0,i.jsx)(ts.SettingRow,{flow:"wrap",label:t("multySearchHint")},(0,i.jsx)(x.TextInput,{size:"sm",value:a||"",title:a||"",onChange:e=>{var t;const s=null===(t=null==e?void 0:e.target)||void 0===t?void 0:t.value;n(s)},onAcceptValue:e=>{n(e),o&&o(e)},className:"w-100",placeholder:t("findAddressOrPlace")})))};var Us=h(30224),Bs=h.n(Us);const $s=e=>{const{className:t}=e,s=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["className"]),o=(0,i.classNames)("jimu-icon jimu-icon-component",t);return i.React.createElement(x.SVG,Object.assign({className:o,src:Bs()},s))},Fs=[{name:"printTask",label:"Printing"},{name:"geometry",label:"Geometry"},{name:"geoenrichment",label:"GeoEnrichment"},{name:"hydrology",label:"Hydrologo"},{name:"orthomappingElevation",label:"Orthomapping Elevation"},{label:"Elevation",children:[{name:"elevation",label:"Elevation"},{name:"elevationSync",label:"Elevation (Synchronous)"}]},{label:"Directions and Routing",children:[{name:"route",label:"Route"},{name:"asyncRoute",label:"Route (Asynchronous)"},{name:"closestFacility",label:"Closest Facility"},{name:"asyncClosestFacility",label:"Closest Facility (Asynchronous)"},{name:"serviceArea",label:"Service Area"},{name:"asyncServiceArea",label:"Service Area (Asynchronous)"},{name:"syncVRP",label:"Vehicle Routing Problem"},{name:"asyncVRP",label:"Vehicle Routing Problem (Asynchronous)"},{name:"asyncLocationAllocation",label:"Location Allocation (Asynchronous)"},{name:"routingUtilities",label:"Routing Utilities"},{name:"traffic",label:"Traffic"},{name:"odCostMatrix",label:"Origin Destination Cost Matrix"},{name:"asyncODCostMatrix",label:"Origin Destination Cost Matrix (Asynchronous)"},{name:"trafficData",label:"Traffic Data"}]},{name:"geocode",label:"Geocoding",dynamic:!0},{name:"defaultElevationLayers",label:"Cached Elevation Image Service",dynamic:!0}];var zs=h(11167),Ws=h.n(zs);const Gs=e=>{const{className:t}=e,s=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["className"]),o=(0,i.classNames)("jimu-icon jimu-icon-component",t);return i.React.createElement(x.SVG,Object.assign({className:o,src:Ws()},s))};var _s=h(13372),Vs=h.n(_s);const Hs=e=>{const{className:t}=e,s=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["className"]),o=(0,i.classNames)("jimu-icon jimu-icon-component",t);return i.React.createElement(x.SVG,Object.assign({className:o,src:Vs()},s))};var Js=h(88866),Zs=h.n(Js);const qs=e=>{const{className:t}=e,s=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["className"]),o=(0,i.classNames)("jimu-icon jimu-icon-component",t);return i.React.createElement(x.SVG,Object.assign({className:o,src:Zs()},s))};const Ks=i.css`
  .utility-item.utility-item-selected {
    outline: 2px solid var(--primary-700);
    border-radius: 0;
  }

  .utility-item-not-matched.utility-item-selected {
    outline: 1px solid var(--primary-700);
    border-radius: 0;
  }

  .utility-item-not-matched {
    position: relative;

    .item-active-icon {
      position: absolute;
      top: -1px;
      right: -1px;
      .icon-container {
        width: 0;
        height: 0;
        border-top: 0.75rem var(--primary-700) solid;
        border-left: 0.75rem transparent solid;
        background-color: transparent;
      }
    }
  }

  .org-tree {
    height: auto !important;
    background: var(--light-200);
    margin-bottom: 1rem;
  }
  .tree-root {
    padding: 0.5rem 0;

  }
`;function Qs(e){var t;const{keyword:s,serviceType:o,useUtilities:a,onChange:n}=e,r=x.hooks.useTranslate(),l=null===(t=(0,i.getAppStore)().getState().portalSelf)||void 0===t?void 0:t.helperServices,c=i.React.useRef({id:"root",type:"",label:r("organization")}),[p,d]=i.React.useState([]),[u,m]=i.React.useState(null);i.React.useEffect((()=>{d(function(e,t,s){const i=[];return Fs.forEach((o=>{const a=e[o.name];o.dynamic?Array.isArray(a)?i.push({id:o.name,name:o.name,label:o.label,type:"",children:a.map(((e,t)=>{var s;return{id:`${o.name}_${t}`,name:o.name,type:"",index:t,label:null!==(s=e.name)&&void 0!==s?s:e.id,url:e.url}})).filter((e=>{const i=""===t||e.url.includes(t),o=!s||e.label.includes(s);return i&&o}))}):a&&i.push({id:o.name,name:o.name,label:o.label,type:"",url:a.url}):o.children?i.push({id:o.label,type:"",label:o.label,children:o.children.map((t=>{const s=e[t.name];return s?{id:t.name,name:t.name,label:t.label,type:"",url:s.url}:null})).filter((e=>{if(null!=e){const i=""===t||e.url.includes(t),o=!s||e.label.includes(s);return i&&o}return!1}))}):a&&i.push({id:o.name,name:o.name,label:o.label,type:"",url:a.url})})),i.filter((e=>{if(e.children)return e.children.length>0;const i=""===t||e.url.includes(t),o=!s||e.label.includes(s);return i&&o}))}(l,o,s))}),[l,o,s]),x.hooks.useEffectOnce((()=>{const e=function(e,t){const s=t.map((e=>i.UtilityManager.getInstance().getUtilityJson(e.utilityId))).filter((t=>{if("org"===(null==t?void 0:t.source)){const{name:s,url:i,index:o,taskName:a}=t;return!function(e,t,s,i,o){var a;if(i>=0){const i=e[t];return!!Array.isArray(i)&&i.some((e=>(e.name===o||e.id===o)&&e.url===s))}return(null===(a=e[t])||void 0===a?void 0:a.url)===s}(e,s,i,o,a)}return!1}));return s}(l,null!=a?a:(0,i.Immutable)([]));m(e)}));const g=i.React.useCallback((e=>{const{id:t,children:s}=e;return"root"===t?p:null!=s?s:[]}),[p]),h=x.hooks.useEventCallback((e=>e.label)),v=x.hooks.useEventCallback((e=>"root"!==e.id&&!e.children)),f=x.hooks.useEventCallback(((e,t)=>(0,i.jsx)("div",{className:"w-100 d-flex align-items-center",css:i.css`
          height: 1.625rem;
          line-height: 1.625rem;
          background-color: var(--light-500);
          color: var(--dark-800);
        `},(0,i.jsx)("div",{className:"d-flex flex-shrink-0 justify-content-center align-items-center h-100",css:i.css`width: 1.625rem; background-color: var(--info-400);`},(null==t?void 0:t.children)||"root"===(null==t?void 0:t.id)?(0,i.jsx)(Gs,{color:"var(--white)"}):(0,i.jsx)(Hs,{color:"var(--white)"})),(0,i.jsx)("div",{className:"text-truncate px-1"},e)))),b=i.React.useCallback((e=>{const{label:t,index:s,name:o,url:n}=e;let r=-1;return null==a||a.some(((e,a)=>{const l=i.UtilityManager.getInstance().getUtilityJson(e.utilityId);if("org"===(null==l?void 0:l.source))if(s>=0){if(l.index>=0&&l.name===o&&l.taskName===t)return r=a,!0}else if(l.name===o&&l.url===n)return r=a,!0;return!1})),r}),[a]),S=i.React.useCallback((e=>{if("function"==typeof n){const t=b(e),s=i.UtilityManager.getInstance().getIdOfOrgUtility(e.name,e.url,e.index,e.label),o=null!=a?a:(0,i.Immutable)([]);if(t>=0){if(n(o.filter(((e,s)=>s!==t))),!i.UtilityManager.getInstance().isUtilityUsed(s)){const e=(0,y.getAppConfigAction)(),t=e.appConfig.utilities.without(s);e.updateUtilities(t).exec()}}else if(null!=s)n(i.Immutable.set(o,o.length,{utilityId:s}));else{const t=(0,y.getAppConfigAction)(),s=t.appConfig,a=i.appConfigUtils.getUniqueId(s,"utility"),r={id:a,type:null,name:e.name,url:e.url,source:"org"};e.index>=0&&(r.taskName=e.label,r.index=e.index),t.addUtility(r).exec(),n(i.Immutable.set(o,o.length,{utilityId:a}))}}}),[b,a,n]),w=i.React.useCallback((e=>{const t=b(e)>=0;return(0,i.jsx)(x.Button,{type:"tertiary",className:(0,i.classNames)("utility-item jimu-outline-inside text-left w-100",{"utility-item-selected":t}),"aria-checked":t,"aria-label":e.label,title:e.label,onClick:()=>S(e)},f(e.label,e))}),[b,f,S]);return(0,i.jsx)("div",{className:"utility-tree w-100 h-100",css:Ks},(null==u?void 0:u.length)>0&&(0,i.jsx)("div",{className:"p-2 mb-2"},(0,i.jsx)("div",{className:"d-flex mb-2 justify-content-between align-items-center"},(0,i.jsx)("span",{className:"font-13"},"Expired"),(0,i.jsx)(x.Tooltip,{title:"The service you selected is no longer configured in the utility service settings of your organization."},(0,i.jsx)(x.Button,{type:"tertiary",size:"sm",icon:!0},(0,i.jsx)(qs,{size:"s"})))),u.map((e=>{var t,s,o,n,r,l;const c=null==a?void 0:a.some((t=>t.utilityId===e.id));return(0,i.jsx)("div",{className:"w-100",key:e.id},(0,i.jsx)(x.Button,{type:"tertiary",className:(0,i.classNames)("utility-item-not-matched jimu-outline-inside text-left p-0 w-100",{"utility-item-selected":c}),"aria-checked":c,"aria-label":null!==(s=null!==(t=e.taskName)&&void 0!==t?t:e.label)&&void 0!==s?s:e.name,title:null!==(n=null!==(o=e.taskName)&&void 0!==o?o:e.label)&&void 0!==n?n:e.name,onClick:()=>S({name:e.name,url:e.url,index:e.index,label:e.taskName})},f(null!==(l=null!==(r=e.taskName)&&void 0!==r?r:e.label)&&void 0!==l?l:e.name),c&&(0,i.jsx)("div",{className:"item-active-icon"},(0,i.jsx)("div",{className:"icon-container"}))))}))),(0,i.jsx)(Me.DataSourceTree,{className:"org-tree",dataSource:c.current,getChildDataSources:g,getLabel:h,isNodeSelectable:v,renderSelectableNode:w,renderUnselectableNode:f,defaultOpen:!0}))}const Xs=i.css`
  .utility-item.utility-item-selected {
    outline: 2px solid var(--primary-700);
  }
  .added-tree {
    background: var(--light-200);
  }
  .tree-root {
    padding: 0.5rem 0;
  }
`;function Ys(e){const{keyword:t,serviceType:s,utilities:o,useUtilities:a,onChange:n}=e,r=i.React.useRef({id:"root",type:"",label:("added",i.i18n.getIntl().formatMessage({id:"added"}))});const[l,c]=i.React.useState([]),p=x.hooks.useCancelablePromiseMaker();i.React.useEffect((()=>{p(function(e,t,s){var o,a,n,r,l;return a=this,n=void 0,l=function*(){const a=[],n=Object.keys(null!=e?e:{});for(let r=0;r<n.length;r++){const l=e[n[r]];if("org"!==l.source)if(l.portalUrl&&l.itemId){const e=yield i.UtilityManager.getInstance().getUtility(l.id),n={id:l.id,label:l.label,type:"",url:e.itemInfo.url};e.tasks&&(n.children=e.tasks.map(((e,t)=>({rootId:l.id,id:`${l.id}_${t}`,task:e,label:e,url:`${n.url}/${e}`}))).filter((e=>{const i=""===t||e.url.includes(t),o=!s||e.label.includes(s);return i&&o}))),1===(null===(o=n.children)||void 0===o?void 0:o.length)?a.push(n.children[0]):a.push(n)}else a.push({id:l.id,label:l.label,type:"",url:l.url})}return a.filter((e=>{if(e.children)return e.children.length>0;const i=""===t||e.url.includes(t),o=!s||e.label.includes(s);return i&&o}))},new((r=void 0)||(r=Promise))((function(e,t){function s(e){try{o(l.next(e))}catch(e){t(e)}}function i(e){try{o(l.throw(e))}catch(e){t(e)}}function o(t){var o;t.done?e(t.value):(o=t.value,o instanceof r?o:new r((function(e){e(o)}))).then(s,i)}o((l=l.apply(a,n||[])).next())}))}(o,s,t)).then((e=>{c(e)}))}),[o,p,s,t]);const d=i.React.useCallback((e=>{const{id:t,children:s}=e;return"root"===t?l:null!=s?s:[]}),[l]),u=x.hooks.useEventCallback((e=>e.label)),m=x.hooks.useEventCallback((e=>"root"!==e.id&&!e.children)),g=x.hooks.useEventCallback(((e,t)=>(0,i.jsx)("div",{className:"w-100 d-flex align-items-center",css:i.css`
          height: 1.625rem;
          line-height: 1.625rem;
          background-color: var(--light-500);
          color: var(--dark-800);
        `},(0,i.jsx)("div",{className:"d-flex flex-shrink-0 justify-content-center align-items-center h-100",css:i.css`width: 1.625rem; background-color: var(--info-400);`},(null==t?void 0:t.children)||"root"===t.id?(0,i.jsx)(Gs,{color:"var(--black)"}):(0,i.jsx)(Hs,{color:"var(--black)"})),(0,i.jsx)("div",{className:"text-truncate px-1"},e)))),h=i.React.useCallback((e=>{const{id:t,rootId:s,task:i}=e;let o=-1;return null==a||a.some(((e,a)=>(e.utilityId===t||e.utilityId===s&&e.task===i)&&(o=a,!0))),o}),[a]),v=i.React.useCallback((e=>{var t;if("function"==typeof n){const s=h(e),o=null!=a?a:(0,i.Immutable)([]);n(s>=0?o.filter(((e,t)=>t!==s)):i.Immutable.set(o,o.length,{utilityId:null!==(t=e.rootId)&&void 0!==t?t:e.id,task:e.task}))}}),[h,a,n]),f=i.React.useCallback((e=>{const t=h(e)>=0;return(0,i.jsx)(x.Button,{type:"tertiary",className:(0,i.classNames)("utility-item jimu-outline-inside text-left w-100",{"utility-item-selected":t}),"aria-checked":t,"aria-label":e.label,title:e.label,onClick:()=>v(e)},g(e.label,e))}),[h,g,v]);return(0,i.jsx)("div",{className:"utility-tree w-100 h-100",css:Xs},(0,i.jsx)(Me.DataSourceTree,{className:"added-tree",dataSource:r.current,getChildDataSources:d,getLabel:u,isNodeSelectable:m,renderSelectableNode:f,renderUnselectableNode:g,defaultOpen:!0}))}var ei=h(20878),ti=function(e,t,s,i){return new(s||(s=Promise))((function(o,a){function n(e){try{l(i.next(e))}catch(e){a(e)}}function r(e){try{l(i.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(n,r)}l((i=i.apply(e,t||[])).next())}))};const si=(0,i.Immutable)([i.SupportedItemTypes.GeocodingService,i.SupportedItemTypes.GeometryService,i.SupportedItemTypes.GeoprocessingService,i.SupportedItemTypes.NetworkAnalysisService]);function ii(){const e=(0,i.getAppStore)().getState(),t=e&&e.appStateInBuilder&&e.appStateInBuilder.appConfig;return i.appConfigUtils.getUniqueId(t,"utility")}function oi(){return(0,i.jsx)(x.Button,{type:"tertiary",icon:!0,size:"sm",css:i.css`
        position: absolute;
        right: 20px;
        bottom: 2px;
      `},(0,i.jsx)(Ss,{color:"var(--danger)",size:"s"}))}function ai(e){const{utilities:t,onChange:s,isMultiple:o=!0}=e,[a,n]=i.React.useState(""),[r,l]=i.React.useState(!1),[c,p]=i.React.useState(!0),[d,u]=i.React.useState((0,i.Immutable)({})),[m,g]=i.React.useState(""),h=i.React.useRef(null),v=x.hooks.useTranslate(),f=i.ReactRedux.useSelector((e=>e.portalUrl)),y=i.React.useMemo((()=>{const e=[];return Object.keys(null!=t?t:{}).forEach((s=>{const i=t[s];i.portalUrl&&e.push(i.itemId)})),(0,i.Immutable)(e)}),[t]),b=i.React.useCallback((e=>ti(this,void 0,void 0,(function*(){if(null==d[e]&&/^https:\/\//.test(e)){l(!0);try{h.current=yield i.requestUtils.requestWrapper(e,(t=>ti(this,void 0,void 0,(function*(){return yield i.esri.restRequest.request(e,{params:{f:"json"},authentication:t,httpMethod:"GET"})}))),1),u(d.set(e,!0)),/\/rest\/services\/.*\/GeometryServer\/?/.test(e)?g(i.SupportedItemTypes.GeometryService):/\/rest\/services\/.*\/NAServer\/?/.test(e)?g(i.SupportedItemTypes.NetworkAnalysisService):/\/rest\/services\/.*\/GPServer\/?/.test(e)&&g(i.SupportedItemTypes.GeoprocessingService)}catch(t){console.error(t),h.current=null,g(""),u(d.set(e,!1))}finally{l(!1)}}}))),[d]),S=x.hooks.useEventCallback((e=>{n(e.target.value),""===e.target.value||/^https:\/\//.test(e.target.value)?p(!0):p(!1)})),w=x.hooks.useEventCallback((e=>{g(e.target.value)})),k=i.React.useCallback(((e,i)=>ti(this,void 0,void 0,(function*(){const e={id:ii(),label:i.title,type:i.type,source:"custom",itemId:i.id,portalUrl:i.portalUrl},o=t.set(e.id,e);s(o)}))),[s,t]),j=i.React.useCallback(((e,i)=>{const o=Object.keys(t).find((e=>t[e].itemId===i.id&&t[e].portalUrl===i.portalUrl)),a=t.without(o);s(a)}),[s,t]),C=i.React.useCallback((()=>{if(!Object.keys(t).some((e=>t[e].url===a))){const e={id:ii(),type:m,source:"custom",url:a},i=t.set(e.id,e);s(i)}n(""),p(!0),g("")}),[s,t,m,a]);return(0,i.jsx)(x.Tabs,{className:"h-100",css:i.css`overflow: hidden; .tab-content {max-height: calc(100% - 2rem);}`,type:"underline",fill:!0},(0,i.jsx)(x.Tab,{id:"layers",title:v("url")},(0,i.jsx)("div",{className:"w-100 pt-3 px-3",css:i.css`
            position: relative;
          `},(0,i.jsx)(x.TextArea,{"aria-label":v("url"),css:i.css`
              height: 80px;
            `,value:a,onChange:S,onAcceptValue:b}),!c&&(0,i.jsx)(x.Tooltip,{title:v("httpsUrlMessage")},(0,i.jsx)(oi,null)),""!==a&&c&&!r&&null!=d[a]&&!d[a]&&(0,i.jsx)(x.Tooltip,{title:v("serviceNotAvailable")},(0,i.jsx)(oi,null))),(0,i.jsx)("div",{className:"d-flex px-3 pt-2 flex-column"},v("utilityType"),(0,i.jsx)(x.Select,{className:"pt-1","aria-label":v("utilityType"),value:m,onChange:w},(0,i.jsx)("option",{value:""},v("default")),(0,i.jsx)("option",{value:i.SupportedItemTypes.GeocodingService},v("geocodingService")),(0,i.jsx)("option",{value:i.SupportedItemTypes.GeometryService},v("geometryService")),(0,i.jsx)("option",{value:i.SupportedItemTypes.GeoprocessingService},v("geoprocessingService")),(0,i.jsx)("option",{value:i.SupportedItemTypes.NetworkAnalysisService},v("networkAnalysisService")))),(0,i.jsx)("div",{className:"d-flex px-3 pt-3 flex-column align-items-end"},(0,i.jsx)(x.Button,{className:"w-100",type:"primary",disabled:!d[a],onClick:C},v("add")))),(0,i.jsx)(x.Tab,{id:"widgets",title:v("items")},(0,i.jsx)(ei.ItemSelector,{mode:ei.ItemSelectorMode.Simple,itemType:si,portalUrl:f,isMultiple:o,onSelect:k,onRemove:j,selectedItems:y})))}var ni=h(80272),ri=h.n(ni);const li=e=>{const{className:t}=e,s=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["className"]),o=(0,i.classNames)("jimu-icon jimu-icon-component",t);return i.React.createElement(x.SVG,Object.assign({className:o,src:ri()},s))};var ci=h(67906),pi=h.n(ci),di=h(59455),ui=h.n(di);const mi=e=>{const{className:t}=e,s=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["className"]),o=(0,i.classNames)("jimu-icon jimu-icon-component",t);return i.React.createElement(x.SVG,Object.assign({className:o,src:ui()},s))};function gi(e){const{utility:t,onRemove:s}=e,[o,a]=i.React.useState(!1),[n,r]=i.React.useState(null),[l,c]=i.React.useState(!1);x.hooks.useEffectOnce((()=>{i.UtilityManager.getInstance().getUtilityFromJson(t).then((e=>{var t;(null===(t=e.tasks)||void 0===t?void 0:t.length)>0&&r(e.tasks)})).finally((()=>{c(!0)}))}));const p=i.React.useCallback((()=>{a(!o)}),[o]),d=i.React.useCallback((()=>{s(t)}),[s,t]);return l?(0,i.jsx)(i.React.Fragment,null,(0,i.jsx)("div",{className:"w-100 d-flex align-items-center mb-2 pl-3",css:i.css`
          height: 1.625rem;
          line-height: 1.625rem;
          background-color: var(--light-500);
          color: var(--dark-800);
          position: relative;
        `},(0,i.jsx)("div",{className:"d-flex flex-shrink-0 justify-content-center align-items-center h-100"},(null==n?void 0:n.length)>0&&(0,i.jsx)(x.Button,{className:"px-0",type:"tertiary",icon:!0,size:"sm",onClick:p,css:i.css`
                position: absolute;
                left: 0;
              `},o?(0,i.jsx)(mi,{size:"s"}):(0,i.jsx)(li,{size:"s"})),(0,i.jsx)("div",{className:"utility-icon-container"},(null==n?void 0:n.length)>0?(0,i.jsx)(Gs,{color:"var(--white)"}):(0,i.jsx)(Hs,{color:"var(--white)"}))),(0,i.jsx)("div",{className:"text-truncate px-2"},t.label),(0,i.jsx)(x.Button,{className:"ml-auto",type:"tertiary",icon:!0,size:"sm",onClick:d},(0,i.jsx)(rt,null))),(null==n?void 0:n.length)>0&&(0,i.jsx)(x.Collapse,{isOpen:o},n.map((e=>(0,i.jsx)("div",{key:e,className:"d-flex align-items-center mb-2",css:i.css`margin-left: 2rem;`},(0,i.jsx)("div",{className:"utility-icon-container mr-2"},(0,i.jsx)(Hs,{color:"var(--white)"})),(0,i.jsx)("div",{className:"text-truncate"},e)))))):(0,i.jsx)("div",{className:"loading-container"},(0,i.jsx)(x.Loading,{type:x.LoadingType.Bar}))}const hi=i.css`
  position: absolute;
  bottom: 0;
  max-height: 300px;
  background-color: var(--light-500);

  .item-list {
    max-height: 180px;
    overflow: auto;
  }

  .utility-icon-container {
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    background-color: var(--info-400);
    width: 1.625rem;
    height: 1.625rem;
    margin-right: 8px;
    svg {
      margin-right: 0 !important;
    }
  }
`;function vi(e){const{utilities:t,onDoneClick:s}=e,o=x.hooks.useTranslate(),[a,n]=i.React.useState(!1),[r,l]=i.React.useState([]),c=i.React.useRef();x.hooks.useEffectOnce((()=>{c.current=Object.values(null!=t?t:{})})),i.React.useEffect((()=>{if(Object.keys(null!=t?t:{}).length>0){const e=Object.values(t).filter((e=>!c.current.some((t=>t.id===e.id))));l(e)}else l([])}),[t]);const p=i.React.useCallback((()=>{n(!a)}),[a]),d=x.hooks.useEventCallback((e=>{(0,y.getAppConfigAction)().removeUtility(e).exec()}));return(0,i.jsx)("div",{className:"w-100 p-3 shadow-lg",css:hi},(0,i.jsx)("div",{className:"new_utility_header d-flex align-items-center"},(0,i.jsx)("div",{className:"font-13"},(0,i.jsx)("span",null,r.length),(0,i.jsx)("span",{className:"ml-1"},o("selected"))),(0,i.jsx)(x.Button,{className:"ml-2",type:"tertiary",icon:!0,size:"sm",onClick:p},a?(0,i.jsx)(ne,null):(0,i.jsx)(ae,null)),!a&&(0,i.jsx)(x.Button,{className:"ml-auto",type:"primary","aria-label":o("done"),onClick:s},o("done"))),(0,i.jsx)(x.Collapse,{isOpen:a},(0,i.jsx)("div",{className:"my-3 item-list"},r.map(((e,t)=>(0,i.jsx)(gi,{key:t,utility:e,onRemove:()=>d(e.id)}))))),a&&(0,i.jsx)(x.Button,{className:"w-100",type:"primary","aria-label":o("done"),onClick:s},o("done")))}const fi={overrideItemBlockInfo:({itemBlockInfo:e},t)=>({name:gs.TreeItemActionType.RenderOverrideItem,children:[{name:gs.TreeItemActionType.RenderOverrideItemBody,children:[{name:gs.TreeItemActionType.RenderOverrideItemMainLine,children:[{name:gs.TreeItemActionType.RenderOverrideItemIcon,autoCollapsed:!0},{name:gs.TreeItemActionType.RenderOverrideItemTitle},{name:gs.TreeItemActionType.RenderOverrideItemCommands}]}]}]})};function yi(e){const{useUtilities:t,onChange:s,isMultiple:o=!1}=e,a=x.hooks.useTranslate(),n=i.ReactRedux.useSelector((e=>{var t,s;return null===(s=null===(t=e.appStateInBuilder)||void 0===t?void 0:t.appConfig)||void 0===s?void 0:s.utilities})),[r,l]=i.React.useState(!1),[c,p]=i.React.useState(0),[d,u]=i.React.useState(""),[m,g]=i.React.useState(""),h=i.React.useRef(),v=i.React.useCallback((()=>{l(!r)}),[r]),f=i.React.useCallback((e=>{r||l(!0)}),[r]),b=x.hooks.useEventCallback((()=>{p(1)})),S=x.hooks.useEventCallback((()=>{p(0)})),w=x.hooks.useEventCallback((e=>{(0,y.getAppConfigAction)().updateUtilities(e).exec()})),k=x.hooks.useEventCallback((e=>{g(e.target.value)})),j=x.hooks.useEventCallback((e=>{u(e.target.value)})),C=i.React.useCallback((e=>{s(t.filter(((t,s)=>s!==e)))}),[t,s]);return(0,i.jsx)("div",{className:"px-2 pb-2",ref:h,css:i.css`
      .jimu-tree-item__icon {
        background-color: var(--info-400);
        width: 18px;
        height: 18px;
        margin-right: 8px;
        svg {
          margin-right: 0 !important;
        }
      }
    `},(null==t?void 0:t.length)>0&&(0,i.jsx)(gs.List,Object.assign({className:"utility-list mb-2",itemsJson:t.map(((e,t)=>{const s=i.UtilityManager.getInstance().getUtilityJson(e.utilityId);return{itemStateDetailContent:e,itemKey:`${t}`,itemStateIcon:{icon:pi(),color:"var(--white)"},itemStateTitle:null!=s?i.UtilityManager.getInstance().getLabelOfUseUtility(e):e.utilityId,itemStateCommands:[{label:a("remove"),iconProps:()=>({icon:nt(),size:12}),action:({data:e})=>{const{itemJsons:[t]}=e;C(+t.itemKey)}}]}})),onClickItemBody:f,isItemFocused:()=>!1},fi)),(0,i.jsx)(x.Button,{className:"w-100",type:"tertiary",onClick:v,css:i.css`
          border: 1px dashed var(--dark-100);
          &, &:hover { color: var(--primary-700); }
          &:hover { border: 1px dashed var(--dark-400); }
        `},a("selectUtility")),(0,i.jsx)(we,{title:a("selectUtility"),position:"right",isOpen:r&&0===c,toggle:v,trigger:h.current},(0,i.jsx)("div",{className:"h-100"},(0,i.jsx)("div",{className:"px-2 pb-2",css:i.css`height: 50px;`},(0,i.jsx)(x.TextInput,{type:"search",prefix:(0,i.jsx)($s,{size:"s"}),value:m,onChange:k,placeholder:a("SearchLabel")})),(0,i.jsx)("div",{className:"d-flex justify-content-between align-items-center px-2 mb-2"},(0,i.jsx)("span",null,a("type")),(0,i.jsx)(x.Select,{"aria-label":a("type"),size:"sm",css:i.css`width: 120px`,value:d,onChange:j},(0,i.jsx)("option",{value:""},a("allTag")),(0,i.jsx)("option",{value:"GeocodeServer"},a("geocodingService")),(0,i.jsx)("option",{value:"GeometryServer"},a("geometryService")),(0,i.jsx)("option",{value:"GPServer"},a("geoprocessingService")),(0,i.jsx)("option",{value:"NAServer"},a("networkAnalysisService")))),(0,i.jsx)("div",{css:i.css`height: calc(100% - 125px); .tab-content {overflow: auto;}`},(0,i.jsx)(x.Tabs,{className:"px-2 h-100",type:"pills",fill:!0},(0,i.jsx)(x.Tab,{id:"org_utility",title:a("organization")},(0,i.jsx)(Qs,{isMultiple:o,keyword:m.trim(),serviceType:d,useUtilities:t,onChange:s})),(0,i.jsx)(x.Tab,{id:"added_utility",title:a("added")},(0,i.jsx)(Ys,{isMultiple:o,keyword:m.trim(),serviceType:d,utilities:n,useUtilities:t,onChange:s})))),(0,i.jsx)("div",{css:i.css`height: 40px;border-top: 1px solid var(--light-800);`},(0,i.jsx)(x.Button,{className:"w-100 h-100",type:"tertiary","aria-label":a("add"),onClick:b},(0,i.jsx)("div",{className:"d-flex align-items-center"},(0,i.jsx)(li,{size:"s",color:"var(--primary-700)"}),(0,i.jsx)("span",{className:"ml-2",css:i.css`color: var(--primary-700)`},a("addUtility"))))))),(0,i.jsx)(we,{title:a("addUtility"),position:"right",isOpen:r&&1===c,toggle:S,trigger:h.current},(0,i.jsx)("div",{className:"h-100",css:i.css`position: relative;`},(0,i.jsx)("div",{css:i.css`height: calc(100% - 50px); .tab-content {overflow: auto;}`},(0,i.jsx)(ai,{utilities:n,onChange:w})),(0,i.jsx)(vi,{utilities:n,onDoneClick:S}))))}function bi(e){var t,s;const o=(0,i.getAppStore)().getState().appStateInBuilder,a=o.appRuntimeInfo.currentPageId,n=o.appRuntimeInfo.currentDialogId;let r=o.appRuntimeInfo.dialogInfos||(0,i.Immutable)({});const l=o.appConfig.dialogs,c=o.appConfig.pages,p={canClose:!0,checked:!0,isClosed:!0};return n&&((null===(t=l[n])||void 0===t?void 0:t.isSplash)&&(r=r.set(n,p)),c[a].autoOpenDialogId&&(r=r.set(a+"-"+c[a].autoOpenDialogId,p)),e&&Object.keys(c).forEach((e=>{c[e].autoOpenDialogId===n&&(r=r.set(e+"-"+n,p))}))),(null===(s=l[n])||void 0===s?void 0:s.isSplash)||Object.keys(l).some((e=>{l[e].isSplash&&(r=r.set(e,p))})),e&&r&&Object.keys(r).forEach((t=>{t!==e&&t!==a+"-"+e||(r=r.set(t,{canClose:xi(e),checked:!1,isClosed:!1}))})),r}function xi(e){const t=(0,i.getAppStore)().getState().appStateInBuilder.appConfig.dialogs[e];return!t.interactionType||!t.confirmBeforeClose}function Si(e){const t=(0,i.getAppStore)().getState().appStateInBuilder,s=t.appRuntimeInfo.currentPageId,o=t.appRuntimeInfo.currentDialogId;if(y.builderAppSync.publishChangeSelectionToApp(null),o){const e=bi();y.builderAppSync.publishDialogInfosChangeToApp(e),y.builderAppSync.publishDialogChangeToApp(null)}s!==e&&y.builderAppSync.publishPageChangeToApp(e),y.builderAppSync.publichActivePagePartChangeToApp(i.PagePart.Body)}function wi(e){if(y.builderAppSync.publishChangeSelectionToApp(null),e!==(0,i.getAppStore)().getState().appStateInBuilder.appRuntimeInfo.currentDialogId){y.builderAppSync.publishDialogChangeToApp(e);const t=bi(e);y.builderAppSync.publishDialogInfosChangeToApp(t),y.builderAppSync.publichActivePagePartChangeToApp(null)}}(0,b.registerStyles)("jimu-ui/advanced/setting-components/",e)})(),v})())}}}));