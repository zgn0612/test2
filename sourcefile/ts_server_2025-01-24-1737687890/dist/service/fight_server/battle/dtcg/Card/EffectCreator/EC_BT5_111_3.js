"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtConTriggerWhenAttacking_1 = require("../Effect/TriggerCondition/DtConTriggerWhenAttacking");
const DtCardOperate_DiscardOriginCard_ParentDiscard_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_DiscardOriginCard_ParentDiscard");
class EC_BT5_111_3 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerWhenOppAttacking);
        let tricon = new DtConTriggerWhenAttacking_1.DtConTriggerWhenAttacking(DtEnum_1.DtEffectRoundValid.Opponent);
        tricon.SetAtkCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Opponent);
        effect.SetTriggerCondition(tricon);
        effect.SetCondition(this.e2Condition);
        let skill = this.SetSkillPlayerChoose_Single_CustomCount(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 2, 1);
        skill.GetMachineFilter().GetCardsFromSelfOrigin();
        skill.SetOperate(new DtCardOperate_DiscardOriginCard_ParentDiscard_1.DtCardOperate_DiscardOriginCard_ParentDiscard(DtEnum_1.DtAreaType.GY));
        effect.SetEffect(this.e2Eff, null);
        effect.SetEffectActivateAsk();
    }
    e2Condition() {
        return this.parent.GetOriginDigimonCount() >= 2;
    }
    e2Eff() {
        this.GetManager().OnForceAttackOver();
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT5_111_3;
//# sourceMappingURL=EC_BT5_111_3.js.map