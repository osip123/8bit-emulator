import { toInteger } from 'lodash';
import { register, createRegisters, registersCode } from './registers';
import { PUSH } from '../instrucrion/instProgramCounterStackControl';
import { getRegisterValue } from './registersutiles';


export default class CPU {
    private current_cmd: string;
    private cmds: string[];
    public registers: register[]

    constructor(registes: register[]) {
        this.registers = registes;
    }

    private cmdList(): void {
        for(let i = 0; i < register.length; i++) {
            if(this.registers[i].type === registersCode.A){
                this.cmds[0] = "00000000";
            }
            if(this.registers[i].type === registersCode.B){
                this.cmds[1] = this.registers[i].read();
            }
            if(this.registers[i].type === registersCode.C){
                this.cmds[2] = this.registers[i].read();
            }
            if(this.registers[i].type === registersCode.D){
                this.cmds[3] = this.registers[i].read();
            }
            if(this.registers[i].type === registersCode.E){
                this.cmds[4] = this.registers[i].read();
            }
            if(this.registers[i].type === registersCode.H){
                this.cmds[5] = this.registers[i].read();
            }
            if(this.registers[i].type === registersCode.L){
                this.cmds[6] = this.registers[i].read();
            }
        }
    }

    private decode(cmd: string): string {
        switch(cmd) {
            case "00001":
                return "PUSH";
                break;
            case "0001":
                return "XOR";
            default:
                break;
                
        }
    }

    public execute(cmd: string[]) { 
        // this.current_cmd = this.decode(getRegisterValue(toInteger(cmd[0]), this.registers));
        this.current_cmd = this.decode(this.registers[0].read());
        console.log(typeof this.current_cmd);
        console.log(this.current_cmd);

    }

    public run(cmd: string[]) {
        switch(this.current_cmd){
            case "PUSH":
                let addr = toInteger(cmd[1]);
                PUSH(addr, this.registers, cmd[2]);
        }
    }
}