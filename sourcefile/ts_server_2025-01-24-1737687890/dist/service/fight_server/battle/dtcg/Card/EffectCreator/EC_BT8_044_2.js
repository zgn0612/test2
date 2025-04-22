"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtConTriggerCardEvolution_1 = require("../Effect/TriggerCondition/DtConTriggerCardEvolution");
class EC_BT8_044_2 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerCardEvolution);
        let tricon = new DtConTriggerCardEvolution_1.DtConTriggerCardEvolution(DtEnum_1.DtEffectRoundValid.Self);
        tricon.SetOriCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Self);
        let tevo = tricon.SetEvoCardCon(DtEnum_1.DtCardType.None, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Self);
        tevo.SetCondition(this, (card) => { return card != this.parent; });
        effect.SetTriggerCondition(tricon);
        effect.SetOtherType(DtEffect_1.DtEffectOtherType.OneTurnOnce);
        effect.SetEffectActivateAsk();
        effect.SetEffect(this.Effect, null);
    }
    Effect(effect) {
        let msg = effect.eventMsg;
        if (msg == null) {
            return DtEffect_1.DtEffectResult.Next;
        }
        let card = msg.evoCard;
        if (card) {
            this.GetManager().OnSetCardActiveState(this.parent, card, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        }
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT8_044_2;
//# sourceMappingURL=EC_BT8_044_2.js.map