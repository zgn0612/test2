"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardOperate_AddInheritBuff_Int_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_AddInheritBuff_Int");
const DtCardOperate_ChangeState_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_ChangeState");
class EC_BT2_100_1 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.CreateNewBasicEffect(DtEffectType_1.DtEffectType.OnUseEffect);
        this.skill1(effect);
        this.skill2(effect);
    }
    skill1(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA);
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetOperate(new DtCardOperate_ChangeState_1.DtCardOperate_ChangeState(DtEnum_1.DtCardBattleState.Reset));
    }
    skill2(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 2);
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.BATTLE_AREA);
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetOperate(new DtCardOperate_AddInheritBuff_Int_1.DtCardOperate_AddInheritBuff_Int(DtEnum_1.DtBuffType.CHANGE_DP, 2000, DtEnum_1.DtBuffDurationType.RoundOver));
    }
}
exports.default = EC_BT2_100_1;
//# sourceMappingURL=EC_BT2_100_1.js.map