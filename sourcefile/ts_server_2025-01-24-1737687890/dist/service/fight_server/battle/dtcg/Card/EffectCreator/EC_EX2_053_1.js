"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtGroupBrowseCardsCreator_1 = require("../Effect/DtGroupBrowseCardsCreator");
const DtCardFilter_CardCost_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardCost");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardFilter_FeatureIs_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_FeatureIs");
const DtCardOperate_PlayCard_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_PlayCard");
class EC_EX2_053_1 extends DtGroupBrowseCardsCreator_1.default {
    SetEffect() {
        let effectPlay = this.GetNewEffect();
        effectPlay.SetTriggerType(DtEffectType_1.DtEffectType.OnPlay);
        effectPlay.SetOtherType(DtEffect_1.DtEffectOtherType.OneTurnOnce);
        effectPlay.SetCondition(this.Con);
        this.Skill(effectPlay);
        let effectAtk = this.GetNewEffect();
        effectAtk.SetTriggerType(DtEffectType_1.DtEffectType.OnWhenAttacking);
        effectAtk.SetOtherType(DtEffect_1.DtEffectOtherType.OneTurnOnce);
        effectAtk.SetCondition(this.Con);
        this.Skill(effectAtk);
        this.BindOneTurnOnceEffect(effectPlay, effectAtk);
    }
    Con() {
        return this.GetPlayer().areaInBattle.CheckWithCondition((card) => {
            return card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10981, true) && card.GetOriginDigimonCount() >= 5;
        });
    }
    Skill(effect) {
        this.SetCommonBrowseFromDeckThenDeckTop(effect, 3, 1, (skill, idx) => {
            skill.GetChooseMachine().SetCanCancel(true);
            skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
            skill.SetFilter(new DtCardFilter_FeatureIs_1.DtCardFilter_FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_40));
            skill.SetFilter(new DtCardFilter_CardCost_1.DtCardFilter_CardCost(DtEnum_1.DtFilterCompare.LESS_EQUAL, 10, DtEnum_1.DtAreaType.None));
            skill.SetOperate(new DtCardOperate_PlayCard_1.DtCardOperate_PlayCard(false, true));
        });
    }
}
exports.default = EC_EX2_053_1;
//# sourceMappingURL=EC_EX2_053_1.js.map