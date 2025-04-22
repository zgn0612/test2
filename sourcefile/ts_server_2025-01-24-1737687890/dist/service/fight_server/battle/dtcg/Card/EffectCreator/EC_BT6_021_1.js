"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnum_1 = require("../../Data/DtEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtConTriggerBeforeCardChangeCost_1 = require("../Effect/TriggerCondition/DtConTriggerBeforeCardChangeCost");
class EC_BT6_021_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        this.CreateEmptyGlobalBuffToClient();
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerBeforeCardChangeCost);
        let ctri = new DtConTriggerBeforeCardChangeCost_1.DtConTriggerBeforeCardChangeCost(DtEnum_1.DtEffectRoundValid.Both, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        ctri.SetCardCon(DtEnum_1.DtCardType.None, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Opponent);
        ctri.SetCondition(this, (msg) => {
            if (msg.cost > 0) {
                return false;
            }
            if (msg.caster.CardTypeIs(DtEnum_1.DtCardType.Role)) {
                return false;
            }
            return true;
        });
        effect.SetTriggerCondition(ctri);
        effect.SetOtherType(DtEffect_1.DtEffectOtherType.Immediately);
        effect.SetEffectDirect();
        effect.SetEffect(this.Effect, null);
    }
    Effect(effect) {
        let msg = effect.eventMsg;
        msg.cost = 0;
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT6_021_1;
//# sourceMappingURL=EC_BT6_021_1.js.map