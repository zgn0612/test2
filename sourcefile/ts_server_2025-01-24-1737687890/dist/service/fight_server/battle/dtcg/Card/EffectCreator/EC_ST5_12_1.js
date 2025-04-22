"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardOperate_SpecialOperate_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_SpecialOperate");
class EC_ST5_12_1 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        this.CreateCommonArea_Mul(DtEffectType_1.DtEffectType.OnEvolution, DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.BATTLE_AREA, 2);
    }
    OnCommonAreaSetFilter(mcFliter) {
        mcFliter.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
    }
    OnCommonAreaSetOperate(mcOperate) {
        mcOperate.SetOperate(new DtCardOperate_SpecialOperate_1.DtCardOperate_SpecialOperate(this, (card, edd) => {
            this.CreateEffectTo(new EC_ST5_12_1_Add(), card, false);
        }, DtCardOperate_SpecialOperate_1.DtSpecialOpType.ADD_SKILL_BUFF));
    }
}
exports.default = EC_ST5_12_1;
class EC_ST5_12_1_Add extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.CreateTimeEffectToCard(this.parent, DtEnum_1.DtBuffDurationType.RoundOverOpponent, 1);
        this.SetRestartEffect(effect);
    }
}
//# sourceMappingURL=EC_ST5_12_1.js.map