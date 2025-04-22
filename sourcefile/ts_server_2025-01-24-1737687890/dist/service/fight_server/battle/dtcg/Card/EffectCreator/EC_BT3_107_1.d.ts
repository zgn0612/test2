import { DtEffectResult } from "../Effect/DtEffect";
import DtEnhanceEffectCreatorts from "../Effect/DtEnhanceEffectCreatorts";
import { DtSkillCardFiterMachine } from "../Skill/DtSkillCardFilter/DtSkillCardFiterMachine";
import { DtSkillCardOperateMachine } from "../Skill/DtSkillCardOperate/DtSkillCardOperateMachine";
export default class EC_BT3_107_1 extends DtEnhanceEffectCreatorts {
    private destoryCard;
    SetEffect(): void;
    protected OnCommonAreaSetFilter(mcFliter: DtSkillCardFiterMachine): void;
    protected OnCommonAreaSetOperate(mcOperate: DtSkillCardOperateMachine): void;
    protected OnDestory(): DtEffectResult;
}
