System.register(["jimu-core","jimu-ui","jimu-ui/advanced/setting-components","jimu-arcgis","jimu-ui/advanced/data-source-selector","jimu-ui/basic/color-picker","jimu-layouts/layout-runtime"],(function(e,t){var s={},o={},i={},a={},n={},r={},l={};return{setters:[function(e){s.FormattedMessage=e.FormattedMessage,s.Immutable=e.Immutable,s.React=e.React,s.css=e.css,s.getAppStore=e.getAppStore,s.hooks=e.hooks,s.jsx=e.jsx,s.polished=e.polished},function(e){o.FillType=e.FillType,o.Label=e.Label,o.Radio=e.Radio,o.Switch=e.Switch,o.defaultMessages=e.defaultMessages},function(e){i.MapWidgetSelector=e.MapWidgetSelector,i.SettingRow=e.SettingRow,i.SettingSection=e.SettingSection},function(e){a.DataSourceTypes=e.DataSourceTypes},function(){},function(e){r.ThemeColorPicker=e.ThemeColorPicker},function(e){l.defaultMessages=e.defaultMessages}],execute:function(){e((()=>{var e={9655:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12"><path fill="#000" fill-rule="nonzero" d="m6.828.535 4.966 11.01A.323.323 0 0 1 11.5 12a.78.78 0 0 1-.707-.455L9.182 8H2.818l-1.611 3.545A.78.78 0 0 1 .5 12a.323.323 0 0 1-.294-.456L5.172.535a.909.909 0 0 1 1.656 0M6 1 3.272 7h5.456z"></path></svg>'},62686:e=>{"use strict";e.exports=a},79244:e=>{"use strict";e.exports=s},41496:e=>{"use strict";e.exports=l},14321:e=>{"use strict";e.exports=o},13089:e=>{"use strict";e.exports=n},79298:e=>{"use strict";e.exports=i},54337:e=>{"use strict";e.exports=r}},t={};function d(s){var o=t[s];if(void 0!==o)return o.exports;var i=t[s]={exports:{}};return e[s](i,i.exports,d),i.exports}d.d=(e,t)=>{for(var s in t)d.o(t,s)&&!d.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},d.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.p="";var c={};return d.p=window.jimuConfig.baseUrl,(()=>{"use strict";d.r(c),d.d(c,{CardLayout:()=>m,__set_webpack_public_path__:()=>y,default:()=>f});var e,t=d(79244),s=d(14321),o=d(79298),i=d(62686),a=(d(13089),d(54337));!function(e){e.ShowVisible="show-visible",e.ShowWithinExtent="show-within-extent",e.ShowAll="show-all"}(e||(e={}));const n={sourceDescript:"A web map or web scene, or any combination of the two.",showBaseMap:"Show basemap legends",cardStyle:"Use card style",showAllLegends:"Show all layers",showWithinExtent:"Show visible layers within current map extent",showVisible:"Show visible layers",legendMode:"Legend mode"};var r=d(41496);const l=e=>{const{onRadioChange:o,checked:i,itemId:a,name:l}=e,d=t.hooks.useTranslation(n,r.defaultMessages);return(0,t.jsx)("div",{className:"w-100 legend-tools"},(0,t.jsx)("div",{className:"legend-tools-item card-style-radio"},(0,t.jsx)(s.Label,{className:"d-flex align-items-center",style:{cursor:"pointer",fontWeight:"normal"}},(0,t.jsx)(s.Radio,{id:a,name:l,className:"mr-1",onChange:e=>{o(e)},checked:i}),d(a))))},g=e=>{const{itemsIds:s,itemsOptions:o,value:i,onChange:a,name:n}=e,r=s.map(((e,r)=>{const d={itemId:s[r],checked:i===o[r],onRadioChange:()=>{a(o[r])},name:n};return(0,t.jsx)(l,Object.assign({key:r},d))}));return(0,t.jsx)("div",{className:"card-layout-content pl-2",role:"radiogroup",css:p},r)},p=t.css`
  .legend-tools:last-child {
    .legend-tools-item {
      margin-bottom: -0.5rem;
    }
  }
`,h=d(9655),u=Object.assign({},n,s.defaultMessages);var m;!function(e){e.Auto="auto",e.SideBySide="side-by-side",e.Stack="stack"}(m||(m={}));class S extends t.React.PureComponent{constructor(o){super(o),this.supportedDsTypes=(0,t.Immutable)([i.DataSourceTypes.WebMap,i.DataSourceTypes.WebScene]),this.getPortUrl=()=>(0,t.getAppStore)().getState().portalUrl,this.onOptionsChanged=(e,t)=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.set(t,e)}),"cardStyle"===t&&this.setState({cardStyle:e})},this.onCardLayoutChange=e=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.set("cardLayout",e)}),this.setState({cardLayoutValue:e})},this.onLegendModeChange=e=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.set("legendMode",e)}),this.setState({legendMode:e})},this.onToggleUseDataEnabled=e=>{this.props.onSettingChange({id:this.props.id,useDataSourcesEnabled:e})},this.onDataSourceChange=e=>{e&&this.props.onSettingChange({id:this.props.id,useDataSources:e})},this.onMapWidgetSelected=e=>{this.props.onSettingChange({id:this.props.id,useMapWidgetIds:e})},this.onUseCustomStyleChanged=e=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.setIn(["style","useCustom"],e)})},this.onFontStyleChanged=e=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.setIn(["style","fontColor"],e)})},this.onBackgroundStyleChange=e=>{var o,i,a;const n={color:e,fillType:s.FillType.FILL};let r=(0,t.Immutable)(null!==(a=null===(i=null===(o=this.props.config)||void 0===o?void 0:o.style)||void 0===i?void 0:i.background)&&void 0!==a?a:{});for(const e in n)switch(e){case"fillType":r.fillType!==n[e]&&(r=r.set("fillType",n[e]));break;case"color":r=r.set("color",n[e]);break;case"image":r=r.set("image",n[e])}this.props.onSettingChange({id:this.props.id,config:this.props.config.setIn(["style","background"],r)})};const{cardLayout:a=m.Auto,cardStyle:n=!1,legendMode:r=e.ShowVisible}=this.props.config;this.state={cardStyle:n,cardLayoutValue:a,legendMode:r}}translate(e){return this.props.intl.formatMessage({id:e,defaultMessage:u[e]})}getDefaultStyleConfig(){return{useCustom:!1,background:{color:"",fillType:s.FillType.FILL},fontColor:""}}getStyleConfig(){return this.props.config.style&&this.props.config.style.useCustom?this.props.config.style:this.getDefaultStyleConfig()}render(){var i,n,r,l,d;let c=null;this.state.cardStyle&&(c=(0,t.jsx)(o.SettingRow,{flow:"wrap",role:"radiogroup"},(0,t.jsx)(g,{value:this.state.cardLayoutValue,name:this.translate("cardStyle"),onChange:this.onCardLayoutChange,itemsIds:["auto","sideBySide","stack"],itemsOptions:Object.values(m)})));const p=(0,t.jsx)(o.SettingRow,{flow:"wrap",role:"radiogroup"},(0,t.jsx)("div",{style:{marginLeft:"-0.5rem"}},(0,t.jsx)(g,{name:this.translate("legendMode"),value:this.state.legendMode,onChange:this.onLegendModeChange,itemsIds:["showVisible","showWithinExtent"],itemsOptions:Object.values(e)})));let S;return S=(null===(i=this.props.config.style)||void 0===i?void 0:i.useCustom)?"block":"none",(0,t.jsx)("div",{css:(f=this.props.theme,t.css`
    .widget-setting-legend{
      font-weight: lighter;
      font-size: 13px;

      .source-descript {
        color: ${f.ref.palette.neutral[1e3]};
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
  `)},(0,t.jsx)("div",{className:"widget-setting-legend"},(0,t.jsx)(o.SettingSection,{className:"map-selector-section",role:"group"},(0,t.jsx)(o.SettingRow,{label:(0,t.jsx)(t.FormattedMessage,{id:"selectMapWidget",defaultMessage:u.selectMapWidget})}),(0,t.jsx)(o.SettingRow,null,(0,t.jsx)(o.MapWidgetSelector,{onSelect:this.onMapWidgetSelected,useMapWidgetIds:this.props.useMapWidgetIds}))),(0,t.jsx)(o.SettingSection,{title:this.translate("legendMode"),role:"group","aria-label":this.translate("legendMode")},p),(0,t.jsx)(o.SettingSection,{title:this.translate("options"),role:"group","aria-label":this.translate("options")},(0,t.jsx)(o.SettingRow,{label:(0,t.jsx)(t.FormattedMessage,{id:"showBaseMap",defaultMessage:u.showBaseMap})},(0,t.jsx)(s.Switch,{className:"can-x-switch",checked:this.props.config&&this.props.config.showBaseMap||!1,"data-key":"showBaseMap",onChange:e=>{this.onOptionsChanged(e.target.checked,"showBaseMap")},"aria-label":this.translate("showBaseMap")})),(0,t.jsx)(o.SettingRow,{label:(0,t.jsx)(t.FormattedMessage,{id:"cardStyle",defaultMessage:u.cardStyle})},(0,t.jsx)(s.Switch,{className:"can-x-switch",checked:this.props.config&&this.props.config.cardStyle||!1,"data-key":"cardStyle",onChange:e=>{this.onOptionsChanged(e.target.checked,"cardStyle")},"aria-label":this.translate("cardStyle")})),c),(0,t.jsx)(o.SettingSection,null,(0,t.jsx)(o.SettingRow,{className:"advanced-setting-row",label:(0,t.jsx)(t.FormattedMessage,{id:"advance",defaultMessage:"Advanced"})},(0,t.jsx)(s.Switch,{className:"can-x-switch",checked:this.getStyleConfig().useCustom||!1,"data-key":"showBaseMap",onChange:e=>{this.onUseCustomStyleChanged(e.target.checked)},"aria-label":this.translate("advance")})),(0,t.jsx)("div",{className:"mt-4",style:{display:S}},(0,t.jsx)(o.SettingRow,{label:(0,t.jsx)(t.FormattedMessage,{id:"font",defaultMessage:"Font"})},(0,t.jsx)(a.ThemeColorPicker,{icon:h,type:"with-icon",specificTheme:this.props.theme2,value:this.getStyleConfig().fontColor||(null===(l=null===(r=null===(n=this.props.theme2.arcgis.widgets.legend.variants)||void 0===n?void 0:n.default)||void 0===r?void 0:r.root)||void 0===l?void 0:l.color)||"",onChange:this.onFontStyleChanged,"aria-label":this.translate("fontColor")})),(0,t.jsx)(o.SettingRow,{label:(0,t.jsx)(t.FormattedMessage,{id:"background",defaultMessage:"Background"})},(0,t.jsx)(a.ThemeColorPicker,{specificTheme:this.props.theme2,value:(null===(d=this.getStyleConfig().background)||void 0===d?void 0:d.color)||this.props.theme2.sys.color.surface.paper||"",onChange:this.onBackgroundStyleChange,"aria-label":this.translate("backgroundColor")}))))));var f}}S.mapExtraStateProps=e=>({dsJsons:e.appStateInBuilder.appConfig.dataSources});const f=S;function y(e){d.p=e}})(),c})())}}}));