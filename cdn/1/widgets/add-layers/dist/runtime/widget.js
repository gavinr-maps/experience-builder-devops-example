/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
System.register(["jimu-core","jimu-arcgis"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
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

/***/ "./your-extensions/widgets/add-layers/src/runtime/translations/default.ts":
/*!********************************************************************************!*\
  !*** ./your-extensions/widgets/add-layers/src/runtime/translations/default.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    _widgetLabel: \"Add Layers\",\n    addLayer: \"Add Layer\",\n    featureServiceUrl: \"Feature Service URL\",\n    instructions: \"Copy/paste a FeatureService Layer URL here to add it to the map.\"\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9hZGQtbGF5ZXJzL3NyYy9ydW50aW1lL3RyYW5zbGF0aW9ucy9kZWZhdWx0LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvYWRkLWxheWVycy9zcmMvcnVudGltZS90cmFuc2xhdGlvbnMvZGVmYXVsdC50cz80YzhkIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgX3dpZGdldExhYmVsOiBcIkFkZCBMYXllcnNcIixcbiAgYWRkTGF5ZXI6IFwiQWRkIExheWVyXCIsXG4gIGZlYXR1cmVTZXJ2aWNlVXJsOiBcIkZlYXR1cmUgU2VydmljZSBVUkxcIixcbiAgaW5zdHJ1Y3Rpb25zOlxuICAgIFwiQ29weS9wYXN0ZSBhIEZlYXR1cmVTZXJ2aWNlIExheWVyIFVSTCBoZXJlIHRvIGFkZCBpdCB0byB0aGUgbWFwLlwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./your-extensions/widgets/add-layers/src/runtime/translations/default.ts\n");

/***/ }),

/***/ "./your-extensions/widgets/add-layers/src/runtime/widget.tsx":
/*!*******************************************************************!*\
  !*** ./your-extensions/widgets/add-layers/src/runtime/widget.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Widget)\n/* harmony export */ });\n/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ \"jimu-core\");\n/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ \"jimu-arcgis\");\n/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translations/default */ \"./your-extensions/widgets/add-layers/src/runtime/translations/default.ts\");\n/** @jsx jsx */\n/**\n  Licensing\n\n  Copyright 2021 Esri\n\n  Licensed under the Apache License, Version 2.0 (the \"License\"); You\n  may not use this file except in compliance with the License. You may\n  obtain a copy of the License at\n  http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or\n  implied. See the License for the specific language governing\n  permissions and limitations under the License.\n\n  A copy of the license is available in the repository's\n  LICENSE file.\n*/\n\n\n\nclass Widget extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {\n    constructor() {\n        super(...arguments);\n        this.state = {\n            featureServiceUrlInput: \"\",\n            jimuMapView: null,\n        };\n        // Every time the input box value changes, this function gets called.\n        // We set our component's state so we can use the value in the formSubmit function.\n        this.handleFeatureServiceUrlInputChange = (event) => {\n            this.setState({\n                featureServiceUrlInput: event.target.value,\n            });\n        };\n        this.formSubmit = (evt) => {\n            evt.preventDefault();\n            // Error cases\n            if (!this.state.jimuMapView) {\n                // Data Source was not configured - we cannot do anything.\n                console.error(\"Please configure a Data Source with the widget.\");\n                return;\n            }\n            if (this.state.featureServiceUrlInput == \"\") {\n                // Nothing was typed into the box!\n                alert(\"Please copy/paste in a FeatureService URL\");\n                return;\n            }\n            // Lazy-loading (only load if/when needed) the ArcGIS API for JavaScript modules\n            // that we need - only once the \"Add Layer\" button is pressed.\n            (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)([\n                \"esri/layers/FeatureLayer\",\n                \"esri/tasks/support/Query\",\n                \"esri/geometry/SpatialReference\",\n            ]).then((modules) => {\n                [this.FeatureLayer, this.Query, this.SpatialReference] = modules;\n                // First create the Feature Layer from the URL that is in the box.\n                const layer = new this.FeatureLayer({\n                    url: this.state.featureServiceUrlInput,\n                });\n                // Add the layer to the map (accessed through the Experience Builder Data Source)\n                this.state.jimuMapView.view.map.add(layer);\n                // After the layer is created, zoom to the layer's extent, if the setting is set for that.\n                layer.on(\"layerview-create\", (event) => {\n                    if (this.props.config.hasOwnProperty(\"zoomToLayer\") &&\n                        this.props.config.zoomToLayer === true) {\n                        const query = new this.Query();\n                        query.where = \"1=1\";\n                        query.outSpatialReference = new this.SpatialReference({\n                            wkid: 102100,\n                        });\n                        layer.queryExtent(query).then((results) => {\n                            this.state.jimuMapView.view.extent = results.extent;\n                        });\n                    }\n                    // Process of adding the layer is complete - remove the layer URL from the box so we can add another\n                    this.setState({\n                        featureServiceUrlInput: \"\",\n                    });\n                });\n            });\n        };\n    }\n    render() {\n        var _a;\n        const style = jimu_core__WEBPACK_IMPORTED_MODULE_0__.css `\n      form > div {\n        display: flex;\n        justify-content: space-between;\n        input {\n          width: 100%;\n        }\n        button {\n          min-width: 100px;\n        }\n      }\n    `;\n        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: \"widget-addLayers jimu-widget p-2\", css: style },\n            this.props.hasOwnProperty(\"useMapWidgetIds\") &&\n                this.props.useMapWidgetIds &&\n                this.props.useMapWidgetIds.length === 1 && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.JimuMapViewComponent, { useMapWidgetId: (_a = this.props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0], onActiveViewChange: (jmv) => {\n                    this.setState({\n                        jimuMapView: jmv,\n                    });\n                } })),\n            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", null,\n                _translations_default__WEBPACK_IMPORTED_MODULE_2__.default.instructions,\n                \" (\",\n                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", { href: \"https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer/0\", target: \"_blank\" }, \"example\"),\n                \")\"),\n            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"form\", { onSubmit: this.formSubmit },\n                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", null,\n                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", { type: \"text\", placeholder: _translations_default__WEBPACK_IMPORTED_MODULE_2__.default.featureServiceUrl, value: this.state.featureServiceUrlInput, onChange: this.handleFeatureServiceUrlInputChange }),\n                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", null, _translations_default__WEBPACK_IMPORTED_MODULE_2__.default.addLayer)))));\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9hZGQtbGF5ZXJzL3NyYy9ydW50aW1lL3dpZGdldC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTtBQUNBO0FBQ0E7QUFRQTtBQU9BO0FBQUE7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE4Q0E7QUE1Q0E7O0FBQ0E7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFBQTs7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBTUE7QUFLQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2FkZC1sYXllcnMvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeD9mZDBkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuLyoqXG4gIExpY2Vuc2luZ1xuXG4gIENvcHlyaWdodCAyMDIxIEVzcmlcblxuICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyBZb3VcbiAgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXlcbiAgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yXG4gIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZ1xuICBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG5cbiAgQSBjb3B5IG9mIHRoZSBsaWNlbnNlIGlzIGF2YWlsYWJsZSBpbiB0aGUgcmVwb3NpdG9yeSdzXG4gIExJQ0VOU0UgZmlsZS5cbiovXG5pbXBvcnQgeyBSZWFjdCwgQWxsV2lkZ2V0UHJvcHMsIGNzcywganN4IH0gZnJvbSBcImppbXUtY29yZVwiO1xuaW1wb3J0IHtcbiAgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyxcbiAgSmltdU1hcFZpZXdDb21wb25lbnQsXG4gIEppbXVNYXBWaWV3LFxufSBmcm9tIFwiamltdS1hcmNnaXNcIjtcblxuaW1wb3J0IHsgSU1Db25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCI7XG5cbmltcG9ydCBkZWZhdWx0TWVzc2FnZXMgZnJvbSBcIi4vdHJhbnNsYXRpb25zL2RlZmF1bHRcIjtcblxuaW50ZXJmYWNlIElTdGF0ZSB7XG4gIGZlYXR1cmVTZXJ2aWNlVXJsSW5wdXQ6IHN0cmluZztcbiAgamltdU1hcFZpZXc6IEppbXVNYXBWaWV3O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaWRnZXQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFxuICBBbGxXaWRnZXRQcm9wczxJTUNvbmZpZz4sXG4gIElTdGF0ZVxuPiB7XG4gIC8vIEdpdmUgdHlwZXMgdG8gdGhlIG1vZHVsZXMgd2UgaW1wb3J0IGZyb20gdGhlIEFyY0dJUyBBUEkgZm9yIEphdmFTY3JpcHRcbiAgLy8gdG8gdGVsbCBUeXBlU2NyaXB0IHdoYXQgdHlwZXMgdGhleSBhcmUuXG4gIEZlYXR1cmVMYXllcjogdHlwZW9mIF9fZXNyaS5GZWF0dXJlTGF5ZXI7XG4gIFF1ZXJ5OiB0eXBlb2YgX19lc3JpLlF1ZXJ5O1xuICBTcGF0aWFsUmVmZXJlbmNlOiB0eXBlb2YgX19lc3JpLlNwYXRpYWxSZWZlcmVuY2U7XG5cbiAgc3RhdGUgPSB7XG4gICAgZmVhdHVyZVNlcnZpY2VVcmxJbnB1dDogXCJcIixcbiAgICBqaW11TWFwVmlldzogbnVsbCxcbiAgfTtcblxuICAvLyBFdmVyeSB0aW1lIHRoZSBpbnB1dCBib3ggdmFsdWUgY2hhbmdlcywgdGhpcyBmdW5jdGlvbiBnZXRzIGNhbGxlZC5cbiAgLy8gV2Ugc2V0IG91ciBjb21wb25lbnQncyBzdGF0ZSBzbyB3ZSBjYW4gdXNlIHRoZSB2YWx1ZSBpbiB0aGUgZm9ybVN1Ym1pdCBmdW5jdGlvbi5cbiAgaGFuZGxlRmVhdHVyZVNlcnZpY2VVcmxJbnB1dENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZmVhdHVyZVNlcnZpY2VVcmxJbnB1dDogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuICB9O1xuXG4gIGZvcm1TdWJtaXQgPSAoZXZ0KSA9PiB7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAvLyBFcnJvciBjYXNlc1xuICAgIGlmICghdGhpcy5zdGF0ZS5qaW11TWFwVmlldykge1xuICAgICAgLy8gRGF0YSBTb3VyY2Ugd2FzIG5vdCBjb25maWd1cmVkIC0gd2UgY2Fubm90IGRvIGFueXRoaW5nLlxuICAgICAgY29uc29sZS5lcnJvcihcIlBsZWFzZSBjb25maWd1cmUgYSBEYXRhIFNvdXJjZSB3aXRoIHRoZSB3aWRnZXQuXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5mZWF0dXJlU2VydmljZVVybElucHV0ID09IFwiXCIpIHtcbiAgICAgIC8vIE5vdGhpbmcgd2FzIHR5cGVkIGludG8gdGhlIGJveCFcbiAgICAgIGFsZXJ0KFwiUGxlYXNlIGNvcHkvcGFzdGUgaW4gYSBGZWF0dXJlU2VydmljZSBVUkxcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gTGF6eS1sb2FkaW5nIChvbmx5IGxvYWQgaWYvd2hlbiBuZWVkZWQpIHRoZSBBcmNHSVMgQVBJIGZvciBKYXZhU2NyaXB0IG1vZHVsZXNcbiAgICAvLyB0aGF0IHdlIG5lZWQgLSBvbmx5IG9uY2UgdGhlIFwiQWRkIExheWVyXCIgYnV0dG9uIGlzIHByZXNzZWQuXG4gICAgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbXG4gICAgICBcImVzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllclwiLFxuICAgICAgXCJlc3JpL3Rhc2tzL3N1cHBvcnQvUXVlcnlcIixcbiAgICAgIFwiZXNyaS9nZW9tZXRyeS9TcGF0aWFsUmVmZXJlbmNlXCIsXG4gICAgXSkudGhlbigobW9kdWxlcykgPT4ge1xuICAgICAgW3RoaXMuRmVhdHVyZUxheWVyLCB0aGlzLlF1ZXJ5LCB0aGlzLlNwYXRpYWxSZWZlcmVuY2VdID0gbW9kdWxlcztcblxuICAgICAgLy8gRmlyc3QgY3JlYXRlIHRoZSBGZWF0dXJlIExheWVyIGZyb20gdGhlIFVSTCB0aGF0IGlzIGluIHRoZSBib3guXG4gICAgICBjb25zdCBsYXllciA9IG5ldyB0aGlzLkZlYXR1cmVMYXllcih7XG4gICAgICAgIHVybDogdGhpcy5zdGF0ZS5mZWF0dXJlU2VydmljZVVybElucHV0LFxuICAgICAgfSk7XG5cbiAgICAgIC8vIEFkZCB0aGUgbGF5ZXIgdG8gdGhlIG1hcCAoYWNjZXNzZWQgdGhyb3VnaCB0aGUgRXhwZXJpZW5jZSBCdWlsZGVyIERhdGEgU291cmNlKVxuICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3Lm1hcC5hZGQobGF5ZXIpO1xuXG4gICAgICAvLyBBZnRlciB0aGUgbGF5ZXIgaXMgY3JlYXRlZCwgem9vbSB0byB0aGUgbGF5ZXIncyBleHRlbnQsIGlmIHRoZSBzZXR0aW5nIGlzIHNldCBmb3IgdGhhdC5cbiAgICAgIGxheWVyLm9uKFwibGF5ZXJ2aWV3LWNyZWF0ZVwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRoaXMucHJvcHMuY29uZmlnLmhhc093blByb3BlcnR5KFwiem9vbVRvTGF5ZXJcIikgJiZcbiAgICAgICAgICB0aGlzLnByb3BzLmNvbmZpZy56b29tVG9MYXllciA9PT0gdHJ1ZVxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCBxdWVyeSA9IG5ldyB0aGlzLlF1ZXJ5KCk7XG4gICAgICAgICAgcXVlcnkud2hlcmUgPSBcIjE9MVwiO1xuICAgICAgICAgIHF1ZXJ5Lm91dFNwYXRpYWxSZWZlcmVuY2UgPSBuZXcgdGhpcy5TcGF0aWFsUmVmZXJlbmNlKHtcbiAgICAgICAgICAgIHdraWQ6IDEwMjEwMCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBsYXllci5xdWVyeUV4dGVudChxdWVyeSkudGhlbigocmVzdWx0cykgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3LmV4dGVudCA9IHJlc3VsdHMuZXh0ZW50O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUHJvY2VzcyBvZiBhZGRpbmcgdGhlIGxheWVyIGlzIGNvbXBsZXRlIC0gcmVtb3ZlIHRoZSBsYXllciBVUkwgZnJvbSB0aGUgYm94IHNvIHdlIGNhbiBhZGQgYW5vdGhlclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBmZWF0dXJlU2VydmljZVVybElucHV0OiBcIlwiLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzdHlsZSA9IGNzc2BcbiAgICAgIGZvcm0gPiBkaXYge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1hZGRMYXllcnMgamltdS13aWRnZXQgcC0yXCIgY3NzPXtzdHlsZX0+XG4gICAgICAgIHt0aGlzLnByb3BzLmhhc093blByb3BlcnR5KFwidXNlTWFwV2lkZ2V0SWRzXCIpICYmXG4gICAgICAgICAgdGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHMgJiZcbiAgICAgICAgICB0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcy5sZW5ndGggPT09IDEgJiYgKFxuICAgICAgICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50XG4gICAgICAgICAgICAgIHVzZU1hcFdpZGdldElkPXt0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcz8uWzBdfVxuICAgICAgICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2U9eyhqbXY6IEppbXVNYXBWaWV3KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICBqaW11TWFwVmlldzogam12LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuXG4gICAgICAgIDxwPntkZWZhdWx0TWVzc2FnZXMuaW5zdHJ1Y3Rpb25zfSAoPGEgaHJlZj1cImh0dHBzOi8vc2FtcGxlc2VydmVyNi5hcmNnaXNvbmxpbmUuY29tL2FyY2dpcy9yZXN0L3NlcnZpY2VzL1VTQS9NYXBTZXJ2ZXIvMFwiIHRhcmdldD1cIl9ibGFua1wiPmV4YW1wbGU8L2E+KTwvcD5cblxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5mb3JtU3VibWl0fT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2RlZmF1bHRNZXNzYWdlcy5mZWF0dXJlU2VydmljZVVybH1cbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZmVhdHVyZVNlcnZpY2VVcmxJbnB1dH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRmVhdHVyZVNlcnZpY2VVcmxJbnB1dENoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnV0dG9uPntkZWZhdWx0TWVzc2FnZXMuYWRkTGF5ZXJ9PC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./your-extensions/widgets/add-layers/src/runtime/widget.tsx\n");

/***/ }),

/***/ "jimu-arcgis":
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

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
/******/ 	var __webpack_exports__ = __webpack_require__("./your-extensions/widgets/add-layers/src/runtime/widget.tsx");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});