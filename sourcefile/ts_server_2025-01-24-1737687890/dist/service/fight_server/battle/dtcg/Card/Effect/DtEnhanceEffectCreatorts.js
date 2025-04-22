"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtPlayerChooseBase_1 = require("../Skill/DtSkillPlayerChoose/DtPlayerChooseBase");
const DtSkillPlayerChooseBase_1 = require("../Skill/DtSkillPlayerChooseBase");
const DtSkillPlayerOption_1 = require("../Skill/DtSkillPlayerOption");
const DtEffectCreator_1 = require("./DtEffectCreator");
class DtEnhanceEffectCreatorts extends DtEffectCreator_1.DtEffectCreator {
    CreateNewBasicEffect(type) {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(type);
        return effect;
    }
    SetSkillPlayerChoose_Single(effect, choosePlayer, stage) {
        let skill = new DtSkillPlayerChooseBase_1.DtSkillPlayerChoose(effect, stage, this);
        skill.SetChooseMachine(new DtPlayerChooseBase_1.DtPlayerChooseBase(skill, choosePlayer, DtMessageData_1.DtProtoEnum_Compare.EQUAL_CARD_COUNT, 1, false));
        effect.RegisterSkill(skill);
        return skill;
    }
    SetSkillPlayerChoose_Single_CustomCount(effect, choosePlayer, count, stage) {
        let skill = new DtSkillPlayerChooseBase_1.DtSkillPlayerChoose(effect, stage, this);
        skill.SetChooseMachine(new DtPlayerChooseBase_1.DtPlayerChooseBase(skill, choosePlayer, DtMessageData_1.DtProtoEnum_Compare.EQUAL_CARD_COUNT, count, false));
        effect.RegisterSkill(skill);
        return skill;
    }
    SetSkillPlayerChoose_Mul(effect, choosePlayer, coun, stage) {
        let skill = new DtSkillPlayerChooseBase_1.DtSkillPlayerChoose(effect, stage, this);
        skill.SetChooseMachine(new DtPlayerChooseBase_1.DtPlayerChooseBase(skill, choosePlayer, DtMessageData_1.DtProtoEnum_Compare.LESS_THAN_OR_EQUAL, coun, false));
        effect.RegisterSkill(skill);
        return skill;
    }
    SetSkillPlayerChoose_GreateEqual(effect, choosePlayer, coun, stage) {
        let skill = new DtSkillPlayerChooseBase_1.DtSkillPlayerChoose(effect, stage, this);
        skill.SetChooseMachine(new DtPlayerChooseBase_1.DtPlayerChooseBase(skill, choosePlayer, DtMessageData_1.DtProtoEnum_Compare.GREATE_EQUAL, coun, false));
        effect.RegisterSkill(skill);
        return skill;
    }
    SetSkillPlayerChoose_Sort(effect, choosePlayer, stage) {
        let skill = new DtSkillPlayerChooseBase_1.DtSkillPlayerChoose(effect, stage, this);
        skill.SetChooseMachine(new DtPlayerChooseBase_1.DtPlayerChooseBase(skill, choosePlayer, DtMessageData_1.DtProtoEnum_Compare.SORT, 0, false));
        effect.RegisterSkill(skill);
        return skill;
    }
    SetSkillPlayerChooseOption(effect, choosePlayer, chooseCount, stage) {
        let skill = new DtSkillPlayerOption_1.DtSkillPlayerOption(effect, stage, this, chooseCount, choosePlayer);
        effect.RegisterSkill(skill);
        return skill;
    }
    CreateCommonArea_single(type, effectToPlayer, area) {
        let effect = this.CreateNewBasicEffect(type);
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.GetMachineFilter().GetCardsWitchAreaData(effectToPlayer, area);
        this.OnCommonInitSkill(skill);
        this.OnCommonAreaSetFilter(skill.GetMachineFilter());
        this.OnCommonAreaSetOperate(skill.GetMachineOperate());
        return effect;
    }
    CreateCommonArea_Mul(type, effectToPlayer, area, count) {
        let effect = this.CreateNewBasicEffect(type);
        let skill = this.SetSkillPlayerChoose_Mul(effect, DtEnum_1.DtSkillTargetToPlayer.Self, count, 1);
        skill.GetMachineFilter().GetCardsWitchAreaData(effectToPlayer, area);
        this.OnCommonInitSkill(skill);
        this.OnCommonAreaSetFilter(skill.GetMachineFilter());
        this.OnCommonAreaSetOperate(skill.GetMachineOperate());
        return effect;
    }
    OnCommonAreaSetFilter(mcFliter) {
    }
    OnCommonAreaSetOperate(mcOperate) {
    }
    OnCommonInitSkill(skil) {
    }
    BattleNormalPlayMulCard() {
        if (this.GetPlayer().GetBattleCardsReLimit() > 1) {
            return true;
        }
        return false;
    }
    BattleOnlayOnePlayCard() {
        if (this.GetPlayer().GetBattleCardsReLimit() <= 1) {
            return true;
        }
        return false;
    }
}
exports.default = DtEnhanceEffectCreatorts;
//# sourceMappingURL=DtEnhanceEffectCreatorts.js.map