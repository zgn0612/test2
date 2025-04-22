"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEnum_1 = require("../../Data/DtEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtConTriggerCardOnPlay_1 = require("../Effect/TriggerCondition/DtConTriggerCardOnPlay");
const DtSkillBase_1 = require("../Skill/DtSkillBase");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardOperate_ChangeState_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_ChangeState");
const DtCardOperate_DiscardOriginCard_TopOrBottom_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_DiscardOriginCard_TopOrBottom");
class EC_EX2_057_2 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerCardOnPlay);
        let ctri = new DtConTriggerCardOnPlay_1.DtConTriggerCardOnPlay(DtEnum_1.DtEffectRoundValid.Self, DtEnum_1.DtCardType.Monster, DtEnum_1.DtSkillTargetToPlayer.Self);
        ctri.SetPlayCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.Blue, DtEnum_1.DtSkillTargetToPlayer.Self);
        effect.SetTriggerCondition(ctri);
        effect.SetCondition(this.Con);
        effect.SetEffectActivateAsk();
        this.SetDirectSkill(effect, new DtCardOperate_ChangeState_1.DtCardOperate_ChangeState(DtEnum_1.DtCardBattleState.Reset));
        this.Skill1(effect);
        effect.SetEffect(this.Effect2, null);
    }
    Con(effect) {
        return this.parent.cardBattleState == DtEnum_1.DtCardBattleState.Activate;
    }
    Skill1(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.type = DtSkillBase_1.DtSkillRunType.Perv_Fail_Then_Over;
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA);
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetOperate(new DtCardOperate_DiscardOriginCard_TopOrBottom_1.DtCardOperate_DiscardOriginCard_TopOrBottom(0));
    }
    Effect2(effect) {
        let msg = effect.eventMsg;
        if (msg.card) {
            if (msg.card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10966)) {
                this.GetOppPlayer().areaInBattle.ForeachCards((card) => {
                    this.GetManager().OnCardDiscardEvoOriginWhere(this.parent, card, 0, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
                });
            }
        }
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_EX2_057_2;
//# sourceMappingURL=EC_EX2_057_2.js.map