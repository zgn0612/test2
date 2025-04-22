"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
class EC_P_028_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnPlay);
        effect.SetEffect(this.Effect, null);
    }
    Effect() {
        let count = this.GetPlayer().areaDefense.CardCount();
        if (count >= 3) {
            this.GetManager().OnDrawCard(this.parent, 1, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        }
        if (count <= 3) {
            this.ThisCardUseCost(-1);
        }
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_P_028_1;
//# sourceMappingURL=EC_P_028_1.js.map