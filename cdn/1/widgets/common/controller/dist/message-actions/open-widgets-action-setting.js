System.register(["jimu-core/emotion","jimu-core","jimu-ui","jimu-ui/advanced/setting-components","jimu-ui/advanced/data-source-selector","jimu-for-builder","jimu-layouts/layout-runtime","jimu-ui/advanced/style-setting-components","jimu-ui/basic/color-picker","jimu-theme"],function(e,t){var a={},i={},o={},n={},s={},l={},r={},c={},d={},u={};return{setters:[function(e){a.Fragment=e.Fragment,a.jsx=e.jsx,a.jsxs=e.jsxs},function(e){i.DataSourceTypes=e.DataSourceTypes,i.FixedPosition=e.FixedPosition,i.Immutable=e.Immutable,i.MessageType=e.MessageType,i.React=e.React,i.ReactRedux=e.ReactRedux,i.css=e.css,i.dataSourceUtils=e.dataSourceUtils,i.defaultMessages=e.defaultMessages,i.hooks=e.hooks},function(e){o.Label=e.Label,o.MultiSelect=e.MultiSelect,o.MultiSelectItem=e.MultiSelectItem,o.Option=e.Option,o.Radio=e.Radio,o.Select=e.Select,o.defaultMessages=e.defaultMessages},function(e){n.MessageActionDataSelector=e.MessageActionDataSelector,n.SettingRow=e.SettingRow,n.SettingSection=e.SettingSection},function(e){s.DataSourceSelector=e.DataSourceSelector},function(){},function(e){r.searchUtils=e.searchUtils},function(){},function(){},function(e){u.styled=e.styled}],execute:function(){e((()=>{var e={21795(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M8.829 2.535a.909.909 0 0 0-1.657 0L2.291 13.356a.456.456 0 0 0 .831.377L4.818 10h6.365l1.696 3.733a.456.456 0 0 0 .831-.377zM5.272 9 8 3l2.729 6z" clip-rule="evenodd"></path></svg>'},36597(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6.5 7.5A.5.5 0 0 1 7 7h1.5v4.5h1a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1h1V8H7a.5.5 0 0 1-.5-.5"></path><path fill="#000" fill-rule="evenodd" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16m0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14" clip-rule="evenodd"></path></svg>'},74452(e,t,a){"use strict";a.d(t,{bC:()=>o});var i=a(79244);const o="controller";i.FixedPosition.TopRight,document.body},62898(e,t,a){"use strict";a.d(t,{useControlledWidgets:()=>d});a(67386);var i,o,n,s=a(79244),l=(a(4108),a(79298),a(41496));!function(e){e.Stack="STACK",e.SideBySide="SIDEBYSIDE"}(i||(i={})),function(e){e.Center="center",e.Start="start",e.End="end"}(o||(o={})),function(e){e.Arrows="ARROWS",e.PopupWindow="POPUP_WINDOW"}(n||(n={}));var r;a(14321);!function(e){e[e.Circle=0]="Circle",e[e.Rectangle=1]="Rectangle"}(r||(r={}));s.css`
  background-color: var(--ref-palette-white) !important;
  padding: 0px !important;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  margin: 2px;
  border-radius: 0px; 
  &.active{
    border: 2px var(--sys-color-primary-light) solid !important;
  }
  .inner {
    width: 66%;
    height: 66%;
    border: 1px var(--ref-palette-neutral-1200) solid;
    border-radius: 2px;
    &.circle {
      border-radius: 50%;
  }
  }
`;a(15562),a(74452),a(54337);var c=a(1888);a(21795);a(36597);s.css`
  .jimu-icon {
    color: var(--ref-palette-neutral-1000);
    &:hover {
      color: var(--ref-palette-black);
    }
  }
`;c.styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--ref-palette-neutral-500);
  margin: 16px 0;
`;s.css`
    font-size: 13px;
    font-weight: 400;
    .setting-row-item {
      width: 100%;
      display: flex;
      margin-top: 0.5rem;
      > span.jimu-radio {
        flex-shrink: 0;
        margin-top: 0.1rem;
      }
      > label {
        margin-bottom: 0;
      }
    }
    .jimu-multi-select {
      width: 100%;
      > .jimu-dropdown {
        width: 100%;
      }
      > .jimu-menu-item {
        width: 100%;
        height: 26px;
      }
    }
  `;const d=(e,t)=>{const a=(e=>{var t,a,i;let o=(null!==(i=null===(a=null===(t=null==e?void 0:e.order)||void 0===t?void 0:t.asMutable)||void 0===a?void 0:a.call(t))&&void 0!==i?i:[]).map(t=>{var a;return null===(a=e.content)||void 0===a?void 0:a[t]});return o=o.filter(e=>e&&e.id&&e.widgetId&&!e.isPending),o.map(e=>e.id).map(t=>{var a,i;return null===(i=null===(a=e.content)||void 0===a?void 0:a[t])||void 0===i?void 0:i.widgetId})})(s.ReactRedux.useSelector(a=>{var i,o,n,s;const r=null===(n=null===(o=null===(i=(a=a.appStateInBuilder).appConfig.widgets)||void 0===i?void 0:i[e])||void 0===o?void 0:o.layouts)||void 0===n?void 0:n[t],c=a.browserSizeMode,d=a.appConfig.mainSizeMode,u=l.searchUtils.findLayoutId(r,c,d);return null===(s=a.appConfig.layouts)||void 0===s?void 0:s[u]})),i=s.ReactRedux.useSelector(e=>e.appStateInBuilder.appConfig.widgets);return(0,s.Immutable)(a||[]).map(e=>{var t;return{label:null===(t=i[e])||void 0===t?void 0:t.label,value:e}})}},79244(e){"use strict";e.exports=i},67386(e){"use strict";e.exports=a},4108(e){"use strict";e.exports=l},41496(e){"use strict";e.exports=r},1888(e){"use strict";e.exports=u},14321(e){"use strict";e.exports=o},13089(e){"use strict";e.exports=s},79298(e){"use strict";e.exports=n},15562(e){"use strict";e.exports=c},54337(e){"use strict";e.exports=d}},t={};function p(a){var i=t[a];if(void 0!==i)return i.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,p),o.exports}p.d=(e,t)=>{for(var a in t)p.o(t,a)&&!p.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},p.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),p.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},p.p="";var g={};return p.p=window.jimuConfig.baseUrl,(()=>{"use strict";p.r(g),p.d(g,{default:()=>d});var e=p(67386),t=p(79244),a=p(14321),i=p(79298),o=p(13089);const n={_widgetLabel:"Widget Controller",openWidget:"How many widgets can be opened",displayType:"Display type",iconStyle:"Icon",showIconLabel:"Label",iconSizeOverride:"Size",iconInterval:"Spacing",advancedIconStyle:"Icon style",advancedIconColor:"Icon color",buttonSize:"Button size",openStart:"Open widgets on loading",widgetsSelected:"{widgetNumber} widgets selected",appearanceTip:"Select the widgets inside the Widget Controller, and customize their icons, labels, or styles to change their appearances.",appearanceTipExpress:"Customize widget icon styles within the Widget Controller to change their appearances.",widgetPanelArrangment:"Widget panel arrangement",panelFloating:"Floating",indicator:"Indicator",messageAction_openWidget:"Open widget",messageAction_toggleWidget:"Toggle widget",overflownStyle:"Overflow style",popupWindow:"Popup window"};var s=p(62898),l=p(74452);function r(i){const{widgetId:o,selectedWidgetIds:n,onChange:r}=i,c=t.ReactRedux.useSelector(e=>{var t,a;const i=null===(t=e.appStateInBuilder.appConfig.widgets[o])||void 0===t?void 0:t.config;return null===(a=null==i?void 0:i.behavior)||void 0===a?void 0:a.onlyOpenOne}),d=(0,s.useControlledWidgets)(o,l.bC),u=t.React.useCallback((e,t)=>{r([t])},[r]),p=t.React.useCallback((e,t)=>{r(t)},[r]),g=t.hooks.useTranslation(a.defaultMessages),m=t.React.useCallback(e=>g("numSelected",{number:e.length}),[g]);return t.React.useEffect(()=>{c&&n.length>1&&r([n[0]]),c&&0===n.length&&d.length>0&&r([d[0].value])},[d,c,r,n]),(0,e.jsxs)(t.React.Fragment,{children:[c&&(0,e.jsx)(a.Select,{value:n[0]||"",onChange:u,children:d.map(t=>(0,e.jsx)(a.Option,{value:t.value,children:t.label},t.value))}),!c&&(0,e.jsx)(a.MultiSelect,{values:n||[],className:"pt-1 custom-multiselect",displayByValues:m,onChange:p,children:d.map(t=>(0,e.jsx)(a.MultiSelectItem,{value:t.value,label:t.label},t.value))})]})}const c=(0,t.Immutable)([t.DataSourceTypes.FeatureLayer,t.DataSourceTypes.SceneLayer,t.DataSourceTypes.BuildingComponentSubLayer,t.DataSourceTypes.ImageryLayer,t.DataSourceTypes.OrientedImageryLayer,t.DataSourceTypes.SubtypeGroupLayer,t.DataSourceTypes.SubtypeSublayer]);function d(s){var l;const{actionId:d,widgetId:u,messageWidgetId:p,messageType:g,dataSourceId:m,onSettingChange:S}=s,v=s.config,h=[t.MessageType.DataRecordsSelectionChange].includes(g),f=h&&!!m,w=t.React.useMemo(()=>m?(0,t.Immutable)([t.dataSourceUtils.getUseDataSourceByDataSourceId(m)]):null,[m]),x=t.hooks.useTranslation(n,t.defaultMessages,a.defaultMessages),[y,b]=t.React.useState((null===(l=v.useDataSources)||void 0===l?void 0:l.length)>0),I=t.React.useCallback(e=>{b(e),e||S({actionId:d,config:v.set("useDataSources",[])})},[d,v,S]),j=t.React.useCallback(e=>{S({actionId:d,config:v.set("useDataSources",e)})},[d,v,S]);t.React.useEffect(()=>{if(!f||!(null==w?void 0:w[0]))return;const e=w[0],t=v.useDataSources||[],a=t[0];1===t.length&&(null==a?void 0:a.dataSourceId)===e.dataSourceId||S({actionId:d,config:v.set("useDataSources",w.asMutable({deep:!0}))})},[d,v,w,S,f]);const R=t.React.useCallback(e=>{S({actionId:d,config:v.set("widgetIds",e)})},[d,v,S]);return(0,e.jsxs)("div",{children:[h&&(0,e.jsxs)(i.SettingSection,{title:x("messageAction_TriggerData"),children:[f&&(0,e.jsx)(i.SettingRow,{flow:"wrap",children:(0,e.jsx)(o.DataSourceSelector,{types:c,useDataSources:w,fromDsIds:m?(0,t.Immutable)([m]):void 0,disableDataSourceList:!0,mustUseDataSource:!0,isMultiple:!0,isMultipleDataView:!0,hideAddDataButton:!0,hideDataView:!0,hideTypeDropdown:!0,enableToSelectOutputDsFromSelf:!0,disableSelection:()=>!0,disableRemove:()=>!0})}),!f&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.SettingRow,{children:(0,e.jsxs)(a.Label,{children:[(0,e.jsx)(a.Radio,{className:"mr-2",checked:!y,onChange:()=>{I(!1)}}),x("allDataWithoutCount")]})}),(0,e.jsx)(i.SettingRow,{children:(0,e.jsxs)(a.Label,{className:"d-flex align-items-center label-line-height",children:[(0,e.jsx)(a.Radio,{className:"mr-2",checked:y,onChange:()=>{I(!0)}}),x("custom")]})}),y&&(0,e.jsx)(i.SettingRow,{flow:"wrap",children:(0,e.jsx)(i.MessageActionDataSelector,{messageWidgetId:p,messageType:g,types:c,useDataSources:v.useDataSources,onChange:j})})]})]}),(0,e.jsx)(i.SettingSection,{children:(0,e.jsx)(i.SettingRow,{label:x("messageAction_openWidget"),flow:"wrap",children:(0,e.jsx)(r,{widgetId:u,selectedWidgetIds:v.widgetIds,onChange:R})})})]})}})(),g})())}}});