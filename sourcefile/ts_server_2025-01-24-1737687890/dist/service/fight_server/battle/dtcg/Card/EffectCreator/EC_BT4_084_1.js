"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtConTriggerCardOnPlay_1 = require("../Effect/TriggerCondition/DtConTriggerCardOnPlay");
class EC_BT4_084_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerCardOnPlay);
        effect.SetTriggerCondition(new DtConTriggerCardOnPlay_1.DtConTriggerCardOnPlay(DtEnum_1.DtEffectRoundValid.Opponent, DtEnum_1.DtCardType.Role, DtEnum_1.DtSkillTargetToPlayer.Opponent));
        effect.SetEffect(this.Effect, null);
    }
    Effect() {
        this.ThisCardUseCost(-3);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT4_084_1;
//# sourceMappingURL=EC_BT4_084_1.js.map