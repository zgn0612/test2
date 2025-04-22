"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtBuffChangePower_1 = require("../Buff/DtBuffChangePower");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtConTriggerCardChangeBattleState_1 = require("../Effect/TriggerCondition/DtConTriggerCardChangeBattleState");
class EC_EX1_039_O_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerCardChangeBattleState);
        effect.SetOtherType(DtEffect_1.DtEffectOtherType.OneTurnOnce);
        let coni = new DtConTriggerCardChangeBattleState_1.DtConTriggerCardChangeBattleState(DtEnum_1.DtEffectRoundValid.Self, DtEnum_1.DtCardType.Monster, DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtCardBattleState.Reset);
        effect.SetTriggerCondition(coni);
        effect.SetEffect(this.Effect, null);
    }
    Effect(effect) {
        effect.AddInheritBuffTo(new DtBuffChangePower_1.DtBuffChangePower(1).SetBuffDurationType(DtEnum_1.DtBuffDurationType.RoundOver), this.parent);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_EX1_039_O_1;
//# sourceMappingURL=EC_EX1_039_O_1.js.map