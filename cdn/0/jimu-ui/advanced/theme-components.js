System.register(["jimu-core","jimu-ui","jimu-ui/advanced/setting-components","jimu-ui/basic/color-picker","jimu-ui/advanced/style-setting-components"],(function(e){var t,r,n,o,a;return{setters:[function(e){t=e},function(e){r=e},function(e){n=e},function(e){o=e},function(e){a=e}],execute:function(){e(function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=986)}({0:function(e,r){e.exports=t},1:function(e,t){e.exports=r},14:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return n}))},21:function(e,t){e.exports=n},26:function(e,t){e.exports=o},35:function(e,t,r){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}r.d(t,"a",(function(){return n}))},40:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return o})),r.d(t,"d",(function(){return a})),r.d(t,"a",(function(){return E}));var n={white:"#fff",black:"#000",transparent:"transparent"};const o={primary:"#076fe5",secondary:"#c5c5c5",light:"#f0f0f0",dark:"#050505",info:"#089bdc",success:"#09cf74",warning:"#ffea1d",danger:"#e1001b"},a={primary:{100:"#e6f2ff",200:"#acd3ff",300:"#65adff",400:"#2c8fff",500:"#076fe5",600:"#005eca",700:"#004ca3",800:"#003c82",900:"#002958"},secondary:{100:"#f0f0f0",200:"#e3e3e3",300:"#d5d5d5",400:"#c5c5c5",500:"#b6b6b6",600:"#a8a8a8",700:"#989898",800:"#8b8b8b",900:"#828282"},light:{100:"#f0f0f0",200:"#e3e3e3",300:"#d5d5d5",400:"#c5c5c5",500:"#b6b6b6",600:"#a8a8a8",700:"#989898",800:"#8b8b8b",900:"#828282"},dark:{100:"#767676",200:"#6a6a6a",300:"#5e5e5e",400:"#525252",500:"#444444",600:"#363636",700:"#282828",800:"#181818",900:"#050505"},info:{100:"#e5f7ff",200:"#9fe2ff",300:"#60ceff",400:"#21bbff",500:"#089bdc",600:"#0077ac",700:"#005a82",800:"#003b56",900:"#002231"},success:{100:"#ebfff6",200:"#acffd9",300:"#56f8ad",400:"#16ed8a",500:"#09cf74",600:"#03b161",700:"#00904e",800:"#006838",900:"#004022"},warning:{100:"#fffdeb",200:"#fff9c3",300:"#fff592",400:"#fff05f",500:"#ffea1d",600:"#eed800",700:"#d4c000",800:"#b5a400",900:"#938500"},danger:{100:"#ffe9ec",200:"#ff94a1",300:"#ff5066",400:"#ff203c",500:"#e1001b",600:"#bf0017",700:"#9f0013",800:"#79000f",900:"#4a0009"}};var i=r(0),s=(r(14),r(80)),l=r(69),c=r(73),d=r(35);var f=r(81);function u(e,t,r){return(u=Object(f.a)()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&Object(d.a)(o,r.prototype),o}).apply(null,arguments)}function h(e){var t="function"==typeof Map?new Map:void 0;return(h=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e;var r;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return u(e,arguments,Object(c.a)(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),Object(d.a)(n,e)})(e)}var p=function(e){function t(t){var r;return r=e.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+t+" for more information.")||this,Object(s.a)(r)}return Object(l.a)(t,e),t}(h(Error));function m(e){return Math.round(255*e)}function g(e,t,r){return m(e)+","+m(t)+","+m(r)}function b(e,t,r,n){if(void 0===n&&(n=g),0===t)return n(r,r,r);var o=(e%360+360)%360/60,a=(1-Math.abs(2*r-1))*t,i=a*(1-Math.abs(o%2-1)),s=0,l=0,c=0;o>=0&&o<1?(s=a,l=i):o>=1&&o<2?(s=i,l=a):o>=2&&o<3?(l=a,c=i):o>=3&&o<4?(l=i,c=a):o>=4&&o<5?(s=i,c=a):o>=5&&o<6&&(s=a,c=i);var d=r-a/2;return n(s+d,l+d,c+d)}var v={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};var y=/^#[a-fA-F0-9]{6}$/,w=/^#[a-fA-F0-9]{8}$/,k=/^#[a-fA-F0-9]{3}$/,C=/^#[a-fA-F0-9]{4}$/,x=/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i,j=/^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i,O=/^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,S=/^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;function R(e){if("string"!=typeof e)throw new p(3);var t=function(e){if("string"!=typeof e)return e;var t=e.toLowerCase();return v[t]?"#"+v[t]:e}(e);if(t.match(y))return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16)};if(t.match(w)){var r=parseFloat((parseInt(""+t[7]+t[8],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16),alpha:r}}if(t.match(k))return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16)};if(t.match(C)){var n=parseFloat((parseInt(""+t[4]+t[4],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16),alpha:n}}var o=x.exec(t);if(o)return{red:parseInt(""+o[1],10),green:parseInt(""+o[2],10),blue:parseInt(""+o[3],10)};var a=j.exec(t);if(a)return{red:parseInt(""+a[1],10),green:parseInt(""+a[2],10),blue:parseInt(""+a[3],10),alpha:parseFloat(""+a[4])};var i=O.exec(t);if(i){var s="rgb("+b(parseInt(""+i[1],10),parseInt(""+i[2],10)/100,parseInt(""+i[3],10)/100)+")",l=x.exec(s);if(!l)throw new p(4,t,s);return{red:parseInt(""+l[1],10),green:parseInt(""+l[2],10),blue:parseInt(""+l[3],10)}}var c=S.exec(t);if(c){var d="rgb("+b(parseInt(""+c[1],10),parseInt(""+c[2],10)/100,parseInt(""+c[3],10)/100)+")",f=x.exec(d);if(!f)throw new p(4,t,d);return{red:parseInt(""+f[1],10),green:parseInt(""+f[2],10),blue:parseInt(""+f[3],10),alpha:parseFloat(""+c[4])}}throw new p(5)}function T(e){return function(e){var t,r=e.red/255,n=e.green/255,o=e.blue/255,a=Math.max(r,n,o),i=Math.min(r,n,o),s=(a+i)/2;if(a===i)return void 0!==e.alpha?{hue:0,saturation:0,lightness:s,alpha:e.alpha}:{hue:0,saturation:0,lightness:s};var l=a-i,c=s>.5?l/(2-a-i):l/(a+i);switch(a){case r:t=(n-o)/l+(n<o?6:0);break;case n:t=(o-r)/l+2;break;default:t=(r-n)/l+4}return t*=60,void 0!==e.alpha?{hue:t,saturation:c,lightness:s,alpha:e.alpha}:{hue:t,saturation:c,lightness:s}}(R(e))}class E{constructor(){this.shadeCount=9}getLightness(e){const t=T(e);return t&&t.lightness}getShadeLevel(e,t,r){return e>t[1]?1:e<t[0]?this.shadeCount:this.shadeCount-Math.ceil((e-t[0])/r)}getColorsByShade(e,t,r,n){const o={},a=parseInt(""+100*this.getLightness(e))/100;let s=(r[1]-a)/(t-1),l=(a-r[0])/(this.shadeCount-t);s=s>.1?.1:s,l=l>.1?.1:l;for(let r=1;r<=this.shadeCount;r++){const a=100*(n?this.shadeCount-r+1:r);o[a]=r===t?e:r<t?s<0?"#fff":i.polished.lighten((t-r)*s,e):l<0?"#000":i.polished.darken((r-t)*l,e)}return o}generate(e,t){try{const r={};let n;for(const o in e){const a=[.1,.9];"light"===o||"dark"===o?t&&"light"===o||!t&&"dark"===o?(a[1]=.49,n=this.shadeCount):(a[0]=.5,n=1):n=Math.ceil(this.shadeCount/2),r[o]=this.getColorsByShade(e[o].trim(),n,a,t)}return r}catch(e){console.error(e)}}revertPalette(e){const t={};return Object.keys(e).forEach(r=>{const n=Object.keys(e[r]).length;t[r]={};for(let o=Math.ceil(n/2);o>0;o--)t[r][100*o]=e[r][100*(n-o+1)],t[r][100*(n-o+1)]=e[r][100*o]}),t.dark=[t.light,t.light=t.dark][0],t}}},53:function(e,t){e.exports=a},61:function(e,t){e.exports='<svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M.146 3.146a.5.5 0 01.708 0L6 8.5l5.146-5.354a.5.5 0 01.708.708l-5.5 5.707a.5.5 0 01-.708 0l-5.5-5.707a.5.5 0 010-.708z" fill="#000"></path></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h12v12H0z"></path></clipPath></defs></svg>'},69:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(35);function o(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Object(n.a)(e,t)}},73:function(e,t,r){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}r.d(t,"a",(function(){return n}))},79:function(e,t){e.exports='<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M9.521 5.47L3.981.162a.592.592 0 00-.813 0 .534.534 0 000 .779L8.448 6l-5.28 5.06a.534.534 0 000 .779.592.592 0 00.813 0l5.54-5.31a.726.726 0 000-1.058z" fill="#000"></path><path d="M0 0h12v12H0z"></path></g></svg>'},80:function(e,t,r){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.d(t,"a",(function(){return n}))},81:function(e,t,r){"use strict";function n(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}r.d(t,"a",(function(){return n}))},95:function(e,t){e.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M2.212 9.936L2 12.27l2.333-.212L13.27 3.12 11.149 1 2.212 9.936zm-.707-.707L10.441.293a1 1 0 011.415 0l2.12 2.121a1 1 0 010 1.414l-8.935 8.937a1 1 0 01-.617.289l-2.333.212a1 1 0 01-1.087-1.087l.212-2.333a1 1 0 01.289-.617zm7.434-6.497l2.829 2.829-.707.707-2.829-2.829.707-.707zM.5 15h15a.5.5 0 010 1H.5a.5.5 0 010-1z" fill="#000" fill-rule="nonzero"></path></svg>'},986:function(e,t,r){"use strict";r.r(t),r.d(t,"ThemeSelector",(function(){return b})),r.d(t,"ThemeQuickStyler",(function(){return T})),r.d(t,"_ThemeColorConfigurator",(function(){return z})),r.d(t,"ThemeColorConfigurator",(function(){return F})),r.d(t,"PaletteSelector",(function(){return P}));var n={};r.r(n),r.d(n,"ThemeSelector",(function(){return a})),r.d(n,"ThemeQuickStyler",(function(){return i})),r.d(n,"PaletteSelector",(function(){return s})),r.d(n,"ThemeColorConfigurator",(function(){return l})),r.d(n,"FontSetSelector",(function(){return c})),r.d(n,"FontSizeSelector",(function(){return d}));var o=r(0);const a=e=>{const t=e.theme;return o.css`
    .theme-preview {
      width: 100%;
      height: 140px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      label {
        margin-bottom: 0;
        line-height: 1.25;
      }
      .theme-preview--inner {
        font-size: small;
        text-align: center;
        line-height: 1;
        > img {
          width: 100%;
        }
      }
      /* .theme-preview--inner-hover {
        display: none;
        background: rgba(0,0,0,0.8);
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        align-items: center;
        justify-content: center;
      } */
      > label {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        max-width: 100%;
        margin-top: .5rem;
        margin-bottom: 1rem;
      }
      &:hover {
        /* .theme-preview--inner-hover {
          display: flex;
        } */
      }
    }

    .setting--item-selector-item.active {
      position: relative;
      .check-ribbon {
        position: absolute;
        padding: .25rem;
        background: ${t.colors.palette.primary[700]};
        inline-size: inherit;
        line-height: 1;
        z-index: 1;
        right: 0px;
        top: 0px;
        color: ${t.colors.white};
      }
    }
  `},i=e=>{const t=e.theme,r=e.rtl;return o.css`
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
      padding-bottom: ${t.sizes[3]};
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
        background: ${t.colors.palette.light[800]};
      }
      .setting--item-selector-item {
        &.active {
          &::before {
            content: ' ';
            display: block;
            width: 12px;
            height: 12px;
            border: 1px solid ${t.colors.palette.light[800]};
            border-right-width: 0;
            border-bottom-width: 0;
            background: ${t.colors.palette.light[300]};
            position: absolute;
            bottom: -6.48528px; /* ～ square root of ((12px * 12px) / 2) - 2px  */
            transform: rotate(${r?"-45deg":"45deg"});
            z-index: 1;
          }
        }
      }
    }
    .jimu-builder-theme-primary-color-configurator {
      .color-picker-block {
        width: auto;
        height: auto;
        padding: 0;
        border-radius: 100%;
      }
      .color-block {
        width: 3rem;
        height: 3rem;
        justify-content: center;
        display: flex;
        border: 0;
        position: relative;
        box-shadow: 0 0 0 2px rgba(255,255,255, 0.15);
        transition: box-shadow .15s ease-out;
        border-radius: 100%;
        outline: 0;
        &:hover {
          box-shadow: 0 0 0 4px rgba(255,255,255,.5);
        }
        > .color-presenter {
          border: 0;
          border-radius: 100%;
          margin: -1px;
        }
      }
      .jumbo-color-picker {
        position: relative;
        .jimu-icon {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translate(-0.5rem, 1rem);
          pointer-events: none;
        }
      }
    }
  `},s=()=>o.css`
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
  `,l=e=>{var t,r,n;const a=e.theme;return o.css`
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
      border: 1px solid ${null===(n=null===(r=null===(t=null==a?void 0:a.colors)||void 0===t?void 0:t.palette)||void 0===r?void 0:r.light)||void 0===n?void 0:n[500]};
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
  `},c=()=>o.css`
  `,d=e=>{var t,r,n,a,i,s,l;const c=e.theme;return o.css`
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
      font-size: ${null===(r=null===(t=null==c?void 0:c.typography)||void 0===t?void 0:t.sizes)||void 0===r?void 0:r.body2};
      color: ${null===(a=null===(n=null==c?void 0:c.colors)||void 0===n?void 0:n.palette)||void 0===a?void 0:a.dark[400]};
      > span {
        display: inline-block;
        transform: translateX(-50%);
        position: absolute;
        bottom: 0;
        &.active {
          color: ${null===(i=null==c?void 0:c.body)||void 0===i?void 0:i.color};
          font-size: ${null===(l=null===(s=null==c?void 0:c.typography)||void 0===s?void 0:s.sizes)||void 0===l?void 0:l.body1};
          margin-bottom: -1px;
        }
      }
    }
  `};var f=r(21),u=r(1);function h(e){return Object(o.jsx)("div",{className:"color-palette-block border border-light-800",css:o.css`
    width: 2rem;
    height: 1.25rem;
    background: ${e.color};
    margin-left: -1px;
  `})}function p(e,t,r){if(!e)return Object(o.jsx)("span",null,"---");const n=[];let a,i;const s=Object.keys(o.ThemeThemeAlertColorKeys);return Object.keys(o.ThemeThemeColorKeys).forEach((r,l)=>{t&&s.includes(r)||("Dark"===r?a=l:"Light"===r&&(i=l),n.push(Object(o.jsx)(h,{key:r,color:e[o.ThemeThemeColorKeys[r]]})))}),r&&a>-1&&i>-1&&([n[a],n[i]]=[n[i],n[a]]),Object(o.jsx)("div",{className:"color-palette d-flex"},n)}class m extends o.React.PureComponent{constructor(e){super(e),this.handleClick=e=>{const t=this.props.onSelect;t&&t(this.props.themeInfo)},this.handleClick.bind(this)}render(){const{themeInfo:e}=this.props,t=Object(o.classNames)("theme-preview");return Object(o.jsx)("div",{className:t,title:e.i18nLabel[window.locale]||e.label,css:o.css`
        background: url(${`../${e.uri}thumbnail.png`}) no-repeat center;
        background-size: cover;
      `},Object(o.jsx)("div",{className:"theme-preview--inner text-break"},function(e){return e?Object(o.jsx)(u.Label,{className:"mx-3",css:e.font?o.css`
    font-size: 1.25rem;
    font-family:${e.font.fontFamily};
    font-weight:${e.font.fontWeight};
    color: ${e.font.color};
  `:null},e.i18nLabel[window.locale]||e.label):null}(e)))}}class g extends o.React.PureComponent{constructor(e){super(e),this.themesPerPage=10,this.onThemeChange=e=>{this.setState({selectedTheme:e}),this.props.onChange&&this.props.onChange(e)},this.state={selectedTheme:this.props.selectedTheme}}static getDerivedStateFromProps(e,t){return e.selectedTheme&&!t.selectedTheme?{selectedTheme:e.selectedTheme}:null}renderPage(e,t){const r=this.state.selectedTheme;return Object(o.jsx)(f.ItemCardSelector,{key:t,vertical:!0,size:{width:"100%",height:"auto"},value:r,options:e.asMutable().map((e,t)=>({value:e.uri,content:Object(o.jsx)(m,{key:t,themeInfo:e})})),gutter:"1rem",onChange:this.onThemeChange})}componentDidUpdate(e){this.props.selectedTheme!==e.selectedTheme&&this.setState({selectedTheme:this.props.selectedTheme})}render(){const{themeListInfo:e,intl:t,className:r}=this.props,n=Object(o.classNames)("jimu-builder-theme-selector",r);if(!e)return Object(o.jsx)("div",{className:"loading"},function(e,t){return e?e.formatMessage({id:t,defaultMessage:u.defaultMessages[t]}):t}(t,"loading"));const a=[];for(let t=0,r=e.length;t<r;t+=this.themesPerPage)a.push(e.slice(t,t+this.themesPerPage));return Object(o.jsx)("div",{className:n,ref:e=>this.themeSelector=e},a.map((e,t)=>this.renderPage(e,t)))}}const b=o.themeUtils.withStyles(g,"ThemeSelector");var v=r(40),y=r(26);class w extends o.React.PureComponent{constructor(){super(...arguments),this.onColorChange=e=>{this.props.onChange&&this.props.onChange({colors:{primary:e}})},this.i18n=e=>{const t=this.props.intl;return t?t.formatMessage({id:e,defaultMessage:u.defaultMessages[e]}):e}}render(){const{className:e,primaryColor:t}=this.props,n=Object(o.classNames)("jimu-builder-theme-primary-color-configurator",e,"d-flex flex-column");return o.React.createElement("div",{className:n},o.React.createElement("div",{className:"jumbo-color-picker"},o.React.createElement(y.ColorPicker,{className:"mx-auto mb-2",width:"3rem",height:"3rem",style:{color:t},color:t,onChange:e=>this.onColorChange(e)}),o.React.createElement(u.Icon,{icon:r(95),size:"1rem"})),o.React.createElement("label",null,this.i18n("variableColorPrimary")))}}var k=r(53);class C extends o.React.PureComponent{constructor(){super(...arguments),this.onFontSizeChange=e=>{const t=e.currentTarget.value,r=this.props.options[t-1];this.props&&this.props.onChange&&this.props.onChange(r)}}render(){const{fontSize:e,options:t,className:r}=this.props,n=Object(o.classNames)("setting--fontsize-selector",r,"d-flex align-items-center"),a=null===window||void 0===window?void 0:window._appState.appContext.isRTL,i=t?t.length:1,s=t.length>1?100/(t.length-1):0;let l=1;return t&&t.some((t,r)=>{t===e&&(l=r+1)}),o.React.createElement("div",{className:n},(null==t?void 0:t.length)>0?o.React.createElement(o.React.Fragment,null,o.React.createElement("i",{style:{fontSize:"12px"}},"A"),o.React.createElement(u.Slider,{min:1,max:i,value:l,className:"mx-3",onChange:this.onFontSizeChange}),o.React.createElement("div",{className:"slider-rules"},t.map((e,t)=>o.React.createElement("span",{key:t,className:l===t+1?"active":void 0,style:{[a?"right":"left"]:t*s+"%"}},function(e){const[t,r]=o.polished.getValueAndUnit(e);return`${Number(t).toLocaleString(Object(o.getAppStore)().getState().appContext.locale)}${null!=r?r:""}`}(e)))),o.React.createElement("i",{style:{fontSize:"18px"}},"A")):null)}}C.defaultProps={options:["87.5%","100%","125%"]};const x=o.themeUtils.withStyles(C,"FontSizeSelector"),j=["75%","87.5%","100%","125%"];class O extends o.React.PureComponent{constructor(e){super(e),this.onFontChange=e=>{this.props.onChange({typography:{fontFamilyBase:e}})},this.onFontSizeChange=e=>{this.props.onChange({typography:{fontSizeRoot:e}})},this.i18n=e=>{const t=this.props.intl;return t?t.formatMessage({id:e,defaultMessage:u.defaultMessages[e]}):e}}render(){var e,t;const{className:r,themeVariables:n}=this.props,a=Object(o.classNames)("jimu-builder-theme-fontset-configurator",r,"w-100");let i=null===(e=null==n?void 0:n.typography)||void 0===e?void 0:e.fontFamilyBase;return"string"==typeof i&&(i=i.split(",")[0].replace(/['"]+/g,"")),o.React.createElement("div",{className:a},o.React.createElement(f.SettingRow,null,o.React.createElement(k.FontFamilySelector,{font:i,onChange:e=>this.onFontChange(e)})),o.React.createElement(f.SettingRow,null,o.React.createElement(x,{className:"w-100",fontSize:null===(t=null==n?void 0:n.typography)||void 0===t?void 0:t.fontSizeRoot,options:j,onChange:e=>this.onFontSizeChange(e)})))}}const S=o.themeUtils.withStyles(Object(o.injectIntl)(O),"FontsetConfigurator");class R extends o.React.PureComponent{constructor(e){super(e),this.onColorChange=e=>{var t,r,n;const{colors:o}=e,a=null===(r=null===(t=this.props)||void 0===t?void 0:t.themeVariables)||void 0===r?void 0:r.darkTheme,i=this.paletteGenerator.generate(o,a);null===(n=this.props)||void 0===n||n.onChange({colors:Object.assign(Object.assign({},o),{palette:i})})},this.onFontChange=e=>{var t;null===(t=this.props)||void 0===t||t.onChange(e)},this.i18n=e=>{const t=this.props.intl;return t?t.formatMessage({id:e,defaultMessage:u.defaultMessages[e]}):e},this.paletteGenerator=new v.a}render(){var e,t;const{className:n,themeVariables:a,intl:i}=this.props,s=Object(o.classNames)("jimu-builder-theme-quickstyler",n);return o.React.createElement("div",{className:s},a?o.React.createElement(o.React.Fragment,null,o.React.createElement(f.SettingSection,{title:this.i18n("themeSettingThemeColors")},o.React.createElement(f.SettingRow,{flow:"wrap"},o.React.createElement(w,{primaryColor:null===(e=null==a?void 0:a.colors)||void 0===e?void 0:e.primary,className:"m-auto",onChange:this.onColorChange,intl:i})),o.React.createElement(f.SettingRow,null,o.React.createElement(u.Button,{type:"tertiary",className:"w-100 p-0 d-flex justify-content-between align-items-center",onClick:null===(t=this.props)||void 0===t?void 0:t.onMoreColorConfigButtonClick},this.i18n("themeSettingThemeColorAdvanced"),o.React.createElement(u.Icon,{className:"m-0",icon:r(79),autoFlip:!0,size:"16"})))),o.React.createElement(f.SettingSection,{title:this.i18n("themeSettingThemeFont")},o.React.createElement(f.SettingRow,null,o.React.createElement(S,{themeVariables:a,onChange:this.onFontChange})))):"")}}const T=o.themeUtils.withStyles(Object(o.injectIntl)(R),"ThemeQuickStyler");class E extends o.React.PureComponent{constructor(e){super(e),this._optionsToKeep=Object(o.Immutable)([]),this.getColorPaletteOptions=e=>{const t=[];let r=!1;const n=this.props.isDarkTheme;if(n&&(e=e.merge({light:e.dark,dark:e.light})),this._optionsToKeep.concat(I).forEach((a,i)=>{const s=e.merge(a);let l=!1;r||(r=this.arePalettesEqual(e,s),r&&(l=!0)),t.push(o.React.createElement(u.DropdownItem,{className:"py-2",onClick:()=>this.onPaletteClick(s),key:i+1,active:l},p(s,!1,n)))}),!r){const r=o.React.createElement(u.DropdownItem,{className:"py-2",onClick:()=>this.onPaletteClick(e),key:0,active:!0},p(e,!1,n));t.splice(0,0,r),this._optionsToKeep=Object(o.Immutable)([e])}return t},this.i18n=e=>{const t=this.props.intl;return t?t.formatMessage({id:e,defaultMessage:u.defaultMessages[e]}):e},this.state={menuOpened:!1}}onPaletteClick(e){this.props&&this.props.onChange&&this.props.onChange(e)}arePalettesEqual(e,t){if(!e||!t)return!1;return!Object.keys(e).some(r=>e[r].toLowerCase()!==t[r].toLowerCase())}render(){const{palette:e,className:t,style:n,dropdown:a}=this.props,i=Object(o.classNames)("setting--palette-selector",t);return o.React.createElement(u.Dropdown,{style:n,direction:a?a.direction:void 0,isOpen:this.state.menuOpened,toggle:e=>{this.setState({menuOpened:!this.state.menuOpened})},className:i,activeIcon:!0},o.React.createElement(u.DropdownButton,{type:"tertiary",className:"p-0",arrow:o.React.createElement(u.Icon,{icon:r(61),size:"16"})}),o.React.createElement(u.DropdownMenu,null,this.getColorPaletteOptions(e)))}}const I=Object(o.Immutable)([{primary:"#0a77c6",secondary:"#ecf1f8",info:"#4aa0e2",success:"#7ed321",warning:"#f8e71c",danger:"#f6143a",light:"#f8f8f8",dark:"#080808"},{primary:"#ff7121",secondary:"#2d1754",info:"#09acf8",success:"#00cca5",warning:"#ffab21",danger:"#f6146f",light:"#fff",dark:"#333"},{primary:"#21cfca",secondary:"#242933",info:"#00b7ff",success:"#07ea58",warning:"#f8e71c",danger:"#d0021b",light:"#fff",dark:"#000"},{primary:"#f74d61",secondary:"#153054",info:"#00b7ff",success:"#07ea58",warning:"#f8e71c",danger:"#ff001f",light:"#fff",dark:"#111"},{primary:"#4ccded",secondary:"#1b476d",info:"#00b7ff",success:"#07ea58",warning:"#f8e71c",danger:"#d0021b",light:"#fff",dark:"#111"},{primary:"#442b57",secondary:"#ffd11c",info:"#09acf8",success:"#00cca5",warning:"#ffab21",danger:"#f6146f",light:"#fff",dark:"#2d3235"}]),P=o.themeUtils.withStyles(Object(o.injectIntl)(E),"PaletteSelector");var N=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};const M=e=>{const{themeColors:t,allColors:r,onColorChange:n,intl:a}=e,{palette:i}=r,s=N(r,["palette"]),l=o.React.useCallback(e=>a?a.formatMessage({id:e,defaultMessage:u.defaultMessages[e]}):e,[a]);return o.React.createElement(o.React.Fragment,null,Object.keys(t).map(e=>{const t=l("variableColor"+(e.charAt(0).toUpperCase()+e.slice(1))),r="light"===e?"100":"dark"===e?"900":"500";return o.React.createElement("div",{className:"theme-color-configurator--column",key:e},o.React.createElement(u.Tooltip,{showArrow:!0,placement:"top",title:"string"==typeof e&&l("variableColor"+(e.charAt(0).toUpperCase()+e.slice(1)))},o.React.createElement(y.ColorPicker,{style:{color:s[e]},className:"mr-2 mb-4 rounded-pill",id:"colorConfigurator_colorPicker_"+e,color:s[e],onChange:t=>n(e,t)},o.React.createElement("span",null))),o.React.createElement("div",{className:"theme-color-configurator--shades"},i&&Object.keys(i[e]).map(n=>o.React.createElement("span",{title:`${t}-${n}${n===r?` (${t})`:""}: ${i[e][n]}`,className:n===r?"main-color-shade":void 0,key:`${e}-${n}`,style:{color:i[e][n]}}))))}))};class z extends o.React.PureComponent{constructor(e){super(e),this.onColorChange=(e,t)=>{var r,n,o;const a=null===(n=null===(r=this.props)||void 0===r?void 0:r.themeVariables)||void 0===n?void 0:n.darkTheme,i=this.paletteGenerator.generate({[e]:t},a);null===(o=this.props)||void 0===o||o.onChange({colors:{[e]:t,palette:Object.assign({},i)}})},this.onPaletteChange=e=>{var t,r,n;const o=null===(r=null===(t=this.props)||void 0===t?void 0:t.themeVariables)||void 0===r?void 0:r.darkTheme,a=this.paletteGenerator.generate(e,o);null===(n=this.props)||void 0===n||n.onChange({colors:Object.assign(Object.assign({},e.asMutable()),{palette:a})})},this.paletteGenerator=new v.a}render(){var e;const{className:t,themeVariables:r,intl:n}=this.props,a=null!==(e=null==r?void 0:r.colors)&&void 0!==e?e:{},{palette:i}=a,s=N(a,["palette"]);let l=Object(o.Immutable)({});Object.keys(o.ThemeThemeColorKeys).forEach(e=>l=l.set(o.ThemeThemeColorKeys[e],s[o.ThemeThemeColorKeys[e]]));const c=Object(o.classNames)("jimu-builder-theme-color-configurator",t);return o.React.createElement("div",{className:c},o.React.createElement(M,{themeColors:l,allColors:null==r?void 0:r.colors,onColorChange:this.onColorChange,intl:n}),o.React.createElement(P,{className:"d-block",style:{marginTop:"-2px"},palette:l,isDarkTheme:r.darkTheme,dropdown:{direction:"right",appendTo:"body"},onChange:this.onPaletteChange,intl:n}))}}const F=o.themeUtils.withStyles(z,"ThemeColorConfigurator");o.ThemeManager.getInstance().registerJimuThemeStyleModule("jimu-ui/advanced/theme-components/",{componentStyles:n})}}))}}}));