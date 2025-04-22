"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEffectCreateEffectToOther_1 = require("../Effect/DtEffectCreateEffectToOther");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
class EC_BT6_082_1 extends DtEffectCreateEffectToOther_1.default {
    SetEffect() {
        this.CreateEffectCreateEffectToOther(DtEnum_1.DtEffectRoundValid.Both);
    }
    OnCondition(card) {
        let hasBlock = this.GetPlayer().areaInBattle.CheckWithCondition((card) => {
            return card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10674) || card.FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_116);
        });
        if (card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10637) && hasBlock) {
            return true;
        }
        return false;
    }
    OnGetEffect() {
        return new EC_BT6_082_1_Add();
    }
}
exports.default = EC_BT6_082_1;
class EC_BT6_082_1_Add extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetAddEffect();
        this.SetBlockEffect(effect);
    }
}
//# sourceMappingURL=EC_BT6_082_1.js.map