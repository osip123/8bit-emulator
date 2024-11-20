import { toInteger } from "lodash"

export default function bin(dec: string) {
    const bn = toInteger(dec).toString()
    return Number(bn).toString(2)
}