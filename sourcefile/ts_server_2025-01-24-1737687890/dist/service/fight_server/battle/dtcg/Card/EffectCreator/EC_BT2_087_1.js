"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnum_1 = require("../../Data/DtEnum");
const DtConTriggerRoundStart_1 = require("../Effect/TriggerCondition/DtConTriggerRoundStart");
class EC_BT2_087_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerRoundStart);
        let ctri = new DtConTriggerRoundStart_1.DtConTriggerRoundStart(DtEnum_1.DtEffectRoundValid.Self);
        effect.SetTriggerCondition(ctri);
        effect.SetTriggerArea(DtEnum_1.DtAreaType.BATTLE_AREA);
        effect.SetCondition(this.E1Condition);
        effect.SetEffect(this.E1Effect, null);
    }
    E1Condition(effect) {
        return this.GetPlayer().areaDefense.CardCount() <= 3;
    }
    E1Effect() {
        this.ThisCardUseCost(-1);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT2_087_1;
//# sourceMappingURL=EC_BT2_087_1.js.map