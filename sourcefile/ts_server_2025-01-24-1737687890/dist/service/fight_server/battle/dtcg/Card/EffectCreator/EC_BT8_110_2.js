"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtSkillBase_1 = require("../Skill/DtSkillBase");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardFilter_Custom_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_Custom");
const DtCardFilter_FeatureIs_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_FeatureIs");
const DtCardFilter_HasOriginCards_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_HasOriginCards");
const DtCardOperate_SpecialOperate_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_SpecialOperate");
class EC_BT8_110_2 extends DtEnhanceEffectCreatorts_1.default {
    battleCard;
    evocard;
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnUseEffect);
        effect.SetInitFunc(this.InitEff);
        this.skill1(effect);
        this.skill2(effect);
        this.Skill3(effect);
        effect.SetEffect(this.Effactive, null);
    }
    InitEff() {
        this.battleCard = null;
        this.evocard = null;
    }
    skill1(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.BATTLE_AREA);
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetFilter(new DtCardFilter_HasOriginCards_1.DtCardFilter_OriginCards(DtEnum_1.DtFilterCompare.GREATER, 0));
        skill.SetFilter(new DtCardFilter_FeatureIs_1.DtCardFilter_FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_506));
        skill.SetFilter(new DtCardFilter_Custom_1.DtCardFilter_Custom(this, (card) => {
            let oris = card.GetOriginDigimonList();
            if (oris.length > 0) {
                if (oris[0].CardTypeIs(DtEnum_1.DtCardType.Monster)) {
                    return true;
                }
            }
            return false;
        }));
        skill.SetOperate(new DtCardOperate_SpecialOperate_1.DtCardOperate_SpecialOperate(this, this.DisEffect, DtCardOperate_SpecialOperate_1.DtSpecialOpType.SPECIAL_EFFECT));
    }
    DisEffect(card, effect) {
        this.GetManager().OnCardArmorPurge(this.parent, card, DtEnum_1.DtDegenerateType.Discard);
    }
    skill2(eff) {
        let skill = this.SetSkillPlayerChoose_Single(eff, DtEnum_1.DtSkillTargetToPlayer.Self, 2);
        skill.GetChooseMachine().SetCanCancel(true);
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.BATTLE_AREA);
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetFilter(new DtCardFilter_Custom_1.DtCardFilter_Custom(this, this.OriCanEvo));
        skill.SetOperate(new DtCardOperate_SpecialOperate_1.DtCardOperate_SpecialOperate(this, (card) => {
            this.battleCard = card;
        }, DtCardOperate_SpecialOperate_1.DtSpecialOpType.NEED_NEXT_STEP));
    }
    Skill3(eff) {
        let skill = this.SetSkillPlayerChoose_Single(eff, DtEnum_1.DtSkillTargetToPlayer.Self, 3);
        skill.type = DtSkillBase_1.DtSkillRunType.Perv_Fail_Then_Over;
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.HAND);
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetFilter(new DtCardFilter_FeatureIs_1.DtCardFilter_FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_506));
        skill.SetFilter(new DtCardFilter_Custom_1.DtCardFilter_Custom(this, this.EvoCan));
        skill.SetOperate(new DtCardOperate_SpecialOperate_1.DtCardOperate_SpecialOperate(this, this.EvoOp, DtCardOperate_SpecialOperate_1.DtSpecialOpType.SPECIAL_EFFECT));
    }
    OriCanEvo(card) {
        return this.GetPlayer().areaHand.CheckWithCondition((evo) => {
            if (evo.FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_506)) {
                return evo.CheckCanEvo(card).resultCost >= 0;
            }
            return false;
        });
    }
    EvoCan(evo) {
        if (this.battleCard == null) {
            return false;
        }
        return evo.CheckCanEvo(this.battleCard).resultCost >= 0;
    }
    EvoOp(evo) {
        let cost = evo.CheckCanEvo(this.battleCard).resultCost;
        this.GetManager().ForceDigimonEvo(this.GetPlayer(), evo, this.battleCard, cost);
        this.evocard = evo;
    }
    Effactive() {
        if (this.evocard) {
            this.GetManager().OnSetCardActiveState(this.parent, this.evocard, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        }
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT8_110_2;
//# sourceMappingURL=EC_BT8_110_2.js.map