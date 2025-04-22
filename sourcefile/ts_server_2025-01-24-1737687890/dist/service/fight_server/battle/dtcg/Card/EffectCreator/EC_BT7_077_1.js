"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtConTriggerCardMove_1 = require("../Effect/TriggerCondition/DtConTriggerCardMove");
class EC_BT7_077_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerCardMove);
        let effcon = new DtConTriggerCardMove_1.DtConTriggerCardMove(DtEnum_1.DtEffectRoundValid.Both, DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtSkillTargetToPlayer.Self).SetBeDiscardFromHand();
        effcon.SetCondition(this, this.TriggerFunc);
        effect.SetTriggerCondition(effcon);
        effect.SetTriggerArea(DtEnum_1.DtAreaType.HAND | DtEnum_1.DtAreaType.GY);
        effect.SetEffect(this.draw, null);
    }
    TriggerFunc(d) {
        return d.card == this.parent;
    }
    draw() {
        this.ThisCardUseCost(-1);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT7_077_1;
//# sourceMappingURL=EC_BT7_077_1.js.map