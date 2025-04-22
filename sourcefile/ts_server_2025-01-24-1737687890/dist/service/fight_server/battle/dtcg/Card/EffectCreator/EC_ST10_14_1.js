"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtSkillBase_1 = require("../Skill/DtSkillBase");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardOperate_SpecialOperate_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_SpecialOperate");
class EC_ST10_14_1 extends DtEnhanceEffectCreatorts_1.default {
    card;
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnUseEffect);
        this.Skill(effect);
        this.Option(effect);
        effect.SetEffect(this.DiscardDefense, null).type = DtSkillBase_1.DtSkillRunType.Perv_Fail_Then_Over;
    }
    Skill(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA);
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetOperate(new DtCardOperate_SpecialOperate_1.DtCardOperate_SpecialOperate(this, (card) => { this.card = card; }, DtCardOperate_SpecialOperate_1.DtSpecialOpType.NEED_NEXT_STEP));
    }
    Option(effect) {
        let skill = this.SetSkillPlayerChooseOption(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 2, 5);
        skill.type = DtSkillBase_1.DtSkillRunType.Perv_Fail_Then_Over;
        skill.SetSkillBehavior(null, this.Choose);
    }
    Choose(uid, eff, skill) {
        let idx = uid.toNumber();
        if (this.card) {
            if (idx == 0) {
                this.GetManager().OnCardReturnTo(this.parent, this.card, DtEnum_1.DtActionEffectType.BattleReturnDefense, 0).SetEndCallBack((success) => {
                    if (success == false) {
                        if (skill) {
                            skill.success = false;
                        }
                    }
                });
            }
            else {
                this.GetManager().OnCardReturnTo(this.parent, this.card, DtEnum_1.DtActionEffectType.BattleReturnDefense, 1).SetEndCallBack((success) => {
                    if (success == false) {
                        if (skill) {
                            skill.success = false;
                        }
                    }
                });
            }
        }
    }
    DiscardDefense() {
        this.GetManager().OnDiscardDefenseCard(this.parent, this.GetOppPlayer(), 1, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_ST10_14_1;
//# sourceMappingURL=EC_ST10_14_1.js.map