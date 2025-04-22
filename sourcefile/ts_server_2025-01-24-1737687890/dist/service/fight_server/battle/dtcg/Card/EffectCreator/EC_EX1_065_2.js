"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffectCreateEffectToOther_1 = require("../Effect/DtEffectCreateEffectToOther");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
class EC_EX1_065_2 extends DtEffectCreateEffectToOther_1.default {
    SetEffect() {
        this.CreateEffectCreateEffectToOther(DtEnum_1.DtEffectRoundValid.Self);
    }
    OnCondition(card) {
        if (this.GetPlayer().IsThisPlayerRound()) {
            return false;
        }
        if (card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10012, true)) {
            return true;
        }
        return false;
    }
    OnGetEffect() {
        return new EC_EX1_065_2_Add();
    }
}
exports.default = EC_EX1_065_2;
class EC_EX1_065_2_Add extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetAddEffect();
        this.SetBlockEffect(effect);
    }
}
//# sourceMappingURL=EC_EX1_065_2.js.map