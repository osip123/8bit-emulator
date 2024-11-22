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
    // let cpu = new CPU(registers)
    // cpu.execute();
}
main();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RXRELCtCQUErQjtJQUUvQixpQkFBaUI7QUFDckIsQ0FBQztBQUVELElBQUksRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vOC1iaXQtZW11bGF0b3IvLi9zcmMvY3B1L3JlZ2FkZHIudHMiLCJ3ZWJwYWNrOi8vOC1iaXQtZW11bGF0b3IvLi9zcmMvY3B1L3JlZ2lzdGVycy50cyIsIndlYnBhY2s6Ly84LWJpdC1lbXVsYXRvci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly84LWJpdC1lbXVsYXRvci8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZWdpc3RlcnNDb2RlIH0gZnJvbSBcIi4vcmVnaXN0ZXJzXCJcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFycmRSZWcge1xyXG4gICAgYWRkcjogbnVtYmVyXHJcbiAgICB0eXBlOiByZWdpc3RlcnNDb2RlXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZWdhcnJkczpJQXJyZFJlZ1tdID0gW1xyXG4gICAge1xyXG4gICAgICAgIHR5cGU6IHJlZ2lzdGVyc0NvZGUuQSxcclxuICAgICAgICBhZGRyOiAweDAxXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHR5cGU6IHJlZ2lzdGVyc0NvZGUuQixcclxuICAgICAgICBhZGRyOiAweDAyXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHR5cGU6IHJlZ2lzdGVyc0NvZGUuQyxcclxuICAgICAgICBhZGRyOiAweDAzXHJcbiAgICB9LCAgICBcclxuICAgIHtcclxuICAgICAgICB0eXBlOiByZWdpc3RlcnNDb2RlLkQsXHJcbiAgICAgICAgYWRkcjogMHgwNFxyXG4gICAgfSwgICAgXHJcbiAgICB7XHJcbiAgICAgICAgdHlwZTogcmVnaXN0ZXJzQ29kZS5FLFxyXG4gICAgICAgIGFkZHI6IDB4MDVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdHlwZTogcmVnaXN0ZXJzQ29kZS5ILFxyXG4gICAgICAgIGFkZHI6IDB4MDZcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdHlwZTogcmVnaXN0ZXJzQ29kZS5MLFxyXG4gICAgICAgIGFkZHI6IDB4MDdcclxuICAgIH0sXHJcbl0iLCJpbXBvcnQgeyBJQXJyZFJlZyB9IGZyb20gXCIuL3JlZ2FkZHJcIjtcclxuXHJcbmV4cG9ydCBlbnVtIHJlZ2lzdGVyc0NvZGUge1xyXG4gICAgQSxcdC8vOCBiaXRcdEFjY3VtdWxhdG9yXHJcbiAgICBCLFx0Ly84IGJpdFx0R1BcclxuICAgIEMsXHQvLzggYml0XHRHUFxyXG4gICAgRCxcdC8vOCBiaXRcdEdQXHJcbiAgICBFLFx0Ly84IGJpdFx0R1BcclxuICAgIEgsXHQvLzggYml0XHRIaWdoLW9yZGVyIHdvcmRcclxuICAgIEwsXHQvLzggYml0XHRMb3ctb3JkZXIgd29yZFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgcmVnaXN0ZXIge1xyXG5cclxuICAgIHB1YmxpYyB0eXBlOnJlZ2lzdGVyc0NvZGU7XHJcbiAgICBwdWJsaWMgYXJyZDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBidWZmZXI6c3RyaW5nIHwgbnVsbDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0eXBlOnJlZ2lzdGVyc0NvZGUsIGFkZHI6bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLmFycmQgPSBhZGRyO1xyXG4gICAgICAgIHRoaXMuYnVmZmVyID0gbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbml0KCk6IHZvaWR7XHJcbiAgICAgICAgdGhpcy5idWZmZXIgPSBcIlwiXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHdyaXRlKHZhbHVlOnN0cmluZyk6IHZvaWR7XHJcbiAgICAgICAgdGhpcy5idWZmZXIgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVhZCgpOiBzdHJpbmd7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVmZmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGVhcigpOiB2b2lke1xyXG4gICAgICAgIHRoaXMuYnVmZmVyID0gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVJlZ2lzdGVycyhhZGRyczogSUFycmRSZWdbXSk6IHJlZ2lzdGVyW117XHJcbiAgICBsZXQgcmVnaXN0ZXJzOiByZWdpc3RlcltdID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHJlZyA9IG5ldyByZWdpc3RlcihhZGRyc1tpXS50eXBlLCBhZGRyc1tpXS5hZGRyKTtcclxuICAgICAgICByZWdpc3RlcnMucHVzaChyZWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZWdpc3RlcnM7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHJlZ2lzdGVyT3BlcmF0b3J7XHJcbiAgICByZWdpc3RlcnM6IHJlZ2lzdGVyW10gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihyZWdpc3RlcnM6IHJlZ2lzdGVyW10peyB0aGlzLnJlZ2lzdGVycyA9IHJlZ2lzdGVyczsgfVxyXG5cclxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBjcmVhdGVSZWdpc3RlcnMsIHJlZ2lzdGVyIH0gZnJvbSAnLi9jcHUvcmVnaXN0ZXJzJztcclxuaW1wb3J0IHsgcmVnYXJyZHMgfSBmcm9tICcuL2NwdS9yZWdhZGRyJztcclxuaW1wb3J0IENQVSBmcm9tICcuL2NwdS9jcHUnO1xyXG5cclxuZnVuY3Rpb24gbWFpbigpIHtcclxuICAgIGxldCByZWdpc3RlcnM6IHJlZ2lzdGVyW10gPSBjcmVhdGVSZWdpc3RlcnMocmVnYXJyZHMpO1xyXG5cclxuICAgIC8vIGxldCBjcHUgPSBuZXcgQ1BVKHJlZ2lzdGVycylcclxuXHJcbiAgICAvLyBjcHUuZXhlY3V0ZSgpO1xyXG59XHJcblxyXG5tYWluKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9