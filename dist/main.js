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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Bowman: () => (/* binding */ Bowman),\n/* harmony export */   Daemon: () => (/* binding */ Daemon),\n/* harmony export */   Magician: () => (/* binding */ Magician),\n/* harmony export */   Swordsman: () => (/* binding */ Swordsman),\n/* harmony export */   Undead: () => (/* binding */ Undead),\n/* harmony export */   Zombie: () => (/* binding */ Zombie),\n/* harmony export */   \"default\": () => (/* binding */ Character)\n/* harmony export */ });\nclass Character {\n    constructor(name, type) {\n      if (typeof name !== 'string') {\n        throw new Error('Имя должно быть строкой');\n      }\n      if (name.length < 2 || name.length > 10) {\n        throw new Error('Имя должно быть длиной от 2 до 10 символов');\n      }\n      const allowedTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];\n      if (!allowedTypes.includes(type)) {\n        throw new Error('Тип должен быть одним из: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');\n      }\n      this.name = name;\n      this.type = type;\n      this.health = 100;\n      this.level = 1;\n    }\n  }\n  \n  \n\nclass Bowman extends  Character {\n    constructor(name){\n        super(name, 'Bowman');\n        this.attack = 25;\n        this.defence = 10;\n    }\n}\n\nclass Swordsman extends Character {\n   constructor(name){\n    super(name,'Swordsman');\n    this.attack = 40;\n    this.defence = 10;\n   }\n}\n\nclass Magician  extends Character {\n    constructor(name){\n        super(name,'Magician');\n        this.attack = 10;\n        this.defence = 40;\n   }\n}\n\nclass Daemon extends Character {\n    constructor(name){\n        super(name, 'Daemon');\n        this.attack = 10;\n       this.defence = 40;\n      }\n}\n\nclass Undead extends Character {\n    constructor(name){\n        super(name,'Undead');\n        this.attack = 25;\n        this.defence = 25;\n      }\n}\n\nclass Zombie extends Character {\n    constructor(name){\n        super(name, 'Zombie');\n           this.attack = 40;\n           this.defence = 10;\n      }\n}\n\n//# sourceURL=webpack://classes/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;