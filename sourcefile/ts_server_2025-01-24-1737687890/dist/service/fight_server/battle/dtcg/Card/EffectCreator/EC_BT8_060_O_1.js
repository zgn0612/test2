"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtCreateEffectToSelfCreator_1 = require("../Effect/DtCreateEffectToSelfCreator");
const DtDecoyEffectCreator_1 = require("../Effect/DtDecoyEffectCreator");
class EC_BT8_060_O_1 extends DtCreateEffectToSelfCreator_1.default {
    SetEffect() {
        this.CreateEffectToSelfEffect();
    }
    ClientShow() {
        this.CreateEffectTo(new EC_EC_BT8_060_O_1_ADD(), this.parent, false);
    }
    OnEffectCon() {
        return this.parent.FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_33);
    }
    OnGetEffectCreator() {
        return new EC_EC_BT8_060_O_1_ADD();
    }
}
exports.default = EC_BT8_060_O_1;
class EC_EC_BT8_060_O_1_ADD extends DtDecoyEffectCreator_1.default {
    SetEffect() {
        let effect = this.GetAddEffect();
        this.SetDecoyEffect(effect, DtEnum_1.DtCardColor.Black);
    }
}
//# sourceMappingURL=EC_BT8_060_O_1.js.map