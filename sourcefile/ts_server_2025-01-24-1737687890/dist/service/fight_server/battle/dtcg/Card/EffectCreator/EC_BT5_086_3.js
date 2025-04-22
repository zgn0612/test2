"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtConTriggerCardBeforeActEffect_1 = require("../Effect/TriggerCondition/DtConTriggerCardBeforeActEffect");
const DtSkillBase_1 = require("../Skill/DtSkillBase");
const DtCardFilter_CardLv_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardLv");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardOperate_DiscardOriginCard_ParentDiscard_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_DiscardOriginCard_ParentDiscard");
class EC_BT5_086_3 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let e3 = this.GetNewEffect();
        e3.SetTriggerArea(DtEnum_1.DtAreaType.BATTLE_AREA);
        e3.SetTriggerType(DtEffectType_1.DtEffectType.TriggerCardBeforeActEffect);
        let contr = new DtConTriggerCardBeforeActEffect_1.DtConTriggerCardBeforeActEffect(DtEnum_1.DtEffectRoundValid.Both, DtEnum_1.DtActionEffectType.EffectDestroy, DtEnum_1.DtActionEffectType.BattleReturnHand, DtEnum_1.DtActionEffectType.BattleReturnDeck);
        contr.SetCasterCardCon(DtEnum_1.DtCardType.None, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Opponent);
        contr.SetCondition(this, (msg) => {
            return msg.ReceiveHas(this.parent);
        });
        e3.SetTriggerCondition(contr);
        e3.SetEffectActivateAsk();
        this.SetSkill1(e3);
        let skill = e3.SetEffect(this.EffectBuff, null);
        skill.type = DtSkillBase_1.DtSkillRunType.Perv_Fail_Then_Over;
    }
    SetSkill1(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.GetMachineFilter().GetCardsFromSelfOrigin();
        skill.GetMachineFilter().SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.GetMachineFilter().SetFilter(new DtCardFilter_CardLv_1.DtCardFilter_CardLv(DtEnum_1.DtFilterCompare.EQUAL, 6));
        skill.GetMachineOperate().SetOperate(new DtCardOperate_DiscardOriginCard_ParentDiscard_1.DtCardOperate_DiscardOriginCard_ParentDiscard(DtEnum_1.DtAreaType.GY));
    }
    EffectBuff(effect) {
        this.GetManager().GetCurrentFsmActionManger().ForceOverEffect(this.parent);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT5_086_3;
//# sourceMappingURL=EC_BT5_086_3.js.map