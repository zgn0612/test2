import { DtBuffType } from "../../Data/DtEnum";
import { DtEffectCreator } from "../Effect/DtEffectCreator";
import { DtBuffBase } from "./DtBuffBase";
export declare class DtBuffCommonInt extends DtBuffBase {
    private func;
    private creator;
    constructor(type: DtBuffType, func: (buff: DtBuffCommonInt) => number, creator: DtEffectCreator);
    GetInt(): number;
    IsBuffActive(): boolean;
    GetBuffActiveValue(): number;
    Clear(): void;
}
