
export default class Decoder {

    public decode(cmd: string): string {
        switch(cmd) {
            case "0001":
                return "PUSH";
            case "0011":
                return "XOR";
            case "0101":
                return "ADD";
        }
    }

}

// private decode(cmd: string): string {
//     switch(cmd) {
//         case "0001":
//             return "PUSH";
//             break;
//         case "0011":
//             return "XOR";
//         default:
//             break;
            
//     }
// }