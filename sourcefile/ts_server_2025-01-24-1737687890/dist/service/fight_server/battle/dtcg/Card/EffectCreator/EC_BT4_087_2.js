"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtBuffAttribute_1 = require("../Buff/DtBuffAttribute");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtConTriggerCardOnPlay_1 = require("../Effect/TriggerCondition/DtConTriggerCardOnPlay");
class EC_BT4_087_2 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let eff = this.GetNewEffect();
        eff.SetTriggerType(DtEffectType_1.DtEffectType.TriggerCardOnPlay);
        let ctri = new DtConTriggerCardOnPlay_1.DtConTriggerCardOnPlay(DtEnum_1.DtEffectRoundValid.Self, DtEnum_1.DtCardType.Monster, DtEnum_1.DtSkillTargetToPlayer.Self);
        ctri.SetCondition(this, (msg) => {
            if (msg.reason == DtMessageData_1.DtProtoEnum_MoveReason.EffectToBattle || msg.reason == DtMessageData_1.DtProtoEnum_MoveReason.FromOriginToBattle) {
                if (msg.from == DtEnum_1.DtAreaType.GY) {
                    return true;
                }
            }
            return false;
        });
        eff.SetTriggerCondition(ctri);
        eff.SetOtherType(DtEffect_1.DtEffectOtherType.OneTimeingMore);
        eff.SetEffect(this.Effect1, null);
    }
    Effect1(effect) {
        let msg = effect.eventMsg;
        effect.AddInheritBuffTo(new DtBuffAttribute_1.DtBuffAttribute(DtEnum_1.DtBuffType.Quick_Attack_Digimon).SetBuffDurationType(DtEnum_1.DtBuffDurationType.RoundOver), msg.card);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT4_087_2;
//# sourceMappingURL=EC_BT4_087_2.js.map