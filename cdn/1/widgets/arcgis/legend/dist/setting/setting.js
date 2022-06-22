System.register(["jimu-core","jimu-ui","jimu-ui/advanced/setting-components","jimu-arcgis","jimu-layouts/layout-runtime","jimu-ui/basic/color-picker"],(function(e,t){var s={},o={},i={},a={},n={},r={};return{setters:[function(e){s.FormattedMessage=e.FormattedMessage,s.Immutable=e.Immutable,s.React=e.React,s.css=e.css,s.getAppStore=e.getAppStore,s.jsx=e.jsx,s.polished=e.polished},function(e){o.FillType=e.FillType,o.Label=e.Label,o.Radio=e.Radio,o.Switch=e.Switch,o.defaultMessages=e.defaultMessages},function(e){i.MapWidgetSelector=e.MapWidgetSelector,i.SettingRow=e.SettingRow,i.SettingSection=e.SettingSection},function(e){a.DataSourceTypes=e.DataSourceTypes},function(e){n.defaultMessages=e.defaultMessages},function(e){r.ThemeColorPicker=e.ThemeColorPicker}],execute:function(){e((()=>{var e={38275:e=>{e.exports='<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="m6.828.535 4.966 11.01A.323.323 0 0 1 11.5 12a.776.776 0 0 1-.707-.455L9.182 8H2.818l-1.611 3.545A.776.776 0 0 1 .5 12a.323.323 0 0 1-.294-.456L5.172.535a.909.909 0 0 1 1.656 0ZM6 1 3.272 7h5.456L6 1Z" fill="#000" fill-rule="nonzero"></path></svg>'},26826:e=>{"use strict";e.exports=a},48891:e=>{"use strict";e.exports=s},74758:e=>{"use strict";e.exports=n},30726:e=>{"use strict";e.exports=o},77756:e=>{"use strict";e.exports=i},41362:e=>{"use strict";e.exports=r}},t={};function l(s){var o=t[s];if(void 0!==o)return o.exports;var i=t[s]={exports:{}};return e[s](i,i.exports,l),i.exports}l.d=(e,t)=>{for(var s in t)l.o(t,s)&&!l.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.p="";var d={};return l.p=window.jimuConfig.baseUrl,(()=>{"use strict";l.r(d),l.d(d,{CardLayout:()=>r,default:()=>c});var e=l(48891),t=l(30726),s=l(77756),o=l(26826),i=l(74758),a=l(41362);const n=l(38275);var r;!function(e){e.Auto="auto",e.SideBySide="side-by-side",e.Stack="stack"}(r||(r={}));class c extends e.React.PureComponent{constructor(s){super(s),this.supportedDsTypes=(0,e.Immutable)([o.DataSourceTypes.WebMap,o.DataSourceTypes.WebScene]),this.getPortUrl=()=>(0,e.getAppStore)().getState().portalUrl,this.onOptionsChanged=(e,t)=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.set(t,e)}),"cardStyle"===t&&this.setState({cardStyle:e})},this.onRadioChange=e=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.set("cardLayout",e)}),this.setState({cardLayoutValue:e})},this.onToggleUseDataEnabled=e=>{this.props.onSettingChange({id:this.props.id,useDataSourcesEnabled:e})},this.onDataSourceChange=e=>{e&&this.props.onSettingChange({id:this.props.id,useDataSources:e})},this.onMapWidgetSelected=e=>{this.props.onSettingChange({id:this.props.id,useMapWidgetIds:e})},this.onUseCustomStyleChanged=e=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.setIn(["style","useCustom"],e)})},this.onFontStyleChanged=e=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.setIn(["style","fontColor"],e)})},this.onBackgroundStyleChange=s=>{var o,i,a;const n={color:s,fillType:t.FillType.FILL};let r=(0,e.Immutable)(null!==(a=null===(i=null===(o=this.props.config)||void 0===o?void 0:o.style)||void 0===i?void 0:i.background)&&void 0!==a?a:{});for(const e in n)switch(e){case"fillType":r.fillType!==n[e]&&(r=r.set("fillType",n[e]));break;case"color":r=r.set("color",n[e]);break;case"image":r=r.set("image",n[e])}this.props.onSettingChange({id:this.props.id,config:this.props.config.setIn(["style","background"],r)})},this.state={cardStyle:this.props.config.cardStyle||!1,cardLayoutValue:this.props.config.cardLayout||r.Auto}}getDefaultStyleConfig(){return{useCustom:!1,background:{color:"",fillType:t.FillType.FILL},fontColor:""}}getStyleConfig(){return this.props.config.style&&this.props.config.style.useCustom?this.props.config.style:this.getDefaultStyleConfig()}render(){var o,l,d,c,g;let p,u=null;return this.state.cardStyle&&(u=(0,e.jsx)("div",{className:"card-layout-content pl-2"},(0,e.jsx)("div",{className:"w-100 legend-tools"},(0,e.jsx)("div",{className:"legend-tools-item card-style-radio"},(0,e.jsx)(t.Radio,{id:"auto",style:{cursor:"pointer"},name:"auto",onChange:e=>this.onRadioChange(r.Auto),checked:this.state.cardLayoutValue===r.Auto}),(0,e.jsx)(t.Label,{style:{cursor:"pointer"},for:"auto",className:"ml-1"},this.props.intl.formatMessage({id:"auto",defaultMessage:"Auto"})))),(0,e.jsx)("div",{className:"w-100 legend-tools"},(0,e.jsx)("div",{className:"legend-tools-item card-style-radio"},(0,e.jsx)(t.Radio,{id:"side-by-side",style:{cursor:"pointer"},name:"side-by-side",onChange:e=>this.onRadioChange(r.SideBySide),checked:this.state.cardLayoutValue===r.SideBySide}),(0,e.jsx)(t.Label,{style:{cursor:"pointer"},for:"side-by-side",className:"ml-1"},this.props.intl.formatMessage({id:"sideBySide",defaultMessage:t.defaultMessages.sideBySide})))),(0,e.jsx)("div",{className:"w-100 legend-tools"},(0,e.jsx)("div",{className:"legend-tools-item card-style-radio"},(0,e.jsx)(t.Radio,{id:"stack",style:{cursor:"pointer"},name:"stack",onChange:e=>this.onRadioChange(r.Stack),checked:this.state.cardLayoutValue===r.Stack}),(0,e.jsx)(t.Label,{style:{cursor:"pointer"},for:"stack",className:"ml-1"},this.props.intl.formatMessage({id:"stack",defaultMessage:i.defaultMessages.stack})))))),p=(null===(o=this.props.config.style)||void 0===o?void 0:o.useCustom)?"block":"none",(0,e.jsx)("div",{css:(h=this.props.theme,e.css`
    .widget-setting-legend{
      font-weight: lighter;
      font-size: 13px;

      .source-descript {
        color: ${h.colors.palette.dark[600]};
      }

      .webmap-thumbnail{
        cursor: auto;
        width: 100%;
        height: 120px;
        overflow: hidden;
        padding: 1px;
        border: ${e.polished.rem(2)} solid initial;
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
  `)},(0,e.jsx)("div",{className:"widget-setting-legend"},(0,e.jsx)(s.SettingSection,{className:"map-selector-section",title:this.props.intl.formatMessage({id:"sourceLabel",defaultMessage:"Source"})},(0,e.jsx)(s.SettingRow,{label:(0,e.jsx)(e.FormattedMessage,{id:"selectMapWidget",defaultMessage:"Select a Map widget"})}),(0,e.jsx)(s.SettingRow,null,(0,e.jsx)(s.MapWidgetSelector,{onSelect:this.onMapWidgetSelected,useMapWidgetIds:this.props.useMapWidgetIds}))),(0,e.jsx)(s.SettingSection,{title:this.props.intl.formatMessage({id:"options",defaultMessage:"Options"})},(0,e.jsx)(s.SettingRow,{label:(0,e.jsx)(e.FormattedMessage,{id:"showBaseMap",defaultMessage:"Show basemap legends"})},(0,e.jsx)(t.Switch,{className:"can-x-switch",checked:this.props.config&&this.props.config.showBaseMap||!1,"data-key":"showBaseMap",onChange:e=>{this.onOptionsChanged(e.target.checked,"showBaseMap")}})),(0,e.jsx)(s.SettingRow,{label:(0,e.jsx)(e.FormattedMessage,{id:"cardStyle",defaultMessage:"Use card style"})},(0,e.jsx)(t.Switch,{className:"can-x-switch",checked:this.props.config&&this.props.config.cardStyle||!1,"data-key":"cardStyle",onChange:e=>{this.onOptionsChanged(e.target.checked,"cardStyle")}})),(0,e.jsx)(s.SettingRow,{flow:"wrap"},u)),(0,e.jsx)(s.SettingSection,null,(0,e.jsx)(s.SettingRow,{className:"advanced-setting-row",label:(0,e.jsx)(e.FormattedMessage,{id:"advance",defaultMessage:"Advanced"})},(0,e.jsx)(t.Switch,{className:"can-x-switch",checked:this.getStyleConfig().useCustom||!1,"data-key":"showBaseMap",onChange:e=>{this.onUseCustomStyleChanged(e.target.checked)}})),(0,e.jsx)("div",{className:"mt-3",style:{display:p}},(0,e.jsx)(s.SettingRow,{label:(0,e.jsx)(e.FormattedMessage,{id:"font",defaultMessage:"Font"})},(0,e.jsx)(a.ThemeColorPicker,{icon:n,type:"with-icon",specificTheme:this.props.theme2,value:this.getStyleConfig().fontColor||(null===(c=null===(d=null===(l=this.props.theme2.arcgis.widgets.legend.variants)||void 0===l?void 0:l.default)||void 0===d?void 0:d.root)||void 0===c?void 0:c.color)||"",onChange:this.onFontStyleChanged})),(0,e.jsx)(s.SettingRow,{label:(0,e.jsx)(e.FormattedMessage,{id:"background",defaultMessage:"Background"})},(0,e.jsx)(a.ThemeColorPicker,{specificTheme:this.props.theme2,value:(null===(g=this.getStyleConfig().background)||void 0===g?void 0:g.color)||this.props.theme2.surfaces[1].bg||"",onChange:this.onBackgroundStyleChange}))))));var h}}c.mapExtraStateProps=e=>({dsJsons:e.appStateInBuilder.appConfig.dataSources})})(),d})())}}}));