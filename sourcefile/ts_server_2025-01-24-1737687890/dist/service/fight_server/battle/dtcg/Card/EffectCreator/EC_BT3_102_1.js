"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
class EC_BT3_102_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnUseEffect);
        effect.SetEffect(this.Effect, this.Choose).SetStage(5);
        effect.SetEffect(this.Restore, null);
    }
    Effect(effect) {
        if (this.GetOppPlayer().areaDefense.CardCount() == 0) {
            this.GetManager().OnRestore(this.parent, this.GetPlayer(), 1);
            effect.ForceOver();
        }
        else {
            this.PlayerSelectOptions(this.GetOppPlayer(), 2, effect);
            return DtEffect_1.DtEffectResult.WaitForChoose;
        }
        return DtEffect_1.DtEffectResult.Next;
    }
    Choose(uid, effect) {
        if (uid.toNumber() == 1) {
            this.GetManager().OnDiscardDefenseCard(this.parent, this.GetOppPlayer(), 1, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
            effect.ForceOver();
        }
    }
    Restore() {
        this.GetManager().OnRestore(this.parent, this.GetPlayer(), 1);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT3_102_1;
//# sourceMappingURL=EC_BT3_102_1.js.map