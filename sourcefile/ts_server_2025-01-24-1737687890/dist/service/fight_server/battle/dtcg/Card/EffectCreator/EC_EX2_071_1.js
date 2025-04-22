"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtConTriggerCardMove_1 = require("../Effect/TriggerCondition/DtConTriggerCardMove");
class EC_EX2_071_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerCardMove);
        let effcon = new DtConTriggerCardMove_1.DtConTriggerCardMove(DtEnum_1.DtEffectRoundValid.Both, DtEnum_1.DtSkillTargetToPlayer.Both, DtEnum_1.DtSkillTargetToPlayer.Self).SetBeDiscardFromHand();
        effcon.SetCondition(this, this.TriggerFunc);
        effect.SetTriggerCondition(effcon);
        effect.SetTriggerArea(DtEnum_1.DtAreaType.HAND | DtEnum_1.DtAreaType.GY);
        effect.SetEffect(this.Effect, null);
    }
    TriggerFunc(d) {
        return d.card == this.parent;
    }
    Effect() {
        this.ThisCardUseCost(-1);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_EX2_071_1;
//# sourceMappingURL=EC_EX2_071_1.js.map