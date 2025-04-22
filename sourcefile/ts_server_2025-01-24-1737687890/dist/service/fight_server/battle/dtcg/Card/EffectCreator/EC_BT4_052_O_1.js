"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtConTriggerDiscardEvoOrigin_1 = require("../Effect/TriggerCondition/DtConTriggerDiscardEvoOrigin");
class EC_BT4_052_O_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        this.SetOriginNewEffect((effect) => {
            effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerDiscardEvoOrigin);
            let ctri = new DtConTriggerDiscardEvoOrigin_1.DtConTriggerDiscardEvoOrigin(DtEnum_1.DtEffectRoundValid.Self, DtMessageData_1.DtProtoEnum_MoveReason.BaolieDicard);
            ctri.SetCondition(this, (d) => {
                return d.receiveCard == this.parent;
            });
            effect.SetTriggerArea(DtEnum_1.DtAreaType.OTHER_EVO | DtEnum_1.DtAreaType.GY);
            effect.SetEffect(this.Effect, null);
        });
    }
    Effect() {
        this.GetManager().OnCardMoveTo(this.parent, this.parent, DtEnum_1.DtAreaType.HAND, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT4_052_O_1;
//# sourceMappingURL=EC_BT4_052_O_1.js.map