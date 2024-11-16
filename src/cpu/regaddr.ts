import { registersCode } from "./registers"

export interface IArrdReg {
    addr: number
    type: registersCode
}

export const regarrds:IArrdReg[] = [
    {
        type: registersCode.A,
        addr: 0x001
    },
    {
        type: registersCode.B,
        addr: 0x002
    },
    {
        type: registersCode.C,
        addr: 0x003
    },    
    {
        type: registersCode.D,
        addr: 0x004
    },    
    {
        type: registersCode.E,
        addr: 0x005
    },
    {
        type: registersCode.H,
        addr: 0x006
    },
    {
        type: registersCode.L,
        addr: 0x007
    },
]