"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtBuffChangeDP_1 = require("../Buff/DtBuffChangeDP");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardOperate_SpecialOperate_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_SpecialOperate");
class EC_BT2_098_1 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnUseEffect);
        effect.SetEffect(this.EffectDraw, null);
        this.Skill(effect);
    }
    EffectDraw() {
        this.GetManager().OnDrawCard(this.parent, 1, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        return DtEffect_1.DtEffectResult.Next;
    }
    Skill(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA);
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetOperate(new DtCardOperate_SpecialOperate_1.DtCardOperate_SpecialOperate(this, this.OnBuff, DtCardOperate_SpecialOperate_1.DtSpecialOpType.SPECIAL_EFFECT, this.GetClientDesc));
    }
    OnBuff(card, effect) {
        let handCount = this.GetPlayer().areaHand.CardCount();
        effect.AddInheritBuffTo(new DtBuffChangeDP_1.DtBuffChangeDP(-1000 * handCount).SetBuffDurationType(DtEnum_1.DtBuffDurationType.RoundOver), card);
    }
    GetClientDesc() {
        let desc = new DtMessageData_1.DtSkillReasonDesc();
        desc.reason = DtEnum_1.DtSkillReason.AddBuffWithSelfHandCount;
        desc.type = DtEnum_1.DtBuffType.CHANGE_DP;
        desc.num = -1;
        return desc;
    }
}
exports.default = EC_BT2_098_1;
//# sourceMappingURL=EC_BT2_098_1.js.map