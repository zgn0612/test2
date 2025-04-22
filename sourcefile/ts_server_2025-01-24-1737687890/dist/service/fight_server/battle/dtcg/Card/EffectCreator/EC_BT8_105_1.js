"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceAmountCostCreatorts_1 = require("../Effect/DtEnhanceAmountCostCreatorts");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
class EC_BT8_105_1 extends DtEnhanceAmountCostCreatorts_1.default {
    SetEffect() {
        this.CreateAmountCostEffect(DtEffectType_1.DtEffectType.OnUseEffect, 15);
    }
    OnAmountCardsSelects(cards) {
        for (let i = 0; i < cards.length; i++) {
            this.GetManager().OnCardDestroy(this.parent, cards[i]);
        }
    }
    OnAmountFilter(filter) {
        filter.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
    }
}
exports.default = EC_BT8_105_1;
//# sourceMappingURL=EC_BT8_105_1.js.map