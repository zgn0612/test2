"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtConTriggerWhenAttacking_1 = require("../Effect/TriggerCondition/DtConTriggerWhenAttacking");
const DtSkillBase_1 = require("../Skill/DtSkillBase");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardOperate_ChangeState_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_ChangeState");
class EC_EX2_061_2 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerWhenAttacking);
        let coni = new DtConTriggerWhenAttacking_1.DtConTriggerWhenAttacking(DtEnum_1.DtEffectRoundValid.Self);
        let concard = coni.SetAtkCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Self);
        concard.SetCondition(this, (card) => {
            return card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10309) || card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10313);
        });
        effect.SetTriggerCondition(coni);
        effect.SetEffectActivateAsk();
        effect.SetCondition(this.Con);
        this.SetDirectSkill(effect, new DtCardOperate_ChangeState_1.DtCardOperate_ChangeState(DtEnum_1.DtCardBattleState.Reset));
        this.skill(effect);
    }
    Con() {
        return this.parent.cardBattleState == DtEnum_1.DtCardBattleState.Activate;
    }
    skill(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.type = DtSkillBase_1.DtSkillRunType.Perv_Fail_Then_Over;
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA);
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetOperate(new DtCardOperate_ChangeState_1.DtCardOperate_ChangeState(DtEnum_1.DtCardBattleState.Reset));
    }
}
exports.default = EC_EX2_061_2;
//# sourceMappingURL=EC_EX2_061_2.js.map