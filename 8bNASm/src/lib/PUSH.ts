import bin from "../util/bin";

export default function b8BPUSH(op1: string, op2: string):string {
    return  " 0001" +" " + bin(op1) + " " + bin(op2);
}