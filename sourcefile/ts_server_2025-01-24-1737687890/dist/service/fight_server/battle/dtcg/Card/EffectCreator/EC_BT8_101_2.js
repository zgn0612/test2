"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtGlobalBuff_ChangeDP_1 = require("../GlobalBuff/DtGlobalBuff_ChangeDP");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardOperate_AddInheritBuff_Int_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_AddInheritBuff_Int");
class EC_BT8_101_2 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.CreateCommonArea_single(DtEffectType_1.DtEffectType.OnUseEffect, DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA);
        effect.SetEffect(this.GlobalBuff, null);
    }
    OnCommonAreaSetFilter(mcFliter) {
        mcFliter.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
    }
    OnCommonAreaSetOperate(mcOperate) {
        mcOperate.SetOperate(new DtCardOperate_AddInheritBuff_Int_1.DtCardOperate_AddInheritBuff_Int(DtEnum_1.DtBuffType.CHANGE_DP, -4000, DtEnum_1.DtBuffDurationType.RoundOver));
    }
    GlobalBuff() {
        let c = this.GetPlayer().areaGraveyard.GetCountWithMeetCondition((card) => {
            return card.FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_506);
        });
        if (c > 0) {
            let buff = new DtGlobalBuff_ChangeDP_1.DtGlobalBuff_ChangeDP(this.parent, this);
            buff.dp = -(c * 1000);
            buff.effectType = DtEnum_1.DtBuffEffectToType.Opponent;
            buff.effectArea = DtEnum_1.DtAreaType.BATTLE_AREA;
            buff.SetBuffDurationType(DtEnum_1.DtBuffDurationType.RoundOver, 1);
            this.GetManager().globalBuffMgr.AddCardAreaBuff(buff);
        }
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT8_101_2;
//# sourceMappingURL=EC_BT8_101_2.js.map