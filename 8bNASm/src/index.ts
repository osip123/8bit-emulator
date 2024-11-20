import * as _ from 'lodash';
import ASMParser from './core/parser';
import ASMCompiler from './compiller/compiller';

function main() {
    const parser = new ASMParser("PUSH 0x02 0101");
    const AST = parser.parse();
    if(!AST) {
        console.log("Error");
        return;
    }
    const compiller = new ASMCompiler(AST);
    console.log(compiller.compile());
    
}

main();
