"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtCreateEffectToSelfCreator_1 = require("../Effect/DtCreateEffectToSelfCreator");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
class EC_BT4_006_O_1 extends DtCreateEffectToSelfCreator_1.default {
    SetEffect() {
        this.CreateEffectToSelfEffect();
    }
    OnEffectCon() {
        return this.GetPlayer().areaGraveyard.CardCount() >= 10;
    }
    OnGetEffectCreator() {
        return new EC_BT4_006_O_1_ADD();
    }
}
exports.default = EC_BT4_006_O_1;
class EC_BT4_006_O_1_ADD extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetAddEffect();
        this.SetMichizureEffect(effect);
    }
}
//# sourceMappingURL=EC_BT4_006_O_1.js.map