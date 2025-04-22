"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEnum_1 = require("../../Data/DtEnum");
const DtBuffChangeDP_1 = require("../Buff/DtBuffChangeDP");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtCardFilter_CardColor_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardColor");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardOperate_PlayCard_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_PlayCard");
const DtCardOperate_SpecialOperate_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_SpecialOperate");
class EC_BT9_041_1 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnEvolution);
        this.Skill1(effect);
        this.Skill2(effect);
    }
    Skill1(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.HAND);
        skill.GetChooseMachine().SetCanCancel(true);
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Role));
        skill.SetFilter(new DtCardFilter_CardColor_1.DtCardFilter_CardColor(DtEnum_1.DtCardColor.Yellow, DtEnum_1.DtCardColor.Red));
        skill.SetOperate(new DtCardOperate_PlayCard_1.DtCardOperate_PlayCard(false, true));
    }
    Skill2(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.GetChooseMachine().SetInitEvent(this, (skil) => {
            let con = this.parent.CheckOriginListWithCondition((card) => {
                return card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10021, true) || card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_11023, true);
            });
            let roleCount = this.GetPlayer().areaInBattle.GetCountWithMeetCondition((card) => {
                if (card.CardTypeIs(DtEnum_1.DtCardType.Role)) {
                    if (card.ColorIs(DtEnum_1.DtCardColor.Red) || card.ColorIs(DtEnum_1.DtCardColor.Yellow)) {
                        return true;
                    }
                }
                return false;
            });
            if (con && roleCount > 0) {
                skil.SetActive(true);
            }
            else {
                skil.SetActive(false);
            }
        });
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA);
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetOperate(new DtCardOperate_SpecialOperate_1.DtCardOperate_SpecialOperate(this, (c, effect) => {
            let roleCount = this.GetPlayer().areaInBattle.GetCountWithMeetCondition((card) => {
                if (card.CardTypeIs(DtEnum_1.DtCardType.Role)) {
                    if (card.ColorIs(DtEnum_1.DtCardColor.Red) || card.ColorIs(DtEnum_1.DtCardColor.Yellow)) {
                        return true;
                    }
                }
                return false;
            });
            effect.AddInheritBuffTo(new DtBuffChangeDP_1.DtBuffChangeDP(-2000 * roleCount).SetBuffDurationType(DtEnum_1.DtBuffDurationType.RoundOver), c);
        }, DtCardOperate_SpecialOperate_1.DtSpecialOpType.SPECIAL_EFFECT));
    }
}
exports.default = EC_BT9_041_1;
//# sourceMappingURL=EC_BT9_041_1.js.map