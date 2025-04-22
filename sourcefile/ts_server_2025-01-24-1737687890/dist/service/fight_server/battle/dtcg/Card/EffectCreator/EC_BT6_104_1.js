"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardOperate_SpecialOperate_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_SpecialOperate");
class EC_BT6_104_1 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        this.CreateCommonArea_single(DtEffectType_1.DtEffectType.OnUseEffect, DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.BATTLE_AREA);
    }
    OnCommonAreaSetFilter(mcFliter) {
        mcFliter.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
    }
    OnCommonAreaSetOperate(mcOperate) {
        mcOperate.SetOperate(new DtCardOperate_SpecialOperate_1.DtCardOperate_SpecialOperate(this, this.OnCard, DtCardOperate_SpecialOperate_1.DtSpecialOpType.ADD_SKILL_BUFF));
    }
    OnCard(card, effect) {
        this.CreateEffectTo(new EC_BT6_104_1_ADD(), card, false);
    }
}
exports.default = EC_BT6_104_1;
class EC_BT6_104_1_ADD extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.CreateTimeEffectToCard(this.parent, DtEnum_1.DtBuffDurationType.RoundOverOpponent, 1);
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnDestory);
        effect.SetEffect(this.Effect1, null);
    }
    Effect1() {
        this.ThisCardUseCost(-2);
        return DtEffect_1.DtEffectResult.Next;
    }
}
//# sourceMappingURL=EC_BT6_104_1.js.map