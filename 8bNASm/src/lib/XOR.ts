import bin from "../util/bin";

export default function b8XOR(op1: string, op2: string): string {
    return " 0011" +" " + bin(op1) + " " + bin(op2);
}