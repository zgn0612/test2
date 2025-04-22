"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
class EC_BT8_108_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnUseEffect);
        effect.SetEffect(this.Effect1, null);
        effect.SetEffect(this.Effect2, null);
        effect.SetEffect(() => {
            this.GetManager().OnMagicMoveToBattle(this.parent, this.parent);
            return DtEffect_1.DtEffectResult.Next;
        }, null);
    }
    Effect1() {
        this.GetManager().OnDiscardDeckTopCard(this.parent, this.GetPlayer(), 2);
        return DtEffect_1.DtEffectResult.Next;
    }
    Effect2() {
        this.GetManager().OnDrawCard(this.parent, 1, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT8_108_1;
//# sourceMappingURL=EC_BT8_108_1.js.map