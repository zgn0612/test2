"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtConTriggerCardBeforeEvolution_1 = require("../Effect/TriggerCondition/DtConTriggerCardBeforeEvolution");
class EC_P_029_O_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerCardBeforeEvolution);
        let conevo = new DtConTriggerCardBeforeEvolution_1.DtConTriggerCardBeforeEvolution(DtEnum_1.DtEffectRoundValid.Self);
        let conevocard = conevo.SetEvoCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Self);
        conevocard.SetArea(DtEnum_1.DtAreaType.HAND);
        conevocard.SetNameCon(DtCardDigimonType_1.DtCardDigimonType.name_type_10714, true);
        let conoricard = conevo.SetOriCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Self);
        conoricard.SetCondition(this, (card) => { return card == this.parent; });
        effect.SetTriggerCondition(conevo);
        effect.SetEffect(this.E2Effect, null);
    }
    E2Effect() {
        this.GetManager().GetCurrentFsmEvo().SetChangeCost(-2);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_P_029_O_1;
//# sourceMappingURL=EC_P_029_O_1.js.map