"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEffectCreateEffectToOther_1 = require("../Effect/DtEffectCreateEffectToOther");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
class EC_BT8_031_2 extends DtEffectCreateEffectToOther_1.default {
    SetEffect() {
        this.CreateEffectCreateEffectToOther(DtEnum_1.DtEffectRoundValid.Opponent);
    }
    OnCondition(card) {
        if (this.GetPlayer().IsThisPlayerRound()) {
            return false;
        }
        return card.CardTypeIs(DtEnum_1.DtCardType.Monster);
    }
    OnGetEffect() {
        return new EC_BT8_031_2_Add();
    }
}
exports.default = EC_BT8_031_2;
class EC_BT8_031_2_Add extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetAddEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnWhenAttacking);
        effect.SetEffect(this.Effect, null);
    }
    Effect() {
        if (this.parent.GetOriginDigimonCount() > 0) {
            this.GetManager().OnCardDiscardEvoOriginWhere(this.parent, this.parent, 0, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        }
        return DtEffect_1.DtEffectResult.Next;
    }
}
//# sourceMappingURL=EC_BT8_031_2.js.map