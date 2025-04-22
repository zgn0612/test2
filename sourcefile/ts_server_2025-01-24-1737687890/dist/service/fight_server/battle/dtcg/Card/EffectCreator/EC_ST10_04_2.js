"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtConTriggerCardBeforeEvolution_1 = require("../Effect/TriggerCondition/DtConTriggerCardBeforeEvolution");
class EC_ST10_04_2 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerCardBeforeEvolution);
        let ctri = new DtConTriggerCardBeforeEvolution_1.DtConTriggerCardBeforeEvolution(DtEnum_1.DtEffectRoundValid.Self);
        let cevo = ctri.SetEvoCardCon(DtEnum_1.DtCardType.None, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Self);
        cevo.SetFeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_21, DtCardDigimonType_1.DtCardDigimonType.type_32);
        let cori = ctri.SetOriCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Self);
        cori.SetCondition(this, (card) => { return card == this.parent; });
        effect.SetTriggerCondition(ctri);
        effect.SetEffect(this.E2Effect, null);
    }
    E2Effect() {
        this.GetManager().GetCurrentFsmEvo().SetChangeCost(-2);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_ST10_04_2;
//# sourceMappingURL=EC_ST10_04_2.js.map