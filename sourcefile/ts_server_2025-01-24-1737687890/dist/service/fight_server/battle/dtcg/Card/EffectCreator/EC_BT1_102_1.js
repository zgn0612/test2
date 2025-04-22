"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
class EC_BT1_102_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnUseEffect);
        effect.SetEffect(this.Effect, null);
    }
    Effect() {
        let count = this.GetPlayer().areaDefense.CardCount();
        let drawCount = Math.floor(count / 2);
        if (drawCount > 0) {
            this.GetManager().OnDrawCard(this.parent, drawCount, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        }
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT1_102_1;
//# sourceMappingURL=EC_BT1_102_1.js.map