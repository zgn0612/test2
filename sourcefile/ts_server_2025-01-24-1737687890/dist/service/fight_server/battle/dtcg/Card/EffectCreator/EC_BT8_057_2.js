"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtConTriggerCardChangeBattleState_1 = require("../Effect/TriggerCondition/DtConTriggerCardChangeBattleState");
class EC_BT8_057_2 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerCardChangeBattleState);
        let contri = new DtConTriggerCardChangeBattleState_1.DtConTriggerCardChangeBattleState(DtEnum_1.DtEffectRoundValid.Self, DtEnum_1.DtCardType.Monster, DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtCardBattleState.Activate);
        contri.SetPhase(DtEnum_1.DtBattlePhase.ActivePhase);
        let cardcon = contri.SetCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Self);
        cardcon.SetCondition(this, (card) => {
            return card == this.parent;
        });
        effect.SetTriggerCondition(contri);
        effect.SetEffect(this.Effect, null);
    }
    Effect() {
        this.GetManager().OnDiscardDefenseCard(this.parent, this.GetOppPlayer(), 1, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT8_057_2;
//# sourceMappingURL=EC_BT8_057_2.js.map