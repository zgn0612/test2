"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
class EC_BT5_086_2 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let e2 = this.GetNewEffect();
        e2.SetTriggerType(DtEffectType_1.DtEffectType.OnEvolution);
        e2.SetEffect(this.effectE2, null);
    }
    effectE2() {
        this.GetManager().OnSetCardActiveState(this.parent, this.parent, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT5_086_2;
//# sourceMappingURL=EC_BT5_086_2.js.map