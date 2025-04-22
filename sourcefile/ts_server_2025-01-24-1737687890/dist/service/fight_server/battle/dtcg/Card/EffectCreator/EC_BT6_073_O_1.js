"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtConTriggerCardMove_1 = require("../Effect/TriggerCondition/DtConTriggerCardMove");
class EC_BT6_073_O_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerCardMove);
        effect.SetTriggerCondition(new DtConTriggerCardMove_1.DtConTriggerCardMove(DtEnum_1.DtEffectRoundValid.Self, DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtSkillTargetToPlayer.Self).SetBeDiscardFromHand());
        effect.SetOtherType(DtEffect_1.DtEffectOtherType.OneTurnOnce);
        effect.SetEffect(this.Effect, null);
    }
    Effect(effect) {
        this.ThisCardUseCost(-1);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT6_073_O_1;
//# sourceMappingURL=EC_BT6_073_O_1.js.map