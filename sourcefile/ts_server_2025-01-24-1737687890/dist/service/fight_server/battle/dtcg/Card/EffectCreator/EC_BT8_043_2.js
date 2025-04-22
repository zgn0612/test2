"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardOperate_AddInheritBuff_Int_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_AddInheritBuff_Int");
const DtCardOperate_SpecialOperate_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_SpecialOperate");
class EC_BT8_043_2 extends DtEnhanceEffectCreatorts_1.default {
    Count;
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnPlay);
        effect.SetCondition(this.Condition);
        this.Skill2(effect);
        let effectEvo = this.GetNewEffect();
        effectEvo.SetTriggerType(DtEffectType_1.DtEffectType.OnEvolution);
        effectEvo.SetCondition(this.Condition);
        this.Skill2(effectEvo);
    }
    Condition() {
        this.Count = this.GetPlayer().areaInBattle.GetCountWithMeetCondition((card) => { return card.CardTypeIs(DtEnum_1.DtCardType.Role); });
        return this.Count > 0;
    }
    Skill2(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 2);
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA);
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetOperate(new DtCardOperate_AddInheritBuff_Int_1.DtCardOperate_AddInheritBuff_Int(DtEnum_1.DtBuffType.CHANGE_POWER, -2, DtEnum_1.DtBuffDurationType.RoundOverOpponent));
        skill.SetOperate(new DtCardOperate_SpecialOperate_1.DtCardOperate_SpecialOperate(this, (c, e) => {
            this.Count--;
            if (this.Count > 0) {
                e.SetToStateStepWithStageId(2);
            }
        }, DtCardOperate_SpecialOperate_1.DtSpecialOpType.SPECIAL_EFFECT));
    }
}
exports.default = EC_BT8_043_2;
//# sourceMappingURL=EC_BT8_043_2.js.map