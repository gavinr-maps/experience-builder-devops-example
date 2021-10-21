/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
System.register(["jimu-core","jimu-ui","jimu-ui/advanced/setting-components"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./jimu-core/lib/set-public-path.ts":
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("/**\n * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.\n * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.\n * */\n// eslint-disable-next-line\n// @ts-ignore\n__webpack_require__.p = window.jimuConfig.baseUrl;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cy5qcyIsIm1hcHBpbmdzIjoiQUFBQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHM/NzA4MyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbi8vIEB0cy1pZ25vcmVcclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./jimu-core/lib/set-public-path.ts\n");

/***/ }),

/***/ "./your-extensions/widgets/add-layers/src/setting/setting.tsx":
/*!********************************************************************!*\
  !*** ./your-extensions/widgets/add-layers/src/setting/setting.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Setting)\n/* harmony export */ });\n/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ \"jimu-core\");\n/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ \"jimu-ui\");\n/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ \"jimu-ui/advanced/setting-components\");\n/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./translations/default */ \"./your-extensions/widgets/add-layers/src/setting/translations/default.ts\");\n/** @jsx jsx */\n/**\n  Licensing\n\n  Copyright 2021 Esri\n\n  Licensed under the Apache License, Version 2.0 (the \"License\"); You\n  may not use this file except in compliance with the License. You may\n  obtain a copy of the License at\n  http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or\n  implied. See the License for the specific language governing\n  permissions and limitations under the License.\n\n  A copy of the license is available in the repository's\n  LICENSE file.\n*/\n\n\n\n\nclass Setting extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {\n    constructor() {\n        super(...arguments);\n        this.onZoomToLayerPropertyChange = (evt) => {\n            this.props.onSettingChange({\n                id: this.props.id,\n                config: this.props.config.set(\"zoomToLayer\", evt.currentTarget.checked)\n            });\n        };\n        this.onMapWidgetSelected = (useMapWidgetIds) => {\n            this.props.onSettingChange({\n                id: this.props.id,\n                useMapWidgetIds: useMapWidgetIds\n            });\n        };\n    }\n    render() {\n        const style = jimu_core__WEBPACK_IMPORTED_MODULE_0__.css `\n      .widget-setting-addLayers {\n        .checkbox-row {\n          display: flex;\n          justify-content: space-between;\n          margin-bottom: 8px;\n        }\n      }\n    `;\n        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { css: style },\n            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: \"widget-setting-addLayers\" },\n                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { className: \"map-selector-section\", title: this.props.intl.formatMessage({\n                        id: \"mapWidgetLabel\",\n                        defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_3__.default.selectMapWidget\n                    }) },\n                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, null,\n                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.JimuMapViewSelector, { onSelect: this.onMapWidgetSelected, useMapWidgetIds: this.props.useMapWidgetIds }))),\n                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { title: this.props.intl.formatMessage({\n                        id: \"settingsLabel\",\n                        defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_3__.default.settings\n                    }) },\n                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, null,\n                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: \"w-100 addLayers\" },\n                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: \"checkbox-row\" },\n                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"label\", null,\n                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: \"zoomToLayer\", defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_3__.default.zoomToLayer })),\n                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Switch, { checked: (this.props.config && this.props.config.zoomToLayer) ||\n                                        false, onChange: this.onZoomToLayerPropertyChange }))))))));\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9hZGQtbGF5ZXJzL3NyYy9zZXR0aW5nL3NldHRpbmcudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBO0FBQ0E7QUFFQTtBQUNBO0FBTUE7QUFFQTtBQUFBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWlFQTtBQS9EQTtBQUNBOzs7Ozs7OztBQVFBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBR0E7QUFXQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2FkZC1sYXllcnMvc3JjL3NldHRpbmcvc2V0dGluZy50c3g/NzdiMSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbi8qKlxuICBMaWNlbnNpbmdcblxuICBDb3B5cmlnaHQgMjAyMSBFc3JpXG5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgWW91XG4gIG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5XG4gIG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvclxuICBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmdcbiAgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuXG4gIEEgY29weSBvZiB0aGUgbGljZW5zZSBpcyBhdmFpbGFibGUgaW4gdGhlIHJlcG9zaXRvcnknc1xuICBMSUNFTlNFIGZpbGUuXG4qL1xuaW1wb3J0IHsgUmVhY3QsIEZvcm1hdHRlZE1lc3NhZ2UsIGNzcywganN4IH0gZnJvbSBcImppbXUtY29yZVwiO1xuaW1wb3J0IHsgQWxsV2lkZ2V0U2V0dGluZ1Byb3BzIH0gZnJvbSBcImppbXUtZm9yLWJ1aWxkZXJcIjtcbmltcG9ydCB7IFN3aXRjaCB9IGZyb20gXCJqaW11LXVpXCI7XG5pbXBvcnQge1xuICBKaW11TWFwVmlld1NlbGVjdG9yLFxuICBTZXR0aW5nU2VjdGlvbixcbiAgU2V0dGluZ1Jvd1xufSBmcm9tIFwiamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IElNQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuaW1wb3J0IGRlZmF1bHRNZXNzYWdlcyBmcm9tIFwiLi90cmFuc2xhdGlvbnMvZGVmYXVsdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5nIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxcbiAgQWxsV2lkZ2V0U2V0dGluZ1Byb3BzPElNQ29uZmlnPixcbiAgYW55XG4+IHtcbiAgb25ab29tVG9MYXllclByb3BlcnR5Q2hhbmdlID0gKGV2dDogUmVhY3QuRm9ybUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xuICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXG4gICAgICBjb25maWc6IHRoaXMucHJvcHMuY29uZmlnLnNldChcInpvb21Ub0xheWVyXCIsIGV2dC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQpXG4gICAgfSk7XG4gIH07XG5cbiAgb25NYXBXaWRnZXRTZWxlY3RlZCA9ICh1c2VNYXBXaWRnZXRJZHM6IHN0cmluZ1tdKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xuICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXG4gICAgICB1c2VNYXBXaWRnZXRJZHM6IHVzZU1hcFdpZGdldElkc1xuICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzdHlsZSA9IGNzc2BcbiAgICAgIC53aWRnZXQtc2V0dGluZy1hZGRMYXllcnMge1xuICAgICAgICAuY2hlY2tib3gtcm93IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNzcz17c3R5bGV9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1zZXR0aW5nLWFkZExheWVyc1wiPlxuICAgICAgICAgIDxTZXR0aW5nU2VjdGlvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWFwLXNlbGVjdG9yLXNlY3Rpb25cIlxuICAgICAgICAgICAgdGl0bGU9e3RoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHtcbiAgICAgICAgICAgICAgaWQ6IFwibWFwV2lkZ2V0TGFiZWxcIixcbiAgICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlcy5zZWxlY3RNYXBXaWRnZXRcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsvKlxuICAgICAgICAgICAgPFNldHRpbmdSb3c+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFwLXNlbGVjdG9yLWRlc2NyaXB0XCI+e3RoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHtpZDogJ3NvdXJjZURlc2NyaXB0JywgZGVmYXVsdE1lc3NhZ2U6ICdzZXQgYW4gaW50ZXJhY3RpdmUgbWFwICoqJ30pfTwvZGl2PlxuICAgICAgICAgICAgPC9TZXR0aW5nUm93PlxuICAgICAgICAgICAgKi99XG4gICAgICAgICAgICA8U2V0dGluZ1Jvdz5cbiAgICAgICAgICAgICAgPEppbXVNYXBWaWV3U2VsZWN0b3JcbiAgICAgICAgICAgICAgICBvblNlbGVjdD17dGhpcy5vbk1hcFdpZGdldFNlbGVjdGVkfVxuICAgICAgICAgICAgICAgIHVzZU1hcFdpZGdldElkcz17dGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1NldHRpbmdSb3c+XG4gICAgICAgICAgPC9TZXR0aW5nU2VjdGlvbj5cblxuICAgICAgICAgIDxTZXR0aW5nU2VjdGlvblxuICAgICAgICAgICAgdGl0bGU9e3RoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHtcbiAgICAgICAgICAgICAgaWQ6IFwic2V0dGluZ3NMYWJlbFwiLFxuICAgICAgICAgICAgICBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzLnNldHRpbmdzXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8U2V0dGluZ1Jvdz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMCBhZGRMYXllcnNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrYm94LXJvd1wiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiem9vbVRvTGF5ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlPXtkZWZhdWx0TWVzc2FnZXMuem9vbVRvTGF5ZXJ9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPFN3aXRjaFxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtcbiAgICAgICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5jb25maWcgJiYgdGhpcy5wcm9wcy5jb25maWcuem9vbVRvTGF5ZXIpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblpvb21Ub0xheWVyUHJvcGVydHlDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cbiAgICAgICAgICA8L1NldHRpbmdTZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./your-extensions/widgets/add-layers/src/setting/setting.tsx\n");

/***/ }),

/***/ "./your-extensions/widgets/add-layers/src/setting/translations/default.ts":
/*!********************************************************************************!*\
  !*** ./your-extensions/widgets/add-layers/src/setting/translations/default.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    settings: \"Settings\",\n    zoomToLayer: \"Zoom to layer\",\n    selectMapWidget: \"Select Map widget\"\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9hZGQtbGF5ZXJzL3NyYy9zZXR0aW5nL3RyYW5zbGF0aW9ucy9kZWZhdWx0LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2FkZC1sYXllcnMvc3JjL3NldHRpbmcvdHJhbnNsYXRpb25zL2RlZmF1bHQudHM/MjA5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIHNldHRpbmdzOiBcIlNldHRpbmdzXCIsXG4gIHpvb21Ub0xheWVyOiBcIlpvb20gdG8gbGF5ZXJcIixcbiAgc2VsZWN0TWFwV2lkZ2V0OiBcIlNlbGVjdCBNYXAgd2lkZ2V0XCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./your-extensions/widgets/add-layers/src/setting/translations/default.ts\n");

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ }),

/***/ "jimu-ui/advanced/setting-components":
/*!******************************************************!*\
  !*** external "jimu-ui/advanced/setting-components" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./jimu-core/lib/set-public-path.ts");
/******/ 	var __webpack_exports__ = __webpack_require__("./your-extensions/widgets/add-layers/src/setting/setting.tsx");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});