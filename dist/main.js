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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles.scss ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"body {\\n  background-color: #ececec;\\n  color: #031b68;\\n}\\nbody main {\\n  width: 90%;\\n  margin: 0 auto;\\n  background-color: #fff;\\n}\\nbody .header {\\n  text-align: center;\\n}\\nbody .header h1 {\\n  font-size: 55px;\\n}\\nbody .header .navbar {\\n  width: 90%;\\n  margin: 0 auto;\\n  background-color: #fff;\\n}\\nbody .header .navbar .tabs {\\n  list-style: none;\\n  margin: 0;\\n  padding: 0;\\n}\\nbody .header .navbar .tabs .list {\\n  display: inline-block;\\n  margin: 0 7px;\\n  padding: 20px;\\n  font-size: 18px;\\n}\\nbody .header .navbar .tabs .list:hover {\\n  cursor: pointer;\\n}\\nbody section {\\n  text-align: center;\\n  padding: 25px;\\n  border-top: 10px solid #031b68;\\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\\n}\\nbody section .title,\\nbody section .menu-title {\\n  margin: 20px 0;\\n  padding: 0;\\n  font-size: 35px;\\n}\\nbody section .desc {\\n  font-size: 20px;\\n}\\nbody section img {\\n  width: 40%;\\n  margin: 0 auto;\\n}\\nbody section .menu-title {\\n  font-size: 25px;\\n}\\n\\n.current-page {\\n  background-color: #031b68;\\n  border-radius: 5px;\\n  color: #fff;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/assets/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/assets/images/home.png":
/*!************************************!*\
  !*** ./src/assets/images/home.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"d4bec718cfe8527cebbb4492d05c94f2.png\");\n\n//# sourceURL=webpack:///./src/assets/images/home.png?");

/***/ }),

/***/ "./src/assets/images/menu1.png":
/*!*************************************!*\
  !*** ./src/assets/images/menu1.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"535b8b36a0e172a941cee28996f2b11a.png\");\n\n//# sourceURL=webpack:///./src/assets/images/menu1.png?");

/***/ }),

/***/ "./src/assets/images/menu2.png":
/*!*************************************!*\
  !*** ./src/assets/images/menu2.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"9ad6a49b7489746f824e62be5ae359bb.png\");\n\n//# sourceURL=webpack:///./src/assets/images/menu2.png?");

/***/ }),

/***/ "./src/assets/images/menu3.png":
/*!*************************************!*\
  !*** ./src/assets/images/menu3.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"50803cf53d05a097d6504be83370515e.png\");\n\n//# sourceURL=webpack:///./src/assets/images/menu3.png?");

/***/ }),

/***/ "./src/assets/images/menu4.png":
/*!*************************************!*\
  !*** ./src/assets/images/menu4.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"b87440966875dace9ef53ca817a975d7.png\");\n\n//# sourceURL=webpack:///./src/assets/images/menu4.png?");

/***/ }),

/***/ "./src/assets/images/menu5.png":
/*!*************************************!*\
  !*** ./src/assets/images/menu5.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"6c89074392579a7f03796b0bf05000df.png\");\n\n//# sourceURL=webpack:///./src/assets/images/menu5.png?");

/***/ }),

/***/ "./src/assets/styles.scss":
/*!********************************!*\
  !*** ./src/assets/styles.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/assets/styles.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/header */ \"./src/modules/header.js\");\n/* harmony import */ var _modules_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/elements */ \"./src/modules/elements.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/home */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/contact */ \"./src/modules/contact.js\");\n/* harmony import */ var _assets_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/styles.scss */ \"./src/assets/styles.scss\");\n/* harmony import */ var _assets_styles_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_scss__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\nconst pageTabs = Array.from(_modules_tabs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].tabs);\nconst parentContainer = document.getElementById('content');\nconst mainContainer = Object(_modules_elements__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('main', null, 'main');\nconst home = new _modules_home__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('home-page', 'Welcome!');\nconst menu = new _modules_menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('menu-page', 'Our Menu!');\nconst contact = new _modules_contact__WEBPACK_IMPORTED_MODULE_5__[\"default\"]('contact-page', 'Contact Us');\n\nconst showPage = (page, tab = false) => {\n  _modules_tabs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].clearTabStyle(pageTabs);\n  _modules_tabs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].styleCurrentTab(tab);\n  mainContainer.innerHTML = '';\n  mainContainer.appendChild(page.joinContents());\n};\n\nconst render = () => {\n  parentContainer.appendChild(_modules_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"].headerContainer);\n  parentContainer.appendChild(mainContainer);\n  showPage(home);\n};\n\npageTabs.forEach(tab => {\n  tab.addEventListener('click', () => {\n    switch (tab.dataset.val) {\n      case '0':\n        showPage(home, tab);\n        break;\n\n      case '1':\n        showPage(menu, tab);\n        break;\n\n      case '2':\n        showPage(contact, tab);\n        break;\n\n      default:\n        mainContainer.innerHTML = '';\n        break;\n    }\n  });\n});\n\nrender();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./src/modules/elements.js\");\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template */ \"./src/modules/template.js\");\n\n\n\nclass Contact extends _template__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  description() {\n    this.descContainer = Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', '', 'desc', 'desc');\n    this.descContainer.innerText = 'We would love to hear from you! Our goal is to satisfy your culinary needs and desires to the best of or ability';\n    return this.descContainer;\n  }\n\n  data() {\n    this.details = [\n      'Palms Mall, opposite High Court, Ring Road, Ibadan, Oyo State',\n      '08034227575, 08027637814',\n      'info@klazz.com',\n    ];\n    return this.details;\n  }\n\n  branch() {\n    this.bContainer = Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', '', 'office', 'office');\n    this.bContainer.appendChild(Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', this.data()[0], 'address', 'address'));\n    this.bContainer.appendChild(Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', this.data()[1], 'phone', 'phone'));\n    this.bContainer.appendChild(Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', this.data()[2], 'email', 'email'));\n    return this.bContainer;\n  }\n\n  joinContents() {\n    const superContent = this.prepareContent();\n    superContent.appendChild(this.description());\n    superContent.appendChild(this.branch());\n    superContent.appendChild(this.createFooter());\n    return superContent;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contact);\n\n\n//# sourceURL=webpack:///./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/elements.js":
/*!*********************************!*\
  !*** ./src/modules/elements.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst CreateElement = (name, text, id = null, classname = null) => {\n  const element = document.createElement(name);\n\n  element.innerText = text;\n  element.className += classname;\n  element.setAttribute('id', id);\n\n  return element;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateElement);\n\n//# sourceURL=webpack:///./src/modules/elements.js?");

/***/ }),

/***/ "./src/modules/header.js":
/*!*******************************!*\
  !*** ./src/modules/header.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./src/modules/elements.js\");\n/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs */ \"./src/modules/tabs.js\");\n\n\n\nconst setHeader = (() => {\n  const headerContainer = Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('header', null, 'header', 'header');\n  const header = Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h1', 'Klass Restaurant', 'h-text', 'h-text');\n\n  headerContainer.appendChild(header);\n  headerContainer.appendChild(_tabs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].nav);\n\n  return { headerContainer };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (setHeader);\n\n//# sourceURL=webpack:///./src/modules/header.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./src/modules/elements.js\");\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template */ \"./src/modules/template.js\");\n/* harmony import */ var _assets_images_home_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/home.png */ \"./src/assets/images/home.png\");\n\n\n\n\nclass Home extends _template__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  description() {\n    this.descContainer = Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', null, 'desc', 'desc');\n    this.descContainer.innerText = 'Welcome to our world of delectable meals and exotic drinks. We hope to satisfy you with our delicious and affordable meals served under a great ambience.';\n    return this.descContainer;\n  }\n\n  sampleImage() {\n    this.homeImage = Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('img', null, 'home-img', 'home-img');\n    this.homeImage.src = _assets_images_home_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n    return this.homeImage;\n  }\n\n  joinContents() {\n    const superContent = this.prepareContent();\n    superContent.appendChild(this.description());\n    superContent.appendChild(this.sampleImage());\n    superContent.appendChild(this.createFooter());\n    return superContent;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n\n//# sourceURL=webpack:///./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./src/modules/elements.js\");\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template */ \"./src/modules/template.js\");\n/* harmony import */ var _assets_images_menu1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/menu1.png */ \"./src/assets/images/menu1.png\");\n/* harmony import */ var _assets_images_menu2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/menu2.png */ \"./src/assets/images/menu2.png\");\n/* harmony import */ var _assets_images_menu3_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/menu3.png */ \"./src/assets/images/menu3.png\");\n/* harmony import */ var _assets_images_menu4_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/images/menu4.png */ \"./src/assets/images/menu4.png\");\n/* harmony import */ var _assets_images_menu5_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/images/menu5.png */ \"./src/assets/images/menu5.png\");\n\n\n\n\n\n\n\n\nclass Menu extends _template__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  description() {\n    this.descContainer = Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', null, 'desc', 'desc');\n    this.descContainer.innerText = 'Here is our menu:';\n    return this.descContainer;\n  }\n\n  allMenuImg() {\n    this.menus = [_assets_images_menu1_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _assets_images_menu2_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _assets_images_menu3_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _assets_images_menu4_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _assets_images_menu5_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"]];\n    return this.menus;\n  }\n\n  titles() {\n    this.all = [\n      'Real Amala + Gbegiri and Ewedu',\n      'Beans with beef and egg',\n      'Fried Rice + Jollof Rice + Egg + Spaghetti',\n      'Egusi soup + Beef + confirm ponmo',\n      'Jollof Rice + Chicken + Plantain + Spaghetti',\n    ];\n    return this.all;\n  }\n\n  makeMenu(title, img, i) {\n    const menuPark = Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', '', 'menu', 'menu');\n    menuPark.appendChild(Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', title, 'title', `menu-title title-${i}`));\n    this.menuImg = Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('img', null, 'home-img', 'home-img');\n    this.menuImg.src = img;\n    menuPark.appendChild(this.menuImg);\n    return menuPark;\n  }\n\n  prepareMenu() {\n    const allMenu = Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', '', 'all-menu', 'all-menu');\n    for (let i = 0; i < this.allMenuImg().length; i += 1) {\n      const currentMenu = this.makeMenu(this.titles()[i], this.allMenuImg()[i], i);\n      allMenu.appendChild(currentMenu);\n    }\n    return allMenu;\n  }\n\n  joinContents() {\n    const superContent = this.prepareContent();\n    superContent.appendChild(this.description());\n    superContent.appendChild(this.prepareMenu());\n    superContent.appendChild(this.createFooter());\n    return superContent;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\n\n\n//# sourceURL=webpack:///./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./src/modules/elements.js\");\n\n\nconst createTabs = (() => {\n  const nav = Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('nav', null, 'navbar', 'navbar');\n  const tabList = Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('ul', null, 'tabs', 'tabs');\n  const navItems = ['Home', 'Our Menu', 'Get in touch'];\n\n  const doTabs = (items, list) => {\n    for (let i = 0; i < items.length; i += 1) {\n      const li = Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('li', items[i], 'list', `list list${i + 1}`);\n      li.setAttribute('data-val', i);\n      list.appendChild(li);\n    }\n    return list;\n  };\n\n  const clearTabStyle = (tabs) => {\n    tabs.forEach((tab) => {\n      tab.classList.remove('current-page');\n    });\n  };\n\n  const styleCurrentTab = (tab) => {\n    if (tab) {\n      tab.classList.add('current-page');\n    }\n  };\n\n\n  nav.appendChild(doTabs(navItems, tabList));\n  const tabs = tabList.children;\n\n  return {\n    nav, tabs, clearTabStyle, styleCurrentTab,\n  };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createTabs);\n\n\n//# sourceURL=webpack:///./src/modules/tabs.js?");

/***/ }),

/***/ "./src/modules/template.js":
/*!*********************************!*\
  !*** ./src/modules/template.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./src/modules/elements.js\");\n\n\nclass Page {\n  constructor(name, title) {\n    this.name = name;\n    this.title = title;\n  }\n\n  createContainer() {\n    return Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('section', null, this.name, this.name);\n  }\n\n  createTitle() {\n    return Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h3', this.title, 'title', 'title');\n  }\n\n  prepareContent() {\n    const container = this.createContainer();\n    container.appendChild(this.createTitle());\n    return container;\n  }\n\n  createFooter() {\n    this.footer = Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('footer', '(@) Klass Restaurant, 2020', 'footer', 'footer');\n    return this.footer;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\n\n\n//# sourceURL=webpack:///./src/modules/template.js?");

/***/ })

/******/ });