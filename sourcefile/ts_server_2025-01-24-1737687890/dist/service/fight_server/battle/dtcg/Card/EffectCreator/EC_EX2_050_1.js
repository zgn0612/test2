"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtCreateEffectToSelfCreator_1 = require("../Effect/DtCreateEffectToSelfCreator");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
class EC_EX2_050_1 extends DtCreateEffectToSelfCreator_1.default {
    SetEffect() {
        this.CreateEffectToSelfEffect();
    }
    OnEffectCon() {
        if (this.GetPlayer().IsThisPlayerRound()) {
            return false;
        }
        return this.GetPlayer().areaInBattle.CheckWithCondition((card) => {
            return card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10981, true);
        });
    }
    OnGetEffectCreator() {
        return new EC_EX2_050_1_ADD();
    }
}
exports.default = EC_EX2_050_1;
class EC_EX2_050_1_ADD extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetAddEffect();
        this.SetBlockEffect(effect);
    }
}
//# sourceMappingURL=EC_EX2_050_1.js.map