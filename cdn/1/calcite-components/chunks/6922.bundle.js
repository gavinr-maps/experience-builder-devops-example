/*! For license information please see 6922.bundle.js.LICENSE.txt */
(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[6922,1993,9731,842,7166,5283],{1993:e=>{function t(e){return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}t.keys=()=>[],t.resolve=t,t.id=1993,e.exports=t},2262:(e,t,l)=>{"use strict";l.r(t),l.d(t,{CalciteTableRow:()=>u,defineCustomElement:()=>b});var i=l(7210),o=l(9145),s=l(5694),n=l(4426),a=l(4586),c=l(2395),r=l(2396);const d=(0,i.GH)(class extends i.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteTableRowSelect=(0,i.yM)(this,"calciteTableRowSelect",6),this.calciteInternalTableRowFocusRequest=(0,i.yM)(this,"calciteInternalTableRowFocusRequest",6),this.rowCells=[],this.emitTableRowFocusRequest=(e,t,l,i)=>{this.calciteInternalTableRowFocusRequest.emit({cellPosition:e,rowPosition:t,destination:l,lastCell:i})},this.updateCells=()=>{const e=this.tableRowSlotEl?.assignedElements({flatten:!0})?.filter((e=>e.matches("calcite-table-cell")||e.matches("calcite-table-header"))),t=Array.from(this.tableRowEl?.querySelectorAll("calcite-table-header, calcite-table-cell"))?.filter((e=>e.numberCell||e.selectionCell)),l=t?t.concat(e):e;l.length>0&&l?.forEach(((e,t)=>{e.positionInRow=t+1,e.parentRowType=this.rowType,e.scale=this.scale,"CALCITE-TABLE-CELL"===e.nodeName&&(e.readCellContentsToAT=this.readCellContentsToAT,e.disabled=this.disabled,e.parentRowIsSelected=this.selected)})),this.rowCells=l||[],this.cellCount=l?.length},this.handleSelectionOfRow=()=>{this.calciteTableRowSelect.emit()},this.handleKeyboardSelection=e=>{(0,s.i)(e.key)&&(" "===e.key&&e.preventDefault(),this.handleSelectionOfRow())},this.disabled=!1,this.selected=!1,this.cellCount=void 0,this.rowType=void 0,this.numbered=!1,this.positionSection=void 0,this.positionSectionLocalized=void 0,this.positionAll=void 0,this.readCellContentsToAT=void 0,this.scale=void 0,this.selectionMode="none",this.selectedRowCount=void 0,this.selectedRowCountLocalized=void 0,this.bodyRowCount=void 0,this.effectiveLocale=""}handleCellChanges(){this.tableRowEl&&this.rowCells.length>0&&this.updateCells()}handleDelayedCellChanges(){this.tableRowEl&&this.rowCells.length>0&&requestAnimationFrame((()=>this.updateCells()))}componentDidLoad(){this.tableRowEl&&this.rowCells.length>0&&this.updateCells()}connectedCallback(){(0,n.c)(this)}componentDidRender(){(0,n.u)(this)}disconnectedCallback(){(0,n.d)(this)}calciteInternalTableRowFocusChangeHandler(e){if(e.target.contains(this.el)){const t=e.detail.cellPosition,l=e.detail.rowPosition,i=e.detail.destination,o=e.detail.lastCell;if(l===this.positionAll){if(this.disabled){const e="last"===i?"previous":"first"===i?"next":i;return void this.emitTableRowFocusRequest(t,this.positionAll,e)}const e=o?this.rowCells[this.rowCells.length-1]:this.rowCells?.find(((e,l)=>l+1===t));e&&e.setFocus()}}}keyDownHandler(e){const t=e.target,l=e.key,i=e.ctrlKey,s=this.rowCells;if(t.matches("calcite-table-cell")||t.matches("calcite-table-header"))switch(l){case"ArrowUp":this.emitTableRowFocusRequest(t.positionInRow,this.positionAll,"previous"),e.preventDefault();break;case"ArrowDown":this.emitTableRowFocusRequest(t.positionInRow,this.positionAll,"next"),e.preventDefault();break;case"PageUp":this.emitTableRowFocusRequest(t.positionInRow,this.positionAll,"first"),e.preventDefault();break;case"PageDown":this.emitTableRowFocusRequest(t.positionInRow,this.positionAll,"last"),e.preventDefault();break;case"ArrowLeft":(0,o.i)(s,t,"previous",!1),e.preventDefault();break;case"ArrowRight":(0,o.i)(s,t,"next",!1),e.preventDefault();break;case"Home":i?(this.emitTableRowFocusRequest(1,this.positionAll,"first"),e.preventDefault()):((0,o.i)(s,t,"first",!1),e.preventDefault());break;case"End":i?(this.emitTableRowFocusRequest(this.rowCells?.length,this.positionAll,"last",!0),e.preventDefault()):((0,o.i)(s,t,"last",!1),e.preventDefault())}}renderSelectionIcon(){const e="multiple"===this.selectionMode&&this.selected?"check-square-f":"multiple"===this.selectionMode?"square":this.selected?"circle-f":"circle";return(0,i.h)("calcite-icon",{icon:e,scale:"l"===this.scale?"m":"s"})}renderSelectableCell(){return"head"===this.rowType?(0,i.h)("calcite-table-header",{alignment:"center",bodyRowCount:this.bodyRowCount,key:"selection-head",onClick:"multiple"===this.selectionMode&&this.handleSelectionOfRow,onKeyDown:"multiple"===this.selectionMode&&this.handleKeyboardSelection,selectedRowCount:this.selectedRowCount,selectedRowCountLocalized:this.selectedRowCountLocalized,selectionCell:!0,selectionMode:this.selectionMode}):"body"===this.rowType?(0,i.h)("calcite-table-cell",{alignment:"center",key:"selection-body",onClick:this.handleSelectionOfRow,onKeyDown:this.handleKeyboardSelection,parentRowIsSelected:this.selected,parentRowPositionLocalized:this.positionSectionLocalized,selectionCell:!0},this.renderSelectionIcon()):(0,i.h)("calcite-table-cell",{alignment:"center",key:"selection-foot",selectionCell:!0})}renderNumberedCell(){return"head"===this.rowType?(0,i.h)("calcite-table-header",{alignment:"center",key:"numbered-head",numberCell:!0}):"body"===this.rowType?(0,i.h)("calcite-table-cell",{alignment:"center",key:"numbered-body",numberCell:!0},this.positionSectionLocalized):(0,i.h)("calcite-table-cell",{alignment:"center",key:"numbered-foot",numberCell:!0})}render(){return(0,i.h)(i.AA,null,(0,i.h)("tr",{"aria-disabled":this.disabled,"aria-rowindex":this.positionAll+1,"aria-selected":this.selected,onKeyDown:e=>this.keyDownHandler(e),ref:e=>this.tableRowEl=e},this.numbered&&this.renderNumberedCell(),"none"!==this.selectionMode&&this.renderSelectableCell(),(0,i.h)("slot",{onSlotchange:this.updateCells,ref:e=>this.tableRowSlotEl=e})))}get el(){return this}static get watchers(){return{bodyRowCount:["handleCellChanges"],scale:["handleCellChanges"],selected:["handleCellChanges"],selectedRowCount:["handleCellChanges"],numbered:["handleDelayedCellChanges"],selectionMode:["handleDelayedCellChanges"]}}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{--calcite-internal-table-row-background:var(--calcite-table-row-background, var(--calcite-ui-foreground-1));--calcite-internal-table-row-border-color:var(--calcite-table-row-border-color, transparent);display:contents}:host([hidden]){display:none}[hidden]{display:none}:host([disabled]) tr{pointer-events:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}tr{border-block-end:1px solid var(--calcite-internal-table-row-border-color);background-color:var(--calcite-internal-table-row-background)}"}},[1,"calcite-table-row",{disabled:[516],selected:[516],cellCount:[1026,"cell-count"],rowType:[1,"row-type"],numbered:[4],positionSection:[2,"position-section"],positionSectionLocalized:[1,"position-section-localized"],positionAll:[2,"position-all"],readCellContentsToAT:[4,"read-cell-contents-to-a-t"],scale:[1],selectionMode:[1,"selection-mode"],selectedRowCount:[2,"selected-row-count"],selectedRowCountLocalized:[1,"selected-row-count-localized"],bodyRowCount:[2,"body-row-count"],effectiveLocale:[32]},[[4,"calciteInternalTableRowFocusChange","calciteInternalTableRowFocusChangeHandler"]]]);function h(){"undefined"!=typeof customElements&&["calcite-table-row","calcite-icon","calcite-table-cell","calcite-table-header"].forEach((e=>{switch(e){case"calcite-table-row":customElements.get(e)||customElements.define(e,d);break;case"calcite-icon":customElements.get(e)||(0,a.d)();break;case"calcite-table-cell":customElements.get(e)||(0,c.d)();break;case"calcite-table-header":customElements.get(e)||(0,r.d)()}}))}h();const u=d,b=h},4426:(e,t,l)=>{"use strict";l.d(t,{c:()=>m,d:()=>f,g:()=>o,u:()=>u});var i=l(7210);function o(){if(!i.Z5.isBrowser)return"";const e=navigator.userAgentData;return e?.brands?e.brands.map((({brand:e,version:t})=>`${e}/${t}`)).join(" "):navigator.userAgent}const s=/firefox/i.test(o()),n=s?new WeakMap:null;function a(){const{disabled:e}=this;e||HTMLElement.prototype.click.call(this)}function c(e){const t=e.target;if(s&&!n.get(t))return;const{disabled:l}=t;l&&e.preventDefault()}const r=["mousedown","mouseup","click"];function d(e){if(s&&!n.get(e.target))return;const{disabled:t}=e.target;t&&(e.stopImmediatePropagation(),e.preventDefault())}const h={capture:!0};function u(e,t=!1){if(e.disabled)return e.el.setAttribute("tabindex","-1"),e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),void b(e);w(e),"function"==typeof t?e.el.setAttribute("tabindex",t.call(e)?"0":"-1"):!0===t?e.el.setAttribute("tabindex","0"):!1===t&&e.el.removeAttribute("tabindex"),e.el.removeAttribute("aria-disabled")}function b(e){var t;e.el.click=a,(t=s?p(e):e.el)&&(t.addEventListener("pointerdown",c,h),r.forEach((e=>t.addEventListener(e,d,h))))}function p(e){return n.get(e.el)}function w(e){var t;delete e.el.click,(t=s?p(e):e.el)&&(t.removeEventListener("pointerdown",c,h),r.forEach((e=>t.removeEventListener(e,d,h))))}function m(e){if(!e.disabled||!s)return;const t=e.el.parentElement||e.el;n.set(e.el,t),b(e)}function f(e){s&&(n.delete(e.el),w(e))}},2395:(e,t,l)=>{"use strict";l.d(t,{T:()=>r,d:()=>d});var i=l(7210),o=l(6265),s=l(3801),n=l(4426),a=l(9417),c=l(9145);const r=(0,i.GH)(class extends i.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.updateScreenReaderContentsText=()=>{this.contentsText=this.el.textContent},this.onContainerBlur=()=>{this.focused=!1},this.onContainerFocus=()=>{this.focused=!0},this.alignment="start",this.colSpan=void 0,this.rowSpan=void 0,this.disabled=void 0,this.numberCell=void 0,this.parentRowIsSelected=void 0,this.parentRowPositionLocalized=void 0,this.parentRowType=void 0,this.positionInRow=void 0,this.readCellContentsToAT=void 0,this.scale="m",this.selectionCell=void 0,this.messages=void 0,this.messageOverrides=void 0,this.contentsText="",this.defaultMessages=void 0,this.focused=!1,this.selectionText="",this.effectiveLocale=""}onSelectedChange(){this.updateScreenReaderSelectionText()}onMessagesChange(){}effectiveLocaleChange(){(0,s.u)(this,this.effectiveLocale)}async componentWillLoad(){(0,o.a)(this),await(0,s.s)(this),this.updateScreenReaderContentsText(),this.updateScreenReaderSelectionText()}componentDidLoad(){(0,o.s)(this)}connectedCallback(){(0,a.c)(this),(0,s.c)(this),(0,n.c)(this)}componentDidRender(){(0,n.u)(this)}disconnectedCallback(){(0,a.d)(this),(0,s.d)(this),(0,n.d)(this)}async setFocus(){await(0,o.c)(this),this.containerEl.focus()}updateScreenReaderSelectionText(){const e=`${this.messages?.row} ${this.parentRowPositionLocalized} ${this.messages?.selected} ${this.messages?.keyboardDeselect}`,t=`${this.messages?.row} ${this.parentRowPositionLocalized} ${this.messages?.unselected} ${this.messages?.keyboardSelect}`;this.selectionText=this.parentRowIsSelected?e:t}render(){const e=(0,c.b)(this.el);return(0,i.h)(i.AA,null,(0,i.h)("td",{"aria-disabled":this.disabled,class:{"footer-cell":"foot"===this.parentRowType,"number-cell":this.numberCell,"selection-cell":this.selectionCell,"selected-cell":this.parentRowIsSelected,[c.C.rtl]:"rtl"===e},colSpan:this.colSpan,onBlur:this.onContainerBlur,onFocus:this.onContainerFocus,role:"gridcell",rowSpan:this.rowSpan,tabIndex:this.disabled?-1:0,ref:e=>this.containerEl=e},(this.selectionCell||this.readCellContentsToAT)&&this.focused&&(0,i.h)("span",{"aria-hidden":!0,"aria-live":"polite",class:"assistive-text"},this.selectionCell&&this.selectionText,this.readCellContentsToAT&&!this.selectionCell&&this.contentsText),(0,i.h)("slot",{onSlotchange:this.updateScreenReaderContentsText})))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{parentRowIsSelected:["onSelectedChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host{--calcite-internal-table-cell-background-internal:var(--calcite-table-cell-background, transparent);--calcite-internal-table-cell-border-color-internal:var(--calcite-table-cell-border-color, transparent);display:contents}:host([alignment=center]) td{text-align:center}:host([alignment=end]) td{text-align:end}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}td{white-space:normal;text-align:start;vertical-align:middle;color:var(--calcite-ui-text-1);outline-color:transparent;background:var(--calcite-internal-table-cell-background);border-inline-end:1px solid var(--calcite-ui-border-3);font-size:var(--calcite-internal-table-cell-font-size);padding:var(--calcite-internal-table-cell-padding)}td:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.number-cell{background-color:var(--calcite-ui-foreground-2)}.footer-cell{background-color:var(--calcite-ui-background);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);border-block-start:1px solid var(--calcite-ui-border-3)}.number-cell,.selection-cell{border-inline-end:1px solid var(--calcite-ui-border-3);inline-size:2rem;min-inline-size:2rem}.selection-cell{cursor:pointer;color:var(--calcite-ui-text-3);inset-inline-start:2rem}.selected-cell:not(.number-cell):not(.footer-cell){--calcite-table-cell-background:var(--calcite-ui-foreground-current);background:var(--calcite-ui-foreground-current)}.selection-cell.selected-cell{box-shadow:inset 0.25rem 0 0 0 var(--calcite-ui-brand);color:var(--calcite-ui-brand)}.selection-cell.selected-cell calcite-icon{color:var(--calcite-ui-brand)}.calcite--rtl.selection-cell.selected-cell{box-shadow:inset -0.25rem 0 0 0 var(--calcite-ui-brand)}.selection-cell{vertical-align:middle}.selection-cell ::slotted(calcite-icon){pointer-events:none;margin-block-start:0.25rem}"}},[1,"calcite-table-cell",{alignment:[513],colSpan:[514,"col-span"],rowSpan:[514,"row-span"],disabled:[4],numberCell:[4,"number-cell"],parentRowIsSelected:[4,"parent-row-is-selected"],parentRowPositionLocalized:[1,"parent-row-position-localized"],parentRowType:[1,"parent-row-type"],positionInRow:[2,"position-in-row"],readCellContentsToAT:[4,"read-cell-contents-to-a-t"],scale:[1],selectionCell:[4,"selection-cell"],messages:[1040],messageOverrides:[1040],contentsText:[32],defaultMessages:[32],focused:[32],selectionText:[32],effectiveLocale:[32],setFocus:[64]}]);function d(){"undefined"!=typeof customElements&&["calcite-table-cell"].forEach((e=>{"calcite-table-cell"===e&&(customElements.get(e)||customElements.define(e,r))}))}d()}}]);