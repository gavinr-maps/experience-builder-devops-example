System.register(["jimu-core","jimu-ui","jimu-ui/advanced/setting-components","jimu-ui/advanced/data-source-selector","jimu-ui/basic/color-picker","jimu-layouts/layout-runtime"],(function(e,t){var s={},o={},i={},a={},n={},r={};return{setters:[function(e){s.DataSourceTypes=e.DataSourceTypes,s.FormattedMessage=e.FormattedMessage,s.Immutable=e.Immutable,s.React=e.React,s.css=e.css,s.getAppStore=e.getAppStore,s.hooks=e.hooks,s.jsx=e.jsx,s.polished=e.polished},function(e){o.FillType=e.FillType,o.Label=e.Label,o.Radio=e.Radio,o.Switch=e.Switch,o.defaultMessages=e.defaultMessages},function(e){i.MapWidgetSelector=e.MapWidgetSelector,i.SettingRow=e.SettingRow,i.SettingSection=e.SettingSection},function(){},function(e){n.ThemeColorPicker=e.ThemeColorPicker},function(e){r.defaultMessages=e.defaultMessages}],execute:function(){e((()=>{var e={9655:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12"><path fill="#000" fill-rule="nonzero" d="m6.828.535 4.966 11.01A.323.323 0 0 1 11.5 12a.78.78 0 0 1-.707-.455L9.182 8H2.818l-1.611 3.545A.78.78 0 0 1 .5 12a.323.323 0 0 1-.294-.456L5.172.535a.909.909 0 0 1 1.656 0M6 1 3.272 7h5.456z"></path></svg>'},79244:e=>{"use strict";e.exports=s},41496:e=>{"use strict";e.exports=r},14321:e=>{"use strict";e.exports=o},13089:e=>{"use strict";e.exports=a},79298:e=>{"use strict";e.exports=i},54337:e=>{"use strict";e.exports=n}},t={};function l(s){var o=t[s];if(void 0!==o)return o.exports;var i=t[s]={exports:{}};return e[s](i,i.exports,l),i.exports}l.d=(e,t)=>{for(var s in t)l.o(t,s)&&!l.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.p="";var d={};return l.p=window.jimuConfig.baseUrl,(()=>{"use strict";l.r(d),l.d(d,{CardLayout:()=>u,__set_webpack_public_path__:()=>f,default:()=>S});var e,t=l(79244),s=l(14321),o=l(79298),i=(l(13089),l(54337));!function(e){e.ShowVisible="show-visible",e.ShowWithinExtent="show-within-extent",e.ShowAll="show-all"}(e||(e={}));const a={sourceDescript:"A web map or web scene, or any combination of the two.",showBaseMap:"Show basemap legends",cardStyle:"Use card style",showAllLegends:"Show all layers",showWithinExtent:"Show visible layers within current map extent",showVisible:"Show visible layers",legendMode:"Legend mode",respectLayerDefinitionExp:"Respect layer filter settings"};var n=l(41496);const r=e=>{const{onRadioChange:o,checked:i,itemId:r,name:l}=e,d=t.hooks.useTranslation(a,n.defaultMessages);return(0,t.jsx)("div",{className:"w-100 legend-tools"},(0,t.jsx)("div",{className:"legend-tools-item card-style-radio"},(0,t.jsx)(s.Label,{className:"d-flex align-items-center",style:{cursor:"pointer",fontWeight:"normal"}},(0,t.jsx)(s.Radio,{id:r,name:l,className:"mr-1",onChange:e=>{o(e)},checked:i}),d(r))))},c=e=>{const{itemsIds:s,itemsOptions:o,value:i,onChange:a,name:n}=e,l=s.map(((e,l)=>{const d={itemId:s[l],checked:i===o[l],onRadioChange:()=>{a(o[l])},name:n};return(0,t.jsx)(r,Object.assign({key:l},d))}));return(0,t.jsx)("div",{className:"card-layout-content pl-2",role:"radiogroup",css:g},l)},g=t.css`
  .legend-tools:last-child {
    .legend-tools-item {
      margin-bottom: -0.5rem;
    }
  }
`,p=l(9655),h=Object.assign({},a,s.defaultMessages);var u;!function(e){e.Auto="auto",e.SideBySide="side-by-side",e.Stack="stack"}(u||(u={}));class m extends t.React.PureComponent{constructor(o){super(o),this.supportedDsTypes=(0,t.Immutable)([t.DataSourceTypes.WebMap,t.DataSourceTypes.WebScene]),this.getPortUrl=()=>(0,t.getAppStore)().getState().portalUrl,this.onOptionsChanged=(e,t)=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.set(t,e)}),"cardStyle"===t&&this.setState({cardStyle:e})},this.onCardLayoutChange=e=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.set("cardLayout",e)}),this.setState({cardLayoutValue:e})},this.onLegendModeChange=e=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.set("legendMode",e)}),this.setState({legendMode:e})},this.onToggleUseDataEnabled=e=>{this.props.onSettingChange({id:this.props.id,useDataSourcesEnabled:e})},this.onDataSourceChange=e=>{e&&this.props.onSettingChange({id:this.props.id,useDataSources:e})},this.onMapWidgetSelected=e=>{this.props.onSettingChange({id:this.props.id,useMapWidgetIds:e})},this.onUseCustomStyleChanged=e=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.setIn(["style","useCustom"],e)})},this.onFontStyleChanged=e=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.setIn(["style","fontColor"],e)})},this.onBackgroundStyleChange=e=>{var o,i,a;const n={color:e,fillType:s.FillType.FILL};let r=(0,t.Immutable)(null!==(a=null===(i=null===(o=this.props.config)||void 0===o?void 0:o.style)||void 0===i?void 0:i.background)&&void 0!==a?a:{});for(const e in n)switch(e){case"fillType":r.fillType!==n[e]&&(r=r.set("fillType",n[e]));break;case"color":r=r.set("color",n[e]);break;case"image":r=r.set("image",n[e])}this.props.onSettingChange({id:this.props.id,config:this.props.config.setIn(["style","background"],r)})};const{cardLayout:i=u.Auto,cardStyle:a=!1,legendMode:n=e.ShowVisible}=this.props.config;this.state={cardStyle:a,cardLayoutValue:i,legendMode:n}}translate(e){return this.props.intl.formatMessage({id:e,defaultMessage:h[e]})}getFormattedMessage(e){return(0,t.jsx)(t.FormattedMessage,{id:e,defaultMessage:h[e]})}getDefaultStyleConfig(){return{useCustom:!1,background:{color:"",fillType:s.FillType.FILL},fontColor:""}}getStyleConfig(){return this.props.config.style&&this.props.config.style.useCustom?this.props.config.style:this.getDefaultStyleConfig()}render(){var a,n,r,l,d;let g=null;this.state.cardStyle&&(g=(0,t.jsx)(o.SettingRow,{flow:"wrap",role:"radiogroup"},(0,t.jsx)(c,{value:this.state.cardLayoutValue,name:this.translate("cardStyle"),onChange:this.onCardLayoutChange,itemsIds:["auto","sideBySide","stack"],itemsOptions:Object.values(u)})));const h=(0,t.jsx)(o.SettingRow,{flow:"wrap",role:"radiogroup"},(0,t.jsx)("div",{style:{marginLeft:"-0.5rem"}},(0,t.jsx)(c,{name:this.translate("legendMode"),value:this.state.legendMode,onChange:this.onLegendModeChange,itemsIds:["showVisible","showWithinExtent"],itemsOptions:Object.values(e)})));let m;return m=(null===(a=this.props.config.style)||void 0===a?void 0:a.useCustom)?"block":"none",(0,t.jsx)("div",{css:(S=this.props.theme,t.css`
    .widget-setting-legend{
      font-weight: lighter;
      font-size: 13px;

      .source-descript {
        color: ${S.ref.palette.neutral[1e3]};
      }

      .webmap-thumbnail{
        cursor: auto;
        width: 100%;
        height: 120px;
        overflow: hidden;
        padding: 1px;
        border: ${t.polished.rem(2)} solid initial;
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
  `)},(0,t.jsx)("div",{className:"widget-setting-legend"},(0,t.jsx)(o.SettingSection,{className:"map-selector-section",role:"group"},(0,t.jsx)(o.SettingRow,{label:this.getFormattedMessage("selectMapWidget")}),(0,t.jsx)(o.SettingRow,null,(0,t.jsx)(o.MapWidgetSelector,{onSelect:this.onMapWidgetSelected,useMapWidgetIds:this.props.useMapWidgetIds}))),(0,t.jsx)(o.SettingSection,{title:this.translate("legendMode"),role:"group","aria-label":this.translate("legendMode")},h),(0,t.jsx)(o.SettingSection,{title:this.translate("options"),role:"group","aria-label":this.translate("options")},(0,t.jsx)(o.SettingRow,{tag:"label",label:this.getFormattedMessage("showBaseMap")},(0,t.jsx)(s.Switch,{className:"can-x-switch",checked:this.props.config&&this.props.config.showBaseMap||!1,"data-key":"showBaseMap",onChange:e=>{this.onOptionsChanged(e.target.checked,"showBaseMap")}})),(0,t.jsx)(o.SettingRow,{tag:"label",label:this.getFormattedMessage("cardStyle")},(0,t.jsx)(s.Switch,{className:"can-x-switch",checked:this.props.config&&this.props.config.cardStyle||!1,"data-key":"cardStyle",onChange:e=>{this.onOptionsChanged(e.target.checked,"cardStyle")}})),g),(0,t.jsx)(o.SettingSection,null,(0,t.jsx)(o.SettingRow,{className:"advanced-setting-row",tag:"label",label:(0,t.jsx)(t.FormattedMessage,{id:"advance",defaultMessage:"Advanced"})},(0,t.jsx)(s.Switch,{className:"can-x-switch",checked:this.getStyleConfig().useCustom||!1,"data-key":"showBaseMap",onChange:e=>{this.onUseCustomStyleChanged(e.target.checked)}})),(0,t.jsx)("div",{className:"mt-4",style:{display:m}},(0,t.jsx)(o.SettingRow,{label:(0,t.jsx)(t.FormattedMessage,{id:"font",defaultMessage:"Font"})},(0,t.jsx)(i.ThemeColorPicker,{icon:p,type:"with-icon",specificTheme:this.props.theme2,value:this.getStyleConfig().fontColor||(null===(l=null===(r=null===(n=this.props.theme2.arcgis.widgets.legend.variants)||void 0===n?void 0:n.default)||void 0===r?void 0:r.root)||void 0===l?void 0:l.color)||"",onChange:this.onFontStyleChanged,"aria-label":this.translate("fontColor")})),(0,t.jsx)(o.SettingRow,{label:(0,t.jsx)(t.FormattedMessage,{id:"background",defaultMessage:"Background"})},(0,t.jsx)(i.ThemeColorPicker,{specificTheme:this.props.theme2,value:(null===(d=this.getStyleConfig().background)||void 0===d?void 0:d.color)||this.props.theme2.sys.color.surface.paper||"",onChange:this.onBackgroundStyleChange,"aria-label":this.translate("backgroundColor")}))))));var S}}m.mapExtraStateProps=e=>({dsJsons:e.appStateInBuilder.appConfig.dataSources});const S=m;function f(e){l.p=e}})(),d})())}}}));