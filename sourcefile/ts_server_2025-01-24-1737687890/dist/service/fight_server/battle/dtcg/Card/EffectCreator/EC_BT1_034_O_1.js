"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
class EC_BT1_034_O_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerBlockerSelectOver);
        effect.SetOtherType(DtEffect_1.DtEffectOtherType.Immediately);
        effect.SetCondition(this.Condition);
        effect.SetEffect(this.Effect, null);
    }
    Condition(effect) {
        if (this.GetPlayer().IsThisPlayerRound() == false) {
            return false;
        }
        let msg = effect.eventMsg;
        if (msg.atkCard != this.parent) {
            return false;
        }
        return true;
    }
    Effect(effect) {
        let msg = effect.eventMsg;
        let defense = msg.GetDefense();
        for (let i = defense.length - 1; i >= 0; i--) {
            if (defense[i].GetOriginDigimonCount() == 0) {
                defense.splice(i, 1);
            }
        }
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT1_034_O_1;
//# sourceMappingURL=EC_BT1_034_O_1.js.map