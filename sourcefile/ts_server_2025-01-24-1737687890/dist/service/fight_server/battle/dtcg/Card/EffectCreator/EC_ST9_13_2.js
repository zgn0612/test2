"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtBuffChangeDP_1 = require("../Buff/DtBuffChangeDP");
const DtEnum_1 = require("../../Data/DtEnum");
class EC_ST9_13_2 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect1 = this.GetNewEffect();
        effect1.SetTriggerType(DtEffectType_1.DtEffectType.OnEvolution);
        effect1.SetEffect(this.Effect1, null);
    }
    Effect1(effect) {
        effect.AddInheritBuffTo(new DtBuffChangeDP_1.DtBuffChangeDP(4000).SetBuffDurationType(DtEnum_1.DtBuffDurationType.RoundOver), this.parent);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_ST9_13_2;
//# sourceMappingURL=EC_ST9_13_2.js.map