"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceBaoLieEffectCreatorts_1 = require("../Effect/DtEnhanceBaoLieEffectCreatorts");
const DtCardFilter_CanUse_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CanUse");
const DtCardFilter_CardColor_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardColor");
const DtCardFilter_CardCost_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardCost");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardOperate_PlayCard_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_PlayCard");
class EC_P_027_1 extends DtEnhanceBaoLieEffectCreatorts_1.default {
    SetEffect() {
        let eff = this.GetNewEffect();
        eff.SetTriggerType(DtEffectType_1.DtEffectType.OnUseEffect);
        this.SetEnBaolieEffect(eff, 2);
        this.skill(eff);
    }
    skill(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.HAND);
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Magic));
        skill.SetFilter(new DtCardFilter_CardColor_1.DtCardFilter_CardColor(DtEnum_1.DtCardColor.Purple));
        skill.SetFilter(new DtCardFilter_CardCost_1.DtCardFilter_CardCost(DtEnum_1.DtFilterCompare.LESS_EQUAL, 7, DtEnum_1.DtAreaType.None));
        skill.SetFilter(new DtCardFilter_CanUse_1.DtCardFilter_CanUse());
        skill.SetOperate(new DtCardOperate_PlayCard_1.DtCardOperate_PlayCard(false, true));
    }
}
exports.default = EC_P_027_1;
//# sourceMappingURL=EC_P_027_1.js.map