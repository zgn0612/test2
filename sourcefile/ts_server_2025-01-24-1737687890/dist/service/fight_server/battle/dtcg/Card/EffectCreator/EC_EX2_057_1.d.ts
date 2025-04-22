import { DtAreaType, DtBuffEffectToType, DtEffectRoundValid } from "../../Data/DtEnum";
import { DtCardBase } from "../DtCardBase";
import { DtEffectCreator } from "../Effect/DtEffectCreator";
import { DtGlobalBuff_ConditionInt } from "../GlobalBuff/DtGlobalBuff_ConditionInt";
export default class EC_EX2_057_1 extends DtEffectCreator {
    SetEffect(): void;
    private Effect;
    private buffCon;
    protected GetGlobalBuff_ChangeCost(func: (buff: DtGlobalBuff_ConditionInt, card: DtCardBase) => number, effectToType: DtBuffEffectToType, toArea: DtAreaType, roundValid: DtEffectRoundValid): DtGlobalBuff_ConditionInt;
}
