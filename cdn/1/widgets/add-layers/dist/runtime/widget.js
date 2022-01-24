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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Widget)\n/* harmony export */ });\n/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ \"jimu-core\");\n/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ \"jimu-arcgis\");\n/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translations/default */ \"./your-extensions/widgets/add-layers/src/runtime/translations/default.ts\");\n/** @jsx jsx */\n/**\n  Licensing\n\n  Copyright 2022 Esri\n\n  Licensed under the Apache License, Version 2.0 (the \"License\"); You\n  may not use this file except in compliance with the License. You may\n  obtain a copy of the License at\n  http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or\n  implied. See the License for the specific language governing\n  permissions and limitations under the License.\n\n  A copy of the license is available in the repository's\n  LICENSE file.\n*/\n\n\n\nclass Widget extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {\n    constructor() {\n        super(...arguments);\n        this.state = {\n            featureServiceUrlInput: \"\",\n            jimuMapView: null,\n        };\n        // Every time the input box value changes, this function gets called.\n        // We set our component's state so we can use the value in the formSubmit function.\n        this.handleFeatureServiceUrlInputChange = (event) => {\n            this.setState({\n                featureServiceUrlInput: event.target.value,\n            });\n        };\n        this.formSubmit = (evt) => {\n            evt.preventDefault();\n            // Error cases\n            if (!this.state.jimuMapView) {\n                // Data Source was not configured - we cannot do anything.\n                console.error(\"Please configure a Data Source with the widget.\");\n                return;\n            }\n            if (this.state.featureServiceUrlInput == \"\") {\n                // Nothing was typed into the box!\n                alert(\"Please copy/paste in a FeatureService URL\");\n                return;\n            }\n            // Lazy-loading (only load if/when needed) the ArcGIS API for JavaScript modules\n            // that we need - only once the \"Add Layer\" button is pressed.\n            (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)([\n                \"esri/layers/FeatureLayer\",\n                \"esri/tasks/support/Query\",\n                \"esri/geometry/SpatialReference\",\n            ]).then((modules) => {\n                [this.FeatureLayer, this.Query, this.SpatialReference] = modules;\n                // First create the Feature Layer from the URL that is in the box.\n                const layer = new this.FeatureLayer({\n                    url: this.state.featureServiceUrlInput,\n                });\n                // Add the layer to the map (accessed through the Experience Builder Data Source)\n                this.state.jimuMapView.view.map.add(layer);\n                // After the layer is created, zoom to the layer's extent, if the setting is set for that.\n                layer.on(\"layerview-create\", (event) => {\n                    if (this.props.config.hasOwnProperty(\"zoomToLayer\") &&\n                        this.props.config.zoomToLayer === true) {\n                        const query = new this.Query();\n                        query.where = \"1=1\";\n                        query.outSpatialReference = new this.SpatialReference({\n                            wkid: 102100,\n                        });\n                        layer.queryExtent(query).then((results) => {\n                            this.state.jimuMapView.view.extent = results.extent;\n                        });\n                    }\n                    // Process of adding the layer is complete - remove the layer URL from the box so we can add another\n                    this.setState({\n                        featureServiceUrlInput: \"\",\n                    });\n                });\n            });\n        };\n    }\n    render() {\n        var _a;\n        const style = jimu_core__WEBPACK_IMPORTED_MODULE_0__.css `\n      form > div {\n        display: flex;\n        justify-content: space-between;\n        input {\n          width: 100%;\n        }\n        button {\n          min-width: 100px;\n        }\n      }\n    `;\n        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: \"widget-addLayers jimu-widget p-2\", css: style },\n            this.props.hasOwnProperty(\"useMapWidgetIds\") &&\n                this.props.useMapWidgetIds &&\n                this.props.useMapWidgetIds.length === 1 && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.JimuMapViewComponent, { useMapWidgetId: (_a = this.props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0], onActiveViewChange: (jmv) => {\n                    this.setState({\n                        jimuMapView: jmv,\n                    });\n                } })),\n            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", null, _translations_default__WEBPACK_IMPORTED_MODULE_2__[\"default\"].instructions),\n            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"form\", { onSubmit: this.formSubmit },\n                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", null,\n                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", { type: \"text\", placeholder: _translations_default__WEBPACK_IMPORTED_MODULE_2__[\"default\"].featureServiceUrl, value: this.state.featureServiceUrlInput, onChange: this.handleFeatureServiceUrlInputChange }),\n                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", null, _translations_default__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addLayer)))));\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9hZGQtbGF5ZXJzL3NyYy9ydW50aW1lL3dpZGdldC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTtBQUNBO0FBQ0E7QUFRQTtBQU9BO0FBQUE7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE4Q0E7QUE1Q0E7O0FBQ0E7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFNQTtBQUtBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvYWRkLWxheWVycy9zcmMvcnVudGltZS93aWRnZXQudHN4P2ZkMGQiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG4vKipcbiAgTGljZW5zaW5nXG5cbiAgQ29weXJpZ2h0IDIwMjIgRXNyaVxuXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IFlvdVxuICBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heVxuICBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4gIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3JcbiAgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nXG4gIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cblxuICBBIGNvcHkgb2YgdGhlIGxpY2Vuc2UgaXMgYXZhaWxhYmxlIGluIHRoZSByZXBvc2l0b3J5J3NcbiAgTElDRU5TRSBmaWxlLlxuKi9cbmltcG9ydCB7IFJlYWN0LCBBbGxXaWRnZXRQcm9wcywgY3NzLCBqc3ggfSBmcm9tIFwiamltdS1jb3JlXCI7XG5pbXBvcnQge1xuICBsb2FkQXJjR0lTSlNBUElNb2R1bGVzLFxuICBKaW11TWFwVmlld0NvbXBvbmVudCxcbiAgSmltdU1hcFZpZXcsXG59IGZyb20gXCJqaW11LWFyY2dpc1wiO1xuXG5pbXBvcnQgeyBJTUNvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcblxuaW1wb3J0IGRlZmF1bHRNZXNzYWdlcyBmcm9tIFwiLi90cmFuc2xhdGlvbnMvZGVmYXVsdFwiO1xuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbiAgZmVhdHVyZVNlcnZpY2VVcmxJbnB1dDogc3RyaW5nO1xuICBqaW11TWFwVmlldzogSmltdU1hcFZpZXc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpZGdldCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8XG4gIEFsbFdpZGdldFByb3BzPElNQ29uZmlnPixcbiAgSVN0YXRlXG4+IHtcbiAgLy8gR2l2ZSB0eXBlcyB0byB0aGUgbW9kdWxlcyB3ZSBpbXBvcnQgZnJvbSB0aGUgQXJjR0lTIEFQSSBmb3IgSmF2YVNjcmlwdFxuICAvLyB0byB0ZWxsIFR5cGVTY3JpcHQgd2hhdCB0eXBlcyB0aGV5IGFyZS5cbiAgRmVhdHVyZUxheWVyOiB0eXBlb2YgX19lc3JpLkZlYXR1cmVMYXllcjtcbiAgUXVlcnk6IHR5cGVvZiBfX2VzcmkuUXVlcnk7XG4gIFNwYXRpYWxSZWZlcmVuY2U6IHR5cGVvZiBfX2VzcmkuU3BhdGlhbFJlZmVyZW5jZTtcblxuICBzdGF0ZSA9IHtcbiAgICBmZWF0dXJlU2VydmljZVVybElucHV0OiBcIlwiLFxuICAgIGppbXVNYXBWaWV3OiBudWxsLFxuICB9O1xuXG4gIC8vIEV2ZXJ5IHRpbWUgdGhlIGlucHV0IGJveCB2YWx1ZSBjaGFuZ2VzLCB0aGlzIGZ1bmN0aW9uIGdldHMgY2FsbGVkLlxuICAvLyBXZSBzZXQgb3VyIGNvbXBvbmVudCdzIHN0YXRlIHNvIHdlIGNhbiB1c2UgdGhlIHZhbHVlIGluIHRoZSBmb3JtU3VibWl0IGZ1bmN0aW9uLlxuICBoYW5kbGVGZWF0dXJlU2VydmljZVVybElucHV0Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBmZWF0dXJlU2VydmljZVVybElucHV0OiBldmVudC50YXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH07XG5cbiAgZm9ybVN1Ym1pdCA9IChldnQpID0+IHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIC8vIEVycm9yIGNhc2VzXG4gICAgaWYgKCF0aGlzLnN0YXRlLmppbXVNYXBWaWV3KSB7XG4gICAgICAvLyBEYXRhIFNvdXJjZSB3YXMgbm90IGNvbmZpZ3VyZWQgLSB3ZSBjYW5ub3QgZG8gYW55dGhpbmcuXG4gICAgICBjb25zb2xlLmVycm9yKFwiUGxlYXNlIGNvbmZpZ3VyZSBhIERhdGEgU291cmNlIHdpdGggdGhlIHdpZGdldC5cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLmZlYXR1cmVTZXJ2aWNlVXJsSW5wdXQgPT0gXCJcIikge1xuICAgICAgLy8gTm90aGluZyB3YXMgdHlwZWQgaW50byB0aGUgYm94IVxuICAgICAgYWxlcnQoXCJQbGVhc2UgY29weS9wYXN0ZSBpbiBhIEZlYXR1cmVTZXJ2aWNlIFVSTFwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBMYXp5LWxvYWRpbmcgKG9ubHkgbG9hZCBpZi93aGVuIG5lZWRlZCkgdGhlIEFyY0dJUyBBUEkgZm9yIEphdmFTY3JpcHQgbW9kdWxlc1xuICAgIC8vIHRoYXQgd2UgbmVlZCAtIG9ubHkgb25jZSB0aGUgXCJBZGQgTGF5ZXJcIiBidXR0b24gaXMgcHJlc3NlZC5cbiAgICBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcbiAgICAgIFwiZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyXCIsXG4gICAgICBcImVzcmkvdGFza3Mvc3VwcG9ydC9RdWVyeVwiLFxuICAgICAgXCJlc3JpL2dlb21ldHJ5L1NwYXRpYWxSZWZlcmVuY2VcIixcbiAgICBdKS50aGVuKChtb2R1bGVzKSA9PiB7XG4gICAgICBbdGhpcy5GZWF0dXJlTGF5ZXIsIHRoaXMuUXVlcnksIHRoaXMuU3BhdGlhbFJlZmVyZW5jZV0gPSBtb2R1bGVzO1xuXG4gICAgICAvLyBGaXJzdCBjcmVhdGUgdGhlIEZlYXR1cmUgTGF5ZXIgZnJvbSB0aGUgVVJMIHRoYXQgaXMgaW4gdGhlIGJveC5cbiAgICAgIGNvbnN0IGxheWVyID0gbmV3IHRoaXMuRmVhdHVyZUxheWVyKHtcbiAgICAgICAgdXJsOiB0aGlzLnN0YXRlLmZlYXR1cmVTZXJ2aWNlVXJsSW5wdXQsXG4gICAgICB9KTtcblxuICAgICAgLy8gQWRkIHRoZSBsYXllciB0byB0aGUgbWFwIChhY2Nlc3NlZCB0aHJvdWdoIHRoZSBFeHBlcmllbmNlIEJ1aWxkZXIgRGF0YSBTb3VyY2UpXG4gICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcubWFwLmFkZChsYXllcik7XG5cbiAgICAgIC8vIEFmdGVyIHRoZSBsYXllciBpcyBjcmVhdGVkLCB6b29tIHRvIHRoZSBsYXllcidzIGV4dGVudCwgaWYgdGhlIHNldHRpbmcgaXMgc2V0IGZvciB0aGF0LlxuICAgICAgbGF5ZXIub24oXCJsYXllcnZpZXctY3JlYXRlXCIsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdGhpcy5wcm9wcy5jb25maWcuaGFzT3duUHJvcGVydHkoXCJ6b29tVG9MYXllclwiKSAmJlxuICAgICAgICAgIHRoaXMucHJvcHMuY29uZmlnLnpvb21Ub0xheWVyID09PSB0cnVlXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gbmV3IHRoaXMuUXVlcnkoKTtcbiAgICAgICAgICBxdWVyeS53aGVyZSA9IFwiMT0xXCI7XG4gICAgICAgICAgcXVlcnkub3V0U3BhdGlhbFJlZmVyZW5jZSA9IG5ldyB0aGlzLlNwYXRpYWxSZWZlcmVuY2Uoe1xuICAgICAgICAgICAgd2tpZDogMTAyMTAwLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGxheWVyLnF1ZXJ5RXh0ZW50KHF1ZXJ5KS50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcuZXh0ZW50ID0gcmVzdWx0cy5leHRlbnQ7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQcm9jZXNzIG9mIGFkZGluZyB0aGUgbGF5ZXIgaXMgY29tcGxldGUgLSByZW1vdmUgdGhlIGxheWVyIFVSTCBmcm9tIHRoZSBib3ggc28gd2UgY2FuIGFkZCBhbm90aGVyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGZlYXR1cmVTZXJ2aWNlVXJsSW5wdXQ6IFwiXCIsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHN0eWxlID0gY3NzYFxuICAgICAgZm9ybSA+IGRpdiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGA7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWFkZExheWVycyBqaW11LXdpZGdldCBwLTJcIiBjc3M9e3N0eWxlfT5cbiAgICAgICAge3RoaXMucHJvcHMuaGFzT3duUHJvcGVydHkoXCJ1c2VNYXBXaWRnZXRJZHNcIikgJiZcbiAgICAgICAgICB0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcyAmJlxuICAgICAgICAgIHRoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzLmxlbmd0aCA9PT0gMSAmJiAoXG4gICAgICAgICAgICA8SmltdU1hcFZpZXdDb21wb25lbnRcbiAgICAgICAgICAgICAgdXNlTWFwV2lkZ2V0SWQ9e3RoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzPy5bMF19XG4gICAgICAgICAgICAgIG9uQWN0aXZlVmlld0NoYW5nZT17KGptdjogSmltdU1hcFZpZXcpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgIGppbXVNYXBWaWV3OiBqbXYsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG5cbiAgICAgICAgPHA+e2RlZmF1bHRNZXNzYWdlcy5pbnN0cnVjdGlvbnN9PC9wPlxuXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmZvcm1TdWJtaXR9PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17ZGVmYXVsdE1lc3NhZ2VzLmZlYXR1cmVTZXJ2aWNlVXJsfVxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5mZWF0dXJlU2VydmljZVVybElucHV0fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVGZWF0dXJlU2VydmljZVVybElucHV0Q2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b24+e2RlZmF1bHRNZXNzYWdlcy5hZGRMYXllcn08L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./your-extensions/widgets/add-layers/src/runtime/widget.tsx\n");

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