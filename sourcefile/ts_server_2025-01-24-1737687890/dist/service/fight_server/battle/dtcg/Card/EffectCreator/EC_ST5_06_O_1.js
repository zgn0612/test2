"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtConTriggerRoundOver_1 = require("../Effect/TriggerCondition/DtConTriggerRoundOver");
class EC_ST5_06_O_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effOver = this.GetNewEffect();
        effOver.SetTriggerType(DtEffectType_1.DtEffectType.TriggerRoundOver);
        effOver.SetTriggerCondition(new DtConTriggerRoundOver_1.DtConTriggerRoundOver(DtEnum_1.DtEffectRoundValid.Opponent));
        effOver.SetCondition(this.Con);
        effOver.SetEffect(this.Effect, null);
    }
    Con() {
        return this.GetOppPlayer().roundData.GetPlayerAttack() == 0;
    }
    Effect() {
        this.GetManager().OnDrawCard(this.parent, 1, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_ST5_06_O_1;
//# sourceMappingURL=EC_ST5_06_O_1.js.map