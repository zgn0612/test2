"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtSkillBase_1 = require("../Skill/DtSkillBase");
const DtCardFilter_CardDP_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardDP");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardOperate_Destory_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_Destory");
class EC_EX2_012_2 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.CreateNewBasicEffect(DtEffectType_1.DtEffectType.OnEvolution);
        this.skill1(effect);
        let buff = effect.SetEffect(this.AddBuff, null);
        buff.type = DtSkillBase_1.DtSkillRunType.Perv_SUCCESS_Then_Over;
    }
    skill1(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA);
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetFilter(new DtCardFilter_CardDP_1.DtCardFilter_CardDP(DtEnum_1.DtFilterCompare.LESS_EQUAL, 10000));
        skill.SetOperate(new DtCardOperate_Destory_1.DtCardOperate_Destory());
    }
    AddBuff(effect) {
        this.GetManager().OnDiscardDeckTopCard(this.parent, this.GetPlayer(), 5);
        this.GetManager().OnDiscardDeckTopCard(this.parent, this.GetOppPlayer(), 5);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_EX2_012_2;
//# sourceMappingURL=EC_EX2_012_2.js.map