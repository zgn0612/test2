"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtFsmAttackEnum_1 = require("../../Fsm/Attack/DtFsmAttackEnum");
const DtBuffChangeDP_1 = require("../Buff/DtBuffChangeDP");
const DtBuffChangePower_1 = require("../Buff/DtBuffChangePower");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
class EC_BT3_058_2 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnWhenAttacking);
        effect.SetCondition(this.Con);
        effect.SetEffect(this.Effect, null);
    }
    Con(effect) {
        let msg = effect.eventMsg;
        if (msg.atkType != DtFsmAttackEnum_1.DtFsmAttackType.MonsterAttack) {
            return false;
        }
        if (msg.atkCard != this.parent) {
            return false;
        }
        if (msg.defCard == null) {
            return false;
        }
        if (msg.defCard.GetLastDP() >= 12000) {
            return true;
        }
        return false;
    }
    Effect(effect) {
        effect.AddInheritBuffTo(new DtBuffChangeDP_1.DtBuffChangeDP(7000).SetBuffDurationType(DtEnum_1.DtBuffDurationType.RoundOver), this.parent);
        effect.AddInheritBuffTo(new DtBuffChangePower_1.DtBuffChangePower(2).SetBuffDurationType(DtEnum_1.DtBuffDurationType.RoundOver), this.parent);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT3_058_2;
//# sourceMappingURL=EC_BT3_058_2.js.map