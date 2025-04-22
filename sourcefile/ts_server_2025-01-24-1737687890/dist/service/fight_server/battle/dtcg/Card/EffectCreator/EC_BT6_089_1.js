"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtConTriggerRoundStart_1 = require("../Effect/TriggerCondition/DtConTriggerRoundStart");
class EC_BT6_089_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerRoundStart);
        effect.SetTriggerCondition(new DtConTriggerRoundStart_1.DtConTriggerRoundStart(DtEnum_1.DtEffectRoundValid.Self));
        effect.SetCondition(this.Con);
        effect.SetEffect(this.Effect, null);
    }
    Con() {
        return this.GetPlayer().areaDefense.CardCount() < this.GetOppPlayer().areaDefense.CardCount();
    }
    Effect() {
        this.ThisCardUseCost(-2);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT6_089_1;
//# sourceMappingURL=EC_BT6_089_1.js.map