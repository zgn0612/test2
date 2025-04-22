"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtCardFilter_CardLv_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardLv");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardOperate_Destory_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_Destory");
class EC_BT7_108_1 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnUseEffect);
        this.skill2(effect);
    }
    skill2(eff) {
        let skill = this.SetSkillPlayerChoose_Mul(eff, DtEnum_1.DtSkillTargetToPlayer.Self, 1, 2);
        skill.GetChooseMachine().SetInitEvent(this, (cose) => {
            let c = this.GetPlayer().areaInBattle.GetCountWithMeetCondition((card) => {
                if (card.CardTypeIs(DtEnum_1.DtCardType.Role)) {
                    return true;
                }
                if (card.CardTypeIs(DtEnum_1.DtCardType.Monster)) {
                    if (card.FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_505)) {
                        return true;
                    }
                }
                return false;
            });
            if (c > 0) {
                cose.SetActive(true);
                cose.ChangeTypeNum(c);
            }
            else {
                cose.SetActive(false);
            }
        });
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA);
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetFilter(new DtCardFilter_CardLv_1.DtCardFilter_CardLv(DtEnum_1.DtFilterCompare.LESS_EQUAL, 5));
        skill.SetOperate(new DtCardOperate_Destory_1.DtCardOperate_Destory());
    }
}
exports.default = EC_BT7_108_1;
//# sourceMappingURL=EC_BT7_108_1.js.map