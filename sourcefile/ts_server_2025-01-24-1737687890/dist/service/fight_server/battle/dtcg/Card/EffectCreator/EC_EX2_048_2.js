"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtSkillBase_1 = require("../Skill/DtSkillBase");
const DtCardFilter_NameIs_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_NameIs");
const DtCardOperate_SetOriginCustom_ChooseIsParent_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_SetOriginCustom_ChooseIsParent");
const DtCardOperate_SpecialOperate_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_SpecialOperate");
class EC_EX2_048_2 extends DtEnhanceEffectCreatorts_1.default {
    card;
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnPlay);
        effect.SetInitFunc(() => { this.card = null; });
        this.Skill1(effect);
        this.Skill2(effect);
    }
    Skill1(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.BATTLE_AREA, DtEnum_1.DtAreaType.HAND);
        skill.SetFilter(new DtCardFilter_NameIs_1.DtCardFilter_NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10985, true));
        skill.SetOperate(new DtCardOperate_SpecialOperate_1.DtCardOperate_SpecialOperate(this, (card) => { this.card = card; }, DtCardOperate_SpecialOperate_1.DtSpecialOpType.NEED_NEXT_STEP));
    }
    Skill2(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 2);
        skill.type = DtSkillBase_1.DtSkillRunType.Perv_Fail_Then_Over;
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.BATTLE_AREA);
        skill.SetFilter(new DtCardFilter_NameIs_1.DtCardFilter_NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10981, true));
        skill.SetOperate(new DtCardOperate_SetOriginCustom_ChooseIsParent_1.DtCardOperate_SetOriginCustom_ChooseIsParent(0, this, () => { return this.card; }));
    }
}
exports.default = EC_EX2_048_2;
//# sourceMappingURL=EC_EX2_048_2.js.map