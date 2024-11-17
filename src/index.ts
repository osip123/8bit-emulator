import * as _ from 'lodash';
import { createRegisters, register } from './cpu/registers';
import { regarrds } from './cpu/regaddr';
import { PUSH } from './instrucrion/instProgramCounterStackControl';

function main() {
    let registers: register[] = createRegisters(regarrds);
    PUSH(0x01, registers, "01");
    console.log(registers[0]);
}

main();