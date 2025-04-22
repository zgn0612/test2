"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtGroupBrowseCardsCreator_1 = require("../Effect/DtGroupBrowseCardsCreator");
const DtCardFilter_Custom_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_Custom");
const DtCardOperate_MoveTo_Hand_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_MoveTo_Hand");
class EC_BT7_044_1 extends DtGroupBrowseCardsCreator_1.default {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnPlay);
        this.SetCommonBrowseFromDeckThenBottom(effect, 3, 1, (skl, idx) => {
            skl.SetFilter(new DtCardFilter_Custom_1.DtCardFilter_Custom(this, (card) => {
                if (card.CardTypeIs(DtEnum_1.DtCardType.Role)) {
                    if (card.ColorIs(DtEnum_1.DtCardColor.Green)) {
                        return true;
                    }
                }
                else if (card.CardTypeIs(DtEnum_1.DtCardType.Monster)) {
                    if (card.ColorIs(DtEnum_1.DtCardColor.Green) && card.CardLvIs(DtEnum_1.DtFilterCompare.EQUAL, 4)) {
                        return true;
                    }
                }
                return false;
            }));
            skl.SetOperate(new DtCardOperate_MoveTo_Hand_1.DtCardOperate_MoveTo_Hand());
        });
    }
}
exports.default = EC_BT7_044_1;
//# sourceMappingURL=EC_BT7_044_1.js.map