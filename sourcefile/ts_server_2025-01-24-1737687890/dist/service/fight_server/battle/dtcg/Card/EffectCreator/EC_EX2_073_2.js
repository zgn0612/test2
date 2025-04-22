"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
class EC_EX2_073_2 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnWhenAttacking);
        effect.SetEffect(this.Effect, null);
    }
    Effect() {
        let c = 1;
        let count = this.GetOppPlayer().areaGraveyard.CardCount();
        c = c + Math.floor(count / 10);
        this.GetManager().OnDiscardDefenseCard(this.parent, this.GetOppPlayer(), c, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_EX2_073_2;
//# sourceMappingURL=EC_EX2_073_2.js.map