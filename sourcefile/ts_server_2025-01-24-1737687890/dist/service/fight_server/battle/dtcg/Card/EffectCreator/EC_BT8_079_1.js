"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtCardFilter_FeatureIs_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_FeatureIs");
const DtCardOperate_MoveTo_Hand_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_MoveTo_Hand");
class EC_BT8_079_1 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnEvolution);
        effect.SetEffect(this.discard, null);
        this.skill1(effect);
    }
    discard() {
        this.GetManager().OnDiscardDeckTopCard(this.parent, this.GetPlayer(), 2);
        return DtEffect_1.DtEffectResult.Next;
    }
    skill1(eff) {
        let skill = this.SetSkillPlayerChoose_Single(eff, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.GY);
        skill.SetFilter(new DtCardFilter_FeatureIs_1.DtCardFilter_FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_45));
        skill.SetOperate(new DtCardOperate_MoveTo_Hand_1.DtCardOperate_MoveTo_Hand());
    }
}
exports.default = EC_BT8_079_1;
//# sourceMappingURL=EC_BT8_079_1.js.map