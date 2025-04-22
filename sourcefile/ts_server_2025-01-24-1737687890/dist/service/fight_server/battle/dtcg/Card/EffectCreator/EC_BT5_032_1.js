"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtBuffAttribute_1 = require("../Buff/DtBuffAttribute");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtSkillBase_1 = require("../Skill/DtSkillBase");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardFilter_HasOriginCards_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_HasOriginCards");
const DtCardOperate_SpecialOperate_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_SpecialOperate");
const DtSkillPlayerOption_1 = require("../Skill/DtSkillPlayerOption");
class EC_BT5_032_1 extends DtEnhanceEffectCreatorts_1.default {
    card;
    SetEffect() {
        let effect = this.CreateCommonArea_single(DtEffectType_1.DtEffectType.OnWhenAttacking, DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA);
        effect.SetInitFunc(() => { this.card = null; });
        let skill = new DtSkillPlayerOption_1.DtSkillPlayerOption(effect, 2, this, 2, DtEnum_1.DtSkillTargetToPlayer.Self);
        skill.type = DtSkillBase_1.DtSkillRunType.Perv_Fail_Then_Skip;
        skill.SetSkillBehavior(this.OptionInit, this.OnOptionChoose);
        effect.RegisterSkill(skill);
        effect.SetEffect(this.BuffEffect, null);
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
    BuffEffect(effect) {
        let hasNo = this.GetOppPlayer().areaInBattle.CheckWithCondition((card) => {
            return card.GetOriginDigimonCount() == 0 && card.CardTypeIs(DtEnum_1.DtCardType.Monster);
        });
        if (hasNo) {
            effect.AddInheritBuffTo(new DtBuffAttribute_1.DtBuffAttribute(DtEnum_1.DtBuffType.DISTURB).SetBuffDurationType(DtEnum_1.DtBuffDurationType.RoundOver), this.parent);
        }
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT5_032_1;
//# sourceMappingURL=EC_BT5_032_1.js.map