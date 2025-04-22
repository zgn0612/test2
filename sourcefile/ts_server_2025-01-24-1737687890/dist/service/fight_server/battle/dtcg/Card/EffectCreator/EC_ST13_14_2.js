"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtGroupBrowseCardsCreator_1 = require("../Effect/DtGroupBrowseCardsCreator");
const DtCardFilter_CardCost_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardCost");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardFilter_FeatureIs_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_FeatureIs");
const DtCardOperate_PlayCard_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_PlayCard");
class EC_ST13_14_2 extends DtGroupBrowseCardsCreator_1.default {
    SetEffect() {
        let effect = this.CreateNewBasicEffect(DtEffectType_1.DtEffectType.OnEvolution);
        this.SetCommonBrowseFromDeckThenBottom(effect, 3, 1, (skill, idx) => {
            skill.GetChooseMachine().SetCanCancel(true);
            skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
            skill.SetFilter(new DtCardFilter_CardCost_1.DtCardFilter_CardCost(DtEnum_1.DtFilterCompare.LESS_EQUAL, 7, DtEnum_1.DtAreaType.None));
            skill.SetFilter(new DtCardFilter_FeatureIs_1.DtCardFilter_FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_140));
            skill.SetOperate(new DtCardOperate_PlayCard_1.DtCardOperate_PlayCard(false, true));
        });
    }
}
exports.default = EC_ST13_14_2;
//# sourceMappingURL=EC_ST13_14_2.js.map