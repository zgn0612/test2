import { DtBuffType } from "../../Data/DtEnum";
import { DtEffectCreator } from "../Effect/DtEffectCreator";
import { DtBuffBase } from "./DtBuffBase";
export declare class DtBuffConditionAttribute extends DtBuffBase {
    private func;
    private creator;
    constructor(type: DtBuffType, func: (buff: DtBuffConditionAttribute) => boolean, creator: DtEffectCreator);
    Condition(): boolean;
    IsBuffActive(): boolean;
    Clear(): void;
}
