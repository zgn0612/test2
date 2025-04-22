"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
class EC_ST4_11_O_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerBattleOver);
        effect.SetOtherType(DtEffect_1.DtEffectOtherType.OneTurnOnce);
        effect.SetTriggerCondition(this.GetBattleDestroyDigimonAndSelfAlive(DtEnum_1.DtEffectRoundValid.Self));
        effect.SetEffect(this.Effect, null);
    }
    Effect() {
        this.GetManager().OnDiscardDefenseCard(this.parent, this.GetOppPlayer(), 1, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_ST4_11_O_1;
//# sourceMappingURL=EC_ST4_11_O_1.js.map