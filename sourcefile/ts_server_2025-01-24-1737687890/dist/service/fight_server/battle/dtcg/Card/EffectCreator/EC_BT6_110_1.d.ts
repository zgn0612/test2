import DtEnhanceEffectCreatorts from "../Effect/DtEnhanceEffectCreatorts";
import { DtSkillCardFiterMachine } from "../Skill/DtSkillCardFilter/DtSkillCardFiterMachine";
import { DtSkillCardOperateMachine } from "../Skill/DtSkillCardOperate/DtSkillCardOperateMachine";
import { DtSkillPlayerChoose } from "../Skill/DtSkillPlayerChooseBase";
export default class EC_BT6_110_1 extends DtEnhanceEffectCreatorts {
    private card;
    SetEffect(): void;
    private initfunc;
    private SetEffect2;
    protected OnCommonAreaSetFilter(mcFliter: DtSkillCardFiterMachine): void;
    protected OnCommonAreaSetOperate(mcOperate: DtSkillCardOperateMachine): void;
    protected OnCommonInitSkill(skil: DtSkillPlayerChoose): void;
}
