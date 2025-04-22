import { DtBuffType } from "../../Data/DtEnum";
import { DtEffectCreator } from "../Effect/DtEffectCreator";
import { DtBuffBase } from "./DtBuffBase";
export declare class DtBuffCommonAny extends DtBuffBase {
    private func;
    private creator;
    constructor(type: DtBuffType, func: (buff: DtBuffCommonAny) => number, creator: DtEffectCreator);
    GetAny(): any;
    IsBuffActive(): boolean;
    GetBuffActiveValue(): number;
    Clear(): void;
}
