"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtConTriggerCardBeforeActEffect_1 = require("../Effect/TriggerCondition/DtConTriggerCardBeforeActEffect");
const DtSkillBase_1 = require("../Skill/DtSkillBase");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardFilter_NameIs_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_NameIs");
const DtCardFilter_OtherCard_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_OtherCard");
const DtCardOperate_Destory_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_Destory");
class EC_BT2_082_2 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let e3 = this.GetNewEffect();
        e3.SetTriggerArea(DtEnum_1.DtAreaType.BATTLE_AREA);
        e3.SetTriggerType(DtEffectType_1.DtEffectType.TriggerCardBeforeActEffect);
        let contr = new DtConTriggerCardBeforeActEffect_1.DtConTriggerCardBeforeActEffect(DtEnum_1.DtEffectRoundValid.Both, DtEnum_1.DtActionEffectType.AttackDestroy);
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
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.BATTLE_AREA);
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetFilter(new DtCardFilter_NameIs_1.DtCardFilter_NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10012, true));
        skill.SetFilter(new DtCardFilter_OtherCard_1.DtCardFilter_OtherCard());
        skill.GetMachineOperate().SetOperate(new DtCardOperate_Destory_1.DtCardOperate_Destory());
    }
    EffectBuff(effect) {
        this.GetManager().GetCurrentFsmActionManger().ForceOverEffect(this.parent);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT2_082_2;
//# sourceMappingURL=EC_BT2_082_2.js.map