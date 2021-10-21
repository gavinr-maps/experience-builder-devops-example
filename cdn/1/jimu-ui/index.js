/*! For license information please see index.js.LICENSE.txt */
System.register(["jimu-core","jimu-core/react","jimu-core/react-dom","jimu-theme","jimu-ui"],(function(e,t){var o={},n={},r={},i={},a={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(r,"__esModule",{value:!0}),{setters:[function(e){o.AppDialog=e.AppDialog,o.AppMode=e.AppMode,o.BrowserSizeMode=e.BrowserSizeMode,o.CONSTANTS=e.CONSTANTS,o.DataActionManager=e.DataActionManager,o.DataSourceManager=e.DataSourceManager,o.DialogMode=e.DialogMode,o.EMPTY_OPTION_VALUE=e.EMPTY_OPTION_VALUE,o.ExpressionResolverComponent=e.ExpressionResolverComponent,o.INTERACTIVE_CLASS=e.INTERACTIVE_CLASS,o.Immutable=e.Immutable,o.JimuFieldType=e.JimuFieldType,o.LinkType=e.LinkType,o.LoadingType=e.LoadingType,o.PagePart=e.PagePart,o.QueryScope=e.QueryScope,o.React=e.React,o.ReactDOM=e.ReactDOM,o.ReactRedux=e.ReactRedux,o.ReactResizeDetector=e.ReactResizeDetector,o.ResizeObserver=e.ResizeObserver,o.SessionManager=e.SessionManager,o.WidgetState=e.WidgetState,o.appActions=e.appActions,o.classNames=e.classNames,o.css=e.css,o.dataSourceUtils=e.dataSourceUtils,o.defaultMessages=e.defaultMessages,o.esri=e.esri,o.getAppStore=e.getAppStore,o.i18n=e.i18n,o.injectIntl=e.injectIntl,o.jimuHistory=e.jimuHistory,o.jsx=e.jsx,o.lodash=e.lodash,o.polished=e.polished,o.queryString=e.queryString,o.translatedLocales=e.translatedLocales,o.urlUtils=e.urlUtils,o.useIntl=e.useIntl,o.utils=e.utils,o.uuidv1=e.uuidv1,o.xss=e.xss},function(e){Object.keys(e).forEach((function(t){n[t]=e[t]}))},function(e){Object.keys(e).forEach((function(t){r[t]=e[t]}))},function(e){i.caret=e.caret,i.formValidation=e.formValidation,i.getBoxStyles=e.getBoxStyles,i.getLoadingStyles=e.getLoadingStyles,i.getQuillCoreStyle=e.getQuillCoreStyle,i.getThemeColorValue=e.getThemeColorValue,i.hover=e.hover,i.hoverFocus=e.hoverFocus,i.navDivider=e.navDivider,i.popperPointer=e.popperPointer,i.registerStyles=e.registerStyles,i.withStyles=e.withStyles,i.withTheme=e.withTheme},function(e){a.Icon=e.Icon}],execute:function(){e((()=>{var e={81506:e=>{e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.default=e.exports,e.exports.__esModule=!0},59713:e=>{e.exports=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},e.exports.default=e.exports,e.exports.__esModule=!0},67154:e=>{function t(){return e.exports=t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,t.apply(this,arguments)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},85354:(e,t,o)=>{var n=o(99489);e.exports=function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,n(e,t)},e.exports.default=e.exports,e.exports.__esModule=!0},95318:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.default=e.exports,e.exports.__esModule=!0},20862:(e,t,o)=>{var n=o(50008).default;function r(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,o=new WeakMap;return(r=function(e){return e?o:t})(e)}e.exports=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var o=r(t);if(o&&o.has(e))return o.get(e);var i={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var l=a?Object.getOwnPropertyDescriptor(e,s):null;l&&(l.get||l.set)?Object.defineProperty(i,s,l):i[s]=e[s]}return i.default=e,o&&o.set(e,i),i},e.exports.default=e.exports,e.exports.__esModule=!0},37316:e=>{e.exports=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r},e.exports.default=e.exports,e.exports.__esModule=!0},99489:e=>{function t(o,n){return e.exports=t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},e.exports.default=e.exports,e.exports.__esModule=!0,t(o,n)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},50008:e=>{function t(o){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(e.exports=t=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),t(o)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},94184:(e,t)=>{var o;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var i=typeof o;if("string"===i||"number"===i)e.push(o);else if(Array.isArray(o)){if(o.length){var a=r.apply(null,o);a&&e.push(a)}}else if("object"===i)if(o.toString===Object.prototype.toString)for(var s in o)n.call(o,s)&&o[s]&&e.push(s);else e.push(o.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()},58875:(e,t,o)=>{var n;!function(){"use strict";var r=!("undefined"==typeof window||!window.document||!window.document.createElement),i={canUseDOM:r,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:r&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:r&&!!window.screen};void 0===(n=function(){return i}.call(t,o,t,e))||(e.exports=n)}()},92703:(e,t,o)=>{"use strict";var n=o(50414);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,t,o,r,i,a){if(a!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var o={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return o.PropTypes=o,o}},45697:(e,t,o)=>{e.exports=o(92703)()},50414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},75668:(e,t,o)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"DraggableCore",{enumerable:!0,get:function(){return d.default}}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==f(e)&&"function"!=typeof e)return{default:e};var t=h();if(t&&t.has(e))return t.get(e);var o={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var i=n?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(o,r,i):o[r]=e[r]}return o.default=e,t&&t.set(e,o),o}(o(52127)),r=p(o(45697)),i=p(o(41530)),a=p(o(94184)),s=o(81825),l=o(2849),c=o(9280),d=p(o(80783)),u=p(o(55904));function p(e){return e&&e.__esModule?e:{default:e}}function h(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return h=function(){return e},e}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}function v(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function b(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?v(Object(o),!0).forEach((function(t){k(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):v(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function y(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function w(e,t,o){return t&&y(e.prototype,t),o&&y(e,o),e}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?O(e):t}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(c,e);var t,o,r=(t=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=E(t);if(o){var r=E(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return S(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),k(O(t=r.call(this,e)),"onDragStart",(function(e,o){if((0,u.default)("Draggable: onDragStart: %j",o),!1===t.props.onStart(e,(0,l.createDraggableData)(O(t),o)))return!1;t.setState({dragging:!0,dragged:!0})})),k(O(t),"onDrag",(function(e,o){if(!t.state.dragging)return!1;(0,u.default)("Draggable: onDrag: %j",o);var n,r,i=(0,l.createDraggableData)(O(t),o),a={x:i.x,y:i.y};if(t.props.bounds){var s=a.x,c=a.y;a.x+=t.state.slackX,a.y+=t.state.slackY;var d=(n=(0,l.getBoundPosition)(O(t),a.x,a.y),r=2,function(e){if(Array.isArray(e))return e}(n)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var o=[],n=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(o.push(a.value),!t||o.length!==t);n=!0);}catch(e){r=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw i}}return o}}(n,r)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?m(e,t):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),p=d[0],h=d[1];a.x=p,a.y=h,a.slackX=t.state.slackX+(s-a.x),a.slackY=t.state.slackY+(c-a.y),i.x=a.x,i.y=a.y,i.deltaX=a.x-t.state.x,i.deltaY=a.y-t.state.y}if(!1===t.props.onDrag(e,i))return!1;t.setState(a)})),k(O(t),"onDragStop",(function(e,o){if(!t.state.dragging)return!1;if(!1===t.props.onStop(e,(0,l.createDraggableData)(O(t),o)))return!1;(0,u.default)("Draggable: onDragStop: %j",o);var n={dragging:!1,slackX:0,slackY:0};if(Boolean(t.props.position)){var r=t.props.position,i=r.x,a=r.y;n.x=i,n.y=a}t.setState(n)})),t.state={dragging:!1,dragged:!1,x:e.position?e.position.x:e.defaultPosition.x,y:e.position?e.position.y:e.defaultPosition.y,prevPropsPosition:b({},e.position),slackX:0,slackY:0,isElementSVG:!1},!e.position||e.onDrag||e.onStop||console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element."),t}return w(c,null,[{key:"getDerivedStateFromProps",value:function(e,t){var o=e.position,n=t.prevPropsPosition;return!o||n&&o.x===n.x&&o.y===n.y?null:((0,u.default)("Draggable: getDerivedStateFromProps %j",{position:o,prevPropsPosition:n}),{x:o.x,y:o.y,prevPropsPosition:b({},o)})}}]),w(c,[{key:"componentDidMount",value:function(){void 0!==window.SVGElement&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}},{key:"componentWillUnmount",value:function(){this.setState({dragging:!1})}},{key:"findDOMNode",value:function(){return this.props.nodeRef?this.props.nodeRef.current:i.default.findDOMNode(this)}},{key:"render",value:function(){var e,t=this.props,o=(t.axis,t.bounds,t.children),r=t.defaultPosition,i=t.defaultClassName,c=t.defaultClassNameDragging,u=t.defaultClassNameDragged,p=t.position,h=t.positionOffset,f=(t.scale,function(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}(t,["axis","bounds","children","defaultPosition","defaultClassName","defaultClassNameDragging","defaultClassNameDragged","position","positionOffset","scale"])),m={},v=null,y=!Boolean(p)||this.state.dragging,w=p||r,x={x:(0,l.canDragX)(this)&&y?this.state.x:w.x,y:(0,l.canDragY)(this)&&y?this.state.y:w.y};this.state.isElementSVG?v=(0,s.createSVGTransform)(x,h):m=(0,s.createCSSTransform)(x,h);var S=(0,a.default)(o.props.className||"",i,(k(e={},c,this.state.dragging),k(e,u,this.state.dragged),e));return n.createElement(d.default,g({},f,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),n.cloneElement(n.Children.only(o),{className:S,style:b(b({},o.props.style),m),transform:v}))}}]),c}(n.Component);t.default=C,k(C,"displayName","Draggable"),k(C,"propTypes",b(b({},d.default.propTypes),{},{axis:r.default.oneOf(["both","x","y","none"]),bounds:r.default.oneOfType([r.default.shape({left:r.default.number,right:r.default.number,top:r.default.number,bottom:r.default.number}),r.default.string,r.default.oneOf([!1])]),defaultClassName:r.default.string,defaultClassNameDragging:r.default.string,defaultClassNameDragged:r.default.string,defaultPosition:r.default.shape({x:r.default.number,y:r.default.number}),positionOffset:r.default.shape({x:r.default.oneOfType([r.default.number,r.default.string]),y:r.default.oneOfType([r.default.number,r.default.string])}),position:r.default.shape({x:r.default.number,y:r.default.number}),className:c.dontSetMe,style:c.dontSetMe,transform:c.dontSetMe})),k(C,"defaultProps",b(b({},d.default.defaultProps),{},{axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},position:null,scale:1}))},80783:(e,t,o)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==p(e)&&"function"!=typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var o={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var i=n?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(o,r,i):o[r]=e[r]}return o.default=e,t&&t.set(e,o),o}(o(52127)),r=d(o(45697)),i=d(o(41530)),a=o(81825),s=o(2849),l=o(9280),c=d(o(55904));function d(e){return e&&e.__esModule?e:{default:e}}function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var o=[],n=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(o.push(a.value),!t||o.length!==t);n=!0);}catch(e){r=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw i}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?f(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?y(e):t}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var S={start:"touchstart",move:"touchmove",stop:"touchend"},O={start:"mousedown",move:"mousemove",stop:"mouseup"},E=O,k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(u,e);var t,o,r,l,d=(r=u,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(l){var o=w(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return b(this,e)});function u(){var e;g(this,u);for(var t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];return x(y(e=d.call.apply(d,[this].concat(o))),"state",{dragging:!1,lastX:NaN,lastY:NaN,touchIdentifier:null}),x(y(e),"mounted",!1),x(y(e),"handleDragStart",(function(t){if(e.props.onMouseDown(t),!e.props.allowAnyClick&&"number"==typeof t.button&&0!==t.button)return!1;var o=e.findDOMNode();if(!o||!o.ownerDocument||!o.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");var n=o.ownerDocument;if(!(e.props.disabled||!(t.target instanceof n.defaultView.Node)||e.props.handle&&!(0,a.matchesSelectorAndParentsTo)(t.target,e.props.handle,o)||e.props.cancel&&(0,a.matchesSelectorAndParentsTo)(t.target,e.props.cancel,o))){"touchstart"===t.type&&t.preventDefault();var r=(0,a.getTouchIdentifier)(t);e.setState({touchIdentifier:r});var i=(0,s.getControlPosition)(t,r,y(e));if(null!=i){var l=i.x,d=i.y,u=(0,s.createCoreData)(y(e),l,d);(0,c.default)("DraggableCore: handleDragStart: %j",u),(0,c.default)("calling",e.props.onStart),!1!==e.props.onStart(t,u)&&!1!==e.mounted&&(e.props.enableUserSelectHack&&(0,a.addUserSelectStyles)(n),e.setState({dragging:!0,lastX:l,lastY:d}),(0,a.addEvent)(n,E.move,e.handleDrag),(0,a.addEvent)(n,E.stop,e.handleDragStop))}}})),x(y(e),"handleDrag",(function(t){var o=(0,s.getControlPosition)(t,e.state.touchIdentifier,y(e));if(null!=o){var n=o.x,r=o.y;if(Array.isArray(e.props.grid)){var i=n-e.state.lastX,a=r-e.state.lastY,l=h((0,s.snapToGrid)(e.props.grid,i,a),2);if(i=l[0],a=l[1],!i&&!a)return;n=e.state.lastX+i,r=e.state.lastY+a}var d=(0,s.createCoreData)(y(e),n,r);if((0,c.default)("DraggableCore: handleDrag: %j",d),!1!==e.props.onDrag(t,d)&&!1!==e.mounted)e.setState({lastX:n,lastY:r});else try{e.handleDragStop(new MouseEvent("mouseup"))}catch(t){var u=document.createEvent("MouseEvents");u.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),e.handleDragStop(u)}}})),x(y(e),"handleDragStop",(function(t){if(e.state.dragging){var o=(0,s.getControlPosition)(t,e.state.touchIdentifier,y(e));if(null!=o){var n=o.x,r=o.y,i=(0,s.createCoreData)(y(e),n,r);if(!1===e.props.onStop(t,i)||!1===e.mounted)return!1;var l=e.findDOMNode();l&&e.props.enableUserSelectHack&&(0,a.removeUserSelectStyles)(l.ownerDocument),(0,c.default)("DraggableCore: handleDragStop: %j",i),e.setState({dragging:!1,lastX:NaN,lastY:NaN}),l&&((0,c.default)("DraggableCore: Removing handlers"),(0,a.removeEvent)(l.ownerDocument,E.move,e.handleDrag),(0,a.removeEvent)(l.ownerDocument,E.stop,e.handleDragStop))}}})),x(y(e),"onMouseDown",(function(t){return E=O,e.handleDragStart(t)})),x(y(e),"onMouseUp",(function(t){return E=O,e.handleDragStop(t)})),x(y(e),"onTouchStart",(function(t){return E=S,e.handleDragStart(t)})),x(y(e),"onTouchEnd",(function(t){return E=S,e.handleDragStop(t)})),e}return t=u,(o=[{key:"componentDidMount",value:function(){this.mounted=!0;var e=this.findDOMNode();e&&(0,a.addEvent)(e,S.start,this.onTouchStart,{passive:!1})}},{key:"componentWillUnmount",value:function(){this.mounted=!1;var e=this.findDOMNode();if(e){var t=e.ownerDocument;(0,a.removeEvent)(t,O.move,this.handleDrag),(0,a.removeEvent)(t,S.move,this.handleDrag),(0,a.removeEvent)(t,O.stop,this.handleDragStop),(0,a.removeEvent)(t,S.stop,this.handleDragStop),(0,a.removeEvent)(e,S.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&(0,a.removeUserSelectStyles)(t)}}},{key:"findDOMNode",value:function(){return this.props.nodeRef?this.props.nodeRef.current:i.default.findDOMNode(this)}},{key:"render",value:function(){return n.cloneElement(n.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}}])&&m(t.prototype,o),u}(n.Component);t.default=k,x(k,"displayName","DraggableCore"),x(k,"propTypes",{allowAnyClick:r.default.bool,disabled:r.default.bool,enableUserSelectHack:r.default.bool,offsetParent:function(e,t){if(e[t]&&1!==e[t].nodeType)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:r.default.arrayOf(r.default.number),handle:r.default.string,cancel:r.default.string,nodeRef:r.default.object,onStart:r.default.func,onDrag:r.default.func,onStop:r.default.func,onMouseDown:r.default.func,scale:r.default.number,className:l.dontSetMe,style:l.dontSetMe,transform:l.dontSetMe}),x(k,"defaultProps",{allowAnyClick:!1,cancel:null,disabled:!1,enableUserSelectHack:!0,offsetParent:null,handle:null,grid:null,transform:null,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1})},61193:(e,t,o)=>{"use strict";var n=o(75668),r=n.default,i=n.DraggableCore;e.exports=r,e.exports.default=r,e.exports.DraggableCore=i},81825:(e,t,o)=>{"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.matchesSelector=u,t.matchesSelectorAndParentsTo=function(e,t,o){var n=e;do{if(u(n,t))return!0;if(n===o)return!1;n=n.parentNode}while(n);return!1},t.addEvent=function(e,t,o,n){if(e){var r=l({capture:!0},n);e.addEventListener?e.addEventListener(t,o,r):e.attachEvent?e.attachEvent("on"+t,o):e["on"+t]=o}},t.removeEvent=function(e,t,o,n){if(e){var r=l({capture:!0},n);e.removeEventListener?e.removeEventListener(t,o,r):e.detachEvent?e.detachEvent("on"+t,o):e["on"+t]=null}},t.outerHeight=function(e){var t=e.clientHeight,o=e.ownerDocument.defaultView.getComputedStyle(e);return(t+=(0,r.int)(o.borderTopWidth))+(0,r.int)(o.borderBottomWidth)},t.outerWidth=function(e){var t=e.clientWidth,o=e.ownerDocument.defaultView.getComputedStyle(e);return(t+=(0,r.int)(o.borderLeftWidth))+(0,r.int)(o.borderRightWidth)},t.innerHeight=function(e){var t=e.clientHeight,o=e.ownerDocument.defaultView.getComputedStyle(e);return(t-=(0,r.int)(o.paddingTop))-(0,r.int)(o.paddingBottom)},t.innerWidth=function(e){var t=e.clientWidth,o=e.ownerDocument.defaultView.getComputedStyle(e);return(t-=(0,r.int)(o.paddingLeft))-(0,r.int)(o.paddingRight)},t.offsetXYFromParent=function(e,t,o){var n=t===t.ownerDocument.body?{left:0,top:0}:t.getBoundingClientRect();return{x:(e.clientX+t.scrollLeft-n.left)/o,y:(e.clientY+t.scrollTop-n.top)/o}},t.createCSSTransform=function(e,t){var o=p(e,t,"px");return c({},(0,i.browserPrefixToKey)("transform",i.default),o)},t.createSVGTransform=function(e,t){return p(e,t,"")},t.getTranslation=p,t.getTouch=function(e,t){return e.targetTouches&&(0,r.findInArray)(e.targetTouches,(function(e){return t===e.identifier}))||e.changedTouches&&(0,r.findInArray)(e.changedTouches,(function(e){return t===e.identifier}))},t.getTouchIdentifier=function(e){return e.targetTouches&&e.targetTouches[0]?e.targetTouches[0].identifier:e.changedTouches&&e.changedTouches[0]?e.changedTouches[0].identifier:void 0},t.addUserSelectStyles=function(e){if(e){var t=e.getElementById("react-draggable-style-el");t||((t=e.createElement("style")).type="text/css",t.id="react-draggable-style-el",t.innerHTML=".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n",t.innerHTML+=".react-draggable-transparent-selection *::selection {all: inherit;}\n",e.getElementsByTagName("head")[0].appendChild(t)),e.body&&h(e.body,"react-draggable-transparent-selection")}},t.removeUserSelectStyles=function(e){if(e)try{if(e.body&&f(e.body,"react-draggable-transparent-selection"),e.selection)e.selection.empty();else{var t=(e.defaultView||window).getSelection();t&&"Caret"!==t.type&&t.removeAllRanges()}}catch(e){}},t.addClassName=h,t.removeClassName=f;var r=o(9280),i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var o={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var s=r?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(o,i,s):o[i]=e[i]}return o.default=e,t&&t.set(e,o),o}(o(38650));function a(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){c(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var d="";function u(e,t){return d||(d=(0,r.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],(function(t){return(0,r.isFunction)(e[t])}))),!!(0,r.isFunction)(e[d])&&e[d](t)}function p(e,t,o){var n=e.x,r=e.y,i="translate(".concat(n).concat(o,",").concat(r).concat(o,")");if(t){var a="".concat("string"==typeof t.x?t.x:t.x+o),s="".concat("string"==typeof t.y?t.y:t.y+o);i="translate(".concat(a,", ").concat(s,")")+i}return i}function h(e,t){e.classList?e.classList.add(t):e.className.match(new RegExp("(?:^|\\s)".concat(t,"(?!\\S)")))||(e.className+=" ".concat(t))}function f(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(?:^|\\s)".concat(t,"(?!\\S)"),"g"),"")}},38650:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getPrefix=n,t.browserPrefixToKey=r,t.browserPrefixToStyle=function(e,t){return t?"-".concat(t.toLowerCase(),"-").concat(e):e},t.default=void 0;var o=["Moz","Webkit","O","ms"];function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transform";if("undefined"==typeof window||void 0===window.document)return"";var t=window.document.documentElement.style;if(e in t)return"";for(var n=0;n<o.length;n++)if(r(e,o[n])in t)return o[n];return""}function r(e,t){return t?"".concat(t).concat(function(e){for(var t="",o=!0,n=0;n<e.length;n++)o?(t+=e[n].toUpperCase(),o=!1):"-"===e[n]?o=!0:t+=e[n];return t}(e)):e}var i=n();t.default=i},55904:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){}},2849:(e,t,o)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getBoundPosition=function(e,t,o){if(!e.props.bounds)return[t,o];var a=e.props.bounds;a="string"==typeof a?a:function(e){return{left:e.left,top:e.top,right:e.right,bottom:e.bottom}}(a);var s=i(e);if("string"==typeof a){var l,c=s.ownerDocument,d=c.defaultView;if(!((l="parent"===a?s.parentNode:c.querySelector(a))instanceof d.HTMLElement))throw new Error('Bounds selector "'+a+'" could not find an element.');var u=d.getComputedStyle(s),p=d.getComputedStyle(l);a={left:-s.offsetLeft+(0,n.int)(p.paddingLeft)+(0,n.int)(u.marginLeft),top:-s.offsetTop+(0,n.int)(p.paddingTop)+(0,n.int)(u.marginTop),right:(0,r.innerWidth)(l)-(0,r.outerWidth)(s)-s.offsetLeft+(0,n.int)(p.paddingRight)-(0,n.int)(u.marginRight),bottom:(0,r.innerHeight)(l)-(0,r.outerHeight)(s)-s.offsetTop+(0,n.int)(p.paddingBottom)-(0,n.int)(u.marginBottom)}}return(0,n.isNum)(a.right)&&(t=Math.min(t,a.right)),(0,n.isNum)(a.bottom)&&(o=Math.min(o,a.bottom)),(0,n.isNum)(a.left)&&(t=Math.max(t,a.left)),(0,n.isNum)(a.top)&&(o=Math.max(o,a.top)),[t,o]},t.snapToGrid=function(e,t,o){return[Math.round(t/e[0])*e[0],Math.round(o/e[1])*e[1]]},t.canDragX=function(e){return"both"===e.props.axis||"x"===e.props.axis},t.canDragY=function(e){return"both"===e.props.axis||"y"===e.props.axis},t.getControlPosition=function(e,t,o){var n="number"==typeof t?(0,r.getTouch)(e,t):null;if("number"==typeof t&&!n)return null;var a=i(o),s=o.props.offsetParent||a.offsetParent||a.ownerDocument.body;return(0,r.offsetXYFromParent)(n||e,s,o.props.scale)},t.createCoreData=function(e,t,o){var r=e.state,a=!(0,n.isNum)(r.lastX),s=i(e);return a?{node:s,deltaX:0,deltaY:0,lastX:t,lastY:o,x:t,y:o}:{node:s,deltaX:t-r.lastX,deltaY:o-r.lastY,lastX:r.lastX,lastY:r.lastY,x:t,y:o}},t.createDraggableData=function(e,t){var o=e.props.scale;return{node:t.node,x:e.state.x+t.deltaX/o,y:e.state.y+t.deltaY/o,deltaX:t.deltaX/o,deltaY:t.deltaY/o,lastX:e.state.x,lastY:e.state.y}};var n=o(9280),r=o(81825);function i(e){var t=e.findDOMNode();if(!t)throw new Error("<DraggableCore>: Unmounted during event!");return t}},9280:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.findInArray=function(e,t){for(var o=0,n=e.length;o<n;o++)if(t.apply(t,[e[o],o,e]))return e[o]},t.isFunction=function(e){return"function"==typeof e||"[object Function]"===Object.prototype.toString.call(e)},t.isNum=function(e){return"number"==typeof e&&!isNaN(e)},t.int=function(e){return parseInt(e,10)},t.dontSetMe=function(e,t,o){if(e[t])return new Error("Invalid prop ".concat(t," passed to ").concat(o," - do not set this, set it on the child."))}},46871:(e,t,o)=>{"use strict";function n(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function r(e){this.setState(function(t){var o=this.constructor.getDerivedStateFromProps(e,t);return null!=o?o:null}.bind(this))}function i(e,t){try{var o=this.props,n=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(o,n)}finally{this.props=o,this.state=n}}function a(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var o=null,a=null,s=null;if("function"==typeof t.componentWillMount?o="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(o="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?a="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(a="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?s="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(s="UNSAFE_componentWillUpdate"),null!==o||null!==a||null!==s){var l=e.displayName||e.name,c="function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+l+" uses "+c+" but also contains the following legacy lifecycles:"+(null!==o?"\n  "+o:"")+(null!==a?"\n  "+a:"")+(null!==s?"\n  "+s:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=n,t.componentWillReceiveProps=r),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=i;var d=t.componentDidUpdate;t.componentDidUpdate=function(e,t,o){var n=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:o;d.call(this,e,t,n)}}return e}o.r(t),o.d(t,{polyfill:()=>a}),n.__suppressDeprecationWarning=!0,r.__suppressDeprecationWarning=!0,i.__suppressDeprecationWarning=!0},13180:(e,t,o)=>{"use strict";var n=o(95318);t.Z=void 0;var r=n(o(67154)),i=n(o(37316)),a=n(o(81506)),s=n(o(85354)),l=n(o(52127)),c=n(o(45697)),d=n(o(94184)),u=o(2221),p={active:c.default.bool,"aria-label":c.default.string,block:c.default.bool,color:c.default.string,disabled:c.default.bool,outline:c.default.bool,tag:u.tagPropType,innerRef:c.default.oneOfType([c.default.object,c.default.func,c.default.string]),onClick:c.default.func,size:c.default.string,children:c.default.node,className:c.default.string,cssModule:c.default.object,close:c.default.bool},h=function(e){function t(t){var o;return(o=e.call(this,t)||this).onClick=o.onClick.bind((0,a.default)(o)),o}(0,s.default)(t,e);var o=t.prototype;return o.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},o.render=function(){var e=this.props,t=e.active,o=e["aria-label"],n=e.block,a=e.className,s=e.close,c=e.cssModule,p=e.color,h=e.outline,f=e.size,g=e.tag,m=e.innerRef,v=(0,i.default)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);s&&void 0===v.children&&(v.children=l.default.createElement("span",{"aria-hidden":!0},"×"));var b="btn"+(h?"-outline":"")+"-"+p,y=(0,u.mapToCssModules)((0,d.default)(a,{close:s},s||"btn",s||b,!!f&&"btn-"+f,!!n&&"btn-block",{active:t,disabled:this.props.disabled}),c);v.href&&"button"===g&&(g="a");var w=s?"Close":null;return l.default.createElement(g,(0,r.default)({type:"button"===g&&v.onClick?"button":void 0},v,{className:y,ref:m,onClick:this.onClick,"aria-label":o||w}))},t}(l.default.Component);h.propTypes=p,h.defaultProps={color:"secondary",tag:"button"};var f=h;t.Z=f},8912:(e,t,o)=>{"use strict";var n=o(95318);t.Z=void 0;var r=n(o(67154)),i=n(o(37316)),a=n(o(52127)),s=n(o(45697)),l=n(o(94184)),c=o(2221),d={tag:c.tagPropType,"aria-label":s.default.string,className:s.default.string,cssModule:s.default.object,role:s.default.string,size:s.default.string,vertical:s.default.bool},u=function(e){var t=e.className,o=e.cssModule,n=e.size,s=e.vertical,d=e.tag,u=(0,i.default)(e,["className","cssModule","size","vertical","tag"]),p=(0,c.mapToCssModules)((0,l.default)(t,!!n&&"btn-group-"+n,s?"btn-group-vertical":"btn-group"),o);return a.default.createElement(d,(0,r.default)({},u,{className:p}))};u.propTypes=d,u.defaultProps={tag:"div",role:"group"};var p=u;t.Z=p},31332:(e,t,o)=>{"use strict";var n=o(95318);t.Z=void 0;var r=n(o(67154)),i=n(o(37316)),a=n(o(52127)),s=n(o(45697)),l=n(o(94184)),c=o(2221),d={tag:c.tagPropType,inverse:s.default.bool,color:s.default.string,body:s.default.bool,outline:s.default.bool,className:s.default.string,cssModule:s.default.object,innerRef:s.default.oneOfType([s.default.object,s.default.string,s.default.func])},u=function(e){var t=e.className,o=e.cssModule,n=e.color,s=e.body,d=e.inverse,u=e.outline,p=e.tag,h=e.innerRef,f=(0,i.default)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),g=(0,c.mapToCssModules)((0,l.default)(t,"card",!!d&&"text-white",!!s&&"card-body",!!n&&(u?"border":"bg")+"-"+n),o);return a.default.createElement(p,(0,r.default)({},f,{className:g,ref:h}))};u.propTypes=d,u.defaultProps={tag:"div"};var p=u;t.Z=p},12686:(e,t,o)=>{"use strict";var n=o(95318);t.Z=void 0;var r=n(o(67154)),i=n(o(37316)),a=n(o(52127)),s=n(o(45697)),l=n(o(94184)),c=o(2221),d={tag:c.tagPropType,className:s.default.string,cssModule:s.default.object,innerRef:s.default.oneOfType([s.default.object,s.default.string,s.default.func])},u=function(e){var t=e.className,o=e.cssModule,n=e.innerRef,s=e.tag,d=(0,i.default)(e,["className","cssModule","innerRef","tag"]),u=(0,c.mapToCssModules)((0,l.default)(t,"card-body"),o);return a.default.createElement(s,(0,r.default)({},d,{className:u,ref:n}))};u.propTypes=d,u.defaultProps={tag:"div"};var p=u;t.Z=p},99987:(e,t,o)=>{"use strict";var n=o(95318);t.Z=void 0;var r=n(o(67154)),i=n(o(37316)),a=n(o(52127)),s=n(o(45697)),l=n(o(94184)),c=o(2221),d={tag:c.tagPropType,className:s.default.string,cssModule:s.default.object},u=function(e){var t=e.className,o=e.cssModule,n=e.tag,s=(0,i.default)(e,["className","cssModule","tag"]),d=(0,c.mapToCssModules)((0,l.default)(t,"card-footer"),o);return a.default.createElement(n,(0,r.default)({},s,{className:d}))};u.propTypes=d,u.defaultProps={tag:"div"};var p=u;t.Z=p},77700:(e,t,o)=>{"use strict";var n=o(95318);t.Z=void 0;var r=n(o(67154)),i=n(o(37316)),a=n(o(52127)),s=n(o(45697)),l=n(o(94184)),c=o(2221),d={tag:c.tagPropType,className:s.default.string,cssModule:s.default.object},u=function(e){var t=e.className,o=e.cssModule,n=e.tag,s=(0,i.default)(e,["className","cssModule","tag"]),d=(0,c.mapToCssModules)((0,l.default)(t,"card-header"),o);return a.default.createElement(n,(0,r.default)({},s,{className:d}))};u.propTypes=d,u.defaultProps={tag:"div"};var p=u;t.Z=p},60721:(e,t,o)=>{"use strict";var n=o(95318);t.Z=void 0;var r=n(o(67154)),i=n(o(37316)),a=n(o(52127)),s=n(o(45697)),l=n(o(94184)),c=o(2221),d={tag:c.tagPropType,top:s.default.bool,bottom:s.default.bool,className:s.default.string,cssModule:s.default.object},u=function(e){var t=e.className,o=e.cssModule,n=e.top,s=e.bottom,d=e.tag,u=(0,i.default)(e,["className","cssModule","top","bottom","tag"]),p="card-img";n&&(p="card-img-top"),s&&(p="card-img-bottom");var h=(0,c.mapToCssModules)((0,l.default)(t,p),o);return a.default.createElement(d,(0,r.default)({},u,{className:h}))};u.propTypes=d,u.defaultProps={tag:"img"};var p=u;t.Z=p},21498:(e,t,o)=>{"use strict";var n=o(95318);t.Z=void 0;var r=n(o(67154)),i=n(o(37316)),a=n(o(52127)),s=n(o(45697)),l=n(o(94184)),c=o(2221),d=s.default.oneOfType([s.default.number,s.default.string]),u=s.default.oneOfType([s.default.bool,s.default.number,s.default.string,s.default.shape({size:s.default.oneOfType([s.default.bool,s.default.number,s.default.string]),order:d,offset:d})]),p={tag:c.tagPropType,xs:u,sm:u,md:u,lg:u,xl:u,className:s.default.string,cssModule:s.default.object,widths:s.default.array},h=function(e,t,o){return!0===o||""===o?e?"col":"col-"+t:"auto"===o?e?"col-auto":"col-"+t+"-auto":e?"col-"+o:"col-"+t+"-"+o},f=function(e){var t=e.className,o=e.cssModule,n=e.widths,s=e.tag,d=(0,i.default)(e,["className","cssModule","widths","tag"]),u=[];n.forEach((function(t,n){var r=e[t];if(delete d[t],r||""===r){var i=!n;if((0,c.isObject)(r)){var a,s=i?"-":"-"+t+"-",p=h(i,t,r.size);u.push((0,c.mapToCssModules)((0,l.default)(((a={})[p]=r.size||""===r.size,a["order"+s+r.order]=r.order||0===r.order,a["offset"+s+r.offset]=r.offset||0===r.offset,a)),o))}else{var f=h(i,t,r);u.push(f)}}})),u.length||u.push("col");var p=(0,c.mapToCssModules)((0,l.default)(t,u),o);return a.default.createElement(s,(0,r.default)({},d,{className:p}))};f.propTypes=p,f.defaultProps={tag:"div",widths:["xs","sm","md","lg","xl"]};var g=f;t.Z=g},48661:(e,t,o)=>{"use strict";var n=o(95318),r=o(20862);t.Z=void 0;var i,a=n(o(67154)),s=n(o(37316)),l=n(o(81506)),c=n(o(85354)),d=n(o(59713)),u=r(o(52127)),p=n(o(45697)),h=n(o(94184)),f=o(793),g=o(2221);function m(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function v(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?m(Object(o),!0).forEach((function(t){(0,d.default)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):m(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var b=v(v({},f.Transition.propTypes),{},{isOpen:p.default.bool,children:p.default.oneOfType([p.default.arrayOf(p.default.node),p.default.node]),tag:g.tagPropType,className:p.default.node,navbar:p.default.bool,cssModule:p.default.object,innerRef:p.default.oneOfType([p.default.func,p.default.string,p.default.object])}),y=v(v({},f.Transition.defaultProps),{},{isOpen:!1,appear:!1,enter:!0,exit:!0,tag:"div",timeout:g.TransitionTimeouts.Collapse}),w=((i={})[g.TransitionStatuses.ENTERING]="collapsing",i[g.TransitionStatuses.ENTERED]="collapse show",i[g.TransitionStatuses.EXITING]="collapsing",i[g.TransitionStatuses.EXITED]="collapse",i);function x(e){return e.scrollHeight}var S=function(e){function t(t){var o;return(o=e.call(this,t)||this).state={height:null},["onEntering","onEntered","onExit","onExiting","onExited"].forEach((function(e){o[e]=o[e].bind((0,l.default)(o))})),o}(0,c.default)(t,e);var o=t.prototype;return o.onEntering=function(e,t){this.setState({height:x(e)}),this.props.onEntering(e,t)},o.onEntered=function(e,t){this.setState({height:null}),this.props.onEntered(e,t)},o.onExit=function(e){this.setState({height:x(e)}),this.props.onExit(e)},o.onExiting=function(e){e.offsetHeight,this.setState({height:0}),this.props.onExiting(e)},o.onExited=function(e){this.setState({height:null}),this.props.onExited(e)},o.render=function(){var e=this,t=this.props,o=t.tag,n=t.isOpen,r=t.className,i=t.navbar,l=t.cssModule,c=t.children,d=(t.innerRef,(0,s.default)(t,["tag","isOpen","className","navbar","cssModule","children","innerRef"])),p=this.state.height,m=(0,g.pick)(d,g.TransitionPropTypeKeys),b=(0,g.omit)(d,g.TransitionPropTypeKeys);return u.default.createElement(f.Transition,(0,a.default)({},m,{in:n,onEntering:this.onEntering,onEntered:this.onEntered,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}),(function(t){var n=function(e){return w[e]||"collapse"}(t),s=(0,g.mapToCssModules)((0,h.default)(r,n,i&&"navbar-collapse"),l),d=null===p?null:{height:p};return u.default.createElement(o,(0,a.default)({},b,{style:v(v({},b.style),d),className:s,ref:e.props.innerRef}),c)}))},t}(u.Component);S.propTypes=b,S.defaultProps=y;var O=S;t.Z=O},88859:(e,t,o)=>{"use strict";var n=o(95318);t.Z=void 0;var r=n(o(67154)),i=n(o(37316)),a=n(o(52127)),s=n(o(45697)),l=n(o(94184)),c=o(2221),d={tag:c.tagPropType,fluid:s.default.oneOfType([s.default.bool,s.default.string]),className:s.default.string,cssModule:s.default.object},u=function(e){var t=e.className,o=e.cssModule,n=e.fluid,s=e.tag,d=(0,i.default)(e,["className","cssModule","fluid","tag"]),u="container";!0===n?u="container-fluid":n&&(u="container-"+n);var p=(0,c.mapToCssModules)((0,l.default)(t,u),o);return a.default.createElement(s,(0,r.default)({},d,{className:p}))};u.propTypes=d,u.defaultProps={tag:"div"};var p=u;t.Z=p},4678:(e,t,o)=>{"use strict";var n=o(95318);t.__esModule=!0,t.default=void 0;var r=n(o(67154)),i=n(o(37316)),a=n(o(59713)),s=n(o(52127)),l=n(o(45697)),c=n(o(94184)),d=o(793),u=o(2221);function p(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function h(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?p(Object(o),!0).forEach((function(t){(0,a.default)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):p(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var f=h(h({},d.Transition.propTypes),{},{children:l.default.oneOfType([l.default.arrayOf(l.default.node),l.default.node]),tag:u.tagPropType,baseClass:l.default.string,baseClassActive:l.default.string,className:l.default.string,cssModule:l.default.object,innerRef:l.default.oneOfType([l.default.object,l.default.string,l.default.func])}),g=h(h({},d.Transition.defaultProps),{},{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:u.TransitionTimeouts.Fade,appear:!0,enter:!0,exit:!0,in:!0});function m(e){var t=e.tag,o=e.baseClass,n=e.baseClassActive,a=e.className,l=e.cssModule,p=e.children,h=e.innerRef,f=(0,i.default)(e,["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"]),g=(0,u.pick)(f,u.TransitionPropTypeKeys),m=(0,u.omit)(f,u.TransitionPropTypeKeys);return s.default.createElement(d.Transition,g,(function(e){var i="entered"===e,d=(0,u.mapToCssModules)((0,c.default)(a,o,i&&n),l);return s.default.createElement(t,(0,r.default)({className:d},m,{ref:h}),p)}))}m.propTypes=f,m.defaultProps=g;var v=m;t.default=v},53883:(e,t,o)=>{"use strict";var n=o(20862),r=o(95318);t.Z=void 0;var i=r(o(67154)),a=r(o(37316)),s=r(o(81506)),l=r(o(85354)),c=n(o(52127)),d=r(o(45697)),u=r(o(94184)),p=o(2221),h={children:d.default.node,inline:d.default.bool,tag:p.tagPropType,innerRef:d.default.oneOfType([d.default.object,d.default.func,d.default.string]),className:d.default.string,cssModule:d.default.object},f=function(e){function t(t){var o;return(o=e.call(this,t)||this).getRef=o.getRef.bind((0,s.default)(o)),o.submit=o.submit.bind((0,s.default)(o)),o}(0,l.default)(t,e);var o=t.prototype;return o.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},o.submit=function(){this.ref&&this.ref.submit()},o.render=function(){var e=this.props,t=e.className,o=e.cssModule,n=e.inline,r=e.tag,s=e.innerRef,l=(0,a.default)(e,["className","cssModule","inline","tag","innerRef"]),d=(0,p.mapToCssModules)((0,u.default)(t,!!n&&"form-inline"),o);return c.default.createElement(r,(0,i.default)({},l,{ref:s,className:d}))},t}(c.Component);f.propTypes=h,f.defaultProps={tag:"form"};var g=f;t.Z=g},32521:(e,t,o)=>{"use strict";var n=o(95318);t.Z=void 0;var r=n(o(67154)),i=n(o(37316)),a=n(o(52127)),s=n(o(45697)),l=n(o(94184)),c=o(2221),d={children:s.default.node,tag:c.tagPropType,className:s.default.string,cssModule:s.default.object,valid:s.default.bool,tooltip:s.default.bool},u=function(e){var t=e.className,o=e.cssModule,n=e.valid,s=e.tooltip,d=e.tag,u=(0,i.default)(e,["className","cssModule","valid","tooltip","tag"]),p=s?"tooltip":"feedback",h=(0,c.mapToCssModules)((0,l.default)(t,n?"valid-"+p:"invalid-"+p),o);return a.default.createElement(d,(0,r.default)({},u,{className:h}))};u.propTypes=d,u.defaultProps={tag:"div",valid:void 0};var p=u;t.Z=p},42443:(e,t,o)=>{"use strict";var n=o(95318);t.Z=void 0;var r=n(o(67154)),i=n(o(37316)),a=n(o(52127)),s=n(o(45697)),l=n(o(94184)),c=o(2221),d={children:s.default.node,row:s.default.bool,check:s.default.bool,inline:s.default.bool,disabled:s.default.bool,tag:c.tagPropType,className:s.default.string,cssModule:s.default.object},u=function(e){var t=e.className,o=e.cssModule,n=e.row,s=e.disabled,d=e.check,u=e.inline,p=e.tag,h=(0,i.default)(e,["className","cssModule","row","disabled","check","inline","tag"]),f=(0,c.mapToCssModules)((0,l.default)(t,!!n&&"row",d?"form-check":"form-group",!(!d||!u)&&"form-check-inline",!(!d||!s)&&"disabled"),o);return"fieldset"===p&&(h.disabled=s),a.default.createElement(p,(0,r.default)({},h,{className:f}))};u.propTypes=d,u.defaultProps={tag:"div"};var p=u;t.Z=p},12881:(e,t,o)=>{"use strict";var n=o(95318);t.Z=void 0;var r=n(o(67154)),i=n(o(37316)),a=n(o(52127)),s=n(o(45697)),l=n(o(94184)),c=o(2221),d={children:s.default.node,inline:s.default.bool,tag:c.tagPropType,color:s.default.string,className:s.default.string,cssModule:s.default.object},u=function(e){var t=e.className,o=e.cssModule,n=e.inline,s=e.color,d=e.tag,u=(0,i.default)(e,["className","cssModule","inline","color","tag"]),p=(0,c.mapToCssModules)((0,l.default)(t,!n&&"form-text",!!s&&"text-"+s),o);return a.default.createElement(d,(0,r.default)({},u,{className:p}))};u.propTypes=d,u.defaultProps={tag:"small",color:"muted"};var p=u;t.Z=p},62646:(e,t,o)=>{"use strict";var n=o(95318);t.Z=void 0;var r=n(o(67154)),i=n(o(37316)),a=n(o(81506)),s=n(o(85354)),l=n(o(52127)),c=n(o(45697)),d=n(o(94184)),u=o(2221),p={children:c.default.node,type:c.default.string,size:c.default.oneOfType([c.default.number,c.default.string]),bsSize:c.default.string,valid:c.default.bool,invalid:c.default.bool,tag:u.tagPropType,innerRef:c.default.oneOfType([c.default.object,c.default.func,c.default.string]),plaintext:c.default.bool,addon:c.default.bool,className:c.default.string,cssModule:c.default.object},h=function(e){function t(t){var o;return(o=e.call(this,t)||this).getRef=o.getRef.bind((0,a.default)(o)),o.focus=o.focus.bind((0,a.default)(o)),o}(0,s.default)(t,e);var o=t.prototype;return o.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},o.focus=function(){this.ref&&this.ref.focus()},o.render=function(){var e=this.props,t=e.className,o=e.cssModule,n=e.type,a=e.bsSize,s=e.valid,c=e.invalid,p=e.tag,h=e.addon,f=e.plaintext,g=e.innerRef,m=(0,i.default)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),v=["radio","checkbox"].indexOf(n)>-1,b=new RegExp("\\D","g"),y=p||("select"===n||"textarea"===n?n:"input"),w="form-control";f?(w+="-plaintext",y=p||"input"):"file"===n?w+="-file":"range"===n?w+="-range":v&&(w=h?null:"form-check-input"),m.size&&b.test(m.size)&&((0,u.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),a=m.size,delete m.size);var x=(0,u.mapToCssModules)((0,d.default)(t,c&&"is-invalid",s&&"is-valid",!!a&&"form-control-"+a,w),o);return("input"===y||p&&"function"==typeof p)&&(m.type=n),m.children&&!f&&"select"!==n&&"string"==typeof y&&"select"!==y&&((0,u.warnOnce)('Input with a type of "'+n+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete m.children),l.default.createElement(y,(0,r.default)({},m,{ref:g,className:x,"aria-invalid":c}))},t}(l.default.Component);h.propTypes=p,h.defaultProps={type:"text"};var f=h;t.Z=f},43331:(e,t,o)=>{"use strict";var n=o(95318);t.Z=void 0;var r=n(o(67154)),i=n(o(37316)),a=n(o(52127)),s=n(o(45697)),l=n(o(94184)),c=o(2221),d={tag:c.tagPropType,size:s.default.string,className:s.default.string,cssModule:s.default.object},u=function(e){var t=e.className,o=e.cssModule,n=e.tag,s=e.size,d=(0,i.default)(e,["className","cssModule","tag","size"]),u=(0,c.mapToCssModules)((0,l.default)(t,"input-group",s?"input-group-"+s:null),o);return a.default.createElement(n,(0,r.default)({},d,{className:u}))};u.propTypes=d,u.defaultProps={tag:"div"};var p=u;t.Z=p},95440:(e,t,o)=>{"use strict";var n=o(95318);t.Z=void 0;var r=n(o(67154)),i=n(o(37316)),a=n(o(52127)),s=n(o(45697)),l=n(o(94184)),c=o(2221),d=n(o(77966)),u={tag:c.tagPropType,addonType:s.default.oneOf(["prepend","append"]).isRequired,children:s.default.node,className:s.default.string,cssModule:s.default.object},p=function(e){var t=e.className,o=e.cssModule,n=e.tag,s=e.addonType,u=e.children,p=(0,i.default)(e,["className","cssModule","tag","addonType","children"]),h=(0,c.mapToCssModules)((0,l.default)(t,"input-group-"+s),o);return"string"==typeof u?a.default.createElement(n,(0,r.default)({},p,{className:h}),a.default.createElement(d.default,{children:u})):a.default.createElement(n,(0,r.default)({},p,{className:h,children:u}))};p.propTypes=u,p.defaultProps={tag:"div"};var h=p;t.Z=h},77966:(e,t,o)=>{"use strict";var n=o(95318);t.__esModule=!0,t.default=void 0;var r=n(o(67154)),i=n(o(37316)),a=n(o(52127)),s=n(o(45697)),l=n(o(94184)),c=o(2221),d={tag:c.tagPropType,className:s.default.string,cssModule:s.default.object},u=function(e){var t=e.className,o=e.cssModule,n=e.tag,s=(0,i.default)(e,["className","cssModule","tag"]),d=(0,c.mapToCssModules)((0,l.default)(t,"input-group-text"),o);return a.default.createElement(n,(0,r.default)({},s,{className:d}))};u.propTypes=d,u.defaultProps={tag:"span"};var p=u;t.default=p},45466:(e,t,o)=>{"use strict";var n=o(95318);t.Z=void 0;var r=n(o(67154)),i=n(o(37316)),a=n(o(52127)),s=n(o(45697)),l=n(o(94184)),c=o(2221),d=s.default.oneOfType([s.default.number,s.default.string]),u=s.default.oneOfType([s.default.bool,s.default.string,s.default.number,s.default.shape({size:d,order:d,offset:d})]),p={children:s.default.node,hidden:s.default.bool,check:s.default.bool,size:s.default.string,for:s.default.string,tag:c.tagPropType,className:s.default.string,cssModule:s.default.object,xs:u,sm:u,md:u,lg:u,xl:u,widths:s.default.array},h=function(e,t,o){return!0===o||""===o?e?"col":"col-"+t:"auto"===o?e?"col-auto":"col-"+t+"-auto":e?"col-"+o:"col-"+t+"-"+o},f=function(e){var t=e.className,o=e.cssModule,n=e.hidden,s=e.widths,d=e.tag,u=e.check,p=e.size,f=e.for,g=(0,i.default)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),m=[];s.forEach((function(t,n){var r=e[t];if(delete g[t],r||""===r){var i,a=!n;if((0,c.isObject)(r)){var s,d=a?"-":"-"+t+"-";i=h(a,t,r.size),m.push((0,c.mapToCssModules)((0,l.default)(((s={})[i]=r.size||""===r.size,s["order"+d+r.order]=r.order||0===r.order,s["offset"+d+r.offset]=r.offset||0===r.offset,s))),o)}else i=h(a,t,r),m.push(i)}}));var v=(0,c.mapToCssModules)((0,l.default)(t,!!n&&"sr-only",!!u&&"form-check-label",!!p&&"col-form-label-"+p,m,!!m.length&&"col-form-label"),o);return a.default.createElement(d,(0,r.default)({htmlFor:f},g,{className:v}))};f.propTypes=p,f.defaultProps={tag:"label",widths:["xs","sm","md","lg","xl"]};var g=f;t.Z=g},4662:(e,t,o)=>{"use strict";var n=o(95318);t.Z=void 0;var r=n(o(67154)),i=n(o(37316)),a=n(o(52127)),s=n(o(45697)),l=n(o(94184)),c=o(2221),d={tag:c.tagPropType,flush:s.default.bool,className:s.default.string,cssModule:s.default.object,horizontal:s.default.oneOfType([s.default.bool,s.default.string])},u=function(e){var t=e.className,o=e.cssModule,n=e.tag,s=e.flush,d=e.horizontal,u=(0,i.default)(e,["className","cssModule","tag","flush","horizontal"]),p=(0,c.mapToCssModules)((0,l.default)(t,"list-group",s?"list-group-flush":function(e){return!1!==e&&(!0===e||"xs"===e?"list-group-horizontal":"list-group-horizontal-"+e)}(d)),o);return a.default.createElement(n,(0,r.default)({},u,{className:p}))};u.propTypes=d,u.defaultProps={tag:"ul",horizontal:!1};var p=u;t.Z=p},87525:(e,t,o)=>{"use strict";var n=o(95318);t.Z=void 0;var r=n(o(67154)),i=n(o(37316)),a=n(o(52127)),s=n(o(45697)),l=n(o(94184)),c=o(2221),d={tag:c.tagPropType,active:s.default.bool,disabled:s.default.bool,color:s.default.string,action:s.default.bool,className:s.default.any,cssModule:s.default.object},u=function(e){e.preventDefault()},p=function(e){var t=e.className,o=e.cssModule,n=e.tag,s=e.active,d=e.disabled,p=e.action,h=e.color,f=(0,i.default)(e,["className","cssModule","tag","active","disabled","action","color"]),g=(0,c.mapToCssModules)((0,l.default)(t,!!s&&"active",!!d&&"disabled",!!p&&"list-group-item-action",!!h&&"list-group-item-"+h,"list-group-item"),o);return d&&(f.onClick=u),a.default.createElement(n,(0,r.default)({},f,{className:g}))};p.propTypes=d,p.defaultProps={tag:"li"};var h=p;t.Z=h},52474:(e,t,o)=>{"use strict";var n=o(95318);t.Z=void 0;var r=n(o(59713)),i=n(o(67154)),a=n(o(81506)),s=n(o(85354)),l=n(o(52127)),c=n(o(45697)),d=n(o(94184)),u=n(o(99970)),p=n(o(4678)),h=o(2221);function f(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function g(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?f(Object(o),!0).forEach((function(t){(0,r.default)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):f(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function m(){}var v=c.default.shape(p.default.propTypes),b={isOpen:c.default.bool,autoFocus:c.default.bool,centered:c.default.bool,scrollable:c.default.bool,size:c.default.string,toggle:c.default.func,keyboard:c.default.bool,role:c.default.string,labelledBy:c.default.string,backdrop:c.default.oneOfType([c.default.bool,c.default.oneOf(["static"])]),onEnter:c.default.func,onExit:c.default.func,onOpened:c.default.func,onClosed:c.default.func,children:c.default.node,className:c.default.string,wrapClassName:c.default.string,modalClassName:c.default.string,backdropClassName:c.default.string,contentClassName:c.default.string,external:c.default.node,fade:c.default.bool,cssModule:c.default.object,zIndex:c.default.oneOfType([c.default.number,c.default.string]),backdropTransition:v,modalTransition:v,innerRef:c.default.oneOfType([c.default.object,c.default.string,c.default.func]),unmountOnClose:c.default.bool,returnFocusAfterClose:c.default.bool,container:h.targetPropType,trapFocus:c.default.bool},y=Object.keys(b),w={isOpen:!1,autoFocus:!0,centered:!1,scrollable:!1,role:"dialog",backdrop:!0,keyboard:!0,zIndex:1050,fade:!0,onOpened:m,onClosed:m,modalTransition:{timeout:h.TransitionTimeouts.Modal},backdropTransition:{mountOnEnter:!0,timeout:h.TransitionTimeouts.Fade},unmountOnClose:!0,returnFocusAfterClose:!0,container:"body",trapFocus:!1},x=function(e){function t(t){var o;return(o=e.call(this,t)||this)._element=null,o._originalBodyPadding=null,o.getFocusableChildren=o.getFocusableChildren.bind((0,a.default)(o)),o.handleBackdropClick=o.handleBackdropClick.bind((0,a.default)(o)),o.handleBackdropMouseDown=o.handleBackdropMouseDown.bind((0,a.default)(o)),o.handleEscape=o.handleEscape.bind((0,a.default)(o)),o.handleStaticBackdropAnimation=o.handleStaticBackdropAnimation.bind((0,a.default)(o)),o.handleTab=o.handleTab.bind((0,a.default)(o)),o.onOpened=o.onOpened.bind((0,a.default)(o)),o.onClosed=o.onClosed.bind((0,a.default)(o)),o.manageFocusAfterClose=o.manageFocusAfterClose.bind((0,a.default)(o)),o.clearBackdropAnimationTimeout=o.clearBackdropAnimationTimeout.bind((0,a.default)(o)),o.trapFocus=o.trapFocus.bind((0,a.default)(o)),o.state={isOpen:!1,showStaticBackdropAnimation:!1},o}(0,s.default)(t,e);var o=t.prototype;return o.componentDidMount=function(){var e=this.props,t=e.isOpen,o=e.autoFocus,n=e.onEnter;t&&(this.init(),this.setState({isOpen:!0}),o&&this.setFocus()),n&&n(),document.addEventListener("focus",this.trapFocus,!0),this._isMounted=!0},o.componentDidUpdate=function(e,t){if(this.props.isOpen&&!e.isOpen)return this.init(),void this.setState({isOpen:!0});this.props.autoFocus&&this.state.isOpen&&!t.isOpen&&this.setFocus(),this._element&&e.zIndex!==this.props.zIndex&&(this._element.style.zIndex=this.props.zIndex)},o.componentWillUnmount=function(){this.clearBackdropAnimationTimeout(),this.props.onExit&&this.props.onExit(),this._element&&(this.destroy(),(this.props.isOpen||this.state.isOpen)&&this.close()),document.removeEventListener("focus",this.trapFocus,!0),this._isMounted=!1},o.trapFocus=function(e){if(this.props.trapFocus&&this._element&&!(this._dialog&&this._dialog.parentNode===e.target||this.modalIndex<t.openCount-1)){for(var o=this.getFocusableChildren(),n=0;n<o.length;n++)if(o[n]===e.target)return;o.length>0&&(e.preventDefault(),e.stopPropagation(),o[0].focus())}},o.onOpened=function(e,t){this.props.onOpened(),(this.props.modalTransition.onEntered||m)(e,t)},o.onClosed=function(e){var t=this.props.unmountOnClose;this.props.onClosed(),(this.props.modalTransition.onExited||m)(e),t&&this.destroy(),this.close(),this._isMounted&&this.setState({isOpen:!1})},o.setFocus=function(){this._dialog&&this._dialog.parentNode&&"function"==typeof this._dialog.parentNode.focus&&this._dialog.parentNode.focus()},o.getFocusableChildren=function(){return this._element.querySelectorAll(h.focusableElements.join(", "))},o.getFocusedChild=function(){var e,t=this.getFocusableChildren();try{e=document.activeElement}catch(o){e=t[0]}return e},o.handleBackdropClick=function(e){if(e.target===this._mouseDownElement){e.stopPropagation();var t=this._dialog?this._dialog.parentNode:null;if(t&&e.target===t&&"static"===this.props.backdrop&&this.handleStaticBackdropAnimation(),!this.props.isOpen||!0!==this.props.backdrop)return;t&&e.target===t&&this.props.toggle&&this.props.toggle(e)}},o.handleTab=function(e){if(9===e.which&&!(this.modalIndex<t.openCount-1)){var o=this.getFocusableChildren(),n=o.length;if(0!==n){for(var r=this.getFocusedChild(),i=0,a=0;a<n;a+=1)if(o[a]===r){i=a;break}e.shiftKey&&0===i?(e.preventDefault(),o[n-1].focus()):e.shiftKey||i!==n-1||(e.preventDefault(),o[0].focus())}}},o.handleBackdropMouseDown=function(e){this._mouseDownElement=e.target},o.handleEscape=function(e){this.props.isOpen&&e.keyCode===h.keyCodes.esc&&this.props.toggle&&(this.props.keyboard?(e.preventDefault(),e.stopPropagation(),this.props.toggle(e)):"static"===this.props.backdrop&&(e.preventDefault(),e.stopPropagation(),this.handleStaticBackdropAnimation()))},o.handleStaticBackdropAnimation=function(){var e=this;this.clearBackdropAnimationTimeout(),this.setState({showStaticBackdropAnimation:!0}),this._backdropAnimationTimeout=setTimeout((function(){e.setState({showStaticBackdropAnimation:!1})}),100)},o.init=function(){try{this._triggeringElement=document.activeElement}catch(e){this._triggeringElement=null}this._element||(this._element=document.createElement("div"),this._element.setAttribute("tabindex","-1"),this._element.style.position="relative",this._element.style.zIndex=this.props.zIndex,this._mountContainer=(0,h.getTarget)(this.props.container),this._mountContainer.appendChild(this._element)),this._originalBodyPadding=(0,h.getOriginalBodyPadding)(),(0,h.conditionallyUpdateScrollbar)(),0===t.openCount&&(document.body.className=(0,d.default)(document.body.className,(0,h.mapToCssModules)("modal-open",this.props.cssModule))),this.modalIndex=t.openCount,t.openCount+=1},o.destroy=function(){this._element&&(this._mountContainer.removeChild(this._element),this._element=null),this.manageFocusAfterClose()},o.manageFocusAfterClose=function(){if(this._triggeringElement){var e=this.props.returnFocusAfterClose;this._triggeringElement.focus&&e&&this._triggeringElement.focus(),this._triggeringElement=null}},o.close=function(){if(t.openCount<=1){var e=(0,h.mapToCssModules)("modal-open",this.props.cssModule),o=new RegExp("(^| )"+e+"( |$)");document.body.className=document.body.className.replace(o," ").trim()}this.manageFocusAfterClose(),t.openCount=Math.max(0,t.openCount-1),(0,h.setScrollbarWidth)(this._originalBodyPadding)},o.renderModalDialog=function(){var e,t=this,o=(0,h.omit)(this.props,y);return l.default.createElement("div",(0,i.default)({},o,{className:(0,h.mapToCssModules)((0,d.default)("modal-dialog",this.props.className,(e={},e["modal-"+this.props.size]=this.props.size,e["modal-dialog-centered"]=this.props.centered,e["modal-dialog-scrollable"]=this.props.scrollable,e)),this.props.cssModule),role:"document",ref:function(e){t._dialog=e}}),l.default.createElement("div",{className:(0,h.mapToCssModules)((0,d.default)("modal-content",this.props.contentClassName),this.props.cssModule)},this.props.children))},o.render=function(){var e=this.props.unmountOnClose;if(this._element&&(this.state.isOpen||!e)){var t=!!this._element&&!this.state.isOpen&&!e;this._element.style.display=t?"none":"block";var o=this.props,n=o.wrapClassName,r=o.modalClassName,a=o.backdropClassName,s=o.cssModule,c=o.isOpen,f=o.backdrop,m=o.role,v=o.labelledBy,b=o.external,y=o.innerRef,w={onClick:this.handleBackdropClick,onMouseDown:this.handleBackdropMouseDown,onKeyUp:this.handleEscape,onKeyDown:this.handleTab,style:{display:"block"},"aria-labelledby":v,role:m,tabIndex:"-1"},x=this.props.fade,S=g(g(g({},p.default.defaultProps),this.props.modalTransition),{},{baseClass:x?this.props.modalTransition.baseClass:"",timeout:x?this.props.modalTransition.timeout:0}),O=g(g(g({},p.default.defaultProps),this.props.backdropTransition),{},{baseClass:x?this.props.backdropTransition.baseClass:"",timeout:x?this.props.backdropTransition.timeout:0}),E=f&&(x?l.default.createElement(p.default,(0,i.default)({},O,{in:c&&!!f,cssModule:s,className:(0,h.mapToCssModules)((0,d.default)("modal-backdrop",a),s)})):l.default.createElement("div",{className:(0,h.mapToCssModules)((0,d.default)("modal-backdrop","show",a),s)}));return l.default.createElement(u.default,{node:this._element},l.default.createElement("div",{className:(0,h.mapToCssModules)(n)},l.default.createElement(p.default,(0,i.default)({},w,S,{in:c,onEntered:this.onOpened,onExited:this.onClosed,cssModule:s,className:(0,h.mapToCssModules)((0,d.default)("modal",r,this.state.showStaticBackdropAnimation&&"modal-static"),s),innerRef:y}),b,this.renderModalDialog()),E))}return null},o.clearBackdropAnimationTimeout=function(){this._backdropAnimationTimeout&&(clearTimeout(this._backdropAnimationTimeout),this._backdropAnimationTimeout=void 0)},t}(l.default.Component);x.propTypes=b,x.defaultProps=w,x.openCount=0;var S=x;t.Z=S},68975:(e,t,o)=>{"use strict";var n=o(95318);t.Z=void 0;var r=n(o(67154)),i=n(o(37316)),a=n(o(52127)),s=n(o(45697)),l=n(o(94184)),c=o(2221),d={tag:c.tagPropType,className:s.default.string,cssModule:s.default.object},u=function(e){var t=e.className,o=e.cssModule,n=e.tag,s=(0,i.default)(e,["className","cssModule","tag"]),d=(0,c.mapToCssModules)((0,l.default)(t,"modal-body"),o);return a.default.createElement(n,(0,r.default)({},s,{className:d}))};u.propTypes=d,u.defaultProps={tag:"div"};var p=u;t.Z=p},15549:(e,t,o)=>{"use strict";var n=o(95318);t.Z=void 0;var r=n(o(67154)),i=n(o(37316)),a=n(o(52127)),s=n(o(45697)),l=n(o(94184)),c=o(2221),d={tag:c.tagPropType,className:s.default.string,cssModule:s.default.object},u=function(e){var t=e.className,o=e.cssModule,n=e.tag,s=(0,i.default)(e,["className","cssModule","tag"]),d=(0,c.mapToCssModules)((0,l.default)(t,"modal-footer"),o);return a.default.createElement(n,(0,r.default)({},s,{className:d}))};u.propTypes=d,u.defaultProps={tag:"div"};var p=u;t.Z=p},20695:(e,t,o)=>{"use strict";var n=o(95318);t.Z=void 0;var r=n(o(67154)),i=n(o(37316)),a=n(o(52127)),s=n(o(45697)),l=n(o(94184)),c=o(2221),d={tag:c.tagPropType,wrapTag:c.tagPropType,toggle:s.default.func,className:s.default.string,cssModule:s.default.object,children:s.default.node,closeAriaLabel:s.default.string,charCode:s.default.oneOfType([s.default.string,s.default.number]),close:s.default.object},u=function(e){var t,o=e.className,n=e.cssModule,s=e.children,d=e.toggle,u=e.tag,p=e.wrapTag,h=e.closeAriaLabel,f=e.charCode,g=e.close,m=(0,i.default)(e,["className","cssModule","children","toggle","tag","wrapTag","closeAriaLabel","charCode","close"]),v=(0,c.mapToCssModules)((0,l.default)(o,"modal-header"),n);if(!g&&d){var b="number"==typeof f?String.fromCharCode(f):f;t=a.default.createElement("button",{type:"button",onClick:d,className:(0,c.mapToCssModules)("close",n),"aria-label":h},a.default.createElement("span",{"aria-hidden":"true"},b))}return a.default.createElement(p,(0,r.default)({},m,{className:v}),a.default.createElement(u,{className:(0,c.mapToCssModules)("modal-title",n)},s),g||t)};u.propTypes=d,u.defaultProps={tag:"h5",wrapTag:"div",closeAriaLabel:"Close",charCode:215};var p=u;t.Z=p},94138:(e,t,o)=>{"use strict";var n=o(95318);t.Z=void 0;var r=n(o(67154)),i=n(o(37316)),a=n(o(52127)),s=n(o(45697)),l=n(o(94184)),c=o(2221),d={tabs:s.default.bool,pills:s.default.bool,vertical:s.default.oneOfType([s.default.bool,s.default.string]),horizontal:s.default.string,justified:s.default.bool,fill:s.default.bool,navbar:s.default.bool,card:s.default.bool,tag:c.tagPropType,className:s.default.string,cssModule:s.default.object},u=function(e){var t=e.className,o=e.cssModule,n=e.tabs,s=e.pills,d=e.vertical,u=e.horizontal,p=e.justified,h=e.fill,f=e.navbar,g=e.card,m=e.tag,v=(0,i.default)(e,["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"]),b=(0,c.mapToCssModules)((0,l.default)(t,f?"navbar-nav":"nav",!!u&&"justify-content-"+u,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(d),{"nav-tabs":n,"card-header-tabs":g&&n,"nav-pills":s,"card-header-pills":g&&s,"nav-justified":p,"nav-fill":h}),o);return a.default.createElement(m,(0,r.default)({},v,{className:b}))};u.propTypes=d,u.defaultProps={tag:"ul",vertical:!1};var p=u;t.Z=p},87719:(e,t,o)=>{"use strict";var n=o(95318);t.Z=void 0;var r=n(o(67154)),i=n(o(37316)),a=n(o(52127)),s=n(o(45697)),l=n(o(94184)),c=o(2221),d={tag:c.tagPropType,active:s.default.bool,className:s.default.string,cssModule:s.default.object},u=function(e){var t=e.className,o=e.cssModule,n=e.active,s=e.tag,d=(0,i.default)(e,["className","cssModule","active","tag"]),u=(0,c.mapToCssModules)((0,l.default)(t,"nav-item",!!n&&"active"),o);return a.default.createElement(s,(0,r.default)({},d,{className:u}))};u.propTypes=d,u.defaultProps={tag:"li"};var p=u;t.Z=p},42349:(e,t,o)=>{"use strict";var n=o(95318);t.Z=void 0;var r=n(o(67154)),i=n(o(37316)),a=n(o(52127)),s=n(o(45697)),l=n(o(94184)),c=o(2221),d={light:s.default.bool,dark:s.default.bool,full:s.default.bool,fixed:s.default.string,sticky:s.default.string,color:s.default.string,role:s.default.string,tag:c.tagPropType,className:s.default.string,cssModule:s.default.object,expand:s.default.oneOfType([s.default.bool,s.default.string])},u=function(e){var t,o=e.expand,n=e.className,s=e.cssModule,d=e.light,u=e.dark,p=e.fixed,h=e.sticky,f=e.color,g=e.tag,m=(0,i.default)(e,["expand","className","cssModule","light","dark","fixed","sticky","color","tag"]),v=(0,c.mapToCssModules)((0,l.default)(n,"navbar",function(e){return!1!==e&&(!0===e||"xs"===e?"navbar-expand":"navbar-expand-"+e)}(o),((t={"navbar-light":d,"navbar-dark":u})["bg-"+f]=f,t["fixed-"+p]=p,t["sticky-"+h]=h,t)),s);return a.default.createElement(g,(0,r.default)({},m,{className:v}))};u.propTypes=d,u.defaultProps={tag:"nav",expand:!1};var p=u;t.Z=p},25886:(e,t,o)=>{"use strict";var n=o(95318);t.Z=void 0;var r=n(o(67154)),i=n(o(37316)),a=n(o(52127)),s=n(o(45697)),l=n(o(94184)),c=o(2221),d={children:s.default.node,className:s.default.string,listClassName:s.default.string,cssModule:s.default.object,size:s.default.string,tag:c.tagPropType,listTag:c.tagPropType,"aria-label":s.default.string},u=function(e){var t,o=e.className,n=e.listClassName,s=e.cssModule,d=e.size,u=e.tag,p=e.listTag,h=e["aria-label"],f=(0,i.default)(e,["className","listClassName","cssModule","size","tag","listTag","aria-label"]),g=(0,c.mapToCssModules)((0,l.default)(o),s),m=(0,c.mapToCssModules)((0,l.default)(n,"pagination",((t={})["pagination-"+d]=!!d,t)),s);return a.default.createElement(u,{className:g,"aria-label":h},a.default.createElement(p,(0,r.default)({},f,{className:m})))};u.propTypes=d,u.defaultProps={tag:"nav",listTag:"ul","aria-label":"pagination"};var p=u;t.Z=p},16030:(e,t,o)=>{"use strict";var n=o(95318);t.Z=void 0;var r=n(o(67154)),i=n(o(37316)),a=n(o(52127)),s=n(o(45697)),l=n(o(94184)),c=o(2221),d={active:s.default.bool,children:s.default.node,className:s.default.string,cssModule:s.default.object,disabled:s.default.bool,tag:c.tagPropType},u=function(e){var t=e.active,o=e.className,n=e.cssModule,s=e.disabled,d=e.tag,u=(0,i.default)(e,["active","className","cssModule","disabled","tag"]),p=(0,c.mapToCssModules)((0,l.default)(o,"page-item",{active:t,disabled:s}),n);return a.default.createElement(d,(0,r.default)({},u,{className:p}))};u.propTypes=d,u.defaultProps={tag:"li"};var p=u;t.Z=p},95844:(e,t,o)=>{"use strict";var n=o(95318);t.Z=void 0;var r=n(o(67154)),i=n(o(37316)),a=n(o(52127)),s=n(o(45697)),l=n(o(94184)),c=o(2221),d={"aria-label":s.default.string,children:s.default.node,className:s.default.string,cssModule:s.default.object,next:s.default.bool,previous:s.default.bool,first:s.default.bool,last:s.default.bool,tag:c.tagPropType},u=function(e){var t,o=e.className,n=e.cssModule,s=e.next,d=e.previous,u=e.first,p=e.last,h=e.tag,f=(0,i.default)(e,["className","cssModule","next","previous","first","last","tag"]),g=(0,c.mapToCssModules)((0,l.default)(o,"page-link"),n);d?t="Previous":s?t="Next":u?t="First":p&&(t="Last");var m,v=e["aria-label"]||t;d?m="‹":s?m="›":u?m="«":p&&(m="»");var b=e.children;return b&&Array.isArray(b)&&0===b.length&&(b=null),f.href||"a"!==h||(h="button"),(d||s||u||p)&&(b=[a.default.createElement("span",{"aria-hidden":"true",key:"caret"},b||m),a.default.createElement("span",{className:"sr-only",key:"sr"},v)]),a.default.createElement(h,(0,r.default)({},f,{className:g,"aria-label":v}),b)};u.propTypes=d,u.defaultProps={tag:"a"};var p=u;t.Z=p},99970:(e,t,o)=>{"use strict";var n=o(95318);t.__esModule=!0,t.default=void 0;var r=n(o(85354)),i=n(o(52127)),a=n(o(41530)),s=n(o(45697)),l=o(2221),c={children:s.default.node.isRequired,node:s.default.any},d=function(e){function t(){return e.apply(this,arguments)||this}(0,r.default)(t,e);var o=t.prototype;return o.componentWillUnmount=function(){this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null},o.render=function(){return l.canUseDOM?(this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode)),a.default.createPortal(this.props.children,this.props.node||this.defaultNode)):null},t}(i.default.Component);d.propTypes=c;var u=d;t.default=u},22301:(e,t,o)=>{"use strict";var n=o(95318);t.Z=void 0;var r=n(o(67154)),i=n(o(37316)),a=n(o(52127)),s=n(o(45697)),l=n(o(94184)),c=o(2221),d=s.default.oneOfType([s.default.number,s.default.string]),u={tag:c.tagPropType,noGutters:s.default.bool,className:s.default.string,cssModule:s.default.object,form:s.default.bool,xs:d,sm:d,md:d,lg:d,xl:d},p=function(e){var t=e.className,o=e.cssModule,n=e.noGutters,s=e.tag,d=e.form,u=e.widths,p=(0,i.default)(e,["className","cssModule","noGutters","tag","form","widths"]),h=[];u.forEach((function(t,o){var n=e[t];if(delete p[t],n){var r=!o;h.push(r?"row-cols-"+n:"row-cols-"+t+"-"+n)}}));var f=(0,c.mapToCssModules)((0,l.default)(t,n?"no-gutters":null,d?"form-row":"row",h),o);return a.default.createElement(s,(0,r.default)({},p,{className:f}))};p.propTypes=u,p.defaultProps={tag:"div",widths:["xs","sm","md","lg","xl"]};var h=p;t.Z=h},67909:(e,t,o)=>{"use strict";var n=o(95318);t.Z=void 0;var r=n(o(67154)),i=n(o(37316)),a=n(o(52127)),s=n(o(45697)),l=n(o(94184)),c=o(2221),d={className:s.default.string,cssModule:s.default.object,size:s.default.string,bordered:s.default.bool,borderless:s.default.bool,striped:s.default.bool,dark:s.default.bool,hover:s.default.bool,responsive:s.default.oneOfType([s.default.bool,s.default.string]),tag:c.tagPropType,responsiveTag:c.tagPropType,innerRef:s.default.oneOfType([s.default.func,s.default.string,s.default.object])},u=function(e){var t=e.className,o=e.cssModule,n=e.size,s=e.bordered,d=e.borderless,u=e.striped,p=e.dark,h=e.hover,f=e.responsive,g=e.tag,m=e.responsiveTag,v=e.innerRef,b=(0,i.default)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),y=(0,c.mapToCssModules)((0,l.default)(t,"table",!!n&&"table-"+n,!!s&&"table-bordered",!!d&&"table-borderless",!!u&&"table-striped",!!p&&"table-dark",!!h&&"table-hover"),o),w=a.default.createElement(g,(0,r.default)({},b,{ref:v,className:y}));if(f){var x=(0,c.mapToCssModules)(!0===f?"table-responsive":"table-responsive-"+f,o);return a.default.createElement(m,{className:x},w)}return w};u.propTypes=d,u.defaultProps={tag:"table",responsiveTag:"div"};var p=u;t.Z=p},2221:(e,t,o)=>{"use strict";var n=o(95318);t.__esModule=!0,t.getScrollbarWidth=a,t.setScrollbarWidth=s,t.isBodyOverflowing=l,t.getOriginalBodyPadding=function(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)},t.conditionallyUpdateScrollbar=function(){var e=a(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],o=t?parseInt(t.style.paddingRight||0,10):0;l()&&s(o+e)},t.setGlobalCssModule=function(e){r=e},t.mapToCssModules=function(e,t){return void 0===e&&(e=""),void 0===t&&(t=r),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e},t.omit=function(e,t){var o={};return Object.keys(e).forEach((function(n){-1===t.indexOf(n)&&(o[n]=e[n])})),o},t.pick=function(e,t){for(var o,n=Array.isArray(t)?t:[t],r=n.length,i={};r>0;)i[o=n[r-=1]]=e[o];return i},t.warnOnce=d,t.deprecated=function(e,t){return function(o,n,r){null!==o[n]&&void 0!==o[n]&&d('"'+n+'" property of "'+r+'" has been deprecated.\n'+t);for(var i=arguments.length,a=new Array(i>3?i-3:0),s=3;s<i;s++)a[s-3]=arguments[s];return e.apply(void 0,[o,n,r].concat(a))}},t.DOMElement=p,t.isReactRefObj=m,t.toNumber=function(e){var t=typeof e;if("number"===t)return e;if("symbol"===t||"object"===t&&"[object Symbol]"===v(e))return NaN;if(b(e)){var o="function"==typeof e.valueOf?e.valueOf():e;e=b(o)?""+o:o}if("string"!==t)return 0===e?e:+e;e=e.replace(/^\s+|\s+$/g,"");var n=/^0b[01]+$/i.test(e);return n||/^0o[0-7]+$/i.test(e)?parseInt(e.slice(2),n?2:8):/^[-+]0x[0-9a-f]+$/i.test(e)?NaN:+e},t.isObject=b,t.isFunction=y,t.findDOMElements=w,t.isArrayOrNodeList=x,t.getTarget=function(e,t){var o=w(e);return t?x(o)?o:null===o?[]:[o]:x(o)?o[0]:o},t.addMultipleEventListeners=function(e,t,o,n){var r=e;x(r)||(r=[r]);var i=o;if("string"==typeof i&&(i=i.split(/\s+/)),!x(r)||"function"!=typeof t||!Array.isArray(i))throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");return Array.prototype.forEach.call(i,(function(e){Array.prototype.forEach.call(r,(function(o){o.addEventListener(e,t,n)}))})),function(){Array.prototype.forEach.call(i,(function(e){Array.prototype.forEach.call(r,(function(o){o.removeEventListener(e,t,n)}))}))}},t.focusableElements=t.defaultToggleEvents=t.canUseDOM=t.PopperPlacements=t.keyCodes=t.TransitionStatuses=t.TransitionPropTypeKeys=t.TransitionTimeouts=t.tagPropType=t.targetPropType=void 0;var r,i=n(o(45697));function a(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}function s(e){document.body.style.paddingRight=e>0?e+"px":null}function l(){return document.body.clientWidth<window.innerWidth}var c={};function d(e){c[e]||("undefined"!=typeof console&&console.error(e),c[e]=!0)}var u="object"==typeof window&&window.Element||function(){};function p(e,t,o){if(!(e[t]instanceof u))return new Error("Invalid prop `"+t+"` supplied to `"+o+"`. Expected prop to be an instance of Element. Validation failed.")}var h=i.default.oneOfType([i.default.string,i.default.func,p,i.default.shape({current:i.default.any})]);t.targetPropType=h;var f=i.default.oneOfType([i.default.func,i.default.string,i.default.shape({$$typeof:i.default.symbol,render:i.default.func}),i.default.arrayOf(i.default.oneOfType([i.default.func,i.default.string,i.default.shape({$$typeof:i.default.symbol,render:i.default.func})]))]);t.tagPropType=f,t.TransitionTimeouts={Fade:150,Collapse:350,Modal:300,Carousel:600},t.TransitionPropTypeKeys=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],t.TransitionStatuses={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"},t.keyCodes={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},t.PopperPlacements=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"];var g=!("undefined"==typeof window||!window.document||!window.document.createElement);function m(e){return!(!e||"object"!=typeof e)&&"current"in e}function v(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function b(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function y(e){if(!b(e))return!1;var t=v(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}function w(e){if(m(e))return e.current;if(y(e))return e();if("string"==typeof e&&g){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function x(e){return null!==e&&(Array.isArray(e)||g&&"number"==typeof e.length)}t.canUseDOM=g,t.defaultToggleEvents=["touchstart","click"],t.focusableElements=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},99541:(e,t,o)=>{"use strict";var n=o(95318);t.__esModule=!0,t.default=function(e,t){e.classList?e.classList.add(t):(0,r.default)(e,t)||("string"==typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))};var r=n(o(53007));e.exports=t.default},53007:(e,t)=>{"use strict";t.__esModule=!0,t.default=function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")},e.exports=t.default},16900:e=>{"use strict";function t(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}e.exports=function(e,o){e.classList?e.classList.remove(o):"string"==typeof e.className?e.className=t(e.className,o):e.setAttribute("class",t(e.className&&e.className.baseVal||"",o))}},95767:(e,t,o)=>{"use strict";t.__esModule=!0,t.default=void 0,function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,o):{};n.get||n.set?Object.defineProperty(t,o,n):t[o]=e[o]}t.default=e}(o(45697));var n=s(o(99541)),r=s(o(16900)),i=s(o(52127)),a=s(o(2337));function s(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}o(64322);var c=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return(0,n.default)(e,t)}))},d=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return(0,r.default)(e,t)}))},u=function(e){var t,o;function n(){for(var t,o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).onEnter=function(e,o){var n=t.getClassNames(o?"appear":"enter").className;t.removeClasses(e,"exit"),c(e,n),t.props.onEnter&&t.props.onEnter(e,o)},t.onEntering=function(e,o){var n=t.getClassNames(o?"appear":"enter").activeClassName;t.reflowAndAddClass(e,n),t.props.onEntering&&t.props.onEntering(e,o)},t.onEntered=function(e,o){var n=t.getClassNames("appear").doneClassName,r=t.getClassNames("enter").doneClassName,i=o?n+" "+r:r;t.removeClasses(e,o?"appear":"enter"),c(e,i),t.props.onEntered&&t.props.onEntered(e,o)},t.onExit=function(e){var o=t.getClassNames("exit").className;t.removeClasses(e,"appear"),t.removeClasses(e,"enter"),c(e,o),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var o=t.getClassNames("exit").activeClassName;t.reflowAndAddClass(e,o),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var o=t.getClassNames("exit").doneClassName;t.removeClasses(e,"exit"),c(e,o),t.props.onExited&&t.props.onExited(e)},t.getClassNames=function(e){var o=t.props.classNames,n="string"==typeof o,r=n?(n&&o?o+"-":"")+e:o[e];return{className:r,activeClassName:n?r+"-active":o[e+"Active"],doneClassName:n?r+"-done":o[e+"Done"]}},t}o=e,(t=n).prototype=Object.create(o.prototype),t.prototype.constructor=t,t.__proto__=o;var r=n.prototype;return r.removeClasses=function(e,t){var o=this.getClassNames(t),n=o.className,r=o.activeClassName,i=o.doneClassName;n&&d(e,n),r&&d(e,r),i&&d(e,i)},r.reflowAndAddClass=function(e,t){t&&(e&&e.scrollTop,c(e,t))},r.render=function(){var e=l({},this.props);return delete e.classNames,i.default.createElement(a.default,l({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},n}(i.default.Component);u.defaultProps={classNames:""},u.propTypes={};var p=u;t.default=p,e.exports=t.default},60283:(e,t,o)=>{"use strict";t.__esModule=!0,t.default=void 0,a(o(45697));var n=a(o(52127)),r=o(41530),i=a(o(79924));function a(e){return e&&e.__esModule?e:{default:e}}var s=function(e){var t,o;function a(){for(var t,o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).handleEnter=function(){for(var e=arguments.length,o=new Array(e),n=0;n<e;n++)o[n]=arguments[n];return t.handleLifecycle("onEnter",0,o)},t.handleEntering=function(){for(var e=arguments.length,o=new Array(e),n=0;n<e;n++)o[n]=arguments[n];return t.handleLifecycle("onEntering",0,o)},t.handleEntered=function(){for(var e=arguments.length,o=new Array(e),n=0;n<e;n++)o[n]=arguments[n];return t.handleLifecycle("onEntered",0,o)},t.handleExit=function(){for(var e=arguments.length,o=new Array(e),n=0;n<e;n++)o[n]=arguments[n];return t.handleLifecycle("onExit",1,o)},t.handleExiting=function(){for(var e=arguments.length,o=new Array(e),n=0;n<e;n++)o[n]=arguments[n];return t.handleLifecycle("onExiting",1,o)},t.handleExited=function(){for(var e=arguments.length,o=new Array(e),n=0;n<e;n++)o[n]=arguments[n];return t.handleLifecycle("onExited",1,o)},t}o=e,(t=a).prototype=Object.create(o.prototype),t.prototype.constructor=t,t.__proto__=o;var s=a.prototype;return s.handleLifecycle=function(e,t,o){var i,a=this.props.children,s=n.default.Children.toArray(a)[t];s.props[e]&&(i=s.props)[e].apply(i,o),this.props[e]&&this.props[e]((0,r.findDOMNode)(this))},s.render=function(){var e=this.props,t=e.children,o=e.in,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,["children","in"]),a=n.default.Children.toArray(t),s=a[0],l=a[1];return delete r.onEnter,delete r.onEntering,delete r.onEntered,delete r.onExit,delete r.onExiting,delete r.onExited,n.default.createElement(i.default,r,o?n.default.cloneElement(s,{key:"first",onEnter:this.handleEnter,onEntering:this.handleEntering,onEntered:this.handleEntered}):n.default.cloneElement(l,{key:"second",onEnter:this.handleExit,onEntering:this.handleExiting,onEntered:this.handleExited}))},a}(n.default.Component);s.propTypes={};var l=s;t.default=l,e.exports=t.default},2337:(e,t,o)=>{"use strict";t.__esModule=!0,t.default=t.EXITING=t.ENTERED=t.ENTERING=t.EXITED=t.UNMOUNTED=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,o):{};n.get||n.set?Object.defineProperty(t,o,n):t[o]=e[o]}return t.default=e,t}(o(45697)),r=s(o(52127)),i=s(o(41530)),a=o(46871);function s(e){return e&&e.__esModule?e:{default:e}}o(64322);var l="unmounted";t.UNMOUNTED=l;var c="exited";t.EXITED=c;var d="entering";t.ENTERING=d;var u="entered";t.ENTERED=u;var p="exiting";t.EXITING=p;var h=function(e){var t,o;function n(t,o){var n;n=e.call(this,t,o)||this;var r,i=o.transitionGroup,a=i&&!i.isMounting?t.enter:t.appear;return n.appearStatus=null,t.in?a?(r=c,n.appearStatus=d):r=u:r=t.unmountOnExit||t.mountOnEnter?l:c,n.state={status:r},n.nextCallback=null,n}o=e,(t=n).prototype=Object.create(o.prototype),t.prototype.constructor=t,t.__proto__=o;var a=n.prototype;return a.getChildContext=function(){return{transitionGroup:null}},n.getDerivedStateFromProps=function(e,t){return e.in&&t.status===l?{status:c}:null},a.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},a.componentDidUpdate=function(e){var t=null;if(e!==this.props){var o=this.state.status;this.props.in?o!==d&&o!==u&&(t=d):o!==d&&o!==u||(t=p)}this.updateStatus(!1,t)},a.componentWillUnmount=function(){this.cancelNextCallback()},a.getTimeouts=function(){var e,t,o,n=this.props.timeout;return e=t=o=n,null!=n&&"number"!=typeof n&&(e=n.exit,t=n.enter,o=void 0!==n.appear?n.appear:t),{exit:e,enter:t,appear:o}},a.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){this.cancelNextCallback();var o=i.default.findDOMNode(this);t===d?this.performEnter(o,e):this.performExit(o)}else this.props.unmountOnExit&&this.state.status===c&&this.setState({status:l})},a.performEnter=function(e,t){var o=this,n=this.props.enter,r=this.context.transitionGroup?this.context.transitionGroup.isMounting:t,i=this.getTimeouts(),a=r?i.appear:i.enter;t||n?(this.props.onEnter(e,r),this.safeSetState({status:d},(function(){o.props.onEntering(e,r),o.onTransitionEnd(e,a,(function(){o.safeSetState({status:u},(function(){o.props.onEntered(e,r)}))}))}))):this.safeSetState({status:u},(function(){o.props.onEntered(e)}))},a.performExit=function(e){var t=this,o=this.props.exit,n=this.getTimeouts();o?(this.props.onExit(e),this.safeSetState({status:p},(function(){t.props.onExiting(e),t.onTransitionEnd(e,n.exit,(function(){t.safeSetState({status:c},(function(){t.props.onExited(e)}))}))}))):this.safeSetState({status:c},(function(){t.props.onExited(e)}))},a.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},a.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},a.setNextCallback=function(e){var t=this,o=!0;return this.nextCallback=function(n){o&&(o=!1,t.nextCallback=null,e(n))},this.nextCallback.cancel=function(){o=!1},this.nextCallback},a.onTransitionEnd=function(e,t,o){this.setNextCallback(o);var n=null==t&&!this.props.addEndListener;e&&!n?(this.props.addEndListener&&this.props.addEndListener(e,this.nextCallback),null!=t&&setTimeout(this.nextCallback,t)):setTimeout(this.nextCallback,0)},a.render=function(){var e=this.state.status;if(e===l)return null;var t=this.props,o=t.children,n=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(t,["children"]);if(delete n.in,delete n.mountOnEnter,delete n.unmountOnExit,delete n.appear,delete n.enter,delete n.exit,delete n.timeout,delete n.addEndListener,delete n.onEnter,delete n.onEntering,delete n.onEntered,delete n.onExit,delete n.onExiting,delete n.onExited,"function"==typeof o)return o(e,n);var i=r.default.Children.only(o);return r.default.cloneElement(i,n)},n}(r.default.Component);function f(){}h.contextTypes={transitionGroup:n.object},h.childContextTypes={transitionGroup:function(){}},h.propTypes={},h.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:f,onEntering:f,onEntered:f,onExit:f,onExiting:f,onExited:f},h.UNMOUNTED=0,h.EXITED=1,h.ENTERING=2,h.ENTERED=3,h.EXITING=4;var g=(0,a.polyfill)(h);t.default=g},79924:(e,t,o)=>{"use strict";t.__esModule=!0,t.default=void 0;var n=s(o(45697)),r=s(o(52127)),i=o(46871),a=o(29822);function s(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var d=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},u=function(e){var t,o;function n(t,o){var n,r=(n=e.call(this,t,o)||this).handleExited.bind(c(c(n)));return n.state={handleExited:r,firstRender:!0},n}o=e,(t=n).prototype=Object.create(o.prototype),t.prototype.constructor=t,t.__proto__=o;var i=n.prototype;return i.getChildContext=function(){return{transitionGroup:{isMounting:!this.appeared}}},i.componentDidMount=function(){this.appeared=!0,this.mounted=!0},i.componentWillUnmount=function(){this.mounted=!1},n.getDerivedStateFromProps=function(e,t){var o=t.children,n=t.handleExited;return{children:t.firstRender?(0,a.getInitialChildMapping)(e,n):(0,a.getNextChildMapping)(e,o,n),firstRender:!1}},i.handleExited=function(e,t){var o=(0,a.getChildMapping)(this.props.children);e.key in o||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var o=l({},t.children);return delete o[e.key],{children:o}})))},i.render=function(){var e=this.props,t=e.component,o=e.childFactory,n=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,["component","childFactory"]),i=d(this.state.children).map(o);return delete n.appear,delete n.enter,delete n.exit,null===t?i:r.default.createElement(t,n,i)},n}(r.default.Component);u.childContextTypes={transitionGroup:n.default.object.isRequired},u.propTypes={},u.defaultProps={component:"div",childFactory:function(e){return e}};var p=(0,i.polyfill)(u);t.default=p,e.exports=t.default},793:(e,t,o)=>{"use strict";var n=s(o(95767)),r=s(o(60283)),i=s(o(79924)),a=s(o(2337));function s(e){return e&&e.__esModule?e:{default:e}}e.exports={Transition:a.default,TransitionGroup:i.default,ReplaceTransition:r.default,CSSTransition:n.default}},29822:(e,t,o)=>{"use strict";t.__esModule=!0,t.getChildMapping=r,t.mergeChildMappings=i,t.getInitialChildMapping=function(e,t){return r(e.children,(function(o){return(0,n.cloneElement)(o,{onExited:t.bind(null,o),in:!0,appear:a(o,"appear",e),enter:a(o,"enter",e),exit:a(o,"exit",e)})}))},t.getNextChildMapping=function(e,t,o){var s=r(e.children),l=i(t,s);return Object.keys(l).forEach((function(r){var i=l[r];if((0,n.isValidElement)(i)){var c=r in t,d=r in s,u=t[r],p=(0,n.isValidElement)(u)&&!u.props.in;!d||c&&!p?d||!c||p?d&&c&&(0,n.isValidElement)(u)&&(l[r]=(0,n.cloneElement)(i,{onExited:o.bind(null,i),in:u.props.in,exit:a(i,"exit",e),enter:a(i,"enter",e)})):l[r]=(0,n.cloneElement)(i,{in:!1}):l[r]=(0,n.cloneElement)(i,{onExited:o.bind(null,i),in:!0,exit:a(i,"exit",e),enter:a(i,"enter",e)})}})),l};var n=o(52127);function r(e,t){var o=Object.create(null);return e&&n.Children.map(e,(function(e){return e})).forEach((function(e){o[e.key]=function(e){return t&&(0,n.isValidElement)(e)?t(e):e}(e)})),o}function i(e,t){function o(o){return o in t?t[o]:e[o]}e=e||{},t=t||{};var n,r=Object.create(null),i=[];for(var a in e)a in t?i.length&&(r[a]=i,i=[]):i.push(a);var s={};for(var l in t){if(r[l])for(n=0;n<r[l].length;n++){var c=r[l][n];s[r[l][n]]=o(c)}s[l]=o(l)}for(n=0;n<i.length;n++)s[i[n]]=o(i[n]);return s}function a(e,t,o){return null!=o[t]?o[t]:e.props[t]}},64322:(e,t,o)=>{"use strict";var n;t.__esModule=!0,t.classNamesShape=t.timeoutsShape=void 0,(n=o(45697))&&n.__esModule,t.timeoutsShape=null,t.classNamesShape=null},67660:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 2H2v12h12V2zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z" fill="#000"></path></svg>'},18371:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.036 12.157l8.01-8.01a.5.5 0 11.707.707l-8.01 8.01a1 1 0 01-1.415 0L1.146 8.682a.5.5 0 11.708-.707l4.182 4.182z" fill="#000"></path></svg>'},55339:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.745 8l6.1 6.1a.527.527 0 11-.745.746L8 8.746l-6.1 6.1a.527.527 0 11-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 01.746-.746l6.1 6.1 6.1-6.1a.527.527 0 01.746.746L8.746 8z" fill="#000"></path></svg>'},65283:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.438 1C.196 1 0 1.224 0 1.5s.196.5.438.5h15.124c.242 0 .438-.224.438-.5s-.196-.5-.438-.5H.438zM0 7.5c0-.276.196-.5.438-.5h15.124c.242 0 .438.224.438.5s-.196.5-.438.5H.438C.196 8 0 7.776 0 7.5zM0 13.5c0-.276.196-.5.438-.5h15.124c.242 0 .438.224.438.5s-.196.5-.438.5H.438C.196 14 0 13.776 0 13.5z" fill="#000"></path></svg>'},30224:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-1.27 4.936a6.5 6.5 0 11.707-.707l4.136 4.137a.5.5 0 11-.707.707l-4.137-4.137z" fill="#000"></path></svg>'},95884:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.88 2.825a.5.5 0 00-.759-.65l-2.323 2.71-1.264-1.265a.5.5 0 10-.708.707l1.265 1.265a1 1 0 001.466-.056l2.324-2.71zm0 8a.5.5 0 00-.759-.65l-2.323 2.71-1.264-1.265a.5.5 0 00-.708.708l1.265 1.264a1 1 0 001.466-.056l2.324-2.71zM9 4.5a.5.5 0 01-.5.5h-8a.5.5 0 010-1h8a.5.5 0 01.5.5zM8.5 13a.5.5 0 000-1h-8a.5.5 0 000 1h8z" fill="#000"></path></svg>'},87830:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 4.5a.5.5 0 01-.5.5h-8a.5.5 0 010-1h8a.5.5 0 01.5.5zM16 12.5a.5.5 0 01-.5.5h-8a.5.5 0 010-1h8a.5.5 0 01.5.5zM5.146 2.12a.5.5 0 01.055.705l-2.324 2.71a1 1 0 01-1.466.057L.146 4.327a.5.5 0 01.708-.707l1.264 1.265 2.323-2.71a.5.5 0 01.705-.055zM5.146 10.12a.5.5 0 01.055.705l-2.324 2.71a1 1 0 01-1.466.057L.146 12.328a.5.5 0 11.708-.708l1.264 1.265 2.323-2.71a.5.5 0 01.705-.055z" fill="#000"></path></svg>'},43036:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.366 7.841l-.732-.682-3.125 3.349-1.635-1.84-.748.664 2.365 2.66 3.875-4.15z" fill="#000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 3V1.167C4.5.469 5.204 0 6 0h4c.796 0 1.5.47 1.5 1.167V3h4a.5.5 0 010 1H14l-.929 11.077a1 1 0 01-.997.923H3.926a1 1 0 01-.997-.923L2 4H.5a.5.5 0 010-1h4zM3.003 4h9.994l-.923 11H3.926L3.003 4zM10.5 1v2h-5V1c0-.04 5-.04 5 0z" fill="#000"></path></svg>'},88866:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 5.5a1 1 0 100-2 1 1 0 000 2zM6.5 7.5A.5.5 0 017 7h1.5v4.5h1a.5.5 0 010 1h-3a.5.5 0 010-1h1V8H7a.5.5 0 01-.5-.5z" fill="#000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8 16A8 8 0 118 0a8 8 0 010 16zm0-1A7 7 0 108 1a7 7 0 000 14z" fill="#000"></path></svg>'},50342:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 11.5l5.354-5.354-.708-.707L7 10.086 4.354 7.439l-.708.707L7 11.5z" fill="#000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0 8a8 8 0 1016 0A8 8 0 000 8zm15 0A7 7 0 111 8a7 7 0 0114 0z" fill="#000"></path></svg>'},79964:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 2.125L14.334 14H1.667L8 2.125zm-.882-.47a1 1 0 011.765 0l6.333 11.874A1 1 0 0114.334 15H1.667a1 1 0 01-.882-1.47L7.118 1.653zM8 4.874a.905.905 0 00-.9.995l.35 3.507a.552.552 0 001.1 0L8.9 5.87a.905.905 0 00-.9-.995zm1 7a1 1 0 11-2 0 1 1 0 012 0z" fill="#000"></path></svg>'},94539:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4.796L4.796 4 8.02 7.224l3.184-3.184.796.796L8.816 8.02l3.144 3.144-.796.796L8.02 8.816 4.836 12l-.796-.796L7.224 8.02 4 4.796z" fill="#000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0 4l4-4h8l4 4v8l-4 4H4l-4-4V4zm1 .414L4.414 1h7.172L15 4.414v7.172L11.586 15H4.414L1 11.586V4.414z" fill="#000"></path></svg>'},84856:e=>{e.exports='<svg viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg"><path d="M1.521 2.307L4 4.677l2.479-2.37a.517.517 0 01.708 0 .464.464 0 010 .677l-2.833 2.71a.517.517 0 01-.708 0L.813 2.983a.464.464 0 010-.677.517.517 0 01.708 0z"></path><path d="M0 0h8v8H0z" fill="none"></path></svg>'},65085:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M4.103 7.873L16 19.25 27.897 7.873c.939-.898 2.46-.898 3.399 0s.939 2.353 0 3.251L17.7 24.127a2.481 2.481 0 01-3.399 0L.705 11.124c-.939-.898-.939-2.353 0-3.251s2.46-.898 3.399 0z"></path></svg>'},9553:e=>{e.exports='<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M2.479 5.47L8.019.162a.592.592 0 01.813 0 .534.534 0 010 .779L3.552 6l5.28 5.06a.534.534 0 010 .779.592.592 0 01-.813 0l-5.54-5.31a.726.726 0 010-1.058z" fill="#000"></path><path d="M0 0h12v12H0z"></path></g></svg>'},91116:e=>{e.exports='<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M9.521 5.47L3.981.162a.592.592 0 00-.813 0 .534.534 0 000 .779L8.448 6l-5.28 5.06a.534.534 0 000 .779.592.592 0 00.813 0l5.54-5.31a.726.726 0 000-1.058z" fill="#000"></path><path d="M0 0h12v12H0z"></path></g></svg>'},15975:e=>{e.exports='<svg viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg"><path d="M1.521 5.693a.517.517 0 01-.708 0 .464.464 0 010-.677l2.833-2.71a.517.517 0 01.708 0l2.833 2.71a.464.464 0 010 .677.517.517 0 01-.708 0L4 3.323l-2.479 2.37z"></path><path d="M0 0h8v8H0z" fill="none"></path></svg>'},95327:e=>{e.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M.304 6.016a1.028 1.028 0 011.466 0l4.398 4.451 8.062-8.16a1.028 1.028 0 011.466 0c.405.41.405 1.074 0 1.484l-8.795 8.902c-.405.41-1.062.41-1.466 0L.304 7.5a1.058 1.058 0 010-1.484z" fill="#000"></path><path d="M0 0h16v16H0z"></path></g></svg>'},93321:e=>{e.exports='<svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero" fill="none"><path d="M7.745 7l4.1 4.1a.527.527 0 01-.745.746L7 7.746l-4.1 4.1a.527.527 0 01-.746-.746l4.1-4.1-4.1-4.1a.527.527 0 01.746-.746l4.1 4.1 4.1-4.1a.527.527 0 01.746.746L7.746 7z" fill="#000"></path><path d="M1 1h12v12H1z"></path></g></svg>'},98912:e=>{e.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 6.598L14.308.29a.991.991 0 011.402 1.402L9.402 8l6.308 6.308a.991.991 0 01-1.402 1.402L8 9.402 1.692 15.71A.991.991 0 01.29 14.308L6.598 8 .29 1.692A.991.991 0 011.692.29L8 6.598z" fill="#000" fill-rule="nonzero"></path></svg>'},62437:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 7a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm0-1a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM7 12.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm-1 0a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM16 12.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm-1 0a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM16 3.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm-1 0a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" fill="#000"></path></svg>'},8045:e=>{e.exports='<svg viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#6A6A6A" cx="13" cy="13" r="13"></circle><path d="M13 17a10 10 0 018.913 5.462A12.952 12.952 0 0113 26c-3.45 0-6.586-1.344-8.914-3.537A10 10 0 0113 17zm0-12a5 5 0 110 10 5 5 0 010-10z" fill="#A8A8A8"></path></g></svg>'},86700:e=>{e.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 0a8 8 0 110 16A8 8 0 018 0zm0 1a7 7 0 100 14A7 7 0 008 1zm2.957 3.243l.8.8L8.8 8l2.957 2.957-.8.8L8 8.8l-2.957 2.957-.8-.8L7.2 8 4.243 5.043l.8-.8L8 7.2l2.957-2.957z" fill="#C5C5C5" fill-rule="evenodd"></path></svg>'},21714:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.473 11.484c0 .285.236.516.527.516a.522.522 0 00.527-.516V1.976L12.1 5.473c.206.202.54.202.746 0a.508.508 0 000-.73L8 0 3.154 4.743a.508.508 0 000 .73c.206.202.54.202.746 0l3.573-3.497v9.508z" fill="#E3E3E3"></path><path d="M1 8v7h14V8h1v8H0V8h1z" fill="#E3E3E3"></path></svg>'},12608:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 11"><path d="M4 8.5c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm12 0c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm12 0c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"></path></svg>'},38922:e=>{e.exports='<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero" fill="none"><path d="M4.586 8.657l6.01-6.01a.5.5 0 01.707.707l-6.01 6.01a1 1 0 01-1.414 0L.697 6.182a.5.5 0 01.707-.707l3.182 3.182z" fill="#000"></path><path d="M0 0h12v12H0z"></path></g></svg>'},28114:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 32"><path d="M16.492 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zm0 21.333a2 2 0 11.001 3.999 2 2 0 01-.001-3.999zm0-2.666a2 2 0 01-2-2v-8a2 2 0 114 0v8a2 2 0 01-2 2z"></path></svg>'},14052:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjU2cHgiIGhlaWdodD0iMjU2cHgiIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiB2ZXJzaW9uPSIxLjEiPg0KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNjAgKDg4MTAzKSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4NCiAgICA8dGl0bGU+aWNvbi1pbWFnZTwvdGl0bGU+DQogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+DQogICAgPGcgaWQ9IkJhc2ljcy1TcGVjaWZpY2F0aW9uIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgaWQ9IlBsYWNlaG9sZGVycyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE2Ny4wMDAwMDAsIC02NTcuMDAwMDAwKSIgZmlsbD0iI0M1QzVDNSI+DQogICAgICAgICAgICA8ZyBpZD0iQ29tYmluZWQtU2hhcGUtQ29weS0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjcuMDAwMDAwLCA2NTcuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPHBhdGggZD0iTTE3My43MTQyODYsODkgTDI1NiwxOTggTDAsMTk4IEw2NCwxMTYuMjUgTDEwOS43MTQyODYsMTcwLjc1IEwxNzMuNzE0Mjg2LDg5IFogTTk5LDU4IEMxMDcuODM2NTU2LDU4IDExNSw2NS4xNjM0NDQgMTE1LDc0IEMxMTUsODIuODM2NTU2IDEwNy44MzY1NTYsOTAgOTksOTAgQzkwLjE2MzQ0NCw5MCA4Myw4Mi44MzY1NTYgODMsNzQgQzgzLDY1LjE2MzQ0NCA5MC4xNjM0NDQsNTggOTksNTggWiIgaWQ9IkNvbWJpbmVkLVNoYXBlLUNvcHkiLz4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg=="},1810:e=>{"use strict";e.exports=o},52127:e=>{"use strict";e.exports=n},41530:e=>{"use strict";e.exports=r},83016:e=>{"use strict";e.exports=i},21835:e=>{"use strict";e.exports=a}},t={};function s(o){var n=t[o];if(void 0!==n)return n.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,s),r.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var l={};return(()=>{"use strict";s.r(l),s.d(l,{AdvancedSelect:()=>Rl,Alert:()=>Ld,AlertButton:()=>Dd,AlertPanel:()=>Md,AlertPopup:()=>gu,Alignment:()=>D,Badge:()=>Ca,BorderSides:()=>U,BoxShadowValues:()=>W,Button:()=>ye,ButtonGroup:()=>wd,CONFIRM_DELETE_ID:()=>od,Card:()=>Ma,CardBody:()=>Ra.Z,CardFooter:()=>ja.Z,CardHeader:()=>Pa.Z,CardImg:()=>Ta.Z,Checkbox:()=>Vs,Col:()=>hd.Z,Collapse:()=>Fl.Z,ConfirmDialog:()=>rd,Container:()=>pd.Z,CropType:()=>os,DATA_URLINFO_REGEXP:()=>yp,DataActionDropDown:()=>cd,DefaultArrowSize:()=>dn,Draggable:()=>Eo,DraggableCore:()=>So.DraggableCore,Drawer:()=>hu,Dropdown:()=>La,DropdownButton:()=>Va,DropdownItem:()=>Ha,DropdownMenu:()=>Xa,DropdownSubMenuItem:()=>_a,DropdownToggle:()=>Ya,DynamicUrlResolver:()=>xp,EsriSimpleLineSymbolStyle:()=>L,FOCUSABLE_CONTAINER_CLASS:()=>en,FillType:()=>B,FloatingPanel:()=>Go,FontFamilyValue:()=>V,Form:()=>gd.Z,FormFeedback:()=>Cp,FormGroup:()=>Ep,FormText:()=>kp,Icon:()=>Hn,IconPosition:()=>A,Image:()=>Fd,ImageFillMode:()=>Ja,ImageWithParam:()=>rs,ImgSourceType:()=>es,InnerPopper:()=>vn,Input:()=>is.Z,InputGroup:()=>Np,InputGroupAddon:()=>md.Z,InputGroupText:()=>vd.default,Label:()=>Ea,Link:()=>fr,LinkTip:()=>lr,ListGroup:()=>Tp,ListGroupItem:()=>Rp,Loading:()=>ss,LoadingType:()=>i.LoadingType,Manager:()=>gn,ManagerReferenceNodeContext:()=>hn,ManagerReferenceNodeSetterContext:()=>fn,MobilePanel:()=>Gu,MobilePanelManager:()=>xu,Modal:()=>Qc,ModalBody:()=>Kc.Z,ModalFooter:()=>Xc.Z,ModalHeader:()=>Zc,MultiSelect:()=>eu,Nav:()=>Ml,NavButtonGroup:()=>rc,NavIconType:()=>fa,NavItem:()=>Al,NavLink:()=>Bl,NavMenu:()=>Gl,Navbar:()=>Gd,Navigation:()=>Kd,NormalLineType:()=>z,NumericInput:()=>Ds,Option:()=>nl,PageNumber:()=>Xd,Pagination:()=>Cd,PanelHeader:()=>Vn,Paper:()=>_d,Popper:()=>pn,PopperCore:()=>to,Progress:()=>Zs,QueryScopeContext:()=>rl,RICH_TEXT_SANITIZER_OPTION:()=>Ju,Radio:()=>Xs,Reference:()=>mn,Resizable:()=>Do,RichTextDisplayer:()=>cp,Row:()=>fd.Z,ScrollList:()=>fc,Scrollable:()=>Sc,Select:()=>ol,Sides:()=>H,Slider:()=>Hd,Switch:()=>Js,Tab:()=>Kl,Table:()=>jp,Tabs:()=>Nc,Tag:()=>Yu,TagInput:()=>Xu,TextAlignValue:()=>G,TextArea:()=>gs,TextInput:()=>hs,ThemeColors:()=>_,Toast:()=>nu,ToastType:()=>tu,Tooltip:()=>Uc,UncontrolledAlertPanel:()=>Id,UnitTypes:()=>F,UserProfile:()=>yu,VIRTUAL_REFERENCE_CLASS:()=>oo,ViewportIntersectionObserver:()=>up,VirtualReference:()=>no,WidgetPlaceholder:()=>Tc,_AdvancedSelect:()=>Tl,_AdvancedSelectInner:()=>Cl,_Badge:()=>ka,_Button:()=>be,_ButtonGroup:()=>yd,_Card:()=>$a,_Checkbox:()=>Ws,_ConnectedLink:()=>pr,_DataActionDropDown:()=>ld,_Dropdown:()=>Aa,_DropdownButton:()=>Wa,_DropdownItem:()=>Fa,_DropdownMenu:()=>Ka,_DropdownSubMenuItem:()=>za,_DropdownToggle:()=>Ga,_FloatingPanel:()=>Vo,_Image:()=>Bd,_ImageWithParam:()=>ns,_Label:()=>Oa,_Link:()=>hr,_LinkComponent:()=>dr,_Loading:()=>as,_Modal:()=>Gc,_MultiSelect:()=>Jd,_Nav:()=>$l,_NavButtonGroup:()=>nc,_NavLink:()=>_l,_NavMenu:()=>Vl,_Navbar:()=>Vd,_NumericInput:()=>Is,_Option:()=>tl,_Pagination:()=>kd,_Popper:()=>un,_Progress:()=>Ys,_Radio:()=>Ks,_Resizable:()=>Io,_ScrollList:()=>hc,_Select:()=>el,_Slider:()=>Ud,_Switch:()=>Qs,_Tabs:()=>Cc,_Tag:()=>qu,_TagInput:()=>Zu,_TextArea:()=>fs,_TextInput:()=>ps,_Toast:()=>ou,_Tooltip:()=>Fc,_UserProfile:()=>bu,activeOverlay:()=>wo,applyMaxSizeModifier:()=>ar,baseOverlayZindex:()=>Uo,canUseDOM:()=>ro,closeOverlay:()=>xo,componentStyleUtils:()=>Sp,createChainedFunction:()=>po,defaultMessages:()=>Tt,filterModifierEnabled:()=>bo,findDOMElements:()=>so,flipPlacementForRTL:()=>uo,getAnchor:()=>au,getCustomFlipModifier:()=>rr,getFallbackPlacementsModifier:()=>sr,getFocusableElements:()=>on,getLastModifier:()=>mo,getTarget:()=>co,hooks:()=>o,init:()=>ud,isArrayOrNodeList:()=>lo,isBody:()=>go,isHorizontal:()=>iu,isModifiedEvent:()=>cr,isModifierEnabled:()=>vo,isOutBoundary:()=>ho,isReactRefObj:()=>ao,isVirtalReference:()=>io,maxSizeModifier:()=>ir,openOverlay:()=>yo,richTextUtils:()=>n,sanitizer:()=>ep,styleUtils:()=>t,testReset:()=>_c,useClickLink:()=>ap,useHandleCurrentDlg:()=>ip,useNavMenuStyle:()=>Zd,useOverlayManager:()=>Ho,useParsedExpressions:()=>sp,useResolvedHtml:()=>lp,utils:()=>e,whetherInSelectorNodeBoundary:()=>fo});var e={};s.r(e),s.d(e,{COLOR_VARIABLE_REGEX:()=>d,capitalizeFirstLetter:()=>P,convertJsAPISymbolColorToStringColor:()=>v,convertStringColorToJsAPISymbolColor:()=>b,createChainedFunction:()=>k,fetchTextInputValidityResult:()=>M,getColorAlpha:()=>O,getColorValue:()=>h,getHttpErrorType:()=>I,isColorVariable:()=>p,isOutOrTopTargetLink:()=>j,isTransparentColor:()=>f,isValidColor:()=>x,isValidNormalColor:()=>S,isWidgetSelected:()=>$,setRef:()=>E,stringOfLinearUnit:()=>T,toColorString:()=>g,toColorVariable:()=>u,toIconResult:()=>R,toLinearUnit:()=>C,toRgba:()=>m});var t={};s.r(t),s.d(t,{expandStyleArray:()=>q,getButtonIconStyle:()=>ge,getButtonStyleByState:()=>me,remToPixel:()=>fe,resolveTextStyle:()=>ce,toBackgroundEmotionStyle:()=>he,toBackgroundStyle:()=>pe,toCSSBorder:()=>Y,toCSSBorderRadius:()=>Q,toCSSBoxshadow:()=>X,toCSSHeight:()=>ee,toCSSMargin:()=>Z,toCSSPadding:()=>K,toCSSStyle:()=>ue,toCSSTextAlign:()=>te,toCSSTextColor:()=>se,toCSSTextFontFamily:()=>ae,toCSSTextFontSize:()=>ie,toCSSTextFontStyle:()=>ne,toCSSTextFontWeight:()=>re,toCSSTextStyle:()=>le,toCSSTextUnderLine:()=>oe,toCSSTransform:()=>de,toCSSWidth:()=>J});var o={};s.r(o),s.d(o,{useCheckSmallBrowserSzieMode:()=>Yt,useControlled:()=>Vt,useEffectOnce:()=>Ut,useEventCallback:()=>Wt,useFirstMountState:()=>Bt,useForkRef:()=>Lt,useForwardRef:()=>zt,useForwardValueRef:()=>_t,useRefValue:()=>At,useTranslate:()=>Dt,useUnmount:()=>Ht,useUpdateEffect:()=>Ft,useWidgetActived:()=>qt,useWidgetSelected:()=>Gt});var n={};s.r(n),s.d(n,{BLANK_CHARATER:()=>Lr,DATA_EXPRESSION_REGEXP:()=>vr,DATA_LINK_REGEXP:()=>br,DATA_UNIQUE_ID_REGEXP:()=>yr,EXP_TAG_REGEXP:()=>gr,HREF_REGEXP:()=>wr,LINK_TAG_REGEP:()=>mr,convertEncodeObject:()=>Or,editExpressionPart:()=>Br,findNode:()=>Dr,getAllExpressions:()=>Rr,getExpressionInfo:()=>Er,getExpressionValues:()=>Ir,getExpressions:()=>Nr,getHTMLTextContent:()=>zr,getLinkInfo:()=>kr,getLinks:()=>Tr,getRecords:()=>jr,getUniqueId:()=>Cr,isBlankRichText:()=>_r,isValidExpressionValue:()=>Pr,matchAll:()=>Sr,replaceHtmlExpression:()=>$r,replaceHtmlLinkHref:()=>Mr,shouldJumpLinkwithBrowserHistory:()=>Ar});var r={};s.r(r),s.d(r,{AdvancedSelect:()=>Ci,Alert:()=>Ii,AlertPopup:()=>aa,Badge:()=>li,Button:()=>Qr,ButtonGroup:()=>ci,Card:()=>Di,Checkbox:()=>Ri,Draggable:()=>ia,Dropdown:()=>di,DropdownButton:()=>ui,DropdownItem:()=>mi,DropdownMenu:()=>fi,DropdownToggle:()=>hi,FloatingPanel:()=>ra,FormFeedback:()=>zi,FormGroup:()=>Ai,FormText:()=>Li,Image:()=>_i,InputGroup:()=>Bi,Label:()=>Ti,Link:()=>vi,ListGroup:()=>Hi,ListGroupItem:()=>Wi,Loading:()=>Ji,MobilePanel:()=>sa,Modal:()=>Vi,MultiSelect:()=>Ui,Nav:()=>ni,NavButtonGroup:()=>si,NavLink:()=>pi,NavMenu:()=>$i,Navbar:()=>qi,NumericInput:()=>Oi,Pagination:()=>Zi,Paper:()=>oa,Popper:()=>ta,Progress:()=>Ki,Radio:()=>ji,Resizable:()=>na,RichDisplayer:()=>ua,RichTextDisplayer:()=>pa,Select:()=>Ei,Slider:()=>Yr,Switch:()=>Pi,Table:()=>Xi,Tabs:()=>Mi,Tag:()=>da,TagInput:()=>ca,TextArea:()=>wi,TextInput:()=>yi,Toast:()=>ea,Tooltip:()=>Qi,UserProfile:()=>la,componentStyleUtils:()=>ha});var i=s(1810);const a=["black","silver","gray","white","maroon","red","purple","fuchsia","green","lime","olive","yellow","navy","blue","teal","aqua","antiquewhite","aquamarine","azure","beige","bisque","blanchedalmond","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkgrey","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","gainsboro","ghostwhite","gold","goldenrod","greenyellow","grey","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightgrey","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","lightyellow","limegreen","linen","magenta","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","oldlace","olivedrab","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","thistle","tomato","turquoise","violet","wheat","whitesmoke","yellowgreen"];var c=s(83016);const d=/^var\(--(.+?)\)$/,u=(e,t)=>{if(null!=e&&""!==e)return void 0!==t?`var(--${e}-${t})`:`var(--${e})`},p=e=>!!d.test(e),h=(e,t)=>p(e)?(0,c.getThemeColorValue)(e,t):e,f=e=>{if("transparent"===e)return!0;try{const t=i.polished.parseToRgb(e);return!(0!==(null==t?void 0:t.alpha))}catch(e){console.error(e)}},g=e=>1===e.rgb.a?e.hex:m(e.rgb),m=e=>`rgba(${e.r},${e.g},${e.b},${e.a})`,v=e=>{if(!Array.isArray(e))return e;const[t,o,n,r]=e,a=(null!=r?r:255)/255;return i.polished.rgba(t,o,n,a)},b=(e,t)=>{var o;if("string"!=typeof e||""===e||null==e)return e;const n=h(e,t),r=i.polished.parseToRgb(n);if(null==r)return;const{red:a,green:s,blue:l}=r;return[a,s,l,255*(null!==(o=r.alpha)&&void 0!==o?o:1)]},y=/^(#|rgb|rgba|var)/gm,w=/^(#|rgb|rgba)/gm,x=e=>"string"==typeof e&&(a.includes(e)||null!=(null==e?void 0:e.match(y))),S=e=>"string"==typeof e&&(a.includes(e)||null!=(null==e?void 0:e.match(w))),O=e=>{var t;return S(e)&&null!==(t=i.polished.parseToRgb(e).alpha)&&void 0!==t?t:1},E=(e,t)=>{"function"==typeof e?e(t):null!=e&&(e.current=t)},k=(...e)=>e.reduce(((e,t)=>null==t?e:("function"!=typeof t&&console.error("Invalid Argument Type, must only provide functions, undefined, or null."),function(...o){e.apply(this,o),t.apply(this,o)})),(()=>{}));function C(e){var t;const o=i.polished.getValueAndUnit(e);return{distance:o[0],unit:null!==(t=null==o?void 0:o[1])&&void 0!==t?t:"px"}}function N(e){var t,o;return null!=e.unit?`${null!==(t=e.distance)&&void 0!==t?t:0}${e.unit}`:`${null!==(o=e.distance)&&void 0!==o?o:0}px`}function T(e){return null==e?"":N("object"==typeof e?e:C(e))}const R=(e,t,o=12)=>({svg:e,properties:{filename:t,size:o}}),j=(e,t)=>i.urlUtils.isAbsoluteUrl(e)||"_top"===t,P=e=>"string"!=typeof e?e:e.charAt(0).toUpperCase()+e.slice(1),$=(e,t)=>{var o,n,r,a;const s=null===(o=(t=null!=t?t:(0,i.getAppStore)().getState()).appRuntimeInfo)||void 0===o?void 0:o.selection,l=null===(r=null===(n=t.appConfig)||void 0===n?void 0:n.layouts)||void 0===r?void 0:r[null==s?void 0:s.layoutId];return(null===(a=null==l?void 0:l.content[null==s?void 0:s.layoutItemId])||void 0===a?void 0:a.widgetId)===e};function M(e,t){var o,n,r,i,a;return n=this,r=void 0,a=function*(){const n=t(e);if("function"==typeof n.then)try{return yield n}catch(e){return{valid:!1,msg:null!==(o=null==e?void 0:e.message)&&void 0!==o?o:e}}return n},new((i=void 0)||(i=Promise))((function(e,t){function o(e){try{l(a.next(e))}catch(e){t(e)}}function s(e){try{l(a.throw(e))}catch(e){t(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(o,s)}l((a=a.apply(n,r||[])).next())}))}function I(e){if(!e||"string"!=typeof e)return null;if(!new RegExp("^(([h][t]{2}[p][s])?://)","i").test(e))return"httpError";const t=e.indexOf(".");return t<0||t===e.length-1?"invalidUrlError":null}var D,A,L,z,_,B,F,U,H,W,V,G;!function(e){e.Left="left",e.Center="center",e.Right="right"}(D||(D={})),function(e){e.Start="start",e.End="end"}(A||(A={})),function(e){e.esriSLSSolid="esriSLSSolid",e.esriSLSDash="esriSLSDash",e.esriSLSDot="esriSLSDot",e.esriSLSDashDot="esriSLSDashDot",e.esriSLSDashDotDot="esriSLSDashDotDot"}(L||(L={})),function(e){e.SOLID="solid",e.DASHED="dashed",e.DOTTED="dotted",e.DOUBLE="double"}(z||(z={})),function(e){e.PRIMARY="primary",e.SECONDARY="secondary",e.SUCCESS="success",e.INFO="info",e.WARNING="warning",e.LIGHT="light",e.DANGER="danger",e.DARK="dark",e.WHITE="white"}(_||(_={})),function(e){e.FIT="fit",e.FILL="fill",e.CENTER="center",e.TILE="tile",e.STRETCH="stretch"}(B||(B={})),function(e){e.PIXEL="px",e.REM="rem",e.EM="em",e.VW="vw",e.PERCENTAGE="%"}(F||(F={})),function(e){e.TL="TL",e.TR="TR",e.BR="BR",e.BL="BL"}(U||(U={})),function(e){e.T="T",e.R="R",e.B="B",e.L="L"}(H||(H={})),function(e){e.OffsetX="OFFSETX",e.OffsetY="OFFSETY",e.BlurRadius="BLUERADIUS",e.SpreadRadius="SPREADRADIUS"}(W||(W={})),function(e){e.AVENIRNEXT="Avenir Next",e.CALIBRI="Calibri",e.PMINGLIU="PmingLiu",e.IMPACT="Impact",e.GEORGIA="Georgia",e.ARIAL="Arial",e.TIMESNEWROMAN="Times New Roman",e.SIMHEI="SimHei",e.MICROSOFTYAHEI="Microsoft YaHei"}(V||(V={})),function(e){e.LEFT="left",e.RIGHT="right",e.CENTER="center",e.JUSTIFY="justify"}(G||(G={}));const q=e=>e&&0!==e.length?1===e.length?[e[0],e[0],e[0],e[0]]:2===e.length?[e[0],e[1],e[0],e[1]]:3===e.length?[e[0],e[1],e[2],0]:[e[0],e[1],e[2],e[3]]:[0,0,0,0],Y=e=>{if(!e||!e.width||!e.color)return;const{width:t,type:o,color:n}=e;return`${T(t)} ${o} ${n}`},Z=e=>{if(!e)return;const{number:t,unit:o}=e,n=q(t);return`${n[0]}${o} ${n[1]}${o} ${n[2]}${o} ${n[3]}${o}`},K=e=>Z(e),X=e=>{if(!e||!e.color)return;const{offsetX:t,offsetY:o,blur:n,spread:r,color:i}=e;return`${T(t)} ${T(o)} ${T(n)} ${T(r)} ${i}`},Q=e=>{if(!e)return;const{number:t,unit:o}=e,n=q(t);return`${n[0]}${o} ${n[1]}${o} ${n[2]}${o} ${n[3]}${o}`},J=e=>{if(!(null==e?void 0:e.value))return;const{value:t}=e;return`${T(t)}`},ee=e=>{if(!(null==e?void 0:e.value))return;const{value:t}=e;return`${T(t)}`},te=e=>{if(e)return`${e.align}`},oe=e=>e?e.underline&&e.strike?"underline line-through":e.underline?"underline":e.strike?"line-through":"none":"none",ne=e=>{if(e)return e.italic?"italic":"normal"},re=e=>{if(e)return e.bold?"bold":"normal"},ie=e=>{if(e)return e.size},ae=e=>{if(e)return e.font},se=e=>{if(e)return`${e.color}`},le=e=>{if(!e)return;const t={fontStyle:ne(e),fontWeight:re(e),fontSize:ie(e),fontFamily:ae(e),textDecoration:oe(e),textAlign:te(e),color:se(e)};return(null==e?void 0:e.background)&&(t.background=e.background),(null==e?void 0:e.letterspace)&&(t.letterSpacing=e.letterspace),(null==e?void 0:e.linespace)&&(t.lineHeight=e.linespace),t},ce=(e={})=>i.css`
    font-style: ${ne(e)};
    font-weight: ${re(e)};
    font-size: ${ie(e)};
    font-family: ${ae(e)};
    text-decoration: ${oe(e)};
    text-align: ${te(e)};
    color: ${se(e)};
    background: ${e.background};
    letter-spacing: ${e.letterspace};
    line-height: ${e.linespace};
  `;function de(e){let t="";return((null==e?void 0:e.rotate)>0||(null==e?void 0:e.rotate)<0)&&(t=`${t} rotate(${e.rotate}deg)`),t}const ue=e=>{if(!e)return{};const{background:t={},backgroundColor:o,border:n,margin:r,padding:a,boxShadow:s,borderRadius:l,width:c,text:d,height:u,transform:p}=e,h=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["background","backgroundColor","border","margin","padding","boxShadow","borderRadius","width","text","height","transform"]),f=pe(t),g=le(d),m=i.lodash.assign({},Object.assign({backgroundColor:o,border:Y(n),margin:Z(r),padding:K(a),boxShadow:X(s),borderRadius:Q(l),width:J(c),height:ee(u),transform:de(p)},h),f,g);return Object.keys(m).forEach((e=>{null==m[e]&&delete m[e]})),m},pe=({color:e,image:t,fillType:o})=>{if(e||t)return{backgroundImage:t&&t.url?`url(${t.url})`:void 0,backgroundColor:e,backgroundPosition:"center",backgroundRepeat:"tile"===o?"repeat":"no-repeat",backgroundSize:(0,i.classNames)({contain:"fit"===o},{cover:"fill"===o},{auto:"tile"===o||"center"===o},{"100% 100%":"stretch"===o})}},he=({color:e,image:t,fillType:o})=>{if(!e&&!t)return;let n;switch(o){case B.FIT:n="contain";break;case B.FILL:n="cover";break;case B.TILE:case B.CENTER:n="auto";break;case B.STRETCH:n="100% 100%"}return i.css`
    background-image: ${t&&t.url?`url(${t.url})`:null};
    background-color: ${e};
    background-position: center;
    background-repeat: ${"tile"===o?"repeat":"no-repeat"};
    background-size: ${n};
  `},fe=(e,t)=>{const[o,n]=i.polished.getValueAndUnit(e);if("rem"!==n)return e;let r=16;const a=t||"100%",[s,l]=i.polished.getValueAndUnit(a);return"%"===l?r=.01*s*16:"px"===l&&(r=s),o*r+"px"},ge=(e,t)=>{var o,n,r,a,s;const l=t?".jimu-nav-link-wrapper":".icon-btn-sizer";return i.css`
   font-size: ${(null==e?void 0:e.size)?`${i.polished.rem(e.size)}!important`:""};
   ${l} > .jimu-icon {
    width: ${(null===(o=null==e?void 0:e.icon)||void 0===o?void 0:o.size)?i.polished.rem(null===(n=null==e?void 0:e.icon)||void 0===n?void 0:n.size):""};
    height: ${(null===(r=null==e?void 0:e.icon)||void 0===r?void 0:r.size)?i.polished.rem(null===(a=null==e?void 0:e.icon)||void 0===a?void 0:a.size):""};
    color: ${null===(s=null==e?void 0:e.icon)||void 0===s?void 0:s.color};
   }
 `},me=(e,t)=>{const o=null==e?void 0:e.default,n=null==e?void 0:e.active,r=null==e?void 0:e.hover,a=null==e?void 0:e.disabled;return i.css`
    .jimu-btn {
      &:not(:disabled):not(.disabled) {
        ${ge(o,t)};
      }
      ${r&&i.css`
      &:not(:disabled):not(.disabled):hover {
          ${ge(r,t)};
        }
      ${n&&i.css`
        &:not(:disabled):not(.disabled).active,
        &[aria-expanded="true"] {
          ${ge(n,t)}
        }
        &:not(:disabled):not(.disabled) {
          cursor: pointer;
        }
      `}
      ${a&&i.css`
        &.disabled,
        &:disabled {
          ${ge(a,t)}
        }
      `}
    `}
    }
  `};var ve=s(13180);const be=i.React.forwardRef(((e,t)=>{const{color:o,className:n,type:r="default",tag:a="button",icon:s,htmlType:l,vertical:c,children:d,size:u="default"}=e,p=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["color","className","type","tag","icon","htmlType","vertical","children","size"]),h=(0,i.classNames)("jimu-btn",n,s&&"icon-btn"),f=s?i.React.createElement("span",{className:"icon-btn-sizer"},d):d;return i.React.createElement(ve.Z,Object.assign({},p,{size:"default"===u?void 0:u,className:h,color:r,innerRef:t,type:l,tag:a}),f)})),ye=(0,c.withStyles)(be,"Button");function we(e){var t=e.getBoundingClientRect();return{width:t.width,height:t.height,top:t.top,right:t.right,bottom:t.bottom,left:t.left,x:t.left,y:t.top}}function xe(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function Se(e){var t=xe(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Oe(e){return e instanceof xe(e).Element||e instanceof Element}function Ee(e){return e instanceof xe(e).HTMLElement||e instanceof HTMLElement}function ke(e){return"undefined"!=typeof ShadowRoot&&(e instanceof xe(e).ShadowRoot||e instanceof ShadowRoot)}function Ce(e){return e?(e.nodeName||"").toLowerCase():null}function Ne(e){return((Oe(e)?e.ownerDocument:e.document)||window.document).documentElement}function Te(e){return we(Ne(e)).left+Se(e).scrollLeft}function Re(e){return xe(e).getComputedStyle(e)}function je(e){var t=Re(e),o=t.overflow,n=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(o+r+n)}function Pe(e,t,o){void 0===o&&(o=!1);var n,r,i=Ne(t),a=we(e),s=Ee(t),l={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(s||!s&&!o)&&(("body"!==Ce(t)||je(i))&&(l=(n=t)!==xe(n)&&Ee(n)?{scrollLeft:(r=n).scrollLeft,scrollTop:r.scrollTop}:Se(n)),Ee(t)?((c=we(t)).x+=t.clientLeft,c.y+=t.clientTop):i&&(c.x=Te(i))),{x:a.left+l.scrollLeft-c.x,y:a.top+l.scrollTop-c.y,width:a.width,height:a.height}}function $e(e){var t=we(e),o=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-o)<=1&&(o=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:o,height:n}}function Me(e){return"html"===Ce(e)?e:e.assignedSlot||e.parentNode||(ke(e)?e.host:null)||Ne(e)}function Ie(e){return["html","body","#document"].indexOf(Ce(e))>=0?e.ownerDocument.body:Ee(e)&&je(e)?e:Ie(Me(e))}function De(e,t){var o;void 0===t&&(t=[]);var n=Ie(e),r=n===(null==(o=e.ownerDocument)?void 0:o.body),i=xe(n),a=r?[i].concat(i.visualViewport||[],je(n)?n:[]):n,s=t.concat(a);return r?s:s.concat(De(Me(a)))}function Ae(e){return["table","td","th"].indexOf(Ce(e))>=0}function Le(e){return Ee(e)&&"fixed"!==Re(e).position?e.offsetParent:null}function ze(e){for(var t=xe(e),o=Le(e);o&&Ae(o)&&"static"===Re(o).position;)o=Le(o);return o&&("html"===Ce(o)||"body"===Ce(o)&&"static"===Re(o).position)?t:o||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&Ee(e)&&"fixed"===Re(e).position)return null;for(var o=Me(e);Ee(o)&&["html","body"].indexOf(Ce(o))<0;){var n=Re(o);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||t&&"filter"===n.willChange||t&&n.filter&&"none"!==n.filter)return o;o=o.parentNode}return null}(e)||t}var _e="top",Be="bottom",Fe="right",Ue="left",He="auto",We=[_e,Be,Fe,Ue],Ve="start",Ge="end",qe="viewport",Ye="popper",Ze=We.reduce((function(e,t){return e.concat([t+"-"+Ve,t+"-"+Ge])}),[]),Ke=[].concat(We,[He]).reduce((function(e,t){return e.concat([t,t+"-"+Ve,t+"-"+Ge])}),[]),Xe=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function Qe(e){var t=new Map,o=new Set,n=[];function r(e){o.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!o.has(e)){var n=t.get(e);n&&r(n)}})),n.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){o.has(e.name)||r(e)})),n}var Je={placement:"bottom",modifiers:[],strategy:"absolute"};function et(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function tt(e){void 0===e&&(e={});var t=e,o=t.defaultModifiers,n=void 0===o?[]:o,r=t.defaultOptions,i=void 0===r?Je:r;return function(e,t,o){void 0===o&&(o=i);var r,a,s={placement:"bottom",orderedModifiers:[],options:Object.assign({},Je,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},l=[],c=!1,d={state:s,setOptions:function(o){u(),s.options=Object.assign({},i,s.options,o),s.scrollParents={reference:Oe(e)?De(e):e.contextElement?De(e.contextElement):[],popper:De(t)};var r=function(e){var t=Qe(e);return Xe.reduce((function(e,o){return e.concat(t.filter((function(e){return e.phase===o})))}),[])}(function(e){var t=e.reduce((function(e,t){var o=e[t.name];return e[t.name]=o?Object.assign({},o,t,{options:Object.assign({},o.options,t.options),data:Object.assign({},o.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(n,s.options.modifiers)));return s.orderedModifiers=r.filter((function(e){return e.enabled})),s.orderedModifiers.forEach((function(e){var t=e.name,o=e.options,n=void 0===o?{}:o,r=e.effect;if("function"==typeof r){var i=r({state:s,name:t,instance:d,options:n});l.push(i||function(){})}})),d.update()},forceUpdate:function(){if(!c){var e=s.elements,t=e.reference,o=e.popper;if(et(t,o)){s.rects={reference:Pe(t,ze(o),"fixed"===s.options.strategy),popper:$e(o)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(e){return s.modifiersData[e.name]=Object.assign({},e.data)}));for(var n=0;n<s.orderedModifiers.length;n++)if(!0!==s.reset){var r=s.orderedModifiers[n],i=r.fn,a=r.options,l=void 0===a?{}:a,u=r.name;"function"==typeof i&&(s=i({state:s,options:l,name:u,instance:d})||s)}else s.reset=!1,n=-1}}},update:(r=function(){return new Promise((function(e){d.forceUpdate(),e(s)}))},function(){return a||(a=new Promise((function(e){Promise.resolve().then((function(){a=void 0,e(r())}))}))),a}),destroy:function(){u(),c=!0}};if(!et(e,t))return d;function u(){l.forEach((function(e){return e()})),l=[]}return d.setOptions(o).then((function(e){!c&&o.onFirstUpdate&&o.onFirstUpdate(e)})),d}}var ot={passive:!0};const nt={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,o=e.instance,n=e.options,r=n.scroll,i=void 0===r||r,a=n.resize,s=void 0===a||a,l=xe(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach((function(e){e.addEventListener("scroll",o.update,ot)})),s&&l.addEventListener("resize",o.update,ot),function(){i&&c.forEach((function(e){e.removeEventListener("scroll",o.update,ot)})),s&&l.removeEventListener("resize",o.update,ot)}},data:{}};function rt(e){return e.split("-")[0]}function it(e){return e.split("-")[1]}function at(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function st(e){var t,o=e.reference,n=e.element,r=e.placement,i=r?rt(r):null,a=r?it(r):null,s=o.x+o.width/2-n.width/2,l=o.y+o.height/2-n.height/2;switch(i){case _e:t={x:s,y:o.y-n.height};break;case Be:t={x:s,y:o.y+o.height};break;case Fe:t={x:o.x+o.width,y:l};break;case Ue:t={x:o.x-n.width,y:l};break;default:t={x:o.x,y:o.y}}var c=i?at(i):null;if(null!=c){var d="y"===c?"height":"width";switch(a){case Ve:t[c]=t[c]-(o[d]/2-n[d]/2);break;case Ge:t[c]=t[c]+(o[d]/2-n[d]/2)}}return t}const lt={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,o=e.name;t.modifiersData[o]=st({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}};var ct=Math.max,dt=Math.min,ut=Math.round,pt={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ht(e){var t,o=e.popper,n=e.popperRect,r=e.placement,i=e.offsets,a=e.position,s=e.gpuAcceleration,l=e.adaptive,c=e.roundOffsets,d=!0===c?function(e){var t=e.x,o=e.y,n=window.devicePixelRatio||1;return{x:ut(ut(t*n)/n)||0,y:ut(ut(o*n)/n)||0}}(i):"function"==typeof c?c(i):i,u=d.x,p=void 0===u?0:u,h=d.y,f=void 0===h?0:h,g=i.hasOwnProperty("x"),m=i.hasOwnProperty("y"),v=Ue,b=_e,y=window;if(l){var w=ze(o),x="clientHeight",S="clientWidth";w===xe(o)&&"static"!==Re(w=Ne(o)).position&&(x="scrollHeight",S="scrollWidth"),w=w,r===_e&&(b=Be,f-=w[x]-n.height,f*=s?1:-1),r===Ue&&(v=Fe,p-=w[S]-n.width,p*=s?1:-1)}var O,E=Object.assign({position:a},l&&pt);return s?Object.assign({},E,((O={})[b]=m?"0":"",O[v]=g?"0":"",O.transform=(y.devicePixelRatio||1)<2?"translate("+p+"px, "+f+"px)":"translate3d("+p+"px, "+f+"px, 0)",O)):Object.assign({},E,((t={})[b]=m?f+"px":"",t[v]=g?p+"px":"",t.transform="",t))}var ft={left:"right",right:"left",bottom:"top",top:"bottom"};function gt(e){return e.replace(/left|right|bottom|top/g,(function(e){return ft[e]}))}var mt={start:"end",end:"start"};function vt(e){return e.replace(/start|end/g,(function(e){return mt[e]}))}function bt(e,t){var o=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(o&&ke(o)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function yt(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function wt(e,t){return t===qe?yt(function(e){var t=xe(e),o=Ne(e),n=t.visualViewport,r=o.clientWidth,i=o.clientHeight,a=0,s=0;return n&&(r=n.width,i=n.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=n.offsetLeft,s=n.offsetTop)),{width:r,height:i,x:a+Te(e),y:s}}(e)):Ee(t)?function(e){var t=we(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):yt(function(e){var t,o=Ne(e),n=Se(e),r=null==(t=e.ownerDocument)?void 0:t.body,i=ct(o.scrollWidth,o.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),a=ct(o.scrollHeight,o.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),s=-n.scrollLeft+Te(e),l=-n.scrollTop;return"rtl"===Re(r||o).direction&&(s+=ct(o.clientWidth,r?r.clientWidth:0)-i),{width:i,height:a,x:s,y:l}}(Ne(e)))}function xt(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function St(e,t){return t.reduce((function(t,o){return t[o]=e,t}),{})}function Ot(e,t){void 0===t&&(t={});var o=t,n=o.placement,r=void 0===n?e.placement:n,i=o.boundary,a=void 0===i?"clippingParents":i,s=o.rootBoundary,l=void 0===s?qe:s,c=o.elementContext,d=void 0===c?Ye:c,u=o.altBoundary,p=void 0!==u&&u,h=o.padding,f=void 0===h?0:h,g=xt("number"!=typeof f?f:St(f,We)),m=d===Ye?"reference":Ye,v=e.elements.reference,b=e.rects.popper,y=e.elements[p?m:d],w=function(e,t,o){var n="clippingParents"===t?function(e){var t=De(Me(e)),o=["absolute","fixed"].indexOf(Re(e).position)>=0&&Ee(e)?ze(e):e;return Oe(o)?t.filter((function(e){return Oe(e)&&bt(e,o)&&"body"!==Ce(e)})):[]}(e):[].concat(t),r=[].concat(n,[o]),i=r[0],a=r.reduce((function(t,o){var n=wt(e,o);return t.top=ct(n.top,t.top),t.right=dt(n.right,t.right),t.bottom=dt(n.bottom,t.bottom),t.left=ct(n.left,t.left),t}),wt(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}(Oe(y)?y:y.contextElement||Ne(e.elements.popper),a,l),x=we(v),S=st({reference:x,element:b,strategy:"absolute",placement:r}),O=yt(Object.assign({},b,S)),E=d===Ye?O:x,k={top:w.top-E.top+g.top,bottom:E.bottom-w.bottom+g.bottom,left:w.left-E.left+g.left,right:E.right-w.right+g.right},C=e.modifiersData.offset;if(d===Ye&&C){var N=C[r];Object.keys(k).forEach((function(e){var t=[Fe,Be].indexOf(e)>=0?1:-1,o=[_e,Be].indexOf(e)>=0?"y":"x";k[e]+=N[o]*t}))}return k}function Et(e,t,o){return ct(e,dt(t,o))}function kt(e,t,o){return void 0===o&&(o={x:0,y:0}),{top:e.top-t.height-o.y,right:e.right-t.width+o.x,bottom:e.bottom-t.height+o.y,left:e.left-t.width-o.x}}function Ct(e){return[_e,Fe,Be,Ue].some((function(t){return e[t]>=0}))}var Nt=tt({defaultModifiers:[nt,lt,{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,o=e.options,n=o.gpuAcceleration,r=void 0===n||n,i=o.adaptive,a=void 0===i||i,s=o.roundOffsets,l=void 0===s||s,c={placement:rt(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,ht(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:l})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,ht(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var o=t.styles[e]||{},n=t.attributes[e]||{},r=t.elements[e];Ee(r)&&Ce(r)&&(Object.assign(r.style,o),Object.keys(n).forEach((function(e){var t=n[e];!1===t?r.removeAttribute(e):r.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,o={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,o.popper),t.styles=o,t.elements.arrow&&Object.assign(t.elements.arrow.style,o.arrow),function(){Object.keys(t.elements).forEach((function(e){var n=t.elements[e],r=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:o[e]).reduce((function(e,t){return e[t]="",e}),{});Ee(n)&&Ce(n)&&(Object.assign(n.style,i),Object.keys(r).forEach((function(e){n.removeAttribute(e)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,o=e.options,n=e.name,r=o.offset,i=void 0===r?[0,0]:r,a=Ke.reduce((function(e,o){return e[o]=function(e,t,o){var n=rt(e),r=[Ue,_e].indexOf(n)>=0?-1:1,i="function"==typeof o?o(Object.assign({},t,{placement:e})):o,a=i[0],s=i[1];return a=a||0,s=(s||0)*r,[Ue,Fe].indexOf(n)>=0?{x:s,y:a}:{x:a,y:s}}(o,t.rects,i),e}),{}),s=a[t.placement],l=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=c),t.modifiersData[n]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,o=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var r=o.mainAxis,i=void 0===r||r,a=o.altAxis,s=void 0===a||a,l=o.fallbackPlacements,c=o.padding,d=o.boundary,u=o.rootBoundary,p=o.altBoundary,h=o.flipVariations,f=void 0===h||h,g=o.allowedAutoPlacements,m=t.options.placement,v=rt(m),b=l||(v!==m&&f?function(e){if(rt(e)===He)return[];var t=gt(e);return[vt(e),t,vt(t)]}(m):[gt(m)]),y=[m].concat(b).reduce((function(e,o){return e.concat(rt(o)===He?function(e,t){void 0===t&&(t={});var o=t,n=o.placement,r=o.boundary,i=o.rootBoundary,a=o.padding,s=o.flipVariations,l=o.allowedAutoPlacements,c=void 0===l?Ke:l,d=it(n),u=d?s?Ze:Ze.filter((function(e){return it(e)===d})):We,p=u.filter((function(e){return c.indexOf(e)>=0}));0===p.length&&(p=u);var h=p.reduce((function(t,o){return t[o]=Ot(e,{placement:o,boundary:r,rootBoundary:i,padding:a})[rt(o)],t}),{});return Object.keys(h).sort((function(e,t){return h[e]-h[t]}))}(t,{placement:o,boundary:d,rootBoundary:u,padding:c,flipVariations:f,allowedAutoPlacements:g}):o)}),[]),w=t.rects.reference,x=t.rects.popper,S=new Map,O=!0,E=y[0],k=0;k<y.length;k++){var C=y[k],N=rt(C),T=it(C)===Ve,R=[_e,Be].indexOf(N)>=0,j=R?"width":"height",P=Ot(t,{placement:C,boundary:d,rootBoundary:u,altBoundary:p,padding:c}),$=R?T?Fe:Ue:T?Be:_e;w[j]>x[j]&&($=gt($));var M=gt($),I=[];if(i&&I.push(P[N]<=0),s&&I.push(P[$]<=0,P[M]<=0),I.every((function(e){return e}))){E=C,O=!1;break}S.set(C,I)}if(O)for(var D=function(e){var t=y.find((function(t){var o=S.get(t);if(o)return o.slice(0,e).every((function(e){return e}))}));if(t)return E=t,"break"},A=f?3:1;A>0&&"break"!==D(A);A--);t.placement!==E&&(t.modifiersData[n]._skip=!0,t.placement=E,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,o=e.options,n=e.name,r=o.mainAxis,i=void 0===r||r,a=o.altAxis,s=void 0!==a&&a,l=o.boundary,c=o.rootBoundary,d=o.altBoundary,u=o.padding,p=o.tether,h=void 0===p||p,f=o.tetherOffset,g=void 0===f?0:f,m=Ot(t,{boundary:l,rootBoundary:c,padding:u,altBoundary:d}),v=rt(t.placement),b=it(t.placement),y=!b,w=at(v),x="x"===w?"y":"x",S=t.modifiersData.popperOffsets,O=t.rects.reference,E=t.rects.popper,k="function"==typeof g?g(Object.assign({},t.rects,{placement:t.placement})):g,C={x:0,y:0};if(S){if(i||s){var N="y"===w?_e:Ue,T="y"===w?Be:Fe,R="y"===w?"height":"width",j=S[w],P=S[w]+m[N],$=S[w]-m[T],M=h?-E[R]/2:0,I=b===Ve?O[R]:E[R],D=b===Ve?-E[R]:-O[R],A=t.elements.arrow,L=h&&A?$e(A):{width:0,height:0},z=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},_=z[N],B=z[T],F=Et(0,O[R],L[R]),U=y?O[R]/2-M-F-_-k:I-F-_-k,H=y?-O[R]/2+M+F+B+k:D+F+B+k,W=t.elements.arrow&&ze(t.elements.arrow),V=W?"y"===w?W.clientTop||0:W.clientLeft||0:0,G=t.modifiersData.offset?t.modifiersData.offset[t.placement][w]:0,q=S[w]+U-G-V,Y=S[w]+H-G;if(i){var Z=Et(h?dt(P,q):P,j,h?ct($,Y):$);S[w]=Z,C[w]=Z-j}if(s){var K="x"===w?_e:Ue,X="x"===w?Be:Fe,Q=S[x],J=Q+m[K],ee=Q-m[X],te=Et(h?dt(J,q):J,Q,h?ct(ee,Y):ee);S[x]=te,C[x]=te-Q}}t.modifiersData[n]=C}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,o=e.state,n=e.name,r=e.options,i=o.elements.arrow,a=o.modifiersData.popperOffsets,s=rt(o.placement),l=at(s),c=[Ue,Fe].indexOf(s)>=0?"height":"width";if(i&&a){var d=function(e,t){return xt("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:St(e,We))}(r.padding,o),u=$e(i),p="y"===l?_e:Ue,h="y"===l?Be:Fe,f=o.rects.reference[c]+o.rects.reference[l]-a[l]-o.rects.popper[c],g=a[l]-o.rects.reference[l],m=ze(i),v=m?"y"===l?m.clientHeight||0:m.clientWidth||0:0,b=f/2-g/2,y=d[p],w=v-u[c]-d[h],x=v/2-u[c]/2+b,S=Et(y,x,w),O=l;o.modifiersData[n]=((t={})[O]=S,t.centerOffset=S-x,t)}},effect:function(e){var t=e.state,o=e.options.element,n=void 0===o?"[data-popper-arrow]":o;null!=n&&("string"!=typeof n||(n=t.elements.popper.querySelector(n)))&&bt(t.elements.popper,n)&&(t.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,o=e.name,n=t.rects.reference,r=t.rects.popper,i=t.modifiersData.preventOverflow,a=Ot(t,{elementContext:"reference"}),s=Ot(t,{altBoundary:!0}),l=kt(a,n),c=kt(s,r,i),d=Ct(l),u=Ct(c);t.modifiersData[o]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:d,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":d,"data-popper-escaped":u})}}]});const Tt={iconSize:"Icon size",showIcon:"Show icon",vertical:"Vertical",horizontal:"Horizontal",expand:"Expand",collapse:"Collapse",space:"Spacing",appearance:"Appearance",textAlign:"Text alignment",alignment:"Alignment",type:"Type",states:"States",textColor:"Text color",background:"Background",border:"Border",borderWidth:"Border width",borderColor:"Border color",borderRadius:"Border radius",boxShadow:"Box shadow",corner:"Corner",shadow:"Shadow",next:"Next",back:"Back",handle:"Handle",previous:"Previous",prev:"Prev",step:"Step",current:"Current",edit:"Edit",duplicate:"Duplicate",circle:"Circle",rectangle:"Rectangle",more:"More",noContent:"No content",copy:"Copy",location:"Location",advance:"Advanced",reset:"Reset",play:"Play",pause:"Pause",inherit:"Inherit",clear:"Clear",clearResults:"Clear results",quickStyle:"Quick style",text:"Text",placeholder:"Placeholder",tooltip:"Tooltip",others:"Others",optional:"Optional",degree:"Degree",meter:"Meter",meterAbbr:"m",second:"Second",symbol:"Symbol",complete:"Complete",incomplete:"Incomplete",active:"Active",inactive:"Inactive",show:"Show",hide:"Hide",setFilters:"Set filters",dragHandler:"Drag handler",guides:"Guides",tools:"Tools",series:"Series",serie:"Serie",axes:"Axes",stacking:"Stacking",sideBySide:"Side by side",stacked:"Stacked",stacked100:"100% Stacked",decimal:"Decimal",show1000Seperator:"Show thousand seperator",notation:"Notation",compact:"Compact",scientific:"Scientific",engineering:"Engineering",to:"to",lineStyle:"Line style",columnOutline:"Outline",sumOfValue:"Sum of value",selection:"Selection",existing:"Existing",min:"Min",max:"Max",noLimit:"No limit",outputStatistics:"{name} statistics",general:"General",dropdownButton:"Dropdown button",currentView:"Current view",slider:"Slider",thumb:"Thumb",thumbHandle:"Thumb handle",sqlExprIncomplete:"SQL expression is incomplete. Please complete it first.",predefinedValueInValidTip:"Please remove invalid or duplicate values.",builderName:"SQL Expression Builder",and:"AND",andLowerCase:"and",or:"OR",orLowerCase:"or",noDataTip:"Please add data first.",noClauseTip:"No clause. Please add one.",clause:"Clause",clauseSet:"Clause set",addClause:"Add clause",addClauseSet:"Add clause set",deleteClause:"Delete clause",deleteClauseSet:"Delete clause set",selectInputEditor:"Select a display style for source type",sourceType:"Select source type",userInput:"User input",field:"Field",unique:"Unique",single:"Single",multiple:"Multiple",uniquePredefined:"Unique (predefined)",multiplePredefined:"Multiple (predefined)",textBox:"Text box",fieldSelector:"Field selector",doubleNumberSelector:"Double text box",simpleSelect:"Dropdown list",uniquePillWrapSelector:"Pill selector",multipleSelect:"Dropdown list",multiplePillWrapSelector:"Pill selector",uniquePredefinedLabel:"Predefine unique values",multiplePredefinedLabel:"Predefine multiple values",dateRangeSelector:"Dropdown list",blankSelector:"Dropdown list",datePicker:"Date Picker",dateTimePicker:"DateTime Picker",doubleDatePicker:"Double Date Picker",doubleDateTimePicker:"Double DateTime Picker",numberListSelector:"Number List Selector",selectUnit:"Select unit",caseSensitive:"Case sensitive",moreInputSettings:"More input settings",unAskForValues:"No user input",displayLabel:"Display label",askForValues:"Ask for values",chooseStyle:"Choose input style",invalidStyleWarnning:"Too many values for this style. Please choose another one.",value:"Value",label:"Label",inlineLabel:"Label position: wrap in different line with input",separateLabel:"Label position: in the same line with input",hint:"Hint",cascade:"List values based on",noneCascadeTip:"All unique values of this field",previousCascadeTip:"Values filtered by previous expressions",allCascadeTip:"Values filtered by all other expressions",stringOperatorIs:"is",stringOperatorIsNot:"is not",stringOperatorContains:"contains",stringOperatorDoesNotContain:"does not contain",stringOperatorStartsWith:"starts with",stringOperatorDoesNotStartWith:"does not start with",stringOperatorEndsWith:"ends with",stringOperatorDoesNotEndWith:"does not end with",stringOperatorIsAnyOf:"is any of",stringOperatorIsNoneOf:"is none of",stringOperatorIsBlank:"is blank",stringOperatorIsNotBlank:"is not blank",numberOperatorIs:"is",numberOperatorIsNot:"is not",numberOperatorIsAtLeast:"is at least",numberOperatorIsAtMost:"is at most",numberOperatorIsLessThan:"is less than",numberOperatorIsGreaterThan:"is greater than",numberOperatorIsBetween:"is between",numberOperatorIsNotBetween:"is not between",numberOperatorIsAnyOf:"is any of",numberOperatorIsNoneOf:"is none of",numberOperatorIsBlank:"is blank",numberOperatorIsNotBlank:"is not blank",dateOperatorIsOn:"is on",dateOperatorIsNotOn:"is not on",dateOperatorIsIn:"is in",dateOperatorIsNotIn:"is not in",dateOperatorIsBefore:"is before",dateOperatorIsAfter:"is after",dateOperatorIsOnOrBefore:"is on or before",dateOperatorIsOnOrAfter:"is on or after",dateOperatorIsBetween:"is between",dateOperatorIsInTheLast:"is in the last",dateOperatorIsNotInTheLast:"is not in the last",dateOperatorIsNotBetween:"is not between",dateOperatorIsBlank:"is blank",dateOperatorIsNotBlank:"is not blank",empty:"Empty",today:"Today",yesterday:"Yesterday",tomorrow:"Tomorrow",thisWeek:"this week",thisMonth:"this month",thisQuarter:"this quarter",thisYear:"this year",year:"Year",month:"Month",week:"Week",day:"Day",hour:"Hour",minute:"Minute",equalsForDisplaySQL:"{fieldAlias} = {value}",doesNotEqualForDisplaySQL:"{fieldAlias} ≠ {value}",isAtLeastForDisplaySQL:"{fieldAlias} >= {value}",isAtMostForDisplaySQL:"{fieldAlias} '<=' {value}",isLessThanForDisplaySQL:"{fieldAlias} '<' {value}",isGreaterThanForDisplaySQL:"{fieldAlias} > {value}",isBetweenForDisplaySQL:"{fieldAlias} is between {value} and {endValue}",isNotBetweenForDisplaySQL:"{fieldAlias} is not between {value} and {endValue}",isAnyOfForDisplaySQL:"{fieldAlias} is any of {value}",isNoneOfForDisplaySQL:"{fieldAlias} is none of {value}",containsForDisplaySQL:"{fieldAlias} contains {value}",doesNotContainForDisplaySQL:"{fieldAlias} does not contain {value}",startsWithForDisplaySQL:"{fieldAlias} starts with {value}",doesNotStartWithForDisplaySQL:"{fieldAlias} does not start with {value}",endsWithForDisplaySQL:"{fieldAlias} ends with {value}",doesNotEndWithForDisplaySQL:"{fieldAlias} does not end with {value}",isForDisplaySQL:"{fieldAlias} is {value}",isNotForDisplaySQL:"{fieldAlias} is not {value}",isOnForDisplaySQL:"{fieldAlias} is on {value}",isNotOnForDisplaySQL:"{fieldAlias} is not on {value}",isAtForDisplaySQL:"{fieldAlias} is at {value}",isNotAtForDisplaySQL:"{fieldAlias} is not at {value}",isInForDisplaySQL:"{fieldAlias} is in {value}",isNotInForDisplaySQL:"{fieldAlias} is not in {value}",isBeforeForDisplaySQL:"{fieldAlias} is before {value}",isAfterForDisplaySQL:"{fieldAlias} is after {value}",isOnOrBeforeForDisplaySQL:"{fieldAlias} is on or before {value}",isOnOrAfterForDisplaySQL:"{fieldAlias} is on or after {value}",isAtOrBeforeForDisplaySQL:"{fieldAlias} is at or before {value}",isAtOrAfterForDisplaySQL:"{fieldAlias} is at or after {value}",isInTheLastForDisplaySQL:"{fieldAlias} is in the last {value} (Amount) {endValue} (Unit)",isNotInTheLastForDisplaySQL:"{fieldAlias} is not in the last {value} (Amount) {endValue} (Unit)",amount:"Amount",widgetIsNotAvailable:"{widgetName} is not available.",showAll:"Show all",showSelection:"Show selection",clearSelection:"Clear selection",searchMore:"Search more",noData:"No data",allTag:"- All -",allDynamicTag:"- All (dynamic) -",outputNoValueWarning:"This filter utilizes an output data source from another widget. In the launched app, the unique values will be dynamically generated once the corresponding actions are executed.",linkToString:"Link to",data:"Data",fill:"Fill",image:"Image",color:"Color",browse:"Browse",clearImage:"Clear image",position:"Position",fit:"Fit",center:"Center",middle:"Middle",tile:"Tile",stretch:"Stretch",dashed:"Dashed",dotted:"Dotted",dashDot:"Dash dot",dashDoubleDot:"Dash double dot",double:"Double",solid:"Solid",offsetX:"Offset X",offsetY:"Offset Y",blurRadius:"Blur radius",spreadRadius:"Spread radius",T:"Top",R:"Right",B:"Bottom",L:"Left",TL:"Top left",TR:"Top right",BR:"Bottom right",BL:"Bottom left",TC:"Top center",ML:"Middle left",MC:"Middle center",MR:"Middle right",BC:"Bottom center",lock:"Lock",unlock:"Unlock",changeUnit:"Change unit",cornerRadius:"corner radius",sameRadius:"Same radius for all corners",differentRadius:"Different radius for each corner",gap:"Gap",left:"Left",top:"Top",bottom:"Bottom",baseline:"Baseline",right:"Right",up:"Up",down:"Down",justify:"Justify",font:"Font",fontSize:"Font size",convert:"Convert",convertToRem:"Convert to rem",bold:"Bold",italic:"Italic",underline:"Underline",strike:"Strikethrough",highlight:"Highlight color",fontColor:"Font color",fontStyle:"Font style",ordered:"Ordered",numbering:"Numbering",bullet:"Bullets",link:"Link",linkTo:"Link to",characterSpacing:"Character spacing",lineSpacing:"Line spacing",indentLeft:"Decrease indent",indentRight:"Increase indent",normal:"Normal",h1:"Heading 1",h2:"Heading 2",h3:"Heading 3",h4:"Heading 4",h5:"Heading 5",h6:"Heading 6",clearAllFormats:"Clear all formatting",textFormat:"Text format",dynamicContent:"Dynamic content",dynamicContentTip:"Connect to data to add dynamic content.",characterEffect:"Character effect",direction:"Direction",style:"Style",default:"Default",tabs:"Tabs",pills:"Pills",numSelected:"{number} Selected",regular:"Regular",hover:"Hover",disabled:"Disabled",views:"Views",auto:"Auto",custom:"Custom",viewsSelected:"{viewNumber} views selected",attribute:"Attribute",statistics:"Statistics",expression:"Expression",operator:"Operator",name:"Name",insert:"Insert",populatedDataView:"Auto-populated",selectionDataView:"Selected features",fields:"Fields",functions:"Functions",invalidExpression:"Invalid expression",static:"Static",openIn:"Open in",appWindow:"App window",topWindow:"Top window",newWindow:"New window",webAddress:"Web address",none:"None",chooseAPage:"Select a page",chooseADialog:"Select a window",chooseViews:"Select views",setLink:"Set link",setLinkForTitle:"Set link for {title}",currentPage:"Current page",invalidUrlMessage:"Invalid URL. Please check and try again.",httpsUrlMessage:"Only HTTPS is supported.",websitePlaceholder:"Enter URL (HTTPS only)",jumpTo:"Jump to",pageTop:"Page top",subscriberContents:"Subscriber contents",subscriberWarning:"Certain resources used in this experience require an ArcGIS subscription. Enable public access by authoring with your subscription. Be aware that some content will consume credits.",requestLimit:"Request limit",requestInterval:"Interval",intervalNone:"None",intervalSecond:"Second",intervalMinute:"Minute",intervalHour:"Hour",intervalDay:"Day",authorized:"Authorized",subscriberContent:"Subscriber content",credits:"Credits",disabledProxyTooltip:"Current account does not have subscription for this resource.",ascending:"Ascending",decending:"Descending",optionNamePlaceholder:"Please enter the option name.",addOption:"Add an option",option:"Option",addSortBtntext:"Add a sort field",noOptionRemindText:"There is no option.",noSortRemindText:"There is no sort field.",pleaceAddOne:"Please add one.",deleteOption:"Delete",featureLayer:"Feature Layer",featureSet:"Feature Set",featureService:"Feature Service",mapService:"Map Service",groupLayer:"Group Layer",hubAnnotations:"Hub Annotations",hubEvents:"Hub Events",map:"Map",simpleLocal:"Simple Local",webMap:"Web Map",webScene:"Web Scene",csv:"CSV",sceneService:"Scene Service",sceneLayer:"Scene Layer",filter:"Filter",records:"Records",pageSize:"Page size",maximum:"Maximum",maximumRecordCount:"Maximum record count",dataView:"Data view",applyChanges:"Apply changes",anArcGISServerWebService:"An ArcGIS Server Web Service",layer:"Layer",maximumLimitationWarning:"Maximum setting will not take effect in Map widget.",dataViewForNoSelection:"View for empty selection",dataViewForNoSelectionHint:"Enable this will display values of features in this view where the selected features view is used but no feature is selected yet.",disable:"Disable",enable:"Enable",relatedWidgetsWithNum:"Related widgets: {directlyNum} (Directly) / {totalNum} (In total)",relatedWidgetsWithDirectlyNum:"Related widgets: {num}",containLayersWithNum:"Layers: {layerNum}",addDataByUrlHint:"Only feature service, map service and scene service with HTTPS are supported.",source:"Source",settings:"Settings",home:"Home",widgets:"Widgets",mapping:"Mapping",layers:"Layers",createAView:"Create a view",rename:"Rename",removeDataAffectedWidgets:"This data is used in the following widgets and removing it may break them.",removeDataSource:"Remove data",removeDataWarningTip:"You are removing data:",outputDataWillBeRemovedTogether:"Output data will be removed together",removeSourceWidgetWarningTip:"Deleting {widgetName} will also remove its output data.",removeSourceWidgetAffectedWidgets:"Following widgets rely on above data and may be affected.",howToRemoveWidgetsTip:"Select the widgets you want to delete alongside the data. Be aware they will be removed from all devices views. The unselected widgets will be kept and you can reconfigure them later.",relatedWidgets:"Related widgets",clickToHide:"Click to hide",clickToShow:"Click to show",selectADataView:"Select or create data view",connectToData:"Connect to data",setDataSource:"Select data",addNewData:"Add new data",pleaseAddData:"Please add data.",added:"Added",outputs:"Outputs",noAddedDataSourceCanBeUsed:"No added data can be used.",noSelectedType:"No selected type.",noDataTypeInTheApp:"No {dataType} in the app.",noWidgetOutputOfDataType:"No widget output of {dataType}.",noWidgetOutputCanBeUsed:"No widget output can be used.",all:"All",selectDataPlaceholder:'Click the "Select data" button to add data source to this widget.',outputDataIsNotGenerated:"{outputDsLabel} is not generated yet. Please run {sourceWidgetName} first.",selectData:"Select data",addData:"Add data",serviceType:"Service type",url:"URL",add:"Add",done:"Done",undone:"Undone",hub:"Hub",unSupported:"Unsupported",selected:"Selected",pleaseSelectData:"Please select data",folder:"Folder",remove:"Remove",allMyContent:"All my content",allMyGroupsContent:"All my groups' content",rootFolder:"Root folder",addDataErrorInvalidSceneLayer:"Scene layer without an associated feature layer is not supported.",addDataErrorNotSupported:"Data type is not supported yet.",creatProxyToPublishAppError:"Publish failed. Cannot create proxy for subscriber contents. Try again later or modify the authorization.",sort:"Sort",sortBy:"Sort by",sorting:"Sorting",modified:"Modified",title:"Title",numViews:"View numbers",myContent:"My content",myOrganization:"My organization",myGroup:"My groups",public:"ArcGIS Online",livingAtlas:"Living Atlas",noItemFoundWarning:"We couldn't find what you were looking for. Please try another one.",details:"Details",description:"Description",authoritativeBadgeTooltip:"Recommended by Esri",livingAtlasBadgeTooltip:"Esri curated content",subscriberBadgeTooltip:"Exclusive content for subscribers",premiumBadgeTooltip:"Exclusive content for subscribers. Consumes credits.",commonModalOk:"OK",commonModalCancel:"Cancel",owner:"Owner",updated:"Updated",setAnImage:"Select an image",localImage:"Local",urlImage:"URL",uploadImage:"Upload",nextStepForImage:"Next",urlIsHereForImage:"Type URL here",uploadImageError:"Error",imageTypeError:"You have specified an image type that is not supported. Please use one of these types: PNG, GIF, JPG, JPEG or BMP.",imageSelectorBlankStatus:'Click the "{UploadString}" button to select an image from your device.',imageUploadTips:"Choose image files to upload",padding:"Padding",waitForThemeList:"Getting themes list...",themeSectionColor:"Color",themeSectionFont:"Font",themeSettingThemeColors:"Theme colors",themeSettingThemeColorsDescription:"Change the look of your app by customizing your theme colors. When you change these colors here, they will affect where they are used",themeSettingThemeColorAdvanced:"Advanced color setting",themeSettingColorMode:"Color mode",themeSettingColoration:"Coloration",themeSettingAppElements:"App elements",themeSettingAppElementsDescription:"Define the colors for: header, body, and footer specifically.",themeSettingAppElementsDescription2:"These colors can be overridden in the Page's settings panel.",themeSettingThemeFont:"Theme font",themeSettingThemeFontset:"Theme font set",themeSettingSize:"Size",themeLight:"Light",themeDark:"Dark",themeColorationMinimal:"Minimal",themeColorationDefault:"Default",themeColorLighter:"lighter",themeColorLightest:"lightest",themeColorDarker:"darker",themeColorDarkest:"darkest",ThemeBrandColors:"Brand colors",ThemeAlertColors:"Alert colors",ThemeNeutualColors:"Neutual colors",themeFontDummyHeading:"Heading",themeFontDummyParagraph:"Lorem ipsum dolor sitamet, tur adipiscing elit...",themeSettingShowShadows:"Show shadows",themeHeadingTitle:"Heading",themeBodyTitle:"Body",useSharedTheme:"Use organization shared theme",sharedThemeOrgNamePrefix:"Shared theme from:",saveAs:"Save as",variableColorPrimary:"Primary",variableColorSecondary:"Secondary",variableColorLight:"Light",variableColorDark:"Dark",variableColorSuccess:"Success",variableColorInfo:"Info",variableColorWarning:"Warning",variableColorDanger:"Danger",variableColorBlack:"Black",variableColorWhite:"White",variableColorTransparent:"Transparent",variableTypography:"Typography",variableBg:"Background",variableColor:"Text",variableFontFamilyBase:"Font family",variableFontSizeBase:"Base font size",variableHeader:"Header",variableBody:"Body",variableFooter:"footer",variableLink:"Link",variableButton:"Button",variablePrimaryButton:"Primary Button",variableDefaultButton:"Default Button",variableSuefaces:"Surfaces",variableCustomPalette:"Customize palette colors",variableCustomFontset:"Customize font set",variableDescriptionPrimary:"used to present primary UI elements, active states, or interactive sections",variableDescriptionSecondary:"an optional color used to compliment the primary color to define your brand.",variableDescriptionInfo:"used to present general information.",variableDescriptionSuccess:"used to present a success state, such as completion of a process or passing a successful check.",variableDescriptionWarning:"used to present an in-progress state or warning information that the users should be noticed.",variableDescriptionDanger:"used to present a failed state or a severe situation that the users should be aware of.",variableDescriptionLight:"mostly used to present the background and border of layout elements, such as containers and separators.",variableDescriptionDark:"mostly used to present text elements.",variableDescriptionHeader:"The header section of all pages in your app.",variableDescriptionBody:"The main content section of all pages in your app.",variableDescriptionFooter:"The footer section of all pages in your app.",variableDescriptionSurfaces:"The surfaces, such as containers and panels, in your app.",variableAddCustomFont:"Add custom font",variableChangeCustomFont:"Change custom font",variableAddCustomFontNote:"Currrently only one custom font can be added.",variableHeaderBackground:"Header background",variableHeaderText:"Header text",variableButtonBackground:"Button background",variableButtonText:"Button text",variableBodyBackground:"Body background",variableBodyText:"Body text",variableLinks:"Links",setIcon:"Select icon",iconViewerModalTitle:"Select an icon",removeIcon:"Remove icon",myIcons:"My icons",iconGroup_general:"General",iconGroup_arrows:"Arrows",iconBackground:"Icon background",iconUploadTips:"Add custom icons",themeColor:"Theme colors",customColor:"Custom colors",moreColor:"More colors",customize:"Custom",recentColor:"Recent colors",standard:"Standard",standardColor:"Standard colors",noColor:"No color",orgColors:"Organization colors",themeColorTip:"Select a color from your theme",sharedThemeColorTip:"Select a color defined in your organization shared theme",standardColorTip:"Select a color from standard options. Using this will be fixed and won't be affected when you change theme. ",recentColorTip:"Set a specific color to use by clicking More below. Recent 8 customized colors will be saved. Also, custom colors won’t change if you alter theme.",select:"Select",clearColor:"Clear color",qrCodeSaveBtnLabel:"Save as image",width:"Width",height:"Height",myProfile:"My profile",accountHelp:"Help",switchAccount:"Switch accounts",signOut:"Sign out",signIn:"Sign in",arcgisBlog:"ArcGIS Blog",mySettings:"My settings",communityAndForums:"Community and Forums",myesri:"My Esri",training:"Training",profileLeave:"Leave",profileLeaveSite:"Leave site?",profileLeaveDescription:"Changes you made may not be saved.",share:"Share",sharelink:"Share link",email:"Email",embed:"Embed",facebook:"Facebook",qrcode:"QR code",twitter:"Twitter",pinterest:"Pinterest",linkedin:"LinkedIn",copiedToClipboard:"Copied to clipboard",tilt:"Tilt",altitude:"Altitude",ground:"Ground",outerSpace:"Space",clamped2Ground:"Clamped to ground",relative2Ground:"Relative to ground",absolute:"Absolute",extendPath2Gground:"Extend path to ground",mapFailure:"Creating map failed.",mapCrash:"This map doesn't appear because the number of maps opened in the app has reached the maximum imposed for performance.",mapRecover:"Reload",ZoomLabel:"Zoom",HomeLabel:"Home",NavigationLabel:"Navigation",LocateLabel:"Locate",CompassLabel:"Compass",SearchLabel:"Search",LayersLabel:"Layers",BaseMapLabel:"Basemap",MeasureLabel:"Measure",FullScreenLabel:"Fullscreen",ScaleBarLabel:"Scale bar",LayersLabelLayer:"Layer",LayersLabelLegend:"Legend",LegendLabel:"Legend",SelectLabel:"Select",SelectionTool:"Selection tool",SelectionToolRectangle:"Rectangle",SelectionToolLasso:"Lasso",SelectionToolCircle:"Circle",SelectionToolLine:"Line",SelectionToolPoint:"Point",SelectionMode:"Selection mode",SelectionWithin:"Partially or completely within",SelectionContain:"Completely contained by",SelectionZoomTo:"Zoom to",SelectionSeleted:"selected",SelectionActions:"Actions",SelectionFeaturesSelected:"Features selected",SelectionSelectedFeatures:"Selected features",SelectionZoomToSelectedFeatures:"Zoom to selected features",SelectionByRectangle:"Select by rectangle",SelectionByLasso:"Select by lasso",SelectionByLine:"Select by line",SelectionByPoint:"Select by point",SelectionByCircle:"Select by circle",SelectionByPolygon:"Select by polygon",drawToolPreview:"Preview",drawToolSource:"Source",drawToolOpacity:"Opacity",drawToolStyles:"Drawing styles",drawToolDash:"Dash",drawToolDashDot:"Dash dot",drawToolDot:"Dot",drawToolLongDash:"Long dash",drawToolLongDashDot:"Long dash dot",drawToolLongDashDotDot:"Long dash dot dot",drawToolShortDash:"Short dash",drawToolShortDashDot:"Short dash dot",drawToolShortDashDotDot:"Short dash dot dot",drawToolShortDot:"Short dot",drawToolSolid:"Solid",fixedWindows:"Fixed windows",anchoredWindows:"Anchored windows",zoomIn:"Zoom in",zoomOut:"Zoom out",zoomToFit:"Fit width to current window",zoomToNormal:"Zoom to 100%",openSettingPanel:"Open setting panel",closeSettingPanel:"Close setting panel",switchPage:"Switch page",basic:"Basic",noTagMatch:"No existing {lableName} match.",addTag:"Add {lableName}",tag:"tag",closeTour:"Close",skipTour:"Skip",startTour:"Start the tour",finishTour:"Finish",openTour:"Open the tour",actionRequired:"Action required",errorCannotFindNextStep:"Could not find the next step. Please follow the instruction and try again.",linkPreviewTip:"This link will work in Preview.",openingGuideStep1Title:"Getting started",openingGuideStep1Content:"This tour will show you how to navigate in Experience Builder",openingGuideStep2Title:"Canvas",openingGuideStep2Content:"You can interact with widgets in your experience visually on the canvas.",openingGuideStep3Title:"Sidebar",openingGuideStep3Content:"Allows you to open the widget, page, data, and theme panels.",openingGuideStep4Title:"Insert widget",openingGuideStep4Content:"Click on the Map widget and drag it onto the canvas.",openingGuideStep5Title:"Resize widget",openingGuideStep5Content:"You can change the size of widget on the canvas.",openingGuideStep7Title:"Style",openingGuideStep7Content:"Click the Style tab to switch to the style setting panel.",openingGuideStep8Title:"Size and position",openingGuideStep8Content:"Click the Full size button located at the top right hand corner.",openingGuideStep8Title2:"Style",openingGuideStep8Content2:"Allows you to customize properties such as size, position, background, animation, border, and transform.",openingGuideStep9Title:"Action",openingGuideStep9Content:"Click the Action tab to switch to the action setting panel.",openingGuideStep10Title:"Action",openingGuideStep10Content:"Interactions between widgets can be configured using triggers and actions. Widget actions are in response to linked trigger actions in other widgets.",openingGuideStep11Title:"Header",openingGuideStep11Content:"Click Live view to make your experience interactive inside the builder.",openingGuideStep12Title:"Page",openingGuideStep12Content:"Shows the structure of your experience. You can create and organize pages and folders and change page settings.",openingGuideStep13Title:"Data",openingGuideStep13Content:"Displays all the data listed in your experience and the widgets connected to the data.",openingGuideStep14Title:"Theme",openingGuideStep14Content:"Defines the color scheme for the appearance of your experience.",openingGuideStep15Title:"End of tour",openingGuideStep15Content:"You can always return if you need a refresher.",whatsNewStep1Title:"What's new",whatsNewStep1Content:"Here are some of the latest features in Experience Builder.",whatsNewStep2Title:"New: Search widget",whatsNewStep2Content:"Allows finding features or locations based on specific layers and locators.",whatsNewStep3Title:"New: Edit widget (beta)",whatsNewStep3Content:"Allows creating, updating, or deleting features in data sources or map widgets. Editing directly in a map widget allows modifying attributes and geometry.",whatsNewStep4Title:"New: Oriented Imagery widget",whatsNewStep4Content:"Allows interacting with and visualizing imagery that is taken from any angle—including oblique, street-side, inspection, and 360-degree images—in a 2D map or 3D scene.",whatsNewStep5Title:"Data source",whatsNewStep5Content:"The layer order in an experience now honors the layer order saved in the map or scene.",whatsNewStep6Title:"Builder",whatsNewStep6Content:"Create an experience with an auto-populated map directly from Map Viewer or a map or scene item page.",whatsNewStep7Title:"Windows",whatsNewStep7Content:"Provides two new templates to deliver additional guidance, information, or data in a window.",whatsNewStep8Title:"Screen groups",whatsNewStep8Content:"Supports moving the entire screen group to the pending list for custom layouts.<br/>Provides a blank screen template without a panel.",whatsNewStep9Title:"Templates",whatsNewStep9Content:"Provides two new default templates that use Fly Controller widgets in a fullscreen and scrolling page, plus corresponding public app templates to demonstrate each with data.",whatsNewStep10Title:"Performance",whatsNewStep10Content:"Improves the performance of loading and searching data sources when adding data.",whatsNewStep11Title:"Chart widget",whatsNewStep11Content:"Supports line chart and area chart.<br/>Supports four notations for displaying number values, including standard, compact, scientific, and engineering.",whatsNewStep12Title:"Table widget",whatsNewStep12Content:"Supports scene layers that contain associated feature layers.<br/>Improves responsive display of tabs on mobile devices or when there's a lot of data.<br/>When allow editing is set, you can now determine which fields are editable. ",whatsNewStep13Title:"List widget",whatsNewStep13Content:"Changing the Regular state layout now automatically updates the Selected and Hover states to match.<br/>Allows excluding the Last update label with timestamp that indicates when the data was refreshed in the app.",whatsNewStep14Title:"Query widget",whatsNewStep14Content:"Supports querying data sources based on the geometry of selected features. You can specify spatial relationship rules and end users can set a buffer distance at runtime.<br/>Allows you to customize results, such as which fields to display and meaningful names based on a custom expression from the data.",whatsNewStep15Title:"Filter widget",whatsNewStep15Content:"Allows zooming and panning to features on the map after applying the filter.",whatsNewStep16Title:"Survey widget",whatsNewStep16Content:"Allows you to edit and view an existing survey record in addition to adding a new one.",whatsNewStep17Title:"Text widget",whatsNewStep17Content:"Allows you to customize the content and style of the placeholder when editing a template.",whatsNewStep18Title:"See all the new features",whatsNewStep18Content:"Learn more",whatsNewStep19Title:"New: Query widget",whatsNewStep19Content:"Allows retrieving information from a data source by executing an attribute or spatial filter query.",whatsNewStep20Title:"New: Chart widget",whatsNewStep20Content:"Allows visualizing quantitative attributes from an operational layer to reveal potential patterns or trends.",whatsNewStep21Title:"New: Coordinate Conversion widget",whatsNewStep21Content:"Allows converting coordinates between coordinate systems using multiple notation formats.",whatsNewStep22Title:"New: Data action",whatsNewStep22Content:"Provides an action menu in supported widgets for end users to process data at runtime, such as exporting to a file or showing records in a target widget.",whatsNewStep23Title:"Data source",whatsNewStep23Content:"When setting a data source, you can now search sublayers, choose a selected features view, or use output data generated by Query and Chart widgets.<br/>Shows a warning when deleting a widget for which other widgets use its output data.",whatsNewStep24Title:"Builder",whatsNewStep24Content:"Supports linking widgets in scrolling pages to scroll to a specific block on the page or return to the top.",whatsNewStep25Title:"Window",whatsNewStep25Content:"Supports customizing position, size, and layout for different screen sizes.",whatsNewStep26Title:"Layout",whatsNewStep26Content:"Allows keeping the aspect ratio when the widget is placed in a fixed layout and the width is set to Stretch or Custom.<br/>Provides advanced snap lines to help align and precisely position widgets in a fixed layout, such as fullscreen page, window, and fixed panel.",whatsNewStep27Title:"Template",whatsNewStep27Content:"Provides more default app and page templates to visualize data using a narrative tour and single- or multipage layouts for monitoring status.",whatsNewStep28Title:"Outline",whatsNewStep28Content:"When pointing to a widget in the outline, it is highlighted on the canvas.",whatsNewStep29Title:"Map widget",whatsNewStep29Content:"Provides quality options for web scenes to balance the visual effect and loading efficiency.",whatsNewStep30Title:"Feature Info widget",whatsNewStep30Content:"Supports scene layers.",whatsNewStep31Title:"Table widget",whatsNewStep31Content:"Allows showing search suggestions.<br/>Supports dragging to reorder the fields for initial display.<br/>Supports attribute editing by checking data capabilities, user credentials, and privileges.<br/>Provides selection modes to allow users to select single or multiple records.",whatsNewStep32Title:"Filter widget and SQL Expression Builder",whatsNewStep32Content:"Supports dragging to reorder filters in widget setting, as well as values in the predefined value list.",whatsNewStep33Title:"Fly Controller widget",whatsNewStep33Content:"Provides a new fly mode to plan routes by adding points and paths to fly through.",whatsNewStep34Title:"Survey widget",whatsNewStep34Content:"When selecting existing surveys, you can select a draft survey from the list and organization administrators can select surveys that other members own.",whatsNewStep35Title:"Text widget",whatsNewStep35Content:"Provides a new font size unit for vw (view width).<br/>Supports setting a link for all the text instead of just specific words.",DSSelectionStep1Title:"Widget content",DSSelectionStep1Content:"Click on Select map to add a new data source.",DSSelectionStep2Title:"Add new data",DSSelectionStep2Content:"Click add new data and select a web map for a data source.",DSSelectionStep3Title:"Select data",DSSelectionStep3Content:"Click the web map in the select data panel.",DSSelectionStep4Title:"Widget content",DSSelectionStep4Content:"Click on Select data to add a new data source.",DSSelectionStep5Title:"Select data",DSSelectionStep5Content:"Click the feature layer in the select data panel.",insertWidgetStep1Title:"Insert widget",insertWidgetStep1Content:"Click on the widget and drag it onto the canvas.",animation:"Animation",maskColor:"Mask color",trigger:"Trigger",help:"Help",in:"In",out:"Out",fade_in:"Fade in",fade_out:"Fade out",fly_in:"Fly in",fly_out:"Fly out",zoom_in:"Zoom in",zoom_out:"Zoom out",wipe_in:"Wipe in",wipe_out:"Wipe out",spin_in:"Spin in",spin_out:"Spin out",float_in:"Float in",float_out:"Float out",playAnimation:"Play the animation",asOneObject:"As one object",widgetByWidget:"Contained widget",scrollIntoView:"Scroll into view",animationFrom:"Animation from",gentle:"Gentle",wobbly:"Wobbly",stiff:"Stiff",slow:"Slow",molasses:"Molasses",preview:"Preview",change:"Change",transition:"Transition",effect:"Effect",cover:"Cover",cube:"Cube",fade:"Fade",push:"Push",box:"Box",multiPages:"Multi-pages",addScreen:"Add screen",newScreen:"New screen",mainStage:"Main stage",scrollingPanel:"Scrolling panel",urlInfo:"URL info",urlInfoPanelHint:"Add URL info from",appUrl:"App URL",emptyHint:"There is no available URL info to use.",dataPanelTitle:"Data attribute",dataPanelHint:"Add data attributes to form your dynamic URL.",dataUnavailableTips:"Data not available. Please connect to valid data sources first.",requiredField:"This is a required field.",required:"Required",lastUpdateTime:"Last update: {updateTime} minutes ago",lastUpdateAMinute:"Last update: a minute ago",lastUpdateAFewTime:"Last update: a few seconds ago",applyToLargeScreen:"Apply to large screen devices.",applyToMediumScreen:"Apply to medium screen devices.",applyToSmallScreen:"Apply to small screen devices.",pageNumber:"Page {pageNumber}",addWidget:"Add widget"},{useRef:Rt,useEffect:jt,useMemo:Pt,useCallback:$t,useState:Mt}=i.React,{useSelector:It}=i.ReactRedux,Dt=(e,t,o)=>{const n=(0,i.useIntl)(),r=i.React.useMemo((()=>{const n=null==e&&null==t&&null==o?[Tt]:[e,t,o].filter((e=>null!=e));return i.lodash.assign({},...n)}),[e,t,o]);return $t(((e,t)=>n.formatMessage({id:e,defaultMessage:r[e]},t)),[n,r])},At=e=>{const t=Rt(e);return jt((()=>{t.current=e})),t},Lt=(e,t)=>Pt((()=>null==e&&null==t?null:o=>{E(e,o),E(t,o)}),[e,t]),zt=e=>{const t=Rt(null),o=Lt(t,e);return[t,$t((e=>{E(o,e)}),[o])]},_t=e=>{const[t,o]=Mt(null);return[t,$t((t=>{o(t),E(e,t)}),[])]},Bt=()=>{const e=Rt(!0);return e.current?(e.current=!1,!0):e.current},Ft=(e,t)=>{const o=Bt();jt((()=>{if(!o)return e()}),t)},Ut=e=>{jt(e,[])},Ht=e=>{const t=Rt(e);t.current=e,Ut((()=>()=>t.current()))},Wt=e=>{const t=i.React.useRef(e);return jt((()=>{t.current=e})),i.React.useCallback(((...e)=>(0,t.current)(...e)),[])},Vt=({controlled:e,default:t})=>{const{current:o}=Rt(void 0!==e),[n,r]=Mt(t);return[o?e:n,i.React.useCallback((e=>{o||r(e)}),[]),o]},Gt=e=>It((t=>$(e,t))),qt=e=>It((t=>{var o,n;return(null===(n=null===(o=t.widgetsRuntimeInfo)||void 0===o?void 0:o[e])||void 0===n?void 0:n.state)===i.WidgetState.Active})),Yt=()=>It((e=>e.browserSizeMode))===i.BrowserSizeMode.Small,Zt=e=>e.reduce(((e,[t,o])=>(e[t]=o,e)),{}),Kt=[];var Xt=function(e,t,o,n){return new(o||(o=Promise))((function(r,i){function a(e){try{l(n.next(e))}catch(e){i(e)}}function s(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,s)}l((n=n.apply(e,t||[])).next())}))};const{useState:Qt}=i.React,Jt=()=>{},eo=()=>Xt(void 0,void 0,void 0,(function*(){return yield Promise.resolve(null)})),to=i.React.forwardRef(((e,t)=>{const{reference:o,modifiers:n,placement:r="bottom",strategy:a="absolute",version:s,onFirstUpdate:l,children:c}=e,[d,u]=Qt(null),[p,h]=Qt(null),f=i.React.useMemo((()=>({placement:r,strategy:a,onFirstUpdate:l,modifiers:[...null!=n?n:[],{name:"arrow",enabled:null!=p,options:{element:p}}]})),[r,a,l,n,p]),{poppered:g,state:m,styles:v,forceUpdate:b,update:y,attributes:w}=((e,t,o,n={})=>{var r,a,s,l,c,d,u,p,h;const f=i.React.useRef(null),g=i.React.useRef(!1),m={onFirstUpdate:n.onFirstUpdate,placement:null!==(r=n.placement)&&void 0!==r?r:"bottom",strategy:null!==(a=n.strategy)&&void 0!==a?a:"absolute",modifiers:null!==(s=n.modifiers)&&void 0!==s?s:Kt},[v,b]=i.React.useState({styles:{popper:{position:m.strategy,left:"0",top:"0"}},attributes:{}}),y=i.React.useMemo((()=>({name:"updateState",enabled:!0,phase:"write",fn:({state:e})=>{const t=Object.keys(e.elements);b({styles:Zt(t.map((t=>{var o;return[t,null!==(o=e.styles[t])&&void 0!==o?o:{}]}))),attributes:Zt(t.map((t=>[t,e.attributes[t]])))})},requires:["computeStyles"]})),[]),w=i.React.useMemo((()=>{const e={onFirstUpdate:m.onFirstUpdate,placement:m.placement,strategy:m.strategy,modifiers:[...m.modifiers,y,{name:"applyStyles",enabled:!1}]};return i.lodash.isDeepEqual(f.current,e)?null==f.current?e:f.current:(f.current=e,e)}),[m.onFirstUpdate,m.placement,m.strategy,m.modifiers,y]),x=i.React.useRef(null),S=Lt(x,e);return i.React.useEffect((()=>{null!=x.current&&x.current.setOptions(w)}),[w]),i.React.useEffect((()=>{if(null==t||null==o)return;null!=o.style.top&&delete o.style.top,null!=o.style.left&&delete o.style.left,null!=o.style.right&&delete o.style.right,null!=o.style.bottom&&delete o.style.bottom;const e=Nt(t,o,w);return g.current=!0,S(e),()=>{g.current=!1,e.destroy(),S(null)}}),[t,o]),{poppered:g.current,state:null!==(c=null===(l=x.current)||void 0===l?void 0:l.state)&&void 0!==c?c:null,styles:v.styles,attributes:v.attributes,update:null!==(u=null===(d=x.current)||void 0===d?void 0:d.update)&&void 0!==u?u:null,forceUpdate:null!==(h=null===(p=x.current)||void 0===p?void 0:p.forceUpdate)&&void 0!==h?h:null}})(t,o,d,f);Ft((()=>Xt(void 0,void 0,void 0,(function*(){void 0!==s&&(yield null==y?void 0:y())}))),[s,y]);const x=i.React.useMemo((()=>{var e,t,o,n,i,a;return{poppered:g,ref:u,style:v.popper,boxStyle:null===(e=null==m?void 0:m.styles)||void 0===e?void 0:e.box,attributes:w.popper,placement:null!==(t=null==m?void 0:m.placement)&&void 0!==t?t:r,hasPopperEscaped:null!==(n=null===(o=null==m?void 0:m.modifiersData.hide)||void 0===o?void 0:o.hasPopperEscaped)&&void 0!==n?n:null,isReferenceHidden:null!==(a=null===(i=null==m?void 0:m.modifiersData.hide)||void 0===i?void 0:i.isReferenceHidden)&&void 0!==a?a:null,arrowProps:{style:v.arrow,ref:h},forceUpdate:null!=b?b:Jt,update:null!=y?y:eo}}),[u,h,r,m,v,w,y,b,g]);return i.React.createElement(i.React.Fragment,null,"function"==typeof c?c(x):c)})),oo="virtual-reference";class no{constructor(e){this.declareClass=oo;const{top:t=0,left:o=0,width:n=0,height:r=0}=e;this.top=t,this.left=o,this.width=n,this.height=r,this.right=this.left+this.width,this.bottom=this.top+this.height}getBoundingClientRect(){return{top:this.top,left:this.left,bottom:this.bottom,right:this.right,width:this.width,height:this.height}}get clientWidth(){return this.getBoundingClientRect().width}get clientHeight(){return this.getBoundingClientRect().height}}const ro=()=>{var e;return null!=(null===(e=null===window||void 0===window?void 0:window.document)||void 0===e?void 0:e.createElement)},io=e=>(null==e?void 0:e.declareClass)===oo||e.isVirtualReference,ao=e=>"object"==typeof e&&"current"in e,so=e=>{if(ao(e))return e.current;if(io(e))return e;if("function"==typeof e)return e();if("string"==typeof e&&ro()){let t=document.querySelectorAll(e);return(null==t||t.length<=0)&&(t=document.querySelectorAll(`#${e}`)),(null==t||t.length<=0)&&console.error(`The target '${e}' could not be identified in the dom, tip: check spelling`),t}return e},lo=e=>null!==e&&(Array.isArray(e)||ro()&&"number"==typeof e.length),co=e=>{if(null==e)return;const t=so(e);return lo(t)?t[0]:t},uo=(e,t)=>{var o,n,r;if(void 0===t&&(t=null===(r=null===(n=null===(o=(0,i.getAppStore)())||void 0===o?void 0:o.getState())||void 0===n?void 0:n.appContext)||void 0===r?void 0:r.isRTL),!t)return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";case"right-start":return"left-start";case"right-end":return"left-end";case"left-start":return"right-start";case"left-end":return"right-end";case"left":return"right";case"right":return"left";default:return e}},po=(...e)=>e.reduce(((e,t)=>null==t?e:function(...o){e.apply(this,o),t.apply(this,o)}),(()=>{})),ho=(e,t)=>{if(null!=e&&null!=t)return!io(t)&&e!==t&&!t.contains(e)},fo=(e,t)=>{var o;if(null==t||null==e||""===e)return;const n=null!==(o=document.querySelectorAll(e))&&void 0!==o?o:[];return null!==n&&n.length>0&&Array.from(n).some((e=>!ho(t,e)))},go=e=>{if(null!=(null===document||void 0===document?void 0:document.body))return co(e)===document.body},mo=(e,t)=>{if(null==e||!Array.isArray(e))return;e=[...e];let o=null;return null==e||e.reverse().some((e=>e.name===t&&(o=e,!0))),o},vo=(e,t)=>{var o;let n=null;return Array.isArray(e)?n=mo(e,t):"object"==typeof e&&(n=null===(o=e)||void 0===o?void 0:o[t]),n&&!1!==(null==n?void 0:n.enabled)},bo=(e,t)=>Array.isArray(e)?e.filter((e=>e.name!==t)):e,yo=e=>{(0,i.getAppStore)().dispatch(i.appActions.openOverlay(e))},wo=e=>{(0,i.getAppStore)().dispatch(i.appActions.activeOverlay(e))},xo=e=>{(0,i.getAppStore)().dispatch(i.appActions.closeOverlay(e))};var So=s(61193),Oo=s.n(So);const Eo=e=>{const{allowAnyClick:t=!1,axis:o="both",defaultClassName:n="jimu-draggable",defaultClassNameDragging:r="jimu-draggable-dragging",defaultClassNameDragged:a="jimu-draggable-dragged",disabled:s=!1,scale:l=1,disableUserSelectWhenDragging:c=!0,onStart:d,onStop:u,children:p}=e,h=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["allowAnyClick","axis","defaultClassName","defaultClassNameDragging","defaultClassNameDragged","disabled","scale","disableUserSelectWhenDragging","onStart","onStop","children"]),f=i.React.useRef(!1),g=e=>{f.current&&e.preventDefault()};return i.React.useEffect((()=>(document.body.addEventListener("touchmove",g,{passive:!1}),()=>{document.body.removeEventListener("touchmove",g)})),[]),i.React.createElement(Oo(),Object.assign({axis:o,scale:l,disabled:s,allowAnyClick:t,defaultClassName:n,enableUserSelectHack:c,defaultClassNameDragging:r,defaultClassNameDragged:a,onStart:(e,t)=>{f.current=!0,null==d||d(e,t)},onStop:(e,t)=>{f.current=!1,null==u||u(e,t)}},h),p)};const{useState:ko,useEffect:Co,useCallback:No}=i.React,To=(e,t)=>{const{width:o,height:n}=e,{x:r,y:i}=t;return{left:r,top:i,right:r+o,bottom:i+n}},Ro={width:50,height:50},jo={width:50,height:50},Po={x:0,y:0},$o=["bottom-right"],Mo=e=>{if(!e)return;if("object"==typeof e)return function(e){return{left:e.left,top:e.top,right:e.right,bottom:e.bottom}}(e);const t=document.querySelector(e);if(!t)throw new Error('Bounds selector "'+e+'" could not find an element.');return t.getBoundingClientRect()},Io=i.React.forwardRef((function(e,t){const{disabled:o,bounds:n="body",grid:r,className:a,style:s,children:l,minSize:c=Ro,defaultSize:d=jo,size:u,defaultPosition:p=Po,position:h,onStart:f,onResize:g,onStop:m,onMouseDown:v,handles:b=$o}=e,y=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["disabled","bounds","grid","className","style","children","minSize","defaultSize","size","defaultPosition","position","onStart","onResize","onStop","onMouseDown","handles"]),w=(e=>{const[t,o]=i.React.useState();return Co((()=>{o(Mo(e))}),[e]),Co((()=>{const t=()=>{o(Mo(e))};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}}),[]),t})(n),[x,S]=ko(!1),[O,E]=ko("bottom-right"),[k,C]=Vt({controlled:u,default:d}),[N,T]=Vt({controlled:h,default:p}),R=((e,t,o,n,r)=>{const{current:a}=i.React.useRef((0,i.getAppStore)().getState().appContext.isRTL);return No((i=>{const s=a?(e=>{switch(e){case"bottom-left":return"bottom-right";case"bottom-right":return"bottom-left";case"top-left":return"top-right";case"top-right":return"top-left";default:return e}})(o):o;let{x:l,y:c}=e,{width:d,height:u}=t;const p=i.deltaX,h=i.deltaY;return"top"===s.split("-")[0]?u-h>=n.height&&(u-=h,c+=h):u+h>=n.height&&(u+=h),"left"===s.split("-")[1]?d-p>=n.width&&(d-=p,l+=p):d+p>=n.width&&(d+=p),((o,n)=>{let{width:i,height:a}=o,{x:s,y:l}=n;return r&&((e,t)=>e.right>=t.right||e.left<=t.left)(To(o,n),r)&&(i=t.width,s=e.x),r&&((e,t)=>e.bottom>=t.bottom||e.top<=t.top)(To(o,n),r)&&(a=t.height,l=e.y),[{width:i,height:a},{x:s,y:l}]})({width:d,height:u},{x:l,y:c})}),[a,o,e,t,n.width,n.height,r])})(N,k,O,c,w),j=Wt((e=>{S(!0);const t=(e=>{const t=e.target,o=t.classList.contains("bottom-left"),n=t.classList.contains("bottom-right"),r=t.classList.contains("top-left"),i=t.classList.contains("top-right");let a="";return o?a="bottom-left":n?a="bottom-right":r?a="top-left":i&&(a="top-right"),a})(e);E(t),null==f||f(k,N)})),P=Wt(((e,t)=>{const[o,n]=R(t);C(o),T(n),null==g||g(o,n)})),$=Wt((()=>{S(!1),null==m||m(k,N)})),M=Wt((e=>{x&&e.preventDefault()}));Co((()=>(null===document||void 0===document||document.body.addEventListener("touchmove",M,{passive:!1}),()=>{null===document||void 0===document||document.body.removeEventListener("touchmove",M)})),[M]);const{x:I,y:D}=N||{x:0,y:0},A=Object.assign(Object.assign(Object.assign({left:0,top:0,right:"auto",bottom:"auto",userSelect:x?"none":"auto"},s),{transform:`translate(${I}px, ${D}px)`}),k),L=Wt((e=>{"touchstart"!==e.type&&(null==v||v(e))}));return(0,i.jsx)(So.DraggableCore,{"data-controlled":!!h,grid:r,handle:".resizer",disabled:o,enableUserSelectHack:!0,onStart:j,onDrag:P,onStop:$,onMouseDown:L},(0,i.jsx)("div",Object.assign({ref:t},y,{className:(0,i.classNames)("resizable",a),style:A}),"function"==typeof l?l({size:k,position:N}):l,!o&&b.map(((e,t)=>(0,i.jsx)("div",{key:t,className:(0,i.classNames)("resizer",e)})))))})),Do=(0,c.withStyles)(Io,"Resizable");const{useEffect:Ao,useRef:Lo,useCallback:zo,useState:_o}=i.React,{useDispatch:Bo,useSelector:Fo}=i.ReactRedux,Uo=1e3,Ho=(e,t,o,n,r)=>{const a=Bo(),s=Fo((e=>e.overlays)),l=Lo(),[c,d]=_o(o),u=zo((o=>{if(null==n||n(o),!e&&!t){const e=o.target,t=null==r?void 0:r.current;if(t&&(e===t||!(null==t?void 0:t.contains(e))))return;a(i.appActions.activeOverlay(l.current))}}),[s]);return Ao((()=>{if(!e)return l.current=i.utils.getOverlayUniqueId("popper",s),a(i.appActions.openOverlay(l.current)),()=>{e||a(i.appActions.closeOverlay(l.current))}}),[]),Ao((()=>{if(void 0!==o)return;const e=s.indexOf(l.current)+Uo;e>=Uo&&d(e)}),[s,l.current,o]),[l.current,c,u]},Wo={x:0,y:0},Vo=i.React.forwardRef((function(e,t){const{headerTitle:o,className:n,style:r,showHeaderClose:a,onHeaderClose:s,minSize:l,defaultSize:c,size:d,disableResize:u=!1,resizeGrid:p,onResizeStart:h,onResize:f,onResizeStop:g,resizeHandles:m,defaultPosition:v=Wo,position:b,positionOffset:y,disableDraggable:w=!1,dragBounds:x,dragGrid:S,dragOffsetParent:O,onDragStart:E,onDrag:k,onDragStop:C,dragScale:N=1,children:T,disableActivateOverlay:R,disableOverlayManager:j,disablePortal:P,zIndex:$,onClick:M}=e,I=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["headerTitle","className","style","showHeaderClose","onHeaderClose","minSize","defaultSize","size","disableResize","resizeGrid","onResizeStart","onResize","onResizeStop","resizeHandles","defaultPosition","position","positionOffset","disableDraggable","dragBounds","dragGrid","dragOffsetParent","onDragStart","onDrag","onDragStop","dragScale","children","disableActivateOverlay","disableOverlayManager","disablePortal","zIndex","onClick"]),D=Lo(null),A=Lt(t,D),[L,z,_]=Ho(j,R,$,M,D);let B=r;void 0!==z&&(B=Object.assign(Object.assign({},B),{zIndex:z}));const[F,U]=Vt({controlled:b,default:b||v}),H=Wt(((e,t)=>{U(t),null==f||f(e),null==k||k(t)})),W=Wt(((e,t)=>{const{x:o,y:n}=t;null==k||k({x:o,y:n}),null==E||E(e,t)})),V=Wt(((e,t)=>{const{x:o,y:n}=t,r={x:o,y:n};U(r),null==k||k(r)})),G=Wt(((e,t)=>{const{x:o,y:n}=t;null==k||k({x:o,y:n}),null==C||C(e,t)})),q=Wt(s),Y=i.React.createElement(Eo,{disabled:w,position:F,handle:".header",onStart:W,onDrag:V,onStop:G,bounds:x,cancel:".fp-cancel",grid:S,scale:N,offsetParent:O,positionOffset:y},i.React.createElement(Do,Object.assign({"data-uniqueid":L,minSize:l,defaultSize:c,size:d,ref:A,style:B,grid:p,disabled:u,position:F,onStart:h,onResize:H,onStop:g,handles:m,onClick:_,className:(0,i.classNames)("floating-panel",n)},I),i.React.createElement(Vn,{level:2,className:"header px-3 py-2",title:o,showClose:a,onClose:q,moveable:!w}),T));if(P)return Y;const Z=(null===document||void 0===document?void 0:document.fullscreenElement)||(null===document||void 0===document?void 0:document.body);return i.ReactDOM.createPortal(Y,Z)})),Go=(0,c.withStyles)(Vo,"FloatingPanel");const qo=i.React.forwardRef((function(e,t){var o;const{floating:n,headerTitle:r,role:a="tooltip",className:s,style:l,showHeaderClose:c,onHeaderClose:d,minSize:u,defaultSize:p,size:h,disableResize:f=!1,resizeGrid:g,onResizeStart:m,onResize:v,onResizeStop:b,resizeHandles:y,defaultPosition:w,position:x,positionOffset:S,disableDraggable:O,dragBounds:E,dragGrid:k,dragOffsetParent:C,onDragStart:N,onDrag:T,onDragStop:R,dragScale:j,disableActivateOverlay:P,disableOverlayManager:$,disablePortal:M=!1,zIndex:I,onClick:D}=e,A=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["floating","headerTitle","role","className","style","showHeaderClose","onHeaderClose","minSize","defaultSize","size","disableResize","resizeGrid","onResizeStart","onResize","onResizeStop","resizeHandles","defaultPosition","position","positionOffset","disableDraggable","dragBounds","dragGrid","dragOffsetParent","onDragStart","onDrag","onDragStop","dragScale","disableActivateOverlay","disableOverlayManager","disablePortal","zIndex","onClick"]),L=i.React.useRef(null),z=Lt(t,L),[_,B,F]=Ho($,P,I,D,L),U={style:Object.assign(Object.assign({},l),{zIndex:B}),role:a,ref:z,"data-uniqueid":_,className:(0,i.classNames)({floating:n},s),onClick:F},H=n?i.React.createElement(Go,Object.assign({role:"tooltip",headerTitle:r,showHeaderClose:c,onHeaderClose:d,minSize:u,defaultSize:p,size:h,disableResize:f,resizeGrid:g,onResizeStart:m,onResize:v,onResizeStop:b,resizeHandles:y,defaultPosition:w,position:x,positionOffset:S,disableDraggable:O,dragBounds:E,dragGrid:k,dragOffsetParent:C,onDragStart:N,onDragStop:R,onDrag:T,dragScale:j,disableOverlayManager:!0,disablePortal:!0},A,U)):i.React.createElement("div",Object.assign({},U,A));if(M)return H;const W=null!==(o=null===document||void 0===document?void 0:document.fullscreenElement)&&void 0!==o?o:null===document||void 0===document?void 0:document.body;return i.ReactDOM.createPortal(H,W)})),Yo="popperjs version 1.x",Zo="popperjs version 2.x",Ko=(e,t)=>{const{enabled:o,order:n,fn:r}=e,i={name:t,enabled:o};return"number"==typeof n&&(i.order=n),r&&"offset"!==t&&(i.fn=r),i},Xo=e=>{if(null==e||Array.isArray(e))return e;console.warn(`We have upgraded the 3rd lib popper.js to the latest version: ${Zo},\n  so the modifiers of ${Yo} is no longer available,\n  there is a big difference between ${Yo} and ${Zo} of the modifiers.\n  We can only partially upgrade your old modifiers, we recommend that you manually\n  upgrade to the latest version: https://popper.js.org/docs/v2/modifiers/`);const t=["inner","keepTogether","shift"];try{let o=Object.keys(e).map((o=>{if(t.includes(o))return console.warn(`The modifiers of 'inner', 'keepTogether' and 'shift' are gone in ${Zo},\n      for more details, pelase refer to https://popper.js.org/docs/v2/migration-guide/#11-inner-keeptogether-shift-modifiers-are-gone`),null;const n=e[o];switch(o){case"offset":return(e=>{const{offset:t,fn:o}=e,n=Ko(e,"offset");let r;return r=null!=o?o:(e=>{if(null==e)return[0,0];let t;if(Array.isArray(e))t=e;else if("number"==typeof e)t=[e,e];else if("string"==typeof e){const o=/^\d+/g;if(e.includes(",")){const n=e.replace(/\s+/g,"").split(",");t=2!==n.length?[0,0]:n.map((e=>{const t=e.match(o);if(null!=(null==t?void 0:t[0])){const e=Number(t[0]);return isNaN(e)?0:e}return 0}))}else{const n=e.match(o);if(null!=(null==n?void 0:n[0])){let e=Number(n[0]);e=isNaN(e)?0:e,t=[e,e]}else t=[0,0]}}return t})(t),n.options={offset:r},n})(n);case"preventOverflow":return(e=>{const{padding:t=5,boundariesElement:o}=e,n=Ko(e,"preventOverflow");return n.options={},null!=t&&(n.options.padding=t),null!=o&&(n.options.boundary=o),n})(n);case"arrow":return(e=>{const{element:t}=e,o=Ko(e,"arrow");return null!=t&&(o.options={},o.options.element=t),o})(n);case"flip":return(e=>{const{behavior:t,padding:o=5,boundariesElement:n,flipVariations:r}=e,i=Ko(e,"flip");let a;return i.options={},Array.isArray(t)&&(a=t),null!=a&&(i.options.fallbackPlacements=a),null!=o&&(i.options.padding=o),null!=n&&(i.options.boundary=n),void 0!==r&&(i.options.flipVariations=r),i})(n);case"hide":return Ko(n,"hide");case"computeStyle":return(e=>{const{gpuAcceleration:t}=e,o=Ko(e,"computeStyle");return o.phase="beforeWrite",void 0!==t&&(o.options={},o.options.gpuAcceleration=t),o})(n);case"applyStyle":return(e=>{const t=Ko(e,"applyStyle");return t.phase="write",t})(n);default:return((e,t)=>{const o=Ko(e,t);return o.phase="afterWrite",o})(n,o)}}));return o=o.filter((e=>e)),o.sort(((e,t)=>{var o,n,r;return(null!==(n=null===(o=e)||void 0===o?void 0:o.order)&&void 0!==n?n:0)-(null!==(r=t.order)&&void 0!==r?r:0)})),o=o.map((e=>(delete e.order,e))),o}catch(e){return console.warn("Upgrade modifiers failed, will return an empty modifier"),console.error(e),[]}},Qo=i.React.createContext(null),Jo=['a[href]:not([tabindex="-1"])','area[href]:not([tabindex="-1"])','input:not([disabled]):not([type=hidden]):not([tabindex="-1"])','select:not([disabled]):not([tabindex="-1"])','textarea:not([disabled]):not([tabindex="-1"])','button:not([disabled]):not([tabindex="-1"])',"object",'embed:not([tabindex="-1"])','[tabindex]:not([tabindex="-1"])','audio[controls]:not([tabindex="-1"])','video[controls]:not([tabindex="-1"])','[contenteditable]:not([contenteditable="false"]):not([tabindex="-1"])'],en="focusable-container",tn=`.${en}`,on=e=>{if(e){if(e.querySelector(tn)){const t=Jo.map((e=>`${tn} ${e}`));return e.querySelectorAll(t.join(", "))}return e.querySelectorAll(Jo.join(", "))}};const{useSelector:nn}=i.ReactRedux,{useRef:rn,useEffect:an,useMemo:sn,useState:ln,useCallback:cn}=i.React,dn=12,un=i.React.memo(i.React.forwardRef(((e,t)=>{var o,n,r;const{role:a="dialog",reference:s,modifiers:l,strategy:c,placement:d,version:u,children:p,open:h,className:f,style:g,showArrow:m,offset:v,toggle:b,flipPlacement:y=!0,floating:w=!1,defaultSize:x,onFirstUpdate:S,keepMount:O,trapFocus:k=!0,autoFocus:C=!0,forceLatestFocusElements:N=!1,arrowStyle:T,avoidNestedToggle:R=!0}=e,j=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["role","reference","modifiers","strategy","placement","version","children","open","className","style","showArrow","offset","toggle","flipPlacement","floating","defaultSize","onFirstUpdate","keepMount","trapFocus","autoFocus","forceLatestFocusElements","arrowStyle","avoidNestedToggle"]),P=i.React.useRef(null),$=i.React.useContext(Qo),M=Xo(l),{current:I}=rn(null===(r=null===(n=null===(o=(0,i.getAppStore)())||void 0===o?void 0:o.getState())||void 0===n?void 0:n.appContext)||void 0===r?void 0:r.isRTL),D=rn(null),A=y?uo(d,I):d;let L=((e,t,o,n=dn)=>{const r=(e=>{const t=rn(0),o=rn(e);return an((()=>{o.current=e}),[e]),!i.lodash.isDeepEqual(e,o.current)&&t.current++,t.current})(e),a=At(e);return sn((()=>{let e=a.current;if(null==e&&!o)return t;e=null!=e?e:[0,0];let r=bo(t,"offset");return r=[{name:"offset",options:{offset:()=>o?[e[0],e[1]+n]:e}},...null!=r?r:[]],r}),[t,r,o])})(v,M,m,null==T?void 0:T.size);L=((e,t)=>sn((()=>t?[{name:"computeStyles",options:{gpuAcceleration:!0,adaptive:!1}},...null!=e?e:[]]:e),[e,t]))(L,w);const[z,_]=ln(null),B=nn((e=>e.appRuntimeInfo.currentPageId)),F=nn((e=>e.browserSizeMode));Ft((()=>{h&&(null==b||b())}),[B,F]),((e,t,o,n,r,i)=>{const a=Wt((a=>{if(e&&i){const e=n.current,s=co(t);if(s&&e){const t=a.target;if((null==o?void 0:o.current)===t&&r)return;((e,t,o)=>ho(o,t)&&ho(o,e))(e,s,t)&&i(a)}}}));an((()=>{if(null!=i)return null===document||void 0===document||document.addEventListener("mousedown",a,!1),()=>{null!=i&&(null===document||void 0===document||document.removeEventListener("mousedown",a,!1))}}),[])})(h,s,P,D,R,b),((e,t,o=!0,n=!0,r=!1)=>{i.React.useEffect((()=>{if(!e.current||!t||!o)return;const n=e.current,i=n.querySelector(".popper-box"),a=on(n);function s(e){const t=e.key,o=e.shiftKey;if("Tab"===t){const t=r?on(n):a;if(!(null==t?void 0:t.length))return;!o||e.target!==t[0]&&e.target!==i?o||e.target!==t[t.length-1]&&e.target!==i||(e.preventDefault(),e.stopPropagation(),t[0].focus()):(e.preventDefault(),e.stopPropagation(),t[t.length-1].focus())}}return n.addEventListener("keydown",s,!0),()=>{n&&t&&o&&n.removeEventListener("keydown",s)}}),[e,r,t,o]),i.React.useEffect((()=>{if(!e.current||!t||!n)return;const o=on(e.current);setTimeout((()=>{var t;o.length?null===(t=o[0])||void 0===t||t.focus():e.current.querySelector(".popper-box").focus()}))}),[n,e,t])})(D,h,k,C,N),((e,t,o)=>{i.React.useEffect((()=>{const n=e.current;if(!n||!t||!o)return;const r=e=>{"Escape"===e.key&&o(e)};return n.addEventListener("keydown",r),()=>{n&&o&&n.removeEventListener("keydown",r)}}),[o,e,t])})(D,h,b);const U=(0,i.classNames)("popper",{"d-none":O&&!h},f);Ft((()=>{_(null)}),[u]);const H=i.React.useCallback((e=>{$&&($.current=e.target)}),[$]),W=cn((({poppered:e,ref:t,style:o,boxStyle:n,placement:r,hasPopperEscaped:s,isReferenceHidden:l,arrowProps:c})=>{const d=e?(e=>{var t;if(null==e||""===e)return;const o=null!==(t=null==e?void 0:e.match(/(-?)\d+(\.\d+)?px/g))&&void 0!==t?t:[],[n,r]=o.map((e=>parseInt(e)));return{x:n,y:r}})(null==o?void 0:o.transform):null,h=null!=d&&w,f=l&&null==(null===document||void 0===document?void 0:document.fullscreenElement)?"hidden":e?"unset":"hidden",v=d&&!h?{display:"none"}:{};let b=Object.assign(Object.assign(Object.assign({},g),o),{visibility:f});w&&(b=Object.assign(Object.assign(Object.assign({},b),x),v),delete b.transform);const y={style:b,className:U,"data-testid":"popper","data-popper-placement":r,"data-popper-escaped":s,"data-popper-reference-hidden":l},S=m?i.React.createElement("div",{ref:null==c?void 0:c.ref,style:null==c?void 0:c.style,"data-testid":"arrow",className:"jimu-popper--arrow","data-popper-arrow":!0}):null,O="dialog"===a?{"aria-modal":!1}:{};return i.React.createElement(qo,Object.assign({role:a,ref:e=>{null!=e&&(E(t,e),E(D,e))}},O,{"data-version":u,floating:w,defaultSize:x,defaultPosition:d,position:null==z?d:z,onDrag:_},j,y),i.React.createElement(i.React.Fragment,null,S,i.React.createElement("div",{tabIndex:-1,className:"popper-box",style:Object.assign({},n),onMouseDown:H},p)))}),[w,g,U,m,a,u,x,z,j,H,p]);return i.React.createElement(Qo.Provider,{value:P},(h||O)&&i.React.createElement(to,{ref:t,strategy:c,version:u,placement:A,reference:co(s),modifiers:L,onFirstUpdate:S},W))})));un.displayName="_Popper";const pn=(0,c.withStyles)(un,"Popper"),hn=i.React.createContext(null),fn=i.React.createContext(null);function gn({children:e}){const[t,o]=i.React.useState(null);return i.React.useEffect((()=>()=>o(null)),[o]),i.React.createElement(hn.Provider,{value:t},i.React.createElement(fn.Provider,{value:o},e))}function mn({children:e,innerRef:t}){const o=i.React.useContext(fn),n=i.React.useCallback((e=>{E(t,e),null==o||o(e)}),[t,o]);return i.React.useEffect((()=>()=>E(t,null))),i.React.useEffect((()=>{null==o&&console.warn("`Reference` should not be used outside of a `Manager` component.")}),[o]),null==e?void 0:e({ref:n})}function vn(e){const t=i.React.useContext(hn),{className:o}=e,n=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["className"]);return i.React.createElement(pn,Object.assign({className:(0,i.classNames)("inner-popper",o),reference:t},n))}var bn=s(52127),yn=["br","col","colgroup","dl","hr","iframe","img","input","link","menuitem","meta","ol","param","select","table","tbody","tfoot","thead","tr","ul","wbr"],wn={"accept-charset":"acceptCharset",acceptcharset:"acceptCharset",accesskey:"accessKey",allowfullscreen:"allowFullScreen",autocapitalize:"autoCapitalize",autocomplete:"autoComplete",autocorrect:"autoCorrect",autofocus:"autoFocus",autoplay:"autoPlay",autosave:"autoSave",cellpadding:"cellPadding",cellspacing:"cellSpacing",charset:"charSet",class:"className",classid:"classID",classname:"className",colspan:"colSpan",contenteditable:"contentEditable",contextmenu:"contextMenu",controlslist:"controlsList",crossorigin:"crossOrigin",dangerouslysetinnerhtml:"dangerouslySetInnerHTML",datetime:"dateTime",defaultchecked:"defaultChecked",defaultvalue:"defaultValue",enctype:"encType",for:"htmlFor",formmethod:"formMethod",formaction:"formAction",formenctype:"formEncType",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",hreflang:"hrefLang",htmlfor:"htmlFor",httpequiv:"httpEquiv","http-equiv":"httpEquiv",icon:"icon",innerhtml:"innerHTML",inputmode:"inputMode",itemid:"itemID",itemprop:"itemProp",itemref:"itemRef",itemscope:"itemScope",itemtype:"itemType",keyparams:"keyParams",keytype:"keyType",marginwidth:"marginWidth",marginheight:"marginHeight",maxlength:"maxLength",mediagroup:"mediaGroup",minlength:"minLength",nomodule:"noModule",novalidate:"noValidate",playsinline:"playsInline",radiogroup:"radioGroup",readonly:"readOnly",referrerpolicy:"referrerPolicy",rowspan:"rowSpan",spellcheck:"spellCheck",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",tabindex:"tabIndex",typemustmatch:"typeMustMatch",usemap:"useMap",accentheight:"accentHeight","accent-height":"accentHeight",alignmentbaseline:"alignmentBaseline","alignment-baseline":"alignmentBaseline",allowreorder:"allowReorder",arabicform:"arabicForm","arabic-form":"arabicForm",attributename:"attributeName",attributetype:"attributeType",autoreverse:"autoReverse",basefrequency:"baseFrequency",baselineshift:"baselineShift","baseline-shift":"baselineShift",baseprofile:"baseProfile",calcmode:"calcMode",capheight:"capHeight","cap-height":"capHeight",clippath:"clipPath","clip-path":"clipPath",clippathunits:"clipPathUnits",cliprule:"clipRule","clip-rule":"clipRule",colorinterpolation:"colorInterpolation","color-interpolation":"colorInterpolation",colorinterpolationfilters:"colorInterpolationFilters","color-interpolation-filters":"colorInterpolationFilters",colorprofile:"colorProfile","color-profile":"colorProfile",colorrendering:"colorRendering","color-rendering":"colorRendering",contentscripttype:"contentScriptType",contentstyletype:"contentStyleType",diffuseconstant:"diffuseConstant",dominantbaseline:"dominantBaseline","dominant-baseline":"dominantBaseline",edgemode:"edgeMode",enablebackground:"enableBackground","enable-background":"enableBackground",externalresourcesrequired:"externalResourcesRequired",fillopacity:"fillOpacity","fill-opacity":"fillOpacity",fillrule:"fillRule","fill-rule":"fillRule",filterres:"filterRes",filterunits:"filterUnits",floodopacity:"floodOpacity","flood-opacity":"floodOpacity",floodcolor:"floodColor","flood-color":"floodColor",fontfamily:"fontFamily","font-family":"fontFamily",fontsize:"fontSize","font-size":"fontSize",fontsizeadjust:"fontSizeAdjust","font-size-adjust":"fontSizeAdjust",fontstretch:"fontStretch","font-stretch":"fontStretch",fontstyle:"fontStyle","font-style":"fontStyle",fontvariant:"fontVariant","font-variant":"fontVariant",fontweight:"fontWeight","font-weight":"fontWeight",glyphname:"glyphName","glyph-name":"glyphName",glyphorientationhorizontal:"glyphOrientationHorizontal","glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphorientationvertical:"glyphOrientationVertical","glyph-orientation-vertical":"glyphOrientationVertical",glyphref:"glyphRef",gradienttransform:"gradientTransform",gradientunits:"gradientUnits",horizadvx:"horizAdvX","horiz-adv-x":"horizAdvX",horizoriginx:"horizOriginX","horiz-origin-x":"horizOriginX",imagerendering:"imageRendering","image-rendering":"imageRendering",kernelmatrix:"kernelMatrix",kernelunitlength:"kernelUnitLength",keypoints:"keyPoints",keysplines:"keySplines",keytimes:"keyTimes",lengthadjust:"lengthAdjust",letterspacing:"letterSpacing","letter-spacing":"letterSpacing",lightingcolor:"lightingColor","lighting-color":"lightingColor",limitingconeangle:"limitingConeAngle",markerend:"markerEnd","marker-end":"markerEnd",markerheight:"markerHeight",markermid:"markerMid","marker-mid":"markerMid",markerstart:"markerStart","marker-start":"markerStart",markerunits:"markerUnits",markerwidth:"markerWidth",maskcontentunits:"maskContentUnits",maskunits:"maskUnits",numoctaves:"numOctaves",overlineposition:"overlinePosition","overline-position":"overlinePosition",overlinethickness:"overlineThickness","overline-thickness":"overlineThickness",paintorder:"paintOrder","paint-order":"paintOrder","panose-1":"panose1",pathlength:"pathLength",patterncontentunits:"patternContentUnits",patterntransform:"patternTransform",patternunits:"patternUnits",pointerevents:"pointerEvents","pointer-events":"pointerEvents",pointsatx:"pointsAtX",pointsaty:"pointsAtY",pointsatz:"pointsAtZ",preservealpha:"preserveAlpha",preserveaspectratio:"preserveAspectRatio",primitiveunits:"primitiveUnits",refx:"refX",refy:"refY",renderingintent:"renderingIntent","rendering-intent":"renderingIntent",repeatcount:"repeatCount",repeatdur:"repeatDur",requiredextensions:"requiredExtensions",requiredfeatures:"requiredFeatures",shaperendering:"shapeRendering","shape-rendering":"shapeRendering",specularconstant:"specularConstant",specularexponent:"specularExponent",spreadmethod:"spreadMethod",startoffset:"startOffset",stddeviation:"stdDeviation",stitchtiles:"stitchTiles",stopcolor:"stopColor","stop-color":"stopColor",stopopacity:"stopOpacity","stop-opacity":"stopOpacity",strikethroughposition:"strikethroughPosition","strikethrough-position":"strikethroughPosition",strikethroughthickness:"strikethroughThickness","strikethrough-thickness":"strikethroughThickness",strokedasharray:"strokeDasharray","stroke-dasharray":"strokeDasharray",strokedashoffset:"strokeDashoffset","stroke-dashoffset":"strokeDashoffset",strokelinecap:"strokeLinecap","stroke-linecap":"strokeLinecap",strokelinejoin:"strokeLinejoin","stroke-linejoin":"strokeLinejoin",strokemiterlimit:"strokeMiterlimit","stroke-miterlimit":"strokeMiterlimit",strokewidth:"strokeWidth","stroke-width":"strokeWidth",strokeopacity:"strokeOpacity","stroke-opacity":"strokeOpacity",suppresscontenteditablewarning:"suppressContentEditableWarning",suppresshydrationwarning:"suppressHydrationWarning",surfacescale:"surfaceScale",systemlanguage:"systemLanguage",tablevalues:"tableValues",targetx:"targetX",targety:"targetY",textanchor:"textAnchor","text-anchor":"textAnchor",textdecoration:"textDecoration","text-decoration":"textDecoration",textlength:"textLength",textrendering:"textRendering","text-rendering":"textRendering",underlineposition:"underlinePosition","underline-position":"underlinePosition",underlinethickness:"underlineThickness","underline-thickness":"underlineThickness",unicodebidi:"unicodeBidi","unicode-bidi":"unicodeBidi",unicoderange:"unicodeRange","unicode-range":"unicodeRange",unitsperem:"unitsPerEm","units-per-em":"unitsPerEm",unselectable:"unselectable",valphabetic:"vAlphabetic","v-alphabetic":"vAlphabetic",vectoreffect:"vectorEffect","vector-effect":"vectorEffect",vertadvy:"vertAdvY","vert-adv-y":"vertAdvY",vertoriginx:"vertOriginX","vert-origin-x":"vertOriginX",vertoriginy:"vertOriginY","vert-origin-y":"vertOriginY",vhanging:"vHanging","v-hanging":"vHanging",videographic:"vIdeographic","v-ideographic":"vIdeographic",viewbox:"viewBox",viewtarget:"viewTarget",vmathematical:"vMathematical","v-mathematical":"vMathematical",wordspacing:"wordSpacing","word-spacing":"wordSpacing",writingmode:"writingMode","writing-mode":"writingMode",xchannelselector:"xChannelSelector",xheight:"xHeight","x-height":"xHeight",xlinkactuate:"xlinkActuate","xlink:actuate":"xlinkActuate",xlinkarcrole:"xlinkArcrole","xlink:arcrole":"xlinkArcrole",xlinkhref:"xlinkHref","xlink:href":"xlinkHref",xlinkrole:"xlinkRole","xlink:role":"xlinkRole",xlinkshow:"xlinkShow","xlink:show":"xlinkShow",xlinktitle:"xlinkTitle","xlink:title":"xlinkTitle",xlinktype:"xlinkType","xlink:type":"xlinkType",xmlbase:"xmlBase","xml:base":"xmlBase",xmllang:"xmlLang","xml:lang":"xmlLang","xml:space":"xmlSpace",xmlnsxlink:"xmlnsXlink","xmlns:xlink":"xmlnsXlink",xmlspace:"xmlSpace",ychannelselector:"yChannelSelector",zoomandpan:"zoomAndPan",onblur:"onBlur",onchange:"onChange",onclick:"onClick",oncontextmenu:"onContextMenu",ondoubleclick:"onDoubleClick",ondrag:"onDrag",ondragend:"onDragEnd",ondragenter:"onDragEnter",ondragexit:"onDragExit",ondragleave:"onDragLeave",ondragover:"onDragOver",ondragstart:"onDragStart",ondrop:"onDrop",onerror:"onError",onfocus:"onFocus",oninput:"onInput",oninvalid:"onInvalid",onkeydown:"onKeyDown",onkeypress:"onKeyPress",onkeyup:"onKeyUp",onload:"onLoad",onmousedown:"onMouseDown",onmouseenter:"onMouseEnter",onmouseleave:"onMouseLeave",onmousemove:"onMouseMove",onmouseout:"onMouseOut",onmouseover:"onMouseOver",onmouseup:"onMouseUp",onscroll:"onScroll",onsubmit:"onSubmit",ontouchcancel:"onTouchCancel",ontouchend:"onTouchEnd",ontouchmove:"onTouchMove",ontouchstart:"onTouchStart",onwheel:"onWheel"},xn=function(){return(xn=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},Sn=function(e,t){var o="function"==typeof Symbol&&e[Symbol.iterator];if(!o)return e;var n,r,i=o.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(e){r={error:e}}finally{try{n&&!n.done&&(o=i.return)&&o.call(i)}finally{if(r)throw r.error}}return a},On=function(e,t){for(var o=0,n=t.length,r=e.length;o<n;o++,r++)e[r]=t[o];return e};function En(e,t){var o={key:t};if(e instanceof Element){var n=e.getAttribute("class");n&&(o.className=n),On([],Sn(e.attributes)).forEach((function(e){switch(e.name){case"class":break;case"style":o[e.name]=e.value.split(/ ?; ?/).reduce((function(e,t){var o=function(e,t){var o="function"==typeof Symbol&&e[Symbol.iterator];if(!o)return e;var n,r,i=o.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(e){r={error:e}}finally{try{n&&!n.done&&(o=i.return)&&o.call(i)}finally{if(r)throw r.error}}return a}(t.split(/ ?: ?/),2),n=o[0],r=o[1];return n&&r&&(e[n.replace(/-(\w)/g,(function(e,t){return t.toUpperCase()}))]=Number.isNaN(Number(r))?r:Number(r)),e}),{});break;case"allowfullscreen":case"allowpaymentrequest":case"async":case"autofocus":case"autoplay":case"checked":case"controls":case"default":case"defer":case"disabled":case"formnovalidate":case"hidden":case"ismap":case"itemscope":case"loop":case"multiple":case"muted":case"nomodule":case"novalidate":case"open":case"readonly":case"required":case"reversed":case"selected":case"typemustmatch":o[wn[e.name]||e.name]=!0;break;default:o[wn[e.name]||e.name]=e.value}}))}return o}function kn(e,t){var o;if(void 0===t&&(t={}),!(e&&e instanceof Node))return null;var n,r=t.actions,i=void 0===r?[]:r,a=t.index,s=void 0===a?0:a,l=t.level,c=void 0===l?0:l,d=t.randomKey,u=e,p=c+"-"+s,h=[];if(d&&0===c&&(p=function(e){void 0===e&&(e=6);for(var t="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",o="",n=e;n>0;--n)o+=t[Math.round(Math.random()*(t.length-1))];return o}()+"-"+p),Array.isArray(i)&&i.forEach((function(t){t.condition(u,p,c)&&("function"==typeof t.pre&&((u=t.pre(u,p,c))instanceof Node||(u=e)),"function"==typeof t.post&&h.push(t.post(u,p,c)))})),h.length)return h;switch(u.nodeType){case 1:return bn.createElement((n=u.nodeName,/[a-z]+[A-Z]+[a-z]+/.test(n)?n:n.toLowerCase()),En(u,p),function(e,t,o){var n=On([],Sn(e)).map((function(e,n){return kn(e,xn(xn({},o),{index:n,level:t+1}))})).filter(Boolean);return n.length?n:null}(u.childNodes,c,t));case 3:var f=(null===(o=u.nodeValue)||void 0===o?void 0:o.toString())||"";if(/^\s+$/.test(f)&&!/[\u202F\u00A0]/.test(f))return null;if(!u.parentNode)return f;var g=u.parentNode.nodeName.toLowerCase();return-1!==yn.indexOf(g)?(/\S/.test(f)&&console.warn("A textNode is not allowed inside '"+g+"'. Your text \""+f+'" will be ignored'),null):f;case 8:default:return null}}function Cn(e,t){return void 0===t&&(t={}),"string"==typeof e?function(e,t){if(void 0===t&&(t={}),!e||"string"!=typeof e)return null;var o=t.nodeOnly,n=void 0!==o&&o,r=t.selector,i=void 0===r?"body > *":r,a=t.type,s=void 0===a?"text/html":a;try{var l=(new DOMParser).parseFromString(e,s).querySelector(i);if(!(l instanceof Node))throw new Error("Error parsing input");return n?l:kn(l,t)}catch(e){}return null}(e,t):e instanceof Node?kn(e,t):null}var Nn=s(58875),Tn={FAILED:"failed",LOADED:"loaded",LOADING:"loading",PENDING:"pending",READY:"ready",UNSUPPORTED:"unsupported"};function Rn(){return Nn.canUseDOM}var jn,Pn=(jn=function(e,t){return(jn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function o(){this.constructor=e}jn(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),$n=function(){return($n=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},Mn=function(e,t){var o="function"==typeof Symbol&&e[Symbol.iterator];if(!o)return e;var n,r,i=o.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(e){r={error:e}}finally{try{n&&!n.done&&(o=i.return)&&o.call(i)}finally{if(r)throw r.error}}return a},In=Object.create(null);const Dn=function(e){function t(t){var o=e.call(this,t)||this;return o.isActive=!1,o.handleCacheQueue=function(e){"string"!=typeof e?o.handleError(e):o.handleLoad(e)},o.handleLoad=function(e){o.isActive&&o.setState({content:e,status:Tn.LOADED},o.getElement)},o.handleError=function(e){var t=o.props.onError,n="Browser does not support SVG"===e.message?Tn.UNSUPPORTED:Tn.FAILED;o.isActive&&o.setState({status:n},(function(){"function"==typeof t&&t(e)}))},o.request=function(){var e=o.props,t=e.cacheRequests,n=e.fetchOptions,r=e.src;try{return t&&(In[r]={content:"",status:Tn.LOADING,queue:[]}),fetch(r,n).then((function(e){var t=e.headers.get("content-type"),o=Mn((t||"").split(/ ?; ?/),1)[0];if(e.status>299)throw new Error("Not found");if(!["image/svg+xml","text/plain"].some((function(e){return o.indexOf(e)>=0})))throw new Error("Content type isn't valid: "+o);return e.text()})).then((function(e){var n=o.props.src;if(r===n&&(o.handleLoad(e),t)){var i=In[r];i&&(i.content=e,i.status=Tn.LOADED,i.queue=i.queue.filter((function(t){return t(e),!1})))}})).catch((function(e){if(o.handleError(e),t){var n=In[r];n&&(n.queue.forEach((function(t){t(e)})),delete In[r])}}))}catch(e){return o.handleError(new Error(e.message))}},o.state={content:"",element:null,hasCache:!!t.cacheRequests&&!!In[t.src],status:Tn.PENDING},o.hash=t.uniqueHash||function(e){for(var t,o="abcdefghijklmnopqrstuvwxyz",n=""+o+o.toUpperCase()+"1234567890",r="",i=0;i<8;i++)r+=(t=n)[Math.floor(Math.random()*t.length)];return r}(),o}return Pn(t,e),t.prototype.componentDidMount=function(){if(this.isActive=!0,Rn()){var e=this.state.status,t=this.props.src;try{if(e===Tn.PENDING){if(!function(){if(!document)return!1;var e=document.createElement("div");return e.innerHTML="<svg />",!!e.firstChild&&"http://www.w3.org/2000/svg"===e.firstChild.namespaceURI}()||"undefined"==typeof window||null===window)throw new Error("Browser does not support SVG");if(!t)throw new Error("Missing src");this.load()}}catch(e){this.handleError(e)}}},t.prototype.componentDidUpdate=function(e,t){if(Rn()){var o=this.state,n=o.hasCache,r=o.status,i=this.props,a=i.onLoad,s=i.src;if(t.status!==Tn.READY&&r===Tn.READY&&a&&a(s,n),e.src!==s){if(!s)return void this.handleError(new Error("Missing src"));this.load()}}},t.prototype.componentWillUnmount=function(){this.isActive=!1},t.prototype.processSVG=function(){var e=this.state.content,t=this.props.preProcessor;return t?t(e):e},t.prototype.updateSVGAttributes=function(e){var t=this,o=this.props,n=o.baseURL,r=void 0===n?"":n,i=o.uniquifyIDs,a=["id","href","xlink:href","xlink:role","xlink:arcrole"],s=["href","xlink:href"];return i?(function(e,t){for(var o=0,n=t.length,r=e.length;o<n;o++,r++)e[r]=t[o];return e}([],Mn(e.children)).map((function(e){if(e.attributes&&e.attributes.length){var o=Object.values(e.attributes).map((function(e){var o=e,n=e.value.match(/url\((.*?)\)/);return n&&n[1]&&(o.value=e.value.replace(n[0],"url("+r+n[1]+"__"+t.hash+")")),o}));a.forEach((function(e){var n,r,i=o.find((function(t){return t.name===e}));!i||(n=e,r=i.value,s.indexOf(n)>=0&&r&&r.indexOf("#")<0)||(i.value=i.value+"__"+t.hash)}))}return e.children.length?t.updateSVGAttributes(e):e})),e):e},t.prototype.getNode=function(){var e=this.props,t=e.description,o=e.title;try{var n=Cn(this.processSVG(),{nodeOnly:!0});if(!(n&&n instanceof SVGSVGElement))throw new Error("Could not convert the src to a DOM Node");var r=this.updateSVGAttributes(n);if(t){var i=r.querySelector("desc");i&&i.parentNode&&i.parentNode.removeChild(i);var a=document.createElement("desc");a.innerHTML=t,r.prepend(a)}if(o){var s=r.querySelector("title");s&&s.parentNode&&s.parentNode.removeChild(s);var l=document.createElement("title");l.innerHTML=o,r.prepend(l)}return r}catch(e){return this.handleError(e)}},t.prototype.getElement=function(){try{var e=Cn(this.getNode());if(!e||!bn.isValidElement(e))throw new Error("Could not convert the src to a React element");this.setState({element:e,status:Tn.READY})}catch(e){this.handleError(new Error(e.message))}},t.prototype.load=function(){var e=this;this.isActive&&this.setState({content:"",element:null,status:Tn.LOADING},(function(){var t=e.props,o=t.cacheRequests,n=t.src,r=o&&In[n];if(r)r.status===Tn.LOADING?r.queue.push(e.handleCacheQueue):r.status===Tn.LOADED&&e.handleLoad(r.content);else{var i,a=n.match(/data:image\/svg[^,]*?(;base64)?,(.*)/);a?i=a[1]?atob(a[2]):decodeURIComponent(a[2]):n.indexOf("<svg")>=0&&(i=n),i?e.handleLoad(i):e.request()}}))},t.prototype.render=function(){var e=this.state,t=e.element,o=e.status,n=this.props,r=n.children,i=void 0===r?null:r,a=n.innerRef,s=n.loader,l=void 0===s?null:s,c=function(e){for(var t=[],o=1;o<arguments.length;o++)t[o-1]=arguments[o];var n={};for(var r in e)({}).hasOwnProperty.call(e,r)&&(t.includes(r)||(n[r]=e[r]));return n}(this.props,"baseURL","cacheRequests","children","description","fetchOptions","innerRef","loader","onError","onLoad","preProcessor","src","title","uniqueHash","uniquifyIDs");return Rn()?t?bn.cloneElement(t,$n({ref:a},c)):[Tn.UNSUPPORTED,Tn.FAILED].indexOf(o)>-1?i:l:l},t.defaultProps={cacheRequests:!0,uniquifyIDs:!1},t}(bn.PureComponent);var An=function(e,t,o,n){return new(o||(o=Promise))((function(r,i){function a(e){try{l(n.next(e))}catch(e){i(e)}}function s(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,s)}l((n=n.apply(e,t||[])).next())}))};const Ln=i.css`
  fill: currentColor;
`,zn={s:12,m:16,l:20},_n=/\.svg$/,Bn=e=>!(!e||"string"!=typeof e)&&_n.test(e),Fn=/<svg(.|\s)*<\/svg>/,Un={},Hn=i.React.memo(i.React.forwardRef(((e,t)=>{var o,n;const{className:r,style:a,icon:s,width:l,height:c,size:d="m",color:u,rotate:p,flip:h,title:f,options:g,currentColor:m=!0,autoFlip:v}=e,b=(e=>{let t=zn.m;return Object.keys(zn).includes(e)?t=zn[e]:"string"!=typeof e&&"number"!=typeof e||(t=e),t=t||zn.m,t})(d),y=l||b,w=c||b,x=g?g.currentColor:m,[S,O]=i.React.useState((()=>Bn(s)?null:s)),E=(e=>{var t;if(e)return"string"!=typeof e&&(e=e.toString()),null===(t=e.match(Fn))||void 0===t?void 0:t[0]})(S),k=i.React.useRef(!1);i.React.useEffect((()=>()=>{k.current=!0}),[]),i.React.useEffect((()=>{var e;Bn(s)?(e=s,An(void 0,void 0,void 0,(function*(){return Un[e]?"[object Promise]"===Un[e].toString()?yield Un[e]:Promise.resolve(Un[e]):(Un[e]=window.fetch(e).then((e=>An(void 0,void 0,void 0,(function*(){return yield e.text()})))).then((e=>e.replace(/<title>.*<\/title>/i,""))),Un[e].then((t=>An(void 0,void 0,void 0,(function*(){return Un[e]=t,t})))))}))).then((e=>{k.current||O(e)})):O(s)}),[s]);const C=v&&(null===(o=(0,i.getAppStore)().getState().appContext)||void 0===o?void 0:o.isRTL),N=(0,i.classNames)(r,"jimu-icon",{rtl:C}),T=i.React.useMemo((()=>{let e="";return C&&(e="scaleX(-1)"),"vertical"===h?e="scaleY(-1)":"horizontal"===h&&(e="scaleX(-1)"),`${p?`rotate(${p}deg)`:""} ${e}`}),[h,C,p]),R=i.React.useMemo((()=>Object.assign(Object.assign({},a),{color:`${u}`,transform:T})),[u,a,T]),j=i.React.useMemo((()=>{if(x)return e=>e.replace(/fill="(?!.*none).*?"/g,'fill="currentColor"').replace(/stroke="(?!.*none).*?"/g,'stroke="currentColor"')}),[x]);return(0,i.jsx)(i.React.Fragment,null,E?(0,i.jsx)(Dn,{css:Ln,innerRef:t,src:E,width:y,height:w,className:N,style:R,title:f,"aria-label":f,"aria-hidden":null!==(n=e["aria-hidden"])&&void 0!==n&&n,preProcessor:j}):(0,i.jsx)("img",{ref:t,src:"string"==typeof S?S:void 0,width:y,height:w,className:N,style:R,alt:f}))})));const Wn=s(93321),Vn=i.React.memo((function(e){const{onClose:t,children:o,title:n,className:r,moveable:a,showClose:s=!0,level:l=1,actions:c}=e,d=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["onClose","children","title","className","moveable","showClose","level","actions"]),u=Dt(i.defaultMessages),p=i.React.useMemo((()=>(null==c?void 0:c.length)?null==c?void 0:c.slice(0,3):s?[{name:"close",className:"action-close",label:u("close"),icon:Wn,onClick:t}]:void 0),[c,s,u,t]),h=((e,t)=>{var o,n,r;const a=i.ReactRedux.useSelector((e=>e.theme)),s=null===(r=null===(n=null===(o=null==a?void 0:a.colors)||void 0===o?void 0:o.palette)||void 0===n?void 0:n.dark)||void 0===r?void 0:r[600],l=1===t?"1rem":"0.875rem";return i.React.useMemo((()=>i.css`
      .title {
        max-width: 60%;
        font-weight: 500;
      }
      cursor: ${e?"move":"default"};
      font-size: ${l};
      color: ${s};
    `),[e,l,s])})(a,l),f=(0,i.classNames)("panel-header w-100 d-flex justify-content-between align-items-center",r);return(0,i.jsx)("div",Object.assign({css:h},d,{className:f}),(0,i.jsx)("div",{className:"title text-truncate mr-2",title:n},n),(0,i.jsx)("div",{className:"actions d-flex justify-content-between align-items-center"},null==p?void 0:p.map(((e,t)=>(0,i.jsx)(ye,{key:e.name,size:"sm",type:"tertiary",icon:!0,title:e.label,"aria-label":e.label,className:(0,i.classNames)("p-0 action-btn fp-cancel",e.className,{"mr-2":t!==p.length-1}),onClick:e.onClick},(0,i.jsx)(Hn,{icon:e.icon}))))))})),Gn=["top","bottom","right","left"],qn=[].concat(Gn,["auto"]).reduce((function(e,t){return e.concat([t,t+"-start",t+"-end"])}),[]),Yn=Gn.reduce((function(e,t){return e.concat([t+"-start",t+"-end"])}),[]),Zn=e=>e.split("-")[0],Kn={left:"right",right:"left",bottom:"top",top:"bottom"},Xn=e=>null==e?void 0:e.replace(/left|right|bottom|top/g,(e=>Kn[e])),Qn={start:"end",end:"start"},Jn=e=>e.replace(/start|end/g,(e=>Qn[e])),er=e=>e.split("-")[1],tr=(e,t={})=>{const{placement:o,boundary:n,rootBoundary:r,padding:i,flipVariations:a,allowedAutoPlacements:s=qn}=t,l=er(o),c=null!=l?a?Yn:Yn.filter((e=>er(e)===l)):Gn;let d=c.filter((e=>s.indexOf(e)>=0));0===d.length&&(d=c);const u=d.reduce(((t,o)=>(t[o]=Ot(e,{placement:o,boundary:n,rootBoundary:r,padding:i})[Zn(o)],t)),{});return Object.keys(u).sort(((e,t)=>u[e]-u[t]))},or=e=>["top","bottom"].includes(e);function nr({state:e,options:t,name:o}){if(null!=e.modifiersData[o]._skip)return;const{mainAxis:n=!0,altAxis:r=!0,fallbackPlacements:i,padding:a,boundary:s,rootBoundary:l,altBoundary:c,flipVariations:d=!0,allowedAutoPlacements:u,useClosestVerticalPlacement:p}=t,h=e.options.placement,f=Zn(h),g=[h,...null!==i?i:f!==h&&d?function(e){if("auto"===Zn(e))return[];const t=Xn(e);return[Jn(e),t,Jn(t)]}(h):[Xn(h)]].reduce(((t,o)=>t.concat("auto"===Zn(o)?tr(e,{placement:o,boundary:s,rootBoundary:l,padding:a,flipVariations:d,allowedAutoPlacements:u}):o)),[]),m=e.rects.reference,v=e.rects.popper,b=new Map;let y=!0,w=g[0];for(let t=0;t<g.length;t++){const o=g[t],i=Zn(o),d="start"===er(o),u=or(i),p=u?"width":"height",h=Ot(e,{placement:o,boundary:s,rootBoundary:l,altBoundary:c,padding:a});let f=u?d?"right":"left":d?"bottom":"top";m[p]>v[p]&&(f=Xn(f));const x=Xn(f),S=[];if(n&&S.push(h[i]),r&&S.push(h[f],h[x]),S.every((e=>e<=0))){w=o,y=!1;break}b.set(o,S)}if(y){let e=!0;for(let t=d?3:1;t>0;t--){const o=g.find((e=>{const o=b.get(e);return null!=o&&o.slice(0,t).every((e=>e<=0))}));if(null!=o){e=!1,w=o;break}}if(e&&p){let e=null,t=9999;g.filter((e=>or(e))).forEach((o=>{const n=b.get(o);null!=n&&n[0]<t&&(e=o,t=n[0])})),null!=e&&(w=e)}}e.placement!==w&&(e.modifiersData[o]._skip=!0,e.placement=w,e.reset=!0)}const rr=e=>({name:"flip",enabled:!0,phase:"main",fn:nr,requiresIfExists:["offset"],data:{_skip:!1},options:e}),ir={name:"maxSize",enabled:!0,phase:"main",requiresIfExists:["offset","preventOverflow","flip"],fn({state:e,name:t,options:o}){var n;const r=Ot(e,o),{x:i,y:a}=null!==(n=e.modifiersData.preventOverflow)&&void 0!==n?n:{x:0,y:0},{width:s,height:l}=e.rects.popper,[c]=e.placement.split("-"),d="left"===c?"left":"right",u="top"===c?"top":"bottom";e.modifiersData[t]={width:s-r[d]-i,height:l-r[u]-a}}},ar={name:"applyMaxSize",enabled:!0,phase:"beforeWrite",requires:["maxSize"],fn({state:e}){const{height:t}=e.modifiersData.maxSize;e.styles.box={overflowY:"auto",maxHeight:`${t}px`}}},sr=(e,t=!0)=>(t&&(e=e.map((e=>uo(e)))),{name:"flip",enabled:!0,phase:"main",options:{fallbackPlacements:e}}),lr=({open:e=!0,reference:t,placement:o="bottom",className:n,href:r})=>{const a=(()=>{var e;const t=i.ReactRedux.useSelector((e=>e.theme)),o=null==t?void 0:t.colors.dark,n=null==t?void 0:t.colors.white,r=null==t?void 0:t.colors.palette.dark[600],a=null===(e=null==t?void 0:t.typography)||void 0===e?void 0:e.sizes.caption1;return i.React.useMemo((()=>i.css`
    background: ${n};
    width: ${i.polished.rem(300)};
    overflow: hidden;
    font-size: ${a};
    color: ${o};
    padding: 8px;
    margin-top: 10px;
    z-index: 51;
    .linkto {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      word-break: break-all;
      word-wrap: break-word;
      span {
        color: ${r};
        text-decoration: underline;
      }
    }
  `),[o,n,r,a])})(),s=Dt();return(0,i.jsx)(pn,{open:e,reference:t,placement:o,className:(0,i.classNames)("shadow",n),css:a},(0,i.jsx)("div",{className:"linkto"},s("linkToString"),": ",(0,i.jsx)("span",null,r)),(0,i.jsx)("div",null,s("linkPreviewTip")))};const cr=e=>!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey);class dr extends i.React.PureComponent{constructor(e){super(e),this.isToWebAddress=()=>this.props.to&&("string"==typeof this.props.to&&(i.urlUtils.isAbsoluteUrl(this.props.to)||/^www./.test(this.props.to))||this.props.to.linkType&&this.props.to.linkType===i.LinkType.WebAddress),this.isToTopWindow=()=>!(!this.props.target||"_top"!==this.props.target),this.stopGoingToOtherSite=()=>window&&window.jimuConfig&&window.jimuConfig.isInBuilder&&(this.isToWebAddress()||this.isToTopWindow()),this.handleClick=e=>{var t,o;if(this.stopGoingToOtherSite())return e.preventDefault(),void this.setState({isTipPopperOpen:!0},(()=>setTimeout((()=>this.setState({isTipPopperOpen:!1})),3e3)));if(this.props.dialogJson){const{currentDialogJson:e,isPageDlg:t}=this.props;e&&((null==e?void 0:e.mode)===i.DialogMode.Anchored||(null==e?void 0:e.isSplash)||t||!this.isCurrentDlgCanBeClosed())||(this.props.dispatch(i.appActions.currentDialogChanged(this.props.dialogJson.id)),this.props.dispatch(i.appActions.activePagePartChanged(null))),this.clearSelection()}if(this.props.onClick&&this.props.onClick(e),!(e.defaultPrevented||0!==e.button||this.props.target&&"_self"!==this.props.target||cr(e)||i.urlUtils.isAbsoluteUrl(this.href))){if([i.LinkType.Block,i.LinkType.Screen].some((e=>{var t;return e===(null===(t=this.props.to)||void 0===t?void 0:t.linkType)}))||e.preventDefault(),(null===(t=this.props.to)||void 0===t?void 0:t.linkType)===i.LinkType.PageTop)return void(null===(o=document.querySelector(".page-renderer"))||void 0===o||o.scroll({left:0,top:0}));if(!this.href)return;const{replace:n,history:r,to:a}=this.props,s=a.linkType;if(this.isHrefCanBeChanged()){s===i.LinkType.Page?(this.clearSelection(),this.props.dispatch(i.appActions.activePagePartChanged(i.PagePart.Body))):s===i.LinkType.Dialog&&(this.clearSelection(),this.props.dispatch(i.appActions.activePagePartChanged(null)));const e=i.urlUtils.createLocation(window.location,this.href);n?r.replace(e):r.push(e)}}},dr.count++,this.id=`jimu-link-${dr.count}`,this.state={isTipPopperOpen:!1,handleHrefChange:!1}}componentWillUnmount(){}isHrefCanBeChanged(e=!1){var t,o,n;if(this.props.to.linkType===i.LinkType.View)return!0;const{dialogInfos:r,currentDialogJson:a,isPageDlg:s,currentPageId:l,currentDialogId:c,currentPageDlgId:d,queryObject:u,dispatch:p}=this.props,h=s?l+"-"+c:c;let f=!1;if(a)if(a.mode===i.DialogMode.Anchored){const e=this.props.to;u.dlg?u.dlg===c?e.linkType!==i.LinkType.Dialog&&e.linkType!==i.LinkType.Page||(f=!0):e.linkType===i.LinkType.Page&&p(i.appActions.currentDialogChanged(u.dlg)):(f=!0,e.linkType===i.LinkType.Page&&p(i.appActions.currentDialogChanged(null)))}else if(this.isCurrentDlgCanBeClosed()){let o,n=a.isSplash||s,g=r||(0,i.Immutable)({});if(window.jimuConfig.isInBuilder){o=null;const e=l+"-"+d;a.isSplash&&d&&!(null===(t=null==r?void 0:r[e])||void 0===t?void 0:t.isClosed)&&this.props.to.linkType===i.LinkType.Dialog&&(o=e,n=!1)}else o=a.isSplash&&(d||u.dlg)||s&&c!==u.dlg&&u.dlg||null,c===o&&(o=null),n=n&&!(o&&this.props.to.linkType===i.LinkType.Dialog)&&!e;n&&(g=g.setIn([h,"canClose"],!0).setIn([h,"isClosed"],!0),p(i.appActions.dialogInfosChanged(g))),o||(f=!0)}else{const e=(r||(0,i.Immutable)({})).setIn([h,"alertVersion"],(null!==(n=null===(o=null==r?void 0:r[h])||void 0===o?void 0:o.alertVersion)&&void 0!==n?n:0)+1);p(i.appActions.dialogInfosChanged(e))}else f=!0;return f}isCurrentDlgCanBeClosed(){var e;const{dialogInfos:t,currentDialogJson:o,isPageDlg:n,currentPageId:r,currentDialogId:i}=this.props,a=n?r+"-"+i:i;return!(null==o?void 0:o.interactionType)||!(null==o?void 0:o.confirmBeforeClose)||(null===(e=null==t?void 0:t[a])||void 0===e?void 0:e.canClose)}clearSelection(){setTimeout((()=>{this.props.dispatch(i.appActions.selectionChanged(null))}),50)}render(){var e;const t=this.props,{replace:o,innerRef:n,customStyle:r={},themeStyle:a,className:s,history:l,to:c,queryObject:d,title:u,tabIndex:p,dialogJson:h,dispatch:f,currentDialogId:g,currentPageDlgId:m,isPageDlg:v,dialogInfos:b,currentPageId:y,currentDialogJson:w}=t,x=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(t,["replace","innerRef","customStyle","themeStyle","className","history","to","queryObject","title","tabIndex","dialogJson","dispatch","currentDialogId","currentPageDlgId","isPageDlg","dialogInfos","currentPageId","currentDialogJson"]),{style:S,hoverStyle:O,visitedStyle:E}=r,k=(0,i.classNames)("jimu-link",s),C=this.stopGoingToOtherSite();if(c){const e=((null==w?void 0:w.isSplash)||v)&&g!==(null==d?void 0:d.dlg);this.href=i.urlUtils.getHrefFromLinkTo(c,d,l&&l.location,e)}else this.href=null;const N=h&&h.id===g;return(0,i.jsx)(i.React.Fragment,null,(0,i.jsx)(be,Object.assign({id:this.id},x,a,{onClick:this.handleClick,href:C?"":this.href,title:u,ref:n,className:k,tabIndex:null!=p?p:null!==(e=null==a?void 0:a.tabIndex)&&void 0!==e?e:0}),(O||E)&&(0,i.jsx)("style",null,S&&`#${this.id}{${i.utils.styleObjectToString(S)}}`,O&&`#${this.id}:hover{${i.utils.styleObjectToString(O)}}`,E&&`#${this.id}:visited{${i.utils.styleObjectToString(E)}}`),this.props.children),this.state.isTipPopperOpen&&(0,i.jsx)(lr,{reference:this.id,open:!0,href:this.href}),N&&(null==d?void 0:d.dlg)!==h.id&&(0,i.jsx)(i.AppDialog,{dialogJson:h,isOpen:N,opener:this.id,toggle:()=>{var e;f(i.appActions.currentDialogChanged(null!==(e=d.dlg)&&void 0!==e?e:null)),f(i.appActions.activePagePartChanged(d.dlg?null:i.PagePart.Body))}}))}}dr.count=0;const ur=i.jimuHistory.withHistory(dr),pr=i.ReactRedux.connect(((e,t)=>{var o,n,r;const a=t.to;return{dialogJson:a&&a.linkType===i.LinkType.Dialog&&(null===(o=e.appConfig.dialogs[a.value])||void 0===o?void 0:o.mode)===i.DialogMode.Anchored?e.appConfig.dialogs[a.value]:null,currentPageId:e.appRuntimeInfo.currentPageId,currentDialogId:e.appRuntimeInfo.currentDialogId,currentDialogJson:e.appConfig.dialogs&&e.appConfig.dialogs[e.appRuntimeInfo.currentDialogId],currentPageDlgId:e.appConfig.pages&&(null===(n=e.appConfig.pages[e.appRuntimeInfo.currentPageId])||void 0===n?void 0:n.autoOpenDialogId),isPageDlg:!(!e.appConfig.pages||(null===(r=e.appConfig.pages[e.appRuntimeInfo.currentPageId])||void 0===r?void 0:r.autoOpenDialogId)!==e.appRuntimeInfo.currentDialogId),dialogInfos:e.appRuntimeInfo.dialogInfos}}))(ur),hr=i.React.forwardRef(((e,t)=>(0,i.jsx)(pr,Object.assign({innerRef:t},e))));hr.displayName="_Link";const fr=(0,c.withStyles)(hr,"Link");fr.defaultProps={tag:"a",themeStyle:{type:"link"}};const gr=/\<exp((?!\<exp).)+\<\/exp\>/gim,mr=/\<a((?!\<a).)+\<\/a\>/gm,vr=/data-expression=\"(((?![\=|\>|\"]).)*)["\>|"\s)]/m,br=/data-link=\"(((?![\=|\>|\"]).)*)["\>|"\s)]/m,yr=/data-uniqueid=\"(((?![\=|\s|\>|\"]).)*)[\"\>|"\s)]/m,wr=/href="((?!").)*"/m,xr=/<[^>]*>/gm,Sr=(e,t)=>{if(!t.global)throw Error("Regexp Must have a global label");const o=[];let n;for(;null!==(n=t.exec(e));)o.push(n[0]);return o},Or=e=>{try{return e=decodeURIComponent(e),JSON.parse(e)}catch(e){console.error(e)}},Er=e=>{const t=e.match(vr),o=null==t?void 0:t[1];if(o)return Or(o)},kr=e=>{const t=e.match(br),o=null==t?void 0:t[1];if(o)return Or(o)},Cr=e=>{const t=e.match(yr);return null==t?void 0:t[1]},Nr=e=>{const t=Sr(e,gr);let o=(0,i.Immutable)({});return null==t||t.forEach((e=>{const t=Er(e),n=Cr(e);t&&n&&(o=o.set(n,t))})),o},Tr=e=>{const t=Sr(e,mr);let o=(0,i.Immutable)({});return t.forEach((e=>{const t=kr(e),n=Cr(e);t&&n&&(o=o.set(n,t))})),o},Rr=e=>{let t=Nr(e);const o=Tr(e);return Object.keys(o).forEach((e=>{const n=o[e];n.expression&&(t=t.set(e,n.expression))})),t},jr=e=>{const t=null==e?void 0:e.record,o=null==e?void 0:e.dataSourceId;return o&&t&&{[o]:t}},Pr=e=>void 0!==e,$r=(e,t)=>e.replace(gr,(e=>{const o=Cr(e);if(!o)return e;const n=t[o];return Pr(n)?n:e})),Mr=(e,t)=>e.replace(mr,(e=>{var o,n;const r=Cr(e);if(!r)return e;const a=kr(e);if(a){let s="";if(null==a?void 0:a.expression)s=t[r];else{const e=null===(n=null===(o=(0,i.getAppStore)())||void 0===o?void 0:o.getState())||void 0===n?void 0:n.queryObject;s=i.urlUtils.getHrefFromLinkTo(a,e)}return e.replace(wr,`href="${s}"`)}return e})),Ir=e=>{let t=(0,i.Immutable)({});return e&&Object.keys(e).forEach((o=>{const n=e[o];(null==n?void 0:n.isSuccessful)&&(t=t.set(o,n.value))})),t},Dr=(e,t,o)=>e&&t?e===o?null:e.nodeName===t?e:Dr(e.parentElement,t,o):null,Ar=(e,t)=>{if("A"!==(t=t||e.target).nodeName)return;const o=t.getAttribute("href"),n=t.getAttribute("target");return!(e.defaultPrevented||0!==e.button||n&&"_self"!==n||cr(e)||i.urlUtils.isAbsoluteUrl(o))},Lr="\ufeff",zr=e=>{return e?(t=e)&&t.includes("<")?e.replace(xr,""):e:e;var t},_r=e=>{if(!e)return!0;if("<p></p>"===e||"<p><br></p>"===e)return!0;let t=zr(e);return t=null==t?void 0:t.trim(),!t},Br=(e,t)=>([{tagReg:mr,attrReg:br,getInfoFunc:kr,getStrFunc:Ur,prefix:"data-link"},{tagReg:gr,attrReg:vr,getInfoFunc:Er,getStrFunc:Fr,prefix:"data-expression"}].forEach((o=>{e=e.replace(o.tagReg,(e=>Cr(e)?e=e.replace(o.attrReg,(e=>{const n=o.getInfoFunc(e),r=!(!n.linkType&&!n.openType),i=r?n.expression:n;if(!i||!i.parts)return e;const a=i;i.parts.forEach(((e,o)=>{a.parts[o]=t(o,a)}));let s=n;r?s.expression=a:s=a;const l=o.getStrFunc(s);return`${o.prefix}="${l}"`})):e))})),e),Fr=e=>{try{let t=JSON.stringify(e);return t=encodeURIComponent(t),t}catch(e){console.error(e)}},Ur=e=>{try{let t=JSON.stringify(e);return t=encodeURIComponent(t),t}catch(e){console.error(e)}};function Hr(e){return i.css`
    display: block;
    width: 100%;
    -webkit-appearance: none;
    &:focus,
    &:active {
      outline: none;
    }
    &::-moz-focus-outer {
      border: none;
      outline: none;
    }
    ${(0,c.getBoxStyles)(e)}
    padding: 0;
    cursor: pointer;
  `}function Wr(e,t){const{default:o,hover:n}=e;return i.css`
    visibility: ${t?"hidden":"visible"};
    ${(0,c.getBoxStyles)(o)}
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out; /* $btn-transition */
    ${n&&i.css`
      &:hover {
        ${(0,c.getBoxStyles)(n)}
      }
    `}
  `}function Vr(e){const{default:t}=e;return i.css`
    ${(0,c.getBoxStyles)(t)}
  `}function Gr(e,t,o){const{track:n,thumb:r,progress:a}=e;return i.css`
  &[type="range"] {
    /* thumb - webkit */
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      ${Wr(r,t)};
    }
    /* thumb - moz */
    &::-moz-range-thumb {
      ${Wr(r,t)};
    }
    /* thumb - ms */
    &::-ms-thumb {
      ${Wr(r,t)};
      margin-top: 0;
    }
    /* track - webkit */
    &::-webkit-slider-runnable-track {
      ${(0,c.getBoxStyles)(n)};
      background: linear-gradient(to ${o?"left":"right"}, ${a.default.bg}, ${a.default.bg}) ${n.bg} no-repeat left;
      background-size: 50% 100%, 100% 100%;
    }
    /* track - moz */
    &::-moz-range-track {
      ${(0,c.getBoxStyles)(n)};
    }
    /* track - ms */
    &::-ms-track {
      ${(0,c.getBoxStyles)(n)};
    }
    /* fill - moz */
    &::-moz-range-progress {
      ${Vr(a)};
    }
    /* fill - ms */
    &::-ms-fill-lower {
      ${Vr(a)};
    }
    &::-ms-fill-upper {
      display: none;
    }
    /* tooltip - ms */
    &::-ms-tooltip {
      display: none;
    }
    &:focus {
      &::-webkit-slider-thumb {
        box-shadow: ${r.focus.shadow};
      }
      &::-moz-range-thumb {
        box-shadow: ${r.focus.shadow};
      }
    }
  }`}function qr(e){const{root:t,thumb:o}=e;return i.css`
    height: ${o};
    /* thumb - webkit */
    &::-webkit-slider-runnable-track {
      height: ${t};
    }
    /* track - moz */
    &::-moz-range-track {
      height: ${t};
    }
    /* track - ms */
    &::-ms-track {
      height: ${t};
    }

    /* fill - moz */
    &::-moz-range-progress {
      height: ${t};
    }
    /* fill - ms */
    &::-ms-fill-lower {
      height: ${t};
    }

    /* thumb - webkit */
    &::-webkit-slider-thumb {
      width: ${o};
      height: ${o};
      margin-top: -${i.polished.math(`\n        (${o} - ${t}) * 0.5\n      `)};
    }

    /* thumb - moz */
    &::-moz-range-thumb {
      width: ${o};
      height: ${o};
      margin-top: - ${i.polished.math(`\n        (${o} - ${t}) * 0.5\n      `)};
    }

    /* thumb - ms */
    &::-ms-thumb {
      width: ${o};
      height: ${o};
      margin-top: 0;
    }
  `}const Yr=e=>{var t,o,n;const r=null!==(t=e.size)&&void 0!==t?t:"default",a=e.theme,s=e.hideThumb,l=null===(o=null==a?void 0:a.components)||void 0===o?void 0:o.slider,{sizes:c,variants:d}=l,u="default",p=(0,i.getAppStore)().getState().appContext.isRTL;return l&&i.css`
    ${Hr(null===(n=d[u])||void 0===n?void 0:n.root)}
    ${qr(c[r])}
    ${Gr(d[u],s,p)}
  `};function Zr(e){return e&&i.css`
    padding: ${e.paddingY} ${e.paddingX};
    font-size: ${e.fontSize};
    line-height: ${e.lineHeight};
    border-radius: ${e.borderRadius};
    > .icon-btn-sizer {
      min-width: ${e.lineHeight};
      min-height: ${e.lineHeight};
      display: flex;
      justify-content: center;
      align-items: center;
      margin: auto;
    }
  `}function Kr(e){const{default:t,hover:o,active:n,focus:r,disabled:a}=e;return e&&t&&i.css`
    ${(0,c.getBoxStyles)(t)};
    ${o&&i.css`
      &:hover,
      &[aria-expanded="true"] {
        ${(0,c.getBoxStyles)(o)};
      }
    `}
    ${r&&i.css`
      &,
      &:not(:disabled):not(.disabled).active{
        &:focus,
        &.focus {
          /* ${(0,c.getBoxStyles)(r)}
          outline: none; */
        }
      }
    `}
    ${n&&i.css`
      &:not(:disabled):not(.disabled).active {
      /* &[aria-expanded="true"] { */
        ${(0,c.getBoxStyles)(n)}
      }
      &:not(:disabled):not(.disabled) {
        cursor: pointer;
      }
    `}

    ${a&&i.css`
      &.disabled,
      &:disabled {
        &,
        &:hover {
          ${(0,c.getBoxStyles)(a)}
        }
      }`}
  `}function Xr(e){if(!e)return;const{fontSize:t,lineHeight:o,paddingY:n}=e;let r,a,s,l=0,c=0;return[r,a]=i.polished.getValueAndUnit(t),s=i.polished.getValueAndUnit(n)[0],c=i.polished.getValueAndUnit(o)[1],r-1>0&&(l=.5*(r-1)),c?`${s}${a}`:`${l+r*(o-1)*.5+s}${a}`}const Qr=e=>"a"===e.tag?i.css`a& {
    ${Jr(e)}
  }`:Jr(e);function Jr(e){var t,o,n,r,a,s;if(!(e&&e.theme&&e.theme.components))return;const l=e.theme,d=null!==(o=null===(t=null==l?void 0:l.components)||void 0===t?void 0:t.button)&&void 0!==o?o:{},{sizes:u,variants:p,icon:h}=d,f=null!==(n=e.type)&&void 0!==n?n:"default",g=null!==(r=e.size)&&void 0!==r?r:"default",m=e.icon,v=e.vertical,b=null!==(a=null==u?void 0:u[g])&&void 0!==a?a:{},y=null!==(s=null==p?void 0:p[f])&&void 0!==s?s:{};return i.css`
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out; /* $btn-transition */

    ${(0,c.hoverFocus)("text-decoration: none;")}

    /* Sizing: */
    ${Zr(b)}

    /* Variant: */
    ${Kr(y)}

    /* Icons in button: */
    .jimu-icon {
      pointer-events: none;
      flex-shrink: 0;
    }
    .jimu-icon,
    .left-icon {
      margin-right: ${h?h.spacing:".5rem"};
    }
    .right-icon {
      &,
      &.jimu-icon {
        margin-left: ${h?h.spacing:".5rem"};
        margin-right: auto;
      }
    }

    /* Icon button */
    ${m&&i.css`
      &.icon-btn {
        line-height: 1;
        .jimu-icon {
          display: block;
          margin-left: auto;
          margin-right: auto;
        }
        padding: ${Xr(b)}
      }
      &.dropdown-button {
        .jimu-icon {
          margin-right: auto;
        }
      }
    `}

    /* Vertical Button */
    ${v&&!m&&i.css`
      .jimu-icon {
        &,
        &.right-icon {
          display: block;
          margin: 0 auto;
          margin-top: ${h?h.spacing:".5rem"};
          margin-bottom: ${h?h.spacing:".5rem"};
        }
      }
    `}

    /* handle truncated text */
    &.text-truncate .jimu-btn-text {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    /* for a badge in a button */
    .badge {
      position: relative;
      top: -1px;
    }

    &.btn-block {
      display: block;
      width: 100%;
    }
  `}function ei(e,t){const o=e?t?"left":"right":"bottom";return i.css`${["top","bottom","left","right"].map((e=>o===e?void 0:`border-${e}-width: 0 !important;`))}`}function ti(e){return i.css`
    display: flex;
    flex-wrap: nowrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    ${(0,c.getBoxStyles)(e)}
  `}function oi(e,t,o,n){var r,a,s,l;const{root:c,item:d,size:u}=t;return i.css`
    .nav-link {
      ${Kr(d)}
      ${Zr(u)}
    }
    ${"tabs"===e&&i.css`
      &.nav-tabs {
        ${ei(o,n)}
        .nav-item {
          user-select: none;
          ${!o&&i.css`
            margin-bottom: -${null===(r=null==c?void 0:c.border)||void 0===r?void 0:r.width};
          `}
        }
        .nav-link {
          ${!o&&i.css`
            ${i.polished.borderRadius("top",null==c?void 0:c.borderRadius)};
            /* &:not(:focus).active { */
            &.active {
              border-bottom-color: transparent !important;
            }
          `}
          &.active,
          &.disabled {
            cursor: default;
          }
        }
        .dropdown-menu {
          margin-top: -${null===(a=null==c?void 0:c.border)||void 0===a?void 0:a.width};
          ${i.polished.borderRadius("top",0)}
        }
        ${o?i.css`
          .nav-item {
            margin-${n?"left":"right"}: -${null===(s=null==c?void 0:c.border)||void 0===s?void 0:s.width};
          }
          .nav-link {
            ${i.polished.borderRadius(n?"right":"left",null==c?void 0:c.borderRadius)};
          }
        `:""}
      }
    `}
    ${"underline"===e&&i.css`
      &.nav-underline {
        ${ei(o,n)}
        .nav-item {
          ${!o&&i.css`
            margin-bottom: -${null===(l=null==c?void 0:c.border)||void 0===l?void 0:l.width};
          `}
        }
        .nav-link {
          ${ei(o,n)}
          &:not(:disabled):not(.disabled):active,
          &[aria-expanded="true"] {
            border-bottom-color: transparent;
          }
          /* ${!o&&i.polished.borderRadius("bottom",0)} */
        }
        ${o?i.css`
          .nav-item {
            margin-${n?"left":"right"}: -1px;
          }
          .nav-link {
            /* ${i.polished.borderRadius(n?"left":"right",0)} */
            border-${n?"left":"right"}-width: ${d.active.border.width} !important;
          }
        `:""}
      }
    `}
  `}const ni=e=>{var t,o,n,r,a,s,l,c,d,u;const p=e.tabs,h=e.underline,f=e.pills,g=e.fill,m=e.justified,v=e.vertical,b=e.right,y=e.iconPosition,w=h?"underline":p?"tabs":f?"pills":"default",x=e.textAlign,S=null===(t=e.showText)||void 0===t||t,O=e.theme,E=null===(o=null==O?void 0:O.components)||void 0===o?void 0:o.nav,{variants:k}=E,C=e.mode,N=null!==(n=null==k?void 0:k[w])&&void 0!==n?n:{},T=null!==(r=null==N?void 0:N.size)&&void 0!==r?r:{},R=null!==(s=null!==(a=e.gap)&&void 0!==a?a:N.gutter)&&void 0!==s?s:0,j=null===(l=e.children)||void 0===l?void 0:l.length;return E&&i.css`
    ${ti(null==N?void 0:N.root)}

    .jimu-nav-link-wrapper {
      display: block;
      width: 100%;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .nav-item {
      > .nav-link {
        width: 100%;
        height: 100%;
      }
    }
    /* Variants: */
    ${oi(w,N,v,b)}

    /* Vertical Mode */
    ${v&&i.css`
      &.vertical {
        .nav-item {
          &,
          > .nav-link {
          width: 100%;
          height: auto;
        }
      }
    `}

    /* Gap between nav items */
    ${R&&(v?i.css`
      .nav-item + .nav-item {
        margin-top: ${R};
      }
      .nav-item ul.dropdown-menu-inline {
        margin-top: ${R};
      }
    `:i.css`
      .nav-item + .nav-item {
        margin-left: ${R};
      }
    `)}

    /* Text alignment in nav items */
    ${x&&i.css`
      .nav-item {
        text-align: ${x};
        > .btn {
          justify-content: ${"left"===x?"flex-start":"right"===x?"flex-end":"flex-start"};
        }
      }
    `}

    /* Fill */
    ${g&&i.css`
      &.nav-fill {
        .nav-item {
          flex: 1 1 ${isNaN(j)?"auto":100/j+"%"};
          overflow: auto;
          text-align: ${x||"center"};
          .nav-link {
            width: 100%;
          }
        }
      }
    `}

    ${m&&i.css`
      &.nav-justified {
        .nav-item {
          flex-basis: 0;
          flex-grow: 1;
          text-align: ${x||"center"};
        }
      }
    `}

    ${"toggle"===C&&i.css`
      &.navbar-nav {
        font-size: large;
        .right-icon.jimu-icon {
          margin-right: unset !important;
          width: 12px;
          height: 12px;
        }
        &.nav-tabs .nav-link.active {
          background-color: unset !important;
        }
      }
      .nav-item {
        .nav-link {
          width: 100%;
          justify-content: space-between;
        }
        + .nav-item {
          margin-left: 0;
        }
      }
      .nav-link {
        display: flex;
        width: 100%;
        justify-content: center;
        + .nav-link {
          margin-left: 0;
        }
      }
    `}

    .jimu-icon,
    .left-icon {
      margin-right: ${S?null!==(c=null==N?void 0:N.icon.spacing)&&void 0!==c?c:".5rem":"unset"};
    }
    .right-icon {
      &,
      &.jimu-icon {
        margin-left: ${S?null!==(d=null==N?void 0:N.icon.spacing)&&void 0!==d?d:".5rem":"unset"};
        margin-right: auto;
      }
    }
    ${"above"===y&&i.css`
      display: flex;
      flex-direction: column;
      .jimu-icon {
        margin-left: auto;
        margin-right: auto;
        margin-bottom: ${S?null!==(u=null==N?void 0:N.icon.spacing)&&void 0!==u?u:".5rem":"unset"};
      }
    `}
    .nav-link-caret-btn {
      display: inline-block;
      padding: .3125rem;
      margin: -.3125rem ${N.icon.spacing};
      border-radius: 50%;
      transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out; /* $btn-transition */

      .caret-icon {
        display: block;
        margin-left: 0;
        margin-right: 0;
      }
      &:hover {
        background-color: rgba(0,0,0,0.1);
      }
    }

    ${v&&i.css`
      .nav-link.with-caret {
        position: relative;
        padding-right: ${null==T?void 0:T.paddingX};
        .nav-link-caret-btn {
          position: absolute;
          ${"right"===x?`left: ${T.paddingX};`:`right: ${T.paddingX};`}
          height: 20px;
          width: 20px;
          border-radius: 0;
          top: calc(50% - 10px);
          bottom: calc(50% - 10px);
          padding: 0;
          margin: 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
      }
    `}
  `};function ri(e){return(0,c.getBoxStyles)(e)}function ii(e){return e&&i.css`
    .jimu-btn {
      &.previous,
      &.next {
        ${Kr(e)}
      }
    }
  `}function ai(e){return e&&i.css`
    ${ri(null==e?void 0:e.root)}
    ${ii(null==e?void 0:e.item)}
  `}const si=e=>{var t,o,n,r;const a=e.theme,s=null!==(t=null==e?void 0:e.type)&&void 0!==t?t:"default",l=null==e?void 0:e.vertical,c=(null==e?void 0:e.previousText)&&(null==e?void 0:e.previousIcon),d=(null==e?void 0:e.nextText)&&(null==e?void 0:e.nextIcon),u=null===(r=null===(n=null===(o=null==a?void 0:a.components)||void 0===o?void 0:o.navButtonGroup)||void 0===n?void 0:n.variants)||void 0===r?void 0:r[s];return i.css`
    width: 100%;
    height: 100%;
    min-height: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: ${l?"column":"row"};
    ${ai(u)};
    > .jimu-btn.icon-btn.btn {
      padding: 0.125rem;
      &.previous {
        > .icon-btn-sizer {
          justify-content:${c?"flex-start":"center"};;
          >.jimu-icon {
            margin-right: ${c?"5px":"unset"};
            margin-left: unset;
          }
        }
      }
      &.next {
        > .icon-btn-sizer {
          justify-content:${d?"flex-end":"center"};;
          >.jimu-icon {
            margin-left: ${d?"5px":"unset"};
            margin-right: unset;
          }
        }
      }
    }
  `},li=e=>{var t,o,n,r,a,s,l,c,d;const u=null!==(t=e.color)&&void 0!==t?t:"danger",p=e.dot,h=e.theme,f=null===(o=null==h?void 0:h.components)||void 0===o?void 0:o.badge,g=i.polished.math(`${null!==(n=f.minSize)&&void 0!==n?n:0} + ${null!==(a=null===(r=f.border)||void 0===r?void 0:r.width)&&void 0!==a?a:0} * 2`);return f&&i.css`
    display: inline-flex;
    position: relative;
    .badge {
      position: absolute;
      top: 0;
      right: 0;
      min-width: ${g};
      min-height: ${g};
      border: ${null!==(l=null===(s=f.border)||void 0===s?void 0:s.color)&&void 0!==l?l:"inherit"} solid ${null!==(d=null===(c=f.border)||void 0===c?void 0:c.width)&&void 0!==d?d:0};
      padding: ${f.paddingY} ${f.paddingX};
      font-size: ${f.fontSize};
      font-weight: ${f.fontWeight};
      line-height: 1;
      text-align: center;
      white-space: nowrap;
      vertical-align: baseline;
      border-radius: ${f.borderRadius};
      transform: translate(50%, -50%);
      ${u&&i.css`
        &.badge-${u} {
          ${m=h.colors&&h.colors[u],`\n    color: ${m&&i.polished.readableColor(m)};\n    background-color: ${m};\n  `}
        }
      `}
      ${p&&i.css`
        padding: 0;
      `}
    }
  `;var m},ci=e=>{var t,o,n,r;const a=e.size,s=e.vertical,l=e.theme,d=null===(t=null==l?void 0:l.components)||void 0===t?void 0:t.button,u=null!==(n=null===(o=null==d?void 0:d.sizes)||void 0===o?void 0:o[a])&&void 0!==n?n:{};return d&&i.css`
    &.btn-group,
    &.btn-group-vertical {
      position: relative;
      display: inline-flex;
      vertical-align: middle;

      > .btn {
        position: relative;
        flex: 0 1 auto;

        ${(0,c.hover)("z-index: 1;")}

        &:focus,
        &:active,
        &.active {
          z-index: 1;
        }
      }

      .btn + .btn,
      .btn + .dropdown,
      .dropdown + .btn,
      .dropdown + .dropdown {
        margin-left: -1px;
      }
    }

    &.btn-toolbar {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;

      .input-group {
        width: auto;
      }
    }

    &.btn-group {
      > .btn:first-of-type {
        margin-left: 0;
      }

      > .btn:not(:last-child):not(.dropdown),
      > .dropdown:not(:last-child) > .btn{
        ${i.polished.borderRadius("right",0)};
        /* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */
      }

      > .btn:not(:first-child) /* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */,
      > .dropdown:not(:first-child) > .btn /* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */{
        ${i.polished.borderRadius("left",0)};
      }
    }

    /* Sizing */

    ${u&&i.css`
      > .btn {
        ${Zr(u)}
        &.icon-btn {
          line-height: 1;
          padding: ${Xr(u)}
        }
      }
    `}

    /* Vertical button groups */

    ${s&&i.css`
      &.btn-group-vertical {
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        .btn,
        .btn-group {
          width: 100%;
        }

        > .btn + .btn,
        > .btn + .dropdown,
        > .dropdown + .btn,
        > .dropdown + .dropdown {
          margin-top: -${null===(r=d.border)||void 0===r?void 0:r.width};
          margin-left: 0;
        }

        > .btn:not(:last-child):not(.dropdown),
        > .dropdown:not(:last-child) > .btn {
          ${i.polished.borderRadius("bottom",0)};
          /* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */
        }

        > .btn:not(:first-child) /* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */,
        > .dropdown:not(:first-child) > .btn  /* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */{
          ${i.polished.borderRadius("top",0)};
        }
      }
    `}
  `},di=e=>{var t,o,n;const r=e.direction,a=e.group,s=e.fluid,l=e.theme,d=null===(t=null==l?void 0:l.components)||void 0===t?void 0:t.dropdown,u=null===(n=null===(o=(0,i.getAppStore)().getState())||void 0===o?void 0:o.appContext)||void 0===n?void 0:n.isRTL;return d&&i.css`
    display: flex;
    ${r&&"position: relative;"}
    /* The dropdown menu */
    ${"up"===r&&`\n      &.dropup {\n        .dropdown-menu {\n          top: auto;\n          bottom: 100%;\n          margin-top: 0;\n          margin-bottom: ${d.spacer};\n        }\n\n        .dropdown-button {\n          .caret-icon {\n            ${(0,c.caret)("up")}\n          }\n        }\n      }\n    `}

    ${"right"===r&&`\n      &.dropright {\n        .dropdown-menu {\n          top: 0;\n          right: auto;\n          left: 100%;\n          margin-top: 0;\n          margin-left: ${d.spacer};\n        }\n\n        .dropdown-button {\n          .caret-icon {\n            ${(0,c.caret)(u?"left":"right")}\n          }\n        }\n      }\n    `}

    ${"left"===r&&`\n      &.dropleft {\n        .dropdown-menu {\n          top: 0;\n          right: 100%;\n          left: auto;\n          margin-top: 0;\n          margin-right: ${d.spacer};\n        }\n\n        .dropdown-button {\n          .caret-icon {\n            ${(0,c.caret)(u?"right":"left")}\n          }\n        }\n      }\n    `}
    ${s&&i.css`
      &.fluid {
        width: 100%;
      }
    `}

    ${a&&i.css`
      ${ci(e)}
      &.btn-group > .btn {
        flex: 1;
        &.dropdown-button {
          flex: 0;
        }
      }
    `}
  `},ui=e=>{var t,o,n,r,a;const s=null==e?void 0:e.theme,l=null===(o=null===(t=null==s?void 0:s.components)||void 0===t?void 0:t.dropdown)||void 0===o?void 0:o.button,c=null!==(n=e.size)&&void 0!==n?n:"default",d=null==l?void 0:l.sizes[c];return i.css`
    width: 100%;
    display: inline-flex;
    align-items: center;
    padding-left: ${null==d?void 0:d.paddingX};
    padding-right: ${null==d?void 0:d.paddingX};

    ${e&&e.children&&e.children.length>1?i.css`
      .caret-icon {
        margin-left: 0.5rem;
        flex-shrink: 0;
        line-height: 1;
        .jimu-icon {
          margin-right: 0;
        }
      }
    `:i.css`
      .caret-icon {
        margin-left: 0;
        flex-shrink: 0;
        .jimu-icon {
          margin-right: 0;
        }
      }
    `}

    &.dropdown-button-icon .icon-btn-sizer{
      width: inherit;
    }

    &.dropdown-icon-dot {
      .icon-btn-sizer{
        position: relative;
        :after {
          content: '';
          width: 0;
          height: 0;
          border: 2px solid transparent;
          border-top: 2px solid ${null===(a=null===(r=s.colors)||void 0===r?void 0:r.palette)||void 0===a?void 0:a.dark[800]};
          position: absolute;
          right: 0;
          bottom: -2px;
        }
      }
      &.btn-sm .icon-btn-sizer{
        :after {
          bottom: -4px;
        }
      }
    }

    .dropdown-button-content {
      flex: 1;
      display: inline-block;
      vertical-align: middle;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      align-items: center;
      > * {
        vertical-align: middle;
      }
    }
  `},pi=e=>{var t,o,n,r;const{iconPosition:a,caret:s,theme:l}=e,d=null!==(r=null===(n=null===(o=null===(t=null==l?void 0:l.components)||void 0===t?void 0:t.button)||void 0===o?void 0:o.icon)||void 0===n?void 0:n.spacing)&&void 0!==r?r:0,u=null==e?void 0:e.themeStyle;return i.css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out; /* $btn-transition */
    text-decoration: none;
    ${"above"===a&&!(null==u?void 0:u.icon)&&i.css`.jimu-nav-link-wrapper .jimu-icon {
      display: block;
      margin: 0 auto ${d};
    }`}

    ${(0,c.hoverFocus)("\n      text-decoration: none;\n      outline: none;\n    ")}
    ${s&&i.css`
      &.with-caret.nav-link {
        padding-right: 0;
      }
    `}
  `},hi=e=>{const t=e.icon;return i.css`
    width: 100%;
    ${e.nav?pi(e):Qr((0,i.Immutable)(e).set("icon",t))}
    display: inline-flex;
    align-items: center;

    ${e&&e.children&&e.children.length>1?i.css`
      .caret-icon {
        margin-left: 0.5rem;
        flex-shrink: 0;
        .jimu-icon {
          margin-right: 0;
        }
      }
    `:i.css`
      .caret-icon {
        margin-left: 0;
        flex-shrink: 0;
        .jimu-icon {
          margin-right: 0;
        }
      }
    `}
    .dropdown-toggle-content {
      flex: 1;
      display: inline-block;
      vertical-align: middle;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      align-items: center;
    }
  `},fi=e=>{var t,o,n;const r=e.theme,a=null!==(n=null===(o=null===(t=e.modifiers)||void 0===t?void 0:t.arrow)||void 0===o?void 0:o.enabled)&&void 0!==n?n:e.showArrow,s=r&&r.components&&r.components.dropdown;return s&&i.css`
    min-width: ${s.minWidth};
    margin: 0;
    font-size: ${r.typography.fontSizeBase};
    color: ${r.body.color};
    text-align: left;
    list-style: none;
    background-color: ${s.bg};
    background-clip: padding-box;
    border: ${s.border.width} solid ${s.border.color};
    padding: ${s.paddingY} 0;
    border-radius: ${s.borderRadius};
    box-shadow: ${s.shadow};

    .dropdown-menu--inner {
      max-height: calc(100vh - 2rem);
      overflow: auto;
    }
    ul.dropdown-menu--inner {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    ${a&&(0,c.popperPointer)({border:{color:s.border.color,width:s.border.width},background:s.bg})}

    &.dropdown-menu.show {
      display: block;
    }
  `},gi=e=>{var t;const o=null===(t=null==e?void 0:e.components)||void 0===t?void 0:t.dropdown;return i.css`
    display: flex;
    align-items: center;
    padding: ${o.item.paddingY} ${o.item.paddingX};
    width: 100%;
    clear: both;
    font-weight: ${e.typography.weights.medium};
    color: ${o.link.color};
    text-align: inherit;
    white-space: nowrap;
    background-color: transparent;
    border: 0;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out; /* $btn-transition */

    svg.jimu-icon.jimu-icon-auto-color {
      color: ${o.link.color} !important;
    }

    ${(0,c.hover)(`\n      color: ${o.link.hoverColor};\n      text-decoration: none;\n      background: ${o.link.hoverBg};\n\n      svg.jimu-icon.jimu-icon-auto-color {\n        color: ${o.link.hoverColor} !important;\n      }\n    `)}


    &.disabled,
    &:disabled {
      color: ${o.link.disabledColor};
      background-color: transparent;
    }

    .left-icon {
      margin-right: .5rem;
    }
  `},mi=e=>{var t;const o=!!e.divider,n=!!e.header,r=e.theme,a=null===(t=null==r?void 0:r.components)||void 0===t?void 0:t.dropdown;return a&&i.css`
    &.dropdown-item {
      ${gi(r)}
    }

    /* Dropdown section headers */
    ${n&&`&.dropdown-header {\n        display: block;\n        padding: ${a.paddingY} ${a.item.paddingX};\n        margin-bottom: 0;\n        color: ${a.header.color};\n        white-space: nowrap;\n      }`}

    ${o&&`&.dropdown-divider {\n        ${(0,c.navDivider)(a.divider.bg,a.divider.margin)};\n      }`}

    /* Dropdown text */
    .dropdown-item-text {
      display: block;
      padding: ${a.item.paddingY} ${a.item.paddingX};
      color: ${a.link.color};
    }
    .jimu-dropdown-item-check,
    .jimu-dropdown-item-check-placeholder {
      margin-right: ${a.link.checkIconGutter};
    }
    .jimu-dropdown-item-check {
      color: ${a.link.checkIconColor};
    }

    /* icons in the DropdownItem */
    .jimu-dropdown-item-check,
    .jimu-dropdown-item-check-placeholder,
    .jimu-icon {
      flex-shrink: 0;
    }
  `},vi=e=>i.css`
    ${e&&Qr(Object.assign({theme:e.theme,tag:e.tag},e.themeStyle))}
  `;function bi(e,t){const o=e.sizes[t];return`\n    height: ${"auto"!==o.height?o.height:function(e,t){const o=i.polished.math(`\n    ${e.fontSize} * ${e.lineHeight} +\n    ${e.paddingY} * 2`);return"0"===t.toString()?o:`calc(${o} + ${t} * 2)`}(o,e.border.width)};\n    padding: ${o.paddingY} ${o.paddingX};\n    font-size: ${o.fontSize};\n    line-height: ${o.lineHeight};\n    border-radius: ${o.borderRadius};\n  `}const yi=e=>{var t;const o=e.bsSize||e.size,n=e.theme,r=null===(t=null==n?void 0:n.components)||void 0===t?void 0:t.input;return r&&i.css`
    &::-ms-expand {
      background-color: transparent;
      border: 0;
    }

    &.disabled .input-wrapper,
    &.readonly .input-wrapper {
      background: ${r.disabled.bg};
      border-color: ${r.disabled.borderColor};
      opacity: 1;
      color: ${r.disabled.color};
      -webkit-text-fill-color: ${r.disabled.color};
    }

    /* Form validation */
    &.is-invalid .input-wrapper {
      ${function(e,t){const o=t&&t.colors?t.colors.danger:"red";return i.css`
    border-color: ${o||"red"};
    ${`background: ${i.polished.rgba(o,.1)}`};
  `}(0,n)}
    }

    .error-msg {
      color: var(--danger);
    }

    .input-wrapper {
      width: 100%;
      color: ${r.color};
      background-color: ${r.bg};
      background-clip: padding-box;
      border: ${r.border.width} solid ${r.border.color};
      box-shadow: ${r.boxShadow};
      transition: ${r.transition};
      ${!o&&bi(r,"default")}

      /* Form control sizing */

      ${"sm"===o&&bi(r,"sm")}

      ${"lg"===o&&bi(r,"lg")}

      &:focus-within {
        color: ${r.focus.color};
        outline: 1px solid ${r.focus.borderColor};
        /** !important is needed for the case dynamic-setting/title-input */
        background-color: ${r.focus.bg} !important;
      }

      .text-input-clear{
        outline: none;
        padding: 0.125rem;
        &:focus .icon-btn-sizer {
          box-shadow: 0 0 10px 4px ${r.focus.borderColor};
          border-radius: 10px;
        }
      }
    }
  `};const wi=e=>{var t;const o=e.bsSize||e.size,n=e.theme,r=null===(t=null==n?void 0:n.components)||void 0===t?void 0:t.input,a=e.valid,s=e.invalid;return r&&i.css`
    display: block;
    width: 100%;
    height: auto;
    color: ${r.color};
    background-color: ${r.bg};
    background-clip: padding-box;
    border: ${r.border.width} solid ${r.border.color};
    box-shadow: ${r.boxShadow};
    transition: ${r.transition};
    ${!o&&function(e,t){const o=e.sizes[t];return`\n    height: ${"auto"!==o.height?o.height:function(e,t){const o=i.polished.math(`\n    ${e.fontSize} * ${e.lineHeight} +\n    ${e.paddingY} * 2`);return"0"===t.toString()?o:`calc(${o} + ${t} * 2)`}(o,e.border.width)};\n    padding: ${o.paddingY} ${o.paddingX};\n    font-size: ${o.fontSize};\n    line-height: ${o.lineHeight};\n    border-radius: ${o.borderRadius};\n  `}(r,"default")}

    &::-ms-expand {
      background-color: transparent;
      border: 0;
    }

    &:focus {
      color: ${r.focus.color};
      background-color: ${r.focus.bg};
      outline: 1px solid ${r.focus.borderColor};
      box-shadow: ${r.boxShadow}, ${r.focus.boxShadow};
    }

    /* Placeholder */
    &::placeholder {
      color: ${r.placeHolderColor};
      opacity: 1;
    }

    /* Disabled and read-only inputs */
    &:disabled,
    &[readonly] {
      background: ${r.disabled.bg};
      border-color: ${r.disabled.borderColor};
      opacity: 1;
    }

    &:disabled {
      color: ${r.disabled.color};
      -webkit-text-fill-color: ${r.disabled.color};
    }

    /* Form validation */
    ${void 0!==a&&a&&(0,c.formValidation)(!0,n)}
    ${void 0!==s&&s&&(0,c.formValidation)(!1,n)}
  `};function xi(e,t){const o=i.polished.math(`\n    ${e.fontSize} * ${e.lineHeight} +\n    ${e.paddingY} * 2`);return"0"===t.toString()?o:`calc(${o} + ${t} * 2)`}function Si(e,t){const o=e.sizes[t];return`\n    height: ${"auto"!==o.height?o.height:xi(o,e.border.width)};\n    padding: ${o.paddingY} ${o.paddingX};\n    font-size: ${o.fontSize};\n    line-height: ${o.lineHeight};\n    border-radius: ${o.borderRadius};\n  `}const Oi=e=>{var t,o,n;const r=e.theme,a=null===(t=null==r?void 0:r.components)||void 0===t?void 0:t.input,s=a.sizes[null!==(o=e.size)&&void 0!==o?o:"default"];return a&&i.css`
    display: flex;
    flex-direction: row-reverse;
    position: relative;
    height: ${"auto"!==s.height?s.height:xi(s,a.border.width)};

    &:focus-within {
      outline: 1px solid ${a.focus.borderColor};
    }

    .jimu-numeric-input-input-wrap {
      flex: 1;
    }
    .jimu-numeric-input-input {
      ${(e=>{var t;const o=e.bsSize||e.size,n=e.type,r=e.theme,a=null===(t=null==r?void 0:r.components)||void 0===t?void 0:t.input,s=e.valid,l=e.invalid;return a&&i.css`
    display: block;
    width: 100%;
    color: ${a.color};
    background-color: ${a.bg};
    background-clip: padding-box;
    border: ${a.border.width} solid ${a.border.color};
    box-shadow: ${a.boxShadow};
    transition: ${a.transition};
    ${!o&&Si(a,"default")}

    -moz-appearance:textfield;

    &::-ms-expand {
      background-color: transparent;
      border: 0;
    }

    &:focus {
      color: ${a.focus.color};
      background-color: ${a.focus.bg};
      outline: none !important;
      box-shadow: none !important;
    }

    /* Placeholder */
    &::placeholder {
      color: ${a.placeHolderColor};
      opacity: 1;
    }

    /* Disabled and read-only inputs */
    &:disabled,
    &[readonly] {
      background: ${a.disabled.bg};
      border-color: ${a.disabled.borderColor};
      opacity: 1;
    }

    &:disabled {
      color: ${a.disabled.color};
      -webkit-text-fill-color: ${a.disabled.color};
    }

    ${("file"===n||"range"===n)&&"\n      display: block;\n      width: 100%;\n    "}

    ${"textarea"===n&&"\n      height: auto;\n    "}

    /* Form control sizing */

    ${"sm"===o&&Si(a,"sm")}

    ${"lg"===o&&Si(a,"lg")}

    /* Form validation */
    ${void 0!==s&&s&&(0,c.formValidation)(!0,r)}
    ${void 0!==l&&l&&(0,c.formValidation)(!1,r)}
  `})(e)}
    }
    .jimu-numeric-input-handler-wrap {
      width: 1.25rem;
      display: none;
      flex-direction: column;
      align-content: stretch;
      margin-left: -1px;
      border-left: 1px solid ${a.border.color};
      position: absolute;
      top: 1px;
      bottom: 1px;
      right: 1px;
    }
    &.show-handlers {
      .jimu-numeric-input-handler-wrap {
        display: flex;
      }
    }
    .jimu-numeric-input-handler {
      ${Qr({theme:r,size:"sm"})}
      flex: 1;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      .jimu-icon {
        margin: 0;
      }
    }
    .jimu-numeric-input-handler-up,
    .jimu-numeric-input-handler-down {
      border: 0;
    }
    .jimu-numeric-input-handler-up {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
    .jimu-numeric-input-handler-down {
      margin-top: -1px;
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      border-top: 1px solid ${null===(n=null==a?void 0:a.border)||void 0===n?void 0:n.color};
    }
  `};const Ei=e=>{var t,o,n,r;const a=e.bsSize||e.size||"default",s=e.theme,l=null===(t=null==s?void 0:s.components)||void 0===t?void 0:t.input,d=null===(o=null==s?void 0:s.components)||void 0===o?void 0:o.select,u=null==e?void 0:e.buttonProps,p=null===(r=null===(n=null==d?void 0:d.button)||void 0===n?void 0:n.sizes[a])||void 0===r?void 0:r.paddingX;return l&&i.css`
    width: 100%;
    ${!(null==u?void 0:u.type)&&i.css`
      > .dropdown-button {
        &, &:hover {
          ${function(e,t){const o=e.sizes[t];return`\n    height: ${"auto"!==o.height?o.height:function(e,t){const o=i.polished.math(`\n    ${e.fontSize} * ${e.lineHeight} +\n    ${e.paddingY} * 2`);return"0"===t.toString()?o:`calc(${o} + ${t} * 2)`}(o,e.border.width)};\n    padding: ${o.paddingY} ${o.paddingX};\n    font-size: ${o.fontSize};\n    border-radius: ${o.borderRadius};\n  `}(l,a)}
          ${(0,c.getBoxStyles)(l)}
          background-clip: padding-box;
          transition: ${l.transition};
          text-decoration: none;
        }

        &:not(:disabled):not(.disabled):active,
        &[aria-expanded="true"]{
          color: ${l.color};
          background-color: ${l.focus.bg};
          border-color: ${l.focus.borderColor};
          text-decoration: none;
          box-shadow: ${l.boxShadow}, ${l.focus.boxShadow};
        }

        /* Placeholder */
        .placeholder {
          color: ${l.placeHolderColor};
          opacity: 1;
        }

        /* Disabled and read-only inputs */
        &:disabled,
        &[readonly] {
          color: ${l.disabled.color};
          border-color: ${l.disabled.borderColor};
          background-color: ${l.disabled.bg};
          opacity: 1;
        }
      }
    `}
    > .dropdown-button {
      text-align: start;
      &, &:hover {
        padding-left: ${p};
        padding-right: ${p};
      }
    }
  `};function ki(e,t){const o=e.sizes[t];return`\n    height: ${"auto"!==o.height?o.height:function(e,t){const o=i.polished.math(`\n    ${e.fontSize} * ${e.lineHeight} +\n    ${e.paddingY} * 2`);return"0"===t.toString()?o:`calc(${o} + ${t} * 2)`}(o,e.border.width)};\n    padding: ${o.paddingY} ${o.paddingX};\n    font-size: ${o.fontSize};\n    line-height: ${o.lineHeight};\n    border-radius: ${o.borderRadius};\n  `}const Ci=e=>{var t,o;const n=e.bsSize||e.size,r=e.theme,a=null===(t=null==r?void 0:r.components)||void 0===t?void 0:t.input,s=null==e?void 0:e.buttonProps;return i.css`
    width: 100%;
    > .dropdown{
      > .dropdown-button {
        text-align: start;
      }
    }
    ${null!==(o=null==s?void 0:s.type)&&void 0!==o?o:i.css`
    /* Button overides */
      > .dropdown{
        > .dropdown-button {
          &,
          &:hover {
            color: ${a.color};
            background-color: ${a.bg};
            background-clip: padding-box;
            border: ${a.border.width} solid ${a.border.color};
            box-shadow: ${a.boxShadow};
            transition: ${a.transition};
            text-decoration: none;
            ${!n&&ki(a,"default")}
            ${"sm"===n&&ki(a,"sm")}
            ${"lg"===n&&ki(a,"lg")}
          }

          /* Placeholder */
          .placeholder {
            color: ${a.placeHolderColor};
            opacity: 1;
          }

          /* Disabled and read-only inputs */
          &:disabled,
          &[readonly] {
            color: ${a.disabled.color};
            border-color: ${a.disabled.borderColor};
            background-color: ${a.disabled.bg};
            opacity: 1;
          }
        }
      }
    `}

    &.advanced-select-menu{
      max-width: 100vw;
      min-width: 200px;

      .output-warning-container{
        width: 240px;

        .output-warning-color{
          color: ${r.colors.palette.info[600]};
        }
        .select-item{
          padding: 0.5rem 0;
          border-bottom: 1px solid ${r.colors.palette.light[600]};

          &.active{
            color: inherit;
            background: inherit;
          }
          .select-item-placeholder{
            width: 1.25rem;
          }
        }
      }

      .search-container{
        padding: 0.25rem 0.5rem 0 0.5rem;
      }

      .list-container{
        max-height: 200px;
        margin-top: 0.25rem;
        margin-bottom: 0.25rem;
        overflow-y: auto;

        .no-data-label{
          text-align: left;
          margin-top: 0.25rem;
          margin-bottom: 0.25rem;
          margin-left: 0.5rem;
          font-style: italic;
          color: ${r.colors.palette.dark[600]};
        }

        .jimu-dropdown-item{
          padding: 0.25rem 0.5rem;
          min-height: ${i.polished.rem(26)};
        }

        .select-item{
          &.multiple-item{
            padding-left: 0.5rem;
          }

          .select-item-placeholder{
            margin-right: 0.5rem;
            width: 0.75rem;
          }
        }

        .load-more-btn{
          padding-left: 0.5rem;
          padding-bottom: 0;
          border: none;
        }
      }

      .loading-container{
        position: relative;
        margin: 0.25rem 0.5rem;
        height: 20px;
        width: 20px;
      }

      .multiple-select-tool{
        margin: 0 0.5rem;
        padding: 0.25rem 0;
        display: flex;
        border-top: 1px solid ${r.colors.palette.light[600]};
      }
    }
  `};function Ni(e,t,o,n){return`\n    padding-top: calc(${t} + ${n});\n    padding-bottom: calc(${t} + ${n});\n    font-size: ${e};\n    line-height: ${o};\n  `}const Ti=e=>{var t,o,n;const r=null!==(t=e.size)&&void 0!==t?t:"default",a=e.check,s=null!==(o=e.centric)&&void 0!==o&&o,l=e.theme,c=null===(n=null==l?void 0:l.components)||void 0===n?void 0:n.input;return c&&i.css`
      &.col-form-label {
        margin-bottom: 0;
        ${Ni("inherit",c.sizes.default.paddingY,c.sizes.default.lineHeight,c.border.width)}
      }

      ${"lg"===r&&Ni(c.sizes.lg.fontSize,c.sizes.lg.paddingY,c.sizes.lg.lineHeight,c.border.width)}

      ${"sm"===r&&Ni(c.sizes.sm.fontSize,c.sizes.sm.paddingY,c.sizes.sm.lineHeight,c.border.width)}

    ${a&&"\n      margin-bottom: 0;\n    "}
    ${s&&"\n      display: inline-flex;\n      align-items: center;\n      vertical-align: middle;\n    "}
    `},Ri=e=>{var t,o;const n=e.theme,r=null===(t=null==n?void 0:n.components)||void 0===t?void 0:t.input,a=r.checkbox;return r&&a&&i.css`
    display: inline-flex;
    flex-shrink: 0;
    position: relative;
    width: ${a.size};
    height: ${a.size};
    background: ${a.bg};
    border: ${a.border.width} solid ${a.border.color};
    padding: 0;
    transition: background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
    box-shadow: none;
    border-radius: ${a.borderRadius};
    &:hover {
      ${a.hover&&i.css`
        border-color: ${a.hover.borderColor};
      `}
    }
    svg.jimu-icon {
      width: ${a.iconSize};
      height: ${a.iconSize};
      margin: ${i.polished.math(`\n        (${a.size} - ${a.iconSize} - ${a.border.width} * 2) * 0.5`)};
    }
    &,
    &.disabled {
      &:not(.checked) {
        color: transparent;
      }
    }
    &.checked, &.indeterminate {
      color: ${a.checked.color};
      background: ${a.checked.bg};
      border-color: ${a.checked.bg};
      /* &:hover {
        border-color: ${a.focusColor};
        background: ${a.focusColor};
      } */
      /* &.focus {
        padding: 1px;
        border: 1px solid ${null===(o=null==n?void 0:n.colors)||void 0===o?void 0:o.white};
      } */
    }
    /* &.focus {
      box-shadow: 0 0 0 1px ${a.focusColor};
    } */
    &.disabled {
      &,
      &.checked, &.indeterminate {
        background: ${r.disabled.bg};
        border-color: ${r.disabled.borderColor};
        color: ${r.disabled.color};
        pointer-events: none;
      }
    }
    input {
      width: 100% !important;
      height: 100% !important;
      top: 0 !important;
      left: 0 !important;
      margin: 0 !important;
      opacity: 0 !important;
      padding: 0 !important;
      position: absolute !important;
      cursor: pointer;
    }
  `},ji=e=>{var t,o,n;const r=e.theme,a=null===(t=null==r?void 0:r.components)||void 0===t?void 0:t.input,s=a&&a.radio;return a&&s&&i.css`
    display: inline-flex;
    flex-shrink: 0;
    position: relative;
    width: ${s.size};
    height: ${s.size};
    background: ${s.bg};
    border: ${s.border.width} solid ${s.border.color};
    padding: 0;
    border-radius: ${s.borderRadius};
    transition: background 0.2s ease, border 0.2s ease, box-shadow 0.2s ease;
    &:hover {
      ${s.hover&&i.css`
        border-color: ${s.hover.borderColor};
      `}
    }
    input {
      width: 100% !important;
      height: 100% !important;
      top: 0 !important;
      left: 0 !important;
      margin: 0 !important;
      opacity: 0 !important;
      padding: 0 !important;
      position: absolute !important;
      cursor: inherit;
      + span {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 0;
        background: ${s.checked.color};
        margin: ${i.polished.math(` (${s.size} - ${s.border.width} * 2) * 0.5 `)};
        border-radius: 50%;
        transition: all 0.1s ease-out;
      }
    }
    &.checked {
      border-color: ${s.checked.color};
      > span {
        width: ${s.iconSize};
        height: ${s.iconSize};
        margin: ${i.polished.math(` (${s.size} - ${s.iconSize} - ${s.border.width} * 2) * 0.5 `)};
      }
      /* &:hover {
        border-color: ${s.focusColor};
        > span {
          background: ${s.focusColor};
        }
      } */
      /* &.focus {
        box-shadow: inset 0 0 0 1px ${null===(o=null==s?void 0:s.checked)||void 0===o?void 0:o.color}, 0 0 0 1px ${s.focusColor};
        border: 1px solid ${null===(n=null==r?void 0:r.colors)||void 0===n?void 0:n.white};
        > span {
          top: ${i.polished.math(`${s.border.width} - 1px`)};
          left: ${i.polished.math(`${s.border.width} - 1px`)};
        }
      } */
    }
    /* &.focus {
      box-shadow: 0 0 0 1px ${s.focusColor};
    } */
    &.disabled {
      background: ${a.disabled.bg};
      border-color: ${a.disabled.borderColor};
      pointer-events: none;
      input {
        + span {
          background: ${a.disabled.borderColor};
        }
      }
    }
  `},Pi=e=>{var t,o,n,r,a,s,l,c,d,u;const p=e.theme,h=null===(t=null==p?void 0:p.components)||void 0===t?void 0:t.input,f=h&&h.switch,g="auto"===f.slider.height?i.polished.math(`${f.height} - (${null!==(n=null===(o=f.slider)||void 0===o?void 0:o.gap)&&void 0!==n?n:0} + ${null!==(a=null===(r=null==f?void 0:f.border)||void 0===r?void 0:r.width)&&void 0!==a?a:0}) * 2`):f.slider.height,m="auto"===f.slider.width?g:f.slider.width;return h&&f&&i.css`
    display: inline-flex;
    flex-shrink: 0;
    position: relative;
    width: ${f.width};
    height: ${f.height};
    background: ${f.bg};
    border: ${f.border&&i.css`
      ${f.border.width} solid ${f.border.color};
    `};
    border-radius: ${f.borderRadius};
    padding: ${f.slider.gap};
    cursor: pointer;
    transition: box-shadow 0.2s ease;
    .switch-slider {
      display: block;
      height: ${g};
      width: ${m};
      border-radius: 50%;
      background: ${f.slider.color};
      transition: all ease 0.15s;
    }
    &.checked {
      background: ${f.checkedBg};
      border-color: ${f.checkedBorder&&i.css`
        ${f.checkedBorder.color};
      `};
      .switch-slider {
        background: ${f.slider.checkedColor};
        margin-left: ${i.polished.math(`\n          ${f.width} - (${null!==(l=null===(s=f.slider)||void 0===s?void 0:s.gap)&&void 0!==l?l:0} + ${null!==(d=null===(c=null==f?void 0:f.border)||void 0===c?void 0:c.width)&&void 0!==d?d:0}) * 2 - ${m}\n        `)};
      }
      &.focus {
        border: 1px solid ${null===(u=null==p?void 0:p.colors)||void 0===u?void 0:u.white};
        box-shadow: 0 0 0 1px ${f.focusColor};
      }
    }
    &.disabled {
      background: ${h.disabled.bg};
      border-color: ${h.disabled.borderColor};
      &.checked {
        border-color: ${h.disabled.bg};
      }
      .switch-slider {
        background: ${f.slider.disabledColor};
      }
      pointer-events: none;
    }
    /* &.focus {
      box-shadow: 0 0 0 1px ${f.focusColor};
    } */
    input {
      width: 100% !important;
      height: 100% !important;
      top: 0 !important;
      left: 0 !important;
      margin: 0 !important;
      opacity: 0 !important;
      padding: 0 !important;
      position: absolute !important;
      cursor: inherit;
    }
  `},$i=e=>{const t=e.theme;return[fi(e),i.css`
    min-width: unset;
    &.dropdown-menu-inline {
      position: static !important;
      float: none;
      background: transparent;
      border: 0;
      box-shadow: none;
      font-size: large;
      display: flex;
      padding-left: 0;
      margin: 0;
      flex-direction: column;
      &.indent-left {
        > .nav-item {
          > .nav-link {
            padding-left: ${i.polished.rem(30)};
          }
        }
      }
      &.indent-right {
        > .nav-item {
          > .nav-link {
            padding-right: ${i.polished.rem(30)};
          }
        }
      }
    }

    &:not(.dropdown-menu-inline) {
      .jimu-link {
        ${gi(t)}
      }
    }

    &.text-left {
      .nav-item {
        > .nav-link {
          justify-content: flex-start;
        }
      }
    }

    &.text-right {
      .nav-item {
        > .nav-link {
          justify-content: flex-end;
        }
      }
    }
  `]},Mi=()=>i.css`
    .tab-nav {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      > .nav-item > .nav-link {
        border-bottom-left-radius: 0 !important;
        border-bottom-right-radius: 0 !important;
        .tab-title {
          user-select: none;
          margin: auto;
        }
      }
      &.nav-pills {
        > .nav-item > .nav-link {
          border-radius: 0.125rem !important;
        }
      }
      .closeable{
      & .jimu-nav-link-wrapper{
        display: flex;

        & .tab-title{
          width: calc(100% - 26px);
          display: inline-block;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
    }

    .tab-pane {
      display: none;
      &.active {
        display: block;
      }
    }
  `,Ii=e=>{var t;const o=e.color||"primary",n=e.theme,r=null===(t=null==n?void 0:n.components)||void 0===t?void 0:t.alert,a=(e,t=0)=>{const o=t>0?n.colors.black:n.colors.white;return t=Math.abs(t),i.polished.mix(.08*t,o,e)};return r&&i.css`
    position: relative;
    padding: ${r.paddingY} ${r.paddingX};
    margin-bottom: ${r.marginBottom};
    border: ${r.borderWidth} solid transparent;
    border-radius: ${r.borderRadius};

    .alert-heading {
      color: inherit;
    }

    .alert-link {
      font-weight: ${r.linkFontWeight};
    }

    &.alert-dismissible {
      padding-right: ${2*+i.polished.getValueAndUnit(r.paddingX)[0]}rem; /*($close-font-size + $alert-padding-x * 2);*/

      .close {
        position: absolute;
        top: 0;
        right: 0;
        padding: ${r.paddingY} ${r.paddingX};
        color: inherit;
      }
    }

    ${`&.alert-${o} {\n        ${function(e,t,o){return`\n    color: ${o};\n    background: ${e};\n    border-color: ${t};\n\n    hr {\n      border-top-color: ${i.polished.darken(.05,t)};\n    }\n\n    .alert-link {\n      color: ${i.polished.darken(.1,o)};\n    }\n  `}(a(n.colors[o],parseFloat(r.bgLevel)),a(n.colors[o],parseFloat(r.borderLevel)),a(n.colors[o],parseFloat(r.colorLevel)))}\n      }`}
  `},Di=e=>{var t,o,n,r;const a=e.horizontal,s=e.button,l=e.active,d=e.theme,u=null===(t=null==d?void 0:d.components)||void 0===t?void 0:t.card,{root:p,spacer:h,divider:f,headerBg:g,checkMark:m}=u,v=`calc(${null===(o=null==p?void 0:p.default)||void 0===o?void 0:o.borderRadius} - ${null===(r=null===(n=null==p?void 0:p.default)||void 0===n?void 0:n.border)||void 0===r?void 0:r.width})`;return u&&i.css`
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-clip: border-box;
    ${(0,c.getBoxStyles)(null==p?void 0:p.default)};

    > hr {
      margin-right: 0;
      margin-left: 0;
    }

    .card-body {
      flex: 1 1 auto;
      padding: ${h.x};
    }

    .card-header {
      padding: ${h.y} ${h.x};
      margin-bottom: 0;
      background-color: ${g};
      border-bottom: ${f.width} solid ${f.color};
      border-radius: ${v} ${v} 0 0;
    }

    .card-footer {
      padding: ${h.y} 0;
      margin: 0 ${h.x};
      background-color: ${g};
      border-top: ${f.width} solid ${f.color};
      border-radius: 0 0 ${v} ${v};
    }

    /* Horizontal */

    ${a&&i.css`
      &.card-horizontal {
        flex-direction: row;
      }
    `}

    /* Button Card */

    ${s&&i.css`
      &.card-button {
        cursor: pointer;
        transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
        &:hover {
          ${(0,c.getBoxStyles)(null==p?void 0:p.hover)};
        }
      }
    `}

    /* Active Card */

    ${l&&i.css`
      &.card-active {
        position: relative;
        ${(0,c.getBoxStyles)(null==p?void 0:p.active)};
        .card-checkmark {
          position: absolute;
          right: 0;
          z-index: 1;
          padding: 0.25rem;
          line-height: 1;
          ${(0,c.getBoxStyles)(m)}
        }
      }
    `}
  `},Ai=e=>{var t;const o=e.row,n=e.check,r=e.inline,a=e.theme,s=null===(t=null==a?void 0:a.components)||void 0===t?void 0:t.form;return s&&i.css`
    ${o?'\n      display: flex;\n      flex-wrap: wrap;\n      margin-right: -5px;\n      margin-left: -5px;\n\n      > .col,\n      > [class*="col-"] {\n        padding-right: 5px;\n        padding-left: 5px;\n      }\n    ':n?"":`\n      margin-bottom: ${s.group.marginBottom};\n    `}

    ${r&&`\n      display: inline-flex;\n      align-items: center;\n      padding-left: 0;\n      margin-right: ${s.check.inline.marginX};\n\n      .form-check-input {\n        position: static;\n        margin-top: 0;\n        margin-right: ${s.check.inline.inputMarginX};\n        margin-left: 0;\n      }\n    `}
  `},Li=e=>{var t;const o=e.theme,n=null===(t=null==o?void 0:o.components)||void 0===t?void 0:t.form;return n&&i.css`
    display: block;
    margin-top: ${n.helpText.marginTop};
    font-size: 0.8125rem;
  `},zi=e=>{var t,o,n,r,a;const s=e.theme,l=e.valid,c=void 0!==l,d=null===(t=null==s?void 0:s.components)||void 0===t?void 0:t.form;return d&&i.css`
    display: ${c?"block":"none"};
    width: 100%;
    margin-top: ${d.helpText&&d.helpText.marginTop};
    font-size: ${d.helpText&&d.helpText.fontSize};
    ${c&&i.css`
      color: ${l&&(null!==(n=null===(o=s.colors)||void 0===o?void 0:o.success)&&void 0!==n?n:"green")};
      color: ${!l&&(null!==(a=null===(r=s.colors)||void 0===r?void 0:r.danger)&&void 0!==a?a:"red")};
    `}
  `},_i=()=>i.css`
    &.img-fluid {
      max-width: 100%;
      height: auto;
    }
    img {
      width: 100%;
    }
    &.img-circle {
      .img-wrapper {
        position: relative;
        overflow: hidden;
        border-radius: 50%;
        img {
          position: absolute;
          left: 50%;
          top: 50%;
          height: 100%;
          width: auto;
          max-width: none;
          transform: translate(-50%,-50%);
        }
      }
    }

    &.img-covered {
      .img-wrapper {
        background-size: cover;
        background-position: 50% 50%;
      }
    }
  `,Bi=e=>{var t,o,n;const r=e.size,a=e.theme,s=null===(t=null==a?void 0:a.components)||void 0===t?void 0:t.input,l=null===(o=null==a?void 0:a.components)||void 0===o?void 0:o.inputGroup;return s&&l&&i.css`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    width: 100%;

    > .jimu-input {
      position: relative;
      flex: 1 1 auto;
      width: 1%;
      margin-bottom: 0;

      + .jimu-input {
        margin-left: -${s.border.width};
      }
    }

    > .jimu-input:focus {
      z-index: 3;
    }

    > .jimu-input {
      &:not(:last-child) {
        &,
        .jimu-numeric-input-input {
          ${i.polished.borderRadius("right","0")};
        }
      }
      & {/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */}
      &:not(:first-child) /* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */{
        &,
        .jimu-numeric-input-input {
          ${i.polished.borderRadius("left","0")};
        }
      }
    }

    > .jimu-btn {
      &:disabled {
        // use the same colors from Input for the disabled state
        background: ${null==s?void 0:s.bg};
        border-color: ${null===(n=null==s?void 0:s.border)||void 0===n?void 0:n.color};
      }
    }

    .input-group-prepend,
    .input-group-append {
      display: flex;

      .btn {
        position: relative;
        z-index: 2;
      }

      .btn + .btn,
      .btn + .input-group-text,
      .input-group-text + .input-group-text,
      .input-group-text + .btn {
        margin-left: -${s.border.width};
      }
    }

    .input-group-text {
      display: flex;
      align-items: center;
      padding: ${s.sizes.default.paddingY} ${s.sizes.default.paddingX};
      margin-bottom: 0;
      font-size: ${a.typography.sizes.body1};
      font-weight: ${a.typography.weights.medium};
      line-height: ${s.sizes.default.lineHeight};
      color: ${l.addon.color};
      text-align: center;
      white-space: nowrap;
      background-color: ${l.addon.bg};
      border: ${s.border.width} solid ${l.addon.borderColor};
      border-radius: ${s.sizes.default.borderRadius};

      input[type="radio"],
      input[type="checkbox"] {
        margin-top: 0;
      }
    }

    /* Sizing */

    ${"lg"===r&&i.css`
      > .jimu-input,
      > .input-group-prepend > .input-group-text,
      > .input-group-append > .input-group-text,
      > .input-group-prepend > .btn,
      > .input-group-append > .btn {
        height: ${s.sizes.lg.height};
        padding: ${s.sizes.lg.paddingY} ${s.sizes.lg.paddingX};
        font-size: ${s.sizes.lg.fontSize};
        line-height: ${s.sizes.lg.height};
        border-radius: ${s.sizes.lg.borderRadius};
      }
    `}

    ${"sm"===r&&i.css`
      > .jimu-input,
      > .input-group-prepend > .input-group-text,
      > .input-group-append > .input-group-text,
      > .input-group-prepend > .btn,
      > .input-group-append > .btn {
        height: ${s.sizes.sm.height};
        padding: ${s.sizes.sm.paddingY} ${s.sizes.sm.paddingX};
        font-size: ${s.sizes.sm.fontSize};
        line-height: ${s.sizes.sm.height};
        border-radius: ${s.sizes.sm.borderRadius};
      }
    `}

    .input-group-prepend > .btn,
    .input-group-prepend > .input-group-text,
    .input-group-append:not(:last-child) > .btn,
    .input-group-append:not(:last-child) > .input-group-text,
    .input-group-append:last-child > .btn:not(:last-child):not(.dropdown-toggle),
    .input-group-append:last-child > .input-group-text:not(:last-child) {
      ${i.polished.borderRadius("right","0")};
    }
    & {/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */}
    .input-group-append > .btn,
    .input-group-append > .input-group-text,
    .input-group-prepend:not(:first-child) > .btn,
    .input-group-prepend:not(:first-child) > .input-group-text,
    .input-group-prepend:first-child > .btn:not(:first-child),
    .input-group-prepend:first-child > .input-group-text:not(:first-child) /* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */
    {
      ${i.polished.borderRadius("left","0")};
    }
  `};function Fi(e,t){const o=e.sizes[t];return`\n    height: ${"auto"!==o.height?o.height:function(e,t){const o=i.polished.math(`\n    ${e.fontSize} * ${e.lineHeight} +\n    ${e.paddingY} * 2`);return"0"===t.toString()?o:`calc(${o} + ${t} * 2)`}(o,e.border.width)};\n    padding: ${o.paddingY} ${o.paddingX};\n    font-size: ${o.fontSize};\n    line-height: ${o.lineHeight};\n    border-radius: ${o.borderRadius};\n  `}const Ui=e=>{var t,o;const n=e.bsSize||e.size,r=e.theme,a=null===(t=null==r?void 0:r.components)||void 0===t?void 0:t.input,s=null==e?void 0:e.buttonProps;return i.css`
    width: 100%;
    > .dropdown{
      > .dropdown-button {
        text-align: start;
      }
    }
    ${null!==(o=null==s?void 0:s.type)&&void 0!==o?o:i.css`
    /* Button overides */
      > .dropdown{
        > .dropdown-button {
          &,
          &:hover {
            color: ${a.color};
            background-color: ${a.bg};
            background-clip: padding-box;
            border: ${a.border.width} solid ${a.border.color};
            box-shadow: ${a.boxShadow};
            transition: ${a.transition};
            text-decoration: none;
            ${!n&&Fi(a,"default")}
            ${"sm"===n&&Fi(a,"sm")}
            ${"lg"===n&&Fi(a,"lg")}
          }

          /* Placeholder */
          .placeholder {
            color: ${a.placeHolderColor};
            opacity: 1;
          }

          /* Disabled and read-only inputs */
          &:disabled,
          &[readonly] {
            color: ${a.disabled.color};
            border-color: ${a.disabled.borderColor};
            background-color: ${a.disabled.bg};
            opacity: 1;
          }
        }
      }
    `}
  `},Hi=e=>{const t=e.flush;return i.css`
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;

    ${t&&i.css`
      .list-group-item {
        border-right: 0;
        border-left: 0;
        border-radius: 0;
      }

      &:first-of-type {
        .list-group-item:first-of-type {
          border-top: 0;
        }
      }

      &:last-of-type {
        .list-group-item:last-of-type {
          border-bottom: 0;
        }
      }
    `}

  `},Wi=e=>{var t;const o=e.action,n=e.color,r=e.theme,a=null===(t=null==r?void 0:r.components)||void 0===t?void 0:t.listGroup,s=(e,t=0)=>{const o=t>0?r.colors.black:r.colors.white;return t=Math.abs(t),i.polished.mix(.08*t,o,e)};return a&&i.css`
    ${o&&i.css`
      width: 100%;
      color: ${a.action.color};
      text-align: inherit;

      ${(0,c.hoverFocus)(`\n        color: ${a.action.hover.color};\n        text-decoration: none;\n        background-color: ${a.hover.bg};\n      `)}

      &:active {
        color: ${a.action.active.color};
        background-color: ${a.action.active.bg};
      }
    `}

    position: relative;
    display: block;
    padding: ${a.item.paddingY} ${a.item.paddingX};
    margin-bottom: -${a.border.width};
    background-color: ${a.bg};
    border: ${a.border.width} solid ${a.border.color};

    &:first-of-type {
      ${i.polished.borderRadius("top",a.borderRadius)};
    }

    &:last-of-type {
      margin-bottom: 0;
      ${i.polished.borderRadius("bottom",a.borderRadius)};
    }

    ${(0,c.hoverFocus)("\n      z-index: 1;\n      text-decoration: none;\n    ")}

    &.disabled,
    &:disabled {
      color: ${a.disabled.color};
      background-color: ${a.disabled.bg};
    }

    &.active {
      z-index: 2;
      color: ${a.active.color};
      background-color: ${a.active.bg};
      border-color: ${a.active.borderColor};
    }

    ${n&&function(e,t,o){return i.css`
    color: ${t};
    background-color: ${e};

    &.list-group-item-action {
      ${(0,c.hoverFocus)(`\n        color: ${t};\n        background-color: ${i.polished.darken(.05,e)};\n      `)}

      &.active {
        color: ${o};
        background-color: ${t};
        border-color: ${t};
      }
    }
  `}(s(r.colors[n],-9),s(r.colors[n],6),r.colors.white)}

  `},Vi=e=>{var t,o;const n=e.theme,r=null===(t=null==n?void 0:n.components)||void 0===t?void 0:t.modal;return r&&i.css`
    &.modal-dialog {
      position: relative;
      width: auto;
      margin: ${r.dialog.margin};
      pointer-events: none;

      .modal.fade & {
        transition:${r.transition};
        transform: translate(0, -25%);
      }
      .modal.show & {
        transform: translate(0, 0);
      }
    }

    &.modal-dialog-centered {
      display: flex;
      align-items: center;
      min-height: calc(100% - (${r.dialog.margin} * 2));
      &::before {
        display: block;
        height: calc(100vh - (${r.dialog.margin} * 2));
        content: "";
      }
    }

    .modal-content {
      position: relative;
      display: flex;
      flex-direction: column;
      width: 100%;
      pointer-events: auto;
      background-color: ${r.content.bg};
      background-clip: padding-box;
      border: ${r.content.border.width} solid ${r.content.border.color};
      border-radius: ${r.content.borderRadius};
      box-shadow: ${r.content.shadow};
      outline: 0;
    }

    .modal-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: ${r.header.paddingY} ${r.header.paddingX};
      border-bottom: ${r.header.border.width} solid ${r.header.border.color};
      ${i.polished.borderRadius("top",null!==(o=r.content.borderRadius)&&void 0!==o?o:0)};

      .close {
        padding: ${r.header.paddingY} ${r.header.paddingX};
        margin: -${r.header.paddingY} -${r.header.paddingX} -${r.header.paddingY} auto;
      }
    }

    .modal-title {
      flex: 1;
      margin-bottom: 0;
      line-height: ${r.title.lineHeight};
    }

    .modal-body {
      position: relative;
      flex: 1 1 auto;
      padding: ${r.innerPadding};
    }

    .modal-footer {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: ${r.innerPadding};
      border-top: ${r.footer.border.width} solid ${r.footer.border.color};

      > * + * { margin-left: .5rem; }
      > .btn {
        min-width: ${r.footer.button.minWidth};
      }
    }

    .modal-scrollbar-measure {
      position: absolute;
      top: -9999px;
      width: 50px;
      height: 50px;
      overflow: scroll;
    }

    /* TODO: use break points from config */
    @media (min-width: 576px) {
      &.modal-dialog {
        max-width: ${r.sizes.md};
        margin: ${r.dialog.marginYSmUp} auto;
      }
      &.modal-dialog-centered {
        min-height: calc(100% - (${r.dialog.marginYSmUp} * 2));
      }
      &.modal-dialog-centered::before {
        height: calc(100vh - (${r.dialog.marginYSmUp} * 2));
      }
      .modal-content {
        box-shadow: ${r.content.shadowSmUp};
      }
    }

  `};function Gi(e,t,o){var n;if(!e)return;const r=null!==(n=o.colors)&&void 0!==n?n:{white:"#fff",black:"#000"},a=`data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='${t?i.polished.rgba(r.white,.5):i.polished.rgba(r.black,.5)}' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e`;return i.css`
    .navbar-brand {
      color: ${e.color};

      ${(0,c.hoverFocus)(`\n        color: ${e.activeColor};\n      `)}
    }

    &.navbar { /* be able to override all nav types under navbar */
      .navbar-nav {
        .nav-link {
          color: ${e.color};

          ${(0,c.hoverFocus)(`\n            color: ${e.hoverColor};\n          `)}

          &.disabled {
            color: ${e.disabledColor};
          }
        }

        .show > .nav-link,
        .active > .nav-link,
        .nav-link.show,
        .nav-link.active {
          color: ${e.activeColor};
        }
      }
    }

    .navbar-toggler {
      color: ${e.color};
      border-color:${e.toggler.borderColor};
    }

    .navbar-toggler-icon {
      background-image: url("${a}");
    }

    .navbar-text {
      color: ${e.color};
      a {
        color: ${e.activeColor};

        ${(0,c.hoverFocus)(`\n          color: ${e.activeColor};\n        `)}
      }
    }
  `}const qi=e=>{const t=void 0===e.color||["","warning","white","light"].includes(e.color),o=void 0===e.light?t:e.light,n=void 0===e.dark?!t:e.dark,r=e.theme,a=r&&r.components.navbar;let s=i.CONSTANTS.BREAK_POINTS&&i.CONSTANTS.BREAK_POINTS[0];return isNaN(s)||(s+=1),i.css`
    font-size: ${a.fontSize};
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: ${a.paddingY} ${a.paddingX};

    > .container,
    > .container-fluid {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
    }

    /* Navbar brand */

    .navbar-brand {
      display: inline-block;
      padding-top: ${a.brand.height};
      padding-bottom: ${a.brand.paddingY};
      margin-right: ${a.paddingX};
      font-size: ${a.brand.fontSize};
      line-height: inherit;
      white-space: nowrap;

      ${(0,c.hoverFocus)("\n        text-decoration: none;\n      ")}
    }

    /* Navbar nav */

    .navbar-nav {
      display: flex;
      flex-direction: row;
      padding-left: 0;
      margin-bottom: 0;
      list-style: none;

      .nav-link {
        /* padding-right: 0;
        padding-left: 0; */
      }

      .dropdown-menu {
        position: static;
        float: none;
      }
    }

    /* Navbar text */

    .navbar-text {
      display: inline-block;
    }

    /* Responsive navbar */

    .navbar-collapse {
      flex-basis: 100%;
      flex-grow: 1;
      align-items: center;
    }

    .navbar-toggler {
      padding: ${a.toggler.paddingY} ${a.toggler.paddingX};
      font-size: ${a.toggler.fontSize};
      line-height: 1;
      background-color: transparent;
      border: ${r.border.width} solid transparent;
      border-radius: ${a.toggler.borderRadius};

      ${(0,c.hoverFocus)("\n        text-decoration: none;\n      ")}

      &:not(:disabled):not(.disabled) {
        cursor: pointer;
      }
    }

    .navbar-toggler-icon {
      display: inline-block;
      width: 1.5em;
      height: 1.5em;
      vertical-align: middle;
      content: "";
      background: no-repeat center center;
      background-size: 100% 100%;
    }


    &.navbar-expand-sm,
    &.navbar-expand-md,
    &.navbar-expand-lg {
      ${s&&i.css`
        @media (max-width: ${s}px) {
          > .container,
          > .container-fluid {
            padding-right: 0;
            padding-left: 0;
          }
        }
        @media (min-width: ${s}px) {
          flex-flow: row nowrap;
          justify-content: flex-start;

          .navbar-nav {
            .dropdown-menu {
              position: absolute;
            }
          }

          > .container,
          > .container-fluid {
            flex-wrap: nowrap;
          }

          .navbar-collapse {
            display: flex !important;
            flex-basis: auto;
          }

          .navbar-toggler {
            display: none;
          }
        }
      `}
    }

    /* Navbar themes */

    ${o&&Gi(a.themes.light,!1,r)}
    ${n&&Gi(a.themes.dark,!0,r)}
  `};function Yi(e){var t,o,n,r;return e&&i.css`
    .page-link {
      padding: ${null===(t=e.button)||void 0===t?void 0:t.paddingY} ${null===(o=e.button)||void 0===o?void 0:o.paddingX};
      min-width: ${null===(n=e.button)||void 0===n?void 0:n.minWidth};
      line-height: ${null===(r=e.button)||void 0===r?void 0:r.lineHeight};
    }
  `}const Zi=e=>{var t;const o=e.size,n=e.theme,r=null===(t=null==n?void 0:n.components)||void 0===t?void 0:t.pagination,{sizes:a,variants:s}=r;return r&&i.css`
    .pagination {
      display: flex;
      flex-flow: row wrap;
      margin-bottom: 0;
      padding-left: 0;
      list-style: none;
      > .page-item {
        margin-right: ${r.gutter};
        .page-link {
          margin: 0;
          text-align: center;
        }
        &:last-of-type {
          margin-right: 0;
        }
      }
    }
    .page-link {
      position: relative;
      display: block;
    }

    ${function(e){var t;const{root:o,button:n}=e;return i.css`
    ${(0,c.getBoxStyles)(o.default)}
    .page-link {
      margin-left: -${null===(t=n.default.border)||void 0===t?void 0:t.width};
      ${(0,c.getBoxStyles)(n.default)}
      &:hover {
        ${(0,c.getBoxStyles)(n.hover)}
        text-decoration: none;
        z-index: 2;
      }
      &:focus {
        z-index: 2;
      }
      &:not(:disabled):not(.disabled) {
        cursor: pointer;
      }
    }

    .page-item {
      &.active .page-link {
        ${(0,c.getBoxStyles)(n.active)}
        z-index: 1;
      }

      &.disabled .page-link {
        ${(0,c.getBoxStyles)(n.disabled)}
        pointer-events: none;
        cursor: auto;
      }
    }
  `}(s.default)}

    /* Sizing */

    ${Yi(a.default)}

    ${"sm"===o&&Yi(a.sm)}

    ${"lg"===o&&Yi(a.lg)}
  `},Ki=e=>{var t,o,n,r,a;const s=e.theme,l=null===(t=null==s?void 0:s.components)||void 0===t?void 0:t.progress,c=null!==(o=e.color)&&void 0!==o?o:"primary",d=null!==(n=e.type)&&void 0!==n?n:"linear",u=null!==(r=e.showProgress)&&void 0!==r&&r,p=null!==(a=null==s?void 0:s.colors[c])&&void 0!==a?a:c;return l&&"linear"===d?i.css`
    display: flex;
    overflow: hidden;
    font-size: ${l.fontSize};
    align-items: center;
    justify-content: center;
    .progress-bar-track {
      height: 2px;
      width: 100%;
      background-color: ${l.bg};
      border-radius: ${l.borderRadius};
    }
    .progress-bar {
      height: 100%;
      background-color: ${p};
      border-radius: ${l.borderRadius};
      transition: width 300ms ease;
    }
    .progress-bar-text {
      display: ${u?"":"none"};
      min-width: 2em;
      text-align: right;
      padding-left: 0.5rem;
    }
  `:i.css`
    display: inline-flex;
    .progress-circle-bg, .progress-circle-progress {
      fill: none;
    }
    .progress-circle-bg {
      stroke: ${l.bg};
    }
    .progress-circle-progress {
      stroke: ${p};
      transition: stroke-dashoffset 300ms ease;
    }
    .progress-circle-text {
      display: ${u?"":"none"};
    }
  `},Xi=e=>{var t;const o=e.theme,n=null===(t=null==o?void 0:o.components)||void 0===t?void 0:t.table;return n&&i.css`
    width: 100%;
    margin-bottom: ${o.spacer};
    color: ${n.color};
    background-color: ${n.bg};

    th,
    td {
      padding: ${n.cell.default.paddingY} ${n.cell.default.paddingX};
      vertical-align: top;
      border-top: ${n.border.width} solid ${n.border.color};
    }

    thead th {
      font-size: ${n.head.fontSize};
      background: ${n.head.bg};
      vertical-align: bottom;
      border-bottom: ${n.border.width} solid ${n.border.color};
    }

    tbody + tbody {
      border-top: ${n.border.width} solid ${n.border.color};
    }

    &.table-sm {
      th,
      td {
        padding: ${n.cell.sm.paddingY} ${n.cell.sm.paddingX};
      }
    }

    /* Border versions */
    &.table-bordered {
      border: ${n.border.width} solid ${n.border.color};
      th,
      td {
        border: ${n.border.width} solid ${n.border.color};
      }
    }

    &.table-borderless {
      th,
      td,
      thead th,
      tbody + tbody {
        border: 0;
      }
    }

    /* Zebra-striping */
    &.table-striped {
      tbody tr:nth-of-type(even) {
        background-color: ${n.variants.striped.bg};
      }
    }

    /* Dark styles */
    &.table-dark {
      color: ${n.variants.dark.color};
      background-color: ${n.variants.dark.bg};
      th {
        color: $table-dark-color;
        background-color: $table-dark-bg;
        border-color: $table-dark-border-color;
      }
      th,
      td {
        border-top-color: ${n.variants.dark.border.color};
      }

      thead th {
        background: ${n.variants.dark.head.bg};
        border-bottom-color: ${n.variants.dark.border.color};
      }

      tbody + tbody {
        border-top-color: ${n.variants.dark.border.color};
      }
    }
  `},Qi=e=>{var t;const o=e.theme,n=null===(t=null==o?void 0:o.components)||void 0===t?void 0:t.tooltip;return i.css`
    .plain-tooltip {
      pointer-events: inherit;
      font-size: ${null==n?void 0:n.fontSize};
      word-wrap: break-word;
      max-width: ${null==n?void 0:n.maxWidth};
      padding: ${null==n?void 0:n.paddingY} ${null==n?void 0:n.paddingX};
      color: ${null==n?void 0:n.color};
      text-align: left;
      background-color: ${null==n?void 0:n.bg};
      box-shadow: ${null==n?void 0:n.boxShadow};
      border-radius: ${null==n?void 0:n.borderRadius};
      border-color: ${null==n?void 0:n.border.color};
      border-width: ${null==n?void 0:n.border.width};
      border-style: solid;
    }
  `},Ji=({theme:e})=>{const t=`${i.urlUtils.getFixedRootPath()}jimu-ui`;return i.css`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    .common-loading{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .widget-img-loading{
      width: ${i.polished.rem(50)};
      height: ${i.polished.rem(50)};
      background-image: url("${t}/base/assets/images/loading/widget-loading1-l.svg");
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
    .donut-loading {
      @keyframes donut-spin {
        0% {
          transform: rotate(0deg);
        }

        100% {
          transform: rotate(360deg);
        }
      }

      display: inline-block;
      border: 2px solid ${e.colors.palette.light[400]};
      border-left-color: ${e.colors.palette.primary[600]};
      border-radius: 50%;
      position: absolute;
      width: ${i.polished.rem(32)};
      height: ${i.polished.rem(32)};
      right: calc(50% - ${i.polished.rem(16)});
      top: calc(50% - ${i.polished.rem(16)});
      animation: donut-spin 1.2s linear infinite;
    }
  `},ea=e=>i.css`
    background-color: transparent;
    border: 0;
    box-shadow: 0 0 0;
    position: fixed;
    top: 90px;
    left: 0;
    right: 0;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2001;
    .jimu-toast-common{
      box-shadow: 0 2px 6px 0 ${i.polished.rgba(e.theme.colors.white,.2)};
      font-size: 16px;
      font-weight: 500;
      border-radius: 2px;
    }
    .jimu-toast-error{
      background-color: ${e.theme.colors.black};
      color: ${e.theme.colors.danger};
      .jimu-icon{
        color: ${e.theme.colors.danger};
      }
    }
    .jimu-toast-info{
      background-color: ${e.theme.colors.secondary};
      color: ${e.theme.colors.black};
    }
  `,ta=e=>{var t,o,n,r,a,s,l;const d=e.theme,u=null===(t=null==d?void 0:d.components)||void 0===t?void 0:t.popper,p=e.showArrow,h=null!==(a=p&&(e.arrowStyle||u&&{background:null===(o=u.arrow)||void 0===o?void 0:o.color,border:{color:null===(n=u.arrow)||void 0===n?void 0:n.outerColor,width:null===(r=u.border)||void 0===r?void 0:r.width},size:dn}))&&void 0!==a?a:{};return i.css`
    top: 0;
    position: absolute;
    box-sizing: border-box;
    > .popper-box {
      height: 100%;
    }
    ${u&&i.css`
      background-color: ${u.bg};
      background-clip: padding-box;
      border: ${null===(s=u.border)||void 0===s?void 0:s.width} solid ${null===(l=u.border)||void 0===l?void 0:l.color};
      border-radius: ${u.borderRadius};
      box-shadow: ${u.shadow};
      ${p&&(0,c.popperPointer)(h)}
    `}
  `},oa=e=>{const t=e.theme,o=t&&t.components&&t.components.paper;return o&&i.css`
    background: ${o.bg};
    color: ${o.color};
    ${o.border&&i.css`
      border: ${o.border.color} solid ${o.border.width};
    `}
    padding: ${o.paddingX||0} ${o.paddingY||0};
    box-shadow: ${o.boxShadow};
  `},na=e=>{const t=e.theme,o=null==t?void 0:t.colors.palette.dark[600],n=null==t?void 0:t.colors.white,r=(0,i.getAppStore)().getState().appContext.isRTL;return i.css`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${n};
    border: 1px solid transparent;
    .resizer{
      position: absolute;
      width: 10px;
      height: 10px;
      z-index: 999;
      &.top-left {
        left: 0px;
        top: 0px;
        border-top: 3px solid  ${o};
        border-left: 3px solid  ${o};
        cursor: ${r?"nesw-resize":"nwse-resize"};
      }
      &.top-right {
        top: 0px;
        right: 0px;
        border-top: 3px solid  ${o};
        border-right: 3px solid  ${o};
        cursor: nesw-resize;
        cursor: ${r?"nwse-resize":"nesw-resize"};
      }
      &.bottom-left {
        left: 0px;
        bottom: 0px;
        border-left: 3px solid  ${o};
        border-bottom: 3px solid  ${o};
        cursor: nesw-resize;
        cursor: ${r?"nwse-resize":"nesw-resize"};
      }
      &.bottom-right {
        right: 0px;
        bottom: 0px;
        border-right: 3px solid  ${o};
        border-bottom: 3px solid  ${o};
        cursor: ${r?"nesw-resize":"nwse-resize"};
      }
    }
  `},ra=e=>{var t,o,n;const r=e.theme,a=null===(t=null==r?void 0:r.surfaces)||void 0===t?void 0:t[2];return i.css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    > :nth-of-type(2) {
      flex-grow: 1;
      height: calc(100% - 37px) !important;
    }
    border: 1px solid transparent;
    > .header {
      background: var(--primary-600);
      color: var(--white);
      > .actions > .jimu-btn {
        color: var(--primary-200);
        & :hover {
          color: var(--white);
        }
        &:disabled {
          color: var(--primary-400);
        }
      }
    }

    ${a&&i.css`
      background-clip: padding-box;
      background-color: ${a.bg};
      border: ${null===(o=a.border)||void 0===o?void 0:o.width} solid ${null===(n=a.border)||void 0===n?void 0:n.color};
      box-shadow: ${a.shadow};
    `}
  `},ia=e=>i.css`
    touch-action: none;
  `,aa=e=>i.css`
  .modal-header {
    border-bottom: 1px solid ${e.theme.colors.secondary};
    padding: 0.7rem 1rem;
    .close {
      color: ${e.theme.colors.palette.dark[600]};
      opacity: 1;
      padding: 0;
      margin: 0;
      transition: color .15s ease-in-out;
      &:not(:disabled):not(.disabled):hover,
      &:not(:disabled):not(.disabled):focus {
        opacity: 1;
      }
    }
  }
  .modal-body{
    overflow-y: auto;
    padding: 1rem 1rem;
  }
  .modal-content{
    width: auto;
    background-color: ${e.theme.colors.palette.light[200]};
    border: 1px solid ${e.theme.colors.palette.light[500]};
    border-radius: 0;
  }
  .modal-footer{
    padding: 1rem;

    .btn {
      min-width: 80px;
      + .btn {
        margin-left: 10px;
      }
    }
  }
  &.modal-dialog{
    width: auto;
  }`,sa=e=>{const t=e.theme;return i.css`
    .expand-mobile-panel {
      background-color: ${t.colors.white};
      box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 2px;
      border-radius: 10px 10px 0px 0px;
      overflow: hidden;
      pointer-events: auto;
      position: relative;
      touch-action: none;
      display: flex;
      flex-flow: column;
    }

    .expand-mobile-panel-transition {
      transition: height 0.3s;
    }

    .expand-mobile-panel-touch-container {
      top: 0;
      position: absolute;
      width: 100%;
      height: 54px;
      touch-action: none;
    }

    .expand-mobile-panel-bar {
      width: 36px;
      height: 4px;
      background-color: ${t.colors.black};
      border-radius: 2px;
      margin-top: 4px;
    }

    .mobile-panel-content-header {
      height: 54px;
      width: 100%;

    }

    .panel-icon {
      cursor: pointer;
      color: #6e6e6e;
    }

    .panel-icon:hover {
      color: #2e2e2e;
    }

    .panel-title {
      font-weight: bold;
      font-size: ${i.polished.rem(16)};
      color: ${t.colors.black};
      padding-right: 1rem;
    }

    .exb-mobile-panel-content {
      height: calc(100% - 30px);
      overflow: auto;
    }

    .mobile-panel-content-header {
      .panel-icon {
        position: relative;
        z-index: 1;
      }
    }
  `},la=e=>{const t=e.theme,{palette:o}=t.colors;return i.css`
    .header-account{
      & {
        padding-right: ${i.polished.rem(16)};
        padding-left: ${i.polished.rem(16)};
      }
      .header-login {
        margin-right: 0;
      }
      circle{
        fill: ${o.secondary[800]};
      }
      svg {
        color: ${o.dark[600]};
      }
    }
  `},ca=e=>{var t;const o=e.theme,n=null==o?void 0:o.colors;return i.css`
    width: 100%;
    border-radius: 2px;
    background: ${null===(t=null==n?void 0:n.palette)||void 0===t?void 0:t.secondary[200]};
    box-sizing: border-box;
    padding: ${i.polished.rem(10)} ${i.polished.rem(6)} 0 ${i.polished.rem(6)};
    position: relative;
    .tag-input-dropdown {
      width: 100%;
      .tag-text-input-container {
        padding-bottom: ${i.polished.rem(10)};
        padding-left: 0;
        padding-right: 0;
        .tag-text-input {
          font-size: ${i.polished.rem(13)};
          border: none;
          .input-wrapper {
            outline-offset: -2px;
          }
        }
      }
    }
  `},da=e=>{var t;const o=e.theme.colors;return i.css`
    ul, li{
      padding: 0;
      margin: 0;
      list-style: none;
    }
    .choices-data-list {
      text-align: left;
    }
    .choices-data-list li {
      & {
        display: inline-block;
        padding: ${i.polished.rem(4)} ${i.polished.rem(8)};
        line-height: ${i.polished.rem(18)};
        font-size: ${i.polished.rem(13)};
        background: ${null===(t=null==o?void 0:o.palette)||void 0===t?void 0:t.primary[100]};
        color: ${null==o?void 0:o.black};
        border-radius: 2px;
        margin-right: ${i.polished.rem(6)};
        margin-bottom: ${i.polished.rem(6)};
      }
      span {
        display: inline-block;
        margin-left: ${i.polished.rem(6)};
        cursor: pointer;
      }
    }
  `};function ua(e){return i.css`
    ${(0,c.getQuillCoreStyle)()}
    width: 100%;
    height: auto;
    overflow: hidden;
  `}function pa(e){return i.css`
    width: 100%;
    height: fit-content;
  `}const ha={slider:{getRootStyles:Hr,getThumbStyles:Wr,getTrackStyles:Vr,getVariantStyles:Gr,getSizeStyles:qr},nav:{getRootStyles:ti,getVariantStyles:oi},navButtonGroup:{getRootStyles:ri,getItemStyles:ii,getVariantStyles:ai}};var fa,ga=s(42443),ma=s(32521),va=s(12881),ba=s(43331),ya=s(4662),wa=s(87525),xa=s(67909);!function(e){e.IMAGE="image",e.ICON="icon"}(fa||(fa={}));var Sa=s(45466);const Oa=e=>{const{size:t="default",tag:o="label",centric:n}=e,r=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["size","tag","centric"]),a="default"===t?void 0:t;return i.React.createElement(Sa.Z,Object.assign({size:a,tag:o},r))},Ea=(0,c.withStyles)(Oa,"Label");const ka=e=>{const{className:t,color:o="danger",dot:n=!1,children:r,badgeStyle:a,badgeContent:s,hideBadge:l=!1,style:c}=e,d=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["className","color","dot","children","badgeStyle","badgeContent","hideBadge","style"]),u=(0,i.classNames)("jimu-badge-wrapper badge-wrapper",t),p=(0,i.classNames)("jimu-badge badge",o&&`badge-${o}`,n&&"badge-dot");return i.React.createElement("span",{className:u,style:c},!l&&i.React.createElement("span",Object.assign({style:a,className:p},d),!n&&s),r)},Ca=(0,c.withStyles)(ka,"Badge");var Na=s(31332),Ta=s(60721),Ra=s(12686),ja=s(99987),Pa=s(77700);const $a=e=>{const{className:t,horizontal:o,button:n,active:r,children:a}=e,l=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["className","horizontal","button","active","children"]),c=(0,i.classNames)("jimu-card",t,n&&"card-button",r&&"card-active",o&&"card-horizontal");return i.React.createElement(Na.Z,Object.assign({role:n?"button":void 0,className:c},l),r&&i.React.createElement("span",{className:"card-checkmark",role:"presentation"},i.React.createElement(Hn,{size:12,icon:s(95327)})),a)};$a.defaultProps={horizontal:!1,button:!1,active:!1};const Ma=(0,c.withStyles)($a,"Card"),Ia=i.React.createContext({});const Da=["ArrowUp","ArrowDown","Home","End"];class Aa extends i.React.PureComponent{constructor(e){super(e),this.addEvents=this.addEvents.bind(this),this.handleDocumentClick=this.handleDocumentClick.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.removeEvents=this.removeEvents.bind(this),this.toggle=this.toggle.bind(this),this.containerRef=i.React.createRef(),this.menuRef=i.React.createRef(),this.state={isOpen:!!this.props.isOpen}}componentDidMount(){this.handleProps()}componentDidUpdate(e){this.props.isOpen!==e.isOpen&&(this.setState({isOpen:this.props.isOpen}),this.handleProps(this.props.isOpen))}componentWillUnmount(){this.removeEvents()}handleProps(e=this.state.isOpen){e?this.addEvents():this.removeEvents()}getContainer(){return this.containerRef.current}getMenu(){return this.menuRef.current}getMenuCtrl(){var e;return this._menuCtrl||(this._menuCtrl=null===(e=this.getContainer())||void 0===e?void 0:e.querySelector("[aria-expanded]")),this._menuCtrl}getItemType(){return"listbox"===this.props.menuRole?"option":"menuitem"}getMenuItems(){const e=this.getMenu()||this.getContainer();return[].slice.call(e.querySelectorAll(`[role="${this.getItemType()}"]`))}addEvents(){document.addEventListener("keyup",this.handleDocumentClick,!0)}removeEvents(){document.removeEventListener("keyup",this.handleDocumentClick,!0)}handleDocumentClick(e){if(e&&(3===e.which||"keyup"===e.type&&"Tab"!==e.key))return;const t=this.getContainer(),o=this.getMenu(),n=t.contains(e.target)&&t!==e.target,r=o&&o.contains(e.target)&&o!==e.target;(!n&&!r||"keyup"===e.type&&"Tab"!==e.key)&&this.toggle(e)}handleTabEvent(e){this.props.handelTabEvent?!this.props.handelTabEvent(e)&&this.handleEscEvent(e):this.handleEscEvent(e)}handleEscEvent(e){e.preventDefault(),this.toggle(e),this.getMenuCtrl().focus()}handleKeyDown(e){if(!this.state.isOpen)return;const t="menuitem"===e.target.getAttribute("role")||"option"===e.target.getAttribute("role"),o=this.getMenuCtrl()===e.target,n="Tab"===e.key;if(["Tab","ArrowUp","ArrowDown"].includes(e.key)&&((Da.includes(e.key)||e.which>=48&&e.which<=90)&&e.preventDefault(),!this.props.disabled&&(o&&(["ArrowUp","ArrowDown"].includes(e.key)?(this.state.isOpen||this.toggle(e),setTimeout((()=>this.getMenuItems()[0].focus()))):this.state.isOpen&&n?(e.preventDefault(),this.getMenuItems()[0].focus()):this.state.isOpen&&"Escape"===e.key&&this.toggle(e)),this.state.isOpen&&t)))if("Escape"===e.key)this.handleEscEvent(e);else if("Tab"===e.key)this.handleTabEvent(e);else if(["ArrowUp","ArrowDown"].includes(e.key)||["n","p"].includes(e.key)&&e.ctrlKey){const t=this.getMenuItems();let o=t.indexOf(e.target);"ArrowUp"===e.key||"p"===e.key&&e.ctrlKey?o=0!==o?o-1:t.length-1:("ArrowDown"===e.key||"n"===e.key&&e.ctrlKey)&&(o=o===t.length-1?0:o+1),t[o].focus()}else if("End"===e.key){const e=this.getMenuItems();e[e.length-1].focus()}else if("Home"===e.key)this.getMenuItems()[0].focus();else if(e.which>=48&&e.which<=90){const t=this.getMenuItems(),o=String.fromCharCode(e.which).toLowerCase();for(let e=0;e<t.length;e+=1)if((t[e].textContent&&t[e].textContent[0].toLowerCase())===o){t[e].focus();break}}}toggle(e,t=!0){var o,n;if(this.props.disabled)return e&&e.preventDefault();this.props.autoWidth&&!this.state.isOpen&&(this._minMenuWidth=this.containerRef.current.clientWidth),this.state.isOpen&&t&&setTimeout((()=>{var e;null===(e=this.getMenuCtrl())||void 0===e||e.focus()}),200),this.setState({isOpen:!this.state.isOpen}),null===(n=null===(o=this.props)||void 0===o?void 0:o.toggle)||void 0===n||n.call(o,e)}render(){const e=this.props,{isOpen:t,className:o,fluid:n,direction:r,size:a,nav:s,tag:l,menuRole:c,useKeyUpEvent:d=!1,toggle:u,disabled:p,inNavbar:h,isSubMenuItem:f,autoWidth:g,activeIcon:m,handelTabEvent:v}=e,b=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["isOpen","className","fluid","direction","size","nav","tag","menuRole","useKeyUpEvent","toggle","disabled","inNavbar","isSubMenuItem","autoWidth","activeIcon","handelTabEvent"]),y=l||(s?"li":"div"),w=(0,i.classNames)("jimu-dropdown","dropdown",o,{fluid:n},"down"!==r&&`drop${r}`,{show:this.state.isOpen,"nav-item":s});return i.React.createElement(Ia.Provider,{value:{menuRole:this.props.menuRole||"menu",useKeyUpEvent:d,toggle:this.toggle,isOpen:void 0!==t?t:this.state.isOpen,direction:r,inNavbar:h,activeIcon:m,disabled:p,autoWidth:g,minMenuWidth:this._minMenuWidth,maxMenuWidth:`min(100vw, ${2*this._minMenuWidth}px)`,isSubMenuItem:f,onMenuRef:this.menuRef}},i.React.createElement(gn,null,i.React.createElement(y,Object.assign({},b,{ref:this.containerRef,onKeyDown:this.handleKeyDown,className:w}))))}}Aa.defaultProps={size:"default",direction:"down",nav:!1,inNavbar:!1,activeIcon:!1};const La=(0,c.withStyles)(Aa,"Dropdown");class za extends Aa{}za.defaultProps={direction:"right",isSubMenuItem:!0,tag:"div",className:"jimu-dropdown-submenu-item"};const _a=(0,c.withStyles)(za,"Dropdown");const Ba=i.React.createElement(Hn,{icon:s(38922),size:12,className:"jimu-dropdown-item-check"});class Fa extends i.React.PureComponent{constructor(e){super(e),this.onClick=e=>{var t,o;if(this.props.disabled||this.props.header||this.props.divider)e.preventDefault();else if(this.props.onClick&&this.props.onClick(e),this.props.toggle){const{a11yFocusBack:n=!0}=this.props;null===(o=null===(t=this.context)||void 0===t?void 0:t.toggle)||void 0===o||o.call(t,e,n)}},this.onKeyDown=e=>{var t,o;!this.context.useKeyUpEvent||"Enter"!==e.key&&" "!==e.key||e.preventDefault(),null===(o=(t=this.props).onKeyDown)||void 0===o||o.call(t,e)},this.onKeyUp=e=>{var t,o;!this.context.useKeyUpEvent||"Enter"!==e.key&&" "!==e.key||this.onClick(e),null===(o=(t=this.props).onKeyUp)||void 0===o||o.call(t,e)},this.onClick=this.onClick.bind(this),this.getTabIndex=this.getTabIndex.bind(this)}getRole(){return"listbox"===this.context.menuRole?"option":"menuitem"}getTabIndex(){return this.props.disabled||this.props.header||this.props.divider?-1:0}render(){var e;const t=this.getTabIndex(),o=t>-1?this.getRole():void 0,n=this.props,{className:r,toggle:a,onClick:s,active:l,divider:c,tag:d,header:u,children:p,rootRef:h,a11yFocusBack:f}=n,g=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(n,["className","toggle","onClick","active","divider","tag","header","children","rootRef","a11yFocusBack"]);let m;(null===(e=null==this?void 0:this.context)||void 0===e?void 0:e.activeIcon)&&(m="boolean"==typeof this.context.activeIcon?Ba:this.context.activeIcon);const v=(0,i.classNames)("jimu-dropdown-item",r,{disabled:g.disabled,"dropdown-item":!c&&!u,active:l,"dropdown-header":u,"dropdown-divider":c});let b=d;return"button"===b&&(u?b="h6":c?b="div":g.href&&(b="a")),i.React.createElement(b,Object.assign({type:"button"===b&&(s||a)?"button":void 0},g,{tabIndex:t,role:o,className:v,onClick:this.onClick,onKeyDown:this.onKeyDown,onKeyUp:this.onKeyUp,ref:h,"data-has-checkicon":!!m}),!m||u||c?null:l?m:i.React.createElement("span",{style:{width:12},className:"jimu-dropdown-item-check-placeholder"}),p)}}Fa.contextType=Ia,Fa.defaultProps={tag:"button",toggle:!0};const Ua=i.React.forwardRef(((e,t)=>i.React.createElement(Fa,Object.assign({rootRef:t},e))));Ua.displayName="_DropdownItemRef";const Ha=(0,c.withStyles)(Ua,"DropdownItem");class Wa extends i.React.PureComponent{constructor(e){super(e),this.onKeyDown=e=>{var t,o;!this.context.useKeyUpEvent||"Enter"!==e.key&&" "!==e.key||e.preventDefault(),null===(o=(t=this.props).onKeyDown)||void 0===o||o.call(t,e)},this.onKeyUp=e=>{var t,o;!this.context.useKeyUpEvent||"Enter"!==e.key&&" "!==e.key||this.onClick(e),null===(o=(t=this.props).onKeyUp)||void 0===o||o.call(t,e)},this.defaultLabel=this.props.intl.formatMessage({id:"dropdownButton",defaultMessage:Tt.dropdownButton}),this.onClick=this.onClick.bind(this)}onClick(e){var t;this.props.disabled||(null===(t=this.context)||void 0===t?void 0:t.disabled)?e.preventDefault():(this.props.tag||e.preventDefault(),this.props.onClick&&this.props.onClick(e),this.context.toggle&&this.context.toggle(e))}render(){const e=this.props,{arrow:t,dot:o,className:n,tag:r,disabled:a,children:l,intl:c,onKeyDown:d,onKeyUp:u}=e,p=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["arrow","dot","className","tag","disabled","children","intl","onKeyDown","onKeyUp"]),h=p["aria-label"]||this.defaultLabel,f=t&&"boolean"==typeof t?i.React.createElement(Hn,{icon:s(84856),size:"8"}):t,g=(0,i.classNames)(n,"jimu-dropdown-button","dropdown-button",{"dropdown-icon-dot":!t&&o},{"d-flex justify-content-end":!l},{"dropdown-button-icon":this.props.icon&&t}),m=i.React.createElement(i.React.Fragment,null,l?i.React.createElement("span",{className:"dropdown-button-content","data-testid":"test-context"},l):i.React.createElement("span",{className:"sr-only","data-testid":"test-sr-only"},h),t?i.React.createElement("span",{className:"caret-icon","data-testid":"test-arrow"},f):void 0);return i.React.createElement(mn,null,(({ref:e})=>{var t,o,n;return(null===(t=this.context)||void 0===t?void 0:t.isSubMenuItem)?i.React.createElement(Ha,{ref:e,tag:r,href:"a"===r?"#":void 0,className:g,onClick:this.onClick,"aria-expanded":this.context.isOpen,disabled:a||(null===(o=this.context)||void 0===o?void 0:o.disabled)},m):i.React.createElement(ye,Object.assign({},p,{"data-testid":"dropdownBtn",ref:e,tag:r,href:"a"===r?"#":void 0,className:g,onClick:this.onClick,onKeyDown:this.onKeyDown,onKeyUp:this.onKeyUp,"aria-haspopup":this.context.menuRole,"aria-expanded":this.context.isOpen,disabled:a||(null===(n=this.context)||void 0===n?void 0:n.disabled)}),m)}))}}Wa.contextType=Ia,Wa.defaultProps={"aria-haspopup":!0,type:"default",htmlType:"button",arrow:!0};const Va=(0,c.withStyles)((0,i.injectIntl)(Wa),"DropdownButton");class Ga extends i.React.PureComponent{constructor(e){super(e),this.onClick=this.onClick.bind(this)}onClick(e){this.props.disabled?e.preventDefault():(this.props.nav&&!this.props.tag&&e.preventDefault(),this.props.onClick&&this.props.onClick(e),this.context.toggle&&this.context.toggle(e))}render(){const e=this.props,{caret:t,className:o,split:n,nav:r,tag:a,forwardedRef:l}=e,c=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["caret","className","split","nav","tag","forwardedRef"]),d=c["aria-label"]||"Toggle Dropdown",u=(0,i.classNames)(o,"jimu-dropdown-toggle dropdown-toggle",{"jimu-dropdown-toggle-split dropdown-toggle-split":n,"nav-link":r,"icon-btn":this.props.icon||t}),p=c.children||i.React.createElement("span",{className:"sr-only"},d);let h;return h=r&&!a?"a":a||ye,i.React.createElement(mn,null,(({ref:e})=>i.React.createElement(h,Object.assign({},c,{ref:t=>{E(e,t),E(l,t)},href:"a"===h?"#":void 0,className:u,onClick:this.onClick,"aria-haspopup":this.context.menuRole,"aria-expanded":this.context.isOpen}),i.React.Children.count(p)>0&&i.React.createElement("span",{className:"dropdown-toggle-content"},p),t&&i.React.createElement(Hn,{className:"caret-icon",icon:s(65085),size:"10"}))))}}Ga.contextType=Ia,Ga.defaultProps={"aria-haspopup":!0,type:"secondary"};const qa=i.React.forwardRef(((e,t)=>i.React.createElement(Ga,Object.assign({},e,{forwardedRef:t})))),Ya=(0,c.withStyles)(qa,"DropdownToggle");const Za={up:"top",left:"left",right:"right",down:"bottom"};class Ka extends i.React.PureComponent{constructor(){super(...arguments),this.handleRef=e=>{const{onMenuRef:t}=this.context;t&&E(t,e)}}render(){var e,t;const o=this.props,{appendToBody:n,className:r,alignment:a,flip:s,tag:l,zIndex:c,children:d,style:u,showArrow:p,modifiers:h,strategy:f,maxHeight:g}=o,m=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(o,["appendToBody","className","alignment","flip","tag","zIndex","children","style","showArrow","modifiers","strategy","maxHeight"]),v=(0,i.classNames)("jimu-dropdown-menu","dropdown-menu",r,a&&`dropdown-menu-${a}`,{show:this.context.isOpen}),b=null===(t=null===(e=(0,i.getAppStore)().getState())||void 0===e?void 0:e.appContext)||void 0===t?void 0:t.isRTL,y=p||vo(h,"arrow");if(this.context.isOpen){const{autoWidth:e,minMenuWidth:t,maxMenuWidth:o,toggle:r}=this.context,s=a||(y?null:"start"),w=`${Za[this.context.direction]||"bottom"}${s&&"center"!==s?`-${s}`:""}`,x=Object.assign(Object.assign({},u),{minWidth:e?t:void 0,maxWidth:e?o:void 0});return i.React.createElement(vn,Object.assign({},m,{showArrow:p,disablePortal:!n,placement:w,flipPlacement:b,modifiers:h,strategy:f,open:!0,className:v,style:x,zIndex:isNaN(parseInt(c))?void 0:parseInt(c),tabIndex:-1,role:this.context.menuRole,"aria-hidden":!this.context.isOpen,toggle:r}),i.React.createElement(l,{className:"dropdown-menu--inner",ref:this.handleRef,style:{maxHeight:g?g+"px":"auto"}},d))}return null}}Ka.defaultProps={flip:!0,tag:"div",appendToBody:!0,offset:[0,4]},Ka.contextType=Ia;const Xa=(0,c.withStyles)(Ka,"DropdownMenu"),Qa={};var Ja,es,ts,os;!function(e){e.Fit="FIT",e.Fill="FILL"}(Ja||(Ja={})),function(e){e.ByURL="BY_URL",e.ByUpload="BY_UPLOAD"}(es||(es={})),function(e){e.Loading="LOADING",e.LoadOk="LOADOK",e.LoadError="LOADERROR"}(ts||(ts={})),function(e){e.Real="REAL",e.Fake="FAKE"}(os||(os={}));class ns extends i.React.PureComponent{constructor(e){super(e),this.__unmount=!1,this.getAdaptiveUrlFromImageParam=e=>{const t=null==e?void 0:e.url;return function(e){let t=!1;return!e||(t=["undefined"].some((t=>e===t)),t)}(t)?null:(null==e?void 0:e.isUseCompress)?new RegExp("^blob:http(s?)://(.)").test(e.url)?t:e.imgSourceType===es.ByUpload?t.replace(e.fileName,e.fileName.split(".")[0]+"_compress."+e.fileName.split(".")[1]):t:t},this.preloadImage=e=>{const t=this,o=Qa[e];o&&this.setState({imageWidth:o.width,imageHeight:o.height}),null!==e?(this.imgObject=new Image,this.imgObject.src=e,this.src=e,this.imgObject.onload=o=>{t.imgObject&&(this.__unmount||e===t.src&&(Qa[e]={width:t.imgObject.width,height:t.imgObject.height},t.setState({picLoadResult:ts.LoadOk,imageWidth:t.imgObject.width,imageHeight:t.imgObject.height}),t.props.onImageLoaded&&t.props.onImageLoaded(t.imgObject.width,t.imgObject.height)))},this.imgObject.onerror=()=>{t.imgObject&&(this.__unmount||e===t.src&&t.setState({picLoadResult:ts.LoadError}))}):t.setState({picLoadResult:ts.LoadError})},this.standardUrl=e=>""===e||null==e?"":e,this.onResize=(e,t)=>{this.__unmount||this.setState({widgetWidth:e,widgetHeight:t})},this.getWidgetWidth=()=>this.props.size&&this.props.size.width?this.props.size.width:this.state.widgetWidth,this.getWidgetHeight=()=>this.props.size&&this.props.size.height?this.props.size.height:this.state.widgetHeight,this.maskId=(new Date).getTime().toString();const t=Qa[this.props.imageParam&&this.getAdaptiveUrlFromImageParam(this.props.imageParam)];this.state={picLoadResult:ts.Loading,widgetWidth:this.props.size&&this.props.size.width,widgetHeight:this.props.size&&this.props.size.height,imageWidth:t&&t.width,imageHeight:t&&t.height,isRefresh:!1}}getStyle(){const{theme:e}=this.props;return i.css`
      .mask-image {
        -webkit-mask-image: url(#${this.maskId});
        mask: url(#${this.maskId});
        mask-image: url(#${this.maskId});
      }

      .mask-image-loading {
        -webkit-mask-image: url(#${this.maskId}-loading);
        mask: url(#${this.maskId}-loading);
        mask-image: url(#${this.maskId}-loading);
      }

      .widget-image-default {
        background: ${e?e.colors.palette.light[200]:"#eaeaea"}
          url(${s(14052)}) center center no-repeat;
        background-size: 50% 50%;
      }

      .widget-image-default-actual {
        background: ${e?e.colors.palette.light[200]:"#e3e3e3"};
        border: 1px solid ${e?e.colors.palette.light[500]:"#b6b6b6"};
      }

      .widget-image-loading {
        opacity: 0.8;
      }

      .widget-image-loaded {
        animation: fadeIn 0.25s ease;
      }

      @keyframes fadeIn {
        0% {
          opacity: 0.8;
        }

        100% {
          filter: blur(0);
          opacity: 1;
        }
      }
    `}componentDidMount(){this.__unmount=!1;const e=this.props.imageParam&&this.getAdaptiveUrlFromImageParam(this.props.imageParam);this.preloadImage(e)}componentWillUnmount(){this.imgObject=null,this.__unmount=!0,this.src=null}getSnapshotBeforeUpdate(e){return this.standardUrl(this.props.imageParam&&this.props.imageParam.url)!==this.standardUrl(e.imageParam&&e.imageParam.url)}componentDidUpdate(e,t,o){if(o){const e=this.props.imageParam&&this.getAdaptiveUrlFromImageParam(this.props.imageParam);this.setState({picLoadResult:ts.Loading,isRefresh:!0,imageWidth:null,imageHeight:null},(()=>{this.setState({isRefresh:!1},(()=>{this.preloadImage(e)}))}))}const n=e.imageParam&&e.imageParam.cropParam&&e.imageParam.cropParam.cropShape;(this.props.imageParam&&this.props.imageParam.cropParam&&this.props.imageParam.cropParam.cropShape)!==n&&(this.maskId=(new Date).getTime().toString(),this.forceUpdate())}render(){var e,t,o,n;const{appMode:r}=this.props,a=window.location.href.replace(window.location.hash,""),l=this.props.imageParam&&this.props.imageParam.cropParam;if(l&&(l.cropType===os.Fake||l.cropShape)){const e=this.getWidgetWidth(),t=this.getWidgetHeight(),o=function(e,t,o,n,r){const i=e&&e.cropPixel,a=e&&e.cropZoom,s=e&&e.cropType;if(!i||!a||!s||s===os.Real)return{zoom:1,x:0,y:0};const l=i.width,c=i.height;let d=null,u=null,p=null,h=null;t/o>=n/r?(u=t,p=r/n*u,t/o>=l/c?(h=t/(l*a),d=r*a*h/p):(h=o/(c*a),d=r*a*h/p)):(p=o,u=n/r*p,t/o>=l/c?(h=t/(l*a),d=r*a*h/p):(h=o/(c*a),d=r*a*h/p));let f=null,g=null;if(t/o>=n/r){let e=null,r=null,a=null,s=null;const l=u/n,c=(i.x+i.width/2)*l,h=(i.y+i.height/2)*l;e=c*d,r=h*d-(p-o)/2,a=t/2,s=o/2,f=(a-e)/l,g=(s-r)/l}else{let e=null,r=null,a=null,s=null;const l=u/n,c=(i.x+i.width/2)*l,p=(i.y+i.height/2)*l;e=c*d-(u-t)/2,r=p*d,a=t/2,s=o/2,f=(a-e)/l,g=(s-r)/l}return{zoom:d,x:f,y:g}}(l,e,t,this.state.imageWidth,this.state.imageHeight);let n=o.zoom,r=o.x,c=o.y;const d=l&&l.cropPixel&&l.cropPixel.width?l.cropPixel.width:this.state.imageWidth,u=l&&l.cropPixel&&l.cropPixel.height?l.cropPixel.height:this.state.imageHeight,p=function(e,t,o,n){if(!o||!n)return{width:e,height:t,marginLeft:0,marginTop:0};if(e/t>=o/n){const r=e*n/o;return{width:e,height:r,marginLeft:0,marginTop:t/2-r/2}}{const r=t*o/n;return{width:r,height:t,marginLeft:e/2-r/2,marginTop:0}}}(e,t,d,u);let h=null;this.props.imageFillMode===Ja.Fit&&(h=function(e,t,o,n){if(!o||!n)return{width:e,height:t,marginLeft:0,marginTop:0};if(e/t>=o/n){const r=t*o/n;return{width:r,height:t,marginLeft:e/2-r/2,marginTop:0}}{const r=n*e/o;return{width:e,height:r,marginLeft:0,marginTop:t/2-r/2}}}(e,t,d,u),n=h.width/p.width,r=(p.width-h.width)/2/p.width,c=(p.height-h.height)/2/p.height);const f=function(e,t){return e&&t?e>=t?t/2:e/2:0}(e,t);return(0,i.jsx)("div",{className:"jimu-widget",style:{position:"relative",overflow:"hidden"},css:this.getStyle()},(0,i.jsx)("div",{style:{top:"0px",position:"absolute",width:`${e}px`,height:`${t}px`},title:this.props.toolTip},e&&t&&this.state.picLoadResult!==ts.LoadOk&&(0,i.jsx)("svg",{style:{display:"block",position:"absolute"},width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,preserveAspectRatio:"xMidYMid slice"},(0,i.jsx)("defs",null,(0,i.jsx)("mask",{id:`${this.maskId}-loading`,maskContentUnits:"userSpaceOnUse"},(0,i.jsx)("svg",{viewBox:`0 0 ${e} ${t}`,preserveAspectRatio:""},(0,i.jsx)("svg",{width:"100%",height:"100%",viewBox:`${l.svgViewBox}`,preserveAspectRatio:"none"},(0,i.jsx)("g",null,(0,i.jsx)("path",{fill:"#fff",d:l.svgPath})))))),(0,i.jsx)("g",{width:"100%",height:"100%"},(0,i.jsx)("rect",{width:"100%",height:"100%",fill:this.props.theme?this.props.theme.colors.palette.light[200]:"#eaeaea",strokeWidth:0,preserveAspectRatio:"none",mask:`url(${a}#${this.maskId}-loading)`}),(0,i.jsx)("svg",{style:{display:"block"},width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,preserveAspectRatio:"xMidYMid slice"},(0,i.jsx)("image",{href:s(14052),width:f,height:f,x:e/2-f/2,y:t/2-f/2})))),(!this.props.imageFillMode||this.props.imageFillMode===Ja.Fill)&&e&&t&&(0,i.jsx)("svg",{style:{display:"block",position:"absolute"},width:(p.width,"100%"),height:(p.height,"100%"),viewBox:this.state.imageWidth?`0 0 ${this.state.imageWidth} ${this.state.imageHeight}`:"0 0 28 28",preserveAspectRatio:"xMidYMid slice"},(0,i.jsx)("defs",null,(0,i.jsx)("mask",{id:`${this.maskId}`,maskContentUnits:"userSpaceOnUse"},(0,i.jsx)("svg",{viewBox:`0 0 ${e} ${t}`,preserveAspectRatio:""},(0,i.jsx)("svg",{width:"100%",height:"100%",viewBox:`${l.svgViewBox}`,preserveAspectRatio:"none"},(0,i.jsx)("g",null,(0,i.jsx)("path",{fill:"#fff",d:l.svgPath})))))),this.state.imageWidth&&(0,i.jsx)("image",{x:r,y:c,href:this.getAdaptiveUrlFromImageParam(this.props.imageParam),mask:`url(${a}#${this.maskId})`,className:(0,i.classNames)({"widget-image-loaded":this.state.picLoadResult===ts.LoadOk&&this.props.useFadein}),width:100*n+"%",height:100*n+"%",preserveAspectRatio:"none"})),!this.state.isRefresh&&this.props.imageFillMode===Ja.Fit&&e&&t&&(0,i.jsx)("svg",{style:{display:"block",position:"absolute"},width:(p.width,"100%"),height:(p.height,"100%"),viewBox:this.state.imageWidth?`0 0 ${this.state.imageWidth} ${this.state.imageHeight}`:"0 0 28 28",preserveAspectRatio:"xMidYMid slice"},(0,i.jsx)("defs",null,(0,i.jsx)("mask",{id:`${this.maskId}`,maskContentUnits:"userSpaceOnUse"},(0,i.jsx)("svg",{viewBox:`0 0 ${e} ${t}`,preserveAspectRatio:""},(0,i.jsx)("svg",{width:"100%",height:"100%",viewBox:`${l.svgViewBox}`,preserveAspectRatio:"none"},(0,i.jsx)("g",null,(0,i.jsx)("path",{fill:"#fff",d:l.svgPath})))))),this.state.imageWidth&&(0,i.jsx)("image",{x:100*r+"%",y:100*c+"%",href:this.getAdaptiveUrlFromImageParam(this.props.imageParam),mask:`url(${a}#${this.maskId})`,className:(0,i.classNames)({"widget-image-loaded":this.state.picLoadResult===ts.LoadOk&&this.props.useFadein}),width:100*n+"%",height:100*n+"%",preserveAspectRatio:"none"}))),(!this.props.size||!this.props.size.width&&!this.props.size.height)&&(0,i.jsx)(i.ReactResizeDetector,{handleWidth:!0,handleHeight:!0,onResize:this.onResize}))}{const a=this.props.imageFillMode&&this.props.imageFillMode!==Ja.Fill?"contain":"cover",s=!(null===(t=null===(e=this.props)||void 0===e?void 0:e.imageParam)||void 0===t?void 0:t.url)||this.state.picLoadResult!==ts.LoadOk&&r===i.AppMode.Design,l=(null===(n=null===(o=this.props)||void 0===o?void 0:o.imageParam)||void 0===n?void 0:n.url)&&this.state.picLoadResult!==ts.LoadOk&&r===i.AppMode.Run;return(0,i.jsx)("div",{className:"jimu-widget",css:this.getStyle()},(0,i.jsx)("div",{className:(0,i.classNames)("jimu-widget")},(0,i.jsx)("div",{className:(0,i.classNames)("jimu-widget widget-image",{"widget-image-default":s},{"widget-image-default-actual":l},{"widget-image-loaded":this.state.picLoadResult===ts.LoadOk&&this.props.useFadein}),style:{position:"relative",overflow:"hidden"}},!this.state.isRefresh&&this.props.imageParam&&this.props.imageParam.url&&(0,i.jsx)("img",{title:this.props.toolTip,src:this.props.imageParam&&"null"!==this.props.imageParam.url&&void 0!==this.props.imageParam.url?this.getAdaptiveUrlFromImageParam(this.props.imageParam):"",className:(0,i.classNames)("w-100",{"h-100":!this.props.isAutoHeight}),alt:this.props.altText,style:{display:"block",objectFit:a,objectPosition:"50% 50%"}}))))}}}ns.defaultProps={imageParam:{}};const rs=i.ReactRedux.connect(((e,t)=>{var o,n;const r=t.imageParam&&t.imageParam.cropParam;return r&&(r.cropType===os.Fake||r.cropShape)&&t.isAutoHeight?{appPath:e.appPath,queryObject:e.queryObject,appMode:null===(o=null==e?void 0:e.appRuntimeInfo)||void 0===o?void 0:o.appMode}:{appPath:null,queryObject:null,appMode:null===(n=null==e?void 0:e.appRuntimeInfo)||void 0===n?void 0:n.appMode}}))((0,c.withTheme)(ns));var is=s(62646);class as extends i.React.PureComponent{constructor(e){super(e),as.count++,this.id=`jimu-loading-${as.count}`}getClassFromType(e){switch(e){case i.LoadingType.Primary:return"jimu-primary-loading";case i.LoadingType.Secondary:return"jimu-secondary-loading";case i.LoadingType.Donut:return"donut-loading";case i.LoadingType.Image:return"common-loading widget-img-loading";default:return""}}getStyle(e,t,o){if("number"!=typeof e&&"number"!=typeof t)return null;if(!o||o===i.LoadingType.Donut||o===i.LoadingType.Image){const o="number"==typeof e?`${e}px`:"2rem",n="number"==typeof t?`${t}px`:"2rem",r="number"==typeof e?`calc(50% - ${e/2}px)`:"calc(50% - 1rem)",a="number"==typeof e?`calc(50% - ${t/2}px)`:"calc(50% - 1rem)";return i.css`
        width: ${o} !important;
        height: ${n} !important;
        right: ${r} !important;
        top: ${a} !important;
      `}if(o===i.LoadingType.Primary||i.LoadingType.Secondary){const n="number"==typeof e?e/3+"px":o===i.LoadingType.Primary?"0.85rem":"0.51rem",r="number"==typeof t?`${t}px`:o===i.LoadingType.Primary?"2rem":"1.2rem",a=o===i.LoadingType.Primary?this.props.theme.colors.palette.primary[500]:i.polished.rgba(this.props.theme.colors.palette.light[800],.5);return(0,c.getLoadingStyles)(n,r,a,`${this.id}-${o}`)}return null}render(){const e=(0,i.classNames)("jimu-loading",this.props.className),t=this.getClassFromType(this.props.type);return(0,i.jsx)("div",{className:e},(0,i.jsx)("div",{className:`justify-content-center align-content-center ${t}`,css:this.getStyle(this.props.width,this.props.height,this.props.type)}))}}as.count=0;const ss=(0,c.withStyles)((0,c.withTheme)(as),"Loading");var ls=function(e,t,o,n){return new(o||(o=Promise))((function(r,i){function a(e){try{l(n.next(e))}catch(e){i(e)}}function s(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,s)}l((n=n.apply(e,t||[])).next())}))};const cs=s(86700),ds=["email"],us={url:function(e){const t=i.i18n.getIntl(),o=I(e),n=o&&("httpError"===o?"httpsUrlMessage":"invalidUrlMessage");return{valid:!o,msg:n&&(null==t?void 0:t.formatMessage({id:n,defaultMessage:Tt[n]}))}}},ps=i.React.forwardRef((function(e,t){const{onAcceptValue:o,value:n,className:r,style:a,prefix:l,suffix:c,checkValidityOnChange:d,checkValidityOnAccept:u,allowClear:p=!1,size:h="default"}=e,f=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["onAcceptValue","value","className","style","prefix","suffix","checkValidityOnChange","checkValidityOnAccept","allowClear","size"]),g=e.type,m=i.React.useMemo((()=>null!=n),[n]),[v,b]=i.React.useState(!0),[y,w]=i.React.useState(!1),x=i.React.useRef(),S=i.React.useRef(!1),O=i.React.useRef(),E=Lt(O,t),k=Dt(Tt);Ht((()=>{S.current=!0}));const C=i.React.useRef(!1);i.React.useEffect((()=>{let e;"function"==typeof d&&n?e=d:"function"==typeof u&&n&&(e=u),!e&&Object.keys(us).includes(g)&&(e=us[g]),e&&(w(!0),M(n,e).then((e=>{e.valid||(x.current=e.msg,C.current=!0,b(!1))})).finally((()=>{w(!1)})))}),[]);const N=t=>ls(this,void 0,void 0,(function*(){let n;w(!0),"function"==typeof u?n=yield M(t,u):Object.keys(us).includes(e.type)?n=yield M(t,us[e.type]):(e.required||ds.includes(e.type))&&(n={valid:O.current.checkValidity()}),S.current||(null!=n&&(x.current=n.msg,C.current=!0,b(n.valid)),n&&!n.valid||null==o||o(t),w(!1))})),T=(0,i.classNames)("jimu-input",e.size&&`jimu-input-${e.size}`,r,{"is-valid":C.current&&v,"is-invalid":C.current&&!v,readonly:e.readOnly,disabled:e.disabled||y});return(0,i.jsx)("div",{className:T,css:i.css`
      .input-wrapper {
        display: inline-flex;
        align-items: center;
        flex-wrap: nowrap;
        position: relative;
      }
      input {
        flex-grow: 1;
        border: none;
        padding: 0;
        outline: none;
        color: inherit;
        background: transparent;
        &:focus,
        &:focus-visible {
          outline: none !important;
          box-shadow: none !important;
        }
      }
      .clear-content {
        cursor: pointer;
      }
    `,style:a},(0,i.jsx)("span",{className:`input-wrapper ${i.INTERACTIVE_CLASS}`},l&&(0,i.jsx)("span",{className:"text-input-prefix mr-1"},l),(0,i.jsx)(is.Z,Object.assign({},f,{className:"text-truncate",size:e.htmlSize,bsSize:"default"===h?void 0:h,value:m?n:void 0,onChange:t=>ls(this,void 0,void 0,(function*(){var o;let n;null===(o=e.onChange)||void 0===o||o.call(e,t);const r=t.target.value;"function"==typeof d?n=yield M(r,d):Object.keys(us).includes(e.type)?n=yield M(r,us[e.type]):(e.required||ds.includes(e.type))&&(n={valid:O.current.checkValidity()}),S.current||null!=n&&(x.current=n.msg,C.current=!0,b(n.valid))})),onBlur:t=>{var o;N(t.target.value),null===(o=e.onBlur)||void 0===o||o.call(e,t)},valid:C.current&&v,invalid:C.current&&!v,onFocus:t=>{var o;null===(o=e.onFocus)||void 0===o||o.call(e,t)},onKeyUp:t=>{var o;"Enter"===t.key&&(N(t.currentTarget.value),null===(o=e.onKeyUp)||void 0===o||o.call(e,t))},innerRef:E})),p&&(0,i.jsx)(ye,{className:"text-input-clear clear-content ml-1",type:"tertiary","aria-label":k("clear"),title:k("clear"),icon:!0,size:"sm",onClick:()=>{var t;O.current.value="",null===(t=e.onChange)||void 0===t||t.call(e,{target:O.current,currentTarget:O.current,value:"",preventDefault:()=>{},stopPropagation:()=>{}})}},(0,i.jsx)(Hn,{icon:cs,size:12})),c&&(0,i.jsx)("span",{className:"text-input-suffix ml-1"},c),y&&(0,i.jsx)(ss,{type:i.LoadingType.Donut,width:16,height:16,css:i.css`
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
            `})),C.current&&!v&&x.current&&(0,i.jsx)("div",{className:"error-msg text-wrap mt-1"},(0,i.jsx)(Hn,{size:16,icon:s(28114),className:"mr-1"}),x.current))})),hs=(0,c.withStyles)(ps,"TextInput");const fs=i.React.forwardRef((function(e,t){var o;const{onAcceptValue:n,value:r,defaultValue:a,className:s}=e,l=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["onAcceptValue","value","defaultValue","className"]),[c,d]=i.React.useState(null!==(o=null!=r?r:a)&&void 0!==o?o:"");i.React.useEffect((()=>{var e;d(null!==(e=null!=r?r:a)&&void 0!==e?e:"")}),[r,a]);const u=(0,i.classNames)("jimu-input",s);return i.React.createElement(is.Z,Object.assign({},l,{type:"textarea",className:u,size:e.htmlSize,value:c,onChange:t=>{var o;d(t.target.value),null===(o=e.onChange)||void 0===o||o.call(e,t)},onBlur:t=>{var o;null==n||n(t.target.value),null===(o=e.onBlur)||void 0===o||o.call(e,t)},onKeyUp:t=>{var o;"Enter"===t.key&&(null==n||n(t.currentTarget.value),null===(o=e.onKeyUp)||void 0===o||o.call(e,t))},innerRef:t}))})),gs=(0,c.withStyles)(fs,"TextArea");var ms=s(94184),vs=s.n(ms),bs={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(e){var t=e.keyCode;if(e.altKey&&!e.ctrlKey||e.metaKey||t>=bs.F1&&t<=bs.F12)return!1;switch(t){case bs.ALT:case bs.CAPS_LOCK:case bs.CONTEXT_MENU:case bs.CTRL:case bs.DOWN:case bs.END:case bs.ESC:case bs.HOME:case bs.INSERT:case bs.LEFT:case bs.MAC_FF_META:case bs.META:case bs.NUMLOCK:case bs.NUM_CENTER:case bs.PAGE_DOWN:case bs.PAGE_UP:case bs.PAUSE:case bs.PRINT_SCREEN:case bs.RIGHT:case bs.SHIFT:case bs.UP:case bs.WIN_KEY:case bs.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(e){if(e>=bs.ZERO&&e<=bs.NINE)return!0;if(e>=bs.NUM_ZERO&&e<=bs.NUM_MULTIPLY)return!0;if(e>=bs.A&&e<=bs.Z)return!0;if(-1!==window.navigator.userAgent.indexOf("WebKit")&&0===e)return!0;switch(e){case bs.SPACE:case bs.QUESTION_MARK:case bs.NUM_PLUS:case bs.NUM_MINUS:case bs.NUM_PERIOD:case bs.NUM_DIVISION:case bs.SEMICOLON:case bs.DASH:case bs.EQUALS:case bs.COMMA:case bs.PERIOD:case bs.SLASH:case bs.APOSTROPHE:case bs.SINGLE_QUOTE:case bs.OPEN_SQUARE_BRACKET:case bs.BACKSLASH:case bs.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};const ys=bs;var ws=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},xs=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}();function Ss(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function Os(){}function Es(e){e.preventDefault()}var ks=Number.MAX_SAFE_INTEGER||Math.pow(2,53)-1,Cs=function(e){return null!=e},Ns=function(e,t){return t===e||"number"==typeof t&&"number"==typeof e&&isNaN(t)&&isNaN(e)},Ts=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));Rs.call(o);var n;n="value"in e?e.value:e.defaultValue,o.state={focused:e.autoFocus};var r=o.getValidValue(o.toNumber(n));return o.state=ws({},o.state,{inputValue:o.toPrecisionAsStep(r),value:r}),o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),xs(t,[{key:"componentDidMount",value:function(){this.componentDidUpdate()}},{key:"componentDidUpdate",value:function(e){var t=this.props,o=t.value,n=t.onChange,r=t.max,i=t.min,a=this.state.focused;if(e){if(!Ns(e.value,o)||!Ns(e.max,r)||!Ns(e.min,i)){var s,l=a?o:this.getValidValue(o);s=this.pressingUpOrDown?l:this.inputting?this.rawInput:this.toPrecisionAsStep(l),this.setState({value:l,inputValue:s})}var c="value"in this.props?o:this.state.value;"max"in this.props&&e.max!==r&&"number"==typeof c&&c>r&&n&&n(r),"min"in this.props&&e.min!==i&&"number"==typeof c&&c<i&&n&&n(i)}try{if(void 0!==this.cursorStart&&this.state.focused)if(this.partRestoreByAfter(this.cursorAfter)||this.state.value===this.props.value){if(this.currentValue===this.input.value)switch(this.lastKeyCode){case ys.BACKSPACE:this.fixCaret(this.cursorStart-1,this.cursorStart-1);break;case ys.DELETE:this.fixCaret(this.cursorStart+1,this.cursorStart+1)}}else{var d=this.cursorStart+1;this.cursorAfter?this.lastKeyCode===ys.BACKSPACE?d=this.cursorStart-1:this.lastKeyCode===ys.DELETE&&(d=this.cursorStart):d=this.input.value.length,this.fixCaret(d,d)}}catch(e){}this.lastKeyCode=null,this.pressingUpOrDown&&this.props.focusOnUpDown&&this.state.focused&&document.activeElement!==this.input&&this.focus()}},{key:"componentWillUnmount",value:function(){this.stop()}},{key:"getCurrentValidValue",value:function(e){var t=e;return t=""===t?"":this.isNotCompleteNumber(parseFloat(t,10))?this.state.value:this.getValidValue(t),this.toNumber(t)}},{key:"getRatio",value:function(e){var t=1;return e.metaKey||e.ctrlKey?t=.1:e.shiftKey&&(t=10),t}},{key:"getValueFromEvent",value:function(e){var t=e.target.value.trim().replace(/。/g,".");return Cs(this.props.decimalSeparator)&&(t=t.replace(this.props.decimalSeparator,".")),t}},{key:"getValidValue",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.props.min,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.props.max,n=parseFloat(e,10);return isNaN(n)?e:(n<t&&(n=t),n>o&&(n=o),n)}},{key:"setValue",value:function(e,t){var o=this.props.precision,n=this.isNotCompleteNumber(parseFloat(e,10))?null:parseFloat(e,10),r=this.state,i=r.value,a=void 0===i?null:i,s=r.inputValue,l=void 0===s?null:s,c="number"==typeof n?n.toFixed(o):""+n,d=n!==a||c!==""+l;return"value"in this.props?this.setState({inputValue:this.toPrecisionAsStep(this.state.value)},t):this.setState({value:n,inputValue:this.toPrecisionAsStep(e)},t),d&&this.props.onChange(n),n}},{key:"getFullNum",value:function(e){return isNaN(e)?e:/e/i.test(String(e))?Number(e).toFixed(18).replace(/\.?0+$/,""):e}},{key:"getPrecision",value:function(e){if(Cs(this.props.precision))return this.props.precision;var t=e.toString();if(t.indexOf("e-")>=0)return parseInt(t.slice(t.indexOf("e-")+2),10);var o=0;return t.indexOf(".")>=0&&(o=t.length-t.indexOf(".")-1),o}},{key:"getMaxPrecision",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,o=this.props,n=o.precision,r=o.step;if(Cs(n))return n;var i=this.getPrecision(t),a=this.getPrecision(r),s=this.getPrecision(e);return e?Math.max(s,i+a):i+a}},{key:"getPrecisionFactor",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,o=this.getMaxPrecision(e,t);return Math.pow(10,o)}},{key:"fixCaret",value:function(e,t){if(void 0!==e&&void 0!==t&&this.input&&this.input.value)try{var o=this.input.selectionStart,n=this.input.selectionEnd;e===o&&t===n||this.input.setSelectionRange(e,t)}catch(e){}}},{key:"focus",value:function(){this.input.focus(),this.recordCursorPosition()}},{key:"blur",value:function(){this.input.blur()}},{key:"select",value:function(){this.input.select()}},{key:"formatWrapper",value:function(e){return this.props.formatter?this.props.formatter(e):e}},{key:"toPrecisionAsStep",value:function(e){if(this.isNotCompleteNumber(e)||""===e)return e;var t=Math.abs(this.getMaxPrecision(e));return isNaN(t)?e.toString():Number(e).toFixed(t)}},{key:"isNotCompleteNumber",value:function(e){return isNaN(e)||""===e||null===e||e&&e.toString().indexOf(".")===e.toString().length-1}},{key:"toNumber",value:function(e){var t=this.props.precision,o=this.state.focused,n=e&&e.length>16&&o;return this.isNotCompleteNumber(e)||n?e:Cs(t)?Math.round(e*Math.pow(10,t))/Math.pow(10,t):Number(e)}},{key:"upStep",value:function(e,t){var o=this.props.step,n=this.getPrecisionFactor(e,t),r=Math.abs(this.getMaxPrecision(e,t)),i=((n*e+n*o*t)/n).toFixed(r);return this.toNumber(i)}},{key:"downStep",value:function(e,t){var o=this.props.step,n=this.getPrecisionFactor(e,t),r=Math.abs(this.getMaxPrecision(e,t)),i=((n*e-n*o*t)/n).toFixed(r);return this.toNumber(i)}},{key:"step",value:function(e,t){var o=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments[3];this.stop(),t&&(t.persist(),t.preventDefault());var i=this.props;if(!i.disabled){var a=this.getCurrentValidValue(this.state.inputValue)||0;if(!this.isNotCompleteNumber(a)){var s=this[e+"Step"](a,n),l=s>i.max||s<i.min;s>i.max?s=i.max:s<i.min&&(s=i.min),this.setValue(s),this.setState({focused:!0},(function(){o.pressingUpOrDown=!1})),l||(this.autoStepTimer=setTimeout((function(){o[e](t,n,!0)}),r?200:600))}}}},{key:"render",value:function(){var e,t=this.props,o=t.prefixCls,n=t.disabled,r=t.readOnly,i=t.useTouch,a=t.autoComplete,s=t.upHandler,l=t.downHandler,c=t.className,d=t.max,u=t.min,p=t.style,h=t.title,f=t.onMouseEnter,g=t.onMouseLeave,m=t.onMouseOver,v=t.onMouseOut,b=t.required,y=t.onClick,w=t.tabIndex,x=t.type,S=t.placeholder,O=t.id,E=t.inputMode,k=t.pattern,C=t.step,N=t.maxLength,T=t.autoFocus,R=t.name,j=function(e,t){var o={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n]);return o}(t,["prefixCls","disabled","readOnly","useTouch","autoComplete","upHandler","downHandler","className","max","min","style","title","onMouseEnter","onMouseLeave","onMouseOver","onMouseOut","required","onClick","tabIndex","type","placeholder","id","inputMode","pattern","step","maxLength","autoFocus","name"]),P=this.state,$=P.value,M=P.focused,I=vs()(o,(Ss(e={},c,!!c),Ss(e,o+"-disabled",n),Ss(e,o+"-focused",M),e)),D={};Object.keys(j).forEach((function(e){"data-"!==e.substr(0,5)&&"aria-"!==e.substr(0,5)&&"role"!==e||(D[e]=j[e])}));var A=!r&&!n,L=this.getInputDisplayValue(),z=($||0===$)&&(isNaN($)||Number($)>=d)||n||r,_=($||0===$)&&(isNaN($)||Number($)<=u)||n||r,B=vs()(o+"-handler",o+"-handler-up",Ss({},o+"-handler-up-disabled",z)),F=vs()(o+"-handler",o+"-handler-down",Ss({},o+"-handler-down-disabled",_)),U=i?{onTouchStart:z?Os:this.up,onTouchEnd:this.stop}:{onMouseDown:z?Os:this.up,onMouseUp:this.stop,onMouseLeave:this.stop},H=i?{onTouchStart:_?Os:this.down,onTouchEnd:this.stop}:{onMouseDown:_?Os:this.down,onMouseUp:this.stop,onMouseLeave:this.stop};return bn.default.createElement("div",{className:I,style:p,title:h,onMouseEnter:f,onMouseLeave:g,onMouseOver:m,onMouseOut:v,onFocus:function(){return null},onBlur:function(){return null}},bn.default.createElement("div",{className:o+"-handler-wrap"},bn.default.createElement("span",ws({unselectable:"unselectable"},U,{role:"button","aria-label":"Increase Value","aria-disabled":z,className:B}),s||bn.default.createElement("span",{unselectable:"unselectable",className:o+"-handler-up-inner",onClick:Es})),bn.default.createElement("span",ws({unselectable:"unselectable"},H,{role:"button","aria-label":"Decrease Value","aria-disabled":_,className:F}),l||bn.default.createElement("span",{unselectable:"unselectable",className:o+"-handler-down-inner",onClick:Es}))),bn.default.createElement("div",{className:o+"-input-wrap"},bn.default.createElement("input",ws({role:"spinbutton","aria-valuemin":u,"aria-valuemax":d,"aria-valuenow":$,required:b,type:x,placeholder:S,onClick:y,onMouseUp:this.onMouseUp,className:o+"-input",tabIndex:w,autoComplete:a,onFocus:this.onFocus,onBlur:this.onBlur,onKeyDown:A?this.onKeyDown:Os,onKeyUp:A?this.onKeyUp:Os,autoFocus:T,maxLength:N,readOnly:r,disabled:n,max:d,min:u,step:C,name:R,title:h,id:O,onChange:this.onChange,ref:this.saveInput,value:this.getFullNum(L),pattern:k,inputMode:E},D))))}}]),t}(bn.default.Component);Ts.defaultProps={focusOnUpDown:!0,useTouch:!1,prefixCls:"rc-input-number",max:ks,min:-ks,step:1,style:{},onChange:Os,onKeyDown:Os,onPressEnter:Os,onFocus:Os,onBlur:Os,parser:function(e){return e.replace(/[^\w.-]+/g,"")},required:!1,autoComplete:"off"};var Rs=function(){var e=this;this.onKeyDown=function(t){for(var o=arguments.length,n=Array(o>1?o-1:0),r=1;r<o;r++)n[r-1]=arguments[r];var i=e.props,a=i.onKeyDown,s=i.onPressEnter;if(t.keyCode===ys.UP){var l=e.getRatio(t);e.up(t,l),e.stop()}else if(t.keyCode===ys.DOWN){var c=e.getRatio(t);e.down(t,c),e.stop()}else t.keyCode===ys.ENTER&&s&&s(t);e.recordCursorPosition(),e.lastKeyCode=t.keyCode,a&&a.apply(void 0,[t].concat(n))},this.onKeyUp=function(t){for(var o=arguments.length,n=Array(o>1?o-1:0),r=1;r<o;r++)n[r-1]=arguments[r];var i=e.props.onKeyUp;e.stop(),e.recordCursorPosition(),i&&i.apply(void 0,[t].concat(n))},this.onChange=function(t){var o=e.props.onChange;e.state.focused&&(e.inputting=!0),e.rawInput=e.props.parser(e.getValueFromEvent(t)),e.setState({inputValue:e.rawInput}),o(e.toNumber(e.rawInput))},this.onMouseUp=function(){var t=e.props.onMouseUp;e.recordCursorPosition(),t&&t.apply(void 0,arguments)},this.onFocus=function(){var t;e.setState({focused:!0}),(t=e.props).onFocus.apply(t,arguments)},this.onBlur=function(){var t=e.props.onBlur;e.inputting=!1,e.setState({focused:!1});var o=e.getCurrentValidValue(e.state.inputValue),n=e.setValue(o);if(t){var r=e.input.value,i=e.getInputDisplayValue({focus:!1,value:n});e.input.value=i?Number(i):i,t.apply(void 0,arguments),e.input.value=r}},this.getInputDisplayValue=function(t){var o=t||e.state,n=o.focused,r=o.inputValue,i=o.value,a=void 0;null==(a=n?r:e.toPrecisionAsStep(i))&&(a="");var s=e.formatWrapper(a);return Cs(e.props.decimalSeparator)&&(s=s.toString().replace(".",e.props.decimalSeparator)),s},this.recordCursorPosition=function(){try{e.cursorStart=e.input.selectionStart,e.cursorEnd=e.input.selectionEnd,e.currentValue=e.input.value,e.cursorBefore=e.input.value.substring(0,e.cursorStart),e.cursorAfter=e.input.value.substring(e.cursorEnd)}catch(e){}},this.restoreByAfter=function(t){if(void 0===t)return!1;var o=e.input.value,n=o.lastIndexOf(t);if(-1===n)return!1;var r=e.cursorBefore.length;return e.lastKeyCode===ys.DELETE&&e.cursorBefore.charAt(r-1)===t[0]?(e.fixCaret(r,r),!0):n+t.length===o.length&&(e.fixCaret(n,n),!0)},this.partRestoreByAfter=function(t){return void 0!==t&&Array.prototype.some.call(t,(function(o,n){var r=t.substring(n);return e.restoreByAfter(r)}))},this.stop=function(){e.autoStepTimer&&clearTimeout(e.autoStepTimer)},this.down=function(t,o,n){e.pressingUpOrDown=!0,e.step("down",t,o,n)},this.up=function(t,o,n){e.pressingUpOrDown=!0,e.step("up",t,o,n)},this.saveInput=function(t){e.input=t}};const js=Ts;const Ps=i.React.createElement(Hn,{icon:s(15975),size:"8"}),$s=i.React.createElement(Hn,{icon:s(84856),size:"8"});class Ms extends i.React.PureComponent{constructor(e){super(e),this.onChange=e=>{if(this.props.onChange){const t=this.fixValue(e);this.props.onChange(t)}},this.onPressEnter=e=>{var t,o,n,r;const i=this.fixValue(e.target.value);null===(o=null===(t=this.props)||void 0===t?void 0:t.onPressEnter)||void 0===o||o.call(t,e),null===(r=null===(n=this.props)||void 0===n?void 0:n.onAcceptValue)||void 0===r||r.call(n,i,e)},this.onBlur=e=>{var t,o,n,r;let i=e.target.value;"NaN"===i&&(i=e.target.getAttribute("value"));const a=this.fixValue(i);null===(o=null===(t=this.props)||void 0===t?void 0:t.onBlur)||void 0===o||o.call(t,e),null===(r=null===(n=this.props)||void 0===n?void 0:n.onAcceptValue)||void 0===r||r.call(n,a,e)},this.getValueInRange=e=>{let t=Number(this.props.min),o=Number(this.props.max);return t=isNaN(t)?-1/0:t,o=isNaN(o)?1/0:o,Math.min(Math.max(t,e),o)},this.dicimalSeparator=i.i18n.getDecimalSeparator(window.locale)}fixValue(e){var t;if(null===e)return null;if("number"==typeof e)return this.getValueInRange(e);if("string"==typeof e){if(""===e.trim())return null;const o=null===(t=e.match(/[-]{0,1}[\d]*[.|,]{0,1}[\d]+/))||void 0===t?void 0:t[0];let n;return n=e.includes(",")?Number(o.replace(",",".")):Number(o),isNaN(n)?null:this.getValueInRange(n)}return this.getValueInRange(Number(e))}render(){const e=this.props,{className:t,forwardedRef:o,showHandlers:n,size:r,onChange:a,onPressEnter:s,onBlur:l}=e,c=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["className","forwardedRef","showHandlers","size","onChange","onPressEnter","onBlur"]),d=(0,i.classNames)(t,"jimu-input",i.INTERACTIVE_CLASS,r&&`jimu-input-${r}`,n&&"show-handlers");return i.React.createElement(js,Object.assign({prefixCls:"jimu-numeric-input",className:d,ref:o,upHandler:Ps,downHandler:$s,decimalSeparator:this.dicimalSeparator,onChange:this.onChange,onPressEnter:this.onPressEnter,onBlur:this.onBlur},c))}}Ms.defaultProps={showHandlers:!0,step:1,size:"default"};const Is=i.React.forwardRef(((e,t)=>i.React.createElement(Ms,Object.assign({forwardedRef:t},e))));Is.displayName="_NumericInput";const Ds=(0,c.withStyles)(Is,"NumericInput");const As=e=>{const{className:t,type:o="checkbox",size:n,htmlSize:r,forwardedRef:a,indeterminate:s,role:l,checked:c,disabled:d,onClick:u,onFocus:p,onBlur:h,onChange:f}=e,g=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["className","type","size","htmlSize","forwardedRef","indeterminate","role","checked","disabled","onClick","onFocus","onBlur","onChange"]),[m,v]=zt(a);return i.React.useEffect((()=>{const e=m.current,t="input[type=checkbox]",o=e.matches(t)?e:e.querySelector(t);o&&(o.indeterminate=!!s)}),[s]),i.React.createElement(is.Z,Object.assign({},g,{role:l,type:o,bsSize:n,checked:c,disabled:d,innerRef:v,onClick:u,onFocus:p,onBlur:h,onChange:e=>{null==f||f(e,e.target.checked)}}))};var Ls=s(21835),zs=s(18371),_s=s.n(zs);const Bs=e=>{const{className:t}=e,o=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["className"]),n=(0,i.classNames)("jimu-icon-component",t);return i.React.createElement(Ls.Icon,Object.assign({className:n,icon:_s()},o))};var Fs=s(67660),Us=s.n(Fs);const Hs=e=>{const{className:t}=e,o=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["className"]),n=(0,i.classNames)("jimu-icon-component",t);return i.React.createElement(Ls.Icon,Object.assign({className:n,icon:Us()},o))};const Ws=e=>{const{className:t,indeterminate:o,checked:n,disabled:r}=e,a=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["className","indeterminate","checked","disabled"]),s=(0,i.classNames)("jimu-checkbox",t,o&&"indeterminate",n&&"checked",i.INTERACTIVE_CLASS,r&&"disabled");return i.React.createElement("span",{className:s},i.React.createElement(As,Object.assign({type:"checkbox",role:"checkbox",checked:n,disabled:r,indeterminate:o},a)),o?i.React.createElement(Hs,null):i.React.createElement(Bs,null))};Ws.displayName="_Checkbox";const Vs=(0,c.withStyles)(i.React.forwardRef(((e,t)=>i.React.createElement(Ws,Object.assign({forwardedRef:t},e)))),"Checkbox");const Gs=e=>{const{value:t}=e,o=t>100?"100%":`${t}%`;return i.React.createElement(i.React.Fragment,null,i.React.createElement("div",{className:"progress-bar-track"},i.React.createElement("div",{style:{width:o},className:"progress-bar"})),i.React.createElement("div",{className:"progress-bar-text"},o))};Gs.defaultProps={value:0};const qs=e=>{const{size:t,strokeWidth:o,value:n}=e,r=`0 0 ${t} ${t}`,a=(t-o)/2,s=a*Math.PI*2,l=s-s*n/100;return i.React.createElement("svg",{width:t,height:t,viewBox:r},i.React.createElement("circle",{className:"progress-circle-bg",cx:t/2,cy:t/2,r:a,strokeWidth:`${o}px`}),i.React.createElement("circle",{className:"progress-circle-progress",cx:t/2,cy:t/2,r:a,strokeWidth:`${o}px`,transform:`rotate(-90 ${t/2} ${t/2})`,style:{strokeDasharray:s,strokeDashoffset:l}}),i.React.createElement("text",{className:"progress-circle-text",x:"50%",y:"50%",dy:".3em",textAnchor:"middle"},`${n}%`))};qs.defaultProps={size:100,value:0,strokeWidth:2};const Ys=e=>{const{className:t,color:o="primary",type:n="linear",value:r=0,showProgress:a,circleSize:s=100}=e,l=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["className","color","type","value","showProgress","circleSize"]),c=(0,i.classNames)("jimu-progress progress",`progress-${o}`,`progress-${n}`,t),d="circular"===n?i.React.createElement(qs,{size:s,value:r}):i.React.createElement(Gs,{value:r});return i.React.createElement("div",Object.assign({className:c},l),d)},Zs=(0,c.withStyles)(Ys,"Progress");const Ks=e=>{const{className:t,checked:o,disabled:n}=e,r=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["className","checked","disabled"]),a=(0,i.classNames)("jimu-radio",t,o&&"checked",o&&i.INTERACTIVE_CLASS,n&&"disabled");return i.React.createElement("span",{className:a},i.React.createElement(As,Object.assign({type:"radio",role:"radio",checked:o,tabIndex:o?0:-1,disabled:n},r)),i.React.createElement("span",null))};Ks.displayName="_Radio";const Xs=(0,c.withStyles)(i.React.forwardRef(((e,t)=>i.React.createElement(Ks,Object.assign({forwardedRef:t},e)))),"Radio");const Qs=e=>{const{className:t,checked:o,disabled:n}=e,r=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["className","checked","disabled"]),a=(0,i.classNames)("jimu-switch",t,o&&"checked",i.INTERACTIVE_CLASS,n&&"disabled");return i.React.createElement("span",{className:a},i.React.createElement(As,Object.assign({type:"checkbox",role:"switch",checked:o,disabled:n},r)),i.React.createElement("span",{className:"switch-slider"}))};Qs.displayName="_Switch";const Js=(0,c.withStyles)(i.React.forwardRef(((e,t)=>i.React.createElement(Qs,Object.assign({forwardedRef:t},e)))),"Switch");const el=i.React.forwardRef((function(e,t){const{value:o,defaultValue:n,placeholder:r,useFirstOption:a,onChange:s,className:l,buttonProps:c,menuProps:d,name:u,id:p,children:h,menuRole:f}=e,g=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["value","defaultValue","placeholder","useFirstOption","onChange","className","buttonProps","menuProps","name","id","children","menuRole"]);let m=i.React.createElement("span",{className:"placeholder"},r),v=n;a&&!v&&i.React.Children.toArray(h).some((e=>!(!i.React.isValidElement(e)||void 0===e.props.value||(v=e.props.value,0))));const[b,y]=i.React.useState(null!=o?o:v);i.React.useEffect((()=>{y(null!=o?o:v)}),[o]);const w=i.React.Children.map(h,(e=>{if(!i.React.isValidElement(e))return null;const t=(n=o||b,r=e.props.value,void 0!==n&&void 0!==r&&("object"==typeof r&&null!==r?n===r:String(n)===String(r)));var n,r;return t&&(m=e.props.children),i.React.createElement(Ha,Object.assign({},e.props,{"aria-selected":t?"true":void 0,active:t,"data-value":o,onClick:t=>x(e,t)}))})),x=(e,t)=>{var o;const n=null===(o=null==e?void 0:e.props)||void 0===o?void 0:o.value;if(void 0!==n&&b!==n){const o=Object.assign(Object.assign({},t),{target:Object.assign(Object.assign({},t.target),{value:n})});y(n),null==s||s(o,e)}},S=(0,i.classNames)("jimu-input jimu-select",l),O=e.menuRole||"listbox";return i.React.createElement(La,Object.assign({autoWidth:!0},g,{className:S,activeIcon:!0,menuRole:O}),i.React.createElement(Va,Object.assign({name:u,id:p,type:"link",size:e.size},c),m,i.React.createElement("input",{type:"hidden",ref:t,value:null!=b?b:""})),i.React.createElement(Xa,Object.assign({maxHeight:300},d),w))})),tl=i.React.forwardRef((function(e,t){return i.React.createElement(Ha,Object.assign({ref:t},e))})),ol=(0,c.withStyles)(el,"Select"),nl=(0,c.withStyles)(tl,"Option"),rl=i.React.createContext({scope:i.QueryScope.InConfigView});var il=s(30224),al=s.n(il);const sl=e=>{const{className:t}=e,o=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["className"]),n=(0,i.classNames)("jimu-icon-component",t);return i.React.createElement(Ls.Icon,Object.assign({className:n,icon:al()},o))};var ll=s(88866),cl=s.n(ll);const dl=e=>{const{className:t}=e,o=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["className"]),n=(0,i.classNames)("jimu-icon-component",t);return i.React.createElement(Ls.Icon,Object.assign({className:n,icon:cl()},o))};var ul=s(65283),pl=s.n(ul);const hl=e=>{const{className:t}=e,o=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["className"]),n=(0,i.classNames)("jimu-icon-component",t);return i.React.createElement(Ls.Icon,Object.assign({className:n,icon:pl()},o))};var fl=s(87830),gl=s.n(fl);const ml=e=>{const{className:t}=e,o=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["className"]),n=(0,i.classNames)("jimu-icon-component",t);return i.React.createElement(Ls.Icon,Object.assign({className:n,icon:gl()},o))};var vl=s(95884),bl=s.n(vl);const yl=e=>{const{className:t}=e,o=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["className"]),n=(0,i.classNames)("jimu-icon-component",t);return i.React.createElement(Ls.Icon,Object.assign({className:n,icon:bl()},o))};var wl=s(43036),xl=s.n(wl);const Sl=e=>{const{className:t}=e,o=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["className"]),n=(0,i.classNames)("jimu-icon-component",t);return i.React.createElement(Ls.Icon,Object.assign({className:n,icon:xl()},o))};var Ol;!function(e){e.Remote="REMOTE",e.LocalBySearch="LOCAL_BY_SEARCH",e.RemoteBySearch="REMOTE_BY_SEARCH"}(Ol||(Ol={}));const El=[{name:"preventOverflow",options:{altAxis:!0}}],kl={esriFieldTypeOID:32,esriFieldTypeSmallInteger:16,esriFieldTypeInteger:32,esriFieldTypeSingle:128,esriFieldTypeDouble:1024};class Cl extends i.React.PureComponent{constructor(e){var t,o,n;super(e),this.i18nMessage=(e,t)=>this.props.intl.formatMessage({id:e,defaultMessage:Tt[e]},t),this.createDatasources=()=>{this.dsManager&&(this.dataSource=this.dsManager.createLocalDataSource(this.props.dataSource,this.localDsRandomId),this.dataSourceForSearch=this.dsManager.createLocalDataSource(this.props.dataSource,this.localDsRandomId+"-search"))},this.destroyDatasources=()=>{this.dsManager&&(this.dsManager.destroyDataSource(this.dataSource.id),this.dsManager.destroyDataSource(this.dataSourceForSearch.id))},this.isStaticValuesChanged=(e,t)=>{let o=!1;return e||t?e&&t&&e.length===t.length&&(o=!e.some(((e,o)=>e.value!==t[o].value))):o=!0,!o},this.getRealStaticValues=()=>{var e;const{useCodedValues:t=!0}=this.props;return this.props.staticValues||(t?null===(e=this.props.dataSource)||void 0===e?void 0:e.getFieldCodedValueList(this.props.field.jimuName):null)},this.showOutputWarningInBuilder=()=>this.showOutputWarning()&&this.context.scope!==i.QueryScope.InRuntimeView,this.showOutputWarning=()=>{var e;return!this.props.staticValues&&(null===(e=this.props.dataSource.getDataSourceJson())||void 0===e?void 0:e.isOutputFromWidget)},this.getSqlByCascadeAndExcludedValues=()=>{let e=this.props.sql;if(this.props.excludeValues){const t=this.props.excludeValues.filter((e=>e.value!==i.EMPTY_OPTION_VALUE)).map((e=>`${this.props.field.jimuName} <> ${this.props.field.type===i.JimuFieldType.String?"'"+e.value+"'":e.value}`)).join(" AND ");t&&(e=e?`${t} AND (${e})`:t)}return e},this.getIncludedStaticValues=e=>{let t=e;return t&&this.props.excludeValues&&this.props.excludeValues.forEach((e=>{const o=t.findIndex((t=>t.value===e.value));t=o>=0?t.slice(0,o).concat(t.slice(o+1,t.length)):t})),t},this.updateList=(e,t=!1)=>{return o=this,n=void 0,a=function*(){if(this._isMounted&&!this.state.staticValues)return yield Promise.all([t&&i.dataSourceUtils.queryFeatureCountByField(this.props.field,this.dataSource,this.state.sql,this.context.scope,this.context.widgetId),i.dataSourceUtils.queryValueLabelsByFieldAndPageSize(this.props.field,this.dataSource,e*this.state.pageSize,this.props.intl,this.state.sql,this.context.scope,this.context.widgetId)]).then((([o,n])=>{this._isMounted&&(!this.state.list&&this.props.hideSearchInput&&this.setState({autoFocus:!0}),this.setState({count:t?o-n.reducedCount:this.state.count,searchPage:t?1:this.state.searchCount,loaded:!0,page:e,currentList:n.list,list:n.list}))}))},new((r=void 0)||(r=Promise))((function(e,t){function i(e){try{l(a.next(e))}catch(e){t(e)}}function s(e){try{l(a.throw(e))}catch(e){t(e)}}function l(t){var o;t.done?e(t.value):(o=t.value,o instanceof r?o:new r((function(e){e(o)}))).then(i,s)}l((a=a.apply(o,n||[])).next())}));var o,n,r,a},this.updateSearchCount=e=>{this._isMounted&&i.dataSourceUtils.queryFeatureCountByField(this.props.field,this.dataSourceForSearch,e,this.context.scope,this.context.widgetId).then((e=>{this._isMounted&&this.setState({searchCount:e,searchPage:1})}))},this.updateSearchList=(e=this.getKeyWhere(),t=this.state.searchPage+1)=>{this._isMounted&&i.dataSourceUtils.queryValueLabelsByFieldAndPageSize(this.props.field,this.dataSourceForSearch,t*this.state.pageSize,this.props.intl,e,this.context.scope,this.context.widgetId).then((e=>{this._isMounted&&this.setState({loaded:!0,searchPage:t,queryMode:Ol.RemoteBySearch,currentList:e.list,searchList:e.list})}))},this.getKeyWhere=()=>{const e=this.props.field.name;let t="",o=this.searchRef.value;if(o)if(this.props.field.type===i.JimuFieldType.Number)t=`CAST(${e} AS CHAR(${this.numericFieldLength})) LIKE '%${o}%'`;else{o=o.replace(/\'/g,"''");const n=this.isHosted&&i.dataSourceUtils.containsNonLatinCharacter(o)?"N":"";t=this.isHosted?`${e} LIKE ${n}'%${o.trim()}%'`:`UPPER(${e}) LIKE ${n}'%${o.trim().toUpperCase()}%'`}return this.state.sql&&(t=t?`${t} AND (${this.state.sql})`:this.state.sql),t},this.onTogglePopper=e=>{var t;const o=null===(t=null==e?void 0:e.currentTarget)||void 0===t?void 0:t.className;this.props.isMultiple&&o&&o.indexOf("select-item")>-1||(this.props.toggle&&this.props.toggle(!this.state.isOpen),this._isMounted&&(this.state.isOpen?this.setState({isOpen:!1,queryMode:Ol.Remote,isSelectedListShown:!1,currentList:this.state.list}):this.setState({isOpen:!0})))},this.isItemChecked=e=>{let t=!1;const o=this.props.selectedValues?this.props.selectedValues:[];return t=!this.props.isMultiple&&0===o.length&&e===i.EMPTY_OPTION_VALUE||!!o.filter((t=>t.value===e)).length,t},this.onItemClick=(e,t)=>{var o;let n=t?[e]:[];if(this.props.isMultiple)null===(o=this.props.selectedValues)||void 0===o||o.forEach((o=>{(t||!t&&e.value!==o.value)&&n.push({value:o.value,label:o.label,render:o.render})}));else{if(!t)return;this.setState({isOpen:!1}),n.length&&n[0].value===i.EMPTY_OPTION_VALUE&&(n=[])}n=n.length?n:null,this.props&&this.props.onChange(n)},this.onScroll=e=>{const t=e.target,o=t.scrollHeight-t.clientHeight-t.scrollTop<=10;this.state.loaded&&o&&this.loadNextPageData()},this.loadNextPageData=()=>{this.state.queryMode===Ol.Remote?this.state.count>this.state.list.length&&(this.setState({loaded:!1}),this.updateList(this.state.page+1)):this.state.queryMode===Ol.RemoteBySearch&&this.state.searchCount>this.state.pageSize*this.state.searchPage&&(this.setState({loaded:!1}),this.updateSearchList())},this.loadMoreData=()=>{this.setState({loaded:!1});const e=this.getKeyWhere();this.updateSearchCount(e),this.updateSearchList(e,Math.ceil(this.state.currentList.length/this.state.pageSize+1))},this.onTextChange=e=>{var t;const o=e.target.value;if(this.listRef&&(this.listRef.scrollTop=0),""===o)this.setState({queryMode:Ol.Remote,currentList:this.state.list,searchList:[],searchCount:0,searchPage:1});else{const e=null===(t=this.state.list)||void 0===t?void 0:t.filter((e=>e.label.toUpperCase().indexOf(o.toString().toUpperCase())>=0));this.setState({queryMode:Ol.LocalBySearch,currentList:e})}},this.isDataEmpty=()=>{var e;return 0===(null===(e=this.state.currentList)||void 0===e?void 0:e.length)},this.isSearchMoreBtnShown=()=>{var e;return this.state.queryMode===Ol.LocalBySearch&&this.state.count>(null===(e=this.state.list)||void 0===e?void 0:e.length)},this.getAllTag=()=>this.showOutputWarningInBuilder()&&this.props.allTag?this.props.allTag:"allTag",this.getSelectLabel=()=>{var e;const{placeholder:t,selectedValues:o}=this.props,n=!o||0===o.length;if(n&&t)return t;let r="";if(this.props.isMultiple){const e=o?o.length:0;r=this.i18nMessage("numSelected",{number:e})}else{const t=this.getAllTag(),a=null==o?void 0:o[0];if(!this.props.isEmptyOptionHidden&&(n||(null==a?void 0:a.value)===i.EMPTY_OPTION_VALUE&&null===(null==a?void 0:a.label)))r=this.i18nMessage(t);else{const t=null===(e=this.state.staticValues)||void 0===e?void 0:e.find((e=>(null==e?void 0:e.value)===(null==a?void 0:a.value)));r=(null==t?void 0:t.render)?t.render(t):null==a?void 0:a.label}}return r},this.showSelectedList=e=>{var t;const o=e?this.props.selectedValues:this.state.list,n=null===(t=this.searchRef)||void 0===t?void 0:t.value,r=n?null==o?void 0:o.filter((e=>e.label.toUpperCase().indexOf(n.toString().toUpperCase())>=0)):o;this.setState({queryMode:Ol.Remote,isSelectedListShown:e,currentList:r})},this.unCheckAll=()=>{this.showSelectedList(!1),this.props.onChange(null)},this.getDropdownMenuStyle=()=>i.css`
      ${this.buttonRef?`\n          min-width: ${i.polished.rem(this.buttonRef.clientWidth)};\n        `:""}
    `,this.getOutputWarningContainer=e=>{const t=e&&this.isItemChecked(e.value);return(0,i.jsx)("div",{className:"d-flex flex-column ml-2 mr-2 mb-2 output-warning-container"},!this.props.isMultiple&&e&&(0,i.jsx)(Ha,{className:(0,i.classNames)("select-item",{active:t}),onClick:o=>this.onItemClick(e,!t)},(0,i.jsx)("div",{className:(0,i.classNames)({"select-item-placeholder":!t})},t&&(0,i.jsx)(Bs,{className:"mr-2 flex-shrink-0",size:"s"})),(0,i.jsx)("div",{className:(0,i.classNames)("flex-grow-1 text-truncate",{active:t})},this.i18nMessage(this.getAllTag()))),(0,i.jsx)("div",{className:"d-flex mt-2"},(0,i.jsx)(dl,{className:"mr-2 flex-shrink-0 output-warning-color"}),(0,i.jsx)("span",{className:"flex-grow-1"},this.i18nMessage("outputNoValueWarning"))))},this.handelTabEvent=e=>{const t=!this.props.hideSearchInput&&this.searchRef,o=this.props.isMultiple&&!this.props.hideBottomTools&&this.showAllBtn;let n;return"Tab"===e.key&&e.shiftKey?n=t||o:"Tab"!==e.key||e.shiftKey||(n=o||t),!!n&&(e.preventDefault(),n.focus(),!0)},this.searchInputKeyDown=e=>{const{isMultiple:t,hideBottomTools:o}=this.props;"Tab"===e.key&&e.shiftKey&&(!t||o)&&this.firstMenuItem&&(e.preventDefault(),this.firstMenuItem.focus())},this.showAllBtnKeyDown=e=>{"Tab"===e.key&&e.shiftKey&&this.firstMenuItem&&(e.preventDefault(),this.firstMenuItem.focus())},this.isRTL=(0,i.getAppStore)().getState().appContext.isRTL,Cl.count++,this.localDsRandomId=Nl(),this.props.staticValues||(this.dsManager=i.DataSourceManager.getInstance(),this.numericFieldLength=this.props.field.type===i.JimuFieldType.Number&&kl[this.props.field.esriType],this.isHosted=i.dataSourceUtils.isHostedService(this.props.dataSource.url));const r=this.getRealStaticValues(),a=this.getIncludedStaticValues(r);this.state={autoFocus:null!==r||!this.props.hideSearchInput,loaded:!!r,isSelectedListShown:!1,pageSize:a&&a.length>0?a.length:Math.max(null!==(o=null===(t=this.props.dataSource)||void 0===t?void 0:t.getQueryPageSize())&&void 0!==o?o:20,20),currentList:a||[],queryMode:Ol.Remote,count:(null==a?void 0:a.length)||null,page:1,list:a||null,searchCount:null,searchPage:1,searchList:null,isOpen:null!==(n=this.props.isOpen)&&void 0!==n&&n,sql:this.getSqlByCascadeAndExcludedValues(),staticValues:r,filteredStaticValues:a},this._isMounted=!1}componentDidMount(){this._isMounted=!0,this.createDatasources(),this.state.staticValues||this.context.scope!==i.QueryScope.InRuntimeView&&this.props.dataSource.getDataSourceJson().isOutputFromWidget||this.updateList(1,!0)}componentDidUpdate(e,t){var o,n;if(!this._isMounted)return;this.state.isOpen&&!t.autoFocus&&this.state.autoFocus&&i.lodash.defer((()=>{(this.props.hideSearchInput?this.firstMenuItem:this.searchRef).focus()}));const r=this.isStaticValuesChanged(this.props.staticValues,e.staticValues),a=this.props.datasourceInfo!==e.datasourceInfo||this.props.datasourceBelongInfo!==e.datasourceBelongInfo;if(this.props.field!==e.field||r||this.props.sql!==e.sql||a||this.props.excludeValues!==e.excludeValues||this.state.sql!==t.sql||this.state.filteredStaticValues!==t.filteredStaticValues)if(this.listRef&&this.props.isOpen!==e.isOpen&&(this.listRef.scrollTop=0),a&&this.createDatasources(),this.props.staticValues){if(this.props.excludeValues!==e.excludeValues||this.props.staticValues!==e.staticValues){const e=this.getRealStaticValues();return void this.setState({staticValues:e,filteredStaticValues:this.getIncludedStaticValues(e)})}this.setState({loaded:!0,pageSize:null===(o=this.state.filteredStaticValues)||void 0===o?void 0:o.length,count:null===(n=this.state.filteredStaticValues)||void 0===n?void 0:n.length,page:1,currentList:this.state.filteredStaticValues,list:this.state.filteredStaticValues})}else{if(this.props.excludeValues!==e.excludeValues||this.props.sql!==e.sql)return void this.setState({sql:this.getSqlByCascadeAndExcludedValues()});this.updateList(1,!0)}}componentWillUnmount(){var e;this._isMounted=!1,null===(e=this.listRef)||void 0===e||e.removeEventListener("scroll",this.onScroll),this.destroyDatasources()}render(){var e,t;const{className:o,fluid:n,size:r,appendToBody:a,strategy:s,zIndex:l,buttonProps:c,menuProps:d,useKeyUpEvent:u}=this.props,p=this.showOutputWarningInBuilder();let h=this.state.currentList;const f=this.isDataEmpty(),g=!this.props.isEmptyOptionHidden&&!this.props.isMultiple,m=!((null===(e=this.props.excludeValues)||void 0===e?void 0:e.filter((e=>e.value===i.EMPTY_OPTION_VALUE)).length)>0);return g&&m&&(p?h=[{value:i.EMPTY_OPTION_VALUE,label:this.i18nMessage(this.getAllTag())}].concat(h):this.state.queryMode!==Ol.Remote||f||(h=[{value:i.EMPTY_OPTION_VALUE,label:this.i18nMessage("allTag")}].concat(h))),(0,i.jsx)("div",{ref:e=>{this.buttonRef=e},style:this.props.style,className:(0,i.classNames)("jimu-advanced-select",o||"",n?"w-100":"")},(0,i.jsx)(La,{className:"w-100",size:r,direction:"down",fluid:n,toggle:this.onTogglePopper,isOpen:this.state.isOpen,useKeyUpEvent:u,handelTabEvent:this.handelTabEvent},(0,i.jsx)(Va,Object.assign({size:r},c,{className:this.props.isMultiple||1!==(null===(t=this.props.selectedValues)||void 0===t?void 0:t.length)||null!==this.props.selectedValues[0].value?"":"flex-row-reverse"}),this.getSelectLabel()),(0,i.jsx)(Xa,Object.assign({appendToBody:a,strategy:s,zIndex:l+"",className:"shadow-lg",css:this.getDropdownMenuStyle(),modifiers:El,autoFocus:this.state.autoFocus},d),(0,i.jsx)("div",{className:(0,i.classNames)("advanced-select-menu",o||"")},p?(0,i.jsx)(i.React.Fragment,null,this.getOutputWarningContainer(null==h?void 0:h[0])):(0,i.jsx)(i.React.Fragment,null,!this.props.hideSearchInput&&(0,i.jsx)("div",{className:"search-container"},(0,i.jsx)(hs,{prefix:(0,i.jsx)(sl,null),size:"sm",type:"text",defaultValue:"",ref:e=>{this.searchRef=e},onKeyDown:this.searchInputKeyDown,placeholder:this.i18nMessage("SearchLabel"),onChange:this.onTextChange})),(0,i.jsx)("div",{className:"list-container",onScroll:this.onScroll,ref:e=>{this.listRef=e}},f&&this.state.loaded&&(0,i.jsx)("div",{className:"no-data-label"},this.i18nMessage("noData")),h&&h.map(((e,t)=>{if(e&&null!==e.value){const o=this.isItemChecked(e.value),n=e.label||(e.value===i.EMPTY_OPTION_VALUE?this.i18nMessage(this.getAllTag()):e.value);return(0,i.jsx)(Ha,{ref:e=>{0===t&&(this.firstMenuItem=e)},key:t,className:(0,i.classNames)("select-item",{"multiple-item":this.props.isMultiple},{active:o}),toggle:!this.props.isMultiple,onClick:t=>this.onItemClick(e,!o),"aria-checked":o},this.props.isMultiple?(0,i.jsx)(Vs,{checked:o,className:"mr-2"}):(0,i.jsx)("div",{className:(0,i.classNames)({"select-item-placeholder":!o})},o&&(0,i.jsx)(Bs,{className:"jimu-icon-auto-color mr-2 flex-shrink-0",size:"s"})),e.render?e.render(e):(0,i.jsx)("div",{className:(0,i.classNames)("flex-grow-1 text-truncate",{active:o}),title:n},n))}return null})),!this.state.loaded&&(0,i.jsx)("div",{className:"loading-container"},(0,i.jsx)(ss,{type:i.LoadingType.Donut,width:16,height:16})),this.state.loaded&&this.isSearchMoreBtnShown()&&(0,i.jsx)(ye,{type:"link",className:"load-more-btn",size:"sm",onClick:this.loadMoreData},this.i18nMessage("searchMore"))),this.props.isMultiple&&!this.props.hideBottomTools&&(0,i.jsx)("div",{className:"multiple-select-tool"},(0,i.jsx)("div",{className:"d-flex flex-grow-1"},(0,i.jsx)(ye,{icon:!0,size:"sm",type:this.state.isSelectedListShown?"tertiary":"primary",title:this.i18nMessage("showAll"),ref:e=>{this.showAllBtn=e},onClick:e=>this.showSelectedList(!1),onKeyDown:this.showAllBtnKeyDown},(0,i.jsx)(hl,null)),(0,i.jsx)(ye,{icon:!0,type:this.state.isSelectedListShown?"primary":"tertiary",size:"sm",title:this.i18nMessage("showSelection"),onClick:e=>this.showSelectedList(!0),className:"ml-1"},this.isRTL?(0,i.jsx)(yl,null):(0,i.jsx)(ml,null))),(0,i.jsx)(ye,{icon:!0,type:"tertiary",size:"sm",title:this.i18nMessage("clearSelection"),onClick:e=>this.unCheckAll()},(0,i.jsx)(Sl,null))))))))}}Cl.contextType=rl,Cl.count=-1,Cl.a11yCount=0;const Nl=()=>`ADVANCED_SELECT-${Cl.count}`,Tl=i.ReactRedux.connect(((e,t)=>{const o=window.jimuConfig.isBuilder?e.appStateInBuilder:e;return o&&t.dataSource?{datasourceInfo:o.dataSourcesInfo[t.dataSource.id]||null,datasourceBelongInfo:t.dataSource.isDataView?o.dataSourcesInfo[t.dataSource.belongToDataSource.id]:null}:{datasourceInfo:null,datasourceBelongInfo:null}}))(Cl),Rl=(0,c.withStyles)((0,i.injectIntl)(Tl),"AdvancedSelect");var jl=s(94138);const Pl=i.React.createContext({});class $l extends i.React.PureComponent{render(){const e=this.props,{className:t,tabs:o,vertical:n,underline:r,right:a,gap:s,textAlign:l,submenuMode:c,menuOpenMode:d,role:u}=e,p=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["className","tabs","vertical","underline","right","gap","textAlign","submenuMode","menuOpenMode","role"]),h=(0,i.classNames)("jimu-nav",t,n&&"vertical",a&&"right",l&&`text-${l}`,{"nav-underline":r}),f=i.React.createElement(jl.Z,Object.assign({},p,{tabs:o,className:h,vertical:n,role:u}),this.props.children);return i.React.createElement(Pl.Provider,{value:{submenuMode:c,vertical:n,textAlign:l,menuOpenMode:d}},f)}}$l.defaultProps={textAlign:G.CENTER,submenuMode:"dropdown"};const Ml=(0,c.withStyles)($l,"Nav");var Il=s(87719);const Dl=i.React.createContext({});class Al extends i.React.PureComponent{constructor(e){super(e),this.state={isOpen:this.props.isOpen,anchor:null},this.setRef=e=>{this.setState({anchor:e})},this.toggle=this.toggle.bind(this)}toggle(e){this.props.disabled?e.preventDefault():(this.setState((e=>({isOpen:!e.isOpen}))),this.props&&this.props.onToggle&&this.props.onToggle(this.state.isOpen))}getContextValue(){var e,t,o,n;return{ref:this.state.anchor,setRef:this.setRef,toggle:this.toggle,isOpen:void 0!==this.props.isOpen?this.props.isOpen:this.state.isOpen,isDropdown:this.props.dropdown,direction:this.props.direction,textAlign:this.context.textAlign,menuOpenMode:null!==(t=null===(e=this.context)||void 0===e?void 0:e.menuOpenMode)&&void 0!==t?t:"click",menuMode:(null===(o=this.context)||void 0===o?void 0:o.vertical)&&(null===(n=this.context)||void 0===n?void 0:n.submenuMode)||"dropdown"}}render(){const e=this.props,{dropdown:t,toggle:o,isOpen:n,className:r,menuMode:a,menuOpenMode:s}=e,l=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["dropdown","toggle","isOpen","className","menuMode","menuOpenMode"]),c=(0,i.classNames)(r,n&&"active"),d=i.React.createElement(Il.Z,Object.assign({},l,{className:c}));return this.context&&this.context.submenuMode?i.React.createElement(Dl.Provider,{value:this.getContextValue()},d):d}}Al.contextType=Pl;const Ll=s(65085);class zl extends i.React.PureComponent{constructor(e){super(e),this.onClick=this.onClick.bind(this),this.onCaretClick=this.onCaretClick.bind(this),this.onEnter=this.onEnter.bind(this),this.onLeave=this.onLeave.bind(this)}onClick(e){this.props.disabled?e.preventDefault():(this.props.onClick&&this.props.onClick(e),this.context&&"static"!==this.context.menuMode&&"click"===this.context.menuOpenMode&&this.context.toggle(e))}onCaretClick(e){this.props.disabled?e.preventDefault():this.context&&"static"!==this.context.menuMode&&(e.stopPropagation(),e.preventDefault(),this.context.toggle(e))}onEnter(e){if("hover"===this.context.menuOpenMode){if(this.context.isOpen)return;this.context.toggle(e)}}onLeave(e){if("hover"===this.context.menuOpenMode){if(this.context.isOpen)return;this.context.toggle(e)}}render(){const e=this.props,{className:t,disabled:o,active:n,innerRef:r,href:a,to:s,icon:l,iconPosition:c,iconSize:d,caret:u,children:p}=e,h=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["className","disabled","active","innerRef","href","to","icon","iconPosition","iconSize","caret","children"]),f=(0,i.classNames)(t,"nav-link","jimu-outline-inside",{"with-caret":u},{disabled:o,active:n}),g=o?Object.assign({disabled:o,tabIndex:o&&-1},h.themeStyle):h.themeStyle,m=i.React.createElement(i.React.Fragment,null,l&&("start"===c||"above"===c)&&i.React.createElement(Hn,{icon:l,size:d}),p,l&&"end"===c&&i.React.createElement(Hn,{className:"right-icon",icon:l,size:d}));return"static"!==this.context.menuMode?u?i.React.createElement(hr,Object.assign({},h,{to:s||a,innerRef:r,onMouseEnter:this.onEnter,onMouseLeave:this.onLeave,onClick:this.onClick,className:f,themeStyle:g}),i.React.createElement("span",{className:"jimu-nav-link-wrapper"},m,i.React.createElement(Dl.Consumer,null,(({setRef:e})=>i.React.createElement("span",{role:"button",className:"nav-link-caret-btn",ref:e,onClick:this.onCaretClick},i.React.createElement(Hn,{className:"caret-icon",icon:Ll,size:"10"})))))):i.React.createElement(Dl.Consumer,null,(({setRef:e})=>i.React.createElement(hr,Object.assign({},h,{to:s||a,innerRef:e,onMouseEnter:this.onEnter,onMouseLeave:this.onLeave,onClick:this.onClick,className:f,themeStyle:g}),i.React.createElement("span",{className:"jimu-nav-link-wrapper"},m)))):i.React.createElement(hr,Object.assign({},h,{to:s||a,innerRef:r,onClick:this.onClick,className:f,themeStyle:g}),i.React.createElement("span",{className:"jimu-nav-link-wrapper"},m,u&&"static"!==this.context.menuMode&&i.React.createElement(Hn,{className:"caret-icon",icon:Ll,size:"10"})))}}zl.contextType=Dl,zl.defaultProps={tag:"a",iconPosition:"start"};const _l=i.React.forwardRef(((e,t)=>i.React.createElement(zl,Object.assign({innerRef:t},e))));_l.displayName="_NavLink";const Bl=(0,c.withStyles)(_l,"NavLink");var Fl=s(48661);const Ul={up:"top",left:"left",right:"right",down:"bottom"},Hl=[{name:"flip",enabled:!1}],Wl=[{name:"preventOverflow",options:{boundariesElement:document&&document.body}}];class Vl extends i.React.PureComponent{constructor(e){super(e),this.onClick=this.onClick.bind(this),this.onLeave=this.onLeave.bind(this)}onClick(e){var t,o,n,r;"dropdown"===this.context.menuMode&&(null===(o=null===(t=this.context)||void 0===t?void 0:t.toggle)||void 0===o||o.call(t,e)),null===(r=null===(n=this.props)||void 0===n?void 0:n.onClick)||void 0===r||r.call(n,e)}onLeave(e){var t,o,n,r;"hover"===this.context.menuOpenMode&&(null===(o=null===(t=this.context)||void 0===t?void 0:t.toggle)||void 0===o||o.call(t,e)),null===(r=null===(n=this.props)||void 0===n?void 0:n.onMouseLeave)||void 0===r||r.call(n,e)}render(){var e;const t=this.props,{appendToBody:o,className:n,right:r,flip:a,tag:s,modifiers:l}=t,c=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(t,["appendToBody","className","right","flip","tag","modifiers"]),d=(0,i.classNames)("jimu-dropdown-menu","dropdown-menu",`indent-${this.context.textAlign}`,this.context.textAlign&&`text-${this.context.textAlign}`,n,{"dropdown-menu-right":r,show:this.context.isOpen,"dropdown-menu-inline":"dropdown"!==this.context.menuMode});if("dropdown"!==this.context.menuMode)return"foldable"===this.context.menuMode?i.React.createElement(Fl.Z,{isOpen:this.context.isOpen},i.React.createElement(s,Object.assign({tabIndex:-1,role:"menu"},c,{"aria-hidden":!this.context.isOpen,className:d,onMouseLeave:this.onLeave}))):i.React.createElement(s,Object.assign({tabIndex:-1,role:"menu"},c,{className:d}));if(this.context.isOpen){const t=`${Ul[this.context.direction]||"bottom"}-${r?"end":"start"}`,n=a?[...Wl,...l||[]]:[...Wl,...l||[],...Hl];return i.React.createElement(pn,{open:!0,placement:t,modifiers:n,reference:this.context&&this.context.ref,disablePortal:!o,className:d,toggle:null===(e=this.context)||void 0===e?void 0:e.toggle},i.React.createElement("div",Object.assign({tabIndex:-1,role:"menu"},c,{"aria-hidden":!this.context.isOpen,onClick:this.onClick,onMouseLeave:this.onLeave}),i.React.createElement(s,{className:"dropdown-menu--inner"},this.props.children)))}return null}}Vl.defaultProps={appendToBody:!0,flip:!0,tag:"ul"},Vl.contextType=Dl;const Gl=(0,c.withStyles)(Vl,"NavMenu");var ql=s(55339),Yl=s.n(ql);const Zl=e=>{const{className:t}=e,o=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["className"]),n=(0,i.classNames)("jimu-icon-component",t);return i.React.createElement(Ls.Icon,Object.assign({className:n,icon:Yl()},o))};const Kl=e=>{const{className:t,closeable:o,active:n,id:r,title:a,onClick:s,onClose:l,disabled:c}=e,d=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["className","closeable","active","id","title","onClick","onClose","disabled"]);return i.React.createElement(Al,{className:(0,i.classNames)(t,"text-truncate",{closeable:o}),tag:"div"},i.React.createElement(Bl,Object.assign({"aria-selected":n,tabIndex:n?0:-1,id:r,title:a,className:(0,i.classNames)({active:n}),onClick:s,disabled:c,role:"tab"},d),i.React.createElement("span",{className:"tab-title"},a),o&&i.React.createElement(ye,{icon:!0,size:"sm",type:"tertiary",onClick:e=>{e.stopPropagation(),e.preventDefault(),null==l||l(r)},className:"tab-close"},i.React.createElement(Zl,{size:"s"}))))},Xl=e=>{const{className:t,children:o}=e;return i.React.createElement("div",{className:(0,i.classNames)("tab-content flex-grow-1 d-flex",t)},o)};const Ql=e=>{const{className:t,children:o,active:n,keepMount:r}=e,a=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["className","children","active","keepMount"]),s=(0,i.classNames)("tab-pane","mw-100",t,{active:n},{"d-none":!n});return i.React.createElement("div",Object.assign({role:"tabpanel","aria-hidden":!n,hidden:!n,className:s},a),(n||r)&&o)};const Jl=s(9553),ec=s(91116),tc=R(Jl,"left-arrow",12),oc=R(ec,"right-arrow",12),nc=e=>{var t,o;const{children:n,className:r,vertical:a,onChange:s,disablePrevious:l,disableNext:c,previousIcon:d=tc,nextIcon:u=oc,previousText:p,previousTitle:h,previousAriaLabel:f,nextText:g,nextTitle:m,nextAriaLabel:v,previousStyle:b,nextStyle:y,type:w="primary"}=e,x=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["children","className","vertical","onChange","disablePrevious","disableNext","previousIcon","nextIcon","previousText","previousTitle","previousAriaLabel","nextText","nextTitle","nextAriaLabel","previousStyle","nextStyle","type"]);return i.React.createElement("div",Object.assign({className:(0,i.classNames)("nav-button-group",r)},x),i.React.createElement(ye,{"aria-label":f,vertical:a,style:b,title:h,className:"previous",disabled:l,type:w,size:"sm",icon:!0,onClick:()=>s(!0)},d&&i.React.createElement(Hn,{autoFlip:!0,rotate:a?90:0,icon:null==d?void 0:d.svg,size:null===(t=null==d?void 0:d.properties)||void 0===t?void 0:t.size}),p),n,i.React.createElement(ye,{"aria-label":v,vertical:a,style:y,title:m,className:"next",disabled:c,type:w,size:"sm",icon:!0,onClick:()=>s(!1)},g,u&&i.React.createElement(Hn,{autoFlip:!0,icon:null==u?void 0:u.svg,rotate:a?90:0,size:null===(o=null==u?void 0:u.properties)||void 0===o?void 0:o.size})))},rc=(0,c.withStyles)(nc,"NavButtonGroup"),ic=e=>(1+Math.sin(Math.PI*e-Math.PI/2))/2,ac=(e,t,o,n={},r=(e=>{}))=>{const{ease:i=ic,duration:a=300}=n;let s=null;const l=t[e];let c=!1;const d=()=>{c=!0},u=n=>{if(c)return void r(new Error("Animation cancelled"));null===s&&(s=n);const d=Math.min(1,(n-s)/a);t[e]=i(d)*(o-l)+l,d>=1?requestAnimationFrame((()=>{r(null)})):requestAnimationFrame(u)};return l===o?(r(new Error("Element already at target position")),d):(requestAnimationFrame(u),d)};let sc;const lc=(e,t)=>{const o=e.scrollLeft;if(!t)return o;switch((()=>{if(sc)return sc;const e=document.createElement("div");return e.appendChild(document.createTextNode("ABCD")),e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e),sc="reverse",e.scrollLeft>0?sc="default":(e.scrollLeft=1,0===e.scrollLeft&&(sc="negative")),document.body.removeChild(e),sc})()){case"negative":return e.scrollWidth-e.clientWidth+o;case"reverse":return e.scrollWidth-e.clientWidth-o;default:return o}};const{useRef:cc,useEffect:dc,useMemo:uc,useState:pc}=i.React,hc=e=>{var t,o;const{className:n,vertical:r=!1,duration:a=300,hideArrow:s=!1,autoArrow:l=!0,children:c,items:d,useWhell:u=!1}=e,p=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["className","vertical","duration","hideArrow","autoArrow","children","items","useWhell"]),[h,f]=pc(0),g=(e=>uc((()=>i.css`
      display: flex;
      overflow: hidden;
      min-height: 20px;
      /* Add iOS momentum scrolling. */
      -webkit-overflow-scrolling: touch;
      > button {
        &:focus {
          outline: none;
        }
        flex-grow: 0;
        flex-shrink: 0;
        padding: ${e?"0.2rem 0.5rem":"0.5rem 0.2rem"};
        width: ${e?"unset":"20px"};
        height: ${e?"20px":"unset"};
        flex-shrink: 0;
        flex-grow: 0;
      }
      .root {
        width: ${e?"100%":"unset"};
        height: ${e?"unset":"100%"};
        position: relative;
        display: inline-block;
        flex: 1 1 auto;
        white-space: nowrap;
        overflow-x: ${e?"hidden":"scroll"};
        overflow-y: ${e?"scroll":"hidden"};
        /* Firefox */
        scrollbar-width: none;
        /* Safari + Chrome */
        &::-webkit-scrollbar {
          display: none;
        }
        /* for edge */
        -ms-overflow-style: none;
        > .list {
          flex-direction: ${e?"column":"row"};
          min-width: 100%;
          min-height: 100%;
          width: fit-content;
          display: flex;
          align-items: center;
        }
      }
    `),[e]))(r),m=null===(o=null===(t=(0,i.getAppStore)().getState())||void 0===t?void 0:t.appContext)||void 0===o?void 0:o.isRTL,v=r?"scrollTop":"scrollLeft",b=r?"top":"left",y=r?"bottom":"right",w=r?"clientHeight":"clientWidth",x=cc(null),S=cc(null),[O,E]=i.React.useState({previous:!1,next:!0}),k=e=>ac(v,x.current,e,{duration:a},N),C=e=>{const t=x.current[w]*(e?-1:1);let o=x.current[v];o+=r?t:t*(m?-1:1),k(o)},N=Wt((()=>{const{scrollTop:e,scrollHeight:t,clientHeight:o,scrollWidth:n,clientWidth:i}=x.current;let a,s;if(r)a=e>1,s=e<t-o-1;else{const e=lc(x.current,m);a=m?e<n-i-1:e>1,s=m?e>1:e<n-i-1}a===O.previous&&s===O.next||E({previous:a,next:s})}));dc((()=>{const e=i.lodash.debounce(f,500),t=new i.ResizeObserver((()=>{e((e=>e+1))}));t.observe(x.current);const o=new i.ResizeObserver((()=>{e((e=>e+1))}));return o.observe(S.current),()=>{t.disconnect(),o.disconnect(),null==e||e.cancel()}}),[]),dc((()=>{N()}),[h,N]);const T={visibility:l?O.previous?"visible":"hidden":"visible",display:s?"none":""},R={visibility:l?O.next?"visible":"hidden":"visible",display:s?"none":""};return(0,i.jsx)(rc,Object.assign({},p,{"data-version":h,css:g,type:"tertiary",previousStyle:T,nextStyle:R,vertical:r,onChange:C,className:(0,i.classNames)("scroll-list",n)}),(0,i.jsx)("div",{className:"root",ref:x,onWheel:e=>{if(!u)return;const t=e.deltaY<0;!O.previous&&t||(O.next||t)&&C(t)}},(0,i.jsx)("div",{className:"list",role:"tablist",ref:S},d.map((e=>{var t;const o=(0,i.classNames)("scroll-item",null===(t=e.props)||void 0===t?void 0:t.className);return i.React.cloneElement(e,Object.assign(Object.assign({},e.props),{className:o,onClick:t=>{var o,n;"function"==typeof(null===(o=e.props)||void 0===o?void 0:o.onClick)&&(null===(n=e.props)||void 0===n||n.onClick(t)),(e=>{const t=x.current,o=e.currentTarget;if(!t||!o)return;const n=(e=>{let t;if(e){const o=e.getBoundingClientRect();t={clientWidth:e.clientWidth,scrollLeft:e.scrollLeft,scrollTop:e.scrollTop,scrollWidth:e.scrollWidth,top:o.top,bottom:o.bottom,left:o.left,right:o.right}}return t})(x.current),r=e.currentTarget.getBoundingClientRect();if(r[b]<n[b]){const e=n[v]+(r[b]-n[b]);k(e)}else if(r[y]>n[y]){const e=n[v]+(r[y]-n[y]);k(e)}})(t)}}))})))))},fc=e=>{const t=Yt();return(0,i.jsx)(hc,Object.assign({hideArrow:t},e))};const{useRef:gc,useMemo:mc,useImperativeHandle:vc,useState:bc,useEffect:yc}=i.React,{useSelector:wc}=i.ReactRedux,xc=i.css`
  overflow-x: scroll;
  /* Firefox */
  scrollbar-width: none;
  /* Safari + Chrome */
  &::-webkit-scrollbar {
    display: none;
  }

  /* for edge */
  -ms-overflow-style: none;
`,Sc=i.React.forwardRef(((e,t)=>{const{className:o,duration:n=300,horizontal:r=!1,children:a,version:s}=e,l=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["className","duration","horizontal","children","version"]),c=(e=>mc((()=>i.css`
      overflow: hidden;
      min-height: 20px;
      width: 100%;
      height: 100%;
      /* Add iOS momentum scrolling. */
      -webkit-overflow-scrolling: touch;
      .scroll-root {
        width: ${e?"100%":"unset"};
        height: ${e?"unset":"100%"};
        white-space: nowrap;
        ${xc};
        > .scroll-container {
          min-width: 100%;
          min-height: 100%;
          width: fit-content;
        }
      }
    `),[e]))(r),d=wc((e=>e.appContext.isRTL)),u=r?"scrollLeft":"scrollTop",p=r?"clientWidth":"clientHeight",h=gc(null),[f,g]=bc(!0),[m,v]=bc(!1),[b,y]=bc(!1),w=gc(null),x=Wt((()=>{const{scrollTop:e,scrollHeight:t,clientHeight:o,scrollWidth:n,clientWidth:i}=h.current;let a,s,l;if(r){const e=lc(h.current,d);a=d?Math.abs(e-(e-i))<=1:e<=1,s=d?e<=1:Math.abs(e-(e-i))<=1,l=n>i}else a=e<=1,s=Math.abs(e-(t-o))<=1,l=t>o;a!==f&&g(a),s!==m&&v(s),l!==b&&y(l)}));yc((()=>(w.current=i.lodash.debounce(x,300),()=>{var e;null===(e=w.current)||void 0===e||e.cancel()})),[x]),Ft((()=>{x()}),[x,s]),vc(t,(()=>({scrollable:b,scroll:S,topping:f,bottoming:m,ref:h})));const S=e=>{const t=h.current[p]*(e?-1:1);let o=h.current[u];o+=r?t*(d?-1:1):t,ac(u,h.current,o,{duration:n},x)};return(0,i.jsx)("div",Object.assign({css:c,className:(0,i.classNames)("scroll",o)},l),(0,i.jsx)("div",{className:"scroll-root",ref:h,onScroll:w.current},a))}));let Oc=0;const Ec=(e,t)=>`${e}-tab-pane-${t}`,kc=(e,t)=>`${e}-${t}`,Cc=e=>{const{className:t,type:o,fill:n,value:r,defaultValue:a,children:s,onChange:l,onClose:c,keepMount:d=!0,scrollable:u=!1}=e,p=i.React.useRef(Oc+"");Ut((()=>{Oc++}));const[h,f]=Vt({controlled:r,default:a}),g=i.React.useRef(null),m=i.React.Children.map(s,(e=>{if(i.React.isValidElement(e))return e})).filter((e=>!!e)),v=m.map((e=>e.props.id)),b=v.includes(h)?h:v[0],y=e=>{b!==e&&(f(e),null==l||l(e))},w=e=>{if(!v.length)return;const t=v.indexOf(b);return t<0?0:0===t&&e?v.length-1:t!==v.length-1||e?e?t-1:t+1:0},x=e=>{var t,o;const n=e.key;if("ArrowLeft"===n||"ArrowRight"===n){let n;e.preventDefault(),e.stopPropagation(),"ArrowLeft"===e.key?n=w(!0):"ArrowRight"===e.key&&(n=w(!1)),y(v[n]),null===(o=null===(t=g.current.querySelectorAll('[role="tab"]'))||void 0===t?void 0:t[n])||void 0===o||o.focus()}},S=m.map(((e,t)=>{var o;const n=e.props,r=null!==(o=n.id)&&void 0!==o?o:t+"",a=b===r,s=Ec(r,p.current),l=kc(r,p.current);return i.React.createElement(Kl,Object.assign({key:t},n,{id:l,"aria-controls":s,active:a,onClose:()=>(e=>{null==c||c(e)})(n.id),onClick:()=>y(n.id),onKeyDown:x}))}));return i.React.createElement("div",{className:(0,i.classNames)(t,"jimu-tab d-flex flex-column"),ref:g},i.React.createElement(Ml,{underline:"underline"===o,tabs:"tabs"===o,pills:"pills"===o,fill:n,className:"tab-nav",role:"tablist","aria-label":e["aria-label"],"aria-orientation":"horizontal"},u?i.React.createElement(fc,{useWhell:!0,autoArrow:!0,items:S,vertical:!1}):S),i.React.createElement(Xl,null,m.map(((e,t)=>{var o;const n=null!==(o=e.props.id)&&void 0!==o?o:t+"",r=e.props.children,a=b===n,s=Ec(n,p.current),l=kc(n,p.current);return i.React.createElement(Ql,{active:a,key:n,id:s,"aria-labelledby":l,className:"flex-grow-1",keepMount:d},r)}))))},Nc=(0,c.withStyles)(Cc,"Tabs");const Tc=e=>{var t,o;const{iconSize:n="small",widgetId:r,className:a,icon:s,message:l,style:c,autoFlip:d=!1}=e,u=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["iconSize","widgetId","className","icon","message","style","autoFlip"]),p=(e=>i.css`
    pointer-events: none;
    background-color: var(--light-200);
    border: 1px solid var(--light-800);
    width: 100%;
    height: 100%;
    color: var(--dark-600);
    padding: ${"large"===e?"2.5%":"0px"};
    .picture-wrapper, .thumbnail-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }
    .picture-wrapper {
      .jimu-icon{
        color: var(--light-600);
      }
    }
    .thumbnail-wrapper {
      flex-direction: column;
      .jimu-icon{
        color: var(--dark-600);
      }
    }
  `)(n),h=null===(o=null===(t=(0,i.getAppStore)().getState())||void 0===t?void 0:t.appContext)||void 0===o?void 0:o.isInBuilder;return(0,i.jsx)("div",Object.assign({css:p},u,{className:(0,i.classNames)("jimu-widget-placeholder",a)}),"large"===n&&(0,i.jsx)("div",{className:"picture-wrapper"},(0,i.jsx)(Hn,{icon:s,className:"w-100 h-100",autoFlip:d})),"small"===n&&(0,i.jsx)("div",{className:"thumbnail-wrapper"},(0,i.jsx)(Hn,{icon:s,size:"l",autoFlip:d}),h&&(0,i.jsx)("div",{className:"message-wrapper text-center mt-2"},l)))};let Rc=!0,jc=!1,Pc=null;const $c={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function Mc(e){e.metaKey||e.altKey||e.ctrlKey||(Rc=!0)}function Ic(){Rc=!1}function Dc(){"hidden"===this.visibilityState&&jc&&(Rc=!0)}function Ac(){const e=i.React.useCallback((e=>{var t;null!=e&&((t=e.ownerDocument).addEventListener("keydown",Mc,!0),t.addEventListener("mousedown",Ic,!0),t.addEventListener("pointerdown",Ic,!0),t.addEventListener("touchstart",Ic,!0),t.addEventListener("visibilitychange",Dc,!0))}),[]),t=i.React.useRef(!1);return{isFocusVisibleRef:t,onFocus:function(e){return!!function(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch(e){}return Rc||function(e){const{type:t,tagName:o}=e;return!("INPUT"!==o||!$c[t]||e.readOnly)||"TEXTAREA"===o&&!e.readOnly||!!e.isContentEditable}(t)}(e)&&(t.current=!0,!0)},onBlur:function(){return!!t.current&&(jc=!0,window.clearTimeout(Pc),Pc=window.setTimeout((()=>{jc=!1}),100),t.current=!1,!0)},ref:e}}let Lc=!1,zc=null;function _c(){Lc=!1,clearTimeout(zc)}function Bc(e,t){return o=>{t&&t(o),e(o)}}const Fc=i.React.forwardRef(((e,t)=>{const{showArrow:o=!1,children:n,describeChild:r=!1,disableFocusListener:a=!1,disableHoverListener:s=!1,disableTouchListener:l=!1,enterDelay:c=100,enterNextDelay:d=0,enterTouchDelay:u=700,interactive:p=!1,followCursor:h=!1,id:f,leaveDelay:g=0,leaveTouchDelay:m=1500,onOpen:v,onClose:b,open:y,placement:w="top",title:x,role:S="tooltip",className:O,arrowStyle:E}=e,k=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["showArrow","children","describeChild","disableFocusListener","disableHoverListener","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","interactive","followCursor","id","leaveDelay","leaveTouchDelay","onOpen","onClose","open","placement","title","role","className","arrowStyle"]),C=i.React.useRef(!1),[N,T]=i.React.useState(),R=!p||h,j=i.React.useRef(),P=i.React.useRef(),$=i.React.useRef(),M=i.React.useRef(),[I,D]=Vt({controlled:y,default:!1});let A=I;const{current:L}=i.React.useRef(void 0!==y);i.React.useEffect((()=>{N&&N.disabled&&!L&&""!==x&&"button"===N.tagName.toLowerCase()&&console.error(["You are providing a disabled `button` child to the Tooltip component.","A disabled element does not fire events.","Tooltip needs to listen to the child element's events to display the title.","","Add a simple wrapper element, such as a `span`."].join("\n"))}),[x,N,L]);const z=(e=>{const[t,o]=i.React.useState(e),n=e||t;return i.React.useEffect((()=>{null==t&&o(`tooltip-${Math.round(1e9*Math.random())}`)}),[t]),n})(f),_=i.React.useCallback((()=>{clearTimeout(M.current)}),[]);i.React.useEffect((()=>()=>{clearTimeout(j.current),clearTimeout(P.current),clearTimeout($.current),_()}),[_]);const B=e=>{clearTimeout(zc),Lc=!0,D(!0),v&&!A&&v(e)},F=Wt((e=>{clearTimeout(zc),zc=setTimeout((()=>{Lc=!1}),800+g),D(!1),b&&A&&b(e),clearTimeout(j.current),j.current=setTimeout((()=>{C.current=!1}),150)})),U=e=>{C.current&&"touchstart"!==e.type||(N&&N.removeAttribute("title"),clearTimeout(P.current),clearTimeout($.current),c||Lc&&d?P.current=setTimeout((()=>{B(e)}),Lc?d:c):B(e))},H=e=>{clearTimeout(P.current),clearTimeout($.current),$.current=setTimeout((()=>{F(e)}),g)},{isFocusVisibleRef:W,onBlur:V,onFocus:G,ref:q}=Ac(),[,Y]=i.React.useState(!1),Z=e=>{V(),W.current||(Y(!1),H(e))},K=e=>{N||T(e.currentTarget),G(e),W.current&&(Y(!0),U(e))},X=e=>{C.current=!0;const t=n.props;t.onTouchStart&&t.onTouchStart(e)},Q=U,J=H;i.React.useEffect((()=>{if(A)return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)};function e(e){"Escape"!==e.key&&"Esc"!==e.key||F(e)}}),[F,A]);const ee=Lt(T,t),te=Lt(q,ee),oe=Lt(n.ref,te);""===x&&(A=!1);const ne=i.React.useRef({x:0,y:0}),re=i.React.useRef(),ie={},ae="string"==typeof x;r?(ie.title=A||!ae||s?null:x,ie["aria-describedby"]=A?z:null,ie["aria-label"]=ae?x:null):(ie["aria-label"]=ae?x:null,ie["aria-labelledby"]=A&&!ae?z:null);const se=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},ie),k),n.props),{className:n.props.className,onTouchStart:X,ref:oe}),h?{onMouseMove:e=>{const t=n.props;t.onMouseMove&&t.onMouseMove(e),ne.current={x:e.clientX,y:e.clientY},re.current&&re.current.update()}}:{}),le={};l||(se.onTouchStart=e=>{X(e),clearTimeout($.current),clearTimeout(j.current),_(),M.current=setTimeout((()=>{U(e)}),u)},se.onTouchEnd=e=>{n.props.onTouchEnd&&n.props.onTouchEnd(e),clearTimeout(M.current),clearTimeout($.current),$.current=setTimeout((()=>{F(e)}),m)}),s||(se.onMouseOver=Bc(Q,se.onMouseOver),se.onMouseLeave=Bc(J,se.onMouseLeave),R||(le.onMouseOver=Q,le.onMouseLeave=J)),a||(se.onFocus=Bc(K,se.onFocus),se.onBlur=Bc(Z,se.onBlur),R||(le.onFocus=K,le.onBlur=Z)),n.props.title&&console.error(["You have provided a `title` prop to the child of <Tooltip />.",`Remove this title prop \`${n.props.title}\` or the Tooltip component.`].join("\n"));const ce=h?{isVirtualReference:!0,getBoundingClientRect:()=>({top:ne.current.y,left:ne.current.x,right:ne.current.x,bottom:ne.current.y,width:0,height:0})}:N,de=i.React.useMemo((()=>{var e,t,o,n,r,a,s;if(E)return E;const l=null===(t=null===(e=(0,i.getAppStore)().getState().theme)||void 0===e?void 0:e.components)||void 0===t?void 0:t.tooltip;return l&&{background:null===(o=l.arrow)||void 0===o?void 0:o.color,border:{color:null===(r=null===(n=l.arrow)||void 0===n?void 0:n.border)||void 0===r?void 0:r.color,width:null===(s=null===(a=l.arrow)||void 0===a?void 0:a.border)||void 0===s?void 0:s.width},size:8}}),[E]),ue=((e,t)=>i.React.useMemo((()=>i.css`
      z-index: 2001;
      pointer-events: none;
      ${!e&&i.css`
        pointer-events: auto;
      `}
      ${!t&&i.css`
        pointer-events: none;
      `}
    `),[e,t]))(R,A),pe=(0,i.classNames)(O,{interactive:!R});return(0,i.jsx)(i.React.Fragment,null,i.React.cloneElement(n,se),(0,i.jsx)(pn,Object.assign({role:S,css:ue,floating:!1,arrowStyle:de,showArrow:o,disableOverlayManager:!0,className:pe,placement:w,reference:ce,ref:re,open:!!N&&A,id:z,toggle:F,trapFocus:!1,autoFocus:!1},k,le),!ae&&x,ae&&(0,i.jsx)("div",{className:"plain-tooltip"},x)))})),Uc=(0,c.withStyles)(Fc,"Tooltip");var Hc=s(52474);function Wc(e,t){return e&&e.indexOf(t)===e.length-1}function Vc(e,t){return e&&e.includes(t)}const Gc=i.React.memo((e=>{let{onClosed:t,onOpened:o,zIndex:n,onMouseDown:r,disableActivateOverlay:a,modalClassName:s}=e,l=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["onClosed","onOpened","zIndex","onMouseDown","disableActivateOverlay","modalClassName"]);const c=i.ReactRedux.useSelector((e=>e.overlays)),d=i.ReactRedux.useDispatch(),u=i.React.useRef(null),p=i.React.useRef();i.React.useEffect((()=>{const e=(0,i.getAppStore)().getState().overlays;p.current=i.utils.getOverlayUniqueId("modal",e)}),[]);const h=i.React.useContext(Qo);return n=i.React.useMemo((()=>{if("zIndex"in e)return e.zIndex;const t=(null==c?void 0:c.indexOf(p.current))+Uo;return t>=Uo?t:void 0}),[c,p.current,e.zIndex]),i.React.createElement(Hc.Z,Object.assign({},l,{onClosed:()=>{Vc(c,p.current)&&d(i.appActions.closeOverlay(p.current)),t&&t()},onOpened:()=>{Vc(c,p.current)?Wc(c,p.current)||d(i.appActions.activeOverlay(p.current)):d(i.appActions.openOverlay(p.current)),o&&o()},zIndex:n,onMouseUp:e=>{var t,o;a||(null===(o=null===(t=u)||void 0===t?void 0:t.current)||void 0===o?void 0:o.contains(e.target))&&(e.stopPropagation(),e.nativeEvent.stopPropagation(),Wc(c,p.current)||d(i.appActions.activeOverlay(p.current)))},onMouseDown:e=>{h&&(h.current=e.target)},innerRef:u,modalClassName:s?`${s} jimu-outline-inside`:"jimu-outline-inside"}))}));Gc.displayName="_Modal";const qc=(0,c.withStyles)(Gc,"Modal");var Yc=s(20695);class Zc extends i.React.PureComponent{render(){var e,t;const o=this.props,{closeIcon:n}=o,r=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(o,["closeIcon"]);let a,s;return"string"==typeof n||"number"==typeof n?a=n:s=i.React.createElement("button",{type:"button",onClick:this.props.toggle,className:"close","aria-label":null===(e=i.i18n.getIntl())||void 0===e?void 0:e.formatMessage({id:"close",defaultMessage:i.defaultMessages.close}),title:null===(t=i.i18n.getIntl())||void 0===t?void 0:t.formatMessage({id:"close",defaultMessage:i.defaultMessages.close})},n),i.React.createElement(Yc.Z,Object.assign({},r,{close:s,charCode:a}))}}Zc.defaultProps={closeIcon:i.React.createElement(Hn,{icon:s(98912)})};var Kc=s(68975),Xc=s(15549);const Qc=qc;var Jc=s(79964),ed=s.n(Jc);const td=e=>{const{className:t}=e,o=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["className"]),n=(0,i.classNames)("jimu-icon-component",t);return i.React.createElement(Ls.Icon,Object.assign({className:n,icon:ed()},o))},od="confirm-delete-widget";function nd(e){return i.i18n.getIntl().formatMessage({id:e})}function rd(e){const{title:t,content:o,level:n="warning",onClose:r,onConfirm:a,confirmLabel:s=nd("yes"),cancelLabel:l=nd("no"),hasNotShowAgainOption:c=!0}=e,d=i.React.useRef(),u="info"===n?"var(--warning-600)":"var(--danger)",p="info"===n?"primary":"danger";return(0,i.jsx)(Qc,{isOpen:!0,centered:!0,css:i.css`
    .modal-body{
      overflow-y: auto;
      max-height: 360px;
      padding: 0;
    }
    .modal-content{
      width: auto;
      background: var(--white);
      padding: 30px;
      border: none;
    }
    .modal-footer{
      padding: 0;
      margin-top: 30px;
      .btn {
        min-width: 80px;
        + .btn {
          margin-left: 10px;
        }
      }
    }
    &.modal-dialog{
      width: auto;
    }

    .title-icon {
      padding: 0 6px;
    }
    .title-label {
      font-size: 1rem;
      color: var(--black);
    }

    .message {
      margin-left: 36px;
      margin-top: 1rem;
    }
  `},(0,i.jsx)(Kc.Z,null,(0,i.jsx)("div",{className:"d-flex align-items-start"},(0,i.jsx)("div",{className:"title-icon"},(0,i.jsx)(td,{size:"l",color:u})),(0,i.jsx)("div",{className:"title-label"},t)),(0,i.jsx)("div",{className:"message"},(0,i.jsx)("div",{"data-testid":"confirmDeleteMessage",className:"font-body2",css:i.css`
              color: var(--dark-800);
            `},o),c&&(0,i.jsx)("div",{css:i.css`margin-top: 1.5rem;`},(0,i.jsx)(Ea,{check:!0,className:"justify-content-start align-items-start",css:i.css`
                  color: var(--black);
                `},(0,i.jsx)(Vs,{"data-testid":"dontShowAgain",style:{cursor:"pointer"},className:"mr-2",ref:d}),nd("dialogPreventDisplayAgainDefaultText"))))),(0,i.jsx)(Xc.Z,null,(0,i.jsx)(ye,{"data-testid":"confirmBtn",type:p,onClick:()=>{a(!!c&&d.current.checked)}},s),(0,i.jsx)(ye,{"data-testid":"cancelBtn",onClick:r},l)))}var id=function(e,t,o,n){return new(o||(o=Promise))((function(r,i){function a(e){try{l(n.next(e))}catch(e){i(e)}}function s(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,s)}l((n=n.apply(e,t||[])).next())}))};const ad=s(21714),sd=s(62437);class ld extends i.React.PureComponent{constructor(e){super(e),this.onDropDownToggle=()=>{this.state.isOpen||(this.setState({loading:!0}),i.DataActionManager.getInstance().getSupportedActions(this.props.widgetId,this.props.dataSource,this.props.records).then((e=>{this.setState({actionGroups:e,loading:!1,isOpen:!0})})).catch((e=>{this.setState({actionGroups:{},loading:!1,isOpen:!0}),console.error(e)}))),this.setState({isOpen:!1})},this.onActionItemClick=(e,t)=>id(this,void 0,void 0,(function*(){var e;this.setState({isOpen:!1});const{widgetId:o,dataSource:n,records:r,dataName:i}=this.props,a=this.getWidget(o),s=null===(e=a.dataActions)||void 0===e?void 0:e[t.name],l=yield t.confirm(n,r);l.needed?this.setState({action:t,confirmContent:l.content,showConfirm:!0}):t.onExecute(n,null!=r?r:[],null!=i?i:a.label,null==s?void 0:s.config).catch((e=>console.error(e)))})),this.handleClearConfirm=()=>{this.setState({action:null,showConfirm:!1,confirmContent:null})},this.handleConfirmedAction=()=>{var e;const{widgetId:t,dataSource:o,records:n,dataName:r}=this.props,i=this.getWidget(t),a=null===(e=i.dataActions)||void 0===e?void 0:e[this.state.action.name];this.state.action.onExecute(o,null!=n?n:[],null!=r?r:i.label,null==a?void 0:a.config).finally(this.handleClearConfirm)},this.state={isOpen:!1,loading:!1,actionGroups:{}}}getWidget(e){return(0,i.getAppStore)().getState().appConfig.widgets[e]}getActionLabel(e,t){return t.widgetId?t.label:i.i18n.getIntl().formatMessage({id:e})}createAction(e){const t=this.state.actionGroups[e];if((null==t?void 0:t.length)>0){const o=t[0],n="exportAll"===e||"exportSelected"===e?ad:o.icon;if(1===t.length)return(0,i.jsx)(Ha,{key:o.id,header:!1,onClick:e=>id(this,void 0,void 0,(function*(){return yield this.onActionItemClick(e,o)}))},(0,i.jsx)("div",{className:"d-flex align-items-center"},n&&(0,i.jsx)(Hn,{icon:n,className:"jimu-icon-auto-color"}),(0,i.jsx)("span",{className:"ml-2"},o.label)));{const r=this.getActionLabel(e,o);return(0,i.jsx)(_a,{key:o.id},(0,i.jsx)(Va,null,(0,i.jsx)("div",{className:"d-flex align-items-center"},n&&(0,i.jsx)(Hn,{icon:n,className:"jimu-icon-auto-color"}),(0,i.jsx)("span",{className:"ml-2"},r))),(0,i.jsx)(Xa,null,t.map(((e,t)=>{var o;let n=e.label;if(e.widgetId){const t=this.getWidget(e.widgetId);n=null!==(o=null==t?void 0:t.label)&&void 0!==o?o:e.label}return(0,i.jsx)(Ha,{key:t,header:!1,onClick:t=>id(this,void 0,void 0,(function*(){return yield this.onActionItemClick(t,e)}))},n)}))))}}return null}getLoadingStyle(){return i.css`
      @keyframes loading {
        0% {transform: rotate(0deg); };
        100% {transform: rotate(360deg)};
      }
      position: absolute;
      width: 60%;
      height: 60%;
      top: 20%;
      left: 20%;
      border: 2px solid var(--secondary-300);
      border-radius: 50%;
      border-top: 2px solid var(--primary-500);
      box-sizing: border-box;
      animation:loading 2s infinite linear;
    `}render(){const{type:e="default",size:t="sm"}=this.props,o=Object.keys(this.state.actionGroups),n=i.i18n.getIntl().formatMessage({id:"actions"});return(0,i.jsx)("div",{className:"data-action-dropdown"},(0,i.jsx)(La,{direction:"down",size:"sm",toggle:this.onDropDownToggle,isOpen:this.state.isOpen},(0,i.jsx)(Uc,{title:n,placement:"top"},(0,i.jsx)(Ya,{icon:!0,size:t,type:e,disabled:this.state.loading},!this.state.loading&&(0,i.jsx)(Hn,{icon:sd}),this.state.loading&&(0,i.jsx)("div",{css:this.getLoadingStyle(),"data-testid":"data-action-loading-btn"}))),(0,i.jsx)(Xa,null,0===o.length&&(0,i.jsx)(Ha,{header:!0},(0,i.jsx)("div",{className:"d-flex align-items-center"},(0,i.jsx)("span",{className:"ml-2"},i.i18n.getIntl().formatMessage({id:"noActions"})))),o.length>0&&o.map((e=>this.createAction(e))))),this.state.showConfirm&&(0,i.jsx)(rd,{level:"info",title:this.state.confirmContent.title,hasNotShowAgainOption:!1,content:this.state.confirmContent.content,confirmLabel:this.state.confirmContent.okLabel,cancelLabel:this.state.confirmContent.cancelLabel,onConfirm:this.handleConfirmedAction,onClose:this.handleClearConfirm}))}}const cd=(0,c.withTheme)(ld);var dd=function(e,t,o,n){return new(o||(o=Promise))((function(r,i){function a(e){try{l(n.next(e))}catch(e){i(e)}}function s(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,s)}l((n=n.apply(e,t||[])).next())}))};function ud(){return e=this,t=void 0,n=function*(){return yield function(){return dd(this,void 0,void 0,(function*(){const e=(0,i.getAppStore)().getState().appContext.locale;return yield function(e,t){return dd(this,void 0,void 0,(function*(){return(e=i.i18n.getLocaleToLoad(e,t))?yield i.i18n.loadLocaleMessages("jimu-ui/lib/translations",e).then((e=>e)):Promise.resolve(Tt)}))}(e,i.translatedLocales).then((e=>(e&&(0,i.getAppStore)().dispatch(i.appActions.i18nMessagesLoaded("jimu-ui",e)),e)))}))}()},new((o=void 0)||(o=Promise))((function(r,i){function a(e){try{l(n.next(e))}catch(e){i(e)}}function s(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,s)}l((n=n.apply(e,t||[])).next())}));var e,t,o,n}var pd=s(88859),hd=s(21498),fd=s(22301),gd=s(53883),md=s(95440),vd=s(77966),bd=s(8912);const yd=e=>i.React.createElement(bd.Z,Object.assign({},e)),wd=(0,c.withStyles)(bd.Z,"ButtonGroup");var xd=s(25886),Sd=s(95844),Od=s(16030);const Ed=Object.assign({},Tt,i.defaultMessages);class kd extends i.React.PureComponent{constructor(){super(...arguments),this.handleSwitchPage=e=>{const{totalPage:t,onChangePage:o}=this.props;e<1||e>t||o(e)},this.handleSwitchToPrePage=e=>{const{current:t}=this.props;this.handleSwitchPage(t-1)},this.handleSwitchToNextPage=e=>{const{current:t}=this.props;this.handleSwitchPage(t+1)},this.formatMessage=(e,t)=>{const{intl:o}=this.props;return o?o.formatMessage({id:e,defaultMessage:Ed[e]},t):e}}renderPaginationItems(e,t){const{disabled:o}=this.props,n=[];n.push(i.React.createElement(Od.Z,{key:"prev",disabled:1===e||o},i.React.createElement(Sd.Z,{onClick:this.handleSwitchToPrePage,title:this.formatMessage("previous"),"aria-label":this.formatMessage("previous")},i.React.createElement(Hn,{autoFlip:!0,icon:s(9553),size:12}))));for(let r=0;r<t;r++){const a=e===r+1;t>=8&&(r+1>1&&r+1<e-1||r+1<t&&r+1>e+1)?r+1!==e-2&&r+1!==e+2||n.push(i.React.createElement(Od.Z,{key:r,disabled:o},i.React.createElement(Sd.Z,{onClick:e=>this.handleSwitchPage(r+1),href:"javascript:;","aria-label":this.formatMessage("more")},i.React.createElement(Hn,{icon:s(12608),size:12})))):n.push(i.React.createElement(Od.Z,{key:r,active:a,disabled:o},i.React.createElement(Sd.Z,{href:"javascript:;",onClick:e=>this.handleSwitchPage(r+1),tag:a?"span":"a","aria-label":`${this.formatMessage("page")} ${r+1}`},r+1)))}return n.push(i.React.createElement(Od.Z,{key:"next",disabled:e===t||o},i.React.createElement(Sd.Z,{next:!0,onClick:this.handleSwitchToNextPage,title:this.formatMessage("next"),"aria-label":this.formatMessage("next")},i.React.createElement(Hn,{autoFlip:!0,icon:s(91116),size:12})))),n}render(){const e=this.props,{className:t,size:o,current:n,totalPage:r,onChangePage:a}=e,s=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["className","size","current","totalPage","onChangePage"]),l=(0,i.classNames)("jimu-pagination",t);return i.React.createElement(xd.Z,Object.assign({},s,{className:l,size:o}),this.renderPaginationItems(n,r))}}const Cd=(0,c.withStyles)((0,c.withTheme)((0,i.injectIntl)(kd)),"Pagination");var Nd=s(94539),Td=s.n(Nd);const Rd=e=>{const{className:t}=e,o=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["className"]),n=(0,i.classNames)("jimu-icon-component",t);return i.React.createElement(Ls.Icon,Object.assign({className:n,icon:Td()},o))};var jd=s(50342),Pd=s.n(jd);const $d=e=>{const{className:t}=e,o=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["className"]),n=(0,i.classNames)("jimu-icon-component",t);return i.React.createElement(Ls.Icon,Object.assign({className:n,icon:Pd()},o))};const Md=e=>{const{className:t,type:o="warning",text:n="",closable:r=!1,withIcon:a=!1,open:s=!0,onClose:l,children:c}=e,d=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["className","type","text","closable","withIcon","open","onClose","children"]),u=(e=>{const t="error"===e?"danger":e,o="warning"===e?`var(--${t}-900)`:`var(--${t}-600)`,n=`var(--${t}-100)`,r=`var(--${t}-300)`,a="var(--dark-100)",s=i.css`
    background-color: ${n};
    border: 1px solid ${r};
    box-sizing: border-box;
  `;return i.css`
    &.alert-panel {
      width: 240px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      ${s}
      .left-part {
        display: flex;
        align-items: center;
        color: ${"var(--black)"};
        .jimu-icon {
          color: ${o};
          align-self: flex-start;
        }
      }
      .closable-icon {
        color: ${a};
        cursor: pointer;
        color: ${a};
        &:hover {
          color: ${"var(--black)"};
        }
      }
    }
  `})(o);return s?(0,i.jsx)("div",Object.assign({className:(0,i.classNames)("alert-panel p-2",t),css:u},d),(0,i.jsx)("div",{className:"left-part mr-2"},a&&(0,i.jsx)(i.React.Fragment,null,"error"===o&&(0,i.jsx)(Rd,{className:"my-auto mr-2 flex-shrink-0"}),"info"===o&&(0,i.jsx)(dl,{className:"my-auto mr-2 flex-shrink-0"}),"success"===o&&(0,i.jsx)($d,{className:"my-auto mr-2 flex-shrink-0"}),"warning"===o&&(0,i.jsx)(td,{className:"my-auto mr-2 flex-shrink-0"})),n&&(0,i.jsx)("span",{className:"text-left"},n),!n&&c?c:null),r&&(0,i.jsx)("div",{onClick:l},(0,i.jsx)(Zl,{className:"closable-icon flex-shrink-0"}))):null},Id=e=>{const[t,o]=i.React.useState(!0);return(0,i.jsx)(Md,Object.assign({open:t,onClose:()=>o(!1)},e))};const Dd=i.React.forwardRef(((e,t)=>{const{className:o,type:n="warning",buttonType:r="default",size:a="medium"}=e,s=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["className","type","buttonType","size"]),l=((e,t,o)=>i.React.useMemo((()=>{const o="error"===e?"danger":e,n="warning"===e?`var(--${o}-900)`:`var(--${o}-600)`,r=`var(--${o}-100)`,a=`var(--${o}-300)`,s=i.css`
      background-color: ${r};
      border: 1px solid ${a};
    `;return i.css`
      &.jimu-btn {
        ${"default"===t&&s}
        .jimu-icon {
          color: ${n};
        }
      }
    `}),[e,t]))(n,r);return(0,i.jsx)(ye,Object.assign({ref:t,type:r,css:l,icon:!0},s,{className:(0,i.classNames)("alert-button",o,{"p-1":"small"===a,"p-2":"medium"===a})}),"error"===n&&(0,i.jsx)(Rd,null),"info"===n&&(0,i.jsx)(dl,null),"success"===n&&(0,i.jsx)($d,null),"warning"===n&&(0,i.jsx)(td,null))}));const Ad=e=>{const{className:t,text:o="",placement:n="bottom"}=e,r=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["className","text","placement"]),a=i.React.createElement(Dd,Object.assign({className:(0,i.classNames)("alert-tooltip-button",t)},r));return""===o?a:i.React.createElement(Uc,{className:"alert-tooltip",placement:n,title:o},a)};function Ld(e){const{form:t="basic",closable:o,withIcon:n,buttonType:r}=e,a=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["form","closable","withIcon","buttonType"]);return"basic"===t?i.React.createElement(Md,Object.assign({closable:o,withIcon:n},a)):"tooltip"===t?i.React.createElement(Ad,Object.assign({buttonType:r},a)):void 0}class zd extends i.React.PureComponent{render(){const e=this.props,{className:t,component:o}=e,n=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["className","component"]);return i.React.createElement(o,Object.assign({className:(0,i.classNames)("paper",t)},n))}}zd.defaultProps={component:"div"};const _d=(0,c.withStyles)(zd,"Paper");class Bd extends i.React.PureComponent{constructor(){super(...arguments),this.defaultCircledImageSize=100,this.defaultCoveredImageHeight=160}render(){const e=this.props,{type:t,shape:o,width:n,height:r,cover:a,className:s}=e,l=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["type","shape","width","height","cover","className"]),c=(0,i.classNames)("jimu-img",s,t?`img-${t}`:"",{"img-circle":"circle"===o,"img-covered":a});if(a||"circle"===o){let e,t;if(a&&(e={height:`${r||this.defaultCoveredImageHeight}px`,width:n&&`${n}px`,backgroundImage:`url(${this.props.src})`},t={height:`${r||this.defaultCoveredImageHeight}px`,width:n&&`${n}px`,background:`url(${this.props.placeholder}) no-repeat center`,backgroundSize:"100% 100%"}),"circle"===o){const t=n&&r?n<r?n:r:n||r||this.defaultCircledImageSize;e={width:`${t}px`,height:`${t}px`}}return i.React.createElement("div",{className:c},this.props.placeholder?i.React.createElement("div",{className:"img-placeholder",style:t},i.React.createElement("div",{className:"img-wrapper",style:e},a?null:i.React.createElement("img",Object.assign({},l)))):i.React.createElement("div",{className:"img-wrapper",style:e},a?null:i.React.createElement("img",Object.assign({},l))))}return i.React.createElement("img",Object.assign({},l,{className:c}))}}const Fd=(0,c.withStyles)(Bd,"Image");class Ud extends i.React.PureComponent{constructor(e){var t,o,n;super(e),this.state={value:null!==(n=null!==(o=null!==(t=this.props.value)&&void 0!==t?t:this.props.defaultValue)&&void 0!==o?o:this.props.min)&&void 0!==n?n:0},this.onChange=this.onChange.bind(this)}onChange(e){this.setState({value:e.target.value}),this.props.onChange&&this.props.onChange(e)}calcRatio(){var e,t;const o=void 0!==this.props.min?Number(this.props.min):0,n=void 0!==this.props.max?Number(this.props.max):100,r=null!==(t=null!==(e=this.state.value)&&void 0!==e?e:this.props.defaultValue)&&void 0!==t?t:0;if("string"==typeof r||"number"==typeof r){const e=(Number(r)-o)/(n-o)*100;return e>0?e:0}}isValid(e){if(!e&&0!==e)return!1;let t=!0;return"string"!=typeof e&&"number"!=typeof e||(e=Number(e),this.props.min&&(t=e>=Number(this.props.min)),this.props.max&&(t=e<=Number(this.props.max))),t}componentDidUpdate(e){this.props.value!==(null==e?void 0:e.value)&&this.isValid(this.props.value)&&this.setState({value:this.props.value})}render(){const e=this.props,{className:t,size:o="default",innerRef:n,hideThumb:r,min:a,max:s}=e,l=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["className","size","innerRef","hideThumb","min","max"]),c="default"===o?void 0:o,d=navigator.userAgent.includes("AppleWebKit"),u=i.css`
      &::-webkit-slider-runnable-track {
        background-size: ${this.calcRatio()}% 100%, 100% 100% !important;
      }
    `,p=(0,i.classNames)("jimu-slider",c&&`jimu-slider-${c}`,t);return(0,i.jsx)("input",Object.assign({},l,{ref:n,type:"range",role:"slider",min:a,max:s,"aria-orientation":"horizontal","aria-valuenow":this.state.value,"aria-valuemin":a,"aria-valuemax":s,className:p,css:d?u:null,defaultValue:void 0,value:this.state.value,onChange:this.onChange}))}}Ud.defauptProps={size:"default",min:0,max:100,step:1};const Hd=(0,c.withStyles)(i.React.forwardRef(((e,t)=>(0,i.jsx)(Ud,Object.assign({innerRef:t},e)))),"Slider");var Wd=s(42349);class Vd extends i.React.PureComponent{render(){const e=this.props,{color:t,light:o,dark:n,expand:r,className:a,border:s,borderTop:l,borderBottom:c,borderLeft:d,borderRight:u}=e,p=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["color","light","dark","expand","className","border","borderTop","borderBottom","borderLeft","borderRight"]),h=(0,i.classNames)(a,(s||l||c||d||u)&&"border border-color-gray-200",(l||c||d||u)&&{"border-top-0":!l,"border-bottom-0":!c,"border-left-0":!d,"border-right-0":!u}),f=void 0===t||["","warning","light","white"].includes(t);return i.React.createElement(Wd.Z,Object.assign({},p,{color:t||"light",light:void 0===o?f:o,dark:void 0===n?!f:n,expand:r||"lg",className:h}),this.props.children)}}const Gd=(0,c.withStyles)(Vd,"Navbar");const{useMemo:qd}=i.React,{useSelector:Yd}=i.ReactRedux,Zd=e=>qd((()=>i.css`
      *:focus{
        box-shadow: none !important;
      }
      flex-wrap: nowrap;

      .dropdown-menu-inline {
        padding: 0 !important;
        .nav-item {
          margin-top:${e} !important;
        }
      }
  `),[e]),Kd=e=>{const{vertical:t=!1,type:o="default",data:n,isActive:r,scrollable:a=!1,showIcon:s,activedIcon:l,alternateIcon:c,showText:d=!0,showTitle:u=!1,iconPosition:p,gap:h,isUseNativeTitle:f=!1}=e,g=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["vertical","type","data","isActive","scrollable","showIcon","activedIcon","alternateIcon","showText","showTitle","iconPosition","gap","isUseNativeTitle"]),m=Yd((e=>e.queryObject)),v=Zd(h),b=i.React.useMemo((()=>{var e,t;return null!==(t=null===(e=n)||void 0===e?void 0:e.map(((e,t)=>{var o,n,a,h;const g=null==r?void 0:r(e),b=l||e.icon||c,y=g?b:e.icon||c,w=d?e.name:"",x=u&&f,S=u&&!f,O=(0,i.jsx)(Bl,{draggable:!1,iconPosition:p,target:e.target,iconSize:null===(o=null==y?void 0:y.properties)||void 0===o?void 0:o.size,to:e,icon:s?null==y?void 0:y.svg:"",active:g,caret:!!(null===(n=null==e?void 0:e.subs)||void 0===n?void 0:n.length),queryObject:m},w),E=(null===(a=null==e?void 0:e.subs)||void 0===a?void 0:a.length)>0?(0,i.jsx)(Gl,{css:v},null===(h=e.subs)||void 0===h?void 0:h.map(((e,t)=>{const o=d?e.name:"";let n=(0,i.jsx)(Al,{key:t,title:x?o:""},(0,i.jsx)(Bl,{draggable:!1,active:null==r?void 0:r(e),to:e,iconPosition:p,target:e.target,queryObject:m},o));return S&&(n=(0,i.jsx)(Uc,{title:o,key:t},n)),n}))):void 0;let k=(0,i.jsx)(Al,{key:t,title:x?e.name:""},O,E);return S&&(k=(0,i.jsx)(Uc,{title:e.name,key:t},k)),k})))&&void 0!==t?t:[]}),[c,n,p,r,v,l,m,s,d,u,f]),y=a?(0,i.jsx)(fc,{autoArrow:!0,duration:300,vertical:t,items:b}):b,w=((e,t,o)=>{const n=t&&!o;return qd((()=>{const t=e?"100%":void 0;return i.css`
      *:focus{
        box-shadow: none !important;
      }
      width: 100%;
      height: 100%;
      flex-wrap: nowrap;
      width: ${t};
      flex-wrap: nowrap;
      &.nav-tabs .nav-link.active {
        background-color: unset;
      }
      .nav-item {
        overflow: unset;
        flex-shrink: 0;
        .jimu-nav-link-wrapper{
          text-overflow: unset;
          overflow: unset;
        }
      }
      /* Remove padding and margin when only show icon in nav-item */
      ${n&&i.css`
        .nav-item {
          line-height: 1 !important;
          .nav-link {
            padding: 0 !important;
            line-height: 1 !important;
          }
          .jimu-nav-link-wrapper {
            .jimu-icon {
              margin-left: unset;
              margin-right: unset;
            }
          }
        }
      `}
    `}),[e,n])})(t,s,d);return(0,i.jsx)(Ml,Object.assign({},g,{gap:h,css:w,navbar:!0,underline:"underline"===o,pills:"pills"===o,tabs:"tabs"===o,vertical:t,justified:!t}),y)};const Xd=e=>{const{current:t,totalPage:o,connector:n="/"}=e,r=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["current","totalPage","connector"]);return i.React.createElement("span",Object.assign({},r),t,n,o)},Qd="multi-select-item";class Jd extends i.React.PureComponent{constructor(e){super(e),this.onDropDownToggle=e=>{var t;e.stopPropagation();const o=null===(t=null==e?void 0:e.currentTarget)||void 0===t?void 0:t.className;if(o&&o.indexOf(Qd)>-1)return;const{isOpen:n}=this.state;this.setState({isOpen:!n})},this.handleMenuClick=e=>{e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()},this.onItemClick=(e,t)=>{var o,n;const{onClickItem:r}=this.props,a=this.props.values||this.state.values,s=(null!==(n=null===(o=null==a?void 0:a.asMutable)||void 0===o?void 0:o.call(a))&&void 0!==n?n:a)||[],l=s.indexOf(t);l<0?s.push(t):s.splice(l,1),this.setState({values:(0,i.Immutable)(s)}),e.stopPropagation(),e.nativeEvent.stopImmediatePropagation(),r(e,t,s)},this.getValueLabel=e=>{const{items:t}=this.props,o=t.find((t=>t.value===e));return o?o.label||o.value:""},this.getShowText=()=>{const{placeholder:e,displayByValues:t}=this.props,o=this.props.values||this.state.values;return!o||0===o.length&&e?e||"":t?t(o.asMutable()):o.map((e=>this.getValueLabel(e))).join(",")},this.getDropdownMenuStyle=()=>i.css`
      ${this.divRef?`\n          min-width: ${i.polished.rem(this.divRef.clientWidth)};\n        `:""}
    `,this.state={isOpen:!1,values:e.values||e.defaultValues||(0,i.Immutable)([])}}componentDidUpdate(e){const{values:t}=this.props;e.values&&!t&&this.setState({values:t})}render(){var e,t;const{items:o,className:n,size:r,fluid:a,appendToBody:s,zIndex:l,menuProps:c,menuItemProps:d,buttonProps:u}=this.props,{isOpen:p}=this.state,h=(0,i.getAppStore)().getState().appContext.isRTL;let f=this.props.values||this.state.values;return f||(f=(0,i.Immutable)([])),(0,i.jsx)("div",{ref:e=>this.divRef=e,className:(0,i.classNames)("jimu-multi-select",n||"",a?"w-100":"")},(0,i.jsx)(La,{isOpen:p,size:r,direction:"down",toggle:this.onDropDownToggle,fluid:a},(0,i.jsx)(Va,Object.assign({type:"link",size:r},u),this.getShowText()),(0,i.jsx)(Xa,Object.assign({maxHeight:300,appendToBody:s,zIndex:l+"",css:this.getDropdownMenuStyle(),onClick:this.handleMenuClick},c),(0,i.jsx)("div",null,(null!==(t=null===(e=null==o?void 0:o.asMutable)||void 0===e?void 0:e.call(o))&&void 0!==t?t:o).map(((e,t)=>{const o=f.includes(e.value);return(0,i.jsx)(Ha,Object.assign({className:Qd,key:e.value||t,onClick:t=>this.onItemClick(t,e.value),toggle:!1,"aria-checked":o},d),(0,i.jsx)("div",{className:"d-flex w-100 align-items-center multi-select-item "+(o?"active":"")},e.render?e.render(e,f):(0,i.jsx)("div",{className:"d-flex w-100 align-items-center mb-0"},(0,i.jsx)(Vs,{checked:o}),(0,i.jsx)("div",{style:h?{marginRight:"8px"}:{marginLeft:"8px"},className:"item-text"},e.label))))}))))))}}Jd.defaultProps={size:"default"};const eu=(0,c.withStyles)(Jd,"MultiSelect");var tu;!function(e){e.Info="INFO",e.Error="ERROR"}(tu||(tu={}));const ou=e=>{const{className:t,style:o,open:n=!1,text:r,type:a=tu.Info}=e,s=(0,i.classNames)(t,"jimu-toast");if(!n)return null;const l=i.React.createElement(_d,{className:s,style:o,role:"tooltip"},i.React.createElement("div",{className:(0,i.classNames)("h-100 d-flex align-items-center justify-content-center px-3 jimu-toast-common",{"jimu-toast-error":a===tu.Error,"jimu-toast-info":a===tu.Info})},a===tu.Error&&i.React.createElement(dl,{className:"mr-2"}),i.React.createElement("span",null,r))),c=(null===document||void 0===document?void 0:document.fullscreenElement)||(null===document||void 0===document?void 0:document.body);return i.ReactDOM.createPortal(l,c)},nu=(0,c.withStyles)(ou,"Toast");const ru={left:"right",right:"left",top:"bottom",bottom:"top",full:"full"};function iu(e){return["left","right"].includes(e)}function au(e,t){var o;return(null===(o=(0,i.getAppStore)().getState().appContext)||void 0===o?void 0:o.isRTL)&&iu(e)&&t?ru[e]:e}const su={overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:"none"},lu={left:0,right:"auto"},cu={left:"auto",right:0},du={top:0,left:0,bottom:"auto",right:0,height:"auto",maxHeight:"100%"},uu={top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},pu={top:"0",left:0,bottom:0,right:0,height:"100%",maxHeight:"100%"},hu=e=>{const{anchor:t="left",autoFlip:o=!0,children:n,className:r,toggle:a,open:s=!1,paperProps:l,variant:c="temporary",zIndex:d=1006}=e,u=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["anchor","autoFlip","children","className","toggle","open","paperProps","variant","zIndex"]),p=((e,t)=>{let o=su;return"left"===e?o=i.lodash.assign({zIndex:t},o,lu):"top"===e?o=i.lodash.assign({zIndex:t},o,du):"right"===e?o=i.lodash.assign({zIndex:t},o,cu):"bottom"===e?o=i.lodash.assign({zIndex:t},o,uu):"full"===e&&(o=i.lodash.assign({zIndex:t},o,pu)),o})(au(t,o),d),h=(e=>i.css`
  max-width: 100% !important;
  .modal-content {
    border: unset;
    background: unset;
    border-radius: unset;
    padding: 0;
    margin: 0;
    top: ${e.top};
    bottom: ${e.bottom};
    left: ${e.left};
    right: ${e.right};
    .paper {
      overflow-x: hidden;
    }
  }
`)(p),f=(0,i.jsx)(_d,Object.assign({style:p},l),n);return"permanent"===c?(0,i.jsx)("div",Object.assign({className:r},u),f):(0,i.jsx)(Qc,{toggle:a,isOpen:s,className:`w-100 h-100 m-0 ${r}`,css:h},f)};class fu extends i.React.PureComponent{constructor(e){super(e),this.handleCloseBtn=()=>{this.setState({isOpen:!1});const{toggle:e,isOpen:t}=this.props;void 0!==t&&(e&&e(!1),this.props.onClickClose&&this.props.onClickClose())},this.handleOkBtn=()=>{this.setState({isOpen:!1});const{toggle:e,isOpen:t}=this.props;void 0!==t&&(e&&e(!0),this.props.onClickOk&&this.props.onClickOk())},this.handleToggle=()=>{this.setState({isOpen:!1});const{toggle:e,isOpen:t}=this.props;void 0!==t&&e&&e(!1)},this.state={isOpen:!!e.isOpen}}componentDidUpdate(e){const{isOpen:t}=this.props;void 0!==t&&void 0===this.props.isOpen&&this.setState({isOpen:this.props.isOpen})}render(){let{isOpen:e}=this.props;return e=void 0===e?this.state.isOpen:e,i.React.createElement(Qc,{className:(0,i.classNames)("d-flex justify-content-center",this.props.className),isOpen:e,centered:!0,toggle:this.handleToggle},i.React.createElement(Zc,{tag:"h4",toggle:this.handleCloseBtn},this.props.title),i.React.createElement(Kc.Z,null,i.React.createElement("div",null,this.props.children)),i.React.createElement(Xc.Z,null,!this.props.hideOK&&i.React.createElement(ye,{type:"primary",onClick:this.handleOkBtn},this.props.okLabel?this.props.okLabel:this.props.intl.formatMessage({id:"commonModalOk",defaultMessage:Tt.commonModalOk})),!this.props.hideCancel&&i.React.createElement(ye,{type:"secondary",onClick:this.handleCloseBtn},this.props.cancelLabel?this.props.cancelLabel:this.props.intl.formatMessage({id:"commonModalCancel",defaultMessage:Tt.commonModalCancel}))))}}const gu=(0,c.withStyles)((0,i.injectIntl)(fu),"AlertPopup"),mu=s(8045);var vu;!function(e){e.OrgAdmin="org_admin",e.OrgPublisher="org_publisher",e.OrgUser="org_user",e.CustomRoles="custom_roles"}(vu||(vu={}));class bu extends i.React.PureComponent{constructor(e){super(e),this.__unmount=!1,this.nls=e=>this.props.intl?this.props.intl.formatMessage({id:e,defaultMessage:Tt[e]}):e,this.signInOut=()=>{const{isAppSaved:e}=this.props;void 0===e||e?this.doSignInOut():this.setState({isShowWindowLeaveAlert:!0,isShowLeaveAlertPopup:!0})},this.signOut=()=>{this.setState({accountPopoverOpen:!1}),i.SessionManager.getInstance().signOut()},this.signIn=()=>{this.setState({accountPopoverOpen:!1}),i.SessionManager.getInstance().signIn("/",!1)},this.toggleAccount=()=>{this.setState({accountPopoverOpen:!this.state.accountPopoverOpen})},this.getMenuInnerStyle=e=>{const{palette:t}=e.colors;return i.css`
      & {
        background: ${t.light[500]};
        border: 1px solid ${t.light[300]};
        box-shadow: 0 0 10px 2px ${i.polished.rgba(e.colors.white,.2)};
        border-radius: 2px;
        padding-bottom: ${i.polished.rem(12)};
        min-width: ${i.polished.rem(240)};
      }
      .dropdown-menu--inner {
        .center-line {
          border-top: 1px solid ${t.light[800]};
          margin: ${i.polished.rem(16)};
        }
        &>button {
          & {
            display: block;
            padding-left: ${i.polished.rem(16)};
            color: ${t.dark[800]};
            margin-bottom: ${i.polished.rem(4)};
          }
          &>a {
            color: inherit;
            display: block;
            text-decoration: none;
            text-align: left;
            padding: 0;
            background: none;
            border: none;
          }
        }
        &>button:first-of-type {
          padding: 0;
          cursor: auto;
          margin-bottom: ${i.polished.rem(7)};
          &:hover {
            background: none;
          }
        }
        .user-message-con {
          & {
            align-items: center;
            padding: ${i.polished.rem(16)} ${i.polished.rem(16)} ${i.polished.rem(18)} ${i.polished.rem(16)};
            border-bottom: 1px solid ${t.secondary[800]};
          }
          .head-portrait-con {
            & {
              width: ${i.polished.rem(50)};
              height: ${i.polished.rem(50)};
              margin-right: ${i.polished.rem(16)};
            }
            img, button {
              display: block;
              width: 100%;
              height: 100%;
            }
          }
          circle{
            fill: ${t.secondary[800]};
          }
          svg {
            color: ${t.dark[600]};
            margin-right: 0;
          }
          .user-message {
            & {
              font-size: ${i.polished.rem(14)};
              line-height:${i.polished.rem(20)};
            }
            div{
              color: ${t.dark[800]};
              max-width: ${i.polished.rem(142)};
            }
            .user-account {
              color: ${t.dark[600]};
              margin-top: ${i.polished.rem(11)};
            }
          }
        }
      }
    `},this.getTrainingUrl=()=>{const{user:e}=this.props;switch(null==e?void 0:e.role){case vu.OrgAdmin:return"//www.esri.com/training/main/arcgis-online-administrators";case vu.OrgPublisher:return"//www.esri.com/training/main/arcgis-online-publishers";case vu.OrgUser:return"//www.esri.com/training/main/arcgis-online-users";default:return"//www.esri.com/training/main/arcgis-online-training"}},this.handleToggleForLeaveAlertPopup=e=>{this.setState({isShowLeaveAlertPopup:!this.state.isShowLeaveAlertPopup}),e?this.doSignInOut():this.setState({isShowWindowLeaveAlert:!1})},this.doSignInOut=()=>{const{isShowWindowLeaveAlert:e}=this.state;e&&(window.onbeforeunload=()=>{}),i.SessionManager.getInstance().getMainSession()?this.signOut():this.signIn()},this.state={accountPopoverOpen:!1,isShowWindowLeaveAlert:!1,isShowLeaveAlertPopup:!1}}render(){var e;const{user:t,theme:o,portalUrl:n}=this.props,r=i.SessionManager.getInstance().getMainSession();let a;t.thumbnail&&(a=`${n}/sharing/rest/community/users/${t.username}/info/${t.thumbnail}`,r&&(a=`${a}?token=${null==r?void 0:r.token}`));const s=window.jimuConfig.isDevEdition,l=!s&&"both"===(null===(e=t)||void 0===e?void 0:e.userType),c=window.jimuConfig.isInPortal,d=(0,i.getAppStore)().getState().isWebTier;return(0,i.jsx)("div",{className:(0,i.classNames)("jimu-user-profile d-flex ml-1 mr-1",this.props.className)},(0,i.jsx)(La,{size:"sm",toggle:this.toggleAccount,isOpen:this.state.accountPopoverOpen},(0,i.jsx)(Va,{size:"sm",type:"tertiary",icon:!0,arrow:!1,className:"p-0 account-dropdown-toggle"},(0,i.jsx)("div",{id:"accountPopover",className:"header-account float-left d-flex align-items-center pl-3 pr-3",style:{cursor:"pointer"},title:this.props.user&&this.props.user.firstName?this.props.user.firstName:""},a?(0,i.jsx)(Fd,{src:a,width:26,height:26,shape:"circle",className:"d-block float-left header-login"}):(0,i.jsx)(Hn,{icon:mu,width:26,height:26,className:"d-block float-left header-login"}))),(0,i.jsx)(Xa,{css:this.getMenuInnerStyle(o),flip:!0},(0,i.jsx)(Ha,null,(0,i.jsx)("div",{className:"d-flex user-message-con"},(0,i.jsx)("div",{className:"head-portrait-con "},a&&(0,i.jsx)(Fd,{src:a,width:50,height:50,shape:"circle",className:"d-block float-left header-login"}),!a&&(0,i.jsx)(Hn,{icon:mu,width:50,height:50,className:"d-block float-left header-login"})),(0,i.jsx)("div",{className:"user-message flex-grow-1"},r&&(0,i.jsx)("div",{className:"text-truncate",title:t.firstName},null==t?void 0:t.firstName),r&&(0,i.jsx)("div",{className:"user-account text-truncate",title:null==t?void 0:t.username},null==t?void 0:t.username)))),r&&(0,i.jsx)(Ha,null,(0,i.jsx)("a",{target:"_blank",href:`${this.props.portalUrl}/home/user.html`},this.nls("myProfile"))),!s&&(0,i.jsx)(Ha,null,(0,i.jsx)(fr,{to:`${this.props.portalUrl}/home/user.html#settings`,target:"_blank"},this.nls("mySettings"))),l&&(0,i.jsx)(Ha,null,(0,i.jsx)(fr,{to:"https://community.esri.com",target:"_blank"},this.nls("communityAndForums"))),l&&(0,i.jsx)(Ha,null,(0,i.jsx)(fr,{to:"https://my.esri.com",target:"_blank"},this.nls("myesri"))),l&&(0,i.jsx)(Ha,null,(0,i.jsx)(fr,{to:this.getTrainingUrl(),target:"_blank"},this.nls("training"))),l&&(0,i.jsx)(Ha,null,(0,i.jsx)(fr,{to:"https://www.esri.com/arcgis-blog/arcgis-online/",target:"_blank"},this.nls("arcgisBlog"))),(0,i.jsx)(Ha,null,(0,i.jsx)(fr,{to:this.props.helpUrl,target:"_blank"},this.nls("accountHelp"))),(0,i.jsx)("div",{className:"center-line"}),r&&!s&&!window.jimuConfig.isInPortal&&(0,i.jsx)(Ha,{onClick:()=>{i.SessionManager.getInstance().switchAccount()}},this.nls("switchAccount")),!(c&&d)&&(0,i.jsx)(Ha,{onClick:()=>{this.signInOut()}},r?this.nls("signOut"):this.nls("signIn")))),(0,i.jsx)(gu,{isOpen:this.state.isShowLeaveAlertPopup,okLabel:this.nls("profileLeave"),title:this.nls("profileLeaveSite"),toggle:this.handleToggleForLeaveAlertPopup},(0,i.jsx)("div",{style:{fontSize:"1rem"}},this.nls("profileLeaveDescription"))))}}const yu=(0,i.injectIntl)((0,c.withStyles)((0,c.withTheme)(bu),"UserProfile"));class wu{constructor(){this.mobilePanels={},this.currentExpandStage=null,this.currentId=null}setGroupId(e){this.groupId=e}getGroupId(){return this.groupId}setCurrentId(e){if(e===this.currentId)return;const t=this.currentId;this.currentId=e;const o=Object.keys(this.mobilePanels);for(let e=0;e<o.length;e++)this.mobilePanels[o[e]]._isMounted&&this.mobilePanels[o[e]].forceUpdate(),this.mobilePanels[o[e]].id===t&&this.mobilePanels[o[e]].props.open&&this.mobilePanels[o[e]].sendToggle()}getCurrentId(){return this.currentId}setCurrentExpandStage(e){this.currentExpandStage=e}getCurrentExpandStage(){return this.currentExpandStage}addMobilePanel(e){this.mobilePanels[e.id]=e}removeMobilePanel(e){delete this.mobilePanels[e.id]}getMobilePanelById(e){return this.mobilePanels[e]}closePanel(){this.setCurrentExpandStage(null),this.setCurrentId(null)}}class xu{constructor(){this.mobilePanelGroups={}}static getInstance(){return xu.instance||(xu.instance=new xu,window._mobilePanelManager=xu.instance),xu.instance}getCurrentIdInGroup(e){const t=this.getMobilePanelGroupByGroupId(e);return t?t.getCurrentId():null}getCurrentExpandStageInGroup(e){const t=this.getMobilePanelGroupByGroupId(e);return t?t.getCurrentExpandStage():null}setCurrentExpandStageInGroup(e,t){const o=this.getMobilePanelGroupByGroupId(e);o&&o.setCurrentExpandStage(t)}setCurrentIdInGroup(e,t){const o=this.getMobilePanelGroupByGroupId(t);o&&o.setCurrentId(e)}getMobilePanelGroupByGroupId(e){return this.mobilePanelGroups[e]}addMobilePanelGroup(e){e&&(this.mobilePanelGroups[e.groupId]=e)}removeMobilePanelGroup(e){delete this.mobilePanelGroups[e.groupId]}addMobilePanel(e){if(this.mobilePanelGroups[e.groupId])this.mobilePanelGroups[e.groupId].addMobilePanel(e);else{const t=new wu;t.setGroupId(e.groupId),t.addMobilePanel(e),this.addMobilePanelGroup(t)}}removeMobilePanel(e){const t=this.getMobilePanelGroupByGroupId(e.groupId);t&&(t.removeMobilePanel(e),0===Object.keys(t.mobilePanels).length&&this.removeMobilePanelGroup(t))}checkDomIsContained(e){const t=document.getElementById("exb-mobile-panel");return!(!t||!e)&&t.contains(e)}}var Su=function(){if("undefined"!=typeof Map)return Map;function e(e,t){var o=-1;return e.some((function(e,n){return e[0]===t&&(o=n,!0)})),o}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var o=e(this.__entries__,t),n=this.__entries__[o];return n&&n[1]},t.prototype.set=function(t,o){var n=e(this.__entries__,t);~n?this.__entries__[n][1]=o:this.__entries__.push([t,o])},t.prototype.delete=function(t){var o=this.__entries__,n=e(o,t);~n&&o.splice(n,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){void 0===t&&(t=null);for(var o=0,n=this.__entries__;o<n.length;o++){var r=n[o];e.call(t,r[1],r[0])}},t}()}(),Ou="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,Eu=void 0!==s.g&&s.g.Math===Math?s.g:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),ku="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(Eu):function(e){return setTimeout((function(){return e(Date.now())}),1e3/60)},Cu=["top","right","bottom","left","width","height","size","weight"],Nu="undefined"!=typeof MutationObserver,Tu=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(e,t){var o=!1,n=!1,r=0;function i(){o&&(o=!1,e()),n&&s()}function a(){ku(i)}function s(){var e=Date.now();if(o){if(e-r<2)return;n=!0}else o=!0,n=!1,setTimeout(a,20);r=e}return s}(this.refresh.bind(this))}return e.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},e.prototype.removeObserver=function(e){var t=this.observers_,o=t.indexOf(e);~o&&t.splice(o,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},e.prototype.updateObservers_=function(){var e=this.observers_.filter((function(e){return e.gatherActive(),e.hasActive()}));return e.forEach((function(e){return e.broadcastActive()})),e.length>0},e.prototype.connect_=function(){Ou&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),Nu?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){Ou&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(e){var t=e.propertyName,o=void 0===t?"":t;Cu.some((function(e){return!!~o.indexOf(e)}))&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),Ru=function(e,t){for(var o=0,n=Object.keys(t);o<n.length;o++){var r=n[o];Object.defineProperty(e,r,{value:t[r],enumerable:!1,writable:!1,configurable:!0})}return e},ju=function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||Eu},Pu=Au(0,0,0,0);function $u(e){return parseFloat(e)||0}function Mu(e){for(var t=[],o=1;o<arguments.length;o++)t[o-1]=arguments[o];return t.reduce((function(t,o){return t+$u(e["border-"+o+"-width"])}),0)}var Iu="undefined"!=typeof SVGGraphicsElement?function(e){return e instanceof ju(e).SVGGraphicsElement}:function(e){return e instanceof ju(e).SVGElement&&"function"==typeof e.getBBox};function Du(e){return Ou?Iu(e)?function(e){var t=e.getBBox();return Au(0,0,t.width,t.height)}(e):function(e){var t=e.clientWidth,o=e.clientHeight;if(!t&&!o)return Pu;var n=ju(e).getComputedStyle(e),r=function(e){for(var t={},o=0,n=["top","right","bottom","left"];o<n.length;o++){var r=n[o],i=e["padding-"+r];t[r]=$u(i)}return t}(n),i=r.left+r.right,a=r.top+r.bottom,s=$u(n.width),l=$u(n.height);if("border-box"===n.boxSizing&&(Math.round(s+i)!==t&&(s-=Mu(n,"left","right")+i),Math.round(l+a)!==o&&(l-=Mu(n,"top","bottom")+a)),!function(e){return e===ju(e).document.documentElement}(e)){var c=Math.round(s+i)-t,d=Math.round(l+a)-o;1!==Math.abs(c)&&(s-=c),1!==Math.abs(d)&&(l-=d)}return Au(r.left,r.top,s,l)}(e):Pu}function Au(e,t,o,n){return{x:e,y:t,width:o,height:n}}var Lu=function(){function e(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Au(0,0,0,0),this.target=e}return e.prototype.isActive=function(){var e=Du(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},e}(),zu=function(e,t){var o,n,r,i,a,s,l,c=(n=(o=t).x,r=o.y,i=o.width,a=o.height,s="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,l=Object.create(s.prototype),Ru(l,{x:n,y:r,width:i,height:a,top:r,right:n+i,bottom:a+r,left:n}),l);Ru(this,{target:e,contentRect:c})},_u=function(){function e(e,t,o){if(this.activeObservations_=[],this.observations_=new Su,"function"!=typeof e)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=o}return e.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof ju(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new Lu(e)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof ju(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach((function(t){t.isActive()&&e.activeObservations_.push(t)}))},e.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map((function(e){return new zu(e.target,e.broadcastRect())}));this.callback_.call(e,t,e),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),Bu="undefined"!=typeof WeakMap?new WeakMap:new Su,Fu=function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var o=Tu.getInstance(),n=new _u(t,o,this);Bu.set(this,n)};["observe","unobserve","disconnect"].forEach((function(e){Fu.prototype[e]=function(){var t;return(t=Bu.get(this))[e].apply(t,arguments)}}));const Uu=void 0!==Eu.ResizeObserver?Eu.ResizeObserver:Fu;var Hu;!function(e){e.INITSCREEN="initscreen",e.HALFSCREEN="halfscreen",e.FULLSCREEN="fullscreen"}(Hu||(Hu={}));const Wu=[{name:"offset",options:{offset:({placement:e,reference:t,popper:o})=>"bottom"===e?[0,-1*o.height]:[]}},{name:"preventOverflow",enabled:!1},{name:"flip",enabled:!1}];class Vu extends i.React.PureComponent{constructor(e){super(e),this.startDrag=!1,this.moveY=0,this.startY=0,this.sliding=!1,this._isMounted=!1,this._retryMapWidgetIdTimes=0,this.parentReference=null,this.resizeObserver=null,this.updateProperties=()=>{var e,t;if(this.resizeObserver&&this.props.mapWidgetId)return;let o=0;if(this.props.mapWidgetId){if(this.groupId=this.props.mapWidgetId,this.parentReference=document.getElementById(this.props.mapWidgetId),!this.parentReference&&++this._retryMapWidgetIdTimes<=20)return setTimeout((()=>this.updateProperties()),500),{mobilePanelHeight:(n=this.state||{}).mobilePanelHeight||0,generation:n.generation||0,parentReferenceHeight:n.parentReferenceHeight||0};o=null!==(t=null===(e=this.parentReference)||void 0===e?void 0:e.clientHeight)&&void 0!==t?t:0,this.resizeObserver||(this.resizeObserver=new Uu(((e,t)=>{var o,n;this.setState({generation:this.state.generation+1,parentReferenceHeight:null!==(n=null===(o=this.parentReference)||void 0===o?void 0:o.clientHeight)&&void 0!==n?n:0})})),this.resizeObserver.observe(this.parentReference))}else this.groupId="document",this.parentReference=new no({top:0,left:0,width:document.body.clientWidth,height:document.body.clientHeight}),o=window.innerHeight,this.resizeObserver||(this.resizeObserver=new Uu((e=>{const t=this.updateProperties();t&&this.setState(t)})),this.resizeObserver.observe(document.body));var n;return xu.getInstance().addMobilePanel(this),this.props.open&&xu.getInstance().setCurrentIdInGroup(this.id,this.groupId),this.currentBottomPanelHeight=this.getExpectedHeightForStage(xu.getInstance().getCurrentExpandStageInGroup(this.groupId)),{mobilePanelHeight:0,generation:0,parentReferenceHeight:o}},this.getExpectedHeightForStage=e=>this.state?e===Hu.INITSCREEN?150:e===Hu.HALFSCREEN?.6*this.state.parentReferenceHeight:e===Hu.FULLSCREEN?this.state.parentReferenceHeight-10:0:150,this.resize=()=>{this.resizeTimeout||(this.resizeTimeout=setTimeout((()=>{this.resizeTimeout=null,this.actualResize()}),66))},this.actualResize=()=>{this.setState({parentReferenceHeight:window.innerHeight})},this.sendToggle=()=>{this.props.toggle&&this.props.toggle()},this.start=(e,t)=>{if(document&&document.body.addEventListener("touchmove",this.preventTouceMove,{passive:!1}),this.startDrag=!0,"touch"===t){this.moveY=0;const t=e.touches[0];this.startY=t.clientY}"mouse"===t&&(this.moveY=0,this.startY=e.clientY),document.getElementById("exb-mobile-panel-shell"+this.id).classList.remove("expand-mobile-panel-transition")},this.preventTouceMove=e=>{e.preventDefault()},this.move=(e,t)=>{if("touch"===t){this.sliding=!0;const t=e.touches[0];this.moveY=-1*(t.clientY-this.startY)}if("mouse"===t&&this.startDrag&&(this.sliding=!0,this.moveY=-1*(e.clientY-this.startY)),"mouse"===t&&!this.startDrag)return;let o=this.getExpectedHeightForStage(Hu.INITSCREEN);const n=this.getExpectedHeightForStage(Hu.FULLSCREEN),r=this.getExpectedHeightForStage(this.state&&this.state.currentExpandStage);r+this.moveY>o&&(o=r+this.moveY),r+this.moveY>n&&(o=n),document.getElementById("exb-mobile-panel-shell"+this.id).style.height=`${o}px`,this.currentBottomPanelHeight=o},this.end=(e,t)=>{if(document&&document.body.removeEventListener("touchmove",this.preventTouceMove),"mouse"!==t||this.startDrag){if(this.startDrag=!1,this.sliding=!1,document.getElementById("exb-mobile-panel-shell"+this.id).classList.add("expand-mobile-panel-transition"),"touch"===t&&Math.abs(this.moveY)<10){const e=this.getExpectedHeightForStage(this.state.currentExpandStage);return document.getElementById("exb-mobile-panel-shell"+this.id).style.height=`${e}px`,void(this.currentBottomPanelHeight=e)}if(this.moveY>=0){let e=0,t=null;this.currentBottomPanelHeight>=150&&this.currentBottomPanelHeight<this.getExpectedHeightForStage(Hu.HALFSCREEN)?(e=this.getExpectedHeightForStage(Hu.HALFSCREEN),t=Hu.HALFSCREEN):this.currentBottomPanelHeight>=this.getExpectedHeightForStage(Hu.HALFSCREEN)&&this.currentBottomPanelHeight<this.getExpectedHeightForStage(Hu.FULLSCREEN)?(e=this.getExpectedHeightForStage(Hu.FULLSCREEN),t=Hu.FULLSCREEN):(e=150,t=Hu.INITSCREEN),this.setState({currentExpandStage:t},(()=>{this.changeMobilePanelHeightInMap(t)})),this.currentBottomPanelHeight=e,xu.getInstance().setCurrentExpandStageInGroup(this.groupId,t)}else{let e=0,t=null;this.currentBottomPanelHeight>150&&this.currentBottomPanelHeight<this.getExpectedHeightForStage(Hu.HALFSCREEN)?(e=150,t=Hu.INITSCREEN):this.currentBottomPanelHeight>=this.getExpectedHeightForStage(Hu.HALFSCREEN)&&this.currentBottomPanelHeight<this.getExpectedHeightForStage(Hu.FULLSCREEN)?(e=this.getExpectedHeightForStage(Hu.HALFSCREEN),t=Hu.HALFSCREEN):(e=150,t=Hu.INITSCREEN),this.setState({currentExpandStage:t},(()=>{this.changeMobilePanelHeightInMap(t)})),this.currentBottomPanelHeight=e,xu.getInstance().setCurrentExpandStageInGroup(this.groupId,t)}}},this.handleClickCloseBtn=e=>{this.props.toggle&&this.props.toggle(e)},this.onMobilePanelContainerResize=(e,t)=>{t!==this.state.mobilePanelHeight&&this.setState({mobilePanelHeight:t,generation:this.state.generation+1})},this.disablePageScroll=()=>{this.props.mapWidgetId||(document.body.style.overflowY="hidden")},this.enablePageScroll=()=>{this.props.mapWidgetId||(document.body.style.overflowY="")},this.getReferenceWidth=()=>{var e,t;return this.props.mapWidgetId?null!==(t=null===(e=this.parentReference)||void 0===e?void 0:e.clientWidth)&&void 0!==t?t:0:document.body.clientWidth},this.changeMobilePanelHeightInMap=e=>{if(this.props.mapWidgetId){const t=document.getElementsByClassName(`${this.props.mapWidgetId}-bottom-panel`);for(let o=0;o<t.length;o++)t[o].style.height=`${this.getExpectedHeightForStage(e)}px`}},this.id=(0,i.uuidv1)(),this.state=this.updateProperties()}componentDidMount(){if(this._isMounted=!0,this.props.mapWidgetId||window.addEventListener("resize",this.resize,!1),this.props.open){const e=xu.getInstance().getCurrentExpandStageInGroup(this.groupId)?xu.getInstance().getCurrentExpandStageInGroup(this.groupId):Hu.INITSCREEN;this.setState({currentExpandStage:e},(()=>{this.changeMobilePanelHeightInMap(e)}))}else this.setState({currentExpandStage:null},(()=>{this.changeMobilePanelHeightInMap(null)}))}componentDidUpdate(e,t){if(e.open!==this.props.open)if(this.props.open){const e=xu.getInstance().getCurrentExpandStageInGroup(this.groupId),t=this.getExpectedHeightForStage(e)||this.getExpectedHeightForStage(Hu.INITSCREEN);this.setState({currentExpandStage:e||Hu.INITSCREEN},(()=>{this.changeMobilePanelHeightInMap(this.state.currentExpandStage)})),this.currentBottomPanelHeight=t,xu.getInstance().setCurrentExpandStageInGroup(this.groupId,Hu.INITSCREEN),xu.getInstance().setCurrentIdInGroup(this.id,this.groupId)}else this.setState({currentExpandStage:null},(()=>{xu.getInstance().getCurrentIdInGroup(this.groupId)===this.id&&this.changeMobilePanelHeightInMap(null)})),this.currentBottomPanelHeight=0,xu.getInstance().setCurrentExpandStageInGroup(this.groupId,null)}componentWillUnmount(){this._isMounted=!1,xu.getInstance().removeMobilePanel(this),this.props.mapWidgetId||window.removeEventListener("resize",this.resize),xu.getInstance().getCurrentIdInGroup(this.groupId)===this.id&&xu.getInstance().setCurrentIdInGroup(null,this.groupId),this.changeMobilePanelHeightInMap(null),this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null)}render(){return this.props.open?i.React.createElement(pn,{className:"mobile-panel-popper",reference:this.parentReference,open:this.props.open,strategy:"fixed",modifiers:Wu,placement:"bottom",version:this.state.generation,style:{borderRadius:"10px"}},i.React.createElement("div",{style:{width:`${this.getReferenceWidth()}px`},className:this.props.className,onMouseDown:e=>{this.disablePageScroll()},onMouseUp:e=>{this.enablePageScroll()},onTouchStart:e=>{this.disablePageScroll()},onTouchEnd:e=>{this.enablePageScroll()}},i.React.createElement("div",{id:"exb-mobile-panel-shell"+this.id,className:"exbmap-ui w-100 expand-mobile-panel expand-mobile-panel-transition pl-2 pr-2",style:{height:`${this.sliding?this.currentBottomPanelHeight:this.getExpectedHeightForStage(this.state&&this.state.currentExpandStage)}px`}},i.React.createElement("div",{className:"mobile-panel-content-header d-flex align-items-center justify-content-between"},i.React.createElement("div",{className:"panel-title text-truncate",title:this.props.title},this.props.title),i.React.createElement("div",{onClick:this.handleClickCloseBtn,style:{pointerEvents:"auto",width:"40px",height:"30px"},className:"d-flex justify-content-end align-items-center"},i.React.createElement(Zl,{className:"panel-icon"}))),i.React.createElement("div",{className:"w-100 exb-mobile-panel-content"},this.props.open?this.props.children:null)),i.React.createElement("div",{className:"expand-mobile-panel-touch-container d-flex justify-content-center align-items-start pl-2 pr-2",onMouseDown:e=>this.start(e,"mouse"),onMouseMove:e=>{this.move(e,"mouse")},onMouseLeave:e=>{this.end(e,"mouse")},onMouseUp:e=>{this.end(e,"mouse")},onTouchStart:e=>this.start(e,"touch"),onTouchMove:e=>{this.move(e,"touch")},onTouchEnd:e=>{this.end(e,"touch")}},i.React.createElement("div",{className:"expand-mobile-panel-bar"})),i.React.createElement(i.ReactResizeDetector,{handleHeight:!0,onResize:this.onMobilePanelContainerResize}))):null}}const Gu=(0,c.withStyles)(Vu,"MobilePanel");class qu extends i.React.PureComponent{constructor(){super(...arguments),this.deleteLabel=(e,t)=>{var o,n;e.stopPropagation();const r=[...this.props.data];r.splice(t,1),(null===(o=null==this?void 0:this.props)||void 0===o?void 0:o.onChange)&&(null===(n=null==this?void 0:this.props)||void 0===n||n.onChange(r))}}render(){const{data:e}=this.props;return(0,i.jsx)("div",{className:(0,i.classNames)("jimu-tag",this.props.className)},e.length>0&&(0,i.jsx)("ul",{className:"choices-data-list text-left"},e.map(((e,t)=>(0,i.jsx)("li",{key:t},e,(0,i.jsx)("span",{onClick:e=>{this.deleteLabel(e,t)}},(0,i.jsx)(Zl,{size:"s"})))))))}}qu.defaultProps={data:[]};const Yu=(0,c.withStyles)(qu,"Tag"),Zu=e=>{const{name:t,data:o,isShowSelectList:n=!0,selectListData:r,className:a,menuProps:s,onChange:l}=e,c=Dt(Tt),[d,u]=i.React.useState(!1),[p,h]=i.React.useState(""),f=t||c("tag"),g=c("addTag",{lableName:f}),m=c("noTagMatch",{lableName:f}),v=i.React.useMemo((()=>n?(null!=r?r:[]).filter((e=>!o.includes(e))):[]),[o,n,r]),b=e=>{if(o.includes(e))return;const t=[...o,e];null==l||l(t),y()},y=()=>{h("")};return(0,i.jsx)("div",{className:(0,i.classNames)("tag-input",a)},(0,i.jsx)(Yu,{data:o,onChange:l}),(0,i.jsx)("div",{className:"position-relative"},(0,i.jsx)(La,{activeIcon:!0,autoWidth:!0,className:"tag-input-dropdown",size:"sm",isOpen:d,toggle:()=>{u((e=>!e))}},(0,i.jsx)(Va,{arrow:!1,tag:"div",size:"sm",type:"tertiary",className:"tag-text-input-container"},(0,i.jsx)(hs,{value:p,onChange:e=>{const t=e.target.value.replace(/(^\s*)|(\s*$)/g,"");h(t),u(!0)},onAcceptValue:e=>{var t;(t=e)&&""!==t.replace(/(^\s*)|(\s*$)/g,"")&&(b(e),u(!1))},className:"tag-text-input",size:"sm",placeholder:g})),n&&(0,i.jsx)(Ku,{selectData:v,onSelect:(e,t)=>{e.stopPropagation(),b(t),u(!1)},filterText:p,menuProps:s,emptyMessage:m}))))},Ku=e=>{const{selectData:t=[],onSelect:o,filterText:n,menuProps:r,emptyMessage:a}=e,s=t.filter((e=>e.includes(n)));return(0,i.jsx)(Xa,Object.assign({},r,{trapFocus:!1,autoFocus:!1}),s.map(((e,t)=>(0,i.jsx)(Ha,{key:t,onMouseDown:t=>o(t,e)},e))),0===s.length&&(0,i.jsx)("div",{className:"text-center"},a))},Xu=(0,c.withStyles)(Zu,"TagInput"),Qu=["title","height","width","class","style"],Ju={whiteList:{h1:Qu,h2:Qu,h3:Qu,h4:Qu,h5:Qu,h6:Qu,span:Qu,p:Qu,s:Qu,strong:Qu,em:Qu,u:Qu,ol:Qu,ul:Qu,li:Qu,br:[],a:["href","target"].concat(Qu),exp:Qu},safeAttrValue:function(e,t,o,n){return"a"===e&&"href"===t?i.xss.escapeAttrValue(o):i.xss.safeAttrValue(e,t,o,n)},onIgnoreTagAttr:function(e,t,o,n){if("data-"===t.substr(0,5))return t+'="'+i.xss.escapeAttrValue(o)+'"'},css:{onIgnoreAttr:function(e,t){return"line-height"===e?`line-height: ${i.xss.escapeAttrValue(t)}`:""}}},ep=new i.esri.Sanitizer(Ju);const{useMemo:tp}=i.React,op=i.React.forwardRef((function(e,t){const{className:o,value:n,sanitizer:r=ep}=e,a=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["className","value","sanitizer"]),s=tp((()=>r.sanitize(n)),[n,r]);return i.React.createElement("div",Object.assign({"data-testid":"rich-displayer",ref:t,className:(0,i.classNames)("rich-displayer",o),dangerouslySetInnerHTML:{__html:s}},a))})),np=(0,c.withStyles)(op,"RichDisplayer"),rp=e=>{var t,o,n;const{anchor:r,id:a}=e,s=i.ReactRedux.useDispatch(),l=i.ReactRedux.useSelector((e=>e.appRuntimeInfo.currentDialogId)),c=i.ReactRedux.useSelector((e=>{var t;return null===(t=e.queryObject)||void 0===t?void 0:t.dlg})),d=a&&a===l&&c!==a,u=a?null===(n=null===(o=null===(t=(0,i.getAppStore)().getState())||void 0===t?void 0:t.appConfig)||void 0===o?void 0:o.dialogs)||void 0===n?void 0:n[a]:null;return i.React.createElement(i.React.Fragment,null,d&&i.React.createElement(i.AppDialog,{dialogJson:u,isOpen:!!d,opener:r,toggle:()=>{s(i.appActions.currentDialogChanged(null))}}))};const ip=e=>{const t=i.ReactRedux.useDispatch();return()=>{var o,n,r,a,s,l,c,d,u,p,h,f,g,m;const v=null===(o=(0,i.getAppStore)())||void 0===o?void 0:o.getState(),b=null==v?void 0:v.queryObject,y=null===(n=null==v?void 0:v.appRuntimeInfo)||void 0===n?void 0:n.currentDialogId,w=null===(l=null===(a=null===(r=null==v?void 0:v.appConfig)||void 0===r?void 0:r.pages)||void 0===a?void 0:a[null===(s=v.appRuntimeInfo)||void 0===s?void 0:s.currentPageId])||void 0===l?void 0:l.autoOpenDialogId,x=null===(u=null===(c=null==v?void 0:v.appConfig)||void 0===c?void 0:c.dialogs[null===(d=v.appRuntimeInfo)||void 0===d?void 0:d.currentDialogId])||void 0===u?void 0:u.isSplash,S=(null===(g=null===(h=null===(p=null==v?void 0:v.appConfig)||void 0===p?void 0:p.pages)||void 0===h?void 0:h[null===(f=v.appRuntimeInfo)||void 0===f?void 0:f.currentPageId])||void 0===g?void 0:g.autoOpenDialogId)===(null===(m=null==v?void 0:v.appRuntimeInfo)||void 0===m?void 0:m.currentDialogId),O=x&&(w||b.dlg)||S&&y!==b.dlg&&b.dlg||null;setTimeout((()=>{e.current||t(i.appActions.selectionChanged(null))}),50),y!==O&&setTimeout((()=>{e.current||t(i.appActions.currentDialogChanged(O))}),50)}},ap=e=>{const[t,o]=i.React.useState(null),[n,r]=i.React.useState(),a=i.React.useRef(!1);Ht((()=>{a.current=!0}));const s=i.ReactRedux.useDispatch(),l=ip(a),{current:c}=i.React.useRef((0,i.getAppStore)().getState().appContext.isInBuilder),d=()=>{setTimeout((()=>{a.current||s(i.appActions.selectionChanged(null))}),50)};return[t,n,t=>{var n,u,p;const h=Dr(t.target,"A",t.currentTarget);if("A"===(null==h?void 0:h.nodeName)){const e=h.getAttribute("href"),f=h.target,g=(0,i.getAppStore)().getState().appRuntimeInfo.appMode;if(c&&g===i.AppMode.Run&&j(e,f))t.preventDefault(),o(h),r(e),setTimeout((()=>{a.current||(o(null),r(""))}),3e3);else{const a=h.getAttribute("data-link"),c=Or(a);if((null==c?void 0:c.linkType)===i.LinkType.Dialog){const e=null===(p=null===(u=null===(n=(0,i.getAppStore)().getState())||void 0===n?void 0:n.appConfig)||void 0===u?void 0:u.dialogs)||void 0===p?void 0:p[c.value];e&&e.mode===i.DialogMode.Anchored&&(t.preventDefault(),s(i.appActions.currentDialogChanged(e.id)),d(),o(h),r(c))}Ar(t,h)&&(t.preventDefault(),(null==c?void 0:c.linkType)===i.LinkType.Page?l():(null==c?void 0:c.linkType)===i.LinkType.Dialog&&d(),e&&i.jimuHistory.browserHistory.push(e))}}null==e||e(t)}]},sp=e=>{const[t,o]=i.React.useState();return i.React.useEffect((()=>{const t=Rr(e);o(t)}),[e]),t},lp=(e,t)=>{const[o,n]=i.React.useState(e);return i.React.useEffect((()=>{let o=$r(e,t);o=Mr(o,t),n(o)}),[e,t]),o},cp=i.React.memo(i.React.forwardRef((function(e,t){var o;const{onClick:n,useDataSources:r,widgetId:a,repeatedDataSource:s,value:l="",placeholder:c=""}=e,d=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["onClick","useDataSources","widgetId","repeatedDataSource","value","placeholder"]),[u,p,h]=ap(n),f=(null===(o=p)||void 0===o?void 0:o.linkType)===i.LinkType.Dialog?p.value:null,g=sp(l),[m,v]=(()=>{const[e,t]=i.React.useState((0,i.Immutable)({}));return[e,i.React.useCallback((e=>{const o=Ir(e);t(o)}),[])]})(),b=lp(l,m),y=!((e="")=>e.includes("</exp>"))(l)&&_r(b)?c:b,w=i.React.createElement(i.React.Fragment,null,i.React.createElement(np,Object.assign({ref:t,value:y,onClick:h},d)),p&&"string"==typeof p&&i.React.createElement(lr,{open:!0,href:p,reference:u}),i.React.createElement(rp,{id:f,anchor:u}));return(null==r?void 0:r.length)?i.React.createElement(i.ExpressionResolverComponent,Object.assign({},d,{expression:g,onChange:v,useDataSources:r,widgetId:a}),w):w})));function dp(){const e=[0];for(let t=1;t<=10;t++)e.push(t/10);return e}class up extends i.React.PureComponent{constructor(e){super(e),this.elemRef=i.React.createRef(),this.handleIntersectionChange=this.handleIntersectionChange.bind(this)}handleIntersectionChange(e){e.target.classList.contains("playing-animation")||this.props.onIntersectionChange(e.isIntersecting)}componentDidMount(){if(this.elemRef.current){const e=e=>{this.handleIntersectionChange(e[0])};this.observer=new IntersectionObserver(e,{threshold:dp(),root:document.body}),this.observer.observe(this.elemRef.current.parentNode)}}componentWillUnmount(){this.observer&&(this.observer.unobserve(this.elemRef.current.parentNode),this.observer=null)}render(){return(0,i.jsx)("div",{ref:this.elemRef,css:i.css`
          display: none;
        `})}}const{useCallback:pp,useState:hp,useMemo:fp,useEffect:gp}=i.React,{shallowEqual:mp,useSelector:vp}=i.ReactRedux,bp=/\<urlsearch((?!\<urlsearch).)+\<\/urlsearch\>/gim,yp=/data-urlinfo=\"(((?![\=|\>|\"]).)*)["\>|"\s)]/m,wp=document.createElement("div"),xp=i.React.forwardRef((function(e,t){const{useDataSources:o,widgetId:n,repeatedDataSource:r,value:a="",onHtmlResolved:s}=e,l=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["useDataSources","widgetId","repeatedDataSource","value","onHtmlResolved"]),c=fp((()=>(e=>{const t=Sr(e,bp);let o=(0,i.Immutable)({});return null==t||t.forEach((e=>{const t=(e=>{const t=e.match(yp),o=null==t?void 0:t[1];if(o)return Or(o)})(e),n=Cr(e);t&&n&&(o=o.set(n,t))})),o})(a)),[a]),d=vp((e=>(e.appStateInBuilder?e.appStateInBuilder:e).queryObject)),u=vp((e=>{const t=e.appStateInBuilder?e.appStateInBuilder:e,o={};return Object.keys(c).forEach((e=>{var n,r,i;const a=c[e].name,s=a.substring(1,a.length-1).split(".");if("appURL"!==s[0]){const e=null===(i=(null===(r=null===(n=null==t?void 0:t.appConfig)||void 0===n?void 0:n.widgets)||void 0===r?void 0:r[s[0]]).config)||void 0===i?void 0:i.expression;o[s[0]]=e}})),o}),mp),p=fp((()=>{const e=((e,t,o)=>{const n={};return Object.keys(e).forEach((r=>{var a;const s=e[r].name,l=s.substring(1,s.length-1).split(".");let c={};if("appURL"===l[0])c=t;else{const e=null===(a=o[l[0]])||void 0===a?void 0:a.replace(/<[^>]+>/g,"").replace(/\s/g,""),t=e?e.indexOf("?"):0;c=i.queryString.parse(e.substr(t))}n[r]=c[l[2]]})),(0,i.Immutable)(n)})(c,d,u);return((e,t)=>e.replace(bp,(e=>{const o=Cr(e);return o?t[o]||"":e})))(a,e)}),[a,c,d,u]),h=fp((()=>Nr(p)),[p]),[f,g]=(()=>{const[e,t]=hp((0,i.Immutable)({}));return[e,pp((e=>{const o=Ir(e);t(o)}),[])]})(),m=fp((()=>$r(p,f).replace(/<[^>]+>/g,"")),[p,f]);return gp((()=>{const e=(t=m,wp.innerHTML=t,wp.innerText);var t;s(e)}),[m]),i.React.createElement(i.ExpressionResolverComponent,Object.assign({},l,{expression:h,onChange:g,useDataSources:o,widgetId:n}))}));const{componentStyleUtils:Sp}=r,Op=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(r,["componentStyleUtils"]);(0,c.registerStyles)("jimu-ui",Op);const Ep=(0,c.withStyles)(ga.Z,"FormGroup"),kp=(0,c.withStyles)(va.Z,"FormText"),Cp=(0,c.withStyles)(ma.Z,"FormFeedback"),Np=(0,c.withStyles)(ba.Z,"InputGroup"),Tp=(0,c.withStyles)(ya.Z,"ListGroup"),Rp=(0,c.withStyles)(wa.Z,"ListGroupItem"),jp=(0,c.withStyles)(xa.Z,"Table")})(),l})())}}}));