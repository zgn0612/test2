"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardOperate_AddInheritAttBuff_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_AddInheritAttBuff");
class EC_BT5_102_2 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.CreateCommonArea_Mul(DtEffectType_1.DtEffectType.OnDefenseEffect, DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA, 2);
        effect.SetEffect(this.Effect, null);
    }
    OnCommonAreaSetFilter(mcFliter) {
        mcFliter.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
    }
    OnCommonAreaSetOperate(mcOperate) {
        mcOperate.SetOperate(new DtCardOperate_AddInheritAttBuff_1.DtCardOperate_AddInheritAttBuff(DtEnum_1.DtBuffType.CAN_NOT_ATTACK, DtEnum_1.DtBuffDurationType.RoundOver));
        mcOperate.SetOperate(new DtCardOperate_AddInheritAttBuff_1.DtCardOperate_AddInheritAttBuff(DtEnum_1.DtBuffType.CAN_NOT_DEF_BLOCK, DtEnum_1.DtBuffDurationType.RoundOver));
    }
    Effect() {
        let hasBao = this.GetPlayer().areaInBattle.CheckWithCondition((card) => {
            return card.CardTypeIs(DtEnum_1.DtCardType.Monster) && card.HasEffect(DtEnum_1.EFFECT_NAME.DIGIMON_BAOLIE);
        });
        if (hasBao) {
            this.ThisCardUseCost(-2);
        }
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT5_102_2;
//# sourceMappingURL=EC_BT5_102_2.js.map