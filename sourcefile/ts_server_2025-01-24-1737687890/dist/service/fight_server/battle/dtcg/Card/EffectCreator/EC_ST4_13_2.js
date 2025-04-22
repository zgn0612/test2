"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceBaoLieEffectCreatorts_1 = require("../Effect/DtEnhanceBaoLieEffectCreatorts");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardOperate_ChangeState_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_ChangeState");
class EC_ST4_13_2 extends DtEnhanceBaoLieEffectCreatorts_1.default {
    SetEffect() {
        let eff = this.GetNewEffect();
        eff.SetTriggerType(DtEffectType_1.DtEffectType.OnUseEffect);
        this.SetEnBaolieEffect(eff, 2);
        this.skill(eff);
    }
    skill(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA);
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetOperate(new DtCardOperate_ChangeState_1.DtCardOperate_ChangeState(DtEnum_1.DtCardBattleState.Reset));
    }
}
exports.default = EC_ST4_13_2;
//# sourceMappingURL=EC_ST4_13_2.js.map