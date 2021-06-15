/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/add.js":
/*!*******************!*\
  !*** ./js/add.js ***!
  \*******************/
/***/ ((module) => {

eval("const add = (a, b) => {\r\n  if (a === undefined || b === undefined) {\r\n    return undefined;\r\n  }\r\n  if (a === null || b === null) {\r\n    return null;\r\n  }\r\n  return a + b;\r\n};\r\n\r\nmodule.exports = {\r\n  add: add\r\n}\n\n//# sourceURL=webpack:///./js/add.js?");

/***/ }),

/***/ "./js/div.js":
/*!*******************!*\
  !*** ./js/div.js ***!
  \*******************/
/***/ ((module) => {

eval("const div = (a, b) => {\r\n  if (a === undefined || b === undefined) {\r\n    return undefined;\r\n  }\r\n  if (a === null || b === null) {\r\n    return null;\r\n  }\r\n  return a / b;\r\n};\r\n\r\nmodule.exports = {\r\n  div: div\r\n}\n\n//# sourceURL=webpack:///./js/div.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const funcAdd = __webpack_require__(/*! ./add */ \"./js/add.js\");\r\nconst funcSub = __webpack_require__(/*! ./sub */ \"./js/sub.js\");\r\nconst funcMul = __webpack_require__(/*! ./mul */ \"./js/mul.js\");\r\nconst funcDiv = __webpack_require__(/*! ./div */ \"./js/div.js\");\r\n\r\nconst add = funcAdd.add;\r\nconst sub = funcSub.sub;\r\nconst mul = funcMul.mul;\r\nconst div = funcDiv.div;\r\n\r\nalert(`результат 5 + 6 равнен ${add(5, 6)}`);\r\nalert(`результат 5 - 6 равнен ${sub(5, 6)}`);\r\nalert(`результат 5 * 6 равнен ${mul(5, 6)}`);\r\nalert(`результат 6 / 3 равнен ${div(6, 3)}`);\r\n\r\nmodule.exports = {\r\n  add: add,\r\n  sub: sub,\r\n  mul: mul,\r\n  div: div\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./js/mul.js":
/*!*******************!*\
  !*** ./js/mul.js ***!
  \*******************/
/***/ ((module) => {

eval("const mul = (a, b) => {\r\n  if (a === undefined || b === undefined) {\r\n    return undefined;\r\n  }\r\n  if (a === null || b === null) {\r\n    return null;\r\n  }\r\n  return a * b;\r\n};\r\n\r\nmodule.exports = {\r\n  mul: mul\r\n}\n\n//# sourceURL=webpack:///./js/mul.js?");

/***/ }),

/***/ "./js/sub.js":
/*!*******************!*\
  !*** ./js/sub.js ***!
  \*******************/
/***/ ((module) => {

eval("const sub = (a, b) => {\r\n  if (a === undefined || b === undefined) {\r\n    return undefined;\r\n  }\r\n  if (a === null || b === null) {\r\n    return null;\r\n  }\r\n  return a - b;\r\n};\r\n\r\nmodule.exports = {\r\n  sub: sub\r\n}\n\n//# sourceURL=webpack:///./js/sub.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./js/main.js");
/******/ 	
/******/ })()
;