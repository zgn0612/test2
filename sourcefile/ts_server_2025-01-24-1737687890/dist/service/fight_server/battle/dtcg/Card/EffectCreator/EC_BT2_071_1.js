"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCreateEffectToSelfCreator_1 = require("../Effect/DtCreateEffectToSelfCreator");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
class EC_BT2_071_1 extends DtCreateEffectToSelfCreator_1.default {
    SetEffect() {
        this.CreateEffectToSelfEffect();
    }
    OnEffectCon() {
        return this.GetPlayer().areaInBattle.CheckWithCondition((card) => {
            if (card.CardTypeIs(DtEnum_1.DtCardType.Monster) && card.ColorIs(DtEnum_1.DtCardColor.Yellow)) {
                return true;
            }
            return false;
        });
    }
    OnGetEffectCreator() {
        return new EC_BT2_071_1_ADD();
    }
}
exports.default = EC_BT2_071_1;
class EC_BT2_071_1_ADD extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetAddEffect();
        this.SetMichizureEffect(effect);
    }
}
//# sourceMappingURL=EC_BT2_071_1.js.map