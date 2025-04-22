"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
class EC_BT5_062_3 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerBattleOver);
        effect.SetTriggerCondition(this.GetBattleDestroyDigimonAndSelfAlive(DtEnum_1.DtEffectRoundValid.Opponent));
        effect.SetEffect(this.Effect, null);
    }
    Effect() {
        this.GetManager().OnSetCardActiveState(this.parent, this.parent, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT5_062_3;
//# sourceMappingURL=EC_BT5_062_3.js.map