"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtGroupBrowseCardsCreator_1 = require("../Effect/DtGroupBrowseCardsCreator");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardFilter_EffectHas_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_EffectHas");
const DtCardOperate_MoveTo_Hand_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_MoveTo_Hand");
class EC_BT5_100_1 extends DtGroupBrowseCardsCreator_1.default {
    SetEffect() {
        let effect = this.CreateNewBasicEffect(DtEffectType_1.DtEffectType.OnUseEffect);
        this.SetCommonBrowseFromDeckThenBottom(effect, 5, 1, (skill, idx) => {
            skill.SetFilter(new DtCardFilter_EffectHas_1.DtCardFilter_EffectHas(DtEnum_1.EFFECT_NAME.ABSORB));
            skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
            skill.SetOperate(new DtCardOperate_MoveTo_Hand_1.DtCardOperate_MoveTo_Hand());
        });
    }
}
exports.default = EC_BT5_100_1;
//# sourceMappingURL=EC_BT5_100_1.js.map