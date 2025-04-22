"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtFsmAttackEnum_1 = require("../../Fsm/Attack/DtFsmAttackEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
class EC_BT2_112_2 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnWhenAttacking);
        effect.SetCondition(this.Con);
        effect.SetEffect(this.Effect, null);
    }
    Con(effect) {
        let msg = effect.eventMsg;
        if (msg.atkCard != this.parent) {
            return false;
        }
        if (msg.atkType == DtFsmAttackEnum_1.DtFsmAttackType.DefenseAttack) {
            return false;
        }
        let dp = msg.defCard.GetLastDP();
        let hashigher = this.GetOppPlayer().areaInBattle.CheckWithCondition((card) => {
            if (card.GetLastDP() > dp) {
                return true;
            }
            return false;
        });
        if (hashigher) {
            return false;
        }
        return true;
    }
    Effect() {
        this.GetManager().OnSetCardActiveState(this.parent, this.parent, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT2_112_2;
//# sourceMappingURL=EC_BT2_112_2.js.map