"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtBuffChangePower_1 = require("../Buff/DtBuffChangePower");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardOperate_AddInheritBuff_Int_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_AddInheritBuff_Int");
const DtCardOperate_SpecialOperate_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_SpecialOperate");
class EC_BT4_109_1 extends DtEnhanceEffectCreatorts_1.default {
    card;
    SetEffect() {
        let effect = this.CreateCommonArea_single(DtEffectType_1.DtEffectType.OnUseEffect, DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.BATTLE_AREA);
        effect.SetInitFunc(() => { this.card = null; });
        effect.SetEffect(this.Effect2, null);
    }
    OnCommonAreaSetFilter(mcFliter) {
        mcFliter.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
    }
    OnCommonAreaSetOperate(mcOperate) {
        mcOperate.SetOperate(new DtCardOperate_AddInheritBuff_Int_1.DtCardOperate_AddInheritBuff_Int(DtEnum_1.DtBuffType.CHANGE_DP, 3000, DtEnum_1.DtBuffDurationType.RoundOverOpponent));
        mcOperate.SetOperate(new DtCardOperate_SpecialOperate_1.DtCardOperate_SpecialOperate(this, (card) => {
            this.card = card;
        }, DtCardOperate_SpecialOperate_1.DtSpecialOpType.NEED_NEXT_STEP));
    }
    Effect2(effect) {
        if (this.card && this.card.GetLastDP() >= 16000) {
            effect.AddInheritBuffTo(new DtBuffChangePower_1.DtBuffChangePower(1).SetBuffDurationType(DtEnum_1.DtBuffDurationType.RoundOverOpponent), this.card);
            this.CreateEffectTo(new EC_BT4_109_1_ADD_1(), this.card, false);
            this.CreateEffectTo(new EC_BT4_109_1_Add_2(), this.card, false);
        }
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT4_109_1;
class EC_BT4_109_1_ADD_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.CreateTimeEffectToCard(this.parent, DtEnum_1.DtBuffDurationType.RoundOverOpponent, 1);
        this.SetBlockEffect(effect);
    }
}
class EC_BT4_109_1_Add_2 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.CreateTimeEffectToCard(this.parent, DtEnum_1.DtBuffDurationType.RoundOverOpponent, 1);
        this.SetRestartEffect(effect);
    }
}
//# sourceMappingURL=EC_BT4_109_1.js.map