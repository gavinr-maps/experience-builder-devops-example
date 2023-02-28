System.register(["jimu-core","jimu-core/react","jimu-for-builder","jimu-for-builder/templates","jimu-layouts/layout-runtime","jimu-theme","jimu-ui","jimu-ui/advanced/data-source-selector","jimu-ui/advanced/expression-builder","jimu-ui/advanced/resource-selector","jimu-ui/advanced/setting-components","jimu-ui/advanced/utility-selector","jimu-ui/basic/list-tree"],(function(e,t){var i={},s={},o={},a={},n={},l={},r={},c={},p={},d={},u={},m={},g={};return{setters:[function(e){i.AllDataSourceTypes=e.AllDataSourceTypes,i.CONSTANTS=e.CONSTANTS,i.ContainerType=e.ContainerType,i.DataSourceComponent=e.DataSourceComponent,i.DataSourceManager=e.DataSourceManager,i.DataSourceStatus=e.DataSourceStatus,i.DataSourceTypes=e.DataSourceTypes,i.DialogMode=e.DialogMode,i.ExpressionPartType=e.ExpressionPartType,i.Immutable=e.Immutable,i.JimuFieldType=e.JimuFieldType,i.LayoutItemType=e.LayoutItemType,i.LayoutType=e.LayoutType,i.LinkType=e.LinkType,i.LoadingType=e.LoadingType,i.MultipleDataSourceComponent=e.MultipleDataSourceComponent,i.OrderRule=e.OrderRule,i.PagePart=e.PagePart,i.PageType=e.PageType,i.React=e.React,i.ReactRedux=e.ReactRedux,i.ReactResizeDetector=e.ReactResizeDetector,i.ServiceManager=e.ServiceManager,i.SessionManager=e.SessionManager,i.SupportedUtilityType=e.SupportedUtilityType,i.UtilityManager=e.UtilityManager,i.WidgetType=e.WidgetType,i.appConfigUtils=e.appConfigUtils,i.cancelablePromise=e.cancelablePromise,i.classNames=e.classNames,i.css=e.css,i.dataSourceUtils=e.dataSourceUtils,i.defaultMessages=e.defaultMessages,i.esri=e.esri,i.getAppStore=e.getAppStore,i.injectIntl=e.injectIntl,i.jsx=e.jsx,i.loadArcGISJSAPIModules=e.loadArcGISJSAPIModules,i.lodash=e.lodash,i.moduleLoader=e.moduleLoader,i.polished=e.polished,i.proxyUtils=e.proxyUtils,i.urlUtils=e.urlUtils},function(e){s.useEffect=e.useEffect},function(e){o.builderAppSync=e.builderAppSync,o.getAppConfigAction=e.getAppConfigAction},function(e){a.getFullScreenGridPageTemplates=e.getFullScreenGridPageTemplates,a.getFullScreenPageTemplates=e.getFullScreenPageTemplates,a.getScrollingPageTemplates=e.getScrollingPageTemplates},function(e){n.searchUtils=e.searchUtils,n.utils=e.utils},function(e){l.getBuilderThemeVariables=e.getBuilderThemeVariables,l.getTheme2=e.getTheme2,l.popperPointer=e.popperPointer,l.registerStyles=e.registerStyles,l.styled=e.styled,l.useTheme=e.useTheme,l.withStyles=e.withStyles,l.withTheme=e.withTheme,l.withTheme2=e.withTheme2},function(e){r.AdvancedButtonGroup=e.AdvancedButtonGroup,r.Alert=e.Alert,r.Button=e.Button,r.Card=e.Card,r.CardBody=e.CardBody,r.CardImg=e.CardImg,r.Checkbox=e.Checkbox,r.Collapse=e.Collapse,r.Container=e.Container,r.Dropdown=e.Dropdown,r.DropdownButton=e.DropdownButton,r.DropdownItem=e.DropdownItem,r.DropdownMenu=e.DropdownMenu,r.FOCUSABLE_CONTAINER_CLASS=e.FOCUSABLE_CONTAINER_CLASS,r.FormGroup=e.FormGroup,r.Icon=e.Icon,r.Input=e.Input,r.Label=e.Label,r.Link=e.Link,r.Loading=e.Loading,r.LoadingType=e.LoadingType,r.Modal=e.Modal,r.ModalBody=e.ModalBody,r.ModalFooter=e.ModalFooter,r.ModalHeader=e.ModalHeader,r.NumericInput=e.NumericInput,r.Option=e.Option,r.PanelHeader=e.PanelHeader,r.Popper=e.Popper,r.Radio=e.Radio,r.Row=e.Row,r.Select=e.Select,r.Switch=e.Switch,r.Tab=e.Tab,r.Tabs=e.Tabs,r.TextInput=e.TextInput,r.Toast=e.Toast,r.ToastType=e.ToastType,r.Tooltip=e.Tooltip,r.UrlInput=e.UrlInput,r.defaultMessages=e.defaultMessages,r.getFallbackPlacementsModifier=e.getFallbackPlacementsModifier,r.hooks=e.hooks,r.isOutBoundary=e.isOutBoundary},function(e){c.DataSourceSelector=e.DataSourceSelector,c.FieldSelector=e.FieldSelector,c.dataComponentsUtils=e.dataComponentsUtils},function(e){p.ExpressionInput=e.ExpressionInput,p.ExpressionInputType=e.ExpressionInputType},function(e){d.IconPicker=e.IconPicker},function(e){u.SettingRow=e.SettingRow,u.SettingSection=e.SettingSection,u.SidePopper=e.SidePopper},function(e){m.UtilitySelector=e.UtilitySelector},function(e){g.List=e.List,g.TreeItemActionType=e.TreeItemActionType}],execute:function(){e((()=>{var e={4077:e=>{e.exports='<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.596 6.357c.39-.59.944-1.055 1.595-1.337L15.544.094a1.143 1.143 0 0 1 .91 0L30 5.97V23.66a3.6 3.6 0 0 1-.596 1.983 3.648 3.648 0 0 1-1.595 1.337l-11.353 4.927a1.144 1.144 0 0 1-.91 0L2 26.029V8.34a3.6 3.6 0 0 1 .596-1.984Zm3.419 15.162c.009.016.022.029.037.038l9.594 5.351a.721.721 0 0 0 .705 0l9.144-5.103a.994.994 0 0 0 .37-.356.95.95 0 0 0 .135-.488v-9.89a.852.852 0 0 0-.122-.438.89.89 0 0 0-.331-.32l-9.497-5.3a.106.106 0 0 0-.104 0l-2.415 1.348a.069.069 0 0 0-.026.025.066.066 0 0 0 .026.092l8.947 4.992c.39.218.716.532.941.91.226.378.345.807.345 1.243v5.514c0 .08-.021.157-.062.226a.459.459 0 0 1-.172.165l-5.633 3.145a3.904 3.904 0 0 1-1.899.49c-.666 0-1.32-.169-1.898-.49L8.972 19.81a1.457 1.457 0 0 1-.542-.524 1.394 1.394 0 0 1-.198-.715V11.76a.069.069 0 0 1 .07-.068c.012 0 .024.003.035.009l7.651 4.268c.05.028.092.068.121.117a.313.313 0 0 1 .045.16v2.526c0 .012.003.024.009.034a.068.068 0 0 0 .06.033.073.073 0 0 0 .035-.009l1.972-1.1c.28-.156.511-.38.673-.651.161-.27.247-.577.247-.89v-.964c0-.278-.076-.55-.22-.79-.144-.241-.35-.44-.598-.58L9.65 9.011a.885.885 0 0 0-.86 0L6.052 10.54a.104.104 0 0 0-.052.088v10.842c0 .018.006.035.015.05Z" fill="#000"></path></svg>'},18371:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m6.036 12.157 8.01-8.01a.5.5 0 1 1 .707.707l-8.01 8.01a1 1 0 0 1-1.415 0L1.146 8.682a.5.5 0 1 1 .708-.707l4.182 4.182Z" fill="#000"></path></svg>'},94070:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 14a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm1-5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0-6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" fill="#000"></path></svg>'},24786:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m1.373 8 2.07-2.071.83.828L2.2 8.828a3.515 3.515 0 0 0 4.97 4.971l2.072-2.071.828.828L8 14.627A4.686 4.686 0 1 1 1.373 8ZM13.799 7.172l-2.071 2.07.828.83L14.627 8A4.686 4.686 0 1 0 8 1.373l-2.071 2.07.828.83L8.828 2.2a3.515 3.515 0 0 1 4.971 4.97Z" fill="#000"></path><path d="M5.515 9.657a.586.586 0 0 0 .828.828l4.142-4.142a.586.586 0 0 0-.828-.828L5.515 9.657Z" fill="#000"></path></svg>'},59788:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.146 4.653a.485.485 0 0 1 .708 0L8 10.24l5.146-5.587a.485.485 0 0 1 .708 0 .538.538 0 0 1 0 .738l-5.5 5.956a.485.485 0 0 1-.708 0l-5.5-5.956a.538.538 0 0 1 0-.738Z" fill="#000"></path></svg>'},60843:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.646 10.354a.5.5 0 0 0 .708-.708L2.707 8h10.586l-1.647 1.646a.5.5 0 0 0 .708.708l2.5-2.5a.5.5 0 0 0 0-.708l-2.5-2.5a.5.5 0 0 0-.708.708L13.293 7H2.707l1.647-1.646a.5.5 0 1 0-.708-.708l-2.5 2.5a.5.5 0 0 0 0 .708l2.5 2.5Z" fill="#000"></path></svg>'},3273:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.653 13.854a.485.485 0 0 1 0-.708L10.24 8 4.653 2.854a.485.485 0 0 1 0-.708.538.538 0 0 1 .738 0l5.956 5.5a.485.485 0 0 1 0 .708l-5.956 5.5a.538.538 0 0 1-.738 0Z" fill="#000"></path></svg>'},58959:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 3a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4ZM1 6.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5ZM1.5 9a.5.5 0 0 0 0 1h10a.5.5 0 0 0 0-1h-10ZM1.5 12a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13Z" fill="#000"></path></svg>'},99820:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 13a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1h-4ZM1 9.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5ZM1.5 7a.5.5 0 0 1 0-1h10a.5.5 0 0 1 0 1h-10ZM1.5 4a.5.5 0 0 1 0-1h13a.5.5 0 0 1 0 1h-13Z" fill="#000"></path></svg>'},96009:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.854 11.347a.486.486 0 0 1-.708 0L8 5.76l-5.146 5.587a.485.485 0 0 1-.708 0 .538.538 0 0 1 0-.738l5.5-5.956a.485.485 0 0 1 .708 0l5.5 5.956a.538.538 0 0 1 0 .738Z" fill="#000"></path></svg>'},18656:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.354 12.354a.5.5 0 0 0-.708-.708L8 13.293V2.707l1.646 1.647a.5.5 0 0 0 .708-.708l-2.5-2.5a.5.5 0 0 0-.708 0l-2.5 2.5a.5.5 0 1 0 .708.708L7 2.707v10.586l-1.646-1.647a.5.5 0 0 0-.708.708l2.5 2.5a.5.5 0 0 0 .708 0l2.5-2.5Z" fill="#000"></path></svg>'},55339:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m8.745 8 6.1 6.1a.527.527 0 1 1-.745.746L8 8.746l-6.1 6.1a.527.527 0 1 1-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 0 1 .746-.746l6.1 6.1 6.1-6.1a.527.527 0 0 1 .746.746L8.746 8Z" fill="#000"></path></svg>'},59216:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.226 1.312c-.403-.404-1.044-.417-1.431-.03L2.49 8.587l-.48 2.674a.637.637 0 0 0 .73.73l2.673-.48 7.305-7.306c.387-.387.374-1.028-.03-1.431l-1.462-1.462Zm-8.113 9.575.32-1.781 4.991-4.992 1.462 1.462-4.992 4.991-1.781.32Zm7.473-6.012 1.402-1.4-1.462-1.463-1.401 1.402 1.461 1.461Z" fill="#000"></path><path d="M1.5 14a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13Z" fill="#000"></path></svg>'},34750:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 0a.5.5 0 0 0-.5.5V7H.5a.5.5 0 0 0 0 1H7v6.5a.5.5 0 0 0 1 0V8h6.5a.5.5 0 0 0 0-1H8V.5a.5.5 0 0 0-.5-.5Z" fill="#000"></path></svg>'},30224:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-1.27 4.936a6.5 6.5 0 1 1 .707-.707l4.136 4.137a.5.5 0 1 1-.707.707l-4.137-4.137Z" fill="#000"></path></svg>'},48891:e=>{"use strict";e.exports=i},51315:e=>{"use strict";e.exports=s},23137:e=>{"use strict";e.exports=o},96262:e=>{"use strict";e.exports=a},74758:e=>{"use strict";e.exports=n},34796:e=>{"use strict";e.exports=l},30726:e=>{"use strict";e.exports=r},338:e=>{"use strict";e.exports=c},39342:e=>{"use strict";e.exports=p},20663:e=>{"use strict";e.exports=d},77756:e=>{"use strict";e.exports=u},52785:e=>{"use strict";e.exports=m},59587:e=>{"use strict";e.exports=g}},t={};function h(i){var s=t[i];if(void 0!==s)return s.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,h),o.exports}h.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return h.d(t,{a:t}),t},h.d=(e,t)=>{for(var i in t)h.o(t,i)&&!h.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},h.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),h.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var v={};return(()=>{"use strict";h.r(v),h.d(v,{ByFieldSeriesX:()=>Li,ByFieldSeriesY:()=>Ai,CollapsableCheckbox:()=>he,CollapsableRadio:()=>ge,CollapsableToggle:()=>me,DefaultAddress:()=>zi,DefaultGeocodeLabel:()=>Gi,DefaultGeocodeURL:()=>Wi,DirectionSelector:()=>wi,JimuLayerViewSelector:()=>G,JimuMapViewSelector:()=>_,LinkSelector:()=>Ye,LinkSelectorContent:()=>ze,LinkSelectorSidePopper:()=>He,LinkSetting:()=>We,LinkSettingPopup:()=>Je,MAX_RECENT_SEARCHES:()=>Ti,MAX_SUGGESTION:()=>Ni,MapWidgetSelector:()=>F,MaxCategories:()=>Ei,MaxPieces:()=>Di,MaxSeries:()=>Ui,NavQuickStyleItem:()=>Ii,OpenTypes:()=>ve,OutStatisticFieldNameSplit:()=>Fi,OutputDsAddress:()=>$i,OutputDsObjectField:()=>Bi,PageTemplatePopper:()=>Ht,ProxySetting:()=>wt,ProxySettingPopup:()=>jt,QuickStylePopper:()=>Pi,RadioGroup:()=>Z,SearchDataSetting:()=>gs,SearchDataType:()=>Ri,SearchGeneralSetting:()=>fs,SearchServiceType:()=>Mi,SearchSuggestionSetting:()=>vs,SettingCollapse:()=>de,SettingLayout:()=>t,SettingRow:()=>P,SettingSection:()=>x,SidePopper:()=>_e,SizeMode:()=>Si,SizeModeSelector:()=>Ci,SortSetting:()=>mi,StylePicker:()=>H,TemplateSelector:()=>Zt,UnControlledSettingCollapse:()=>ue,WidgetListPopper:()=>zt,WidgetSelector:()=>R,_LinkSelector:()=>Xe,_LinkSelectorContent:()=>$e,_LinkSelectorSidePopper:()=>qe,_MapWidgetSelector:()=>U,_SidePopper:()=>Ve,changeCurrentDialog:()=>Ss,changeCurrentPage:()=>ws,handelDialogInfos:()=>bs,proxySettingUtils:()=>i});var e={};h.r(e),h.d(e,{JimuLayerViewSelector:()=>f,LinkSelectorContent:()=>p,ProxySetting:()=>d,ProxySettingPopup:()=>u,RadioGroup:()=>m,SettingCollapse:()=>c,SettingRow:()=>r,SettingSection:()=>l,SidePopper:()=>g,SortSetting:()=>a,StylePicker:()=>n,WidgetSelector:()=>o});var t={};h.r(t),h.d(t,{SettingRow:()=>P,SettingSection:()=>x});var i={};h.r(i),h.d(i,{deleteProxies:()=>pt,getCreateProxyUrl:()=>mt,getDeleteProxyUrl:()=>gt,getNeedProxyDataSources:()=>st,getNeedProxyItems:()=>it,getNeedProxyUtilities:()=>ot,getProxyJsonFromSourceUrl:()=>nt,getProxyRootUrl:()=>ut,isRegisteredApp:()=>rt,isSameProxy:()=>lt,needToConfigProxy:()=>ct});var s=h(48891);const o=e=>{const t=e.theme;return s.css`
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
  `},a=e=>{const t=e.theme.colors;return s.css`
    width:100%;
    &.single-row-item {
        .select-con {
            padding: ${s.polished.rem(10)} ${s.polished.rem(0)};
            .option-name-con {
                margin-bottom: 0;
                .close-con>span {
                    margin-left: ${s.polished.rem(10)};
                }
            }
        }
    }
    .padding-0 {
        padding: 0;
    }
    .jimu-tree-item {
        margin-bottom:${s.polished.rem(10)};
    }
    .jimu-tree-item__draggable {
        box-shadow: 0 0 0 2px ${s.polished.rgba(t.white,.3)};
    }
    .add-option-btn {
        & {
            color:${t.palette.primary[600]};
            margin-top:${s.polished.rem(10)};
            margin-bottom: ${s.polished.rem(17)};
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
            padding-right: ${s.polished.rem(10)};
            padding: ${s.polished.rem(8)} ${s.polished.rem(10)} ${s.polished.rem(10)} ${s.polished.rem(6)};
        }
        .option-name-con {
            & {
              display: flex;
              align-items: center;
              margin-bottom:${s.polished.rem(5)};
              width: 100%;
            }
            .option-name {
              font-size: 13px;
              line-height: 13px;
              color: ${t.palette.dark[800]};
              height: ${s.polished.rem(30)};
              line-height: ${s.polished.rem(25)};
              cursor: pointer;
              overflow: hidden;
              width: 0;
              padding-right: ${s.polished.rem(4)};
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
                line-height: ${s.polished.rem(30)};
                vertical-align: middle;
            }
            .input-wrapper {
                vertical-align: middle;
            }
            .option-name-icon-con {
                margin-left: ${s.polished.rem(5)};
                svg {
                    margin-top:  ${s.polished.rem(5)};
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
                    margin-top:  ${s.polished.rem(2)};
                }
            }
            .close-con>span {
                margin-right: ${s.polished.rem(10)};
                color: ${t.black};
                cursor: pointer;
            }
        }

        .select-down-con {
            & {
                display: flex;
                align-items: center;
                height: ${s.polished.rem(34)};
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


  `},n=e=>{const t=e.theme;return s.css`
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
  `},l=e=>{const t=e.theme;return s.css`
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
  `},r=e=>{const t=e.theme,i=e.flow,o=e.action;return s.css`
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
      margin-bottom: ${"wrap"===i?o?"0":t.sizes[2]:"0"};
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
  `},c=e=>{var t,i,o,a,n,l,r,c;const p=null==e?void 0:e.isOpen,d=null!==(t=null==e?void 0:e.type)&&void 0!==t?t:"default",u=e.theme,m=null===(a=null===(o=null===(i=null==u?void 0:u.colors)||void 0===i?void 0:i.palette)||void 0===o?void 0:o.light)||void 0===a?void 0:a[500],g=null===(r=null===(l=null===(n=null==u?void 0:u.colors)||void 0===n?void 0:n.palette)||void 0===l?void 0:l.light)||void 0===r?void 0:r[800],h=null===(c=null==u?void 0:u.colors)||void 0===c?void 0:c.primary;return"primary"!==d?s.css`
    .dividing-line {
      background-color: ${g};
    }
    `:s.css`
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
    `};function p(e){const t=e.theme,i=t&&t.colors&&t.colors.palette&&t.colors.palette.light[500]||"#ccc",o=t&&t.colors&&t.colors.primary||"blue",a=s.polished.rgba(i,.5);return window.jimuConfig.isInBuilder?s.css`
    .widget-builder-link-selector {
      .collapse-btn{
        margin-right: ${s.polished.rem(-16)};
      }
      .option-name{
        font-size: ${s.polished.rem(13)};
        color: ${t.colors.palette.dark[400]};
        font-weight:
      }
      .link-selector-list {
        .view-border{
          border-width: 1px;
          border-style: solid;
        }
        .link-selector-list-item {
          height: ${s.polished.rem(30)};
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
        padding-top: ${s.polished.rem(2)} !important;
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
        max-width: calc(100% - ${s.polished.rem(25)});
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
  `:s.css`
    .widget-builder-link-selector {
      .collapse-btn{
        position: absolute;
        right: ${s.polished.rem(-4)};
      }
      .option-name{
        font-size: ${s.polished.rem(13)};
        color: ${t.colors.palette.dark[400]};
        font-weight: 500;
      }
      .mb-12{
        margin-bottom: ${s.polished.rem(12)};
      }
      .item-common{
        background: ${t.colors.white};
      }
      .view-border{
        border: 1px solid ${t.colors.palette.light[400]};
      }
      .link-selector-list {

        .link-selector-list-item {
          height: ${s.polished.rem(30)};
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
        padding-top: ${s.polished.rem(2)} !important;
      }

      .itemselected {
        background-color: ${o} !important;
      }
      .link-setting-cursor-pointer{
        cursor: pointer;
      }
      .open-type-label{
        max-width: calc(100% - ${s.polished.rem(25)});
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
  `}function d(e){const t=e.theme;return s.css`
    color: ${t.colors.palette.dark[600]};
    .font-size-13{
      font-size: ${s.polished.rem(13)} !important;
    }
    .subscriber-warning{
      font-size: ${s.polished.rem(13)};
    }
    .secondary-title{
      font-size: ${s.polished.rem(14)};
    }
    .content-table{
      font-size: ${s.polished.rem(13)};
      color: ${t.colors.palette.dark[800]};
    }
    .content-table-header{
      height: ${s.polished.rem(32)};
      background-color: ${t.colors.palette.light[400]};
      display: block;
      line-height: ${s.polished.rem(30)};
    }
    .content-table-tr{
      height: ${s.polished.rem(39)};
      line-height: ${s.polished.rem(39)};
      border-bottom: 1px solid ${t.colors.palette.light[400]};
    }
    .col-4, .col-2{
      height: 100%;
    }
    .request-limit{
      margin-top: ${s.polished.rem(6)};
    }
    .request-interval{
      display: block;
      margin-top: ${s.polished.rem(-3)};
    }
  `}function u(e){const t=e.theme;return s.css`
    max-width: ${s.polished.rem(960)} !important;
    .header{
      font-size: ${s.polished.rem(16)};
      color: ${t.colors.palette.dark[600]};
    }
    .proxy-setting-container{
      width: ${s.polished.rem(960)};
      height: ${s.polished.rem(640)};
      border: 0;
      color: ${t.colors.palette.dark[600]};
    }
    .px-30{
      padding-right: ${s.polished.rem(30)};
      padding-left: ${s.polished.rem(30)};
    }
  `}const m=e=>{const t=e.theme,i=e.gutter;return s.css`
    margin-bottom: 0;
    label {
      display: inline-flex;
      align-items: center;
      margin-right: ${i||t.sizes[3]};
      .jimu-radio {
        margin-right: ${t.gutters[4]};
      }
    }
  `};function g(e){const t=e.theme;return s.css`
    width: ${s.polished.rem(260)};
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
  `}const f=e=>{const t=e.theme;return s.css`
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
  `};var b=h(23137),y=h(34796),w=h(30726);class S extends s.React.PureComponent{render(){const e=this.props,{className:t,style:i,title:o,role:a,children:n}=e,l=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(i[s[o]]=e[s[o]])}return i}(e,["className","style","title","role","children"]);return s.React.createElement(w.Container,{className:(0,s.classNames)(t,"jimu-widget-setting--section"),style:i,role:a,"aria-label":l["aria-label"]},o&&s.React.createElement(w.Row,{className:"jimu-widget-setting--section-header"},"string"==typeof o?s.React.createElement("h6",{className:"w-100 setting-text-level-1"},o):s.React.createElement("div",{className:"w-100 text-truncate setting-text-level-1"},o)),n)}}const x=(0,y.withStyles)(S,"SettingSection");var C=h(3273),I=h.n(C);const k=e=>{const t=window.SVG,{className:i}=e,o=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(i[s[o]]=e[s[o]])}return i}(e,["className"]),a=(0,s.classNames)("jimu-icon jimu-icon-component",i);return t?s.React.createElement(t,Object.assign({className:a,src:I()},o)):s.React.createElement("svg",Object.assign({className:a},o))};const j=e=>s.React.createElement("div",{className:"jimu-widget-setting--row-header mb-3"},e.children);class O extends s.React.PureComponent{constructor(){super(...arguments),this.onActionClick=e=>{"drilldown"===e&&this.props&&this.props.onDrillDown&&this.props.onDrillDown()}}render(){const e=this.props,{action:t,flow:i,truncateLabel:o,label:a,role:n,indented:l,className:r,level:c=3}=e,p=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(i[s[o]]=e[s[o]])}return i}(e,["action","flow","truncateLabel","label","role","indented","className","level"]),d="string"==typeof a?a:"",u=(0,s.classNames)(r,"jimu-widget-setting--row","form-group","align-items-center",{"form-inline":"wrap"!==i,"pl-4":l}),m=t?"span":"label",g=a&&s.React.createElement(m,{title:d,className:(0,s.classNames)(`jimu-widget-setting--row-label justify-content-start flex-grow-1 text-break setting-text-level-${c}`,{"w-100 mr-0":"wrap"===i,"text-truncate":o})},a);return s.React.createElement(w.Row,{className:u,role:n,"aria-label":p["aria-label"]},"wrap"===i&&t?s.React.createElement(j,null,"drilldown"===t?s.React.createElement(w.Button,{size:"sm",type:"tertiary",onClick:()=>this.onActionClick("drilldown")},g,s.React.createElement(k,{className:"right-icon"})):void 0):g,this.props.children)}}const P=(0,y.withStyles)(O,"SettingRow");var N=function(e,t,i,s){return new(i||(i=Promise))((function(o,a){function n(e){try{r(s.next(e))}catch(e){a(e)}}function l(e){try{r(s.throw(e))}catch(e){a(e)}}function r(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(n,l)}r((s=s.apply(e,t||[])).next())}))};class T extends s.React.PureComponent{constructor(e){super(e),this.onSelectWidget=e=>{this.setState({currentWidget:e})},this.getListItemJSX=e=>(0,s.jsx)(w.Card,{className:(0,s.classNames)("widget-card-item",{"widget-card-selected":this.state.currentWidget&&0===this.state.currentWidget.indexOf(e.uri)}),key:e.title,onClick:()=>this.onSelectWidget(e.uri)},(0,s.jsx)("div",{className:"widget-card-image bg-light-300"},(0,s.jsx)("div",null,(0,s.jsx)(w.CardImg,{top:!0,width:"100%",src:e.image.src,alt:e.image.alt}))),(0,s.jsx)(w.CardBody,{className:"widget-card-content"},(0,s.jsx)("span",{className:"text-capitalize",title:e.title},e.title))),this.state={currentWidget:null,listInfo:[]}}componentDidMount(){this.getListInfo().then((e=>{this.setState({listInfo:e.listInfo})}))}getListInfo(){return N(this,void 0,void 0,(function*(){return yield fetch(`${s.urlUtils.getAbsoluteRootUrl()}widgets/widgets-info.json`).then((e=>N(this,void 0,void 0,(function*(){return yield e.json()})))).then((e=>({listInfo:e.map((e=>{const t={title:"",uri:"",image:{src:""}};return t.title=e.label,t.uri=e.path,t.image.src="../"+e.icon,t}))})))}))}render(){return(0,s.jsx)("div",{className:(0,s.classNames)("w-100 h-100",{[this.props.className]:!!this.props.className})},(0,s.jsx)("div",{className:"component-choose-widget-popup"},(0,s.jsx)(w.Modal,{isOpen:!0,className:"component-choose-widget-popup-modal"},(0,s.jsx)(w.ModalHeader,{className:"component-choose-widget-clear-border component-choose-widget-modal-header"},this.props.title,(0,s.jsx)("span",{className:"choose-widget-popup-close",onClick:this.props.onCancel})),(0,s.jsx)(w.ModalBody,{className:"component-choose-widget-clear-border component-choose-widget-modal-body"},this.state.listInfo.length>0?this.state.listInfo.map((e=>this.getListItemJSX(e))):"Loading..."),(0,s.jsx)(w.ModalFooter,{className:"component-choose-widget-clear-border component-choose-widget-modal-footer"},(0,s.jsx)(w.Button,{onClick:()=>this.props.onOK(this.state.currentWidget)},"OK"),(0,s.jsx)(w.Button,{onClick:this.props.onCancel},"Cancel")))))}}const R=(0,y.withStyles)(T,"WidgetSelector");var M=h(74758);const L={label:"divider",divider:!0},A=(e,t)=>{var i,s;let o=[],a=[];for(let i=1;i<t.length;i++)if("dialogs"===t[i].type){e=i;break}return 1===e&&"dialogs"===(null===(i=t[1])||void 0===i?void 0:i.type)?a=t.slice(1):1===e&&"pages"===(null===(s=t[1])||void 0===s?void 0:s.type)?o=t.slice(1):(o=t.slice(1,e),a=t.slice(e)),{pageList:o,dialogList:a}};var E;!function(e){e.Page="pages",e.Dialog="dialogs",e.Widget="widgets"}(E||(E={}));const D=(e,t,i)=>e.sort(((e,s)=>{const o=i===E.Widget?t[i][e].label:t[i][e.id].label,a=i===E.Widget?t[i][s].label:t[i][s.id].label;return o.localeCompare(a,null===window||void 0===window?void 0:window.locale,{numeric:!0,sensitivity:"base"})})),U=e=>{const t=w.hooks.useTranslate(),i={id:"none",label:t("none")},o=s.ReactRedux.useSelector((e=>{var t,i;return(null===(t=null===window||void 0===window?void 0:window.jimuConfig)||void 0===t?void 0:t.isBuilder)?null===(i=e.appStateInBuilder)||void 0===i?void 0:i.appConfig:e.appConfig})),a=s.ReactRedux.useSelector((e=>{var t;return null===(t=e.appStateInBuilder)||void 0===t?void 0:t.browserSizeMode})),n=s.ReactRedux.useSelector((e=>{var t;return null===(t=e.appStateInBuilder)||void 0===t?void 0:t.appRuntimeInfo.currentPageId})),l=s.ReactRedux.useSelector((e=>{var t;return null===(t=e.appStateInBuilder)||void 0===t?void 0:t.appRuntimeInfo.currentDialogId})),r=l?s.ContainerType.Dialog:s.ContainerType.Page,c=l||n,p=s.React.useMemo((()=>((e,t,i,o)=>{const a=[];if(e[0].maps.length>0){a.push(L);const n={header:!0,label:i===s.ContainerType.Dialog?o("currentWindow"):o("currentPage")};a.push(n),D(e[0].maps,t,E.Widget).forEach((e=>{const n={id:e,label:t.widgets[e].label,headerLabel:i===s.ContainerType.Dialog?o("currentWindow"):o("currentPage")};a.push(n)}))}const n=A(1,e);let l=!1;const r=D(n.pageList,t,E.Page);for(let e=0;e<n.pageList.length;e++)if(n.pageList[e].maps.length>0){l||(a.push(L),l=!0);const i={header:!0,label:t.pages[r[e].id].label};a.push(i),D(r[e].maps,t,E.Widget).forEach((i=>{const s={id:i,label:t.widgets[i].label,headerLabel:t.pages[r[e].id].label};a.push(s)}))}if(n.dialogList){let e=!1;const i=D(n.dialogList,t,E.Dialog);for(let s=0;s<n.dialogList.length;s++)if(n.dialogList[s].maps.length>0){e||(a.push(L),e=!0);const o={header:!0,label:t.dialogs[i[s].id].label};a.push(o),D(i[s].maps,t,E.Widget).forEach((e=>{const o={id:e,label:t.widgets[e].label,headerLabel:t.dialogs[i[s].id].label};a.push(o)}))}}return a})(M.searchUtils.getMapWidgets(o,a,r,c),o,r,t)),[o,a,r,c,t]),d=(()=>{var t;if(!e.useMapWidgetIds||0===(null===(t=e.useMapWidgetIds)||void 0===t?void 0:t.length))return null;const i=e.useMapWidgetIds[0];return p.find((e=>e.id===i))||null})();return s.React.createElement("div",{className:"w-100"},s.React.createElement("div",{className:"component-map-selector"},s.React.createElement(w.Select,{size:"sm",value:d?d.id:i.id,onChange:t=>{const s=t.target.value,o=s===i.id?[]:[s];e.onSelect&&e.onSelect(o)},className:""},[i].concat(p).map(((e,t)=>s.React.createElement(w.Option,{header:e.header,divider:e.divider,value:e.id,key:t},!e.header&&s.React.createElement("div",{className:"sr-only"},e.headerLabel),e.label))))))},F=U;class B extends s.React.PureComponent{constructor(){super(...arguments),this.formatMessage=(e,t)=>{const i=Object.assign({},w.defaultMessages);return this.props.intl.formatMessage({id:e,defaultMessage:i[e]},t)}}getContent(){var e,t,i,o;const a=[];for(let e=0;e<this.props.fromRootDsIds.length;e++)a.push(this.props.fromRootDsIds[e]);const n=(null===(e=null===window||void 0===window?void 0:window.jimuConfig)||void 0===e?void 0:e.isBuilder)?null===(i=null===(t=(0,s.getAppStore)().getState())||void 0===t?void 0:t.appStateInBuilder)||void 0===i?void 0:i.appConfig:null===(o=(0,s.getAppStore)().getState())||void 0===o?void 0:o.appConfig;return s.React.createElement("div",{className:"w-100"},a.map(((e,t)=>{var i;const o=s.DataSourceManager.getInstance().getDataSource(e),a=null===(i=n.dataSources[e])||void 0===i?void 0:i.sourceLabel,l=(e=>{var t,i,o;return(null===(o=null===(i=null===(t=(0,s.getAppStore)().getState().appStateInBuilder)||void 0===t?void 0:t.dataSourcesInfo)||void 0===i?void 0:i[e])||void 0===o?void 0:o.instanceStatus)===s.DataSourceStatus.CreateError})(e),r=null==o?void 0:o.getChildDataSources();return s.React.createElement("div",{key:t},s.React.createElement("div",{className:"text-dark-600 pl-2 pr-2 d-flex align-items-center justify-content-between",style:{fontSize:"14px"}},a,l&&s.React.createElement(w.Alert,{buttonType:"tertiary",form:"tooltip",size:"small",type:"error",text:this.formatMessage("dataSourceCreateError")})),null==r?void 0:r.map(((t,i)=>s.React.createElement("div",{key:i,className:"mt-1 mb-1"},s.React.createElement("div",{className:(0,s.classNames)("layerviewselector-ds-item pl-2 pr-2",{"layerviewselector-ds-item-selected":this.props.selectedDsIds&&this.props.selectedDsIds.includes(t.id)}),title:t.getLabel(),onClick:()=>{this.props.onSelect&&this.props.onSelect({rootDataSourceId:e,dataSourceId:t.id})}},null==t?void 0:t.getLabel())))))})))}render(){return this.props.fromRootDsIds&&0!==this.props.fromRootDsIds.length?s.React.createElement("div",{className:"w-100"},this.getContent()):null}}const $=(0,s.injectIntl)(B),z=s.css`
& {
  .ds-selector > span {
    display: none;
  }
}
`;class W extends s.React.PureComponent{constructor(e){super(e),this.toggleList=e=>{this.setState({listOpen:!this.state.listOpen})},this.onResize=e=>{this.setState({width:e})},this.handleChooseLayer=e=>{if(this.props.onSelect)if(e){const t=s.DataSourceManager.getInstance().getDataSource(e.rootDataSourceId),i=s.DataSourceManager.getInstance().getDataSource(e.dataSourceId).id,o=t.getJimuChildId(i)[0];this.props.onSelect((0,s.Immutable)({jimuMapViewId:`${this.props.useMapWidgetIds[0]}-${e.rootDataSourceId}`,jimuLayerId:o,dataSourceId:e&&e.dataSourceId,rootDataSourceId:e&&e.rootDataSourceId}))}else this.props.onSelect((0,s.Immutable)({}));this.setState({listOpen:!1})},this.handleClickNone=()=>{this.props.onSelect&&this.props.onSelect((0,s.Immutable)({})),this.setState({listOpen:!1})},this.getTitle=()=>this.props.jimuLayerViewInfo&&this.props.useMapWidgetIds&&this.props.useMapWidgetIds[0]&&this.props.jimuLayerViewInfo.dataSourceId?(0,s.jsx)(s.DataSourceComponent,{useDataSource:(0,s.Immutable)({dataSourceId:this.props.jimuLayerViewInfo.dataSourceId,mainDataSourceId:this.props.jimuLayerViewInfo.dataSourceId,rootDataSourceId:this.props.jimuLayerViewInfo.rootDataSourceId})},((e,t,i)=>null==e?void 0:e.getLabel())):this.getNoneString(),this.getContent=()=>{const e=this.props.useMapWidgetIds&&this.props.useMapWidgetIds[0],t=(0,s.getAppStore)().getState().appStateInBuilder.appConfig.widgets[e];return t&&t.useDataSources&&t.useDataSources[0]?(0,s.jsx)("div",{className:"w-100 mt-1 mb-2"},(0,s.jsx)("div",{onClick:()=>{this.handleClickNone()}},(0,s.jsx)("div",{className:"layerviewselector-ds-item pl-2 pr-2"},this.getNoneString())),(0,s.jsx)("div",{className:"w-100 mt-1 mb-1"},(0,s.jsx)("div",{className:"w-100 border border-bottom-0 border-right-0 border-left-0"})),(0,s.jsx)("div",{className:"ds-selector"},(0,s.jsx)(s.MultipleDataSourceComponent,{useDataSources:t.useDataSources},((e,t)=>{const i=(0,s.Immutable)(Object.keys(e)),o=[];return this.props.jimuLayerViewInfo&&this.props.jimuLayerViewInfo.dataSourceId&&o.push(this.props.jimuLayerViewInfo.dataSourceId),(0,s.jsx)($,{fromRootDsIds:i,onSelect:e=>{this.handleChooseLayer(e)},selectedDsIds:(0,s.Immutable)(o)})})))):this.getEmptyContent()},this.getNoneString=()=>this.props.intl.formatMessage({id:"none",defaultMessage:"None"}),this.getEmptyContent=()=>(0,s.jsx)("div",{className:"w-100 mt-1 mb-2"},(0,s.jsx)("div",{className:"layerviewselector-ds-item pl-2 pr-2",onClick:()=>{this.handleClickNone()}},this.getNoneString())),this.state={listOpen:!1,width:0}}render(){return(0,s.jsx)("div",{className:(0,s.classNames)("w-100",{[this.props.className]:!!this.props.className})},(0,s.jsx)(w.Dropdown,{size:"sm",toggle:e=>{this.toggleList(e)},isOpen:this.state.listOpen,className:"w-100"},(0,s.jsx)(w.DropdownButton,{size:"sm",type:"tertiary",className:(0,s.classNames)("w-100 d-flex flex-column align-items-center toollist-item","justify-content-between toollist-item-click layerviewselector-input")},(0,s.jsx)("div",{className:"w-100 d-flex justify-content-between align-items-center"},(0,s.jsx)("div",{className:"layerviewselector-input-text ml-2"},this.getTitle()))),(0,s.jsx)(w.DropdownMenu,{className:(0,s.classNames)("ml-0 mr-0 mb-0 mt-1 p-0",{[this.props.className]:!!this.props.className}),css:z},(0,s.jsx)("div",{className:"w-100 h-100 layerviewselector-bg"},(0,s.jsx)("div",{style:{width:`${this.state.width}px`}},this.getContent())))),(0,s.jsx)(s.ReactResizeDetector,{handleWidth:!0,onResize:this.onResize}))}}const G=(0,s.injectIntl)((0,y.withStyles)(W,"JimuLayerViewSelector")),V=e=>{if(!e)return"";const t=s.DataSourceManager.getInstance().getDataSource(e);return(null==t?void 0:t.getLabel())||e},_=e=>{const t=w.hooks.useTranslate(),i={id:"none",label:t("none")},o=s.ReactRedux.useSelector((e=>{var t,i;return(null===(t=null===window||void 0===window?void 0:window.jimuConfig)||void 0===t?void 0:t.isBuilder)?null===(i=e.appStateInBuilder)||void 0===i?void 0:i.appConfig:e.appConfig})),a=s.ReactRedux.useSelector((e=>{var t;return null===(t=e.appStateInBuilder)||void 0===t?void 0:t.browserSizeMode})),n=s.ReactRedux.useSelector((e=>{var t;return null===(t=e.appStateInBuilder)||void 0===t?void 0:t.appRuntimeInfo.currentPageId})),l=s.ReactRedux.useSelector((e=>{var t;return null===(t=e.appStateInBuilder)||void 0===t?void 0:t.appRuntimeInfo.currentDialogId})),r=l?s.ContainerType.Dialog:s.ContainerType.Page,c=l||n,p=s.React.useMemo((()=>{const e=M.searchUtils.getMapWidgets(o,a,r,c);return(()=>{const i=[],a=e[0].maps.length>0;let n=!1;a&&D(e[0].maps,o,E.Widget).forEach(((e,a)=>{if(o.widgets[e].useDataSources&&o.widgets[e].useDataSources.length>0){n||(i.push(L),n=!0);const a={header:!0,label:`${r===s.ContainerType.Dialog?t("currentWindow"):t("currentPage")} | ${o.widgets[e].label}`};i.push(a),o.widgets[e].useDataSources.forEach((t=>{const s={id:`${e}-${t.dataSourceId}`,label:V(t.dataSourceId)};i.push(s)}))}}));const l=A(1,e);let c=!1;const p=D(l.pageList,o,E.Page);for(let e=0;e<l.pageList.length;e++){const t=D(p[e].maps,o,E.Widget);for(let s=0;s<t.length;s++)if(o.widgets[t[s]].useDataSources&&o.widgets[t[s]].useDataSources.length>0){c||(i.push(L),c=!0);const a={header:!0,label:`${o.pages[p[e].id].label} | ${o.widgets[t[s]].label}`};i.push(a),o.widgets[t[s]].useDataSources.forEach((e=>{const o={id:`${t[s]}-${e.dataSourceId}`,label:V(e.dataSourceId)};i.push(o)}))}}if(l.dialogList){let e=!1;const t=D(l.dialogList,o,E.Dialog);for(let s=0;s<l.dialogList.length;s++){const a=D(t[s].maps,o,E.Widget);for(let n=0;n<a.length;n++)if(o.widgets[a[n]].useDataSources&&o.widgets[a[n]].useDataSources.length>0){e||(i.push(L),e=!0);const l={header:!0,label:`${o.dialogs[t[s].id].label} | ${o.widgets[a[n]].label}`};i.push(l),o.widgets[a[n]].useDataSources.forEach((e=>{const t={id:`${a[n]}-${e.dataSourceId}`,label:V(e.dataSourceId)};i.push(t)}))}}}return i})()}),[o,a,r,c,t]),d=(()=>{var t;if(!e.useMapViewIds||0===(null===(t=e.useMapViewIds)||void 0===t?void 0:t.length))return null;const i=e.useMapViewIds[0];return p.find((e=>e.id===i))||null})();return s.React.createElement("div",{className:"w-100"},s.React.createElement("div",{className:"component-map-view-selector"},s.React.createElement(w.Select,{size:"sm",onChange:t=>{var s;const o=t.target.value,a=o===i.id?[]:[o];null===(s=e.onChange)||void 0===s||s.call(e,a)},value:d?d.id:i.id},[i].concat(p).map(((e,t)=>s.React.createElement(w.Option,{header:e.header,divider:e.divider,value:e.id,key:t},e.label))))))};class q extends s.React.PureComponent{constructor(e){super(e),this.onStyleClick=e=>{this.state.selectedValue!==e&&(this.setState({selectedValue:e}),this.props.onChange&&this.props.onChange(e))},this.state={selectedValue:this.props.value}}componentDidUpdate(e,t){e.value!==this.props.value&&this.setState({selectedValue:this.props.value})}render(){const e=this.props.styles;return s.React.createElement("div",{className:(0,s.classNames)("widget-setting--stylepicker w-100",{small:"small"===this.props.size})},Object.keys(e).map(((t,i)=>s.React.createElement("div",{key:t,role:"button",className:(0,s.classNames)("widget-setting--stylepicker-item",{active:t===this.state.selectedValue,"full-width":"full"===e[t].size}),style:{backgroundImage:`url(${e[t].thumbnail})`},onClick:()=>this.onStyleClick(t)}))))}}const H=(0,y.withStyles)(q,"StylePicker");class J extends s.React.PureComponent{constructor(e){super(e),this.state={value:this.props.value},this.onRadioButtonChange=e=>{const t=e.target.value;this.state.value!==t&&(this.setState({value:t}),this.props.onChange&&this.props.onChange(t))},J.count++,this.inputName=`setting-radiogroup-${J.count}`}render(){const e=this.props,{options:t,className:i}=e,o=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(i[s[o]]=e[s[o]])}return i}(e,["options","className"]);return s.React.createElement(w.FormGroup,Object.assign({},o,{onChange:this.onRadioButtonChange,className:`setting--button-group ${i}`}),t.map((e=>s.React.createElement(w.Label,{key:e.value},s.React.createElement(w.Radio,{value:e.value,name:this.inputName,checked:this.state.value===e.value}),e.content))))}}J.count=0;const Z=(0,y.withStyles)(J,"RadioGroup");var K=h(96009),Q=h.n(K),X=h(59788),Y=h.n(X);const ee=y.styled.div((({isOpen:e,type:t})=>`\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    border-top: ${"primary"===t?"2px":"0px"} solid ${e?"var(--primary)":"var(--light-500)"};\n    background-color: ${"primary"===t?"var(--light-500)":"unset"};\n    .form-label {\n      width: calc(100% - 30px);\n    }\n  `)),te=e=>{const{className:t,type:i,level:o,isOpen:a,children:n}=e;return s.React.createElement(ee,{className:(0,s.classNames)(`collapse-header setting-text-level-${o}`,t,{"px-1":"primary"===i}),type:i,isOpen:a},n)},ie=y.styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  width: 100%;
  max-width: 100%;
  &.padded {
    max-width: calc(100% - 30px);
  }
`,se=e=>{const{className:t,leftIcon:i,label:o,padded:a,wrap:n=!1}=e,l="string"==typeof o;return s.React.createElement(ie,{className:(0,s.classNames)("collapse-label",t,{padded:a})},i&&s.React.createElement(w.Icon,{className:"mr-2",icon:i}),!l&&o,l&&s.React.createElement("div",{title:o,className:(0,s.classNames)("title",{"text-truncate":!n})},o))},oe=e=>{const{disabled:t,activated:i,icon:o=Y(),activatedIcon:a=Q(),onActivationChange:n}=e,l=i?a:o,r=w.hooks.useTranslate()(i?"collapse":"expand");return s.React.createElement(w.Button,{disabled:t,size:"sm",type:"tertiary",icon:!0,title:r,"aria-label":r,className:"pr-0",onClick:()=>{null==n||n(!i)}},s.React.createElement(w.Icon,{icon:l}))},ae=e=>{const{type:t,level:i,isOpen:o,leftIcon:a,label:n,onRequestOpen:l,onRequestClose:r,rightIcon:c=Y(),rightActiveIcon:p=Q(),wrapLabel:d,disabled:u}=e;return s.React.createElement(te,{className:"collapse-normal-header",type:t,level:i,isOpen:o},s.React.createElement(s.React.Fragment,null,s.React.createElement(se,{wrap:d,leftIcon:a,label:n,padded:!0}),s.React.createElement(oe,{disabled:u,activated:o,icon:c,activatedIcon:p,onActivationChange:e=>{e?l&&l():r&&r()}})))},ne=e=>{const{type:t,level:i,isOpen:o,leftIcon:a,label:n,onRequestOpen:l,onRequestClose:r,wrapLabel:c,disabled:p}=e,d=w.hooks.useTranslate()(o?"collapse":"expand");return s.React.createElement(te,{className:"collapse-toggle-header",type:t,level:i,isOpen:o},s.React.createElement(se,{wrap:c,leftIcon:a,label:n,padded:!0}),s.React.createElement(w.Switch,{checked:o,disabled:p,onChange:(e,t)=>{t?l&&l():r&&r()},title:d,"aria-label":d}))},le=e=>{const{type:t,level:i,isOpen:o,label:a,rightIcon:n,rightActiveIcon:l,onRequestOpen:r,onRequestClose:c,name:p,checked:d=o,onCheckedChange:u,disableActionForUnchecked:m=!1,wrapLabel:g}=e;return s.React.createElement(te,{className:"collapse-radio-header",type:t,level:i,isOpen:o},s.React.createElement(w.Label,{centric:!0,check:!0,className:"d-flex align-items-center form-label"},s.React.createElement(w.Radio,{name:p,className:"mr-2",checked:d,"aria-label":a,onChange:(e,t)=>{null==u||u(t)}}),s.React.createElement(se,{wrap:g,label:a,padded:!0})),s.React.createElement(oe,{disabled:m&&!d,activated:o,icon:n,activatedIcon:l,onActivationChange:e=>{e?r&&r():c&&c()}}))},re=e=>{const{type:t,level:i,isOpen:o,label:a,rightIcon:n=Y(),rightActiveIcon:l=Q(),onRequestOpen:r,onRequestClose:c,name:p,checked:d=o,onCheckedChange:u,disableActionForUnchecked:m=!1,wrapLabel:g}=e;return s.React.createElement(te,{className:"collapse-checkbox-header",type:t,level:i,isOpen:o},s.React.createElement(w.Label,{centric:!0,check:!0,className:"d-flex align-items-center form-label"},s.React.createElement(w.Checkbox,{name:p,className:"mr-2",checked:d,"aria-label":a,onChange:(e,t)=>{null==u||u(t)}}),s.React.createElement(se,{wrap:g,label:a,padded:!0})),s.React.createElement(oe,{disabled:m&&!d,activated:o,icon:n,activatedIcon:l,onActivationChange:e=>{e?r&&r():c&&c()}}))};const ce=y.styled.div`
    .dividing-line {
      background-color: var(--light-800);
      width: 100%;
      height: 1px;
    }
  `,pe=e=>{const{className:t,bottomLine:i=!1,isOpen:o,children:a,header:n,"aria-label":l,role:r="group"}=e,c=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(i[s[o]]=e[s[o]])}return i}(e,["className","bottomLine","isOpen","children","header","aria-label","role"]);return s.React.createElement(ce,{className:(0,s.classNames)("setting-collapse w-100",t),"aria-label":l,role:r},n,s.React.createElement(w.Collapse,Object.assign({},c,{isOpen:o}),o&&s.React.createElement(s.React.Fragment,null,a,i&&s.React.createElement("div",{className:"dividing-line mt-3"}))))};const de=e=>{const{type:t="default",className:i,leftIcon:o,label:a,onRequestOpen:n,onRequestClose:l,rightIcon:r=Y(),rightActiveIcon:c=Q(),level:p=0,defaultIsOpen:d,isOpen:u,wrapLabel:m,disabled:g}=e,h=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(i[s[o]]=e[s[o]])}return i}(e,["type","className","leftIcon","label","onRequestOpen","onRequestClose","rightIcon","rightActiveIcon","level","defaultIsOpen","isOpen","wrapLabel","disabled"]),[v,f]=w.hooks.useControlled({controlled:u,default:u||d}),b=s.React.createElement(ae,{type:t,isOpen:v,level:p,leftIcon:o,wrapLabel:m,label:a,disabled:g,rightIcon:r,rightActiveIcon:c,onRequestOpen:()=>{f(!0),null==n||n()},onRequestClose:()=>{f(!1),null==l||l()}});return s.React.createElement(pe,Object.assign({className:(0,s.classNames)("setting-collapse w-100",i),header:b,isOpen:v},h))},ue=de;const me=e=>{const{type:t="default",className:i,leftIcon:o,label:a,onRequestOpen:n,onRequestClose:l,level:r=0,defaultIsOpen:c,isOpen:p,wrapLabel:d,disabled:u}=e,m=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(i[s[o]]=e[s[o]])}return i}(e,["type","className","leftIcon","label","onRequestOpen","onRequestClose","level","defaultIsOpen","isOpen","wrapLabel","disabled"]),[g,h]=w.hooks.useControlled({controlled:p,default:p||c}),v=s.React.createElement(ne,{type:t,isOpen:g,level:r,leftIcon:o,wrapLabel:d,disabled:u,label:a,onRequestOpen:()=>{h(!0),null==n||n()},onRequestClose:()=>{h(!1),null==l||l()}});return s.React.createElement(pe,Object.assign({className:(0,s.classNames)("collapse-toggle w-100",i),header:v,isOpen:g},m))};const ge=e=>{const{type:t="default",className:i,leftIcon:o,label:a,defaultIsOpen:n,isOpen:l,onRequestOpen:r,onRequestClose:c,rightIcon:p,rightActiveIcon:d,level:u=0,name:m,checked:g,onCheckedChange:h,disableActionForUnchecked:v,wrapLabel:f}=e,b=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(i[s[o]]=e[s[o]])}return i}(e,["type","className","leftIcon","label","defaultIsOpen","isOpen","onRequestOpen","onRequestClose","rightIcon","rightActiveIcon","level","name","checked","onCheckedChange","disableActionForUnchecked","wrapLabel"]),[y,S]=w.hooks.useControlled({controlled:l,default:l||n}),x=s.React.createElement(le,{type:t,isOpen:y,level:u,label:a,wrapLabel:f,rightIcon:p,rightActiveIcon:d,onRequestOpen:()=>{S(!0),null==r||r()},onRequestClose:()=>{S(!1),null==c||c()},name:m,checked:g,disableActionForUnchecked:v,onCheckedChange:h});return s.React.createElement(pe,Object.assign({className:(0,s.classNames)("collapse-radio w-100",i),header:x,isOpen:y},b))};const he=e=>{const{type:t="default",className:i,leftIcon:o,label:a,defaultIsOpen:n,isOpen:l,onRequestOpen:r,onRequestClose:c,rightIcon:p,rightActiveIcon:d,level:u=0,defaultChecked:m,name:g,checked:h,openForCheck:v=!1,closeForUncheck:f,onCheckedChange:b,disableActionForUnchecked:y,wrapLabel:S}=e,x=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(i[s[o]]=e[s[o]])}return i}(e,["type","className","leftIcon","label","defaultIsOpen","isOpen","onRequestOpen","onRequestClose","rightIcon","rightActiveIcon","level","defaultChecked","name","checked","openForCheck","closeForUncheck","onCheckedChange","disableActionForUnchecked","wrapLabel"]),[C,I]=w.hooks.useControlled({controlled:l,default:l||n}),[k,j]=w.hooks.useControlled({controlled:h,default:h||m}),O=()=>{I(!0),null==r||r()},P=()=>{I(!1),null==c||c()},N=s.React.createElement(re,{type:t,isOpen:C,level:u,wrapLabel:S,label:a,rightIcon:p,rightActiveIcon:d,onRequestOpen:O,onRequestClose:P,name:g,checked:k,disableActionForUnchecked:y,onCheckedChange:e=>{e?v&&O():f&&P(),j(e),b(e)}});return s.React.createElement(pe,Object.assign({className:(0,s.classNames)("collapse-checkbox w-100",i),header:N,isOpen:C},x))};var ve;!function(e){e.CurrentWindow="_self",e.TopWindow="_top",e.NewWindow="_blank"}(ve||(ve={}));class fe extends s.React.PureComponent{constructor(){super(...arguments),this.itemOnClick=e=>{this.props.onClick(e),this.setState({selectedItemName:e.name})}}getListContent(){return this.props.datas.map(((e,t)=>s.React.createElement("div",{onClick:()=>this.itemOnClick(e),key:t,className:(0,s.classNames)("link-selector-list-item btn w-100 border text-left border-bottom-0 rounded-0 text-truncate",{itemselected:this.props.linkParam.value===e.id})},e.name)))}render(){const e=this.props.datas.find((e=>this.props.linkParam.value===e.id)),t=e&&e.id;return s.React.createElement("div",{className:"link-selector-list w-100"},s.React.createElement(w.Select,{value:t,className:"w-100",onChange:e=>this.itemOnClick(this.props.datas.find((t=>t.id===e.target.value))),"aria-label":this.props["aria-label"],size:"sm"},this.props.datas.map(((e,t)=>s.React.createElement("option",{key:t,value:e.id},e.name)))))}}function be(e,t){var i,o;const a=null===(i=null==t?void 0:t.pages)||void 0===i?void 0:i[e];if((null==a?void 0:a.type)===s.PageType.Normal){const i=M.searchUtils.getContentsInContainer(t,{type:s.ContainerType.Page,id:e},s.LayoutItemType.Section,M.utils.getCurrentSizeMode());let n=[],l=[];return a.header&&(n=M.searchUtils.getContentsInContainer(t,{type:s.ContainerType.Header,id:"header"},s.LayoutItemType.Section,M.utils.getCurrentSizeMode())),a.footer&&(l=M.searchUtils.getContentsInContainer(t,{type:s.ContainerType.Footer,id:"footer"},s.LayoutItemType.Section,M.utils.getCurrentSizeMode())),null===(o=n.concat(i,l))||void 0===o?void 0:o.sort(((e,i)=>{var s,o,a,n,l;return null===(a=null===(o=null===(s=null==t?void 0:t.sections)||void 0===s?void 0:s[e])||void 0===o?void 0:o.label)||void 0===a?void 0:a.localeCompare(null===(l=null===(n=null==t?void 0:t.sections)||void 0===n?void 0:n[i])||void 0===l?void 0:l.label,null===window||void 0===window?void 0:window.locale,{numeric:!0,sensitivity:"base"})}))}return[]}function ye(e,t){var i;return(null===(i=null==t?void 0:t.dialogs)||void 0===i?void 0:i[e])?M.searchUtils.getContentsInContainer(t,{type:s.ContainerType.Dialog,id:e},s.LayoutItemType.Section,M.utils.getCurrentSizeMode()):[]}function we(e,t){if(!e)return[];const i=Se(e,t);if(i&&i.length>0){let e=[],s=[];return i.forEach((i=>{e=e.concat(xe(i,t).map((e=>e.id)))})),e.length>0&&e.forEach((e=>{s=s.concat(we(e,t))})),e.concat(s)}return[]}function Se(e,t){return M.searchUtils.getContentsInContainer(t,{type:s.ContainerType.View,id:e},s.LayoutItemType.Section,M.utils.getCurrentSizeMode())||[]}function xe(e,t){const i=t.sections[e].views,s=[];for(let e=0;e<i.length;e++)s.push({id:i[e],label:t.views[i[e]].label});return s.sort(((e,t)=>{var i;return null===(i=e.label)||void 0===i?void 0:i.localeCompare(t.label,null===window||void 0===window?void 0:window.locale,{numeric:!0,sensitivity:"base"})}))}function Ce(e,t){const i=null==e?void 0:e.pages,o={id:s.CONSTANTS.CURRENT_PAGE,name:t.formatMessage({id:"currentPage",defaultMessage:w.defaultMessages.currentPage})},a=i&&Object.keys(i).filter((e=>i[e].type===s.PageType.Normal)).sort(((e,t)=>{var s;return null===(s=i[e].label)||void 0===s?void 0:s.localeCompare(i[t].label,null===window||void 0===window?void 0:window.locale,{numeric:!0,sensitivity:"base"})}));let n=[o];return a&&(n=n.concat(a.map((e=>({id:e,name:i[e].label}))))),n}function Ie(e){const t=null==e?void 0:e.dialogs,i=t&&Object.values(t).filter((e=>(null==e?void 0:e.mode)===s.DialogMode.Fixed))||[],o=t&&Object.values(t).filter((e=>(null==e?void 0:e.mode)===s.DialogMode.Anchored))||[],a=i.concat(o).sort(((e,t)=>{var i;return null===(i=e.label)||void 0===i?void 0:i.localeCompare(t.label,null===window||void 0===window?void 0:window.locale,{numeric:!0,sensitivity:"base"})})).map((e=>e.id));return a&&a.filter((e=>!t[e].isSplash)).map((e=>({id:e,name:t[e].label})))}function ke(e){var t;return je(e.linkType===s.LinkType.View?null===(t=e.value)||void 0===t?void 0:t.split(",")[0]:null)}function je(e){return"string"==typeof e&&e.includes("dialog_")}const Oe=["https","mailto","tel","sms","ftp"];class Pe extends s.React.PureComponent{constructor(){super(...arguments),this.getInitLinkParam=()=>{const e=this.props.appConfig.pageStructure;if(!e||e.length<1)return(0,s.Immutable)({value:""});if(this.props.originLinkParam.linkType!==s.LinkType.Page){const e=Ce(this.props.appConfig,this.props.intl);return(0,s.Immutable)({linkType:s.LinkType.Page,value:e&&e.some((e=>"default"===e.id))?"default":e&&e[0]&&e[0].id,openType:!this.props.openTypes||this.props.openTypes.includes(ve.CurrentWindow)?ve.CurrentWindow:this.props.openTypes[0]})}return this.props.originLinkParam},this.setLinkParam=e=>{let t=this.props.linkParam;t=t.set("value",e.id),this.props.onLinkParamChange(t)}}componentDidMount(){const e=this.getInitLinkParam();this.props.onLinkParamChange(e)}render(){const e=Ce(this.props.appConfig,this.props.intl);return s.React.createElement("div",{className:"w-100"},s.React.createElement("div",{className:"mb-12 option-name"},this.props.intl.formatMessage({id:"chooseAPage",defaultMessage:w.defaultMessages.chooseAPage})),s.React.createElement("div",null,s.React.createElement(fe,{linkParam:this.props.linkParam,datas:e,onClick:this.setLinkParam,"aria-label":this.props.intl.formatMessage({id:"chooseAPage",defaultMessage:w.defaultMessages.chooseAPage})})))}}class Ne extends s.React.PureComponent{constructor(){super(...arguments),this.getInitLinkParam=()=>{const e=this.props.appConfig.dialogs;if(!e||Object.keys(e).length<1)return(0,s.Immutable)({linkType:s.LinkType.Dialog,value:""});if(this.props.originLinkParam.linkType!==s.LinkType.Dialog){const e=Ie(this.props.appConfig);return(0,s.Immutable)({linkType:s.LinkType.Dialog,value:e&&e[0]&&e[0].id})}return this.props.originLinkParam},this.setLinkParam=e=>{let t=this.props.linkParam;t=t.set("value",e.id),this.props.onLinkParamChange(t)}}componentDidMount(){const e=this.getInitLinkParam();this.props.onLinkParamChange(e)}componentDidUpdate(e){if(e.appConfig!==this.props.appConfig){const e=this.getInitLinkParam();this.props.onLinkParamChange(e)}}render(){const e=Ie(this.props.appConfig);return s.React.createElement("div",{className:"w-100"},s.React.createElement("div",{className:"mb-12 option-name"},this.props.intl.formatMessage({id:"chooseADialog",defaultMessage:w.defaultMessages.chooseADialog})),s.React.createElement("div",null,e&&e.length>0&&s.React.createElement(fe,{linkParam:this.props.linkParam,datas:e,onClick:this.setLinkParam,"aria-label":this.props.intl.formatMessage({id:"chooseADialog",defaultMessage:w.defaultMessages.chooseADialog})})))}}class Te extends s.React.PureComponent{constructor(){super(...arguments),this.getInitLinkParam=()=>{const e=M.searchUtils.getBlockAnchorPointsInPage(M.utils.getAppConfig(),M.utils.getCurrentPageId(),M.utils.getCurrentSizeMode());if(!e||e.length<1)return(0,s.Immutable)({linkType:s.LinkType.Block,value:""});if(this.props.originLinkParam.linkType!==s.LinkType.Block){const e=this.getBlockData();return(0,s.Immutable)({linkType:s.LinkType.Block,value:e&&e.some((e=>"default"===e.id))?"default":e&&e[0]&&e[0].id})}return this.props.originLinkParam},this.getBlockData=()=>{var e;return(null===(e=M.searchUtils.getBlockAnchorPointsInPage(M.utils.getAppConfig(),M.utils.getCurrentPageId(),M.utils.getCurrentSizeMode()))||void 0===e?void 0:e.sort(((e,t)=>{var i;return null===(i=e.label)||void 0===i?void 0:i.localeCompare(t.label,null===window||void 0===window?void 0:window.locale,{numeric:!0,sensitivity:"base"})}))).map((e=>({id:e.id,name:e.label})))},this.setLinkParam=e=>{let t=this.props.linkParam;t=t.set("value",e.id),this.props.onLinkParamChange(t)}}componentDidMount(){const e=this.getInitLinkParam();this.props.onLinkParamChange(e)}render(){const e=this.getBlockData();return s.React.createElement("div",{className:"w-100"},s.React.createElement("div",{className:"mb-12 option-name"},this.props.intl.formatMessage({id:"jumpTo",defaultMessage:w.defaultMessages.jumpTo})),s.React.createElement("div",null,e&&e.length>0&&s.React.createElement(fe,{linkParam:this.props.linkParam,datas:e,onClick:this.setLinkParam,"aria-label":this.props.intl.formatMessage({id:"jumpTo",defaultMessage:w.defaultMessages.jumpTo})})))}}class Re extends s.React.PureComponent{constructor(){super(...arguments),this.screenGroupLabelStyle={marginLeft:"-20px"},this.getInitLinkParam=()=>{const e=this.getScreenData();return!e||e.length<1?(0,s.Immutable)({linkType:s.LinkType.Screen,value:""}):this.props.originLinkParam.linkType!==s.LinkType.Screen?(0,s.Immutable)({linkType:s.LinkType.Screen,value:e[0].screens[0].id}):this.props.originLinkParam},this.getScreenData=()=>{var e;return null===(e=M.searchUtils.getScreenAnchorPointsInPage(M.utils.getAppConfig(),M.utils.getCurrentPageId(),M.utils.getCurrentSizeMode()))||void 0===e?void 0:e.sort(((e,t)=>{var i;return null===(i=e.label)||void 0===i?void 0:i.localeCompare(t.label,null===window||void 0===window?void 0:window.locale,{numeric:!0,sensitivity:"base"})}))},this.setLinkParam=e=>{let t=this.props.linkParam;t=t.set("value",e.target.value),this.props.onLinkParamChange(t)}}componentDidMount(){const e=this.getInitLinkParam();this.props.onLinkParamChange(e)}render(){var e;const t=this.getScreenData(),i=[];return t.forEach((e=>{i.push(s.React.createElement("option",{value:e.id,key:e.id,disabled:!0,style:this.screenGroupLabelStyle},e.label)),e.screens.forEach(((t,o)=>i.push(s.React.createElement("option",{value:t.id,key:`${e.id}-${o}`},t.label))))})),s.React.createElement("div",{className:"w-100"},s.React.createElement("div",{className:"mb-12 option-name"},this.props.intl.formatMessage({id:"jumpTo",defaultMessage:w.defaultMessages.jumpTo})),s.React.createElement("div",null,t.length>0&&s.React.createElement(w.Select,{value:null===(e=this.props.linkParam)||void 0===e?void 0:e.value,className:"w-100",onChange:this.setLinkParam,size:"sm","aria-label":this.props.intl.formatMessage({id:"jumpTo",defaultMessage:w.defaultMessages.jumpTo})},i)))}}const Me=e=>{const t=window.SVG,{className:i}=e,o=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(i[s[o]]=e[s[o]])}return i}(e,["className"]),a=(0,s.classNames)("jimu-icon jimu-icon-component",i);return t?s.React.createElement(t,Object.assign({className:a,src:Y()},o)):s.React.createElement("svg",Object.assign({className:a},o))};const Le=e=>{const t=window.SVG,{className:i}=e,o=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(i[s[o]]=e[s[o]])}return i}(e,["className"]),a=(0,s.classNames)("jimu-icon jimu-icon-component",i);return t?s.React.createElement(t,Object.assign({className:a,src:Q()},o)):s.React.createElement("svg",Object.assign({className:a},o))};class Ae extends s.React.PureComponent{constructor(){super(...arguments),this.onCollapseClick=e=>{e.stopPropagation(),e.nativeEvent.stopImmediatePropagation(),this.setState({collapse:!this.state.collapse})}}componentWillMount(){this.setState({collapse:this.props.isOpen})}render(){return s.React.createElement("div",{className:(0,s.classNames)("w-100",this.props.className)},s.React.createElement("div",{title:this.props.title,style:{overflow:"hidden"},className:"w-100 btn pb-2 pr-2 d-flex justify-content-between"},s.React.createElement("div",null,this.props.title),s.React.createElement(w.Button,{type:"tertiary",size:"sm",className:"collapse-btn py-0 jimu-outline-inside pr-0",onClick:this.onCollapseClick},this.state.collapse?s.React.createElement(Me,{size:"s"}):s.React.createElement(Le,{size:"s"}))),s.React.createElement(w.Collapse,{isOpen:this.state.collapse,"aria-label":this.props.title},this.props.children))}}class Ee extends s.React.PureComponent{constructor(e){super(e),this.noScroll="Do not scroll",this.getInitLinkParam=()=>{if(this.props.originLinkParam.linkType===s.LinkType.View)return this.props.originLinkParam;{let e=(0,s.Immutable)({linkType:s.LinkType.View,value:""});return je(this.getDefaultPageOrDialogId())||(e=e.set("openType",this.getInitOpenType())),e}},this.getInitOpenType=()=>!this.props.openTypes||this.props.openTypes.includes(ve.CurrentWindow)?ve.CurrentWindow:this.props.openTypes[0],this.pageOrDialogChange=e=>{let t=this.props.linkParam;t=t.set("value",e.target.value),t=ke(t)?t.without("openType"):t.set("openType",this.getInitOpenType()),this.props.onLinkParamChange(t)},this.viewChange=(e,t)=>{let i=[];i=Object.assign(i,this.state.viewLinkParamArr),i[0]||(i[0]=this.getDefaultPageOrDialogId());const s=this.props.appConfig.sections[t].views;let o=i.filter((t=>s.some((e=>e===t))&&t!==e)),a=[];const n=i.indexOf(e);if(n>-1?o=o.concat(i[n]):a=a.concat(e),o&&o.length>0){let e=[];o.forEach((t=>{e=e.concat(we(t,this.props.appConfig))})),o=o.concat(e)}i=i.filter((e=>!o.some((t=>t===e)))),i=i.concat(a);let l=this.props.linkParam;l=l.set("value",i.join(",")),this.props.onLinkParamChange(l)},this.viewRemove=e=>{let t=[];t=Object.assign(t,this.state.viewLinkParamArr),t[0]||(t[0]=this.getDefaultPageOrDialogId());const i=we(e,this.props.appConfig).concat(e);t=t.slice(0,1).concat(t.slice(1).filter((e=>!i.some((t=>t===e)))));let s=this.props.linkParam;s=s.set("value",t.join(",")),this.props.onLinkParamChange(s,!0)},this.onScrollToViewChange=e=>{this.setState({scrollToViewId:e})},this.getDefaultPageOrDialogId=()=>{const e=this.props.appConfig&&this.props.appConfig.pages,t=e&&Object.keys(e).filter((e=>be(e,this.props.appConfig).length>0)),i=t&&t.find((t=>e[t].isDefault))||(null==t?void 0:t[0]);if(i)return i;const s=this.props.appConfig&&this.props.appConfig.dialogs,o=s&&Object.keys(s).filter((e=>ye(e,this.props.appConfig).length>0));return null==o?void 0:o[0]},this.getSelectedVeiwIds=()=>this.state.viewLinkParamArr.slice(1),this.state={viewLinkParamArr:[],scrollToViewId:this.noScroll}}componentDidMount(){const e=this.getInitLinkParam(),{value:t,linkType:i}=e;t&&i===s.LinkType.View?this.setState({viewLinkParamArr:t.split(",")}):this.setState({viewLinkParamArr:[]}),this.props.onLinkParamChange(e)}static getDerivedStateFromProps(e,t){const{value:i,linkType:o}=e.linkParam;return i&&o===s.LinkType.View?Object.assign(Object.assign({},t),{viewLinkParamArr:i.split(",")}):Object.assign(Object.assign({},t),{viewLinkParamArr:[]})}render(){var e,t,i;if(!this.props.appConfig)return null;const o=Ce(this.props.appConfig,this.props.intl),a=Ie(this.props.appConfig),n=this.state.viewLinkParamArr[0]||this.getDefaultPageOrDialogId();if(!o.some((e=>e.id===n))&&!a.some((e=>e.id===n)))return null;const l=o.filter((e=>be(e.id,this.props.appConfig).length>0)),r=a.filter((e=>ye(e.id,this.props.appConfig).length>0));return s.React.createElement("div",{className:"w-100"},s.React.createElement("div",{className:"mb-12 option-name"},this.props.intl.formatMessage({id:"chooseViews",defaultMessage:w.defaultMessages.chooseViews})),s.React.createElement("div",null,s.React.createElement(w.Select,{value:n,onChange:this.pageOrDialogChange,className:"w-100 mb-3",size:"sm"},s.React.createElement(w.Option,{header:!0},this.props.intl.formatMessage({id:"page",defaultMessage:s.defaultMessages.page})),l.map(((e,t)=>s.React.createElement(w.Option,{key:t,value:e.id},e.name))),r.length>0&&s.React.createElement(w.Option,{header:!0},this.props.intl.formatMessage({id:"dialog",defaultMessage:s.defaultMessages.dialog})),r.map(((e,t)=>s.React.createElement(w.Option,{key:t,value:e.id},e.name)))),s.React.createElement("div",{className:(0,s.classNames)("choose-view",{"mb-3":(null===(e=be(n,this.props.appConfig))||void 0===e?void 0:e.length)>0})},be(n,this.props.appConfig).map((e=>s.React.createElement(De,{sections:this.props.appConfig.sections,sectionId:e,viewsInfo:xe(e,this.props.appConfig),viewLinkParamArr:this.state.viewLinkParamArr,viewChange:this.viewChange,viewRemove:this.viewRemove,key:e})))),s.React.createElement("div",{className:(0,s.classNames)("choose-view",{"mb-3":(null===(t=ye(n,this.props.appConfig))||void 0===t?void 0:t.length)>0})},ye(n,this.props.appConfig).map((e=>s.React.createElement(De,{sections:this.props.appConfig.sections,sectionId:e,viewsInfo:xe(e,this.props.appConfig),viewLinkParamArr:this.state.viewLinkParamArr,viewChange:this.viewChange,viewRemove:this.viewRemove,key:e})))),s.React.createElement("div",{className:(0,s.classNames)("choose-view",{"mb-3":(null===(i=this.getSelectedVeiwIds())||void 0===i?void 0:i.length)>0})},this.getSelectedVeiwIds().map((e=>Se(e,this.props.appConfig).map((e=>s.React.createElement(De,{sections:this.props.appConfig.sections,sectionId:e,viewsInfo:xe(e,this.props.appConfig),viewLinkParamArr:this.state.viewLinkParamArr,viewChange:this.viewChange,viewRemove:this.viewRemove,key:e}))))))))}}class De extends s.React.PureComponent{constructor(e){super(e),this.onViewChange=e=>{this.setState({viewId:e}),this.props.viewChange(e,this.props.sectionId)},this.state={viewId:null}}componentWillUnmount(){this.props.viewRemove(this.state.viewId)}render(){return s.React.createElement(Ae,{className:"mb-3 choose-view",title:this.props.sections[this.props.sectionId]&&this.props.sections[this.props.sectionId].label,isOpen:!0,key:this.props.sectionId},s.React.createElement("div",{className:"link-selector-list w-100 view-border border-top-0 border-left-0 border-right-0 rounded-0",role:"menu"},this.props.viewsInfo.map(((e,t)=>s.React.createElement(w.Button,{role:"menuitem",onClick:()=>this.onViewChange(e.id),key:t,className:(0,s.classNames)("jimu-outline-inside link-selector-list-item btn w-100 view-border px-2 pt-1 text-left border-bottom-0 rounded-0 text-truncate",{"item-common":!this.props.viewLinkParamArr.includes(e.id)},{itemselected:this.props.viewLinkParamArr.includes(e.id)}),title:e.label,"aria-checked":this.props.viewLinkParamArr.includes(e.id)},e.label)))))}}var Ue=h(39342);const Fe=(0,s.Immutable)([Ue.ExpressionInputType.Static,Ue.ExpressionInputType.Attribute,Ue.ExpressionInputType.Expression]);class Be extends s.React.PureComponent{constructor(e){var t;super(e),this.getInitLinkParam=()=>this.props.originLinkParam.linkType===s.LinkType.WebAddress?this.props.originLinkParam:(0,s.Immutable)({linkType:s.LinkType.WebAddress,openType:!this.props.openTypes||this.props.openTypes.includes(ve.NewWindow)?ve.NewWindow:this.props.openTypes[0],value:""}),this.webAddressInputChange=e=>{const t=e.value;let i=this.props.linkParam;i=i.set("value",t).set("expression",null),this.props.onLinkParamChange(i)},this.webAddressExpressionChange=e=>{let t=this.props.linkParam;t=t.set("expression",e).set("value",""),this.props.onLinkParamChange(t),this.closeExpPopup()},this.openExpPopup=()=>this.setState({isExpPopupOpen:!0}),this.closeExpPopup=()=>this.setState({isExpPopupOpen:!1}),this.getDefaultExp=()=>({name:"Expression",parts:[{type:s.ExpressionPartType.String,exp:'"https://"'}]}),this.onUrlChange=e=>{this.setState({url:e.value})},this.state={isExpPopupOpen:!1,url:(null===(t=this.props.linkParam)||void 0===t?void 0:t.linkType)===s.LinkType.WebAddress?this.props.linkParam.value:""}}componentDidMount(){const e=this.getInitLinkParam();this.props.onLinkParamChange(e)}componentDidUpdate(e){var t,i,o;(null===(t=e.linkParam)||void 0===t?void 0:t.value)!==(null===(i=this.props.linkParam)||void 0===i?void 0:i.value)&&this.setState({url:(null===(o=this.props.linkParam)||void 0===o?void 0:o.linkType)===s.LinkType.WebAddress?this.props.linkParam.value:this.state.url})}render(){return s.React.createElement("div",{className:"w-100"},s.React.createElement("div",{className:"mb-12 option-name"},this.props.intl.formatMessage({id:"url",defaultMessage:w.defaultMessages.url})),s.React.createElement("div",null,this.props.useDataSources&&this.props.useDataSources.length>0?s.React.createElement(Ue.ExpressionInput,{useDataSources:this.props.useDataSources,onChange:this.webAddressExpressionChange,expression:this.props.linkParam&&this.props.linkParam.expression||this.getDefaultExp(),closeExpPopup:this.closeExpPopup,openExpPopup:this.openExpPopup,isExpPopupOpen:this.state.isExpPopupOpen,types:Fe,widgetId:this.props.widgetId,"aria-label":this.props.intl.formatMessage({id:"url",defaultMessage:w.defaultMessages.url})}):s.React.createElement(w.UrlInput,{value:this.state.url,schemes:Oe,onChange:this.onUrlChange,className:"w-100",onAcceptValue:this.webAddressInputChange,"aria-label":this.props.intl.formatMessage({id:"url",defaultMessage:w.defaultMessages.url})})))}}class $e extends s.React.PureComponent{constructor(e){if(super(e),this.getLinkTypeContent=()=>{if(this.props.isLinkPageSetting)return(0,s.jsx)(w.Select,{value:this.state.linkParam.linkType,size:"sm",onChange:this.linkTypeChange,className:"w-100","aria-label":this.props.intl.formatMessage({id:"linkTo",defaultMessage:w.defaultMessages.linkTo})},(0,s.jsx)("option",{value:s.LinkType.WebAddress},this.props.intl.formatMessage({id:"url",defaultMessage:w.defaultMessages.url})));{const e=this.getHiddenLinks();return(0,s.jsx)(w.Select,{value:this.state.linkParam.linkType,size:"sm",onChange:this.linkTypeChange,className:"w-100","aria-label":this.props.intl.formatMessage({id:"linkTo",defaultMessage:w.defaultMessages.linkTo})},!e.some((e=>e===s.LinkType.None))&&(0,s.jsx)("option",{value:s.LinkType.None},this.props.intl.formatMessage({id:"none",defaultMessage:w.defaultMessages.none})),!e.some((e=>e===s.LinkType.Page))&&(0,s.jsx)("option",{value:s.LinkType.Page},this.props.intl.formatMessage({id:"page",defaultMessage:s.defaultMessages.page})),!e.some((e=>e===s.LinkType.View))&&(0,s.jsx)("option",{value:s.LinkType.View},this.props.intl.formatMessage({id:"view",defaultMessage:s.defaultMessages.view})),!e.some((e=>e===s.LinkType.Dialog))&&(0,s.jsx)("option",{value:s.LinkType.Dialog},this.props.intl.formatMessage({id:"dialog",defaultMessage:s.defaultMessages.dialog})),!e.some((e=>e===s.LinkType.WebAddress))&&(0,s.jsx)("option",{value:s.LinkType.WebAddress},this.props.intl.formatMessage({id:"url",defaultMessage:w.defaultMessages.url})),!e.some((e=>e===s.LinkType.Block))&&(0,s.jsx)("option",{value:s.LinkType.Block},this.props.intl.formatMessage({id:"block",defaultMessage:s.defaultMessages.block})),!e.some((e=>e===s.LinkType.PageTop))&&(0,s.jsx)("option",{value:s.LinkType.PageTop},this.props.intl.formatMessage({id:"pageTop",defaultMessage:w.defaultMessages.pageTop})),!e.some((e=>e===s.LinkType.PrintPreview))&&(0,s.jsx)("option",{value:s.LinkType.PrintPreview},this.props.intl.formatMessage({id:"printPreview",defaultMessage:w.defaultMessages.printPreview})))}},this.getHiddenLinks=()=>{var e,t,i,o,a;let n=this.props.hiddenLinks||(0,s.Immutable)([]);const l=M.utils.getCurrentPageId(),r=M.utils.getAppConfig(),c=null===(e=r.pages)||void 0===e?void 0:e[l],p=M.searchUtils.findLayoutId(null==c?void 0:c.layout,M.utils.getCurrentSizeMode(),r.mainSizeMode),d=r.layouts[p],u=(null===(t=null===window||void 0===window?void 0:window.jimuConfig)||void 0===t?void 0:t.isBuilder)?null===(o=null===(i=(0,s.getAppStore)().getState().appStateInBuilder)||void 0===i?void 0:i.appRuntimeInfo)||void 0===o?void 0:o.currentDialogId:null===(a=(0,s.getAppStore)().getState().appRuntimeInfo)||void 0===a?void 0:a.currentDialogId;return((null==d?void 0:d.type)===s.LayoutType.FixedLayout||u)&&(n=n.concat([s.LinkType.Block,s.LinkType.Screen,s.LinkType.PageTop])),n},this.getLinkContent=e=>{switch(e){case s.LinkType.None:return null;case s.LinkType.Page:return(0,s.jsx)(Pe,{originLinkParam:this.state.originLinkParam,linkParam:this.state.linkParam,appConfig:this.props.appConfig,onLinkParamChange:this.linkParamChange,intl:this.props.intl,openTypes:this.props.openTypes});case s.LinkType.Dialog:return(0,s.jsx)(Ne,{originLinkParam:this.state.originLinkParam,linkParam:this.state.linkParam,appConfig:this.props.appConfig,onLinkParamChange:this.linkParamChange,intl:this.props.intl});case s.LinkType.Block:return(0,s.jsx)(Te,{originLinkParam:this.state.originLinkParam,linkParam:this.state.linkParam,onLinkParamChange:this.linkParamChange,intl:this.props.intl});case s.LinkType.Screen:return(0,s.jsx)(Re,{originLinkParam:this.state.originLinkParam,linkParam:this.state.linkParam,onLinkParamChange:this.linkParamChange,intl:this.props.intl});case s.LinkType.View:return(0,s.jsx)(Ee,{originLinkParam:this.state.originLinkParam,linkParam:this.state.linkParam,intl:this.props.intl,openTypes:this.props.openTypes,appConfig:this.props.appConfig,onLinkParamChange:this.linkParamChange,browserSizeMode:this.props.browserSizeMode});case s.LinkType.WebAddress:return(0,s.jsx)(Be,{originLinkParam:this.state.originLinkParam,linkParam:this.state.linkParam,intl:this.props.intl,onLinkParamChange:this.linkParamChange,useDataSources:this.props.useDataSources,openTypes:this.props.openTypes,widgetId:this.props.widgetId});default:return null}},this.linkTypeChange=e=>{let t=(0,s.Immutable)(this.state.linkParam);const i=e.target.value;i===s.LinkType.PageTop&&(t=(0,s.Immutable)({})),this.setState({linkParam:t.set("linkType",i)})},this.radioOpenTypeChange=e=>{let t=(0,s.Immutable)(this.state.linkParam);t=t.set("openType",e),this.setState({linkParam:t})},this.linkParamChange=(e,t)=>{t?e&&this.state.linkParam&&e.linkType===this.state.linkParam.linkType&&this.setState({linkParam:this.fixLinkParam(e)}):this.setState({linkParam:this.fixLinkParam(e)})},this.fixLinkParam=e=>{var t;let i=e;if((null==e?void 0:e.linkType)===s.LinkType.View&&(null==e?void 0:e.value)){const s=null===(t=this.props.appConfig)||void 0===t?void 0:t.views,o=e.value.split(","),a=o.slice(1).filter((e=>null==s?void 0:s[e])),n=[o[0]].concat(a).join(",");i=i.set("value",n)}return i},this.settingConfirm=()=>{const e=(0,s.Immutable)(this.state.linkParam);this.setState({originLinkParam:e}),this.props.onSettingConfirm(e)},this.isLinkParamOk=e=>{if(!e||!e.linkType)return!1;if(e.linkType===s.LinkType.View){const t=e.value&&e.value.split(",")[0]||null,i=e.value&&e.value.split(",").slice(1)||[];return!!(t&&"string"==typeof t&&i.length>0)}if(e.linkType===s.LinkType.WebAddress){if(this.props.useDataSources&&this.props.useDataSources.length>0){const t=e.expression&&e.expression.parts;let i=!1;return t&&t.length>0&&(i=1!==t.length||!!t[0].exp&&'""'!==t[0].exp),i}{const t="valid"!==s.urlUtils.checkAbsoluteUrl(e.value,Oe);return e.value&&!t}}return e.linkType===s.LinkType.PageTop||e.linkType===s.LinkType.PrintPreview||e.linkType===s.LinkType.None||!(!e.value||"string"!=typeof e.value)},this.props.linkParam&&this.props.linkParam.linkType)this.state={linkParam:(0,s.Immutable)(this.props.linkParam),originLinkParam:(0,s.Immutable)(this.props.linkParam)};else{const e={linkType:s.LinkType.None,openType:!this.props.openTypes||this.props.openTypes.includes(ve.CurrentWindow)?ve.CurrentWindow:this.props.openTypes[0]};this.state={linkParam:(0,s.Immutable)(e),originLinkParam:(0,s.Immutable)(e)}}}needOpenIn(e){return!e||![s.LinkType.Dialog,s.LinkType.Block,s.LinkType.Screen,s.LinkType.PageTop,s.LinkType.PrintPreview].some((t=>t===e.linkType))&&!ke(e)}render(){if(this.props.appConfig){const e=this.getLinkTypeContent(),t=this.getLinkContent(this.state.linkParam.linkType);return(0,s.jsx)("div",{className:(0,s.classNames)(this.props.className,"w-100 h-100")},(0,s.jsx)("div",{className:"widget-builder-link-selector w-100 h-100"},(0,s.jsx)("div",{style:{position:"relative"},className:"w-100 h-100"},(0,s.jsx)(w.Container,null,(0,s.jsx)(w.Row,{className:"mb-12 option-name"},this.props.intl.formatMessage({id:"linkTo",defaultMessage:w.defaultMessages.linkTo})),(0,s.jsx)(w.Row,{className:"mb-3"},e),this.state.linkParam.linkType!==s.LinkType.None?(0,s.jsx)("div",null,(0,s.jsx)(w.Row,{className:"mb-3"},t),this.needOpenIn(this.state.linkParam)&&(0,s.jsx)("div",null,(0,s.jsx)(w.Row,{className:"mb-12 option-name"},this.props.intl.formatMessage({id:"openIn",defaultMessage:w.defaultMessages.openIn})),(0,s.jsx)(w.Container,{className:"p-0","aria-label":this.props.intl.formatMessage({id:"openIn",defaultMessage:w.defaultMessages.openIn})},(!this.props.openTypes||this.props.openTypes.some((e=>e===ve.CurrentWindow)))&&(0,s.jsx)(w.Row,{className:"mb-3"},(0,s.jsx)(w.Radio,{onChange:()=>this.radioOpenTypeChange(ve.CurrentWindow),id:"link-setting-app-window",checked:this.state.linkParam.openType===ve.CurrentWindow}),(0,s.jsx)(w.Label,{for:"link-setting-app-window",className:"ml-2 link-setting-cursor-pointer open-type-label text-truncate"},this.props.intl.formatMessage({id:"appWindow",defaultMessage:w.defaultMessages.appWindow}))),(!this.props.openTypes||this.props.openTypes.some((e=>e===ve.TopWindow)))&&(0,s.jsx)(w.Row,{className:"mb-3"},(0,s.jsx)(w.Radio,{onChange:()=>this.radioOpenTypeChange(ve.TopWindow),id:"link-setting-top-window",checked:this.state.linkParam.openType===ve.TopWindow}),(0,s.jsx)(w.Label,{for:"link-setting-top-window",className:"ml-2 link-setting-cursor-pointer open-type-label text-truncate"},this.props.intl.formatMessage({id:"topWindow",defaultMessage:w.defaultMessages.topWindow}))),(!this.props.openTypes||this.props.openTypes.some((e=>e===ve.NewWindow)))&&(0,s.jsx)(w.Row,{className:"mb-3"},(0,s.jsx)(w.Radio,{onChange:()=>this.radioOpenTypeChange(ve.NewWindow),id:"link-setting-new-window",checked:this.state.linkParam.openType===ve.NewWindow}),(0,s.jsx)(w.Label,{for:"link-setting-new-window",className:"ml-2 link-setting-cursor-pointer open-type-label text-truncate"},this.props.intl.formatMessage({id:"newWindow",defaultMessage:w.defaultMessages.newWindow})))))):null),(0,s.jsx)("div",{className:"w-100",style:{position:"absolute"}},(0,s.jsx)(w.Button,{className:"w-100 text-dark link-setting-ok-btn",type:"primary",onClick:this.settingConfirm,disabled:!this.isLinkParamOk(this.state.linkParam),title:this.props.intl.formatMessage({id:"ok",defaultMessage:s.defaultMessages.ok})},(0,s.jsx)("div",{className:"text-truncate"},this.props.intl.formatMessage({id:"ok",defaultMessage:s.defaultMessages.ok})))))))}return null}componentDidMount(){this.props.isLinkPageSetting&&this.linkTypeChange({target:{value:s.LinkType.WebAddress}})}}const ze=s.ReactRedux.connect((e=>({appConfig:window&&window.jimuConfig&&window.jimuConfig.isBuilder?e.appStateInBuilder.appConfig:e.appConfig,browserSizeMode:window&&window.jimuConfig&&window.jimuConfig.isBuilder?e.appStateInBuilder.browserSizeMode:e.browserSizeMode})))((0,s.injectIntl)((0,y.withStyles)($e,"LinkSelectorContent"))),We=ze;const Ge=[{name:"preventOverflow",options:{boundariesElement:"viewport"}}];class Ve extends s.React.PureComponent{constructor(){super(...arguments),this.closeBtnRef=s.React.createRef(),this.popperRef=s.React.createRef(),this.handleDocumentMousedown=e=>{if(this.props.isOpen){const t=e.target;(!this.props.trigger||(Array.isArray(this.props.trigger)?!this.props.trigger.some((e=>!(0,w.isOutBoundary)(t,e))):(0,w.isOutBoundary)(t,this.props.trigger)))&&this.toggle()}},this.toggle=()=>{this.props.toggle()},this.keepFocusAfterClose=()=>{setTimeout((()=>{var e,t;this.props.backToFocusNode?this.props.backToFocusNode.focus():Array.isArray(this.props.trigger)?null===(e=this.props.trigger[0])||void 0===e||e.focus():null===(t=this.props.trigger)||void 0===t||t.focus()}),200)},this.onKeyDown=e=>{var t,i;if("Esc"===e.key||"Escape"===e.key){if(!(null===(t=this.popperRef.current)||void 0===t?void 0:t.contains(e.target)))return;e.target===this.closeBtnRef.current?this.toggle():null===(i=this.closeBtnRef.current)||void 0===i||i.focus()}}}componentDidMount(){var e;null===(e=this.getReference(this.props.position))||void 0===e||e.addEventListener("mousedown",this.handleDocumentMousedown,!1)}componentDidUpdate(e){var t;const i="left"===this.props.position&&e.leftSidebarCollapse&&!this.props.leftSidebarCollapse||"right"===this.props.position&&e.rightSidebarCollapse&&!this.props.rightSidebarCollapse,s=this.props.widgetId&&this.props.layoutSelection!==e.layoutSelection&&(null===(t=M.searchUtils.findLayoutItem(M.utils.getAppConfig(),this.props.layoutSelection))||void 0===t?void 0:t.widgetId)!==this.props.widgetId,o=!e.isTemplatePage&&this.props.isTemplatePage;(i||s||o)&&this.props.isOpen&&this.toggle(),e.isOpen&&!this.props.isOpen&&this.keepFocusAfterClose()}componentWillUnmount(){var e;null===(e=this.getReference(this.props.position))||void 0===e||e.removeEventListener("mousedown",this.handleDocumentMousedown,!1)}getReference(e){return"left"===e?document&&document.querySelector('[data-layoutid="left-sidebar-left-layout"]'):document&&document.querySelector('[data-layoutid="right-sidebar-right-layout"]')}getPlacement(e){return"left"===e?"right-start":"left-start"}render(){const e=this.props,{isOpen:t,position:i,className:o,dispatch:a,leftSidebarCollapse:n,rightSidebarCollapse:l,trigger:r,backToFocusNode:c,widgetId:p,layoutSelection:d,title:u,isTemplatePage:m,addFocusableContainerClass:g}=e,h=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(i[s[o]]=e[s[o]])}return i}(e,["isOpen","position","className","dispatch","leftSidebarCollapse","rightSidebarCollapse","trigger","backToFocusNode","widgetId","layoutSelection","title","isTemplatePage","addFocusableContainerClass"]);return(0,s.jsx)(w.Popper,Object.assign({reference:this.getReference(i),placement:this.getPlacement(i),open:t,forceLatestFocusElements:!0,className:(0,s.classNames)("bg-light-300",o),modifiers:Ge},h,{toggle:null,onKeyDown:this.onKeyDown,"aria-label":"string"==typeof this.props["aria-label"]?this.props["aria-label"]:"string"==typeof u?u:void 0}),(0,s.jsx)("div",{className:"w-100 h-100",ref:this.popperRef},void 0!==u&&(0,s.jsx)(w.PanelHeader,{title:u,showClose:!0,onClose:this.toggle,level:1,className:(0,s.classNames)("p-3",{[w.FOCUSABLE_CONTAINER_CLASS]:g}),closeButtonRef:this.closeBtnRef}),void 0!==u?(0,s.jsx)("div",{css:s.css`height: calc(100% - 56px); overflow: auto;`},this.props.children):this.props.children))}}const _e=s.ReactRedux.connect(((e,t)=>{var i,s,o,a,n,l,r,c,p,d;return{leftSidebarCollapse:null===(s=null===(i=e.widgetsState)||void 0===i?void 0:i["left-sidebar"])||void 0===s?void 0:s.collapse,rightSidebarCollapse:null===(a=null===(o=e.widgetsState)||void 0===o?void 0:o["right-sidebar"])||void 0===a?void 0:a.collapse,layoutSelection:t.widgetId?(null===(n=null===window||void 0===window?void 0:window.jimuConfig)||void 0===n?void 0:n.isBuilder)?null===(r=null===(l=e.appStateInBuilder)||void 0===l?void 0:l.appRuntimeInfo)||void 0===r?void 0:r.selection:null===(c=e.appRuntimeInfo)||void 0===c?void 0:c.selection:null,isTemplatePage:(null===(p=null===window||void 0===window?void 0:window.jimuConfig)||void 0===p?void 0:p.isBuilder)&&"template"===(null===(d=e.appRuntimeInfo)||void 0===d?void 0:d.currentPageId)}}))((0,y.withStyles)(Ve,"SidePopper"));class qe extends s.React.PureComponent{constructor(){super(...arguments),this.close=()=>{this.props.onSettingCancel()},this.getIsOpen=()=>this.props.isOpen||this.props.showDialog}render(){const e=this.props.position||"right",{title:t}=this.props;return s.React.createElement(_e,{isOpen:this.getIsOpen(),position:e,toggle:this.close,trigger:this.props.trigger,backToFocusNode:this.props.backToFocusNode,widgetId:this.props.widgetId,title:this.props.intl.formatMessage({id:t?"setLinkForTitle":"setLink",defaultMessage:t?w.defaultMessages.setLinkForTitle:w.defaultMessages.setLink},{title:t})},s.React.createElement("div",{className:"bg-light-300 w-100 h-100 px-3"},s.React.createElement(ze,{isLinkPageSetting:this.props.isLinkPageSetting,linkParam:this.props.linkParam,onSettingConfirm:this.props.onSettingConfirm,useDataSources:this.props.useDataSources,widgetId:this.props.widgetId,hiddenLinks:this.props.hiddenLinks,openTypes:this.props.openTypes})))}}const He=(0,s.injectIntl)((0,y.withTheme)(qe)),Je=He;var Ze=h(24786),Ke=h.n(Ze);const Qe=e=>{const t=window.SVG,{className:i}=e,o=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(i[s[o]]=e[s[o]])}return i}(e,["className"]),a=(0,s.classNames)("jimu-icon jimu-icon-component",i);return t?s.React.createElement(t,Object.assign({className:a,src:Ke()},o)):s.React.createElement("svg",Object.assign({className:a},o))};class Xe extends s.React.PureComponent{constructor(e){super(e),this.linkSelectorTrigger=s.React.createRef(),this.toggle=()=>{const e=!this.state.isOpen;this.setState({isOpen:e},(()=>this.setState({renderPopper:e})))},this.onCancel=()=>{var e,t;null===(t=(e=this.props).onSettingCancel)||void 0===t||t.call(e),this.toggle()},this.onConfirm=e=>{var t,i;null===(i=(t=this.props).onSettingConfirm)||void 0===i||i.call(t,e),this.toggle()},this.getIsOpen=()=>this.state.isOpen&&!s.urlUtils.getAppIdPageIdFromUrl().pageId,this.state={isOpen:!1,renderPopper:!1}}render(){const e=this.props,{theme:t,intl:i,buttonLabel:o}=e,a=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(i[s[o]]=e[s[o]])}return i}(e,["theme","intl","buttonLabel"]),n=o||this.props.intl.formatMessage({id:"setLink",defaultMessage:w.defaultMessages.setLink});return s.React.createElement(s.React.Fragment,null,s.React.createElement(w.Button,{className:"w-100 text-black",type:"primary",onClick:this.toggle,ref:this.linkSelectorTrigger,title:n},s.React.createElement("div",{className:"w-100 px-2 text-truncate"},s.React.createElement(Qe,{className:"text-black mr-1"}),n)),this.state.renderPopper&&s.React.createElement(He,Object.assign({},a,{isOpen:this.getIsOpen(),position:"right",onSettingCancel:this.onCancel,onSettingConfirm:this.onConfirm,trigger:this.linkSelectorTrigger.current,widgetId:this.props.widgetId})))}}const Ye=(0,y.withTheme)((0,s.injectIntl)(Xe));var et=h(338),tt=function(e,t,i,s){return new(i||(i=Promise))((function(o,a){function n(e){try{r(s.next(e))}catch(e){a(e)}}function l(e){try{r(s.throw(e))}catch(e){a(e)}}function r(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(n,l)}r((s=s.apply(e,t||[])).next())}))};function it(){return tt(this,void 0,void 0,(function*(){const e=yield st(),t=yield ot(),i={};return Object.keys(e).forEach((t=>{i[t]||(i[t]={items:[],isPremium:e[t].isPremium,isSubscriber:e[t].isSubscriber}),i[t].items=i[t].items.concat(e[t].dataSources.map((e=>({label:s.dataSourceUtils.getServiceLabelFromUrl(t),id:e.id}))))})),Object.keys(t).forEach((e=>{i[e]||(i[e]={items:[],isPremium:t[e].isPremium,isSubscriber:t[e].isSubscriber}),i[e].items=i[e].items.concat(t[e].utilities.map((e=>{const t=s.UtilityManager.getInstance().getUtilityJson(e.utilityId);return{label:(null==t?void 0:t.label)||(null==t?void 0:t.name)||(null==t?void 0:t.sourceLabel),id:e.utilityId}})))})),i}))}function st(){var e,t,i,o;return tt(this,void 0,void 0,(function*(){const a=null===(o=null===(i=null===(t=null===(e=(0,s.getAppStore)())||void 0===e?void 0:e.getState())||void 0===t?void 0:t.appStateInBuilder)||void 0===i?void 0:i.appConfig)||void 0===o?void 0:o.dataSources,n=[];return a&&Object.keys(a).forEach((e=>{const t=s.DataSourceManager.getInstance().getDataSource(e);n.push(at(t))})),Promise.allSettled(n).then((e=>{let t={};return e.filter((e=>"fulfilled"===e.status)).map((e=>e.value)).forEach((e=>{e&&Object.keys(e).forEach((i=>{t[i]?t[i].dataSources=t[i].dataSources.concat(e[i].dataSources):t=Object.assign(Object.assign({},t),e)}))})),t}))}))}function ot(){var e,t,i,o;return tt(this,void 0,void 0,(function*(){const a=null===(o=null===(i=null===(t=null===(e=(0,s.getAppStore)())||void 0===e?void 0:e.getState())||void 0===t?void 0:t.appStateInBuilder)||void 0===i?void 0:i.appConfig)||void 0===o?void 0:o.utilities,n=[];return a&&Object.keys(a).forEach((e=>{n.push(function(e){var t,i,o,a;return tt(this,void 0,void 0,(function*(){const n={};if(!e)return n;const l=null===(a=null===(o=null===(i=null===(t=(0,s.getAppStore)())||void 0===t?void 0:t.getState())||void 0===i?void 0:i.appStateInBuilder)||void 0===o?void 0:o.appConfig)||void 0===a?void 0:a.widgets,r=l&&Object.values(l).some((t=>{var i;return null===(i=t.useUtilities)||void 0===i?void 0:i.some((t=>t.utilityId===e.id))})),c=e.url;if(c&&r){const t=yield s.proxyUtils.isUtilityPremium(e),i=yield s.proxyUtils.isUtilitySubscriber(e);if(t||i){const o=yield s.UtilityManager.getInstance().getUtility(e.id);n[c]={utilities:[o],isPremium:t,isSubscriber:i}}}return n}))}(a[e]))})),Promise.allSettled(n).then((e=>{let t={};return e.filter((e=>"fulfilled"===e.status)).map((e=>e.value)).forEach((e=>{e&&Object.keys(e).forEach((i=>{t[i]?t[i].utilities=t[i].utilities.concat(e[i].utilities):t=Object.assign(Object.assign({},t),e)}))})),t}))}))}function at(e,t=!1){var i,o,a,n,l,r;return tt(this,void 0,void 0,(function*(){const c={};if(!e)return c;const p=null===(n=null===(a=null===(o=null===(i=(0,s.getAppStore)())||void 0===i?void 0:i.getState())||void 0===o?void 0:o.appStateInBuilder)||void 0===a?void 0:a.appConfig)||void 0===n?void 0:n.widgets,d=(null===(l=e.getMainDataSource())||void 0===l?void 0:l.id)===e.id,u=et.dataComponentsUtils.getWidgetsUsingDsOrItsViews(e.id,p,!1).length>0,m=s.dataSourceUtils.getFullServiceUrl(null===(r=e.getDataSourceJson())||void 0===r?void 0:r.url,!1);if(d&&m&&(t||u)){const t=yield s.proxyUtils.isDataSourcePremium(e.getDataSourceJson()),i=yield s.proxyUtils.isDataSourceSubscriber(e.getDataSourceJson());(t||i)&&(c[m]={dataSources:[e],isPremium:t,isSubscriber:i})}const g=[];if(d&&e.isDataSourceSet){const i=(e.type===s.AllDataSourceTypes.WebMap||e.type===s.AllDataSourceTypes.WebScene)&&u||t;e.getChildDataSources().forEach((e=>{g.push(at(e,i))}))}return Promise.allSettled(g).then((e=>{let t=c;return e.filter((e=>"fulfilled"===e.status)).map((e=>e.value)).forEach((e=>{e&&Object.keys(e).forEach((i=>{t[i]?t[i].dataSources=t[i].dataSources.concat(e[i].dataSources):t=Object.assign(Object.assign({},t),e)}))})),t}))}))}function nt(e,t){var i;if(!e||!t)return null;let s=null;for(const o in t)if((null===(i=t[o])||void 0===i?void 0:i.sourceUrl)===e){s=t[o];break}return s}function lt(e,t,i,s){return!(!e||!t)&&(e.sourceUrl===t&&((!e.hitsPerInterval&&!i||e.hitsPerInterval===i)&&!((e.intervalSeconds||s)&&e.intervalSeconds!==s)))}function rt(){var e,t;const i=null===(e=(0,s.getAppStore)().getState())||void 0===e?void 0:e.appStateInBuilder.appInfo;return null===(t=null==i?void 0:i.typeKeywords)||void 0===t?void 0:t.includes("Registered App")}function ct(){var e,t,i,o,a,n,l,r,c,p;return tt(this,void 0,void 0,(function*(){if((null===(i=null===(t=null===(e=(0,s.getAppStore)().getState())||void 0===e?void 0:e.appContext)||void 0===t?void 0:t.jimuConfig)||void 0===i?void 0:i.isInPortal)||(null===(n=null===(a=null===(o=(0,s.getAppStore)().getState())||void 0===o?void 0:o.appContext)||void 0===a?void 0:a.jimuConfig)||void 0===n?void 0:n.isDevEdition))return yield Promise.resolve(!1);const d=rt();let u=!1;if(!d){const e=null===(l=(0,s.getAppStore)().getState())||void 0===l?void 0:l.appStateInBuilder.appInfo,t=null===(p=null===(c=null===(r=(0,s.getAppStore)().getState())||void 0===r?void 0:r.appStateInBuilder)||void 0===c?void 0:c.user)||void 0===p?void 0:p.username;u=(null==e?void 0:e.owner)===t}if(!d&&!u)return yield Promise.resolve(!1);const m=yield it(),g=Object.keys(m).map((e=>tt(this,void 0,void 0,(function*(){return yield s.ServiceManager.getInstance().fetchServiceInfo(e).then((e=>e.isHostedInSamePortal))}))));return Promise.all(g).then((e=>(null==e?void 0:e.length)>0&&(null==e?void 0:e.some((e=>e)))))}))}function pt(e,t){return tt(this,void 0,void 0,(function*(){if(!e||0===e.length||!t)return yield Promise.resolve();const i=gt();return yield s.esri.restRequest.request(i,{authentication:s.SessionManager.getInstance().getSessionByUrl((0,s.getAppStore)().getState().portalUrl),httpMethod:"POST",params:{proxies:e.join()}}).then((e=>tt(this,void 0,void 0,(function*(){var i;return e.results&&Object.values(e.results).forEach((e=>{e.success&&dt(e.proxyId,t)})),null==t||t.exec(),(null===(i=e.results)||void 0===i?void 0:i.every((e=>!0===e.success)))?Promise.resolve():Promise.reject(`Deleting existing proxy failed: ${JSON.stringify(e)}`)})))).catch((i=>tt(this,void 0,void 0,(function*(){return e.forEach((e=>{dt(e,t)})),null==t||t.exec(),Promise.reject(`Deleting existing proxy failed: ${JSON.stringify(i)}`)}))))}))}function dt(e,t){var i,o,a;const n=null===(a=null===(o=null===(i=(0,s.getAppStore)().getState())||void 0===i?void 0:i.appStateInBuilder)||void 0===o?void 0:o.appConfig)||void 0===a?void 0:a.appProxies,l=n&&Object.values(n).find((t=>t.proxyId===e));l&&(null==t||t.removeAppProxy(l.id))}function ut(){var e,t,i,o,a,n,l;const r=null===(t=null===(e=(0,s.getAppStore)().getState())||void 0===e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.portalUrl,c=null===(o=null===(i=(0,s.getAppStore)().getState())||void 0===i?void 0:i.appStateInBuilder)||void 0===o?void 0:o.appId;return`${r}/sharing/rest/content/users/${null===(l=null===(n=null===(a=(0,s.getAppStore)().getState())||void 0===a?void 0:a.appStateInBuilder)||void 0===n?void 0:n.appInfo)||void 0===l?void 0:l.owner}/items/${c}`}function mt(){return`${ut()}/createProxies`}function gt(){return`${ut()}/deleteProxies`}var ht=h(18371),vt=h.n(ht);const ft=e=>{const t=window.SVG,{className:i}=e,o=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(i[s[o]]=e[s[o]])}return i}(e,["className"]),a=(0,s.classNames)("jimu-icon jimu-icon-component",i);return t?s.React.createElement(t,Object.assign({className:a,src:vt()},o)):s.React.createElement("svg",Object.assign({className:a},o))};class bt extends s.React.PureComponent{constructor(e){super(e),this.__unmount=!1,this.interval={none:this.props.intl.formatMessage({id:"intervalNone",defaultMessage:w.defaultMessages.intervalNone}),second:this.props.intl.formatMessage({id:"intervalSecond",defaultMessage:w.defaultMessages.intervalSecond}),minute:this.props.intl.formatMessage({id:"intervalMinute",defaultMessage:w.defaultMessages.intervalMinute}),hour:this.props.intl.formatMessage({id:"intervalHour",defaultMessage:w.defaultMessages.intervalHour}),day:this.props.intl.formatMessage({id:"intervalDay",defaultMessage:w.defaultMessages.intervalDay})},this.setIsHostedInSamePortal=()=>{this.props.sourceUrl&&s.ServiceManager.getInstance().fetchServiceInfo(this.props.sourceUrl).then((e=>{this.__unmount||this.setState({isHostedInSamePortal:e.isHostedInSamePortal})}))},this.onToggleProxy=()=>{let e;e=this.props.proxySettingConfig?null:(0,s.Immutable)({sourceUrl:this.props.sourceUrl}),this.props.onChange(this.props.sourceUrl,e)},this.onHitsPerInervalChange=e=>{const t=e,i={sourceUrl:this.props.sourceUrl,hitsPerInterval:t},s=this.props.proxySettingConfig?Object.assign(Object.assign({},this.props.proxySettingConfig),i):i;this.props.onChange(this.props.sourceUrl,s)},this.onIntervalUnitChange=e=>{const t=e.target.value,i=this.getIntervalSeconds(t),s={sourceUrl:this.props.sourceUrl,intervalSeconds:i},o=this.props.proxySettingConfig?Object.assign(Object.assign({},this.props.proxySettingConfig),s):s;this.props.onChange(this.props.sourceUrl,o)},this.state={isHostedInSamePortal:!0}}componentDidMount(){this.__unmount=!1,this.setIsHostedInSamePortal()}componentDidUpdate(e){this.__unmount=!1,e.sourceUrl!==this.props.sourceUrl&&this.setIsHostedInSamePortal()}componentWillUnmount(){this.__unmount=!0}getIntervalUnit(e){if(!e)return"none";switch(e){case 1:return"second";case 60:return"minute";case 3600:return"hour";case 86400:return"day";default:return"none"}}getIntervalSeconds(e){if(!e)return null;switch(e){case"second":return 1;case"minute":return 60;case"hour":return 3600;case"day":return 86400;default:return null}}render(){var e,t;if(!this.props.sourceUrl)return null;const i=this.props.label,o=!!this.props.proxySettingConfig,a=this.getIntervalUnit(null===(e=this.props.proxySettingConfig)||void 0===e?void 0:e.intervalSeconds),n=s.SessionManager.getInstance().getMainSession(),l=`${this.props.sourceUrl}?token=${n.token}`;return s.React.createElement("tr",{className:"row m-0 content-table-tr"},s.React.createElement("td",{className:"col-2",title:this.state.isHostedInSamePortal?null:this.props.intl.formatMessage({id:"disabledProxyTooltip",defaultMessage:w.defaultMessages.disabledProxyTooltip})},s.React.createElement(w.Switch,{onChange:this.onToggleProxy,checked:o,className:"mr-2",disabled:!this.state.isHostedInSamePortal,"aria-label":this.props.intl.formatMessage({id:"authorized",defaultMessage:w.defaultMessages.authorized}),"aria-checked":o})),s.React.createElement("td",{className:"col-4",title:i},s.React.createElement(w.Link,{to:l,target:"_blank",className:"font-size-13 px-0 text-truncate d-block text-left","aria-label":this.props.intl.formatMessage({id:"subscriberContent",defaultMessage:w.defaultMessages.subscriberContent})},i)),s.React.createElement("td",{className:"col-2"},this.props.isPremium&&s.React.createElement(ft,{size:"m"})),s.React.createElement("td",{className:"col-2"},o&&s.React.createElement(w.NumericInput,{size:"sm",value:null===(t=this.props.proxySettingConfig)||void 0===t?void 0:t.hitsPerInterval,onChange:this.onHitsPerInervalChange,precision:0,min:1,className:"request-limit","aria-label":this.props.intl.formatMessage({id:"requestLimit",defaultMessage:w.defaultMessages.requestLimit})})),s.React.createElement("td",{className:"col-2"},o&&s.React.createElement(w.Select,{value:a,onChange:this.onIntervalUnitChange,size:"sm",className:"request-interval","aria-label":this.props.intl.formatMessage({id:"requestInterval",defaultMessage:w.defaultMessages.requestInterval})},Object.keys(this.interval).map(((e,t)=>s.React.createElement("option",{value:e,key:t,selected:e===a},this.interval[e]))))))}}class yt extends s.React.PureComponent{constructor(){super(...arguments),this.columnName={authorized:this.props.intl.formatMessage({id:"authorized",defaultMessage:w.defaultMessages.authorized}),subscriberContent:this.props.intl.formatMessage({id:"subscriberContent",defaultMessage:w.defaultMessages.subscriberContent}),credits:this.props.intl.formatMessage({id:"credits",defaultMessage:w.defaultMessages.credits}),requestLimit:this.props.intl.formatMessage({id:"requestLimit",defaultMessage:w.defaultMessages.requestLimit}),requestInterval:this.props.intl.formatMessage({id:"requestInterval",defaultMessage:w.defaultMessages.requestInterval})},this.onProxyChange=(e,t)=>{const i=this.props.proxySettingConfigs||{},o=Object.assign({},i),a=s.dataSourceUtils.getDsTypeFromWholeServiceUrl(e)===s.DataSourceTypes.SceneService;if(t){if(o[e]=t,a){const i=e.replace("/SceneServer","/FeatureServer"),s=Object.assign(Object.assign({},t),{sourceUrl:i});o[i]=s}}else delete o[e],a&&delete o[e.replace("/SceneServer","/FeatureServer")];this.props.onChange(o)}}render(){const e=this.props.needProxyItems,t=this.props.proxySettingConfigs;return s.React.createElement("div",{className:(0,s.classNames)("h-100 w-100 bg-light-300",{[this.props.className]:!!this.props.className})},s.React.createElement("div",{className:"subscriber-warning"},this.props.intl.formatMessage({id:"subscriberWarning",defaultMessage:w.defaultMessages.subscriberWarning})),s.React.createElement("div",{className:"secondary-title mt-4 mb-3"},this.props.intl.formatMessage({id:"data",defaultMessage:w.defaultMessages.data})),s.React.createElement("table",{className:"content-table w-100"},s.React.createElement("thead",{className:"content-table-header container"},s.React.createElement("tr",{className:"row"},Object.keys(this.columnName).map(((e,t)=>s.React.createElement("th",{key:t,className:(0,s.classNames)("text-truncate",{"col-4":"subscriberContent"===e,"col-2":"subscriberContent"!==e}),title:this.columnName[e]},this.columnName[e]))))),s.React.createElement("tbody",{className:"container"},e&&Object.keys(e).map(((i,o)=>{var a,n;const l=e[i];return s.React.createElement(bt,{isPremium:l.isPremium,isSubscriber:l.isSubscriber,sourceUrl:i,intl:this.props.intl,key:o,onChange:this.onProxyChange,label:null===(n=null===(a=l.items)||void 0===a?void 0:a[0])||void 0===n?void 0:n.label,proxySettingConfig:null==t?void 0:t[i]})})))))}}const wt=(0,s.injectIntl)((0,y.withStyles)(yt,"ProxySetting"));var St;!function(e){e.IMAGE="image",e.ICON="icon"}(St||(St={}));var xt=function(e,t,i,s){return new(i||(i=Promise))((function(o,a){function n(e){try{r(s.next(e))}catch(e){a(e)}}function l(e){try{r(s.throw(e))}catch(e){a(e)}}function r(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(n,l)}r((s=s.apply(e,t||[])).next())}))};const Ct={};class It extends s.React.PureComponent{constructor(e){super(e),this.__unmount=!1,this.getProxySettingConfigs=e=>xt(this,void 0,void 0,(function*(){var t,i;const o={},a=null===(i=null===(t=(0,s.getAppStore)().getState().appStateInBuilder)||void 0===t?void 0:t.appConfig)||void 0===i?void 0:i.appProxies;return Object.keys(e).forEach((e=>{const t=nt(e,a);t&&(o[e]=t.without("id").without("proxyId").without("proxyUrl"))})),o})),this.registerApp=()=>xt(this,void 0,void 0,(function*(){var e,t,i,o;const a=null===(t=null===(e=(0,s.getAppStore)().getState())||void 0===e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.appId;if(Ct[a])return yield Ct[a];const n=`${null===(o=null===(i=(0,s.getAppStore)().getState())||void 0===i?void 0:i.appStateInBuilder)||void 0===o?void 0:o.portalUrl}/sharing/rest/oauth2/registerApp`;return Ct[a]=s.esri.restRequest.request(n,{authentication:s.SessionManager.getInstance().getSessionByUrl((0,s.getAppStore)().getState().portalUrl),httpMethod:"POST",params:{itemId:a,appType:"browser",redirect_uris:JSON.stringify([this.getAppRootUrl()])}}),yield Ct[a]})),this.createProxies=e=>xt(this,void 0,void 0,(function*(){var t,i,o;if(!e)return yield Promise.resolve(null);const a=null===(o=null===(i=null===(t=(0,s.getAppStore)().getState())||void 0===t?void 0:t.appStateInBuilder)||void 0===i?void 0:i.appConfig)||void 0===o?void 0:o.appProxies,n={};let l=[];if(Object.keys(e).forEach((t=>{const i=e[t];if(!i)return;const s=i.hitsPerInterval,o=i.intervalSeconds,r=nt(t,a);lt(r,t,s,o)?n[r.id]=r:l=l.concat({sourceUrl:t,hitsPerInterval:s,intervalSeconds:o})})),0===l.length)return(0,s.Immutable)(n);rt()||(yield this.registerApp());const r={referrers:[this.getAppUrl()]},c=mt();return s.esri.restRequest.request(c,{authentication:s.SessionManager.getInstance().getSessionByUrl((0,s.getAppStore)().getState().portalUrl),httpMethod:"POST",params:{serviceProxyParams:r,proxies:l}}).then((e=>{var t,i;const o=(null==e?void 0:e.appProxies)||[],a=n,l=null===(i=null===(t=(0,s.getAppStore)().getState())||void 0===t?void 0:t.appStateInBuilder)||void 0===i?void 0:i.appConfig,r=null==l?void 0:l.appProxies;return o.forEach((e=>{const t=nt(e.sourceUrl,r),i=(null==t?void 0:t.id)||s.appConfigUtils.getUniqueId(l.set("appProxies",r?r.merge(a):a),"appProxy");a[i]=Object.assign(Object.assign({},e),{id:i})})),(0,s.Immutable)(a)}))})),this.getAppRootUrl=()=>{var e;return null===(e=null===window||void 0===window?void 0:window.location)||void 0===e?void 0:e.origin},this.getAppUrl=()=>{var e,t,i,o,a,n;const l=null===(t=null===(e=(0,s.getAppStore)().getState())||void 0===e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.appId,r=null===(o=null===(i=(0,s.getAppStore)().getState())||void 0===i?void 0:i.appStateInBuilder)||void 0===o?void 0:o.appInfo,c="Web Experience Template"===(null==r?void 0:r.type),p=null===(a=s.urlUtils.getAppUrl({appId:l,isTemplate:c}))||void 0===a?void 0:a.replace(/^\//,"");return`${null===(n=this.getAppRootUrl())||void 0===n?void 0:n.replace(/\/$/,"")}/${p}`},this.onProxyConfigChange=e=>{this.setState({proxySettingConfigs:e})},this.onFinish=()=>{var e,t,i,o;this.setState({isLoading:!0});const a=this.state.proxySettingConfigs||{},n=null===(i=null===(t=null===(e=(0,s.getAppStore)().getState())||void 0===e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.appConfig)||void 0===i?void 0:i.appProxies,l=n&&Object.values(n).filter((e=>{var t;let i=a[null==e?void 0:e.sourceUrl];if(s.dataSourceUtils.getDsTypeFromWholeServiceUrl(null==e?void 0:e.sourceUrl)===s.DataSourceTypes.FeatureService){const s=null===(t=null==e?void 0:e.sourceUrl)||void 0===t?void 0:t.replace("/FeatureServer","/SceneServer"),o=a[s];i=i||Object.assign(Object.assign({},o),{sourceUrl:null==e?void 0:e.sourceUrl})}return!i||!lt(e,i.sourceUrl,i.hitsPerInterval,i.intervalSeconds)}));pt(null==l?void 0:l.map((e=>e.proxyId)),null===(o=this.state)||void 0===o?void 0:o.getAppConfigAction()).then((()=>xt(this,void 0,void 0,(function*(){return yield this.createProxies(a).then((e=>{var t;if(!this.__unmount){if(e){const i=null===(t=this.state)||void 0===t?void 0:t.getAppConfigAction();Object.keys(e).forEach((t=>{null==i||i.editAppProxy(e[t])})),null==i||i.exec()}this.props.onFinish().then((()=>{this.__unmount||setTimeout((()=>{this.setState({isLoading:!1},(()=>{this.props.onToggle()}))}),3e3)}),(()=>{this.__unmount||setTimeout((()=>{this.setState({isLoading:!1},(()=>{this.props.onToggle()}))}),3e3)}))}}))})))).catch((e=>{console.error("Creating proxy failed: ",e),this.setState({isLoading:!1,isError:!0},(()=>{setTimeout((()=>{this.setState({isError:!1})}),5500)}))}))},this.getTostStyle=()=>{var e,t,i,o,a,n,l,r,c,p,d;return s.css`
      & {
        height:  ${s.polished.rem(40)};
        top: ${s.polished.rem(60)};
      }
      .jimu-toast-info {
        background: ${null===(o=null===(i=null===(t=null===(e=this.props)||void 0===e?void 0:e.theme)||void 0===t?void 0:t.colors)||void 0===i?void 0:i.palette)||void 0===o?void 0:o.secondary[300]};
        line-height: ${s.polished.rem(40)};
        color: ${null===(r=null===(l=null===(n=null===(a=this.props)||void 0===a?void 0:a.theme)||void 0===n?void 0:n.colors)||void 0===l?void 0:l.palette)||void 0===r?void 0:r.dark[800]};
        font-weight: 300;
        padding: 0 ${s.polished.rem(16)};
        box-shadow: 0 0 ${s.polished.rem(10)} ${s.polished.rem(2)} ${s.polished.rgba(null===(d=null===(p=null===(c=this.props)||void 0===c?void 0:c.theme)||void 0===p?void 0:p.colors)||void 0===d?void 0:d.white,.2)};
      }
    `},this.state={getAppConfigAction:null,isLoading:!1,isError:!1,proxySettingConfigs:null,needProxyItems:null}}componentDidMount(){this.__unmount=!1,s.moduleLoader.loadModule("jimu-for-builder").then((e=>{this.__unmount||this.setState({getAppConfigAction:e.getAppConfigAction})})),this.setState({isLoading:!0}),this.initNeedProxyItemsAndProxySettingConfigs()}componentDidUpdate(e){(!e.isOpen&&this.props.isOpen||e.appProxies!==this.props.appProxies)&&this.initNeedProxyItemsAndProxySettingConfigs()}initNeedProxyItemsAndProxySettingConfigs(){return xt(this,void 0,void 0,(function*(){this.setState({isLoading:!0});try{const e=yield it(),t=yield this.getProxySettingConfigs(e);this.__unmount||this.setState({proxySettingConfigs:t,needProxyItems:e,isLoading:!1})}catch(e){this.__unmount||this.setState({isLoading:!1}),console.error("Getting proxy config error",e)}}))}componentWillUnmount(){this.__unmount=!0}render(){const e=this.state.proxySettingConfigs,t=this.state.needProxyItems,i=this.props.intl.formatMessage({id:"subscriberContents",defaultMessage:w.defaultMessages.subscriberContents});return(0,s.jsx)(w.Modal,{isOpen:this.props.isOpen,centered:!0,className:(0,s.classNames)({[this.props.className]:!!this.props.className}),returnfocusafterclose:"true",contentClassName:"proxy-setting-container",backdrop:"static","aria-label":i},(0,s.jsx)(w.ModalHeader,{className:"d-flex justify-content-between header px-30",toggle:this.props.onToggle},(0,s.jsx)("div",{className:"flex-grow-1 text-truncate"},i)),(0,s.jsx)(w.ModalBody,{className:"d-flex px-30"},(0,s.jsx)(wt,{onChange:this.onProxyConfigChange,proxySettingConfigs:e,needProxyItems:t})),(0,s.jsx)(w.ModalFooter,{className:"px-30"},(0,s.jsx)(w.Button,{className:"mr-2",type:"primary",onClick:this.onFinish},this.props.intl.formatMessage({id:"publish",defaultMessage:s.defaultMessages.publish})),(0,s.jsx)(w.Button,{type:"default",onClick:this.props.onCancel},this.props.intl.formatMessage({id:"cancel",defaultMessage:s.defaultMessages.cancel}))),this.state.isLoading&&(0,s.jsx)(w.Loading,{type:s.LoadingType.Secondary}),this.state.isError&&(0,s.jsx)(w.Toast,{open:this.state.isError,type:w.ToastType.Info,css:this.getTostStyle(),text:this.props.intl.formatMessage({id:"creatProxyToPublishAppError",defaultMessage:w.defaultMessages.creatProxyToPublishAppError})}))}}const kt=(0,y.withStyles)((0,y.withTheme)((0,s.injectIntl)(It)),"ProxySettingPopup"),jt=s.ReactRedux.connect(((e,t)=>{var i,s;return{appProxies:null===(s=null===(i=null==e?void 0:e.appStateInBuilder)||void 0===i?void 0:i.appConfig)||void 0===s?void 0:s.appProxies}}))(kt);class Ot extends s.React.PureComponent{componentDidUpdate(e){this.props.pageId===e.pageId&&this.props.sizemode===e.sizemode||this.props.toggle()}getStyle(){const{theme:e}=this.props;return e&&s.css`
      background-color: ${e.colors.palette.light[300]};
      ${(0,y.popperPointer)({background:e.colors.palette.light[300],border:{color:e.colors.palette.light[600],width:"1px"}})}
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
    `}render(){const e=this.props,{pageId:t,sizemode:i,dispatch:o}=e,a=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(i[s[o]]=e[s[o]])}return i}(e,["pageId","sizemode","dispatch"]);return(0,s.jsx)(w.Popper,Object.assign({css:this.getStyle()},a))}}const Pt=s.ReactRedux.connect((function(e){return{pageId:e.appRuntimeInfo.currentPageId,sizemode:e.browserSizeMode}}))(Ot);var Nt=h(55339),Tt=h.n(Nt);const Rt=e=>{const t=window.SVG,{className:i}=e,o=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(i[s[o]]=e[s[o]])}return i}(e,["className"]),a=(0,s.classNames)("jimu-icon jimu-icon-component",i);return t?s.React.createElement(t,Object.assign({className:a,src:Tt()},o)):s.React.createElement("svg",Object.assign({className:a},o))};var Mt=h(4077),Lt=h.n(Mt);const At=e=>{const t=window.SVG,{className:i}=e,o=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(i[s[o]]=e[s[o]])}return i}(e,["className"]),a=(0,s.classNames)("jimu-icon jimu-icon-component",i);return t?s.React.createElement(t,Object.assign({className:a,src:Lt()},o)):s.React.createElement("svg",Object.assign({className:a},o))};var Et=h(30224),Dt=h.n(Et);const Ut=e=>{const t=window.SVG,{className:i}=e,o=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(i[s[o]]=e[s[o]])}return i}(e,["className"]),a=(0,s.classNames)("jimu-icon jimu-icon-component",i);return t?s.React.createElement(t,Object.assign({className:a,src:Dt()},o)):s.React.createElement("svg",Object.assign({className:a},o))},Ft=[(0,w.getFallbackPlacementsModifier)(["top","right","bottom","left"],!0),{name:"preventOverflow",enabled:!0,options:{boundariesElement:"viewport",padding:0}}],Bt=1e3;class $t extends s.React.PureComponent{constructor(e){super(e),this.groupLabelMap={1:this.props.intl.formatMessage({id:"mapCentric",defaultMessage:w.defaultMessages.mapCentric}),2:this.props.intl.formatMessage({id:"dataCentric",defaultMessage:w.defaultMessages.dataCentric}),3:this.props.intl.formatMessage({id:"pageElements",defaultMessage:w.defaultMessages.pageElements}),4:this.props.intl.formatMessage({id:"menuAndTollbars",defaultMessage:w.defaultMessages.menuAndTollbars}),9:this.props.intl.formatMessage({id:"section",defaultMessage:s.defaultMessages.section})},this.allGroup={value:Bt,label:this.props.intl.formatMessage({id:"all",defaultMessage:w.defaultMessages.all})},this.getRequireEnterpriseIconTooltip=e=>{if((null==e?void 0:e.length)>0){const t=e.join(", ");return this.props.intl.formatMessage({id:"requireEnterpriseAndUserTypeExtensions",defaultMessage:w.defaultMessages.requireEnterpriseAndUserTypeExtensions},{userTypeExtensions:t})}return this.props.intl.formatMessage({id:"requireEnterprise",defaultMessage:w.defaultMessages.requireEnterprise})},this.WidgetCard=({widgetInfo:e})=>{var t,i,o,a;return(0,s.jsx)("div",{className:"d-flex align-items-start justify-content-center widget-card"},(null===(t=e.manifest)||void 0===t?void 0:t.requireEnterprise)&&(0,s.jsx)(w.Button,{title:this.getRequireEnterpriseIconTooltip(null===(i=e.manifest)||void 0===i?void 0:i.requiredUserTypeExtensions),type:"tertiary",className:"widget-enterprise-btn",icon:!0,size:"sm"},(0,s.jsx)(At,null)),(0,s.jsx)(w.Button,{className:"w-100 h-100 p-0",key:e.name,onClick:()=>this.props.onSelect(e),"aria-label":e.label},(0,s.jsx)("div",{className:"d-flex flex-column w-100 h-100 widget-card--content"},(0,s.jsx)("div",{className:"d-flex justify-content-center"},(0,s.jsx)("div",{className:"widget-card-image"},(0,s.jsx)(w.Icon,{className:"w-100 m-0",autoFlip:null===(a=null===(o=e.manifest)||void 0===o?void 0:o.properties)||void 0===a?void 0:a.flipIcon,icon:"string"==typeof e.icon?e.icon:e.icon&&e.icon.svg,color:this.props.theme.colors.dark}))),(0,s.jsx)("div",{className:"flex-grow-1 d-flex align-items-center"},(0,s.jsx)("div",{className:"widget-card-name w-100 text-center text-capitalize text-truncate",css:s.css`
                line-height: 1rem;
                max-height: 2.2rem;
                white-space: normal;
              `,title:e.label},e.label)))))},this.WidgetGroup=({group:e})=>{if(!e)return null;const t=this.WidgetCard;return(0,s.jsx)("div",{className:"widget-group w-100 mb-3"},(0,s.jsx)("h4",{className:"group-label w-100 text-break",title:e.label},e.label),(0,s.jsx)("div",{className:"card-grid m-0"},e.itemList.sort(((e,t)=>e.order-t.order)).map(((e,i)=>e?(0,s.jsx)(t,{widgetInfo:e,key:i}):(0,s.jsx)("div",{className:"widget-card",style:{visibility:"hidden"},key:i})))))},this.togglePopper=e=>{this.state.open&&this.props.onClose&&this.props.onClose(e)},this.getGroupList=(e,t,i)=>{var s,o,a,n;const l=[this.allGroup];if(e){const t=this.getCommonGroups(e,Bt,i);t&&Object.values(t).forEach((e=>{"number"==typeof e.groupId&&l.push({value:e.groupId,label:this.getGroupLabel(e.groupId)})}))}return(null===(o=null===(s=this.state.jimuForBuilderUtils)||void 0===s?void 0:s.showCustomWidgets)||void 0===o?void 0:o.call(s,e))&&this.getCustomGroup(e,t,Bt,i)&&l.push({value:null===(a=this.state.jimuForBuilderUtils)||void 0===a?void 0:a.CUSTOM_GROUP,label:this.getGroupLabel(null===(n=this.state.jimuForBuilderUtils)||void 0===n?void 0:n.CUSTOM_GROUP)}),l.filter((e=>!!e.label))},this.changeSelectedGroup=e=>{this.setState({selectedGroup:e.target.value})},this.onSearchValueChange=e=>{this.setState({searchValue:e.target.value,selectedGroup:Bt})},this.state={selectedGroup:Bt,commonWidgetList:null,remoteCustomWidgetList:null,open:!0,generation:0,searchValue:"",jimuForBuilderUtils:null}}componentDidMount(){this.loadJimuForBuilderUtilsPromise=s.cancelablePromise.cancelable(s.moduleLoader.loadModule("jimu-for-builder").then((e=>{var t;this.setState({jimuForBuilderUtils:null==e?void 0:e.utils}),this.groupLabelMap[null===(t=null==e?void 0:e.utils)||void 0===t?void 0:t.CUSTOM_GROUP]=this.props.intl.formatMessage({id:"custom",defaultMessage:w.defaultMessages.custom})})))}componentDidUpdate(e,t){!t.jimuForBuilderUtils&&this.state.jimuForBuilderUtils&&(this.loadCommonWidgetList(this.state.jimuForBuilderUtils.fetchCommonWidgetList),this.loadCustomWidgetList(this.state.jimuForBuilderUtils.fetchRemoteCustomWidgetList))}componentWillUnmount(){var e,t,i;null===(e=this.loadJimuForBuilderUtilsPromise)||void 0===e||e.cancel(),null===(t=this.loadCommonWidgetsPromise)||void 0===t||t.cancel(),null===(i=this.loadCommonWidgetsPromise)||void 0===i||i.cancel()}loadCommonWidgetList(e){e&&(this.loadCommonWidgetsPromise=s.cancelablePromise.cancelable(e().then((e=>{const t=null==e?void 0:e.filter((e=>e.manifest.widgetType!==s.WidgetType.Layout&&this.props.isAccepted(e,this.props.isPlaceholder)));this.setState({generation:this.state.generation+1,commonWidgetList:t})}))))}loadCustomWidgetList(e){e&&(this.loadRemoteCustomWidgetsPromise=s.cancelablePromise.cancelable(e().then((e=>{const t=null==e?void 0:e.filter((e=>this.props.isAccepted(e,this.props.isPlaceholder)));this.setState({generation:this.state.generation+1,remoteCustomWidgetList:t})}))))}getStyle(){const{theme:e}=this.props;return s.css`
      background-color: ${e.colors.palette.light[400]};
      color: ${e.colors.palette.dark[800]};

      .widget-enterprise-btn {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
      }

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
    `}getGroupLabel(e){return this.groupLabelMap[e]}getCommonGroups(e,t,i){const s=t===Bt?e:null==e?void 0:e.filter((e=>e.group===t)),o={};return null==s||s.forEach((e=>{var t;e.group!==(null===(t=this.state.jimuForBuilderUtils)||void 0===t?void 0:t.CUSTOM_GROUP)&&this.isFuzzySearch(e.label,i)&&(o[e.group]||(o[e.group]={label:this.getGroupLabel(e.group),groupId:e.group,itemList:[]}),o[e.group].itemList.push(e))})),o}getCustomGroup(e,t,i,s){var o,a,n;if(i===Bt||i===(null===(o=this.state.jimuForBuilderUtils)||void 0===o?void 0:o.CUSTOM_GROUP)){const i=(t||[]).concat((null==e?void 0:e.filter((e=>{var t;return e.group===(null===(t=this.state.jimuForBuilderUtils)||void 0===t?void 0:t.CUSTOM_GROUP)})))||[]).filter((e=>this.isFuzzySearch(e.label,s)));if(!s||i.length>0)return{label:this.getGroupLabel(null===(a=this.state.jimuForBuilderUtils)||void 0===a?void 0:a.CUSTOM_GROUP),groupId:null===(n=this.state.jimuForBuilderUtils)||void 0===n?void 0:n.CUSTOM_GROUP,itemList:i}}return null}isFuzzySearch(e,t){return!!e&&(!t||e.toLocaleLowerCase().includes(t.toLocaleLowerCase()))}render(){var e,t,i,o,a,n,l;if(!this.state.open)return null;const r=this.WidgetGroup,{commonWidgetList:c,remoteCustomWidgetList:p,selectedGroup:d,searchValue:u}=this.state,m=!!c,g=m&&this.getCommonGroups(c,d,u),h=null===(t=null===(e=this.state.jimuForBuilderUtils)||void 0===e?void 0:e.showCustomWidgets)||void 0===t?void 0:t.call(e,c),v=h&&this.getCustomGroup(c,p,d,u),f=this.getGroupList(c,p,u);return(0,s.jsx)(Pt,{theme:this.props.theme,placement:null!==(i=this.props.placement)&&void 0!==i?i:"bottom",toggle:this.togglePopper,css:this.getStyle(),version:this.state.generation,modifiers:Ft,reference:this.props.referenceElement,open:!0,forceLatestFocusElements:!0},(0,s.jsx)("div",{className:"shadow-lg content",css:this.props.css},(0,s.jsx)("div",{className:"d-flex justify-content-between align-items-center mb-3 px-20 pt-20"},(0,s.jsx)("div",{className:"title"},this.props.intl.formatMessage({id:"addWidget",defaultMessage:w.defaultMessages.addWidget})),(0,s.jsx)(w.Button,{size:"sm",icon:!0,type:"tertiary",onClick:this.togglePopper,title:this.props.intl.formatMessage({id:"close",defaultMessage:s.defaultMessages.close})},(0,s.jsx)(Rt,null))),(0,s.jsx)("div",{className:"d-flex justify-content-between align-items-center mb-3 px-20"},(0,s.jsx)(w.TextInput,{prefix:(0,s.jsx)(Ut,{size:16,color:null===(l=null===(n=null===(a=null===(o=this.props.theme)||void 0===o?void 0:o.colors)||void 0===a?void 0:a.palette)||void 0===n?void 0:n.dark)||void 0===l?void 0:l[200]}),value:u,onChange:this.onSearchValueChange,className:"w-100",size:"sm",placeholder:this.props.intl.formatMessage({id:"search",defaultMessage:s.defaultMessages.search}),allowClear:!0})),(0,s.jsx)("div",{className:"d-flex justify-content-between align-items-center mb-3 px-20"},(0,s.jsx)("div",{className:"groups"},this.props.intl.formatMessage({id:"category",defaultMessage:w.defaultMessages.category})),(0,s.jsx)(w.Select,{className:"group-select",size:"sm",value:d,onChange:this.changeSelectedGroup},f.map(((e,t)=>(0,s.jsx)("option",{value:e.value,key:t,selected:e.value===d},e.label))))),(0,s.jsx)("div",{className:"w-100 list-container px-20"},!c&&(0,s.jsx)(w.Loading,{type:w.LoadingType.Secondary}),m&&Object.values(g).sort(((e,t)=>e.groupId-t.groupId)).map(((e,t)=>(0,s.jsx)(r,{key:t,group:e}))),h&&(0,s.jsx)(r,{group:v}))))}}$t.defaultProps={isPlaceholder:!1,isAccepted:()=>!0};const zt=(0,y.withTheme2)((0,s.injectIntl)($t));var Wt=h(96262);function Gt(e){var t,i,o,a;const{template:n,onClick:l}=e,r=(0,s.getAppStore)().getState().appContext.locale,c=null!==(i=null===(t=n.i18nLabel)||void 0===t?void 0:t[r])&&void 0!==i?i:n.label,p=null!==(a=null===(o=n.i18nDescription)||void 0===o?void 0:o[r])&&void 0!==a?a:n.description,d=null!=n.gifThumbnail,u="templage_desc_"+n.name,m=s.React.useMemo((()=>s.css`
    transform: ${(0,s.getAppStore)().getState().appContext.isRTL&&n.flipThumbnail?"scaleX(-1);":""}  ;
  `),[n]);return(0,s.jsx)("div",{className:"block-item"},(0,s.jsx)(w.Tooltip,{title:p},(0,s.jsx)(w.Button,{role:"option","aria-label":c,"aria-describedby":u,onClick:l,className:"block-item--icon p-0"},(0,s.jsx)("img",{className:(0,s.classNames)("default-icon",{"multiple-icon":d}),css:m,src:n.thumbnail,draggable:!1,width:n.thumbnailWidth/2,height:n.thumbnailHeight/2}),d&&(0,s.jsx)("img",{className:(0,s.classNames)("gif-icon",{"multiple-icon":d}),css:m,draggable:!1,src:n.gifThumbnail}))),(0,s.jsx)("span",{"aria-hidden":!0,className:"block-item-label text-center mt-2",css:s.css`max-width: ${n.thumbnailWidth/2}px`},c),(0,s.jsx)("span",{"aria-hidden":!0,className:"sr-only",id:u},p))}function Vt(e){const{templates:t,onItemSelect:i}=e,o=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(i[s[o]]=e[s[o]])}return i}(e,["templates","onItemSelect"]),a=s.React.useMemo((()=>(0,y.getBuilderThemeVariables)()),[]),n=s.React.useMemo((()=>s.css`
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
  `),[a]);return(0,s.jsx)("div",Object.assign({css:n},o,{role:"listbox"}),t.map((e=>(0,s.jsx)(Gt,{key:e.name,template:e,onClick:()=>i(e)}))))}class _t extends s.React.PureComponent{constructor(e){super(e),this.onTabSelect=e=>{this.props.onTabSelect(e)},this.onFullScreenTypeChange=e=>{this.setState({fullScreenType:e.target.value})},this.state={fullScreenType:"all"}}render(){const{theme:e,formatMessage:t}=this.props,{fullScreenType:i}=this.state;let o=[];return o="fixed"===i?(0,Wt.getFullScreenPageTemplates)():"grid"===i?(0,Wt.getFullScreenGridPageTemplates)():[(0,Wt.getFullScreenPageTemplates)()[0],(0,Wt.getFullScreenGridPageTemplates)()[0]].concat((0,Wt.getFullScreenPageTemplates)().slice(1),(0,Wt.getFullScreenGridPageTemplates)().slice(1)),(0,s.jsx)("div",{className:"w-100 h-100"},(0,s.jsx)("h5",{className:"pt-3 px-4 mb-2 text-dark-600 text-truncate",title:t("addPage")},t("addPage")),(0,s.jsx)(w.Tabs,{defaultValue:"fullScreenApp",fill:!0,type:"underline",css:s.css`
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
          `,onChange:this.onTabSelect},(0,s.jsx)(w.Tab,{id:"fullScreenApp",title:t("fullScreenApp"),className:w.FOCUSABLE_CONTAINER_CLASS},(0,s.jsx)("div",{className:"d-flex flex-column h-100"},(0,s.jsx)(w.Select,{className:"align-self-end my-3",value:i,"aria-label":t("page"),css:s.css`
                  width: 120px;
                  padding-right: 1.2rem;
                `,size:"sm",onChange:this.onFullScreenTypeChange},(0,s.jsx)("option",{value:"all"},t("all")),(0,s.jsx)("option",{value:"fixed"},t("fixed")),(0,s.jsx)("option",{value:"grid"},t("grid"))),(0,s.jsx)(Vt,{className:(0,s.classNames)({[w.FOCUSABLE_CONTAINER_CLASS]:"fullScreenApp"===this.props.tabId}),templates:o,onItemSelect:this.props.onItemSelect,css:s.css`
                  height: calc(100% - 64px);
                  overflow: auto;
                  padding-top: 0;
                `}))),(0,s.jsx)(w.Tab,{id:"scrollingPage",title:t("scrollingPage"),className:w.FOCUSABLE_CONTAINER_CLASS},(0,s.jsx)(Vt,{className:(0,s.classNames)({[w.FOCUSABLE_CONTAINER_CLASS]:"scrollingPage"===this.props.tabId}),templates:(0,Wt.getScrollingPageTemplates)(),onItemSelect:this.props.onItemSelect}))))}}const qt=[{name:"preventOverflow",options:{boundariesElement:"viewport",padding:{bottom:20}}}];class Ht extends s.React.PureComponent{constructor(e){super(e),this.togglePopper=()=>{var e;this.state.open&&this.props.onClose&&this.props.onClose(),this.state.open&&(null===(e=this.props.referenceElement)||void 0===e||e.focus()),this.setState({open:!this.state.open})},this.tabSelect=e=>{this.setState({tabId:e})},this.onItemSelect=e=>{this.props.onClose(),this.props.onItemSelect(e)},this.state={open:!0,tabId:"fullScreenApp"}}render(){const{referenceElement:e,theme:t}=this.props;return(0,s.jsx)(Pt,{placement:"bottom",theme:this.props.theme,reference:e,offset:[0,10],open:!0,toggle:this.togglePopper,showArrow:!0,modifiers:qt,forceLatestFocusElements:!0},(0,s.jsx)("div",{css:s.css`
            max-height: 640px;
            height: calc(100vh - 150px);
            overflow: hidden;
          `},(0,s.jsx)(_t,{theme:t,tabId:this.state.tabId,onTabSelect:this.tabSelect,formatMessage:this.props.formatMessage,onItemSelect:this.onItemSelect})))}}const Jt=[{name:"preventOverflow",options:{altAxis:!0,boundariesElement:"viewport",padding:{bottom:20}}},{name:"flip",options:{fallbackPlacements:["right","left"]}}];function Zt(e){const{title:t,templates:i,templateContentStyle:o,referenceElement:a,onItemSelect:n,onClose:l}=e,r=s.React.useMemo((()=>e.theme||(0,y.getBuilderThemeVariables)()),[]),c=s.React.useMemo((()=>s.css`
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
  `),[r,t]),p=s.React.useCallback((()=>{null==l||l(),"function"==typeof(null==a?void 0:a.focus)&&s.lodash.defer((()=>{null==a||a.focus()}))}),[l,a]);return(0,s.jsx)(Pt,{placement:"bottom",theme:r,css:c,reference:a,offset:[0,10],toggle:p,open:!0,showArrow:!0,modifiers:Jt},t&&(0,s.jsx)("h5",{className:"text-dark-600 text-truncate title px-4 pt-3 mb-0"},t),(0,s.jsx)("div",{className:"template-content",style:o},(0,s.jsx)(Vt,{templates:i,onItemSelect:n})))}var Kt=h(59216),Qt=h.n(Kt);const Xt=e=>{const t=window.SVG,{className:i}=e,o=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(i[s[o]]=e[s[o]])}return i}(e,["className"]),a=(0,s.classNames)("jimu-icon jimu-icon-component",i);return t?s.React.createElement(t,Object.assign({className:a,src:Qt()},o)):s.React.createElement("svg",Object.assign({className:a},o))};var Yt=h(34750),ei=h.n(Yt);const ti=e=>{const t=window.SVG,{className:i}=e,o=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(i[s[o]]=e[s[o]])}return i}(e,["className"]),a=(0,s.classNames)("jimu-icon jimu-icon-component",i);return t?s.React.createElement(t,Object.assign({className:a,src:ei()},o)):s.React.createElement("svg",Object.assign({className:a},o))};var ii=h(59587),si=h(99820),oi=h.n(si);const ai=e=>{const t=window.SVG,{className:i}=e,o=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(i[s[o]]=e[s[o]])}return i}(e,["className"]),a=(0,s.classNames)("jimu-icon jimu-icon-component",i);return t?s.React.createElement(t,Object.assign({className:a,src:oi()},o)):s.React.createElement("svg",Object.assign({className:a},o))};var ni=h(58959),li=h.n(ni);const ri=e=>{const t=window.SVG,{className:i}=e,o=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(i[s[o]]=e[s[o]])}return i}(e,["className"]),a=(0,s.classNames)("jimu-icon jimu-icon-component",i);return t?s.React.createElement(t,Object.assign({className:a,src:li()},o)):s.React.createElement("svg",Object.assign({className:a},o))};var ci=h(94070),pi=h.n(ci);const di=e=>{const t=window.SVG,{className:i}=e,o=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(i[s[o]]=e[s[o]])}return i}(e,["className"]),a=(0,s.classNames)("jimu-icon jimu-icon-component",i);return t?s.React.createElement(t,Object.assign({className:a,src:pi()},o)):s.React.createElement("svg",Object.assign({className:a},o))};class ui extends s.React.PureComponent{constructor(e){super(e),this.initData=()=>{if(Array.isArray(this.props.value)&&this.props.value.length)return!1;const e=this.deepClone(this.state.option);e.ruleOptionName=this.props.intl.formatMessage({id:"option",defaultMessage:w.defaultMessages.option})+0;const t=[e];this.props.onChange(t)},this.onOptionChange=(e,t,i,s)=>{const o=this.deepClone(this.props.value);o[t].rule[e][i]=s,this.props.onChange(o,t)},this.onSelectChange=(e,t,i)=>{const s=e[0];if(!s)return;const o=this.deepClone(this.props.value),a=s.name;o[i].rule[t].jimuFieldName=a,this.props.onChange(o,i)},this.addOption=()=>{const e=Array.isArray(this.props.value),t=e?this.props.value.length:0,i=this.createOptionText(t),s=this.deepClone(this.state.option);s.ruleOptionName=i;const o=e?this.deepClone(this.props.value):[];o.push(s),this.props.onChange(o)},this.createOptionText=e=>{const t=this.props.intl.formatMessage({id:"option",defaultMessage:w.defaultMessages.option})+e;if(!this.isOptionNameRepeat(t))return t;const i=e+1;return this.createOptionText(i)},this.deleteOption=e=>{const t=this.deepClone(this.props.value);t.splice(e,1),this.props.onChange(t)},this.deleteAll=()=>{this.props.onChange([])},this.toggleOptionNameDisplay=(e,t)=>{const i=this.deepClone(this.props.value);let s=i[e].isEditOptionName;if(s=!!s,i[e].isEditOptionName=!s,t){const s=t;!this.isOptionNameRepeat(s)&&s&&(i[e].ruleOptionName=s)}this.props.onChange(i)},this.isOptionNameRepeat=e=>{if(!Array.isArray(this.props.value))return!1;let t=!1;return this.props.value.forEach((i=>{i.ruleOptionName===e&&(t=!0)})),t},this.deepClone=e=>{const t=Array.isArray(e)?[]:{};for(const i in e){const s=("object"==typeof e[i]||"function"==typeof e[i])&&null!==e[i];t[i]=s?this.deepClone(e[i]):e[i]}return t},this.setInputRef=e=>{e&&(e.select(),e.focus())},this.createRuleOptionElement=(e,t,i,o)=>{const a=t.jimuFieldName?(0,s.Immutable)([t.jimuFieldName]):(0,s.Immutable)([]);return(0,s.jsx)("div",{className:"select-down-con",key:t.jimuFieldName||i},this.props.useDataSource&&(0,s.jsx)("div",{className:"sort-field-selector"},(0,s.jsx)(et.FieldSelector,{useDataSources:e,onChange:(e,t)=>{this.onSelectChange(e,i,o)},selectedFields:a,isSearchInputHidden:!0,isDataSourceDropDownHidden:!0,useDropdown:!0})),[{getTitle:()=>this.nls("ascending"),order:s.OrderRule.Asc},{getTitle:()=>this.nls("decending"),order:s.OrderRule.Desc}].map(((e,a,n)=>(0,s.jsx)(w.Button,{key:a,title:e.getTitle(),type:t.order===e.order?"primary":"secondary",className:"sort-button "+(this.props.singleRowItemOnly&&t.order!==e.order?"collapse":""),onClick:()=>{this.onOptionChange(i,o,"order",this.props.singleRowItemOnly?[...n,n[0]][a+1].order:e.order)}},t.order===s.OrderRule.Asc&&(0,s.jsx)(ri,{size:"12",className:"sort-arrow-down-icon"}),t.order===s.OrderRule.Desc&&(0,s.jsx)(ai,{size:"12",className:"sort-arrow-down-icon"})))))},this.createOptionNameElement=(e,t)=>{const i=e.ruleOptionName,o=this.props.intl.formatMessage({id:"optionNamePlaceholder",defaultMessage:w.defaultMessages.optionNamePlaceholder}),a=(0,s.jsx)(w.TextInput,{className:"flex-grow-1 h-100 edit-input",size:"sm",type:"text",defaultValue:i,onAcceptValue:e=>{this.toggleOptionNameDisplay(t,e)},ref:e=>{this.setInputRef(e)},placeholder:o,title:i});return(0,s.jsx)("div",{className:"option-name d-flex align-items-center flex-grow-1","aria-label":i},e.isEditOptionName?a:(0,s.jsx)("span",{title:i,onDoubleClick:()=>{this.toggleOptionNameDisplay(t)}},i),(0,s.jsx)(w.Button,{size:"sm",type:"tertiary",icon:!0,className:"padding-0 option-name-icon-con",title:this.nls("edit"),onClick:()=>{this.toggleOptionNameDisplay(t)}},(0,s.jsx)(Xt,{size:"s",className:"option-name-icon"})))},this.createOptionElement=(e,t,i)=>{let o;o=(0,s.jsx)("div",{className:"close-con text-right"},(0,s.jsx)(w.Button,{size:"sm",icon:!0,type:"tertiary",className:"padding-0",title:this.nls("deleteOption"),onClick:()=>{this.deleteOption(i)}},(0,s.jsx)(Rt,{size:this.props.singleRowItemOnly?14:12,className:"sort-arrow-down-icon"})));const a=()=>t.rule.map(((t,s)=>this.createRuleOptionElement(e,t,s,i)));return(0,s.jsx)("div",{className:"select-con flex-grow-1",key:i},this.props.singleRowItemOnly&&(0,s.jsx)(s.React.Fragment,null,(0,s.jsx)("div",{className:"option-name-con"},(0,s.jsx)(di,{size:14}),a(),o))||(0,s.jsx)(s.React.Fragment,null,(0,s.jsx)("div",{className:"option-name-con d-flex align-items-center"},(()=>this.createOptionNameElement(t,i))(),o),a()))},this.nls=e=>this.props.intl?this.props.intl.formatMessage({id:e,defaultMessage:w.defaultMessages[e]}):e,this.onDataSourceCreated=e=>{},this.state={option:{ruleOptionName:"",isEditOptionName:!1,rule:[{jimuFieldName:"",order:s.OrderRule.Asc}]}}}componentDidMount(){this.initData()}componentDidUpdate(e,t){var i,s,o;(null===(i=null==e?void 0:e.useDataSource)||void 0===i?void 0:i.dataSourceId)!==(null===(o=null===(s=this.props)||void 0===s?void 0:s.useDataSource)||void 0===o?void 0:o.dataSourceId)&&Promise.resolve(!0).then((()=>{this.initData()}))}render(){const{value:e}=this.props,t=this.props.intl.formatMessage({id:"invalidExpression",defaultMessage:w.defaultMessages.invalidExpression});return(0,s.jsx)("div",{className:(0,s.classNames)("sort-con",this.props.singleRowItemOnly&&"single-row-item",{[this.props.className]:!!this.props.className})},(0,s.jsx)("div",null,(0,s.jsx)(w.Button,{type:"tertiary",className:"add-option-btn",onClick:this.addOption},(0,s.jsx)(ti,{size:"s",className:"add-option-icon"}),(0,s.jsx)("span",null,this.props.intl.formatMessage({id:"addOption",defaultMessage:w.defaultMessages.addOption}))),(0,s.jsx)(s.DataSourceComponent,{useDataSource:this.props.useDataSource,onDataSourceCreated:this.onDataSourceCreated},(i=>Array.isArray(e)?(0,s.jsx)(ii.List,{size:"sm",className:"setting-ui-unit-list",itemsJson:e.asMutable({deep:!0}).map(((e,t)=>({itemStateDetailContent:e,itemKey:`${t}`}))),dndEnabled:!0,onUpdateItem:(e,t)=>{const{itemJsons:i}=t.props,[,s]=i,o=s.map((e=>e.itemStateDetailContent));this.props.onChange(o)},isItemFocused:(e,t)=>!1,overrideItemBlockInfo:({itemBlockInfo:e})=>({name:ii.TreeItemActionType.RenderOverrideItem,children:[{name:ii.TreeItemActionType.RenderOverrideItemDroppableContainer,children:[{name:ii.TreeItemActionType.RenderOverrideItemDraggableContainer,children:[{name:ii.TreeItemActionType.RenderOverrideItemBody,children:[{name:ii.TreeItemActionType.RenderOverrideItemDragHandle},{name:ii.TreeItemActionType.RenderOverrideItemMainLine}]}]}]}]}),renderOverrideItemMainLine:(e,t)=>{var i;const{itemJsons:o}=t.props,a=o[0],n=o[1];return this.createOptionElement((0,s.Immutable)([null===(i=this.props.useDataSource)||void 0===i?void 0:i.asMutable({deep:!0})]),a.itemStateDetailContent,n.indexOf(a))}}):t)),Array.isArray(e)&&0===e.length&&(0,s.jsx)("div",{className:"no-sort-remind"},(0,s.jsx)("div",null,this.props.intl.formatMessage({id:"noOptionRemindText",defaultMessage:w.defaultMessages.noOptionRemindText})),(0,s.jsx)("div",null,this.props.intl.formatMessage({id:"pleaceAddOne",defaultMessage:w.defaultMessages.pleaceAddOne})))))}}const mi=(0,y.withStyles)((0,s.injectIntl)(ui),"SortSetting");var gi=h(60843),hi=h.n(gi);const vi=e=>{const t=window.SVG,{className:i}=e,o=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(i[s[o]]=e[s[o]])}return i}(e,["className"]),a=(0,s.classNames)("jimu-icon jimu-icon-component",i);return t?s.React.createElement(t,Object.assign({className:a,src:hi()},o)):s.React.createElement("svg",Object.assign({className:a},o))};var fi=h(18656),bi=h.n(fi);const yi=e=>{const t=window.SVG,{className:i}=e,o=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(i[s[o]]=e[s[o]])}return i}(e,["className"]),a=(0,s.classNames)("jimu-icon jimu-icon-component",i);return t?s.React.createElement(t,Object.assign({className:a,src:bi()},o)):s.React.createElement("svg",Object.assign({className:a},o))};const wi=e=>{const t=w.hooks.useTranslate(),{vertical:i=!1,onChange:o,autoFlip:a=!0,className:n,size:l="sm"}=e,r=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(i[s[o]]=e[s[o]])}return i}(e,["vertical","onChange","autoFlip","className","size"]);return s.React.createElement(w.AdvancedButtonGroup,Object.assign({size:l,className:(0,s.classNames)("setting--direction-selector",n)},r),s.React.createElement(w.Button,{size:l,title:t("horizontal"),type:"default",icon:!0,active:!i,onClick:()=>o(!1)},s.React.createElement(vi,{autoFlip:a})),s.React.createElement(w.Button,{size:l,title:t("vertical"),type:"default",icon:!0,active:i,onClick:()=>o(!0)},s.React.createElement(yi,null)))};var Si;!function(e){e.Auto="AUTO",e.Custom="CUSTOM"}(Si||(Si={}));class xi extends s.React.PureComponent{constructor(e){super(e),this.toggleDropdown=()=>{this.setState((e=>({dropdownOpen:!e.dropdownOpen})))},this.state={dropdownOpen:!1},this._onAutoSelected=this.onSelect.bind(this,Si.Auto),this._onCustomSelected=this.onSelect.bind(this,Si.Custom)}onSelect(e){this.props.mode!==e&&this.props.onChange(e)}getStyle(){return s.css`
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
    `}autoInput(){return(0,s.jsx)(w.Input,{style:{width:"110px"},css:s.css`
          background-color: var(--light-600);
          border-color: var(--light-600);
          color: var(--black);
          height: 1.625rem;
          border-width: 0;
          padding: 0 0.25rem;
        `,disabled:!0,value:this.props.intl.formatMessage({id:"auto"})})}render(){const{mode:e,intl:t}=this.props,i=t.formatMessage({id:"auto"}),o=t.formatMessage({id:"custom"});return(0,s.jsx)("div",{className:"d-flex",css:this.getStyle()},(0,s.jsx)(w.Dropdown,{className:"auto-dropdown",isOpen:this.state.dropdownOpen,toggle:this.toggleDropdown},(0,s.jsx)(w.DropdownButton,{icon:!0}),(0,s.jsx)(w.DropdownMenu,null,(0,s.jsx)(w.DropdownItem,{onClick:this._onAutoSelected},(0,s.jsx)("span",{css:s.css`width: 1rem;`},e===Si.Auto&&(0,s.jsx)(ft,{size:"s"})),i),(0,s.jsx)(w.DropdownItem,{onClick:this._onCustomSelected},(0,s.jsx)("span",{css:s.css`width: 1rem;`},e===Si.Custom&&(0,s.jsx)(ft,{size:"s"})),o))),e===Si.Auto&&this.autoInput(),e===Si.Custom&&this.props.children)}}const Ci=(0,s.injectIntl)(xi),Ii=e=>{const{title:t,children:i,selected:o,onClick:a}=e,n=(()=>{var e,t,i;const o=(0,y.useTheme)(),a=null===(e=null==o?void 0:o.colors)||void 0===e?void 0:e.palette.primary[600],n=null===(t=null==o?void 0:o.colors)||void 0===t?void 0:t.palette.light[200],l=null===(i=null==o?void 0:o.colors)||void 0===i?void 0:i.black;return s.React.useMemo((()=>s.css`
      width: 100%;
      height:  ${s.polished.rem(50)};
      padding: ${s.polished.rem(8)}  ${s.polished.rem(12)};
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${l};
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
  `),[a,n,l])})();return(0,s.jsx)("div",{css:n,title:t,className:(0,s.classNames)("quick-style-item",{selected:o}),onClick:a},(0,s.jsx)("div",{className:"overlay"}),i)};const ki=[{name:"preventOverflow",options:{altAxis:!0}},{name:"flip",options:{fallbackPlacements:["bottom-end","top-end"]}}],ji=(0,y.styled)(w.Popper)((()=>{var e,t,i,s;const o=(0,y.getTheme2)(),a=null===(e=null==o?void 0:o.colors)||void 0===e?void 0:e.palette.dark[600],n=null===(t=null==o?void 0:o.colors)||void 0===t?void 0:t.palette.dark[800];return`\n    background-color: ${null===(i=null==o?void 0:o.colors)||void 0===i?void 0:i.palette.light[300]};\n    color: ${a};\n    border: 1px solid ${null===(s=null==o?void 0:o.colors)||void 0===s?void 0:s.palette.light[600]};\n    > .popper-box {\n      > .panel-header {\n        color: ${a};\n        .action-btn {\n          color: ${a};\n          &:hover {\n            color: ${n};\n          }\n        }\n      }\n    }\n  `})),Oi=e=>{const{className:t,placement:i="right-start",popperNodeRef:o,onInitResizeHandler:a,onInitDragHandler:n,version:l,modifiers:r}=e,c=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(i[s[o]]=e[s[o]])}return i}(e,["className","placement","popperNodeRef","onInitResizeHandler","onInitDragHandler","version","modifiers"]),p=s.React.useRef(null),d=w.hooks.useForkRef(o,p),[u,m]=w.hooks.useControlled({controlled:l,default:0}),g=s.React.useMemo((()=>[...ki,...null!=r?r:[]]),[r]);return s.React.useEffect((()=>{null==a||a((()=>{var e;null===(e=p.current)||void 0===e||e.classList.add("d-none")}),null,(()=>{var e;m((e=>e+1)),null===(e=p.current)||void 0===e||e.classList.remove("d-none")}))}),[a,m]),s.React.useEffect((()=>{null==n||n((()=>{var e;null===(e=p.current)||void 0===e||e.classList.add("d-none")}),null,(()=>{var e;m((e=>e+1)),null===(e=p.current)||void 0===e||e.classList.remove("d-none")}))}),[n,m]),s.React.createElement(ji,Object.assign({className:(0,s.classNames)("shadow-2",t),modifiers:g,placement:i,popperNodeRef:d,version:u},c))};const Pi=e=>{const{onClose:t,children:i,floating:o}=e,a=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(i[s[o]]=e[s[o]])}return i}(e,["onClose","children","floating"]),n=w.hooks.useTranslate(w.defaultMessages)("quickStyle");return s.React.createElement(Oi,Object.assign({},a,{headerTitle:o?n:"",onHeaderClose:t}),s.React.createElement(s.React.Fragment,null,!o&&s.React.createElement(w.PanelHeader,{className:"px-3 py-2",title:n,onClose:t}),i))},Ni=6,Ti=6;var Ri,Mi;!function(e){e.Both="Both",e.GeocodeService="GeocodeService",e.FeatureService="FeatureService"}(Ri||(Ri={})),function(e){e.GeocodeService="GeocodeService",e.FeatureService="FeatureService"}(Mi||(Mi={}));const Li="FieldName",Ai="FieldValue",Ei=99,Di=1e3,Ui=20,Fi="__",Bi="objectid",$i="address",zi="Default Address",Wi="https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer",Gi="ArcGIS World Geocoding Service";var Vi=h(77756),_i=h(20663);const qi={jimuName:Bi,alias:"OBJECTID",type:s.JimuFieldType.Number,name:Bi},Hi=(e="",t=[])=>{const i={};return null==t||t.forEach(((e,t)=>{i[null==e?void 0:e.jimuName]=e,0===t&&(i[Bi]=qi)})),{label:e,idField:Bi,fields:i}},Ji=(e,t=0)=>{let i=zi;return null==e||e.forEach((s=>{i=t?`${i}${t}`:i,s.jimuName===i&&(i=Ji(e,t+=1))})),i},Zi=e=>null==e?void 0:e.map((e=>e.configId)),Ki=e=>e&&0!==(null==e?void 0:e.length)?`config_${Qi(e)+1}`:"config_0",Qi=e=>{var t;const i=null==e?void 0:e.map((e=>{var t;const i=null===(t=null==e?void 0:e.split("_"))||void 0===t?void 0:t.pop();return i?Number(i):0}));return null===(t=null==i?void 0:i.sort(((e,t)=>t-e)))||void 0===t?void 0:t[0]},Xi=e=>{const t={overrideItemBlockInfo:({itemBlockInfo:e},t)=>({name:ii.TreeItemActionType.RenderOverrideItem,children:[{name:ii.TreeItemActionType.RenderOverrideItemDroppableContainer,children:[{name:ii.TreeItemActionType.RenderOverrideItemDraggableContainer,children:[{name:ii.TreeItemActionType.RenderOverrideItemBody,children:[{name:ii.TreeItemActionType.RenderOverrideItemMainLine,children:[{name:ii.TreeItemActionType.RenderOverrideItemDragHandle},{name:ii.TreeItemActionType.RenderOverrideItemIcon,autoCollapsed:!0},{name:ii.TreeItemActionType.RenderOverrideItemTitle},{name:ii.TreeItemActionType.RenderOverrideItemCommands}]}]}]}]}]})},i=s.css`
    &{
      max-height: 256px;
      overflow-y: auto;
    }
  `,o=(0,y.useTheme)(),{disPlayField:a,useDataSource:n,onFieldChange:l}=e;return(0,s.jsx)("div",{className:"w-100"},(0,s.jsx)(et.FieldSelector,{useDataSources:n?(0,s.Immutable)([n]):(0,s.Immutable)([]),onChange:e=>{l(e,a,!0)},selectedFields:(0,s.Immutable)(null==a?void 0:a.map((e=>null==e?void 0:e.name))),isMultiple:!0,isSearchInputHidden:!1,isDataSourceDropDownHidden:!0,useDropdown:!0,useMultiDropdownBottomTools:!0,types:(0,s.Immutable)([s.JimuFieldType.Number,s.JimuFieldType.String])}),(0,s.jsx)("div",{css:i},(0,s.jsx)(ii.List,Object.assign({size:"sm",className:"mt-2",itemsJson:Array.from(a).map(((e,t)=>({itemStateDetailContent:e,itemKey:`${null==e?void 0:e.name}${t}`,itemStateIcon:et.dataComponentsUtils.getIconFromFieldType(e.type,o),itemStateTitle:e.alias||e.jimuName||e.name,itemStateCommands:[]}))),dndEnabled:!0,onUpdateItem:(e,t)=>{const{itemJsons:i}=t.props,[,s]=i,o=s.map((e=>e.itemStateDetailContent));l(o,a,!0)},isItemFocused:()=>!1},t))))},{useEffect:Yi,useRef:es}=s.React,ts=(0,s.Immutable)([s.AllDataSourceTypes.FeatureLayer,s.AllDataSourceTypes.SceneLayer]),is=e=>{var t;const i=w.hooks.useTranslate(w.defaultMessages,s.defaultMessages),o=es(null),{trigger:a,isOpen:n,id:l,datasourceConfig:r,dsConfigItemIndex:c,popperFocusNode:p,toggle:d,updateConfigForLayerOptions:u,onSettingChange:m,hideIconSetting:g}=e,h=(null==r?void 0:r[c])||(0,s.Immutable)({}),{configId:v,label:f,icon:b,searchFields:y,searchExact:S,displayFields:x,hint:C,useDataSource:I}=h,[k,j]=s.React.useState(null),[O,P]=s.React.useState(f);Yi((()=>{v&&P(f)}),[v]),Yi((()=>{v&&f!==O&&P(f)}),[h]),Yi((()=>{n&&(clearTimeout(o.current),o.current=setTimeout((()=>{const e=document.querySelector(".search-ds-setting-popper .action-close");null==e||e.focus()}),200))}),[n]);const N=(e,t)=>{const i=Zi(null==r?void 0:r.asMutable({deep:!0})),s=v||Ki(i);let o=r?r.asMutable({deep:!0}):[];const a=null==e?void 0:e.getLabel(),n=T(t);t.fields=null==n?void 0:n.map((e=>null==e?void 0:e.jimuName));const l={configId:s,icon:null,label:a,displayLabel:!0,useDataSource:t,displayFields:n,searchFields:n,hint:"",searchServiceType:Mi.FeatureService};return(null==h?void 0:h.configId)?o=o.map((e=>(null==e?void 0:e.configId)===s?l:e)):o.push(l),{dsConfigItem:l,datasourceConfig:o}},T=e=>{var t,i,o,a;const n=s.DataSourceManager.getInstance().getDataSource(null==e?void 0:e.dataSourceId),l=null===(t=n.getLayerDefinition())||void 0===t?void 0:t.displayField,r=null===(i=null==n?void 0:n.getSchema())||void 0===i?void 0:i.fields;let c;const p=[];for(const e in r)(null===(o=null==r?void 0:r[e])||void 0===o?void 0:o.type)!==s.JimuFieldType.Date&&p.push(null==r?void 0:r[e]),(null===(a=null==r?void 0:r[e])||void 0===a?void 0:a.name)===l&&(c=null==r?void 0:r[e]);const d=(null==p?void 0:p.length)>1?p[1]:p[0];return c?[(0,s.Immutable)(c)]:[(0,s.Immutable)(d)]},R=(e,t,i=!1)=>{var o,a;if(!e)return;const n=i?"displayFields":"searchFields";let l=L(e);0===(null==l?void 0:l.length)&&(l=null===(a=null===(o=(0,s.Immutable)(t))||void 0===o?void 0:o.asMutable({deep:!0}))||void 0===a?void 0:a.splice(0,1));const p=null==r?void 0:r.asMutable({deep:!0});let d=null==h?void 0:h.setIn([n],l);d=M(d),null==p||p.splice(c,1,null==d?void 0:d.asMutable({deep:!0})),u((0,s.Immutable)(p))},M=e=>{var t,i,s,o;const a=(null===(i=null===(t=null==e?void 0:e.searchFields)||void 0===t?void 0:t.asMutable({deep:!0}))||void 0===i?void 0:i.map((e=>null==e?void 0:e.jimuName)))||[],n=(null===(o=null===(s=null==e?void 0:e.displayFields)||void 0===s?void 0:s.asMutable({deep:!0}))||void 0===o?void 0:o.map((e=>null==e?void 0:e.jimuName)))||[],l=Array.from(new Set(a.concat(n)));return e.setIn(["useDataSource","fields"],l)},L=e=>null==e?void 0:e.filter((e=>(null==e?void 0:e.type)!==(null===s.JimuFieldType||void 0===s.JimuFieldType?void 0:s.JimuFieldType.Date))),A=(e,t)=>{const i=null==r?void 0:r.asMutable({deep:!0}),o=null==h?void 0:h.setIn(e,t);null==i||i.splice(c,1,null==o?void 0:o.asMutable({deep:!0})),m((0,s.Immutable)(i))},E=(null==h?void 0:h.useDataSource)?[null===(t=null==h?void 0:h.useDataSource)||void 0===t?void 0:t.asMutable({deep:!0})]:[];return(0,s.jsx)(Vi.SidePopper,{className:"search-ds-setting-popper",isOpen:n,position:"right",toggle:d,trigger:a,title:i("setLayerSource"),backToFocusNode:p},(0,s.jsx)("div",{className:"w-100 h-100",css:s.css`overflow: auto;`},(0,s.jsx)(Vi.SettingSection,{style:{paddingTop:0}},(0,s.jsx)(Vi.SettingRow,{flow:"wrap",label:i("data")},(0,s.jsx)(et.DataSourceSelector,{closeDataSourceListOnChange:!0,types:ts,useDataSources:(0,s.Immutable)(E),disableRemove:()=>!0,mustUseDataSource:!0,onChange:e=>{e&&e.length>0?(e=>{s.DataSourceManager.getInstance().createDataSourceByUseDataSource((0,s.Immutable)(e)).then((e=>{const t=(i=e)?i.type===s.DataSourceTypes.SceneLayer?i.getAssociatedDataSource():i:null;var i;return t||Promise.reject(Error("")),t})).then((t=>{const{datasourceConfig:i}=N(t,e);u((0,s.Immutable)(i))}))})(e[0]):(()=>{const e=Zi(null==r?void 0:r.asMutable({deep:!0})),t=v||Ki(e);let i=r?r.asMutable({deep:!0}):[];const o={configId:t,icon:null,label:"......",displayLabel:!0,useDataSource:null,displayFields:[],searchFields:[],hint:"",searchServiceType:Mi.FeatureService};i=i.map((e=>(null==e?void 0:e.configId)===t?o:e)),u((0,s.Immutable)(i))})()},widgetId:l}))),(null==h?void 0:h.configId)&&k&&(0,s.jsx)("div",null,(0,s.jsx)(Vi.SettingSection,null,(0,s.jsx)(Vi.SettingRow,{flow:"wrap",label:i("label")},(0,s.jsx)(w.TextInput,{"aria-label":i("label"),size:"sm",value:O||"",onAcceptValue:e=>{e?(P(null==e?void 0:e.trim()),A(["label"],null==e?void 0:e.trim())):P(f)},onChange:e=>{var t;const i=null===(t=null==e?void 0:e.target)||void 0===t?void 0:t.value;P(i)},className:"w-100",placeholder:i("findAddressOrPlace")}))),!g&&(0,s.jsx)(Vi.SettingSection,null,(0,s.jsx)(Vi.SettingRow,{label:i("searchIcon")},(0,s.jsx)(_i.IconPicker,{icon:b,onChange:e=>{A(["icon"],e)},configurableOption:"none",setButtonUseColor:!1}))),(0,s.jsx)(Vi.SettingSection,{title:i("searchOptions"),role:"group","aria-label":i("searchOptions")},(0,s.jsx)(Vi.SettingRow,{flow:"wrap",label:i("selectSearchFields"),role:"group","aria-label":i("selectSearchFields")},(0,s.jsx)(et.FieldSelector,{useDataSources:I?(0,s.Immutable)([I]):(0,s.Immutable)([]),onChange:e=>{R(e,y)},selectedFields:(0,s.Immutable)(null==y?void 0:y.map((e=>null==e?void 0:e.name))),isMultiple:!0,isSearchInputHidden:!1,isDataSourceDropDownHidden:!0,useDropdown:!0,useMultiDropdownBottomTools:!0,types:(0,s.Immutable)([s.JimuFieldType.Number,s.JimuFieldType.String])}),(0,s.jsx)("div",{className:"mt-2","aria-label":i("exactMatch"),onClick:e=>{A(["searchExact"],!S)}},(0,s.jsx)(w.Checkbox,{title:i("exactMatch"),checked:S,className:"mr-1"}),i("exactMatch"))),(0,s.jsx)(Vi.SettingRow,{flow:"wrap",label:i("displayFields"),role:"group","aria-label":i("displayFields")},(0,s.jsx)(Xi,{disPlayField:x||[],onFieldChange:R,useDataSource:I})),(0,s.jsx)(Vi.SettingRow,{flow:"wrap",label:i("searchHint")},(0,s.jsx)(w.TextInput,{size:"sm",value:C||"",title:C||i("findAddressOrPlace"),"aria-label":i("searchHint"),onChange:e=>{var t;const i=null===(t=null==e?void 0:e.target)||void 0===t?void 0:t.value;A(["hint"],i)},className:"w-100",placeholder:i("findAddressOrPlace")})))),(null==E?void 0:E[0])&&(0,s.jsx)("div",{className:"waiting-for-database"},(0,s.jsx)(s.DataSourceComponent,{useDataSource:(0,s.Immutable)(E[0]),onDataSourceCreated:e=>{j(e)}}))))};var ss=h(52785),os=function(e,t,i,s){return new(i||(i=Promise))((function(o,a){function n(e){try{r(s.next(e))}catch(e){a(e)}}function l(e){try{r(s.throw(e))}catch(e){a(e)}}function r(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(n,l)}r((s=s.apply(e,t||[])).next())}))};const{useEffect:as,useRef:ns}=s.React;var ls;!function(e){e.Pass="Pass",e.NotHttps="Not_Https",e.InvalidURL="Invalid_URL"}(ls||(ls={}));const rs=e=>{const t=w.hooks.useTranslate(w.defaultMessages,s.defaultMessages),i=ns(null),{id:o,trigger:a,toggle:n,isOpen:l,datasourceConfig:r,dsConfigItemIndex:c,popperFocusNode:p,createOutputDs:d,onSettingChange:u,updateConfigForLayerOptions:m,hideIconSetting:g}=e,h=(null==r?void 0:r[c])||(0,s.Immutable)({}),{configId:v,label:f,icon:b,hint:y,outputDataSourceId:S,displayFields:x}=h,[C,I]=s.React.useState(f),[k,j]=s.React.useState(!1),[O,P]=s.React.useState(ls.Pass),[N,T]=s.React.useState(null==h?void 0:h.useUtility),[R,M]=s.React.useState(!1);as((()=>{l&&(clearTimeout(i.current),i.current=setTimeout((()=>{const e=document.querySelector(".search-locator-setting-popper .action-close");null==e||e.focus()}),200))}),[l]),as((()=>{l&&(P(ls.Pass),M(!1),(null==h?void 0:h.useUtility)?(U(null==h?void 0:h.useUtility).then((e=>{A(e).then((e=>{P(null==e?void 0:e.urlCheckResultType)}))})),T(null==h?void 0:h.useUtility),I(null==h?void 0:h.label)):(T(null),I(Gi)))}),[c,v,l]),as((()=>{I(null==h?void 0:h.label)}),[h]);const L=(e,t)=>{let i;return null==e||e.forEach((e=>{var s;(null===(s=null==e?void 0:e.jimuName)||void 0===s?void 0:s.toLocaleLowerCase())===t&&(i=e)})),i||(i=e[0]),[i]},A=e=>os(void 0,void 0,void 0,(function*(){const t=new RegExp("^(([h][t]{2}[p][s])?://)");if(j(!1),!e||!t.test(e))return j(!0),Promise.resolve({urlCheckResultType:ls.NotHttps});try{return(0,s.loadArcGISJSAPIModules)(["esri/request"]).then((t=>{const[i]=t;return i(e,{query:{f:"json"},responseType:"json"}).then((e=>{var t;const i=(null==e?void 0:e.data)||{};if(j(!0),null==i?void 0:i.capabilities){const e=(null==i?void 0:i.singleLineAddressField)||{},s=(null==i?void 0:i.addressFields)||[],o=(null===(t=null==i?void 0:i.capabilities)||void 0===t?void 0:t.split(","))||[],a=null==o?void 0:o.includes("Suggest");return Promise.resolve({urlCheckResultType:ls.Pass,singleLineFieldName:null==e?void 0:e.name,addressFields:s,isSupportSuggest:a})}return Promise.resolve({urlCheckResultType:ls.InvalidURL})}))}))}catch(e){return j(!0),Promise.resolve({urlCheckResultType:ls.InvalidURL})}})),E=(e,t)=>{const i=null==r?void 0:r.asMutable({deep:!0}),o=null==h?void 0:h.setIn(e,t);null==i||i.splice(c,1,null==o?void 0:o.asMutable({deep:!0})),u((0,s.Immutable)(i))},D=()=>{const e=Zi(null==r?void 0:r.asMutable({deep:!0})),t=v||Ki(e);let i=r?r.asMutable({deep:!0}):[];const o={configId:t,icon:null,label:".....",hint:"",useUtility:null,searchServiceType:Mi.GeocodeService,singleLineFieldName:""};i=r.map((e=>(null==e?void 0:e.configId)===t?o:e)),m((0,s.Immutable)(i))},U=e=>os(void 0,void 0,void 0,(function*(){return s.UtilityManager.getInstance().getUrlOfUseUtility(e).then((e=>Promise.resolve(e)))})),F=e=>s.UtilityManager.getInstance().getLabelOfUseUtility(e),B=s.css`
    &>div {
      padding: 0!important;
    }
  `;return(0,s.jsx)(Vi.SidePopper,{className:"search-locator-setting-popper",isOpen:l,position:"right",toggle:n,trigger:a,title:t("setLocatorSource"),backToFocusNode:p},(0,s.jsx)("div",{className:"w-100 h-100",css:s.css`overflow: auto;`},(0,s.jsx)(Vi.SettingSection,{style:{paddingTop:0}},(0,s.jsx)(Vi.SettingRow,{flow:"wrap",label:t("locatorUrl")},(0,s.jsx)("div",{className:"w-100",css:B},(0,s.jsx)(ss.UtilitySelector,{useUtilities:(0,s.Immutable)(N?[N]:[]),onChange:e=>{const t=e[0];T(t||null),t?(M(!0),U(t).then((e=>{A(e).then((e=>{M(!1),P(null==e?void 0:e.urlCheckResultType),(null==e?void 0:e.urlCheckResultType)!==ls.Pass?T(null):((e,t,i,a)=>{const n=Zi(null==r?void 0:r.asMutable({deep:!0})),l=v||Ki(n);let c=r?r.asMutable({deep:!0}):[];const p=F(t),{addressFieldsSchema:u,defaultAddressFieldName:g}=((e=[])=>{const t=null==e?void 0:e.map((e=>({jimuName:null==e?void 0:e.alias,alias:null==e?void 0:e.alias,type:s.JimuFieldType.String,name:null==e?void 0:e.alias}))),i=Ji(t,0),o={jimuName:i,alias:i,type:s.JimuFieldType.String,name:i};return t.unshift(o),{addressFieldsSchema:t,defaultAddressFieldName:i}})(i),f={configId:l,icon:null,label:p,hint:"",useUtility:t,searchServiceType:Mi.GeocodeService,singleLineFieldName:e,isSupportSuggest:a};d&&(f.outputDataSourceId=`${o}_output_${l}`,f.addressFields=u,f.displayFields=L(u,g),f.defaultAddressFieldName=g),(null==h?void 0:h.configId)?c=r.map((e=>(null==e?void 0:e.configId)===l?f:e)):c.push(f),m((0,s.Immutable)(c))})(e.singleLineFieldName,t||null,e.addressFields,null==e?void 0:e.isSupportSuggest)}))}))):D()},showRemove:!1,type:s.SupportedUtilityType.GeoCoding,closePopupOnSelect:!0})),O!==ls.Pass&&k&&(0,s.jsx)("div",{className:"d-flex w-100 align-items-center justify-content-between mt-1"},(0,s.jsx)(w.Alert,{form:"basic",type:"warning",className:"w-100",open:!0,withIcon:!0,text:t("invalidUrlMessage")})))),R&&(0,s.jsx)(w.Loading,null),O===ls.Pass&&v&&N&&(0,s.jsx)("div",null,(0,s.jsx)(Vi.SettingSection,null,(0,s.jsx)(Vi.SettingRow,{flow:"wrap",label:t("label")},(0,s.jsx)(w.TextInput,{"aria-label":t("label"),size:"sm",value:C||"",onChange:e=>{var t;const i=null===(t=null==e?void 0:e.target)||void 0===t?void 0:t.value;I(i)},onAcceptValue:e=>{e?(I(null==e?void 0:e.trim()),E(["label"],null==e?void 0:e.trim())):I(f)},className:"w-100"}))),!g&&(0,s.jsx)(Vi.SettingSection,null,(0,s.jsx)(Vi.SettingRow,{label:t("searchIcon")},(0,s.jsx)(_i.IconPicker,{icon:b,onChange:e=>{E(["icon"],e)},configurableOption:"none",setButtonUseColor:!1}))),(0,s.jsx)(Vi.SettingSection,{title:t("searchOptions"),role:"group","aria-label":t("searchOptions")},S&&(0,s.jsx)(Vi.SettingRow,{flow:"wrap",label:t("displayFields"),role:"group","aria-label":t("displayFields")},(0,s.jsx)(Xi,{disPlayField:x||[],onFieldChange:(e,t,i=!1)=>{var o,a;if(!e)return;0===(null==e?void 0:e.length)&&(e=null===(a=null===(o=(0,s.Immutable)(t))||void 0===o?void 0:o.asMutable({deep:!0}))||void 0===a?void 0:a.splice(0,1));const n=null==r?void 0:r.asMutable({deep:!0}),l=null==h?void 0:h.setIn(["displayFields"],e);null==n||n.splice(c,1,null==l?void 0:l.asMutable({deep:!0})),m((0,s.Immutable)(n))},useDataSource:{dataSourceId:S,mainDataSourceId:S}})),(0,s.jsx)(Vi.SettingRow,{flow:"wrap",label:t("searchHint")},(0,s.jsx)(w.TextInput,{size:"sm","aria-label":t("searchHint"),title:y||t("findAddressOrPlace"),value:y||"",onChange:e=>{var t;const i=null===(t=null==e?void 0:e.target)||void 0===t?void 0:t.value;E(["hint"],i)},className:"w-100",placeholder:t("findAddressOrPlace")}))))))},cs=h(55339),ps=e=>{const t=w.hooks.useTranslate(s.defaultMessages,w.defaultMessages),{className:i,datasourceConfig:o,useDataSources:a,dsConfigItemIndex:n,createOutputDs:l,showSourcePanel:r,showNewSourceItem:c,id:p,onDsConfigIdChange:d,updateConfigForLayerOptions:u,hideSidePopper:m}=e,g=s.ReactRedux.useSelector((e=>{var t,i,s;return null===(s=null===(i=null===(t=null==e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.appConfig)||void 0===i?void 0:i.widgets)||void 0===s?void 0:s[p]})),h={isItemFocused:(e,t)=>{const{itemJsons:[i,s]}=t.props;return r&&s.indexOf(i)===n},overrideItemBlockInfo:({itemBlockInfo:e},t)=>({name:ii.TreeItemActionType.RenderOverrideItem,children:[{name:ii.TreeItemActionType.RenderOverrideItemDroppableContainer,children:[{name:ii.TreeItemActionType.RenderOverrideItemDraggableContainer,children:[{name:ii.TreeItemActionType.RenderOverrideItemBody,children:[{name:ii.TreeItemActionType.RenderOverrideItemMainLine,children:[{name:ii.TreeItemActionType.RenderOverrideItemDragHandle},{name:ii.TreeItemActionType.RenderOverrideItemIcon,autoCollapsed:!0},{name:ii.TreeItemActionType.RenderOverrideItemTitle},{name:ii.TreeItemActionType.RenderOverrideItemDetailToggle},{name:ii.TreeItemActionType.RenderOverrideItemCommands}]}]}]}]}]})};return(0,s.jsx)("div",{className:`w-100 mt-2 ${i||""}`},(0,s.jsx)(ii.List,Object.assign({className:"w-100",itemsJson:Array.from(o).map(((e,i)=>{var a;return{itemStateDetailContent:e,itemKey:`${i}`,itemStateTitle:null==e?void 0:e.label,itemStateIcon:{icon:null===(a=e.icon)||void 0===a?void 0:a.svg},itemStateCommands:[{label:t("deleteOption"),iconProps:()=>({icon:cs,size:12}),action:()=>{(e=>{const t=null==o?void 0:o.asMutable({deep:!0});null==t||t.splice(e,1),u((0,s.Immutable)(t)),m()})(i)}}]}})),dndEnabled:!0,renderOverrideItemDetailToggle:(e,i)=>{var o;const{itemJsons:n}=i.props,[r]=n,c=null==r?void 0:r.itemStateDetailContent,p=(null==c?void 0:c.searchServiceType)===Mi.GeocodeService,d=p?null==c?void 0:c.outputDataSourceId:null===(o=null==c?void 0:c.useDataSource)||void 0===o?void 0:o.dataSourceId,u=!!l&&!((e,t=!1)=>{let i;if(t){const t=(null==g?void 0:g.outputDataSources)||[];i=(null==t?void 0:t.filter((t=>e===t)).length)>0}else i=(null==a?void 0:a.filter((t=>e===t.dataSourceId)).length)>0;return i&&e})(d,p);return u&&d?(0,s.jsx)(w.Alert,{buttonType:"tertiary",form:"tooltip",size:"small",type:"error",text:t("dataSourceCreateError")}):""},onUpdateItem:(e,t)=>{const{itemJsons:i}=t.props,[,o]=i,a=o.map((e=>e.itemStateDetailContent));d(null),u((0,s.Immutable)(a))},onClickItemBody:(e,t)=>{var i;const{itemJsons:[s]}=t.props,o=(null===(i=null==s?void 0:s.itemStateDetailContent)||void 0===i?void 0:i.searchServiceType)===Mi.GeocodeService;d(+s.itemKey,o)}},h)),c&&(0,s.jsx)(ii.List,Object.assign({className:"setting-ui-unit-list-new",itemsJson:[{name:"......"}].map(((e,t)=>({itemStateDetailContent:"item",itemKey:"index",itemStateTitle:"......",itemStateCommands:[]}))),dndEnabled:!1,renderOverrideItemDetailToggle:()=>""},h,{isItemFocused:()=>!0})))},{useSelector:ds}=s.ReactRedux,{useRef:us,useEffect:ms}=s.React,gs=e=>{var t,i,o,a,n,l;const r=w.hooks.useTranslate(w.defaultMessages,s.defaultMessages),c=(0,y.useTheme)(),{datasourceConfig:p,id:d,useDataSources:u,searchDataSettingType:m,createOutputDs:g,hideIconSetting:h,onSettingChange:v,onOutputDsSettingChange:f}=e,S=us(null),x=us(null),[C,I]=s.React.useState(!1),[k,j]=s.React.useState(!1),[O,P]=s.React.useState(!1),[N,T]=s.React.useState(!1),[R,M]=s.React.useState(null),[L,A]=s.React.useState(null),E=ds((e=>{var t,i,s;return null===(s=null===(i=null===(t=null==e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.appConfig)||void 0===i?void 0:i.widgets)||void 0===s?void 0:s[d]})),D=s.css`
    & {
      background-color: ${null===(o=null===(i=null===(t=c.colors)||void 0===t?void 0:t.palette)||void 0===i?void 0:i.secondary)||void 0===o?void 0:o[400]};
    }
  `,U=s.css`
    .data-remind {
      color: ${null===(l=null===(n=null===(a=c.colors)||void 0===a?void 0:a.palette)||void 0===n?void 0:n.dark)||void 0===l?void 0:l[500]};
      font-size: ${s.polished.rem(12)};
    }
  `;ms((()=>{g&&F()}),[p]);const F=()=>{const e=(null==E?void 0:E.outputDataSources)||[],t=(null==p?void 0:p.asMutable({deep:!0}))||[];for(let i;i<(null==t?void 0:t.length)-1;i++){const s=t[i];if((null==s?void 0:s.searchServiceType)===Mi.FeatureService)continue;const o=null==s?void 0:s.outputDataSourceId;if(!(null==e?void 0:e.includes(o))){z(p);break}}},B=()=>{P(!1),j(!1),M(null)},$=e=>{const t=e?!O:!k;if(T(t),t){const e=(null==p?void 0:p.length)||0;M(e),J(e,!0)}e?j(t):P(t)},z=e=>{q(e)&&T(!1);const t=W(e);_(t),g?f&&f(t.outputDataSources,e):v&&v(e)},W=e=>{var t;return null===(t=null==e?void 0:e.asMutable({deep:!0}))||void 0===t?void 0:t.reduce(((e,t)=>{const i=null==t?void 0:t.useDataSource;if(i&&(((e,t)=>{var i;return(null===(i=t.filter((t=>(null==t?void 0:t.dataSourceId)===(null==e?void 0:e.dataSourceId))))||void 0===i?void 0:i.length)>0})(i,null==e?void 0:e.useDataSources)?e.useDataSources=G(i,null==e?void 0:e.useDataSources):null==e||e.useDataSources.push(i)),g){const i=V(t);i&&e.outputDataSources.push(i)}return e}),{useDataSources:[],outputDataSources:[]})},G=(e,t)=>t.map((t=>{if((null==e?void 0:e.dataSourceId)===(null==t?void 0:t.dataSourceId)){const i=(null==e?void 0:e.fields)||[],s=(null==t?void 0:t.fields)||[],o=Array.from(new Set(s.concat(i)));t.fields=o}return t})),V=e=>{let t;return(null==e?void 0:e.searchServiceType)===Mi.GeocodeService&&(t={id:null==e?void 0:e.outputDataSourceId,type:s.DataSourceTypes.FeatureLayer,label:null==e?void 0:e.label,originDataSources:[],isOutputFromWidget:!0,isDataInDataSourceInstance:!1,schema:Hi(null==e?void 0:e.label,null==e?void 0:e.addressFields),geometryType:"esriGeometryPoint"}),t},_=e=>{var t;const i={id:d},s=(0,b.getAppConfigAction)();i.useDataSources=null==e?void 0:e.useDataSources,g&&(i.outputDataSources=null===(t=null==e?void 0:e.outputDataSources)||void 0===t?void 0:t.map((e=>null==e?void 0:e.id))),((e,t,i)=>{var s,o,a;const n=(null===(s=null==e?void 0:e.useDataSources)||void 0===s?void 0:s.asMutable({deep:!0}))||[],l=(null===(o=null==e?void 0:e.outputDataSources)||void 0===o?void 0:o.asMutable({deep:!0}))||[];if((null==n?void 0:n.length)!==(null==t?void 0:t.length)||(null==l?void 0:l.length)!==(null==i?void 0:i.length))return!0;const r=((e,t)=>{var i;if((null==e?void 0:e.length)!==(null==t?void 0:t.length))return!0;const s=[];return null==e||e.forEach((e=>{var i;const o=t.filter((t=>(null==t?void 0:t.dataSourceId)===(null==e?void 0:e.dataSourceId)));(null==o?void 0:o.length)>0&&s.push({dsFields:null==e?void 0:e.fields,preDsFields:null===(i=o[0])||void 0===i?void 0:i.fields})})),(null==s?void 0:s.length)!==(null==e?void 0:e.length)||(null===(i=null==s?void 0:s.filter((e=>{var t,i,s,o;const a=(null===(t=null==e?void 0:e.dsFields)||void 0===t?void 0:t.length)!==(null===(i=null==e?void 0:e.preDsFields)||void 0===i?void 0:i.length),n=(null===(o=null===(s=null==e?void 0:e.dsFields)||void 0===s?void 0:s.filter((t=>{var i;return!(null===(i=null==e?void 0:e.preDsFields)||void 0===i?void 0:i.includes(t))})))||void 0===o?void 0:o.length)>0;return a||n})))||void 0===i?void 0:i.length)>0})(t,n),c=(null===(a=l.filter((e=>!(null==i?void 0:i.includes(e)))))||void 0===a?void 0:a.length)>0;return r||c})(E,i.useDataSources,i.outputDataSources)&&s.editWidget(i).exec()},q=e=>(null==e?void 0:e.length)!==(null==p?void 0:p.length),H=()=>{var e;const t=null===(e=null==p?void 0:p.asMutable({deep:!0}))||void 0===e?void 0:e.filter((e=>(null==e?void 0:e.useDataSource)||(null==e?void 0:e.useUtility)));z((0,s.Immutable)(t))},J=(e,t=!1)=>{let i;i=t?x.current.getElementsByClassName("add-search-btn")[0]:x.current.getElementsByClassName("jimu-tree-item__body")[e],A(i)};return(0,s.jsx)(Vi.SettingSection,{css:U},(0,s.jsx)(Vi.SettingRow,{flow:"wrap"},(0,s.jsx)("span",{className:"w-100 data-remind"},r("addSources"))),(0,s.jsx)(Vi.SettingRow,{flow:"wrap"},(0,s.jsx)("div",{className:"w-100",ref:x},(0,s.jsx)("div",null,(!m||m===Ri.Both)&&(0,s.jsx)(w.Dropdown,{className:"w-100",size:"sm",toggle:()=>{I(!C)},isOpen:C,autoWidth:!0},(0,s.jsx)(w.DropdownButton,{className:"add-search-btn w-100",title:r("newSearchSource"),arrow:!1,icon:!0,type:"primary"},(0,s.jsx)(ti,{className:"mr-1 d-inline-block",autoFlip:!0}),r("newSearchSource")),(0,s.jsx)(w.DropdownMenu,{css:D},(0,s.jsx)(w.DropdownItem,{className:"w-100",onClick:()=>{$(!0)},title:r("layerSource")},r("layerSource")),(0,s.jsx)(w.DropdownItem,{className:"w-100",onClick:()=>{$(!1)},title:r("locatorSource")},r("locatorSource")))),m===Ri.FeatureService&&(0,s.jsx)(w.Button,{type:"primary",className:"w-100",onClick:()=>{$(!0)}},(0,s.jsx)(ti,{className:"mr-1 d-inline-block",autoFlip:!0}),r("layerSource")),m===Ri.GeocodeService&&(0,s.jsx)(w.Button,{type:"primary",className:"w-100",onClick:()=>{$(!1)}},(0,s.jsx)(ti,{className:"mr-1 d-inline-block",autoFlip:!0}),r("locatorSource"))),(0,s.jsx)("div",{className:"w-100",ref:S},(0,s.jsx)(ps,{id:d,dsConfigItemIndex:R,datasourceConfig:p||(0,s.Immutable)([]),showSourcePanel:(()=>{var e;return(null===(e=null==p?void 0:p[R])||void 0===e?void 0:e.searchServiceType)===Mi.GeocodeService?O:k})(),useDataSources:u,onDsConfigIdChange:(e,t)=>{"number"==typeof e?(J(e,!1),R===e?t?(P(!O),j(!1)):(j(!k),P(!1)):(M(e),t?(P(!0),j(!1)):(j(!0),P(!1)))):B()},showNewSourceItem:N,updateConfigForLayerOptions:z,hideSidePopper:B,createOutputDs:g}))),(0,s.jsx)(is,{id:d,dsConfigItemIndex:R,datasourceConfig:p||(0,s.Immutable)([]),useDataSources:u,isOpen:k,onSettingChange:v,trigger:null==S?void 0:S.current,updateConfigForLayerOptions:z,toggle:()=>{j(!k),T(!1),H()},popperFocusNode:L,hideIconSetting:h}),(0,s.jsx)(rs,{id:d,dsConfigItemIndex:R,datasourceConfig:p||(0,s.Immutable)([]),useDataSources:u,isOpen:O,onSettingChange:v,updateConfigForLayerOptions:z,trigger:null==S?void 0:S.current,toggle:()=>{P(!O),T(!1),H()},popperFocusNode:L,hideIconSetting:h,createOutputDs:g})))};var hs=h(51315);const vs=e=>{const t=w.hooks.useTranslate(w.defaultMessages,s.defaultMessages),i=(0,y.useTheme)(),o=s.css`
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
  `,{onSettingChange:a,hideRecentSearchSetting:n}=e,l=e.settingConfig||(0,s.Immutable)({}),{maxSuggestions:r,isUseCurrentLoation:c,isShowRecentSearches:p,recentSearchesMaxNumber:d}=l,[u,m]=s.React.useState(d),[g,h]=s.React.useState(r);(0,hs.useEffect)((()=>{m(d),h(r)}),[l]);const v=(e,t)=>{const i=l.setIn(e,t);a&&a(i)},f=(e,t=1)=>{if(0===(null==e?void 0:e.length))return!0;if(isNaN(Number(e)))return!1;{const i=Number(e);return Number.isInteger(i)&&i>=t}};return(0,s.jsx)("div",{css:o},(0,s.jsx)(Vi.SettingRow,{flow:"wrap",className:"mt-2 checkbox-con",label:t("maximumSuggestions")},(0,s.jsx)(w.TextInput,{size:"sm","aria-label":t("maximumSuggestions"),value:g,onChange:e=>{const t=e.target.value;f(t,0)&&h(t)},onAcceptValue:e=>{e||h(e=r||Ni),f(e,0)&&v(["maxSuggestions"],Number(e))},className:"w-100"})),(0,s.jsx)(Vi.SettingRow,null,(0,s.jsx)("div",{className:"cursor-pointer",onClick:e=>{v(["isUseCurrentLoation"],!c)},"aria-label":t("useCurrentLocation")},(0,s.jsx)(w.Checkbox,{checked:!!c,className:"mr-1",title:t("useCurrentLocation")}),(0,s.jsx)("span",{className:"check-box-label"},t("useCurrentLocation")))),!n&&(0,s.jsx)(Vi.SettingRow,{label:t("recentSearches")},(0,s.jsx)(w.Switch,{checked:p||!1,title:t("recentSearches"),onChange:e=>{v(["isShowRecentSearches"],!p)}})),p&&(0,s.jsx)(Vi.SettingRow,{label:t("maximumNumber")},(0,s.jsx)(w.TextInput,{size:"sm","aria-label":t("maximumNumber"),value:u,onChange:e=>{const t=e.target.value;f(t)&&m(t)},onAcceptValue:e=>{e||m(e=d||Ti),f(e)&&v(["recentSearchesMaxNumber"],Number(e))},style:{width:"50px"}})))},fs=e=>{const t=w.hooks.useTranslate(w.defaultMessages,s.defaultMessages),{hint:i,onSettingChange:o}=e,[a,n]=s.React.useState(i);return(0,hs.useEffect)((()=>{n(i)}),[i]),(0,s.jsx)("div",{className:"general-setting-con"},(0,s.jsx)(Vi.SettingRow,{flow:"wrap",label:t("multySearchHint")},(0,s.jsx)(w.TextInput,{"aria-label":t("multySearchHint"),title:a||t("findAddressOrPlace"),size:"sm",value:a,onChange:e=>{var t;const i=null===(t=null==e?void 0:e.target)||void 0===t?void 0:t.value;n(i)},onAcceptValue:e=>{n(e),o&&o(e)},className:"w-100",placeholder:t("findAddressOrPlace")})))};function bs(e){var t,i;const o=(0,s.getAppStore)().getState().appStateInBuilder,a=o.appRuntimeInfo.currentPageId,n=o.appRuntimeInfo.currentDialogId;let l=o.appRuntimeInfo.dialogInfos||(0,s.Immutable)({});const r=o.appConfig.dialogs,c=o.appConfig.pages,p={canClose:!0,checked:!0,isClosed:!0};return n&&((null===(t=r[n])||void 0===t?void 0:t.isSplash)&&(l=l.set(n,p)),c[a].autoOpenDialogId&&(l=l.set(a+"-"+c[a].autoOpenDialogId,p)),e&&Object.keys(c).forEach((e=>{c[e].autoOpenDialogId===n&&(l=l.set(e+"-"+n,p))}))),(null===(i=r[n])||void 0===i?void 0:i.isSplash)||Object.keys(r).some((e=>{r[e].isSplash&&(l=l.set(e,p))})),e&&l&&Object.keys(l).forEach((t=>{t!==e&&t!==a+"-"+e||(l=l.set(t,{canClose:ys(e),checked:!1,isClosed:!1}))})),l}function ys(e){const t=(0,s.getAppStore)().getState().appStateInBuilder.appConfig.dialogs[e];return!t.interactionType||!t.confirmBeforeClose}function ws(e){const t=(0,s.getAppStore)().getState().appStateInBuilder,i=t.appRuntimeInfo.currentPageId,o=t.appRuntimeInfo.currentDialogId;if(b.builderAppSync.publishChangeSelectionToApp(null),o){const e=bs();b.builderAppSync.publishDialogInfosChangeToApp(e),b.builderAppSync.publishDialogChangeToApp(null)}i!==e&&b.builderAppSync.publishPageChangeToApp(e),b.builderAppSync.publichActivePagePartChangeToApp(s.PagePart.Body)}function Ss(e,t=!1){b.builderAppSync.publishChangeSelectionToApp(null);const i=(0,s.getAppStore)().getState().appStateInBuilder.appRuntimeInfo.currentDialogId;if(t||e!==i){b.builderAppSync.publishDialogChangeToApp(e);const t=bs(e);b.builderAppSync.publishDialogInfosChangeToApp(t),b.builderAppSync.publichActivePagePartChangeToApp(null)}}(0,y.registerStyles)("jimu-ui/advanced/setting-components/",e)})(),v})())}}}));