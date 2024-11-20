import * as _ from 'lodash';
import ASMParser from './core/parser';

function main() {
    const parser = new ASMParser("XOR 0x01 0x02 PUSH 0x01 1002");
    parser.parse();
}

main();
