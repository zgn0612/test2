"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtConTriggerCardMove_1 = require("../Effect/TriggerCondition/DtConTriggerCardMove");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardOperate_ChangeState_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_ChangeState");
class EC_EX2_043_2 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerCardMove);
        effect.SetTriggerCondition(new DtConTriggerCardMove_1.DtConTriggerCardMove(DtEnum_1.DtEffectRoundValid.Self, DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtSkillTargetToPlayer.Self).SetBeDiscardFromHand());
        effect.SetOtherType(DtEffect_1.DtEffectOtherType.OneTurnOnce);
        effect.SetEffectActivateAsk();
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.BATTLE_AREA);
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetOperate(new DtCardOperate_ChangeState_1.DtCardOperate_ChangeState(DtEnum_1.DtCardBattleState.Activate));
    }
}
exports.default = EC_EX2_043_2;
//# sourceMappingURL=EC_EX2_043_2.js.map