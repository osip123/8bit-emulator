import * as _ from 'lodash';
import { createRegisters, register } from './cpu/registers';
import { regarrds } from './cpu/regaddr';
import CPU from './cpu/cpu';
import XOR from './instrucrion/instProgramCounterStackControl';

function main() {
    let registers: register[] = createRegisters(regarrds);

    registers[1].write("0001");
    registers[2].write("0101");
    registers[5].write("0001");
    
    registers[0].write("0101");
    registers[1].write("0111");

    let cpu = new CPU(registers)

    console.log(cpu.registers);
    cpu.execute(["0001", "0x04", "010011"]);
    console.log(cpu.registers);

    console.log(XOR(0x01, 0x02, registers))
}

main();