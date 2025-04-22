"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtConst_1 = require("../../Data/DtConst");
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtConTriggerCardBeforeActEffect_1 = require("../Effect/TriggerCondition/DtConTriggerCardBeforeActEffect");
const DtCardFilter_Custom_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_Custom");
const DtCardOperate_PlayCard_FromParentOrigin_Reset_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_PlayCard_FromParentOrigin_Reset");
class EC_BT7_063_2 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerCardBeforeActEffect);
        effect.SetTriggerArea(DtEnum_1.DtAreaType.BATTLE_AREA);
        let contr = new DtConTriggerCardBeforeActEffect_1.DtConTriggerCardBeforeActEffect(DtEnum_1.DtEffectRoundValid.Both, ...DtConst_1.DtConst.ACTION_DESTORY);
        contr.SetCondition(this, (msg) => {
            return msg.ReceiveHas(this.parent);
        });
        effect.SetTriggerCondition(contr);
        effect.SetEffectActivateAsk();
        this.Group1(effect);
        this.Group2(effect);
    }
    Group1(effect) {
        effect.SetEffectGroup("g1", this.BattleNormalPlayMulCard, () => {
            this.Skill1(effect);
            this.Skill2(effect);
        });
    }
    Group2(effect) {
        effect.SetEffectGroup("g2", this.BattleOnlayOnePlayCard, () => {
            let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 3);
            skill.GetMachineFilter().GetCardsFromSelfOrigin();
            skill.SetFilter(new DtCardFilter_Custom_1.DtCardFilter_Custom(this, (card) => {
                return card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10905, true) || card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10907, true);
            }));
            skill.SetOperate(new DtCardOperate_PlayCard_FromParentOrigin_Reset_1.DtCardOperate_PlayCard_FromParentOrigin_Reset(false, true));
        });
    }
    Skill1(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.GetMachineFilter().GetCardsFromSelfOrigin();
        skill.SetFilter(new DtCardFilter_Custom_1.DtCardFilter_Custom(this, (card) => {
            return card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10905, true);
        }));
        skill.SetOperate(new DtCardOperate_PlayCard_FromParentOrigin_Reset_1.DtCardOperate_PlayCard_FromParentOrigin_Reset(false, true));
    }
    Skill2(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 2);
        skill.GetMachineFilter().GetCardsFromSelfOrigin();
        skill.SetFilter(new DtCardFilter_Custom_1.DtCardFilter_Custom(this, (card) => {
            return card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10907, true);
        }));
        skill.SetOperate(new DtCardOperate_PlayCard_FromParentOrigin_Reset_1.DtCardOperate_PlayCard_FromParentOrigin_Reset(false, true));
    }
}
exports.default = EC_BT7_063_2;
//# sourceMappingURL=EC_BT7_063_2.js.map