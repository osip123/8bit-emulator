import bin from "../util/bin";

export default function b8ADD(op1: string, op2: string) {
    return " 0010" +" " + bin(op1) + " " + bin(op2);
}