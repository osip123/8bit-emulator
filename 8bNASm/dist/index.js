/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/compiller/compiller.ts":
/*!************************************!*\
  !*** ./src/compiller/compiller.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var bin_1 = __webpack_require__(/*! ../util/bin */ "./src/util/bin.ts");
var ASMCompiler = /** @class */ (function () {
    function ASMCompiler(AST) {
        this.AST = AST;
        this.biteCode = "";
    }
    ASMCompiler.prototype.compile = function () {
        var i = 0;
        while (i < this.AST.length) {
            if (this.AST[i] === "PUSH") {
                this.biteCode = this.biteCode + " 0001" + " " + (0, bin_1.default)(this.AST[i + 1]) + " " + (0, bin_1.default)(this.AST[i + 2]);
                i += 3;
            }
            else if (this.AST[i] === "ADD") {
                this.biteCode = this.biteCode + " 0010" + " " + (0, bin_1.default)(this.AST[i + 1]) + " " + (0, bin_1.default)(this.AST[i + 2]);
                i += 3;
            }
            else if (this.AST[i] === "XOR") {
                this.biteCode = this.biteCode + " 0011" + " " + (0, bin_1.default)(this.AST[i + 1]) + " " + (this.AST[i + 2]);
                i += 3;
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
        this.opCode = [];
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


/***/ }),

/***/ "./src/util/bin.ts":
/*!*************************!*\
  !*** ./src/util/bin.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = bin;
function bin(dec) {
    return Number(dec).toString(2);
}


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
    var parser = new parser_1.default("PUSH 0x02 0101 XOR 0x01 0x02 ADD 0x01 0110");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7OztBQ3JCQSxnRkFBc0M7QUFDdEMsbUdBQWdEO0FBRWhELFNBQVMsSUFBSTtJQUNULElBQU0sTUFBTSxHQUFHLElBQUksZ0JBQVMsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO0lBQzNFLElBQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMzQixJQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JCLE9BQU87SUFDWCxDQUFDO0lBQ0QsSUFBTSxTQUFTLEdBQUcsSUFBSSxtQkFBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7QUFFckMsQ0FBQztBQUVELElBQUksRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vOGJOQVNtLy4vc3JjL2NvbXBpbGxlci9jb21waWxsZXIudHMiLCJ3ZWJwYWNrOi8vOGJOQVNtLy4vc3JjL2NvcmUvcGFyc2VyLnRzIiwid2VicGFjazovLzhiTkFTbS8uL3NyYy91dGlsL2Jpbi50cyIsIndlYnBhY2s6Ly84Yk5BU20vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vOGJOQVNtLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBiaW4gZnJvbSAnLi4vdXRpbC9iaW4nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQVNNQ29tcGlsZXIge1xyXG5cclxuICAgIHByaXZhdGUgQVNUOiBzdHJpbmdbXVxyXG4gICAgcHJpdmF0ZSBiaXRlQ29kZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKEFTVDogc3RyaW5nW10pIHtcclxuICAgICAgICB0aGlzLkFTVCA9IEFTVDtcclxuICAgICAgICB0aGlzLmJpdGVDb2RlID0gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29tcGlsZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCBpOiBudW1iZXIgPSAwO1xyXG5cclxuICAgICAgICB3aGlsZSAoaSA8IHRoaXMuQVNULmxlbmd0aCl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuQVNUW2ldID09PSBcIlBVU0hcIil7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJpdGVDb2RlID0gdGhpcy5iaXRlQ29kZSArIFwiIDAwMDFcIiArXCIgXCIgKyBiaW4odGhpcy5BU1RbaSsxXSkgKyBcIiBcIiArIGJpbih0aGlzLkFTVFtpKzJdKTtcclxuICAgICAgICAgICAgICAgIGkgKz0gMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKHRoaXMuQVNUW2ldID09PSBcIkFERFwiKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuYml0ZUNvZGUgPSB0aGlzLmJpdGVDb2RlICsgXCIgMDAxMFwiICtcIiBcIiArIGJpbih0aGlzLkFTVFtpKzFdKSArIFwiIFwiICsgYmluKHRoaXMuQVNUW2krMl0pO1xyXG4gICAgICAgICAgICAgICAgaSArPSAzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYodGhpcy5BU1RbaV0gPT09IFwiWE9SXCIpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iaXRlQ29kZSA9IHRoaXMuYml0ZUNvZGUgKyBcIiAwMDExXCIgK1wiIFwiICsgYmluKHRoaXMuQVNUW2krMV0pICsgXCIgXCIgKyAodGhpcy5BU1RbaSsyXSk7XHJcbiAgICAgICAgICAgICAgICBpICs9IDM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmJpdGVDb2RlO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iLCJpbXBvcnQgeyB0aW1lcyB9IGZyb20gXCJsb2Rhc2hcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFTTVBhcnNlciB7XHJcblxyXG4gICAgcHJpdmF0ZSBBU01jb2RlOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIG9wQ29kZTogc3RyaW5nW107XHJcbiAgICBwcml2YXRlIEFTVDogc3RyaW5nW11cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihBU01jb2RlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLkFTTWNvZGUgPSBBU01jb2RlO1xyXG4gICAgICAgIHRoaXMub3BDb2RlID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBydW5QYXJzZXIoKSB7XHJcbiAgICAgICAgdGhpcy5vcENvZGUgPSB0aGlzLkFTTWNvZGUuc3BsaXQoXCIgXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwYXJzZSgpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgdGhpcy5ydW5QYXJzZXIoKTtcclxuICAgICAgICB0aGlzLkFTVCA9IHRoaXMub3BDb2RlXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuQVNUXHJcbiAgICB9XHJcblxyXG59IiwiXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJpbihkZWM6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIE51bWJlcihkZWMpLnRvU3RyaW5nKDIpXHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgQVNNUGFyc2VyIGZyb20gJy4vY29yZS9wYXJzZXInO1xyXG5pbXBvcnQgQVNNQ29tcGlsZXIgZnJvbSAnLi9jb21waWxsZXIvY29tcGlsbGVyJztcclxuXHJcbmZ1bmN0aW9uIG1haW4oKSB7XHJcbiAgICBjb25zdCBwYXJzZXIgPSBuZXcgQVNNUGFyc2VyKFwiUFVTSCAweDAyIDAxMDEgWE9SIDB4MDEgMHgwMiBBREQgMHgwMSAwMTEwXCIpO1xyXG4gICAgY29uc3QgQVNUID0gcGFyc2VyLnBhcnNlKCk7XHJcbiAgICBpZighQVNUKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFcnJvclwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBjb21waWxsZXIgPSBuZXcgQVNNQ29tcGlsZXIoQVNUKTtcclxuICAgIGNvbnNvbGUubG9nKGNvbXBpbGxlci5jb21waWxlKCkpO1xyXG4gICAgXHJcbn1cclxuXHJcbm1haW4oKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9