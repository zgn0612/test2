"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtSkillBase_1 = require("../Skill/DtSkillBase");
const DtCardFilter_Custom_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_Custom");
const DtCardFilter_FeatureIs_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_FeatureIs");
const DtCardOperate_DiscardOriginCard_ParentDiscard_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_DiscardOriginCard_ParentDiscard");
const DtCardOperate_ReturnTo_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_ReturnTo");
const DtCardOperate_SpecialOperate_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_SpecialOperate");
class EC_BT7_029_1 extends DtEnhanceEffectCreatorts_1.default {
    handCard;
    SetEffect() {
        let effectEvo = this.GetNewEffect();
        effectEvo.SetTriggerType(DtEffectType_1.DtEffectType.OnEvolution);
        effectEvo.SetOtherType(DtEffect_1.DtEffectOtherType.OneTurnOnce);
        effectEvo.SetInitFunc(this.SetRound);
        this.Skill1(effectEvo);
        this.Skill2(effectEvo);
        effectEvo.SetEffectActivateAsk();
        let effectAttack = this.GetNewEffect();
        effectAttack.SetTriggerType(DtEffectType_1.DtEffectType.OnWhenAttacking);
        effectAttack.SetOtherType(DtEffect_1.DtEffectOtherType.OneTurnOnce);
        effectAttack.SetInitFunc(this.SetRound);
        this.Skill1(effectAttack);
        this.Skill2(effectAttack);
        effectAttack.SetEffectActivateAsk();
        this.BindOneTurnOnceEffect(effectEvo, effectAttack);
    }
    Skill1(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.GetMachineFilter().GetCardsFromSelfOrigin();
        skill.SetFilter(new DtCardFilter_FeatureIs_1.DtCardFilter_FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_505));
        skill.SetOperate(new DtCardOperate_DiscardOriginCard_ParentDiscard_1.DtCardOperate_DiscardOriginCard_ParentDiscard(DtEnum_1.DtAreaType.HAND));
        skill.SetOperate(new DtCardOperate_SpecialOperate_1.DtCardOperate_SpecialOperate(this, (card) => { this.handCard = card; }, DtCardOperate_SpecialOperate_1.DtSpecialOpType.NEED_NEXT_STEP));
    }
    Skill2(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 2);
        skill.type = DtSkillBase_1.DtSkillRunType.Perv_Fail_Then_Over;
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA);
        skill.SetFilter(new DtCardFilter_Custom_1.DtCardFilter_Custom(this, (card) => {
            return card.CardLvIs(DtEnum_1.DtFilterCompare.EQUAL, this.handCard.GetCardConfigLv());
        }));
        skill.SetOperate(new DtCardOperate_ReturnTo_1.DtCardOperate_ReturnTo(DtEnum_1.DtActionEffectType.BattleReturnHand, 0));
    }
    SetRound() {
        this.handCard = null;
    }
}
exports.default = EC_BT7_029_1;
//# sourceMappingURL=EC_BT7_029_1.js.map