"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtSkillBase_1 = require("../Skill/DtSkillBase");
const DtCardOperate_Discard_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_Discard");
class EC_BT6_077_1 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.CreateNewBasicEffect(DtEffectType_1.DtEffectType.OnEvolution);
        effect.SetEffectActivateAsk();
        this.skill1(effect);
        let buffskill = effect.SetEffect(this.AddBuff, null);
        buffskill.type = DtSkillBase_1.DtSkillRunType.Perv_Fail_Then_Over;
    }
    skill1(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.HAND);
        skill.SetOperate(new DtCardOperate_Discard_1.DtCardOperate_Discard());
    }
    AddBuff() {
        this.CreateEffectTo(new EC_BT6_077_1_ADD(), this.parent, false);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT6_077_1;
class EC_BT6_077_1_ADD extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.CreateTimeEffectToCard(this.parent, DtEnum_1.DtBuffDurationType.RoundOverOpponent, 1);
        this.SetMichizureEffect(effect);
        let effect2 = this.CreateTimeEffectToCard(this.parent, DtEnum_1.DtBuffDurationType.RoundOverOpponent, 1);
        this.SetBlockEffect(effect2);
    }
}
//# sourceMappingURL=EC_BT6_077_1.js.map