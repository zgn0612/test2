import { DtAreaType, DtBuffType } from "../../Data/DtEnum";
import { DtCardBase } from "../DtCardBase";
import { DtEffectCreator } from "../Effect/DtEffectCreator";
import { DtGlobalBuffBase } from "./DtGlobalBuffBase";
export declare class DtGlobalBuff_ChangeDP extends DtGlobalBuffBase {
    dp: number;
    effectArea: DtAreaType;
    constructor(caster: DtCardBase, creator: DtEffectCreator);
    CheckCardInt(card: DtCardBase, type: DtBuffType): number;
}
