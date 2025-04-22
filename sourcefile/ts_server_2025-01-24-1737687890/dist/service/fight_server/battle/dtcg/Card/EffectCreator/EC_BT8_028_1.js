"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtConTriggerCardOnPlay_1 = require("../Effect/TriggerCondition/DtConTriggerCardOnPlay");
class EC_BT8_028_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerCardOnPlay);
        let tricon = new DtConTriggerCardOnPlay_1.DtConTriggerCardOnPlay(DtEnum_1.DtEffectRoundValid.Both, DtEnum_1.DtCardType.Monster, DtEnum_1.DtSkillTargetToPlayer.Opponent);
        let cardcon = tricon.SetPlayCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Opponent);
        cardcon.SetLv(DtEnum_1.DtFilterCompare.GREATE_EQUAL, 5);
        effect.SetTriggerCondition(tricon);
        effect.SetEffect(this.Effect, null);
    }
    Effect() {
        this.ThisCardUseCost(-1);
        this.GetManager().OnDrawCard(this.parent, 1, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT8_028_1;
//# sourceMappingURL=EC_BT8_028_1.js.map