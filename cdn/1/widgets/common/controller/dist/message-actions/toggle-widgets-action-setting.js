System.register(["jimu-core/emotion","jimu-core","jimu-ui/advanced/setting-components","jimu-ui","jimu-for-builder","jimu-layouts/layout-runtime","jimu-ui/advanced/style-setting-components","jimu-ui/basic/color-picker","jimu-theme"],function(e,t){var i={},o={},n={},l={},r={},a={},s={},d={},c={};return{setters:[function(e){i.jsx=e.jsx,i.jsxs=e.jsxs},function(e){o.FixedPosition=e.FixedPosition,o.Immutable=e.Immutable,o.React=e.React,o.ReactRedux=e.ReactRedux,o.css=e.css,o.hooks=e.hooks},function(e){n.SettingRow=e.SettingRow,n.SettingSection=e.SettingSection},function(e){l.MultiSelect=e.MultiSelect,l.MultiSelectItem=e.MultiSelectItem,l.Option=e.Option,l.Select=e.Select,l.defaultMessages=e.defaultMessages},function(){},function(e){a.searchUtils=e.searchUtils},function(){},function(){},function(e){c.styled=e.styled}],execute:function(){e((()=>{var e={778:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M8.829 2.535a.909.909 0 0 0-1.657 0L2.291 13.356a.456.456 0 0 0 .831.377L4.818 10h6.365l1.696 3.733a.456.456 0 0 0 .831-.377zM5.272 9 8 3l2.729 6z" clip-rule="evenodd"></path></svg>'},1888:e=>{"use strict";e.exports=c},4108:e=>{"use strict";e.exports=r},14321:e=>{"use strict";e.exports=l},15562:e=>{"use strict";e.exports=s},17087:(e,t,i)=>{"use strict";i.d(t,{bC:()=>n});var o=i(79244);const n="controller";o.FixedPosition.TopRight,document.body},38043:(e,t,i)=>{"use strict";i.d(t,{useControlledWidgets:()=>c});i(67386);var o,n,l,r=i(79244),a=(i(4108),i(79298),i(41496));!function(e){e.Stack="STACK",e.SideBySide="SIDEBYSIDE"}(o||(o={})),function(e){e.Center="center",e.Start="start",e.End="end"}(n||(n={})),function(e){e.Arrows="ARROWS",e.PopupWindow="POPUP_WINDOW"}(l||(l={}));var s;i(14321),i(49014);!function(e){e[e.Circle=0]="Circle",e[e.Rectangle=1]="Rectangle"}(s||(s={}));r.css`
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
`;i(15562),i(17087),i(54337);var d=i(1888);i(778);i(45508);r.css`
  .jimu-icon {
    color: var(--ref-palette-neutral-1000);
    &:hover {
      color: var(--ref-palette-black);
    }
  }
`;d.styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--ref-palette-neutral-500);
  margin: 16px 0;
`,r.css`
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
  `;const c=(e,t)=>{const i=(e=>{var t,i,o;let n=(null!==(o=null===(i=null===(t=null==e?void 0:e.order)||void 0===t?void 0:t.asMutable)||void 0===i?void 0:i.call(t))&&void 0!==o?o:[]).map(t=>{var i;return null===(i=e.content)||void 0===i?void 0:i[t]});return n=n.filter(e=>e&&e.id&&e.widgetId&&!e.isPending),n.map(e=>e.id).map(t=>{var i,o;return null===(o=null===(i=e.content)||void 0===i?void 0:i[t])||void 0===o?void 0:o.widgetId})})(r.ReactRedux.useSelector(i=>{var o,n,l,r;const s=null===(l=null===(n=null===(o=(i=i.appStateInBuilder).appConfig.widgets)||void 0===o?void 0:o[e])||void 0===n?void 0:n.layouts)||void 0===l?void 0:l[t],d=i.browserSizeMode,c=i.appConfig.mainSizeMode,u=a.searchUtils.findLayoutId(s,d,c);return null===(r=i.appConfig.layouts)||void 0===r?void 0:r[u]})),o=r.ReactRedux.useSelector(e=>e.appStateInBuilder.appConfig.widgets);return(0,r.Immutable)(i||[]).map(e=>{var t;return{label:null===(t=o[e])||void 0===t?void 0:t.label,value:e}})}},41496:e=>{"use strict";e.exports=a},45508:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6.5 7.5A.5.5 0 0 1 7 7h1.5v4.5h1a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1h1V8H7a.5.5 0 0 1-.5-.5"></path><path fill="#000" fill-rule="evenodd" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16m0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14" clip-rule="evenodd"></path></svg>'},49014:(e,t,i)=>{"use strict";i.d(t,{A:()=>o});const o={_widgetLabel:"Widget Controller",openWidget:"How many widgets can be opened",displayType:"Display type",iconStyle:"Icon",showIconLabel:"Label",iconSizeOverride:"Size",iconInterval:"Spacing",advancedIconStyle:"Icon style",advancedIconColor:"Icon color",buttonSize:"Button size",openStart:"Open widgets on loading",widgetsSelected:"{widgetNumber} widgets selected",appearanceTip:"Select the widgets inside the Widget Controller, and customize their icons, labels, or styles to change their appearances.",appearanceTipExpress:"Customize widget icon styles within the Widget Controller to change their appearances.",widgetPanelArrangment:"Widget panel arrangement",panelFloating:"Floating",indicator:"Indicator",messageAction_openWidget:"Open widget",messageAction_toggleWidget:"Toggle widget",overflownStyle:"Overflow style",popupWindow:"Popup window"}},54337:e=>{"use strict";e.exports=d},67386:e=>{"use strict";e.exports=i},79244:e=>{"use strict";e.exports=o},79298:e=>{"use strict";e.exports=n}},t={};function u(i){var o=t[i];if(void 0!==o)return o.exports;var n=t[i]={exports:{}};return e[i](n,n.exports,u),n.exports}u.d=(e,t)=>{for(var i in t)u.o(t,i)&&!u.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},u.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),u.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.p="";var p={};return u.p=window.jimuConfig.baseUrl,(()=>{"use strict";u.r(p),u.d(p,{default:()=>s});var e=u(67386),t=u(79244),i=u(79298),o=u(49014),n=u(14321),l=u(38043),r=u(17087);function a(i){const{widgetId:o,selectedWidgetIds:a,onChange:s}=i,d=t.ReactRedux.useSelector(e=>{var t,i;const n=null===(t=e.appStateInBuilder.appConfig.widgets[o])||void 0===t?void 0:t.config;return null===(i=null==n?void 0:n.behavior)||void 0===i?void 0:i.onlyOpenOne}),c=(0,l.useControlledWidgets)(o,r.bC),u=t.React.useCallback((e,t)=>{s([t])},[s]),p=t.React.useCallback((e,t)=>{s(t)},[s]),g=t.hooks.useTranslation(n.defaultMessages),v=t.React.useCallback(e=>g("numSelected",{number:e.length}),[g]);return t.React.useEffect(()=>{d&&a.length>1&&s([a[0]]),d&&0===a.length&&c.length>0&&s([c[0].value])},[c,d,s,a]),(0,e.jsxs)(t.React.Fragment,{children:[d&&(0,e.jsx)(n.Select,{value:a[0]||"",onChange:u,children:c.map(t=>(0,e.jsx)(n.Option,{value:t.value,children:t.label},t.value))}),!d&&(0,e.jsx)(n.MultiSelect,{values:a||[],className:"pt-1 custom-multiselect",displayByValues:v,onChange:p,children:c.map(t=>(0,e.jsx)(n.MultiSelectItem,{value:t.value,label:t.label},t.value))})]})}function s(n){const{actionId:l,widgetId:r,onSettingChange:s}=n,d=n.config,c=t.hooks.useTranslation(o.A),u=t.React.useCallback(e=>{s({actionId:l,config:d.set("widgetIds",e)})},[l,d,s]);return(0,e.jsx)("div",{children:(0,e.jsx)(i.SettingSection,{children:(0,e.jsx)(i.SettingRow,{label:c("messageAction_toggleWidget"),flow:"wrap",children:(0,e.jsx)(a,{widgetId:r,selectedWidgetIds:d.widgetIds,onChange:u})})})})}})(),p})())}}});