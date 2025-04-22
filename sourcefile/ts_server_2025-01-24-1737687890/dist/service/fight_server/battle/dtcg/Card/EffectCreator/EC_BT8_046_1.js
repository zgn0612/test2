"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtGroupBrowseCardsCreator_1 = require("../Effect/DtGroupBrowseCardsCreator");
const DtCardFilter_MulNameIs_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_MulNameIs");
const DtCardOperate_MoveTo_Hand_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_MoveTo_Hand");
class EC_BT8_046_1 extends DtGroupBrowseCardsCreator_1.default {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnPlay);
        this.SetCommonBrowseFromDeckThenBottom(effect, 5, 1, (sk, idx) => {
            sk.SetFilter(new DtCardFilter_MulNameIs_1.DtCardFilter_MulNameIs(false, DtCardDigimonType_1.DtCardDigimonType.name_type_10309, DtCardDigimonType_1.DtCardDigimonType.name_type_10313));
            sk.SetOperate(new DtCardOperate_MoveTo_Hand_1.DtCardOperate_MoveTo_Hand());
        });
    }
}
exports.default = EC_BT8_046_1;
//# sourceMappingURL=EC_BT8_046_1.js.map