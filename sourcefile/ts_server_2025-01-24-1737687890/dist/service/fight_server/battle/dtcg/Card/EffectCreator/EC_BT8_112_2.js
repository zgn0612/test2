"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtSkillBase_1 = require("../Skill/DtSkillBase");
const DtCardFilter_CardColorCount_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardColorCount");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardFilter_HasOriginCards_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_HasOriginCards");
const DtCardOperate_DiscardOriginCard_ParentDiscard_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_DiscardOriginCard_ParentDiscard");
const DtCardOperate_DiscardOriginCard_TopOrBottom_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_DiscardOriginCard_TopOrBottom");
const DtCardOperate_ReturnTo_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_ReturnTo");
class EC_BT8_112_2 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effectevo = this.GetNewEffect();
        effectevo.SetTriggerType(DtEffectType_1.DtEffectType.OnEvolution);
        effectevo.SetEffectActivateAsk();
        this.Skill1(effectevo);
        this.Skill2(effectevo);
        this.Skill3(effectevo);
        let effectatk = this.GetNewEffect();
        effectatk.SetTriggerType(DtEffectType_1.DtEffectType.OnWhenAttacking);
        effectatk.SetEffectActivateAsk();
        this.Skill1(effectatk);
        this.Skill2(effectatk);
        this.Skill3(effectatk);
    }
    Skill1(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.GetMachineFilter().GetCardsFromSelfOrigin();
        skill.SetFilter(new DtCardFilter_CardColorCount_1.DtCardFilter_CardColorCount(DtEnum_1.DtFilterCompare.EQUAL, 2));
        skill.SetOperate(new DtCardOperate_DiscardOriginCard_ParentDiscard_1.DtCardOperate_DiscardOriginCard_ParentDiscard(DtEnum_1.DtAreaType.DECK));
    }
    Skill2(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 2);
        skill.type = DtSkillBase_1.DtSkillRunType.Perv_Fail_Then_Skip;
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA);
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetOperate(new DtCardOperate_DiscardOriginCard_TopOrBottom_1.DtCardOperate_DiscardOriginCard_TopOrBottom(0, 50));
    }
    Skill3(effect) {
        let skill = this.SetSkillPlayerChoose_Sort(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 3);
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA);
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetFilter(new DtCardFilter_HasOriginCards_1.DtCardFilter_OriginCards(DtEnum_1.DtFilterCompare.EQUAL, 0));
        skill.SetOperate(new DtCardOperate_ReturnTo_1.DtCardOperate_ReturnTo(DtEnum_1.DtActionEffectType.BattleReturnDeck, 0));
    }
}
exports.default = EC_BT8_112_2;
//# sourceMappingURL=EC_BT8_112_2.js.map