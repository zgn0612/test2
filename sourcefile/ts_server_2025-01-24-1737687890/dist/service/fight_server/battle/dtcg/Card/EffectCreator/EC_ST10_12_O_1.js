"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffectCreateEffectToOther_1 = require("../Effect/DtEffectCreateEffectToOther");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
class EC_ST10_12_O_1 extends DtEffectCreateEffectToOther_1.default {
    SetEffect() {
        this.CreateEffectCreateEffectToOther(DtEnum_1.DtEffectRoundValid.Self);
    }
    OnCondition(card) {
        if (this.GetPlayer().IsThisPlayerRound() == false) {
            return false;
        }
        if (card.CardTypeIs(DtEnum_1.DtCardType.Monster) && card.ColorIs(DtEnum_1.DtCardColor.Yellow)) {
            return true;
        }
        return false;
    }
    OnGetEffect() {
        return new EC_ST10_12_O_1_Add();
    }
}
exports.default = EC_ST10_12_O_1;
class EC_ST10_12_O_1_Add extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetAddEffect();
        this.SetMichizureEffect(effect);
    }
}
//# sourceMappingURL=EC_ST10_12_O_1.js.map