"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardFilter_Custom_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_Custom");
const DtCardOperate_SpecialOperate_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_SpecialOperate");
const DtEffect_1 = require("./DtEffect");
const DtEnhanceEffectCreatorts_1 = require("./DtEnhanceEffectCreatorts");
class DtEnhanceAmountCostCreatorts extends DtEnhanceEffectCreatorts_1.default {
    maxCost = 0;
    curCost = 0;
    arrCards;
    CreateAmountCostEffect(type, cost) {
        this.arrCards = new Array();
        this.maxCost = cost;
        let effect = this.GetNewEffect();
        effect.SetTriggerType(type);
        effect.SetInitFunc(this.initfunc);
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA);
        skill.SetFilter(new DtCardFilter_Custom_1.DtCardFilter_Custom(this, (card) => {
            return card.GetConfigCost() <= this.maxCost - this.curCost;
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
            this.curCost += card.GetConfigCost();
            effect.SetToStateStepWithStageId(1);
        }, DtCardOperate_SpecialOperate_1.DtSpecialOpType.NEED_NEXT_STEP));
        effect.SetEffect(this.AmountEffectAll, null);
        return effect;
    }
    initfunc() {
        this.curCost = 0;
        this.arrCards.length = 0;
    }
    AmountEffectAll() {
        this.OnAmountCardsSelects(this.arrCards);
        return DtEffect_1.DtEffectResult.Next;
    }
    OnAmountFilter(filter) {
    }
    OnAmountCardsSelects(cards) {
    }
}
exports.default = DtEnhanceAmountCostCreatorts;
//# sourceMappingURL=DtEnhanceAmountCostCreatorts.js.map