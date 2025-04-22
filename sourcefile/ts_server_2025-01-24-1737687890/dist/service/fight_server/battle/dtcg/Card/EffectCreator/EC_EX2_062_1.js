"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtGroupBrowseCardsCreator_1 = require("../Effect/DtGroupBrowseCardsCreator");
const DtCardFilter_MulNameIs_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_MulNameIs");
const DtCardOperate_MoveTo_Hand_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_MoveTo_Hand");
class EC_EX2_062_1 extends DtGroupBrowseCardsCreator_1.default {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnPlay);
        this.SetCommonBrowseFromDeckThenBottom(effect, 4, 1, (skl, idx) => {
            skl.SetFilter(new DtCardFilter_MulNameIs_1.DtCardFilter_MulNameIs(false, DtCardDigimonType_1.DtCardDigimonType.name_type_10165, DtCardDigimonType_1.DtCardDigimonType.name_type_11002));
            skl.SetOperate(new DtCardOperate_MoveTo_Hand_1.DtCardOperate_MoveTo_Hand());
        });
    }
}
exports.default = EC_EX2_062_1;
//# sourceMappingURL=EC_EX2_062_1.js.map