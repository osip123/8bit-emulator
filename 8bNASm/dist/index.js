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
                this.biteCode = this.biteCode + " 0001" + " " + this.AST[i + 1] + " " + this.AST[i + 2];
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
    var parser = new parser_1.default("PUSH 0x02 0101");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0E7SUFLSSxxQkFBWSxHQUFhO1FBQ3JCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVNLDZCQUFPLEdBQWQ7UUFDSSxJQUFJLENBQUMsR0FBVyxDQUFDLENBQUM7UUFFbEIsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMsQ0FBQztZQUN4QixJQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssTUFBTSxFQUFDLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLEdBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkYsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNYLENBQUM7aUJBQ0csQ0FBQztnQkFDRCxPQUFPLE1BQU0sQ0FBQztZQUNsQixDQUFDO1FBQ0wsQ0FBQztRQUVELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBR0wsa0JBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7OztBQzFCRDtJQU1JLG1CQUFZLE9BQWU7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRU8sNkJBQVMsR0FBakI7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFTSx5QkFBSyxHQUFaO1FBQ0ksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU07UUFDdEIsT0FBTyxJQUFJLENBQUMsR0FBRztJQUNuQixDQUFDO0lBRUwsZ0JBQUM7QUFBRCxDQUFDOzs7Ozs7OztVQ3ZCRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7Ozs7QUNyQkEsZ0ZBQXNDO0FBQ3RDLG1HQUFnRDtBQUVoRCxTQUFTLElBQUk7SUFDVCxJQUFNLE1BQU0sR0FBRyxJQUFJLGdCQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUMvQyxJQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDM0IsSUFBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQixPQUFPO0lBQ1gsQ0FBQztJQUNELElBQU0sU0FBUyxHQUFHLElBQUksbUJBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0FBRXJDLENBQUM7QUFFRCxJQUFJLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLzhiTkFTbS8uL3NyYy9jb21waWxsZXIvY29tcGlsbGVyLnRzIiwid2VicGFjazovLzhiTkFTbS8uL3NyYy9jb3JlL3BhcnNlci50cyIsIndlYnBhY2s6Ly84Yk5BU20vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vOGJOQVNtLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBU01Db21waWxlciB7XHJcblxyXG4gICAgcHJpdmF0ZSBBU1Q6IHN0cmluZ1tdXHJcbiAgICBwcml2YXRlIGJpdGVDb2RlOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoQVNUOiBzdHJpbmdbXSkge1xyXG4gICAgICAgIHRoaXMuQVNUID0gQVNUO1xyXG4gICAgICAgIHRoaXMuYml0ZUNvZGUgPSBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb21waWxlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IGk6IG51bWJlciA9IDA7XHJcblxyXG4gICAgICAgIHdoaWxlIChpIDwgdGhpcy5BU1QubGVuZ3RoKXtcclxuICAgICAgICAgICAgaWYodGhpcy5BU1RbaV0gPT09IFwiUFVTSFwiKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuYml0ZUNvZGUgPSB0aGlzLmJpdGVDb2RlICsgXCIgMDAwMVwiICtcIiBcIiArIHRoaXMuQVNUW2krMV0gKyBcIiBcIiArIHRoaXMuQVNUW2krMl07XHJcbiAgICAgICAgICAgICAgICBpICs9IDM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIm51bGxcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYml0ZUNvZGU7XHJcbiAgICB9XHJcblxyXG5cclxufSIsImltcG9ydCB7IHRpbWVzIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQVNNUGFyc2VyIHtcclxuXHJcbiAgICBwcml2YXRlIEFTTWNvZGU6IHN0cmluZztcclxuICAgIHByaXZhdGUgb3BDb2RlOiBzdHJpbmdbXTtcclxuICAgIHByaXZhdGUgQVNUOiBzdHJpbmdbXVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKEFTTWNvZGU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuQVNNY29kZSA9IEFTTWNvZGU7XHJcbiAgICAgICAgdGhpcy5vcENvZGUgPSBbXCJcIiwgXCJcIl07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBydW5QYXJzZXIoKSB7XHJcbiAgICAgICAgdGhpcy5vcENvZGUgPSB0aGlzLkFTTWNvZGUuc3BsaXQoXCIgXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwYXJzZSgpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgdGhpcy5ydW5QYXJzZXIoKTtcclxuICAgICAgICB0aGlzLkFTVCA9IHRoaXMub3BDb2RlXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuQVNUXHJcbiAgICB9XHJcblxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IEFTTVBhcnNlciBmcm9tICcuL2NvcmUvcGFyc2VyJztcclxuaW1wb3J0IEFTTUNvbXBpbGVyIGZyb20gJy4vY29tcGlsbGVyL2NvbXBpbGxlcic7XHJcblxyXG5mdW5jdGlvbiBtYWluKCkge1xyXG4gICAgY29uc3QgcGFyc2VyID0gbmV3IEFTTVBhcnNlcihcIlBVU0ggMHgwMiAwMTAxXCIpO1xyXG4gICAgY29uc3QgQVNUID0gcGFyc2VyLnBhcnNlKCk7XHJcbiAgICBpZighQVNUKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFcnJvclwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBjb21waWxsZXIgPSBuZXcgQVNNQ29tcGlsZXIoQVNUKTtcclxuICAgIGNvbnNvbGUubG9nKGNvbXBpbGxlci5jb21waWxlKCkpO1xyXG4gICAgXHJcbn1cclxuXHJcbm1haW4oKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9