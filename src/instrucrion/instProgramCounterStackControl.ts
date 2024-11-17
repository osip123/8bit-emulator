import { register } from "../cpu/registers";
import getRegisterIndex from "../cpu/registersutiles";

export function JMP(addr: number, registers: register): void {
    
}

export function PUSH(addr: number, registers: register[], value: string): void {
    const index = getRegisterIndex(addr);
    registers[index].init();
    registers[index].write(value);
}