"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtBuffAttribute_1 = require("../Buff/DtBuffAttribute");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtSkillBase_1 = require("../Skill/DtSkillBase");
const DtCardFilter_CardBattleState_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardBattleState");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardOperate_ChangeState_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_ChangeState");
const DtCardOperate_SpecialOperate_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_SpecialOperate");
class EC_BT8_102_1 extends DtEnhanceEffectCreatorts_1.default {
    card;
    state;
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnUseEffect);
        effect.SetInitFunc(() => { this.card = null; });
        this.Skill1(effect);
        this.Skill2(effect);
        effect.SetEffect(this.Buff, null);
    }
    Skill1(eff) {
        let skill = this.SetSkillPlayerChoose_Single(eff, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.GetChooseMachine().SetCanCancel(true);
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.BATTLE_AREA);
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetFilter(new DtCardFilter_CardBattleState_1.DtCardFilter_CardBattleState(DtEnum_1.DtCardBattleState.Activate));
        skill.SetOperate(new DtCardOperate_ChangeState_1.DtCardOperate_ChangeState(DtEnum_1.DtCardBattleState.Reset));
    }
    Skill2(eff) {
        let skill = this.SetSkillPlayerChoose_Single(eff, DtEnum_1.DtSkillTargetToPlayer.Self, 2);
        skill.type = DtSkillBase_1.DtSkillRunType.Perv_Fail_Then_Over;
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA);
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardType.Role));
        skill.SetOperate(new DtCardOperate_SpecialOperate_1.DtCardOperate_SpecialOperate(this, (card) => {
            this.card = card;
            this.state = this.card.cardBattleState;
        }, DtCardOperate_SpecialOperate_1.DtSpecialOpType.NEED_NEXT_STEP));
        skill.SetOperate(new DtCardOperate_ChangeState_1.DtCardOperate_ChangeState(DtEnum_1.DtCardBattleState.Reset));
    }
    Buff(eff) {
        if (this.card) {
            if (this.card.cardBattleState == DtEnum_1.DtCardBattleState.Reset && this.state == DtEnum_1.DtCardBattleState.Activate) {
                eff.AddInheritBuffTo(new DtBuffAttribute_1.DtBuffAttribute(DtEnum_1.DtBuffType.CAN_NOT_SET_ACTIVE_STATE).SetBuffDurationType(DtEnum_1.DtBuffDurationType.RoundOverOpponent), this.card);
            }
        }
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT8_102_1;
//# sourceMappingURL=EC_BT8_102_1.js.map