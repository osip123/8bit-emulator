import { register } from '../registers';

export default class Runner{

    public runner(cmd: string,cmdid: number,registers: register[], accumulate?: number){
        if(accumulate){
            const accumulateValue:string = registers[0].read();
        }

        if(cmd === "ADD"){}

        if(cmd === "XOR"){}

        if(cmd === "PUSH"){}

    }


}