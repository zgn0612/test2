"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEffectCreateEffectToOther_1 = require("../Effect/DtEffectCreateEffectToOther");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
class EC_BT5_091_2 extends DtEffectCreateEffectToOther_1.default {
    SetEffect() {
        this.CreateEffectCreateEffectToOther(DtEnum_1.DtEffectRoundValid.Both);
    }
    OnCondition(card) {
        if (card.CardTypeIs(DtEnum_1.DtCardType.Monster) && card.CardLvIs(DtEnum_1.DtFilterCompare.EQUAL, this.GetLvToEff(3))) {
            return true;
        }
        return false;
    }
    OnGetEffect() {
        return new EC_BT5_091_2_Add();
    }
}
exports.default = EC_BT5_091_2;
class EC_BT5_091_2_Add extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetAddEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnWhenAttacking);
        effect.SetEffect(this.Effect, null);
    }
    Effect() {
        this.ThisCardUseCost(1);
        return DtEffect_1.DtEffectResult.Next;
    }
}
//# sourceMappingURL=EC_BT5_091_2.js.map