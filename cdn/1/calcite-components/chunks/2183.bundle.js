/*! For license information please see 2183.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[2183],{2183:(e,t,i)=>{i.r(t),i.d(t,{CalciteTextArea:()=>b,defineCustomElement:()=>v});var n=i(7210),a=i(9055),r=i(1629),s=i(9145),o=i(9417),l=i(5545),c=i(6265),d=i(3801),h=i(4426),u=i(6472),f=i(7579);const m="readonly",g=(0,n.GH)(class extends n.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteTextAreaInput=(0,n.yM)(this,"calciteTextAreaInput",7),this.calciteTextAreaChange=(0,n.yM)(this,"calciteTextAreaChange",7),this.guid=(0,u.g)(),this.handleInput=e=>{this.value=e.target.value,this.calciteTextAreaInput.emit()},this.handleChange=()=>{this.calciteTextAreaChange.emit()},this.contentSlotChangeHandler=()=>{this.value||this.el.childNodes.forEach((e=>{"#text"===e.nodeName&&(this.value=e.nodeValue.trim())}))},this.renderCharacterLimit=()=>this.maxLength?(this.localizedCharacterLengthObj=this.getLocalizedCharacterLength(),(0,n.h)("span",{class:"character-limit"},(0,n.h)("span",{class:{"character--over-limit":this.isCharacterLimitExceeded()}},this.localizedCharacterLengthObj.currentLength),"/",this.localizedCharacterLengthObj.maxLength)):null,this.resizeObserver=(0,l.c)("resize",(async()=>{await(0,c.b)(this);const{textAreaHeight:e,textAreaWidth:t,elHeight:i,elWidth:n,footerHeight:a,footerWidth:r}=this.getHeightAndWidthOfElements();r>0&&r!==t&&(this.footerEl.style.width=`${t}px`),n===t&&i===e+(a||0)||this.setHeightAndWidthToAuto()})),this.setTextAreaEl=e=>{this.textAreaEl=e,this.resizeObserver.observe(e)},this.setHeightAndWidthToAuto=(0,f.t)((()=>{"vertical"!==this.resize&&"both"!==this.resize||(this.el.style.height="auto"),"horizontal"!==this.resize&&"both"!==this.resize||(this.el.style.width="auto")}),100,{leading:!1}),this.autofocus=!1,this.columns=void 0,this.disabled=!1,this.form=void 0,this.groupSeparator=!1,this.label=void 0,this.maxLength=void 0,this.messages=void 0,this.name=void 0,this.numberingSystem=void 0,this.placeholder=void 0,this.readOnly=!1,this.required=!1,this.resize="both",this.rows=void 0,this.scale="m",this.value=void 0,this.wrap="soft",this.messageOverrides=void 0,this.defaultMessages=void 0,this.endSlotHasElements=void 0,this.startSlotHasElements=void 0,this.effectiveLocale="",this.localizedCharacterLengthObj=void 0}onMessagesChange(){}connectedCallback(){(0,h.c)(this),(0,r.c)(this),(0,a.c)(this),(0,o.c)(this),(0,d.c)(this)}async componentWillLoad(){(0,c.a)(this),await(0,d.s)(this)}componentDidLoad(){(0,c.s)(this)}componentDidRender(){(0,h.u)(this),this.setTextAreaHeight()}disconnectedCallback(){(0,h.d)(this),(0,r.d)(this),(0,a.d)(this),(0,o.d)(this),(0,d.d)(this),this.resizeObserver?.disconnect()}render(){const e=this.startSlotHasElements||this.endSlotHasElements||!!this.maxLength;return(0,n.h)(n.AA,null,(0,n.h)("textarea",{"aria-describedby":this.guid,"aria-invalid":(0,s.t)(this.isCharacterLimitExceeded()),"aria-label":(0,r.g)(this),autofocus:this.autofocus,class:{[m]:this.readOnly,"text-area--invalid":this.isCharacterLimitExceeded(),"footer--slotted":this.endSlotHasElements&&this.startSlotHasElements,"block-size--full":!e,"border--color":!e},cols:this.columns,disabled:this.disabled,name:this.name,onChange:this.handleChange,onInput:this.handleInput,placeholder:this.placeholder,readonly:this.readOnly,required:this.required,rows:this.rows,value:this.value,wrap:this.wrap,ref:this.setTextAreaEl}),(0,n.h)("span",{class:{content:!0}},(0,n.h)("slot",{onSlotchange:this.contentSlotChangeHandler})),(0,n.h)("footer",{class:{footer:!0,[m]:this.readOnly,hide:!e},ref:e=>this.footerEl=e},(0,n.h)("div",{class:{container:!0,"footer--end-only":!this.startSlotHasElements&&this.endSlotHasElements}},(0,n.h)("slot",{name:"footer-start",onSlotchange:e=>this.startSlotHasElements=(0,s.e)(e)}),(0,n.h)("slot",{name:"footer-end",onSlotchange:e=>this.endSlotHasElements=(0,s.e)(e)})),this.renderCharacterLimit()),(0,n.h)(a.H,{component:this}),this.isCharacterLimitExceeded()&&(0,n.h)("span",{"aria-hidden":!0,"aria-live":"polite",class:"assistive-text",id:this.guid},this.replacePlaceHoldersInMessages()))}async setFocus(){await(0,c.c)(this),this.textAreaEl.focus()}async selectText(){await(0,c.b)(this),this.textAreaEl.select()}effectiveLocaleChange(){(0,d.u)(this,this.effectiveLocale)}onFormReset(){this.value=this.defaultValue}onLabelClick(){this.setFocus()}getLocalizedCharacterLength(){const e=this.value?this.value.length.toString():"0",t=this.maxLength.toString();return"latn"===this.numberingSystem?{currentLength:e,maxLength:t}:(o.n.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,signDisplay:"never",useGrouping:this.groupSeparator},{currentLength:o.n.localize(e),maxLength:o.n.localize(t)})}syncHiddenFormInput(e){e.setCustomValidity(""),this.isCharacterLimitExceeded()&&e.setCustomValidity(this.replacePlaceHoldersInMessages())}setTextAreaHeight(){const{textAreaHeight:e,elHeight:t,footerHeight:i}=this.getHeightAndWidthOfElements();i>0&&e+i!=t&&(this.textAreaEl.style.height=t-i+"px")}getHeightAndWidthOfElements(){const{height:e,width:t}=this.textAreaEl.getBoundingClientRect(),{height:i,width:n}=this.el.getBoundingClientRect(),{height:a,width:r}=this.footerEl?.getBoundingClientRect();return{textAreaHeight:e,textAreaWidth:t,elHeight:i,elWidth:n,footerHeight:a,footerWidth:r}}replacePlaceHoldersInMessages(){return this.messages.tooLong.replace("{maxLength}",this.localizedCharacterLengthObj.maxLength).replace("{currentLength}",this.localizedCharacterLengthObj.currentLength)}isCharacterLimitExceeded(){return this.value?.length>this.maxLength}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:inline-block;block-size:100%;inline-size:100%}textarea{position:relative;margin:0px;box-sizing:border-box;display:block;inline-size:100%;border-width:1px;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);font-family:var(--calcite-sans-family);color:var(--calcite-ui-text-1);min-inline-size:12rem;border-block-end:1px solid var(--calcite-ui-border-3)}@media screen and (max-width: 480px){textarea{resize:none}}textarea:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}textarea.text-area--invalid{border-width:1px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-ui-danger)}textarea.text-area--invalid:focus{outline:2px solid var(--calcite-ui-danger);outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}textarea.footer--slotted{min-inline-size:18rem}.footer{box-sizing:border-box;display:flex;align-items:center;border-width:1px;border-block-start-width:0px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1)}.character-limit{display:flex;align-items:center;justify-content:flex-end;white-space:nowrap;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2)}.character--over-limit{font-weight:var(--calcite-font-weight-bold);color:var(--calcite-ui-danger)}:host([resize=none]) textarea{resize:none}:host([resize=horizontal]) textarea{resize:horizontal}:host([resize=vertical]) textarea{resize:vertical}:host([scale=s]){font-size:var(--calcite-font-size--2)}:host([scale=s]) .footer{padding-block:0.25rem;padding-inline:0.5rem;min-block-size:1.75rem}:host([scale=s]) textarea{padding-block:0.25rem;padding-inline:0.5rem}:host([scale=s]) textarea,:host([scale=s]) .footer,:host([scale=s]) .character-limit{padding-inline-start:0.5rem;font-size:var(--calcite-font-size--2)}:host([scale=m]) textarea{padding-block:0.5rem;padding-inline:0.75rem}:host([scale=m]) .footer{padding-block:0.5rem;padding-inline:0.75rem;min-block-size:2.25rem}:host([scale=m]) textarea,:host([scale=m]) .footer,:host([scale=m]) .character-limit{padding-inline-start:0.75rem;font-size:var(--calcite-font-size--1)}:host([scale=l]){font-size:var(--calcite-font-size-0)}:host([scale=l]) textarea{padding-block:0.75rem;padding-inline:1rem}:host([scale=l]) .footer{padding-block:0.75rem;padding-inline:1rem;min-block-size:2.75rem}:host([scale=l]) textarea,:host([scale=l]) .footer,:host([scale=l]) .character-limit{padding-inline-start:1rem;font-size:var(--calcite-font-size-0)}.readonly{background-color:var(--calcite-ui-background);font-weight:var(--calcite-font-weight-medium)}:host([disabled]) textarea,:host([disabled]) footer{opacity:0.5}.border--color{border-block-end-width:1px;border-color:var(--calcite-ui-border-input)}.border--color:focus{border-block-end-width:2px}textarea.block-size--full{block-size:100%}.content,.hide{display:none}.container{display:flex;inline-size:100%;justify-content:space-between}.footer--end-only{justify-content:flex-end}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-text-area",{autofocus:[516],columns:[514],disabled:[516],form:[513],groupSeparator:[516,"group-separator"],label:[1],maxLength:[514,"max-length"],messages:[1040],name:[513],numberingSystem:[1,"numbering-system"],placeholder:[1],readOnly:[516,"read-only"],required:[516],resize:[513],rows:[514],scale:[513],value:[1025],wrap:[513],messageOverrides:[1040],defaultMessages:[32],endSlotHasElements:[32],startSlotHasElements:[32],effectiveLocale:[32],localizedCharacterLengthObj:[32],setFocus:[64],selectText:[64]}]);function p(){"undefined"!=typeof customElements&&["calcite-text-area"].forEach((e=>{"calcite-text-area"===e&&(customElements.get(e)||customElements.define(e,g))}))}p();const b=g,v=p},2971:(e,t,i)=>{i.d(t,{S:()=>s,a:()=>v,b:()=>g,c:()=>p,d:()=>M,f:()=>n,i:()=>y,r:()=>r});var n="object"==typeof global&&global&&global.Object===Object&&global,a="object"==typeof self&&self&&self.Object===Object&&self,r=n||a||Function("return this")(),s=r.Symbol,o=Object.prototype,l=o.hasOwnProperty,c=o.toString,d=s?s.toStringTag:void 0,h=Object.prototype.toString,u="[object Null]",f="[object Undefined]",m=s?s.toStringTag:void 0;function g(e){return null==e?void 0===e?f:u:m&&m in Object(e)?function(e){var t=l.call(e,d),i=e[d];try{e[d]=void 0;var n=!0}catch(e){}var a=c.call(e);return n&&(t?e[d]=i:delete e[d]),a}(e):function(e){return h.call(e)}(e)}function p(e){return null!=e&&"object"==typeof e}var b="[object Symbol]";function v(e){return"symbol"==typeof e||p(e)&&g(e)==b}var x=/\s/,E=/^\s+/;function y(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}var w=NaN,L=/^[-+]0x[0-9a-f]+$/i,k=/^0b[01]+$/i,C=/^0o[0-7]+$/i,z=parseInt;function A(e){if("number"==typeof e)return e;if(v(e))return w;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;var i;e=(i=e)?i.slice(0,function(e){for(var t=e.length;t--&&x.test(e.charAt(t)););return t}(i)+1).replace(E,""):i;var n=k.test(e);return n||C.test(e)?z(e.slice(2),n?2:8):L.test(e)?w:+e}var H=function(){return r.Date.now()},S="Expected a function",O=Math.max,T=Math.min;function M(e,t,i){var n,a,r,s,o,l,c=0,d=!1,h=!1,u=!0;if("function"!=typeof e)throw new TypeError(S);function f(t){var i=n,r=a;return n=a=void 0,c=t,s=e.apply(r,i)}function m(e){var i=e-l;return void 0===l||i>=t||i<0||h&&e-c>=r}function g(){var e=H();if(m(e))return p(e);o=setTimeout(g,function(e){var i=t-(e-l);return h?T(i,r-(e-c)):i}(e))}function p(e){return o=void 0,u&&n?f(e):(n=a=void 0,s)}function b(){var e=H(),i=m(e);if(n=arguments,a=this,l=e,i){if(void 0===o)return function(e){return c=e,o=setTimeout(g,t),d?f(e):s}(l);if(h)return clearTimeout(o),o=setTimeout(g,t),f(l)}return void 0===o&&(o=setTimeout(g,t)),s}return t=A(t)||0,y(i)&&(d=!!i.leading,r=(h="maxWait"in i)?O(A(i.maxWait)||0,t):r,u="trailing"in i?!!i.trailing:u),b.cancel=function(){void 0!==o&&clearTimeout(o),c=0,n=l=a=o=void 0},b.flush=function(){return void 0===o?s:p(H())},b}},9055:(e,t,i)=>{i.d(t,{H:()=>x,a:()=>g,c:()=>h,d:()=>m,f:()=>u,r:()=>d,s:()=>c});var n=i(9145),a=i(7210);!function(e){function t(e,t,i){throw new e("Failed to execute 'requestSubmit' on 'HTMLFormElement': "+t+".",i)}"function"!=typeof e.requestSubmit&&(e.requestSubmit=function(e){e?(function(e,i){e instanceof HTMLElement||t(TypeError,"parameter 1 is not of type 'HTMLElement'"),"submit"==e.type||t(TypeError,"The specified element is not a submit button"),e.form==i||t(DOMException,"The specified element is not owned by this form element","NotFoundError")}(e,this),e.click()):((e=document.createElement("input")).type="submit",e.hidden=!0,this.appendChild(e),e.click(),this.removeChild(e))})}(HTMLFormElement.prototype);const r="hidden-form-input";function s(e){return"checked"in e}const o=new WeakMap,l=new WeakSet;function c(e){const{formEl:t}=e;return!!t&&(t.requestSubmit(),!0)}function d(e){e.formEl?.reset()}function h(e){const{el:t,value:i}=e,a=u(e);if(!a||function(e,t){if((0,n.c)(t.parentElement,"[form]"))return!0;const i="calciteInternalFormComponentRegister";let a=!1;return e.addEventListener(i,(e=>{a=e.composedPath().some((e=>l.has(e))),e.stopPropagation()}),{once:!0}),t.dispatchEvent(new CustomEvent(i,{bubbles:!0,composed:!0})),a}(a,t))return;e.formEl=a,e.defaultValue=i,s(e)&&(e.defaultChecked=e.checked);const r=(e.onFormReset||f).bind(e);a.addEventListener("reset",r),o.set(e.el,r),l.add(t)}function u(e){const{el:t,form:i}=e;return i?(0,n.q)(t,{id:i}):(0,n.c)(t,"form")}function f(){s(this)?this.checked=this.defaultChecked:this.value=this.defaultValue}function m(e){const{el:t,formEl:i}=e;if(!i)return;const n=o.get(t);i.removeEventListener("reset",n),o.delete(t),e.formEl=null,l.delete(t)}function g(e,t){e.defaultValue=t}const p=e=>{e.target.dispatchEvent(new CustomEvent("calciteInternalHiddenInputChange",{bubbles:!0}))},b=e=>e.removeEventListener("change",p);function v(e,t,i){const{defaultValue:n,disabled:a,form:r,name:o,required:l}=e;t.defaultValue=n,t.disabled=a,t.name=o,t.required=l,t.tabIndex=-1,r?t.setAttribute("form",r):t.removeAttribute("form"),s(e)?(t.checked=e.checked,t.defaultChecked=e.defaultChecked,t.value=e.checked?i||"on":""):t.value=i||"",e.syncHiddenFormInput?.(t)}const x=({component:e})=>(function(e){const{el:t,formEl:i,name:n,value:a}=e,{ownerDocument:s}=t,o=t.querySelectorAll(`input[slot="${r}"]`);if(!i||!n)return void o.forEach((e=>{b(e),e.remove()}));const l=Array.isArray(a)?a:[a],c=[],d=new Set;let h;o.forEach((t=>{const i=l.find((e=>e==t.value));null!=i?(d.add(i),v(e,t,i)):c.push(t)})),l.forEach((t=>{if(d.has(t))return;let i=c.pop();i||(i=s.createElement("input"),i.slot=r),h||(h=s.createDocumentFragment()),h.append(i),i.addEventListener("change",p),v(e,i,t)})),h&&t.append(h),c.forEach((e=>{b(e),e.remove()}))}(e),(0,a.h)("slot",{name:r}))},4426:(e,t,i)=>{i.d(t,{c:()=>p,d:()=>b,g:()=>a,u:()=>u});var n=i(7210);function a(){if(!n.Z5.isBrowser)return"";const e=navigator.userAgentData;return e?.brands?e.brands.map((({brand:e,version:t})=>`${e}/${t}`)).join(" "):navigator.userAgent}const r=/firefox/i.test(a()),s=r?new WeakMap:null;function o(){const{disabled:e}=this;e||HTMLElement.prototype.click.call(this)}function l(e){const t=e.target;if(r&&!s.get(t))return;const{disabled:i}=t;i&&e.preventDefault()}const c=["mousedown","mouseup","click"];function d(e){if(r&&!s.get(e.target))return;const{disabled:t}=e.target;t&&(e.stopImmediatePropagation(),e.preventDefault())}const h={capture:!0};function u(e,t=!1){if(e.disabled)return e.el.setAttribute("tabindex","-1"),e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),void f(e);g(e),"function"==typeof t?e.el.setAttribute("tabindex",t.call(e)?"0":"-1"):!0===t?e.el.setAttribute("tabindex","0"):!1===t&&e.el.removeAttribute("tabindex"),e.el.removeAttribute("aria-disabled")}function f(e){var t;e.el.click=o,(t=r?m(e):e.el)&&(t.addEventListener("pointerdown",l,h),c.forEach((e=>t.addEventListener(e,d,h))))}function m(e){return s.get(e.el)}function g(e){var t;delete e.el.click,(t=r?m(e):e.el)&&(t.removeEventListener("pointerdown",l,h),c.forEach((e=>t.removeEventListener(e,d,h))))}function p(e){if(!e.disabled||!r)return;const t=e.el.parentElement||e.el;s.set(e.el,t),f(e)}function b(e){r&&(s.delete(e.el),g(e))}},1629:(e,t,i)=>{i.d(t,{a:()=>s,c:()=>m,d:()=>g,g:()=>b,l:()=>r});var n=i(9145);const a="calciteInternalLabelClick",r="calciteInternalLabelConnected",s="calciteInternalLabelDisconnected",o="calcite-label",l=new WeakMap,c=new WeakMap,d=new WeakMap,h=new WeakMap,u=new WeakSet,f=e=>{const{id:t}=e,i=t&&(0,n.q)(e,{selector:`${o}[for="${t}"]`});if(i)return i;const a=(0,n.c)(e,o);return!a||function(e,t){let i;const n="custom-element-ancestor-check",a=n=>{n.stopImmediatePropagation();const a=n.composedPath();i=a.slice(a.indexOf(t),a.indexOf(e))};e.addEventListener(n,a,{once:!0}),t.dispatchEvent(new CustomEvent(n,{composed:!0,bubbles:!0})),e.removeEventListener(n,a);return i.filter((i=>i!==t&&i!==e)).filter((e=>e.tagName?.includes("-"))).length>0}(a,e)?null:a};function m(e){const t=f(e.el);if(c.has(t)&&t===e.labelEl||!t&&u.has(e))return;const i=E.bind(e);if(t){e.labelEl=t;const n=l.get(t)||[];n.push(e),l.set(t,n.sort(p)),c.has(e.labelEl)||(c.set(e.labelEl,v),e.labelEl.addEventListener(a,v)),u.delete(e),document.removeEventListener(r,d.get(e)),h.set(e,i),document.addEventListener(s,i)}else u.has(e)||(i(),document.removeEventListener(s,h.get(e)))}function g(e){if(u.delete(e),document.removeEventListener(r,d.get(e)),document.removeEventListener(s,h.get(e)),d.delete(e),h.delete(e),!e.labelEl)return;const t=l.get(e.labelEl);1===t.length&&(e.labelEl.removeEventListener(a,c.get(e.labelEl)),c.delete(e.labelEl)),l.set(e.labelEl,t.filter((t=>t!==e)).sort(p)),e.labelEl=null}function p(e,t){return(0,n.x)(e.el,t.el)?-1:1}function b(e){return e.label||e.labelEl?.textContent?.trim()||""}function v(e){const t=e.detail.sourceEvent.target,i=l.get(this),n=i.find((e=>e.el===t));if(i.includes(n))return;const a=i[0];a.disabled||a.onLabelClick(e)}function x(){u.has(this)&&m(this)}function E(){u.add(this);const e=d.get(this)||x.bind(this);d.set(this,e),document.addEventListener(r,e)}},6265:(e,t,i)=>{i.d(t,{a:()=>s,b:()=>l,c:()=>c,s:()=>o});var n=i(7210);const a=new WeakMap,r=new WeakMap;function s(e){r.set(e,new Promise((t=>a.set(e,t))))}function o(e){a.get(e)()}function l(e){return r.get(e)}async function c(e){if(await l(e),n.Z5.isBrowser)return(0,n.xE)(e),new Promise((e=>requestAnimationFrame((()=>e()))))}},3801:(e,t,i)=>{i.d(t,{c:()=>h,d:()=>u,s:()=>l,u:()=>d});var n=i(7210),a=i(9417);const r={};function s(){throw new Error("could not fetch component message bundle")}function o(e){e.messages={...e.defaultMessages,...e.messageOverrides}}async function l(e){e.defaultMessages=await c(e,e.effectiveLocale),o(e)}async function c(e,t){if(!n.Z5.isBrowser)return{};const{el:i}=e,o=i.tagName.toLowerCase().replace("calcite-","");return async function(e,t){const i=`${t}_${e}`;return r[i]||(r[i]=fetch((0,n.K3)(`./assets/${t}/t9n/messages_${e}.json`)).then((e=>(e.ok||s(),e.json()))).catch((()=>s()))),r[i]}((0,a.g)(t,"t9n"),o)}async function d(e,t){e.defaultMessages=await c(e,t),o(e)}function h(e){e.onMessagesChange=f}function u(e){e.onMessagesChange=void 0}function f(){o(this)}},7579:(e,t,i)=>{i.d(t,{t:()=>r});var n=i(2971),a="Expected a function";function r(e,t,i){var r=!0,s=!0;if("function"!=typeof e)throw new TypeError(a);return(0,n.i)(i)&&(r="leading"in i?!!i.leading:r,s="trailing"in i?!!i.trailing:s),(0,n.d)(e,t,{leading:r,maxWait:t,trailing:s})}}}]);