/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./style/style.scss":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./style/style.scss ***!
  \*******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Lato);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* * {\\n    Use this section to reset all elements\\n    Add border and padding sizes to the total\\n    box-sizing: border-box;\\n} */\\n/* Main Elements */\\nbody {\\n  font-family: \\\"Lato\\\", sans-serif;\\n  color: #333;\\n  line-height: 1.6;\\n  font-size: 16px;\\n  margin: 0;\\n}\\n\\na {\\n  text-decoration: none;\\n  color: #333;\\n}\\n\\n/* Navbar */\\n.navbar {\\n  background-color: #047aed;\\n  color: #fff;\\n}\\n.navbar .container {\\n  width: 90%;\\n  margin: auto;\\n  overflow: hidden;\\n}\\n.navbar a {\\n  text-decoration: none;\\n  color: #fff;\\n}\\n\\n/* Game Section */\\n.games {\\n  margin: 30px auto;\\n  max-width: 56%;\\n  font-size: 38px;\\n}\\n.games .game-date {\\n  box-shadow: 20px 10px 20px lightblue;\\n  padding: 30px;\\n  display: flex;\\n  margin: 0 0 40px 0;\\n  color: steelblue;\\n}\\n.games .game-time {\\n  color: red;\\n  font-size: 18px;\\n  padding: 10px;\\n  margin: 14px 34px 0 0;\\n}\\n.games .game {\\n  display: flex;\\n  margin: 0 0 40px 0;\\n  padding: 10px;\\n  box-shadow: 20px 10px 20px #a8a8a8;\\n}\\n.games .teams-label {\\n  margin: 0 0 0 30px;\\n  flex: 1;\\n}\\n.games .score {\\n  padding: 0 0 10px 0;\\n}\\n.games .home-team {\\n  flex: 1;\\n}\\n.games .away-team {\\n  flex: 1;\\n}\\n\\n/* Form elements */\\ninput[type=text] {\\n  font-size: 24px;\\n  width: 30px;\\n  padding: 5px;\\n}\\n\\n.button {\\n  background-color: #47a3ff;\\n  color: #fff;\\n  padding: 10px 15px;\\n  border: none;\\n  border-radius: 10px;\\n}\\n\\n.button:hover {\\n  background-color: #1e83f7;\\n  color: #fff;\\n  cursor: pointer;\\n  border-radius: 10px;\\n}\\n\\n@media (max-width: 1000px) {\\n  .games {\\n    max-width: 80%;\\n    align-content: center;\\n    font-size: 18px;\\n  }\\n  .games .game-time {\\n    margin: 0px 34px 0 10px;\\n  }\\n}\\n@media (max-width: 1200px) {\\n  .games {\\n    font-size: 30px;\\n  }\\n  .games .game-time {\\n    margin: 4px 34px 0 10px;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://@fmo/predict/./style/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://@fmo/predict/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://@fmo/predict/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./style/style.scss":
/*!**************************!*\
  !*** ./style/style.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./style/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://@fmo/predict/./style/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://@fmo/predict/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://@fmo/predict/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://@fmo/predict/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://@fmo/predict/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://@fmo/predict/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://@fmo/predict/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Services/GameService.ts":
/*!*************************************!*\
  !*** ./src/Services/GameService.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameService\": () => (/* binding */ GameService)\n/* harmony export */ });\n/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Storage */ \"./src/Storage.ts\");\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\nvar GameService = /** @class */ (function () {\n    function GameService(storage) {\n        this.storage = storage;\n        if (!this.data) {\n            this.data = this.getAllGames;\n        }\n    }\n    GameService.gameServiceWithLocalStorage = function () {\n        return new GameService(new _Storage__WEBPACK_IMPORTED_MODULE_0__.Storage());\n    };\n    Object.defineProperty(GameService.prototype, \"getAllGames\", {\n        get: function () {\n            var allGames = this.storage.getAllGames();\n            allGames.sort(function (game1, game2) {\n                var gameTime1 = parseInt(game1.gameTime);\n                var gameTime2 = parseInt(game2.gameTime);\n                if (gameTime1 < gameTime2) {\n                    return -1;\n                }\n                if (gameTime1 > gameTime2) {\n                    return 1;\n                }\n                return 0;\n            });\n            return allGames;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    GameService.prototype.findOneGameById = function (id) {\n        var foundGame;\n        this.getAllGames.forEach(function (game) {\n            if (game.id === id) {\n                foundGame = game;\n            }\n        });\n        return foundGame;\n    };\n    GameService.prototype.predict = function (guess, whichTeam, id) {\n        var updateGame = this.findOneGameById(id);\n        if (!updateGame) {\n            return;\n        }\n        var newGameList = [];\n        this.data.forEach(function (game) {\n            if (game.id === updateGame.id) {\n                if (whichTeam === 'home-team') {\n                    game = __assign(__assign({}, game), { homeTeamGuess: guess });\n                }\n                else {\n                    game = __assign(__assign({}, game), { awayTeamGuess: guess });\n                }\n            }\n            newGameList.push(game);\n        });\n        Object.assign(this.data, newGameList);\n    };\n    GameService.prototype.persist = function () {\n        this.storage.updateAllGames(this.data);\n    };\n    GameService.prototype.predictAndPersist = function (guess, whichTeam, id) {\n        this.predict(guess, whichTeam, id);\n        this.persist();\n    };\n    return GameService;\n}());\n\n\n\n//# sourceURL=webpack://@fmo/predict/./src/Services/GameService.ts?");

/***/ }),

/***/ "./src/Storage.ts":
/*!************************!*\
  !*** ./src/Storage.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Storage\": () => (/* binding */ Storage)\n/* harmony export */ });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/data.ts\");\n\nvar Storage = /** @class */ (function () {\n    function Storage() {\n    }\n    Storage.prototype.getAllGames = function () {\n        this.init();\n        return JSON.parse(localStorage.getItem('games'));\n    };\n    Storage.prototype.updateAllGames = function (games) {\n        localStorage.setItem('games', JSON.stringify(games));\n    };\n    Storage.prototype.init = function () {\n        if (!localStorage.getItem('games')) {\n            localStorage.setItem('games', JSON.stringify(_data__WEBPACK_IMPORTED_MODULE_0__.games));\n        }\n    };\n    return Storage;\n}());\n\n\n\n//# sourceURL=webpack://@fmo/predict/./src/Storage.ts?");

/***/ }),

/***/ "./src/Templates/GamesUi.ts":
/*!**********************************!*\
  !*** ./src/Templates/GamesUi.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GamesUi\": () => (/* binding */ GamesUi)\n/* harmony export */ });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ \"./src/util.ts\");\n/* harmony import */ var _ScoreUi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScoreUi */ \"./src/Templates/ScoreUi.ts\");\n\n\nvar GamesUi = /** @class */ (function () {\n    function GamesUi() {\n        this.scoreUiService = new _ScoreUi__WEBPACK_IMPORTED_MODULE_1__.ScoreUi();\n    }\n    GamesUi.prototype.createDateElement = function () {\n        var parentGamesDiv = document.querySelector('.games');\n        parentGamesDiv.innerHTML = '';\n        var dateDiv = this.createDivWithText('game-date', _util__WEBPACK_IMPORTED_MODULE_0__.util.todaysDate());\n        parentGamesDiv.insertAdjacentElement('afterbegin', dateDiv);\n    };\n    GamesUi.prototype.createDivWithText = function (className, text) {\n        var divElement = document.createElement('div');\n        divElement.className = className;\n        divElement.appendChild(document.createTextNode(text));\n        return divElement;\n    };\n    GamesUi.prototype.createNewGame = function (game) {\n        var newGameDiv = document.createElement('div');\n        newGameDiv.id = \"game-\".concat(game.id);\n        newGameDiv.className = 'game';\n        var teamsLabel = this.createDivWithText('teams-label', \"\".concat(game.homeTeam, \" - \").concat(game.awayTeam));\n        var gameTime = this.createDivWithText('game-time', game.gameTime);\n        var scoreDiv = this.scoreUiService.createScoreDiv(\"\".concat(game.homeTeamGuess), \"\".concat(game.awayTeamGuess));\n        newGameDiv.appendChild(teamsLabel);\n        newGameDiv.appendChild(gameTime);\n        newGameDiv.appendChild(scoreDiv);\n        return newGameDiv;\n    };\n    GamesUi.prototype.generateGames = function (newGame) {\n        var parentGamesDiv = document.querySelector('.games');\n        parentGamesDiv.insertAdjacentElement('beforeend', newGame);\n    };\n    return GamesUi;\n}());\n\n\n\n//# sourceURL=webpack://@fmo/predict/./src/Templates/GamesUi.ts?");

/***/ }),

/***/ "./src/Templates/ScoreUi.ts":
/*!**********************************!*\
  !*** ./src/Templates/ScoreUi.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ScoreUi\": () => (/* binding */ ScoreUi)\n/* harmony export */ });\nvar ScoreUi = /** @class */ (function () {\n    function ScoreUi() {\n    }\n    ScoreUi.prototype.createScoreDiv = function (homeTeamGuess, awayTeamGuess) {\n        var scoreDiv = document.createElement('div');\n        scoreDiv.className = 'score';\n        var homeTeamInput = this.createTeamInput(homeTeamGuess, 'home-team');\n        scoreDiv.appendChild(homeTeamInput);\n        var seperator = this.createSeperator();\n        scoreDiv.appendChild(seperator);\n        var awayTeamInput = this.createTeamInput(awayTeamGuess, 'away-team');\n        scoreDiv.appendChild(awayTeamInput);\n        return scoreDiv;\n    };\n    ScoreUi.prototype.createTeamInput = function (guess, team) {\n        var homeTeamInput = document.createElement('input');\n        homeTeamInput.type = 'text';\n        homeTeamInput.value = guess;\n        homeTeamInput.className = team;\n        return homeTeamInput;\n    };\n    ScoreUi.prototype.createSeperator = function () {\n        var spanElement = document.createElement('span');\n        var spanText = document.createTextNode(' - ');\n        spanElement.appendChild(spanText);\n        return spanElement;\n    };\n    return ScoreUi;\n}());\n\n\n\n//# sourceURL=webpack://@fmo/predict/./src/Templates/ScoreUi.ts?");

/***/ }),

/***/ "./src/Templates/Ui.ts":
/*!*****************************!*\
  !*** ./src/Templates/Ui.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ui\": () => (/* binding */ Ui)\n/* harmony export */ });\n/* harmony import */ var _GamesUi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GamesUi */ \"./src/Templates/GamesUi.ts\");\n/* harmony import */ var _Services_GameService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/GameService */ \"./src/Services/GameService.ts\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ \"./src/util.ts\");\n\n\n\nvar Ui = /** @class */ (function () {\n    function Ui() {\n        this.gamesUi = new _GamesUi__WEBPACK_IMPORTED_MODULE_0__.GamesUi();\n        this.populateGames = this.populateGames.bind(this);\n        this.gameService = _Services_GameService__WEBPACK_IMPORTED_MODULE_1__.GameService.gameServiceWithLocalStorage();\n    }\n    Ui.prototype.getGameId = function (gameId) {\n        var gameIdArr = gameId.split('-');\n        return parseInt(gameIdArr[1]);\n    };\n    Ui.prototype.populateGames = function () {\n        var _this = this;\n        var allGames = this.gameService.getAllGames;\n        this.gamesUi.createDateElement();\n        allGames.forEach(function (game) {\n            var newGame = _this.gamesUi.createNewGame(game);\n            _this.gamesUi.generateGames(newGame);\n        });\n    };\n    Ui.prototype.init = function () {\n        var _this = this;\n        window.addEventListener('load', this.populateGames);\n        document\n            .querySelector('.games')\n            .addEventListener('focusout', function (e) {\n            var id = _this.getGameId(e.target.parentNode.parentNode.id);\n            var guess = e.target.value;\n            if (!_util__WEBPACK_IMPORTED_MODULE_2__.util.validGuess(guess)) {\n                e.target.classList.add('is-invalid');\n                return;\n            }\n            if (e.target.classList.contains('home-team')) {\n                _this.gameService.predictAndPersist(guess, 'home-team', id);\n            }\n            if (e.target.classList.contains('away-team')) {\n                _this.gameService.predictAndPersist(guess, 'away-team', id);\n            }\n            _this.populateGames();\n        });\n    };\n    return Ui;\n}());\n\n\n\n//# sourceURL=webpack://@fmo/predict/./src/Templates/Ui.ts?");

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Templates_Ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Templates/Ui */ \"./src/Templates/Ui.ts\");\n/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style/style.scss */ \"./style/style.scss\");\n\n\nvar uiService = new _Templates_Ui__WEBPACK_IMPORTED_MODULE_0__.Ui();\nuiService.init();\n\n\n//# sourceURL=webpack://@fmo/predict/./src/app.ts?");

/***/ }),

/***/ "./src/data.ts":
/*!*********************!*\
  !*** ./src/data.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"games\": () => (/* binding */ games)\n/* harmony export */ });\nvar games = [\n    {\n        id: 1,\n        homeTeam: 'Fenerbahce',\n        awayTeam: 'Tenerife',\n        homeTeamGuess: null,\n        awayTeamGuess: null,\n        gameTime: '19:00',\n    },\n    {\n        id: 1,\n        homeTeam: 'Fenerbahce',\n        awayTeam: 'Lazio',\n        homeTeamGuess: '',\n        awayTeamGuess: '',\n        gameTime: '19:00',\n    },\n    {\n        id: 2,\n        homeTeam: 'Atletico Madrid',\n        awayTeam: 'Barcelona',\n        homeTeamGuess: '',\n        awayTeamGuess: '',\n        gameTime: '18:00',\n    },\n    {\n        id: 3,\n        homeTeam: 'Arsenal',\n        awayTeam: 'Liverpool',\n        homeTeamGuess: '',\n        awayTeamGuess: '',\n        gameTime: '12:00',\n    },\n    {\n        id: 4,\n        homeTeam: 'Sevilla',\n        awayTeam: 'Real Madrid',\n        homeTeamGuess: '',\n        awayTeamGuess: '',\n        gameTime: '21:00',\n    },\n];\n\n\n//# sourceURL=webpack://@fmo/predict/./src/data.ts?");

/***/ }),

/***/ "./src/util.ts":
/*!*********************!*\
  !*** ./src/util.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"util\": () => (/* binding */ util)\n/* harmony export */ });\nvar Util = /** @class */ (function () {\n    function Util() {\n    }\n    Util.prototype.validGuess = function (guess) {\n        var re = /^[0-9]{1,2}$/;\n        if (!re.test(guess) || guess > 15) {\n            return false;\n        }\n        return true;\n    };\n    Util.prototype.todaysDate = function () {\n        var date = new Date();\n        var _a = [\n            date.getMonth(),\n            date.getDate(),\n            date.getFullYear(),\n        ], month = _a[0], day = _a[1], year = _a[2];\n        var months = [\n            'Jan',\n            'Feb',\n            'March',\n            'April',\n            'May',\n            'June',\n            'July',\n            'August',\n            'Sep',\n            'Oct',\n            'November',\n            'Dec',\n        ];\n        var monthsInString = months[month];\n        var fullDate = \"\".concat(day, \" / \").concat(monthsInString, \" / \").concat(year);\n        return fullDate;\n    };\n    return Util;\n}());\nvar util = new Util();\n\n\n//# sourceURL=webpack://@fmo/predict/./src/util.ts?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;