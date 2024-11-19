import { register } from "./registers";

export function getRegisterValue(addr: number, regList: register[]): string {
    // switch(addr) {
    //     case 0x01:
    //         return regList[0].read();
    //     case 0x02:
    //         return regList[1].read();
    //     case 0x03:
    //         return regList[2].read();
    //     case 0x04:
    //         return regList[3].read();
    //     case 0x05:
    //         return regList[4].read();
    //     case 0x06:
    //         return regList[5].read();
    //     case 0x07:
    //         return regList[6].read();
    // }
    return regList[getRegisterIndex(addr)].read();
}

export default function getRegisterIndex(addr: number): number {
    switch(addr) {
        case 0x01:
            return  0
        case 0x02:
            return 1
        case 0x03:
            return 2
        case 0x04:
            return 3
        case 0x05:
            return 4
        case 0x06:
            return 5
        case 0x07:
            return 6
    }
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
        idnex: 2
    },
    {
        addr: 0x04, 
        idnex: 3
    },
    {
        addr: 0x05, 
        idnex: 4
    },
    {
        addr: 0x06, 
        idnex: 5
    },
    {
        addr: 0x07, 
        idnex: 6
    },
];

export interface registerValue {
    addr: number;
    idnex: number;
}