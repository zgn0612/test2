"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardFilter_FeatureIs_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_FeatureIs");
const DtCardOperate_MoveTo_Deck_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_MoveTo_Deck");
const DtCardOperate_SpecialOperate_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_SpecialOperate");
class EC_BT4_074_2 extends DtEnhanceEffectCreatorts_1.default {
    cardCount = 0;
    SetEffect() {
        let effect = this.CreateCommonArea_Mul(DtEffectType_1.DtEffectType.OnPlay, DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.GY, 5);
        effect.SetInitFunc(() => { this.cardCount = 0; });
        effect.SetEffectActivateAsk();
        effect.SetEffect(this.AddCost, null);
    }
    OnCommonAreaSetFilter(mcFliter) {
        mcFliter.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        mcFliter.SetFilter(new DtCardFilter_FeatureIs_1.DtCardFilter_FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_139));
    }
    OnCommonAreaSetOperate(mcOperate) {
        mcOperate.SetOperate(new DtCardOperate_MoveTo_Deck_1.DtCardOperate_MoveTo_Deck());
        mcOperate.SetOperate(new DtCardOperate_SpecialOperate_1.DtCardOperate_SpecialOperate(this, () => { this.cardCount++; }, DtCardOperate_SpecialOperate_1.DtSpecialOpType.CAL_NUMBER));
    }
    AddCost() {
        this.ThisCardUseCost(-2 * this.cardCount);
        return DtEffect_1.DtEffectResult.Next;
    }
    OnCommonInitSkill(skil) {
        skil.mulNeedReverse = true;
        skil.GetChooseMachine().compareExtend = DtEnum_1.DtCompareExtend.NeedNum;
    }
}
exports.default = EC_BT4_074_2;
//# sourceMappingURL=EC_BT4_074_2.js.map