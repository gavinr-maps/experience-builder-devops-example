System.register(["jimu-core","jimu-layouts/layout-runtime","jimu-ui"],(function(t,e){var i={},o={},s={};return{setters:[function(t){i.AppMode=t.AppMode,i.Immutable=t.Immutable,i.React=t.React,i.appActions=t.appActions,i.classNames=t.classNames,i.css=t.css,i.getAppStore=t.getAppStore,i.jsx=t.jsx,i.moduleLoader=t.moduleLoader,i.polished=t.polished},function(t){o.LayoutEntry=t.LayoutEntry,o.PageContext=t.PageContext,o.utils=t.utils},function(t){s.Button=t.Button,s.Icon=t.Icon,s.Loading=t.Loading,s.NormalLineType=t.NormalLineType,s.styleUtils=t.styleUtils}],execute:function(){t((()=>{var t={59788:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.146 4.653a.485.485 0 01.708 0L8 10.24l5.146-5.587a.485.485 0 01.708 0 .538.538 0 010 .738l-5.5 5.956a.485.485 0 01-.708 0l-5.5-5.956a.538.538 0 010-.738z" fill="#000"></path></svg>'},11407:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.347 2.146a.485.485 0 010 .708L5.76 8l5.587 5.146a.486.486 0 010 .708.538.538 0 01-.738 0l-5.956-5.5a.485.485 0 010-.708l5.956-5.5a.538.538 0 01.738 0z" fill="#000"></path></svg>'},3273:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.653 13.854a.485.485 0 010-.708L10.24 8 4.653 2.854a.485.485 0 010-.708.538.538 0 01.738 0l5.956 5.5a.485.485 0 010 .708l-5.956 5.5a.538.538 0 01-.738 0z" fill="#000"></path></svg>'},96009:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.854 11.347a.486.486 0 01-.708 0L8 5.76l-5.146 5.587a.485.485 0 01-.708 0 .538.538 0 010-.738l5.5-5.956a.485.485 0 01.708 0l5.5 5.956a.538.538 0 010 .738z" fill="#000"></path></svg>'},48891:t=>{"use strict";t.exports=i},74758:t=>{"use strict";t.exports=o},30726:t=>{"use strict";t.exports=s}},e={};function l(i){var o=e[i];if(void 0!==o)return o.exports;var s=e[i]={exports:{}};return t[i](s,s.exports,l),s.exports}l.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return l.d(e,{a:e}),e},l.d=(t,e)=>{for(var i in e)l.o(e,i)&&!l.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},l.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),l.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.p="";var r={};return l.p=window.jimuConfig.baseUrl,(()=>{"use strict";l.r(r),l.d(r,{default:()=>z});var t,e,i,o,s=l(48891),n=l(74758),a=l(30726);class d extends s.React.PureComponent{render(){const{style:t,className:e,innerLayouts:i,itemStyle:o}=this.props;return s.React.createElement("div",{className:(0,s.classNames)("side d-flex",e),style:Object.assign(Object.assign(Object.assign({},t),a.styleUtils.toCSSStyle(o)),{overflow:"auto"})},s.React.createElement(n.LayoutEntry,{className:"border-0",layouts:i,isInWidget:!0,ignoreMinHeight:!0}))}}!function(t){t.First="FIRST",t.Second="SECOND"}(t||(t={})),function(t){t.Start="START",t.Center="CENTER",t.End="END"}(e||(e={})),function(t){t.Horizontal="HORIZONTAL",t.Vertical="VERTICAL"}(i||(i={})),function(t){t.Left="LEFT",t.Right="RIGHT",t.Up="UP",t.Down="DOWN"}(o||(o={})),(0,s.Immutable)({direction:i.Horizontal,collapseSide:t.First,overlay:!1,size:"300px",divider:{visible:!0,lineStyle:{type:a.NormalLineType.SOLID,color:"var(--light-500)",width:"1px"}},resizable:!1,toggleBtn:{visible:!0,icon:o.Left,offsetX:15,offsetY:0,position:e.Center,iconSize:14,width:15,height:60,color:{normal:{icon:{useTheme:!1,color:"#FFFFFF"},bg:{useTheme:!0,color:"colors.primary"}},hover:{bg:{useTheme:!0,color:"colors.palette.primary[600]"}}},expandStyle:{style:{borderRadius:"0 92px 92px 0"}},collapseStyle:{style:{borderRadius:"0 92px 92px 0"}}},defaultState:1});var p=l(11407),c=l.n(p),u=l(3273),h=l.n(u),g=l(96009),f=l.n(g),S=l(59788),y=l.n(S);const m={};m[o.Left]=c(),m[o.Right]=h(),m[o.Up]=f(),m[o.Down]=y();class b extends s.React.PureComponent{getStyle(){const{width:t,height:e}=this.props;return s.css`
      padding: 0;
      width: ${t}px;
      height: ${e}px;

      .jimu-icon {
        margin: 0;
      }
    `}flipStyle(t){if(!this.props.shouldFlip)return t;let e=(0,s.Immutable)(t);if(null!=t.borderRadius){const i=t.borderRadius.split(" ");e=e.set("borderRadius",`${i[1]} ${i[0]} ${i[3]} ${i[2]}`)}return e}render(){const{icon:t,iconSize:e,style:i,expanded:o,shouldFlip:l,onClick:r}=this.props,n=l?180:0;return(0,s.jsx)(a.Button,{className:"sidebar-controller d-flex justify-content-center align-items-center",css:this.getStyle(),style:this.flipStyle(i),onClick:r,"aria-expanded":o},(0,s.jsx)(a.Icon,{className:"icon",rotate:o?0+n:180+n,icon:m[t],size:e}))}}const x=s.css`
  transition: all 200ms;
`;class v extends s.React.PureComponent{constructor(t){super(t),this.removeSplitHandler=()=>{null!=this.interactable&&(this.interactable.unset(),this.interactable=null)},this.handleToggleSidebar=t=>{t.stopPropagation(),(0,s.getAppStore)().dispatch(s.appActions.widgetStatePropChange(this.props.widgetId,"collapse",!this.props.sidebarVisible))},this.state={isResizing:!1,deltaSize:0}}componentDidMount(){const{firstLayouts:t,secondLayouts:e,config:i}=this.props;null!=t&&null!=e&&this.bindSplitHandler(),(0,s.getAppStore)().dispatch(s.appActions.widgetStatePropChange(this.props.widgetId,"collapse",0!==i.defaultState))}componentDidUpdate(){const{firstLayouts:t,secondLayouts:e}=this.props;null!=t&&null!=e&&null==this.interactable&&this.bindSplitHandler(),null!=this.interactable&&this.interactable.draggable({startAxis:this.props.direction===i.Horizontal?"x":"y",lockAxis:this.props.direction===i.Horizontal?"x":"y"})}componentWillUnmount(){this.removeSplitHandler()}calSidebarSize(){const{config:t}=this.props;let e;return e=0!==this.state.deltaSize?n.utils.isPercentage(t.size)?`${parseFloat(t.size)*this.domSize/100+this.state.deltaSize}px`:`${parseFloat(t.size)+this.state.deltaSize}px`:t.size,e}createCollapsibleSide(e,o){const{config:l,direction:r}=this.props,n=this.calSidebarSize(),a=this.shouldFlipLeftAndRight();let d;d=r===i.Horizontal?s.css`
        width: ${n};
        transform: ${l.overlay&&!this.props.sidebarVisible?l.collapseSide===t.First?`translateX(-${n})`:`translateX(${n})`:"none"};
        top: ${l.overlay?0:"auto"};
        bottom: ${l.overlay?0:"auto"};
        left: ${l.overlay&&o===t.First?0:"auto"};
        right: ${l.overlay&&o===t.Second?0:"auto"};
      `:s.css`
        height: ${n};
        transform: ${l.overlay&&!this.props.sidebarVisible?l.collapseSide===t.First?`translateY(-${n})`:`translateY(${n})`:"none"};
        left: ${l.overlay?0:"auto"};
        right: ${l.overlay?0:"auto"};
        top: ${l.overlay&&o===t.First?0:"auto"};
        bottom: ${l.overlay&&o===t.Second?0:"auto"};
      `;const p=this.layoutItemComponent;return(0,s.jsx)("div",{css:s.css`
        ${this.state.isResizing?"":x}
        ${d}
        position: ${l.overlay?"absolute":"relative"};
        overflow: visible;
        z-index: 2;
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: auto;
      `,className:(0,s.classNames)("d-flex",{"flex-column":r===i.Vertical})},(0,s.jsx)(p,{innerLayouts:e,itemStyle:o===t.First?l.firstPanelStyle:l.secondPanelStyle,collapsed:!this.props.sidebarVisible,className:(0,s.classNames)({"h-100":r===i.Vertical,"w-100":r===i.Horizontal})}),this.createController(a))}splitStyle(){const{direction:e,config:o,appMode:l}=this.props,r=this.calSidebarSize(),n=!this.props.sidebarVisible,d=null!=o.divider&&o.divider.visible&&null!=o.divider.lineStyle?a.styleUtils.toCSSBorder(o.divider.lineStyle):"none";return e===i.Horizontal?s.css`
        width: 1px;
        border-left: ${d};
        position: ${o.overlay?"absolute":"relative"};
        left: ${o.overlay&&!n&&o.collapseSide===t.First?r:"auto"};
        right: ${o.overlay&&!n&&o.collapseSide===t.Second?r:"auto"};
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
      border-top: ${d};
      position: ${o.overlay?"absolute":"relative"};
      top: ${o.overlay&&!n&&o.collapseSide===t.First?r:"auto"};
      bottom: ${o.overlay&&!n&&o.collapseSide===t.Second?r:"auto"};
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
    `}createController(o){const{config:l,theme:r,direction:n}=this.props;if(null!=l.toggleBtn&&!l.toggleBtn.visible)return null;const a=this.props.sidebarVisible?l.toggleBtn.collapseStyle:l.toggleBtn.expandStyle;let d,p,c,u=0,h=0;if(n===i.Horizontal){l.toggleBtn.position===e.Start?d=0:l.toggleBtn.position===e.Center&&(d="50%",h=-l.toggleBtn.height/2);const i=l.collapseSide===t.Second;c=s.css`
        top: ${l.toggleBtn.position!==e.End?d:"auto"};
        bottom: ${l.toggleBtn.position===e.End?0:"auto"};
        right: ${i?"auto":0};
        left: ${i?0:"auto"};
      `}else l.toggleBtn.position===e.Start?p=0:l.toggleBtn.position===e.Center&&(p="50%",u=-l.toggleBtn.width/2),c=s.css`
        left: ${l.toggleBtn.position!==e.End?p:"auto"};
        right: ${l.toggleBtn.position===e.End?0:"auto"};
        bottom: ${l.collapseSide===t.First?0:"auto"};
        top: ${l.collapseSide===t.Second?0:"auto"};
      `;const{style:g}=a,{iconSize:f,width:S,height:y,color:m,icon:x}=l.toggleBtn;return(0,s.jsx)("div",{css:s.css`
          ${c}
          position: absolute;
          transform: translate(${l.toggleBtn.offsetX+u}px, ${l.toggleBtn.offsetY+h}px);
        `},(0,s.jsx)(b,{theme:r,icon:x,iconSize:f,expanded:this.props.sidebarVisible,width:S,height:y,color:m,style:g,shouldFlip:o,onClick:this.handleToggleSidebar}))}createNormalSide(e,i){const o=this.layoutItemComponent,{config:l}=this.props;return(0,s.jsx)("div",{css:this.state.isResizing?"":x,className:"flex-shrink-0 flex-grow-1 d-flex",style:{zIndex:0,flexBasis:this.props.sidebarVisible?"0":"100%",overflow:"auto"}},(0,s.jsx)(o,{itemStyle:i===t.First?l.firstPanelStyle:l.secondPanelStyle,innerLayouts:e,className:"w-100"}))}shouldFlipLeftAndRight(){const{direction:t}=this.props;return t===i.Horizontal&&(0,s.getAppStore)().getState().appContext.isRTL}render(){const{config:e,firstLayouts:o,secondLayouts:l,direction:r}=this.props;return null==o||null==l?(0,s.jsx)(a.Loading,null):(0,s.jsx)(n.PageContext.Consumer,null,(n=>{const a=n.builderTheme;return(0,s.jsx)("div",{className:(0,s.classNames)("d-flex w-100",{"flex-column":r===i.Vertical}),ref:t=>this.ref=t,css:s.css`
            border: 1px dashed ${null!=a?s.polished.rgba(a.colors.palette.dark[300],.3):""};
            position: relative;
            overflow: hidden;
            justify-content: ${e.collapseSide===t.First?"flex-end":"flex-start"};
            body:not(.design-mode) & {
              border: none;
            }
          `},e.collapseSide===t.First?this.createCollapsibleSide(o,t.First):this.createNormalSide(o,t.First),(0,s.jsx)("div",{css:this.splitStyle(),ref:t=>this.splitRef=t}),e.collapseSide===t.Second?this.createCollapsibleSide(l,t.Second):this.createNormalSide(l,t.Second))}))}}class w extends v{constructor(t){super(t),this.bindSplitHandler=()=>{null==this.interactModule?s.moduleLoader.loadModule("jimu-core/dnd").then((t=>{this.interactModule=t.interact,this.initHandler()})).catch((t=>{console.error(t)})):this.initHandler()},this.layoutItemComponent=d}initHandler(){const{config:e}=this.props;let o,s;null!=this.splitRef&&e.resizable&&null==this.interactable&&(this.interactable=this.interactModule(this.splitRef).origin("parent").draggable({inertia:!1,autoScroll:!1,modifiers:[this.interactModule.modifiers.restrict({restriction:"parent"})],startAxis:this.props.direction===i.Horizontal?"x":"y",lockAxis:this.props.direction===i.Horizontal?"x":"y",onstart:e=>{e.stopPropagation();const l=this.props.config.collapseSide===t.First?1:-1;if(this.props.direction===i.Horizontal){const t=n.utils.isRTL()?-1:1;o=this.state.deltaSize*l*t,s=0}else o=0,s=this.state.deltaSize*l;const r=this.ref.getBoundingClientRect();this.domSize=this.props.direction===i.Horizontal?r.width:r.height,this.setState({isResizing:!0})},onmove:e=>{if(e.stopPropagation(),o+=e.dx,s+=e.dy,this.props.direction===i.Horizontal){const e=n.utils.isRTL()?-1:1;this.props.config.collapseSide===t.First?this.setState({deltaSize:Math.round(o*e)}):this.setState({deltaSize:-Math.round(o*e)})}else this.props.config.collapseSide===t.First?this.setState({deltaSize:Math.round(s)}):this.setState({deltaSize:-Math.round(s)})},onend:t=>{t.stopPropagation(),this.setState({isResizing:!1})}}))}}class z extends s.React.PureComponent{render(){const{layouts:t,theme:e,builderSupportModules:i}=this.props,o=window.jimuConfig.isInBuilder?i.widgetModules.SidebarLayoutBuilder:w;return null==o?(0,s.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},"No layout component!"):(0,s.jsx)("div",{className:"widget-sidebar-layout d-flex w-100 h-100"},(0,s.jsx)(o,{theme:e,widgetId:this.props.id,direction:this.props.config.direction,firstLayouts:t.FIRST,secondLayouts:t.SECOND,config:this.props.config,sidebarVisible:this.props.sidebarVisible}))}}z.mapExtraStateProps=(t,e)=>{var i,o,s;return{sidebarVisible:null===(s=null===(o=null===(i=null==t?void 0:t.widgetsState)||void 0===i?void 0:i[e.id])||void 0===o?void 0:o.collapse)||void 0===s||s}}})(),r})())}}}));