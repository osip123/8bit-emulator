import { times } from "lodash";

export default class ASMParser {

    private ASMcode: string;
    private opCode: string[];
    private AST: string[]

    constructor(ASMcode: string) {
        this.ASMcode = ASMcode;
        this.opCode = ["", ""];
    }

    private runParser() {
        this.opCode = this.ASMcode.split(" ");
    }

    public parse(): string[] {
        this.runParser();
        this.AST = this.opCode
        return this.AST
    }

}