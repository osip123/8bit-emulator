import b8ADD from '../lib/ADD';
import b8BPUSH from '../lib/PUSH';
import b8XOR from '../lib/XOR';
import bin from '../util/bin';

export default class ASMCompiler {

    private AST: string[]
    private biteCode: string;

    constructor(AST: string[]) {
        this.AST = AST;
        this.biteCode = "";
    }

    public compile(): string {
        let i: number = 0;

        while (i < this.AST.length){
            if(this.AST[i] === "PUSH"){
                this.biteCode = this.biteCode + b8BPUSH(this.AST[i + 1], this.AST[i + 2]);
                i += 3;
            }
            else if(this.AST[i] === "ADD"){
                this.biteCode = this.biteCode + b8ADD(this.AST[i + 1], this.AST[i + 2]);
                i += 3;
            }
            else if(this.AST[i] === "XOR"){
                this.biteCode = this.biteCode + b8XOR(this.AST[i + 1], this.AST[i + 2]);
                i += 3;
            }
        }

        return this.biteCode;
    }


}