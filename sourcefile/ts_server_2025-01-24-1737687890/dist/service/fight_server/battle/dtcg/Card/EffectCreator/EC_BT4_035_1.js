"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
class EC_BT4_035_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let e1 = this.GetNewEffect();
        e1.SetTriggerType(DtEffectType_1.DtEffectType.OnEvolution);
        e1.SetEffect(this.Effect, null);
    }
    Effect() {
        let count = this.GetOppPlayer().areaHand.CardCount();
        this.ThisCardUseCost(-Math.floor(count / 4));
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT4_035_1;
//# sourceMappingURL=EC_BT4_035_1.js.map