import { DtBuffBase } from "./DtBuffBase";
export declare class DtBuffChangePower extends DtBuffBase {
    power: number;
    constructor(power: number);
    GetInt(): number;
    GetBuffActiveValue(): number;
}
