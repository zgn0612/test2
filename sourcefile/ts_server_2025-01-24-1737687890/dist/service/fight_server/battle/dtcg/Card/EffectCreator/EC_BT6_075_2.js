"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtSkillBase_1 = require("../Skill/DtSkillBase");
const DtCardFilter_Custom_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_Custom");
const DtCardOperate_SetOrigin_ChooseIsOrigin_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_SetOrigin_ChooseIsOrigin");
const DtCardOperate_SpecialOperate_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_SpecialOperate");
class EC_BT6_075_2 extends DtEnhanceEffectCreatorts_1.default {
    topCard;
    bottomCard;
    SetEffect() {
        let effect = this.CreateNewBasicEffect(DtEffectType_1.DtEffectType.OnPlay);
        effect.SetEffectActivateAsk();
        effect.SetInitFunc(() => {
            this.topCard = null;
            this.bottomCard = null;
        });
        this.Skill1(effect);
        this.Skill2(effect);
        effect.SetEffect(this.Draw, null);
    }
    Skill1(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.GY);
        skill.SetFilter(new DtCardFilter_Custom_1.DtCardFilter_Custom(this, (card) => {
            return card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10698, true) || card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10699, true);
        }));
        skill.SetOperate(new DtCardOperate_SetOrigin_ChooseIsOrigin_1.DtCardOperate_SetOrigin_ChooseIsOrigin(0));
        skill.SetOperate(new DtCardOperate_SpecialOperate_1.DtCardOperate_SpecialOperate(this, (card, eff) => {
            this.topCard = card;
        }, DtCardOperate_SpecialOperate_1.DtSpecialOpType.NEED_NEXT_STEP));
    }
    Skill2(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 2);
        skill.type = DtSkillBase_1.DtSkillRunType.Perv_Fail_Then_Over;
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.GY);
        skill.SetFilter(new DtCardFilter_Custom_1.DtCardFilter_Custom(this, (card) => {
            if (this.topCard.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10698, true)) {
                return card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10699, true);
            }
            else {
                return card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10698, true);
            }
        }));
        skill.SetOperate(new DtCardOperate_SetOrigin_ChooseIsOrigin_1.DtCardOperate_SetOrigin_ChooseIsOrigin(0));
        skill.SetOperate(new DtCardOperate_SpecialOperate_1.DtCardOperate_SpecialOperate(this, (card, eff) => {
            this.bottomCard = card;
        }, DtCardOperate_SpecialOperate_1.DtSpecialOpType.NEED_NEXT_STEP));
    }
    Draw() {
        if (this.topCard && this.bottomCard) {
            this.GetManager().OnDrawCard(this.parent, 1, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
            this.ThisCardUseCost(-1);
        }
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT6_075_2;
//# sourceMappingURL=EC_BT6_075_2.js.map