"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtBuffChangeDP_1 = require("../Buff/DtBuffChangeDP");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtSkillBase_1 = require("../Skill/DtSkillBase");
const DtCardFilter_CardCost_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardCost");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardOperate_Destory_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_Destory");
class EC_EX2_038_1 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnEvolution);
        effect.SetOtherType(DtEffect_1.DtEffectOtherType.OneTimeingMore);
        let opsk = this.SetSkillPlayerChooseOption(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 3, 1);
        opsk.SetSkillBehavior(null, this.OnOptionChoose);
        let e2 = effect.SetEffect(this.EffectAddBuff, null).SetStage(2);
        e2.type = DtSkillBase_1.DtSkillRunType.Activate_Then_Over;
        let e3 = effect.SetEffect(this.EffectActivate, null).SetStage(3);
        e3.type = DtSkillBase_1.DtSkillRunType.Activate_Then_Over;
        let e4 = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 4);
        e4.type = DtSkillBase_1.DtSkillRunType.Activate_Then_Over;
        e4.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA);
        e4.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        e4.SetFilter(new DtCardFilter_CardCost_1.DtCardFilter_CardCost(DtEnum_1.DtFilterCompare.LESS_EQUAL, 5, DtEnum_1.DtAreaType.None));
        e4.SetOperate(new DtCardOperate_Destory_1.DtCardOperate_Destory());
    }
    OnOptionChoose(uid, effect) {
        let index = uid.toNumber() + 2;
        effect.SetToStateStepWithStageId(index);
    }
    EffectActivate(effect) {
        this.GetManager().OnSetCardActiveState(this.parent, this.parent, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        return DtEffect_1.DtEffectResult.Next;
    }
    EffectAddBuff(effect) {
        effect.AddInheritBuffTo(new DtBuffChangeDP_1.DtBuffChangeDP(2000).SetBuffDurationType(DtEnum_1.DtBuffDurationType.RoundOver), this.parent);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_EX2_038_1;
//# sourceMappingURL=EC_EX2_038_1.js.map