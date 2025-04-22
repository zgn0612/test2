"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtConTriggerCardMove_1 = require("../Effect/TriggerCondition/DtConTriggerCardMove");
const DtCardFilter_NameIs_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_NameIs");
const DtCardOperate_PlayCard_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_PlayCard");
class EC_EX2_044_1 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerCardMove);
        let effcon = new DtConTriggerCardMove_1.DtConTriggerCardMove(DtEnum_1.DtEffectRoundValid.Both, DtEnum_1.DtSkillTargetToPlayer.Both, DtEnum_1.DtSkillTargetToPlayer.Self).SetBeDiscardFromHand();
        effcon.SetCondition(this, this.TriggerFunc);
        effect.SetTriggerCondition(effcon);
        effect.SetTriggerArea(DtEnum_1.DtAreaType.HAND | DtEnum_1.DtAreaType.GY);
        effect.SetEffectActivateAsk();
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.GY);
        skill.SetFilter(new DtCardFilter_NameIs_1.DtCardFilter_NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10252, true));
        skill.SetOperate(new DtCardOperate_PlayCard_1.DtCardOperate_PlayCard(false, true));
    }
    TriggerFunc(d) {
        return d.card == this.parent;
    }
}
exports.default = EC_EX2_044_1;
//# sourceMappingURL=EC_EX2_044_1.js.map