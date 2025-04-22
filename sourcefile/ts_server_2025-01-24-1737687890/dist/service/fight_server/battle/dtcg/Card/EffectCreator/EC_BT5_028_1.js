"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
class EC_BT5_028_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnEvolution);
        effect.SetEffect(this.Effect, null);
    }
    Effect() {
        this.GetOppPlayer().areaInBattle.ForeachCards((card) => {
            this.GetManager().OnCardDiscardEvoOriginWhere(this.parent, card, 0, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        });
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT5_028_1;
//# sourceMappingURL=EC_BT5_028_1.js.map