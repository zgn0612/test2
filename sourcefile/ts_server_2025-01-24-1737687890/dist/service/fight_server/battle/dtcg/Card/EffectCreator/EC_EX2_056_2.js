"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectEvoOverAttack_1 = require("../Effect/DtEffectEvoOverAttack");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtConTriggerCardBeforeEvolution_1 = require("../Effect/TriggerCondition/DtConTriggerCardBeforeEvolution");
class EC_EX2_056_2 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerCardBeforeEvolution);
        let tricon = new DtConTriggerCardBeforeEvolution_1.DtConTriggerCardBeforeEvolution(DtEnum_1.DtEffectRoundValid.Self);
        tricon.SetOriCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Self);
        let tevo = tricon.SetEvoCardCon(DtEnum_1.DtCardType.None, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Self);
        tevo.SetCondition(this, (card) => {
            return card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10103) || card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10110);
        });
        effect.SetTriggerCondition(tricon);
        effect.SetEffect(this.Effect, null);
    }
    Effect(effect) {
        let msg = effect.eventMsg;
        if (msg == null) {
            return DtEffect_1.DtEffectResult.Next;
        }
        let card = msg.oriCard;
        if (card) {
            this.CreateEffectTo(new EC_EX2_056_2_ADD(), card, false);
        }
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_EX2_056_2;
class EC_EX2_056_2_ADD extends DtEffectEvoOverAttack_1.default {
    SetEffect() {
        this.CreateTimeEvoOverAttack(DtEnum_1.DtBuffDurationType.RoundOver, 1);
    }
}
//# sourceMappingURL=EC_EX2_056_2.js.map