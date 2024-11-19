import * as _ from 'lodash';
import { createRegisters, register } from './cpu/registers';
import { regarrds } from './cpu/regaddr';
import CPU from './cpu/cpu';

function main() {
    let registers: register[] = createRegisters(regarrds);
    let cpu = new CPU(registers)
    cpu.execute(["00001", "0x04", "010011"]);
    console.log(cpu.registers);
}

main();