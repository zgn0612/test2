"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtSkillBase_1 = require("../Skill/DtSkillBase");
const DtCardFilter_CardLv_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardLv");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardFilter_Custom_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_Custom");
const DtCardFilter_FeatureIs_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_FeatureIs");
const DtCardOperate_SpecialOperate_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_SpecialOperate");
class EC_BT7_110_2 extends DtEnhanceEffectCreatorts_1.default {
    battleCard;
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnUseEffect);
        effect.SetInitFunc(this.InitEff);
        this.Skill1(effect);
        this.Skill2(effect);
    }
    InitEff() {
        this.battleCard = null;
    }
    Skill1(eff) {
        let skill = this.SetSkillPlayerChoose_Single(eff, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.BATTLE_AREA);
        skill.SetFilter(new DtCardFilter_CardLv_1.DtCardFilter_CardLv(DtEnum_1.DtFilterCompare.EQUAL, 4));
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetFilter(new DtCardFilter_Custom_1.DtCardFilter_Custom(this, this.OriCanEvo));
        skill.SetOperate(new DtCardOperate_SpecialOperate_1.DtCardOperate_SpecialOperate(this, (card) => {
            this.battleCard = card;
        }, DtCardOperate_SpecialOperate_1.DtSpecialOpType.NEED_NEXT_STEP));
    }
    Skill2(eff) {
        let skill = this.SetSkillPlayerChoose_Single(eff, DtEnum_1.DtSkillTargetToPlayer.Self, 2);
        skill.type = DtSkillBase_1.DtSkillRunType.Perv_Fail_Then_Over;
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.HAND);
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetFilter(new DtCardFilter_FeatureIs_1.DtCardFilter_FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_137));
        skill.SetFilter(new DtCardFilter_Custom_1.DtCardFilter_Custom(this, this.EvoCan));
        skill.SetOperate(new DtCardOperate_SpecialOperate_1.DtCardOperate_SpecialOperate(this, this.EvoOp, DtCardOperate_SpecialOperate_1.DtSpecialOpType.SPECIAL_EFFECT));
    }
    OriCanEvo(card) {
        return this.GetPlayer().areaHand.CheckWithCondition((evo) => {
            if (evo.FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_137)) {
                if (evo.config.card_evo_condition != null) {
                    for (let i = 0; i < evo.config.card_evo_condition.length; i++) {
                        if (card.ColorIs(evo.config.card_evo_condition[i].color)) {
                            return true;
                        }
                    }
                }
            }
            return false;
        });
    }
    EvoCan(evo) {
        if (evo.config.card_evo_condition != null) {
            for (let i = 0; i < evo.config.card_evo_condition.length; i++) {
                if (this.battleCard.ColorIs(evo.config.card_evo_condition[i].color)) {
                    return true;
                }
            }
        }
        return false;
    }
    EvoOp(evo) {
        if (evo.config.card_evo_condition != null) {
            for (let i = 0; i < evo.config.card_evo_condition.length; i++) {
                if (this.battleCard.ColorIs(evo.config.card_evo_condition[i].color)) {
                    this.GetManager().ForceDigimonEvo(this.GetPlayer(), evo, this.battleCard, evo.config.card_evo_condition[i].cost);
                }
            }
        }
    }
}
exports.default = EC_BT7_110_2;
//# sourceMappingURL=EC_BT7_110_2.js.map