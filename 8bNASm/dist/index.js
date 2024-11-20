/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/compiller/compiller.ts":
/*!************************************!*\
  !*** ./src/compiller/compiller.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var ASMCompiler = /** @class */ (function () {
    function ASMCompiler(AST) {
        this.AST = AST;
        this.biteCode = "";
    }
    ASMCompiler.prototype.compile = function () {
        var i = 0;
        while (i < this.AST.length) {
            if (this.AST[i] === "PUSH") {
                this.biteCode = this.biteCode + "0001" + this.AST[i + 1] + this.AST[i + 2];
                i += 3;
            }
            else {
                return "null";
            }
        }
        return this.biteCode;
    };
    return ASMCompiler;
}());
exports["default"] = ASMCompiler;


/***/ }),

/***/ "./src/core/parser.ts":
/*!****************************!*\
  !*** ./src/core/parser.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var ASMParser = /** @class */ (function () {
    function ASMParser(ASMcode) {
        this.ASMcode = ASMcode;
        this.opCode = ["", ""];
    }
    ASMParser.prototype.runParser = function () {
        this.opCode = this.ASMcode.split(" ");
    };
    ASMParser.prototype.parse = function () {
        this.runParser();
        this.AST = this.opCode;
        return this.AST;
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
var compiller_1 = __webpack_require__(/*! ./compiller/compiller */ "./src/compiller/compiller.ts");
function main() {
    var parser = new parser_1.default("PUSH");
    var AST = parser.parse();
    if (!AST) {
        console.log("Error");
        return;
    }
    var compiller = new compiller_1.default(AST);
    console.log(compiller.compile());
}
main();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0E7SUFLSSxxQkFBWSxHQUFhO1FBQ3JCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVNLDZCQUFPLEdBQWQ7UUFDSSxJQUFJLENBQUMsR0FBVyxDQUFDLENBQUM7UUFFbEIsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMsQ0FBQztZQUN4QixJQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssTUFBTSxFQUFDLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZFLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDWCxDQUFDO2lCQUNHLENBQUM7Z0JBQ0QsT0FBTyxNQUFNLENBQUM7WUFDbEIsQ0FBQztRQUNMLENBQUM7UUFFRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQUdMLGtCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUMxQkQ7SUFNSSxtQkFBWSxPQUFlO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVPLDZCQUFTLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRU0seUJBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLEdBQUc7SUFDbkIsQ0FBQztJQUVMLGdCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7VUN2QkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7Ozs7O0FDckJBLGdGQUFzQztBQUN0QyxtR0FBZ0Q7QUFFaEQsU0FBUyxJQUFJO0lBQ1QsSUFBTSxNQUFNLEdBQUcsSUFBSSxnQkFBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JDLElBQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMzQixJQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JCLE9BQU87SUFDWCxDQUFDO0lBQ0QsSUFBTSxTQUFTLEdBQUcsSUFBSSxtQkFBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7QUFFckMsQ0FBQztBQUVELElBQUksRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vOGJOQVNtLy4vc3JjL2NvbXBpbGxlci9jb21waWxsZXIudHMiLCJ3ZWJwYWNrOi8vOGJOQVNtLy4vc3JjL2NvcmUvcGFyc2VyLnRzIiwid2VicGFjazovLzhiTkFTbS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly84Yk5BU20vLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFTTUNvbXBpbGVyIHtcclxuXHJcbiAgICBwcml2YXRlIEFTVDogc3RyaW5nW11cclxuICAgIHByaXZhdGUgYml0ZUNvZGU6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihBU1Q6IHN0cmluZ1tdKSB7XHJcbiAgICAgICAgdGhpcy5BU1QgPSBBU1Q7XHJcbiAgICAgICAgdGhpcy5iaXRlQ29kZSA9IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbXBpbGUoKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgaTogbnVtYmVyID0gMDtcclxuXHJcbiAgICAgICAgd2hpbGUgKGkgPCB0aGlzLkFTVC5sZW5ndGgpe1xyXG4gICAgICAgICAgICBpZih0aGlzLkFTVFtpXSA9PT0gXCJQVVNIXCIpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iaXRlQ29kZSA9IHRoaXMuYml0ZUNvZGUgKyBcIjAwMDFcIiArIHRoaXMuQVNUW2krMV0gKyB0aGlzLkFTVFtpKzJdO1xyXG4gICAgICAgICAgICAgICAgaSArPSAzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJudWxsXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmJpdGVDb2RlO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iLCJpbXBvcnQgeyB0aW1lcyB9IGZyb20gXCJsb2Rhc2hcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFTTVBhcnNlciB7XHJcblxyXG4gICAgcHJpdmF0ZSBBU01jb2RlOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIG9wQ29kZTogc3RyaW5nW107XHJcbiAgICBwcml2YXRlIEFTVDogc3RyaW5nW11cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihBU01jb2RlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLkFTTWNvZGUgPSBBU01jb2RlO1xyXG4gICAgICAgIHRoaXMub3BDb2RlID0gW1wiXCIsIFwiXCJdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcnVuUGFyc2VyKCkge1xyXG4gICAgICAgIHRoaXMub3BDb2RlID0gdGhpcy5BU01jb2RlLnNwbGl0KFwiIFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGFyc2UoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHRoaXMucnVuUGFyc2VyKCk7XHJcbiAgICAgICAgdGhpcy5BU1QgPSB0aGlzLm9wQ29kZVxyXG4gICAgICAgIHJldHVybiB0aGlzLkFTVFxyXG4gICAgfVxyXG5cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBBU01QYXJzZXIgZnJvbSAnLi9jb3JlL3BhcnNlcic7XHJcbmltcG9ydCBBU01Db21waWxlciBmcm9tICcuL2NvbXBpbGxlci9jb21waWxsZXInO1xyXG5cclxuZnVuY3Rpb24gbWFpbigpIHtcclxuICAgIGNvbnN0IHBhcnNlciA9IG5ldyBBU01QYXJzZXIoXCJQVVNIXCIpO1xyXG4gICAgY29uc3QgQVNUID0gcGFyc2VyLnBhcnNlKCk7XHJcbiAgICBpZighQVNUKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFcnJvclwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBjb21waWxsZXIgPSBuZXcgQVNNQ29tcGlsZXIoQVNUKTtcclxuICAgIGNvbnNvbGUubG9nKGNvbXBpbGxlci5jb21waWxlKCkpO1xyXG4gICAgXHJcbn1cclxuXHJcbm1haW4oKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9