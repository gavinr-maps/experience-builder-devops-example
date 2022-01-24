System.register(["jimu-core","jimu-core/dnd","jimu-for-builder","jimu-layouts/layout-runtime","jimu-layouts/layout-builder","jimu-ui"],(function(t,e){var i={},o={},s={},l={},n={},r={};return{setters:[function(t){i.AppMode=t.AppMode,i.Immutable=t.Immutable,i.React=t.React,i.ReactRedux=t.ReactRedux,i.appActions=t.appActions,i.classNames=t.classNames,i.css=t.css,i.getAppStore=t.getAppStore,i.jsx=t.jsx,i.polished=t.polished},function(t){o.interact=t.interact},function(t){s.getAppConfigAction=t.getAppConfigAction},function(t){l.PageContext=t.PageContext,l.utils=t.utils},function(t){n.LayoutEntry=t.LayoutEntry},function(t){r.Button=t.Button,r.Icon=t.Icon,r.Loading=t.Loading,r.NormalLineType=t.NormalLineType,r.styleUtils=t.styleUtils}],execute:function(){t((()=>{var t={59788:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.146 4.653a.485.485 0 01.708 0L8 10.24l5.146-5.587a.485.485 0 01.708 0 .538.538 0 010 .738l-5.5 5.956a.485.485 0 01-.708 0l-5.5-5.956a.538.538 0 010-.738z" fill="#000"></path></svg>'},11407:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.347 2.146a.485.485 0 010 .708L5.76 8l5.587 5.146a.486.486 0 010 .708.538.538 0 01-.738 0l-5.956-5.5a.485.485 0 010-.708l5.956-5.5a.538.538 0 01.738 0z" fill="#000"></path></svg>'},3273:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.653 13.854a.485.485 0 010-.708L10.24 8 4.653 2.854a.485.485 0 010-.708.538.538 0 01.738 0l5.956 5.5a.485.485 0 010 .708l-5.956 5.5a.538.538 0 01-.738 0z" fill="#000"></path></svg>'},96009:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.854 11.347a.486.486 0 01-.708 0L8 5.76l-5.146 5.587a.485.485 0 01-.708 0 .538.538 0 010-.738l5.5-5.956a.485.485 0 01.708 0l5.5 5.956a.538.538 0 010 .738z" fill="#000"></path></svg>'},48891:t=>{"use strict";t.exports=i},54020:t=>{"use strict";t.exports=o},23137:t=>{"use strict";t.exports=s},77282:t=>{"use strict";t.exports=n},74758:t=>{"use strict";t.exports=l},30726:t=>{"use strict";t.exports=r}},e={};function a(i){var o=e[i];if(void 0!==o)return o.exports;var s=e[i]={exports:{}};return t[i](s,s.exports,a),s.exports}a.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return a.d(e,{a:e}),e},a.d=(t,e)=>{for(var i in e)a.o(e,i)&&!a.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),a.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var p={};return(()=>{"use strict";a.r(p),a.d(p,{default:()=>R});var t,e,i,o,s=a(48891),l=a(54020),n=a(23137),r=a(74758),d=a(77282),c=a(30726);class u extends s.React.PureComponent{render(){const{style:t,className:e,innerLayouts:i,itemStyle:o,collapsed:l}=this.props;return s.React.createElement("div",{className:(0,s.classNames)("side d-flex",e),style:Object.assign(Object.assign(Object.assign({},t),c.styleUtils.toCSSStyle(o)),{overflow:"auto"})},s.React.createElement(d.LayoutEntry,{className:"border-0",layouts:i,isInWidget:!0,ignoreMinHeight:!0,droppable:!l}))}}!function(t){t.First="FIRST",t.Second="SECOND"}(t||(t={})),function(t){t.Start="START",t.Center="CENTER",t.End="END"}(e||(e={})),function(t){t.Horizontal="HORIZONTAL",t.Vertical="VERTICAL"}(i||(i={})),function(t){t.Left="LEFT",t.Right="RIGHT",t.Up="UP",t.Down="DOWN"}(o||(o={})),(0,s.Immutable)({direction:i.Horizontal,collapseSide:t.First,overlay:!1,size:"300px",divider:{visible:!0,lineStyle:{type:c.NormalLineType.SOLID,color:"var(--light-500)",width:"1px"}},resizable:!1,toggleBtn:{visible:!0,icon:o.Left,offsetX:15,offsetY:0,position:e.Center,iconSize:14,width:15,height:60,color:{normal:{icon:{useTheme:!1,color:"#FFFFFF"},bg:{useTheme:!0,color:"colors.primary"}},hover:{bg:{useTheme:!0,color:"colors.palette.primary[600]"}}},expandStyle:{style:{borderRadius:"0 92px 92px 0"}},collapseStyle:{style:{borderRadius:"0 92px 92px 0"}}},defaultState:1});var h=a(11407),g=a.n(h),f=a(3273),S=a.n(f),m=a(96009),x=a.n(m),y=a(59788),b=a.n(y);const v={};v[o.Left]=g(),v[o.Right]=S(),v[o.Up]=x(),v[o.Down]=b();class z extends s.React.PureComponent{getStyle(){const{width:t,height:e}=this.props;return s.css`
      padding: 0;
      width: ${t}px;
      height: ${e}px;

      .jimu-icon {
        margin: 0;
      }
    `}flipStyle(t){if(!this.props.shouldFlip)return t;let e=(0,s.Immutable)(t);if(null!=t.borderRadius){const i=t.borderRadius.split(" ");e=e.set("borderRadius",`${i[1]} ${i[0]} ${i[3]} ${i[2]}`)}return e}render(){const{icon:t,iconSize:e,style:i,expanded:o,shouldFlip:l,onClick:n}=this.props,r=l?180:0;return(0,s.jsx)(c.Button,{className:"sidebar-controller d-flex justify-content-center align-items-center",css:this.getStyle(),style:this.flipStyle(i),onClick:n,"aria-expanded":o},(0,s.jsx)(c.Icon,{className:"icon",rotate:o?0+r:180+r,icon:v[t],size:e}))}}const $=s.css`
  transition: all 200ms;
`;class w extends s.React.PureComponent{constructor(t){super(t),this.removeSplitHandler=()=>{null!=this.interactable&&(this.interactable.unset(),this.interactable=null)},this.handleToggleSidebar=t=>{t.stopPropagation(),(0,s.getAppStore)().dispatch(s.appActions.widgetStatePropChange(this.props.widgetId,"collapse",!this.props.sidebarVisible))},this.state={isResizing:!1,deltaSize:0}}componentDidMount(){const{firstLayouts:t,secondLayouts:e,config:i}=this.props;null!=t&&null!=e&&this.bindSplitHandler(),(0,s.getAppStore)().dispatch(s.appActions.widgetStatePropChange(this.props.widgetId,"collapse",0!==i.defaultState))}componentDidUpdate(){const{firstLayouts:t,secondLayouts:e}=this.props;null!=t&&null!=e&&null==this.interactable&&this.bindSplitHandler(),null!=this.interactable&&this.interactable.draggable({startAxis:this.props.direction===i.Horizontal?"x":"y",lockAxis:this.props.direction===i.Horizontal?"x":"y"})}componentWillUnmount(){this.removeSplitHandler()}calSidebarSize(){const{config:t}=this.props;let e;return e=0!==this.state.deltaSize?r.utils.isPercentage(t.size)?`${parseFloat(t.size)*this.domSize/100+this.state.deltaSize}px`:`${parseFloat(t.size)+this.state.deltaSize}px`:t.size,e}createCollapsibleSide(e,o){const{config:l,direction:n}=this.props,r=this.calSidebarSize(),a=this.shouldFlipLeftAndRight();let p;p=n===i.Horizontal?s.css`
        width: ${r};
        transform: ${l.overlay&&!this.props.sidebarVisible?l.collapseSide===t.First?`translateX(-${r})`:`translateX(${r})`:"none"};
        top: ${l.overlay?0:"auto"};
        bottom: ${l.overlay?0:"auto"};
        left: ${l.overlay&&o===t.First?0:"auto"};
        right: ${l.overlay&&o===t.Second?0:"auto"};
      `:s.css`
        height: ${r};
        transform: ${l.overlay&&!this.props.sidebarVisible?l.collapseSide===t.First?`translateY(-${r})`:`translateY(${r})`:"none"};
        left: ${l.overlay?0:"auto"};
        right: ${l.overlay?0:"auto"};
        top: ${l.overlay&&o===t.First?0:"auto"};
        bottom: ${l.overlay&&o===t.Second?0:"auto"};
      `;const d=this.layoutItemComponent;return(0,s.jsx)("div",{css:s.css`
        ${this.state.isResizing?"":$}
        ${p}
        position: ${l.overlay?"absolute":"relative"};
        overflow: visible;
        z-index: 2;
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: auto;
      `,className:(0,s.classNames)("d-flex",{"flex-column":n===i.Vertical})},(0,s.jsx)(d,{innerLayouts:e,itemStyle:o===t.First?l.firstPanelStyle:l.secondPanelStyle,collapsed:!this.props.sidebarVisible,className:(0,s.classNames)({"h-100":n===i.Vertical,"w-100":n===i.Horizontal})}),this.createController(a))}splitStyle(){const{direction:e,config:o,appMode:l}=this.props,n=this.calSidebarSize(),r=!this.props.sidebarVisible,a=null!=o.divider&&o.divider.visible&&null!=o.divider.lineStyle?c.styleUtils.toCSSBorder(o.divider.lineStyle):"none";return e===i.Horizontal?s.css`
        width: 1px;
        border-left: ${a};
        position: ${o.overlay?"absolute":"relative"};
        left: ${o.overlay&&!r&&o.collapseSide===t.First?n:"auto"};
        right: ${o.overlay&&!r&&o.collapseSide===t.Second?n:"auto"};
        height: ${o.overlay?"100%":"auto"};
        &:after {
          display: ${o.resizable||l===s.AppMode.Design?"block":"none"};
          position: absolute;
          content: '';
          width: 5px;
          top: 0;
          bottom: 0;
          left: -2px;
          cursor: col-resize;
        }
        z-index: 3;
      `:s.css`
      height: 1px;
      border-top: ${a};
      position: ${o.overlay?"absolute":"relative"};
      top: ${o.overlay&&!r&&o.collapseSide===t.First?n:"auto"};
      bottom: ${o.overlay&&!r&&o.collapseSide===t.Second?n:"auto"};
      width: ${o.overlay?"100%":"auto"};
      &:after {
        display: ${o.resizable||l===s.AppMode.Design?"block":"none"};
        position: absolute;
        content: '';
        height: 5px;
        top: -2px;
        right: 0;
        left: 0;
        cursor: row-resize;
      }
      z-index: 3;
    `}createController(o){const{config:l,theme:n,direction:r}=this.props;if(null!=l.toggleBtn&&!l.toggleBtn.visible)return null;const a=this.props.sidebarVisible?l.toggleBtn.collapseStyle:l.toggleBtn.expandStyle;let p,d,c,u=0,h=0;if(r===i.Horizontal){l.toggleBtn.position===e.Start?p=0:l.toggleBtn.position===e.Center&&(p="50%",h=-l.toggleBtn.height/2);const i=l.collapseSide===t.Second;c=s.css`
        top: ${l.toggleBtn.position!==e.End?p:"auto"};
        bottom: ${l.toggleBtn.position===e.End?0:"auto"};
        right: ${i?"auto":0};
        left: ${i?0:"auto"};
      `}else l.toggleBtn.position===e.Start?d=0:l.toggleBtn.position===e.Center&&(d="50%",u=-l.toggleBtn.width/2),c=s.css`
        left: ${l.toggleBtn.position!==e.End?d:"auto"};
        right: ${l.toggleBtn.position===e.End?0:"auto"};
        bottom: ${l.collapseSide===t.First?0:"auto"};
        top: ${l.collapseSide===t.Second?0:"auto"};
      `;const{style:g}=a,{iconSize:f,width:S,height:m,color:x,icon:y}=l.toggleBtn;return(0,s.jsx)("div",{css:s.css`
          ${c}
          position: absolute;
          transform: translate(${l.toggleBtn.offsetX+u}px, ${l.toggleBtn.offsetY+h}px);
        `},(0,s.jsx)(z,{theme:n,icon:y,iconSize:f,expanded:this.props.sidebarVisible,width:S,height:m,color:x,style:g,shouldFlip:o,onClick:this.handleToggleSidebar}))}createNormalSide(e,i){const o=this.layoutItemComponent,{config:l}=this.props;return(0,s.jsx)("div",{css:this.state.isResizing?"":$,className:"flex-shrink-0 flex-grow-1 d-flex",style:{zIndex:0,flexBasis:this.props.sidebarVisible?"0":"100%",overflow:"auto"}},(0,s.jsx)(o,{itemStyle:i===t.First?l.firstPanelStyle:l.secondPanelStyle,innerLayouts:e,className:"w-100"}))}shouldFlipLeftAndRight(){const{direction:t}=this.props;return t===i.Horizontal&&(0,s.getAppStore)().getState().appContext.isRTL}render(){const{config:e,firstLayouts:o,secondLayouts:l,direction:n}=this.props;return null==o||null==l?(0,s.jsx)(c.Loading,null):(0,s.jsx)(r.PageContext.Consumer,null,(r=>{const a=r.builderTheme;return(0,s.jsx)("div",{className:(0,s.classNames)("d-flex w-100",{"flex-column":n===i.Vertical}),ref:t=>this.ref=t,css:s.css`
            border: 1px dashed ${null!=a?s.polished.rgba(a.colors.palette.dark[300],.3):""};
            position: relative;
            overflow: hidden;
            justify-content: ${e.collapseSide===t.First?"flex-end":"flex-start"};
            body:not(.design-mode) & {
              border: none;
            }
          `},e.collapseSide===t.First?this.createCollapsibleSide(o,t.First):this.createNormalSide(o,t.First),(0,s.jsx)("div",{css:this.splitStyle(),ref:t=>this.splitRef=t}),e.collapseSide===t.Second?this.createCollapsibleSide(l,t.Second):this.createNormalSide(l,t.Second))}))}}const R={SidebarLayoutBuilder:s.ReactRedux.connect((function(t,e){return{appMode:t.appRuntimeInfo.appMode}}))(class extends w{constructor(e){super(e),this.bindSplitHandler=()=>{let e,o;null!=this.splitRef&&null==this.interactable&&(this.interactable=(0,l.interact)(this.splitRef).origin("parent").draggable({inertia:!1,autoScroll:!1,modifiers:[l.interact.modifiers.restrict({restriction:"parent"})],startAxis:this.props.direction===i.Horizontal?"x":"y",lockAxis:this.props.direction===i.Horizontal?"x":"y",onstart:t=>{t.stopPropagation(),e=0,o=0;const s=this.ref.getBoundingClientRect();this.domSize=this.props.direction===i.Horizontal?s.width:s.height,this.setState({isResizing:!0})},onmove:s=>{if(s.stopPropagation(),e+=s.dx,o+=s.dy,this.props.direction===i.Horizontal){const i=r.utils.isRTL()?-1:1;this.props.config.collapseSide===t.First?this.setState({deltaSize:Math.round(e*i)}):this.setState({deltaSize:-Math.round(e*i)})}else this.props.config.collapseSide===t.First?this.setState({deltaSize:Math.round(o)}):this.setState({deltaSize:-Math.round(o)})},onend:t=>{t.stopPropagation();const{config:e}=this.props,i=this.state.deltaSize;let o;o=r.utils.isPercentage(e.size)?`${(100*(parseFloat(e.size)*this.domSize/100+i)/this.domSize).toFixed(4)}%`:`${(parseFloat(e.size)+i).toFixed(0)}px`,(0,n.getAppConfigAction)().editWidgetConfig(this.props.widgetId,(0,s.Immutable)(e).set("size",o)).exec(),this.setState({deltaSize:0,isResizing:!1})}}))},this.layoutItemComponent=u}componentDidUpdate(){const{appMode:t,config:e}=this.props;if(t===s.AppMode.Run&&!e.resizable)return this.splitRef.classList.add("no-resize"),void this.removeSplitHandler();this.splitRef.classList.remove("no-resize"),super.componentDidUpdate()}})}})(),p})())}}}));