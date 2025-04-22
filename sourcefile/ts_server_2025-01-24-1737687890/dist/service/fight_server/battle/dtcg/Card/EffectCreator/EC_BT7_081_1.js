"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtGroupBrowseCardsCreator_1 = require("../Effect/DtGroupBrowseCardsCreator");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardFilter_FeatureIs_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_FeatureIs");
const DtCardOperate_MoveTo_Hand_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_MoveTo_Hand");
class EC_BT7_081_1 extends DtGroupBrowseCardsCreator_1.default {
    SetEffect() {
        let effect = this.CreateNewBasicEffect(DtEffectType_1.DtEffectType.OnPlay);
        this.SetCommonBrowseFromDeckThenBottom(effect, 5, 2, (skl, idx) => {
            if (idx == 0) {
                skl.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Role));
            }
            else {
                skl.SetFilter(new DtCardFilter_FeatureIs_1.DtCardFilter_FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_505, DtCardDigimonType_1.DtCardDigimonType.type_137));
            }
            skl.SetOperate(new DtCardOperate_MoveTo_Hand_1.DtCardOperate_MoveTo_Hand());
        });
    }
}
exports.default = EC_BT7_081_1;
//# sourceMappingURL=EC_BT7_081_1.js.map