import { DtCardBase } from "../DtCardBase";
import { DtEffect } from "../Effect/DtEffect";
import DtEnhanceEffectCreatorts from "../Effect/DtEnhanceEffectCreatorts";
export default class EC_BT4_090_2 extends DtEnhanceEffectCreatorts {
    SetEffect(): void;
    private active;
    private Skill;
    protected OnAttack(card: DtCardBase, effect: DtEffect): void;
}
