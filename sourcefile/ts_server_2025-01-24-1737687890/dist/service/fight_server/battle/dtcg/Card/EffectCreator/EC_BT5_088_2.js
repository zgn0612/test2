"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtConTriggerWhenAttacking_1 = require("../Effect/TriggerCondition/DtConTriggerWhenAttacking");
const DtSkillBase_1 = require("../Skill/DtSkillBase");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardFilter_HasOriginCards_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_HasOriginCards");
const DtCardOperate_ChangeState_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_ChangeState");
const DtCardOperate_SpecialOperate_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_SpecialOperate");
const DtSkillPlayerOption_1 = require("../Skill/DtSkillPlayerOption");
class EC_BT5_088_2 extends DtEnhanceEffectCreatorts_1.default {
    card;
    SetEffect() {
        let effect = this.CreateNewBasicEffect(DtEffectType_1.DtEffectType.TriggerWhenAttacking);
        effect.SetEffectActivateAsk();
        let ctri = new DtConTriggerWhenAttacking_1.DtConTriggerWhenAttacking(DtEnum_1.DtEffectRoundValid.Self);
        ctri.SetAtkCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.Blue, DtEnum_1.DtSkillTargetToPlayer.Self);
        effect.SetTriggerCondition(ctri);
        effect.SetCondition(this.Con);
        this.SetDirectSkill(effect, new DtCardOperate_ChangeState_1.DtCardOperate_ChangeState(DtEnum_1.DtCardBattleState.Reset));
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.type = DtSkillBase_1.DtSkillRunType.Perv_Fail_Then_Over;
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA);
        this.OnCommonAreaSetFilter(skill.GetMachineFilter());
        this.OnCommonAreaSetOperate(skill.GetMachineOperate());
        let skill2 = new DtSkillPlayerOption_1.DtSkillPlayerOption(effect, 2, this, 2, DtEnum_1.DtSkillTargetToPlayer.Self);
        skill2.type = DtSkillBase_1.DtSkillRunType.Perv_Fail_Then_Over;
        skill2.SetSkillBehavior(this.OptionInit, this.OnOptionChoose);
        effect.RegisterSkill(skill2);
    }
    Con(effect) {
        this.card = null;
        return this.parent.cardBattleState == DtEnum_1.DtCardBattleState.Activate;
    }
    OnCommonAreaSetFilter(mcFliter) {
        mcFliter.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        mcFliter.SetFilter(new DtCardFilter_HasOriginCards_1.DtCardFilter_OriginCards(DtEnum_1.DtFilterCompare.GREATER, 0));
    }
    OnCommonAreaSetOperate(mcOperate) {
        mcOperate.SetOperate(new DtCardOperate_SpecialOperate_1.DtCardOperate_SpecialOperate(this, (card) => {
            this.card = card;
        }, DtCardOperate_SpecialOperate_1.DtSpecialOpType.NEED_NEXT_STEP));
    }
    OptionInit(effect) {
        if (this.card == null) {
            return DtEffect_1.DtEffectResult.Next;
        }
        if (this.card.GetOriginDigimonCount() == 1) {
            this.GetManager().OnCardDiscardEvoOriginWhere(this.parent, this.card, 0, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
            return DtEffect_1.DtEffectResult.Next;
        }
        return DtEffect_1.DtEffectResult.WaitForChoose;
    }
    OnOptionChoose(uid, effect) {
        let count = uid.toNumber() + 1;
        if (count == 1) {
            this.GetManager().OnCardDiscardEvoOriginWhere(this.parent, this.card, 0, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        }
        else {
            let oricards = this.card.GetOriginDigimonList();
            this.GetManager().OnCardDiscardEvoOriginCard(this.parent, this.card, oricards[oricards.length - 1], DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
            this.GetManager().OnCardDiscardEvoOriginCard(this.parent, this.card, oricards[oricards.length - 2], DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        }
    }
}
exports.default = EC_BT5_088_2;
//# sourceMappingURL=EC_BT5_088_2.js.map