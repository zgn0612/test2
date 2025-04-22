"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
class EC_BT4_111_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnUseEffect);
        effect.SetEffect(this.Effect, null);
    }
    Effect() {
        let count = this.GetPlayer().areaGraveyard.CardCount();
        this.ThisCardUseCost(-Math.floor(count / 10));
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT4_111_1;
//# sourceMappingURL=EC_BT4_111_1.js.map