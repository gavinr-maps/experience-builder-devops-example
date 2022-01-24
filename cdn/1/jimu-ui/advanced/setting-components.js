System.register(["jimu-core","jimu-for-builder","jimu-for-builder/templates","jimu-layouts/layout-runtime","jimu-theme","jimu-ui","jimu-ui/advanced/data-source-selector","jimu-ui/advanced/expression-builder"],(function(e,t){var s={},o={},i={},n={},a={},r={},l={},p={};return{setters:[function(e){s.CONSTANTS=e.CONSTANTS,s.DataSourceComponent=e.DataSourceComponent,s.DataSourceManager=e.DataSourceManager,s.DataSourceTypes=e.DataSourceTypes,s.DialogMode=e.DialogMode,s.ExpressionPartType=e.ExpressionPartType,s.Immutable=e.Immutable,s.LayoutItemType=e.LayoutItemType,s.LayoutType=e.LayoutType,s.LinkType=e.LinkType,s.LoadingType=e.LoadingType,s.MultipleDataSourceComponent=e.MultipleDataSourceComponent,s.OrderRule=e.OrderRule,s.PagePart=e.PagePart,s.PageType=e.PageType,s.React=e.React,s.ReactRedux=e.ReactRedux,s.ReactResizeDetector=e.ReactResizeDetector,s.ServiceManager=e.ServiceManager,s.SessionManager=e.SessionManager,s.WidgetManager=e.WidgetManager,s.WidgetType=e.WidgetType,s.appConfigUtils=e.appConfigUtils,s.cancelablePromise=e.cancelablePromise,s.classNames=e.classNames,s.css=e.css,s.dataSourceUtils=e.dataSourceUtils,s.defaultMessages=e.defaultMessages,s.esri=e.esri,s.getAppStore=e.getAppStore,s.injectIntl=e.injectIntl,s.jsx=e.jsx,s.lodash=e.lodash,s.moduleLoader=e.moduleLoader,s.polished=e.polished,s.portalUrlUtils=e.portalUrlUtils,s.requestUtils=e.requestUtils,s.urlUtils=e.urlUtils},function(e){o.builderAppSync=e.builderAppSync},function(e){i.getFullScreenPageTemplates=e.getFullScreenPageTemplates,i.getScrollingPageTemplates=e.getScrollingPageTemplates},function(e){n.searchUtils=e.searchUtils,n.utils=e.utils},function(e){a.getBuilderThemeVariables=e.getBuilderThemeVariables,a.popperPointer=e.popperPointer,a.registerStyles=e.registerStyles,a.useTheme=e.useTheme,a.withStyles=e.withStyles,a.withTheme=e.withTheme},function(e){r.AdvancedButtonGroup=e.AdvancedButtonGroup,r.Button=e.Button,r.Card=e.Card,r.CardBody=e.CardBody,r.CardImg=e.CardImg,r.Collapse=e.Collapse,r.Container=e.Container,r.Dropdown=e.Dropdown,r.DropdownButton=e.DropdownButton,r.DropdownItem=e.DropdownItem,r.DropdownMenu=e.DropdownMenu,r.DropdownToggle=e.DropdownToggle,r.FOCUSABLE_CONTAINER_CLASS=e.FOCUSABLE_CONTAINER_CLASS,r.FormGroup=e.FormGroup,r.Icon=e.Icon,r.Input=e.Input,r.Label=e.Label,r.Link=e.Link,r.Loading=e.Loading,r.Modal=e.Modal,r.ModalBody=e.ModalBody,r.ModalFooter=e.ModalFooter,r.ModalHeader=e.ModalHeader,r.NumericInput=e.NumericInput,r.PanelHeader=e.PanelHeader,r.Popper=e.Popper,r.Radio=e.Radio,r.Row=e.Row,r.Select=e.Select,r.Switch=e.Switch,r.Tab=e.Tab,r.Tabs=e.Tabs,r.TextInput=e.TextInput,r.Toast=e.Toast,r.ToastType=e.ToastType,r.Tooltip=e.Tooltip,r.defaultMessages=e.defaultMessages,r.hooks=e.hooks,r.isOutBoundary=e.isOutBoundary,r.utils=e.utils},function(e){l.AllDataSourceTypes=e.AllDataSourceTypes,l.FieldSelector=e.FieldSelector,l.dataComponentsUtils=e.dataComponentsUtils},function(e){p.ExpressionInput=e.ExpressionInput,p.ExpressionInputType=e.ExpressionInputType}],execute:function(){e((()=>{var e={18371:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.036 12.157l8.01-8.01a.5.5 0 11.707.707l-8.01 8.01a1 1 0 01-1.415 0L1.146 8.682a.5.5 0 11.708-.707l4.182 4.182z" fill="#000"></path></svg>'},24786:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.373 8l2.07-2.071.83.828L2.2 8.828a3.515 3.515 0 004.97 4.971l2.072-2.071.828.828L8 14.627A4.686 4.686 0 111.373 8zM13.799 7.172l-2.071 2.07.828.83L14.627 8A4.686 4.686 0 108 1.373l-2.071 2.07.828.83L8.828 2.2a3.515 3.515 0 014.971 4.97z" fill="#000"></path><path d="M5.515 9.657a.586.586 0 00.828.828l4.142-4.142a.586.586 0 00-.828-.828L5.515 9.657z" fill="#000"></path></svg>'},59788:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.146 4.653a.485.485 0 01.708 0L8 10.24l5.146-5.587a.485.485 0 01.708 0 .538.538 0 010 .738l-5.5 5.956a.485.485 0 01-.708 0l-5.5-5.956a.538.538 0 010-.738z" fill="#000"></path></svg>'},60843:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.646 10.354a.5.5 0 00.708-.708L2.707 8h10.586l-1.647 1.646a.5.5 0 00.708.708l2.5-2.5a.5.5 0 000-.708l-2.5-2.5a.5.5 0 00-.708.708L13.293 7H2.707l1.647-1.646a.5.5 0 10-.708-.708l-2.5 2.5a.5.5 0 000 .708l2.5 2.5z" fill="#000"></path></svg>'},3273:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.653 13.854a.485.485 0 010-.708L10.24 8 4.653 2.854a.485.485 0 010-.708.538.538 0 01.738 0l5.956 5.5a.485.485 0 010 .708l-5.956 5.5a.538.538 0 01-.738 0z" fill="#000"></path></svg>'},96009:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.854 11.347a.486.486 0 01-.708 0L8 5.76l-5.146 5.587a.485.485 0 01-.708 0 .538.538 0 010-.738l5.5-5.956a.485.485 0 01.708 0l5.5 5.956a.538.538 0 010 .738z" fill="#000"></path></svg>'},18656:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.354 12.354a.5.5 0 00-.708-.708L8 13.293V2.707l1.646 1.647a.5.5 0 00.708-.708l-2.5-2.5a.5.5 0 00-.708 0l-2.5 2.5a.5.5 0 10.708.708L7 2.707v10.586l-1.646-1.647a.5.5 0 00-.708.708l2.5 2.5a.5.5 0 00.708 0l2.5-2.5z" fill="#000"></path></svg>'},55339:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.745 8l6.1 6.1a.527.527 0 11-.745.746L8 8.746l-6.1 6.1a.527.527 0 11-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 01.746-.746l6.1 6.1 6.1-6.1a.527.527 0 01.746.746L8.746 8z" fill="#000"></path></svg>'},59216:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.226 1.312c-.403-.404-1.044-.417-1.431-.03L2.49 8.587l-.48 2.674a.637.637 0 00.73.73l2.673-.48 7.305-7.306c.387-.387.374-1.028-.03-1.431l-1.462-1.462zm-8.113 9.575l.32-1.781 4.991-4.992 1.462 1.462-4.992 4.991-1.781.32zm7.473-6.012l1.402-1.4-1.462-1.463-1.401 1.402 1.461 1.461z" fill="#000"></path><path d="M1.5 14a.5.5 0 000 1h13a.5.5 0 000-1h-13z" fill="#000"></path></svg>'},34750:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 0a.5.5 0 00-.5.5V7H.5a.5.5 0 000 1H7v6.5a.5.5 0 001 0V8h6.5a.5.5 0 000-1H8V.5a.5.5 0 00-.5-.5z" fill="#000"></path></svg>'},65085:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M4.103 7.873L16 19.25 27.897 7.873c.939-.898 2.46-.898 3.399 0s.939 2.353 0 3.251L17.7 24.127a2.481 2.481 0 01-3.399 0L.705 11.124c-.939-.898-.939-2.353 0-3.251s2.46-.898 3.399 0z"></path></svg>'},95327:e=>{e.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M.304 6.016a1.028 1.028 0 011.466 0l4.398 4.451 8.062-8.16a1.028 1.028 0 011.466 0c.405.41.405 1.074 0 1.484l-8.795 8.902c-.405.41-1.062.41-1.466 0L.304 7.5a1.058 1.058 0 010-1.484z" fill="#000"></path><path d="M0 0h16v16H0z"></path></g></svg>'},17720:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 32"><path d="M2.333 4a3 3 0 116 0 3 3 0 01-6 0zm0 12a3 3 0 116 0 3 3 0 01-6 0zm0 12a3 3 0 116 0 3 3 0 01-6 0z"></path></svg>'},78115:e=>{e.exports='<svg viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.5 13a.5.5 0 010-1h4a.5.5 0 010 1h-4zM0 8.5a.5.5 0 00.5.5h7a.5.5 0 000-1h-7a.5.5 0 00-.5.5zM.5 5a.5.5 0 010-1h11a.5.5 0 010 1H.5zM.5 1a.5.5 0 110-1h15a.5.5 0 010 1H.5z" fill="#000"></path></svg>'},70502:e=>{e.exports='<svg viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.5 0a.5.5 0 000 1h4a.5.5 0 000-1h-4zM0 4.5A.5.5 0 01.5 4h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zM.5 8a.5.5 0 000 1h11a.5.5 0 000-1H.5zM.5 12a.5.5 0 000 1h15a.5.5 0 000-1H.5z" fill="#000"></path></svg>'},48891:e=>{"use strict";e.exports=s},23137:e=>{"use strict";e.exports=o},96262:e=>{"use strict";e.exports=i},74758:e=>{"use strict";e.exports=n},34796:e=>{"use strict";e.exports=a},30726:e=>{"use strict";e.exports=r},338:e=>{"use strict";e.exports=l},39342:e=>{"use strict";e.exports=p}},t={};function c(s){var o=t[s];if(void 0!==o)return o.exports;var i=t[s]={exports:{}};return e[s](i,i.exports,c),i.exports}c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},c.d=(e,t)=>{for(var s in t)c.o(t,s)&&!c.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var d={};return(()=>{"use strict";c.r(d),c.d(d,{DirectionSelector:()=>Lt,JimuLayerViewSelector:()=>J,JimuMapViewSelector:()=>W,LinkSelector:()=>Ne,LinkSelectorContent:()=>ve,LinkSelectorSidePopper:()=>ke,LinkSetting:()=>ye,LinkSettingPopup:()=>Pe,MapWidgetSelector:()=>z,NavQuickStyleItem:()=>$t,OpenTypes:()=>X,PageTemplatePopper:()=>ut,ProxySetting:()=>Qe,ProxySettingPopup:()=>tt,QuickStylePopper:()=>Ut,RadioGroup:()=>K,SettingCollapse:()=>A,SettingLayout:()=>t,SettingRow:()=>O,SettingSection:()=>S,SidePopper:()=>xe,SizeMode:()=>Rt,SizeModeSelector:()=>Dt,SortSetting:()=>Ct,StylePicker:()=>G,TemplateSelector:()=>gt,UnControlledSettingCollapse:()=>E,WidgetListPopper:()=>at,WidgetSelector:()=>B,_JimuMapViewSelector:()=>F,_LinkSelector:()=>Oe,_LinkSelectorContent:()=>fe,_LinkSelectorSidePopper:()=>Se,_MapWidgetSelector:()=>U,_SidePopper:()=>we,changeCurrentDialog:()=>_t,changeCurrentPage:()=>Ft,handelDialogInfos:()=>zt,proxySettingUtils:()=>s});var e={};c.r(e),c.d(e,{JimuLayerViewSelector:()=>v,LinkSelectorContent:()=>u,ProxySetting:()=>h,ProxySettingPopup:()=>g,RadioGroup:()=>m,SettingCollapse:()=>p,SettingRow:()=>l,SettingSection:()=>r,SidePopper:()=>f,SortSetting:()=>n,StylePicker:()=>a,WidgetSelector:()=>i});var t={};c.r(t),c.d(t,{SettingCollapse:()=>A,SettingRow:()=>O,SettingSection:()=>S,UnControlledSettingCollapse:()=>E});var s={};c.r(s),c.d(s,{deleteProxies:()=>Be,getCreateProxyUrl:()=>We,getDeleteProxyUrl:()=>Fe,getNeedProxyDataSources:()=>Le,getProxyJsonFromSourceUrl:()=>Ae,getProxyRootUrl:()=>ze,isRegisteredApp:()=>De,isSameProxy:()=>Ee,needToConfigProxy:()=>$e,traverseToGetNeedProxyDataSources:()=>Re});var o=c(48891);const i=e=>{const t=e.theme;return o.css`
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
            }
            .option-name-icon {
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
  `},r=e=>{const t=e.theme;return o.css`
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
  `},l=e=>{const t=e.theme,s=e.flow,i=e.action;return o.css`
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
  `},p=e=>{var t,s,i,n,a,r,l,p;const c=null==e?void 0:e.isOpen,d=null!==(t=null==e?void 0:e.type)&&void 0!==t?t:"default",u=e.theme,h=null===(n=null===(i=null===(s=null==u?void 0:u.colors)||void 0===s?void 0:s.palette)||void 0===i?void 0:i.light)||void 0===n?void 0:n[500],g=null===(l=null===(r=null===(a=null==u?void 0:u.colors)||void 0===a?void 0:a.palette)||void 0===r?void 0:r.light)||void 0===l?void 0:l[800],m=null===(p=null==u?void 0:u.colors)||void 0===p?void 0:p.primary;return"primary"!==d?o.css`
    .dividing-line {
      background-color: ${g};
    }
    `:o.css`
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
    `};function u(e){const t=e.theme,s=t&&t.colors&&t.colors.palette&&t.colors.palette.light[500]||"#ccc",i=t&&t.colors&&t.colors.primary||"blue",n=o.polished.rgba(s,.5);return window.jimuConfig.isInBuilder?o.css`
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
  `}function h(e){const t=e.theme;return o.css`
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
  `}function g(e){const t=e.theme;return o.css`
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
  `};function f(e){const t=e.theme;return o.css`
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
  `}const v=e=>{const t=e.theme;return o.css`
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
  `};var y=c(23137),b=c(34796),w=c(30726);class x extends o.React.PureComponent{render(){const e=this.props,{className:t,style:s,title:i,role:n,children:a}=e,r=function(e,t){var s={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(s[o[i]]=e[o[i]])}return s}(e,["className","style","title","role","children"]);return o.React.createElement(w.Container,{className:(0,o.classNames)(t,"jimu-widget-setting--section"),style:s,role:n,"aria-label":r["aria-label"]},i&&o.React.createElement(w.Row,{className:"jimu-widget-setting--section-header"},o.React.createElement("h6",{className:"w-100 text-truncate setting-text-level-1"},this.props.title)),a)}}const S=(0,b.withStyles)(x,"SettingSection");var k=c(3273),P=c.n(k);const C=e=>{const{className:t}=e,s=function(e,t){var s={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(s[o[i]]=e[o[i]])}return s}(e,["className"]),i=(0,o.classNames)("jimu-icon-component",t);return o.React.createElement(w.Icon,Object.assign({className:i,icon:P()},s))};const I=e=>o.React.createElement("div",{className:"jimu-widget-setting--row-header mb-3"},e.children);class j extends o.React.PureComponent{constructor(){super(...arguments),this.onActionClick=e=>{"drilldown"===e&&this.props&&this.props.onDrillDown&&this.props.onDrillDown()}}render(){const e=this.props,{action:t,flow:s,truncateLabel:i,label:n,role:a,indented:r,className:l,level:p=3}=e,c=function(e,t){var s={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(s[o[i]]=e[o[i]])}return s}(e,["action","flow","truncateLabel","label","role","indented","className","level"]),d="string"==typeof n?n:"",u=(0,o.classNames)(l,"jimu-widget-setting--row","form-group","align-items-center",{"form-inline":"wrap"!==s,"pl-4":r}),h=t?"span":"label",g=n&&o.React.createElement(h,{title:d,className:(0,o.classNames)(`jimu-widget-setting--row-label justify-content-start flex-grow-1 text-break setting-text-level-${p}`,{"w-100 mr-0":"wrap"===s,"text-truncate":i})},n);return o.React.createElement(w.Row,{className:u,role:a,"aria-label":c["aria-label"]},"wrap"===s&&t?o.React.createElement(I,null,"drilldown"===t?o.React.createElement(w.Button,{size:"sm",type:"tertiary",onClick:()=>this.onActionClick("drilldown")},g,o.React.createElement(C,{className:"right-icon"})):void 0):g,this.props.children)}}const O=(0,b.withStyles)(j,"SettingRow");var N=c(96009),M=c.n(N),T=c(59788),L=c.n(T),R=function(e,t){var s={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(s[o[i]]=e[o[i]])}return s};const A=(0,b.withStyles)((e=>{const{type:t="default",className:s,leftIcon:i,label:n,bottomLine:a=!1,isOpen:r,onRequestOpen:l,onRequestClose:p,children:c,rightIcon:d=L(),rightActiveIcon:u=M(),level:h=0}=e,g=R(e,["type","className","leftIcon","label","bottomLine","isOpen","onRequestOpen","onRequestClose","children","rightIcon","rightActiveIcon","level"]),m=r?u:d;return o.React.createElement("div",{className:(0,o.classNames)("setting-collapse w-100",s)},o.React.createElement("div",{className:"handle w-100 d-flex justify-content-between"},o.React.createElement("div",{title:n,className:"title py-1 d-flex align-items-center flex-grow-1",style:{maxWidth:"85%"}},i&&o.React.createElement(w.Icon,{className:"mr-2",icon:i}),o.React.createElement("div",{className:`text-truncate setting-text-level-${h}`,style:{maxWidth:"80%"}}," ",n)),o.React.createElement(w.Button,{size:"sm",type:"tertiary",icon:!0,onClick:()=>{r?null==p||p():null==l||l()}},o.React.createElement(w.Icon,{icon:m}))),o.React.createElement(w.Collapse,Object.assign({},g,{isOpen:r}),r&&o.React.createElement(o.React.Fragment,null,c,a&&o.React.createElement("div",{className:"dividing-line mt-3",style:{width:"100%",height:"1px"}}))))}),"SettingCollapse"),E=e=>{const{defaultIsOpen:t=!1,label:s}=e,i=R(e,["defaultIsOpen","label"]),[n,a]=o.React.useState(t);return o.React.createElement(A,Object.assign({label:s,isOpen:n},i,{onRequestOpen:()=>a(!0),onRequestClose:()=>a(!1)}))};var D=function(e,t,s,o){return new(s||(s=Promise))((function(i,n){function a(e){try{l(o.next(e))}catch(e){n(e)}}function r(e){try{l(o.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(a,r)}l((o=o.apply(e,t||[])).next())}))};class $ extends o.React.PureComponent{constructor(e){super(e),this.onSelectWidget=e=>{this.setState({currentWidget:e})},this.getListItemJSX=e=>(0,o.jsx)(w.Card,{className:(0,o.classNames)("widget-card-item",{"widget-card-selected":this.state.currentWidget&&0===this.state.currentWidget.indexOf(e.uri)}),key:e.title,onClick:()=>this.onSelectWidget(e.uri)},(0,o.jsx)("div",{className:"widget-card-image bg-light-300"},(0,o.jsx)("div",null,(0,o.jsx)(w.CardImg,{top:!0,width:"100%",src:e.image.src,alt:e.image.alt}))),(0,o.jsx)(w.CardBody,{className:"widget-card-content"},(0,o.jsx)("span",{className:"text-capitalize",title:e.title},e.title))),this.state={currentWidget:null,listInfo:[]}}componentDidMount(){this.getListInfo().then((e=>{this.setState({listInfo:e.listInfo})}))}getListInfo(){return D(this,void 0,void 0,(function*(){return yield fetch(`${o.urlUtils.getAbsoluteRootUrl()}widgets/widgets-info.json`).then((e=>D(this,void 0,void 0,(function*(){return yield e.json()})))).then((e=>({listInfo:e.map((e=>{const t={title:"",uri:"",image:{src:""}};return t.title=e.label,t.uri=e.path,t.image.src="../"+e.icon,t}))})))}))}render(){return(0,o.jsx)("div",{className:(0,o.classNames)("w-100 h-100",{[this.props.className]:!!this.props.className})},(0,o.jsx)("div",{className:"component-choose-widget-popup"},(0,o.jsx)(w.Modal,{isOpen:!0,className:"component-choose-widget-popup-modal"},(0,o.jsx)(w.ModalHeader,{className:"component-choose-widget-clear-border component-choose-widget-modal-header"},this.props.title,(0,o.jsx)("span",{className:"choose-widget-popup-close",onClick:this.props.onCancel})),(0,o.jsx)(w.ModalBody,{className:"component-choose-widget-clear-border component-choose-widget-modal-body"},this.state.listInfo.length>0?this.state.listInfo.map((e=>this.getListItemJSX(e))):"Loading..."),(0,o.jsx)(w.ModalFooter,{className:"component-choose-widget-clear-border component-choose-widget-modal-footer"},(0,o.jsx)(w.Button,{onClick:()=>this.props.onOK(this.state.currentWidget)},"OK"),(0,o.jsx)(w.Button,{onClick:this.props.onCancel},"Cancel")))))}}const B=(0,b.withStyles)($,"WidgetSelector");class U extends o.React.PureComponent{constructor(){super(...arguments),this.noneMapWidget=(0,o.Immutable)({id:"none",label:this.props.intl.formatMessage({id:"none",defaultMessage:w.defaultMessages.none})}),this.getStyle=e=>o.css`
      .component-map-selector{
        width: 100%;
      }

    `,this.onSelect=e=>{const t=e.target.value,s=t===this.noneMapWidget.id?[]:[t];this.props.onSelect&&this.props.onSelect(s)},this.getSelectedMapWidget=()=>{if(!this.props.useMapWidgetIds)return null;const e=this.props.useMapWidgetIds[0];return this.props.mapWidgetJsons.find((t=>t.id===e))||null}}render(){const e=this.props.mapWidgetJsons,t=this.getSelectedMapWidget();return(0,o.jsx)("div",{css:this.getStyle(this.props.theme),className:"w-100"},(0,o.jsx)("div",{className:"component-map-selector"},(0,o.jsx)(w.Select,{size:"sm",value:t?t.id:this.noneMapWidget.id,onChange:this.onSelect,className:""},e.concat(this.noneMapWidget).map(((e,t)=>(0,o.jsx)("option",{key:t,value:e.id},e.label))))))}}const z=o.ReactRedux.connect(((e,t)=>{const s=window&&window.jimuConfig&&window.jimuConfig.isBuilder?e.appStateInBuilder&&e.appStateInBuilder.appConfig:e.appConfig,o=s&&s.widgets;return{mapWidgetJsons:o?Object.keys(o).filter((e=>o[e]&&o[e].manifest&&o[e].manifest.properties&&o[e].manifest.properties.canCreateMapView)).map((e=>o[e])):[]}}))((0,o.injectIntl)((0,b.withTheme)(U))),W=z,F=U;class _ extends o.React.PureComponent{getContent(){const e=[];for(let t=0;t<this.props.fromRootDsIds.length;t++)e.push(this.props.fromRootDsIds[t]);return o.React.createElement("div",{className:"w-100"},e.map(((e,t)=>{const s=o.DataSourceManager.getInstance().getDataSource(e),i=s.getLabel(),n=s.getChildDataSources();return o.React.createElement("div",{key:t},o.React.createElement("div",{className:"text-dark-600 pl-2 pr-2",style:{fontSize:"14px"}},i),n.map(((t,s)=>o.React.createElement("div",{key:s,className:"mt-1 mb-1"},o.React.createElement("div",{className:(0,o.classNames)("layerviewselector-ds-item pl-2 pr-2",{"layerviewselector-ds-item-selected":this.props.selectedDsIds&&this.props.selectedDsIds.includes(t.id)}),title:t.getLabel(),onClick:()=>{this.props.onSelect&&this.props.onSelect({rootDataSourceId:e,dataSourceId:t.id})}},t.getLabel())))))})))}render(){return this.props.fromRootDsIds&&0!==this.props.fromRootDsIds.length?o.React.createElement("div",{className:"w-100"},this.getContent()):null}}const V=c(65085);class H extends o.React.PureComponent{constructor(e){super(e),this.toggleList=e=>{this.setState({listOpen:!this.state.listOpen})},this.onResize=e=>{this.setState({width:e})},this.handleChooseLayer=e=>{if(this.props.onSelect)if(e){const t=o.DataSourceManager.getInstance().getDataSource(e.rootDataSourceId),s=o.DataSourceManager.getInstance().getDataSource(e.dataSourceId).id,i=t.getJimuChildId(s)[0];this.props.onSelect((0,o.Immutable)({jimuMapViewId:`${this.props.useMapWidgetIds[0]}-${e.rootDataSourceId}`,jimuLayerId:i,dataSourceId:e&&e.dataSourceId,rootDataSourceId:e&&e.rootDataSourceId}))}else this.props.onSelect((0,o.Immutable)({}));this.setState({listOpen:!1})},this.handleClickNone=()=>{this.props.onSelect&&this.props.onSelect((0,o.Immutable)({})),this.setState({listOpen:!1})},this.getTitle=()=>this.props.jimuLayerViewInfo&&this.props.useMapWidgetIds&&this.props.useMapWidgetIds[0]&&this.props.jimuLayerViewInfo.dataSourceId?(0,o.jsx)(o.DataSourceComponent,{useDataSource:(0,o.Immutable)({dataSourceId:this.props.jimuLayerViewInfo.dataSourceId,mainDataSourceId:this.props.jimuLayerViewInfo.dataSourceId,rootDataSourceId:this.props.jimuLayerViewInfo.rootDataSourceId})},((e,t,s)=>e.getLabel())):this.getNoneString(),this.getContent=()=>{const e=this.props.useMapWidgetIds&&this.props.useMapWidgetIds[0],t=(0,o.getAppStore)().getState().appStateInBuilder.appConfig.widgets[e];return t&&t.useDataSources&&t.useDataSources[0]?(0,o.jsx)("div",{className:"w-100 mt-1 mb-2"},(0,o.jsx)("div",{onClick:()=>{this.handleClickNone()}},(0,o.jsx)("div",{className:"layerviewselector-ds-item pl-2 pr-2"},this.getNoneString())),(0,o.jsx)("div",{className:"w-100 mt-1 mb-1"},(0,o.jsx)("div",{className:"w-100 border border-bottom-0 border-right-0 border-left-0"})),(0,o.jsx)(o.MultipleDataSourceComponent,{useDataSources:t.useDataSources},((e,t)=>{const s=(0,o.Immutable)(Object.keys(e)),i=[];return this.props.jimuLayerViewInfo&&this.props.jimuLayerViewInfo.dataSourceId&&i.push(this.props.jimuLayerViewInfo.dataSourceId),(0,o.jsx)(_,{fromRootDsIds:s,onSelect:e=>{this.handleChooseLayer(e)},selectedDsIds:(0,o.Immutable)(i)})}))):this.getEmptyContent()},this.getNoneString=()=>this.props.intl.formatMessage({id:"none",defaultMessage:"None"}),this.getEmptyContent=()=>(0,o.jsx)("div",{className:"w-100 mt-1 mb-2"},(0,o.jsx)("div",{className:"layerviewselector-ds-item pl-2 pr-2",onClick:()=>{this.handleClickNone()}},this.getNoneString())),this.state={listOpen:!1,width:0}}render(){return(0,o.jsx)("div",{className:(0,o.classNames)("w-100",{[this.props.className]:!!this.props.className})},(0,o.jsx)(w.Dropdown,{size:"sm",toggle:e=>{this.toggleList(e)},isOpen:this.state.listOpen,className:"w-100"},(0,o.jsx)(w.DropdownToggle,{size:"sm",type:"tertiary",className:(0,o.classNames)("h-100 p-0 m-0 d-flex flex-column align-items-center toollist-item","justify-content-between toollist-item-click layerviewselector-input")},(0,o.jsx)("div",{className:"w-100 d-flex justify-content-between align-items-center"},(0,o.jsx)("div",{className:"layerviewselector-input-text ml-2"},this.getTitle()),(0,o.jsx)(w.Icon,{size:8,icon:V}))),(0,o.jsx)(w.DropdownMenu,{className:(0,o.classNames)("ml-0 mr-0 mb-0 mt-1 p-0",{[this.props.className]:!!this.props.className})},(0,o.jsx)("div",{className:"w-100 h-100 layerviewselector-bg"},(0,o.jsx)("div",{style:{width:`${this.state.width}px`}},this.getContent())))),(0,o.jsx)(o.ReactResizeDetector,{handleWidth:!0,onResize:this.onResize}))}}const J=(0,o.injectIntl)((0,b.withStyles)(H,"JimuLayerViewSelector"));class q extends o.React.PureComponent{constructor(e){super(e),this.onStyleClick=e=>{this.state.selectedValue!==e&&(this.setState({selectedValue:e}),this.props.onChange&&this.props.onChange(e))},this.state={selectedValue:this.props.value}}componentDidUpdate(e,t){e.value!==this.props.value&&this.setState({selectedValue:this.props.value})}render(){const e=this.props.styles;return o.React.createElement("div",{className:(0,o.classNames)("widget-setting--stylepicker w-100",{small:"small"===this.props.size})},Object.keys(e).map(((t,s)=>o.React.createElement("div",{key:t,role:"button",className:(0,o.classNames)("widget-setting--stylepicker-item",{active:t===this.state.selectedValue,"full-width":"full"===e[t].size}),style:{backgroundImage:`url(${e[t].thumbnail})`},onClick:()=>this.onStyleClick(t)}))))}}const G=(0,b.withStyles)(q,"StylePicker");class Q extends o.React.PureComponent{constructor(e){super(e),this.state={value:this.props.value},this.onRadioButtonChange=e=>{const t=e.target.value;this.state.value!==t&&(this.setState({value:t}),this.props.onChange&&this.props.onChange(t))},Q.count++,this.inputName=`setting-radiogroup-${Q.count}`}render(){const e=this.props,{options:t,className:s}=e,i=function(e,t){var s={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(s[o[i]]=e[o[i]])}return s}(e,["options","className"]);return o.React.createElement(w.FormGroup,Object.assign({},i,{onChange:this.onRadioButtonChange,className:`setting--button-group ${s}`}),t.map((e=>o.React.createElement(w.Label,{key:e.value},o.React.createElement(w.Radio,{value:e.value,name:this.inputName,checked:this.state.value===e.value}),e.content))))}}Q.count=0;const K=(0,b.withStyles)(Q,"RadioGroup");var X;!function(e){e.CurrentWindow="_self",e.TopWindow="_top",e.NewWindow="_blank"}(X||(X={}));class Y extends o.React.PureComponent{constructor(){super(...arguments),this.itemOnClick=e=>{this.props.onClick(e),this.setState({selectedItemName:e.name})}}getListContent(){return this.props.datas.map(((e,t)=>o.React.createElement("div",{onClick:()=>this.itemOnClick(e),key:t,className:(0,o.classNames)("link-selector-list-item btn w-100 border text-left border-bottom-0 rounded-0 text-truncate",{itemselected:this.props.linkParam.value===e.id})},e.name)))}render(){const e=this.props.datas.find((e=>this.props.linkParam.value===e.id)),t=e&&e.id;return o.React.createElement("div",{className:"link-selector-list w-100"},o.React.createElement(w.Select,{value:t,className:"w-100",onChange:e=>this.itemOnClick(this.props.datas.find((t=>t.id===e.target.value))),"aria-label":this.props["aria-label"],size:"sm"},this.props.datas.map(((e,t)=>o.React.createElement("option",{key:t,value:e.id},e.name)))))}}class Z extends o.React.PureComponent{constructor(){super(...arguments),this.currentPage={id:o.CONSTANTS.CURRENT_PAGE,name:this.props.intl.formatMessage({id:"currentPage",defaultMessage:w.defaultMessages.currentPage})},this.getInitLinkParam=()=>{const e=this.props.appConfig.pageStructure;if(!e||e.length<1)return(0,o.Immutable)({value:""});if(this.props.originLinkParam.linkType!==o.LinkType.Page){const e=this.getPageData();return(0,o.Immutable)({linkType:o.LinkType.Page,value:e&&e.some((e=>"default"===e.id))?"default":e&&e[0]&&e[0].id,openType:!this.props.openTypes||this.props.openTypes.includes(X.CurrentWindow)?X.CurrentWindow:this.props.openTypes[0]})}return this.props.originLinkParam},this.getPageData=()=>{const e=this.props.appConfig&&this.props.appConfig.pages,t=e&&Object.keys(e).filter((t=>e[t].type===o.PageType.Normal));let s=[this.currentPage];return t&&(s=s.concat(t.map((t=>({id:t,name:e[t].label}))))),s},this.setLinkParam=e=>{let t=this.props.linkParam;t=t.set("value",e.id),this.props.onLinkParamChange(t)}}componentDidMount(){const e=this.getInitLinkParam();this.props.onLinkParamChange(e)}render(){const e=this.getPageData();return o.React.createElement("div",{className:"w-100"},o.React.createElement("div",{className:"mb-12 option-name"},this.props.intl.formatMessage({id:"chooseAPage",defaultMessage:w.defaultMessages.chooseAPage})),o.React.createElement("div",null,o.React.createElement(Y,{linkParam:this.props.linkParam,datas:e,onClick:this.setLinkParam,"aria-label":this.props.intl.formatMessage({id:"chooseAPage",defaultMessage:w.defaultMessages.chooseAPage})})))}}class ee extends o.React.PureComponent{constructor(){super(...arguments),this.getInitLinkParam=()=>{const e=this.props.appConfig.dialogs;if(!e||Object.keys(e).length<1)return(0,o.Immutable)({linkType:o.LinkType.Dialog,value:""});if(this.props.originLinkParam.linkType!==o.LinkType.Dialog){const e=this.getDialogData();return(0,o.Immutable)({linkType:o.LinkType.Dialog,value:e&&e.some((e=>"default"===e.id))?"default":e&&e[0]&&e[0].id})}return this.props.originLinkParam},this.getDialogData=()=>{var e,t;const s=this.props.appConfig&&this.props.appConfig.dialogs,i=(null===(e=s&&Object.values(s).filter((e=>(null==e?void 0:e.mode)===o.DialogMode.Fixed)))||void 0===e?void 0:e.sort(((e,t)=>e.index-t.index)))||[],n=(null===(t=s&&Object.values(s).filter((e=>(null==e?void 0:e.mode)===o.DialogMode.Anchored)))||void 0===t?void 0:t.sort(((e,t)=>e.index-t.index)))||[],a=i.concat(n).map((e=>e.id));return a&&a.filter((e=>!s[e].isSplash)).map((e=>({id:e,name:s[e].label})))},this.setLinkParam=e=>{let t=this.props.linkParam;t=t.set("value",e.id),this.props.onLinkParamChange(t)}}componentDidMount(){const e=this.getInitLinkParam();this.props.onLinkParamChange(e)}componentDidUpdate(e){if(e.appConfig!==this.props.appConfig){const e=this.getInitLinkParam();this.props.onLinkParamChange(e)}}render(){const e=this.getDialogData();return o.React.createElement("div",{className:"w-100"},o.React.createElement("div",{className:"mb-12 option-name"},this.props.intl.formatMessage({id:"chooseADialog",defaultMessage:w.defaultMessages.chooseADialog})),o.React.createElement("div",null,e&&e.length>0&&o.React.createElement(Y,{linkParam:this.props.linkParam,datas:e,onClick:this.setLinkParam,"aria-label":this.props.intl.formatMessage({id:"chooseADialog",defaultMessage:w.defaultMessages.chooseADialog})})))}}var te=c(74758);class se extends o.React.PureComponent{constructor(){super(...arguments),this.getInitLinkParam=()=>{const e=te.searchUtils.getBlockAnchorPointsInPage(te.utils.getAppConfig(),te.utils.getCurrentPageId(),te.utils.getCurrentSizeMode());if(!e||e.length<1)return(0,o.Immutable)({linkType:o.LinkType.Block,value:""});if(this.props.originLinkParam.linkType!==o.LinkType.Block){const e=this.getBlockData();return(0,o.Immutable)({linkType:o.LinkType.Block,value:e&&e.some((e=>"default"===e.id))?"default":e&&e[0]&&e[0].id})}return this.props.originLinkParam},this.getBlockData=()=>te.searchUtils.getBlockAnchorPointsInPage(te.utils.getAppConfig(),te.utils.getCurrentPageId(),te.utils.getCurrentSizeMode()).map((e=>({id:e.id,name:e.label}))),this.setLinkParam=e=>{let t=this.props.linkParam;t=t.set("value",e.id),this.props.onLinkParamChange(t)}}componentDidMount(){const e=this.getInitLinkParam();this.props.onLinkParamChange(e)}render(){const e=this.getBlockData();return o.React.createElement("div",{className:"w-100"},o.React.createElement("div",{className:"mb-12 option-name"},this.props.intl.formatMessage({id:"jumpTo",defaultMessage:w.defaultMessages.jumpTo})),o.React.createElement("div",null,e&&e.length>0&&o.React.createElement(Y,{linkParam:this.props.linkParam,datas:e,onClick:this.setLinkParam,"aria-label":this.props.intl.formatMessage({id:"jumpTo",defaultMessage:w.defaultMessages.jumpTo})})))}}class oe extends o.React.PureComponent{constructor(){super(...arguments),this.screenGroupLabelStyle={marginLeft:"-20px"},this.getInitLinkParam=()=>{const e=this.getScreenData();return!e||e.length<1?(0,o.Immutable)({linkType:o.LinkType.Screen,value:""}):this.props.originLinkParam.linkType!==o.LinkType.Screen?(0,o.Immutable)({linkType:o.LinkType.Screen,value:e[0].screens[0].id}):this.props.originLinkParam},this.getScreenData=()=>te.searchUtils.getScreenAnchorPointsInPage(te.utils.getAppConfig(),te.utils.getCurrentPageId(),te.utils.getCurrentSizeMode()),this.setLinkParam=e=>{let t=this.props.linkParam;t=t.set("value",e.target.value),this.props.onLinkParamChange(t)}}componentDidMount(){const e=this.getInitLinkParam();this.props.onLinkParamChange(e)}render(){var e;const t=this.getScreenData(),s=[];return t.forEach((e=>{s.push(o.React.createElement("option",{value:e.id,key:e.id,disabled:!0,style:this.screenGroupLabelStyle},e.label)),e.screens.forEach(((t,i)=>s.push(o.React.createElement("option",{value:t.id,key:`${e.id}-${i}`},t.label))))})),o.React.createElement("div",{className:"w-100"},o.React.createElement("div",{className:"mb-12 option-name"},this.props.intl.formatMessage({id:"jumpTo",defaultMessage:w.defaultMessages.jumpTo})),o.React.createElement("div",null,t.length>0&&o.React.createElement(w.Select,{value:null===(e=this.props.linkParam)||void 0===e?void 0:e.value,className:"w-100",onChange:this.setLinkParam,size:"sm","aria-label":this.props.intl.formatMessage({id:"jumpTo",defaultMessage:w.defaultMessages.jumpTo})},s)))}}const ie=e=>{const{className:t}=e,s=function(e,t){var s={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(s[o[i]]=e[o[i]])}return s}(e,["className"]),i=(0,o.classNames)("jimu-icon-component",t);return o.React.createElement(w.Icon,Object.assign({className:i,icon:L()},s))};const ne=e=>{const{className:t}=e,s=function(e,t){var s={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(s[o[i]]=e[o[i]])}return s}(e,["className"]),i=(0,o.classNames)("jimu-icon-component",t);return o.React.createElement(w.Icon,Object.assign({className:i,icon:M()},s))};class ae extends o.React.PureComponent{constructor(){super(...arguments),this.onCollapseClick=e=>{e.stopPropagation(),e.nativeEvent.stopImmediatePropagation(),this.setState({collapse:!this.state.collapse})}}componentWillMount(){this.setState({collapse:this.props.isOpen})}render(){return o.React.createElement("div",{className:(0,o.classNames)("w-100",this.props.className)},o.React.createElement("div",{title:this.props.title,style:{overflow:"hidden"},className:"w-100 btn pb-2 pr-2 d-flex justify-content-between"},o.React.createElement("div",null,this.props.title),o.React.createElement(w.Button,{type:"tertiary",size:"sm",className:"collapse-btn py-0 jimu-outline-inside pr-0",onClick:this.onCollapseClick},this.state.collapse?o.React.createElement(ie,{size:"s"}):o.React.createElement(ne,{size:"s"}))),o.React.createElement(w.Collapse,{isOpen:this.state.collapse,"aria-label":this.props.title},this.props.children))}}function re(e,t){const s=t&&t.pages;return s&&s[e]&&s[e].type===o.PageType.Normal&&te.searchUtils.getContentsInPageBody(t,e,o.LayoutItemType.Section,te.utils.getCurrentSizeMode())||[]}function le(e,t){if(!e)return[];const s=pe(e,t);if(s&&s.length>0){let e=[],o=[];return s.forEach((s=>{e=e.concat(ce(s,t).map((e=>e.id)))})),e.length>0&&e.forEach((e=>{o=o.concat(le(e,t))})),e.concat(o)}return[]}function pe(e,t){return te.searchUtils.getContentsInView(t,e,o.LayoutItemType.Section,te.utils.getCurrentSizeMode())||[]}function ce(e,t){const s=t.sections[e].views,o=[];for(let e=0;e<s.length;e++)o.push({id:s[e],label:t.views[s[e]].label});return o}class de extends o.React.PureComponent{constructor(e){super(e),this.noScroll="Do not scroll",this.getInitLinkParam=()=>this.props.originLinkParam.linkType===o.LinkType.View?this.props.originLinkParam:(0,o.Immutable)({linkType:o.LinkType.View,openType:!this.props.openTypes||this.props.openTypes.includes(X.CurrentWindow)?X.CurrentWindow:this.props.openTypes[0],value:""}),this.pageChange=e=>{let t=this.props.linkParam;t=t.set("value",e.target.value),this.props.onLinkParamChange(t)},this.viewChange=(e,t)=>{let s=[];s=Object.assign(s,this.state.viewLinkParamArr),s[0]||(s[0]=this.getDefaultPageId());const o=this.props.appConfig.sections[t].views;let i=s.filter((t=>o.some((e=>e===t))&&t!==e)),n=[];const a=s.indexOf(e);if(a>-1?i=i.concat(s[a]):n=n.concat(e),i&&i.length>0){let e=[];i.forEach((t=>{e=e.concat(le(t,this.props.appConfig))})),i=i.concat(e)}s=s.filter((e=>!i.some((t=>t===e)))),s=s.concat(n);let r=this.props.linkParam;r=r.set("value",s.join(",")),this.props.onLinkParamChange(r)},this.viewRemove=e=>{let t=[];t=Object.assign(t,this.state.viewLinkParamArr),t[0]||(t[0]=this.getDefaultPageId());const s=le(e,this.props.appConfig).concat(e);t=t.slice(0,1).concat(t.slice(1).filter((e=>!s.some((t=>t===e)))));let o=this.props.linkParam;o=o.set("value",t.join(",")),this.props.onLinkParamChange(o,!0)},this.onScrollToViewChange=e=>{this.setState({scrollToViewId:e})},this.getDefaultPageId=()=>{const e=this.props.appConfig&&this.props.appConfig.pages,t=e&&Object.keys(e).filter((e=>re(e,this.props.appConfig).length>0));return t&&t.find((t=>e[t].isDefault))||(null==t?void 0:t[0])},this.getSelectedVeiwIds=()=>this.state.viewLinkParamArr.slice(1),this.state={viewLinkParamArr:[],scrollToViewId:this.noScroll}}componentDidMount(){const e=this.getInitLinkParam(),{value:t,linkType:s}=e;t&&s===o.LinkType.View?this.setState({viewLinkParamArr:t.split(",")}):this.setState({viewLinkParamArr:[]}),this.props.onLinkParamChange(e)}static getDerivedStateFromProps(e,t){const{value:s,linkType:i}=e.linkParam;return s&&i===o.LinkType.View?Object.assign(Object.assign({},t),{viewLinkParamArr:s.split(",")}):Object.assign(Object.assign({},t),{viewLinkParamArr:[]})}render(){var e,t;if(!this.props.appConfig)return null;const s={};Object.keys(this.props.appConfig.pages).forEach((e=>{this.props.appConfig.pages[e]&&this.props.appConfig.pages[e].type===o.PageType.Normal&&(s[e]=Object.assign({},this.props.appConfig.pages[e]))}));const i=this.state.viewLinkParamArr[0]||this.getDefaultPageId();return s[i]?o.React.createElement("div",{className:"w-100"},o.React.createElement("div",{className:"mb-12 option-name"},this.props.intl.formatMessage({id:"chooseViews",defaultMessage:w.defaultMessages.chooseViews})),o.React.createElement("div",null,o.React.createElement(w.Select,{value:i,onChange:this.pageChange,className:"w-100 mb-3",size:"sm"},Object.keys(s).filter((e=>re(e,this.props.appConfig).length>0)).map(((e,t)=>o.React.createElement("option",{key:t,value:s[e].id},s[e].label)))),o.React.createElement("div",{className:(0,o.classNames)("choose-view",{"mb-3":(null===(e=re(i,this.props.appConfig))||void 0===e?void 0:e.length)>0})},re(i,this.props.appConfig).map((e=>o.React.createElement(ue,{sections:this.props.appConfig.sections,sectionId:e,viewsInfo:ce(e,this.props.appConfig),viewLinkParamArr:this.state.viewLinkParamArr,viewChange:this.viewChange,viewRemove:this.viewRemove,key:e})))),o.React.createElement("div",{className:(0,o.classNames)("choose-view",{"mb-3":(null===(t=this.getSelectedVeiwIds())||void 0===t?void 0:t.length)>0})},this.getSelectedVeiwIds().map((e=>pe(e,this.props.appConfig).map((e=>o.React.createElement(ue,{sections:this.props.appConfig.sections,sectionId:e,viewsInfo:ce(e,this.props.appConfig),viewLinkParamArr:this.state.viewLinkParamArr,viewChange:this.viewChange,viewRemove:this.viewRemove,key:e})))))))):null}}class ue extends o.React.PureComponent{constructor(e){super(e),this.onViewChange=e=>{this.setState({viewId:e}),this.props.viewChange(e,this.props.sectionId)},this.state={viewId:null}}componentWillUnmount(){this.props.viewRemove(this.state.viewId)}render(){return o.React.createElement(ae,{className:"mb-3 choose-view",title:this.props.sections[this.props.sectionId]&&this.props.sections[this.props.sectionId].label,isOpen:!0,key:this.props.sectionId},o.React.createElement("div",{className:"link-selector-list w-100 view-border border-top-0 border-left-0 border-right-0 rounded-0",role:"menu"},this.props.viewsInfo.map(((e,t)=>o.React.createElement(w.Button,{role:"menuitem",onClick:()=>this.onViewChange(e.id),key:t,className:(0,o.classNames)("jimu-outline-inside link-selector-list-item btn w-100 view-border px-2 pt-1 text-left border-bottom-0 rounded-0 text-truncate",{"item-common":!this.props.viewLinkParamArr.includes(e.id)},{itemselected:this.props.viewLinkParamArr.includes(e.id)}),title:e.label,"aria-checked":this.props.viewLinkParamArr.includes(e.id)},e.label)))))}}var he=c(39342);const ge=(0,o.Immutable)([he.ExpressionInputType.Static,he.ExpressionInputType.Attribute,he.ExpressionInputType.Expression]);class me extends o.React.PureComponent{constructor(e){var t;super(e),this.getInitLinkParam=()=>this.props.originLinkParam.linkType===o.LinkType.WebAddress?this.props.originLinkParam:(0,o.Immutable)({linkType:o.LinkType.WebAddress,openType:!this.props.openTypes||this.props.openTypes.includes(X.NewWindow)?X.NewWindow:this.props.openTypes[0],value:""}),this.webAddressInputChange=e=>{const t=e;let s=this.props.linkParam;s=s.set("value",t).set("expression",null),this.props.onLinkParamChange(s)},this.webAddressExpressionChange=e=>{let t=this.props.linkParam;t=t.set("expression",e).set("value",""),this.props.onLinkParamChange(t),this.closeExpPopup()},this.openExpPopup=()=>this.setState({isExpPopupOpen:!0}),this.closeExpPopup=()=>this.setState({isExpPopupOpen:!1}),this.getDefaultExp=()=>({name:"Expression",parts:[{type:o.ExpressionPartType.String,exp:'"https://"'}]}),this.onUrlChange=e=>{this.setState({url:e.target.value})},this.state={isExpPopupOpen:!1,url:(null===(t=this.props.linkParam)||void 0===t?void 0:t.linkType)===o.LinkType.WebAddress?this.props.linkParam.value:""}}componentDidMount(){const e=this.getInitLinkParam();this.props.onLinkParamChange(e)}componentDidUpdate(e){var t,s,i;(null===(t=e.linkParam)||void 0===t?void 0:t.value)!==(null===(s=this.props.linkParam)||void 0===s?void 0:s.value)&&this.setState({url:(null===(i=this.props.linkParam)||void 0===i?void 0:i.linkType)===o.LinkType.WebAddress?this.props.linkParam.value:this.state.url})}render(){return o.React.createElement("div",{className:"w-100"},o.React.createElement("div",{className:"mb-12 option-name"},this.props.intl.formatMessage({id:"url",defaultMessage:w.defaultMessages.url})),o.React.createElement("div",null,this.props.useDataSources&&this.props.useDataSources.length>0?o.React.createElement(he.ExpressionInput,{useDataSources:this.props.useDataSources,onChange:this.webAddressExpressionChange,expression:this.props.linkParam&&this.props.linkParam.expression||this.getDefaultExp(),closeExpPopup:this.closeExpPopup,openExpPopup:this.openExpPopup,isExpPopupOpen:this.state.isExpPopupOpen,types:ge,widgetId:this.props.widgetId,"aria-label":this.props.intl.formatMessage({id:"url",defaultMessage:w.defaultMessages.url})}):o.React.createElement(w.TextInput,{type:"url",value:this.state.url,onChange:this.onUrlChange,className:"w-100",placeholder:this.props.intl.formatMessage({id:"websitePlaceholder",defaultMessage:w.defaultMessages.websitePlaceholder}),spellCheck:!1,onAcceptValue:this.webAddressInputChange,"aria-label":this.props.intl.formatMessage({id:"url",defaultMessage:w.defaultMessages.url})})))}}class fe extends o.React.PureComponent{constructor(e){if(super(e),this.getLinkTypeContent=()=>{if(this.props.isLinkPageSetting)return(0,o.jsx)(w.Select,{value:this.state.linkParam.linkType,size:"sm",onChange:this.linkTypeChange,className:"w-100","aria-label":this.props.intl.formatMessage({id:"linkTo",defaultMessage:w.defaultMessages.linkTo})},(0,o.jsx)("option",{value:o.LinkType.WebAddress},this.props.intl.formatMessage({id:"url",defaultMessage:w.defaultMessages.url})));{const e=this.getHiddenLinks();return(0,o.jsx)(w.Select,{value:this.state.linkParam.linkType,size:"sm",onChange:this.linkTypeChange,className:"w-100","aria-label":this.props.intl.formatMessage({id:"linkTo",defaultMessage:w.defaultMessages.linkTo})},!e.some((e=>e===o.LinkType.None))&&(0,o.jsx)("option",{value:o.LinkType.None},this.props.intl.formatMessage({id:"none",defaultMessage:w.defaultMessages.none})),!e.some((e=>e===o.LinkType.Page))&&(0,o.jsx)("option",{value:o.LinkType.Page},this.props.intl.formatMessage({id:"page",defaultMessage:o.defaultMessages.page})),!e.some((e=>e===o.LinkType.View))&&(0,o.jsx)("option",{value:o.LinkType.View},this.props.intl.formatMessage({id:"view",defaultMessage:o.defaultMessages.view})),!e.some((e=>e===o.LinkType.Dialog))&&(0,o.jsx)("option",{value:o.LinkType.Dialog},this.props.intl.formatMessage({id:"dialog",defaultMessage:o.defaultMessages.dialog})),!e.some((e=>e===o.LinkType.WebAddress))&&(0,o.jsx)("option",{value:o.LinkType.WebAddress},this.props.intl.formatMessage({id:"url",defaultMessage:w.defaultMessages.url})),!e.some((e=>e===o.LinkType.Block))&&(0,o.jsx)("option",{value:o.LinkType.Block},this.props.intl.formatMessage({id:"block",defaultMessage:o.defaultMessages.block})),!e.some((e=>e===o.LinkType.PageTop))&&(0,o.jsx)("option",{value:o.LinkType.PageTop},this.props.intl.formatMessage({id:"pageTop",defaultMessage:w.defaultMessages.pageTop})))}},this.getHiddenLinks=()=>{var e,t,s,i,n;let a=this.props.hiddenLinks||(0,o.Immutable)([]);const r=te.utils.getCurrentPageId(),l=te.utils.getAppConfig(),p=null===(e=l.pages)||void 0===e?void 0:e[r],c=te.searchUtils.findLayoutId(null==p?void 0:p.layout,te.utils.getCurrentSizeMode(),l.mainSizeMode),d=l.layouts[c],u=(null===(t=null===window||void 0===window?void 0:window.jimuConfig)||void 0===t?void 0:t.isBuilder)?null===(i=null===(s=(0,o.getAppStore)().getState().appStateInBuilder)||void 0===s?void 0:s.appRuntimeInfo)||void 0===i?void 0:i.currentDialogId:null===(n=(0,o.getAppStore)().getState().appRuntimeInfo)||void 0===n?void 0:n.currentDialogId;return((null==d?void 0:d.type)===o.LayoutType.FixedLayout||u)&&(a=a.concat([o.LinkType.Block,o.LinkType.Screen,o.LinkType.PageTop])),a},this.getLinkContent=e=>{switch(e){case o.LinkType.None:return null;case o.LinkType.Page:return(0,o.jsx)(Z,{originLinkParam:this.state.originLinkParam,linkParam:this.state.linkParam,appConfig:this.props.appConfig,onLinkParamChange:this.linkParamChange,intl:this.props.intl,openTypes:this.props.openTypes});case o.LinkType.Dialog:return(0,o.jsx)(ee,{originLinkParam:this.state.originLinkParam,linkParam:this.state.linkParam,appConfig:this.props.appConfig,onLinkParamChange:this.linkParamChange,intl:this.props.intl});case o.LinkType.Block:return(0,o.jsx)(se,{originLinkParam:this.state.originLinkParam,linkParam:this.state.linkParam,onLinkParamChange:this.linkParamChange,intl:this.props.intl});case o.LinkType.Screen:return(0,o.jsx)(oe,{originLinkParam:this.state.originLinkParam,linkParam:this.state.linkParam,onLinkParamChange:this.linkParamChange,intl:this.props.intl});case o.LinkType.View:return(0,o.jsx)(de,{originLinkParam:this.state.originLinkParam,linkParam:this.state.linkParam,intl:this.props.intl,openTypes:this.props.openTypes,appConfig:this.props.appConfig,onLinkParamChange:this.linkParamChange,browserSizeMode:this.props.browserSizeMode});case o.LinkType.WebAddress:return(0,o.jsx)(me,{originLinkParam:this.state.originLinkParam,linkParam:this.state.linkParam,intl:this.props.intl,onLinkParamChange:this.linkParamChange,useDataSources:this.props.useDataSources,openTypes:this.props.openTypes,widgetId:this.props.widgetId});default:return null}},this.linkTypeChange=e=>{let t=(0,o.Immutable)(this.state.linkParam);const s=e.target.value;s===o.LinkType.PageTop&&(t=(0,o.Immutable)({})),this.setState({linkParam:t.set("linkType",s)})},this.radioOpenTypeChange=e=>{let t=(0,o.Immutable)(this.state.linkParam);t=t.set("openType",e),this.setState({linkParam:t})},this.linkParamChange=(e,t)=>{t?e&&this.state.linkParam&&e.linkType===this.state.linkParam.linkType&&this.setState({linkParam:e}):this.setState({linkParam:e})},this.settingConfirm=()=>{const e=(0,o.Immutable)(this.state.linkParam);this.setState({originLinkParam:e}),this.props.onSettingConfirm(e)},this.isLinkParamOk=e=>{if(!e||!e.linkType)return!1;if(e.linkType===o.LinkType.View){const t=e.value&&e.value.split(",")[0]||null,s=e.value&&e.value.split(",").slice(1)||[];return!!(t&&"string"==typeof t&&s.length>0)}if(e.linkType===o.LinkType.WebAddress){if(this.props.useDataSources&&this.props.useDataSources.length>0){const t=e.expression&&e.expression.parts;let s=!1;return t&&t.length>0&&(s=1!==t.length||!!t[0].exp&&'""'!==t[0].exp),s}{const t=w.utils.getHttpErrorType(e.value);return e.value&&!t}}return e.linkType===o.LinkType.PageTop||e.linkType===o.LinkType.None||!(!e.value||"string"!=typeof e.value)},this.props.linkParam&&this.props.linkParam.linkType)this.state={linkParam:(0,o.Immutable)(this.props.linkParam),originLinkParam:(0,o.Immutable)(this.props.linkParam)};else{const e={linkType:o.LinkType.None,openType:!this.props.openTypes||this.props.openTypes.includes(X.CurrentWindow)?X.CurrentWindow:this.props.openTypes[0]};this.state={linkParam:(0,o.Immutable)(e),originLinkParam:(0,o.Immutable)(e)}}}needOpenIn(e){return!e||![o.LinkType.Dialog,o.LinkType.Block,o.LinkType.Screen,o.LinkType.PageTop].some((t=>t===e.linkType))}render(){if(this.props.appConfig){const e=this.getLinkTypeContent(),t=this.getLinkContent(this.state.linkParam.linkType);return(0,o.jsx)("div",{className:(0,o.classNames)(this.props.className,"w-100 h-100")},(0,o.jsx)("div",{className:"widget-builder-link-selector w-100 h-100"},(0,o.jsx)("div",{style:{position:"relative"},className:"w-100 h-100"},(0,o.jsx)(w.Container,null,(0,o.jsx)(w.Row,{className:"mb-12 option-name"},this.props.intl.formatMessage({id:"linkTo",defaultMessage:w.defaultMessages.linkTo})),(0,o.jsx)(w.Row,{className:"mb-3"},e),this.state.linkParam.linkType!==o.LinkType.None?(0,o.jsx)("div",null,(0,o.jsx)(w.Row,{className:"mb-3"},t),this.needOpenIn(this.state.linkParam)&&(0,o.jsx)("div",null,(0,o.jsx)(w.Row,{className:"mb-12 option-name"},this.props.intl.formatMessage({id:"openIn",defaultMessage:w.defaultMessages.openIn})),(0,o.jsx)(w.Container,{className:"p-0","aria-label":this.props.intl.formatMessage({id:"openIn",defaultMessage:w.defaultMessages.openIn})},(!this.props.openTypes||this.props.openTypes.some((e=>e===X.CurrentWindow)))&&(0,o.jsx)(w.Row,{className:"mb-3"},(0,o.jsx)(w.Radio,{onChange:()=>this.radioOpenTypeChange(X.CurrentWindow),id:"link-setting-app-window",checked:this.state.linkParam.openType===X.CurrentWindow}),(0,o.jsx)(w.Label,{for:"link-setting-app-window",className:"ml-2 link-setting-cursor-pointer open-type-label text-truncate"},this.props.intl.formatMessage({id:"appWindow",defaultMessage:w.defaultMessages.appWindow}))),(!this.props.openTypes||this.props.openTypes.some((e=>e===X.TopWindow)))&&(0,o.jsx)(w.Row,{className:"mb-3"},(0,o.jsx)(w.Radio,{onChange:()=>this.radioOpenTypeChange(X.TopWindow),id:"link-setting-top-window",checked:this.state.linkParam.openType===X.TopWindow}),(0,o.jsx)(w.Label,{for:"link-setting-top-window",className:"ml-2 link-setting-cursor-pointer open-type-label text-truncate"},this.props.intl.formatMessage({id:"topWindow",defaultMessage:w.defaultMessages.topWindow}))),(!this.props.openTypes||this.props.openTypes.some((e=>e===X.NewWindow)))&&(0,o.jsx)(w.Row,{className:"mb-3"},(0,o.jsx)(w.Radio,{onChange:()=>this.radioOpenTypeChange(X.NewWindow),id:"link-setting-new-window",checked:this.state.linkParam.openType===X.NewWindow}),(0,o.jsx)(w.Label,{for:"link-setting-new-window",className:"ml-2 link-setting-cursor-pointer open-type-label text-truncate"},this.props.intl.formatMessage({id:"newWindow",defaultMessage:w.defaultMessages.newWindow})))))):null),(0,o.jsx)("div",{className:"w-100",style:{position:"absolute"}},(0,o.jsx)(w.Button,{className:"w-100 text-dark link-setting-ok-btn",type:"primary",onClick:this.settingConfirm,disabled:!this.isLinkParamOk(this.state.linkParam),title:this.props.intl.formatMessage({id:"ok",defaultMessage:o.defaultMessages.ok})},(0,o.jsx)("div",{className:"text-truncate"},this.props.intl.formatMessage({id:"ok",defaultMessage:o.defaultMessages.ok})))))))}return null}componentDidMount(){this.props.isLinkPageSetting&&this.linkTypeChange({target:{value:o.LinkType.WebAddress}})}}const ve=o.ReactRedux.connect((e=>({appConfig:window&&window.jimuConfig&&window.jimuConfig.isBuilder?e.appStateInBuilder.appConfig:e.appConfig,browserSizeMode:window&&window.jimuConfig&&window.jimuConfig.isBuilder?e.appStateInBuilder.browserSizeMode:e.browserSizeMode})))((0,o.injectIntl)((0,b.withStyles)(fe,"LinkSelectorContent"))),ye=ve;const be=[{name:"preventOverflow",options:{boundariesElement:"viewport"}}];class we extends o.React.PureComponent{constructor(){super(...arguments),this.closeBtnRef=o.React.createRef(),this.popperRef=o.React.createRef(),this.handleDocumentMousedown=e=>{if(this.props.isOpen){const t=e.target;(!this.props.trigger||(Array.isArray(this.props.trigger)?!this.props.trigger.some((e=>!(0,w.isOutBoundary)(t,e))):(0,w.isOutBoundary)(t,this.props.trigger)))&&this.toggle()}},this.toggle=()=>{this.props.toggle(),setTimeout((()=>{var e,t;this.props.backToFocusNode?this.props.backToFocusNode.focus():Array.isArray(this.props.trigger)?null===(e=this.props.trigger[0])||void 0===e||e.focus():null===(t=this.props.trigger)||void 0===t||t.focus()}),200)},this.onKeyDown=e=>{var t,s;if("Esc"===e.key||"Escape"===e.key){if(!(null===(t=this.popperRef.current)||void 0===t?void 0:t.contains(e.target)))return;e.target===this.closeBtnRef.current?this.toggle():null===(s=this.closeBtnRef.current)||void 0===s||s.focus()}}}componentDidMount(){var e;null===(e=this.getReference(this.props.position))||void 0===e||e.addEventListener("mousedown",this.handleDocumentMousedown,!1)}componentDidUpdate(e){var t;const s="left"===this.props.position&&e.leftSidebarCollapse&&!this.props.leftSidebarCollapse||"right"===this.props.position&&e.rightSidebarCollapse&&!this.props.rightSidebarCollapse,o=this.props.widgetId&&this.props.layoutSelection!==e.layoutSelection&&(null===(t=te.searchUtils.findLayoutItem(te.utils.getAppConfig(),this.props.layoutSelection))||void 0===t?void 0:t.widgetId)!==this.props.widgetId,i=!e.isTemplatePage&&this.props.isTemplatePage;(s||o||i)&&this.props.isOpen&&this.toggle()}componentWillUnmount(){var e;null===(e=this.getReference(this.props.position))||void 0===e||e.removeEventListener("mousedown",this.handleDocumentMousedown,!1)}getReference(e){return"left"===e?document&&document.querySelector('[data-layoutid="left-sidebar-left-layout"]'):document&&document.querySelector('[data-layoutid="right-sidebar-right-layout"]')}getPlacement(e){return"left"===e?"right-start":"left-start"}render(){const e=this.props,{isOpen:t,position:s,className:i,dispatch:n,leftSidebarCollapse:a,rightSidebarCollapse:r,trigger:l,backToFocusNode:p,widgetId:c,layoutSelection:d,title:u,isTemplatePage:h}=e,g=function(e,t){var s={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(s[o[i]]=e[o[i]])}return s}(e,["isOpen","position","className","dispatch","leftSidebarCollapse","rightSidebarCollapse","trigger","backToFocusNode","widgetId","layoutSelection","title","isTemplatePage"]);return(0,o.jsx)(w.Popper,Object.assign({reference:this.getReference(s),placement:this.getPlacement(s),open:t,forceLatestFocusElements:!0,className:(0,o.classNames)("bg-light-300",i),modifiers:be},g,{toggle:null,onKeyDown:this.onKeyDown,"aria-label":"string"==typeof this.props["aria-label"]?this.props["aria-label"]:"string"==typeof u?u:void 0}),(0,o.jsx)("div",{className:"w-100 h-100",ref:this.popperRef},void 0!==u&&(0,o.jsx)(w.PanelHeader,{title:u,showClose:!0,onClose:this.toggle,level:1,className:"p-3",closeButtonRef:this.closeBtnRef}),void 0!==u?(0,o.jsx)("div",{css:o.css`height: calc(100% - 56px); overflow: auto;`},this.props.children):this.props.children))}}const xe=o.ReactRedux.connect(((e,t)=>{var s,o,i,n,a,r,l,p,c,d;return{leftSidebarCollapse:null===(o=null===(s=e.widgetsState)||void 0===s?void 0:s["left-sidebar"])||void 0===o?void 0:o.collapse,rightSidebarCollapse:null===(n=null===(i=e.widgetsState)||void 0===i?void 0:i["right-sidebar"])||void 0===n?void 0:n.collapse,layoutSelection:t.widgetId?(null===(a=null===window||void 0===window?void 0:window.jimuConfig)||void 0===a?void 0:a.isBuilder)?null===(l=null===(r=e.appStateInBuilder)||void 0===r?void 0:r.appRuntimeInfo)||void 0===l?void 0:l.selection:null===(p=e.appRuntimeInfo)||void 0===p?void 0:p.selection:null,isTemplatePage:(null===(c=null===window||void 0===window?void 0:window.jimuConfig)||void 0===c?void 0:c.isBuilder)&&"template"===(null===(d=e.appRuntimeInfo)||void 0===d?void 0:d.currentPageId)}}))((0,b.withStyles)(we,"SidePopper"));class Se extends o.React.PureComponent{constructor(){super(...arguments),this.close=()=>{this.props.onSettingCancel()},this.getIsOpen=()=>this.props.isOpen||this.props.showDialog}render(){const e=this.props.position||"right",{title:t}=this.props;return o.React.createElement(xe,{isOpen:this.getIsOpen(),position:e,toggle:this.close,trigger:this.props.trigger,backToFocusNode:this.props.backToFocusNode,widgetId:this.props.widgetId,title:this.props.intl.formatMessage({id:t?"setLinkForTitle":"setLink",defaultMessage:t?w.defaultMessages.setLinkForTitle:w.defaultMessages.setLink},{title:t})},o.React.createElement("div",{className:"bg-light-300 w-100 h-100 px-3"},o.React.createElement(ve,{isLinkPageSetting:this.props.isLinkPageSetting,linkParam:this.props.linkParam,onSettingConfirm:this.props.onSettingConfirm,useDataSources:this.props.useDataSources,widgetId:this.props.widgetId,hiddenLinks:this.props.hiddenLinks,openTypes:this.props.openTypes})))}}const ke=(0,o.injectIntl)((0,b.withTheme)(Se)),Pe=ke;var Ce=c(24786),Ie=c.n(Ce);const je=e=>{const{className:t}=e,s=function(e,t){var s={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(s[o[i]]=e[o[i]])}return s}(e,["className"]),i=(0,o.classNames)("jimu-icon-component",t);return o.React.createElement(w.Icon,Object.assign({className:i,icon:Ie()},s))};class Oe extends o.React.PureComponent{constructor(e){super(e),this.linkSelectorTrigger=o.React.createRef(),this.toggle=()=>{this.setState({isOpen:!this.state.isOpen})},this.onCancel=()=>{var e,t;null===(t=(e=this.props).onSettingCancel)||void 0===t||t.call(e),this.toggle()},this.onConfirm=e=>{var t,s;null===(s=(t=this.props).onSettingConfirm)||void 0===s||s.call(t,e),this.toggle()},this.state={isOpen:!1}}render(){const e=this.props,{theme:t,intl:s,buttonLabel:i}=e,n=function(e,t){var s={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(s[o[i]]=e[o[i]])}return s}(e,["theme","intl","buttonLabel"]),a=i||this.props.intl.formatMessage({id:"setLink",defaultMessage:w.defaultMessages.setLink});return o.React.createElement(o.React.Fragment,null,o.React.createElement(w.Button,{className:"w-100 text-black",type:"primary",onClick:this.toggle,ref:this.linkSelectorTrigger,title:a},o.React.createElement("div",{className:"w-100 px-2 text-truncate"},o.React.createElement(je,{className:"text-black"}),a)),o.React.createElement(ke,Object.assign({},n,{isOpen:this.state.isOpen,position:"right",onSettingCancel:this.onCancel,onSettingConfirm:this.onConfirm,trigger:this.linkSelectorTrigger.current,widgetId:this.props.widgetId})))}}const Ne=(0,o.injectIntl)((0,b.withTheme)(Oe));var Me=c(338),Te=function(e,t,s,o){return new(s||(s=Promise))((function(i,n){function a(e){try{l(o.next(e))}catch(e){n(e)}}function r(e){try{l(o.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(a,r)}l((o=o.apply(e,t||[])).next())}))};function Le(){var e,t,s,i;return Te(this,void 0,void 0,(function*(){const n=null===(i=null===(s=null===(t=null===(e=(0,o.getAppStore)())||void 0===e?void 0:e.getState())||void 0===t?void 0:t.appStateInBuilder)||void 0===s?void 0:s.appConfig)||void 0===i?void 0:i.dataSources,a=[];return n&&Object.keys(n).forEach((e=>{const t=o.DataSourceManager.getInstance().getDataSource(e);a.push(Re(t))})),Promise.allSettled(a).then((e=>{let t={};return e.filter((e=>"fulfilled"===e.status)).map((e=>e.value)).forEach((e=>{e&&Object.keys(e).forEach((s=>{t[s]?t[s].dataSources=t[s].dataSources.concat(e[s].dataSources):t=Object.assign(Object.assign({},t),e)}))})),t}))}))}function Re(e,t=!1){var s,i,n,a,r,l,p,c,d,u;return Te(this,void 0,void 0,(function*(){const h={};if(!e)return h;const g=null===(a=null===(n=null===(i=null===(s=(0,o.getAppStore)())||void 0===s?void 0:s.getState())||void 0===i?void 0:i.appStateInBuilder)||void 0===n?void 0:n.appConfig)||void 0===a?void 0:a.widgets,m=(null===(r=e.getMainDataSource())||void 0===r?void 0:r.id)===e.id,f=Me.dataComponentsUtils.getWidgetsUsingDsOrItsViews(e.id,g,!1).length>0,v=o.dataSourceUtils.getFullServiceUrl(null===(l=e.getDataSourceJson())||void 0===l?void 0:l.url,!1);if(m&&v&&(t||f)){const t=(null===(p=e.getDataSourceJson())||void 0===p?void 0:p.portalUrl)&&(null===(c=e.getDataSourceJson())||void 0===c?void 0:c.itemId)?yield function(e,t){return Te(this,void 0,void 0,(function*(){const s=function(e,t){return`${o.SessionManager.getInstance().getSessionKeyFromUrl(t)}-${e}`}(e,t);return _e[s]||(_e[s]=o.requestUtils.requestWrapper(t,(s=>Te(this,void 0,void 0,(function*(){return yield o.esri.restPortal.getItem(e,{portal:o.portalUrlUtils.getPortalRestUrl(t),authentication:s})}))))),yield _e[s]}))}(null===(d=e.getDataSourceJson())||void 0===d?void 0:d.itemId,null===(u=e.getDataSourceJson())||void 0===u?void 0:u.portalUrl):null,s=o.dataSourceUtils.isOriginDataPremium(t,v),i=o.dataSourceUtils.isOriginDataSubscriber(t,v);(s||i)&&(h[v]={dataSources:[e],isPremium:s,isSubscriber:i})}const y=[];if(m&&e.isDataSourceSet){const s=(e.type===Me.AllDataSourceTypes.WebMap||e.type===Me.AllDataSourceTypes.WebScene)&&f||t;e.getChildDataSources().forEach((e=>{y.push(Re(e,s))}))}return Promise.allSettled(y).then((e=>{let t=h;return e.filter((e=>"fulfilled"===e.status)).map((e=>e.value)).forEach((e=>{e&&Object.keys(e).forEach((s=>{t[s]?t[s].dataSources=t[s].dataSources.concat(e[s].dataSources):t=Object.assign(Object.assign({},t),e)}))})),t}))}))}function Ae(e,t){var s;if(!e||!t)return null;let o=null;for(const i in t)if((null===(s=t[i])||void 0===s?void 0:s.sourceUrl)===e){o=t[i];break}return o}function Ee(e,t,s,o){return!(!e||!t)&&(e.sourceUrl===t&&((!e.hitsPerInterval&&!s||e.hitsPerInterval===s)&&!((e.intervalSeconds||o)&&e.intervalSeconds!==o)))}function De(){var e,t;const s=null===(e=(0,o.getAppStore)().getState())||void 0===e?void 0:e.appStateInBuilder.appInfo;return null===(t=null==s?void 0:s.typeKeywords)||void 0===t?void 0:t.includes("Registered App")}function $e(){var e,t,s,i,n,a,r,l,p,c;return Te(this,void 0,void 0,(function*(){if((null===(s=null===(t=null===(e=(0,o.getAppStore)().getState())||void 0===e?void 0:e.appContext)||void 0===t?void 0:t.jimuConfig)||void 0===s?void 0:s.isInPortal)||(null===(a=null===(n=null===(i=(0,o.getAppStore)().getState())||void 0===i?void 0:i.appContext)||void 0===n?void 0:n.jimuConfig)||void 0===a?void 0:a.isDevEdition))return yield Promise.resolve(!1);const d=De();let u=!1;if(!d){const e=null===(r=(0,o.getAppStore)().getState())||void 0===r?void 0:r.appStateInBuilder.appInfo,t=null===(c=null===(p=null===(l=(0,o.getAppStore)().getState())||void 0===l?void 0:l.appStateInBuilder)||void 0===p?void 0:p.user)||void 0===c?void 0:c.username;u=(null==e?void 0:e.owner)===t}if(!d&&!u)return yield Promise.resolve(!1);const h=yield Le(),g=Object.keys(h).map((e=>Te(this,void 0,void 0,(function*(){return yield o.ServiceManager.getInstance().fetchServiceInfo(e).then((e=>e.isHostedInSamePortal))}))));return Promise.all(g).then((e=>(null==e?void 0:e.length)>0&&(null==e?void 0:e.some((e=>e)))))}))}function Be(e,t){return Te(this,void 0,void 0,(function*(){if(!e||0===e.length||!t)return yield Promise.resolve();const s=Fe();return yield o.esri.restRequest.request(s,{authentication:o.SessionManager.getInstance().getSessionByUrl((0,o.getAppStore)().getState().portalUrl),httpMethod:"POST",params:{proxies:e.join()}}).then((e=>Te(this,void 0,void 0,(function*(){var s;return e.results&&Object.values(e.results).forEach((e=>{e.success&&Ue(e.proxyId,t)})),null==t||t.exec(),(null===(s=e.results)||void 0===s?void 0:s.every((e=>!0===e.success)))?Promise.resolve():Promise.reject(`Deleting existing proxy failed: ${JSON.stringify(e)}`)})))).catch((s=>Te(this,void 0,void 0,(function*(){return e.forEach((e=>{Ue(e,t)})),null==t||t.exec(),Promise.reject(`Deleting existing proxy failed: ${JSON.stringify(s)}`)}))))}))}function Ue(e,t){var s,i,n;const a=null===(n=null===(i=null===(s=(0,o.getAppStore)().getState())||void 0===s?void 0:s.appStateInBuilder)||void 0===i?void 0:i.appConfig)||void 0===n?void 0:n.appProxies,r=a&&Object.values(a).find((t=>t.proxyId===e));r&&(null==t||t.removeAppProxy(r.id))}function ze(){var e,t,s,i,n,a,r;const l=null===(t=null===(e=(0,o.getAppStore)().getState())||void 0===e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.portalUrl,p=null===(i=null===(s=(0,o.getAppStore)().getState())||void 0===s?void 0:s.appStateInBuilder)||void 0===i?void 0:i.appId;return`${l}/sharing/rest/content/users/${null===(r=null===(a=null===(n=(0,o.getAppStore)().getState())||void 0===n?void 0:n.appStateInBuilder)||void 0===a?void 0:a.appInfo)||void 0===r?void 0:r.owner}/items/${p}`}function We(){return`${ze()}/createProxies`}function Fe(){return`${ze()}/deleteProxies`}const _e={};var Ve=c(18371),He=c.n(Ve);const Je=e=>{const{className:t}=e,s=function(e,t){var s={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(s[o[i]]=e[o[i]])}return s}(e,["className"]),i=(0,o.classNames)("jimu-icon-component",t);return o.React.createElement(w.Icon,Object.assign({className:i,icon:He()},s))};class qe extends o.React.PureComponent{constructor(e){super(e),this.__unmount=!1,this.interval={none:this.props.intl.formatMessage({id:"intervalNone",defaultMessage:w.defaultMessages.intervalNone}),second:this.props.intl.formatMessage({id:"intervalSecond",defaultMessage:w.defaultMessages.intervalSecond}),minute:this.props.intl.formatMessage({id:"intervalMinute",defaultMessage:w.defaultMessages.intervalMinute}),hour:this.props.intl.formatMessage({id:"intervalHour",defaultMessage:w.defaultMessages.intervalHour}),day:this.props.intl.formatMessage({id:"intervalDay",defaultMessage:w.defaultMessages.intervalDay})},this.setIsHostedInSamePortal=()=>{this.props.sourceUrl&&o.ServiceManager.getInstance().fetchServiceInfo(this.props.sourceUrl).then((e=>{this.__unmount||this.setState({isHostedInSamePortal:e.isHostedInSamePortal})}))},this.onToggleProxy=()=>{let e;e=this.props.proxyConfig?null:(0,o.Immutable)({sourceUrl:this.props.sourceUrl}),this.props.onChange(this.props.sourceUrl,e)},this.onHitsPerInervalChange=e=>{const t=e,s=(0,o.Immutable)({sourceUrl:this.props.sourceUrl,hitsPerInterval:t}),i=this.props.proxyConfig?this.props.proxyConfig.merge(s):s;this.props.onChange(this.props.sourceUrl,i)},this.onIntervalUnitChange=e=>{const t=e.target.value,s=this.getIntervalSeconds(t),i=(0,o.Immutable)({sourceUrl:this.props.sourceUrl,intervalSeconds:s}),n=this.props.proxyConfig?this.props.proxyConfig.merge(i):i;this.props.onChange(this.props.sourceUrl,n)},this.state={isHostedInSamePortal:!0}}componentDidMount(){this.__unmount=!1,this.setIsHostedInSamePortal()}componentDidUpdate(e){this.__unmount=!1,e.sourceUrl!==this.props.sourceUrl&&this.setIsHostedInSamePortal()}componentWillUnmount(){this.__unmount=!0}getIntervalUnit(e){if(!e)return"none";switch(e){case 1:return"second";case 60:return"minute";case 3600:return"hour";case 86400:return"day";default:return"none"}}getIntervalSeconds(e){if(!e)return null;switch(e){case"second":return 1;case"minute":return 60;case"hour":return 3600;case"day":return 86400;default:return null}}render(){var e,t;if(!this.props.sourceUrl)return null;const s=this.props.label,i=!!this.props.proxyConfig,n=this.getIntervalUnit(null===(e=this.props.proxyConfig)||void 0===e?void 0:e.intervalSeconds),a=o.SessionManager.getInstance().getMainSession(),r=`${this.props.sourceUrl}?token=${a.token}`;return o.React.createElement("tr",{className:"row m-0 content-table-tr"},o.React.createElement("td",{className:"col-2",title:this.state.isHostedInSamePortal?null:this.props.intl.formatMessage({id:"disabledProxyTooltip",defaultMessage:w.defaultMessages.disabledProxyTooltip})},o.React.createElement(w.Switch,{onChange:this.onToggleProxy,checked:i,className:"mr-2",disabled:!this.state.isHostedInSamePortal})),o.React.createElement("td",{className:"col-4",title:s},o.React.createElement(w.Link,{to:r,target:"_blank",className:"font-size-13 px-0 text-truncate d-block text-left"},s)),o.React.createElement("td",{className:"col-2"},this.props.isPremium&&o.React.createElement(Je,{size:"m"})),o.React.createElement("td",{className:"col-2"},i&&o.React.createElement(w.NumericInput,{size:"sm",value:null===(t=this.props.proxyConfig)||void 0===t?void 0:t.hitsPerInterval,onChange:this.onHitsPerInervalChange,precision:0,min:1,className:"request-limit"})),o.React.createElement("td",{className:"col-2"},i&&o.React.createElement(w.Select,{value:n,onChange:this.onIntervalUnitChange,size:"sm",className:"request-interval"},Object.keys(this.interval).map(((e,t)=>o.React.createElement("option",{value:e,key:t,selected:e===n},this.interval[e]))))))}}class Ge extends o.React.PureComponent{constructor(){super(...arguments),this.columnName={authorized:this.props.intl.formatMessage({id:"authorized",defaultMessage:w.defaultMessages.authorized}),subscriberContent:this.props.intl.formatMessage({id:"subscriberContent",defaultMessage:w.defaultMessages.subscriberContent}),credits:this.props.intl.formatMessage({id:"credits",defaultMessage:w.defaultMessages.credits}),requestLimit:this.props.intl.formatMessage({id:"requestLimit",defaultMessage:w.defaultMessages.requestLimit}),requestInterval:this.props.intl.formatMessage({id:"requestInterval",defaultMessage:w.defaultMessages.requestInterval})},this.onProxyChange=(e,t)=>{let s;const i=this.props.proxyConfigs||(0,o.Immutable)({}),n=o.dataSourceUtils.getDsTypeFromWholeServiceUrl(e)===o.DataSourceTypes.SceneService;if(t){if(s=i.set(e,t),n){const o=e.replace("/SceneServer","/FeatureServer"),i=t.set("sourceUrl",o);s=s.set(o,i)}}else if(s=i.without(e),n){const t=e.replace("/SceneServer","/FeatureServer");s=s.without(t)}this.props.onChange(s)}}render(){const e=this.props.needProxyDataSources,t=this.props.proxyConfigs;return o.React.createElement("div",{className:(0,o.classNames)("h-100 w-100 bg-light-300",{[this.props.className]:!!this.props.className})},o.React.createElement("div",{className:"subscriber-warning"},this.props.intl.formatMessage({id:"subscriberWarning",defaultMessage:w.defaultMessages.subscriberWarning})),o.React.createElement("div",{className:"secondary-title mt-4 mb-3"},this.props.intl.formatMessage({id:"data",defaultMessage:w.defaultMessages.data})),o.React.createElement("table",{className:"content-table w-100"},o.React.createElement("thead",{className:"content-table-header container"},o.React.createElement("tr",{className:"row"},Object.keys(this.columnName).map(((e,t)=>o.React.createElement("th",{key:t,className:(0,o.classNames)("text-truncate",{"col-4":"subscriberContent"===e,"col-2":"subscriberContent"!==e}),title:this.columnName[e]},this.columnName[e]))))),o.React.createElement("tbody",{className:"container"},e&&Object.keys(e).map(((s,i)=>{var n,a;const r=e[s],l=r.dataSources[0],p=(null===(n=l)||void 0===n?void 0:n.getLayerDefinition)?null===(a=l)||void 0===a?void 0:a.getLayerDefinition():l.getServiceDefinition?l.getServiceDefinition():null;return o.React.createElement(qe,{isPremium:r.isPremium,isSubscriber:r.isSubscriber,sourceUrl:s,intl:this.props.intl,key:i,onChange:this.onProxyChange,label:(null==p?void 0:p.name)||o.dataSourceUtils.getServiceLabelFromUrl(s),icon:Me.dataComponentsUtils.getDsIcon(l.getDataSourceJson()),proxyConfig:null==t?void 0:t[s]})})))))}}const Qe=(0,o.injectIntl)((0,b.withStyles)(Ge,"ProxySetting"));var Ke;!function(e){e.IMAGE="image",e.ICON="icon"}(Ke||(Ke={}));var Xe=function(e,t,s,o){return new(s||(s=Promise))((function(i,n){function a(e){try{l(o.next(e))}catch(e){n(e)}}function r(e){try{l(o.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(a,r)}l((o=o.apply(e,t||[])).next())}))};const Ye={};class Ze extends o.React.PureComponent{constructor(e){super(e),this.__unmount=!1,this.getProxyConfigFromAppProxyJsons=()=>Xe(this,void 0,void 0,(function*(){var e,t;const s=yield Le(),i={},n=null===(t=null===(e=(0,o.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appConfig)||void 0===t?void 0:t.appProxies;return Object.keys(s).forEach((e=>{const t=Ae(e,n);t&&(i[e]=t.without("id").without("proxyId").without("proxyUrl"))})),{proxyConfigs:(0,o.Immutable)(i),needProxyDataSources:s}})),this.registerApp=()=>Xe(this,void 0,void 0,(function*(){var e,t,s,i;const n=null===(t=null===(e=(0,o.getAppStore)().getState())||void 0===e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.appId;if(Ye[n])return yield Ye[n];const a=`${null===(i=null===(s=(0,o.getAppStore)().getState())||void 0===s?void 0:s.appStateInBuilder)||void 0===i?void 0:i.portalUrl}/sharing/rest/oauth2/registerApp`;return Ye[n]=o.esri.restRequest.request(a,{authentication:o.SessionManager.getInstance().getSessionByUrl((0,o.getAppStore)().getState().portalUrl),httpMethod:"POST",params:{itemId:n,appType:"browser",redirect_uris:JSON.stringify([this.getAppRootUrl()])}}),yield Ye[n]})),this.createProxies=e=>Xe(this,void 0,void 0,(function*(){var t,s,i;if(!e)return yield Promise.resolve(null);const n=null===(i=null===(s=null===(t=(0,o.getAppStore)().getState())||void 0===t?void 0:t.appStateInBuilder)||void 0===s?void 0:s.appConfig)||void 0===i?void 0:i.appProxies,a={};let r=[];if(Object.keys(e).forEach((t=>{const s=e[t];if(!s)return;const o=s.hitsPerInterval,i=s.intervalSeconds,l=Ae(t,n);Ee(l,t,o,i)?a[l.id]=l:r=r.concat({sourceUrl:t,hitsPerInterval:o,intervalSeconds:i})})),0===r.length)return(0,o.Immutable)(a);De()||(yield this.registerApp());const l={referrers:[this.getAppUrl()]},p=We();return o.esri.restRequest.request(p,{authentication:o.SessionManager.getInstance().getSessionByUrl((0,o.getAppStore)().getState().portalUrl),httpMethod:"POST",params:{serviceProxyParams:l,proxies:r}}).then((e=>{var t,s;const i=(null==e?void 0:e.appProxies)||[],n=a,r=null===(s=null===(t=(0,o.getAppStore)().getState())||void 0===t?void 0:t.appStateInBuilder)||void 0===s?void 0:s.appConfig,l=null==r?void 0:r.appProxies;return i.forEach((e=>{const t=Ae(e.sourceUrl,l),s=(null==t?void 0:t.id)||o.appConfigUtils.getUniqueId(r.set("appProxies",l?l.merge(n):n),"appProxy");n[s]=Object.assign(Object.assign({},e),{id:s})})),(0,o.Immutable)(n)}))})),this.getAppRootUrl=()=>{var e;return null===(e=null===window||void 0===window?void 0:window.location)||void 0===e?void 0:e.origin},this.getAppUrl=()=>{var e,t,s,i,n,a;const r=null===(t=null===(e=(0,o.getAppStore)().getState())||void 0===e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.appId,l=null===(i=null===(s=(0,o.getAppStore)().getState())||void 0===s?void 0:s.appStateInBuilder)||void 0===i?void 0:i.appInfo,p="Web Experience Template"===(null==l?void 0:l.type),c=null===(n=o.urlUtils.getAppUrl({appId:r,isTemplate:p}))||void 0===n?void 0:n.replace(/^\//,"");return`${null===(a=this.getAppRootUrl())||void 0===a?void 0:a.replace(/\/$/,"")}/${c}`},this.onProxyConfigChange=e=>{this.setState({proxyConfigs:e})},this.onFinish=()=>{var e,t,s,i;this.setState({isLoading:!0});const n=this.state.proxyConfigs||(0,o.Immutable)({}),a=null===(s=null===(t=null===(e=(0,o.getAppStore)().getState())||void 0===e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.appConfig)||void 0===s?void 0:s.appProxies,r=a&&Object.values(a).filter((e=>{var t;let s=n[null==e?void 0:e.sourceUrl];if(o.dataSourceUtils.getDsTypeFromWholeServiceUrl(null==e?void 0:e.sourceUrl)===o.DataSourceTypes.FeatureService){const o=null===(t=null==e?void 0:e.sourceUrl)||void 0===t?void 0:t.replace("/FeatureServer","/SceneServer"),i=n[o];s=s||(null==i?void 0:i.set("sourceUrl",null==e?void 0:e.sourceUrl))}return!s||!Ee(e,s.sourceUrl,s.hitsPerInterval,s.intervalSeconds)}));Be(null==r?void 0:r.map((e=>e.proxyId)),null===(i=this.state)||void 0===i?void 0:i.getAppConfigAction()).then((()=>Xe(this,void 0,void 0,(function*(){return yield this.createProxies(n).then((e=>{var t;if(!this.__unmount){if(e){const s=null===(t=this.state)||void 0===t?void 0:t.getAppConfigAction();Object.keys(e).forEach((t=>{null==s||s.editAppProxy(e[t])})),null==s||s.exec()}this.props.onFinish().then((()=>{this.__unmount||setTimeout((()=>{this.setState({isLoading:!1},(()=>{this.props.onToggle()}))}),3e3)}),(()=>{this.__unmount||setTimeout((()=>{this.setState({isLoading:!1},(()=>{this.props.onToggle()}))}),3e3)}))}}))})))).catch((e=>{console.error("Creating proxy failed: ",e),this.setState({isLoading:!1,isError:!0},(()=>{setTimeout((()=>{this.setState({isError:!1})}),5500)}))}))},this.getTostStyle=()=>{var e,t,s,i,n,a,r,l,p,c,d;return o.css`
      & {
        height:  ${o.polished.rem(40)};
        top: ${o.polished.rem(60)};
      }
      .jimu-toast-info {
        background: ${null===(i=null===(s=null===(t=null===(e=this.props)||void 0===e?void 0:e.theme)||void 0===t?void 0:t.colors)||void 0===s?void 0:s.palette)||void 0===i?void 0:i.secondary[300]};
        line-height: ${o.polished.rem(40)};
        color: ${null===(l=null===(r=null===(a=null===(n=this.props)||void 0===n?void 0:n.theme)||void 0===a?void 0:a.colors)||void 0===r?void 0:r.palette)||void 0===l?void 0:l.dark[800]};
        font-weight: 300;
        padding: 0 ${o.polished.rem(16)};
        box-shadow: 0 0 ${o.polished.rem(10)} ${o.polished.rem(2)} ${o.polished.rgba(null===(d=null===(c=null===(p=this.props)||void 0===p?void 0:p.theme)||void 0===c?void 0:c.colors)||void 0===d?void 0:d.white,.2)};
      }
    `},this.state={getAppConfigAction:null,isLoading:!1,isError:!1,proxyConfigs:null,needProxyDataSources:null}}componentDidMount(){this.__unmount=!1,o.moduleLoader.loadModule("jimu-for-builder").then((e=>{this.__unmount||this.setState({getAppConfigAction:e.getAppConfigAction})})),this.setState({isLoading:!0}),this.getProxyConfigFromAppProxyJsons().then((e=>{this.__unmount||this.setState({proxyConfigs:e.proxyConfigs,needProxyDataSources:e.needProxyDataSources,isLoading:!1})}),(e=>{this.__unmount||this.setState({isLoading:!1}),console.error("Getting proxy config error",e)}))}componentDidUpdate(e){(!e.isOpen&&this.props.isOpen||e.appProxies!==this.props.appProxies)&&(this.setState({isLoading:!0}),this.getProxyConfigFromAppProxyJsons().then((e=>{this.__unmount||this.setState({proxyConfigs:e.proxyConfigs,needProxyDataSources:e.needProxyDataSources,isLoading:!1})}),(e=>{this.__unmount||this.setState({isLoading:!1}),console.error("Getting proxy config error",e)})))}componentWillUnmount(){this.__unmount=!0}render(){const e=this.state.proxyConfigs,t=this.state.needProxyDataSources;return(0,o.jsx)(w.Modal,{isOpen:this.props.isOpen,centered:!0,className:(0,o.classNames)({[this.props.className]:!!this.props.className}),returnfocusafterclose:"true",contentClassName:"proxy-setting-container",backdrop:"static"},(0,o.jsx)(w.ModalHeader,{className:"d-flex justify-content-between header px-30",toggle:this.props.onToggle},(0,o.jsx)("div",{className:"flex-grow-1 text-truncate"},this.props.intl.formatMessage({id:"subscriberContents",defaultMessage:w.defaultMessages.subscriberContents}))),(0,o.jsx)(w.ModalBody,{className:"d-flex px-30"},(0,o.jsx)(Qe,{onChange:this.onProxyConfigChange,proxyConfigs:e,needProxyDataSources:t})),(0,o.jsx)(w.ModalFooter,{className:"px-30"},(0,o.jsx)(w.Button,{className:"mr-2",type:"primary",onClick:this.onFinish},this.props.intl.formatMessage({id:"publish",defaultMessage:o.defaultMessages.publish})),(0,o.jsx)(w.Button,{type:"default",onClick:this.props.onCancel},this.props.intl.formatMessage({id:"cancel",defaultMessage:o.defaultMessages.cancel}))),this.state.isLoading&&(0,o.jsx)(w.Loading,{type:o.LoadingType.Secondary}),this.state.isError&&(0,o.jsx)(w.Toast,{open:this.state.isError,type:w.ToastType.Info,css:this.getTostStyle(),text:this.props.intl.formatMessage({id:"creatProxyToPublishAppError",defaultMessage:w.defaultMessages.creatProxyToPublishAppError})}))}}const et=(0,o.injectIntl)((0,b.withStyles)((0,b.withTheme)(Ze),"ProxySettingPopup")),tt=o.ReactRedux.connect(((e,t)=>{var s,o;return{appProxies:null===(o=null===(s=null==e?void 0:e.appStateInBuilder)||void 0===s?void 0:s.appConfig)||void 0===o?void 0:o.appProxies}}))(et);class st extends o.React.PureComponent{componentDidUpdate(e){this.props.pageId===e.pageId&&this.props.sizemode===e.sizemode||this.props.toggle()}getStyle(){const{theme:e}=this.props;return e&&o.css`
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
    `}render(){const e=this.props,{pageId:t,sizemode:s,dispatch:i}=e,n=function(e,t){var s={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(s[o[i]]=e[o[i]])}return s}(e,["pageId","sizemode","dispatch"]);return(0,o.jsx)(w.Popper,Object.assign({css:this.getStyle()},n))}}const ot=o.ReactRedux.connect((function(e){return{pageId:e.appRuntimeInfo.currentPageId,sizemode:e.browserSizeMode}}))(st),it=[{name:"flip",enabled:!0},{name:"preventOverflow",enabled:!0,options:{boundariesElement:"viewport",padding:10}}];class nt extends o.React.PureComponent{constructor(e){super(e),this.togglePopper=()=>{this.state.open&&this.props.onClose&&this.props.onClose()},this.state={widgetInfoList:null,open:!0,generation:0}}componentDidMount(){this.loadWidgetInfos()}componentWillUnmount(){this.loadWidgetsPromise.cancel()}loadWidgetInfos(){this.loadWidgetsPromise=o.cancelablePromise.cancelable(o.WidgetManager.getInstance().getWidgetListInfo().then((e=>{const t=e.filter((e=>this.props.isItemAccepted(e,this.props.isPlaceholder)));this.setState({generation:this.state.generation+1,widgetInfoList:t})})))}createWidgetCard(e){var t,s;return(0,o.jsx)(w.Button,{className:"d-flex align-items-start justify-content-center widget-card",key:e.name,onClick:()=>this.props.onItemSelect(e),"aria-label":e.label},(0,o.jsx)("div",{className:"d-flex flex-column w-100 h-100 widget-card--content pt-2"},(0,o.jsx)("div",{className:"d-flex justify-content-center"},(0,o.jsx)("div",{className:"widget-card-image mb-1"},(0,o.jsx)(w.Icon,{className:"w-100",autoFlip:null===(s=null===(t=e.manifest)||void 0===t?void 0:t.properties)||void 0===s?void 0:s.flipIcon,icon:"string"==typeof e.icon?e.icon:e.icon&&e.icon.svg,color:this.props.builderTheme.colors.dark}))),(0,o.jsx)("div",{className:"flex-grow-1 d-flex align-items-center"},(0,o.jsx)("div",{className:"widget-card-name w-100 text-center text-capitalize text-truncate",css:o.css`
                line-height: 1rem;
                max-height: 2.2rem;
                white-space: normal;
              `,title:e.label},e.label))))}formatMessage(e){return this.props.intl.formatMessage({id:e,defaultMessage:w.defaultMessages[e]})}getStyle(){const{builderTheme:e}=this.props;return o.css`
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
        grid-template-columns: repeat(3, minmax(0, 1fr));
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
    `}render(){if(!this.state.open)return null;const{widgetInfoList:e}=this.state,t=[],s=[];return e&&e.length>0&&e.forEach((e=>{e.manifest.widgetType===o.WidgetType.Layout?s.push(e):t.push(e)})),(0,o.jsx)(ot,{theme:this.props.builderTheme,placement:"bottom",toggle:this.togglePopper,css:this.getStyle(),version:this.state.generation,modifiers:it,reference:this.props.referenceElement,open:!0,forceLatestFocusElements:!0},(0,o.jsx)("div",{className:"shadow-lg content",ref:e=>this.contentRef=e},!this.state.widgetInfoList&&(0,o.jsx)(w.Loading,null),t.length>0&&(0,o.jsx)("div",{className:"widget-type-label"},this.formatMessage("basic")),t.length>0&&(0,o.jsx)("div",{className:"w-100 h-100 card-grid m-0"},t.map((e=>this.createWidgetCard(e)))),s.length>0&&(0,o.jsx)("div",{className:"widget-type-label"},this.formatMessage("layout")),s.length>0&&(0,o.jsx)("div",{className:"w-100 h-100 row m-0"},s.map((e=>this.createWidgetCard(e))))))}}nt.defaultProps={isPlaceholder:!1,isItemAccepted:()=>!0};const at=(0,o.injectIntl)(nt);var rt=c(96262);function lt(e){var t,s,i,n;const{template:a,onClick:r}=e,l=(0,o.getAppStore)().getState().appContext.locale,p=null!==(s=null===(t=a.i18nLabel)||void 0===t?void 0:t[l])&&void 0!==s?s:a.label,c=null!==(n=null===(i=a.i18nDescription)||void 0===i?void 0:i[l])&&void 0!==n?n:a.description,d=null!=a.gifThumbnail,u="templage_desc_"+a.name,h=o.React.useMemo((()=>o.css`
    transform: ${(0,o.getAppStore)().getState().appContext.isRTL&&a.flipThumbnail?"scaleX(-1);":""}  ;
  `),[a]);return(0,o.jsx)("div",{className:"block-item"},(0,o.jsx)(w.Tooltip,{title:c},(0,o.jsx)(w.Button,{role:"option","aria-label":p,"aria-describedby":u,onClick:r,className:"block-item--icon p-0"},(0,o.jsx)("img",{className:(0,o.classNames)("default-icon",{"multiple-icon":d}),css:h,src:a.thumbnail,width:a.thumbnailWidth/2,height:a.thumbnailHeight/2}),d&&(0,o.jsx)("img",{className:(0,o.classNames)("gif-icon",{"multiple-icon":d}),css:h,src:a.gifThumbnail}))),(0,o.jsx)("span",{"aria-hidden":!0,className:"block-item-label text-center mt-2",css:o.css`max-width: ${a.thumbnailWidth/2}px`},p),(0,o.jsx)("span",{"aria-hidden":!0,className:"sr-only",id:u},c))}function pt(e){const{templates:t,onItemSelect:s}=e,i=function(e,t){var s={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(s[o[i]]=e[o[i]])}return s}(e,["templates","onItemSelect"]),n=o.React.useMemo((()=>(0,b.getBuilderThemeVariables)()),[]),a=o.React.useMemo((()=>o.css`
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
  `),[n]);return(0,o.jsx)("div",Object.assign({css:a},i,{role:"listbox"}),t.map((e=>(0,o.jsx)(lt,{key:e.name,template:e,onClick:()=>s(e)}))))}class ct extends o.React.PureComponent{constructor(){super(...arguments),this.onTabSelect=e=>{this.props.onTabSelect(e)}}render(){const{theme:e}=this.props;return(0,o.jsx)("div",{className:"w-100 h-100"},(0,o.jsx)("h3",{className:"pt-3 px-4 mb-3 text-dark-600 text-truncate",title:this.props.formatMessage("addPage")},this.props.formatMessage("addPage")),(0,o.jsx)(w.Tabs,{defaultValue:"fullScreenApp",fill:!0,type:"underline",css:o.css`
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
          `,onChange:this.onTabSelect},(0,o.jsx)(w.Tab,{id:"fullScreenApp",title:this.props.formatMessage("fullScreenApp"),className:w.FOCUSABLE_CONTAINER_CLASS},(0,o.jsx)(pt,{className:(0,o.classNames)({[w.FOCUSABLE_CONTAINER_CLASS]:"fullScreenApp"===this.props.tabId}),templates:(0,rt.getFullScreenPageTemplates)(),onItemSelect:this.props.onItemSelect})),(0,o.jsx)(w.Tab,{id:"scrollingPage",title:this.props.formatMessage("scrollingPage"),className:w.FOCUSABLE_CONTAINER_CLASS},(0,o.jsx)(pt,{className:(0,o.classNames)({[w.FOCUSABLE_CONTAINER_CLASS]:"scrollingPage"===this.props.tabId}),templates:(0,rt.getScrollingPageTemplates)(),onItemSelect:this.props.onItemSelect}))))}}const dt=[{name:"preventOverflow",options:{boundariesElement:"viewport",padding:{bottom:20}}}];class ut extends o.React.PureComponent{constructor(e){super(e),this.togglePopper=()=>{var e;this.state.open&&this.props.onClose&&this.props.onClose(),this.state.open&&(null===(e=this.props.referenceElement)||void 0===e||e.focus()),this.setState({open:!this.state.open})},this.tabSelect=e=>{this.setState({tabId:e})},this.onItemSelect=e=>{this.props.onClose(),this.props.onItemSelect(e)},this.state={open:!0,tabId:"fullScreenApp"}}render(){const{referenceElement:e,theme:t}=this.props;return(0,o.jsx)(ot,{placement:"bottom",theme:this.props.theme,reference:e,offset:[0,10],open:!0,toggle:this.togglePopper,showArrow:!0,modifiers:dt,forceLatestFocusElements:!0},(0,o.jsx)("div",{css:o.css`
            max-height: 640px;
            height: calc(100vh - 150px);
            overflow: hidden;
          `},(0,o.jsx)(ct,{theme:t,tabId:this.state.tabId,onTabSelect:this.tabSelect,formatMessage:this.props.formatMessage,onItemSelect:this.onItemSelect})))}}const ht=[{name:"preventOverflow",options:{altAxis:!0,boundariesElement:"viewport",padding:{bottom:20}}},{name:"flip",options:{fallbackPlacements:["right","left"]}}];function gt(e){const{title:t,templates:s,referenceElement:i,onItemSelect:n,onClose:a}=e,r=o.React.useMemo((()=>(0,b.getBuilderThemeVariables)()),[]),l=o.React.useMemo((()=>o.css`
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
  `),[r,t]),p=o.React.useCallback((()=>{null==a||a(),"function"==typeof(null==i?void 0:i.focus)&&o.lodash.defer((()=>{null==i||i.focus()}))}),[a,i]);return(0,o.jsx)(ot,{placement:"bottom",theme:r,css:l,reference:i,offset:[0,10],toggle:p,open:!0,showArrow:!0,modifiers:ht},t&&(0,o.jsx)("h3",{className:"text-dark-600 text-truncate title px-4 pt-3"},t),(0,o.jsx)("div",{className:"template-content"},(0,o.jsx)(pt,{templates:s,onItemSelect:n})))}var mt=c(55339),ft=c.n(mt);const vt=e=>{const{className:t}=e,s=function(e,t){var s={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(s[o[i]]=e[o[i]])}return s}(e,["className"]),i=(0,o.classNames)("jimu-icon-component",t);return o.React.createElement(w.Icon,Object.assign({className:i,icon:ft()},s))};var yt=c(59216),bt=c.n(yt);const wt=e=>{const{className:t}=e,s=function(e,t){var s={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(s[o[i]]=e[o[i]])}return s}(e,["className"]),i=(0,o.classNames)("jimu-icon-component",t);return o.React.createElement(w.Icon,Object.assign({className:i,icon:bt()},s))};var xt=c(34750),St=c.n(xt);const kt=e=>{const{className:t}=e,s=function(e,t){var s={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(s[o[i]]=e[o[i]])}return s}(e,["className"]),i=(0,o.classNames)("jimu-icon-component",t);return o.React.createElement(w.Icon,Object.assign({className:i,icon:St()},s))};class Pt extends o.React.PureComponent{constructor(e){super(e),this.initData=()=>{if(Array.isArray(this.props.value)&&this.props.value.length)return!1;const e=this.deepClone(this.state.option);e.ruleOptionName=this.props.intl.formatMessage({id:"option",defaultMessage:w.defaultMessages.option})+0;const t=[e];this.props.onChange(t)},this.onOptionChange=(e,t,s,o)=>{const i=this.deepClone(this.props.value);i[t].rule[e][s]=o,this.props.onChange(i,t)},this.onSelectChange=(e,t,s)=>{const o=e[0];if(!o)return;const i=this.deepClone(this.props.value),n=o.name;i[s].rule[t].jimuFieldName=n,this.props.onChange(i,s)},this.addOption=()=>{const e=Array.isArray(this.props.value),t=e?this.props.value.length:0,s=this.createOptionText(t),o=this.deepClone(this.state.option);o.ruleOptionName=s;const i=e?this.deepClone(this.props.value):[];i.push(o),this.props.onChange(i)},this.createOptionText=e=>{const t=this.props.intl.formatMessage({id:"option",defaultMessage:w.defaultMessages.option})+e;if(!this.isOptionNameRepeat(t))return t;const s=e+1;return this.createOptionText(s)},this.deleteOption=e=>{const t=this.deepClone(this.props.value);t.splice(e,1),this.props.onChange(t)},this.deleteAll=()=>{this.props.onChange([])},this.toggleOptionNameDisplay=(e,t)=>{const s=this.deepClone(this.props.value);let o=s[e].isEditOptionName;if(o=!!o,s[e].isEditOptionName=!o,t){const o=t;!this.isOptionNameRepeat(o)&&o&&(s[e].ruleOptionName=o)}this.props.onChange(s)},this.isOptionNameRepeat=e=>{if(!Array.isArray(this.props.value))return!1;let t=!1;return this.props.value.forEach((s=>{s.ruleOptionName===e&&(t=!0)})),t},this.deepClone=e=>{const t=Array.isArray(e)?[]:{};for(const s in e){const o=("object"==typeof e[s]||"function"==typeof e[s])&&null!==e[s];t[s]=o?this.deepClone(e[s]):e[s]}return t},this.setInputRef=e=>{e&&(e.select(),e.focus())},this.createRuleOptionElement=(e,t,s,i)=>{const n=t.jimuFieldName?(0,o.Immutable)([t.jimuFieldName]):(0,o.Immutable)([]);return(0,o.jsx)("div",{className:"select-down-con",key:t.jimuFieldName||s},this.props.useDataSource&&(0,o.jsx)("div",{className:"sort-field-selector"},(0,o.jsx)(Me.FieldSelector,{useDataSources:e,onChange:(e,t)=>{this.onSelectChange(e,s,i)},selectedFields:n,isSearchInputHidden:!0,isDataSourceDropDownHidden:!0,useDropdown:!0})),[{getTitle:()=>this.nls("ascending"),order:o.OrderRule.Asc,getIcon:()=>c(70502)},{getTitle:()=>this.nls("decending"),order:o.OrderRule.Desc,getIcon:()=>c(78115)}].map(((e,n,a)=>(0,o.jsx)(w.Button,{key:n,title:e.getTitle(),type:t.order===e.order?"primary":"secondary",className:"sort-button "+(this.props.singleRowItemOnly&&t.order!==e.order?"collapse":""),onClick:()=>{this.onOptionChange(s,i,"order",this.props.singleRowItemOnly?[...a,a[0]][n+1].order:e.order)}},(0,o.jsx)(w.Icon,{size:"12",icon:e.getIcon(),className:"sort-arrow-down-icon"})))))},this.createOptionNameElement=(e,t)=>{const s=e.ruleOptionName,i=this.props.intl.formatMessage({id:"optionNamePlaceholder",defaultMessage:w.defaultMessages.optionNamePlaceholder}),n=(0,o.jsx)(w.TextInput,{type:"text",defaultValue:s,onAcceptValue:e=>{this.toggleOptionNameDisplay(t,e)},ref:e=>{this.setInputRef(e)},placeholder:i});return(0,o.jsx)("div",{className:"option-name d-flex","aria-label":s},e.isEditOptionName?n:(0,o.jsx)("span",{title:s,onDoubleClick:()=>{this.toggleOptionNameDisplay(t)}},s),(0,o.jsx)(w.Button,{size:"sm",type:"tertiary",icon:!0,className:"padding-0 option-name-icon-con",title:this.nls("edit"),onClick:()=>{this.toggleOptionNameDisplay(t)}},(0,o.jsx)(wt,{size:"s",className:"option-name-icon"})))},this.createOptionElement=(e,t,s)=>{let i;i=(0,o.jsx)("div",{className:"close-con text-right"},(0,o.jsx)(w.Button,{size:"sm",icon:!0,type:"tertiary",className:"padding-0",title:this.nls("deleteOption"),onClick:()=>{this.deleteOption(s)}},(0,o.jsx)(vt,{size:this.props.singleRowItemOnly?14:12,className:"sort-arrow-down-icon"})));const n=()=>t.rule.map(((t,o)=>this.createRuleOptionElement(e,t,o,s)));return(0,o.jsx)("div",{className:"select-con",key:s},this.props.singleRowItemOnly&&(0,o.jsx)(o.React.Fragment,null,(0,o.jsx)("div",{className:"option-name-con"},(0,o.jsx)(w.Icon,{size:14,icon:c(17720)}),n(),i))||(0,o.jsx)(o.React.Fragment,null,(0,o.jsx)("div",{className:"option-name-con"},(()=>this.createOptionNameElement(t,s))(),i),n()))},this.nls=e=>this.props.intl?this.props.intl.formatMessage({id:e,defaultMessage:w.defaultMessages[e]}):e,this.onDataSourceCreated=e=>{},this.state={option:{ruleOptionName:"",isEditOptionName:!1,rule:[{jimuFieldName:"",order:o.OrderRule.Asc}]}}}componentDidMount(){this.initData()}componentDidUpdate(e,t){var s,o,i;(null===(s=null==e?void 0:e.useDataSource)||void 0===s?void 0:s.dataSourceId)!==(null===(i=null===(o=this.props)||void 0===o?void 0:o.useDataSource)||void 0===i?void 0:i.dataSourceId)&&Promise.resolve(!0).then((()=>{this.initData()}))}render(){const{value:e}=this.props,t=this.props.intl.formatMessage({id:"invalidExpression",defaultMessage:w.defaultMessages.invalidExpression});return(0,o.jsx)("div",{className:(0,o.classNames)("sort-con",this.props.singleRowItemOnly&&"single-row-item",{[this.props.className]:!!this.props.className})},(0,o.jsx)("div",null,(0,o.jsx)(w.Button,{type:"tertiary",className:"add-option-btn"},(0,o.jsx)(kt,{size:"s",className:"add-option-icon"}),(0,o.jsx)("span",{onClick:this.addOption},this.props.intl.formatMessage({id:"addOption",defaultMessage:w.defaultMessages.addOption}))),(0,o.jsx)(o.DataSourceComponent,{useDataSource:this.props.useDataSource,onDataSourceCreated:this.onDataSourceCreated},(s=>Array.isArray(e)?(this.props.optionRenderFunction||(()=>e.map(((e,t)=>{var s;return this.createOptionElement((0,o.Immutable)([null===(s=this.props.useDataSource)||void 0===s?void 0:s.asMutable({deep:!0})]),e,t)}))))(this.props,this.createOptionElement):t)),Array.isArray(e)&&0===e.length&&(0,o.jsx)("div",{className:"no-sort-remind"},(0,o.jsx)("div",null,this.props.intl.formatMessage({id:"noOptionRemindText",defaultMessage:w.defaultMessages.noOptionRemindText})),(0,o.jsx)("div",null,this.props.intl.formatMessage({id:"pleaceAddOne",defaultMessage:w.defaultMessages.pleaceAddOne})))))}}const Ct=(0,b.withStyles)((0,o.injectIntl)(Pt),"SortSetting");var It=c(60843),jt=c.n(It);const Ot=e=>{const{className:t}=e,s=function(e,t){var s={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(s[o[i]]=e[o[i]])}return s}(e,["className"]),i=(0,o.classNames)("jimu-icon-component",t);return o.React.createElement(w.Icon,Object.assign({className:i,icon:jt()},s))};var Nt=c(18656),Mt=c.n(Nt);const Tt=e=>{const{className:t}=e,s=function(e,t){var s={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(s[o[i]]=e[o[i]])}return s}(e,["className"]),i=(0,o.classNames)("jimu-icon-component",t);return o.React.createElement(w.Icon,Object.assign({className:i,icon:Mt()},s))};const Lt=e=>{const t=w.hooks.useTranslate(),{vertical:s=!1,onChange:i,autoFlip:n=!0,className:a,size:r="sm"}=e,l=function(e,t){var s={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(s[o[i]]=e[o[i]])}return s}(e,["vertical","onChange","autoFlip","className","size"]);return o.React.createElement(w.AdvancedButtonGroup,Object.assign({size:r,className:(0,o.classNames)("setting--direction-selector",a)},l),o.React.createElement(w.Button,{size:r,title:t("horizontal"),type:"default",icon:!0,active:!s,onClick:()=>i(!1)},o.React.createElement(Ot,{autoFlip:n})),o.React.createElement(w.Button,{size:r,title:t("vertical"),type:"default",icon:!0,active:s,onClick:()=>i(!0)},o.React.createElement(Tt,null)))};var Rt;!function(e){e.Auto="AUTO",e.Custom="CUSTOM"}(Rt||(Rt={}));const At=c(95327);class Et extends o.React.PureComponent{constructor(e){super(e),this.toggleDropdown=()=>{this.setState((e=>({dropdownOpen:!e.dropdownOpen})))},this.state={dropdownOpen:!1},this._onAutoSelected=this.onSelect.bind(this,Rt.Auto),this._onCustomSelected=this.onSelect.bind(this,Rt.Custom)}onSelect(e){this.props.mode!==e&&this.props.onChange(e)}getStyle(){return o.css`
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
    `}autoInput(){return(0,o.jsx)(w.Input,{style:{width:"110px"},css:o.css`
          background-color: var(--light-600);
          border-color: var(--light-600);
          color: var(--black);
          height: 1.625rem;
          border-width: 0;
          padding: 0 0.25rem;
        `,disabled:!0,value:this.props.intl.formatMessage({id:"auto"})})}render(){const{mode:e,intl:t}=this.props,s=t.formatMessage({id:"auto"}),i=t.formatMessage({id:"custom"});return(0,o.jsx)("div",{className:"d-flex",css:this.getStyle()},(0,o.jsx)(w.Dropdown,{className:"auto-dropdown",isOpen:this.state.dropdownOpen,toggle:this.toggleDropdown},(0,o.jsx)(w.DropdownButton,{icon:!0}),(0,o.jsx)(w.DropdownMenu,null,(0,o.jsx)(w.DropdownItem,{onClick:this._onAutoSelected},(0,o.jsx)("span",{css:o.css`width: 1rem;`},e===Rt.Auto&&(0,o.jsx)(w.Icon,{icon:At,size:12})),s),(0,o.jsx)(w.DropdownItem,{onClick:this._onCustomSelected},(0,o.jsx)("span",{css:o.css`width: 1rem;`},e===Rt.Custom&&(0,o.jsx)(w.Icon,{icon:At,size:12})),i))),e===Rt.Auto&&this.autoInput(),e===Rt.Custom&&this.props.children)}}const Dt=(0,o.injectIntl)(Et),$t=e=>{const{title:t,children:s,selected:i,onClick:n}=e,a=(()=>{var e,t,s;const i=(0,b.useTheme)(),n=null===(e=null==i?void 0:i.colors)||void 0===e?void 0:e.palette.primary[600],a=null===(t=null==i?void 0:i.colors)||void 0===t?void 0:t.palette.light[200],r=null===(s=null==i?void 0:i.colors)||void 0===s?void 0:s.black;return o.React.useMemo((()=>o.css`
      width: 100%;
      height:  ${o.polished.rem(50)};
      padding: ${o.polished.rem(8)}  ${o.polished.rem(12)};
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
  `),[n,a,r])})();return(0,o.jsx)("div",{css:a,title:t,className:(0,o.classNames)("quick-style-item",{selected:i}),onClick:n},(0,o.jsx)("div",{className:"overlay"}),s)};const Bt=[{name:"preventOverflow",options:{altAxis:!0}},{name:"flip",options:{fallbackPlacements:["bottom-end","top-end"]}}],Ut=e=>{const{open:t,reference:s,onClose:i,placement:n="right-start",children:a}=e,r=function(e,t){var s={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(s[o[i]]=e[o[i]])}return s}(e,["open","reference","onClose","placement","children"]),l=(()=>{var e,t,s,i;const n=(0,b.getBuilderThemeVariables)(),a=null===(e=null==n?void 0:n.colors)||void 0===e?void 0:e.palette.dark[600],r=null===(t=null==n?void 0:n.colors)||void 0===t?void 0:t.palette.dark[800],l=null===(s=null==n?void 0:n.colors)||void 0===s?void 0:s.palette.light[300],p=null===(i=null==n?void 0:n.colors)||void 0===i?void 0:i.palette.light[600];return o.React.useMemo((()=>o.css`
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
    `),[a,r,l,p])})(),p=w.hooks.useTranslate(w.defaultMessages);return(0,o.jsx)(w.Popper,Object.assign({css:l,open:t,className:"shadow-2",reference:s,modifiers:Bt,placement:n},r),(0,o.jsx)(w.PanelHeader,{className:"px-3 py-2",title:p("quickStyle"),onClose:i}),a)};function zt(e){var t,s;const i=(0,o.getAppStore)().getState().appStateInBuilder,n=i.appRuntimeInfo.currentPageId,a=i.appRuntimeInfo.currentDialogId;let r=i.appRuntimeInfo.dialogInfos||(0,o.Immutable)({});const l=i.appConfig.dialogs,p=i.appConfig.pages,c={canClose:!0,checked:!0,isClosed:!0};return a&&((null===(t=l[a])||void 0===t?void 0:t.isSplash)&&(r=r.set(a,c)),p[n].autoOpenDialogId&&(r=r.set(n+"-"+p[n].autoOpenDialogId,c)),e&&Object.keys(p).forEach((e=>{p[e].autoOpenDialogId===a&&(r=r.set(e+"-"+a,c))}))),(null===(s=l[a])||void 0===s?void 0:s.isSplash)||Object.keys(l).some((e=>{l[e].isSplash&&(r=r.set(e,c))})),e&&r&&Object.keys(r).forEach((t=>{t!==e&&t!==n+"-"+e||(r=r.set(t,{canClose:Wt(e),checked:!1,isClosed:!1}))})),r}function Wt(e){const t=(0,o.getAppStore)().getState().appStateInBuilder.appConfig.dialogs[e];return!t.interactionType||!t.confirmBeforeClose}function Ft(e){const t=(0,o.getAppStore)().getState().appStateInBuilder,s=t.appRuntimeInfo.currentPageId,i=t.appRuntimeInfo.currentDialogId;if(y.builderAppSync.publishChangeSelectionToApp(null),i){const e=zt();y.builderAppSync.publishDialogInfosChangeToApp(e),y.builderAppSync.publishDialogChangeToApp(null)}s!==e&&y.builderAppSync.publishPageChangeToApp(e),y.builderAppSync.publichActivePagePartChangeToApp(o.PagePart.Body)}function _t(e){if(y.builderAppSync.publishChangeSelectionToApp(null),e!==(0,o.getAppStore)().getState().appStateInBuilder.appRuntimeInfo.currentDialogId){y.builderAppSync.publishDialogChangeToApp(e);const t=zt(e);y.builderAppSync.publishDialogInfosChangeToApp(t),y.builderAppSync.publichActivePagePartChangeToApp(null)}}(0,b.registerStyles)("jimu-ui/advanced/setting-components/",e)})(),d})())}}}));