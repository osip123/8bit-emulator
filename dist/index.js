/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/cpu/regaddr.ts":
/*!****************************!*\
  !*** ./src/cpu/regaddr.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.regarrds = void 0;
var registers_1 = __webpack_require__(/*! ./registers */ "./src/cpu/registers.ts");
exports.regarrds = [
    {
        type: registers_1.registersCode.A,
        addr: 0x01
    },
    {
        type: registers_1.registersCode.B,
        addr: 0x02
    },
    {
        type: registers_1.registersCode.C,
        addr: 0x03
    },
    {
        type: registers_1.registersCode.D,
        addr: 0x04
    },
    {
        type: registers_1.registersCode.E,
        addr: 0x05
    },
    {
        type: registers_1.registersCode.H,
        addr: 0x06
    },
    {
        type: registers_1.registersCode.L,
        addr: 0x07
    },
];


/***/ }),

/***/ "./src/cpu/registers.ts":
/*!******************************!*\
  !*** ./src/cpu/registers.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.register = exports.registersCode = void 0;
exports.createRegisters = createRegisters;
var registersCode;
(function (registersCode) {
    registersCode[registersCode["A"] = 0] = "A";
    registersCode[registersCode["B"] = 1] = "B";
    registersCode[registersCode["C"] = 2] = "C";
    registersCode[registersCode["D"] = 3] = "D";
    registersCode[registersCode["E"] = 4] = "E";
    registersCode[registersCode["H"] = 5] = "H";
    registersCode[registersCode["L"] = 6] = "L";
})(registersCode || (exports.registersCode = registersCode = {}));
var register = /** @class */ (function () {
    function register(type, addr) {
        this.type = type;
        this.arrd = addr;
        this.buffer = null;
    }
    register.prototype.init = function () {
        this.buffer = "";
    };
    register.prototype.write = function (value) {
        this.buffer = value;
    };
    register.prototype.read = function () {
        return this.buffer;
    };
    register.prototype.clear = function () {
        this.buffer = null;
    };
    return register;
}());
exports.register = register;
function createRegisters(addrs) {
    var registers = [];
    for (var i = 0; i < addrs.length; i++) {
        var reg = new register(addrs[i].type, addrs[i].addr);
        registers.push(reg);
    }
    return registers;
}
var registerOperator = /** @class */ (function () {
    function registerOperator(registers) {
        this.registers = [];
        this.registers = registers;
    }
    return registerOperator;
}());
exports["default"] = registerOperator;
;


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
var registers_1 = __webpack_require__(/*! ./cpu/registers */ "./src/cpu/registers.ts");
var regaddr_1 = __webpack_require__(/*! ./cpu/regaddr */ "./src/cpu/regaddr.ts");
function main() {
    var registers = (0, registers_1.createRegisters)(regaddr_1.regarrds);
    console.log(registers[0]);
}
main();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3RELE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDOUIsQ0FBQztBQUVELElBQUksRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vOC1iaXQtZW11bGF0b3IvLi9zcmMvY3B1L3JlZ2FkZHIudHMiLCJ3ZWJwYWNrOi8vOC1iaXQtZW11bGF0b3IvLi9zcmMvY3B1L3JlZ2lzdGVycy50cyIsIndlYnBhY2s6Ly84LWJpdC1lbXVsYXRvci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly84LWJpdC1lbXVsYXRvci8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZWdpc3RlcnNDb2RlIH0gZnJvbSBcIi4vcmVnaXN0ZXJzXCJcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFycmRSZWcge1xyXG4gICAgYWRkcjogbnVtYmVyXHJcbiAgICB0eXBlOiByZWdpc3RlcnNDb2RlXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZWdhcnJkczpJQXJyZFJlZ1tdID0gW1xyXG4gICAge1xyXG4gICAgICAgIHR5cGU6IHJlZ2lzdGVyc0NvZGUuQSxcclxuICAgICAgICBhZGRyOiAweDAxXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHR5cGU6IHJlZ2lzdGVyc0NvZGUuQixcclxuICAgICAgICBhZGRyOiAweDAyXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHR5cGU6IHJlZ2lzdGVyc0NvZGUuQyxcclxuICAgICAgICBhZGRyOiAweDAzXHJcbiAgICB9LCAgICBcclxuICAgIHtcclxuICAgICAgICB0eXBlOiByZWdpc3RlcnNDb2RlLkQsXHJcbiAgICAgICAgYWRkcjogMHgwNFxyXG4gICAgfSwgICAgXHJcbiAgICB7XHJcbiAgICAgICAgdHlwZTogcmVnaXN0ZXJzQ29kZS5FLFxyXG4gICAgICAgIGFkZHI6IDB4MDVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdHlwZTogcmVnaXN0ZXJzQ29kZS5ILFxyXG4gICAgICAgIGFkZHI6IDB4MDZcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdHlwZTogcmVnaXN0ZXJzQ29kZS5MLFxyXG4gICAgICAgIGFkZHI6IDB4MDdcclxuICAgIH0sXHJcbl0iLCJpbXBvcnQgeyBJQXJyZFJlZyB9IGZyb20gXCIuL3JlZ2FkZHJcIjtcclxuXHJcbmV4cG9ydCBlbnVtIHJlZ2lzdGVyc0NvZGUge1xyXG4gICAgQSxcdC8vOCBiaXRcdEFjY3VtdWxhdG9yXHJcbiAgICBCLFx0Ly84IGJpdFx0R1BcclxuICAgIEMsXHQvLzggYml0XHRHUFxyXG4gICAgRCxcdC8vOCBiaXRcdEdQXHJcbiAgICBFLFx0Ly84IGJpdFx0R1BcclxuICAgIEgsXHQvLzggYml0XHRIaWdoLW9yZGVyIHdvcmRcclxuICAgIEwsXHQvLzggYml0XHRMb3ctb3JkZXIgd29yZFxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIHJlZ2lzdGVyIHtcclxuXHJcbiAgICBwdWJsaWMgdHlwZTpyZWdpc3RlcnNDb2RlO1xyXG4gICAgcHVibGljIGFycmQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgYnVmZmVyOnN0cmluZyB8IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IodHlwZTpyZWdpc3RlcnNDb2RlLCBhZGRyOm51bWJlcikge1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5hcnJkID0gYWRkcjtcclxuICAgICAgICB0aGlzLmJ1ZmZlciA9IG51bGxcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdCgpOiB2b2lke1xyXG4gICAgICAgIHRoaXMuYnVmZmVyID0gXCJcIlxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB3cml0ZSh2YWx1ZTpzdHJpbmcpOiB2b2lke1xyXG4gICAgICAgIHRoaXMuYnVmZmVyID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlYWQoKTogc3RyaW5ne1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJ1ZmZlcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xlYXIoKTogdm9pZHtcclxuICAgICAgICB0aGlzLmJ1ZmZlciA9IG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSZWdpc3RlcnMoYWRkcnM6IElBcnJkUmVnW10pOiByZWdpc3Rlcltde1xyXG4gICAgbGV0IHJlZ2lzdGVyczogcmVnaXN0ZXJbXSA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCByZWcgPSBuZXcgcmVnaXN0ZXIoYWRkcnNbaV0udHlwZSwgYWRkcnNbaV0uYWRkcik7XHJcbiAgICAgICAgcmVnaXN0ZXJzLnB1c2gocmVnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVnaXN0ZXJzO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyByZWdpc3Rlck9wZXJhdG9ye1xyXG4gICAgcmVnaXN0ZXJzOiByZWdpc3RlcltdID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocmVnaXN0ZXJzOiByZWdpc3RlcltdKXsgdGhpcy5yZWdpc3RlcnMgPSByZWdpc3RlcnM7IH1cclxuXHJcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgY3JlYXRlUmVnaXN0ZXJzLCByZWdpc3RlciB9IGZyb20gJy4vY3B1L3JlZ2lzdGVycyc7XHJcbmltcG9ydCB7IHJlZ2FycmRzIH0gZnJvbSAnLi9jcHUvcmVnYWRkcic7XHJcblxyXG5mdW5jdGlvbiBtYWluKCkge1xyXG4gICAgbGV0IHJlZ2lzdGVyczogcmVnaXN0ZXJbXSA9IGNyZWF0ZVJlZ2lzdGVycyhyZWdhcnJkcyk7XHJcbiAgICBjb25zb2xlLmxvZyhyZWdpc3RlcnNbMF0pO1xyXG59XHJcblxyXG5tYWluKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9