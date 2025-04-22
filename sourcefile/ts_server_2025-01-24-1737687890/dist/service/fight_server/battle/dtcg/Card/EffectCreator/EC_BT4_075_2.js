"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtCardFilter_CardBattleState_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardBattleState");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardOperate_AttackChangeTarget_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_AttackChangeTarget");
class EC_BT4_075_2 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.CreateNewBasicEffect(DtEffectType_1.DtEffectType.OnWhenAttacking);
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Opponent, 1);
        skill.GetChooseMachine().SetCanCancel(true);
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA);
        this.OnCommonAreaSetFilter(skill.GetMachineFilter());
        this.OnCommonAreaSetOperate(skill.GetMachineOperate());
    }
    OnCommonAreaSetFilter(mcFliter) {
        mcFliter.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        mcFliter.SetFilter(new DtCardFilter_CardBattleState_1.DtCardFilter_CardBattleState(DtEnum_1.DtCardBattleState.Activate));
    }
    OnCommonAreaSetOperate(mcOperate) {
        mcOperate.SetOperate(new DtCardOperate_AttackChangeTarget_1.DtCardOperate_AttackChangeTarget());
    }
}
exports.default = EC_BT4_075_2;
//# sourceMappingURL=EC_BT4_075_2.js.map