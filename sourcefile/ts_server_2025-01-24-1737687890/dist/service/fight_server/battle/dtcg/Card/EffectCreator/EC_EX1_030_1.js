"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtGlobalBuff_ConditionInt_1 = require("../GlobalBuff/DtGlobalBuff_ConditionInt");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardOperate_AddInheritBuff_Int_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_AddInheritBuff_Int");
class EC_EX1_030_1 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.CreateCommonArea_single(DtEffectType_1.DtEffectType.OnWhenAttacking, DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA);
        effect.SetCondition(this.Con);
        effect.SetEffect(this.Effect, null);
    }
    Con() {
        return this.GetPlayer().areaDefense.CardCount() >= 3;
    }
    Effect() {
        let buff = new DtGlobalBuff_ConditionInt_1.DtGlobalBuff_ConditionInt(this.parent, DtEnum_1.DtBuffType.CHANGE_DP, this.BuffCon, this);
        buff.effectType = DtEnum_1.DtBuffEffectToType.Opponent;
        buff.effectArea = DtEnum_1.DtAreaType.DEFENSE;
        buff.SetBuffDurationType(DtEnum_1.DtBuffDurationType.RoundOver, 1);
        this.GetManager().globalBuffMgr.AddCardAreaBuff(buff);
        return DtEffect_1.DtEffectResult.Next;
    }
    BuffCon(buff, card) {
        return -3000;
    }
    OnCommonAreaSetFilter(mcFliter) {
        mcFliter.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
    }
    OnCommonAreaSetOperate(mcOperate) {
        mcOperate.SetOperate(new DtCardOperate_AddInheritBuff_Int_1.DtCardOperate_AddInheritBuff_Int(DtEnum_1.DtBuffType.CHANGE_DP, -3000, DtEnum_1.DtBuffDurationType.RoundOver));
    }
}
exports.default = EC_EX1_030_1;
//# sourceMappingURL=EC_EX1_030_1.js.map