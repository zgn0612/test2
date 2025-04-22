"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtGroupBrowseCardsCreator_1 = require("../Effect/DtGroupBrowseCardsCreator");
const DtCardFilter_Custom_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_Custom");
const DtCardOperate_MoveTo_Hand_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_MoveTo_Hand");
class EC_EX1_024_1 extends DtGroupBrowseCardsCreator_1.default {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnPlay);
        this.SetCommonBrowseFromDeckThenBottom(effect, 4, 1, (skl, idx) => {
            skl.SetFilter(new DtCardFilter_Custom_1.DtCardFilter_Custom(this, (card) => {
                return card.FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_51) || card.FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_21) || card.FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_135);
            }));
            skl.SetOperate(new DtCardOperate_MoveTo_Hand_1.DtCardOperate_MoveTo_Hand());
        });
    }
}
exports.default = EC_EX1_024_1;
//# sourceMappingURL=EC_EX1_024_1.js.map