"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtConTriggerWhenAttacking_1 = require("../Effect/TriggerCondition/DtConTriggerWhenAttacking");
const DtSkillBase_1 = require("../Skill/DtSkillBase");
const DtCardFilter_NameIs_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_NameIs");
const DtCardOperate_ChangeState_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_ChangeState");
const DtCardOperate_ForceEvo_tobattleCard_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_ForceEvo_tobattleCard");
class EC_EX2_065_2 extends DtEnhanceEffectCreatorts_1.default {
    atkCard;
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetInitFunc(() => { this.atkCard = null; });
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerWhenAttacking);
        let coni = new DtConTriggerWhenAttacking_1.DtConTriggerWhenAttacking(DtEnum_1.DtEffectRoundValid.Self);
        coni.SetAtkCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Self);
        effect.SetTriggerCondition(coni);
        effect.SetCondition(this.Con);
        effect.SetEffectActivateAsk();
        this.SetDirectSkill(effect, new DtCardOperate_ChangeState_1.DtCardOperate_ChangeState(DtEnum_1.DtCardBattleState.Reset));
        effect.SetEffect(this.Effect, null).type = DtSkillBase_1.DtSkillRunType.Perv_Fail_Then_Over;
        this.Skill(effect);
    }
    Con() {
        return this.parent.cardBattleState == DtEnum_1.DtCardBattleState.Activate;
    }
    Effect(effect) {
        let msg = effect.eventMsg;
        this.atkCard = msg.atkCard;
        this.GetManager().OnDiscardDeckTopCard(this.parent, this.GetPlayer(), 1);
        return DtEffect_1.DtEffectResult.Next;
    }
    Skill(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.GetChooseMachine().SetCanCancel(true);
        skill.GetChooseMachine().SetInitEvent(this, (choose) => {
            if (this.atkCard && this.atkCard.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10276, true) && this.atkCard.whereAreaType == DtEnum_1.DtAreaType.BATTLE_AREA) {
                choose.SetActive(true);
            }
            else {
                choose.SetActive(false);
            }
        });
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.GY);
        skill.SetFilter(new DtCardFilter_NameIs_1.DtCardFilter_NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_11012, true));
        skill.SetOperate(new DtCardOperate_ForceEvo_tobattleCard_1.DtCardOperate_ForceEvo_tobattleCard(3, this, () => { return this.atkCard; }));
    }
}
exports.default = EC_EX2_065_2;
//# sourceMappingURL=EC_EX2_065_2.js.map