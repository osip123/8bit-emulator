import { register } from "../cpu/registers";
import getRegisterIndex from "../cpu/registersutiles";
import { toInteger } from 'lodash';

export function JMP(addr: number, registers: register): void {
    
}

export function PUSH(addr: number, registers: register[], value: string): void {
    const index = getRegisterIndex(addr);
    registers[index].init();
    registers[index].write(value);
}

export default function XOR(addr1: number, addr2: number , registers: register[]): number {
    const index1  = getRegisterIndex(addr1)
    const index2 = getRegisterIndex(addr2)

    if(toInteger(registers[index1].read()) < toInteger(registers[index2].read())){
        return registers[index1].arrd
    }
    else return registers[index2].arrd
}
