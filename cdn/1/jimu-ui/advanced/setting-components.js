System.register(["jimu-arcgis","jimu-core","jimu-core/react","jimu-for-builder","jimu-for-builder/templates","jimu-layouts/layout-runtime","jimu-theme","jimu-ui","jimu-ui/advanced/data-source-selector","jimu-ui/advanced/expression-builder","jimu-ui/advanced/resource-selector","jimu-ui/advanced/setting-components","jimu-ui/advanced/utility-selector","jimu-ui/basic/list-tree"],(function(e,t){var i={},o={},s={},n={},a={},l={},r={},c={},p={},d={},u={},m={},g={},h={};return{setters:[function(e){i.MapViewManager=e.MapViewManager},function(e){o.AllDataSourceTypes=e.AllDataSourceTypes,o.CONSTANTS=e.CONSTANTS,o.ContainerType=e.ContainerType,o.DataSourceComponent=e.DataSourceComponent,o.DataSourceManager=e.DataSourceManager,o.DataSourceStatus=e.DataSourceStatus,o.DataSourceTypes=e.DataSourceTypes,o.DialogMode=e.DialogMode,o.ExpressionPartType=e.ExpressionPartType,o.Immutable=e.Immutable,o.JimuFieldType=e.JimuFieldType,o.LayoutItemType=e.LayoutItemType,o.LayoutType=e.LayoutType,o.LinkType=e.LinkType,o.LoadingType=e.LoadingType,o.MultipleDataSourceComponent=e.MultipleDataSourceComponent,o.OrderRule=e.OrderRule,o.PagePart=e.PagePart,o.PageType=e.PageType,o.React=e.React,o.ReactRedux=e.ReactRedux,o.ReactResizeDetector=e.ReactResizeDetector,o.ServiceManager=e.ServiceManager,o.SessionManager=e.SessionManager,o.SupportedUtilityType=e.SupportedUtilityType,o.UtilityManager=e.UtilityManager,o.WidgetType=e.WidgetType,o.appConfigUtils=e.appConfigUtils,o.cancelablePromise=e.cancelablePromise,o.classNames=e.classNames,o.css=e.css,o.dataSourceUtils=e.dataSourceUtils,o.defaultMessages=e.defaultMessages,o.esri=e.esri,o.getAppStore=e.getAppStore,o.injectIntl=e.injectIntl,o.jsx=e.jsx,o.loadArcGISJSAPIModules=e.loadArcGISJSAPIModules,o.lodash=e.lodash,o.moduleLoader=e.moduleLoader,o.polished=e.polished,o.proxyUtils=e.proxyUtils,o.urlUtils=e.urlUtils},function(e){s.useEffect=e.useEffect},function(e){n.builderAppSync=e.builderAppSync},function(e){a.getFullScreenGridPageTemplates=e.getFullScreenGridPageTemplates,a.getFullScreenPageTemplates=e.getFullScreenPageTemplates,a.getScrollingPageTemplates=e.getScrollingPageTemplates},function(e){l.searchUtils=e.searchUtils,l.utils=e.utils},function(e){r.getBuilderThemeVariables=e.getBuilderThemeVariables,r.getTheme2=e.getTheme2,r.popperPointer=e.popperPointer,r.registerStyles=e.registerStyles,r.styled=e.styled,r.useTheme=e.useTheme,r.withStyles=e.withStyles,r.withTheme=e.withTheme,r.withTheme2=e.withTheme2},function(e){c.AdvancedButtonGroup=e.AdvancedButtonGroup,c.Alert=e.Alert,c.Button=e.Button,c.Card=e.Card,c.CardBody=e.CardBody,c.CardImg=e.CardImg,c.Checkbox=e.Checkbox,c.Collapse=e.Collapse,c.Container=e.Container,c.Dropdown=e.Dropdown,c.DropdownButton=e.DropdownButton,c.DropdownItem=e.DropdownItem,c.DropdownMenu=e.DropdownMenu,c.FOCUSABLE_CONTAINER_CLASS=e.FOCUSABLE_CONTAINER_CLASS,c.FormGroup=e.FormGroup,c.Icon=e.Icon,c.Input=e.Input,c.Label=e.Label,c.Link=e.Link,c.Loading=e.Loading,c.LoadingType=e.LoadingType,c.Modal=e.Modal,c.ModalBody=e.ModalBody,c.ModalFooter=e.ModalFooter,c.ModalHeader=e.ModalHeader,c.NumericInput=e.NumericInput,c.Option=e.Option,c.PanelHeader=e.PanelHeader,c.Popper=e.Popper,c.Radio=e.Radio,c.Row=e.Row,c.Select=e.Select,c.Switch=e.Switch,c.Tab=e.Tab,c.Tabs=e.Tabs,c.TextInput=e.TextInput,c.Toast=e.Toast,c.ToastType=e.ToastType,c.Tooltip=e.Tooltip,c.UrlInput=e.UrlInput,c.defaultMessages=e.defaultMessages,c.getFallbackPlacementsModifier=e.getFallbackPlacementsModifier,c.hooks=e.hooks,c.isOutBoundary=e.isOutBoundary},function(e){p.DataSourceSelector=e.DataSourceSelector,p.FieldSelector=e.FieldSelector,p.dataComponentsUtils=e.dataComponentsUtils},function(e){d.ExpressionInput=e.ExpressionInput,d.ExpressionInputType=e.ExpressionInputType},function(e){u.IconPicker=e.IconPicker},function(e){m.SettingRow=e.SettingRow,m.SettingSection=e.SettingSection,m.SidePopper=e.SidePopper},function(e){g.UtilitySelector=e.UtilitySelector},function(e){h.List=e.List,h.Tree=e.Tree,h.TreeAlignmentType=e.TreeAlignmentType,h.TreeCollapseStyle=e.TreeCollapseStyle,h.TreeItemActionType=e.TreeItemActionType,h.TreeStyle=e.TreeStyle}],execute:function(){e((()=>{var e={4077:e=>{e.exports='<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.596 6.357c.39-.59.944-1.055 1.595-1.337L15.544.094a1.143 1.143 0 0 1 .91 0L30 5.97V23.66a3.6 3.6 0 0 1-.596 1.983 3.648 3.648 0 0 1-1.595 1.337l-11.353 4.927a1.144 1.144 0 0 1-.91 0L2 26.029V8.34a3.6 3.6 0 0 1 .596-1.984Zm3.419 15.162c.009.016.022.029.037.038l9.594 5.351a.721.721 0 0 0 .705 0l9.144-5.103a.994.994 0 0 0 .37-.356.95.95 0 0 0 .135-.488v-9.89a.852.852 0 0 0-.122-.438.89.89 0 0 0-.331-.32l-9.497-5.3a.106.106 0 0 0-.104 0l-2.415 1.348a.069.069 0 0 0-.026.025.066.066 0 0 0 .026.092l8.947 4.992c.39.218.716.532.941.91.226.378.345.807.345 1.243v5.514c0 .08-.021.157-.062.226a.459.459 0 0 1-.172.165l-5.633 3.145a3.904 3.904 0 0 1-1.899.49c-.666 0-1.32-.169-1.898-.49L8.972 19.81a1.457 1.457 0 0 1-.542-.524 1.394 1.394 0 0 1-.198-.715V11.76a.069.069 0 0 1 .07-.068c.012 0 .024.003.035.009l7.651 4.268c.05.028.092.068.121.117a.313.313 0 0 1 .045.16v2.526c0 .012.003.024.009.034a.068.068 0 0 0 .06.033.073.073 0 0 0 .035-.009l1.972-1.1c.28-.156.511-.38.673-.651.161-.27.247-.577.247-.89v-.964c0-.278-.076-.55-.22-.79-.144-.241-.35-.44-.598-.58L9.65 9.011a.885.885 0 0 0-.86 0L6.052 10.54a.104.104 0 0 0-.052.088v10.842c0 .018.006.035.015.05Z" fill="#000"></path></svg>'},18371:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m6.036 12.157 8.01-8.01a.5.5 0 1 1 .707.707l-8.01 8.01a1 1 0 0 1-1.415 0L1.146 8.682a.5.5 0 1 1 .708-.707l4.182 4.182Z" fill="#000"></path></svg>'},94070:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 14a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm1-5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0-6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" fill="#000"></path></svg>'},24786:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m1.373 8 2.07-2.071.83.828L2.2 8.828a3.515 3.515 0 0 0 4.97 4.971l2.072-2.071.828.828L8 14.627A4.686 4.686 0 1 1 1.373 8ZM13.799 7.172l-2.071 2.07.828.83L14.627 8A4.686 4.686 0 1 0 8 1.373l-2.071 2.07.828.83L8.828 2.2a3.515 3.515 0 0 1 4.971 4.97Z" fill="#000"></path><path d="M5.515 9.657a.586.586 0 0 0 .828.828l4.142-4.142a.586.586 0 0 0-.828-.828L5.515 9.657Z" fill="#000"></path></svg>'},59788:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.146 4.653a.485.485 0 0 1 .708 0L8 10.24l5.146-5.587a.485.485 0 0 1 .708 0 .538.538 0 0 1 0 .738l-5.5 5.956a.485.485 0 0 1-.708 0l-5.5-5.956a.538.538 0 0 1 0-.738Z" fill="#000"></path></svg>'},60843:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.646 10.354a.5.5 0 0 0 .708-.708L2.707 8h10.586l-1.647 1.646a.5.5 0 0 0 .708.708l2.5-2.5a.5.5 0 0 0 0-.708l-2.5-2.5a.5.5 0 0 0-.708.708L13.293 7H2.707l1.647-1.646a.5.5 0 1 0-.708-.708l-2.5 2.5a.5.5 0 0 0 0 .708l2.5 2.5Z" fill="#000"></path></svg>'},3273:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.653 13.854a.485.485 0 0 1 0-.708L10.24 8 4.653 2.854a.485.485 0 0 1 0-.708.538.538 0 0 1 .738 0l5.956 5.5a.485.485 0 0 1 0 .708l-5.956 5.5a.538.538 0 0 1-.738 0Z" fill="#000"></path></svg>'},58959:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 3a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4ZM1 6.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5ZM1.5 9a.5.5 0 0 0 0 1h10a.5.5 0 0 0 0-1h-10ZM1.5 12a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13Z" fill="#000"></path></svg>'},99820:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 13a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1h-4ZM1 9.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5ZM1.5 7a.5.5 0 0 1 0-1h10a.5.5 0 0 1 0 1h-10ZM1.5 4a.5.5 0 0 1 0-1h13a.5.5 0 0 1 0 1h-13Z" fill="#000"></path></svg>'},96009:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.854 11.347a.486.486 0 0 1-.708 0L8 5.76l-5.146 5.587a.485.485 0 0 1-.708 0 .538.538 0 0 1 0-.738l5.5-5.956a.485.485 0 0 1 .708 0l5.5 5.956a.538.538 0 0 1 0 .738Z" fill="#000"></path></svg>'},18656:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.354 12.354a.5.5 0 0 0-.708-.708L8 13.293V2.707l1.646 1.647a.5.5 0 0 0 .708-.708l-2.5-2.5a.5.5 0 0 0-.708 0l-2.5 2.5a.5.5 0 1 0 .708.708L7 2.707v10.586l-1.646-1.647a.5.5 0 0 0-.708.708l2.5 2.5a.5.5 0 0 0 .708 0l2.5-2.5Z" fill="#000"></path></svg>'},55339:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m8.745 8 6.1 6.1a.527.527 0 1 1-.745.746L8 8.746l-6.1 6.1a.527.527 0 1 1-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 0 1 .746-.746l6.1 6.1 6.1-6.1a.527.527 0 0 1 .746.746L8.746 8Z" fill="#000"></path></svg>'},59216:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.226 1.312c-.403-.404-1.044-.417-1.431-.03L2.49 8.587l-.48 2.674a.637.637 0 0 0 .73.73l2.673-.48 7.305-7.306c.387-.387.374-1.028-.03-1.431l-1.462-1.462Zm-8.113 9.575.32-1.781 4.991-4.992 1.462 1.462-4.992 4.991-1.781.32Zm7.473-6.012 1.402-1.4-1.462-1.463-1.401 1.402 1.461 1.461Z" fill="#000"></path><path d="M1.5 14a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13Z" fill="#000"></path></svg>'},34750:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 0a.5.5 0 0 0-.5.5V7H.5a.5.5 0 0 0 0 1H7v6.5a.5.5 0 0 0 1 0V8h6.5a.5.5 0 0 0 0-1H8V.5a.5.5 0 0 0-.5-.5Z" fill="#000"></path></svg>'},30224:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-1.27 4.936a6.5 6.5 0 1 1 .707-.707l4.136 4.137a.5.5 0 1 1-.707.707l-4.137-4.137Z" fill="#000"></path></svg>'},26826:e=>{"use strict";e.exports=i},48891:e=>{"use strict";e.exports=o},51315:e=>{"use strict";e.exports=s},23137:e=>{"use strict";e.exports=n},96262:e=>{"use strict";e.exports=a},74758:e=>{"use strict";e.exports=l},34796:e=>{"use strict";e.exports=r},30726:e=>{"use strict";e.exports=c},338:e=>{"use strict";e.exports=p},39342:e=>{"use strict";e.exports=d},20663:e=>{"use strict";e.exports=u},77756:e=>{"use strict";e.exports=m},52785:e=>{"use strict";e.exports=g},59587:e=>{"use strict";e.exports=h}},t={};function v(i){var o=t[i];if(void 0!==o)return o.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,v),s.exports}v.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return v.d(t,{a:t}),t},v.d=(e,t)=>{for(var i in t)v.o(t,i)&&!v.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},v.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),v.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var f={};return(()=>{"use strict";v.r(f),v.d(f,{ByFieldSeriesX:()=>Ji,ByFieldSeriesY:()=>qi,CollapsableCheckbox:()=>Te,CollapsableRadio:()=>Ne,CollapsableToggle:()=>Pe,DefaultAddress:()=>eo,DefaultGeocodeLabel:()=>io,DefaultGeocodeURL:()=>to,DirectionSelector:()=>Li,JimuLayerViewSelector:()=>ie,JimuLayerViewSelectorDeprecated:()=>J,JimuLayerViewSelectorDropdown:()=>se,JimuMapViewSelector:()=>ae,LinkSelector:()=>gt,LinkSelectorContent:()=>it,LinkSelectorSidePopper:()=>rt,LinkSetting:()=>ot,LinkSettingPopup:()=>ct,MAX_RECENT_SEARCHES:()=>Vi,MAX_SUGGESTION:()=>Wi,MapWidgetSelector:()=>z,MaxCategories:()=>Hi,MaxPieces:()=>Zi,MaxSeries:()=>Ki,NavQuickStyleItem:()=>Ui,OpenTypes:()=>Re,OutStatisticFieldNameSplit:()=>Qi,OutputDsAddress:()=>Yi,OutputDsObjectField:()=>Xi,PageTemplatePopper:()=>li,ProxySetting:()=>Et,ProxySettingPopup:()=>zt,QuickStylePopper:()=>zi,RadioGroup:()=>pe,SearchDataSetting:()=>Ro,SearchDataType:()=>Gi,SearchGeneralSetting:()=>Ao,SearchServiceType:()=>_i,SearchSuggestionSetting:()=>Lo,SettingCollapse:()=>je,SettingLayout:()=>t,SettingRow:()=>R,SettingSection:()=>k,SidePopper:()=>at,SizeMode:()=>Ai,SizeModeSelector:()=>Di,SortSetting:()=>ji,StylePicker:()=>re,TemplateList:()=>si,TemplateSelector:()=>ci,UnControlledSettingCollapse:()=>Oe,WidgetList:()=>Xt,WidgetListPopper:()=>ti,WidgetSelector:()=>A,_JimuLayerViewSelector:()=>te,_JimuLayerViewSelectorDropdown:()=>oe,_LinkSelector:()=>mt,_LinkSelectorContent:()=>tt,_LinkSelectorSidePopper:()=>lt,_MapWidgetSelector:()=>B,_SidePopper:()=>nt,changeCurrentDialog:()=>Fo,changeCurrentPage:()=>Uo,handelDialogInfos:()=>Eo,proxySettingUtils:()=>i});var e={};v.r(e),v.d(e,{JimuLayerViewSelector:()=>S,JimuLayerViewSelectorDeprecated:()=>h,JimuLayerViewSelectorDropdown:()=>y,LinkSelectorContent:()=>p,ProxySetting:()=>d,ProxySettingPopup:()=>u,RadioGroup:()=>m,SettingCollapse:()=>c,SettingRow:()=>r,SettingSection:()=>l,SidePopper:()=>g,SortSetting:()=>n,StylePicker:()=>a,WidgetSelector:()=>s});var t={};v.r(t),v.d(t,{SettingRow:()=>R,SettingSection:()=>k});var i={};v.r(i),v.d(i,{deleteProxies:()=>kt,getCreateProxyUrl:()=>Pt,getDeleteProxyUrl:()=>Nt,getNeedProxyDataSources:()=>bt,getNeedProxyItems:()=>ft,getNeedProxyUtilities:()=>yt,getProxyJsonFromSourceUrl:()=>wt,getProxyRootUrl:()=>Ot,isRegisteredApp:()=>Ct,isSameProxy:()=>xt,needToConfigProxy:()=>It});var o=v(48891);const s=e=>{const t=e.theme;return o.css`
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
  `},n=e=>{const t=e.theme.colors;return o.css`
    width:100%;
    &.single-row-item {
        .select-con {
            padding: ${o.polished.rem(10)} ${o.polished.rem(0)};
            .option-name-con {
                margin-bottom: 0;
                .close-con>span {
                    margin-left: ${o.polished.rem(10)};
                }
            }
        }
    }
    .padding-0 {
        padding: 0;
    }
    .jimu-tree-item {
        margin-bottom:${o.polished.rem(10)};
    }
    .jimu-tree-item__draggable {
        box-shadow: 0 0 0 2px ${o.polished.rgba(t.white,.3)};
    }
    .add-option-btn {
        & {
            color:${t.palette.primary[600]};
            margin-top:${o.polished.rem(10)};
            margin-bottom: ${o.polished.rem(17)};
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
            box-sizing:border-box;
            padding-right: ${o.polished.rem(10)};
            padding: ${o.polished.rem(8)} ${o.polished.rem(10)} ${o.polished.rem(10)} ${o.polished.rem(6)};
        }
        .option-name-con {
            & {
              display: flex;
              align-items: center;
              margin-bottom:${o.polished.rem(5)};
              width: 100%;
            }
            .option-name {
              font-size: 13px;
              line-height: 13px;
              color: ${t.palette.dark[800]};
              height: ${o.polished.rem(30)};
              line-height: ${o.polished.rem(25)};
              cursor: pointer;
              overflow: hidden;
              width: 0;
              padding-right: ${o.polished.rem(4)};
              .edit-input {
                max-width: 88%;
              }
            }
            .option-name input {
                display:inline-block;
                width: auto;
                height: 100%;
            }
            .jimu-input {
                line-height: ${o.polished.rem(30)};
                vertical-align: middle;
            }
            .input-wrapper {
                vertical-align: middle;
            }
            .option-name-icon-con {
                margin-left: ${o.polished.rem(5)};
                svg {
                    margin-top:  ${o.polished.rem(5)};
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
                svg {
                    margin: 0;
                    margin-top:  ${o.polished.rem(2)};
                }
            }
            .close-con>span {
                margin-right: ${o.polished.rem(10)};
                color: ${t.black};
                cursor: pointer;
            }
        }

        .select-down-con {
            & {
                display: flex;
                align-items: center;
                height: ${o.polished.rem(34)};
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
                    flex-grow: 1;
                    width: 0;
                    overflow: hidden;
                }


            }
        }
    }


  `},a=e=>{const t=e.theme;return o.css`
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
  `},l=e=>{const t=e.theme;return o.css`
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
  `},r=e=>{const t=e.theme,i=e.flow,s=e.action;return o.css`
    &.jimu-widget-setting--row {
      margin-bottom: 0;
      margin-left: 0;
      margin-right: 0;
      &:first-of-type {
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
      margin-bottom: ${"wrap"===i?s?"0":t.sizes[2]:"0"};
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
  `},c=e=>{var t,i,s,n,a,l,r,c;const p=null==e?void 0:e.isOpen,d=null!==(t=null==e?void 0:e.type)&&void 0!==t?t:"default",u=e.theme,m=null===(n=null===(s=null===(i=null==u?void 0:u.colors)||void 0===i?void 0:i.palette)||void 0===s?void 0:s.light)||void 0===n?void 0:n[500],g=null===(r=null===(l=null===(a=null==u?void 0:u.colors)||void 0===a?void 0:a.palette)||void 0===l?void 0:l.light)||void 0===r?void 0:r[800],h=null===(c=null==u?void 0:u.colors)||void 0===c?void 0:c.primary;return"primary"!==d?o.css`
    .dividing-line {
      background-color: ${g};
    }
    `:o.css`
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
    `};function p(e){const t=e.theme,i=t&&t.colors&&t.colors.palette&&t.colors.palette.light[500]||"#ccc",s=t&&t.colors&&t.colors.primary||"blue",n=o.polished.rgba(i,.5);return window.jimuConfig.isInBuilder?o.css`
    .widget-builder-link-selector {
      .collapse-btn{
        margin-right: ${o.polished.rem(-16)};
      }
      .option-name{
        font-size: ${o.polished.rem(13)};
        color: ${t.colors.palette.dark[400]};
        font-weight:
      }
      .link-selector-list {
        .view-border{
          border-width: 1px;
          border-style: solid;
        }
        .link-selector-list-item {
          height: ${o.polished.rem(30)};
          cursor: pointer;

          &:hover {
            background-color: ${n};
          }
        }

        .link-selector-list-select {
          background-color: ${n};
        }
      }

      select {
        padding-top: ${o.polished.rem(2)} !important;
      }

      .itemselected {
        background-color: ${s} !important;
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
        max-width: calc(100% - ${o.polished.rem(25)});
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
  `:o.css`
    .widget-builder-link-selector {
      .collapse-btn{
        position: absolute;
        right: ${o.polished.rem(-4)};
      }
      .option-name{
        font-size: ${o.polished.rem(13)};
        color: ${t.colors.palette.dark[400]};
        font-weight: 500;
      }
      .mb-12{
        margin-bottom: ${o.polished.rem(12)};
      }
      .item-common{
        background: ${t.colors.white};
      }
      .view-border{
        border: 1px solid ${t.colors.palette.light[400]};
      }
      .link-selector-list {

        .link-selector-list-item {
          height: ${o.polished.rem(30)};
          cursor: pointer;

          &:hover {
            background-color: ${n};
          }
        }

        .link-selector-list-select {
          background-color: ${n};
        }
      }

      select {
        padding-top: ${o.polished.rem(2)} !important;
      }

      .itemselected {
        background-color: ${s} !important;
      }
      .link-setting-cursor-pointer{
        cursor: pointer;
      }
      .open-type-label{
        max-width: calc(100% - ${o.polished.rem(25)});
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
  `}function d(e){const t=e.theme;return o.css`
    color: ${t.colors.palette.dark[600]};
    .font-size-13{
      font-size: ${o.polished.rem(13)} !important;
    }
    .subscriber-warning{
      font-size: ${o.polished.rem(13)};
    }
    .secondary-title{
      font-size: ${o.polished.rem(14)};
    }
    .content-table{
      font-size: ${o.polished.rem(13)};
      color: ${t.colors.palette.dark[800]};
    }
    .content-table-header{
      height: ${o.polished.rem(32)};
      background-color: ${t.colors.palette.light[400]};
      display: block;
      line-height: ${o.polished.rem(30)};
    }
    .content-table-tr{
      height: ${o.polished.rem(39)};
      line-height: ${o.polished.rem(39)};
      border-bottom: 1px solid ${t.colors.palette.light[400]};
    }
    .col-4, .col-2{
      height: 100%;
    }
    .request-limit{
      margin-top: ${o.polished.rem(6)};
    }
    .request-interval{
      display: block;
      margin-top: ${o.polished.rem(-3)};
    }
  `}function u(e){const t=e.theme;return o.css`
    max-width: ${o.polished.rem(960)} !important;
    .header{
      font-size: ${o.polished.rem(16)};
      color: ${t.colors.palette.dark[600]};
    }
    .proxy-setting-container{
      width: ${o.polished.rem(960)};
      height: ${o.polished.rem(640)};
      border: 0;
      color: ${t.colors.palette.dark[600]};
    }
    .px-30{
      padding-right: ${o.polished.rem(30)};
      padding-left: ${o.polished.rem(30)};
    }
  `}const m=e=>{const t=e.theme,i=e.gutter;return o.css`
    margin-bottom: 0;
    label {
      display: inline-flex;
      align-items: center;
      margin-right: ${i||t.sizes[3]};
      .jimu-radio {
        margin-right: ${t.gutters[4]};
      }
    }
  `};function g(e){const t=e.theme;return o.css`
    width: ${o.polished.rem(260)};
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
  `}const h=e=>{const t=e.theme;return o.css`
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
  `};function b(e,t){const i=e.sizes[t];return`\n    height: ${"auto"!==i.height?i.height:function(e,t){const i=o.polished.math(`\n    ${e.fontSize} * ${e.lineHeight} +\n    ${e.paddingY} * 2`);return"0"===t.toString()?i:`calc(${i} + ${t} * 2)`}(i,e.border.width)};\n    padding: ${i.paddingY} ${i.paddingX};\n    font-size: ${i.fontSize};\n    line-height: ${i.lineHeight};\n    border-radius: ${i.borderRadius};\n  `}const y=e=>{var t,i;const s=e.theme,n=e.bsSize||e.size,a=null==e?void 0:e.buttonProps,l=null===(t=null==s?void 0:s.components)||void 0===t?void 0:t.input;return o.css`
    width: 100%;
      > .dropdown{
        > .dropdown-button {
          text-align: start;
        }
      }
      ${null!==(i=null==a?void 0:a.type)&&void 0!==i?i:o.css`
      /* Button override */
        > .dropdown{
          > .dropdown-button {
            &,
            &:hover {
              color: ${l.color};
              background-color: ${l.bg};
              background-clip: padding-box;
              box-shadow: ${l.boxShadow};
              transition: ${l.transition};
              text-decoration: none;
              ${!n&&b(l,"default")}
              ${"sm"===n&&b(l,"sm")}
              ${"lg"===n&&b(l,"lg")}
            }
          }
        }
      `}

  `},S=e=>{const t=e.isInDropdown?"366px":"calc(100% - 34px)";return o.css`
    .tree-container{
      margin-top: 16px;
      height: ${t};
    }
    `};var w=v(23137),x=v(34796),C=v(30726);class I extends o.React.PureComponent{render(){const e=this.props,{className:t,style:i,title:s,role:n,children:a}=e,l=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i}(e,["className","style","title","role","children"]);return o.React.createElement(C.Container,{className:(0,o.classNames)(t,"jimu-widget-setting--section"),style:i,role:n,"aria-label":l["aria-label"]},s&&o.React.createElement(C.Row,{className:"jimu-widget-setting--section-header"},"string"==typeof s?o.React.createElement("h6",{className:"w-100 setting-text-level-1"},s):o.React.createElement("div",{className:"w-100 text-truncate setting-text-level-1"},s)),a)}}const k=(0,x.withStyles)(I,"SettingSection");var j=v(3273),O=v.n(j);const P=e=>{const t=window.SVG,{className:i}=e,s=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i}(e,["className"]),n=(0,o.classNames)("jimu-icon jimu-icon-component",i);return t?o.React.createElement(t,Object.assign({className:n,src:O()},s)):o.React.createElement("svg",Object.assign({className:n},s))};const N=e=>o.React.createElement("div",{className:"jimu-widget-setting--row-header mb-3"},e.children);class T extends o.React.PureComponent{constructor(){super(...arguments),this.onActionClick=e=>{"drilldown"===e&&this.props&&this.props.onDrillDown&&this.props.onDrillDown()}}render(){const e=this.props,{action:t,flow:i,truncateLabel:s,label:n,role:a,indented:l,className:r,level:c=3}=e,p=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i}(e,["action","flow","truncateLabel","label","role","indented","className","level"]),d="string"==typeof n?n:"",u=(0,o.classNames)(r,"jimu-widget-setting--row","form-group","align-items-center",{"form-inline":"wrap"!==i,"pl-4":l}),m=t?"span":"label",g=n&&o.React.createElement(m,{title:d,className:(0,o.classNames)(`jimu-widget-setting--row-label justify-content-start flex-grow-1 text-break setting-text-level-${c}`,{"w-100 mr-0":"wrap"===i,"text-truncate":s})},n);return o.React.createElement(C.Row,{className:u,role:a,"aria-label":p["aria-label"]},"wrap"===i&&t?o.React.createElement(N,null,"drilldown"===t?o.React.createElement(C.Button,{size:"sm",type:"tertiary",onClick:()=>this.onActionClick("drilldown")},g,o.React.createElement(P,{className:"right-icon"})):void 0):g,this.props.children)}}const R=(0,x.withStyles)(T,"SettingRow");var M=function(e,t,i,o){return new(i||(i=Promise))((function(s,n){function a(e){try{r(o.next(e))}catch(e){n(e)}}function l(e){try{r(o.throw(e))}catch(e){n(e)}}function r(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(a,l)}r((o=o.apply(e,t||[])).next())}))};class L extends o.React.PureComponent{constructor(e){super(e),this.onSelectWidget=e=>{this.setState({currentWidget:e})},this.getListItemJSX=e=>(0,o.jsx)(C.Card,{className:(0,o.classNames)("widget-card-item",{"widget-card-selected":this.state.currentWidget&&0===this.state.currentWidget.indexOf(e.uri)}),key:e.title,onClick:()=>this.onSelectWidget(e.uri)},(0,o.jsx)("div",{className:"widget-card-image bg-light-300"},(0,o.jsx)("div",null,(0,o.jsx)(C.CardImg,{top:!0,width:"100%",src:e.image.src,alt:e.image.alt}))),(0,o.jsx)(C.CardBody,{className:"widget-card-content"},(0,o.jsx)("span",{className:"text-capitalize",title:e.title},e.title))),this.state={currentWidget:null,listInfo:[]}}componentDidMount(){this.getListInfo().then((e=>{this.setState({listInfo:e.listInfo})}))}getListInfo(){return M(this,void 0,void 0,(function*(){return yield fetch(`${o.urlUtils.getAbsoluteRootUrl()}widgets/widgets-info.json`).then((e=>M(this,void 0,void 0,(function*(){return yield e.json()})))).then((e=>({listInfo:e.map((e=>{const t={title:"",uri:"",image:{src:""}};return t.title=e.label,t.uri=e.path,t.image.src="../"+e.icon,t}))})))}))}render(){return(0,o.jsx)("div",{className:(0,o.classNames)("w-100 h-100",{[this.props.className]:!!this.props.className})},(0,o.jsx)("div",{className:"component-choose-widget-popup"},(0,o.jsx)(C.Modal,{isOpen:!0,className:"component-choose-widget-popup-modal"},(0,o.jsx)(C.ModalHeader,{className:"component-choose-widget-clear-border component-choose-widget-modal-header"},this.props.title,(0,o.jsx)("span",{className:"choose-widget-popup-close",onClick:this.props.onCancel})),(0,o.jsx)(C.ModalBody,{className:"component-choose-widget-clear-border component-choose-widget-modal-body"},this.state.listInfo.length>0?this.state.listInfo.map((e=>this.getListItemJSX(e))):"Loading..."),(0,o.jsx)(C.ModalFooter,{className:"component-choose-widget-clear-border component-choose-widget-modal-footer"},(0,o.jsx)(C.Button,{onClick:()=>this.props.onOK(this.state.currentWidget)},"OK"),(0,o.jsx)(C.Button,{onClick:this.props.onCancel},"Cancel")))))}}const A=(0,x.withStyles)(L,"WidgetSelector");var E=v(74758);const D={label:"divider",divider:!0},U=(e,t)=>{var i,o;let s=[],n=[];for(let i=1;i<t.length;i++)if("dialogs"===t[i].type){e=i;break}return 1===e&&"dialogs"===(null===(i=t[1])||void 0===i?void 0:i.type)?n=t.slice(1):1===e&&"pages"===(null===(o=t[1])||void 0===o?void 0:o.type)?s=t.slice(1):(s=t.slice(1,e),n=t.slice(e)),{pageList:s,dialogList:n}};var F;!function(e){e.Page="pages",e.Dialog="dialogs",e.Widget="widgets"}(F||(F={}));const $=(e,t,i)=>e.sort(((e,o)=>{const s=i===F.Widget?t[i][e].label:t[i][e.id].label,n=i===F.Widget?t[i][o].label:t[i][o.id].label;return s.localeCompare(n,null===window||void 0===window?void 0:window.locale,{numeric:!0,sensitivity:"base"})})),B=e=>{const t=C.hooks.useTranslate(),i={id:"none",label:t("none")},s=o.ReactRedux.useSelector((e=>{var t,i;return(null===(t=null===window||void 0===window?void 0:window.jimuConfig)||void 0===t?void 0:t.isBuilder)?null===(i=e.appStateInBuilder)||void 0===i?void 0:i.appConfig:e.appConfig})),n=o.ReactRedux.useSelector((e=>{var t;return null===(t=e.appStateInBuilder)||void 0===t?void 0:t.browserSizeMode})),a=o.ReactRedux.useSelector((e=>{var t;return null===(t=e.appStateInBuilder)||void 0===t?void 0:t.appRuntimeInfo.currentPageId})),l=o.ReactRedux.useSelector((e=>{var t;return null===(t=e.appStateInBuilder)||void 0===t?void 0:t.appRuntimeInfo.currentDialogId})),r=l?o.ContainerType.Dialog:o.ContainerType.Page,c=l||a,p=o.React.useMemo((()=>((e,t,i,s)=>{const n=[];if(e[0].maps.length>0){n.push(D);const a={header:!0,label:i===o.ContainerType.Dialog?s("currentWindow"):s("currentPage")};n.push(a),$(e[0].maps,t,F.Widget).forEach((e=>{const a={id:e,label:t.widgets[e].label,headerLabel:i===o.ContainerType.Dialog?s("currentWindow"):s("currentPage")};n.push(a)}))}const a=U(1,e);let l=!1;const r=$(a.pageList,t,F.Page);for(let e=0;e<a.pageList.length;e++)if(a.pageList[e].maps.length>0){l||(n.push(D),l=!0);const i={header:!0,label:t.pages[r[e].id].label};n.push(i),$(r[e].maps,t,F.Widget).forEach((i=>{const o={id:i,label:t.widgets[i].label,headerLabel:t.pages[r[e].id].label};n.push(o)}))}if(a.dialogList){let e=!1;const i=$(a.dialogList,t,F.Dialog);for(let o=0;o<a.dialogList.length;o++)if(a.dialogList[o].maps.length>0){e||(n.push(D),e=!0);const s={header:!0,label:t.dialogs[i[o].id].label};n.push(s),$(i[o].maps,t,F.Widget).forEach((e=>{const s={id:e,label:t.widgets[e].label,headerLabel:t.dialogs[i[o].id].label};n.push(s)}))}}return n})(E.searchUtils.getMapWidgets(s,n,r,c),s,r,t)),[s,n,r,c,t]),d=(()=>{var t;if(!e.useMapWidgetIds||0===(null===(t=e.useMapWidgetIds)||void 0===t?void 0:t.length))return null;const i=e.useMapWidgetIds[0];return p.find((e=>e.id===i))||null})();return o.React.createElement("div",{className:"w-100"},o.React.createElement("div",{className:"component-map-selector"},o.React.createElement(C.Select,{size:"sm",value:d?d.id:i.id,onChange:t=>{const o=t.target.value,s=o===i.id?[]:[o];e.onSelect&&e.onSelect(s)},"aria-label":e["aria-label"]},[i].concat(p).map(((e,t)=>o.React.createElement(C.Option,{header:e.header,divider:e.divider,value:e.id,key:t},!e.header&&o.React.createElement("div",{className:"sr-only"},e.headerLabel),e.label))))))},z=B;class W extends o.React.PureComponent{constructor(){super(...arguments),this.formatMessage=(e,t)=>{const i=Object.assign({},C.defaultMessages);return this.props.intl.formatMessage({id:e,defaultMessage:i[e]},t)}}getContent(){var e,t,i,s;const n=[];for(let e=0;e<this.props.fromRootDsIds.length;e++)n.push(this.props.fromRootDsIds[e]);const a=(null===(e=null===window||void 0===window?void 0:window.jimuConfig)||void 0===e?void 0:e.isBuilder)?null===(i=null===(t=(0,o.getAppStore)().getState())||void 0===t?void 0:t.appStateInBuilder)||void 0===i?void 0:i.appConfig:null===(s=(0,o.getAppStore)().getState())||void 0===s?void 0:s.appConfig;return o.React.createElement("div",{className:"w-100"},n.map(((e,t)=>{var i;const s=o.DataSourceManager.getInstance().getDataSource(e),n=null===(i=a.dataSources[e])||void 0===i?void 0:i.sourceLabel,l=(e=>{var t,i,s;return(null===(s=null===(i=null===(t=(0,o.getAppStore)().getState().appStateInBuilder)||void 0===t?void 0:t.dataSourcesInfo)||void 0===i?void 0:i[e])||void 0===s?void 0:s.instanceStatus)===o.DataSourceStatus.CreateError})(e),r=null==s?void 0:s.getChildDataSources();return o.React.createElement("div",{key:t},o.React.createElement("div",{className:"text-dark-600 pl-2 pr-2 d-flex align-items-center justify-content-between",style:{fontSize:"14px"}},n,l&&o.React.createElement(C.Alert,{buttonType:"tertiary",form:"tooltip",size:"small",type:"error",text:this.formatMessage("dataSourceCreateError")})),null==r?void 0:r.map(((t,i)=>o.React.createElement("div",{key:i,className:"mt-1 mb-1"},o.React.createElement("div",{className:(0,o.classNames)("layerviewselector-ds-item pl-2 pr-2",{"layerviewselector-ds-item-selected":this.props.selectedDsIds&&this.props.selectedDsIds.includes(t.id)}),title:t.getLabel(),onClick:()=>{this.props.onSelect&&this.props.onSelect({rootDataSourceId:e,dataSourceId:t.id})}},null==t?void 0:t.getLabel())))))})))}render(){return this.props.fromRootDsIds&&0!==this.props.fromRootDsIds.length?o.React.createElement("div",{className:"w-100"},this.getContent()):null}}const V=(0,o.injectIntl)(W),G=o.css`
& {
  .ds-selector > span {
    display: none;
  }
}
`;class _ extends o.React.PureComponent{constructor(e){super(e),this.toggleList=e=>{this.setState({listOpen:!this.state.listOpen})},this.onResize=e=>{this.setState({width:e})},this.handleChooseLayer=e=>{if(this.props.onSelect)if(e){const t=o.DataSourceManager.getInstance().getDataSource(e.rootDataSourceId),i=o.DataSourceManager.getInstance().getDataSource(e.dataSourceId).id,s=t.getJimuChildId(i)[0];this.props.onSelect((0,o.Immutable)({jimuMapViewId:`${this.props.useMapWidgetIds[0]}-${e.rootDataSourceId}`,jimuLayerId:s,dataSourceId:e&&e.dataSourceId,rootDataSourceId:e&&e.rootDataSourceId}))}else this.props.onSelect((0,o.Immutable)({}));this.setState({listOpen:!1})},this.handleClickNone=()=>{this.props.onSelect&&this.props.onSelect((0,o.Immutable)({})),this.setState({listOpen:!1})},this.getTitle=()=>this.props.jimuLayerViewInfo&&this.props.useMapWidgetIds&&this.props.useMapWidgetIds[0]&&this.props.jimuLayerViewInfo.dataSourceId?(0,o.jsx)(o.DataSourceComponent,{useDataSource:(0,o.Immutable)({dataSourceId:this.props.jimuLayerViewInfo.dataSourceId,mainDataSourceId:this.props.jimuLayerViewInfo.dataSourceId,rootDataSourceId:this.props.jimuLayerViewInfo.rootDataSourceId})},((e,t,i)=>null==e?void 0:e.getLabel())):this.getNoneString(),this.getContent=()=>{const e=this.props.useMapWidgetIds&&this.props.useMapWidgetIds[0],t=(0,o.getAppStore)().getState().appStateInBuilder.appConfig.widgets[e];return t&&t.useDataSources&&t.useDataSources[0]?(0,o.jsx)("div",{className:"w-100 mt-1 mb-2"},(0,o.jsx)("div",{onClick:()=>{this.handleClickNone()}},(0,o.jsx)("div",{className:"layerviewselector-ds-item pl-2 pr-2"},this.getNoneString())),(0,o.jsx)("div",{className:"w-100 mt-1 mb-1"},(0,o.jsx)("div",{className:"w-100 border border-bottom-0 border-right-0 border-left-0"})),(0,o.jsx)("div",{className:"ds-selector"},(0,o.jsx)(o.MultipleDataSourceComponent,{useDataSources:t.useDataSources},((e,t)=>{const i=(0,o.Immutable)(Object.keys(e)),s=[];return this.props.jimuLayerViewInfo&&this.props.jimuLayerViewInfo.dataSourceId&&s.push(this.props.jimuLayerViewInfo.dataSourceId),(0,o.jsx)(V,{fromRootDsIds:i,onSelect:e=>{this.handleChooseLayer(e)},selectedDsIds:(0,o.Immutable)(s)})})))):this.getEmptyContent()},this.getNoneString=()=>this.props.intl.formatMessage({id:"none",defaultMessage:"None"}),this.getEmptyContent=()=>(0,o.jsx)("div",{className:"w-100 mt-1 mb-2"},(0,o.jsx)("div",{className:"layerviewselector-ds-item pl-2 pr-2",onClick:()=>{this.handleClickNone()}},this.getNoneString())),this.state={listOpen:!1,width:0}}render(){return(0,o.jsx)("div",{className:(0,o.classNames)("w-100",{[this.props.className]:!!this.props.className})},(0,o.jsx)(C.Dropdown,{size:"sm",toggle:e=>{this.toggleList(e)},isOpen:this.state.listOpen,className:"w-100"},(0,o.jsx)(C.DropdownButton,{size:"sm",type:"tertiary",className:(0,o.classNames)("w-100 d-flex flex-column align-items-center toollist-item","justify-content-between toollist-item-click layerviewselector-input")},(0,o.jsx)("div",{className:"w-100 d-flex justify-content-between align-items-center"},(0,o.jsx)("div",{className:"layerviewselector-input-text ml-2"},this.getTitle()))),(0,o.jsx)(C.DropdownMenu,{className:(0,o.classNames)("ml-0 mr-0 mb-0 mt-1 p-0",{[this.props.className]:!!this.props.className}),css:G},(0,o.jsx)("div",{className:"w-100 h-100 layerviewselector-bg"},(0,o.jsx)("div",{style:{width:`${this.state.width}px`}},this.getContent())))),(0,o.jsx)(o.ReactResizeDetector,{handleWidth:!0,onResize:this.onResize}))}}const J=(0,o.injectIntl)((0,x.withStyles)(_,"JimuLayerViewSelectorDeprecated"));var q=v(30224),H=v.n(q);const Z=e=>{const t=window.SVG,{className:i}=e,s=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i}(e,["className"]),n=(0,o.classNames)("jimu-icon jimu-icon-component",i);return t?o.React.createElement(t,Object.assign({className:n,src:H()},s)):o.React.createElement("svg",Object.assign({className:n},s))};var K=v(59587),Q=v(26826);const X=(e,t)=>e.itemChildren&&0!==e.itemChildren.length?(e.itemChildren=e.itemChildren.sort(((e,i)=>t[i.itemKey].index-t[e.itemKey].index)),e.itemChildren.forEach((e=>X(e,t))),e):e,Y=(e,t)=>{if(!e.itemChildren||0===e.itemChildren.length)return e.itemStateTitle.toLowerCase().includes(t.toLowerCase())?e:null;const i=e.itemChildren.map((e=>Y(e,t))).filter(Boolean);return i.length>0&&(e.itemStateExpanded=!0),0===i.length?e.itemStateTitle.toLowerCase().includes(t.toLowerCase())?e:null:(e.itemChildren=i,e)},ee=(e,t,i)=>e.itemKey===t?(e.itemStateChecked=i,e):e.itemChildren&&0!==e.itemChildren.length?(e.itemChildren=e.itemChildren.map((e=>ee(e,t,i))),e):e,te=e=>{const{jimuMapViewId:t,hideLayers:i=(()=>!1),disableLayers:s=(()=>!1),isMultiSelection:n=!1,defaultSelectedValues:a=[]}=e,l=C.hooks.useTranslate(),{useRef:r,useState:c}=o.React,p=r(null),d=Q.MapViewManager.getInstance().getJimuMapViewById(t),u=null==d?void 0:d.jimuLayerViews,[m,g]=c(""),[h,v]=c((()=>{const e=((e,t,i,s)=>{var n;const a={itemKey:"root item",itemStateTitle:"root item",itemChildren:[]},l={};for(const i of Object.keys(e)){const o=t(e[i]),n=(null==s?void 0:s.length)>0&&s.includes(i);l[i]={itemKey:i,itemStateTitle:e[i].layer.title,itemChildren:[],isItemSelectable:!o,itemStateChecked:!o&&n}}for(const[t,s]of Object.entries(e)){const{parentJimuLayerViewId:r}=s,c=e[t].layerDataSourceId;if(!c||(null===(n=o.DataSourceManager.getInstance().getDataSource(c))||void 0===n?void 0:n.isInAppConfig())){const o=l[t];i(e[t])||(null===r?a.itemChildren.push(o):l[r].itemChildren.push(o))}}return a})(u,s,i,a);return X(e,u)})),[f,b]=o.React.useState(null);return(0,o.jsx)("div",{className:(0,o.classNames)("component-layer-view-selector","w-100 h-100",e.className||"")},(0,o.jsx)("div",{className:"search-container"},(0,o.jsx)(C.TextInput,{prefix:(0,o.jsx)(Z,null),allowClear:!0,size:"sm",type:"text",defaultValue:"",ref:p,placeholder:l("SearchLabel"),onChange:e=>{const t=e.target.value;if(""===t)b(null),g(t),v(h);else{g(t);const e=JSON.parse(JSON.stringify(h)),i=Y(e,t);b(i||{itemKey:"root item",itemStateTitle:"root item",itemChildren:[]})}}})),(0,o.jsx)("div",{className:"tree-container"},(0,o.jsx)(K.Tree,{className:"w-100",collapseStyle:K.TreeCollapseStyle.Arrow,dndEnabled:!1,onUpdateItem:(t,i)=>{if(t.updateType===K.TreeItemActionType.HandleExpandItem){const[,e]=t.itemJsons;f?b(Object.assign({},e)):v(Object.assign({},e))}if(t.updateType===K.TreeItemActionType.HandleCheckboxChanged){const[i,o]=t.itemJsons;if(f?b(Object.assign({},o)):v(Object.assign({},o)),n){const t=[...a];i.isItemSelectable&&i.itemStateChecked?(t.push(i.itemKey),f&&ee(h,i.itemKey,!0)):i.isItemSelectable&&!1===i.itemStateChecked&&(t.splice(t.indexOf(i.itemKey),1),f&&ee(h,i.itemKey,!1)),e.onChange(t)}else i.isItemSelectable&&i.itemStateChecked?(f&&(ee(h,i.itemKey,!0),ee(h,a[0],!1)),e.onChange([i.itemKey])):i.isItemSelectable&&!1===i.itemStateChecked&&(f&&ee(h,i.itemKey,!1),e.onChange([]))}},rootItemJson:f||h,isMultiSelection:n,checkboxLinkage:!1,size:"sm",treeAlignmentType:K.TreeAlignmentType.Intact,disableDoubleClickTitle:!0,treeStyle:K.TreeStyle.Basic,singleLineText:!0,searchedText:m})))},ie=(0,x.withStyles)(te,"JimuLayerViewSelector"),oe=e=>{const t=C.hooks.useTranslate(),{useRef:i,useState:s}=o.React,n=i(null),[a,l]=s(!1);return(0,o.jsx)("div",{className:(0,o.classNames)("component-layer-view-selector-dropdown","w-100",e.className||"")},(0,o.jsx)(C.Dropdown,{className:"w-100",direction:"down",toggle:()=>{l(!a)},isOpen:a,autoWidth:!0},(0,o.jsx)(C.DropdownButton,{ref:e=>{n.current=e}},(()=>{var i;const{defaultSelectedValues:o,isMultiSelection:s,jimuMapViewId:n}=e,a=(null==o?void 0:o.length)||0;if(0===a)return t("numSelected",{number:a});if(s)return t("numSelected",{number:a});{const e=Q.MapViewManager.getInstance().getJimuMapViewById(n);return null===(i=null==e?void 0:e.jimuLayerViews[o[0]])||void 0===i?void 0:i.layer.title}})()),(0,o.jsx)(C.DropdownMenu,{className:"shadow-lg",css:o.css`
      ${n?`\n          width: ${o.polished.rem(1.5*(null===(r=n.current)||void 0===r?void 0:r.clientWidth))} !important;\n        `:""}
      padding: 16px;
    `,alignment:"end"},(0,o.jsx)(ie,Object.assign({},e,{isInDropdown:!0})))));var r},se=(0,x.withStyles)(oe,"JimuLayerViewSelectorDropdown"),ne=e=>{if(!e)return"";const t=o.DataSourceManager.getInstance().getDataSource(e);return(null==t?void 0:t.getLabel())||e},ae=e=>{const t=C.hooks.useTranslate(),i={id:"none",label:t("none")},s=o.ReactRedux.useSelector((e=>{var t,i;return(null===(t=null===window||void 0===window?void 0:window.jimuConfig)||void 0===t?void 0:t.isBuilder)?null===(i=e.appStateInBuilder)||void 0===i?void 0:i.appConfig:e.appConfig})),n=o.ReactRedux.useSelector((e=>{var t;return null===(t=e.appStateInBuilder)||void 0===t?void 0:t.browserSizeMode})),a=o.ReactRedux.useSelector((e=>{var t;return null===(t=e.appStateInBuilder)||void 0===t?void 0:t.appRuntimeInfo.currentPageId})),l=o.ReactRedux.useSelector((e=>{var t;return null===(t=e.appStateInBuilder)||void 0===t?void 0:t.appRuntimeInfo.currentDialogId})),r=l?o.ContainerType.Dialog:o.ContainerType.Page,c=l||a,p=o.React.useMemo((()=>{const e=E.searchUtils.getMapWidgets(s,n,r,c);return(()=>{const i=[],n=e[0].maps.length>0;let a=!1;n&&$(e[0].maps,s,F.Widget).forEach(((e,n)=>{if(s.widgets[e].useDataSources&&s.widgets[e].useDataSources.length>0){a||(i.push(D),a=!0);const n={header:!0,label:`${r===o.ContainerType.Dialog?t("currentWindow"):t("currentPage")} | ${s.widgets[e].label}`};i.push(n),s.widgets[e].useDataSources.forEach((t=>{const o={id:`${e}-${t.dataSourceId}`,label:ne(t.dataSourceId)};i.push(o)}))}}));const l=U(1,e);let c=!1;const p=$(l.pageList,s,F.Page);for(let e=0;e<l.pageList.length;e++){const t=$(p[e].maps,s,F.Widget);for(let o=0;o<t.length;o++)if(s.widgets[t[o]].useDataSources&&s.widgets[t[o]].useDataSources.length>0){c||(i.push(D),c=!0);const n={header:!0,label:`${s.pages[p[e].id].label} | ${s.widgets[t[o]].label}`};i.push(n),s.widgets[t[o]].useDataSources.forEach((e=>{const s={id:`${t[o]}-${e.dataSourceId}`,label:ne(e.dataSourceId)};i.push(s)}))}}if(l.dialogList){let e=!1;const t=$(l.dialogList,s,F.Dialog);for(let o=0;o<l.dialogList.length;o++){const n=$(t[o].maps,s,F.Widget);for(let a=0;a<n.length;a++)if(s.widgets[n[a]].useDataSources&&s.widgets[n[a]].useDataSources.length>0){e||(i.push(D),e=!0);const l={header:!0,label:`${s.dialogs[t[o].id].label} | ${s.widgets[n[a]].label}`};i.push(l),s.widgets[n[a]].useDataSources.forEach((e=>{const t={id:`${n[a]}-${e.dataSourceId}`,label:ne(e.dataSourceId)};i.push(t)}))}}}return i})()}),[s,n,r,c,t]),d=(()=>{var t;if(!e.useMapViewIds||0===(null===(t=e.useMapViewIds)||void 0===t?void 0:t.length))return null;const i=e.useMapViewIds[0];return p.find((e=>e.id===i))||null})();return o.React.createElement("div",{className:"w-100"},o.React.createElement("div",{className:"component-map-view-selector"},o.React.createElement(C.Select,{size:"sm",onChange:t=>{var o;const s=t.target.value,n=s===i.id?[]:[s];null===(o=e.onChange)||void 0===o||o.call(e,n)},value:d?d.id:i.id},[i].concat(p).map(((e,t)=>o.React.createElement(C.Option,{header:e.header,divider:e.divider,value:e.id,key:t},e.label))))))};class le extends o.React.PureComponent{constructor(e){super(e),this.onStyleClick=e=>{this.state.selectedValue!==e&&(this.setState({selectedValue:e}),this.props.onChange&&this.props.onChange(e))},this.state={selectedValue:this.props.value}}componentDidUpdate(e,t){e.value!==this.props.value&&this.setState({selectedValue:this.props.value})}render(){const e=this.props.styles;return o.React.createElement("div",{className:(0,o.classNames)("widget-setting--stylepicker w-100",{small:"small"===this.props.size})},Object.keys(e).map(((t,i)=>o.React.createElement("div",{key:t,role:"button",className:(0,o.classNames)("widget-setting--stylepicker-item",{active:t===this.state.selectedValue,"full-width":"full"===e[t].size}),style:{backgroundImage:`url(${e[t].thumbnail})`},onClick:()=>this.onStyleClick(t)}))))}}const re=(0,x.withStyles)(le,"StylePicker");class ce extends o.React.PureComponent{constructor(e){super(e),this.state={value:this.props.value},this.onRadioButtonChange=e=>{const t=e.target.value;this.state.value!==t&&(this.setState({value:t}),this.props.onChange&&this.props.onChange(t))},ce.count++,this.inputName=`setting-radiogroup-${ce.count}`}render(){const e=this.props,{options:t,className:i}=e,s=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i}(e,["options","className"]);return o.React.createElement(C.FormGroup,Object.assign({},s,{onChange:this.onRadioButtonChange,className:`setting--button-group ${i}`}),t.map((e=>o.React.createElement(C.Label,{key:e.value},o.React.createElement(C.Radio,{value:e.value,name:this.inputName,checked:this.state.value===e.value}),e.content))))}}ce.count=0;const pe=(0,x.withStyles)(ce,"RadioGroup");var de=v(96009),ue=v.n(de),me=v(59788),ge=v.n(me);const he=x.styled.div((({isOpen:e,type:t})=>`\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    border-top: ${"primary"===t?"2px":"0px"} solid ${e?"var(--primary)":"var(--light-500)"};\n    background-color: ${"primary"===t?"var(--light-500)":"unset"};\n    .form-label {\n      width: calc(100% - 30px);\n    }\n  `)),ve=e=>{const{className:t,type:i,level:s,isOpen:n,children:a}=e;return o.React.createElement(he,{className:(0,o.classNames)(`collapse-header setting-text-level-${s}`,t,{"px-1":"primary"===i}),type:i,isOpen:n},a)},fe=x.styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  width: 100%;
  max-width: 100%;
  &.padded {
    max-width: calc(100% - 30px);
  }
`,be=e=>{const{className:t,leftIcon:i,label:s,padded:n,wrap:a=!1}=e,l="string"==typeof s;return o.React.createElement(fe,{className:(0,o.classNames)("collapse-label",t,{padded:n})},i&&o.React.createElement(C.Icon,{className:"mr-2",icon:i}),!l&&s,l&&o.React.createElement("div",{title:s,className:(0,o.classNames)("title",{"text-truncate":!a})},s))},ye=e=>{const{disabled:t,activated:i,icon:s=ge(),activatedIcon:n=ue(),onActivationChange:a}=e,l=i?n:s,r=C.hooks.useTranslate()(i?"collapse":"expand");return o.React.createElement(C.Button,{disabled:t,size:"sm",type:"tertiary",icon:!0,title:r,"aria-label":r,className:"pr-0",onClick:()=>{null==a||a(!i)}},o.React.createElement(C.Icon,{icon:l}))},Se=e=>{const{type:t,level:i,isOpen:s,leftIcon:n,label:a,onRequestOpen:l,onRequestClose:r,rightIcon:c=ge(),rightActiveIcon:p=ue(),wrapLabel:d,disabled:u}=e;return o.React.createElement(ve,{className:"collapse-normal-header",type:t,level:i,isOpen:s},o.React.createElement(o.React.Fragment,null,o.React.createElement(be,{wrap:d,leftIcon:n,label:a,padded:!0}),o.React.createElement(ye,{disabled:u,activated:s,icon:c,activatedIcon:p,onActivationChange:e=>{e?l&&l():r&&r()}})))},we=e=>{const{type:t,level:i,isOpen:s,leftIcon:n,label:a,onRequestOpen:l,onRequestClose:r,wrapLabel:c,disabled:p}=e,d=C.hooks.useTranslate()(s?"collapse":"expand");return o.React.createElement(ve,{className:"collapse-toggle-header",type:t,level:i,isOpen:s},o.React.createElement(be,{wrap:c,leftIcon:n,label:a,padded:!0}),o.React.createElement(C.Switch,{checked:s,disabled:p,onChange:(e,t)=>{t?l&&l():r&&r()},title:d,"aria-label":d}))},xe=e=>{const{type:t,level:i,isOpen:s,label:n,rightIcon:a,rightActiveIcon:l,onRequestOpen:r,onRequestClose:c,name:p,checked:d=s,onCheckedChange:u,disableActionForUnchecked:m=!1,wrapLabel:g}=e;return o.React.createElement(ve,{className:"collapse-radio-header",type:t,level:i,isOpen:s},o.React.createElement(C.Label,{centric:!0,check:!0,className:"d-flex align-items-center form-label"},o.React.createElement(C.Radio,{name:p,className:"mr-2",checked:d,"aria-label":n,onChange:(e,t)=>{null==u||u(t)}}),o.React.createElement(be,{wrap:g,label:n,padded:!0})),o.React.createElement(ye,{disabled:m&&!d,activated:s,icon:a,activatedIcon:l,onActivationChange:e=>{e?r&&r():c&&c()}}))},Ce=e=>{const{type:t,level:i,isOpen:s,label:n,rightIcon:a=ge(),rightActiveIcon:l=ue(),onRequestOpen:r,onRequestClose:c,name:p,checked:d=s,onCheckedChange:u,disableActionForUnchecked:m=!1,wrapLabel:g}=e;return o.React.createElement(ve,{className:"collapse-checkbox-header",type:t,level:i,isOpen:s},o.React.createElement(C.Label,{centric:!0,check:!0,className:"d-flex align-items-center form-label"},o.React.createElement(C.Checkbox,{name:p,className:"mr-2",checked:d,"aria-label":n,onChange:(e,t)=>{null==u||u(t)}}),o.React.createElement(be,{wrap:g,label:n,padded:!0})),o.React.createElement(ye,{disabled:m&&!d,activated:s,icon:a,activatedIcon:l,onActivationChange:e=>{e?r&&r():c&&c()}}))};const Ie=x.styled.div`
    .dividing-line {
      background-color: var(--light-800);
      width: 100%;
      height: 1px;
    }
  `,ke=e=>{const{className:t,bottomLine:i=!1,isOpen:s,children:n,header:a,"aria-label":l,role:r="group"}=e,c=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i}(e,["className","bottomLine","isOpen","children","header","aria-label","role"]);return o.React.createElement(Ie,{className:(0,o.classNames)("setting-collapse w-100",t),"aria-label":l,role:r},a,o.React.createElement(C.Collapse,Object.assign({},c,{isOpen:s}),s&&o.React.createElement(o.React.Fragment,null,n,i&&o.React.createElement("div",{className:"dividing-line mt-3"}))))};const je=e=>{const{type:t="default",className:i,leftIcon:s,label:n,onRequestOpen:a,onRequestClose:l,rightIcon:r=ge(),rightActiveIcon:c=ue(),level:p=0,defaultIsOpen:d,isOpen:u,wrapLabel:m,disabled:g}=e,h=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i}(e,["type","className","leftIcon","label","onRequestOpen","onRequestClose","rightIcon","rightActiveIcon","level","defaultIsOpen","isOpen","wrapLabel","disabled"]),[v,f]=C.hooks.useControlled({controlled:u,default:u||d}),b=o.React.createElement(Se,{type:t,isOpen:v,level:p,leftIcon:s,wrapLabel:m,label:n,disabled:g,rightIcon:r,rightActiveIcon:c,onRequestOpen:()=>{f(!0),null==a||a()},onRequestClose:()=>{f(!1),null==l||l()}});return o.React.createElement(ke,Object.assign({className:(0,o.classNames)("setting-collapse w-100",i),header:b,isOpen:v},h))},Oe=je;const Pe=e=>{const{type:t="default",className:i,leftIcon:s,label:n,onRequestOpen:a,onRequestClose:l,level:r=0,defaultIsOpen:c,isOpen:p,wrapLabel:d,disabled:u}=e,m=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i}(e,["type","className","leftIcon","label","onRequestOpen","onRequestClose","level","defaultIsOpen","isOpen","wrapLabel","disabled"]),[g,h]=C.hooks.useControlled({controlled:p,default:p||c}),v=o.React.createElement(we,{type:t,isOpen:g,level:r,leftIcon:s,wrapLabel:d,disabled:u,label:n,onRequestOpen:()=>{h(!0),null==a||a()},onRequestClose:()=>{h(!1),null==l||l()}});return o.React.createElement(ke,Object.assign({className:(0,o.classNames)("collapse-toggle w-100",i),header:v,isOpen:g},m))};const Ne=e=>{const{type:t="default",className:i,leftIcon:s,label:n,defaultIsOpen:a,isOpen:l,onRequestOpen:r,onRequestClose:c,rightIcon:p,rightActiveIcon:d,level:u=0,name:m,checked:g,onCheckedChange:h,disableActionForUnchecked:v,wrapLabel:f}=e,b=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i}(e,["type","className","leftIcon","label","defaultIsOpen","isOpen","onRequestOpen","onRequestClose","rightIcon","rightActiveIcon","level","name","checked","onCheckedChange","disableActionForUnchecked","wrapLabel"]),[y,S]=C.hooks.useControlled({controlled:l,default:l||a}),w=o.React.createElement(xe,{type:t,isOpen:y,level:u,label:n,wrapLabel:f,rightIcon:p,rightActiveIcon:d,onRequestOpen:()=>{S(!0),null==r||r()},onRequestClose:()=>{S(!1),null==c||c()},name:m,checked:g,disableActionForUnchecked:v,onCheckedChange:h});return o.React.createElement(ke,Object.assign({className:(0,o.classNames)("collapse-radio w-100",i),header:w,isOpen:y},b))};const Te=e=>{const{type:t="default",className:i,leftIcon:s,label:n,defaultIsOpen:a,isOpen:l,onRequestOpen:r,onRequestClose:c,rightIcon:p,rightActiveIcon:d,level:u=0,defaultChecked:m,name:g,checked:h,openForCheck:v=!1,closeForUncheck:f,onCheckedChange:b,disableActionForUnchecked:y,wrapLabel:S}=e,w=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i}(e,["type","className","leftIcon","label","defaultIsOpen","isOpen","onRequestOpen","onRequestClose","rightIcon","rightActiveIcon","level","defaultChecked","name","checked","openForCheck","closeForUncheck","onCheckedChange","disableActionForUnchecked","wrapLabel"]),[x,I]=C.hooks.useControlled({controlled:l,default:l||a}),[k,j]=C.hooks.useControlled({controlled:h,default:h||m}),O=()=>{I(!0),null==r||r()},P=()=>{I(!1),null==c||c()},N=o.React.createElement(Ce,{type:t,isOpen:x,level:u,wrapLabel:S,label:n,rightIcon:p,rightActiveIcon:d,onRequestOpen:O,onRequestClose:P,name:g,checked:k,disableActionForUnchecked:y,onCheckedChange:e=>{e?v&&O():f&&P(),j(e),b(e)}});return o.React.createElement(ke,Object.assign({className:(0,o.classNames)("collapse-checkbox w-100",i),header:N,isOpen:x},w))};var Re;!function(e){e.CurrentWindow="_self",e.TopWindow="_top",e.NewWindow="_blank"}(Re||(Re={}));class Me extends o.React.PureComponent{constructor(){super(...arguments),this.itemOnClick=e=>{this.props.onClick(e),this.setState({selectedItemName:e.name})}}getListContent(){return this.props.datas.map(((e,t)=>o.React.createElement("div",{onClick:()=>this.itemOnClick(e),key:t,className:(0,o.classNames)("link-selector-list-item btn w-100 border text-left border-bottom-0 rounded-0 text-truncate",{itemselected:this.props.linkParam.value===e.id})},e.name)))}render(){const e=this.props.datas.find((e=>this.props.linkParam.value===e.id)),t=e&&e.id;return o.React.createElement("div",{className:"link-selector-list w-100"},o.React.createElement(C.Select,{value:t,className:"w-100",onChange:e=>this.itemOnClick(this.props.datas.find((t=>t.id===e.target.value))),"aria-label":this.props["aria-label"],size:"sm"},this.props.datas.map(((e,t)=>o.React.createElement("option",{key:t,value:e.id},e.name)))))}}function Le(e,t){var i,s;const n=null===(i=null==t?void 0:t.pages)||void 0===i?void 0:i[e];if((null==n?void 0:n.type)===o.PageType.Normal){const i=E.searchUtils.getContentsInContainer(t,{type:o.ContainerType.Page,id:e},o.LayoutItemType.Section,E.utils.getCurrentSizeMode());let a=[],l=[];return n.header&&(a=E.searchUtils.getContentsInContainer(t,{type:o.ContainerType.Header,id:"header"},o.LayoutItemType.Section,E.utils.getCurrentSizeMode())),n.footer&&(l=E.searchUtils.getContentsInContainer(t,{type:o.ContainerType.Footer,id:"footer"},o.LayoutItemType.Section,E.utils.getCurrentSizeMode())),null===(s=a.concat(i,l))||void 0===s?void 0:s.sort(((e,i)=>{var o,s,n,a,l;return null===(n=null===(s=null===(o=null==t?void 0:t.sections)||void 0===o?void 0:o[e])||void 0===s?void 0:s.label)||void 0===n?void 0:n.localeCompare(null===(l=null===(a=null==t?void 0:t.sections)||void 0===a?void 0:a[i])||void 0===l?void 0:l.label,null===window||void 0===window?void 0:window.locale,{numeric:!0,sensitivity:"base"})}))}return[]}function Ae(e,t){var i;return(null===(i=null==t?void 0:t.dialogs)||void 0===i?void 0:i[e])?E.searchUtils.getContentsInContainer(t,{type:o.ContainerType.Dialog,id:e},o.LayoutItemType.Section,E.utils.getCurrentSizeMode()):[]}function Ee(e,t){if(!e)return[];const i=De(e,t);if(i&&i.length>0){let e=[],o=[];return i.forEach((i=>{e=e.concat(Ue(i,t).map((e=>e.id)))})),e.length>0&&e.forEach((e=>{o=o.concat(Ee(e,t))})),e.concat(o)}return[]}function De(e,t){return E.searchUtils.getContentsInContainer(t,{type:o.ContainerType.View,id:e},o.LayoutItemType.Section,E.utils.getCurrentSizeMode())||[]}function Ue(e,t){const i=t.sections[e].views,o=[];for(let e=0;e<i.length;e++)o.push({id:i[e],label:t.views[i[e]].label});return o.sort(((e,t)=>{var i;return null===(i=e.label)||void 0===i?void 0:i.localeCompare(t.label,null===window||void 0===window?void 0:window.locale,{numeric:!0,sensitivity:"base"})}))}function Fe(e,t){const i=null==e?void 0:e.pages,s={id:o.CONSTANTS.CURRENT_PAGE,name:t.formatMessage({id:"currentPage",defaultMessage:C.defaultMessages.currentPage})},n=i&&Object.keys(i).filter((e=>i[e].type===o.PageType.Normal)).sort(((e,t)=>{var o;return null===(o=i[e].label)||void 0===o?void 0:o.localeCompare(i[t].label,null===window||void 0===window?void 0:window.locale,{numeric:!0,sensitivity:"base"})}));let a=[s];return n&&(a=a.concat(n.map((e=>({id:e,name:i[e].label}))))),a}function $e(e){const t=null==e?void 0:e.dialogs,i=t&&Object.values(t).filter((e=>(null==e?void 0:e.mode)===o.DialogMode.Fixed))||[],s=t&&Object.values(t).filter((e=>(null==e?void 0:e.mode)===o.DialogMode.Anchored))||[],n=i.concat(s).sort(((e,t)=>{var i;return null===(i=e.label)||void 0===i?void 0:i.localeCompare(t.label,null===window||void 0===window?void 0:window.locale,{numeric:!0,sensitivity:"base"})})).map((e=>e.id));return n&&n.filter((e=>!t[e].isSplash)).map((e=>({id:e,name:t[e].label})))}function Be(e){var t;return ze(e.linkType===o.LinkType.View?null===(t=e.value)||void 0===t?void 0:t.split(",")[0]:null)}function ze(e){return"string"==typeof e&&e.includes("dialog_")}const We=["https","mailto","tel","sms","ftp"];class Ve extends o.React.PureComponent{constructor(){super(...arguments),this.getInitLinkParam=()=>{const e=this.props.appConfig.pageStructure;if(!e||e.length<1)return(0,o.Immutable)({value:""});if(this.props.originLinkParam.linkType!==o.LinkType.Page){const e=Fe(this.props.appConfig,this.props.intl);return(0,o.Immutable)({linkType:o.LinkType.Page,value:e&&e.some((e=>"default"===e.id))?"default":e&&e[0]&&e[0].id,openType:!this.props.openTypes||this.props.openTypes.includes(Re.CurrentWindow)?Re.CurrentWindow:this.props.openTypes[0]})}return this.props.originLinkParam},this.setLinkParam=e=>{let t=this.props.linkParam;t=t.set("value",e.id),this.props.onLinkParamChange(t)}}componentDidMount(){const e=this.getInitLinkParam();this.props.onLinkParamChange(e)}render(){const e=Fe(this.props.appConfig,this.props.intl);return o.React.createElement("div",{className:"w-100"},o.React.createElement("div",{className:"mb-12 option-name"},this.props.intl.formatMessage({id:"chooseAPage",defaultMessage:C.defaultMessages.chooseAPage})),o.React.createElement("div",null,o.React.createElement(Me,{linkParam:this.props.linkParam,datas:e,onClick:this.setLinkParam,"aria-label":this.props.intl.formatMessage({id:"chooseAPage",defaultMessage:C.defaultMessages.chooseAPage})})))}}class Ge extends o.React.PureComponent{constructor(){super(...arguments),this.getInitLinkParam=()=>{const e=this.props.appConfig.dialogs;if(!e||Object.keys(e).length<1)return(0,o.Immutable)({linkType:o.LinkType.Dialog,value:""});if(this.props.originLinkParam.linkType!==o.LinkType.Dialog){const e=$e(this.props.appConfig);return(0,o.Immutable)({linkType:o.LinkType.Dialog,value:e&&e[0]&&e[0].id})}return this.props.originLinkParam},this.setLinkParam=e=>{let t=this.props.linkParam;t=t.set("value",e.id),this.props.onLinkParamChange(t)}}componentDidMount(){const e=this.getInitLinkParam();this.props.onLinkParamChange(e)}componentDidUpdate(e){if(e.appConfig!==this.props.appConfig){const e=this.getInitLinkParam();this.props.onLinkParamChange(e)}}render(){const e=$e(this.props.appConfig);return o.React.createElement("div",{className:"w-100"},o.React.createElement("div",{className:"mb-12 option-name"},this.props.intl.formatMessage({id:"chooseADialog",defaultMessage:C.defaultMessages.chooseADialog})),o.React.createElement("div",null,e&&e.length>0&&o.React.createElement(Me,{linkParam:this.props.linkParam,datas:e,onClick:this.setLinkParam,"aria-label":this.props.intl.formatMessage({id:"chooseADialog",defaultMessage:C.defaultMessages.chooseADialog})})))}}class _e extends o.React.PureComponent{constructor(){super(...arguments),this.getInitLinkParam=()=>{const e=E.searchUtils.getBlockAnchorPointsInPage(E.utils.getAppConfig(),E.utils.getCurrentPageId(),E.utils.getCurrentSizeMode());if(!e||e.length<1)return(0,o.Immutable)({linkType:o.LinkType.Block,value:""});if(this.props.originLinkParam.linkType!==o.LinkType.Block){const e=this.getBlockData();return(0,o.Immutable)({linkType:o.LinkType.Block,value:e&&e.some((e=>"default"===e.id))?"default":e&&e[0]&&e[0].id})}return this.props.originLinkParam},this.getBlockData=()=>{var e;return(null===(e=E.searchUtils.getBlockAnchorPointsInPage(E.utils.getAppConfig(),E.utils.getCurrentPageId(),E.utils.getCurrentSizeMode()))||void 0===e?void 0:e.sort(((e,t)=>{var i;return null===(i=e.label)||void 0===i?void 0:i.localeCompare(t.label,null===window||void 0===window?void 0:window.locale,{numeric:!0,sensitivity:"base"})}))).map((e=>({id:e.id,name:e.label})))},this.setLinkParam=e=>{let t=this.props.linkParam;t=t.set("value",e.id),this.props.onLinkParamChange(t)}}componentDidMount(){const e=this.getInitLinkParam();this.props.onLinkParamChange(e)}render(){const e=this.getBlockData();return o.React.createElement("div",{className:"w-100"},o.React.createElement("div",{className:"mb-12 option-name"},this.props.intl.formatMessage({id:"jumpTo",defaultMessage:C.defaultMessages.jumpTo})),o.React.createElement("div",null,e&&e.length>0&&o.React.createElement(Me,{linkParam:this.props.linkParam,datas:e,onClick:this.setLinkParam,"aria-label":this.props.intl.formatMessage({id:"jumpTo",defaultMessage:C.defaultMessages.jumpTo})})))}}class Je extends o.React.PureComponent{constructor(){super(...arguments),this.screenGroupLabelStyle={marginLeft:"-20px"},this.getInitLinkParam=()=>{const e=this.getScreenData();return!e||e.length<1?(0,o.Immutable)({linkType:o.LinkType.Screen,value:""}):this.props.originLinkParam.linkType!==o.LinkType.Screen?(0,o.Immutable)({linkType:o.LinkType.Screen,value:e[0].screens[0].id}):this.props.originLinkParam},this.getScreenData=()=>{var e;return null===(e=E.searchUtils.getScreenAnchorPointsInPage(E.utils.getAppConfig(),E.utils.getCurrentPageId(),E.utils.getCurrentSizeMode()))||void 0===e?void 0:e.sort(((e,t)=>{var i;return null===(i=e.label)||void 0===i?void 0:i.localeCompare(t.label,null===window||void 0===window?void 0:window.locale,{numeric:!0,sensitivity:"base"})}))},this.setLinkParam=e=>{let t=this.props.linkParam;t=t.set("value",e.target.value),this.props.onLinkParamChange(t)}}componentDidMount(){const e=this.getInitLinkParam();this.props.onLinkParamChange(e)}render(){var e;const t=this.getScreenData(),i=[];return t.forEach((e=>{i.push(o.React.createElement("option",{value:e.id,key:e.id,disabled:!0,style:this.screenGroupLabelStyle},e.label)),e.screens.forEach(((t,s)=>i.push(o.React.createElement("option",{value:t.id,key:`${e.id}-${s}`},t.label))))})),o.React.createElement("div",{className:"w-100"},o.React.createElement("div",{className:"mb-12 option-name"},this.props.intl.formatMessage({id:"jumpTo",defaultMessage:C.defaultMessages.jumpTo})),o.React.createElement("div",null,t.length>0&&o.React.createElement(C.Select,{value:null===(e=this.props.linkParam)||void 0===e?void 0:e.value,className:"w-100",onChange:this.setLinkParam,size:"sm","aria-label":this.props.intl.formatMessage({id:"jumpTo",defaultMessage:C.defaultMessages.jumpTo})},i)))}}const qe=e=>{const t=window.SVG,{className:i}=e,s=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i}(e,["className"]),n=(0,o.classNames)("jimu-icon jimu-icon-component",i);return t?o.React.createElement(t,Object.assign({className:n,src:ge()},s)):o.React.createElement("svg",Object.assign({className:n},s))};const He=e=>{const t=window.SVG,{className:i}=e,s=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i}(e,["className"]),n=(0,o.classNames)("jimu-icon jimu-icon-component",i);return t?o.React.createElement(t,Object.assign({className:n,src:ue()},s)):o.React.createElement("svg",Object.assign({className:n},s))};class Ze extends o.React.PureComponent{constructor(){super(...arguments),this.onCollapseClick=e=>{e.stopPropagation(),e.nativeEvent.stopImmediatePropagation(),this.setState({collapse:!this.state.collapse})}}componentWillMount(){this.setState({collapse:this.props.isOpen})}render(){return o.React.createElement("div",{className:(0,o.classNames)("w-100",this.props.className)},o.React.createElement("div",{title:this.props.title,style:{overflow:"hidden"},className:"w-100 btn pb-2 pr-2 d-flex justify-content-between"},o.React.createElement("div",null,this.props.title),o.React.createElement(C.Button,{type:"tertiary",size:"sm",className:"collapse-btn py-0 jimu-outline-inside pr-0",onClick:this.onCollapseClick},this.state.collapse?o.React.createElement(qe,{size:"s"}):o.React.createElement(He,{size:"s"}))),o.React.createElement(C.Collapse,{isOpen:this.state.collapse,"aria-label":this.props.title},this.props.children))}}class Ke extends o.React.PureComponent{constructor(e){super(e),this.noScroll="Do not scroll",this.getInitLinkParam=()=>{if(this.props.originLinkParam.linkType===o.LinkType.View)return this.props.originLinkParam;{let e=(0,o.Immutable)({linkType:o.LinkType.View,value:""});return ze(this.getDefaultPageOrDialogId())||(e=e.set("openType",this.getInitOpenType())),e}},this.getInitOpenType=()=>!this.props.openTypes||this.props.openTypes.includes(Re.CurrentWindow)?Re.CurrentWindow:this.props.openTypes[0],this.pageOrDialogChange=e=>{let t=this.props.linkParam;t=t.set("value",e.target.value),t=Be(t)?t.without("openType"):t.set("openType",this.getInitOpenType()),this.props.onLinkParamChange(t)},this.viewChange=(e,t)=>{let i=[];i=Object.assign(i,this.state.viewLinkParamArr),i[0]||(i[0]=this.getDefaultPageOrDialogId());const o=this.props.appConfig.sections[t].views;let s=i.filter((t=>o.some((e=>e===t))&&t!==e)),n=[];const a=i.indexOf(e);if(a>-1?s=s.concat(i[a]):n=n.concat(e),s&&s.length>0){let e=[];s.forEach((t=>{e=e.concat(Ee(t,this.props.appConfig))})),s=s.concat(e)}i=i.filter((e=>!s.some((t=>t===e)))),i=i.concat(n);let l=this.props.linkParam;l=l.set("value",i.join(",")),this.props.onLinkParamChange(l)},this.viewRemove=e=>{let t=[];t=Object.assign(t,this.state.viewLinkParamArr),t[0]||(t[0]=this.getDefaultPageOrDialogId());const i=Ee(e,this.props.appConfig).concat(e);t=t.slice(0,1).concat(t.slice(1).filter((e=>!i.some((t=>t===e)))));let o=this.props.linkParam;o=o.set("value",t.join(",")),this.props.onLinkParamChange(o,!0)},this.onScrollToViewChange=e=>{this.setState({scrollToViewId:e})},this.getDefaultPageOrDialogId=()=>{const e=this.props.appConfig&&this.props.appConfig.pages,t=e&&Object.keys(e).filter((e=>Le(e,this.props.appConfig).length>0)),i=t&&t.find((t=>e[t].isDefault))||(null==t?void 0:t[0]);if(i)return i;const o=this.props.appConfig&&this.props.appConfig.dialogs,s=o&&Object.keys(o).filter((e=>Ae(e,this.props.appConfig).length>0));return null==s?void 0:s[0]},this.getSelectedVeiwIds=()=>this.state.viewLinkParamArr.slice(1),this.state={viewLinkParamArr:[],scrollToViewId:this.noScroll}}componentDidMount(){const e=this.getInitLinkParam(),{value:t,linkType:i}=e;t&&i===o.LinkType.View?this.setState({viewLinkParamArr:t.split(",")}):this.setState({viewLinkParamArr:[]}),this.props.onLinkParamChange(e)}static getDerivedStateFromProps(e,t){const{value:i,linkType:s}=e.linkParam;return i&&s===o.LinkType.View?Object.assign(Object.assign({},t),{viewLinkParamArr:i.split(",")}):Object.assign(Object.assign({},t),{viewLinkParamArr:[]})}render(){var e,t,i;if(!this.props.appConfig)return null;const s=Fe(this.props.appConfig,this.props.intl),n=$e(this.props.appConfig),a=this.state.viewLinkParamArr[0]||this.getDefaultPageOrDialogId();if(!s.some((e=>e.id===a))&&!n.some((e=>e.id===a)))return null;const l=s.filter((e=>Le(e.id,this.props.appConfig).length>0)),r=n.filter((e=>Ae(e.id,this.props.appConfig).length>0));return o.React.createElement("div",{className:"w-100"},o.React.createElement("div",{className:"mb-12 option-name"},this.props.intl.formatMessage({id:"chooseViews",defaultMessage:C.defaultMessages.chooseViews})),o.React.createElement("div",null,o.React.createElement(C.Select,{value:a,onChange:this.pageOrDialogChange,className:"w-100 mb-3",size:"sm"},o.React.createElement(C.Option,{header:!0},this.props.intl.formatMessage({id:"page",defaultMessage:o.defaultMessages.page})),l.map(((e,t)=>o.React.createElement(C.Option,{key:t,value:e.id},e.name))),r.length>0&&o.React.createElement(C.Option,{header:!0},this.props.intl.formatMessage({id:"dialog",defaultMessage:o.defaultMessages.dialog})),r.map(((e,t)=>o.React.createElement(C.Option,{key:t,value:e.id},e.name)))),o.React.createElement("div",{className:(0,o.classNames)("choose-view",{"mb-3":(null===(e=Le(a,this.props.appConfig))||void 0===e?void 0:e.length)>0})},Le(a,this.props.appConfig).map((e=>o.React.createElement(Qe,{sections:this.props.appConfig.sections,sectionId:e,viewsInfo:Ue(e,this.props.appConfig),viewLinkParamArr:this.state.viewLinkParamArr,viewChange:this.viewChange,viewRemove:this.viewRemove,key:e})))),o.React.createElement("div",{className:(0,o.classNames)("choose-view",{"mb-3":(null===(t=Ae(a,this.props.appConfig))||void 0===t?void 0:t.length)>0})},Ae(a,this.props.appConfig).map((e=>o.React.createElement(Qe,{sections:this.props.appConfig.sections,sectionId:e,viewsInfo:Ue(e,this.props.appConfig),viewLinkParamArr:this.state.viewLinkParamArr,viewChange:this.viewChange,viewRemove:this.viewRemove,key:e})))),o.React.createElement("div",{className:(0,o.classNames)("choose-view",{"mb-3":(null===(i=this.getSelectedVeiwIds())||void 0===i?void 0:i.length)>0})},this.getSelectedVeiwIds().map((e=>De(e,this.props.appConfig).map((e=>o.React.createElement(Qe,{sections:this.props.appConfig.sections,sectionId:e,viewsInfo:Ue(e,this.props.appConfig),viewLinkParamArr:this.state.viewLinkParamArr,viewChange:this.viewChange,viewRemove:this.viewRemove,key:e}))))))))}}class Qe extends o.React.PureComponent{constructor(e){super(e),this.onViewChange=e=>{this.setState({viewId:e}),this.props.viewChange(e,this.props.sectionId)},this.state={viewId:null}}componentWillUnmount(){this.props.viewRemove(this.state.viewId)}render(){return o.React.createElement(Ze,{className:"mb-3 choose-view",title:this.props.sections[this.props.sectionId]&&this.props.sections[this.props.sectionId].label,isOpen:!0,key:this.props.sectionId},o.React.createElement("div",{className:"link-selector-list w-100 view-border border-top-0 border-left-0 border-right-0 rounded-0",role:"menu"},this.props.viewsInfo.map(((e,t)=>o.React.createElement(C.Button,{role:"menuitem",onClick:()=>this.onViewChange(e.id),key:t,className:(0,o.classNames)("jimu-outline-inside link-selector-list-item btn w-100 view-border px-2 pt-1 text-left border-bottom-0 rounded-0 text-truncate",{"item-common":!this.props.viewLinkParamArr.includes(e.id)},{itemselected:this.props.viewLinkParamArr.includes(e.id)}),title:e.label,"aria-checked":this.props.viewLinkParamArr.includes(e.id)},e.label)))))}}var Xe=v(39342);const Ye=(0,o.Immutable)([Xe.ExpressionInputType.Static,Xe.ExpressionInputType.Attribute,Xe.ExpressionInputType.Expression]);class et extends o.React.PureComponent{constructor(e){var t;super(e),this.getInitLinkParam=()=>this.props.originLinkParam.linkType===o.LinkType.WebAddress?this.props.originLinkParam:(0,o.Immutable)({linkType:o.LinkType.WebAddress,openType:!this.props.openTypes||this.props.openTypes.includes(Re.NewWindow)?Re.NewWindow:this.props.openTypes[0],value:""}),this.webAddressInputChange=e=>{const t=e.value;let i=this.props.linkParam;i=i.set("value",t).set("expression",null),this.props.onLinkParamChange(i)},this.webAddressExpressionChange=e=>{let t=this.props.linkParam;t=t.set("expression",e).set("value",""),this.props.onLinkParamChange(t),this.closeExpPopup()},this.openExpPopup=()=>this.setState({isExpPopupOpen:!0}),this.closeExpPopup=()=>this.setState({isExpPopupOpen:!1}),this.getDefaultExp=()=>({name:"Expression",parts:[{type:o.ExpressionPartType.String,exp:'"https://"'}]}),this.onUrlChange=e=>{this.setState({url:e.value})},this.state={isExpPopupOpen:!1,url:(null===(t=this.props.linkParam)||void 0===t?void 0:t.linkType)===o.LinkType.WebAddress?this.props.linkParam.value:""}}componentDidMount(){const e=this.getInitLinkParam();this.props.onLinkParamChange(e)}componentDidUpdate(e){var t,i,s;(null===(t=e.linkParam)||void 0===t?void 0:t.value)!==(null===(i=this.props.linkParam)||void 0===i?void 0:i.value)&&this.setState({url:(null===(s=this.props.linkParam)||void 0===s?void 0:s.linkType)===o.LinkType.WebAddress?this.props.linkParam.value:this.state.url})}render(){return o.React.createElement("div",{className:"w-100"},o.React.createElement("div",{className:"mb-12 option-name"},this.props.intl.formatMessage({id:"url",defaultMessage:C.defaultMessages.url})),o.React.createElement("div",null,this.props.useDataSources&&this.props.useDataSources.length>0?o.React.createElement(Xe.ExpressionInput,{useDataSources:this.props.useDataSources,onChange:this.webAddressExpressionChange,expression:this.props.linkParam&&this.props.linkParam.expression||this.getDefaultExp(),closeExpPopup:this.closeExpPopup,openExpPopup:this.openExpPopup,isExpPopupOpen:this.state.isExpPopupOpen,types:Ye,widgetId:this.props.widgetId,"aria-label":this.props.intl.formatMessage({id:"url",defaultMessage:C.defaultMessages.url})}):o.React.createElement(C.UrlInput,{value:this.state.url,schemes:We,onChange:this.onUrlChange,className:"w-100",onAcceptValue:this.webAddressInputChange,"aria-label":this.props.intl.formatMessage({id:"url",defaultMessage:C.defaultMessages.url})})))}}class tt extends o.React.PureComponent{constructor(e){if(super(e),this.getLinkTypeContent=()=>{if(this.props.isLinkPageSetting)return(0,o.jsx)(C.Select,{value:this.state.linkParam.linkType,size:"sm",onChange:this.linkTypeChange,className:"w-100","aria-label":this.props.intl.formatMessage({id:"linkTo",defaultMessage:C.defaultMessages.linkTo})},(0,o.jsx)("option",{value:o.LinkType.WebAddress},this.props.intl.formatMessage({id:"url",defaultMessage:C.defaultMessages.url})));{const e=this.getHiddenLinks();return(0,o.jsx)(C.Select,{value:this.state.linkParam.linkType,size:"sm",onChange:this.linkTypeChange,className:"w-100","aria-label":this.props.intl.formatMessage({id:"linkTo",defaultMessage:C.defaultMessages.linkTo})},!e.some((e=>e===o.LinkType.None))&&(0,o.jsx)("option",{value:o.LinkType.None},this.props.intl.formatMessage({id:"none",defaultMessage:C.defaultMessages.none})),!e.some((e=>e===o.LinkType.Page))&&(0,o.jsx)("option",{value:o.LinkType.Page},this.props.intl.formatMessage({id:"page",defaultMessage:o.defaultMessages.page})),!e.some((e=>e===o.LinkType.View))&&(0,o.jsx)("option",{value:o.LinkType.View},this.props.intl.formatMessage({id:"view",defaultMessage:o.defaultMessages.view})),!e.some((e=>e===o.LinkType.Dialog))&&(0,o.jsx)("option",{value:o.LinkType.Dialog},this.props.intl.formatMessage({id:"dialog",defaultMessage:o.defaultMessages.dialog})),!e.some((e=>e===o.LinkType.WebAddress))&&(0,o.jsx)("option",{value:o.LinkType.WebAddress},this.props.intl.formatMessage({id:"url",defaultMessage:C.defaultMessages.url})),!e.some((e=>e===o.LinkType.Block))&&(0,o.jsx)("option",{value:o.LinkType.Block},this.props.intl.formatMessage({id:"block",defaultMessage:o.defaultMessages.block})),!e.some((e=>e===o.LinkType.PageTop))&&(0,o.jsx)("option",{value:o.LinkType.PageTop},this.props.intl.formatMessage({id:"pageTop",defaultMessage:C.defaultMessages.pageTop})),!e.some((e=>e===o.LinkType.PrintPreview))&&(0,o.jsx)("option",{value:o.LinkType.PrintPreview},this.props.intl.formatMessage({id:"printPreview",defaultMessage:C.defaultMessages.printPreview})))}},this.getHiddenLinks=()=>{var e,t,i,s,n;let a=this.props.hiddenLinks||(0,o.Immutable)([]);const l=E.utils.getCurrentPageId(),r=E.utils.getAppConfig(),c=null===(e=r.pages)||void 0===e?void 0:e[l],p=E.searchUtils.findLayoutId(null==c?void 0:c.layout,E.utils.getCurrentSizeMode(),r.mainSizeMode),d=r.layouts[p],u=(null===(t=null===window||void 0===window?void 0:window.jimuConfig)||void 0===t?void 0:t.isBuilder)?null===(s=null===(i=(0,o.getAppStore)().getState().appStateInBuilder)||void 0===i?void 0:i.appRuntimeInfo)||void 0===s?void 0:s.currentDialogId:null===(n=(0,o.getAppStore)().getState().appRuntimeInfo)||void 0===n?void 0:n.currentDialogId;return((null==d?void 0:d.type)===o.LayoutType.FixedLayout||u)&&(a=a.concat([o.LinkType.Block,o.LinkType.Screen,o.LinkType.PageTop])),a},this.getLinkContent=e=>{switch(e){case o.LinkType.None:return null;case o.LinkType.Page:return(0,o.jsx)(Ve,{originLinkParam:this.state.originLinkParam,linkParam:this.state.linkParam,appConfig:this.props.appConfig,onLinkParamChange:this.linkParamChange,intl:this.props.intl,openTypes:this.props.openTypes});case o.LinkType.Dialog:return(0,o.jsx)(Ge,{originLinkParam:this.state.originLinkParam,linkParam:this.state.linkParam,appConfig:this.props.appConfig,onLinkParamChange:this.linkParamChange,intl:this.props.intl});case o.LinkType.Block:return(0,o.jsx)(_e,{originLinkParam:this.state.originLinkParam,linkParam:this.state.linkParam,onLinkParamChange:this.linkParamChange,intl:this.props.intl});case o.LinkType.Screen:return(0,o.jsx)(Je,{originLinkParam:this.state.originLinkParam,linkParam:this.state.linkParam,onLinkParamChange:this.linkParamChange,intl:this.props.intl});case o.LinkType.View:return(0,o.jsx)(Ke,{originLinkParam:this.state.originLinkParam,linkParam:this.state.linkParam,intl:this.props.intl,openTypes:this.props.openTypes,appConfig:this.props.appConfig,onLinkParamChange:this.linkParamChange,browserSizeMode:this.props.browserSizeMode});case o.LinkType.WebAddress:return(0,o.jsx)(et,{originLinkParam:this.state.originLinkParam,linkParam:this.state.linkParam,intl:this.props.intl,onLinkParamChange:this.linkParamChange,useDataSources:this.props.useDataSources,openTypes:this.props.openTypes,widgetId:this.props.widgetId});default:return null}},this.linkTypeChange=e=>{let t=(0,o.Immutable)(this.state.linkParam);const i=e.target.value;i===o.LinkType.PageTop&&(t=(0,o.Immutable)({})),this.setState({linkParam:t.set("linkType",i)})},this.radioOpenTypeChange=e=>{let t=(0,o.Immutable)(this.state.linkParam);t=t.set("openType",e),this.setState({linkParam:t})},this.linkParamChange=(e,t)=>{t?e&&this.state.linkParam&&e.linkType===this.state.linkParam.linkType&&this.setState({linkParam:this.fixLinkParam(e)}):this.setState({linkParam:this.fixLinkParam(e)})},this.fixLinkParam=e=>{var t;let i=e;if((null==e?void 0:e.linkType)===o.LinkType.View&&(null==e?void 0:e.value)){const o=null===(t=this.props.appConfig)||void 0===t?void 0:t.views,s=e.value.split(","),n=s.slice(1).filter((e=>null==o?void 0:o[e])),a=[s[0]].concat(n).join(",");i=i.set("value",a)}return i},this.settingConfirm=()=>{const e=(0,o.Immutable)(this.state.linkParam);this.setState({originLinkParam:e}),this.props.onSettingConfirm(e)},this.isLinkParamOk=e=>{if(!e||!e.linkType)return!1;if(e.linkType===o.LinkType.View){const t=e.value&&e.value.split(",")[0]||null,i=e.value&&e.value.split(",").slice(1)||[];return!!(t&&"string"==typeof t&&i.length>0)}if(e.linkType===o.LinkType.WebAddress){if(this.props.useDataSources&&this.props.useDataSources.length>0){const t=e.expression&&e.expression.parts;let i=!1;return t&&t.length>0&&(i=1!==t.length||!!t[0].exp&&'""'!==t[0].exp),i}{const t="valid"!==o.urlUtils.checkAbsoluteUrl(e.value,We);return e.value&&!t}}return e.linkType===o.LinkType.PageTop||e.linkType===o.LinkType.PrintPreview||e.linkType===o.LinkType.None||!(!e.value||"string"!=typeof e.value)},this.props.linkParam&&this.props.linkParam.linkType)this.state={linkParam:(0,o.Immutable)(this.props.linkParam),originLinkParam:(0,o.Immutable)(this.props.linkParam)};else{const e={linkType:o.LinkType.None,openType:!this.props.openTypes||this.props.openTypes.includes(Re.CurrentWindow)?Re.CurrentWindow:this.props.openTypes[0]};this.state={linkParam:(0,o.Immutable)(e),originLinkParam:(0,o.Immutable)(e)}}}needOpenIn(e){return!e||![o.LinkType.Dialog,o.LinkType.Block,o.LinkType.Screen,o.LinkType.PageTop,o.LinkType.PrintPreview].some((t=>t===e.linkType))&&!Be(e)}render(){if(this.props.appConfig){const e=this.getLinkTypeContent(),t=this.getLinkContent(this.state.linkParam.linkType);return(0,o.jsx)("div",{className:(0,o.classNames)(this.props.className,"w-100 h-100")},(0,o.jsx)("div",{className:"widget-builder-link-selector w-100 h-100"},(0,o.jsx)("div",{style:{position:"relative"},className:"w-100 h-100"},(0,o.jsx)(C.Container,null,(0,o.jsx)(C.Row,{className:"mb-12 option-name"},this.props.intl.formatMessage({id:"linkTo",defaultMessage:C.defaultMessages.linkTo})),(0,o.jsx)(C.Row,{className:"mb-3"},e),this.state.linkParam.linkType!==o.LinkType.None?(0,o.jsx)("div",null,(0,o.jsx)(C.Row,{className:"mb-3"},t),this.needOpenIn(this.state.linkParam)&&(0,o.jsx)("div",null,(0,o.jsx)(C.Row,{className:"mb-12 option-name"},this.props.intl.formatMessage({id:"openIn",defaultMessage:C.defaultMessages.openIn})),(0,o.jsx)(C.Container,{className:"p-0","aria-label":this.props.intl.formatMessage({id:"openIn",defaultMessage:C.defaultMessages.openIn})},(!this.props.openTypes||this.props.openTypes.some((e=>e===Re.CurrentWindow)))&&(0,o.jsx)(C.Row,{className:"mb-3"},(0,o.jsx)(C.Radio,{onChange:()=>this.radioOpenTypeChange(Re.CurrentWindow),id:"link-setting-app-window",checked:this.state.linkParam.openType===Re.CurrentWindow}),(0,o.jsx)(C.Label,{for:"link-setting-app-window",className:"ml-2 link-setting-cursor-pointer open-type-label text-truncate"},this.props.intl.formatMessage({id:"appWindow",defaultMessage:C.defaultMessages.appWindow}))),(!this.props.openTypes||this.props.openTypes.some((e=>e===Re.TopWindow)))&&(0,o.jsx)(C.Row,{className:"mb-3"},(0,o.jsx)(C.Radio,{onChange:()=>this.radioOpenTypeChange(Re.TopWindow),id:"link-setting-top-window",checked:this.state.linkParam.openType===Re.TopWindow}),(0,o.jsx)(C.Label,{for:"link-setting-top-window",className:"ml-2 link-setting-cursor-pointer open-type-label text-truncate"},this.props.intl.formatMessage({id:"topWindow",defaultMessage:C.defaultMessages.topWindow}))),(!this.props.openTypes||this.props.openTypes.some((e=>e===Re.NewWindow)))&&(0,o.jsx)(C.Row,{className:"mb-3"},(0,o.jsx)(C.Radio,{onChange:()=>this.radioOpenTypeChange(Re.NewWindow),id:"link-setting-new-window",checked:this.state.linkParam.openType===Re.NewWindow}),(0,o.jsx)(C.Label,{for:"link-setting-new-window",className:"ml-2 link-setting-cursor-pointer open-type-label text-truncate"},this.props.intl.formatMessage({id:"newWindow",defaultMessage:C.defaultMessages.newWindow})))))):null),(0,o.jsx)("div",{className:"w-100",style:{position:"absolute"}},(0,o.jsx)(C.Button,{className:"w-100 text-dark link-setting-ok-btn",type:"primary",onClick:this.settingConfirm,disabled:!this.isLinkParamOk(this.state.linkParam),title:this.props.intl.formatMessage({id:"ok",defaultMessage:o.defaultMessages.ok})},(0,o.jsx)("div",{className:"text-truncate"},this.props.intl.formatMessage({id:"ok",defaultMessage:o.defaultMessages.ok})))))))}return null}componentDidMount(){this.props.isLinkPageSetting&&this.linkTypeChange({target:{value:o.LinkType.WebAddress}})}}const it=o.ReactRedux.connect((e=>({appConfig:window&&window.jimuConfig&&window.jimuConfig.isBuilder?e.appStateInBuilder.appConfig:e.appConfig,browserSizeMode:window&&window.jimuConfig&&window.jimuConfig.isBuilder?e.appStateInBuilder.browserSizeMode:e.browserSizeMode})))((0,o.injectIntl)((0,x.withStyles)(tt,"LinkSelectorContent"))),ot=it;const st=[{name:"preventOverflow",options:{boundariesElement:"viewport"}}];class nt extends o.React.PureComponent{constructor(){super(...arguments),this.closeBtnRef=o.React.createRef(),this.popperRef=o.React.createRef(),this.handleDocumentMousedown=e=>{if(this.props.isOpen){const t=e.target;(!this.props.trigger||(Array.isArray(this.props.trigger)?!this.props.trigger.some((e=>!(0,C.isOutBoundary)(t,e))):(0,C.isOutBoundary)(t,this.props.trigger)))&&this.toggle()}},this.toggle=()=>{this.props.toggle()},this.keepFocusAfterClose=()=>{setTimeout((()=>{var e,t;this.props.backToFocusNode?this.props.backToFocusNode.focus():Array.isArray(this.props.trigger)?null===(e=this.props.trigger[0])||void 0===e||e.focus():null===(t=this.props.trigger)||void 0===t||t.focus()}),200)},this.onKeyDown=e=>{var t,i;if("Esc"===e.key||"Escape"===e.key){if(!(null===(t=this.popperRef.current)||void 0===t?void 0:t.contains(e.target)))return;e.target===this.closeBtnRef.current?this.toggle():null===(i=this.closeBtnRef.current)||void 0===i||i.focus()}}}componentDidMount(){var e;null===(e=this.getReference(this.props.position))||void 0===e||e.addEventListener("mousedown",this.handleDocumentMousedown,!1)}componentDidUpdate(e){var t;const i="left"===this.props.position&&e.leftSidebarCollapse&&!this.props.leftSidebarCollapse||"right"===this.props.position&&e.rightSidebarCollapse&&!this.props.rightSidebarCollapse,o=this.props.widgetId&&this.props.layoutSelection!==e.layoutSelection&&(null===(t=E.searchUtils.findLayoutItem(E.utils.getAppConfig(),this.props.layoutSelection))||void 0===t?void 0:t.widgetId)!==this.props.widgetId,s=!e.isTemplatePage&&this.props.isTemplatePage;(i||o||s)&&this.props.isOpen&&this.toggle(),e.isOpen&&!this.props.isOpen&&this.keepFocusAfterClose()}componentWillUnmount(){var e;null===(e=this.getReference(this.props.position))||void 0===e||e.removeEventListener("mousedown",this.handleDocumentMousedown,!1)}getReference(e){return"left"===e?document&&document.querySelector('[data-layoutid="left-sidebar-left-layout"]'):document&&document.querySelector('[data-layoutid="right-sidebar-right-layout"]')}getPlacement(e){return"left"===e?"right-start":"left-start"}render(){const e=this.props,{isOpen:t,position:i,className:s,dispatch:n,leftSidebarCollapse:a,rightSidebarCollapse:l,trigger:r,backToFocusNode:c,widgetId:p,layoutSelection:d,title:u,isTemplatePage:m,addFocusableContainerClass:g}=e,h=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i}(e,["isOpen","position","className","dispatch","leftSidebarCollapse","rightSidebarCollapse","trigger","backToFocusNode","widgetId","layoutSelection","title","isTemplatePage","addFocusableContainerClass"]);return(0,o.jsx)(C.Popper,Object.assign({reference:this.getReference(i),placement:this.getPlacement(i),open:t,forceLatestFocusElements:!0,className:(0,o.classNames)("bg-light-300",s),modifiers:st},h,{toggle:null,onKeyDown:this.onKeyDown,"aria-label":"string"==typeof this.props["aria-label"]?this.props["aria-label"]:"string"==typeof u?u:void 0}),(0,o.jsx)("div",{className:"w-100 h-100",ref:this.popperRef},void 0!==u&&(0,o.jsx)(C.PanelHeader,{title:u,showClose:!0,onClose:this.toggle,level:1,className:(0,o.classNames)("p-3",{[C.FOCUSABLE_CONTAINER_CLASS]:g}),closeButtonRef:this.closeBtnRef}),void 0!==u?(0,o.jsx)("div",{css:o.css`height: calc(100% - 56px); overflow: auto;`},this.props.children):this.props.children))}}const at=o.ReactRedux.connect(((e,t)=>{var i,o,s,n,a,l,r,c,p,d;return{leftSidebarCollapse:null===(o=null===(i=e.widgetsState)||void 0===i?void 0:i["left-sidebar"])||void 0===o?void 0:o.collapse,rightSidebarCollapse:null===(n=null===(s=e.widgetsState)||void 0===s?void 0:s["right-sidebar"])||void 0===n?void 0:n.collapse,layoutSelection:t.widgetId?(null===(a=null===window||void 0===window?void 0:window.jimuConfig)||void 0===a?void 0:a.isBuilder)?null===(r=null===(l=e.appStateInBuilder)||void 0===l?void 0:l.appRuntimeInfo)||void 0===r?void 0:r.selection:null===(c=e.appRuntimeInfo)||void 0===c?void 0:c.selection:null,isTemplatePage:(null===(p=null===window||void 0===window?void 0:window.jimuConfig)||void 0===p?void 0:p.isBuilder)&&"template"===(null===(d=e.appRuntimeInfo)||void 0===d?void 0:d.currentPageId)}}))((0,x.withStyles)(nt,"SidePopper"));class lt extends o.React.PureComponent{constructor(){super(...arguments),this.close=()=>{this.props.onSettingCancel()},this.getIsOpen=()=>this.props.isOpen||this.props.showDialog}render(){const e=this.props.position||"right",{title:t}=this.props;return o.React.createElement(at,{isOpen:this.getIsOpen(),position:e,toggle:this.close,trigger:this.props.trigger,backToFocusNode:this.props.backToFocusNode,widgetId:this.props.widgetId,title:this.props.intl.formatMessage({id:t?"setLinkForTitle":"setLink",defaultMessage:t?C.defaultMessages.setLinkForTitle:C.defaultMessages.setLink},{title:t})},o.React.createElement("div",{className:"bg-light-300 w-100 h-100 px-3"},o.React.createElement(it,{isLinkPageSetting:this.props.isLinkPageSetting,linkParam:this.props.linkParam,onSettingConfirm:this.props.onSettingConfirm,useDataSources:this.props.useDataSources,widgetId:this.props.widgetId,hiddenLinks:this.props.hiddenLinks,openTypes:this.props.openTypes})))}}const rt=(0,o.injectIntl)((0,x.withTheme)(lt)),ct=rt;var pt=v(24786),dt=v.n(pt);const ut=e=>{const t=window.SVG,{className:i}=e,s=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i}(e,["className"]),n=(0,o.classNames)("jimu-icon jimu-icon-component",i);return t?o.React.createElement(t,Object.assign({className:n,src:dt()},s)):o.React.createElement("svg",Object.assign({className:n},s))};class mt extends o.React.PureComponent{constructor(e){super(e),this.linkSelectorTrigger=o.React.createRef(),this.toggle=()=>{const e=!this.state.isOpen;this.setState({isOpen:e},(()=>this.setState({renderPopper:e})))},this.onCancel=()=>{var e,t;null===(t=(e=this.props).onSettingCancel)||void 0===t||t.call(e),this.toggle()},this.onConfirm=e=>{var t,i;null===(i=(t=this.props).onSettingConfirm)||void 0===i||i.call(t,e),this.toggle()},this.getIsOpen=()=>this.state.isOpen&&!o.urlUtils.getAppIdPageIdFromUrl().pageId,this.state={isOpen:!1,renderPopper:!1}}render(){const e=this.props,{theme:t,intl:i,buttonLabel:s}=e,n=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i}(e,["theme","intl","buttonLabel"]),a=s||this.props.intl.formatMessage({id:"setLink",defaultMessage:C.defaultMessages.setLink});return o.React.createElement(o.React.Fragment,null,o.React.createElement(C.Button,{className:"w-100 text-black",type:"primary",onClick:this.toggle,ref:this.linkSelectorTrigger,title:a},o.React.createElement("div",{className:"w-100 px-2 text-truncate"},o.React.createElement(ut,{className:"text-black mr-1"}),a)),this.state.renderPopper&&o.React.createElement(rt,Object.assign({},n,{isOpen:this.getIsOpen(),position:"right",onSettingCancel:this.onCancel,onSettingConfirm:this.onConfirm,trigger:this.linkSelectorTrigger.current,widgetId:this.props.widgetId})))}}const gt=(0,x.withTheme)((0,o.injectIntl)(mt));var ht=v(338),vt=function(e,t,i,o){return new(i||(i=Promise))((function(s,n){function a(e){try{r(o.next(e))}catch(e){n(e)}}function l(e){try{r(o.throw(e))}catch(e){n(e)}}function r(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(a,l)}r((o=o.apply(e,t||[])).next())}))};function ft(){return vt(this,void 0,void 0,(function*(){const e=yield bt(),t=yield yt(),i={};return Object.keys(e).forEach((t=>{i[t]||(i[t]={items:[],isPremium:e[t].isPremium,isSubscriber:e[t].isSubscriber}),i[t].items=i[t].items.concat(e[t].dataSources.map((e=>({label:o.dataSourceUtils.getLabelFromArcGISServiceUrl(t),id:e.id}))))})),Object.keys(t).forEach((e=>{i[e]||(i[e]={items:[],isPremium:t[e].isPremium,isSubscriber:t[e].isSubscriber}),i[e].items=i[e].items.concat(t[e].utilities.map((e=>{const t=o.UtilityManager.getInstance().getUtilityJson(e.utilityId);return{label:(null==t?void 0:t.label)||(null==t?void 0:t.name)||(null==t?void 0:t.sourceLabel),id:e.utilityId}})))})),i}))}function bt(){var e,t,i,s;return vt(this,void 0,void 0,(function*(){const n=null===(s=null===(i=null===(t=null===(e=(0,o.getAppStore)())||void 0===e?void 0:e.getState())||void 0===t?void 0:t.appStateInBuilder)||void 0===i?void 0:i.appConfig)||void 0===s?void 0:s.dataSources,a=[];return n&&Object.keys(n).forEach((e=>{const t=o.DataSourceManager.getInstance().getDataSource(e);a.push(St(t))})),Promise.allSettled(a).then((e=>{let t={};return e.filter((e=>"fulfilled"===e.status)).map((e=>e.value)).forEach((e=>{e&&Object.keys(e).forEach((i=>{t[i]?t[i].dataSources=t[i].dataSources.concat(e[i].dataSources):t=Object.assign(Object.assign({},t),e)}))})),t}))}))}function yt(){var e,t,i,s;return vt(this,void 0,void 0,(function*(){const n=null===(s=null===(i=null===(t=null===(e=(0,o.getAppStore)())||void 0===e?void 0:e.getState())||void 0===t?void 0:t.appStateInBuilder)||void 0===i?void 0:i.appConfig)||void 0===s?void 0:s.utilities,a=[];return n&&Object.keys(n).forEach((e=>{a.push(function(e){var t,i,s,n;return vt(this,void 0,void 0,(function*(){const a={};if(!e)return a;const l=null===(n=null===(s=null===(i=null===(t=(0,o.getAppStore)())||void 0===t?void 0:t.getState())||void 0===i?void 0:i.appStateInBuilder)||void 0===s?void 0:s.appConfig)||void 0===n?void 0:n.widgets,r=l&&Object.values(l).some((t=>{var i;return null===(i=t.useUtilities)||void 0===i?void 0:i.some((t=>t.utilityId===e.id))})),c=e.url;if(c&&r){const t=yield o.proxyUtils.isUtilityPremium(e),i=yield o.proxyUtils.isUtilitySubscriber(e);if(t||i){const s=yield o.UtilityManager.getInstance().getUtility(e.id);a[c]={utilities:[s],isPremium:t,isSubscriber:i}}}return a}))}(n[e]))})),Promise.allSettled(a).then((e=>{let t={};return e.filter((e=>"fulfilled"===e.status)).map((e=>e.value)).forEach((e=>{e&&Object.keys(e).forEach((i=>{t[i]?t[i].utilities=t[i].utilities.concat(e[i].utilities):t=Object.assign(Object.assign({},t),e)}))})),t}))}))}function St(e,t=!1){var i,s,n,a,l,r;return vt(this,void 0,void 0,(function*(){const c={};if(!e)return c;const p=null===(a=null===(n=null===(s=null===(i=(0,o.getAppStore)())||void 0===i?void 0:i.getState())||void 0===s?void 0:s.appStateInBuilder)||void 0===n?void 0:n.appConfig)||void 0===a?void 0:a.widgets,d=(null===(l=e.getMainDataSource())||void 0===l?void 0:l.id)===e.id,u=ht.dataComponentsUtils.getWidgetsUsingDsOrItsViews(e.id,p,!1).length>0,m=o.dataSourceUtils.getFullArcGISServiceUrl(null===(r=e.getDataSourceJson())||void 0===r?void 0:r.url,!1);if(d&&m&&(t||u)){const t=yield o.proxyUtils.isDataSourcePremium(e.getDataSourceJson()),i=yield o.proxyUtils.isDataSourceSubscriber(e.getDataSourceJson());(t||i)&&(c[m]={dataSources:[e],isPremium:t,isSubscriber:i})}const g=[];if(d&&e.isDataSourceSet){const i=(e.type===o.AllDataSourceTypes.WebMap||e.type===o.AllDataSourceTypes.WebScene)&&u||t;e.getChildDataSources().forEach((e=>{g.push(St(e,i))}))}return Promise.allSettled(g).then((e=>{let t=c;return e.filter((e=>"fulfilled"===e.status)).map((e=>e.value)).forEach((e=>{e&&Object.keys(e).forEach((i=>{t[i]?t[i].dataSources=t[i].dataSources.concat(e[i].dataSources):t=Object.assign(Object.assign({},t),e)}))})),t}))}))}function wt(e,t){var i;if(!e||!t)return null;let o=null;for(const s in t)if((null===(i=t[s])||void 0===i?void 0:i.sourceUrl)===e){o=t[s];break}return o}function xt(e,t,i,o){return!(!e||!t)&&(e.sourceUrl===t&&((!e.hitsPerInterval&&!i||e.hitsPerInterval===i)&&!((e.intervalSeconds||o)&&e.intervalSeconds!==o)))}function Ct(){var e,t;const i=null===(e=(0,o.getAppStore)().getState())||void 0===e?void 0:e.appStateInBuilder.appInfo;return null===(t=null==i?void 0:i.typeKeywords)||void 0===t?void 0:t.includes("Registered App")}function It(){var e,t,i,s,n,a,l,r,c,p;return vt(this,void 0,void 0,(function*(){if((null===(i=null===(t=null===(e=(0,o.getAppStore)().getState())||void 0===e?void 0:e.appContext)||void 0===t?void 0:t.jimuConfig)||void 0===i?void 0:i.isInPortal)||(null===(a=null===(n=null===(s=(0,o.getAppStore)().getState())||void 0===s?void 0:s.appContext)||void 0===n?void 0:n.jimuConfig)||void 0===a?void 0:a.isDevEdition))return yield Promise.resolve(!1);const d=Ct();let u=!1;if(!d){const e=null===(l=(0,o.getAppStore)().getState())||void 0===l?void 0:l.appStateInBuilder.appInfo,t=null===(p=null===(c=null===(r=(0,o.getAppStore)().getState())||void 0===r?void 0:r.appStateInBuilder)||void 0===c?void 0:c.user)||void 0===p?void 0:p.username;u=(null==e?void 0:e.owner)===t}if(!d&&!u)return yield Promise.resolve(!1);const m=yield ft(),g=Object.keys(m).map((e=>vt(this,void 0,void 0,(function*(){return yield o.ServiceManager.getInstance().fetchServiceInfo(e).then((e=>e.isHostedInSamePortal))}))));return Promise.all(g).then((e=>(null==e?void 0:e.length)>0&&(null==e?void 0:e.some((e=>e)))))}))}function kt(e,t){return vt(this,void 0,void 0,(function*(){if(!e||0===e.length||!t)return yield Promise.resolve();const i=Nt();return yield o.esri.restRequest.request(i,{authentication:o.SessionManager.getInstance().getSessionByUrl((0,o.getAppStore)().getState().portalUrl),httpMethod:"POST",params:{proxies:e.join()}}).then((e=>vt(this,void 0,void 0,(function*(){var i;return e.results&&Object.values(e.results).forEach((e=>{e.success&&jt(e.proxyId,t)})),null==t||t.exec(),(null===(i=e.results)||void 0===i?void 0:i.every((e=>!0===e.success)))?Promise.resolve():Promise.reject(`Deleting existing proxy failed: ${JSON.stringify(e)}`)})))).catch((i=>vt(this,void 0,void 0,(function*(){return e.forEach((e=>{jt(e,t)})),null==t||t.exec(),Promise.reject(`Deleting existing proxy failed: ${JSON.stringify(i)}`)}))))}))}function jt(e,t){var i,s,n;const a=null===(n=null===(s=null===(i=(0,o.getAppStore)().getState())||void 0===i?void 0:i.appStateInBuilder)||void 0===s?void 0:s.appConfig)||void 0===n?void 0:n.appProxies,l=a&&Object.values(a).find((t=>t.proxyId===e));l&&(null==t||t.removeAppProxy(l.id))}function Ot(){var e,t,i,s,n,a,l;const r=null===(t=null===(e=(0,o.getAppStore)().getState())||void 0===e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.portalUrl,c=null===(s=null===(i=(0,o.getAppStore)().getState())||void 0===i?void 0:i.appStateInBuilder)||void 0===s?void 0:s.appId;return`${r}/sharing/rest/content/users/${null===(l=null===(a=null===(n=(0,o.getAppStore)().getState())||void 0===n?void 0:n.appStateInBuilder)||void 0===a?void 0:a.appInfo)||void 0===l?void 0:l.owner}/items/${c}`}function Pt(){return`${Ot()}/createProxies`}function Nt(){return`${Ot()}/deleteProxies`}var Tt=v(18371),Rt=v.n(Tt);const Mt=e=>{const t=window.SVG,{className:i}=e,s=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i}(e,["className"]),n=(0,o.classNames)("jimu-icon jimu-icon-component",i);return t?o.React.createElement(t,Object.assign({className:n,src:Rt()},s)):o.React.createElement("svg",Object.assign({className:n},s))};class Lt extends o.React.PureComponent{constructor(e){super(e),this.__unmount=!1,this.interval={none:this.props.intl.formatMessage({id:"intervalNone",defaultMessage:C.defaultMessages.intervalNone}),second:this.props.intl.formatMessage({id:"intervalSecond",defaultMessage:C.defaultMessages.intervalSecond}),minute:this.props.intl.formatMessage({id:"intervalMinute",defaultMessage:C.defaultMessages.intervalMinute}),hour:this.props.intl.formatMessage({id:"intervalHour",defaultMessage:C.defaultMessages.intervalHour}),day:this.props.intl.formatMessage({id:"intervalDay",defaultMessage:C.defaultMessages.intervalDay})},this.setIsHostedInSamePortal=()=>{this.props.sourceUrl&&o.ServiceManager.getInstance().fetchServiceInfo(this.props.sourceUrl).then((e=>{this.__unmount||this.setState({isHostedInSamePortal:e.isHostedInSamePortal})}))},this.onToggleProxy=()=>{let e;e=this.props.proxySettingConfig?null:(0,o.Immutable)({sourceUrl:this.props.sourceUrl}),this.props.onChange(this.props.sourceUrl,e)},this.onHitsPerInervalChange=e=>{const t=e,i={sourceUrl:this.props.sourceUrl,hitsPerInterval:t},o=this.props.proxySettingConfig?Object.assign(Object.assign({},this.props.proxySettingConfig),i):i;this.props.onChange(this.props.sourceUrl,o)},this.onIntervalUnitChange=e=>{const t=e.target.value,i=this.getIntervalSeconds(t),o={sourceUrl:this.props.sourceUrl,intervalSeconds:i},s=this.props.proxySettingConfig?Object.assign(Object.assign({},this.props.proxySettingConfig),o):o;this.props.onChange(this.props.sourceUrl,s)},this.state={isHostedInSamePortal:!0}}componentDidMount(){this.__unmount=!1,this.setIsHostedInSamePortal()}componentDidUpdate(e){this.__unmount=!1,e.sourceUrl!==this.props.sourceUrl&&this.setIsHostedInSamePortal()}componentWillUnmount(){this.__unmount=!0}getIntervalUnit(e){if(!e)return"none";switch(e){case 1:return"second";case 60:return"minute";case 3600:return"hour";case 86400:return"day";default:return"none"}}getIntervalSeconds(e){if(!e)return null;switch(e){case"second":return 1;case"minute":return 60;case"hour":return 3600;case"day":return 86400;default:return null}}render(){var e,t;if(!this.props.sourceUrl)return null;const i=this.props.label,s=!!this.props.proxySettingConfig,n=this.getIntervalUnit(null===(e=this.props.proxySettingConfig)||void 0===e?void 0:e.intervalSeconds),a=o.SessionManager.getInstance().getMainSession(),l=`${this.props.sourceUrl}?token=${a.token}`;return o.React.createElement("tr",{className:"row m-0 content-table-tr"},o.React.createElement("td",{className:"col-2",title:this.state.isHostedInSamePortal?null:this.props.intl.formatMessage({id:"disabledProxyTooltip",defaultMessage:C.defaultMessages.disabledProxyTooltip})},o.React.createElement(C.Switch,{onChange:this.onToggleProxy,checked:s,className:"mr-2",disabled:!this.state.isHostedInSamePortal,"aria-label":this.props.intl.formatMessage({id:"authorized",defaultMessage:C.defaultMessages.authorized}),"aria-checked":s})),o.React.createElement("td",{className:"col-4",title:i},o.React.createElement(C.Link,{to:l,target:"_blank",className:"font-size-13 px-0 text-truncate d-block text-left","aria-label":this.props.intl.formatMessage({id:"subscriberContent",defaultMessage:C.defaultMessages.subscriberContent})},i)),o.React.createElement("td",{className:"col-2"},this.props.isPremium&&o.React.createElement(Mt,{size:"m"})),o.React.createElement("td",{className:"col-2"},s&&o.React.createElement(C.NumericInput,{size:"sm",value:null===(t=this.props.proxySettingConfig)||void 0===t?void 0:t.hitsPerInterval,onChange:this.onHitsPerInervalChange,precision:0,min:1,className:"request-limit","aria-label":this.props.intl.formatMessage({id:"requestLimit",defaultMessage:C.defaultMessages.requestLimit})})),o.React.createElement("td",{className:"col-2"},s&&o.React.createElement(C.Select,{value:n,onChange:this.onIntervalUnitChange,size:"sm",className:"request-interval","aria-label":this.props.intl.formatMessage({id:"requestInterval",defaultMessage:C.defaultMessages.requestInterval})},Object.keys(this.interval).map(((e,t)=>o.React.createElement("option",{value:e,key:t,selected:e===n},this.interval[e]))))))}}class At extends o.React.PureComponent{constructor(){super(...arguments),this.columnName={authorized:this.props.intl.formatMessage({id:"authorized",defaultMessage:C.defaultMessages.authorized}),subscriberContent:this.props.intl.formatMessage({id:"subscriberContent",defaultMessage:C.defaultMessages.subscriberContent}),credits:this.props.intl.formatMessage({id:"credits",defaultMessage:C.defaultMessages.credits}),requestLimit:this.props.intl.formatMessage({id:"requestLimit",defaultMessage:C.defaultMessages.requestLimit}),requestInterval:this.props.intl.formatMessage({id:"requestInterval",defaultMessage:C.defaultMessages.requestInterval})},this.onProxyChange=(e,t)=>{const i=this.props.proxySettingConfigs||{},s=Object.assign({},i),n=o.dataSourceUtils.getDsTypeFromArcGISWholeServiceUrl(e)===o.DataSourceTypes.SceneService;if(t){if(s[e]=t,n){const i=e.replace("/SceneServer","/FeatureServer"),o=Object.assign(Object.assign({},t),{sourceUrl:i});s[i]=o}}else delete s[e],n&&delete s[e.replace("/SceneServer","/FeatureServer")];this.props.onChange(s)}}render(){const e=this.props.needProxyItems,t=this.props.proxySettingConfigs;return o.React.createElement("div",{className:(0,o.classNames)("h-100 w-100 bg-light-300",{[this.props.className]:!!this.props.className})},o.React.createElement("div",{className:"subscriber-warning"},this.props.intl.formatMessage({id:"subscriberWarning",defaultMessage:C.defaultMessages.subscriberWarning})),o.React.createElement("div",{className:"secondary-title mt-4 mb-3"},this.props.intl.formatMessage({id:"data",defaultMessage:C.defaultMessages.data})),o.React.createElement("table",{className:"content-table w-100"},o.React.createElement("thead",{className:"content-table-header container"},o.React.createElement("tr",{className:"row"},Object.keys(this.columnName).map(((e,t)=>o.React.createElement("th",{key:t,className:(0,o.classNames)("text-truncate",{"col-4":"subscriberContent"===e,"col-2":"subscriberContent"!==e}),title:this.columnName[e]},this.columnName[e]))))),o.React.createElement("tbody",{className:"container"},e&&Object.keys(e).map(((i,s)=>{var n,a;const l=e[i];return o.React.createElement(Lt,{isPremium:l.isPremium,isSubscriber:l.isSubscriber,sourceUrl:i,intl:this.props.intl,key:s,onChange:this.onProxyChange,label:null===(a=null===(n=l.items)||void 0===n?void 0:n[0])||void 0===a?void 0:a.label,proxySettingConfig:null==t?void 0:t[i]})})))))}}const Et=(0,o.injectIntl)((0,x.withStyles)(At,"ProxySetting"));var Dt;!function(e){e.IMAGE="image",e.ICON="icon"}(Dt||(Dt={}));var Ut=function(e,t,i,o){return new(i||(i=Promise))((function(s,n){function a(e){try{r(o.next(e))}catch(e){n(e)}}function l(e){try{r(o.throw(e))}catch(e){n(e)}}function r(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(a,l)}r((o=o.apply(e,t||[])).next())}))};const Ft={};class $t extends o.React.PureComponent{constructor(e){super(e),this.__unmount=!1,this.getProxySettingConfigs=e=>Ut(this,void 0,void 0,(function*(){var t,i;const s={},n=null===(i=null===(t=(0,o.getAppStore)().getState().appStateInBuilder)||void 0===t?void 0:t.appConfig)||void 0===i?void 0:i.appProxies;return Object.keys(e).forEach((e=>{const t=wt(e,n);t&&(s[e]=t.without("id").without("proxyId").without("proxyUrl"))})),s})),this.registerApp=()=>Ut(this,void 0,void 0,(function*(){var e,t,i,s;const n=null===(t=null===(e=(0,o.getAppStore)().getState())||void 0===e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.appId;if(Ft[n])return yield Ft[n];const a=`${null===(s=null===(i=(0,o.getAppStore)().getState())||void 0===i?void 0:i.appStateInBuilder)||void 0===s?void 0:s.portalUrl}/sharing/rest/oauth2/registerApp`;return Ft[n]=o.esri.restRequest.request(a,{authentication:o.SessionManager.getInstance().getSessionByUrl((0,o.getAppStore)().getState().portalUrl),httpMethod:"POST",params:{itemId:n,appType:"browser",redirect_uris:JSON.stringify([this.getAppRootUrl()])}}),yield Ft[n]})),this.createProxies=e=>Ut(this,void 0,void 0,(function*(){var t,i,s;if(!e)return yield Promise.resolve(null);const n=null===(s=null===(i=null===(t=(0,o.getAppStore)().getState())||void 0===t?void 0:t.appStateInBuilder)||void 0===i?void 0:i.appConfig)||void 0===s?void 0:s.appProxies,a={};let l=[];if(Object.keys(e).forEach((t=>{const i=e[t];if(!i)return;const o=i.hitsPerInterval,s=i.intervalSeconds,r=wt(t,n);xt(r,t,o,s)?a[r.id]=r:l=l.concat({sourceUrl:t,hitsPerInterval:o,intervalSeconds:s})})),0===l.length)return(0,o.Immutable)(a);Ct()||(yield this.registerApp());const r={referrers:[this.getAppUrl()].concat(o.proxyUtils.getProxyReferrers())},c=Pt();return o.esri.restRequest.request(c,{authentication:o.SessionManager.getInstance().getSessionByUrl((0,o.getAppStore)().getState().portalUrl),httpMethod:"POST",params:{serviceProxyParams:r,proxies:l}}).then((e=>{var t,i;const s=(null==e?void 0:e.appProxies)||[],n=a,l=null===(i=null===(t=(0,o.getAppStore)().getState())||void 0===t?void 0:t.appStateInBuilder)||void 0===i?void 0:i.appConfig,r=null==l?void 0:l.appProxies;return s.forEach((e=>{const t=wt(e.sourceUrl,r),i=(null==t?void 0:t.id)||o.appConfigUtils.getUniqueId(l.set("appProxies",r?r.merge(n):n),"appProxy");n[i]=Object.assign(Object.assign({},e),{id:i})})),(0,o.Immutable)(n)}))})),this.getAppRootUrl=()=>{var e;return null===(e=null===window||void 0===window?void 0:window.location)||void 0===e?void 0:e.origin},this.getAppUrl=()=>{var e,t,i,s,n,a;const l=null===(t=null===(e=(0,o.getAppStore)().getState())||void 0===e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.appId,r=null===(s=null===(i=(0,o.getAppStore)().getState())||void 0===i?void 0:i.appStateInBuilder)||void 0===s?void 0:s.appInfo,c="Web Experience Template"===(null==r?void 0:r.type),p=null===(n=o.urlUtils.getAppUrl({appId:l,isTemplate:c}))||void 0===n?void 0:n.replace(/^\//,"");return`${null===(a=this.getAppRootUrl())||void 0===a?void 0:a.replace(/\/$/,"")}/${p}`},this.onProxyConfigChange=e=>{this.setState({proxySettingConfigs:e})},this.onFinish=()=>{var e,t,i,s;this.setState({isLoading:!0});const n=this.state.proxySettingConfigs||{},a=null===(i=null===(t=null===(e=(0,o.getAppStore)().getState())||void 0===e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.appConfig)||void 0===i?void 0:i.appProxies,l=a&&Object.values(a).filter((e=>{var t;let i=n[null==e?void 0:e.sourceUrl];if(o.dataSourceUtils.getDsTypeFromArcGISWholeServiceUrl(null==e?void 0:e.sourceUrl)===o.DataSourceTypes.FeatureService){const o=null===(t=null==e?void 0:e.sourceUrl)||void 0===t?void 0:t.replace("/FeatureServer","/SceneServer"),s=n[o];i=i||Object.assign(Object.assign({},s),{sourceUrl:null==e?void 0:e.sourceUrl})}return!i||!xt(e,i.sourceUrl,i.hitsPerInterval,i.intervalSeconds)}));kt(null==l?void 0:l.map((e=>e.proxyId)),null===(s=this.state)||void 0===s?void 0:s.getAppConfigAction()).then((()=>Ut(this,void 0,void 0,(function*(){return yield this.createProxies(n).then((e=>{var t;if(!this.__unmount){if(e){const i=null===(t=this.state)||void 0===t?void 0:t.getAppConfigAction();Object.keys(e).forEach((t=>{null==i||i.editAppProxy(e[t])})),null==i||i.exec()}this.props.onFinish().then((()=>{this.__unmount||setTimeout((()=>{this.setState({isLoading:!1},(()=>{this.props.onToggle()}))}),3e3)}),(()=>{this.__unmount||setTimeout((()=>{this.setState({isLoading:!1},(()=>{this.props.onToggle()}))}),3e3)}))}}))})))).catch((e=>{console.error("Creating proxy failed: ",e),this.setState({isLoading:!1,isError:!0},(()=>{setTimeout((()=>{this.setState({isError:!1})}),5500)}))}))},this.getTostStyle=()=>{var e,t,i,s,n,a,l,r,c,p,d;return o.css`
      & {
        height:  ${o.polished.rem(40)};
        top: ${o.polished.rem(60)};
      }
      .jimu-toast-info {
        background: ${null===(s=null===(i=null===(t=null===(e=this.props)||void 0===e?void 0:e.theme)||void 0===t?void 0:t.colors)||void 0===i?void 0:i.palette)||void 0===s?void 0:s.secondary[300]};
        line-height: ${o.polished.rem(40)};
        color: ${null===(r=null===(l=null===(a=null===(n=this.props)||void 0===n?void 0:n.theme)||void 0===a?void 0:a.colors)||void 0===l?void 0:l.palette)||void 0===r?void 0:r.dark[800]};
        font-weight: 300;
        padding: 0 ${o.polished.rem(16)};
        box-shadow: 0 0 ${o.polished.rem(10)} ${o.polished.rem(2)} ${o.polished.rgba(null===(d=null===(p=null===(c=this.props)||void 0===c?void 0:c.theme)||void 0===p?void 0:p.colors)||void 0===d?void 0:d.white,.2)};
      }
    `},this.state={getAppConfigAction:null,isLoading:!1,isError:!1,proxySettingConfigs:null,needProxyItems:null}}componentDidMount(){this.__unmount=!1,o.moduleLoader.loadModule("jimu-for-builder").then((e=>{this.__unmount||this.setState({getAppConfigAction:e.getAppConfigAction})})),this.setState({isLoading:!0}),this.initNeedProxyItemsAndProxySettingConfigs()}componentDidUpdate(e){(!e.isOpen&&this.props.isOpen||e.appProxies!==this.props.appProxies)&&this.initNeedProxyItemsAndProxySettingConfigs()}initNeedProxyItemsAndProxySettingConfigs(){return Ut(this,void 0,void 0,(function*(){this.setState({isLoading:!0});try{const e=yield ft(),t=yield this.getProxySettingConfigs(e);this.__unmount||this.setState({proxySettingConfigs:t,needProxyItems:e,isLoading:!1})}catch(e){this.__unmount||this.setState({isLoading:!1}),console.error("Getting proxy config error",e)}}))}componentWillUnmount(){this.__unmount=!0}render(){const e=this.state.proxySettingConfigs,t=this.state.needProxyItems,i=this.props.intl.formatMessage({id:"subscriberContents",defaultMessage:C.defaultMessages.subscriberContents});return(0,o.jsx)(C.Modal,{isOpen:this.props.isOpen,centered:!0,className:(0,o.classNames)({[this.props.className]:!!this.props.className}),returnfocusafterclose:"true",contentClassName:"proxy-setting-container",backdrop:"static","aria-label":i},(0,o.jsx)(C.ModalHeader,{className:"d-flex justify-content-between header px-30",toggle:this.props.onToggle},(0,o.jsx)("div",{className:"flex-grow-1 text-truncate"},i)),(0,o.jsx)(C.ModalBody,{className:"d-flex px-30"},(0,o.jsx)(Et,{onChange:this.onProxyConfigChange,proxySettingConfigs:e,needProxyItems:t})),(0,o.jsx)(C.ModalFooter,{className:"px-30"},(0,o.jsx)(C.Button,{className:"mr-2",type:"primary",onClick:this.onFinish},this.props.intl.formatMessage({id:"publish",defaultMessage:o.defaultMessages.publish})),(0,o.jsx)(C.Button,{type:"default",onClick:this.props.onCancel},this.props.intl.formatMessage({id:"cancel",defaultMessage:o.defaultMessages.cancel}))),this.state.isLoading&&(0,o.jsx)(C.Loading,{type:o.LoadingType.Secondary}),this.state.isError&&(0,o.jsx)(C.Toast,{open:this.state.isError,type:C.ToastType.Info,css:this.getTostStyle(),text:this.props.intl.formatMessage({id:"creatProxyToPublishAppError",defaultMessage:C.defaultMessages.creatProxyToPublishAppError})}))}}const Bt=(0,x.withStyles)((0,x.withTheme)((0,o.injectIntl)($t)),"ProxySettingPopup"),zt=o.ReactRedux.connect(((e,t)=>{var i,o;return{appProxies:null===(o=null===(i=null==e?void 0:e.appStateInBuilder)||void 0===i?void 0:i.appConfig)||void 0===o?void 0:o.appProxies}}))(Bt);class Wt extends o.React.PureComponent{componentDidUpdate(e){this.props.pageId===e.pageId&&this.props.sizemode===e.sizemode||this.props.toggle()}getStyle(){const{theme:e}=this.props;return e&&o.css`
      background-color: ${e.colors.palette.light[300]};
      ${(0,x.popperPointer)({background:e.colors.palette.light[300],border:{color:e.colors.palette.light[600],width:"1px"}})}
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
    `}render(){const e=this.props,{pageId:t,sizemode:i,dispatch:s}=e,n=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i}(e,["pageId","sizemode","dispatch"]);return(0,o.jsx)(C.Popper,Object.assign({css:this.getStyle()},n))}}const Vt=o.ReactRedux.connect((function(e){return{pageId:e.appRuntimeInfo.currentPageId,sizemode:e.browserSizeMode}}))(Wt);var Gt=v(55339),_t=v.n(Gt);const Jt=e=>{const t=window.SVG,{className:i}=e,s=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i}(e,["className"]),n=(0,o.classNames)("jimu-icon jimu-icon-component",i);return t?o.React.createElement(t,Object.assign({className:n,src:_t()},s)):o.React.createElement("svg",Object.assign({className:n},s))};var qt=v(4077),Ht=v.n(qt);const Zt=e=>{const t=window.SVG,{className:i}=e,s=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i}(e,["className"]),n=(0,o.classNames)("jimu-icon jimu-icon-component",i);return t?o.React.createElement(t,Object.assign({className:n,src:Ht()},s)):o.React.createElement("svg",Object.assign({className:n},s))},Kt=1e3;class Qt extends o.React.PureComponent{constructor(e){super(e),this.groupLabelMap={1:this.props.intl.formatMessage({id:"mapCentric",defaultMessage:C.defaultMessages.mapCentric}),2:this.props.intl.formatMessage({id:"dataCentric",defaultMessage:C.defaultMessages.dataCentric}),3:this.props.intl.formatMessage({id:"pageElements",defaultMessage:C.defaultMessages.pageElements}),4:this.props.intl.formatMessage({id:"menuAndTollbars",defaultMessage:C.defaultMessages.menuAndTollbars}),9:this.props.intl.formatMessage({id:"section",defaultMessage:o.defaultMessages.section})},this.allGroup={value:Kt,label:this.props.intl.formatMessage({id:"all",defaultMessage:C.defaultMessages.all})},this.getRequireEnterpriseIconTooltip=e=>{if((null==e?void 0:e.length)>0){const t=e.join(", ");return this.props.intl.formatMessage({id:"requireEnterpriseAndUserTypeExtensions",defaultMessage:C.defaultMessages.requireEnterpriseAndUserTypeExtensions},{userTypeExtensions:t})}return this.props.intl.formatMessage({id:"requireEnterprise",defaultMessage:C.defaultMessages.requireEnterprise})},this.WidgetCard=({widgetInfo:e})=>{var t,i,s,n;return(0,o.jsx)("div",{className:"d-flex align-items-start justify-content-center widget-card"},(null===(t=e.manifest)||void 0===t?void 0:t.requireEnterprise)&&(0,o.jsx)(C.Button,{title:this.getRequireEnterpriseIconTooltip(null===(i=e.manifest)||void 0===i?void 0:i.requiredUserTypeExtensions),type:"tertiary",className:"widget-enterprise-btn",icon:!0,size:"sm"},(0,o.jsx)(Zt,null)),(0,o.jsx)(C.Button,{className:"w-100 h-100 p-0",key:e.name,onClick:()=>this.props.onSelect(e),"aria-label":e.label},(0,o.jsx)("div",{className:"d-flex flex-column w-100 h-100 widget-card--content"},(0,o.jsx)("div",{className:"d-flex justify-content-center"},(0,o.jsx)("div",{className:"widget-card-image"},(0,o.jsx)(C.Icon,{size:20,className:"w-100 m-0",autoFlip:null===(n=null===(s=e.manifest)||void 0===s?void 0:s.properties)||void 0===n?void 0:n.flipIcon,icon:"string"==typeof e.icon?e.icon:e.icon&&e.icon.svg,color:this.props.theme.colors.dark}))),(0,o.jsx)("div",{className:"flex-grow-1 d-flex align-items-center"},(0,o.jsx)("div",{className:"widget-card-name w-100 text-center text-capitalize text-truncate",css:o.css`
                line-height: 1rem;
                max-height: 2.2rem;
                white-space: normal;
              `,title:e.label},e.label)))))},this.WidgetGroup=({group:e})=>{if(!e)return null;const t=this.WidgetCard;return(0,o.jsx)("div",{className:"widget-group w-100 mb-3"},(0,o.jsx)("h4",{className:"group-label w-100 text-break",title:e.label},e.label),(0,o.jsx)("div",{className:"card-grid m-0"},e.itemList.sort(((e,t)=>e.order-t.order)).map(((e,i)=>e?(0,o.jsx)(t,{widgetInfo:e,key:i}):(0,o.jsx)("div",{className:"widget-card",style:{visibility:"hidden"},key:i})))))},this.getGroupList=(e,t,i)=>{var o,s,n,a;const l=[this.allGroup];if(e){const t=this.getCommonGroups(e,Kt,i);t&&Object.values(t).forEach((e=>{"number"==typeof e.groupId&&l.push({value:e.groupId,label:this.getGroupLabel(e.groupId)})}))}return(null===(s=null===(o=this.state.jimuForBuilderUtils)||void 0===o?void 0:o.showCustomWidgets)||void 0===s?void 0:s.call(o,e))&&this.getCustomGroup(e,t,Kt,i)&&l.push({value:null===(n=this.state.jimuForBuilderUtils)||void 0===n?void 0:n.CUSTOM_GROUP,label:this.getGroupLabel(null===(a=this.state.jimuForBuilderUtils)||void 0===a?void 0:a.CUSTOM_GROUP)}),l.filter((e=>!!e.label))},this.changeSelectedGroup=e=>{this.setState({selectedGroup:e.target.value})},this.onSearchValueChange=e=>{this.setState({searchValue:e.target.value,selectedGroup:Kt})},this.state={selectedGroup:Kt,commonWidgetList:null,remoteCustomWidgetList:null,searchValue:"",jimuForBuilderUtils:null}}componentDidMount(){this.loadJimuForBuilderUtilsPromise=o.cancelablePromise.cancelable(o.moduleLoader.loadModule("jimu-for-builder").then((e=>{var t;this.setState({jimuForBuilderUtils:null==e?void 0:e.utils}),this.groupLabelMap[null===(t=null==e?void 0:e.utils)||void 0===t?void 0:t.CUSTOM_GROUP]=this.props.intl.formatMessage({id:"custom",defaultMessage:C.defaultMessages.custom})})))}componentDidUpdate(e,t){!t.jimuForBuilderUtils&&this.state.jimuForBuilderUtils&&(this.loadCommonWidgetList(this.state.jimuForBuilderUtils.fetchCommonWidgetList),this.loadCustomWidgetList(this.state.jimuForBuilderUtils.fetchRemoteCustomWidgetList))}componentWillUnmount(){var e,t,i;null===(e=this.loadJimuForBuilderUtilsPromise)||void 0===e||e.cancel(),null===(t=this.loadCommonWidgetsPromise)||void 0===t||t.cancel(),null===(i=this.loadCommonWidgetsPromise)||void 0===i||i.cancel()}loadCommonWidgetList(e){e&&(this.loadCommonWidgetsPromise=o.cancelablePromise.cancelable(e().then((e=>{var t,i;const s=null==e?void 0:e.filter((e=>e.manifest.widgetType!==o.WidgetType.Layout&&this.props.isAccepted(e,this.props.isPlaceholder)));null===(i=(t=this.props).onWidgetLoaded)||void 0===i||i.call(t),this.setState({commonWidgetList:s})}))))}loadCustomWidgetList(e){e&&(this.loadRemoteCustomWidgetsPromise=o.cancelablePromise.cancelable(e().then((e=>{var t,i;const o=null==e?void 0:e.filter((e=>this.props.isAccepted(e,this.props.isPlaceholder)));null===(i=(t=this.props).onWidgetLoaded)||void 0===i||i.call(t),this.setState({remoteCustomWidgetList:o})}))))}getStyle(){const{theme:e}=this.props;return o.css`
      color: ${e.colors.palette.dark[800]};

      .widget-enterprise-btn {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
      }

      .px-20 {
        padding-left: 18px;
        padding-right: 18px;
      }

      .pt-20 {
        padding-top: 20px;
      }

      .list-container {
        height: calc(100% - 150px);
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
        width: 108px;
        padding: 0;
        border: none;
        position: relative;

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
    `}getGroupLabel(e){return this.groupLabelMap[e]}getCommonGroups(e,t,i){const o=t===Kt?e:null==e?void 0:e.filter((e=>e.group===t)),s={};return null==o||o.forEach((e=>{var t;e.group!==(null===(t=this.state.jimuForBuilderUtils)||void 0===t?void 0:t.CUSTOM_GROUP)&&this.isFuzzySearch(e.label,i)&&(s[e.group]||(s[e.group]={label:this.getGroupLabel(e.group),groupId:e.group,itemList:[]}),s[e.group].itemList.push(e))})),s}getCustomGroup(e,t,i,o){var s,n,a;if(i===Kt||i===(null===(s=this.state.jimuForBuilderUtils)||void 0===s?void 0:s.CUSTOM_GROUP)){const i=(t||[]).concat((null==e?void 0:e.filter((e=>{var t;return e.group===(null===(t=this.state.jimuForBuilderUtils)||void 0===t?void 0:t.CUSTOM_GROUP)})))||[]).filter((e=>this.isFuzzySearch(e.label,o)));if(!o||i.length>0)return{label:this.getGroupLabel(null===(n=this.state.jimuForBuilderUtils)||void 0===n?void 0:n.CUSTOM_GROUP),groupId:null===(a=this.state.jimuForBuilderUtils)||void 0===a?void 0:a.CUSTOM_GROUP,itemList:i}}return null}isFuzzySearch(e,t){return!!e&&(!t||e.toLocaleLowerCase().includes(t.toLocaleLowerCase()))}render(){var e,t,i,s,n,a;const l=this.WidgetGroup,{commonWidgetList:r,remoteCustomWidgetList:c,selectedGroup:p,searchValue:d}=this.state,u=!!r,m=u&&this.getCommonGroups(r,p,d),g=null===(t=null===(e=this.state.jimuForBuilderUtils)||void 0===e?void 0:e.showCustomWidgets)||void 0===t?void 0:t.call(e,r),h=g&&this.getCustomGroup(r,c,p,d),v=this.getGroupList(r,c,d);return(0,o.jsx)("div",{className:"content mt-3",css:this.getStyle()},(0,o.jsx)("div",{className:"d-flex justify-content-between align-items-center mb-3 px-20"},(0,o.jsx)(C.TextInput,{prefix:(0,o.jsx)(Z,{size:16,color:null===(a=null===(n=null===(s=null===(i=this.props.theme)||void 0===i?void 0:i.colors)||void 0===s?void 0:s.palette)||void 0===n?void 0:n.dark)||void 0===a?void 0:a[200]}),value:d,onChange:this.onSearchValueChange,className:"w-100",size:"sm",placeholder:this.props.intl.formatMessage({id:"search",defaultMessage:o.defaultMessages.search}),allowClear:!0})),(0,o.jsx)("div",{className:"d-flex justify-content-between align-items-center mb-3 px-20"},(0,o.jsx)("div",{className:"groups"},this.props.intl.formatMessage({id:"category",defaultMessage:C.defaultMessages.category})),(0,o.jsx)(C.Select,{className:"group-select",size:"sm",value:p,onChange:this.changeSelectedGroup},v.map(((e,t)=>(0,o.jsx)("option",{value:e.value,key:t,selected:e.value===p},e.label))))),(0,o.jsx)("div",{className:"w-100 list-container px-20"},!r&&(0,o.jsx)(C.Loading,{type:C.LoadingType.Secondary}),u&&Object.values(m).sort(((e,t)=>e.groupId-t.groupId)).map(((e,t)=>(0,o.jsx)(l,{key:t,group:e}))),g&&(0,o.jsx)(l,{group:h})))}}Qt.defaultProps={isPlaceholder:!1,isAccepted:()=>!0};const Xt=(0,o.injectIntl)(Qt),Yt=[(0,C.getFallbackPlacementsModifier)(["top","right","bottom","left"],!0),{name:"preventOverflow",enabled:!0,options:{boundariesElement:"viewport",padding:0}}];class ei extends o.React.PureComponent{constructor(e){super(e),this.togglePopper=e=>{this.state.open&&this.props.onClose&&this.props.onClose(e)},this.onWidgetLoaded=()=>{this.setState({generation:this.state.generation+1})},this.state={open:!0,generation:0}}getStyle(){const{theme:e}=this.props;return o.css`
      background-color: ${e.colors.palette.light[400]};
      color: ${e.colors.palette.dark[800]};

      .content {
        height: 600px;
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
    `}render(){var e;return this.state.open?(0,o.jsx)(Vt,{theme:this.props.theme,placement:null!==(e=this.props.placement)&&void 0!==e?e:"bottom",toggle:this.togglePopper,css:this.getStyle(),version:this.state.generation,modifiers:Yt,reference:this.props.referenceElement,open:!0,forceLatestFocusElements:!0},(0,o.jsx)("div",{className:"shadow-lg content",css:this.props.css},(0,o.jsx)("div",{className:"d-flex justify-content-between align-items-center px-20 pt-20"},(0,o.jsx)("div",{className:"title"},this.props.intl.formatMessage({id:"addWidget",defaultMessage:C.defaultMessages.addWidget})),(0,o.jsx)(C.Button,{size:"sm",icon:!0,type:"tertiary",onClick:this.togglePopper,title:this.props.intl.formatMessage({id:"close",defaultMessage:o.defaultMessages.close})},(0,o.jsx)(Jt,null))),(0,o.jsx)(Xt,{isPlaceholder:this.props.isPlaceholder,isAccepted:this.props.isAccepted,onSelect:this.props.onSelect,onWidgetLoaded:this.onWidgetLoaded,theme:this.props.theme}))):null}}ei.defaultProps={isPlaceholder:!1,isAccepted:()=>!0};const ti=(0,x.withTheme2)((0,o.injectIntl)(ei));var ii=v(96262);function oi(e){var t,i,s,n;const{template:a,onClick:l}=e,r=(0,o.getAppStore)().getState().appContext.locale,c=null!==(i=null===(t=a.i18nLabel)||void 0===t?void 0:t[r])&&void 0!==i?i:a.label,p=null!==(n=null===(s=a.i18nDescription)||void 0===s?void 0:s[r])&&void 0!==n?n:a.description,d=null!=a.gifThumbnail,u="templage_desc_"+a.name,m=o.React.useMemo((()=>o.css`
    transform: ${(0,o.getAppStore)().getState().appContext.isRTL&&a.flipThumbnail?"scaleX(-1);":""}  ;
  `),[a]);return(0,o.jsx)("div",{className:"block-item"},(0,o.jsx)(C.Tooltip,{title:p},(0,o.jsx)(C.Button,{role:"option","aria-label":c,"aria-describedby":u,onClick:l,className:"block-item--icon p-0"},(0,o.jsx)("img",{className:(0,o.classNames)("default-icon",{"multiple-icon":d}),css:m,src:a.thumbnail,draggable:!1,width:a.thumbnailWidth/2,height:a.thumbnailHeight/2}),d&&(0,o.jsx)("img",{className:(0,o.classNames)("gif-icon",{"multiple-icon":d}),css:m,draggable:!1,src:a.gifThumbnail}))),(0,o.jsx)("span",{"aria-hidden":!0,className:"block-item-label text-center mt-2",css:o.css`max-width: ${a.thumbnailWidth/2}px`},c),(0,o.jsx)("span",{"aria-hidden":!0,className:"sr-only",id:u},p))}function si(e){const{templates:t,onItemSelect:i}=e,s=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i}(e,["templates","onItemSelect"]),n=o.React.useMemo((()=>(0,x.getBuilderThemeVariables)()),[]),a=o.React.useMemo((()=>o.css`
    width: auto;
    padding: 20px;
    background-color: ${n?n.colors.palette.light[300]:"var(--light-300)"};
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
        background: ${n?n.colors.palette.light[200]:"var(--light-200)"};
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
        outline: 2px solid ${n?n.colors.palette.primary[600]:"var(--primary-600)"};
        .default-icon.multiple-icon {
          opacity: 0;
        }
        .gif-icon {
          opacity: 1;
        }
      }

      .block-item-label {
        color: ${n?n.colors.palette.dark[400]:"var(--dark-400)"};
      }
    }

    .size-mode-SMALL & .block-item {
      width: 140px;
      height: auto;
    }
  `),[n]);return(0,o.jsx)("div",Object.assign({css:a},s,{role:"listbox"}),t.map((e=>(0,o.jsx)(oi,{key:e.name,template:e,onClick:()=>i(e)}))))}class ni extends o.React.PureComponent{constructor(e){super(e),this.onTabSelect=e=>{this.props.onTabSelect(e)},this.onFullScreenTypeChange=e=>{this.setState({fullScreenType:e.target.value})},this.state={fullScreenType:"all"}}render(){const{theme:e,formatMessage:t}=this.props,{fullScreenType:i}=this.state;let s=[];return s="fixed"===i?(0,ii.getFullScreenPageTemplates)():"grid"===i?(0,ii.getFullScreenGridPageTemplates)():[(0,ii.getFullScreenPageTemplates)()[0],(0,ii.getFullScreenGridPageTemplates)()[0]].concat((0,ii.getFullScreenPageTemplates)().slice(1),(0,ii.getFullScreenGridPageTemplates)().slice(1)),(0,o.jsx)("div",{className:"w-100 h-100"},(0,o.jsx)("h5",{className:"pt-3 px-4 mb-2 text-dark-600 text-truncate",title:t("addPage")},t("addPage")),(0,o.jsx)(C.Tabs,{defaultValue:"fullScreenApp",fill:!0,type:"underline",css:o.css`
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
          `,onChange:this.onTabSelect},(0,o.jsx)(C.Tab,{id:"fullScreenApp",title:t("fullScreenApp"),className:C.FOCUSABLE_CONTAINER_CLASS},(0,o.jsx)("div",{className:"d-flex flex-column h-100"},(0,o.jsx)(C.Select,{className:"align-self-end my-3",value:i,"aria-label":t("page"),css:o.css`
                  width: 120px;
                  padding-right: 1.2rem;
                `,size:"sm",onChange:this.onFullScreenTypeChange},(0,o.jsx)("option",{value:"all"},t("all")),(0,o.jsx)("option",{value:"fixed"},t("fixed")),(0,o.jsx)("option",{value:"grid"},t("grid"))),(0,o.jsx)(si,{className:(0,o.classNames)({[C.FOCUSABLE_CONTAINER_CLASS]:"fullScreenApp"===this.props.tabId}),templates:s,onItemSelect:this.props.onItemSelect,css:o.css`
                  height: calc(100% - 64px);
                  overflow: auto;
                  padding-top: 0;
                `}))),(0,o.jsx)(C.Tab,{id:"scrollingPage",title:t("scrollingPage"),className:C.FOCUSABLE_CONTAINER_CLASS},(0,o.jsx)(si,{className:(0,o.classNames)({[C.FOCUSABLE_CONTAINER_CLASS]:"scrollingPage"===this.props.tabId}),templates:(0,ii.getScrollingPageTemplates)(),onItemSelect:this.props.onItemSelect}))))}}const ai=[{name:"preventOverflow",options:{boundariesElement:"viewport",padding:{bottom:20}}}];class li extends o.React.PureComponent{constructor(e){super(e),this.togglePopper=()=>{var e;this.state.open&&this.props.onClose&&this.props.onClose(),this.state.open&&(null===(e=this.props.referenceElement)||void 0===e||e.focus()),this.setState({open:!this.state.open})},this.tabSelect=e=>{this.setState({tabId:e})},this.onItemSelect=e=>{this.props.onClose(),this.props.onItemSelect(e)},this.state={open:!0,tabId:"fullScreenApp"}}render(){const{referenceElement:e,theme:t}=this.props;return(0,o.jsx)(Vt,{placement:"bottom",theme:this.props.theme,reference:e,offset:[0,10],open:!0,toggle:this.togglePopper,showArrow:!0,modifiers:ai,forceLatestFocusElements:!0},(0,o.jsx)("div",{css:o.css`
            max-height: 640px;
            height: calc(100vh - 150px);
            overflow: hidden;
          `},(0,o.jsx)(ni,{theme:t,tabId:this.state.tabId,onTabSelect:this.tabSelect,formatMessage:this.props.formatMessage,onItemSelect:this.onItemSelect})))}}const ri=[{name:"preventOverflow",options:{altAxis:!0,boundariesElement:"viewport",padding:{bottom:20}}},{name:"flip",options:{fallbackPlacements:["right","left"]}}];function ci(e){const{title:t,templates:i,templateContentStyle:s,referenceElement:n,onItemSelect:a,onClose:l}=e,r=o.React.useMemo((()=>e.theme||(0,x.getBuilderThemeVariables)()),[]),c=o.React.useMemo((()=>o.css`
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
  `),[r,t]),p=o.React.useCallback((()=>{null==l||l(),"function"==typeof(null==n?void 0:n.focus)&&o.lodash.defer((()=>{null==n||n.focus()}))}),[l,n]);return(0,o.jsx)(Vt,{placement:"bottom",theme:r,css:c,reference:n,offset:[0,10],toggle:p,open:!0,showArrow:!0,modifiers:ri},t&&(0,o.jsx)("h5",{className:"text-dark-600 text-truncate title px-4 pt-3 mb-0"},t),(0,o.jsx)("div",{className:"template-content",style:s},(0,o.jsx)(si,{templates:i,onItemSelect:a})))}var pi=v(59216),di=v.n(pi);const ui=e=>{const t=window.SVG,{className:i}=e,s=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i}(e,["className"]),n=(0,o.classNames)("jimu-icon jimu-icon-component",i);return t?o.React.createElement(t,Object.assign({className:n,src:di()},s)):o.React.createElement("svg",Object.assign({className:n},s))};var mi=v(34750),gi=v.n(mi);const hi=e=>{const t=window.SVG,{className:i}=e,s=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i}(e,["className"]),n=(0,o.classNames)("jimu-icon jimu-icon-component",i);return t?o.React.createElement(t,Object.assign({className:n,src:gi()},s)):o.React.createElement("svg",Object.assign({className:n},s))};var vi=v(99820),fi=v.n(vi);const bi=e=>{const t=window.SVG,{className:i}=e,s=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i}(e,["className"]),n=(0,o.classNames)("jimu-icon jimu-icon-component",i);return t?o.React.createElement(t,Object.assign({className:n,src:fi()},s)):o.React.createElement("svg",Object.assign({className:n},s))};var yi=v(58959),Si=v.n(yi);const wi=e=>{const t=window.SVG,{className:i}=e,s=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i}(e,["className"]),n=(0,o.classNames)("jimu-icon jimu-icon-component",i);return t?o.React.createElement(t,Object.assign({className:n,src:Si()},s)):o.React.createElement("svg",Object.assign({className:n},s))};var xi=v(94070),Ci=v.n(xi);const Ii=e=>{const t=window.SVG,{className:i}=e,s=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i}(e,["className"]),n=(0,o.classNames)("jimu-icon jimu-icon-component",i);return t?o.React.createElement(t,Object.assign({className:n,src:Ci()},s)):o.React.createElement("svg",Object.assign({className:n},s))};class ki extends o.React.PureComponent{constructor(e){super(e),this.preValue=null,this.initRuleOptionName=(e,t)=>{var i,s;const n=(null==e?void 0:e.map((e=>null==e?void 0:e.ruleOptionName)))||[],a=(null==t?void 0:t.map((e=>null==e?void 0:e.ruleOptionName)))||[];let l=!1;((null==e?void 0:e.length)!==(null==t?void 0:t.length)||n.join("")!==a.join(""))&&(l=!0),(l||!(null===(s=null===(i=this.state)||void 0===i?void 0:i.ruleOptionName)||void 0===s?void 0:s.length)&&(null==n?void 0:n.length)>0)&&this.setState({ruleOptionName:(0,o.Immutable)(n)})},this.initData=()=>{if(Array.isArray(this.props.value)&&this.props.value.length)return!1;const e=this.deepClone(this.state.option);e.ruleOptionName=this.props.intl.formatMessage({id:"option",defaultMessage:C.defaultMessages.option})+0;const t=[e];this.props.onChange(t)},this.onOptionChange=(e,t,i,o)=>{const s=this.deepClone(this.props.value);s[t].rule[e][i]=o,this.props.onChange(s,t)},this.onSelectChange=(e,t,i)=>{const o=e[0];if(!o)return;const s=this.deepClone(this.props.value),n=o.name;s[i].rule[t].jimuFieldName=n,this.props.onChange(s,i)},this.addOption=()=>{const e=Array.isArray(this.props.value),t=e?this.props.value.length:0,i=this.createOptionText(t),o=this.deepClone(this.state.option);o.ruleOptionName=i;const s=e?this.deepClone(this.props.value):[];s.push(o),this.props.onChange(s)},this.createOptionText=e=>{const t=this.props.intl.formatMessage({id:"option",defaultMessage:C.defaultMessages.option})+e;if(!this.isOptionNameRepeat(t))return t;const i=e+1;return this.createOptionText(i)},this.deleteOption=e=>{const t=this.deepClone(this.props.value);t.splice(e,1),this.props.onChange(t)},this.deleteAll=()=>{this.props.onChange([])},this.toggleOptionNameDisplay=(e,t)=>{const i=this.deepClone(this.props.value);let o=i[e].isEditOptionName;if(o=!!o,i[e].isEditOptionName=!o,t){const o=t;!this.isOptionNameRepeat(o)&&o&&(i[e].ruleOptionName=o)}this.props.onChange(i),setTimeout((()=>{var e;null===(e=this.inputRef)||void 0===e||e.select()}))},this.isOptionNameRepeat=e=>{if(!Array.isArray(this.props.value))return!1;let t=!1;return this.props.value.forEach((i=>{i.ruleOptionName===e&&(t=!0)})),t},this.deepClone=e=>{const t=Array.isArray(e)?[]:{};for(const i in e){const o=("object"==typeof e[i]||"function"==typeof e[i])&&null!==e[i];t[i]=o?this.deepClone(e[i]):e[i]}return t},this.setInputRef=e=>{e&&(this.inputRef=e,e.focus())},this.createRuleOptionElement=(e,t,i,s)=>{const n=t.jimuFieldName?(0,o.Immutable)([t.jimuFieldName]):(0,o.Immutable)([]);return(0,o.jsx)("div",{className:"select-down-con",key:t.jimuFieldName||i},this.props.useDataSource&&(0,o.jsx)("div",{className:"sort-field-selector"},(0,o.jsx)(ht.FieldSelector,{useDataSources:e,onChange:(e,t)=>{this.onSelectChange(e,i,s)},selectedFields:n,isSearchInputHidden:!0,isDataSourceDropDownHidden:!0,useDropdown:!0})),[{getTitle:()=>this.nls("ascending"),order:o.OrderRule.Asc},{getTitle:()=>this.nls("decending"),order:o.OrderRule.Desc}].map(((e,n,a)=>(0,o.jsx)(C.Button,{key:n,title:e.getTitle(),type:t.order===e.order?"primary":"secondary",className:"sort-button "+(this.props.singleRowItemOnly&&t.order!==e.order?"collapse":""),onClick:()=>{this.onOptionChange(i,s,"order",this.props.singleRowItemOnly?[...a,a[0]][n+1].order:e.order)}},e.order===o.OrderRule.Asc&&(0,o.jsx)(wi,{size:"12",className:"sort-arrow-down-icon"}),e.order===o.OrderRule.Desc&&(0,o.jsx)(bi,{size:"12",className:"sort-arrow-down-icon"})))))},this.onRuleOptionNameChange=(e,t)=>{var i;const s=e.target.value,n=null===(i=this.state.ruleOptionName)||void 0===i?void 0:i.asMutable({deep:!0});n[t]=s,this.setState({ruleOptionName:(0,o.Immutable)(n)})},this.createOptionNameElement=(e,t)=>{var i;const s=e.ruleOptionName,n=null===(i=this.state.ruleOptionName)||void 0===i?void 0:i[t],a=this.props.intl.formatMessage({id:"optionNamePlaceholder",defaultMessage:C.defaultMessages.optionNamePlaceholder}),l=(0,o.jsx)(C.TextInput,{className:"flex-grow-1 h-100 edit-input",size:"sm",type:"text",defaultValue:s,onChange:e=>{this.onRuleOptionNameChange(e,t)},onAcceptValue:e=>{this.toggleOptionNameDisplay(t,e)},ref:e=>{this.setInputRef(e)},placeholder:a,title:n||a});return(0,o.jsx)("div",{className:"option-name d-flex align-items-center flex-grow-1","aria-label":s},e.isEditOptionName?l:(0,o.jsx)("span",{title:s,onDoubleClick:()=>{this.toggleOptionNameDisplay(t)}},s),(0,o.jsx)(C.Button,{size:"sm",type:"tertiary",icon:!0,className:"padding-0 option-name-icon-con",title:this.nls("edit"),onClick:()=>{this.toggleOptionNameDisplay(t)}},(0,o.jsx)(ui,{size:"s",className:"option-name-icon"})))},this.createOptionElement=(e,t,i)=>{let s;s=(0,o.jsx)("div",{className:"close-con text-right"},(0,o.jsx)(C.Button,{size:"sm",icon:!0,type:"tertiary",className:"padding-0",title:this.nls("deleteOption"),onClick:()=>{this.deleteOption(i)}},(0,o.jsx)(Jt,{size:this.props.singleRowItemOnly?14:12,className:"sort-arrow-down-icon"})));const n=()=>t.rule.map(((t,o)=>this.createRuleOptionElement(e,t,o,i)));return(0,o.jsx)("div",{className:"select-con flex-grow-1",key:i},this.props.singleRowItemOnly&&(0,o.jsx)(o.React.Fragment,null,(0,o.jsx)("div",{className:"option-name-con"},(0,o.jsx)(Ii,{size:14}),n(),s))||(0,o.jsx)(o.React.Fragment,null,(0,o.jsx)("div",{className:"option-name-con d-flex align-items-center"},(()=>this.createOptionNameElement(t,i))(),s),n()))},this.nls=e=>this.props.intl?this.props.intl.formatMessage({id:e,defaultMessage:C.defaultMessages[e]}):e,this.onDataSourceCreated=e=>{},this.checkIsOrderChange=()=>{var e,t;const{value:i}=this.props;if((null==i?void 0:i.length)!==(null===(e=this.preValue)||void 0===e?void 0:e.length))return!1;const o=(null==i?void 0:i.map((e=>null==e?void 0:e.ruleOptionName)))||[],s=(null===(t=this.preValue)||void 0===t?void 0:t.map((e=>null==e?void 0:e.ruleOptionName)))||[];return(null==o?void 0:o.join(""))!==(null==s?void 0:s.join(""))},this.state={option:{ruleOptionName:"",isEditOptionName:!1,rule:[{jimuFieldName:"",order:o.OrderRule.Asc}]},ruleOptionName:null}}componentDidMount(){this.initData()}componentDidUpdate(e,t){var i,o,s,n;this.preValue=null==e?void 0:e.value,this.initRuleOptionName(null===(i=this.props)||void 0===i?void 0:i.value,null==e?void 0:e.value),(null===(o=null==e?void 0:e.useDataSource)||void 0===o?void 0:o.dataSourceId)!==(null===(n=null===(s=this.props)||void 0===s?void 0:s.useDataSource)||void 0===n?void 0:n.dataSourceId)&&Promise.resolve(!0).then((()=>{this.initData()}))}render(){const{value:e}=this.props,t=this.checkIsOrderChange(),i=this.props.intl.formatMessage({id:"invalidExpression",defaultMessage:C.defaultMessages.invalidExpression});return(0,o.jsx)("div",{className:(0,o.classNames)("sort-con",this.props.singleRowItemOnly&&"single-row-item",{[this.props.className]:!!this.props.className})},(0,o.jsx)("div",null,(0,o.jsx)(C.Button,{type:"tertiary",className:"add-option-btn",onClick:this.addOption},(0,o.jsx)(hi,{size:"s",className:"add-option-icon"}),(0,o.jsx)("span",null,this.props.intl.formatMessage({id:"addOption",defaultMessage:C.defaultMessages.addOption}))),(0,o.jsx)(o.DataSourceComponent,{useDataSource:this.props.useDataSource,onDataSourceCreated:this.onDataSourceCreated},(s=>Array.isArray(e)?(0,o.jsx)(K.List,{size:"sm",className:"setting-ui-unit-list",itemsJson:e.asMutable({deep:!0}).map(((e,t)=>({itemStateDetailContent:e,itemKey:`${t}`}))),dndEnabled:!0,onUpdateItem:(e,i)=>{const{itemJsons:o}=i.props,[,s]=o,n=s.map((e=>e.itemStateDetailContent));t&&this.props.onChange(n)},overrideItemBlockInfo:({itemBlockInfo:e})=>({name:K.TreeItemActionType.RenderOverrideItem,children:[{name:K.TreeItemActionType.RenderOverrideItemDroppableContainer,children:[{name:K.TreeItemActionType.RenderOverrideItemDraggableContainer,children:[{name:K.TreeItemActionType.RenderOverrideItemBody,children:[{name:K.TreeItemActionType.RenderOverrideItemDragHandle},{name:K.TreeItemActionType.RenderOverrideItemMainLine}]}]}]}]}),renderOverrideItemMainLine:(e,t)=>{var i;const{itemJsons:s}=t.props,n=s[0],a=s[1];return this.createOptionElement((0,o.Immutable)([null===(i=this.props.useDataSource)||void 0===i?void 0:i.asMutable({deep:!0})]),n.itemStateDetailContent,a.indexOf(n))}}):i)),Array.isArray(e)&&0===e.length&&(0,o.jsx)("div",{className:"no-sort-remind"},(0,o.jsx)("div",null,this.props.intl.formatMessage({id:"noOptionRemindText",defaultMessage:C.defaultMessages.noOptionRemindText})),(0,o.jsx)("div",null,this.props.intl.formatMessage({id:"pleaceAddOne",defaultMessage:C.defaultMessages.pleaceAddOne})))))}}const ji=(0,x.withStyles)((0,o.injectIntl)(ki),"SortSetting");var Oi=v(60843),Pi=v.n(Oi);const Ni=e=>{const t=window.SVG,{className:i}=e,s=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i}(e,["className"]),n=(0,o.classNames)("jimu-icon jimu-icon-component",i);return t?o.React.createElement(t,Object.assign({className:n,src:Pi()},s)):o.React.createElement("svg",Object.assign({className:n},s))};var Ti=v(18656),Ri=v.n(Ti);const Mi=e=>{const t=window.SVG,{className:i}=e,s=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i}(e,["className"]),n=(0,o.classNames)("jimu-icon jimu-icon-component",i);return t?o.React.createElement(t,Object.assign({className:n,src:Ri()},s)):o.React.createElement("svg",Object.assign({className:n},s))};const Li=e=>{const t=C.hooks.useTranslate(),{vertical:i=!1,onChange:s,autoFlip:n=!0,className:a,size:l="sm"}=e,r=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i}(e,["vertical","onChange","autoFlip","className","size"]);return o.React.createElement(C.AdvancedButtonGroup,Object.assign({size:l,className:(0,o.classNames)("setting--direction-selector",a)},r),o.React.createElement(C.Button,{size:l,title:t("horizontal"),type:"default",icon:!0,active:!i,onClick:()=>s(!1)},o.React.createElement(Ni,{autoFlip:n})),o.React.createElement(C.Button,{size:l,title:t("vertical"),type:"default",icon:!0,active:i,onClick:()=>s(!0)},o.React.createElement(Mi,null)))};var Ai;!function(e){e.Auto="AUTO",e.Custom="CUSTOM"}(Ai||(Ai={}));class Ei extends o.React.PureComponent{constructor(e){super(e),this.toggleDropdown=()=>{this.setState((e=>({dropdownOpen:!e.dropdownOpen})))},this.state={dropdownOpen:!1},this._onAutoSelected=this.onSelect.bind(this,Ai.Auto),this._onCustomSelected=this.onSelect.bind(this,Ai.Custom)}onSelect(e){this.props.mode!==e&&this.props.onChange(e)}getStyle(){return o.css`
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
    `}autoInput(){return(0,o.jsx)(C.Input,{style:{width:"110px"},css:o.css`
          background-color: var(--light-600);
          border-color: var(--light-600);
          color: var(--black);
          height: 1.625rem;
          border-width: 0;
          padding: 0 0.25rem;
        `,disabled:!0,value:this.props.intl.formatMessage({id:"auto"})})}render(){const{mode:e,intl:t}=this.props,i=t.formatMessage({id:"auto"}),s=t.formatMessage({id:"custom"});return(0,o.jsx)("div",{className:"d-flex",css:this.getStyle()},(0,o.jsx)(C.Dropdown,{className:"auto-dropdown",isOpen:this.state.dropdownOpen,toggle:this.toggleDropdown},(0,o.jsx)(C.DropdownButton,{icon:!0}),(0,o.jsx)(C.DropdownMenu,null,(0,o.jsx)(C.DropdownItem,{onClick:this._onAutoSelected},(0,o.jsx)("span",{css:o.css`width: 1rem;`},e===Ai.Auto&&(0,o.jsx)(Mt,{size:"s"})),i),(0,o.jsx)(C.DropdownItem,{onClick:this._onCustomSelected},(0,o.jsx)("span",{css:o.css`width: 1rem;`},e===Ai.Custom&&(0,o.jsx)(Mt,{size:"s"})),s))),e===Ai.Auto&&this.autoInput(),e===Ai.Custom&&this.props.children)}}const Di=(0,o.injectIntl)(Ei),Ui=e=>{const{title:t,children:i,selected:s,onClick:n}=e,a=(()=>{var e,t,i;const s=(0,x.useTheme)(),n=null===(e=null==s?void 0:s.colors)||void 0===e?void 0:e.palette.primary[600],a=null===(t=null==s?void 0:s.colors)||void 0===t?void 0:t.palette.light[200],l=null===(i=null==s?void 0:s.colors)||void 0===i?void 0:i.black;return o.React.useMemo((()=>o.css`
      width: 100%;
      height:  ${o.polished.rem(50)};
      padding: ${o.polished.rem(8)}  ${o.polished.rem(12)};
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${l};
      background-color: ${a};
      position: relative;
      &.selected {
        outline: 3px solid ${n};
      }
      >.overlay {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;
      }
  `),[n,a,l])})();return(0,o.jsx)("div",{css:a,title:t,className:(0,o.classNames)("quick-style-item",{selected:s}),onClick:n},(0,o.jsx)("div",{className:"overlay"}),i)};const Fi=[{name:"preventOverflow",options:{altAxis:!0}},{name:"flip",options:{fallbackPlacements:["bottom-end","top-end"]}}],$i=(0,x.styled)(C.Popper)((()=>{var e,t,i,o;const s=(0,x.getTheme2)(),n=null===(e=null==s?void 0:s.colors)||void 0===e?void 0:e.palette.dark[600],a=null===(t=null==s?void 0:s.colors)||void 0===t?void 0:t.palette.dark[800];return`\n    background-color: ${null===(i=null==s?void 0:s.colors)||void 0===i?void 0:i.palette.light[300]};\n    color: ${n};\n    border: 1px solid ${null===(o=null==s?void 0:s.colors)||void 0===o?void 0:o.palette.light[600]};\n    > .popper-box {\n      > .panel-header {\n        color: ${n};\n        .action-btn {\n          color: ${n};\n          &:hover {\n            color: ${a};\n          }\n        }\n      }\n    }\n  `})),Bi=e=>{const{className:t,placement:i="right-start",popperNodeRef:s,onInitResizeHandler:n,onInitDragHandler:a,version:l,modifiers:r}=e,c=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i}(e,["className","placement","popperNodeRef","onInitResizeHandler","onInitDragHandler","version","modifiers"]),p=o.React.useRef(null),d=C.hooks.useForkRef(s,p),[u,m]=C.hooks.useControlled({controlled:l,default:0}),g=o.React.useMemo((()=>[...Fi,...null!=r?r:[]]),[r]);return o.React.useEffect((()=>{null==n||n((()=>{var e;null===(e=p.current)||void 0===e||e.classList.add("d-none")}),null,(()=>{var e;m((e=>e+1)),null===(e=p.current)||void 0===e||e.classList.remove("d-none")}))}),[n,m]),o.React.useEffect((()=>{null==a||a((()=>{var e;null===(e=p.current)||void 0===e||e.classList.add("d-none")}),null,(()=>{var e;m((e=>e+1)),null===(e=p.current)||void 0===e||e.classList.remove("d-none")}))}),[a,m]),o.React.createElement($i,Object.assign({className:(0,o.classNames)("shadow-2",t),modifiers:g,placement:i,popperNodeRef:d,version:u},c))};const zi=e=>{const{onClose:t,children:i,floating:s}=e,n=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i}(e,["onClose","children","floating"]),a=C.hooks.useTranslate(C.defaultMessages)("quickStyle");return o.React.createElement(Bi,Object.assign({},n,{headerTitle:s?a:"",onHeaderClose:t}),o.React.createElement(o.React.Fragment,null,!s&&o.React.createElement(C.PanelHeader,{className:"px-3 py-2",title:a,onClose:t}),i))},Wi=6,Vi=6;var Gi,_i;!function(e){e.Both="Both",e.GeocodeService="GeocodeService",e.FeatureService="FeatureService"}(Gi||(Gi={})),function(e){e.GeocodeService="GeocodeService",e.FeatureService="FeatureService"}(_i||(_i={}));const Ji="FieldName",qi="FieldValue",Hi=99,Zi=1e3,Ki=20,Qi="__",Xi="objectid",Yi="address",eo="Default Address",to="https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer",io="ArcGIS World Geocoding Service";var oo=v(77756),so=v(20663);const no={jimuName:Xi,alias:"OBJECTID",type:o.JimuFieldType.Number,name:Xi},ao=(e="",t=[])=>{const i={};return null==t||t.forEach(((e,t)=>{i[null==e?void 0:e.jimuName]=e,0===t&&(i[Xi]=no)})),{label:e,idField:Xi,fields:i}},lo=(e,t=0)=>{let i=eo;return null==e||e.forEach((o=>{i=t?`${i}${t}`:i,o.jimuName===i&&(i=lo(e,t+=1))})),i},ro=(e,t,i)=>{var o,s,n;const a=(null===(o=null==e?void 0:e.useDataSources)||void 0===o?void 0:o.asMutable({deep:!0}))||[],l=(null===(s=null==e?void 0:e.outputDataSources)||void 0===s?void 0:s.asMutable({deep:!0}))||[];if((null==a?void 0:a.length)!==(null==t?void 0:t.length)||(null==l?void 0:l.length)!==(null==i?void 0:i.length))return!0;const r=((e,t)=>{var i;if((null==e?void 0:e.length)!==(null==t?void 0:t.length))return!0;const o=[];return null==e||e.forEach((e=>{var i;const s=t.filter((t=>(null==t?void 0:t.dataSourceId)===(null==e?void 0:e.dataSourceId)));(null==s?void 0:s.length)>0&&o.push({dsFields:null==e?void 0:e.fields,preDsFields:null===(i=s[0])||void 0===i?void 0:i.fields})})),(null==o?void 0:o.length)!==(null==e?void 0:e.length)||(null===(i=null==o?void 0:o.filter((e=>{var t,i,o,s;const n=(null===(t=null==e?void 0:e.dsFields)||void 0===t?void 0:t.length)!==(null===(i=null==e?void 0:e.preDsFields)||void 0===i?void 0:i.length),a=(null===(s=null===(o=null==e?void 0:e.dsFields)||void 0===o?void 0:o.filter((t=>{var i;return!(null===(i=null==e?void 0:e.preDsFields)||void 0===i?void 0:i.includes(t))})))||void 0===s?void 0:s.length)>0;return n||a})))||void 0===i?void 0:i.length)>0})(t,a),c=(null===(n=l.filter((e=>!(null==i?void 0:i.includes(e)))))||void 0===n?void 0:n.length)>0;return r||c},co=e=>null==e?void 0:e.map((e=>e.configId)),po=e=>e&&0!==(null==e?void 0:e.length)?`config_${uo(e)+1}`:"config_0",uo=e=>{var t;const i=null==e?void 0:e.map((e=>{var t;const i=null===(t=null==e?void 0:e.split("_"))||void 0===t?void 0:t.pop();return i?Number(i):0}));return null===(t=null==i?void 0:i.sort(((e,t)=>t-e)))||void 0===t?void 0:t[0]},mo=e=>{const t={overrideItemBlockInfo:({itemBlockInfo:e},t)=>({name:K.TreeItemActionType.RenderOverrideItem,children:[{name:K.TreeItemActionType.RenderOverrideItemDroppableContainer,children:[{name:K.TreeItemActionType.RenderOverrideItemDraggableContainer,children:[{name:K.TreeItemActionType.RenderOverrideItemBody,children:[{name:K.TreeItemActionType.RenderOverrideItemMainLine,children:[{name:K.TreeItemActionType.RenderOverrideItemDragHandle},{name:K.TreeItemActionType.RenderOverrideItemIcon,autoCollapsed:!0},{name:K.TreeItemActionType.RenderOverrideItemTitle},{name:K.TreeItemActionType.RenderOverrideItemCommands}]}]}]}]}]})},i=o.css`
    &{
      max-height: 256px;
      overflow-y: auto;
    }
  `,s=(0,x.useTheme)(),{disPlayField:n,useDataSource:a,onFieldChange:l}=e;return(0,o.jsx)("div",{className:"w-100"},(0,o.jsx)(ht.FieldSelector,{useDataSources:a?(0,o.Immutable)([a]):(0,o.Immutable)([]),onChange:e=>{l(e,n,!0)},selectedFields:(0,o.Immutable)(null==n?void 0:n.map((e=>null==e?void 0:e.name))),isMultiple:!0,isSearchInputHidden:!1,isDataSourceDropDownHidden:!0,useDropdown:!0,useMultiDropdownBottomTools:!0,types:(0,o.Immutable)([o.JimuFieldType.Number,o.JimuFieldType.String])}),(0,o.jsx)("div",{css:i},(0,o.jsx)(K.List,Object.assign({size:"sm",className:"mt-2",itemsJson:Array.from(n).map(((e,t)=>({itemStateDetailContent:e,itemKey:`${null==e?void 0:e.name}${t}`,itemStateIcon:ht.dataComponentsUtils.getIconFromFieldType(e.type,s),itemStateTitle:e.alias||e.jimuName||e.name,itemStateCommands:[]}))),dndEnabled:!0,onUpdateItem:(e,t)=>{const{itemJsons:i}=t.props,[,o]=i,s=o.map((e=>e.itemStateDetailContent));l(s,n,!0)}},t))))},{useEffect:go,useRef:ho}=o.React,vo=(0,o.Immutable)([o.AllDataSourceTypes.FeatureLayer,o.AllDataSourceTypes.SceneLayer]),fo=e=>{var t;const i=C.hooks.useTranslate(C.defaultMessages,o.defaultMessages),s=ho(null),{trigger:n,isOpen:a,id:l,datasourceConfig:r,dsConfigItemIndex:c,popperFocusNode:p,toggle:d,updateConfigForLayerOptions:u,onSettingChange:m,hideIconSetting:g}=e,h=(null==r?void 0:r[c])||(0,o.Immutable)({}),{configId:v,label:f,icon:b,searchFields:y,searchExact:S,displayFields:w,hint:x,useDataSource:I}=h,[k,j]=o.React.useState(null),[O,P]=o.React.useState(f);go((()=>{v&&P(f)}),[v]),go((()=>{v&&f!==O&&P(f)}),[h]),go((()=>{a&&(clearTimeout(s.current),s.current=setTimeout((()=>{const e=document.querySelector(".search-ds-setting-popper .action-close");null==e||e.focus()}),200))}),[a]);const N=(e,t)=>{const i=co(null==r?void 0:r.asMutable({deep:!0})),o=v||po(i);let s=r?r.asMutable({deep:!0}):[];const n=null==e?void 0:e.getLabel(),a=T(t);t.fields=null==a?void 0:a.map((e=>null==e?void 0:e.jimuName));const l={configId:o,icon:null,label:n,displayLabel:!0,useDataSource:t,displayFields:a,searchFields:a,hint:"",searchServiceType:_i.FeatureService};return(null==h?void 0:h.configId)?s=s.map((e=>(null==e?void 0:e.configId)===o?l:e)):s.push(l),{dsConfigItem:l,datasourceConfig:s}},T=e=>{var t,i,s,n;const a=o.DataSourceManager.getInstance().getDataSource(null==e?void 0:e.dataSourceId),l=null===(t=a.getLayerDefinition())||void 0===t?void 0:t.displayField,r=null===(i=null==a?void 0:a.getSchema())||void 0===i?void 0:i.fields;let c;const p=[];for(const e in r)(null===(s=null==r?void 0:r[e])||void 0===s?void 0:s.type)!==o.JimuFieldType.Date&&p.push(null==r?void 0:r[e]),(null===(n=null==r?void 0:r[e])||void 0===n?void 0:n.name)===l&&(c=null==r?void 0:r[e]);const d=(null==p?void 0:p.length)>1?p[1]:p[0];return c?[(0,o.Immutable)(c)]:[(0,o.Immutable)(d)]},R=(e,t,i=!1)=>{var s,n;if(!e)return;const a=i?"displayFields":"searchFields";let l=L(e);0===(null==l?void 0:l.length)&&(l=null===(n=null===(s=(0,o.Immutable)(t))||void 0===s?void 0:s.asMutable({deep:!0}))||void 0===n?void 0:n.splice(0,1));const p=null==r?void 0:r.asMutable({deep:!0});let d=null==h?void 0:h.setIn([a],l);d=M(d),null==p||p.splice(c,1,null==d?void 0:d.asMutable({deep:!0})),u((0,o.Immutable)(p))},M=e=>{var t,i,o,s;const n=(null===(i=null===(t=null==e?void 0:e.searchFields)||void 0===t?void 0:t.asMutable({deep:!0}))||void 0===i?void 0:i.map((e=>null==e?void 0:e.jimuName)))||[],a=(null===(s=null===(o=null==e?void 0:e.displayFields)||void 0===o?void 0:o.asMutable({deep:!0}))||void 0===s?void 0:s.map((e=>null==e?void 0:e.jimuName)))||[],l=Array.from(new Set(n.concat(a)));return e.setIn(["useDataSource","fields"],l)},L=e=>null==e?void 0:e.filter((e=>(null==e?void 0:e.type)!==(null===o.JimuFieldType||void 0===o.JimuFieldType?void 0:o.JimuFieldType.Date))),A=(e,t)=>{const i=null==r?void 0:r.asMutable({deep:!0}),s=null==h?void 0:h.setIn(e,t);null==i||i.splice(c,1,null==s?void 0:s.asMutable({deep:!0})),m((0,o.Immutable)(i))},E=(null==h?void 0:h.useDataSource)?[null===(t=null==h?void 0:h.useDataSource)||void 0===t?void 0:t.asMutable({deep:!0})]:[];return(0,o.jsx)(oo.SidePopper,{className:"search-ds-setting-popper",isOpen:a,position:"right",toggle:d,trigger:n,title:i("setLayerSource"),backToFocusNode:p},(0,o.jsx)("div",{className:"w-100 h-100",css:o.css`overflow: auto;`},(0,o.jsx)(oo.SettingSection,{style:{paddingTop:0}},(0,o.jsx)(oo.SettingRow,{flow:"wrap",label:i("data")},(0,o.jsx)(ht.DataSourceSelector,{closeDataSourceListOnChange:!0,types:vo,useDataSources:(0,o.Immutable)(E),disableRemove:()=>!0,mustUseDataSource:!0,onChange:e=>{e&&e.length>0?(e=>{o.DataSourceManager.getInstance().createDataSourceByUseDataSource((0,o.Immutable)(e)).then((e=>{const t=(i=e)?i.type===o.DataSourceTypes.SceneLayer?i.getAssociatedDataSource():i:null;var i;return t||Promise.reject(Error("")),t})).then((t=>{const{datasourceConfig:i}=N(t,e);u((0,o.Immutable)(i))}))})(e[0]):(()=>{const e=co(null==r?void 0:r.asMutable({deep:!0})),t=v||po(e);let i=r?r.asMutable({deep:!0}):[];const s={configId:t,icon:null,label:"......",displayLabel:!0,useDataSource:null,displayFields:[],searchFields:[],hint:"",searchServiceType:_i.FeatureService};i=i.map((e=>(null==e?void 0:e.configId)===t?s:e)),u((0,o.Immutable)(i))})()},widgetId:l}))),(null==h?void 0:h.configId)&&k&&(0,o.jsx)("div",null,(0,o.jsx)(oo.SettingSection,null,(0,o.jsx)(oo.SettingRow,{flow:"wrap",label:i("label")},(0,o.jsx)(C.TextInput,{"aria-label":i("label"),size:"sm",value:O||"",onAcceptValue:e=>{e?(P(null==e?void 0:e.trim()),A(["label"],null==e?void 0:e.trim())):P(f)},onChange:e=>{var t;const i=null===(t=null==e?void 0:e.target)||void 0===t?void 0:t.value;P(i)},className:"w-100",placeholder:i("findAddressOrPlace")}))),!g&&(0,o.jsx)(oo.SettingSection,null,(0,o.jsx)(oo.SettingRow,{label:i("searchIcon")},(0,o.jsx)(so.IconPicker,{icon:b,onChange:e=>{A(["icon"],e)},configurableOption:"none",setButtonUseColor:!1}))),(0,o.jsx)(oo.SettingSection,{title:i("searchOptions"),role:"group","aria-label":i("searchOptions")},(0,o.jsx)(oo.SettingRow,{flow:"wrap",label:i("selectSearchFields"),role:"group","aria-label":i("selectSearchFields")},(0,o.jsx)(ht.FieldSelector,{useDataSources:I?(0,o.Immutable)([I]):(0,o.Immutable)([]),onChange:e=>{R(e,y)},selectedFields:(0,o.Immutable)(null==y?void 0:y.map((e=>null==e?void 0:e.name))),isMultiple:!0,isSearchInputHidden:!1,isDataSourceDropDownHidden:!0,useDropdown:!0,useMultiDropdownBottomTools:!0,types:(0,o.Immutable)([o.JimuFieldType.Number,o.JimuFieldType.String])}),(0,o.jsx)("div",{className:"mt-2","aria-label":i("exactMatch"),onClick:e=>{A(["searchExact"],!S)}},(0,o.jsx)(C.Checkbox,{title:i("exactMatch"),checked:S,className:"mr-1"}),i("exactMatch"))),(0,o.jsx)(oo.SettingRow,{flow:"wrap",label:i("displayFields"),role:"group","aria-label":i("displayFields")},(0,o.jsx)(mo,{disPlayField:w||[],onFieldChange:R,useDataSource:I})),(0,o.jsx)(oo.SettingRow,{flow:"wrap",label:i("searchHint")},(0,o.jsx)(C.TextInput,{size:"sm",value:x||"",title:x||i("findAddressOrPlace"),"aria-label":i("searchHint"),onChange:e=>{var t;const i=null===(t=null==e?void 0:e.target)||void 0===t?void 0:t.value;A(["hint"],i)},className:"w-100",placeholder:i("findAddressOrPlace")})))),(null==E?void 0:E[0])&&(0,o.jsx)("div",{className:"waiting-for-database"},(0,o.jsx)(o.DataSourceComponent,{useDataSource:(0,o.Immutable)(E[0]),onDataSourceCreated:e=>{j(e)}}))))};var bo=v(52785),yo=function(e,t,i,o){return new(i||(i=Promise))((function(s,n){function a(e){try{r(o.next(e))}catch(e){n(e)}}function l(e){try{r(o.throw(e))}catch(e){n(e)}}function r(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(a,l)}r((o=o.apply(e,t||[])).next())}))};const{useEffect:So,useRef:wo}=o.React;var xo;!function(e){e.Pass="Pass",e.NotHttps="Not_Https",e.InvalidURL="Invalid_URL"}(xo||(xo={}));const Co=e=>{const t=C.hooks.useTranslate(C.defaultMessages,o.defaultMessages),i=wo(null),{id:s,trigger:n,toggle:a,isOpen:l,datasourceConfig:r,dsConfigItemIndex:c,popperFocusNode:p,createOutputDs:d,onSettingChange:u,updateConfigForLayerOptions:m,hideIconSetting:g}=e,h=(null==r?void 0:r[c])||(0,o.Immutable)({}),{configId:v,label:f,icon:b,hint:y,outputDataSourceId:S,displayFields:w}=h,[x,I]=o.React.useState(f),[k,j]=o.React.useState(!1),[O,P]=o.React.useState(xo.Pass),[N,T]=o.React.useState(null==h?void 0:h.useUtility),[R,M]=o.React.useState(!1);So((()=>{l&&(clearTimeout(i.current),i.current=setTimeout((()=>{const e=document.querySelector(".search-locator-setting-popper .action-close");null==e||e.focus()}),200))}),[l]),So((()=>{l&&(P(xo.Pass),M(!1),(null==h?void 0:h.useUtility)?(U(null==h?void 0:h.useUtility).then((e=>{A(e).then((e=>{P(null==e?void 0:e.urlCheckResultType)}))})),T(null==h?void 0:h.useUtility),I(null==h?void 0:h.label)):(T(null),I(io)))}),[c,v,l]),So((()=>{I(null==h?void 0:h.label)}),[h]);const L=(e,t)=>{let i;return null==e||e.forEach((e=>{var o;(null===(o=null==e?void 0:e.jimuName)||void 0===o?void 0:o.toLocaleLowerCase())===t&&(i=e)})),i||(i=e[0]),[i]},A=e=>yo(void 0,void 0,void 0,(function*(){const t=new RegExp("^(([h][t]{2}[p][s])?://)");if(j(!1),!e||!t.test(e))return j(!0),Promise.resolve({urlCheckResultType:xo.NotHttps});try{return(0,o.loadArcGISJSAPIModules)(["esri/request"]).then((t=>{const[i]=t;return i(e,{query:{f:"json"},responseType:"json"}).then((e=>{var t;const i=(null==e?void 0:e.data)||{};if(j(!0),null==i?void 0:i.capabilities){const e=(null==i?void 0:i.singleLineAddressField)||{},o=(null==i?void 0:i.addressFields)||[],s=(null===(t=null==i?void 0:i.capabilities)||void 0===t?void 0:t.split(","))||[],n=null==s?void 0:s.includes("Suggest");return Promise.resolve({urlCheckResultType:xo.Pass,singleLineFieldName:null==e?void 0:e.name,addressFields:o,isSupportSuggest:n})}return Promise.resolve({urlCheckResultType:xo.InvalidURL})}))}))}catch(e){return j(!0),Promise.resolve({urlCheckResultType:xo.InvalidURL})}})),E=(e,t)=>{const i=null==r?void 0:r.asMutable({deep:!0}),s=null==h?void 0:h.setIn(e,t);null==i||i.splice(c,1,null==s?void 0:s.asMutable({deep:!0})),u((0,o.Immutable)(i))},D=()=>{const e=co(null==r?void 0:r.asMutable({deep:!0})),t=v||po(e);let i=r?r.asMutable({deep:!0}):[];const s={configId:t,icon:null,label:".....",hint:"",useUtility:null,searchServiceType:_i.GeocodeService,singleLineFieldName:""};i=r.map((e=>(null==e?void 0:e.configId)===t?s:e)),m((0,o.Immutable)(i))},U=e=>yo(void 0,void 0,void 0,(function*(){return o.UtilityManager.getInstance().getUrlOfUseUtility(e).then((e=>Promise.resolve(e)))})),F=e=>o.UtilityManager.getInstance().getLabelOfUseUtility(e),$=e=>{var t;const i=o.UtilityManager.getInstance().getUtilityJson(e.utilityId);return null===(t=null==i?void 0:i.orgSetting)||void 0===t?void 0:t.placeholder},B=o.css`
    &>div {
      padding: 0!important;
    }
  `;return(0,o.jsx)(oo.SidePopper,{className:"search-locator-setting-popper",isOpen:l,position:"right",toggle:a,trigger:n,title:t("setLocatorSource"),backToFocusNode:p},(0,o.jsx)("div",{className:"w-100 h-100",css:o.css`overflow: auto;`},(0,o.jsx)(oo.SettingSection,{style:{paddingTop:0}},(0,o.jsx)(oo.SettingRow,{flow:"wrap",label:t("locatorUrl")},(0,o.jsx)("div",{className:"w-100",css:B},(0,o.jsx)(bo.UtilitySelector,{useUtilities:(0,o.Immutable)(N?[N]:[]),onChange:e=>{const t=e[0];T(t||null),t?(M(!0),U(t).then((e=>{A(e).then((e=>{M(!1),P(null==e?void 0:e.urlCheckResultType),(null==e?void 0:e.urlCheckResultType)!==xo.Pass?T(null):((e,t,i,n)=>{const a=co(null==r?void 0:r.asMutable({deep:!0})),l=v||po(a);let c=r?r.asMutable({deep:!0}):[];const p=F(t),u=$(t),{addressFieldsSchema:g,defaultAddressFieldName:f}=((e=[])=>{const t=null==e?void 0:e.map((e=>({jimuName:null==e?void 0:e.alias,alias:null==e?void 0:e.alias,type:o.JimuFieldType.String,name:null==e?void 0:e.alias}))),i=lo(t,0),s={jimuName:i,alias:i,type:o.JimuFieldType.String,name:i};return t.unshift(s),{addressFieldsSchema:t,defaultAddressFieldName:i}})(i),b={configId:l,icon:null,label:p,hint:u,useUtility:t,searchServiceType:_i.GeocodeService,singleLineFieldName:e,isSupportSuggest:n};d&&(b.outputDataSourceId=`${s}_output_${l}`,b.addressFields=g,b.displayFields=L(g,f),b.defaultAddressFieldName=f),(null==h?void 0:h.configId)?c=r.map((e=>(null==e?void 0:e.configId)===l?b:e)):c.push(b),m((0,o.Immutable)(c))})(e.singleLineFieldName,t||null,e.addressFields,null==e?void 0:e.isSupportSuggest)}))}))):D()},showRemove:!1,type:o.SupportedUtilityType.GeoCoding,closePopupOnSelect:!0})),O!==xo.Pass&&k&&(0,o.jsx)("div",{className:"d-flex w-100 align-items-center justify-content-between mt-1"},(0,o.jsx)(C.Alert,{form:"basic",type:"warning",className:"w-100",open:!0,withIcon:!0,text:t("invalidUrlMessage")})))),R&&(0,o.jsx)(C.Loading,null),O===xo.Pass&&v&&N&&(0,o.jsx)("div",null,(0,o.jsx)(oo.SettingSection,null,(0,o.jsx)(oo.SettingRow,{flow:"wrap",label:t("label")},(0,o.jsx)(C.TextInput,{"aria-label":t("label"),size:"sm",value:x||"",onChange:e=>{var t;const i=null===(t=null==e?void 0:e.target)||void 0===t?void 0:t.value;I(i)},onAcceptValue:e=>{e?(I(null==e?void 0:e.trim()),E(["label"],null==e?void 0:e.trim())):I(f)},className:"w-100"}))),!g&&(0,o.jsx)(oo.SettingSection,null,(0,o.jsx)(oo.SettingRow,{label:t("searchIcon")},(0,o.jsx)(so.IconPicker,{icon:b,onChange:e=>{E(["icon"],e)},configurableOption:"none",setButtonUseColor:!1}))),(0,o.jsx)(oo.SettingSection,{title:t("searchOptions"),role:"group","aria-label":t("searchOptions")},S&&(0,o.jsx)(oo.SettingRow,{flow:"wrap",label:t("displayFields"),role:"group","aria-label":t("displayFields")},(0,o.jsx)(mo,{disPlayField:w||[],onFieldChange:(e,t,i=!1)=>{var s,n;if(!e)return;0===(null==e?void 0:e.length)&&(e=null===(n=null===(s=(0,o.Immutable)(t))||void 0===s?void 0:s.asMutable({deep:!0}))||void 0===n?void 0:n.splice(0,1));const a=null==r?void 0:r.asMutable({deep:!0}),l=null==h?void 0:h.setIn(["displayFields"],e);null==a||a.splice(c,1,null==l?void 0:l.asMutable({deep:!0})),m((0,o.Immutable)(a))},useDataSource:{dataSourceId:S,mainDataSourceId:S}})),(0,o.jsx)(oo.SettingRow,{flow:"wrap",label:t("searchHint")},(0,o.jsx)(C.TextInput,{size:"sm","aria-label":t("searchHint"),title:y||t("findAddressOrPlace"),value:y||"",onChange:e=>{var t;const i=null===(t=null==e?void 0:e.target)||void 0===t?void 0:t.value;E(["hint"],i)},className:"w-100",placeholder:t("findAddressOrPlace")}))))))};const{useState:Io,useRef:ko}=o.React,jo=v(55339),Oo=e=>{const t=C.hooks.useTranslate(o.defaultMessages,C.defaultMessages),i=ko(!1),s=ko(null),n=ko(null),{className:a,datasourceConfig:l,useDataSources:r,dsConfigItemIndex:c,createOutputDs:p,showSourcePanel:d,showNewSourceItem:u,id:m,onDsConfigIdChange:g,updateConfigForLayerOptions:h,hideSidePopper:v}=e,f=o.ReactRedux.useSelector((e=>{var t,i,o;return null===(o=null===(i=null===(t=null==e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.appConfig)||void 0===i?void 0:i.widgets)||void 0===o?void 0:o[m]})),b=o.ReactRedux.useSelector((e=>{var t,i;return null===(i=null===(t=null==e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.appConfig)||void 0===i?void 0:i.widgets})),y={overrideItemBlockInfo:({itemBlockInfo:e},t)=>({name:K.TreeItemActionType.RenderOverrideItem,children:[{name:K.TreeItemActionType.RenderOverrideItemDroppableContainer,children:[{name:K.TreeItemActionType.RenderOverrideItemDraggableContainer,children:[{name:K.TreeItemActionType.RenderOverrideItemBody,children:[{name:K.TreeItemActionType.RenderOverrideItemMainLine,children:[{name:K.TreeItemActionType.RenderOverrideItemDragHandle},{name:K.TreeItemActionType.RenderOverrideItemIcon,autoCollapsed:!0},{name:K.TreeItemActionType.RenderOverrideItemTitle},{name:K.TreeItemActionType.RenderOverrideItemDetailToggle},{name:K.TreeItemActionType.RenderOverrideItemCommands}]}]}]}]}]})},[S,w]=Io(null),[x,I]=Io(null),[k,j]=Io(!1),[O,P]=Io(null),N=C.hooks.useEventCallback((()=>{const e=null==l?void 0:l.asMutable({deep:!0});null==e||e.splice(x,1),h((0,o.Immutable)(e)),v()})),T=e=>{var t,a,r,c,p;(null===(t=l[e])||void 0===t?void 0:t.searchServiceType)===_i.GeocodeService?i.current?R(e):(a=void 0,r=void 0,c=void 0,p=function*(){return!i.current&&o.moduleLoader.loadModule("jimu-ui/advanced/data-source-selector").then((e=>(i.current=!0,s.current=e.dataComponentsUtils,n.current=e.DataSourceRemoveWaringReason,P(e.DataSourceRemoveWarningPopup),Promise.resolve(!0))))},new(c||(c=Promise))((function(e,t){function i(e){try{s(p.next(e))}catch(e){t(e)}}function o(e){try{s(p.throw(e))}catch(e){t(e)}}function s(t){var s;t.done?e(t.value):(s=t.value,s instanceof c?s:new c((function(e){e(s)}))).then(i,o)}s((p=p.apply(a,r||[])).next())}))).then((()=>{R(e)})):M(e)},R=C.hooks.useEventCallback((e=>{const t=l[e].outputDataSourceId;0===s.current.getWidgetsUsingDsOrItsDescendantDss(t,b).length?M(e):(w(t),j(!0),I(e))})),M=e=>{const t=null==l?void 0:l.asMutable({deep:!0});null==t||t.splice(e,1),h((0,o.Immutable)(t)),v()};return(0,o.jsx)("div",{className:`w-100 mt-2 ${a||""}`},(0,o.jsx)(K.List,Object.assign({className:"w-100",itemsJson:Array.from(l).map(((e,i)=>{var o;return{itemStateDetailContent:e,itemKey:`${i}`,itemStateChecked:d&&i===c,itemStateTitle:null==e?void 0:e.label,itemStateIcon:{icon:null===(o=e.icon)||void 0===o?void 0:o.svg},itemStateCommands:[{label:t("deleteOption"),iconProps:()=>({icon:jo,size:12}),action:()=>{T(i)}}]}})),dndEnabled:!0,renderOverrideItemDetailToggle:(e,i)=>{var s;const{itemJsons:n}=i.props,[a]=n,l=null==a?void 0:a.itemStateDetailContent,c=(null==l?void 0:l.searchServiceType)===_i.GeocodeService,d=c?null==l?void 0:l.outputDataSourceId:null===(s=null==l?void 0:l.useDataSource)||void 0===s?void 0:s.dataSourceId,u=!!p&&!((e,t=!1)=>{let i;if(t){const t=(null==f?void 0:f.outputDataSources)||[];i=(null==t?void 0:t.filter((t=>e===t)).length)>0}else i=(null==r?void 0:r.filter((t=>e===t.dataSourceId)).length)>0;return i&&e})(d,c);return u&&d?(0,o.jsx)(C.Alert,{buttonType:"tertiary",form:"tooltip",size:"small",type:"error",text:t("dataSourceCreateError")}):""},onUpdateItem:(e,t)=>{const{itemJsons:i}=t.props,[,s]=i,n=s.map((e=>e.itemStateDetailContent));g(null),h((0,o.Immutable)(n))},onClickItemBody:(e,t)=>{var i;const{itemJsons:[o]}=t.props,s=(null===(i=null==o?void 0:o.itemStateDetailContent)||void 0===i?void 0:i.searchServiceType)===_i.GeocodeService;g(+o.itemKey,s)}},y)),u&&(0,o.jsx)(K.List,Object.assign({className:"setting-ui-unit-list-new",itemsJson:[{name:"......"}].map(((e,t)=>({itemStateDetailContent:"item",itemKey:"index",itemStateChecked:!0,itemStateTitle:"......",itemStateCommands:[]}))),dndEnabled:!1,renderOverrideItemDetailToggle:()=>""},y)),O&&(0,o.jsx)(O,{dataSourceId:S,isOpen:k,toggle:()=>{j(!k)},reason:n.current.DataSourceRemoved,afterRemove:()=>{w(null),I(null),j(!1)},beforeRemove:N}))},{useSelector:Po}=o.ReactRedux,{useRef:No,useEffect:To}=o.React,Ro=e=>{var t,i,s,n,a,l;const r=C.hooks.useTranslate(C.defaultMessages,o.defaultMessages),c=(0,x.useTheme)(),{datasourceConfig:p,id:d,useDataSources:u,searchDataSettingType:m,createOutputDs:g,hideIconSetting:h,onSettingChange:v,onOutputDsSettingChange:f}=e,b=No(null),y=No(null),[S,w]=o.React.useState(!1),[I,k]=o.React.useState(!1),[j,O]=o.React.useState(!1),[P,N]=o.React.useState(!1),[T,R]=o.React.useState(null),[M,L]=o.React.useState(null),A=Po((e=>{var t,i,o;return null===(o=null===(i=null===(t=null==e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.appConfig)||void 0===i?void 0:i.widgets)||void 0===o?void 0:o[d]})),E=o.css`
    & {
      background-color: ${null===(s=null===(i=null===(t=c.colors)||void 0===t?void 0:t.palette)||void 0===i?void 0:i.secondary)||void 0===s?void 0:s[400]};
    }
  `,D=o.css`
    .data-remind {
      color: ${null===(l=null===(a=null===(n=c.colors)||void 0===n?void 0:n.palette)||void 0===a?void 0:a.dark)||void 0===l?void 0:l[500]};
      font-size: ${o.polished.rem(12)};
    }
  `;To((()=>{g&&U()}),[p]);const U=()=>{const e=(null==A?void 0:A.outputDataSources)||[],t=(null==p?void 0:p.asMutable({deep:!0}))||[];for(let i;i<(null==t?void 0:t.length)-1;i++){const o=t[i];if((null==o?void 0:o.searchServiceType)===_i.FeatureService)continue;const s=null==o?void 0:o.outputDataSourceId;if(!(null==e?void 0:e.includes(s))){B(p);break}}},F=()=>{O(!1),k(!1),R(null)},$=e=>{const t=e?!j:!I;if(N(t),t){const e=(null==p?void 0:p.length)||0;R(e),q(e,!0)}e?k(t):O(t)},B=e=>{_(e)&&N(!1);const t=z(e),i=G(t);g?f&&f(t.outputDataSources,e,i):v&&v(e,i)},z=e=>{var t;return null===(t=null==e?void 0:e.asMutable({deep:!0}))||void 0===t?void 0:t.reduce(((e,t)=>{const i=null==t?void 0:t.useDataSource;if(i&&(((e,t)=>{var i;return(null===(i=t.filter((t=>(null==t?void 0:t.dataSourceId)===(null==e?void 0:e.dataSourceId))))||void 0===i?void 0:i.length)>0})(i,null==e?void 0:e.useDataSources)?e.useDataSources=W(i,null==e?void 0:e.useDataSources):null==e||e.useDataSources.push(i)),g){const i=V(t);i&&e.outputDataSources.push(i)}return e}),{useDataSources:[],outputDataSources:[]})},W=(e,t)=>t.map((t=>{if((null==e?void 0:e.dataSourceId)===(null==t?void 0:t.dataSourceId)){const i=(null==e?void 0:e.fields)||[],o=(null==t?void 0:t.fields)||[],s=Array.from(new Set(o.concat(i)));t.fields=s}return t})),V=e=>{let t;return(null==e?void 0:e.searchServiceType)===_i.GeocodeService&&(t={id:null==e?void 0:e.outputDataSourceId,type:o.DataSourceTypes.FeatureLayer,label:null==e?void 0:e.label,originDataSources:[],isOutputFromWidget:!0,isDataInDataSourceInstance:!1,schema:ao(null==e?void 0:e.label,null==e?void 0:e.addressFields),geometryType:"esriGeometryPoint"}),t},G=(e,t)=>{var i;const o={id:d};return o.useDataSources=null==e?void 0:e.useDataSources,g&&(o.outputDataSources=null===(i=null==e?void 0:e.outputDataSources)||void 0===i?void 0:i.map((e=>null==e?void 0:e.id))),{dsInWidgetJson:o,isWidgetJsonDsChanged:ro(A,o.useDataSources,o.outputDataSources)}},_=e=>(null==e?void 0:e.length)!==(null==p?void 0:p.length),J=()=>{var e;const t=null===(e=null==p?void 0:p.asMutable({deep:!0}))||void 0===e?void 0:e.filter((e=>(null==e?void 0:e.useDataSource)||(null==e?void 0:e.useUtility)));B((0,o.Immutable)(t))},q=(e,t=!1)=>{let i;i=t?y.current.getElementsByClassName("add-search-btn")[0]:y.current.getElementsByClassName("jimu-tree-item__body")[e],L(i)};return(0,o.jsx)(oo.SettingSection,{css:D},(0,o.jsx)(oo.SettingRow,{flow:"wrap"},(0,o.jsx)("span",{className:"w-100 data-remind"},r("addSources"))),(0,o.jsx)(oo.SettingRow,{flow:"wrap"},(0,o.jsx)("div",{className:"w-100",ref:y},(0,o.jsx)("div",null,(!m||m===Gi.Both)&&(0,o.jsx)(C.Dropdown,{className:"w-100",size:"sm",toggle:()=>{w(!S)},isOpen:S,autoWidth:!0},(0,o.jsx)(C.DropdownButton,{className:"add-search-btn w-100",title:r("newSearchSource"),arrow:!1,icon:!0,type:"primary"},(0,o.jsx)(hi,{className:"mr-1 d-inline-block",autoFlip:!0}),r("newSearchSource")),(0,o.jsx)(C.DropdownMenu,{css:E},(0,o.jsx)(C.DropdownItem,{className:"w-100",onClick:()=>{$(!0)},title:r("layerSource")},r("layerSource")),(0,o.jsx)(C.DropdownItem,{className:"w-100",onClick:()=>{$(!1)},title:r("locatorSource")},r("locatorSource")))),m===Gi.FeatureService&&(0,o.jsx)(C.Button,{type:"primary",className:"w-100",onClick:()=>{$(!0)}},(0,o.jsx)(hi,{className:"mr-1 d-inline-block",autoFlip:!0}),r("layerSource")),m===Gi.GeocodeService&&(0,o.jsx)(C.Button,{type:"primary",className:"w-100",onClick:()=>{$(!1)}},(0,o.jsx)(hi,{className:"mr-1 d-inline-block",autoFlip:!0}),r("locatorSource"))),(0,o.jsx)("div",{className:"w-100",ref:b},(0,o.jsx)(Oo,{id:d,dsConfigItemIndex:T,datasourceConfig:p||(0,o.Immutable)([]),showSourcePanel:(()=>{var e;return(null===(e=null==p?void 0:p[T])||void 0===e?void 0:e.searchServiceType)===_i.GeocodeService?j:I})(),useDataSources:u,onDsConfigIdChange:(e,t)=>{N(!1),"number"==typeof e?(q(e,!1),T===e?t?(O(!j),k(!1)):(k(!I),O(!1)):(R(e),t?(O(!0),k(!1)):(k(!0),O(!1)))):F()},showNewSourceItem:P,updateConfigForLayerOptions:B,hideSidePopper:F,createOutputDs:g}))),(0,o.jsx)(fo,{id:d,dsConfigItemIndex:T,datasourceConfig:p||(0,o.Immutable)([]),useDataSources:u,isOpen:I,onSettingChange:v,trigger:null==b?void 0:b.current,updateConfigForLayerOptions:B,toggle:()=>{I&&R(null),k(!I),N(!1),J()},popperFocusNode:M,hideIconSetting:h}),(0,o.jsx)(Co,{id:d,dsConfigItemIndex:T,datasourceConfig:p||(0,o.Immutable)([]),useDataSources:u,isOpen:j,onSettingChange:v,updateConfigForLayerOptions:B,trigger:null==b?void 0:b.current,toggle:()=>{j&&R(null),O(!j),N(!1),J()},popperFocusNode:M,hideIconSetting:h,createOutputDs:g})))};var Mo=v(51315);const Lo=e=>{const t=C.hooks.useTranslate(C.defaultMessages,o.defaultMessages),i=(0,x.useTheme)(),s=o.css`
    .check-box-label {
      color: ${i.colors.palette.dark[800]}
    }
    .search-setting-con {
      padding-left: 0;
      padding-right: 0;
    }
    .checkbox-con .jimu-widget-setting--row-label{
      max-width: 100%;
    }
    .cursor-pointer {
      cursor: pointer;
    }
  `,{onSettingChange:n,hideRecentSearchSetting:a}=e,l=e.settingConfig||(0,o.Immutable)({}),{maxSuggestions:r,isUseCurrentLoation:c,isShowRecentSearches:p,recentSearchesMaxNumber:d}=l,[u,m]=o.React.useState(d),[g,h]=o.React.useState(r);(0,Mo.useEffect)((()=>{m(d),h(r)}),[l]);const v=(e,t)=>{const i=l.setIn(e,t);n&&n(i)},f=(e,t=1)=>{if(0===(null==e?void 0:e.length))return!0;if(isNaN(Number(e)))return!1;{const i=Number(e);return Number.isInteger(i)&&i>=t}};return(0,o.jsx)("div",{css:s},(0,o.jsx)(oo.SettingRow,{flow:"wrap",className:"mt-2 checkbox-con",label:t("maximumSuggestions")},(0,o.jsx)(C.TextInput,{size:"sm","aria-label":t("maximumSuggestions"),value:g,onChange:e=>{const t=e.target.value;f(t,0)&&h(t)},onAcceptValue:e=>{e||h(e=r||Wi),f(e,0)&&v(["maxSuggestions"],Number(e))},className:"w-100"})),(0,o.jsx)(oo.SettingRow,null,(0,o.jsx)("div",{className:"cursor-pointer",onClick:e=>{v(["isUseCurrentLoation"],!c)},"aria-label":t("useCurrentLocation")},(0,o.jsx)(C.Checkbox,{checked:!!c,className:"mr-1",title:t("useCurrentLocation")}),(0,o.jsx)("span",{className:"check-box-label"},t("useCurrentLocation")))),!a&&(0,o.jsx)(oo.SettingRow,{label:t("recentSearches")},(0,o.jsx)(C.Switch,{checked:p||!1,title:t("recentSearches"),onChange:e=>{v(["isShowRecentSearches"],!p)}})),p&&(0,o.jsx)(oo.SettingRow,{label:t("maximumNumber")},(0,o.jsx)(C.TextInput,{size:"sm","aria-label":t("maximumNumber"),value:u,onChange:e=>{const t=e.target.value;f(t)&&m(t)},onAcceptValue:e=>{e||m(e=d||Vi),f(e)&&v(["recentSearchesMaxNumber"],Number(e))},style:{width:"50px"}})))},Ao=e=>{const t=C.hooks.useTranslate(C.defaultMessages,o.defaultMessages),{hint:i,onSettingChange:s}=e,[n,a]=o.React.useState(i);return(0,Mo.useEffect)((()=>{a(i)}),[i]),(0,o.jsx)("div",{className:"general-setting-con"},(0,o.jsx)(oo.SettingRow,{flow:"wrap",label:t("multySearchHint")},(0,o.jsx)(C.TextInput,{"aria-label":t("multySearchHint"),title:n||t("findAddressOrPlace"),size:"sm",value:n,onChange:e=>{var t;const i=null===(t=null==e?void 0:e.target)||void 0===t?void 0:t.value;a(i)},onAcceptValue:e=>{a(e),s&&s(e)},className:"w-100",placeholder:t("findAddressOrPlace")})))};function Eo(e){var t,i;const s=(0,o.getAppStore)().getState().appStateInBuilder,n=s.appRuntimeInfo.currentPageId,a=s.appRuntimeInfo.currentDialogId;let l=s.appRuntimeInfo.dialogInfos||(0,o.Immutable)({});const r=s.appConfig.dialogs,c=s.appConfig.pages,p={canClose:!0,checked:!0,isClosed:!0};return a&&((null===(t=r[a])||void 0===t?void 0:t.isSplash)&&(l=l.set(a,p)),c[n].autoOpenDialogId&&(l=l.set(n+"-"+c[n].autoOpenDialogId,p)),e&&Object.keys(c).forEach((e=>{c[e].autoOpenDialogId===a&&(l=l.set(e+"-"+a,p))}))),(null===(i=r[a])||void 0===i?void 0:i.isSplash)||Object.keys(r).some((e=>{r[e].isSplash&&(l=l.set(e,p))})),e&&l&&Object.keys(l).forEach((t=>{t!==e&&t!==n+"-"+e||(l=l.set(t,{canClose:Do(e),checked:!1,isClosed:!1}))})),l}function Do(e){const t=(0,o.getAppStore)().getState().appStateInBuilder.appConfig.dialogs[e];return!t.interactionType||!t.confirmBeforeClose}function Uo(e){const t=(0,o.getAppStore)().getState().appStateInBuilder,i=t.appRuntimeInfo.currentPageId,s=t.appRuntimeInfo.currentDialogId;if(w.builderAppSync.publishChangeSelectionToApp(null),s){const e=Eo();w.builderAppSync.publishDialogInfosChangeToApp(e),w.builderAppSync.publishDialogChangeToApp(null)}i!==e&&w.builderAppSync.publishPageChangeToApp(e),w.builderAppSync.publichActivePagePartChangeToApp(o.PagePart.Body)}function Fo(e,t=!1){w.builderAppSync.publishChangeSelectionToApp(null);const i=(0,o.getAppStore)().getState().appStateInBuilder.appRuntimeInfo.currentDialogId;if(t||e!==i){w.builderAppSync.publishDialogChangeToApp(e);const t=Eo(e);w.builderAppSync.publishDialogInfosChangeToApp(t),w.builderAppSync.publichActivePagePartChangeToApp(null)}}(0,x.registerStyles)("jimu-ui/advanced/setting-components/",e)})(),f})())}}}));