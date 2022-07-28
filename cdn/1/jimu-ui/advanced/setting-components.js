System.register(["jimu-core","jimu-core/react","jimu-for-builder","jimu-for-builder/templates","jimu-layouts/layout-runtime","jimu-theme","jimu-ui","jimu-ui/advanced/data-source-selector","jimu-ui/advanced/expression-builder","jimu-ui/advanced/resource-selector","jimu-ui/advanced/setting-components","jimu-ui/advanced/utility-selector","jimu-ui/basic/list-tree"],(function(e,t){var s={},o={},i={},n={},a={},l={},r={},c={},p={},d={},u={},m={},g={};return{setters:[function(e){s.CONSTANTS=e.CONSTANTS,s.DataSourceComponent=e.DataSourceComponent,s.DataSourceManager=e.DataSourceManager,s.DataSourceTypes=e.DataSourceTypes,s.DialogMode=e.DialogMode,s.ExpressionPartType=e.ExpressionPartType,s.Immutable=e.Immutable,s.JimuFieldType=e.JimuFieldType,s.LayoutItemType=e.LayoutItemType,s.LayoutType=e.LayoutType,s.LinkType=e.LinkType,s.LoadingType=e.LoadingType,s.MultipleDataSourceComponent=e.MultipleDataSourceComponent,s.OrderRule=e.OrderRule,s.PagePart=e.PagePart,s.PageType=e.PageType,s.React=e.React,s.ReactRedux=e.ReactRedux,s.ReactResizeDetector=e.ReactResizeDetector,s.ServiceManager=e.ServiceManager,s.SessionManager=e.SessionManager,s.SupportedUtilityType=e.SupportedUtilityType,s.UtilityManager=e.UtilityManager,s.WidgetType=e.WidgetType,s.appConfigUtils=e.appConfigUtils,s.cancelablePromise=e.cancelablePromise,s.classNames=e.classNames,s.css=e.css,s.dataSourceUtils=e.dataSourceUtils,s.defaultMessages=e.defaultMessages,s.esri=e.esri,s.getAppStore=e.getAppStore,s.injectIntl=e.injectIntl,s.jsx=e.jsx,s.loadArcGISJSAPIModules=e.loadArcGISJSAPIModules,s.lodash=e.lodash,s.moduleLoader=e.moduleLoader,s.polished=e.polished,s.proxyUtils=e.proxyUtils,s.urlUtils=e.urlUtils},function(e){o.useEffect=e.useEffect},function(e){i.builderAppSync=e.builderAppSync,i.getAppConfigAction=e.getAppConfigAction},function(e){n.getFullScreenPageTemplates=e.getFullScreenPageTemplates,n.getScrollingPageTemplates=e.getScrollingPageTemplates},function(e){a.searchUtils=e.searchUtils,a.utils=e.utils},function(e){l.getBuilderThemeVariables=e.getBuilderThemeVariables,l.getTheme2=e.getTheme2,l.popperPointer=e.popperPointer,l.registerStyles=e.registerStyles,l.styled=e.styled,l.useTheme=e.useTheme,l.withStyles=e.withStyles,l.withTheme=e.withTheme,l.withTheme2=e.withTheme2},function(e){r.AdvancedButtonGroup=e.AdvancedButtonGroup,r.Alert=e.Alert,r.Button=e.Button,r.Card=e.Card,r.CardBody=e.CardBody,r.CardImg=e.CardImg,r.Checkbox=e.Checkbox,r.Collapse=e.Collapse,r.Container=e.Container,r.Dropdown=e.Dropdown,r.DropdownButton=e.DropdownButton,r.DropdownItem=e.DropdownItem,r.DropdownMenu=e.DropdownMenu,r.DropdownToggle=e.DropdownToggle,r.FOCUSABLE_CONTAINER_CLASS=e.FOCUSABLE_CONTAINER_CLASS,r.FormGroup=e.FormGroup,r.Icon=e.Icon,r.Input=e.Input,r.Label=e.Label,r.Link=e.Link,r.Loading=e.Loading,r.LoadingType=e.LoadingType,r.Modal=e.Modal,r.ModalBody=e.ModalBody,r.ModalFooter=e.ModalFooter,r.ModalHeader=e.ModalHeader,r.NumericInput=e.NumericInput,r.PanelHeader=e.PanelHeader,r.Popper=e.Popper,r.Radio=e.Radio,r.Row=e.Row,r.SVG=e.SVG,r.Select=e.Select,r.Switch=e.Switch,r.Tab=e.Tab,r.Tabs=e.Tabs,r.TextInput=e.TextInput,r.Toast=e.Toast,r.ToastType=e.ToastType,r.Tooltip=e.Tooltip,r.defaultMessages=e.defaultMessages,r.getFallbackPlacementsModifier=e.getFallbackPlacementsModifier,r.hooks=e.hooks,r.isOutBoundary=e.isOutBoundary,r.utils=e.utils},function(e){c.AllDataSourceTypes=e.AllDataSourceTypes,c.DataSourceSelector=e.DataSourceSelector,c.FieldSelector=e.FieldSelector,c.dataComponentsUtils=e.dataComponentsUtils},function(e){p.ExpressionInput=e.ExpressionInput,p.ExpressionInputType=e.ExpressionInputType},function(e){d.IconPicker=e.IconPicker},function(e){u.SettingRow=e.SettingRow,u.SettingSection=e.SettingSection,u.SidePopper=e.SidePopper},function(e){m.UtilitySelector=e.UtilitySelector},function(e){g.List=e.List,g.TreeItemActionType=e.TreeItemActionType}],execute:function(){e((()=>{var e={4077:e=>{e.exports='<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.596 6.357c.39-.59.944-1.055 1.595-1.337L15.544.094a1.143 1.143 0 0 1 .91 0L30 5.97V23.66a3.6 3.6 0 0 1-.596 1.983 3.648 3.648 0 0 1-1.595 1.337l-11.353 4.927a1.144 1.144 0 0 1-.91 0L2 26.029V8.34a3.6 3.6 0 0 1 .596-1.984Zm3.419 15.162c.009.016.022.029.037.038l9.594 5.351a.721.721 0 0 0 .705 0l9.144-5.103a.994.994 0 0 0 .37-.356.95.95 0 0 0 .135-.488v-9.89a.852.852 0 0 0-.122-.438.89.89 0 0 0-.331-.32l-9.497-5.3a.106.106 0 0 0-.104 0l-2.415 1.348a.069.069 0 0 0-.026.025.066.066 0 0 0 .026.092l8.947 4.992c.39.218.716.532.941.91.226.378.345.807.345 1.243v5.514c0 .08-.021.157-.062.226a.459.459 0 0 1-.172.165l-5.633 3.145a3.904 3.904 0 0 1-1.899.49c-.666 0-1.32-.169-1.898-.49L8.972 19.81a1.457 1.457 0 0 1-.542-.524 1.394 1.394 0 0 1-.198-.715V11.76a.069.069 0 0 1 .07-.068c.012 0 .024.003.035.009l7.651 4.268c.05.028.092.068.121.117a.313.313 0 0 1 .045.16v2.526c0 .012.003.024.009.034a.068.068 0 0 0 .06.033.073.073 0 0 0 .035-.009l1.972-1.1c.28-.156.511-.38.673-.651.161-.27.247-.577.247-.89v-.964c0-.278-.076-.55-.22-.79-.144-.241-.35-.44-.598-.58L9.65 9.011a.885.885 0 0 0-.86 0L6.052 10.54a.104.104 0 0 0-.052.088v10.842c0 .018.006.035.015.05Z" fill="#000"></path></svg>'},18371:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m6.036 12.157 8.01-8.01a.5.5 0 1 1 .707.707l-8.01 8.01a1 1 0 0 1-1.415 0L1.146 8.682a.5.5 0 1 1 .708-.707l4.182 4.182Z" fill="#000"></path></svg>'},24786:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m1.373 8 2.07-2.071.83.828L2.2 8.828a3.515 3.515 0 0 0 4.97 4.971l2.072-2.071.828.828L8 14.627A4.686 4.686 0 1 1 1.373 8ZM13.799 7.172l-2.071 2.07.828.83L14.627 8A4.686 4.686 0 1 0 8 1.373l-2.071 2.07.828.83L8.828 2.2a3.515 3.515 0 0 1 4.971 4.97Z" fill="#000"></path><path d="M5.515 9.657a.586.586 0 0 0 .828.828l4.142-4.142a.586.586 0 0 0-.828-.828L5.515 9.657Z" fill="#000"></path></svg>'},59788:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.146 4.653a.485.485 0 0 1 .708 0L8 10.24l5.146-5.587a.485.485 0 0 1 .708 0 .538.538 0 0 1 0 .738l-5.5 5.956a.485.485 0 0 1-.708 0l-5.5-5.956a.538.538 0 0 1 0-.738Z" fill="#000"></path></svg>'},60843:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.646 10.354a.5.5 0 0 0 .708-.708L2.707 8h10.586l-1.647 1.646a.5.5 0 0 0 .708.708l2.5-2.5a.5.5 0 0 0 0-.708l-2.5-2.5a.5.5 0 0 0-.708.708L13.293 7H2.707l1.647-1.646a.5.5 0 1 0-.708-.708l-2.5 2.5a.5.5 0 0 0 0 .708l2.5 2.5Z" fill="#000"></path></svg>'},3273:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.653 13.854a.485.485 0 0 1 0-.708L10.24 8 4.653 2.854a.485.485 0 0 1 0-.708.538.538 0 0 1 .738 0l5.956 5.5a.485.485 0 0 1 0 .708l-5.956 5.5a.538.538 0 0 1-.738 0Z" fill="#000"></path></svg>'},96009:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.854 11.347a.486.486 0 0 1-.708 0L8 5.76l-5.146 5.587a.485.485 0 0 1-.708 0 .538.538 0 0 1 0-.738l5.5-5.956a.485.485 0 0 1 .708 0l5.5 5.956a.538.538 0 0 1 0 .738Z" fill="#000"></path></svg>'},18656:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.354 12.354a.5.5 0 0 0-.708-.708L8 13.293V2.707l1.646 1.647a.5.5 0 0 0 .708-.708l-2.5-2.5a.5.5 0 0 0-.708 0l-2.5 2.5a.5.5 0 1 0 .708.708L7 2.707v10.586l-1.646-1.647a.5.5 0 0 0-.708.708l2.5 2.5a.5.5 0 0 0 .708 0l2.5-2.5Z" fill="#000"></path></svg>'},55339:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m8.745 8 6.1 6.1a.527.527 0 1 1-.745.746L8 8.746l-6.1 6.1a.527.527 0 1 1-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 0 1 .746-.746l6.1 6.1 6.1-6.1a.527.527 0 0 1 .746.746L8.746 8Z" fill="#000"></path></svg>'},59216:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.226 1.312c-.403-.404-1.044-.417-1.431-.03L2.49 8.587l-.48 2.674a.637.637 0 0 0 .73.73l2.673-.48 7.305-7.306c.387-.387.374-1.028-.03-1.431l-1.462-1.462Zm-8.113 9.575.32-1.781 4.991-4.992 1.462 1.462-4.992 4.991-1.781.32Zm7.473-6.012 1.402-1.4-1.462-1.463-1.401 1.402 1.461 1.461Z" fill="#000"></path><path d="M1.5 14a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13Z" fill="#000"></path></svg>'},34750:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 0a.5.5 0 0 0-.5.5V7H.5a.5.5 0 0 0 0 1H7v6.5a.5.5 0 0 0 1 0V8h6.5a.5.5 0 0 0 0-1H8V.5a.5.5 0 0 0-.5-.5Z" fill="#000"></path></svg>'},65085:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M4.103 7.873 16 19.25 27.897 7.873c.939-.898 2.46-.898 3.399 0s.939 2.353 0 3.251L17.7 24.127a2.481 2.481 0 0 1-3.399 0L.705 11.124c-.939-.898-.939-2.353 0-3.251s2.46-.898 3.399 0z"></path></svg>'},17720:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 32"><path d="M2.333 4a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm0 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm0 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0z"></path></svg>'},78115:e=>{e.exports='<svg viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.5 13a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1h-4ZM0 8.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5ZM.5 5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1H.5ZM.5 1a.5.5 0 1 1 0-1h15a.5.5 0 0 1 0 1H.5Z" fill="#000"></path></svg>'},70502:e=>{e.exports='<svg viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.5 0a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4ZM0 4.5A.5.5 0 0 1 .5 4h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5ZM.5 8a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1H.5ZM.5 12a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1H.5Z" fill="#000"></path></svg>'},48891:e=>{"use strict";e.exports=s},51315:e=>{"use strict";e.exports=o},23137:e=>{"use strict";e.exports=i},96262:e=>{"use strict";e.exports=n},74758:e=>{"use strict";e.exports=a},34796:e=>{"use strict";e.exports=l},30726:e=>{"use strict";e.exports=r},338:e=>{"use strict";e.exports=c},39342:e=>{"use strict";e.exports=p},20663:e=>{"use strict";e.exports=d},77756:e=>{"use strict";e.exports=u},52785:e=>{"use strict";e.exports=m},59587:e=>{"use strict";e.exports=g}},t={};function h(s){var o=t[s];if(void 0!==o)return o.exports;var i=t[s]={exports:{}};return e[s](i,i.exports,h),i.exports}h.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return h.d(t,{a:t}),t},h.d=(e,t)=>{for(var s in t)h.o(t,s)&&!h.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},h.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),h.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var v={};return(()=>{"use strict";h.r(v),h.d(v,{ByFieldSeriesX:()=>cs,ByFieldSeriesY:()=>ps,CollapsableCheckbox:()=>ce,CollapsableRadio:()=>re,CollapsableToggle:()=>le,DefaultAddress:()=>fs,DefaultGeocodeLabel:()=>bs,DefaultGeocodeURL:()=>ys,DirectionSelector:()=>Kt,JimuLayerViewSelector:()=>B,JimuMapViewSelector:()=>A,LinkSelector:()=>We,LinkSelectorContent:()=>Te,LinkSelectorSidePopper:()=>De,LinkSetting:()=>Me,LinkSettingPopup:()=>Ue,MAX_RECENT_SEARCHES:()=>as,MAX_SUGGESTION:()=>ns,MapWidgetSelector:()=>L,MaxCategories:()=>ds,MaxPieces:()=>us,MaxSeries:()=>ms,NavQuickStyleItem:()=>es,OpenTypes:()=>pe,OutStatisticFieldNameSplit:()=>gs,OutputDsAddress:()=>vs,OutputDsObjectField:()=>hs,PageTemplatePopper:()=>Lt,ProxySetting:()=>ct,ProxySettingPopup:()=>ht,QuickStylePopper:()=>is,RadioGroup:()=>G,SearchDataSetting:()=>Gs,SearchDataType:()=>ls,SearchGeneralSetting:()=>qs,SearchServiceType:()=>rs,SearchSuggestionSetting:()=>_s,SettingCollapse:()=>ne,SettingLayout:()=>t,SettingRow:()=>O,SettingSection:()=>x,SidePopper:()=>Ae,SizeMode:()=>Qt,SizeModeSelector:()=>Yt,SortSetting:()=>Gt,StylePicker:()=>z,TemplateSelector:()=>Et,UnControlledSettingCollapse:()=>ae,WidgetListPopper:()=>Pt,WidgetSelector:()=>M,_JimuMapViewSelector:()=>E,_LinkSelector:()=>ze,_LinkSelectorContent:()=>Ne,_LinkSelectorSidePopper:()=>Ee,_MapWidgetSelector:()=>R,_SidePopper:()=>Le,changeCurrentDialog:()=>Ks,changeCurrentPage:()=>Zs,handelDialogInfos:()=>Hs,proxySettingUtils:()=>s});var e={};h.r(e),h.d(e,{JimuLayerViewSelector:()=>f,LinkSelectorContent:()=>p,ProxySetting:()=>d,ProxySettingPopup:()=>u,RadioGroup:()=>m,SettingCollapse:()=>c,SettingRow:()=>r,SettingSection:()=>l,SidePopper:()=>g,SortSetting:()=>n,StylePicker:()=>a,WidgetSelector:()=>i});var t={};h.r(t),h.d(t,{SettingRow:()=>O,SettingSection:()=>x});var s={};h.r(s),h.d(s,{deleteProxies:()=>Ye,getCreateProxyUrl:()=>st,getDeleteProxyUrl:()=>ot,getNeedProxyDataSources:()=>qe,getNeedProxyItems:()=>_e,getNeedProxyUtilities:()=>He,getProxyJsonFromSourceUrl:()=>Ze,getProxyRootUrl:()=>tt,isRegisteredApp:()=>Qe,isSameProxy:()=>Ke,needToConfigProxy:()=>Xe});var o=h(48891);const i=e=>{const t=e.theme;return o.css`
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
            padding:${o.polished.rem(10)};
            padding-top:${o.polished.rem(8)};
            margin-bottom:10px;
            background:${t.palette.light[500]};
            box-shadow: 0 0 0 2px ${o.polished.rgba(t.white,.3)};
        }
        .option-name-con {
            & {
              display: flex;
              align-items: center;
              margin-bottom:${o.polished.rem(7)};
              width: 100%;
            }
            .option-name {
              font-size: 13px;
              line-height: 13px;
              color: ${t.palette.dark[800]};
              max-width: 87%;
              height: ${o.polished.rem(25)};
              line-height: ${o.polished.rem(25)};
              cursor: pointer;
            }
            .option-name input {
                display:inline-block;
                width: auto;
                max-width: 88%;
                height: 100%;
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
                flex-grow: 1;
                svg {
                    margin: 0;
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
                    width: ${o.polished.rem(140)};
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
  `},r=e=>{const t=e.theme,s=e.flow,i=e.action;return o.css`
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
      margin-bottom: ${"wrap"===s?i?"0":t.sizes[2]:"0"};
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
  `},c=e=>{var t,s,i,n,a,l,r,c;const p=null==e?void 0:e.isOpen,d=null!==(t=null==e?void 0:e.type)&&void 0!==t?t:"default",u=e.theme,m=null===(n=null===(i=null===(s=null==u?void 0:u.colors)||void 0===s?void 0:s.palette)||void 0===i?void 0:i.light)||void 0===n?void 0:n[500],g=null===(r=null===(l=null===(a=null==u?void 0:u.colors)||void 0===a?void 0:a.palette)||void 0===l?void 0:l.light)||void 0===r?void 0:r[800],h=null===(c=null==u?void 0:u.colors)||void 0===c?void 0:c.primary;return"primary"!==d?o.css`
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
    `};function p(e){const t=e.theme,s=t&&t.colors&&t.colors.palette&&t.colors.palette.light[500]||"#ccc",i=t&&t.colors&&t.colors.primary||"blue",n=o.polished.rgba(s,.5);return window.jimuConfig.isInBuilder?o.css`
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
        background-color: ${i} !important;
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
        background-color: ${i} !important;
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
  `}const m=e=>{const t=e.theme,s=e.gutter;return o.css`
    margin-bottom: 0;
    label {
      display: inline-flex;
      align-items: center;
      margin-right: ${s||t.sizes[3]};
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
  `}const f=e=>{const t=e.theme;return o.css`
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
  `};var y=h(23137),b=h(34796),S=h(30726);class w extends o.React.PureComponent{render(){const e=this.props,{className:t,style:s,title:i,role:n,children:a}=e,l=function(e,t){var s={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(s[o[i]]=e[o[i]])}return s}(e,["className","style","title","role","children"]);return o.React.createElement(S.Container,{className:(0,o.classNames)(t,"jimu-widget-setting--section"),style:s,role:n,"aria-label":l["aria-label"]},i&&o.React.createElement(S.Row,{className:"jimu-widget-setting--section-header"},o.React.createElement("h6",{className:"w-100 text-truncate setting-text-level-1"},this.props.title)),a)}}const x=(0,b.withStyles)(w,"SettingSection");var k=h(3273),C=h.n(k);const I=e=>{const{className:t}=e,s=function(e,t){var s={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(s[o[i]]=e[o[i]])}return s}(e,["className"]),i=(0,o.classNames)("jimu-icon jimu-icon-component",t);return o.React.createElement(S.SVG,Object.assign({className:i,src:C()},s))};const j=e=>o.React.createElement("div",{className:"jimu-widget-setting--row-header mb-3"},e.children);class P extends o.React.PureComponent{constructor(){super(...arguments),this.onActionClick=e=>{"drilldown"===e&&this.props&&this.props.onDrillDown&&this.props.onDrillDown()}}render(){const e=this.props,{action:t,flow:s,truncateLabel:i,label:n,role:a,indented:l,className:r,level:c=3}=e,p=function(e,t){var s={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(s[o[i]]=e[o[i]])}return s}(e,["action","flow","truncateLabel","label","role","indented","className","level"]),d="string"==typeof n?n:"",u=(0,o.classNames)(r,"jimu-widget-setting--row","form-group","align-items-center",{"form-inline":"wrap"!==s,"pl-4":l}),m=t?"span":"label",g=n&&o.React.createElement(m,{title:d,className:(0,o.classNames)(`jimu-widget-setting--row-label justify-content-start flex-grow-1 text-break setting-text-level-${c}`,{"w-100 mr-0":"wrap"===s,"text-truncate":i})},n);return o.React.createElement(S.Row,{className:u,role:a,"aria-label":p["aria-label"]},"wrap"===s&&t?o.React.createElement(j,null,"drilldown"===t?o.React.createElement(S.Button,{size:"sm",type:"tertiary",onClick:()=>this.onActionClick("drilldown")},g,o.React.createElement(I,{className:"right-icon"})):void 0):g,this.props.children)}}const O=(0,b.withStyles)(P,"SettingRow");var N=function(e,t,s,o){return new(s||(s=Promise))((function(i,n){function a(e){try{r(o.next(e))}catch(e){n(e)}}function l(e){try{r(o.throw(e))}catch(e){n(e)}}function r(e){var t;e.done?i(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(a,l)}r((o=o.apply(e,t||[])).next())}))};class T extends o.React.PureComponent{constructor(e){super(e),this.onSelectWidget=e=>{this.setState({currentWidget:e})},this.getListItemJSX=e=>(0,o.jsx)(S.Card,{className:(0,o.classNames)("widget-card-item",{"widget-card-selected":this.state.currentWidget&&0===this.state.currentWidget.indexOf(e.uri)}),key:e.title,onClick:()=>this.onSelectWidget(e.uri)},(0,o.jsx)("div",{className:"widget-card-image bg-light-300"},(0,o.jsx)("div",null,(0,o.jsx)(S.CardImg,{top:!0,width:"100%",src:e.image.src,alt:e.image.alt}))),(0,o.jsx)(S.CardBody,{className:"widget-card-content"},(0,o.jsx)("span",{className:"text-capitalize",title:e.title},e.title))),this.state={currentWidget:null,listInfo:[]}}componentDidMount(){this.getListInfo().then((e=>{this.setState({listInfo:e.listInfo})}))}getListInfo(){return N(this,void 0,void 0,(function*(){return yield fetch(`${o.urlUtils.getAbsoluteRootUrl()}widgets/widgets-info.json`).then((e=>N(this,void 0,void 0,(function*(){return yield e.json()})))).then((e=>({listInfo:e.map((e=>{const t={title:"",uri:"",image:{src:""}};return t.title=e.label,t.uri=e.path,t.image.src="../"+e.icon,t}))})))}))}render(){return(0,o.jsx)("div",{className:(0,o.classNames)("w-100 h-100",{[this.props.className]:!!this.props.className})},(0,o.jsx)("div",{className:"component-choose-widget-popup"},(0,o.jsx)(S.Modal,{isOpen:!0,className:"component-choose-widget-popup-modal"},(0,o.jsx)(S.ModalHeader,{className:"component-choose-widget-clear-border component-choose-widget-modal-header"},this.props.title,(0,o.jsx)("span",{className:"choose-widget-popup-close",onClick:this.props.onCancel})),(0,o.jsx)(S.ModalBody,{className:"component-choose-widget-clear-border component-choose-widget-modal-body"},this.state.listInfo.length>0?this.state.listInfo.map((e=>this.getListItemJSX(e))):"Loading..."),(0,o.jsx)(S.ModalFooter,{className:"component-choose-widget-clear-border component-choose-widget-modal-footer"},(0,o.jsx)(S.Button,{onClick:()=>this.props.onOK(this.state.currentWidget)},"OK"),(0,o.jsx)(S.Button,{onClick:this.props.onCancel},"Cancel")))))}}const M=(0,b.withStyles)(T,"WidgetSelector");class R extends o.React.PureComponent{constructor(){super(...arguments),this.noneMapWidget=(0,o.Immutable)({id:"none",label:this.props.intl.formatMessage({id:"none",defaultMessage:S.defaultMessages.none})}),this.getStyle=e=>o.css`
      .component-map-selector{
        width: 100%;
      }

    `,this.onSelect=e=>{const t=e.target.value,s=t===this.noneMapWidget.id?[]:[t];this.props.onSelect&&this.props.onSelect(s)},this.getSelectedMapWidget=()=>{if(!this.props.useMapWidgetIds)return null;const e=this.props.useMapWidgetIds[0];return this.props.mapWidgetJsons.find((t=>t.id===e))||null}}render(){const e=this.props.mapWidgetJsons,t=this.getSelectedMapWidget();return(0,o.jsx)("div",{css:this.getStyle(this.props.theme),className:"w-100"},(0,o.jsx)("div",{className:"component-map-selector"},(0,o.jsx)(S.Select,{size:"sm",value:t?t.id:this.noneMapWidget.id,onChange:this.onSelect,className:""},e.concat(this.noneMapWidget).map(((e,t)=>(0,o.jsx)("option",{key:t,value:e.id},e.label))))))}}const L=o.ReactRedux.connect(((e,t)=>{const s=window&&window.jimuConfig&&window.jimuConfig.isBuilder?e.appStateInBuilder&&e.appStateInBuilder.appConfig:e.appConfig,o=s&&s.widgets;return{mapWidgetJsons:o?Object.keys(o).filter((e=>o[e]&&o[e].manifest&&o[e].manifest.properties&&o[e].manifest.properties.canCreateMapView)).map((e=>o[e])):[]}}))((0,o.injectIntl)((0,b.withTheme)(R))),A=L,E=R;class D extends o.React.PureComponent{getContent(){const e=[];for(let t=0;t<this.props.fromRootDsIds.length;t++)e.push(this.props.fromRootDsIds[t]);return o.React.createElement("div",{className:"w-100"},e.map(((e,t)=>{const s=o.DataSourceManager.getInstance().getDataSource(e),i=s.getLabel(),n=s.getChildDataSources();return o.React.createElement("div",{key:t},o.React.createElement("div",{className:"text-dark-600 pl-2 pr-2",style:{fontSize:"14px"}},i),n.map(((t,s)=>o.React.createElement("div",{key:s,className:"mt-1 mb-1"},o.React.createElement("div",{className:(0,o.classNames)("layerviewselector-ds-item pl-2 pr-2",{"layerviewselector-ds-item-selected":this.props.selectedDsIds&&this.props.selectedDsIds.includes(t.id)}),title:t.getLabel(),onClick:()=>{this.props.onSelect&&this.props.onSelect({rootDataSourceId:e,dataSourceId:t.id})}},t.getLabel())))))})))}render(){return this.props.fromRootDsIds&&0!==this.props.fromRootDsIds.length?o.React.createElement("div",{className:"w-100"},this.getContent()):null}}const U=h(65085);class F extends o.React.PureComponent{constructor(e){super(e),this.toggleList=e=>{this.setState({listOpen:!this.state.listOpen})},this.onResize=e=>{this.setState({width:e})},this.handleChooseLayer=e=>{if(this.props.onSelect)if(e){const t=o.DataSourceManager.getInstance().getDataSource(e.rootDataSourceId),s=o.DataSourceManager.getInstance().getDataSource(e.dataSourceId).id,i=t.getJimuChildId(s)[0];this.props.onSelect((0,o.Immutable)({jimuMapViewId:`${this.props.useMapWidgetIds[0]}-${e.rootDataSourceId}`,jimuLayerId:i,dataSourceId:e&&e.dataSourceId,rootDataSourceId:e&&e.rootDataSourceId}))}else this.props.onSelect((0,o.Immutable)({}));this.setState({listOpen:!1})},this.handleClickNone=()=>{this.props.onSelect&&this.props.onSelect((0,o.Immutable)({})),this.setState({listOpen:!1})},this.getTitle=()=>this.props.jimuLayerViewInfo&&this.props.useMapWidgetIds&&this.props.useMapWidgetIds[0]&&this.props.jimuLayerViewInfo.dataSourceId?(0,o.jsx)(o.DataSourceComponent,{useDataSource:(0,o.Immutable)({dataSourceId:this.props.jimuLayerViewInfo.dataSourceId,mainDataSourceId:this.props.jimuLayerViewInfo.dataSourceId,rootDataSourceId:this.props.jimuLayerViewInfo.rootDataSourceId})},((e,t,s)=>e.getLabel())):this.getNoneString(),this.getContent=()=>{const e=this.props.useMapWidgetIds&&this.props.useMapWidgetIds[0],t=(0,o.getAppStore)().getState().appStateInBuilder.appConfig.widgets[e];return t&&t.useDataSources&&t.useDataSources[0]?(0,o.jsx)("div",{className:"w-100 mt-1 mb-2"},(0,o.jsx)("div",{onClick:()=>{this.handleClickNone()}},(0,o.jsx)("div",{className:"layerviewselector-ds-item pl-2 pr-2"},this.getNoneString())),(0,o.jsx)("div",{className:"w-100 mt-1 mb-1"},(0,o.jsx)("div",{className:"w-100 border border-bottom-0 border-right-0 border-left-0"})),(0,o.jsx)(o.MultipleDataSourceComponent,{useDataSources:t.useDataSources},((e,t)=>{const s=(0,o.Immutable)(Object.keys(e)),i=[];return this.props.jimuLayerViewInfo&&this.props.jimuLayerViewInfo.dataSourceId&&i.push(this.props.jimuLayerViewInfo.dataSourceId),(0,o.jsx)(D,{fromRootDsIds:s,onSelect:e=>{this.handleChooseLayer(e)},selectedDsIds:(0,o.Immutable)(i)})}))):this.getEmptyContent()},this.getNoneString=()=>this.props.intl.formatMessage({id:"none",defaultMessage:"None"}),this.getEmptyContent=()=>(0,o.jsx)("div",{className:"w-100 mt-1 mb-2"},(0,o.jsx)("div",{className:"layerviewselector-ds-item pl-2 pr-2",onClick:()=>{this.handleClickNone()}},this.getNoneString())),this.state={listOpen:!1,width:0}}render(){return(0,o.jsx)("div",{className:(0,o.classNames)("w-100",{[this.props.className]:!!this.props.className})},(0,o.jsx)(S.Dropdown,{size:"sm",toggle:e=>{this.toggleList(e)},isOpen:this.state.listOpen,className:"w-100"},(0,o.jsx)(S.DropdownToggle,{size:"sm",type:"tertiary",className:(0,o.classNames)("h-100 p-0 m-0 d-flex flex-column align-items-center toollist-item","justify-content-between toollist-item-click layerviewselector-input")},(0,o.jsx)("div",{className:"w-100 d-flex justify-content-between align-items-center"},(0,o.jsx)("div",{className:"layerviewselector-input-text ml-2"},this.getTitle()),(0,o.jsx)(S.Icon,{size:8,icon:U}))),(0,o.jsx)(S.DropdownMenu,{className:(0,o.classNames)("ml-0 mr-0 mb-0 mt-1 p-0",{[this.props.className]:!!this.props.className})},(0,o.jsx)("div",{className:"w-100 h-100 layerviewselector-bg"},(0,o.jsx)("div",{style:{width:`${this.state.width}px`}},this.getContent())))),(0,o.jsx)(o.ReactResizeDetector,{handleWidth:!0,onResize:this.onResize}))}}const B=(0,o.injectIntl)((0,b.withStyles)(F,"JimuLayerViewSelector"));class $ extends o.React.PureComponent{constructor(e){super(e),this.onStyleClick=e=>{this.state.selectedValue!==e&&(this.setState({selectedValue:e}),this.props.onChange&&this.props.onChange(e))},this.state={selectedValue:this.props.value}}componentDidUpdate(e,t){e.value!==this.props.value&&this.setState({selectedValue:this.props.value})}render(){const e=this.props.styles;return o.React.createElement("div",{className:(0,o.classNames)("widget-setting--stylepicker w-100",{small:"small"===this.props.size})},Object.keys(e).map(((t,s)=>o.React.createElement("div",{key:t,role:"button",className:(0,o.classNames)("widget-setting--stylepicker-item",{active:t===this.state.selectedValue,"full-width":"full"===e[t].size}),style:{backgroundImage:`url(${e[t].thumbnail})`},onClick:()=>this.onStyleClick(t)}))))}}const z=(0,b.withStyles)($,"StylePicker");class W extends o.React.PureComponent{constructor(e){super(e),this.state={value:this.props.value},this.onRadioButtonChange=e=>{const t=e.target.value;this.state.value!==t&&(this.setState({value:t}),this.props.onChange&&this.props.onChange(t))},W.count++,this.inputName=`setting-radiogroup-${W.count}`}render(){const e=this.props,{options:t,className:s}=e,i=function(e,t){var s={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(s[o[i]]=e[o[i]])}return s}(e,["options","className"]);return o.React.createElement(S.FormGroup,Object.assign({},i,{onChange:this.onRadioButtonChange,className:`setting--button-group ${s}`}),t.map((e=>o.React.createElement(S.Label,{key:e.value},o.React.createElement(S.Radio,{value:e.value,name:this.inputName,checked:this.state.value===e.value}),e.content))))}}W.count=0;const G=(0,b.withStyles)(W,"RadioGroup");var V=h(96009),_=h.n(V),q=h(59788),H=h.n(q);const J=b.styled.div((({isOpen:e,type:t})=>`\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    border-top: ${"primary"===t?"2px":"0px"} solid ${e?"var(--primary)":"var(--light-500)"};\n    background-color: ${"primary"===t?"var(--light-500)":"unset"};\n    .form-label {\n      width: calc(100% - 30px);\n    }\n  `)),Z=e=>{const{className:t,type:s,level:i,isOpen:n,children:a}=e;return o.React.createElement(J,{className:(0,o.classNames)(`collapse-header px-1 setting-text-level-${i}`,t),type:s,isOpen:n},a)},K=b.styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  width: 100%;
  max-width: 100%;
  &.padded {
    max-width: calc(100% - 30px);
  }
`,Q=e=>{const{className:t,leftIcon:s,label:i,padded:n,wrap:a=!1}=e,l="string"==typeof i;return o.React.createElement(K,{className:(0,o.classNames)("collapse-label",t,{padded:n})},s&&o.React.createElement(S.Icon,{className:"mr-2",icon:s}),!l&&i,l&&o.React.createElement("div",{title:i,className:(0,o.classNames)("title",{"text-truncate":!a})},i))},X=e=>{const{disabled:t,activated:s,icon:i=H(),activatedIcon:n=_(),onActivationChange:a}=e,l=s?n:i,r=S.hooks.useTranslate()(s?"collapse":"expand");return o.React.createElement(S.Button,{disabled:t,size:"sm",type:"tertiary",icon:!0,title:r,"aria-label":r,className:"pr-0",onClick:()=>{null==a||a(!s)}},o.React.createElement(S.Icon,{icon:l}))},Y=e=>{const{type:t,level:s,isOpen:i,leftIcon:n,label:a,onRequestOpen:l,onRequestClose:r,rightIcon:c=H(),rightActiveIcon:p=_(),wrapLabel:d}=e;return o.React.createElement(Z,{className:"collapse-normal-header",type:t,level:s,isOpen:i},o.React.createElement(o.React.Fragment,null,o.React.createElement(Q,{wrap:d,leftIcon:n,label:a,padded:!0}),o.React.createElement(X,{activated:i,icon:c,activatedIcon:p,onActivationChange:e=>{e?l&&l():r&&r()}})))},ee=e=>{const{type:t,level:s,isOpen:i,leftIcon:n,label:a,onRequestOpen:l,onRequestClose:r,wrapLabel:c}=e,p=S.hooks.useTranslate()(i?"collapse":"expand");return o.React.createElement(Z,{className:"collapse-toggle-header",type:t,level:s,isOpen:i},o.React.createElement(Q,{wrap:c,leftIcon:n,label:a,padded:!0}),o.React.createElement(S.Switch,{checked:i,onChange:(e,t)=>{t?l&&l():r&&r()},title:p,"aria-label":p}))},te=e=>{const{type:t,level:s,isOpen:i,label:n,rightIcon:a,rightActiveIcon:l,onRequestOpen:r,onRequestClose:c,name:p,checked:d=i,onCheckedChange:u,disableActionForUnchecked:m=!1,wrapLabel:g}=e;return o.React.createElement(Z,{className:"collapse-radio-header",type:t,level:s,isOpen:i},o.React.createElement(S.Label,{centric:!0,check:!0,className:"d-flex align-items-center form-label"},o.React.createElement(S.Radio,{name:p,className:"mr-2",checked:d,"aria-label":n,onChange:(e,t)=>{null==u||u(t)}}),o.React.createElement(Q,{wrap:g,label:n,padded:!0})),o.React.createElement(X,{disabled:m&&!d,activated:i,icon:a,activatedIcon:l,onActivationChange:e=>{e?r&&r():c&&c()}}))},se=e=>{const{type:t,level:s,isOpen:i,label:n,rightIcon:a=H(),rightActiveIcon:l=_(),onRequestOpen:r,onRequestClose:c,name:p,checked:d=i,onCheckedChange:u,disableActionForUnchecked:m=!1,wrapLabel:g}=e;return o.React.createElement(Z,{className:"collapse-checkbox-header",type:t,level:s,isOpen:i},o.React.createElement(S.Label,{centric:!0,check:!0,className:"d-flex align-items-center form-label"},o.React.createElement(S.Checkbox,{name:p,className:"mr-2",checked:d,"aria-label":n,onChange:(e,t)=>{null==u||u(t)}}),o.React.createElement(Q,{wrap:g,label:n,padded:!0})),o.React.createElement(X,{disabled:m&&!d,activated:i,icon:a,activatedIcon:l,onActivationChange:e=>{e?r&&r():c&&c()}}))};const oe=b.styled.div`
    .dividing-line {
      background-color: var(--light-800);
      width: 100%;
      height: 1px;
    }
  `,ie=e=>{const{className:t,bottomLine:s=!1,isOpen:i,children:n,header:a}=e,l=function(e,t){var s={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(s[o[i]]=e[o[i]])}return s}(e,["className","bottomLine","isOpen","children","header"]);return o.React.createElement(oe,{className:(0,o.classNames)("setting-collapse w-100",t)},a,o.React.createElement(S.Collapse,Object.assign({},l,{isOpen:i}),i&&o.React.createElement(o.React.Fragment,null,n,s&&o.React.createElement("div",{className:"dividing-line mt-3"}))))};const ne=e=>{const{type:t="default",className:s,leftIcon:i,label:n,onRequestOpen:a,onRequestClose:l,rightIcon:r=H(),rightActiveIcon:c=_(),level:p=0,defaultIsOpen:d,isOpen:u,wrapLabel:m}=e,g=function(e,t){var s={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(s[o[i]]=e[o[i]])}return s}(e,["type","className","leftIcon","label","onRequestOpen","onRequestClose","rightIcon","rightActiveIcon","level","defaultIsOpen","isOpen","wrapLabel"]),[h,v]=S.hooks.useControlled({controlled:u,default:u||d}),f=o.React.createElement(Y,{type:t,isOpen:h,level:p,leftIcon:i,wrapLabel:m,label:n,rightIcon:r,rightActiveIcon:c,onRequestOpen:()=>{v(!0),null==a||a()},onRequestClose:()=>{v(!1),null==l||l()}});return o.React.createElement(ie,Object.assign({className:(0,o.classNames)("setting-collapse w-100",s),header:f,isOpen:h},g))},ae=ne;const le=e=>{const{type:t="default",className:s,leftIcon:i,label:n,onRequestOpen:a,onRequestClose:l,level:r=0,defaultIsOpen:c,isOpen:p,wrapLabel:d}=e,u=function(e,t){var s={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(s[o[i]]=e[o[i]])}return s}(e,["type","className","leftIcon","label","onRequestOpen","onRequestClose","level","defaultIsOpen","isOpen","wrapLabel"]),[m,g]=S.hooks.useControlled({controlled:p,default:p||c}),h=o.React.createElement(ee,{type:t,isOpen:m,level:r,leftIcon:i,wrapLabel:d,label:n,onRequestOpen:()=>{g(!0),null==a||a()},onRequestClose:()=>{g(!1),null==l||l()}});return o.React.createElement(ie,Object.assign({className:(0,o.classNames)("collapse-toggle w-100",s),header:h,isOpen:m},u))};const re=e=>{const{type:t="default",className:s,leftIcon:i,label:n,defaultIsOpen:a,isOpen:l,onRequestOpen:r,onRequestClose:c,rightIcon:p,rightActiveIcon:d,level:u=0,name:m,checked:g,onCheckedChange:h,disableActionForUnchecked:v,wrapLabel:f}=e,y=function(e,t){var s={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(s[o[i]]=e[o[i]])}return s}(e,["type","className","leftIcon","label","defaultIsOpen","isOpen","onRequestOpen","onRequestClose","rightIcon","rightActiveIcon","level","name","checked","onCheckedChange","disableActionForUnchecked","wrapLabel"]),[b,w]=S.hooks.useControlled({controlled:l,default:l||a}),x=o.React.createElement(te,{type:t,isOpen:b,level:u,label:n,wrapLabel:f,rightIcon:p,rightActiveIcon:d,onRequestOpen:()=>{w(!0),null==r||r()},onRequestClose:()=>{w(!1),null==c||c()},name:m,checked:g,disableActionForUnchecked:v,onCheckedChange:h});return o.React.createElement(ie,Object.assign({className:(0,o.classNames)("collapse-radio w-100",s),header:x,isOpen:b},y))};const ce=e=>{const{type:t="default",className:s,leftIcon:i,label:n,defaultIsOpen:a,isOpen:l,onRequestOpen:r,onRequestClose:c,rightIcon:p,rightActiveIcon:d,level:u=0,defaultChecked:m,name:g,checked:h,openForCheck:v=!1,closeForUncheck:f,onCheckedChange:y,disableActionForUnchecked:b,wrapLabel:w}=e,x=function(e,t){var s={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(s[o[i]]=e[o[i]])}return s}(e,["type","className","leftIcon","label","defaultIsOpen","isOpen","onRequestOpen","onRequestClose","rightIcon","rightActiveIcon","level","defaultChecked","name","checked","openForCheck","closeForUncheck","onCheckedChange","disableActionForUnchecked","wrapLabel"]),[k,C]=S.hooks.useControlled({controlled:l,default:l||a}),[I,j]=S.hooks.useControlled({controlled:h,default:h||m}),P=()=>{C(!0),null==r||r()},O=()=>{C(!1),null==c||c()},N=o.React.createElement(se,{type:t,isOpen:k,level:u,wrapLabel:w,label:n,rightIcon:p,rightActiveIcon:d,onRequestOpen:P,onRequestClose:O,name:g,checked:I,disableActionForUnchecked:b,onCheckedChange:e=>{e?v&&P():f&&O(),j(e),y(e)}});return o.React.createElement(ie,Object.assign({className:(0,o.classNames)("collapse-checkbox w-100",s),header:N,isOpen:k},x))};var pe;!function(e){e.CurrentWindow="_self",e.TopWindow="_top",e.NewWindow="_blank"}(pe||(pe={}));class de extends o.React.PureComponent{constructor(){super(...arguments),this.itemOnClick=e=>{this.props.onClick(e),this.setState({selectedItemName:e.name})}}getListContent(){return this.props.datas.map(((e,t)=>o.React.createElement("div",{onClick:()=>this.itemOnClick(e),key:t,className:(0,o.classNames)("link-selector-list-item btn w-100 border text-left border-bottom-0 rounded-0 text-truncate",{itemselected:this.props.linkParam.value===e.id})},e.name)))}render(){const e=this.props.datas.find((e=>this.props.linkParam.value===e.id)),t=e&&e.id;return o.React.createElement("div",{className:"link-selector-list w-100"},o.React.createElement(S.Select,{value:t,className:"w-100",onChange:e=>this.itemOnClick(this.props.datas.find((t=>t.id===e.target.value))),"aria-label":this.props["aria-label"],size:"sm"},this.props.datas.map(((e,t)=>o.React.createElement("option",{key:t,value:e.id},e.name)))))}}class ue extends o.React.PureComponent{constructor(){super(...arguments),this.currentPage={id:o.CONSTANTS.CURRENT_PAGE,name:this.props.intl.formatMessage({id:"currentPage",defaultMessage:S.defaultMessages.currentPage})},this.getInitLinkParam=()=>{const e=this.props.appConfig.pageStructure;if(!e||e.length<1)return(0,o.Immutable)({value:""});if(this.props.originLinkParam.linkType!==o.LinkType.Page){const e=this.getPageData();return(0,o.Immutable)({linkType:o.LinkType.Page,value:e&&e.some((e=>"default"===e.id))?"default":e&&e[0]&&e[0].id,openType:!this.props.openTypes||this.props.openTypes.includes(pe.CurrentWindow)?pe.CurrentWindow:this.props.openTypes[0]})}return this.props.originLinkParam},this.getPageData=()=>{const e=this.props.appConfig&&this.props.appConfig.pages,t=e&&Object.keys(e).filter((t=>e[t].type===o.PageType.Normal));let s=[this.currentPage];return t&&(s=s.concat(t.map((t=>({id:t,name:e[t].label}))))),s},this.setLinkParam=e=>{let t=this.props.linkParam;t=t.set("value",e.id),this.props.onLinkParamChange(t)}}componentDidMount(){const e=this.getInitLinkParam();this.props.onLinkParamChange(e)}render(){const e=this.getPageData();return o.React.createElement("div",{className:"w-100"},o.React.createElement("div",{className:"mb-12 option-name"},this.props.intl.formatMessage({id:"chooseAPage",defaultMessage:S.defaultMessages.chooseAPage})),o.React.createElement("div",null,o.React.createElement(de,{linkParam:this.props.linkParam,datas:e,onClick:this.setLinkParam,"aria-label":this.props.intl.formatMessage({id:"chooseAPage",defaultMessage:S.defaultMessages.chooseAPage})})))}}class me extends o.React.PureComponent{constructor(){super(...arguments),this.getInitLinkParam=()=>{const e=this.props.appConfig.dialogs;if(!e||Object.keys(e).length<1)return(0,o.Immutable)({linkType:o.LinkType.Dialog,value:""});if(this.props.originLinkParam.linkType!==o.LinkType.Dialog){const e=this.getDialogData();return(0,o.Immutable)({linkType:o.LinkType.Dialog,value:e&&e.some((e=>"default"===e.id))?"default":e&&e[0]&&e[0].id})}return this.props.originLinkParam},this.getDialogData=()=>{var e,t;const s=this.props.appConfig&&this.props.appConfig.dialogs,i=(null===(e=s&&Object.values(s).filter((e=>(null==e?void 0:e.mode)===o.DialogMode.Fixed)))||void 0===e?void 0:e.sort(((e,t)=>e.index-t.index)))||[],n=(null===(t=s&&Object.values(s).filter((e=>(null==e?void 0:e.mode)===o.DialogMode.Anchored)))||void 0===t?void 0:t.sort(((e,t)=>e.index-t.index)))||[],a=i.concat(n).map((e=>e.id));return a&&a.filter((e=>!s[e].isSplash)).map((e=>({id:e,name:s[e].label})))},this.setLinkParam=e=>{let t=this.props.linkParam;t=t.set("value",e.id),this.props.onLinkParamChange(t)}}componentDidMount(){const e=this.getInitLinkParam();this.props.onLinkParamChange(e)}componentDidUpdate(e){if(e.appConfig!==this.props.appConfig){const e=this.getInitLinkParam();this.props.onLinkParamChange(e)}}render(){const e=this.getDialogData();return o.React.createElement("div",{className:"w-100"},o.React.createElement("div",{className:"mb-12 option-name"},this.props.intl.formatMessage({id:"chooseADialog",defaultMessage:S.defaultMessages.chooseADialog})),o.React.createElement("div",null,e&&e.length>0&&o.React.createElement(de,{linkParam:this.props.linkParam,datas:e,onClick:this.setLinkParam,"aria-label":this.props.intl.formatMessage({id:"chooseADialog",defaultMessage:S.defaultMessages.chooseADialog})})))}}var ge=h(74758);class he extends o.React.PureComponent{constructor(){super(...arguments),this.getInitLinkParam=()=>{const e=ge.searchUtils.getBlockAnchorPointsInPage(ge.utils.getAppConfig(),ge.utils.getCurrentPageId(),ge.utils.getCurrentSizeMode());if(!e||e.length<1)return(0,o.Immutable)({linkType:o.LinkType.Block,value:""});if(this.props.originLinkParam.linkType!==o.LinkType.Block){const e=this.getBlockData();return(0,o.Immutable)({linkType:o.LinkType.Block,value:e&&e.some((e=>"default"===e.id))?"default":e&&e[0]&&e[0].id})}return this.props.originLinkParam},this.getBlockData=()=>ge.searchUtils.getBlockAnchorPointsInPage(ge.utils.getAppConfig(),ge.utils.getCurrentPageId(),ge.utils.getCurrentSizeMode()).map((e=>({id:e.id,name:e.label}))),this.setLinkParam=e=>{let t=this.props.linkParam;t=t.set("value",e.id),this.props.onLinkParamChange(t)}}componentDidMount(){const e=this.getInitLinkParam();this.props.onLinkParamChange(e)}render(){const e=this.getBlockData();return o.React.createElement("div",{className:"w-100"},o.React.createElement("div",{className:"mb-12 option-name"},this.props.intl.formatMessage({id:"jumpTo",defaultMessage:S.defaultMessages.jumpTo})),o.React.createElement("div",null,e&&e.length>0&&o.React.createElement(de,{linkParam:this.props.linkParam,datas:e,onClick:this.setLinkParam,"aria-label":this.props.intl.formatMessage({id:"jumpTo",defaultMessage:S.defaultMessages.jumpTo})})))}}class ve extends o.React.PureComponent{constructor(){super(...arguments),this.screenGroupLabelStyle={marginLeft:"-20px"},this.getInitLinkParam=()=>{const e=this.getScreenData();return!e||e.length<1?(0,o.Immutable)({linkType:o.LinkType.Screen,value:""}):this.props.originLinkParam.linkType!==o.LinkType.Screen?(0,o.Immutable)({linkType:o.LinkType.Screen,value:e[0].screens[0].id}):this.props.originLinkParam},this.getScreenData=()=>ge.searchUtils.getScreenAnchorPointsInPage(ge.utils.getAppConfig(),ge.utils.getCurrentPageId(),ge.utils.getCurrentSizeMode()),this.setLinkParam=e=>{let t=this.props.linkParam;t=t.set("value",e.target.value),this.props.onLinkParamChange(t)}}componentDidMount(){const e=this.getInitLinkParam();this.props.onLinkParamChange(e)}render(){var e;const t=this.getScreenData(),s=[];return t.forEach((e=>{s.push(o.React.createElement("option",{value:e.id,key:e.id,disabled:!0,style:this.screenGroupLabelStyle},e.label)),e.screens.forEach(((t,i)=>s.push(o.React.createElement("option",{value:t.id,key:`${e.id}-${i}`},t.label))))})),o.React.createElement("div",{className:"w-100"},o.React.createElement("div",{className:"mb-12 option-name"},this.props.intl.formatMessage({id:"jumpTo",defaultMessage:S.defaultMessages.jumpTo})),o.React.createElement("div",null,t.length>0&&o.React.createElement(S.Select,{value:null===(e=this.props.linkParam)||void 0===e?void 0:e.value,className:"w-100",onChange:this.setLinkParam,size:"sm","aria-label":this.props.intl.formatMessage({id:"jumpTo",defaultMessage:S.defaultMessages.jumpTo})},s)))}}const fe=e=>{const{className:t}=e,s=function(e,t){var s={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(s[o[i]]=e[o[i]])}return s}(e,["className"]),i=(0,o.classNames)("jimu-icon jimu-icon-component",t);return o.React.createElement(S.SVG,Object.assign({className:i,src:H()},s))};const ye=e=>{const{className:t}=e,s=function(e,t){var s={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(s[o[i]]=e[o[i]])}return s}(e,["className"]),i=(0,o.classNames)("jimu-icon jimu-icon-component",t);return o.React.createElement(S.SVG,Object.assign({className:i,src:_()},s))};class be extends o.React.PureComponent{constructor(){super(...arguments),this.onCollapseClick=e=>{e.stopPropagation(),e.nativeEvent.stopImmediatePropagation(),this.setState({collapse:!this.state.collapse})}}componentWillMount(){this.setState({collapse:this.props.isOpen})}render(){return o.React.createElement("div",{className:(0,o.classNames)("w-100",this.props.className)},o.React.createElement("div",{title:this.props.title,style:{overflow:"hidden"},className:"w-100 btn pb-2 pr-2 d-flex justify-content-between"},o.React.createElement("div",null,this.props.title),o.React.createElement(S.Button,{type:"tertiary",size:"sm",className:"collapse-btn py-0 jimu-outline-inside pr-0",onClick:this.onCollapseClick},this.state.collapse?o.React.createElement(fe,{size:"s"}):o.React.createElement(ye,{size:"s"}))),o.React.createElement(S.Collapse,{isOpen:this.state.collapse,"aria-label":this.props.title},this.props.children))}}function Se(e,t){const s=t&&t.pages;return s&&s[e]&&s[e].type===o.PageType.Normal&&ge.searchUtils.getContentsInPageBody(t,e,o.LayoutItemType.Section,ge.utils.getCurrentSizeMode())||[]}function we(e,t){if(!e)return[];const s=xe(e,t);if(s&&s.length>0){let e=[],o=[];return s.forEach((s=>{e=e.concat(ke(s,t).map((e=>e.id)))})),e.length>0&&e.forEach((e=>{o=o.concat(we(e,t))})),e.concat(o)}return[]}function xe(e,t){return ge.searchUtils.getContentsInView(t,e,o.LayoutItemType.Section,ge.utils.getCurrentSizeMode())||[]}function ke(e,t){const s=t.sections[e].views,o=[];for(let e=0;e<s.length;e++)o.push({id:s[e],label:t.views[s[e]].label});return o}class Ce extends o.React.PureComponent{constructor(e){super(e),this.noScroll="Do not scroll",this.getInitLinkParam=()=>this.props.originLinkParam.linkType===o.LinkType.View?this.props.originLinkParam:(0,o.Immutable)({linkType:o.LinkType.View,openType:!this.props.openTypes||this.props.openTypes.includes(pe.CurrentWindow)?pe.CurrentWindow:this.props.openTypes[0],value:""}),this.pageChange=e=>{let t=this.props.linkParam;t=t.set("value",e.target.value),this.props.onLinkParamChange(t)},this.viewChange=(e,t)=>{let s=[];s=Object.assign(s,this.state.viewLinkParamArr),s[0]||(s[0]=this.getDefaultPageId());const o=this.props.appConfig.sections[t].views;let i=s.filter((t=>o.some((e=>e===t))&&t!==e)),n=[];const a=s.indexOf(e);if(a>-1?i=i.concat(s[a]):n=n.concat(e),i&&i.length>0){let e=[];i.forEach((t=>{e=e.concat(we(t,this.props.appConfig))})),i=i.concat(e)}s=s.filter((e=>!i.some((t=>t===e)))),s=s.concat(n);let l=this.props.linkParam;l=l.set("value",s.join(",")),this.props.onLinkParamChange(l)},this.viewRemove=e=>{let t=[];t=Object.assign(t,this.state.viewLinkParamArr),t[0]||(t[0]=this.getDefaultPageId());const s=we(e,this.props.appConfig).concat(e);t=t.slice(0,1).concat(t.slice(1).filter((e=>!s.some((t=>t===e)))));let o=this.props.linkParam;o=o.set("value",t.join(",")),this.props.onLinkParamChange(o,!0)},this.onScrollToViewChange=e=>{this.setState({scrollToViewId:e})},this.getDefaultPageId=()=>{const e=this.props.appConfig&&this.props.appConfig.pages,t=e&&Object.keys(e).filter((e=>Se(e,this.props.appConfig).length>0));return t&&t.find((t=>e[t].isDefault))||(null==t?void 0:t[0])},this.getSelectedVeiwIds=()=>this.state.viewLinkParamArr.slice(1),this.state={viewLinkParamArr:[],scrollToViewId:this.noScroll}}componentDidMount(){const e=this.getInitLinkParam(),{value:t,linkType:s}=e;t&&s===o.LinkType.View?this.setState({viewLinkParamArr:t.split(",")}):this.setState({viewLinkParamArr:[]}),this.props.onLinkParamChange(e)}static getDerivedStateFromProps(e,t){const{value:s,linkType:i}=e.linkParam;return s&&i===o.LinkType.View?Object.assign(Object.assign({},t),{viewLinkParamArr:s.split(",")}):Object.assign(Object.assign({},t),{viewLinkParamArr:[]})}render(){var e,t;if(!this.props.appConfig)return null;const s={};Object.keys(this.props.appConfig.pages).forEach((e=>{this.props.appConfig.pages[e]&&this.props.appConfig.pages[e].type===o.PageType.Normal&&(s[e]=Object.assign({},this.props.appConfig.pages[e]))}));const i=this.state.viewLinkParamArr[0]||this.getDefaultPageId();return s[i]?o.React.createElement("div",{className:"w-100"},o.React.createElement("div",{className:"mb-12 option-name"},this.props.intl.formatMessage({id:"chooseViews",defaultMessage:S.defaultMessages.chooseViews})),o.React.createElement("div",null,o.React.createElement(S.Select,{value:i,onChange:this.pageChange,className:"w-100 mb-3",size:"sm"},Object.keys(s).filter((e=>Se(e,this.props.appConfig).length>0)).map(((e,t)=>o.React.createElement("option",{key:t,value:s[e].id},s[e].label)))),o.React.createElement("div",{className:(0,o.classNames)("choose-view",{"mb-3":(null===(e=Se(i,this.props.appConfig))||void 0===e?void 0:e.length)>0})},Se(i,this.props.appConfig).map((e=>o.React.createElement(Ie,{sections:this.props.appConfig.sections,sectionId:e,viewsInfo:ke(e,this.props.appConfig),viewLinkParamArr:this.state.viewLinkParamArr,viewChange:this.viewChange,viewRemove:this.viewRemove,key:e})))),o.React.createElement("div",{className:(0,o.classNames)("choose-view",{"mb-3":(null===(t=this.getSelectedVeiwIds())||void 0===t?void 0:t.length)>0})},this.getSelectedVeiwIds().map((e=>xe(e,this.props.appConfig).map((e=>o.React.createElement(Ie,{sections:this.props.appConfig.sections,sectionId:e,viewsInfo:ke(e,this.props.appConfig),viewLinkParamArr:this.state.viewLinkParamArr,viewChange:this.viewChange,viewRemove:this.viewRemove,key:e})))))))):null}}class Ie extends o.React.PureComponent{constructor(e){super(e),this.onViewChange=e=>{this.setState({viewId:e}),this.props.viewChange(e,this.props.sectionId)},this.state={viewId:null}}componentWillUnmount(){this.props.viewRemove(this.state.viewId)}render(){return o.React.createElement(be,{className:"mb-3 choose-view",title:this.props.sections[this.props.sectionId]&&this.props.sections[this.props.sectionId].label,isOpen:!0,key:this.props.sectionId},o.React.createElement("div",{className:"link-selector-list w-100 view-border border-top-0 border-left-0 border-right-0 rounded-0",role:"menu"},this.props.viewsInfo.map(((e,t)=>o.React.createElement(S.Button,{role:"menuitem",onClick:()=>this.onViewChange(e.id),key:t,className:(0,o.classNames)("jimu-outline-inside link-selector-list-item btn w-100 view-border px-2 pt-1 text-left border-bottom-0 rounded-0 text-truncate",{"item-common":!this.props.viewLinkParamArr.includes(e.id)},{itemselected:this.props.viewLinkParamArr.includes(e.id)}),title:e.label,"aria-checked":this.props.viewLinkParamArr.includes(e.id)},e.label)))))}}var je=h(39342);const Pe=(0,o.Immutable)([je.ExpressionInputType.Static,je.ExpressionInputType.Attribute,je.ExpressionInputType.Expression]);class Oe extends o.React.PureComponent{constructor(e){var t;super(e),this.getInitLinkParam=()=>this.props.originLinkParam.linkType===o.LinkType.WebAddress?this.props.originLinkParam:(0,o.Immutable)({linkType:o.LinkType.WebAddress,openType:!this.props.openTypes||this.props.openTypes.includes(pe.NewWindow)?pe.NewWindow:this.props.openTypes[0],value:""}),this.webAddressInputChange=e=>{const t=e;let s=this.props.linkParam;s=s.set("value",t).set("expression",null),this.props.onLinkParamChange(s)},this.webAddressExpressionChange=e=>{let t=this.props.linkParam;t=t.set("expression",e).set("value",""),this.props.onLinkParamChange(t),this.closeExpPopup()},this.openExpPopup=()=>this.setState({isExpPopupOpen:!0}),this.closeExpPopup=()=>this.setState({isExpPopupOpen:!1}),this.getDefaultExp=()=>({name:"Expression",parts:[{type:o.ExpressionPartType.String,exp:'"https://"'}]}),this.onUrlChange=e=>{this.setState({url:e.target.value})},this.state={isExpPopupOpen:!1,url:(null===(t=this.props.linkParam)||void 0===t?void 0:t.linkType)===o.LinkType.WebAddress?this.props.linkParam.value:""}}componentDidMount(){const e=this.getInitLinkParam();this.props.onLinkParamChange(e)}componentDidUpdate(e){var t,s,i;(null===(t=e.linkParam)||void 0===t?void 0:t.value)!==(null===(s=this.props.linkParam)||void 0===s?void 0:s.value)&&this.setState({url:(null===(i=this.props.linkParam)||void 0===i?void 0:i.linkType)===o.LinkType.WebAddress?this.props.linkParam.value:this.state.url})}render(){return o.React.createElement("div",{className:"w-100"},o.React.createElement("div",{className:"mb-12 option-name"},this.props.intl.formatMessage({id:"url",defaultMessage:S.defaultMessages.url})),o.React.createElement("div",null,this.props.useDataSources&&this.props.useDataSources.length>0?o.React.createElement(je.ExpressionInput,{useDataSources:this.props.useDataSources,onChange:this.webAddressExpressionChange,expression:this.props.linkParam&&this.props.linkParam.expression||this.getDefaultExp(),closeExpPopup:this.closeExpPopup,openExpPopup:this.openExpPopup,isExpPopupOpen:this.state.isExpPopupOpen,types:Pe,widgetId:this.props.widgetId,"aria-label":this.props.intl.formatMessage({id:"url",defaultMessage:S.defaultMessages.url})}):o.React.createElement(S.TextInput,{type:"url",value:this.state.url,onChange:this.onUrlChange,className:"w-100",placeholder:this.props.intl.formatMessage({id:"websitePlaceholder",defaultMessage:S.defaultMessages.websitePlaceholder}),spellCheck:!1,onAcceptValue:this.webAddressInputChange,"aria-label":this.props.intl.formatMessage({id:"url",defaultMessage:S.defaultMessages.url})})))}}class Ne extends o.React.PureComponent{constructor(e){if(super(e),this.getLinkTypeContent=()=>{if(this.props.isLinkPageSetting)return(0,o.jsx)(S.Select,{value:this.state.linkParam.linkType,size:"sm",onChange:this.linkTypeChange,className:"w-100","aria-label":this.props.intl.formatMessage({id:"linkTo",defaultMessage:S.defaultMessages.linkTo})},(0,o.jsx)("option",{value:o.LinkType.WebAddress},this.props.intl.formatMessage({id:"url",defaultMessage:S.defaultMessages.url})));{const e=this.getHiddenLinks();return(0,o.jsx)(S.Select,{value:this.state.linkParam.linkType,size:"sm",onChange:this.linkTypeChange,className:"w-100","aria-label":this.props.intl.formatMessage({id:"linkTo",defaultMessage:S.defaultMessages.linkTo})},!e.some((e=>e===o.LinkType.None))&&(0,o.jsx)("option",{value:o.LinkType.None},this.props.intl.formatMessage({id:"none",defaultMessage:S.defaultMessages.none})),!e.some((e=>e===o.LinkType.Page))&&(0,o.jsx)("option",{value:o.LinkType.Page},this.props.intl.formatMessage({id:"page",defaultMessage:o.defaultMessages.page})),!e.some((e=>e===o.LinkType.View))&&(0,o.jsx)("option",{value:o.LinkType.View},this.props.intl.formatMessage({id:"view",defaultMessage:o.defaultMessages.view})),!e.some((e=>e===o.LinkType.Dialog))&&(0,o.jsx)("option",{value:o.LinkType.Dialog},this.props.intl.formatMessage({id:"dialog",defaultMessage:o.defaultMessages.dialog})),!e.some((e=>e===o.LinkType.WebAddress))&&(0,o.jsx)("option",{value:o.LinkType.WebAddress},this.props.intl.formatMessage({id:"url",defaultMessage:S.defaultMessages.url})),!e.some((e=>e===o.LinkType.Block))&&(0,o.jsx)("option",{value:o.LinkType.Block},this.props.intl.formatMessage({id:"block",defaultMessage:o.defaultMessages.block})),!e.some((e=>e===o.LinkType.PageTop))&&(0,o.jsx)("option",{value:o.LinkType.PageTop},this.props.intl.formatMessage({id:"pageTop",defaultMessage:S.defaultMessages.pageTop})),!e.some((e=>e===o.LinkType.PrintPreview))&&(0,o.jsx)("option",{value:o.LinkType.PrintPreview},this.props.intl.formatMessage({id:"printPreview",defaultMessage:S.defaultMessages.printPreview})))}},this.getHiddenLinks=()=>{var e,t,s,i,n;let a=this.props.hiddenLinks||(0,o.Immutable)([]);const l=ge.utils.getCurrentPageId(),r=ge.utils.getAppConfig(),c=null===(e=r.pages)||void 0===e?void 0:e[l],p=ge.searchUtils.findLayoutId(null==c?void 0:c.layout,ge.utils.getCurrentSizeMode(),r.mainSizeMode),d=r.layouts[p],u=(null===(t=null===window||void 0===window?void 0:window.jimuConfig)||void 0===t?void 0:t.isBuilder)?null===(i=null===(s=(0,o.getAppStore)().getState().appStateInBuilder)||void 0===s?void 0:s.appRuntimeInfo)||void 0===i?void 0:i.currentDialogId:null===(n=(0,o.getAppStore)().getState().appRuntimeInfo)||void 0===n?void 0:n.currentDialogId;return((null==d?void 0:d.type)===o.LayoutType.FixedLayout||u)&&(a=a.concat([o.LinkType.Block,o.LinkType.Screen,o.LinkType.PageTop])),a},this.getLinkContent=e=>{switch(e){case o.LinkType.None:return null;case o.LinkType.Page:return(0,o.jsx)(ue,{originLinkParam:this.state.originLinkParam,linkParam:this.state.linkParam,appConfig:this.props.appConfig,onLinkParamChange:this.linkParamChange,intl:this.props.intl,openTypes:this.props.openTypes});case o.LinkType.Dialog:return(0,o.jsx)(me,{originLinkParam:this.state.originLinkParam,linkParam:this.state.linkParam,appConfig:this.props.appConfig,onLinkParamChange:this.linkParamChange,intl:this.props.intl});case o.LinkType.Block:return(0,o.jsx)(he,{originLinkParam:this.state.originLinkParam,linkParam:this.state.linkParam,onLinkParamChange:this.linkParamChange,intl:this.props.intl});case o.LinkType.Screen:return(0,o.jsx)(ve,{originLinkParam:this.state.originLinkParam,linkParam:this.state.linkParam,onLinkParamChange:this.linkParamChange,intl:this.props.intl});case o.LinkType.View:return(0,o.jsx)(Ce,{originLinkParam:this.state.originLinkParam,linkParam:this.state.linkParam,intl:this.props.intl,openTypes:this.props.openTypes,appConfig:this.props.appConfig,onLinkParamChange:this.linkParamChange,browserSizeMode:this.props.browserSizeMode});case o.LinkType.WebAddress:return(0,o.jsx)(Oe,{originLinkParam:this.state.originLinkParam,linkParam:this.state.linkParam,intl:this.props.intl,onLinkParamChange:this.linkParamChange,useDataSources:this.props.useDataSources,openTypes:this.props.openTypes,widgetId:this.props.widgetId});default:return null}},this.linkTypeChange=e=>{let t=(0,o.Immutable)(this.state.linkParam);const s=e.target.value;s===o.LinkType.PageTop&&(t=(0,o.Immutable)({})),this.setState({linkParam:t.set("linkType",s)})},this.radioOpenTypeChange=e=>{let t=(0,o.Immutable)(this.state.linkParam);t=t.set("openType",e),this.setState({linkParam:t})},this.linkParamChange=(e,t)=>{t?e&&this.state.linkParam&&e.linkType===this.state.linkParam.linkType&&this.setState({linkParam:this.fixLinkParam(e)}):this.setState({linkParam:this.fixLinkParam(e)})},this.fixLinkParam=e=>{var t;let s=e;if((null==e?void 0:e.linkType)===o.LinkType.View&&(null==e?void 0:e.value)){const o=null===(t=this.props.appConfig)||void 0===t?void 0:t.views,i=e.value.split(","),n=i.slice(1).filter((e=>null==o?void 0:o[e])),a=[i[0]].concat(n).join(",");s=s.set("value",a)}return s},this.settingConfirm=()=>{const e=(0,o.Immutable)(this.state.linkParam);this.setState({originLinkParam:e}),this.props.onSettingConfirm(e)},this.isLinkParamOk=e=>{if(!e||!e.linkType)return!1;if(e.linkType===o.LinkType.View){const t=e.value&&e.value.split(",")[0]||null,s=e.value&&e.value.split(",").slice(1)||[];return!!(t&&"string"==typeof t&&s.length>0)}if(e.linkType===o.LinkType.WebAddress){if(this.props.useDataSources&&this.props.useDataSources.length>0){const t=e.expression&&e.expression.parts;let s=!1;return t&&t.length>0&&(s=1!==t.length||!!t[0].exp&&'""'!==t[0].exp),s}{const t=S.utils.getHttpErrorType(e.value);return e.value&&!t}}return e.linkType===o.LinkType.PageTop||e.linkType===o.LinkType.PrintPreview||e.linkType===o.LinkType.None||!(!e.value||"string"!=typeof e.value)},this.props.linkParam&&this.props.linkParam.linkType)this.state={linkParam:(0,o.Immutable)(this.props.linkParam),originLinkParam:(0,o.Immutable)(this.props.linkParam)};else{const e={linkType:o.LinkType.None,openType:!this.props.openTypes||this.props.openTypes.includes(pe.CurrentWindow)?pe.CurrentWindow:this.props.openTypes[0]};this.state={linkParam:(0,o.Immutable)(e),originLinkParam:(0,o.Immutable)(e)}}}needOpenIn(e){return!e||![o.LinkType.Dialog,o.LinkType.Block,o.LinkType.Screen,o.LinkType.PageTop,o.LinkType.PrintPreview].some((t=>t===e.linkType))}render(){if(this.props.appConfig){const e=this.getLinkTypeContent(),t=this.getLinkContent(this.state.linkParam.linkType);return(0,o.jsx)("div",{className:(0,o.classNames)(this.props.className,"w-100 h-100")},(0,o.jsx)("div",{className:"widget-builder-link-selector w-100 h-100"},(0,o.jsx)("div",{style:{position:"relative"},className:"w-100 h-100"},(0,o.jsx)(S.Container,null,(0,o.jsx)(S.Row,{className:"mb-12 option-name"},this.props.intl.formatMessage({id:"linkTo",defaultMessage:S.defaultMessages.linkTo})),(0,o.jsx)(S.Row,{className:"mb-3"},e),this.state.linkParam.linkType!==o.LinkType.None?(0,o.jsx)("div",null,(0,o.jsx)(S.Row,{className:"mb-3"},t),this.needOpenIn(this.state.linkParam)&&(0,o.jsx)("div",null,(0,o.jsx)(S.Row,{className:"mb-12 option-name"},this.props.intl.formatMessage({id:"openIn",defaultMessage:S.defaultMessages.openIn})),(0,o.jsx)(S.Container,{className:"p-0","aria-label":this.props.intl.formatMessage({id:"openIn",defaultMessage:S.defaultMessages.openIn})},(!this.props.openTypes||this.props.openTypes.some((e=>e===pe.CurrentWindow)))&&(0,o.jsx)(S.Row,{className:"mb-3"},(0,o.jsx)(S.Radio,{onChange:()=>this.radioOpenTypeChange(pe.CurrentWindow),id:"link-setting-app-window",checked:this.state.linkParam.openType===pe.CurrentWindow}),(0,o.jsx)(S.Label,{for:"link-setting-app-window",className:"ml-2 link-setting-cursor-pointer open-type-label text-truncate"},this.props.intl.formatMessage({id:"appWindow",defaultMessage:S.defaultMessages.appWindow}))),(!this.props.openTypes||this.props.openTypes.some((e=>e===pe.TopWindow)))&&(0,o.jsx)(S.Row,{className:"mb-3"},(0,o.jsx)(S.Radio,{onChange:()=>this.radioOpenTypeChange(pe.TopWindow),id:"link-setting-top-window",checked:this.state.linkParam.openType===pe.TopWindow}),(0,o.jsx)(S.Label,{for:"link-setting-top-window",className:"ml-2 link-setting-cursor-pointer open-type-label text-truncate"},this.props.intl.formatMessage({id:"topWindow",defaultMessage:S.defaultMessages.topWindow}))),(!this.props.openTypes||this.props.openTypes.some((e=>e===pe.NewWindow)))&&(0,o.jsx)(S.Row,{className:"mb-3"},(0,o.jsx)(S.Radio,{onChange:()=>this.radioOpenTypeChange(pe.NewWindow),id:"link-setting-new-window",checked:this.state.linkParam.openType===pe.NewWindow}),(0,o.jsx)(S.Label,{for:"link-setting-new-window",className:"ml-2 link-setting-cursor-pointer open-type-label text-truncate"},this.props.intl.formatMessage({id:"newWindow",defaultMessage:S.defaultMessages.newWindow})))))):null),(0,o.jsx)("div",{className:"w-100",style:{position:"absolute"}},(0,o.jsx)(S.Button,{className:"w-100 text-dark link-setting-ok-btn",type:"primary",onClick:this.settingConfirm,disabled:!this.isLinkParamOk(this.state.linkParam),title:this.props.intl.formatMessage({id:"ok",defaultMessage:o.defaultMessages.ok})},(0,o.jsx)("div",{className:"text-truncate"},this.props.intl.formatMessage({id:"ok",defaultMessage:o.defaultMessages.ok})))))))}return null}componentDidMount(){this.props.isLinkPageSetting&&this.linkTypeChange({target:{value:o.LinkType.WebAddress}})}}const Te=o.ReactRedux.connect((e=>({appConfig:window&&window.jimuConfig&&window.jimuConfig.isBuilder?e.appStateInBuilder.appConfig:e.appConfig,browserSizeMode:window&&window.jimuConfig&&window.jimuConfig.isBuilder?e.appStateInBuilder.browserSizeMode:e.browserSizeMode})))((0,o.injectIntl)((0,b.withStyles)(Ne,"LinkSelectorContent"))),Me=Te;const Re=[{name:"preventOverflow",options:{boundariesElement:"viewport"}}];class Le extends o.React.PureComponent{constructor(){super(...arguments),this.closeBtnRef=o.React.createRef(),this.popperRef=o.React.createRef(),this.handleDocumentMousedown=e=>{if(this.props.isOpen){const t=e.target;(!this.props.trigger||(Array.isArray(this.props.trigger)?!this.props.trigger.some((e=>!(0,S.isOutBoundary)(t,e))):(0,S.isOutBoundary)(t,this.props.trigger)))&&this.toggle()}},this.toggle=()=>{this.props.toggle(),setTimeout((()=>{var e,t;this.props.backToFocusNode?this.props.backToFocusNode.focus():Array.isArray(this.props.trigger)?null===(e=this.props.trigger[0])||void 0===e||e.focus():null===(t=this.props.trigger)||void 0===t||t.focus()}),200)},this.onKeyDown=e=>{var t,s;if("Esc"===e.key||"Escape"===e.key){if(!(null===(t=this.popperRef.current)||void 0===t?void 0:t.contains(e.target)))return;e.target===this.closeBtnRef.current?this.toggle():null===(s=this.closeBtnRef.current)||void 0===s||s.focus()}}}componentDidMount(){var e;null===(e=this.getReference(this.props.position))||void 0===e||e.addEventListener("mousedown",this.handleDocumentMousedown,!1)}componentDidUpdate(e){var t;const s="left"===this.props.position&&e.leftSidebarCollapse&&!this.props.leftSidebarCollapse||"right"===this.props.position&&e.rightSidebarCollapse&&!this.props.rightSidebarCollapse,o=this.props.widgetId&&this.props.layoutSelection!==e.layoutSelection&&(null===(t=ge.searchUtils.findLayoutItem(ge.utils.getAppConfig(),this.props.layoutSelection))||void 0===t?void 0:t.widgetId)!==this.props.widgetId,i=!e.isTemplatePage&&this.props.isTemplatePage;(s||o||i)&&this.props.isOpen&&this.toggle()}componentWillUnmount(){var e;null===(e=this.getReference(this.props.position))||void 0===e||e.removeEventListener("mousedown",this.handleDocumentMousedown,!1)}getReference(e){return"left"===e?document&&document.querySelector('[data-layoutid="left-sidebar-left-layout"]'):document&&document.querySelector('[data-layoutid="right-sidebar-right-layout"]')}getPlacement(e){return"left"===e?"right-start":"left-start"}render(){const e=this.props,{isOpen:t,position:s,className:i,dispatch:n,leftSidebarCollapse:a,rightSidebarCollapse:l,trigger:r,backToFocusNode:c,widgetId:p,layoutSelection:d,title:u,isTemplatePage:m}=e,g=function(e,t){var s={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(s[o[i]]=e[o[i]])}return s}(e,["isOpen","position","className","dispatch","leftSidebarCollapse","rightSidebarCollapse","trigger","backToFocusNode","widgetId","layoutSelection","title","isTemplatePage"]);return(0,o.jsx)(S.Popper,Object.assign({reference:this.getReference(s),placement:this.getPlacement(s),open:t,forceLatestFocusElements:!0,className:(0,o.classNames)("bg-light-300",i),modifiers:Re},g,{toggle:null,onKeyDown:this.onKeyDown,"aria-label":"string"==typeof this.props["aria-label"]?this.props["aria-label"]:"string"==typeof u?u:void 0}),(0,o.jsx)("div",{className:"w-100 h-100",ref:this.popperRef},void 0!==u&&(0,o.jsx)(S.PanelHeader,{title:u,showClose:!0,onClose:this.toggle,level:1,className:"p-3",closeButtonRef:this.closeBtnRef}),void 0!==u?(0,o.jsx)("div",{css:o.css`height: calc(100% - 56px); overflow: auto;`},this.props.children):this.props.children))}}const Ae=o.ReactRedux.connect(((e,t)=>{var s,o,i,n,a,l,r,c,p,d;return{leftSidebarCollapse:null===(o=null===(s=e.widgetsState)||void 0===s?void 0:s["left-sidebar"])||void 0===o?void 0:o.collapse,rightSidebarCollapse:null===(n=null===(i=e.widgetsState)||void 0===i?void 0:i["right-sidebar"])||void 0===n?void 0:n.collapse,layoutSelection:t.widgetId?(null===(a=null===window||void 0===window?void 0:window.jimuConfig)||void 0===a?void 0:a.isBuilder)?null===(r=null===(l=e.appStateInBuilder)||void 0===l?void 0:l.appRuntimeInfo)||void 0===r?void 0:r.selection:null===(c=e.appRuntimeInfo)||void 0===c?void 0:c.selection:null,isTemplatePage:(null===(p=null===window||void 0===window?void 0:window.jimuConfig)||void 0===p?void 0:p.isBuilder)&&"template"===(null===(d=e.appRuntimeInfo)||void 0===d?void 0:d.currentPageId)}}))((0,b.withStyles)(Le,"SidePopper"));class Ee extends o.React.PureComponent{constructor(){super(...arguments),this.close=()=>{this.props.onSettingCancel()},this.getIsOpen=()=>this.props.isOpen||this.props.showDialog}render(){const e=this.props.position||"right",{title:t}=this.props;return o.React.createElement(Ae,{isOpen:this.getIsOpen(),position:e,toggle:this.close,trigger:this.props.trigger,backToFocusNode:this.props.backToFocusNode,widgetId:this.props.widgetId,title:this.props.intl.formatMessage({id:t?"setLinkForTitle":"setLink",defaultMessage:t?S.defaultMessages.setLinkForTitle:S.defaultMessages.setLink},{title:t})},o.React.createElement("div",{className:"bg-light-300 w-100 h-100 px-3"},o.React.createElement(Te,{isLinkPageSetting:this.props.isLinkPageSetting,linkParam:this.props.linkParam,onSettingConfirm:this.props.onSettingConfirm,useDataSources:this.props.useDataSources,widgetId:this.props.widgetId,hiddenLinks:this.props.hiddenLinks,openTypes:this.props.openTypes})))}}const De=(0,o.injectIntl)((0,b.withTheme)(Ee)),Ue=De;var Fe=h(24786),Be=h.n(Fe);const $e=e=>{const{className:t}=e,s=function(e,t){var s={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(s[o[i]]=e[o[i]])}return s}(e,["className"]),i=(0,o.classNames)("jimu-icon jimu-icon-component",t);return o.React.createElement(S.SVG,Object.assign({className:i,src:Be()},s))};class ze extends o.React.PureComponent{constructor(e){super(e),this.linkSelectorTrigger=o.React.createRef(),this.toggle=()=>{this.setState({isOpen:!this.state.isOpen})},this.onCancel=()=>{var e,t;null===(t=(e=this.props).onSettingCancel)||void 0===t||t.call(e),this.toggle()},this.onConfirm=e=>{var t,s;null===(s=(t=this.props).onSettingConfirm)||void 0===s||s.call(t,e),this.toggle()},this.state={isOpen:!1}}render(){const e=this.props,{theme:t,intl:s,buttonLabel:i}=e,n=function(e,t){var s={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(s[o[i]]=e[o[i]])}return s}(e,["theme","intl","buttonLabel"]),a=i||this.props.intl.formatMessage({id:"setLink",defaultMessage:S.defaultMessages.setLink});return o.React.createElement(o.React.Fragment,null,o.React.createElement(S.Button,{className:"w-100 text-black",type:"primary",onClick:this.toggle,ref:this.linkSelectorTrigger,title:a},o.React.createElement("div",{className:"w-100 px-2 text-truncate"},o.React.createElement($e,{className:"text-black mr-1"}),a)),o.React.createElement(De,Object.assign({},n,{isOpen:this.state.isOpen,position:"right",onSettingCancel:this.onCancel,onSettingConfirm:this.onConfirm,trigger:this.linkSelectorTrigger.current,widgetId:this.props.widgetId})))}}const We=(0,b.withTheme)((0,o.injectIntl)(ze));var Ge=h(338),Ve=function(e,t,s,o){return new(s||(s=Promise))((function(i,n){function a(e){try{r(o.next(e))}catch(e){n(e)}}function l(e){try{r(o.throw(e))}catch(e){n(e)}}function r(e){var t;e.done?i(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(a,l)}r((o=o.apply(e,t||[])).next())}))};function _e(){return Ve(this,void 0,void 0,(function*(){const e=yield qe(),t=yield He(),s={};return Object.keys(e).forEach((t=>{s[t]||(s[t]={items:[],isPremium:e[t].isPremium,isSubscriber:e[t].isSubscriber}),s[t].items=s[t].items.concat(e[t].dataSources.map((e=>({label:o.dataSourceUtils.getServiceLabelFromUrl(t),id:e.id}))))})),Object.keys(t).forEach((e=>{s[e]||(s[e]={items:[],isPremium:t[e].isPremium,isSubscriber:t[e].isSubscriber}),s[e].items=s[e].items.concat(t[e].utilities.map((e=>{const t=o.UtilityManager.getInstance().getUtilityJson(e.utilityId);return{label:(null==t?void 0:t.label)||(null==t?void 0:t.name)||(null==t?void 0:t.sourceLabel),id:e.utilityId}})))})),s}))}function qe(){var e,t,s,i;return Ve(this,void 0,void 0,(function*(){const n=null===(i=null===(s=null===(t=null===(e=(0,o.getAppStore)())||void 0===e?void 0:e.getState())||void 0===t?void 0:t.appStateInBuilder)||void 0===s?void 0:s.appConfig)||void 0===i?void 0:i.dataSources,a=[];return n&&Object.keys(n).forEach((e=>{const t=o.DataSourceManager.getInstance().getDataSource(e);a.push(Je(t))})),Promise.allSettled(a).then((e=>{let t={};return e.filter((e=>"fulfilled"===e.status)).map((e=>e.value)).forEach((e=>{e&&Object.keys(e).forEach((s=>{t[s]?t[s].dataSources=t[s].dataSources.concat(e[s].dataSources):t=Object.assign(Object.assign({},t),e)}))})),t}))}))}function He(){var e,t,s,i;return Ve(this,void 0,void 0,(function*(){const n=null===(i=null===(s=null===(t=null===(e=(0,o.getAppStore)())||void 0===e?void 0:e.getState())||void 0===t?void 0:t.appStateInBuilder)||void 0===s?void 0:s.appConfig)||void 0===i?void 0:i.utilities,a=[];return n&&Object.keys(n).forEach((e=>{a.push(function(e){var t,s,i,n;return Ve(this,void 0,void 0,(function*(){const a={};if(!e)return a;const l=null===(n=null===(i=null===(s=null===(t=(0,o.getAppStore)())||void 0===t?void 0:t.getState())||void 0===s?void 0:s.appStateInBuilder)||void 0===i?void 0:i.appConfig)||void 0===n?void 0:n.widgets,r=l&&Object.values(l).some((t=>{var s;return null===(s=t.useUtilities)||void 0===s?void 0:s.some((t=>t.utilityId===e.id))})),c=e.url;if(c&&r){const t=yield o.proxyUtils.isUtilityPremium(e),s=yield o.proxyUtils.isUtilitySubscriber(e);if(t||s){const i=yield o.UtilityManager.getInstance().getUtility(e.id);a[c]={utilities:[i],isPremium:t,isSubscriber:s}}}return a}))}(n[e]))})),Promise.allSettled(a).then((e=>{let t={};return e.filter((e=>"fulfilled"===e.status)).map((e=>e.value)).forEach((e=>{e&&Object.keys(e).forEach((s=>{t[s]?t[s].utilities=t[s].utilities.concat(e[s].utilities):t=Object.assign(Object.assign({},t),e)}))})),t}))}))}function Je(e,t=!1){var s,i,n,a,l,r;return Ve(this,void 0,void 0,(function*(){const c={};if(!e)return c;const p=null===(a=null===(n=null===(i=null===(s=(0,o.getAppStore)())||void 0===s?void 0:s.getState())||void 0===i?void 0:i.appStateInBuilder)||void 0===n?void 0:n.appConfig)||void 0===a?void 0:a.widgets,d=(null===(l=e.getMainDataSource())||void 0===l?void 0:l.id)===e.id,u=Ge.dataComponentsUtils.getWidgetsUsingDsOrItsViews(e.id,p,!1).length>0,m=o.dataSourceUtils.getFullServiceUrl(null===(r=e.getDataSourceJson())||void 0===r?void 0:r.url,!1);if(d&&m&&(t||u)){const t=yield o.proxyUtils.isDataSourcePremium(e.getDataSourceJson()),s=yield o.proxyUtils.isDataSourceSubscriber(e.getDataSourceJson());(t||s)&&(c[m]={dataSources:[e],isPremium:t,isSubscriber:s})}const g=[];if(d&&e.isDataSourceSet){const s=(e.type===Ge.AllDataSourceTypes.WebMap||e.type===Ge.AllDataSourceTypes.WebScene)&&u||t;e.getChildDataSources().forEach((e=>{g.push(Je(e,s))}))}return Promise.allSettled(g).then((e=>{let t=c;return e.filter((e=>"fulfilled"===e.status)).map((e=>e.value)).forEach((e=>{e&&Object.keys(e).forEach((s=>{t[s]?t[s].dataSources=t[s].dataSources.concat(e[s].dataSources):t=Object.assign(Object.assign({},t),e)}))})),t}))}))}function Ze(e,t){var s;if(!e||!t)return null;let o=null;for(const i in t)if((null===(s=t[i])||void 0===s?void 0:s.sourceUrl)===e){o=t[i];break}return o}function Ke(e,t,s,o){return!(!e||!t)&&(e.sourceUrl===t&&((!e.hitsPerInterval&&!s||e.hitsPerInterval===s)&&!((e.intervalSeconds||o)&&e.intervalSeconds!==o)))}function Qe(){var e,t;const s=null===(e=(0,o.getAppStore)().getState())||void 0===e?void 0:e.appStateInBuilder.appInfo;return null===(t=null==s?void 0:s.typeKeywords)||void 0===t?void 0:t.includes("Registered App")}function Xe(){var e,t,s,i,n,a,l,r,c,p;return Ve(this,void 0,void 0,(function*(){if((null===(s=null===(t=null===(e=(0,o.getAppStore)().getState())||void 0===e?void 0:e.appContext)||void 0===t?void 0:t.jimuConfig)||void 0===s?void 0:s.isInPortal)||(null===(a=null===(n=null===(i=(0,o.getAppStore)().getState())||void 0===i?void 0:i.appContext)||void 0===n?void 0:n.jimuConfig)||void 0===a?void 0:a.isDevEdition))return yield Promise.resolve(!1);const d=Qe();let u=!1;if(!d){const e=null===(l=(0,o.getAppStore)().getState())||void 0===l?void 0:l.appStateInBuilder.appInfo,t=null===(p=null===(c=null===(r=(0,o.getAppStore)().getState())||void 0===r?void 0:r.appStateInBuilder)||void 0===c?void 0:c.user)||void 0===p?void 0:p.username;u=(null==e?void 0:e.owner)===t}if(!d&&!u)return yield Promise.resolve(!1);const m=yield _e(),g=Object.keys(m).map((e=>Ve(this,void 0,void 0,(function*(){return yield o.ServiceManager.getInstance().fetchServiceInfo(e).then((e=>e.isHostedInSamePortal))}))));return Promise.all(g).then((e=>(null==e?void 0:e.length)>0&&(null==e?void 0:e.some((e=>e)))))}))}function Ye(e,t){return Ve(this,void 0,void 0,(function*(){if(!e||0===e.length||!t)return yield Promise.resolve();const s=ot();return yield o.esri.restRequest.request(s,{authentication:o.SessionManager.getInstance().getSessionByUrl((0,o.getAppStore)().getState().portalUrl),httpMethod:"POST",params:{proxies:e.join()}}).then((e=>Ve(this,void 0,void 0,(function*(){var s;return e.results&&Object.values(e.results).forEach((e=>{e.success&&et(e.proxyId,t)})),null==t||t.exec(),(null===(s=e.results)||void 0===s?void 0:s.every((e=>!0===e.success)))?Promise.resolve():Promise.reject(`Deleting existing proxy failed: ${JSON.stringify(e)}`)})))).catch((s=>Ve(this,void 0,void 0,(function*(){return e.forEach((e=>{et(e,t)})),null==t||t.exec(),Promise.reject(`Deleting existing proxy failed: ${JSON.stringify(s)}`)}))))}))}function et(e,t){var s,i,n;const a=null===(n=null===(i=null===(s=(0,o.getAppStore)().getState())||void 0===s?void 0:s.appStateInBuilder)||void 0===i?void 0:i.appConfig)||void 0===n?void 0:n.appProxies,l=a&&Object.values(a).find((t=>t.proxyId===e));l&&(null==t||t.removeAppProxy(l.id))}function tt(){var e,t,s,i,n,a,l;const r=null===(t=null===(e=(0,o.getAppStore)().getState())||void 0===e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.portalUrl,c=null===(i=null===(s=(0,o.getAppStore)().getState())||void 0===s?void 0:s.appStateInBuilder)||void 0===i?void 0:i.appId;return`${r}/sharing/rest/content/users/${null===(l=null===(a=null===(n=(0,o.getAppStore)().getState())||void 0===n?void 0:n.appStateInBuilder)||void 0===a?void 0:a.appInfo)||void 0===l?void 0:l.owner}/items/${c}`}function st(){return`${tt()}/createProxies`}function ot(){return`${tt()}/deleteProxies`}var it=h(18371),nt=h.n(it);const at=e=>{const{className:t}=e,s=function(e,t){var s={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(s[o[i]]=e[o[i]])}return s}(e,["className"]),i=(0,o.classNames)("jimu-icon jimu-icon-component",t);return o.React.createElement(S.SVG,Object.assign({className:i,src:nt()},s))};class lt extends o.React.PureComponent{constructor(e){super(e),this.__unmount=!1,this.interval={none:this.props.intl.formatMessage({id:"intervalNone",defaultMessage:S.defaultMessages.intervalNone}),second:this.props.intl.formatMessage({id:"intervalSecond",defaultMessage:S.defaultMessages.intervalSecond}),minute:this.props.intl.formatMessage({id:"intervalMinute",defaultMessage:S.defaultMessages.intervalMinute}),hour:this.props.intl.formatMessage({id:"intervalHour",defaultMessage:S.defaultMessages.intervalHour}),day:this.props.intl.formatMessage({id:"intervalDay",defaultMessage:S.defaultMessages.intervalDay})},this.setIsHostedInSamePortal=()=>{this.props.sourceUrl&&o.ServiceManager.getInstance().fetchServiceInfo(this.props.sourceUrl).then((e=>{this.__unmount||this.setState({isHostedInSamePortal:e.isHostedInSamePortal})}))},this.onToggleProxy=()=>{let e;e=this.props.proxySettingConfig?null:(0,o.Immutable)({sourceUrl:this.props.sourceUrl}),this.props.onChange(this.props.sourceUrl,e)},this.onHitsPerInervalChange=e=>{const t=e,s={sourceUrl:this.props.sourceUrl,hitsPerInterval:t},o=this.props.proxySettingConfig?Object.assign(Object.assign({},this.props.proxySettingConfig),s):s;this.props.onChange(this.props.sourceUrl,o)},this.onIntervalUnitChange=e=>{const t=e.target.value,s=this.getIntervalSeconds(t),o={sourceUrl:this.props.sourceUrl,intervalSeconds:s},i=this.props.proxySettingConfig?Object.assign(Object.assign({},this.props.proxySettingConfig),o):o;this.props.onChange(this.props.sourceUrl,i)},this.state={isHostedInSamePortal:!0}}componentDidMount(){this.__unmount=!1,this.setIsHostedInSamePortal()}componentDidUpdate(e){this.__unmount=!1,e.sourceUrl!==this.props.sourceUrl&&this.setIsHostedInSamePortal()}componentWillUnmount(){this.__unmount=!0}getIntervalUnit(e){if(!e)return"none";switch(e){case 1:return"second";case 60:return"minute";case 3600:return"hour";case 86400:return"day";default:return"none"}}getIntervalSeconds(e){if(!e)return null;switch(e){case"second":return 1;case"minute":return 60;case"hour":return 3600;case"day":return 86400;default:return null}}render(){var e,t;if(!this.props.sourceUrl)return null;const s=this.props.label,i=!!this.props.proxySettingConfig,n=this.getIntervalUnit(null===(e=this.props.proxySettingConfig)||void 0===e?void 0:e.intervalSeconds),a=o.SessionManager.getInstance().getMainSession(),l=`${this.props.sourceUrl}?token=${a.token}`;return o.React.createElement("tr",{className:"row m-0 content-table-tr"},o.React.createElement("td",{className:"col-2",title:this.state.isHostedInSamePortal?null:this.props.intl.formatMessage({id:"disabledProxyTooltip",defaultMessage:S.defaultMessages.disabledProxyTooltip})},o.React.createElement(S.Switch,{onChange:this.onToggleProxy,checked:i,className:"mr-2",disabled:!this.state.isHostedInSamePortal,"aria-label":this.props.intl.formatMessage({id:"authorized",defaultMessage:S.defaultMessages.authorized}),"aria-checked":i})),o.React.createElement("td",{className:"col-4",title:s},o.React.createElement(S.Link,{to:l,target:"_blank",className:"font-size-13 px-0 text-truncate d-block text-left","aria-label":this.props.intl.formatMessage({id:"subscriberContent",defaultMessage:S.defaultMessages.subscriberContent})},s)),o.React.createElement("td",{className:"col-2"},this.props.isPremium&&o.React.createElement(at,{size:"m"})),o.React.createElement("td",{className:"col-2"},i&&o.React.createElement(S.NumericInput,{size:"sm",value:null===(t=this.props.proxySettingConfig)||void 0===t?void 0:t.hitsPerInterval,onChange:this.onHitsPerInervalChange,precision:0,min:1,className:"request-limit","aria-label":this.props.intl.formatMessage({id:"requestLimit",defaultMessage:S.defaultMessages.requestLimit})})),o.React.createElement("td",{className:"col-2"},i&&o.React.createElement(S.Select,{value:n,onChange:this.onIntervalUnitChange,size:"sm",className:"request-interval","aria-label":this.props.intl.formatMessage({id:"requestInterval",defaultMessage:S.defaultMessages.requestInterval})},Object.keys(this.interval).map(((e,t)=>o.React.createElement("option",{value:e,key:t,selected:e===n},this.interval[e]))))))}}class rt extends o.React.PureComponent{constructor(){super(...arguments),this.columnName={authorized:this.props.intl.formatMessage({id:"authorized",defaultMessage:S.defaultMessages.authorized}),subscriberContent:this.props.intl.formatMessage({id:"subscriberContent",defaultMessage:S.defaultMessages.subscriberContent}),credits:this.props.intl.formatMessage({id:"credits",defaultMessage:S.defaultMessages.credits}),requestLimit:this.props.intl.formatMessage({id:"requestLimit",defaultMessage:S.defaultMessages.requestLimit}),requestInterval:this.props.intl.formatMessage({id:"requestInterval",defaultMessage:S.defaultMessages.requestInterval})},this.onProxyChange=(e,t)=>{const s=this.props.proxySettingConfigs||{},i=Object.assign({},s),n=o.dataSourceUtils.getDsTypeFromWholeServiceUrl(e)===o.DataSourceTypes.SceneService;if(t){if(i[e]=t,n){const s=e.replace("/SceneServer","/FeatureServer"),o=Object.assign(Object.assign({},t),{sourceUrl:s});i[s]=o}}else delete i[e],n&&delete i[e.replace("/SceneServer","/FeatureServer")];this.props.onChange(i)}}render(){const e=this.props.needProxyItems,t=this.props.proxySettingConfigs;return o.React.createElement("div",{className:(0,o.classNames)("h-100 w-100 bg-light-300",{[this.props.className]:!!this.props.className})},o.React.createElement("div",{className:"subscriber-warning"},this.props.intl.formatMessage({id:"subscriberWarning",defaultMessage:S.defaultMessages.subscriberWarning})),o.React.createElement("div",{className:"secondary-title mt-4 mb-3"},this.props.intl.formatMessage({id:"data",defaultMessage:S.defaultMessages.data})),o.React.createElement("table",{className:"content-table w-100"},o.React.createElement("thead",{className:"content-table-header container"},o.React.createElement("tr",{className:"row"},Object.keys(this.columnName).map(((e,t)=>o.React.createElement("th",{key:t,className:(0,o.classNames)("text-truncate",{"col-4":"subscriberContent"===e,"col-2":"subscriberContent"!==e}),title:this.columnName[e]},this.columnName[e]))))),o.React.createElement("tbody",{className:"container"},e&&Object.keys(e).map(((s,i)=>{var n,a;const l=e[s];return o.React.createElement(lt,{isPremium:l.isPremium,isSubscriber:l.isSubscriber,sourceUrl:s,intl:this.props.intl,key:i,onChange:this.onProxyChange,label:null===(a=null===(n=l.items)||void 0===n?void 0:n[0])||void 0===a?void 0:a.label,proxySettingConfig:null==t?void 0:t[s]})})))))}}const ct=(0,o.injectIntl)((0,b.withStyles)(rt,"ProxySetting"));var pt;!function(e){e.IMAGE="image",e.ICON="icon"}(pt||(pt={}));var dt=function(e,t,s,o){return new(s||(s=Promise))((function(i,n){function a(e){try{r(o.next(e))}catch(e){n(e)}}function l(e){try{r(o.throw(e))}catch(e){n(e)}}function r(e){var t;e.done?i(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(a,l)}r((o=o.apply(e,t||[])).next())}))};const ut={};class mt extends o.React.PureComponent{constructor(e){super(e),this.__unmount=!1,this.getProxySettingConfigs=e=>dt(this,void 0,void 0,(function*(){var t,s;const i={},n=null===(s=null===(t=(0,o.getAppStore)().getState().appStateInBuilder)||void 0===t?void 0:t.appConfig)||void 0===s?void 0:s.appProxies;return Object.keys(e).forEach((e=>{const t=Ze(e,n);t&&(i[e]=t.without("id").without("proxyId").without("proxyUrl"))})),i})),this.registerApp=()=>dt(this,void 0,void 0,(function*(){var e,t,s,i;const n=null===(t=null===(e=(0,o.getAppStore)().getState())||void 0===e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.appId;if(ut[n])return yield ut[n];const a=`${null===(i=null===(s=(0,o.getAppStore)().getState())||void 0===s?void 0:s.appStateInBuilder)||void 0===i?void 0:i.portalUrl}/sharing/rest/oauth2/registerApp`;return ut[n]=o.esri.restRequest.request(a,{authentication:o.SessionManager.getInstance().getSessionByUrl((0,o.getAppStore)().getState().portalUrl),httpMethod:"POST",params:{itemId:n,appType:"browser",redirect_uris:JSON.stringify([this.getAppRootUrl()])}}),yield ut[n]})),this.createProxies=e=>dt(this,void 0,void 0,(function*(){var t,s,i;if(!e)return yield Promise.resolve(null);const n=null===(i=null===(s=null===(t=(0,o.getAppStore)().getState())||void 0===t?void 0:t.appStateInBuilder)||void 0===s?void 0:s.appConfig)||void 0===i?void 0:i.appProxies,a={};let l=[];if(Object.keys(e).forEach((t=>{const s=e[t];if(!s)return;const o=s.hitsPerInterval,i=s.intervalSeconds,r=Ze(t,n);Ke(r,t,o,i)?a[r.id]=r:l=l.concat({sourceUrl:t,hitsPerInterval:o,intervalSeconds:i})})),0===l.length)return(0,o.Immutable)(a);Qe()||(yield this.registerApp());const r={referrers:[this.getAppUrl()]},c=st();return o.esri.restRequest.request(c,{authentication:o.SessionManager.getInstance().getSessionByUrl((0,o.getAppStore)().getState().portalUrl),httpMethod:"POST",params:{serviceProxyParams:r,proxies:l}}).then((e=>{var t,s;const i=(null==e?void 0:e.appProxies)||[],n=a,l=null===(s=null===(t=(0,o.getAppStore)().getState())||void 0===t?void 0:t.appStateInBuilder)||void 0===s?void 0:s.appConfig,r=null==l?void 0:l.appProxies;return i.forEach((e=>{const t=Ze(e.sourceUrl,r),s=(null==t?void 0:t.id)||o.appConfigUtils.getUniqueId(l.set("appProxies",r?r.merge(n):n),"appProxy");n[s]=Object.assign(Object.assign({},e),{id:s})})),(0,o.Immutable)(n)}))})),this.getAppRootUrl=()=>{var e;return null===(e=null===window||void 0===window?void 0:window.location)||void 0===e?void 0:e.origin},this.getAppUrl=()=>{var e,t,s,i,n,a;const l=null===(t=null===(e=(0,o.getAppStore)().getState())||void 0===e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.appId,r=null===(i=null===(s=(0,o.getAppStore)().getState())||void 0===s?void 0:s.appStateInBuilder)||void 0===i?void 0:i.appInfo,c="Web Experience Template"===(null==r?void 0:r.type),p=null===(n=o.urlUtils.getAppUrl({appId:l,isTemplate:c}))||void 0===n?void 0:n.replace(/^\//,"");return`${null===(a=this.getAppRootUrl())||void 0===a?void 0:a.replace(/\/$/,"")}/${p}`},this.onProxyConfigChange=e=>{this.setState({proxySettingConfigs:e})},this.onFinish=()=>{var e,t,s,i;this.setState({isLoading:!0});const n=this.state.proxySettingConfigs||{},a=null===(s=null===(t=null===(e=(0,o.getAppStore)().getState())||void 0===e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.appConfig)||void 0===s?void 0:s.appProxies,l=a&&Object.values(a).filter((e=>{var t;let s=n[null==e?void 0:e.sourceUrl];if(o.dataSourceUtils.getDsTypeFromWholeServiceUrl(null==e?void 0:e.sourceUrl)===o.DataSourceTypes.FeatureService){const o=null===(t=null==e?void 0:e.sourceUrl)||void 0===t?void 0:t.replace("/FeatureServer","/SceneServer"),i=n[o];s=s||Object.assign(Object.assign({},i),{sourceUrl:null==e?void 0:e.sourceUrl})}return!s||!Ke(e,s.sourceUrl,s.hitsPerInterval,s.intervalSeconds)}));Ye(null==l?void 0:l.map((e=>e.proxyId)),null===(i=this.state)||void 0===i?void 0:i.getAppConfigAction()).then((()=>dt(this,void 0,void 0,(function*(){return yield this.createProxies(n).then((e=>{var t;if(!this.__unmount){if(e){const s=null===(t=this.state)||void 0===t?void 0:t.getAppConfigAction();Object.keys(e).forEach((t=>{null==s||s.editAppProxy(e[t])})),null==s||s.exec()}this.props.onFinish().then((()=>{this.__unmount||setTimeout((()=>{this.setState({isLoading:!1},(()=>{this.props.onToggle()}))}),3e3)}),(()=>{this.__unmount||setTimeout((()=>{this.setState({isLoading:!1},(()=>{this.props.onToggle()}))}),3e3)}))}}))})))).catch((e=>{console.error("Creating proxy failed: ",e),this.setState({isLoading:!1,isError:!0},(()=>{setTimeout((()=>{this.setState({isError:!1})}),5500)}))}))},this.getTostStyle=()=>{var e,t,s,i,n,a,l,r,c,p,d;return o.css`
      & {
        height:  ${o.polished.rem(40)};
        top: ${o.polished.rem(60)};
      }
      .jimu-toast-info {
        background: ${null===(i=null===(s=null===(t=null===(e=this.props)||void 0===e?void 0:e.theme)||void 0===t?void 0:t.colors)||void 0===s?void 0:s.palette)||void 0===i?void 0:i.secondary[300]};
        line-height: ${o.polished.rem(40)};
        color: ${null===(r=null===(l=null===(a=null===(n=this.props)||void 0===n?void 0:n.theme)||void 0===a?void 0:a.colors)||void 0===l?void 0:l.palette)||void 0===r?void 0:r.dark[800]};
        font-weight: 300;
        padding: 0 ${o.polished.rem(16)};
        box-shadow: 0 0 ${o.polished.rem(10)} ${o.polished.rem(2)} ${o.polished.rgba(null===(d=null===(p=null===(c=this.props)||void 0===c?void 0:c.theme)||void 0===p?void 0:p.colors)||void 0===d?void 0:d.white,.2)};
      }
    `},this.state={getAppConfigAction:null,isLoading:!1,isError:!1,proxySettingConfigs:null,needProxyItems:null}}componentDidMount(){this.__unmount=!1,o.moduleLoader.loadModule("jimu-for-builder").then((e=>{this.__unmount||this.setState({getAppConfigAction:e.getAppConfigAction})})),this.setState({isLoading:!0}),this.initNeedProxyItemsAndProxySettingConfigs()}componentDidUpdate(e){(!e.isOpen&&this.props.isOpen||e.appProxies!==this.props.appProxies)&&this.initNeedProxyItemsAndProxySettingConfigs()}initNeedProxyItemsAndProxySettingConfigs(){return dt(this,void 0,void 0,(function*(){this.setState({isLoading:!0});try{const e=yield _e(),t=yield this.getProxySettingConfigs(e);this.__unmount||this.setState({proxySettingConfigs:t,needProxyItems:e,isLoading:!1})}catch(e){this.__unmount||this.setState({isLoading:!1}),console.error("Getting proxy config error",e)}}))}componentWillUnmount(){this.__unmount=!0}render(){const e=this.state.proxySettingConfigs,t=this.state.needProxyItems,s=this.props.intl.formatMessage({id:"subscriberContents",defaultMessage:S.defaultMessages.subscriberContents});return(0,o.jsx)(S.Modal,{isOpen:this.props.isOpen,centered:!0,className:(0,o.classNames)({[this.props.className]:!!this.props.className}),returnfocusafterclose:"true",contentClassName:"proxy-setting-container",backdrop:"static","aria-label":s},(0,o.jsx)(S.ModalHeader,{className:"d-flex justify-content-between header px-30",toggle:this.props.onToggle},(0,o.jsx)("div",{className:"flex-grow-1 text-truncate"},s)),(0,o.jsx)(S.ModalBody,{className:"d-flex px-30"},(0,o.jsx)(ct,{onChange:this.onProxyConfigChange,proxySettingConfigs:e,needProxyItems:t})),(0,o.jsx)(S.ModalFooter,{className:"px-30"},(0,o.jsx)(S.Button,{className:"mr-2",type:"primary",onClick:this.onFinish},this.props.intl.formatMessage({id:"publish",defaultMessage:o.defaultMessages.publish})),(0,o.jsx)(S.Button,{type:"default",onClick:this.props.onCancel},this.props.intl.formatMessage({id:"cancel",defaultMessage:o.defaultMessages.cancel}))),this.state.isLoading&&(0,o.jsx)(S.Loading,{type:o.LoadingType.Secondary}),this.state.isError&&(0,o.jsx)(S.Toast,{open:this.state.isError,type:S.ToastType.Info,css:this.getTostStyle(),text:this.props.intl.formatMessage({id:"creatProxyToPublishAppError",defaultMessage:S.defaultMessages.creatProxyToPublishAppError})}))}}const gt=(0,b.withStyles)((0,b.withTheme)((0,o.injectIntl)(mt)),"ProxySettingPopup"),ht=o.ReactRedux.connect(((e,t)=>{var s,o;return{appProxies:null===(o=null===(s=null==e?void 0:e.appStateInBuilder)||void 0===s?void 0:s.appConfig)||void 0===o?void 0:o.appProxies}}))(gt);class vt extends o.React.PureComponent{componentDidUpdate(e){this.props.pageId===e.pageId&&this.props.sizemode===e.sizemode||this.props.toggle()}getStyle(){const{theme:e}=this.props;return e&&o.css`
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
    `}render(){const e=this.props,{pageId:t,sizemode:s,dispatch:i}=e,n=function(e,t){var s={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(s[o[i]]=e[o[i]])}return s}(e,["pageId","sizemode","dispatch"]);return(0,o.jsx)(S.Popper,Object.assign({css:this.getStyle()},n))}}const ft=o.ReactRedux.connect((function(e){return{pageId:e.appRuntimeInfo.currentPageId,sizemode:e.browserSizeMode}}))(vt);var yt=h(55339),bt=h.n(yt);const St=e=>{const{className:t}=e,s=function(e,t){var s={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(s[o[i]]=e[o[i]])}return s}(e,["className"]),i=(0,o.classNames)("jimu-icon jimu-icon-component",t);return o.React.createElement(S.SVG,Object.assign({className:i,src:bt()},s))};var wt=h(4077),xt=h.n(wt);const kt=e=>{const{className:t}=e,s=function(e,t){var s={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(s[o[i]]=e[o[i]])}return s}(e,["className"]),i=(0,o.classNames)("jimu-icon jimu-icon-component",t);return o.React.createElement(S.SVG,Object.assign({className:i,src:xt()},s))},Ct=[(0,S.getFallbackPlacementsModifier)(["top","right","bottom","left"],!0),{name:"preventOverflow",enabled:!0,options:{boundariesElement:"viewport",padding:0}}],It=1e3;class jt extends o.React.PureComponent{constructor(e){super(e),this.groupLabelMap={1:this.props.intl.formatMessage({id:"mapCentric",defaultMessage:S.defaultMessages.mapCentric}),2:this.props.intl.formatMessage({id:"dataCentric",defaultMessage:S.defaultMessages.dataCentric}),3:this.props.intl.formatMessage({id:"pageElements",defaultMessage:S.defaultMessages.pageElements}),4:this.props.intl.formatMessage({id:"menuAndTollbars",defaultMessage:S.defaultMessages.menuAndTollbars}),9:this.props.intl.formatMessage({id:"section",defaultMessage:o.defaultMessages.section})},this.allGroup={value:It,label:this.props.intl.formatMessage({id:"all",defaultMessage:S.defaultMessages.all})},this.getRequireEnterpriseIconTooltip=e=>{if((null==e?void 0:e.length)>0){const t=e.join(", ");return this.props.intl.formatMessage({id:"requireEnterpriseAndUserTypeExtensions",defaultMessage:S.defaultMessages.requireEnterpriseAndUserTypeExtensions},{userTypeExtensions:t})}return this.props.intl.formatMessage({id:"requireEnterprise",defaultMessage:S.defaultMessages.requireEnterprise})},this.WidgetCard=({widgetInfo:e})=>{var t,s,i,n;return(0,o.jsx)("div",{className:"d-flex align-items-start justify-content-center widget-card"},(null===(t=e.manifest)||void 0===t?void 0:t.requireEnterprise)&&(0,o.jsx)(S.Button,{title:this.getRequireEnterpriseIconTooltip(null===(s=e.manifest)||void 0===s?void 0:s.requiredUserTypeExtensions),type:"tertiary",className:"widget-enterprise-btn",icon:!0,size:"sm"},(0,o.jsx)(kt,null)),(0,o.jsx)(S.Button,{className:"w-100 h-100 p-0",key:e.name,onClick:()=>this.props.onSelect(e),"aria-label":e.label},(0,o.jsx)("div",{className:"d-flex flex-column w-100 h-100 widget-card--content"},(0,o.jsx)("div",{className:"d-flex justify-content-center"},(0,o.jsx)("div",{className:"widget-card-image"},(0,o.jsx)(S.Icon,{className:"w-100 m-0",autoFlip:null===(n=null===(i=e.manifest)||void 0===i?void 0:i.properties)||void 0===n?void 0:n.flipIcon,icon:"string"==typeof e.icon?e.icon:e.icon&&e.icon.svg,color:this.props.theme.colors.dark}))),(0,o.jsx)("div",{className:"flex-grow-1 d-flex align-items-center"},(0,o.jsx)("div",{className:"widget-card-name w-100 text-center text-capitalize text-truncate",css:o.css`
                line-height: 1rem;
                max-height: 2.2rem;
                white-space: normal;
              `,title:e.label},e.label)))))},this.WidgetGroup=({group:e})=>{if(!e)return null;const t=this.WidgetCard;return(0,o.jsx)("div",{className:"widget-group w-100 mb-3"},(0,o.jsx)("h4",{className:"group-label w-100 text-break",title:e.label},e.label),(0,o.jsx)("div",{className:"card-grid m-0"},e.itemList.sort(((e,t)=>e.order-t.order)).map(((e,s)=>e?(0,o.jsx)(t,{widgetInfo:e,key:s}):(0,o.jsx)("div",{className:"widget-card",style:{visibility:"hidden"},key:s})))))},this.togglePopper=e=>{this.state.open&&this.props.onClose&&this.props.onClose(e)},this.getGroupList=()=>{var e,t,s;const o=[this.allGroup],i=this.state.commonWidgetList||[],n=null===(e=this.state.jimuForBuilderUtils)||void 0===e?void 0:e.CUSTOM_GROUP;return i.forEach((e=>{"number"!=typeof e.group||o.some((t=>t.value===e.group))||o.push({value:e.group,label:this.getGroupLabel(e.group)})})),(null===(s=null===(t=this.state.jimuForBuilderUtils)||void 0===t?void 0:t.showCustomWidgets)||void 0===s?void 0:s.call(t,i))&&o.push({value:n,label:this.getGroupLabel(n)}),o.filter((e=>!!e.label))},this.changeSelectedGroup=e=>{this.setState({selectedGroup:e.target.value})},this.state={selectedGroup:It,commonWidgetList:null,remoteCustomWidgetList:null,open:!0,generation:0,jimuForBuilderUtils:null}}componentDidMount(){this.loadJimuForBuilderUtilsPromise=o.cancelablePromise.cancelable(o.moduleLoader.loadModule("jimu-for-builder").then((e=>{var t;this.setState({jimuForBuilderUtils:null==e?void 0:e.utils}),this.groupLabelMap[null===(t=null==e?void 0:e.utils)||void 0===t?void 0:t.CUSTOM_GROUP]=this.props.intl.formatMessage({id:"custom",defaultMessage:S.defaultMessages.custom})})))}componentDidUpdate(e,t){!t.jimuForBuilderUtils&&this.state.jimuForBuilderUtils&&(this.loadCommonWidgetList(this.state.jimuForBuilderUtils.fetchCommonWidgetList),this.loadCustomWidgetList(this.state.jimuForBuilderUtils.fetchRemoteCustomWidgetList))}componentWillUnmount(){var e,t,s;null===(e=this.loadJimuForBuilderUtilsPromise)||void 0===e||e.cancel(),null===(t=this.loadCommonWidgetsPromise)||void 0===t||t.cancel(),null===(s=this.loadCommonWidgetsPromise)||void 0===s||s.cancel()}loadCommonWidgetList(e){e&&(this.loadCommonWidgetsPromise=o.cancelablePromise.cancelable(e().then((e=>{const t=null==e?void 0:e.filter((e=>e.manifest.widgetType!==o.WidgetType.Layout&&this.props.isAccepted(e,this.props.isPlaceholder)));this.setState({generation:this.state.generation+1,commonWidgetList:t})}))))}loadCustomWidgetList(e){e&&(this.loadRemoteCustomWidgetsPromise=o.cancelablePromise.cancelable(e().then((e=>{const t=null==e?void 0:e.filter((e=>this.props.isAccepted(e,this.props.isPlaceholder)));this.setState({generation:this.state.generation+1,remoteCustomWidgetList:t})}))))}getStyle(){const{theme:e}=this.props;return o.css`
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
    `}getGroupLabel(e){return this.groupLabelMap[e]}getCommonGroups(e,t){const s=t===It?e:null==e?void 0:e.filter((e=>e.group===t)),o={};return null==s||s.forEach((e=>{var t;e.group!==(null===(t=this.state.jimuForBuilderUtils)||void 0===t?void 0:t.CUSTOM_GROUP)&&(o[e.group]||(o[e.group]={label:this.getGroupLabel(e.group),groupId:e.group,itemList:[]}),o[e.group].itemList.push(e))})),o}getCustomGroup(e,t,s){var o,i,n;return s===It||s===(null===(o=this.state.jimuForBuilderUtils)||void 0===o?void 0:o.CUSTOM_GROUP)?{label:this.getGroupLabel(null===(i=this.state.jimuForBuilderUtils)||void 0===i?void 0:i.CUSTOM_GROUP),groupId:null===(n=this.state.jimuForBuilderUtils)||void 0===n?void 0:n.CUSTOM_GROUP,itemList:(t||[]).concat((null==e?void 0:e.filter((e=>{var t;return e.group===(null===(t=this.state.jimuForBuilderUtils)||void 0===t?void 0:t.CUSTOM_GROUP)})))||[])}:null}render(){var e,t,s;if(!this.state.open)return null;const i=this.WidgetGroup,{commonWidgetList:n,remoteCustomWidgetList:a,selectedGroup:l}=this.state;return(0,o.jsx)(ft,{theme:this.props.theme,placement:null!==(e=this.props.placement)&&void 0!==e?e:"bottom",toggle:this.togglePopper,css:this.getStyle(),version:this.state.generation,modifiers:Ct,reference:this.props.referenceElement,open:!0,forceLatestFocusElements:!0},(0,o.jsx)("div",{className:"shadow-lg content",css:this.props.css},(0,o.jsx)("div",{className:"d-flex justify-content-between align-items-center mb-3 px-20 pt-20"},(0,o.jsx)("div",{className:"title"},this.props.intl.formatMessage({id:"addWidget",defaultMessage:S.defaultMessages.addWidget})),(0,o.jsx)(S.Button,{size:"sm",icon:!0,type:"tertiary",onClick:this.togglePopper,title:this.props.intl.formatMessage({id:"close",defaultMessage:o.defaultMessages.close})},(0,o.jsx)(St,null))),(0,o.jsx)("div",{className:"d-flex justify-content-between align-items-center mb-3 px-20"},(0,o.jsx)("div",{className:"groups"},this.props.intl.formatMessage({id:"category",defaultMessage:S.defaultMessages.category})),(0,o.jsx)(S.Select,{className:"group-select",size:"sm",value:l,onChange:this.changeSelectedGroup},this.getGroupList().map(((e,t)=>(0,o.jsx)("option",{value:e.value,key:t,selected:e.value===l},e.label))))),(0,o.jsx)("div",{className:"w-100 list-container px-20"},!n&&(0,o.jsx)(S.Loading,{type:S.LoadingType.Secondary}),n&&Object.values(this.getCommonGroups(n,l)).sort(((e,t)=>e.groupId-t.groupId)).map(((e,t)=>(0,o.jsx)(i,{key:t,group:e}))),(null===(s=null===(t=this.state.jimuForBuilderUtils)||void 0===t?void 0:t.showCustomWidgets)||void 0===s?void 0:s.call(t,n))&&(0,o.jsx)(i,{group:this.getCustomGroup(n,a,l)}))))}}jt.defaultProps={isPlaceholder:!1,isAccepted:()=>!0};const Pt=(0,b.withTheme2)((0,o.injectIntl)(jt));var Ot=h(96262);function Nt(e){var t,s,i,n;const{template:a,onClick:l}=e,r=(0,o.getAppStore)().getState().appContext.locale,c=null!==(s=null===(t=a.i18nLabel)||void 0===t?void 0:t[r])&&void 0!==s?s:a.label,p=null!==(n=null===(i=a.i18nDescription)||void 0===i?void 0:i[r])&&void 0!==n?n:a.description,d=null!=a.gifThumbnail,u="templage_desc_"+a.name,m=o.React.useMemo((()=>o.css`
    transform: ${(0,o.getAppStore)().getState().appContext.isRTL&&a.flipThumbnail?"scaleX(-1);":""}  ;
  `),[a]);return(0,o.jsx)("div",{className:"block-item"},(0,o.jsx)(S.Tooltip,{title:p},(0,o.jsx)(S.Button,{role:"option","aria-label":c,"aria-describedby":u,onClick:l,className:"block-item--icon p-0"},(0,o.jsx)("img",{className:(0,o.classNames)("default-icon",{"multiple-icon":d}),css:m,src:a.thumbnail,width:a.thumbnailWidth/2,height:a.thumbnailHeight/2}),d&&(0,o.jsx)("img",{className:(0,o.classNames)("gif-icon",{"multiple-icon":d}),css:m,src:a.gifThumbnail}))),(0,o.jsx)("span",{"aria-hidden":!0,className:"block-item-label text-center mt-2",css:o.css`max-width: ${a.thumbnailWidth/2}px`},c),(0,o.jsx)("span",{"aria-hidden":!0,className:"sr-only",id:u},p))}function Tt(e){const{templates:t,onItemSelect:s}=e,i=function(e,t){var s={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(s[o[i]]=e[o[i]])}return s}(e,["templates","onItemSelect"]),n=o.React.useMemo((()=>(0,b.getBuilderThemeVariables)()),[]),a=o.React.useMemo((()=>o.css`
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
  `),[n]);return(0,o.jsx)("div",Object.assign({css:a},i,{role:"listbox"}),t.map((e=>(0,o.jsx)(Nt,{key:e.name,template:e,onClick:()=>s(e)}))))}class Mt extends o.React.PureComponent{constructor(){super(...arguments),this.onTabSelect=e=>{this.props.onTabSelect(e)}}render(){const{theme:e}=this.props;return(0,o.jsx)("div",{className:"w-100 h-100"},(0,o.jsx)("h5",{className:"pt-3 px-4 mb-2 text-dark-600 text-truncate",title:this.props.formatMessage("addPage")},this.props.formatMessage("addPage")),(0,o.jsx)(S.Tabs,{defaultValue:"fullScreenApp",fill:!0,type:"underline",css:o.css`
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
          `,onChange:this.onTabSelect},(0,o.jsx)(S.Tab,{id:"fullScreenApp",title:this.props.formatMessage("fullScreenApp"),className:S.FOCUSABLE_CONTAINER_CLASS},(0,o.jsx)(Tt,{className:(0,o.classNames)({[S.FOCUSABLE_CONTAINER_CLASS]:"fullScreenApp"===this.props.tabId}),templates:(0,Ot.getFullScreenPageTemplates)(),onItemSelect:this.props.onItemSelect})),(0,o.jsx)(S.Tab,{id:"scrollingPage",title:this.props.formatMessage("scrollingPage"),className:S.FOCUSABLE_CONTAINER_CLASS},(0,o.jsx)(Tt,{className:(0,o.classNames)({[S.FOCUSABLE_CONTAINER_CLASS]:"scrollingPage"===this.props.tabId}),templates:(0,Ot.getScrollingPageTemplates)(),onItemSelect:this.props.onItemSelect}))))}}const Rt=[{name:"preventOverflow",options:{boundariesElement:"viewport",padding:{bottom:20}}}];class Lt extends o.React.PureComponent{constructor(e){super(e),this.togglePopper=()=>{var e;this.state.open&&this.props.onClose&&this.props.onClose(),this.state.open&&(null===(e=this.props.referenceElement)||void 0===e||e.focus()),this.setState({open:!this.state.open})},this.tabSelect=e=>{this.setState({tabId:e})},this.onItemSelect=e=>{this.props.onClose(),this.props.onItemSelect(e)},this.state={open:!0,tabId:"fullScreenApp"}}render(){const{referenceElement:e,theme:t}=this.props;return(0,o.jsx)(ft,{placement:"bottom",theme:this.props.theme,reference:e,offset:[0,10],open:!0,toggle:this.togglePopper,showArrow:!0,modifiers:Rt,forceLatestFocusElements:!0},(0,o.jsx)("div",{css:o.css`
            max-height: 640px;
            height: calc(100vh - 150px);
            overflow: hidden;
          `},(0,o.jsx)(Mt,{theme:t,tabId:this.state.tabId,onTabSelect:this.tabSelect,formatMessage:this.props.formatMessage,onItemSelect:this.onItemSelect})))}}const At=[{name:"preventOverflow",options:{altAxis:!0,boundariesElement:"viewport",padding:{bottom:20}}},{name:"flip",options:{fallbackPlacements:["right","left"]}}];function Et(e){const{title:t,templates:s,templateContentStyle:i,referenceElement:n,onItemSelect:a,onClose:l}=e,r=o.React.useMemo((()=>e.theme||(0,b.getBuilderThemeVariables)()),[]),c=o.React.useMemo((()=>o.css`
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
  `),[r,t]),p=o.React.useCallback((()=>{null==l||l(),"function"==typeof(null==n?void 0:n.focus)&&o.lodash.defer((()=>{null==n||n.focus()}))}),[l,n]);return(0,o.jsx)(ft,{placement:"bottom",theme:r,css:c,reference:n,offset:[0,10],toggle:p,open:!0,showArrow:!0,modifiers:At},t&&(0,o.jsx)("h5",{className:"text-dark-600 text-truncate title px-4 pt-3 mb-0"},t),(0,o.jsx)("div",{className:"template-content",style:i},(0,o.jsx)(Tt,{templates:s,onItemSelect:a})))}var Dt=h(59216),Ut=h.n(Dt);const Ft=e=>{const{className:t}=e,s=function(e,t){var s={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(s[o[i]]=e[o[i]])}return s}(e,["className"]),i=(0,o.classNames)("jimu-icon jimu-icon-component",t);return o.React.createElement(S.SVG,Object.assign({className:i,src:Ut()},s))};var Bt=h(34750),$t=h.n(Bt);const zt=e=>{const{className:t}=e,s=function(e,t){var s={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(s[o[i]]=e[o[i]])}return s}(e,["className"]),i=(0,o.classNames)("jimu-icon jimu-icon-component",t);return o.React.createElement(S.SVG,Object.assign({className:i,src:$t()},s))};class Wt extends o.React.PureComponent{constructor(e){super(e),this.initData=()=>{if(Array.isArray(this.props.value)&&this.props.value.length)return!1;const e=this.deepClone(this.state.option);e.ruleOptionName=this.props.intl.formatMessage({id:"option",defaultMessage:S.defaultMessages.option})+0;const t=[e];this.props.onChange(t)},this.onOptionChange=(e,t,s,o)=>{const i=this.deepClone(this.props.value);i[t].rule[e][s]=o,this.props.onChange(i,t)},this.onSelectChange=(e,t,s)=>{const o=e[0];if(!o)return;const i=this.deepClone(this.props.value),n=o.name;i[s].rule[t].jimuFieldName=n,this.props.onChange(i,s)},this.addOption=()=>{const e=Array.isArray(this.props.value),t=e?this.props.value.length:0,s=this.createOptionText(t),o=this.deepClone(this.state.option);o.ruleOptionName=s;const i=e?this.deepClone(this.props.value):[];i.push(o),this.props.onChange(i)},this.createOptionText=e=>{const t=this.props.intl.formatMessage({id:"option",defaultMessage:S.defaultMessages.option})+e;if(!this.isOptionNameRepeat(t))return t;const s=e+1;return this.createOptionText(s)},this.deleteOption=e=>{const t=this.deepClone(this.props.value);t.splice(e,1),this.props.onChange(t)},this.deleteAll=()=>{this.props.onChange([])},this.toggleOptionNameDisplay=(e,t)=>{const s=this.deepClone(this.props.value);let o=s[e].isEditOptionName;if(o=!!o,s[e].isEditOptionName=!o,t){const o=t;!this.isOptionNameRepeat(o)&&o&&(s[e].ruleOptionName=o)}this.props.onChange(s)},this.isOptionNameRepeat=e=>{if(!Array.isArray(this.props.value))return!1;let t=!1;return this.props.value.forEach((s=>{s.ruleOptionName===e&&(t=!0)})),t},this.deepClone=e=>{const t=Array.isArray(e)?[]:{};for(const s in e){const o=("object"==typeof e[s]||"function"==typeof e[s])&&null!==e[s];t[s]=o?this.deepClone(e[s]):e[s]}return t},this.setInputRef=e=>{e&&(e.select(),e.focus())},this.createRuleOptionElement=(e,t,s,i)=>{const n=t.jimuFieldName?(0,o.Immutable)([t.jimuFieldName]):(0,o.Immutable)([]);return(0,o.jsx)("div",{className:"select-down-con",key:t.jimuFieldName||s},this.props.useDataSource&&(0,o.jsx)("div",{className:"sort-field-selector"},(0,o.jsx)(Ge.FieldSelector,{useDataSources:e,onChange:(e,t)=>{this.onSelectChange(e,s,i)},selectedFields:n,isSearchInputHidden:!0,isDataSourceDropDownHidden:!0,useDropdown:!0})),[{getTitle:()=>this.nls("ascending"),order:o.OrderRule.Asc,getIcon:()=>h(70502)},{getTitle:()=>this.nls("decending"),order:o.OrderRule.Desc,getIcon:()=>h(78115)}].map(((e,n,a)=>(0,o.jsx)(S.Button,{key:n,title:e.getTitle(),type:t.order===e.order?"primary":"secondary",className:"sort-button "+(this.props.singleRowItemOnly&&t.order!==e.order?"collapse":""),onClick:()=>{this.onOptionChange(s,i,"order",this.props.singleRowItemOnly?[...a,a[0]][n+1].order:e.order)}},(0,o.jsx)(S.Icon,{size:"12",icon:e.getIcon(),className:"sort-arrow-down-icon"})))))},this.createOptionNameElement=(e,t)=>{const s=e.ruleOptionName,i=this.props.intl.formatMessage({id:"optionNamePlaceholder",defaultMessage:S.defaultMessages.optionNamePlaceholder}),n=(0,o.jsx)(S.TextInput,{className:"flex-grow-1 h-100",size:"sm",type:"text",defaultValue:s,onAcceptValue:e=>{this.toggleOptionNameDisplay(t,e)},ref:e=>{this.setInputRef(e)},placeholder:i,title:s});return(0,o.jsx)("div",{className:"option-name d-flex align-items-center flex-grow-1","aria-label":s},e.isEditOptionName?n:(0,o.jsx)("span",{title:s,onDoubleClick:()=>{this.toggleOptionNameDisplay(t)}},s),(0,o.jsx)(S.Button,{size:"sm",type:"tertiary",icon:!0,className:"padding-0 option-name-icon-con",title:this.nls("edit"),onClick:()=>{this.toggleOptionNameDisplay(t)}},(0,o.jsx)(Ft,{size:"s",className:"option-name-icon"})))},this.createOptionElement=(e,t,s)=>{let i;i=(0,o.jsx)("div",{className:"close-con text-right"},(0,o.jsx)(S.Button,{size:"sm",icon:!0,type:"tertiary",className:"padding-0",title:this.nls("deleteOption"),onClick:()=>{this.deleteOption(s)}},(0,o.jsx)(St,{size:this.props.singleRowItemOnly?14:12,className:"sort-arrow-down-icon"})));const n=()=>t.rule.map(((t,o)=>this.createRuleOptionElement(e,t,o,s)));return(0,o.jsx)("div",{className:"select-con",key:s},this.props.singleRowItemOnly&&(0,o.jsx)(o.React.Fragment,null,(0,o.jsx)("div",{className:"option-name-con"},(0,o.jsx)(S.Icon,{size:14,icon:h(17720)}),n(),i))||(0,o.jsx)(o.React.Fragment,null,(0,o.jsx)("div",{className:"option-name-con d-flex align-items-center"},(()=>this.createOptionNameElement(t,s))(),i),n()))},this.nls=e=>this.props.intl?this.props.intl.formatMessage({id:e,defaultMessage:S.defaultMessages[e]}):e,this.onDataSourceCreated=e=>{},this.state={option:{ruleOptionName:"",isEditOptionName:!1,rule:[{jimuFieldName:"",order:o.OrderRule.Asc}]}}}componentDidMount(){this.initData()}componentDidUpdate(e,t){var s,o,i;(null===(s=null==e?void 0:e.useDataSource)||void 0===s?void 0:s.dataSourceId)!==(null===(i=null===(o=this.props)||void 0===o?void 0:o.useDataSource)||void 0===i?void 0:i.dataSourceId)&&Promise.resolve(!0).then((()=>{this.initData()}))}render(){const{value:e}=this.props,t=this.props.intl.formatMessage({id:"invalidExpression",defaultMessage:S.defaultMessages.invalidExpression});return(0,o.jsx)("div",{className:(0,o.classNames)("sort-con",this.props.singleRowItemOnly&&"single-row-item",{[this.props.className]:!!this.props.className})},(0,o.jsx)("div",null,(0,o.jsx)(S.Button,{type:"tertiary",className:"add-option-btn"},(0,o.jsx)(zt,{size:"s",className:"add-option-icon"}),(0,o.jsx)("span",{onClick:this.addOption},this.props.intl.formatMessage({id:"addOption",defaultMessage:S.defaultMessages.addOption}))),(0,o.jsx)(o.DataSourceComponent,{useDataSource:this.props.useDataSource,onDataSourceCreated:this.onDataSourceCreated},(s=>Array.isArray(e)?(this.props.optionRenderFunction||(()=>e.map(((e,t)=>{var s;return this.createOptionElement((0,o.Immutable)([null===(s=this.props.useDataSource)||void 0===s?void 0:s.asMutable({deep:!0})]),e,t)}))))(this.props,this.createOptionElement):t)),Array.isArray(e)&&0===e.length&&(0,o.jsx)("div",{className:"no-sort-remind"},(0,o.jsx)("div",null,this.props.intl.formatMessage({id:"noOptionRemindText",defaultMessage:S.defaultMessages.noOptionRemindText})),(0,o.jsx)("div",null,this.props.intl.formatMessage({id:"pleaceAddOne",defaultMessage:S.defaultMessages.pleaceAddOne})))))}}const Gt=(0,b.withStyles)((0,o.injectIntl)(Wt),"SortSetting");var Vt=h(60843),_t=h.n(Vt);const qt=e=>{const{className:t}=e,s=function(e,t){var s={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(s[o[i]]=e[o[i]])}return s}(e,["className"]),i=(0,o.classNames)("jimu-icon jimu-icon-component",t);return o.React.createElement(S.SVG,Object.assign({className:i,src:_t()},s))};var Ht=h(18656),Jt=h.n(Ht);const Zt=e=>{const{className:t}=e,s=function(e,t){var s={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(s[o[i]]=e[o[i]])}return s}(e,["className"]),i=(0,o.classNames)("jimu-icon jimu-icon-component",t);return o.React.createElement(S.SVG,Object.assign({className:i,src:Jt()},s))};const Kt=e=>{const t=S.hooks.useTranslate(),{vertical:s=!1,onChange:i,autoFlip:n=!0,className:a,size:l="sm"}=e,r=function(e,t){var s={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(s[o[i]]=e[o[i]])}return s}(e,["vertical","onChange","autoFlip","className","size"]);return o.React.createElement(S.AdvancedButtonGroup,Object.assign({size:l,className:(0,o.classNames)("setting--direction-selector",a)},r),o.React.createElement(S.Button,{size:l,title:t("horizontal"),type:"default",icon:!0,active:!s,onClick:()=>i(!1)},o.React.createElement(qt,{autoFlip:n})),o.React.createElement(S.Button,{size:l,title:t("vertical"),type:"default",icon:!0,active:s,onClick:()=>i(!0)},o.React.createElement(Zt,null)))};var Qt;!function(e){e.Auto="AUTO",e.Custom="CUSTOM"}(Qt||(Qt={}));class Xt extends o.React.PureComponent{constructor(e){super(e),this.toggleDropdown=()=>{this.setState((e=>({dropdownOpen:!e.dropdownOpen})))},this.state={dropdownOpen:!1},this._onAutoSelected=this.onSelect.bind(this,Qt.Auto),this._onCustomSelected=this.onSelect.bind(this,Qt.Custom)}onSelect(e){this.props.mode!==e&&this.props.onChange(e)}getStyle(){return o.css`
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
    `}autoInput(){return(0,o.jsx)(S.Input,{style:{width:"110px"},css:o.css`
          background-color: var(--light-600);
          border-color: var(--light-600);
          color: var(--black);
          height: 1.625rem;
          border-width: 0;
          padding: 0 0.25rem;
        `,disabled:!0,value:this.props.intl.formatMessage({id:"auto"})})}render(){const{mode:e,intl:t}=this.props,s=t.formatMessage({id:"auto"}),i=t.formatMessage({id:"custom"});return(0,o.jsx)("div",{className:"d-flex",css:this.getStyle()},(0,o.jsx)(S.Dropdown,{className:"auto-dropdown",isOpen:this.state.dropdownOpen,toggle:this.toggleDropdown},(0,o.jsx)(S.DropdownButton,{icon:!0}),(0,o.jsx)(S.DropdownMenu,null,(0,o.jsx)(S.DropdownItem,{onClick:this._onAutoSelected},(0,o.jsx)("span",{css:o.css`width: 1rem;`},e===Qt.Auto&&(0,o.jsx)(at,{size:"s"})),s),(0,o.jsx)(S.DropdownItem,{onClick:this._onCustomSelected},(0,o.jsx)("span",{css:o.css`width: 1rem;`},e===Qt.Custom&&(0,o.jsx)(at,{size:"s"})),i))),e===Qt.Auto&&this.autoInput(),e===Qt.Custom&&this.props.children)}}const Yt=(0,o.injectIntl)(Xt),es=e=>{const{title:t,children:s,selected:i,onClick:n}=e,a=(()=>{var e,t,s;const i=(0,b.useTheme)(),n=null===(e=null==i?void 0:i.colors)||void 0===e?void 0:e.palette.primary[600],a=null===(t=null==i?void 0:i.colors)||void 0===t?void 0:t.palette.light[200],l=null===(s=null==i?void 0:i.colors)||void 0===s?void 0:s.black;return o.React.useMemo((()=>o.css`
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
  `),[n,a,l])})();return(0,o.jsx)("div",{css:a,title:t,className:(0,o.classNames)("quick-style-item",{selected:i}),onClick:n},(0,o.jsx)("div",{className:"overlay"}),s)};const ts=[{name:"preventOverflow",options:{altAxis:!0}},{name:"flip",options:{fallbackPlacements:["bottom-end","top-end"]}}],ss=(0,b.styled)(S.Popper)((()=>{var e,t,s,o;const i=(0,b.getTheme2)(),n=null===(e=null==i?void 0:i.colors)||void 0===e?void 0:e.palette.dark[600],a=null===(t=null==i?void 0:i.colors)||void 0===t?void 0:t.palette.dark[800];return`\n    background-color: ${null===(s=null==i?void 0:i.colors)||void 0===s?void 0:s.palette.light[300]};\n    color: ${n};\n    border: 1px solid ${null===(o=null==i?void 0:i.colors)||void 0===o?void 0:o.palette.light[600]};\n    > .popper-box {\n      > .panel-header {\n        color: ${n};\n        .action-btn {\n          color: ${n};\n          &:hover {\n            color: ${a};\n          }\n        }\n      }\n    }\n  `})),os=e=>{const{className:t,placement:s="right-start",popperNodeRef:i,onInitResizeHandler:n,onInitDragHandler:a,version:l,modifiers:r}=e,c=function(e,t){var s={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(s[o[i]]=e[o[i]])}return s}(e,["className","placement","popperNodeRef","onInitResizeHandler","onInitDragHandler","version","modifiers"]),p=o.React.useRef(null),d=S.hooks.useForkRef(i,p),[u,m]=S.hooks.useControlled({controlled:l,default:0}),g=o.React.useMemo((()=>[...ts,...null!=r?r:[]]),[r]);return o.React.useEffect((()=>{null==n||n((()=>{var e;null===(e=p.current)||void 0===e||e.classList.add("d-none")}),null,(()=>{var e;m((e=>e+1)),null===(e=p.current)||void 0===e||e.classList.remove("d-none")}))}),[n,m]),o.React.useEffect((()=>{null==a||a((()=>{var e;null===(e=p.current)||void 0===e||e.classList.add("d-none")}),null,(()=>{var e;m((e=>e+1)),null===(e=p.current)||void 0===e||e.classList.remove("d-none")}))}),[a,m]),o.React.createElement(ss,Object.assign({className:(0,o.classNames)("shadow-2",t),modifiers:g,placement:s,popperNodeRef:d,version:u},c))};const is=e=>{const{onClose:t,children:s,floating:i}=e,n=function(e,t){var s={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(s[o[i]]=e[o[i]])}return s}(e,["onClose","children","floating"]),a=S.hooks.useTranslate(S.defaultMessages)("quickStyle");return o.React.createElement(os,Object.assign({},n,{headerTitle:i?a:"",onHeaderClose:t}),o.React.createElement(o.React.Fragment,null,!i&&o.React.createElement(S.PanelHeader,{className:"px-3 py-2",title:a,onClose:t}),s))},ns=6,as=6;var ls,rs;!function(e){e.Both="Both",e.GeocodeService="GeocodeService",e.FeatureService="FeatureService"}(ls||(ls={})),function(e){e.GeocodeService="GeocodeService",e.FeatureService="FeatureService"}(rs||(rs={}));const cs="FieldName",ps="FieldValue",ds=99,us=1e3,ms=20,gs="__",hs="objectid",vs="address",fs="Default Address",ys="https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer",bs="ArcGIS World Geocoding Service";var Ss=h(77756),ws=h(20663);const xs={jimuName:hs,alias:"OBJECTID",type:o.JimuFieldType.Number,name:hs},ks=(e="",t=[])=>{const s={};return null==t||t.forEach(((e,t)=>{s[null==e?void 0:e.jimuName]=e,0===t&&(s[hs]=xs)})),{label:e,idField:hs,fields:s}},Cs=(e,t=0)=>{let s=fs;return null==e||e.forEach((o=>{s=t?`${s}${t}`:s,o.jimuName===s&&(s=Cs(e,t+=1))})),s},Is=e=>null==e?void 0:e.map((e=>e.configId)),js=e=>e&&0!==(null==e?void 0:e.length)?`config_${Ps(e)+1}`:"config_0",Ps=e=>{var t;const s=null==e?void 0:e.map((e=>{var t;const s=null===(t=null==e?void 0:e.split("_"))||void 0===t?void 0:t.pop();return s?Number(s):0}));return null===(t=null==s?void 0:s.sort(((e,t)=>t-e)))||void 0===t?void 0:t[0]};var Os=h(59587);const Ns=e=>{const t={overrideItemBlockInfo:({itemBlockInfo:e},t)=>({name:Os.TreeItemActionType.RenderOverrideItem,children:[{name:Os.TreeItemActionType.RenderOverrideItemDroppableContainer,children:[{name:Os.TreeItemActionType.RenderOverrideItemDraggableContainer,children:[{name:Os.TreeItemActionType.RenderOverrideItemBody,children:[{name:Os.TreeItemActionType.RenderOverrideItemMainLine,children:[{name:Os.TreeItemActionType.RenderOverrideItemDragHandle},{name:Os.TreeItemActionType.RenderOverrideItemIcon,autoCollapsed:!0},{name:Os.TreeItemActionType.RenderOverrideItemTitle},{name:Os.TreeItemActionType.RenderOverrideItemCommands}]}]}]}]}]})},s=o.css`
    &{
      max-height: 256px;
      overflow-y: auto;
    }
  `,i=(0,b.useTheme)(),{disPlayField:n,useDataSource:a,onFieldChange:l}=e;return(0,o.jsx)("div",{className:"w-100"},(0,o.jsx)(Ge.FieldSelector,{useDataSources:a?(0,o.Immutable)([a]):(0,o.Immutable)([]),onChange:e=>{l(e,n,!0)},selectedFields:(0,o.Immutable)(null==n?void 0:n.map((e=>null==e?void 0:e.name))),isMultiple:!0,isSearchInputHidden:!1,isDataSourceDropDownHidden:!0,useDropdown:!0,useMultiDropdownBottomTools:!0,types:(0,o.Immutable)([o.JimuFieldType.Number,o.JimuFieldType.String])}),(0,o.jsx)("div",{css:s},(0,o.jsx)(Os.List,Object.assign({size:"sm",className:"mt-2",itemsJson:Array.from(n).map(((e,t)=>({itemStateDetailContent:e,itemKey:`${null==e?void 0:e.name}${t}`,itemStateIcon:Ge.dataComponentsUtils.getIconFromFieldType(e.type,i),itemStateTitle:e.alias||e.jimuName||e.name,itemStateCommands:[]}))),dndEnabled:!0,onUpdateItem:(e,t)=>{const{itemJsons:s}=t.props,[,o]=s,i=o.map((e=>e.itemStateDetailContent));l(i,n,!0)},isItemFocused:()=>!1},t))))},{useEffect:Ts}=o.React,Ms=(0,o.Immutable)([Ge.AllDataSourceTypes.FeatureLayer,Ge.AllDataSourceTypes.SceneLayer]),Rs=e=>{var t;const s=S.hooks.useTranslate(S.defaultMessages,o.defaultMessages),{trigger:i,isOpen:n,id:a,datasourceConfig:l,dsConfigItemIndex:r,popperFocusNode:c,toggle:p,updateConfigForLayerOptions:d,onSettingChange:u,hideIconSetting:m}=e,g=(null==l?void 0:l[r])||(0,o.Immutable)({}),{configId:h,label:v,icon:f,searchFields:y,searchExact:b,displayFields:w,hint:x,useDataSource:k}=g,[C,I]=o.React.useState(null),[j,P]=o.React.useState(v);Ts((()=>{h&&P(v)}),[h]);const O=(e,t)=>{const s=Is(null==l?void 0:l.asMutable({deep:!0})),o=h||js(s);let i=l?l.asMutable({deep:!0}):[];const n=null==e?void 0:e.getLabel(),a=N(t);t.fields=null==a?void 0:a.map((e=>null==e?void 0:e.jimuName));const r={configId:o,icon:null,label:n,displayLabel:!0,useDataSource:t,displayFields:a,searchFields:a,hint:"",searchServiceType:rs.FeatureService};return(null==g?void 0:g.configId)?i=i.map((e=>(null==e?void 0:e.configId)===o?r:e)):i.push(r),{dsConfigItem:r,datasourceConfig:i}},N=e=>{var t,s,i,n;const a=o.DataSourceManager.getInstance().getDataSource(null==e?void 0:e.dataSourceId),l=null===(t=a.getLayerDefinition())||void 0===t?void 0:t.displayField,r=null===(s=null==a?void 0:a.getSchema())||void 0===s?void 0:s.fields;let c;const p=[];for(const e in r)(null===(i=null==r?void 0:r[e])||void 0===i?void 0:i.type)!==o.JimuFieldType.Date&&p.push(null==r?void 0:r[e]),(null===(n=null==r?void 0:r[e])||void 0===n?void 0:n.name)===l&&(c=null==r?void 0:r[e]);const d=(null==p?void 0:p.length)>1?p[1]:p[0];return c?[(0,o.Immutable)(c)]:[(0,o.Immutable)(d)]},T=(e,t,s=!1)=>{var i,n;if(!e)return;const a=s?"displayFields":"searchFields";let c=R(e);0===(null==c?void 0:c.length)&&(c=null===(n=null===(i=(0,o.Immutable)(t))||void 0===i?void 0:i.asMutable({deep:!0}))||void 0===n?void 0:n.splice(0,1));const p=null==l?void 0:l.asMutable({deep:!0});let u=null==g?void 0:g.setIn([a],c);u=M(u),null==p||p.splice(r,1,null==u?void 0:u.asMutable({deep:!0})),d((0,o.Immutable)(p))},M=e=>{var t,s,o,i;const n=(null===(s=null===(t=null==e?void 0:e.searchFields)||void 0===t?void 0:t.asMutable({deep:!0}))||void 0===s?void 0:s.map((e=>null==e?void 0:e.jimuName)))||[],a=(null===(i=null===(o=null==e?void 0:e.displayFields)||void 0===o?void 0:o.asMutable({deep:!0}))||void 0===i?void 0:i.map((e=>null==e?void 0:e.jimuName)))||[],l=Array.from(new Set(n.concat(a)));return e.setIn(["useDataSource","fields"],l)},R=e=>null==e?void 0:e.filter((e=>(null==e?void 0:e.type)!==(null===o.JimuFieldType||void 0===o.JimuFieldType?void 0:o.JimuFieldType.Date))),L=(e,t)=>{const s=null==l?void 0:l.asMutable({deep:!0}),i=null==g?void 0:g.setIn(e,t);null==s||s.splice(r,1,null==i?void 0:i.asMutable({deep:!0})),u((0,o.Immutable)(s))},A=(null==g?void 0:g.useDataSource)?[null===(t=null==g?void 0:g.useDataSource)||void 0===t?void 0:t.asMutable({deep:!0})]:[];return(0,o.jsx)(Ss.SidePopper,{isOpen:n,position:"right",toggle:p,trigger:i,title:s("setLayerSource"),backToFocusNode:c},(0,o.jsx)("div",{className:"w-100 h-100",css:o.css`overflow: auto;`},(0,o.jsx)(Ss.SettingSection,{style:{paddingTop:0}},(0,o.jsx)(Ss.SettingRow,{flow:"wrap",label:s("data")},(0,o.jsx)(Ge.DataSourceSelector,{closeDataSourceListOnChange:!0,types:Ms,useDataSources:(0,o.Immutable)(A),disableRemove:()=>!0,mustUseDataSource:!0,onChange:e=>{e&&e.length>0?(e=>{o.DataSourceManager.getInstance().createDataSourceByUseDataSource((0,o.Immutable)(e)).then((e=>{const t=(s=e)?s.type===o.DataSourceTypes.SceneLayer?s.getAssociatedDataSource():s:null;var s;return t||Promise.reject(Error("")),t})).then((t=>{const{datasourceConfig:s}=O(t,e);d((0,o.Immutable)(s))}))})(e[0]):(()=>{const e=Is(null==l?void 0:l.asMutable({deep:!0})),t=h||js(e);let s=l?l.asMutable({deep:!0}):[];const i={configId:t,icon:null,label:"......",displayLabel:!0,useDataSource:null,displayFields:[],searchFields:[],hint:"",searchServiceType:rs.FeatureService};s=s.map((e=>(null==e?void 0:e.configId)===t?i:e)),d((0,o.Immutable)(s))})()},widgetId:a}))),(null==g?void 0:g.configId)&&C&&(0,o.jsx)("div",null,(0,o.jsx)(Ss.SettingSection,null,(0,o.jsx)(Ss.SettingRow,{flow:"wrap",label:s("label")},(0,o.jsx)(S.TextInput,{size:"sm",value:j||"",title:j||"",onAcceptValue:e=>{e?(P(null==e?void 0:e.trim()),L(["label"],null==e?void 0:e.trim())):P(v)},onChange:e=>{var t;const s=null===(t=null==e?void 0:e.target)||void 0===t?void 0:t.value;P(s)},className:"w-100",placeholder:s("findAddressOrPlace")}))),!m&&(0,o.jsx)(Ss.SettingSection,null,(0,o.jsx)(Ss.SettingRow,{label:s("searchIcon")},(0,o.jsx)(ws.IconPicker,{icon:f,onChange:e=>{L(["icon"],e)},configurableOption:"none"}))),(0,o.jsx)(Ss.SettingSection,{title:s("searchOptions")},(0,o.jsx)(Ss.SettingRow,{flow:"wrap",label:s("selectSearchFields")},(0,o.jsx)(Ge.FieldSelector,{useDataSources:k?(0,o.Immutable)([k]):(0,o.Immutable)([]),onChange:e=>{T(e,y)},selectedFields:(0,o.Immutable)(null==y?void 0:y.map((e=>null==e?void 0:e.name))),isMultiple:!0,isSearchInputHidden:!1,isDataSourceDropDownHidden:!0,useDropdown:!0,useMultiDropdownBottomTools:!0,types:(0,o.Immutable)([o.JimuFieldType.Number,o.JimuFieldType.String])}),(0,o.jsx)("div",{className:"mt-2"},(0,o.jsx)(S.Checkbox,{checked:b,onClick:e=>{const t=e.currentTarget;t&&L(["searchExact"],t.checked)},className:"mr-1"})," ",s("exactMatch"))),(0,o.jsx)(Ss.SettingRow,{flow:"wrap",label:s("displayFields")},(0,o.jsx)(Ns,{disPlayField:w||[],onFieldChange:T,useDataSource:k})),(0,o.jsx)(Ss.SettingRow,{flow:"wrap",label:s("searchHint")},(0,o.jsx)(S.TextInput,{size:"sm",value:x||"",title:x||"",onChange:e=>{var t;const s=null===(t=null==e?void 0:e.target)||void 0===t?void 0:t.value;L(["hint"],s)},className:"w-100",placeholder:s("findAddressOrPlace")})))),(null==A?void 0:A[0])&&(0,o.jsx)("div",{className:"waiting-for-database"},(0,o.jsx)(o.DataSourceComponent,{useDataSource:(0,o.Immutable)(A[0]),onDataSourceCreated:e=>{I(e)}}))))};var Ls=h(52785),As=function(e,t,s,o){return new(s||(s=Promise))((function(i,n){function a(e){try{r(o.next(e))}catch(e){n(e)}}function l(e){try{r(o.throw(e))}catch(e){n(e)}}function r(e){var t;e.done?i(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(a,l)}r((o=o.apply(e,t||[])).next())}))};const{useEffect:Es}=o.React;var Ds;!function(e){e.Pass="Pass",e.NotHttps="Not_Https",e.InvalidURL="Invalid_URL"}(Ds||(Ds={}));const Us=e=>{const t=S.hooks.useTranslate(S.defaultMessages,o.defaultMessages),{id:s,trigger:i,toggle:n,isOpen:a,datasourceConfig:l,dsConfigItemIndex:r,popperFocusNode:c,createOutputDs:p,onSettingChange:d,updateConfigForLayerOptions:u,hideIconSetting:m}=e,g=(null==l?void 0:l[r])||(0,o.Immutable)({}),{configId:h,label:v,icon:f,hint:y,outputDataSourceId:b,displayFields:w}=g,[x,k]=o.React.useState(v),[C,I]=o.React.useState(!1),[j,P]=o.React.useState(Ds.Pass),[O,N]=o.React.useState(null==g?void 0:g.useUtility),[T,M]=o.React.useState(!1);Es((()=>{a&&(P(Ds.Pass),M(!1),(null==g?void 0:g.useUtility)?(D(null==g?void 0:g.useUtility).then((e=>{L(e).then((e=>{P(null==e?void 0:e.urlCheckResultType)}))})),N(null==g?void 0:g.useUtility),k(null==g?void 0:g.label)):(N(null),k(bs)))}),[r,h,a]),Es((()=>{k(null==g?void 0:g.label)}),[g]);const R=(e,t)=>{let s;return null==e||e.forEach((e=>{var o;(null===(o=null==e?void 0:e.jimuName)||void 0===o?void 0:o.toLocaleLowerCase())===t&&(s=e)})),s||(s=e[0]),[s]},L=e=>As(void 0,void 0,void 0,(function*(){const t=new RegExp("^(([h][t]{2}[p][s])?://)");if(I(!1),!e||!t.test(e))return I(!0),Promise.resolve({urlCheckResultType:Ds.NotHttps});try{return(0,o.loadArcGISJSAPIModules)(["esri/request"]).then((t=>{const[s]=t;return s(e,{query:{f:"json"},responseType:"json"}).then((e=>{const t=(null==e?void 0:e.data)||{};if(I(!0),null==t?void 0:t.capabilities){const e=(null==t?void 0:t.singleLineAddressField)||{},s=(null==t?void 0:t.addressFields)||[];return Promise.resolve({urlCheckResultType:Ds.Pass,singleLineFieldName:null==e?void 0:e.name,addressFields:s})}return Promise.resolve({urlCheckResultType:Ds.InvalidURL})}))}))}catch(e){return I(!0),Promise.resolve({urlCheckResultType:Ds.InvalidURL})}})),A=(e,t)=>{const s=null==l?void 0:l.asMutable({deep:!0}),i=null==g?void 0:g.setIn(e,t);null==s||s.splice(r,1,null==i?void 0:i.asMutable({deep:!0})),d((0,o.Immutable)(s))},E=()=>{const e=Is(null==l?void 0:l.asMutable({deep:!0})),t=h||js(e);let s=l?l.asMutable({deep:!0}):[];const i={configId:t,icon:null,label:".....",hint:"",useUtility:null,searchServiceType:rs.GeocodeService,singleLineFieldName:""};s=l.map((e=>(null==e?void 0:e.configId)===t?i:e)),u((0,o.Immutable)(s))},D=e=>As(void 0,void 0,void 0,(function*(){return o.UtilityManager.getInstance().getUrlOfUseUtility(e).then((e=>Promise.resolve(e)))})),U=e=>o.UtilityManager.getInstance().getLabelOfUseUtility(e),F=o.css`
    &>div {
      padding: 0!important;
    }
  `;return(0,o.jsx)(Ss.SidePopper,{isOpen:a,position:"right",toggle:n,trigger:i,title:t("setLocatorSource"),backToFocusNode:c},(0,o.jsx)("div",{className:"w-100 h-100",css:o.css`overflow: auto;`},(0,o.jsx)(Ss.SettingSection,{style:{paddingTop:0}},(0,o.jsx)(Ss.SettingRow,{flow:"wrap",label:t("locatorUrl")},(0,o.jsx)("div",{className:"w-100",css:F},(0,o.jsx)(Ls.UtilitySelector,{useUtilities:(0,o.Immutable)(O?[O]:[]),onChange:e=>{const t=e[0];N(t||null),t?(M(!0),D(t).then((e=>{L(e).then((e=>{M(!1),P(null==e?void 0:e.urlCheckResultType),(null==e?void 0:e.urlCheckResultType)!==Ds.Pass?N(null):((e,t,i)=>{const n=Is(null==l?void 0:l.asMutable({deep:!0})),a=h||js(n);let r=l?l.asMutable({deep:!0}):[];const c=U(t),{addressFieldsSchema:d,defaultAddressFieldName:m}=((e=[])=>{const t=null==e?void 0:e.map((e=>({jimuName:null==e?void 0:e.alias,alias:null==e?void 0:e.alias,type:o.JimuFieldType.String,name:null==e?void 0:e.alias}))),s=Cs(t,0),i={jimuName:s,alias:s,type:o.JimuFieldType.String,name:s};return t.unshift(i),{addressFieldsSchema:t,defaultAddressFieldName:s}})(i),v={configId:a,icon:null,label:c,hint:"",useUtility:t,searchServiceType:rs.GeocodeService,singleLineFieldName:e};p&&(v.outputDataSourceId=`${s}_output_${a}`,v.addressFields=d,v.displayFields=R(d,m),v.defaultAddressFieldName=m),(null==g?void 0:g.configId)?r=l.map((e=>(null==e?void 0:e.configId)===a?v:e)):r.push(v),u((0,o.Immutable)(r))})(e.singleLineFieldName,t||null,e.addressFields)}))}))):E()},showRemove:!1,type:o.SupportedUtilityType.GeoCoding,closePopupOnSelect:!0})),j!==Ds.Pass&&C&&(0,o.jsx)("div",{className:"d-flex w-100 align-items-center justify-content-between mt-1"},(0,o.jsx)(S.Alert,{form:"basic",type:"warning",className:"w-100",open:!0,withIcon:!0,text:t("invalidUrlMessage")})))),T&&(0,o.jsx)(S.Loading,null),j===Ds.Pass&&h&&O&&(0,o.jsx)("div",null,(0,o.jsx)(Ss.SettingSection,null,(0,o.jsx)(Ss.SettingRow,{flow:"wrap",label:t("label")},(0,o.jsx)(S.TextInput,{size:"sm",value:x||"",title:x||"",onChange:e=>{var t;const s=null===(t=null==e?void 0:e.target)||void 0===t?void 0:t.value;k(s)},onAcceptValue:e=>{e?(k(null==e?void 0:e.trim()),A(["label"],null==e?void 0:e.trim())):k(v)},className:"w-100",placeholder:t("findAddressOrPlace")}))),!m&&(0,o.jsx)(Ss.SettingSection,null,(0,o.jsx)(Ss.SettingRow,{label:t("searchIcon")},(0,o.jsx)(ws.IconPicker,{icon:f,onChange:e=>{A(["icon"],e)},configurableOption:"none"}))),(0,o.jsx)(Ss.SettingSection,{title:t("searchOptions")},b&&(0,o.jsx)(Ss.SettingRow,{flow:"wrap",label:t("displayFields")},(0,o.jsx)(Ns,{disPlayField:w||[],onFieldChange:(e,t,s=!1)=>{var i,n;if(!e)return;0===(null==e?void 0:e.length)&&(e=null===(n=null===(i=(0,o.Immutable)(t))||void 0===i?void 0:i.asMutable({deep:!0}))||void 0===n?void 0:n.splice(0,1));const a=null==l?void 0:l.asMutable({deep:!0}),c=null==g?void 0:g.setIn(["displayFields"],e);null==a||a.splice(r,1,null==c?void 0:c.asMutable({deep:!0})),u((0,o.Immutable)(a))},useDataSource:{dataSourceId:b,mainDataSourceId:b}})),(0,o.jsx)(Ss.SettingRow,{flow:"wrap",label:t("searchHint")},(0,o.jsx)(S.TextInput,{size:"sm",value:y||"",title:y||"",onChange:e=>{var t;const s=null===(t=null==e?void 0:e.target)||void 0===t?void 0:t.value;A(["hint"],s)},className:"w-100",placeholder:t("findAddressOrPlace")}))))))},Fs=h(55339),Bs=e=>{const t=S.hooks.useTranslate(o.defaultMessages,S.defaultMessages),{className:s,datasourceConfig:i,useDataSources:n,dsConfigItemIndex:a,createOutputDs:l,showSourcePanel:r,showNewSourceItem:c,id:p,onDsConfigIdChange:d,updateConfigForLayerOptions:u,hideSidePopper:m}=e,g=o.ReactRedux.useSelector((e=>{var t,s,o;return null===(o=null===(s=null===(t=null==e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.appConfig)||void 0===s?void 0:s.widgets)||void 0===o?void 0:o[p]})),h={isItemFocused:(e,t)=>{const{itemJsons:[s,o]}=t.props;return r&&o.indexOf(s)===a},overrideItemBlockInfo:({itemBlockInfo:e},t)=>({name:Os.TreeItemActionType.RenderOverrideItem,children:[{name:Os.TreeItemActionType.RenderOverrideItemDroppableContainer,children:[{name:Os.TreeItemActionType.RenderOverrideItemDraggableContainer,children:[{name:Os.TreeItemActionType.RenderOverrideItemBody,children:[{name:Os.TreeItemActionType.RenderOverrideItemMainLine,children:[{name:Os.TreeItemActionType.RenderOverrideItemDragHandle},{name:Os.TreeItemActionType.RenderOverrideItemIcon,autoCollapsed:!0},{name:Os.TreeItemActionType.RenderOverrideItemTitle},{name:Os.TreeItemActionType.RenderOverrideItemDetailToggle},{name:Os.TreeItemActionType.RenderOverrideItemCommands}]}]}]}]}]})};return(0,o.jsx)("div",{className:`w-100 mt-2 ${s||""}`},(0,o.jsx)(Os.List,Object.assign({className:"w-100",itemsJson:Array.from(i).map(((e,s)=>{var n;return{itemStateDetailContent:e,itemKey:`${s}`,itemStateTitle:null==e?void 0:e.label,itemStateIcon:{icon:null===(n=e.icon)||void 0===n?void 0:n.svg},itemStateCommands:[{label:t("deleteOption"),iconProps:()=>({icon:Fs,size:12}),action:()=>{(e=>{const t=null==i?void 0:i.asMutable({deep:!0});null==t||t.splice(e,1),u((0,o.Immutable)(t)),m()})(s)}}]}})),dndEnabled:!0,renderOverrideItemDetailToggle:(e,s)=>{var i;const{itemJsons:a}=s.props,[r]=a,c=null==r?void 0:r.itemStateDetailContent,p=(null==c?void 0:c.searchServiceType)===rs.GeocodeService,d=p?null==c?void 0:c.outputDataSourceId:null===(i=null==c?void 0:c.useDataSource)||void 0===i?void 0:i.dataSourceId,u=!!l&&!((e,t=!1)=>{let s;if(t){const t=(null==g?void 0:g.outputDataSources)||[];s=(null==t?void 0:t.filter((t=>e===t)).length)>0}else s=(null==n?void 0:n.filter((t=>e===t.dataSourceId)).length)>0;return s&&e})(d,p);return u&&d?(0,o.jsx)(S.Alert,{buttonType:"tertiary",form:"tooltip",size:"small",type:"error",text:t("dataSourceCreateError")}):""},onUpdateItem:(e,t)=>{const{itemJsons:s}=t.props,[,i]=s,n=i.map((e=>e.itemStateDetailContent));d(null),u((0,o.Immutable)(n))},onClickItemBody:(e,t)=>{var s;const{itemJsons:[o]}=t.props,i=(null===(s=null==o?void 0:o.itemStateDetailContent)||void 0===s?void 0:s.searchServiceType)===rs.GeocodeService;d(+o.itemKey,i)}},h)),c&&(0,o.jsx)(Os.List,Object.assign({className:"setting-ui-unit-list-new",itemsJson:[{name:"......"}].map(((e,t)=>({itemStateDetailContent:"item",itemKey:"index",itemStateTitle:"......",itemStateCommands:[]}))),dndEnabled:!1,renderOverrideItemDetailToggle:()=>""},h,{isItemFocused:()=>!0})))},{useSelector:$s}=o.ReactRedux,{useRef:zs,useEffect:Ws}=o.React,Gs=e=>{var t,s,i,n,a,l;const r=S.hooks.useTranslate(S.defaultMessages,o.defaultMessages),c=(0,b.useTheme)(),{datasourceConfig:p,id:d,useDataSources:u,searchDataSettingType:m,createOutputDs:g,hideIconSetting:h,onSettingChange:v,onOutputDsSettingChange:f}=e,w=zs(null),x=zs(null),[k,C]=o.React.useState(!1),[I,j]=o.React.useState(!1),[P,O]=o.React.useState(!1),[N,T]=o.React.useState(!1),[M,R]=o.React.useState(null),[L,A]=o.React.useState(null),E=$s((e=>{var t,s,o;return null===(o=null===(s=null===(t=null==e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.appConfig)||void 0===s?void 0:s.widgets)||void 0===o?void 0:o[d]})),D=o.css`
    & {
      background-color: ${null===(i=null===(s=null===(t=c.colors)||void 0===t?void 0:t.palette)||void 0===s?void 0:s.secondary)||void 0===i?void 0:i[400]};
    }
  `,U=o.css`
    .data-remind {
      color: ${null===(l=null===(a=null===(n=c.colors)||void 0===n?void 0:n.palette)||void 0===a?void 0:a.dark)||void 0===l?void 0:l[500]};
      font-size: ${o.polished.rem(12)};
    }
  `;Ws((()=>{g&&F()}),[p]);const F=()=>{const e=(null==E?void 0:E.outputDataSources)||[],t=(null==p?void 0:p.asMutable({deep:!0}))||[];for(let s;s<(null==t?void 0:t.length)-1;s++){const o=t[s];if((null==o?void 0:o.searchServiceType)===rs.FeatureService)continue;const i=null==o?void 0:o.outputDataSourceId;if(!(null==e?void 0:e.includes(i))){z(p);break}}},B=()=>{O(!1),j(!1),R(null)},$=e=>{const t=e?!P:!I;if(T(t),t){const e=(null==p?void 0:p.length)||0;R(e),H(e,!0)}e?j(t):O(t)},z=e=>{_(e)&&T(!1);const t=W(e);V(t),g?f&&f(t.outputDataSources,e):v&&v(e)},W=e=>{var t;return null===(t=null==e?void 0:e.asMutable({deep:!0}))||void 0===t?void 0:t.reduce(((e,t)=>{const s=null==t?void 0:t.useDataSource;if(s&&!((e,t)=>{var s;return(null===(s=t.filter((t=>(null==t?void 0:t.dataSourceId)===(null==e?void 0:e.dataSourceId))))||void 0===s?void 0:s.length)>0})(s,null==e?void 0:e.useDataSources)&&(null==e||e.useDataSources.push(s)),g){const s=G(t);s&&e.outputDataSources.push(s)}return e}),{useDataSources:[],outputDataSources:[]})},G=e=>{let t;return(null==e?void 0:e.searchServiceType)===rs.GeocodeService&&(t={id:null==e?void 0:e.outputDataSourceId,type:o.DataSourceTypes.FeatureLayer,label:null==e?void 0:e.label,originDataSources:[],isOutputFromWidget:!0,isDataInDataSourceInstance:!1,schema:ks(null==e?void 0:e.label,null==e?void 0:e.addressFields),geometryType:"esriGeometryPoint"}),t},V=e=>{var t;const s={id:d},o=(0,y.getAppConfigAction)();s.useDataSources=null==e?void 0:e.useDataSources,g&&(s.outputDataSources=null===(t=null==e?void 0:e.outputDataSources)||void 0===t?void 0:t.map((e=>null==e?void 0:e.id))),((e,t,s)=>{var o,i,n;const a=(null===(o=null==e?void 0:e.useDataSources)||void 0===o?void 0:o.asMutable({deep:!0}))||[],l=(null===(i=null==e?void 0:e.outputDataSources)||void 0===i?void 0:i.asMutable({deep:!0}))||[];if((null==a?void 0:a.length)!==(null==t?void 0:t.length)||(null==l?void 0:l.length)!==(null==s?void 0:s.length))return!0;const r=((e,t)=>{var s;if((null==e?void 0:e.length)!==(null==t?void 0:t.length))return!0;const o=[];return null==e||e.forEach((e=>{var s;const i=t.filter((t=>(null==t?void 0:t.dataSourceId)===(null==e?void 0:e.dataSourceId)));(null==i?void 0:i.length)>0&&o.push({dsFields:null==e?void 0:e.fields,preDsFields:null===(s=i[0])||void 0===s?void 0:s.fields})})),(null==o?void 0:o.length)!==(null==e?void 0:e.length)||(null===(s=null==o?void 0:o.filter((e=>{var t,s,o,i;const n=(null===(t=null==e?void 0:e.dsFields)||void 0===t?void 0:t.length)!==(null===(s=null==e?void 0:e.preDsFields)||void 0===s?void 0:s.length),a=(null===(i=null===(o=null==e?void 0:e.dsFields)||void 0===o?void 0:o.filter((t=>{var s;return!(null===(s=null==e?void 0:e.preDsFields)||void 0===s?void 0:s.includes(t))})))||void 0===i?void 0:i.length)>0;return n||a})))||void 0===s?void 0:s.length)>0})(t,a),c=(null===(n=l.filter((e=>!(null==s?void 0:s.includes(e)))))||void 0===n?void 0:n.length)>0;return r||c})(E,s.useDataSources,s.outputDataSources)&&o.editWidget(s).exec()},_=e=>(null==e?void 0:e.length)!==(null==p?void 0:p.length),q=()=>{var e;const t=null===(e=null==p?void 0:p.asMutable({deep:!0}))||void 0===e?void 0:e.filter((e=>(null==e?void 0:e.useDataSource)||(null==e?void 0:e.useUtility)));z((0,o.Immutable)(t))},H=(e,t=!1)=>{let s;s=t?x.current.getElementsByClassName("add-search-btn")[0]:x.current.getElementsByClassName("jimu-tree-item__body")[e],A(s)};return(0,o.jsx)(Ss.SettingSection,{css:U},(0,o.jsx)(Ss.SettingRow,{flow:"wrap"},(0,o.jsx)("span",{className:"w-100 data-remind"},r("addSources"))),(0,o.jsx)(Ss.SettingRow,{flow:"wrap"},(0,o.jsx)("div",{className:"w-100",ref:x},(0,o.jsx)("div",null,(!m||m===ls.Both)&&(0,o.jsx)(S.Dropdown,{className:"w-100",size:"sm",toggle:()=>{C(!k)},isOpen:k,autoWidth:!0},(0,o.jsx)(S.DropdownButton,{className:"add-search-btn w-100",arrow:!1,icon:!0,type:"primary"},(0,o.jsx)(zt,{className:"mr-1 d-inline-block",autoFlip:!0}),r("newSearchSource")),(0,o.jsx)(S.DropdownMenu,{css:D},(0,o.jsx)(S.DropdownItem,{className:"w-100",onClick:()=>{$(!0)}},r("layerSource")),(0,o.jsx)(S.DropdownItem,{className:"w-100",onClick:()=>{$(!1)}},r("locatorSource")))),m===ls.FeatureService&&(0,o.jsx)(S.Button,{type:"primary",className:"w-100",onClick:()=>{$(!0)}},(0,o.jsx)(zt,{className:"mr-1 d-inline-block",autoFlip:!0}),r("layerSource")),m===ls.GeocodeService&&(0,o.jsx)(S.Button,{type:"primary",className:"w-100",onClick:()=>{$(!1)}},(0,o.jsx)(zt,{className:"mr-1 d-inline-block",autoFlip:!0}),r("locatorSource"))),(0,o.jsx)("div",{className:"w-100",ref:w},(0,o.jsx)(Bs,{id:d,dsConfigItemIndex:M,datasourceConfig:p||(0,o.Immutable)([]),showSourcePanel:(()=>{var e;return(null===(e=null==p?void 0:p[M])||void 0===e?void 0:e.searchServiceType)===rs.GeocodeService?P:I})(),useDataSources:u,onDsConfigIdChange:(e,t)=>{"number"==typeof e?(H(e,!1),M===e?t?(O(!P),j(!1)):(j(!I),O(!1)):(R(e),t?(O(!0),j(!1)):(j(!0),O(!1)))):B()},showNewSourceItem:N,updateConfigForLayerOptions:z,hideSidePopper:B,createOutputDs:g}))),(0,o.jsx)(Rs,{id:d,dsConfigItemIndex:M,datasourceConfig:p||(0,o.Immutable)([]),useDataSources:u,isOpen:I,onSettingChange:v,trigger:null==w?void 0:w.current,updateConfigForLayerOptions:z,toggle:()=>{j(!I),T(!1),q()},popperFocusNode:L,hideIconSetting:h}),(0,o.jsx)(Us,{id:d,dsConfigItemIndex:M,datasourceConfig:p||(0,o.Immutable)([]),useDataSources:u,isOpen:P,onSettingChange:v,updateConfigForLayerOptions:z,trigger:null==w?void 0:w.current,toggle:()=>{O(!P),T(!1),q()},popperFocusNode:L,hideIconSetting:h,createOutputDs:g})))};var Vs=h(51315);const _s=e=>{const t=S.hooks.useTranslate(S.defaultMessages,o.defaultMessages),s=(0,b.useTheme)(),i=o.css`
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
  `,{onSettingChange:n,hideRecentSearchSetting:a}=e,l=e.settingConfig||(0,o.Immutable)({}),{maxSuggestions:r,isUseCurrentLoation:c,isShowRecentSearches:p,recentSearchesMaxNumber:d}=l,[u,m]=o.React.useState(d),[g,h]=o.React.useState(r);(0,Vs.useEffect)((()=>{m(d),h(r)}),[l]);const v=(e,t)=>{const s=l.setIn(e,t);n&&n(s)},f=(e,t=1)=>{if(0===(null==e?void 0:e.length))return!0;if(isNaN(Number(e)))return!1;{const s=Number(e);return Number.isInteger(s)&&s>=t}};return(0,o.jsx)("div",{css:i},(0,o.jsx)(Ss.SettingRow,{flow:"wrap",className:"mt-2 checkbox-con",label:t("maximumSuggestions")},(0,o.jsx)(S.TextInput,{size:"sm",value:g,onChange:e=>{const t=e.target.value;f(t,0)&&h(t)},onAcceptValue:e=>{e||h(e=r||ns),f(e,0)&&v(["maxSuggestions"],Number(e))},className:"w-100"})),(0,o.jsx)(Ss.SettingRow,null,(0,o.jsx)(S.Checkbox,{checked:!!c,onClick:e=>{const t=e.currentTarget;t&&v(["isUseCurrentLoation"],t.checked)},className:"mr-1","aria-label":t("useCurrentLocation")}),(0,o.jsx)("span",{className:"check-box-label"},t("useCurrentLocation"))),!a&&(0,o.jsx)(Ss.SettingRow,{label:t("recentSearches")},(0,o.jsx)(S.Switch,{checked:p||!1,onChange:e=>{v(["isShowRecentSearches"],!p)}})),p&&(0,o.jsx)(Ss.SettingRow,{label:t("maximumNumber")},(0,o.jsx)(S.TextInput,{size:"sm",value:u,onChange:e=>{const t=e.target.value;f(t)&&m(t)},onAcceptValue:e=>{e||m(e=d||as),f(e)&&v(["recentSearchesMaxNumber"],Number(e))},style:{width:"50px"}})))},qs=e=>{const t=S.hooks.useTranslate(S.defaultMessages,o.defaultMessages),{hint:s,onSettingChange:i}=e,[n,a]=o.React.useState(s);return(0,Vs.useEffect)((()=>{a(s)}),[s]),(0,o.jsx)("div",{className:"general-setting-con"},(0,o.jsx)(Ss.SettingRow,{flow:"wrap",label:t("multySearchHint")},(0,o.jsx)(S.TextInput,{size:"sm",value:n||"",title:n||t("findAddressOrPlace"),onChange:e=>{var t;const s=null===(t=null==e?void 0:e.target)||void 0===t?void 0:t.value;a(s)},onAcceptValue:e=>{a(e),i&&i(e)},className:"w-100",placeholder:t("findAddressOrPlace")})))};function Hs(e){var t,s;const i=(0,o.getAppStore)().getState().appStateInBuilder,n=i.appRuntimeInfo.currentPageId,a=i.appRuntimeInfo.currentDialogId;let l=i.appRuntimeInfo.dialogInfos||(0,o.Immutable)({});const r=i.appConfig.dialogs,c=i.appConfig.pages,p={canClose:!0,checked:!0,isClosed:!0};return a&&((null===(t=r[a])||void 0===t?void 0:t.isSplash)&&(l=l.set(a,p)),c[n].autoOpenDialogId&&(l=l.set(n+"-"+c[n].autoOpenDialogId,p)),e&&Object.keys(c).forEach((e=>{c[e].autoOpenDialogId===a&&(l=l.set(e+"-"+a,p))}))),(null===(s=r[a])||void 0===s?void 0:s.isSplash)||Object.keys(r).some((e=>{r[e].isSplash&&(l=l.set(e,p))})),e&&l&&Object.keys(l).forEach((t=>{t!==e&&t!==n+"-"+e||(l=l.set(t,{canClose:Js(e),checked:!1,isClosed:!1}))})),l}function Js(e){const t=(0,o.getAppStore)().getState().appStateInBuilder.appConfig.dialogs[e];return!t.interactionType||!t.confirmBeforeClose}function Zs(e){const t=(0,o.getAppStore)().getState().appStateInBuilder,s=t.appRuntimeInfo.currentPageId,i=t.appRuntimeInfo.currentDialogId;if(y.builderAppSync.publishChangeSelectionToApp(null),i){const e=Hs();y.builderAppSync.publishDialogInfosChangeToApp(e),y.builderAppSync.publishDialogChangeToApp(null)}s!==e&&y.builderAppSync.publishPageChangeToApp(e),y.builderAppSync.publichActivePagePartChangeToApp(o.PagePart.Body)}function Ks(e,t=!1){y.builderAppSync.publishChangeSelectionToApp(null);const s=(0,o.getAppStore)().getState().appStateInBuilder.appRuntimeInfo.currentDialogId;if(t||e!==s){y.builderAppSync.publishDialogChangeToApp(e);const t=Hs(e);y.builderAppSync.publishDialogInfosChangeToApp(t),y.builderAppSync.publichActivePagePartChangeToApp(null)}}(0,b.registerStyles)("jimu-ui/advanced/setting-components/",e)})(),v})())}}}));