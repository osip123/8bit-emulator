import { registersCode } from "./registers"

export interface IArrdReg {
    addr: number
    type: registersCode
}

export const regarrds:IArrdReg[] = [
    {
        type: registersCode.A,
        addr: 0x01
    },
    {
        type: registersCode.B,
        addr: 0x02
    },
    {
        type: registersCode.C,
        addr: 0x03
    },    
    {
        type: registersCode.D,
        addr: 0x04
    },    
    {
        type: registersCode.E,
        addr: 0x05
    },
    {
        type: registersCode.H,
        addr: 0x06
    },
    {
        type: registersCode.L,
        addr: 0x07
    },
]