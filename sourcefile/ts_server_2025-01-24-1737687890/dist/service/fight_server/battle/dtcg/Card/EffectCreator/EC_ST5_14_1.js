"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtConTriggerCardChangeBattleState_1 = require("../Effect/TriggerCondition/DtConTriggerCardChangeBattleState");
const DtSkillBase_1 = require("../Skill/DtSkillBase");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardOperate_ChangeState_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_ChangeState");
class EC_ST5_14_1 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetEffectActivateAsk();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerCardChangeBattleState);
        let ctri = new DtConTriggerCardChangeBattleState_1.DtConTriggerCardChangeBattleState(DtEnum_1.DtEffectRoundValid.Opponent, DtEnum_1.DtCardType.Monster, DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtCardBattleState.Reset);
        ctri.SetReason(DtMessageData_1.DtProtoEnum_MoveReason.BlockReset);
        effect.SetTriggerCondition(ctri);
        effect.SetCondition(this.Conidtion);
        this.SetDirectSkill(effect, new DtCardOperate_ChangeState_1.DtCardOperate_ChangeState(DtEnum_1.DtCardBattleState.Reset));
        this.skill(effect);
    }
    Conidtion(effect) {
        return this.parent.cardBattleState == DtEnum_1.DtCardBattleState.Activate;
    }
    skill(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.type = DtSkillBase_1.DtSkillRunType.Perv_Fail_Then_Over;
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.BATTLE_AREA);
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetOperate(new DtCardOperate_ChangeState_1.DtCardOperate_ChangeState(DtEnum_1.DtCardBattleState.Activate));
    }
}
exports.default = EC_ST5_14_1;
//# sourceMappingURL=EC_ST5_14_1.js.map