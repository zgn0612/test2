"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtGroupBrowseCardsCreator_1 = require("../Effect/DtGroupBrowseCardsCreator");
const DtSkillBase_1 = require("../Skill/DtSkillBase");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardOperate_ChangeState_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_ChangeState");
const DtCardOperate_MoveTo_Hand_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_MoveTo_Hand");
class EC_BT1_088_1 extends DtGroupBrowseCardsCreator_1.default {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnUseEffect);
        effect.SetCondition(this.Con);
        this.SetDirectSkill(effect, new DtCardOperate_ChangeState_1.DtCardOperate_ChangeState(DtEnum_1.DtCardBattleState.Reset));
        effect.SetEffect(this.Next, null).type = DtSkillBase_1.DtSkillRunType.Perv_Fail_Then_Over;
        this.SetCommonBrowseFromDeckThenBottom(effect, 1, 1, (skl, idx) => {
            skl.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
            skl.SetOperate(new DtCardOperate_MoveTo_Hand_1.DtCardOperate_MoveTo_Hand());
        });
    }
    Next() {
        return DtEffect_1.DtEffectResult.Next;
    }
    Con(effect) {
        if (this.parent.cardBattleState == DtEnum_1.DtCardBattleState.Reset) {
            return false;
        }
        let c = this.GetPlayer().areaInBattle.CheckWithCondition((card) => {
            if (card.CardTypeIs(DtEnum_1.DtCardType.Monster) && card.ColorIs(DtEnum_1.DtCardColor.Green)) {
                if (card.CardLvIs(DtEnum_1.DtFilterCompare.GREATE_EQUAL, 5)) {
                    return true;
                }
            }
            return false;
        });
        return c;
    }
}
exports.default = EC_BT1_088_1;
//# sourceMappingURL=EC_BT1_088_1.js.map