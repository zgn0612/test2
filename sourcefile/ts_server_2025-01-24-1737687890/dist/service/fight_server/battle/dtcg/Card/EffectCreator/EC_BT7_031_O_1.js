"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtConTriggerDiscardEvoOrigin_1 = require("../Effect/TriggerCondition/DtConTriggerDiscardEvoOrigin");
class EC_BT7_031_O_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        this.SetOriginNewEffect((effect) => {
            effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerDiscardEvoOrigin);
            effect.SetTriggerArea(DtEnum_1.DtAreaType.OTHER_EVO | DtEnum_1.DtAreaType.GY);
            let tricon = new DtConTriggerDiscardEvoOrigin_1.DtConTriggerDiscardEvoOrigin(DtEnum_1.DtEffectRoundValid.Self, DtMessageData_1.DtProtoEnum_MoveReason.BaolieDicard);
            tricon.SetCondition(this, (msg) => {
                return msg.receiveCard == this.parent;
            });
            effect.SetTriggerCondition(tricon);
            effect.SetEffect(this.Effect, null);
        });
    }
    Effect() {
        this.GetManager().OnCardMoveTo(this.parent, this.parent, DtEnum_1.DtAreaType.HAND, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT7_031_O_1;
//# sourceMappingURL=EC_BT7_031_O_1.js.map