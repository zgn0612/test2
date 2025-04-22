"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCreateEffectToSelfCreator_1 = require("../Effect/DtCreateEffectToSelfCreator");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
class EC_ST10_07_1 extends DtCreateEffectToSelfCreator_1.default {
    SetEffect() {
        this.CreateEffectToSelfEffect();
    }
    OnEffectCon() {
        if (this.GetPlayer().IsThisPlayerRound()) {
            return false;
        }
        return this.GetPlayer().areaInBattle.CheckWithCondition((card) => {
            if (card.CardTypeIs(DtEnum_1.DtCardType.Monster) && card.ColorIs(DtEnum_1.DtCardColor.Yellow)) {
                return true;
            }
            return false;
        });
    }
    OnGetEffectCreator() {
        return new EC_ST10_07_1_ADD();
    }
}
exports.default = EC_ST10_07_1;
class EC_ST10_07_1_ADD extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetAddEffect();
        this.SetBlockEffect(effect);
    }
}
//# sourceMappingURL=EC_ST10_07_1.js.map