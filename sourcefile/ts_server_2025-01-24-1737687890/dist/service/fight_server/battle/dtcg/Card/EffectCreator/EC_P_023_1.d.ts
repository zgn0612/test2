import { DtEffect } from "../Effect/DtEffect";
import DtEnhanceEffectCreatorts from "../Effect/DtEnhanceEffectCreatorts";
import { DtSkillCardFiterMachine } from "../Skill/DtSkillCardFilter/DtSkillCardFiterMachine";
import { DtSkillCardOperateMachine } from "../Skill/DtSkillCardOperate/DtSkillCardOperateMachine";
export default class EC_P_023_1 extends DtEnhanceEffectCreatorts {
    SetEffect(): void;
    protected Con(effect: DtEffect): boolean;
    protected OnCommonAreaSetFilter(mcFliter: DtSkillCardFiterMachine): void;
    protected OnCommonAreaSetOperate(mcOperate: DtSkillCardOperateMachine): void;
}
