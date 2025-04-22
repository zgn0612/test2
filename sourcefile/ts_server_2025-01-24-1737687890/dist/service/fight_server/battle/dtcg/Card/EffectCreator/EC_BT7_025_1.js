"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtConTriggerCardBeforeEvolution_1 = require("../Effect/TriggerCondition/DtConTriggerCardBeforeEvolution");
class EC_BT7_025_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerCardBeforeEvolution);
        effect.SetTriggerAreaAllExceptDigitama();
        let conevo = new DtConTriggerCardBeforeEvolution_1.DtConTriggerCardBeforeEvolution(DtEnum_1.DtEffectRoundValid.Both);
        let concard = conevo.SetEvoCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Self);
        concard.SetCondition(this, (card) => {
            return card == this.parent;
        });
        effect.SetTriggerCondition(conevo);
        effect.SetCondition(this.Con);
        effect.SetEffect(this.E2Effect, null);
    }
    Con(effect) {
        let msg = effect.eventMsg;
        return msg.oriCard.CheckOriginListWithCondition((card) => {
            return card.CardTypeIs(DtEnum_1.DtCardType.Role);
        });
    }
    E2Effect() {
        this.GetManager().GetCurrentFsmEvo().SetChangeCost(-2);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT7_025_1;
//# sourceMappingURL=EC_BT7_025_1.js.map