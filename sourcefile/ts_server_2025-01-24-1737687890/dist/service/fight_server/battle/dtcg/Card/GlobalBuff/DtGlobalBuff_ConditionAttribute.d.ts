import { DtAreaType, DtBuffType } from "../../Data/DtEnum";
import { DtCardBase } from "../DtCardBase";
import { DtEffectCreator } from "../Effect/DtEffectCreator";
import { DtGlobalBuffBase } from "./DtGlobalBuffBase";
export declare class DtGlobalBuff_ConditionAttribute extends DtGlobalBuffBase {
    private func;
    effectArea: DtAreaType;
    constructor(caster: DtCardBase, type: DtBuffType, func: (buff: DtGlobalBuff_ConditionAttribute, card: DtCardBase) => boolean, creator: DtEffectCreator);
    Condition(card: DtCardBase, type: DtBuffType): boolean;
    Clear(): void;
}
