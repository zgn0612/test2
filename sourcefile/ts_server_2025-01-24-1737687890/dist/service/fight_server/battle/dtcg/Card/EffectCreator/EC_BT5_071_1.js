"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
class EC_BT5_071_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnDestory);
        effect.SetCondition(this.Con);
        effect.SetEffect(this.Effect, null);
    }
    Con(effect) {
        let msg = effect.eventMsg;
        if (msg.effectType == DtEnum_1.DtActionEffectType.EffectDestroy) {
            return true;
        }
        return false;
    }
    Effect() {
        this.ThisCardUseCost(-1);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT5_071_1;
//# sourceMappingURL=EC_BT5_071_1.js.map