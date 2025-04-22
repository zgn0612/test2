import { DtBuffSpecialEvoCondition } from "./Buff/DtBuffSpecialEvoCondition";
export declare class DtCardDataEvoResult {
    resultCost: number;
    buff: DtBuffSpecialEvoCondition;
    block: boolean;
    constructor(c: number, buf: DtBuffSpecialEvoCondition, b: boolean);
}
