"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtSkillBase_1 = require("../Skill/DtSkillBase");
const DtCardOperate_ChangeState_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_ChangeState");
class EC_BT1_089_2 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnUseEffect);
        effect.SetCondition(this.Condition);
        this.SetDirectSkill(effect, new DtCardOperate_ChangeState_1.DtCardOperate_ChangeState(DtEnum_1.DtCardBattleState.Reset));
        effect.SetEffect(this.Effect, null).type = DtSkillBase_1.DtSkillRunType.Perv_Fail_Then_Over;
    }
    Condition() {
        if (this.parent.cardBattleState == DtEnum_1.DtCardBattleState.Reset) {
            return false;
        }
        let hatchedCard = this.GetPlayer().areaDigitama.hatchedCard;
        if (hatchedCard != null) {
            if (hatchedCard.config.dp == 0) {
                return false;
            }
        }
        else {
            if (this.GetPlayer().areaDigitama.CardCount() == 0) {
                return false;
            }
        }
        let can = this.GetPlayer().areaInBattle.CheckWithCondition((card) => {
            if (card.CardTypeIs(DtEnum_1.DtCardType.Monster) && card.ColorIs(DtEnum_1.DtCardColor.Green)) {
                if (card.CardLvIs(DtEnum_1.DtFilterCompare.GREATE_EQUAL, 5)) {
                    return true;
                }
            }
            return false;
        });
        return can;
    }
    Effect() {
        let hatchedCard = this.GetPlayer().areaDigitama.hatchedCard;
        if (hatchedCard == null) {
            this.GetManager().EffectHatchDigimon(this.GetPlayer());
        }
        else {
            this.GetManager().EffectHatchGoBattle(this.GetPlayer());
        }
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT1_089_2;
//# sourceMappingURL=EC_BT1_089_2.js.map