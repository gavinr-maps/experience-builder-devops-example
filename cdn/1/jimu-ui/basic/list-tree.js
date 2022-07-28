System.register(["jimu-core","jimu-theme","jimu-ui"],(function(e,t){var n={},i={},r={};return{setters:[function(e){n.Immutable=e.Immutable,n.React=e.React,n.classNames=e.classNames,n.css=e.css,n.getAppStore=e.getAppStore,n.injectIntl=e.injectIntl,n.jsx=e.jsx,n.lodash=e.lodash,n.moduleLoader=e.moduleLoader,n.polished=e.polished},function(e){i.withTheme=e.withTheme},function(e){r.Button=e.Button,r.Checkbox=e.Checkbox,r.Collapse=e.Collapse,r.Icon=e.Icon,r.ListGroupItem=e.ListGroupItem,r.Popper=e.Popper,r.SVG=e.SVG,r.TextInput=e.TextInput,r.defaultMessages=e.defaultMessages}],execute:function(){e((()=>{var e={10119:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m14 4-6 8-6-8h12Z" fill="#000"></path></svg>'},30900:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 14 4 8l8-6v12Z" fill="#000"></path></svg>'},98940:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m4 2 8 6-8 6V2Z" fill="#000"></path></svg>'},55339:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m8.745 8 6.1 6.1a.527.527 0 1 1-.745.746L8 8.746l-6.1 6.1a.527.527 0 1 1-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 0 1 .746-.746l6.1 6.1 6.1-6.1a.527.527 0 0 1 .746.746L8.746 8Z" fill="#000"></path></svg>'},59455:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 8A6 6 0 1 1 2 8a6 6 0 0 1 12 0Zm1 0A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8Z" fill="#000"></path></svg>'},80272:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 8A6 6 0 1 1 2 8a6 6 0 0 1 12 0Zm1 0A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM7.5 4.5a.5.5 0 0 1 1 0v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3Z" fill="#000"></path></svg>'},1604:e=>{e.exports='<svg viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 1H1v2h2V1ZM3 5H1v2h2V5ZM1 9h2v2H1V9ZM3 13H1v2h2v-2Z" fill="#000"></path></svg>'},37580:e=>{e.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero" fill="none"><path d="M13 7.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm-6.5 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM0 7.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" fill="#000"></path><path d="M0 0h16v16H0z"></path></g></svg>'},48891:e=>{"use strict";e.exports=n},34796:e=>{"use strict";e.exports=i},30726:e=>{"use strict";e.exports=r}},t={};function o(n){var i=t[n];if(void 0!==i)return i.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,o),r.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return(()=>{"use strict";o.r(a),o.d(a,{List:()=>q,Tree:()=>W,TreeActionType:()=>f,TreeCollapseStyle:()=>b,TreeItem:()=>G,TreeItemActionType:()=>y,TreeMainActionType:()=>v,TreeType:()=>I,_List:()=>X,_Tree:()=>Y,_TreeItem:()=>V,treeUtils:()=>e});var e={};o.r(e),o.d(e,{getActionDataByCBXActionData:()=>p,getActionDataByChangeJson:()=>c,getCheckProgress:()=>i,getInvisibleActionMap:()=>d,getItemChildren:()=>r,getItemJsonsWithCheckState:()=>h,getPathOfItemJsons:()=>m,handleAction:()=>s,shouldHandleKeyEvent:()=>l,updateStatesForParents:()=>g});var t=o(48891);const n={},i=(e,t=n)=>{const{getItemChildren:i=(([e])=>e.itemChildren),getItemStateChecked:r=(([e])=>e.itemStateChecked)}=t,o=i([e]),a=r([e]);if(!o)return!!a;const s=o.reduce(((e,t)=>e+(!0===r([t]))),0);return!!s&&(s===o.length||s)},r=e=>{const[t]=e;return t.itemChildren},s=(e,t,n)=>{var i,r;if(!n)return;const[o]=n.props.itemJsons||[];return"function"==typeof(null==o?void 0:o[e])?o[e](t,n):null===(r=(i=n.props)[e])||void 0===r?void 0:r.call(i,t,n)};function l(e){return"INPUT"!==e.target.tagName&&("Enter"===e.key||" "===e.key)}const d=e=>{if(!e||0===e.length)return;const t={};return e.forEach((e=>{t[e]=()=>null})),t},m=e=>e.reduceRight(((t,n,i)=>i<1?t:[...t,Object.entries(r(e.slice(i))).find((([t,n])=>n===e[i-1]))[0]]),[]),c=(e,n)=>{const{itemJsons:i,currentItemJson:r,changeItemJson:o}=n;let a;if(e){const e=m(i).map((e=>["itemChildren",e])).flat();a=Object.entries(o).reduce(((t,[n,i])=>t.setIn([...e,n],i)),(0,t.Immutable)(i[i.length-1])),n=t.Immutable.setIn(n,["itemJsons"],[r,a])}else if(i.length>1){const e=i[1].indexOf(r);a=Object.entries(o).reduce(((t,[n,i])=>t.setIn([e,n],i)),(0,t.Immutable)(i[1])),n=t.Immutable.setIn(n,["itemJsons"],[r,a])}else a=[Object.assign(r,n.changeItemJson)],n=t.Immutable.setIn(n,["itemJsons"],[r]);return n.asMutable({deep:!0})},p=(e,n)=>{const{itemJsons:i,currentItemJson:r,changeItemJson:o}=n;let a;if(e){const e=Object.assign(o,{indeterminate:!1}),s=m(i).map((e=>["itemChildren",e])).flat();let l=(0,t.Immutable)(r).set("itemStateChecked",e.itemStateChecked).set("indeterminate",!1);l=u(l,e),a=(0,t.Immutable)(i[i.length-1]).setIn([...s],l),a=g(a,s.slice(0,s.length-2),o.itemStateChecked),n=(n=t.Immutable.setIn(n,["itemJsons"],[l,a])).asMutable({deep:!0})}else i.length>1&&(n=c(!1,n));return n};function u(e,t){var n;return(null===(n=e.itemChildren)||void 0===n?void 0:n.length)>0&&(e=e.set("itemChildren",e.itemChildren.map((e=>u(e=e.set("itemStateChecked",!e.isCheckboxDisabled&&!e.itemStateDisabled&&t.itemStateChecked).set("indeterminate",!1),t))))),e}function g(e,t,n,i=!1){const r=i?t.slice(0,t.length-2):t;if(0===r.length)return e;let o=e.getIn([...r],e);const a=o.itemChildren.some((e=>e.indeterminate||!e.isCheckboxDisabled&&!e.itemStateDisabled&&e.itemStateChecked!==n)),s=n&&!a;return o=o.set("itemStateChecked",s).set("indeterminate",a),g(e=e.setIn([...r],o),r,s,!0)}function h(e,n){var i;const{dragItemParentChildren:r,dragItemJsons:o,dragItemJson:a,itemJsons:s,targetDropItemJsons:l}=e;let d;if(n.props.showCheckbox){const e=0===r.length&&(a.itemStateChecked||a.indeterminate);if((o[1].indeterminate||e)&&!r.some((e=>e.itemStateChecked===a.itemStateChecked&&e.indeterminate===a.indeterminate))){let e=r.filter((e=>e.indeterminate)).length>0,n=!1;if(r.length>0&&!e){let t=0,i=0;r.forEach((e=>{e.itemStateChecked?t++:i++})),e=t>0&&i>0,n=t>0&&0===i}if(!e){const e=o.slice(1,o.length),i=m(e).map((e=>["itemChildren",e])).flat();d=g((0,t.Immutable)(s[s.length-1]),i,n)}}if(!l[0].indeterminate&&l[0].itemStateChecked!==a.itemStateChecked){const e=m(l).map((e=>["itemChildren",e])).flat();d=d||s[s.length-1],d=0!==e.length||(null===(i=a.itemChildren)||void 0===i?void 0:i.length)>0?g((0,t.Immutable)(d),e,a.itemStateChecked):(0,t.Immutable)(d)}}return null==d?void 0:d.asMutable({deep:!0})}var I,b,f,v,y,x=o(34796);!function(e){e.Typical="TYPICAL",e.Intact="INTACT"}(I||(I={})),function(e){e.PlusMinus="PLUS_MINUS",e.Arrow="ARROW"}(b||(b={})),function(e){e.RenderOverride="renderOverride"}(f||(f={})),function(e){e.RenderOverrideMain="renderOverrideMain"}(v||(v={})),function(e){e.RenderOverrideItemChildrenToggle="renderOverrideItemChildrenToggle",e.RenderOverrideItemDragHandle="renderOverrideItemDragHandle",e.RenderOverrideItemDetailToggle="renderOverrideItemDetailToggle",e.RenderOverrideItemIcon="renderOverrideItemIcon",e.RenderOverrideItemTitle="renderOverrideItemTitle",e.RenderOverrideItemCommands="renderOverrideItemCommands",e.RenderOverrideItemDraggableContainer="renderOverrideItemDraggableContainer",e.RenderOverrideItemMainLine="renderOverrideItemMainLine",e.RenderOverrideItemDetailLine="renderOverrideItemDetailLine",e.RenderOverrideItemBody="renderOverrideItemBody",e.RenderOverrideItemContent="renderOverrideItemContent",e.RenderOverrideItemDroppableContainer="renderOverrideItemDroppableContainer",e.RenderOverrideItemSubitems="renderOverrideItemSubitems",e.RenderOverrideItem="renderOverrideItem",e.OverrideItemBlockInfo="overrideItemBlockInfo",e.HandleInitTreeItemDndDropZone="handleInitTreeItemDndDropZone",e.HandleInitTreeItemDndDrag="handleInitTreeItemDndDrag",e.HandleDidDrop="handleDidDrop",e.HandleDisabledItemRemoved="handleDisabledItemRemoved",e.HandleToggleDetail="handleToggleDetail",e.HandleExpandItem="handleExpandItem",e.HandleEditingTextChange="handleEditingTextChange",e.HandleExitEditing="handleExitEditing",e.HandleStartEditing="handleStartEditing",e.HandleCheckboxChanged="handleCheckboxChanged",e.HandleFindSearchText="handleFindSearchText",e.IsItemDisplayable="isItemDisplayable",e.IsItemFocused="isItemFocused",e.HandleClickItemBody="handleClickItemBody",e.HandleClickItemTitle="handleClickItemTitle",e.HandleDoubleClickItemTitle="handleDoubleClickItemTitle",e.HandleUpdateItem="handleUpdateItem",e.GetDragItemJsons="getDragItemJsons",e.SetDragItemJsons="setDragItemJsons",e.HandleFocusItem="handleFocusItem",e.IsItemDroppable="isItemDroppable",e.IsFolder="isFolder",e.OnToggleDetail="onToggleDetail",e.OnExpandItem="onExpandItem",e.OnEditingTextChange="onEditingTextChange",e.OnExitEditing="onExitEditing",e.OnDidDrop="onDidDrop",e.OnClickItemBody="onClickItemBody",e.OnDoubleClickItemTitle="onDoubleClickItemTitle",e.OnClickItemCommand="onClickItemCommand",e.OnUpdateItem="onUpdateItem"}(y||(y={}));var j=o(30726);const O=t.React.forwardRef(((e,n)=>{const{onKeyDown:i,onClick:r}=e,o=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}(e,["onKeyDown","onClick"]);return t.React.createElement(j.Button,Object.assign({ref:n},o,{onClick:r,onKeyDown:e=>{!r||"Enter"!==e.key&&" "!==e.key||e.preventDefault()},onKeyUp:e=>{!r||"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),r(e))}}))})),C=(0,x.withTheme)((0,t.injectIntl)((e=>{var n,i;const{className:r,theme:a,intl:s,itemCommands:l,data:d,moreCommand:m={key:Symbol(),label:s.formatMessage({id:"more",defaultMessage:j.defaultMessages.more}),iconProps:{icon:o(37580)},action:()=>{}},maxIconCount:c=3,onClickItemCommand:p=(()=>{})}=e,u=!!(null===(i=null===(n=null==d?void 0:d.itemJsons)||void 0===n?void 0:n[0])||void 0===i?void 0:i.itemStateDisabled),[g,h]=t.React.useState(!1),[I,b]=t.React.useState(null),f=e=>e.map(((e,n)=>{const i=("function"==typeof e.iconProps?e.iconProps():e.iconProps)||{icon:null};return e&&!e.collapsed&&(0,t.jsx)(O,{key:n,icon:!0,type:"tertiary",className:"jimu-tree-command-list__command-item",title:e.label,disabled:u,"aria-label":e.label,onClick:t=>{var n;t.stopPropagation(),h(!g);const i={event:t,data:d,command:e,itemCommands:l};null===(n=e.action)||void 0===n||n.call(e,i),p(i)}},(0,t.jsx)(j.Icon,Object.assign({size:"m",className:"jimu-tree-command-list__command-item-icon"},i)),(0,t.jsx)("div",{className:"jimu-tree-command-list__command-item-label"},e.label))})),v=l.filter((e=>!e.collapsed)),y=v.length>c,x=y?[...v.slice(0,c-1),m,...v.slice(c-1)]:v;return(0,t.jsx)("div",{ref:e=>b(e),className:`jimu-tree-command-list ${r||""}`,css:C},f(x.slice(0,c)),y&&(0,t.jsx)(j.Popper,{open:g,reference:I,toggle:()=>h(!1),css:C},(0,t.jsx)("div",{className:"jimu-tree-command-list-dropdown"},f(x.slice(c)))));function C(){return t.css`
      color: ${a.colors.palette.dark[600]};
      .jimu-tree-command-list-dropdown {
        display: flex;
        flex-flow: column;
        background-color: ${a.colors.palette.light[400]};
        padding: .25rem;
        .jimu-tree-command-list__command-item-label {
          display: flex;
        }
      }
      .jimu-tree-command-list__command-item {
        display: flex;
        cursor: pointer;
        margin: 0 0.25rem;
        &.icon-btn{
          padding: 0;
        }
        .icon-btn-sizer{
          min-width: 0;
          min-height: 0;
        }
      }
      .jimu-tree-command-list__command-item-icon {
      }
      .jimu-tree-command-list__command-item-label {
        display: none;
        color: ${a.colors.black};
      }
    `}}))),T=t.React.createContext({isTree:!1,uuid:"jimu-tree-0",multiLevel:!1});var D=o(59455),_=o.n(D);const w=e=>{const{className:n}=e,i=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}(e,["className"]),r=(0,t.classNames)("jimu-icon jimu-icon-component",n);return t.React.createElement(j.SVG,Object.assign({className:r,src:_()},i))};var k=o(80272),S=o.n(k);const J=e=>{const{className:n}=e,i=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}(e,["className"]),r=(0,t.classNames)("jimu-icon jimu-icon-component",n);return t.React.createElement(j.SVG,Object.assign({className:r,src:S()},i))};var E=o(10119),R=o.n(E);const A=e=>{const{className:n}=e,i=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}(e,["className"]),r=(0,t.classNames)("jimu-icon jimu-icon-component",n);return t.React.createElement(j.SVG,Object.assign({className:r,src:R()},i))};var N=o(30900),H=o.n(N);const B=e=>{const{className:n}=e,i=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}(e,["className"]),r=(0,t.classNames)("jimu-icon jimu-icon-component",n);return t.React.createElement(j.SVG,Object.assign({className:r,src:H()},i))};var P=o(98940),M=o.n(P);const $=e=>{const{className:n}=e,i=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}(e,["className"]),r=(0,t.classNames)("jimu-icon jimu-icon-component",n);return t.React.createElement(j.SVG,Object.assign({className:r,src:M()},i))};var F=o(55339),L=o.n(F);const Z=e=>{const{className:n}=e,i=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}(e,["className"]),r=(0,t.classNames)("jimu-icon jimu-icon-component",n);return t.React.createElement(j.SVG,Object.assign({className:r,src:L()},i))};var z,U;class V extends t.React.Component{constructor(e){super(e),this.state={},this.dropZoneRef=t.React.createRef(),this.dragRef=t.React.createRef(),this.dropZoneInteractable=null,this.dragInteractable=null,this.dndInteract=null,this.intl=this.props.intl}componentDidMount(){this.props.dndEnabled&&this.dragRef.current&&t.moduleLoader.loadModule("jimu-core/dnd").then((e=>{this.dndInteract=e.interact,this.props.handleAction(y.HandleInitTreeItemDndDropZone,{type:"mount"},this),this.props.handleAction(y.HandleInitTreeItemDndDrag,{type:"mount"},this)}))}componentWillUnmount(){this.dndInteract&&(this.props.handleAction(y.HandleInitTreeItemDndDropZone,{type:"unmount"},this),this.props.handleAction(y.HandleInitTreeItemDndDrag,{type:"unmount"},this))}render(){const{handleAction:e}=this.props,t=this.props.itemBlockInfo||V.itemBlockInfos[this.props.treeType],n=e(y.OverrideItemBlockInfo,{itemBlockInfo:t},this);return this.renderChildBlocks({currentBlockInfo:{name:null,children:[n]}},this)}renderChildBlocks(e,n){const{handleAction:i}=n.props,{currentBlockInfo:r}=e;return(r.children||[]).filter((e=>!!e)).map(((r,o)=>(0,t.jsx)(t.React.Fragment,{key:o},i(r.name,Object.assign(Object.assign({},e),{currentBlockInfo:r}),n))))}}V.contextType=T,V.defaultHandleActionMap={overrideItemBlockInfo:(e,t)=>{const{itemBlockInfo:n}=e;return n},renderOverrideItemChildrenToggle:(e,n)=>{var i;const{itemJsons:o,collapseStyle:a,showCheckbox:s,treeType:l,itemJsons:[{itemStateExpanded:d,itemStateChecked:m,indeterminate:c,isCheckboxDisabled:p,itemStateTitle:u,itemChildren:g}],handleAction:h}=n.props,f=(null===(i=r(o))||void 0===i?void 0:i.length)>0,v=h(y.IsFolder,{draggingItemJsons:null,targetItemJsons:o},n),x=p||n.context.isTree&&v&&(!g||0===(null==g?void 0:g.length))&&2===o.length,O=s&&l===I.Intact&&(0,t.jsx)("div",{className:(0,t.classNames)("d-flex align-items-center",{"pr-1":!f})},(0,t.jsx)(j.Checkbox,{"aria-label":u,checked:m,indeterminate:c,disabled:x,onChange:e=>{e.stopPropagation(),h(y.HandleCheckboxChanged,{itemStateChecked:e.target.checked},n)}}));if(!n.context.multiLevel)return O;const C=d?"collapse":"expand",T=n.intl.formatMessage({id:C,defaultMessage:j.defaultMessages[C]}),D=a===b.Arrow?(0,t.jsx)(A,{size:"s"}):(0,t.jsx)(w,null),_=a===b.Arrow?V.isRTL?(0,t.jsx)(B,{size:"s"}):(0,t.jsx)($,{size:"s"}):(0,t.jsx)(J,null);return(0,t.jsx)(t.React.Fragment,null,O,f&&(0,t.jsx)(j.Button,{icon:!0,type:"tertiary",className:"jimu-tree-item__children-toggle",title:T,"aria-label":T,onClick:e=>{e.stopPropagation(),h(y.HandleExpandItem,{itemStateExpanded:!d},n)},css:function(){return t.css`
          &.jimu-tree-item__children-toggle {
            cursor: pointer;

            .icon-btn-sizer {
              min-width: 0.75rem;
              min-height: 0.75rem;
            }
          }
        `}},d?D:_))},renderOverrideItemDragHandle:(e,n)=>{if(!n.props.dndEnabled)return null;const i=o(1604),r=n.intl.formatMessage({id:"dragHandler",defaultMessage:j.defaultMessages.dragHandler});return(0,t.jsx)(O,{icon:!0,type:"tertiary","aria-label":r,className:"jimu-tree-item__drag-handle",css:function(){return t.css`
          &.jimu-tree-item__drag-handle {
            display: flex;
            align-items: center;
            touch-action: none;
            border: 0;

            .icon-btn-sizer {
              min-width: 0.25rem;
              min-height: 1rem;
            }
          }
        `}},(0,t.jsx)(j.Icon,{icon:i,width:4,height:16}))},renderOverrideItemDetailToggle:(e,n)=>{const{itemJsons:[{itemStateDetailVisible:i,itemStateDetailContent:r,itemStateDisabled:o}],handleAction:a}=n.props,s=i?A:$,l=i?"collapse":"expand",d=n.intl.formatMessage({id:l,defaultMessage:j.defaultMessages[l]});return r?(0,t.jsx)(O,{icon:!0,type:"tertiary",title:d,"aria-label":d,disabled:!!o,className:"jimu-tree-item__detail-toggle",onClick:e=>{e.stopPropagation(),a(y.HandleToggleDetail,{itemStateDetailVisible:!i},n)},css:function(){return t.css`
          &.jimu-tree-item__detail-toggle {
            display: flex;
            align-items: center;
            cursor: pointer;

            .icon-btn-sizer {
              margin: 0;
              min-width: 0.5rem;
              min-height: 0.5rem;
            }
          }
        `}},(0,t.jsx)(s,{size:"s",autoFlip:!i})):null},renderOverrideItemIcon:(e,n)=>{const{currentBlockInfo:{autoCollapsed:i=!1}}=e,{itemJsons:[{itemStateIcon:r}]}=n.props,o="function"==typeof r?r():r;return o?(0,t.jsx)("div",{className:"jimu-tree-item__icon",css:function(){return t.css`
          &.jimu-tree-item__icon {
            display: flex;
            align-items: center;
            opacity: ${+!!o.icon};
          }
        `},style:i&&!o.icon?{display:"none"}:{}},(0,t.jsx)(j.Icon,Object.assign({},o,{className:"mr-1"}))):null},renderOverrideItemTitle:(e,n)=>{const{currentBlockInfo:{onClick:i=(e=>l(y.HandleClickItemTitle,{},n)),onDoubleClick:r=(e=>{m||l(y.HandleDoubleClickItemTitle,{},n)})}}=e,{itemJsons:o,itemJsons:[{itemStateTitle:a,itemStateEditingText:s}],handleAction:l,theme:d,disableDoubleClickTitle:m}=n.props,c=l(y.IsFolder,{draggingItemJsons:null,targetItemJsons:o},n);let p=null;return"string"==typeof s&&t.lodash.debounce((()=>{null==p||p.focus()}),50)(),(0,t.jsx)("div",{className:"jimu-tree-item__title",onClick:i,onDoubleClick:r,css:function(){const e=`${c&&!s?1:0}px solid ${d.colors.palette.light[800]}`;return t.css`
          &.jimu-tree-item__title {
            display: flex;
            flex: 1;
            align-items: center;
            &:hover {
              outline: ${e};
              outline-offset: 2px;
            }
            > .jimu-tree-item__title-text {
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              word-break: break-word;
              -webkit-line-clamp: 2;
            }
          }
        `}},"string"==typeof s?(0,t.jsx)(j.TextInput,{size:"sm",ref:e=>{p=e},className:"jimu-tree-item__editing-input",value:s,onChange:e=>{const t=e.target.value;l(y.HandleEditingTextChange,{itemStateEditingText:t},n)},onBlur:e=>{const t=e.target.value;l(y.HandleExitEditing,{itemStateEditingText:t},n)}}):(0,t.jsx)("div",{className:"jimu-tree-item__title-text",title:a},a))},renderOverrideItemCommands:(e,n)=>{const{currentBlockInfo:{commandListProps:i={}}}=e,{itemJsons:r,itemJsons:[{itemStateCommands:o=[]}],handleAction:a}=n.props;return(0,t.jsx)(C,Object.assign({className:"jimu-tree-item__commands",itemCommands:o,data:{refComponent:n,itemJsons:r},onClickItemCommand:e=>a(y.OnClickItemCommand,e,n),css:function(){return t.css`
          &.jimu-tree-item__commands {
            display: flex;
            flex: none;
            align-items: center;
          }
        `}},i))},renderOverrideItemDraggableContainer:(e,n)=>(0,t.jsx)("div",{ref:n.dragRef,className:"jimu-tree-item__draggable","data-dndzone-draggable":"true"},n.renderChildBlocks(e,n)),renderOverrideItemMainLine:(e,n)=>(0,t.jsx)("div",{className:(0,t.classNames)("jimu-tree-item__main-line",{"pl-2":!n.props.dndEnabled}),css:function(){return t.css`
          &.jimu-tree-item__main-line {
            display: flex;
            flex: 1;
            align-items: center;
          }
        `}},n.renderChildBlocks(e,n)),renderOverrideItemDetailLine:(e,n)=>{const{itemJsons:[{itemStateDetailVisible:i,itemStateDetailContent:r}]}=n.props;return i&&(0,t.jsx)("div",{className:"jimu-tree-item__detail-line",css:function(){return t.css`
          &.jimu-tree-item__detail-line {
            display: flex;
            flex: 0 0 100%;
          }
        `},"aria-expanded":!0},r)},renderOverrideItemBody:(e,n)=>{const{handleAction:i,itemJsons:[{itemStateTitle:r}]}=n.props;return(0,t.jsx)("div",{className:"jimu-tree-item__body",role:"treeitem",tabIndex:0,"aria-label":r,onClick:e=>i(y.HandleClickItemBody,{},n),onKeyDown:e=>{l(e)&&e.preventDefault()},onKeyUp:e=>{l(e)&&(e.preventDefault(),i(y.HandleClickItemBody,{},n))},css:function(){return t.css`
          &.jimu-tree-item__body {
            position: relative;
            display: flex;
            flex-flow: row wrap;
            flex: 1;
            align-items: center;
          }
        `}},n.renderChildBlocks(e,n))},renderOverrideItemContent:(e,n)=>{var i;const{itemJsons:o,handleAction:a,showCheckbox:s,treeType:l,itemJsons:[{itemStateChecked:d,indeterminate:m,isCheckboxDisabled:c,itemStateTitle:p,itemChildren:u}]}=n.props,[,...g]=o,h=(null===(i=r(o))||void 0===i?void 0:i.length)>0,b=1.25*(l===I.Typical?g.length-(h?1:0):g.length-1)+"rem",f=a(y.IsFolder,{draggingItemJsons:null,targetItemJsons:o},n),v=c||n.context.isTree&&f&&(!u||0===(null==u?void 0:u.length))&&2===o.length;return(0,t.jsx)("div",{className:"jimu-tree-item__content",css:function(){return t.css`
          &.jimu-tree-item__content {
            display: flex;
            flex: 1;
          }
        `}},s&&l===I.Typical&&(0,t.jsx)("div",{className:(0,t.classNames)("d-flex align-items-center",{"pr-1":!n.context.multiLevel})},(0,t.jsx)(j.Checkbox,{"aria-label":p,checked:d,indeterminate:m,disabled:v,onChange:e=>{e.stopPropagation(),a(y.HandleCheckboxChanged,{itemStateChecked:e.target.checked},n)}})),n.context.multiLevel&&(0,t.jsx)("div",{className:"jimu-tree-item__level-padding",style:{width:`${b}`}}),n.renderChildBlocks(e,n))},renderOverrideItemDroppableContainer:(e,n)=>{return(0,t.jsx)("div",{ref:n.dropZoneRef,className:"jimu-tree-item__droppable","data-dndzone-droppable":"true",css:function(){return t.css`
          &.jimu-tree-item__droppable {
            .jimu-tree-item__list-group-item {
              padding: 0;
              background: unset;
              border: none;
              display: flex;
              flex: 1;
            }
          }
        `}},(i=n.renderChildBlocks(e,n),n.context.isTree?(0,t.jsx)(j.ListGroupItem,{className:"jimu-tree-item__list-group-item"},i):i));var i},renderOverrideItemSubitems:(e,n)=>{const{itemJsons:[{itemStateExpanded:i,itemStateDisabled:r}],children:o}=n.props;return r?null:Array.isArray(o)&&o.length>0&&(0,t.jsx)(j.Collapse,{className:"jimu-tree-item__subitems",isOpen:!!i,role:"group",css:function(){return t.css`
          &.jimu-tree-item__subitems {
            display: flex;
            flex: 0 0 100%;
            flex-flow: wrap;
          }
        `}},i&&o)},renderOverrideItem:(e,n)=>{const{currentBlockInfo:{additionalClassName:i=""}}=e,{className:r,theme:o,dndEnabled:a,showRemoveIconForDisabledItem:s,withStates:l,itemJsons:[{itemStateDisabled:d}],handleAction:m,treeType:c}=n.props,{focusItemJsons:p}=l,u=m(y.HandleFindSearchText,{},n),g=m(y.IsItemDisplayable,{},n),h=m(y.IsItemFocused,{focusItemJsons:p},n),I=!!d,b=[i,r,"jimu-tree-item",`jimu-tree-item_template-${c}`,`jimu-tree-item_dnd-${a}`,`jimu-tree-item_focused-${h}`,`jimu-tree-item_disabled-${!!I}`].join(" ");return(0,t.jsx)("div",{className:`jimu-tree-item ${b}`,css:function(){const{size:e="default"}=n.props,i="default"===e?10.5:"sm"===e?7.5:13;return t.css`
          &.jimu-tree-item {
            position: relative;
            display: flex;
            flex: 0 0 100%;
            flex-flow: wrap;
            user-select: none;
            &.jimu-tree-item_focused-true {
              .jimu-tree-item__body {
                &:after {
                  content: '';
                  position: absolute;
                  top: 0;
                  left: 0;
                  bottom: 0;
                  border-left: .125rem solid ${o.colors.palette.primary[600]};
                }
              }
            }
            &.jimu-tree-item_disabled-true {
              .jimu-tree-item__droppable{
                opacity: .7;
                background-color: ${window.jimuConfig.isBuilder?o.colors.palette.light[300]:"unset"};
                .jimu-tree-item__body{
                }
              }
              .jimu-tree-item__mask {
                position: absolute;
                width: 100%;
                height: calc(100% - 0.25rem);
                display: flex;
                align-items: center;
                justify-content: flex-end;
              }
            }
            &.jimu-tree-item_dnd-true {
              [data-dndzone-draggable=true]:hover {
                cursor: pointer !important;
                .jimu-tree-item__drag-handle {
                  opacity: 1;
                }
              }
            }
            [data-dndzone-draggable=true] {
              display: flex;
              flex: 0 0 100%;
              font-weight: 400;
              touch-action: none;
              &[data-dndon-dragging=true] {
                opacity: 0;
              }
            }
            [data-dndzone-droppable=true] {
              display: flex;
              flex: 0 0 100%;
              border: 2px solid transparent;
              &[data-dndon-droppable=true] {
                border-color: transparent;
                &[data-dndon-droptype=to-top] {
                  border-top-color: ${o.colors.palette.primary[600]};
                }
                &[data-dndon-droptype=to-bottom] {
                  border-bottom-color: ${o.colors.palette.primary[600]};
                }
                &[data-dndon-droptype=to-inside] {
                  border-color: ${o.colors.palette.primary[600]};
                }
                &[data-dndon-droptype=to-nowhere] {
                  opacity: .2;
                }
              }
            }
          }
          &.jimu-tree-item_template-${c} {
            padding-top: 0.25rem;
            &:first-of-type {
              padding-top: 0;
            }
            .jimu-tree-item__subitems .jimu-tree-item_template-${c}:first-of-type {
              padding-top: 0.25rem;
            }

            .jimu-tree-item__content {
              color: ${o.colors.black};
            }
            .jimu-tree-item__main-line {
              padding: ${t.polished.rem(i)} 0.125rem;
            }
            .jimu-tree-item__detail-line {
            }
            .jimu-tree-item__body {
              line-height: ${o.typography.lineHeights.sm};
              background-color: ${window.jimuConfig.isBuilder?o.colors.palette.light[500]:"unset"};
              border: ${window.jimuConfig.isBuilder?"none":`1px solid ${o.colors.palette.light[200]}`};
              &:hover {
                background-color: ${o.colors.palette.light[window.jimuConfig.isBuilder?600:100]};
              }
              &:focus,
              &:focus-within {
                .jimu-tree-item__drag-handle {
                  opacity: 1;
                }
              }
            }
            .jimu-tree-item__drag-handle {
              opacity: 0;
            }
            .jimu-tree-item__children-toggle,
            .jimu-tree-item__drag-handle,
            .jimu-tree-item__detail-toggle,
            .jimu-tree-item__icon {
              padding: 0 .125rem;
            }
          }
        `},style:{display:u&&g?void 0:"none"}},n.renderChildBlocks(e,n),I&&(0,t.jsx)("div",{className:"jimu-tree-item__mask"},s&&(0,t.jsx)(j.Button,{icon:!0,type:"default",size:"sm",className:"mr-1",onClick:e=>{e.stopPropagation(),m(y.HandleDisabledItemRemoved,{},n)}},(0,t.jsx)(Z,null))))},handleInitTreeItemDndDropZone:(e,n)=>{const{type:i}=e;if("mount"===i){const e=n.dndInteract;e.dynamicDrop(!0),n.dropZoneInteractable=e(n.dropZoneRef.current).dropzone({accept:"[data-dndzone-draggable=true]",overlap:"pointer",ondropmove:e=>{const{target:t,relatedTarget:i}=e,{itemJsons:r,itemJsons:[{itemStateDisabled:o}],withStates:a,handleAction:s}=n.props,{searchForText:l}=a,d=i.getBoundingClientRect(),m=t.getBoundingClientRect(),c=+i.getAttribute("data-dndon-starty"),p=d.top+c,u=s(y.GetDragItemJsons,{dragEvent:e.dragEvent},n),[g]=u.itemJsons,h=s(y.IsItemDroppable,{draggingItemJsons:u.itemJsons,targetItemJsons:r},n),I=["to-nowhere","to-top",...n.context.isTree&&!o&&h?["to-inside"]:[],"to-bottom"].find(((e,t,n)=>"to-nowhere"===e?r.includes(g)||!!l:p<m.top+m.height*t/(n.length-1)?e:void 0));let b=I;n.context.isTree&&!o&&"to-nowhere"!==I&&("to-inside"!==I||h?r.some(((e,t)=>0!==t&&t!==r.length-1&&!s(y.IsItemDroppable,{draggingItemJsons:u.itemJsons,targetItemJsons:[e]},n)))&&(b="to-nowhere"):b="to-nowhere"),t.setAttribute("data-dndon-droptype",b)},ondragenter:e=>{const{target:t}=e;t.setAttribute("data-dndon-droppable","true")},ondragleave:e=>{const{target:t}=e;t.removeAttribute("data-dndon-droppable"),t.removeAttribute("data-dndon-droptype")},ondrop:e=>{t.lodash.defer((()=>{const{target:t}=e,{itemJsons:i,handleAction:r}=n.props,o=e.target.getAttribute("data-dndon-droptype"),a=r(y.GetDragItemJsons,{dragEvent:e.dragEvent},n);r(y.SetDragItemJsons,{itemJsons:i,dragEvent:e.dragEvent,type:"dragend"},n),r(y.HandleDidDrop,{dropType:o,dragItem:a},n),t.removeAttribute("data-dndon-droppable"),t.removeAttribute("data-dndon-droptype")}))}})}"unmount"===i&&n.dropZoneInteractable&&(n.dropZoneInteractable.unset(),n.dropZoneInteractable=null)},handleInitTreeItemDndDrag:(e,t)=>{const{type:n}=e;if("mount"===n){const e=t.dndInteract;t.dragInteractable=e(t.dragRef.current).draggable({inertia:!1,modifiers:[],autoScroll:{container:document.getElementById(t.context.uuid)},onstart:e=>{t.dragTriggered=!0;const{target:n,clientY:i}=e;n.style.position="fixed";const{itemJsons:r,handleAction:o}=t.props;o(y.SetDragItemJsons,{itemJsons:r,dragEvent:e,type:"dragstart"},t);const a=n.getBoundingClientRect();n.setAttribute("data-dndon-starty",i-a.top),n.setAttribute("data-dndon-dragging","true")},onmove:e=>{const{target:t,clientY:n,clientY0:i}=e,r=n-i;t.style.webkitTransform=t.style.transform=`translate(0, ${r}px)`},onend:e=>{const{target:t}=e;t.style.position=null,t.style.webkitTransform=t.style.transform="",t.removeAttribute("data-dndon-starty"),t.removeAttribute("data-dndon-dragging")}}).on("click",(e=>{t.dragTriggered&&e.stopImmediatePropagation(),t.dragTriggered=!1}))}"unmount"===n&&t.dragInteractable&&(t.dragInteractable.unset(),t.dragInteractable=null)},handleDidDrop:(e,t)=>{const{itemJsons:n}=t.props,{dropType:i,dragItem:o}=e;if(["to-top","to-inside","to-bottom"].includes(i)){const e=o.itemJsons,a=n,[s]=e,[l]=a,d=r(e.slice(1)),m=r(a.slice(1)),c=r(a),p=d.indexOf(s),u="to-inside"===i?a:a.slice(1);let g="to-top"===i?m.indexOf(l):"to-bottom"===i?m.indexOf(l)+1:(c||[]).length;const I=r(u);g+=d===I&&p<g?-1:0;const b=(e,t)=>{const{dragItemParentChildren:n,dragItemJson:i,dragItemIndex:r,targetDropItemChildren:o,targetDropItemJsons:a,targetDropItemIndex:s}=e;if(n.splice(r,1),o)o.splice(s,0,i);else{const[e]=a;e.itemChildren=[i]}};let f={updateType:y.HandleDidDrop,parentDragItemJsons:e.slice(1),dragItemParentChildren:d,dragItemIndex:p,dragItemJsons:e,dragItemJson:s,targetDropItemJsons:u,targetDropItemChildren:I,targetDropItemIndex:g,dropType:i,itemJsons:n,muteUpdate:b};b(f,t);const v=h(f,t);v&&(f=Object.assign(f,{itemJsons:[...n.slice(0,n.length-1),v]})),t.props.handleAction(y.HandleUpdateItem,f,t)}t.props.handleAction(y.OnDidDrop,e,t)},handleDisabledItemRemoved:(e,t)=>{const{itemJsons:n}=t.props,i=n,[o]=i,a=r(i.slice(1)),s=a.indexOf(o),l={updateType:y.HandleDisabledItemRemoved,itemJsons:n};a.splice(s,1),t.props.handleAction(y.HandleUpdateItem,l,t)},handleToggleDetail:(e,t)=>{const{itemStateDetailVisible:n}=e,{itemJsons:i}=t.props,[r]=i;t.props.handleAction(y.HandleUpdateItem,{updateType:y.HandleToggleDetail,changeItemJson:{itemStateDetailVisible:n},currentItemJson:r,itemJsons:i},t),t.props.handleAction(y.OnToggleDetail,e,t)},handleExpandItem:(e,t)=>{const{itemStateExpanded:n}=e,{itemJsons:i}=t.props,[r]=i;t.props.handleAction(y.HandleUpdateItem,{updateType:y.HandleExpandItem,changeItemJson:{itemStateExpanded:n},currentItemJson:r,itemJsons:i},t),t.props.handleAction(y.OnExpandItem,e,t)},handleEditingTextChange:(e,t)=>{const{itemStateEditingText:n}=e,{itemJsons:i}=t.props,[r]=i;t.props.handleAction(y.HandleUpdateItem,{updateType:y.HandleEditingTextChange,changeItemJson:{itemStateEditingText:n||""},currentItemJson:r,itemJsons:i},t),t.props.handleAction(y.OnEditingTextChange,e,t)},handleExitEditing:(e,t)=>{const{itemStateEditingText:n}=e,{itemJsons:i}=t.props,[r]=i;t.props.handleAction(y.HandleUpdateItem,{updateType:y.HandleExitEditing,changeItemJson:{itemStateEditingText:null,itemStateTitle:n||""},currentItemJson:r,itemJsons:i},t),t.props.handleAction(y.OnExitEditing,e,t)},handleFindSearchText:(e,t)=>{const{itemJsons:[{itemKey:n}],withStates:{searchForText:i}}=t.props;return(n||"").match(i||"")},isItemDisplayable:(e,t)=>!0,isItemFocused:(e,t)=>{const{focusItemJsons:n}=e,{itemJsons:[i]}=t.props;return(null==n?void 0:n[0])===i},handleClickItemBody:(e,t)=>{t.props.handleAction(y.HandleFocusItem,{},t),t.props.handleAction(y.OnClickItemBody,e,t)},handleDoubleClickItemTitle:(e,t)=>{const{itemJsons:[{itemStateTitle:n}]}=t.props;t.props.handleAction(y.HandleStartEditing,{itemStateEditingText:n},t),t.props.handleAction(y.OnDoubleClickItemTitle,e,t)},handleCheckboxChanged:(e,t)=>{const{itemStateChecked:n}=e,{itemJsons:i}=t.props,[r]=i;let o={updateType:y.HandleCheckboxChanged,changeItemJson:{itemStateChecked:n||!1},currentItemJson:r,itemJsons:i};o=p(t.context.isTree,o),t.props.handleAction(y.OnUpdateItem,o,t)},handleStartEditing:(e,t)=>{const{itemStateEditingText:n}=e,{itemJsons:i}=t.props,[r]=i;t.props.handleAction(y.HandleUpdateItem,{updateType:y.HandleStartEditing,changeItemJson:{itemStateEditingText:n||""},currentItemJson:r,itemJsons:i},t)},handleUpdateItem:(e,t)=>{e.changeItemJson&&(e=c(t.context.isTree,e)),t.props.handleAction(y.OnUpdateItem,e,t)},isItemDroppable:(e,t)=>!0,isFolder:(e,t)=>!1,getDragItemJsons:null,setDragItemJsons:null,handleClickItemTitle:null,handleFocusItem:null,onToggleDetail:null,onExpandItem:null,onEditingTextChange:null,onExitEditing:null,onDidDrop:null,onClickItemBody:null,onDoubleClickItemTitle:null,onClickItemCommand:null,onUpdateItem:null},V.isRTL=null===(U=null===(z=(0,t.getAppStore)().getState())||void 0===z?void 0:z.appContext)||void 0===U?void 0:U.isRTL,V.itemBlockInfos={[I.Typical]:{name:y.RenderOverrideItem,children:[{name:y.RenderOverrideItemDroppableContainer,children:[{name:y.RenderOverrideItemContent,children:[{name:y.RenderOverrideItemChildrenToggle},{name:y.RenderOverrideItemBody,children:[{name:y.RenderOverrideItemMainLine,children:[{name:y.RenderOverrideItemDraggableContainer,children:[{name:y.RenderOverrideItemDragHandle},{name:y.RenderOverrideItemDetailToggle},{name:y.RenderOverrideItemIcon},{name:y.RenderOverrideItemTitle},{name:y.RenderOverrideItemCommands}]}]},{name:y.RenderOverrideItemDetailLine}]}]}]},{name:y.RenderOverrideItemSubitems}]},[I.Intact]:{name:y.RenderOverrideItem,children:[{name:y.RenderOverrideItemDroppableContainer,children:[{name:y.RenderOverrideItemContent,children:[{name:y.RenderOverrideItemBody,children:[{name:y.RenderOverrideItemMainLine,children:[{name:y.RenderOverrideItemDraggableContainer,children:[{name:y.RenderOverrideItemDragHandle},{name:y.RenderOverrideItemChildrenToggle},{name:y.RenderOverrideItemDetailToggle},{name:y.RenderOverrideItemIcon},{name:y.RenderOverrideItemTitle},{name:y.RenderOverrideItemCommands}]}]},{name:y.RenderOverrideItemDetailLine}]}]}]},{name:y.RenderOverrideItemSubitems}]}},V.defaultProps=Object.assign({theme:{},className:"",treeType:I.Typical,dndEnabled:!1,withStates:{},handleAction:s},V.defaultHandleActionMap);const G=(0,x.withTheme)((0,t.injectIntl)(V));class K extends t.React.Component{constructor(e){super(e),this.state={dragItems:[]}}render(){return this.props.handleAction(v.RenderOverrideMain,{},this)}renderItemJson(e){const{treeType:n,collapseStyle:i,showCheckbox:o,dndEnabled:a,disableDoubleClickTitle:s,withStates:l,size:d="default",showRemoveIconForDisabledItem:m}=this.props,[c,...p]=e,{itemKey:u,itemStateExpanded:g,itemStateEditingText:h}=c,I=r(e),b=["jimu-tree-main__item",`jimu-tree-main__item_level-${p.length}`,`jimu-tree-main__item_editing-${"string"==typeof h}`,...I?[`jimu-tree-main__item_expandable-${!!I}`,`jimu-tree-main__item_expanded-${!!g}`]:[]].join(" ");return(0,t.jsx)(G,Object.assign({key:u,className:b,treeType:n,collapseStyle:i,showCheckbox:o,itemJsons:e,size:d,dndEnabled:a,disableDoubleClickTitle:s,showRemoveIconForDisabledItem:m,withStates:l},Object.assign({},...Object.values(y).map((e=>{var t;return{[e]:null===(t=this.props[e])||void 0===t?void 0:t.bind(this)}})))),(I||[]).map((t=>this.renderItemJson([t,...e]))))}}K.defaultHandleActionMap={renderOverrideMain:(e,n)=>{var i,o;const{className:a,topTag:s,isTree:l,uuid:d,rootItemVisible:m,rootItemJson:c}=n.props,p=c?r([c]):null,u=(null===(o=null===(i=null==c?void 0:c.itemChildren)||void 0===i?void 0:i.filter((e=>{var t;return(null===(t=null==e?void 0:e.itemChildren)||void 0===t?void 0:t.length)>0})))||void 0===o?void 0:o.length)>0,g=s;return(0,t.jsx)(T.Provider,{value:{isTree:l,multiLevel:u,uuid:d}},(0,t.jsx)(g,{className:`jimu-tree-main ${a||""}`,css:function(){return t.css`
          &.jimu-tree-main {
            width: 100%;
          }
        `},role:"tree"},m?n.renderItemJson([c]):(p||[]).map(((e,i)=>(0,t.jsx)(t.React.Fragment,{key:i},n.renderItemJson([e,c]))))))},setDragItemJsons(e,t){this.setState((({dragItems:t})=>({dragItems:[...t.filter((t=>t.dragEvent.target!==e.dragEvent.target)),..."dragstart"===e.type?[e]:[]]})))},getDragItemJsons(e,t){return this.state.dragItems.find((t=>t.dragEvent.target===e.dragEvent.target))}},K.defaultProps=Object.assign({className:"",topTag:"div",treeType:I.Typical,rootItemVisible:!1,dndEnabled:!1,withStates:{},handleAction:s},K.defaultHandleActionMap);class Y extends t.React.Component{constructor(e){super(e),Y.count++,this.localRandomId="jimu-tree-"+Y.count,this.state={searchForText:"",focusItemJsons:[],filterEnabled:!1}}render(){return this.props.handleAction(f.RenderOverride,{},this)}}Y.count=-1,Y.defaultHandleActionMap={renderOverride:(e,n)=>{const{className:i,topTag:r,isTree:o=!0,treeType:a,size:s,collapseStyle:l,showCheckbox:d=!1,disableDoubleClickTitle:m=!1,rootItemJson:c,rootItemVisible:p,dndEnabled:u,showRemoveIconForDisabledItem:g,forwardRef:h}=n.props,{searchForText:I,filterEnabled:b}=n.state,f=["jimu-tree",i,`jimu-tree_template-${a}`,`jimu-tree_searched-text-${!!I}`,`jimu-tree_filter-enabled-${!!b}`].join(" "),x=r;return(0,t.jsx)(x,{ref:h,className:f,id:n.localRandomId,css:function(){return t.css`
          &.jimu-tree {
            display: flex;
            flex-flow: wrap;
            height: 100%;
            overflow-y: auto;
            &.jimu-tree_is-list-false {
              .jimu-tree-search,
              .jimu-tree-mod__widget_filter {
                visibility: hidden;
              }
            }
            &.jimu-tree_searched-text-true,
            &.jimu-tree_filter-enabled-true {
              .jimu-tree-mod__widget_add {
                visibility: hidden;
              }
            }
          }
        `}},(0,t.jsx)(K,Object.assign({className:"",uuid:n.localRandomId,treeType:a,collapseStyle:l,showCheckbox:d,topTag:x,size:s,isTree:o,rootItemJson:c,rootItemVisible:p,dndEnabled:u,disableDoubleClickTitle:m,showRemoveIconForDisabledItem:g,withStates:n.state},Object.assign({},...[...Object.values(y),...Object.values(v)].map((e=>{var t;return{[e]:null===(t=n.props[e])||void 0===t?void 0:t.bind(n)}}))))))},isItemDisplayable(e,t){const{itemJsons:[{itemStateChecked:n}]}=t.props;return!this.state.filterEnabled||!!n},handleFocusItem(e,t){const{itemJsons:n}=t.props;this.setState({focusItemJsons:n})}},Y.defaultProps=Object.assign({theme:(0,t.Immutable)({}),className:"",topTag:"div",treeType:I.Typical,rootItemVisible:!1,dndEnabled:!1,handleAction:s},Y.defaultHandleActionMap);const W=(0,x.withTheme)(Y);function X(e){const{className:n="",itemsJson:i=[],listType:r}=e,o=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}(e,["className","itemsJson","listType"]);return(0,t.jsx)(W,Object.assign({},o,{className:`${n} jimu-list`,isTree:!1,rootItemJson:(a=[...i],Object.assign(a,{itemKey:"",itemChildren:a})),treeType:r}));var a}const q=(0,x.withTheme)(X)})(),a})())}}}));