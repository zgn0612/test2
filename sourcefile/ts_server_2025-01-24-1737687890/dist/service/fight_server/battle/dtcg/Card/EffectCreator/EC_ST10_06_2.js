"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtGroupBrowseCardsCreator_1 = require("../Effect/DtGroupBrowseCardsCreator");
const DtCardFilter_CardColor_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardColor");
const DtCardFilter_CardLv_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardLv");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardOperate_MoveTo_Defense_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_MoveTo_Defense");
const DtCardOperate_PlayCard_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_PlayCard");
class EC_ST10_06_2 extends DtGroupBrowseCardsCreator_1.default {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnEvolution);
        this.Skill1(effect);
        effect.SetEffect(this.Effect, null);
        this.Skill3(effect);
        effect.SetEffect(this.RandomSort, null);
    }
    Skill1(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.GY);
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetFilter(new DtCardFilter_CardColor_1.DtCardFilter_CardColor(DtEnum_1.DtCardColor.Yellow, DtEnum_1.DtCardColor.Purple));
        skill.SetOperate(new DtCardOperate_MoveTo_Defense_1.DtCardOperate_MoveTo_Defense());
    }
    Effect(effect) {
        let msg = effect.eventMsg;
        if (msg && msg.type == DtEnum_1.DtEvolutionType.Normal) {
            effect.ForceOver();
        }
        return DtEffect_1.DtEffectResult.Next;
    }
    Skill3(effect) {
        this.CheckALLSelfDefense(effect, 1, (skill, idx) => {
            skill.GetChooseMachine().SetCanCancel(true);
            skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
            skill.SetFilter(new DtCardFilter_CardLv_1.DtCardFilter_CardLv(DtEnum_1.DtFilterCompare.LESS_EQUAL, 5));
            skill.SetOperate(new DtCardOperate_PlayCard_1.DtCardOperate_PlayCard(false, true));
        });
    }
    RandomSort() {
        this.GetPlayer().areaDefense.RandomSort();
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_ST10_06_2;
//# sourceMappingURL=EC_ST10_06_2.js.map