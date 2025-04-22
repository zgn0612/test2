import { DtBuffBase } from "./DtBuffBase";
export declare class DtBuffChangeCost extends DtBuffBase {
    cost: number;
    constructor(changeDp: number);
    GetInt(): number;
    GetBuffActiveValue(): number;
}
