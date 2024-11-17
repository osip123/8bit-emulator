import * as _ from 'lodash';
import { createRegisters, register } from './cpu/registers';
import { regarrds } from './cpu/regaddr';
import { PUSH } from './instrucrion/instProgramCounterStackControl';
import getRegisterIndex, { getRegisterValue } from './cpu/registersutiles';

function main() {
    let registers: register[] = createRegisters(regarrds);
    PUSH(0x04, registers, "00");
    let value:string = getRegisterValue(0x04, registers);
    console.log(registers[getRegisterIndex(0x04)]);
    console.log(value);
}

main();