"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtConTriggerDiscardEvoOrigin_1 = require("../Effect/TriggerCondition/DtConTriggerDiscardEvoOrigin");
class EC_P_004_O_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerDiscardEvoOrigin);
        effect.SetOtherType(DtEffect_1.DtEffectOtherType.OneTurnOnce);
        let ctri = new DtConTriggerDiscardEvoOrigin_1.DtConTriggerDiscardEvoOrigin(DtEnum_1.DtEffectRoundValid.Self, DtMessageData_1.DtProtoEnum_MoveReason.None);
        ctri.SetBeDiscardCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Opponent);
        effect.SetTriggerCondition(ctri);
        effect.SetEffect(this.Effect, null);
    }
    Effect() {
        this.ThisCardUseCost(-1);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_P_004_O_1;
//# sourceMappingURL=EC_P_004_O_1.js.map