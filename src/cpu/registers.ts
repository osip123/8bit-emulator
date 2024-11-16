import { IArrd } from "../memory/Adrr";
import { IArrdReg } from "./regaddr";

export enum registersCode {
    A,	//8 bit	Accumulator
    B,	//8 bit	GP
    C,	//8 bit	GP
    D,	//8 bit	GP
    E,	//8 bit	GP
    H,	//8 bit	High-order word
    L,	//8 bit	Low-order word

}

class register {

    public type:registersCode;
    public arrd: number;
    private buffer:string | null;

    constructor(type:registersCode, addr:number) {
        this.type = type;
        this.arrd = addr;
        this.buffer = null
    }

    public init(): void{
        this.buffer = ""
    }

    public write(value:string): void{
        this.buffer = value;
    }

    public read(): string{
        return this.buffer;
    }

    public clear(): void{
        this.buffer = null;
    }
}

function createRegisters(addrs: IArrdReg[]): register[]{
    let registers: register[] = [];

    for (let i = 0; i < addrs.length; i++) {
        const reg = new register(addrs[i].type, addrs[i].addr);
        registers.push(reg);
    }

    return registers;
}