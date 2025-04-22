"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
class EC_BT8_044_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnWhenAttacking);
        effect.SetCondition(this.Con);
        effect.SetEffect(this.Effect, null);
        effect.SetEffectActivateAsk();
    }
    Con() {
        return this.GetPlayer().areaDefense.CardCount() > 0;
    }
    Effect() {
        this.GetManager().OnDiscardDefenseCard(this.parent, this.GetPlayer(), 1, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        this.ThisCardUseCost(-2);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT8_044_1;
//# sourceMappingURL=EC_BT8_044_1.js.map