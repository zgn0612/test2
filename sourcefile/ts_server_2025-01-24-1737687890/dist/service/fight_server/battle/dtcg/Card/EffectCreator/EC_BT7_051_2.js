"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtCardFilter_Custom_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_Custom");
const DtCardOperate_ForceEvo_ToSelf_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_ForceEvo_ToSelf");
class EC_BT7_051_2 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnWhenAttacking);
        effect.SetCondition(this.Con);
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.HAND);
        skill.SetFilter(new DtCardFilter_Custom_1.DtCardFilter_Custom(this, (card) => {
            if (this.parent.whereAreaType == DtEnum_1.DtAreaType.BATTLE_AREA) {
                if (card.FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_137) || card.FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_24)) {
                    return card.CheckCanEvo(this.parent).resultCost >= 0;
                }
            }
            return false;
        }));
        skill.SetOperate(new DtCardOperate_ForceEvo_ToSelf_1.DtCardOperate_ForceEvo_ToSelf(3));
        effect.SetEffectActivateAsk();
    }
    Con() {
        return this.parent.CheckOriginListWithCondition((card) => {
            return card.FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_505) || card.FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_24);
        });
    }
}
exports.default = EC_BT7_051_2;
//# sourceMappingURL=EC_BT7_051_2.js.map