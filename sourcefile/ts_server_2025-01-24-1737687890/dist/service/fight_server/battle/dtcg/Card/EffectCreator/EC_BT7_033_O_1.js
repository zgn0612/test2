"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtCreateEffectToSelfCreator_1 = require("../Effect/DtCreateEffectToSelfCreator");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
class EC_BT7_033_O_1 extends DtCreateEffectToSelfCreator_1.default {
    SetEffect() {
        this.CreateEffectToSelfEffect();
    }
    OnEffectCon() {
        if (this.GetPlayer().IsThisPlayerRound()) {
            return false;
        }
        return this.GetPlayer().areaDefense.CardCount() >= 3;
    }
    OnGetEffectCreator() {
        return new EC_BT7_033_O_1_ADD();
    }
}
exports.default = EC_BT7_033_O_1;
class EC_BT7_033_O_1_ADD extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetAddEffect();
        this.SetBlockEffect(effect);
    }
}
//# sourceMappingURL=EC_BT7_033_O_1.js.map