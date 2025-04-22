"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtGroupBrowseCardsCreator_1 = require("../Effect/DtGroupBrowseCardsCreator");
const DtConTriggerWhenAttacking_1 = require("../Effect/TriggerCondition/DtConTriggerWhenAttacking");
const DtSkillBase_1 = require("../Skill/DtSkillBase");
const DtCardFilter_Custom_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_Custom");
const DtCardOperate_ChangeState_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_ChangeState");
const DtCardOperate_MoveTo_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_MoveTo");
const DtCardOperate_SpecialOperate_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_SpecialOperate");
class EC_BT5_089_2 extends DtGroupBrowseCardsCreator_1.default {
    oriCard;
    SetEffect() {
        let effect = this.CreateNewBasicEffect(DtEffectType_1.DtEffectType.TriggerWhenAttacking);
        let conatk = new DtConTriggerWhenAttacking_1.DtConTriggerWhenAttacking(DtEnum_1.DtEffectRoundValid.Self);
        let concard = conatk.SetAtkCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.Green, DtEnum_1.DtSkillTargetToPlayer.Self);
        concard.SetLv(DtEnum_1.DtFilterCompare.EQUAL, 5);
        effect.SetTriggerCondition(conatk);
        effect.SetCondition(this.Con);
        effect.SetEffectActivateAsk();
        this.SetDirectSkill(effect, new DtCardOperate_ChangeState_1.DtCardOperate_ChangeState(DtEnum_1.DtCardBattleState.Reset));
        effect.SetEffect(this.InitEvoData, null).type = DtSkillBase_1.DtSkillRunType.Perv_Fail_Then_Over;
        this.SetCommonBrowseFromDeckThenBottom(effect, 3, 1, (skill, idx) => {
            skill.GetChooseMachine().SetCanCancel(true);
            skill.SetFilter(new DtCardFilter_Custom_1.DtCardFilter_Custom(this, (card) => {
                if (this.oriCard && this.oriCard.whereAreaType == DtEnum_1.DtAreaType.BATTLE_AREA) {
                    if (card.CardTypeIs(DtEnum_1.DtCardType.Monster) && card.ColorIs(DtEnum_1.DtCardColor.Green) && card.CardLvIs(DtEnum_1.DtFilterCompare.EQUAL, this.GetLvToEff(6))) {
                        return card.CheckCanEvo(this.oriCard).resultCost >= 0;
                    }
                }
                return false;
            }));
            skill.SetOperate(new DtCardOperate_MoveTo_1.DtCardOperate_MoveTo(DtEnum_1.DtAreaType.TOKEN));
            skill.SetOperate(new DtCardOperate_SpecialOperate_1.DtCardOperate_SpecialOperate(this, (card) => {
                this.GetManager().ForceDigimonAttackEvo(this.GetPlayer(), card, this.oriCard, 0, true);
            }, DtCardOperate_SpecialOperate_1.DtSpecialOpType.SPECIAL_EFFECT));
        });
    }
    Con() {
        return this.parent.cardBattleState == DtEnum_1.DtCardBattleState.Activate;
    }
    InitEvoData(effect) {
        this.oriCard = effect.eventMsg.atkCard;
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT5_089_2;
//# sourceMappingURL=EC_BT5_089_2.js.map