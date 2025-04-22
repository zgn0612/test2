"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtCardFilter_NameIs_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_NameIs");
const DtCardOperate_PlayCardReset_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_PlayCardReset");
class EC_BT8_080_O_1 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnDestory);
        effect.SetCondition(this.Con);
        effect.SetEffectActivateAsk();
        this.skill1(effect);
    }
    Con() {
        return this.parent.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10099);
    }
    skill1(eff) {
        let skill = this.SetSkillPlayerChoose_Single(eff, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.GY, DtEnum_1.DtAreaType.HAND);
        skill.SetFilter(new DtCardFilter_NameIs_1.DtCardFilter_NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10937, true));
        skill.SetOperate(new DtCardOperate_PlayCardReset_1.DtCardOperate_PlayCardReset(false, true));
    }
}
exports.default = EC_BT8_080_O_1;
//# sourceMappingURL=EC_BT8_080_O_1.js.map