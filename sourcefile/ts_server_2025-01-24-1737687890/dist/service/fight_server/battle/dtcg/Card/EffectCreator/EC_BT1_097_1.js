"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
class EC_BT1_097_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let e3 = this.GetNewEffect();
        e3.SetTriggerType(DtEffectType_1.DtEffectType.OnUseEffect);
        e3.SetEffect(this.E3Effect, null);
    }
    E3Effect() {
        this.GetManager().OnDrawCard(this.parent, 1, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT1_097_1;
//# sourceMappingURL=EC_BT1_097_1.js.map