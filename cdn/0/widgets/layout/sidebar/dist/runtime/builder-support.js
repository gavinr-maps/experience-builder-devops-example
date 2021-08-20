System.register(["jimu-core","jimu-ui","jimu-layouts/layout-runtime","jimu-for-builder","jimu-layouts/layout-builder","jimu-core/dnd"],(function(t){var e,i,o,s,n,l;return{setters:[function(t){e=t},function(t){i=t},function(t){o=t},function(t){s=t},function(t){n=t},function(t){l=t}],execute:function(){t(function(t){var e={};function i(o){if(e[o])return e[o].exports;var s=e[o]={i:o,l:!1,exports:{}};return t[o].call(s.exports,s,s.exports,i),s.l=!0,s.exports}return i.m=t,i.c=e,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(o,s,function(e){return t[e]}.bind(null,s));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=528)}({0:function(t,i){t.exports=e},1:function(t,e){t.exports=i},10:function(t,e){t.exports=s},110:function(t,e,i){"use strict";i.d(e,"a",(function(){return d}));var o=i(0),s=i(7),n=i(1),l=i(9);const r={};r[l.b.Left]=i(72),r[l.b.Right]=i(83),r[l.b.Up]=i(152),r[l.b.Down]=i(92);class a extends o.React.PureComponent{getStyle(){const{width:t,height:e}=this.props;return o.css`
      padding: 0;
      width: ${t}px;
      height: ${e}px;

      .jimu-icon {
        margin: 0;
      }
    `}flipStyle(t){if(!this.props.shouldFlip)return t;let e=Object(o.Immutable)(t);if(null!=t.borderRadius){const i=t.borderRadius.split(" ");e=e.set("borderRadius",`${i[1]} ${i[0]} ${i[3]} ${i[2]}`)}return e}render(){const{icon:t,iconSize:e,style:i,expanded:s,shouldFlip:l}=this.props,a=l?180:0;return Object(o.jsx)(n.Button,{className:"sidebar-controller d-flex justify-content-center align-items-center",css:this.getStyle(),style:this.flipStyle(i)},Object(o.jsx)(n.Icon,{className:"icon",rotate:s?0+a:180+a,icon:r[t],size:e}))}}const c=o.css`
  transition: all 200ms;
`;class d extends o.React.PureComponent{constructor(t){super(t),this.removeSplitHandler=()=>{null!=this.interactable&&(this.interactable.unset(),this.interactable=null)},this.handleToggleSidebar=t=>{t.stopPropagation(),Object(o.getAppStore)().dispatch(o.appActions.widgetStatePropChange(this.props.widgetId,"collapse",!this.props.sidebarVisible))},this.state={isResizing:!1,deltaSize:0}}componentDidMount(){const{firstLayouts:t,secondLayouts:e,config:i}=this.props;null!=t&&null!=e&&this.bindSplitHandler(),Object(o.getAppStore)().dispatch(o.appActions.widgetStatePropChange(this.props.widgetId,"collapse",0!==i.defaultState))}componentDidUpdate(){const{firstLayouts:t,secondLayouts:e}=this.props;null!=t&&null!=e&&null==this.interactable&&this.bindSplitHandler(),null!=this.interactable&&this.interactable.draggable({startAxis:this.props.direction===l.d.Horizontal?"x":"y",lockAxis:this.props.direction===l.d.Horizontal?"x":"y"})}componentWillUnmount(){this.removeSplitHandler()}calSidebarSize(){const{config:t}=this.props;let e;return e=0!==this.state.deltaSize?s.utils.isPercentage(t.size)?parseFloat(t.size)*this.domSize/100+this.state.deltaSize+"px":parseFloat(t.size)+this.state.deltaSize+"px":t.size,e}createCollapsibleSide(t,e){const{config:i,direction:s}=this.props,n=this.calSidebarSize(),r=this.shouldFlipLeftAndRight();let a;a=s===l.d.Horizontal?o.css`
        width: ${n};
        transform: ${i.overlay&&!this.props.sidebarVisible?i.collapseSide===l.a.First?`translateX(-${n})`:`translateX(${n})`:"none"};
        top: ${i.overlay?0:"auto"};
        bottom: ${i.overlay?0:"auto"};
        left: ${i.overlay&&e===l.a.First?0:"auto"};
        right: ${i.overlay&&e===l.a.Second?0:"auto"};
      `:o.css`
        height: ${n};
        transform: ${i.overlay&&!this.props.sidebarVisible?i.collapseSide===l.a.First?`translateY(-${n})`:`translateY(${n})`:"none"};
        left: ${i.overlay?0:"auto"};
        right: ${i.overlay?0:"auto"};
        top: ${i.overlay&&e===l.a.First?0:"auto"};
        bottom: ${i.overlay&&e===l.a.Second?0:"auto"};
      `;const d=this.layoutItemComponent;return Object(o.jsx)("div",{css:o.css`
        ${this.state.isResizing?"":c}
        ${a}
        position: ${i.overlay?"absolute":"relative"};
        overflow: visible;
        z-index: 2;
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: auto;
      `,className:Object(o.classNames)("d-flex",{"flex-column":s===l.d.Vertical})},Object(o.jsx)(d,{innerLayouts:t,itemStyle:e===l.a.First?i.firstPanelStyle:i.secondPanelStyle,collapsed:!this.props.sidebarVisible,className:Object(o.classNames)({"h-100":s===l.d.Vertical,"w-100":s===l.d.Horizontal})}),this.createController(r))}splitStyle(){const{direction:t,config:e}=this.props,i=this.calSidebarSize(),s=!this.props.sidebarVisible,r=null!=e.divider&&e.divider.visible&&null!=e.divider.lineStyle?n.styleUtils.toCSSBorder(e.divider.lineStyle):"none";return t===l.d.Horizontal?o.css`
        width: 1px;
        border-left: ${r};
        position: ${e.overlay?"absolute":"relative"};
        left: ${e.overlay&&!s&&e.collapseSide===l.a.First?i:"auto"};
        right: ${e.overlay&&!s&&e.collapseSide===l.a.Second?i:"auto"};
        height: ${e.overlay?"100%":"auto"};
        &:after {
          display: ${e.resizable?"block":"none"};
          position: absolute;
          content: '';
          width: 5px;
          top: 0;
          bottom: 0;
          left: -2px;
          cursor: col-resize;
        }
        z-index: 3;
      `:o.css`
      height: 1px;
      border-top: ${r};
      position: ${e.overlay?"absolute":"relative"};
      top: ${e.overlay&&!s&&e.collapseSide===l.a.First?i:"auto"};
      bottom: ${e.overlay&&!s&&e.collapseSide===l.a.Second?i:"auto"};
      width: ${e.overlay?"100%":"auto"};
      &:after {
        display: ${e.resizable?"block":"none"};
        position: absolute;
        content: '';
        height: 5px;
        top: -2px;
        right: 0;
        left: 0;
        cursor: row-resize;
      }
      z-index: 3;
    `}createController(t){const{config:e,theme:i,direction:s}=this.props;if(null!=e.toggleBtn&&!e.toggleBtn.visible)return null;const n=this.props.sidebarVisible?e.toggleBtn.collapseStyle:e.toggleBtn.expandStyle;let r,c,d,p=0,u=0;if(s===l.d.Horizontal){e.toggleBtn.position===l.c.Start?r=0:e.toggleBtn.position===l.c.Center&&(r="50%",u=-e.toggleBtn.height/2);const t=e.collapseSide===l.a.Second;d=o.css`
        top: ${e.toggleBtn.position!==l.c.End?r:"auto"};
        bottom: ${e.toggleBtn.position===l.c.End?0:"auto"};
        right: ${t?"auto":0};
        left: ${t?0:"auto"};
      `}else e.toggleBtn.position===l.c.Start?c=0:e.toggleBtn.position===l.c.Center&&(c="50%",p=-e.toggleBtn.width/2),d=o.css`
        left: ${e.toggleBtn.position!==l.c.End?c:"auto"};
        right: ${e.toggleBtn.position===l.c.End?0:"auto"};
        bottom: ${e.collapseSide===l.a.First?0:"auto"};
        top: ${e.collapseSide===l.a.Second?0:"auto"};
      `;const{style:h}=n,{iconSize:g,width:f,height:b,color:S,icon:y}=e.toggleBtn;return Object(o.jsx)("div",{css:o.css`
          ${d}
          position: absolute;
          transform: translate(${e.toggleBtn.offsetX+p}px, ${e.toggleBtn.offsetY+u}px);
        `,onClick:this.handleToggleSidebar},Object(o.jsx)(a,{theme:i,icon:y,iconSize:g,expanded:this.props.sidebarVisible,width:f,height:b,color:S,style:h,shouldFlip:t}))}createNormalSide(t,e){const i=this.layoutItemComponent,{config:s}=this.props;return Object(o.jsx)("div",{css:this.state.isResizing?"":c,className:"flex-shrink-0 flex-grow-1 d-flex",style:{zIndex:0,flexBasis:this.props.sidebarVisible?"0":"100%",overflow:"auto"}},Object(o.jsx)(i,{itemStyle:e===l.a.First?s.firstPanelStyle:s.secondPanelStyle,innerLayouts:t,className:"w-100"}))}shouldFlipLeftAndRight(){const{direction:t}=this.props;if(t===l.d.Horizontal){return Object(o.getAppStore)().getState().appContext.isRTL}return!1}render(){const{config:t,firstLayouts:e,secondLayouts:i,direction:r}=this.props;return null==e||null==i?Object(o.jsx)(n.Loading,null):Object(o.jsx)(s.PageContext.Consumer,null,s=>{const n=s.builderTheme;return Object(o.jsx)("div",{className:Object(o.classNames)("d-flex w-100",{"flex-column":r===l.d.Vertical}),ref:t=>this.ref=t,css:o.css`
            border: 1px dashed ${null!=n?o.polished.rgba(n.colors.palette.dark[300],.3):""};
            position: relative;
            overflow: hidden;
            justify-content: ${t.collapseSide===l.a.First?"flex-end":"flex-start"};
            body:not(.design-mode) & {
              border: none;
            }
          `},t.collapseSide===l.a.First?this.createCollapsibleSide(e,l.a.First):this.createNormalSide(e,l.a.First),Object(o.jsx)("div",{css:this.splitStyle(),ref:t=>this.splitRef=t}),t.collapseSide===l.a.Second?this.createCollapsibleSide(i,l.a.Second):this.createNormalSide(i,l.a.Second))})}}},152:function(t,e){t.exports='<svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero" fill="none"><path d="M7 5.316l-5.125 5.052a.814.814 0 01-1.14 0 .786.786 0 010-1.123l5.696-5.613a.814.814 0 011.138 0l5.695 5.613a.786.786 0 010 1.123.814.814 0 01-1.139 0L7 5.316z" fill="#000"></path><path d="M0 0h14v14H0z"></path></g></svg>'},34:function(t,e){t.exports=n},528:function(t,e,i){"use strict";i.r(e);var o=i(0),s=i(74),n=i(10),l=i(7),r=i(34),a=i(1);class c extends o.React.PureComponent{render(){const{style:t,className:e,innerLayouts:i,itemStyle:s,collapsed:n}=this.props;return o.React.createElement("div",{className:Object(o.classNames)("side d-flex",e),style:Object.assign(Object.assign(Object.assign({},t),a.styleUtils.toCSSStyle(s)),{overflow:"auto"})},o.React.createElement(r.LayoutEntry,{className:"border-0",layouts:i,isInWidget:!0,ignoreMinHeight:!0,droppable:!n}))}}var d=i(9),p=i(110);class u extends p.a{constructor(t){super(t),this.bindSplitHandler=()=>{let t,e;null!=this.splitRef&&null==this.interactable&&(this.interactable=Object(s.interact)(this.splitRef).origin("parent").draggable({inertia:!1,autoScroll:!1,modifiers:[s.interact.modifiers.restrict({restriction:"parent"})],startAxis:this.props.direction===d.d.Horizontal?"x":"y",lockAxis:this.props.direction===d.d.Horizontal?"x":"y",onstart:i=>{i.stopPropagation(),t=0,e=0;const o=this.ref.getBoundingClientRect();this.domSize=this.props.direction===d.d.Horizontal?o.width:o.height,this.setState({isResizing:!0})},onmove:i=>{if(i.stopPropagation(),t+=i.dx,e+=i.dy,this.props.direction===d.d.Horizontal){const e=l.utils.isRTL()?-1:1;this.props.config.collapseSide===d.a.First?this.setState({deltaSize:Math.round(t*e)}):this.setState({deltaSize:-Math.round(t*e)})}else this.props.config.collapseSide===d.a.First?this.setState({deltaSize:Math.round(e)}):this.setState({deltaSize:-Math.round(e)})},onend:t=>{t.stopPropagation();const{config:e}=this.props,i=this.state.deltaSize;let s;s=l.utils.isPercentage(e.size)?(100*(parseFloat(e.size)*this.domSize/100+i)/this.domSize).toFixed(4)+"%":(parseFloat(e.size)+i).toFixed(0)+"px";Object(n.getAppConfigAction)().editWidgetConfig(this.props.widgetId,Object(o.Immutable)(e).set("size",s)).exec(),this.setState({deltaSize:0,isResizing:!1})}}))},this.layoutItemComponent=c}}e.default={SidebarLayoutBuilder:u}},7:function(t,e){t.exports=o},72:function(t,e){t.exports='<svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero" fill="none"><path d="M4.916 7l5.052 5.125c.31.315.31.825 0 1.14a.786.786 0 01-1.123 0L3.232 7.568a.814.814 0 010-1.138L8.845.736a.786.786 0 011.123 0c.31.314.31.824 0 1.139L4.916 7z" fill="#000"></path><path d="M0 0h14v14H0z"></path></g></svg>'},74:function(t,e){t.exports=l},83:function(t,e){t.exports='<svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero" fill="none"><path d="M8.784 7L3.732 1.875a.814.814 0 010-1.14.786.786 0 011.123 0l5.613 5.696c.31.314.31.824 0 1.138l-5.613 5.695a.786.786 0 01-1.123 0 .814.814 0 010-1.139L8.784 7z" fill="#000"></path><path d="M0 0h14v14H0z"></path></g></svg>'},9:function(t,e,i){"use strict";i.d(e,"a",(function(){return o})),i.d(e,"c",(function(){return s})),i.d(e,"d",(function(){return n})),i.d(e,"b",(function(){return l})),i.d(e,"e",(function(){return c}));var o,s,n,l,r=i(0),a=i(1);!function(t){t.First="FIRST",t.Second="SECOND"}(o||(o={})),function(t){t.Start="START",t.Center="CENTER",t.End="END"}(s||(s={})),function(t){t.Horizontal="HORIZONTAL",t.Vertical="VERTICAL"}(n||(n={})),function(t){t.Left="LEFT",t.Right="RIGHT",t.Up="UP",t.Down="DOWN"}(l||(l={}));const c=Object(r.Immutable)({direction:n.Horizontal,collapseSide:o.First,overlay:!1,size:"300px",divider:{visible:!0,lineStyle:{type:a.NormalLineType.SOLID,color:"var(--light-500)",width:"1px"}},resizable:!1,toggleBtn:{visible:!0,icon:l.Left,offsetX:15,offsetY:0,position:s.Center,iconSize:14,width:15,height:60,color:{normal:{icon:{useTheme:!1,color:"#FFFFFF"},bg:{useTheme:!0,color:"colors.primary"}},hover:{bg:{useTheme:!0,color:"colors.palette.primary[600]"}}},expandStyle:{style:{borderRadius:"0 92px 92px 0"}},collapseStyle:{style:{borderRadius:"0 92px 92px 0"}}},defaultState:1})},92:function(t,e){t.exports='<svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero" fill="none"><path d="M7 8.684l5.125-5.052a.814.814 0 011.14 0 .786.786 0 010 1.123l-5.696 5.613a.814.814 0 01-1.138 0L.736 4.755a.786.786 0 010-1.123.814.814 0 011.139 0L7 8.684z" fill="#000"></path><path d="M0 0h14v14H0z"></path></g></svg>'}}))}}}));