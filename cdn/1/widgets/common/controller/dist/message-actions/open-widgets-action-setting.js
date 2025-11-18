System.register(["jimu-core/emotion","jimu-core","jimu-ui","jimu-ui/advanced/setting-components","jimu-for-builder","jimu-layouts/layout-runtime","jimu-ui/advanced/style-setting-components","jimu-ui/basic/color-picker","jimu-theme"],function(e,t){var i={},a={},o={},n={},s={},l={},r={},c={},d={};return{setters:[function(e){i.jsx=e.jsx,i.jsxs=e.jsxs},function(e){a.DataSourceTypes=e.DataSourceTypes,a.FixedPosition=e.FixedPosition,a.Immutable=e.Immutable,a.MessageType=e.MessageType,a.React=e.React,a.ReactRedux=e.ReactRedux,a.css=e.css,a.defaultMessages=e.defaultMessages,a.hooks=e.hooks},function(e){o.Label=e.Label,o.MultiSelect=e.MultiSelect,o.MultiSelectItem=e.MultiSelectItem,o.Option=e.Option,o.Radio=e.Radio,o.Select=e.Select,o.defaultMessages=e.defaultMessages},function(e){n.MessageActionDataSelector=e.MessageActionDataSelector,n.SettingRow=e.SettingRow,n.SettingSection=e.SettingSection},function(){},function(e){l.searchUtils=e.searchUtils},function(){},function(){},function(e){d.styled=e.styled}],execute:function(){e((()=>{var e={778:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M8.829 2.535a.909.909 0 0 0-1.657 0L2.291 13.356a.456.456 0 0 0 .831.377L4.818 10h6.365l1.696 3.733a.456.456 0 0 0 .831-.377zM5.272 9 8 3l2.729 6z" clip-rule="evenodd"></path></svg>'},1888:e=>{"use strict";e.exports=d},4108:e=>{"use strict";e.exports=s},14321:e=>{"use strict";e.exports=o},15562:e=>{"use strict";e.exports=r},17087:(e,t,i)=>{"use strict";i.d(t,{bC:()=>o});var a=i(79244);const o="controller";a.FixedPosition.TopRight,document.body},38043:(e,t,i)=>{"use strict";i.d(t,{useControlledWidgets:()=>d});i(67386);var a,o,n,s=i(79244),l=(i(4108),i(79298),i(41496));!function(e){e.Stack="STACK",e.SideBySide="SIDEBYSIDE"}(a||(a={})),function(e){e.Center="center",e.Start="start",e.End="end"}(o||(o={})),function(e){e.Arrows="ARROWS",e.PopupWindow="POPUP_WINDOW"}(n||(n={}));var r;i(14321),i(49014);!function(e){e[e.Circle=0]="Circle",e[e.Rectangle=1]="Rectangle"}(r||(r={}));s.css`
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
`;i(15562),i(17087),i(54337);var c=i(1888);i(778);i(45508);s.css`
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
`,s.css`
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
  `;const d=(e,t)=>{const i=(e=>{var t,i,a;let o=(null!==(a=null===(i=null===(t=null==e?void 0:e.order)||void 0===t?void 0:t.asMutable)||void 0===i?void 0:i.call(t))&&void 0!==a?a:[]).map(t=>{var i;return null===(i=e.content)||void 0===i?void 0:i[t]});return o=o.filter(e=>e&&e.id&&e.widgetId&&!e.isPending),o.map(e=>e.id).map(t=>{var i,a;return null===(a=null===(i=e.content)||void 0===i?void 0:i[t])||void 0===a?void 0:a.widgetId})})(s.ReactRedux.useSelector(i=>{var a,o,n,s;const r=null===(n=null===(o=null===(a=(i=i.appStateInBuilder).appConfig.widgets)||void 0===a?void 0:a[e])||void 0===o?void 0:o.layouts)||void 0===n?void 0:n[t],c=i.browserSizeMode,d=i.appConfig.mainSizeMode,u=l.searchUtils.findLayoutId(r,c,d);return null===(s=i.appConfig.layouts)||void 0===s?void 0:s[u]})),a=s.ReactRedux.useSelector(e=>e.appStateInBuilder.appConfig.widgets);return(0,s.Immutable)(i||[]).map(e=>{var t;return{label:null===(t=a[e])||void 0===t?void 0:t.label,value:e}})}},41496:e=>{"use strict";e.exports=l},45508:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6.5 7.5A.5.5 0 0 1 7 7h1.5v4.5h1a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1h1V8H7a.5.5 0 0 1-.5-.5"></path><path fill="#000" fill-rule="evenodd" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16m0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14" clip-rule="evenodd"></path></svg>'},49014:(e,t,i)=>{"use strict";i.d(t,{A:()=>a});const a={_widgetLabel:"Widget Controller",openWidget:"How many widgets can be opened",displayType:"Display type",iconStyle:"Icon",showIconLabel:"Label",iconSizeOverride:"Size",iconInterval:"Spacing",advancedIconStyle:"Icon style",advancedIconColor:"Icon color",buttonSize:"Button size",openStart:"Open widgets on loading",widgetsSelected:"{widgetNumber} widgets selected",appearanceTip:"Select the widgets inside the Widget Controller, and customize their icons, labels, or styles to change their appearances.",appearanceTipExpress:"Customize widget icon styles within the Widget Controller to change their appearances.",widgetPanelArrangment:"Widget panel arrangement",panelFloating:"Floating",indicator:"Indicator",messageAction_openWidget:"Open widget",messageAction_toggleWidget:"Toggle widget",overflownStyle:"Overflow style",popupWindow:"Popup window"}},54337:e=>{"use strict";e.exports=c},67386:e=>{"use strict";e.exports=i},79244:e=>{"use strict";e.exports=a},79298:e=>{"use strict";e.exports=n}},t={};function u(i){var a=t[i];if(void 0!==a)return a.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,u),o.exports}u.d=(e,t)=>{for(var i in t)u.o(t,i)&&!u.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},u.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),u.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.p="";var g={};return u.p=window.jimuConfig.baseUrl,(()=>{"use strict";u.r(g),u.d(g,{default:()=>c});var e=u(67386),t=u(79244),i=u(14321),a=u(79298),o=u(49014),n=u(38043),s=u(17087);function l(a){const{widgetId:o,selectedWidgetIds:l,onChange:r}=a,c=t.ReactRedux.useSelector(e=>{var t,i;const a=null===(t=e.appStateInBuilder.appConfig.widgets[o])||void 0===t?void 0:t.config;return null===(i=null==a?void 0:a.behavior)||void 0===i?void 0:i.onlyOpenOne}),d=(0,n.useControlledWidgets)(o,s.bC),u=t.React.useCallback((e,t)=>{r([t])},[r]),g=t.React.useCallback((e,t)=>{r(t)},[r]),p=t.hooks.useTranslation(i.defaultMessages),m=t.React.useCallback(e=>p("numSelected",{number:e.length}),[p]);return t.React.useEffect(()=>{c&&l.length>1&&r([l[0]]),c&&0===l.length&&d.length>0&&r([d[0].value])},[d,c,r,l]),(0,e.jsxs)(t.React.Fragment,{children:[c&&(0,e.jsx)(i.Select,{value:l[0]||"",onChange:u,children:d.map(t=>(0,e.jsx)(i.Option,{value:t.value,children:t.label},t.value))}),!c&&(0,e.jsx)(i.MultiSelect,{values:l||[],className:"pt-1 custom-multiselect",displayByValues:m,onChange:g,children:d.map(t=>(0,e.jsx)(i.MultiSelectItem,{value:t.value,label:t.label},t.value))})]})}const r=(0,t.Immutable)([t.DataSourceTypes.FeatureLayer,t.DataSourceTypes.SceneLayer,t.DataSourceTypes.BuildingComponentSubLayer,t.DataSourceTypes.ImageryLayer,t.DataSourceTypes.OrientedImageryLayer,t.DataSourceTypes.SubtypeGroupLayer,t.DataSourceTypes.SubtypeSublayer]);function c(n){var s;const{actionId:c,widgetId:d,messageWidgetId:u,messageType:g,onSettingChange:p}=n,m=n.config,v=[t.MessageType.DataRecordsSelectionChange].includes(g),h=t.hooks.useTranslation(o.A,t.defaultMessages,i.defaultMessages),[S,f]=t.React.useState((null===(s=m.useDataSources)||void 0===s?void 0:s.length)>0),x=t.React.useCallback(e=>{f(e),e||p({actionId:c,config:m.set("useDataSources",[])})},[c,m,p]),y=t.React.useCallback(e=>{p({actionId:c,config:m.set("useDataSources",e)})},[c,m,p]),w=t.React.useCallback(e=>{p({actionId:c,config:m.set("widgetIds",e)})},[c,m,p]);return(0,e.jsxs)("div",{children:[v&&(0,e.jsxs)(a.SettingSection,{title:h("messageAction_TriggerData"),children:[(0,e.jsx)(a.SettingRow,{children:(0,e.jsxs)(i.Label,{children:[(0,e.jsx)(i.Radio,{className:"mr-2",checked:!S,onChange:()=>{x(!1)}}),h("allDataWithoutCount")]})}),(0,e.jsx)(a.SettingRow,{children:(0,e.jsxs)(i.Label,{className:"d-flex align-items-center label-line-height",children:[(0,e.jsx)(i.Radio,{className:"mr-2",checked:S,onChange:()=>{x(!0)}}),h("custom")]})}),S&&(0,e.jsx)(a.SettingRow,{flow:"wrap",children:(0,e.jsx)(a.MessageActionDataSelector,{messageWidgetId:u,messageType:g,types:r,useDataSources:m.useDataSources,onChange:y})})]}),(0,e.jsx)(a.SettingSection,{children:(0,e.jsx)(a.SettingRow,{label:h("messageAction_openWidget"),flow:"wrap",children:(0,e.jsx)(l,{widgetId:d,selectedWidgetIds:m.widgetIds,onChange:w})})})]})}})(),g})())}}});