"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectEvoOverAttack_1 = require("../Effect/DtEffectEvoOverAttack");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardOperate_Degenerate_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_Degenerate");
const DtPlayerChooseBase_1 = require("../Skill/DtSkillPlayerChoose/DtPlayerChooseBase");
const DtSkillPlayerChooseBase_1 = require("../Skill/DtSkillPlayerChooseBase");
const DtSkillPlayerOption_1 = require("../Skill/DtSkillPlayerOption");
class EC_BT9_068_4 extends DtEffectEvoOverAttack_1.default {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnEvolution);
        this.Skill1(effect);
        let skill = new DtSkillPlayerOption_1.DtSkillPlayerOption(effect, 5, this, 2, DtEnum_1.DtSkillTargetToPlayer.Self);
        effect.RegisterSkill(skill);
        skill.SetSkillBehavior(this.OptionInit, this.OnOptionChoose);
        this.SetEvoOverAttackEffect(effect);
    }
    Skill1(effect) {
        let skill = new DtSkillPlayerChooseBase_1.DtSkillPlayerChoose(effect, 10, this);
        skill.SetChooseMachine(new DtPlayerChooseBase_1.DtPlayerChooseBase(skill, DtEnum_1.DtSkillTargetToPlayer.Self, DtMessageData_1.DtProtoEnum_Compare.EQUAL_CARD_COUNT, 1, false));
        effect.RegisterSkill(skill);
        skill.GetChooseMachine().SetInitEvent(this, (skil) => {
            let con = this.parent.CheckOriginListWithCondition((card) => {
                return card.CardTypeIs(DtEnum_1.DtCardType.Monster) && card.ColorIs(DtEnum_1.DtCardColor.Black);
            });
            skil.SetActive(con);
        });
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA);
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetOperate(new DtCardOperate_Degenerate_1.DtCardOperate_Degenerate(1));
    }
    OptionInit(effect) {
        if (this.OnOtherCondition(effect) == false) {
            effect.ForceOver();
            return DtEffect_1.DtEffectResult.Next;
        }
        return DtEffect_1.DtEffectResult.WaitForChoose;
    }
    OnOptionChoose(uid, effect) {
        let count = uid.toNumber();
        if (count == 0) {
            effect.ForceOver();
        }
    }
}
exports.default = EC_BT9_068_4;
//# sourceMappingURL=EC_BT9_068_4.js.map