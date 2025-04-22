"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
class EC_BT2_020_2 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnWhenAttacking);
        effect.SetCondition(this.Con);
        effect.SetEffect(this.Effect, null);
    }
    Con(effect) {
        return this.GetOppPlayer().areaGraveyard.CardCount() >= 10;
    }
    Effect(effect) {
        let count = this.GetOppPlayer().areaGraveyard.CardCount();
        let discardCount = Math.floor(count / 10);
        this.GetManager().OnDiscardDefenseCard(this.parent, this.GetOppPlayer(), discardCount, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT2_020_2;
//# sourceMappingURL=EC_BT2_020_2.js.map