"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtSkillBase_1 = require("../Skill/DtSkillBase");
const DtCardOperate_Discard_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_Discard");
class EC_BT1_039_1 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnWhenAttacking);
        effect.SetOtherType(DtEffect_1.DtEffectOtherType.OneTurnMore, 2);
        effect.SetEffectActivateAsk();
        effect.SetCondition(this.Condition);
        this.skill(effect);
        effect.SetEffect(this.EffectActive, null).type = DtSkillBase_1.DtSkillRunType.Perv_Fail_Then_Over;
    }
    skill(effect) {
        let skill = this.SetSkillPlayerChoose_Single_CustomCount(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 3, 1);
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.HAND);
        skill.SetOperate(new DtCardOperate_Discard_1.DtCardOperate_Discard());
    }
    Condition(effect) {
        return this.GetPlayer().areaHand.CardCount() >= 3;
    }
    EffectActive() {
        this.GetManager().OnSetCardActiveState(this.parent, this.parent, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT1_039_1;
//# sourceMappingURL=EC_BT1_039_1.js.map