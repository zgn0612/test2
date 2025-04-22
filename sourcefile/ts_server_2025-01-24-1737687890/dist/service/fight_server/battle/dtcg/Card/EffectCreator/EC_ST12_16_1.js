"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtBuffConditionAttribute_1 = require("../Buff/DtBuffConditionAttribute");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
class EC_ST12_16_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        this.parent.AddBuff(new DtBuffConditionAttribute_1.DtBuffConditionAttribute(DtEnum_1.DtBuffType.MAGIC_CARD_USE_IGNORE_COLOR_CONDITION, this.con, this));
    }
    con(buff) {
        return this.GetPlayer().areaInBattle.CheckWithCondition((card) => {
            if (card.CardTypeIs(DtEnum_1.DtCardType.Monster)) {
                if (card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10674) || card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10637) || card.FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_116)) {
                    return true;
                }
            }
            return false;
        });
    }
}
exports.default = EC_ST12_16_1;
//# sourceMappingURL=EC_ST12_16_1.js.map