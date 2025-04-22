"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtCardOperate_Destory_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_Destory");
class EC_ST13_15_2 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnUseEffect);
        this.Skill1(effect);
    }
    Skill1(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.GetMachineFilter().GetCardsWitchCustom(this.GetDpHigh);
        skill.SetOperate(new DtCardOperate_Destory_1.DtCardOperate_Destory());
    }
    GetDpHigh() {
        let high = 0;
        this.GetOppPlayer().areaInBattle.ForeachCards((card) => {
            if (card.CardTypeIs(DtEnum_1.DtCardType.Monster)) {
                if (high < card.GetLastDP()) {
                    high = card.GetLastDP();
                }
            }
        });
        if (high == 0) {
            return null;
        }
        return this.GetOppPlayer().areaInBattle.GetListWithCondition((card) => {
            return card.CardTypeIs(DtEnum_1.DtCardType.Monster) && card.GetLastDP() == high;
        });
    }
}
exports.default = EC_ST13_15_2;
//# sourceMappingURL=EC_ST13_15_2.js.map