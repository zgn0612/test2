"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardFilter_HasOriginCards_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_HasOriginCards");
const DtCardOperate_ChangeState_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_ChangeState");
class EC_BT3_100_1 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnUseEffect);
        effect.SetEffect(this.Effect, null);
        this.Skill(effect);
    }
    Effect(effect) {
        this.GetOppPlayer().areaInBattle.ForeachCards((card) => {
            if (card.CardTypeIs(DtEnum_1.DtCardType.Monster) && card.GetOriginDigimonCount() > 0) {
                this.GetManager().OnCardDiscardEvoOriginWhere(this.parent, card, 0, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
                this.GetManager().OnCardDiscardEvoOriginWhere(this.parent, card, 0, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
            }
        });
        return DtEffect_1.DtEffectResult.Next;
    }
    Skill(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.SetCondition(() => {
            let hasGreen = this.GetPlayer().areaInBattle.CheckWithCondition((card) => {
                return card.CardTypeIs(DtEnum_1.DtCardType.Monster) && card.ColorIs(DtEnum_1.DtCardColor.Green);
            });
            return hasGreen;
        });
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA);
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetFilter(new DtCardFilter_HasOriginCards_1.DtCardFilter_OriginCards(DtEnum_1.DtFilterCompare.EQUAL, 0));
        skill.SetOperate(new DtCardOperate_ChangeState_1.DtCardOperate_ChangeState(DtEnum_1.DtCardBattleState.Reset));
    }
}
exports.default = EC_BT3_100_1;
//# sourceMappingURL=EC_BT3_100_1.js.map