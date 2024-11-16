import { registersCode } from "../cpu/registers"

export interface IArrd {
    type: registersCode
    size: number
}

export const arrds:IArrd[] = [
    {
        size: 8,
        type: registersCode.A,
    },
]