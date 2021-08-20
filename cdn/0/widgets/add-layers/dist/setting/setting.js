System.register(["jimu-core","jimu-ui","jimu-ui/advanced/setting-components"], function(__WEBPACK_DYNAMIC_EXPORT__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__, __WEBPACK_EXTERNAL_MODULE_jimu_ui__, __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__;
	return {
		setters: [
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_core__ = module;
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_ui__ = module;
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = module;
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./your-extensions/widgets/add-layers/src/setting/setting.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./your-extensions/widgets/add-layers/src/setting/setting.tsx":
/*!********************************************************************!*\
  !*** ./your-extensions/widgets/add-layers/src/setting/setting.tsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Setting; });\n/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ \"jimu-core\");\n/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jimu_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ \"jimu-ui\");\n/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jimu_ui__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ \"jimu-ui/advanced/setting-components\");\n/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./translations/default */ \"./your-extensions/widgets/add-layers/src/setting/translations/default.ts\");\n/** @jsx jsx */\n/**\n  Licensing\n\n  Copyright 2021 Esri\n\n  Licensed under the Apache License, Version 2.0 (the \"License\"); You\n  may not use this file except in compliance with the License. You may\n  obtain a copy of the License at\n  http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or\n  implied. See the License for the specific language governing\n  permissions and limitations under the License.\n\n  A copy of the license is available in the repository's\n  LICENSE file.\n*/\n\n\n\n\nclass Setting extends jimu_core__WEBPACK_IMPORTED_MODULE_0__[\"React\"].PureComponent {\n    constructor() {\n        super(...arguments);\n        this.onZoomToLayerPropertyChange = (evt) => {\n            this.props.onSettingChange({\n                id: this.props.id,\n                config: this.props.config.set(\"zoomToLayer\", evt.currentTarget.checked)\n            });\n        };\n        this.onMapWidgetSelected = (useMapWidgetIds) => {\n            this.props.onSettingChange({\n                id: this.props.id,\n                useMapWidgetIds: useMapWidgetIds\n            });\n        };\n    }\n    render() {\n        const style = jimu_core__WEBPACK_IMPORTED_MODULE_0__[\"css\"] `\n      .widget-setting-addLayers {\n        .checkbox-row {\n          display: flex;\n          justify-content: space-between;\n          margin-bottom: 8px;\n        }\n      }\n    `;\n        return (Object(jimu_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", { css: style },\n            Object(jimu_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", { className: \"widget-setting-addLayers\" },\n                Object(jimu_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__[\"SettingSection\"], { className: \"map-selector-section\", title: this.props.intl.formatMessage({\n                        id: \"mapWidgetLabel\",\n                        defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_3__[\"default\"].selectMapWidget\n                    }) },\n                    Object(jimu_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__[\"SettingRow\"], null,\n                        Object(jimu_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__[\"JimuMapViewSelector\"], { onSelect: this.onMapWidgetSelected, useMapWidgetIds: this.props.useMapWidgetIds }))),\n                Object(jimu_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__[\"SettingSection\"], { title: this.props.intl.formatMessage({\n                        id: \"settingsLabel\",\n                        defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_3__[\"default\"].settings\n                    }) },\n                    Object(jimu_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__[\"SettingRow\"], null,\n                        Object(jimu_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", { className: \"w-100 addLayers\" },\n                            Object(jimu_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", { className: \"checkbox-row\" },\n                                Object(jimu_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"label\", null,\n                                    Object(jimu_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(jimu_core__WEBPACK_IMPORTED_MODULE_0__[\"FormattedMessage\"], { id: \"zoomToLayer\", defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_3__[\"default\"].zoomToLayer })),\n                                Object(jimu_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(jimu_ui__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], { checked: (this.props.config && this.props.config.zoomToLayer) ||\n                                        false, onChange: this.onZoomToLayerPropertyChange }))))))));\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9hZGQtbGF5ZXJzL3NyYy9zZXR0aW5nL3NldHRpbmcudHN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4veW91ci1leHRlbnNpb25zL3dpZGdldHMvYWRkLWxheWVycy9zcmMvc2V0dGluZy9zZXR0aW5nLnRzeD83N2IxIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuLyoqXG4gIExpY2Vuc2luZ1xuXG4gIENvcHlyaWdodCAyMDIxIEVzcmlcblxuICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyBZb3VcbiAgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXlcbiAgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yXG4gIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZ1xuICBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG5cbiAgQSBjb3B5IG9mIHRoZSBsaWNlbnNlIGlzIGF2YWlsYWJsZSBpbiB0aGUgcmVwb3NpdG9yeSdzXG4gIExJQ0VOU0UgZmlsZS5cbiovXG5pbXBvcnQgeyBSZWFjdCwgRm9ybWF0dGVkTWVzc2FnZSwgY3NzLCBqc3ggfSBmcm9tIFwiamltdS1jb3JlXCI7XG5pbXBvcnQgeyBBbGxXaWRnZXRTZXR0aW5nUHJvcHMgfSBmcm9tIFwiamltdS1mb3ItYnVpbGRlclwiO1xuaW1wb3J0IHsgU3dpdGNoIH0gZnJvbSBcImppbXUtdWlcIjtcbmltcG9ydCB7XG4gIEppbXVNYXBWaWV3U2VsZWN0b3IsXG4gIFNldHRpbmdTZWN0aW9uLFxuICBTZXR0aW5nUm93XG59IGZyb20gXCJqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgSU1Db25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCI7XG5pbXBvcnQgZGVmYXVsdE1lc3NhZ2VzIGZyb20gXCIuL3RyYW5zbGF0aW9ucy9kZWZhdWx0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmcgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFxuICBBbGxXaWRnZXRTZXR0aW5nUHJvcHM8SU1Db25maWc+LFxuICBhbnlcbj4ge1xuICBvblpvb21Ub0xheWVyUHJvcGVydHlDaGFuZ2UgPSAoZXZ0OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XG4gICAgICBpZDogdGhpcy5wcm9wcy5pZCxcbiAgICAgIGNvbmZpZzogdGhpcy5wcm9wcy5jb25maWcuc2V0KFwiem9vbVRvTGF5ZXJcIiwgZXZ0LmN1cnJlbnRUYXJnZXQuY2hlY2tlZClcbiAgICB9KTtcbiAgfTtcblxuICBvbk1hcFdpZGdldFNlbGVjdGVkID0gKHVzZU1hcFdpZGdldElkczogc3RyaW5nW10pID0+IHtcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XG4gICAgICBpZDogdGhpcy5wcm9wcy5pZCxcbiAgICAgIHVzZU1hcFdpZGdldElkczogdXNlTWFwV2lkZ2V0SWRzXG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHN0eWxlID0gY3NzYFxuICAgICAgLndpZGdldC1zZXR0aW5nLWFkZExheWVycyB7XG4gICAgICAgIC5jaGVja2JveC1yb3cge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGA7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY3NzPXtzdHlsZX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LXNldHRpbmctYWRkTGF5ZXJzXCI+XG4gICAgICAgICAgPFNldHRpbmdTZWN0aW9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtYXAtc2VsZWN0b3Itc2VjdGlvblwiXG4gICAgICAgICAgICB0aXRsZT17dGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICBpZDogXCJtYXBXaWRnZXRMYWJlbFwiLFxuICAgICAgICAgICAgICBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzLnNlbGVjdE1hcFdpZGdldFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgey8qXG4gICAgICAgICAgICA8U2V0dGluZ1Jvdz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXAtc2VsZWN0b3ItZGVzY3JpcHRcIj57dGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2Uoe2lkOiAnc291cmNlRGVzY3JpcHQnLCBkZWZhdWx0TWVzc2FnZTogJ3NldCBhbiBpbnRlcmFjdGl2ZSBtYXAgKionfSl9PC9kaXY+XG4gICAgICAgICAgICA8L1NldHRpbmdSb3c+XG4gICAgICAgICAgICAqL31cbiAgICAgICAgICAgIDxTZXR0aW5nUm93PlxuICAgICAgICAgICAgICA8SmltdU1hcFZpZXdTZWxlY3RvclxuICAgICAgICAgICAgICAgIG9uU2VsZWN0PXt0aGlzLm9uTWFwV2lkZ2V0U2VsZWN0ZWR9XG4gICAgICAgICAgICAgICAgdXNlTWFwV2lkZ2V0SWRzPXt0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cbiAgICAgICAgICA8L1NldHRpbmdTZWN0aW9uPlxuXG4gICAgICAgICAgPFNldHRpbmdTZWN0aW9uXG4gICAgICAgICAgICB0aXRsZT17dGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICBpZDogXCJzZXR0aW5nc0xhYmVsXCIsXG4gICAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXMuc2V0dGluZ3NcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxTZXR0aW5nUm93PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwIGFkZExheWVyc1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tib3gtcm93XCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ6b29tVG9MYXllclwiXG4gICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2U9e2RlZmF1bHRNZXNzYWdlcy56b29tVG9MYXllcn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8U3dpdGNoXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e1xuICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLmNvbmZpZyAmJiB0aGlzLnByb3BzLmNvbmZpZy56b29tVG9MYXllcikgfHxcbiAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uWm9vbVRvTGF5ZXJQcm9wZXJ0eUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9TZXR0aW5nUm93PlxuICAgICAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7QUFDQTtBQUVBO0FBQ0E7QUFNQTtBQUVBO0FBQUE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaUVBO0FBL0RBO0FBQ0E7Ozs7Ozs7O0FBUUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFHQTtBQVdBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./your-extensions/widgets/add-layers/src/setting/setting.tsx\n");

/***/ }),

/***/ "./your-extensions/widgets/add-layers/src/setting/translations/default.ts":
/*!********************************************************************************!*\
  !*** ./your-extensions/widgets/add-layers/src/setting/translations/default.ts ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    settings: \"Settings\",\n    zoomToLayer: \"Zoom to layer\",\n    selectMapWidget: \"Select Map widget\"\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9hZGQtbGF5ZXJzL3NyYy9zZXR0aW5nL3RyYW5zbGF0aW9ucy9kZWZhdWx0LnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4veW91ci1leHRlbnNpb25zL3dpZGdldHMvYWRkLWxheWVycy9zcmMvc2V0dGluZy90cmFuc2xhdGlvbnMvZGVmYXVsdC50cz8yMDkyIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgc2V0dGluZ3M6IFwiU2V0dGluZ3NcIixcbiAgem9vbVRvTGF5ZXI6IFwiWm9vbSB0byBsYXllclwiLFxuICBzZWxlY3RNYXBXaWRnZXQ6IFwiU2VsZWN0IE1hcCB3aWRnZXRcIlxufTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./your-extensions/widgets/add-layers/src/setting/translations/default.ts\n");

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamltdS1jb3JlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiamltdS1jb3JlXCI/YzY5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///jimu-core\n");

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamltdS11aS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImppbXUtdWlcIj8zNTQzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///jimu-ui\n");

/***/ }),

/***/ "jimu-ui/advanced/setting-components":
/*!******************************************************!*\
  !*** external "jimu-ui/advanced/setting-components" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50c1wiP2RlZTIiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfYWR2YW5jZWRfc2V0dGluZ19jb21wb25lbnRzX187Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///jimu-ui/advanced/setting-components\n");

/***/ })

/******/ })
			);
		}
	};
});