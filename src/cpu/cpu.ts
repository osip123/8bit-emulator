import { toInteger } from 'lodash';
import { register } from './registers';
import Decoder from '../decoder/decoder';
import { CCL } from './types/cpuCC';

export default class Cpu {

    private registers: register[];
    private decoder = new Decoder();
    private cmds: string[];

    constructor(registers: register[]) {
        this.registers = registers;
        this.cmds = [];
    }

    private registersRewrite(ccl: CCL){}

    private execute(){}

    private getNextCmd(cmds: string[]){}

    public run(){ this.execute(); }

}