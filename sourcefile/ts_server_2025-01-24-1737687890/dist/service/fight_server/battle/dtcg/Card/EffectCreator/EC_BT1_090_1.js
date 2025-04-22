"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
class EC_BT1_090_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnUseEffect);
        effect.SetEffect(this.EffectAddCost, null);
    }
    EffectAddCost(effect) {
        this.ThisCardUseCost(-2);
        this.CreateGlobalEffect(new EC_BT1_090_1_ADD());
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT1_090_1;
class EC_BT1_090_1_ADD extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effectLose = this.CreateTimeEffectToCard(this.parent, DtEnum_1.DtBuffDurationType.RoundOver, 1);
        effectLose.SetTriggerType(DtEffectType_1.DtEffectType.TriggerRoundOver);
        effectLose.SetTriggerAreaAllExceptDigitama();
        effectLose.SetEffect(this.EffectRemoveCost, null);
    }
    EffectRemoveCost(effect) {
        this.ThisCardUseCost(2);
        return DtEffect_1.DtEffectResult.Next;
    }
}
//# sourceMappingURL=EC_BT1_090_1.js.map