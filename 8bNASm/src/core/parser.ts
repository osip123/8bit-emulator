
export default class ASMParser {

    ASMcode: string;
    AST: string[] | null;

    constructor(ASMcode: string) {
        this.ASMcode = ASMcode;
        this.AST = null;
    }

    private runParser() {
        this.AST = this.ASMcode.split(" ");
        console.log(this.AST);
    }

    public parse() {
        this.runParser();
    }

}