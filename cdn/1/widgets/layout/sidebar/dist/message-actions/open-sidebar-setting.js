System.register(["jimu-core","jimu-theme","jimu-for-builder","jimu-ui/advanced/data-source-selector","jimu-ui/advanced/setting-components","jimu-ui"],(function(e,t){var a={},s={},o={},r={},i={},n={};return{setters:[function(e){a.DataSourceManager=e.DataSourceManager,a.Immutable=e.Immutable,a.MessageType=e.MessageType,a.React=e.React,a.jsx=e.jsx},function(e){s.withTheme=e.withTheme},function(e){o.messageActionUtils=e.messageActionUtils},function(e){r.AllDataSourceTypes=e.AllDataSourceTypes,r.DataSourceSelector=e.DataSourceSelector},function(e){i.SettingRow=e.SettingRow,i.SettingSection=e.SettingSection},function(e){n.Label=e.Label,n.Radio=e.Radio}],execute:function(){e((()=>{var e={79244:e=>{"use strict";e.exports=a},4108:e=>{"use strict";e.exports=o},1888:e=>{"use strict";e.exports=s},14321:e=>{"use strict";e.exports=n},13089:e=>{"use strict";e.exports=r},79298:e=>{"use strict";e.exports=i}},t={};function u(a){var s=t[a];if(void 0!==s)return s.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,u),o.exports}u.d=(e,t)=>{for(var a in t)u.o(t,a)&&!u.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},u.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),u.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.p="";var c={};return u.p=window.jimuConfig.baseUrl,(()=>{"use strict";u.r(c),u.d(c,{default:()=>d});var e=u(79244),t=u(1888),a=u(4108),s=u(13089);const o=(0,e.Immutable)([s.AllDataSourceTypes.FeatureLayer,s.AllDataSourceTypes.SceneLayer,s.AllDataSourceTypes.BuildingComponentSubLayer,s.AllDataSourceTypes.ImageryLayer,s.AllDataSourceTypes.OrientedImageryLayer,s.AllDataSourceTypes.SubtypeGroupLayer,s.AllDataSourceTypes.SubtypeSublayer]);function r(t){const{widgetId:r,messageType:i,useDataSources:n=(0,e.Immutable)([]),onChange:u}=t,c=a.messageActionUtils.getDsByWidgetId(r,i);let l=(0,e.Immutable)([]),d=(0,e.Immutable)([]);const p=e.DataSourceManager.getInstance();return null==c||c.forEach((e=>{const t=p.getDataSource(e.dataSourceId);t&&(t.type===s.AllDataSourceTypes.WebMap||t.type===s.AllDataSourceTypes.WebScene?l=l.concat([e.dataSourceId]):d=d.concat([t.isDataView?t.getMainDataSource().id:t.id]))})),0===l.length?l=void 0:d=void 0,e.React.useEffect((()=>{const e=(null==c?void 0:c.length)>0?c.map((e=>e.mainDataSourceId)):[],t=n.filter((t=>e.includes(t.dataSourceId)||e.includes(t.mainDataSourceId)||e.includes(t.rootDataSourceId)));t.length<n.length&&u(t.asMutable({deep:!0}))}),[c,u,n]),e.React.createElement(s.DataSourceSelector,{types:o,useDataSources:n.length>0?n:c,fromRootDsIds:l,fromDsIds:d,mustUseDataSource:!0,isMultiple:!0,isMultipleDataView:!0,hideAddDataButton:!0,hideDataView:!0,hideTypeDropdown:!0,enableToSelectOutputDsFromSelf:!0,onChange:u,disableRemove:e=>1===e.length})}var i=u(79298),n=u(14321);class l extends e.React.PureComponent{constructor(){super(...arguments),this.state={useCustomData:!1},this.handleDataChange=e=>{this.props.onSettingChange({actionId:this.props.actionId,config:{useDataSources:(null==e?void 0:e.length)>0?e:[]}})}}componentDidMount(){var e,t,a;(null===(e=this.props.config)||void 0===e?void 0:e.useDataSources)||this.handleDataChange([]),this.setState({useCustomData:(null===(a=null===(t=this.props.config)||void 0===t?void 0:t.useDataSources)||void 0===a?void 0:a.length)>0})}render(){var t;if(this.props.messageType!==e.MessageType.DataRecordsSelectionChange)return null;const{messageWidgetId:a,config:s}=this.props;return(0,e.jsx)(i.SettingSection,{className:"border-0",title:this.props.intl.formatMessage({id:"messageAction_TriggerData"})},(0,e.jsx)(i.SettingRow,null,(0,e.jsx)("div",null,(0,e.jsx)("div",null,(0,e.jsx)(n.Label,{check:!0,centric:!0},(0,e.jsx)(n.Radio,{name:"useAllData",style:{cursor:"pointer"},value:"all",className:"mr-2",checked:!this.state.useCustomData,onClick:()=>{this.setState({useCustomData:!1})}}),this.props.intl.formatMessage({id:"allDataWithoutCount"}))),(0,e.jsx)("div",{className:"mt-2"},(0,e.jsx)(n.Label,{check:!0,centric:!0},(0,e.jsx)(n.Radio,{name:"useCustomData",style:{cursor:"pointer"},value:"custom",className:"mr-2",checked:this.state.useCustomData,onClick:()=>{this.setState({useCustomData:!0})}}),this.props.intl.formatMessage({id:"custom"}))))),this.state.useCustomData&&(0,e.jsx)(i.SettingRow,{flow:"wrap"},(0,e.jsx)(r,{widgetId:a,messageType:e.MessageType.DataRecordsSelectionChange,useDataSources:(0,e.Immutable)(null!==(t=null==s?void 0:s.useDataSources)&&void 0!==t?t:[]),onChange:this.handleDataChange})))}}const d=(0,t.withTheme)(l)})(),c})())}}}));