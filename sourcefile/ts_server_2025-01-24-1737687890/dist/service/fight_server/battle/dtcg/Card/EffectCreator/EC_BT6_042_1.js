"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtSkillBase_1 = require("../Skill/DtSkillBase");
const DtCardFilter_CardColor_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardColor");
const DtCardFilter_CardLv_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardLv");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardFilter_NameIs_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_NameIs");
const DtCardOperate_PlayCard_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_PlayCard");
class EC_BT6_042_1 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.CreateNewBasicEffect(DtEffectType_1.DtEffectType.OnDestory);
        effect.SetCondition(this.Con);
        effect.SetEffectActivateAsk();
        effect.SetEffect(this.Fork, null);
        let skill = this.SetSkillPlayerChooseOption(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 2, 1);
        skill.SetSkillBehavior(null, this.OnChoose);
        this.CreateEffQiangwei(effect);
        this.Create2Yellow(effect);
    }
    CreateEffQiangwei(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 2);
        skill.type = DtSkillBase_1.DtSkillRunType.Activate_Then_Over;
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.HAND);
        skill.SetFilter(new DtCardFilter_NameIs_1.DtCardFilter_NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10071, true));
        skill.SetOperate(new DtCardOperate_PlayCard_1.DtCardOperate_PlayCard(false, true));
    }
    Create2Yellow(effect) {
        let skill = this.SetSkillPlayerChoose_Mul(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 2, 3);
        skill.type = DtSkillBase_1.DtSkillRunType.Activate_Then_Over;
        skill.GetChooseMachine().SetInitEvent(this, (choose) => {
            let count = this.GetPlayer().GetBattleCardsReLimit();
            if (count > 1) {
                choose.SetActive(true);
                choose.ChangeTypeNum(2);
            }
            else if (count == 1) {
                choose.SetActive(true);
                choose.ChangeTypeNum(1);
            }
            else {
                choose.SetActive(false);
            }
        });
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.HAND);
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetFilter(new DtCardFilter_CardColor_1.DtCardFilter_CardColor(DtEnum_1.DtCardColor.Yellow));
        skill.SetFilter(new DtCardFilter_CardLv_1.DtCardFilter_CardLv(DtEnum_1.DtFilterCompare.EQUAL, 3));
        skill.SetOperate(new DtCardOperate_PlayCard_1.DtCardOperate_PlayCard(false, true));
    }
    Con() {
        if (this.GetPlayer().areaHand.CheckWithCondition((card) => { return card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10071, true); })) {
            return true;
        }
        if (this.GetPlayer().areaHand.CheckWithCondition((card) => {
            return card.CardTypeIs(DtEnum_1.DtCardType.Monster) && card.ColorIs(DtEnum_1.DtCardColor.Yellow) && card.CardLvIs(DtEnum_1.DtFilterCompare.EQUAL, this.GetLvToEff(3));
        })) {
            return true;
        }
        return false;
    }
    Fork(effect) {
        let hasqiangwei = this.GetPlayer().areaHand.CheckWithCondition((card) => { return card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10071, true); });
        let hasyellow = this.GetPlayer().areaHand.CheckWithCondition((card) => { return card.CardTypeIs(DtEnum_1.DtCardType.Monster) && card.ColorIs(DtEnum_1.DtCardColor.Yellow) && card.CardLvIs(DtEnum_1.DtFilterCompare.EQUAL, this.GetLvToEff(3)); });
        if (hasqiangwei == false && hasyellow) {
            effect.SetToStateStepWithStageId(3);
        }
        else if (hasyellow == false && hasqiangwei) {
            effect.SetToStateStepWithStageId(2);
        }
        return DtEffect_1.DtEffectResult.Next;
    }
    OnChoose(uid, effect) {
        let num = uid.toNumber();
        if (num == 0) {
            effect.SetToStateStepWithStageId(2);
        }
        else {
            effect.SetToStateStepWithStageId(3);
        }
    }
}
exports.default = EC_BT6_042_1;
//# sourceMappingURL=EC_BT6_042_1.js.map