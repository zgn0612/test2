"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardOperate_AddInheritAttBuff_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_AddInheritAttBuff");
class EC_BT3_097_1 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        this.CreateCommonArea_single(DtEffectType_1.DtEffectType.OnUseEffect, DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.BATTLE_AREA);
    }
    OnCommonAreaSetFilter(mcFliter) {
        mcFliter.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
    }
    OnCommonAreaSetOperate(mcOperate) {
        mcOperate.SetOperate(new DtCardOperate_AddInheritAttBuff_1.DtCardOperate_AddInheritAttBuff(DtEnum_1.DtBuffType.NO_TRIGGER_DEFENSE_EFFECT_WITH_MAGIC, DtEnum_1.DtBuffDurationType.RoundOver));
    }
}
exports.default = EC_BT3_097_1;
//# sourceMappingURL=EC_BT3_097_1.js.map