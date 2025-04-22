import { DtCardBase } from "../DtCardBase";
import { DtEffectCreator } from "../Effect/DtEffectCreator";
import { DtGlobalBuff_ConditionAttribute } from "../GlobalBuff/DtGlobalBuff_ConditionAttribute";
export default class EC_BT5_058_3 extends DtEffectCreator {
    SetEffect(): void;
    private Effect;
    BuffCon(buff: DtGlobalBuff_ConditionAttribute, card: DtCardBase): boolean;
}
