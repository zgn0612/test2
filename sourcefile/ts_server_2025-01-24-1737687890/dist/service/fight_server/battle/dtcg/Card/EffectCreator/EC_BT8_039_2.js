"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtCardFilter_CardBattleState_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardBattleState");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardOperate_AddInheritBuff_Int_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_AddInheritBuff_Int");
const DtCardOperate_ChangeState_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_ChangeState");
class EC_BT8_039_2 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnEvolution);
        this.Skill1(effect);
        this.Skill2(effect);
    }
    Skill1(effect) {
        let skill = this.SetSkillPlayerChoose_Mul(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1, 1);
        skill.GetChooseMachine().SetInitEvent(this, (chs) => {
            let c = this.GetPlayer().areaInBattle.GetCountWithMeetCondition((card) => {
                return card.CardTypeIs(DtEnum_1.DtCardType.Role);
            });
            if (c > 0) {
                chs.SetActive(true);
                chs.ChangeTypeNum(c);
            }
            else {
                chs.SetActive(false);
            }
        });
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA);
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetOperate(new DtCardOperate_ChangeState_1.DtCardOperate_ChangeState(DtEnum_1.DtCardBattleState.Reset));
    }
    Skill2(effect) {
        let skill = this.SetSkillPlayerChoose_Mul(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 3, 2);
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA);
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetFilter(new DtCardFilter_CardBattleState_1.DtCardFilter_CardBattleState(DtEnum_1.DtCardBattleState.Reset));
        skill.SetOperate(new DtCardOperate_AddInheritBuff_Int_1.DtCardOperate_AddInheritBuff_Int(DtEnum_1.DtBuffType.CHANGE_DP, -5000, DtEnum_1.DtBuffDurationType.RoundOver));
    }
}
exports.default = EC_BT8_039_2;
//# sourceMappingURL=EC_BT8_039_2.js.map