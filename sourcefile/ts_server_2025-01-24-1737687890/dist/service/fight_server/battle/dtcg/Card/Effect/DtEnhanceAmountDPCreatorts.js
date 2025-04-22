"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardFilter_Custom_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_Custom");
const DtCardOperate_SpecialOperate_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_SpecialOperate");
const DtEffect_1 = require("./DtEffect");
const DtEnhanceEffectCreatorts_1 = require("./DtEnhanceEffectCreatorts");
class DtEnhanceAmountDPCreatorts extends DtEnhanceEffectCreatorts_1.default {
    maxDp = 0;
    curDp = 0;
    arrCards;
    reason;
    CreateAmountDPEffect(type, dp, reason) {
        this.arrCards = new Array();
        this.maxDp = dp;
        this.reason = reason;
        let effect = this.GetNewEffect();
        effect.SetTriggerType(type);
        effect.SetInitFunc(this.initfunc);
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA);
        skill.SetFilter(new DtCardFilter_Custom_1.DtCardFilter_Custom(this, (card) => {
            return card.GetLastDP() <= this.GetMaxDP() - this.curDp;
        }));
        skill.SetFilter(new DtCardFilter_Custom_1.DtCardFilter_Custom(this, (card) => {
            for (let i = 0; i < this.arrCards.length; i++) {
                if (this.arrCards[i] == card) {
                    return false;
                }
            }
            return true;
        }));
        this.OnAmountFilter(skill.GetMachineFilter());
        skill.SetOperate(new DtCardOperate_SpecialOperate_1.DtCardOperate_SpecialOperate(this, (card, effect) => {
            this.arrCards.push(card);
            this.curDp += card.GetLastDP();
            effect.SetToStateStepWithStageId(1);
        }, DtCardOperate_SpecialOperate_1.DtSpecialOpType.NEED_NEXT_STEP));
        effect.SetEffect(this.AmountEffectAll, null);
        return effect;
    }
    SetAmountDPEffect(effect, dp, stage, reason) {
        this.arrCards = new Array();
        this.maxDp = dp;
        this.reason = reason;
        effect.SetInitFunc(this.initfunc);
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, stage);
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA);
        skill.SetFilter(new DtCardFilter_Custom_1.DtCardFilter_Custom(this, (card) => {
            return card.GetLastDP() <= this.GetMaxDP() - this.curDp;
        }));
        skill.SetFilter(new DtCardFilter_Custom_1.DtCardFilter_Custom(this, (card) => {
            for (let i = 0; i < this.arrCards.length; i++) {
                if (this.arrCards[i] == card) {
                    return false;
                }
            }
            return true;
        }));
        this.OnAmountFilter(skill.GetMachineFilter());
        skill.SetOperate(new DtCardOperate_SpecialOperate_1.DtCardOperate_SpecialOperate(this, (card, effect) => {
            this.arrCards.push(card);
            this.curDp += card.GetLastDP();
            effect.SetToStateStepWithStageId(1);
        }, DtCardOperate_SpecialOperate_1.DtSpecialOpType.NEED_NEXT_STEP));
        effect.SetEffect(this.AmountEffectAll, null);
        return skill;
    }
    initfunc() {
        this.curDp = 0;
        this.arrCards.length = 0;
    }
    AmountEffectAll() {
        if (this.arrCards && this.arrCards.length > 0) {
            this.OnAmountCardsSelects(this.arrCards);
        }
        return DtEffect_1.DtEffectResult.Next;
    }
    OnAmountFilter(filter) {
    }
    OnAmountCardsSelects(cards) {
    }
    GetMaxDP() {
        let addDP = 0;
        if (this.reason == DtEnum_1.DtSkillReason.Destory) {
            addDP = this.GetManager().globalBuffMgr.CheckPlayerBuffInt(this.GetPlayer(), DtEnum_1.DtBuffType.INCREASE_DESTORY_CARD_DP, this.parent);
            addDP += this.parent.GetDestoryDPLim();
        }
        return addDP + this.maxDp;
    }
}
exports.default = DtEnhanceAmountDPCreatorts;
//# sourceMappingURL=DtEnhanceAmountDPCreatorts.js.map