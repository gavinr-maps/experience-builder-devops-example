System.register(["jimu-core","jimu-theme","jimu-ui"],(function(e,t){var n={},r={},i={};return{setters:[function(e){n.Immutable=e.Immutable,n.React=e.React,n.classNames=e.classNames,n.css=e.css,n.getAppStore=e.getAppStore,n.injectIntl=e.injectIntl,n.jsx=e.jsx,n.lodash=e.lodash,n.moduleLoader=e.moduleLoader,n.polished=e.polished},function(e){r.withTheme=e.withTheme},function(e){i.Button=e.Button,i.Checkbox=e.Checkbox,i.Collapse=e.Collapse,i.Icon=e.Icon,i.ListGroupItem=e.ListGroupItem,i.Popper=e.Popper,i.TextInput=e.TextInput,i.defaultMessages=e.defaultMessages}],execute:function(){e((()=>{var e={10119:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 4l-6 8-6-8h12z" fill="#000"></path></svg>'},30900:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 14L4 8l8-6v12z" fill="#000"></path></svg>'},98940:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 2l8 6-8 6V2z" fill="#000"></path></svg>'},55339:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.745 8l6.1 6.1a.527.527 0 11-.745.746L8 8.746l-6.1 6.1a.527.527 0 11-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 01.746-.746l6.1 6.1 6.1-6.1a.527.527 0 01.746.746L8.746 8z" fill="#000"></path></svg>'},59455:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 8A6 6 0 112 8a6 6 0 0112 0zm1 0A7 7 0 111 8a7 7 0 0114 0zM4 8a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7A.5.5 0 014 8z" fill="#000"></path></svg>'},80272:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 8A6 6 0 112 8a6 6 0 0112 0zm1 0A7 7 0 111 8a7 7 0 0114 0zM7.5 4.5a.5.5 0 011 0v3h3a.5.5 0 010 1h-3v3a.5.5 0 01-1 0v-3h-3a.5.5 0 010-1h3v-3z" fill="#000"></path></svg>'},1604:e=>{e.exports='<svg viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 1H1v2h2V1zM3 5H1v2h2V5zM1 9h2v2H1V9zM3 13H1v2h2v-2z" fill="#000"></path></svg>'},37580:e=>{e.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero" fill="none"><path d="M13 7.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm-6.5 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM0 7.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" fill="#000"></path><path d="M0 0h16v16H0z"></path></g></svg>'},48891:e=>{"use strict";e.exports=n},34796:e=>{"use strict";e.exports=r},30726:e=>{"use strict";e.exports=i}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,o),i.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return(()=>{"use strict";o.r(a),o.d(a,{List:()=>q,Tree:()=>W,TreeActionType:()=>b,TreeCollapseStyle:()=>f,TreeItem:()=>K,TreeItemActionType:()=>y,TreeMainActionType:()=>v,TreeType:()=>I,_List:()=>X,_Tree:()=>Y,_TreeItem:()=>Z,treeUtils:()=>e});var e={};o.r(e),o.d(e,{getActionDataByCBXActionData:()=>p,getActionDataByChangeJson:()=>c,getCheckProgress:()=>r,getInvisibleActionMap:()=>d,getItemChildren:()=>i,getItemJsonsWithCheckState:()=>h,getPathOfItemJsons:()=>m,handleAction:()=>s,shouldHandleKeyEvent:()=>l,updateStatesForParents:()=>g});var t=o(48891);const n={},r=(e,t=n)=>{const{getItemChildren:r=(([e])=>e.itemChildren),getItemStateChecked:i=(([e])=>e.itemStateChecked)}=t,o=r([e]),a=i([e]);if(!o)return!!a;const s=o.reduce(((e,t)=>e+(!0===i([t]))),0);return!!s&&(s===o.length||s)},i=e=>{const[t]=e;return t.itemChildren},s=(e,t,n)=>{var r,i;if(!n)return;const[o]=n.props.itemJsons||[];return"function"==typeof(null==o?void 0:o[e])?o[e](t,n):null===(i=(r=n.props)[e])||void 0===i?void 0:i.call(r,t,n)};function l(e){return"INPUT"!==e.target.tagName&&("Enter"===e.key||" "===e.key)}const d=e=>{if(!e||0===e.length)return;const t={};return e.forEach((e=>{t[e]=()=>null})),t},m=e=>e.reduceRight(((t,n,r)=>r<1?t:[...t,Object.entries(i(e.slice(r))).find((([t,n])=>n===e[r-1]))[0]]),[]),c=(e,n)=>{const{itemJsons:r,currentItemJson:i,changeItemJson:o}=n;let a;if(e){const e=m(r).map((e=>["itemChildren",e])).flat();a=Object.entries(o).reduce(((t,[n,r])=>t.setIn([...e,n],r)),(0,t.Immutable)(r[r.length-1])),n=t.Immutable.setIn(n,["itemJsons"],[i,a])}else if(r.length>1){const e=r[1].indexOf(i);a=Object.entries(o).reduce(((t,[n,r])=>t.setIn([e,n],r)),(0,t.Immutable)(r[1])),n=t.Immutable.setIn(n,["itemJsons"],[i,a])}else a=[Object.assign(i,n.changeItemJson)],n=t.Immutable.setIn(n,["itemJsons"],[i]);return n.asMutable({deep:!0})},p=(e,n)=>{const{itemJsons:r,currentItemJson:i,changeItemJson:o}=n;let a;if(e){const e=Object.assign(o,{indeterminate:!1}),s=m(r).map((e=>["itemChildren",e])).flat();let l=(0,t.Immutable)(i).set("itemStateChecked",e.itemStateChecked).set("indeterminate",!1);l=u(l,e),a=(0,t.Immutable)(r[r.length-1]).setIn([...s],l),a=g(a,s.slice(0,s.length-2),o.itemStateChecked),n=(n=t.Immutable.setIn(n,["itemJsons"],[l,a])).asMutable({deep:!0})}else r.length>1&&(n=c(!1,n));return n};function u(e,t){var n;return(null===(n=e.itemChildren)||void 0===n?void 0:n.length)>0&&(e=e.set("itemChildren",e.itemChildren.map((e=>u(e=e.set("itemStateChecked",t.itemStateChecked).set("indeterminate",!1),t))))),e}function g(e,t,n,r=!1){const i=r?t.slice(0,t.length-2):t;if(0===i.length)return e;let o=e.getIn([...i],e);const a=o.itemChildren.some((e=>e.indeterminate||!!e.itemStateChecked!==n)),s=n&&!a;return o=o.set("itemStateChecked",s).set("indeterminate",a),g(e=e.setIn([...i],o),i,s,!0)}function h(e,n){var r;const{dragItemParentChildren:i,dragItemJsons:o,dragItemJson:a,itemJsons:s,targetDropItemJsons:l}=e;let d;if(n.props.showCheckbox){const e=0===i.length&&(a.itemStateChecked||a.indeterminate);if((o[1].indeterminate||e)&&!i.some((e=>e.itemStateChecked===a.itemStateChecked&&e.indeterminate===a.indeterminate))){let e=i.filter((e=>e.indeterminate)).length>0,n=!1;if(i.length>0&&!e){let t=0,r=0;i.forEach((e=>{e.itemStateChecked?t++:r++})),e=t>0&&r>0,n=t>0&&0===r}if(!e){const e=o.slice(1,o.length),r=m(e).map((e=>["itemChildren",e])).flat();d=g((0,t.Immutable)(s[s.length-1]),r,n)}}if(!l[0].indeterminate&&l[0].itemStateChecked!==a.itemStateChecked){const e=m(l).map((e=>["itemChildren",e])).flat();d=d||s[s.length-1],d=0!==e.length||(null===(r=a.itemChildren)||void 0===r?void 0:r.length)>0?g((0,t.Immutable)(d),e,a.itemStateChecked):(0,t.Immutable)(d)}}return null==d?void 0:d.asMutable({deep:!0})}var I,f,b,v,y,x=o(34796);!function(e){e.Typical="TYPICAL",e.Intact="INTACT"}(I||(I={})),function(e){e.PlusMinus="PLUS_MINUS",e.Arrow="ARROW"}(f||(f={})),function(e){e.RenderOverride="renderOverride"}(b||(b={})),function(e){e.RenderOverrideMain="renderOverrideMain"}(v||(v={})),function(e){e.RenderOverrideItemChildrenToggle="renderOverrideItemChildrenToggle",e.RenderOverrideItemDragHandle="renderOverrideItemDragHandle",e.RenderOverrideItemDetailToggle="renderOverrideItemDetailToggle",e.RenderOverrideItemIcon="renderOverrideItemIcon",e.RenderOverrideItemTitle="renderOverrideItemTitle",e.RenderOverrideItemCommands="renderOverrideItemCommands",e.RenderOverrideItemDraggableContainer="renderOverrideItemDraggableContainer",e.RenderOverrideItemMainLine="renderOverrideItemMainLine",e.RenderOverrideItemDetailLine="renderOverrideItemDetailLine",e.RenderOverrideItemBody="renderOverrideItemBody",e.RenderOverrideItemContent="renderOverrideItemContent",e.RenderOverrideItemDroppableContainer="renderOverrideItemDroppableContainer",e.RenderOverrideItemSubitems="renderOverrideItemSubitems",e.RenderOverrideItem="renderOverrideItem",e.OverrideItemBlockInfo="overrideItemBlockInfo",e.HandleInitTreeItemDndDropZone="handleInitTreeItemDndDropZone",e.HandleInitTreeItemDndDrag="handleInitTreeItemDndDrag",e.HandleDidDrop="handleDidDrop",e.HandleDisabledItemRemoved="handleDisabledItemRemoved",e.HandleToggleDetail="handleToggleDetail",e.HandleExpandItem="handleExpandItem",e.HandleEditingTextChange="handleEditingTextChange",e.HandleExitEditing="handleExitEditing",e.HandleStartEditing="handleStartEditing",e.HandleCheckboxChanged="handleCheckboxChanged",e.HandleFindSearchText="handleFindSearchText",e.IsItemDisplayable="isItemDisplayable",e.IsItemFocused="isItemFocused",e.HandleClickItemBody="handleClickItemBody",e.HandleClickItemTitle="handleClickItemTitle",e.HandleDoubleClickItemTitle="handleDoubleClickItemTitle",e.HandleUpdateItem="handleUpdateItem",e.GetDragItemJsons="getDragItemJsons",e.SetDragItemJsons="setDragItemJsons",e.HandleFocusItem="handleFocusItem",e.IsItemDroppable="isItemDroppable",e.IsFolder="isFolder",e.OnToggleDetail="onToggleDetail",e.OnExpandItem="onExpandItem",e.OnEditingTextChange="onEditingTextChange",e.OnExitEditing="onExitEditing",e.OnDidDrop="onDidDrop",e.OnClickItemBody="onClickItemBody",e.OnDoubleClickItemTitle="onDoubleClickItemTitle",e.OnClickItemCommand="onClickItemCommand",e.OnUpdateItem="onUpdateItem"}(y||(y={}));var j=o(30726);const O=t.React.forwardRef(((e,n)=>{const{onKeyDown:r,onClick:i}=e,o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(e,["onKeyDown","onClick"]);return t.React.createElement(j.Button,Object.assign({ref:n},o,{onClick:i,onKeyDown:e=>{!i||"Enter"!==e.key&&" "!==e.key||e.preventDefault()},onKeyUp:e=>{!i||"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),i(e))}}))})),C=(0,x.withTheme)((0,t.injectIntl)((e=>{var n,r;const{className:i,theme:a,intl:s,itemCommands:l,data:d,moreCommand:m={key:Symbol(),label:s.formatMessage({id:"more",defaultMessage:j.defaultMessages.more}),iconProps:{icon:o(37580)},action:()=>{}},maxIconCount:c=3,onClickItemCommand:p=(()=>{})}=e,u=!!(null===(r=null===(n=null==d?void 0:d.itemJsons)||void 0===n?void 0:n[0])||void 0===r?void 0:r.itemStateDisabled),[g,h]=t.React.useState(!1),[I,f]=t.React.useState(null),b=e=>e.map(((e,n)=>{const r=("function"==typeof e.iconProps?e.iconProps():e.iconProps)||{icon:null};return e&&!e.collapsed&&(0,t.jsx)(O,{key:n,icon:!0,type:"tertiary",className:"jimu-tree-command-list__command-item",title:e.label,disabled:u,"aria-label":e.label,onClick:t=>{var n;t.stopPropagation(),h(!g);const r={event:t,data:d,command:e,itemCommands:l};null===(n=e.action)||void 0===n||n.call(e,r),p(r)}},(0,t.jsx)(j.Icon,Object.assign({size:12,className:"jimu-tree-command-list__command-item-icon"},r)),(0,t.jsx)("div",{className:"jimu-tree-command-list__command-item-label"},e.label))})),v=l.filter((e=>!e.collapsed)),y=v.length>c,x=y?[...v.slice(0,c-1),m,...v.slice(c-1)]:v;return(0,t.jsx)("div",{ref:e=>f(e),className:`jimu-tree-command-list ${i||""}`,css:C},b(x.slice(0,c)),y&&(0,t.jsx)(j.Popper,{open:g,reference:I,toggle:()=>h(!1),css:C},(0,t.jsx)("div",{className:"jimu-tree-command-list-dropdown"},b(x.slice(c)))));function C(){return t.css`
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
    `}}))),T=t.React.createContext({isTree:!1,multiLevel:!1});var _=o(59455),D=o.n(_);const w=e=>{const{className:n}=e,r=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(e,["className"]),i=(0,t.classNames)("jimu-icon-component",n);return t.React.createElement(j.Icon,Object.assign({className:i,icon:D()},r))};var k=o(80272),S=o.n(k);const J=e=>{const{className:n}=e,r=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(e,["className"]),i=(0,t.classNames)("jimu-icon-component",n);return t.React.createElement(j.Icon,Object.assign({className:i,icon:S()},r))};var E=o(10119),R=o.n(E);const A=e=>{const{className:n}=e,r=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(e,["className"]),i=(0,t.classNames)("jimu-icon-component",n);return t.React.createElement(j.Icon,Object.assign({className:i,icon:R()},r))};var N=o(30900),H=o.n(N);const B=e=>{const{className:n}=e,r=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(e,["className"]),i=(0,t.classNames)("jimu-icon-component",n);return t.React.createElement(j.Icon,Object.assign({className:i,icon:H()},r))};var P=o(98940),M=o.n(P);const z=e=>{const{className:n}=e,r=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(e,["className"]),i=(0,t.classNames)("jimu-icon-component",n);return t.React.createElement(j.Icon,Object.assign({className:i,icon:M()},r))};var $=o(55339),F=o.n($);const L=e=>{const{className:n}=e,r=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(e,["className"]),i=(0,t.classNames)("jimu-icon-component",n);return t.React.createElement(j.Icon,Object.assign({className:i,icon:F()},r))};var U,V;class Z extends t.React.Component{constructor(e){super(e),this.state={},this.dropZoneRef=t.React.createRef(),this.dragRef=t.React.createRef(),this.dropZoneInteractable=null,this.dragInteractable=null,this.dndInteract=null,this.intl=this.props.intl}componentDidMount(){this.props.dndEnabled&&this.dragRef.current&&t.moduleLoader.loadModule("jimu-core/dnd").then((e=>{this.dndInteract=e.interact,this.props.handleAction(y.HandleInitTreeItemDndDropZone,{type:"mount"},this),this.props.handleAction(y.HandleInitTreeItemDndDrag,{type:"mount"},this)}))}componentWillUnmount(){this.dndInteract&&(this.props.handleAction(y.HandleInitTreeItemDndDropZone,{type:"unmount"},this),this.props.handleAction(y.HandleInitTreeItemDndDrag,{type:"unmount"},this))}render(){const{handleAction:e}=this.props,t=this.props.itemBlockInfo||Z.itemBlockInfos[this.props.treeType],n=e(y.OverrideItemBlockInfo,{itemBlockInfo:t},this);return this.renderChildBlocks({currentBlockInfo:{name:null,children:[n]}},this)}renderChildBlocks(e,n){const{handleAction:r}=n.props,{currentBlockInfo:i}=e;return(i.children||[]).filter((e=>!!e)).map(((i,o)=>(0,t.jsx)(t.React.Fragment,{key:o},r(i.name,Object.assign(Object.assign({},e),{currentBlockInfo:i}),n))))}}Z.contextType=T,Z.defaultHandleActionMap={overrideItemBlockInfo:(e,t)=>{const{itemBlockInfo:n}=e;return n},renderOverrideItemChildrenToggle:(e,n)=>{var r;const{itemJsons:o,collapseStyle:a,showCheckbox:s,treeType:l,itemJsons:[{itemStateExpanded:d,itemStateChecked:m,indeterminate:c,isCheckboxDisabled:p,itemStateTitle:u,itemChildren:g}],handleAction:h}=n.props,b=(null===(r=i(o))||void 0===r?void 0:r.length)>0,v=h(y.IsFolder,{draggingItemJsons:null,targetItemJsons:o},n),x=p||n.context.isTree&&v&&(!g||0===(null==g?void 0:g.length))&&2===o.length,O=s&&l===I.Intact&&(0,t.jsx)("div",{className:(0,t.classNames)("d-flex align-items-center",{"pr-1":!b})},(0,t.jsx)(j.Checkbox,{"aria-label":u,checked:m,indeterminate:c,disabled:x,onChange:e=>{e.stopPropagation(),h(y.HandleCheckboxChanged,{itemStateChecked:e.target.checked},n)}}));if(!n.context.multiLevel)return O;const C=d?"collapse":"expand",T=n.intl.formatMessage({id:C,defaultMessage:j.defaultMessages[C]}),_=a===f.Arrow?(0,t.jsx)(A,{size:"s"}):(0,t.jsx)(w,null),D=a===f.Arrow?Z.isRTL?(0,t.jsx)(B,{size:"s"}):(0,t.jsx)(z,{size:"s"}):(0,t.jsx)(J,null);return(0,t.jsx)(t.React.Fragment,null,O,b&&(0,t.jsx)(j.Button,{icon:!0,type:"tertiary",className:"jimu-tree-item__children-toggle",title:T,"aria-label":T,onClick:e=>{e.stopPropagation(),h(y.HandleExpandItem,{itemStateExpanded:!d},n)},css:function(){return t.css`
          &.jimu-tree-item__children-toggle {
            cursor: pointer;

            .icon-btn-sizer {
              min-width: 0.75rem;
              min-height: 0.75rem;
            }
          }
        `}},d?_:D))},renderOverrideItemDragHandle:(e,n)=>{if(!n.props.dndEnabled)return null;const r=o(1604),i=n.intl.formatMessage({id:"dragHandler",defaultMessage:j.defaultMessages.dragHandler});return(0,t.jsx)(O,{icon:!0,type:"tertiary","aria-label":i,className:"jimu-tree-item__drag-handle",css:function(){return t.css`
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
        `}},(0,t.jsx)(j.Icon,{icon:r,width:4,height:16}))},renderOverrideItemDetailToggle:(e,n)=>{const{itemJsons:[{itemStateDetailVisible:r,itemStateDetailContent:i,itemStateDisabled:o}],handleAction:a}=n.props,s=r?A:z,l=r?"collapse":"expand",d=n.intl.formatMessage({id:l,defaultMessage:j.defaultMessages[l]});return i?(0,t.jsx)(O,{icon:!0,type:"tertiary",title:d,"aria-label":d,disabled:!!o,className:"jimu-tree-item__detail-toggle",onClick:e=>{e.stopPropagation(),a(y.HandleToggleDetail,{itemStateDetailVisible:!r},n)},css:function(){return t.css`
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
        `}},(0,t.jsx)(s,{size:"s",autoFlip:!r})):null},renderOverrideItemIcon:(e,n)=>{const{currentBlockInfo:{autoCollapsed:r=!1}}=e,{itemJsons:[{itemStateIcon:i}]}=n.props,o="function"==typeof i?i():i;return o?(0,t.jsx)("div",{className:"jimu-tree-item__icon",css:function(){return t.css`
          &.jimu-tree-item__icon {
            display: flex;
            align-items: center;
            opacity: ${+!!o.icon};
          }
        `},style:r&&!o.icon?{display:"none"}:{}},(0,t.jsx)(j.Icon,Object.assign({},o,{className:"mr-1"}))):null},renderOverrideItemTitle:(e,n)=>{const{currentBlockInfo:{onClick:r=(e=>l(y.HandleClickItemTitle,{},n)),onDoubleClick:i=(e=>l(y.HandleDoubleClickItemTitle,{},n))}}=e,{itemJsons:o,itemJsons:[{itemStateTitle:a,itemStateEditingText:s}],handleAction:l,theme:d}=n.props,m=l(y.IsFolder,{draggingItemJsons:null,targetItemJsons:o},n);let c=null;return"string"==typeof s&&t.lodash.debounce((()=>{null==c||c.focus()}),50)(),(0,t.jsx)("div",{className:"jimu-tree-item__title",onClick:r,onDoubleClick:i,css:function(){const e=`${m&&!s?1:0}px solid ${d.colors.palette.light[800]}`;return t.css`
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
        `}},"string"==typeof s?(0,t.jsx)(j.TextInput,{size:"sm",ref:e=>{c=e},className:"jimu-tree-item__editing-input",value:s,onChange:e=>{const t=e.target.value;l(y.HandleEditingTextChange,{itemStateEditingText:t},n)},onBlur:e=>{const t=e.target.value;l(y.HandleExitEditing,{itemStateEditingText:t},n)}}):(0,t.jsx)("div",{className:"jimu-tree-item__title-text",title:a},a))},renderOverrideItemCommands:(e,n)=>{const{currentBlockInfo:{commandListProps:r={}}}=e,{itemJsons:i,itemJsons:[{itemStateCommands:o=[]}],handleAction:a}=n.props;return(0,t.jsx)(C,Object.assign({className:"jimu-tree-item__commands",itemCommands:o,data:{refComponent:n,itemJsons:i},onClickItemCommand:e=>a(y.OnClickItemCommand,e,n),css:function(){return t.css`
          &.jimu-tree-item__commands {
            display: flex;
            flex: none;
            align-items: center;
          }
        `}},r))},renderOverrideItemDraggableContainer:(e,n)=>(0,t.jsx)("div",{ref:n.dragRef,className:"jimu-tree-item__draggable","data-dndzone-draggable":"true"},n.renderChildBlocks(e,n)),renderOverrideItemMainLine:(e,n)=>(0,t.jsx)("div",{className:(0,t.classNames)("jimu-tree-item__main-line",{"pl-2":!n.props.dndEnabled}),css:function(){return t.css`
          &.jimu-tree-item__main-line {
            display: flex;
            flex: 1;
            align-items: center;
          }
        `}},n.renderChildBlocks(e,n)),renderOverrideItemDetailLine:(e,n)=>{const{itemJsons:[{itemStateDetailVisible:r,itemStateDetailContent:i}]}=n.props;return r&&(0,t.jsx)("div",{className:"jimu-tree-item__detail-line",css:function(){return t.css`
          &.jimu-tree-item__detail-line {
            display: flex;
            flex: 0 0 100%;
          }
        `},"aria-expanded":!0},i)},renderOverrideItemBody:(e,n)=>{const{handleAction:r,itemJsons:[{itemStateTitle:i}]}=n.props;return(0,t.jsx)("div",{className:"jimu-tree-item__body",role:"treeitem",tabIndex:0,"aria-label":i,onClick:e=>r(y.HandleClickItemBody,{},n),onKeyDown:e=>{l(e)&&e.preventDefault()},onKeyUp:e=>{l(e)&&(e.preventDefault(),r(y.HandleClickItemBody,{},n))},css:function(){return t.css`
          &.jimu-tree-item__body {
            position: relative;
            display: flex;
            flex-flow: row wrap;
            flex: 1;
            align-items: center;
          }
        `}},n.renderChildBlocks(e,n))},renderOverrideItemContent:(e,n)=>{var r;const{itemJsons:o,handleAction:a,showCheckbox:s,treeType:l,itemJsons:[{itemStateChecked:d,indeterminate:m,isCheckboxDisabled:c,itemStateTitle:p,itemChildren:u}]}=n.props,[,...g]=o,h=(null===(r=i(o))||void 0===r?void 0:r.length)>0,f=1.25*(l===I.Typical?g.length-(h?1:0):g.length-1)+"rem",b=a(y.IsFolder,{draggingItemJsons:null,targetItemJsons:o},n),v=c||n.context.isTree&&b&&(!u||0===(null==u?void 0:u.length))&&2===o.length;return(0,t.jsx)("div",{className:"jimu-tree-item__content",css:function(){return t.css`
          &.jimu-tree-item__content {
            display: flex;
            flex: 1;
          }
        `}},s&&l===I.Typical&&(0,t.jsx)("div",{className:(0,t.classNames)("d-flex align-items-center",{"pr-1":!n.context.multiLevel})},(0,t.jsx)(j.Checkbox,{"aria-label":p,checked:d,indeterminate:m,disabled:v,onChange:e=>{e.stopPropagation(),a(y.HandleCheckboxChanged,{itemStateChecked:e.target.checked},n)}})),n.context.multiLevel&&(0,t.jsx)("div",{className:"jimu-tree-item__level-padding",style:{width:`${f}`}}),n.renderChildBlocks(e,n))},renderOverrideItemDroppableContainer:(e,n)=>{return(0,t.jsx)("div",{ref:n.dropZoneRef,className:"jimu-tree-item__droppable","data-dndzone-droppable":"true",css:function(){return t.css`
          &.jimu-tree-item__droppable {
            .jimu-tree-item__list-group-item {
              padding: 0;
              background: unset;
              border: none;
              display: flex;
              flex: 1;
            }
          }
        `}},(r=n.renderChildBlocks(e,n),n.context.isTree?(0,t.jsx)(j.ListGroupItem,{className:"jimu-tree-item__list-group-item"},r):r));var r},renderOverrideItemSubitems:(e,n)=>{const{itemJsons:[{itemStateExpanded:r,itemStateDisabled:i}],children:o}=n.props;return i?null:Array.isArray(o)&&o.length>0&&(0,t.jsx)(j.Collapse,{className:"jimu-tree-item__subitems",isOpen:!!r,role:"group",css:function(){return t.css`
          &.jimu-tree-item__subitems {
            display: flex;
            flex: 0 0 100%;
            flex-flow: wrap;
          }
        `}},r&&o)},renderOverrideItem:(e,n)=>{const{currentBlockInfo:{additionalClassName:r=""}}=e,{className:i,theme:o,dndEnabled:a,showRemoveIconForDisabledItem:s,withStates:l,itemJsons:[{itemStateDisabled:d}],handleAction:m,treeType:c}=n.props,{focusItemJsons:p}=l,u=m(y.HandleFindSearchText,{},n),g=m(y.IsItemDisplayable,{},n),h=m(y.IsItemFocused,{focusItemJsons:p},n),I=!!d,f=[r,i,"jimu-tree-item",`jimu-tree-item_template-${c}`,`jimu-tree-item_dnd-${a}`,`jimu-tree-item_focused-${h}`,`jimu-tree-item_disabled-${!!I}`].join(" ");return(0,t.jsx)("div",{className:`jimu-tree-item ${f}`,css:function(){const{size:e="default"}=n.props,r="default"===e?10.5:"sm"===e?7.5:13;return t.css`
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
              padding: ${t.polished.rem(r)} 0.125rem;
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
        `},style:{display:u&&g?void 0:"none"}},n.renderChildBlocks(e,n),I&&(0,t.jsx)("div",{className:"jimu-tree-item__mask"},s&&(0,t.jsx)(j.Button,{icon:!0,type:"default",size:"sm",className:"mr-1",onClick:e=>{e.stopPropagation(),m(y.HandleDisabledItemRemoved,{},n)}},(0,t.jsx)(L,null))))},handleInitTreeItemDndDropZone:(e,n)=>{const{type:r}=e;if("mount"===r){const e=n.dndInteract;e.dynamicDrop(!0),n.dropZoneInteractable=e(n.dropZoneRef.current).dropzone({accept:"[data-dndzone-draggable=true]",overlap:"pointer",ondropmove:e=>{const{target:t,relatedTarget:r}=e,{itemJsons:i,itemJsons:[{itemStateDisabled:o}],withStates:a,handleAction:s}=n.props,{searchForText:l}=a,d=r.getBoundingClientRect(),m=t.getBoundingClientRect(),c=+r.getAttribute("data-dndon-starty"),p=d.top+c,u=s(y.GetDragItemJsons,{dragEvent:e.dragEvent},n),[g]=u.itemJsons,h=s(y.IsItemDroppable,{draggingItemJsons:u.itemJsons,targetItemJsons:i},n),I=["to-nowhere","to-top",...n.context.isTree&&!o&&h?["to-inside"]:[],"to-bottom"].find(((e,t,n)=>"to-nowhere"===e?i.includes(g)||!!l:p<m.top+m.height*t/(n.length-1)?e:void 0));let f=I;n.context.isTree&&!o&&"to-nowhere"!==I&&("to-inside"!==I||h?i.some(((e,t)=>0!==t&&t!==i.length-1&&!s(y.IsItemDroppable,{draggingItemJsons:u.itemJsons,targetItemJsons:[e]},n)))&&(f="to-nowhere"):f="to-nowhere"),t.setAttribute("data-dndon-droptype",f)},ondragenter:e=>{const{target:t}=e;t.setAttribute("data-dndon-droppable","true")},ondragleave:e=>{const{target:t}=e;t.removeAttribute("data-dndon-droppable"),t.removeAttribute("data-dndon-droptype")},ondrop:e=>{t.lodash.defer((()=>{const{target:t}=e,{itemJsons:r,handleAction:i}=n.props,o=e.target.getAttribute("data-dndon-droptype"),a=i(y.GetDragItemJsons,{dragEvent:e.dragEvent},n);i(y.SetDragItemJsons,{itemJsons:r,dragEvent:e.dragEvent,type:"dragend"},n),i(y.HandleDidDrop,{dropType:o,dragItem:a},n),t.removeAttribute("data-dndon-droppable"),t.removeAttribute("data-dndon-droptype")}))}})}"unmount"===r&&n.dropZoneInteractable&&(n.dropZoneInteractable.unset(),n.dropZoneInteractable=null)},handleInitTreeItemDndDrag:(e,t)=>{const{type:n}=e;if("mount"===n){const e=t.dndInteract;t.dragInteractable=e(t.dragRef.current).draggable({inertia:!1,modifiers:[],autoScroll:!0,onstart:e=>{t.dragTriggered=!0;const{target:n,clientY:r}=e,{itemJsons:i,handleAction:o}=t.props;o(y.SetDragItemJsons,{itemJsons:i,dragEvent:e,type:"dragstart"},t);const a=n.getBoundingClientRect();n.setAttribute("data-dndon-starty",r-a.top),n.setAttribute("data-dndon-dragging","true")},onmove:e=>{const{target:t,clientY:n,clientY0:r}=e,i=n-r;t.style.webkitTransform=t.style.transform=`translate(0, ${i}px)`},onend:e=>{const{target:t}=e;t.style.webkitTransform=t.style.transform="",t.removeAttribute("data-dndon-starty"),t.removeAttribute("data-dndon-dragging")}}).on("click",(e=>{t.dragTriggered&&e.stopImmediatePropagation(),t.dragTriggered=!1}))}"unmount"===n&&t.dragInteractable&&(t.dragInteractable.unset(),t.dragInteractable=null)},handleDidDrop:(e,t)=>{const{itemJsons:n}=t.props,{dropType:r,dragItem:o}=e;if(["to-top","to-inside","to-bottom"].includes(r)){const e=o.itemJsons,a=n,[s]=e,[l]=a,d=i(e.slice(1)),m=i(a.slice(1)),c=i(a),p=d.indexOf(s),u="to-inside"===r?a:a.slice(1);let g="to-top"===r?m.indexOf(l):"to-bottom"===r?m.indexOf(l)+1:(c||[]).length;const I=i(u);g+=d===I&&p<g?-1:0;const f=(e,t)=>{const{dragItemParentChildren:n,dragItemJson:r,dragItemIndex:i,targetDropItemChildren:o,targetDropItemJsons:a,targetDropItemIndex:s}=e;if(n.splice(i,1),o)o.splice(s,0,r);else{const[e]=a;e.itemChildren=[r]}};let b={updateType:y.HandleDidDrop,parentDragItemJsons:e.slice(1),dragItemParentChildren:d,dragItemIndex:p,dragItemJsons:e,dragItemJson:s,targetDropItemJsons:u,targetDropItemChildren:I,targetDropItemIndex:g,dropType:r,itemJsons:n,muteUpdate:f};f(b,t);const v=h(b,t);v&&(b=Object.assign(b,{itemJsons:[...n.slice(0,n.length-1),v]})),t.props.handleAction(y.HandleUpdateItem,b,t)}t.props.handleAction(y.OnDidDrop,e,t)},handleDisabledItemRemoved:(e,t)=>{const{itemJsons:n}=t.props,r=n,[o]=r,a=i(r.slice(1)),s=a.indexOf(o),l={updateType:y.HandleDisabledItemRemoved,itemJsons:n};a.splice(s,1),t.props.handleAction(y.HandleUpdateItem,l,t)},handleToggleDetail:(e,t)=>{const{itemStateDetailVisible:n}=e,{itemJsons:r}=t.props,[i]=r;t.props.handleAction(y.HandleUpdateItem,{updateType:y.HandleToggleDetail,changeItemJson:{itemStateDetailVisible:n},currentItemJson:i,itemJsons:r},t),t.props.handleAction(y.OnToggleDetail,e,t)},handleExpandItem:(e,t)=>{const{itemStateExpanded:n}=e,{itemJsons:r}=t.props,[i]=r;t.props.handleAction(y.HandleUpdateItem,{updateType:y.HandleExpandItem,changeItemJson:{itemStateExpanded:n},currentItemJson:i,itemJsons:r},t),t.props.handleAction(y.OnExpandItem,e,t)},handleEditingTextChange:(e,t)=>{const{itemStateEditingText:n}=e,{itemJsons:r}=t.props,[i]=r;t.props.handleAction(y.HandleUpdateItem,{updateType:y.HandleEditingTextChange,changeItemJson:{itemStateEditingText:n||""},currentItemJson:i,itemJsons:r},t),t.props.handleAction(y.OnEditingTextChange,e,t)},handleExitEditing:(e,t)=>{const{itemStateEditingText:n}=e,{itemJsons:r}=t.props,[i]=r;t.props.handleAction(y.HandleUpdateItem,{updateType:y.HandleExitEditing,changeItemJson:{itemStateEditingText:null,itemStateTitle:n||""},currentItemJson:i,itemJsons:r},t),t.props.handleAction(y.OnExitEditing,e,t)},handleFindSearchText:(e,t)=>{const{itemJsons:[{itemKey:n}],withStates:{searchForText:r}}=t.props;return(n||"").match(r||"")},isItemDisplayable:(e,t)=>!0,isItemFocused:(e,t)=>{const{focusItemJsons:n}=e,{itemJsons:[r]}=t.props;return(null==n?void 0:n[0])===r},handleClickItemBody:(e,t)=>{t.props.handleAction(y.HandleFocusItem,{},t),t.props.handleAction(y.OnClickItemBody,e,t)},handleDoubleClickItemTitle:(e,t)=>{const{itemJsons:[{itemStateTitle:n}]}=t.props;t.props.handleAction(y.HandleStartEditing,{itemStateEditingText:n},t),t.props.handleAction(y.OnDoubleClickItemTitle,e,t)},handleCheckboxChanged:(e,t)=>{const{itemStateChecked:n}=e,{itemJsons:r}=t.props,[i]=r;let o={updateType:y.HandleCheckboxChanged,changeItemJson:{itemStateChecked:n||!1},currentItemJson:i,itemJsons:r};o=p(t.context.isTree,o),t.props.handleAction(y.OnUpdateItem,o,t)},handleStartEditing:(e,t)=>{const{itemStateEditingText:n}=e,{itemJsons:r}=t.props,[i]=r;t.props.handleAction(y.HandleUpdateItem,{updateType:y.HandleStartEditing,changeItemJson:{itemStateEditingText:n||""},currentItemJson:i,itemJsons:r},t)},handleUpdateItem:(e,t)=>{e.changeItemJson&&(e=c(t.context.isTree,e)),t.props.handleAction(y.OnUpdateItem,e,t)},isItemDroppable:(e,t)=>!0,isFolder:(e,t)=>!1,getDragItemJsons:null,setDragItemJsons:null,handleClickItemTitle:null,handleFocusItem:null,onToggleDetail:null,onExpandItem:null,onEditingTextChange:null,onExitEditing:null,onDidDrop:null,onClickItemBody:null,onDoubleClickItemTitle:null,onClickItemCommand:null,onUpdateItem:null},Z.isRTL=null===(V=null===(U=(0,t.getAppStore)().getState())||void 0===U?void 0:U.appContext)||void 0===V?void 0:V.isRTL,Z.itemBlockInfos={[I.Typical]:{name:y.RenderOverrideItem,children:[{name:y.RenderOverrideItemDroppableContainer,children:[{name:y.RenderOverrideItemContent,children:[{name:y.RenderOverrideItemChildrenToggle},{name:y.RenderOverrideItemBody,children:[{name:y.RenderOverrideItemMainLine,children:[{name:y.RenderOverrideItemDraggableContainer,children:[{name:y.RenderOverrideItemDragHandle},{name:y.RenderOverrideItemDetailToggle},{name:y.RenderOverrideItemIcon},{name:y.RenderOverrideItemTitle},{name:y.RenderOverrideItemCommands}]}]},{name:y.RenderOverrideItemDetailLine}]}]}]},{name:y.RenderOverrideItemSubitems}]},[I.Intact]:{name:y.RenderOverrideItem,children:[{name:y.RenderOverrideItemDroppableContainer,children:[{name:y.RenderOverrideItemContent,children:[{name:y.RenderOverrideItemBody,children:[{name:y.RenderOverrideItemMainLine,children:[{name:y.RenderOverrideItemDraggableContainer,children:[{name:y.RenderOverrideItemDragHandle},{name:y.RenderOverrideItemChildrenToggle},{name:y.RenderOverrideItemDetailToggle},{name:y.RenderOverrideItemIcon},{name:y.RenderOverrideItemTitle},{name:y.RenderOverrideItemCommands}]}]},{name:y.RenderOverrideItemDetailLine}]}]}]},{name:y.RenderOverrideItemSubitems}]}},Z.defaultProps=Object.assign({theme:{},className:"",treeType:I.Typical,dndEnabled:!1,withStates:{},handleAction:s},Z.defaultHandleActionMap);const K=(0,x.withTheme)((0,t.injectIntl)(Z));class G extends t.React.Component{constructor(e){super(e),this.state={dragItems:[]}}render(){return this.props.handleAction(v.RenderOverrideMain,{},this)}renderItemJson(e){const{treeType:n,collapseStyle:r,showCheckbox:o,dndEnabled:a,withStates:s,size:l="default",showRemoveIconForDisabledItem:d}=this.props,[m,...c]=e,{itemKey:p,itemStateExpanded:u,itemStateEditingText:g}=m,h=i(e),I=["jimu-tree-main__item",`jimu-tree-main__item_level-${c.length}`,`jimu-tree-main__item_editing-${"string"==typeof g}`,...h?[`jimu-tree-main__item_expandable-${!!h}`,`jimu-tree-main__item_expanded-${!!u}`]:[]].join(" ");return(0,t.jsx)(K,Object.assign({key:p,className:I,treeType:n,collapseStyle:r,showCheckbox:o,itemJsons:e,size:l,dndEnabled:a,showRemoveIconForDisabledItem:d,withStates:s},Object.assign({},...Object.values(y).map((e=>{var t;return{[e]:null===(t=this.props[e])||void 0===t?void 0:t.bind(this)}})))),(h||[]).map((t=>this.renderItemJson([t,...e]))))}}G.defaultHandleActionMap={renderOverrideMain:(e,n)=>{var r,o;const{className:a,topTag:s,isTree:l,rootItemVisible:d,rootItemJson:m}=n.props,c=m?i([m]):null,p=(null===(o=null===(r=null==m?void 0:m.itemChildren)||void 0===r?void 0:r.filter((e=>{var t;return(null===(t=null==e?void 0:e.itemChildren)||void 0===t?void 0:t.length)>0})))||void 0===o?void 0:o.length)>0,u=s;return(0,t.jsx)(T.Provider,{value:{isTree:l,multiLevel:p}},(0,t.jsx)(u,{className:`jimu-tree-main ${a||""}`,css:function(){return t.css`
          &.jimu-tree-main {
            width: 100%;
          }
        `},role:"tree"},d?n.renderItemJson([m]):(c||[]).map(((e,r)=>(0,t.jsx)(t.React.Fragment,{key:r},n.renderItemJson([e,m]))))))},setDragItemJsons(e,t){this.setState((({dragItems:t})=>({dragItems:[...t.filter((t=>t.dragEvent.target!==e.dragEvent.target)),..."dragstart"===e.type?[e]:[]]})))},getDragItemJsons(e,t){return this.state.dragItems.find((t=>t.dragEvent.target===e.dragEvent.target))}},G.defaultProps=Object.assign({className:"",topTag:"div",treeType:I.Typical,rootItemVisible:!1,dndEnabled:!1,withStates:{},handleAction:s},G.defaultHandleActionMap);class Y extends t.React.Component{constructor(e){super(e),this.state={searchForText:"",focusItemJsons:[],filterEnabled:!1}}render(){return this.props.handleAction(b.RenderOverride,{},this)}}Y.defaultHandleActionMap={renderOverride:(e,n)=>{const{className:r,topTag:i,isTree:o=!0,treeType:a,size:s,collapseStyle:l,showCheckbox:d=!1,rootItemJson:m,rootItemVisible:c,dndEnabled:p,showRemoveIconForDisabledItem:u,forwardRef:g}=n.props,{searchForText:h,filterEnabled:I}=n.state,f=["jimu-tree",r,`jimu-tree_template-${a}`,`jimu-tree_searched-text-${!!h}`,`jimu-tree_filter-enabled-${!!I}`].join(" "),b=i;return(0,t.jsx)(b,{ref:g,className:f,css:function(){return t.css`
          &.jimu-tree {
            display: flex;
            flex-flow: wrap;
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
        `}},(0,t.jsx)(G,Object.assign({className:"",treeType:a,collapseStyle:l,showCheckbox:d,topTag:b,size:s,isTree:o,rootItemJson:m,rootItemVisible:c,dndEnabled:p,showRemoveIconForDisabledItem:u,withStates:n.state},Object.assign({},...[...Object.values(y),...Object.values(v)].map((e=>{var t;return{[e]:null===(t=n.props[e])||void 0===t?void 0:t.bind(n)}}))))))},isItemDisplayable(e,t){const{itemJsons:[{itemStateChecked:n}]}=t.props;return!this.state.filterEnabled||!!n},handleFocusItem(e,t){const{itemJsons:n}=t.props;this.setState({focusItemJsons:n})}},Y.defaultProps=Object.assign({theme:(0,t.Immutable)({}),className:"",topTag:"div",treeType:I.Typical,rootItemVisible:!1,dndEnabled:!1,handleAction:s},Y.defaultHandleActionMap);const W=(0,x.withTheme)(Y);function X(e){const{className:n="",itemsJson:r=[],listType:i}=e,o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(e,["className","itemsJson","listType"]);return(0,t.jsx)(W,Object.assign({},o,{className:`${n} jimu-list`,isTree:!1,rootItemJson:(a=[...r],Object.assign(a,{itemKey:"",itemChildren:a})),treeType:i}));var a}const q=(0,x.withTheme)(X)})(),a})())}}}));