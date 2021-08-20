System.register(["jimu-arcgis","jimu-core"], function(__WEBPACK_DYNAMIC_EXPORT__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, __WEBPACK_EXTERNAL_MODULE_jimu_core__;
	return {
		setters: [
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = module;
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_core__ = module;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./your-extensions/widgets/add-layers/src/runtime/widget.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./your-extensions/widgets/add-layers/src/runtime/translations/default.ts":
/*!********************************************************************************!*\
  !*** ./your-extensions/widgets/add-layers/src/runtime/translations/default.ts ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    _widgetLabel: \"Add Layers\",\n    addLayer: \"Add Layer\",\n    featureServiceUrl: \"Feature Service URL\",\n    instructions: \"Copy/paste a FeatureService Layer URL here to add it to the map.\"\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9hZGQtbGF5ZXJzL3NyYy9ydW50aW1lL3RyYW5zbGF0aW9ucy9kZWZhdWx0LnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4veW91ci1leHRlbnNpb25zL3dpZGdldHMvYWRkLWxheWVycy9zcmMvcnVudGltZS90cmFuc2xhdGlvbnMvZGVmYXVsdC50cz80YzhkIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgX3dpZGdldExhYmVsOiBcIkFkZCBMYXllcnNcIixcbiAgYWRkTGF5ZXI6IFwiQWRkIExheWVyXCIsXG4gIGZlYXR1cmVTZXJ2aWNlVXJsOiBcIkZlYXR1cmUgU2VydmljZSBVUkxcIixcbiAgaW5zdHJ1Y3Rpb25zOlxuICAgIFwiQ29weS9wYXN0ZSBhIEZlYXR1cmVTZXJ2aWNlIExheWVyIFVSTCBoZXJlIHRvIGFkZCBpdCB0byB0aGUgbWFwLlwiXG59O1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./your-extensions/widgets/add-layers/src/runtime/translations/default.ts\n");

/***/ }),

/***/ "./your-extensions/widgets/add-layers/src/runtime/widget.tsx":
/*!*******************************************************************!*\
  !*** ./your-extensions/widgets/add-layers/src/runtime/widget.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Widget; });\n/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ \"jimu-core\");\n/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jimu_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ \"jimu-arcgis\");\n/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translations/default */ \"./your-extensions/widgets/add-layers/src/runtime/translations/default.ts\");\n/** @jsx jsx */\n/**\n  Licensing\n\n  Copyright 2021 Esri\n\n  Licensed under the Apache License, Version 2.0 (the \"License\"); You\n  may not use this file except in compliance with the License. You may\n  obtain a copy of the License at\n  http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or\n  implied. See the License for the specific language governing\n  permissions and limitations under the License.\n\n  A copy of the license is available in the repository's\n  LICENSE file.\n*/\n\n\n\nclass Widget extends jimu_core__WEBPACK_IMPORTED_MODULE_0__[\"React\"].PureComponent {\n    constructor() {\n        super(...arguments);\n        this.state = {\n            featureServiceUrlInput: \"\",\n            jimuMapView: null,\n        };\n        // Every time the input box value changes, this function gets called.\n        // We set our component's state so we can use the value in the formSubmit function.\n        this.handleFeatureServiceUrlInputChange = (event) => {\n            this.setState({\n                featureServiceUrlInput: event.target.value,\n            });\n        };\n        this.formSubmit = (evt) => {\n            evt.preventDefault();\n            // Error cases\n            if (!this.state.jimuMapView) {\n                // Data Source was not configured - we cannot do anything.\n                console.error(\"Please configure a Data Source with the widget.\");\n                return;\n            }\n            if (this.state.featureServiceUrlInput == \"\") {\n                // Nothing was typed into the box!\n                alert(\"Please copy/paste in a FeatureService URL\");\n                return;\n            }\n            // Lazy-loading (only load if/when needed) the ArcGIS API for JavaScript modules\n            // that we need - only once the \"Add Layer\" button is pressed.\n            Object(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__[\"loadArcGISJSAPIModules\"])([\n                \"esri/layers/FeatureLayer\",\n                \"esri/tasks/support/Query\",\n                \"esri/geometry/SpatialReference\",\n            ]).then((modules) => {\n                [this.FeatureLayer, this.Query, this.SpatialReference] = modules;\n                // First create the Feature Layer from the URL that is in the box.\n                const layer = new this.FeatureLayer({\n                    url: this.state.featureServiceUrlInput,\n                });\n                // Add the layer to the map (accessed through the Experience Builder Data Source)\n                this.state.jimuMapView.view.map.add(layer);\n                // After the layer is created, zoom to the layer's extent, if the setting is set for that.\n                layer.on(\"layerview-create\", (event) => {\n                    if (this.props.config.hasOwnProperty(\"zoomToLayer\") &&\n                        this.props.config.zoomToLayer === true) {\n                        const query = new this.Query();\n                        query.where = \"1=1\";\n                        query.outSpatialReference = new this.SpatialReference({\n                            wkid: 102100,\n                        });\n                        layer.queryExtent(query).then((results) => {\n                            this.state.jimuMapView.view.extent = results.extent;\n                        });\n                    }\n                    // Process of adding the layer is complete - remove the layer URL from the box so we can add another\n                    this.setState({\n                        featureServiceUrlInput: \"\",\n                    });\n                });\n            });\n        };\n    }\n    render() {\n        var _a;\n        const style = jimu_core__WEBPACK_IMPORTED_MODULE_0__[\"css\"] `\n      form > div {\n        display: flex;\n        justify-content: space-between;\n        input {\n          width: 100%;\n        }\n        button {\n          min-width: 100px;\n        }\n      }\n    `;\n        return (Object(jimu_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", { className: \"widget-addLayers jimu-widget p-2\", css: style },\n            this.props.hasOwnProperty(\"useMapWidgetIds\") &&\n                this.props.useMapWidgetIds &&\n                this.props.useMapWidgetIds.length === 1 && (Object(jimu_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__[\"JimuMapViewComponent\"], { useMapWidgetId: (_a = this.props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0], onActiveViewChange: (jmv) => {\n                    this.setState({\n                        jimuMapView: jmv,\n                    });\n                } })),\n            Object(jimu_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", null, _translations_default__WEBPACK_IMPORTED_MODULE_2__[\"default\"].instructions),\n            Object(jimu_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"form\", { onSubmit: this.formSubmit },\n                Object(jimu_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", null,\n                    Object(jimu_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"input\", { type: \"text\", placeholder: _translations_default__WEBPACK_IMPORTED_MODULE_2__[\"default\"].featureServiceUrl, value: this.state.featureServiceUrlInput, onChange: this.handleFeatureServiceUrlInputChange }),\n                    Object(jimu_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"button\", null, _translations_default__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addLayer)))));\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9hZGQtbGF5ZXJzL3NyYy9ydW50aW1lL3dpZGdldC50c3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9hZGQtbGF5ZXJzL3NyYy9ydW50aW1lL3dpZGdldC50c3g/ZmQwZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbi8qKlxuICBMaWNlbnNpbmdcblxuICBDb3B5cmlnaHQgMjAyMSBFc3JpXG5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgWW91XG4gIG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5XG4gIG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvclxuICBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmdcbiAgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuXG4gIEEgY29weSBvZiB0aGUgbGljZW5zZSBpcyBhdmFpbGFibGUgaW4gdGhlIHJlcG9zaXRvcnknc1xuICBMSUNFTlNFIGZpbGUuXG4qL1xuaW1wb3J0IHsgUmVhY3QsIEFsbFdpZGdldFByb3BzLCBjc3MsIGpzeCB9IGZyb20gXCJqaW11LWNvcmVcIjtcbmltcG9ydCB7XG4gIGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMsXG4gIEppbXVNYXBWaWV3Q29tcG9uZW50LFxuICBKaW11TWFwVmlldyxcbn0gZnJvbSBcImppbXUtYXJjZ2lzXCI7XG5cbmltcG9ydCB7IElNQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuXG5pbXBvcnQgZGVmYXVsdE1lc3NhZ2VzIGZyb20gXCIuL3RyYW5zbGF0aW9ucy9kZWZhdWx0XCI7XG5cbmludGVyZmFjZSBJU3RhdGUge1xuICBmZWF0dXJlU2VydmljZVVybElucHV0OiBzdHJpbmc7XG4gIGppbXVNYXBWaWV3OiBKaW11TWFwVmlldztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2lkZ2V0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxcbiAgQWxsV2lkZ2V0UHJvcHM8SU1Db25maWc+LFxuICBJU3RhdGVcbj4ge1xuICAvLyBHaXZlIHR5cGVzIHRvIHRoZSBtb2R1bGVzIHdlIGltcG9ydCBmcm9tIHRoZSBBcmNHSVMgQVBJIGZvciBKYXZhU2NyaXB0XG4gIC8vIHRvIHRlbGwgVHlwZVNjcmlwdCB3aGF0IHR5cGVzIHRoZXkgYXJlLlxuICBGZWF0dXJlTGF5ZXI6IHR5cGVvZiBfX2VzcmkuRmVhdHVyZUxheWVyO1xuICBRdWVyeTogdHlwZW9mIF9fZXNyaS5RdWVyeTtcbiAgU3BhdGlhbFJlZmVyZW5jZTogdHlwZW9mIF9fZXNyaS5TcGF0aWFsUmVmZXJlbmNlO1xuXG4gIHN0YXRlID0ge1xuICAgIGZlYXR1cmVTZXJ2aWNlVXJsSW5wdXQ6IFwiXCIsXG4gICAgamltdU1hcFZpZXc6IG51bGwsXG4gIH07XG5cbiAgLy8gRXZlcnkgdGltZSB0aGUgaW5wdXQgYm94IHZhbHVlIGNoYW5nZXMsIHRoaXMgZnVuY3Rpb24gZ2V0cyBjYWxsZWQuXG4gIC8vIFdlIHNldCBvdXIgY29tcG9uZW50J3Mgc3RhdGUgc28gd2UgY2FuIHVzZSB0aGUgdmFsdWUgaW4gdGhlIGZvcm1TdWJtaXQgZnVuY3Rpb24uXG4gIGhhbmRsZUZlYXR1cmVTZXJ2aWNlVXJsSW5wdXRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGZlYXR1cmVTZXJ2aWNlVXJsSW5wdXQ6IGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICB9KTtcbiAgfTtcblxuICBmb3JtU3VibWl0ID0gKGV2dCkgPT4ge1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgLy8gRXJyb3IgY2FzZXNcbiAgICBpZiAoIXRoaXMuc3RhdGUuamltdU1hcFZpZXcpIHtcbiAgICAgIC8vIERhdGEgU291cmNlIHdhcyBub3QgY29uZmlndXJlZCAtIHdlIGNhbm5vdCBkbyBhbnl0aGluZy5cbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJQbGVhc2UgY29uZmlndXJlIGEgRGF0YSBTb3VyY2Ugd2l0aCB0aGUgd2lkZ2V0LlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUuZmVhdHVyZVNlcnZpY2VVcmxJbnB1dCA9PSBcIlwiKSB7XG4gICAgICAvLyBOb3RoaW5nIHdhcyB0eXBlZCBpbnRvIHRoZSBib3ghXG4gICAgICBhbGVydChcIlBsZWFzZSBjb3B5L3Bhc3RlIGluIGEgRmVhdHVyZVNlcnZpY2UgVVJMXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIExhenktbG9hZGluZyAob25seSBsb2FkIGlmL3doZW4gbmVlZGVkKSB0aGUgQXJjR0lTIEFQSSBmb3IgSmF2YVNjcmlwdCBtb2R1bGVzXG4gICAgLy8gdGhhdCB3ZSBuZWVkIC0gb25seSBvbmNlIHRoZSBcIkFkZCBMYXllclwiIGJ1dHRvbiBpcyBwcmVzc2VkLlxuICAgIGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xuICAgICAgXCJlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXJcIixcbiAgICAgIFwiZXNyaS90YXNrcy9zdXBwb3J0L1F1ZXJ5XCIsXG4gICAgICBcImVzcmkvZ2VvbWV0cnkvU3BhdGlhbFJlZmVyZW5jZVwiLFxuICAgIF0pLnRoZW4oKG1vZHVsZXMpID0+IHtcbiAgICAgIFt0aGlzLkZlYXR1cmVMYXllciwgdGhpcy5RdWVyeSwgdGhpcy5TcGF0aWFsUmVmZXJlbmNlXSA9IG1vZHVsZXM7XG5cbiAgICAgIC8vIEZpcnN0IGNyZWF0ZSB0aGUgRmVhdHVyZSBMYXllciBmcm9tIHRoZSBVUkwgdGhhdCBpcyBpbiB0aGUgYm94LlxuICAgICAgY29uc3QgbGF5ZXIgPSBuZXcgdGhpcy5GZWF0dXJlTGF5ZXIoe1xuICAgICAgICB1cmw6IHRoaXMuc3RhdGUuZmVhdHVyZVNlcnZpY2VVcmxJbnB1dCxcbiAgICAgIH0pO1xuXG4gICAgICAvLyBBZGQgdGhlIGxheWVyIHRvIHRoZSBtYXAgKGFjY2Vzc2VkIHRocm91Z2ggdGhlIEV4cGVyaWVuY2UgQnVpbGRlciBEYXRhIFNvdXJjZSlcbiAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5tYXAuYWRkKGxheWVyKTtcblxuICAgICAgLy8gQWZ0ZXIgdGhlIGxheWVyIGlzIGNyZWF0ZWQsIHpvb20gdG8gdGhlIGxheWVyJ3MgZXh0ZW50LCBpZiB0aGUgc2V0dGluZyBpcyBzZXQgZm9yIHRoYXQuXG4gICAgICBsYXllci5vbihcImxheWVydmlldy1jcmVhdGVcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0aGlzLnByb3BzLmNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcInpvb21Ub0xheWVyXCIpICYmXG4gICAgICAgICAgdGhpcy5wcm9wcy5jb25maWcuem9vbVRvTGF5ZXIgPT09IHRydWVcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgcXVlcnkgPSBuZXcgdGhpcy5RdWVyeSgpO1xuICAgICAgICAgIHF1ZXJ5LndoZXJlID0gXCIxPTFcIjtcbiAgICAgICAgICBxdWVyeS5vdXRTcGF0aWFsUmVmZXJlbmNlID0gbmV3IHRoaXMuU3BhdGlhbFJlZmVyZW5jZSh7XG4gICAgICAgICAgICB3a2lkOiAxMDIxMDAsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbGF5ZXIucXVlcnlFeHRlbnQocXVlcnkpLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5leHRlbnQgPSByZXN1bHRzLmV4dGVudDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFByb2Nlc3Mgb2YgYWRkaW5nIHRoZSBsYXllciBpcyBjb21wbGV0ZSAtIHJlbW92ZSB0aGUgbGF5ZXIgVVJMIGZyb20gdGhlIGJveCBzbyB3ZSBjYW4gYWRkIGFub3RoZXJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZmVhdHVyZVNlcnZpY2VVcmxJbnB1dDogXCJcIixcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc3R5bGUgPSBjc3NgXG4gICAgICBmb3JtID4gZGl2IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYDtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtYWRkTGF5ZXJzIGppbXUtd2lkZ2V0IHAtMlwiIGNzcz17c3R5bGV9PlxuICAgICAgICB7dGhpcy5wcm9wcy5oYXNPd25Qcm9wZXJ0eShcInVzZU1hcFdpZGdldElkc1wiKSAmJlxuICAgICAgICAgIHRoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzICYmXG4gICAgICAgICAgdGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHMubGVuZ3RoID09PSAxICYmIChcbiAgICAgICAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudFxuICAgICAgICAgICAgICB1c2VNYXBXaWRnZXRJZD17dGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHM/LlswXX1cbiAgICAgICAgICAgICAgb25BY3RpdmVWaWV3Q2hhbmdlPXsoam12OiBKaW11TWFwVmlldykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgamltdU1hcFZpZXc6IGptdixcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cblxuICAgICAgICA8cD57ZGVmYXVsdE1lc3NhZ2VzLmluc3RydWN0aW9uc308L3A+XG5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuZm9ybVN1Ym1pdH0+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtkZWZhdWx0TWVzc2FnZXMuZmVhdHVyZVNlcnZpY2VVcmx9XG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmZlYXR1cmVTZXJ2aWNlVXJsSW5wdXR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUZlYXR1cmVTZXJ2aWNlVXJsSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvbj57ZGVmYXVsdE1lc3NhZ2VzLmFkZExheWVyfTwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBO0FBQ0E7QUFDQTtBQVFBO0FBT0E7QUFBQTs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQThDQTtBQTVDQTs7QUFDQTs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQU1BO0FBS0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./your-extensions/widgets/add-layers/src/runtime/widget.tsx\n");

/***/ }),

/***/ "jimu-arcgis":
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamltdS1hcmNnaXMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqaW11LWFyY2dpc1wiPzlmMWMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///jimu-arcgis\n");

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamltdS1jb3JlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiamltdS1jb3JlXCI/YzY5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///jimu-core\n");

/***/ })

/******/ })
			);
		}
	};
});