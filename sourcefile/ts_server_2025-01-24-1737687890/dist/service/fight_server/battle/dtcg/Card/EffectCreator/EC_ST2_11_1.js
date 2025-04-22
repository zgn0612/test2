"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtMessageData_1 = require("../../Message/DtMessageData");
class EC_ST2_11_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect1 = this.GetNewEffect();
        effect1.SetTriggerType(DtEffectType_1.DtEffectType.OnWhenAttacking);
        effect1.SetOtherType(DtEffect_1.DtEffectOtherType.OneTurnOnce);
        effect1.SetEffect(this.Effect1, null);
    }
    Effect1() {
        this.GetManager().OnSetCardActiveState(this.parent, this.parent, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_ST2_11_1;
//# sourceMappingURL=EC_ST2_11_1.js.map