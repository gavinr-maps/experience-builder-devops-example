/*! For license information please see 6474.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[6474],{6474:(t,n,e)=>{e.r(n),e.d(n,{calcite_stack:()=>i});var a=e(8641),s=e(2322),o=e(3854);e(8274);const i=class{constructor(t){(0,a.r)(this,t),this.handleActionsStartSlotChange=t=>{this.hasActionsStart=(0,s.b)(t)},this.handleActionsEndSlotChange=t=>{this.hasActionsEnd=(0,s.b)(t)},this.handleContentStartSlotChange=t=>{this.hasContentStart=(0,s.b)(t)},this.handleContentEndSlotChange=t=>{this.hasContentEnd=(0,s.b)(t)},this.disabled=!1,this.hasActionsStart=!1,this.hasActionsEnd=!1,this.hasContentStart=!1,this.hasContentEnd=!1}renderActionsStart(){const{hasActionsStart:t}=this;return(0,a.h)("div",{class:o.C.actionsStart,hidden:!t,key:"actions-start-container"},(0,a.h)("slot",{name:o.S.actionsStart,onSlotchange:this.handleActionsStartSlotChange}))}renderActionsEnd(){const{hasActionsEnd:t}=this;return(0,a.h)("div",{class:o.C.actionsEnd,hidden:!t,key:"actions-end-container"},(0,a.h)("slot",{name:o.S.actionsEnd,onSlotchange:this.handleActionsEndSlotChange}))}renderContentStart(){const{hasContentStart:t}=this;return(0,a.h)("div",{class:o.C.contentStart,hidden:!t},(0,a.h)("slot",{name:o.S.contentStart,onSlotchange:this.handleContentStartSlotChange}))}renderDefaultContent(){return(0,a.h)("div",{class:o.C.content},(0,a.h)("slot",null))}renderContentEnd(){const{hasContentEnd:t}=this;return(0,a.h)("div",{class:o.C.contentEnd,hidden:!t},(0,a.h)("slot",{name:o.S.contentEnd,onSlotchange:this.handleContentEndSlotChange}))}render(){return(0,a.h)(a.H,null,(0,a.h)("div",{class:o.C.container},this.renderActionsStart(),this.renderContentStart(),this.renderDefaultContent(),this.renderContentEnd(),this.renderActionsEnd()))}};i.style=":host([disabled]) .content{cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) .content *,:host([disabled]) .content ::slotted(*){pointer-events:none}:host{display:flex;flex:1 1 0%;flex-direction:column}.container{display:flex;flex:1 1 auto;align-items:stretch;font-family:var(--calcite-sans-family);font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2)}.content{display:flex;flex:1 1 auto;flex-direction:column;justify-content:center;font-size:var(--calcite-font-size--2);line-height:1.375;padding-inline:var(--calcite-stack-padding-inline, 0.75rem);padding-block:var(--calcite-stack-padding-block, 0.5rem)}.content-start{justify-content:flex-start}.content-end{justify-content:flex-end}.content-start,.content-end{flex:0 1 auto}.actions-start,.actions-end,.content-start,.content-end{display:flex;align-items:center}.content-start ::slotted(calcite-icon),.content-end ::slotted(calcite-icon){margin-inline:0.75rem;align-self:center}.actions-start ::slotted(calcite-action),.actions-end ::slotted(calcite-action){align-self:stretch;color:inherit}:host([hidden]){display:none}[hidden]{display:none}"},3854:(t,n,e)=>{e.d(n,{C:()=>a,S:()=>s});const a={container:"container",actionsStart:"actions-start",contentStart:"content-start",content:"content",contentEnd:"content-end",actionsEnd:"actions-end"},s={actionsStart:"actions-start",contentStart:"content-start",contentEnd:"content-end",actionsEnd:"actions-end"}}}]);