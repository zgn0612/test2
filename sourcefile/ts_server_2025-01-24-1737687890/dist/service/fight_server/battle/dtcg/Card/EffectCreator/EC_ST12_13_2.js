"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffectCreateEffectToOther_1 = require("../Effect/DtEffectCreateEffectToOther");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
class EC_ST12_13_2 extends DtEffectCreateEffectToOther_1.default {
    SetEffect() {
        this.CreateEffectCreateEffectToOther(DtEnum_1.DtEffectRoundValid.Both);
    }
    OnCondition(card) {
        return card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10674) || card.FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_116);
    }
    OnGetEffect() {
        return new EC_ST10_12_O_1_Add();
    }
}
exports.default = EC_ST12_13_2;
class EC_ST10_12_O_1_Add extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetAddEffect();
        this.SetRestartEffect(effect);
    }
}
//# sourceMappingURL=EC_ST12_13_2.js.map