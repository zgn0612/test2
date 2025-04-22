"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtCardFilter_CardBattleState_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardBattleState");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardOperate_AddInheritAttBuff_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_AddInheritAttBuff");
class EC_EX1_037_O_1 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.CreateCommonArea_single(DtEffectType_1.DtEffectType.TriggerBattleOver, DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA);
        effect.SetTriggerCondition(this.GetBattleDestroyDigimonAndSelfAlive(DtEnum_1.DtEffectRoundValid.Self));
    }
    OnCommonAreaSetFilter(mcFliter) {
        mcFliter.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        mcFliter.SetFilter(new DtCardFilter_CardBattleState_1.DtCardFilter_CardBattleState(DtEnum_1.DtCardBattleState.Reset));
    }
    OnCommonAreaSetOperate(mcOperate) {
        mcOperate.SetOperate(new DtCardOperate_AddInheritAttBuff_1.DtCardOperate_AddInheritAttBuff(DtEnum_1.DtBuffType.CAN_NOT_SET_ACTIVE_STATE_AT_PHASE_ACTIVE, DtEnum_1.DtBuffDurationType.PhaseActiveOverOpponent));
    }
}
exports.default = EC_EX1_037_O_1;
//# sourceMappingURL=EC_EX1_037_O_1.js.map