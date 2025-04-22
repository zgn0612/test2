import { DtBuffType } from "../../Data/DtEnum";
import { DtBuffBase } from "./DtBuffBase";
export declare class DtBuffAttribute_int extends DtBuffBase {
    private value;
    constructor(type: DtBuffType, value: number);
    GetInt(): number;
    GetAny(): number;
    GetBuffActiveValue(): number;
}
