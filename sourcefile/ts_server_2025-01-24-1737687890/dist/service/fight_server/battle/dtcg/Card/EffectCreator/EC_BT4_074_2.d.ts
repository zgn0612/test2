import { DtEffectResult } from "../Effect/DtEffect";
import DtEnhanceEffectCreatorts from "../Effect/DtEnhanceEffectCreatorts";
import { DtSkillCardFiterMachine } from "../Skill/DtSkillCardFilter/DtSkillCardFiterMachine";
import { DtSkillCardOperateMachine } from "../Skill/DtSkillCardOperate/DtSkillCardOperateMachine";
import { DtSkillPlayerChoose } from "../Skill/DtSkillPlayerChooseBase";
export default class EC_BT4_074_2 extends DtEnhanceEffectCreatorts {
    private cardCount;
    SetEffect(): void;
    protected OnCommonAreaSetFilter(mcFliter: DtSkillCardFiterMachine): void;
    protected OnCommonAreaSetOperate(mcOperate: DtSkillCardOperateMachine): void;
    protected AddCost(): DtEffectResult;
    protected OnCommonInitSkill(skil: DtSkillPlayerChoose): void;
}
