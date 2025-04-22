"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceAmountDPCreatorts_1 = require("../Effect/DtEnhanceAmountDPCreatorts");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
class EC_ST7_12_1 extends DtEnhanceAmountDPCreatorts_1.default {
    SetEffect() {
        this.CreateAmountDPEffect(DtEffectType_1.DtEffectType.OnUseEffect, 8000, DtEnum_1.DtSkillReason.Destory);
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
exports.default = EC_ST7_12_1;
//# sourceMappingURL=EC_ST7_12_1.js.map