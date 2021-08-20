System.register(["jimu-core","jimu-ui"],(function(e){var t,n;return{setters:[function(e){t=e},function(e){n=e}],execute:function(){e(function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=990)}({0:function(e,n){e.exports=t},1:function(e,t){e.exports=n},126:function(e,t){e.exports='<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M6 0a6 6 0 110 12A6 6 0 016 0zm0 1a5 5 0 100 10A5 5 0 006 1zm4 4.5v1H2v-1h8z" fill="#000" fill-rule="nonzero"></path></svg>'},127:function(e,t){e.exports='<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M6 0a6 6 0 110 12A6 6 0 016 0zm0 1a5 5 0 100 10A5 5 0 006 1zm.5 1v3.5H10v1H6.5V10h-1V6.5H2v-1h3.5V2h1z" fill="#000" fill-rule="nonzero"></path></svg>'},128:function(e,t){e.exports='<svg viewBox="0 0 9 5" xmlns="http://www.w3.org/2000/svg"><path d="M4.128 4.587L.751.834A.5.5 0 011.123 0h6.754a.5.5 0 01.372.834L4.872 4.587a.5.5 0 01-.744 0z" fill="#000" fill-rule="evenodd"></path></svg>'},252:function(e,t){e.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero" fill="none"><path d="M13 7.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm-6.5 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM0 7.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" fill="#000"></path><path d="M0 0h16v16H0z"></path></g></svg>'},253:function(e,t){e.exports='<svg viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 1H1v2h2V1zM3 5H1v2h2V5zM1 9h2v2H1V9zM3 13H1v2h2v-2z" fill="#000"></path></svg>'},254:function(e,t){e.exports='<svg viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 1l4 3-4 3V1z" fill="#000"></path></svg>'},255:function(e,t){e.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M14.803 1.192a.656.656 0 010 .928L8.926 7.998l5.877 5.877a.656.656 0 11-.928.928L7.998 8.926 2.12 14.803a.656.656 0 01-.928-.928L7.07 7.998 1.192 2.12a.656.656 0 01.928-.928L7.998 7.07l5.877-5.878a.656.656 0 01.928 0z" fill="#000"></path><path d="M0 0h16v16H0z"></path></g></svg>'},990:function(e,t,n){"use strict";n.r(t),n.d(t,"_Tree",(function(){return x})),n.d(t,"Tree",(function(){return y})),n.d(t,"_List",(function(){return _})),n.d(t,"List",(function(){return D})),n.d(t,"TreeActionType",(function(){return l})),n.d(t,"TreeMainActionType",(function(){return m})),n.d(t,"TreeItemActionType",(function(){return c})),n.d(t,"_TreeItem",(function(){return b})),n.d(t,"TreeItem",(function(){return v})),n.d(t,"treeUtils",(function(){return i}));var i={};n.r(i),n.d(i,"getCheckProgress",(function(){return o})),n.d(i,"getItemChildren",(function(){return a})),n.d(i,"handleAction",(function(){return d})),n.d(i,"getInvisibleActionMap",(function(){return s}));const r={},o=(e,t=r)=>{const{getItemChildren:n=(([e])=>e.itemChildren),getItemStateChecked:i=(([e])=>e.itemStateChecked)}=t,o=n([e]),a=i([e]);if(!o)return!!a;const d=o.reduce((e,t)=>e+(!0===i([t])),0);return!!d&&(d===o.length||d)},a=e=>{const[t]=e;return t.itemChildren},d=(e,t,n)=>{var i,r;if(!n)return;const[o]=n.props.itemJsons||[];return"function"==typeof(null==o?void 0:o[e])?o[e](t,n):null===(r=(i=n.props)[e])||void 0===r?void 0:r.call(i,t,n)},s=e=>{if(!e||0===e.length)return;const t={};return e.forEach(e=>{t[e]=()=>null}),t};var l,m,c,p=n(0);!function(e){e.RenderOverride="renderOverride"}(l||(l={})),function(e){e.RenderOverrideMain="renderOverrideMain"}(m||(m={})),function(e){e.RenderOverrideItemChildrenToggle="renderOverrideItemChildrenToggle",e.RenderOverrideItemDragHandle="renderOverrideItemDragHandle",e.RenderOverrideItemDetailToggle="renderOverrideItemDetailToggle",e.RenderOverrideItemIcon="renderOverrideItemIcon",e.RenderOverrideItemTitle="renderOverrideItemTitle",e.RenderOverrideItemCommands="renderOverrideItemCommands",e.RenderOverrideItemDraggableContainer="renderOverrideItemDraggableContainer",e.RenderOverrideItemMainLine="renderOverrideItemMainLine",e.RenderOverrideItemDetailLine="renderOverrideItemDetailLine",e.RenderOverrideItemBody="renderOverrideItemBody",e.RenderOverrideItemContent="renderOverrideItemContent",e.RenderOverrideItemDroppableContainer="renderOverrideItemDroppableContainer",e.RenderOverrideItemSubitems="renderOverrideItemSubitems",e.RenderOverrideItem="renderOverrideItem",e.OverrideItemBlockInfo="overrideItemBlockInfo",e.HandleInitTreeItemDndDropZone="handleInitTreeItemDndDropZone",e.HandleInitTreeItemDndDrag="handleInitTreeItemDndDrag",e.HandleDidDrop="handleDidDrop",e.HandleDisabledItemRemoved="handleDisabledItemRemoved",e.HandleToggleDetail="handleToggleDetail",e.HandleExpandItem="handleExpandItem",e.HandleEditingTextChange="handleEditingTextChange",e.HandleExitEditing="handleExitEditing",e.HandleStartEditing="handleStartEditing",e.HandleFindSearchText="handleFindSearchText",e.IsItemDisplayable="isItemDisplayable",e.IsItemFocused="isItemFocused",e.HandleClickItemBody="handleClickItemBody",e.HandleClickItemTitle="handleClickItemTitle",e.HandleDoubleClickItemTitle="handleDoubleClickItemTitle",e.GetDragItemJsons="getDragItemJsons",e.SetDragItemJsons="setDragItemJsons",e.HandleFocusItem="handleFocusItem",e.IsItemDroppable="isItemDroppable",e.OnToggleDetail="onToggleDetail",e.OnExpandItem="onExpandItem",e.OnEditingTextChange="onEditingTextChange",e.OnExitEditing="onExitEditing",e.OnDidDrop="onDidDrop",e.OnClickItemBody="onClickItemBody",e.OnDoubleClickItemTitle="onDoubleClickItemTitle",e.OnClickItemCommand="onClickItemCommand",e.OnUpdateItem="onUpdateItem"}(c||(c={}));var u=n(1);const g=p.themeUtils.withTheme(Object(p.injectIntl)(e=>{var t,i;const{className:r,theme:o,intl:a,itemCommands:d,data:s,moreCommand:l={key:Symbol(),label:a.formatMessage({id:"more",defaultMessage:u.defaultMessages.more}),iconProps:{icon:n(252)},action:()=>{}},maxIconCount:m=3,onClickItemCommand:c=(()=>{})}=e,g=!!(null===(i=null===(t=null==s?void 0:s.itemJsons)||void 0===t?void 0:t[0])||void 0===i?void 0:i.itemStateDisabled),[h,I]=p.React.useState(!1),[f,b]=p.React.useState(null),v=e=>e.map((e,t)=>{const n=("function"==typeof e.iconProps?e.iconProps():e.iconProps)||{icon:null};return e&&!e.collapsed&&Object(p.jsx)(u.Button,{key:t,icon:!0,type:"tertiary",className:"jimu-tree-command-list__command-item",title:e.label,disabled:g,"aria-label":e.label,onClick:t=>{var n;t.stopPropagation(),I(!h);const i={event:t,data:s,command:e,itemCommands:d};null===(n=e.action)||void 0===n||n.call(e,i),c(i)}},Object(p.jsx)(u.Icon,Object.assign({size:12,className:"jimu-tree-command-list__command-item-icon"},n)),Object(p.jsx)("div",{className:"jimu-tree-command-list__command-item-label"},e.label))}),j=d.filter(e=>!e.collapsed),x=j.length>m,y=x?[...j.slice(0,m-1),l,...j.slice(m-1)]:j;return Object(p.jsx)("div",{ref:e=>b(e),className:"jimu-tree-command-list "+(r||""),css:O},v(y.slice(0,m)),x&&Object(p.jsx)(u.Popper,{open:h,reference:f,toggle:()=>I(!1),css:O},Object(p.jsx)("div",{className:"jimu-tree-command-list-dropdown"},v(y.slice(m)))));function O(){return p.css`
      color: ${o.colors.palette.dark[600]};
      .jimu-tree-command-list-dropdown {
        display: flex;
        flex-flow: column;
        background-color: ${o.colors.palette.light[400]};
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
        color: ${o.colors.black};
      }
    `}})),h=p.React.createContext(!0);var I=function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function a(e){try{s(i.next(e))}catch(e){o(e)}}function d(e){try{s(i.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,d)}s((i=i.apply(e,t||[])).next())}))};const f=(()=>{const e={};return t=>I(void 0,void 0,void 0,(function*(){return yield Promise.resolve(e[t]||p.moduleLoader.loadModule(t)).then(n=>(e[t]=n,n))}))})();class b extends p.React.Component{constructor(e){super(e),this.state={},this.dropZoneRef=p.React.createRef(),this.dragRef=p.React.createRef(),this.dropZoneInteractable=null,this.dragInteractable=null,this.dndInteract=null,this.intl=this.props.intl}componentDidMount(){this.props.dndEnabled&&this.dragRef.current&&f("jimu-core/dnd").then(e=>{this.dndInteract=e.interact,this.props.handleAction(c.HandleInitTreeItemDndDropZone,{type:"mount"},this),this.props.handleAction(c.HandleInitTreeItemDndDrag,{type:"mount"},this)})}componentWillUnmount(){this.dndInteract&&(this.props.handleAction(c.HandleInitTreeItemDndDropZone,{type:"unmount"},this),this.props.handleAction(c.HandleInitTreeItemDndDrag,{type:"unmount"},this))}render(){const{handleAction:e}=this.props,t=e(c.OverrideItemBlockInfo,{itemBlockInfo:this.props.itemBlockInfo},this);return this.renderChildBlocks({currentBlockInfo:{name:null,children:[t]}},this)}renderChildBlocks(e,t){const{handleAction:n}=t.props,{currentBlockInfo:i}=e;return(i.children||[]).filter(e=>!!e).map((i,r)=>Object(p.jsx)(p.React.Fragment,{key:r},n(i.name,Object.assign(Object.assign({},e),{currentBlockInfo:i}),t)))}}b.contextType=h,b.defaultHandleActionMap={overrideItemBlockInfo:(e,t)=>{const{itemBlockInfo:n}=e;return n},renderOverrideItemChildrenToggle:(e,t)=>{if(!t.context)return null;const{itemJsons:i,itemJsons:[{itemStateExpanded:r}],handleAction:o}=t.props,d=!!a(i),s=n(r?126:127),l=r?"close":"open",m=t.intl.formatMessage({id:l,defaultMessage:p.defaultMessages[l]});return Object(p.jsx)(u.Button,{icon:!0,type:"tertiary",className:"jimu-tree-item__children-toggle",style:{visibility:d?void 0:"hidden"},title:m,"aria-label":m,"aria-expanded":!!r,onClick:e=>{e.stopPropagation(),o(c.HandleExpandItem,{itemStateExpanded:!r},t)},css:function(){return p.css`
          &.jimu-tree-item__children-toggle {
            cursor: pointer;

            .icon-btn-sizer {
              min-width: 0.75rem;
              min-height: 0.75rem;
            }
          }
        `}},Object(p.jsx)(u.Icon,{icon:s}))},renderOverrideItemDragHandle:(e,t)=>{const i=n(253);return Object(p.jsx)(u.Button,{icon:!0,type:"tertiary",className:"jimu-tree-item__drag-handle",css:function(){return p.css`
          &.jimu-tree-item__drag-handle {
            display: flex;
            align-items: center;
            touch-action: none;

            .icon-btn-sizer {
              min-width: 0.25rem;
              min-height: 1rem;
            }
          }
        `}},Object(p.jsx)(u.Icon,{icon:i,width:4,height:16}))},renderOverrideItemDetailToggle:(e,t)=>{const{itemJsons:[{itemStateDetailVisible:i,itemStateDetailContent:r,itemStateDisabled:o}],handleAction:a}=t.props,d=n(i?128:254),s=i?"close":"open",l=t.intl.formatMessage({id:s,defaultMessage:p.defaultMessages[s]});return r?Object(p.jsx)(u.Button,{icon:!0,type:"tertiary",title:l,"aria-label":l,disabled:!!o,"aria-expanded":!!i,className:"jimu-tree-item__detail-toggle",onClick:e=>{e.stopPropagation(),a(c.HandleToggleDetail,{itemStateDetailVisible:!i},t)},css:function(){return p.css`
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
        `}},Object(p.jsx)(u.Icon,{icon:d,size:8,autoFlip:!i})):null},renderOverrideItemIcon:(e,t)=>{const{currentBlockInfo:{autoCollapsed:n=!1}}=e,{itemJsons:[{itemStateIcon:i}]}=t.props,r="function"==typeof i?i():i;return r?Object(p.jsx)("div",{className:"jimu-tree-item__icon",css:function(){return p.css`
          &.jimu-tree-item__icon {
            display: flex;
            align-items: center;
            opacity: ${+!!r.icon};
          }
        `},style:n&&!r.icon?{display:"none"}:{}},Object(p.jsx)(u.Icon,Object.assign({},r,{className:"mr-1"}))):null},renderOverrideItemTitle:(e,t)=>{const{currentBlockInfo:{onClick:n=(e=>a(c.HandleClickItemTitle,{},t)),onDoubleClick:i=(e=>a(c.HandleDoubleClickItemTitle,{},t))}}=e,{itemJsons:[{itemStateTitle:r,itemStateEditingText:o}],handleAction:a}=t.props;return Object(p.jsx)("div",{className:"jimu-tree-item__title",onClick:n,onDoubleClick:i,css:function(){return p.css`
          &.jimu-tree-item__title {
            display: flex;
            flex: 1;
            align-items: center;
            > .jimu-tree-item__title-text {
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              word-break: break-word;
              -webkit-line-clamp: 2;
            }
          }
        `}},"string"==typeof o?Object(p.jsx)(u.Input,{className:"jimu-tree-item__editing-input",value:o,onChange:e=>{const n=e.target.value;a(c.HandleEditingTextChange,{itemStateEditingText:n},t)},onBlur:e=>{const n=e.target.value;a(c.HandleExitEditing,{itemStateEditingText:n},t)}}):Object(p.jsx)("div",{className:"jimu-tree-item__title-text",title:r},r))},renderOverrideItemCommands:(e,t)=>{const{currentBlockInfo:{commandListProps:n={}}}=e,{itemJsons:i,itemJsons:[{itemStateCommands:r=[]}],handleAction:o}=t.props;return Object(p.jsx)(g,Object.assign({className:"jimu-tree-item__commands",itemCommands:r,data:{refComponent:t,itemJsons:i},onClickItemCommand:e=>o(c.OnClickItemCommand,e,t),css:function(){return p.css`
          &.jimu-tree-item__commands {
            display: flex;
            flex: none;
            align-items: center;
          }
        `}},n))},renderOverrideItemDraggableContainer:(e,t)=>Object(p.jsx)("div",{ref:t.dragRef,className:"jimu-tree-item__draggable","data-dndzone-draggable":"true"},t.renderChildBlocks(e,t)),renderOverrideItemMainLine:(e,t)=>Object(p.jsx)("div",{className:"jimu-tree-item__main-line",css:function(){return p.css`
          &.jimu-tree-item__main-line {
            display: flex;
            flex: 1;
            align-items: center;
          }
        `}},t.renderChildBlocks(e,t)),renderOverrideItemDetailLine:(e,t)=>{const{itemJsons:[{itemStateDetailVisible:n,itemStateDetailContent:i}]}=t.props;return n&&Object(p.jsx)("div",{className:"jimu-tree-item__detail-line",css:function(){return p.css`
          &.jimu-tree-item__detail-line {
            display: flex;
            flex: 0 0 100%;
          }
        `},"aria-expanded":!0},i)},renderOverrideItemBody:(e,t)=>{const{handleAction:n}=t.props;return Object(p.jsx)("div",{className:"jimu-tree-item__body",onClick:e=>n(c.HandleClickItemBody,{},t),css:function(){return p.css`
          &.jimu-tree-item__body {
            position: relative;
            display: flex;
            flex-flow: row wrap;
            flex: 1;
            align-items: center;
          }
        `}},t.renderChildBlocks(e,t))},renderOverrideItemContent:(e,t)=>{const{itemJsons:n}=t.props,[,...i]=n,r=1.25*(i.length-1)+"rem";return Object(p.jsx)("div",{className:"jimu-tree-item__content",css:function(){return p.css`
          &.jimu-tree-item__content {
            display: flex;
            flex: 1;
          }
        `}},t.context&&Object(p.jsx)("div",{className:"jimu-tree-item__level-padding",style:{width:""+r}}),t.renderChildBlocks(e,t))},renderOverrideItemDroppableContainer:(e,t)=>{return Object(p.jsx)("div",{ref:t.dropZoneRef,className:"jimu-tree-item__droppable","data-dndzone-droppable":"true",css:function(){return p.css`
          &.jimu-tree-item__droppable {
            .jimu-tree-item__list-group-item {
              padding: 0;
              background: unset;
              border: none;
              display: flex;
              flex: 1;
            }
          }
        `}},(n=t.renderChildBlocks(e,t),t.context?Object(p.jsx)(u.ListGroupItem,{className:"jimu-tree-item__list-group-item"},n):n));var n},renderOverrideItemSubitems:(e,t)=>{const{itemJsons:[{itemStateExpanded:n}],children:i}=t.props;return Array.isArray(i)&&i.length>0&&Object(p.jsx)(u.Collapse,{className:"jimu-tree-item__subitems",isOpen:!!n,css:function(){return p.css`
          &.jimu-tree-item__subitems {
            display: flex;
            flex: 0 0 100%;
            flex-flow: wrap;
          }
        `}},n&&i)},renderOverrideItem:(e,t)=>{const{currentBlockInfo:{additionalClassName:i=""}}=e,{className:r,theme:o,dndEnabled:a,showRemoveIconForDisabledItem:d,withStates:s,itemJsons:[{itemStateDisabled:l}],handleAction:m,treeType:g}=t.props,{focusItemJsons:h}=s,I=m(c.HandleFindSearchText,{},t),f=m(c.IsItemDisplayable,{},t),b=m(c.IsItemFocused,{focusItemJsons:h},t),v=!!l,j=[i,r,"jimu-tree-item","jimu-tree-item_template-"+g,"jimu-tree-item_dnd-"+a,"jimu-tree-item_focused-"+b,"jimu-tree-item_disabled-"+!!v].join(" ");return Object(p.jsx)("div",{className:"jimu-tree-item "+j,css:function(){return p.css`
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
                background-color: ${o.colors.palette.light[300]};
                .jimu-tree-item__body{
                }
              }
              .jimu-tree-item__mask {
                position: absolute;
                width: 100%;
                height: calc(100% - 0.5rem);
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
          &.jimu-tree-item_template-${g} {
            padding-top: 0.25rem;
            &:first-of-type {
              padding-top: 0;
            }
            .jimu-tree-item__subitems .jimu-tree-item_template-${g}:first-of-type {
              padding-top: 0.25rem;
            }

            .jimu-tree-item__content {
              color: ${o.colors.black};
            }
            .jimu-tree-item__main-line {
              padding: ${p.polished.rem(7)} 0.125rem;
            }
            .jimu-tree-item__detail-line {
            }
            .jimu-tree-item__body {
              line-height: ${o.typography.lineHeights.sm};
              background-color: ${o.colors.palette.light[500]};
              &:hover {
                background-color: ${o.colors.palette.light[600]};
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
        `},style:{display:I&&f?void 0:"none"}},t.renderChildBlocks(e,t),v&&Object(p.jsx)("div",{className:"jimu-tree-item__mask"},d&&Object(p.jsx)(u.Button,{icon:!0,type:"default",size:"sm",className:"mr-1",onClick:e=>{e.stopPropagation(),m(c.HandleDisabledItemRemoved,{},t)}},Object(p.jsx)(u.Icon,{icon:n(255)}))))},handleInitTreeItemDndDropZone:(e,t)=>{const{type:n}=e;if("mount"===n){const e=t.dndInteract;e.dynamicDrop(!0),t.dropZoneInteractable=e(t.dropZoneRef.current).dropzone({accept:"[data-dndzone-draggable=true]",overlap:"pointer",ondropmove:e=>{const{target:n,relatedTarget:i}=e,{itemJsons:r,itemJsons:[{itemStateDisabled:o}],withStates:d,handleAction:s}=t.props,{searchForText:l}=d,m=a(r),p=i.getBoundingClientRect(),u=n.getBoundingClientRect(),g=+i.getAttribute("data-dndon-starty"),h=p.top+g,I=s(c.GetDragItemJsons,{dragEvent:e.dragEvent},t),[f]=I.itemJsons,b=s(c.IsItemDroppable,{draggingItemJsons:I.itemJsons,targetItemJsons:r},t),v=["to-nowhere","to-top",...m&&!o&&b?["to-inside"]:[],"to-bottom"].find((e,t,n)=>"to-nowhere"===e?r.includes(f)||!!l:h<u.top+u.height*t/(n.length-1)?e:void 0);n.setAttribute("data-dndon-droptype",v)},ondragenter:e=>{const{target:t}=e;t.setAttribute("data-dndon-droppable","true")},ondragleave:e=>{const{target:t}=e;t.removeAttribute("data-dndon-droppable"),t.removeAttribute("data-dndon-droptype")},ondrop:e=>{p.lodash.defer(()=>{const{target:n}=e,{itemJsons:i,handleAction:r}=t.props,o=e.target.getAttribute("data-dndon-droptype"),a=r(c.GetDragItemJsons,{dragEvent:e.dragEvent},t);r(c.SetDragItemJsons,{itemJsons:i,dragEvent:e.dragEvent,type:"dragend"},t),r(c.HandleDidDrop,{dropType:o,dragItem:a},t),n.removeAttribute("data-dndon-droppable"),n.removeAttribute("data-dndon-droptype")})}})}"unmount"===n&&t.dropZoneInteractable&&(t.dropZoneInteractable.unset(),t.dropZoneInteractable=null)},handleInitTreeItemDndDrag:(e,t)=>{const{type:n}=e;if("mount"===n){const e=t.dndInteract;t.dragInteractable=e(t.dragRef.current).draggable({inertia:!1,modifiers:[],autoScroll:!0,onstart:e=>{t.dragTriggered=!0;const{target:n,clientY:i}=e,{itemJsons:r,handleAction:o}=t.props;o(c.SetDragItemJsons,{itemJsons:r,dragEvent:e,type:"dragstart"},t);const a=n.getBoundingClientRect();n.setAttribute("data-dndon-starty",i-a.top),n.setAttribute("data-dndon-dragging","true")},onmove:e=>{const{target:t,clientY:n,clientY0:i}=e,r=n-i;t.style.webkitTransform=t.style.transform=`translate(0, ${r}px)`},onend:e=>{const{target:t}=e;t.style.webkitTransform=t.style.transform="",t.removeAttribute("data-dndon-starty"),t.removeAttribute("data-dndon-dragging")}}).on("click",e=>{t.dragTriggered&&e.stopImmediatePropagation(),t.dragTriggered=!1})}"unmount"===n&&t.dragInteractable&&(t.dragInteractable.unset(),t.dragInteractable=null)},handleDidDrop:(e,t)=>{const{itemJsons:n}=t.props,{dropType:i,dragItem:r}=e;if(["to-top","to-inside","to-bottom"].includes(i)){const e=r.itemJsons,o=n,[d]=e,[s]=o,l=a(e.slice(1)),m=a(o.slice(1)),p=a(o),u=l.indexOf(d),g="to-inside"===i?o:o.slice(1);let h="to-top"===i?m.indexOf(s):"to-bottom"===i?m.indexOf(s)+1:(p||[]).length;const I=a(g);h+=l===I&&u<h?-1:0;const f=(e,t)=>{const{dragItemParentChildren:n,dragItemJson:i,dragItemIndex:r,targetDropItemChildren:o,targetDropItemIndex:a}=e;n.splice(r,1),o.splice(a,0,i)},b={updateType:c.HandleDidDrop,parentDragItemJsons:e.slice(1),dragItemParentChildren:l,dragItemIndex:u,dragItemJsons:e,dragItemJson:d,targetDropItemJsons:g,targetDropItemChildren:I,targetDropItemIndex:h,dropType:i,itemJsons:n,muteUpdate:f};f(b,t),t.props.handleAction(c.OnUpdateItem,b,t)}t.props.handleAction(c.OnDidDrop,e,t)},handleDisabledItemRemoved:(e,t)=>{const{itemJsons:n}=t.props,i=n,[r]=i,o=a(i.slice(1)),d=o.indexOf(r),s={updateType:c.HandleDisabledItemRemoved,itemJsons:n};o.splice(d,1),t.props.handleAction(c.OnUpdateItem,s,t)},handleToggleDetail:(e,t)=>{const{itemStateDetailVisible:n}=e,{itemJsons:i}=t.props,[r]=i;t.props.handleAction(c.OnUpdateItem,{updateType:c.HandleToggleDetail,changeItemJson:{itemStateDetailVisible:n},currentItemJson:r,itemJsons:i},t),t.props.handleAction(c.OnToggleDetail,e,t)},handleExpandItem:(e,t)=>{const{itemStateExpanded:n}=e,{itemJsons:i}=t.props,[r]=i;t.props.handleAction(c.OnUpdateItem,{updateType:c.HandleExpandItem,changeItemJson:{itemStateExpanded:n},currentItemJson:r,itemJsons:i},t),t.props.handleAction(c.OnExpandItem,e,t)},handleEditingTextChange:(e,t)=>{const{itemStateEditingText:n}=e,{itemJsons:i}=t.props,[r]=i;t.props.handleAction(c.OnUpdateItem,{updateType:c.HandleEditingTextChange,changeItemJson:{itemStateEditingText:n||""},currentItemJson:r,itemJsons:i},t),t.props.handleAction(c.OnEditingTextChange,e,t)},handleExitEditing:(e,t)=>{const{itemStateEditingText:n}=e,{itemJsons:i}=t.props,[r]=i;t.props.handleAction(c.OnUpdateItem,{updateType:c.HandleExitEditing,changeItemJson:{itemStateEditingText:null,itemStateTitle:n||""},currentItemJson:r,itemJsons:i},t),t.props.handleAction(c.OnExitEditing,e,t)},handleFindSearchText:(e,t)=>{const{itemJsons:[{itemKey:n}],withStates:{searchForText:i}}=t.props;return(n||"").match(i||"")},isItemDisplayable:(e,t)=>!0,isItemFocused:(e,t)=>{const{focusItemJsons:n}=e,{itemJsons:[i]}=t.props;return(null==n?void 0:n[0])===i},handleClickItemBody:(e,t)=>{t.props.handleAction(c.HandleFocusItem,{},t),t.props.handleAction(c.OnClickItemBody,e,t)},handleDoubleClickItemTitle:(e,t)=>{const{itemJsons:[{itemStateTitle:n}]}=t.props;t.props.handleAction(c.HandleStartEditing,{itemStateEditingText:n},t),t.props.handleAction(c.OnDoubleClickItemTitle,e,t)},handleStartEditing:(e,t)=>{const{itemStateEditingText:n}=e,{itemJsons:i}=t.props,[r]=i;t.props.handleAction(c.OnUpdateItem,{updateType:c.HandleStartEditing,changeItemJson:{itemStateEditingText:n||""},currentItemJson:r,itemJsons:i},t)},isItemDroppable:(e,t)=>!0,getDragItemJsons:null,setDragItemJsons:null,handleClickItemTitle:null,handleFocusItem:null,onToggleDetail:null,onExpandItem:null,onEditingTextChange:null,onExitEditing:null,onDidDrop:null,onClickItemBody:null,onDoubleClickItemTitle:null,onClickItemCommand:null,onUpdateItem:null},b.defaultProps=Object.assign({theme:{},className:"",treeType:"typical",dndEnabled:!1,withStates:{},handleAction:d,itemBlockInfo:{name:c.RenderOverrideItem,children:[{name:c.RenderOverrideItemDroppableContainer,children:[{name:c.RenderOverrideItemContent,children:[{name:c.RenderOverrideItemChildrenToggle},{name:c.RenderOverrideItemBody,children:[{name:c.RenderOverrideItemMainLine,children:[{name:c.RenderOverrideItemDraggableContainer,children:[{name:c.RenderOverrideItemDragHandle},{name:c.RenderOverrideItemDetailToggle},{name:c.RenderOverrideItemIcon},{name:c.RenderOverrideItemTitle},{name:c.RenderOverrideItemCommands}]}]},{name:c.RenderOverrideItemDetailLine}]}]}]},{name:c.RenderOverrideItemSubitems}]}},b.defaultHandleActionMap);const v=p.themeUtils.withTheme(Object(p.injectIntl)(b));class j extends p.React.Component{constructor(e){super(e),this.state={dragItems:[]}}render(){return this.props.handleAction(m.RenderOverrideMain,{},this)}renderItemJson(e){const{treeType:t,dndEnabled:n,withStates:i,showRemoveIconForDisabledItem:r}=this.props,[o,...d]=e,{itemKey:s,itemStateExpanded:l,itemStateEditingText:m}=o,u=a(e),g=["jimu-tree-main__item","jimu-tree-main__item_level-"+d.length,"jimu-tree-main__item_editing-"+("string"==typeof m),...u?["jimu-tree-main__item_expandable-"+!!u,"jimu-tree-main__item_expanded-"+!!l]:[]].join(" ");return Object(p.jsx)(v,Object.assign({key:s,className:g,treeType:t,itemJsons:e,dndEnabled:n,showRemoveIconForDisabledItem:r,withStates:i},Object.assign({},...Object.values(c).map(e=>{var t;return{[e]:null===(t=this.props[e])||void 0===t?void 0:t.bind(this)}}))),(u||[]).map(t=>this.renderItemJson([t,...e])))}}j.defaultHandleActionMap={renderOverrideMain:(e,t)=>{var n,i;const{className:r,topTag:o,rootItemVisible:d,rootItemJson:s}=t.props,l=s?a([s]):null,m=(null===(i=null===(n=null==s?void 0:s.itemChildren)||void 0===n?void 0:n.filter(e=>{var t;return(null===(t=null==e?void 0:e.itemChildren)||void 0===t?void 0:t.length)>0}))||void 0===i?void 0:i.length)>0,c=o;return Object(p.jsx)(h.Provider,{value:m},Object(p.jsx)(c,{className:"jimu-tree-main "+(r||""),css:function(){return p.css`
          &.jimu-tree-main {
            width: 100%;
          }
        `}},d?t.renderItemJson([s]):(l||[]).map((e,n)=>Object(p.jsx)(p.React.Fragment,{key:n},t.renderItemJson([e,s])))))},setDragItemJsons(e,t){this.setState(({dragItems:t})=>({dragItems:[...t.filter(t=>t.dragEvent.target!==e.dragEvent.target),..."dragstart"===e.type?[e]:[]]}))},getDragItemJsons(e,t){return this.state.dragItems.find(t=>t.dragEvent.target===e.dragEvent.target)}},j.defaultProps=Object.assign({className:"",topTag:"div",treeType:"typical",rootItemVisible:!1,dndEnabled:!1,withStates:{},handleAction:d},j.defaultHandleActionMap);class x extends p.React.Component{constructor(e){super(e),this.state={searchForText:"",focusItemJsons:[],filterEnabled:!1}}render(){return this.props.handleAction(l.RenderOverride,{},this)}}x.defaultHandleActionMap={renderOverride:(e,t)=>{const{className:n,topTag:i,treeType:r,rootItemJson:o,rootItemVisible:a,dndEnabled:d,showRemoveIconForDisabledItem:s,forwardRef:l}=t.props,{searchForText:u,filterEnabled:g}=t.state,h=["jimu-tree",n,"jimu-tree_template-"+r,"jimu-tree_searched-text-"+!!u,"jimu-tree_filter-enabled-"+!!g].join(" "),I=i;return Object(p.jsx)(I,{ref:l,className:h,css:function(){return p.css`
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
        `}},Object(p.jsx)(j,Object.assign({className:"",treeType:r,topTag:I,rootItemJson:o,rootItemVisible:a,dndEnabled:d,showRemoveIconForDisabledItem:s,withStates:t.state},Object.assign({},...[...Object.values(c),...Object.values(m)].map(e=>{var n;return{[e]:null===(n=t.props[e])||void 0===n?void 0:n.bind(t)}})))))},isItemDisplayable(e,t){const{itemJsons:[{itemStateChecked:n}]}=t.props;return!this.state.filterEnabled||!!n},handleFocusItem(e,t){const{itemJsons:n}=t.props;this.setState({focusItemJsons:n})}},x.defaultProps=Object.assign({theme:{},className:"",topTag:"div",treeType:"typical",rootItemVisible:!1,dndEnabled:!1,handleAction:d},x.defaultHandleActionMap);const y=p.themeUtils.withTheme(x);var O=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n};function _(e){const{className:t="",itemsJson:n=[],listType:i}=e,r=O(e,["className","itemsJson","listType"]);return Object(p.jsx)(y,Object.assign({},r,{className:t+" jimu-list",rootItemJson:(o=[...n],Object.assign(o,{itemKey:"",itemChildren:o})),treeType:i}));var o}const D=p.themeUtils.withTheme(_)}}))}}}));