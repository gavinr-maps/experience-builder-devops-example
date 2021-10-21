System.register(["jimu-core","jimu-for-builder","jimu-for-builder/templates","jimu-layouts/layout-runtime","jimu-theme","jimu-ui","jimu-ui/advanced/data-source-selector","jimu-ui/advanced/expression-builder"],(function(e,t){var s={},i={},o={},n={},a={},r={},l={},p={};return{setters:[function(e){s.CONSTANTS=e.CONSTANTS,s.DataSourceComponent=e.DataSourceComponent,s.DataSourceManager=e.DataSourceManager,s.DataSourceTypes=e.DataSourceTypes,s.DialogMode=e.DialogMode,s.ExpressionPartType=e.ExpressionPartType,s.Immutable=e.Immutable,s.LayoutItemType=e.LayoutItemType,s.LayoutType=e.LayoutType,s.LinkType=e.LinkType,s.LoadingType=e.LoadingType,s.MultipleDataSourceComponent=e.MultipleDataSourceComponent,s.OrderRule=e.OrderRule,s.PagePart=e.PagePart,s.PageType=e.PageType,s.React=e.React,s.ReactRedux=e.ReactRedux,s.ReactResizeDetector=e.ReactResizeDetector,s.ServiceManager=e.ServiceManager,s.SessionManager=e.SessionManager,s.WidgetManager=e.WidgetManager,s.WidgetType=e.WidgetType,s.appConfigUtils=e.appConfigUtils,s.classNames=e.classNames,s.css=e.css,s.dataSourceUtils=e.dataSourceUtils,s.defaultMessages=e.defaultMessages,s.esri=e.esri,s.getAppStore=e.getAppStore,s.injectIntl=e.injectIntl,s.jsx=e.jsx,s.moduleLoader=e.moduleLoader,s.polished=e.polished,s.portalUrlUtils=e.portalUrlUtils,s.requestUtils=e.requestUtils,s.urlUtils=e.urlUtils},function(e){i.builderAppSync=e.builderAppSync},function(e){o.getFullScreenPageTemplates=e.getFullScreenPageTemplates,o.getScrollingPageTemplates=e.getScrollingPageTemplates},function(e){n.searchUtils=e.searchUtils,n.utils=e.utils},function(e){a.ThemeContext=e.ThemeContext,a.getBuilderThemeVariables=e.getBuilderThemeVariables,a.popperPointer=e.popperPointer,a.registerStyles=e.registerStyles,a.withStyles=e.withStyles,a.withTheme=e.withTheme},function(e){r.Button=e.Button,r.ButtonGroup=e.ButtonGroup,r.Card=e.Card,r.CardBody=e.CardBody,r.CardImg=e.CardImg,r.Collapse=e.Collapse,r.Container=e.Container,r.Dropdown=e.Dropdown,r.DropdownButton=e.DropdownButton,r.DropdownItem=e.DropdownItem,r.DropdownMenu=e.DropdownMenu,r.DropdownToggle=e.DropdownToggle,r.FOCUSABLE_CONTAINER_CLASS=e.FOCUSABLE_CONTAINER_CLASS,r.FormGroup=e.FormGroup,r.Icon=e.Icon,r.Input=e.Input,r.Label=e.Label,r.Link=e.Link,r.Loading=e.Loading,r.Modal=e.Modal,r.ModalBody=e.ModalBody,r.ModalFooter=e.ModalFooter,r.ModalHeader=e.ModalHeader,r.NumericInput=e.NumericInput,r.PanelHeader=e.PanelHeader,r.Popper=e.Popper,r.Radio=e.Radio,r.Row=e.Row,r.Select=e.Select,r.Switch=e.Switch,r.Tab=e.Tab,r.Tabs=e.Tabs,r.TextInput=e.TextInput,r.Toast=e.Toast,r.ToastType=e.ToastType,r.Tooltip=e.Tooltip,r.defaultMessages=e.defaultMessages,r.hooks=e.hooks,r.isOutBoundary=e.isOutBoundary,r.utils=e.utils},function(e){l.AllDataSourceTypes=e.AllDataSourceTypes,l.FieldSelector=e.FieldSelector,l.dataComponentsUtils=e.dataComponentsUtils},function(e){p.ExpressionInput=e.ExpressionInput,p.ExpressionInputType=e.ExpressionInputType}],execute:function(){e((()=>{var e={18371:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.036 12.157l8.01-8.01a.5.5 0 11.707.707l-8.01 8.01a1 1 0 01-1.415 0L1.146 8.682a.5.5 0 11.708-.707l4.182 4.182z" fill="#000"></path></svg>'},59788:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.146 4.653a.485.485 0 01.708 0L8 10.24l5.146-5.587a.485.485 0 01.708 0 .538.538 0 010 .738l-5.5 5.956a.485.485 0 01-.708 0l-5.5-5.956a.538.538 0 010-.738z" fill="#000"></path></svg>'},3273:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.653 13.854a.485.485 0 010-.708L10.24 8 4.653 2.854a.485.485 0 010-.708.538.538 0 01.738 0l5.956 5.5a.485.485 0 010 .708l-5.956 5.5a.538.538 0 01-.738 0z" fill="#000"></path></svg>'},96009:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.854 11.347a.486.486 0 01-.708 0L8 5.76l-5.146 5.587a.485.485 0 01-.708 0 .538.538 0 010-.738l5.5-5.956a.485.485 0 01.708 0l5.5 5.956a.538.538 0 010 .738z" fill="#000"></path></svg>'},43218:e=>{e.exports='<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 5.5v-5a.5.5 0 011 0v5h5a.5.5 0 010 1h-5v5a.5.5 0 01-1 0v-5h-5a.5.5 0 010-1h5z" fill="#000" fill-rule="nonzero"></path></svg>'},65085:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M4.103 7.873L16 19.25 27.897 7.873c.939-.898 2.46-.898 3.399 0s.939 2.353 0 3.251L17.7 24.127a2.481 2.481 0 01-3.399 0L.705 11.124c-.939-.898-.939-2.353 0-3.251s2.46-.898 3.399 0z"></path></svg>'},95327:e=>{e.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M.304 6.016a1.028 1.028 0 011.466 0l4.398 4.451 8.062-8.16a1.028 1.028 0 011.466 0c.405.41.405 1.074 0 1.484l-8.795 8.902c-.405.41-1.062.41-1.466 0L.304 7.5a1.058 1.058 0 010-1.484z" fill="#000"></path><path d="M0 0h16v16H0z"></path></g></svg>'},93321:e=>{e.exports='<svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero" fill="none"><path d="M7.745 7l4.1 4.1a.527.527 0 01-.745.746L7 7.746l-4.1 4.1a.527.527 0 01-.746-.746l4.1-4.1-4.1-4.1a.527.527 0 01.746-.746l4.1 4.1 4.1-4.1a.527.527 0 01.746.746L7.746 7z" fill="#000"></path><path d="M1 1h12v12H1z"></path></g></svg>'},95622:e=>{e.exports='<svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.646 8.854a.5.5 0 10.708-.708L1.707 6.5h8.586L8.646 8.146a.5.5 0 10.708.708l2.5-2.5a.5.5 0 000-.708l-2.5-2.5a.5.5 0 10-.708.708L10.293 5.5H1.707l1.647-1.646a.5.5 0 10-.708-.708l-2.5 2.5a.5.5 0 000 .708l2.5 2.5z" fill="#000"></path></svg>'},17720:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 32"><path d="M2.333 4a3 3 0 116 0 3 3 0 01-6 0zm0 12a3 3 0 116 0 3 3 0 01-6 0zm0 12a3 3 0 116 0 3 3 0 01-6 0z"></path></svg>'},78115:e=>{e.exports='<svg viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.5 13a.5.5 0 010-1h4a.5.5 0 010 1h-4zM0 8.5a.5.5 0 00.5.5h7a.5.5 0 000-1h-7a.5.5 0 00-.5.5zM.5 5a.5.5 0 010-1h11a.5.5 0 010 1H.5zM.5 1a.5.5 0 110-1h15a.5.5 0 010 1H.5z" fill="#000"></path></svg>'},70502:e=>{e.exports='<svg viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.5 0a.5.5 0 000 1h4a.5.5 0 000-1h-4zM0 4.5A.5.5 0 01.5 4h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zM.5 8a.5.5 0 000 1h11a.5.5 0 000-1H.5zM.5 12a.5.5 0 000 1h15a.5.5 0 000-1H.5z" fill="#000"></path></svg>'},59006:e=>{e.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M2.212 9.936L2 12.27l2.333-.212L13.27 3.12 11.149 1 2.212 9.936zm-.707-.707L10.441.293a1 1 0 011.415 0l2.12 2.121a1 1 0 010 1.414l-8.935 8.937a1 1 0 01-.617.289l-2.333.212a1 1 0 01-1.087-1.087l.212-2.333a1 1 0 01.289-.617zm7.434-6.497l2.829 2.829-.707.707-2.829-2.829.707-.707zM.5 15h15a.5.5 0 010 1H.5a.5.5 0 010-1z" fill="#000" fill-rule="nonzero"></path></svg>'},98206:e=>{e.exports='<svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M8.854 9.354a.5.5 0 10-.708-.708L6.5 10.293V1.707l1.646 1.647a.5.5 0 10.708-.708l-2.5-2.5a.5.5 0 00-.708 0l-2.5 2.5a.5.5 0 10.708.708L5.5 1.707v8.586L3.854 8.646a.5.5 0 10-.708.708l2.5 2.5a.5.5 0 00.708 0l2.5-2.5z" fill="#000"></path></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h12v12H0z"></path></clipPath></defs></svg>'},1810:e=>{"use strict";e.exports=s},3297:e=>{"use strict";e.exports=i},32986:e=>{"use strict";e.exports=o},29169:e=>{"use strict";e.exports=n},83016:e=>{"use strict";e.exports=a},21835:e=>{"use strict";e.exports=r},33037:e=>{"use strict";e.exports=l},47460:e=>{"use strict";e.exports=p}},t={};function c(s){var i=t[s];if(void 0!==i)return i.exports;var o=t[s]={exports:{}};return e[s](o,o.exports,c),o.exports}c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},c.d=(e,t)=>{for(var s in t)c.o(t,s)&&!c.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var d={};return(()=>{"use strict";c.r(d),c.d(d,{DirectionSelector:()=>ut,JimuLayerViewSelector:()=>J,JimuMapViewSelector:()=>W,LinkSetting:()=>ve,LinkSettingPopup:()=>Se,MapWidgetSelector:()=>U,NavQuickStyleItem:()=>vt,OpenTypes:()=>Y,PageTemplatePopper:()=>nt,ProxySetting:()=>Fe,ProxySettingPopup:()=>Ge,QuickStylePopper:()=>wt,RadioGroup:()=>X,SettingCollapse:()=>A,SettingLayout:()=>t,SettingRow:()=>M,SettingSection:()=>S,SidePopper:()=>xe,SizeMode:()=>ht,SizeModeSelector:()=>ft,SortSetting:()=>pt,StylePicker:()=>G,TemplateSelector:()=>rt,UnControlledSettingCollapse:()=>E,WidgetListPopper:()=>Ze,WidgetSelector:()=>B,_JimuMapViewSelector:()=>F,_LinkSetting:()=>fe,_LinkSettingPopup:()=>be,_MapWidgetSelector:()=>z,_SidePopper:()=>we,changeCurrentDialog:()=>kt,changeCurrentPage:()=>St,handelDialogInfos:()=>xt,proxySettingUtils:()=>s});var e={};c.r(e),c.d(e,{JimuLayerViewSelector:()=>v,LinkSetting:()=>u,ProxySetting:()=>h,ProxySettingPopup:()=>g,RadioGroup:()=>m,SettingCollapse:()=>p,SettingRow:()=>l,SettingSection:()=>r,SidePopper:()=>f,SortSetting:()=>n,StylePicker:()=>a,WidgetSelector:()=>o});var t={};c.r(t),c.d(t,{SettingCollapse:()=>A,SettingRow:()=>M,SettingSection:()=>S,UnControlledSettingCollapse:()=>E});var s={};c.r(s),c.d(s,{deleteProxies:()=>Oe,getCreateProxyUrl:()=>Ae,getDeleteProxyUrl:()=>Ee,getNeedProxyDataSources:()=>Pe,getProxyJsonFromSourceUrl:()=>je,getProxyRootUrl:()=>Re,isRegisteredApp:()=>Te,isSameProxy:()=>Me,needToConfigProxy:()=>Ne,traverseToGetNeedProxyDataSources:()=>Ie});var i=c(1810);const o=e=>{const t=e.theme;return i.css`
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
  `},n=e=>{const t=e.theme.colors;return i.css`
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
    .add-option-btn {
        & {
            color:${t.palette.primary[600]};
            margin-top:10px;
            cursor: pointer;
            font-size:13px;
            overflow: hidden;
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
            .option-name-icon {
                margin-left:5px;
                color: ${t.palette.dark[400]};
                cursor: pointer;
            }
            .option-name span {
                max-width: 88%;
                display: inline-block;
                text-overflow: ellipsis;
                overflow:hidden;
            }
            .close-con {
                flex-grow: 1;
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


  `},a=e=>{const t=e.theme;return i.css`
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
  `},p=e=>{var t,s,o,n,a,r,l,p;const c=null==e?void 0:e.isOpen,d=null!==(t=null==e?void 0:e.type)&&void 0!==t?t:"default",u=e.theme,h=null===(n=null===(o=null===(s=null==u?void 0:u.colors)||void 0===s?void 0:s.palette)||void 0===o?void 0:o.light)||void 0===n?void 0:n[500],g=null===(l=null===(r=null===(a=null==u?void 0:u.colors)||void 0===a?void 0:a.palette)||void 0===r?void 0:r.light)||void 0===l?void 0:l[800],m=null===(p=null==u?void 0:u.colors)||void 0===p?void 0:p.primary;return"primary"!==d?i.css`
    .dividing-line {
      background-color: ${g};
    }
    `:i.css`
    .handle {
      border-top: 2px solid ${c?m:h};
      background-color: ${h};
      .title {
        padding-left: 8px;
        padding-right: 8px;
      }
    }
    .dividing-line {
      background-color: ${g};
    }
    `};function u(e){const t=e.theme,s=t&&t.colors&&t.colors.palette&&t.colors.palette.light[500]||"#ccc",o=t&&t.colors&&t.colors.primary||"blue",n=i.polished.rgba(s,.5);return window.jimuConfig.isInBuilder?i.css`
    .widget-builder-linksetting {
      .collapse-btn{
        margin-right: ${i.polished.rem(-16)};
      }
      .option-name{
        font-size: ${i.polished.rem(13)};
        color: ${t.colors.palette.dark[400]};
        font-weight:
      }
      .linksetting-list {
        .view-border{
          border-width: 1px;
          border-style: solid;
        }
        .linksetting-list-item {
          height: ${i.polished.rem(30)};
          cursor: pointer;

          &:hover {
            background-color: ${n};
          }
        }

        .linksetting-list-select {
          background-color: ${n};
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
    .widget-builder-linksetting {
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
      .linksetting-list {

        .linksetting-list-item {
          height: ${i.polished.rem(30)};
          cursor: pointer;

          &:hover {
            background-color: ${n};
          }
        }

        .linksetting-list-select {
          background-color: ${n};
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
  `}function h(e){const t=e.theme;return i.css`
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
  `}function g(e){const t=e.theme;return i.css`
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
  `};function f(e){const t=e.theme;return i.css`
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
  `}const v=e=>{const t=e.theme;return i.css`
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
  `};var y=c(3297),w=c(83016),x=c(21835);class b extends i.React.PureComponent{render(){const e=this.props,{className:t,style:s,title:o,role:n,children:a}=e,r=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["className","style","title","role","children"]);return i.React.createElement(x.Container,{className:(0,i.classNames)(t,"jimu-widget-setting--section"),style:s,role:n,"aria-label":r["aria-label"]},o&&i.React.createElement(x.Row,{className:"jimu-widget-setting--section-header"},i.React.createElement("h6",{className:"w-100 text-truncate setting-text-level-1"},this.props.title)),a)}}const S=(0,w.withStyles)(b,"SettingSection");var k=c(3273),C=c.n(k);const P=e=>{const{className:t}=e,s=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["className"]),o=(0,i.classNames)("jimu-icon-component",t);return i.React.createElement(x.Icon,Object.assign({className:o,icon:C()},s))};const I=e=>i.React.createElement("div",{className:"jimu-widget-setting--row-header mb-3"},e.children);class j extends i.React.PureComponent{constructor(){super(...arguments),this.onActionClick=e=>{"drilldown"===e&&this.props&&this.props.onDrillDown&&this.props.onDrillDown()}}render(){const e=this.props,{action:t,flow:s,truncateLabel:o,label:n,role:a,indented:r,className:l,level:p=3}=e,c=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["action","flow","truncateLabel","label","role","indented","className","level"]),d="string"==typeof n?n:"",u=(0,i.classNames)(l,"jimu-widget-setting--row","form-group","align-items-center",{"form-inline":"wrap"!==s,"pl-4":r}),h=t?"span":"label",g=n&&i.React.createElement(h,{title:d,className:(0,i.classNames)(`jimu-widget-setting--row-label justify-content-start flex-grow-1 text-break setting-text-level-${p}`,{"w-100 mr-0":"wrap"===s,"text-truncate":o})},n);return i.React.createElement(x.Row,{className:u,role:a,"aria-label":c["aria-label"]},"wrap"===s&&t?i.React.createElement(I,null,"drilldown"===t?i.React.createElement(x.Button,{size:"sm",type:"tertiary",onClick:()=>this.onActionClick("drilldown")},g,i.React.createElement(P,{className:"right-icon"})):void 0):g,this.props.children)}}const M=(0,w.withStyles)(j,"SettingRow");var T=c(96009),N=c.n(T),O=c(59788),L=c.n(O),R=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s};const A=(0,w.withStyles)((e=>{const{type:t="default",className:s,leftIcon:o,label:n,bottomLine:a=!1,isOpen:r,onRequestOpen:l,onRequestClose:p,children:c,rightIcon:d=L(),rightActiveIcon:u=N(),level:h=0}=e,g=R(e,["type","className","leftIcon","label","bottomLine","isOpen","onRequestOpen","onRequestClose","children","rightIcon","rightActiveIcon","level"]),m=r?u:d;return i.React.createElement("div",{className:(0,i.classNames)("setting-collapse w-100",s)},i.React.createElement("div",{className:"handle w-100 d-flex justify-content-between"},i.React.createElement("div",{title:n,className:"title py-1 d-flex align-items-center flex-grow-1",style:{maxWidth:"85%"}},o&&i.React.createElement(x.Icon,{className:"mr-2",icon:o}),i.React.createElement("div",{className:`text-truncate setting-text-level-${h}`,style:{maxWidth:"80%"}}," ",n)),i.React.createElement(x.Button,{size:"sm",type:"tertiary",icon:!0,onClick:()=>{r?null==p||p():null==l||l()}},i.React.createElement(x.Icon,{icon:m}))),i.React.createElement(x.Collapse,Object.assign({},g,{isOpen:r}),r&&i.React.createElement(i.React.Fragment,null,c,a&&i.React.createElement("div",{className:"dividing-line mt-3",style:{width:"100%",height:"1px"}}))))}),"SettingCollapse"),E=e=>{const{defaultIsOpen:t=!1,label:s}=e,o=R(e,["defaultIsOpen","label"]),[n,a]=i.React.useState(t);return i.React.createElement(A,Object.assign({label:s,isOpen:n},o,{onRequestOpen:()=>a(!0),onRequestClose:()=>a(!1)}))};var D=function(e,t,s,i){return new(s||(s=Promise))((function(o,n){function a(e){try{l(i.next(e))}catch(e){n(e)}}function r(e){try{l(i.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(a,r)}l((i=i.apply(e,t||[])).next())}))};class $ extends i.React.PureComponent{constructor(e){super(e),this.onSelectWidget=e=>{this.setState({currentWidget:e})},this.getListItemJSX=e=>(0,i.jsx)(x.Card,{className:(0,i.classNames)("widget-card-item",{"widget-card-selected":this.state.currentWidget&&0===this.state.currentWidget.indexOf(e.uri)}),key:e.title,onClick:()=>this.onSelectWidget(e.uri)},(0,i.jsx)("div",{className:"widget-card-image bg-light-300"},(0,i.jsx)("div",null,(0,i.jsx)(x.CardImg,{top:!0,width:"100%",src:e.image.src,alt:e.image.alt}))),(0,i.jsx)(x.CardBody,{className:"widget-card-content"},(0,i.jsx)("span",{className:"text-capitalize",title:e.title},e.title))),this.state={currentWidget:null,listInfo:[]}}componentDidMount(){this.getListInfo().then((e=>{this.setState({listInfo:e.listInfo})}))}getListInfo(){return D(this,void 0,void 0,(function*(){return yield fetch(`${i.urlUtils.getAbsoluteRootUrl()}widgets/widgets-info.json`).then((e=>D(this,void 0,void 0,(function*(){return yield e.json()})))).then((e=>({listInfo:e.map((e=>{const t={title:"",uri:"",image:{src:""}};return t.title=e.label,t.uri=e.path,t.image.src="../"+e.icon,t}))})))}))}render(){return(0,i.jsx)("div",{className:(0,i.classNames)("w-100 h-100",{[this.props.className]:!!this.props.className})},(0,i.jsx)("div",{className:"component-choose-widget-popup"},(0,i.jsx)(x.Modal,{isOpen:!0,className:"component-choose-widget-popup-modal"},(0,i.jsx)(x.ModalHeader,{className:"component-choose-widget-clear-border component-choose-widget-modal-header"},this.props.title,(0,i.jsx)("span",{className:"choose-widget-popup-close",onClick:this.props.onCancel})),(0,i.jsx)(x.ModalBody,{className:"component-choose-widget-clear-border component-choose-widget-modal-body"},this.state.listInfo.length>0?this.state.listInfo.map((e=>this.getListItemJSX(e))):"Loading..."),(0,i.jsx)(x.ModalFooter,{className:"component-choose-widget-clear-border component-choose-widget-modal-footer"},(0,i.jsx)(x.Button,{onClick:()=>this.props.onOK(this.state.currentWidget)},"OK"),(0,i.jsx)(x.Button,{onClick:this.props.onCancel},"Cancel")))))}}const B=(0,w.withStyles)($,"WidgetSelector");class z extends i.React.PureComponent{constructor(){super(...arguments),this.noneMapWidget=(0,i.Immutable)({id:"none",label:this.props.intl.formatMessage({id:"none",defaultMessage:x.defaultMessages.none})}),this.getStyle=e=>i.css`
      .component-map-selector{
        width: 100%;
      }

    `,this.onSelect=e=>{const t=e.target.value,s=t===this.noneMapWidget.id?[]:[t];this.props.onSelect&&this.props.onSelect(s)},this.getSelectedMapWidget=()=>{if(!this.props.useMapWidgetIds)return null;const e=this.props.useMapWidgetIds[0];return this.props.mapWidgetJsons.find((t=>t.id===e))||null}}render(){const e=this.props.mapWidgetJsons,t=this.getSelectedMapWidget();return(0,i.jsx)("div",{css:this.getStyle(this.props.theme),className:"w-100"},(0,i.jsx)("div",{className:"component-map-selector"},(0,i.jsx)(x.Select,{size:"sm",value:t?t.id:this.noneMapWidget.id,onChange:this.onSelect,className:""},e.concat(this.noneMapWidget).map(((e,t)=>(0,i.jsx)("option",{key:t,value:e.id},e.label))))))}}const U=i.ReactRedux.connect(((e,t)=>{const s=window&&window.jimuConfig&&window.jimuConfig.isBuilder?e.appStateInBuilder&&e.appStateInBuilder.appConfig:e.appConfig,i=s&&s.widgets;return{mapWidgetJsons:i?Object.keys(i).filter((e=>i[e]&&i[e].manifest&&i[e].manifest.properties&&i[e].manifest.properties.canCreateMapView)).map((e=>i[e])):[]}}))((0,i.injectIntl)((0,w.withTheme)(z))),W=U,F=z;class _ extends i.React.PureComponent{getContent(){const e=[];for(let t=0;t<this.props.fromRootDsIds.length;t++)e.push(this.props.fromRootDsIds[t]);return i.React.createElement("div",{className:"w-100"},e.map(((e,t)=>{const s=i.DataSourceManager.getInstance().getDataSource(e),o=s.getLabel(),n=s.getChildDataSources();return i.React.createElement("div",{key:t},i.React.createElement("div",{className:"text-dark-600 pl-2 pr-2",style:{fontSize:"14px"}},o),n.map(((t,s)=>i.React.createElement("div",{key:s,className:"mt-1 mb-1"},i.React.createElement("div",{className:(0,i.classNames)("layerviewselector-ds-item pl-2 pr-2",{"layerviewselector-ds-item-selected":this.props.selectedDsIds&&this.props.selectedDsIds.includes(t.id)}),title:t.getLabel(),onClick:()=>{this.props.onSelect&&this.props.onSelect({rootDataSourceId:e,dataSourceId:t.id})}},t.getLabel())))))})))}render(){return this.props.fromRootDsIds&&0!==this.props.fromRootDsIds.length?i.React.createElement("div",{className:"w-100"},this.getContent()):null}}const V=c(65085);class H extends i.React.PureComponent{constructor(e){super(e),this.toggleList=e=>{this.setState({listOpen:!this.state.listOpen})},this.onResize=e=>{this.setState({width:e})},this.handleChooseLayer=e=>{if(this.props.onSelect)if(e){const t=i.DataSourceManager.getInstance().getDataSource(e.rootDataSourceId),s=i.DataSourceManager.getInstance().getDataSource(e.dataSourceId).id,o=t.getJimuChildId(s)[0];this.props.onSelect((0,i.Immutable)({jimuMapViewId:`${this.props.useMapWidgetIds[0]}-${e.rootDataSourceId}`,jimuLayerId:o,dataSourceId:e&&e.dataSourceId,rootDataSourceId:e&&e.rootDataSourceId}))}else this.props.onSelect((0,i.Immutable)({}));this.setState({listOpen:!1})},this.handleClickNone=()=>{this.props.onSelect&&this.props.onSelect((0,i.Immutable)({})),this.setState({listOpen:!1})},this.getTitle=()=>this.props.jimuLayerViewInfo&&this.props.useMapWidgetIds&&this.props.useMapWidgetIds[0]&&this.props.jimuLayerViewInfo.dataSourceId?(0,i.jsx)(i.DataSourceComponent,{useDataSource:(0,i.Immutable)({dataSourceId:this.props.jimuLayerViewInfo.dataSourceId,mainDataSourceId:this.props.jimuLayerViewInfo.dataSourceId,rootDataSourceId:this.props.jimuLayerViewInfo.rootDataSourceId})},((e,t,s)=>e.getLabel())):this.getNoneString(),this.getContent=()=>{const e=this.props.useMapWidgetIds&&this.props.useMapWidgetIds[0],t=(0,i.getAppStore)().getState().appStateInBuilder.appConfig.widgets[e];return t&&t.useDataSources&&t.useDataSources[0]?(0,i.jsx)("div",{className:"w-100 mt-1 mb-2"},(0,i.jsx)("div",{onClick:()=>{this.handleClickNone()}},(0,i.jsx)("div",{className:"layerviewselector-ds-item pl-2 pr-2"},this.getNoneString())),(0,i.jsx)("div",{className:"w-100 mt-1 mb-1"},(0,i.jsx)("div",{className:"w-100 border border-bottom-0 border-right-0 border-left-0"})),(0,i.jsx)(i.MultipleDataSourceComponent,{useDataSources:t.useDataSources},((e,t)=>{const s=(0,i.Immutable)(Object.keys(e)),o=[];return this.props.jimuLayerViewInfo&&this.props.jimuLayerViewInfo.dataSourceId&&o.push(this.props.jimuLayerViewInfo.dataSourceId),(0,i.jsx)(_,{fromRootDsIds:s,onSelect:e=>{this.handleChooseLayer(e)},selectedDsIds:(0,i.Immutable)(o)})}))):this.getEmptyContent()},this.getNoneString=()=>this.props.intl.formatMessage({id:"none",defaultMessage:"None"}),this.getEmptyContent=()=>(0,i.jsx)("div",{className:"w-100 mt-1 mb-2"},(0,i.jsx)("div",{className:"layerviewselector-ds-item pl-2 pr-2",onClick:()=>{this.handleClickNone()}},this.getNoneString())),this.state={listOpen:!1,width:0}}render(){return(0,i.jsx)("div",{className:(0,i.classNames)("w-100",{[this.props.className]:!!this.props.className})},(0,i.jsx)(x.Dropdown,{size:"sm",toggle:e=>{this.toggleList(e)},isOpen:this.state.listOpen,className:"w-100"},(0,i.jsx)(x.DropdownToggle,{size:"sm",type:"tertiary",className:(0,i.classNames)("h-100 p-0 m-0 d-flex flex-column align-items-center toollist-item h-100","justify-content-between toollist-item-click h-100 border-0 layerviewselector-input")},(0,i.jsx)("div",{className:"w-100 d-flex justify-content-between align-items-center"},(0,i.jsx)("div",{className:"layerviewselector-input-text ml-2"},this.getTitle()),(0,i.jsx)(x.Icon,{size:8,icon:V}))),(0,i.jsx)(x.DropdownMenu,{className:(0,i.classNames)("ml-0 mr-0 mb-0 mt-1 p-0",{[this.props.className]:!!this.props.className})},(0,i.jsx)("div",{className:"w-100 h-100 layerviewselector-bg"},(0,i.jsx)("div",{style:{width:`${this.state.width}px`}},this.getContent())))),(0,i.jsx)(i.ReactResizeDetector,{handleWidth:!0,onResize:this.onResize}))}}const J=(0,i.injectIntl)((0,w.withStyles)(H,"JimuLayerViewSelector"));class q extends i.React.PureComponent{constructor(e){super(e),this.onStyleClick=e=>{this.state.selectedValue!==e&&(this.setState({selectedValue:e}),this.props.onChange&&this.props.onChange(e))},this.state={selectedValue:this.props.value}}componentDidUpdate(e,t){e.value!==this.props.value&&this.setState({selectedValue:this.props.value})}render(){const e=this.props.styles;return i.React.createElement("div",{className:(0,i.classNames)("widget-setting--stylepicker w-100",{small:"small"===this.props.size})},Object.keys(e).map(((t,s)=>i.React.createElement("div",{key:t,role:"button",className:(0,i.classNames)("widget-setting--stylepicker-item",{active:t===this.state.selectedValue,"full-width":"full"===e[t].size}),style:{backgroundImage:`url(${e[t].thumbnail})`},onClick:()=>this.onStyleClick(t)}))))}}const G=(0,w.withStyles)(q,"StylePicker");class Q extends i.React.PureComponent{constructor(e){super(e),this.state={value:this.props.value},this.onRadioButtonChange=e=>{const t=e.target.value;this.state.value!==t&&(this.setState({value:t}),this.props.onChange&&this.props.onChange(t))},Q.count++,this.inputName=`setting-radiogroup-${Q.count}`}render(){const e=this.props,{options:t,className:s}=e,o=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["options","className"]);return i.React.createElement(x.FormGroup,Object.assign({},o,{onChange:this.onRadioButtonChange,className:`setting--button-group ${s}`}),t.map((e=>i.React.createElement(x.Label,{key:e.value},i.React.createElement(x.Radio,{value:e.value,name:this.inputName,checked:this.state.value===e.value}),e.content))))}}Q.count=0;const X=(0,w.withStyles)(Q,"RadioGroup");var Y;!function(e){e.CurrentWindow="_self",e.TopWindow="_top",e.NewWindow="_blank"}(Y||(Y={}));class K extends i.React.PureComponent{constructor(){super(...arguments),this.itemOnClick=e=>{this.props.onClick(e),this.setState({selectedItemName:e.name})}}getListContent(){return this.props.datas.map(((e,t)=>i.React.createElement("div",{onClick:()=>this.itemOnClick(e),key:t,className:(0,i.classNames)("linksetting-list-item btn w-100 border text-left border-bottom-0 rounded-0 text-truncate",{itemselected:this.props.linkParam.value===e.id})},e.name)))}render(){const e=this.props.datas.find((e=>this.props.linkParam.value===e.id)),t=e&&e.id;return i.React.createElement("div",{className:"linksetting-list w-100"},i.React.createElement(x.Select,{value:t,className:"w-100",onChange:e=>this.itemOnClick(this.props.datas.find((t=>t.id===e.target.value))),"aria-label":this.props["aria-label"],size:"sm"},this.props.datas.map(((e,t)=>i.React.createElement("option",{key:t,value:e.id},e.name)))))}}class Z extends i.React.PureComponent{constructor(){super(...arguments),this.currentPage={id:i.CONSTANTS.CURRENT_PAGE,name:this.props.intl.formatMessage({id:"currentPage",defaultMessage:x.defaultMessages.currentPage})},this.getInitLinkParam=()=>{const e=this.props.appConfig.pageStructure;if(!e||e.length<1)return(0,i.Immutable)({value:""});if(this.props.originLinkParam.linkType!==i.LinkType.Page){const e=this.getPageData();return(0,i.Immutable)({linkType:i.LinkType.Page,value:e&&e.some((e=>"default"===e.id))?"default":e&&e[0]&&e[0].id,openType:!this.props.openTypes||this.props.openTypes.includes(Y.CurrentWindow)?Y.CurrentWindow:this.props.openTypes[0]})}return this.props.originLinkParam},this.getPageData=()=>{const e=this.props.appConfig&&this.props.appConfig.pages,t=e&&Object.keys(e).filter((t=>e[t].type===i.PageType.Normal));let s=[this.currentPage];return t&&(s=s.concat(t.map((t=>({id:t,name:e[t].label}))))),s},this.setLinkParam=e=>{let t=this.props.linkParam;t=t.set("value",e.id),this.props.onLinkParamChange(t)}}componentDidMount(){const e=this.getInitLinkParam();this.props.onLinkParamChange(e)}render(){const e=this.getPageData();return i.React.createElement("div",{className:"w-100"},i.React.createElement("div",{className:"mb-12 option-name"},this.props.intl.formatMessage({id:"chooseAPage",defaultMessage:x.defaultMessages.chooseAPage})),i.React.createElement("div",null,i.React.createElement(K,{linkParam:this.props.linkParam,datas:e,onClick:this.setLinkParam,"aria-label":this.props.intl.formatMessage({id:"chooseAPage",defaultMessage:x.defaultMessages.chooseAPage})})))}}class ee extends i.React.PureComponent{constructor(){super(...arguments),this.getInitLinkParam=()=>{const e=this.props.appConfig.dialogs;if(!e||Object.keys(e).length<1)return(0,i.Immutable)({linkType:i.LinkType.Dialog,value:""});if(this.props.originLinkParam.linkType!==i.LinkType.Dialog){const e=this.getDialogData();return(0,i.Immutable)({linkType:i.LinkType.Dialog,value:e&&e.some((e=>"default"===e.id))?"default":e&&e[0]&&e[0].id})}return this.props.originLinkParam},this.getDialogData=()=>{var e,t;const s=this.props.appConfig&&this.props.appConfig.dialogs,o=(null===(e=s&&Object.values(s).filter((e=>(null==e?void 0:e.mode)===i.DialogMode.Fixed)))||void 0===e?void 0:e.sort(((e,t)=>e.index-t.index)))||[],n=(null===(t=s&&Object.values(s).filter((e=>(null==e?void 0:e.mode)===i.DialogMode.Anchored)))||void 0===t?void 0:t.sort(((e,t)=>e.index-t.index)))||[],a=o.concat(n).map((e=>e.id));return a&&a.filter((e=>!s[e].isSplash)).map((e=>({id:e,name:s[e].label})))},this.setLinkParam=e=>{let t=this.props.linkParam;t=t.set("value",e.id),this.props.onLinkParamChange(t)}}componentDidMount(){const e=this.getInitLinkParam();this.props.onLinkParamChange(e)}componentDidUpdate(e){if(e.appConfig!==this.props.appConfig){const e=this.getInitLinkParam();this.props.onLinkParamChange(e)}}render(){const e=this.getDialogData();return i.React.createElement("div",{className:"w-100"},i.React.createElement("div",{className:"mb-12 option-name"},this.props.intl.formatMessage({id:"chooseADialog",defaultMessage:x.defaultMessages.chooseADialog})),i.React.createElement("div",null,e&&e.length>0&&i.React.createElement(K,{linkParam:this.props.linkParam,datas:e,onClick:this.setLinkParam,"aria-label":this.props.intl.formatMessage({id:"chooseADialog",defaultMessage:x.defaultMessages.chooseADialog})})))}}var te=c(29169);class se extends i.React.PureComponent{constructor(){super(...arguments),this.getInitLinkParam=()=>{const e=te.searchUtils.getBlockAnchorPointsInPage(te.utils.getAppConfig(),te.utils.getCurrentPageId(),te.utils.getCurrentSizeMode());if(!e||e.length<1)return(0,i.Immutable)({linkType:i.LinkType.Block,value:""});if(this.props.originLinkParam.linkType!==i.LinkType.Block){const e=this.getBlockData();return(0,i.Immutable)({linkType:i.LinkType.Block,value:e&&e.some((e=>"default"===e.id))?"default":e&&e[0]&&e[0].id})}return this.props.originLinkParam},this.getBlockData=()=>te.searchUtils.getBlockAnchorPointsInPage(te.utils.getAppConfig(),te.utils.getCurrentPageId(),te.utils.getCurrentSizeMode()).map((e=>({id:e.id,name:e.label}))),this.setLinkParam=e=>{let t=this.props.linkParam;t=t.set("value",e.id),this.props.onLinkParamChange(t)}}componentDidMount(){const e=this.getInitLinkParam();this.props.onLinkParamChange(e)}render(){const e=this.getBlockData();return i.React.createElement("div",{className:"w-100"},i.React.createElement("div",{className:"mb-12 option-name"},this.props.intl.formatMessage({id:"jumpTo",defaultMessage:x.defaultMessages.jumpTo})),i.React.createElement("div",null,e&&e.length>0&&i.React.createElement(K,{linkParam:this.props.linkParam,datas:e,onClick:this.setLinkParam,"aria-label":this.props.intl.formatMessage({id:"jumpTo",defaultMessage:x.defaultMessages.jumpTo})})))}}class ie extends i.React.PureComponent{constructor(){super(...arguments),this.screenGroupLabelStyle={marginLeft:"-20px"},this.getInitLinkParam=()=>{const e=this.getScreenData();return!e||e.length<1?(0,i.Immutable)({linkType:i.LinkType.Screen,value:""}):this.props.originLinkParam.linkType!==i.LinkType.Screen?(0,i.Immutable)({linkType:i.LinkType.Screen,value:e[0].screens[0].id}):this.props.originLinkParam},this.getScreenData=()=>te.searchUtils.getScreenAnchorPointsInPage(te.utils.getAppConfig(),te.utils.getCurrentPageId(),te.utils.getCurrentSizeMode()),this.setLinkParam=e=>{let t=this.props.linkParam;t=t.set("value",e.target.value),this.props.onLinkParamChange(t)}}componentDidMount(){const e=this.getInitLinkParam();this.props.onLinkParamChange(e)}render(){var e;const t=this.getScreenData(),s=[];return t.forEach((e=>{s.push(i.React.createElement("option",{value:e.id,key:e.id,disabled:!0,style:this.screenGroupLabelStyle},e.label)),e.screens.forEach(((t,o)=>s.push(i.React.createElement("option",{value:t.id,key:`${e.id}-${o}`},t.label))))})),i.React.createElement("div",{className:"w-100"},i.React.createElement("div",{className:"mb-12 option-name"},this.props.intl.formatMessage({id:"jumpTo",defaultMessage:x.defaultMessages.jumpTo})),i.React.createElement("div",null,t.length>0&&i.React.createElement(x.Select,{value:null===(e=this.props.linkParam)||void 0===e?void 0:e.value,className:"w-100",onChange:this.setLinkParam,size:"sm","aria-label":this.props.intl.formatMessage({id:"jumpTo",defaultMessage:x.defaultMessages.jumpTo})},s)))}}const oe=e=>{const{className:t}=e,s=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["className"]),o=(0,i.classNames)("jimu-icon-component",t);return i.React.createElement(x.Icon,Object.assign({className:o,icon:L()},s))};const ne=e=>{const{className:t}=e,s=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["className"]),o=(0,i.classNames)("jimu-icon-component",t);return i.React.createElement(x.Icon,Object.assign({className:o,icon:N()},s))};class ae extends i.React.PureComponent{constructor(){super(...arguments),this.onCollapseClick=e=>{e.stopPropagation(),e.nativeEvent.stopImmediatePropagation(),this.setState({collapse:!this.state.collapse})}}componentWillMount(){this.setState({collapse:this.props.isOpen})}render(){return i.React.createElement("div",{className:(0,i.classNames)("w-100",this.props.className)},i.React.createElement("div",{title:this.props.title,style:{overflow:"hidden"},className:"w-100 btn pb-2 pr-2 d-flex justify-content-between"},i.React.createElement("div",null,this.props.title),i.React.createElement(x.Button,{type:"tertiary",size:"sm",className:"collapse-btn py-0 jimu-outline-inside pr-0",onClick:this.onCollapseClick},this.state.collapse?i.React.createElement(oe,{size:"s"}):i.React.createElement(ne,{size:"s"}))),i.React.createElement(x.Collapse,{isOpen:this.state.collapse,"aria-label":this.props.title},this.props.children))}}function re(e,t){const s=t&&t.pages;return s&&s[e]&&s[e].type===i.PageType.Normal&&te.searchUtils.getContentsInPageBody(t,e,i.LayoutItemType.Section,te.utils.getCurrentSizeMode())||[]}function le(e,t){if(!e)return[];const s=pe(e,t);if(s&&s.length>0){let e=[],i=[];return s.forEach((s=>{e=e.concat(ce(s,t).map((e=>e.id)))})),e.length>0&&e.forEach((e=>{i=i.concat(le(e,t))})),e.concat(i)}return[]}function pe(e,t){return te.searchUtils.getContentsInView(t,e,i.LayoutItemType.Section,te.utils.getCurrentSizeMode())||[]}function ce(e,t){const s=t.sections[e].views,i=[];for(let e=0;e<s.length;e++)i.push({id:s[e],label:t.views[s[e]].label});return i}class de extends i.React.PureComponent{constructor(e){super(e),this.noScroll="Do not scroll",this.getInitLinkParam=()=>this.props.originLinkParam.linkType===i.LinkType.View?this.props.originLinkParam:(0,i.Immutable)({linkType:i.LinkType.View,openType:!this.props.openTypes||this.props.openTypes.includes(Y.CurrentWindow)?Y.CurrentWindow:this.props.openTypes[0],value:""}),this.pageChange=e=>{let t=this.props.linkParam;t=t.set("value",e.target.value),this.props.onLinkParamChange(t)},this.viewChange=(e,t)=>{let s=[];s=Object.assign(s,this.state.viewLinkParamArr),s[0]||(s[0]=this.getDefaultPageId());const i=this.props.appConfig.sections[t].views;let o=s.filter((t=>i.some((e=>e===t))&&t!==e)),n=[];const a=s.indexOf(e);if(a>-1?o=o.concat(s[a]):n=n.concat(e),o&&o.length>0){let e=[];o.forEach((t=>{e=e.concat(le(t,this.props.appConfig))})),o=o.concat(e)}s=s.filter((e=>!o.some((t=>t===e)))),s=s.concat(n);let r=this.props.linkParam;r=r.set("value",s.join(",")),this.props.onLinkParamChange(r)},this.viewRemove=e=>{let t=[];t=Object.assign(t,this.state.viewLinkParamArr),t[0]||(t[0]=this.getDefaultPageId());const s=le(e,this.props.appConfig).concat(e);t=t.slice(0,1).concat(t.slice(1).filter((e=>!s.some((t=>t===e)))));let i=this.props.linkParam;i=i.set("value",t.join(",")),this.props.onLinkParamChange(i,!0)},this.onScrollToViewChange=e=>{this.setState({scrollToViewId:e})},this.getDefaultPageId=()=>{const e=this.props.appConfig&&this.props.appConfig.pages,t=e&&Object.keys(e).filter((e=>re(e,this.props.appConfig).length>0));return t&&t.find((t=>e[t].isDefault))||(null==t?void 0:t[0])},this.getSelectedVeiwIds=()=>this.state.viewLinkParamArr.slice(1),this.state={viewLinkParamArr:[],scrollToViewId:this.noScroll}}componentDidMount(){const e=this.getInitLinkParam(),{value:t,linkType:s}=e;t&&s===i.LinkType.View?this.setState({viewLinkParamArr:t.split(",")}):this.setState({viewLinkParamArr:[]}),this.props.onLinkParamChange(e)}static getDerivedStateFromProps(e,t){const{value:s,linkType:o}=e.linkParam;return s&&o===i.LinkType.View?Object.assign(Object.assign({},t),{viewLinkParamArr:s.split(",")}):Object.assign(Object.assign({},t),{viewLinkParamArr:[]})}render(){var e,t;if(!this.props.appConfig)return null;const s={};Object.keys(this.props.appConfig.pages).forEach((e=>{this.props.appConfig.pages[e]&&this.props.appConfig.pages[e].type===i.PageType.Normal&&(s[e]=Object.assign({},this.props.appConfig.pages[e]))}));const o=this.state.viewLinkParamArr[0]||this.getDefaultPageId();return s[o]?i.React.createElement("div",{className:"w-100"},i.React.createElement("div",{className:"mb-12 option-name"},this.props.intl.formatMessage({id:"chooseViews",defaultMessage:x.defaultMessages.chooseViews})),i.React.createElement("div",null,i.React.createElement(x.Select,{value:o,onChange:this.pageChange,className:"w-100 mb-3",size:"sm"},Object.keys(s).filter((e=>re(e,this.props.appConfig).length>0)).map(((e,t)=>i.React.createElement("option",{key:t,value:s[e].id},s[e].label)))),i.React.createElement("div",{className:(0,i.classNames)("choose-view",{"mb-3":(null===(e=re(o,this.props.appConfig))||void 0===e?void 0:e.length)>0})},re(o,this.props.appConfig).map((e=>i.React.createElement(ue,{sections:this.props.appConfig.sections,sectionId:e,viewsInfo:ce(e,this.props.appConfig),viewLinkParamArr:this.state.viewLinkParamArr,viewChange:this.viewChange,viewRemove:this.viewRemove,key:e})))),i.React.createElement("div",{className:(0,i.classNames)("choose-view",{"mb-3":(null===(t=this.getSelectedVeiwIds())||void 0===t?void 0:t.length)>0})},this.getSelectedVeiwIds().map((e=>pe(e,this.props.appConfig).map((e=>i.React.createElement(ue,{sections:this.props.appConfig.sections,sectionId:e,viewsInfo:ce(e,this.props.appConfig),viewLinkParamArr:this.state.viewLinkParamArr,viewChange:this.viewChange,viewRemove:this.viewRemove,key:e})))))))):null}}class ue extends i.React.PureComponent{constructor(e){super(e),this.onViewChange=e=>{this.setState({viewId:e}),this.props.viewChange(e,this.props.sectionId)},this.state={viewId:null}}componentWillUnmount(){this.props.viewRemove(this.state.viewId)}render(){return i.React.createElement(ae,{className:"mb-3 choose-view",title:this.props.sections[this.props.sectionId]&&this.props.sections[this.props.sectionId].label,isOpen:!0,key:this.props.sectionId},i.React.createElement("div",{className:"linksetting-list w-100 view-border border-top-0 border-left-0 border-right-0 rounded-0",role:"menu"},this.props.viewsInfo.map(((e,t)=>i.React.createElement(x.Button,{role:"menuitem",onClick:()=>this.onViewChange(e.id),key:t,className:(0,i.classNames)("jimu-outline-inside linksetting-list-item btn w-100 view-border px-2 pt-1 text-left border-bottom-0 rounded-0 text-truncate",{"item-common":!this.props.viewLinkParamArr.includes(e.id)},{itemselected:this.props.viewLinkParamArr.includes(e.id)}),title:e.label,"aria-checked":this.props.viewLinkParamArr.includes(e.id)},e.label)))))}}var he=c(47460);const ge=(0,i.Immutable)([he.ExpressionInputType.Static,he.ExpressionInputType.Attribute,he.ExpressionInputType.Expression]);class me extends i.React.PureComponent{constructor(e){var t;super(e),this.getInitLinkParam=()=>this.props.originLinkParam.linkType===i.LinkType.WebAddress?this.props.originLinkParam:(0,i.Immutable)({linkType:i.LinkType.WebAddress,openType:!this.props.openTypes||this.props.openTypes.includes(Y.NewWindow)?Y.NewWindow:this.props.openTypes[0],value:""}),this.webAddressInputChange=e=>{const t=e;let s=this.props.linkParam;s=s.set("value",t).set("expression",null),this.props.onLinkParamChange(s)},this.webAddressExpressionChange=e=>{let t=this.props.linkParam;t=t.set("expression",e).set("value",""),this.props.onLinkParamChange(t),this.closeExpPopup()},this.openExpPopup=()=>this.setState({isExpPopupOpen:!0}),this.closeExpPopup=()=>this.setState({isExpPopupOpen:!1}),this.getDefaultExp=()=>({name:"Expression",parts:[{type:i.ExpressionPartType.String,exp:'"https://"'}]}),this.onUrlChange=e=>{this.setState({url:e.target.value})},this.state={isExpPopupOpen:!1,url:(null===(t=this.props.linkParam)||void 0===t?void 0:t.linkType)===i.LinkType.WebAddress?this.props.linkParam.value:""}}componentDidMount(){const e=this.getInitLinkParam();this.props.onLinkParamChange(e)}componentDidUpdate(e){var t,s,o;(null===(t=e.linkParam)||void 0===t?void 0:t.value)!==(null===(s=this.props.linkParam)||void 0===s?void 0:s.value)&&this.setState({url:(null===(o=this.props.linkParam)||void 0===o?void 0:o.linkType)===i.LinkType.WebAddress?this.props.linkParam.value:this.state.url})}render(){return i.React.createElement("div",{className:"w-100"},i.React.createElement("div",{className:"mb-12 option-name"},this.props.intl.formatMessage({id:"url",defaultMessage:x.defaultMessages.url})),i.React.createElement("div",null,this.props.useDataSources&&this.props.useDataSources.length>0?i.React.createElement(he.ExpressionInput,{useDataSources:this.props.useDataSources,onChange:this.webAddressExpressionChange,expression:this.props.linkParam&&this.props.linkParam.expression||this.getDefaultExp(),closeExpPopup:this.closeExpPopup,openExpPopup:this.openExpPopup,isExpPopupOpen:this.state.isExpPopupOpen,types:ge,widgetId:this.props.widgetId,"aira-label":this.props.intl.formatMessage({id:"url",defaultMessage:x.defaultMessages.url})}):i.React.createElement(x.TextInput,{type:"url",value:this.state.url,onChange:this.onUrlChange,className:"w-100",placeholder:this.props.intl.formatMessage({id:"websitePlaceholder",defaultMessage:x.defaultMessages.websitePlaceholder}),spellCheck:!1,onAcceptValue:this.webAddressInputChange,"aira-label":this.props.intl.formatMessage({id:"url",defaultMessage:x.defaultMessages.url})})))}}class fe extends i.React.PureComponent{constructor(e){if(super(e),this.getLinkTypeContent=()=>{if(this.props.isLinkPageSetting)return(0,i.jsx)(x.Select,{value:this.state.linkParam.linkType,size:"sm",onChange:this.linkTypeChange,className:"w-100","aria-label":this.props.intl.formatMessage({id:"linkTo",defaultMessage:x.defaultMessages.linkTo})},(0,i.jsx)("option",{value:i.LinkType.WebAddress},this.props.intl.formatMessage({id:"url",defaultMessage:x.defaultMessages.url})));{const e=this.getHiddenLinks();return(0,i.jsx)(x.Select,{value:this.state.linkParam.linkType,size:"sm",onChange:this.linkTypeChange,className:"w-100","aria-label":this.props.intl.formatMessage({id:"linkTo",defaultMessage:x.defaultMessages.linkTo})},!e.some((e=>e===i.LinkType.None))&&(0,i.jsx)("option",{value:i.LinkType.None},this.props.intl.formatMessage({id:"none",defaultMessage:x.defaultMessages.none})),!e.some((e=>e===i.LinkType.Page))&&(0,i.jsx)("option",{value:i.LinkType.Page},this.props.intl.formatMessage({id:"page",defaultMessage:i.defaultMessages.page})),!e.some((e=>e===i.LinkType.View))&&(0,i.jsx)("option",{value:i.LinkType.View},this.props.intl.formatMessage({id:"view",defaultMessage:i.defaultMessages.view})),!e.some((e=>e===i.LinkType.Dialog))&&(0,i.jsx)("option",{value:i.LinkType.Dialog},this.props.intl.formatMessage({id:"dialog",defaultMessage:i.defaultMessages.dialog})),!e.some((e=>e===i.LinkType.WebAddress))&&(0,i.jsx)("option",{value:i.LinkType.WebAddress},this.props.intl.formatMessage({id:"url",defaultMessage:x.defaultMessages.url})),!e.some((e=>e===i.LinkType.Block))&&(0,i.jsx)("option",{value:i.LinkType.Block},this.props.intl.formatMessage({id:"block",defaultMessage:i.defaultMessages.block})),!e.some((e=>e===i.LinkType.PageTop))&&(0,i.jsx)("option",{value:i.LinkType.PageTop},this.props.intl.formatMessage({id:"pageTop",defaultMessage:x.defaultMessages.pageTop})))}},this.getHiddenLinks=()=>{var e;let t=this.props.hiddenLinks||(0,i.Immutable)([]);const s=te.utils.getCurrentPageId(),o=te.utils.getAppConfig(),n=null===(e=o.pages)||void 0===e?void 0:e[s],a=te.searchUtils.findLayoutId(null==n?void 0:n.layout,te.utils.getCurrentSizeMode(),o.mainSizeMode),r=o.layouts[a];return(null==r?void 0:r.type)===i.LayoutType.FixedLayout&&(t=t.concat([i.LinkType.Block,i.LinkType.Screen,i.LinkType.PageTop])),t},this.getLinkContent=e=>{switch(e){case i.LinkType.None:return null;case i.LinkType.Page:return(0,i.jsx)(Z,{originLinkParam:this.state.originLinkParam,linkParam:this.state.linkParam,appConfig:this.props.appConfig,onLinkParamChange:this.linkParamChange,intl:this.props.intl,openTypes:this.props.openTypes});case i.LinkType.Dialog:return(0,i.jsx)(ee,{originLinkParam:this.state.originLinkParam,linkParam:this.state.linkParam,appConfig:this.props.appConfig,onLinkParamChange:this.linkParamChange,intl:this.props.intl});case i.LinkType.Block:return(0,i.jsx)(se,{originLinkParam:this.state.originLinkParam,linkParam:this.state.linkParam,onLinkParamChange:this.linkParamChange,intl:this.props.intl});case i.LinkType.Screen:return(0,i.jsx)(ie,{originLinkParam:this.state.originLinkParam,linkParam:this.state.linkParam,onLinkParamChange:this.linkParamChange,intl:this.props.intl});case i.LinkType.View:return(0,i.jsx)(de,{originLinkParam:this.state.originLinkParam,linkParam:this.state.linkParam,intl:this.props.intl,openTypes:this.props.openTypes,appConfig:this.props.appConfig,onLinkParamChange:this.linkParamChange,browserSizeMode:this.props.browserSizeMode});case i.LinkType.WebAddress:return(0,i.jsx)(me,{originLinkParam:this.state.originLinkParam,linkParam:this.state.linkParam,intl:this.props.intl,onLinkParamChange:this.linkParamChange,useDataSources:this.props.useDataSources,openTypes:this.props.openTypes,widgetId:this.props.widgetId});default:return null}},this.linkTypeChange=e=>{let t=(0,i.Immutable)(this.state.linkParam);const s=e.target.value;s===i.LinkType.PageTop&&(t=(0,i.Immutable)({})),this.setState({linkParam:t.set("linkType",s)})},this.radioOpenTypeChange=e=>{let t=(0,i.Immutable)(this.state.linkParam);t=t.set("openType",e),this.setState({linkParam:t})},this.linkParamChange=(e,t)=>{t?e&&this.state.linkParam&&e.linkType===this.state.linkParam.linkType&&this.setState({linkParam:e}):this.setState({linkParam:e})},this.settingConfirm=()=>{const e=(0,i.Immutable)(this.state.linkParam);this.setState({originLinkParam:e}),this.props.onSettingConfirm(e)},this.isLinkParamOk=e=>{if(!e||!e.linkType)return!1;if(e.linkType===i.LinkType.View){const t=e.value&&e.value.split(",")[0]||null,s=e.value&&e.value.split(",").slice(1)||[];return!!(t&&"string"==typeof t&&s.length>0)}if(e.linkType===i.LinkType.WebAddress){if(this.props.useDataSources&&this.props.useDataSources.length>0){const t=e.expression&&e.expression.parts;let s=!1;return t&&t.length>0&&(s=1!==t.length||!!t[0].exp&&'""'!==t[0].exp),s}{const t=x.utils.getHttpErrorType(e.value);return e.value&&!t}}return e.linkType===i.LinkType.PageTop||e.linkType===i.LinkType.None||!(!e.value||"string"!=typeof e.value)},this.props.linkParam&&this.props.linkParam.linkType)this.state={linkParam:(0,i.Immutable)(this.props.linkParam),originLinkParam:(0,i.Immutable)(this.props.linkParam)};else{const e={linkType:i.LinkType.None,openType:!this.props.openTypes||this.props.openTypes.includes(Y.CurrentWindow)?Y.CurrentWindow:this.props.openTypes[0]};this.state={linkParam:(0,i.Immutable)(e),originLinkParam:(0,i.Immutable)(e)}}}needOpenIn(e){return!e||![i.LinkType.Dialog,i.LinkType.Block,i.LinkType.Screen,i.LinkType.PageTop].some((t=>t===e.linkType))}render(){if(this.props.appConfig){const e=this.getLinkTypeContent(),t=this.getLinkContent(this.state.linkParam.linkType);return(0,i.jsx)("div",{className:(0,i.classNames)(this.props.className,"w-100 h-100")},(0,i.jsx)("div",{className:"widget-builder-linksetting w-100 h-100"},(0,i.jsx)("div",{style:{position:"relative"},className:"w-100 h-100"},(0,i.jsx)(x.Container,null,(0,i.jsx)(x.Row,{className:"mb-12 option-name"},this.props.intl.formatMessage({id:"linkTo",defaultMessage:x.defaultMessages.linkTo})),(0,i.jsx)(x.Row,{className:"mb-3"},e),this.state.linkParam.linkType!==i.LinkType.None?(0,i.jsx)("div",null,(0,i.jsx)(x.Row,{className:"mb-3"},t),this.needOpenIn(this.state.linkParam)&&(0,i.jsx)("div",null,(0,i.jsx)(x.Row,{className:"mb-12 option-name"},this.props.intl.formatMessage({id:"openIn",defaultMessage:x.defaultMessages.openIn})),(0,i.jsx)(x.Container,{className:"p-0","aria-label":this.props.intl.formatMessage({id:"openIn",defaultMessage:x.defaultMessages.openIn})},(!this.props.openTypes||this.props.openTypes.some((e=>e===Y.CurrentWindow)))&&(0,i.jsx)(x.Row,{className:"mb-3"},(0,i.jsx)(x.Radio,{onChange:()=>this.radioOpenTypeChange(Y.CurrentWindow),id:"link-setting-app-window",checked:this.state.linkParam.openType===Y.CurrentWindow}),(0,i.jsx)(x.Label,{for:"link-setting-app-window",className:"ml-2 link-setting-cursor-pointer open-type-label text-truncate"},this.props.intl.formatMessage({id:"appWindow",defaultMessage:x.defaultMessages.appWindow}))),(!this.props.openTypes||this.props.openTypes.some((e=>e===Y.TopWindow)))&&(0,i.jsx)(x.Row,{className:"mb-3"},(0,i.jsx)(x.Radio,{onChange:()=>this.radioOpenTypeChange(Y.TopWindow),id:"link-setting-top-window",checked:this.state.linkParam.openType===Y.TopWindow}),(0,i.jsx)(x.Label,{for:"link-setting-top-window",className:"ml-2 link-setting-cursor-pointer open-type-label text-truncate"},this.props.intl.formatMessage({id:"topWindow",defaultMessage:x.defaultMessages.topWindow}))),(!this.props.openTypes||this.props.openTypes.some((e=>e===Y.NewWindow)))&&(0,i.jsx)(x.Row,{className:"mb-3"},(0,i.jsx)(x.Radio,{onChange:()=>this.radioOpenTypeChange(Y.NewWindow),id:"link-setting-new-window",checked:this.state.linkParam.openType===Y.NewWindow}),(0,i.jsx)(x.Label,{for:"link-setting-new-window",className:"ml-2 link-setting-cursor-pointer open-type-label text-truncate"},this.props.intl.formatMessage({id:"newWindow",defaultMessage:x.defaultMessages.newWindow})))))):null),(0,i.jsx)("div",{className:"w-100",style:{position:"absolute"}},(0,i.jsx)(x.Button,{className:"w-100 text-dark link-setting-ok-btn",type:"primary",onClick:this.settingConfirm,disabled:!this.isLinkParamOk(this.state.linkParam),title:this.props.intl.formatMessage({id:"ok",defaultMessage:i.defaultMessages.ok})},(0,i.jsx)("div",{className:"text-truncate"},this.props.intl.formatMessage({id:"ok",defaultMessage:i.defaultMessages.ok})))))))}return null}componentDidMount(){this.props.isLinkPageSetting&&this.linkTypeChange({target:{value:i.LinkType.WebAddress}})}}const ve=i.ReactRedux.connect((e=>({appConfig:window&&window.jimuConfig&&window.jimuConfig.isBuilder?e.appStateInBuilder.appConfig:e.appConfig,browserSizeMode:window&&window.jimuConfig&&window.jimuConfig.isBuilder?e.appStateInBuilder.browserSizeMode:e.browserSizeMode})))((0,i.injectIntl)((0,w.withStyles)(fe,"LinkSetting")));const ye=[{name:"preventOverflow",options:{boundariesElement:"viewport"}}];class we extends i.React.PureComponent{constructor(){super(...arguments),this.handleDocumentMousedown=e=>{if(this.props.isOpen){const t=e.target;(!this.props.trigger||(0,x.isOutBoundary)(t,this.props.trigger))&&this.props.toggle()}}}componentDidMount(){var e;null===(e=this.getReference(this.props.position))||void 0===e||e.addEventListener("mousedown",this.handleDocumentMousedown,!1)}componentDidUpdate(e){var t;const s="left"===this.props.position&&e.leftSidebarCollapse&&!this.props.leftSidebarCollapse||"right"===this.props.position&&e.rightSidebarCollapse&&!this.props.rightSidebarCollapse,i=this.props.widgetId&&this.props.layoutSelection!==e.layoutSelection&&(null===(t=te.searchUtils.findLayoutItem(te.utils.getAppConfig(),this.props.layoutSelection))||void 0===t?void 0:t.widgetId)!==this.props.widgetId,o=!e.isTemplatePage&&this.props.isTemplatePage;(s||i||o)&&this.props.isOpen&&this.props.toggle()}componentWillUnmount(){var e;null===(e=this.getReference(this.props.position))||void 0===e||e.removeEventListener("mousedown",this.handleDocumentMousedown,!1)}getReference(e){return"left"===e?document&&document.querySelector('[data-layoutid="left-sidebar-left-layout"]'):document&&document.querySelector('[data-layoutid="right-sidebar-right-layout"]')}getPlacement(e){return"left"===e?"right-start":"left-start"}render(){const e=this.props,{isOpen:t,position:s,className:o,dispatch:n,leftSidebarCollapse:a,rightSidebarCollapse:r,trigger:l,widgetId:p,layoutSelection:c,title:d,isTemplatePage:u}=e,h=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["isOpen","position","className","dispatch","leftSidebarCollapse","rightSidebarCollapse","trigger","widgetId","layoutSelection","title","isTemplatePage"]);return(0,i.jsx)(x.Popper,Object.assign({reference:this.getReference(s),placement:this.getPlacement(s),open:t,className:(0,i.classNames)("bg-light-300",o),modifiers:ye},h,{toggle:null}),"string"==typeof d&&(0,i.jsx)(x.PanelHeader,{title:d,showClose:!0,onClose:this.props.toggle,level:1,className:"p-3"}),"string"==typeof d?(0,i.jsx)("div",{css:i.css`height: calc(100% - 60px); overflow: auto;`},this.props.children):this.props.children)}}const xe=i.ReactRedux.connect(((e,t)=>{var s,i,o,n,a,r,l,p,c,d;return{leftSidebarCollapse:null===(i=null===(s=e.widgetsState)||void 0===s?void 0:s["left-sidebar"])||void 0===i?void 0:i.collapse,rightSidebarCollapse:null===(n=null===(o=e.widgetsState)||void 0===o?void 0:o["right-sidebar"])||void 0===n?void 0:n.collapse,layoutSelection:t.widgetId?(null===(a=null===window||void 0===window?void 0:window.jimuConfig)||void 0===a?void 0:a.isBuilder)?null===(l=null===(r=e.appStateInBuilder)||void 0===r?void 0:r.appRuntimeInfo)||void 0===l?void 0:l.selection:null===(p=e.appRuntimeInfo)||void 0===p?void 0:p.selection:null,isTemplatePage:(null===(c=null===window||void 0===window?void 0:window.jimuConfig)||void 0===c?void 0:c.isBuilder)&&"template"===(null===(d=e.appRuntimeInfo)||void 0===d?void 0:d.currentPageId)}}))((0,w.withStyles)(we,"SidePopper"));class be extends i.React.PureComponent{constructor(){super(...arguments),this.close=()=>{this.props.onSettingCancel()},this.getIsOpen=()=>this.props.isOpen||this.props.showDialog}render(){const e=this.props.pisition||"right",{title:t}=this.props;return i.React.createElement(xe,{isOpen:this.getIsOpen(),position:e,toggle:this.close,trigger:this.props.trigger,widgetId:this.props.widgetId,title:this.props.intl.formatMessage({id:t?"setLinkForTitle":"setLink",defaultMessage:t?x.defaultMessages.setLinkForTitle:x.defaultMessages.setLink},{title:t})},i.React.createElement("div",{className:"bg-light-300 w-100 h-100 px-3"},i.React.createElement(ve,{isLinkPageSetting:this.props.isLinkPageSetting,linkParam:this.props.linkParam,onSettingConfirm:this.props.onSettingConfirm,useDataSources:this.props.useDataSources,widgetId:this.props.widgetId,hiddenLinks:this.props.hiddenLinks,openTypes:this.props.openTypes})))}}const Se=(0,i.injectIntl)((0,w.withTheme)(be));var ke=c(33037),Ce=function(e,t,s,i){return new(s||(s=Promise))((function(o,n){function a(e){try{l(i.next(e))}catch(e){n(e)}}function r(e){try{l(i.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(a,r)}l((i=i.apply(e,t||[])).next())}))};function Pe(){var e,t,s,o;return Ce(this,void 0,void 0,(function*(){const n=null===(o=null===(s=null===(t=null===(e=(0,i.getAppStore)())||void 0===e?void 0:e.getState())||void 0===t?void 0:t.appStateInBuilder)||void 0===s?void 0:s.appConfig)||void 0===o?void 0:o.dataSources,a=[];return n&&Object.keys(n).forEach((e=>{const t=i.DataSourceManager.getInstance().getDataSource(e);a.push(Ie(t))})),Promise.allSettled(a).then((e=>{let t={};return e.filter((e=>"fulfilled"===e.status)).map((e=>e.value)).forEach((e=>{e&&Object.keys(e).forEach((s=>{t[s]?t[s].dataSources=t[s].dataSources.concat(e[s].dataSources):t=Object.assign(Object.assign({},t),e)}))})),t}))}))}function Ie(e,t=!1){var s,o,n,a,r,l,p,c,d,u;return Ce(this,void 0,void 0,(function*(){const h={};if(!e)return h;const g=null===(a=null===(n=null===(o=null===(s=(0,i.getAppStore)())||void 0===s?void 0:s.getState())||void 0===o?void 0:o.appStateInBuilder)||void 0===n?void 0:n.appConfig)||void 0===a?void 0:a.widgets,m=(null===(r=e.getMainDataSource())||void 0===r?void 0:r.id)===e.id,f=ke.dataComponentsUtils.getWidgetsUsingDsOrItsViews(e.id,g,!1).length>0,v=i.dataSourceUtils.getFullServiceUrl(null===(l=e.getDataSourceJson())||void 0===l?void 0:l.url,!1);if(m&&v&&(t||f)){const t=(null===(p=e.getDataSourceJson())||void 0===p?void 0:p.portalUrl)&&(null===(c=e.getDataSourceJson())||void 0===c?void 0:c.itemId)?yield function(e,t){return Ce(this,void 0,void 0,(function*(){const s=function(e,t){return`${i.SessionManager.getInstance().getSessionKeyFromUrl(t)}-${e}`}(e,t);return De[s]||(De[s]=i.requestUtils.requestWrapper(t,(s=>Ce(this,void 0,void 0,(function*(){return yield i.esri.restPortal.getItem(e,{portal:i.portalUrlUtils.getPortalRestUrl(t),authentication:s})}))))),yield De[s]}))}(null===(d=e.getDataSourceJson())||void 0===d?void 0:d.itemId,null===(u=e.getDataSourceJson())||void 0===u?void 0:u.portalUrl):null,s=i.dataSourceUtils.isOriginDataPremium(t,v),o=i.dataSourceUtils.isOriginDataSubscriber(t,v);(s||o)&&(h[v]={dataSources:[e],isPremium:s,isSubscriber:o})}const y=[];if(m&&e.isDataSourceSet){const s=(e.type===ke.AllDataSourceTypes.WebMap||e.type===ke.AllDataSourceTypes.WebScene)&&f||t;e.getChildDataSources().forEach((e=>{y.push(Ie(e,s))}))}return Promise.allSettled(y).then((e=>{let t=h;return e.filter((e=>"fulfilled"===e.status)).map((e=>e.value)).forEach((e=>{e&&Object.keys(e).forEach((s=>{t[s]?t[s].dataSources=t[s].dataSources.concat(e[s].dataSources):t=Object.assign(Object.assign({},t),e)}))})),t}))}))}function je(e,t){var s;if(!e||!t)return null;let i=null;for(const o in t)if((null===(s=t[o])||void 0===s?void 0:s.sourceUrl)===e){i=t[o];break}return i}function Me(e,t,s,i){return!(!e||!t)&&(e.sourceUrl===t&&((!e.hitsPerInterval&&!s||e.hitsPerInterval===s)&&!((e.intervalSeconds||i)&&e.intervalSeconds!==i)))}function Te(){var e,t;const s=null===(e=(0,i.getAppStore)().getState())||void 0===e?void 0:e.appStateInBuilder.appInfo;return null===(t=null==s?void 0:s.typeKeywords)||void 0===t?void 0:t.includes("Registered App")}function Ne(){var e,t,s,o,n,a,r,l,p,c;return Ce(this,void 0,void 0,(function*(){if((null===(s=null===(t=null===(e=(0,i.getAppStore)().getState())||void 0===e?void 0:e.appContext)||void 0===t?void 0:t.jimuConfig)||void 0===s?void 0:s.isInPortal)||(null===(a=null===(n=null===(o=(0,i.getAppStore)().getState())||void 0===o?void 0:o.appContext)||void 0===n?void 0:n.jimuConfig)||void 0===a?void 0:a.isDevEdition))return yield Promise.resolve(!1);const d=Te();let u=!1;if(!d){const e=null===(r=(0,i.getAppStore)().getState())||void 0===r?void 0:r.appStateInBuilder.appInfo,t=null===(c=null===(p=null===(l=(0,i.getAppStore)().getState())||void 0===l?void 0:l.appStateInBuilder)||void 0===p?void 0:p.user)||void 0===c?void 0:c.username;u=(null==e?void 0:e.owner)===t}if(!d&&!u)return yield Promise.resolve(!1);const h=yield Pe(),g=Object.keys(h).map((e=>Ce(this,void 0,void 0,(function*(){return yield i.ServiceManager.getInstance().fetchServiceInfo(e).then((e=>e.isHostedInSamePortal))}))));return Promise.all(g).then((e=>(null==e?void 0:e.length)>0&&(null==e?void 0:e.some((e=>e)))))}))}function Oe(e,t){return Ce(this,void 0,void 0,(function*(){if(!e||0===e.length||!t)return yield Promise.resolve();const s=Ee();return yield i.esri.restRequest.request(s,{authentication:i.SessionManager.getInstance().getSessionByUrl((0,i.getAppStore)().getState().portalUrl),httpMethod:"POST",params:{proxies:e.join()}}).then((e=>Ce(this,void 0,void 0,(function*(){var s;return e.results&&Object.values(e.results).forEach((e=>{e.success&&Le(e.proxyId,t)})),null==t||t.exec(),(null===(s=e.results)||void 0===s?void 0:s.every((e=>!0===e.success)))?Promise.resolve():Promise.reject(`Deleting existing proxy failed: ${JSON.stringify(e)}`)})))).catch((s=>Ce(this,void 0,void 0,(function*(){return e.forEach((e=>{Le(e,t)})),null==t||t.exec(),Promise.reject(`Deleting existing proxy failed: ${JSON.stringify(s)}`)}))))}))}function Le(e,t){var s,o,n;const a=null===(n=null===(o=null===(s=(0,i.getAppStore)().getState())||void 0===s?void 0:s.appStateInBuilder)||void 0===o?void 0:o.appConfig)||void 0===n?void 0:n.appProxies,r=a&&Object.values(a).find((t=>t.proxyId===e));r&&(null==t||t.removeAppProxy(r.id))}function Re(){var e,t,s,o,n,a,r;const l=null===(t=null===(e=(0,i.getAppStore)().getState())||void 0===e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.portalUrl,p=null===(o=null===(s=(0,i.getAppStore)().getState())||void 0===s?void 0:s.appStateInBuilder)||void 0===o?void 0:o.appId;return`${l}/sharing/rest/content/users/${null===(r=null===(a=null===(n=(0,i.getAppStore)().getState())||void 0===n?void 0:n.appStateInBuilder)||void 0===a?void 0:a.appInfo)||void 0===r?void 0:r.owner}/items/${p}`}function Ae(){return`${Re()}/createProxies`}function Ee(){return`${Re()}/deleteProxies`}const De={};var $e=c(18371),Be=c.n($e);const ze=e=>{const{className:t}=e,s=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["className"]),o=(0,i.classNames)("jimu-icon-component",t);return i.React.createElement(x.Icon,Object.assign({className:o,icon:Be()},s))};class Ue extends i.React.PureComponent{constructor(e){super(e),this.__unmount=!1,this.interval={none:this.props.intl.formatMessage({id:"intervalNone",defaultMessage:x.defaultMessages.intervalNone}),second:this.props.intl.formatMessage({id:"intervalSecond",defaultMessage:x.defaultMessages.intervalSecond}),minute:this.props.intl.formatMessage({id:"intervalMinute",defaultMessage:x.defaultMessages.intervalMinute}),hour:this.props.intl.formatMessage({id:"intervalHour",defaultMessage:x.defaultMessages.intervalHour}),day:this.props.intl.formatMessage({id:"intervalDay",defaultMessage:x.defaultMessages.intervalDay})},this.setIsHostedInSamePortal=()=>{this.props.sourceUrl&&i.ServiceManager.getInstance().fetchServiceInfo(this.props.sourceUrl).then((e=>{this.__unmount||this.setState({isHostedInSamePortal:e.isHostedInSamePortal})}))},this.onToggleProxy=()=>{let e;e=this.props.proxyConfig?null:(0,i.Immutable)({sourceUrl:this.props.sourceUrl}),this.props.onChange(this.props.sourceUrl,e)},this.onHitsPerInervalChange=e=>{const t=e,s=(0,i.Immutable)({sourceUrl:this.props.sourceUrl,hitsPerInterval:t}),o=this.props.proxyConfig?this.props.proxyConfig.merge(s):s;this.props.onChange(this.props.sourceUrl,o)},this.onIntervalUnitChange=e=>{const t=e.target.value,s=this.getIntervalSeconds(t),o=(0,i.Immutable)({sourceUrl:this.props.sourceUrl,intervalSeconds:s}),n=this.props.proxyConfig?this.props.proxyConfig.merge(o):o;this.props.onChange(this.props.sourceUrl,n)},this.state={isHostedInSamePortal:!0}}componentDidMount(){this.__unmount=!1,this.setIsHostedInSamePortal()}componentDidUpdate(e){this.__unmount=!1,e.sourceUrl!==this.props.sourceUrl&&this.setIsHostedInSamePortal()}componentWillUnmount(){this.__unmount=!0}getIntervalUnit(e){if(!e)return"none";switch(e){case 1:return"second";case 60:return"minute";case 3600:return"hour";case 86400:return"day";default:return"none"}}getIntervalSeconds(e){if(!e)return null;switch(e){case"second":return 1;case"minute":return 60;case"hour":return 3600;case"day":return 86400;default:return null}}render(){var e,t;if(!this.props.sourceUrl)return null;const s=this.props.label,o=!!this.props.proxyConfig,n=this.getIntervalUnit(null===(e=this.props.proxyConfig)||void 0===e?void 0:e.intervalSeconds),a=i.SessionManager.getInstance().getMainSession(),r=`${this.props.sourceUrl}?token=${a.token}`;return i.React.createElement("tr",{className:"row m-0 content-table-tr"},i.React.createElement("td",{className:"col-2",title:this.state.isHostedInSamePortal?null:this.props.intl.formatMessage({id:"disabledProxyTooltip",defaultMessage:x.defaultMessages.disabledProxyTooltip})},i.React.createElement(x.Switch,{onChange:this.onToggleProxy,checked:o,className:"mr-2",disabled:!this.state.isHostedInSamePortal})),i.React.createElement("td",{className:"col-4",title:s},i.React.createElement(x.Link,{to:r,target:"_blank",className:"font-size-13 px-0 text-truncate d-block text-left"},s)),i.React.createElement("td",{className:"col-2"},this.props.isPremium&&i.React.createElement(ze,{size:"m"})),i.React.createElement("td",{className:"col-2"},o&&i.React.createElement(x.NumericInput,{size:"sm",value:null===(t=this.props.proxyConfig)||void 0===t?void 0:t.hitsPerInterval,onChange:this.onHitsPerInervalChange,precision:0,min:1,className:"request-limit"})),i.React.createElement("td",{className:"col-2"},o&&i.React.createElement(x.Select,{value:n,onChange:this.onIntervalUnitChange,size:"sm",className:"request-interval"},Object.keys(this.interval).map(((e,t)=>i.React.createElement("option",{value:e,key:t,selected:e===n},this.interval[e]))))))}}class We extends i.React.PureComponent{constructor(){super(...arguments),this.columnName={authorized:this.props.intl.formatMessage({id:"authorized",defaultMessage:x.defaultMessages.authorized}),subscriberContent:this.props.intl.formatMessage({id:"subscriberContent",defaultMessage:x.defaultMessages.subscriberContent}),credits:this.props.intl.formatMessage({id:"credits",defaultMessage:x.defaultMessages.credits}),requestLimit:this.props.intl.formatMessage({id:"requestLimit",defaultMessage:x.defaultMessages.requestLimit}),requestInterval:this.props.intl.formatMessage({id:"requestInterval",defaultMessage:x.defaultMessages.requestInterval})},this.onProxyChange=(e,t)=>{let s;const o=this.props.proxyConfigs||(0,i.Immutable)({}),n=i.dataSourceUtils.getDsTypeFromWholeServiceUrl(e)===i.DataSourceTypes.SceneService;if(t){if(s=o.set(e,t),n){const i=e.replace("/SceneServer","/FeatureServer"),o=t.set("sourceUrl",i);s=s.set(i,o)}}else if(s=o.without(e),n){const t=e.replace("/SceneServer","/FeatureServer");s=s.without(t)}this.props.onChange(s)}}render(){const e=this.props.needProxyDataSources,t=this.props.proxyConfigs;return i.React.createElement("div",{className:(0,i.classNames)("h-100 w-100 bg-light-300",{[this.props.className]:!!this.props.className})},i.React.createElement("div",{className:"subscriber-warning"},this.props.intl.formatMessage({id:"subscriberWarning",defaultMessage:x.defaultMessages.subscriberWarning})),i.React.createElement("div",{className:"secondary-title mt-4 mb-3"},this.props.intl.formatMessage({id:"data",defaultMessage:x.defaultMessages.data})),i.React.createElement("table",{className:"content-table w-100"},i.React.createElement("thead",{className:"content-table-header container"},i.React.createElement("tr",{className:"row"},Object.keys(this.columnName).map(((e,t)=>i.React.createElement("th",{key:t,className:(0,i.classNames)("text-truncate",{"col-4":"subscriberContent"===e,"col-2":"subscriberContent"!==e}),title:this.columnName[e]},this.columnName[e]))))),i.React.createElement("tbody",{className:"container"},e&&Object.keys(e).map(((s,o)=>{var n,a;const r=e[s],l=r.dataSources[0],p=(null===(n=l)||void 0===n?void 0:n.getLayerDefinition)?null===(a=l)||void 0===a?void 0:a.getLayerDefinition():l.getServiceDefinition?l.getServiceDefinition():null;return i.React.createElement(Ue,{isPremium:r.isPremium,isSubscriber:r.isSubscriber,sourceUrl:s,intl:this.props.intl,key:o,onChange:this.onProxyChange,label:(null==p?void 0:p.name)||i.dataSourceUtils.getServiceLabelFromUrl(s),icon:ke.dataComponentsUtils.getDsIcon(l.getDataSourceJson()),proxyConfig:null==t?void 0:t[s]})})))))}}const Fe=(0,i.injectIntl)((0,w.withStyles)(We,"ProxySetting"));var _e;!function(e){e.IMAGE="image",e.ICON="icon"}(_e||(_e={}));var Ve=function(e,t,s,i){return new(s||(s=Promise))((function(o,n){function a(e){try{l(i.next(e))}catch(e){n(e)}}function r(e){try{l(i.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(a,r)}l((i=i.apply(e,t||[])).next())}))};const He={};class Je extends i.React.PureComponent{constructor(e){super(e),this.__unmount=!1,this.getProxyConfigFromAppProxyJsons=()=>Ve(this,void 0,void 0,(function*(){var e,t;const s=yield Pe(),o={},n=null===(t=null===(e=(0,i.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appConfig)||void 0===t?void 0:t.appProxies;return Object.keys(s).forEach((e=>{const t=je(e,n);t&&(o[e]=t.without("id").without("proxyId").without("proxyUrl"))})),{proxyConfigs:(0,i.Immutable)(o),needProxyDataSources:s}})),this.registerApp=()=>Ve(this,void 0,void 0,(function*(){var e,t,s,o;const n=null===(t=null===(e=(0,i.getAppStore)().getState())||void 0===e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.appId;if(He[n])return yield He[n];const a=`${null===(o=null===(s=(0,i.getAppStore)().getState())||void 0===s?void 0:s.appStateInBuilder)||void 0===o?void 0:o.portalUrl}/sharing/rest/oauth2/registerApp`;return He[n]=i.esri.restRequest.request(a,{authentication:i.SessionManager.getInstance().getSessionByUrl((0,i.getAppStore)().getState().portalUrl),httpMethod:"POST",params:{itemId:n,appType:"browser",redirect_uris:JSON.stringify([this.getAppRootUrl()])}}),yield He[n]})),this.createProxies=e=>Ve(this,void 0,void 0,(function*(){var t,s,o;if(!e)return yield Promise.resolve(null);const n=null===(o=null===(s=null===(t=(0,i.getAppStore)().getState())||void 0===t?void 0:t.appStateInBuilder)||void 0===s?void 0:s.appConfig)||void 0===o?void 0:o.appProxies,a={};let r=[];if(Object.keys(e).forEach((t=>{const s=e[t];if(!s)return;const i=s.hitsPerInterval,o=s.intervalSeconds,l=je(t,n);Me(l,t,i,o)?a[l.id]=l:r=r.concat({sourceUrl:t,hitsPerInterval:i,intervalSeconds:o})})),0===r.length)return(0,i.Immutable)(a);Te()||(yield this.registerApp());const l={referrers:[this.getAppUrl()]},p=Ae();return i.esri.restRequest.request(p,{authentication:i.SessionManager.getInstance().getSessionByUrl((0,i.getAppStore)().getState().portalUrl),httpMethod:"POST",params:{serviceProxyParams:l,proxies:r}}).then((e=>{var t,s;const o=(null==e?void 0:e.appProxies)||[],n=a,r=null===(s=null===(t=(0,i.getAppStore)().getState())||void 0===t?void 0:t.appStateInBuilder)||void 0===s?void 0:s.appConfig,l=null==r?void 0:r.appProxies;return o.forEach((e=>{const t=je(e.sourceUrl,l),s=(null==t?void 0:t.id)||i.appConfigUtils.getUniqueId(r.set("appProxies",l?l.merge(n):n),"appProxy");n[s]=Object.assign(Object.assign({},e),{id:s})})),(0,i.Immutable)(n)}))})),this.getAppRootUrl=()=>{var e;return null===(e=null===window||void 0===window?void 0:window.location)||void 0===e?void 0:e.origin},this.getAppUrl=()=>{var e,t,s,o,n,a;const r=null===(t=null===(e=(0,i.getAppStore)().getState())||void 0===e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.appId,l=null===(o=null===(s=(0,i.getAppStore)().getState())||void 0===s?void 0:s.appStateInBuilder)||void 0===o?void 0:o.appInfo,p="Web Experience Template"===(null==l?void 0:l.type),c=null===(n=i.urlUtils.getAppUrl({appId:r,isTemplate:p}))||void 0===n?void 0:n.replace(/^\//,"");return`${null===(a=this.getAppRootUrl())||void 0===a?void 0:a.replace(/\/$/,"")}/${c}`},this.onProxyConfigChange=e=>{this.setState({proxyConfigs:e})},this.onFinish=()=>{var e,t,s,o;this.setState({isLoading:!0});const n=this.state.proxyConfigs||(0,i.Immutable)({}),a=null===(s=null===(t=null===(e=(0,i.getAppStore)().getState())||void 0===e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.appConfig)||void 0===s?void 0:s.appProxies,r=a&&Object.values(a).filter((e=>{var t;let s=n[null==e?void 0:e.sourceUrl];if(i.dataSourceUtils.getDsTypeFromWholeServiceUrl(null==e?void 0:e.sourceUrl)===i.DataSourceTypes.FeatureService){const i=null===(t=null==e?void 0:e.sourceUrl)||void 0===t?void 0:t.replace("/FeatureServer","/SceneServer"),o=n[i];s=s||(null==o?void 0:o.set("sourceUrl",null==e?void 0:e.sourceUrl))}return!s||!Me(e,s.sourceUrl,s.hitsPerInterval,s.intervalSeconds)}));Oe(null==r?void 0:r.map((e=>e.proxyId)),null===(o=this.state)||void 0===o?void 0:o.getAppConfigAction()).then((()=>Ve(this,void 0,void 0,(function*(){return yield this.createProxies(n).then((e=>{var t;if(!this.__unmount){if(e){const s=null===(t=this.state)||void 0===t?void 0:t.getAppConfigAction();Object.keys(e).forEach((t=>{null==s||s.editAppProxy(e[t])})),null==s||s.exec()}this.props.onFinish().then((()=>{this.__unmount||setTimeout((()=>{this.setState({isLoading:!1},(()=>{this.props.onToggle()}))}),3e3)}),(()=>{this.__unmount||setTimeout((()=>{this.setState({isLoading:!1},(()=>{this.props.onToggle()}))}),3e3)}))}}))})))).catch((e=>{console.error("Creating proxy failed: ",e),this.setState({isLoading:!1,isError:!0},(()=>{setTimeout((()=>{this.setState({isError:!1})}),5500)}))}))},this.getTostStyle=()=>{var e,t,s,o,n,a,r,l,p,c,d;return i.css`
      & {
        height:  ${i.polished.rem(40)};
        top: ${i.polished.rem(60)};
      }
      .jimu-toast-info {
        background: ${null===(o=null===(s=null===(t=null===(e=this.props)||void 0===e?void 0:e.theme)||void 0===t?void 0:t.colors)||void 0===s?void 0:s.palette)||void 0===o?void 0:o.secondary[300]};
        line-height: ${i.polished.rem(40)};
        color: ${null===(l=null===(r=null===(a=null===(n=this.props)||void 0===n?void 0:n.theme)||void 0===a?void 0:a.colors)||void 0===r?void 0:r.palette)||void 0===l?void 0:l.dark[800]};
        font-weight: 300;
        padding: 0 ${i.polished.rem(16)};
        box-shadow: 0 0 ${i.polished.rem(10)} ${i.polished.rem(2)} ${i.polished.rgba(null===(d=null===(c=null===(p=this.props)||void 0===p?void 0:p.theme)||void 0===c?void 0:c.colors)||void 0===d?void 0:d.white,.2)};
      }
    `},this.state={getAppConfigAction:null,isLoading:!1,isError:!1,proxyConfigs:null,needProxyDataSources:null}}componentDidMount(){this.__unmount=!1,i.moduleLoader.loadModule("jimu-for-builder").then((e=>{this.__unmount||this.setState({getAppConfigAction:e.getAppConfigAction})})),this.setState({isLoading:!0}),this.getProxyConfigFromAppProxyJsons().then((e=>{this.__unmount||this.setState({proxyConfigs:e.proxyConfigs,needProxyDataSources:e.needProxyDataSources,isLoading:!1})}),(e=>{this.__unmount||this.setState({isLoading:!1}),console.error("Getting proxy config error",e)}))}componentDidUpdate(e){(!e.isOpen&&this.props.isOpen||e.appProxies!==this.props.appProxies)&&(this.setState({isLoading:!0}),this.getProxyConfigFromAppProxyJsons().then((e=>{this.__unmount||this.setState({proxyConfigs:e.proxyConfigs,needProxyDataSources:e.needProxyDataSources,isLoading:!1})}),(e=>{this.__unmount||this.setState({isLoading:!1}),console.error("Getting proxy config error",e)})))}componentWillUnmount(){this.__unmount=!0}render(){const e=this.state.proxyConfigs,t=this.state.needProxyDataSources;return(0,i.jsx)(x.Modal,{isOpen:this.props.isOpen,centered:!0,className:(0,i.classNames)({[this.props.className]:!!this.props.className}),returnfocusafterclose:"true",contentClassName:"proxy-setting-container",backdrop:"static"},(0,i.jsx)(x.ModalHeader,{className:"d-flex justify-content-between header px-30",toggle:this.props.onToggle},(0,i.jsx)("div",{className:"flex-grow-1 text-truncate"},this.props.intl.formatMessage({id:"subscriberContents",defaultMessage:x.defaultMessages.subscriberContents}))),(0,i.jsx)(x.ModalBody,{className:"d-flex px-30"},(0,i.jsx)(Fe,{onChange:this.onProxyConfigChange,proxyConfigs:e,needProxyDataSources:t})),(0,i.jsx)(x.ModalFooter,{className:"px-30"},(0,i.jsx)(x.Button,{className:"mr-2",type:"primary",onClick:this.onFinish},this.props.intl.formatMessage({id:"publish",defaultMessage:i.defaultMessages.publish})),(0,i.jsx)(x.Button,{type:"default",onClick:this.props.onCancel},this.props.intl.formatMessage({id:"cancel",defaultMessage:i.defaultMessages.cancel}))),this.state.isLoading&&(0,i.jsx)(x.Loading,{type:i.LoadingType.Secondary}),this.state.isError&&(0,i.jsx)(x.Toast,{open:this.state.isError,type:x.ToastType.Info,css:this.getTostStyle(),text:this.props.intl.formatMessage({id:"creatProxyToPublishAppError",defaultMessage:x.defaultMessages.creatProxyToPublishAppError})}))}}const qe=(0,i.injectIntl)((0,w.withStyles)((0,w.withTheme)(Je),"ProxySettingPopup")),Ge=i.ReactRedux.connect(((e,t)=>{var s,i;return{appProxies:null===(i=null===(s=null==e?void 0:e.appStateInBuilder)||void 0===s?void 0:s.appConfig)||void 0===i?void 0:i.appProxies}}))(qe);class Qe extends i.React.PureComponent{componentDidUpdate(e){this.props.pageId===e.pageId&&this.props.sizemode===e.sizemode||this.props.toggle()}getStyle(){const{theme:e}=this.props;return e&&i.css`
      background-color: ${e.colors.palette.light[300]};
      ${(0,w.popperPointer)({background:e.colors.palette.light[300],border:{color:e.colors.palette.light[600],width:"1px"}})}
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
    `}render(){const e=this.props,{pageId:t,sizemode:s,dispatch:o}=e,n=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["pageId","sizemode","dispatch"]);return(0,i.jsx)(x.Popper,Object.assign({css:this.getStyle()},n))}}const Xe=i.ReactRedux.connect((function(e){return{pageId:e.appRuntimeInfo.currentPageId,sizemode:e.browserSizeMode}}))(Qe),Ye=[{name:"flip",enabled:!0},{name:"preventOverflow",enabled:!0,options:{boundariesElement:"viewport",padding:10}}];class Ke extends i.React.PureComponent{constructor(e){super(e),this.togglePopper=()=>{this.state.open&&this.props.onClose&&this.props.onClose(),this.setState({open:!this.state.open})},this.state={widgetInfoList:null,open:!0,generation:0}}componentDidMount(){this.loadWidgetInfos()}loadWidgetInfos(){i.WidgetManager.getInstance().getWidgetListInfo().then((e=>{const t=e.filter((e=>this.props.isItemAccepted(e,this.props.isPlaceholder)));this.setState({generation:this.state.generation+1,widgetInfoList:t})}))}createWidgetCard(e){var t,s;return(0,i.jsx)(x.Button,{className:"d-flex align-items-start justify-content-center widget-card",key:e.name,onClick:()=>this.props.onItemSelect(e),"aria-label":e.label},(0,i.jsx)("div",{className:"d-flex flex-column w-100 h-100 widget-card--content pt-2"},(0,i.jsx)("div",{className:"d-flex justify-content-center"},(0,i.jsx)("div",{className:"widget-card-image mb-1"},(0,i.jsx)(x.Icon,{className:"w-100",autoFlip:null===(s=null===(t=e.manifest)||void 0===t?void 0:t.properties)||void 0===s?void 0:s.flipIcon,icon:"string"==typeof e.icon?e.icon:e.icon&&e.icon.svg,color:this.props.builderTheme.colors.dark}))),(0,i.jsx)("div",{className:"flex-grow-1 d-flex align-items-center"},(0,i.jsx)("div",{className:"widget-card-name w-100 text-center text-capitalize text-truncate",css:i.css`
                line-height: 1rem;
                max-height: 2.2rem;
                white-space: normal;
              `,title:e.label},e.label))))}formatMessage(e){return this.props.intl.formatMessage({id:e,defaultMessage:x.defaultMessages[e]})}getStyle(){const{builderTheme:e}=this.props;return i.css`
      background-color: ${e.colors.palette.light[300]};

      .content {
        max-height: 350px;
        height: auto;
        width: 380px;
        overflow-x: hidden;
        padding: 10px;
      }

      .card-grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-row-gap: 0.5rem;
        grid-column-gap: 0.5rem;
      }

      .widget-card {
        height: 80px;
        padding: 0;
        border: none;

        .widget-card--content {
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
          color: ${e.colors.palette.dark[800]};
          padding: 0 10px;
          font-size: 13px;
        }
      }

      .widget-type-label {
        color: ${e.colors.palette.dark[800]};
        font-size: 14px;
        margin: 0 4px 4px;
      }
    `}render(){if(!this.state.open)return null;const{widgetInfoList:e}=this.state,t=[],s=[];return e&&e.length>0&&e.forEach((e=>{e.manifest.widgetType===i.WidgetType.Layout?s.push(e):t.push(e)})),(0,i.jsx)(Xe,{theme:this.props.builderTheme,placement:"bottom",toggle:this.togglePopper,css:this.getStyle(),version:this.state.generation,modifiers:Ye,reference:this.props.referenceElement,open:!0,forceLatestFocusElements:!0},(0,i.jsx)("div",{className:"shadow-lg content",ref:e=>this.contentRef=e},!this.state.widgetInfoList&&(0,i.jsx)(x.Loading,null),t.length>0&&(0,i.jsx)("div",{className:"widget-type-label"},this.formatMessage("basic")),t.length>0&&(0,i.jsx)("div",{className:"w-100 h-100 card-grid m-0"},t.map((e=>this.createWidgetCard(e)))),s.length>0&&(0,i.jsx)("div",{className:"widget-type-label"},this.formatMessage("layout")),s.length>0&&(0,i.jsx)("div",{className:"w-100 h-100 row m-0"},s.map((e=>this.createWidgetCard(e))))))}}Ke.defaultProps={isPlaceholder:!1,isItemAccepted:()=>!0};const Ze=(0,i.injectIntl)(Ke);var et=c(32986);function tt(e){var t,s,o,n;const{template:a,onClick:r}=e,l=(0,i.getAppStore)().getState().appContext.locale,p=null!==(s=null===(t=a.i18nLabel)||void 0===t?void 0:t[l])&&void 0!==s?s:a.label,c=null!==(n=null===(o=a.i18nDescription)||void 0===o?void 0:o[l])&&void 0!==n?n:a.description,d=null!=a.gifThumbnail,u="templage_desc_"+a.name,h=i.React.useMemo((()=>i.css`
    transform: ${(0,i.getAppStore)().getState().appContext.isRTL&&a.flipThumbnail?"scaleX(-1);":""}  ;
  `),[a]);return(0,i.jsx)("div",{className:"block-item"},(0,i.jsx)(x.Tooltip,{title:c},(0,i.jsx)(x.Button,{"aria-label":p,"aria-describedby":u,onClick:r,className:"block-item--icon p-0"},(0,i.jsx)("img",{className:(0,i.classNames)("default-icon",{"multiple-icon":d}),css:h,src:a.thumbnail,width:a.thumbnailWidth/2,height:a.thumbnailHeight/2}),d&&(0,i.jsx)("img",{className:(0,i.classNames)("gif-icon",{"multiple-icon":d}),css:h,src:a.gifThumbnail}))),(0,i.jsx)("span",{className:"block-item-label text-center mt-2",css:i.css`max-width: ${a.thumbnailWidth/2}px`},p),(0,i.jsx)("span",{className:"sr-only",id:u},c))}function st(e){const{templates:t,onItemSelect:s}=e,o=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["templates","onItemSelect"]),n=i.React.useMemo((()=>(0,w.getBuilderThemeVariables)()),[]),a=i.React.useMemo((()=>i.css`
    width: auto;
    padding: 10px 15px;
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
  `),[n]);return(0,i.jsx)("div",Object.assign({css:a},o),t.map((e=>(0,i.jsx)(tt,{key:e.name,template:e,onClick:()=>s(e)}))))}class it extends i.React.PureComponent{constructor(){super(...arguments),this.onTabSelect=e=>{this.props.onTabSelect(e)}}render(){const{theme:e}=this.props;return(0,i.jsx)("div",{className:"w-100 h-100"},(0,i.jsx)("h3",{className:"pt-3 px-4 mb-3 text-dark-600 text-truncate",title:this.props.formatMessage("addPage")},this.props.formatMessage("addPage")),(0,i.jsx)(x.Tabs,{defaultValue:"fullScreenApp",fill:!0,type:"underline",css:i.css`
            height: calc(100% - 60px);
            .tab-content {
              height: calc(100% - 30px);
              .tab-pane {
                height: 100%;
                overflow: auto;
              }
            }
            .jimu-nav {
              padding-left: ${e&&e.sizes[4]};
              padding-right: ${e&&e.sizes[4]};
            }
            .nav-item {
              width: 50%;
            }
          `,onChange:this.onTabSelect},(0,i.jsx)(x.Tab,{id:"fullScreenApp",title:this.props.formatMessage("fullScreenApp"),className:x.FOCUSABLE_CONTAINER_CLASS},(0,i.jsx)(st,{className:(0,i.classNames)({[x.FOCUSABLE_CONTAINER_CLASS]:"fullScreenApp"===this.props.tabId}),templates:(0,et.getFullScreenPageTemplates)(),onItemSelect:this.props.onItemSelect})),(0,i.jsx)(x.Tab,{id:"scrollingPage",title:this.props.formatMessage("scrollingPage"),className:x.FOCUSABLE_CONTAINER_CLASS},(0,i.jsx)(st,{className:(0,i.classNames)({[x.FOCUSABLE_CONTAINER_CLASS]:"scrollingPage"===this.props.tabId}),templates:(0,et.getScrollingPageTemplates)(),onItemSelect:this.props.onItemSelect}))))}}const ot=[{name:"preventOverflow",options:{boundariesElement:"viewport",padding:{bottom:20}}}];class nt extends i.React.PureComponent{constructor(e){super(e),this.togglePopper=()=>{var e;this.state.open&&this.props.onClose&&this.props.onClose(),this.state.open&&(null===(e=this.props.referenceElement)||void 0===e||e.focus()),this.setState({open:!this.state.open})},this.tabSelect=e=>{this.setState({tabId:e})},this.onItemSelect=e=>{this.props.onClose(),this.props.onItemSelect(e)},this.state={open:!0,tabId:"fullScreenApp"}}render(){const{referenceElement:e,theme:t}=this.props;return(0,i.jsx)(Xe,{placement:"bottom",theme:this.props.theme,reference:e,offset:[0,10],open:!0,toggle:this.togglePopper,showArrow:!0,modifiers:ot,forceLatestFocusElements:!0},(0,i.jsx)("div",{css:i.css`
            max-height: 640px;
            height: calc(100vh - 150px);
            overflow: hidden;
          `},(0,i.jsx)(it,{theme:t,tabId:this.state.tabId,onTabSelect:this.tabSelect,formatMessage:this.props.formatMessage,onItemSelect:this.onItemSelect})))}}const at=[{name:"preventOverflow",options:{altAxis:!0,boundariesElement:"viewport",padding:{bottom:20}}},{name:"flip",options:{fallbackPlacements:["right","left"]}}];function rt(e){const{title:t,templates:s,referenceElement:o,onItemSelect:n,onClose:a}=e,r=i.React.useMemo((()=>(0,w.getBuilderThemeVariables)()),[]),l=i.React.useMemo((()=>i.css`
    min-width: 300px;
    width: auto;
    border: 1px solid ${r?r.colors.palette.light[600]:"var(--light-600)"};
    box-shadow: 0 4px 20px 4px rgba(0,0,0,0.50);

    .title {
      height: 50px;
    }

    .template-content {
      max-height: 600px;
      height: ${t?"calc(100% - 50px)":"100%"};
      overflow: auto;
    }

    .size-mode-SMALL & .template-content {
      width: 320px;
    }
  `),[r,t]),p=i.React.useCallback((()=>{null==a||a(),null==o||o.focus()}),[a,o]);return(0,i.jsx)(Xe,{placement:"bottom",theme:r,css:l,reference:o,offset:[0,10],toggle:p,open:!0,showArrow:!0,modifiers:at},t&&(0,i.jsx)("h3",{className:"text-dark-600 text-truncate title px-4 pt-3"},t),(0,i.jsx)("div",{className:"template-content"},(0,i.jsx)(st,{templates:s,onItemSelect:n})))}class lt extends i.React.PureComponent{constructor(e){super(e),this.initData=()=>{if(Array.isArray(this.props.value)&&this.props.value.length)return!1;const e=this.deepClone(this.state.option);e.ruleOptionName=this.props.intl.formatMessage({id:"option",defaultMessage:x.defaultMessages.option})+0;const t=[e];this.props.onChange(t)},this.onOptionChange=(e,t,s,i)=>{const o=this.deepClone(this.props.value);o[t].rule[e][s]=i,this.props.onChange(o,t)},this.onSelectChange=(e,t,s)=>{const i=e[0];if(!i)return;const o=this.deepClone(this.props.value),n=i.name;o[s].rule[t].jimuFieldName=n,this.props.onChange(o,s)},this.addOption=()=>{const e=Array.isArray(this.props.value),t=e?this.props.value.length:0,s=this.createOptionText(t),i=this.deepClone(this.state.option);i.ruleOptionName=s;const o=e?this.deepClone(this.props.value):[];o.push(i),this.props.onChange(o)},this.createOptionText=e=>{const t=this.props.intl.formatMessage({id:"option",defaultMessage:x.defaultMessages.option})+e;if(!this.isOptionNameRepeat(t))return t;const s=e+1;return this.createOptionText(s)},this.deleteOption=e=>{const t=this.deepClone(this.props.value);t.splice(e,1),this.props.onChange(t)},this.deleteAll=()=>{this.props.onChange([])},this.toggleOptionNameDisplay=(e,t)=>{const s=this.deepClone(this.props.value);let i=s[e].isEditOptionName;if(i=!!i,s[e].isEditOptionName=!i,t){const i=t;!this.isOptionNameRepeat(i)&&i&&(s[e].ruleOptionName=i)}this.props.onChange(s)},this.isOptionNameRepeat=e=>{if(!Array.isArray(this.props.value))return!1;let t=!1;return this.props.value.forEach((s=>{s.ruleOptionName===e&&(t=!0)})),t},this.deepClone=e=>{const t=Array.isArray(e)?[]:{};for(const s in e){const i=("object"==typeof e[s]||"function"==typeof e[s])&&null!==e[s];t[s]=i?this.deepClone(e[s]):e[s]}return t},this.setInputRef=e=>{e&&(e.select(),e.focus())},this.createRuleOptionElement=(e,t,s,o)=>{const n=t.jimuFieldName?(0,i.Immutable)([t.jimuFieldName]):(0,i.Immutable)([]);return(0,i.jsx)("div",{className:"select-down-con",key:t.jimuFieldName||s},this.props.useDataSource&&(0,i.jsx)("div",{className:"sort-field-selector"},(0,i.jsx)(ke.FieldSelector,{useDataSources:e,onChange:(e,t)=>{this.onSelectChange(e,s,o)},selectedFields:n,isSearchInputHidden:!0,isDataSourceDropDownHidden:!0,useDropdown:!0})),[{getTitle:()=>this.nls("ascending"),order:i.OrderRule.Asc,getIcon:()=>c(70502)},{getTitle:()=>this.nls("decending"),order:i.OrderRule.Desc,getIcon:()=>c(78115)}].map(((e,n,a)=>(0,i.jsx)(x.Button,{key:n,title:e.getTitle(),type:t.order===e.order?"primary":"secondary",className:"sort-button "+(this.props.singleRowItemOnly&&t.order!==e.order?"collapse":""),onClick:()=>{this.onOptionChange(s,o,"order",this.props.singleRowItemOnly?[...a,a[0]][n+1].order:e.order)}},(0,i.jsx)(x.Icon,{size:"12",icon:e.getIcon(),className:"sort-arrow-down-icon"})))))},this.createOptionNameElement=(e,t)=>{const s=e.ruleOptionName,o=this.props.intl.formatMessage({id:"optionNamePlaceholder",defaultMessage:x.defaultMessages.optionNamePlaceholder}),n=(0,i.jsx)(x.TextInput,{type:"text",defaultValue:s,onAcceptValue:e=>{this.toggleOptionNameDisplay(t,e)},ref:e=>{this.setInputRef(e)},placeholder:o});return(0,i.jsx)("div",{className:"option-name d-flex"},e.isEditOptionName?n:(0,i.jsx)("span",{title:s,onDoubleClick:()=>{this.toggleOptionNameDisplay(t)}},s),(0,i.jsx)("span",{title:this.nls("edit"),onClick:()=>{this.toggleOptionNameDisplay(t)}},(0,i.jsx)(x.Icon,{size:"12",icon:c(59006),className:"option-name-icon"})))},this.createOptionElement=(e,t,s)=>{let o;o=(0,i.jsx)("div",{className:"close-con text-right"},(0,i.jsx)("span",{title:this.nls("deleteOption"),onClick:()=>{this.deleteOption(s)}},(0,i.jsx)(x.Icon,{size:this.props.singleRowItemOnly?14:12,icon:c(93321),className:"sort-arrow-down-icon"})));const n=()=>t.rule.map(((t,i)=>this.createRuleOptionElement(e,t,i,s)));return(0,i.jsx)("div",{className:"select-con",key:s},this.props.singleRowItemOnly&&(0,i.jsx)(i.React.Fragment,null,(0,i.jsx)("div",{className:"option-name-con"},(0,i.jsx)(x.Icon,{size:14,icon:c(17720)}),n(),o))||(0,i.jsx)(i.React.Fragment,null,(0,i.jsx)("div",{className:"option-name-con"},(()=>this.createOptionNameElement(t,s))(),o),n()))},this.nls=e=>this.props.intl?this.props.intl.formatMessage({id:e,defaultMessage:x.defaultMessages[e]}):e,this.onDataSourceCreated=e=>{},this.state={option:{ruleOptionName:"",isEditOptionName:!1,rule:[{jimuFieldName:"",order:i.OrderRule.Asc}]}}}componentDidMount(){this.initData()}componentDidUpdate(e,t){var s,i,o;(null===(s=null==e?void 0:e.useDataSource)||void 0===s?void 0:s.dataSourceId)!==(null===(o=null===(i=this.props)||void 0===i?void 0:i.useDataSource)||void 0===o?void 0:o.dataSourceId)&&Promise.resolve(!0).then((()=>{this.initData()}))}render(){const{value:e}=this.props,t=this.props.intl.formatMessage({id:"invalidExpression",defaultMessage:x.defaultMessages.invalidExpression});return(0,i.jsx)("div",{className:(0,i.classNames)("sort-con",this.props.singleRowItemOnly&&"single-row-item",{[this.props.className]:!!this.props.className})},(0,i.jsx)("div",null,(0,i.jsx)("div",{className:"add-option-btn"},(0,i.jsx)(x.Icon,{size:"12",icon:c(43218),className:"add-option-icon"}),(0,i.jsx)("span",{onClick:this.addOption},this.props.intl.formatMessage({id:"addOption",defaultMessage:x.defaultMessages.addOption}))),(0,i.jsx)(i.DataSourceComponent,{useDataSource:this.props.useDataSource,onDataSourceCreated:this.onDataSourceCreated},(s=>Array.isArray(e)?(this.props.optionRenderFunction||(()=>e.map(((e,t)=>{var s;return this.createOptionElement((0,i.Immutable)([null===(s=this.props.useDataSource)||void 0===s?void 0:s.asMutable({deep:!0})]),e,t)}))))(this.props,this.createOptionElement):t)),Array.isArray(e)&&0===e.length&&(0,i.jsx)("div",{className:"no-sort-remind"},(0,i.jsx)("div",null,this.props.intl.formatMessage({id:"noOptionRemindText",defaultMessage:x.defaultMessages.noOptionRemindText})),(0,i.jsx)("div",null,this.props.intl.formatMessage({id:"pleaceAddOne",defaultMessage:x.defaultMessages.pleaceAddOne})))))}}const pt=(0,w.withStyles)((0,i.injectIntl)(lt),"SortSetting");const ct=c(95622),dt=c(98206),ut=e=>{const t=x.hooks.useTranslate(),{vertical:s=!1,onChange:o,autoFlip:n=!0,className:a,size:r="sm"}=e,l=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["vertical","onChange","autoFlip","className","size"]),p="sm"===r?12:16;return i.React.createElement(x.ButtonGroup,Object.assign({size:r,className:(0,i.classNames)("setting--direction-selector",a)},l),i.React.createElement(x.Button,{size:r,title:t("horizontal"),type:"default",icon:!0,active:!s,onClick:()=>o(!1)},i.React.createElement(x.Icon,{size:p,icon:ct,autoFlip:n})),i.React.createElement(x.Button,{size:r,title:t("vertical"),type:"default",icon:!0,active:s,onClick:()=>o(!0)},i.React.createElement(x.Icon,{size:p,icon:dt})))};var ht;!function(e){e.Auto="AUTO",e.Custom="CUSTOM"}(ht||(ht={}));const gt=c(95327);class mt extends i.React.PureComponent{constructor(e){super(e),this.toggleDropdown=()=>{this.setState((e=>({dropdownOpen:!e.dropdownOpen})))},this.state={dropdownOpen:!1},this._onAutoSelected=this.onSelect.bind(this,ht.Auto),this._onCustomSelected=this.onSelect.bind(this,ht.Custom)}onSelect(e){this.props.mode!==e&&this.props.onChange(e)}getStyle(){return i.css`
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
        `,disabled:!0,value:this.props.intl.formatMessage({id:"auto"})})}render(){const{mode:e,intl:t}=this.props,s=t.formatMessage({id:"auto"}),o=t.formatMessage({id:"custom"});return(0,i.jsx)("div",{className:"d-flex",css:this.getStyle()},(0,i.jsx)(x.Dropdown,{className:"auto-dropdown",isOpen:this.state.dropdownOpen,toggle:this.toggleDropdown},(0,i.jsx)(x.DropdownButton,{icon:!0}),(0,i.jsx)(x.DropdownMenu,null,(0,i.jsx)(x.DropdownItem,{onClick:this._onAutoSelected},(0,i.jsx)("span",{css:i.css`width: 1rem;`},e===ht.Auto&&(0,i.jsx)(x.Icon,{icon:gt,size:12})),s),(0,i.jsx)(x.DropdownItem,{onClick:this._onCustomSelected},(0,i.jsx)("span",{css:i.css`width: 1rem;`},e===ht.Custom&&(0,i.jsx)(x.Icon,{icon:gt,size:12})),o))),e===ht.Auto&&this.autoInput(),e===ht.Custom&&this.props.children)}}const ft=(0,i.injectIntl)(mt),vt=e=>{const{title:t,children:s,selected:o,onClick:n}=e,a=(()=>{var e,t,s;const o=i.React.useContext(w.ThemeContext),n=null===(e=null==o?void 0:o.colors)||void 0===e?void 0:e.palette.primary[600],a=null===(t=null==o?void 0:o.colors)||void 0===t?void 0:t.palette.light[200],r=null===(s=null==o?void 0:o.colors)||void 0===s?void 0:s.black;return i.React.useMemo((()=>i.css`
      width: 100%;
      height:  ${i.polished.rem(50)};
      padding: ${i.polished.rem(8)}  ${i.polished.rem(12)};
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${r};
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
  `),[n,a,r])})();return(0,i.jsx)("div",{css:a,title:t,className:(0,i.classNames)("quick-style-item",{selected:o}),onClick:n},(0,i.jsx)("div",{className:"overlay"}),s)};const yt=[{name:"preventOverflow",options:{altAxis:!0}},{name:"flip",options:{fallbackPlacements:["bottom-end","top-end"]}}],wt=e=>{const{open:t,reference:s,onClose:o,placement:n="right-start",children:a}=e,r=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["open","reference","onClose","placement","children"]),l=(()=>{var e,t,s,o;const n=(0,w.getBuilderThemeVariables)(),a=null===(e=null==n?void 0:n.colors)||void 0===e?void 0:e.palette.dark[600],r=null===(t=null==n?void 0:n.colors)||void 0===t?void 0:t.palette.dark[800],l=null===(s=null==n?void 0:n.colors)||void 0===s?void 0:s.palette.light[300],p=null===(o=null==n?void 0:n.colors)||void 0===o?void 0:o.palette.light[600];return i.React.useMemo((()=>i.css`
      background-color: ${l};
      color: ${a};
      border: 1px solid ${p};
      > .popper-box {
        > .panel-header {
          color: ${a};
          .action-btn {
            color: ${a};
            &:hover {
              color: ${r};
            }
          }
        }
      }
    `),[a,r,l,p])})(),p=x.hooks.useTranslate(x.defaultMessages);return(0,i.jsx)(x.Popper,Object.assign({css:l,open:t,className:"shadow-2",reference:s,modifiers:yt,placement:n},r),(0,i.jsx)(x.PanelHeader,{className:"px-3 py-2",title:p("quickStyle"),onClose:o}),a)};function xt(e){var t,s;const o=(0,i.getAppStore)().getState().appStateInBuilder,n=o.appRuntimeInfo.currentPageId,a=o.appRuntimeInfo.currentDialogId;let r=o.appRuntimeInfo.dialogInfos||(0,i.Immutable)({});const l=o.appConfig.dialogs,p=o.appConfig.pages,c={canClose:!0,checked:!0,isClosed:!0};return a&&((null===(t=l[a])||void 0===t?void 0:t.isSplash)&&(r=r.set(a,c)),p[n].autoOpenDialogId&&(r=r.set(n+"-"+p[n].autoOpenDialogId,c)),e&&Object.keys(p).forEach((e=>{p[e].autoOpenDialogId===a&&(r=r.set(e+"-"+a,c))}))),(null===(s=l[a])||void 0===s?void 0:s.isSplash)||Object.keys(l).some((e=>{l[e].isSplash&&(r=r.set(e,c))})),e&&r&&Object.keys(r).forEach((t=>{t!==e&&t!==n+"-"+e||(r=r.set(t,{canClose:bt(e),checked:!1,isClosed:!1}))})),r}function bt(e){const t=(0,i.getAppStore)().getState().appStateInBuilder.appConfig.dialogs[e];return!t.interactionType||!t.confirmBeforeClose}function St(e){const t=(0,i.getAppStore)().getState().appStateInBuilder,s=t.appRuntimeInfo.currentPageId,o=t.appRuntimeInfo.currentDialogId;if(y.builderAppSync.publishChangeSelectionToApp(null),o){const e=xt();y.builderAppSync.publishDialogInfosChangeToApp(e),y.builderAppSync.publishDialogChangeToApp(null)}s!==e&&y.builderAppSync.publishPageChangeToApp(e),y.builderAppSync.publichActivePagePartChangeToApp(i.PagePart.Body)}function kt(e){if(y.builderAppSync.publishChangeSelectionToApp(null),e!==(0,i.getAppStore)().getState().appStateInBuilder.appRuntimeInfo.currentDialogId){y.builderAppSync.publishDialogChangeToApp(e);const t=xt(e);y.builderAppSync.publishDialogInfosChangeToApp(t),y.builderAppSync.publichActivePagePartChangeToApp(null)}}(0,w.registerStyles)("jimu-ui/advanced/setting-components/",e)})(),d})())}}}));