System.register(["jimu-core","jimu-layouts/layout-runtime","jimu-theme","jimu-ui","jimu-ui/advanced/resource-selector","jimu-ui/advanced/setting-components","jimu-ui/basic/color-picker"],(function(e,t){var i={},n={},s={},a={},o={},l={},r={};return{setters:[function(e){i.AnimationDirection=e.AnimationDirection,i.AnimationEffectType=e.AnimationEffectType,i.AnimationPlayMode=e.AnimationPlayMode,i.AnimationTriggerType=e.AnimationTriggerType,i.AnimationType=e.AnimationType,i.Immutable=e.Immutable,i.LayoutItemType=e.LayoutItemType,i.React=e.React,i.ReactRedux=e.ReactRedux,i.TransitionDirection=e.TransitionDirection,i.TransitionType=e.TransitionType,i.classNames=e.classNames,i.css=e.css,i.defaultMessages=e.defaultMessages,i.getAppStore=e.getAppStore,i.injectIntl=e.injectIntl,i.jsx=e.jsx,i.lodash=e.lodash,i.polished=e.polished,i.utils=e.utils},function(e){n.LayoutItemSizeModes=e.LayoutItemSizeModes,n.utils=e.utils},function(e){s.registerStyles=e.registerStyles,s.useTheme2=e.useTheme2,s.withStyles=e.withStyles,s.withTheme=e.withTheme},function(e){a.AdvancedButtonGroup=e.AdvancedButtonGroup,a.BorderSides=e.BorderSides,a.Button=e.Button,a.ButtonGroup=e.ButtonGroup,a.Collapse=e.Collapse,a.Dropdown=e.Dropdown,a.DropdownButton=e.DropdownButton,a.DropdownItem=e.DropdownItem,a.DropdownMenu=e.DropdownMenu,a.EsriSimpleLineSymbolStyle=e.EsriSimpleLineSymbolStyle,a.FillType=e.FillType,a.Icon=e.Icon,a.InputGroup=e.InputGroup,a.InputGroupAddon=e.InputGroupAddon,a.NormalLineType=e.NormalLineType,a.NumericInput=e.NumericInput,a.Option=e.Option,a.Select=e.Select,a.Sides=e.Sides,a.Tab=e.Tab,a.Tabs=e.Tabs,a.TextAlignValue=e.TextAlignValue,a.Tooltip=e.Tooltip,a.UnitTypes=e.UnitTypes,a.defaultMessages=e.defaultMessages,a.hooks=e.hooks,a.styleUtils=e.styleUtils,a.utils=e.utils},function(e){o.IconPicker=e.IconPicker,o.ImageSelector=e.ImageSelector},function(e){l.SettingRow=e.SettingRow,l.SettingSection=e.SettingSection,l.SidePopper=e.SidePopper},function(e){r.ThemeColorPicker=e.ThemeColorPicker}],execute:function(){e((()=>{var e={18371:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.036 12.157l8.01-8.01a.5.5 0 11.707.707l-8.01 8.01a1 1 0 01-1.415 0L1.146 8.682a.5.5 0 11.708-.707l4.182 4.182z" fill="#000"></path></svg>'},35212:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 3a1 1 0 011-1h2.75a3.25 3.25 0 012.33 5.516A3.25 3.25 0 019.75 14H5a1 1 0 01-1-1V3zm1 4.5h2.75a2.25 2.25 0 000-4.5H5v4.5zm0 1V13h4.75a2.25 2.25 0 000-4.5H5z" fill="#000"></path></svg>'},81874:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 2.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-2l-2 10h2a.5.5 0 010 1h-5a.5.5 0 010-1h2l2-10h-2a.5.5 0 01-.5-.5z" fill="#000"></path></svg>'},30840:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 0A3.5 3.5 0 0111 3.5V6h1a1 1 0 011 1v8a1 1 0 01-1 1H3a1 1 0 01-1-1V7a1 1 0 011-1h1V3.5A3.5 3.5 0 017.5 0zM5 6h5V3.5a2.5 2.5 0 00-2.336-2.495L7.5 1a2.5 2.5 0 00-2.495 2.336L5 3.5V6zm6 1H3v8h9V7h-1zm-3.5 5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill="#000"></path></svg>'},58285:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 2.02a.02.02 0 00-.02-.02H8a3 3 0 00-2.829 4l1.097.001A2 2 0 018 3h2v.5a.5.5 0 001 0V2.02zM12.5 7a.5.5 0 010 1h-9a.5.5 0 010-1h9zm-1.9 1.999h1.111c.185.456.289.964.289 1.501 0 1.866-1.252 3.392-2.83 3.495L9 14H6a1 1 0 01-1-1v-.5a.5.5 0 011 0v.499L9 13c1.105 0 2-1.12 2-2.5a2.96 2.96 0 00-.311-1.34L10.599 9z" fill="#000"></path></svg>'},13468:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 3a.5.5 0 000 1h5a.5.5 0 000-1h-5zm0 6a.5.5 0 000 1h5a.5.5 0 000-1h-5zM2 6.5a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm.5 5.5a.5.5 0 000 1h11a.5.5 0 000-1h-11z" fill="#000"></path></svg>'},67653:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 3a.5.5 0 000 1h11a.5.5 0 000-1h-11zm0 6a.5.5 0 000 1h11a.5.5 0 000-1h-11zM2 6.5a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm.5 5.5a.5.5 0 000 1h11a.5.5 0 000-1h-11z" fill="#000"></path></svg>'},47118:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 3h-7a.5.5 0 000 1h7a.5.5 0 000-1zm-7 3h9a.5.5 0 010 1h-9a.5.5 0 010-1zm6 3h-6a.5.5 0 000 1h6a.5.5 0 000-1zm5 3h-11a.5.5 0 000 1h11a.5.5 0 000-1z" fill="#000"></path></svg>'},192:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 3a.5.5 0 000 1h7a.5.5 0 000-1h-7zm1 6a.5.5 0 000 1h6a.5.5 0 000-1h-6zM4 6.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zM2.5 12a.5.5 0 000 1h11a.5.5 0 000-1h-11z" fill="#000"></path></svg>'},71007:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 2.5a.5.5 0 00-1 0V8a4 4 0 008 0V2.5a.5.5 0 00-1 0V8a3 3 0 01-6 0V2.5zm7 11a.5.5 0 00-.5-.5h-7a.5.5 0 000 1h7a.5.5 0 00.5-.5z" fill="#000"></path></svg>'},57322:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 3.5a3.5 3.5 0 10-7 0V6H3a1 1 0 00-1 1v8a1 1 0 001 1h9a1 1 0 001-1V7a1 1 0 00-1-1h-2V3.5l.005-.164A2.5 2.5 0 0112.5 1l.164.005A2.5 2.5 0 0115 3.5a.5.5 0 001 0zM9 7H3v8h9V7H9zm-1.5 5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill="#000"></path></svg>'},42351:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.146 4.653a.485.485 0 01.708 0L8 10.24l5.146-5.587a.485.485 0 01.708 0 .538.538 0 010 .738l-5.5 5.956a.485.485 0 01-.708 0l-5.5-5.956a.538.538 0 010-.738z" fill="#000"></path></svg>'},23377:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.854 11.347a.486.486 0 01-.708 0L8 5.76l-5.146 5.587a.485.485 0 01-.708 0 .538.538 0 010-.738l5.5-5.956a.485.485 0 01.708 0l5.5 5.956a.538.538 0 010 .738z" fill="#000"></path></svg>'},34051:e=>{e.exports='<svg viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 0v6.1l2.8-2.8.7.7-4 4-4-4 .7-.7 2.8 2.8V0z" fill-rule="evenodd"></path></svg>'},64164:e=>{e.exports='<svg viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg"><path d="M8 3.5H1.9L4.7.7 4 0 0 4l4 4 .7-.7-2.8-2.8H8z" fill-rule="evenodd"></path></svg>'},31185:e=>{e.exports='<svg viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg"><path d="M0 3.5h6.1L3.3.7 4 0l4 4-4 4-.7-.7 2.8-2.8H0z" fill-rule="evenodd"></path></svg>'},26350:e=>{e.exports='<svg viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 8h-1V1.9L.7 4.7 0 4l4-4 4 4-.7.7-2.8-2.8z" fill-rule="evenodd"></path></svg>'},42211:e=>{e.exports='<svg viewBox="0 0 46 1" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0h5v1H0V0zm10 0h5v1h-5V0zm15 0h-5v1h5V0zm5 0h5v1h-5V0zm16 0h-6v1h6V0zM7 0h1v1H7V0zm11 0h-1v1h1V0zm9 0h1v1h-1V0zm11 0h-1v1h1V0z" fill="#fff"></path></svg>'},98507:e=>{e.exports='<svg viewBox="0 0 46 1" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 0H0v1h5V0zm13 0h-5v1h5V0zm8 0h5v1h-5V0zm20 0h-7v1h7V0zM7 0h1v1H7V0zm14 0h-1v1h1V0zm12 0h1v1h-1V0zM11 0h-1v1h1V0zm12 0h1v1h-1V0zm14 0h-1v1h1V0z" fill="#fff"></path></svg>'},74440:e=>{e.exports='<svg viewBox="0 0 46 1" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 1h3V0H0v1zM6 1h3V0H6v1zM15 1h-3V0h3v1zM18 1h3V0h-3v1zM27 1h-3V0h3v1zM30 1h3V0h-3v1zM39 1h-3V0h3v1zM42 1h4V0h-4v1z" fill="#fff"></path></svg>'},29556:e=>{e.exports='<svg viewBox="0 0 46 1" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 1h1V0H0v1zm6 0h1V0H6v1zm7 0h-1V0h1v1zm5 0h1V0h-1v1zm7 0h-1V0h1v1zm5 0h1V0h-1v1zm7 0h-1V0h1v1zM3 1h1V0H3v1zm7 0H9V0h1v1zm5 0h1V0h-1v1zm7 0h-1V0h1v1zm5 0h1V0h-1v1zm7 0h-1V0h1v1zm5 0h1V0h-1v1zm4 0h-1V0h1v1zm2 0h1V0h-1v1z" fill="#fff"></path></svg>'},95859:e=>{e.exports='<svg viewBox="0 0 46 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 1h46V0H0v1zM0 4h46V3H0v1z" fill="#fff"></path></svg>'},58383:e=>{e.exports='<svg viewBox="0 0 46 1" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M46 1H0V0h46v1z" fill="#fff"></path></svg>'},82744:e=>{e.exports='<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M6 0a6 6 0 110 12A6 6 0 016 0zm0 2a4 4 0 100 8 4 4 0 000-8z" fill="#000" fill-rule="nonzero"></path></svg>'},29965:e=>{e.exports='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 0l10 10-10 10L0 10z" fill="#000" fill-rule="nonzero"></path></svg>'},63503:e=>{e.exports='<svg viewBox="0 0 6 6" xmlns="http://www.w3.org/2000/svg"><circle cx="1104" cy="1049" r="3" transform="translate(-1101 -1046)" fill="#000" fill-rule="nonzero"></circle></svg>'},91112:e=>{e.exports='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0zm0 2a8 8 0 100 16 8 8 0 000-16zm0 2a6 6 0 110 12 6 6 0 010-12z" fill="#000" fill-rule="nonzero"></path></svg>'},38586:e=>{e.exports='<svg viewBox="0 0 8 4" xmlns="http://www.w3.org/2000/svg"><rect x="1103" y="1123" width="8" height="4" rx="2" transform="translate(-1103 -1123)" fill="#000" fill-rule="nonzero"></rect></svg>'},93966:e=>{e.exports='<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M1 0v12l10-6L1 0zm1.05 1.916L8.857 6 2.05 10.083V1.916z" fill="#000" fill-rule="nonzero"></path></svg>'},43611:e=>{e.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#000" fill-rule="nonzero" d="M8 .5l2.373 5.07L16 6.23l-4.16 3.792 1.104 5.478L8 12.773 3.056 15.5l1.102-5.478L0 6.229l5.625-.66z"></path><path d="M0 0h16v16H0z"></path></g></svg>'},38275:e=>{e.exports='<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M6.828.535l4.966 11.01A.323.323 0 0111.5 12a.776.776 0 01-.707-.455L9.182 8H2.818l-1.611 3.545A.776.776 0 01.5 12a.323.323 0 01-.294-.456L5.172.535a.909.909 0 011.656 0zM6 1L3.272 7h5.456L6 1z" fill="#000" fill-rule="nonzero"></path></svg>'},94850:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTIiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCA5MiA3MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDYgNDhMMzEuODkzMiA1NS40MTY0TDM0LjU4NzMgMzkuNzA4MkwyMy4xNzQ2IDI4LjU4MzZMMzguOTQ2NiAyNi4yOTE4TDQ2IDEyTDUzLjA1MzQgMjYuMjkxOEw2OC44MjU0IDI4LjU4MzZMNTcuNDEyNyAzOS43MDgyTDYwLjEwNjggNTUuNDE2NEw0NiA0OFoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8xXzI5OTApIi8+DQo8ZGVmcz4NCjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8xXzI5OTAiIHgxPSI2Ny43MjQ5IiB5MT0iMTcuMzMxMyIgeDI9IjM3Ljc5NTEiIHkyPSIxNy4zMzEzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+DQo8c3RvcCBzdG9wLWNvbG9yPSIjNkE2QTZBIi8+DQo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMyODI4MjgiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8L2RlZnM+DQo8L3N2Zz4NCg=="},57223:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTIiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCA5MiA3MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDYgNDhMMzEuODkzMiA1NS40MTY0TDM0LjU4NzMgMzkuNzA4MkwyMy4xNzQ2IDI4LjU4MzZMMzguOTQ2NiAyNi4yOTE4TDQ2IDEyTDUzLjA1MzQgMjYuMjkxOEw2OC44MjU0IDI4LjU4MzZMNTcuNDEyNyAzOS43MDgyTDYwLjEwNjggNTUuNDE2NEw0NiA0OFoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8xXzMwMTYpIi8+DQo8cmVjdCB4PSI1MyIgeT0iNTQiIHdpZHRoPSI4IiBoZWlnaHQ9IjIiIHRyYW5zZm9ybT0icm90YXRlKDkwIDUzIDU0KSIgZmlsbD0idXJsKCNwYWludDFfbGluZWFyXzFfMzAxNikiLz4NCjxyZWN0IHg9IjQxIiB5PSI1NCIgd2lkdGg9IjgiIGhlaWdodD0iMiIgdHJhbnNmb3JtPSJyb3RhdGUoOTAgNDEgNTQpIiBmaWxsPSJ1cmwoI3BhaW50Ml9saW5lYXJfMV8zMDE2KSIvPg0KPHJlY3QgeD0iNDciIHk9IjUxLjUiIHdpZHRoPSIxMSIgaGVpZ2h0PSIyIiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA0NyA1MS41KSIgZmlsbD0idXJsKCNwYWludDNfbGluZWFyXzFfMzAxNikiLz4NCjxkZWZzPg0KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzFfMzAxNiIgeDE9IjU4LjA3NjMiIHkxPSI1Ni4xODk4IiB4Mj0iNTguMDc2MyIgeTI9IjMyLjAzNzIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4NCjxzdG9wIHN0b3AtY29sb3I9IiM2QTZBNkEiLz4NCjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzI4MjgyOCIvPg0KPC9saW5lYXJHcmFkaWVudD4NCjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhcl8xXzMwMTYiIHgxPSI1MyIgeTE9IjU2IiB4Mj0iNjEiIHkyPSI1NiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPg0KPHN0b3Agc3RvcC1jb2xvcj0iIzZBNkE2QSIvPg0KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNkE2QTZBIiBzdG9wLW9wYWNpdHk9IjAuMDEiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50Ml9saW5lYXJfMV8zMDE2IiB4MT0iNDEiIHkxPSI1NiIgeDI9IjQ5IiB5Mj0iNTYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4NCjxzdG9wIHN0b3AtY29sb3I9IiM2QTZBNkEiLz4NCjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzZBNkE2QSIgc3RvcC1vcGFjaXR5PSIwLjAxIi8+DQo8L2xpbmVhckdyYWRpZW50Pg0KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDNfbGluZWFyXzFfMzAxNiIgeDE9IjQ3IiB5MT0iNTMuNSIgeDI9IjU4IiB5Mj0iNTMuNSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPg0KPHN0b3Agc3RvcC1jb2xvcj0iIzZBNkE2QSIvPg0KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNkE2QTZBIiBzdG9wLW9wYWNpdHk9IjAuMDEiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8L2RlZnM+DQo8L3N2Zz4NCg=="},64037:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTIiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCA5MiA3MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDcgNDhMMzIuODkzMiA1NS40MTY0TDM1LjU4NzMgMzkuNzA4MkwyNC4xNzQ2IDI4LjU4MzZMMzkuOTQ2NiAyNi4yOTE4TDQ3IDEyTDU0LjA1MzQgMjYuMjkxOEw2OS44MjU0IDI4LjU4MzZMNTguNDEyNyAzOS43MDgyTDYxLjEwNjggNTUuNDE2NEw0NyA0OFoiIGZpbGw9IiM2QTZBNkEiLz4NCjxyZWN0IHg9IjIxIiB5PSIxNiIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8xXzMwMDYpIi8+DQo8cmVjdCB4PSIyMSIgeT0iMjIiIHdpZHRoPSIxNyIgaGVpZ2h0PSIyIiBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXJfMV8zMDA2KSIvPg0KPHJlY3QgeD0iMjEiIHk9IjM2IiB3aWR0aD0iOSIgaGVpZ2h0PSIyIiBmaWxsPSJ1cmwoI3BhaW50Ml9saW5lYXJfMV8zMDA2KSIvPg0KPHJlY3QgeD0iMjEiIHk9IjQ4IiB3aWR0aD0iOSIgaGVpZ2h0PSIyIiBmaWxsPSJ1cmwoI3BhaW50M19saW5lYXJfMV8zMDA2KSIvPg0KPHJlY3QgeD0iMjEiIHk9IjQyIiB3aWR0aD0iMTIiIGhlaWdodD0iMiIgZmlsbD0idXJsKCNwYWludDRfbGluZWFyXzFfMzAwNikiLz4NCjxkZWZzPg0KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzFfMzAwNiIgeDE9IjIxIiB5MT0iMTgiIHgyPSI0MSIgeTI9IjE4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+DQo8c3RvcCBzdG9wLWNvbG9yPSIjNkE2QTZBIiBzdG9wLW9wYWNpdHk9IjAuMDEiLz4NCjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzZBNkE2QSIvPg0KPC9saW5lYXJHcmFkaWVudD4NCjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhcl8xXzMwMDYiIHgxPSIyMSIgeTE9IjI0IiB4Mj0iMzgiIHkyPSIyNCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPg0KPHN0b3Agc3RvcC1jb2xvcj0iIzZBNkE2QSIgc3RvcC1vcGFjaXR5PSIwLjAxIi8+DQo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM2QTZBNkEiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50Ml9saW5lYXJfMV8zMDA2IiB4MT0iMjEiIHkxPSIzOCIgeDI9IjMwIiB5Mj0iMzgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4NCjxzdG9wIHN0b3AtY29sb3I9IiM2QTZBNkEiIHN0b3Atb3BhY2l0eT0iMC4wMSIvPg0KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNkE2QTZBIi8+DQo8L2xpbmVhckdyYWRpZW50Pg0KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDNfbGluZWFyXzFfMzAwNiIgeDE9IjIxIiB5MT0iNTAiIHgyPSIzMCIgeTI9IjUwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+DQo8c3RvcCBzdG9wLWNvbG9yPSIjNkE2QTZBIiBzdG9wLW9wYWNpdHk9IjAuMDEiLz4NCjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzZBNkE2QSIvPg0KPC9saW5lYXJHcmFkaWVudD4NCjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQ0X2xpbmVhcl8xXzMwMDYiIHgxPSIyMSIgeTE9IjQ0IiB4Mj0iMzMiIHkyPSI0NCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPg0KPHN0b3Agc3RvcC1jb2xvcj0iIzZBNkE2QSIgc3RvcC1vcGFjaXR5PSIwLjAxIi8+DQo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM2QTZBNkEiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8L2RlZnM+DQo8L3N2Zz4NCg=="},89781:e=>{e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjkycHgiIGhlaWdodD0iNzJweCIgdmlld0JveD0iMCAwIDkyIDcyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT5pY29uX2FuaW1hdGlvbl9pbl9ub25lPC90aXRsZT4NCiAgICA8ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTk0MS4wMDAwMDAsIC0xOTIuMDAwMDAwKSI+DQogICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5MTcuMDAwMDAwLCA1Mi4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNC4wMDAwMDAsIDE0MC4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgPHJlY3QgZmlsbC1ydWxlPSJub256ZXJvIiB4PSIwIiB5PSIwIiB3aWR0aD0iOTIiIGhlaWdodD0iNzIiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0iIzZBNkE2QSIgcG9pbnRzPSI0NiA0OCAzMS44OTMxNTM5IDU1LjQxNjQwNzkgMzQuNTg3MzIxOCAzOS43MDgyMDM5IDIzLjE3NDY0MzYgMjguNTgzNTkyMSAzOC45NDY1NzcgMjYuMjkxNzk2MSA0NiAxMiA1My4wNTM0MjMgMjYuMjkxNzk2MSA2OC44MjUzNTY0IDI4LjU4MzU5MjEgNTcuNDEyNjc4MiAzOS43MDgyMDM5IDYwLjEwNjg0NjEgNTUuNDE2NDA3OSI+PC9wb2x5Z29uPg0KICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg=="},63619:e=>{e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjkycHgiIGhlaWdodD0iNzJweCIgdmlld0JveD0iMCAwIDkyIDcyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT5pY29uX2FuaW1hdGlvbl9pbl9zcGluPC90aXRsZT4NCiAgICA8ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEwNjEuMDAwMDAwLCAtNTUyLjAwMDAwMCkiPg0KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTE3LjAwMDAwMCwgNTIuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTQ0LjAwMDAwMCwgNTAwLjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgICAgICA8cmVjdCBmaWxsLXJ1bGU9Im5vbnplcm8iIHg9IjAiIHk9IjAiIHdpZHRoPSI5MiIgaGVpZ2h0PSI3MiI+PC9yZWN0Pg0KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNDUuNjY2NjY2NywxMyBMNTIuNzIwMDg5NywyNy4yOTE3OTYxIEw2OC40OTIwMjMxLDI5LjU4MzU5MjEgTDU3LjA3OTM0NDksNDAuNzA4MjAzOSBMNTkuNzczNTEyNyw1Ni40MTY0MDc5IEw0NS42NjY2NjY3LDQ5IEwzMS41NTk4MjA2LDU2LjQxNjQwNzkgTDM0LjI1Mzk4ODUsNDAuNzA4MjAzOSBMMjIuODQxMzEwMywyOS41ODM1OTIxIEwzOC42MTMyNDM2LDI3LjI5MTc5NjEgTDQ1LjY2NjY2NjcsMTMgWiBNNzYuNjY2NjY2NywyMy42NjY2NjY3IEw3Ni42NjY2NjY3LDI1IEw3My4wODkzMzMzLDI1IEM3My41MjUzMzMzLDI1LjMzMzMzMzMgNzQuMDg0LDI1Ljc2NjY2NjcgNzQuMzkxMzMzMywyNi4wNDY2NjY3IEM3NS44MjgsMjcuMzU2NjY2NyA3Ni42NjY2NjY3LDI4Ljg0MTMzMzMgNzYuNjY2NjY2NywzMC42NjY2NjY3IEM3Ni42NjY2NjY3LDM0LjkyNjY2NjcgNzMuNzI1MzMzMywzNyA3MCwzNyBMNzAsMzUuNjY2NjY2NyBDNzMuMDY4NjY2NywzNS42NjY2NjY3IDc1LjMzMzMzMzMsMzQuMDcgNzUuMzMzMzMzMywzMC42NjY2NjY3IEM3NS4zMzMzMzMzLDI5LjI3MjY2NjcgNzQuNjc4LDI4LjExMiA3My40OTMzMzMzLDI3LjAzMzMzMzMgQzczLjE4NCwyNi43NTA2NjY3IDcyLjQ3ODY2NjcsMjYuMjEzMzMzMyA3MiwyNS44NDUzMzMzIEw3MiwyOS42NjY2NjY3IEw3MC42NjY2NjY3LDI5LjY2NjY2NjcgTDcwLjY2NjY2NjcsMjMuNjY2NjY2NyBMNzYuNjY2NjY2NywyMy42NjY2NjY3IFogTTE5LDIzLjY2NjY2NjcgTDE5LDI1IEMxNS45MzEzMzMzLDI1IDEzLjY2NjY2NjcsMjYuNTk2NjY2NyAxMy42NjY2NjY3LDMwIEMxMy42NjY2NjY3LDMxLjM5NCAxNC4zMjIsMzIuNTU0NjY2NyAxNS41MDY2NjY3LDMzLjYzMzMzMzMgQzE1LjgxNiwzMy45MTYgMTYuNTIxMzMzMywzNC40NTMzMzMzIDE3LDM0LjgyMTMzMzMgTDE3LDMxIEwxOC4zMzMzMzMzLDMxIEwxOC4zMzMzMzMzLDM3IEwxMi4zMzMzMzMzLDM3IEwxMi4zMzMzMzMzLDM1LjY2NjY2NjcgTDE1LjkxMDY2NjcsMzUuNjY2NjY2NyBDMTUuNDc0NjY2NywzNS4zMzMzMzMzIDE0LjkxNiwzNC45IDE0LjYwODY2NjcsMzQuNjIgQzEzLjE3MiwzMy4zMSAxMi4zMzMzMzMzLDMxLjgyNTMzMzMgMTIuMzMzMzMzMywzMCBDMTIuMzMzMzMzMywyNS43NCAxNS4yNzQ2NjY3LDIzLjY2NjY2NjcgMTksMjMuNjY2NjY2NyBaIE00MC4zMzMzMzMzLDQgTDQwLjMzMzMzMzMsNy41NzczMzMzMyBDNDAuNjY2NjY2Nyw3LjE0MTMzMzMzIDQxLjEsNi41ODI2NjY2NiA0MS4zOCw2LjI3NTMzMzMzIEM0Mi42OSw0LjgzODY2NjY3IDQ0LjE3NDY2NjcsNCA0Niw0IEM1MC4yNiw0IDUyLjMzMzMzMzMsNi45NDEzMzMzMyA1Mi4zMzMzMzMzLDEwLjY2NjY2NjcgTDUxLDEwLjY2NjY2NjcgQzUxLDcuNTk4IDQ5LjQwMzMzMzMsNS4zMzMzMzMzNCA0Niw1LjMzMzMzMzMzIEM0NC42MDYsNS4zMzMzMzMzMyA0My40NDUzMzMzLDUuOTg4NjY2NjYgNDIuMzY2NjY2Nyw3LjE3MzMzMzMzIEM0Mi4wODQsNy40ODI2NjY2NiA0MS41NDY2NjY3LDguMTg4IDQxLjE3ODY2NjcsOC42NjY2NjY2NyBMNDUsOC42NjY2NjY2NyBMNDUsMTAgTDM5LDEwIEwzOSw0IEw0MC4zMzMzMzMzLDQgWiIgZmlsbD0iIzZBNkE2QSI+PC9wYXRoPg0KICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg=="},19502:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTIiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCA5MiA3MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDYgNDhMMzEuODkzMiA1NS40MTY0TDM0LjU4NzMgMzkuNzA4MkwyMy4xNzQ2IDI4LjU4MzZMMzguOTQ2NiAyNi4yOTE4TDQ2IDEyTDUzLjA1MzQgMjYuMjkxOEw2OC44MjU0IDI4LjU4MzZMNTcuNDEyNyAzOS43MDgyTDYwLjEwNjggNTUuNDE2NEw0NiA0OFoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8xXzMwMjMpIi8+DQo8ZGVmcz4NCjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8xXzMwMjMiIHgxPSI1OC4wNzYzIiB5MT0iNTYuMTg5OCIgeDI9IjU4LjA3NjMiIHkyPSIzMi4wMzcyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+DQo8c3RvcCBzdG9wLWNvbG9yPSIjNkE2QTZBIi8+DQo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMyODI4MjgiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8L2RlZnM+DQo8L3N2Zz4NCg=="},63291:e=>{e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjkycHgiIGhlaWdodD0iNzJweCIgdmlld0JveD0iMCAwIDkyIDcyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT5pY29uX2FuaW1hdGlvbl9pbl96b29tPC90aXRsZT4NCiAgICA8ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTk0MS4wMDAwMDAsIC00MzIuMDAwMDAwKSI+DQogICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5MTcuMDAwMDAwLCA1Mi4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNC4wMDAwMDAsIDM4MC4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgPHJlY3QgZmlsbC1ydWxlPSJub256ZXJvIiB4PSIwIiB5PSIwIiB3aWR0aD0iOTIiIGhlaWdodD0iNzIiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTkuMDAwMDAwLCAxMS4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9IiMzNjM2MzYiIHBvaW50cz0iMjYgMzYgMTEuODkzMTUzOSA0My40MTY0MDc5IDE0LjU4NzMyMTggMjcuNzA4MjAzOSAzLjE3NDY0MzYxIDE2LjU4MzU5MjEgMTguOTQ2NTc3IDE0LjI5MTc5NjEgMjYgMCAzMy4wNTM0MjMgMTQuMjkxNzk2MSA0OC44MjUzNTY0IDE2LjU4MzU5MjEgMzcuNDEyNjc4MiAyNy43MDgyMDM5IDQwLjEwNjg0NjEgNDMuNDE2NDA3OSI+PC9wb2x5Z29uPg0KICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0iIzZBNkE2QSIgcG9pbnRzPSIyNiAzMCAxOC45NDY1NzcgMzMuNzA4MjAzOSAyMC4yOTM2NjA5IDI1Ljg1NDEwMiAxNC41ODczMjE4IDIwLjI5MTc5NjEgMjIuNDczMjg4NSAxOS4xNDU4OTggMjYgMTIgMjkuNTI2NzExNSAxOS4xNDU4OTggMzcuNDEyNjc4MiAyMC4yOTE3OTYxIDMxLjcwNjMzOTEgMjUuODU0MTAyIDMzLjA1MzQyMyAzMy43MDgyMDM5Ij48L3BvbHlnb24+DQogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjYuMDk4OTk5NSw0MSBDMjYuMzg5MjQ2Niw0MS4wMDI2ODc3IDI2LjYzNDczNzQsNDEuMjM4NDYxNCAyNi42NDczMTgzLDQxLjUyNjY1NjMgTDI2LjY0OTIyMjIsNDguOTMwMzk5OCBMMzAuMDU3MDE1LDQ1LjQyNTg3NTEgQzMwLjI1MzM1NDgsNDUuMjIzOTYyIDMwLjU4NjEwOCw0NS4yMjY5OTY0IDMwLjgwMDIzOTksNDUuNDMyNjUyNSBDMzEuMDE0MzcxOCw0NS42MzgzMDg1IDMxLjAyODc5NTIsNDUuOTY4NzA4NiAzMC44MzI0NTUzLDQ2LjE3MDYyMTcgTDI2LjIxMDg5MzMsNTAuOTIzMzY5MSBMMjEuMTcwNTMxMiw0Ni4wODI1MTYyIEMyMC45NTYzOTkyLDQ1Ljg3Njg2MDIgMjAuOTQxOTc1OSw0NS41NDY0NjAxIDIxLjEzODMxNTgsNDUuMzQ0NTQ3IEMyMS4zMzQ2NTU2LDQ1LjE0MjYzMzkgMjEuNjY3NDA4OCw0NS4xNDU2NjgyIDIxLjg4MTU0MDcsNDUuMzUxMzI0MyBMMjUuNTk4MTQzNCw0OC45MjA4MTUyIEwyNS41OTYyMzk1LDQxLjUxNzA3MTcgQzI1LjU4MzY1ODYsNDEuMjI4ODc2OCAyNS44MDg3NTE4LDQwLjk5NzM5NDIgMjYuMDk4OTk5NSw0MSBaIE00OS4yMjkxODExLDI3LjIwMzgyIEM0OS40ODgwNDUxLDI3LjA5Mjg4MDEgNDkuNzkxMzMxMywyNy4yMjQ3NTAzIDQ5LjkwNjU4OTcsMjcuNDk4MzYwMiBMNDkuOTA2NTg5NywyNy40OTgzNjAyIEw1Mi42MTk2MTEsMzMuOTM4NzUwMSBMNDYuNTI2MzE5MywzNi41NTAxMTc2IEM0Ni4yNjc0NTUzLDM2LjY2MTA1NzUgNDUuOTY0MTY5MSwzNi41MjkxODc0IDQ1Ljg0ODkxMDYsMzYuMjU1NTc3NSBDNDUuNzMzNjUyMiwzNS45ODE5Njc1IDQ1Ljg1MDA2NzQsMzUuNjcwMjI4MyA0Ni4xMDg5MzE1LDM1LjU1OTI4ODQgTDQ2LjEwODkzMTUsMzUuNTU5Mjg4NCBMNTAuNjAxOTMwOSwzMy42MzM3NDkxIEw0My42OTA2MjMxLDMwLjk3ODcwNzMgQzQzLjQyNjA3ODYsMzAuODYzNjgyMiA0My4yOTM5NDA5LDMwLjU1MDAwMyA0My4zOTU0ODUzLDMwLjI3ODA4NTIgQzQzLjQ5NzAyOTcsMzAuMDA2MTY3NSA0My43OTM4MDM1LDI5Ljg3ODk4MDggNDQuMDU4MzQ4LDI5Ljk5NDAwNTkgTDQ0LjA1ODM0OCwyOS45OTQwMDU5IEw1MC45Njk2NTU4LDMyLjY0OTA0NzcgTDQ4Ljk2OTE2MDMsMjcuOTAwMTA5MSBDNDguODUzOTAxOCwyNy42MjY0OTkxIDQ4Ljk3MDMxNzEsMjcuMzE0NzU5OSA0OS4yMjkxODExLDI3LjIwMzgyIFogTTMuMzkwNDI5OSwyNy4yMDM4MiBDMy42NDkyOTM5MSwyNy4zMTQ3NTk5IDMuNzY1NzA5MTgsMjcuNjI2NDk5MSAzLjY1MDQ1MDcsMjcuOTAwMTA5MSBMMS42NDk5NTUxNiwzMi42NDkwNDc3IEw4LjU2MTI2MjkyLDI5Ljk5NDAwNTkgQzguODI1ODA3NDYsMjkuODc4OTgwOCA5LjEyMjU4MTIyLDMwLjAwNjE2NzUgOS4yMjQxMjU2NiwzMC4yNzgwODUyIEM5LjMyNTY3MDEsMzAuNTUwMDAzIDkuMTkzNTMyNDEsMzAuODYzNjgyMiA4LjkyODk4Nzg2LDMwLjk3ODcwNzMgTDIuMDE3NjgwMTEsMzMuNjMzNzQ5MSBMNi41MTA2Nzk1MSwzNS41NTkyODg0IEM2Ljc2OTU0MzUyLDM1LjY3MDIyODMgNi44ODU5NTg3OSwzNS45ODE5Njc1IDYuNzcwNzAwMzEsMzYuMjU1NTc3NSBDNi42NTU0NDE4MywzNi41MjkxODc0IDYuMzUyMTU1NjQsMzYuNjYxMDU3NSA2LjA5MzI5MTYzLDM2LjU1MDExNzYgTC02LjMxMDg4NzI0ZS0zMCwzMy45Mzg3NTAxIEwyLjcxMzAyMTIyLDI3LjQ5ODM2MDIgQzIuODI4Mjc5NywyNy4yMjQ3NTAzIDMuMTMxNTY1OSwyNy4wOTI4ODAxIDMuMzkwNDI5OSwyNy4yMDM4MiBaIE00My4wMDI2NzIxLDEgTDQzLjk5NDIwNTEsNy45MTc4MDA4NyBDNDQuMDM2MzI4OCw4LjIxMTY5Mjg2IDQzLjg0NDI3OTksOC40ODA5MzE1NiA0My41NjUyNTE5LDguNTE5MTYyMzQgQzQzLjI4NjIyMzksOC41NTczOTMxMiA0My4wMjU4NzksOC4zNTAxMzg3NiA0Mi45ODM3NTUyLDguMDU2MjQ2NzYgTDQyLjI1MjYzMDQsMi45NTUyODA0OCBMMzcuNjk1OTMxLDguNzkwNjgyMTIgQzM3LjUyODQxNDMsOS4wMjU1MjgzOCAzNy4yMDg1MjM2LDkuMDY5MzU3OTMgMzYuOTgxNDM1LDguODg4NTc4MTUgQzM2Ljc1NDM0NjQsOC43MDc3OTgzNyAzNi43MDYwNTM4LDguMzcwODY2ODkgMzYuODczNTcwNSw4LjEzNjAyMDYzIEw0MS40MzAyNjk5LDIuMzAwNjE4OTkgTDM2LjU4NzI5MTYsMi45NjQxNzU0IEMzNi4zMDgyNjM2LDMuMDAyNDA2MTggMzYuMDQ3OTE4NywyLjc5NTE1MTgyIDM2LjAwNTc5NDksMi41MDEyNTk4MiBDMzUuOTYzNjcxMiwyLjIwNzM2NzgzIDM2LjE1NTcyMDEsMS45MzgxMjkxMiAzNi40MzQ3NDgxLDEuODk5ODk4MzUgTDQzLjAwMjY3MjEsMSBaIE04Ljk5NzMyNzg3LDEgTDE1LjU2NTI1MTksMS44OTk4OTgzNSBDMTUuODQ0Mjc5OSwxLjkzODEyOTEyIDE2LjAzNjMyODgsMi4yMDczNjc4MyAxNS45OTQyMDUxLDIuNTAxMjU5ODIgQzE1Ljk1MjA4MTMsMi43OTUxNTE4MiAxNS42OTE3MzY0LDMuMDAyNDA2MTggMTUuNDEyNzA4NCwyLjk2NDE3NTQgTDE1LjQxMjcwODQsMi45NjQxNzU0IEwxMC41Njk3MzAxLDIuMzAwNjE4OTkgTDE1LjEyNjQyOTUsOC4xMzYwMjA2MyBDMTUuMjkzOTQ2Miw4LjM3MDg2Njg5IDE1LjI0NTY1MzYsOC43MDc3OTgzNyAxNS4wMTg1NjUsOC44ODg1NzgxNSBDMTQuNzkxNDc2NCw5LjA2OTM1NzkzIDE0LjQ3MTU4NTcsOS4wMjU1MjgzOCAxNC4zMDQwNjksOC43OTA2ODIxMiBMMTQuMzA0MDY5LDguNzkwNjgyMTIgTDkuNzQ3MzY5NjMsMi45NTUyODA0OCBMOS4wMTYyNDQ3OCw4LjA1NjI0Njc2IEM4Ljk3NDEyMTA1LDguMzUwMTM4NzYgOC43MTM3NzYxMSw4LjU1NzM5MzEyIDguNDM0NzQ4MDksOC41MTkxNjIzNCBDOC4xNTU3MjAwNyw4LjQ4MDkzMTU2IDcuOTYzNjcxMTksOC4yMTE2OTI4NiA4LjAwNTc5NDkzLDcuOTE3ODAwODcgTDguMDA1Nzk0OTMsNy45MTc4MDA4NyBMOC45OTczMjc4NywxIFoiIGZpbGw9IiM2QTZBNkEiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPg0KICAgICAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgPC9nPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+"},95514:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTIiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCA5MiA3MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxyZWN0IHg9IjgiIHdpZHRoPSI3NiIgaGVpZ2h0PSI0MCIgZmlsbD0iIzM2MzYzNiIgZmlsbC1vcGFjaXR5PSIwLjUiLz4NCjxyZWN0IHk9IjI0IiB3aWR0aD0iOTIiIGhlaWdodD0iNDgiIGZpbGw9IiM1MjUyNTIiLz4NCjwvc3ZnPg0K"},75046:e=>{e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjkycHgiIGhlaWdodD0iNzJweCIgdmlld0JveD0iMCAwIDkyIDcyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT5pY29uX2FuaW1hdGlvbl90cmFuc2l0aW9uX2N1YmU8L3RpdGxlPg0KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTA2MS4wMDAwMDAsIC0yNzAuMDAwMDAwKSI+DQogICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5MTcuMDAwMDAwLCA1Mi4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNDQuMDAwMDAwLCAyMTguMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgICAgIDxyZWN0IGZpbGwtcnVsZT0ibm9uemVybyIgeD0iMCIgeT0iMCIgd2lkdGg9IjkyIiBoZWlnaHQ9IjcyIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9IiM2QTZBNkEiIHBvaW50cz0iMTIgMTguNCA1MSAxMiA1MSA2MCAxMiA1My42Ij48L3BvbHlnb24+DQogICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9IiMzNjM2MzYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDY1LjUwMDAwMCwgMzYuMDAwMDAwKSBzY2FsZSgtMSwgMSkgdHJhbnNsYXRlKC02NS41MDAwMDAsIC0zNi4wMDAwMDApICIgcG9pbnRzPSI1MSAxOC40IDgwIDEyIDgwIDYwIDUxIDUzLjYiPjwvcG9seWdvbj4NCiAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4="},58228:e=>{e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjkycHgiIGhlaWdodD0iNzJweCIgdmlld0JveD0iMCAwIDkyIDcyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT5pY29uX2FuaW1hdGlvbl90cmFuc2l0aW9uX2Rvb3J3YXk8L3RpdGxlPg0KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTQxLjAwMDAwMCwgLTYzMC4wMDAwMDApIiBmaWxsLXJ1bGU9Im5vbnplcm8iPg0KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTE3LjAwMDAwMCwgNTIuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQuMDAwMDAwLCA1NzguMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9IiMzNjM2MzYiIHBvaW50cz0iMCAtMS4xNDAxOTkwNWUtMTMgMjQgMTIgMjQgNjAgMCA3MiI+PC9wb2x5Z29uPg0KICAgICAgICAgICAgICAgICAgICA8cmVjdCBmaWxsPSIjNkE2QTZBIiB4PSIyNiIgeT0iMjAiIHdpZHRoPSI0MCIgaGVpZ2h0PSIzMiI+PC9yZWN0Pg0KICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBmaWxsPSIjMzYzNjM2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4MC4wMDAwMDAsIDM2LjAwMDAwMCkgc2NhbGUoLTEsIDEpIHRyYW5zbGF0ZSgtODAuMDAwMDAwLCAtMzYuMDAwMDAwKSAiIHBvaW50cz0iNjggLTEuMTQwMTk5MDVlLTEzIDkyIDExIDkyIDYwIDY4IDcyIj48L3BvbHlnb24+DQogICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgPC9nPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+"},83167:e=>{e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjkycHgiIGhlaWdodD0iNzJweCIgdmlld0JveD0iMCAwIDkyIDcyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT5pY29uX2FuaW1hdGlvbl90cmFuc2l0aW9uX2ZhZGU8L3RpdGxlPg0KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTA2MS4wMDAwMDAsIC0xNTAuMDAwMDAwKSI+DQogICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5MTcuMDAwMDAwLCA1Mi4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNDQuMDAwMDAwLCA5OC4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgPHJlY3Qgb3BhY2l0eT0iMC4xMDAwMDAwMDEiIGZpbGwtcnVsZT0ibm9uemVybyIgeD0iMCIgeT0iMCIgd2lkdGg9IjkyIiBoZWlnaHQ9IjcyIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgIDxyZWN0IGZpbGw9IiM1MjUyNTIiIHg9IjI4IiB5PSIyNCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjQ4Ij48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgIDxyZWN0IGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsPSIjMzYzNjM2IiB4PSIwIiB5PSIwIiB3aWR0aD0iNjQiIGhlaWdodD0iNDgiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTY0LDAgTDY0LDQ4IEwwLDQ4IEwwLDAgTDY0LDAgWiBNNjMsMSBMMSwxIEwxLDQ3IEw2Myw0NyBMNjMsMSBaIiBmaWxsPSIjNkE2QTZBIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4NCiAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4="},109:e=>{e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjkycHgiIGhlaWdodD0iNzJweCIgdmlld0JveD0iMCAwIDkyIDcyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT5pY29uX2FuaW1hdGlvbl90cmFuc2l0aW9uX25vbmU8L3RpdGxlPg0KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTQxLjAwMDAwMCwgLTE1MC4wMDAwMDApIiBmaWxsLXJ1bGU9Im5vbnplcm8iPg0KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTE3LjAwMDAwMCwgNTIuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQuMDAwMDAwLCA5OC4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjkyIiBoZWlnaHQ9IjcyIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgIDxyZWN0IGZpbGw9IiM2QTZBNkEiIHg9IjAiIHk9IjAiIHdpZHRoPSI5MiIgaGVpZ2h0PSI3MiI+PC9yZWN0Pg0KICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg=="},38830:e=>{e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjkycHgiIGhlaWdodD0iNzJweCIgdmlld0JveD0iMCAwIDkyIDcyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT5pY29uX2FuaW1hdGlvbl90cmFuc2l0aW9uX3B1c2g8L3RpdGxlPg0KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTQxLjAwMDAwMCwgLTI3MC4wMDAwMDApIiBmaWxsLXJ1bGU9Im5vbnplcm8iPg0KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTE3LjAwMDAwMCwgNTIuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQuMDAwMDAwLCAyMTguMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5MiIgaGVpZ2h0PSI3MiI+PC9yZWN0Pg0KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOTIsMCBMOTIsNzIgTDAsNzIgTDAsMCBMOTIsMCBaIE05MSwzNyBMMSwzNyBMMSw3MSBMOTEsNzEgTDkxLDM3IFogTTQ2LDQ0IEw1Niw1NCBMNTAuMTY2NjY2Nyw1NCBMNTAuMTY2NjY2Nyw2NCBMNDEuODMzMzMzMyw2NCBMNDEuODMzMzMzMyw1NCBMMzYsNTQgTDQ2LDQ0IFoiIGZpbGw9IiM2QTZBNkEiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4="},48891:e=>{"use strict";e.exports=i},74758:e=>{"use strict";e.exports=n},34796:e=>{"use strict";e.exports=s},30726:e=>{"use strict";e.exports=a},20663:e=>{"use strict";e.exports=o},77756:e=>{"use strict";e.exports=l},41362:e=>{"use strict";e.exports=r}},t={};function c(i){var n=t[i];if(void 0!==n)return n.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,c),s.exports}c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},c.d=(e,t)=>{for(var i in t)c.o(t,i)&&!c.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var g={};return(()=>{"use strict";c.r(g),c.d(g,{AnimationSettingComponent:()=>Ot,BackgroundSetting:()=>$e,BorderRadiusSetting:()=>ue,BorderSetting:()=>E,BoxShadowSetting:()=>B,ButtonStyleSetting:()=>et,FontFamilySelector:()=>X,FontFamilyValue:()=>J,FontStyle:()=>ve,FourEdges:()=>Ie,FourSides:()=>H,InputRatio:()=>_,InputUnit:()=>T,LineStyleSelector:()=>z,LineStyleTranstions:()=>A,NavIconPicker:()=>gt,NavStyleSettingByState:()=>nt,Padding:()=>Wt,SizeColorSetting:()=>qe,SizeEditor:()=>Fe,TextAlignment:()=>We,TextStyle:()=>Te,TransitionSetting:()=>Qt,UnitSelector:()=>N,_BackgroundSetting:()=>Ke,_BorderSetting:()=>P,_BoxShadowSetting:()=>Z,_FourSides:()=>V,_InputRatio:()=>$,_InputUnit:()=>f,_SizeEditor:()=>Je,fontValue:()=>F});var e={};c.r(e),c.d(e,{BackgroundSetting:()=>i,BorderSetting:()=>n,BoxShadowSetting:()=>s,FourSides:()=>a,InputUnit:()=>o,MarkableItem:()=>l,SingleColorSelector:()=>r});var t=c(48891);const i=()=>t.css`
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
  `},o=e=>{const{reverse:i}=e,n=i?t.css`
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
   `:t.css`
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  `;return t.css`
    flex-direction: ${i?"row-reverse":"row"};
    width: ${t.polished.rem(60)};

    .jimu-numeric-input {
      flex: 1;

      z-index: 0;
      &:focus-within {
        z-index: 1;
      }
      padding: 0px;
    }

    >.style-setting--unit-selector {
      min-width: ${t.polished.rem(29)};
      margin-left: -1px;
      z-index: 0;
      ${n};
    }
  `},l=e=>{const{theme:i}=e,n=i&&i.colors?i.colors.black:"black",s=i&&i.colors?i.colors.primary:"primary";return t.css`
    padding-right: ${t.polished.rem(8)};
    display: flex;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;
    color: ${n};
    font-size: ${t.polished.rem(13)};

    &:hover {
      background: ${s};
    }
    
    > div {
      padding: 0 ${t.polished.rem(8)};
      visibility: hidden;
    }

    &.marked {
      > div {
        visibility: unset;
      }
    }
  `},r=e=>{const{theme:i}=e,n=i?i.colors.palette.light[500]:"",s=i?i.colors.palette.primary[700]:"";return t.css`
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
  `};var d=c(34796),p=c(30726),I=c(18371),u=c.n(I);const M=e=>{const{className:i}=e,n=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]])}return i}(e,["className"]),s=(0,t.classNames)("jimu-icon-component",i);return t.React.createElement(p.Icon,Object.assign({className:s,icon:u()},n))},m=[p.UnitTypes.PIXEL],N=e=>{const{className:i,disabled:n,unit:s=p.UnitTypes.PIXEL,units:a=m,onChange:o}=e,l=p.hooks.useTranslate(),r=n||a.length<=1;return(0,t.jsx)(p.Dropdown,{direction:"down",size:"sm",disabled:r,title:r?"":l("changeUnit"),className:(0,t.classNames)(i,"style-setting--unit-selector","jimu-outline-inside")},(0,t.jsx)(p.DropdownButton,{arrow:!1,size:"sm","aria-label":l("unit")},s),(0,t.jsx)(p.DropdownMenu,{css:t.css`min-width: 5rem;`,alignment:"end"},a.map((e=>(0,t.jsx)(p.DropdownItem,{"aria-pressed":s===e,"aria-label":e,key:e,onClick:()=>{var t;(t=e)!==s&&(null==o||o(t))}},(0,t.jsx)("div",{className:"d-flex alitn-items-center justify-content-end w-100"},s===e&&(0,t.jsx)(M,{className:"mr-2"}),e))))))};const h=c(58383),y=c(95859),j=c(29556),w=c(74440),x=c(98507),b={dashed:w,dotted:j,double:y,solid:h,esriSLSDash:w,esriSLSDot:j,esriSLSSolid:h,esriSLSDashDot:c(42211),esriSLSDashDotDot:x},A={dashed:"dashed",dotted:"dotted",double:"double",solid:"solid",esriSLSDash:"dashed",esriSLSDot:"dotted",esriSLSSolid:"solid",esriSLSDashDot:"dashDot",esriSLSDashDotDot:"dashDoubleDot"},z=e=>{var i;const n=p.hooks.useTranslate(),{type:s="normal",value:a="solid",className:o,style:l,onChange:r}=e,c=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]])}return i}(e,["type","value","className","style","onChange"]),g=t.React.useMemo((()=>("normal"===s?Object.values(p.NormalLineType):Object.values(p.EsriSimpleLineSymbolStyle)).map((e=>({label:n(A[e]),value:e})))),[n,s]),d=null===(i=g.find((e=>e.value===a)))||void 0===i?void 0:i.label;return t.React.createElement("div",{className:(0,t.classNames)(o,"style-setting--line-style-selector"),style:l},t.React.createElement(p.Select,{size:"sm",name:"lineType",value:a,title:d,onChange:e=>{const t=e.currentTarget.value;null==r||r(t)},"a11y-label":c["aria-label"]},g.map(((e,i)=>t.React.createElement(p.Option,{className:"py-0",key:i,title:e.label,value:e.value,label:e.label},t.React.createElement("span",{style:{width:46}},t.React.createElement(p.Icon,{className:"w-100",icon:b[e.value]})))))))};const D={distance:0,unit:p.UnitTypes.PIXEL},C=[p.UnitTypes.PIXEL],v=e=>{if(e&&"object"==typeof e)return e;const i=t.polished.getValueAndUnit(e);return{distance:null==i?void 0:i[0],unit:(null==i?void 0:i[1])||p.UnitTypes.PIXEL}},f=e=>{const{min:i,max:n,className:s,disabled:a=!1,units:o=C,value:l=D,onChange:r,"aria-label":c}=e,g=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]])}return i}(e,["min","max","className","disabled","units","value","onChange","aria-label"]),d=v(l),I=null!==d?`${c?`${c}, `:""}${d.unit}`:c;return t.React.createElement(p.InputGroup,Object.assign({className:(0,t.classNames)(s,"style-setting--input-unit")},g),t.React.createElement(p.NumericInput,{"aria-label":I,size:"sm",min:i,max:n,value:isNaN(d.distance)?"":d.distance,disabled:a,showHandlers:!1,onAcceptValue:(i,n)=>{const{value:s}=e;let a=v(s);a=t.lodash.assign({},a,{distance:i}),e.onChange(a,n)}}),t.React.createElement(N,{disabled:a,units:o,unit:d.unit,onChange:i=>{let{value:n}=e;n=v(n),e.onChange(t.lodash.assign({},n,{unit:i}))}}))},T=(0,d.withStyles)(f,"InputUnit");var S=c(41362);const O=[p.UnitTypes.PIXEL],L={type:p.NormalLineType.DASHED,color:void 0,width:"0px"},P=e=>{const{value:i=L,onChange:n,className:s,style:a}=e,{type:o,color:l,width:r}=i,c=(0,d.useTheme2)(),g=p.hooks.useTranslate(),I=(e,s)=>{const a={};a[e]=s,null==n||n(t.lodash.assign({},i,a))};return t.React.createElement("div",{className:(0,t.classNames)("style-setting--border-setting",s),style:a},t.React.createElement(S.ThemeColorPicker,{"aria-label":g("color"),specificTheme:c,className:"item",onChange:e=>{I("color",e)},value:l}),t.React.createElement(z,{"aria-label":g("lineStyle"),className:"item",value:o,onChange:e=>{I("type",e)}}),t.React.createElement(T,{"aria-label":g("width"),units:O,className:"item",value:r,onChange:e=>{I("width",p.utils.stringOfLinearUnit(e))}}))},E=(0,d.withStyles)(P,"BorderSetting");var k=c(77756);class Z extends t.React.PureComponent{constructor(){super(...arguments),this.translate=e=>this.props.intl?this.props.intl.formatMessage({id:e,defaultMessage:p.defaultMessages[e]}):e,this.getShadows=()=>[{name:"offsetX",label:this.translate("offsetX"),min:-200,max:200},{name:"offsetY",label:this.translate("offsetY"),min:-200,max:200},{name:"blur",label:this.translate("blurRadius"),min:0,max:300},{name:"spread",label:this.translate("spreadRadius"),min:-200,max:200}]}_updateShadow(e,i){const{value:n}=this.props;this.props.onChange(t.lodash.assign({},n,{[e]:i}))}render(){const{value:e,className:i,theme2:n}=this.props;return(0,t.jsx)("div",{className:(0,t.classNames)("style-setting--box-shadow-setting",i),role:"group","aria-label":this.translate("boxShadow")},this.getShadows().map(((i,n)=>(0,t.jsx)(k.SettingRow,{key:n,label:i.label},(0,t.jsx)(T,{"aria-label":i.label,className:"box-input",min:i.min,max:i.max,value:e[i.name],onChange:e=>this._updateShadow(i.name,p.utils.stringOfLinearUnit(e))})))),(0,t.jsx)(k.SettingRow,{label:this.translate("color")},(0,t.jsx)(S.ThemeColorPicker,{className:"box-color",specificTheme:n,value:e.color,onChange:e=>this._updateShadow("color",e)})))}}Z.defaultProps={value:{offsetX:"0px",offsetY:"0px",blur:"0px",spread:"0px",color:void 0},onChange:()=>{}};const B=(0,d.withStyles)((0,d.withTheme)((0,t.injectIntl)(Z),!0),"BoxShadowSetting");var Y=c(30840),R=c.n(Y);const G=e=>{const{className:i}=e,n=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]])}return i}(e,["className"]),s=(0,t.classNames)("jimu-icon-component",i);return t.React.createElement(p.Icon,Object.assign({className:s,icon:R()},n))};var Q=c(57322),W=c.n(Q);const U=e=>{const{className:i}=e,n=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]])}return i}(e,["className"]),s=(0,t.classNames)("jimu-icon-component",i);return t.React.createElement(p.Icon,Object.assign({className:s,icon:W()},n))};class V extends t.React.PureComponent{constructor(e){super(e),this._onSideValueChange=(e,t)=>{const{bindAll:i}=this.state;if(i)this._onAllSidesValueChange(e);else{const{value:i}=this.props,n=p.styleUtils.expandStyleArray(i.number);n[t]=e,this.props.onChange({number:n,unit:i.unit})}},this._onUnitChange=e=>{const{value:t}=this.props;if(e!==t.unit){const i=p.styleUtils.expandStyleArray(t.number);this.props.onChange({number:i,unit:e})}},this._onAllSidesValueChange=e=>{this.props.onChange({number:[e],unit:this.props.value.unit})},this._toggleBindAll=()=>{const{disabled:e}=this.props;if(!e){if(!this.state.bindAll){const{value:e}=this.props,t=p.styleUtils.expandStyleArray(e.number);this._onAllSidesValueChange(t[0])}this.setState({bindAll:!this.state.bindAll})}},this.nls=e=>this.props.intl?this.props.intl.formatMessage({id:e,defaultMessage:p.defaultMessages[e]}):e,this.handleAcceptValue=(e,t)=>{this._onSideValueChange(e,t)},this.state={bindAll:!1}}render(){const{value:e,units:i,showTip:n,sides:s,min:a,max:o,disabled:l,className:r}=this.props,{bindAll:c}=this.state,g=p.styleUtils.expandStyleArray(e.number);return(0,t.jsx)("div",{className:(0,t.classNames)("style-setting--four-sides",r)},(0,t.jsx)("div",{className:"content"},(0,t.jsx)(p.InputGroup,null,s.map(((e,i)=>{const s=this.nls(e);return(0,t.jsx)(p.NumericInput,{size:"sm",key:i,placeholder:n?e:"",title:s,"aria-label":s,min:a,max:o,disabled:l,value:g[i],onAcceptValue:e=>this.handleAcceptValue(e,i),showHandlers:!1})})),(0,t.jsx)(p.InputGroupAddon,{addonType:"append"},(0,t.jsx)(N,{units:i,unit:e.unit,onChange:this._onUnitChange}))),(0,t.jsx)(p.Button,{icon:!0,type:"tertiary",className:"lock-btn",onClick:this._toggleBindAll,title:c?this.nls("lock"):this.nls("unlock"),"aria-label":c?this.nls("lock"):this.nls("unlock")},c?(0,t.jsx)(G,{className:(0,t.classNames)({disabled:l})}):(0,t.jsx)(U,{className:(0,t.classNames)({disabled:l})}))),n&&(0,t.jsx)("div",{className:"tips"},(0,t.jsx)("div",{className:"tip-group"},s.map(((e,i)=>(0,t.jsx)("div",{key:i,title:this.nls(e)},e)))),(0,t.jsx)("div",null)))}}V.defaultProps={units:[p.UnitTypes.PIXEL,p.UnitTypes.PERCENTAGE],showTip:!0,value:{number:[0],unit:p.UnitTypes.PIXEL},disabled:!1,min:0,max:100,sides:[p.Sides.T,p.Sides.R,p.Sides.B,p.Sides.L],onChange:()=>{}};const H=(0,d.withStyles)((0,t.injectIntl)(V),"FourSides");var J;!function(e){e.AVENIRNEXT="Avenir Next",e.CALIBRI="Calibri",e.PMINGLIU="PmingLiu",e.IMPACT="Impact",e.GEORGIA="Georgia",e.ARIAL="Arial",e.TIMESNEWROMAN="Times New Roman",e.SIMHEI="SimHei",e.MICROSOFTYAHEI="Microsoft YaHei"}(J||(J={}));const F=[J.AVENIRNEXT,J.CALIBRI,J.PMINGLIU,J.IMPACT,J.GEORGIA,J.ARIAL,J.TIMESNEWROMAN,J.SIMHEI,J.MICROSOFTYAHEI],X=({font:e=J.AVENIRNEXT,onChange:i=(()=>{}),style:n,className:s})=>t.React.createElement(p.Select,{title:e,className:(0,t.classNames)(s,"style-setting--font-family"),style:n,value:e,onChange:e=>{i(e.target.value)}},F.map(((e,i)=>t.React.createElement("option",{key:i,value:e,label:e},e)))),K=t.css`
  font-size: 10px;
  color: var(--dark-600);
  text-align: center;
`;class $ extends t.React.PureComponent{constructor(){super(...arguments),this.width=100,this.height=100,this.onWidthChange=e=>{this.props.onChange(`${e}:${this.height}`)},this.onHeightChange=e=>{this.props.onChange(`${this.width}:${e}`)}}parseAspectRatio(e){if("number"==typeof e)this.width=100,this.height=Math.round(100*e);else if("string"==typeof e){const t=e.split(":");this.width=parseInt(t[0],10),this.height=parseInt(t[1],10)}}formatMessage(e){return this.props.intl.formatMessage({id:e,defaultMessage:p.defaultMessages[e]})}render(){const{style:e,disabled:i,value:n}=this.props;return this.parseAspectRatio(n),(0,t.jsx)(p.InputGroup,{className:(0,t.classNames)("style-setting--input-ratio"),style:e},(0,t.jsx)("div",{className:"d-flex flex-column justify-content-start align-items-center",style:{width:"45%"}},(0,t.jsx)(p.NumericInput,{size:"sm",min:1,max:100,value:isNaN(this.width)?"":this.width,showHandlers:!1,onChange:this.onWidthChange,disabled:i}),(0,t.jsx)("div",{className:"px-1 mt-1 w-100",css:K,title:this.formatMessage("width")},"W")),(0,t.jsx)("div",{className:"h-100 text-center",style:{width:"10%"}},":"),(0,t.jsx)("div",{className:"d-flex flex-column justify-content-start align-items-center",style:{width:"45%"}},(0,t.jsx)(p.NumericInput,{size:"sm",min:1,value:isNaN(this.height)?"":this.height,showHandlers:!1,onChange:this.onHeightChange,disabled:i}),(0,t.jsx)("div",{className:"px-1 mt-1 w-100",css:K,title:this.formatMessage("height")},"H")))}}$.defaultProps={value:1,disabled:!1,onChange:()=>{}};const _=(0,d.withStyles)((0,t.injectIntl)($),"InputRatio"),q=t.css`
  .jimu-numeric-input-input{
    z-index: auto;
    &:focus {
      z-index: 1;
    }
  }
`,ee=[p.Sides.T,p.Sides.R,p.Sides.B,p.Sides.L],te=[p.BorderSides.TL,p.BorderSides.TR,p.BorderSides.BL,p.BorderSides.BR],ie=[p.UnitTypes.PIXEL,p.UnitTypes.PERCENTAGE],ne={number:[0,0,0,0],unit:p.UnitTypes.PIXEL},se=e=>{const{type:i="edge",value:n=ne,className:s,min:a=0,max:o=100,units:l=ie,disabled:r=!1,onActivatedChange:c,onChange:g,detached:d,unifiedTitle:I,unifiedAriaLabel:u}=e,M=n.number,m=n.unit,h=p.hooks.useTranslate(),y=t.React.useMemo((()=>"edge"===i?ee:te),[i]),j=(e,t)=>{if(e=Math.floor(+e),d){const i=[...M];i[t]=e,null==g||g({number:i,unit:m})}else{const t=p.styleUtils.expandStyleArray([e]);null==g||g({number:t,unit:n.unit})}};return(0,t.jsx)(p.InputGroup,{css:q,className:(0,t.classNames)("edges-number",s)},!d&&(0,t.jsx)(p.NumericInput,{size:"sm",min:a,max:o,title:I,"aria-label":u,disabled:r,value:null==M?void 0:M[0],onAcceptValue:e=>j(e,0),showHandlers:!1}),d&&y.map(((e,i)=>{const n=h(e);return(0,t.jsx)(p.NumericInput,{size:"sm",key:e,title:n,"aria-label":n,min:a,max:o,disabled:r,value:M[i],onAcceptValue:e=>j(e,i),onFocus:()=>c(i),onBlur:()=>c(-1),showHandlers:!1})})),(0,t.jsx)(p.InputGroupAddon,{addonType:"append"},(0,t.jsx)(N,{disabled:r,units:l,unit:n.unit,onChange:e=>{null==g||g({number:n.number,unit:e})}})))};const ae=t.css`
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
`,oe=e=>{const{className:i,activated:n=-1,detached:s}=e,a=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]])}return i}(e,["className","activated","detached"]);return(0,t.jsx)(p.Button,Object.assign({css:ae,className:(0,t.classNames)("corner",i)},a),(0,t.jsx)("div",{className:(0,t.classNames)("content",{unified:!s},{"none-select":n<0})},s&&(0,t.jsx)(t.React.Fragment,null,(0,t.jsx)("div",{className:"top"},(0,t.jsx)("div",{className:(0,t.classNames)("top-left corner",{selected:0===n})}),(0,t.jsx)("div",{className:(0,t.classNames)("top-right corner",{selected:1===n})})),(0,t.jsx)("div",{className:"bottom"},(0,t.jsx)("div",{className:(0,t.classNames)("bottom-left corner",{selected:3===n})}),(0,t.jsx)("div",{className:(0,t.classNames)("bottom-right corner",{selected:2===n})})))))};const le=t.css`
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
`,re=e=>{const{className:i,activated:n=-1,detached:s}=e,a=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]])}return i}(e,["className","activated","detached"]);return(0,t.jsx)(p.Button,Object.assign({css:le,className:(0,t.classNames)("edge",i)},a),(0,t.jsx)("div",{className:(0,t.classNames)("content",{unified:!s},{"none-select":n<0})},s&&(0,t.jsx)(t.React.Fragment,null,(0,t.jsx)("div",{className:(0,t.classNames)("edge top",{selected:0===n})}),(0,t.jsx)("div",{className:"middle"},(0,t.jsx)("div",{className:(0,t.classNames)("edge left",{selected:3===n})}),(0,t.jsx)("div",{className:(0,t.classNames)("edge right",{selected:1===n})})),(0,t.jsx)("div",{className:(0,t.classNames)("edge bottom",{selected:2===n})})),(0,t.jsx)("div",{className:"inner-box"})))};const ce=e=>{const{type:i="edge",detached:n,onDetachedChange:s,onClick:a}=e,o=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]])}return i}(e,["type","detached","onDetachedChange","onClick"]),l=(e,t)=>{null==s||s(e),null==a||a(t)};return t.React.createElement(t.React.Fragment,null,"edge"===i&&t.React.createElement(p.AdvancedButtonGroup,null,"edge"===i&&t.React.createElement(re,Object.assign({active:!n,detached:!1},o,{onClick:e=>l(!1,e)})),"edge"===i&&t.React.createElement(re,Object.assign({active:n,detached:!0},o,{onClick:e=>l(!0,e)}))),"corner"===i&&t.React.createElement(p.AdvancedButtonGroup,null,t.React.createElement(oe,Object.assign({active:!n,detached:!1},o,{onClick:e=>l(!1,e)})),t.React.createElement(oe,Object.assign({active:n,detached:!0},o,{onClick:e=>l(!0,e)}))))};const ge=t.css`
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
`,de={number:[0,0,0,0],unit:p.UnitTypes.PIXEL},pe=[p.UnitTypes.PIXEL,p.UnitTypes.PERCENTAGE],Ie=e=>{const{type:i="edge",value:n=de,units:s=pe,min:a=0,max:o=100,disabled:l=!1,className:r,style:c,onChange:g,separated:d=!0}=e,I=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]])}return i}(e,["type","value","units","min","max","disabled","className","style","onChange","separated"]),u=(e=>{let t=e;if((null==e?void 0:e.number)&&4!==e.number.length){const i=p.styleUtils.expandStyleArray(e.number);t=Object.assign(Object.assign({},t),{number:i})}return t})(n),M=u.number,m=u.unit,[N,h]=t.React.useState((()=>(e=>{const t=null==e?void 0:e.number;return!(!t||t[0]===t[1]&&t[1]===t[2]&&t[2]===t[3])})(u))),[y,j]=t.React.useState(-1);return(0,t.jsx)("div",{className:(0,t.classNames)("style-setting--four-edges",r),style:c,css:ge},(0,t.jsx)("div",{className:"content d-flex"},d&&(0,t.jsx)(ce,{type:i,detached:N,activated:y,disabled:l,onDetachedChange:e=>{if(!l){if(!e){const e=p.styleUtils.expandStyleArray([M[0]]);null==g||g({number:e,unit:m})}h(e)}}}),(0,t.jsx)(se,Object.assign({type:i,detached:N,value:u,min:a,max:o,disabled:l,units:s,onChange:g},I,{onActivatedChange:j}))))};const ue=e=>{const{className:i,value:n,onChange:s}=e,a=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]])}return i}(e,["className","value","onChange"]),o=t.React.useMemo((()=>null==n?void 0:n.asMutable({deep:!0})),[n]),l=p.hooks.useTranslate(),r=t.React.useMemo((()=>l("cornerRadius")),[l]);return t.React.createElement(Ie,Object.assign({type:"corner",value:o,onChange:e=>{null==s||s((0,t.Immutable)(e))},unifiedAriaLabel:r,unifiedTitle:r},a,{className:(0,t.classNames)("style-setting--border-radius",i)}))};var Me=c(35212),me=c.n(Me);const Ne=e=>{const{className:i}=e,n=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]])}return i}(e,["className"]),s=(0,t.classNames)("jimu-icon-component",i);return t.React.createElement(p.Icon,Object.assign({className:s,icon:me()},n))};var he=c(81874),ye=c.n(he);const je=e=>{const{className:i}=e,n=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]])}return i}(e,["className"]),s=(0,t.classNames)("jimu-icon-component",i);return t.React.createElement(p.Icon,Object.assign({className:s,icon:ye()},n))};var we=c(71007),xe=c.n(we);const be=e=>{const{className:i}=e,n=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]])}return i}(e,["className"]),s=(0,t.classNames)("jimu-icon-component",i);return t.React.createElement(p.Icon,Object.assign({className:s,icon:xe()},n))};var Ae=c(58285),ze=c.n(Ae);const De=e=>{const{className:i}=e,n=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]])}return i}(e,["className"]),s=(0,t.classNames)("jimu-icon-component",i);return t.React.createElement(p.Icon,Object.assign({className:s,icon:ze()},n))};const Ce=["bold","italic","underline","strike"],ve=e=>{const{types:i=Ce,bold:n,italic:s,underline:a,strike:o,onChange:l}=e,r=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]])}return i}(e,["types","bold","italic","underline","strike","onChange"]),c=p.hooks.useTranslate();return t.React.createElement(p.ButtonGroup,Object.assign({},r),i.map(((i,n)=>{const s=!!e[i];return t.React.createElement(p.Button,{key:n,title:c(i),"aria-pressed":s,active:s,type:"default",icon:!0,size:"sm",onClick:()=>l(i,!e[i])},"bold"===i&&t.React.createElement(Ne,null),"italic"===i&&t.React.createElement(je,null),"underline"===i&&t.React.createElement(be,null),"strike"===i&&t.React.createElement(De,null))})))};const fe={icon:c(38275)},Te=e=>{const i=(0,d.useTheme2)(),n=p.hooks.useTranslate(),{className:s,bold:a,italic:o,strike:l,underline:r,color:c,size:g="16px",onChange:I}=e,u=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]])}return i}(e,["className","bold","italic","strike","underline","color","size","onChange"]),M=(e,t)=>{null==I||I(e,t)};return t.React.createElement("div",Object.assign({className:(0,t.classNames)("d-flex justify-content-between w-100",s)},u),t.React.createElement(ve,{bold:a,italic:o,strike:l,underline:r,onChange:M}),t.React.createElement(S.ThemeColorPicker,{"aria-label":n("fontColor"),pickerBlockProps:fe,specificTheme:i,value:c,onChange:e=>M("color",e)}),t.React.createElement(T,{"aria-label":n("fontSize"),style:{width:"35%"},value:g,onChange:e=>M("size",`${e.distance}${e.unit}`)}))};var Se=c(47118),Oe=c.n(Se);const Le=e=>{const{className:i}=e,n=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]])}return i}(e,["className"]),s=(0,t.classNames)("jimu-icon-component",i);return t.React.createElement(p.Icon,Object.assign({className:s,icon:Oe()},n))};var Pe=c(13468),Ee=c.n(Pe);const ke=e=>{const{className:i}=e,n=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]])}return i}(e,["className"]),s=(0,t.classNames)("jimu-icon-component",i);return t.React.createElement(p.Icon,Object.assign({className:s,icon:Ee()},n))};var Ze=c(192),Be=c.n(Ze);const Ye=e=>{const{className:i}=e,n=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]])}return i}(e,["className"]),s=(0,t.classNames)("jimu-icon-component",i);return t.React.createElement(p.Icon,Object.assign({className:s,icon:Be()},n))};var Re=c(67653),Ge=c.n(Re);const Qe=e=>{const{className:i}=e,n=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]])}return i}(e,["className"]),s=(0,t.classNames)("jimu-icon-component",i);return t.React.createElement(p.Icon,Object.assign({className:s,icon:Ge()},n))};const We=e=>{var i,n;const s=null===(n=null===(i=(0,t.getAppStore)().getState())||void 0===i?void 0:i.appContext)||void 0===n?void 0:n.isRTL,{buttonType:a="default",textAlign:o=(s?p.TextAlignValue.RIGHT:p.TextAlignValue.LEFT),onChange:l,className:r,showJustify:c=!1,autoFlip:g=!1}=e,d=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]])}return i}(e,["buttonType","textAlign","onChange","className","showJustify","autoFlip"]),I=p.hooks.useTranslate();return t.React.createElement(p.ButtonGroup,Object.assign({},d,{className:(0,t.classNames)("text-alignment",r,{"flex-row-reverse":s&&g})}),t.React.createElement(p.Button,{title:I(s&&!g?"right":"left"),type:a,icon:!0,size:"sm",active:o===p.TextAlignValue.LEFT,onClick:()=>l(p.TextAlignValue.LEFT)},t.React.createElement(Le,{autoFlip:!g})),t.React.createElement(p.Button,{title:I("center"),type:a,icon:!0,size:"sm",active:o===p.TextAlignValue.CENTER,onClick:()=>l(p.TextAlignValue.CENTER)},t.React.createElement(ke,null)),t.React.createElement(p.Button,{title:I(s&&!g?"left":"right"),type:a,icon:!0,size:"sm",active:o===p.TextAlignValue.RIGHT,onClick:()=>l(p.TextAlignValue.RIGHT)},t.React.createElement(Ye,{autoFlip:!g})),c&&t.React.createElement(p.Button,{title:I("justify"),type:a,icon:!0,size:"sm",active:o===p.TextAlignValue.JUSTIFY,onClick:()=>l(p.TextAlignValue.JUSTIFY)},t.React.createElement(Qe,null)))};var Ue=c(74758);const Ve=[p.UnitTypes.PIXEL,p.UnitTypes.PERCENTAGE],He=[Ue.LayoutItemSizeModes.Auto,Ue.LayoutItemSizeModes.Stretch,Ue.LayoutItemSizeModes.Custom];class Je extends t.React.PureComponent{constructor(e){super(e),this.handleChange=e=>{this.props.onModeChange(e)},this.nls=e=>this.props.intl?this.props.intl.formatMessage({id:e,defaultMessage:p.defaultMessages[e]}):e,this.getPopperStyle=()=>t.css`
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
    `}render(){var e;const{mode:i,value:n,disableModeSelect:s,disabled:a}=this.props;if(a)return(0,t.jsx)("div",{className:"d-flex size-editor w-100",css:this.getStyle()},(0,t.jsx)("div",{title:this.nls(Ue.LayoutItemSizeModes.Auto.toLowerCase()),className:"prop-label px-2 text-truncate text-center w-100"},this.nls(Ue.LayoutItemSizeModes.Auto.toLowerCase())));const o=null!==(e=this.props.sizeModes)&&void 0!==e?e:He;return(0,t.jsx)("div",{className:"d-flex size-editor w-100",css:this.getStyle()},!s&&(0,t.jsx)(p.Dropdown,{direction:"down",size:"sm"},(0,t.jsx)(p.DropdownButton,{arrow:!0,icon:!0,type:"tertiary",size:"sm",className:"p-0"}),(0,t.jsx)(p.DropdownMenu,{className:"p-0",css:t.css`min-width: 5rem;`},o.map(((e,n)=>(0,t.jsx)(p.DropdownItem,{"aria-pressed":e===i,"aria-label":this.nls(e.toLowerCase()),key:n,onClick:()=>this.handleChange(e)},(0,t.jsx)("div",{className:"d-flex alitn-items-center justify-content-end w-100"},e===i&&(0,t.jsx)(M,{className:"mr-2"}),this.nls(e.toLowerCase()))))))),i!==Ue.LayoutItemSizeModes.Custom&&(0,t.jsx)("div",{className:"prop-label flex-grow-1 px-2 text-truncate text-center",title:"function"==typeof(null==i?void 0:i.toLowerCase)&&this.nls(i.toLowerCase())},"function"==typeof(null==i?void 0:i.toLowerCase)&&this.nls(i.toLowerCase())),i===Ue.LayoutItemSizeModes.Custom&&(0,t.jsx)(T,{units:this.props.availableUnits||Ve,min:-1/0,max:1/0,value:Ue.utils.normalizeLinearUnit(n),onChange:this.props.onChange}))}}Je.defaultProps={disableModeSelect:!1,onChange:()=>{}};const Fe=(0,t.injectIntl)(Je);var Xe=c(20663);class Ke extends t.React.PureComponent{constructor(e){super(e),this.openBrowseImage=e=>{const{background:i}=this.props;this.props.onChange(t.lodash.assign({},i,{image:e}))},this._onPositionChange=e=>{const{background:i}=this.props,n=e.target.value;this.props.onChange(t.lodash.assign({},i,{fillType:n}))},this._onColorChange=e=>{const{background:i}=this.props;this.props.onChange(t.lodash.assign({},i,{color:e}))},this.translate=(e,t)=>{var i,n;const s=Object.assign({},p.defaultMessages);return null===(n=null===(i=this.props)||void 0===i?void 0:i.intl)||void 0===n?void 0:n.formatMessage({id:e,defaultMessage:s[e]},t)},this.getFillType=()=>[{value:p.FillType.FIT,label:this.translate("fit")},{value:p.FillType.FILL,label:this.translate("fill")},{value:p.FillType.CENTER,label:this.translate("center")},{value:p.FillType.TILE,label:this.translate("tile")},{value:p.FillType.STRETCH,label:this.translate("stretch")}],this.fileInput=t.React.createRef()}render(){var e;const{background:i,className:n,style:s,theme2:a}=this.props,o=null===(e=i.image)||void 0===e?void 0:e.originalName,l=`image-dynamic-selected-${t.utils.getUID()}`;return(0,t.jsx)("div",{className:(0,t.classNames)(n,"jimu-builder--background-setting"),style:s},(0,t.jsx)(k.SettingRow,{label:this.translate("fill")},(0,t.jsx)(S.ThemeColorPicker,{specificTheme:a,onChange:this._onColorChange,value:i.color})),(0,t.jsx)(k.SettingRow,{className:"background-image",label:this.translate("image")},(0,t.jsx)(Xe.ImageSelector,Object.assign({widgetId:"background-setting",buttonLabel:this.translate("browse"),buttonSize:"sm",className:"w-50",buttonClassName:"text-dark d-flex justify-content-center btn-browse",onChange:this.openBrowseImage,imageParam:i.image,"aria-label":this.translate("browseImage")},o?{"aria-describedby":l}:{})),o&&(0,t.jsx)("div",{id:l,style:{display:"none"},"aria-label":this.translate("numSelected",{number:o})})),(0,t.jsx)(k.SettingRow,{className:"background-image-fill-type",label:this.translate("position")},(0,t.jsx)(p.Select,{"aria-label":this.translate("position"),size:"sm",className:"fill-type",name:"bg-position",value:i.fillType,onChange:this._onPositionChange.bind(this)},this.getFillType().map(((e,i)=>{var n;return(0,t.jsx)("option",{key:i,value:e.value},null!==(n=e.label)&&void 0!==n?n:e.value)})))))}}Ke.defaultProps={background:{color:void 0,fillType:p.FillType.FIT,image:{url:""}},onChange:()=>{}};const $e=(0,d.withStyles)((0,d.withTheme)((0,t.injectIntl)(Ke),!0),"BackgroundSetting");const _e=t.css`
  .color-picker-block {
    margin-right: 9px;
  }
`,qe=e=>{const i=(0,d.useTheme2)(),{onChange:n,color:s,size:a,className:o}=e,l=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]])}return i}(e,["onChange","color","size","className"]);return(0,t.jsx)("div",Object.assign({css:_e,className:(0,t.classNames)("size-color-setting d-flex",o)},l),(0,t.jsx)(S.ThemeColorPicker,{specificTheme:i,value:s,onChange:e=>n("color",e)}),(0,t.jsx)(T,{value:null!=a?a:"12px",onChange:e=>n("size",`${e.distance}${e.unit}`)}))},et=e=>{const i=(0,d.useTheme2)(),{onlyBorderColor:n,icon:s,onChange:a,variant:o}=e,{bold:l,italic:r,underline:c,strike:g,color:I,bg:u,size:M,border:m,borderRadius:N,icon:h}=o||{},y=p.hooks.useTranslate(p.defaultMessages,t.defaultMessages),j=t.polished.getValueAndUnit(p.styleUtils.remToPixel(N||"0rem")),w=(0,t.Immutable)({number:[null==j?void 0:j[0]],unit:null==j?void 0:j[1]});return t.React.createElement(t.React.Fragment,null,t.React.createElement(k.SettingRow,{className:"mt-3",flow:"wrap",label:y("text")},t.React.createElement(Te,{bold:l,italic:r,underline:c,strike:g,size:M,color:I,onChange:a})),s&&t.React.createElement(k.SettingRow,{className:"mt-3",flow:"no-wrap",label:y("icon")},t.React.createElement(qe,{className:"w-50",color:null==h?void 0:h.color,size:null==h?void 0:h.size,onChange:(e,t)=>a("icon",Object.assign(Object.assign({},h),{[e]:t}))})),t.React.createElement(k.SettingRow,{className:"mt-3",flow:"no-wrap",label:y("background")},t.React.createElement(S.ThemeColorPicker,{specificTheme:i,value:u,onChange:e=>a("bg",e)})),n&&t.React.createElement(k.SettingRow,{className:"mt-3",label:y("underline"),flow:"no-wrap"},t.React.createElement(qe,{color:null==m?void 0:m.color,size:null==m?void 0:m.width,onChange:(e,t)=>{e="size"===e?"width":e,a("border",Object.assign(Object.assign({},m),{[e]:t}))}})),!n&&t.React.createElement(k.SettingRow,{className:"mt-3",label:y("border"),flow:"wrap"},t.React.createElement(E,{value:m,onChange:e=>a("border",e)})),t.React.createElement(k.SettingRow,{className:"mt-3",label:y("borderRadius"),flow:"no-wrap"},t.React.createElement(ue,{style:{width:n?"35%":"30%"},separated:!1,value:w,onChange:e=>{var t;return a("borderRadius",`${null===(t=e.number)||void 0===t?void 0:t[0]}${null==e?void 0:e.unit}`)}})))},tt=e=>{const{onChange:i,variant:n}=e,{icon:s}=n||{},a=p.hooks.useTranslate(t.defaultMessages);return t.React.createElement(k.SettingRow,{className:"mt-2",flow:"no-wrap",label:a("icon")},t.React.createElement(qe,{color:null==s?void 0:s.color,size:null==s?void 0:s.size,onChange:(e,t)=>i("icon",Object.assign(Object.assign({},s),{[e]:t}))}))},it=e=>"default"===e?"regular":"active"===e?"selected":e,nt=e=>{const{variant:i,onChange:n,states:s=["default","active","hover"],icon:a,text:o,iconInText:l,onlyBorderColor:r}=e,c=t.React.useMemo((()=>{var e;return t.css`
      .tab-title-item{
        width: ${null!==(e=100/(null==s?void 0:s.length))&&void 0!==e?e:1}%;
      }
     .style-setting--input-unit {
        width: ${t.polished.rem(80)};
      }
    `}),[s]),g=p.hooks.useTranslate();return(0,t.jsx)(k.SettingRow,{flow:"wrap"},(0,t.jsx)(p.Tabs,{type:"pills",className:"flex-grow-1 w-100 h-100",fill:!0,css:c,defaultValue:"0"},s.map(((e,s)=>{var c,d;return(0,t.jsx)(p.Tab,{id:s+"",key:s,className:"tab-title-item",title:g(it(e))},a&&(0,t.jsx)(tt,{variant:null===(c=null==i?void 0:i.item)||void 0===c?void 0:c[e],onChange:(t,i)=>n(e,t,i)}),o&&(0,t.jsx)(et,{variant:null===(d=null==i?void 0:i.item)||void 0===d?void 0:d[e],icon:l,onlyBorderColor:r,onChange:(t,i)=>n(e,t,i)}))}))))};const{useMemo:st}=t.React,at=c(63503),ot=c(38586),lt=c(29965),rt=c(82744),ct=c(91112),gt=e=>{const{size:i=12}=e,n=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]])}return i}(e,["size"]),s=(e=>st((()=>[p.utils.toIconResult(at,"dot",e),p.utils.toIconResult(ot,"pill",e),p.utils.toIconResult(lt,"cube",e),p.utils.toIconResult(rt,"circle",e),p.utils.toIconResult(ct,"double-circle",e)]),[e]))(i);return t.React.createElement(Xe.IconPicker,Object.assign({groups:"none",customIcons:s},n))},dt=c(89781),pt=c(94850),It=c(57223),ut=c(64037),Mt=c(63619),mt=c(19502),Nt=c(63291),ht=[{icon:dt,type:t.AnimationType.None},{type:t.AnimationType.FadeIn,icon:pt,supportedTriggers:[t.AnimationTriggerType.ScrollIntoView]},{type:t.AnimationType.FloatIn,icon:It,supportedTriggers:[t.AnimationTriggerType.ScrollIntoView],supportedDirections:[t.AnimationDirection.Top,t.AnimationDirection.Bottom,t.AnimationDirection.Left,t.AnimationDirection.Right]},{type:t.AnimationType.FlyIn,icon:ut,supportedTriggers:[t.AnimationTriggerType.ScrollIntoView],supportedDirections:[t.AnimationDirection.Top,t.AnimationDirection.Bottom,t.AnimationDirection.Left,t.AnimationDirection.Right]},{type:t.AnimationType.SpinIn,icon:Mt,supportedTriggers:[t.AnimationTriggerType.ScrollIntoView]},{type:t.AnimationType.WipeIn,icon:mt,supportedTriggers:[t.AnimationTriggerType.ScrollIntoView],supportedDirections:[t.AnimationDirection.Top,t.AnimationDirection.Bottom,t.AnimationDirection.Left,t.AnimationDirection.Right]},{type:t.AnimationType.ZoomIn,icon:Nt,supportedTriggers:[t.AnimationTriggerType.ScrollIntoView]}],yt=[{icon:dt,type:t.AnimationType.None},{icon:pt,type:t.AnimationType.FadeIn},{icon:It,type:t.AnimationType.FloatIn,supportedDirections:[t.AnimationDirection.Top,t.AnimationDirection.Bottom,t.AnimationDirection.Left,t.AnimationDirection.Right]},{icon:mt,type:t.AnimationType.WipeIn,supportedDirections:[t.AnimationDirection.Top,t.AnimationDirection.Bottom,t.AnimationDirection.Left,t.AnimationDirection.Right]},{icon:Nt,type:t.AnimationType.ZoomIn}],jt=c(43611),wt=c(26350),xt=c(34051),bt=c(64164),At=c(31185);class zt extends t.React.PureComponent{constructor(){super(...arguments),this.onWidgetEffectTypeChanged=(e,i)=>{e.stopPropagation();const n=(0,t.Immutable)(this.props.effectSetting||{});(null==n?void 0:n.type)===i?this.props.onPreviewClicked():this.props.onSettingChange(n.set("type",i).setIn(["option","direction"],null))},this.onDurationChange=e=>{const i=(0,t.Immutable)(this.props.effectSetting||{});this.props.onSettingChange(i.setIn(["option","configType"],e.target.value))},this.onWidgetEffectDirectionChanged=e=>{const i=(0,t.Immutable)(this.props.effectSetting||{});this.props.onSettingChange(i.setIn(["option","direction"],e.target.value))}}createAnimationCard(e,i){const{effectSetting:n}=this.props,s=(null==n?void 0:n.type)||t.AnimationType.None;return(0,t.jsx)("div",{className:(0,t.classNames)("d-flex flex-column align-items-center card-item",{selected:e.type===s}),key:i},(0,t.jsx)(p.Button,{icon:!0,role:"option","aria-label":this.props.formatMessage(e.type.toLowerCase()),"aria-pressed":e.type===s,className:"d-flex justify-content-center card-content border-0",onClick:t=>this.onWidgetEffectTypeChanged(t,e.type)},(0,t.jsx)(p.Icon,{className:"w-100",currentColor:!1,icon:e.icon||jt,size:72})),(0,t.jsx)("div",{className:"card-name flex-grow-1 d-flex align-items-start mt-1"},(0,t.jsx)("span",{className:"text-center card-name-content",title:this.props.formatMessage(e.type.toLowerCase())},this.props.formatMessage(e.type.toLowerCase()))))}chooseDirectionIcon(e){switch(e){case t.AnimationDirection.Bottom:return wt;case t.AnimationDirection.Left:return At;case t.AnimationDirection.Right:return bt;case t.AnimationDirection.Top:return xt;default:return null}}createEffectDirectionChooser(e){var i;const{effectSetting:n}=this.props;return(0,t.jsx)("div",{className:"direction-select px-3 mb-3"},(0,t.jsx)("div",{className:"effect-title mb-2"},this.props.formatMessage("direction")),(0,t.jsx)(p.Select,{defaultValue:t.AnimationDirection.Top,value:null===(i=null==n?void 0:n.option)||void 0===i?void 0:i.direction,onChange:this.onWidgetEffectDirectionChanged,size:"sm","aria-label":this.props.formatMessage("direction")},e.map(((e,i)=>(0,t.jsx)("option",{value:e,key:i},(0,t.jsx)(p.Icon,{className:"mx-1",icon:this.chooseDirectionIcon(e),size:12}),this.props.formatMessage(e.toLowerCase()))))))}getStyle(){return t.css`
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
    `}render(){var e,i;const{formatMessage:n,effectSetting:s,metaInfos:a}=this.props,o=a.find((e=>e.type===(null==s?void 0:s.type)));return(0,t.jsx)("div",{className:"bg-light-300 border-color-gray-400",css:this.getStyle()},(0,t.jsx)("div",{className:"w-100 h-100 animation-panel-border"},(0,t.jsx)(p.ButtonGroup,{role:"listbox",className:"animation-cards"},a.map(((e,t)=>this.createAnimationCard(e,t)))),o&&o.type!==t.AnimationType.None&&(0,t.jsx)("div",{className:"separator"}),o&&o.type!==t.AnimationType.None&&(0,t.jsx)("div",{className:"duration-input px-3 mb-3"},(0,t.jsx)("div",{className:"effect-title mb-2"},this.props.formatMessage("effect")),(0,t.jsx)(p.Select,{value:null!==(i=null===(e=null==s?void 0:s.option)||void 0===e?void 0:e.configType)&&void 0!==i?i:t.AnimationEffectType.Default,onChange:this.onDurationChange,size:"sm","aria-label":this.props.formatMessage("effect")},Object.entries(t.AnimationEffectType).map((([e,i],s)=>(0,t.jsx)("option",{key:s,value:i},n(e.toLowerCase())))))),(null==o?void 0:o.supportedDirections)&&this.createEffectDirectionChooser(o.supportedDirections)))}}const Dt=c(42351),Ct=c(23377);class vt extends t.React.PureComponent{constructor(e){super(e),this.onAsOneSettingChange=e=>{this.props.onSettingChange(t.AnimationPlayMode.AsOne,e)},this.onOneByOneSettingChange=e=>{this.props.onSettingChange(t.AnimationPlayMode.OneByOne,e)},this.previewAsOne=()=>{this.props.onPreviewClicked(t.AnimationPlayMode.AsOne)},this.previewOneByOne=()=>{this.props.onPreviewClicked(t.AnimationPlayMode.OneByOne)},this.toggleAsOneOpened=()=>{this.setState({asOneOpened:!this.state.asOneOpened})},this.toggleOneByOneOpened=()=>{this.setState({oneByOneOpened:!this.state.oneByOneOpened})},this.state={asOneOpened:!0,oneByOneOpened:!(this.props.supportAsOne&&this.props.supportOneByOne)}}getStyle(){return t.css`
      .sub-header {
        padding: 0.5rem 0.5rem 0.5rem 1rem;

        .title {
          font-size: 14px;
        }
      }
    `}render(){const{formatMessage:e,supportOneByOne:i,supportAsOne:n,effectSetting:s,oneByOneSetting:a}=this.props,o=i&&n;return(0,t.jsx)("div",{className:"bg-light-300 border-color-gray-400",css:this.getStyle()},n&&(0,t.jsx)(k.SettingSection,{className:"p-0",title:(0,t.jsx)("div",{className:"w-100 d-flex justify-content-between align-items-center sub-header"},(0,t.jsx)("div",{className:"text-truncate title",title:`${i&&this.props.selectedWidgetLabel}`,css:t.css`max-width: 80%;`},i&&this.props.selectedWidgetLabel),o&&(0,t.jsx)(p.Button,{size:"sm",type:"tertiary",icon:!0,onClick:this.toggleAsOneOpened},(0,t.jsx)(p.Icon,{size:12,icon:this.state.asOneOpened?Ct:Dt})))},(0,t.jsx)(p.Collapse,{isOpen:this.state.asOneOpened,className:"mt-0"},(0,t.jsx)(zt,{effectSetting:s,metaInfos:ht,onSettingChange:this.onAsOneSettingChange,previewEnabled:!0,onPreviewClicked:this.previewAsOne,formatMessage:e}))),i&&(0,t.jsx)(k.SettingSection,{className:"p-0",title:(0,t.jsx)("div",{className:"w-100 d-flex justify-content-between align-items-center sub-header"},(0,t.jsx)("div",{className:"text-truncate title",title:`${n&&e("widgetByWidget")}`,css:t.css`max-width: 80%;`},n&&e("widgetByWidget")),o&&(0,t.jsx)(p.Button,{size:"sm",type:"tertiary",icon:!0,onClick:this.toggleOneByOneOpened},(0,t.jsx)(p.Icon,{size:12,icon:this.state.oneByOneOpened?Ct:Dt})))},(0,t.jsx)(p.Collapse,{isOpen:this.state.oneByOneOpened,className:"mt-0"},(0,t.jsx)(zt,{effectSetting:a,metaInfos:yt,onSettingChange:this.onOneByOneSettingChange,previewEnabled:!0,onPreviewClicked:this.previewOneByOne,formatMessage:e}))))}}const ft=t.ReactRedux.connect((function(e){var i,n,s,a,o,l;const r=e.appStateInBuilder,c=null==r?void 0:r.appConfig,g=null===(i=null==r?void 0:r.appRuntimeInfo)||void 0===i?void 0:i.selection;if(g){const{layoutId:e,layoutItemId:i}=g,l=null===(a=null===(s=null===(n=c.layouts)||void 0===n?void 0:n[e])||void 0===s?void 0:s.content)||void 0===a?void 0:a[i];if((null==l?void 0:l.type)===t.LayoutItemType.Widget){const e=c.widgets[l.widgetId];return{selectedWidgetLabel:null!==(o=null==e?void 0:e.label)&&void 0!==o?o:""}}}else{const e=null===(l=null==r?void 0:r.appRuntimeInfo)||void 0===l?void 0:l.currentDialogId;if(e&&c.dialogs[e])return{selectedWidgetLabel:c.dialogs[e].label}}return{selectedWidgetLabel:""}}))(vt),Tt=c(93966),St=c(89781);class Ot extends t.React.PureComponent{constructor(e){super(e),this.sidePopperTrigger=t.React.createRef(),this.buttonRef=t.React.createRef(),this.toggleSidePanel=()=>{this.setState({showSidePanel:!this.state.showSidePanel})},this.previewAnimation=e=>{e.stopPropagation(),this.props.onPreviewClicked(null)},this.state={showSidePanel:!1}}componentDidUpdate(e){this.props.contentId!==e.contentId&&this.state.showSidePanel&&this.setState({showSidePanel:!1})}getAnimBoxStyle(){return t.css`
      background-color: transparent;
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
      .anim-label {
        align-self: flex-start;
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
        height: calc(100% - 60px);
        overflow: auto;
      }
    `}render(){var e,i;const{effectSetting:n,oneByOneSetting:s,formatMessage:a,previewEnabled:o,supportAsOne:l,supportOneByOne:r}=this.props,c=ht.find((e=>e.type===(null==n?void 0:n.type))),g=yt.find((e=>e.type===(null==s?void 0:s.type))),d=l&&r,I=d?32:48,u=(null==n?void 0:n.type)?a(n.type.toLowerCase()):a("none"),M=(null==s?void 0:s.type)?a(s.type.toLowerCase()):a("none");let m="";return l&&(m+=u),d&&(m+="/"),r&&(m+=M),(0,t.jsx)(t.React.Fragment,null,(0,t.jsx)("div",{className:"anima-box d-flex justify-content-center align-items-center",css:this.getAnimBoxStyle()},(0,t.jsx)(p.Button,{className:"img-tip d-flex justify-content-center align-items-center border-0",onClick:this.toggleSidePanel,title:m,"aria-label":m,icon:!0},l&&(0,t.jsx)("div",{className:(0,t.classNames)("anim-icon first",{"has-sibling":d})},(0,t.jsx)(p.Icon,{icon:(null==c?void 0:c.icon)||St,size:I})),d&&(0,t.jsx)("div",{className:"diag-sep"}),r&&(0,t.jsx)("div",{className:(0,t.classNames)("anim-icon second",{"has-sibling":d})},(0,t.jsx)(p.Icon,{icon:(null==g?void 0:g.icon)||St,size:I}))),(0,t.jsx)("div",{className:"d-flex flex-column justify-content-between align-items-center ml-2 h-100 flex-grow-1"},(0,t.jsx)("div",{className:"anim-label"},l&&(0,t.jsx)("span",null,u),d&&(0,t.jsx)("span",{className:"mx-1"},"/"),r&&(0,t.jsx)("span",null,M)),(0,t.jsx)("div",{className:"amin-icons w-100",ref:this.sidePopperTrigger},(0,t.jsx)(p.Button,{size:"sm",ref:this.buttonRef,onClick:this.toggleSidePanel,className:"text-truncate",title:a("change")},a("change")),(0,t.jsx)(p.Tooltip,{title:a("preview"),placement:"bottom"},(0,t.jsx)(p.Button,{type:"default",size:"sm",icon:!0,disabled:!o,onClick:this.previewAnimation},(0,t.jsx)(p.Icon,{icon:Tt,size:12})))))),this.state.showSidePanel&&(0,t.jsx)(k.SidePopper,{isOpen:!0,css:this.getSidePopperStyle(),position:"right",toggle:this.toggleSidePanel,trigger:null===(e=this.sidePopperTrigger)||void 0===e?void 0:e.current,title:`${a("animation")} ${a("setting")}`,backToFocusNode:null===(i=this.buttonRef)||void 0===i?void 0:i.current},(0,t.jsx)("div",{className:"side-content"},(0,t.jsx)(ft,Object.assign({},this.props)))))}}Ot.defaultProps={onSettingChange:()=>{},previewEnabled:!0,supportOneByOne:!1,onPreviewClicked:()=>{},formatMessage:e=>e};const Lt=c(109),Pt=c(83167),Et=c(58228),kt=c(75046),Zt=c(38830),Bt=c(95514),Yt=[{icon:Lt,type:t.TransitionType.None},{type:t.TransitionType.Box,icon:Et,supportDirection:!0},{type:t.TransitionType.Cover,icon:Bt,supportDirection:!0},{type:t.TransitionType.Cube,icon:kt,supportDirection:!0},{type:t.TransitionType.Fade,icon:Pt},{type:t.TransitionType.Push,icon:Zt,supportDirection:!0}],Rt=c(93966),Gt=c(89781);class Qt extends t.React.PureComponent{constructor(e){super(e),this.sidePopperTrigger=t.React.createRef(),this.buttonRef=t.React.createRef(),this.modalStyle={position:"absolute",top:"60px",bottom:"0",width:"100%",height:"auto",paddingBottom:"1px"},this.toggleSidePanel=()=>{this.setState({showSidePanel:!this.state.showSidePanel})},this.previewTransition=e=>{e.stopPropagation(),this.props.onPreviewTransitionClicked()},this.onTransitionTypeChanged=e=>{var t,i;(null===(t=this.props.transition)||void 0===t?void 0:t.type)===e?this.props.onPreviewTransitionClicked():this.props.onTransitionChange({type:e,direction:null===(i=this.props.transition)||void 0===i?void 0:i.direction})},this.onDirectionChanged=e=>{var t;this.props.onTransitionChange({type:null===(t=this.props.transition)||void 0===t?void 0:t.type,direction:e.target.value})},this.previewOneByOneEffect=()=>{this.props.onPreviewOneByOneClicked()},this.onPreviewAsAWhoneClicked=e=>{e.stopPropagation(),this.props.onPreviewAsAWhoneClicked()},this.onOnebyOneSettingChange=(e,t)=>{this.props.onOneByOneChange(t)},this.state={showSidePanel:!1}}createTransitionCard(e,i){const{transition:n}=this.props,s=n.type||t.TransitionType.None;return(0,t.jsx)("div",{className:(0,t.classNames)("d-flex flex-column align-items-center card-item",{selected:e.type===s}),key:i},(0,t.jsx)(p.Button,{icon:!0,"aria-label":this.props.formatMessage(e.type.toLowerCase()),"aria-pressed":e.type===s,className:"d-flex justify-content-center card-content border-0",onClick:()=>this.onTransitionTypeChanged(e.type)},(0,t.jsx)(p.Icon,{className:"w-100 h-100",currentColor:!1,icon:e.icon||Gt})),(0,t.jsx)("div",{className:"card-name flex-grow-1 d-flex align-items-start mt-1"},(0,t.jsx)("span",{className:"text-center card-name-content",title:this.props.formatMessage(e.type.toLowerCase())},this.props.formatMessage(e.type.toLowerCase()))))}createDirectionChooser(){const{transition:e}=this.props;return(0,t.jsx)("div",{className:"direction-select px-3"},(0,t.jsx)("div",{className:"direction-title mb-2"},this.props.formatMessage("direction")),(0,t.jsx)(p.Select,{defaultValue:t.TransitionDirection.Horizontal,value:null==e?void 0:e.direction,onChange:this.onDirectionChanged,size:"sm"},Object.entries(t.TransitionDirection).map(((e,i)=>(0,t.jsx)("option",{value:e[1],key:i},this.props.formatMessage(e[0].toLowerCase()))))))}getSidePopperStyle(){return t.css`
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

      .anim-label {
        align-self: flex-start;
      }
    `}render(){var e,i;const{formatMessage:n,transition:s,transitionLabel:a,oneByOneEffect:o,showOneByOne:l}=this.props,r=Yt.find((e=>e.type===(null==s?void 0:s.type))),c=yt.find((e=>e.type===(null==o?void 0:o.type))),g=l?32:48,d=(null==s?void 0:s.type)?n(s.type.toLowerCase()):n("none"),I=(null==o?void 0:o.type)?n(o.type.toLowerCase()):n("none");let u=d;return l&&(u=u+"/"+I),(0,t.jsx)(t.React.Fragment,null,(0,t.jsx)("div",{className:"anima-box d-flex justify-content-center align-items-center flex-grow-1",css:this.getAnimBoxStyle()},(0,t.jsx)(p.Button,{className:"img-tip d-flex justify-content-center align-items-center border-0",onClick:this.toggleSidePanel,title:u,"aria-label":u,icon:!0},(0,t.jsx)("div",{className:(0,t.classNames)("anim-icon first",{"has-sibling":l})},(0,t.jsx)(p.Icon,{icon:(null==r?void 0:r.icon)||Gt,size:g})),l&&(0,t.jsx)("div",{className:"diag-sep"}),l&&(0,t.jsx)("div",{className:(0,t.classNames)("anim-icon second",{"has-sibling":l})},(0,t.jsx)(p.Icon,{icon:(null==c?void 0:c.icon)||Gt,size:g}))),(0,t.jsx)("div",{className:"d-flex flex-column justify-content-between align-items-center ml-2 h-100 flex-grow-1"},(0,t.jsx)("div",{className:"anim-label"},(0,t.jsx)("span",null,d),l&&(0,t.jsx)("span",{className:"mx-1"},"/"),l&&(0,t.jsx)("span",null,I)),(0,t.jsx)("div",{className:"amin-icons w-100",ref:this.sidePopperTrigger},(0,t.jsx)(p.Button,{ref:this.buttonRef,"aria-label":n("change"),size:"sm",onClick:this.toggleSidePanel,className:"text-truncate",title:n("change")},n("change")),(0,t.jsx)(p.Tooltip,{title:n("preview"),placement:"bottom"},(0,t.jsx)(p.Button,{type:"default",size:"sm",icon:!0,onClick:this.onPreviewAsAWhoneClicked},(0,t.jsx)(p.Icon,{icon:Rt,size:12})))))),this.state.showSidePanel&&(0,t.jsx)(k.SidePopper,{isOpen:!0,position:"right",toggle:this.toggleSidePanel,trigger:null===(e=this.sidePopperTrigger)||void 0===e?void 0:e.current,title:n("setting"),backToFocusNode:null===(i=this.buttonRef)||void 0===i?void 0:i.current},(0,t.jsx)("div",{css:this.getSidePopperStyle(),style:this.modalStyle},!l&&(0,t.jsx)("div",{className:"bg-light-300 border-color-gray-400 mt-3"},(0,t.jsx)("div",{className:"w-100 h-100 animation-panel-border"},(0,t.jsx)(p.ButtonGroup,{className:"animation-cards"},Yt.map(((e,t)=>this.createTransitionCard(e,t)))),(null==r?void 0:r.supportDirection)&&(0,t.jsx)("div",{className:"separator"}),(null==r?void 0:r.supportDirection)&&this.createDirectionChooser())),l&&(0,t.jsx)(p.Tabs,{type:"underline",key:"widget-setting",className:"flex-grow-1 w-100 h-100",fill:!0,defaultValue:"transition"},(0,t.jsx)(p.Tab,{id:"transition",title:a,className:"tab-title-item"},(0,t.jsx)("div",{className:"bg-light-300 border-color-gray-400 mt-3"},(0,t.jsx)("div",{className:"w-100 h-100 animation-panel-border"},(0,t.jsx)("div",{className:"animation-cards"},Yt.map(((e,t)=>this.createTransitionCard(e,t)))),(null==r?void 0:r.supportDirection)&&(0,t.jsx)("div",{className:"separator"}),(null==r?void 0:r.supportDirection)&&this.createDirectionChooser()))),(0,t.jsx)(p.Tab,{id:"widget",title:n("widget"),className:"tab-title-item"},(0,t.jsx)(ft,{effectSetting:null,oneByOneSetting:o,onSettingChange:this.onOnebyOneSettingChange,previewEnabled:!0,supportOneByOne:!0,supportAsOne:!1,onPreviewClicked:this.previewOneByOneEffect,formatMessage:this.props.formatMessage}))))))}}Qt.defaultProps={formatMessage:e=>e,showOneByOne:!0,onPreviewOneByOneClicked:()=>{}};const Wt=e=>{const{className:i,value:n,onChange:s}=e,a=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]])}return i}(e,["className","value","onChange"]),o=t.React.useMemo((()=>null==n?void 0:n.asMutable({deep:!0})),[n]),l=p.hooks.useTranslate(),r=t.React.useMemo((()=>l("padding")),[l]);return t.React.createElement(Ie,Object.assign({type:"edge",value:o,onChange:s,unifiedAriaLabel:r,unifiedTitle:r},a,{className:(0,t.classNames)("style-setting--padding",i)}))};(0,d.registerStyles)("jimu-ui/advanced/style-setting-components/",e)})(),g})())}}}));