"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardOperate_AddInheritBuff_Int_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_AddInheritBuff_Int");
const DtCardOperate_SpecialOperate_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_SpecialOperate");
class EC_BT2_041_1 extends DtEnhanceEffectCreatorts_1.default {
    hasEffCount = 0;
    effCount = 0;
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnEvolution);
        effect.SetEffect(this.roleRestEffect, null);
        this.Skill(effect);
    }
    roleRestEffect(effect) {
        let cards = this.GetPlayer().areaInBattle.GetListWithCondition((card) => {
            if (card.CardTypeIs(DtEnum_1.DtCardType.Role)) {
                if (card.ColorIs(DtEnum_1.DtCardColor.Yellow)) {
                    if (card.cardBattleState == DtEnum_1.DtCardBattleState.Activate) {
                        return true;
                    }
                }
            }
            return false;
        });
        for (let i = 0; i < cards.length; i++) {
            this.GetManager().OnSetCardResetState(this.parent, cards[i], DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        }
        this.effCount = cards.length;
        if (this.effCount == 0) {
            effect.ForceOver();
        }
        this.hasEffCount = 0;
        return DtEffect_1.DtEffectResult.Next;
    }
    Skill(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA);
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetOperate(new DtCardOperate_AddInheritBuff_Int_1.DtCardOperate_AddInheritBuff_Int(DtEnum_1.DtBuffType.CHANGE_DP, -4000, DtEnum_1.DtBuffDurationType.RoundOver));
        skill.SetOperate(new DtCardOperate_SpecialOperate_1.DtCardOperate_SpecialOperate(this, (card, eff) => {
            this.hasEffCount++;
            if (this.hasEffCount < this.effCount) {
                eff.SetToStateStepWithStageId(1);
            }
        }, DtCardOperate_SpecialOperate_1.DtSpecialOpType.SPECIAL_EFFECT));
    }
}
exports.default = EC_BT2_041_1;
//# sourceMappingURL=EC_BT2_041_1.js.map