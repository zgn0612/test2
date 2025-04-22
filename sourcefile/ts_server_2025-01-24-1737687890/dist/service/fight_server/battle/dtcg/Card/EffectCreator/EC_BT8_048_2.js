"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardFilter_EffectHas_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_EffectHas");
const DtCardOperate_AddInheritAttBuff_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_AddInheritAttBuff");
class EC_BT8_048_2 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        this.CreateCommonArea_single(DtEffectType_1.DtEffectType.OnEvolution, DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA);
    }
    OnCommonAreaSetFilter(mcFliter) {
        mcFliter.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        mcFliter.SetFilter(new DtCardFilter_EffectHas_1.DtCardFilter_EffectHas(DtEnum_1.EFFECT_NAME.BLOCKER));
    }
    OnCommonAreaSetOperate(mcOperate) {
        mcOperate.SetOperate(new DtCardOperate_AddInheritAttBuff_1.DtCardOperate_AddInheritAttBuff(DtEnum_1.DtBuffType.CAN_NOT_ATTACK, DtEnum_1.DtBuffDurationType.RoundOverOpponent));
        mcOperate.SetOperate(new DtCardOperate_AddInheritAttBuff_1.DtCardOperate_AddInheritAttBuff(DtEnum_1.DtBuffType.CAN_NOT_DEF_BLOCK, DtEnum_1.DtBuffDurationType.RoundOverOpponent));
    }
}
exports.default = EC_BT8_048_2;
//# sourceMappingURL=EC_BT8_048_2.js.map