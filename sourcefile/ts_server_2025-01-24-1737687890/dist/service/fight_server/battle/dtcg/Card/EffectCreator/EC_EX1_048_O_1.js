"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtCreateEffectToSelfCreator_1 = require("../Effect/DtCreateEffectToSelfCreator");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
class EC_EX1_048_O_1 extends DtCreateEffectToSelfCreator_1.default {
    SetEffect() {
        this.CreateEffectToSelfEffect();
    }
    OnEffectCon() {
        if (this.GetPlayer().IsThisPlayerRound()) {
            return false;
        }
        return this.parent.FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_17);
    }
    OnGetEffectCreator() {
        return new EC_EX1_048_O_1_ADD();
    }
}
exports.default = EC_EX1_048_O_1;
class EC_EX1_048_O_1_ADD extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetAddEffect();
        this.SetBlockEffect(effect);
    }
}
//# sourceMappingURL=EC_EX1_048_O_1.js.map