/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/core/parser.ts":
/*!****************************!*\
  !*** ./src/core/parser.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var ASMParser = /** @class */ (function () {
    function ASMParser(ASMcode) {
        this.ASMcode = ASMcode;
        this.AST = null;
    }
    ASMParser.prototype.runParser = function () {
        // console.log(this.ASMcode.split(" "));
        this.AST = this.ASMcode.split(" ");
        console.log(this.AST);
    };
    ASMParser.prototype.parse = function () {
        this.runParser();
    };
    return ASMParser;
}());
exports["default"] = ASMParser;


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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var parser_1 = __webpack_require__(/*! ./core/parser */ "./src/core/parser.ts");
function main() {
    var parser = new parser_1.default("XOR 0x01 0x02 PUSH 0x01 1002");
    parser.parse();
}
main();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0E7SUFLSSxtQkFBWSxPQUFlO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO0lBQ3BCLENBQUM7SUFFTyw2QkFBUyxHQUFqQjtRQUNJLHdDQUF3QztRQUN4QyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFTSx5QkFBSyxHQUFaO1FBQ0ksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFTCxnQkFBQztBQUFELENBQUM7Ozs7Ozs7O1VDckJEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7OztBQ3JCQSxnRkFBc0M7QUFFdEMsU0FBUyxJQUFJO0lBQ1QsSUFBTSxNQUFNLEdBQUcsSUFBSSxnQkFBUyxDQUFDLDhCQUE4QixDQUFDLENBQUM7SUFDN0QsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ25CLENBQUM7QUFFRCxJQUFJLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLzhiTkFTbS8uL3NyYy9jb3JlL3BhcnNlci50cyIsIndlYnBhY2s6Ly84Yk5BU20vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vOGJOQVNtLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBU01QYXJzZXIge1xyXG5cclxuICAgIEFTTWNvZGU6IHN0cmluZztcclxuICAgIEFTVDogc3RyaW5nW10gfCBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKEFTTWNvZGU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuQVNNY29kZSA9IEFTTWNvZGU7XHJcbiAgICAgICAgdGhpcy5BU1QgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcnVuUGFyc2VyKCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuQVNNY29kZS5zcGxpdChcIiBcIikpO1xyXG4gICAgICAgIHRoaXMuQVNUID0gdGhpcy5BU01jb2RlLnNwbGl0KFwiIFwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLkFTVCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBhcnNlKCkge1xyXG4gICAgICAgIHRoaXMucnVuUGFyc2VyKCk7XHJcbiAgICB9XHJcblxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IEFTTVBhcnNlciBmcm9tICcuL2NvcmUvcGFyc2VyJztcclxuXHJcbmZ1bmN0aW9uIG1haW4oKSB7XHJcbiAgICBjb25zdCBwYXJzZXIgPSBuZXcgQVNNUGFyc2VyKFwiWE9SIDB4MDEgMHgwMiBQVVNIIDB4MDEgMTAwMlwiKTtcclxuICAgIHBhcnNlci5wYXJzZSgpO1xyXG59XHJcblxyXG5tYWluKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==