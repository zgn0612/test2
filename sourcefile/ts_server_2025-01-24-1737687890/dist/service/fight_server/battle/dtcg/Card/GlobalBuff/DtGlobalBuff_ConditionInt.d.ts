import { DtAreaType, DtBuffType } from "../../Data/DtEnum";
import { DtCardBase } from "../DtCardBase";
import { DtEffectCreator } from "../Effect/DtEffectCreator";
import { DtGlobalBuffBase } from "./DtGlobalBuffBase";
export declare class DtGlobalBuff_ConditionInt extends DtGlobalBuffBase {
    private func;
    effectArea: DtAreaType;
    constructor(caster: DtCardBase, type: DtBuffType, func: (buff: DtGlobalBuff_ConditionInt, card: DtCardBase) => number, creator: DtEffectCreator);
    CheckCardInt(card: DtCardBase, type: DtBuffType): number;
    Clear(): void;
}
