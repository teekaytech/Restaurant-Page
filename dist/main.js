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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_pageHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/pageHeader */ \"./src/modules/pageHeader.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n\n\n\nconst pageTabs = Array.from(_modules_tabs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].tabs);\n\nconst render = () => {\n  const parentContainer = document.getElementById('content');\n\n  parentContainer.appendChild(_modules_pageHeader__WEBPACK_IMPORTED_MODULE_0__[\"default\"].headerContainer);\n};\n\nrender();\n\npageTabs.forEach(tab => {\n  tab.addEventListener('click', () => {\n    alert(tab.innerText);\n  });\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/domElements.js":
/*!************************************!*\
  !*** ./src/modules/domElements.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const CreateElement = (name, text, id = '', classname = '') => {\n  const element = document.createElement(name);\n\n  element.innerText = text;\n  element.className += classname;\n  element.setAttribute('id', id);\n\n  return element;\n};\n\nmodule.exports = CreateElement;\n\n//# sourceURL=webpack:///./src/modules/domElements.js?");

/***/ }),

/***/ "./src/modules/pageHeader.js":
/*!***********************************!*\
  !*** ./src/modules/pageHeader.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements */ \"./src/modules/domElements.js\");\n/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_domElements__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs */ \"./src/modules/tabs.js\");\n\n\n\nconst setHeader = (() => {\n  const headerContainer = _domElements__WEBPACK_IMPORTED_MODULE_0___default()('header', '');\n  const header = _domElements__WEBPACK_IMPORTED_MODULE_0___default()('h1', 'Klass Restaurant', 'h-text', 'h-text');\n\n  headerContainer.appendChild(header);\n  headerContainer.appendChild(_tabs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].nav);\n\n  return { headerContainer };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (setHeader);\n\n//# sourceURL=webpack:///./src/modules/pageHeader.js?");

/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements */ \"./src/modules/domElements.js\");\n/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_domElements__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst createTabs = (() => {\n  const nav = _domElements__WEBPACK_IMPORTED_MODULE_0___default()('nav', '', 'navbar', 'navbar');\n  const tabList = _domElements__WEBPACK_IMPORTED_MODULE_0___default()('ul', '', 'tabs');\n  const navItems = ['Home', 'Our Menu', 'Get in touch'];\n\n  navItems.forEach((tab) => {\n    const list = _domElements__WEBPACK_IMPORTED_MODULE_0___default()('li', tab, 'list', 'list');\n    tabList.appendChild(list);\n  });\n\n\n  nav.appendChild(tabList);\n  const tabs = tabList.children;\n\n  return { nav, tabs };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createTabs);\n\n\n//# sourceURL=webpack:///./src/modules/tabs.js?");

/***/ })

/******/ });