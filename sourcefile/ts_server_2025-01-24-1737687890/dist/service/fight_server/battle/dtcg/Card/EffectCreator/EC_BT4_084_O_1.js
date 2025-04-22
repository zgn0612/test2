"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtConTriggerCardChangeBattleState_1 = require("../Effect/TriggerCondition/DtConTriggerCardChangeBattleState");
class EC_BT4_084_O_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerCardChangeBattleState);
        effect.SetTriggerCondition(new DtConTriggerCardChangeBattleState_1.DtConTriggerCardChangeBattleState(DtEnum_1.DtEffectRoundValid.Opponent, DtEnum_1.DtCardType.Role, DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtCardBattleState.Reset));
        effect.SetEffect(this.Effect, null);
    }
    Effect() {
        this.ThisCardUseCost(-1);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT4_084_O_1;
//# sourceMappingURL=EC_BT4_084_O_1.js.map