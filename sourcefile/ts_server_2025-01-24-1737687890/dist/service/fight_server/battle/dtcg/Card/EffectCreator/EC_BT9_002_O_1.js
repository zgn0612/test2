"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtBuffChangeDP_1 = require("../Buff/DtBuffChangeDP");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtConTriggerAreaCardsChange_1 = require("../Effect/TriggerCondition/DtConTriggerAreaCardsChange");
class EC_BT9_002_O_1 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerAreaCardsChange);
        effect.SetOtherType(DtEffect_1.DtEffectOtherType.OneTurnOnce);
        let tricon = new DtConTriggerAreaCardsChange_1.DtConTriggerAreaCardsChange(DtEnum_1.DtEffectRoundValid.Self, DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.HAND, true);
        tricon.SetCondition(this, (msg) => { return msg.reason != DtMessageData_1.DtProtoEnum_MoveReason.Draw && msg.reason != DtMessageData_1.DtProtoEnum_MoveReason.EvoDraw; });
        effect.SetTriggerCondition(tricon);
        effect.SetEffect(this.Effect, null);
    }
    Effect(effect) {
        effect.AddInheritBuffTo(new DtBuffChangeDP_1.DtBuffChangeDP(1000).SetBuffDurationType(DtEnum_1.DtBuffDurationType.RoundOver), this.parent);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT9_002_O_1;
//# sourceMappingURL=EC_BT9_002_O_1.js.map