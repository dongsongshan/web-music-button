/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\nfunction WebMusicButton(options) {\n  this.options = options || {};\n  this.options.musicUrl = options.musicUrl;\n  this.options.isPlay = false;\n}\nWebMusicButton.prototype.init = function () {\n  console.log('0.0.3');\n  this.create();\n  this.action();\n};\nWebMusicButton.prototype.create = function () {\n  var musicButton = document.getElementById('music-button');\n  if (musicButton) {\n    var audio = document.createElement('audio');\n    audio.src = this.options.musicUrl;\n    musicButton.appendChild(audio);\n    musicButton.classList.add('music-bg');\n    document.body.appendChild(musicButton);\n  } else {\n    console.warn('Element with id \"music-button\" not found.');\n  }\n};\nWebMusicButton.prototype.action = function () {\n  var musicButton = document.getElementById('music-button');\n  if (!musicButton) return;\n  musicButton.addEventListener('click', () => {\n    if (!this.options.isPlay) {\n      this.play();\n      this.options.isPlay = true;\n      musicButton.classList.remove('music-bg-pause');\n      musicButton.classList.add('music-bg-play');\n    } else {\n      this.pause();\n      this.options.isPlay = false;\n      musicButton.classList.remove('music-bg-play');\n      musicButton.classList.add('music-bg-pause');\n    }\n  });\n};\nWebMusicButton.prototype.play = function () {\n  var musicButton = document.getElementById('music-button');\n  if (musicButton) {\n    const audio = musicButton.getElementsByTagName('audio')[0];\n    if (audio) {\n      audio.play().catch(error => {\n        console.error('Error playing audio:', error);\n      });\n    } else {\n      console.warn('No audio element found within music-button.');\n    }\n  } else {\n    console.warn('Element with id \"music-button\" not found.');\n  }\n};\nWebMusicButton.prototype.pause = function () {\n  var musicButton = document.getElementById('music-button');\n  if (musicButton) {\n    const audio = musicButton.getElementsByTagName('audio')[0];\n    if (audio) {\n      audio.pause();\n    } else {\n      console.warn('No audio element found within music-button.');\n    }\n  } else {\n    console.warn('Element with id \"music-button\" not found.');\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WebMusicButton);\n\n//# sourceURL=webpack://web-music-button/./src/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://web-music-button/./src/style.css?");

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
/******/ 
/******/ // startup
/******/ // Load entry module and return exports
/******/ // This entry module can't be inlined because the eval devtool is used.
/******/ var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ var __webpack_exports__default = __webpack_exports__["default"];
/******/ export { __webpack_exports__default as default };
/******/ 
