"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtCardFilter_MulNameIs_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_MulNameIs");
const DtCardFilter_NameIs_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_NameIs");
const DtCardOperate_PlayCard_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_PlayCard");
class EC_EX2_012_3 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.CreateNewBasicEffect(DtEffectType_1.DtEffectType.OnDestory);
        this.Group1(effect);
        this.Group2(effect);
    }
    Group1(effect) {
        effect.SetEffectGroup("g1", this.BattleNormalPlayMulCard, () => {
            this.Skill1(effect);
            this.Skill2(effect);
        });
    }
    Group2(effect) {
        effect.SetEffectGroup("g2", this.BattleOnlayOnePlayCard, () => {
            let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 3);
            skill.GetChooseMachine().SetCanCancel(true);
            skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.GY, DtEnum_1.DtAreaType.HAND);
            skill.SetFilter(new DtCardFilter_MulNameIs_1.DtCardFilter_MulNameIs(true, DtCardDigimonType_1.DtCardDigimonType.name_type_10109, DtCardDigimonType_1.DtCardDigimonType.name_type_10960));
            skill.SetOperate(new DtCardOperate_PlayCard_1.DtCardOperate_PlayCard(false, true));
        });
    }
    Skill1(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.GetChooseMachine().SetCanCancel(true);
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.GY, DtEnum_1.DtAreaType.HAND);
        skill.SetFilter(new DtCardFilter_NameIs_1.DtCardFilter_NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10109, true));
        skill.SetOperate(new DtCardOperate_PlayCard_1.DtCardOperate_PlayCard(false, true));
    }
    Skill2(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 2);
        skill.GetChooseMachine().SetCanCancel(true);
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.GY, DtEnum_1.DtAreaType.HAND);
        skill.SetFilter(new DtCardFilter_NameIs_1.DtCardFilter_NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10960, true));
        skill.SetOperate(new DtCardOperate_PlayCard_1.DtCardOperate_PlayCard(false, true));
    }
}
exports.default = EC_EX2_012_3;
//# sourceMappingURL=EC_EX2_012_3.js.map