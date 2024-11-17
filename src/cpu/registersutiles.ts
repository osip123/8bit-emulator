import { register } from "./registers";

export function getRegisterValue(addr: number, regList: register[]) {

}

export const regiderAdresses: registerValue[] = [
    {
        addr: 0x01, 
        idnex: 0
    },
    {
        addr: 0x02, 
        idnex: 1
    },
    {
        addr: 0x03, 
        idnex: 1
    },
    {
        addr: 0x04, 
        idnex: 1
    },
    {
        addr: 0x05, 
        idnex: 1
    },
    {
        addr: 0x06, 
        idnex: 1
    },
    {
        addr: 0x07, 
        idnex: 1
    },
];

export interface registerValue {
    addr: number;
    idnex: number;
}