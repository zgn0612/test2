"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtGroupBrowseCardsCreator_1 = require("../Effect/DtGroupBrowseCardsCreator");
const DtCardFilter_Custom_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_Custom");
const DtCardOperate_MoveTo_Hand_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_MoveTo_Hand");
class EC_BT7_019_1 extends DtGroupBrowseCardsCreator_1.default {
    SetEffect() {
        let effect = this.CreateNewBasicEffect(DtEffectType_1.DtEffectType.OnPlay);
        this.SetCommonBrowseFromDeckThenBottom(effect, 4, 1, (skill, idx) => {
            skill.SetFilter(new DtCardFilter_Custom_1.DtCardFilter_Custom(this, (card) => {
                if (card.FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_505)) {
                    return true;
                }
                if (card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10799, true)) {
                    return true;
                }
                if (card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10798, true)) {
                    return true;
                }
                return false;
            }));
            skill.SetOperate(new DtCardOperate_MoveTo_Hand_1.DtCardOperate_MoveTo_Hand());
        });
    }
}
exports.default = EC_BT7_019_1;
//# sourceMappingURL=EC_BT7_019_1.js.map