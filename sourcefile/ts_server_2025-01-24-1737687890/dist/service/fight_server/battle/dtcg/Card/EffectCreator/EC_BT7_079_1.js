"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtCardFilter_CardColor_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardColor");
const DtCardFilter_CardLv_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardLv");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardOperate_Destory_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_Destory");
const DtCardOperate_PlayCard_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_PlayCard");
class EC_BT7_079_1 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnEvolution);
        this.skill1(effect);
        this.skill2(effect);
    }
    skill1(eff) {
        let skill = this.SetSkillPlayerChoose_Single(eff, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.GetChooseMachine().SetCanCancel(true);
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.GY);
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Role));
        skill.SetFilter(new DtCardFilter_CardColor_1.DtCardFilter_CardColor(DtEnum_1.DtCardColor.Purple));
        skill.SetOperate(new DtCardOperate_PlayCard_1.DtCardOperate_PlayCard(false, true));
    }
    skill2(eff) {
        let skill = this.SetSkillPlayerChoose_Mul(eff, DtEnum_1.DtSkillTargetToPlayer.Self, 1, 2);
        skill.GetChooseMachine().SetInitEvent(this, (cose) => {
            let c = this.GetPlayer().areaInBattle.GetCountWithMeetCondition((card) => {
                return card.CardTypeIs(DtEnum_1.DtCardType.Role);
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
        skill.SetFilter(new DtCardFilter_CardLv_1.DtCardFilter_CardLv(DtEnum_1.DtFilterCompare.LESS_EQUAL, 4));
        skill.SetOperate(new DtCardOperate_Destory_1.DtCardOperate_Destory());
    }
}
exports.default = EC_BT7_079_1;
//# sourceMappingURL=EC_BT7_079_1.js.map