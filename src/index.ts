import * as _ from 'lodash';
import { createRegisters, register } from './cpu/registers';
import { regarrds } from './cpu/regaddr';
import CPU from './cpu/cpu';

function main() {
    let registers: register[] = createRegisters(regarrds);

    registers[1].write("0011");
    registers[2].write("0101");
    registers[5].write("0001");

    let cpu = new CPU(registers)

    cpu.execute(["00001", "0x04", "010011"]);
    console.log(cpu.registers);
}

main();