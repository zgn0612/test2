"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtBuffSpecialEvoCondition_1 = require("../Buff/DtBuffSpecialEvoCondition");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
class EC_BT6_060_2 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        this.parent.AddBuff(this.GetBuff_SpecialEvoCon(this.BuffCon, DtBuffSpecialEvoCondition_1.SpecialEvoType.OriCheckEvo, false));
    }
    BuffCon(buff, card) {
        if (this.GetPlayer().IsThisPlayerRound() == false) {
            return -1;
        }
        if (card.whereAreaType != DtEnum_1.DtAreaType.HAND) {
            return -1;
        }
        if (card.FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_138) && card.CardTypeIs(DtEnum_1.DtCardType.Monster)) {
            return 6;
        }
        return -1;
    }
}
exports.default = EC_BT6_060_2;
//# sourceMappingURL=EC_BT6_060_2.js.map