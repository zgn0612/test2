"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEnum_1 = require("../../Data/DtEnum");
const DtCreateEffectToSelfCreator_1 = require("../Effect/DtCreateEffectToSelfCreator");
const DtDecoyEffectCreator_1 = require("../Effect/DtDecoyEffectCreator");
class EC_ST12_12_1 extends DtCreateEffectToSelfCreator_1.default {
    SetEffect() {
        this.CreateEffectToSelfEffect();
    }
    OnEffectCon() {
        return this.GetPlayer().areaInBattle.CheckWithCondition((card) => {
            if (card.CardTypeIs(DtEnum_1.DtCardType.Monster)) {
                return card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10674) || card.FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_116);
            }
            return false;
        });
    }
    OnGetEffectCreator() {
        return new EC_ST12_12_1_ADD();
    }
}
exports.default = EC_ST12_12_1;
class EC_ST12_12_1_ADD extends DtDecoyEffectCreator_1.default {
    SetEffect() {
        let effect = this.GetAddEffect();
        this.SetDecoyEffect(effect, DtEnum_1.DtCardColor.Red, DtEnum_1.DtCardColor.Black);
    }
}
//# sourceMappingURL=EC_ST12_12_2.js.map