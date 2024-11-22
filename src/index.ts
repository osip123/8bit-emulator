import * as _ from 'lodash';
import { createRegisters, register } from './cpu/registers';
import { regarrds } from './cpu/regaddr';
import CPU from './cpu/cpu';

function main() {
    let registers: register[] = createRegisters(regarrds);

    registers[5].write("0001");
    registers[6].write("0011");

    let cpu = new CPU(registers)

    console.log(cpu.registers);
    cpu.execute();
}

main();