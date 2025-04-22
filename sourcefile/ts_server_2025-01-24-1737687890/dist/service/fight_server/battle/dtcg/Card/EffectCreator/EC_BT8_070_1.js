"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceAmountCostCreatorts_1 = require("../Effect/DtEnhanceAmountCostCreatorts");
const DtCardFilter_Custom_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_Custom");
class EC_BT8_070_1 extends DtEnhanceAmountCostCreatorts_1.default {
    SetEffect() {
        this.CreateAmountCostEffect(DtEffectType_1.DtEffectType.OnEvolution, 6);
    }
    OnAmountFilter(filter) {
        filter.SetFilter(new DtCardFilter_Custom_1.DtCardFilter_Custom(this, (card) => {
            let hasblack = this.parent.CheckOriginListWithCondition((card) => { return card.ColorIs(DtEnum_1.DtCardColor.Black); });
            let hasred = this.parent.CheckOriginListWithCondition((card) => { return card.ColorIs(DtEnum_1.DtCardColor.Red); });
            if (hasred) {
                if (card.CardTypeIs(DtEnum_1.DtCardType.Monster)) {
                    return true;
                }
            }
            if (hasblack) {
                if (card.CardTypeIs(DtEnum_1.DtCardType.Role)) {
                    return true;
                }
            }
            return false;
        }));
    }
    OnAmountCardsSelects(cards) {
        if (cards == null) {
            return;
        }
        for (let i = 0; i < cards.length; i++) {
            this.GetManager().OnCardDestroy(this.parent, cards[i]);
        }
    }
}
exports.default = EC_BT8_070_1;
//# sourceMappingURL=EC_BT8_070_1.js.map