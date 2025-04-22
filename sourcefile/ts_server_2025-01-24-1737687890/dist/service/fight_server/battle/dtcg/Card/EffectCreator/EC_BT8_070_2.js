"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtConTriggerCardOnActEffect_1 = require("../Effect/TriggerCondition/DtConTriggerCardOnActEffect");
class EC_BT8_070_2 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerCardOnActEffect);
        effect.SetOtherType(DtEffect_1.DtEffectOtherType.OneTurnOnce);
        let triCon = new DtConTriggerCardOnActEffect_1.DtConTriggerCardOnActEffect(DtEnum_1.DtEffectRoundValid.Both, DtEnum_1.DtActionEffectType.AtkZeroDestroy, DtEnum_1.DtActionEffectType.AttackDestroy, DtEnum_1.DtActionEffectType.EffectDestroy);
        triCon.SetReceiveCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Opponent);
        effect.SetTriggerCondition(triCon);
        effect.SetEffect(this.AddPower, null);
        effect.SetEffectActivateAsk();
    }
    AddPower(effect) {
        this.GetManager().OnSetCardActiveState(this.parent, this.parent, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT8_070_2;
//# sourceMappingURL=EC_BT8_070_2.js.map