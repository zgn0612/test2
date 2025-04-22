"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceBaoLieEffectCreatorts_1 = require("../Effect/DtEnhanceBaoLieEffectCreatorts");
const DtCardFilter_CardBattleState_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardBattleState");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardOperate_ReturnTo_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_ReturnTo");
class EC_BT4_062_1 extends DtEnhanceBaoLieEffectCreatorts_1.default {
    SetEffect() {
        let eff = this.GetNewEffect();
        eff.SetTriggerType(DtEffectType_1.DtEffectType.OnEvolution);
        eff.SetEffectActivateAsk();
        this.SetEnBaolieEffect(eff, 4);
        eff.SetEffect(this.Effect1, null);
        this.Skill3(eff);
    }
    Effect1() {
        this.GetOppPlayer().areaInBattle.ForeachCards((card) => {
            if (card.CardTypeIs(DtEnum_1.DtCardType.Monster) && card.GetLastDP() <= 5000) {
                this.GetManager().OnSetCardResetState(this.parent, card, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
            }
        });
        return DtEffect_1.DtEffectResult.Next;
    }
    Skill3(effect) {
        let skill = this.SetSkillPlayerChoose_Sort(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 3);
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA);
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetFilter(new DtCardFilter_CardBattleState_1.DtCardFilter_CardBattleState(DtEnum_1.DtCardBattleState.Reset));
        skill.SetOperate(new DtCardOperate_ReturnTo_1.DtCardOperate_ReturnTo(DtEnum_1.DtActionEffectType.BattleReturnDeck, 0));
    }
}
exports.default = EC_BT4_062_1;
//# sourceMappingURL=EC_BT4_062_1.js.map