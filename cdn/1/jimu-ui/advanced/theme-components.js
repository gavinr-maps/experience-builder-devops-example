System.register(["jimu-core","jimu-theme","jimu-ui","jimu-ui/advanced/setting-components","jimu-ui/advanced/style-setting-components","jimu-ui/basic/color-picker"],(function(e,t){var o={},r={},n={},a={},l={},s={};return{setters:[function(e){o.Immutable=e.Immutable,o.React=e.React,o.ThemeThemeAlertColorKeys=e.ThemeThemeAlertColorKeys,o.ThemeThemeColorKeys=e.ThemeThemeColorKeys,o.classNames=e.classNames,o.css=e.css,o.injectIntl=e.injectIntl,o.jsx=e.jsx,o.utils=e.utils},function(e){r.PaletteGenerator=e.PaletteGenerator,r.registerStyles=e.registerStyles,r.styled=e.styled,r.withStyles=e.withStyles},function(e){n.Button=e.Button,n.Dropdown=e.Dropdown,n.DropdownButton=e.DropdownButton,n.DropdownItem=e.DropdownItem,n.DropdownMenu=e.DropdownMenu,n.Label=e.Label,n.SVG=e.SVG,n.Slider=e.Slider,n.Tooltip=e.Tooltip,n.defaultMessages=e.defaultMessages,n.hooks=e.hooks},function(e){a.SettingRow=e.SettingRow,a.SettingSection=e.SettingSection},function(e){l.FontFamilySelector=e.FontFamilySelector},function(e){s.ColorPicker=e.ColorPicker}],execute:function(){e((()=>{var e={18371:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m6.036 12.157 8.01-8.01a.5.5 0 1 1 .707.707l-8.01 8.01a1 1 0 0 1-1.415 0L1.146 8.682a.5.5 0 1 1 .708-.707l4.182 4.182Z" fill="#000"></path></svg>'},59788:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.146 4.653a.485.485 0 0 1 .708 0L8 10.24l5.146-5.587a.485.485 0 0 1 .708 0 .538.538 0 0 1 0 .738l-5.5 5.956a.485.485 0 0 1-.708 0l-5.5-5.956a.538.538 0 0 1 0-.738Z" fill="#000"></path></svg>'},3273:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.653 13.854a.485.485 0 0 1 0-.708L10.24 8 4.653 2.854a.485.485 0 0 1 0-.708.538.538 0 0 1 .738 0l5.956 5.5a.485.485 0 0 1 0 .708l-5.956 5.5a.538.538 0 0 1-.738 0Z" fill="#000"></path></svg>'},59216:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.226 1.312c-.403-.404-1.044-.417-1.431-.03L2.49 8.587l-.48 2.674a.637.637 0 0 0 .73.73l2.673-.48 7.305-7.306c.387-.387.374-1.028-.03-1.431l-1.462-1.462Zm-8.113 9.575.32-1.781 4.991-4.992 1.462 1.462-4.992 4.991-1.781.32Zm7.473-6.012 1.402-1.4-1.462-1.463-1.401 1.402 1.461 1.461Z" fill="#000"></path><path d="M1.5 14a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13Z" fill="#000"></path></svg>'},48891:e=>{"use strict";e.exports=o},34796:e=>{"use strict";e.exports=r},30726:e=>{"use strict";e.exports=n},77756:e=>{"use strict";e.exports=a},55505:e=>{"use strict";e.exports=l},41362:e=>{"use strict";e.exports=s}},t={};function i(o){var r=t[o];if(void 0!==r)return r.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,i),n.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var c={};return(()=>{"use strict";i.r(c),i.d(c,{PaletteSelector:()=>V,ThemeColorConfigurator:()=>q,ThemeQuickStyler:()=>$,ThemeSelector:()=>g,_ThemeColorConfigurator:()=>Z});var e={};i.r(e),i.d(e,{FontSizeSelector:()=>l,PaletteSelector:()=>n,ThemeColorConfigurator:()=>a,ThemeQuickStyler:()=>r,ThemeSelector:()=>o});var t=i(48891);const o=()=>t.css`
    .theme-selector-page {
      display: flex;
      &.vertical {
        flex-direction: column;
        > .theme-selector-card + .theme-selector-card {
        margin-left: 0;
        margin-top: 1rem;
      }
      }
    }
  `,r=e=>{const o=e.theme,r=e.rtl;return t.css`
    .theme-info-area {
      height: 140px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .coloration-option {
      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
      .droplet {
        display: inline-block;
        width: 14px;
        height: 14px;
        margin-bottom: -6px;
        border-radius: 50%;
        background: currentColor;
        &::after {
          content: "";
          width: 0;
          height: 0;
          display: block;
          margin-top: -17px;
          border-width: 11px 7px;
          border-style: solid;
          border-color: transparent transparent currentColor transparent;
        }
        + .droplet {
          margin-right: -4px;
        }
      }
    }
    .setting--item-selector.coloration-selector {
      padding-bottom: ${o.sizes[3]};
      position: relative;
      &::after {
        content: ' ';
        display: block;
        width: 100%;
        height: 1px;
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        background: ${o.colors.palette.light[800]};
      }
      .setting--item-selector-item {
        &.active {
          &::before {
            content: ' ';
            display: block;
            width: 12px;
            height: 12px;
            border: 1px solid ${o.colors.palette.light[800]};
            border-right-width: 0;
            border-bottom-width: 0;
            background: ${o.colors.palette.light[300]};
            position: absolute;
            bottom: -6.48528px; /* ～ square root of ((12px * 12px) / 2) - 2px  */
            transform: rotate(${r?"-45deg":"45deg"});
            z-index: 1;
          }
        }
      }
    }
  `},n=()=>t.css`
    .dropdown-toggle {
      padding-left: 0;
      padding-right: 0;
      .dropdown-toggle-content {
        display: flex;
      }
    }
    .color-palette {
      flex: 1;
    }
  `,a=e=>{var o,r,n;const a=e.theme;return t.css`
    .color-picker-block {
      width: auto;
      height: auto;
      padding: 0;
    }
    .color-block {
      width: 1.125rem;
      height: 1.125rem;
      justify-content: center;
      display: flex;
      border: 0;
      position: relative;
      box-shadow: 0 0 0 2px rgba(255,255,255, 0.15);
      transition: box-shadow .15s ease-out;
      border-radius: 100%;
      outline: 0;
      &::after {
        content: ' ';
        display: block;
        width: 0;
        height: 0;
        border: 5px solid transparent;
        border-top-color: currentColor;
        border-bottom-width: 0;
        top: 1.5rem;
        position: relative;
      }
      &:hover {
        box-shadow: 0 0 0 4px rgba(255,255,255,.5);
      }
      > .color-presenter {
        border: 0;
        border-radius: 100%;
        margin: -1px;
      }
    }
    .theme-color-configurator--shades {
      width: 1.25rem;
      border: 1px solid ${null===(n=null===(r=null===(o=null==a?void 0:a.colors)||void 0===o?void 0:o.palette)||void 0===r?void 0:r.light)||void 0===n?void 0:n[500]};
      > span {
        display: block;
        width: 100%;
        height: 1.25rem;
        background: currentColor;
        &.main-color-shade {
          &::after {
            content: ' ';
            display: block;
            width: 0;
            height: 0;
            border: 4px solid transparent;
            border-left-color: var(--dark-500);
            position: relative;
            left: -5px;
            top: 50%;
            transform: translateY(-50%);
          }
        }
      }
    }
  `},l=e=>{var o,r,n,a,l,s,i;const c=e.theme;return t.css`
    position: relative;
    padding-bottom: 1.5rem;
    > i {
      font-style: normal;
      min-width: 1.25rem;
      text-align: center;
    }
    .slider-rules {
      position: absolute;
      bottom: 0;
      left: 2.25rem;
      right: 2.25rem;
      font-size: ${null===(r=null===(o=null==c?void 0:c.typography)||void 0===o?void 0:o.sizes)||void 0===r?void 0:r.body2};
      color: ${null===(a=null===(n=null==c?void 0:c.colors)||void 0===n?void 0:n.palette)||void 0===a?void 0:a.dark[400]};
      > span {
        display: inline-block;
        transform: translateX(-50%);
        position: absolute;
        bottom: 0;
        &.active {
          color: ${null===(l=null==c?void 0:c.body)||void 0===l?void 0:l.color};
          font-size: ${null===(i=null===(s=null==c?void 0:c.typography)||void 0===s?void 0:s.sizes)||void 0===i?void 0:i.body1};
          margin-bottom: -1px;
        }
      }
    }
  `};var s=i(34796),m=i(30726),p=i(18371),d=i.n(p);const h=e=>{const{className:o}=e,r=function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(o[r[n]]=e[r[n]])}return o}(e,["className"]),n=(0,t.classNames)("jimu-icon jimu-icon-component",o);return t.React.createElement(m.SVG,Object.assign({className:n,src:d()},r))},u=e=>{var o,r;const{className:n,themeInfo:a,selectedTheme:l,onSelect:s}=e,i=a.uri===l,c=null!==(r=null===(o=a.i18nLabel)||void 0===o?void 0:o[window.locale])&&void 0!==r?r:a.label,p=a.font,d=((e,o)=>t.React.useMemo((()=>{var r,n,a;return t.css`
    display: flex;
    flex-direction: column;
    align-items: center;
    > .btn {
      width: 100%;
      height:auto;
      background: var(--light-200);
      border: 2px solid transparent;
      &:hover {
        border: 2px solid transparent;
      }
      &:not(:disabled):not(.disabled):active, 
      &:not(:disabled):not(.disabled).active {
        background: var(--light-200);
        border: 2px solid var(--primary-700);
      }
      > .theme-preview {
        width: 100%;
        height: 140px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        background: url(${e}) no-repeat center;
        background-size: cover;
        .theme-preview--inner {
          font-size: small;
          text-align: center;
          line-height: 1;
          > img {
            width: 100%;
          }
          label {
            margin-bottom: 0;
            line-height: 1.25;
            font-size: 1.25rem;
            font-family: ${null!==(r=null==o?void 0:o.fontFamily)&&void 0!==r?r:"inherit"};
            font-weight: ${null!==(n=null==o?void 0:o.fontWeight)&&void 0!==n?n:"inherit"};
            color: ${null!==(a=null==o?void 0:o.color)&&void 0!==a?a:"inherit"};
          }
        }
        > label {
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          max-width: 100%;
          margin-top: .5rem;
          margin-bottom: 1rem;
        }
      }
    }
    > label {
      margin-bottom: 0;
      margin-top: 0.25rem;
    }
    + .theme-card {
      margin-left: 1rem;
    }
    &.active {
      position: relative;
      .check-ribbon {
        position: absolute;
        padding: .25rem;
        background: var(--primary-700);
        inline-size: inherit;
        line-height: 1;
        z-index: 1;
        right: 0px;
        top: 0px;
        color: var(--white);
      }
    }
  `}),[o,e]))(`../${a.uri}thumbnail.png`,p),u=(0,t.classNames)("theme-selector-card",n,{active:i});return(0,t.jsx)("div",{className:u,css:d},i&&(0,t.jsx)("span",{className:"check-ribbon"},(0,t.jsx)(h,null)),(0,t.jsx)(m.Button,{className:"p-0",onClick:()=>null==s?void 0:s(a.uri),active:i},(0,t.jsx)("div",{className:"theme-preview",title:c},(0,t.jsx)("div",{className:"theme-preview--inner text-break"},(0,t.jsx)(m.Label,{className:"mx-3"},c)))))},g=(0,s.withStyles)((e=>{const{className:o,themeListInfo:r,selectedTheme:n,onChange:a}=e,l=(0,t.classNames)("jimu-theme-selector",o),s=m.hooks.useTranslate();return t.React.createElement(t.React.Fragment,null,r&&t.React.createElement("div",{className:l},t.React.createElement("div",{className:"theme-selector-page vertical"},r.map((e=>t.React.createElement(u,{key:e.name,selectedTheme:n,themeInfo:e,onSelect:a}))))),!r&&t.React.createElement("div",{className:"loading"},s("loading")))}),"ThemeSelector");var f=i(77756),v=i(41362),b=i(59216),y=i.n(b);const w=e=>{const{className:o}=e,r=function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(o[r[n]]=e[r[n]])}return o}(e,["className"]),n=(0,t.classNames)("jimu-icon jimu-icon-component",o);return t.React.createElement(m.SVG,Object.assign({className:n,src:y()},r))};const x=(0,s.styled)(v.ColorPicker)`
  width: 3rem;
  height: 3rem;
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.15);
  transition: box-shadow 0.15s ease-out;
  border-radius: 100%;
  outline: 0;
  color: white;
  &:hover {
    box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.5);
  }
`,C=e=>{const{className:o}=e,r=function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(o[r[n]]=e[r[n]])}return o}(e,["className"]),n=(0,t.classNames)(o,"primary-color-picker");return t.React.createElement(x,Object.assign({className:n,icon:t.React.createElement(w,null),type:"icon-only"},r))};class j extends t.React.PureComponent{constructor(){super(...arguments),this.onColorChange=e=>{this.props.onChange&&this.props.onChange({colors:{primary:e}})},this.i18n=e=>{const t=this.props.intl;return t?t.formatMessage({id:e,defaultMessage:m.defaultMessages[e]}):e}}render(){const{className:e,primaryColor:o}=this.props,r=(0,t.classNames)("jimu-builder-theme-primary-color-configurator",e,"d-flex flex-column");return t.React.createElement("div",{className:r},t.React.createElement("div",{className:"jumbo-color-picker"},t.React.createElement(C,{className:"mx-auto mb-2",color:o,onChange:e=>this.onColorChange(e)})),t.React.createElement("label",null,this.i18n("variableColorPrimary")))}}var S=i(55505);class k extends t.React.PureComponent{constructor(){super(...arguments),this.onFontSizeChange=e=>{const t=e.currentTarget.value,o=this.props.options[t-1];this.props&&this.props.onChange&&this.props.onChange(o)}}render(){const{fontSize:e,options:o,className:r}=this.props,n=(0,t.classNames)("setting--fontsize-selector",r,"d-flex align-items-center"),a=null===window||void 0===window?void 0:window._appState.appContext.isRTL,l=o?o.length:1,s=o.length>1?100/(o.length-1):0;let i=1;return o&&o.some(((t,o)=>t===e&&(i=o+1,!0))),t.React.createElement("div",{className:n},(null==o?void 0:o.length)>0?t.React.createElement(t.React.Fragment,null,t.React.createElement("i",{style:{fontSize:"12px"}},"A"),t.React.createElement(m.Slider,{min:1,max:l,value:i,className:"mx-3",onChange:this.onFontSizeChange}),t.React.createElement("div",{className:"slider-rules"},o.map(((e,o)=>t.React.createElement("span",{key:o,className:i===o+1?"active":void 0,style:{[a?"right":"left"]:o*s+"%"}},t.utils.formatPercentageNumber(e))))),t.React.createElement("i",{style:{fontSize:"18px"}},"A")):null)}}k.defaultProps={options:["87.5%","100%","125%"]};const O=(0,s.withStyles)(k,"FontSizeSelector"),R=["75%","87.5%","100%","125%"];class N extends t.React.PureComponent{constructor(){super(...arguments),this.onFontChange=e=>{this.props.onChange({typography:{fontFamilyBase:e}})},this.onFontSizeChange=e=>{this.props.onChange({typography:{fontSizeRoot:e}})},this.i18n=e=>{const t=this.props.intl;return t?t.formatMessage({id:e,defaultMessage:m.defaultMessages[e]}):e}}render(){var e,o;const{className:r,themeVariables:n}=this.props,a=(0,t.classNames)("jimu-builder-theme-fontset-configurator",r,"w-100");let l=null===(e=null==n?void 0:n.typography)||void 0===e?void 0:e.fontFamilyBase;return"string"==typeof l&&(l=l.split(",")[0].replace(/['"]+/g,"")),t.React.createElement("div",{className:a},t.React.createElement(f.SettingRow,null,t.React.createElement(S.FontFamilySelector,{font:l,onChange:e=>this.onFontChange(e)})),t.React.createElement(f.SettingRow,null,t.React.createElement(O,{className:"w-100",fontSize:null===(o=null==n?void 0:n.typography)||void 0===o?void 0:o.fontSizeRoot,options:R,onChange:e=>this.onFontSizeChange(e)})))}}const E=(0,t.injectIntl)(N);var T=i(3273),P=i.n(T);const M=e=>{const{className:o}=e,r=function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(o[r[n]]=e[r[n]])}return o}(e,["className"]),n=(0,t.classNames)("jimu-icon jimu-icon-component",o);return t.React.createElement(m.SVG,Object.assign({className:n,src:P()},r))};class I extends t.React.PureComponent{constructor(e){super(e),this.onColorChange=e=>{var t,o,r;const{colors:n}=e,a=null===(o=null===(t=this.props)||void 0===t?void 0:t.themeVariables)||void 0===o?void 0:o.darkTheme,l=this.paletteGenerator.generate(n,a);null===(r=this.props)||void 0===r||r.onChange({colors:Object.assign(Object.assign({},n),{palette:l})})},this.onFontChange=e=>{var t;null===(t=this.props)||void 0===t||t.onChange(e)},this.i18n=e=>{const t=this.props.intl;return t?t.formatMessage({id:e,defaultMessage:m.defaultMessages[e]}):e},this.paletteGenerator=new s.PaletteGenerator}render(){var e,o;const{className:r,themeVariables:n,intl:a}=this.props,l=(0,t.classNames)("jimu-builder-theme-quickstyler",r);return t.React.createElement("div",{className:l},n?t.React.createElement(t.React.Fragment,null,t.React.createElement(f.SettingSection,{title:this.i18n("themeSettingThemeColors")},t.React.createElement(f.SettingRow,{flow:"wrap"},t.React.createElement(j,{primaryColor:null===(e=null==n?void 0:n.colors)||void 0===e?void 0:e.primary,className:"m-auto",onChange:this.onColorChange,intl:a})),t.React.createElement(f.SettingRow,null,t.React.createElement(m.Button,{type:"tertiary",className:"w-100 p-0 d-flex justify-content-between align-items-center",onClick:null===(o=this.props)||void 0===o?void 0:o.onMoreColorConfigButtonClick},this.i18n("themeSettingThemeColorAdvanced"),t.React.createElement(M,{className:"m-0",autoFlip:!0})))),t.React.createElement(f.SettingSection,{title:this.i18n("themeSettingThemeFont")},t.React.createElement(f.SettingRow,null,t.React.createElement(E,{themeVariables:n,onChange:this.onFontChange})))):"")}}const $=(0,s.withStyles)((0,t.injectIntl)(I),"ThemeQuickStyler");function F(e){return(0,t.jsx)("div",{className:"color-palette-block border border-light-800",css:t.css`
    width: 2rem;
    height: 1.25rem;
    background: ${e.color};
    margin-left: -1px;
  `})}function z(e,o,r){if(!e)return(0,t.jsx)("span",null,"---");const n=[];let a,l;const s=Object.keys(t.ThemeThemeAlertColorKeys);return Object.keys(t.ThemeThemeColorKeys).forEach(((r,i)=>{o&&s.includes(r)||("Dark"===r?a=i:"Light"===r&&(l=i),n.push((0,t.jsx)(F,{key:r,color:e[t.ThemeThemeColorKeys[r]]})))})),r&&a>-1&&l>-1&&([n[a],n[l]]=[n[l],n[a]]),(0,t.jsx)("div",{className:"color-palette d-flex"},n)}var D=i(59788),G=i.n(D);const B=e=>{const{className:o}=e,r=function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(o[r[n]]=e[r[n]])}return o}(e,["className"]),n=(0,t.classNames)("jimu-icon jimu-icon-component",o);return t.React.createElement(m.SVG,Object.assign({className:n,src:G()},r))};class K extends t.React.PureComponent{constructor(e){super(e),this._optionsToKeep=(0,t.Immutable)([]),this.getColorPaletteOptions=e=>{const o=[];let r=!1;const n=this.props.isDarkTheme;if(n&&(e=e.merge({light:e.dark,dark:e.light})),this._optionsToKeep.concat(L).forEach(((a,l)=>{const s=e.merge(a);let i=!1;r||(r=this.arePalettesEqual(e,s),r&&(i=!0)),o.push(t.React.createElement(m.DropdownItem,{className:"py-2",onClick:()=>this.onPaletteClick(s),key:l+1,active:i},z(s,!1,n)))})),!r){const r=t.React.createElement(m.DropdownItem,{className:"py-2",onClick:()=>this.onPaletteClick(e),key:0,active:!0},z(e,!1,n));o.splice(0,0,r),this._optionsToKeep=(0,t.Immutable)([e])}return o},this.i18n=e=>{const t=this.props.intl;return t?t.formatMessage({id:e,defaultMessage:m.defaultMessages[e]}):e},this.state={menuOpened:!1}}onPaletteClick(e){this.props&&this.props.onChange&&this.props.onChange(e)}arePalettesEqual(e,t){return!(!e||!t)&&!Object.keys(e).some((o=>e[o].toLowerCase()!==t[o].toLowerCase()))}render(){const{palette:e,className:o,style:r,dropdown:n}=this.props,a=(0,t.classNames)("setting--palette-selector",o);return t.React.createElement(m.Dropdown,{style:r,direction:n?n.direction:void 0,isOpen:this.state.menuOpened,toggle:e=>{this.setState({menuOpened:!this.state.menuOpened})},className:a,activeIcon:!0,menuItemCheckMode:"singleCheck"},t.React.createElement(m.DropdownButton,{type:"tertiary",className:"p-0",arrow:t.React.createElement(B,null)}),t.React.createElement(m.DropdownMenu,null,this.getColorPaletteOptions(e)))}}const L=(0,t.Immutable)([{primary:"#0a77c6",secondary:"#ecf1f8",info:"#4aa0e2",success:"#7ed321",warning:"#f8e71c",danger:"#f6143a",light:"#f8f8f8",dark:"#080808"},{primary:"#ff7121",secondary:"#2d1754",info:"#09acf8",success:"#00cca5",warning:"#ffab21",danger:"#f6146f",light:"#fff",dark:"#333"},{primary:"#21cfca",secondary:"#242933",info:"#00b7ff",success:"#07ea58",warning:"#f8e71c",danger:"#d0021b",light:"#fff",dark:"#000"},{primary:"#f74d61",secondary:"#153054",info:"#00b7ff",success:"#07ea58",warning:"#f8e71c",danger:"#ff001f",light:"#fff",dark:"#111"},{primary:"#4ccded",secondary:"#1b476d",info:"#00b7ff",success:"#07ea58",warning:"#f8e71c",danger:"#d0021b",light:"#fff",dark:"#111"},{primary:"#442b57",secondary:"#ffd11c",info:"#09acf8",success:"#00cca5",warning:"#ffab21",danger:"#f6146f",light:"#fff",dark:"#2d3235"}]),V=(0,s.withStyles)((0,t.injectIntl)(K),"PaletteSelector");var _=function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(o[r[n]]=e[r[n]])}return o};const A=e=>{const{themeColors:o,allColors:r,onColorChange:n,intl:a}=e,{palette:l}=r,s=_(r,["palette"]),i=t.React.useCallback((e=>a?a.formatMessage({id:e,defaultMessage:m.defaultMessages[e]}):e),[a]);return t.React.createElement(t.React.Fragment,null,Object.keys(o).map((e=>{const o=i(`variableColor${e.charAt(0).toUpperCase()+e.slice(1)}`),r="light"===e?"100":"dark"===e?"900":"500";return t.React.createElement("div",{className:"theme-color-configurator--column",key:e},t.React.createElement(m.Tooltip,{showArrow:!0,placement:"top",title:"string"==typeof e&&i(`variableColor${e.charAt(0).toUpperCase()+e.slice(1)}`)},t.React.createElement(v.ColorPicker,{style:{color:s[e]},className:"mr-2 mb-4 rounded-pill",id:`colorConfigurator_colorPicker_${e}`,color:s[e],onChange:t=>n(e,t)},t.React.createElement("span",null))),t.React.createElement("div",{className:"theme-color-configurator--shades"},l&&Object.keys(l[e]).map((n=>t.React.createElement("span",{title:`${o}-${n}${n===r?` (${o})`:""}: ${l[e][n]}`,className:n===r?"main-color-shade":void 0,key:`${e}-${n}`,style:{color:l[e][n]}})))))})))};class Z extends t.React.PureComponent{constructor(e){super(e),this.onColorChange=(e,t)=>{var o,r,n;const a=null===(r=null===(o=this.props)||void 0===o?void 0:o.themeVariables)||void 0===r?void 0:r.darkTheme,l=this.paletteGenerator.generate({[e]:t},a);null===(n=this.props)||void 0===n||n.onChange({colors:{[e]:t,palette:Object.assign({},l)}})},this.onPaletteChange=e=>{var t,o,r;const n=null===(o=null===(t=this.props)||void 0===t?void 0:t.themeVariables)||void 0===o?void 0:o.darkTheme,a=this.paletteGenerator.generate(e,n);null===(r=this.props)||void 0===r||r.onChange({colors:Object.assign(Object.assign({},e.asMutable()),{palette:a})})},this.paletteGenerator=new s.PaletteGenerator}render(){var e;const{className:o,themeVariables:r,intl:n}=this.props,a=null!==(e=null==r?void 0:r.colors)&&void 0!==e?e:{},{palette:l}=a,s=_(a,["palette"]);let i=(0,t.Immutable)({});Object.keys(t.ThemeThemeColorKeys).forEach((e=>{i=i.set(t.ThemeThemeColorKeys[e],s[t.ThemeThemeColorKeys[e]])}));const c=(0,t.classNames)("jimu-builder-theme-color-configurator",o);return t.React.createElement("div",{className:c},t.React.createElement(A,{themeColors:i,allColors:null==r?void 0:r.colors,onColorChange:this.onColorChange,intl:n}),t.React.createElement(V,{className:"d-block",style:{marginTop:"-2px"},palette:i,isDarkTheme:r.darkTheme,dropdown:{direction:"right",appendTo:"body"},onChange:this.onPaletteChange,intl:n}))}}const q=(0,s.withStyles)(Z,"ThemeColorConfigurator");(0,s.registerStyles)("jimu-ui/advanced/theme-components/",e)})(),c})())}}}));