import { register, createRegisters, registersCode } from './registers';


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

    private decode(cmd: string) {

    }

    public execute() {  }
}