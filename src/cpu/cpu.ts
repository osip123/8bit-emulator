import { toInteger } from 'lodash';
import { register } from './registers';
import Decoder from '../decoder/decoder';

export default class Cpu {

    private registers: register[];
    private decoder = new Decoder();
    private cmds: string[];

    constructor(registers: register[]) {
        this.registers = registers;
        this.cmds = [];
    }

    private  execute(){

    }


    public run(){

    }

}