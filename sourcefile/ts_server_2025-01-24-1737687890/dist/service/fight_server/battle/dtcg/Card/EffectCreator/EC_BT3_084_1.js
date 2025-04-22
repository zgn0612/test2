"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtGroupBrowseCardsCreator_1 = require("../Effect/DtGroupBrowseCardsCreator");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardOperate_MoveTo_Hand_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_MoveTo_Hand");
class EC_BT3_084_1 extends DtGroupBrowseCardsCreator_1.default {
    SetEffect() {
        let effect = this.CreateNewBasicEffect(DtEffectType_1.DtEffectType.OnPlay);
        this.SetCommonBrowseFrommDeckThenDiscard(effect, 3, 1, (skill, index) => {
            skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Magic));
            skill.SetOperate(new DtCardOperate_MoveTo_Hand_1.DtCardOperate_MoveTo_Hand());
        });
    }
}
exports.default = EC_BT3_084_1;
//# sourceMappingURL=EC_BT3_084_1.js.map