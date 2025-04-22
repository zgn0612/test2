"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protoMsg_1 = require("../../../../cmn/proto/protoMsg");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEnum_1 = require("../../Data/DtEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtGroupBrowseCardsCreator_1 = require("../Effect/DtGroupBrowseCardsCreator");
const DtGroupSkillPlayerBrowse_1 = require("../Skill/DtGroupSkillPlayerBrowse");
const DtSkillBase_1 = require("../Skill/DtSkillBase");
const DtCardFilter_CardCost_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardCost");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardFilter_Custom_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_Custom");
const DtCardFilter_FeatureIs_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_FeatureIs");
const DtCardFilter_OtherCard_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_OtherCard");
const DtCardOperate_MoveTo_Hand_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_MoveTo_Hand");
const DtCardOperate_PlayCard_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_PlayCard");
const DtCardOperate_SetOrigin_ChooseIsParent_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_SetOrigin_ChooseIsParent");
const DtPlayerChooseBase_1 = require("../Skill/DtSkillPlayerChoose/DtPlayerChooseBase");
class EC_ST13_02_1 extends DtGroupBrowseCardsCreator_1.default {
    SetEffect() {
        this.ChangeBrowseCount(1);
        let effect = this.CreateNewBasicEffect(DtEffectType_1.DtEffectType.OnPlay);
        effect.SetEffectActivateAsk();
        this.Skill1(effect);
        this.Skill2(effect);
    }
    Skill1(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.BATTLE_AREA);
        skill.SetFilter(new DtCardFilter_OtherCard_1.DtCardFilter_OtherCard());
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetFilter(new DtCardFilter_Custom_1.DtCardFilter_Custom(this, (card) => {
            return card.FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_140) || card.ColorIs(DtEnum_1.DtCardColor.Black);
        }));
        skill.SetOperate(new DtCardOperate_SetOrigin_ChooseIsParent_1.DtCardOperate_SetOrigin_ChooseIsParent(0));
    }
    Skill2(effect) {
        let group = new DtGroupSkillPlayerBrowse_1.DtGroupSkillPlayerBrowse(effect, this, protoMsg_1.DcgProto.E_SHOW_TO_PLAYER_TYPE.STPT_BOTH, DtEnum_1.DtAreaType.DECK);
        group.SetFirstType(DtSkillBase_1.DtSkillRunType.Perv_Fail_Then_Over);
        group.SetCards(this.GetDeckCards);
        group.SetOperate((skill) => {
            skill.SetChooseMachine(new DtPlayerChooseBase_1.DtPlayerChooseBase(skill, DtEnum_1.DtSkillTargetToPlayer.Self, DtMessageData_1.DtProtoEnum_Compare.EQUAL_CARD_COUNT, 1, false));
            skill.GetChooseMachine().SetCanCancel(true);
            skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
            skill.SetFilter(new DtCardFilter_CardCost_1.DtCardFilter_CardCost(DtEnum_1.DtFilterCompare.LESS_EQUAL, 7, DtEnum_1.DtAreaType.None));
            skill.SetFilter(new DtCardFilter_FeatureIs_1.DtCardFilter_FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_140));
            skill.SetOperate(new DtCardOperate_PlayCard_1.DtCardOperate_PlayCard(false, true));
        });
        group.SetOperate(this.Tohand, false);
        group.RegisterToEffect(effect);
    }
    Tohand(skill) {
        skill.SetOperate(new DtCardOperate_MoveTo_Hand_1.DtCardOperate_MoveTo_Hand());
    }
}
exports.default = EC_ST13_02_1;
//# sourceMappingURL=EC_ST13_02_1.js.map