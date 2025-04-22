import { DtEffect } from "../Effect/DtEffect";
import DtEnhanceEffectCreatorts from "../Effect/DtEnhanceEffectCreatorts";
import { DtSkillCardFiterMachine } from "../Skill/DtSkillCardFilter/DtSkillCardFiterMachine";
import { DtSkillCardOperateMachine } from "../Skill/DtSkillCardOperate/DtSkillCardOperateMachine";
import { DtSkillPlayerChoose } from "../Skill/DtSkillPlayerChooseBase";
export default class EC_P_024_1 extends DtEnhanceEffectCreatorts {
    SetEffect(): void;
    protected Con(effect: DtEffect): boolean;
    protected OnCommonInitSkill(skil: DtSkillPlayerChoose): void;
    protected OnCommonAreaSetFilter(mcFliter: DtSkillCardFiterMachine): void;
    protected OnCommonAreaSetOperate(mcOperate: DtSkillCardOperateMachine): void;
    private EffectDraw;
}
