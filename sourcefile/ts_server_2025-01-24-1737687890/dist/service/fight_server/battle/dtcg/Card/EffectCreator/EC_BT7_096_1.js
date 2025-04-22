"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtSkillBase_1 = require("../Skill/DtSkillBase");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardFilter_Custom_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_Custom");
const DtCardOperate_PlayCard_FromCustomOrigin_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_PlayCard_FromCustomOrigin");
const DtCardOperate_SpecialOperate_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_SpecialOperate");
class EC_BT7_096_1 extends DtEnhanceEffectCreatorts_1.default {
    battleCard;
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnUseEffect);
        effect.SetInitFunc(this.initfunc);
        this.Skill1(effect);
        this.Skill2(effect);
    }
    initfunc() {
        this.battleCard = null;
    }
    Skill1(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.GetChooseMachine().SetCanCancel(true);
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.BATTLE_AREA);
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetOperate(new DtCardOperate_SpecialOperate_1.DtCardOperate_SpecialOperate(this, (card) => {
            this.battleCard = card;
        }, DtCardOperate_SpecialOperate_1.DtSpecialOpType.NEED_NEXT_STEP));
    }
    Skill2(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 2);
        skill.type = DtSkillBase_1.DtSkillRunType.Perv_Fail_Then_Over;
        skill.GetMachineFilter().GetCardsWitchCustom((effec) => {
            return this.battleCard.GetOriginDigimonList();
        });
        skill.SetFilter(new DtCardFilter_Custom_1.DtCardFilter_Custom(this, (card) => {
            if (card.CardTypeIs(DtEnum_1.DtCardType.Role)) {
                return true;
            }
            if (card.CardTypeIs(DtEnum_1.DtCardType.Monster)) {
                if (card.FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_505)) {
                    return true;
                }
            }
            return false;
        }));
        skill.SetOperate(new DtCardOperate_PlayCard_FromCustomOrigin_1.DtCardOperate_PlayCard_FromCustomOrigin(false, true, this, () => { return this.battleCard; }));
    }
}
exports.default = EC_BT7_096_1;
//# sourceMappingURL=EC_BT7_096_1.js.map