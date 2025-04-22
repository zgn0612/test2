"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtConTriggerCardBeforeEvolution_1 = require("../Effect/TriggerCondition/DtConTriggerCardBeforeEvolution");
class EC_EX1_061_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let e2 = this.GetNewEffect();
        e2.SetTriggerType(DtEffectType_1.DtEffectType.TriggerCardBeforeEvolution);
        let ctri = new DtConTriggerCardBeforeEvolution_1.DtConTriggerCardBeforeEvolution(DtEnum_1.DtEffectRoundValid.Self);
        let tevo = ctri.SetEvoCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Self);
        tevo.SetArea(DtEnum_1.DtAreaType.HAND);
        tevo.SetNameCon(DtCardDigimonType_1.DtCardDigimonType.name_type_10099, false);
        let tori = ctri.SetOriCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Self);
        tori.SetCondition(this, (card) => { return card == this.parent; });
        e2.SetTriggerCondition(ctri);
        e2.SetEffect(this.E2Effect, null);
    }
    E2Effect() {
        this.GetManager().GetCurrentFsmEvo().SetChangeCost(-1);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_EX1_061_1;
//# sourceMappingURL=EC_EX1_061_1.js.map