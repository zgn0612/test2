"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtConTriggerAreaCardsChange_1 = require("../Effect/TriggerCondition/DtConTriggerAreaCardsChange");
class EC_BT4_088_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerAreaCardsChange);
        effect.SetTriggerCondition(new DtConTriggerAreaCardsChange_1.DtConTriggerAreaCardsChange(DtEnum_1.DtEffectRoundValid.Opponent, DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.DEFENSE, false));
        effect.SetOtherType(DtEffect_1.DtEffectOtherType.OneTurnOnce);
        effect.SetEffect(this.Effect, null);
    }
    Effect() {
        this.GetManager().OnDiscardDefenseCard(this.parent, this.GetOppPlayer(), 1, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT4_088_1;
//# sourceMappingURL=EC_BT4_088_1.js.map