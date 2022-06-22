System.register(["jimu-core","jimu-layouts/layout-runtime","jimu-theme","jimu-ui","jimu-ui/advanced/resource-selector","jimu-ui/advanced/setting-components","jimu-ui/basic/color-picker"],(function(e,t){var i={},n={},s={},a={},o={},l={},r={};return{setters:[function(e){i.AnimationDirection=e.AnimationDirection,i.AnimationEffectType=e.AnimationEffectType,i.AnimationPlayMode=e.AnimationPlayMode,i.AnimationTriggerType=e.AnimationTriggerType,i.AnimationType=e.AnimationType,i.Immutable=e.Immutable,i.LayoutItemType=e.LayoutItemType,i.React=e.React,i.ReactRedux=e.ReactRedux,i.TransitionDirection=e.TransitionDirection,i.TransitionType=e.TransitionType,i.classNames=e.classNames,i.css=e.css,i.defaultMessages=e.defaultMessages,i.getAppStore=e.getAppStore,i.injectIntl=e.injectIntl,i.jsx=e.jsx,i.lodash=e.lodash,i.polished=e.polished,i.utils=e.utils},function(e){n.LayoutItemSizeModes=e.LayoutItemSizeModes,n.utils=e.utils},function(e){s.registerStyles=e.registerStyles,s.styled=e.styled,s.useTheme2=e.useTheme2,s.withStyles=e.withStyles,s.withTheme=e.withTheme},function(e){a.AdvancedButtonGroup=e.AdvancedButtonGroup,a.BorderSides=e.BorderSides,a.Button=e.Button,a.ButtonGroup=e.ButtonGroup,a.Collapse=e.Collapse,a.DistanceUnits=e.DistanceUnits,a.Dropdown=e.Dropdown,a.DropdownButton=e.DropdownButton,a.DropdownItem=e.DropdownItem,a.DropdownMenu=e.DropdownMenu,a.EsriSimpleLineSymbolStyle=e.EsriSimpleLineSymbolStyle,a.FillType=e.FillType,a.Icon=e.Icon,a.InputGroup=e.InputGroup,a.NormalLineType=e.NormalLineType,a.NumericInput=e.NumericInput,a.Option=e.Option,a.SVG=e.SVG,a.Select=e.Select,a.Sides=e.Sides,a.Tab=e.Tab,a.Tabs=e.Tabs,a.TextAlignValue=e.TextAlignValue,a.Tooltip=e.Tooltip,a.defaultMessages=e.defaultMessages,a.hooks=e.hooks,a.styleUtils=e.styleUtils,a.utils=e.utils},function(e){o.IconPicker=e.IconPicker,o.ImageSelector=e.ImageSelector},function(e){l.SettingRow=e.SettingRow,l.SettingSection=e.SettingSection,l.SidePopper=e.SidePopper},function(e){r.ThemeColorPicker=e.ThemeColorPicker}],execute:function(){e((()=>{var e={18371:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m6.036 12.157 8.01-8.01a.5.5 0 1 1 .707.707l-8.01 8.01a1 1 0 0 1-1.415 0L1.146 8.682a.5.5 0 1 1 .708-.707l4.182 4.182Z" fill="#000"></path></svg>'},53073:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.373 5.57 8 .5 5.625 5.57 0 6.23l4.158 3.792L3.056 15.5 8 12.773l4.944 2.727-1.103-5.478L16 6.229l-5.627-.66ZM8 2.857l1.705 3.641 4.002.469-2.957 2.697.788 3.918L8 11.631l-3.539 1.951.79-3.918-2.959-2.697 4.002-.469L8 2.857Z" fill="#000"></path></svg>'},11587:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 1c.291 0 .527.231.527.516v11.508L11.6 9.527a.535.535 0 0 1 .746 0 .508.508 0 0 1 0 .73L7.5 15l-4.846-4.743a.508.508 0 0 1 0-.73.535.535 0 0 1 .746 0l3.573 3.497V1.516c0-.285.236-.516.527-.516Z" fill="#000"></path></svg>'},33869:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 7.5a.522.522 0 0 1-.516.527H2.976L6.473 11.6a.535.535 0 0 1 0 .746.508.508 0 0 1-.73 0L1 7.5l4.743-4.846a.508.508 0 0 1 .73 0 .535.535 0 0 1 0 .746L2.976 6.973h11.508c.285 0 .516.236.516.527Z" fill="#000"></path></svg>'},28630:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 7.5c0-.291.231-.527.516-.527h11.508L9.527 3.4a.535.535 0 0 1 0-.746.508.508 0 0 1 .73 0L15 7.5l-4.743 4.846a.508.508 0 0 1-.73 0 .535.535 0 0 1 0-.746l3.497-3.573H1.516A.522.522 0 0 1 1 7.5Z" fill="#000"></path></svg>'},35733:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 15a.522.522 0 0 1-.527-.516V2.976L3.4 6.473a.535.535 0 0 1-.746 0 .508.508 0 0 1 0-.73L7.5 1l4.846 4.743a.508.508 0 0 1 0 .73.535.535 0 0 1-.746 0L8.027 2.976v11.508A.522.522 0 0 1 7.5 15Z" fill="#000"></path></svg>'},59788:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.146 4.653a.485.485 0 0 1 .708 0L8 10.24l5.146-5.587a.485.485 0 0 1 .708 0 .538.538 0 0 1 0 .738l-5.5 5.956a.485.485 0 0 1-.708 0l-5.5-5.956a.538.538 0 0 1 0-.738Z" fill="#000"></path></svg>'},35212:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 3a1 1 0 0 1 1-1h2.75a3.25 3.25 0 0 1 2.33 5.516A3.25 3.25 0 0 1 9.75 14H5a1 1 0 0 1-1-1V3Zm1 4.5h2.75a2.25 2.25 0 0 0 0-4.5H5v4.5Zm0 1V13h4.75a2.25 2.25 0 0 0 0-4.5H5Z" fill="#000"></path></svg>'},81874:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-2l-2 10h2a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h2l2-10h-2a.5.5 0 0 1-.5-.5Z" fill="#000"></path></svg>'},30840:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 0A3.5 3.5 0 0 1 11 3.5V6h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1V3.5A3.5 3.5 0 0 1 7.5 0ZM5 6h5V3.5a2.5 2.5 0 0 0-2.336-2.495L7.5 1a2.5 2.5 0 0 0-2.495 2.336L5 3.5V6Zm6 1H3v8h9V7h-1Zm-3.5 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" fill="#000"></path></svg>'},56097:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="m2 1 12 7-12 7V1Zm9.983 6.999L3 2.723v10.553l8.983-5.277Z" fill="#000"></path></svg>'},58285:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 2.02a.02.02 0 0 0-.02-.02H8a3 3 0 0 0-2.829 4l1.097.001A2 2 0 0 1 8 3h2v.5a.5.5 0 0 0 1 0V2.02ZM12.5 7a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1h9Zm-1.9 1.999h1.111c.185.456.289.964.289 1.501 0 1.866-1.252 3.392-2.83 3.495L9 14H6a1 1 0 0 1-1-1v-.5a.5.5 0 0 1 1 0v.499L9 13c1.105 0 2-1.12 2-2.5a2.96 2.96 0 0 0-.311-1.34L10.599 9Z" fill="#000"></path></svg>'},13468:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Zm0 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM2 6.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5Zm.5 5.5a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11Z" fill="#000"></path></svg>'},67653:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 3a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11Zm0 6a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11ZM2 6.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5Zm.5 5.5a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11Z" fill="#000"></path></svg>'},47118:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 3h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1Zm-7 3h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1Zm6 3h-6a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1Zm5 3h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1Z" fill="#000"></path></svg>'},192:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 3a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Zm1 6a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6ZM4 6.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5ZM2.5 12a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11Z" fill="#000"></path></svg>'},71007:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 2.5a.5.5 0 0 0-1 0V8a4 4 0 0 0 8 0V2.5a.5.5 0 0 0-1 0V8a3 3 0 0 1-6 0V2.5Zm7 11a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5Z" fill="#000"></path></svg>'},57322:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 3.5a3.5 3.5 0 1 0-7 0V6H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-2V3.5l.005-.164A2.5 2.5 0 0 1 12.5 1l.164.005A2.5 2.5 0 0 1 15 3.5a.5.5 0 0 0 1 0ZM9 7H3v8h9V7H9Zm-1.5 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" fill="#000"></path></svg>'},88866:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6.5 7.5A.5.5 0 0 1 7 7h1.5v4.5h1a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1h1V8H7a.5.5 0 0 1-.5-.5Z" fill="#000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16Zm0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14Z" fill="#000"></path></svg>'},69625:e=>{e.exports='<svg viewBox="0 0 46 1" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0h5v1H0V0Zm10 0h5v1h-5V0Zm15 0h-5v1h5V0Zm5 0h5v1h-5V0Zm16 0h-6v1h6V0ZM7 0h1v1H7V0Zm11 0h-1v1h1V0Zm9 0h1v1h-1V0Zm11 0h-1v1h1V0Z" fill="#fff"></path></svg>'},68930:e=>{e.exports='<svg viewBox="0 0 46 1" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 0H0v1h5V0Zm13 0h-5v1h5V0Zm8 0h5v1h-5V0Zm20 0h-7v1h7V0ZM7 0h1v1H7V0Zm14 0h-1v1h1V0Zm12 0h1v1h-1V0ZM11 0h-1v1h1V0Zm12 0h1v1h-1V0Zm14 0h-1v1h1V0Z" fill="#fff"></path></svg>'},61733:e=>{e.exports='<svg viewBox="0 0 46 1" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 1h3V0H0v1ZM6 1h3V0H6v1ZM15 1h-3V0h3v1ZM18 1h3V0h-3v1ZM27 1h-3V0h3v1ZM30 1h3V0h-3v1ZM39 1h-3V0h3v1ZM42 1h4V0h-4v1Z" fill="#fff"></path></svg>'},1465:e=>{e.exports='<svg viewBox="0 0 46 1" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 1h1V0H0v1Zm6 0h1V0H6v1Zm7 0h-1V0h1v1Zm5 0h1V0h-1v1Zm7 0h-1V0h1v1Zm5 0h1V0h-1v1Zm7 0h-1V0h1v1ZM3 1h1V0H3v1Zm7 0H9V0h1v1Zm5 0h1V0h-1v1Zm7 0h-1V0h1v1Zm5 0h1V0h-1v1Zm7 0h-1V0h1v1Zm5 0h1V0h-1v1Zm4 0h-1V0h1v1Zm2 0h1V0h-1v1Z" fill="#fff"></path></svg>'},21161:e=>{e.exports='<svg viewBox="0 0 46 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 1h46V0H0v1ZM0 4h46V3H0v1Z" fill="#fff"></path></svg>'},47383:e=>{e.exports='<svg viewBox="0 0 46 1" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M46 1H0V0h46v1Z" fill="#fff"></path></svg>'},82744:e=>{e.exports='<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M6 0a6 6 0 1 1 0 12A6 6 0 0 1 6 0Zm0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" fill="#000" fill-rule="nonzero"></path></svg>'},29965:e=>{e.exports='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m10 0 10 10-10 10L0 10z" fill="#000" fill-rule="nonzero"></path></svg>'},63503:e=>{e.exports='<svg viewBox="0 0 6 6" xmlns="http://www.w3.org/2000/svg"><circle cx="1104" cy="1049" r="3" transform="translate(-1101 -1046)" fill="#000" fill-rule="nonzero"></circle></svg>'},91112:e=>{e.exports='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0Zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm0 2a6 6 0 1 1 0 12 6 6 0 0 1 0-12Z" fill="#000" fill-rule="nonzero"></path></svg>'},38586:e=>{e.exports='<svg viewBox="0 0 8 4" xmlns="http://www.w3.org/2000/svg"><rect x="1103" y="1123" width="8" height="4" rx="2" transform="translate(-1103 -1123)" fill="#000" fill-rule="nonzero"></rect></svg>'},38275:e=>{e.exports='<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="m6.828.535 4.966 11.01A.323.323 0 0 1 11.5 12a.776.776 0 0 1-.707-.455L9.182 8H2.818l-1.611 3.545A.776.776 0 0 1 .5 12a.323.323 0 0 1-.294-.456L5.172.535a.909.909 0 0 1 1.656 0ZM6 1 3.272 7h5.456L6 1Z" fill="#000" fill-rule="nonzero"></path></svg>'},94850:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTIiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCA5MiA3MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDYgNDhMMzEuODkzMiA1NS40MTY0TDM0LjU4NzMgMzkuNzA4MkwyMy4xNzQ2IDI4LjU4MzZMMzguOTQ2NiAyNi4yOTE4TDQ2IDEyTDUzLjA1MzQgMjYuMjkxOEw2OC44MjU0IDI4LjU4MzZMNTcuNDEyNyAzOS43MDgyTDYwLjEwNjggNTUuNDE2NEw0NiA0OFoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8xXzI5OTApIi8+DQo8ZGVmcz4NCjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8xXzI5OTAiIHgxPSI2Ny43MjQ5IiB5MT0iMTcuMzMxMyIgeDI9IjM3Ljc5NTEiIHkyPSIxNy4zMzEzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+DQo8c3RvcCBzdG9wLWNvbG9yPSIjNkE2QTZBIi8+DQo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMyODI4MjgiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8L2RlZnM+DQo8L3N2Zz4NCg=="},57223:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTIiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCA5MiA3MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDYgNDhMMzEuODkzMiA1NS40MTY0TDM0LjU4NzMgMzkuNzA4MkwyMy4xNzQ2IDI4LjU4MzZMMzguOTQ2NiAyNi4yOTE4TDQ2IDEyTDUzLjA1MzQgMjYuMjkxOEw2OC44MjU0IDI4LjU4MzZMNTcuNDEyNyAzOS43MDgyTDYwLjEwNjggNTUuNDE2NEw0NiA0OFoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8xXzMwMTYpIi8+DQo8cmVjdCB4PSI1MyIgeT0iNTQiIHdpZHRoPSI4IiBoZWlnaHQ9IjIiIHRyYW5zZm9ybT0icm90YXRlKDkwIDUzIDU0KSIgZmlsbD0idXJsKCNwYWludDFfbGluZWFyXzFfMzAxNikiLz4NCjxyZWN0IHg9IjQxIiB5PSI1NCIgd2lkdGg9IjgiIGhlaWdodD0iMiIgdHJhbnNmb3JtPSJyb3RhdGUoOTAgNDEgNTQpIiBmaWxsPSJ1cmwoI3BhaW50Ml9saW5lYXJfMV8zMDE2KSIvPg0KPHJlY3QgeD0iNDciIHk9IjUxLjUiIHdpZHRoPSIxMSIgaGVpZ2h0PSIyIiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA0NyA1MS41KSIgZmlsbD0idXJsKCNwYWludDNfbGluZWFyXzFfMzAxNikiLz4NCjxkZWZzPg0KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzFfMzAxNiIgeDE9IjU4LjA3NjMiIHkxPSI1Ni4xODk4IiB4Mj0iNTguMDc2MyIgeTI9IjMyLjAzNzIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4NCjxzdG9wIHN0b3AtY29sb3I9IiM2QTZBNkEiLz4NCjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzI4MjgyOCIvPg0KPC9saW5lYXJHcmFkaWVudD4NCjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhcl8xXzMwMTYiIHgxPSI1MyIgeTE9IjU2IiB4Mj0iNjEiIHkyPSI1NiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPg0KPHN0b3Agc3RvcC1jb2xvcj0iIzZBNkE2QSIvPg0KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNkE2QTZBIiBzdG9wLW9wYWNpdHk9IjAuMDEiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50Ml9saW5lYXJfMV8zMDE2IiB4MT0iNDEiIHkxPSI1NiIgeDI9IjQ5IiB5Mj0iNTYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4NCjxzdG9wIHN0b3AtY29sb3I9IiM2QTZBNkEiLz4NCjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzZBNkE2QSIgc3RvcC1vcGFjaXR5PSIwLjAxIi8+DQo8L2xpbmVhckdyYWRpZW50Pg0KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDNfbGluZWFyXzFfMzAxNiIgeDE9IjQ3IiB5MT0iNTMuNSIgeDI9IjU4IiB5Mj0iNTMuNSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPg0KPHN0b3Agc3RvcC1jb2xvcj0iIzZBNkE2QSIvPg0KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNkE2QTZBIiBzdG9wLW9wYWNpdHk9IjAuMDEiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8L2RlZnM+DQo8L3N2Zz4NCg=="},64037:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTIiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCA5MiA3MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDcgNDhMMzIuODkzMiA1NS40MTY0TDM1LjU4NzMgMzkuNzA4MkwyNC4xNzQ2IDI4LjU4MzZMMzkuOTQ2NiAyNi4yOTE4TDQ3IDEyTDU0LjA1MzQgMjYuMjkxOEw2OS44MjU0IDI4LjU4MzZMNTguNDEyNyAzOS43MDgyTDYxLjEwNjggNTUuNDE2NEw0NyA0OFoiIGZpbGw9IiM2QTZBNkEiLz4NCjxyZWN0IHg9IjIxIiB5PSIxNiIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8xXzMwMDYpIi8+DQo8cmVjdCB4PSIyMSIgeT0iMjIiIHdpZHRoPSIxNyIgaGVpZ2h0PSIyIiBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXJfMV8zMDA2KSIvPg0KPHJlY3QgeD0iMjEiIHk9IjM2IiB3aWR0aD0iOSIgaGVpZ2h0PSIyIiBmaWxsPSJ1cmwoI3BhaW50Ml9saW5lYXJfMV8zMDA2KSIvPg0KPHJlY3QgeD0iMjEiIHk9IjQ4IiB3aWR0aD0iOSIgaGVpZ2h0PSIyIiBmaWxsPSJ1cmwoI3BhaW50M19saW5lYXJfMV8zMDA2KSIvPg0KPHJlY3QgeD0iMjEiIHk9IjQyIiB3aWR0aD0iMTIiIGhlaWdodD0iMiIgZmlsbD0idXJsKCNwYWludDRfbGluZWFyXzFfMzAwNikiLz4NCjxkZWZzPg0KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzFfMzAwNiIgeDE9IjIxIiB5MT0iMTgiIHgyPSI0MSIgeTI9IjE4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+DQo8c3RvcCBzdG9wLWNvbG9yPSIjNkE2QTZBIiBzdG9wLW9wYWNpdHk9IjAuMDEiLz4NCjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzZBNkE2QSIvPg0KPC9saW5lYXJHcmFkaWVudD4NCjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhcl8xXzMwMDYiIHgxPSIyMSIgeTE9IjI0IiB4Mj0iMzgiIHkyPSIyNCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPg0KPHN0b3Agc3RvcC1jb2xvcj0iIzZBNkE2QSIgc3RvcC1vcGFjaXR5PSIwLjAxIi8+DQo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM2QTZBNkEiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50Ml9saW5lYXJfMV8zMDA2IiB4MT0iMjEiIHkxPSIzOCIgeDI9IjMwIiB5Mj0iMzgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4NCjxzdG9wIHN0b3AtY29sb3I9IiM2QTZBNkEiIHN0b3Atb3BhY2l0eT0iMC4wMSIvPg0KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNkE2QTZBIi8+DQo8L2xpbmVhckdyYWRpZW50Pg0KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDNfbGluZWFyXzFfMzAwNiIgeDE9IjIxIiB5MT0iNTAiIHgyPSIzMCIgeTI9IjUwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+DQo8c3RvcCBzdG9wLWNvbG9yPSIjNkE2QTZBIiBzdG9wLW9wYWNpdHk9IjAuMDEiLz4NCjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzZBNkE2QSIvPg0KPC9saW5lYXJHcmFkaWVudD4NCjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQ0X2xpbmVhcl8xXzMwMDYiIHgxPSIyMSIgeTE9IjQ0IiB4Mj0iMzMiIHkyPSI0NCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPg0KPHN0b3Agc3RvcC1jb2xvcj0iIzZBNkE2QSIgc3RvcC1vcGFjaXR5PSIwLjAxIi8+DQo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM2QTZBNkEiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8L2RlZnM+DQo8L3N2Zz4NCg=="},89781:e=>{e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjkycHgiIGhlaWdodD0iNzJweCIgdmlld0JveD0iMCAwIDkyIDcyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT5pY29uX2FuaW1hdGlvbl9pbl9ub25lPC90aXRsZT4NCiAgICA8ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTk0MS4wMDAwMDAsIC0xOTIuMDAwMDAwKSI+DQogICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5MTcuMDAwMDAwLCA1Mi4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNC4wMDAwMDAsIDE0MC4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgPHJlY3QgZmlsbC1ydWxlPSJub256ZXJvIiB4PSIwIiB5PSIwIiB3aWR0aD0iOTIiIGhlaWdodD0iNzIiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0iIzZBNkE2QSIgcG9pbnRzPSI0NiA0OCAzMS44OTMxNTM5IDU1LjQxNjQwNzkgMzQuNTg3MzIxOCAzOS43MDgyMDM5IDIzLjE3NDY0MzYgMjguNTgzNTkyMSAzOC45NDY1NzcgMjYuMjkxNzk2MSA0NiAxMiA1My4wNTM0MjMgMjYuMjkxNzk2MSA2OC44MjUzNTY0IDI4LjU4MzU5MjEgNTcuNDEyNjc4MiAzOS43MDgyMDM5IDYwLjEwNjg0NjEgNTUuNDE2NDA3OSI+PC9wb2x5Z29uPg0KICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg=="},63619:e=>{e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjkycHgiIGhlaWdodD0iNzJweCIgdmlld0JveD0iMCAwIDkyIDcyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT5pY29uX2FuaW1hdGlvbl9pbl9zcGluPC90aXRsZT4NCiAgICA8ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEwNjEuMDAwMDAwLCAtNTUyLjAwMDAwMCkiPg0KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTE3LjAwMDAwMCwgNTIuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTQ0LjAwMDAwMCwgNTAwLjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgICAgICA8cmVjdCBmaWxsLXJ1bGU9Im5vbnplcm8iIHg9IjAiIHk9IjAiIHdpZHRoPSI5MiIgaGVpZ2h0PSI3MiI+PC9yZWN0Pg0KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNDUuNjY2NjY2NywxMyBMNTIuNzIwMDg5NywyNy4yOTE3OTYxIEw2OC40OTIwMjMxLDI5LjU4MzU5MjEgTDU3LjA3OTM0NDksNDAuNzA4MjAzOSBMNTkuNzczNTEyNyw1Ni40MTY0MDc5IEw0NS42NjY2NjY3LDQ5IEwzMS41NTk4MjA2LDU2LjQxNjQwNzkgTDM0LjI1Mzk4ODUsNDAuNzA4MjAzOSBMMjIuODQxMzEwMywyOS41ODM1OTIxIEwzOC42MTMyNDM2LDI3LjI5MTc5NjEgTDQ1LjY2NjY2NjcsMTMgWiBNNzYuNjY2NjY2NywyMy42NjY2NjY3IEw3Ni42NjY2NjY3LDI1IEw3My4wODkzMzMzLDI1IEM3My41MjUzMzMzLDI1LjMzMzMzMzMgNzQuMDg0LDI1Ljc2NjY2NjcgNzQuMzkxMzMzMywyNi4wNDY2NjY3IEM3NS44MjgsMjcuMzU2NjY2NyA3Ni42NjY2NjY3LDI4Ljg0MTMzMzMgNzYuNjY2NjY2NywzMC42NjY2NjY3IEM3Ni42NjY2NjY3LDM0LjkyNjY2NjcgNzMuNzI1MzMzMywzNyA3MCwzNyBMNzAsMzUuNjY2NjY2NyBDNzMuMDY4NjY2NywzNS42NjY2NjY3IDc1LjMzMzMzMzMsMzQuMDcgNzUuMzMzMzMzMywzMC42NjY2NjY3IEM3NS4zMzMzMzMzLDI5LjI3MjY2NjcgNzQuNjc4LDI4LjExMiA3My40OTMzMzMzLDI3LjAzMzMzMzMgQzczLjE4NCwyNi43NTA2NjY3IDcyLjQ3ODY2NjcsMjYuMjEzMzMzMyA3MiwyNS44NDUzMzMzIEw3MiwyOS42NjY2NjY3IEw3MC42NjY2NjY3LDI5LjY2NjY2NjcgTDcwLjY2NjY2NjcsMjMuNjY2NjY2NyBMNzYuNjY2NjY2NywyMy42NjY2NjY3IFogTTE5LDIzLjY2NjY2NjcgTDE5LDI1IEMxNS45MzEzMzMzLDI1IDEzLjY2NjY2NjcsMjYuNTk2NjY2NyAxMy42NjY2NjY3LDMwIEMxMy42NjY2NjY3LDMxLjM5NCAxNC4zMjIsMzIuNTU0NjY2NyAxNS41MDY2NjY3LDMzLjYzMzMzMzMgQzE1LjgxNiwzMy45MTYgMTYuNTIxMzMzMywzNC40NTMzMzMzIDE3LDM0LjgyMTMzMzMgTDE3LDMxIEwxOC4zMzMzMzMzLDMxIEwxOC4zMzMzMzMzLDM3IEwxMi4zMzMzMzMzLDM3IEwxMi4zMzMzMzMzLDM1LjY2NjY2NjcgTDE1LjkxMDY2NjcsMzUuNjY2NjY2NyBDMTUuNDc0NjY2NywzNS4zMzMzMzMzIDE0LjkxNiwzNC45IDE0LjYwODY2NjcsMzQuNjIgQzEzLjE3MiwzMy4zMSAxMi4zMzMzMzMzLDMxLjgyNTMzMzMgMTIuMzMzMzMzMywzMCBDMTIuMzMzMzMzMywyNS43NCAxNS4yNzQ2NjY3LDIzLjY2NjY2NjcgMTksMjMuNjY2NjY2NyBaIE00MC4zMzMzMzMzLDQgTDQwLjMzMzMzMzMsNy41NzczMzMzMyBDNDAuNjY2NjY2Nyw3LjE0MTMzMzMzIDQxLjEsNi41ODI2NjY2NiA0MS4zOCw2LjI3NTMzMzMzIEM0Mi42OSw0LjgzODY2NjY3IDQ0LjE3NDY2NjcsNCA0Niw0IEM1MC4yNiw0IDUyLjMzMzMzMzMsNi45NDEzMzMzMyA1Mi4zMzMzMzMzLDEwLjY2NjY2NjcgTDUxLDEwLjY2NjY2NjcgQzUxLDcuNTk4IDQ5LjQwMzMzMzMsNS4zMzMzMzMzNCA0Niw1LjMzMzMzMzMzIEM0NC42MDYsNS4zMzMzMzMzMyA0My40NDUzMzMzLDUuOTg4NjY2NjYgNDIuMzY2NjY2Nyw3LjE3MzMzMzMzIEM0Mi4wODQsNy40ODI2NjY2NiA0MS41NDY2NjY3LDguMTg4IDQxLjE3ODY2NjcsOC42NjY2NjY2NyBMNDUsOC42NjY2NjY2NyBMNDUsMTAgTDM5LDEwIEwzOSw0IEw0MC4zMzMzMzMzLDQgWiIgZmlsbD0iIzZBNkE2QSI+PC9wYXRoPg0KICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg=="},19502:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTIiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCA5MiA3MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDYgNDhMMzEuODkzMiA1NS40MTY0TDM0LjU4NzMgMzkuNzA4MkwyMy4xNzQ2IDI4LjU4MzZMMzguOTQ2NiAyNi4yOTE4TDQ2IDEyTDUzLjA1MzQgMjYuMjkxOEw2OC44MjU0IDI4LjU4MzZMNTcuNDEyNyAzOS43MDgyTDYwLjEwNjggNTUuNDE2NEw0NiA0OFoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8xXzMwMjMpIi8+DQo8ZGVmcz4NCjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8xXzMwMjMiIHgxPSI1OC4wNzYzIiB5MT0iNTYuMTg5OCIgeDI9IjU4LjA3NjMiIHkyPSIzMi4wMzcyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+DQo8c3RvcCBzdG9wLWNvbG9yPSIjNkE2QTZBIi8+DQo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMyODI4MjgiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8L2RlZnM+DQo8L3N2Zz4NCg=="},63291:e=>{e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjkycHgiIGhlaWdodD0iNzJweCIgdmlld0JveD0iMCAwIDkyIDcyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT5pY29uX2FuaW1hdGlvbl9pbl96b29tPC90aXRsZT4NCiAgICA8ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTk0MS4wMDAwMDAsIC00MzIuMDAwMDAwKSI+DQogICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5MTcuMDAwMDAwLCA1Mi4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNC4wMDAwMDAsIDM4MC4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgPHJlY3QgZmlsbC1ydWxlPSJub256ZXJvIiB4PSIwIiB5PSIwIiB3aWR0aD0iOTIiIGhlaWdodD0iNzIiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTkuMDAwMDAwLCAxMS4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9IiMzNjM2MzYiIHBvaW50cz0iMjYgMzYgMTEuODkzMTUzOSA0My40MTY0MDc5IDE0LjU4NzMyMTggMjcuNzA4MjAzOSAzLjE3NDY0MzYxIDE2LjU4MzU5MjEgMTguOTQ2NTc3IDE0LjI5MTc5NjEgMjYgMCAzMy4wNTM0MjMgMTQuMjkxNzk2MSA0OC44MjUzNTY0IDE2LjU4MzU5MjEgMzcuNDEyNjc4MiAyNy43MDgyMDM5IDQwLjEwNjg0NjEgNDMuNDE2NDA3OSI+PC9wb2x5Z29uPg0KICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0iIzZBNkE2QSIgcG9pbnRzPSIyNiAzMCAxOC45NDY1NzcgMzMuNzA4MjAzOSAyMC4yOTM2NjA5IDI1Ljg1NDEwMiAxNC41ODczMjE4IDIwLjI5MTc5NjEgMjIuNDczMjg4NSAxOS4xNDU4OTggMjYgMTIgMjkuNTI2NzExNSAxOS4xNDU4OTggMzcuNDEyNjc4MiAyMC4yOTE3OTYxIDMxLjcwNjMzOTEgMjUuODU0MTAyIDMzLjA1MzQyMyAzMy43MDgyMDM5Ij48L3BvbHlnb24+DQogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjYuMDk4OTk5NSw0MSBDMjYuMzg5MjQ2Niw0MS4wMDI2ODc3IDI2LjYzNDczNzQsNDEuMjM4NDYxNCAyNi42NDczMTgzLDQxLjUyNjY1NjMgTDI2LjY0OTIyMjIsNDguOTMwMzk5OCBMMzAuMDU3MDE1LDQ1LjQyNTg3NTEgQzMwLjI1MzM1NDgsNDUuMjIzOTYyIDMwLjU4NjEwOCw0NS4yMjY5OTY0IDMwLjgwMDIzOTksNDUuNDMyNjUyNSBDMzEuMDE0MzcxOCw0NS42MzgzMDg1IDMxLjAyODc5NTIsNDUuOTY4NzA4NiAzMC44MzI0NTUzLDQ2LjE3MDYyMTcgTDI2LjIxMDg5MzMsNTAuOTIzMzY5MSBMMjEuMTcwNTMxMiw0Ni4wODI1MTYyIEMyMC45NTYzOTkyLDQ1Ljg3Njg2MDIgMjAuOTQxOTc1OSw0NS41NDY0NjAxIDIxLjEzODMxNTgsNDUuMzQ0NTQ3IEMyMS4zMzQ2NTU2LDQ1LjE0MjYzMzkgMjEuNjY3NDA4OCw0NS4xNDU2NjgyIDIxLjg4MTU0MDcsNDUuMzUxMzI0MyBMMjUuNTk4MTQzNCw0OC45MjA4MTUyIEwyNS41OTYyMzk1LDQxLjUxNzA3MTcgQzI1LjU4MzY1ODYsNDEuMjI4ODc2OCAyNS44MDg3NTE4LDQwLjk5NzM5NDIgMjYuMDk4OTk5NSw0MSBaIE00OS4yMjkxODExLDI3LjIwMzgyIEM0OS40ODgwNDUxLDI3LjA5Mjg4MDEgNDkuNzkxMzMxMywyNy4yMjQ3NTAzIDQ5LjkwNjU4OTcsMjcuNDk4MzYwMiBMNDkuOTA2NTg5NywyNy40OTgzNjAyIEw1Mi42MTk2MTEsMzMuOTM4NzUwMSBMNDYuNTI2MzE5MywzNi41NTAxMTc2IEM0Ni4yNjc0NTUzLDM2LjY2MTA1NzUgNDUuOTY0MTY5MSwzNi41MjkxODc0IDQ1Ljg0ODkxMDYsMzYuMjU1NTc3NSBDNDUuNzMzNjUyMiwzNS45ODE5Njc1IDQ1Ljg1MDA2NzQsMzUuNjcwMjI4MyA0Ni4xMDg5MzE1LDM1LjU1OTI4ODQgTDQ2LjEwODkzMTUsMzUuNTU5Mjg4NCBMNTAuNjAxOTMwOSwzMy42MzM3NDkxIEw0My42OTA2MjMxLDMwLjk3ODcwNzMgQzQzLjQyNjA3ODYsMzAuODYzNjgyMiA0My4yOTM5NDA5LDMwLjU1MDAwMyA0My4zOTU0ODUzLDMwLjI3ODA4NTIgQzQzLjQ5NzAyOTcsMzAuMDA2MTY3NSA0My43OTM4MDM1LDI5Ljg3ODk4MDggNDQuMDU4MzQ4LDI5Ljk5NDAwNTkgTDQ0LjA1ODM0OCwyOS45OTQwMDU5IEw1MC45Njk2NTU4LDMyLjY0OTA0NzcgTDQ4Ljk2OTE2MDMsMjcuOTAwMTA5MSBDNDguODUzOTAxOCwyNy42MjY0OTkxIDQ4Ljk3MDMxNzEsMjcuMzE0NzU5OSA0OS4yMjkxODExLDI3LjIwMzgyIFogTTMuMzkwNDI5OSwyNy4yMDM4MiBDMy42NDkyOTM5MSwyNy4zMTQ3NTk5IDMuNzY1NzA5MTgsMjcuNjI2NDk5MSAzLjY1MDQ1MDcsMjcuOTAwMTA5MSBMMS42NDk5NTUxNiwzMi42NDkwNDc3IEw4LjU2MTI2MjkyLDI5Ljk5NDAwNTkgQzguODI1ODA3NDYsMjkuODc4OTgwOCA5LjEyMjU4MTIyLDMwLjAwNjE2NzUgOS4yMjQxMjU2NiwzMC4yNzgwODUyIEM5LjMyNTY3MDEsMzAuNTUwMDAzIDkuMTkzNTMyNDEsMzAuODYzNjgyMiA4LjkyODk4Nzg2LDMwLjk3ODcwNzMgTDIuMDE3NjgwMTEsMzMuNjMzNzQ5MSBMNi41MTA2Nzk1MSwzNS41NTkyODg0IEM2Ljc2OTU0MzUyLDM1LjY3MDIyODMgNi44ODU5NTg3OSwzNS45ODE5Njc1IDYuNzcwNzAwMzEsMzYuMjU1NTc3NSBDNi42NTU0NDE4MywzNi41MjkxODc0IDYuMzUyMTU1NjQsMzYuNjYxMDU3NSA2LjA5MzI5MTYzLDM2LjU1MDExNzYgTC02LjMxMDg4NzI0ZS0zMCwzMy45Mzg3NTAxIEwyLjcxMzAyMTIyLDI3LjQ5ODM2MDIgQzIuODI4Mjc5NywyNy4yMjQ3NTAzIDMuMTMxNTY1OSwyNy4wOTI4ODAxIDMuMzkwNDI5OSwyNy4yMDM4MiBaIE00My4wMDI2NzIxLDEgTDQzLjk5NDIwNTEsNy45MTc4MDA4NyBDNDQuMDM2MzI4OCw4LjIxMTY5Mjg2IDQzLjg0NDI3OTksOC40ODA5MzE1NiA0My41NjUyNTE5LDguNTE5MTYyMzQgQzQzLjI4NjIyMzksOC41NTczOTMxMiA0My4wMjU4NzksOC4zNTAxMzg3NiA0Mi45ODM3NTUyLDguMDU2MjQ2NzYgTDQyLjI1MjYzMDQsMi45NTUyODA0OCBMMzcuNjk1OTMxLDguNzkwNjgyMTIgQzM3LjUyODQxNDMsOS4wMjU1MjgzOCAzNy4yMDg1MjM2LDkuMDY5MzU3OTMgMzYuOTgxNDM1LDguODg4NTc4MTUgQzM2Ljc1NDM0NjQsOC43MDc3OTgzNyAzNi43MDYwNTM4LDguMzcwODY2ODkgMzYuODczNTcwNSw4LjEzNjAyMDYzIEw0MS40MzAyNjk5LDIuMzAwNjE4OTkgTDM2LjU4NzI5MTYsMi45NjQxNzU0IEMzNi4zMDgyNjM2LDMuMDAyNDA2MTggMzYuMDQ3OTE4NywyLjc5NTE1MTgyIDM2LjAwNTc5NDksMi41MDEyNTk4MiBDMzUuOTYzNjcxMiwyLjIwNzM2NzgzIDM2LjE1NTcyMDEsMS45MzgxMjkxMiAzNi40MzQ3NDgxLDEuODk5ODk4MzUgTDQzLjAwMjY3MjEsMSBaIE04Ljk5NzMyNzg3LDEgTDE1LjU2NTI1MTksMS44OTk4OTgzNSBDMTUuODQ0Mjc5OSwxLjkzODEyOTEyIDE2LjAzNjMyODgsMi4yMDczNjc4MyAxNS45OTQyMDUxLDIuNTAxMjU5ODIgQzE1Ljk1MjA4MTMsMi43OTUxNTE4MiAxNS42OTE3MzY0LDMuMDAyNDA2MTggMTUuNDEyNzA4NCwyLjk2NDE3NTQgTDE1LjQxMjcwODQsMi45NjQxNzU0IEwxMC41Njk3MzAxLDIuMzAwNjE4OTkgTDE1LjEyNjQyOTUsOC4xMzYwMjA2MyBDMTUuMjkzOTQ2Miw4LjM3MDg2Njg5IDE1LjI0NTY1MzYsOC43MDc3OTgzNyAxNS4wMTg1NjUsOC44ODg1NzgxNSBDMTQuNzkxNDc2NCw5LjA2OTM1NzkzIDE0LjQ3MTU4NTcsOS4wMjU1MjgzOCAxNC4zMDQwNjksOC43OTA2ODIxMiBMMTQuMzA0MDY5LDguNzkwNjgyMTIgTDkuNzQ3MzY5NjMsMi45NTUyODA0OCBMOS4wMTYyNDQ3OCw4LjA1NjI0Njc2IEM4Ljk3NDEyMTA1LDguMzUwMTM4NzYgOC43MTM3NzYxMSw4LjU1NzM5MzEyIDguNDM0NzQ4MDksOC41MTkxNjIzNCBDOC4xNTU3MjAwNyw4LjQ4MDkzMTU2IDcuOTYzNjcxMTksOC4yMTE2OTI4NiA4LjAwNTc5NDkzLDcuOTE3ODAwODcgTDguMDA1Nzk0OTMsNy45MTc4MDA4NyBMOC45OTczMjc4NywxIFoiIGZpbGw9IiM2QTZBNkEiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPg0KICAgICAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgPC9nPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+"},95514:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTIiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCA5MiA3MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxyZWN0IHg9IjgiIHdpZHRoPSI3NiIgaGVpZ2h0PSI0MCIgZmlsbD0iIzM2MzYzNiIgZmlsbC1vcGFjaXR5PSIwLjUiLz4NCjxyZWN0IHk9IjI0IiB3aWR0aD0iOTIiIGhlaWdodD0iNDgiIGZpbGw9IiM1MjUyNTIiLz4NCjwvc3ZnPg0K"},75046:e=>{e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjkycHgiIGhlaWdodD0iNzJweCIgdmlld0JveD0iMCAwIDkyIDcyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT5pY29uX2FuaW1hdGlvbl90cmFuc2l0aW9uX2N1YmU8L3RpdGxlPg0KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTA2MS4wMDAwMDAsIC0yNzAuMDAwMDAwKSI+DQogICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5MTcuMDAwMDAwLCA1Mi4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNDQuMDAwMDAwLCAyMTguMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgICAgIDxyZWN0IGZpbGwtcnVsZT0ibm9uemVybyIgeD0iMCIgeT0iMCIgd2lkdGg9IjkyIiBoZWlnaHQ9IjcyIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9IiM2QTZBNkEiIHBvaW50cz0iMTIgMTguNCA1MSAxMiA1MSA2MCAxMiA1My42Ij48L3BvbHlnb24+DQogICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9IiMzNjM2MzYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDY1LjUwMDAwMCwgMzYuMDAwMDAwKSBzY2FsZSgtMSwgMSkgdHJhbnNsYXRlKC02NS41MDAwMDAsIC0zNi4wMDAwMDApICIgcG9pbnRzPSI1MSAxOC40IDgwIDEyIDgwIDYwIDUxIDUzLjYiPjwvcG9seWdvbj4NCiAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4="},58228:e=>{e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjkycHgiIGhlaWdodD0iNzJweCIgdmlld0JveD0iMCAwIDkyIDcyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT5pY29uX2FuaW1hdGlvbl90cmFuc2l0aW9uX2Rvb3J3YXk8L3RpdGxlPg0KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTQxLjAwMDAwMCwgLTYzMC4wMDAwMDApIiBmaWxsLXJ1bGU9Im5vbnplcm8iPg0KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTE3LjAwMDAwMCwgNTIuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQuMDAwMDAwLCA1NzguMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9IiMzNjM2MzYiIHBvaW50cz0iMCAtMS4xNDAxOTkwNWUtMTMgMjQgMTIgMjQgNjAgMCA3MiI+PC9wb2x5Z29uPg0KICAgICAgICAgICAgICAgICAgICA8cmVjdCBmaWxsPSIjNkE2QTZBIiB4PSIyNiIgeT0iMjAiIHdpZHRoPSI0MCIgaGVpZ2h0PSIzMiI+PC9yZWN0Pg0KICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBmaWxsPSIjMzYzNjM2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4MC4wMDAwMDAsIDM2LjAwMDAwMCkgc2NhbGUoLTEsIDEpIHRyYW5zbGF0ZSgtODAuMDAwMDAwLCAtMzYuMDAwMDAwKSAiIHBvaW50cz0iNjggLTEuMTQwMTk5MDVlLTEzIDkyIDExIDkyIDYwIDY4IDcyIj48L3BvbHlnb24+DQogICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgPC9nPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+"},83167:e=>{e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjkycHgiIGhlaWdodD0iNzJweCIgdmlld0JveD0iMCAwIDkyIDcyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT5pY29uX2FuaW1hdGlvbl90cmFuc2l0aW9uX2ZhZGU8L3RpdGxlPg0KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTA2MS4wMDAwMDAsIC0xNTAuMDAwMDAwKSI+DQogICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5MTcuMDAwMDAwLCA1Mi4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNDQuMDAwMDAwLCA5OC4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgPHJlY3Qgb3BhY2l0eT0iMC4xMDAwMDAwMDEiIGZpbGwtcnVsZT0ibm9uemVybyIgeD0iMCIgeT0iMCIgd2lkdGg9IjkyIiBoZWlnaHQ9IjcyIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgIDxyZWN0IGZpbGw9IiM1MjUyNTIiIHg9IjI4IiB5PSIyNCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjQ4Ij48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgIDxyZWN0IGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsPSIjMzYzNjM2IiB4PSIwIiB5PSIwIiB3aWR0aD0iNjQiIGhlaWdodD0iNDgiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTY0LDAgTDY0LDQ4IEwwLDQ4IEwwLDAgTDY0LDAgWiBNNjMsMSBMMSwxIEwxLDQ3IEw2Myw0NyBMNjMsMSBaIiBmaWxsPSIjNkE2QTZBIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4NCiAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4="},109:e=>{e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjkycHgiIGhlaWdodD0iNzJweCIgdmlld0JveD0iMCAwIDkyIDcyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT5pY29uX2FuaW1hdGlvbl90cmFuc2l0aW9uX25vbmU8L3RpdGxlPg0KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTQxLjAwMDAwMCwgLTE1MC4wMDAwMDApIiBmaWxsLXJ1bGU9Im5vbnplcm8iPg0KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTE3LjAwMDAwMCwgNTIuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQuMDAwMDAwLCA5OC4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjkyIiBoZWlnaHQ9IjcyIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgIDxyZWN0IGZpbGw9IiM2QTZBNkEiIHg9IjAiIHk9IjAiIHdpZHRoPSI5MiIgaGVpZ2h0PSI3MiI+PC9yZWN0Pg0KICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg=="},38830:e=>{e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjkycHgiIGhlaWdodD0iNzJweCIgdmlld0JveD0iMCAwIDkyIDcyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT5pY29uX2FuaW1hdGlvbl90cmFuc2l0aW9uX3B1c2g8L3RpdGxlPg0KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTQxLjAwMDAwMCwgLTI3MC4wMDAwMDApIiBmaWxsLXJ1bGU9Im5vbnplcm8iPg0KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTE3LjAwMDAwMCwgNTIuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQuMDAwMDAwLCAyMTguMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5MiIgaGVpZ2h0PSI3MiI+PC9yZWN0Pg0KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOTIsMCBMOTIsNzIgTDAsNzIgTDAsMCBMOTIsMCBaIE05MSwzNyBMMSwzNyBMMSw3MSBMOTEsNzEgTDkxLDM3IFogTTQ2LDQ0IEw1Niw1NCBMNTAuMTY2NjY2Nyw1NCBMNTAuMTY2NjY2Nyw2NCBMNDEuODMzMzMzMyw2NCBMNDEuODMzMzMzMyw1NCBMMzYsNTQgTDQ2LDQ0IFoiIGZpbGw9IiM2QTZBNkEiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4="},48891:e=>{"use strict";e.exports=i},74758:e=>{"use strict";e.exports=n},34796:e=>{"use strict";e.exports=s},30726:e=>{"use strict";e.exports=a},20663:e=>{"use strict";e.exports=o},77756:e=>{"use strict";e.exports=l},41362:e=>{"use strict";e.exports=r}},t={};function c(i){var n=t[i];if(void 0!==n)return n.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,c),s.exports}c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},c.d=(e,t)=>{for(var i in t)c.o(t,i)&&!c.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var g={};return(()=>{"use strict";c.r(g),c.d(g,{AnimationSettingComponent:()=>si,BackgroundSetting:()=>pt,BorderRadiusSetting:()=>De,BorderSetting:()=>J,BoxShadowSetting:()=>K,ButtonStyleSetting:()=>mt,DateUnitInput:()=>Q,FontFamilySelector:()=>le,FontFamilyValue:()=>ae,FontStyle:()=>Re,FourEdges:()=>ve,FourSides:()=>se,InputRatio:()=>ge,InputUnit:()=>B,LineStyleSelector:()=>v,LineStyleTranstions:()=>A,NavIconPicker:()=>vt,NavStyleSettingByState:()=>ht,Padding:()=>Ii,SizeColorSetting:()=>It,SizeEditor:()=>ct,TextAlignment:()=>tt,TextStyle:()=>Qe,TransitionSetting:()=>ui,UnitSelector:()=>O,UnitSelectorDateUnits:()=>D,UnitSelectorDateWeekUnits:()=>C,UnitSelectorTimeUnits:()=>z,_BackgroundSetting:()=>dt,_BorderSetting:()=>H,_BoxShadowSetting:()=>X,_FourSides:()=>ne,_InputRatio:()=>ce,_SizeEditor:()=>rt,fontValue:()=>oe});var e={};c.r(e),c.d(e,{BackgroundSetting:()=>i,BorderSetting:()=>n,BoxShadowSetting:()=>s,FourSides:()=>a,SingleColorSelector:()=>o});var t=c(48891);const i=()=>t.css`
    display: flex;
    flex-direction: column;
    width: 100%;
    > .setting-row {
      display: flex;
      align-items:center;
      justify-content: space-between;
      margin-top: 0.75rem;
      margin-bottom: 0;
    }
    .jimu-builder--color {
      width: ${t.polished.rem(40)};
      height: ${t.polished.rem(20)};
    }
    .fill-type {
      width: 50%;
    }
    `,n=()=>t.css`
    display: flex;
    justify-content: space-between;
    width: 100%;
    >.item {
      flex: 0 1 auto;
    }
    >.item.style-setting--line-style-selector {
      width: 40%;
    }
    >.item.style-setting--input-unit {
      width:30%;
    }
    .jimu-builder--color {
      height: ${t.polished.rem(26)};
    }
  `,s=()=>t.css`
    display: flex;
    flex-direction: column;
    width: 100%;
    > .setting-row {
      display: flex;
      align-items:center;
      justify-content: space-between;
      margin-top: 0.75rem;
      margin-bottom: 0;
    }
    .box-input {
      width: 30%;
      flex: 0 0 auto;
    }
  `,a=e=>{const{theme:i}=e,n=i&&i.colors?i.colors.palette.dark[300]:"#c8cbcd",s=i&&i.colors?i.colors.black:"black";return t.css`
    width: 100%;
    .unit-selector-con {
      margin-left: -1px;
    }
    .content {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      .input-group {
        width: 87%;
        flex-wrap: nowrap;
        flex-shrink: 0;
        flex-grow: 0;
        > input {
          width: 21%;
        }
        .jimu-numeric-input-input {
          width: calc(100% - 1px);
          z-index: 0;
          &:focus-within {
            z-index: 1;
          }
        }
        .form-control {
          padding-left: 0.25rem;
          padding-right: 0.25rem;
        }
        >.style-setting--unit-selector {
          width: 16%;
          margin-left: -1px;
          border-top-right-radius: 2px;
          border-bottom-right-radius: 2px;
        }
      }
      .lock-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 10%;
        cursor: pointer;
        .jimu-icon {
          color: ${s};
          &.disabled {
            color: ${n};
          }
        }
      }
    }
    .tips {
      color: ${n};
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      font-size: ${t.polished.rem(10)};
      .tip-group {
        text-align: center;
        display: flex;
        flex-shrink: 0;
        flex-grow: 0;
        width: 73%;
        > div {
          width: 25%;
          ${t.polished.ellipsis()}
        }
      }
    }
  `},o=e=>{const{theme:i}=e,n=i?i.colors.palette.light[500]:"",s=i?i.colors.palette.primary[700]:"";return t.css`
    display: flex;
    .btn {
      border-radius: 0;
      height:${t.polished.rem(20)};
      width:${t.polished.rem(20)};
      border: 1px solid ${n};
      &.active {
          outline: 1px solid ${s};
      }
    }
    .btn:not(:last-of-type) {
      margin-right: 6px;
    }
  `};var l=c(34796),r=c(30726),d=c(21161),p=c.n(d),u=c(47383),I=c.n(u),m=c(1465),M=c.n(m),N=c(61733),h=c.n(N),y=c(68930),j=c.n(y),w=c(69625),x=c.n(w);const b={dashed:h(),dotted:M(),double:p(),solid:I(),esriSLSDash:h(),esriSLSDot:M(),esriSLSSolid:I(),esriSLSDashDot:x(),esriSLSDashDotDot:j()},A={dashed:"dashed",dotted:"dotted",double:"double",solid:"solid",esriSLSDash:"dashed",esriSLSDot:"dotted",esriSLSSolid:"solid",esriSLSDashDot:"dashDot",esriSLSDashDotDot:"dashDoubleDot"},v=e=>{var i;const n=r.hooks.useTranslate(),{type:s="normal",value:a="solid",className:o,style:l,onChange:c,"aria-label":g}=e,d=t.React.useMemo((()=>("normal"===s?Object.values(r.NormalLineType):Object.values(r.EsriSimpleLineSymbolStyle)).map((e=>({label:n(A[e]),value:e})))),[n,s]),p=null===(i=d.find((e=>e.value===a)))||void 0===i?void 0:i.label;return t.React.createElement("div",{className:(0,t.classNames)(o,"style-setting--line-style-selector"),style:l},t.React.createElement(r.Select,{size:"sm",name:"lineType",value:a,title:p,onChange:e=>{const t=e.currentTarget.value;null==c||c(t)},"aria-label":g},d.map(((e,i)=>t.React.createElement(r.Option,{className:"py-0",key:i,title:e.label,value:e.value,label:e.label},t.React.createElement("span",{style:{width:46}},t.React.createElement(r.Icon,{className:"w-100",icon:b[e.value]})))))))},D=["year","month","day"],C=["year","month","week","day"],z=["hour","minute","seconds"],f=[...C,...z],T=["px"],O=e=>{const i=r.hooks.useTranslate(),{className:n,style:s,title:a=i("changeUnit"),disabled:o,value:c="px",units:g=T,onChange:d}=e,p=o||g.length<=1,u=e=>f.includes(e)?i(e):e,I=(0,l.styled)(r.DropdownMenu)`
    min-width: 60px !important;
  `;return t.React.createElement(r.Dropdown,{direction:"down",size:"sm",disabled:p,style:s,title:a,activeIcon:!0,autoWidth:!0,className:(0,t.classNames)(n,"style-setting--unit-selector","jimu-outline-inside")},t.React.createElement(r.DropdownButton,{arrow:!1,size:"sm","aria-label":i("unit")},u(c)),t.React.createElement(I,{alignment:"end"},g.map((e=>{const i=u(e);return t.React.createElement(r.DropdownItem,{className:"px-1",active:c===e,"aria-pressed":c===e,"aria-label":i,key:e,onClick:()=>{var t;(t=e)!==c&&(null==d||d(t))}},t.React.createElement("div",{className:"text-truncate",title:i},i))}))))};const S={val:0,unit:"px"},L=["px"],Z=(0,l.styled)(r.InputGroup)`
  width: 100%;
  .jimu-numeric-input {
    flex: 1;
    z-index: 0;
    &:focus-within {
      z-index: 1;
    }
    padding: 0px;
    width: calc(100% - 26px)
  }

  > .style-setting--unit-selector button {
    width: 26px;
    margin-left: -1px;
    z-index: 0;
    padding: 0px;
  }
`,P=e=>{const{min:i,max:n,className:s,disabled:a=!1,units:o=L,value:l=S,onChange:c,"aria-label":g}=e,d=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]])}return i}(e,["min","max","className","disabled","units","value","onChange","aria-label"]),p=(e=>{if(e&&"object"==typeof e)return e;const i=t.polished.getValueAndUnit(e);return{val:null==i?void 0:i[0],unit:(null==i?void 0:i[1])||"px"}})(l),u=null!==p?`${g?`${g}, `:""}${p.unit}`:g;return t.React.createElement(Z,Object.assign({className:(0,t.classNames)(s,"style-setting--base-unit-input")},d),t.React.createElement(r.NumericInput,{"aria-label":u,size:"sm",min:i,max:n,value:isNaN(p.val)?"":p.val,disabled:a,showHandlers:!1,onAcceptValue:(e,i)=>{null==c||c(t.lodash.assign({},p,{val:e}),i)}}),t.React.createElement(O,{disabled:a,units:o,value:p.unit,onChange:e=>{null==c||c(t.lodash.assign({},p,{unit:e}))}}))};const E={distance:0,unit:"px"},k=["px"],B=e=>{const{className:i,units:n=k,value:s=E,onChange:a}=e,o=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]])}return i}(e,["className","units","value","onChange"]),l=(e=>{var t,i;return"string"==typeof e?e:{val:null!==(t=null==e?void 0:e.distance)&&void 0!==t?t:0,unit:null!==(i=null==e?void 0:e.unit)&&void 0!==i?i:"px"}})(s);return t.React.createElement(P,Object.assign({className:(0,t.classNames)(i,"style-setting--input-unit"),units:n,value:l,onChange:(e,t)=>{var i,n;const s=null!==(i=null==e?void 0:e.val)&&void 0!==i?i:0,o=null!==(n=null==e?void 0:e.unit)&&void 0!==n?n:"px";null==a||a({distance:s,unit:o},t)}},o))};const Y={val:0,unit:"year"},R=["year"],G=(0,l.styled)(P)`
 .jimu-numeric-input {
    width: calc(100% - 60px)
  }
  > .style-setting--unit-selector button {
    width: 60px;
  }
`,Q=e=>{const{className:i,value:n=Y,units:s=R}=e,a=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]])}return i}(e,["className","value","units"]);return t.React.createElement(G,Object.assign({className:(0,t.classNames)(i,"style-setting--date-unit-input")},a,{value:n,units:s}))};var W=c(41362);const V=[r.DistanceUnits.PIXEL],U={type:r.NormalLineType.DASHED,color:void 0,width:"0px"},H=e=>{const{value:i=U,onChange:n,className:s,style:a}=e,{type:o,color:c,width:g}=i,d=(0,l.useTheme2)(),p=r.hooks.useTranslate(),u=(e,s)=>{const a={};a[e]=s,null==n||n(t.lodash.assign({},i,a))};return t.React.createElement("div",{className:(0,t.classNames)("style-setting--border-setting",s),style:a},t.React.createElement(W.ThemeColorPicker,{"aria-label":p("color"),specificTheme:d,className:"item",onChange:e=>{u("color",e)},value:c}),t.React.createElement(v,{"aria-label":p("lineStyle"),className:"item",value:o,onChange:e=>{u("type",e)}}),t.React.createElement(B,{"aria-label":p("width"),units:V,className:"item",value:g,onChange:e=>{u("width",r.utils.stringOfLinearUnit(e))}}))},J=(0,l.withStyles)(H,"BorderSetting");var F=c(77756);class X extends t.React.PureComponent{constructor(){super(...arguments),this.translate=e=>this.props.intl?this.props.intl.formatMessage({id:e,defaultMessage:r.defaultMessages[e]}):e,this.getShadows=()=>[{name:"offsetX",label:this.translate("offsetX"),min:-200,max:200},{name:"offsetY",label:this.translate("offsetY"),min:-200,max:200},{name:"blur",label:this.translate("blurRadius"),min:0,max:300},{name:"spread",label:this.translate("spreadRadius"),min:-200,max:200}]}_updateShadow(e,i){const{value:n}=this.props;this.props.onChange(t.lodash.assign({},n,{[e]:i}))}render(){const{value:e,className:i,theme2:n}=this.props;return(0,t.jsx)("div",{className:(0,t.classNames)("style-setting--box-shadow-setting",i),role:"group","aria-label":this.translate("boxShadow")},this.getShadows().map(((i,n)=>(0,t.jsx)(F.SettingRow,{key:n,label:i.label},(0,t.jsx)(B,{"aria-label":i.label,className:"box-input",min:i.min,max:i.max,value:e[i.name],onChange:e=>this._updateShadow(i.name,r.utils.stringOfLinearUnit(e))})))),(0,t.jsx)(F.SettingRow,{label:this.translate("color")},(0,t.jsx)(W.ThemeColorPicker,{className:"box-color",specificTheme:n,value:e.color,onChange:e=>this._updateShadow("color",e)})))}}X.defaultProps={value:{offsetX:"0px",offsetY:"0px",blur:"0px",spread:"0px",color:void 0},onChange:()=>{}};const K=(0,l.withStyles)((0,l.withTheme)((0,t.injectIntl)(X),!0),"BoxShadowSetting");var $=c(30840),_=c.n($);const q=e=>{const{className:i}=e,n=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]])}return i}(e,["className"]),s=(0,t.classNames)("jimu-icon jimu-icon-component",i);return t.React.createElement(r.SVG,Object.assign({className:s,src:_()},n))};var ee=c(57322),te=c.n(ee);const ie=e=>{const{className:i}=e,n=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]])}return i}(e,["className"]),s=(0,t.classNames)("jimu-icon jimu-icon-component",i);return t.React.createElement(r.SVG,Object.assign({className:s,src:te()},n))};class ne extends t.React.PureComponent{constructor(e){super(e),this._onSideValueChange=(e,t)=>{const{bindAll:i}=this.state;if(i)this._onAllSidesValueChange(e);else{const{value:i}=this.props,n=r.styleUtils.expandStyleArray(i.number);n[t]=e,this.props.onChange({number:n,unit:i.unit})}},this._onUnitChange=e=>{const{value:t}=this.props;if(e!==t.unit){const i=r.styleUtils.expandStyleArray(t.number);this.props.onChange({number:i,unit:e})}},this._onAllSidesValueChange=e=>{this.props.onChange({number:[e],unit:this.props.value.unit})},this._toggleBindAll=()=>{const{disabled:e}=this.props;if(!e){if(!this.state.bindAll){const{value:e}=this.props,t=r.styleUtils.expandStyleArray(e.number);this._onAllSidesValueChange(t[0])}this.setState({bindAll:!this.state.bindAll})}},this.nls=e=>this.props.intl?this.props.intl.formatMessage({id:e,defaultMessage:r.defaultMessages[e]}):e,this.handleAcceptValue=(e,t)=>{this._onSideValueChange(e,t)},this.state={bindAll:!1}}render(){const{value:e,units:i,showTip:n,sides:s,min:a,max:o,disabled:l,className:c}=this.props,{bindAll:g}=this.state,d=r.styleUtils.expandStyleArray(e.number);return(0,t.jsx)("div",{className:(0,t.classNames)("style-setting--four-sides",c)},(0,t.jsx)("div",{className:"content"},(0,t.jsx)(r.InputGroup,null,s.map(((e,i)=>{const s=this.nls(e);return(0,t.jsx)(r.NumericInput,{size:"sm",key:i,placeholder:n?e:"",title:s,"aria-label":s,min:a,max:o,disabled:l,value:d[i],onAcceptValue:e=>this.handleAcceptValue(e,i),showHandlers:!1})})),(0,t.jsx)("div",{className:"unit-selector-con"},(0,t.jsx)(O,{units:i,value:e.unit,onChange:this._onUnitChange}))),(0,t.jsx)(r.Button,{icon:!0,type:"tertiary",className:"lock-btn",onClick:this._toggleBindAll,title:g?this.nls("lock"):this.nls("unlock"),"aria-label":g?this.nls("lock"):this.nls("unlock")},g?(0,t.jsx)(q,{className:(0,t.classNames)({disabled:l})}):(0,t.jsx)(ie,{className:(0,t.classNames)({disabled:l})}))),n&&(0,t.jsx)("div",{className:"tips"},(0,t.jsx)("div",{className:"tip-group"},s.map(((e,i)=>(0,t.jsx)("div",{key:i,title:this.nls(e)},e)))),(0,t.jsx)("div",null)))}}ne.defaultProps={units:[r.DistanceUnits.PIXEL,r.DistanceUnits.PERCENTAGE],showTip:!0,value:{number:[0],unit:r.DistanceUnits.PIXEL},disabled:!1,min:0,max:100,sides:[r.Sides.T,r.Sides.R,r.Sides.B,r.Sides.L],onChange:()=>{}};const se=(0,l.withStyles)((0,t.injectIntl)(ne),"FourSides");var ae;!function(e){e.AVENIRNEXT="Avenir Next",e.CALIBRI="Calibri",e.PMINGLIU="PmingLiu",e.IMPACT="Impact",e.GEORGIA="Georgia",e.ARIAL="Arial",e.TIMESNEWROMAN="Times New Roman",e.SIMHEI="SimHei",e.MICROSOFTYAHEI="Microsoft YaHei"}(ae||(ae={}));const oe=[ae.AVENIRNEXT,ae.CALIBRI,ae.PMINGLIU,ae.IMPACT,ae.GEORGIA,ae.ARIAL,ae.TIMESNEWROMAN,ae.SIMHEI,ae.MICROSOFTYAHEI],le=({font:e=ae.AVENIRNEXT,onChange:i=(()=>{}),style:n,className:s})=>t.React.createElement(r.Select,{title:e,className:(0,t.classNames)(s,"style-setting--font-family"),style:n,value:e,onChange:e=>{i(e.target.value)}},oe.map(((e,i)=>t.React.createElement("option",{key:i,value:e,label:e},e)))),re=t.css`
  font-size: 10px;
  color: var(--dark-600);
  text-align: center;
`;class ce extends t.React.PureComponent{constructor(){super(...arguments),this.width=100,this.height=100,this.onWidthChange=e=>{this.props.onChange(`${e}:${this.height}`)},this.onHeightChange=e=>{this.props.onChange(`${this.width}:${e}`)}}parseAspectRatio(e){if("number"==typeof e)this.width=100,this.height=Math.round(100*e);else if("string"==typeof e){const t=e.split(":");this.width=parseInt(t[0],10),this.height=parseInt(t[1],10)}}formatMessage(e){return this.props.intl.formatMessage({id:e,defaultMessage:r.defaultMessages[e]})}render(){const{style:e,disabled:i,value:n}=this.props;return this.parseAspectRatio(n),(0,t.jsx)(r.InputGroup,{className:(0,t.classNames)("style-setting--input-ratio"),style:e},(0,t.jsx)("div",{className:"d-flex flex-column justify-content-start align-items-center",style:{width:"45%"}},(0,t.jsx)(r.NumericInput,{size:"sm",min:1,max:100,value:isNaN(this.width)?"":this.width,showHandlers:!1,onChange:this.onWidthChange,disabled:i}),(0,t.jsx)("div",{className:"px-1 mt-1 w-100",css:re,title:this.formatMessage("width")},"W")),(0,t.jsx)("div",{className:"h-100 text-center",style:{width:"10%"}},":"),(0,t.jsx)("div",{className:"d-flex flex-column justify-content-start align-items-center",style:{width:"45%"}},(0,t.jsx)(r.NumericInput,{size:"sm",min:1,value:isNaN(this.height)?"":this.height,showHandlers:!1,onChange:this.onHeightChange,disabled:i}),(0,t.jsx)("div",{className:"px-1 mt-1 w-100",css:re,title:this.formatMessage("height")},"H")))}}ce.defaultProps={value:1,disabled:!1,onChange:()=>{}};const ge=(0,l.withStyles)((0,t.injectIntl)(ce),"InputRatio"),de=t.css`
  .jimu-numeric-input-input{
    z-index: auto;
    &:focus {
      z-index: 1;
    }
  }
  .unit-selector-con {
    margin-left: -1px;
  }
`,pe=[r.Sides.T,r.Sides.R,r.Sides.B,r.Sides.L],ue=[r.BorderSides.TL,r.BorderSides.TR,r.BorderSides.BR,r.BorderSides.BL],Ie=[r.DistanceUnits.PIXEL,r.DistanceUnits.PERCENTAGE],me={number:[0,0,0,0],unit:r.DistanceUnits.PIXEL},Me=e=>{const i=r.hooks.useTranslate(),n=i("unifiedNumericValue"),{type:s="edge",value:a=me,className:o,min:l=0,max:c=100,units:g=Ie,disabled:d=!1,onActivatedChange:p,onChange:u,detached:I,unifiedTitle:m=n,unifiedAriaLabel:M=n}=e,N=a.number,h=a.unit,y=t.React.useMemo((()=>"edge"===s?pe:ue),[s]),j=(e,t)=>{if(e=Math.floor(+e),I){const i=[...N];i[t]=e,null==u||u({number:i,unit:h})}else{const t=r.styleUtils.expandStyleArray([e]);null==u||u({number:t,unit:a.unit})}};return(0,t.jsx)(r.InputGroup,{css:de,className:(0,t.classNames)("edges-number",o)},!I&&(0,t.jsx)(r.NumericInput,{size:"sm",min:l,max:c,title:m,"aria-label":M,disabled:d,value:null==N?void 0:N[0],onAcceptValue:e=>j(e,0),showHandlers:!1}),I&&y.map(((e,n)=>{const s=i(e);return(0,t.jsx)(r.NumericInput,{size:"sm",key:e,title:s,"aria-label":s,min:l,max:c,disabled:d,value:N[n],onAcceptValue:e=>j(e,n),onFocus:()=>p(n),onBlur:()=>p(-1),showHandlers:!1})})),(0,t.jsx)("div",{className:"unit-selector-con"},(0,t.jsx)(O,{disabled:d,units:g,value:a.unit,onChange:e=>{null==u||u({number:a.number,unit:e})}})))};const Ne=t.css`
  padding: 4px !important;
  .content {
    width: 16px;
    height: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &.unified {
      border: 1px solid var(--black);
      border-radius: 4px;
    }
    &.none-select {
      .corner {
        opacity: 1;
      }
    }
    > .top,
    > .bottom {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: calc(50% - 3px);
    }

    .corner {
      width: calc(50% - 3px);
      height: 100%;
      opacity: 0.4;
      &.selected {
        opacity: 1;
      }
      &.top-left {
        border-top: 1px solid var(--black);
        border-left: 1px solid var(--black);
        border-radius: 4px 0 0 0;
      }
      &.top-right {
        border-top: 1px solid var(--black);
        border-right: 1px solid var(--black);
        border-radius: 0 4px 0 0;
      }
      &.bottom-left {
        border-bottom: 1px solid var(--black);
        border-left: 1px solid var(--black);
        border-radius: 0 0 0 4px;
      }
      &.bottom-right {
        border-bottom: 1px solid var(--black);
        border-right: 1px solid var(--black);
        border-radius: 0 0 4px 0;
      }
    }
  }
`,he=e=>{const{className:i,activated:n=-1,detached:s}=e,a=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]])}return i}(e,["className","activated","detached"]);return(0,t.jsx)(r.Button,Object.assign({css:Ne,className:(0,t.classNames)("corner",i)},a),(0,t.jsx)("div",{className:(0,t.classNames)("content",{unified:!s},{"none-select":n<0})},s&&(0,t.jsx)(t.React.Fragment,null,(0,t.jsx)("div",{className:"top"},(0,t.jsx)("div",{className:(0,t.classNames)("top-left corner",{selected:0===n})}),(0,t.jsx)("div",{className:(0,t.classNames)("top-right corner",{selected:1===n})})),(0,t.jsx)("div",{className:"bottom"},(0,t.jsx)("div",{className:(0,t.classNames)("bottom-left corner",{selected:3===n})}),(0,t.jsx)("div",{className:(0,t.classNames)("bottom-right corner",{selected:2===n})})))))};const ye=t.css`
  padding: 4px !important;
  .content {
    width: 16px;
    height: 16px;
    position: relative;
    &.unified {
      border: 1px solid var(--black);
      > .inner-box {
        opacity: 1;
      }
    }
    &:not(.unified) {
      display: flex;
      flex-direction: column;
      align-items: center;
      &.none-select {
        .edge {
          opacity: 1;
        }
        > .inner-box {
          opacity: 1;
        }
      }
      > .top {
        width: calc(100% - 4px);
        border-top: 1px solid var(--black);
        height: 3px;
      }
      > .middle {
        height: calc(100% - 6px);
        width: 100%;
        display: flex;
        justify-content: space-between;
        > .left {
          border-left: 1px solid var(--black);
          width: 3px;
          height: 100%;
        }
        > .right {
          border-right: 1px solid var(--black);
          width: 3px;
          height: 100%;
        }
      }
      > .bottom {
        border-bottom: 1px solid var(--black);
        width: calc(100% - 4px);
        height: 3px;
      }
      .edge {
        opacity: 0.4;
        &.selected {
          opacity: 1;
        }
      }
    }
    > .inner-box {
      width: 8px;
      height: 8px;
      border: 1px dotted var(--black);
      opacity: 0.4;
      z-index: 1;
      position: absolute;
      left: calc(50% - 4px);
      top: calc(50% - 4px);
    }
  }
`,je=e=>{const{className:i,activated:n=-1,detached:s}=e,a=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]])}return i}(e,["className","activated","detached"]);return(0,t.jsx)(r.Button,Object.assign({css:ye,className:(0,t.classNames)("edge",i)},a),(0,t.jsx)("div",{className:(0,t.classNames)("content",{unified:!s},{"none-select":n<0})},s&&(0,t.jsx)(t.React.Fragment,null,(0,t.jsx)("div",{className:(0,t.classNames)("edge top",{selected:0===n})}),(0,t.jsx)("div",{className:"middle"},(0,t.jsx)("div",{className:(0,t.classNames)("edge left",{selected:3===n})}),(0,t.jsx)("div",{className:(0,t.classNames)("edge right",{selected:1===n})})),(0,t.jsx)("div",{className:(0,t.classNames)("edge bottom",{selected:2===n})})),(0,t.jsx)("div",{className:"inner-box"})))};const we=e=>{const{type:i="edge",detached:n,onDetachedChange:s,onClick:a}=e,o=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]])}return i}(e,["type","detached","onDetachedChange","onClick"]),l=(e,t)=>{null==s||s(e),null==a||a(t)},c=r.hooks.useTranslate(),g=c("unified"),d=c("independent");return t.React.createElement(t.React.Fragment,null,"edge"===i&&t.React.createElement(r.AdvancedButtonGroup,null,"edge"===i&&t.React.createElement(je,Object.assign({active:!n,detached:!1,title:g,"aria-label":g},o,{onClick:e=>l(!1,e)})),"edge"===i&&t.React.createElement(je,Object.assign({active:n,detached:!0,title:d,"aria-label":d},o,{onClick:e=>l(!0,e)}))),"corner"===i&&t.React.createElement(r.AdvancedButtonGroup,null,t.React.createElement(he,Object.assign({active:!n,detached:!1,title:g,"aria-label":g},o,{onClick:e=>l(!1,e)})),t.React.createElement(he,Object.assign({active:n,detached:!0,title:d,"aria-label":d},o,{onClick:e=>l(!0,e)}))))};const xe=t.css`
  width: 100%;
  .jimu-numeric-input {
    z-index: 0;
    &:focus-within {
      z-index: 1;
    }
  }
  .input-group-append {
    z-index: 0;
    &:focus-within {
      z-index: 1;
    }
  }
  .content {
    .btn-group {
      margin-right: 6px;
    }
    .input-group {
      .input-group-append {
        margin-left: 0;
      }
    }
  }
`,be={number:[0,0,0,0],unit:r.DistanceUnits.PIXEL},Ae=[r.DistanceUnits.PIXEL,r.DistanceUnits.PERCENTAGE],ve=e=>{const{type:i="edge",value:n=be,units:s=Ae,min:a=0,max:o=100,disabled:l=!1,className:c,style:g,onChange:d,separated:p=!0}=e,u=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]])}return i}(e,["type","value","units","min","max","disabled","className","style","onChange","separated"]),I=(e=>{let t=e;if((null==e?void 0:e.number)&&4!==e.number.length){const i=r.styleUtils.expandStyleArray(e.number);t=Object.assign(Object.assign({},t),{number:i})}return t})(n),m=I.number,M=I.unit,[N,h]=t.React.useState((()=>(e=>{const t=null==e?void 0:e.number;return!(!t||t[0]===t[1]&&t[1]===t[2]&&t[2]===t[3])})(I))),[y,j]=t.React.useState(-1);return(0,t.jsx)("div",{className:(0,t.classNames)("style-setting--four-edges",c),style:g,css:xe},(0,t.jsx)("div",{className:"content d-flex"},p&&(0,t.jsx)(we,{type:i,detached:N,activated:y,disabled:l,onDetachedChange:e=>{if(!l){if(!e){const e=r.styleUtils.expandStyleArray([m[0]]);null==d||d({number:e,unit:M})}h(e)}}}),(0,t.jsx)(Me,Object.assign({type:i,detached:N,value:I,min:a,max:o,disabled:l,units:s,onChange:d},u,{onActivatedChange:j}))))};const De=e=>{const{className:i,value:n,onChange:s}=e,a=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]])}return i}(e,["className","value","onChange"]),o=t.React.useMemo((()=>null==n?void 0:n.asMutable({deep:!0})),[n]),l=r.hooks.useTranslate(),c=t.React.useMemo((()=>l("borderRadius")),[l]);return t.React.createElement(ve,Object.assign({type:"corner",value:o,onChange:e=>{null==s||s((0,t.Immutable)(e))},unifiedAriaLabel:c,unifiedTitle:c},a,{className:(0,t.classNames)("style-setting--border-radius",i)}))};var Ce=c(35212),ze=c.n(Ce);const fe=e=>{const{className:i}=e,n=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]])}return i}(e,["className"]),s=(0,t.classNames)("jimu-icon jimu-icon-component",i);return t.React.createElement(r.SVG,Object.assign({className:s,src:ze()},n))};var Te=c(81874),Oe=c.n(Te);const Se=e=>{const{className:i}=e,n=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]])}return i}(e,["className"]),s=(0,t.classNames)("jimu-icon jimu-icon-component",i);return t.React.createElement(r.SVG,Object.assign({className:s,src:Oe()},n))};var Le=c(71007),Ze=c.n(Le);const Pe=e=>{const{className:i}=e,n=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]])}return i}(e,["className"]),s=(0,t.classNames)("jimu-icon jimu-icon-component",i);return t.React.createElement(r.SVG,Object.assign({className:s,src:Ze()},n))};var Ee=c(58285),ke=c.n(Ee);const Be=e=>{const{className:i}=e,n=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]])}return i}(e,["className"]),s=(0,t.classNames)("jimu-icon jimu-icon-component",i);return t.React.createElement(r.SVG,Object.assign({className:s,src:ke()},n))};const Ye=["bold","italic","underline","strike"],Re=e=>{const{types:i=Ye,bold:n,italic:s,underline:a,strike:o,onChange:l}=e,c=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]])}return i}(e,["types","bold","italic","underline","strike","onChange"]),g=r.hooks.useTranslate();return t.React.createElement(r.ButtonGroup,Object.assign({},c),i.map(((i,n)=>{const s=!!e[i];return t.React.createElement(r.Button,{key:n,title:g(i),"aria-pressed":s,active:s,type:"default",icon:!0,size:"sm",onClick:()=>l(i,!e[i])},"bold"===i&&t.React.createElement(fe,null),"italic"===i&&t.React.createElement(Se,null),"underline"===i&&t.React.createElement(Pe,null),"strike"===i&&t.React.createElement(Be,null))})))};const Ge=c(38275),Qe=e=>{const i=(0,l.useTheme2)(),n=r.hooks.useTranslate(),{className:s,bold:a,italic:o,strike:c,underline:g,color:d,size:p="16px",onChange:u}=e,I=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]])}return i}(e,["className","bold","italic","strike","underline","color","size","onChange"]),m=(e,t)=>{null==u||u(e,t)};return t.React.createElement("div",Object.assign({className:(0,t.classNames)("d-flex justify-content-between w-100",s)},I),t.React.createElement(Re,{bold:a,italic:o,strike:c,underline:g,onChange:m}),t.React.createElement(W.ThemeColorPicker,{"aria-label":n("fontColor"),icon:Ge,type:"with-icon",specificTheme:i,value:d,onChange:e=>m("color",e)}),t.React.createElement(B,{"aria-label":n("fontSize"),style:{width:"35%"},value:p,onChange:e=>m("size",`${e.distance}${e.unit}`)}))};var We=c(47118),Ve=c.n(We);const Ue=e=>{const{className:i}=e,n=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]])}return i}(e,["className"]),s=(0,t.classNames)("jimu-icon jimu-icon-component",i);return t.React.createElement(r.SVG,Object.assign({className:s,src:Ve()},n))};var He=c(13468),Je=c.n(He);const Fe=e=>{const{className:i}=e,n=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]])}return i}(e,["className"]),s=(0,t.classNames)("jimu-icon jimu-icon-component",i);return t.React.createElement(r.SVG,Object.assign({className:s,src:Je()},n))};var Xe=c(192),Ke=c.n(Xe);const $e=e=>{const{className:i}=e,n=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]])}return i}(e,["className"]),s=(0,t.classNames)("jimu-icon jimu-icon-component",i);return t.React.createElement(r.SVG,Object.assign({className:s,src:Ke()},n))};var _e=c(67653),qe=c.n(_e);const et=e=>{const{className:i}=e,n=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]])}return i}(e,["className"]),s=(0,t.classNames)("jimu-icon jimu-icon-component",i);return t.React.createElement(r.SVG,Object.assign({className:s,src:qe()},n))};const tt=e=>{var i,n;const s=null===(n=null===(i=(0,t.getAppStore)().getState())||void 0===i?void 0:i.appContext)||void 0===n?void 0:n.isRTL,{buttonType:a="default",textAlign:o=(s?r.TextAlignValue.RIGHT:r.TextAlignValue.LEFT),onChange:l,className:c,showJustify:g=!1,autoFlip:d=!1}=e,p=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]])}return i}(e,["buttonType","textAlign","onChange","className","showJustify","autoFlip"]),u=r.hooks.useTranslate();return t.React.createElement(r.ButtonGroup,Object.assign({},p,{className:(0,t.classNames)("text-alignment",c,{"flex-row-reverse":s&&d})}),t.React.createElement(r.Button,{title:u(s&&!d?"right":"left"),type:a,icon:!0,size:"sm",active:o===r.TextAlignValue.LEFT,onClick:()=>l(r.TextAlignValue.LEFT)},t.React.createElement(Ue,{autoFlip:!d})),t.React.createElement(r.Button,{title:u("center"),type:a,icon:!0,size:"sm",active:o===r.TextAlignValue.CENTER,onClick:()=>l(r.TextAlignValue.CENTER)},t.React.createElement(Fe,null)),t.React.createElement(r.Button,{title:u(s&&!d?"left":"right"),type:a,icon:!0,size:"sm",active:o===r.TextAlignValue.RIGHT,onClick:()=>l(r.TextAlignValue.RIGHT)},t.React.createElement($e,{autoFlip:!d})),g&&t.React.createElement(r.Button,{title:u("justify"),type:a,icon:!0,size:"sm",active:o===r.TextAlignValue.JUSTIFY,onClick:()=>l(r.TextAlignValue.JUSTIFY)},t.React.createElement(et,null)))};var it=c(74758),nt=c(18371),st=c.n(nt);const at=e=>{const{className:i}=e,n=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]])}return i}(e,["className"]),s=(0,t.classNames)("jimu-icon jimu-icon-component",i);return t.React.createElement(r.SVG,Object.assign({className:s,src:st()},n))},ot=[r.DistanceUnits.PIXEL,r.DistanceUnits.PERCENTAGE],lt=[it.LayoutItemSizeModes.Auto,it.LayoutItemSizeModes.Stretch,it.LayoutItemSizeModes.Custom];class rt extends t.React.PureComponent{constructor(e){super(e),this.handleChange=e=>{this.props.onModeChange(e)},this.nls=e=>this.props.intl?this.props.intl.formatMessage({id:e,defaultMessage:r.defaultMessages[e]}):e,this.getPopperStyle=()=>t.css`
      .units-list {
        border-radius: 2px;
        background: var(--light-500);
        padding: 2px 0;
        .style-setting--markable-item {
          height: ${t.polished.rem(26)};
        }
        .unit-item {
          justify-content: flex-start;
        }
      }
    `}getStyle(){return t.css`
      background: var(--light-200);
      height: 26px;

      .side-label {
        font-size: 10px;
      }

      .prop-label {
        background-color: var(--light-400);
        font-size: 12px;
        line-height: 26px;
        color: var(--dark-400);
      }

      .jimu-dropdown {
        z-index: 0;

        &:focus-within {
          z-index: 1;
        }
      }

      .btn,
      .style-setting--input-unit button.style-setting--unit-selector {
        background: var(--light-500);
        &:hover {
          background: var(--light-800);
        }
        &.disabled {
          background-color: var(--light-200);
        }
      }

      .style-setting--input-unit {
        background: var(--light-200);
        border-radius: 2px;
        height: 26px;
        flex-grow: 1;
        z-index: 0;

        &:focus-within {
          z-index: 1;
        }

        input {
          height: 100%;
          font-size: 12px;
          padding: 0;
          text-align: center;
        }
        .style-setting--unit-selector {
          background: var(--light-200);
          color: var(--black);
          height: 26px;
          width: auto;
          min-width: 0;
          padding: 0;
          margin-left: 0;
          font-size: 12px;
          border: none;
        }
      }
    `}render(){var e;const{mode:i,value:n,disableModeSelect:s,disabled:a}=this.props;if(a)return(0,t.jsx)("div",{className:"d-flex size-editor w-100",css:this.getStyle()},(0,t.jsx)("div",{title:this.nls(it.LayoutItemSizeModes.Auto.toLowerCase()),className:"prop-label px-2 text-truncate text-center w-100"},this.nls(it.LayoutItemSizeModes.Auto.toLowerCase())));const o=null!==(e=this.props.sizeModes)&&void 0!==e?e:lt;return(0,t.jsx)("div",{className:"d-flex size-editor w-100",css:this.getStyle()},!s&&(0,t.jsx)(r.Dropdown,{direction:"down",size:"sm",menuItemCheckMode:"singleCheck"},(0,t.jsx)(r.DropdownButton,{arrow:!0,icon:!0,type:"tertiary",size:"sm",className:"p-0"}),(0,t.jsx)(r.DropdownMenu,{className:"p-0",css:t.css`min-width: 5rem;`},o.map(((e,n)=>(0,t.jsx)(r.DropdownItem,{active:e===i,"aria-label":this.nls(e.toLowerCase()),key:n,onClick:()=>this.handleChange(e)},(0,t.jsx)("div",{className:"d-flex alitn-items-center justify-content-end w-100"},e===i&&(0,t.jsx)(at,{className:"mr-2"}),this.nls(e.toLowerCase()))))))),i!==it.LayoutItemSizeModes.Custom&&(0,t.jsx)("div",{className:"prop-label flex-grow-1 px-2 text-truncate text-center",title:"function"==typeof(null==i?void 0:i.toLowerCase)&&this.nls(i.toLowerCase())},"function"==typeof(null==i?void 0:i.toLowerCase)&&this.nls(i.toLowerCase())),i===it.LayoutItemSizeModes.Custom&&(0,t.jsx)(B,{units:this.props.availableUnits||ot,min:-1/0,max:1/0,value:it.utils.normalizeLinearUnit(n),onChange:this.props.onChange}))}}rt.defaultProps={disableModeSelect:!1,onChange:()=>{}};const ct=(0,t.injectIntl)(rt);var gt=c(20663);class dt extends t.React.PureComponent{constructor(e){super(e),this.openBrowseImage=e=>{const{background:i}=this.props;this.props.onChange(t.lodash.assign({},i,{image:e}))},this._onPositionChange=e=>{const{background:i}=this.props,n=e.target.value;this.props.onChange(t.lodash.assign({},i,{fillType:n}))},this._onColorChange=e=>{const{background:i}=this.props;this.props.onChange(t.lodash.assign({},i,{color:e}))},this.translate=(e,t)=>{var i,n;const s=Object.assign({},r.defaultMessages);return null===(n=null===(i=this.props)||void 0===i?void 0:i.intl)||void 0===n?void 0:n.formatMessage({id:e,defaultMessage:s[e]},t)},this.getFillType=()=>[{value:r.FillType.FIT,label:this.translate("fit")},{value:r.FillType.FILL,label:this.translate("fill")},{value:r.FillType.CENTER,label:this.translate("center")},{value:r.FillType.TILE,label:this.translate("tile")},{value:r.FillType.STRETCH,label:this.translate("stretch")}],this.fileInput=t.React.createRef()}render(){var e;const{background:i,className:n,style:s,theme:a,theme2:o}=this.props,l=null===(e=i.image)||void 0===e?void 0:e.originalName,c=`image-dynamic-selected-${t.utils.getUID()}`;return(0,t.jsx)("div",{className:(0,t.classNames)(n,"jimu-builder--background-setting"),style:s},(0,t.jsx)(F.SettingRow,{label:this.translate("fill")},(0,t.jsx)(W.ThemeColorPicker,{title:this.translate("fillColor"),"aria-label":this.translate("fillColor"),specificTheme:o||a,onChange:this._onColorChange,value:i.color})),(0,t.jsx)(F.SettingRow,{className:"background-image",label:this.translate("image")},(0,t.jsx)(gt.ImageSelector,Object.assign({widgetId:"background-setting",buttonLabel:this.translate("browse"),buttonSize:"sm",className:"w-50",buttonClassName:"text-dark d-flex justify-content-center btn-browse",onChange:this.openBrowseImage,imageParam:i.image,"aria-label":this.translate("browseImage")},l?{"aria-describedby":c}:{})),l&&(0,t.jsx)("div",{id:c,style:{display:"none"},"aria-label":this.translate("numSelected",{number:l})})),(0,t.jsx)(F.SettingRow,{className:"background-image-fill-type",label:this.translate("position")},(0,t.jsx)(r.Select,{"aria-label":this.translate("position"),size:"sm",className:"fill-type",name:"bg-position",value:i.fillType,onChange:this._onPositionChange.bind(this)},this.getFillType().map(((e,i)=>{var n;return(0,t.jsx)("option",{key:i,value:e.value},null!==(n=e.label)&&void 0!==n?n:e.value)})))))}}dt.defaultProps={background:{color:void 0,fillType:r.FillType.FIT,image:{url:""}},onChange:()=>{}};const pt=(0,l.withStyles)((0,l.withTheme)((0,t.injectIntl)(dt),!0),"BackgroundSetting");const ut=t.css`
  .color-picker-block {
    margin-right: 9px;
  }
`,It=e=>{const i=(0,l.useTheme2)(),{onChange:n,color:s,size:a,className:o}=e,r=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]])}return i}(e,["onChange","color","size","className"]);return(0,t.jsx)("div",Object.assign({css:ut,className:(0,t.classNames)("size-color-setting d-flex",o)},r),(0,t.jsx)(W.ThemeColorPicker,{specificTheme:i,value:s,onChange:e=>n("color",e)}),(0,t.jsx)(B,{value:null!=a?a:"12px",onChange:e=>n("size",`${e.distance}${e.unit}`)}))},mt=e=>{const i=(0,l.useTheme2)(),{onlyBorderColor:n,icon:s,onChange:a,variant:o}=e,{bold:c,italic:g,underline:d,strike:p,color:u,bg:I,size:m,border:M,borderRadius:N,icon:h}=o||{},y=r.hooks.useTranslate(r.defaultMessages,t.defaultMessages),j=t.polished.getValueAndUnit(r.styleUtils.remToPixel(N||"0rem")),w=(0,t.Immutable)({number:[null==j?void 0:j[0]],unit:null==j?void 0:j[1]});return t.React.createElement(t.React.Fragment,null,t.React.createElement(F.SettingRow,{className:"mt-3",flow:"wrap",label:y("text")},t.React.createElement(Qe,{bold:c,italic:g,underline:d,strike:p,size:m,color:u,onChange:a})),s&&t.React.createElement(F.SettingRow,{className:"mt-3",flow:"no-wrap",label:y("icon")},t.React.createElement(It,{className:"w-50",color:null==h?void 0:h.color,size:null==h?void 0:h.size,onChange:(e,t)=>a("icon",Object.assign(Object.assign({},h),{[e]:t}))})),t.React.createElement(F.SettingRow,{className:"mt-3",flow:"no-wrap",label:y("background")},t.React.createElement(W.ThemeColorPicker,{specificTheme:i,value:I,onChange:e=>a("bg",e)})),n&&t.React.createElement(F.SettingRow,{className:"mt-3",label:y("underline"),flow:"no-wrap"},t.React.createElement(It,{color:null==M?void 0:M.color,size:null==M?void 0:M.width,onChange:(e,t)=>{e="size"===e?"width":e,a("border",Object.assign(Object.assign({},M),{[e]:t}))}})),!n&&t.React.createElement(F.SettingRow,{className:"mt-3",label:y("border"),flow:"wrap"},t.React.createElement(J,{value:M,onChange:e=>a("border",e)})),t.React.createElement(F.SettingRow,{className:"mt-3",label:y("borderRadius"),flow:"no-wrap"},t.React.createElement(De,{style:{width:n?"35%":"30%"},separated:!1,value:w,onChange:e=>{var t;return a("borderRadius",`${null===(t=e.number)||void 0===t?void 0:t[0]}${null==e?void 0:e.unit}`)}})))},Mt=e=>{const{onChange:i,variant:n}=e,{icon:s}=n||{},a=r.hooks.useTranslate(t.defaultMessages);return t.React.createElement(F.SettingRow,{className:"mt-2",flow:"no-wrap",label:a("icon")},t.React.createElement(It,{color:null==s?void 0:s.color,size:null==s?void 0:s.size,onChange:(e,t)=>i("icon",Object.assign(Object.assign({},s),{[e]:t}))}))},Nt=e=>"default"===e?"regular":"active"===e?"selected":e,ht=e=>{const{variant:i,onChange:n,states:s=["default","active","hover"],icon:a,text:o,iconInText:l,onlyBorderColor:c}=e,g=t.React.useMemo((()=>{var e;return t.css`
      .tab-title-item{
        width: ${null!==(e=100/(null==s?void 0:s.length))&&void 0!==e?e:1}%;
      }
     .style-setting--input-unit {
        width: ${t.polished.rem(80)};
      }
    `}),[s]),d=r.hooks.useTranslate();return(0,t.jsx)(F.SettingRow,{flow:"wrap"},(0,t.jsx)(r.Tabs,{type:"pills",className:"flex-grow-1 w-100 h-100",fill:!0,css:g,defaultValue:"0"},s.map(((e,s)=>{var g,p;return(0,t.jsx)(r.Tab,{id:s+"",key:s,className:"tab-title-item",title:d(Nt(e))},a&&(0,t.jsx)(Mt,{variant:null===(g=null==i?void 0:i.item)||void 0===g?void 0:g[e],onChange:(t,i)=>n(e,t,i)}),o&&(0,t.jsx)(mt,{variant:null===(p=null==i?void 0:i.item)||void 0===p?void 0:p[e],icon:l,onlyBorderColor:c,onChange:(t,i)=>n(e,t,i)}))}))))};const{useMemo:yt}=t.React,jt=c(63503),wt=c(38586),xt=c(29965),bt=c(82744),At=c(91112),vt=e=>{const{size:i=12}=e,n=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]])}return i}(e,["size"]),s=(e=>yt((()=>[r.utils.toIconResult(jt,"dot",e),r.utils.toIconResult(wt,"pill",e),r.utils.toIconResult(xt,"cube",e),r.utils.toIconResult(bt,"circle",e),r.utils.toIconResult(At,"double-circle",e)]),[e]))(i);return t.React.createElement(gt.IconPicker,Object.assign({groups:"none",customIcons:s},n))},Dt=c(89781),Ct=c(94850),zt=c(57223),ft=c(64037),Tt=c(63619),Ot=c(19502),St=c(63291),Lt=[{icon:Dt,type:t.AnimationType.None},{type:t.AnimationType.FadeIn,icon:Ct,supportedTriggers:[t.AnimationTriggerType.ScrollIntoView]},{type:t.AnimationType.FloatIn,icon:zt,supportedTriggers:[t.AnimationTriggerType.ScrollIntoView],supportedDirections:[t.AnimationDirection.Top,t.AnimationDirection.Bottom,t.AnimationDirection.Left,t.AnimationDirection.Right]},{type:t.AnimationType.FlyIn,icon:ft,supportedTriggers:[t.AnimationTriggerType.ScrollIntoView],supportedDirections:[t.AnimationDirection.Top,t.AnimationDirection.Bottom,t.AnimationDirection.Left,t.AnimationDirection.Right]},{type:t.AnimationType.SpinIn,icon:Tt,supportedTriggers:[t.AnimationTriggerType.ScrollIntoView]},{type:t.AnimationType.WipeIn,icon:Ot,supportedTriggers:[t.AnimationTriggerType.ScrollIntoView],supportedDirections:[t.AnimationDirection.Top,t.AnimationDirection.Bottom,t.AnimationDirection.Left,t.AnimationDirection.Right]},{type:t.AnimationType.ZoomIn,icon:St,supportedTriggers:[t.AnimationTriggerType.ScrollIntoView]}],Zt=[{icon:Dt,type:t.AnimationType.None},{icon:Ct,type:t.AnimationType.FadeIn},{icon:zt,type:t.AnimationType.FloatIn,supportedDirections:[t.AnimationDirection.Top,t.AnimationDirection.Bottom,t.AnimationDirection.Left,t.AnimationDirection.Right]},{icon:Ot,type:t.AnimationType.WipeIn,supportedDirections:[t.AnimationDirection.Top,t.AnimationDirection.Bottom,t.AnimationDirection.Left,t.AnimationDirection.Right]},{icon:St,type:t.AnimationType.ZoomIn}];var Pt=c(59788),Et=c.n(Pt);const kt=e=>{const{className:i}=e,n=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]])}return i}(e,["className"]),s=(0,t.classNames)("jimu-icon jimu-icon-component",i);return t.React.createElement(r.SVG,Object.assign({className:s,src:Et()},n))};var Bt=c(35733),Yt=c.n(Bt),Rt=c(11587),Gt=c.n(Rt),Qt=c(33869),Wt=c.n(Qt),Vt=c(28630),Ut=c.n(Vt),Ht=c(53073),Jt=c.n(Ht);class Ft extends t.React.PureComponent{constructor(){super(...arguments),this.onWidgetEffectTypeChanged=(e,i)=>{e.stopPropagation();const n=(0,t.Immutable)(this.props.effectSetting||{});(null==n?void 0:n.type)===i?this.props.onPreviewClicked():this.props.onSettingChange(n.set("type",i).setIn(["option","direction"],null))},this.onDurationChange=e=>{const i=(0,t.Immutable)(this.props.effectSetting||{});this.props.onSettingChange(i.setIn(["option","configType"],e.target.value))},this.onWidgetEffectDirectionChanged=e=>{const i=(0,t.Immutable)(this.props.effectSetting||{});this.props.onSettingChange(i.setIn(["option","direction"],e.target.value))}}createAnimationCard(e,i){const{effectSetting:n}=this.props,s=(null==n?void 0:n.type)||t.AnimationType.None;return(0,t.jsx)("div",{className:(0,t.classNames)("d-flex flex-column align-items-center card-item",{selected:e.type===s}),key:i},(0,t.jsx)(r.Button,{icon:!0,role:"option","aria-label":this.props.formatMessage(e.type.toLowerCase()),"aria-pressed":e.type===s,className:"d-flex justify-content-center card-content border-0",onClick:t=>this.onWidgetEffectTypeChanged(t,e.type)},(0,t.jsx)(r.Icon,{className:"w-100",currentColor:!1,icon:e.icon||Jt(),size:72})),(0,t.jsx)("div",{className:"card-name flex-grow-1 d-flex align-items-start mt-1"},(0,t.jsx)("span",{className:"text-center card-name-content",title:this.props.formatMessage(e.type.toLowerCase())},this.props.formatMessage(e.type.toLowerCase()))))}chooseDirectionIcon(e){switch(e){case t.AnimationDirection.Bottom:return Yt();case t.AnimationDirection.Left:return Ut();case t.AnimationDirection.Right:return Wt();case t.AnimationDirection.Top:return Gt();default:return null}}createEffectDirectionChooser(e){var i;const{effectSetting:n}=this.props;return(0,t.jsx)("div",{className:"direction-select px-3 mb-3"},(0,t.jsx)("div",{className:"effect-title mb-2"},this.props.formatMessage("direction")),(0,t.jsx)(r.Select,{defaultValue:t.AnimationDirection.Top,value:null===(i=null==n?void 0:n.option)||void 0===i?void 0:i.direction,onChange:this.onWidgetEffectDirectionChanged,size:"sm","aria-label":this.props.formatMessage("direction")},e.map(((e,i)=>(0,t.jsx)("option",{value:e,key:i},(0,t.jsx)(r.Icon,{className:"mx-1",icon:this.chooseDirectionIcon(e),size:12}),this.props.formatMessage(e.toLowerCase()))))))}getStyle(){return t.css`
      .animation-cards {
        padding: 0 16px 16px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-row-gap: 12px;
        grid-column-gap: 12px;
      }

      .separator {
        width: calc(100% - 2rem);
        height: 1px;
        margin: 0 1rem 1rem;
        background: var(--light-500);
      }

      .card-item {
        font-size: 13px;
        flex: 0 0 45%;

        user-select: none;
        cursor: pointer;
        position: relative;

        .card-content {
          width: 100%;
          height: 5rem;
          background-color: var(--light-200);
        }

        &.selected .card-content {
          outline: 2px solid var(--primary-600);
        }

        .card-name {
          max-width: 90px;
          margin: 0 auto;
          color: var(--dark-800);
          .card-name-content {
            line-height: 1rem;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        }
      }
    `}render(){var e,i;const{formatMessage:n,effectSetting:s,metaInfos:a}=this.props,o=a.find((e=>e.type===(null==s?void 0:s.type)));return(0,t.jsx)("div",{className:"bg-light-300 border-color-gray-400",css:this.getStyle()},(0,t.jsx)("div",{className:"w-100 h-100 animation-panel-border"},(0,t.jsx)(r.ButtonGroup,{role:"listbox",className:"animation-cards"},a.map(((e,t)=>this.createAnimationCard(e,t)))),o&&o.type!==t.AnimationType.None&&(0,t.jsx)("div",{className:"separator"}),o&&o.type!==t.AnimationType.None&&(0,t.jsx)("div",{className:"duration-input px-3 mb-3"},(0,t.jsx)("div",{className:"effect-title mb-2"},this.props.formatMessage("effect")),(0,t.jsx)(r.Select,{value:null!==(i=null===(e=null==s?void 0:s.option)||void 0===e?void 0:e.configType)&&void 0!==i?i:t.AnimationEffectType.Default,onChange:this.onDurationChange,size:"sm","aria-label":this.props.formatMessage("effect")},Object.entries(t.AnimationEffectType).map((([e,i],s)=>(0,t.jsx)("option",{key:s,value:i},n(e.toLowerCase())))))),(null==o?void 0:o.supportedDirections)&&this.createEffectDirectionChooser(o.supportedDirections)))}}class Xt extends t.React.PureComponent{constructor(e){super(e),this.onAsOneSettingChange=e=>{this.props.onSettingChange(t.AnimationPlayMode.AsOne,e)},this.onOneByOneSettingChange=e=>{this.props.onSettingChange(t.AnimationPlayMode.OneByOne,e)},this.previewAsOne=()=>{this.props.onPreviewClicked(t.AnimationPlayMode.AsOne)},this.previewOneByOne=()=>{this.props.onPreviewClicked(t.AnimationPlayMode.OneByOne)},this.toggleAsOneOpened=()=>{this.setState({asOneOpened:!this.state.asOneOpened})},this.toggleOneByOneOpened=()=>{this.setState({oneByOneOpened:!this.state.oneByOneOpened})},this.state={asOneOpened:!0,oneByOneOpened:!(this.props.supportAsOne&&this.props.supportOneByOne)}}getStyle(){return t.css`
      .sub-header {
        padding: 0.5rem 0.5rem 0.5rem 1rem;

        .title {
          font-size: 14px;
        }
      }
    `}render(){const{formatMessage:e,supportOneByOne:i,supportAsOne:n,effectSetting:s,oneByOneSetting:a}=this.props,o=i&&n;return(0,t.jsx)("div",{className:"bg-light-300 border-color-gray-400",css:this.getStyle()},n&&(0,t.jsx)(F.SettingSection,{className:"p-0",title:(0,t.jsx)("div",{className:"w-100 d-flex justify-content-between align-items-center sub-header"},(0,t.jsx)("div",{className:"text-truncate title",title:`${i&&this.props.selectedWidgetLabel}`,css:t.css`max-width: 80%;`},i&&this.props.selectedWidgetLabel),o&&(0,t.jsx)(r.Button,{size:"sm",type:"tertiary",icon:!0,onClick:this.toggleAsOneOpened},(0,t.jsx)(kt,{size:"s",rotate:this.state.asOneOpened?180:0})))},(0,t.jsx)(r.Collapse,{isOpen:this.state.asOneOpened,className:"mt-0"},(0,t.jsx)(Ft,{effectSetting:s,metaInfos:Lt,onSettingChange:this.onAsOneSettingChange,previewEnabled:!0,onPreviewClicked:this.previewAsOne,formatMessage:e}))),i&&(0,t.jsx)(F.SettingSection,{className:"p-0",title:(0,t.jsx)("div",{className:"w-100 d-flex justify-content-between align-items-center sub-header"},(0,t.jsx)("div",{className:"text-truncate title",title:`${n&&e("widgetByWidget")}`,css:t.css`max-width: 80%;`},n&&e("widgetByWidget")),o&&(0,t.jsx)(r.Button,{size:"sm",type:"tertiary",icon:!0,onClick:this.toggleOneByOneOpened},(0,t.jsx)(kt,{size:"s",rotate:this.state.oneByOneOpened?180:0})))},(0,t.jsx)(r.Collapse,{isOpen:this.state.oneByOneOpened,className:"mt-0"},(0,t.jsx)(Ft,{effectSetting:a,metaInfos:Zt,onSettingChange:this.onOneByOneSettingChange,previewEnabled:!0,onPreviewClicked:this.previewOneByOne,formatMessage:e}))))}}const Kt=t.ReactRedux.connect((function(e){var i,n,s,a,o,l;const r=e.appStateInBuilder,c=null==r?void 0:r.appConfig,g=null===(i=null==r?void 0:r.appRuntimeInfo)||void 0===i?void 0:i.selection;if(g){const{layoutId:e,layoutItemId:i}=g,l=null===(a=null===(s=null===(n=c.layouts)||void 0===n?void 0:n[e])||void 0===s?void 0:s.content)||void 0===a?void 0:a[i];if((null==l?void 0:l.type)===t.LayoutItemType.Widget){const e=c.widgets[l.widgetId];return{selectedWidgetLabel:null!==(o=null==e?void 0:e.label)&&void 0!==o?o:""}}}else{const e=null===(l=null==r?void 0:r.appRuntimeInfo)||void 0===l?void 0:l.currentDialogId;if(e&&c.dialogs[e])return{selectedWidgetLabel:c.dialogs[e].label}}return{selectedWidgetLabel:""}}))(Xt);var $t=c(56097),_t=c.n($t);const qt=e=>{const{className:i}=e,n=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]])}return i}(e,["className"]),s=(0,t.classNames)("jimu-icon jimu-icon-component",i);return t.React.createElement(r.SVG,Object.assign({className:s,src:_t()},n))};var ei=c(88866),ti=c.n(ei);const ii=e=>{const{className:i}=e,n=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]])}return i}(e,["className"]),s=(0,t.classNames)("jimu-icon jimu-icon-component",i);return t.React.createElement(r.SVG,Object.assign({className:s,src:ti()},n))},ni=c(89781);class si extends t.React.PureComponent{constructor(e){super(e),this.sidePopperTrigger=t.React.createRef(),this.buttonRef=t.React.createRef(),this.toggleSidePanel=()=>{this.setState({showSidePanel:!this.state.showSidePanel})},this.previewAnimation=e=>{e.stopPropagation(),this.props.onPreviewClicked(null)},this.state={showSidePanel:!1}}componentDidUpdate(e){this.props.contentId!==e.contentId&&this.state.showSidePanel&&this.setState({showSidePanel:!1})}getAnimBoxStyle(){return t.css`
      background-color: transparent;
      position: relative;
      width: 100%;
      height: 72px;

      .img-tip {
        position: relative;
        min-width: 90px;
        height: 72px;
        cursor: pointer;

        &, &:hover {
          background: var(--light-200);
        }

        .has-sibling {
          position: absolute;
          &.first {
            left: 5px;
            top: 5px;
          }
          &.second {
            bottom: 5px;
            right: 5px;
          }
        }

        .diag-sep {
          position: absolute;
          height: 1px;
          width: 80px;
          top: 36px;
          transform: rotateZ(-45deg);
          background: var(--light-500);

          .jimu-rtl & {
            transform: rotateZ(45deg);
          }
        }
      }

      .amin-icons  {
        display: inline-grid;
        grid-template-columns: auto 26px;
        grid-column-gap: .5rem;
        .jimu-icon {
          margin-right: 0;
        }
      }
      .anim-labels {
        align-self: stretch;
        .anim-label {
          flex-grow: 1;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          word-break: break-word;
          -webkit-line-clamp: 2;
        }
      }
    `}getSidePopperStyle(){return t.css`
      .header {
        height: 60px;
        padding: 0 0.5rem;
      }
      .side-popper-title {
        color: var(--dark-600);
        font-size: 16px;
      }
      .effect-title {
        color: var(--dark-600);
        font-size: 13px;
      }
      .side-content {
        position: relative;
        width: 100%;
        overflow: auto;
      }
    `}render(){var e,i;const{effectSetting:n,oneByOneSetting:s,formatMessage:a,previewEnabled:o,supportAsOne:l,supportOneByOne:c}=this.props,g=Lt.find((e=>e.type===(null==n?void 0:n.type))),d=Zt.find((e=>e.type===(null==s?void 0:s.type))),p=l&&c,u=p?32:48,I=(null==n?void 0:n.type)?a(n.type.toLowerCase()):a("none"),m=(null==s?void 0:s.type)?a(s.type.toLowerCase()):a("none");let M="";return l&&(M+=I),p&&(M+="/"),c&&(M+=m),(0,t.jsx)(t.React.Fragment,null,(0,t.jsx)("div",{className:"anima-box d-flex justify-content-center align-items-center",css:this.getAnimBoxStyle()},(0,t.jsx)(r.Button,{className:"img-tip d-flex justify-content-center align-items-center border-0",onClick:this.toggleSidePanel,title:M,"aria-label":M,icon:!0},l&&(0,t.jsx)("div",{className:(0,t.classNames)("anim-icon first",{"has-sibling":p})},(0,t.jsx)(r.Icon,{icon:(null==g?void 0:g.icon)||ni,size:u})),p&&(0,t.jsx)("div",{className:"diag-sep"}),c&&(0,t.jsx)("div",{className:(0,t.classNames)("anim-icon second",{"has-sibling":p})},(0,t.jsx)(r.Icon,{icon:(null==d?void 0:d.icon)||ni,size:u}))),(0,t.jsx)("div",{className:"d-flex flex-column justify-content-between align-items-center ml-2 h-100 flex-grow-1"},(0,t.jsx)("div",{className:"anim-labels d-flex"},(0,t.jsx)("div",{className:"anim-label"},l&&(0,t.jsx)("span",null,I),p&&(0,t.jsx)("span",{className:"mx-1"},"/"),c&&(0,t.jsx)("span",null,m)),(0,t.jsx)(r.Tooltip,{title:a("scrollIntoView")},(0,t.jsx)(r.Button,{className:"p-0",icon:!0,type:"tertiary",size:"sm"},(0,t.jsx)(ii,{size:"m"})))),(0,t.jsx)("div",{className:"amin-icons w-100",ref:this.sidePopperTrigger},(0,t.jsx)(r.Button,{size:"sm",ref:this.buttonRef,onClick:this.toggleSidePanel,className:"text-truncate",title:a("change")},a("change")),(0,t.jsx)(r.Tooltip,{title:a("preview"),placement:"bottom"},(0,t.jsx)(r.Button,{type:"default",size:"sm",icon:!0,disabled:!o,onClick:this.previewAnimation},(0,t.jsx)(qt,{size:"s"})))))),this.state.showSidePanel&&(0,t.jsx)(F.SidePopper,{isOpen:!0,css:this.getSidePopperStyle(),position:"right",toggle:this.toggleSidePanel,trigger:null===(e=this.sidePopperTrigger)||void 0===e?void 0:e.current,title:`${a("animation")} ${a("setting")}`,backToFocusNode:null===(i=this.buttonRef)||void 0===i?void 0:i.current},(0,t.jsx)("div",{className:"side-content"},(0,t.jsx)(Kt,Object.assign({},this.props)))))}}si.defaultProps={onSettingChange:()=>{},previewEnabled:!0,supportOneByOne:!1,onPreviewClicked:()=>{},formatMessage:e=>e};const ai=c(109),oi=c(83167),li=c(58228),ri=c(75046),ci=c(38830),gi=c(95514),di=[{icon:ai,type:t.TransitionType.None},{type:t.TransitionType.Box,icon:li,supportDirection:!0},{type:t.TransitionType.Cover,icon:gi,supportDirection:!0},{type:t.TransitionType.Cube,icon:ri,supportDirection:!0},{type:t.TransitionType.Fade,icon:oi},{type:t.TransitionType.Push,icon:ci,supportDirection:!0}],pi=c(89781);class ui extends t.React.PureComponent{constructor(e){super(e),this.sidePopperTrigger=t.React.createRef(),this.buttonRef=t.React.createRef(),this.modalStyle={position:"absolute",top:"60px",bottom:"0",width:"100%",height:"auto",paddingBottom:"1px"},this.toggleSidePanel=()=>{this.setState({showSidePanel:!this.state.showSidePanel})},this.previewTransition=e=>{e.stopPropagation(),this.props.onPreviewTransitionClicked()},this.onTransitionTypeChanged=e=>{var t,i;(null===(t=this.props.transition)||void 0===t?void 0:t.type)===e?this.props.onPreviewTransitionClicked():this.props.onTransitionChange({type:e,direction:null===(i=this.props.transition)||void 0===i?void 0:i.direction})},this.onDirectionChanged=e=>{var t;this.props.onTransitionChange({type:null===(t=this.props.transition)||void 0===t?void 0:t.type,direction:e.target.value})},this.previewOneByOneEffect=()=>{this.props.onPreviewOneByOneClicked()},this.onPreviewAsAWhoneClicked=e=>{e.stopPropagation(),this.props.onPreviewAsAWhoneClicked()},this.onOnebyOneSettingChange=(e,t)=>{this.props.onOneByOneChange(t)},this.state={showSidePanel:!1}}createTransitionCard(e,i){const{transition:n}=this.props,s=n.type||t.TransitionType.None;return(0,t.jsx)("div",{className:(0,t.classNames)("d-flex flex-column align-items-center card-item",{selected:e.type===s}),key:i},(0,t.jsx)(r.Button,{icon:!0,"aria-label":this.props.formatMessage(e.type.toLowerCase()),"aria-pressed":e.type===s,className:"d-flex justify-content-center card-content border-0",onClick:()=>this.onTransitionTypeChanged(e.type)},(0,t.jsx)(r.Icon,{className:"w-100 h-100",currentColor:!1,icon:e.icon||pi})),(0,t.jsx)("div",{className:"card-name flex-grow-1 d-flex align-items-start mt-1"},(0,t.jsx)("span",{className:"text-center card-name-content",title:this.props.formatMessage(e.type.toLowerCase())},this.props.formatMessage(e.type.toLowerCase()))))}createDirectionChooser(){const{transition:e}=this.props;return(0,t.jsx)("div",{className:"direction-select px-3"},(0,t.jsx)("div",{className:"direction-title mb-2"},this.props.formatMessage("direction")),(0,t.jsx)(r.Select,{defaultValue:t.TransitionDirection.Horizontal,value:null==e?void 0:e.direction,onChange:this.onDirectionChanged,size:"sm"},Object.entries(t.TransitionDirection).map(((e,i)=>(0,t.jsx)("option",{value:e[1],key:i},this.props.formatMessage(e[0].toLowerCase()))))))}getSidePopperStyle(){return t.css`
      .tab-pane {
        position: relative;
      }
      .header {
        height: 60px;
        padding: 0 0.5rem;
        border-bottom: none;
      }
      .side-popper-title {
        color: var(--dark-600);
        font-size: 16px;
      }
      .direction-title {
        color: var(--dark-600);
        font-size: 13px;
      }
      .animation-cards {
        padding: 0 16px 16px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-row-gap: 12px;
        grid-column-gap: 12px;
      }

      .separator {
        width: calc(100% - 2rem);
        height: 1px;
        margin: 0 1rem 1rem;
        background: var(--light-500);
      }

      .card-item {
        font-size: 13px;
        flex: 0 0 45%;

        user-select: none;
        cursor: pointer;
        position: relative;

        .card-content {
          width: 100%;
          height: 5.3rem;
          background-color: var(--light-200);
        }

        &.selected .card-content {
          outline: 2px solid var(--primary-600);
        }

        .card-name {
          max-width: 90px;
          margin: 0 auto;
          color: var(--dark-800);
          .card-name-content {
            line-height: 1rem;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        }
      }
    `}getAnimBoxStyle(){return t.css`
      background-color: transparent;
      width: 100%;
      height: 72px;
      position: relative;

      .img-tip {
        position: relative;
        min-width: 90px;
        height: 72px;
        cursor: pointer;

        &, &:hover {
          background: var(--light-200);
        }

        .has-sibling {
          position: absolute;
          &.first {
            left: 5px;
            top: 5px;
          }
          &.second {
            bottom: 5px;
            right: 5px;
          }
        }

        .diag-sep {
          position: absolute;
          height: 1px;
          width: 80px;
          top: 36px;
          transform: rotateZ(-45deg);
          background: var(--light-500);

          .jimu-rtl & {
            transform: rotateZ(45deg);
          }
        }
      }

      .amin-icons  {
        display: inline-grid;
        grid-template-columns: auto 26px;
        grid-column-gap: .5rem;
        .jimu-icon {
          margin-right: 0;
        }
      }

      .anim-labels {
        align-self: stretch;
        .anim-label {
          flex-grow: 1;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          word-break: break-word;
          -webkit-line-clamp: 2;
        }
      }
    `}render(){var e,i;const{formatMessage:n,transition:s,transitionLabel:a,oneByOneEffect:o,showOneByOne:l}=this.props,c=di.find((e=>e.type===(null==s?void 0:s.type))),g=Zt.find((e=>e.type===(null==o?void 0:o.type))),d=l?32:48,p=(null==s?void 0:s.type)?n(s.type.toLowerCase()):n("none"),u=(null==o?void 0:o.type)?n(o.type.toLowerCase()):n("none");let I=p;return l&&(I=I+"/"+u),(0,t.jsx)(t.React.Fragment,null,(0,t.jsx)("div",{className:"anima-box d-flex justify-content-center align-items-center flex-grow-1",css:this.getAnimBoxStyle()},(0,t.jsx)(r.Button,{className:"img-tip d-flex justify-content-center align-items-center border-0",onClick:this.toggleSidePanel,title:I,"aria-label":I,icon:!0},(0,t.jsx)("div",{className:(0,t.classNames)("anim-icon first",{"has-sibling":l})},(0,t.jsx)(r.Icon,{icon:(null==c?void 0:c.icon)||pi,size:d})),l&&(0,t.jsx)("div",{className:"diag-sep"}),l&&(0,t.jsx)("div",{className:(0,t.classNames)("anim-icon second",{"has-sibling":l})},(0,t.jsx)(r.Icon,{icon:(null==g?void 0:g.icon)||pi,size:d}))),(0,t.jsx)("div",{className:"d-flex flex-column justify-content-between align-items-center ml-2 h-100 flex-grow-1"},(0,t.jsx)("div",{className:"anim-labels d-flex"},(0,t.jsx)("div",{className:"anim-label"},(0,t.jsx)("span",null,p),l&&(0,t.jsx)("span",{className:"mx-1"},"/"),l&&(0,t.jsx)("span",null,u)),(0,t.jsx)(r.Tooltip,{title:n("animationOnTransition")},(0,t.jsx)(r.Button,{className:"p-0",icon:!0,type:"tertiary",size:"sm"},(0,t.jsx)(ii,{size:"m"})))),(0,t.jsx)("div",{className:"amin-icons w-100",ref:this.sidePopperTrigger},(0,t.jsx)(r.Button,{ref:this.buttonRef,"aria-label":n("change"),size:"sm",onClick:this.toggleSidePanel,className:"text-truncate",title:n("change")},n("change")),(0,t.jsx)(r.Tooltip,{title:n("preview"),placement:"bottom"},(0,t.jsx)(r.Button,{type:"default",size:"sm",icon:!0,onClick:this.onPreviewAsAWhoneClicked},(0,t.jsx)(qt,{size:"s"})))))),this.state.showSidePanel&&(0,t.jsx)(F.SidePopper,{isOpen:!0,position:"right",toggle:this.toggleSidePanel,trigger:null===(e=this.sidePopperTrigger)||void 0===e?void 0:e.current,title:n("setting"),backToFocusNode:null===(i=this.buttonRef)||void 0===i?void 0:i.current},(0,t.jsx)("div",{css:this.getSidePopperStyle(),style:this.modalStyle},!l&&(0,t.jsx)("div",{className:"bg-light-300 border-color-gray-400 mt-3"},(0,t.jsx)("div",{className:"w-100 h-100 animation-panel-border"},(0,t.jsx)(r.ButtonGroup,{className:"animation-cards"},di.map(((e,t)=>this.createTransitionCard(e,t)))),(null==c?void 0:c.supportDirection)&&(0,t.jsx)("div",{className:"separator"}),(null==c?void 0:c.supportDirection)&&this.createDirectionChooser())),l&&(0,t.jsx)(r.Tabs,{type:"underline",key:"widget-setting",className:"flex-grow-1 w-100 h-100",fill:!0,defaultValue:"transition"},(0,t.jsx)(r.Tab,{id:"transition",title:a,className:"tab-title-item"},(0,t.jsx)("div",{className:"bg-light-300 border-color-gray-400 mt-3"},(0,t.jsx)("div",{className:"w-100 h-100 animation-panel-border"},(0,t.jsx)("div",{className:"animation-cards"},di.map(((e,t)=>this.createTransitionCard(e,t)))),(null==c?void 0:c.supportDirection)&&(0,t.jsx)("div",{className:"separator"}),(null==c?void 0:c.supportDirection)&&this.createDirectionChooser()))),(0,t.jsx)(r.Tab,{id:"widget",title:n("widget"),className:"tab-title-item"},(0,t.jsx)(Kt,{effectSetting:null,oneByOneSetting:o,onSettingChange:this.onOnebyOneSettingChange,previewEnabled:!0,supportOneByOne:!0,supportAsOne:!1,onPreviewClicked:this.previewOneByOneEffect,formatMessage:this.props.formatMessage}))))))}}ui.defaultProps={formatMessage:e=>e,showOneByOne:!0,onPreviewOneByOneClicked:()=>{}};const Ii=e=>{const{className:i,value:n,onChange:s}=e,a=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]])}return i}(e,["className","value","onChange"]),o=t.React.useMemo((()=>null==n?void 0:n.asMutable({deep:!0})),[n]),l=r.hooks.useTranslate(),c=t.React.useMemo((()=>l("padding")),[l]);return t.React.createElement(ve,Object.assign({type:"edge",value:o,onChange:s,unifiedAriaLabel:c,unifiedTitle:c},a,{className:(0,t.classNames)("style-setting--padding",i)}))};(0,l.registerStyles)("jimu-ui/advanced/style-setting-components/",e)})(),g})())}}}));