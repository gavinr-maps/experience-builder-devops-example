System.register(["jimu-core","jimu-core/dnd","jimu-for-builder","jimu-layouts/layout-runtime","jimu-layouts/layout-builder","jimu-ui"],(function(t,e){var o={},i={},s={},l={},n={},r={};return{setters:[function(t){o.AppMode=t.AppMode,o.Immutable=t.Immutable,o.React=t.React,o.ReactRedux=t.ReactRedux,o.appActions=t.appActions,o.classNames=t.classNames,o.css=t.css,o.getAppStore=t.getAppStore,o.jsx=t.jsx,o.polished=t.polished},function(t){i.interact=t.interact},function(t){s.getAppConfigAction=t.getAppConfigAction},function(t){l.PageContext=t.PageContext,l.utils=t.utils},function(t){n.LayoutEntry=t.LayoutEntry},function(t){r.Button=t.Button,r.Icon=t.Icon,r.Loading=t.Loading,r.NormalLineType=t.NormalLineType,r.styleUtils=t.styleUtils}],execute:function(){t((()=>{var t={10119:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m14 4-6 8-6-8h12Z"></path></svg>'},30900:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M12 14 4 8l8-6v12Z"></path></svg>'},98940:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m4 2 8 6-8 6V2Z"></path></svg>'},25280:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m2 12 6-8 6 8H2Z"></path></svg>'},72957:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M2.854 2.153a.485.485 0 0 0-.708 0 .538.538 0 0 0 0 .738l5.5 5.956a.485.485 0 0 0 .708 0l5.5-5.956a.538.538 0 0 0 0-.738.485.485 0 0 0-.708 0L8 7.74 2.854 2.153Zm0 5a.485.485 0 0 0-.708 0 .538.538 0 0 0 0 .738l5.5 5.956a.485.485 0 0 0 .708 0l5.5-5.956a.538.538 0 0 0 0-.738.485.485 0 0 0-.708 0L8 12.74 2.854 7.153Z" clip-rule="evenodd"></path></svg>'},59788:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M2.146 4.653a.485.485 0 0 1 .708 0L8 10.24l5.146-5.587a.485.485 0 0 1 .708 0 .538.538 0 0 1 0 .738l-5.5 5.956a.485.485 0 0 1-.708 0l-5.5-5.956a.538.538 0 0 1 0-.738Z" clip-rule="evenodd"></path></svg>'},13930:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M13.847 2.854a.485.485 0 0 0 0-.708.538.538 0 0 0-.738 0l-5.956 5.5a.485.485 0 0 0 0 .708l5.956 5.5a.538.538 0 0 0 .738 0 .486.486 0 0 0 0-.708L8.26 8l5.587-5.146Zm-5 0a.485.485 0 0 0 0-.708.538.538 0 0 0-.738 0l-5.956 5.5a.485.485 0 0 0 0 .708l5.956 5.5a.538.538 0 0 0 .738 0 .485.485 0 0 0 0-.708L3.26 8l5.587-5.146Z" clip-rule="evenodd"></path></svg>'},11407:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M11.347 2.146a.485.485 0 0 1 0 .708L5.76 8l5.587 5.146a.486.486 0 0 1 0 .708.538.538 0 0 1-.738 0l-5.956-5.5a.485.485 0 0 1 0-.708l5.956-5.5a.538.538 0 0 1 .738 0Z" clip-rule="evenodd"></path></svg>'},53622:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M2.153 13.146a.485.485 0 0 0 0 .708.538.538 0 0 0 .738 0l5.956-5.5a.485.485 0 0 0 0-.708l-5.956-5.5a.538.538 0 0 0-.738 0 .485.485 0 0 0 0 .708L7.74 8l-5.587 5.146Zm5 0a.485.485 0 0 0 0 .708.538.538 0 0 0 .738 0l5.956-5.5a.485.485 0 0 0 0-.708l-5.956-5.5a.538.538 0 0 0-.738 0 .485.485 0 0 0 0 .708L12.74 8l-5.587 5.146Z" clip-rule="evenodd"></path></svg>'},3273:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M4.653 13.854a.485.485 0 0 1 0-.708L10.24 8 4.653 2.854a.485.485 0 0 1 0-.708.538.538 0 0 1 .738 0l5.956 5.5a.485.485 0 0 1 0 .708l-5.956 5.5a.538.538 0 0 1-.738 0Z" clip-rule="evenodd"></path></svg>'},50427:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M13.146 13.847a.486.486 0 0 0 .708 0 .538.538 0 0 0 0-.738l-5.5-5.956a.485.485 0 0 0-.708 0l-5.5 5.956a.538.538 0 0 0 0 .738.485.485 0 0 0 .708 0L8 8.26l5.146 5.587Zm0-5a.485.485 0 0 0 .708 0 .538.538 0 0 0 0-.738l-5.5-5.956a.485.485 0 0 0-.708 0l-5.5 5.956a.538.538 0 0 0 0 .738.485.485 0 0 0 .708 0L8 3.26l5.146 5.587Z" clip-rule="evenodd"></path></svg>'},96009:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M13.854 11.347a.486.486 0 0 1-.708 0L8 5.76l-5.146 5.587a.485.485 0 0 1-.708 0 .538.538 0 0 1 0-.738l5.5-5.956a.485.485 0 0 1 .708 0l5.5 5.956a.538.538 0 0 1 0 .738Z" clip-rule="evenodd"></path></svg>'},48891:t=>{"use strict";t.exports=o},54020:t=>{"use strict";t.exports=i},23137:t=>{"use strict";t.exports=s},77282:t=>{"use strict";t.exports=n},74758:t=>{"use strict";t.exports=l},30726:t=>{"use strict";t.exports=r}},e={};function a(o){var i=e[o];if(void 0!==i)return i.exports;var s=e[o]={exports:{}};return t[o](s,s.exports,a),s.exports}a.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return a.d(e,{a:e}),e},a.d=(t,e)=>{for(var o in e)a.o(e,o)&&!a.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),a.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var p={};return(()=>{"use strict";a.r(p),a.d(p,{default:()=>V});var t,e,o,i,s=a(48891),l=a(54020),n=a(23137),r=a(74758),d=a(77282),c=a(30726);class u extends s.React.PureComponent{render(){const{style:t,className:e,innerLayouts:o,itemStyle:i,collapsed:l}=this.props;return(0,s.jsx)("div",{className:(0,s.classNames)("side d-flex",e),style:Object.assign(Object.assign(Object.assign({},t),c.styleUtils.toCSSStyle(i)),{overflow:"auto"}),css:s.css`
          .exb-drop-area {
            pointer-events: ${l?"none !important":"inherit"}
          }
        `},(0,s.jsx)(d.LayoutEntry,{className:"border-0",layouts:o,isInWidget:!0,ignoreMinHeight:!0}))}}!function(t){t.First="FIRST",t.Second="SECOND"}(t||(t={})),function(t){t.Start="START",t.Center="CENTER",t.End="END"}(e||(e={})),function(t){t.Horizontal="HORIZONTAL",t.Vertical="VERTICAL"}(o||(o={})),function(t){t.Left="LEFT",t.Right="RIGHT",t.Up="UP",t.Down="DOWN"}(i||(i={})),(0,s.Immutable)({direction:o.Horizontal,collapseSide:t.First,overlay:!1,size:"300px",divider:{visible:!0,lineStyle:{type:c.NormalLineType.SOLID,color:"var(--light-500)",width:"1px"}},resizable:!1,toggleBtn:{visible:!0,icon:i.Left,iconSource:0,offsetX:15,offsetY:0,position:e.Center,iconSize:14,width:15,height:60,border:{type:c.NormalLineType.SOLID,color:"var(--light-500)",width:"1px"},color:{normal:{icon:{useTheme:!1,color:"var(--black)"},bg:{useTheme:!0,color:"var(--light)"}},hover:{bg:{useTheme:!0,color:"var(--light)"}}},expandStyle:{style:{borderRadius:"0 92px 92px 0"}},collapseStyle:{style:{borderRadius:"0 92px 92px 0"}}},defaultState:1});var h=a(11407),g=a.n(h),f=a(3273),v=a.n(f),x=a(96009),S=a.n(x),m=a(59788),y=a.n(m),b=a(13930),w=a.n(b),z=a(53622),$=a.n(z),L=a(50427),R=a.n(L),C=a(72957),j=a.n(C),B=a(30900),F=a.n(B),N=a(98940),A=a.n(N),M=a(25280),H=a.n(M),I=a(10119),P=a.n(I);const T={};T[i.Left]=g(),T[i.Right]=v(),T[i.Up]=S(),T[i.Down]=y();const Z={};Z[i.Left]=w(),Z[i.Right]=$(),Z[i.Up]=R(),Z[i.Down]=j();const k={};function D(t,e){return 1===e?Z[t]:2===e?k[t]:T[t]}k[i.Left]=F(),k[i.Right]=A(),k[i.Up]=H(),k[i.Down]=P();class E extends s.React.PureComponent{getStyle(){var t;const{width:e,height:o,color:i,border:l}=this.props;return s.css`
      padding: 0;
      width: ${e}px;
      height: ${o}px;

      background-color: ${i.normal.bg.color} !important;
      &:hover {
        background-color: ${i.hover.bg.color} !important;
      }

      border: ${null!==(t=c.styleUtils.toCSSBorder(l))&&void 0!==t?t:"none"} !important;

      .jimu-icon {
        margin: 0;
      }
    `}flipStyle(t){if(!this.props.shouldFlip)return t;let e=(0,s.Immutable)(t);if(null!=t.borderRadius){const o=t.borderRadius.split(" ");e=e.set("borderRadius",`${o[1]} ${o[0]} ${o[3]} ${o[2]}`)}return e}render(){const{icon:t,iconSize:e,iconSource:o,style:i,expanded:l,shouldFlip:n,color:r,onClick:a}=this.props,p=n?180:0;return(0,s.jsx)(c.Button,{className:"sidebar-controller d-flex justify-content-center align-items-center",css:this.getStyle(),style:this.flipStyle(i),onClick:a,"aria-expanded":l},(0,s.jsx)(c.Icon,{className:"icon",rotate:l?0+p:180+p,icon:D(t,o),size:e,color:r.normal.icon.color}))}}const O=s.css`
  transition: all 200ms;
`;class U extends s.React.PureComponent{constructor(t){super(t),this.removeSplitHandler=()=>{null!=this.interactable&&(this.interactable.unset(),this.interactable=null)},this.handleToggleSidebar=t=>{t.stopPropagation(),(0,s.getAppStore)().dispatch(s.appActions.widgetStatePropChange(this.props.widgetId,"collapse",!this.props.sidebarVisible))},this.state={isResizing:!1,deltaSize:0}}componentDidMount(){const{firstLayouts:t,secondLayouts:e,config:o}=this.props;null!=t&&null!=e&&this.bindSplitHandler(),(0,s.getAppStore)().dispatch(s.appActions.widgetStatePropChange(this.props.widgetId,"collapse",0!==o.defaultState))}componentDidUpdate(){const{firstLayouts:t,secondLayouts:e}=this.props;null!=t&&null!=e&&null==this.interactable&&this.bindSplitHandler(),null!=this.interactable&&this.interactable.draggable({startAxis:this.props.direction===o.Horizontal?"x":"y",lockAxis:this.props.direction===o.Horizontal?"x":"y"})}componentWillUnmount(){this.removeSplitHandler()}calSidebarSize(){const{config:t}=this.props;let e;return e=0!==this.state.deltaSize?r.utils.isPercentage(t.size)?`${parseFloat(t.size)*this.domSize/100+this.state.deltaSize}px`:`${parseFloat(t.size)+this.state.deltaSize}px`:t.size,e}createCollapsibleSide(e,i){const{config:l,direction:n}=this.props,r=this.calSidebarSize(),a=this.shouldFlipLeftAndRight();let p;p=n===o.Horizontal?s.css`
        width: ${r};
        transform: ${l.overlay&&!this.props.sidebarVisible?l.collapseSide===t.First?`translateX(-${r})`:`translateX(${r})`:"none"};
        top: ${l.overlay?0:"auto"};
        bottom: ${l.overlay?0:"auto"};
        left: ${l.overlay&&i===t.First?0:"auto"};
        right: ${l.overlay&&i===t.Second?0:"auto"};
      `:s.css`
        height: ${r};
        transform: ${l.overlay&&!this.props.sidebarVisible?l.collapseSide===t.First?`translateY(-${r})`:`translateY(${r})`:"none"};
        left: ${l.overlay?0:"auto"};
        right: ${l.overlay?0:"auto"};
        top: ${l.overlay&&i===t.First?0:"auto"};
        bottom: ${l.overlay&&i===t.Second?0:"auto"};
      `;const d=this.layoutItemComponent;return(0,s.jsx)("div",{css:s.css`
        ${this.state.isResizing?"":O}
        ${p}
        position: ${l.overlay?"absolute":"relative"};
        overflow: visible;
        z-index: 2;
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: auto;
      `,className:(0,s.classNames)("d-flex",{"flex-column":n===o.Vertical})},(0,s.jsx)(d,{innerLayouts:e,itemStyle:i===t.First?l.firstPanelStyle:l.secondPanelStyle,collapsed:!this.props.sidebarVisible,className:(0,s.classNames)({"h-100":n===o.Vertical,"w-100":n===o.Horizontal})}),this.createController(a))}splitStyle(){const{direction:e,config:i,appMode:l}=this.props,n=this.calSidebarSize(),r=!this.props.sidebarVisible,a=null!=i.divider&&i.divider.visible&&null!=i.divider.lineStyle?c.styleUtils.toCSSBorder(i.divider.lineStyle):"none";return e===o.Horizontal?s.css`
        width: 1px;
        border-left: ${a};
        position: ${i.overlay?"absolute":"relative"};
        left: ${i.overlay&&!r&&i.collapseSide===t.First?n:"auto"};
        right: ${i.overlay&&!r&&i.collapseSide===t.Second?n:"auto"};
        display: ${r?"none":"block"};
        height: ${i.overlay?"100%":"auto"};
        &:after {
          display: ${i.resizable||l===s.AppMode.Design?"block":"none"};
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
      position: ${i.overlay?"absolute":"relative"};
      top: ${i.overlay&&!r&&i.collapseSide===t.First?n:"auto"};
      bottom: ${i.overlay&&!r&&i.collapseSide===t.Second?n:"auto"};
      display: ${r?"none":"block"};
      width: ${i.overlay?"100%":"auto"};
      &:after {
        display: ${i.resizable||l===s.AppMode.Design?"block":"none"};
        position: absolute;
        content: '';
        height: 5px;
        top: -2px;
        right: 0;
        left: 0;
        cursor: row-resize;
      }
      z-index: 3;
    `}createController(i){const{config:l,theme:n,direction:r}=this.props;if(null!=l.toggleBtn&&!l.toggleBtn.visible)return null;const a=this.props.sidebarVisible?l.toggleBtn.collapseStyle:l.toggleBtn.expandStyle;let p,d,c,u=0,h=0;if(r===o.Horizontal){l.toggleBtn.position===e.Start?p=0:l.toggleBtn.position===e.Center&&(p="50%",h=-l.toggleBtn.height/2);const o=l.collapseSide===t.Second;c=s.css`
        top: ${l.toggleBtn.position!==e.End?p:"auto"};
        bottom: ${l.toggleBtn.position===e.End?0:"auto"};
        right: ${o?"auto":0};
        left: ${o?0:"auto"};
      `}else l.toggleBtn.position===e.Start?d=0:l.toggleBtn.position===e.Center&&(d="50%",u=-l.toggleBtn.width/2),c=s.css`
        left: ${l.toggleBtn.position!==e.End?d:"auto"};
        right: ${l.toggleBtn.position===e.End?0:"auto"};
        bottom: ${l.collapseSide===t.First?0:"auto"};
        top: ${l.collapseSide===t.Second?0:"auto"};
      `;const{style:g}=a,{iconSize:f,width:v,height:x,color:S,icon:m,border:y,iconSource:b}=l.toggleBtn;return(0,s.jsx)("div",{css:s.css`
          ${c}
          position: absolute;
          transform: translate(${l.toggleBtn.offsetX+u}px, ${l.toggleBtn.offsetY+h}px);
        `},(0,s.jsx)(E,{theme:n,icon:m,iconSize:f,expanded:this.props.sidebarVisible,width:v,height:x,color:S,style:g,shouldFlip:i,border:y,iconSource:b,onClick:this.handleToggleSidebar}))}createNormalSide(e,o){const i=this.layoutItemComponent,{config:l}=this.props;return(0,s.jsx)("div",{css:this.state.isResizing?"":O,className:"flex-shrink-0 flex-grow-1 d-flex",style:{zIndex:0,flexBasis:this.props.sidebarVisible?"0":"100%",overflow:"auto"}},(0,s.jsx)(i,{itemStyle:o===t.First?l.firstPanelStyle:l.secondPanelStyle,innerLayouts:e,className:"w-100"}))}shouldFlipLeftAndRight(){const{direction:t}=this.props;return t===o.Horizontal&&(0,s.getAppStore)().getState().appContext.isRTL}createContent(){const{config:e,firstLayouts:o,secondLayouts:i}=this.props;return e.overlay?e.collapseSide===t.First?(0,s.jsx)(s.React.Fragment,null,this.createNormalSide(i,t.Second),(0,s.jsx)("div",{css:this.splitStyle(),ref:t=>this.splitRef=t}),this.createCollapsibleSide(o,t.First)):(0,s.jsx)(s.React.Fragment,null,this.createNormalSide(o,t.First),(0,s.jsx)("div",{css:this.splitStyle(),ref:t=>this.splitRef=t}),this.createCollapsibleSide(i,t.Second)):e.collapseSide===t.First?(0,s.jsx)(s.React.Fragment,null,this.createCollapsibleSide(o,t.First),(0,s.jsx)("div",{css:this.splitStyle(),ref:t=>this.splitRef=t}),this.createNormalSide(i,t.Second)):(0,s.jsx)(s.React.Fragment,null,this.createNormalSide(o,t.First),(0,s.jsx)("div",{css:this.splitStyle(),ref:t=>this.splitRef=t}),this.createCollapsibleSide(i,t.Second))}render(){const{config:e,firstLayouts:i,secondLayouts:l,direction:n}=this.props;return null==i||null==l?(0,s.jsx)(c.Loading,null):(0,s.jsx)(r.PageContext.Consumer,null,(i=>{const l=i.builderTheme;return(0,s.jsx)("div",{className:(0,s.classNames)("d-flex w-100",{"flex-column":n===o.Vertical}),ref:t=>this.ref=t,css:s.css`
            border: 1px dashed ${null!=l?s.polished.rgba(l.colors.palette.dark[300],.3):""};
            position: relative;
            overflow: hidden;
            justify-content: ${e.collapseSide===t.First?"flex-end":"flex-start"};
            body:not(.design-mode) & {
              border: none;
            }
          `},this.createContent())}))}}const V={SidebarLayoutBuilder:s.ReactRedux.connect((function(t,e){return{appMode:t.appRuntimeInfo.appMode}}))(class extends U{constructor(e){super(e),this.bindSplitHandler=()=>{let e,i;null!=this.splitRef&&null==this.interactable&&(this.interactable=(0,l.interact)(this.splitRef).origin("parent").draggable({inertia:!1,autoScroll:!1,modifiers:[l.interact.modifiers.restrict({restriction:"parent"})],startAxis:this.props.direction===o.Horizontal?"x":"y",lockAxis:this.props.direction===o.Horizontal?"x":"y",onstart:t=>{t.stopPropagation(),e=0,i=0;const s=this.ref.getBoundingClientRect();this.domSize=this.props.direction===o.Horizontal?s.width:s.height,this.setState({isResizing:!0})},onmove:s=>{if(s.stopPropagation(),e+=s.dx,i+=s.dy,this.props.direction===o.Horizontal){const o=r.utils.isRTL()?-1:1;this.props.config.collapseSide===t.First?this.setState({deltaSize:Math.round(e*o)}):this.setState({deltaSize:-Math.round(e*o)})}else this.props.config.collapseSide===t.First?this.setState({deltaSize:Math.round(i)}):this.setState({deltaSize:-Math.round(i)})},onend:t=>{t.stopPropagation();const{config:e}=this.props,o=this.state.deltaSize;let i;i=r.utils.isPercentage(e.size)?`${(100*(parseFloat(e.size)*this.domSize/100+o)/this.domSize).toFixed(4)}%`:`${(parseFloat(e.size)+o).toFixed(0)}px`,(0,n.getAppConfigAction)().editWidgetConfig(this.props.widgetId,(0,s.Immutable)(e).set("size",i)).exec(),this.setState({deltaSize:0,isResizing:!1})}}))},this.layoutItemComponent=u}componentDidUpdate(){const{appMode:t,config:e}=this.props;if(t===s.AppMode.Run&&!e.resizable)return this.splitRef.classList.add("no-resize"),void this.removeSplitHandler();this.splitRef.classList.remove("no-resize"),super.componentDidUpdate()}})}})(),p})())}}}));