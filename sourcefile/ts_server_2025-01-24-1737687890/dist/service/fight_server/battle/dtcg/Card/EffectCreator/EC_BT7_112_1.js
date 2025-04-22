"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtBuffSpecialEvoCondition_1 = require("../Buff/DtBuffSpecialEvoCondition");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardFilter_Custom_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_Custom");
const DtCardOperate_MoveToBottom_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_MoveToBottom");
const DtCardOperate_SpecialOperate_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_SpecialOperate");
class EC_BT7_112_1 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnUseEffect);
        effect.SetTriggerArea(DtEnum_1.DtAreaType.HAND);
        effect.SetCondition(this.Con);
        this.Skill1(effect);
        this.Skill2(effect);
        effect.SetEffect(this.Effect3, null);
    }
    Con() {
        let gycount = this.GetPlayer().areaGraveyard.GetCountWithMeetCondition((card) => {
            return card.CardTypeIs(DtEnum_1.DtCardType.Role) || card.FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_505);
        });
        let handcount = this.GetPlayer().areaHand.GetCountWithMeetCondition((card) => {
            return card.CardTypeIs(DtEnum_1.DtCardType.Role) || card.FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_505);
        });
        return gycount + handcount >= 10;
    }
    Skill1(effect) {
        let skill = this.SetSkillPlayerChoose_Single_CustomCount(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 10, 1);
        skill.GetChooseMachine().compareExtend = DtEnum_1.DtCompareExtend.NeedNum;
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.HAND, DtEnum_1.DtAreaType.GY);
        skill.SetFilter(new DtCardFilter_Custom_1.DtCardFilter_Custom(this, (card) => {
            return card.CardTypeIs(DtEnum_1.DtCardType.Role) || card.FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_505);
        }));
        skill.SetOperate(new DtCardOperate_MoveToBottom_1.DtCardOperate_MoveToBottom(DtEnum_1.DtAreaType.DECK));
    }
    Skill2(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 2);
        skill.GetChooseMachine().SetCanCancel(true);
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.BATTLE_AREA);
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Role));
        skill.SetOperate(new DtCardOperate_SpecialOperate_1.DtCardOperate_SpecialOperate(this, (card, effect) => {
            let fsmevo = this.GetManager().ForceDigimonEvo(this.GetPlayer(), this.parent, card, 7);
            let buff = new DtBuffSpecialEvoCondition_1.DtBuffSpecialEvoCondition(null, null, DtBuffSpecialEvoCondition_1.SpecialEvoType.EvoCheckOri, false);
            buff.SetSeenData(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.None, 6);
            fsmevo.evoBuff = buff;
        }, DtCardOperate_SpecialOperate_1.DtSpecialOpType.SPECIAL_EFFECT));
    }
    Effect3() {
        if (this.parent.whereAreaType == DtEnum_1.DtAreaType.HAND) {
            this.GetManager().OnCardMoveTo(this.parent, this.parent, DtEnum_1.DtAreaType.GY, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        }
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT7_112_1;
//# sourceMappingURL=EC_BT7_112_1.js.map