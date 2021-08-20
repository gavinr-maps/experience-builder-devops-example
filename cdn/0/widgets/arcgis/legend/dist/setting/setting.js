System.register(["jimu-core","jimu-ui","jimu-ui/advanced/setting-components","jimu-arcgis","jimu-layouts/layout-runtime","jimu-ui/basic/color-picker"],(function(e){var t,s,o,i,a,n;return{setters:[function(e){t=e},function(e){s=e},function(e){o=e},function(e){i=e},function(e){a=e},function(e){n=e}],execute:function(){e(function(e){var t={};function s(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,s),i.l=!0,i.exports}return s.m=e,s.c=t,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(o,i,function(t){return e[t]}.bind(null,i));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=516)}({0:function(e,s){e.exports=t},1:function(e,t){e.exports=s},133:function(e,t){e.exports='<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M6.828.535l4.966 11.01A.323.323 0 0111.5 12a.776.776 0 01-.707-.455L9.182 8H2.818l-1.611 3.545A.776.776 0 01.5 12a.323.323 0 01-.294-.456L5.172.535a.909.909 0 011.656 0zM6 1L3.272 7h5.456L6 1z" fill="#000" fill-rule="nonzero"></path></svg>'},2:function(e,t){e.exports=o},28:function(e,t){e.exports=n},4:function(e,t){e.exports=i},516:function(e,t,s){"use strict";s.r(t),s.d(t,"CardLayout",(function(){return f})),s.d(t,"default",(function(){return m}));var o=s(0),i=s(1),a=s(2),n=s(4),r=s(7),c=s(28),l="Source",d="Options",p="Show basemap legends",u="Use card style",g="Select a Map widget";const h={icon:s(133)};var f;!function(e){e.Auto="auto",e.SideBySide="side-by-side",e.Stack="stack"}(f||(f={}));class m extends o.React.PureComponent{constructor(e){super(e),this.supportedDsTypes=Object(o.Immutable)([n.DataSourceTypes.WebMap,n.DataSourceTypes.WebScene]),this.getPortUrl=()=>Object(o.getAppStore)().getState().portalUrl,this.onOptionsChanged=(e,t)=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.set(t,e)}),"cardStyle"===t&&this.setState({cardStyle:e})},this.onRadioChange=e=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.set("cardLayout",e)}),this.setState({cardLayoutValue:e})},this.onToggleUseDataEnabled=e=>{this.props.onSettingChange({id:this.props.id,useDataSourcesEnabled:e})},this.onDataSourceChange=e=>{e&&this.props.onSettingChange({id:this.props.id,useDataSources:e})},this.onMapWidgetSelected=e=>{this.props.onSettingChange({id:this.props.id,useMapWidgetIds:e})},this.onUseCustomStyleChanged=e=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.setIn(["style","useCustom"],e)})},this.onFontStyleChanged=e=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.setIn(["style","fontColor"],e)})},this.onBackgroundStyleChange=e=>{var t,s,a;const n={color:e,fillType:i.FillType.FILL};let r=Object(o.Immutable)(null!==(a=null===(s=null===(t=this.props.config)||void 0===t?void 0:t.style)||void 0===s?void 0:s.background)&&void 0!==a?a:{});for(const e in n)switch(e){case"fillType":r.fillType!==n[e]&&(r=r.set("fillType",n[e]));break;case"color":r=r.set("color",n[e]);break;case"image":r=r.set("image",n[e])}this.props.onSettingChange({id:this.props.id,config:this.props.config.setIn(["style","background"],r)})},this.state={cardStyle:this.props.config.cardStyle||!1,cardLayoutValue:this.props.config.cardLayout||f.Auto}}getDefaultStyleConfig(){return{useCustom:!1,background:{color:"",fillType:i.FillType.FILL},fontColor:""}}getStyleConfig(){return this.props.config.style&&this.props.config.style.useCustom?this.props.config.style:this.getDefaultStyleConfig()}render(){var e,t,s,n,m;let b,j=null;return this.state.cardStyle&&(j=Object(o.jsx)("div",{className:"card-layout-content pl-2"},Object(o.jsx)("div",{className:"w-100 legend-tools"},Object(o.jsx)("div",{className:"legend-tools-item card-style-radio"},Object(o.jsx)(i.Radio,{id:"auto",style:{cursor:"pointer"},name:"auto",onChange:e=>this.onRadioChange(f.Auto),checked:this.state.cardLayoutValue===f.Auto}),Object(o.jsx)(i.Label,{style:{cursor:"pointer"},for:"auto",className:"ml-1"},this.props.intl.formatMessage({id:"auto",defaultMessage:"Auto"})))),Object(o.jsx)("div",{className:"w-100 legend-tools"},Object(o.jsx)("div",{className:"legend-tools-item card-style-radio"},Object(o.jsx)(i.Radio,{id:"side-by-side",style:{cursor:"pointer"},name:"side-by-side",onChange:e=>this.onRadioChange(f.SideBySide),checked:this.state.cardLayoutValue===f.SideBySide}),Object(o.jsx)(i.Label,{style:{cursor:"pointer"},for:"side-by-side",className:"ml-1"},this.props.intl.formatMessage({id:"sideBySide",defaultMessage:i.defaultMessages.sideBySide})))),Object(o.jsx)("div",{className:"w-100 legend-tools"},Object(o.jsx)("div",{className:"legend-tools-item card-style-radio"},Object(o.jsx)(i.Radio,{id:"stack",style:{cursor:"pointer"},name:"stack",onChange:e=>this.onRadioChange(f.Stack),checked:this.state.cardLayoutValue===f.Stack}),Object(o.jsx)(i.Label,{style:{cursor:"pointer"},for:"stack",className:"ml-1"},this.props.intl.formatMessage({id:"stack",defaultMessage:r.defaultMessages.stack})))))),b=(null===(e=this.props.config.style)||void 0===e?void 0:e.useCustom)?"block":"none",Object(o.jsx)("div",{css:(y=this.props.theme,o.css`
    .widget-setting-legend{
      font-weight: lighter;
      font-size: 13px;

      .source-descript {
        color: ${y.colors.palette.dark[600]};
      }

      .webmap-thumbnail{
        cursor: auto;
        width: 100%;
        height: 120px;
        overflow: hidden;
        padding: 1px;
        border: ${o.polished.rem(2)} solid initial;
        img, div{
          width: 100%;
          height: 100%;
        }
      }

      .card-layout-content{
        width: 100%;
      }

      .legend-tools{
        .legend-tools-item{
          display: flex;
          margin-bottom: 8px;
        }
      }

      .advanced-setting-row .jimu-widget-setting--row-label {
        color: #c5c5c5;
        font-size: 0.875rem;
      }

      .map-selector-section .component-map-selector .form-control{
        width: 100%;
      }

      .jimu-builder--background-setting .background-image {
        display: none;
      }

      .jimu-builder--background-setting .background-image-fill-type {
        display: none;
      }
    }
  `)},Object(o.jsx)("div",{className:"widget-setting-legend"},Object(o.jsx)(a.SettingSection,{className:"map-selector-section",title:this.props.intl.formatMessage({id:"sourceLabel",defaultMessage:l})},Object(o.jsx)(a.SettingRow,{label:Object(o.jsx)(o.FormattedMessage,{id:"selectMapWidget",defaultMessage:g})}),Object(o.jsx)(a.SettingRow,null,Object(o.jsx)(a.JimuMapViewSelector,{onSelect:this.onMapWidgetSelected,useMapWidgetIds:this.props.useMapWidgetIds}))),Object(o.jsx)(a.SettingSection,{title:this.props.intl.formatMessage({id:"options",defaultMessage:d})},Object(o.jsx)(a.SettingRow,{label:Object(o.jsx)(o.FormattedMessage,{id:"showBaseMap",defaultMessage:p})},Object(o.jsx)(i.Switch,{className:"can-x-switch",checked:this.props.config&&this.props.config.showBaseMap||!1,"data-key":"showBaseMap",onChange:e=>{this.onOptionsChanged(e.target.checked,"showBaseMap")}})),Object(o.jsx)(a.SettingRow,{label:Object(o.jsx)(o.FormattedMessage,{id:"cardStyle",defaultMessage:u})},Object(o.jsx)(i.Switch,{className:"can-x-switch",checked:this.props.config&&this.props.config.cardStyle||!1,"data-key":"cardStyle",onChange:e=>{this.onOptionsChanged(e.target.checked,"cardStyle")}})),Object(o.jsx)(a.SettingRow,{flow:"wrap"},j)),Object(o.jsx)(a.SettingSection,null,Object(o.jsx)(a.SettingRow,{className:"advanced-setting-row",label:Object(o.jsx)(o.FormattedMessage,{id:"advance",defaultMessage:"Advanced"})},Object(o.jsx)(i.Switch,{className:"can-x-switch",checked:this.getStyleConfig().useCustom||!1,"data-key":"showBaseMap",onChange:e=>{this.onUseCustomStyleChanged(e.target.checked)}})),Object(o.jsx)("div",{className:"mt-3",style:{display:b}},Object(o.jsx)(a.SettingRow,{label:Object(o.jsx)(o.FormattedMessage,{id:"font",defaultMessage:"Font"})},Object(o.jsx)(c.ThemeColorPicker,{pickerBlockProps:h,specificTheme:this.props.appTheme,value:this.getStyleConfig().fontColor||(null===(n=null===(s=null===(t=this.props.appTheme.arcgis.widgets.legend.variants)||void 0===t?void 0:t.default)||void 0===s?void 0:s.root)||void 0===n?void 0:n.color)||"",onChange:this.onFontStyleChanged})),Object(o.jsx)(a.SettingRow,{label:Object(o.jsx)(o.FormattedMessage,{id:"background",defaultMessage:"Background"})},Object(o.jsx)(c.ThemeColorPicker,{specificTheme:this.props.appTheme,value:(null===(m=this.getStyleConfig().background)||void 0===m?void 0:m.color)||this.props.appTheme.surfaces[1].bg||"",onChange:this.onBackgroundStyleChange}))))));var y}}m.mapExtraStateProps=e=>({dsJsons:e.appStateInBuilder.appConfig.dataSources,appTheme:e&&e.appStateInBuilder&&e.appStateInBuilder.theme})},7:function(e,t){e.exports=a}}))}}}));