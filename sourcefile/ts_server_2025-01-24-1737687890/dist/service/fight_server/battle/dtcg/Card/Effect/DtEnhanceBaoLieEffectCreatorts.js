"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardOperate_DiscardOriginCard_BaoLie_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_DiscardOriginCard_BaoLie");
const DtGroupBrowseCardsCreator_1 = require("./DtGroupBrowseCardsCreator");
class DtEnhanceBaoLieEffectCreatorts extends DtGroupBrowseCardsCreator_1.default {
    SetEnBaolieEffect(eff, num) {
        eff.name = DtEnum_1.EFFECT_NAME.DIGIMON_BAOLIE;
        eff.SetCondition(() => {
            return this.parent.GetOriginDigimonCount() >= num;
        });
        this.BaoLieSkill(eff, num);
    }
    BaoLieSkill(effect, num) {
        let skill = this.SetSkillPlayerChoose_Single_CustomCount(effect, DtEnum_1.DtSkillTargetToPlayer.Self, num, 10);
        skill.GetMachineFilter().GetCardsFromSelfOrigin();
        skill.SetOperate(new DtCardOperate_DiscardOriginCard_BaoLie_1.DtCardOperate_DiscardOriginCard_BaoLie());
    }
}
exports.default = DtEnhanceBaoLieEffectCreatorts;
//# sourceMappingURL=DtEnhanceBaoLieEffectCreatorts.js.map