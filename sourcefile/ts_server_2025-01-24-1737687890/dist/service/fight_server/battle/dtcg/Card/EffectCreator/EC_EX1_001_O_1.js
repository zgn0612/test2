"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtGroupBrowseCardsCreator_1 = require("../Effect/DtGroupBrowseCardsCreator");
const DtCardFilter_Custom_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_Custom");
const DtCardOperate_MoveTo_Hand_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_MoveTo_Hand");
class EC_EX1_001_O_1 extends DtGroupBrowseCardsCreator_1.default {
    SetEffect() {
        let effect = this.CreateNewBasicEffect(DtEffectType_1.DtEffectType.OnWhenAttacking);
        effect.SetOtherType(DtEffect_1.DtEffectOtherType.OneTurnOnce);
        this.SetCommonBrowseFromDeckThenBottom(effect, 3, 1, (skill, idx) => {
            skill.SetFilter(new DtCardFilter_Custom_1.DtCardFilter_Custom(this, (card) => {
                return card.CardTypeIs(DtEnum_1.DtCardType.Role) || card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10000);
            }));
            skill.SetOperate(new DtCardOperate_MoveTo_Hand_1.DtCardOperate_MoveTo_Hand());
        });
    }
}
exports.default = EC_EX1_001_O_1;
//# sourceMappingURL=EC_EX1_001_O_1.js.map