"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectEvoOverAttack_1 = require("../Effect/DtEffectEvoOverAttack");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtCardFilter_CardCost_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardCost");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardOperate_Destory_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_Destory");
const DtPlayerChooseBase_1 = require("../Skill/DtSkillPlayerChoose/DtPlayerChooseBase");
const DtSkillPlayerChooseBase_1 = require("../Skill/DtSkillPlayerChooseBase");
const DtSkillPlayerOption_1 = require("../Skill/DtSkillPlayerOption");
class EC_ST13_06_2 extends DtEffectEvoOverAttack_1.default {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.name = DtEnum_1.EFFECT_NAME.EVO_ATTACK;
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnEvolution);
        let skill = new DtSkillPlayerOption_1.DtSkillPlayerOption(effect, 5, this, 2, DtEnum_1.DtSkillTargetToPlayer.Self);
        effect.RegisterSkill(skill);
        skill.SetSkillBehavior(this.OptionInit, this.OnOptionChoose);
        this.SetEvoOverAttackEffect(effect);
        this.Skill1(effect);
        effect.SetEffect(this.EffDisCardDefense, null);
    }
    OptionInit(effect) {
        if (this.OnOtherCondition(effect) == false) {
            effect.SetToStateStepWithStageId(10);
            return DtEffect_1.DtEffectResult.Next;
        }
        return DtEffect_1.DtEffectResult.WaitForChoose;
    }
    OnOptionChoose(uid, effect) {
        let count = uid.toNumber();
        if (count == 0) {
            effect.SetToStateStepWithStageId(10);
        }
    }
    Skill1(effect) {
        let skill = new DtSkillPlayerChooseBase_1.DtSkillPlayerChoose(effect, 10, this);
        skill.SetChooseMachine(new DtPlayerChooseBase_1.DtPlayerChooseBase(skill, DtEnum_1.DtSkillTargetToPlayer.Self, DtMessageData_1.DtProtoEnum_Compare.EQUAL_CARD_COUNT, 1, false));
        effect.RegisterSkill(skill);
        skill.GetChooseMachine().SetInitEvent(this, (choose) => {
            let effect = choose.GetParentEffect();
            let msg = effect.eventMsg;
            if (msg && msg.type == DtEnum_1.DtEvolutionType.Fusion) {
                let c = this.parent.GetOriginDigimonCount();
                if (c >= 4) {
                    choose.ChangeTypeNum(Math.floor(c / 4));
                    choose.SetActive(true);
                }
                else {
                    choose.SetActive(false);
                }
            }
            else {
                choose.SetActive(false);
            }
        });
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA);
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetFilter(new DtCardFilter_CardCost_1.DtCardFilter_CardCost(DtEnum_1.DtFilterCompare.LESS_EQUAL, 20, DtEnum_1.DtAreaType.None));
        skill.SetOperate(new DtCardOperate_Destory_1.DtCardOperate_Destory());
    }
    EffDisCardDefense(effect) {
        let msg = effect.eventMsg;
        if (msg && msg.type == DtEnum_1.DtEvolutionType.Fusion) {
            let c = this.parent.GetOriginDigimonCount();
            if (c >= 4) {
                this.GetManager().OnDiscardDefenseCard(this.parent, this.GetOppPlayer(), Math.floor(c / 4), DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
            }
        }
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_ST13_06_2;
//# sourceMappingURL=EC_ST13_06_2.js.map