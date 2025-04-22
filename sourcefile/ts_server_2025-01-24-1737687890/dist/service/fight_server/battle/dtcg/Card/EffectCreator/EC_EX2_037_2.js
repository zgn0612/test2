"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtConTriggerCardChangeBattleState_1 = require("../Effect/TriggerCondition/DtConTriggerCardChangeBattleState");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardOperate_Degenerate_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_Degenerate");
class EC_EX2_037_2 extends DtEnhanceEffectCreatorts_1.default {
    arrCards;
    SetEffect() {
        this.arrCards = new Array;
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerCardChangeBattleState);
        let coni = new DtConTriggerCardChangeBattleState_1.DtConTriggerCardChangeBattleState(DtEnum_1.DtEffectRoundValid.Opponent, DtEnum_1.DtCardType.Monster, DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtCardBattleState.Activate);
        let ccard = coni.SetCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Opponent);
        ccard.SetCondition(this, (card) => {
            if (this.arrCards.includes(card) == false) {
                this.arrCards.push(card);
            }
            return true;
        });
        effect.SetTriggerCondition(coni);
        effect.SetOtherType(DtEffect_1.DtEffectOtherType.OneTurnOnce);
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.GetMachineFilter().GetCardsWitchCustom(() => {
            return this.arrCards;
        });
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetOperate(new DtCardOperate_Degenerate_1.DtCardOperate_Degenerate(1));
        effect.SetEffect(this.ClearData, null);
    }
    ClearData() {
        this.arrCards.length = 0;
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_EX2_037_2;
//# sourceMappingURL=EC_EX2_037_2.js.map