"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtConTriggerCardOnPlay_1 = require("../Effect/TriggerCondition/DtConTriggerCardOnPlay");
class EC_BT4_060_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let eff = this.GetNewEffect();
        eff.SetTriggerType(DtEffectType_1.DtEffectType.TriggerCardOnPlay);
        let ctri = new DtConTriggerCardOnPlay_1.DtConTriggerCardOnPlay(DtEnum_1.DtEffectRoundValid.Both, DtEnum_1.DtCardType.Monster, DtEnum_1.DtSkillTargetToPlayer.Both);
        let tcard = ctri.SetPlayCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Both);
        tcard.SetLv(DtEnum_1.DtFilterCompare.LESS_EQUAL, 4);
        eff.SetTriggerCondition(ctri);
        eff.SetOtherType(DtEffect_1.DtEffectOtherType.OneTimeingMore);
        eff.SetEffect(this.Effect1, null);
    }
    Effect1(effect) {
        let msg = effect.eventMsg;
        this.GetManager().OnSetCardResetState(this.parent, msg.card, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT4_060_1;
//# sourceMappingURL=EC_BT4_060_1.js.map