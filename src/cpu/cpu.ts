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
            case "0001":
                return "PUSH";
                break;
            case "0011":
                return "XOR";
            default:
                break;
                
        }
    }

    public execute(cmd: string[]) { 
        console.log(this.registers[1].read());
        let decoded_cmd = this.decode(this.registers[1].read())
        console.log(decoded_cmd);
        this.run(decoded_cmd, cmd);
    }

    public run(dc: string, cmd: string[]) {
        switch(dc){
            case "PUSH":
                let addr = toInteger(cmd[1]);
                console.log(addr);
                PUSH(addr, this.registers, cmd[2]);
                break
        }
    }
}