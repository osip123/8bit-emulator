import * as _ from 'lodash';
import { createRegisters, register } from './cpu/registers';
import { regarrds } from './cpu/regaddr';

function main() {
    let registers: register[] = createRegisters(regarrds);
    console.log(registers[0]);
}

main();