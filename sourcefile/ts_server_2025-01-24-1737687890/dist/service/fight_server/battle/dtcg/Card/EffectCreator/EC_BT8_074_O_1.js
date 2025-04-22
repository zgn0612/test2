"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtConTriggerCardMove_1 = require("../Effect/TriggerCondition/DtConTriggerCardMove");
class EC_BT8_074_O_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerCardMove);
        let ctri = new DtConTriggerCardMove_1.DtConTriggerCardMove(DtEnum_1.DtEffectRoundValid.Self, DtEnum_1.DtSkillTargetToPlayer.Both, DtEnum_1.DtSkillTargetToPlayer.Self).SetBeDiscardFromDeck();
        effect.SetTriggerCondition(ctri);
        effect.SetOtherType(DtEffect_1.DtEffectOtherType.OneTurnOnce);
        effect.SetEffect(this.costeff, null);
    }
    costeff() {
        this.ThisCardUseCost(-1);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT8_074_O_1;
//# sourceMappingURL=EC_BT8_074_O_1.js.map